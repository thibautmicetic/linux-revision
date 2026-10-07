/* Contexte d'exécution des commandes + commandes internes de bash (builtins). */
(function () {
  'use strict';
  const APP = window.APP;
  const SIM = APP.SIM;
  const perm = APP.perm;
  const B = (SIM.builtins = {});

  /* ================= contexte d'une commande ================= */
  class CmdCtx {
    constructor(sh, ctx, name, args, proc, envOver) {
      this.sh = sh; this.ctx = ctx; this.name = name; this.args = args; this.proc = proc;
      this.f = ctx.frame; this.sys = ctx.frame.sys; this.cred = ctx.frame.cred;
      this.stdin = ctx.stdin;
      this.env = Object.assign({}, ctx.frame.env, envOver || {});
    }
    get cwd() { return this.f.cwd; }
    get tty() { return !!this.ctx.out.tty; }
    get user() { return this.sys.userByUid(this.cred.uid); }
    get root() { return this.cred.uid === 0; }
    out(s) { this.ctx.out.write(s); }
    err(s) { this.ctx.err.write(s); }
    errf(msg) { this.err(this.name + ': ' + msg + '\n'); }
    hint(msg) { if (this.ctx.err.tty) this.sh.termOut('  ↳ ' + msg + '\n', 'hint'); }
    lookup(path, opts) { return this.sys.lookup(path, this.cred, this.f.cwd, opts); }
    abs(path) { return this.sys.normPath(path, this.f.cwd); }
    // message d'erreur standard « cmd: impossible de … 'x': raison »
    fsErr(e, path, verb) {
      if (!e || !e.code) throw e;
      if (verb) this.err(this.name + ': ' + verb + " '" + path + "': " + e.message + '\n');
      else this.err(this.name + ': ' + path + ': ' + e.message + '\n');
      return 1;
    }
    readText(path) { // contenu d'un fichier (droit r), ou null avec message
      try {
        const { node } = this.lookup(path);
        if (node.t === 'd') { this.err(this.name + ': ' + path + ': est un dossier\n'); return null; }
        if (!this.sys.can(node, this.cred, 4)) { this.err(this.name + ': ' + path + ': Permission non accordée\n'); return null; }
        if (node.special === 'null') return '';
        return node.c;
      } catch (e) { this.fsErr(e, path); return null; }
    }
    // entrée : fichiers ou stdin
    inputs(files) {
      if (!files.length || (files.length === 1 && files[0] === '-')) return [{ name: '-', text: this.stdin != null ? this.stdin : '' }];
      const out = [];
      for (const f of files) { const t = f === '-' ? (this.stdin || '') : this.readText(f); if (t != null) out.push({ name: f, text: t }); else out.push({ name: f, text: null }); }
      return out;
    }
    // analyse d'options façon getopt : spec = 'abc:d' (":" = prend un argument), long = {name: 'x'|'x:'}
    opts(spec, long, o) {
      o = o || {};
      const flags = {}, pos = [];
      const args = this.args;
      for (let i = 0; i < args.length; i++) {
        const a = args[i];
        if (a === '--') { pos.push(...args.slice(i + 1)); break; }
        if (a.startsWith('--') && a.length > 2) {
          const [k, v] = a.slice(2).split(/=(.*)/s);
          const def = long && long[k];
          if (def === undefined) { if (o.lenient) { pos.push(a); continue; } this.err(this.name + ": option non reconnue « --" + k + ' »\n' + "Saisissez « " + this.name + " --help » pour plus d'informations.\n"); throw usage(); }
          const key = def.replace(/:$/, '');
          if (def.endsWith(':')) flags[key] = v != null ? v : args[++i]; else flags[key] = true;
          continue;
        }
        if (a.length > 1 && a[0] === '-' && !(o.numeric && /^-\d/.test(a))) {
          for (let j = 1; j < a.length; j++) {
            const ch = a[j];
            const idx = spec.indexOf(ch);
            if (idx < 0) { if (o.lenient) { pos.push(a); break; } this.err(this.name + ": option invalide -- '" + ch + "'\n" + "Saisissez « " + this.name + " --help » pour plus d'informations.\n"); throw usage(); }
            if (spec[idx + 1] === ':') {
              let v = a.slice(j + 1);
              if (!v) { if (i + 1 >= args.length) { this.err(this.name + ": l'option requiert un argument -- '" + ch + "'\n"); throw usage(); } v = args[++i]; }
              flags[ch] = v; break;
            }
            flags[ch] = true;
          }
          continue;
        }
        if (o.stopAtPos) { pos.push(...args.slice(i)); break; }
        pos.push(a);
      }
      return { f: flags, pos };
    }
    // attente annulable (suspension SIGSTOP / reprise SIGCONT gérées)
    wait(ms) {
      const proc = this.proc;
      return new Promise((resolve) => {
        let remaining = ms, start = 0, t = null, done = false;
        const prev = proc.impl;
        const end = (v) => { if (done) return; done = true; if (t) clearTimeout(t); t = null; if (proc.impl === impl) proc.impl = prev; resolve(v); };
        const arm = () => { start = Date.now(); t = setTimeout(() => end(true), Math.max(0, remaining)); };
        const impl = {
          pause() { if (t) { clearTimeout(t); t = null; remaining -= Date.now() - start; } if (prev && prev.pause) prev.pause(); },
          resume() { if (!t && !done) arm(); if (prev && prev.resume) prev.resume(); },
          dispose() { end(false); if (prev && prev.dispose) prev.dispose(); }
        };
        proc.impl = impl;
        if (proc.state !== 'T') arm();
      });
    }
    // processus qui consomme du CPU jusqu'à sa mort
    hog() {
      const p = this.proc;
      p.hog = true; p.state = 'R'; p.runSince = Date.now();
      return new Promise((resolve) => {
        p.impl = {
          pause() { if (p.runSince) { p.cpuAcc = (p.cpuAcc || 0) + (Date.now() - p.runSince) / 1000 * 0.95; p.runSince = null; } },
          resume() { p.runSince = Date.now(); p.state = 'R'; },
          dispose() { resolve(0); }
        };
      });
    }
    // processus qui dort jusqu'à sa mort (GUI, serveur…)
    forever(state) {
      const p = this.proc; p.state = state || 'S';
      return new Promise((resolve) => { p.impl = { pause() {}, resume() { p.state = state || 'S'; }, dispose() { resolve(0); } }; });
    }
    alive() { return this.sys.procs.has(this.proc.pid) && this.proc.state !== 'Z'; }
    async readLine(prompt, o) {
      if (!this.tty || this.ctx.inPipe) {
        // lecture depuis l'entrée standard
        if (this.stdin == null) return null;
        const i = this.stdin.indexOf('\n');
        const line = i < 0 ? this.stdin : this.stdin.slice(0, i);
        this.stdin = i < 0 ? null : this.stdin.slice(i + 1);
        this.ctx.stdin = this.stdin;
        return line;
      }
      return this.sh.term.readLine(prompt, o || {});
    }
    async confirm(prompt, def) {
      const r = await this.readLine(prompt);
      if (r == null) return false;
      const a = r.trim().toLowerCase();
      if (!a) return !!def;
      return a[0] === 'o' || a[0] === 'y';
    }
  }
  function usage() { const e = new Error('usage'); e.fsError = true; e.usage = true; return e; }
  SIM.CmdCtx = CmdCtx;
  SIM.usage = usage;

  /* ================= builtins ================= */
  const W = (ctx, s) => ctx.out.write(s);
  const E = (ctx, s) => ctx.err.write(s);

  B.echo = async (sh, ctx, args) => {
    let n = false, e = false;
    while (args.length && /^-[neE]+$/.test(args[0])) { if (args[0].includes('n')) n = true; if (args[0].includes('e')) e = true; args = args.slice(1); }
    let s = args.join(' ');
    if (e) s = s.replace(/\\n/g, '\n').replace(/\\t/g, '\t').replace(/\\\\/g, '\\');
    W(ctx, s + (n ? '' : '\n'));
    return 0;
  };
  B.printf = async (sh, ctx, args) => {
    if (!args.length) { E(ctx, 'printf: usage : printf format [arguments]\n'); return 2; }
    let fmt = args[0], i = 1;
    let s = fmt.replace(/%(-?\d*)([sd%])/g, (m, w, t) => { if (t === '%') return '%'; let v = args[i++] || ''; if (t === 'd') v = String(parseInt(v, 10) || 0); return w ? (w[0] === '-' ? v.padEnd(+w.slice(1)) : v.padStart(+w)) : v; });
    s = s.replace(/\\n/g, '\n').replace(/\\t/g, '\t');
    W(ctx, s);
    return 0;
  };
  B.pwd = async (sh, ctx) => { W(ctx, ctx.frame.cwd + '\n'); return 0; };
  B.cd = async (sh, ctx, args) => {
    const f = ctx.frame, sys = f.sys;
    let t = args[0];
    if (args.length > 1) { E(ctx, 'bash: cd: trop d\'arguments\n'); return 1; }
    if (t == null || t === '') t = f.env.HOME;
    let print = false;
    if (t === '-') { if (!f.oldpwd) { E(ctx, 'bash: cd: « OLDPWD » non défini\n'); return 1; } t = f.oldpwd; print = true; }
    let res;
    try { res = sys.lookup(t, f.cred, f.cwd); }
    catch (e) { E(ctx, 'bash: cd: ' + t + ': ' + e.message + '\n'); return 1; }
    if (res.node.t !== 'd') { E(ctx, 'bash: cd: ' + t + ": N'est pas un dossier\n"); return 1; }
    if (!sys.can(res.node, f.cred, 1)) { E(ctx, 'bash: cd: ' + t + ': Permission non accordée\n'); return 1; }
    f.oldpwd = f.cwd; f.cwd = res.abs; f.env.PWD = res.abs; f.env.OLDPWD = f.oldpwd;
    if (!ctx.script) f.proc.cwd = res.abs;
    if (print) W(ctx, res.abs + '\n');
    return 0;
  };
  B.exit = async (sh, ctx, args) => {
    const code = args.length ? (parseInt(args[0], 10) & 255) : ctx.frame.lastStatus;
    throw new SIM.ExitSig(isNaN(code) ? 2 : code);
  };
  B.logout = B.exit;
  B.true = async () => 0;
  B[':'] = async () => 0;
  B.false = async () => 1;
  B.alias = async (sh, ctx, args) => {
    const f = ctx.frame;
    if (!args.length) { for (const k of Object.keys(f.aliases).sort()) W(ctx, 'alias ' + k + "='" + f.aliases[k] + "'\n"); return 0; }
    let st = 0;
    for (const a of args) {
      const i = a.indexOf('=');
      if (i < 0) { if (f.aliases[a] != null) W(ctx, 'alias ' + a + "='" + f.aliases[a] + "'\n"); else { E(ctx, 'bash: alias: ' + a + ' : non trouvé\n'); st = 1; } continue; }
      const name = a.slice(0, i);
      if (!/^[\w.@%:-]+$/.test(name)) { E(ctx, "bash: alias: « " + name + " » : nom d'alias non valable\n"); st = 1; continue; }
      f.aliases[name] = a.slice(i + 1);
    }
    return st;
  };
  B.unalias = async (sh, ctx, args) => {
    const f = ctx.frame;
    if (args[0] === '-a') { f.aliases = {}; return 0; }
    let st = 0;
    for (const a of args) { if (f.aliases[a] != null) delete f.aliases[a]; else { E(ctx, 'bash: unalias: ' + a + ' : non trouvé\n'); st = 1; } }
    return st;
  };
  B.history = async (sh, ctx, args) => {
    const h = ctx.frame.history;
    if (args[0] === '-c') { h.length = 0; return 0; }
    let start = 0;
    if (args[0] && /^\d+$/.test(args[0])) start = Math.max(0, h.length - +args[0]);
    let s = '';
    for (let i = start; i < h.length; i++) s += String(i + 1).padStart(5) + '  ' + h[i] + '\n';
    W(ctx, s);
    return 0;
  };
  B.export = async (sh, ctx, args) => {
    const f = ctx.frame;
    if (!args.length || args[0] === '-p') { for (const k of Object.keys(f.env).sort()) W(ctx, 'declare -x ' + k + '="' + f.env[k] + '"\n'); return 0; }
    for (const a of args) {
      const i = a.indexOf('=');
      if (i < 0) { if (a in f.vars) { f.env[a] = f.vars[a]; delete f.vars[a]; } else f.env[a] = f.env[a] || ''; }
      else { f.env[a.slice(0, i)] = a.slice(i + 1); delete f.vars[a.slice(0, i)]; }
    }
    return 0;
  };
  B.unset = async (sh, ctx, args) => { for (const a of args) { delete ctx.frame.vars[a]; delete ctx.frame.env[a]; } return 0; };
  B.set = async (sh, ctx, args) => {
    if (!args.length) { const f = ctx.frame; const all = Object.assign({}, f.env, f.vars); for (const k of Object.keys(all).sort()) W(ctx, k + '=' + all[k] + '\n'); }
    return 0;
  };
  B.source = async (sh, ctx, args) => {
    const f = ctx.frame, sys = f.sys;
    if (!args.length) { E(ctx, 'bash: source: nom de fichier nécessaire en argument\n'); return 2; }
    let node;
    try { node = sys.lookup(args[0], f.cred, f.cwd).node; } catch (e) { E(ctx, 'bash: ' + args[0] + ': ' + e.message + '\n'); return 1; }
    if (node.t === 'd') { E(ctx, 'bash: source: ' + args[0] + ' : est un dossier\n'); return 1; }
    if (!sys.can(node, f.cred, 4)) { E(ctx, 'bash: ' + args[0] + ': Permission non accordée\n'); return 1; }
    return sh.runScriptText(node.c, ctx);
  };
  B['.'] = B.source;
  B.eval = async (sh, ctx, args) => { const ast = APP.sh.parse(args.join(' ')); return sh.execList(ast, ctx); };
  B.type = async (sh, ctx, args) => {
    const f = ctx.frame; let st = 0;
    for (const a of args) {
      if (f.aliases[a] != null) W(ctx, a + " est un alias vers « " + f.aliases[a] + " »\n");
      else if (SIM.BUILTINS.includes(a)) W(ctx, a + ' est une primitive du shell\n');
      else { const p = sh.findInPath(a, f); if (p && f.sys.isInstalledCmd(a)) W(ctx, a + ' est ' + p.path + '\n'); else { E(ctx, 'bash: type: ' + a + ' : non trouvé\n'); st = 1; } }
    }
    return st;
  };
  B.hash = async () => 0;
  B.help = async (sh, ctx) => {
    W(ctx, 'GNU bash, version 5.2.15(1)-release (x86_64-pc-linux-gnu) — simulateur ESEO\nCommandes internes : ' + SIM.BUILTINS.filter((x) => x.length > 1).join(', ') + '\nTape « man commande » pour l\'aide d\'une commande. Raccourcis : Ctrl+C interrompt, Ctrl+Z suspend, Tab complète, ↑/↓ historique, Ctrl+L efface.\n');
    return 0;
  };
  B.umask = async (sh, ctx, args) => {
    const f = ctx.frame;
    let sym = false;
    if (args[0] === '-S') { sym = true; args = args.slice(1); }
    if (args[0] === '-p') { W(ctx, 'umask ' + perm.oct(f.umask, 4) + '\n'); return 0; }
    if (!args.length) {
      if (sym) { const a = 0o777 & ~f.umask; const part = (sh2) => ['r', 'w', 'x'].filter((x, i) => a & (1 << (sh2 + 2 - i))).join(''); W(ctx, 'u=' + part(6) + ',g=' + part(3) + ',o=' + part(0) + '\n'); }
      else W(ctx, perm.oct(f.umask, 4) + '\n');
      return 0;
    }
    const m = args[0];
    if (/^[0-7]{1,4}$/.test(m)) { f.umask = parseInt(m, 8) & 0o777; ctx.frame.sys.emit('umask', { umask: f.umask, frame: f }); return 0; }
    const allowed = perm.apply(m, 0o777 & ~f.umask, true, 0);
    if (allowed == null) { E(ctx, 'bash: umask: ' + m + ' : caractère de mode octal hors plage\n'); return 1; }
    f.umask = 0o777 & ~allowed & 0o777;
    ctx.frame.sys.emit('umask', { umask: f.umask, frame: f });
    return 0;
  };
  B.test = async (sh, ctx, args, name) => {
    if (name === '[') { if (args[args.length - 1] !== ']') { E(ctx, "bash: [: « ] » manquant\n"); return 2; } args = args.slice(0, -1); }
    const f = ctx.frame, sys = f.sys;
    const ev = (a) => {
      if (!a.length) return false;
      if (a[0] === '!') return !ev(a.slice(1));
      if (a.length === 1) return a[0] !== '';
      if (a.length === 2) {
        const [op, x] = a;
        const node = () => { try { return sys.lookup(x, f.cred, f.cwd).node; } catch (e) { return null; } };
        switch (op) {
          case '-z': return x === ''; case '-n': return x !== '';
          case '-e': case '-a': return !!node(); case '-f': { const n = node(); return !!n && n.t === 'f'; }
          case '-d': { const n = node(); return !!n && n.t === 'd'; }
          case '-r': { const n = node(); return !!n && sys.can(n, f.cred, 4); }
          case '-w': { const n = node(); return !!n && sys.can(n, f.cred, 2); }
          case '-x': { const n = node(); return !!n && sys.can(n, f.cred, 1); }
          case '-s': { const n = node(); return !!n && sys.size(n) > 0; }
          case '-L': case '-h': { try { const r = sys.lookup(x, f.cred, f.cwd, { follow: false }); return r.node.t === 'l'; } catch (e) { return false; } }
        }
        return false;
      }
      const [x, op, y] = a;
      switch (op) {
        case '=': case '==': return x === y; case '!=': return x !== y;
        case '-eq': return +x === +y; case '-ne': return +x !== +y; case '-gt': return +x > +y;
        case '-ge': return +x >= +y; case '-lt': return +x < +y; case '-le': return +x <= +y;
      }
      const iA = a.indexOf('-a'), iO = a.indexOf('-o');
      if (iO > 0) return ev(a.slice(0, iO)) || ev(a.slice(iO + 1));
      if (iA > 0) return ev(a.slice(0, iA)) && ev(a.slice(iA + 1));
      return false;
    };
    return ev(args) ? 0 : 1;
  };
  B['['] = B.test;
  B.read = async (sh, ctx, args) => {
    let prompt = '', vars = [];
    for (let i = 0; i < args.length; i++) { if (args[i] === '-p') prompt = args[++i] || ''; else if (args[i] === '-r' || args[i] === '-s') continue; else vars.push(args[i]); }
    if (!vars.length) vars = ['REPLY'];
    let line;
    if (ctx.stdin != null && (ctx.inPipe || ctx.stdin !== null) && !ctx.out.tty) {
      const i = ctx.stdin.indexOf('\n'); line = i < 0 ? ctx.stdin : ctx.stdin.slice(0, i); ctx.stdin = i < 0 ? null : ctx.stdin.slice(i + 1);
    } else if (ctx.stdin != null) {
      const i = ctx.stdin.indexOf('\n'); line = i < 0 ? ctx.stdin : ctx.stdin.slice(0, i); ctx.stdin = i < 0 ? null : ctx.stdin.slice(i + 1);
    } else line = await sh.term.readLine(prompt, {});
    if (line == null) return 1;
    const parts = line.trim().split(/\s+/);
    vars.forEach((v, i) => { ctx.frame.vars[v] = i === vars.length - 1 ? parts.slice(i).join(' ') : (parts[i] || ''); });
    return 0;
  };
  B.shift = async () => 0;
  B.return = async (sh, ctx, args) => { throw new SIM.ExitSig(args.length ? +args[0] : ctx.frame.lastStatus); };
  B.let = async () => 0;
  B.times = async (sh, ctx) => { W(ctx, '0m0,012s 0m0,004s\n0m0,250s 0m0,090s\n'); return 0; };
  B.disown = async (sh, ctx, args) => { const f = ctx.frame; const j = sh.curJob(f, args[0]); if (j) sh.removeJob(f, j); return 0; };

  // --- contrôle des tâches ---
  B.jobs = async (sh, ctx, args) => {
    const f = sh.f;
    sh.refreshJobs(f);
    const l = args.includes('-l');
    const pOnly = args.includes('-p');
    let s = '';
    for (const j of f.jobs.slice().sort((a, b) => a.id - b.id)) {
      if (pOnly) { s += j.pids[0] + '\n'; continue; }
      s += sh.fmtJob(f, j, l) + '\n';
      if (!(j.state === 'Running' || j.state === 'Stopped')) { j.notify = false; sh.removeJob(f, j); }
    }
    W(ctx, s);
    return 0;
  };
  B.fg = async (sh, ctx, args) => {
    const f = sh.f;
    sh.refreshJobs(f);
    const j = sh.curJob(f, args[0]);
    if (!j) { E(ctx, 'bash: fg: ' + (args[0] || 'actuel') + ' : tâche inexistante\n'); return 1; }
    if (!(j.state === 'Running' || j.state === 'Stopped')) { E(ctx, 'bash: fg: la tâche s\'est terminée\n'); sh.removeJob(f, j); return 1; }
    W(ctx, j.text + '\n');
    return sh.foreground(j, ctx);
  };
  B.bg = async (sh, ctx, args) => {
    const f = sh.f;
    sh.refreshJobs(f);
    const j = sh.curJob(f, args[0]);
    if (!j) { E(ctx, 'bash: bg: ' + (args[0] || 'actuel') + ' : tâche inexistante\n'); return 1; }
    if (j.state === 'Running') { E(ctx, 'bash: bg: la tâche ' + j.id + ' est déjà en arrière-plan\n'); return 0; }
    for (const pid of j.pids) for (const q of [pid].concat(SIM.descendants(j.sys, pid))) j.sys.signal(q, 18, null);
    j.state = 'Running';
    W(ctx, '[' + j.id + ']' + sh.jobMark(f, j) + ' ' + j.text + ' &\n');
    return 0;
  };
  B.wait = async (sh, ctx, args) => {
    const f = ctx.frame;
    const pids = args.length ? args.map((a) => (a[0] === '%' ? (sh.curJob(f, a) || { pids: [] }).pids : [+a])).flat() : f.jobs.flatMap((j) => j.pids);
    let st = 0;
    for (const pid of pids) { const p = f.sys.proc(pid); if (p) st = await f.sys.waitProc(p); }
    return st;
  };
  B.kill = async (sh, ctx, args) => {
    const f = ctx.frame, sys = f.sys;
    if (!args.length) { E(ctx, 'kill : usage : kill [-s sigspec | -n signum | -sigspec] pid | jobspec ... ou kill -l [sigspec]\n'); return 2; }
    if (args[0] === '-l' || args[0] === '-L') {
      if (args[1]) { const n = +args[1]; W(ctx, (APP.SIGNAME[n > 128 ? n - 128 : n] || '?') + '\n'); return 0; }
      let s = '';
      const names = Object.keys(APP.SIGNALS).sort((a, b) => APP.SIGNALS[a] - APP.SIGNALS[b]);
      names.forEach((nm, i) => { s += (String(APP.SIGNALS[nm]).padStart(2) + ') SIG' + nm).padEnd(16) + ((i + 1) % 5 === 0 ? '\n' : '\t'); });
      s += '23) SIGURG\t24) SIGXCPU\t25) SIGXFSZ\t26) SIGVTALRM\t27) SIGPROF\n28) SIGWINCH\t29) SIGIO\t30) SIGPWR\t31) SIGSYS\t34) SIGRTMIN\n';
      W(ctx, s); return 0;
    }
    let sig = 15, i = 0;
    const parseSig = (x) => { if (/^\d+$/.test(x)) return +x; const k = x.toUpperCase().replace(/^SIG/, ''); return APP.SIGNALS[k] != null ? APP.SIGNALS[k] : null; };
    if (args[0] === '-s' || args[0] === '-n') { sig = parseSig(args[1] || ''); i = 2; }
    else if (/^-/.test(args[0]) && args[0] !== '--') { sig = parseSig(args[0].slice(1)); i = 1; }
    if (sig == null) { E(ctx, 'bash: kill: ' + (args[i - 1] || '') + ' : spécification de signal non valable\n'); return 1; }
    if (args[i] === '--') i++;
    if (i >= args.length) { E(ctx, 'kill : usage : kill [-s sigspec | -n signum | -sigspec] pid | jobspec ... ou kill -l [sigspec]\n'); return 2; }
    let st = 0;
    for (const a of args.slice(i)) {
      if (a[0] === '%') {
        const j = sh.curJob(sh.f, a);
        if (!j) { E(ctx, 'bash: kill: ' + a + ' : tâche inexistante\n'); st = 1; continue; }
        for (const pid of j.pids) {
          const r = j.sys.signal(pid, sig, f.cred);
          if (r === 'EPERM') { E(ctx, 'bash: kill: (' + pid + ') - Opération non permise\n'); st = 1; }
          // bash relance un job suspendu pour qu'il reçoive le signal
          const p = j.sys.proc(pid);
          if (p && p.state === 'T' && sig !== 9 && sig !== 18 && sig !== 19 && sig !== 20) j.sys.signal(pid, 18, f.cred);
        }
        continue;
      }
      if (!/^-?\d+$/.test(a)) { E(ctx, 'bash: kill: ' + a + ' : les arguments doivent être des identifiants de processus ou de tâche\n'); st = 1; continue; }
      const r = sys.signal(+a, sig, f.cred);
      if (r === 'ESRCH') { E(ctx, 'bash: kill: (' + a + ') - Aucun processus de ce type\n'); st = 1; }
      else if (r === 'EPERM') { E(ctx, 'bash: kill: (' + a + ') - Opération non permise\n'); st = 1; }
    }
    return st;
  };
  B.trap = async (sh, ctx, args) => {
    const traps = ctx.traps || (ctx.traps = {});
    if (!args.length) { for (const k of Object.keys(traps)) W(ctx, "trap -- '" + traps[k] + "' SIG" + APP.SIGNAME[k] + '\n'); return 0; }
    if (args[0] === '-l') return B.kill(sh, ctx, ['-l']);
    let action = args[0], sigs = args.slice(1);
    if (/^\d+$/.test(action) && !sigs.length) { sigs = [action]; action = '-'; }
    for (const s of sigs) {
      const n = /^\d+$/.test(s) ? +s : APP.SIGNALS[s.toUpperCase().replace(/^SIG/, '')];
      if (s.toUpperCase() === 'EXIT' || s === '0') continue;
      if (n == null) { E(ctx, 'bash: trap: ' + s + ' : spécification de signal non valable\n'); return 1; }
      if (action === '-') delete traps[n]; else traps[n] = action;
    }
    return 0;
  };
  B.exec = async (sh, ctx, args) => {
    if (!args.length) return 0;
    const f = ctx.frame;
    if (ctx.sc && ctx.sc.proc) {
      const p = ctx.sc.proc;
      const found = sh.findInPath(args[0], f) || (args[0].includes('/') ? { node: f.sys.resolveRaw(f.sys.normPath(args[0], f.cwd)) } : null);
      p.cmd = args.join(' '); p.comm = args[0].replace(/^.*\//, '').slice(0, 15); p.isShell = false; p.traps = {};
      if (found && found.node && found.node.bin && SIM.cmds[found.node.bin]) {
        const c = new CmdCtx(sh, ctx, found.node.bin, args.slice(1), p);
        const st = await SIM.cmds[found.node.bin](c);
        throw new SIM.ExitSig(st == null ? 0 : st);
      }
      E(ctx, 'bash: exec: ' + args[0] + ' : introuvable\n');
      throw new SIM.ExitSig(127);
    }
    const st = await sh.runCommand(args, ctx, {});
    throw new SIM.ExitSig(st);
  };
})();
