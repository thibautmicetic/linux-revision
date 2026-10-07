/* TP pratiques — Chapitre 4 (TP4 : configuration réseau et sécurité) */
(function () {
  'use strict';
  const APP = window.APP, mh = APP.mh;
  const M = (m) => APP.registerMission(Object.assign({ chapter: 'c4' }, m));
  const STATIC = '# This file describes the network interfaces available on your system\n\nsource /etc/network/interfaces.d/*\n\nauto lo\niface lo inet loopback\n\nallow-hotplug enp0s3\niface enp0s3 inet dhcp\n';

  M({
    id: 'c4-m1', tp: 'TP4 · ex. 1', title: 'Lire la configuration réseau',
    intro: 'Relève les informations réseau de ta VM (VM-A).',
    steps: [
      { t: 'Affiche les interfaces réseau. Combien en a ta VM ? À quoi sert `lo` ?', sol: 'ip a', why: '`lo` (127.0.0.1) est l\'interface de bouclage : la machine se parle à elle-même.', check: (m) => m.ran(/^\s*ip\s+(-\w+\s+)*(a|addr|address)(\s+show)?\s*$/) },
      { t: 'Affiche uniquement l\'état des interfaces (UP/DOWN) et leurs adresses MAC.', sol: 'ip link', check: (m) => m.ran(/^\s*ip\s+(l|link)(\s+show)?\s*$/) },
      { t: 'Affiche la table de routage. Quelle est la passerelle par défaut ?', sol: 'ip route', why: 'La ligne `default via 192.168.1.1` indique la passerelle.', check: (m) => m.ran(/^\s*ip\s+(r|ro|route)(\s+show)?\s*$/) },
      { t: 'Quels serveurs DNS sont utilisés ?', sol: 'cat /etc/resolv.conf', check: (m) => m.ran(/(cat|less|more|head)\s+\/etc\/resolv\.conf/) },
      { t: 'Affiche le nom de la machine avec `hostnamectl`. Dans quel fichier est-il enregistré ?', sol: 'hostnamectl', why: 'Le nom d\'hôte est stocké dans /etc/hostname.', check: (m) => m.ran(/^\s*hostnamectl\s*(status)?\s*$/) && m.ran(/\/etc\/hostname/) },
      { t: 'Calcule l\'adresse réseau et de diffusion de 192.168.1.10/24 avec l\'outil `ipcalc` (installe-le).', sol: 'sudo apt install ipcalc', why: 'Réseau 192.168.1.0, diffusion 192.168.1.255, 254 hôtes. VM-B (192.168.1.20) est dans le même réseau.', check: (m) => m.ran(/^\s*ipcalc\s+192\.168\.1\.\d+/) }
    ]
  });

  M({
    id: 'c4-m2', tp: 'TP4 · ex. 2', title: 'Diagnostiquer méthodiquement',
    intro: 'Méthode : tester du plus proche au plus lointain. Interface → passerelle → Internet par IP → DNS → service.',
    steps: [
      { t: 'Vérifie la joignabilité de ta passerelle avec 4 paquets. Que signifient ttl et time ?', sol: 'ping -c 4 192.168.1.1', why: 'ttl = nombre de routeurs encore autorisés ; time = aller-retour en ms.', check: (m) => m.ran(/^\s*ping\s+-c\s*4\s+192\.168\.1\.1\s*$/, { ok: true }) },
      { t: 'Teste Internet **par adresse IP** (1.1.1.1), puis **par nom** (eseo.fr). Quel service intervient dans le 2e cas ?', sol: 'ping -c 4 1.1.1.1', why: 'Avec un nom, la résolution DNS intervient d\'abord.', check: (m) => m.ran(/^\s*ping\s+(-c\s*\d+\s+)?1\.1\.1\.1/, { ok: true }) && m.ran(/^\s*ping\s+(-c\s*\d+\s+)?eseo\.fr/, { ok: true }) },
      { t: 'Affiche le chemin jusqu\'à eseo.fr (installe `traceroute` si besoin).', sol: 'traceroute eseo.fr', check: (m) => m.ran(/^\s*traceroute\s+eseo\.fr/, { ok: true }) },
      { t: 'Interroge directement le DNS : `dig eseo.fr` puis la version courte.', sol: 'dig +short eseo.fr', why: 'Repère la section ANSWER et la ligne SERVER (serveur qui a répondu).', check: (m) => m.ran(/^\s*dig\s+eseo\.fr\s*$/) && m.ran(/^\s*dig\s+(\+short\s+eseo\.fr|eseo\.fr\s+\+short)\s*$/) },
      { t: 'Liste les ports en écoute sur ta machine avec les processus associés.', sol: 'sudo ss -tulpn', why: 't TCP, u UDP, l en écoute, p processus (sudo pour tout voir), n numérique.', check: (m) => m.ran(/^\s*sudo\s+ss\s+-(?=\w*t)(?=\w*u)(?=\w*l)(?=\w*p)(?=\w*n)\w+\s*$/) },
      { t: 'Scénario de panne : désactive ton interface `enp0s3`, essaie de pinguer VM-B (192.168.1.20), puis réactive-la.', sol: 'sudo ip link set enp0s3 down', why: 'Symptôme : « Network is unreachable ». C\'est l\'étape 1 (interface) de la méthode qui échoue.', check: (m) => m.ran(/ip\s+link\s+set\s+(dev\s+)?enp0s3\s+down/) && m.ran(/^\s*ping\b.*192\.168\.1\.20/, { fail: true }) && m.A.iface('enp0s3').up }
    ]
  });

  M({
    id: 'c4-m3', tp: 'Scénario de panne', title: 'Panne : « Internet ne marche plus »',
    intro: 'Un collègue se plaint : `ping eseo.fr` ne fonctionne plus sur VM-A. Diagnostique couche par couche et répare **sans redémarrer**.',
    setup: (w) => { const A = w.vmA; A.writeFile('/etc/resolv.conf', 'nameserver 10.99.99.99\n'); A.resolvLocked = true; },
    steps: [
      { t: 'Constate la panne : `ping -c 2 eseo.fr`.', sol: 'ping -c 2 eseo.fr', check: (m) => m.ran(/^\s*ping\b.*eseo\.fr/, { fail: true }) },
      { t: 'Vérifie l\'interface (UP + adresse IP ?).', sol: 'ip a', check: (m) => m.ran(/^\s*ip\s+(-\w+\s+)*(a|addr|address|link)\b/) },
      { t: 'Teste la passerelle puis Internet **par IP**.', sol: 'ping -c 2 1.1.1.1', why: 'Si 1.1.1.1 répond mais pas eseo.fr, le problème est la résolution de noms (DNS).', check: (m) => m.ran(/^\s*ping\b.*1\.1\.1\.1/, { ok: true }) },
      { t: 'Inspecte la configuration DNS. Quel est le problème ?', sol: 'cat /etc/resolv.conf', why: 'Le serveur 10.99.99.99 n\'existe pas.', check: (m) => m.ran(/\/etc\/resolv\.conf/) },
      { t: 'Répare : utilise le serveur DNS `1.1.1.1` (ou la box 192.168.1.1). Attention, `sudo echo … > fichier` ne marche pas !', hint: 'echo "nameserver 1.1.1.1" | sudo tee /etc/resolv.conf   — ou sudo nano /etc/resolv.conf', sol: 'echo "nameserver 1.1.1.1" | sudo tee /etc/resolv.conf', why: 'La redirection > est faite par TON shell (non root) : il faut `sudo tee` ou éditer avec `sudo nano`.', check: (m) => m.A.dnsServers().some((s) => ['1.1.1.1', '192.168.1.1', '8.8.8.8', '9.9.9.9'].includes(s)) },
      { t: 'Vérifie que `ping eseo.fr` refonctionne.', sol: 'ping -c 2 eseo.fr', check: (m) => m.ran(/^\s*ping\b.*eseo\.fr/, { ok: true }) }
    ]
  });

  M({
    id: 'c4-m4', tp: 'Scénario de panne', title: 'Panne : plus de passerelle',
    intro: 'Après une mauvaise manipulation, VM-A ne joint plus rien en dehors du réseau local. Trouve et corrige la panne (temporairement).',
    setup: (w) => { w.vmA.net.gateway = null; },
    steps: [
      { t: 'Constate : `ping -c 2 1.1.1.1` échoue, mais VM-B (192.168.1.20) répond.', sol: 'ping -c 2 1.1.1.1', check: (m) => m.ran(/^\s*ping\b.*1\.1\.1\.1/, { fail: true }) && m.ran(/^\s*ping\b.*192\.168\.1\.20/, { ok: true }) },
      { t: 'Affiche la table de routage : que manque-t-il ?', sol: 'ip route', why: 'Il n\'y a plus de ligne « default via … » : aucune route vers les autres réseaux.', check: (m) => m.ran(/^\s*ip\s+(r|ro|route)\b/) },
      { t: 'Ajoute la passerelle par défaut 192.168.1.1.', sol: 'sudo ip route add default via 192.168.1.1', check: (m) => m.A.net.gateway === '192.168.1.1' },
      { t: 'Vérifie que 1.1.1.1 répond. Cette correction survivra-t-elle à un redémarrage ?', sol: 'ping -c 2 1.1.1.1', why: 'Non : les commandes ip sont temporaires. Ici la config DHCP du fichier /etc/network/interfaces la rétablira au boot.', check: (m) => m.log.filter((l) => /^\s*ping\b.*1\.1\.1\.1/.test(l.line) && l.status === 0).length > 0 }
    ]
  });

  M({
    id: 'c4-m5', tp: 'TP4 · ex. 3', title: 'Configuration temporaire',
    intro: 'Ajoute une 2e adresse IP. Ton binôme (VM-B) a déjà ajouté l\'adresse 10.10.10.2/24 à sa carte.',
    setup: (w) => { w.vmB.iface('enp0s3').addrs.push('10.10.10.2/24'); },
    steps: [
      { t: 'Ajoute l\'adresse `10.10.10.5/24` à ton interface `enp0s3`, puis vérifie avec `ip a`.', sol: 'sudo ip addr add 10.10.10.5/24 dev enp0s3', check: (m) => m.A.iface('enp0s3').addrs.includes('10.10.10.5/24') && m.ran(/^\s*ip\s+(-\w+\s+)*(a|addr)\b/) },
      { t: 'Pingue l\'adresse 10.10.10.2 de ton binôme. Pourquoi ça marche alors que ce réseau n\'existe dans aucun fichier ?', sol: 'ping -c 2 10.10.10.2', why: 'Les deux cartes sont sur le même réseau physique et ont maintenant une adresse dans 10.10.10.0/24.', check: (m) => m.ran(/^\s*ping\b.*10\.10\.10\.2/, { ok: true }) },
      { t: 'Affiche la table de routage : quelle route est apparue ?', sol: 'ip route', why: 'La route « 10.10.10.0/24 dev enp0s3 proto kernel » est créée automatiquement avec l\'adresse.', check: (m) => m.ran(/^\s*ip\s+(r|ro|route)\b/) && m.A.iface('enp0s3').addrs.includes('10.10.10.5/24') },
      { t: 'Redémarre la VM (`sudo reboot`) puis affiche à nouveau les adresses. Conclusion ?', sol: 'sudo reboot', why: 'L\'adresse 10.10.10.5 a disparu : les commandes ip sont TEMPORAIRES. Pour du permanent : /etc/network/interfaces.', check: (m) => m.ev('reboot') && !m.A.iface('enp0s3').addrs.includes('10.10.10.5/24') && m.log.length > 0 && /^\s*ip\b/.test(m.log[m.log.length - 1].line) }
    ]
  });

  M({
    id: 'c4-m6', tp: 'TP4 · ex. 4', title: 'Configuration permanente et nom d\'hôte',
    intro: 'Passe en adresse statique via /etc/network/interfaces, renomme la machine et ajoute ton binôme dans /etc/hosts.',
    setup: (w) => w.vmA.writeFile('/etc/network/interfaces', STATIC),
    steps: [
      { t: 'Sauvegarde d\'abord la configuration : `/etc/network/interfaces` → `/etc/network/interfaces.bak`.', sol: 'sudo cp /etc/network/interfaces /etc/network/interfaces.bak', check: (m) => m.isFile('/etc/network/interfaces.bak') },
      { t: 'Édite `/etc/network/interfaces` pour passer `enp0s3` en **static** : address 192.168.1.10/24, gateway 192.168.1.1, dns-nameservers 192.168.1.1 1.1.1.1.', hint: 'sudo nano /etc/network/interfaces — remplace « inet dhcp » par « inet static » et ajoute les 3 lignes indentées.', sol: 'sudo nano /etc/network/interfaces', check: (m) => { const c = APP.SIM.ip.parseInterfaces(m.content('/etc/network/interfaces') || '').enp0s3; return !!c && c.method === 'static' && /^192\.168\.1\.\d+(\/24)?$/.test(c.address || '') && c.gateway === '192.168.1.1'; } },
      { t: 'Applique la configuration puis vérifie l\'adresse, la route et l\'accès à Internet.', sol: 'sudo systemctl restart networking', why: 'Un serveur doit avoir une adresse fixe pour qu\'on puisse toujours le joindre au même endroit.', check: (m) => m.ev('service', (d) => d.name === 'networking' && d.op === 'restart') && !m.A.iface('enp0s3').dhcp && m.A.net.gateway === '192.168.1.1' && m.ran(/^\s*ping\b/, { ok: true }) },
      { t: 'Restaure la configuration DHCP d\'origine depuis la sauvegarde et réapplique-la.', sol: 'sudo cp /etc/network/interfaces.bak /etc/network/interfaces && sudo systemctl restart networking', check: (m) => /inet dhcp/.test(m.content('/etc/network/interfaces') || '') && m.A.iface('enp0s3').dhcp },
      { t: 'Renomme ta machine en `srv-dupont` (ou srv-TONNOM).', sol: 'sudo hostnamectl set-hostname srv-dupont', why: 'Le prompt affiche le nouveau nom. Pense aussi à /etc/hosts (sinon sudo se plaint de ne pas résoudre l\'hôte).', check: (m) => /^srv-/.test(m.A.hostname) },
      { t: 'Dans `/etc/hosts`, associe l\'IP de VM-B (192.168.1.20) au nom `binome`, puis teste `ping binome` et `getent hosts binome`.', hint: 'echo "192.168.1.20 binome" | sudo tee -a /etc/hosts', sol: 'echo "192.168.1.20 binome" | sudo tee -a /etc/hosts', check: (m) => m.A.hostsLookup('binome') === '192.168.1.20' && m.ran(/^\s*ping\b.*binome/, { ok: true }) && m.ran(/getent\s+hosts\s+binome/) },
      { t: 'Essaie `dig binome` : pourquoi ça ne marche pas ?', sol: 'dig binome', why: 'dig interroge DIRECTEMENT le serveur DNS sans lire /etc/hosts ; ping et getent passent par /etc/hosts d\'abord.', check: (m) => m.ran(/^\s*dig\s+binome/) }
    ]
  });

  M({
    id: 'c4-m7', tp: 'TP4 · ex. 5', title: 'Se connecter en SSH',
    intro: 'VM-B (192.168.1.20) a un compte **etudiant** (mot de passe : **etudiant**).',
    steps: [
      { t: 'Vérifie que le serveur SSH tourne sur ta machine et repère son port d\'écoute.', sol: 'systemctl status ssh', check: (m) => m.ran(/systemctl\s+status\s+sshd?/) && m.ran(/ss\s+-\w*l\w*/) },
      { t: 'Connecte-toi à VM-B : `ssh etudiant@192.168.1.20`. Accepte l\'empreinte (yes).', sol: 'ssh etudiant@192.168.1.20', why: 'L\'empreinte (fingerprint) identifie le serveur ; elle est enregistrée dans ~/.ssh/known_hosts.', check: (m) => m.ev('ssh', (d) => d.host === '192.168.1.20') },
      { t: 'Sur VM-B, affiche le nom de la machine, puis déconnecte-toi.', sol: 'hostname', check: (m) => m.ran(/^\s*(hostname|hostnamectl)\b/, { host: 'vm-b' }) && !m.onB() },
      { t: 'Reconnecte-toi puis déconnecte-toi : le message d\'empreinte réapparaît-il ? Affiche `~/.ssh/known_hosts`.', sol: 'cat ~/.ssh/known_hosts', why: 'Non : la clé du serveur est connue. Si elle change, SSH refuse (attaque possible).', check: (m) => m.evCount('ssh') >= 2 && m.ran(/known_hosts/) },
      { t: 'Exécute `hostname; uptime` sur VM-B **sans ouvrir de session**.', sol: "ssh etudiant@192.168.1.20 'hostname; uptime'", check: (m) => m.ran(/^\s*ssh\s+\S+\s+["'].*uptime/, { ok: true }) },
      { t: 'Crée `rapport.txt` et copie-le dans le home de etudiant sur VM-B avec `scp`.', sol: 'echo test > rapport.txt && scp rapport.txt etudiant@192.168.1.20:~/', why: 'Syntaxe : scp source utilisateur@machine:chemin (le « : » est obligatoire).', check: (m) => m.exists('/home/etudiant/rapport.txt', m.B) },
      { t: 'Sur VM-B (via ssh), consulte les connexions SSH reçues des 10 dernières minutes.', sol: 'sudo journalctl -u ssh --since "10 min ago"', check: (m) => m.ran(/journalctl\s+.*-u\s+sshd?\b/, { host: 'vm-b' }) || m.ran(/journalctl\s+-u\s+sshd?/, { host: 'vm-b' }) }
    ]
  });

  M({
    id: 'c4-m8', tp: 'TP4 · ex. 6', title: 'Clés SSH et durcissement du serveur',
    intro: 'Remplace le mot de passe par une paire de clés, puis durcis le serveur SSH de VM-B. **Garde toujours une session ouverte** pendant les tests !',
    steps: [
      { t: 'Sur VM-A, génère une paire de clés **ed25519** protégée par une phrase de passe.', sol: 'ssh-keygen -t ed25519', why: 'id_ed25519 = clé PRIVÉE (ne jamais la partager) ; id_ed25519.pub = clé publique.', check: (m) => m.isFile('~/.ssh/id_ed25519') && m.isFile('~/.ssh/id_ed25519.pub') },
      { t: 'Copie ta clé **publique** sur VM-B.', sol: 'ssh-copy-id etudiant@192.168.1.20', why: 'Elle est ajoutée dans ~/.ssh/authorized_keys sur le serveur.', check: (m) => /ssh-ed25519/.test(m.content('/home/etudiant/.ssh/authorized_keys', m.B) || '') },
      { t: 'Reconnecte-toi à VM-B : quel secret est demandé maintenant ?', sol: 'ssh etudiant@192.168.1.20', why: 'La phrase de passe de la clé (ou rien si elle est vide) : le mot de passe du compte ne circule plus.', check: (m) => m.ev('ssh', (d) => d.method === 'publickey') },
      { t: 'Vérifie les droits de `~/.ssh` (700) et de ta clé privée (600).', sol: 'ls -la ~/.ssh', why: 'SSH refuse une clé privée lisible par d\'autres utilisateurs.', check: (m) => m.ran(/ls\s+-\w*l\w*\s+(-\w+\s+)?~?\/?\S*\.ssh/) },
      { t: 'Sur VM-B (dans ta session SSH), édite `/etc/ssh/sshd_config` : `PermitRootLogin no` et `PasswordAuthentication no`.', sol: 'sudo nano /etc/ssh/sshd_config', check: (m) => /^\s*PermitRootLogin\s+no\b/mi.test(m.content('/etc/ssh/sshd_config', m.B) || '') && /^\s*PasswordAuthentication\s+no\b/mi.test(m.content('/etc/ssh/sshd_config', m.B) || '') },
      { t: 'Vérifie la syntaxe puis redémarre le service SSH de VM-B.', sol: 'sudo sshd -t && sudo systemctl restart ssh', why: 'sshd -t détecte les erreurs AVANT de redémarrer (sinon le service ne repart pas et on peut perdre l\'accès).', check: (m) => m.ran(/sshd\s+-t/, { host: 'vm-b', ok: true }) && m.ev('service', (d) => d.name === 'ssh' && d.op === 'restart') && /PasswordAuthentication\s+no/i.test(m.B.sshdConfigLoaded || '') },
      { t: 'Depuis VM-A, teste une connexion **sans clé** : `ssh -o PubkeyAuthentication=no etudiant@192.168.1.20`.', sol: 'ssh -o PubkeyAuthentication=no etudiant@192.168.1.20', why: '« Permission denied (publickey) » : seules les clés sont acceptées. D\'où l\'importance de garder une session ouverte pendant la manip.', check: (m) => m.ran(/ssh\s+-o\s+PubkeyAuthentication=no/, { fail: true }) }
    ]
  });

  M({
    id: 'c4-m9', tp: 'TP4 · ex. 7', title: 'Mettre en place un pare-feu avec UFW',
    intro: 'Protège VM-A : tout bloquer en entrée, puis n\'ouvrir que le nécessaire.',
    steps: [
      { t: 'Installe UFW et affiche son état.', sol: 'sudo apt install ufw', check: (m) => m.installed('ufw') && m.ran(/ufw\s+status/) },
      { t: 'Politique par défaut : refuser tout le trafic **entrant**, autoriser le **sortant**.', sol: 'sudo ufw default deny incoming', check: (m) => m.A.ufw.inDefault === 'deny' && m.A.ufw.outDefault === 'allow' && m.ran(/ufw\s+default\s+allow\s+outgoing/) },
      { t: '**Avant** d\'activer le pare-feu, autorise SSH.', sol: 'sudo ufw allow ssh', why: 'Sur une machine distante, activer le pare-feu sans autoriser SSH coupe ta session : tu perds l\'accès !', check: (m) => m.A.ufw.rules.some((r) => +r.port === 22 && r.action === 'allow') },
      { t: 'Active le pare-feu et affiche les règles en détail.', sol: 'sudo ufw enable', check: (m) => m.A.ufw.enabled && m.ran(/ufw\s+status\s+verbose/) },
      { t: 'Lance un petit serveur web : `python3 -m http.server 8080 &`. Depuis VM-B (ssh), essaie `curl http://192.168.1.10:8080` : bloqué !', sol: 'python3 -m http.server 8080 &', check: (m) => m.A.httpServers.some((h) => h.port === 8080) && m.ran(/curl\s+.*192\.168\.1\.10:8080/, { fail: true, host: 'vm-b' }) },
      { t: 'Sur VM-A, autorise le port 8080/tcp puis refais le curl depuis VM-B.', sol: 'sudo ufw allow 8080/tcp', check: (m) => m.ran(/curl\s+.*192\.168\.1\.10:8080/, { ok: true, host: 'vm-b' }) },
      { t: 'Supprime cette règle grâce aux numéros (`ufw status numbered` puis `ufw delete N`).', sol: 'sudo ufw status numbered', check: (m) => m.ran(/ufw\s+status\s+numbered/) && m.ran(/ufw\s+delete\s+\d+/) && !m.A.ufw.rules.some((r) => +r.port === 8080 && !r.from) },
      { t: 'Autorise le port 8080 **uniquement** depuis VM-B (192.168.1.20).', sol: 'sudo ufw allow from 192.168.1.20 to any port 8080 proto tcp', check: (m) => m.A.ufw.rules.some((r) => +r.port === 8080 && r.from === '192.168.1.20' && r.action === 'allow') }
    ]
  });

  M({
    id: 'c4-m10', tp: 'TP4 · ex. 8', title: 'Comptes et sudo',
    intro: 'Gère le cycle de vie d\'un compte stagiaire : création, droits sudo, expiration, verrouillage.',
    steps: [
      { t: 'Crée l\'utilisateur `stagiaire` (mot de passe au choix, ex. stagiaire).', sol: 'sudo adduser stagiaire', check: (m) => !!m.user('stagiaire') && !!m.user('stagiaire').pw },
      { t: 'Connecte-toi en stagiaire (`su - stagiaire`) et essaie `sudo apt update`. Puis `exit`.', sol: 'su - stagiaire', why: '« stagiaire n\'est pas dans le fichier sudoers » : l\'incident est journalisé.', check: (m) => m.ev('sudo-denied', (d) => d.user === 'stagiaire') },
      { t: 'Donne-lui les droits d\'administration, puis vérifie avec `groups stagiaire`.', sol: 'sudo usermod -aG sudo stagiaire', check: (m) => m.inGroup('stagiaire', 'sudo') && m.ran(/groups\s+stagiaire|sudo\s+-l/) },
      { t: 'Affiche sa ligne dans `/etc/shadow`. Le mot de passe apparaît-il en clair ?', sol: 'sudo grep stagiaire /etc/shadow', why: 'Non : seule son empreinte (hachage) est stockée, et le fichier n\'est lisible que par root.', check: (m) => m.ran(/sudo\s+(grep|cat|less|head|tail)\b.*\/etc\/shadow/, { ok: true }) },
      { t: 'Impose une expiration de son mot de passe à 90 jours, puis affiche la politique.', sol: 'sudo chage -M 90 stagiaire', check: (m) => m.user('stagiaire').maxDays === 90 && m.ran(/chage\s+-l\s+stagiaire/) },
      { t: 'Le stage est terminé : retire-le du groupe sudo, puis verrouille son compte.', sol: 'sudo deluser stagiaire sudo && sudo passwd -l stagiaire', why: 'On verrouille plutôt que supprimer pour garder la trace (fichiers, journaux).', check: (m) => !m.inGroup('stagiaire', 'sudo') && m.user('stagiaire').locked },
      { t: 'Vérifie qu\'il ne peut plus se connecter (`su - stagiaire`).', sol: 'su - stagiaire', check: (m) => m.ran(/^\s*su\s+(-\s+|-l\s+)?stagiaire/, { fail: true }) && m.user('stagiaire').locked }
    ]
  });

  M({
    id: 'c4-m11', tp: 'TP4 · ex. 9', title: 'Mises à jour, services, journaux et fail2ban',
    intro: 'Réduis la surface d\'attaque de VM-A et protège SSH contre la force brute.',
    steps: [
      { t: 'Mets à jour la liste des paquets et affiche les mises à jour disponibles.', sol: 'sudo apt update', why: 'La plupart des attaques exploitent des failles déjà corrigées : mettre à jour est essentiel.', check: (m) => m.ran(/apt(-get)?\s+update/, { ok: true }) && m.ran(/apt\s+list\s+--upgradable/) },
      { t: 'Liste les services qui écoutent sur le réseau. L\'impression (cups) est-elle utile sur un serveur web ?', sol: 'sudo ss -tulpn', check: (m) => m.ran(/ss\s+-\w*l/) },
      { t: 'Désactive et arrête immédiatement le service `cups`.', sol: 'sudo systemctl disable --now cups', why: 'disable --now = désactive au démarrage ET arrête tout de suite.', check: (m) => !m.service('cups').active && !m.service('cups').enabled },
      { t: 'Retrouve les tentatives de connexion SSH échouées dans le journal.', sol: 'sudo journalctl -u ssh | grep -i failed', check: (m) => m.ran(/journalctl\s+.*-u\s+sshd?.*\|\s*grep\s+(-\w+\s+)*-?i?\s*failed|journalctl.*grep\s+-i\s+failed/i, { ok: true }) },
      { t: 'Affiche les dernières connexions réussies, puis les échecs.', sol: 'last', check: (m) => m.ran(/^\s*last\s*$/) && m.ran(/^\s*sudo\s+lastb\b/) },
      { t: 'Installe `fail2ban` et affiche l\'état de la protection SSH.', sol: 'sudo apt install fail2ban', why: 'fail2ban surveille les journaux et bannit temporairement les IP qui accumulent les échecs.', check: (m) => m.installed('fail2ban') && m.ran(/fail2ban-client\s+status\s+sshd/, { ok: true }) },
      { t: 'Crée `/etc/fail2ban/jail.local` pour bannir après **3 échecs** (maxretry = 3, findtime = 10m, bantime = 10m), puis redémarre fail2ban.', hint: 'Section [sshd] avec enabled = true, maxretry = 3, findtime = 10m, bantime = 10m, backend = systemd', sol: 'sudo nano /etc/fail2ban/jail.local', check: (m) => /maxretry\s*=\s*3/.test(m.content('/etc/fail2ban/jail.local') || '') && m.A.f2b.maxretry === 3 },
      { t: 'Ouvre un 2e terminal, connecte-toi à VM-B, puis depuis VM-B fais 3 tentatives SSH **ratées** vers VM-A (`ssh etudiant@192.168.1.10`, mauvais mot de passe). Observe le bannissement.', sol: 'ssh etudiant@192.168.1.10', check: (m) => m.A.f2b.banned.includes('192.168.1.20') },
      { t: 'Débannis VM-B.', sol: 'sudo fail2ban-client set sshd unbanip 192.168.1.20', check: (m) => !m.A.f2b.banned.includes('192.168.1.20') && m.ran(/unbanip\s+192\.168\.1\.20/) }
    ]
  });

  M({
    id: 'c4-m12', tp: 'TP4 · ex. 15', title: 'Défi : durcir VM-B à distance',
    intro: 'Tu administres VM-B **uniquement via SSH**. Sécurise-la dans le bon ordre pour ne jamais perdre l\'accès. UFW est déjà installé sur VM-B.',
    setup: (w) => mh.install(w.vmB, 'ufw'),
    steps: [
      { t: 'Connecte-toi à VM-B en SSH.', sol: 'ssh etudiant@192.168.1.20', check: (m) => m.onB() },
      { t: 'Sur VM-B : refuse tout en entrée par défaut et autorise SSH, HTTP (80) et HTTPS (443).', sol: 'sudo ufw default deny incoming && sudo ufw allow ssh && sudo ufw allow 80/tcp && sudo ufw allow 443/tcp', check: (m) => m.B.ufw.inDefault === 'deny' && [22, 80, 443].every((p) => m.B.ufw.rules.some((r) => +r.port === p && r.action === 'allow')) },
      { t: 'Active le pare-feu de VM-B (confirme avec y) **sans perdre ta session**.', sol: 'sudo ufw enable', why: 'Comme SSH est autorisé, la session continue. Sans la règle, la connexion serait coupée (Broken pipe).', check: (m) => m.B.ufw.enabled && m.onB() },
      { t: 'MySQL (3306) n\'est utilisé que localement par PHP : vérifie qu\'aucune règle ne l\'ouvre et affiche les règles finales.', sol: 'sudo ufw status verbose', check: (m) => !m.B.ufw.rules.some((r) => +r.port === 3306 && r.action === 'allow' && !r.from) && m.ran(/ufw\s+status/, { host: 'vm-b' }) },
      { t: 'Interdis la connexion directe de root (`PermitRootLogin no` dans sshd_config), vérifie la syntaxe et redémarre ssh.', sol: 'sudo nano /etc/ssh/sshd_config', check: (m) => /PermitRootLogin\s+no/i.test(m.B.sshdConfigLoaded || '') },
      { t: 'Installe `fail2ban` et `unattended-upgrades` sur VM-B.', sol: 'sudo apt install fail2ban unattended-upgrades', check: (m) => m.installed('fail2ban', m.B) && m.installed('unattended-upgrades', m.B) }
    ],
    outro: 'VM-B est durcie : pare-feu, SSH sans root, anti force brute et mises à jour de sécurité automatiques.'
  });
})();
