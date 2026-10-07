APP.registerChapter({
  id: 'c4',
  num: 4,
  title: 'Réseau et sécurité',
  subtitle: 'Cours 4 + TP 4',

  // ===================================================================
  // 1. SECTIONS (fiches de cours)
  // ===================================================================
  sections: [
    {
      id: 'c4-s-tcpip',
      title: '1.1 · 1.3 Modèle TCP/IP, passerelle, DNS et ports',
      src: 'Cours 4 §1.1, §1.3',
      html: `
<h3>Le modèle TCP/IP en 4 couches</h3>
<p>Les communications réseau sont organisées en <b>couches</b> : chacune rend un service à la couche supérieure et possède son propre système d'adressage.</p>
<table class="tbl">
<tr><th>Couche</th><th>Protocoles</th><th>Adressage</th></tr>
<tr><td>Application</td><td>HTTP, HTTPS, SSH, DNS, FTP</td><td>—</td></tr>
<tr><td>Transport</td><td>TCP, UDP</td><td>Port (22, 80…)</td></tr>
<tr><td>Internet</td><td>IP, ICMP</td><td>Adresse IP</td></tr>
<tr><td>Accès réseau</td><td>Ethernet, Wi-Fi</td><td>Adresse MAC</td></tr>
</table>
<div class="grid2">
<div class="mini"><h4>Adresse MAC</h4><p>Identifie une carte réseau sur le <b>lien local</b> (ex. <code>08:00:27:3a:1b:9c</code>).</p></div>
<div class="mini"><h4>Adresse IP</h4><p>Permet de <b>joindre une machine</b>, même à travers des routeurs.</p></div>
<div class="mini"><h4>Port</h4><p>Permet de <b>joindre un service</b> précis sur cette machine (22 = SSH).</p></div>
</div>
<div class="callout info"><b>En administration Linux</b> on intervient surtout sur la couche <b>Internet</b> (adresses IP, routes) et sur la couche <b>Transport</b> (ports ouverts, pare-feu).</div>
<h3>Passerelle, DNS et DHCP</h3>
<ul>
<li><b>Passerelle par défaut</b> : routeur vers lequel la machine envoie tout le trafic destiné aux <i>autres</i> réseaux (Internet). Deux machines d'un même réseau communiquent directement, sans passerelle.</li>
<li><b>DNS</b> : service qui traduit un nom (<code>eseo.fr</code>) en adresse IP. Sans DNS, on ne peut joindre les machines que par leur IP.</li>
<li><b>DHCP</b> : service qui attribue automatiquement l'IP, le masque, la passerelle et les serveurs DNS.</li>
</ul>
<h3>Les ports</h3>
<ul>
<li>Un port (de 0 à 65535) identifie un <b>service</b> sur une machine.</li>
<li>Ports &lt; 1024 : ports « bien connus », réservés à root (seul root peut y mettre un service en écoute).</li>
<li>Le couple <b>IP + port</b> forme un point de connexion : une <b>socket</b> (ex. <code>192.168.1.10:22</code>).</li>
</ul>
<table class="tbl">
<tr><th>Service</th><th>Port</th><th>Remarque</th></tr>
<tr><td>SSH</td><td>22</td><td>administration à distance chiffrée</td></tr>
<tr><td>HTTP / HTTPS</td><td>80 / 443</td><td>web en clair / web chiffré</td></tr>
<tr><td>DNS</td><td>53</td><td>résolution de noms</td></tr>
<tr><td>FTP</td><td>21</td><td>transfert de fichiers (en clair)</td></tr>
<tr><td>SMTP</td><td>25</td><td>envoi de courriel</td></tr>
<tr><td>MySQL</td><td>3306</td><td>base de données</td></tr>
<tr><td>RDP</td><td>3389</td><td>bureau à distance Windows</td></tr>
</table>
<div class="callout tip"><b>Astuce</b> La correspondance nom de service ↔ port est listée dans <code>/etc/services</code> : c'est grâce à ce fichier que <code>ufw allow ssh</code> sait qu'il s'agit du port 22/tcp.</div>
`
    },
    {
      id: 'c4-s-ipmask',
      title: '1.2 Adresse IP, masque et calcul de réseau',
      src: 'Cours 4 §1.2 · TP4 ex.1 et ex.10',
      html: `
<h3>Adresse IPv4 et masque</h3>
<ul>
<li>Une adresse IPv4 est codée sur <b>32 bits</b>, écrite en 4 octets décimaux (0 à 255) : <code>192.168.1.10</code>.</li>
<li>Le <b>masque</b> sépare la partie <b>réseau</b> (bits à 1) de la partie <b>hôte</b> (bits à 0).</li>
<li>Notation <b>CIDR</b> : <code>/24</code> = 24 bits de réseau = masque <code>255.255.255.0</code>.</li>
<li>Deux machines du <b>même réseau</b> communiquent directement ; sinon elles passent par une <b>passerelle</b> (routeur).</li>
</ul>
<pre class="code">192.168.1.10/24
# 192.168.1  = partie réseau (24 bits)
# .10        = partie hôte (8 bits)</pre>
<table class="tbl">
<tr><th>CIDR</th><th>Masque</th><th>Bits hôte</th><th>Hôtes utilisables</th></tr>
<tr><td>/8</td><td>255.0.0.0</td><td>24</td><td>16 777 214</td></tr>
<tr><td>/16</td><td>255.255.0.0</td><td>16</td><td>65 534</td></tr>
<tr><td>/24</td><td>255.255.255.0</td><td>8</td><td>254</td></tr>
<tr><td>/26</td><td>255.255.255.192</td><td>6</td><td>62</td></tr>
<tr><td>/30</td><td>255.255.255.252</td><td>2</td><td>2</td></tr>
</table>
<div class="callout key"><b>À retenir</b> Nombre d'hôtes = 2^(32 − n) − 2. On retire 2 adresses : l'<b>adresse réseau</b> (tous les bits hôte à 0) et l'<b>adresse de diffusion</b> ou broadcast (tous les bits hôte à 1). Ex. /24 : 2^8 = 256, moins 2 = 254.</div>
<h3>Méthode de calcul : réseau, diffusion, hôtes</h3>
<ol>
<li>Repérer l'octet « coupé » par le masque et calculer la <b>taille de bloc</b> : 256 − valeur du masque dans cet octet. Ex. /26 → .192 → bloc de 256 − 192 = <b>64</b>.</li>
<li><b>Adresse réseau</b> : le plus grand multiple du bloc inférieur ou égal à l'octet de l'adresse. Ex. 130 → <b>128</b> (multiples : 0, 64, 128, 192).</li>
<li><b>Diffusion</b> : adresse réseau + bloc − 1. Ex. 128 + 64 − 1 = <b>191</b>.</li>
<li><b>Hôtes</b> : de réseau + 1 à diffusion − 1. Ex. 10.0.5.129 → 10.0.5.190, soit 62 hôtes.</li>
</ol>
<h4>Corrigé du TP4 ex.10</h4>
<table class="tbl">
<tr><th>Adresse / CIDR</th><th>Masque</th><th>Réseau</th><th>Diffusion</th><th>Hôtes</th></tr>
<tr><td>192.168.10.37/24</td><td>255.255.255.0</td><td>192.168.10.0</td><td>192.168.10.255</td><td>254</td></tr>
<tr><td>172.16.45.200/16</td><td>255.255.0.0</td><td>172.16.0.0</td><td>172.16.255.255</td><td>65 534</td></tr>
<tr><td>10.0.5.130/26</td><td>255.255.255.192</td><td>10.0.5.128</td><td>10.0.5.191</td><td>62</td></tr>
<tr><td>192.168.1.9/30</td><td>255.255.255.252</td><td>192.168.1.8</td><td>192.168.1.11</td><td>2</td></tr>
</table>
<div class="callout warn"><b>Piège (ex.10 Q2)</b> 10.0.5.70/26 et 10.0.5.130/26 ont le même masque mais <b>pas le même réseau</b> : 70 est dans le bloc 64–127 (réseau 10.0.5.64), 130 dans le bloc 128–191 (réseau 10.0.5.128). Elles ne peuvent pas communiquer directement : il faut un routeur.</div>
<div class="callout info"><b>Notre VM (ex.1 Q6)</b> 192.168.1.10/24 → réseau 192.168.1.0, diffusion 192.168.1.255, 254 hôtes (192.168.1.1 à 192.168.1.254). VM-B (192.168.1.20/24) est dans le même réseau : les deux VM se joignent sans passer par la passerelle 192.168.1.1.</div>
<h3>Adresses particulières</h3>
<ul>
<li>Réseaux <b>privés</b> (non routés sur Internet) : <code>10.0.0.0/8</code> · <code>172.16.0.0/12</code> (de 172.16.0.0 à 172.31.255.255) · <code>192.168.0.0/16</code>.</li>
<li>Adresse de <b>bouclage</b> : <code>127.0.0.1</code> (<code>localhost</code>), portée par l'interface <code>lo</code> : la machine se parle à elle-même.</li>
</ul>
<div class="callout tip"><b>Vérifier ses calculs</b> <code>sudo apt install ipcalc</code> puis <code>ipcalc 10.0.5.130/26</code> affiche masque, adresse réseau, diffusion et plage d'hôtes.</div>
`
    },
    {
      id: 'c4-s-ipcmd',
      title: '2.1 · 2.2 La commande ip : afficher et configurer à chaud',
      src: 'Cours 4 §2.1-2.2 · TP4 ex.1, ex.3',
      html: `
<h3>Afficher la configuration</h3>
<p>La commande <code>ip</code> (paquet <b>iproute2</b>) remplace les anciennes commandes <code>ifconfig</code> et <code>route</code>.</p>
<table class="tbl">
<tr><th>Commande</th><th>Affiche</th></tr>
<tr><td><code>ip a</code> (address)</td><td>interfaces et adresses IP</td></tr>
<tr><td><code>ip link</code></td><td>état des interfaces (UP / DOWN), adresse MAC</td></tr>
<tr><td><code>ip route</code></td><td>table de routage et passerelle par défaut</td></tr>
</table>
<p>Noms d'interfaces : <code>lo</code> (bouclage), <code>eth0</code> / <code>enp0s3</code> (Ethernet), <code>wlan0</code> / <code>wlp2s0</code> (Wi-Fi).</p>
<pre class="code">$ ip a
1: lo: &lt;LOOPBACK,UP&gt; mtu 65536
    inet 127.0.0.1/8 scope host lo
2: enp0s3: &lt;BROADCAST,MULTICAST,UP&gt;
    link/ether 08:00:27:3a:1b:9c
    inet 192.168.1.10/24 brd 192.168.1.255
$ ip route
default via 192.168.1.1 dev enp0s3
192.168.1.0/24 dev enp0s3 proto kernel</pre>
<ul>
<li><code>link/ether</code> : adresse <b>MAC</b> ; <code>UP</code> : interface active.</li>
<li><code>inet 192.168.1.10/24</code> : adresse IP et masque en notation CIDR ; <code>brd</code> : adresse de diffusion.</li>
<li><code>default via 192.168.1.1</code> : la <b>passerelle par défaut</b>. La ligne <code>192.168.1.0/24 … proto kernel</code> est créée automatiquement par le noyau : ce réseau est joignable directement.</li>
</ul>
<h3>Configuration temporaire</h3>
<p>Les commandes <code>ip</code> modifient la configuration <b>immédiatement</b>, mais tout est <b>perdu au redémarrage</b>. Idéal pour tester une configuration avant de la rendre permanente. Elles nécessitent <code>sudo</code>.</p>
<pre class="code"># Activer / désactiver une interface
$ sudo ip link set enp0s3 up
$ sudo ip link set enp0s3 down
# Ajouter / supprimer une adresse IP
$ sudo ip addr add 192.168.1.50/24 dev enp0s3
$ sudo ip addr del 192.168.1.50/24 dev enp0s3
# Définir la passerelle par défaut
$ sudo ip route add default via 192.168.1.1
# Demander une adresse au serveur DHCP
$ sudo dhclient enp0s3</pre>
<h4>Ce que montre le TP (ex.3)</h4>
<ul>
<li>Après <code>sudo ip addr add 10.10.10.5/24 dev enp0s3</code>, l'interface porte <b>deux</b> adresses et une nouvelle route apparaît : <code>10.10.10.0/24 dev enp0s3 proto kernel scope link src 10.10.10.5</code>.</li>
<li>Si le binôme fait de même (ex. 10.10.10.6/24), les deux VM se pinguent : elles sont sur le <b>même lien Ethernet</b> et dans le <b>même réseau IP</b>, donc elles communiquent directement, sans routeur ni fichier de configuration.</li>
<li>Après <code>sudo reboot</code>, l'adresse 10.10.10.5 a disparu : la configuration par <code>ip</code> est <b>temporaire</b>.</li>
</ul>
<div class="callout warn"><b>Pièges</b> Sans le <code>/24</code>, <code>ip addr add 10.10.10.5 dev enp0s3</code> crée une adresse en /32 : aucune route vers 10.10.10.0/24 n'est ajoutée. Et sur une machine distante, <code>ip link set … down</code> sur l'interface utilisée coupe ta propre session SSH !</div>
`
    },
    {
      id: 'c4-s-permanent',
      title: '2.3 · 2.4 Configuration permanente, nom d\'hôte et DNS',
      src: 'Cours 4 §2.3-2.4 · TP4 ex.1, ex.4',
      html: `
<h3>Configuration permanente : /etc/network/interfaces</h3>
<p>Sur un serveur Debian (outil <b>ifupdown</b>), la configuration est décrite dans <code>/etc/network/interfaces</code> :</p>
<ul>
<li><code>dhcp</code> : adresse attribuée automatiquement ;</li>
<li><code>static</code> : adresse, masque et passerelle fixés à la main (<b>indispensable pour un serveur</b>).</li>
</ul>
<pre class="code"># /etc/network/interfaces
auto lo
iface lo inet loopback

# Configuration dynamique (DHCP)
#auto enp0s3
#iface enp0s3 inet dhcp

# Configuration statique
auto enp0s3
iface enp0s3 inet static
    address 192.168.1.10/24
    gateway 192.168.1.1
    dns-nameservers 192.168.1.1 1.1.1.1</pre>
<div class="flow"><span>Sauvegarder (cp … interfaces.bak)</span><span>Modifier le fichier</span><span>sudo systemctl restart networking</span><span>Vérifier : ip a, ip route, ping</span></div>
<ul>
<li>Appliquer : <code>sudo systemctl restart networking</code> (ou <code>sudo ifdown enp0s3</code> puis <code>sudo ifup enp0s3</code>).</li>
<li>Sauvegarder avant : <code>sudo cp /etc/network/interfaces /etc/network/interfaces.bak</code>. Revenir en arrière : <code>sudo cp /etc/network/interfaces.bak /etc/network/interfaces</code> puis redémarrer <code>networking</code>.</li>
<li><b>Pourquoi une IP statique sur un serveur ?</b> Les clients, les enregistrements DNS, les règles de pare-feu et les configurations SSH pointent vers <i>une</i> adresse : si le DHCP la change, le service devient injoignable.</li>
</ul>
<div class="callout info"><b>NetworkManager</b> Sur un poste de travail, c'est souvent NetworkManager qui gère le réseau (interface graphique ou commande <code>nmcli</code>). <code>nmcli device status</code> indique quelles interfaces il gère. Exemple d'IP statique : <code>nmcli connection modify "NOM" ipv4.method manual ipv4.addresses 192.168.1.10/24 ipv4.gateway 192.168.1.1 ipv4.dns "192.168.1.1 1.1.1.1"</code> puis <code>nmcli connection up "NOM"</code> (NOM = nom de la connexion, donné par <code>nmcli connection show</code>).</div>
<h3>Nom d'hôte et résolution de noms</h3>
<table class="tbl">
<tr><th>Fichier / commande</th><th>Rôle</th></tr>
<tr><td><code>/etc/hostname</code></td><td>nom de la machine</td></tr>
<tr><td><code>hostnamectl</code></td><td>afficher / changer le nom d'hôte</td></tr>
<tr><td><code>/etc/hosts</code></td><td>résolution locale nom → IP (prioritaire sur le DNS)</td></tr>
<tr><td><code>/etc/resolv.conf</code></td><td>serveurs DNS utilisés (lignes <code>nameserver</code>)</td></tr>
<tr><td><code>dig</code> / <code>nslookup</code></td><td>interroger directement un serveur DNS</td></tr>
<tr><td><code>getent hosts nom</code></td><td>tester la résolution complète du système (/etc/hosts puis DNS)</td></tr>
</table>
<pre class="code">$ sudo hostnamectl set-hostname srv-web
$ cat /etc/hosts
127.0.0.1    localhost
192.168.1.20 srv-bdd
$ cat /etc/resolv.conf
nameserver 1.1.1.1
$ dig +short eseo.fr
# renvoie l'adresse IP</pre>
<ul>
<li>Après <code>sudo hostnamectl set-hostname srv-NOM</code>, un <b>nouveau</b> terminal affiche <code>etudiant@srv-NOM</code> dans l'invite ; le nom est enregistré dans <code>/etc/hostname</code>. Sous Debian, mets aussi à jour la ligne <code>127.0.1.1</code> de <code>/etc/hosts</code>, sinon <code>sudo</code> affiche « unable to resolve host ».</li>
<li>TP ex.4 : on ajoute <code>192.168.1.20 binome</code> dans <code>/etc/hosts</code> → <code>ping binome</code> et <code>getent hosts binome</code> fonctionnent.</li>
</ul>
<div class="callout warn"><b>Pourquoi <code>dig binome</code> échoue ?</b> <code>dig</code> et <code>nslookup</code> interrogent <b>directement le serveur DNS</b> (celui de <code>/etc/resolv.conf</code>) et ne lisent jamais <code>/etc/hosts</code>. Or « binome » n'existe que dans ce fichier local. <code>getent hosts</code>, <code>ping</code> ou <code>ssh</code> utilisent la résolution du système (ordre défini dans <code>/etc/nsswitch.conf</code> : <i>files</i> puis <i>dns</i>).</div>
`
    },
    {
      id: 'c4-s-diag',
      title: '2.5 Diagnostiquer une panne réseau',
      src: 'Cours 4 §2.5 · TP4 ex.2, ex.11',
      html: `
<h3>La méthode : du plus proche au plus lointain</h3>
<p>On teste couche par couche ; <b>la première étape qui échoue localise la panne</b>.</p>
<div class="flow"><span>1. Interface : ip a (UP + IP ?)</span><span>2. Passerelle : ping 192.168.1.1</span><span>3. Internet : ping 1.1.1.1</span><span>4. DNS : ping eseo.fr, dig eseo.fr</span><span>5. Service : curl, ss -tulpn</span></div>
<table class="tbl">
<tr><th>Symptôme</th><th>Panne probable</th></tr>
<tr><td>Interface DOWN ou sans ligne <code>inet</code></td><td>Étape 1 : interface désactivée, pas d'adresse (DHCP, configuration)</td></tr>
<tr><td>Passerelle injoignable</td><td>Étape 2 : réseau local (câble, mauvais réseau, passerelle en panne)</td></tr>
<tr><td><code>ping 1.1.1.1</code> échoue, passerelle OK</td><td>Étape 3 : route par défaut absente ou accès Internet coupé</td></tr>
<tr><td><code>ping 1.1.1.1</code> OK, <code>ping eseo.fr</code> échoue</td><td>Étape 4 : <b>DNS</b> (vérifier <code>/etc/resolv.conf</code>, <code>dig</code>)</td></tr>
<tr><td>Tout répond sauf le site</td><td>Étape 5 : service arrêté, mauvais port, pare-feu</td></tr>
</table>
<h3>Les outils</h3>
<table class="tbl">
<tr><th>Commande</th><th>Usage</th></tr>
<tr><td><code>ping -c 4 IP</code></td><td>tester la joignabilité (ICMP), 4 paquets</td></tr>
<tr><td><code>traceroute eseo.fr</code></td><td>afficher le chemin jusqu'à la cible</td></tr>
<tr><td><code>dig</code> / <code>nslookup</code></td><td>tester la résolution DNS</td></tr>
<tr><td><code>sudo ss -tulpn</code></td><td>ports en écoute et processus</td></tr>
<tr><td><code>curl -I URL</code></td><td>tester un serveur web (en-têtes seulement)</td></tr>
<tr><td><code>journalctl -u networking</code></td><td>journaux du réseau</td></tr>
</table>
<h4>ping : ttl et time</h4>
<pre class="code">$ ping -c 4 192.168.1.1
64 bytes from 192.168.1.1: icmp_seq=1 ttl=64 time=0.512 ms
...
4 packets transmitted, 4 received, 0% packet loss</pre>
<ul>
<li><b>ttl</b> (Time To Live) : compteur décrémenté par chaque routeur traversé ; le paquet est détruit à 0 (cela évite les boucles infinies). Valeur reçue = valeur initiale de l'émetteur (souvent 64 sous Linux) − nombre de routeurs traversés.</li>
<li><b>time</b> : temps d'aller-retour du paquet en millisecondes (latence).</li>
<li>Sous Linux, <code>ping</code> sans <code>-c</code> ne s'arrête jamais : <kbd>Ctrl</kbd>+<kbd>C</kbd>.</li>
</ul>
<h4>dig, traceroute, ss, curl</h4>
<ul>
<li><code>dig eseo.fr</code> : la section <b>ANSWER</b> contient l'adresse ; la ligne <code>;; SERVER:</code> indique le serveur DNS qui a répondu. <code>dig +short eseo.fr</code> n'affiche que l'IP (paquet <code>dnsutils</code>).</li>
<li><code>traceroute eseo.fr</code> : une ligne par routeur traversé ; <code>* * *</code> = routeur qui ne répond pas (<code>sudo apt install traceroute</code>).</li>
<li><code>ss -tulpn</code> : <b>t</b> TCP, <b>u</b> UDP, <b>l</b> en écoute (listening), <b>p</b> processus, <b>n</b> numérique (ports en chiffres). Avec <code>sudo</code> pour voir le processus de tous les services.</li>
<li><code>curl -I http://192.168.1.20</code> : requête HEAD, affiche le code (<code>200 OK</code>, <code>404</code>…) et les en-têtes.</li>
</ul>
<pre class="code">$ sudo ss -tulpn
# (colonnes simplifiées)
Netid State  Local Address:Port  Process
tcp   LISTEN 0.0.0.0:22          users:(("sshd",pid=612,fd=3))
tcp   LISTEN 127.0.0.1:3306      users:(("mariadbd",pid=845,fd=20))</pre>
<p><code>0.0.0.0:22</code> = écoute sur toutes les interfaces (joignable depuis le réseau) ; <code>127.0.0.1:3306</code> = écoute locale uniquement.</p>
<h4>Scénario de panne du TP (ex.2 Q6)</h4>
<p>Le binôme fait <code>sudo ip link set enp0s3 down</code> sur VM-B : depuis VM-A, <code>ping 192.168.1.20</code> n'obtient plus de réponse (« Destination Host Unreachable »). C'est l'<b>étape 1</b> (interface) qui échoue, côté VM-B. Il la réactive avec <code>sudo ip link set enp0s3 up</code>.</p>
<h4>Clair ou chiffré ? (TP ex.11)</h4>
<p><code>sudo tcpdump -i any -A port 8080</code> capture le trafic du port 8080 sur toutes les interfaces et affiche le contenu des paquets en ASCII : une requête <code>curl "http://192.168.1.10:8080/?password=secret123"</code> y apparaît <b>en clair</b>. Le même test sur le port 22 ne montre que des octets illisibles : SSH (comme HTTPS) <b>chiffre</b> tout.</p>
`
    },
    {
      id: 'c4-s-ssh',
      title: '3.1 · 3.2 SSH : principe, connexion et copie de fichiers',
      src: 'Cours 4 §3.1-3.2 · TP4 ex.5',
      html: `
<h3>Principe</h3>
<ul>
<li><b>SSH</b> (Secure Shell) permet d'ouvrir une session sur une machine distante ou d'y exécuter des commandes, via une connexion <b>chiffrée</b>.</li>
<li>Il remplace <b>Telnet</b> et <b>rlogin</b>, qui transmettaient tout en clair, mots de passe compris.</li>
<li>Modèle client / serveur : le serveur (démon <code>sshd</code>, paquet <code>openssh-server</code>) écoute par défaut sur le <b>port 22</b>.</li>
</ul>
<div class="flow"><span>Client : ssh, scp (ton PC)</span><span>Tunnel chiffré</span><span>Serveur : sshd, port 22 (VM Debian Azure)</span></div>
<p>Ordre : d'abord le <b>serveur</b> s'authentifie (empreinte), puis l'<b>utilisateur</b> (mot de passe ou clé).</p>
<pre class="code">$ sudo apt install openssh-server
$ systemctl status ssh
$ sudo ss -tlnp | grep ssh
LISTEN 0 128 0.0.0.0:22 0.0.0.0:* users:(("sshd",pid=612,fd=3))</pre>
<h3>Se connecter</h3>
<pre class="code">$ ssh etudiant@192.168.1.20
The authenticity of host '192.168.1.20' can't be established.
ED25519 key fingerprint is SHA256:x9K…
Are you sure you want to continue connecting (yes/no)? yes
$ ssh -p 2222 admin@20.19.8.4 'uptime'
# exécute une seule commande puis rend la main
$ ssh etudiant@192.168.1.20 'hostname; uptime'</pre>
<ul>
<li><code>ssh utilisateur@machine</code> ouvre une session interactive ; <code>-p port</code> si le serveur n'écoute pas sur 22.</li>
<li>Une commande entre guillemets après la machine est exécutée <b>à distance</b> sans ouvrir de session. Sans guillemets, le <code>;</code> serait interprété par ton shell local : <code>uptime</code> s'exécuterait chez toi.</li>
<li><code>exit</code> ou <kbd>Ctrl</kbd>+<kbd>D</kbd> ferme la session.</li>
</ul>
<div class="callout key"><b>Empreinte et known_hosts</b> À la première connexion, le client affiche l'<b>empreinte</b> (fingerprint, un hachage) de la clé publique du serveur : on la vérifie pour être sûr de parler au bon serveur et non à un intermédiaire malveillant. Une fois acceptée, elle est enregistrée dans <code>~/.ssh/known_hosts</code> : le message ne réapparaît plus aux connexions suivantes. Si la clé du serveur change, SSH affiche un avertissement (REMOTE HOST IDENTIFICATION HAS CHANGED) et refuse ; après vérification, <code>ssh-keygen -R 192.168.1.20</code> retire l'ancienne entrée.</div>
<h3>Copier des fichiers : scp</h3>
<pre class="code"># envoyer vers le répertoire personnel distant
$ scp rapport.txt etudiant@192.168.1.20:~/
# récupérer un fichier distant dans le répertoire courant
$ scp etudiant@192.168.1.20:~/notes.txt .
# copier un répertoire : -r
$ scp -r etudiant@serveur:/var/www ./
# port non standard : -P MAJUSCULE
$ scp -P 2222 rapport.pdf admin@20.19.8.4:~/</pre>
<div class="callout warn"><b>Pièges</b> Oublier les <code>:</code> après la machine (<code>scp rapport.txt etudiant@192.168.1.20</code>) fait une <b>copie locale</b> vers un fichier nommé « etudiant@192.168.1.20 ». Et le port s'écrit <code>ssh -p</code> mais <code>scp -P</code> (pour scp, <code>-p</code> minuscule conserve les dates et les droits).</div>
<h3>Côté serveur : qui s'est connecté ?</h3>
<pre class="code">$ sudo journalctl -u ssh --since "10 min ago"
Accepted password for etudiant from 192.168.1.10 port 51422 ssh2
$ who
etudiant pts/0  2025-10-07 10:12 (192.168.1.10)</pre>
<p><code>who</code> liste les sessions ouvertes en ce moment (terminal <code>pts/N</code> et IP d'origine pour une session SSH).</p>
`
    },
    {
      id: 'c4-s-sshkeys',
      title: '3.3 · 3.4 Clés SSH, durcissement et client SSH',
      src: 'Cours 4 §3.3-3.4 · TP4 ex.6, ex.12',
      html: `
<h3>Authentification par clés</h3>
<ul>
<li>Le mot de passe est peu pratique et vulnérable aux attaques par <b>force brute</b>.</li>
<li>On génère une <b>paire de clés</b> : la clé <b>privée</b> reste sur le client (jamais partagée), la clé <b>publique</b> est copiée sur le serveur.</li>
<li>Le serveur envoie un <b>défi</b> lié à la clé publique ; seul le détenteur de la clé privée peut y répondre. La clé privée ne transite <b>jamais</b> sur le réseau.</li>
</ul>
<pre class="code">$ ssh-keygen -t ed25519
# crée ~/.ssh/id_ed25519 (PRIVÉE) et ~/.ssh/id_ed25519.pub (publique)
$ ssh-copy-id etudiant@192.168.1.20
# ajoute id_ed25519.pub à ~/.ssh/authorized_keys sur VM-B
$ ssh etudiant@192.168.1.20
Enter passphrase for key '/home/etudiant/.ssh/id_ed25519':</pre>
<p>Après <code>ssh-copy-id</code>, on ne tape plus le mot de passe du compte distant : seule la <b>phrase de passe</b> qui protège la clé privée est demandée (si on en a défini une).</p>
<div class="grid2">
<div class="mini"><h4>Client (VM-A)</h4><p><code>~/.ssh/id_ed25519</code> : clé privée (600, secrète)</p><p><code>~/.ssh/id_ed25519.pub</code> : clé publique</p><p><code>~/.ssh/known_hosts</code> : empreintes des serveurs</p></div>
<div class="mini"><h4>Serveur (VM-B)</h4><p><code>~/.ssh</code> : droits 700</p><p><code>~/.ssh/authorized_keys</code> : clés publiques autorisées (600)</p></div>
</div>
<div class="callout warn"><b>Droits du dossier ~/.ssh (ex.6 Q4)</b> <code>chmod 700 ~/.ssh</code> et <code>chmod 600 ~/.ssh/authorized_keys ~/.ssh/id_ed25519</code>. Le serveur refuse les clés si <code>~/.ssh</code> ou <code>authorized_keys</code> sont modifiables par d'autres (quelqu'un pourrait y ajouter sa propre clé) ; le client refuse une clé privée lisible par d'autres (« UNPROTECTED PRIVATE KEY FILE »).</div>
<h3>Durcir le serveur : /etc/ssh/sshd_config</h3>
<table class="tbl">
<tr><th>Directive</th><th>Effet</th></tr>
<tr><td><code>PermitRootLogin no</code></td><td>interdit la connexion directe en root (on se connecte avec un compte normal puis <code>sudo</code>)</td></tr>
<tr><td><code>PasswordAuthentication no</code></td><td>n'autorise que les clés — <b>après</b> avoir vérifié que la sienne fonctionne !</td></tr>
<tr><td><code>PubkeyAuthentication yes</code></td><td>autorise l'authentification par clé</td></tr>
<tr><td><code>Port 2222</code></td><td>change le port : réduit le bruit des robots, mais ne remplace pas une vraie sécurité</td></tr>
<tr><td><code>AllowUsers etudiant admin</code></td><td>limite les comptes autorisés à se connecter</td></tr>
</table>
<div class="flow"><span>Clé copiée et testée</span><span>Garder une session ouverte</span><span>Éditer sshd_config</span><span>sudo sshd -t</span><span>sudo systemctl restart ssh</span><span>Tester depuis un NOUVEAU terminal</span></div>
<pre class="code">$ sudo sshd -t
# aucune sortie = syntaxe correcte
$ sudo systemctl restart ssh
$ sudo systemctl status ssh
# test d'une connexion SANS clé :
$ ssh -o PubkeyAuthentication=no etudiant@192.168.1.20
etudiant@192.168.1.20: Permission denied (publickey).</pre>
<div class="callout key"><b>Pourquoi garder une session ouverte ?</b> Redémarrer <code>sshd</code> ne coupe pas les sessions déjà établies. Si la nouvelle configuration t'empêche de te reconnecter (erreur de syntaxe, clé mal installée…), la session restée ouverte permet de corriger. Sinon, sur une VM distante, l'accès est perdu.</div>
<h3>Client SSH : ~/.ssh/config et tunnel (TP ex.12)</h3>
<pre class="code"># ~/.ssh/config
Host binome
    HostName 192.168.1.20
    User etudiant
    Port 22
    IdentityFile ~/.ssh/id_ed25519
$ ssh binome</pre>
<p><b>Tunnel local</b> : <code>ssh -L 9000:localhost:9000 binome</code> ouvre le port 9000 sur VM-A ; tout ce qui y arrive est transporté dans la connexion SSH puis remis à <code>localhost:9000</code> <i>vu depuis VM-B</i>. Un serveur lancé sur VM-B avec <code>python3 -m http.server 9000 --bind 127.0.0.1</code> (accessible seulement en local) devient consultable sur VM-A via <code>http://localhost:9000</code>.</p>
<div class="callout tip"><b>Usage sur la VM Azure</b> Laisser phpMyAdmin (ou MySQL) accessible uniquement en local sur le serveur et y accéder à travers un tunnel SSH : aucun port supplémentaire à ouvrir dans le pare-feu, et le trafic est chiffré.</div>
`
    },
    {
      id: 'c4-s-ufw',
      title: '4. Pare-feu : principe et UFW',
      src: 'Cours 4 §4.1-4.3 · TP4 ex.7',
      html: `
<h3>Principe d'un pare-feu</h3>
<ul>
<li>Un pare-feu <b>filtre</b> le trafic selon des règles : adresse source / destination, protocole, port.</li>
<li>Chaque paquet est accepté (<b>ALLOW</b>) ou rejeté (<b>DENY</b>).</li>
<li>Bonne pratique : <b>tout bloquer en entrée par défaut</b>, puis n'ouvrir que les ports nécessaires.</li>
<li>Sous Linux, le filtrage est réalisé par <b>Netfilter</b> dans le noyau, piloté par <code>iptables</code> / <code>nftables</code>, ou plus simplement par <b>UFW</b>.</li>
</ul>
<h3>UFW (Uncomplicated Firewall)</h3>
<pre class="code">$ sudo apt install ufw
$ sudo ufw default deny incoming
$ sudo ufw default allow outgoing
$ sudo ufw allow ssh
$ sudo ufw allow 80/tcp
$ sudo ufw allow from 192.168.1.0/24 to any port 3306
$ sudo ufw deny 23
$ sudo ufw enable
$ sudo ufw status verbose
Status: active
To          Action   From
22/tcp      ALLOW    Anywhere
80/tcp      ALLOW    Anywhere</pre>
<div class="callout warn"><b>Ordre vital</b> Autoriser SSH (<code>sudo ufw allow ssh</code>) <b>AVANT</b> <code>sudo ufw enable</code> : avec la politique « deny incoming », activer le pare-feu sans cette règle coupe ta session SSH et tu perds l'accès à la machine distante. UFW prévient d'ailleurs : « Command may disrupt existing ssh connections ».</div>
<ul>
<li><code>sudo ufw status numbered</code> : liste les règles avec leur numéro ; <code>sudo ufw delete N</code> supprime la règle N (confirmation demandée). Les numéros se décalent après une suppression : réafficher avant d'en supprimer une autre.</li>
<li>Les règles sont <b>conservées au redémarrage</b>.</li>
<li><code>sudo ufw allow from 192.168.1.20 to any port 8080 proto tcp</code> : n'ouvre le port 8080 qu'à VM-B.</li>
<li><code>ufw allow 8080</code> sans <code>/tcp</code> ouvre TCP <b>et</b> UDP.</li>
</ul>
<h4>Expérience du TP (ex.7)</h4>
<ol>
<li>Sur VM-A : <code>python3 -m http.server 8080</code> (petit serveur web de test).</li>
<li>Depuis VM-B : <code>curl http://192.168.1.10:8080</code> → la requête reste sans réponse jusqu'à expiration : le pare-feu ignore les paquets (DENY).</li>
<li><code>sudo ufw allow 8080/tcp</code> → curl affiche la page (liste des fichiers).</li>
<li><code>sudo ufw status numbered</code> puis <code>sudo ufw delete N</code> pour retirer la règle.</li>
</ol>
<h3>Politique pour la VM Debian du semestre (web + PHP + MySQL)</h3>
<table class="tbl">
<tr><th>Port</th><th>Service</th><th>Règle</th><th>Justification</th></tr>
<tr><td>22/tcp</td><td>SSH</td><td>ALLOW</td><td>administration à distance (idéalement limitée à certaines IP)</td></tr>
<tr><td>80/tcp</td><td>HTTP</td><td>ALLOW</td><td>accès au site web</td></tr>
<tr><td>443/tcp</td><td>HTTPS</td><td>ALLOW</td><td>accès au site web chiffré</td></tr>
<tr><td>3306/tcp</td><td>MySQL</td><td>DENY (externe)</td><td>la base n'est utilisée que localement par PHP</td></tr>
<tr><td>autres</td><td>—</td><td>DENY</td><td>politique par défaut : tout le reste est bloqué</td></tr>
</table>
<pre class="code">$ sudo ufw allow 22/tcp &amp;&amp; sudo ufw allow 80/tcp &amp;&amp; sudo ufw allow 443/tcp &amp;&amp; sudo ufw enable</pre>
<div class="callout info"><b>Azure</b> La VM Azure est aussi protégée par le pare-feu d'Azure (« groupe de sécurité réseau », NSG). Un port doit être autorisé <b>aux deux niveaux</b> (NSG et UFW) pour être joignable.</div>
`
    },
    {
      id: 'c4-s-secu',
      title: '5. Sécuriser un serveur Linux',
      src: 'Cours 4 §5.1-5.4 · TP4 ex.8, 9, 13, 14, 15',
      html: `
<h3>5.1 Utilisateurs et sudo</h3>
<ul>
<li><b>Moindre privilège</b> : chaque utilisateur n'a que les droits nécessaires à son travail.</li>
<li>On évite de travailler en root : compte normal + <code>sudo</code> pour l'administration. <code>sudo</code> trace chaque commande dans le journal et peut être limité à certaines commandes.</li>
<li>Les droits sudo sont définis dans <code>/etc/sudoers</code>, à modifier <b>uniquement avec <code>sudo visudo</code></b> (il vérifie la syntaxe avant d'enregistrer : une erreur pourrait rendre sudo inutilisable).</li>
</ul>
<pre class="code">$ sudo adduser stagiaire
$ su - stagiaire
$ sudo apt update
stagiaire is not in the sudoers file.
$ exit
$ sudo usermod -aG sudo stagiaire
# stagiaire doit se reconnecter pour que le groupe soit pris en compte
$ groups stagiaire
stagiaire : stagiaire sudo
$ sudo -l
# droits sudo de l'utilisateur courant
$ sudo deluser stagiaire sudo
# retire stagiaire du groupe sudo (le compte reste)</pre>
<div class="callout warn"><b>Piège</b> <code>sudo deluser stagiaire sudo</code> retire seulement l'utilisateur du groupe ; <code>sudo deluser stagiaire</code> (sans groupe) <b>supprime le compte</b>.</div>
<h3>5.2 Mots de passe et comptes</h3>
<div class="grid2">
<div class="mini"><h4>/etc/passwd</h4><p>Liste des comptes, <b>lisible par tous</b>. Le 2e champ vaut <code>x</code> : le mot de passe est stocké ailleurs.</p></div>
<div class="mini"><h4>/etc/shadow</h4><p>Mots de passe <b>hachés</b> (empreintes, ex. <code>$y$…</code>), lisible <b>uniquement par root</b> : sinon n'importe qui pourrait tenter de casser les empreintes hors ligne.</p></div>
</div>
<p>Un mot de passe n'est <b>jamais stocké en clair</b>. Bonnes pratiques : mots de passe longs (12 caractères et plus) et uniques, verrouiller les comptes inutilisés, imposer une expiration, privilégier les clés SSH pour l'accès distant.</p>
<pre class="code">$ sudo grep stagiaire /etc/shadow
$ sudo passwd -l stagiaire      # verrouiller un compte
$ sudo chage -M 90 stagiaire    # mot de passe valable 90 jours
$ sudo chage -l stagiaire       # afficher la politique d'expiration</pre>
<div class="callout info"><b>passwd -l</b> ajoute un <code>!</code> devant l'empreinte dans <code>/etc/shadow</code> : plus aucune connexion par mot de passe (<code>passwd -u</code> déverrouille). Attention, une connexion par <b>clé SSH</b> reste possible ; pour bloquer totalement un compte, on peut aussi le faire expirer (<code>sudo chage -E 0 stagiaire</code>).</div>
<h3>5.3 Mises à jour et services inutiles</h3>
<ul>
<li>La plupart des attaques exploitent des <b>failles déjà corrigées</b> : <code>sudo apt update &amp;&amp; sudo apt upgrade</code> régulièrement ; <code>apt list --upgradable</code> montre les mises à jour en attente.</li>
<li><code>unattended-upgrades</code> installe automatiquement les mises à jour de sécurité.</li>
<li>Chaque service qui écoute sur le réseau est une <b>porte d'entrée</b> potentielle : les lister avec <code>sudo ss -tulpn</code>, puis arrêter et désactiver ce qui ne sert pas avec <code>sudo systemctl disable --now SERVICE</code>.</li>
</ul>
<pre class="code">$ sudo apt install unattended-upgrades
$ sudo ss -tulpn                       # quels services écoutent ?
$ sudo systemctl disable --now cups    # impression : inutile sur un serveur</pre>
<h3>5.4 Journaux et fail2ban</h3>
<ul>
<li><code>journalctl</code> : journal systemd ; <code>-u ssh</code> pour un service, <code>--since</code> pour une période, <code>-f</code> pour suivre en direct.</li>
<li><code>/var/log/auth.log</code> : authentifications (si rsyslog est installé).</li>
<li><code>last</code> : dernières connexions réussies ; <code>sudo lastb</code> : tentatives échouées (si disponible).</li>
</ul>
<pre class="code">$ sudo journalctl -u ssh --since today
Failed password for root from 203.0.113.7 port 51422 ssh2
$ sudo journalctl -u ssh | grep -i failed
$ last</pre>
<p><b>fail2ban</b> surveille les journaux et <b>bannit temporairement</b> (par une règle de pare-feu) les adresses IP qui accumulent les échecs de connexion : protection contre la force brute SSH.</p>
<pre class="code">$ sudo apt install fail2ban
$ sudo fail2ban-client status sshd
Currently banned: 3
Banned IP list: 203.0.113.7 …
$ sudo fail2ban-client set sshd unbanip 192.168.1.20</pre>
<pre class="code"># /etc/fail2ban/jail.local
[sshd]
enabled  = true
maxretry = 3
findtime = 10m
bantime  = 10m
backend  = systemd</pre>
<p>Lecture : <b>3 échecs</b> (maxretry) en <b>10 minutes</b> (findtime) → IP bannie <b>10 minutes</b> (bantime). Après <code>sudo systemctl restart fail2ban</code>, si VM-B échoue 3 fois, sa 4e tentative est bloquée.</p>
<div class="callout warn"><b>Limite de fail2ban</b> Face à une attaque <b>distribuée</b> (des milliers d'IP qui tentent chacune quelques mots de passe), aucune IP n'atteint le seuil. Mesure plus efficace : l'authentification <b>par clés uniquement</b> (<code>PasswordAuthentication no</code>) — il n'y a plus de mot de passe à deviner.</div>
<h3>Script d'audit (TP ex.14)</h3>
<pre class="code">#!/bin/bash
# audit_securite.sh – à lancer avec sudo
if ufw status | grep -q "Status: active"; then
    echo "[OK]     Pare-feu actif"
else
    echo "[ALERTE] Pare-feu inactif"
fi
grep -E "^(PermitRootLogin|PasswordAuthentication)" /etc/ssh/sshd_config
getent group sudo        # membres du groupe sudo
ss -tulpn                # ports en écoute</pre>
<h3>Ordre de durcissement de la VM Azure (TP ex.15)</h3>
<div class="flow"><span>Compte personnel + sudo</span><span>Clé SSH copiée et testée</span><span>sshd_config : root et mots de passe interdits</span><span>UFW : allow ssh puis enable (+ NSG Azure)</span><span>unattended-upgrades</span><span>fail2ban</span><span>Script d'audit</span></div>
`
    },
    {
      id: 'c4-s-memento',
      title: 'Mémento — Réseau et sécurité',
      src: 'Cours 4 §6 · TP4 récapitulatif',
      html: `
<h3>Réseau</h3>
<table class="tbl">
<tr><th>Besoin</th><th>Commande</th></tr>
<tr><td>Interfaces et IP / état et MAC / routes</td><td><code>ip a</code> · <code>ip link</code> · <code>ip route</code></td></tr>
<tr><td>Ajouter / retirer une IP (temporaire)</td><td><code>sudo ip addr add|del IP/CIDR dev enp0s3</code></td></tr>
<tr><td>Activer / désactiver une interface</td><td><code>sudo ip link set enp0s3 up|down</code></td></tr>
<tr><td>Passerelle par défaut (temporaire)</td><td><code>sudo ip route add default via 192.168.1.1</code></td></tr>
<tr><td>Adresse par DHCP</td><td><code>sudo dhclient enp0s3</code></td></tr>
<tr><td>Configuration permanente</td><td><code>/etc/network/interfaces</code> + <code>sudo systemctl restart networking</code></td></tr>
<tr><td>NetworkManager</td><td><code>nmcli device status</code></td></tr>
<tr><td>Nom d'hôte</td><td><code>sudo hostnamectl set-hostname NOM</code> (/etc/hostname)</td></tr>
<tr><td>Résolution locale / serveurs DNS</td><td><code>/etc/hosts</code> · <code>/etc/resolv.conf</code></td></tr>
<tr><td>Tester le DNS / la résolution système</td><td><code>dig +short nom</code> · <code>getent hosts nom</code></td></tr>
<tr><td>Diagnostic</td><td><code>ping -c 4</code> · <code>traceroute</code> · <code>sudo ss -tulpn</code> · <code>curl -I</code> · <code>tcpdump</code></td></tr>
</table>
<h3>SSH</h3>
<table class="tbl">
<tr><th>Besoin</th><th>Commande</th></tr>
<tr><td>Se connecter (port 22 / autre port)</td><td><code>ssh user@machine</code> · <code>ssh -p 2222 user@machine</code></td></tr>
<tr><td>Commande à distance</td><td><code>ssh user@machine 'hostname; uptime'</code></td></tr>
<tr><td>Copier des fichiers</td><td><code>scp fichier user@machine:~/</code> · <code>scp -r</code> · <code>scp -P 2222</code></td></tr>
<tr><td>Clés</td><td><code>ssh-keygen -t ed25519</code> · <code>ssh-copy-id user@machine</code></td></tr>
<tr><td>Durcir</td><td><code>/etc/ssh/sshd_config</code> : <code>PermitRootLogin no</code>, <code>PasswordAuthentication no</code></td></tr>
<tr><td>Appliquer</td><td><code>sudo sshd -t</code> puis <code>sudo systemctl restart ssh</code></td></tr>
<tr><td>Tunnel</td><td><code>ssh -L 9000:localhost:9000 binome</code></td></tr>
</table>
<h3>Pare-feu et sécurité</h3>
<table class="tbl">
<tr><th>Besoin</th><th>Commande</th></tr>
<tr><td>Politique par défaut</td><td><code>sudo ufw default deny incoming</code> · <code>sudo ufw default allow outgoing</code></td></tr>
<tr><td>Ouvrir (SSH d'abord !) puis activer</td><td><code>sudo ufw allow ssh</code> → <code>sudo ufw enable</code></td></tr>
<tr><td>Lister / supprimer une règle</td><td><code>sudo ufw status numbered</code> · <code>sudo ufw delete N</code></td></tr>
<tr><td>Ouvrir pour une seule source</td><td><code>sudo ufw allow from IP to any port 8080 proto tcp</code></td></tr>
<tr><td>Droits sudo</td><td><code>sudo usermod -aG sudo user</code> · <code>sudo deluser user sudo</code> · <code>sudo visudo</code></td></tr>
<tr><td>Comptes</td><td><code>sudo passwd -l user</code> · <code>sudo chage -M 90 user</code> · <code>sudo chage -l user</code></td></tr>
<tr><td>Mises à jour</td><td><code>sudo apt update &amp;&amp; sudo apt upgrade</code> · <code>unattended-upgrades</code></td></tr>
<tr><td>Services inutiles</td><td><code>sudo systemctl disable --now cups</code></td></tr>
<tr><td>Journaux</td><td><code>sudo journalctl -u ssh</code> · <code>last</code> · <code>sudo lastb</code></td></tr>
<tr><td>fail2ban</td><td><code>sudo fail2ban-client status sshd</code> · <code>set sshd unbanip IP</code></td></tr>
</table>
`
    }
  ],

  // ===================================================================
  // 2. COMMANDES
  // ===================================================================
  commands: [
    { id: 'c4-cmd-ipa', cmd: 'ip a',
      syntax: 'ip a [show INTERFACE]',
      desc: "Affiche les interfaces réseau et leurs adresses IP.",
      details: "Abréviation de `ip addr` / `ip address` (paquet iproute2, remplace `ifconfig`). À lire : `inet 192.168.1.10/24` = IP et masque CIDR, `brd` = adresse de diffusion, `link/ether` = adresse MAC, `UP` = interface active. Pas besoin de sudo pour afficher.",
      example: 'ip a show enp0s3',
      src: 'Cours 4 §2.1 · TP4 ex.1' },
    { id: 'c4-cmd-iplink', cmd: 'ip link',
      syntax: 'ip link [show INTERFACE]',
      desc: "Affiche l'état (UP / DOWN) et l'adresse MAC des interfaces, sans les adresses IP.",
      details: "Agit sur la couche accès réseau. La ligne `link/ether 08:00:27:3a:1b:9c` donne l'adresse MAC.",
      example: 'ip link show enp0s3',
      src: 'Cours 4 §2.1 · TP4 ex.1' },
    { id: 'c4-cmd-iproute', cmd: 'ip route',
      syntax: 'ip route',
      desc: "Affiche la table de routage ; la ligne `default via` donne la passerelle par défaut.",
      details: "Abréviation `ip r`. `default via 192.168.1.1 dev enp0s3` = passerelle. Les lignes `proto kernel` sont créées automatiquement pour chaque réseau directement connecté. Remplace l'ancienne commande `route`.",
      example: 'ip route',
      src: 'Cours 4 §2.1 · TP4 ex.1, ex.3' },
    { id: 'c4-cmd-iplinkset', cmd: 'ip link set up/down',
      syntax: 'sudo ip link set INTERFACE up|down',
      desc: "Active ou désactive une interface (effet immédiat, temporaire).",
      details: "Nécessite sudo. Sur une machine distante, désactiver l'interface par laquelle tu es connecté coupe ta propre session SSH.",
      example: 'sudo ip link set enp0s3 down',
      src: 'Cours 4 §2.2 · TP4 ex.2' },
    { id: 'c4-cmd-ipaddradd', cmd: 'ip addr add',
      syntax: 'sudo ip addr add IP/CIDR dev INTERFACE',
      desc: "Ajoute une adresse IP à une interface, jusqu'au prochain redémarrage.",
      details: "Une interface peut porter plusieurs adresses. Le noyau ajoute automatiquement la route du réseau (ex. `10.10.10.0/24 dev enp0s3 proto kernel`). Sans `/CIDR`, l'adresse est en /32 (aucune route de réseau). Perdue au redémarrage : pour du permanent, éditer /etc/network/interfaces.",
      example: 'sudo ip addr add 10.10.10.5/24 dev enp0s3',
      src: 'Cours 4 §2.2 · TP4 ex.3' },
    { id: 'c4-cmd-ipaddrdel', cmd: 'ip addr del',
      syntax: 'sudo ip addr del IP/CIDR dev INTERFACE',
      desc: "Supprime une adresse IP d'une interface.",
      details: "Indiquer l'adresse avec son préfixe, tel qu'il a été ajouté. `del` peut aussi s'écrire `delete`. La route du réseau associée disparaît avec l'adresse.",
      example: 'sudo ip addr del 192.168.1.50/24 dev enp0s3',
      src: 'Cours 4 §2.2' },
    { id: 'c4-cmd-iprouteadd', cmd: 'ip route add default via',
      syntax: 'sudo ip route add default via IP_PASSERELLE',
      desc: "Définit la passerelle par défaut (temporaire).",
      details: "Tout le trafic destiné aux autres réseaux est envoyé à ce routeur, qui doit appartenir au réseau de l'interface. Si une route par défaut existe déjà, ip répond `File exists` : la supprimer d'abord (`ip route del default`).",
      example: 'sudo ip route add default via 192.168.1.1',
      src: 'Cours 4 §2.2' },
    { id: 'c4-cmd-dhclient', cmd: 'dhclient',
      syntax: 'sudo dhclient INTERFACE',
      desc: "Demande une configuration (IP, masque, passerelle, DNS) au serveur DHCP.",
      details: "Client DHCP de Debian (paquet isc-dhcp-client). `sudo dhclient -r enp0s3` libère le bail obtenu.",
      example: 'sudo dhclient enp0s3',
      src: 'Cours 4 §2.2' },
    { id: 'c4-cmd-networking', cmd: 'systemctl restart networking',
      syntax: 'sudo systemctl restart networking',
      desc: "Applique la configuration permanente de /etc/network/interfaces.",
      details: "Service ifupdown de Debian. Alternative interface par interface : `sudo ifdown enp0s3` puis `sudo ifup enp0s3`. Toujours sauvegarder le fichier avant (cp … interfaces.bak) et vérifier après avec ip a, ip route et un ping. Journaux : `journalctl -u networking`.",
      example: 'sudo systemctl restart networking',
      src: 'Cours 4 §2.3 · TP4 ex.4' },
    { id: 'c4-cmd-nmcli', cmd: 'nmcli device status',
      syntax: 'nmcli device status',
      desc: "Liste les interfaces et indique si NetworkManager les gère.",
      details: "Si l'interface est gérée par NetworkManager (connectée), on la configure avec `nmcli connection modify …` ou l'interface graphique plutôt qu'avec /etc/network/interfaces. État « non géré » (unmanaged) = c'est ifupdown qui s'en occupe.",
      example: 'nmcli device status',
      src: 'Cours 4 §2.3 · TP4 ex.4' },
    { id: 'c4-cmd-hostnamectl', cmd: 'hostnamectl set-hostname',
      syntax: 'hostnamectl  |  sudo hostnamectl set-hostname NOM',
      desc: "Affiche (sans argument) ou change le nom d'hôte de la machine.",
      details: "Le nom est enregistré dans /etc/hostname : changement immédiat et permanent. L'invite change dans un nouveau terminal. Penser à mettre à jour la ligne 127.0.1.1 de /etc/hosts.",
      example: 'sudo hostnamectl set-hostname srv-web',
      src: 'Cours 4 §2.4 · TP4 ex.1, ex.4' },
    { id: 'c4-cmd-dig', cmd: 'dig',
      syntax: 'dig [+short] NOM',
      desc: "Interroge directement un serveur DNS pour résoudre un nom.",
      details: "Section ANSWER = réponse ; ligne `;; SERVER:` = serveur qui a répondu. `+short` n'affiche que l'adresse. Ne lit PAS /etc/hosts. `nslookup eseo.fr` fait le même travail avec un affichage plus simple. Paquet dnsutils.",
      example: 'dig +short eseo.fr',
      src: 'Cours 4 §2.4-2.5 · TP4 ex.2' },
    { id: 'c4-cmd-getent', cmd: 'getent hosts',
      syntax: 'getent hosts NOM',
      desc: "Teste la résolution complète du système (/etc/hosts puis DNS).",
      details: "Suit l'ordre défini dans /etc/nsswitch.conf, comme ping, ssh ou curl. Trouve donc les noms déclarés dans /etc/hosts, contrairement à dig.",
      example: 'getent hosts binome',
      src: 'Cours 4 §2.4 · TP4 ex.4' },
    { id: 'c4-cmd-ping', cmd: 'ping -c',
      syntax: 'ping -c N CIBLE',
      desc: "Teste la joignabilité d'une machine (ICMP) en envoyant N paquets.",
      details: "Sans -c, ping tourne indéfiniment (Ctrl+C). ttl = compteur décrémenté à chaque routeur ; time = temps d'aller-retour en ms. Le bilan final donne le pourcentage de paquets perdus.",
      example: 'ping -c 4 192.168.1.1',
      src: 'Cours 4 §2.5 · TP4 ex.2' },
    { id: 'c4-cmd-traceroute', cmd: 'traceroute',
      syntax: 'traceroute CIBLE',
      desc: "Affiche la liste des routeurs traversés jusqu'à une cible.",
      details: "Une ligne par saut ; `* * *` = routeur qui ne répond pas. À installer : `sudo apt install traceroute`. (Sous Windows : tracert.)",
      example: 'traceroute eseo.fr',
      src: 'Cours 4 §2.5 · TP4 ex.2' },
    { id: 'c4-cmd-ss', cmd: 'ss -tulpn',
      syntax: 'sudo ss -tulpn',
      desc: "Liste les ports en écoute (TCP et UDP) avec le processus associé.",
      details: "-t TCP, -u UDP, -l en écoute (listening), -p processus, -n numérique (ports en chiffres). sudo pour voir les processus de tous les utilisateurs. `0.0.0.0:22` = toutes les interfaces ; `127.0.0.1:3306` = local seulement. Remplace l'ancien netstat.",
      example: 'sudo ss -tlnp | grep ssh',
      src: 'Cours 4 §2.5, §5.3 · TP4 ex.2, ex.5, ex.9' },
    { id: 'c4-cmd-curl', cmd: 'curl -I',
      syntax: 'curl -I URL',
      desc: "Teste un serveur web en n'affichant que les en-têtes de la réponse.",
      details: "-I (i majuscule) envoie une requête HEAD : on voit le code (200 OK, 404…) et les en-têtes. Sans option, curl affiche le contenu de la page ; -i minuscule affiche en-têtes ET contenu.",
      example: 'curl -I http://192.168.1.20',
      src: 'Cours 4 §2.5 · TP4 ex.7' },
    { id: 'c4-cmd-journalctl', cmd: 'journalctl -u',
      syntax: 'sudo journalctl -u SERVICE [--since PÉRIODE] [-f]',
      desc: "Consulte le journal systemd d'un service.",
      details: "`-u ssh` (connexions SSH), `-u networking` (réseau). `--since today` ou `--since \"10 min ago\"` limite la période ; `-f` suit en direct. Avec un filtre : `| grep -i failed` pour les échecs d'authentification.",
      example: 'sudo journalctl -u ssh --since "10 min ago"',
      src: 'Cours 4 §2.5, §5.4 · TP4 ex.5, ex.9' },
    { id: 'c4-cmd-tcpdump', cmd: 'tcpdump',
      syntax: 'sudo tcpdump -i INTERFACE -A port N',
      desc: "Capture et affiche le trafic réseau.",
      details: "-i any = toutes les interfaces ; -A = contenu des paquets en ASCII ; `port 8080` = filtre. Montre que HTTP circule en clair alors que SSH est illisible (chiffré). Ctrl+C pour arrêter.",
      example: 'sudo tcpdump -i any -A port 8080',
      src: 'TP4 ex.11' },
    { id: 'c4-cmd-ipcalc', cmd: 'ipcalc',
      syntax: 'ipcalc IP/CIDR',
      desc: "Calcule masque, adresse réseau, diffusion et plage d'hôtes.",
      details: "Outil de vérification des calculs d'adressage (`sudo apt install ipcalc`).",
      example: 'ipcalc 10.0.5.130/26',
      src: 'TP4 ex.10' },
    { id: 'c4-cmd-ssh', cmd: 'ssh',
      syntax: 'ssh utilisateur@machine',
      desc: "Ouvre une session shell chiffrée sur une machine distante.",
      details: "À la 1re connexion, vérifier l'empreinte du serveur (enregistrée ensuite dans ~/.ssh/known_hosts). Fermer avec exit ou Ctrl+D. Sans `utilisateur@`, ssh utilise ton nom d'utilisateur local.",
      example: 'ssh etudiant@192.168.1.20',
      src: 'Cours 4 §3.2 · TP4 ex.5' },
    { id: 'c4-cmd-sshp', cmd: 'ssh -p',
      syntax: 'ssh -p PORT utilisateur@machine',
      desc: "Se connecte à un serveur SSH qui n'écoute pas sur le port 22.",
      details: "p minuscule pour ssh, P MAJUSCULE pour scp. La notation machine:port n'existe pas pour ssh.",
      example: 'ssh -p 2222 admin@20.19.8.4',
      src: 'Cours 4 §3.2' },
    { id: 'c4-cmd-sshcmd', cmd: "ssh … 'commande'",
      syntax: "ssh utilisateur@machine 'cmd1; cmd2'",
      desc: "Exécute une ou plusieurs commandes à distance sans ouvrir de session.",
      details: "Les guillemets sont indispensables avec `;`, `|` ou `>` : sinon c'est ton shell local qui interprète la suite de la ligne.",
      example: "ssh etudiant@192.168.1.20 'hostname; uptime'",
      src: 'Cours 4 §3.2 · TP4 ex.5' },
    { id: 'c4-cmd-scp', cmd: 'scp',
      syntax: 'scp [-r] SOURCE utilisateur@machine:CHEMIN  |  scp utilisateur@machine:CHEMIN DEST',
      desc: "Copie des fichiers vers ou depuis une machine distante, via SSH.",
      details: "Le `:` marque le côté distant (`:~/` ou `:` seul = répertoire personnel). -r pour un répertoire. Sans `:`, scp fait une simple copie locale.",
      example: 'scp rapport.txt etudiant@192.168.1.20:~/',
      src: 'Cours 4 §3.2 · TP4 ex.5' },
    { id: 'c4-cmd-scpP', cmd: 'scp -P',
      syntax: 'scp -P PORT fichier utilisateur@machine:CHEMIN',
      desc: "Copie via un serveur SSH qui écoute sur un port non standard.",
      details: "P MAJUSCULE : avec scp, -p minuscule signifie « préserver dates et droits ». Piège classique : ssh -p mais scp -P.",
      example: 'scp -P 2222 rapport.pdf admin@20.19.8.4:~/',
      src: 'Cours 4 §3.2' },
    { id: 'c4-cmd-keygen', cmd: 'ssh-keygen -t ed25519',
      syntax: 'ssh-keygen -t ed25519',
      desc: "Génère une paire de clés SSH (privée + publique).",
      details: "Crée ~/.ssh/id_ed25519 (privée : ne jamais la partager, droits 600) et ~/.ssh/id_ed25519.pub (publique). Une phrase de passe protège la clé privée en cas de vol. `ssh-keygen -R hôte` retire une ancienne empreinte de known_hosts.",
      example: 'ssh-keygen -t ed25519',
      src: 'Cours 4 §3.3 · TP4 ex.6' },
    { id: 'c4-cmd-copyid', cmd: 'ssh-copy-id',
      syntax: 'ssh-copy-id utilisateur@machine',
      desc: "Installe ta clé publique dans ~/.ssh/authorized_keys sur le serveur.",
      details: "Demande une dernière fois le mot de passe du compte distant. Crée ~/.ssh et authorized_keys avec les bons droits si besoin. `-i ~/.ssh/id_ed25519.pub` pour choisir la clé. Seule la clé publique est envoyée.",
      example: 'ssh-copy-id etudiant@192.168.1.20',
      src: 'Cours 4 §3.3 · TP4 ex.6' },
    { id: 'c4-cmd-sshdt', cmd: 'sshd -t',
      syntax: 'sudo sshd -t',
      desc: "Vérifie la syntaxe de /etc/ssh/sshd_config avant de redémarrer le service.",
      details: "Aucune sortie = configuration valide ; sinon le fichier et la ligne fautive sont indiqués. À faire systématiquement avant `systemctl restart ssh` pour ne pas se retrouver sans serveur SSH.",
      example: 'sudo sshd -t',
      src: 'Cours 4 §3.4 · TP4 ex.6' },
    { id: 'c4-cmd-sshrestart', cmd: 'systemctl restart ssh',
      syntax: 'sudo systemctl restart ssh',
      desc: "Redémarre le serveur SSH pour appliquer sshd_config.",
      details: "Sous Debian, le service s'appelle ssh (sshd en est un alias). Les sessions déjà ouvertes ne sont pas coupées : garder une session ouverte et tester depuis un nouveau terminal. `systemctl status ssh` pour vérifier.",
      example: 'sudo systemctl restart ssh',
      src: 'Cours 4 §3.4 · TP4 ex.6' },
    { id: 'c4-cmd-sshnopub', cmd: 'ssh -o PubkeyAuthentication=no',
      syntax: 'ssh -o PubkeyAuthentication=no utilisateur@machine',
      desc: "Force une connexion SSH sans clé, pour vérifier que le mot de passe est bien refusé.",
      details: "-o passe une option de configuration au client (syntaxe Option=valeur). Après `PasswordAuthentication no` sur le serveur, on doit obtenir « Permission denied (publickey) ».",
      example: 'ssh -o PubkeyAuthentication=no etudiant@192.168.1.20',
      src: 'TP4 ex.6' },
    { id: 'c4-cmd-sshL', cmd: 'ssh -L',
      syntax: 'ssh -L PORT_LOCAL:HÔTE:PORT_DISTANT utilisateur@machine',
      desc: "Crée un tunnel : un port local est relayé, via SSH, vers un service vu depuis le serveur.",
      details: "`ssh -L 9000:localhost:9000 binome` : http://localhost:9000 sur VM-A atteint le port 9000 local de binome (ici, localhost = binome). Avec un fichier ~/.ssh/config (Host binome, HostName, User, Port, IdentityFile), `ssh binome` suffit. Utile pour atteindre phpMyAdmin sans ouvrir de port.",
      example: 'ssh -L 9000:localhost:9000 binome',
      src: 'TP4 ex.12' },
    { id: 'c4-cmd-who', cmd: 'who',
      syntax: 'who',
      desc: "Liste les utilisateurs connectés en ce moment (terminal, date, IP d'origine).",
      details: "Côté serveur, montre les sessions SSH ouvertes (pts/0…). Pour l'historique des connexions, c'est last.",
      example: 'who',
      src: 'TP4 ex.5' },
    { id: 'c4-cmd-ufwstatus', cmd: 'ufw status',
      syntax: 'sudo ufw status [verbose]',
      desc: "Affiche l'état du pare-feu et ses règles.",
      details: "`Status: inactive` tant que `ufw enable` n'a pas été lancé. `verbose` ajoute les politiques par défaut (deny incoming, allow outgoing).",
      example: 'sudo ufw status verbose',
      src: 'Cours 4 §4.2 · TP4 ex.7' },
    { id: 'c4-cmd-ufwdefault', cmd: 'ufw default',
      syntax: 'sudo ufw default deny incoming  |  sudo ufw default allow outgoing',
      desc: "Définit la politique par défaut des connexions entrantes / sortantes.",
      details: "Bonne pratique : tout bloquer en entrée, tout autoriser en sortie, puis ouvrir uniquement les ports utiles.",
      example: 'sudo ufw default deny incoming',
      src: 'Cours 4 §4.2 · TP4 ex.7' },
    { id: 'c4-cmd-ufwallow', cmd: 'ufw allow / deny',
      syntax: 'sudo ufw allow|deny SERVICE|PORT[/PROTO]',
      desc: "Autorise (ou bloque) un service ou un port en entrée.",
      details: "`ufw allow ssh` = 22/tcp (nom lu dans /etc/services) ; `ufw allow 80/tcp` ; sans /tcp, TCP et UDP sont ouverts. `ufw deny 23` bloque explicitement Telnet. Pour SSH : AVANT ufw enable.",
      example: 'sudo ufw allow 8080/tcp',
      src: 'Cours 4 §4.2 · TP4 ex.7' },
    { id: 'c4-cmd-ufwfrom', cmd: 'ufw allow from … to any port',
      syntax: 'sudo ufw allow from IP_SOURCE to any port PORT [proto tcp]',
      desc: "Autorise un port uniquement pour une adresse ou un réseau source.",
      details: "`from 192.168.1.20` = une seule machine ; `from 192.168.1.0/24` = tout le réseau local ; `to any` = n'importe quelle adresse de ce serveur ; `proto tcp` restreint au TCP.",
      example: 'sudo ufw allow from 192.168.1.0/24 to any port 3306',
      src: 'Cours 4 §4.2 · TP4 ex.7' },
    { id: 'c4-cmd-ufwenable', cmd: 'ufw enable',
      syntax: 'sudo ufw enable',
      desc: "Active le pare-feu (et son activation automatique au démarrage).",
      details: "Avertit : « Command may disrupt existing ssh connections. Proceed with operation (y|n)? ». Sur une machine distante, vérifier AVANT que SSH est autorisé. `sudo ufw disable` le désactive.",
      example: 'sudo ufw enable',
      src: 'Cours 4 §4.2 · TP4 ex.7' },
    { id: 'c4-cmd-ufwnumbered', cmd: 'ufw status numbered',
      syntax: 'sudo ufw status numbered',
      desc: "Liste les règles avec leur numéro.",
      details: "Indispensable avant `ufw delete N`. Les règles IPv6 (v6) apparaissent avec leur propre numéro.",
      example: 'sudo ufw status numbered',
      src: 'Cours 4 §4.2 · TP4 ex.7' },
    { id: 'c4-cmd-ufwdelete', cmd: 'ufw delete',
      syntax: 'sudo ufw delete N',
      desc: "Supprime la règle numéro N (vue avec ufw status numbered).",
      details: "Confirmation demandée (y/n). Après suppression, les numéros suivants se décalent : réafficher la liste. Variante : `sudo ufw delete allow 8080/tcp` (règle décrite en clair).",
      example: 'sudo ufw delete 3',
      src: 'Cours 4 §4.2 · TP4 ex.7' },
    { id: 'c4-cmd-httpserver', cmd: 'python3 -m http.server',
      syntax: 'python3 -m http.server PORT [--bind IP]',
      desc: "Lance un petit serveur web de test qui sert le répertoire courant.",
      details: "Écoute par défaut sur toutes les interfaces (port 8000 si non précisé). `--bind 127.0.0.1` le rend accessible seulement en local. Ctrl+C pour l'arrêter. Pratique pour tester le pare-feu.",
      example: 'python3 -m http.server 8080',
      src: 'TP4 ex.7, ex.11, ex.12' },
    { id: 'c4-cmd-usermodsudo', cmd: 'usermod -aG sudo',
      syntax: 'sudo usermod -aG sudo NOM',
      desc: "Donne les droits d'administration (sudo) à un utilisateur.",
      details: "Créer d'abord le compte avec `sudo adduser NOM`. -a ajoute sans retirer les autres groupes. L'utilisateur doit se reconnecter ; vérifier avec `groups NOM` et, connecté en tant que lui, `sudo -l` (liste ses droits sudo).",
      example: 'sudo usermod -aG sudo stagiaire',
      src: 'Cours 4 §5.1 · TP4 ex.8' },
    { id: 'c4-cmd-deluser', cmd: 'deluser NOM GROUPE',
      syntax: 'sudo deluser NOM GROUPE',
      desc: "Retire un utilisateur d'un groupe (ex. sudo) sans supprimer son compte.",
      details: "Attention : `sudo deluser NOM` sans groupe SUPPRIME le compte. Équivalent : `sudo gpasswd -d NOM sudo`.",
      example: 'sudo deluser stagiaire sudo',
      src: 'TP4 ex.8' },
    { id: 'c4-cmd-visudo', cmd: 'visudo',
      syntax: 'sudo visudo',
      desc: "Édite /etc/sudoers en vérifiant la syntaxe avant d'enregistrer.",
      details: "Ne jamais éditer /etc/sudoers directement : une erreur de syntaxe rendrait sudo inutilisable. Sous Debian, on préfère simplement ajouter l'utilisateur au groupe sudo.",
      example: 'sudo visudo',
      src: 'Cours 4 §5.1' },
    { id: 'c4-cmd-passwdl', cmd: 'passwd -l',
      syntax: 'sudo passwd -l NOM',
      desc: "Verrouille le mot de passe d'un compte inutilisé.",
      details: "Ajoute `!` devant l'empreinte dans /etc/shadow : connexion par mot de passe impossible. Une clé SSH reste utilisable. `passwd -u` déverrouille.",
      example: 'sudo passwd -l stagiaire',
      src: 'Cours 4 §5.2 · TP4 ex.8' },
    { id: 'c4-cmd-chage', cmd: 'chage -M / -l',
      syntax: 'sudo chage -M JOURS NOM  |  sudo chage -l NOM',
      desc: "Gère l'expiration des mots de passe.",
      details: "-M 90 : mot de passe valable 90 jours au maximum (-m minuscule = délai minimum) ; -l : affiche la politique (dernier changement, expiration…). `chage -E 0 NOM` fait expirer le compte.",
      example: 'sudo chage -M 90 stagiaire',
      src: 'Cours 4 §5.2 · TP4 ex.8' },
    { id: 'c4-cmd-apt', cmd: 'apt update && apt upgrade',
      syntax: 'sudo apt update && sudo apt upgrade',
      desc: "Met à jour la liste des paquets puis installe les mises à jour.",
      details: "&& : upgrade ne s'exécute que si update a réussi. `apt list --upgradable` liste les mises à jour en attente. `sudo apt install unattended-upgrades` automatise les mises à jour de sécurité.",
      example: 'sudo apt update && sudo apt upgrade',
      src: 'Cours 4 §5.3 · TP4 ex.9' },
    { id: 'c4-cmd-disable', cmd: 'systemctl disable --now',
      syntax: 'sudo systemctl disable --now SERVICE',
      desc: "Arrête immédiatement un service ET empêche son démarrage au boot.",
      details: "Réduit la surface d'attaque (ex. cups, l'impression, inutile sur un serveur). `disable` seul ne l'arrête qu'au prochain démarrage ; `stop` seul le laisse redémarrer au boot.",
      example: 'sudo systemctl disable --now cups',
      src: 'Cours 4 §5.3 · TP4 ex.9' },
    { id: 'c4-cmd-last', cmd: 'last / lastb',
      syntax: 'last  |  sudo lastb',
      desc: "Historique des connexions réussies (last) et des tentatives échouées (lastb).",
      details: "last lit /var/log/wtmp ; lastb lit /var/log/btmp, réservé à root (si disponible sur le système).",
      example: 'sudo lastb',
      src: 'Cours 4 §5.4 · TP4 ex.9' },
    { id: 'c4-cmd-f2bstatus', cmd: 'fail2ban-client status sshd',
      syntax: 'sudo fail2ban-client status sshd',
      desc: "Affiche l'état de la prison SSH de fail2ban : échecs, IP bannies.",
      details: "fail2ban surveille les journaux et bannit temporairement (règle de pare-feu) les IP qui dépassent maxretry échecs en findtime. Réglages dans /etc/fail2ban/jail.local, puis `sudo systemctl restart fail2ban`.",
      example: 'sudo fail2ban-client status sshd',
      src: 'Cours 4 §5.4 · TP4 ex.9, ex.13' },
    { id: 'c4-cmd-f2bunban', cmd: 'fail2ban-client set sshd unbanip',
      syntax: 'sudo fail2ban-client set PRISON unbanip IP',
      desc: "Débannit manuellement une adresse IP.",
      details: "Retire l'IP de la liste des bannis de la prison (et la règle de pare-feu associée).",
      example: 'sudo fail2ban-client set sshd unbanip 192.168.1.20',
      src: 'TP4 ex.13' }
  ],

  // ===================================================================
  // 3. FLASHCARDS (notions)
  // ===================================================================
  flashcards: [
    { id: 'c4-f-couches', front: 'Modèle TCP/IP : quelle adresse à quelle couche ?',
      back: "Accès réseau → adresse MAC (lien local). Internet → adresse IP (joindre une machine). Transport → port (joindre un service). Application → HTTP, SSH, DNS…" },
    { id: 'c4-f-cidr', front: 'Notation CIDR /n',
      back: "n bits à 1 dans le masque = partie réseau. /8 = 255.0.0.0, /16 = 255.255.0.0, /24 = 255.255.255.0, /26 = 255.255.255.192, /30 = 255.255.255.252. Hôtes = 2^(32−n) − 2." },
    { id: 'c4-f-reseau-diffusion', front: 'Adresse réseau et adresse de diffusion',
      back: "Réseau : bits hôte tous à 0 (192.168.1.0/24). Diffusion (broadcast) : bits hôte tous à 1 (192.168.1.255). Aucune des deux n'est attribuable à une machine, d'où le « − 2 »." },
    { id: 'c4-f-bloc', front: 'Méthode du bloc (exemple 10.0.5.130/26)',
      back: "Bloc = 256 − 192 = 64. Réseau = multiple de 64 inférieur ou égal à 130 → 10.0.5.128. Diffusion = 128 + 64 − 1 → 10.0.5.191. Hôtes : .129 à .190 (62)." },
    { id: 'c4-f-prives', front: "Plages d'adresses privées et bouclage",
      back: "10.0.0.0/8, 172.16.0.0/12 (172.16 à 172.31), 192.168.0.0/16 : non routées sur Internet. Bouclage : 127.0.0.1 = localhost, interface lo." },
    { id: 'c4-f-dns-dhcp', front: 'DNS, DHCP et passerelle',
      back: "DNS : traduit un nom en IP (port 53, serveurs dans /etc/resolv.conf). DHCP : distribue automatiquement IP, masque, passerelle et DNS. Passerelle : routeur pour joindre les autres réseaux (ip route → default via)." },
    { id: 'c4-f-ports', front: 'Ports à connaître',
      back: "SSH 22, HTTP 80, HTTPS 443, DNS 53, FTP 21, SMTP 25, MySQL 3306, RDP 3389. Ports inférieurs à 1024 réservés à root. IP + port = socket." },
    { id: 'c4-f-temp-perm', front: 'Configuration réseau temporaire vs permanente',
      back: "Temporaire : commandes ip (ip addr add, ip link set, ip route add) — perdues au redémarrage. Permanente : /etc/network/interfaces + sudo systemctl restart networking, ou NetworkManager (nmcli)." },
    { id: 'c4-f-fichiers-dns', front: '/etc/hostname, /etc/hosts, /etc/resolv.conf',
      back: "/etc/hostname : nom de la machine. /etc/hosts : résolution locale nom → IP, prioritaire sur le DNS. /etc/resolv.conf : serveurs DNS utilisés (lignes nameserver)." },
    { id: 'c4-f-dig-hosts', front: 'Pourquoi `dig binome` échoue alors que `ping binome` marche ?',
      back: "dig interroge directement le serveur DNS et ignore /etc/hosts. ping, ssh et getent hosts utilisent la résolution du système (/etc/hosts puis DNS, selon /etc/nsswitch.conf)." },
    { id: 'c4-f-methode', front: 'Méthode de diagnostic réseau en 5 étapes',
      back: "1 Interface (ip a) → 2 Passerelle (ping 192.168.1.1) → 3 Internet (ping 1.1.1.1) → 4 DNS (ping eseo.fr, dig) → 5 Service (curl -I, ss -tulpn). La première étape qui échoue localise la panne." },
    { id: 'c4-f-ttl', front: 'ping : que signifient ttl et time ?',
      back: "ttl (Time To Live) : compteur décrémenté par chaque routeur, le paquet est détruit à 0 (évite les boucles). time : temps d'aller-retour du paquet en millisecondes." },
    { id: 'c4-f-fingerprint', front: 'Empreinte (fingerprint) et ~/.ssh/known_hosts',
      back: "Hachage de la clé publique du serveur, affiché à la 1re connexion pour vérifier son identité (contre l'homme du milieu). Une fois acceptée, elle est stockée dans ~/.ssh/known_hosts et le message ne revient plus." },
    { id: 'c4-f-cles', front: 'Clé privée / clé publique SSH',
      back: "ssh-keygen -t ed25519 crée id_ed25519 (privée : reste sur le client, jamais partagée) et id_ed25519.pub (publique : copiée par ssh-copy-id dans ~/.ssh/authorized_keys du serveur)." },
    { id: 'c4-f-perms', front: 'Droits attendus dans ~/.ssh',
      back: "~/.ssh : 700. authorized_keys et id_ed25519 : 600. Sinon SSH refuse la clé : un autre utilisateur pourrait ajouter sa clé dans authorized_keys ou lire ta clé privée." },
    { id: 'c4-f-durcir', front: "Durcir SSH sans perdre l'accès",
      back: "1 clé copiée et testée, 2 garder une session ouverte, 3 PermitRootLogin no + PasswordAuthentication no, 4 sudo sshd -t, 5 sudo systemctl restart ssh, 6 tester depuis un nouveau terminal." },
    { id: 'c4-f-ufw', front: 'UFW : politique et ordre des commandes',
      back: "ufw default deny incoming + ufw default allow outgoing, puis ufw allow ssh AVANT ufw enable (sinon on perd l'accès distant), puis n'ouvrir que le nécessaire (80/tcp, 443/tcp). Netfilter fait le filtrage dans le noyau." },
    { id: 'c4-f-shadow', front: '/etc/passwd vs /etc/shadow',
      back: "/etc/passwd : liste des comptes, lisible par tous (champ mot de passe = x). /etc/shadow : empreintes (hachages) des mots de passe, lisible seulement par root. Jamais de mot de passe en clair." },
    { id: 'c4-f-fail2ban', front: 'fail2ban : principe et limite',
      back: "Lit les journaux et bannit temporairement les IP qui cumulent les échecs (maxretry échecs en findtime → ban pendant bantime). Inefficace contre une attaque distribuée sur des milliers d'IP : préférer PasswordAuthentication no." },
    { id: 'c4-f-tunnel-clair', front: 'Tunnel SSH et trafic en clair',
      back: "ssh -L 9000:localhost:9000 binome relaie le port local 9000 jusqu'à localhost:9000 vu depuis binome (accès à phpMyAdmin sans ouvrir de port). tcpdump -A montre HTTP en clair, mais SSH et HTTPS illisibles (chiffrés)." }
  ],

  // ===================================================================
  // 4. QUIZ
  // ===================================================================
  quiz: [
    // ---------- Quiz express — Section 1 : rappels réseau ----------
    { id: 'c4-q-001', q: "Combien d'adresses d'hôtes utilisables dans un réseau /24 ?",
      choices: ['256', '254', '24'],
      answer: 1,
      explain: "/24 laisse 8 bits pour les hôtes : 2^8 = 256 adresses, moins l'adresse réseau et l'adresse de diffusion = 254.",
      why: { 0: "256 est le nombre total d'adresses du bloc : il faut retirer l'adresse réseau (.0) et l'adresse de diffusion (.255).",
             2: "24 est le nombre de bits de la partie réseau, pas un nombre d'hôtes." },
      src: 'Cours 4 §1.2 · Quiz express 1', level: 1 },
    { id: 'c4-q-002', q: "Quel service traduit un nom de domaine en adresse IP ?",
      choices: ['DHCP', 'La passerelle', 'DNS'],
      answer: 2,
      explain: "Le DNS résout les noms (eseo.fr) en adresses IP ; le DHCP, lui, attribue automatiquement la configuration réseau.",
      why: { 0: "Le DHCP distribue IP, masque, passerelle et serveurs DNS ; il ne résout pas les noms.",
             1: "La passerelle route le trafic vers les autres réseaux ; elle ne traduit pas les noms." },
      src: 'Cours 4 §1.3 · Quiz express 1', level: 1 },
    { id: 'c4-q-003', q: "Quel port utilise SSH par défaut ?",
      choices: ['80', '443', '22'],
      answer: 2,
      explain: "SSH écoute sur le port 22 (directive Port de /etc/ssh/sshd_config).",
      why: { 0: "80 est le port de HTTP (web en clair).",
             1: "443 est le port de HTTPS (web chiffré)." },
      src: 'Cours 4 §1.3 · Quiz express 1', level: 1 },

    // ---------- Quiz express — Section 2 : configuration réseau ----------
    { id: 'c4-q-004', q: "Quelle commande affiche la passerelle par défaut ?",
      choices: ['ip link', 'ip route', 'hostnamectl'],
      answer: 1,
      explain: "ip route affiche la table de routage ; la ligne `default via 192.168.1.1` indique la passerelle.",
      why: { 0: "ip link montre l'état UP/DOWN et l'adresse MAC des interfaces, pas les routes.",
             2: "hostnamectl affiche ou modifie le nom d'hôte de la machine." },
      src: 'Cours 4 §2.1 · Quiz express 2', level: 1 },
    { id: 'c4-q-005', q: "Une adresse ajoutée avec `ip addr add` :",
      choices: ['est écrite dans /etc/network/interfaces', 'est attribuée par le DHCP', 'est perdue au redémarrage'],
      answer: 2,
      explain: "Les commandes ip sont temporaires ; pour une configuration permanente, on modifie /etc/network/interfaces.",
      why: { 0: "Les commandes ip ne modifient aucun fichier : c'est à toi d'éditer /etc/network/interfaces pour du permanent.",
             1: "C'est dhclient qui demande une adresse au serveur DHCP ; ip addr add fixe l'adresse à la main." },
      src: 'Cours 4 §2.2 · Quiz express 2', level: 1 },
    { id: 'c4-q-006', q: "`ping 1.1.1.1` fonctionne mais `ping eseo.fr` échoue. Où est le problème ?",
      choices: ["L'interface est désactivée", 'La passerelle est mal configurée', 'La résolution DNS'],
      answer: 2,
      explain: "Internet est joignable par IP, mais les noms ne sont pas résolus : vérifier /etc/resolv.conf et le serveur DNS (dig eseo.fr).",
      why: { 0: "Si l'interface était désactivée, ping 1.1.1.1 échouerait aussi (étape 1 de la méthode).",
             1: "Une adresse d'Internet répond : la passerelle fonctionne (étapes 2 et 3 réussies)." },
      src: 'Cours 4 §2.5 · Quiz express 2', level: 2 },

    // ---------- Quiz express — Section 3 : SSH ----------
    { id: 'c4-q-007', q: "Pourquoi utiliser SSH plutôt que Telnet ?",
      choices: ['SSH est plus rapide', 'SSH chiffre toute la communication', 'Telnet ne fonctionne pas sous Linux'],
      answer: 1,
      explain: "SSH chiffre toute la session, mots de passe compris ; Telnet transmet tout en clair (visible avec tcpdump).",
      why: { 0: "La vitesse n'est pas l'argument : le chiffrement ajoute même un léger coût.",
             2: "Telnet existe sous Linux ; le problème est qu'il transmet tout en clair, mots de passe compris." },
      src: 'Cours 4 §3.1 · Quiz express 3', level: 1 },
    { id: 'c4-q-008', q: "Dans l'authentification par clés, que copie-t-on sur le serveur ?",
      choices: ['La clé privée', 'Les deux clés', 'La clé publique'],
      answer: 2,
      explain: "Seule la clé publique est copiée (dans ~/.ssh/authorized_keys) ; la clé privée ne quitte jamais le client.",
      why: { 0: "La clé privée ne quitte jamais le client : quiconque la possède peut se connecter à ta place.",
             1: "Copier la clé privée est une faute grave ; seule la publique va dans authorized_keys." },
      src: 'Cours 4 §3.3 · Quiz express 3', level: 1 },
    { id: 'c4-q-009', q: "Quelle directive de sshd_config interdit la connexion directe du compte root ?",
      choices: ['AllowUsers root', 'PasswordAuthentication no', 'PermitRootLogin no'],
      answer: 2,
      explain: "PermitRootLogin no dans /etc/ssh/sshd_config ; on se connecte avec un compte normal puis on utilise sudo.",
      why: { 0: "AllowUsers root autoriserait au contraire root… et lui seul !",
             1: "PasswordAuthentication no interdit les mots de passe pour tous, mais root pourrait encore se connecter avec une clé." },
      src: 'Cours 4 §3.4 · Quiz express 3', level: 1 },

    // ---------- Quiz express — Section 4 : pare-feu ----------
    { id: 'c4-q-010', q: "Quelle est la bonne politique par défaut pour le trafic entrant d'un serveur ?",
      choices: ['Tout bloquer puis ouvrir le nécessaire', 'Tout autoriser', 'Bloquer uniquement le port 22'],
      answer: 0,
      explain: "On bloque tout en entrée (ufw default deny incoming), puis on n'ouvre que les ports utiles.",
      why: { 1: "Tout autoriser expose chaque service qui écoute, même ceux qu'on a oubliés.",
             2: "Bloquer le port 22 couperait l'administration à distance et laisserait tout le reste ouvert." },
      src: 'Cours 4 §4.1 · Quiz express 4', level: 1 },
    { id: 'c4-q-011', q: "Que faut-il faire AVANT `ufw enable` sur une machine distante ?",
      choices: ['Redémarrer la machine', 'Autoriser SSH', 'Désactiver le DNS'],
      answer: 1,
      explain: "Sinon le pare-feu coupe la session SSH en cours et on perd l'accès à la machine : sudo ufw allow ssh d'abord.",
      why: { 0: "Redémarrer ne change rien aux règles ; le risque est de couper SSH au moment de l'activation.",
             2: "Le DNS n'a aucun rapport : c'est la règle autorisant SSH qui manque." },
      src: 'Cours 4 §4.2 · Quiz express 4', level: 1 },
    { id: 'c4-q-012', q: "Quelle commande affiche les règles UFW avec leur numéro ?",
      choices: ['ufw status numbered', 'ufw list', 'ufw show'],
      answer: 0,
      explain: "ufw status numbered ; on peut ensuite supprimer une règle avec ufw delete N.",
      why: { 1: "ufw list n'existe pas (seul `ufw app list` existe, pour les profils d'applications).",
             2: "ufw show sert à afficher des rapports internes (ex. `ufw show added`), pas les numéros utilisés par ufw delete N." },
      src: 'Cours 4 §4.2 · Quiz express 4', level: 1 },

    // ---------- Quiz express — Section 5 : sécurité ----------
    { id: 'c4-q-013', q: "Quel fichier contient les mots de passe hachés ?",
      choices: ['/etc/passwd', '/etc/shadow', '/etc/sudoers'],
      answer: 1,
      explain: "/etc/shadow contient les empreintes des mots de passe et n'est lisible que par root.",
      why: { 0: "/etc/passwd liste les comptes et est lisible par tous ; son champ mot de passe contient juste « x ».",
             2: "/etc/sudoers définit les droits sudo, pas les mots de passe." },
      src: 'Cours 4 §5.2 · Quiz express 5', level: 1 },
    { id: 'c4-q-014', q: "Quel est l'intérêt principal de fail2ban ?",
      choices: ['Bannir les IP qui multiplient les échecs de connexion', 'Chiffrer les fichiers', 'Mettre à jour le système'],
      answer: 0,
      explain: "fail2ban analyse les journaux et bannit temporairement les IP suspectes (attaques par force brute).",
      why: { 1: "fail2ban ne chiffre rien : il lit les journaux et ajoute des règles de pare-feu.",
             2: "Les mises à jour automatiques, c'est le rôle de unattended-upgrades." },
      src: 'Cours 4 §5.4 · Quiz express 5', level: 1 },
    { id: 'c4-q-015', q: "Quelle commande liste les ports en écoute et les processus associés ?",
      choices: ['ip route', 'ss -tulpn', 'chage -l'],
      answer: 1,
      explain: "ss -tulpn : TCP (t), UDP (u), ports en écoute (l), processus (p), format numérique (n).",
      why: { 0: "ip route affiche la table de routage.",
             2: "chage -l affiche la politique d'expiration d'un mot de passe." },
      src: 'Cours 4 §5.3 · Quiz express 5', level: 1 },

    // ---------- Rappels réseau ----------
    { id: 'c4-q-016', q: "À quelle couche du modèle TCP/IP appartient la notion de port (22, 80…) ?",
      choices: ['Application', 'Transport', 'Internet', 'Accès réseau'],
      answer: 1,
      explain: "Les ports sont définis par TCP et UDP, protocoles de la couche Transport.",
      why: { 0: "Les applications (HTTP, SSH…) utilisent des ports, mais ce sont TCP/UDP (Transport) qui les définissent.",
             2: "La couche Internet utilise l'adresse IP.",
             3: "La couche Accès réseau utilise l'adresse MAC." },
      src: 'Cours 4 §1.1', level: 1 },
    { id: 'c4-q-017', q: "Laquelle de ces adresses est une adresse privée ?",
      choices: ['172.32.1.1', '8.8.8.8', '172.20.5.4', '193.168.1.1'],
      answer: 2,
      explain: "172.20.5.4 appartient à 172.16.0.0/12 (de 172.16.0.0 à 172.31.255.255).",
      why: { 0: "La plage privée 172.16.0.0/12 s'arrête à 172.31.255.255 : 172.32.x.x est publique.",
             1: "8.8.8.8 est une adresse publique (un serveur DNS de Google).",
             3: "Attention, 193 et non 192 : hors de 192.168.0.0/16, donc publique." },
      src: 'Cours 4 §1.2', level: 2 },
    { id: 'c4-q-018', q: "Quelle est l'adresse de diffusion de 192.168.10.37/24 ?",
      choices: ['192.168.10.0', '192.168.10.255', '192.168.10.37', '192.168.255.255'],
      answer: 1,
      explain: "/24 : le dernier octet est la partie hôte ; tous ses bits à 1 → 255. Réseau 192.168.10.0, 254 hôtes.",
      why: { 0: "192.168.10.0 est l'adresse réseau (bits hôte à 0).",
             2: "C'est l'adresse de la machine elle-même.",
             3: "Ce serait la diffusion d'un réseau /16 (192.168.0.0/16)." },
      src: 'TP4 ex.10', level: 1 },
    { id: 'c4-q-019', q: "Les machines 10.0.5.70/26 et 10.0.5.130/26 peuvent-elles communiquer directement (sans routeur) ?",
      choices: ['Oui, elles ont le même masque', 'Oui, elles sont toutes deux dans le réseau 10.0.5.0', 'Non, elles sont dans deux réseaux /26 différents', 'Non, car 10.0.0.0/8 est un réseau privé'],
      answer: 2,
      explain: "Bloc /26 = 64. 70 → réseau 10.0.5.64 (64 à 127) ; 130 → réseau 10.0.5.128 (128 à 191). Réseaux différents : il faut passer par un routeur.",
      why: { 0: "Le même masque ne suffit pas : il faut aussi la même adresse réseau.",
             1: "10.0.5.0 serait le réseau avec un /24 ; en /26, le 4e octet est découpé en blocs de 64.",
             3: "Des adresses privées communiquent très bien entre elles ; le problème est le découpage en sous-réseaux." },
      src: 'TP4 ex.10 Q2', level: 3 },

    // ---------- Configuration réseau ----------
    { id: 'c4-q-020', q: "TP ex.3 : VM-A ajoute 10.10.10.5/24 et VM-B 10.10.10.6/24 avec `ip addr add` (même réseau Ethernet). Le ping entre ces adresses fonctionne-t-il ?",
      choices: ["Non : ce réseau n'existe dans aucun fichier de configuration", "Non : il faut d'abord ajouter une passerelle", 'Oui : même lien et même réseau IP, elles communiquent directement', "Oui, mais seulement après un redémarrage"],
      answer: 2,
      explain: "Dès l'ajout de l'adresse, le noyau crée la route 10.10.10.0/24 dev enp0s3 : les deux VM, sur le même lien, se joignent directement.",
      why: { 0: "Aucun fichier n'est nécessaire : le noyau crée automatiquement la route du réseau dès l'ajout de l'adresse.",
             1: "Une passerelle sert à joindre d'AUTRES réseaux ; ici les deux adresses sont dans le même.",
             3: "Au contraire : après un redémarrage, les adresses ajoutées avec ip ont disparu." },
      src: 'TP4 ex.3', level: 2 },
    { id: 'c4-q-021', q: "Pourquoi un serveur doit-il avoir une adresse IP statique ?",
      choices: ['Parce que le DHCP est interdit sous Debian', 'Pour que clients, DNS et règles de pare-feu le trouvent toujours à la même adresse', "Parce qu'une IP statique est chiffrée", 'Pour avoir une connexion plus rapide'],
      answer: 1,
      explain: "Les clients, enregistrements DNS, règles de pare-feu et configurations SSH pointent vers une adresse : si le DHCP la change, le service devient injoignable.",
      why: { 0: "Le DHCP fonctionne très bien sous Debian (iface … inet dhcp) ; il convient aux postes clients.",
             2: "Une adresse IP n'est jamais « chiffrée » : statique signifie seulement fixée à la main.",
             3: "Le débit ne dépend pas du mode d'attribution de l'adresse." },
      src: 'Cours 4 §2.3 · TP4 ex.4', level: 1 },
    { id: 'c4-q-022', q: "Tu as ajouté `192.168.1.20 binome` dans /etc/hosts. `ping binome` et `getent hosts binome` marchent, mais `dig binome` échoue. Pourquoi ?",
      choices: ['dig ne lit pas /etc/hosts : il interroge directement le serveur DNS', 'Il faut redémarrer networking après avoir modifié /etc/hosts', "/etc/hosts n'est lisible que par root", 'dig ne fonctionne qu\'avec des adresses IP'],
      answer: 0,
      explain: "dig (comme nslookup) interroge directement le serveur DNS de /etc/resolv.conf ; « binome » n'existe que dans /etc/hosts, fichier lu par la résolution système (getent, ping, ssh).",
      why: { 1: "/etc/hosts est lu à chaque résolution, sans redémarrage : la preuve, ping binome marche déjà.",
             2: "/etc/hosts est lisible par tous (droits 644).",
             3: "dig sert justement à résoudre des noms (dig eseo.fr)." },
      src: 'Cours 4 §2.4 · TP4 ex.4', level: 2 },
    { id: 'c4-q-023', q: "Ton binôme désactive son interface (`sudo ip link set enp0s3 down`). Depuis VM-A, `ping 192.168.1.20` échoue. Quelle étape de la méthode de diagnostic est en cause ?",
      choices: ["L'étape 1 (interface), côté VM-B", "L'étape 2 (passerelle), côté VM-A", "L'étape 4 (DNS)", "L'étape 5 (service)"],
      answer: 0,
      explain: "L'interface de VM-B est DOWN : c'est la toute première étape (interface UP + IP ?) qui échoue, sur la machine du binôme.",
      why: { 1: "VM-A et VM-B sont dans le même réseau 192.168.1.0/24 : la passerelle n'intervient pas.",
             2: "On pingue une adresse IP : aucun nom à résoudre.",
             3: "ping teste la couche réseau (ICMP), pas un service applicatif." },
      src: 'TP4 ex.2 Q6', level: 2 },

    // ---------- SSH ----------
    { id: 'c4-q-024', q: "À la première connexion SSH vers un serveur, le client affiche une empreinte (fingerprint). Que se passe-t-il quand on répond yes ?",
      choices: ['La clé publique du client est copiée sur le serveur', 'Le mot de passe est enregistré pour les connexions suivantes', 'Le serveur est ajouté au pare-feu', "L'empreinte du serveur est enregistrée dans ~/.ssh/known_hosts"],
      answer: 3,
      explain: "L'empreinte identifie la clé du serveur ; une fois acceptée, elle est stockée dans known_hosts et le message ne réapparaît plus (sauf si la clé du serveur change).",
      why: { 0: "Copier la clé publique du client, c'est le rôle de ssh-copy-id (vers authorized_keys).",
             1: "SSH n'enregistre jamais les mots de passe.",
             2: "SSH ne modifie pas le pare-feu." },
      src: 'Cours 4 §3.2 · TP4 ex.5', level: 1 },
    { id: 'c4-q-025', q: "Après `ssh-copy-id etudiant@192.168.1.20` (clé protégée par une phrase de passe), quel secret est demandé à la connexion suivante ?",
      choices: ['Le mot de passe du compte etudiant sur VM-B', 'La phrase de passe de la clé privée', 'Aucun, jamais', 'Le mot de passe root de VM-B'],
      answer: 1,
      explain: "C'est désormais la clé qui authentifie ; la phrase de passe sert seulement à déverrouiller la clé privée, localement.",
      why: { 0: "Le mot de passe distant n'est plus utilisé : la clé suffit.",
             2: "Ce serait le cas avec une clé sans phrase de passe ; ici elle est protégée, donc demandée.",
             3: "Root n'intervient pas dans une connexion en tant qu'etudiant." },
      src: 'TP4 ex.6', level: 2 },
    { id: 'c4-q-026', q: "Après `ssh-keygen -t ed25519`, quel fichier ne doit JAMAIS être partagé ?",
      choices: ['~/.ssh/id_ed25519.pub', '~/.ssh/known_hosts', '~/.ssh/id_ed25519', '~/.ssh/authorized_keys'],
      answer: 2,
      explain: "id_ed25519 (sans .pub) est la clé privée : quiconque la possède peut se faire passer pour toi.",
      why: { 0: "La clé .pub est publique : c'est justement elle qu'on copie sur les serveurs.",
             1: "known_hosts contient les empreintes publiques des serveurs ; ce n'est pas un secret.",
             3: "authorized_keys contient des clés publiques autorisées ; il doit être protégé en écriture, mais n'est pas secret." },
      src: 'Cours 4 §3.3 · TP4 ex.6', level: 1 },
    { id: 'c4-q-027', q: "Pourquoi SSH peut-il refuser ta clé si `~/.ssh/authorized_keys` est modifiable par d'autres utilisateurs ?",
      choices: ['Parce que le fichier devient trop gros', 'Parce que la clé publique doit rester secrète', "Parce qu'un autre utilisateur pourrait y ajouter sa propre clé et se connecter à ta place", "Parce que SSH n'accepte que des fichiers exécutables"],
      answer: 2,
      explain: "sshd vérifie les droits (~/.ssh en 700, authorized_keys en 600) : un fichier modifiable par d'autres permettrait d'usurper ton compte.",
      why: { 0: "La taille n'a rien à voir : c'est une vérification de droits.",
             1: "La clé publique n'est pas secrète ; le problème est que d'autres pourraient MODIFIER le fichier.",
             3: "Au contraire, le fichier doit être en 600 (rw-------), sans x." },
      src: 'TP4 ex.6 Q4', level: 2 },
    { id: 'c4-q-028', q: "Pourquoi garder une session SSH ouverte pendant qu'on passe `PasswordAuthentication no` puis qu'on redémarre ssh ?",
      choices: ['Parce que sshd refuse de redémarrer sinon', 'Pour pouvoir corriger si la nouvelle configuration empêche de se reconnecter', 'Pour que la clé soit copiée automatiquement', 'Pour accélérer le redémarrage'],
      answer: 1,
      explain: "Redémarrer sshd ne coupe pas les sessions établies : si la clé ne fonctionne pas, on corrige depuis la session restée ouverte. Sinon, la VM distante devient inaccessible.",
      why: { 0: "sshd redémarre sans problème ; c'est la reconnexion qui risque d'échouer.",
             2: "La session ouverte ne copie aucune clé (c'est le rôle de ssh-copy-id).",
             3: "Aucun effet sur la vitesse : c'est une sécurité contre le verrouillage." },
      src: 'Cours 4 §3.4 · TP4 ex.6 Q7', level: 2 },
    { id: 'c4-q-029', q: "Après durcissement (`PasswordAuthentication no`), tu lances `ssh -o PubkeyAuthentication=no etudiant@192.168.1.20`. Résultat ?",
      choices: ['Permission denied (publickey)', 'La connexion réussit avec le mot de passe', 'Connection refused : sshd est arrêté', 'Le client génère une nouvelle clé'],
      answer: 0,
      explain: "Le client n'utilise pas de clé et le serveur n'accepte plus les mots de passe : aucune méthode commune, d'où le refus (le serveur n'annonce plus que publickey).",
      why: { 1: "Le serveur n'accepte plus les mots de passe : c'est tout l'intérêt du durcissement.",
             2: "sshd tourne ; « Connection refused » signifierait que rien n'écoute sur le port 22.",
             3: "ssh ne génère jamais de clé ; c'est le rôle de ssh-keygen." },
      src: 'TP4 ex.6 Q7', level: 2 },
    { id: 'c4-q-030', q: "Quelle commande copie rapport.pdf vers un serveur SSH qui écoute sur le port 2222 ?",
      choices: ['scp -p 2222 rapport.pdf admin@20.19.8.4:~/', 'scp -P 2222 rapport.pdf admin@20.19.8.4:~/', 'scp rapport.pdf admin@20.19.8.4:2222', 'ssh -P 2222 rapport.pdf admin@20.19.8.4'],
      answer: 1,
      explain: "Pour scp, le port s'indique avec -P MAJUSCULE, avant les fichiers.",
      why: { 0: "Avec scp, -p minuscule conserve dates et droits ; « 2222 » serait alors pris pour un fichier à copier.",
             2: "Après le « : » vient un CHEMIN distant : le fichier serait copié sous le nom « 2222 », via le port 22.",
             3: "ssh ne copie pas de fichiers, et pour ssh le port s'écrit -p minuscule." },
      src: 'Cours 4 §3.2', level: 2 },
    { id: 'c4-q-031', q: "Que fait `ssh -L 9000:localhost:9000 binome` ?",
      choices: ['Ouvre le port 9000 dans le pare-feu de binome', 'Relaie le port 9000 local, à travers SSH, vers le port 9000 de binome vu depuis binome lui-même', 'Lance un serveur web sur le port 9000', 'Copie un fichier nommé localhost vers binome'],
      answer: 1,
      explain: "Tunnel local : http://localhost:9000 sur VM-A arrive, via la connexion SSH, sur localhost:9000 de binome — ce qui atteint un service lié à 127.0.0.1 sur binome.",
      why: { 0: "Aucune règle de pare-feu n'est modifiée : tout passe dans la connexion SSH (port 22).",
             2: "Le tunnel ne lance aucun serveur ; il relaie vers un service existant (python3 -m http.server 9000 sur binome).",
             3: "La copie de fichiers, c'est scp." },
      src: 'TP4 ex.12', level: 3 },

    // ---------- Pare-feu ----------
    { id: 'c4-q-032', q: "Sur VM-A, UFW est actif (deny incoming) et le port 8080 n'est pas autorisé. Depuis VM-B, `curl http://192.168.1.10:8080` :",
      choices: ['affiche la page normalement', 'renvoie une erreur 404', 'fonctionne car VM-B est dans le même réseau', 'reste sans réponse puis expire : les paquets sont ignorés'],
      answer: 3,
      explain: "La règle DENY d'UFW ignore silencieusement les paquets : curl attend une réponse qui ne vient jamais. Après `sudo ufw allow 8080/tcp`, la page s'affiche.",
      why: { 0: "Le pare-feu filtre le port 8080 avant que le serveur Python ne reçoive la requête.",
             1: "404 est une réponse du serveur web ; ici la requête ne lui parvient jamais.",
             2: "Être dans le même réseau ne contourne pas le pare-feu de la machine." },
      src: 'TP4 ex.7 Q5', level: 2 },
    { id: 'c4-q-033', q: "Que fait `sudo ufw allow from 192.168.1.20 to any port 8080 proto tcp` ?",
      choices: ['Autorise le port 8080 en TCP uniquement pour les connexions venant de 192.168.1.20', 'Autorise 192.168.1.20 à joindre tous les ports', 'Autorise ce serveur à joindre 192.168.1.20 sur le port 8080', 'Bloque le port 8080 pour 192.168.1.20'],
      answer: 0,
      explain: "from = source autorisée (VM-B) ; to any = n'importe quelle adresse de ce serveur ; port 8080 proto tcp = service visé. Les autres machines restent bloquées.",
      why: { 1: "La règle précise `port 8080` : seuls ce port et ce protocole sont ouverts.",
             2: "`from` désigne la SOURCE d'une connexion ENTRANTE ; `to any` désigne les adresses de ce serveur.",
             3: "`allow` autorise ; pour bloquer, ce serait `deny`." },
      src: 'Cours 4 §4.2 · TP4 ex.7 Q7', level: 2 },
    { id: 'c4-q-034', q: "Pour la VM du semestre (web + PHP + MySQL utilisé localement), quelle règle convient au port 3306 ?",
      choices: ['ALLOW depuis Anywhere, car PHP en a besoin', 'DENY en externe : seul PHP, en local, utilise la base', 'ALLOW uniquement en UDP', "Aucune importance, MySQL n'écoute jamais sur le réseau"],
      answer: 1,
      explain: "PHP accède à MySQL depuis la même machine (localhost) : inutile d'exposer 3306 à l'extérieur. Seuls 22, 80 et 443/tcp sont ouverts.",
      why: { 0: "PHP tourne sur la même machine : la connexion locale ne traverse pas le pare-feu entrant. Ouvrir 3306 exposerait la base au monde.",
             2: "MySQL utilise TCP ; et l'ouvrir en UDP n'aurait aucun intérêt.",
             3: "MySQL peut très bien écouter sur toutes les interfaces (vérifier avec ss -tulpn) : on ne mise pas sur la configuration seule." },
      src: 'Cours 4 §4.3 · TP4 ex.7 Q8', level: 2 },

    // ---------- Sécurité du système ----------
    { id: 'c4-q-035', q: "Pourquoi éditer /etc/sudoers avec `visudo` plutôt qu'avec nano ?",
      choices: ['visudo chiffre le fichier', 'nano ne peut pas ouvrir les fichiers de /etc', "visudo vérifie la syntaxe avant d'enregistrer", "visudo donne automatiquement les droits sudo à l'utilisateur"],
      answer: 2,
      explain: "Une erreur de syntaxe dans /etc/sudoers peut rendre sudo inutilisable ; visudo refuse d'enregistrer un fichier invalide.",
      why: { 0: "/etc/sudoers n'est pas chiffré ; il est simplement lisible par root seul.",
             1: "sudo nano ouvre n'importe quel fichier ; le danger est d'enregistrer une erreur qui casse sudo.",
             3: "visudo n'est qu'un éditeur sécurisé ; il ne modifie aucun droit tout seul." },
      src: 'Cours 4 §5.1', level: 1 },
    { id: 'c4-q-036', q: "Le stage est terminé. Quelle commande retire stagiaire du groupe sudo SANS supprimer son compte ?",
      choices: ['sudo deluser stagiaire', 'sudo deluser stagiaire sudo', 'sudo passwd -l stagiaire', 'sudo usermod -aG sudo stagiaire'],
      answer: 1,
      explain: "deluser UTILISATEUR GROUPE retire seulement l'appartenance au groupe ; le compte reste.",
      why: { 0: "Sans nom de groupe, deluser SUPPRIME le compte stagiaire.",
             2: "passwd -l verrouille le mot de passe mais laisse stagiaire dans le groupe sudo.",
             3: "usermod -aG sudo AJOUTE au groupe sudo : c'est l'inverse." },
      src: 'TP4 ex.8 Q5', level: 2 },
    { id: 'c4-q-037', q: "Quel est l'effet de `sudo systemctl disable --now cups` ?",
      choices: ['Arrête cups maintenant ET empêche son démarrage au boot', 'Désinstalle le paquet cups', 'Arrête cups seulement jusqu\'au prochain redémarrage', 'Empêche cups de démarrer au boot, mais le laisse tourner'],
      answer: 0,
      explain: "disable retire le démarrage automatique ; --now arrête aussi le service immédiatement. Moins de services à l'écoute = surface d'attaque réduite.",
      why: { 1: "systemctl ne désinstalle rien ; ce serait apt remove/purge.",
             2: "C'est l'effet de `systemctl stop` seul : le service redémarrerait au boot.",
             3: "C'est l'effet de `disable` SANS --now." },
      src: 'Cours 4 §5.3 · TP4 ex.9', level: 2 },
    { id: 'c4-q-038', q: "Avec ce jail.local : `maxretry = 3`, `findtime = 10m`, `bantime = 10m`. VM-B échoue 3 fois en 2 minutes. Que se passe-t-il à sa 4e tentative ?",
      choices: ['Elle peut réessayer normalement', 'Son compte est supprimé', 'Son IP est bannie pendant 10 minutes : la tentative est bloquée', "Le serveur SSH s'arrête"],
      answer: 2,
      explain: "3 échecs dans la fenêtre de 10 minutes atteignent maxretry : fail2ban bannit l'IP pendant bantime (10 minutes). On la libère avec fail2ban-client set sshd unbanip.",
      why: { 0: "3 échecs en moins de 10 minutes = seuil atteint : le bannissement est déclenché.",
             1: "fail2ban agit sur les adresses IP (pare-feu), jamais sur les comptes.",
             3: "sshd continue de fonctionner pour toutes les autres IP." },
      src: 'TP4 ex.13', level: 2 },
    { id: 'c4-q-039', q: "Quelle est la limite principale de fail2ban, et quelle mesure est plus efficace ?",
      choices: ["Il ne voit pas une attaque répartie sur des milliers d'IP ; mieux vaut interdire les mots de passe (clés uniquement)", 'Il ne protège que le port 80 ; mieux vaut changer le port SSH', 'Il bannit définitivement ; mieux vaut unattended-upgrades', 'Il ralentit le serveur ; mieux vaut désactiver SSH'],
      answer: 0,
      explain: "Chaque IP d'une attaque distribuée reste sous le seuil maxretry. Avec PasswordAuthentication no, il n'y a plus aucun mot de passe à deviner.",
      why: { 1: "fail2ban protège justement SSH (prison sshd) ; et changer de port ne fait que réduire le bruit.",
             2: "Le bannissement est temporaire (bantime) ; unattended-upgrades gère les mises à jour, pas la force brute.",
             3: "Désactiver SSH supprimerait l'administration à distance : ce n'est pas une solution." },
      src: 'TP4 ex.13 Q4', level: 3 },
    { id: 'c4-q-040', q: "TP ex.11 : `sudo tcpdump -i any -A port 8080` tourne pendant que VM-B lance `curl \"http://192.168.1.10:8080/?password=secret123\"`. Que vois-tu ?",
      choices: ['Des octets illisibles, car HTTP est chiffré', 'Le mot de passe secret123 en clair dans la requête', 'Rien : tcpdump ne capture pas le port 8080', 'Uniquement les adresses MAC'],
      answer: 1,
      explain: "HTTP circule en clair : la ligne GET /?password=secret123 apparaît dans la capture. Sur le port 22 (SSH), on ne verrait que des octets chiffrés : d'où l'intérêt de SSH et HTTPS.",
      why: { 0: "HTTP n'est pas chiffré ; ce sont HTTPS et SSH qui chiffrent.",
             2: "Le filtre `port 8080` capture précisément ce trafic.",
             3: "-A affiche le contenu des paquets en ASCII, pas seulement les adresses." },
      src: 'TP4 ex.11', level: 2 },

    // ---------- Réponses courtes : calculs et ports ----------
    { id: 'c4-q-041', type: 'input', q: "Masque décimal correspondant à /26 ?",
      accept: ['255.255.255.192'],
      explain: "26 bits à 1 : 255.255.255 (24 bits) + 2 bits dans le 4e octet = 128 + 64 = 192.",
      src: 'Cours 4 §1.2 · TP4 ex.10', level: 2 },
    { id: 'c4-q-042', type: 'input', q: "Adresse réseau de 10.0.5.130/26 ?",
      accept: ['10.0.5.128'],
      explain: "Bloc /26 = 256 − 192 = 64 ; multiples : 0, 64, 128, 192. 130 tombe dans le bloc qui commence à 128.",
      src: 'TP4 ex.10', level: 2 },
    { id: 'c4-q-043', type: 'input', q: "Adresse de diffusion de 10.0.5.130/26 ?",
      accept: ['10.0.5.191'],
      explain: "Réseau 10.0.5.128 + bloc 64 − 1 = 10.0.5.191. Hôtes : de .129 à .190.",
      src: 'TP4 ex.10', level: 2 },
    { id: 'c4-q-044', type: 'input', q: "Nombre d'hôtes utilisables dans un réseau /26 ?",
      accept: ['62'],
      explain: "32 − 26 = 6 bits hôte : 2^6 = 64 adresses − 2 (réseau et diffusion) = 62.",
      src: 'TP4 ex.10', level: 2 },
    { id: 'c4-q-045', type: 'input', q: "Adresse réseau de 192.168.1.9/30 ?",
      accept: ['192.168.1.8'],
      explain: "/30 → masque .252, bloc de 4 : 0, 4, 8, 12… 9 est dans le bloc 8 à 11. Diffusion 192.168.1.11, hôtes .9 et .10 (2 hôtes).",
      src: 'TP4 ex.10', level: 3 },
    { id: 'c4-q-046', type: 'input', q: "Adresse de diffusion de 172.16.45.200/16 ?",
      accept: ['172.16.255.255'],
      explain: "/16 : les deux derniers octets forment la partie hôte → tous à 1 = 255.255. Réseau : 172.16.0.0, 65 534 hôtes.",
      src: 'TP4 ex.10', level: 2 },
    { id: 'c4-q-047', type: 'input', q: "Numéro de port par défaut de HTTPS ?",
      accept: ['443'],
      explain: "HTTPS = 443/tcp (HTTP = 80, SSH = 22, DNS = 53, MySQL = 3306).",
      src: 'Cours 4 §1.3', level: 1 },
    { id: 'c4-q-048', type: 'input', q: "Numéro de port par défaut de MySQL ?",
      accept: ['3306'],
      explain: "MySQL/MariaDB écoute sur 3306/tcp : à ne pas ouvrir vers l'extérieur sur la VM du semestre.",
      src: 'Cours 4 §1.3, §4.3', level: 1 },
    { id: 'c4-q-049', type: 'input', q: "Nombre d'hôtes utilisables dans un réseau /16 ?",
      accept: ['65534', '65 534'],
      explain: "16 bits hôte : 2^16 = 65 536 adresses − 2 (réseau et diffusion) = 65 534.",
      src: 'Cours 4 §1.2 · TP4 ex.10', level: 2 },
    { id: 'c4-q-050', type: 'input', q: "Adresse de diffusion de 192.168.1.9/30 ?",
      accept: ['192.168.1.11'],
      explain: "Bloc /30 = 4 ; réseau 192.168.1.8 ; diffusion = 8 + 4 − 1 = 11. Seuls .9 et .10 sont utilisables : typique d'une liaison point à point entre deux routeurs.",
      src: 'TP4 ex.10', level: 3 }
  ],

  // ===================================================================
  // 5. EXERCICES « tape la commande »
  // Contexte commun : VM-A = utilisateur etudiant (membre de sudo),
  // interface enp0s3, IP 192.168.1.10/24, passerelle 192.168.1.1.
  // VM-B (binôme) = 192.168.1.20, compte etudiant.
  // ===================================================================
  exercises: [
    // ---------- Lire la configuration et diagnostiquer ----------
    { id: 'c4-x-001',
      prompt: "Affiche les interfaces réseau de ta VM et leurs adresses IP.",
      context: "VM-A (Debian), interface enp0s3, IP 192.168.1.10/24.",
      answers: ['ip a'],
      hint: "Commande ip + objet address (abrégeable en une lettre).",
      explain: "`ip a` (= ip addr / ip address) liste chaque interface (lo, enp0s3…) avec son état, son adresse MAC (link/ether) et ses adresses IP (inet 192.168.1.10/24, brd 192.168.1.255).",
      mistakes: [
        { re: "^(sudo\\s+)?ifconfig", msg: "ifconfig (paquet net-tools) est obsolète et souvent absent sous Debian : la commande moderne est ip a." },
        { re: "^ip\\s+link", msg: "ip link montre l'état et l'adresse MAC, mais pas les adresses IP : utilise l'objet address (ip a)." }
      ],
      src: 'Cours 4 §2.1 · TP4 ex.1', level: 1 },
    { id: 'c4-x-002',
      prompt: "Affiche la table de routage pour trouver l'adresse de la passerelle par défaut.",
      context: "VM-A, interface enp0s3.",
      answers: ['ip route', 'ip route show'],
      hint: "ip + objet route.",
      explain: "`ip route` (= ip r) affiche les routes ; la ligne `default via 192.168.1.1 dev enp0s3` donne la passerelle par défaut.",
      mistakes: [
        { re: "^(sudo\\s+)?route\\b", msg: "route (net-tools) est obsolète : la commande moderne est ip route." },
        { re: "^ip\\s+(a|addr|address|link)\\b", msg: "Cet objet n'affiche pas les routes : il faut ip route." },
        { re: "netstat", msg: "netstat -r est obsolète : utilise ip route." }
      ],
      src: 'Cours 4 §2.1 · TP4 ex.1', level: 1 },
    { id: 'c4-x-003',
      prompt: "Affiche le contenu du fichier qui indique les serveurs DNS utilisés par la machine.",
      context: "VM-A (Debian).",
      answers: ['cat /etc/resolv.conf'],
      hint: "Fichier de /etc dont le nom évoque la résolution (resolv…).",
      explain: "/etc/resolv.conf contient les lignes `nameserver IP` : ce sont les serveurs DNS interrogés pour résoudre les noms.",
      mistakes: [
        { re: "/etc/hosts", msg: "/etc/hosts contient des associations nom → IP locales, pas la liste des serveurs DNS." },
        { re: "/etc/hostname", msg: "/etc/hostname contient seulement le nom de la machine." },
        { re: "resolve\\.conf", msg: "Le fichier s'écrit resolv.conf (sans e après resolv)." }
      ],
      src: 'Cours 4 §2.4 · TP4 ex.1', level: 1 },
    { id: 'c4-x-004',
      prompt: "Envoie exactement 4 paquets ICMP à ta passerelle pour vérifier qu'elle répond.",
      context: "Passerelle de VM-A : 192.168.1.1.",
      answers: ['ping -c 4 192.168.1.1'],
      hint: "Option count de ping.",
      explain: "`ping` envoie des requêtes ICMP ; `-c 4` s'arrête après 4 paquets (sinon ping tourne jusqu'à Ctrl+C). ttl = compteur de routeurs, time = aller-retour en ms. C'est l'étape 2 de la méthode de diagnostic.",
      mistakes: [
        { re: "-n\\s*4", msg: "-n 4 est la syntaxe Windows ; sous Linux, le nombre de paquets se donne avec -c." },
        { re: "^ping\\s+192\\.168\\.1\\.1\\s*$", msg: "Sans -c, ping sous Linux ne s'arrête jamais (Ctrl+C) : ajoute -c 4." },
        { re: "192\\.168\\.1\\.10\\b", msg: "192.168.1.10 est ta propre adresse ; la passerelle est 192.168.1.1." }
      ],
      src: 'Cours 4 §2.5 · TP4 ex.2', level: 1 },
    { id: 'c4-x-005',
      prompt: "Interroge le DNS pour le nom eseo.fr en n'affichant que l'adresse IP obtenue.",
      context: "VM-A, paquet dnsutils installé.",
      answers: ['dig +short eseo.fr', 'dig eseo.fr +short'],
      hint: "dig avec une option d'affichage qui commence par +.",
      explain: "`dig` interroge directement le serveur DNS de /etc/resolv.conf ; `+short` supprime les sections détaillées (QUESTION, ANSWER, SERVER) et n'affiche que la réponse.",
      mistakes: [
        { re: "-short", msg: "Les options d'affichage de dig commencent par + (et non -) : +short." },
        { re: "^nslookup", msg: "nslookup interroge aussi le DNS, mais l'affichage réduit demandé est l'option +short de dig." },
        { re: "^ping", msg: "ping teste la joignabilité ; pour interroger le DNS seul, utilise dig." }
      ],
      src: 'Cours 4 §2.4 · TP4 ex.2', level: 1 },
    { id: 'c4-x-006',
      prompt: "Liste tous les ports TCP et UDP en écoute, en format numérique, avec le processus associé à chacun (y compris ceux de root).",
      context: "VM-A, tu es etudiant (membre de sudo).",
      answers: ['sudo ss -tulpn'],
      hint: "ss + 5 options : t, u, l, p, n.",
      explain: "`ss` affiche les sockets : -t TCP, -u UDP, -l seulement celles en écoute, -p le processus (nom, PID), -n ports en chiffres (22 au lieu de ssh). sudo est nécessaire pour voir les processus appartenant à root (sshd…).",
      mistakes: [
        { re: "^(sudo\\s+)?ss\\s+-[tuln]+$", msg: "Il manque -p : sans lui, la colonne Process (nom et PID du service) n'est pas affichée." },
        { re: "^(sudo\\s+)?ss\\s+-[tulp]+$", msg: "Il manque -n : sans lui, les ports sont traduits en noms (ssh, http) au lieu de numéros." },
        { re: "^(sudo\\s+)?netstat", msg: "netstat (net-tools) est obsolète : la commande moderne est ss." }
      ],
      src: 'Cours 4 §2.5, §5.3 · TP4 ex.2', level: 2 },
    { id: 'c4-x-007',
      prompt: "VM-B (192.168.1.20) héberge un serveur web sur le port 80. Teste-le en n'affichant que les en-têtes HTTP de la réponse.",
      context: "Tu es sur VM-A.",
      answers: ['curl -I http://192.168.1.20', 'curl -I http://192.168.1.20/', 'curl -I 192.168.1.20', 'curl --head http://192.168.1.20'],
      hint: "curl avec l'option -I (i majuscule).",
      explain: "`curl -I` envoie une requête HEAD : on obtient uniquement le code de statut (200 OK, 404…) et les en-têtes. Étape 5 de la méthode : le service répond-il ?",
      mistakes: [
        { re: "curl\\s+-i\\b", msg: "-i minuscule affiche les en-têtes ET le contenu ; seulement les en-têtes = -I majuscule." },
        { re: "^wget", msg: "wget télécharge la page ; la commande du cours est curl -I." },
        { re: "^curl\\s+(http|192)", msg: "Sans option, curl affiche le contenu de la page ; ajoute -I pour ne voir que les en-têtes." }
      ],
      src: 'Cours 4 §2.5', level: 2 },

    // ---------- Configuration temporaire ----------
    { id: 'c4-x-008',
      prompt: "Scénario de panne du TP : tu es sur VM-B. Désactive l'interface enp0s3 avec la commande ip.",
      context: "VM-B, interface enp0s3 (192.168.1.20/24). Tu travailles sur la console de la VM, pas en SSH.",
      answers: ['sudo ip link set enp0s3 down', 'sudo ip link set dev enp0s3 down'],
      hint: "ip link set INTERFACE …",
      explain: "`ip link set enp0s3 down` désactive l'interface immédiatement (temporaire). Depuis VM-A, ping 192.168.1.20 échoue : c'est l'étape 1 (interface) qui est en cause. On la réactive avec `sudo ip link set enp0s3 up`.",
      mistakes: [
        { re: "ip\\s+link\\s+enp0s3", msg: "Il manque le mot-clé set : ip link set enp0s3 down." },
        { re: "ip\\s+(a|addr|address)\\s+del", msg: "Supprimer l'adresse n'est pas désactiver l'interface : utilise ip link set … down." },
        { re: "^(sudo\\s+)?ifdown", msg: "ifdown (ifupdown) déconfigure l'interface selon /etc/network/interfaces ; l'énoncé demande la commande ip." }
      ],
      src: 'Cours 4 §2.2 · TP4 ex.2 Q6', level: 2 },
    { id: 'c4-x-009',
      prompt: "Ajoute temporairement la seconde adresse 10.10.10.5 (réseau /24) à l'interface enp0s3.",
      context: "TP4 ex.3 : ton numéro de poste X = 5. Interface enp0s3.",
      answers: ['sudo ip addr add 10.10.10.5/24 dev enp0s3'],
      hint: "ip addr add IP/CIDR dev INTERFACE",
      explain: "`ip addr add 10.10.10.5/24 dev enp0s3` ajoute une adresse supplémentaire (192.168.1.10 reste en place). Le noyau crée la route 10.10.10.0/24 dev enp0s3. Tout disparaît au redémarrage.",
      mistakes: [
        { re: "10\\.10\\.10\\.5\\s+dev", msg: "Sans /24, l'adresse est ajoutée en /32 : aucune route vers 10.10.10.0/24 n'est créée, le binôme ne sera pas joignable." },
        { re: "add\\s+10\\.10\\.10\\.5/24\\s+enp0s3", msg: "Il manque le mot-clé dev avant le nom de l'interface." },
        { re: "ifconfig", msg: "ifconfig est obsolète : utilise ip addr add." }
      ],
      src: 'Cours 4 §2.2 · TP4 ex.3', level: 2 },
    { id: 'c4-x-010',
      prompt: "Supprime, sans redémarrer, l'adresse 10.10.10.5/24 ajoutée sur enp0s3.",
      context: "L'adresse a été ajoutée avec ip addr add 10.10.10.5/24 dev enp0s3.",
      answers: ['sudo ip addr del 10.10.10.5/24 dev enp0s3', 'sudo ip addr delete 10.10.10.5/24 dev enp0s3'],
      hint: "Même syntaxe que l'ajout, avec un autre verbe.",
      explain: "`ip addr del` retire l'adresse immédiatement. On l'indique avec son préfixe /24, comme à l'ajout ; la route 10.10.10.0/24 disparaît avec elle.",
      mistakes: [
        { re: "\\b(remove|rm)\\b", msg: "Le mot-clé de suppression est del (ou delete)." },
        { re: "\\badd\\b", msg: "add ajoute ; pour supprimer, c'est del." },
        { re: "ip\\s+link", msg: "ip link agit sur l'interface entière ; pour retirer une adresse, c'est ip addr del." }
      ],
      src: 'Cours 4 §2.2', level: 2 },
    { id: 'c4-x-011',
      prompt: "La route par défaut a disparu. Redéfinis temporairement la passerelle par défaut 192.168.1.1.",
      context: "VM-A, interface enp0s3 en 192.168.1.10/24.",
      answers: ['sudo ip route add default via 192.168.1.1', 'sudo ip route add default via 192.168.1.1 dev enp0s3'],
      hint: "ip route add default via …",
      explain: "`ip route add default via 192.168.1.1` : tout le trafic destiné aux autres réseaux sera envoyé au routeur 192.168.1.1. Temporaire (perdu au redémarrage).",
      mistakes: [
        { re: "add\\s+192\\.168\\.1\\.1", msg: "Il manque default via : là tu créerais seulement une route vers la machine 192.168.1.1." },
        { re: "gateway", msg: "gateway est le mot-clé du fichier /etc/network/interfaces ; avec ip route, on écrit default via." },
        { re: "^(sudo\\s+)?ip\\s+(a|addr|address)\\b", msg: "La passerelle se règle avec ip route, pas avec ip addr." }
      ],
      src: 'Cours 4 §2.2', level: 2 },
    { id: 'c4-x-012',
      prompt: "Demande une adresse IP au serveur DHCP pour l'interface enp0s3.",
      context: "VM-A, interface enp0s3.",
      answers: ['sudo dhclient enp0s3'],
      hint: "Client DHCP : dh + client.",
      explain: "`dhclient enp0s3` envoie une requête DHCP sur enp0s3 et applique la réponse : IP, masque, passerelle et DNS.",
      mistakes: [
        { re: "dhcpclient|dhcp-client|dhcpcd", msg: "La commande du cours est dhclient (sans « cp »)." },
        { re: "^(sudo\\s+)?dhclient\\s*$", msg: "Précise l'interface enp0s3 (sans argument, dhclient agit sur toutes les interfaces)." }
      ],
      src: 'Cours 4 §2.2', level: 2 },

    // ---------- Configuration permanente et noms ----------
    { id: 'c4-x-013',
      prompt: "Avant de modifier la configuration réseau permanente, sauvegarde /etc/network/interfaces sous le nom /etc/network/interfaces.bak.",
      context: "VM-A, tu es etudiant (membre de sudo).",
      answers: ['sudo cp /etc/network/interfaces /etc/network/interfaces.bak'],
      hint: "Une simple copie, avec les droits root.",
      explain: "`cp SOURCE DESTINATION` : l'original reste intact et interfaces.bak permet de revenir en arrière. sudo car /etc/network appartient à root.",
      mistakes: [
        { re: "^(sudo\\s+)?mv\\s", msg: "mv déplace : /etc/network/interfaces n'existerait plus ! Il faut cp." },
        { re: "interfaces\\.bak\\s+/etc/network/interfaces\\s*$", msg: "Ordre inversé : cp SOURCE DESTINATION, la source est le fichier actuel." }
      ],
      src: 'TP4 ex.4 Q1', level: 1 },
    { id: 'c4-x-014',
      prompt: "Tu as édité /etc/network/interfaces (adresse statique). Applique la configuration en redémarrant le service réseau de Debian.",
      context: "VM-A, réseau géré par ifupdown (pas par NetworkManager).",
      answers: ['sudo systemctl restart networking'],
      hint: "systemctl restart + nom du service ifupdown.",
      explain: "Le service networking (ifupdown) relit /etc/network/interfaces et reconfigure les interfaces. Vérifier ensuite avec ip a, ip route et un ping.",
      mistakes: [
        { re: "restart\\s+network\\s*$", msg: "Le service s'appelle networking (et non network) sous Debian." },
        { re: "NetworkManager", msg: "NetworkManager ne lit pas ce fichier pour les interfaces qui y sont décrites : le service à redémarrer est networking." },
        { re: "reboot", msg: "Redémarrer la machine fonctionnerait mais c'est disproportionné : redémarre seulement le service networking." }
      ],
      src: 'Cours 4 §2.3 · TP4 ex.4 Q3', level: 2 },
    { id: 'c4-x-015',
      prompt: "Renomme définitivement la machine en srv-dupont.",
      context: "VM-A, tu es etudiant (membre de sudo).",
      answers: ['sudo hostnamectl set-hostname srv-dupont'],
      hint: "hostnamectl + sous-commande set-hostname.",
      explain: "`hostnamectl set-hostname` change le nom immédiatement ET l'écrit dans /etc/hostname. Un nouveau terminal affiche etudiant@srv-dupont. Pense aussi à la ligne 127.0.1.1 de /etc/hosts.",
      mistakes: [
        { re: "^(sudo\\s+)?hostname\\s+srv", msg: "hostname NOM ne change le nom que jusqu'au redémarrage (/etc/hostname n'est pas modifié) : utilise hostnamectl set-hostname." },
        { re: "hostnamectl\\s+srv", msg: "Il manque la sous-commande set-hostname." },
        { re: "set-hostname\\s+srv-dupont\\s+\\S", msg: "Un seul argument : le nouveau nom." }
      ],
      src: 'Cours 4 §2.4 · TP4 ex.4 Q5', level: 1 },
    { id: 'c4-x-016',
      prompt: "Ajoute en une seule commande la ligne « 192.168.1.20 binome » à la fin de /etc/hosts (fichier de root), sans ouvrir d'éditeur.",
      context: "Tu es etudiant (membre de sudo). Le fichier contient déjà la ligne localhost, à conserver.",
      answers: ['echo "192.168.1.20 binome" | sudo tee -a /etc/hosts'],
      hint: "echo … | sudo tee -a fichier",
      explain: "Le tube envoie la ligne à `tee`, lancé avec sudo : c'est lui qui ouvre /etc/hosts avec les droits root ; -a (append) ajoute à la fin au lieu d'écraser. Ensuite, ping binome et getent hosts binome fonctionnent.",
      mistakes: [
        { re: "^(sudo\\s+)?echo.*>>", msg: "La redirection >> est faite par TON shell, sans droits root (même avec sudo echo) : Permission denied. Passe par | sudo tee -a /etc/hosts." },
        { re: "tee\\s+/etc/hosts", msg: "Sans -a, tee ÉCRASE /etc/hosts (tu perdrais la ligne localhost) : ajoute -a." },
        { re: "[^>]>\\s*/etc/hosts", msg: "> écraserait tout le fichier ; et la redirection n'a de toute façon pas les droits root." }
      ],
      src: 'Cours 4 §2.4 · TP4 ex.4 Q6', level: 3 },
    { id: 'c4-x-017',
      prompt: "binome est déclaré dans /etc/hosts. Teste la résolution complète du système pour ce nom (celle qu'utilisent ping et ssh).",
      context: "/etc/hosts contient la ligne : 192.168.1.20 binome",
      answers: ['getent hosts binome'],
      hint: "getent + base de données hosts.",
      explain: "`getent hosts binome` interroge les sources dans l'ordre de /etc/nsswitch.conf (/etc/hosts puis DNS) et affiche « 192.168.1.20 binome ».",
      mistakes: [
        { re: "^dig", msg: "dig interroge directement le serveur DNS et ignore /etc/hosts : binome ne sera pas trouvé." },
        { re: "^nslookup", msg: "nslookup interroge lui aussi directement le DNS, sans lire /etc/hosts." },
        { re: "getent\\s+host\\s", msg: "La base s'appelle hosts (au pluriel)." }
      ],
      src: 'Cours 4 §2.4 · TP4 ex.4 Q6', level: 2 },

    // ---------- SSH : connexion et copie ----------
    { id: 'c4-x-018',
      prompt: "Connecte-toi en SSH à VM-B avec le compte etudiant, en précisant explicitement l'utilisateur.",
      context: "VM-B : 192.168.1.20, serveur SSH sur le port 22.",
      answers: ['ssh etudiant@192.168.1.20', 'ssh -l etudiant 192.168.1.20'],
      hint: "ssh utilisateur@machine",
      explain: "`ssh etudiant@192.168.1.20` ouvre une session chiffrée. À la 1re connexion, vérifie l'empreinte puis réponds yes : elle est enregistrée dans ~/.ssh/known_hosts.",
      mistakes: [
        { re: "^telnet", msg: "Telnet transmet tout en clair, mot de passe compris : utilise ssh." },
        { re: "^ssh\\s+192\\.168\\.1\\.20@etudiant", msg: "Ordre inversé : utilisateur@machine." },
        { re: "^ssh\\s+192\\.168\\.1\\.20\\s*$", msg: "Cela marcherait (même nom d'utilisateur), mais l'énoncé demande de préciser explicitement le compte : etudiant@…" }
      ],
      src: 'Cours 4 §3.2 · TP4 ex.5 Q2', level: 1 },
    { id: 'c4-x-019',
      prompt: "Sans ouvrir de session interactive, exécute sur VM-B la commande hostname puis la commande uptime, en une seule connexion SSH.",
      context: "VM-B : 192.168.1.20, compte etudiant.",
      answers: ["ssh etudiant@192.168.1.20 'hostname; uptime'", "ssh etudiant@192.168.1.20 'hostname;uptime'", "ssh etudiant@192.168.1.20 'hostname && uptime'"],
      hint: "Les commandes distantes, entre guillemets, après la machine.",
      explain: "Tout ce qui suit la machine est exécuté à distance. Les guillemets protègent le ; : sans eux, ton shell local couperait la ligne et uptime s'exécuterait sur VM-A.",
      mistakes: [
        { re: "192\\.168\\.1\\.20\\s+hostname\\s*;", msg: "Sans guillemets, le ; est interprété par ton shell local : uptime s'exécuterait sur VM-A, pas sur VM-B." },
        { re: "^ssh\\s+192", msg: "Précise le compte : etudiant@192.168.1.20." }
      ],
      src: 'Cours 4 §3.2 · TP4 ex.5 Q4', level: 2 },
    { id: 'c4-x-020',
      prompt: "Connecte-toi au serveur 20.19.8.4 avec le compte admin ; son serveur SSH écoute sur le port 2222.",
      context: "Serveur distant : 20.19.8.4, directive Port 2222 dans sshd_config.",
      answers: ['ssh -p 2222 admin@20.19.8.4', 'ssh admin@20.19.8.4 -p 2222'],
      hint: "Option de port de ssh (minuscule).",
      explain: "`-p 2222` indique le port du serveur sshd. Sans lui, ssh essaie le port 22.",
      mistakes: [
        { re: "-P\\s*2222", msg: "Pour ssh, le port s'écrit -p minuscule (c'est scp qui utilise -P majuscule)." },
        { re: "20\\.19\\.8\\.4:2222", msg: "ssh n'accepte pas la notation machine:port ; utilise -p 2222." }
      ],
      src: 'Cours 4 §3.2', level: 2 },
    { id: 'c4-x-021',
      prompt: "Copie le fichier rapport.txt (répertoire courant) dans le répertoire personnel d'etudiant sur VM-B.",
      context: "VM-B : 192.168.1.20, compte etudiant.",
      answers: ['scp rapport.txt etudiant@192.168.1.20:~/', 'scp rapport.txt etudiant@192.168.1.20:~', 'scp rapport.txt etudiant@192.168.1.20:', 'scp rapport.txt etudiant@192.168.1.20:/home/etudiant/', 'scp rapport.txt etudiant@192.168.1.20:/home/etudiant'],
      hint: "scp source utilisateur@machine:chemin",
      explain: "scp copie via SSH ; le : sépare la machine du chemin distant (~/ ou rien = répertoire personnel).",
      mistakes: [
        { re: "etudiant@192\\.168\\.1\\.20\\s*$", msg: "Sans le : final, scp fait une copie LOCALE vers un fichier nommé « etudiant@192.168.1.20 » !" },
        { re: "^scp\\s+etudiant@", msg: "Ordre inversé : la source (rapport.txt) d'abord, la destination distante ensuite." },
        { re: "^cp\\s", msg: "cp ne copie qu'en local : vers une autre machine, c'est scp." }
      ],
      src: 'Cours 4 §3.2 · TP4 ex.5 Q5', level: 2 },
    { id: 'c4-x-022',
      prompt: "Récupère le fichier notes.txt du répertoire personnel d'etudiant sur VM-B et place-le dans ton répertoire courant.",
      context: "VM-B : 192.168.1.20 ; le fichier est /home/etudiant/notes.txt.",
      answers: ['scp etudiant@192.168.1.20:~/notes.txt .', 'scp etudiant@192.168.1.20:notes.txt .', 'scp etudiant@192.168.1.20:/home/etudiant/notes.txt .', 'scp etudiant@192.168.1.20:~/notes.txt ./', 'scp etudiant@192.168.1.20:notes.txt ./'],
      hint: "La source est distante ; la destination est . (répertoire courant).",
      explain: "Source = etudiant@192.168.1.20:~/notes.txt (côté distant) ; destination = . (répertoire courant local).",
      mistakes: [
        { re: "notes\\.txt\\s*$", msg: "Il manque la destination : ajoute . (le répertoire courant)." },
        { re: "^scp\\s+notes\\.txt", msg: "Le fichier est sur VM-B : la source doit être etudiant@192.168.1.20:~/notes.txt." }
      ],
      src: 'Cours 4 §3.2 · TP4 ex.5 Q5', level: 2 },
    { id: 'c4-x-023',
      prompt: "Copie rapport.pdf dans le répertoire personnel d'admin sur 20.19.8.4, dont le serveur SSH écoute sur le port 2222.",
      context: "Fichier rapport.pdf dans le répertoire courant.",
      answers: ['scp -P 2222 rapport.pdf admin@20.19.8.4:~/', 'scp -P 2222 rapport.pdf admin@20.19.8.4:~', 'scp -P 2222 rapport.pdf admin@20.19.8.4:'],
      hint: "Attention à la casse de l'option de port pour scp.",
      explain: "Pour scp, le port se donne avec -P MAJUSCULE, placé avant les fichiers.",
      mistakes: [
        { re: "-p\\s*2222", msg: "Avec scp, -p minuscule = préserver dates et droits ; le port s'écrit -P majuscule." },
        { re: "20\\.19\\.8\\.4:2222", msg: "Après le : vient un chemin, pas un port : le fichier serait copié sous le nom « 2222 » via le port 22." },
        { re: "20\\.19\\.8\\.4\\s*$", msg: "Il manque le : après l'adresse : sans lui, la copie est locale." }
      ],
      src: 'Cours 4 §3.2', level: 3 },
    { id: 'c4-x-024',
      prompt: "Sur VM-B, affiche les journaux du service SSH des 10 dernières minutes.",
      context: "VM-B (Debian), service ssh.service.",
      answers: ['sudo journalctl -u ssh --since "10 min ago"', 'sudo journalctl -u ssh --since "10 minutes ago"'],
      hint: "journalctl -u SERVICE --since \"…\"",
      explain: "`-u ssh` filtre l'unité ssh.service ; `--since \"10 min ago\"` limite la période (les guillemets regroupent l'expression en un seul argument). On y lit les lignes Accepted password / Failed password.",
      mistakes: [
        { re: "-u\\s+sshd", msg: "Sous Debian, l'unité s'appelle ssh.service (sshd n'en est qu'un alias) : utilise -u ssh comme dans le cours." },
        { re: "--since\\s+10", msg: "Mets « 10 min ago » entre guillemets : sinon min et ago deviennent des arguments séparés." },
        { re: "^(sudo\\s+)?journalctl\\s+(-f|--since)", msg: "Il manque -u ssh pour ne garder que le service SSH." }
      ],
      src: 'Cours 4 §5.4 · TP4 ex.5 Q6', level: 2 },

    // ---------- SSH : clés et durcissement ----------
    { id: 'c4-x-025',
      prompt: "Sur VM-A, génère une paire de clés SSH de type ed25519.",
      context: "Tu es etudiant sur VM-A.",
      answers: ['ssh-keygen -t ed25519'],
      hint: "ssh-keygen avec l'option de type.",
      explain: "`ssh-keygen -t ed25519` crée ~/.ssh/id_ed25519 (clé privée, à ne jamais partager) et ~/.ssh/id_ed25519.pub (clé publique). Choisis une phrase de passe pour protéger la clé privée.",
      mistakes: [
        { re: "-t\\s+rsa", msg: "RSA fonctionne mais le cours utilise l'algorithme moderne ed25519." },
        { re: "^ssh-keygen\\s*$", msg: "Précise le type avec -t ed25519." },
        { re: "ed2519\\b|ed-25519", msg: "Le nom exact de l'algorithme est ed25519." }
      ],
      src: 'Cours 4 §3.3 · TP4 ex.6 Q1', level: 1 },
    { id: 'c4-x-026',
      prompt: "Installe ta clé publique sur VM-B pour le compte etudiant.",
      context: "Clés générées : ~/.ssh/id_ed25519 et ~/.ssh/id_ed25519.pub. VM-B : 192.168.1.20.",
      answers: ['ssh-copy-id etudiant@192.168.1.20', 'ssh-copy-id -i ~/.ssh/id_ed25519.pub etudiant@192.168.1.20'],
      hint: "Une commande dédiée : ssh-copy-…",
      explain: "`ssh-copy-id` se connecte (avec le mot de passe, une dernière fois) et ajoute ta clé PUBLIQUE à ~/.ssh/authorized_keys sur VM-B, en créant le dossier avec les bons droits.",
      mistakes: [
        { re: "^scp.*id_ed25519(?!\\.pub)", msg: "DANGER : tu copies la clé PRIVÉE ! Seule la clé publique (.pub) va sur le serveur, et ssh-copy-id s'en charge." },
        { re: "^scp.*\\.pub", msg: "Copier le .pub avec scp ne l'ajoute pas à authorized_keys : utilise ssh-copy-id." },
        { re: "^ssh-copy-id\\s+192", msg: "Précise le compte : etudiant@192.168.1.20." }
      ],
      src: 'Cours 4 §3.3 · TP4 ex.6 Q2', level: 2 },
    { id: 'c4-x-027',
      prompt: "Sur VM-B, fixe les droits de ~/.ssh/authorized_keys : lecture et écriture pour toi seul.",
      context: "Actuellement -rw-rw-r-- (le groupe peut écrire : sshd refuse ta clé).",
      answers: ['chmod 600 ~/.ssh/authorized_keys', 'chmod go-rw ~/.ssh/authorized_keys', 'chmod u=rw,go= ~/.ssh/authorized_keys'],
      chmod: { file: '~/.ssh/authorized_keys', from: 'rw-rw-r--', to: 'rw-------' },
      hint: "rw------- en octal.",
      explain: "600 = rw------- : seul le propriétaire lit et écrit. Si d'autres peuvent écrire dans authorized_keys, sshd refuse les clés (quelqu'un pourrait y ajouter la sienne). Le dossier ~/.ssh, lui, doit être en 700.",
      mistakes: [
        { re: "chmod\\s+700", msg: "Pas besoin de x sur un fichier de clés : 600 suffit (700, c'est pour le dossier ~/.ssh)." },
        { re: "chmod\\s+644", msg: "644 retire l'écriture du groupe, mais l'énoncé demande lecture et écriture pour toi SEUL : 600." },
        { re: "chmod\\s+(666|777)", msg: "Surtout pas : tout le monde pourrait ajouter sa clé, et sshd refuserait la tienne." }
      ],
      src: 'Cours 4 §3.3 · TP4 ex.6 Q4', level: 2 },
    { id: 'c4-x-028',
      prompt: "Tu viens de modifier /etc/ssh/sshd_config sur VM-B. Vérifie sa syntaxe (sans afficher toute la configuration) avant de redémarrer le service.",
      context: "VM-B, tu es etudiant (membre de sudo), une session SSH reste ouverte.",
      answers: ['sudo sshd -t'],
      hint: "Le démon sshd avec l'option test.",
      explain: "`sshd -t` (test) lit la configuration et les clés d'hôte puis s'arrête : aucune sortie = syntaxe correcte, sinon le fichier et la ligne fautive sont indiqués. Ensuite seulement : sudo systemctl restart ssh.",
      mistakes: [
        { re: "-T\\b", msg: "-T (majuscule) teste aussi mais affiche toute la configuration effective ; l'énoncé demande -t." },
        { re: "^(sudo\\s+)?ssh\\s+-t", msg: "ssh est le client ; c'est le démon sshd qu'on teste." },
        { re: "systemctl", msg: "Redémarrer avant de tester, c'est risquer un serveur SSH qui ne repart pas : teste d'abord avec sshd -t." }
      ],
      src: 'Cours 4 §3.4 · TP4 ex.6 Q6', level: 2 },
    { id: 'c4-x-029',
      prompt: "VM-B est durcie (PasswordAuthentication no). Vérifie qu'une connexion SANS clé est refusée : connecte-toi en etudiant sur VM-B en désactivant l'authentification par clé publique côté client.",
      context: "VM-B : 192.168.1.20. Tu es sur VM-A, ta clé est installée sur VM-B.",
      answers: ['ssh -o PubkeyAuthentication=no etudiant@192.168.1.20'],
      hint: "ssh -o Option=valeur …",
      explain: "`-o PubkeyAuthentication=no` interdit l'usage de ta clé pour cette connexion : le serveur n'acceptant plus les mots de passe, tu dois obtenir « Permission denied (publickey) ».",
      mistakes: [
        { re: "PasswordAuthentication", msg: "C'est l'authentification par CLÉ qu'on désactive côté client, pour simuler un compte sans clé : PubkeyAuthentication=no." },
        { re: "-o\\s+PubkeyAuthentication\\s+no", msg: "La syntaxe est Option=valeur, sans espace : PubkeyAuthentication=no." }
      ],
      src: 'TP4 ex.6 Q7', level: 3 },
    { id: 'c4-x-030',
      prompt: "Depuis VM-A, crée un tunnel SSH vers l'hôte binome : le port local 9000 doit mener au port 9000 de binome vu depuis binome lui-même.",
      context: "binome est un alias défini dans ~/.ssh/config (Host binome, HostName 192.168.1.20…). Sur binome tourne : python3 -m http.server 9000 --bind 127.0.0.1",
      answers: ['ssh -L 9000:localhost:9000 binome', 'ssh -L 9000:127.0.0.1:9000 binome'],
      hint: "ssh -L PORT_LOCAL:HÔTE:PORT_DISTANT alias",
      explain: "-L 9000:localhost:9000 : http://localhost:9000 sur VM-A est relayé dans SSH puis remis à localhost:9000 sur binome. Le serveur lié à 127.0.0.1 devient accessible sans ouvrir de port dans le pare-feu.",
      mistakes: [
        { re: "-R\\b", msg: "-R crée un tunnel inverse (port ouvert côté serveur) ; ici le port est LOCAL : -L." },
        { re: "-l\\s", msg: "-l minuscule sert à donner le nom d'utilisateur ; le tunnel local, c'est -L majuscule." },
        { re: "192\\.168\\.1\\.20:9000", msg: "Le serveur de binome n'écoute que sur 127.0.0.1 : la destination, vue depuis binome, est localhost:9000." }
      ],
      src: 'TP4 ex.12', level: 3 },

    // ---------- Pare-feu UFW ----------
    { id: 'c4-x-031',
      prompt: "Définis la politique par défaut d'UFW : bloquer toutes les connexions entrantes.",
      context: "VM-A, UFW installé mais pas encore activé.",
      answers: ['sudo ufw default deny incoming'],
      hint: "ufw default ACTION DIRECTION",
      explain: "`ufw default deny incoming` : tout ce qui entre est bloqué sauf ce qu'une règle autorise. On complète par `sudo ufw default allow outgoing`.",
      mistakes: [
        { re: "allow\\s+incoming", msg: "C'est l'inverse : on BLOQUE l'entrant par défaut." },
        { re: "ufw\\s+deny\\s+incoming", msg: "Il manque le mot-clé default : ufw default deny incoming." }
      ],
      src: 'Cours 4 §4.2 · TP4 ex.7 Q2', level: 1 },
    { id: 'c4-x-032',
      prompt: "Avant d'activer UFW sur cette VM administrée à distance, autorise SSH (par son nom de service).",
      context: "Tu es connecté à la VM en SSH. Politique : deny incoming.",
      answers: ['sudo ufw allow ssh', 'sudo ufw allow 22/tcp', 'sudo ufw allow 22'],
      hint: "ufw allow + nom du service.",
      explain: "`ufw allow ssh` ouvre le port 22/tcp (nom lu dans /etc/services). Sans cette règle, ufw enable avec deny incoming couperait ta session.",
      mistakes: [
        { re: "enable", msg: "Pas encore ! Si tu actives avant d'autoriser SSH, tu perds l'accès à la machine distante. D'abord ufw allow ssh." },
        { re: "allow\\s+sshd", msg: "Le nom du service dans /etc/services est ssh (sshd est le nom du démon)." }
      ],
      src: 'Cours 4 §4.2 · TP4 ex.7 Q3', level: 1 },
    { id: 'c4-x-033',
      prompt: "La règle SSH est en place. Active maintenant le pare-feu.",
      context: "Règles déjà définies : default deny incoming, default allow outgoing, allow ssh.",
      answers: ['sudo ufw enable'],
      hint: "ufw + verbe « activer ».",
      explain: "`ufw enable` charge les règles et active UFW au démarrage. Il prévient que les connexions SSH peuvent être perturbées : répondre y (ta règle allow ssh te protège). Vérifier avec sudo ufw status verbose.",
      mistakes: [
        { re: "systemctl\\s+(start|enable)", msg: "Démarrer le service ufw ne suffit pas : le pare-feu s'active avec ufw enable." },
        { re: "ufw\\s+(start|on)\\b", msg: "La sous-commande est enable." }
      ],
      src: 'Cours 4 §4.2 · TP4 ex.7 Q4', level: 1 },
    { id: 'c4-x-034',
      prompt: "Sur VM-A, autorise les connexions entrantes vers le port 8080 en TCP (serveur web de test python3 -m http.server 8080).",
      context: "UFW actif, politique deny incoming.",
      answers: ['sudo ufw allow 8080/tcp'],
      hint: "ufw allow PORT/PROTOCOLE",
      explain: "`ufw allow 8080/tcp` ouvre le port 8080 uniquement en TCP. Depuis VM-B, curl http://192.168.1.10:8080 fonctionne alors.",
      mistakes: [
        { re: "allow\\s+8080\\s*$", msg: "Sans /tcp, la règle ouvre TCP ET UDP : précise /tcp (HTTP utilise TCP)." },
        { re: "allow\\s+tcp/8080", msg: "L'ordre est PORT/PROTOCOLE : 8080/tcp." },
        { re: "ufw\\s+8080", msg: "Il manque l'action allow." }
      ],
      src: 'Cours 4 §4.2 · TP4 ex.7 Q6', level: 2 },
    { id: 'c4-x-035',
      prompt: "Affiche les règles UFW avec leur numéro, pour pouvoir en supprimer une.",
      context: "UFW actif sur VM-A.",
      answers: ['sudo ufw status numbered'],
      hint: "ufw status + un mot qui évoque la numérotation.",
      explain: "`ufw status numbered` affiche [ 1] 22/tcp ALLOW IN Anywhere, etc. Ces numéros servent à ufw delete N.",
      mistakes: [
        { re: "ufw\\s+list", msg: "ufw list n'existe pas : c'est ufw status numbered." },
        { re: "status\\s+verbose", msg: "verbose ajoute les politiques par défaut, mais pas les numéros : numbered." },
        { re: "ufw\\s+numbered", msg: "Il manque status : ufw status numbered." }
      ],
      src: 'Cours 4 §4.2 · TP4 ex.7 Q6', level: 1 },
    { id: 'c4-x-036',
      prompt: "Dans `ufw status numbered`, la règle 8080/tcp porte le numéro 3. Supprime-la par son numéro.",
      context: "UFW actif sur VM-A.",
      answers: ['sudo ufw delete 3'],
      hint: "ufw delete N",
      explain: "`ufw delete 3` supprime la règle n°3 après confirmation (y). Les numéros suivants se décalent, et la règle IPv6 (v6) a son propre numéro : réaffiche la liste avant d'en supprimer une autre.",
      mistakes: [
        { re: "ufw\\s+(remove|del|rm)\\s", msg: "La sous-commande est delete." },
        { re: "deny\\s+8080", msg: "Ajouter un deny crée une NOUVELLE règle ; l'énoncé demande de supprimer la règle n°3." },
        { re: "delete\\s+8080", msg: "Par son numéro : ufw delete 3 (la forme en clair serait ufw delete allow 8080/tcp)." }
      ],
      src: 'Cours 4 §4.2 · TP4 ex.7 Q6', level: 2 },
    { id: 'c4-x-037',
      prompt: "Autorise le port 8080 en TCP uniquement pour les connexions venant de VM-B (192.168.1.20).",
      context: "UFW actif sur VM-A, politique deny incoming.",
      answers: ['sudo ufw allow from 192.168.1.20 to any port 8080 proto tcp', 'sudo ufw allow proto tcp from 192.168.1.20 to any port 8080'],
      hint: "ufw allow from SOURCE to any port PORT proto tcp",
      explain: "from = adresse source autorisée ; to any = n'importe quelle adresse de ce serveur ; port 8080 proto tcp = le service visé. Les autres machines restent bloquées.",
      mistakes: [
        { re: "to\\s+192\\.168\\.1\\.20", msg: "VM-B est la SOURCE : from 192.168.1.20 … to any." },
        { re: "allow\\s+8080/tcp\\s+from", msg: "Avec une source, il faut la syntaxe longue : allow from IP to any port 8080 proto tcp." },
        { re: "from\\s+192\\.168\\.1\\.20\\s+port", msg: "Il manque to any avant port." }
      ],
      src: 'Cours 4 §4.2 · TP4 ex.7 Q7', level: 3 },
    { id: 'c4-x-038',
      prompt: "En une seule ligne, chaque commande ne s'exécutant que si la précédente a réussi : autorise 22/tcp, puis 80/tcp, puis 443/tcp, puis active UFW.",
      context: "VM Debian du semestre (serveur web), administrée en SSH.",
      answers: ['sudo ufw allow 22/tcp && sudo ufw allow 80/tcp && sudo ufw allow 443/tcp && sudo ufw enable'],
      hint: "Quatre commandes sudo ufw reliées par &&.",
      explain: "&& n'exécute la commande suivante que si la précédente a réussi : si une règle échoue, le pare-feu n'est pas activé. L'activation vient en dernier, après l'ouverture de SSH.",
      mistakes: [
        { re: "^sudo\\s+ufw\\s+enable", msg: "Activer en premier coupe SSH sur une machine distante : enable doit venir en DERNIER." },
        { re: ";", msg: "Avec ; la suite s'exécute même si une règle a échoué : utilise &&." },
        { re: "&&\\s*ufw", msg: "Chaque commande a besoin de son propre sudo : sudo ne s'applique qu'à la commande qui le suit." }
      ],
      src: 'Cours 4 §4.3', level: 3 },

    // ---------- Comptes, sudo, mises à jour ----------
    { id: 'c4-x-039',
      prompt: "Donne les droits d'administration à l'utilisateur stagiaire en l'ajoutant au groupe sudo, sans le retirer de ses autres groupes.",
      context: "Compte stagiaire créé avec sudo adduser stagiaire. Tu es etudiant (membre de sudo).",
      answers: ['sudo usermod -aG sudo stagiaire', 'sudo adduser stagiaire sudo', 'sudo gpasswd -a stagiaire sudo'],
      hint: "usermod avec append + Groups.",
      explain: "-a (append) + -G sudo : ajoute le groupe secondaire sudo. stagiaire doit se reconnecter ; vérifier avec groups et sudo -l.",
      mistakes: [
        { re: "usermod\\s+-G\\s", msg: "Sans -a, -G REMPLACE tous les groupes secondaires de stagiaire." },
        { re: "usermod\\s+-aG\\s+stagiaire\\s+sudo", msg: "Ordre : usermod -aG GROUPE UTILISATEUR → -aG sudo stagiaire." },
        { re: "visudo", msg: "Sous Debian, inutile d'éditer sudoers : le groupe sudo a déjà les droits, il suffit d'y ajouter stagiaire." }
      ],
      src: 'Cours 4 §5.1 · TP4 ex.8 Q2', level: 2 },
    { id: 'c4-x-040',
      prompt: "Avec chage, impose à stagiaire de changer son mot de passe au moins tous les 90 jours.",
      context: "Tu es etudiant (membre de sudo).",
      answers: ['sudo chage -M 90 stagiaire'],
      hint: "chage, option du nombre MAXIMUM de jours.",
      explain: "`chage -M 90` = durée de validité maximale du mot de passe, en jours. `sudo chage -l stagiaire` affiche ensuite la politique.",
      mistakes: [
        { re: "-m\\s*90", msg: "-m minuscule = délai MINIMUM entre deux changements ; le maximum, c'est -M majuscule." },
        { re: "chage\\s+-l", msg: "-l affiche la politique sans la modifier : utilise -M 90." },
        { re: "^(sudo\\s+)?passwd", msg: "L'énoncé demande la commande chage : chage -M 90 stagiaire." }
      ],
      src: 'Cours 4 §5.2 · TP4 ex.8 Q4', level: 2 },
    { id: 'c4-x-041',
      prompt: "Le stage est terminé : retire stagiaire du groupe sudo, sans supprimer son compte.",
      context: "stagiaire est membre des groupes stagiaire et sudo.",
      answers: ['sudo deluser stagiaire sudo', 'sudo gpasswd -d stagiaire sudo'],
      hint: "deluser UTILISATEUR GROUPE",
      explain: "`deluser stagiaire sudo` retire seulement l'appartenance au groupe sudo ; le compte et ses fichiers restent.",
      mistakes: [
        { re: "^(sudo\\s+)?deluser\\s+stagiaire\\s*$", msg: "DANGER : sans nom de groupe, deluser SUPPRIME le compte stagiaire." },
        { re: "userdel", msg: "userdel supprime le compte : ce n'est pas ce qu'on veut." },
        { re: "deluser\\s+sudo\\s+stagiaire", msg: "Ordre : deluser UTILISATEUR GROUPE → deluser stagiaire sudo." }
      ],
      src: 'TP4 ex.8 Q5', level: 2 },
    { id: 'c4-x-042',
      prompt: "Verrouille le compte stagiaire pour que plus aucune connexion par mot de passe ne soit possible.",
      context: "Tu es etudiant (membre de sudo).",
      answers: ['sudo passwd -l stagiaire', 'sudo usermod -L stagiaire'],
      hint: "passwd + option lock.",
      explain: "`passwd -l` ajoute un ! devant l'empreinte dans /etc/shadow : plus aucun mot de passe ne correspond. `passwd -u` déverrouille. (Une clé SSH resterait utilisable.)",
      mistakes: [
        { re: "passwd\\s+-d", msg: "DANGER : -d SUPPRIME le mot de passe (compte sans mot de passe) ; pour verrouiller, c'est -l." },
        { re: "passwd\\s+-u", msg: "-u déverrouille ; pour verrouiller, c'est -l (lock)." },
        { re: "deluser|userdel", msg: "On veut verrouiller le compte, pas le supprimer." }
      ],
      src: 'Cours 4 §5.2 · TP4 ex.8 Q5', level: 2 },
    { id: 'c4-x-043',
      prompt: "Mets à jour la liste des paquets puis, seulement si cela a réussi, installe les mises à jour disponibles.",
      context: "Tu es etudiant (membre de sudo).",
      answers: ['sudo apt update && sudo apt upgrade'],
      hint: "Deux commandes apt, reliées par &&.",
      explain: "apt update rafraîchit la liste des paquets ; && lance apt upgrade uniquement si update a réussi ; upgrade installe les nouvelles versions (corrections de sécurité).",
      mistakes: [
        { re: ";", msg: "Avec ; upgrade s'exécuterait même si update a échoué : utilise &&." },
        { re: "upgrade\\s*&&.*update", msg: "Ordre inversé : d'abord update (la liste), puis upgrade (l'installation)." },
        { re: "&&\\s*apt", msg: "Le second apt a aussi besoin de sudo : sudo ne s'applique qu'à la première commande." }
      ],
      src: 'Cours 4 §5.3 · TP4 ex.9 Q1', level: 1 },
    { id: 'c4-x-044',
      prompt: "Le service d'impression cups est inutile sur ce serveur : arrête-le immédiatement ET empêche son démarrage au boot, en une seule commande.",
      context: "sudo ss -tulpn montre cupsd en écoute sur le port 631.",
      answers: ['sudo systemctl disable --now cups', 'sudo systemctl disable cups --now'],
      hint: "systemctl disable + option pour agir tout de suite.",
      explain: "disable retire le démarrage automatique ; --now arrête aussi le service tout de suite. Un service de moins à l'écoute = surface d'attaque réduite.",
      mistakes: [
        { re: "systemctl\\s+stop", msg: "stop arrête le service, mais il redémarrera au prochain boot : disable --now fait les deux." },
        { re: "disable\\s+cups\\s*$", msg: "disable seul n'arrête pas le service en cours : ajoute --now." },
        { re: "apt\\s+(remove|purge)", msg: "Désinstaller marcherait, mais l'énoncé demande de désactiver le service." }
      ],
      src: 'Cours 4 §5.3 · TP4 ex.9 Q2', level: 2 },

    // ---------- Journaux, fail2ban, observation ----------
    { id: 'c4-x-045',
      prompt: "Retrouve dans le journal du service SSH les tentatives de connexion échouées (lignes contenant « failed », quelle que soit la casse).",
      context: "Ton binôme vient de tenter 5 connexions avec un mauvais mot de passe.",
      answers: ['sudo journalctl -u ssh | grep -i failed'],
      hint: "journalctl -u ssh, puis un tube vers grep insensible à la casse.",
      explain: "journalctl -u ssh affiche le journal de sshd ; grep -i failed garde les lignes « Failed password for … from IP » (-i ignore la casse).",
      mistakes: [
        { re: "grep\\s+failed", msg: "Sans -i, grep failed ne trouve pas « Failed » (F majuscule)." },
        { re: "-u\\s+sshd", msg: "Sous Debian, l'unité s'appelle ssh.service : -u ssh, comme dans le cours." },
        { re: "journalctl\\s*\\|", msg: "Filtre d'abord sur le service avec -u ssh." }
      ],
      src: 'Cours 4 §5.4 · TP4 ex.9 Q3', level: 2 },
    { id: 'c4-x-046',
      prompt: "Affiche l'historique des tentatives de connexion ÉCHOUÉES enregistrées par le système.",
      context: "Tu es etudiant (membre de sudo).",
      answers: ['sudo lastb'],
      hint: "last + b (bad).",
      explain: "`lastb` lit /var/log/btmp (tentatives échouées), fichier lisible seulement par root. `last` montre, lui, les connexions réussies.",
      mistakes: [
        { re: "^(sudo\\s+)?last\\s*$", msg: "last affiche les connexions RÉUSSIES ; pour les échecs, c'est lastb (b = bad)." },
        { re: "^who", msg: "who liste les sessions ouvertes maintenant, pas les échecs." }
      ],
      src: 'Cours 4 §5.4 · TP4 ex.9 Q4', level: 2 },
    { id: 'c4-x-047',
      prompt: "Affiche l'état de la prison SSH de fail2ban (nombre d'échecs, IP bannies).",
      context: "fail2ban est installé ; la prison s'appelle sshd.",
      answers: ['sudo fail2ban-client status sshd'],
      hint: "fail2ban-client status PRISON",
      explain: "fail2ban-client pilote le démon ; `status sshd` détaille la prison sshd : Currently failed, Currently banned, Banned IP list.",
      mistakes: [
        { re: "status\\s+ssh\\s*$", msg: "La prison (jail) s'appelle sshd." },
        { re: "systemctl\\s+status", msg: "systemctl status fail2ban dit si le service tourne, pas quelles IP sont bannies." },
        { re: "fail2ban\\s+status", msg: "La commande est fail2ban-client." }
      ],
      src: 'Cours 4 §5.4 · TP4 ex.9 Q5', level: 2 },
    { id: 'c4-x-048',
      prompt: "VM-B (192.168.1.20) a été bannie par fail2ban dans la prison sshd. Débannis-la.",
      context: "jail.local : maxretry = 3, findtime = 10m, bantime = 10m.",
      answers: ['sudo fail2ban-client set sshd unbanip 192.168.1.20'],
      hint: "fail2ban-client set PRISON unbanip IP",
      explain: "`set sshd unbanip 192.168.1.20` retire l'IP de la liste des bannis de la prison sshd (et la règle de pare-feu associée).",
      mistakes: [
        { re: "unban\\s", msg: "L'action s'appelle unbanip." },
        { re: "set\\s+192", msg: "Syntaxe : set PRISON unbanip IP → set sshd unbanip 192.168.1.20." },
        { re: "ufw\\s+allow", msg: "fail2ban gère ses propres règles : débannis avec fail2ban-client, pas avec ufw." }
      ],
      src: 'TP4 ex.13 Q3', level: 3 },
    { id: 'c4-x-049',
      prompt: "Capture le trafic du port 8080 sur toutes les interfaces, en affichant le contenu des paquets en ASCII.",
      context: "VM-A : python3 -m http.server 8080 tourne ; VM-B va envoyer une requête contenant password=secret123.",
      answers: ['sudo tcpdump -i any -A port 8080'],
      hint: "tcpdump -i … -A puis l'expression de filtre.",
      explain: "-i any = toutes les interfaces ; -A = contenu en ASCII ; port 8080 = filtre. La requête HTTP y apparaît en clair (password=secret123), contrairement au trafic SSH.",
      mistakes: [
        { re: "-X\\b", msg: "-X affiche hexadécimal + ASCII ; l'énoncé demande -A (ASCII seul)." },
        { re: "-i\\s+all", msg: "La pseudo-interface « toutes les interfaces » s'appelle any." },
        { re: "--port|-p\\s*8080", msg: "Le filtre s'écrit simplement port 8080 (une expression de filtre, pas une option)." }
      ],
      src: 'TP4 ex.11', level: 3 },
    { id: 'c4-x-050',
      prompt: "Ligne de script d'audit : si la sortie de `ufw status` contient « Status: active », affiche OK, sinon ALERTE (grep silencieux, puis && et ||).",
      context: "Script audit_securite.sh lancé avec sudo : tu es déjà root, pas besoin de sudo dans la ligne.",
      answers: ['ufw status | grep -q "Status: active" && echo OK || echo ALERTE'],
      hint: "ufw status | grep -q \"…\" && echo … || echo …",
      explain: "grep -q n'affiche rien et renvoie seulement un code de retour : 0 si le motif est trouvé → && echo OK ; sinon → || echo ALERTE. Les guillemets gardent « Status: active » en un seul motif.",
      mistakes: [
        { re: "grep\\s+(?!\\s|-q)", msg: "Sans -q, grep afficherait aussi la ligne trouvée en plus de OK : ajoute -q (quiet)." },
        { re: "\\|\\|\\s*echo\\s+OK", msg: "Ordre inversé : && pour le succès (OK), || pour l'échec (ALERTE)." },
        { re: "grep\\s+-q\\s+Status:\\s+active", msg: "Sans guillemets, « Status: » et « active » deviennent deux arguments : grep chercherait Status: dans un fichier nommé active." }
      ],
      src: 'TP4 ex.14', level: 3 }
  ]
});
