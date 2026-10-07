/* Réseau et sécurité : ip, ping, dig, ss, curl, ssh, scp, ssh-keygen, ufw, fail2ban, tcpdump… */
(function () {
  'use strict';
  const APP = window.APP;
  const SIM = APP.SIM;
  const C = SIM.cmds;
  const IP = SIM.ip;

  // Internet simulé (adresses fictives)
  const WORLD = {
    'eseo.fr': '198.51.100.24', 'www.eseo.fr': '198.51.100.24', 'google.com': '142.250.201.14', 'www.google.com': '142.250.201.14',
    'yahoo.com': '74.6.143.25', 'debian.org': '151.101.2.132', 'www.debian.org': '151.101.2.132', 'deb.debian.org': '151.101.130.132',
    'security.debian.org': '151.101.194.132', 'github.com': '140.82.121.4', 'wikipedia.org': '185.15.58.224', 'fr.wikipedia.org': '185.15.58.224',
    'one.one.one.one': '1.1.1.1', 'dns.google': '8.8.8.8', 'azure.microsoft.com': '13.107.246.40', 'example.com': '93.184.215.14'
  };
  const INTERNET_IPS = new Set(Object.values(WORLD).concat(['1.1.1.1', '8.8.8.8', '9.9.9.9', '8.8.4.4', '1.0.0.1']));
  const DNS_SERVERS = new Set(['192.168.1.1', '1.1.1.1', '8.8.8.8', '9.9.9.9', '8.8.4.4', '1.0.0.1']);
  SIM.WORLD = WORLD;

  const isIp = (s) => /^\d{1,3}(\.\d{1,3}){3}$/.test(s) && s.split('.').every((x) => +x < 256);
  // machine (System) qui possède l'IP
  function hostOf(sys, ip) {
    if (/^127\./.test(ip) || sys.myIps().includes(ip)) return sys;
    for (const p of Object.values(SIM.world ? SIM.world.machines : {})) {
      if (p === sys) continue;
      if (p.net.ifaces.some((i) => i.up && !i.loopback && i.addrs.some((a) => a.split('/')[0] === ip))) return p;
    }
    return null;
  }
  // joignabilité d'une IP (couche 3) : {ok, kind: 'local'|'lan'|'gw'|'internet', host, err}
  function reach(sys, ip) {
    if (/^127\./.test(ip) || sys.myIps().includes(ip)) return { ok: true, kind: 'local', host: sys, ttl: 64, ms: 0.04 };
    const r = sys.route(ip);
    if (!r.ok) return { ok: false, err: 'unreachable' };
    if (r.lan) {
      if (ip === '192.168.1.1' && inNetOfIface(sys, ip)) return { ok: true, kind: 'gw', ttl: 64, ms: 0.9 };
      const h = hostOf(sys, ip);
      if (h && h !== sys && sameSegment(sys, h, ip)) return { ok: true, kind: 'lan', host: h, ttl: 64, ms: 0.45 };
      return { ok: false, err: 'hostdown' };
    }
    // via la passerelle
    if (!sys.route(r.via).lan || r.via !== '192.168.1.1') return { ok: false, err: 'hostdown-gw' };
    if (INTERNET_IPS.has(ip)) return { ok: true, kind: 'internet', ttl: 54 + (ip.charCodeAt(0) % 60), ms: 9 + (ip.length * 1.7) % 15 };
    return { ok: false, err: 'timeout' };
  }
  function inNetOfIface(sys, ip) { return sys.net.ifaces.some((i) => i.up && !i.loopback && i.addrs.some((a) => IP.inNet(ip, a))); }
  function sameSegment(a, b, ip) { return b.net.ifaces.some((i) => i.up && !i.loopback && i.addrs.some((x) => x.split('/')[0] === ip)) && a.net.ifaces.some((i) => i.up && !i.loopback && i.addrs.some((x) => IP.inNet(ip, x))); }
  // résolution de nom : /etc/hosts puis DNS
  function resolveName(sys, name, opts) {
    opts = opts || {};
    if (isIp(name)) return { ip: name };
    if (name === 'localhost') return { ip: '127.0.0.1', via: 'hosts' };
    if (!opts.dnsOnly) { const h = sys.hostsLookup(name); if (h) return { ip: h, via: 'hosts' }; if (name === sys.hostname) return { ip: '127.0.1.1', via: 'hosts' }; }
    const servers = opts.server ? [opts.server] : sys.dnsServers();
    if (!servers.length) return { err: 'noserver' };
    let reachable = null;
    for (const s of servers) { const r = reach(sys, s); if (r.ok && (DNS_SERVERS.has(s) || r.kind === 'local')) { reachable = s; break; } }
    if (!reachable) return { err: 'temp', servers };
    // le serveur 192.168.1.1 (box) a besoin d'Internet pour résoudre
    const n = name.replace(/\.$/, '').toLowerCase();
    if (WORLD[n]) return { ip: WORLD[n], via: 'dns', server: reachable };
    return { err: 'nx', server: reachable };
  }
  SIM.resolveName = resolveName; SIM.reach = reach; SIM.hostOf = hostOf;
  // pare-feu de la machine destination : la connexion entrante est-elle acceptée ?
  function fwAllows(dst, port, proto, srcIp) {
    const u = dst.ufw;
    if (!u.enabled) return true;
    if (srcIp && dst.f2b && dst.f2b.banned.includes(srcIp) && port === 22) return false;
    for (const r of u.rules) {
      if (r.dir && r.dir !== 'in') continue;
      if (!ruleMatches(r, port, proto, srcIp)) continue;
      return r.action === 'allow' || r.action === 'limit';
    }
    return u.inDefault === 'allow';
  }
  function ruleMatches(r, port, proto, src) {
    if (r.port != null && !String(r.port).split(',').some((p) => { const m = /^(\d+):(\d+)$/.exec(p); return m ? port >= +m[1] && port <= +m[2] : +p === port; })) return false;
    if (r.proto && r.proto !== proto) return false;
    if (r.from && r.from !== 'any') { if (!src) return false; if (r.from.includes('/') ? !IP.inNet(src, r.from) : r.from !== src) return false; }
    return true;
  }
  SIM.fwAllows = fwAllows;
  function srcIpFor(sys, dstIp) { if (/^127\./.test(dstIp)) return '127.0.0.1'; const i = sys.net.ifaces.find((x) => x.up && !x.loopback && x.addrs.some((a) => IP.inNet(dstIp, a))) || sys.iface('enp0s3'); return i && i.addrs[0] ? i.addrs[0].split('/')[0] : '0.0.0.0'; }
  SIM.srcIpFor = srcIpFor;

  /* ---------------- ip ---------------- */
  function maskBrd(a) { return IP.netOf(a).bc; }
  function eui(mac) { const b = mac.split(':').map((x) => parseInt(x, 16)); b[0] ^= 2; const h = (a, c) => ((a << 8) | c).toString(16); return 'fe80::' + h(b[0], b[1]) + ':' + h(b[2], 0xff) + ':' + h(0xfe, b[3]) + ':' + h(b[4], b[5]); }
  function ifaceIdx(sys, i) { return sys.net.ifaces.indexOf(i) + 1; }
  function fmtLink(sys, i) {
    const flags = i.loopback ? (i.up ? '<LOOPBACK,UP,LOWER_UP>' : '<LOOPBACK>') : (i.up ? '<BROADCAST,MULTICAST,UP,LOWER_UP>' : '<BROADCAST,MULTICAST>');
    return ifaceIdx(sys, i) + ': ' + i.name + ': ' + flags + ' mtu ' + i.mtu + ' qdisc ' + (i.loopback ? 'noqueue state UNKNOWN' : 'fq_codel state ' + (i.up ? 'UP' : 'DOWN')) + ' mode DEFAULT group default qlen 1000\n    link/' + (i.loopback ? 'loopback' : 'ether') + ' ' + i.mac + ' brd ' + (i.loopback ? '00:00:00:00:00:00' : 'ff:ff:ff:ff:ff:ff') + '\n';
  }
  function fmtAddr(sys, i) {
    let s = fmtLink(sys, i).replace(' mode DEFAULT', '');
    for (const a of i.addrs) {
      if (i.loopback) s += '    inet ' + a + ' scope host lo\n       valid_lft forever preferred_lft forever\n';
      else s += '    inet ' + a + ' brd ' + maskBrd(a) + ' scope global ' + (i.dhcp && a === i.addrs[0] ? 'dynamic ' : '') + i.name + '\n       valid_lft ' + (i.dhcp && a === i.addrs[0] ? '86234sec preferred_lft 86234sec' : 'forever preferred_lft forever') + '\n';
    }
    if (i.loopback) s += '    inet6 ::1/128 scope host noprefixroute \n       valid_lft forever preferred_lft forever\n';
    else if (i.up) s += '    inet6 ' + eui(i.mac) + '/64 scope link \n       valid_lft forever preferred_lft forever\n';
    return s;
  }
  C.ip = async (c) => {
    const sys = c.sys;
    let a = c.args.slice(); const fl = {};
    while (a[0] && a[0][0] === '-') { const o = a.shift().replace(/^-+/, ''); fl[o] = true; if (o === 'c' || o === 'color') { /* couleur ignorée */ } }
    const OBJ = { a: 'addr', ad: 'addr', addr: 'addr', address: 'addr', r: 'route', ro: 'route', route: 'route', l: 'link', li: 'link', link: 'link', n: 'neigh', neigh: 'neigh', neighbor: 'neigh', neighbour: 'neigh' };
    const obj = OBJ[a[0] || 'help'];
    if (!a.length || a[0] === 'help') { c.err('Usage: ip [ OPTIONS ] OBJECT { COMMAND | help }\nwhere  OBJECT := { address | link | route | neigh | ... }\n'); return a.length ? 0 : 255; }
    if (!obj) { c.err('Object "' + a[0] + '" is unknown, try "ip help".\n'); return 255; }
    a = a.slice(1);
    let verb = a[0] || 'show';
    if (['show', 'list', 'ls', 'sh', 'lst'].includes(verb)) { verb = 'show'; a = a.slice(1); }
    else if (['add', 'a'].includes(verb)) { verb = 'add'; a = a.slice(1); }
    else if (['del', 'delete', 'd'].includes(verb)) { verb = 'del'; a = a.slice(1); }
    else if (verb === 'set' || verb === 'flush' || verb === 'replace' || verb === 'change') a = a.slice(1);
    else verb = 'show';
    const needRoot = () => { if (c.cred.uid !== 0) { c.err('RTNETLINK answers: Operation not permitted\n'); return false; } return true; };
    const devArg = () => { const k = a.indexOf('dev'); return k >= 0 ? a[k + 1] : null; };
    if (obj === 'addr' || obj === 'link') {
      if (verb === 'show') {
        let dev = devArg() || (a[0] && a[0] !== 'dev' && a[0] !== 'up' ? a[0] : null);
        let list = sys.net.ifaces;
        if (dev) { list = list.filter((i) => i.name === dev); if (!list.length) { c.err('Device "' + dev + '" does not exist.\n'); return 1; } }
        if (a.includes('up')) list = list.filter((i) => i.up);
        if (fl.br || fl.brief) { for (const i of list) c.out(i.name.padEnd(16) + (i.loopback ? 'UNKNOWN' : i.up ? 'UP' : 'DOWN').padEnd(14) + (obj === 'addr' ? i.addrs.join(' ') + (i.up && !i.loopback ? ' ' + eui(i.mac) + '/64' : i.loopback ? ' ::1/128' : '') : i.mac + ' <' + (i.up ? 'BROADCAST,MULTICAST,UP,LOWER_UP' : 'BROADCAST,MULTICAST') + '>') + '\n'); return 0; }
        for (const i of list) c.out(obj === 'addr' ? fmtAddr(sys, i) : fmtLink(sys, i));
        return 0;
      }
      if (obj === 'link' && verb === 'set') {
        const dev = a[0] === 'dev' ? a[1] : a[0];
        const i = sys.iface(dev);
        if (!i) { c.err('Cannot find device "' + dev + '"\n'); return 1; }
        if (!needRoot()) return 2;
        if (a.includes('up')) i.up = true; else if (a.includes('down')) i.up = false;
        else { c.err('Error: either "dev" is duplicate, or "' + (a[1] || '') + '" is a garbage.\n'); return 255; }
        sys.emit('net', { op: 'link', dev, up: i.up });
        return 0;
      }
      if (obj === 'addr' && (verb === 'add' || verb === 'del')) {
        const cidr = a[0];
        const dev = devArg();
        if (!cidr || !/^\d+\.\d+\.\d+\.\d+(\/\d+)?$/.test(cidr) || !isIp(cidr.split('/')[0])) { c.err('Error: any valid prefix is expected rather than "' + (cidr || '') + '".\n'); return 1; }
        if (!dev) { c.err('Not enough information: "dev" argument is required.\n'); return 1; }
        const i = sys.iface(dev);
        if (!i) { c.err('Cannot find device "' + dev + '"\n'); return 1; }
        if (!needRoot()) return 2;
        const full = cidr.includes('/') ? cidr : cidr + '/32';
        if (verb === 'add') {
          if (i.addrs.some((x) => x.split('/')[0] === full.split('/')[0])) { c.err('RTNETLINK answers: File exists\n'); return 2; }
          i.addrs.push(full);
          if (!cidr.includes('/')) c.err('Warning: Executing wildcard deletion to stay compatible with old scripts.\n'.replace(/.*/, '')) ;
        } else {
          const k = i.addrs.findIndex((x) => x === full || (!cidr.includes('/') && x.split('/')[0] === cidr));
          if (k < 0) { c.err('RTNETLINK answers: Cannot assign requested address\n'); return 2; }
          i.addrs.splice(k, 1);
          if (i === sys.iface('enp0s3') && i.addrs.length === 0) { /* plus d'adresse : plus de route */ }
        }
        sys.emit('net', { op: 'addr-' + verb, dev, cidr: full });
        return 0;
      }
      if (verb === 'flush') { if (!needRoot()) return 2; const i = sys.iface(devArg() || a[0]); if (i) i.addrs = []; return 0; }
    }
    if (obj === 'route') {
      if (verb === 'show') {
        for (const r of sys.routes()) {
          if (r.dst === 'default') c.out('default via ' + r.via + ' dev ' + r.dev + ' proto ' + (r.proto || 'static') + ' ' + (r.proto === 'dhcp' ? 'src ' + srcIpFor(sys, r.via) + ' metric 100 ' : 'onlink ') + '\n');
          else c.out(r.dst + ' dev ' + r.dev + ' proto ' + (r.proto || 'kernel') + ' scope link src ' + r.src + (r.proto === 'kernel' ? ' ' : '') + '\n');
        }
        return 0;
      }
      if (verb === 'add' || verb === 'replace') {
        if (!needRoot()) return 2;
        const k = a.indexOf('via');
        if (a[0] === 'default' && k > 0) {
          const via = a[k + 1];
          if (!isIp(via || '')) { c.err('Error: inet address is expected rather than "' + via + '".\n'); return 1; }
          if (sys.net.gateway && verb === 'add') { c.err('RTNETLINK answers: File exists\n'); return 2; }
          if (!sys.net.ifaces.some((i) => i.up && !i.loopback && i.addrs.some((x) => IP.inNet(via, x)))) { c.err('Error: Nexthop has invalid gateway.\n'); return 2; }
          sys.net.gateway = via; sys.emit('net', { op: 'route-add', via });
          return 0;
        }
        c.err('(simulateur) seule « ip route add default via IP » est prise en charge\n'); return 1;
      }
      if (verb === 'del') {
        if (!needRoot()) return 2;
        if (a[0] === 'default') { if (!sys.net.gateway) { c.err('RTNETLINK answers: No such process\n'); return 2; } sys.net.gateway = null; sys.emit('net', { op: 'route-del' }); return 0; }
        c.err('RTNETLINK answers: No such process\n'); return 2;
      }
    }
    if (obj === 'neigh') {
      if (sys.iface('enp0s3').up && sys.net.gateway) c.out('192.168.1.1 dev enp0s3 lladdr 52:54:00:12:35:02 REACHABLE\n');
      if (SIM.world && SIM.world.vmB && sys !== SIM.world.vmB) c.out('192.168.1.20 dev enp0s3 lladdr 08:00:27:5e:9a:41 STALE\n');
      return 0;
    }
    c.err('Command "' + verb + '" is unknown, try "ip ' + obj + ' help".\n');
    return 255;
  };

  /* ---------------- ping ---------------- */
  C.ping = async (c) => {
    const { f, pos } = c.opts('c:i:W:w:s:I:qn4', {});
    const target = pos[0];
    if (!target) { c.err('ping: usage error: Destination address required\n'); return 1; }
    const sys = c.sys;
    const count = f.c != null ? parseInt(f.c, 10) : Infinity;
    const interval = f.i ? Math.max(200, parseFloat(f.i) * 1000) : 1000;
    if (!sys.net.ifaces.some((i) => i.up && !i.loopback && i.addrs.length) && !/^127\.|^localhost$/.test(target)) {
      if (!isIp(target)) { const r0 = resolveName(sys, target); if (!r0.ip) { c.err('ping: ' + target + ': Temporary failure in name resolution\n'); return 2; } }
      c.err('ping: connect: Network is unreachable\n'); return 2;
    }
    const res = resolveName(sys, target);
    if (!res.ip) {
      if (res.err === 'nx') c.err('ping: ' + target + ': Name or service not known\n');
      else c.err('ping: ' + target + ': Temporary failure in name resolution\n');
      sys.emit('ping', { target, ok: false, err: 'dns' });
      return 2;
    }
    const ip = res.ip;
    const r = reach(sys, ip);
    if (!r.ok && r.err === 'unreachable') { c.err('ping: connect: Network is unreachable\n'); sys.emit('ping', { target, ip, ok: false, err: 'net' }); return 2; }
    c.out('PING ' + target + ' (' + ip + ') 56(84) bytes of data.\n');
    let sent = 0, recv = 0; const times = [];
    const start = Date.now();
    const stats = () => {
      const loss = sent ? Math.round(((sent - recv) / sent) * 100) : 0;
      let s = '\n--- ' + target + ' ping statistics ---\n' + sent + ' packets transmitted, ' + recv + ' received, ' + (sent - recv ? '+' + (sent - recv) + ' errors, ' : '') + loss + '% packet loss, time ' + Math.max(0, Date.now() - start) + 'ms\n';
      if (times.length) { const mn = Math.min(...times), mx = Math.max(...times), avg = times.reduce((a, b) => a + b, 0) / times.length; const md = Math.sqrt(times.reduce((a, b) => a + (b - avg) * (b - avg), 0) / times.length); s += 'rtt min/avg/max/mdev = ' + [mn, avg, mx, md].map((x) => x.toFixed(3)).join('/') + ' ms\n'; }
      c.out(s.replace(/, \+\d+ errors/, ''));
    };
    let stopped = false;
    c.proc.onKill = (sig) => { if (sig === 2 || sig === 15 || sig === 1) { stopped = true; if (sig === 2) stats(); c.proc.onKill = null; sys.exitProc(c.proc.pid, sig === 2 ? (recv ? 0 : 1) : 128 + sig); } else { c.proc.onKill = null; sys.exitProc(c.proc.pid, 128 + sig); } };
    c.proc.state = 'S';
    sys.emit('ping', { target, ip, ok: r.ok });
    while (sent < count && !stopped) {
      sent++;
      const rr = reach(sys, ip);
      if (rr.ok) {
        const t = rr.ms * (0.85 + Math.random() * 0.3) + (rr.kind === 'lan' ? 0.1 : 0);
        times.push(t); recv++;
        c.out('64 bytes from ' + (target !== ip ? (res.via === 'hosts' ? target + ' (' + ip + ')' : ip.replace(/^/, '') + ' (' + ip + ')') : ip) + ': icmp_seq=' + sent + ' ttl=' + rr.ttl + ' time=' + (t < 1 ? t.toFixed(3) : t.toFixed(1)) + ' ms\n');
      } else if (rr.err === 'hostdown' && sent % 3 === 0) {
        for (let k = 2; k >= 0; k--) c.out('From ' + srcIpFor(sys, ip) + ' icmp_seq=' + (sent - k) + ' Destination Host Unreachable\n');
      }
      if (sent >= count) break;
      const ok = await c.wait(interval);
      if (!ok) return c.proc.exitStatus != null ? c.proc.exitStatus : 130;
    }
    if (!stopped) stats();
    return recv ? 0 : 1;
  };
  C.traceroute = async (c) => {
    const target = c.args.filter((x) => x[0] !== '-')[0];
    if (!target) { c.err('Usage: traceroute [ -46dFITnreAUDV ] host\n'); return 2; }
    const res = resolveName(c.sys, target);
    if (!res.ip) { c.err(target + ': Temporary failure in name resolution\nCannot handle "host" cmdline arg `' + target + "' on position 1 (argc 1)\n"); return 2; }
    const r = reach(c.sys, res.ip);
    if (!r.ok && r.err === 'unreachable') { c.err('connect: Network is unreachable\n'); return 1; }
    c.out('traceroute to ' + target + ' (' + res.ip + '), 30 hops max, 60 byte packets\n');
    const t = (b) => (b * (0.9 + Math.random() * 0.25)).toFixed(3) + ' ms';
    const hops = r.kind === 'lan' || r.kind === 'gw' || r.kind === 'local' ? [] : [['_gateway', '192.168.1.1', 0.6], ['10.31.0.1', '10.31.0.1', 4.2], ['lns-bzn-26-82-64-1-1.adsl.example.net', '82.64.1.1', 6.1], ['be2.par-th2-cbr1.isp.example.net', '194.149.166.54', 7.9], ['* * *', null, 0], ['ae-12.r21.parsfr04.fr.bb.example.net', '129.250.66.141', 9.8]];
    let k = 1;
    for (const h of hops) {
      if (!(await c.wait(250))) return 130;
      c.out(String(k++).padStart(2) + '  ' + (h[1] ? h[0] + ' (' + h[1] + ')  ' + t(h[2]) + '  ' + t(h[2]) + '  ' + t(h[2]) : '* * *') + '\n');
    }
    if (r.ok) c.out(String(k).padStart(2) + '  ' + (res.via === 'dns' ? target : res.ip) + ' (' + res.ip + ')  ' + t(r.ms) + '  ' + t(r.ms) + '  ' + t(r.ms) + '\n');
    else for (let j = 0; j < 3; j++) { if (!(await c.wait(400))) return 130; c.out(String(k++).padStart(2) + '  * * *\n'); }
    return 0;
  };

  /* ---------------- DNS ---------------- */
  C.dig = async (c) => {
    const args = c.args;
    const short = args.includes('+short');
    const srv = (args.find((x) => x[0] === '@') || '').slice(1) || null;
    const name = args.find((x) => x[0] !== '+' && x[0] !== '@' && x[0] !== '-') || '.';
    const sys = c.sys;
    const res = resolveName(sys, name, { dnsOnly: true, server: srv });
    const servers = srv ? [srv] : sys.dnsServers();
    if (res.err === 'temp' || res.err === 'noserver') {
      if (!servers.length) { c.err(';; no servers could be reached\n'); return 9; }
      c.out(';; communications error to ' + servers[0] + '#53: timed out\n;; communications error to ' + servers[0] + '#53: timed out\n;; communications error to ' + servers[0] + '#53: timed out\n\n; <<>> DiG 9.18.19-1~deb12u1-Debian <<>> ' + args.join(' ') + '\n;; global options: +cmd\n;; no servers could be reached\n');
      return 9;
    }
    if (short) { if (res.ip) c.out(res.ip + '\n'); return 0; }
    const id = 10000 + Math.floor(Math.random() * 50000);
    let s = '\n; <<>> DiG 9.18.19-1~deb12u1-Debian <<>> ' + args.join(' ') + '\n;; global options: +cmd\n;; Got answer:\n;; ->>HEADER<<- opcode: QUERY, status: ' + (res.ip ? 'NOERROR' : 'NXDOMAIN') + ', id: ' + id + '\n;; flags: qr rd ra; QUERY: 1, ANSWER: ' + (res.ip ? 1 : 0) + ', AUTHORITY: ' + (res.ip ? 0 : 1) + ', ADDITIONAL: 1\n\n;; OPT PSEUDOSECTION:\n; EDNS: version: 0, flags:; udp: 1232\n;; QUESTION SECTION:\n;' + name + '.\t\t\tIN\tA\n\n';
    if (res.ip) s += ';; ANSWER SECTION:\n' + name + '.\t\t300\tIN\tA\t' + res.ip + '\n\n';
    else s += ';; AUTHORITY SECTION:\n.\t\t\t86400\tIN\tSOA\ta.root-servers.net. nstld.verisign-grs.com. 2026100700 1800 900 604800 86400\n\n';
    s += ';; Query time: ' + (8 + Math.floor(Math.random() * 20)) + ' msec\n;; SERVER: ' + res.server + '#53(' + res.server + ') (UDP)\n;; WHEN: ' + new Date().toString().slice(0, 24) + ' CEST\n;; MSG SIZE  rcvd: ' + (res.ip ? 55 : 104) + '\n\n';
    c.out(s);
    c.sys.emit('dig', { name, ok: !!res.ip });
    return 0;
  };
  C.nslookup = async (c) => {
    const name = c.args.find((x) => x[0] !== '-');
    if (!name) { c.err('(simulateur) usage : nslookup nom\n'); return 1; }
    const res = resolveName(c.sys, name, { dnsOnly: true });
    if (!res.ip && res.err !== 'nx') { c.out(';; communications error to ' + (c.sys.dnsServers()[0] || '127.0.0.1') + '#53: timed out\n;; no servers could be reached\n\n'); return 1; }
    c.out('Server:\t\t' + res.server + '\nAddress:\t' + res.server + '#53\n\n');
    if (res.ip) c.out('Non-authoritative answer:\nName:\t' + name + '\nAddress: ' + res.ip + '\n\n');
    else c.out("** server can't find " + name + ': NXDOMAIN\n\n');
    return res.ip ? 0 : 1;
  };
  C.host = async (c) => {
    const name = c.args.find((x) => x[0] !== '-');
    const res = resolveName(c.sys, name || '', { dnsOnly: true });
    if (res.ip) { c.out(name + ' has address ' + res.ip + '\n'); return 0; }
    if (res.err === 'nx') { c.out('Host ' + name + ' not found: 3(NXDOMAIN)\n'); return 1; }
    c.out(';; communications error to ' + (c.sys.dnsServers()[0] || '127.0.0.1') + '#53: timed out\n;; no servers could be reached\n'); return 1;
  };
  C.hostname = async (c) => {
    if (c.args.includes('-I')) { c.out(c.sys.myIps().filter((x) => !/^127\./.test(x)).join(' ') + ' \n'); return 0; }
    if (c.args.includes('-i')) { c.out('127.0.1.1\n'); return 0; }
    const n = c.args.find((x) => x[0] !== '-');
    if (n) { if (c.cred.uid !== 0) { c.err('hostname: you must be root to change the host name\n'); return 1; } c.sys.hostname = n; return 0; }
    c.out(c.sys.hostname + '\n'); return 0;
  };
  C.hostnamectl = async (c) => {
    const a = c.args.filter((x) => x[0] !== '-');
    if (a[0] === 'set-hostname' || a[0] === 'hostname' && a[1]) {
      const n = a[1];
      if (!n) { c.err('Too few arguments.\n'); return 1; }
      if (c.cred.uid !== 0) { c.err('Could not set static hostname: Access denied\n'); return 1; }
      if (!/^[a-zA-Z0-9][a-zA-Z0-9-]{0,62}$/.test(n)) { c.err('Could not set static hostname: Invalid static hostname \'' + n + '\'\n'); return 1; }
      c.sys.hostname = n; c.sys.writeFile('/etc/hostname', n + '\n');
      c.sys.emit('hostname', { name: n });
      return 0;
    }
    c.out(' Static hostname: ' + c.sys.hostname + '\n       Icon name: computer-vm\n         Chassis: vm 🖴\n      Machine ID: 3f7c1a9e2b5d4e6f8a0b1c2d3e4f5a6b\n         Boot ID: 9a8b7c6d5e4f3a2b1c0d9e8f7a6b5c4d\n  Virtualization: oracle\nOperating System: Debian GNU/Linux 12 (bookworm)\n          Kernel: Linux 6.1.0-13-amd64\n    Architecture: x86-64\n Hardware Vendor: innotek GmbH\n  Hardware Model: VirtualBox\nFirmware Version: VirtualBox\n'.replace(' 🖴', ''));
    return 0;
  };

  /* ---------------- ss / netstat ---------------- */
  function sockets(sys) {
    const out = [];
    for (const s of Object.values(sys.services)) {
      if (!s.active || !s.ports || !s.pid) continue;
      for (const [proto, addr, port] of s.ports) {
        let p = port;
        if (s.name === 'ssh') p = parseInt(sys.sshdOpt('port', '22'), 10) || 22;
        out.push({ proto, addr, port: p, pid: s.pid, comm: s.comm, uid: s.user ? (sys.user(s.user) || { uid: 0 }).uid : 0 });
      }
    }
    for (const h of sys.httpServers) out.push({ proto: 'tcp', addr: h.bind || '0.0.0.0', port: h.port, pid: h.pid, comm: 'python3', uid: h.uid });
    out.push({ proto: 'udp', addr: '0.0.0.0', port: 68, pid: null, comm: 'dhclient', uid: 0, hide: !sys.iface('enp0s3').dhcp });
    return out.filter((x) => !x.hide).sort((a, b) => (a.proto === b.proto ? a.port - b.port : a.proto < b.proto ? 1 : -1));
  }
  SIM.sockets = sockets;
  const PORTNAME = { 22: 'ssh', 80: 'http', 443: 'https', 631: 'ipp', 3306: 'mysql', 5353: 'mdns', 68: 'bootpc', 53: 'domain', 8080: 'http-alt', 25: 'smtp' };
  C.ss = async (c) => {
    const { f, pos } = c.opts('tulpnaxs4H', { tcp: 't', udp: 'u', listening: 'l', processes: 'p', numeric: 'n', all: 'a' });
    if (f.s) { c.out('Total: 182\nTCP:   4 (estab 1, closed 0, orphaned 0, timewait 0)\n'); return 0; }
    let list = sockets(c.sys);
    if (f.t && !f.u) list = list.filter((s) => s.proto === 'tcp'); else if (f.u && !f.t) list = list.filter((s) => s.proto === 'udp');
    const port = (p) => (f.n ? String(p) : PORTNAME[p] || String(p));
    if (!f.H) c.out('Netid State  Recv-Q Send-Q  Local Address:Port   Peer Address:Port Process' + '\n');
    for (const s of list) {
      const proc = f.p && s.pid && (c.cred.uid === 0 || s.uid === c.cred.uid) ? 'users:(("' + s.comm + '",pid=' + s.pid + ',fd=' + (3 + (s.port % 5)) + '))' : '';
      const local = (s.addr === '[::]' || s.addr === '[::1]' ? s.addr : s.addr === '*' ? '*' : s.addr) + ':' + port(s.port);
      c.out((s.proto + '   ').slice(0, 5) + ' ' + (s.proto === 'tcp' ? 'LISTEN' : 'UNCONN') + ' 0      ' + (s.proto === 'tcp' ? '128   ' : '0     ') + ' ' + local.padStart(18) + ' ' + ((s.addr.startsWith('[') ? '[::]' : '0.0.0.0') + ':*').padStart(18) + ' ' + proc + '\n');
    }
    if (f.a) c.out('tcp   ESTAB  0      0         192.168.1.10:ssh       192.168.1.20:51334 \n'.replace(':ssh', ':' + port(22)));
    return 0;
  };
  C.netstat = async (c) => {
    const list = sockets(c.sys);
    c.out('Connexions Internet actives (seulement serveurs)\nProto Recv-Q Send-Q Adresse locale          Adresse distante        Etat        PID/Program name\n');
    for (const s of list) c.out((s.proto + '   ').slice(0, 5) + '      0      0 ' + (s.addr.replace(/^\*$/, '0.0.0.0') + ':' + s.port).padEnd(23) + ' ' + '0.0.0.0:*'.padEnd(23) + ' ' + (s.proto === 'tcp' ? 'LISTEN' : '      ') + '      ' + (s.pid && c.cred.uid === 0 ? s.pid + '/' + s.comm : '-') + '\n');
    return 0;
  };
  C.ifconfig = async (c) => {
    for (const i of c.sys.net.ifaces) {
      const a = i.addrs[0];
      c.out(i.name + ': flags=' + (i.up ? (i.loopback ? '73<UP,LOOPBACK,RUNNING>' : '4163<UP,BROADCAST,RUNNING,MULTICAST>') : '4098<BROADCAST,MULTICAST>') + '  mtu ' + i.mtu + '\n' + (a ? '        inet ' + a.split('/')[0] + '  netmask ' + IP.netOf(a).mask + (i.loopback ? '' : '  broadcast ' + IP.netOf(a).bc) + '\n' : '') + (i.loopback ? '        loop  txqueuelen 1000  (Boucle locale)\n' : '        ether ' + i.mac + '  txqueuelen 1000  (Ethernet)\n') + '\n');
    }
    return 0;
  };
  C.route = async (c) => { c.out('Table de routage IP du noyau\nDestination     Passerelle      Genmask         Indic Metric Ref    Use Iface\n'); for (const r of c.sys.routes()) c.out((r.dst === 'default' ? '0.0.0.0' : r.dst.split('/')[0]).padEnd(16) + (r.via || '0.0.0.0').padEnd(16) + (r.dst === 'default' ? '0.0.0.0' : IP.netOf(r.dst).mask).padEnd(16) + (r.via ? 'UG' : 'U').padEnd(6) + '100    0        0 ' + r.dev + '\n'); return 0; };

  /* ---------------- DHCP / NetworkManager ---------------- */
  C.dhclient = async (c) => {
    if (c.cred.uid !== 0) { c.err("Can't create /var/run/dhclient.pid: Permission denied\n"); return 1; }
    const dev = c.args.filter((x) => x[0] !== '-')[0] || 'enp0s3';
    const i = c.sys.iface(dev);
    if (!i) { c.err('Cannot find device "' + dev + '"\n'); return 1; }
    if (c.args.includes('-r')) { i.addrs = i.addrs.filter((a) => a !== c.sys.net.lanIp + '/24'); i.dhcp = false; c.sys.net.gateway = null; return 0; }
    i.up = true; i.dhcp = true;
    if (!i.addrs.includes(c.sys.net.lanIp + '/24')) i.addrs.unshift(c.sys.net.lanIp + '/24');
    c.sys.net.gateway = '192.168.1.1';
    const rc = c.sys.resolveRaw('/etc/resolv.conf'); if (rc) rc.c = 'nameserver 192.168.1.1\n';
    c.sys.emit('net', { op: 'dhcp', dev });
    return 0;
  };
  C.nmcli = async (c) => {
    const a = c.args.join(' ');
    if (/^(d|dev|device)( status)?$/.test(a) || a === '') {
      c.out('DEVICE  TYPE      STATE       CONNECTION \nenp0s3  ethernet  non-géré    --         \nlo      loopback  non-géré    --         \n');
      c.hint('NetworkManager ne gère pas les interfaces : sur ce serveur Debian, la configuration passe par /etc/network/interfaces (ifupdown).');
      return 0;
    }
    if (/^g(eneral)?/.test(a)) { c.out('STATE        CONNECTIVITY  WIFI-HW  WIFI     WWAN-HW  WWAN    \nnon connecté  inconnue      activé   activé   activé   activé  \n'); return 0; }
    c.err('Erreur : (simulateur) seules « nmcli device status » et « nmcli general » sont disponibles.\n'); return 1;
  };

  /* ---------------- HTTP : python3 -m http.server, curl ---------------- */
  C.python3 = async (c) => {
    const a = c.args;
    if (a[0] === '--version' || a[0] === '-V') { c.out('Python 3.11.2\n'); return 0; }
    if (a[0] === '-c') { const m = /print\((["'])(.*)\1\)/.exec(a[1] || ''); if (m) c.out(m[2] + '\n'); return 0; }
    if (a[0] === '-m' && a[1] === 'http.server') {
      let port = 8000, bind = null, dir = c.f.cwd;
      for (let i = 2; i < a.length; i++) { if (a[i] === '--bind' || a[i] === '-b') bind = a[++i]; else if (a[i] === '--directory' || a[i] === '-d') dir = c.abs(a[++i]); else if (/^\d+$/.test(a[i])) port = +a[i]; }
      const sys = c.sys;
      if (port < 1024 && c.cred.uid !== 0) { c.err('Traceback (most recent call last):\n  ...\nPermissionError: [Errno 13] Permission denied\n'); c.hint('les ports < 1024 sont réservés à root'); return 1; }
      if (sys.httpServers.some((h) => h.port === port) || sockets(sys).some((s) => s.port === port && s.proto === 'tcp')) { c.err('Traceback (most recent call last):\n  ...\nOSError: [Errno 98] Address already in use\n'); return 1; }
      const srv = { port, bind: bind || '0.0.0.0', pid: c.proc.pid, uid: c.cred.uid, dir, out: c.ctx.err };
      sys.httpServers.push(srv);
      c.proc.cmd = 'python3 -m http.server ' + a.slice(2).join(' ');
      c.err('Serving HTTP on ' + (bind || '0.0.0.0') + ' port ' + port + ' (http://' + (bind || '0.0.0.0') + ':' + port + '/) ...\n');
      sys.emit('http', { op: 'start', port, bind });
      c.proc.onKill = (sig) => { c.proc.onKill = null; if (sig === 2) c.err('\nKeyboard interrupt received, exiting.\n'); sys.exitProc(c.proc.pid, sig === 2 ? 0 : 128 + sig); };
      const prev = c.proc.impl;
      const st = await c.forever('S');
      void prev;
      sys.httpServers = sys.httpServers.filter((h) => h !== srv);
      return st;
    }
    if (!a.length) { c.out('Python 3.11.2 (main, Mar 13 2023, 12:18:29) [GCC 12.2.0] on linux\n(simulateur : l\'interpréteur interactif n\'est pas disponible)\n'); return 0; }
    c.err("python3: can't open file '" + c.abs(a[0]) + "': [Errno 2] No such file or directory\n"); return 2;
  };
  C.python = async (c) => { c.err('bash: python : commande introuvable\n'); c.hint('sous Debian 12, utilise python3'); return 127; };
  async function httpRequest(c, url, method) {
    const m = /^(?:(https?):\/\/)?([^/:?]+)(?::(\d+))?(\/[^?]*)?(\?.*)?$/.exec(url);
    if (!m) return { err: 'curl: (3) URL using bad/illegal format or missing URL', code: 3 };
    const scheme = m[1] || 'http', host = m[2], port = m[3] ? +m[3] : scheme === 'https' ? 443 : 80, path = (m[4] || '/') + (m[5] || '');
    const sys = c.sys;
    const res = resolveName(sys, host);
    if (!res.ip) return { err: 'curl: (6) Could not resolve host: ' + host, code: 6 };
    const r = reach(sys, res.ip);
    if (!r.ok) {
      if (r.err === 'unreachable') return { err: 'curl: (7) Failed to connect to ' + host + ' port ' + port + ' after 0 ms: Couldn\'t connect to server', code: 7 };
      await c.wait(2500);
      return { err: 'curl: (28) Failed to connect to ' + host + ' port ' + port + ' after 130 s: Connection timed out (délai raccourci par le simulateur)', code: 28 };
    }
    if (r.kind === 'internet' || r.kind === 'gw') {
      if (r.kind === 'gw' && port !== 80) return { err: 'curl: (7) Failed to connect to ' + host + ' port ' + port + ' after 2 ms: Couldn\'t connect to server', code: 7 };
      return { status: 200, headers: 'HTTP/' + (scheme === 'https' ? '2' : '1.1') + ' 200' + (scheme === 'https' ? '' : ' OK') + '\nserver: nginx\ndate: ' + new Date().toUTCString() + '\ncontent-type: text/html; charset=UTF-8\n', body: '<!DOCTYPE html>\n<html lang="fr"><head><title>' + host + '</title></head><body><h1>' + host + '</h1><p>Page simulée.</p></body></html>\n' };
    }
    const dst = r.host;
    const src = srcIpFor(sys, res.ip);
    // serveur à l'écoute ?
    const srv = dst.httpServers.find((h) => h.port === port && (h.bind === '0.0.0.0' || h.bind === res.ip || (/^127\./.test(res.ip) && /^127\./.test(h.bind)) || (dst === sys && h.bind === '127.0.0.1' && /^127\./.test(res.ip))));
    const apache = port === 80 && dst.services.apache2 && dst.services.apache2.active;
    if (dst !== sys && !fwAllows(dst, port, 'tcp', src)) { dst.emit('packet', { port, src, dropped: true }); await c.wait(2500); return { err: 'curl: (28) Failed to connect to ' + host + ' port ' + port + ' after 130 s: Connection timed out (délai raccourci : le pare-feu de la machine ignore la connexion)', code: 28 }; }
    if (!srv && !apache) return { err: 'curl: (7) Failed to connect to ' + host + ' port ' + port + ' after 0 ms: Couldn\'t connect to server', code: 7 };
    if (srv && srv.bind === '127.0.0.1' && dst !== sys) return { err: 'curl: (7) Failed to connect to ' + host + ' port ' + port + ' after 0 ms: Couldn\'t connect to server', code: 7 };
    const reqLine = method + ' ' + path + ' HTTP/1.1';
    dst.emit('packet', { port, src, dst: res.ip, data: reqLine + '\r\nHost: ' + host + (m[3] ? ':' + port : '') + '\r\nUser-Agent: curl/7.88.1\r\nAccept: */*\r\n' });
    if (srv) {
      const d = new Date();
      srv.out.write(src + ' - - [' + String(d.getDate()).padStart(2, '0') + '/' + d.toLocaleString('en', { month: 'short' }) + '/' + d.getFullYear() + ' ' + d.toTimeString().slice(0, 8) + '] "' + reqLine + '" 200 -\n');
      let node = null; try { node = dst.resolveRaw(srv.dir); } catch (e) { node = null; }
      const files = node && node.t === 'd' ? Object.keys(node.ch).sort(SIM.cmpName) : [];
      const body = '<!DOCTYPE HTML>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<title>Directory listing for ' + path.split('?')[0] + '</title>\n</head>\n<body>\n<h1>Directory listing for ' + path.split('?')[0] + '</h1>\n<hr>\n<ul>\n' + files.map((f) => '<li><a href="' + f + '">' + f + '</a></li>\n').join('') + '</ul>\n<hr>\n</body>\n</html>\n';
      return { status: 200, headers: 'HTTP/1.0 200 OK\nServer: SimpleHTTP/0.6 Python/3.11.2\nDate: ' + d.toUTCString() + '\nContent-type: text/html; charset=utf-8\nContent-Length: ' + body.length + '\n', body };
    }
    const body = dst.readFile('/var/www/html/index.html') || 'It works!\n';
    return { status: 200, headers: 'HTTP/1.1 200 OK\nDate: ' + new Date().toUTCString() + '\nServer: Apache/2.4.57 (Debian)\nContent-Type: text/html\n', body };
  }
  C.curl = async (c) => {
    const { f, pos } = c.opts('IsSLkvio:X:H:d:A:u:w:m:', { head: 'I', silent: 's', location: 'L', insecure: 'k', include: 'i', output: 'o:', request: 'X:' });
    if (!pos.length) { c.err("curl: try 'curl --help' or 'curl --manual' for more information\n"); return 2; }
    const r = await httpRequest(c, pos[0], f.I ? 'HEAD' : f.X || 'GET');
    if (r.err) { if (!f.s || f.S) c.err(r.err + '\n'); return r.code; }
    if (f.I) { c.out(r.headers.replace(/\n/g, '\r\n').replace(/\r\n/g, '\n') + '\n'); return 0; }
    if (f.o) { try { const t = c.lookup(f.o, { parent: true }); (t.node || c.sys.newFile(t.parent, t.name, '', c.cred, c.f.umask)).c = r.body; } catch (e) { return c.fsErr(e, f.o); } return 0; }
    c.out((f.i ? r.headers + '\n' : '') + r.body);
    return 0;
  };
  C.wget = async (c) => { c.err('bash: wget : commande introuvable\n'); c.hint('utilise curl dans ce simulateur'); return 127; };

  /* ---------------- tcpdump ---------------- */
  C.tcpdump = async (c) => {
    if (c.cred.uid !== 0) { c.err('tcpdump: any: You don\'t have permission to perform this capture on that device\n(socket: Operation not permitted)\n'); return 1; }
    const { f, pos } = c.opts('i:Anvc:s:wX', {});
    let port = null; const k = pos.indexOf('port'); if (k >= 0) port = +pos[k + 1];
    c.err('tcpdump: data link type LINUX_SLL2\ntcpdump: verbose output suppressed, use -v[v]... for full protocol decode\nlistening on ' + (f.i || 'enp0s3') + ', link-type LINUX_SLL2 (Linux cooked v2), snapshot length 262144 bytes\n');
    let n = 0; const sys = c.sys;
    const t = () => new Date().toTimeString().slice(0, 8) + '.' + String(Math.floor(Math.random() * 999999)).padStart(6, '0');
    const off = sys.on((type, d) => {
      if (type !== 'packet' || (port && d.port !== port)) return;
      const srcp = 40000 + Math.floor(Math.random() * 20000);
      const lines = [];
      lines.push(t() + ' ' + (f.i || 'enp0s3') + ' In  IP ' + d.src + '.' + srcp + ' > ' + (d.dst || sys.myIps()[1] || '192.168.1.10') + '.' + (PORTNAME[d.port] && !f.n ? PORTNAME[d.port] : d.port) + ': Flags [S], seq 1785390031, win 64240, length 0');
      if (!d.dropped) {
        lines.push(t() + ' ' + (f.i || 'enp0s3') + ' Out IP ' + (d.dst || '192.168.1.10') + '.' + d.port + ' > ' + d.src + '.' + srcp + ': Flags [S.], seq 2211934512, ack 1785390032, win 65160, length 0');
        if (d.data) lines.push(t() + ' ' + (f.i || 'enp0s3') + ' In  IP ' + d.src + '.' + srcp + ' > ' + (d.dst || '192.168.1.10') + '.' + d.port + ': Flags [P.], seq 1:' + (d.data.length + 1) + ', ack 1, win 502, length ' + d.data.length + (f.A ? '\nE..' + String.fromCharCode(64 + (d.data.length % 26)) + '..@.@.....' + '\n' + d.data.replace(/\r/g, '') : ''));
        if (d.ssh) lines.push(t() + ' ' + (f.i || 'enp0s3') + ' In  IP ' + d.src + '.' + srcp + ' > ' + (d.dst || '192.168.1.10') + '.ssh: Flags [P.], seq 1:53, ack 1, win 502, length 52' + (f.A ? '\nE..h..@.@.......ï¿½.ï¿½2Èkñ§Ó\u0093«9ç\u0010¸;õ¬\u0091MÒá\u0002x¿¢\u0094QùÞ' : ''));
      }
      n += lines.length;
      c.out(lines.join('\n') + '\n');
    });
    c.proc.onKill = (sig) => { off(); c.proc.onKill = null; c.err('\n' + n + ' packets captured\n' + (n + 2) + ' packets received by filter\n0 packets dropped by kernel\n'); sys.exitProc(c.proc.pid, 0); };
    return c.forever('S');
  };

  /* ---------------- ipcalc ---------------- */
  C.ipcalc = async (c) => {
    let a = c.args.find((x) => x[0] !== '-');
    if (!a) { c.err('Usage: ipcalc [options] <ADDRESS>[[/]<NETMASK>] [NETMASK]\n'); return 1; }
    const extra = c.args.filter((x) => x[0] !== '-')[1];
    if (!a.includes('/')) a += '/' + (extra ? (extra.includes('.') ? IP.maskToCidr(extra) : extra) : '24');
    const [ip, cidr] = a.split('/');
    if (!isIp(ip)) { c.err('INVALID ADDRESS: ' + ip + '\n'); return 1; }
    const n = IP.netOf(a);
    const bin = (s) => s.split('.').map((x) => (+x).toString(2).padStart(8, '0')).join('.');
    const wild = n.mask.split('.').map((x) => 255 - +x).join('.');
    const cls = +ip.split('.')[0] < 128 ? 'Class A' : +ip.split('.')[0] < 192 ? 'Class B' : 'Class C';
    const priv = /^(10\.|192\.168\.|172\.(1[6-9]|2\d|3[01])\.)/.test(ip) ? ', Private Internet' : '';
    const L = (k, v, b) => (k + ':').padEnd(11) + v.padEnd(21) + b + '\n';
    c.out(L('Address', ip, bin(ip)) + L('Netmask', n.mask + ' = ' + cidr, bin(n.mask)) + L('Wildcard', wild, bin(wild)) + '=>\n' + L('Network', n.net + '/' + cidr, bin(n.net)) + L('HostMin', n.first, bin(n.first)) + L('HostMax', n.last, bin(n.last)) + L('Broadcast', n.bc, bin(n.bc)) + 'Hosts/Net: ' + String(n.hosts).padEnd(21) + cls + priv + '\n\n');
    return 0;
  };

  /* ================= SSH ================= */
  function sshConfig(c, alias) {
    const t = (() => { try { const n = c.sys.lookup(c.env.HOME + '/.ssh/config', c.cred, '/').node; return c.sys.can(n, c.cred, 4) ? n.c : ''; } catch (e) { return ''; } })();
    const out = {}; let cur = null;
    for (const raw of t.split('\n')) {
      const l = raw.replace(/#.*/, '').trim(); if (!l) continue;
      const m = /^(\S+)\s+(.*)$/.exec(l); if (!m) continue;
      const k = m[1].toLowerCase();
      if (k === 'host') { cur = m[2].split(/\s+/).some((h) => SIM.globRe(h).test(alias)); continue; }
      if (cur) out[k] = out[k] || m[2];
    }
    return out;
  }
  function parseDest(c, dest, port, user) {
    let u = user, h = dest;
    if (dest.includes('@')) { u = dest.slice(0, dest.indexOf('@')); h = dest.slice(dest.indexOf('@') + 1); }
    const conf = sshConfig(c, h);
    const host = conf.hostname || h;
    return { user: u || conf.user || c.sys.uname(c.cred.uid), host, alias: h, port: port || (conf.port ? +conf.port : 22), identity: conf.identityfile ? conf.identityfile.replace(/^~/, c.env.HOME) : null };
  }
  function readNode(sys, path) { const n = sys.resolveRaw(path); return n && n.t === 'f' ? n : null; }
  function hostKey(sys) { return (sys.readFile('/etc/ssh/ssh_host_ed25519_key.pub') || '').split(' ').slice(0, 2).join(' '); }
  function fingerprint(sys) { return 'SHA256:' + SIM.hash(hostKey(sys)).replace(/[^a-zA-Z0-9]/g, '').slice(0, 43); }
  // Connexion SSH complète (TCP + hôte + authentification). Retourne {ok, dst, user} ou {ok:false}
  async function sshConnect(c, d, o) {
    o = o || {};
    const sys = c.sys;
    const res = resolveName(sys, d.host);
    if (!res.ip) { c.err('ssh: Could not resolve hostname ' + d.host + ': ' + (res.err === 'nx' ? 'Name or service not known' : 'Temporary failure in name resolution') + '\n'); return { ok: false, code: 255 }; }
    const r = reach(sys, res.ip);
    if (!r.ok) {
      if (r.err === 'unreachable') { c.err('ssh: connect to host ' + d.host + ' port ' + d.port + ': Network is unreachable\n'); return { ok: false, code: 255 }; }
      c.out('(connexion en cours…)\n'); await c.wait(3000);
      c.err('ssh: connect to host ' + d.host + ' port ' + d.port + ': ' + (r.err === 'hostdown' ? 'No route to host' : 'Connection timed out') + '\n'); return { ok: false, code: 255 };
    }
    if (r.kind === 'internet' || r.kind === 'gw') { await c.wait(2000); c.err('ssh: connect to host ' + d.host + ' port ' + d.port + ': Connection refused\n'); return { ok: false, code: 255 }; }
    const dst = r.host;
    const src = srcIpFor(sys, res.ip);
    const sshd = dst.services.ssh;
    const listenPort = parseInt(dst.sshdOpt('port', '22'), 10) || 22;
    if (dst !== sys && dst.f2b && dst.f2b.banned.includes(src) && dst.services.fail2ban && dst.services.fail2ban.active) { c.err('ssh: connect to host ' + d.host + ' port ' + d.port + ': Connection refused\n'); c.hint('ton adresse ' + src + ' est bannie par fail2ban sur ' + dst.hostname); return { ok: false, code: 255 }; }
    if (dst !== sys && !fwAllows(dst, d.port, 'tcp', src)) { c.out('(connexion en cours…)\n'); await c.wait(3000); c.err('ssh: connect to host ' + d.host + ' port ' + d.port + ': Connection timed out\n'); c.hint('le pare-feu de ' + dst.hostname + ' bloque le port ' + d.port); return { ok: false, code: 255 }; }
    if (!sshd || !sshd.active || listenPort !== d.port || !dst.installed.has('openssh-server')) { c.err('ssh: connect to host ' + d.host + ' port ' + d.port + ': Connection refused\n'); return { ok: false, code: 255 }; }
    dst.emit('packet', { port: d.port, src, dst: res.ip, ssh: true });
    // vérification de l'hôte
    const home = c.env.HOME;
    const khPath = home + '/.ssh/known_hosts';
    const kh = readNode(sys, khPath);
    const key = hostKey(dst);
    const label = d.port === 22 ? d.host : '[' + d.host + ']:' + d.port;
    const known = kh && kh.c.split('\n').find((l) => l.split(' ')[0].split(',').includes(label));
    if (known && known.split(' ').slice(1, 3).join(' ') !== key) {
      c.err('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\nIT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!\nHost key verification failed.\n');
      return { ok: false, code: 255 };
    }
    if (!known) {
      c.out("The authenticity of host '" + label + ' (' + res.ip + ")' can't be established.\nED25519 key fingerprint is " + fingerprint(dst) + '.\nThis key is not known by any other names.\n');
      let ans;
      for (;;) {
        ans = await c.readLine('Are you sure you want to continue connecting (yes/no/[fingerprint])? ');
        if (ans == null) return { ok: false, code: 255 };
        ans = ans.trim();
        if (ans === 'yes' || ans === 'no' || ans === fingerprint(dst)) break;
        c.out('Please type \'yes\', \'no\' or the fingerprint: ');
      }
      if (ans === 'no') { c.err('Host key verification failed.\n'); return { ok: false, code: 255 }; }
      let sshDir = sys.resolveRaw(home + '/.ssh');
      if (!sshDir) { const hn = sys.resolveRaw(home); sshDir = hn.ch['.ssh'] = { t: 'd', mode: 0o700, uid: c.cred.uid, gid: c.cred.gid, mtime: Date.now(), ch: Object.create(null) }; }
      if (!sshDir.ch.known_hosts) sshDir.ch.known_hosts = { t: 'f', mode: 0o644, uid: c.cred.uid, gid: c.cred.gid, mtime: Date.now(), c: '' };
      sshDir.ch.known_hosts.c += label + ' ' + key + '\n';
      c.err("Warning: Permanently added '" + label + "' (ED25519) to the list of known hosts.\n");
      sys.emit('known_hosts', { host: d.host });
    }
    // authentification
    const tu = dst.user(d.user);
    const permitRoot = dst.sshdOpt('PermitRootLogin', 'prohibit-password').toLowerCase();
    const passAuth = dst.sshdOpt('PasswordAuthentication', 'yes').toLowerCase() !== 'no' && !(o.opts && o.opts.passwordauthentication === 'no');
    const pubAuth = dst.sshdOpt('PubkeyAuthentication', 'yes').toLowerCase() !== 'no' && !(o.opts && o.opts.pubkeyauthentication === 'no');
    const allow = dst.sshdOpt('AllowUsers', null);
    const userOk = tu && !tu.shell.endsWith('nologin') && (!allow || allow.split(/\s+/).includes(d.user)) && !(d.user === 'root' && permitRoot === 'no');
    const logFail = (how) => {
      const port = 40000 + Math.floor(Math.random() * 20000);
      dst.log('ssh', 'sshd[' + (5000 + Math.floor(Math.random() * 999)) + ']: Failed ' + how + ' for ' + (tu ? '' : 'invalid user ') + d.user + ' from ' + src + ' port ' + port + ' ssh2');
      dst.failedLogins.push({ user: d.user, from: src, t: Date.now() });
      if (dst.services.fail2ban && dst.services.fail2ban.active) {
        const f = dst.f2b; f.failures[src] = (f.failures[src] || 0) + 1; f.total = (f.total || 0) + 1;
        if (f.failures[src] >= f.maxretry && !f.banned.includes(src)) { f.banned.push(src); f.totalBanned = (f.totalBanned || 0) + 1; dst.log('fail2ban', 'fail2ban.actions: NOTICE  [sshd] Ban ' + src); dst.emit('ban', { ip: src }); }
      }
      dst.emit('sshfail', { user: d.user, from: src });
    };
    // clé publique
    const methods = [];
    if (pubAuth) methods.push('publickey');
    if (passAuth) methods.push('password');
    if (pubAuth && userOk && !(d.user === 'root' && permitRoot === 'no')) {
      const ids = (d.identity ? [d.identity] : [home + '/.ssh/id_ed25519', home + '/.ssh/id_rsa', home + '/.ssh/id_ecdsa']);
      for (const idp of ids) {
        const priv = readNode(sys, idp), pub = readNode(sys, idp + '.pub');
        if (!priv || !pub) continue;
        if (!sys.can(priv, c.cred, 4)) { c.err("Load key \"" + idp + "\": Permission denied\n"); continue; }
        if ((priv.mode & 0o077) !== 0) { c.err('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@         WARNING: UNPROTECTED PRIVATE KEY FILE!          @\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\nPermissions 0' + (priv.mode & 0o777).toString(8) + " for '" + idp + "' are too open.\nIt is required that your private key files are NOT accessible by others.\nThis private key will be ignored.\nLoad key \"" + idp + '": bad permissions\n'); continue; }
        const ak = readNode(dst, tu.home + '/.ssh/authorized_keys');
        const akDir = dst.resolveRaw(tu.home + '/.ssh');
        const strict = !ak || !akDir || (ak.mode & 0o022) || (akDir.mode & 0o022) || ak.uid !== tu.uid;
        if (!ak || !ak.c.split('\n').some((l) => l.trim() && l.trim().split(' ').slice(0, 2).join(' ') === pub.c.trim().split(' ').slice(0, 2).join(' '))) continue;
        if (strict) { dst.log('ssh', 'sshd[' + dst.allocPid() + ']: Authentication refused: bad ownership or modes for file ' + tu.home + '/.ssh/authorized_keys'); continue; }
        if (priv.passphrase) {
          let okp = false;
          for (let k = 0; k < 3; k++) {
            const p = await c.readLine("Enter passphrase for key '" + idp + "': ", { password: true });
            if (p == null) return { ok: false, code: 255 };
            if (p === priv.passphrase) { okp = true; break; }
          }
          if (!okp) break;
        }
        dst.log('ssh', 'sshd[' + dst.allocPid() + ']: Accepted publickey for ' + d.user + ' from ' + src + ' port 51334 ssh2: ED25519 ' + fingerprint(sys).slice(0, 20));
        dst.logins.push({ user: d.user, tty: 'pts/1', from: src, t: Date.now() });
        return { ok: true, dst, user: d.user, method: 'publickey', src, ip: res.ip };
      }
    }
    if (passAuth) {
      for (let k = 0; k < 3; k++) {
        const p = await c.readLine(d.user + '@' + d.host + "'s password: ", { password: true });
        if (p == null) return { ok: false, code: 255 };
        await SIM.sleep(400);
        if (userOk && tu.pw && !tu.locked && p === tu.pw) {
          dst.log('ssh', 'sshd[' + dst.allocPid() + ']: Accepted password for ' + d.user + ' from ' + src + ' port 51334 ssh2');
          dst.logins.push({ user: d.user, tty: 'pts/1', from: src, t: Date.now() });
          return { ok: true, dst, user: d.user, method: 'password', src, ip: res.ip };
        }
        logFail('password');
        if (dst.f2b.banned.includes(src) && dst.services.fail2ban && dst.services.fail2ban.active) { c.err('Connection closed by ' + res.ip + ' port ' + d.port + '\n'); return { ok: false, code: 255 }; }
        if (k < 2) c.err('Permission denied, please try again.\n');
      }
    } else if (!pubAuth) { /* aucune méthode */ }
    else logFail('publickey');
    c.err(d.user + '@' + d.host + ': Permission denied (' + (methods.join(',') || 'none') + ').\n');
    return { ok: false, code: 255 };
  }
  SIM.sshConnect = sshConnect;
  C.ssh = async (c) => {
    const a = c.args.slice();
    let port = null, user = null, ident = null, tunnel = null; const opts = {}; const pos = [];
    for (let i = 0; i < a.length; i++) {
      const x = a[i];
      if (x === '-p') port = +a[++i]; else if (x === '-l') user = a[++i]; else if (x === '-i') ident = a[++i]; else if (x === '-L') tunnel = a[++i];
      else if (x === '-o') { const kv = (a[++i] || '').split('='); opts[kv[0].toLowerCase()] = (kv[1] || '').toLowerCase(); }
      else if (/^-[vNfTt46AXqC]+$/.test(x)) continue;
      else if (x[0] === '-' && !pos.length) { c.err('unknown option -- ' + x.slice(1) + '\nusage: ssh [-46AaCfGgKkMNnqsTtVvXxYy] [-B bind_interface] [-b bind_address]\n           [-c cipher_spec] [-D [bind_address:]port] [-E log_file] [-e escape_char]\n           [-F configfile] [-I pkcs11] [-i identity_file] [-J destination] [-L address]\n           [-l login_name] [-m mac_spec] [-O ctl_cmd] [-o option] [-P tag] [-p port]\n           [-R address] [-S ctl_path] [-W host:port] [-w local_tun[:remote_tun]]\n           destination [command [argument ...]]\n'); return 255; }
      else pos.push(...a.slice(i)) && (i = a.length);
    }
    if (!pos.length) { c.err('usage: ssh [-46AaCfGgKkMNnqsTtVvXxYy] [-p port] [-i identity_file] [-L address] destination [command [argument ...]]\n'); return 255; }
    const d = parseDest(c, pos[0], port, user);
    if (ident) d.identity = c.abs(ident.replace(/^~/, c.env.HOME));
    const r = await sshConnect(c, d, { opts });
    if (!r.ok) return r.code;
    const dst = r.dst;
    c.sys.emit('ssh', { host: d.host, user: d.user, method: r.method, dst });
    dst.emit('ssh-in', { user: d.user, from: r.src });
    if (pos.length > 1) {
      // commande distante
      const fr = { sys: dst, user: d.user, cred: dst.credFor(d.user), cwd: dst.user(d.user).home, env: { HOME: dst.user(d.user).home, USER: d.user, PATH: '/usr/local/bin:/usr/bin:/bin', SHELL: '/bin/bash', HOSTNAME: dst.hostname }, umask: 0o022, aliases: {}, history: [], jobs: [], jobOrder: [], lastStatus: 0, lastBg: '', vars: {}, proc: { pid: dst.allocPid() } };
      const text = pos.slice(1).join(' ');
      const ast = APP.sh.parse(text);
      const ctx = c.sh.newCtx(fr, { out: c.ctx.out, err: c.ctx.err, selfPid: fr.proc.pid, line: text });
      try { await c.sh.execList(ast, ctx); } catch (e) { if (!(e instanceof SIM.ExitSig) && !e.abort) throw e; }
      return fr.lastStatus;
    }
    // session interactive
    const u = dst.user(d.user);
    c.out('Linux ' + dst.hostname + ' 6.1.0-13-amd64 #1 SMP PREEMPT_DYNAMIC Debian 6.1.55-1 (2023-09-29) x86_64\n\nThe programs included with the Debian GNU/Linux system are free software;\nthe exact distribution terms for each program are described in the\nindividual files in /usr/share/doc/*/copyright.\n\nDebian GNU/Linux comes with ABSOLUTELY NO WARRANTY, to the extent\npermitted by applicable law.\nLast login: ' + new Date(Date.now() - 3600000 * 20).toString().slice(0, 24) + ' from 192.168.1.10\n');
    const priv = dst.addProc({ pid: dst.allocPid(), ppid: dst.services.ssh.pid || 1, uid: 0, cmd: 'sshd: ' + d.user + ' [priv]', comm: 'sshd', state: 'S', tty: '?', leader: true });
    const usr = dst.addProc({ pid: dst.allocPid(), ppid: priv.pid, uid: u.uid, cmd: 'sshd: ' + d.user + '@pts/1', comm: 'sshd', state: 'S', tty: '?' });
    const cli = c.sys.addProc({ pid: c.sys.allocPid(), ppid: c.ctx.selfPid, uid: c.cred.uid, cmd: 'ssh ' + c.args.join(' '), comm: 'ssh', state: 'S', tty: c.sh.tty });
    const fr = c.sh.pushFrame(dst, d.user, { kind: 'ssh', ppid: usr.pid, tty: 'pts/1', remoteLabel: d.host, onExit: () => { dst.procs.delete(priv.pid); dst.procs.delete(usr.pid); c.sys.procs.delete(cli.pid); if (tunnel) c.sys.tunnels = (c.sys.tunnels || []).filter((t) => t.fr !== fr); } });
    fr.proc.from = r.src; fr.proc.login = true;
    if (tunnel) {
      const m = /^(\d+):([^:]+):(\d+)$/.exec(tunnel);
      if (m) { const t = { lport: +m[1], host: m[2], rport: +m[3], dst, fr }; (c.sys.tunnels = c.sys.tunnels || []).push(t); c.sys.httpServers.push({ port: +m[1], bind: '127.0.0.1', pid: cli.pid, uid: c.cred.uid, tunnel: t, dir: '/', out: { write() {} } }); fr.onExit = ((old) => (x) => { old(x); c.sys.httpServers = c.sys.httpServers.filter((h) => !h.tunnel || h.tunnel !== t); })(fr.onExit); }
    }
    c.sys.emit('frame', { shell: c.sh });
    return 0;
  };
  // copie de fichier via scp
  C.scp = async (c) => {
    const a = c.args.slice();
    let port = null, rec = false; const pos = [];
    for (let i = 0; i < a.length; i++) { if (a[i] === '-P') port = +a[++i]; else if (a[i] === '-p' && /^\d+$/.test(a[i + 1] || '')) { c.err('scp: (attention) -p conserve les dates ; le port se donne avec -P (majuscule)\n'); i++; } else if (/^-[rqvCp34]+$/.test(a[i])) { if (a[i].includes('r')) rec = true; } else pos.push(a[i]); }
    if (pos.length < 2) { c.err('usage: scp [-346ABCOpqRrsTv] [-c cipher] [-D sftp_server_path] [-F ssh_config]\n           [-i identity_file] [-J destination] [-l limit] [-o ssh_option]\n           [-P port] [-S program] [-X sftp_option] source ... target\n'); return 1; }
    const dest = pos.pop();
    const isRemote = (s) => /^[^/]*:/.test(s) && !/^\.\.?\//.test(s);
    const sp = (s) => { const i = s.indexOf(':'); return { host: s.slice(0, i), path: s.slice(i + 1) }; };
    if (!pos.some(isRemote) && !isRemote(dest)) { c.hint('aucune machine distante : il manque « machine: » (ex. etudiant@192.168.1.20:~/)'); return C.cp(Object.assign(c, { args: (rec ? ['-r'] : []).concat(pos, [dest]) })); }
    const remoteSpec = isRemote(dest) ? sp(dest) : sp(pos.find(isRemote));
    const d = parseDest(c, remoteSpec.host, port, null);
    const r = await sshConnect(c, d, {});
    if (!r.ok) return r.code === 255 ? 1 : r.code;
    const rsys = r.dst, rcred = rsys.credFor(r.user), rhome = rsys.user(r.user).home;
    const rpath = (p) => (p === '' || p === '~' ? rhome : p.replace(/^~(?=\/)/, rhome).replace(/^(?!\/)/, rhome + '/'));
    const copyNode = (node, dsys, dcred, dpath, name) => {
      let target;
      try {
        const t = dsys.lookup(dpath, dcred, '/', { parent: true });
        if (t.node && t.node.t === 'd') { target = { parent: t.node, name }; } else target = { parent: t.parent, name: t.name };
        if (!dsys.can(target.parent, dcred, 2)) throw new SIM.FsError('EACCES');
      } catch (e) { c.err('scp: ' + dpath + ': ' + e.message + '\n'); return false; }
      if (node.t === 'd') {
        if (!rec) { c.err('scp: ' + name + ': not a regular file\n'); return false; }
        const nd = target.parent.ch[target.name] = target.parent.ch[target.name] || { t: 'd', mode: node.mode, uid: dcred.uid, gid: dcred.gid, mtime: Date.now(), ch: Object.create(null) };
        for (const k of Object.keys(node.ch)) copyNode(node.ch[k], dsys, dcred, dsys.normPath(target.name, '/') && (dpath.replace(/\/$/, '') + '/' + (target.parent.ch[target.name] === nd && dsys.resolveRaw(dpath) === nd ? '' : target.name)).replace(/\/$/, ''), k);
        return true;
      }
      const ex = target.parent.ch[target.name];
      if (ex) { ex.c = node.c; ex.mtime = Date.now(); }
      else target.parent.ch[target.name] = { t: 'f', mode: node.mode & 0o777, uid: dcred.uid, gid: dcred.gid, mtime: Date.now(), c: node.c };
      const size = node.c.length;
      c.out((name).padEnd(48) + '100% ' + String(size).padStart(5) + '    ' + (size / 1024 * 8).toFixed(1) + 'KB/s   00:00\n');
      return true;
    };
    let st = 0;
    if (isRemote(dest)) {
      for (const s of pos) {
        let r0; try { r0 = c.lookup(s); } catch (e) { c.err('scp: ' + s + ': No such file or directory\n'); st = 1; continue; }
        if (!c.sys.can(r0.node, c.cred, 4)) { c.err('scp: ' + s + ': Permission denied\n'); st = 1; continue; }
        if (!copyNode(r0.node, rsys, rcred, rpath(sp(dest).path), r0.name)) st = 1;
      }
    } else {
      for (const s of pos) {
        const p = rpath(sp(s).path);
        let r0; try { r0 = rsys.lookup(p, rcred, '/'); } catch (e) { c.err('scp: ' + sp(s).path + ': No such file or directory\n'); st = 1; continue; }
        if (!copyNode(r0.node, c.sys, c.cred, c.abs(dest), r0.name)) st = 1;
      }
    }
    c.sys.emit('scp', { to: isRemote(dest) ? 'remote' : 'local' });
    return st;
  };
  C['ssh-keygen'] = async (c) => {
    const { f } = c.opts('t:b:C:f:N:lyqE:', {});
    if (f.l) { c.out('256 ' + fingerprint(c.sys) + ' ' + c.sys.uname(c.cred.uid) + '@' + c.sys.hostname + ' (ED25519)\n'); return 0; }
    const type = (f.t || 'rsa').toLowerCase();
    if (!['ed25519', 'rsa', 'ecdsa', 'dsa'].includes(type)) { c.err('unknown key type ' + type + '\n'); return 1; }
    const home = c.env.HOME;
    const base = type === 'ed25519' ? 'id_ed25519' : type === 'rsa' ? 'id_rsa' : 'id_' + type;
    c.out('Generating public/private ' + type + ' key pair.\n');
    let file = f.f ? c.abs(f.f.replace(/^~/, home)) : null;
    if (!file) {
      const ans = await c.readLine('Enter file in which to save the key (' + home + '/.ssh/' + base + '): ');
      if (ans == null) return 1;
      file = ans.trim() ? c.abs(ans.trim().replace(/^~/, home)) : home + '/.ssh/' + base;
    }
    const dir = file.replace(/\/[^/]*$/, '');
    let dnode = c.sys.resolveRaw(dir);
    if (!dnode) {
      if (dir === home + '/.ssh') { const hn = c.sys.resolveRaw(home); dnode = hn.ch['.ssh'] = { t: 'd', mode: 0o700, uid: c.cred.uid, gid: c.cred.gid, mtime: Date.now(), ch: Object.create(null) }; c.out("Created directory '" + dir + "'.\n"); }
      else { c.err('Saving key "' + file + '" failed: No such file or directory\n'); return 1; }
    }
    const name = file.replace(/^.*\//, '');
    if (dnode.ch[name]) {
      c.out(file + ' already exists.\n');
      if (!(await c.confirm('Overwrite (y/n)? '))) return 1;
    }
    let pass = f.N;
    if (pass == null) {
      for (;;) {
        const p1 = await c.readLine('Enter passphrase (empty for no passphrase): ', { password: true }); if (p1 == null) return 1;
        const p2 = await c.readLine('Enter same passphrase again: ', { password: true }); if (p2 == null) return 1;
        if (p1 === p2) { pass = p1; break; }
        c.out('Passphrases do not match.  Try again.\n');
      }
    }
    const comment = f.C || c.sys.uname(c.cred.uid) + '@' + c.sys.hostname;
    const keyId = SIM.hash(file + Date.now() + Math.random()).slice(0, 43).replace(/[^A-Za-z0-9]/g, 'A');
    const pub = (type === 'ed25519' ? 'ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAI' : 'ssh-' + type + ' AAAAB3NzaC1yc2EAAAADAQABAAABgQ') + keyId + ' ' + comment + '\n';
    dnode.ch[name] = { t: 'f', mode: 0o600, uid: c.cred.uid, gid: c.cred.gid, mtime: Date.now(), c: '-----BEGIN OPENSSH PRIVATE KEY-----\nb3BlbnNzaC1rZXktdjEAAAAA' + keyId + (pass ? 'ZW5jcnlwdGVk' : 'bm9uZQ') + '\n(clé PRIVÉE : ne jamais la partager ni la copier sur un serveur)\n-----END OPENSSH PRIVATE KEY-----\n', passphrase: pass || null };
    dnode.ch[name + '.pub'] = { t: 'f', mode: 0o644, uid: c.cred.uid, gid: c.cred.gid, mtime: Date.now(), c: pub };
    const fp = 'SHA256:' + SIM.hash(pub).replace(/[^A-Za-z0-9]/g, '').slice(0, 43);
    c.out('Your identification has been saved in ' + file + '\nYour public key has been saved in ' + file + '.pub\nThe key fingerprint is:\n' + fp + ' ' + comment + "\nThe key's randomart image is:\n+--[" + (type === 'ed25519' ? 'ED25519 256' : 'RSA 3072') + ']--+\n|      .o+=*B=.   |\n|     . .o+=*o+   |\n|      . oo= B .  |\n|       ..o.* =   |\n|        S.o.o .  |\n|        .+ o.    |\n|       .oo= E    |\n|       .+B..     |\n|       .o+=.     |\n+----[SHA256]-----+\n');
    c.sys.emit('keygen', { file, type, pass: !!pass });
    return 0;
  };
  C['ssh-copy-id'] = async (c) => {
    const a = c.args.slice(); let ident = null, port = null; const pos = [];
    for (let i = 0; i < a.length; i++) { if (a[i] === '-i') ident = a[++i]; else if (a[i] === '-p') port = +a[++i]; else if (a[i][0] !== '-') pos.push(a[i]); }
    if (!pos.length) { c.err('Usage: /usr/bin/ssh-copy-id [-h|-?|-f|-n|-s|-x] [-i [identity_file]] [-p port] [-F alternative ssh_config file] [-t target_path] [[-o <ssh -o options>] ...] [user@]hostname\n'); return 1; }
    const home = c.env.HOME;
    let pubPath = ident ? c.abs(ident.replace(/^~/, home)) : null;
    if (pubPath && !pubPath.endsWith('.pub')) pubPath += '.pub';
    if (!pubPath) for (const b of ['id_ed25519', 'id_rsa', 'id_ecdsa']) if (readNode(c.sys, home + '/.ssh/' + b + '.pub')) { pubPath = home + '/.ssh/' + b + '.pub'; break; }
    const pub = pubPath && readNode(c.sys, pubPath);
    if (!pub) { c.err('/usr/bin/ssh-copy-id: ERROR: No identities found\n'); c.hint('génère d\'abord une paire de clés : ssh-keygen -t ed25519'); return 1; }
    c.err('/usr/bin/ssh-copy-id: INFO: Source of key(s) to be installed: "' + pubPath + '"\n');
    const d = parseDest(c, pos[0], port, null);
    c.err('/usr/bin/ssh-copy-id: INFO: attempting to log in with the new key(s), to filter out any that are already installed\n');
    const res = resolveName(c.sys, d.host);
    const dst0 = res.ip && reach(c.sys, res.ip).host;
    if (dst0) {
      const tu = dst0.user(d.user);
      const ak = tu && readNode(dst0, tu.home + '/.ssh/authorized_keys');
      if (ak && ak.c.includes(pub.c.trim().split(' ')[1])) { c.err('\n/usr/bin/ssh-copy-id: WARNING: All keys were skipped because they already exist on the remote system.\n\t\t(if you think this is a mistake, you may want to use -f option)\n\n'); return 0; }
    }
    c.err('/usr/bin/ssh-copy-id: INFO: 1 key(s) remain to be installed -- if you are prompted now it is to install the new keys\n');
    const r = await sshConnect(c, d, { opts: { pubkeyauthentication: 'no' } });
    if (!r.ok) return 1;
    const dst = r.dst, u = dst.user(r.user);
    const hn = dst.resolveRaw(u.home);
    let sd = hn.ch['.ssh'];
    if (!sd) sd = hn.ch['.ssh'] = { t: 'd', mode: 0o700, uid: u.uid, gid: u.gid, mtime: Date.now(), ch: Object.create(null) };
    if (!sd.ch.authorized_keys) sd.ch.authorized_keys = { t: 'f', mode: 0o600, uid: u.uid, gid: u.gid, mtime: Date.now(), c: '' };
    sd.ch.authorized_keys.c += pub.c.endsWith('\n') ? pub.c : pub.c + '\n';
    c.out('\nNumber of key(s) added: 1\n\nNow try logging into the machine, with:   "ssh \'' + r.user + '@' + d.host + '\'"\nand check to make sure that only the key(s) you wanted were added.\n\n');
    c.sys.emit('copyid', { host: d.host, user: r.user });
    return 0;
  };
  C.sshd = async (c) => {
    const t = c.args.includes('-t'), T = c.args.includes('-T');
    if (c.cred.uid !== 0) { c.err('sshd: no hostkeys available -- exiting.\n'); return 1; }
    if (t || T) {
      const e = c.sys.sshdCheck();
      if (e) { c.err(e + '\n'); return 255; }
      if (T) c.out('port ' + c.sys.sshdOpt('port', '22') + '\npermitrootlogin ' + c.sys.sshdOpt('permitrootlogin', 'without-password') + '\npasswordauthentication ' + c.sys.sshdOpt('passwordauthentication', 'yes') + '\npubkeyauthentication ' + c.sys.sshdOpt('pubkeyauthentication', 'yes') + '\n');
      c.sys.emit('sshd-t', {});
      return 0;
    }
    c.err('sshd re-exec requires execution with an absolute path\n'); return 1;
  };

  /* ================= UFW ================= */
  function fmtRule(r) {
    let to = r.app || (r.port != null ? String(r.port) + (r.proto ? '/' + r.proto : '') : 'Anywhere');
    if (r.toAddr && r.toAddr !== 'any') to = r.toAddr + ' ' + to;
    let from = r.from && r.from !== 'any' ? r.from : 'Anywhere';
    if (r.v6) { to += ' (v6)'; from = from === 'Anywhere' ? 'Anywhere (v6)' : from; }
    return { to, from, action: r.action.toUpperCase() + (r.dir === 'out' ? ' OUT' : '') };
  }
  C.ufw = async (c) => {
    const sys = c.sys;
    if (!sys.installed.has('ufw')) { c.err('bash: ufw : commande introuvable\n'); return 127; }
    if (c.cred.uid !== 0) { c.err('ERROR: You need to be root to run this script\n'); return 1; }
    const u = sys.ufw;
    const a = c.args.slice();
    const cmd = (a.shift() || '').toLowerCase();
    const listRules = () => u.rules;
    if (cmd === 'status') {
      const mode = a[0];
      if (!u.enabled) { c.out('Status: inactive\n'); return 0; }
      let s = 'Status: active\n';
      if (mode === 'verbose') s += 'Logging: on (low)\nDefault: ' + u.inDefault + ' (incoming), ' + u.outDefault + ' (outgoing), disabled (routed)\nNew profiles: skip\n';
      s += '\n';
      const rows = listRules().map((r, i) => { const f = fmtRule(r); return { n: i + 1, to: f.to, action: mode === 'verbose' || mode === 'numbered' ? f.action.replace(/^(ALLOW|DENY|REJECT|LIMIT)$/, '$1 IN') : f.action, from: f.from }; });
      if (rows.length) {
        const pre = mode === 'numbered' ? '     ' : '';
        s += pre + 'To'.padEnd(27) + 'Action'.padEnd(12) + 'From\n' + pre + '--'.padEnd(27) + '------'.padEnd(12) + '----\n';
        for (const r of rows) s += (mode === 'numbered' ? '[' + String(r.n).padStart(2) + '] ' : '') + r.to.padEnd(27) + r.action.padEnd(12) + r.from + '\n';
        s += '\n';
      }
      c.out(s); return 0;
    }
    if (cmd === 'enable') {
      const fr = c.sh.f;
      if (fr.kind === 'ssh' && fr.sys === sys) {
        const ok = await c.confirm('Command may disrupt existing ssh connections. Proceed with operation (y|n)? ');
        if (!ok) { c.out('Aborted\n'); return 0; }
      }
      u.enabled = true; if (sys.services.ufw) { sys.services.ufw.active = true; sys.services.ufw.enabled = true; }
      c.out('Firewall is active and enabled on system startup\n');
      sys.emit('ufw', { op: 'enable' });
      // coupure de la session SSH si le port 22 n'est pas autorisé
      if (fr.kind === 'ssh' && fr.sys === sys) {
        const port = parseInt(sys.sshdOpt('port', '22'), 10) || 22;
        const src = fr.proc.from;
        if (!fwAllows(sys, port, 'tcp', src)) {
          c.sh.pendingDisconnect = { sys, msg: 'client_loop: send disconnect: Broken pipe\n' };
        }
      }
      return 0;
    }
    if (cmd === 'disable') { u.enabled = false; c.out('Firewall stopped and disabled on system startup\n'); sys.emit('ufw', { op: 'disable' }); return 0; }
    if (cmd === 'reload') { c.out(u.enabled ? 'Firewall reloaded\n' : 'Firewall not enabled (skipping reload)\n'); return 0; }
    if (cmd === 'reset') { if (!(await c.confirm('Resetting all rules to installed defaults. Proceed with operation (y|n)? '))) { c.out('Aborted\n'); return 0; } u.rules = []; u.enabled = false; u.inDefault = 'deny'; u.outDefault = 'allow'; c.out('Backing up \'user.rules\' to \'/etc/ufw/user.rules.' + Date.now() + '\'\n'); sys.emit('ufw', { op: 'reset' }); return 0; }
    if (cmd === 'default') {
      const pol = (a[0] || '').toLowerCase(), dir = (a[1] || 'incoming').toLowerCase();
      if (!['allow', 'deny', 'reject'].includes(pol) || !['incoming', 'outgoing', 'routed', 'in', 'out'].includes(dir)) { c.err('ERROR: Invalid syntax\n\nUsage: ufw default {allow|deny|reject} [incoming|outgoing|routed]\n'); return 1; }
      if (dir.startsWith('in')) u.inDefault = pol; else if (dir.startsWith('out')) u.outDefault = pol;
      c.out("Default " + (dir.startsWith('in') ? 'incoming' : dir.startsWith('out') ? 'outgoing' : 'routed') + " policy changed to '" + pol + "'\n(be sure to update your rules accordingly)\n");
      sys.emit('ufw', { op: 'default', dir, pol });
      return 0;
    }
    if (cmd === 'app') { c.out('Available applications:\n  OpenSSH\n' + (sys.installed.has('apache2') ? '  WWW\n  WWW Full\n  WWW Secure\n' : '')); return 0; }
    if (cmd === 'logging') { c.out('Logging ' + (a[0] === 'off' ? 'disabled' : 'enabled') + '\n'); return 0; }
    if (cmd === 'delete') {
      if (/^\d+$/.test(a[0] || '')) {
        const n = +a[0];
        const r = u.rules[n - 1];
        if (!r) { c.err('ERROR: Could not find rule \'' + n + '\'\n'); return 1; }
        const f = fmtRule(r);
        c.out('Deleting:\n ' + r.action + ' ' + (r.port != null ? r.port + (r.proto ? '/' + r.proto : '') : r.app || '') + (r.from && r.from !== 'any' ? ' from ' + r.from : '') + '\n');
        void f;
        if (!(await c.confirm('Proceed with operation (y|n)? '))) { c.out('Aborted\n'); return 0; }
        u.rules.splice(n - 1, 1);
        c.out('Rule deleted' + (r.v6 ? ' (v6)' : '') + '\n');
        sys.emit('ufw', { op: 'delete' });
        return 0;
      }
      const spec = parseRule(a);
      if (spec.err) { c.err(spec.err); return 1; }
      const before = u.rules.length;
      u.rules = u.rules.filter((r) => !(r.action === spec.action && String(r.port) === String(spec.port) && (r.proto || '') === (spec.proto || '') && (r.from || 'any') === (spec.from || 'any')));
      if (u.rules.length === before) { c.out('Could not delete non-existent rule\nCould not delete non-existent rule (v6)\n'); return 0; }
      c.out('Rule deleted\nRule deleted (v6)\n'); sys.emit('ufw', { op: 'delete' });
      return 0;
    }
    if (['allow', 'deny', 'reject', 'limit'].includes(cmd)) {
      const spec = parseRule([cmd].concat(a));
      if (spec.err) { c.err(spec.err); return 1; }
      const exists = u.rules.some((r) => r.action === spec.action && String(r.port) === String(spec.port) && (r.proto || '') === (spec.proto || '') && (r.from || 'any') === (spec.from || 'any') && !r.v6);
      if (exists) { c.out('Skipping adding existing rule\n' + (spec.from && spec.from !== 'any' ? '' : 'Skipping adding existing rule (v6)\n')); return 0; }
      u.rules.push(Object.assign({}, spec, { v6: false }));
      const v6 = !spec.from || spec.from === 'any';
      if (v6) u.rules.push(Object.assign({}, spec, { v6: true }));
      // tri : les règles v4 avant les v6
      u.rules.sort((x, y) => (x.v6 === y.v6 ? 0 : x.v6 ? 1 : -1));
      c.out('Rule added\n' + (v6 ? 'Rule added (v6)\n' : ''));
      sys.emit('ufw', { op: 'rule', rule: spec });
      return 0;
    }
    if (cmd === 'insert') { c.err('(simulateur) utilise « ufw allow/deny … » (insert non pris en charge)\n'); return 1; }
    c.err('ERROR: Invalid syntax\n\nUsage: ufw COMMAND\n\nCommands:\n enable                          enables the firewall\n disable                         disables the firewall\n default ARG                     set default policy\n allow|deny|reject|limit ARGS    add rule\n delete RULE|NUM                 delete RULE\n status                          show firewall status\n status numbered                 show firewall status as numbered list of RULES\n status verbose                  show verbose firewall status\n');
    return 1;
  };
  const SERVICES_PORTS = { ssh: [22, 'tcp'], http: [80, 'tcp'], https: [443, 'tcp'], mysql: [3306, 'tcp'], telnet: [23, null], ftp: [21, 'tcp'], smtp: [25, 'tcp'], dns: [53, null], domain: [53, null], openssh: [22, 'tcp', 'OpenSSH'], 'www': [80, 'tcp', 'WWW'], 'www full': [80, 'tcp', 'WWW Full'], ipp: [631, 'tcp'] };
  function parseRule(a) {
    const action = a[0];
    const rest = a.slice(1).map((x) => x);
    const spec = { action, dir: 'in', port: null, proto: null, from: 'any' };
    if (rest[0] === 'in' || rest[0] === 'out') spec.dir = rest.shift();
    if (!rest.length) return { err: 'ERROR: Invalid syntax\n' };
    if (!['from', 'to', 'proto'].includes(rest[0])) {
      // forme simple : PORT[/proto] ou nom de service
      const t = rest.shift();
      const m = /^(\d+(?::\d+)?(?:,\d+)*)(?:\/(tcp|udp))?$/i.exec(t);
      if (m) { spec.port = m[1]; spec.proto = m[2] ? m[2].toLowerCase() : null; }
      else if (SERVICES_PORTS[t.toLowerCase()]) { const s = SERVICES_PORTS[t.toLowerCase()]; spec.port = s[0]; spec.proto = s[1]; if (s[2]) spec.app = s[2]; }
      else return { err: 'ERROR: Could not find a profile matching \'' + t + '\'\n' };
      if (rest.length) return { err: 'ERROR: Invalid syntax\n' };
      return spec;
    }
    for (let i = 0; i < rest.length; i++) {
      const k = rest[i], v = rest[i + 1];
      if (k === 'from') { spec.from = v; i++; }
      else if (k === 'to') { spec.toAddr = v; i++; }
      else if (k === 'port') { spec.port = v; i++; }
      else if (k === 'proto') { spec.proto = v; i++; }
      else return { err: "ERROR: Invalid token '" + k + "'\n" };
    }
    if (spec.from && spec.from !== 'any' && !/^\d+\.\d+\.\d+\.\d+(\/\d+)?$/.test(spec.from)) return { err: 'ERROR: Bad source address\n' };
    return spec;
  }
  SIM.parseUfwRule = parseRule;

  /* ================= fail2ban ================= */
  C['fail2ban-client'] = async (c) => {
    const sys = c.sys;
    if (!sys.installed.has('fail2ban')) { c.err('bash: fail2ban-client : commande introuvable\n'); return 127; }
    if (c.cred.uid !== 0) { c.err('ERROR  Permission denied to socket: /var/run/fail2ban/fail2ban.sock, (you must be root)\n'); return 255; }
    const s = sys.services.fail2ban;
    if (!s || !s.active) { c.err("ERROR  Failed to access socket path: /var/run/fail2ban/fail2ban.sock. Is fail2ban running?\n"); return 255; }
    const a = c.args;
    const f = sys.f2b;
    if (a[0] === 'status' && !a[1]) { c.out('Status\n|- Number of jail:\t1\n`- Jail list:\tsshd\n'); return 0; }
    if (a[0] === 'status' && a[1] === 'sshd') {
      const cur = Object.values(f.failures).reduce((x, y) => x + y, 0);
      c.out('Status for the jail: sshd\n|- Filter\n|  |- Currently failed:\t' + cur + '\n|  |- Total failed:\t' + (f.total || 0) + '\n|  `- Journal matches:\t_SYSTEMD_UNIT=sshd.service + _COMM=sshd\n`- Actions\n   |- Currently banned:\t' + f.banned.length + '\n   |- Total banned:\t' + (f.totalBanned || 0) + '\n   `- Banned IP list:\t' + f.banned.join(' ') + '\n');
      return 0;
    }
    if (a[0] === 'status') { c.err('ERROR  NOK: (\'' + a[1] + '\',)\nSorry but the jail \'' + a[1] + '\' does not exist\n'); return 255; }
    if (a[0] === 'set' && a[1] === 'sshd' && a[2] === 'unbanip') {
      const ip = a[3];
      if (!f.banned.includes(ip)) { c.err("ERROR  NOK: ('" + ip + " is not banned',)\n"); return 255; }
      f.banned = f.banned.filter((x) => x !== ip); f.failures[ip] = 0;
      c.out('1\n'); sys.emit('unban', { ip }); return 0;
    }
    if (a[0] === 'set' && a[1] === 'sshd' && a[2] === 'banip') { if (!f.banned.includes(a[3])) f.banned.push(a[3]); f.totalBanned = (f.totalBanned || 0) + 1; c.out('1\n'); return 0; }
    if (a[0] === 'banned') { c.out("[{'sshd': [" + f.banned.map((x) => "'" + x + "'").join(', ') + ']}]\n'); return 0; }
    if (a[0] === 'reload') { SIM.loadJail(sys); c.out('OK\n'); return 0; }
    if (a[0] === 'ping') { c.out('Server replied: pong\n'); return 0; }
    c.err('(simulateur) commandes : status [sshd] · set sshd unbanip IP · banned · reload\n'); return 1;
  };
  SIM.loadJail = (sys) => {
    const t = sys.readFile('/etc/fail2ban/jail.local') || '';
    const get = (k) => { const m = new RegExp('^\\s*' + k + '\\s*=\\s*(\\S+)', 'm').exec(t); return m ? m[1] : null; };
    const mr = get('maxretry'); if (mr) sys.f2b.maxretry = +mr;
    const bt = get('bantime'); if (bt) sys.f2b.bantime = bt;
    const ft = get('findtime'); if (ft) sys.f2b.findtime = ft;
  };
})();
