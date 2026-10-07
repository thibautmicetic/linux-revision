/* Le « monde » simulé : VM-A (ta machine), VM-B (le binôme / serveur distant), redémarrages. */
(function () {
  'use strict';
  const APP = window.APP;
  const SIM = APP.SIM;

  SIM.createWorld = function (opts) {
    opts = opts || {};
    const vmA = new SIM.System(Object.assign({ hostname: 'debian', name: 'VM-A', ip: '192.168.1.10' }, opts.a || {}));
    const vmB = new SIM.System(Object.assign({ hostname: 'vm-b', name: 'VM-B', ip: '192.168.1.20', mac: '08:00:27:5e:9a:41', pidStart: 3100, server: true, password: 'etudiant' }, opts.b || {}));
    // journaux de démarrage : quelques robots qui tentent de se connecter en SSH
    for (const sys of [vmA, vmB]) {
      const t0 = Date.now() - 3 * 3600 * 1000;
      sys.log('systemd', 'systemd[1]: Started ssh.service - OpenBSD Secure Shell server.', t0);
      const bots = [['root', '203.0.113.7'], ['admin', '203.0.113.7'], ['root', '198.51.100.66'], ['ubuntu', '203.0.113.7'], ['root', '192.0.2.41']];
      bots.forEach(([u, ip], i) => sys.log('ssh', 'sshd[' + (2400 + i * 7) + ']: Failed password for ' + (u === 'root' ? '' : 'invalid user ') + u + ' from ' + ip + ' port ' + (51422 + i * 13) + ' ssh2', t0 + (i + 1) * 600000));
      sys.log('ssh', 'sshd[2511]: Accepted password for etudiant from 192.168.1.10 port 50122 ssh2', t0 + 4000000);
      sys.failedLogins.push(...bots.map(([u, ip], i) => ({ user: u, from: ip, t: t0 + (i + 1) * 600000 })));
      sys.log('cron', 'CRON[2602]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)', t0 + 5000000);
      sys.log('user', 'gnome-shell[1100]: Session démarrée pour etudiant', t0 + 100);
    }
    const world = {
      vmA, vmB, machines: { a: vmA, b: vmB }, shells: [],
      reboot(sys) {
        sys.emit('reboot', {});
        // déconnexion des sessions SSH vers cette machine
        for (const sh of world.shells) {
          if (sh.stack[0].sys === sys) continue;
          const i = sh.stack.findIndex((f) => f.sys === sys);
          if (i > 0) { while (sh.stack.length > i) sh.stack.pop(); sh.termOut('Connection to ' + (sys.hostname) + ' closed by remote host.\nConnection to ' + sys.hostname + ' closed.\n', 'dim'); }
        }
        // remise à zéro de l'état volatile
        sys.procs.clear();
        sys.booted = Date.now();
        sys.httpServers = []; sys.tunnels = [];
        sys.hostname = (sys.readFile('/etc/hostname') || sys.hostname).trim() || sys.hostname;
        sys.buildProcs({ server: sys === vmB });
        for (const s of Object.values(sys.services)) { s.active = false; s.pid = null; }
        sys.applyNetworkConfig(true);
        for (const s of Object.values(sys.services)) { if (s.static) { s.active = true; s.pid = s.fixedPid; continue; } if (s.pkg && !sys.installed.has(s.pkg)) continue; if (s.enabled) sys.startService(s.name, true); }
        sys.f2b.banned = []; sys.f2b.failures = {};
        sys.sudoOk = null;
        sys.log('systemd', 'systemd[1]: Startup finished in 2.871s (kernel) + 6.212s (userspace) = 9.083s.');
        for (const sh of world.shells) if (sh.stack[0].sys === sys) sh.term.rebooted && sh.term.rebooted();
        sys.emit('booted', {});
      }
    };
    SIM.world = world;
    return world;
  };
})();
