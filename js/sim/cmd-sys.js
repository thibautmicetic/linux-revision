/* Services, journaux, paquets, redémarrage, manuel et éditeurs. */
(function () {
  'use strict';
  const APP = window.APP;
  const SIM = APP.SIM;
  const C = SIM.cmds;

  const MOIS = ['janv.', 'févr.', 'mars', 'avril', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'];
  const jdate = (t) => { const d = new Date(t); return MOIS[d.getMonth()] + ' ' + String(d.getDate()).padStart(2, '0') + ' ' + d.toTimeString().slice(0, 8); };
  const ago = (t) => { const s = Math.floor((Date.now() - t) / 1000); if (s < 60) return s + 's ago'; const m = Math.floor(s / 60); if (m < 60) return m + 'min ago'; const h = Math.floor(m / 60); return h + 'h ' + (m % 60) + 'min ago'; };

  /* ---------------- systemctl ---------------- */
  C.systemctl = async (c) => {
    const sys = c.sys;
    const a = c.args.filter((x) => !['--no-pager', '-l', '--full', '-q', '--quiet'].includes(x));
    const now = a.includes('--now');
    const pos = a.filter((x) => x[0] !== '-');
    const verb = pos[0] || 'list-units';
    const units = pos.slice(1).map((u) => u.replace(/\.service$/, ''));
    const modify = ['start', 'stop', 'restart', 'reload', 'enable', 'disable', 'mask', 'unmask', 'daemon-reload', 'reboot', 'poweroff', 'try-restart', 'reload-or-restart'].includes(verb);
    if (modify && c.cred.uid !== 0) {
      c.err((verb === 'daemon-reload' ? 'Failed to reload daemon' : 'Failed to ' + verb + ' ' + (units[0] || '') + '.service') + ': Interactive authentication required.\nSee system logs and \'systemctl status ' + (units[0] || '') + '.service\' for details.\n');
      c.hint('pour gérer un service, il faut sudo');
      return 1;
    }
    const getS = (u) => { const s = sys.service(u); if (!s || (s.pkg && !sys.installed.has(s.pkg))) return null; return s; };
    if (verb === 'list-units' || verb === 'list-unit-files' || verb === '--failed' || a.includes('--type=service')) {
      c.out('  UNIT                         LOAD   ACTIVE SUB     DESCRIPTION\n');
      for (const s of Object.values(sys.services)) { if (s.pkg && !sys.installed.has(s.pkg)) continue; c.out('  ' + (s.name + '.service').padEnd(28) + ' loaded ' + (s.active ? 'active' : s.failed ? 'failed' : 'inactive').padEnd(6) + ' ' + (s.active ? (s.oneshot ? 'exited ' : 'running') : 'dead   ') + ' ' + s.desc + '\n'); }
      return 0;
    }
    if (verb === 'daemon-reload') return 0;
    if (verb === 'reboot' || verb === 'poweroff') return C.reboot(c);
    if (!units.length) { c.err('Too few arguments.\n'); return 1; }
    let st = 0;
    for (const u of units) {
      const s = getS(u);
      if (!s) {
        if (verb === 'status') { c.err('Unit ' + u + '.service could not be found.\n'); st = 4; }
        else if (verb === 'is-active') { c.out('inactive\n'); st = 3; }
        else if (verb === 'is-enabled') { c.err('Failed to get unit file state for ' + u + '.service: No such file or directory\n'); st = 1; }
        else { c.err('Failed to ' + verb + ' ' + u + '.service: Unit ' + u + '.service not found.\n'); st = 5; }
        continue;
      }
      switch (verb) {
        case 'status': {
          const dot = s.active ? '●' : s.failed ? '×' : '○';
          let out = dot + ' ' + s.name + '.service - ' + s.desc + '\n     Loaded: loaded (/lib/systemd/system/' + s.name + '.service; ' + (s.enabled ? 'enabled' : 'disabled') + '; preset: enabled)\n';
          if (s.active) out += '     Active: active (' + (s.oneshot ? 'exited' : 'running') + ') since ' + new Date(s.since || sys.booted).toString().slice(0, 24) + ' CEST; ' + ago(s.since || sys.booted) + '\n';
          else if (s.failed) out += '     Active: failed (Result: exit-code) since ' + new Date().toString().slice(0, 24) + ' CEST; 2s ago\n';
          else out += '     Active: inactive (dead)' + (s.since ? ' since ' + new Date(s.stoppedAt || Date.now()).toString().slice(0, 24) + ' CEST; ' + ago(s.stoppedAt || Date.now()) : '') + '\n';
          if (s.name === 'ssh') out += '       Docs: man:sshd(8)\n             man:sshd_config(5)\n';
          if (s.active && s.pid) {
            const p = sys.proc(s.pid);
            out += '   Main PID: ' + s.pid + ' (' + (p ? p.comm : s.comm) + ')\n      Tasks: ' + (1 + sys.children(s.pid).length) + ' (limit: 4645)\n     Memory: ' + (2 + (s.pid % 9)) + '.' + (s.pid % 10) + 'M\n        CPU: ' + (30 + s.pid % 70) + 'ms\n     CGroup: /system.slice/' + s.name + '.service\n             └─' + s.pid + ' "' + (p ? p.cmd : s.cmd) + '"\n';
          }
          const logs = sys.journal.filter((j) => j.unit === s.name || (s.name === 'ssh' && j.unit === 'ssh')).slice(-5);
          if (logs.length) out += '\n' + logs.map((j) => jdate(j.t) + ' ' + sys.hostname + ' ' + j.msg).join('\n') + '\n';
          c.out(out);
          st = s.active ? 0 : 3;
          break;
        }
        case 'start': if (!sys.startService(s.name)) { c.err('Job for ' + s.name + '.service failed because the control process exited with error code.\nSee "systemctl status ' + s.name + '.service" and "journalctl -xeu ' + s.name + '.service" for details.\n'); st = 1; } else sys.emit('service', { op: 'start', name: s.name }); break;
        case 'stop': sys.stopService(s.name); s.stoppedAt = Date.now(); sys.emit('service', { op: 'stop', name: s.name }); break;
        case 'restart': case 'try-restart': case 'reload-or-restart':
          sys.stopService(s.name);
          if (s.name === 'fail2ban') SIM.loadJail(sys);
          if (!sys.startService(s.name)) { c.err('Job for ' + s.name + '.service failed because the control process exited with error code.\nSee "systemctl status ' + s.name + '.service" and "journalctl -xeu ' + s.name + '.service" for details.\n'); st = 1; }
          else sys.emit('service', { op: 'restart', name: s.name });
          break;
        case 'reload': if (s.name === 'ssh') sys.sshdConfigLoaded = sys.readFile('/etc/ssh/sshd_config'); if (s.name === 'fail2ban') SIM.loadJail(sys); sys.emit('service', { op: 'reload', name: s.name }); break;
        case 'enable':
          if (s.static) { c.out('The unit files have no installation config (WantedBy=, RequiredBy=, Also=,\nUpheld=, Alias= settings in the [Install] section, and DefaultInstance= for\ntemplate units).\n'); break; }
          if (!s.enabled) c.out('Synchronizing state of ' + s.name + '.service with SysV service script with /lib/systemd/systemd-sysv-install.\nExecuting: /lib/systemd/systemd-sysv-install enable ' + s.name + '\nCreated symlink /etc/systemd/system/multi-user.target.wants/' + s.name + '.service → /lib/systemd/system/' + s.name + '.service.\n');
          s.enabled = true; if (now) sys.startService(s.name);
          sys.emit('service', { op: 'enable', name: s.name });
          break;
        case 'disable':
          if (s.enabled) c.out('Synchronizing state of ' + s.name + '.service with SysV service script with /lib/systemd/systemd-sysv-install.\nExecuting: /lib/systemd/systemd-sysv-install disable ' + s.name + '\nRemoved "/etc/systemd/system/multi-user.target.wants/' + s.name + '.service".\n');
          s.enabled = false; if (now) { sys.stopService(s.name); s.stoppedAt = Date.now(); }
          sys.emit('service', { op: 'disable', name: s.name, now });
          break;
        case 'is-enabled': c.out((s.static ? 'static' : s.enabled ? 'enabled' : 'disabled') + '\n'); st = s.enabled || s.static ? 0 : 1; break;
        case 'is-active': c.out((s.active ? 'active' : s.failed ? 'failed' : 'inactive') + '\n'); st = s.active ? 0 : 3; break;
        case 'mask': s.enabled = false; s.masked = true; c.out('Created symlink /etc/systemd/system/' + s.name + '.service → /dev/null.\n'); break;
        case 'unmask': s.masked = false; c.out('Removed "/etc/systemd/system/' + s.name + '.service".\n'); break;
        default: c.err('Unknown command verb ' + verb + '.\n'); return 1;
      }
    }
    return st;
  };
  C.service = async (c) => {
    const [name, action] = c.args;
    if (!name) { c.err('Usage: service < option > | --status-all | [ service_name [ command | --full-restart ] ]\n'); return 1; }
    if (name === '--status-all') { for (const s of Object.values(c.sys.services)) if (!s.pkg || c.sys.installed.has(s.pkg)) c.out(' [ ' + (s.active ? '+' : '-') + ' ]  ' + s.name + '\n'); return 0; }
    c.args = [action || 'status', name];
    return C.systemctl(c);
  };

  /* ---------------- journalctl ---------------- */
  C.journalctl = async (c) => {
    const { f } = c.opts('u:fn:p:xeb', { unit: 'u:', follow: 'f', lines: 'n:', since: 'since:', until: 'until:', 'no-pager': 'np', priority: 'p:' });
    const sys = c.sys;
    const privileged = c.cred.uid === 0 || c.cred.groups.includes(4) || c.cred.groups.includes((sys.group('systemd-journal') || {}).gid);
    let since = 0;
    if (f.since) {
      const s = f.since.toLowerCase();
      let m;
      if (s === 'today') { const d = new Date(); d.setHours(0, 0, 0, 0); since = d.getTime(); }
      else if (s === 'yesterday') { const d = new Date(); d.setHours(0, 0, 0, 0); since = d.getTime() - 86400000; }
      else if ((m = /^(\d+)\s*(min|minutes?|m|h|hours?|heures?|s|sec|seconds?|d|days?|jours?)\s*ago$/.exec(s))) { const mult = /^m/.test(m[2]) ? 60000 : /^h/.test(m[2]) ? 3600000 : /^s/.test(m[2]) ? 1000 : 86400000; since = Date.now() - +m[1] * mult; }
      else if (/^-\d+/.test(s)) since = Date.now() + parseInt(s, 10) * 60000;
      else { const t = Date.parse(f.since); if (isNaN(t)) { c.err('Failed to parse timestamp: ' + f.since + '\n'); return 1; } since = t; }
    }
    if (!privileged) {
      c.out('Hint: You are currently not seeing messages from other users and the system.\n      Users in groups \'adm\', \'systemd-journal\' can see all messages.\n      Pass -q to turn off this notice.\n');
      c.hint('pour voir les journaux du système (ssh, sudo…), utilise sudo journalctl');
    }
    let unit = f.u ? f.u.replace(/\.service$/, '') : null;
    if (unit === 'sshd') unit = 'ssh';
    let list = sys.journal.filter((j) => (privileged || j.unit === 'user') && (!unit || j.unit === unit || (unit === 'ssh' && j.unit === 'sshd')) && j.t >= since);
    if (f.p && /^(err|3|crit|2)$/.test(f.p)) list = list.filter((j) => /fail|error|denied|invalid/i.test(j.msg));
    if (f.n) list = list.slice(-(+f.n));
    if (!list.length) c.out('-- No entries --\n');
    else c.out(list.map((j) => jdate(j.t) + ' ' + sys.hostname + ' ' + j.msg).join('\n') + '\n');
    if (f.f) {
      let n = sys.journal.length;
      for (;;) {
        const ok = await c.wait(500);
        if (!ok) break;
        if (sys.journal.length > n) { const nl = sys.journal.slice(n).filter((j) => (privileged || j.unit === 'user') && (!unit || j.unit === unit)); if (nl.length) c.out(nl.map((j) => jdate(j.t) + ' ' + sys.hostname + ' ' + j.msg).join('\n') + '\n'); n = sys.journal.length; }
      }
    }
    return 0;
  };

  /* ---------------- apt / dpkg ---------------- */
  const PK = () => SIM.PKGS;
  function netOk(sys) { const r = SIM.resolveName(sys, 'deb.debian.org'); return r.ip ? (SIM.reach(sys, r.ip).ok ? null : 'net') : 'dns'; }
  C.apt = async (c) => {
    const sys = c.sys;
    const args = c.args.filter((x) => !['-y', '--yes', '-q', '--assume-yes'].includes(x));
    const yes = c.args.some((x) => x === '-y' || x === '--yes' || x === '--assume-yes');
    const verb = args[0];
    const pk = args.slice(1).filter((x) => x[0] !== '-');
    if (!c.tty) c.err('\nWARNING: apt does not have a stable CLI interface. Use with caution in scripts.\n\n');
    if (!verb) { c.out('apt 2.6.1 (amd64)\nUtilisation : apt [options] commande\n\nCommandes les plus utilisées :\n  list - affiche les paquets selon leur nom\n  search - recherche dans les descriptions des paquets\n  show - affiche les détails d\'un paquet\n  install - installe des paquets\n  remove - supprime des paquets\n  purge - supprime des paquets et leurs fichiers de configuration\n  update - met à jour la liste des paquets disponibles\n  upgrade - met à jour le système en installant/mettant à niveau les paquets\n'); return 1; }
    const lockErr = () => { c.err('E: Impossible d\'ouvrir le fichier verrou /var/lib/dpkg/lock-frontend - open (13: Permission non accordée)\nE: Impossible d\'obtenir le verrou de dpkg (/var/lib/dpkg/lock-frontend). Avez-vous les droits du superutilisateur ?\n'); c.hint('installer/supprimer des paquets nécessite sudo'); return 100; };
    const reading = 'Lecture des listes de paquets... Fait\nConstruction de l\'arbre des dépendances... Fait\nLecture des informations d\'état... Fait      \n';
    if (verb === 'update') {
      if (c.cred.uid !== 0) { c.err('E: Impossible d\'ouvrir le fichier verrou /var/lib/apt/lists/lock - open (13: Permission non accordée)\nE: Impossible de verrouiller le répertoire /var/lib/apt/lists/\n'); c.hint('apt update nécessite sudo'); return 100; }
      const ne = netOk(sys);
      if (ne) { await c.wait(1500); c.out('Err :1 http://deb.debian.org/debian bookworm InRelease\n  ' + (ne === 'dns' ? 'Échec temporaire de résolution de « deb.debian.org »' : 'Impossible de se connecter à deb.debian.org:80 (151.101.130.132). - connect (101: Le réseau n\'est pas accessible)') + '\n' + reading + 'Tous les paquets sont à jour.\nW: Impossible de récupérer http://deb.debian.org/debian/dists/bookworm/InRelease\nW: Le téléchargement de quelques fichiers d\'index a échoué, ils ont été ignorés, ou les anciens ont été utilisés à la place.\n'); return 0; }
      const lines = ['Atteint :1 http://deb.debian.org/debian bookworm InRelease', 'Réception de :2 http://security.debian.org/debian-security bookworm-security InRelease [48,0 kB]', 'Réception de :3 http://deb.debian.org/debian bookworm-updates InRelease [52,1 kB]', 'Réception de :4 http://security.debian.org/debian-security bookworm-security/main amd64 Packages [128 kB]', '228 ko réceptionnés en 1s (196 ko/s)'];
      for (const l of lines) { if (!(await c.wait(250))) return 130; c.out(l + '\n'); }
      c.out(reading + (sys.upgradable.length ? sys.upgradable.length + ' paquets peuvent être mis à jour. Exécutez « apt list --upgradable » pour les voir.\n' : 'Tous les paquets sont à jour.\n'));
      sys.aptUpdated = true; sys.emit('apt', { op: 'update' });
      return 0;
    }
    if (verb === 'list') {
      c.out('En train de lister... Fait\n');
      if (args.includes('--upgradable')) { for (const p of sys.upgradable) c.out(p + '/stable-security 1.2.3-1+deb12u1 amd64 [pouvant être mis à jour depuis : 1.2.3-1]\n'); sys.emit('apt', { op: 'list-upgradable' }); return 0; }
      const inst = args.includes('--installed');
      for (const [n, p] of Object.entries(PK())) { if (inst && !sys.installed.has(n)) continue; if (pk.length && !pk.some((x) => SIM.globRe(x).test(n))) continue; c.out(n + '/stable ' + p.v + ' amd64' + (sys.installed.has(n) ? ' [installé]' : '') + '\n'); }
      return 0;
    }
    if (verb === 'search') {
      if (!pk.length) { c.err('E: Vous devez indiquer au moins un motif de recherche\n'); return 100; }
      c.out('En train de trier... Fait\nRecherche en texte intégral... Fait\n');
      const re = new RegExp(pk.join('|'), 'i');
      for (const [n, p] of Object.entries(PK())) if (re.test(n) || re.test(p.desc)) c.out(n + '/stable ' + p.v + ' amd64' + (sys.installed.has(n) ? ' [installé]' : '') + '\n  ' + p.desc + '\n\n');
      return 0;
    }
    if (verb === 'show') {
      for (const n of pk) {
        const p = PK()[n];
        if (!p) { c.err('N: Impossible de trouver le paquet ' + n + '\nE: Aucun paquet n\'a été trouvé\n'); return 100; }
        c.out('Package: ' + n + '\nVersion: ' + p.v + '\nPriority: optional\nSection: utils\nMaintainer: Debian Developers <debian-devel@lists.debian.org>\nInstalled-Size: ' + p.size + '\nDepends: ' + p.deps + '\nHomepage: https://packages.debian.org/' + n + '\nTag: role::program\nDownload-Size: ' + p.size + '\nAPT-Sources: http://deb.debian.org/debian bookworm/main amd64 Packages\nDescription: ' + p.desc + '\n\n');
      }
      return 0;
    }
    if (['install', 'reinstall', 'remove', 'purge', 'upgrade', 'full-upgrade', 'dist-upgrade', 'autoremove'].includes(verb) && c.cred.uid !== 0) return lockErr();
    if (verb === 'install' || verb === 'reinstall') {
      if (!pk.length) { c.out(reading + '0 mis à jour, 0 nouvellement installés, 0 à enlever et ' + sys.upgradable.length + ' non mis à jour.\n'); return 0; }
      c.out(reading);
      const todo = [];
      for (const n of pk) {
        const p = PK()[n];
        if (!p) { c.err('E: Impossible de trouver le paquet ' + n + '\n'); return 100; }
        if (sys.installed.has(n) && verb !== 'reinstall') c.out(n + ' est déjà la version la plus récente (' + p.v + ').\n');
        else todo.push(n);
      }
      if (!todo.length) { c.out('0 mis à jour, 0 nouvellement installés, 0 à enlever et ' + sys.upgradable.length + ' non mis à jour.\n'); return 0; }
      const ne = netOk(sys);
      const deps = todo.flatMap((n) => (PK()[n].deps || '').split(',').map((d) => d.trim().split(' ')[0]).filter((d) => d && !/^lib(c6|ssl3)$/.test(d) && !PK()[d]));
      if (deps.length) c.out('Les paquets supplémentaires suivants seront installés :\n  ' + deps.join(' ') + '\n');
      c.out('Les NOUVEAUX paquets suivants seront installés :\n  ' + todo.concat(deps).join(' ') + '\n0 mis à jour, ' + (todo.length + deps.length) + ' nouvellement installés, 0 à enlever et ' + sys.upgradable.length + ' non mis à jour.\nIl est nécessaire de prendre ' + PK()[todo[0]].size + ' dans les archives.\nAprès cette opération, ' + PK()[todo[0]].size + ' d\'espace disque supplémentaires seront utilisés.\n');
      if (deps.length && !yes) { if (!(await c.confirm('Souhaitez-vous continuer ? [O/n] ', true))) { c.out('Annulation.\n'); return 1; } }
      if (ne) { c.err('Err :1 http://deb.debian.org/debian bookworm/main amd64 ' + todo[0] + ' amd64 ' + PK()[todo[0]].v + '\n  ' + (ne === 'dns' ? 'Échec temporaire de résolution de « deb.debian.org »' : 'Le réseau n\'est pas accessible') + '\nE: Impossible de récupérer http://deb.debian.org/debian/pool/main/' + todo[0][0] + '/' + todo[0] + '/' + todo[0] + '_' + PK()[todo[0]].v + '_amd64.deb\nE: Impossible de récupérer certaines archives, peut-être devrez-vous lancer apt-get update ou essayer avec --fix-missing ?\n'); return 100; }
      let k = 1;
      for (const n of todo.concat(deps)) { if (!(await c.wait(200))) return 130; c.out('Réception de :' + (k++) + ' http://deb.debian.org/debian bookworm/main amd64 ' + n + ' amd64 ' + (PK()[n] ? PK()[n].v : '1.0-1') + ' [' + (PK()[n] ? PK()[n].size : '84,2 kB') + ']\n'); }
      c.out('Sélection du paquet ' + todo[0] + ' précédemment désélectionné.\n(Lecture de la base de données... 145732 fichiers et répertoires déjà installés.)\n');
      for (const n of todo) {
        c.out('Préparation du dépaquetage de .../' + n + '_' + PK()[n].v.replace(/^\d+:/, '') + '_amd64.deb ...\nDépaquetage de ' + n + ' (' + PK()[n].v + ') ...\n');
        if (!(await c.wait(250))) return 130;
        sys.installed.add(n); sys.installPkgFiles(n);
        if (n === 'ufw') { sys.ufw.installed = true; }
        c.out('Paramétrage de ' + n + ' (' + PK()[n].v + ') ...\n');
        const svc = PK()[n].service;
        if (svc) { const s = sys.services[svc]; if (s) { s.enabled = true; if (n === 'fail2ban') SIM.loadJail(sys); sys.startService(svc); c.out('Created symlink /etc/systemd/system/multi-user.target.wants/' + svc + '.service → /lib/systemd/system/' + svc + '.service.\n'); } }
        sys.emit('apt', { op: 'install', pkg: n });
      }
      c.out('Traitement des actions différées (« triggers ») pour man-db (2.11.2-2) ...\n');
      return 0;
    }
    if (verb === 'remove' || verb === 'purge' || verb === 'autoremove') {
      c.out(reading);
      const todo = pk.filter((n) => sys.installed.has(n) || (verb === 'purge' && sys.rcPkgs && sys.rcPkgs.has(n)));
      for (const n of pk) if (!PK()[n]) { c.err('E: Impossible de trouver le paquet ' + n + '\n'); return 100; }
      for (const n of pk) if (!todo.includes(n)) c.out("Le paquet « " + n + " » n'est pas installé, et ne peut donc être supprimé\n");
      if (!todo.length) { c.out('0 mis à jour, 0 nouvellement installés, 0 à enlever et ' + sys.upgradable.length + ' non mis à jour.\n'); return 0; }
      c.out('Les paquets suivants seront ENLEVÉS :\n  ' + todo.map((n) => n + (verb === 'purge' ? '*' : '')).join(' ') + '\n0 mis à jour, 0 nouvellement installés, ' + todo.length + ' à enlever et ' + sys.upgradable.length + ' non mis à jour.\nAprès cette opération, ' + PK()[todo[0]].size + ' d\'espace disque seront libérés.\n');
      if (!yes && (todo.length > 1 || ['openssh-server', 'cups', 'gcc', 'python3'].includes(todo[0]))) { if (!(await c.confirm('Souhaitez-vous continuer ? [O/n] ', true))) { c.out('Annulation.\n'); return 1; } }
      c.out('(Lecture de la base de données... 145800 fichiers et répertoires déjà installés.)\n');
      sys.rcPkgs = sys.rcPkgs || new Set();
      for (const n of todo) {
        const p = PK()[n];
        if (p.service && sys.services[p.service]) { sys.stopService(p.service); sys.services[p.service].enabled = false; }
        if (sys.installed.has(n)) {
          c.out('Suppression de ' + n + ' (' + p.v + ') ...\n');
          for (const f of p.files) if (!(p.conf || []).includes(f)) sys.removePath(f);
          for (const b of p.bins) { sys.removePath('/usr/bin/' + b); sys.removePath('/usr/sbin/' + b); }
          sys.installed.delete(n);
          if (n === 'ufw') { sys.ufw.enabled = false; sys.ufw.installed = false; }
          sys.rcPkgs.add(n);
        }
        if (verb === 'purge') { c.out('Purge des fichiers de configuration de ' + n + ' (' + p.v + ') ...\n'); for (const f of p.conf || []) sys.removePath(f); sys.rcPkgs.delete(n); if (n === 'fail2ban') sys.removePath('/etc/fail2ban'); }
        sys.emit('apt', { op: verb, pkg: n });
      }
      c.out('Traitement des actions différées (« triggers ») pour man-db (2.11.2-2) ...\n');
      return 0;
    }
    if (verb === 'upgrade' || verb === 'full-upgrade' || verb === 'dist-upgrade') {
      c.out(reading + 'Calcul de la mise à jour... Fait\n');
      if (!sys.upgradable.length) { c.out('0 mis à jour, 0 nouvellement installés, 0 à enlever et 0 non mis à jour.\n'); return 0; }
      c.out('Les paquets suivants seront mis à jour :\n  ' + sys.upgradable.join(' ') + '\n' + sys.upgradable.length + ' mis à jour, 0 nouvellement installés, 0 à enlever et 0 non mis à jour.\nIl est nécessaire de prendre 96,4 Mo dans les archives.\n');
      if (!yes && !(await c.confirm('Souhaitez-vous continuer ? [O/n] ', true))) { c.out('Annulation.\n'); return 1; }
      if (netOk(sys)) { c.err('E: Impossible de récupérer certaines archives (pas de réseau).\n'); return 100; }
      for (const p of sys.upgradable) { if (!(await c.wait(220))) return 130; c.out('Paramétrage de ' + p + ' (1.2.3-1+deb12u1) ...\n'); }
      sys.upgradable = [];
      sys.emit('apt', { op: 'upgrade' });
      return 0;
    }
    c.err('E: L\'opération ' + verb + ' n\'est pas valable\n'); return 100;
  };
  C['apt-get'] = C.apt;
  C.dpkg = async (c) => {
    const sys = c.sys;
    const a = c.args;
    if (a[0] === '-L' || a[0] === '--listfiles') {
      const n = a[1]; const p = PK()[n];
      if (!p || !sys.installed.has(n)) { c.err("dpkg-query: le paquet « " + n + " » n'est pas installé\nUtilisez dpkg --contents (= dpkg-deb --contents) pour lister les fichiers d'archive.\n"); return 1; }
      const dirs = new Set(['/.']);
      for (const f of p.files) { const parts = f.split('/').filter(Boolean); for (let i = 1; i < parts.length; i++) dirs.add('/' + parts.slice(0, i).join('/')); }
      c.out([...dirs].sort().concat(p.files).join('\n') + '\n');
      return 0;
    }
    if (a[0] === '-l' || a[0] === '--list') {
      const pat = a[1];
      c.out('Souhait=inconnU/Installé/suppRimé/Purgé/H=à garder\n| État=Non/Installé/fichier-Config/dépaqUeté/échec-conFig/H=semi-installé/W=attend-traitement-déclenchements\n|/ Err?=(aucune)/besoin Réinstallation (État,Err: majuscule=mauvais)\n||/ Nom            Version      Architecture Description\n+++-==============-============-============-=================================\n');
      for (const [n, p] of Object.entries(PK())) {
        const st = sys.installed.has(n) ? 'ii' : sys.rcPkgs && sys.rcPkgs.has(n) ? 'rc' : null;
        if (!st) continue; if (pat && !SIM.globRe(pat).test(n)) continue;
        c.out(st + '  ' + n.padEnd(14) + ' ' + p.v.padEnd(12) + ' amd64        ' + p.desc + '\n');
      }
      return 0;
    }
    if (a[0] === '-s' || a[0] === '--status') { const n = a[1]; const p = PK()[n]; if (!p || !sys.installed.has(n)) { c.err("dpkg-query: le paquet « " + n + " » n'est pas installé et aucune information n'est disponible\n"); return 1; } c.out('Package: ' + n + '\nStatus: install ok installed\nVersion: ' + p.v + '\nDescription: ' + p.desc + '\n'); return 0; }
    c.err('(simulateur) options disponibles : dpkg -L paquet · dpkg -l [motif] · dpkg -s paquet\n'); return 1;
  };

  /* ---------------- redémarrage ---------------- */
  C.reboot = async (c) => {
    if (c.cred.uid !== 0) { c.err('Call to Reboot failed: Interactive authentication required.\n'); c.hint('redémarrer nécessite sudo'); return 1; }
    c.out('\nBroadcast message from root@' + c.sys.hostname + ' on ' + c.sh.tty + ' (' + new Date().toString().slice(0, 24) + '):\n\nThe system will reboot now!\n\n');
    await SIM.sleep(800);
    SIM.world.reboot(c.sys);
    throw new SIM.Abort();
  };
  C.shutdown = async (c) => {
    if (c.cred.uid !== 0) { c.err('Call to PowerOff failed: Interactive authentication required.\n'); return 1; }
    if (c.args.includes('-r')) return C.reboot(c);
    c.out('Shutdown scheduled for ' + new Date(Date.now() + 60000).toString().slice(0, 24) + ', use \'shutdown -c\' to cancel.\n(simulateur : la machine ne s\'éteint pas vraiment — utilise « sudo reboot » pour redémarrer)\n');
    return 0;
  };
  C.poweroff = C.shutdown;

  /* ---------------- manuel ---------------- */
  C.man = async (c) => {
    const name = c.args.filter((x) => !/^\d$/.test(x) && x[0] !== '-')[0];
    if (!name) { c.err('Quelle page de manuel voulez-vous ?\nPar exemple, essayez « man man ».\n'); return 1; }
    const info = APP.CMD[name] || (name === 'man' ? ['interface vers les manuels de référence du système', 'man [section] page', {}] : null) || (name === 'sshd_config' ? ['fichier de configuration du démon OpenSSH', '/etc/ssh/sshd_config', {}] : null) || (name === 'interfaces' ? ['configuration réseau pour ifup et ifdown', '/etc/network/interfaces', {}] : null);
    if (!info) { c.err('Aucune entrée de manuel pour ' + name + '\n'); return 16; }
    const opts = Object.entries(info[2] || {}).filter(([k]) => !k.startsWith('B_') && k !== 'sig');
    let t = name.toUpperCase() + '(1)                     Manuel de l\'utilisateur Linux                     ' + name.toUpperCase() + '(1)\n\n';
    t += 'NOM\n       ' + name + ' - ' + info[0] + '\n\nSYNOPSIS\n       ' + info[1] + '\n\nDESCRIPTION\n       ' + info[0].charAt(0).toUpperCase() + info[0].slice(1) + '.\n\n';
    if (name === 'kill') t += 'SIGNAUX\n' + Object.entries(APP.SIGDESC).map(([n, d]) => '       ' + n.padStart(2) + '  ' + d).join('\n') + '\n\n       kill -l affiche la liste complète des signaux.\n\n';
    if (opts.length) t += 'OPTIONS\n' + opts.map(([k, d]) => '       ' + (k.length > 1 && k[0] !== '+' && k !== '!' ? '--' + k : (k[0] === '+' || k === '!' ? '' : '-') + k) + '\n              ' + d + '\n').join('\n') + '\n';
    if (name === 'ls') t += 'EXEMPLES\n       ls -la      liste longue, fichiers cachés compris\n       ls -ld rep  droits du répertoire lui-même\n\n';
    if (name === 'chmod') t += 'MODES\n       Symbolique : [ugoa][+-=][rwxXst]  ex. u+x, g-w, o=, u=rw,go=r\n       Octal : r=4, w=2, x=1  ex. 640 = rw-r-----\n       Spéciaux : 4000 SUID, 2000 SGID, 1000 sticky bit\n\n';
    if (name === 'tar') t += 'EXEMPLES\n       tar -cvf archive.tar f1 f2     crée l\'archive\n       tar -tf archive.tar            liste le contenu sans extraire\n       tar -xvf archive.tar           extrait\n       tar -czf a.tar.gz rep          crée une archive compressée (gzip)\n       tar -xzf a.tar.gz -C dest      extrait dans dest\n\n';
    t += 'VOIR AUSSI\n       Le cours d\'Administration Linux (ESEO E4a) et la fiche « Commandes » de cette application.\n\n(page de manuel simplifiée du simulateur)\n';
    if (!c.tty) { c.out(t); return 0; }
    await c.sh.term.pager('man ' + name, t);
    c.sys.emit('man', { name });
    return 0;
  };
  C.help = async (c) => SIM.builtins.help(c.sh, c.ctx, c.args);

  /* ---------------- éditeurs ---------------- */
  const editor = (mode) => async (c) => {
    const file = c.args.filter((x) => x[0] !== '-' && x[0] !== '+')[0];
    let node = null, parent = null, name = null, abs = null, content = '';
    if (file) {
      try {
        const r = c.lookup(file, { parent: true });
        node = r.node; parent = r.parent; name = r.name; abs = r.abs;
        if (node && node.t === 'd') { c.err(mode + ': ' + file + ' est un répertoire\n'); return 1; }
        if (node && !c.sys.can(node, c.cred, 4)) { c.err('[ Erreur de lecture de ' + file + ' : Permission non accordée ]\n'); c.hint('le fichier n\'est pas lisible par ' + c.sys.uname(c.cred.uid) + (c.cred.uid ? ' (faut-il sudo ?)' : '')); return 1; }
        if (node) content = node.c;
      } catch (e) { c.err(mode + ': ' + file + ': ' + e.message + '\n'); return 1; }
    }
    const readonly = node ? !c.sys.can(node, c.cred, 2) : (parent ? !c.sys.can(parent, c.cred, 2) : false);
    const res = await c.sh.term.editor({ title: file || 'Nouveau tampon', path: abs, content, readonly, mode, user: c.sys.uname(c.cred.uid) });
    if (res == null || !file) return 0;
    if (res === content && node) return 0;
    if (readonly) { c.err('[ Erreur d\'écriture de ' + file + ' : Permission non accordée ]\n'); return 1; }
    if (node) { node.c = res; node.mtime = Date.now(); }
    else c.sys.newFile(parent, name, res, c.cred, c.f.umask);
    c.sys.emit('write', { path: abs });
    c.sys.emit('edit', { path: abs });
    return 0;
  };
  C.nano = editor('nano');
  C.vi = editor('vi');
  C.vim = editor('vi');
  C['vim.tiny'] = editor('vi');
  C.edit = editor('nano');
})();
