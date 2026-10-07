/* Commandes de processus : ps, top, pstree, kill, pkill, nice, nohup, sleep, yes, bash, applis graphiques… */
(function () {
  'use strict';
  const APP = window.APP;
  const SIM = APP.SIM;
  const C = SIM.cmds;
  const MEMTOTAL = 4028340;

  /* ---------- utilitaires ---------- */
  function statStr(sys, p) {
    let s = p.state || 'S';
    if (p.nice < 0) s += '<'; else if (p.nice > 0) s += 'N';
    if (p.leader) s += 's';
    if ((p.threads || 1) > 1) s += 'l';
    if (p.fg || p.placeholder) s += '+';
    else if (p.isShell && p.interactive && p.tty !== '?') {
      const busy = [...sys.procs.values()].some((q) => q !== p && q.tty === p.tty && (q.fg || q.placeholder));
      if (!busy) s += '+';
    }
    return s;
  }
  SIM.statStr = statStr;
  const fmtTime = (sec) => { sec = Math.floor(sec); const h = Math.floor(sec / 3600), m = Math.floor((sec % 3600) / 60), s = sec % 60; return String(h).padStart(2, '0') + ':' + String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0'); };
  const fmtBsdTime = (sec) => { sec = Math.floor(sec); return Math.floor(sec / 60) + ':' + String(sec % 60).padStart(2, '0'); };
  const hhmm = (t) => { const d = new Date(t); return String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0'); };
  const MEMDEF = { sleep: [5476, 1028], yes: [5476, 1856], ping: [7800, 3420], ps: [11200, 3800], grep: [6400, 2240], bash: [10120, 5200], xclock: [22100, 9050], gedit: [681200, 62300], mousepad: [431000, 41200], python3: [24800, 18400], top: [10600, 4300], nano: [8200, 4100], less: [7600, 2600], tail: [5500, 1100], sshd: [17200, 9800], ssh: [12400, 7000], tcpdump: [14100, 6200] };
  function memOf(p) { if (p.vszSet) return [p.vsz, p.rss]; const d = MEMDEF[p.comm]; if (d) { p.vsz = d[0]; p.rss = d[1]; p.vszSet = true; } return [p.vsz || 0, p.rss || 0]; }

  const COLS = {
    pid: ['PID', (p) => p.pid, 1], ppid: ['PPID', (p) => p.ppid, 1], user: ['USER', (p, s) => s.uname(p.uid), 0], uid: ['UID', (p) => p.uid, 1],
    euser: ['EUSER', (p, s) => s.uname(p.uid), 0], ruser: ['RUSER', (p, s) => s.uname(p.uid), 0],
    tty: ['TT', (p) => p.tty, 0], tt: ['TT', (p) => p.tty, 0], tname: ['TTY', (p) => p.tty, 0],
    ni: ['NI', (p) => (p.kernel ? '-' : p.nice), 1], nice: ['NI', (p) => p.nice, 1], pri: ['PRI', (p) => 19 - p.nice, 1],
    stat: ['STAT', (p, s) => statStr(s, p), 0], s: ['S', (p) => p.state, 0], state: ['S', (p) => p.state, 0],
    time: ['TIME', (p, s) => fmtTime(s.cpuTime(p)), 1], cputime: ['TIME', (p, s) => fmtTime(s.cpuTime(p)), 1],
    cmd: ['CMD', (p) => p.cmd, 0], command: ['COMMAND', (p) => p.cmd, 0], args: ['COMMAND', (p) => p.cmd, 0],
    comm: ['COMMAND', (p) => p.comm, 0], ucomm: ['COMMAND', (p) => p.comm, 0], fname: ['COMMAND', (p) => p.comm.slice(0, 8), 0],
    '%cpu': ['%CPU', (p, s, sh) => s.cpuOf(p, sh).toFixed(1), 1], pcpu: ['%CPU', (p, s, sh) => s.cpuOf(p, sh).toFixed(1), 1],
    '%mem': ['%MEM', (p) => ((memOf(p)[1] / MEMTOTAL) * 100).toFixed(1), 1], pmem: ['%MEM', (p) => ((memOf(p)[1] / MEMTOTAL) * 100).toFixed(1), 1],
    rss: ['RSS', (p) => memOf(p)[1], 1], vsz: ['VSZ', (p) => memOf(p)[0], 1], sz: ['SZ', (p) => Math.floor(memOf(p)[0] / 4), 1],
    etime: ['ELAPSED', (p) => fmtBsdTime((Date.now() - p.start) / 1000).padStart(5), 1], start: ['STARTED', (p) => hhmm(p.start), 1], stime: ['STIME', (p) => hhmm(p.start), 0],
    c: ['C', (p, s, sh) => Math.floor(s.cpuOf(p, sh)), 1], f: ['F', (p) => (p.kernel ? 1 : p.isShell ? 0 : 0), 1], wchan: ['WCHAN', (p) => (p.state === 'S' ? 'do_wai' : p.state === 'T' ? 'do_sig' : '-'), 0],
    addr: ['ADDR', () => '-', 0], pgid: ['PGID', (p) => p.pid, 1], sid: ['SID', (p) => p.pid, 1], cwd: ['CWD', (p) => p.cwd || '/', 0], lstart: ['STARTED', (p) => new Date(p.start).toString().slice(0, 24), 0]
  };
  function table(rows, heads, right) {
    const w = heads.map((h, i) => Math.max(h.length, ...rows.map((r) => String(r[i]).length)));
    const last = heads.length - 1;
    const line = (r) => r.map((v, i) => (i === last ? String(v) : right[i] ? String(v).padStart(w[i]) : String(v).padEnd(w[i]))).join(' ');
    return [line(heads)].concat(rows.map(line)).join('\n') + '\n';
  }

  /* ---------------- ps ---------------- */
  C.ps = async (c) => {
    const sys = c.sys, me = c.cred.uid;
    const args = c.args.slice();
    const sel = { all: false, bsdA: false, bsdX: false, users: null, pids: null, cmds: null, ppids: null };
    let fmt = null, cols = null, sort = null, full = false, long = false, bsdU = false, forest = false;
    for (let i = 0; i < args.length; i++) {
      let a = args[i];
      const nextv = () => { if (i + 1 >= args.length) { c.err("error: list of process IDs must follow -" + a.slice(-1) + '\n'); throw SIM.usage(); } return args[++i]; };
      if (a.startsWith('--')) {
        const [k, v] = a.slice(2).split('=');
        const val = v != null ? v : (['sort', 'ppid', 'pid', 'user', 'format'].includes(k) ? args[++i] : null);
        if (k === 'sort') sort = val; else if (k === 'ppid') sel.ppids = val.split(','); else if (k === 'pid') sel.pids = val.split(','); else if (k === 'user') sel.users = val.split(','); else if (k === 'forest') forest = true; else if (k === 'format') cols = val; else if (k === 'help') { c.out('\nUsage:\n ps [options]\n\n Essayez « ps --help <s|l|o|t|m|a> »\n'); return 0; }
        else { c.err('error: unknown gnu long option\n'); return 1; }
        continue;
      }
      const dash = a[0] === '-';
      const body = dash ? a.slice(1) : a;
      if (!dash && /^[aux]+$/.test(body) || (!dash && /^[auxwfle]+$/.test(body))) {
        for (const ch of body) { if (ch === 'a') sel.bsdA = true; if (ch === 'x') sel.bsdX = true; if (ch === 'u') bsdU = true; if (ch === 'f') forest = true; }
        continue;
      }
      if (dash && /^[aux]+$/.test(body) && body.includes('x')) { for (const ch of body) { if (ch === 'a') sel.bsdA = true; if (ch === 'x') sel.bsdX = true; if (ch === 'u') bsdU = true; } continue; }
      for (let j = 0; j < body.length; j++) {
        const ch = body[j];
        const rest = body.slice(j + 1);
        if ('eA'.includes(ch)) sel.all = true;
        else if (ch === 'f') full = true;
        else if (ch === 'l') long = true;
        else if (ch === 'o') { cols = rest || nextv(); break; }
        else if (ch === 'p') { sel.pids = (rest || nextv()).split(','); break; }
        else if (ch === 'u' || ch === 'U') { sel.users = (rest || nextv()).split(','); break; }
        else if (ch === 'C') { sel.cmds = (rest || nextv()).split(','); break; }
        else if (ch === 'F') full = true;
        else if (ch === 'H') forest = true;
        else if (ch === 'a') sel.all = true;
        else if (ch === 'x') sel.bsdX = true;
        else { c.err('error: unsupported option (BSD syntax)\n\nUsage:\n ps [options]\n'); return 1; }
      }
    }
    let list = [...sys.procs.values()];
    const myTty = c.sh.tty;
    const anySel = sel.all || sel.bsdA || sel.bsdX || sel.users || sel.pids || sel.cmds || sel.ppids;
    if (!anySel) list = list.filter((p) => p.uid === me && p.tty === myTty);
    else if (!sel.all) {
      list = list.filter((p) => {
        if (sel.pids && sel.pids.includes(String(p.pid))) return true;
        if (sel.ppids && sel.ppids.includes(String(p.ppid))) return true;
        if (sel.cmds && sel.cmds.includes(p.comm)) return true;
        if (sel.users && sel.users.some((u) => { const uu = sys.user(u); return uu ? uu.uid === p.uid : String(p.uid) === u; })) return true;
        if (sel.bsdA && sel.bsdX) return true;
        if (sel.bsdA && p.tty !== '?') return true;
        if (sel.bsdX && !sel.bsdA && p.uid === me) return true;
        return false;
      });
    }
    if (sel.users && sel.users.some((u) => !sys.user(u) && !/^\d+$/.test(u))) { c.err('error: user name does not exist\n'); return 1; }
    list.sort((a, b) => a.pid - b.pid);
    const shares = sys.cpuShares();
    if (sort) {
      const keys = sort.split(',');
      list.sort((a, b) => {
        for (let k of keys) {
          let dir = 1; if (k[0] === '-') { dir = -1; k = k.slice(1); } else if (k[0] === '+') k = k.slice(1);
          const col = COLS[k.toLowerCase()] || COLS[{ cpu: '%cpu', mem: '%mem' }[k] || 'pid'];
          let x = col[1](a, sys, shares), y = col[1](b, sys, shares);
          if (col[2] || !isNaN(parseFloat(x))) { x = parseFloat(x); y = parseFloat(y); }
          if (x < y) return -dir; if (x > y) return dir;
        }
        return 0;
      });
    }
    let names;
    if (cols) names = cols.split(/[,\s]+/).filter(Boolean).map((x) => x.split('=')[0].toLowerCase());
    else if (bsdU) names = ['user', 'pid', '%cpu', '%mem', 'vsz', 'rss', 'tt', 'stat', 'start', 'bsdtime', 'command'];
    else if ((sel.bsdA || sel.bsdX) && !sel.all) names = ['pid', 'tt', 'stat', 'bsdtime', 'command'];
    else if (long && full) names = ['f', 's', 'uid', 'pid', 'ppid', 'c', 'pri', 'ni', 'addr', 'sz', 'wchan', 'stime', 'tname', 'time', 'cmd'];
    else if (long) names = ['f', 's', 'uid', 'pid', 'ppid', 'c', 'pri', 'ni', 'addr', 'sz', 'wchan', 'tname', 'time', 'comm'];
    else if (full) names = ['uid_name', 'pid', 'ppid', 'c', 'stime', 'tname', 'time', 'cmd'];
    else names = ['pid', 'tname', 'time', 'comm'];
    const extra = {
      bsdtime: ['TIME', (p) => fmtBsdTime(sys.cpuTime(p)), 1], uid_name: ['UID', (p) => sys.uname(p.uid), 0],
      tt: ['TTY', (p) => p.tty, 0], start: ['START', (p) => hhmm(p.start), 0], comm: ['CMD', (p) => p.comm, 0]
    };
    const defs = names.map((n) => {
      if (bsdU || (!cols && (sel.bsdA || sel.bsdX))) { if (n === 'command') return ['COMMAND', (p) => p.cmd, 0]; }
      if (!cols && extra[n]) return extra[n];
      return COLS[n] || extra[n] || null;
    });
    const bad = names.find((n, i) => !defs[i]);
    if (bad) { c.err('error: unknown user-defined format specifier "' + bad + '"\n'); return 1; }
    if (forest && !cols) { /* indentation simple */ }
    const rows = list.map((p) => defs.map((d) => d[1](p, sys, shares)));
    if (!c.tty || !cols) {
      // COMMAND tronquée comme dans un terminal de 120 colonnes
    }
    const noHead = cols && cols.split(/[,\s]+/).filter(Boolean).every((x) => /=$/.test(x));
    const tbl = table(rows, defs.map((d) => d[0]), defs.map((d) => d[2]));
    c.out(noHead ? tbl.split('\n').slice(1).join('\n') : tbl);
    return list.length ? 0 : 1;
  };

  /* ---------------- top / htop ---------------- */
  function uptimeStr(sys) {
    const s = Math.floor((Date.now() - sys.booted) / 1000), h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60);
    return h ? h + ':' + String(m).padStart(2, '0') : m + ' min';
  }
  function loadavg(sys) { const r = [...sys.procs.values()].filter((p) => p.state === 'R' && p.hog).length; const a = (0.1 + r * 0.98); return [a, a * 0.7 + 0.1, a * 0.4 + 0.15].map((x) => x.toFixed(2).replace('.', ',')); }
  SIM.loadavg = loadavg; SIM.uptimeStr = uptimeStr;
  function topScreen(c, sortKey, htop) {
    const sys = c.sys;
    const shares = sys.cpuShares();
    const procs = [...sys.procs.values()].filter((p) => !p.kernel || p.state === 'R');
    const counts = { R: 0, S: 0, T: 0, Z: 0 };
    for (const p of sys.procs.values()) { const s = p.state === 'I' || p.state === 'D' ? 'S' : p.state; counts[s] = (counts[s] || 0) + 1; }
    counts.R = Math.max(1, counts.R);
    const total = 180 + sys.procs.size - 20;
    const us = Math.min(99.5, [...shares.values()].reduce((a, b) => a + b, 0) / 2 + 2.1);
    const ni = Math.min(us, [...sys.procs.values()].filter((p) => p.hog && p.state === 'R' && p.nice > 0).reduce((a, p) => a + (shares.get(p.pid) || 0), 0) / 2);
    const now = new Date();
    const la = loadavg(sys);
    const sorters = { P: (a, b) => sys.cpuOf(b, shares) - sys.cpuOf(a, shares) || b.pid - a.pid, M: (a, b) => memOf(b)[1] - memOf(a)[1], N: (a, b) => b.pid - a.pid, T: (a, b) => sys.cpuTime(b) - sys.cpuTime(a) };
    procs.sort(sorters[sortKey] || sorters.P);
    let s = '';
    if (htop) {
      const bar = (pct) => { const n = Math.round(pct / 100 * 30); return '[' + '|'.repeat(n).padEnd(30) + (pct.toFixed(1) + '%').padStart(6) + ']'; };
      const cores = [0, 0]; for (const p of sys.procs.values()) if (p.hog && p.state === 'R') { const sh = shares.get(p.pid) || 0; cores[p.cpu0 != null ? p.cpu0 : (cores[0] <= cores[1] ? 0 : 1)] += sh; }
      s += '  0' + bar(Math.min(100, cores[0] + 1.3)) + '   Tasks: ' + total + ', ' + (counts.R) + ' running\n';
      s += '  1' + bar(Math.min(100, cores[1] + 0.8)) + '   Load average: ' + la.join(' ') + '\n';
      s += '  Mem[' + '|'.repeat(11).padEnd(30) + '  1.02G/3.84G]   Uptime: ' + uptimeStr(sys) + '\n';
      s += '  Swp[' + ''.padEnd(30) + '     0K/975M]\n\n';
      s += '#HEAD#    PID USER       PRI  NI  VIRT   RES   SHR S CPU% MEM%   TIME+  Command\n';
    } else {
      s += 'top - ' + now.toTimeString().slice(0, 8) + ' up ' + uptimeStr(sys) + ',  1 user,  load average: ' + la.join(', ') + '\n';
      s += 'Tasks: ' + String(total).padStart(3) + ' total,   ' + counts.R + ' running, ' + String(total - counts.R - (counts.T || 0) - (counts.Z || 0)).padStart(3) + ' sleeping,   ' + (counts.T || 0) + ' stopped,   ' + (counts.Z || 0) + ' zombie\n';
      s += '%Cpu(s): ' + (us - ni).toFixed(1).padStart(4) + ' us,  1,1 sy, ' + ni.toFixed(1).padStart(4) + ' ni, ' + Math.max(0, 100 - us - 1.1).toFixed(1).padStart(4) + ' id,  0,0 wa,  0,0 hi,  0,0 si,  0,0 st\n';
      s += 'MiB Mem :   3933,9 total,   1782,3 free,   1029,6 used,   1122,0 buff/cache\n';
      s += 'MiB Swap:    975,0 total,    975,0 free,      0,0 used.   2880,8 avail Mem\n\n';
      s += '#HEAD#    PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND\n';
    }
    for (const p of procs.slice(0, 18)) {
      const [vsz, rss] = memOf(p);
      const cpu = sys.cpuOf(p, shares);
      const t = sys.cpuTime(p);
      const tplus = Math.floor(t / 60) + ':' + (t % 60).toFixed(2).padStart(5, '0');
      const line = String(p.pid).padStart(7) + ' ' + sys.uname(p.uid).slice(0, 8).padEnd(9) + ' ' + String(20 + p.nice).padStart(3) + ' ' + String(p.nice).padStart(3) + ' ' + String(vsz).padStart(7) + ' ' + String(rss).padStart(6) + ' ' + String(Math.floor(rss * 0.6)).padStart(6) + ' ' + p.state + ' ' + cpu.toFixed(1).padStart(5) + ' ' + ((rss / MEMTOTAL) * 100).toFixed(1).padStart(5) + ' ' + tplus.padStart(9) + ' ' + (htop ? p.cmd : p.comm);
      s += (cpu > 20 ? '#HOT#' : '') + line + '\n';
    }
    return s;
  }
  const topCmd = (htop) => async (c) => {
    if (!c.tty) { c.out(topScreen(c, 'P', htop).replace(/#\w+#/g, '')); return 0; }
    let sortKey = 'P';
    await c.sh.term.fullscreen({
      title: htop ? 'htop' : 'top',
      help: htop ? 'F6/P/M tri · F9 tuer (k) · F10/q quitter' : 'P tri CPU · M tri mémoire · k tuer · r renice · q quitter',
      render: () => topScreen(c, sortKey, htop),
      interval: 2000,
      onKey: async (k, api) => {
        if (k === 'q' || k === 'F10' || k === 'Ctrl+C') return api.close();
        if (k === 'P' || k === 'M' || k === 'N' || k === 'T') { sortKey = k; api.refresh(); return; }
        if (k === 'k' || k === 'F9') {
          const procs = [...c.sys.procs.values()].sort((a, b) => c.sys.cpuOf(b) - c.sys.cpuOf(a));
          const def = procs[0] ? procs[0].pid : '';
          const pid = await api.prompt('PID to signal/kill [default pid = ' + def + '] ');
          if (pid == null) return;
          const sig = await api.prompt('Send pid ' + (pid || def) + ' signal [15/sigterm] ');
          if (sig == null) return;
          const n = /^\d+$/.test(sig) ? +sig : sig ? APP.SIGNALS[sig.toUpperCase().replace(/^SIG/, '')] : 15;
          const r = c.sys.signal(+(pid || def), n == null ? 15 : n, c.cred);
          if (r === 'EPERM') api.flash('Failed signal pid ' + (pid || def) + ' with ' + n + ': Operation not permitted');
          else if (r === 'ESRCH') api.flash('Failed signal pid ' + (pid || def) + ' with ' + n + ': No such process');
          api.refresh();
        }
        if (k === 'r') {
          const pid = await api.prompt('PID to renice [default pid = 1] ');
          if (!pid) return;
          const v = await api.prompt('Renice PID ' + pid + ' to value ');
          if (v == null) return;
          const p = c.sys.proc(+pid); if (!p) { api.flash('Failed renice of PID ' + pid + ' to ' + v + ': No such process'); return; }
          if (c.cred.uid !== 0 && (+v < p.nice || p.uid !== c.cred.uid)) { api.flash('Failed renice of PID ' + pid + ' to ' + v + ': Permission denied'); return; }
          p.nice = Math.max(-20, Math.min(19, +v)); api.refresh();
        }
      }
    });
    return 0;
  };
  C.top = topCmd(false);
  C.htop = topCmd(true);

  /* ---------------- pstree ---------------- */
  C.pstree = async (c) => {
    const { f, pos } = c.opts('punaAlhcUG', {});
    const sys = c.sys;
    let rootPid = 1;
    let filterUid = null;
    if (pos[0]) { if (/^\d+$/.test(pos[0])) rootPid = +pos[0]; else { const u = sys.user(pos[0]); if (!u) { c.err('No such user name: ' + pos[0] + '\n'); return 1; } filterUid = u.uid; } }
    if (!sys.proc(rootPid)) { c.out(''); return 1; }
    const kids = (pid) => [...sys.procs.values()].filter((p) => p.ppid === pid && p.pid !== pid && !p.kernel).sort((a, b) => (f.p || f.n ? a.pid - b.pid : a.comm.localeCompare(b.comm) || a.pid - b.pid));
    const label = (p) => {
      let l = (f.a ? p.cmd : p.comm) + (f.p ? '(' + p.pid + ')' : '');
      if (p.state === 'Z') l = (f.a ? p.comm : p.comm) + (f.p ? '(' + p.pid + ')' : '') ;
      const par = sys.proc(p.ppid);
      if (f.u && par && par.uid !== p.uid) l += '(' + sys.uname(p.uid) + ')';
      return l;
    };
    const render = (p) => {
      let ks = kids(p.pid);
      const lbl = label(p);
      // fusion des sous-arbres identiques (sans -p)
      let groups = ks.map((k) => ({ k, n: 1, key: f.p ? k.pid : signature(k) }));
      if (!f.p && !f.c) { const merged = []; for (const g of groups) { const m = merged.find((x) => x.key === g.key); if (m) m.n++; else merged.push(g); } groups = merged; }
      if (!groups.length) return [lbl];
      const subs = groups.map((g) => { const r = render(g.k); if (g.n > 1) { r[0] = g.n + '*[' + r[0] + ']'; } return r; });
      if (subs.length === 1) { const pad = ' '.repeat(lbl.length + 3); return [lbl + '───' + subs[0][0]].concat(subs[0].slice(1).map((l) => pad + l)); }
      const pad = ' '.repeat(lbl.length);
      const out = [];
      subs.forEach((sub, i) => {
        const last = i === subs.length - 1;
        out.push((i === 0 ? lbl + '─┬─' : pad + (last ? ' └─' : ' ├─')) + sub[0]);
        for (const l of sub.slice(1)) out.push(pad + (last ? '   ' : ' │ ') + l);
      });
      return out;
    };
    const signature = (p) => p.comm + '(' + kids(p.pid).map(signature).join(',') + ')';
    if (filterUid != null) {
      const tops = [...sys.procs.values()].filter((p) => p.uid === filterUid && (!sys.proc(p.ppid) || sys.proc(p.ppid).uid !== filterUid));
      for (const t of tops) c.out(render(t).join('\n') + '\n');
      return 0;
    }
    c.out(render(sys.proc(rootPid)).join('\n') + '\n');
    return 0;
  };

  /* ---------------- pgrep / pkill / killall / kill ---------------- */
  function matchProcs(c, pattern, o) {
    let re;
    try { re = new RegExp(o.x ? '^(?:' + pattern + ')$' : pattern); } catch (e) { re = new RegExp(pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')); }
    const selfPids = new Set([c.proc.pid, c.ctx.selfPid]);
    return [...c.sys.procs.values()].filter((p) => {
      if (selfPids.has(p.pid) || p.state === 'Z' && !o.f) return false;
      if (p.placeholder && p.pid === c.proc.pid) return false;
      if (o.u) { const uu = o.u.split(',').map((u) => (c.sys.user(u) || { uid: +u }).uid); if (!uu.includes(p.uid)) return false; }
      if (o.t && p.tty !== o.t) return false;
      return re.test(o.f ? p.cmd : p.comm);
    }).sort((a, b) => a.pid - b.pid);
  }
  function parseSigArgs(c, allowed) {
    let sig = 15; const rest = [];
    for (let i = 0; i < c.args.length; i++) {
      const a = c.args[i];
      if (a === '--signal' || (a === '-s' && allowed !== 'pgrep')) { const v = c.args[++i] || ''; sig = /^\d+$/.test(v) ? +v : APP.SIGNALS[v.toUpperCase().replace(/^SIG/, '')]; continue; }
      const m = /^-(SIG)?([A-Z]+|\d+)$/.exec(a);
      if (m && allowed !== 'pgrep' && (/^\d+$/.test(m[2]) || APP.SIGNALS[m[2]] != null)) { sig = /^\d+$/.test(m[2]) ? +m[2] : APP.SIGNALS[m[2]]; continue; }
      const m2 = /^-(SIG)?([a-z]+)$/i.exec(a);
      if (m2 && allowed !== 'pgrep' && APP.SIGNALS[m2[2].toUpperCase()] != null && !/^-[fxnoaluvwieqIgr]+$/.test(a)) { sig = APP.SIGNALS[m2[2].toUpperCase()]; continue; }
      rest.push(a);
    }
    return { sig, rest };
  }
  C.pgrep = async (c) => {
    const { rest } = parseSigArgs(c, 'pgrep');
    c.args = rest;
    const { f, pos } = c.opts('flaxnou:t:cd:', { delimiter: 'd:' });
    if (!pos.length && !f.u) { c.err("pgrep: aucun critère de correspondance spécifié\nSaisissez « pgrep --help » pour plus d'informations.\n"); return 2; }
    let list = matchProcs(c, pos[0] || '.', f);
    if (f.n) list = list.slice(-1); if (f.o) list = list.slice(0, 1);
    if (f.c) { c.out(list.length + '\n'); return list.length ? 0 : 1; }
    if (f.d != null) { if (list.length) c.out(list.map((p) => p.pid).join(f.d) + '\n'); return list.length ? 0 : 1; }
    for (const p of list) c.out(p.pid + (f.l ? ' ' + p.comm : f.a ? ' ' + p.cmd : '') + '\n');
    return list.length ? 0 : 1;
  };
  C.pkill = async (c) => {
    const { sig, rest } = parseSigArgs(c, 'pkill');
    if (sig == null) { c.err('pkill: signal inconnu\n'); return 2; }
    c.args = rest;
    const { f, pos } = c.opts('fxenu:t:c', { echo: 'e' });
    if (!pos.length && !f.u) { c.err("pkill: aucun critère de correspondance spécifié\nSaisissez « pkill --help » pour plus d'informations.\n"); return 2; }
    const list = matchProcs(c, pos[0] || '.', f);
    let ok = 0;
    for (const p of list) {
      const r = c.sys.signal(p.pid, sig, c.cred);
      if (r === 'EPERM') c.err('pkill: killing pid ' + p.pid + ' failed: Opération non permise\n');
      else { ok++; if (f.e) c.out(p.comm + ' killed (pid ' + p.pid + ')\n'); }
    }
    if (f.c) c.out(ok + '\n');
    return ok ? 0 : 1;
  };
  C.killall = async (c) => {
    const { sig, rest } = parseSigArgs(c, 'killall');
    c.args = rest;
    const { f, pos } = c.opts('u:iqevwIl', {});
    if (f.l) { c.out(Object.keys(APP.SIGNALS).join(' ') + '\n'); return 0; }
    if (!pos.length) { c.err('Usage: killall [OPTION]... [--] NAME...\n'); return 1; }
    let st = 0;
    for (const name of pos) {
      const list = [...c.sys.procs.values()].filter((p) => p.comm === name.slice(0, 15) && p.state !== 'Z' && p.pid !== c.proc.pid && (!f.u || c.sys.uname(p.uid) === f.u));
      if (!list.length) { if (!f.q) c.err(name + ': aucun processus trouvé\n'); st = 1; continue; }
      for (const p of list) {
        if (f.i && !(await c.confirm('Tuer ' + name + '(' + p.pid + ') ? (y/N) '))) continue;
        const r = c.sys.signal(p.pid, sig == null ? 15 : sig, c.cred);
        if (r === 'EPERM') { c.err(name + '(' + p.pid + '): Opération non permise\n'); st = 1; }
        else if (f.v) c.out('Tué ' + name + '(' + p.pid + ') avec le signal ' + sig + '\n');
      }
    }
    return st;
  };
  C.kill = async (c) => SIM.builtins.kill(c.sh, Object.assign({}, c.ctx, { frame: Object.assign({}, c.f, { cred: c.cred }) }), c.args);
  C.echo = async (c) => SIM.builtins.echo(c.sh, c.ctx, c.args);
  C.pwd = async (c) => SIM.builtins.pwd(c.sh, c.ctx, c.args);
  C.true = async () => 0;
  C.false = async () => 1;

  /* ---------------- sleep / yes ---------------- */
  C.sleep = async (c) => {
    if (!c.args.length) { c.err("sleep: opérande manquant\nSaisissez « sleep --help » pour plus d'informations.\n"); return 1; }
    let ms = 0;
    for (const a of c.args) {
      const m = /^(\d+(?:[.,]\d+)?)([smhd]?)$/.exec(a);
      if (!m) { c.err("sleep: intervalle de temps incorrect « " + a + " »\nSaisissez « sleep --help » pour plus d'informations.\n"); return 1; }
      ms += parseFloat(m[1].replace(',', '.')) * { '': 1000, s: 1000, m: 60000, h: 3600000, d: 86400000 }[m[2]];
    }
    c.proc.state = 'S';
    const ok = await c.wait(ms);
    return ok ? 0 : 128 + 15;
  };
  C.yes = async (c) => {
    const word = c.args.length ? c.args.join(' ') : 'y';
    const out = c.ctx.out;
    if (out.isNull) return c.hog();
    if (!out.tty) {
      // dans un tube : on produit un bloc puis on s'arrête (SIGPIPE)
      c.out((word + '\n').repeat(2000));
      return 0;
    }
    // au premier plan dans le terminal : affiche en boucle (limité) jusqu'à Ctrl+C
    const p = c.hog();
    let n = 0;
    while (c.alive()) {
      if (c.proc.state !== 'T') { c.out((word + '\n').repeat(40)); n++; }
      if (n > 60) { c.sh.termOut('… (affichage limité par le simulateur, yes continue — Ctrl+C pour l\'arrêter)\n', 'hint'); n = -1e9; }
      await SIM.sleep(150);
    }
    return p;
  };

  /* ---------------- exécution « sur place » (nice, nohup, taskset) ---------------- */
  async function execInPlace(c, words, label) {
    const f = c.f, sys = c.sys;
    const name = words[0];
    let node = null;
    if (name.includes('/')) { try { node = sys.lookup(name, c.cred, f.cwd).node; } catch (e) { c.err(label + ": impossible d'exécuter '" + name + "': " + e.message + '\n'); return 127; } }
    else {
      const path = (c.cred.uid === 0 ? '/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin' : f.env.PATH).split(':');
      for (const d of path) { const n = sys.resolveRaw(d + '/' + name); if (n && n.t === 'f' && sys.isInstalledCmd(name)) { node = n; break; } }
      if (!node) { c.err(label + ": impossible d'exécuter '" + name + "': Aucun fichier ou dossier de ce nom\n"); return 127; }
    }
    if (!sys.can(node, c.cred, 1)) { c.err(label + ": impossible d'exécuter '" + name + "': Permission non accordée\n"); return 126; }
    c.proc.cmd = words.join(' '); c.proc.comm = name.replace(/^.*\//, '').slice(0, 15);
    c.proc.vszSet = false;
    if (node.bin && C[node.bin]) { const c2 = new SIM.CmdCtx(c.sh, c.ctx, node.bin, words.slice(1), c.proc); c2.cred = c.cred; c2.f = c.f; return C[node.bin](c2); }
    if (node.compiled) { c.out(node.compiled.output); return 0; }
    if (!sys.can(node, c.cred, 4)) { c.err(label + ": impossible d'exécuter '" + name + "': Permission non accordée\n"); return 126; }
    return c.sh.runScriptIn(c.proc, node.c, words.slice(1), c.ctx, name);
  }
  SIM.execInPlace = execInPlace;
  C.nice = async (c) => {
    const a = c.args.slice();
    let n = 10;
    if (a[0] === '-n') { n = parseInt(a[1], 10); a.splice(0, 2); }
    else if (/^-n-?\d+$/.test(a[0] || '')) { n = parseInt(a[0].slice(2), 10); a.shift(); }
    else if (/^--?\d+$/.test(a[0] || '')) { n = parseInt(a[0].replace(/^-/, ''), 10); a.shift(); }
    else if (/^--adjustment=/.test(a[0] || '')) { n = parseInt(a[0].split('=')[1], 10); a.shift(); }
    if (isNaN(n)) { c.err("nice: ajustement incorrect\n"); return 125; }
    if (!a.length) { c.out((c.proc.nice || 0) + '\n'); return 0; }
    let target = Math.max(-20, Math.min(19, (c.proc.nice || 0) + n));
    if (target < (c.proc.nice || 0) && c.cred.uid !== 0) { c.err('nice: impossible de définir la priorité: Permission non accordée\n'); target = c.proc.nice || 0; }
    c.proc.nice = target;
    return execInPlace(c, a, 'nice');
  };
  C.renice = async (c) => {
    const a = c.args.slice();
    let n = null; let mode = 'p'; const targets = [];
    for (let i = 0; i < a.length; i++) {
      if (a[i] === '-n' || a[i] === '--priority') n = parseInt(a[++i], 10);
      else if (a[i] === '-p' || a[i] === '--pid') mode = 'p';
      else if (a[i] === '-u' || a[i] === '--user') mode = 'u';
      else if (a[i] === '-g') mode = 'g';
      else if (n == null && /^[-+]?\d+$/.test(a[i]) && !targets.length && i === 0) n = parseInt(a[i], 10);
      else targets.push({ mode, v: a[i] });
    }
    if (n == null || !targets.length) { c.err("renice: pas assez d'arguments\nSaisissez « renice --help » pour plus d'informations.\n"); return 1; }
    let st = 0;
    for (const t of targets) {
      const procs = t.mode === 'u' ? [...c.sys.procs.values()].filter((p) => c.sys.uname(p.uid) === t.v) : [c.sys.proc(+t.v)].filter(Boolean);
      if (!procs.length) { c.err('renice: impossible d\'obtenir la priorité pour ' + t.v + ' (process ID): Aucun processus de ce type\n'); st = 1; continue; }
      for (const p of procs) {
        const v = Math.max(-20, Math.min(19, n));
        if (c.cred.uid !== 0 && (p.uid !== c.cred.uid)) { c.err('renice: impossible de définir la priorité pour ' + p.pid + ' (process ID): Opération non permise\n'); st = 1; continue; }
        if (c.cred.uid !== 0 && v < p.nice) { c.err('renice: impossible de définir la priorité pour ' + p.pid + ' (process ID): Permission non accordée\n'); st = 1; continue; }
        const old = p.nice; p.nice = v;
        c.out(p.pid + ' (process ID) ancienne priorité ' + old + ', nouvelle priorité ' + v + '\n');
        c.sys.emit('renice', { pid: p.pid, nice: v });
      }
    }
    return st;
  };
  C.nohup = async (c) => {
    if (!c.args.length) { c.err("nohup: opérande manquant\nSaisissez « nohup --help » pour plus d'informations.\n"); return 125; }
    c.proc.nohup = true;
    if (c.ctx.out.tty) {
      let node;
      try {
        const r = c.lookup('nohup.out', { parent: true });
        node = r.node || (c.sys.can(r.parent, c.cred, 2) ? c.sys.newFile(r.parent, 'nohup.out', '', c.cred, 0o077) : null);
      } catch (e) { node = null; }
      if (node) { c.err("nohup: les entrées sont ignorées et la sortie est ajoutée à 'nohup.out'\n"); c.ctx = Object.assign({}, c.ctx, { out: new SIM.writers.FileWriter(node) }); }
    }
    return execInPlace(c, c.args, 'nohup');
  };
  C.taskset = async (c) => {
    const a = c.args.slice();
    let cpu = null;
    if (a[0] === '-c' || a[0] === '--cpu-list') { cpu = parseInt(a[1], 10); a.splice(0, 2); }
    else if (/^-p/.test(a[0] || '')) { c.out("pid " + a[a.length - 1] + "'s current affinity mask: 3\n"); return 0; }
    else if (a.length) { const mask = parseInt(a.shift(), 16); cpu = mask === 2 ? 1 : 0; }
    if (!a.length) { c.err('taskset: commande manquante\n'); return 1; }
    if (cpu > 1 || cpu < 0 || isNaN(cpu)) { c.err('taskset: échec de définition de l\'affinité du pid ' + c.proc.pid + ': Argument invalide\n'); return 1; }
    c.proc.cpu0 = cpu;
    return execInPlace(c, a, 'taskset');
  };

  /* ---------------- bash / sh ---------------- */
  C.bash = async (c) => {
    const a = c.args;
    if (a[0] === '-c') {
      if (a.length < 2) { c.err('bash: -c: option nécessite un argument\n'); return 2; }
      return c.sh.runScriptIn(c.proc, a[1], a.slice(3), c.ctx, a[2] || 'bash');
    }
    if (a[0] === '--version') { c.out('GNU bash, version 5.2.15(1)-release (x86_64-pc-linux-gnu)\n'); return 0; }
    const file = a.find((x) => x[0] !== '-');
    if (file) {
      const t = c.readText(file);
      if (t == null) return 127;
      c.proc.cmd = 'bash ' + a.join(' ');
      return c.sh.runScriptIn(c.proc, t, a.slice(a.indexOf(file) + 1), c.ctx, file);
    }
    if (!c.tty) { if (c.stdin) return c.sh.runScriptIn(c.proc, c.stdin, [], c.ctx, 'bash'); return 0; }
    // nouveau shell interactif imbriqué
    c.sh.pushFrame(c.sys, c.f.user, { kind: 'bash', ppid: c.ctx.selfPid, gid: c.f.cred.gid });
    c.sh.f.cred = Object.assign({}, c.f.cred);
    return 0;
  };

  /* ---------------- applications graphiques ---------------- */
  const gui = (name, o) => async (c) => {
    o = o || {};
    const file = c.args.find((x) => x[0] !== '-');
    c.proc.state = 'S';
    c.proc.threads = o.threads || 4;
    let path = null;
    if (o.editor && file) path = c.abs(file);
    const win = c.sh.term.openWindow({ pid: c.proc.pid, name, title: o.editor ? (file || 'Sans titre') + ' — ' + name : name, kind: o.kind || 'app', path, sys: c.sys, cred: c.cred, umask: c.f.umask, proc: c.proc });
    c.sys.emit('gui', { name, pid: c.proc.pid });
    const r = await new Promise((resolve) => {
      c.proc.impl = { pause() { win && win.setPaused(true); }, resume() { win && win.setPaused(false); }, dispose() { resolve(1); } };
      win.onClose = () => resolve(0);
    });
    if (win) win.destroy();
    return r === 0 ? 0 : 128 + 15;
  };
  C.xclock = gui('xclock', { kind: 'clock', threads: 1 });
  C.xeyes = gui('xeyes', { kind: 'app', threads: 1 });
  C.gedit = gui('gedit', { editor: true, threads: 5 });
  C.kwrite = gui('kwrite', { editor: true });
  C.mousepad = gui('mousepad', { editor: true });
  C.firefox = gui('firefox-esr', { kind: 'browser', threads: 60 });
  C.xemacs = gui('xemacs', { editor: true });

  /* ---------------- infos système ---------------- */
  C.uptime = async (c) => {
    const users = new Set([...c.sys.procs.values()].filter((p) => p.isShell && p.interactive).map((p) => p.uid)).size || 1;
    c.out(' ' + new Date().toTimeString().slice(0, 8) + ' up ' + uptimeStr(c.sys) + ',  ' + users + ' user' + (users > 1 ? 's' : '') + ',  load average: ' + loadavg(c.sys).join(', ') + '\n');
    return 0;
  };
  C.free = async (c) => {
    const h = c.args.some((a) => /h/.test(a));
    c.out(h ? '               total       utilisé      libre     partagé tamp/cache   disponible\nMem:           3,8Gi       1,0Gi       1,7Gi        12Mi       1,1Gi       2,8Gi\nÉchange:       974Mi          0B       974Mi\n' : '               total       utilisé      libre     partagé tamp/cache   disponible\nMem:         4028340     1054312     1825120       12404     1148908     2950012\nÉchange:      998396           0      998396\n');
    return 0;
  };
  C.uname = async (c) => {
    const a = c.args.join(' ');
    if (/-a/.test(a)) c.out('Linux ' + c.sys.hostname + ' 6.1.0-13-amd64 #1 SMP PREEMPT_DYNAMIC Debian 6.1.55-1 (2023-09-29) x86_64 GNU/Linux\n');
    else if (/-r/.test(a)) c.out('6.1.0-13-amd64\n');
    else if (/-n/.test(a)) c.out(c.sys.hostname + '\n');
    else c.out('Linux\n');
    return 0;
  };
  C.dmesg = async (c) => { if (c.cred.uid !== 0) { c.err('dmesg: échec de lecture du tampon noyau: Opération non permise\n'); return 1; } c.out('[    0.000000] Linux version 6.1.0-13-amd64\n[    0.412311] e1000 0000:00:03.0 enp0s3: renamed from eth0\n'); return 0; };
  C.lsblk = async (c) => { c.out('NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINTS\nsda      8:0    0   20G  0 disk \n├─sda1   8:1    0   19G  0 part /\n└─sda5   8:5    0  975M  0 part [SWAP]\nsr0     11:0    1 1024M  0 rom  \n'); return 0; };
  C.mount = async (c) => { c.out('/dev/sda1 on / type ext4 (rw,relatime,errors=remount-ro)\nproc on /proc type proc (rw,nosuid,nodev,noexec,relatime)\ntmpfs on /run type tmpfs (rw,nosuid,nodev,noexec,relatime)\n'); return 0; };
  C.env = async (c) => { if (c.args.length) return c.sh.runCommand(c.args, c.ctx, {}); for (const k of Object.keys(c.env).sort()) c.out(k + '=' + c.env[k] + '\n'); return 0; };
  C.printenv = async (c) => { if (c.args.length) { const v = c.env[c.args[0]]; if (v == null) return 1; c.out(v + '\n'); return 0; } return C.env(c); };
})();
