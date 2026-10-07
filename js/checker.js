/* Correcteur des exercices « tape la commande » : normalisation des commandes,
   comparaison tolérante et explication détaillée des erreurs. */
(function () {
  'use strict';
  const APP = (window.APP = window.APP || {});
  const U = APP.util;

  /* ================= droits (partagé avec le simulateur) ================= */
  const perm = (APP.perm = {});
  perm.toStr = function (m, type) {
    const s = 'rwxrwxrwx'.split('').map((c, i) => (m & (1 << (8 - i)) ? c : '-'));
    if (m & 0o4000) s[2] = s[2] === 'x' ? 's' : 'S';
    if (m & 0o2000) s[5] = s[5] === 'x' ? 's' : 'S';
    if (m & 0o1000) s[8] = s[8] === 'x' ? 't' : 'T';
    return (type || '') + s.join('');
  };
  perm.fromStr = function (s) {
    s = s.replace(/^[-dl]/, s.length === 10 ? '' : s[0]);
    if (s.length === 10) s = s.slice(1);
    let m = 0;
    for (let i = 0; i < 9; i++) { const c = s[i]; if (c && c !== '-' && c !== 'S' && c !== 'T') m |= 1 << (8 - i); }
    if (/[sS]/.test(s[2])) m |= 0o4000;
    if (/[sS]/.test(s[5])) m |= 0o2000;
    if (/[tT]/.test(s[8])) m |= 0o1000;
    return m;
  };
  perm.oct = (m, digits) => (m & 0o7777).toString(8).padStart(digits || 3, '0');
  // Applique un mode chmod (octal ou symbolique). Retourne null si invalide.
  perm.apply = function (mode, cur, isDir, umask) {
    if (umask == null) umask = 0o022;
    if (/^[0-7]{1,4}$/.test(mode)) {
      const v = parseInt(mode, 8);
      if (mode.length <= 3 && isDir) return (cur & 0o6000) | v; // chmod 755 conserve setgid sur un répertoire
      return v;
    }
    let m = cur & 0o7777;
    for (const clause of mode.split(',')) {
      const mm = /^([ugoa]*)((?:[-+=][rwxXstugo]*)+)$/.exec(clause);
      if (!mm) return null;
      let who = mm[1];
      const noWho = !who;
      if (!who || who.includes('a')) who = 'ugo';
      const ops = mm[2].match(/[-+=][rwxXstugo]*/g);
      for (const op of ops) {
        const o = op[0], ps = op.slice(1);
        let bits = 0;
        for (const p of ps) {
          if ('ugo'.includes(p)) { // copie des droits d'une catégorie
            const sh = p === 'u' ? 6 : p === 'g' ? 3 : 0;
            const v = (m >> sh) & 7;
            for (const w of who) bits |= v << (w === 'u' ? 6 : w === 'g' ? 3 : 0);
            continue;
          }
          for (const w of who) {
            const sh = w === 'u' ? 6 : w === 'g' ? 3 : 0;
            if (p === 'r') bits |= 4 << sh;
            if (p === 'w') bits |= 2 << sh;
            if (p === 'x') bits |= 1 << sh;
            if (p === 'X' && (isDir || (m & 0o111))) bits |= 1 << sh;
            if (p === 's' && w === 'u') bits |= 0o4000;
            if (p === 's' && w === 'g') bits |= 0o2000;
            if (p === 't') bits |= 0o1000;
          }
        }
        if (noWho && o !== '=') bits &= ~umask | 0o7000;
        if (o === '+') m |= bits;
        else if (o === '-') m &= ~bits;
        else {
          let clear = 0;
          for (const w of who) clear |= 7 << (w === 'u' ? 6 : w === 'g' ? 3 : 0);
          if (who.includes('u')) clear |= 0o4000;
          if (who.includes('g')) clear |= 0o2000;
          m = (m & ~clear) | bits;
        }
      }
    }
    return m;
  };
  // umask symbolique absolu (u=rwx,g=rx,o=) -> octal ; null si relatif
  perm.umaskFromSym = function (s, cur) {
    const allowed = perm.apply(s, 0o777 & ~(cur == null ? 0o022 : cur), true, 0);
    if (allowed == null) return null;
    return 0o777 & ~allowed;
  };

  /* ================= normalisation ================= */
  const HOME = '/home/etudiant';
  const SIGS = APP.SIGNALS;
  function sigNum(s) {
    if (s == null) return null;
    s = String(s).toUpperCase();
    if (/^\d+$/.test(s)) return parseInt(s, 10);
    s = s.replace(/^SIG/, '');
    return SIGS[s] != null ? SIGS[s] : null;
  }

  // Spécifications d'options : arg = options courtes suivies d'une valeur ; eq = équivalences ;
  // long = options longues -> clé ; longArg = options longues qui prennent une valeur ; harmless = options tolérées en trop
  const SPEC = {
    ls: { long: { all: 'a', 'human-readable': 'h', recursive: 'R', directory: 'd' }, harmless: 'h color F' },
    rm: { eq: { R: 'r' }, long: { recursive: 'r', force: 'f', interactive: 'i', verbose: 'v' }, harmless: 'v' },
    cp: { eq: { R: 'r' }, long: { recursive: 'r', interactive: 'i', verbose: 'v' }, harmless: 'v' },
    mv: { long: { interactive: 'i', verbose: 'v' }, harmless: 'v' },
    mkdir: { arg: 'm', long: { parents: 'p', verbose: 'v' }, harmless: 'v p' },
    rmdir: { harmless: 'v' },
    chmod: { eq: {}, long: { recursive: 'R' }, harmless: 'v' },
    chown: { long: { recursive: 'R' }, harmless: 'v' },
    chgrp: { long: { recursive: 'R' }, harmless: 'v' },
    usermod: { arg: 'Ggsdlue', long: { append: 'a', groups: 'G', lock: 'L', unlock: 'U' } },
    useradd: { arg: 'Ggsdue' },
    gpasswd: { arg: 'adAM' },
    passwd: { long: { lock: 'l', unlock: 'u', status: 'S' } },
    chage: { arg: 'MmWIEd', long: { list: 'l', maxdays: 'M', mindays: 'm' }, longArg: ['maxdays', 'mindays'] },
    grep: { arg: 'efABCm', eq: { R: 'r' }, long: { 'ignore-case': 'i', 'line-number': 'n', count: 'c', recursive: 'r', 'invert-match': 'v' }, harmless: 'color' },
    head: { arg: 'nc', long: { lines: 'n' }, longArg: ['lines'] },
    tail: { arg: 'nc', long: { lines: 'n', follow: 'f' }, longArg: ['lines'] },
    wc: { long: { lines: 'l', words: 'w', bytes: 'c' } },
    sort: { arg: 'kt', long: { 'human-numeric-sort': 'h', reverse: 'r', numeric: 'n' } },
    du: { arg: 'd', long: { summarize: 's', 'human-readable': 'h', 'max-depth': 'd' }, longArg: ['max-depth'] },
    df: { long: { 'human-readable': 'h' } },
    tar: { arg: 'fC', long: { create: 'c', extract: 'x', list: 't', file: 'f', gzip: 'z', directory: 'C', verbose: 'v' }, longArg: ['file', 'directory'], harmless: 'v' },
    gcc: { arg: 'o', noCluster: true },
    ps: { arg: 'oupCtUgG', longArg: ['sort', 'ppid', 'pid', 'user'] },
    pstree: {},
    pgrep: { arg: 'uUgGPt' },
    pkill: { arg: 'uUgGPt' },
    killall: { arg: 'u' },
    nice: { arg: 'n' },
    renice: { arg: 'n' },
    taskset: { arg: 'c' },
    ssh: { arg: 'pilLoRDFJ' },
    scp: { arg: 'PiolFJ' },
    'ssh-keygen': { arg: 'tbCfNEm' },
    'ssh-copy-id': { arg: 'ipo' },
    journalctl: { arg: 'unpS', long: { unit: 'u', follow: 'f', lines: 'n' }, longArg: ['since', 'until', 'unit', 'lines'], harmless: 'no-pager' },
    systemctl: { harmless: 'no-pager l' },
    ping: { arg: 'ciswWItQ' },
    curl: { arg: 'oXHdAuwm', long: { head: 'I', silent: 's' } },
    python3: { arg: 'mc', noCluster: true },
    tcpdump: { arg: 'icswC' },
    dhclient: {},
    ufw: {},
    useradd_: {},
    find: { noCluster: true },
    apt: { harmless: 'y' },
    sudo: { arg: 'ugCh' },
    su: { arg: 'cs', long: { login: 'l' } },
    date: {},
    ip: { noCluster: false },
    nmcli: {},
    deluser: {},
    adduser: { longArg: ['gecos', 'uid', 'gid', 'shell', 'home', 'ingroup'] },
    hostnamectl: {},
    dig: {},
    ss: {},
    bash: { arg: 'c' },
    umask: {},
    cut: { arg: 'dfc' },
    uniq: {},
    tree: { arg: 'L' },
    diff: { long: { recursive: 'r' } },
    echo: {},
    tee: { long: { append: 'a' } },
    'fail2ban-client': {}
  };
  const PREFIX = new Set(['sudo', 'nohup', 'nice', 'taskset', 'time', 'exec']);

  function homeNorm(t) {
    if (t === HOME || t === HOME + '/') return '~';
    if (t.startsWith(HOME + '/')) return '~' + t.slice(HOME.length);
    if (t === '$HOME' || t === '${HOME}') return '~';
    if (t.startsWith('$HOME/')) return '~' + t.slice(5);
    if (t.startsWith('${HOME}/')) return '~' + t.slice(7);
    return t;
  }
  function pathNorm(t) {
    t = homeNorm(t);
    if (t.length > 1 && t.endsWith('/') && !t.endsWith('//')) t = t.slice(0, -1);
    if (t.startsWith('./') && t.length > 2) t = t.slice(2);
    if (t === '~/') t = '~';
    return t;
  }

  // Analyse générique des options
  function parseOpts(name, toks) {
    const spec = SPEC[name] || {};
    const flags = {}, pos = [];
    const argLetters = spec.arg || '';
    const eq = spec.eq || {};
    let i = 0, endOpts = false;
    while (i < toks.length) {
      const t = toks[i];
      if (!endOpts && t === '--') { endOpts = true; i++; continue; }
      if (!endOpts && t.startsWith('--') && t.length > 2) {
        let [k, v] = t.slice(2).split(/=(.*)/s);
        if (v === undefined && (spec.longArg || []).includes(k) && i + 1 < toks.length) { v = toks[++i]; }
        const key = (spec.long && spec.long[k]) || k;
        flags[key] = v === undefined ? true : v;
        i++; continue;
      }
      if (!endOpts && t.length > 1 && t[0] === '-' && !/^-\d/.test(t)) {
        if (spec.noCluster) {
          const k = t.slice(1);
          if (argLetters.includes(k) && i + 1 < toks.length) { flags[k] = toks[++i]; } else flags[k] = true;
          i++; continue;
        }
        const body = t.slice(1);
        for (let j = 0; j < body.length; j++) {
          const ch = body[j];
          const key = eq[ch] || ch;
          if (argLetters.includes(ch)) {
            let v = body.slice(j + 1);
            if (!v && i + 1 < toks.length) v = toks[++i];
            flags[key] = v;
            break;
          }
          flags[key] = true;
        }
        i++; continue;
      }
      pos.push(t); i++;
    }
    return { flags, pos };
  }

  // Normalisation spécifique à chaque commande ; retourne {name, flags, pos, inner, sudo}
  function normCmd(words, redirs) {
    let toks = words.slice();
    const out = { name: '', flags: {}, pos: [], redirs: (redirs || []).map((r) => ({ op: r.op.replace(/^1>/, '>'), target: r.target != null ? pathNorm(r.target) : '' })), sudo: false };
    if (!toks.length) return out;
    let name = toks.shift();
    if (name === 'apt-get') name = 'apt';
    if (name.includes('/') && /^(\/usr)?\/s?bin\//.test(name)) name = name.replace(/^.*\//, '');

    if (PREFIX.has(name)) {
      if (name === 'sudo') {
        const { flags, rest } = takePrefixOpts(toks, 'ugCh');
        if (!rest.length) { out.name = 'sudo'; out.flags = flags; return out; }
        const inner = normCmd(rest, redirs);
        inner.sudo = true; if (flags.u) inner.sudoUser = flags.u;
        return inner;
      }
      if (name === 'nice') {
        let n = null;
        if (toks[0] === '-n') { n = toks[1]; toks = toks.slice(2); }
        else if (/^-n-?\d+$/.test(toks[0] || '')) { n = toks[0].slice(2); toks = toks.slice(1); }
        else if (/^-\d+$/.test(toks[0] || '')) { n = toks[0].slice(1); toks = toks.slice(1); }
        else if (/^--adjustment=/.test(toks[0] || '')) { n = toks[0].split('=')[1]; toks = toks.slice(1); }
        out.name = 'nice'; out.flags = { n: n == null ? '10' : String(parseInt(n, 10)) };
        out.inner = toks.length ? normCmd(toks, []) : null; return out;
      }
      if (name === 'taskset') {
        let c = null;
        if (toks[0] === '-c' || toks[0] === '--cpu-list') { c = toks[1]; toks = toks.slice(2); }
        else if (toks.length) { c = 'mask:' + toks[0]; toks = toks.slice(1); }
        out.name = 'taskset'; out.flags = { c }; out.inner = toks.length ? normCmd(toks, []) : null; return out;
      }
      out.name = name; out.inner = toks.length ? normCmd(toks, []) : null; return out;
    }
    out.name = name;

    // ---- cas particuliers ----
    if (name === 'kill' || name === 'pkill' || name === 'killall') {
      let sig = null; const rest = [];
      for (let i = 0; i < toks.length; i++) {
        const t = toks[i];
        if ((t === '-s' || t === '--signal' || (t === '-n' && name === 'kill')) && i + 1 < toks.length) { sig = sigNum(toks[++i]); continue; }
        if (t === '-l' || t === '-L') { out.flags.l = true; continue; }
        const m = /^-(SIG)?([A-Za-z]+|\d+)$/.exec(t);
        if (m && (sigNum(m[2]) != null) && !(name !== 'kill' && /^[a-z]+$/.test(m[2]) && !SIGS[m[2].toUpperCase()])) {
          if (name === 'pkill' && /^[fxnovceu]$/.test(m[2])) { rest.push(t); continue; }
          if (name === 'killall' && /^[uiIeqvw]$/.test(m[2])) { rest.push(t); continue; }
          sig = sigNum(m[2]); continue;
        }
        rest.push(t);
      }
      const p = parseOpts(name, rest);
      out.flags = p.flags; out.pos = p.pos;
      if (!out.flags.l) out.flags.sig = String(sig == null ? 15 : sig);
      if (out.flags.u) out.flags.u = userNorm(out.flags.u);
      if (name === 'kill') out.pos = out.pos.slice().sort();
      return out;
    }
    if (name === 'head' || name === 'tail') {
      toks = toks.map((t) => (/^-\d+$/.test(t) ? '-n' + t.slice(1) : t));
      const p = parseOpts(name, toks); out.flags = p.flags; out.pos = p.pos.map(pathNorm);
      if (out.flags.n != null && out.flags.n !== true) out.flags.n = String(out.flags.n).replace(/^\+?/, (m) => m);
      return out;
    }
    if (name === 'tar') {
      if (toks.length && /^[a-zA-Z]+$/.test(toks[0])) toks[0] = '-' + toks[0];
      const p = parseOpts(name, toks); out.flags = p.flags; out.pos = p.pos.map(pathNorm);
      if (typeof out.flags.f === 'string') out.flags.f = pathNorm(out.flags.f);
      if (typeof out.flags.C === 'string') out.flags.C = pathNorm(out.flags.C);
      return out;
    }
    if (name === 'ps') {
      const rest = [];
      for (const t of toks) {
        if ((/^[a-zA-Z]+$/.test(t) || /^-[aux]*x[aux]*$/.test(t)) && !rest.length && t !== 'root') { for (const ch of t.replace(/^-/, '')) out.flags['B_' + ch] = true; }
        else rest.push(t);
      }
      const p = parseOpts('ps', rest);
      Object.assign(out.flags, p.flags); out.pos = p.pos;
      if (typeof out.flags.u === 'string') out.flags.u = userNorm(out.flags.u);
      if (typeof out.flags.p === 'string') out.flags.p = out.flags.p.split(',').sort().join(',');
      if (out.flags.A) { out.flags.e = true; delete out.flags.A; }
      return out;
    }
    if (name === 'find') return normFind(out, toks);
    if (name === 'ip') {
      const p = []; const fl = {};
      for (const t of toks) { if (/^-/.test(t) && !p.length) fl[t.replace(/^-+/, '')] = true; else p.push(t); }
      const OBJ = { a: 'addr', ad: 'addr', addr: 'addr', address: 'addr', r: 'route', ro: 'route', route: 'route', l: 'link', li: 'link', link: 'link', n: 'neigh', neigh: 'neigh', neighbor: 'neigh' };
      if (p.length) p[0] = OBJ[p[0]] || p[0];
      if (p[1] === 'show' || p[1] === 'list' || p[1] === 'ls' || p[1] === 'sh') { p.splice(1, 1); if (p[1] === 'dev') p.splice(1, 1); }
      if (p[1] === 'a') p[1] = 'add'; if (p[1] === 'd') p[1] = 'del'; if (p[1] === 'delete') p[1] = 'del';
      out.flags = fl; out.pos = p; return out;
    }
    if (name === 'cd') {
      const p = parseOpts(name, toks); out.pos = p.pos.map(pathNorm);
      if (!out.pos.length) out.pos = ['~'];
      return out;
    }
    if (name === 'echo') {
      while (toks.length && /^-[neE]+$/.test(toks[0])) { for (const ch of toks[0].slice(1)) out.flags[ch] = true; toks.shift(); }
      out.pos = toks.length ? [toks.join(' ')] : [];
      return out;
    }
    if (name === 'alias') {
      out.pos = toks.map((t) => {
        const i = t.indexOf('=');
        if (i < 0) return t;
        const inner = t.slice(i + 1).trim();
        let canon = inner;
        try { canon = canonical(inner); } catch (e) { /* tel quel */ }
        return t.slice(0, i) + '=' + canon;
      });
      return out;
    }
    if (name === 'su') {
      const rest = [];
      for (const t of toks) { if (t === '-' || t === '-l' || t === '--login') out.flags.l = true; else rest.push(t); }
      const p = parseOpts('su', rest); Object.assign(out.flags, p.flags); out.pos = p.pos;
      if (!out.pos.length) out.pos = ['root'];
      return out;
    }
    if (name === 'umask') {
      const p = parseOpts(name, toks); out.flags = p.flags;
      out.pos = p.pos.map((m) => {
        if (/^[0-7]{1,4}$/.test(m)) return perm.oct(parseInt(m, 8), 3);
        if (/=/.test(m) && !/[+-]/.test(m)) { const v = perm.umaskFromSym(m); if (v != null) return perm.oct(v, 3); }
        return m;
      });
      return out;
    }
    if (name === 'chmod') {
      const p = parseOpts(name, toks.map((t, i) => (i === 0 && /^[ugoa]*[-+=]/.test(t) && t[0] === '-' ? '\u0000' + t : t)));
      out.flags = p.flags;
      out.pos = p.pos.map((t) => (t[0] === '\u0000' ? t.slice(1) : t));
      if (out.pos.length) {
        const m = out.pos[0];
        if (/^[0-7]{1,4}$/.test(m)) out.pos[0] = perm.oct(parseInt(m, 8), m.length === 4 ? 4 : 3);
      }
      out.pos = out.pos.map((t, i) => (i ? pathNorm(t) : t));
      return out;
    }
    if (name === 'chown' || name === 'chgrp') {
      const p = parseOpts(name, toks); out.flags = p.flags;
      out.pos = p.pos.map((t, i) => (i === 0 ? userNorm(t).replace(/^([^:.]*)\.([^.]+)$/, '$1:$2') : pathNorm(t)));
      return out;
    }
    if (name === 'service' && toks.length >= 2) {
      out.name = 'systemctl'; out.pos = [toks[1], toks[0]]; return out;
    }
    if (name === 'systemctl') {
      const p = parseOpts(name, toks); out.flags = p.flags; out.pos = p.pos.map((s) => s.replace(/\.service$/, ''));
      if (out.pos[1] === 'sshd') out.pos[1] = 'ssh';
      return out;
    }
    if (name === 'ufw') {
      const p = parseOpts(name, toks); out.flags = p.flags;
      let pos = p.pos.map((s) => s.toLowerCase());
      if (pos.some((s) => ['from', 'to', 'port', 'proto'].includes(s))) {
        const head = [], pairs = [];
        for (let i = 0; i < pos.length; i++) {
          if (['from', 'to', 'port', 'proto'].includes(pos[i]) && i + 1 < pos.length) { pairs.push(pos[i] + ' ' + pos[i + 1]); i++; }
          else head.push(pos[i]);
        }
        if (!pairs.some((x) => x.startsWith('to '))) pairs.push('to any');
        pos = head.concat(pairs.sort());
      }
      out.pos = pos; return out;
    }
    if (name === 'dig' || name === 'host' || name === 'nslookup') {
      for (const t of toks) { if (t[0] === '+' || t[0] === '@' || t[0] === '-') out.flags[t] = true; else out.pos.push(t); }
      return out;
    }
    if (name === 'ssh') {
      const p = parseOpts(name, toks); out.flags = p.flags; out.pos = p.pos;
      if (typeof out.flags.l === 'string' && out.pos.length) { out.pos[0] = out.flags.l + '@' + out.pos[0]; delete out.flags.l; }
      if (out.flags.p === '22') delete out.flags.p;
      if (out.pos.length > 1) out.pos = [out.pos[0], out.pos.slice(1).join(' ').replace(/\s*;\s*/g, '; ')];
      return out;
    }
    if (name === 'apt') {
      const p = parseOpts(name, toks); out.flags = p.flags; out.pos = p.pos;
      return out;
    }
    if (name === 'deluser' || name === 'adduser' || name === 'useradd' || name === 'userdel' || name === 'usermod' || name === 'groupadd' || name === 'groupdel' || name === 'passwd' || name === 'chage' || name === 'id' || name === 'groups' || name === 'newgrp') {
      const p = parseOpts(name, toks); out.flags = p.flags; out.pos = p.pos.map(userNorm);
      return out;
    }
    if (name === 'renice') {
      const rest = toks.slice();
      if (rest.length && /^[-+]?\d+$/.test(rest[0])) { rest.unshift('-n'); }
      const p = parseOpts(name, rest); out.flags = p.flags; out.pos = p.pos;
      if (out.flags.p === true) delete out.flags.p;
      if (typeof out.flags.n === 'string') out.flags.n = String(parseInt(out.flags.n, 10));
      return out;
    }
    if (name === 'journalctl') {
      const p = parseOpts(name, toks); out.flags = p.flags; out.pos = p.pos;
      if (typeof out.flags.u === 'string') out.flags.u = out.flags.u.replace(/\.service$/, '').replace(/^sshd$/, 'ssh');
      return out;
    }

    const p = parseOpts(name, toks);
    out.flags = p.flags;
    out.pos = p.pos.map(pathNorm);
    return out;
  }
  function userNorm(t) { return t.replace(/\$USER\b|\$\{USER\}|\$\(whoami\)/g, 'etudiant'); }
  function takePrefixOpts(toks, argL) {
    const flags = {}; let i = 0;
    while (i < toks.length && toks[i][0] === '-' && toks[i].length > 1) {
      const body = toks[i].replace(/^-+/, '');
      let consumed = false;
      for (let j = 0; j < body.length; j++) {
        if (argL.includes(body[j])) { flags[body[j]] = body.slice(j + 1) || toks[++i]; consumed = true; break; }
        flags[body[j]] = true;
      }
      i++;
      if (consumed) continue;
    }
    return { flags, rest: toks.slice(i) };
  }
  function normFind(out, toks) {
    const paths = []; let i = 0;
    while (i < toks.length && !/^[-!(]/.test(toks[i])) paths.push(pathNorm(toks[i++]));
    const preds = []; let neg = false; let complex = false;
    while (i < toks.length) {
      let t = toks[i++];
      if (t === '!' || t === '-not') { neg = true; continue; }
      if (t === '-o' || t === '-or' || t === '(' || t === ')' || t === '-a' || t === '-and') { complex = true; preds.push(t); continue; }
      if (t === '-exec' || t === '-ok') {
        const parts = [];
        while (i < toks.length && toks[i] !== ';' && toks[i] !== '+') parts.push(toks[i++]);
        const term = toks[i++] || ';';
        preds.push(t + ' ' + parts.join(' ') + ' ' + term); neg = false; continue;
      }
      const noArg = ['-print', '-ls', '-delete', '-empty', '-print0', '-quit', '-prune'];
      let p = t;
      if (!noArg.includes(t) && i < toks.length) {
        let v = toks[i++];
        if (t === '-user' || t === '-group') v = userNorm(v);
        if (t === '-perm') v = permNorm(v);
        if (t === '-name') p = t + ' ' + v; else p = t + ' ' + v;
      }
      if (p === '-print') { neg = false; continue; }
      preds.push((neg ? '! ' : '') + p); neg = false;
    }
    if (!complex) preds.sort();
    out.pos = paths.length ? paths : ['.'];
    out.flags = {};
    preds.forEach((p, k) => { out.flags['pred' + (complex ? k : '') + ':' + p] = true; });
    return out;
  }
  function permNorm(v) {
    const m = /^([-/]?)(.*)$/.exec(v);
    const pre = m[1], body = m[2];
    if (/^[0-7]+$/.test(body)) return pre + parseInt(body, 8).toString(8);
    const r = perm.apply(body.replace(/^([ugoa]*)=/, '$1+'), 0, false, 0);
    if (r != null && /^[ugoa]*[=+]/.test(body)) return pre + r.toString(8);
    return v;
  }

  // Analyse complète d'une ligne -> séquence de commandes normalisées
  function analyze(line) {
    let src = String(line || '').trim().replace(/^\$\s+/, '').replace(/^#\s+(?=\S)/, '');
    src = src.replace(/[‘’]/g, "'").replace(/[“”«»]/g, '"').replace(/ /g, ' ');
    const ast = APP.sh.parse(src);
    const seq = [];
    ast.items.forEach((item, ii) => {
      const ao = item.node;
      const pipes = [{ op: ii ? ';' : '', p: ao.first }].concat(ao.rest.map((r) => ({ op: r.op, p: r.p })));
      pipes.forEach((pp) => {
        pp.p.cmds.forEach((c, ci) => {
          const sep = ci ? '|' : pp.op;
          if (c.type !== 'cmd') { seq.push({ sep, cmd: { name: '(' + c.type + ')', flags: {}, pos: [], redirs: [] } }); return; }
          const words = c.words.map(APP.sh.wordText);
          const redirs = c.redirs.map((r) => ({ op: r.op, target: r.target ? APP.sh.wordText(r.target) : null }));
          const nc = normCmd(words, redirs);
          for (const a of c.assigns) nc.pos.unshift(a.name + '=' + APP.sh.wordText(a.word));
          seq.push({ sep, cmd: nc });
        });
      });
      if (item.bg) seq[seq.length - 1].bg = true;
    });
    return simplify(seq);
  }

  // Équivalences de pipeline : "cat F | grep x" -> "grep x F" ; "grep x F | wc -l" -> "grep -c x F"
  const FILTERS = { grep: 1, wc: 0, head: 0, tail: 0, sort: 0, less: 0, more: 0, uniq: 0, cut: 0 };
  function simplify(seq) {
    for (let i = 0; i + 1 < seq.length; i++) {
      const a = seq[i].cmd, b = seq[i + 1].cmd;
      if (seq[i + 1].sep === '|' && a.name === 'cat' && !Object.keys(a.flags).length && a.pos.length === 1 && !a.redirs.length && FILTERS[b.name] !== undefined && b.pos.length === FILTERS[b.name] && !a.sudo) {
        b.pos.push(a.pos[0]);
        seq[i + 1].sep = seq[i].sep;
        seq.splice(i, 1); i--;
      }
    }
    for (let i = 0; i + 1 < seq.length; i++) {
      const a = seq[i].cmd, b = seq[i + 1].cmd;
      if (seq[i + 1].sep === '|' && a.name === 'grep' && b.name === 'wc' && b.flags.l && Object.keys(b.flags).length === 1 && !b.pos.length && a.pos.length >= 2 && !a.flags.c) {
        a.flags.c = true; a.redirs = b.redirs; seq[i].bg = seq[i + 1].bg;
        seq.splice(i + 1, 1);
      }
    }
    return seq;
  }

  function flagStr(k, v) {
    if (k.startsWith('pred') && k.includes(':')) return k.slice(k.indexOf(':') + 1);
    if (k.startsWith('B_')) return k.slice(2);
    if (k === 'sig') return '-' + (APP.SIGNAME[v] ? 'SIG' + APP.SIGNAME[v] : v);
    const dash = k.length > 1 && k[0] !== '+' && k[0] !== '@' && k[0] !== '-' ? '--' : k[0] === '+' || k[0] === '@' || k[0] === '-' ? '' : '-';
    return dash + k + (v === true ? '' : (k.length > 1 ? '=' : ' ') + v);
  }
  function cmdCanon(c) {
    if (!c) return '';
    const fl = Object.keys(c.flags).sort().map((k) => flagStr(k, c.flags[k]));
    return [(c.sudo ? 'sudo ' : '') + c.name].concat(fl, c.pos, c.redirs.map((r) => r.op + (r.target || ''))).join(' ') + (c.inner ? ' [' + cmdCanon(c.inner) + ']' : '');
  }
  function seqCanon(seq, ignoreSudo, ignoreHarmless) {
    return seq.map((e) => {
      let c = e.cmd;
      if (ignoreSudo || ignoreHarmless) c = stripCmd(c, ignoreSudo, ignoreHarmless);
      return (e.sep ? e.sep + ' ' : '') + cmdCanon(c) + (e.bg ? ' &' : '');
    }).join(' ');
  }
  function stripCmd(c, sudo, harmless) {
    const h = harmless ? ((SPEC[c.name] && SPEC[c.name].harmless) || '').split(' ').filter(Boolean) : [];
    const flags = {};
    for (const k in c.flags) if (!h.includes(k)) flags[k] = c.flags[k];
    return Object.assign({}, c, { sudo: sudo ? false : c.sudo, flags, inner: c.inner ? stripCmd(c.inner, sudo, harmless) : null });
  }
  function canonical(line) { return seqCanon(analyze(line)); }
  // Équivalence « large » : ps aux / ps -ef / ps -e / ps -A listent tous les processus
  function loose(seq) {
    return seq.map((e) => {
      const c = e.cmd;
      if (c.name !== 'ps') return e;
      const k = Object.keys(c.flags).sort().join(',');
      if (['B_a,B_u,B_x', 'B_a,B_x', 'e,f', 'e', 'A', 'e,l', 'B_a,B_u,B_x,B_w', 'e,f,l'].includes(k)) return Object.assign({}, e, { cmd: Object.assign({}, c, { flags: { ALL: true } }) });
      return e;
    });
  }

  /* ================= vérification d'un exercice ================= */
  function knownCommands() {
    if (knownCommands.cache) return knownCommands.cache;
    const s = new Set(Object.keys(APP.CMD));
    ['cd', 'source', 'export', 'alias', 'unalias', 'history', 'jobs', 'fg', 'bg', 'exit', 'test', 'trap', 'exec', 'wait', 'type', 'read', 'printf', 'seq', 'basename', 'dirname', 'cal', 'locate', 'apt-get', 'service', 'useradd', 'userdel', 'gpasswd', 'lsblk', 'mount', 'free', 'watch', 'xargs', 'awk', 'sed', 'tr', 'file', 'stat'].forEach((x) => s.add(x));
    return (knownCommands.cache = s);
  }
  function suggest(name) {
    let best = null, bd = 9;
    for (const k of knownCommands()) { const d = U.lev(name, k); if (d < bd) { bd = d; best = k; } }
    return bd <= 2 ? best : null;
  }
  function cmdDesc(name) { const c = APP.CMD[name]; return c ? c[0] : null; }
  function optDesc(name, k) {
    const c = APP.CMD[name];
    if (k === 'sig') return 'signal envoyé';
    if (k.startsWith('pred')) return 'critère de recherche';
    return c && c[2] && c[2][k] ? c[2][k] : null;
  }
  const code = (s) => '`' + s + '`';

  function sameMultiset(a, b) { return a.length === b.length && a.slice().sort().join('\u0001') === b.slice().sort().join('\u0001'); }

  function diffCmd(u, e, msgs) {
    if (u.name !== e.name) {
      if (!knownCommands().has(u.name) && !/^[.~/]/.test(u.name)) {
        const s = suggest(u.name);
        msgs.push('Commande inconnue ' + code(u.name) + (s ? ' : tu voulais peut-être dire ' + code(s) + ' ?' : '.'));
      } else {
        const du = cmdDesc(u.name), de = cmdDesc(e.name);
        msgs.push('Tu utilises ' + code(u.name) + (du ? ' — ' + du : '') + '. Ici il faut ' + code(e.name) + (de ? ' — ' + de : '') + '.');
      }
      return;
    }
    const name = e.name;
    if (e.sudo && !u.sudo) msgs.push('Cette action nécessite les droits administrateur : il faut préfixer la commande par ' + code('sudo') + '.');
    if (e.inner || u.inner) {
      if (!e.inner || !u.inner) msgs.push('Il manque la commande à lancer après ' + code(name) + '.');
      else if (cmdCanon(e.inner) !== cmdCanon(u.inner)) { msgs.push('La commande lancée par ' + code(name) + ' n\'est pas la bonne.'); diffCmd(u.inner, e.inner, msgs); }
    }
    // options
    const harmless = ((SPEC[name] && SPEC[name].harmless) || '').split(' ');
    for (const k of Object.keys(e.flags)) {
      if (!(k in u.flags)) {
        if (k === 'sig' || (name === 'kill' && k === 'sig')) continue;
        const d = optDesc(name, k);
        msgs.push('Il manque l\'option ' + code(flagStr(k, e.flags[k])) + (d ? ' : ' + d : '') + '.');
      } else if (e.flags[k] !== u.flags[k]) {
        if (k === 'sig') {
          const se = e.flags[k], su = u.flags[k];
          msgs.push('Mauvais signal : tu envoies ' + (APP.SIGDESC[su] || 'le signal ' + su) + ', alors qu\'il faut ' + (APP.SIGDESC[se] || 'le signal ' + se) + '.');
        } else msgs.push('Valeur de ' + code(flagStr(k, true)) + ' : attendu ' + code(e.flags[k] === true ? '(sans valeur)' : e.flags[k]) + ', reçu ' + code(u.flags[k] === true ? '(sans valeur)' : u.flags[k]) + '.');
      }
    }
    for (const k of Object.keys(u.flags)) {
      if (!(k in e.flags) && !harmless.includes(k)) {
        const d = optDesc(name, k);
        if (name === 'usermod' && k === 'G' && !u.flags.a) continue;
        msgs.push('L\'option ' + code(flagStr(k, u.flags[k])) + ' n\'est pas attendue ici' + (d ? ' (elle sert à : ' + d + ')' : '') + '.');
      }
    }
    if (name === 'usermod' && u.flags.G && !u.flags.a && e.flags.a) msgs.push('Attention : sans ' + code('-a') + ', ' + code('usermod -G') + ' REMPLACE tous les groupes secondaires au lieu d\'en ajouter un.');
    // arguments
    if (u.pos.join('\u0001') !== e.pos.join('\u0001')) {
      if (sameMultiset(u.pos, e.pos)) msgs.push('Les bons arguments, mais dans le mauvais ordre : attendu ' + code(e.pos.join(' ')) + '.');
      else {
        const miss = e.pos.filter((x) => !u.pos.includes(x));
        const extra = u.pos.filter((x) => !e.pos.includes(x));
        if (miss.length && extra.length && miss.length === extra.length && miss.length === 1) msgs.push('Argument incorrect : ' + code(extra[0]) + ' au lieu de ' + code(miss[0]) + '.');
        else {
          if (miss.length) msgs.push('Argument(s) manquant(s) ou différent(s) : ' + miss.map(code).join(', ') + '.');
          if (extra.length) msgs.push('Argument(s) en trop ou inattendu(s) : ' + extra.map(code).join(', ') + '.');
          if (!miss.length && !extra.length) msgs.push('Les arguments ne correspondent pas : attendu ' + code(e.pos.join(' ')) + '.');
        }
      }
    }
    // redirections
    const ru = u.redirs.map((r) => r.op + ' ' + r.target), re = e.redirs.map((r) => r.op + ' ' + r.target);
    if (ru.join('|') !== re.join('|')) {
      for (const r of e.redirs) {
        const same = u.redirs.find((x) => x.target === r.target);
        if (same && same.op !== r.op) {
          if (r.op === '>>' && same.op === '>') msgs.push(code('>') + ' ÉCRASE le contenu du fichier ; pour ajouter à la fin, il faut ' + code('>>') + '.');
          else if (r.op === '>' && same.op === '>>') msgs.push(code('>>') + ' ajoute à la fin ; ici on veut écrire (écraser) le fichier avec ' + code('>') + '.');
          else msgs.push('Mauvaise redirection : ' + code(same.op) + ' au lieu de ' + code(r.op) + '.');
        } else if (!same) {
          if (r.op === '2>' && r.target === '/dev/null') msgs.push('Il faut masquer les messages d\'erreur avec ' + code('2>/dev/null') + '.');
          else msgs.push('Il manque la redirection ' + code(r.op + ' ' + r.target) + '.');
        }
      }
      for (const r of u.redirs) if (!e.redirs.find((x) => x.target === r.target)) msgs.push('Redirection inattendue : ' + code(r.op + ' ' + r.target) + '.');
    }
  }

  function diagnose(us, es) {
    const msgs = [];
    const sepName = { '|': 'un tube |', '&&': '&&', '||': '||', ';': ';' };
    if (us.length !== es.length) {
      const eNames = es.map((x) => x.cmd.name), uNames = us.map((x) => x.cmd.name);
      if (es.some((x) => x.sep === '|') && !us.some((x) => x.sep === '|')) {
        const i = es.findIndex((x) => x.sep === '|');
        msgs.push('Il faut enchaîner avec un tube ' + code('|') + ' : la sortie de ' + code(es[i - 1].cmd.name) + ' doit devenir l\'entrée de ' + code(es[i].cmd.name) + '.');
      } else if (es.length > us.length) msgs.push('La réponse attendue enchaîne ' + es.length + ' commandes (' + eNames.map(code).join(', ') + ') ; la tienne en a ' + us.length + '.');
      else msgs.push('Ta réponse contient ' + us.length + ' commandes (' + uNames.map(code).join(', ') + ') alors que ' + (es.length === 1 ? 'une seule suffit' : es.length + ' suffisent') + '.');
      // conseils sur les commandes communes
      for (const e of es) { const u = us.find((x) => x.cmd.name === e.cmd.name); if (u) diffCmd(u.cmd, e.cmd, msgs); }
      return msgs;
    }
    for (let i = 0; i < es.length; i++) {
      const u = us[i], e = es[i];
      if (u.sep !== e.sep) {
        if (e.sep === '&&' && u.sep === ';') msgs.push(code(';') + ' enchaîne quoi qu\'il arrive ; ' + code('&&') + ' n\'exécute la suite QUE si la commande précédente a réussi.');
        else if (e.sep === '||' && u.sep === '&&') msgs.push(code('&&') + ' exécute la suite si la précédente RÉUSSIT ; ici il faut ' + code('||') + ' (exécute si elle ÉCHOUE).');
        else if (e.sep === '&&' && u.sep === '||') msgs.push(code('||') + ' exécute la suite si la précédente ÉCHOUE ; ici il faut ' + code('&&') + ' (si elle réussit).');
        else if (e.sep === '|') msgs.push('Il faut un tube ' + code('|') + ' pour envoyer la sortie de ' + code(es[i - 1].cmd.name) + ' vers ' + code(e.cmd.name) + (u.sep ? ' (et non ' + code(u.sep) + ')' : '') + '.');
        else msgs.push('Mauvais enchaînement : ' + code(u.sep || '(rien)') + ' au lieu de ' + code(sepName[e.sep] || e.sep) + '.');
      }
      if (!!u.bg !== !!e.bg) msgs.push(e.bg ? 'Il faut lancer la commande en arrière-plan avec ' + code('&') + ' à la fin (le terminal reste disponible).' : 'Le ' + code('&') + ' final lance la commande en arrière-plan : ce n\'est pas demandé ici.');
      diffCmd(u.cmd, e.cmd, msgs);
    }
    return msgs;
  }

  function score(us, es) {
    let s = 0;
    if (us.length !== es.length) s += 5 * Math.abs(us.length - es.length);
    for (let i = 0; i < Math.min(us.length, es.length); i++) {
      const u = us[i].cmd, e = es[i].cmd;
      if (u.name !== e.name) s += 6;
      for (const k in e.flags) if (u.flags[k] !== e.flags[k]) s += 1;
      for (const k in u.flags) if (!(k in e.flags)) s += 1;
      s += Math.abs(u.pos.length - e.pos.length) + e.pos.filter((x) => !u.pos.includes(x)).length;
    }
    return s;
  }

  // Exercice chmod : contrôle sémantique
  function chmodSemantic(seq, spec) {
    if (seq.length !== 1) return null;
    const c = seq[0].cmd;
    if (c.name !== 'chmod' || c.pos.length !== 2) return null;
    if (pathNorm(c.pos[1]) !== pathNorm(spec.file)) return null;
    const res = perm.apply(c.pos[0], perm.fromStr(spec.from), false, 0o022);
    if (res == null) return { ok: false, msg: 'Mode ' + code(c.pos[0]) + ' invalide : en symbolique on écrit qui (u, g, o, a) + opération (+, -, =) + droits (r, w, x), ex. ' + code('u+x,g-w') + '.' };
    const target = perm.fromStr(spec.to);
    if ((res & 0o7777) === (target & 0o7777)) return { ok: true };
    return { ok: false, msg: 'Ta commande donnerait ' + code(perm.toStr(res)) + ' (' + perm.oct(res) + ') au lieu de ' + code(spec.to) + ' (' + perm.oct(target) + ').' };
  }

  // Point d'entrée : retourne {ok, notes[], msgs[], expected, mine}
  APP.checkCommand = function (exo, input) {
    const raw = String(input || '').trim();
    const res = { ok: false, notes: [], msgs: [], expected: exo.answers[0] };
    if (!raw) { res.msgs.push('Tape une commande.'); return res; }
    let us;
    try { us = analyze(raw); } catch (e) {
      res.msgs.push('Erreur de syntaxe : ' + e.message + '.');
      if (/["']/.test(raw) && (raw.split('"').length % 2 === 0 || raw.split("'").length % 2 === 0)) res.msgs.push('Vérifie que chaque guillemet ouvert est bien refermé.');
      return res;
    }
    const answers = exo.answers.map((a) => { try { return { a, seq: analyze(a) }; } catch (e) { return null; } }).filter(Boolean);
    const uc = seqCanon(us);
    // 1) égalité stricte
    for (const x of answers) if (seqCanon(x.seq) === uc) { res.ok = true; res.expected = x.a; return finish(res, us, exo); }
    // 2) contrôle sémantique chmod
    let chmodMsg = false;
    if (exo.chmod) {
      const r = chmodSemantic(us, exo.chmod);
      if (r && r.ok) { res.ok = true; return finish(res, us, exo); }
      if (r && !r.ok) { res.msgs.push(r.msg); chmodMsg = true; }
    }
    // 3) sudo en trop / options inoffensives
    for (const x of answers) {
      const sudoOnly = seqCanon(us, true, false) === seqCanon(x.seq, true, false);
      const harmlessOnly = seqCanon(us, false, true) === seqCanon(x.seq, false, true);
      const both = seqCanon(us, true, true) === seqCanon(x.seq, true, true);
      const userHasSudo = us.some((e) => e.cmd.sudo), ansHasSudo = x.seq.some((e) => e.cmd.sudo);
      if ((sudoOnly || both) && userHasSudo && !ansHasSudo) {
        res.ok = true; res.expected = x.a;
        res.notes.push(code('sudo') + ' n\'était pas nécessaire ici : évite de l\'utiliser quand ce n\'est pas utile (principe du moindre privilège).');
        if (!sudoOnly) res.notes.push('Certaines options étaient facultatives.');
        return finish(res, us, exo);
      }
      if (harmlessOnly) {
        res.ok = true; res.expected = x.a;
        const extra = [];
        us.forEach((e, i) => { const ec = x.seq[i] && x.seq[i].cmd; if (!ec) return; for (const k in e.cmd.flags) if (!(k in ec.flags)) extra.push(flagStr(k, e.cmd.flags[k])); });
        if (extra.length) res.notes.push('L\'option ' + extra.map(code).join(', ') + ' n\'était pas indispensable.');
        return finish(res, us, exo);
      }
    }
    for (const x of answers) {
      if (seqCanon(loose(us), true, true) === seqCanon(loose(x.seq), true, true)) {
        res.ok = true; res.expected = x.a;
        res.notes.push('Accepté : ' + code('ps aux') + ' et ' + code('ps -ef') + ' listent tous les deux TOUS les processus (aux : format BSD avec %CPU/%MEM ; -ef : format standard avec le PPID).');
        return finish(res, us, exo);
      }
    }
    // 4) erreurs typiques propres à l'exercice
    for (const m of exo.mistakes || []) {
      try { if (new RegExp(m.re).test(raw)) { res.msgs.push(m.msg); break; } } catch (e) { /* regex invalide */ }
    }
    // 5) diagnostic automatique par rapport à la réponse la plus proche
    let best = answers[0], bs = Infinity;
    for (const x of answers) { const s = score(us, x.seq); if (s < bs) { bs = s; best = x; } }
    if (best && !chmodMsg) {
      res.expected = best.a;
      const auto = diagnose(us, best.seq);
      for (const m of auto) if (!res.msgs.includes(m)) res.msgs.push(m);
    }
    if (!res.msgs.length) res.msgs.push('Ta commande ne correspond pas à ce qui est demandé.');
    return finish(res, us, exo);
  };
  function finish(res, us, exo) {
    // « ce que fait ta commande »
    if (!res.ok) {
      const parts = us.map((e) => e.cmd).filter((c) => c.name && cmdDesc(c.name)).map((c) => code(c.name) + ' : ' + cmdDesc(c.name));
      if (parts.length) res.mine = parts;
    }
    return res;
  }

  APP.checker = { analyze, canonical, perm, seqCanon };
})();
