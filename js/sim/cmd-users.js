/* Comptes, groupes, sessions : id, adduser, usermod, passwd, su, sudo, newgrp, chage… */
(function () {
  'use strict';
  const APP = window.APP;
  const SIM = APP.SIM;
  const C = SIM.cmds;
  const ROOT_PATH = '/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin';

  function needRoot(c, what) {
    if (c.cred.uid === 0) return true;
    c.err(c.name + ': ' + (what || 'seul le superutilisateur peut effectuer cette action') + '\n');
    return false;
  }
  C.whoami = async (c) => { c.out(c.sys.uname(c.cred.uid) + '\n'); return 0; };
  C.id = async (c) => {
    const { f, pos } = c.opts('ugnG', {});
    let uid, gid, gids;
    if (pos[0]) { const u = c.sys.user(pos[0]); if (!u) { c.err("id: '" + pos[0] + "' : utilisateur inexistant\n"); return 1; } uid = u.uid; gid = u.gid; gids = c.sys.userGids(u.name); }
    else { uid = c.cred.uid; gid = c.cred.gid; gids = c.cred.groups.slice(); if (!gids.includes(gid)) gids.unshift(gid); }
    const gn = (g) => c.sys.gname(g);
    if (f.u) { c.out((f.n ? c.sys.uname(uid) : uid) + '\n'); return 0; }
    if (f.g && !f.G) { c.out((f.n ? gn(gid) : gid) + '\n'); return 0; }
    if (f.G) { c.out(gids.map((g) => (f.n ? gn(g) : g)).join(' ') + '\n'); return 0; }
    c.out('uid=' + uid + '(' + c.sys.uname(uid) + ') gid=' + gid + '(' + gn(gid) + ') groupes=' + gids.map((g) => g + '(' + gn(g) + ')').join(',') + '\n');
    return 0;
  };
  C.groups = async (c) => {
    if (c.args.length) {
      let st = 0;
      for (const n of c.args) { const u = c.sys.user(n); if (!u) { c.err("groups: '" + n + "' : utilisateur inexistant\n"); st = 1; continue; } c.out(n + ' : ' + c.sys.userGids(n).map((g) => c.sys.gname(g)).join(' ') + '\n'); }
      return st;
    }
    const gids = c.cred.groups.slice(); if (!gids.includes(c.cred.gid)) gids.unshift(c.cred.gid);
    const ordered = [c.cred.gid].concat(gids.filter((g) => g !== c.cred.gid));
    c.out(ordered.map((g) => c.sys.gname(g)).join(' ') + '\n');
    return 0;
  };
  C.getent = async (c) => {
    const [db, key] = c.args;
    if (!db) { c.err('getent: nom de base de données requis\n'); return 1; }
    const sys = c.sys;
    if (db === 'passwd' || db === 'group' || db === 'shadow') {
      if (db === 'shadow' && c.cred.uid !== 0) return 2;
      const lines = sys.readFile('/etc/' + db).split('\n').filter(Boolean);
      const out = key ? lines.filter((l) => l.split(':')[0] === key || l.split(':')[2] === key) : lines;
      if (out.length) c.out(out.join('\n') + '\n');
      return out.length ? 0 : 2;
    }
    if (db === 'hosts' || db === 'ahosts') {
      if (!key) { c.out((sys.readFile('/etc/hosts') || '').split('\n').filter((l) => l && !l.startsWith('#')).join('\n') + '\n'); return 0; }
      const ip = /^\d+\.\d+\.\d+\.\d+$/.test(key) ? key : SIM.resolveName(sys, key).ip;
      if (!ip) return 2;
      c.out(ip.padEnd(15) + ' ' + key + '\n');
      return 0;
    }
    if (db === 'services') { const t = sys.readFile('/etc/services') || ''; const l = t.split('\n').find((x) => x.split(/\s+/)[0] === key || (x.split(/\s+/)[1] || '').split('/')[0] === key); if (!l) return 2; c.out(l.replace(/#.*$/, '').trim().replace(/\t+/, '  ') + '\n'); return 0; }
    c.err("getent: base de données inconnue: " + db + '\n'); return 1;
  };
  C.who = async (c) => {
    const sess = [...c.sys.procs.values()].filter((p) => p.isShell && p.interactive && (p.cmd === '-bash' || p.login));
    const seen = new Set(); let s = '';
    for (const p of sess) { const k = p.uid + p.tty; if (seen.has(k)) continue; seen.add(k); s += c.sys.uname(p.uid).padEnd(9) + p.tty.padEnd(13) + new Date(p.start).toISOString().slice(0, 16).replace('T', ' ') + (p.from ? ' (' + p.from + ')' : ' (:0)') + '\n'; }
    c.out(s);
    return 0;
  };
  C.w = async (c) => {
    const sess = [...c.sys.procs.values()].filter((p) => p.isShell && p.interactive);
    c.out(' ' + new Date().toTimeString().slice(0, 8) + ' up ' + SIM.uptimeStr(c.sys) + ',  ' + sess.length + ' users,  load average: ' + SIM.loadavg(c.sys).join(', ') + '\nUTIL.    TTY      DE               LOGIN@  IDLE   JCPU   PCPU QUOI\n');
    for (const p of sess) {
      const fgc = [...c.sys.procs.values()].find((q) => q.tty === p.tty && q.fg) ;
      c.out(c.sys.uname(p.uid).padEnd(9) + p.tty.padEnd(9) + (p.from || ':0').padEnd(17) + new Date(p.start).toTimeString().slice(0, 5).padEnd(8) + '1.00s'.padEnd(7) + '0.05s'.padEnd(7) + '0.00s ' + (fgc ? fgc.cmd : p.cmd) + '\n');
    }
    return 0;
  };
  C.last = async (c) => {
    const rows = c.sys.logins.slice().reverse();
    let s = '';
    for (const l of rows) s += l.user.padEnd(9) + l.tty.padEnd(13) + (l.from || ':0').padEnd(17) + new Date(l.t).toString().slice(0, 16) + '   ' + (l.out ? '- ' + new Date(l.out).toTimeString().slice(0, 5) : 'still logged in') + '\n';
    s += 'etudiant pts/0        :0               ' + new Date(c.sys.booted).toString().slice(0, 16) + '   still logged in\nreboot   system boot  6.1.0-13-amd64   ' + new Date(c.sys.booted).toString().slice(0, 16) + '   still running\n\nwtmp begins ' + new Date(c.sys.booted - 86400000 * 30).toString().slice(0, 24) + '\n';
    c.out(s); return 0;
  };
  C.lastb = async (c) => {
    if (c.cred.uid !== 0) { c.err('lastb: /var/log/btmp: Permission non accordée\n'); return 1; }
    let s = '';
    for (const l of c.sys.failedLogins.slice().reverse()) s += l.user.padEnd(9) + 'ssh:notty    ' + l.from.padEnd(17) + new Date(l.t).toString().slice(0, 16) + ' - ' + new Date(l.t).toTimeString().slice(0, 5) + '  (00:00)\n';
    s += '\nbtmp begins ' + new Date(c.sys.booted).toString().slice(0, 24) + '\n';
    c.out(s); return 0;
  };

  /* ---------------- gestion des comptes ---------------- */
  async function askNewPassword(c, label) {
    for (let k = 0; k < 3; k++) {
      const p1 = await c.readLine(label || 'Nouveau mot de passe : ', { password: true });
      if (p1 == null) { c.err('\npasswd : opération interrompue\n'); return null; }
      const p2 = await c.readLine('Retapez le nouveau mot de passe : ', { password: true });
      if (p2 == null) { c.err('\npasswd : opération interrompue\n'); return null; }
      if (p1 !== p2) { c.err('Les mots de passe ne correspondent pas.\n'); continue; }
      if (!p1) { c.err('Aucun mot de passe n\'a été fourni.\n'); continue; }
      return p1;
    }
    c.err('passwd : nombre maximum de tentatives atteint\n');
    return null;
  }
  C.adduser = async (c) => {
    if (c.cred.uid !== 0) { c.err('fatal : Seul le superutilisateur peut ajouter un utilisateur ou un groupe au système.\n'); return 1; }
    const pos = c.args.filter((a) => a[0] !== '-');
    const opts = c.args.filter((a) => a[0] === '-');
    if (opts.includes('--group') || (pos.length === 1 && opts.includes('--system') === false && c.name === 'addgroup')) return C.groupadd(c);
    if (pos.length === 2) { // adduser utilisateur groupe
      const [u, g] = pos;
      if (!c.sys.user(u)) { c.err("fatal : L'utilisateur « " + u + " » n'existe pas.\n"); return 1; }
      const gr = c.sys.group(g); if (!gr) { c.err("fatal : Le groupe « " + g + " » n'existe pas.\n"); return 1; }
      if (gr.members.includes(u)) { c.out("info : L'utilisateur « " + u + " » appartient déjà au groupe « " + g + " ».\n"); return 0; }
      c.out("info : Ajout de l'utilisateur « " + u + " » au groupe « " + g + " »...\n");
      gr.members.push(u); c.sys.syncEtc(); c.sys.emit('users', {});
      return 0;
    }
    const name = pos[0];
    if (!name) { c.err('fatal : Un seul nom ou deux noms sont autorisés.\n'); return 1; }
    if (!/^[a-z_][a-z0-9_-]*$/.test(name)) { c.err("fatal : Merci d'entrer un nom d'utilisateur conforme à NAME_REGEX.\n"); return 1; }
    if (c.sys.user(name)) { c.err("fatal : L'utilisateur « " + name + " » existe déjà.\n"); return 1; }
    const u = c.sys.addUser(name, {});
    c.out("info : Ajout de l'utilisateur « " + name + " » ...\ninfo : Choix d'un UID/GID dans la plage 1000 à 59999 ...\ninfo : Ajout du nouveau groupe « " + name + " » (" + u.gid + ") ...\ninfo : Ajout du nouvel utilisateur « " + name + " » (" + u.uid + ") avec le groupe « " + name + " (" + u.gid + ") » ...\ninfo : Création du répertoire personnel « /home/" + name + " » ...\ninfo : Copie des fichiers depuis « /etc/skel » ...\n");
    if (!opts.includes('--disabled-password')) {
      const pw = await askNewPassword(c);
      if (pw) { u.pw = pw; c.out('passwd : le mot de passe a été mis à jour avec succès\n'); }
      else c.out("passwd : Erreur de manipulation du jeton d'authentification\n");
    }
    c.out("Modifier les informations associées à un utilisateur pour " + name + "\nEntrer la nouvelle valeur ou « Entrée » pour conserver la valeur proposée\n");
    if (!opts.some((o) => o.startsWith('--gecos'))) {
      const full = await c.readLine('\tNom complet []: ');
      for (const lbl of ['N° de bureau []: ', 'Téléphone professionnel []: ', 'Téléphone personnel []: ', 'Autre []: ']) { const r = await c.readLine('\t' + lbl); if (r == null) break; }
      u.gecos = (full || '') + ',,,';
      const ok = await c.readLine('Cette information est-elle correcte ? [O/n] ');
      void ok;
    }
    c.out("info : Ajout du nouvel utilisateur « " + name + " » aux groupes supplémentaires « users » ...\ninfo : Ajout de l'utilisateur « " + name + " » au groupe « users » ...\n");
    c.sys.group('users').members.push(name);
    c.sys.syncEtc();
    c.sys.emit('users', { op: 'add', name });
    return 0;
  };
  C.addgroup = async (c) => C.groupadd(c);
  C.useradd = async (c) => {
    if (!needRoot(c, 'Permission non accordée.\nuseradd: impossible de verrouiller /etc/passwd ; veuillez réessayer plus tard.')) return 1;
    const { f, pos } = c.opts('mMG:g:s:d:u:c:', {});
    const name = pos[0];
    if (!name) { c.err('Utilisation : useradd [options] IDENTIFIANT\n'); return 2; }
    if (c.sys.user(name)) { c.err("useradd : l'utilisateur « " + name + " » existe déjà\n"); return 9; }
    const u = c.sys.addUser(name, {});
    if (!f.m) { const parent = c.sys.resolveRaw('/home'); delete parent.ch[name]; }
    u.shell = f.s || '/bin/sh';
    if (f.G) for (const g of f.G.split(',')) { const gr = c.sys.group(g); if (gr) gr.members.push(name); }
    c.sys.syncEtc(); c.sys.emit('users', { op: 'add', name });
    return 0;
  };
  C.deluser = async (c) => {
    if (c.cred.uid !== 0) { c.err('fatal : Seul le superutilisateur peut supprimer un utilisateur ou un groupe du système.\n'); return 1; }
    const pos = c.args.filter((a) => a[0] !== '-');
    const rmHome = c.args.includes('--remove-home') || c.args.includes('--remove-all-files');
    if (c.args.includes('--group') || c.name === 'delgroup') return C.groupdel(c);
    if (pos.length === 2) {
      const [u, g] = pos; const gr = c.sys.group(g);
      if (!c.sys.user(u)) { c.err("fatal : L'utilisateur « " + u + " » n'existe pas.\n"); return 1; }
      if (!gr) { c.err("fatal : Le groupe « " + g + " » n'existe pas.\n"); return 1; }
      if (!gr.members.includes(u)) { c.err("fatal : L'utilisateur « " + u + " » n'est pas membre du groupe « " + g + " ».\n"); return 1; }
      c.out("info : Suppression de l'utilisateur « " + u + " » du groupe « " + g + " » ...\n");
      gr.members = gr.members.filter((x) => x !== u); c.sys.syncEtc(); c.sys.emit('users', { op: 'delgroup', user: u, group: g });
      return 0;
    }
    const name = pos[0];
    const u = c.sys.user(name);
    if (!u) { c.err("fatal : L'utilisateur « " + name + " » n'existe pas.\n"); return 2; }
    const busy = [...c.sys.procs.values()].find((p) => p.uid === u.uid && p.state !== 'Z' && (p.isShell || p.tty !== '?'));
    if (busy) { c.err('userdel: user ' + name + ' is currently used by process ' + busy.pid + '\nfatal : échec de « /usr/sbin/userdel ' + name + ' » avec le code 8.\n'); c.hint('déconnecte d\'abord cet utilisateur (exit) ou arrête ses processus'); return 8; }
    if (rmHome) { c.out("info : Recherche des fichiers à sauvegarder ou supprimer ...\ninfo : Suppression des fichiers ...\n"); c.sys.removePath(u.home); }
    c.out("info : Suppression de l'utilisateur « " + name + " » ...\n");
    c.sys.users = c.sys.users.filter((x) => x !== u);
    for (const g of c.sys.groups) g.members = g.members.filter((m) => m !== name);
    const pg = c.sys.groupByGid(u.gid);
    if (pg && pg.name === name && !c.sys.users.some((x) => x.gid === pg.gid)) { c.sys.groups = c.sys.groups.filter((g) => g !== pg); c.out("info : Suppression du groupe « " + name + " » (" + pg.gid + ") ...\n"); }
    c.sys.syncEtc(); c.sys.emit('users', { op: 'del', name });
    return 0;
  };
  C.delgroup = C.deluser;
  C.userdel = async (c) => {
    if (!needRoot(c, 'Permission non accordée.')) return 1;
    const { f, pos } = c.opts('rf', { remove: 'r' });
    const u = c.sys.user(pos[0]);
    if (!u) { c.err("userdel : l'utilisateur « " + pos[0] + " » n'existe pas\n"); return 6; }
    if (f.r) c.sys.removePath(u.home);
    c.sys.users = c.sys.users.filter((x) => x !== u);
    for (const g of c.sys.groups) g.members = g.members.filter((m) => m !== u.name);
    const pg = c.sys.groupByGid(u.gid); if (pg && pg.name === u.name) c.sys.groups = c.sys.groups.filter((g) => g !== pg);
    c.sys.syncEtc(); c.sys.emit('users', { op: 'del', name: u.name });
    return 0;
  };
  C.groupadd = async (c) => {
    if (c.cred.uid !== 0) { c.err('groupadd : Permission non accordée.\ngroupadd : impossible de verrouiller /etc/group ; veuillez réessayer plus tard.\n'); return 10; }
    const name = c.args.filter((a) => a[0] !== '-').pop();
    if (!name) { c.err('Utilisation : groupadd [options] GROUPE\n'); return 2; }
    if (c.sys.group(name)) { c.err('groupadd : le groupe « ' + name + ' » existe déjà\n'); return 9; }
    let gid = 1001; while (c.sys.groupByGid(gid) || c.sys.users.some((u) => u.uid === gid)) gid++;
    c.sys.groups.push({ name, gid, members: [] }); c.sys.syncEtc(); c.sys.emit('users', { op: 'groupadd', name });
    return 0;
  };
  C.groupdel = async (c) => {
    if (c.cred.uid !== 0) { c.err('groupdel : Permission non accordée.\n'); return 10; }
    const name = c.args.filter((a) => a[0] !== '-').pop();
    const g = c.sys.group(name);
    if (!g) { c.err("groupdel : le groupe « " + name + " » n'existe pas\n"); return 6; }
    const prim = c.sys.users.find((u) => u.gid === g.gid);
    if (prim) { c.err("groupdel : impossible de supprimer le groupe primaire de l'utilisateur « " + prim.name + " »\n"); return 8; }
    c.sys.groups = c.sys.groups.filter((x) => x !== g); c.sys.syncEtc(); c.sys.emit('users', { op: 'groupdel', name });
    return 0;
  };
  C.usermod = async (c) => {
    if (c.cred.uid !== 0) { c.err('usermod : Permission non accordée.\nusermod : impossible de verrouiller /etc/passwd ; veuillez réessayer plus tard.\n'); return 1; }
    const { f, pos } = c.opts('aG:g:s:d:l:LUu:e:', { append: 'a', groups: 'G:', lock: 'L', unlock: 'U' });
    const name = pos[0];
    const u = c.sys.user(name);
    if (!name) { c.err('Utilisation : usermod [options] IDENTIFIANT\n'); return 2; }
    if (!u) { c.err("usermod : l'utilisateur « " + name + " » n'existe pas\n"); return 6; }
    if (f.a && !f.G) { c.err("usermod : l'option -a ne peut être utilisée qu'avec l'option -G\nUtilisation : usermod [options] IDENTIFIANT\n"); return 2; }
    if (f.G != null) {
      const list = f.G.split(',').filter(Boolean);
      for (const g of list) if (!c.sys.group(g)) { c.err("usermod : le groupe « " + g + " » n'existe pas\n"); return 6; }
      if (!f.a) for (const g of c.sys.groups) g.members = g.members.filter((m) => m !== name);
      for (const g of list) { const gr = c.sys.group(g); if (!gr.members.includes(name) && gr.gid !== u.gid) gr.members.push(name); }
      c.sys.emit('users', { op: 'usermod', name, groups: list, append: !!f.a });
    }
    if (f.g) { const g = c.sys.group(f.g); if (!g) { c.err("usermod : le groupe « " + f.g + " » n'existe pas\n"); return 6; } u.gid = g.gid; }
    if (f.s) u.shell = f.s;
    if (f.L) u.locked = true;
    if (f.U) u.locked = false;
    c.sys.syncEtc();
    return 0;
  };
  C.gpasswd = async (c) => {
    const a = c.args;
    if ((a[0] === '-a' || a[0] === '-d') && a.length === 3) {
      if (c.cred.uid !== 0) { c.err('gpasswd : Permission non accordée.\n'); return 1; }
      const g = c.sys.group(a[2]); const u = c.sys.user(a[1]);
      if (!g) { c.err("gpasswd : le groupe « " + a[2] + " » n'existe pas dans /etc/group\n"); return 3; }
      if (!u) { c.err("gpasswd : l'utilisateur « " + a[1] + " » n'existe pas\n"); return 3; }
      if (a[0] === '-a') { if (!g.members.includes(a[1])) g.members.push(a[1]); c.out("Ajout de l'utilisateur " + a[1] + ' au groupe ' + a[2] + '\n'); }
      else { if (!g.members.includes(a[1])) { c.err("gpasswd : l'utilisateur « " + a[1] + " » n'est pas membre de « " + a[2] + " »\n"); return 3; } g.members = g.members.filter((m) => m !== a[1]); c.out("Suppression de l'utilisateur " + a[1] + ' du groupe ' + a[2] + '\n'); }
      c.sys.syncEtc(); c.sys.emit('users', {});
      return 0;
    }
    c.err('Utilisation : gpasswd [option] GROUPE\n'); return 2;
  };
  C.passwd = async (c) => {
    const { f, pos } = c.opts('ludSe', { lock: 'l', unlock: 'u', delete: 'd', status: 'S', expire: 'e' });
    const target = pos[0] || c.sys.uname(c.cred.uid);
    const u = c.sys.user(target);
    if (!u) { c.err("passwd : l'utilisateur « " + target + " » n'existe pas\n"); return 1; }
    const self = u.uid === c.cred.uid;
    if ((f.l || f.u || f.d || f.e || (!self)) && c.cred.uid !== 0) {
      if (!self) c.err("passwd : Vous ne pouvez pas voir ou modifier les informations du mot de passe pour " + target + '.\n');
      else c.err('passwd : Permission non accordée.\n');
      return 1;
    }
    if (f.S) { c.out(target + ' ' + (u.locked ? 'L' : u.pw ? 'P' : 'NP') + ' ' + new Date(u.lastChange * 86400000).toLocaleDateString('en-US') + ' 0 ' + u.maxDays + ' 7 -1\n'); return 0; }
    if (f.l) { u.locked = true; c.sys.syncEtc(); c.out('passwd : mot de passe changé.\n'); c.sys.emit('users', { op: 'lock', name: target }); return 0; }
    if (f.u) { u.locked = false; c.sys.syncEtc(); c.out('passwd : mot de passe changé.\n'); return 0; }
    if (f.d) { u.pw = null; c.sys.syncEtc(); c.out('passwd : mot de passe changé.\n'); return 0; }
    if (f.e) { u.lastChange = 0; c.sys.syncEtc(); c.out('passwd : mot de passe changé.\n'); return 0; }
    if (c.cred.uid !== 0) {
      c.out('Changement du mot de passe pour ' + target + '.\n');
      const cur = await c.readLine('Mot de passe actuel : ', { password: true });
      if (cur == null) return 1;
      if (cur !== u.pw) { await SIM.sleep(1500); c.err("passwd : Erreur d'authentification\npasswd : mot de passe inchangé\n"); return 10; }
    }
    const pw = await askNewPassword(c);
    if (!pw) return 10;
    u.pw = pw; u.lastChange = Math.floor(Date.now() / 86400000); c.sys.syncEtc();
    c.out('passwd : le mot de passe a été mis à jour avec succès\n');
    return 0;
  };
  C.chage = async (c) => {
    const { f, pos } = c.opts('lM:m:W:I:E:d:', { list: 'l', maxdays: 'M:', mindays: 'm:' });
    const name = pos[0];
    const u = c.sys.user(name);
    if (!name) { c.err('Utilisation : chage [options] IDENTIFIANT\n'); return 2; }
    if (!u) { c.err("chage : l'utilisateur « " + name + " » n'existe pas\n"); return 1; }
    if (c.cred.uid !== 0 && !(f.l && u.uid === c.cred.uid)) { c.err('chage : Permission non accordée.\n'); return 1; }
    if (f.M != null) { u.maxDays = parseInt(f.M, 10); c.sys.syncEtc(); c.sys.emit('users', { op: 'chage', name, max: u.maxDays }); }
    if (f.m != null) u.minDays = parseInt(f.m, 10);
    if (f.W != null) u.warn = parseInt(f.W, 10);
    if (f.E != null) u.expire = f.E;
    if (f.l) {
      const d = (days) => new Date(days * 86400000).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' });
      c.out('Dernier changement de mot de passe\t\t\t\t\t: ' + d(u.lastChange) + '\nFin de validité du mot de passe\t\t\t\t\t: ' + (u.maxDays >= 99999 ? 'jamais' : d(u.lastChange + u.maxDays)) + '\nMot de passe désactivé\t\t\t\t\t\t: jamais\nFin de validité du compte\t\t\t\t\t: ' + (u.expire && u.expire !== '-1' ? u.expire : 'jamais') + '\nNombre minimum de jours entre les changements de mot de passe\t\t: ' + (u.minDays || 0) + '\nNombre maximum de jours entre les changements de mot de passe\t\t: ' + u.maxDays + "\nNombre de jours d'avertissement avant la fin de validité du mot de passe\t: " + (u.warn || 7) + '\n');
    }
    if (!f.l && f.M == null && f.m == null && f.W == null && f.E == null) { c.err('chage : (simulateur) utilise -M N ou -l\n'); return 1; }
    return 0;
  };

  /* ---------------- su / sudo / newgrp ---------------- */
  async function checkPw(c, user, prompt) {
    const u = c.sys.user(user);
    const pw = await c.readLine(prompt, { password: true });
    if (pw == null) return null;
    if (!u || u.locked || !u.pw || pw !== u.pw) { await SIM.sleep(1200); return false; }
    return true;
  }
  C.su = async (c) => {
    let login = false; const pos = []; let cmd = null;
    for (let i = 0; i < c.args.length; i++) { const a = c.args[i]; if (a === '-' || a === '-l' || a === '--login') login = true; else if (a === '-c') cmd = c.args[++i]; else pos.push(a); }
    const target = pos[0] || 'root';
    const u = c.sys.user(target);
    if (!u) { c.err("su: l'utilisateur " + target + " n'existe pas ou le compte n'est pas un compte utilisateur\n"); return 1; }
    if (c.cred.uid !== 0) {
      const ok = await checkPw(c, target, 'Mot de passe : ');
      if (ok == null) { c.out('\n'); return 1; }
      if (!ok) { c.err("su: Échec d'authentification\n"); c.sys.log('su', 'su[' + c.proc.pid + "]: FAILED SU (to " + target + ') ' + c.sys.uname(c.cred.uid) + ' on ' + c.sh.tty); return 1; }
    }
    if (u.shell.endsWith('nologin') || u.shell === '/bin/false') { c.out("This account is currently not available.\n"); return 1; }
    c.sys.log('su', 'su[' + c.proc.pid + ']: (to ' + target + ') ' + c.sys.uname(c.cred.uid) + ' on ' + c.sh.tty);
    if (cmd) {
      const fr = Object.assign({}, c.f, { cred: c.sys.credFor(target), user: target, env: Object.assign({}, c.f.env, { USER: target, HOME: u.home }) });
      const ast = APP.sh.parse(cmd);
      return c.sh.execList(ast, Object.assign({}, c.ctx, { frame: fr }));
    }
    const suProc = c.sys.addProc({ pid: c.sys.allocPid(), ppid: c.ctx.selfPid, uid: 0, cmd: 'su ' + (login ? '- ' : '') + target, comm: 'su', state: 'S', tty: c.sh.tty });
    const fr = c.sh.pushFrame(c.sys, target, { kind: login ? 'su' : 'bash', ppid: suProc.pid, onExit: () => c.sys.procs.delete(suProc.pid) });
    if (!login) { fr.cwd = c.f.cwd; }
    c.sys.emit('frame', { shell: c.sh, user: target });
    return 0;
  };
  function inSudoers(sys, name) { const g = sys.group('sudo'); const u = sys.user(name); return name === 'root' || (g && (g.members.includes(name) || (u && u.gid === g.gid))); }
  SIM.inSudoers = inSudoers;
  C.sudo = async (c) => {
    const me = c.sys.uname(c.cred.uid);
    const a = c.args.slice();
    let asUser = 'root'; let list = false, shell = false, login = false;
    while (a.length && a[0][0] === '-' && a[0] !== '--') {
      const o = a.shift();
      if (o === '-u') asUser = a.shift(); else if (o === '-l' || o === '-ll') list = true; else if (o === '-i') login = true; else if (o === '-s') shell = true; else if (o === '-k' || o === '-K') { c.sys.sudoOk = new Set(); if (!a.length) return 0; } else if (o === '-v') { /* rien */ } else if (o === '-E' || o === '-H' || o === '-n') { /* ignoré */ }
      else { c.err("sudo: option invalide -- '" + o.replace(/^-+/, '') + "'\nusage: sudo -h | -K | -k | -V\n"); return 1; }
    }
    if (a[0] === '--') a.shift();
    if (!a.length && !list && !shell && !login) { c.err('usage: sudo -h | -K | -k | -V\nusage: sudo -v [-ABkNnS] [-g group] [-h host] [-p prompt] [-u user]\nusage: sudo [-ABbEHkNnPS] [-C num] [-D directory] [-g group] [-h host] [-p prompt] [-R directory] [-T timeout] [-u user] [VAR=value] [-i | -s] [<command>]\n'); return 1; }
    const sys = c.sys;
    sys.sudoOk = sys.sudoOk || new Set(['etudiant']);
    if (c.cred.uid !== 0 && !sys.sudoOk.has(me)) {
      let ok = false;
      for (let k = 0; k < 3; k++) {
        const r = await checkPw(c, me, '[sudo] Mot de passe de ' + me + ' : ');
        if (r == null) { c.out('\n'); return 1; }
        if (r) { ok = true; break; }
        c.err('Désolé, essayez de nouveau.\n');
      }
      if (!ok) { c.err('sudo: 3 saisies de mots de passe incorrectes\n'); return 1; }
      if (inSudoers(sys, me)) sys.sudoOk.add(me);
    }
    if (c.cred.uid !== 0 && !inSudoers(sys, me)) {
      if (list) { c.out("Désolé, l'utilisateur " + me + ' ne peut pas utiliser sudo sur ' + sys.hostname + '.\n'); return 1; }
      c.err(me + " n'est pas dans le fichier sudoers.  Cet incident sera signalé.\n");
      sys.log('sudo', 'sudo[' + c.proc.pid + ']: ' + me + ' : user NOT in sudoers ; TTY=' + c.sh.tty + ' ; PWD=' + c.f.cwd + ' ; USER=root ; COMMAND=' + a.join(' '));
      sys.emit('sudo-denied', { user: me });
      return 1;
    }
    if (list) {
      c.out('Entrées par défaut pour ' + me + ' sur ' + sys.hostname + ' :\n    env_reset, mail_badpass, secure_path=/usr/local/sbin\\:/usr/local/bin\\:/usr/sbin\\:/usr/bin\\:/sbin\\:/bin, use_pty\n\nL\'utilisateur ' + me + ' peut utiliser les commandes suivantes sur ' + sys.hostname + ' :\n    (ALL : ALL) ALL\n');
      return 0;
    }
    const target = sys.user(asUser);
    if (!target) { c.err('sudo: utilisateur inconnu : ' + asUser + '\nsudo: impossible d\'initialiser le module de politique\n'); return 1; }
    c.proc.uid = 0;
    sys.log('sudo', 'sudo[' + c.proc.pid + ']: ' + me + ' : TTY=' + c.sh.tty + ' ; PWD=' + c.f.cwd + ' ; USER=' + asUser + ' ; COMMAND=' + (a.join(' ') || '/bin/bash'));
    sys.emit('sudo', { user: me, cmd: a });
    if (login || shell || (a.length === 1 && (a[0] === 'su' || a[0] === 'bash' || a[0] === '-i')) || (a[0] === 'su' && (a[1] === '-' || a[1] === 'root'))) {
      const fr = c.sh.pushFrame(sys, asUser, { kind: login || a[0] === 'su' ? 'su' : 'bash', ppid: c.proc.pid });
      if (!login && a[0] !== 'su') fr.cwd = c.f.cwd;
      return 0;
    }
    if (SIM.BUILTINS.includes(a[0]) && !sys.resolveRaw('/usr/bin/' + a[0])) { c.err('sudo: ' + a[0] + ' : commande introuvable\n'); return 1; }
    const cred = sys.credFor(asUser);
    const fr = Object.assign({}, c.f, { cred, user: asUser, env: Object.assign({}, c.f.env, { USER: asUser, LOGNAME: asUser, HOME: target.home, PATH: ROOT_PATH, SUDO_USER: me }) });
    const ctx2 = Object.assign({}, c.ctx, { frame: fr, selfPid: c.proc.pid, noBuiltins: true });
    if (a[0] === 'kill' || a[0] === 'echo' || a[0] === 'pwd') {
      return c.sh.execFile(sys.resolveRaw('/usr/bin/' + a[0]), '/usr/bin/' + a[0], a[0], a.slice(1), ctx2, {});
    }
    return c.sh.runCommand(a, ctx2, {});
  };
  C.newgrp = async (c) => {
    const g = c.args.filter((x) => x !== '-')[0];
    const me = c.sys.uname(c.cred.uid);
    let gid;
    if (!g) gid = c.sys.user(me).gid;
    else {
      const gr = c.sys.group(g);
      if (!gr) { c.err("newgrp: le groupe « " + g + " » n'existe pas\n"); return 1; }
      if (!gr.members.includes(me) && c.sys.user(me).gid !== gr.gid && c.cred.uid !== 0) {
        await c.readLine('Mot de passe : ', { password: true });
        await SIM.sleep(800);
        c.err("newgrp: Échec de l'authentification\n"); return 1;
      }
      gid = gr.gid;
    }
    c.sh.pushFrame(c.sys, me, { kind: 'newgrp', gid, ppid: c.ctx.selfPid });
    c.sys.emit('newgrp', { group: g, shell: c.sh });
    return 0;
  };
  C.visudo = async (c) => {
    if (c.cred.uid !== 0) { c.err('visudo: /etc/sudoers : Permission non accordée\n'); return 1; }
    const n = c.sys.resolveRaw('/etc/sudoers');
    const r = await c.sh.term.editor({ title: '/etc/sudoers.tmp', content: n.c, mode: 'nano' });
    if (r != null) {
      if (/^\s*[^#\s@%]\S*\s+[^=\s]+\s*$/m.test(r)) { c.out('/etc/sudoers:12:5: erreur de syntaxe\nQue voulez-vous faire maintenant ? (fichier non enregistré dans le simulateur)\n'); return 1; }
      n.c = r; n.mtime = Date.now();
    }
    return 0;
  };
})();
