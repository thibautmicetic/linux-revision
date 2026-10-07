/* Machine Linux simulée : système de fichiers avec droits, utilisateurs, processus,
   services, paquets et réseau. Une instance = une VM (VM-A locale, VM-B distante). */
(function () {
  'use strict';
  const APP = (window.APP = window.APP || {});
  const SIM = (APP.SIM = APP.SIM || {});

  const ERR = {
    ENOENT: 'Aucun fichier ou dossier de ce nom',
    EACCES: 'Permission non accordée',
    ENOTDIR: "N'est pas un dossier",
    EISDIR: 'est un dossier',
    ENOTEMPTY: "Le dossier n'est pas vide",
    EEXIST: 'Le fichier existe',
    EPERM: 'Opération non permise',
    EINVAL: 'Argument invalide',
    EBUSY: 'Périphérique ou ressource occupé'
  };
  SIM.ERR = ERR;
  class FsError extends Error { constructor(code, path) { super(ERR[code] || code); this.code = code; this.path = path; } }
  SIM.FsError = FsError;

  const now = () => Date.now();
  let BOOT = now() - 3660 * 1000;

  // ---------- nœuds ----------
  function dir(mode, uid, gid) { return { t: 'd', mode, uid, gid, mtime: now(), ch: Object.create(null) }; }
  function file(content, mode, uid, gid) { return { t: 'f', mode, uid, gid, mtime: now(), c: content || '' }; }

  const SERVICES_TXT = `# Network services, Internet style
tcpmux		1/tcp				# TCP port service multiplexer
echo		7/tcp
echo		7/udp
discard		9/tcp		sink null
systat		11/tcp		users
daytime		13/tcp
netstat		15/tcp
qotd		17/tcp		quote
chargen		19/tcp		ttytst source
ftp-data	20/tcp
ftp		21/tcp
fsp		21/udp		fspd
ssh		22/tcp				# SSH Remote Login Protocol
telnet		23/tcp
smtp		25/tcp		mail
time		37/tcp		timserver
whois		43/tcp		nicname
tacacs		49/tcp				# Login Host Protocol (TACACS)
domain		53/tcp				# Domain Name Server
domain		53/udp
bootps		67/udp
bootpc		68/udp
tftp		69/udp
gopher		70/tcp				# Internet Gopher
finger		79/tcp
http		80/tcp		www		# WorldWideWeb HTTP
kerberos	88/tcp		kerberos5 krb5 kerberos-sec	# Kerberos v5
kerberos	88/udp		kerberos5 krb5 kerberos-sec	# Kerberos v5
iso-tsap	102/tcp		tsap		# part of ISODE
acr-nema	104/tcp		dicom		# Digital Imag. & Comm. 300
pop3		110/tcp		pop-3		# POP version 3
sunrpc		111/tcp		portmapper	# RPC 4.0 portmapper
sunrpc		111/udp		portmapper
auth		113/tcp		authentication tap ident
nntp		119/tcp		readnews untp	# USENET News Transfer Protocol
ntp		123/udp				# Network Time Protocol
epmap		135/tcp		loc-srv		# DCE endpoint resolution
netbios-ns	137/udp				# NETBIOS Name Service
netbios-dgm	138/udp				# NETBIOS Datagram Service
netbios-ssn	139/tcp				# NETBIOS session service
imap2		143/tcp		imap		# Interim Mail Access P 2 and 4
snmp		161/tcp				# Simple Net Mgmt Protocol
snmp		161/udp
snmp-trap	162/udp		snmptrap	# Traps for SNMP
ldap		389/tcp			# Lightweight Directory Access Protocol
ldap		389/udp
https		443/tcp				# http protocol over TLS/SSL
https		443/udp				# HTTP/3
microsoft-ds	445/tcp				# Microsoft Naked CIFS
submissions	465/tcp		ssmtp smtps urd # Submission over TLS [RFC8314]
syslog		514/udp
printer		515/tcp		spooler		# line printer spooler
submission	587/tcp				# Submission [RFC4409]
ipp		631/tcp				# Internet Printing Protocol
ldaps		636/tcp				# LDAP over SSL
rsync		873/tcp
ftps		990/tcp				# FTP over SSL (Control)
imaps		993/tcp				# IMAP over SSL
pop3s		995/tcp				# POP-3 over SSL
openvpn		1194/tcp
openvpn		1194/udp
ms-sql-s	1433/tcp			# Microsoft SQL Server
mysql		3306/tcp
ms-wbt-server	3389/tcp			# Remote Desktop Protocol (RDP)
postgresql	5432/tcp	postgres	# PostgreSQL Database
x11		6000/tcp	x11-0		# X Window System
http-alt	8080/tcp	webcache	# WWW caching service
`;

  const SSHD_CONFIG = `# This is the sshd server system-wide configuration file.  See
# sshd_config(5) for more information.

Include /etc/ssh/sshd_config.d/*.conf

#Port 22
#AddressFamily any
#ListenAddress 0.0.0.0

# Authentication:
#LoginGraceTime 2m
#PermitRootLogin prohibit-password
#StrictModes yes
#MaxAuthTries 6

#PubkeyAuthentication yes
#AuthorizedKeysFile	.ssh/authorized_keys .ssh/authorized_keys2

# To disable tunneled clear text passwords, change to no here!
#PasswordAuthentication yes
#PermitEmptyPasswords no

KbdInteractiveAuthentication no
UsePAM yes

X11Forwarding yes
PrintMotd no
AcceptEnv LANG LC_*
Subsystem	sftp	/usr/lib/openssh/sftp-server
`;
  SIM.SSHD_KEYWORDS = ['include', 'port', 'addressfamily', 'listenaddress', 'logingracetime', 'permitrootlogin', 'strictmodes', 'maxauthtries', 'maxsessions', 'pubkeyauthentication', 'authorizedkeysfile', 'passwordauthentication', 'permitemptypasswords', 'kbdinteractiveauthentication', 'challengeresponseauthentication', 'usepam', 'x11forwarding', 'printmotd', 'acceptenv', 'subsystem', 'allowusers', 'allowgroups', 'denyusers', 'denygroups', 'clientaliveinterval', 'clientalivecountmax', 'banner', 'hostkey', 'loglevel', 'syslogfacility', 'allowtcpforwarding', 'gatewayports', 'permittunnel', 'usedns', 'maxstartups', 'protocol'];

  const INTERFACES_DHCP = `# This file describes the network interfaces available on your system
# and how to activate them. For more information, see interfaces(5).

source /etc/network/interfaces.d/*

# The loopback network interface
auto lo
iface lo inet loopback

# The primary network interface
allow-hotplug enp0s3
iface enp0s3 inet dhcp
`;

  const BASHRC = `# ~/.bashrc : lu à l'ouverture de chaque terminal (shell bash interactif)

HISTCONTROL=ignoreboth
HISTSIZE=1000

# couleurs pour ls et grep
alias ls='ls --color=auto'
alias grep='grep --color=auto'

# quelques alias utiles (enlever le # pour les activer)
#alias ll='ls -l'
#alias la='ls -A'
`;

  const MAN_SUDOERS = `#
# This file MUST be edited with the 'visudo' command as root.
#
Defaults	env_reset
Defaults	mail_badpass
Defaults	secure_path="/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"

# User privilege specification
root	ALL=(ALL:ALL) ALL

# Allow members of group sudo to execute any command
%sudo	ALL=(ALL:ALL) ALL

@includedir /etc/sudoers.d
`;

  // Paquets connus du simulateur
  const PKGS = {
    tree: { v: '2.1.0-1', size: '119 ko', desc: "affiche le contenu des répertoires sous forme d'arbre", deps: 'libc6 (>= 2.34)', bins: ['tree'], files: ['/usr/bin/tree', '/usr/share/doc/tree/README.gz', '/usr/share/doc/tree/changelog.Debian.gz', '/usr/share/doc/tree/copyright', '/usr/share/man/man1/tree.1.gz'] },
    htop: { v: '3.2.2-2', size: '412 ko', desc: 'visualiseur de processus interactif', deps: 'libc6, libncursesw6, libnl-3-200', bins: ['htop'], files: ['/usr/bin/htop', '/usr/share/man/man1/htop.1.gz'] },
    'x11-apps': { v: '7.7+9', size: '1 584 ko', desc: 'programmes divers pour X (xclock, xeyes…)', deps: 'libc6, libx11-6, libxaw7', bins: ['xclock', 'xeyes'], files: ['/usr/bin/xclock', '/usr/bin/xeyes'] },
    traceroute: { v: '1:2.1.2-1', size: '138 ko', desc: 'affiche la route suivie par les paquets IP', deps: 'libc6', bins: ['traceroute'], files: ['/usr/bin/traceroute.db'] },
    ipcalc: { v: '0.42-2', size: '36 ko', desc: 'calculateur de réseaux IPv4', deps: 'perl', bins: ['ipcalc'], files: ['/usr/bin/ipcalc'] },
    tcpdump: { v: '4.99.3-1', size: '1 244 ko', desc: 'outil de capture du trafic réseau', deps: 'libc6, libpcap0.8', bins: ['tcpdump'], files: ['/usr/bin/tcpdump'] },
    ufw: { v: '0.36.2-1', size: '868 ko', desc: 'pare-feu simplifié (Uncomplicated Firewall)', deps: 'iptables, python3', bins: ['ufw'], files: ['/usr/sbin/ufw', '/etc/ufw/ufw.conf', '/etc/default/ufw'], conf: ['/etc/ufw/ufw.conf'] },
    fail2ban: { v: '1.0.2-2', size: '2 112 ko', desc: 'bannit les adresses IP qui provoquent trop d\'échecs d\'authentification', deps: 'python3, python3-systemd', bins: ['fail2ban-client', 'fail2ban-server'], files: ['/usr/bin/fail2ban-client', '/usr/bin/fail2ban-server', '/etc/fail2ban/jail.conf'], conf: ['/etc/fail2ban/jail.conf'], service: 'fail2ban' },
    'unattended-upgrades': { v: '2.9.1+nmu3', size: '312 ko', desc: 'installation automatique des mises à jour de sécurité', deps: 'python3, python3-apt', bins: ['unattended-upgrade'], files: ['/usr/bin/unattended-upgrade', '/etc/apt/apt.conf.d/50unattended-upgrades'], service: 'unattended-upgrades' },
    'net-tools': { v: '2.10-0.1', size: '1 016 ko', desc: 'outils réseau historiques (ifconfig, netstat, route)', deps: 'libc6', bins: ['ifconfig', 'netstat', 'route'], files: ['/usr/sbin/ifconfig', '/usr/bin/netstat', '/usr/sbin/route'] },
    'openssh-server': { v: '1:9.2p1-2', size: '1 870 ko', desc: 'serveur SSH (démon sshd)', deps: 'openssh-client, libssl3', bins: ['sshd'], files: ['/usr/sbin/sshd', '/etc/ssh/sshd_config'], conf: ['/etc/ssh/sshd_config'], service: 'ssh' },
    'openssh-client': { v: '1:9.2p1-2', size: '3 090 ko', desc: 'client SSH (ssh, scp, ssh-keygen)', deps: 'libssl3', bins: ['ssh', 'scp', 'ssh-keygen', 'ssh-copy-id'], files: ['/usr/bin/ssh', '/usr/bin/scp', '/usr/bin/ssh-keygen', '/usr/bin/ssh-copy-id'] },
    apache2: { v: '2.4.57-2', size: '1 760 ko', desc: 'serveur web Apache HTTP', deps: 'apache2-bin, apache2-data', bins: ['apache2ctl'], files: ['/usr/sbin/apache2', '/etc/apache2/apache2.conf', '/var/www/html/index.html'], conf: ['/etc/apache2/apache2.conf'], service: 'apache2' },
    'mariadb-server': { v: '1:10.11.4-1', size: '17,9 Mo', desc: 'serveur de base de données MariaDB (MySQL)', deps: 'mariadb-client', bins: ['mariadb', 'mysql'], files: ['/usr/sbin/mariadbd', '/etc/mysql/my.cnf'], conf: ['/etc/mysql/my.cnf'], service: 'mariadb' },
    cups: { v: '2.4.2-3', size: '820 ko', desc: "système d'impression CUPS", deps: 'cups-daemon', bins: ['lpstat'], files: ['/usr/sbin/cupsd', '/etc/cups/cupsd.conf'], conf: ['/etc/cups/cupsd.conf'], service: 'cups' },
    gcc: { v: '4:12.2.0-3', size: '26 ko', desc: 'compilateur C GNU', deps: 'cpp, gcc-12', bins: ['gcc'], files: ['/usr/bin/gcc'] },
    nano: { v: '7.2-1', size: '2 690 ko', desc: 'éditeur de texte simple', deps: 'libc6, libncursesw6', bins: ['nano'], files: ['/usr/bin/nano'] },
    curl: { v: '7.88.1-10', size: '410 ko', desc: 'outil de transfert d\'URL', deps: 'libcurl4', bins: ['curl'], files: ['/usr/bin/curl'] },
    dnsutils: { v: '1:9.18.19-1', size: '120 ko', desc: 'clients DNS (dig, nslookup)', deps: 'bind9-dnsutils', bins: ['dig', 'nslookup', 'host'], files: ['/usr/bin/dig', '/usr/bin/nslookup'] },
    python3: { v: '3.11.2-1', size: '26 ko', desc: 'langage Python 3', deps: 'python3.11', bins: ['python3'], files: ['/usr/bin/python3'] },
    gedit: { v: '43.2-2', size: '512 ko', desc: 'éditeur de texte graphique', deps: 'gedit-common', bins: ['gedit'], files: ['/usr/bin/gedit'] },
    mousepad: { v: '0.5.10-2', size: '650 ko', desc: 'éditeur de texte graphique léger', deps: 'libgtk-3-0', bins: ['mousepad'], files: ['/usr/bin/mousepad'] },
    'firefox-esr': { v: '115.3.1esr-1', size: '73 Mo', desc: 'navigateur web Mozilla Firefox', deps: 'libgtk-3-0', bins: ['firefox'], files: ['/usr/bin/firefox-esr'] }
  };
  SIM.PKGS = PKGS;
  const DEFAULT_PKGS = ['openssh-server', 'openssh-client', 'gcc', 'nano', 'curl', 'dnsutils', 'python3', 'gedit', 'cups', 'firefox-esr', 'mousepad'];

  // Commandes "installées" de base (présentes dans /usr/bin)
  const BASE_BINS = ['ls', 'cat', 'cp', 'mv', 'rm', 'mkdir', 'rmdir', 'touch', 'echo', 'pwd', 'grep', 'find', 'head', 'tail', 'less', 'more', 'wc', 'sort', 'uniq', 'cut', 'tee', 'chmod', 'chown', 'chgrp', 'id', 'groups', 'whoami', 'who', 'w', 'date', 'diff', 'df', 'du', 'tar', 'gzip', 'ps', 'top', 'pstree', 'pgrep', 'pkill', 'killall', 'kill', 'nice', 'renice', 'nohup', 'sleep', 'yes', 'taskset', 'man', 'bash', 'sh', 'su', 'sudo', 'passwd', 'chage', 'newgrp', 'gpasswd', 'getent', 'uname', 'uptime', 'free', 'hostname', 'hostnamectl', 'systemctl', 'journalctl', 'ip', 'ping', 'ss', 'last', 'lastb', 'stat', 'ln', 'env', 'printenv', 'which', 'true', 'false', 'clear', 'tr', 'seq', 'basename', 'dirname', 'dpkg', 'apt', 'apt-get', 'nmcli', 'xargs', 'file', 'cal', 'dmesg', 'lsblk', 'mount', 'tty', 'logger'];
  const SBIN = ['adduser', 'useradd', 'deluser', 'userdel', 'usermod', 'groupadd', 'groupdel', 'reboot', 'shutdown', 'visudo', 'dhclient', 'sshd', 'ufw', 'iptables', 'cupsd'];

  class System {
    constructor(opts) {
      opts = opts || {};
      this.hostname = opts.hostname || 'debian';
      this.name = opts.name || 'VM-A';
      this.listeners = [];
      this.booted = BOOT;
      this.users = [];
      this.groups = [];
      this.procs = new Map();
      this.nextPid = opts.pidStart || 4200;
      this.journal = [];
      this.installed = new Set(DEFAULT_PKGS);
      this.aptUpdated = false;
      this.upgradable = ['openssl', 'libssl3', 'linux-image-amd64', 'firefox-esr', 'tzdata'];
      this.ufw = { installed: false, enabled: false, inDefault: 'deny', outDefault: 'allow', rules: [] };
      this.f2b = { banned: [], failures: {}, maxretry: 5, bantime: '10m', findtime: '10m' };
      this.failedLogins = [];
      this.logins = [];
      this.services = {};
      this.httpServers = [];
      this.net = {
        ifaces: [
          { name: 'lo', mac: '00:00:00:00:00:00', up: true, addrs: ['127.0.0.1/8'], loopback: true, mtu: 65536 },
          { name: 'enp0s3', mac: opts.mac || '08:00:27:3a:1b:9c', up: true, addrs: [], mtu: 1500 }
        ],
        gateway: null,
        lanIp: opts.ip || '192.168.1.10'
      };
      this.peers = {}; // autres machines (VM-B…)
      this.buildFs(opts);
      this.buildUsers(opts);
      this.buildProcs(opts);
      this.buildServices();
      this.applyNetworkConfig(true);
      if (opts.ufwInstalled) { this.installed.add('ufw'); this.ufw.installed = true; this.installPkgFiles('ufw'); }
    }

    on(fn) { this.listeners.push(fn); return () => { this.listeners = this.listeners.filter((f) => f !== fn); }; }
    emit(type, data) { for (const f of this.listeners.slice()) { try { f(type, data || {}); } catch (e) { console.error(e); } } }

    /* ===================== système de fichiers ===================== */
    buildFs(opts) {
      const R = (this.root = dir(0o755, 0, 0));
      const mk = (path, mode, uid, gid) => this.mkdirp(path, mode == null ? 0o755 : mode, uid || 0, gid || 0);
      const put = (path, content, mode, uid, gid) => { const p = this.splitPath(path); const parent = this.mkdirp('/' + p.slice(0, -1).join('/'), 0o755, 0, 0); parent.ch[p[p.length - 1]] = file(content, mode == null ? 0o644 : mode, uid || 0, gid || 0); return parent.ch[p[p.length - 1]]; };
      this._put = put; this._mk = mk;
      ['bin', 'boot', 'dev', 'etc', 'home', 'lib', 'media', 'mnt', 'opt', 'proc', 'run', 'sbin', 'srv', 'sys', 'usr', 'var'].forEach((d) => mk('/' + d));
      mk('/root', 0o700); mk('/tmp', 0o1777);
      mk('/usr/bin'); mk('/usr/sbin'); mk('/usr/lib'); mk('/usr/share/doc'); mk('/usr/local/bin');
      mk('/var/log'); mk('/var/www/html'); mk('/var/lib/dpkg'); mk('/var/cache/apt');
      mk('/etc/ssh'); mk('/etc/ssh/sshd_config.d'); mk('/etc/network'); mk('/etc/network/interfaces.d'); mk('/etc/apt'); mk('/etc/ssl/private', 0o710, 0, 0); mk('/etc/sudoers.d', 0o750);
      mk('/etc/systemd/system'); mk('/etc/cron.d'); mk('/etc/default');
      // /dev
      put('/dev/null', '', 0o666); put('/dev/zero', '', 0o666); put('/dev/random', '', 0o666); put('/dev/tty', '', 0o666);
      this.resolveRaw('/dev/null').special = 'null';
      // binaires
      for (const b of BASE_BINS) put('/usr/bin/' + b, '\x7fELF', 0o755).bin = b;
      for (const b of SBIN) put('/usr/sbin/' + b, '\x7fELF', 0o755).bin = b;
      this.resolveRaw('/usr/bin/sudo').mode = 0o4755;
      this.resolveRaw('/usr/bin/passwd').mode = 0o4755;
      this.resolveRaw('/usr/bin/su').mode = 0o4755;
      this.resolveRaw('/usr/bin/newgrp').mode = 0o4755;
      this.resolveRaw('/usr/bin/gpasswd').mode = 0o4755;
      this.resolveRaw('/usr/bin/chage').mode = 0o2755; this.resolveRaw('/usr/bin/chage').gid = 42;
      put('/usr/bin/mount', '\x7fELF', 0o4755).bin = 'mount';
      put('/usr/bin/umount', '\x7fELF', 0o4755).bin = 'umount';
      put('/usr/bin/chfn', '\x7fELF', 0o4755).bin = 'chfn';
      put('/usr/bin/chsh', '\x7fELF', 0o4755).bin = 'chsh';
      put('/usr/bin/crontab', '\x7fELF', 0o2755).bin = 'crontab';
      for (const b of ['kbd_mode', 'kdestroy', 'kernel-install', 'keyctl', 'kmod', 'kbdinfo', 'kbxutil', 'kinit', 'klist', 'killall5', 'kpartx', 'kvm-ok']) put('/usr/bin/' + b, '\x7fELF', 0o755).bin = b;
      for (const b of ['vi', 'vim.tiny', 'mawk', 'sed', 'gawk', 'zcat', 'xz', 'ssh-agent', 'ssh-add', 'scp', 'ssh', 'ssh-keygen', 'ssh-copy-id', 'python3', 'gcc', 'nano', 'curl', 'dig', 'nslookup', 'host', 'gedit', 'firefox', 'mousepad', 'lpstat']) put('/usr/bin/' + b, '\x7fELF', 0o755).bin = b;
      for (const l of ['libc.so.6', 'libm.so.6', 'libpthread.so.0', 'libcrypt.so.1', 'libz.so.1', 'libssl.so.3', 'libcrypto.so.3', 'libncursesw.so.6', 'libpam.so.0', 'libsystemd.so.0', 'libselinux.so.1', 'ld-linux-x86-64.so.2', 'libgtk-3.so.0', 'libX11.so.6', 'libpcre2-8.so.0', 'libtinfo.so.6']) put('/usr/lib/' + l, '\x7fELF', 0o644);
      mk('/usr/lib/x86_64-linux-gnu'); mk('/usr/lib/python3'); mk('/usr/lib/systemd'); mk('/usr/lib/openssh');
      put('/usr/lib/openssh/sftp-server', '\x7fELF', 0o755);
      // /etc
      put('/etc/hostname', this.hostname + '\n');
      put('/etc/hosts', '127.0.0.1\tlocalhost\n127.0.1.1\t' + this.hostname + '\n\n# The following lines are desirable for IPv6 capable hosts\n::1     localhost ip6-localhost ip6-loopback\nff02::1 ip6-allnodes\nff02::2 ip6-allrouters\n');
      put('/etc/resolv.conf', 'nameserver 192.168.1.1\n');
      put('/etc/services', SERVICES_TXT);
      put('/etc/network/interfaces', (opts.interfaces || INTERFACES_DHCP));
      put('/etc/ssh/sshd_config', SSHD_CONFIG);
      put('/etc/ssh/ssh_config', '# This is the ssh client system-wide configuration file.\nHost *\n    SendEnv LANG LC_*\n    HashKnownHosts yes\n');
      put('/etc/ssh/ssh_host_ed25519_key', '-----BEGIN OPENSSH PRIVATE KEY-----\n(clé privée de l\'hôte)\n-----END OPENSSH PRIVATE KEY-----\n', 0o600);
      put('/etc/ssh/ssh_host_ed25519_key.pub', 'ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAI' + this.hostname.toUpperCase() + 'HOSTKEY root@' + this.hostname + '\n', 0o644);
      put('/etc/sudoers', MAN_SUDOERS, 0o440);
      put('/etc/os-release', 'PRETTY_NAME="Debian GNU/Linux 12 (bookworm)"\nNAME="Debian GNU/Linux"\nVERSION_ID="12"\nVERSION="12 (bookworm)"\nID=debian\nHOME_URL="https://www.debian.org/"\n');
      put('/etc/debian_version', '12.2\n');
      put('/etc/fstab', '# <file system> <mount point>   <type>  <options>       <dump>  <pass>\nUUID=3f1c7a2e-1b0d-4c55-9a8e-6d2f0c1b7e41 /               ext4    errors=remount-ro 0       1\nUUID=8a7d1f4c-55b2-4e1a-9c3d-2b6f7e9a0c13 none            swap    sw              0       0\n');
      put('/etc/bash.bashrc', '# System-wide .bashrc file for interactive bash(1) shells.\n[ -z "$PS1" ] && return\nshopt -s checkwinsize\n');
      put('/etc/profile', '# /etc/profile: system-wide .profile file for the Bourne shell (sh(1))\n');
      put('/etc/shells', '# /etc/shells: valid login shells\n/bin/sh\n/usr/bin/sh\n/bin/bash\n/usr/bin/bash\n');
      put('/etc/apt/sources.list', 'deb http://deb.debian.org/debian bookworm main\ndeb http://security.debian.org/debian-security bookworm-security main\ndeb http://deb.debian.org/debian bookworm-updates main\n');
      put('/etc/crontab', '# /etc/crontab: system-wide crontab\nSHELL=/bin/sh\n17 *\t* * *\troot\tcd / && run-parts --report /etc/cron.hourly\n');
      put('/etc/login.defs', 'PASS_MAX_DAYS\t99999\nPASS_MIN_DAYS\t0\nPASS_WARN_AGE\t7\nUID_MIN\t\t\t 1000\nUID_MAX\t\t\t60000\nUMASK\t\t022\n');
      put('/etc/ssl/private/ssl-cert-snakeoil.key', '-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n', 0o640);
      put('/etc/ssl/openssl.cnf', '# OpenSSL configuration file.\n');
      put('/etc/adduser.conf', 'DSHELL=/bin/bash\nDHOME=/home\nFIRST_UID=1000\nDIR_MODE=0755\n');
      put('/etc/nsswitch.conf', 'passwd:         files systemd\ngroup:          files systemd\nshadow:         files\nhosts:          files dns\n');
      put('/etc/host.conf', 'multi on\n');
      put('/etc/ld.so.conf', 'include /etc/ld.so.conf.d/*.conf\n');
      put('/etc/sysctl.conf', '#net.ipv4.ip_forward=1\n');
      put('/etc/ca-certificates.conf', 'mozilla/ISRG_Root_X1.crt\n');
      put('/etc/deluser.conf', 'REMOVE_HOME = 0\n');
      put('/etc/gai.conf', '# Configuration for getaddrinfo(3).\n');
      put('/etc/mke2fs.conf', '[defaults]\n\tbase_features = sparse_super,large_file,filetype,resize_inode,dir_index,ext_attr\n');
      put('/etc/pam.conf', '# /etc/pam.conf\n');
      put('/etc/rsyslog.conf', '# /etc/rsyslog.conf configuration file\n');
      put('/etc/ucf.conf', '# ucf.conf\n');
      put('/etc/xattr.conf', '# /etc/xattr.conf\n');
      mk('/etc/security'); put('/etc/security/limits.conf', '# /etc/security/limits.conf\n'); put('/etc/security/access.conf', '# Login access control table.\n');
      mk('/etc/systemd'); put('/etc/systemd/journald.conf', '[Journal]\n#Storage=auto\n'); put('/etc/systemd/logind.conf', '[Login]\n');
      put('/etc/default/ufw', 'IPV6=yes\nDEFAULT_INPUT_POLICY="DROP"\nDEFAULT_OUTPUT_POLICY="ACCEPT"\n');
      put('/var/www/html/index.html', '<!DOCTYPE html>\n<html><head><title>Apache2 Debian Default Page</title></head><body>It works!</body></html>\n', 0o644, 33, 33);
      put('/var/log/syslog', '', 0o640, 0, 4);
      put('/var/log/auth.log', '', 0o640, 0, 4);
      put('/var/log/dpkg.log', '2026-09-01 10:02:11 status installed tree:amd64 2.1.0-1\n', 0o644);
      put('/var/log/btmp', '', 0o660, 0, 43);
      put('/var/log/wtmp', '', 0o664, 0, 43);
      mk('/proc');
    }
    splitPath(p) { return p.split('/').filter((x) => x && x !== '.'); }
    normPath(p, cwd) {
      if (!p.startsWith('/')) p = (cwd || '/') + '/' + p;
      const out = [];
      for (const part of p.split('/')) {
        if (!part || part === '.') continue;
        if (part === '..') out.pop(); else out.push(part);
      }
      return '/' + out.join('/');
    }
    mkdirp(path, mode, uid, gid) {
      let cur = this.root;
      for (const part of this.splitPath(path)) {
        if (!cur.ch[part]) cur.ch[part] = dir(mode == null ? 0o755 : mode, uid || 0, gid || 0);
        cur = cur.ch[part];
      }
      return cur;
    }
    resolveRaw(path) {
      let cur = this.root;
      for (const part of this.splitPath(path)) {
        if (part === '..') continue;
        if (!cur || cur.t !== 'd') return null;
        cur = cur.ch[part];
        if (cur && cur.t === 'l') cur = this.resolveRaw(cur.target.startsWith('/') ? cur.target : '/');
      }
      return cur || null;
    }
    // Résolution avec contrôle des droits (traversée = x sur chaque répertoire)
    lookup(path, cred, cwd, opts) {
      opts = opts || {};
      const abs = this.normPath(path, cwd);
      if (abs.startsWith('/proc/')) this.refreshProc();
      const parts = this.splitPath(abs);
      let cur = this.root, parent = null, name = '/';
      for (let i = 0; i < parts.length; i++) {
        if (cur.t !== 'd') throw new FsError('ENOTDIR', abs);
        if (!this.can(cur, cred, 1)) throw new FsError('EACCES', abs);
        parent = cur; name = parts[i];
        let next = cur.ch[name];
        const last = i === parts.length - 1;
        if (next && next.t === 'l' && (!last || opts.follow !== false)) {
          const tgt = next.target.startsWith('/') ? next.target : this.normPath(next.target, '/' + parts.slice(0, i).join('/'));
          next = this.lookup(tgt, cred, '/', {}).node;
        }
        if (!next) {
          if (last && opts.parent) return { node: null, parent, name, abs };
          throw new FsError('ENOENT', abs);
        }
        cur = next;
      }
      return { node: cur, parent, name, abs };
    }
    can(node, cred, bit) {
      if (!node) return false;
      if (cred.uid === 0) {
        if (bit === 1 && node.t !== 'd') return (node.mode & 0o111) !== 0;
        return true;
      }
      let sh;
      if (node.uid === cred.uid) sh = 6;
      else if (cred.groups.includes(node.gid)) sh = 3;
      else sh = 0;
      return ((node.mode >> sh) & bit) !== 0;
    }
    newFile(parent, name, content, cred, umask) {
      const gid = parent.mode & 0o2000 ? parent.gid : cred.gid;
      const f = file(content, 0o666 & ~umask, cred.uid, gid);
      parent.ch[name] = f; parent.mtime = now();
      return f;
    }
    newDir(parent, name, cred, umask) {
      const sg = parent.mode & 0o2000;
      const d = dir((0o777 & ~umask) | (sg ? 0o2000 : 0), cred.uid, sg ? parent.gid : cred.gid);
      parent.ch[name] = d; parent.mtime = now();
      return d;
    }
    size(node) {
      if (node.t === 'd') return 4096;
      if (node.t === 'l') return node.target.length;
      if (node.bin) return 138208 + (node.bin.length * 7919) % 90000;
      if (node.fakeSize) return node.fakeSize;
      return new TextEncoder().encode(node.c || '').length;
    }
    totalSize(node) {
      if (node.t !== 'd') return Math.max(this.size(node), 0);
      let s = 4096;
      for (const k in node.ch) s += this.totalSize(node.ch[k]);
      return s;
    }
    readFile(path) { const n = this.resolveRaw(path); return n && n.t === 'f' ? n.c : null; }
    writeFile(path, content, mode, uid, gid) {
      const n = this.resolveRaw(path);
      if (n && n.t === 'f') { n.c = content; n.mtime = now(); return n; }
      return this._put(path, content, mode, uid, gid);
    }
    removePath(path) {
      const parts = this.splitPath(path); const name = parts.pop();
      const parent = this.resolveRaw('/' + parts.join('/'));
      if (parent && parent.ch[name]) delete parent.ch[name];
    }
    // /proc dynamique
    refreshProc() {
      const procDir = this.resolveRaw('/proc');
      for (const k of Object.keys(procDir.ch)) if (/^\d+$/.test(k)) delete procDir.ch[k];
      for (const p of this.procs.values()) {
        const d = dir(0o555, p.uid, this.userByUid(p.uid) ? this.userByUid(p.uid).gid : 0);
        const u = this.userByUid(p.uid);
        const st = { R: 'R (running)', S: 'S (sleeping)', T: 'T (stopped)', Z: 'Z (zombie)', I: 'I (idle)', D: 'D (disk sleep)' }[p.state] || 'S (sleeping)';
        d.ch.status = file('Name:\t' + p.comm + '\nUmask:\t0022\nState:\t' + st + '\nTgid:\t' + p.pid + '\nPid:\t' + p.pid + '\nPPid:\t' + p.ppid + '\nUid:\t' + p.uid + '\t' + p.uid + '\t' + p.uid + '\t' + p.uid + '\nGid:\t' + (u ? u.gid : 0) + '\t' + (u ? u.gid : 0) + '\t' + (u ? u.gid : 0) + '\t' + (u ? u.gid : 0) + '\nVmRSS:\t' + p.rss + ' kB\nThreads:\t' + (p.threads || 1) + '\n', 0o444, p.uid, 0);
        d.ch.cmdline = file(p.cmd.replace(/ /g, '\u0000'), 0o444, p.uid, 0);
        d.ch.comm = file(p.comm + '\n', 0o644, p.uid, 0);
        d.ch.cwd = { t: 'l', mode: 0o777, uid: p.uid, gid: 0, mtime: now(), target: p.cwd || '/' };
        d.ch.environ = file('', 0o400, p.uid, 0);
        procDir.ch[String(p.pid)] = d;
      }
      procDir.ch.self = { t: 'l', mode: 0o777, uid: 0, gid: 0, mtime: now(), target: '/proc' };
      procDir.ch.cpuinfo = file('processor\t: 0\nmodel name\t: Intel(R) Core(TM) i5 (virtuel)\ncpu cores\t: 2\n\nprocessor\t: 1\nmodel name\t: Intel(R) Core(TM) i5 (virtuel)\ncpu cores\t: 2\n', 0o444, 0, 0);
      procDir.ch.meminfo = file('MemTotal:        4028340 kB\nMemFree:         1825120 kB\nMemAvailable:    2950012 kB\n', 0o444, 0, 0);
      procDir.ch.uptime = file(((now() - this.booted) / 1000).toFixed(2) + ' 7012.33\n', 0o444, 0, 0);
      procDir.ch.version = file('Linux version 6.1.0-13-amd64 (debian-kernel@lists.debian.org) (gcc-12 (Debian 12.2.0-14) 12.2.0) #1 SMP PREEMPT_DYNAMIC Debian 6.1.55-1\n', 0o444, 0, 0);
    }

    /* ===================== utilisateurs ===================== */
    buildUsers(opts) {
      const sysUsers = [
        ['root', 0, 0, 'root', '/root', '/bin/bash'], ['daemon', 1, 1, 'daemon', '/usr/sbin', '/usr/sbin/nologin'], ['bin', 2, 2, 'bin', '/bin', '/usr/sbin/nologin'], ['sys', 3, 3, 'sys', '/dev', '/usr/sbin/nologin'],
        ['sync', 4, 65534, 'sync', '/bin', '/bin/sync'], ['man', 6, 12, 'man', '/var/cache/man', '/usr/sbin/nologin'], ['mail', 8, 8, 'mail', '/var/mail', '/usr/sbin/nologin'],
        ['www-data', 33, 33, 'www-data', '/var/www', '/usr/sbin/nologin'], ['nobody', 65534, 65534, 'nobody', '/nonexistent', '/usr/sbin/nologin'],
        ['systemd-network', 998, 998, 'systemd Network Management', '/', '/usr/sbin/nologin'], ['messagebus', 100, 107, '', '/nonexistent', '/usr/sbin/nologin'],
        ['sshd', 101, 65534, '', '/run/sshd', '/usr/sbin/nologin'], ['mysql', 102, 110, 'MySQL Server', '/nonexistent', '/bin/false']
      ];
      for (const [name, uid, gid, gecos, home, shell] of sysUsers) this.users.push({ name, uid, gid, gecos, home, shell, pw: uid === 0 ? 'root' : null, locked: uid !== 0, maxDays: 99999, lastChange: 19600 });
      const groups = [['root', 0], ['daemon', 1], ['bin', 2], ['sys', 3], ['adm', 4], ['tty', 5], ['disk', 6], ['mail', 8], ['man', 12], ['cdrom', 24], ['sudo', 27], ['audio', 29], ['www-data', 33], ['plugdev', 46], ['shadow', 42], ['utmp', 43], ['users', 100], ['messagebus', 107], ['mysql', 110], ['systemd-network', 998], ['nogroup', 65534]];
      for (const [name, gid] of groups) this.groups.push({ name, gid, members: [] });
      const me = opts.user || 'etudiant';
      this.addUser(me, { uid: 1000, gecos: 'Etudiant ESEO,,,', pw: opts.password || 'etudiant', quiet: true });
      for (const g of ['cdrom', 'sudo', 'audio', 'plugdev', 'users']) this.group(g).members.push(me);
      this.syncEtc();
    }
    addUser(name, o) {
      o = o || {};
      const uid = o.uid || Math.max(999, ...this.users.filter((u) => u.uid >= 1000 && u.uid < 60000).map((u) => u.uid)) + 1;
      let gid = uid;
      while (this.groupByGid(gid)) gid++;
      this.groups.push({ name, gid, members: [] });
      const u = { name, uid, gid, gecos: o.gecos || ',,,', home: '/home/' + name, shell: '/bin/bash', pw: o.pw || null, locked: false, maxDays: 99999, lastChange: Math.floor(now() / 86400000) };
      this.users.push(u);
      const home = this.mkdirp('/home/' + name, 0o755, uid, gid);
      home.mode = 0o755; home.uid = uid; home.gid = gid;
      const mkf = (n, c) => { home.ch[n] = file(c, 0o644, uid, gid); };
      mkf('.bashrc', BASHRC); mkf('.profile', '# ~/.profile: executed by the command interpreter for login shells.\nif [ -n "$BASH_VERSION" ]; then\n    if [ -f "$HOME/.bashrc" ]; then\n\t. "$HOME/.bashrc"\n    fi\nfi\n'); mkf('.bash_logout', '# ~/.bash_logout: executed by bash(1) when login shell exits.\n');
      if (o.quiet) {
        for (const d of ['Bureau', 'Documents', 'Images', 'Musique', 'Téléchargements', 'Vidéos', 'Modèles', 'Public']) home.ch[d] = dir(0o755, uid, gid);
      }
      this.syncEtc();
      return u;
    }
    user(name) { return this.users.find((u) => u.name === name); }
    userByUid(uid) { return this.users.find((u) => u.uid === uid); }
    group(name) { return this.groups.find((g) => g.name === name); }
    groupByGid(gid) { return this.groups.find((g) => g.gid === gid); }
    uname(uid) { const u = this.userByUid(uid); return u ? u.name : String(uid); }
    gname(gid) { const g = this.groupByGid(gid); return g ? g.name : String(gid); }
    userGids(name) {
      const u = this.user(name); if (!u) return [];
      return [u.gid].concat(this.groups.filter((g) => g.members.includes(name) && g.gid !== u.gid).map((g) => g.gid));
    }
    credFor(name, gidOverride) {
      const u = this.user(name);
      const gids = this.userGids(name);
      const gid = gidOverride != null ? gidOverride : u.gid;
      if (!gids.includes(gid)) gids.unshift(gid);
      return { uid: u.uid, gid, groups: gids, name };
    }
    syncEtc() {
      const pw = this.users.map((u) => [u.name, 'x', u.uid, u.gid, u.gecos, u.home, u.shell].join(':')).join('\n') + '\n';
      const gr = this.groups.map((g) => [g.name, 'x', g.gid, g.members.join(',')].join(':')).join('\n') + '\n';
      const sh = this.users.map((u) => {
        let h = u.pw ? '$y$j9T$' + hash(u.name + 'salt').slice(0, 22) + '$' + hash(u.pw + u.name) : (u.uid < 1000 && u.uid !== 0 ? '*' : '!');
        if (u.locked && u.pw) h = '!' + h;
        return [u.name, h, u.lastChange, 0, u.maxDays, 7, '', '', ''].join(':');
      }).join('\n') + '\n';
      const gsh = this.groups.map((g) => [g.name, '*', '', g.members.join(',')].join(':')).join('\n') + '\n';
      const set = (p, c, m, gid) => { const n = this.resolveRaw(p); if (n) { n.c = c; n.mtime = now(); } else this._put(p, c, m, 0, gid || 0); };
      set('/etc/passwd', pw, 0o644); set('/etc/group', gr, 0o644); set('/etc/shadow', sh, 0o640, 42); set('/etc/gshadow', gsh, 0o640, 42);
    }

    /* ===================== processus ===================== */
    buildProcs(opts) {
      const P = (pid, ppid, user, cmd, o) => this.addProc(Object.assign({ pid, ppid, uid: this.user(user).uid, cmd, state: 'S', tty: '?', start: this.booted + Math.min(pid, 2000) * 40 }, o || {}));
      P(1, 0, 'root', '/sbin/init', { comm: 'systemd', leader: true, reaper: true, rss: 12040, vsz: 168420, start: this.booted });
      P(2, 0, 'root', '[kthreadd]', { rss: 0, vsz: 0 });
      P(14, 2, 'root', '[rcu_sched]', { state: 'I', rss: 0, vsz: 0 });
      P(22, 2, 'root', '[kworker/0:1-events]', { state: 'I', rss: 0, vsz: 0 });
      P(301, 1, 'root', '/lib/systemd/systemd-journald', { comm: 'systemd-journal', leader: true, rss: 15200, vsz: 49840 });
      P(330, 1, 'root', '/lib/systemd/systemd-udevd', { comm: 'systemd-udevd', leader: true, rss: 6400, vsz: 25400 });
      P(520, 1, 'messagebus', '/usr/bin/dbus-daemon --system --address=systemd: --nofork --nopidfile --systemd-activation --syslog-only', { comm: 'dbus-daemon', leader: true, rss: 5000, vsz: 9200 });
      P(530, 1, 'root', '/lib/systemd/systemd-logind', { comm: 'systemd-logind', leader: true, rss: 7300, vsz: 17000 });
      P(900, 1, 'etudiant', '/lib/systemd/systemd --user', { comm: 'systemd', leader: true, reaper: true, rss: 10200, vsz: 18900 });
      if (!opts.server) {
        P(1100, 900, 'etudiant', '/usr/bin/gnome-shell', { comm: 'gnome-shell', leader: true, threads: 12, rss: 245000, vsz: 4022100, cpu: 1.2 });
        P(1180, 900, 'etudiant', '/usr/libexec/gnome-terminal-server', { comm: 'gnome-terminal-', threads: 4, rss: 52000, vsz: 610000 });
        P(2210, 1100, 'etudiant', '/usr/lib/firefox-esr/firefox-esr', { comm: 'firefox-esr', threads: 60, rss: 190220, vsz: 912340, cpu: 12.5 });
      }
    }
    addProc(o) {
      const p = Object.assign({ state: 'S', nice: 0, tty: '?', comm: null, rss: 3500, vsz: 8000, start: now(), cpu: 0, threads: 1 }, o);
      if (!p.comm) { const f = p.cmd.split(' ')[0]; p.comm = f.startsWith('[') ? f.replace(/[[\]]/g, '') : f.replace(/^.*\//, ''); }
      p.comm = p.comm.slice(0, 15);
      p.cwd = p.cwd || '/';
      this.procs.set(p.pid, p);
      return p;
    }
    allocPid() { do { this.nextPid += 1 + Math.floor(Math.random() * 3); } while (this.procs.has(this.nextPid)); return this.nextPid; }
    spawn(o) { return this.addProc(Object.assign({ pid: this.allocPid() }, o)); }
    proc(pid) { return this.procs.get(pid); }
    children(pid) { return [...this.procs.values()].filter((p) => p.ppid === pid); }
    // fin d'un processus : zombie si le parent ne lit pas son code, sinon disparaît
    exitProc(pid, status) {
      const p = this.procs.get(pid);
      if (!p || p.state === 'Z') return;
      p.exitStatus = status;
      (this.lastExit = this.lastExit || {})[pid] = status;
      if (p.impl && p.impl.dispose) p.impl.dispose();
      for (const c of this.children(pid)) {
        c.ppid = 1;
        if (c.state === 'Z') this.procs.delete(c.pid);
      }
      const parent = this.procs.get(p.ppid);
      if (parent && !parent.reaper && !parent.isShell) {
        p.state = 'Z'; p.zombieCmd = p.cmd; p.cmd = '[' + p.comm + '] <defunct>';
      } else this.procs.delete(pid);
      for (const w of p.waiters || []) w(status);
      p.waiters = [];
      this.emit('exit', { pid, status, proc: p });
    }
    waitProc(p) {
      if (!this.procs.has(p.pid) || p.state === 'Z') return Promise.resolve(p.exitStatus);
      return new Promise((res) => { (p.waiters = p.waiters || []).push(res); });
    }
    // Envoi de signal. Retourne null si OK, sinon code d'erreur ('ESRCH' | 'EPERM')
    signal(pid, sig, cred) {
      const p = this.procs.get(pid);
      if (!p) return 'ESRCH';
      if (cred && cred.uid !== 0 && cred.uid !== p.uid) return 'EPERM';
      if (sig === 0) return null;
      if (p.kernel) return null;
      this.emit('signal', { pid, sig, proc: p, cred });
      if (p.state === 'Z') return null;
      if (pid === 1 && sig !== 18) return null; // init ignore
      if (sig === 19 || sig === 20 || sig === 21 || sig === 22) {
        if (sig !== 19 && p.isShell && p.interactive) return null;
        if (sig === 20 && p.traps && p.traps[20] != null) { p.trapHit && p.trapHit(20); return null; }
        if (p.state !== 'T') { p.prevState = p.state; p.state = 'T'; if (p.impl && p.impl.pause) p.impl.pause(); this.emit('stopped', { pid, proc: p }); }
        return null;
      }
      if (sig === 18) {
        if (p.state === 'T') {
          p.state = p.prevState || 'S'; if (p.impl && p.impl.resume) p.impl.resume(); this.emit('continued', { pid, proc: p });
          if (p.pendingFatal) { const s2 = p.pendingFatal; p.pendingFatal = null; return this.signal(pid, s2, null); }
        }
        return null;
      }
      // un processus suspendu ne traite un signal fatal (hors SIGKILL) qu'à sa reprise
      if (p.state === 'T' && sig !== 9 && !(p.traps && p.traps[sig] === '') && !(sig === 1 && p.nohup)) { p.pendingFatal = sig; this.emit('pending', { pid, sig, proc: p }); return null; }
      if (sig === 17 || sig === 28 || sig === 23) return null; // ignorés par défaut
      if (sig === 1 && p.nohup) return null;
      if (sig !== 9 && p.traps && p.traps[sig] != null) {
        if (p.traps[sig] === '') return null; // ignoré
        p.trapHit && p.trapHit(sig); return null;
      }
      if (p.isShell && p.interactive && (sig === 15 || sig === 2 || sig === 3)) return null; // bash interactif ignore SIGTERM/SIGINT
      if (p.onKill) { p.onKill(sig); return null; }
      this.exitProc(pid, 128 + sig);
      return null;
    }
    // part de CPU des processus actifs (2 cœurs, pondération par nice)
    cpuShares() {
      const hogs = [...this.procs.values()].filter((p) => p.state === 'R' && p.hog);
      const cores = [[], []];
      for (const p of hogs.filter((h) => h.cpu0 != null)) cores[p.cpu0].push(p);
      for (const p of hogs.filter((h) => h.cpu0 == null)) { (cores[0].length <= cores[1].length ? cores[0] : cores[1]).push(p); }
      const share = new Map();
      for (const c of cores) {
        const w = c.map((p) => 1024 / Math.pow(1.25, p.nice));
        const tot = w.reduce((a, b) => a + b, 0);
        c.forEach((p, i) => share.set(p.pid, (99.7 * w[i]) / tot));
      }
      return share;
    }
    cpuOf(p, shares) {
      if (p.hog) return p.state === 'R' ? (shares || this.cpuShares()).get(p.pid) || 0 : 0;
      if (p.state === 'T' || p.state === 'Z') return 0;
      return p.cpu || 0;
    }
    // temps CPU cumulé (secondes)
    cpuTime(p) {
      let t = p.cpuAcc || 0;
      if (p.hog && p.state === 'R' && p.runSince) t += ((now() - p.runSince) / 1000) * (this.cpuOf(p) / 100);
      if (!p.hog) t += ((now() - p.start) / 1000) * ((p.cpu || 0) / 100);
      return t;
    }

    /* ===================== services ===================== */
    buildServices() {
      const S = (name, o) => { this.services[name] = Object.assign({ name, active: false, enabled: false, pid: null }, o); };
      S('ssh', { fixedPid: 812, desc: 'OpenBSD Secure Shell server', pkg: 'openssh-server', cmd: 'sshd: /usr/sbin/sshd -D [listener] 0 of 10-100 startups', comm: 'sshd', ports: [['tcp', '0.0.0.0', 22], ['tcp', '[::]', 22]], enabled: true, aliases: ['sshd'] });
      S('cron', { desc: 'Regular background program processing daemon', cmd: '/usr/sbin/cron -f', comm: 'cron', enabled: true, fixedPid: 640 });
      S('cups', { desc: 'CUPS Scheduler', pkg: 'cups', cmd: '/usr/sbin/cupsd -l', comm: 'cupsd', ports: [['tcp', '127.0.0.1', 631], ['tcp', '[::1]', 631]], enabled: true });
      S('networking', { desc: 'Raise network interfaces', oneshot: true, enabled: true });
      S('ufw', { desc: 'Uncomplicated firewall', pkg: 'ufw', oneshot: true, enabled: true });
      S('fail2ban', { desc: 'Fail2Ban Service', pkg: 'fail2ban', cmd: '/usr/bin/python3 /usr/bin/fail2ban-server -xf start', comm: 'fail2ban-server', enabled: true });
      S('apache2', { desc: 'The Apache HTTP Server', pkg: 'apache2', cmd: '/usr/sbin/apache2 -k start', comm: 'apache2', ports: [['tcp', '*', 80]], enabled: true });
      S('mariadb', { desc: 'MariaDB 10.11.4 database server', pkg: 'mariadb-server', cmd: '/usr/sbin/mariadbd', comm: 'mariadbd', user: 'mysql', ports: [['tcp', '127.0.0.1', 3306]], enabled: true, aliases: ['mysql'] });
      S('unattended-upgrades', { desc: 'Unattended Upgrades Shutdown', pkg: 'unattended-upgrades', cmd: '/usr/bin/python3 /usr/share/unattended-upgrades/unattended-upgrade-shutdown --wait-for-signal', comm: 'unattended-upgr', enabled: true });
      S('avahi-daemon', { desc: 'Avahi mDNS/DNS-SD Stack', cmd: 'avahi-daemon: running [' + this.hostname + '.local]', comm: 'avahi-daemon', ports: [['udp', '0.0.0.0', 5353]], enabled: true, user: 'root' });
      S('systemd-journald', { desc: 'Journal Service', static: true, enabled: true, fixedPid: 301, active: true, pid: 301 });
      for (const s of Object.values(this.services)) {
        if (s.static) continue;
        if (s.pkg && !this.installed.has(s.pkg)) { s.enabled = false; continue; }
        if (s.enabled) this.startService(s.name, true);
      }
    }
    service(name) {
      name = name.replace(/\.service$/, '');
      if (this.services[name]) return this.services[name];
      return Object.values(this.services).find((s) => (s.aliases || []).includes(name)) || null;
    }
    startService(name, boot) {
      const s = this.service(name);
      if (!s) return false;
      if (s.pkg && !this.installed.has(s.pkg)) return false;
      if (s.active && !s.oneshot) return true;
      if (s.name === 'ssh') { const err = this.sshdCheck(); if (err) { s.active = false; s.failed = true; this.log('ssh', 'sshd[' + this.nextPid + ']: ' + err); this.log('systemd', 'ssh.service: Failed with result \'exit-code\'.'); return false; } }
      s.failed = false;
      s.active = true; s.since = boot ? this.booted + 2500 : now();
      if (s.oneshot) { if (s.name === 'networking' && !boot) this.applyNetworkConfig(false); return true; }
      const pid = boot && s.fixedPid ? s.fixedPid : this.allocPid();
      this.addProc({ pid, ppid: 1, uid: s.user ? this.user(s.user).uid : 0, cmd: s.cmd, comm: s.comm, state: 'S', tty: '?', leader: true, rss: 6000 + (pid % 5000), vsz: 15000 + (pid % 9000), service: s.name, start: boot ? this.booted + 2000 : now() });
      if (s.name === 'apache2') { for (let i = 0; i < 2; i++) this.addProc({ pid: this.allocPid(), ppid: pid, uid: 33, cmd: '/usr/sbin/apache2 -k start', comm: 'apache2', service: s.name }); }
      if (s.name === 'ssh') this.sshdConfigLoaded = this.readFile('/etc/ssh/sshd_config');
      s.pid = pid;
      this.log(s.name === 'ssh' ? 'ssh' : s.name, (s.name === 'ssh' ? 'sshd[' + pid + ']: Server listening on 0.0.0.0 port ' + this.sshdOpt('port', '22') + '.' : 'Started ' + s.desc + '.'));
      return true;
    }
    stopService(name) {
      const s = this.service(name);
      if (!s) return false;
      if (s.pid) { for (const c of this.children(s.pid)) this.procs.delete(c.pid); this.procs.delete(s.pid); }
      s.pid = null; s.active = false;
      if (s.name === 'ufw') this.ufw.enabled = false;
      this.log('systemd', 'Stopped ' + s.desc + '.');
      return true;
    }
    sshdOpt(key, def) {
      const txt = (this.sshdConfigLoaded != null ? this.sshdConfigLoaded : this.readFile('/etc/ssh/sshd_config')) || '';
      let val = null;
      for (const line of txt.split('\n')) {
        const m = /^\s*([A-Za-z]+)\s+(.*?)\s*$/.exec(line);
        if (m && m[1].toLowerCase() === key.toLowerCase() && val === null) val = m[2];
      }
      return val === null ? def : val;
    }
    sshdCheck(txt) {
      txt = txt != null ? txt : this.readFile('/etc/ssh/sshd_config');
      if (txt == null) return '/etc/ssh/sshd_config: No such file or directory';
      const lines = txt.split('\n');
      for (let i = 0; i < lines.length; i++) {
        const l = lines[i].trim();
        if (!l || l.startsWith('#')) continue;
        const m = /^([A-Za-z0-9]+)(?:\s+|\s*=\s*)(.*)$/.exec(l);
        if (!m) return '/etc/ssh/sshd_config line ' + (i + 1) + ': garbage at end of line';
        if (!SIM.SSHD_KEYWORDS.includes(m[1].toLowerCase())) return '/etc/ssh/sshd_config: line ' + (i + 1) + ': Bad configuration option: ' + m[1];
        if (!m[2]) return '/etc/ssh/sshd_config line ' + (i + 1) + ': missing argument.';
        const k = m[1].toLowerCase(), v = m[2].toLowerCase();
        if (['permitrootlogin'].includes(k) && !['yes', 'no', 'prohibit-password', 'without-password', 'forced-commands-only'].includes(v)) return '/etc/ssh/sshd_config line ' + (i + 1) + ': unsupported option "' + m[2] + '".';
        if (['passwordauthentication', 'pubkeyauthentication', 'usepam', 'x11forwarding', 'printmotd', 'permitemptypasswords', 'kbdinteractiveauthentication'].includes(k) && !['yes', 'no'].includes(v)) return '/etc/ssh/sshd_config line ' + (i + 1) + ': Bad yes/no argument: ' + m[2];
        if (k === 'port' && !(/^\d+$/.test(v) && +v > 0 && +v < 65536)) return '/etc/ssh/sshd_config line ' + (i + 1) + ': Badly formatted port number.';
      }
      return null;
    }
    log(unit, msg, t) {
      this.journal.push({ t: t || now(), unit, msg });
      if (unit === 'ssh' || unit === 'sudo' || unit === 'su') {
        const n = this.resolveRaw('/var/log/auth.log');
        if (n) n.c += fmtLogDate(t || now()) + ' ' + this.hostname + ' ' + msg + '\n';
      }
    }

    /* ===================== paquets ===================== */
    installPkgFiles(name) {
      const p = PKGS[name]; if (!p) return;
      for (const f of p.files) {
        if (this.resolveRaw(f)) continue;
        const bin = /\/s?bin\//.test(f);
        const n = this._put(f, bin ? '\x7fELF' : (f.endsWith('.conf') ? '# ' + f + '\n' : ''), bin ? 0o755 : 0o644);
        if (bin) n.bin = f.replace(/^.*\//, '').replace(/-esr$/, '');
      }
      for (const b of p.bins) { const where = this.resolveRaw('/usr/bin/' + b) || this.resolveRaw('/usr/sbin/' + b); if (!where) { this._put('/usr/bin/' + b, '\x7fELF', 0o755).bin = b; } }
      if (name === 'fail2ban') {
        this._mk('/etc/fail2ban', 0o755);
        this.writeFile('/etc/fail2ban/jail.conf', '# WARNING: heavily refactored in 0.9.0 release.\n# Don\'t edit this file: use jail.local\n\n[DEFAULT]\nbantime  = 10m\nfindtime  = 10m\nmaxretry = 5\n\n[sshd]\nport    = ssh\nlogpath = %(sshd_log)s\nbackend = %(sshd_backend)s\n');
      }
    }
    isInstalledCmd(name) {
      for (const [pk, p] of Object.entries(PKGS)) if (p.bins.includes(name) && !this.installed.has(pk)) return false;
      return true;
    }
    pkgForCmd(name) { for (const [pk, p] of Object.entries(PKGS)) if (p.bins.includes(name)) return pk; return null; }

    /* ===================== réseau ===================== */
    iface(name) { return this.net.ifaces.find((i) => i.name === name); }
    // relit /etc/network/interfaces (démarrage, systemctl restart networking)
    applyNetworkConfig(boot) {
      const txt = this.readFile('/etc/network/interfaces') || '';
      const eth = this.iface('enp0s3');
      const conf = parseInterfaces(txt);
      const c = conf.enp0s3;
      eth.addrs = []; this.net.gateway = null; eth.dhcp = false;
      if (!c) { eth.up = !!(conf.autoList || []).includes('enp0s3') && false; return; }
      eth.up = true;
      if (c.method === 'dhcp') {
        eth.addrs = [this.net.lanIp + '/24']; eth.dhcp = true; this.net.gateway = '192.168.1.1';
        if (boot || true) { const rc = this.resolveRaw('/etc/resolv.conf'); if (rc && !this.resolvLocked) rc.c = 'nameserver 192.168.1.1\n'; }
      } else if (c.method === 'static') {
        let a = c.address || '';
        if (a && !a.includes('/') && c.netmask) a += '/' + maskToCidr(c.netmask);
        if (a) eth.addrs = [a.includes('/') ? a : a + '/32'];
        this.net.gateway = c.gateway || null;
        if (c.dns && c.dns.length) { const rc = this.resolveRaw('/etc/resolv.conf'); if (rc) rc.c = c.dns.map((d) => 'nameserver ' + d).join('\n') + '\n'; }
      }
      this.extraRoutes = [];
    }
    routes() {
      const r = [];
      for (const i of this.net.ifaces) {
        if (!i.up || i.loopback) continue;
        for (const a of i.addrs) { const n = netOf(a); r.push({ dst: n.net + '/' + n.cidr, dev: i.name, src: a.split('/')[0], proto: 'kernel', scope: 'link' }); }
      }
      if (this.net.gateway) {
        const via = this.net.gateway;
        const dev = this.net.ifaces.find((i) => i.up && !i.loopback && i.addrs.some((a) => inNet(via, a)));
        if (dev) r.unshift({ dst: 'default', via, dev: dev.name, proto: this.iface('enp0s3').dhcp ? 'dhcp' : 'static' });
      }
      return r.concat(this.extraRoutes || []);
    }
    myIps() { const out = []; for (const i of this.net.ifaces) if (i.up) for (const a of i.addrs) out.push(a.split('/')[0]); return out; }
    dnsServers() {
      const t = this.readFile('/etc/resolv.conf') || '';
      return t.split('\n').map((l) => /^\s*nameserver\s+(\S+)/.exec(l)).filter(Boolean).map((m) => m[1]);
    }
    hostsLookup(name) {
      const t = this.readFile('/etc/hosts') || '';
      for (const l of t.split('\n')) {
        const s = l.replace(/#.*/, '').trim().split(/\s+/);
        if (s.length >= 2 && s.slice(1).includes(name)) return s[0];
      }
      return null;
    }
    // Peut-on joindre l'IP ? retourne {ok, err, hops}
    route(ip) {
      if (/^127\./.test(ip) || this.myIps().includes(ip)) return { ok: true, local: true, dev: 'lo' };
      const lan = this.net.ifaces.find((i) => i.up && !i.loopback && i.addrs.some((a) => inNet(ip, a)));
      if (lan) return { ok: true, lan: true, dev: lan.name };
      const gw = this.routes().find((r) => r.dst === 'default');
      if (!gw) return { ok: false, err: 'unreachable' };
      return { ok: true, via: gw.via, dev: gw.dev };
    }
  }

  function hash(s) { let h = 2166136261 >>> 0; let out = ''; for (let k = 0; k < 6; k++) { for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i) + k; h = Math.imul(h, 16777619) >>> 0; } out += h.toString(36); } return out.replace(/[^a-z0-9]/g, '').slice(0, 43).padEnd(43, 'x'); }
  function fmtLogDate(t) { const d = new Date(t); return d.toISOString().slice(0, 19) + '+02:00'; }
  function parseInterfaces(txt) {
    const out = {}; let cur = null; out.autoList = [];
    for (const raw of txt.split('\n')) {
      const l = raw.replace(/#.*/, '').trim();
      if (!l) continue;
      const w = l.split(/\s+/);
      if (w[0] === 'auto' || w[0] === 'allow-hotplug') { out.autoList.push(...w.slice(1)); continue; }
      if (w[0] === 'iface') { cur = out[w[1]] = { method: w[3], dns: [] }; continue; }
      if (cur) {
        if (w[0] === 'address') cur.address = w[1];
        else if (w[0] === 'netmask') cur.netmask = w[1];
        else if (w[0] === 'gateway') cur.gateway = w[1];
        else if (w[0] === 'dns-nameservers') cur.dns = w.slice(1);
      }
    }
    return out;
  }
  function ipToInt(ip) { const p = ip.split('.').map(Number); if (p.length !== 4 || p.some((x) => isNaN(x) || x < 0 || x > 255)) return null; return ((p[0] << 24) | (p[1] << 16) | (p[2] << 8) | p[3]) >>> 0; }
  function intToIp(n) { return [n >>> 24, (n >>> 16) & 255, (n >>> 8) & 255, n & 255].join('.'); }
  function maskToCidr(m) { const n = ipToInt(m); let c = 0; for (let i = 31; i >= 0; i--) if (n & (1 << i)) c++; return c; }
  function netOf(cidrAddr) {
    const [ip, c] = cidrAddr.split('/'); const cidr = parseInt(c || '32', 10);
    const n = ipToInt(ip); const mask = cidr === 0 ? 0 : (0xffffffff << (32 - cidr)) >>> 0;
    const net = (n & mask) >>> 0; const bc = (net | (~mask >>> 0)) >>> 0;
    return { net: intToIp(net), bc: intToIp(bc), mask: intToIp(mask), cidr, hosts: cidr >= 31 ? (cidr === 32 ? 1 : 2) : Math.pow(2, 32 - cidr) - 2, first: intToIp(net + 1), last: intToIp(bc - 1) };
  }
  function inNet(ip, cidrAddr) { const a = ipToInt(ip); if (a == null) return false; const n = netOf(cidrAddr); const mask = ipToInt(n.mask); return ((a & mask) >>> 0) === ipToInt(n.net); }
  SIM.ip = { ipToInt, intToIp, maskToCidr, netOf, inNet, parseInterfaces };
  SIM.System = System;
  SIM.hash = hash;
  SIM.setBoot = (t) => { BOOT = t; };
})();
