/* Interpréteur bash simulé : expansion, redirections, tubes, enchaînements,
   contrôle des tâches (jobs), scripts, sessions (su, ssh, newgrp). */
(function () {
  'use strict';
  const APP = window.APP;
  const SIM = APP.SIM;
  const cmds = (SIM.cmds = SIM.cmds || {});
  const now = () => Date.now();

  class Abort extends Error { constructor() { super('abort'); this.abort = true; } }
  class ExitSig extends Error { constructor(code) { super('exit'); this.exitCode = code; } }
  SIM.Abort = Abort; SIM.ExitSig = ExitSig;

  // ---------- écrivains (sorties) ----------
  class TermWriter { constructor(sh, cls) { this.sh = sh; this.cls = cls; this.tty = true; } write(s) { if (s) this.sh.termOut(s, this.cls); } }
  class BufWriter { constructor() { this.buf = ''; this.tty = false; } write(s) { this.buf += s; } }
  class NullWriter { constructor() { this.tty = false; this.isNull = true; } write() { } }
  class FileWriter { constructor(node) { this.node = node; this.tty = false; } write(s) { this.node.c += s; this.node.mtime = now(); } }

  const BUILTINS = ['cd', 'pwd', 'echo', 'exit', 'logout', 'alias', 'unalias', 'history', 'export', 'unset', 'source', '.', 'jobs', 'fg', 'bg', 'wait', 'umask', 'trap', 'exec', 'type', 'true', 'false', 'test', '[', 'read', 'set', 'help', 'kill', 'printf', 'let', 'shift', 'return', 'disown', 'hash', 'times', 'eval', ':'];
  SIM.BUILTINS = BUILTINS;
  const USER_PATH = ['/usr/local/bin', '/usr/bin', '/bin', '/usr/games'];
  const ROOT_PATH = ['/usr/local/sbin', '/usr/local/bin', '/usr/sbin', '/usr/bin', '/sbin', '/bin'];

  class Shell {
    constructor(term, sys, opts) {
      opts = opts || {};
      this.term = term; this.sys = sys;
      this.stack = [];
      this.busy = false;
      this.fgProcs = new Set();
      this.fgToken = null;
      this.tty = opts.tty || 'pts/0';
      this.baseUser = opts.user || 'etudiant'; this.basePid = opts.pid; this.basePpid = opts.ppid || 1180;
      this.pushFrame(sys, this.baseUser, { kind: 'login', pid: opts.pid, ppid: this.basePpid, cwd: opts.cwd });
    }
    get f() { return this.stack[this.stack.length - 1]; }
    resetBase() {
      for (const fr of this.stack) { if (fr.sys.procs.has(fr.proc.pid)) fr.sys.procs.delete(fr.proc.pid); }
      this.stack = [];
      this.pushFrame(this.sys, this.baseUser, { kind: 'login', pid: this.basePid, ppid: this.basePpid });
    }
    get base() { return this.stack[0]; }

    /* ---------- sessions ---------- */
    pushFrame(sys, user, o) {
      o = o || {};
      const u = sys.user(user);
      const prev = this.f;
      const cred = sys.credFor(user, o.gid);
      const pid = o.pid || sys.allocPid();
      const proc = sys.addProc({ pid, ppid: o.ppid || (prev ? prev.proc.pid : 1), uid: u.uid, cmd: o.cmd || (o.kind === 'login' || o.kind === 'su' || o.kind === 'ssh' ? '-bash' : 'bash'), comm: 'bash', state: 'S', tty: o.tty || this.tty, leader: true, isShell: true, interactive: true, cwd: u.home, rss: 5200, vsz: 10120 });
      const env = Object.assign({}, prev && o.kind !== 'login' && o.kind !== 'su' && o.kind !== 'ssh' ? prev.env : {}, {
        USER: user, LOGNAME: user, HOME: u.home, SHELL: '/bin/bash', LANG: 'fr_FR.UTF-8', TERM: 'xterm-256color',
        PATH: (cred.uid === 0 ? ROOT_PATH : USER_PATH).join(':'), HOSTNAME: sys.hostname
      });
      const frame = {
        sys, user, cred, proc, env, kind: o.kind || 'bash',
        cwd: o.cwd || (o.kind === 'bash' || o.kind === 'newgrp' ? prev.cwd : u.home),
        oldpwd: null,
        umask: prev && (o.kind === 'bash' || o.kind === 'newgrp') ? prev.umask : 0o022,
        aliases: {}, history: prev && o.kind !== 'ssh' && o.kind !== 'su' ? prev.history : [], jobs: [], jobOrder: [], nextJob: 1,
        lastStatus: 0, lastBg: '', vars: {}, remoteLabel: o.remoteLabel || null, onExit: o.onExit || null
      };
      if (sys !== this.sys && !frame.remoteLabel) frame.remoteLabel = sys.hostname;
      this.stack.push(frame);
      proc.cwd = frame.cwd;
      // lecture de ~/.bashrc (alias, umask…)
      const rc = sys.resolveRaw(u.home + '/.bashrc');
      if (rc && rc.t === 'f') { this._rcLoading = true; this.runScriptText(rc.c, this.newCtx(frame, { quiet: true }), true).catch(() => {}).finally(() => { this._rcLoading = false; }); }
      return frame;
    }
    popFrame(code) {
      const fr = this.stack.pop();
      // SIGHUP aux tâches (sauf nohup)
      for (const j of fr.jobs) for (const pid of j.pids) fr.sys.signal(pid, 1, null);
      fr.sys.exitProc(fr.proc.pid, code || 0);
      fr.sys.procs.delete(fr.proc.pid);
      if (fr.onExit) fr.onExit(fr);
      return fr;
    }
    newCtx(frame, o) {
      return Object.assign({ frame, out: new TermWriter(this, 'out'), err: new TermWriter(this, 'err'), stdin: null, selfPid: frame.proc.pid, args: [], argv0: 'bash', traps: {}, script: false, depth: 0 }, o || {});
    }

    /* ---------- sortie terminal ---------- */
    termOut(s, cls) { this.term.write(s, cls); }
    prompt() {
      const f = this.f;
      const home = f.sys.user(f.user).home;
      let p = f.cwd;
      if (p === home) p = '~'; else if (p.startsWith(home + '/')) p = '~' + p.slice(home.length);
      return { user: f.user, host: f.sys.hostname, path: p, sym: f.cred.uid === 0 ? '#' : '$', root: f.cred.uid === 0 };
    }

    /* ---------- entrée principale ---------- */
    async submit(line) {
      const f = this.f;
      this.busy = true;
      const tok = (this.fgToken = { aborted: false });
      try {
        let src = line;
        if (/!/.test(src)) {
          const r = this.histExpand(src, f);
          if (r.err) { this.termOut('bash: ' + r.err + ' : événement introuvable\n', 'err'); return; }
          if (r.changed) { this.termOut(r.line + '\n', 'dim'); src = r.line; f.sys.emit('histexp', { from: line, line: src }); }
        }
        if (src.trim() && !/^\s/.test(src)) { f.history.push(src); if (f.history.length > 1000) f.history.shift(); }
        if (!src.trim()) return;
        f.sys.emit('cmdline', { line: src, frame: f, shell: this });
        const cwd0 = f.cwd;
        let ast;
        try { ast = APP.sh.parse(src); }
        catch (e) { this.termOut('bash: ' + e.message + '\n', 'err'); f.lastStatus = 2; return; }
        const ctx = this.newCtx(f, { token: tok, line: src });
        try { await this.execList(ast, ctx); }
        catch (e) {
          if (e instanceof ExitSig) await this.doExit(e.exitCode);
          else if (!e.abort) { console.error(e); this.termOut('bash: erreur interne du simulateur : ' + e.message + '\n', 'err'); }
        }
        if (this.pendingDisconnect) {
          const pd = this.pendingDisconnect; this.pendingDisconnect = null;
          let i = this.stack.findIndex((x) => x.sys === pd.sys);
          if (i > 0) { while (this.stack.length > i) this.popFrame(255); this.termOut(pd.msg, 'err'); this.termOut('  ↳ le pare-feu vient de bloquer le port SSH : la session distante est perdue !\n', 'hint'); }
        }
        f.sys.emit('cmddone', { line: src, frame: f, shell: this, status: f.lastStatus, cwd: this.f.cwd, cwdBefore: cwd0 });
      } finally {
        this.busy = false; this.fgToken = null; this.fgProcs.clear();
      }
    }
    async doExit(code) {
      const f = this.f;
      if (this.stack.length === 1) {
        this.termOut('logout\n', 'dim');
        this.term.closed && this.term.closed();
        return;
      }
      const fr = this.popFrame(code);
      if (fr.kind === 'ssh') this.termOut('logout\nConnection to ' + fr.remoteLabel + ' closed.\n', 'dim');
      else this.termOut('exit\n', 'dim');
      f.sys.emit('frame', { shell: this });
    }
    // Ctrl+C / Ctrl+Z
    signalFg(sig) {
      if (this.fgToken && sig === 2) this.fgToken.aborted = true;
      const f = this.f;
      const pids = [...this.fgProcs].filter((p) => f.sys.procs.has(p.pid) || (p.sys && p.sys.procs.has(p.pid)));
      for (const p of pids) {
        const s = p.sysRef || f.sys;
        // le signal va au groupe de premier plan : processus + descendants
        const all = [p.pid].concat(descendants(s, p.pid));
        for (const pid of all) s.signal(pid, sig, null);
      }
      if (this.inputWaiter) { const w = this.inputWaiter; this.inputWaiter = null; w(null); }
    }

    /* ---------- historique ---------- */
    histExpand(line, f) {
      let changed = false, err = null, inQ = false;
      let out = '';
      for (let i = 0; i < line.length; i++) {
        const c = line[i];
        if (c === "'") inQ = !inQ;
        if (c === '!' && !inQ && i + 1 < line.length && !/[\s=(]/.test(line[i + 1])) {
          const rest = line.slice(i + 1);
          let m, rep = null, len = 0;
          if (rest[0] === '!') { rep = f.history[f.history.length - 1]; len = 1; }
          else if ((m = /^-?\d+/.exec(rest))) { const n = parseInt(m[0], 10); rep = n < 0 ? f.history[f.history.length + n] : f.history[n - 1]; len = m[0].length; }
          else if ((m = /^[A-Za-z][\w.-]*/.exec(rest))) { for (let k = f.history.length - 1; k >= 0; k--) if (f.history[k].startsWith(m[0])) { rep = f.history[k]; break; } len = m[0].length; }
          else { out += c; continue; }
          if (rep == null) { err = '!' + rest.slice(0, len); break; }
          out += rep; i += len; changed = true; continue;
        }
        out += c;
      }
      return { line: out, changed, err };
    }

    /* ================= exécution ================= */
    checkAbort(ctx) { if (ctx.token && ctx.token.aborted) throw new Abort(); if (ctx.sc && ctx.sc.dead) throw new Abort(); }
    async gate(ctx) {
      const p = ctx.sc && ctx.sc.proc;
      while (p && p.state === 'T' && !ctx.sc.dead) await new Promise((r) => { ctx.sc.wake = r; setTimeout(r, 400); });
    }
    async execList(list, ctx) {
      let st = ctx.frame.lastStatus;
      for (const item of list.items) {
        this.checkAbort(ctx);
        await this.gate(ctx);
        if (item.bg) { st = await this.execBackground(item.node, ctx); }
        else st = await this.execAndOr(item.node, ctx);
        ctx.frame.lastStatus = st; ctx.lastStatus = st;
        await this.runPendingTraps(ctx);
      }
      return st;
    }
    async execAndOr(node, ctx) {
      let st = await this.execPipe(node.first, ctx);
      ctx.frame.lastStatus = st;
      for (const r of node.rest) {
        this.checkAbort(ctx);
        if ((r.op === '&&' && st === 0) || (r.op === '||' && st !== 0)) { st = await this.execPipe(r.p, ctx); ctx.frame.lastStatus = st; }
      }
      return st;
    }
    async execPipe(pipe, ctx) {
      let st;
      if (pipe.cmds.length === 1) st = await this.execNode(pipe.cmds[0], ctx);
      else {
        // création de tous les processus du tube (ps aux | grep x voit aussi grep)
        let input = ctx.stdin;
        const pre = [];
        for (let i = 0; i < pipe.cmds.length; i++) {
          const c = pipe.cmds[i];
          if (c.type === 'cmd' && c.words.length) {
            const w0 = APP.sh.wordText(c.words[0]);
            if (!BUILTINS.includes(w0)) {
              const pid = ctx.frame.sys.allocPid();
              const p = ctx.frame.sys.addProc({ pid, ppid: ctx.selfPid, uid: ctx.frame.cred.uid, cmd: c.words.map(APP.sh.wordText).join(' '), state: 'S', tty: this.tty, placeholder: true });
              pre[i] = p;
            }
          }
        }
        for (let i = 0; i < pipe.cmds.length; i++) {
          const last = i === pipe.cmds.length - 1;
          const out = last ? ctx.out : new BufWriter();
          const sub = Object.assign({}, ctx, { out, stdin: input, inPipe: !last || i > 0, pipeNext: !last });
          if (pre[i]) { ctx.frame.sys.procs.delete(pre[i].pid); sub.forcePid = pre[i].pid; }
          st = await this.execNode(pipe.cmds[i], sub);
          if (!last) input = out.buf;
          if (ctx.token && ctx.token.aborted) { for (const p of pre) if (p) ctx.frame.sys.procs.delete(p.pid); throw new Abort(); }
        }
      }
      if (pipe.bang) st = st === 0 ? 1 : 0;
      return st;
    }
    async execNode(node, ctx) {
      if (node.type === 'cmd') return this.execSimple(node, ctx);
      const io = await this.setupRedirs(node.redirs || [], ctx);
      if (!io) return 1;
      const c2 = Object.assign({}, ctx, io);
      try {
        if (node.type === 'if') {
          for (const cl of node.clauses) {
            const s = await this.execList(cl.cond, c2);
            if (s === 0) return await this.execList(cl.body, c2);
          }
          return node.els ? await this.execList(node.els, c2) : 0;
        }
        if (node.type === 'while') {
          let st = 0, n = 0;
          for (;;) {
            this.checkAbort(c2);
            const s = await this.execList(node.cond, c2);
            if (node.until ? s === 0 : s !== 0) break;
            st = await this.execList(node.body, c2);
            if (c2.breakLoop) { c2.breakLoop = false; break; }
            if (++n % 50 === 0) await sleep(0);
            if (n > 20000) { this.termOut('bash: boucle interrompue par le simulateur (trop d\'itérations)\n', 'err'); break; }
          }
          return st;
        }
        if (node.type === 'for') {
          let words = [];
          for (const w of node.words) words = words.concat(await this.expandWord(w, c2));
          let st = 0;
          for (const v of words) { this.checkAbort(c2); c2.frame.vars[node.name] = v; st = await this.execList(node.body, c2); }
          return st;
        }
        if (node.type === 'group' || node.type === 'subshell') return await this.execList(node.body, c2);
      } finally { this.closeIo(io); }
      return 0;
    }

    /* ---------- arrière-plan ---------- */
    async execBackground(node, ctx) {
      const f = ctx.frame, sys = f.sys;
      const pid = sys.allocPid();
      const text = nodeText(node, ctx.line);
      const job = this.newJob(f, [pid], text);
      if (!ctx.quiet && !ctx.script) this.termOut('[' + job.id + '] ' + pid + '\n', 'out');
      f.lastBg = String(pid);
      const simple = node.rest.length === 0 && node.first.cmds.length === 1 && node.first.cmds[0].type === 'cmd';
      const bctx = Object.assign({}, ctx, { bg: true, forcePid: pid, job, token: null });
      if (simple) {
        const p = this.execAndOr(node, bctx).catch((e) => { if (!e.abort && !(e instanceof ExitSig)) console.error(e); return 1; });
        p.then((st) => { this.jobUpdate(job, f, st); });
      } else {
        // sous-shell en arrière-plan
        const sp = sys.addProc({ pid, ppid: ctx.selfPid, uid: f.cred.uid, cmd: 'bash', comm: 'bash', state: 'S', tty: this.tty, isShell: true });
        const sctx = Object.assign({}, ctx, { bg: false, forcePid: null, job, token: null, selfPid: pid, script: true, sc: { proc: sp, dead: false, pending: [] } });
        sp.onKill = (sig) => { sctx.sc.dead = true; sys.exitProc(pid, 128 + sig); };
        this.execAndOr(node, sctx).catch(() => 1).then((st) => { if (sys.procs.has(pid)) sys.exitProc(pid, st); this.jobUpdate(job, f, st); });
      }
      return 0;
    }
    newJob(f, pids, text) {
      const id = f.jobs.length ? Math.max(...f.jobs.map((j) => j.id)) + 1 : 1;
      const job = { id, pids, text: text.trim(), state: 'Running', notify: false, sys: f.sys };
      f.jobs.push(job); f.jobOrder.push(id);
      return job;
    }
    jobUpdate(job, f, st) {
      if (job.state === 'Done' || job.state === 'Terminated' || job.state === 'Killed' || job.state === 'Exit') return;
      const sig = st > 128 ? st - 128 : 0;
      job.state = sig === 9 ? 'Killed' : sig === 15 ? 'Terminated' : sig === 2 ? 'Interrupt' : sig === 1 ? 'Hangup' : st === 0 ? 'Done' : 'Exit ' + st;
      job.notify = true;
    }
    curJob(f, spec) {
      if (!f.jobs.length) return null;
      if (!spec || spec === '%' || spec === '%%' || spec === '%+') return f.jobs.find((j) => j.id === f.jobOrder[f.jobOrder.length - 1]) || null;
      if (spec === '%-') return f.jobs.find((j) => j.id === f.jobOrder[f.jobOrder.length - 2]) || null;
      const m = /^%?(\d+)$/.exec(spec);
      if (m) return f.jobs.find((j) => j.id === +m[1]) || null;
      const s = spec.replace(/^%\??/, '');
      return f.jobs.find((j) => j.text.startsWith(s) || (spec.startsWith('%?') && j.text.includes(s))) || null;
    }
    jobMark(f, j) { const o = f.jobOrder; return o[o.length - 1] === j.id ? '+' : o[o.length - 2] === j.id ? '-' : ' '; }
    refreshJobs(f) {
      for (const j of f.jobs) {
        if (j.state.startsWith('Done') || j.state === 'Terminated' || j.state === 'Killed') continue;
        const live = j.pids.map((p) => j.sys.proc(p)).filter((p) => p && p.state !== 'Z');
        if (!live.length) { if (j.seen && (j.state === 'Running' || j.state === 'Stopped')) { const st = j.sys.lastExit && j.sys.lastExit[j.pids[0]]; if (st != null) this.jobUpdate(j, f, st); } continue; }
        j.seen = true;
        const stopped = live.every((p) => p.state === 'T');
        const ns = stopped ? 'Stopped' : 'Running';
        if (ns !== j.state) { j.state = ns; if (ns === 'Stopped') j.notify = true; }
      }
    }
    fmtJob(f, j, withPid) {
      let st = j.state;
      const states = { Running: 'Running', Stopped: 'Stopped', Done: 'Done', Terminated: 'Terminated', Killed: 'Killed', Interrupt: 'Interrupt', Hangup: 'Hangup' };
      st = states[st] || st;
      return '[' + j.id + ']' + this.jobMark(f, j) + '  ' + (withPid ? j.pids[0] + ' ' : '') + st.padEnd(24) + j.text + (j.state === 'Running' ? ' &' : '');
    }
    // notifications avant l'invite
    beforePrompt() {
      const f = this.f;
      this.refreshJobs(f);
      let s = '';
      for (const j of f.jobs.slice()) {
        if (!j.notify) continue;
        j.notify = false;
        s += this.fmtJob(f, j) + '\n';
        if (!(j.state === 'Running' || j.state === 'Stopped')) this.removeJob(f, j);
      }
      if (s) this.termOut(s, 'out');
    }
    removeJob(f, j) { f.jobs = f.jobs.filter((x) => x !== j); f.jobOrder = f.jobOrder.filter((x) => x !== j.id); }

    // attente d'un processus au premier plan (fin ou suspension)
    waitFg(proc, sys, ctx) {
      return new Promise((resolve) => {
        if (!sys.procs.has(proc.pid) || proc.state === 'Z') return resolve({ st: proc.exitStatus || 0 });
        if (proc.state === 'T') return resolve({ stopped: true });
        const off = sys.on((type, d) => {
          if (d.pid !== proc.pid) return;
          if (type === 'exit') { off(); resolve({ st: d.status }); }
          if (type === 'stopped') { off(); resolve({ stopped: true }); }
        });
        proc.fgOff = off;
      });
    }

    /* ---------- commande simple ---------- */
    async execSimple(node, ctx) {
      const f = ctx.frame;
      // affectations seules
      let words = [];
      for (const w of node.words) words = words.concat(await this.expandWord(w, ctx));
      const assigns = [];
      for (const a of node.assigns) assigns.push([a.name, (await this.expandWord(a.word, ctx, { noSplit: true, noGlob: true })).join(' ')]);
      if (!words.length) {
        for (const [k, v] of assigns) { if (k in f.env) f.env[k] = v; else f.vars[k] = v; if (k === 'PS1') { /* ignoré */ } }
        if (node.redirs.length) { const io = await this.setupRedirs(node.redirs, ctx); this.closeIo(io); return io ? 0 : 1; }
        return 0;
      }
      // alias
      if (f.aliases[words[0]] && !ctx.noAlias && node.words[0].parts.every((p) => p.q === 0)) {
        const av = f.aliases[words[0]];
        try {
          const toks = APP.sh.lex(av).filter((t) => t.t === 'w');
          let aw = [];
          const actx = Object.assign({}, ctx, { noAlias: true });
          for (const t of toks) aw = aw.concat(await this.expandWord(t, actx));
          words = aw.concat(words.slice(1));
        } catch (e) { /* alias invalide */ }
      }
      const io = await this.setupRedirs(node.redirs, ctx);
      if (!io) return 1;
      const c2 = Object.assign({}, ctx, io);
      const envOver = Object.fromEntries(assigns);
      try {
        return await this.runCommand(words, c2, envOver);
      } finally { this.closeIo(io); }
    }
    closeIo(io) { if (io && io.after) io.after(); }

    async setupRedirs(redirs, ctx) {
      const f = ctx.frame, sys = f.sys;
      const io = {};
      for (const r of redirs) {
        if (/^\d?>&\d$/.test(r.op)) {
          if (r.op === '2>&1') io.err = io.out || ctx.out;
          else if (r.op === '1>&2' || r.op === '>&2') io.out = io.err || ctx.err;
          continue;
        }
        const t = (await this.expandWord(r.target, ctx, { noSplit: true }))[0] || '';
        const op = r.op;
        if (op === '<' || op === '0<') {
          try {
            const { node } = sys.lookup(t, f.cred, f.cwd);
            if (node.t === 'd') { this.termOut('bash: ' + t + ': est un dossier\n', 'err'); return null; }
            if (!sys.can(node, f.cred, 4)) { this.termOut('bash: ' + t + ': Permission non accordée\n', 'err'); return null; }
            io.stdin = node.special === 'null' ? '' : node.c;
          } catch (e) { this.termOut('bash: ' + t + ': ' + e.message + '\n', 'err'); return null; }
          continue;
        }
        if (op === '<<<') { io.stdin = t + '\n'; continue; }
        const append = op.endsWith('>>');
        const fd = op.startsWith('2') ? 2 : op.startsWith('&') ? 3 : 1;
        let w;
        if (t === '/dev/null') w = new NullWriter();
        else {
          let res;
          try { res = sys.lookup(t, f.cred, f.cwd, { parent: true }); }
          catch (e) { this.termOut('bash: ' + t + ': ' + e.message + '\n', 'err'); return null; }
          let node = res.node;
          if (node && node.t === 'd') { this.termOut('bash: ' + t + ': est un dossier\n', 'err'); return null; }
          if (node && node.special) { w = new NullWriter(); }
          else if (node) {
            if (!sys.can(node, f.cred, 2)) { this.termOut('bash: ' + t + ': Permission non accordée\n', 'err'); return null; }
            if (!append) { node.c = ''; node.mtime = now(); }
            w = new FileWriter(node);
          } else {
            if (!sys.can(res.parent, f.cred, 2) || !sys.can(res.parent, f.cred, 1)) { this.termOut('bash: ' + t + ': Permission non accordée\n', 'err'); return null; }
            node = sys.newFile(res.parent, res.name, '', f.cred, f.umask);
            w = new FileWriter(node);
          }
          sys.emit('write', { path: res.abs });
        }
        if (fd === 1) io.out = w; else if (fd === 2) io.err = w; else { io.out = w; io.err = w; }
      }
      return io;
    }

    /* ---------- expansion ---------- */
    varValue(name, ctx) {
      const f = ctx.frame;
      switch (name) {
        case '$': return String(ctx.selfPid);
        case '!': return String(f.lastBg || '');
        case '?': return String(f.lastStatus);
        case '#': return String(ctx.args.length);
        case '0': return ctx.argv0 || 'bash';
        case '@': case '*': return ctx.args.join(' ');
        case 'PWD': return f.cwd;
        case 'OLDPWD': return f.oldpwd || '';
        case 'RANDOM': return String(Math.floor(Math.random() * 32768));
        case 'UID': return String(f.cred.uid);
        case 'EUID': return String(f.cred.uid);
        case 'PPID': return String((f.sys.proc(ctx.selfPid) || {}).ppid || '');
        case 'BASH_VERSION': return '5.2.15(1)-release';
        case 'HOSTNAME': return f.sys.hostname;
        case 'SECONDS': return String(Math.floor((now() - f.proc.start) / 1000));
      }
      if (/^\d+$/.test(name)) return ctx.args[+name - 1] || '';
      if (name in f.vars) return f.vars[name];
      if (name in f.env) return f.env[name];
      return '';
    }
    expandVars(s, ctx) {
      return s.replace(/\$(\{[^}]*\}|[A-Za-z_][A-Za-z0-9_]*|[$!?#@*0-9])/g, (m, v) => {
        if (v[0] === '{') {
          const inner = v.slice(1, -1);
          let mm;
          if ((mm = /^#(\w+)$/.exec(inner))) return String(this.varValue(mm[1], ctx).length);
          if ((mm = /^(\w+):-(.*)$/.exec(inner))) return this.varValue(mm[1], ctx) || mm[2];
          return this.varValue(inner, ctx);
        }
        return this.varValue(v, ctx);
      });
    }
    async expandWord(word, ctx, o) {
      o = o || {};
      const f = ctx.frame;
      let str = '', pat = '', hasGlob = false, splittable = false;
      for (let i = 0; i < word.parts.length; i++) {
        const p = word.parts[i];
        if (p.arith !== undefined) {
          const ex = this.expandVars(p.arith, ctx).replace(/[A-Za-z_]\w*/g, (v) => this.varValue(v, ctx) || '0');
          let v = '0';
          if (/^[\d\s+\-*/%()<>=!&|]*$/.test(ex)) { try { v = String(Math.trunc(Function('return (' + ex + ')')())); } catch (e) { v = '0'; } }
          str += v; pat += escRe(v);
          continue;
        }
        if (p.sub !== undefined) {
          let out = await this.capture(p.sub, ctx);
          out = out.replace(/\n+$/, '');
          if (p.q === 0) { splittable = splittable || /\s/.test(out); }
          str += out; pat += escRe(out);
          continue;
        }
        if (p.q === 1) { str += p.s; pat += escRe(p.s); continue; }
        let s = p.s;
        if (p.q === 0 && i === 0 && s[0] === '~') {
          const m = /^~([a-z_][\w-]*)?(?=\/|$)/.exec(s);
          if (m) {
            const home = m[1] ? (f.sys.user(m[1]) || {}).home : f.env.HOME;
            if (home) s = home + s.slice(m[0].length);
          }
        }
        if (p.q === 0 && /=~/.test(s)) s = s.replace(/=~(?=\/|$)/, '=' + f.env.HOME);
        if (s.includes('$')) {
          const ex = this.expandVars(s, ctx);
          if (p.q === 0 && ex !== s && /\s/.test(ex)) splittable = true;
          s = ex;
        }
        str += s;
        if (p.q === 0) {
          for (let k = 0; k < s.length; k++) {
            const c = s[k];
            if (c === '*') { pat += '[^/]*'; hasGlob = true; }
            else if (c === '?') { pat += '[^/]'; hasGlob = true; }
            else if (c === '[') { const e = s.indexOf(']', k + 1); if (e > k + 1) { let cls = s.slice(k + 1, e); if (cls[0] === '!') cls = '^' + cls.slice(1); pat += '[' + cls.replace(/\\/g, '\\\\') + ']'; k = e; hasGlob = true; } else pat += '\\['; }
            else pat += escRe(c);
          }
        } else pat += escRe(s);
      }
      if (hasGlob && !o.noGlob) {
        const m = this.glob(pat, str, ctx);
        if (m.length) return m;
      }
      if (splittable && !o.noSplit) return str.split(/\s+/).filter(Boolean);
      if (!word.parts.length) return [''];
      return [str];
    }
    glob(pat, raw, ctx) {
      const f = ctx.frame, sys = f.sys;
      const abs = raw.startsWith('/');
      const patParts = splitPat(pat);
      const rawParts = raw.split('/');
      let bases = [{ path: abs ? '' : null, node: abs ? sys.root : null }];
      if (!abs) { try { bases = [{ path: '', node: sys.lookup(f.cwd, f.cred, '/').node }]; } catch (e) { return []; } }
      const comps = patParts.filter((x, i) => !(abs && i === 0 && x === ''));
      const rcomps = rawParts.filter((x, i) => !(abs && i === 0 && x === ''));
      for (let i = 0; i < comps.length; i++) {
        const c = comps[i];
        const isPat = /\[\^\/\]|\[[^\\]/.test(c);
        const next = [];
        for (const b of bases) {
          if (!b.node || b.node.t !== 'd') continue;
          if (!isPat) {
            const name = unesc(c);
            if (name === '' && i === comps.length - 1) { next.push(b); continue; }
            let n = name === '..' || name === '.' ? null : b.node.ch[name];
            if (name === '.' || name === '..') { try { n = sys.lookup((abs ? '' : f.cwd + '/') + (b.path ? b.path + '/' : '') + name, f.cred, '/').node; } catch (e) { n = null; } }
            if (n) next.push({ path: b.path === null || b.path === '' ? (abs ? '/' + name : name) : b.path + '/' + name, node: n.t === 'l' ? sys.resolveRaw(n.target) : n });
            continue;
          }
          if (!sys.can(b.node, f.cred, 4)) continue;
          const re = new RegExp('^' + c + '$');
          const showHidden = rcomps[i] && rcomps[i][0] === '.';
          for (const name of Object.keys(b.node.ch).sort(cmpName)) {
            if (name[0] === '.' && !showHidden) continue;
            if (re.test(name)) { const n = b.node.ch[name]; next.push({ path: b.path === null || b.path === '' ? (abs ? '/' + name : name) : b.path + '/' + name, node: n.t === 'l' ? sys.resolveRaw(n.target) : n }); }
          }
        }
        bases = next;
      }
      return bases.map((b) => b.path).filter((p) => p != null && p !== '');
    }
    async capture(src, ctx) {
      const out = new BufWriter();
      let ast;
      try { ast = APP.sh.parse(src); } catch (e) { this.termOut('bash: ' + e.message + '\n', 'err'); return ''; }
      const c2 = Object.assign({}, ctx, { out, inPipe: true, depth: (ctx.depth || 0) + 1 });
      if (c2.depth > 20) return '';
      await this.execList(ast, c2);
      return out.buf;
    }

    /* ---------- recherche de la commande ---------- */
    findInPath(name, f) {
      const path = (f.env.PATH || '').split(':');
      for (const d of path) {
        const n = f.sys.resolveRaw(d + '/' + name);
        if (n && n.t === 'f' && (n.mode & 0o111)) return { node: n, path: d + '/' + name };
      }
      return null;
    }
    async runCommand(words, ctx, envOver) {
      const f = ctx.frame, sys = f.sys;
      const name = words[0], args = words.slice(1);
      sys.emit('exec', { name, args, frame: f, shell: this, ctx });
      if (!ctx.noBuiltins && BUILTINS.includes(name) && SIM.builtins[name]) {
        const r = await SIM.builtins[name](this, ctx, args, name);
        return r == null ? 0 : r;
      }
      // chemin explicite
      if (name.includes('/')) {
        let res;
        try { res = sys.lookup(name, f.cred, f.cwd); } catch (e) { ctx.err.write('bash: ' + name + ': ' + e.message + '\n'); return e.code === 'EACCES' ? 126 : 127; }
        const node = res.node;
        if (node.t === 'd') { ctx.err.write('bash: ' + name + ': est un dossier\n'); return 126; }
        if (!sys.can(node, f.cred, 1)) { ctx.err.write('bash: ' + name + ': Permission non accordée\n'); return 126; }
        return this.execFile(node, res.abs, name, args, ctx, envOver);
      }
      const found = this.findInPath(name, f);
      if (!found) {
        let hint = '';
        const sb = sys.resolveRaw('/usr/sbin/' + name);
        const pk = sys.pkgForCmd(name);
        if (sb && f.cred.uid !== 0 && sys.isInstalledCmd(name)) hint = 'commande d\'administration (dans /usr/sbin) : il faut la lancer avec sudo';
        else if (pk && !sys.installed.has(pk)) hint = 'cette commande n\'est pas installée : sudo apt install ' + pk;
        else if (name === 'ifconfig' || name === 'netstat') hint = 'ancienne commande (net-tools) : utilise ' + (name === 'ifconfig' ? 'ip a' : 'ss -tulpn');
        else { const s = suggestCmd(name); if (s) hint = 'tu voulais peut-être dire « ' + s + ' » ?'; }
        ctx.err.write((ctx.noBuiltins ? 'sudo: ' : 'bash: ') + name + ' : commande introuvable\n');
        if (hint && ctx.err.tty) this.termOut('  ↳ ' + hint + '\n', 'hint');
        return 127;
      }
      return this.execFile(found.node, found.path, name, args, ctx, envOver);
    }
    async execFile(node, path, name, args, ctx, envOver) {
      const f = ctx.frame, sys = f.sys;
      if (node.bin) {
        const impl = cmds[node.bin];
        if (!impl) { ctx.err.write(node.bin + ': commande non disponible dans ce simulateur\n'); return 127; }
        if (!sys.isInstalledCmd(node.bin)) { ctx.err.write((ctx.noBuiltins ? 'sudo: ' : 'bash: ') + name + ' : commande introuvable\n'); const pk = sys.pkgForCmd(node.bin); if (pk && ctx.err.tty) this.termOut('  ↳ cette commande n\'est pas installée : sudo apt install ' + pk + '\n', 'hint'); return 127; }
        return this.spawnRun(node.bin, args, ctx, impl, [name].concat(args).join(' '), envOver);
      }
      if (node.compiled) {
        return this.spawnRun(name, args, ctx, async (c) => { c.out(node.compiled.output); return 0; }, [name].concat(args).join(' '));
      }
      // script
      if (!sys.can(node, f.cred, 4)) { ctx.err.write('bash: ' + name + ': Permission non accordée\n'); return 126; }
      const first = (node.c.split('\n')[0] || '');
      if (/^#!/.test(first) && !/bash|\/sh\b/.test(first)) { ctx.err.write(name + ': interpréteur « ' + first.slice(2).trim() + ' » non simulé\n'); return 126; }
      return this.runScriptProcess(node.c, args, ctx, { argv0: name, cmd: '/bin/bash ' + name + (args.length ? ' ' + args.join(' ') : '') });
    }
    // exécute un script dans un nouveau processus bash
    async runScriptProcess(text, args, ctx, o) {
      const f = ctx.frame, sys = f.sys;
      const pid = ctx.forcePid || sys.allocPid();
      ctx.forcePid = null;
      const proc = sys.addProc({ pid, ppid: ctx.selfPid, uid: f.cred.uid, cmd: o.cmd, comm: 'bash', state: 'S', tty: this.tty, cwd: f.cwd, nohup: ctx.nohup });
      const run = this.runScriptIn(proc, text, args, ctx, o.argv0);
      return this.awaitProc(proc, sys, run, ctx);
    }
    // exécute le texte d'un script DANS le processus proc (bash script.sh, bash -c, ./script)
    async runScriptIn(proc, text, args, ctx, argv0) {
      const f = ctx.frame, sys = f.sys;
      proc.isShell = true; proc.comm = 'bash'; proc.state = 'S';
      const sc = { proc, dead: false, pending: [], wake: null };
      const sctx = this.newCtx(f, { out: ctx.out, err: ctx.err, stdin: ctx.stdin, selfPid: proc.pid, args: args || [], argv0: argv0 || 'bash', script: true, sc, token: null, traps: {} });
      sctx.frame = Object.assign({}, f, { vars: Object.assign({}, f.vars), lastStatus: 0, lastBg: '', jobs: [], jobOrder: [], aliases: {}, env: Object.assign({}, f.env) });
      proc.traps = sctx.traps;
      proc.trapHit = (sig) => { sc.pending.push(sig); if (sc.wake) sc.wake(); };
      proc.onKill = (sig) => { sc.dead = true; sys.exitProc(proc.pid, 128 + sig); if (sc.wake) sc.wake(); };
      try { await this.runScriptText(text, sctx); return sctx.frame.lastStatus; }
      catch (e) { if (e instanceof ExitSig) return e.exitCode; if (e.abort) return sc.dead ? 128 + 15 : 130; throw e; }
      finally { proc.onKill = null; proc.trapHit = null; }
    }
    async runScriptText(text, ctx, quiet) {
      let ast;
      try { ast = APP.sh.parse(text); }
      catch (e) { if (!quiet) ctx.err.write((ctx.argv0 || 'bash') + ': ' + e.message + '\n'); ctx.frame.lastStatus = 2; return 2; }
      return this.execList(ast, ctx);
    }
    async runPendingTraps(ctx) {
      const sc = ctx.sc;
      if (!sc || !sc.pending.length) return;
      while (sc.pending.length) {
        const sig = sc.pending.shift();
        const action = ctx.traps[sig];
        if (action) {
          const ast = APP.sh.parse(action);
          await this.execList(ast, Object.assign({}, ctx, { sc: Object.assign({}, sc, { pending: [] }) }));
        }
      }
    }
    // lance une commande du simulateur dans un processus
    async spawnRun(name, args, ctx, impl, cmdText, envOver) {
      const f = ctx.frame, sys = f.sys;
      const pid = ctx.forcePid || sys.allocPid();
      ctx.forcePid = null;
      const proc = sys.addProc({ pid, ppid: ctx.selfPid, uid: ctx.asUid != null ? ctx.asUid : f.cred.uid, cmd: cmdText, comm: name, state: 'R', tty: this.tty, cwd: f.cwd, nohup: ctx.nohup, nice: ctx.niceVal || 0, cpu0: ctx.cpu0 != null ? ctx.cpu0 : null });
      if (ctx.execReplace) { /* réservé */ }
      const c = new SIM.CmdCtx(this, ctx, name, args, proc, envOver);
      const run = Promise.resolve().then(() => impl(c)).then((st) => (st == null ? 0 : st), (e) => {
        if (e instanceof ExitSig) throw e;
        if (e && e.abort) return 130;
        if (e && e.fsError) { return 1; }
        console.error(e); c.err(name + ': erreur interne du simulateur : ' + e.message + '\n'); return 1;
      });
      return this.awaitProc(proc, sys, run, ctx);
    }
    async awaitProc(proc, sys, run, ctx) {
      const pid = proc.pid;
      const finish = (st) => { if (sys.procs.has(pid) && proc.state !== 'Z') sys.exitProc(pid, st); (sys.lastExit = sys.lastExit || {})[pid] = st; return st; };
      const exitP = new Promise((res) => { (proc.waiters = proc.waiters || []).push((st) => res({ st, killed: true })); });
      if (ctx.bg) {
        return Promise.race([run.then((st) => ({ st })), exitP]).then((r) => (r.killed ? r.st : finish(r.st)), (e) => { if (e instanceof ExitSig) return finish(e.exitCode); return finish(1); });
      }
      if (proc.placeholder) proc.placeholder = false;
      if (!ctx.script) this.fgProcs.add(proc);
      proc.fg = true;
      const stopP = ctx.script ? new Promise(() => {}) : new Promise((res) => {
        const off = sys.on((type, d) => { if (d.pid === pid && type === 'stopped') { off(); res({ stopped: true }); } });
        exitP.then(() => off());
      });
      let r;
      try { r = await Promise.race([run.then((st) => ({ st })), exitP, stopP]); }
      catch (e) { this.fgProcs.delete(proc); if (e instanceof ExitSig) { finish(e.exitCode); throw e; } throw e; }
      this.fgProcs.delete(proc);
      proc.fg = false;
      if (r.stopped) {
        const f = ctx.frame;
        const job = this.newJob(this.f, [pid], ctx.line ? cmdTextOf(ctx, proc) : proc.cmd);
        job.state = 'Stopped';
        this.termOut('\n' + this.fmtJob(this.f, job) + '\n', 'out');
        f.lastStatus = 148;
        if (ctx.token) ctx.token.aborted = false;
        run.then(finish, () => finish(1)).then((st) => this.jobUpdate(job, this.f, st));
        throw new Abort();
      }
      if (r.killed) { const st = r.st; if (st === 130 && !ctx.script) this.termOut('\n', 'out'); return st; }
      return finish(r.st);
    }
    // reprise d'un job au premier plan
    async foreground(job, ctx) {
      const f = this.f, sys = job.sys;
      for (const pid of job.pids) for (const q of [pid].concat(descendants(sys, pid))) sys.signal(q, 18, null);
      job.state = 'Running';
      const procs = job.pids.map((p) => sys.proc(p)).filter(Boolean);
      if (!procs.length) { this.removeJob(f, job); return 0; }
      const main = procs[0];
      this.fgProcs.add(main);
      main.fg = true;
      const r = await this.waitFg(main, sys, ctx);
      this.fgProcs.delete(main); main.fg = false;
      if (r.stopped) { job.state = 'Stopped'; this.termOut('\n' + this.fmtJob(f, job) + '\n', 'out'); f.jobOrder = f.jobOrder.filter((x) => x !== job.id).concat([job.id]); return 148; }
      this.removeJob(f, job);
      if (r.st === 130) this.termOut('\n', 'out');
      return r.st;
    }

    /* ---------- complétion (Tab) ---------- */
    complete(before) {
      const f = this.f;
      const m = /(\S*)$/.exec(before);
      const word = m[1];
      const isCmd = !/\S\s/.test(before.replace(/^\s*(sudo\s+)?/, '')) && !word.includes('/');
      const cands = [];
      if (isCmd) {
        const set = new Set(BUILTINS.concat(Object.keys(f.aliases)));
        for (const d of (f.env.PATH || '').split(':')) { const n = f.sys.resolveRaw(d); if (n && n.t === 'd') for (const k of Object.keys(n.ch)) if (f.sys.isInstalledCmd(k)) set.add(k); }
        for (const k of set) if (k.startsWith(word)) cands.push(k + ' ');
      } else {
        let w = word;
        let dpart = w.includes('/') ? w.slice(0, w.lastIndexOf('/') + 1) : '';
        const fpart = w.slice(dpart.length);
        let dpath = dpart.replace(/^~(?=\/|$)/, f.env.HOME) || '.';
        try {
          const { node } = f.sys.lookup(dpath, f.cred, f.cwd);
          if (node.t === 'd' && f.sys.can(node, f.cred, 4)) {
            for (const k of Object.keys(node.ch).sort(cmpName)) {
              if (k.startsWith(fpart) && (fpart[0] === '.' || k[0] !== '.')) {
                const n = node.ch[k];
                cands.push(dpart + k + (n.t === 'd' ? '/' : ' '));
              }
            }
          }
        } catch (e) { /* rien */ }
      }
      if (!cands.length) return null;
      if (cands.length === 1) return { line: before.slice(0, before.length - word.length) + cands[0] };
      let common = cands[0];
      for (const c of cands) while (!c.startsWith(common)) common = common.slice(0, -1);
      return { line: before.slice(0, before.length - word.length) + common, list: cands.map((c) => c.trim().replace(/^.*\/(?=.)/, '')) };
    }
  }

  function descendants(sys, pid) { const out = []; for (const p of sys.procs.values()) if (p.ppid === pid) { out.push(p.pid); out.push(...descendants(sys, p.pid)); } return out; }
  function sleep(ms) { return new Promise((r) => setTimeout(r, ms)); }
  function escRe(s) { return s.replace(/[.*+?^${}()|[\]\\/]/g, '\\$&'); }
  function unesc(s) { return s.replace(/\\(.)/g, '$1'); }
  function splitPat(p) { const out = []; let cur = '', depth = 0; for (let i = 0; i < p.length; i++) { const c = p[i]; if (c === '\\' && p[i + 1] === '/') { out.push(cur); cur = ''; i++; continue; } if (c === '\\') { cur += c + p[i + 1]; i++; continue; } if (c === '[') depth++; if (c === ']') depth--; cur += c; } out.push(cur); return out; }
  function cmpName(a, b) { const x = a.replace(/^\./, '').toLowerCase(), y = b.replace(/^\./, '').toLowerCase(); return x < y ? -1 : x > y ? 1 : 0; }
  function nodeText(node, line) {
    const parts = [];
    const pipeText = (p) => p.cmds.map((c) => (c.type === 'cmd' ? c.words.map(APP.sh.wordText).concat(c.redirs.map((r) => r.op + (r.target ? ' ' + APP.sh.wordText(r.target) : ''))).join(' ') : c.type)).join(' | ');
    parts.push(pipeText(node.first));
    for (const r of node.rest) parts.push(r.op + ' ' + pipeText(r.p));
    return parts.join(' ');
  }
  function cmdTextOf(ctx, proc) { return proc.cmd; }
  function suggestCmd(name) {
    let best = null, bd = 3;
    const all = Object.keys(cmds).concat(BUILTINS);
    for (const k of all) { const d = APP.util.lev(name, k); if (d < bd) { bd = d; best = k; } }
    return bd <= 2 && best !== name ? best : null;
  }
  SIM.cmpName = cmpName;
  SIM.Shell = Shell;
  SIM.writers = { TermWriter, BufWriter, NullWriter, FileWriter };
  SIM.descendants = descendants;
  SIM.sleep = sleep;
})();
