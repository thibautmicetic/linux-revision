/* Chapitre 1 — Linux, terminal et virtualisation (Cours 1 + TP 1) */
APP.registerChapter({
  id: 'c1',
  num: 1,
  title: 'Linux, terminal et virtualisation',
  subtitle: 'Cours 1 + TP 1',

  /* =====================================================================
   *  SECTIONS (fiches de cours)
   * ===================================================================== */
  sections: [
    {
      id: 'c1-s-se',
      title: '1. Le système d\'exploitation',
      src: 'Cours 1 §1.1-1.3',
      html: `
<h3>Le matériel à partager</h3>
<p>Un ordinateur est un ensemble de ressources matérielles <b>limitées</b> que le système d'exploitation doit partager entre tous les programmes.</p>
<table class="tbl">
<tr><th>Composant</th><th>Rôle</th></tr>
<tr><td>Processeur (CPU)</td><td>Exécute les instructions et fait les calculs. Caractérisé par sa fréquence (GHz) et son nombre de cœurs.</td></tr>
<tr><td>Mémoire vive (RAM)</td><td>Stocke temporairement les programmes et données en cours d'utilisation. Rapide mais <b>volatile</b> : effacée à l'extinction.</td></tr>
<tr><td>Stockage (disque dur / SSD)</td><td>Conserve les données de façon permanente (système, fichiers, applications). Plus lent que la RAM mais <b>non volatile</b>.</td></tr>
<tr><td>Carte mère</td><td>Relie tous les composants (bus, connecteurs) et contient le firmware (BIOS / UEFI) qui démarre la machine.</td></tr>
<tr><td>Interfaces réseau</td><td>Carte Ethernet ou Wi-Fi : communiquer avec d'autres machines.</td></tr>
<tr><td>Périphériques d'E/S</td><td>Entrée (clavier, souris…), sortie (écran, imprimante…). La carte graphique (GPU) gère l'affichage.</td></tr>
</table>

<h3>Qu'est-ce qu'un système d'exploitation ?</h3>
<p>Le <b>système d'exploitation</b> (SE, ou OS pour <i>Operating System</i>) assure la liaison entre les <b>ressources matérielles</b>, l'<b>utilisateur</b> et les <b>applications</b> (traitement de texte, navigateur, jeu…).</p>
<p>Un programme qui veut accéder au matériel n'envoie pas d'instructions spécifiques au périphérique : il s'adresse à l'OS, qui transmet la demande au périphérique via son <b>pilote</b> (<i>driver</i>).</p>
<div class="flow"><span>Application</span><span>Système d'exploitation</span><span>Pilote (driver)</span><span>Périphérique</span></div>
<div class="callout key"><b>À retenir</b> L'activité principale de l'OS est de <b>gérer les ressources matérielles</b> en permettant leur <b>allocation</b> et leur <b>partage</b> entre plusieurs applications exécutées en même temps. Sans pilotes, chaque programme devrait savoir parler lui-même à chaque type de périphérique.</div>

<h3>1.1 Les 4 rôles de l'OS</h3>
<div class="grid2">
<div class="mini"><h4>Exécution des applications</h4><p>Attribue aux applications les ressources nécessaires ; peut arrêter une application qui ne répond plus.</p></div>
<div class="mini"><h4>Gestion des droits</h4><p>Garantit que les ressources ne sont utilisées que par les programmes et utilisateurs qui en ont le droit.</p></div>
<div class="mini"><h4>Gestion des fichiers</h4><p>Lecture et écriture dans le système de fichiers, droits d'accès des utilisateurs et applications aux fichiers.</p></div>
<div class="mini"><h4>Gestion des informations</h4><p>Fournit des indicateurs de diagnostic : mémoire disponible, charge du processeur, erreurs système…</p></div>
</div>

<h3>1.2 Les 3 composants</h3>
<ul>
<li><b>Le noyau (kernel)</b> : le cœur de l'OS. Il gère directement le matériel (processeur, mémoire, périphériques) et offre aux programmes une interface d'<b>appels système</b>.</li>
<li><b>L'interpréteur de commandes (shell)</b> : reçoit les commandes tapées par l'utilisateur, les interprète, puis demande au noyau de les exécuter (c'est ce qui tourne dans le terminal).</li>
<li><b>Le système de fichiers</b> : la structure qui organise le stockage des données sur les disques, sous forme de fichiers et de répertoires.</li>
</ul>

<h3>1.3 Types de systèmes d'exploitation</h3>
<table class="tbl">
<tr><th>Critère</th><th>Explication</th><th>Exemples</th></tr>
<tr><td>Mono / multi-utilisateur</td><td>Une seule session à la fois / plusieurs comptes travaillent en même temps sur la même machine</td><td>MS-DOS / Unix, Linux</td></tr>
<tr><td>Mono-tâche / multitâche</td><td>Les systèmes modernes exécutent plusieurs processus en même temps en partageant le temps processeur (<b>ordonnancement</b>)</td><td>Tous les OS modernes</td></tr>
<tr><td>Temps réel</td><td>Garantit qu'une tâche s'exécute dans un <b>délai déterminé</b> : critique pour l'embarqué (automobile, aéronautique)</td><td>FreeRTOS, VxWorks</td></tr>
</table>
<p>Familles répandues : <b>bureau/serveur</b> Windows, macOS, GNU/Linux ; <b>mobile</b> Android (basé sur un noyau Linux), iOS ; <b>embarqué</b> Linux embarqué, FreeRTOS.</p>
`
    },

    {
      id: 'c1-s-unix',
      title: '2. Unix et Linux',
      src: 'Cours 1 §2.1-2.7',
      html: `
<h3>2.1 Historique d'Unix</h3>
<p>Unix est un système multitâche conçu aux <b>Bell Labs</b> (filiale d'AT&amp;T) à la fin des années 1960. Réécrit en <b>langage C en 1973</b> par Ken Thompson et Dennis Ritchie, il devient <b>portable</b> sur d'autres machines. Berkeley obtient tôt le code source et développe sa propre branche : Unix se scinde en deux lignées, <b>System V</b> (AT&amp;T) et <b>BSD</b> (Berkeley).</p>
<table class="tbl">
<tr><th>Date</th><th>Événement</th></tr>
<tr><td>1969</td><td>Création d'Unix par Ken Thompson et Dennis Ritchie (Bell Labs, ordinateur PDP-7)</td></tr>
<tr><td>1971</td><td>Première version officielle (documentation, diffusion interne chez AT&amp;T)</td></tr>
<tr><td>1973</td><td>Réécriture en C : Unix devient portable sur d'autres architectures</td></tr>
<tr><td>1975</td><td>Version 6 (V6), largement diffusée dans les universités (dont Berkeley)</td></tr>
<tr><td>1977</td><td>Naissance de BSD (distribution Unix de Berkeley)</td></tr>
<tr><td>1983</td><td>Projet <b>GNU</b> lancé par <b>Richard Stallman</b> : un système libre compatible Unix</td></tr>
<tr><td>1984</td><td>Consortium X/Open : standardisation des Unix</td></tr>
<tr><td>1987</td><td>MINIX, Unix pédagogique d'Andrew Tanenbaum</td></tr>
<tr><td><b>1991</b></td><td><b>Linus Torvalds publie le premier noyau Linux</b>, inspiré d'Unix</td></tr>
<tr><td>1992</td><td>Le code de BSD devient open source</td></tr>
<tr><td>1993</td><td>AT&amp;T cède sa branche Unix (SVR4) à Novell</td></tr>
<tr><td>1996</td><td>OpenBSD, branche de BSD axée sur la sécurité</td></tr>
<tr><td>2000</td><td>Mac OS X, basé sur Darwin (noyau dérivé de BSD)</td></tr>
<tr><td>2003</td><td>Certaines distributions Linux obtiennent la certification POSIX/UNIX</td></tr>
<tr><td>2017 / 2020</td><td>FreeBSD 12 / Unix fête ses 50 ans</td></tr>
</table>

<h3>2.2 Caractéristiques principales</h3>
<ul>
<li><b>Multitâche</b> : plusieurs processus s'exécutent simultanément.</li>
<li><b>Multi-utilisateur</b> : plusieurs utilisateurs en même temps, via des sessions distinctes.</li>
<li><b>Système de fichiers hiérarchique</b> : une arborescence qui facilite l'organisation des données.</li>
<li><b>Philosophie des petites commandes</b> : chaque utilitaire fait une tâche précise ; on les combine avec des <b>tubes</b> (<code>|</code>) pour créer des traitements puissants.</li>
<li><b>Portabilité</b> : fonctionne sur différents types de matériel.</li>
<li><b>Sécurité</b> : contrôle d'accès par utilisateur et permissions sur les fichiers.</li>
</ul>

<h3>2.3 Outils standards d'un système Unix</h3>
<p>Disponibles sur (presque) toutes les distributions : les <b>shells</b>, les commandes de <b>manipulation de fichiers</b>, de <b>gestion des processus</b>, les <b>éditeurs de texte</b> et les <b>outils de développement</b> (compilateurs, débogueurs, analyseurs lexicaux et syntaxiques).</p>

<h3>2.4 Les utilisateurs</h3>
<ul>
<li>Chaque utilisateur a un <b>compte</b> protégé par un <b>mot de passe</b>. Le nom est attribué une fois pour toutes par l'administrateur ; le mot de passe peut être changé par l'utilisateur.</li>
<li>Chaque utilisateur est identifié par un numéro unique : l'<b>UID</b>.</li>
<li>Le <b>superutilisateur</b> (administrateur, <b>root</b>) a des privilèges que les autres n'ont pas : accès à tous les fichiers, appels système réservés.</li>
<li>Les utilisateurs peuvent être réunis en <b>groupes</b>, chacun identifié par un <b>GID</b>.</li>
<li>UID et GID servent à définir les <b>droits d'accès</b> : le propriétaire d'un fichier peut autoriser son groupe à le lire tout en l'interdisant aux autres.</li>
</ul>

<h3>2.5 Unix vs Linux</h3>
<table class="tbl">
<tr><th>Critère</th><th>Unix</th><th>Linux</th></tr>
<tr><td>Origine</td><td>1969, Bell Labs</td><td>1991, Linus Torvalds (inspiré d'Unix)</td></tr>
<tr><td>Licence</td><td>Le plus souvent propriétaire (payante)</td><td><b>GPL</b> : libre et open source</td></tr>
<tr><td>Développement</td><td>Entreprises (IBM, Oracle…)</td><td>Communauté mondiale open source</td></tr>
<tr><td>Utilisation</td><td>Environnements critiques d'entreprise (télécoms, finance)</td><td>Serveurs, supercalculateurs, smartphones (Android)…</td></tr>
<tr><td>Coût</td><td>Souvent payant</td><td>Gratuit ou peu coûteux</td></tr>
</table>

<h3>2.6 Distributions Linux</h3>
<div class="callout info"><b>Distribution</b> Au sens strict, Linux est un <b>noyau</b>. Une distribution l'assemble avec les outils GNU, un gestionnaire de paquets et des logiciels prêts à l'emploi.</div>
<table class="tbl">
<tr><th>Famille</th><th>Distributions (usage)</th></tr>
<tr><td><b>Debian</b></td><td>Ubuntu (bureautique, serveurs, cloud, dev) · Debian (serveurs, infrastructure, BDD) · Linux Mint (novices) · Kali Linux (sécurité, pentest) · Raspberry Pi OS (embarqué, IoT)</td></tr>
<tr><td><b>Red Hat</b></td><td>RHEL (entreprises, serveurs, cloud) · Fedora (développement, cloud, desktop avancé) · CentOS Stream (serveurs, infrastructure)</td></tr>
<tr><td><b>SUSE</b></td><td>openSUSE (bureautique, serveurs) · SUSE Linux Enterprise (entreprises)</td></tr>
<tr><td><b>Arch Linux</b></td><td>Arch Linux (personnalisation extrême) · Manjaro (bureautique, dev, gaming)</td></tr>
<tr><td>Autres</td><td>Gentoo (experts, personnalisation totale) · Slackware (serveurs, utilisateurs expérimentés) · Elementary OS (design épuré)</td></tr>
</table>

<h3>2.7 Structure du système Unix/Linux</h3>
<div class="flow"><span>Programmes utilisateurs</span><span>Utilitaires standards (shell, éditeurs, compilateurs)</span><span>Bibliothèque standard (open, close, read, write, fork…)</span><span>Noyau (processus, mémoire, fichiers, E/S)</span><span>Matériel</span></div>
<ul>
<li>Le <b>noyau</b> gère le matériel et fournit aux programmes une interface d'<b>appels système</b> (créer et gérer des processus et des fichiers).</li>
<li>À chaque appel système correspond une <b>procédure de bibliothèque</b> qui masque les détails et le fait apparaître comme un simple appel de fonction.</li>
<li>Exemple : un programme C appelle la fonction <code>read()</code> de la bibliothèque standard, qui déclenche le véritable appel système READ.</li>
</ul>
<div class="callout key"><b>À retenir</b> Les véritables appels système s'exécutent en <b>mode noyau</b>, ce qui protège le système contre les intrusions et les erreurs des programmes.</div>
`
    },

    {
      id: 'c1-s-shell',
      title: '3.1-3.2 Le terminal, le shell et la syntaxe',
      src: 'Cours 1 §3.1-3.2, 3.7 · TP1 §3-4, 8, 10',
      html: `
<h3>Le terminal et le shell</h3>
<p>Le <b>terminal</b> permet de « discuter » avec l'ordinateur en tapant des commandes. Il est indispensable pour administrer des <b>serveurs</b>, souvent accessibles uniquement en ligne de commande. Le programme qui lit et exécute tes commandes s'appelle le <b>shell</b> (sous Debian/Ubuntu : <b>bash</b>).</p>
<p>Le shell indique qu'il est prêt par une <b>invite</b> (<i>prompt</i>), en général terminée par <code>$</code> : tu tapes une commande et tu valides avec <kbd>Entrée</kbd>.</p>
<pre class="code">etudiant@debian:~$ find ~/ -name "*.pdf" | wc -l
336
etudiant@debian:~$ find ~/ -name "*.pdf" &gt; liste_pdf.txt
# 1re ligne : le tube | envoie la liste des PDF à wc -l, qui compte les lignes
# 2e ligne : &gt; enregistre la liste elle-même dans liste_pdf.txt</pre>

<h3>3.2 Syntaxe d'une commande</h3>
<div class="flow"><span>nom</span><span>-options</span><span>arguments</span></div>
<ul>
<li><b>Nom</b> : souvent l'abréviation de ce que fait la commande (<code>pwd</code> = <i>print working directory</i>).</li>
<li><b>Options</b> : introduites par un tiret, souvent une seule lettre. Elles se regroupent : <code>ls -a -l</code> = <code>ls -al</code> = <code>ls -la</code>. Certaines ont une forme longue : <code>--all</code>.</li>
<li><b>Arguments</b> : les objets sur lesquels porte la commande (en général des fichiers) : <code>ls -l /etc/passwd</code>.</li>
</ul>
<p>Dans la documentation, les éléments entre crochets <code>[ ]</code> sont <b>facultatifs</b>. Les options peuvent varier d'un Unix à l'autre (Linux, BSD, Solaris…).</p>
<div class="callout warn"><b>Piège</b> Linux est <b>sensible à la casse</b> : <code>ls -R</code> (récursif) n'est pas <code>ls -r</code> (ordre inverse), et <code>Cours</code> n'est pas <code>cours</code>.</div>

<h3>Trois sortes de commandes</h3>
<ul>
<li>Commandes « simples » qui affichent leur résultat dans le terminal (<code>ls</code>, <code>cp</code>…) : elles ont besoin du terminal.</li>
<li>Programmes plus sophistiqués qui n'utilisent pas le shell (ex. <code>gedit</code>) : on peut aussi les lancer par une icône.</li>
<li>Commandes <b>internes</b> au shell (<i>built-in</i>) : <code>cd</code>, <code>alias</code>, <code>history</code>, <code>exit</code>…</li>
</ul>

<h3>Obtenir de l'aide : man</h3>
<p><code>man commande</code> affiche le manuel complet (description et toutes les options). Défilement avec les flèches ou <kbd>PgUp</kbd>/<kbd>PgDn</kbd>, recherche avec <kbd>/</kbd>, <b>sortie avec <kbd>q</kbd></b>.</p>

<h3>Qui est connecté ? (TP ex.3)</h3>
<table class="tbl">
<tr><th>Commande</th><th>Affiche</th></tr>
<tr><td><code>whoami</code></td><td>Ton identifiant (ex. <code>etudiant</code>)</td></tr>
<tr><td><code>who</code></td><td>La liste des utilisateurs connectés (terminal, heure de connexion)</td></tr>
<tr><td><code>w</code></td><td>Plus complet : uptime, charge, et ce que fait chaque utilisateur (colonne WHAT)</td></tr>
</table>

<h3>L'historique (TP §8)</h3>
<ul>
<li><kbd>↑</kbd> / <kbd>↓</kbd> : faire défiler les commandes précédentes ; <kbd>←</kbd> / <kbd>→</kbd> : corriger un détail avant de relancer.</li>
<li><code>history</code> : liste numérotée des commandes récentes ; <code>!n</code> relance la commande numéro n (ex. <code>!42</code>).</li>
</ul>

<h3>Personnaliser : alias et ~/.bashrc (TP §10)</h3>
<pre class="code">$ alias la='ls -a'          # crée la commande la
$ alias rm='rm -i'          # rm demandera toujours confirmation
$ alias ls='ls --color=auto'  # ls toujours en couleur
$ alias                     # sans argument : liste les alias</pre>
<div class="callout warn"><b>Attention</b> Pas d'espace autour du <code>=</code>, et des guillemets dès que la commande contient un espace (<code>alias la=ls -a</code> provoque l'erreur « alias: -a: not found »).</div>
<p>Un alias n'existe que dans le <b>terminal où il a été créé</b> : il disparaît dans un nouveau terminal. Pour le rendre permanent, on l'écrit dans <code>~/.bashrc</code>, fichier lu à l'ouverture de chaque terminal (<code>/etc/bash.bashrc</code> pour tout le système). Les changements ne s'appliquent qu'aux <b>nouveaux</b> terminaux (ou après <code>source ~/.bashrc</code>).</p>
<pre class="code">$ echo "alias la='ls -a'" &gt;&gt; ~/.bashrc    # &gt;&gt; ajoute à la fin, &gt; écraserait le fichier !</pre>

<h3>Se déconnecter proprement</h3>
<p>Quitter les applications (<kbd>Ctrl</kbd>+<kbd>Q</kbd> dans gedit), fermer le terminal avec <code>exit</code> ou <kbd>Ctrl</kbd>+<kbd>D</kbd>, puis éteindre depuis le menu. Linux doit être <b>arrêté proprement</b>, jamais en coupant l'alimentation.</p>
`
    },

    {
      id: 'c1-s-fichiers',
      title: '3.3-3.4 Naviguer et manipuler les fichiers',
      src: 'Cours 1 §3, 3.3-3.4 · TP1 ex.6-15',
      html: `
<h3>L'arborescence</h3>
<p>Tous les fichiers forment un <b>arbre unique</b> qui part de la racine <code>/</code>. Ton répertoire personnel (<i>home</i>) est <code>/home/etudiant</code>, abrégé <code>~</code>.</p>
<ul>
<li>Chemin vers un fichier : <code>/home/alice/Images/photo.png</code> ; vers un répertoire : <code>/etc/apt/</code>.</li>
<li><b>Chemin absolu</b> : part de la racine, commence par <code>/</code> ; valable où que tu sois.</li>
<li><b>Chemin relatif</b> : part du <b>répertoire courant</b>.</li>
<li><code>.</code> = répertoire courant ; <code>..</code> = répertoire parent ; <code>~</code> = ton home.</li>
</ul>
<pre class="code"># Arborescence du TP (ex.7)
~
├── Cours
│   ├── SE
│   │   └── prise_de_notes.txt
│   └── BD
├── Perso
└── Test
    └── presentation.txt</pre>
<div class="grid2">
<div class="mini"><h4>Absolu</h4><p><code>cat /home/etudiant/Test/presentation.txt</code> fonctionne depuis n'importe où.</p></div>
<div class="mini"><h4>Relatif (depuis ~/Cours)</h4><p><code>cat ../Test/presentation.txt</code> : on remonte dans ~ puis on descend dans Test.</p></div>
</div>

<h3>3.3 Se repérer et se déplacer</h3>
<table class="tbl">
<tr><th>Commande</th><th>Effet</th></tr>
<tr><td><code>pwd</code></td><td>Affiche le répertoire courant (au lancement d'un terminal : ton home)</td></tr>
<tr><td><code>cd rep</code></td><td>Va dans rep (chemin absolu ou relatif)</td></tr>
<tr><td><code>cd</code> ou <code>cd ~</code></td><td>Retour au répertoire personnel (« si tu es perdu, tape cd »)</td></tr>
<tr><td><code>cd ..</code></td><td>Remonte d'un niveau (répertoire parent)</td></tr>
<tr><td><code>ls</code></td><td>Liste le répertoire courant (ou celui donné en argument)</td></tr>
<tr><td><code>ls -a</code></td><td>Affiche aussi les fichiers <b>cachés</b> (nom commençant par un point : .bashrc, .plan…)</td></tr>
<tr><td><code>ls -l</code> / <code>ls -lh</code></td><td>Format long (droits, propriétaire, taille, date) / tailles lisibles (K, M, G)</td></tr>
<tr><td><code>ls -R</code></td><td>Liste <b>récursivement</b> tous les sous-répertoires (pour vérifier une arborescence)</td></tr>
</table>

<h3>3.4 Manipuler fichiers et répertoires</h3>
<table class="tbl">
<tr><th>Commande</th><th>Effet</th></tr>
<tr><td><code>touch fic</code></td><td>Crée un fichier vide (ou met à jour sa date s'il existe)</td></tr>
<tr><td><code>mkdir rep</code></td><td>Crée un répertoire vide (erreur s'il existe déjà)</td></tr>
<tr><td><code>mv ancien nouveau</code></td><td>Déplace / renomme : après mv, seul le nouveau chemin existe</td></tr>
<tr><td><code>cp source dest</code></td><td>Copie un fichier : les deux chemins existent</td></tr>
<tr><td><code>cp -r rep dest</code></td><td>Copie un répertoire <b>récursivement</b> (sans -r, cp refuse les répertoires)</td></tr>
<tr><td><code>rm fic</code></td><td>Supprime un fichier</td></tr>
<tr><td><code>rm -i fic</code></td><td>Supprime en demandant <b>confirmation</b></td></tr>
<tr><td><code>rmdir rep</code></td><td>Supprime un répertoire <b>vide</b> (sinon « Directory not empty »)</td></tr>
<tr><td><code>rm -r rep</code></td><td>Supprime un répertoire et <b>tout</b> son contenu</td></tr>
</table>
<pre class="code">$ mv Test/presentation.txt ~/.plan     # TP ex.10 : le fichier devient caché
$ cp -r Cours Test                     # TP ex.11 : crée Test/Cours
$ rmdir Test
rmdir: failed to remove 'Test': Directory not empty
$ rm -r Test/Cours                     # TP ex.13</pre>
<div class="callout warn"><b>Danger</b> En ligne de commande il n'y a <b>pas de corbeille</b> : <code>rm</code> est définitif, et <code>mv</code> / <code>cp</code> écrasent sans prévenir un fichier destination existant. D'où l'intérêt de <code>rm -i</code> (TP ex.14).</div>

<h3>Les jokers (TP §7)</h3>
<p>Le shell remplace un motif par la liste des noms qui lui correspondent, <b>avant</b> d'exécuter la commande :</p>
<ul>
<li><code>*</code> : n'importe quelle suite de caractères (zéro, un ou plusieurs).</li>
<li><code>?</code> : exactement <b>un</b> caractère quelconque.</li>
</ul>
<pre class="code">$ ls /usr/bin/k???????     # noms de 8 caractères commençant par k (k + 7 ?)
$ ls /usr/lib/*.so         # fichiers d'extension .so (bibliothèques)</pre>
<div class="callout tip"><b>Astuce</b> <code>*</code> ne désigne pas les fichiers cachés. Et un même joker sert aussi dans <code>find -name "*.txt"</code>, à condition de le mettre entre guillemets.</div>
`
    },

    {
      id: 'c1-s-filtres',
      title: '3.5-3.7 Afficher, chercher, éditer et rediriger',
      src: 'Cours 1 §3.5-3.7 · TP1 ex.22-24',
      html: `
<h3>3.5 Afficher des fichiers</h3>
<table class="tbl">
<tr><th>Commande</th><th>Effet</th></tr>
<tr><td><code>cat fic</code></td><td>Affiche tout le contenu d'un coup</td></tr>
<tr><td><code>less fic</code></td><td>Affiche page par page (<kbd>Espace</kbd>, flèches, <kbd>/</kbd> pour chercher, <kbd>q</kbd> pour quitter)</td></tr>
<tr><td><code>head fic</code> / <code>tail fic</code></td><td>Les 10 premières / dernières lignes ; <code>-n 5</code> pour en choisir le nombre</td></tr>
<tr><td><code>wc -l fic</code></td><td>Compte les lignes (<code>wc</code> seul : lignes, mots, octets)</td></tr>
</table>

<h3>Chercher</h3>
<ul>
<li><code>grep motif fic</code> : affiche les lignes de fic qui contiennent motif. Options : <code>-i</code> ignore la casse, <code>-n</code> numéro de ligne, <code>-c</code> nombre de lignes trouvées, <code>-R</code> récursif dans un répertoire.</li>
<li><code>find rep -name motif</code> : cherche dans rep <b>et tous ses sous-répertoires</b> les fichiers dont le nom correspond au motif (jokers entre guillemets). <code>-type d</code> = répertoires seulement, <code>-type f</code> = fichiers ordinaires.</li>
</ul>
<pre class="code">$ grep ssh /etc/services
ssh             22/tcp                          # SSH Remote Login Protocol
$ grep -in ssh /etc/services       # insensible à la casse + numéros de ligne
$ find ~ -name "*.txt"             # tous mes fichiers .txt
$ find Cours -type d               # seulement les répertoires de Cours</pre>

<h3>3.6 Éditer des fichiers</h3>
<p>On utilise un éditeur de texte : <b>nano</b>, Vim (terminal) ou <b>gedit</b> (graphique). Tout se fait au clavier.</p>
<table class="tbl">
<tr><th>nano</th><th>Action</th></tr>
<tr><td><kbd>Ctrl</kbd>+<kbd>O</kbd></td><td>Écrire (enregistrer)</td></tr>
<tr><td><kbd>Ctrl</kbd>+<kbd>X</kbd></td><td>Quitter</td></tr>
<tr><td><kbd>Ctrl</kbd>+<kbd>W</kbd></td><td>Chercher un mot</td></tr>
</table>
<p>Les raccourcis sont rappelés en bas de l'écran (<code>^</code> signifie <kbd>Ctrl</kbd>).</p>

<h3>3.7 Rediriger et enchaîner</h3>
<table class="tbl">
<tr><th>Opérateur</th><th>Effet</th></tr>
<tr><td><code>cmd &gt; fic</code></td><td>Écrit la sortie dans fic en <b>écrasant</b> son contenu (le crée s'il n'existe pas)</td></tr>
<tr><td><code>cmd &gt;&gt; fic</code></td><td><b>Ajoute</b> la sortie à la fin de fic, sans effacer</td></tr>
<tr><td><code>cmd1 | cmd2</code></td><td><b>Tube</b> : la sortie de cmd1 devient l'entrée de cmd2 (pas de fichier intermédiaire)</td></tr>
<tr><td><code>cmd 2&gt;/dev/null</code></td><td>Envoie les <b>messages d'erreur</b> (sortie n°2) dans le « trou noir » /dev/null</td></tr>
<tr><td><code>$(cmd)</code></td><td>Insère le <b>résultat</b> de cmd dans une autre commande</td></tr>
</table>
<pre class="code">$ ls -l &gt; liste.txt           # écrit le résultat dans liste.txt
$ echo "fin" &gt;&gt; liste.txt     # ajoute une ligne à la fin
$ cat liste.txt | grep fin     # recherche « fin » dans le fichier

# TP ex.23
$ ls -l /etc &gt; ~/Test/liste_etc.txt
$ date &gt;&gt; ~/Test/liste_etc.txt ; tail -n 3 ~/Test/liste_etc.txt
$ ls /etc | wc -l                      # nombre d'éléments de /etc
$ grep tcp /etc/services | wc -l       # lignes contenant tcp

# TP ex.24 : masquer les « Permission denied »
$ find /etc -name "*.conf" 2&gt;/dev/null | wc -l</pre>
<div class="callout warn"><b>Piège</b> Refaire <code>date &gt; ~/Test/liste_etc.txt</code> (un seul <code>&gt;</code>) efface la liste : le fichier ne contient plus que la date. Et <code>ls -l /etc | wc -l</code> compte une ligne de trop : la ligne « total … » de ls -l.</div>
<div class="callout info"><b>Sorties</b> Une commande a une sortie standard (n°1, les résultats) et une sortie d'erreur (n°2, les messages d'erreur). <code>&gt;</code> redirige la n°1, <code>2&gt;</code> la n°2.</div>
<div class="callout tip"><b>Date</b> <code>date</code> affiche la date et l'heure ; <code>date +%F</code> la donne au format <code>AAAA-MM-JJ</code> (ex. 2026-10-05), idéal dans un nom de fichier : <code>cours_$(date +%F).tar.gz</code>.</div>
`
    },

    {
      id: 'c1-s-proc',
      title: 'Compiler, lancer et gérer les processus',
      src: 'TP1 §6, ex.5, ex.26',
      html: `
<h3>Compiler et exécuter un programme C (TP §6)</h3>
<p>Toujours <b>enregistrer</b> le code source avant de compiler. La compilation produit un fichier exécutable à partir du code source :</p>
<pre class="code">$ gcc exercice1.c -o exercice1     # -o : nom de l'exécutable produit
$ ls
exercice1  exercice1.c
$ ./exercice1                      # exécute le programme du répertoire courant</pre>
<ul>
<li>En cas d'erreur, gcc affiche un message avec le <b>numéro de ligne</b> fautif : corriger puis recompiler.</li>
<li>Sans <code>-o</code>, l'exécutable s'appelle <code>a.out</code>.</li>
<li>Le <code>./</code> est nécessaire : le répertoire courant n'est pas dans la liste des répertoires où le shell cherche les commandes (le PATH), sinon « command not found ».</li>
</ul>

<h3>Premier plan, arrière-plan (TP ex.5)</h3>
<div class="grid2">
<div class="mini"><h4>Premier plan</h4><p><code>gedit presentation.txt</code> : le terminal attend la fin de gedit. Une commande tapée (whoami) ne s'exécutera qu'à sa fermeture.</p></div>
<div class="mini"><h4>Arrière-plan : &amp;</h4><p><code>gedit presentation.txt &amp;</code> : le shell affiche <code>[1] 2345</code> (n° de tâche, PID) et rend la main immédiatement.</p></div>
</div>
<p><kbd>Ctrl</kbd>+<kbd>Z</kbd> <b>suspend</b> le programme au premier plan (état <i>Stopped</i>) : il n'est pas terminé, mais il est figé (la fenêtre de gedit ne répond plus) et le terminal redevient disponible. À ne pas confondre avec <kbd>Ctrl</kbd>+<kbd>C</kbd>, qui interrompt (termine) le programme.</p>

<h3>Contrôler les tâches (TP ex.26)</h3>
<table class="tbl">
<tr><th>Commande</th><th>Effet</th></tr>
<tr><td><code>jobs</code></td><td>Tâches lancées depuis <b>ce</b> terminal : [n°], état (Running / Stopped), + = tâche courante</td></tr>
<tr><td><code>fg %1</code></td><td>Ramène la tâche 1 au <b>premier plan</b></td></tr>
<tr><td><code>bg %1</code></td><td>Relance la tâche 1 (suspendue) en <b>arrière-plan</b></td></tr>
<tr><td><code>ps</code> / <code>ps aux</code></td><td>Processus du terminal / <b>tous</b> les processus du système, avec leur <b>PID</b></td></tr>
<tr><td><code>kill PID</code> / <code>kill %1</code></td><td>Demande l'arrêt d'un processus (signal SIGTERM) / de la tâche 1</td></tr>
<tr><td><code>top</code></td><td>Processus en temps réel, triés par consommation CPU ; <kbd>q</kbd> pour quitter</td></tr>
</table>
<pre class="code">$ sleep 300 &amp;
[1] 5012
$ sleep 300 &amp;
[2] 5013
$ jobs
[1]-  Running                 sleep 300 &amp;
[2]+  Running                 sleep 300 &amp;
$ fg %1          # sleep au premier plan : le terminal est bloqué
^Z               # Ctrl+Z
[1]+  Stopped                 sleep 300
$ bg %1          # il reprend, en arrière-plan
$ kill 5012 5013 ; jobs</pre>
<div class="callout warn"><b>Piège</b> <code>kill 1</code> vise le <b>PID</b> 1 (le premier processus du système) ; la tâche n°1, c'est <code>kill %1</code>. Et <code>kill -9 PID</code> (arrêt forcé, SIGKILL) ne s'utilise qu'en dernier recours.</div>
`
    },

    {
      id: 'c1-s-admin',
      title: 'Archives, paquets et espace disque',
      src: 'TP1 §9, ex.17, ex.25, ex.27, ex.28',
      html: `
<h3>Archiver avec tar (TP §9, ex.17)</h3>
<p><code>tar</code> (<i>tape archive</i>, autrefois pour les bandes magnétiques) regroupe plusieurs fichiers en un seul, par exemple pour l'envoyer par mail.</p>
<table class="tbl">
<tr><th>Lettre</th><th>Signification</th></tr>
<tr><td><code>c</code></td><td><b>c</b>reate : créer une archive</td></tr>
<tr><td><code>x</code></td><td>e<b>x</b>tract : extraire</td></tr>
<tr><td><code>t</code></td><td>lis<b>t</b> : lister le contenu sans extraire</td></tr>
<tr><td><code>v</code></td><td><b>v</b>erbose : afficher les fichiers traités</td></tr>
<tr><td><code>f</code></td><td><b>f</b>ile : le mot qui suit est le nom de l'archive (à mettre en dernier)</td></tr>
<tr><td><code>z</code></td><td>compression <b>gzip</b> (archive .tar.gz)</td></tr>
<tr><td><code>-C rep</code></td><td>se placer dans rep avant d'extraire</td></tr>
</table>
<pre class="code">$ tar -cvf test.tar fic1 fic2 fic3 fic4   # créer
$ tar -tf test.tar                        # lister sans extraire
$ tar -xvf test.tar                       # extraire dans le répertoire courant</pre>
<div class="callout info"><b>cat test.tar ?</b> On voit le texte des fichiers (Ceci, est, une, archive) mêlé aux en-têtes (noms, droits, propriétaire) : une archive .tar n'est <b>ni compressée ni chiffrée</b>, elle met les fichiers bout à bout.</div>

<h3>Installer des logiciels avec APT (TP ex.25)</h3>
<table class="tbl">
<tr><th>Commande</th><th>Effet</th></tr>
<tr><td><code>sudo apt update</code></td><td>Met à jour la <b>liste</b> des paquets disponibles (n'installe rien)</td></tr>
<tr><td><code>apt search tree</code></td><td>Cherche un paquet par mot-clé</td></tr>
<tr><td><code>apt show tree</code></td><td>Fiche du paquet : version, dépendances (Depends), description</td></tr>
<tr><td><code>sudo apt install tree</code></td><td>Installe le paquet et ses dépendances</td></tr>
<tr><td><code>dpkg -L tree</code></td><td>Liste les fichiers installés par le paquet (exécutable : <code>/usr/bin/tree</code>)</td></tr>
<tr><td><code>sudo apt remove tree</code></td><td>Désinstalle mais <b>garde</b> les fichiers de configuration</td></tr>
<tr><td><code>sudo apt purge tree</code></td><td>Désinstalle <b>et</b> supprime la configuration</td></tr>
</table>
<p><code>sudo</code> exécute une commande avec les droits <b>root</b> : indispensable pour modifier le système (update, install, remove, purge). Consulter (search, show, dpkg -L) n'en a pas besoin. Une fois installé, <code>tree</code> affiche la même arborescence que <code>ls -R</code>, mais sous forme d'arbre.</p>

<h3>Espace disque (TP ex.27)</h3>
<div class="grid2">
<div class="mini"><h4>df -h</h4><p><i>disk free</i> : taille, espace utilisé et <b>disponible</b> de chaque <b>partition</b>.</p></div>
<div class="mini"><h4>du -sh</h4><p><i>disk usage</i> : taille <b>occupée</b> par un fichier ou un répertoire (-s total, -h lisible).</p></div>
</div>
<pre class="code">$ du -sh ~                          # taille totale de mon home
$ du -sh ~/*                        # taille de chaque élément
$ du -sh ~/* | sort -h | tail -3    # les 3 plus volumineux</pre>
<div class="callout warn"><b>Piège</b> <code>sort -n</code> ne comprend pas les unités K, M, G (il classerait 2G avant 900K) : il faut <code>sort -h</code>. Tri croissant : les plus gros sont à la fin, d'où <code>tail</code>.</div>

<h3>Défi de synthèse : sauvegarder son travail (TP ex.28)</h3>
<pre class="code">$ mkdir ~/Sauvegardes
$ cd ~
$ tar -czf ~/Sauvegardes/cours_$(date +%F).tar.gz Cours
$ tar -tf ~/Sauvegardes/cours_2026-10-05.tar.gz        # lister sans extraire
$ du -sh Cours ~/Sauvegardes/cours_2026-10-05.tar.gz    # comparer les tailles
$ tar -xzf ~/Sauvegardes/cours_2026-10-05.tar.gz -C ~/Test
$ diff -r ~/Cours ~/Test/Cours                          # aucune sortie = identiques
$ alias sauvegarde='tar -czf ~/Sauvegardes/cours_$(date +%F).tar.gz -C ~ Cours'</pre>
<div class="callout key"><b>À retenir</b> Pour l'alias, des guillemets <b>simples</b> : <code>$(date +%F)</code> est alors évalué à chaque utilisation. Avec des guillemets doubles, la date serait calculée une seule fois, à la création de l'alias. On l'ajoute ensuite à <code>~/.bashrc</code> pour le garder.</div>
`
    },

    {
      id: 'c1-s-virt',
      title: '4.1-4.2 Virtualisation, VM et hyperviseurs',
      src: 'Cours 1 §4.1-4.2',
      html: `
<h3>Pourquoi la virtualisation ?</h3>
<p>Elle est partout : <b>datacenters</b> (milliers de serveurs mutualisés), <b>cloud</b> (AWS, Azure, Google Cloud : location de VM à la demande), <b>postes de travail</b> (tester un OS sans toucher au sien). Sans virtualisation, pas de cloud. Dans ce module : installer Linux dans une VM, puis administrer une <b>VM Debian sur Azure</b>, qui hébergera toute la chaîne web du semestre (SSH, serveur web + PHP, MySQL, phpMyAdmin).</p>

<h3>Le problème : une machine, un seul OS</h3>
<ul>
<li>Sans virtualisation : 1 serveur = 1 OS = souvent 1 seule application.</li>
<li>Les machines sont <b>sous-utilisées</b> (parfois moins de 15 % de leurs ressources) et coûtent en espace, électricité et climatisation.</li>
<li>Une entreprise avec 50 applications aurait besoin de 50 serveurs.</li>
</ul>

<h3>Définition</h3>
<p>La <b>virtualisation</b> est un ensemble de techniques permettant de faire fonctionner <b>plusieurs systèmes d'exploitation sur une même machine physique</b>, en partageant ses ressources. Elle simule le matériel pour chaque système, qui croit disposer de sa propre machine.</p>
<div class="grid2">
<div class="mini"><h4>Immeuble</h4><p>Le serveur physique</p></div>
<div class="mini"><h4>Appartements</h4><p>Les machines virtuelles, chacune indépendante (sa porte, ses pièces)</p></div>
<div class="mini"><h4>Fondations, eau, électricité</h4><p>Le matériel partagé : CPU, RAM, disque…</p></div>
<div class="mini"><h4>Syndic</h4><p>L'<b>hyperviseur</b>, qui organise le partage</p></div>
</div>

<h3>Historique</h3>
<div class="flow"><span>1960 : IBM, mainframes</span><span>1990 : VMware sur x86</span><span>2000 : adoption massive en datacenters</span><span>2010+ : omniprésente, conteneurs (Docker, Kubernetes)</span></div>

<h3>Les deux règles d'or</h3>
<div class="grid2">
<div class="mini"><h4>1. Cloisonnement</h4><p>Chaque système fonctionne indépendamment et n'interfère pas avec les autres.</p></div>
<div class="mini"><h4>2. Transparence</h4><p>La virtualisation ne change rien au fonctionnement du système hôte ni des systèmes invités.</p></div>
</div>

<h3>4.2 Hôte, invité et machine virtuelle</h3>
<ul>
<li>L'<b>OS hôte</b> héberge les autres systèmes (<b>OS invités</b>) et gère leurs demandes d'accès au matériel.</li>
<li>Une <b>machine virtuelle (VM)</b> est un logiciel qui simule un ordinateur complet : CPU, RAM, disque et réseau <b>virtuels</b>. Elle présente à l'OS invité le matériel qu'il attend, et traduit ses accès vers la machine réelle.</li>
<li>Administrer une VM : ajuster ses ressources, l'installer, la sauvegarder, la sécuriser, la déplacer d'une machine physique à une autre.</li>
</ul>

<h3>L'hyperviseur</h3>
<p>Logiciel de virtualisation qui permet à plusieurs OS de tourner en même temps sur une machine et qui <b>répartit les ressources</b> (CPU, RAM, disque, réseau) entre les VM.</p>
<div class="grid2">
<div class="mini"><h4>Type 1 : natif, « bare metal »</h4><p>Système allégé installé <b>directement sur le matériel</b>. OS invités non modifiés. Ex. : VMware ESXi, Microsoft Hyper-V, KVM.</p></div>
<div class="mini"><h4>Type 2 : hébergé</h4><p>Logiciel qui s'exécute <b>dans un OS hôte</b>. Les invités traversent <b>deux couches</b> (hyperviseur puis OS hôte). Ex. : VMware Workstation, Oracle VirtualBox, QEMU.</p></div>
</div>
<table class="tbl">
<tr><th>Critère</th><th>Type 1 (natif)</th><th>Type 2 (hébergé)</th></tr>
<tr><td>Emplacement</td><td>Directement sur le matériel</td><td>Au-dessus d'un OS</td></tr>
<tr><td>Performance</td><td>Très bonne (accès direct)</td><td>Un peu moins bonne (couche en plus)</td></tr>
<tr><td>Installation</td><td>Plus technique</td><td>Facile, comme un logiciel</td></tr>
<tr><td>Usage typique</td><td>Serveurs de production, datacenters</td><td>Poste de travail, tests, développement</td></tr>
</table>

<h3>Quelques produits du marché</h3>
<table class="tbl">
<tr><th>Année</th><th>Produit (société)</th><th>Type</th><th>Usage</th></tr>
<tr><td>1997</td><td>Virtual PC (Microsoft)</td><td>2</td><td>Desktop</td></tr>
<tr><td>1999</td><td>VMware Workstation</td><td>2</td><td>Desktop</td></tr>
<tr><td>2001</td><td>VMware ESXi</td><td>1</td><td>Serveur</td></tr>
<tr><td>2003</td><td>XenServer (Citrix)</td><td>1</td><td>Serveur</td></tr>
<tr><td>2007</td><td>VirtualBox (Oracle)</td><td>2</td><td>Desktop</td></tr>
<tr><td>2008</td><td>Hyper-V (Microsoft)</td><td>1</td><td>Serveur</td></tr>
<tr><td>2011</td><td>AHV (Nutanix)</td><td>1</td><td>Serveur (HCI)</td></tr>
<tr><td>2020</td><td>Firecracker (AWS)</td><td>1</td><td>Micro-VM (serverless)</td></tr>
</table>
`
    },

    {
      id: 'c1-s-virt2',
      title: '4.3-4.5 Méthodes, domaines, conteneurs et cloud',
      src: 'Cours 1 §4.3-4.5',
      html: `
<h3>4.3 Les 3 méthodes de virtualisation</h3>
<table class="tbl">
<tr><th>Méthode</th><th>Principe</th><th>Avantages</th><th>Inconvénients</th></tr>
<tr><td><b>Émulation</b></td><td>Le matériel est simulé pour chaque VM ; l'hôte partage ses ressources selon des règles ajustables</td><td>Facile à mettre en œuvre ; très bonne compatibilité</td><td>Performances plus faibles (matériel simulé)</td></tr>
<tr><td><b>Isolation</b></td><td>Un même OS découpé en environnements cloisonnés qui <b>partagent le même noyau</b> (ex. conteneurs)</td><td>Léger, performances proches du natif</td><td>Un seul noyau pour tous : cloisonnement parfois imparfait</td></tr>
<tr><td><b>Paravirtualisation</b></td><td>Hyperviseur très proche du matériel offrant une interface d'accès partagé</td><td>Des systèmes de familles différentes cohabitent, chacun avec ses ressources</td><td>Exige des <b>OS invités modifiés</b> : choix limité, maintenance complexe</td></tr>
</table>

<h3>4.4 Les 5 domaines d'application</h3>
<ul>
<li><b>Serveurs</b> (le plus concerné) : un serveur classique est mono-système. Virtualiser réduit les coûts et le nombre d'équipements, accélère la mise à disposition de serveurs, simplifie l'administration.</li>
<li><b>Stockage</b> : le disque d'une VM est un <b>fichier</b> sur l'hôte : <b>VHD</b> (Microsoft), <b>VDI</b> (Oracle), <b>VMDK</b> (VMware). Disque <b>statique</b> (taille fixée au départ) ou <b>dynamique</b> (le fichier grossit en se remplissant). Avantages : haute disponibilité, accès à distance, fiabilité, sécurité.</li>
<li><b>Réseaux</b> : partager une infrastructure physique entre plusieurs réseaux virtuels isolés. Ex. : le <b>VLAN</b>, qui regroupe des machines par port, adresse MAC ou sous-réseau. Moins de trafic inutile, plus de flexibilité et de sécurité.</li>
<li><b>Applications</b> : isoler une application de l'OS pour la rendre plus portable et compatible.</li>
<li><b>Postes de travail</b> : l'environnement de l'utilisateur tourne sur un serveur distant, accessible depuis un client léger, un PC ou une tablette. Charge répartie, moins de dépendance au matériel local, moins de risques de fuite de données.</li>
</ul>

<h3>4.5 Avantages</h3>
<p>Consolidation · flexibilité · réduction de la consommation · productivité · infrastructure optimisée · réduction du <b>RTO</b> (temps de reprise) · réduction du <b>TCO</b> (coût total) · facilité d'administration · administration centralisée.</p>

<h3>Inconvénients et limites</h3>
<ul>
<li><b>Dépendance à une seule machine</b> : une panne du serveur physique arrête <b>toutes</b> les VM.</li>
<li><b>Perte de performance</b> pour les applications gourmandes.</li>
<li><b>Surcharge</b> : l'hyperviseur consomme lui-même CPU, RAM et stockage.</li>
<li><b>Coûts</b> élevés (licences, infrastructure) et <b>gestion complexe</b> (compétences avancées).</li>
<li><b>Sécurité</b> : une faille dans l'hyperviseur peut toucher toutes les VM en même temps.</li>
</ul>

<h3>Pour aller plus loin : les conteneurs</h3>
<div class="grid2">
<div class="mini"><h4>Machine virtuelle</h4><p>Appli + <b>OS invité complet</b>, sur un hyperviseur. Démarre en plusieurs dizaines de secondes.</p></div>
<div class="mini"><h4>Conteneur (ex. Docker)</h4><p>Appli sur un moteur de conteneurs qui <b>partage le noyau de l'hôte</b>. Démarre en quelques secondes et consomme beaucoup moins.</p></div>
</div>

<h3>Virtualisation et cloud computing</h3>
<p>Le <b>cloud</b> consiste à <b>louer</b> des ressources informatiques à la demande plutôt qu'acheter son matériel. C'est la virtualisation qui le permet : un fournisseur héberge des milliers de VM pour des clients différents.</p>
<table class="tbl">
<tr><th>Modèle</th><th>Le fournisseur fournit…</th><th>Exemples</th></tr>
<tr><td><b>IaaS</b> (Infrastructure as a Service)</td><td>VM, stockage, réseau : on administre soi-même l'OS</td><td>AWS EC2, Azure VM — <b>notre VM Debian sur Azure</b></td></tr>
<tr><td><b>PaaS</b> (Platform as a Service)</td><td>En plus, l'environnement d'exécution (BDD, serveur web prêts)</td><td>—</td></tr>
<tr><td><b>SaaS</b> (Software as a Service)</td><td>L'application prête à l'emploi</td><td>Gmail, Office 365</td></tr>
</table>
`
    },

    {
      id: 'c1-s-memento',
      title: 'Mémento du chapitre 1',
      src: 'Cours 1 Mémento · TP1',
      html: `
<h3>Commandes essentielles</h3>
<table class="tbl">
<tr><th>Besoin</th><th>Commande</th></tr>
<tr><td>Manuel d'une commande</td><td><code>man cmd</code> (q pour quitter)</td></tr>
<tr><td>Qui suis-je / qui est connecté</td><td><code>whoami</code>, <code>who</code>, <code>w</code></td></tr>
<tr><td>Répertoire courant / se déplacer</td><td><code>pwd</code> / <code>cd rep</code>, <code>cd</code>, <code>cd ..</code></td></tr>
<tr><td>Lister</td><td><code>ls [-l] [-a] [-h] [-R]</code></td></tr>
<tr><td>Créer fichier / répertoire</td><td><code>touch fic</code> / <code>mkdir rep</code></td></tr>
<tr><td>Déplacer-renommer / copier</td><td><code>mv src dest</code> / <code>cp [-r] src dest</code></td></tr>
<tr><td>Supprimer</td><td><code>rm [-i] fic</code>, <code>rm -r rep</code>, <code>rmdir rep</code> (vide)</td></tr>
<tr><td>Afficher</td><td><code>cat</code>, <code>less</code>, <code>head</code>, <code>tail</code> (<code>-n N</code>)</td></tr>
<tr><td>Compter / filtrer</td><td><code>wc -l</code> / <code>grep [-i] [-n] [-R] motif fic</code></td></tr>
<tr><td>Chercher des fichiers</td><td><code>find rep -name "motif" [-type d|f] 2&gt;/dev/null</code></td></tr>
<tr><td>Éditer</td><td><code>nano fic</code> (Ctrl+O, Ctrl+X, Ctrl+W) / <code>gedit fic &amp;</code></td></tr>
<tr><td>Rediriger / enchaîner</td><td><code>cmd &gt; fic</code>, <code>cmd &gt;&gt; fic</code>, <code>cmd1 | cmd2</code>, <code>$(cmd)</code></td></tr>
<tr><td>Jokers / historique</td><td><code>*</code>, <code>?</code> / <code>history</code>, <code>!n</code></td></tr>
<tr><td>Raccourcis</td><td><code>alias nom='cmd'</code>, permanent dans <code>~/.bashrc</code></td></tr>
<tr><td>Compiler / exécuter</td><td><code>gcc prog.c -o prog</code> / <code>./prog</code></td></tr>
<tr><td>Tâches et processus</td><td><code>cmd &amp;</code>, Ctrl+Z, <code>jobs</code>, <code>fg</code>, <code>bg</code>, <code>ps aux</code>, <code>kill PID</code>, <code>top</code></td></tr>
<tr><td>Archives</td><td><code>tar -cvf</code>, <code>-tf</code>, <code>-xvf</code>, <code>-czf</code>, <code>-C rep</code></td></tr>
<tr><td>Paquets</td><td><code>sudo apt update</code>, <code>apt search/show</code>, <code>sudo apt install/remove/purge</code>, <code>dpkg -L</code></td></tr>
<tr><td>Espace disque</td><td><code>df -h</code>, <code>du -sh</code>, <code>sort -h</code></td></tr>
<tr><td>Comparer</td><td><code>diff fic1 fic2</code>, <code>diff -r rep1 rep2</code></td></tr>
<tr><td>Droits et utilisateurs (détaillés au chapitre 2)</td><td><code>chown user fic</code>, <code>chmod 744 fic</code>, <code>su user</code>, <code>sudo cmd</code></td></tr>
</table>

<h3>Notions clés</h3>
<ul>
<li>OS = noyau + shell + système de fichiers ; le noyau gère le matériel et offre les appels système.</li>
<li>Unix : 1969, Bell Labs. Linux : 1991, Linus Torvalds, licence GPL. Ubuntu et Debian : famille Debian ; Fedora : famille Red Hat.</li>
<li>Virtualisation : plusieurs OS sur une machine physique ; règles d'or : cloisonnement et transparence.</li>
<li>Hyperviseur type 1 (sur le matériel : ESXi, Hyper-V, KVM) / type 2 (sur un OS hôte : VirtualBox, VMware Workstation, QEMU).</li>
<li>Méthodes : émulation, isolation (conteneurs), paravirtualisation (OS modifiés).</li>
<li>Conteneur = noyau de l'hôte partagé ; VM = OS invité complet. Cloud : IaaS / PaaS / SaaS (notre VM Azure = IaaS).</li>
</ul>
`
    }
  ],

  /* =====================================================================
   *  COMMANDES (référence + flashcards)
   * ===================================================================== */
  commands: [
    { id: 'c1-cmd-man', cmd: 'man',
      syntax: 'man commande',
      desc: "Affiche le manuel complet d'une commande : description, toutes les options, exemples.",
      details: "Flèches ou PgUp/PgDn pour défiler, / pour rechercher un mot, q pour quitter. Le réflexe à avoir avant d'utiliser une option inconnue.",
      example: 'man who',
      src: 'Cours 1 §3.7 · TP1 ex.4' },

    { id: 'c1-cmd-who', cmd: 'whoami / who / w',
      syntax: 'whoami  |  who  |  w',
      desc: "whoami affiche ton identifiant ; who liste les utilisateurs connectés ; w (what) indique en plus ce que fait chacun.",
      details: "w affiche aussi l'heure, la durée depuis le démarrage (uptime), la charge de la machine et la commande en cours de chaque session (colonne WHAT).",
      example: 'whoami        # affiche : etudiant',
      src: 'TP1 ex.3' },

    { id: 'c1-cmd-pwd', cmd: 'pwd',
      syntax: 'pwd',
      desc: "Affiche le chemin absolu du répertoire courant (print working directory).",
      details: "À l'ouverture d'un terminal, le répertoire courant est toujours ton répertoire personnel.",
      example: 'pwd        # /home/etudiant',
      src: 'Cours 1 §3.3 · TP1 §5' },

    { id: 'c1-cmd-cd', cmd: 'cd',
      syntax: 'cd [répertoire]',
      desc: "Change le répertoire courant (change directory).",
      details: "`cd` seul ou `cd ~` : retour au répertoire personnel. `cd ..` : remonte au répertoire parent (espace obligatoire). Accepte un chemin absolu (`cd /etc/apt`) ou relatif (`cd Cours/SE`).",
      example: 'cd ../Test',
      src: 'Cours 1 §3.3 · TP1 §5, ex.6' },

    { id: 'c1-cmd-ls', cmd: 'ls / ls -l / ls -h',
      syntax: 'ls [-l] [-h] [répertoire]',
      desc: "Liste le contenu d'un répertoire (le répertoire courant par défaut).",
      details: "-l : format long (type et droits, liens, propriétaire, groupe, taille, date, nom). -h : tailles lisibles (K, M, G), à combiner avec -l. Les options se regroupent : `ls -lh` = `ls -l -h`.",
      example: 'ls -lh /etc',
      src: 'Cours 1 §3.2-3.3' },

    { id: 'c1-cmd-ls-a', cmd: 'ls -a',
      syntax: 'ls -a [répertoire]',
      desc: "Affiche aussi les fichiers et répertoires cachés (dont le nom commence par un point).",
      details: "-a = --all. Fait apparaître . (répertoire courant), .. (parent), .bashrc, .plan… `ls -la` combine format long et fichiers cachés.",
      example: 'ls -a ~',
      src: 'Cours 1 §3.3 · TP1 ex.8' },

    { id: 'c1-cmd-ls-R', cmd: 'ls -R / tree',
      syntax: 'ls -R [répertoire]  |  tree [répertoire]',
      desc: "Affiche toute une arborescence : ls -R liste récursivement chaque sous-répertoire, tree la dessine sous forme d'arbre.",
      details: "R majuscule = récursif (ls -r minuscule ne fait qu'inverser l'ordre de tri). tree n'est pas installé par défaut : `sudo apt install tree`.",
      example: 'ls -R ~',
      src: 'TP1 ex.7, ex.25' },

    { id: 'c1-cmd-mkdir', cmd: 'mkdir',
      syntax: 'mkdir répertoire...',
      desc: "Crée un ou plusieurs répertoires vides (make directory).",
      details: "Erreur « File exists » si le nom existe déjà. Le répertoire parent doit exister ; l'option -p crée aussi les parents manquants (`mkdir -p Cours/SE`).",
      example: 'mkdir Cours Perso Test',
      src: 'Cours 1 §3.4 · TP1 ex.7' },

    { id: 'c1-cmd-touch', cmd: 'touch',
      syntax: 'touch fichier...',
      desc: "Crée un fichier vide, ou met à jour la date de modification s'il existe déjà.",
      details: "Ne modifie jamais le contenu d'un fichier existant.",
      example: 'touch Cours/SE/prise_de_notes.txt',
      src: 'Cours 1 §3.4' },

    { id: 'c1-cmd-mv', cmd: 'mv',
      syntax: 'mv source destination',
      desc: "Déplace ou renomme un fichier ou un répertoire : après mv, seul le nouveau chemin existe.",
      details: "Si la destination est un répertoire existant, la source y est déplacée avec son nom. Écrase sans prévenir un fichier destination existant (`mv -i` demande confirmation). Pas besoin de -r pour un répertoire.",
      example: 'mv Test/presentation.txt ~/.plan',
      src: 'Cours 1 §3.4 · TP1 ex.10' },

    { id: 'c1-cmd-cp', cmd: 'cp',
      syntax: 'cp source destination',
      desc: "Copie un fichier : après cp, l'original et la copie existent tous les deux.",
      details: "Sans option, cp refuse de copier un répertoire (« -r not specified; omitting directory »). Écrase sans prévenir un fichier destination existant (`cp -i` demande confirmation).",
      example: 'cp .plan Perso/',
      src: 'Cours 1 §3.4 · TP1 §5' },

    { id: 'c1-cmd-cp-r', cmd: 'cp -r',
      syntax: 'cp -r répertoire destination',
      desc: "Copie récursivement un répertoire avec tous ses sous-répertoires et fichiers.",
      details: "-r (ou -R) = récursif. Si la destination existe déjà, la copie est créée DEDANS : `cp -r Cours Test` crée Test/Cours.",
      example: 'cp -r Cours Test',
      src: 'Cours 1 §3.4 · TP1 ex.11' },

    { id: 'c1-cmd-rm', cmd: 'rm',
      syntax: 'rm fichier...',
      desc: "Supprime un ou plusieurs fichiers.",
      details: "Suppression définitive : pas de corbeille en ligne de commande. Sans -r, rm refuse de supprimer un répertoire (« Is a directory »).",
      example: 'rm fic1 fic2',
      src: 'Cours 1 §3.4 · TP1 §5' },

    { id: 'c1-cmd-rm-i', cmd: 'rm -i',
      syntax: 'rm -i fichier...',
      desc: "Supprime en demandant une confirmation pour chaque fichier (interactive).",
      details: "Répondre y pour confirmer. Pour l'avoir systématiquement : `alias rm='rm -i'` dans ~/.bashrc.",
      example: 'rm -i fic2',
      src: 'TP1 ex.14, ex.19' },

    { id: 'c1-cmd-rm-r', cmd: 'rm -r',
      syntax: 'rm -r répertoire',
      desc: "Supprime récursivement un répertoire et TOUT son contenu.",
      details: "-r (ou -R) descend dans les sous-répertoires. Avec -f (`rm -rf`), plus aucune question ni message d'erreur : à manier avec une extrême prudence.",
      example: 'rm -r Test/Cours',
      src: 'Cours 1 §3.4 · TP1 ex.13' },

    { id: 'c1-cmd-rmdir', cmd: 'rmdir',
      syntax: 'rmdir répertoire',
      desc: "Supprime un répertoire VIDE.",
      details: "Sur un répertoire non vide : erreur « Directory not empty ». Il faut d'abord le vider, ou utiliser rm -r.",
      example: 'rmdir Perso',
      src: 'TP1 ex.12' },

    { id: 'c1-cmd-jokers', cmd: '* et ? (jokers)',
      syntax: 'cmd debut*   |   cmd fic?',
      desc: "Jokers du shell pour désigner plusieurs fichiers : * = n'importe quelle suite de caractères (même vide), ? = exactement un caractère.",
      details: "Le shell remplace le motif par la liste des noms correspondants avant d'exécuter la commande. * ne désigne pas les fichiers cachés. k??????? = 8 caractères commençant par k.",
      example: 'ls /usr/bin/k???????',
      src: 'TP1 §7, ex.15' },

    { id: 'c1-cmd-cat', cmd: 'cat',
      syntax: 'cat fichier...',
      desc: "Affiche d'un coup tout le contenu d'un ou plusieurs fichiers.",
      details: "Idéal pour les fichiers courts ; pour un long fichier, préférer less. Avec plusieurs fichiers, il les met bout à bout (concatenate).",
      example: 'cat /home/etudiant/Test/presentation.txt',
      src: 'Cours 1 §3.5 · TP1 ex.9' },

    { id: 'c1-cmd-less', cmd: 'less',
      syntax: 'less fichier',
      desc: "Affiche un fichier page par page, en lecture seule.",
      details: "Espace ou flèches pour défiler, /mot pour chercher, q pour quitter. C'est aussi le visualiseur utilisé par man.",
      example: 'less /etc/services',
      src: 'Cours 1 §3.5 · TP1 §4' },

    { id: 'c1-cmd-headtail', cmd: 'head / tail',
      syntax: 'head [-n N] fichier  |  tail [-n N] fichier',
      desc: "head affiche les premières lignes d'un fichier, tail les dernières (10 par défaut).",
      details: "-n N choisit le nombre de lignes (`head -n 5` = `head -5`). Très utilisés en fin de tube : `... | tail -3`.",
      example: 'tail -n 5 /etc/services',
      src: 'Cours 1 §3.5 · TP1 ex.22' },

    { id: 'c1-cmd-wc', cmd: 'wc -l',
      syntax: 'wc -l fichier  |  cmd | wc -l',
      desc: "Compte les lignes d'un fichier, ou de ce qui arrive par un tube.",
      details: "wc seul affiche lignes, mots et octets ; -l lignes, -w mots, -c octets. `ls /etc | wc -l` compte les éléments de /etc.",
      example: 'wc -l /etc/services',
      src: 'TP1 ex.22-23' },

    { id: 'c1-cmd-grep', cmd: 'grep',
      syntax: 'grep [-i] [-n] [-c] [-R] motif fichier',
      desc: "Affiche les lignes d'un fichier qui contiennent un motif.",
      details: "Sensible à la casse par défaut. -i : ignore majuscules/minuscules ; -n : numéro de chaque ligne ; -c : nombre de lignes trouvées ; -R : recherche récursive dans un répertoire.",
      example: 'grep -in ssh /etc/services',
      src: 'Cours 1 §3.5 · TP1 ex.22' },

    { id: 'c1-cmd-find', cmd: 'find',
      syntax: 'find répertoire [-name "motif"] [-type d|f]',
      desc: "Recherche des fichiers dans un répertoire et dans tous ses sous-répertoires.",
      details: "-name \"*.txt\" : nom correspondant au motif (jokers entre guillemets pour que le shell ne les remplace pas). -type d : répertoires seulement ; -type f : fichiers ordinaires. Ajouter 2>/dev/null pour masquer les « Permission denied ».",
      example: 'find ~ -name "*.txt"',
      src: 'Cours 1 §3.5 · TP1 ex.24' },

    { id: 'c1-cmd-nano', cmd: 'nano',
      syntax: 'nano fichier',
      desc: "Éditeur de texte dans le terminal (crée le fichier s'il n'existe pas).",
      details: "Ctrl+O : enregistrer ; Ctrl+X : quitter ; Ctrl+W : chercher. Raccourcis rappelés en bas de l'écran (^ = Ctrl). Équivalent graphique : `gedit fichier &`.",
      example: 'nano fic1',
      src: 'Cours 1 §3.6 · TP1 ex.17' },

    { id: 'c1-cmd-redir', cmd: '>',
      syntax: 'commande > fichier',
      desc: "Écrit la sortie d'une commande dans un fichier, en ÉCRASANT son contenu.",
      details: "Crée le fichier s'il n'existe pas. Piège : le fichier est vidé avant l'écriture, l'ancien contenu est perdu.",
      example: 'ls -l /etc > ~/Test/liste_etc.txt',
      src: 'Cours 1 §3.7 · TP1 ex.23' },

    { id: 'c1-cmd-append', cmd: '>>',
      syntax: 'commande >> fichier',
      desc: "Ajoute la sortie d'une commande à la FIN d'un fichier, sans effacer son contenu.",
      details: "Crée le fichier s'il n'existe pas. C'est la bonne façon d'ajouter une ligne à ~/.bashrc (un seul > l'écraserait).",
      example: 'date >> ~/Test/liste_etc.txt',
      src: 'Cours 1 §3.7 · TP1 ex.23' },

    { id: 'c1-cmd-pipe', cmd: '| (tube)',
      syntax: 'commande1 | commande2',
      desc: "Envoie la sortie de commande1 directement en entrée de commande2, sans fichier intermédiaire.",
      details: "Au cœur de la philosophie Unix : de petites commandes combinées. On peut enchaîner plusieurs tubes : `du -sh ~/* | sort -h | tail -3`.",
      example: 'grep tcp /etc/services | wc -l',
      src: 'Cours 1 §2.2, 3.7 · TP1 ex.23' },

    { id: 'c1-cmd-devnull', cmd: '2>/dev/null',
      syntax: 'commande 2>/dev/null',
      desc: "Masque les messages d'erreur d'une commande en les envoyant dans /dev/null (le « trou noir »).",
      details: "2 = sortie d'erreur ; la sortie standard (n°1, les résultats) reste affichée. À l'inverse, `> /dev/null` masquerait les résultats.",
      example: 'find /etc -name "*.conf" 2>/dev/null',
      src: 'TP1 ex.24' },

    { id: 'c1-cmd-subst', cmd: '$(commande) / date +%F',
      syntax: 'commande ... $(autre_commande) ...',
      desc: "Substitution de commande : insère le résultat d'une commande dans une autre ligne de commande.",
      details: "`date` affiche la date et l'heure ; `date +%F` la date au format AAAA-MM-JJ. Ainsi `cours_$(date +%F).tar.gz` devient par exemple cours_2026-10-05.tar.gz.",
      example: 'tar -czf ~/Sauvegardes/cours_$(date +%F).tar.gz Cours',
      src: 'TP1 ex.23, ex.28' },

    { id: 'c1-cmd-history', cmd: 'history / !n',
      syntax: 'history   puis   !n',
      desc: "history liste les dernières commandes, numérotées ; !n relance la commande numéro n.",
      details: "Les flèches haut/bas parcourent l'historique ; gauche/droite permettent de corriger une ligne avant de la relancer. `!!` relance la dernière commande.",
      example: '!42',
      src: 'TP1 §8, ex.16' },

    { id: 'c1-cmd-alias', cmd: 'alias',
      syntax: "alias nom='commande complète'",
      desc: "Crée un raccourci (une commande personnelle), valable dans le terminal courant.",
      details: "Pas d'espace autour du = ; guillemets obligatoires si la commande contient des espaces. `alias` seul liste les alias, `unalias nom` en supprime un. Pour le garder : l'écrire dans ~/.bashrc.",
      example: "alias la='ls -a'",
      src: 'TP1 §10, ex.18-21' },

    { id: 'c1-cmd-gcc', cmd: 'gcc -o',
      syntax: 'gcc source.c -o executable',
      desc: "Compile un programme C et produit un fichier exécutable.",
      details: "En cas d'erreur, gcc indique le numéro de ligne. Sans -o, l'exécutable s'appelle a.out. On le lance avec `./executable` : le ./ est obligatoire car le répertoire courant n'est pas dans le PATH.",
      example: 'gcc exercice1.c -o exercice1',
      src: 'TP1 §6' },

    { id: 'c1-cmd-amp', cmd: '& (arrière-plan)',
      syntax: 'commande &',
      desc: "Lance une commande en arrière-plan : le terminal reste disponible.",
      details: "Le shell affiche le numéro de tâche et le PID, par exemple [1] 2345. Sans &, une application graphique comme gedit bloque le terminal jusqu'à sa fermeture.",
      example: 'gedit presentation.txt &',
      src: 'TP1 ex.5, ex.26' },

    { id: 'c1-cmd-ctrlz', cmd: 'Ctrl+Z',
      syntax: 'Ctrl+Z  (pendant qu\'un programme tourne au premier plan)',
      desc: "Suspend le programme au premier plan et rend la main au terminal.",
      details: "Le programme n'est pas terminé mais « Stopped » : une fenêtre gedit suspendue ne répond plus. On le reprend avec fg (premier plan) ou bg (arrière-plan). Ne pas confondre avec Ctrl+C, qui interrompt le programme.",
      example: 'gedit presentation.txt  puis Ctrl+Z  ->  [1]+  Stopped',
      src: 'TP1 ex.5, ex.26' },

    { id: 'c1-cmd-fgbg', cmd: 'jobs / fg / bg',
      syntax: 'jobs  |  fg [%n]  |  bg [%n]',
      desc: "jobs liste les tâches du terminal courant ; fg ramène une tâche au premier plan ; bg relance en arrière-plan une tâche suspendue.",
      details: "jobs affiche [n°], l'état (Running ou Stopped) et + pour la tâche courante, celle que visent fg et bg sans argument. %1 désigne la tâche [1]. `jobs -l` affiche aussi les PID.",
      example: 'fg %1',
      src: 'TP1 ex.26' },

    { id: 'c1-cmd-ps', cmd: 'ps / ps aux',
      syntax: 'ps  |  ps aux',
      desc: "ps liste les processus du terminal courant ; ps aux liste tous les processus du système.",
      details: "Colonnes de ps aux : USER, PID, %CPU, %MEM… COMMAND. a = processus de tous les utilisateurs, u = format détaillé, x = aussi ceux sans terminal. Le PID sert ensuite à kill.",
      example: 'ps aux | grep sleep',
      src: 'TP1 ex.26' },

    { id: 'c1-cmd-kill', cmd: 'kill',
      syntax: 'kill PID  |  kill %n',
      desc: "Demande l'arrêt d'un processus en lui envoyant un signal (SIGTERM par défaut).",
      details: "`kill 4321` vise le PID 4321 ; `kill %1` vise la tâche [1] du terminal. Si le processus résiste : `kill -9 PID` (SIGKILL, arrêt forcé), en dernier recours.",
      example: 'kill 4321',
      src: 'TP1 ex.26' },

    { id: 'c1-cmd-top', cmd: 'top',
      syntax: 'top',
      desc: "Affiche en temps réel les processus qui consomment le plus de ressources (CPU, mémoire).",
      details: "Trié par %CPU par défaut ; l'en-tête résume la charge, la mémoire et le nombre de tâches. q pour quitter.",
      example: 'top',
      src: 'TP1 ex.26' },

    { id: 'c1-cmd-tar-c', cmd: 'tar -cvf',
      syntax: 'tar -cvf archive.tar fichiers...',
      desc: "Crée une archive qui regroupe plusieurs fichiers ou répertoires en un seul fichier.",
      details: "c = create, v = verbose (liste les fichiers traités), f = file : le mot qui suit f est le NOM DE L'ARCHIVE. Une archive .tar n'est pas compressée.",
      example: 'tar -cvf test.tar fic1 fic2 fic3 fic4',
      src: 'TP1 §9, ex.17' },

    { id: 'c1-cmd-tar-t', cmd: 'tar -tf',
      syntax: 'tar -tf archive.tar',
      desc: "Liste le contenu d'une archive sans l'extraire.",
      details: "t = list. Ajouter v (`tar -tvf`) pour le détail : droits, propriétaire, taille, date. Fonctionne aussi sur une archive .tar.gz.",
      example: 'tar -tf test.tar',
      src: 'TP1 ex.17, ex.28' },

    { id: 'c1-cmd-tar-x', cmd: 'tar -xvf / -C',
      syntax: 'tar -xvf archive.tar [-C répertoire]',
      desc: "Extrait le contenu d'une archive dans le répertoire courant, ou dans celui indiqué par -C.",
      details: "x = extract. -C rep : se placer dans rep avant d'extraire (rep doit exister). Pour une archive .tar.gz : `tar -xzf` (GNU tar reconnaît aussi seul la compression).",
      example: 'tar -xzf ~/Sauvegardes/cours_2026-10-05.tar.gz -C ~/Test',
      src: 'TP1 §9, ex.28' },

    { id: 'c1-cmd-tar-z', cmd: 'tar -czf',
      syntax: 'tar -czf archive.tar.gz fichiers...',
      desc: "Crée une archive compressée avec gzip (extension .tar.gz).",
      details: "z = gzip. Garder f en dernière lettre, juste avant le nom de l'archive. L'archive compressée est bien plus petite que le répertoire d'origine.",
      example: 'tar -czf cours.tar.gz Cours',
      src: 'TP1 ex.28' },

    { id: 'c1-cmd-apt-update', cmd: 'sudo apt update',
      syntax: 'sudo apt update',
      desc: "Met à jour la liste des paquets disponibles dans les dépôts (n'installe rien).",
      details: "sudo exécute la commande avec les droits root : obligatoire pour modifier le système (update, install, remove, purge). Ne pas confondre avec `apt upgrade`, qui installe les mises à jour.",
      example: 'sudo apt update',
      src: 'TP1 ex.25' },

    { id: 'c1-cmd-apt-show', cmd: 'apt search / apt show',
      syntax: 'apt search mot  |  apt show paquet',
      desc: "apt search cherche des paquets par mot-clé ; apt show affiche la fiche d'un paquet (version, dépendances, description).",
      details: "Simple consultation : pas besoin de sudo. Le champ Depends liste les paquets dont il dépend.",
      example: 'apt show tree',
      src: 'TP1 ex.25' },

    { id: 'c1-cmd-apt-install', cmd: 'sudo apt install',
      syntax: 'sudo apt install paquet...',
      desc: "Télécharge et installe un paquet avec ses dépendances.",
      details: "Faire `sudo apt update` avant, pour partir d'une liste à jour. Plusieurs paquets possibles en une commande.",
      example: 'sudo apt install tree',
      src: 'TP1 ex.25' },

    { id: 'c1-cmd-apt-purge', cmd: 'apt remove / apt purge',
      syntax: 'sudo apt remove paquet  |  sudo apt purge paquet',
      desc: "Désinstallent un paquet : remove garde ses fichiers de configuration, purge les supprime aussi.",
      details: "purge = désinstallation complète (configuration système comprise). Les fichiers de ton répertoire personnel ne sont jamais touchés.",
      example: 'sudo apt purge tree',
      src: 'TP1 ex.25' },

    { id: 'c1-cmd-dpkg', cmd: 'dpkg -L',
      syntax: 'dpkg -L paquet',
      desc: "Liste tous les fichiers installés par un paquet.",
      details: "Permet de trouver l'exécutable (pour tree : /usr/bin/tree), la documentation, la page de manuel… L majuscule : `dpkg -l` (minuscule) liste les paquets installés.",
      example: 'dpkg -L tree',
      src: 'TP1 ex.25' },

    { id: 'c1-cmd-df', cmd: 'df -h',
      syntax: 'df -h [chemin]',
      desc: "Affiche l'espace disque de chaque partition : taille, utilisé, disponible.",
      details: "df = disk free, -h = tailles lisibles. `df -h ~` montre uniquement la partition qui contient ton home.",
      example: 'df -h',
      src: 'TP1 ex.27' },

    { id: 'c1-cmd-du', cmd: 'du -sh / sort -h',
      syntax: 'du -sh chemin...  |  ... | sort -h',
      desc: "du -sh affiche la taille occupée par un fichier ou un répertoire ; sort -h trie des tailles lisibles (K, M, G).",
      details: "du = disk usage ; -s = total seulement, -h = lisible. sort -n ignore les suffixes K/M/G : il faut sort -h (-r pour l'ordre décroissant). ~/* n'inclut pas les fichiers cachés.",
      example: 'du -sh ~/* | sort -h | tail -3',
      src: 'TP1 ex.27' },

    { id: 'c1-cmd-diff', cmd: 'diff / diff -r',
      syntax: 'diff fichier1 fichier2  |  diff -r rep1 rep2',
      desc: "Compare deux fichiers ligne à ligne ; avec -r, compare récursivement deux arborescences.",
      details: "Aucune sortie = identiques. Sinon diff affiche les lignes différentes (< pour le 1er, > pour le 2e) ou « Only in … » pour un fichier présent d'un seul côté.",
      example: 'diff -r ~/Cours ~/Test/Cours',
      src: 'Cours 1 Mémento · TP1 ex.28' }
  ],

  /* =====================================================================
   *  FLASHCARDS (notions)
   * ===================================================================== */
  flashcards: [
    { id: 'c1-f-os', front: "Système d'exploitation (OS) : rôle principal et 4 rôles",
      back: "Fait le lien entre le matériel, l'utilisateur et les applications. Rôle principal : gérer les ressources matérielles (allocation et partage entre les applications). 4 rôles : exécution des applications, gestion des droits, gestion des fichiers, gestion des informations." },
    { id: 'c1-f-driver', front: 'Pilote (driver)',
      back: "Programme qui permet à l'OS de communiquer avec un périphérique précis. Les applications s'adressent à l'OS, qui passe par le pilote : elles n'ont pas à connaître chaque matériel." },
    { id: 'c1-f-kernel', front: 'Noyau (kernel)',
      back: "Cœur de l'OS : gère directement le matériel (CPU, mémoire, périphériques) et offre aux programmes une interface d'appels système. Au sens strict, Linux est un noyau." },
    { id: 'c1-f-shell', front: 'Shell et terminal',
      back: "Le shell (interpréteur de commandes, bash sous Debian/Ubuntu) attend une commande après l'invite $, l'interprète et demande au noyau de l'exécuter. Le terminal est la fenêtre dans laquelle il tourne." },
    { id: 'c1-f-syscall', front: 'Appel système (exemple de read())',
      back: "Demande d'un programme au noyau (créer un processus, lire un fichier…). Un programme C appelle la procédure de bibliothèque standard read(), qui déclenche l'appel système READ, exécuté en mode noyau : le système est ainsi protégé des erreurs et intrusions." },
    { id: 'c1-f-types', front: 'Multitâche, multi-utilisateur, temps réel',
      back: "Multitâche : plusieurs processus en même temps (ordonnancement du CPU). Multi-utilisateur : plusieurs comptes en même temps (Unix/Linux ; MS-DOS était mono-utilisateur). Temps réel : exécution garantie dans un délai déterminé (FreeRTOS, VxWorks)." },
    { id: 'c1-f-uid', front: 'UID, GID et root',
      back: "UID : numéro unique d'un utilisateur ; GID : numéro unique d'un groupe ; ils servent à définir les droits d'accès aux fichiers. root (superutilisateur, UID 0) accède à tous les fichiers et aux appels système réservés." },
    { id: 'c1-f-unixlinux', front: 'Unix vs Linux',
      back: "Unix : 1969, Bell Labs (Thompson et Ritchie), réécrit en C en 1973 ; souvent propriétaire et payant. Linux : 1991, Linus Torvalds, inspiré d'Unix, licence GPL (libre), développé par une communauté, gratuit." },
    { id: 'c1-f-philo', front: 'Philosophie Unix des petites commandes',
      back: "Des utilitaires qui font chacun une seule tâche précise, combinés par des tubes (|) pour créer des traitements puissants. Ex. : find ~ -name \"*.pdf\" | wc -l compte tous ses PDF." },
    { id: 'c1-f-distrib', front: 'Familles de distributions Linux',
      back: "Debian : Debian, Ubuntu, Linux Mint, Kali, Raspberry Pi OS. Red Hat : RHEL, Fedora, CentOS Stream. SUSE : openSUSE, SUSE Linux Enterprise. Arch : Arch Linux, Manjaro. Plus Gentoo, Slackware…" },
    { id: 'c1-f-chemins', front: 'Chemin absolu / chemin relatif',
      back: "Absolu : part de la racine / (ex. /home/etudiant/Test/presentation.txt), valable de partout. Relatif : part du répertoire courant (ex. depuis ~/Cours : ../Test/presentation.txt). . = courant, .. = parent, ~ = home." },
    { id: 'c1-f-caches', front: 'Fichier caché',
      back: "Fichier ou répertoire dont le nom commence par un point (.bashrc, .plan). ls ne l'affiche pas, il faut ls -a ; le joker * ne le désigne pas non plus." },
    { id: 'c1-f-bashrc', front: '~/.bashrc',
      back: "Fichier de configuration de bash, lu à l'ouverture de chaque terminal : on y écrit ses alias pour les rendre permanents (/etc/bash.bashrc pour tout le système). Effet dans les nouveaux terminaux seulement (ou après source ~/.bashrc)." },
    { id: 'c1-f-exit', front: 'Se déconnecter proprement',
      back: "Quitter les applications (Ctrl+Q dans gedit), fermer le terminal avec exit ou Ctrl+D, puis éteindre depuis le menu. Linux doit toujours être arrêté proprement, jamais en coupant l'alimentation." },
    { id: 'c1-f-virt', front: "Virtualisation et ses 2 règles d'or",
      back: "Faire fonctionner plusieurs OS sur une même machine physique en partageant ses ressources ; chaque OS croit avoir sa propre machine. Règles d'or : cloisonnement (aucune interférence entre systèmes) et transparence (rien ne change pour l'hôte ni pour les invités)." },
    { id: 'c1-f-vm', front: 'OS hôte, OS invité, machine virtuelle',
      back: "L'OS hôte héberge les OS invités et gère leurs accès au matériel. Une VM est un logiciel qui simule un ordinateur complet (CPU, RAM, disque, réseau virtuels) et traduit les accès matériels de l'invité vers la machine réelle." },
    { id: 'c1-f-hyperviseurs', front: 'Hyperviseur de type 1 vs type 2',
      back: "Type 1 (natif, bare metal) : installé directement sur le matériel, très performant, pour les serveurs (VMware ESXi, Hyper-V, KVM). Type 2 (hébergé) : logiciel dans un OS hôte, simple à installer, un peu moins performant car deux couches (VirtualBox, VMware Workstation, QEMU)." },
    { id: 'c1-f-methodes', front: 'Les 3 méthodes de virtualisation',
      back: "Émulation : matériel simulé, très compatible mais plus lent. Isolation : environnements cloisonnés partageant le noyau de l'hôte (conteneurs), léger mais cloisonnement imparfait. Paravirtualisation : hyperviseur proche du matériel, OS invités modifiés." },
    { id: 'c1-f-conteneur', front: 'Conteneur vs machine virtuelle',
      back: "Un conteneur (ex. Docker) partage le noyau de l'hôte au lieu d'embarquer un OS complet : il démarre en quelques secondes et consomme bien moins. Une VM embarque son propre OS invité et tourne sur un hyperviseur." },
    { id: 'c1-f-cloud', front: 'IaaS / PaaS / SaaS',
      back: "IaaS : on loue VM, stockage, réseau et on administre l'OS (AWS EC2, Azure VM : notre VM Debian). PaaS : l'environnement d'exécution est fourni (BDD, serveur web). SaaS : l'application est prête à l'emploi (Gmail, Office 365)." }
  ],

  /* =====================================================================
   *  QUIZ
   * ===================================================================== */
  quiz: [
    /* ---------- Quiz express du cours ---------- */
    { id: 'c1-q-001', q: 'Quel est le rôle principal du noyau (kernel) ?',
      choices: ["Afficher l'interface graphique", 'Compiler les programmes', "Gérer directement le matériel et fournir une interface d'appels système"],
      answer: 2,
      explain: "Le noyau est le cœur de l'OS : il pilote le matériel (CPU, mémoire, périphériques) et les programmes passent par lui grâce aux appels système.",
      why: { 0: "L'interface graphique est un programme (gestionnaire de bureau) qui tourne au-dessus du noyau ; beaucoup de serveurs n'en ont même pas.",
             1: "La compilation est le travail d'un outil de développement comme gcc, pas du noyau." },
      src: 'Cours 1 §1.2 · Quiz express 1', level: 1 },

    { id: 'c1-q-002', q: "Qu'est-ce qu'un pilote (driver) ?",
      choices: ["Un programme qui permet au système d'exploitation de communiquer avec un périphérique", 'Un type d\'utilisateur avec tous les droits', 'Un langage de programmation'],
      answer: 0,
      explain: "Le pilote traduit les demandes de l'OS pour un périphérique précis ; les applications n'ont donc pas à connaître chaque matériel.",
      why: { 1: "L'utilisateur qui a tous les droits est root (le superutilisateur).",
             2: "Un pilote est un programme (souvent écrit en C), pas un langage." },
      src: 'Cours 1 §1 · Quiz express 1', level: 1 },

    { id: 'c1-q-003', q: 'Le shell est :',
      choices: ["Le matériel de l'ordinateur", "L'interpréteur de commandes qui reçoit et exécute les instructions de l'utilisateur", 'Le système de fichiers'],
      answer: 1,
      explain: "Le shell reçoit les commandes tapées, les interprète puis demande au noyau de les exécuter.",
      why: { 0: "Le matériel, ce sont les composants physiques : CPU, RAM, disques…",
             2: "Le système de fichiers est un autre composant de l'OS : la structure qui organise les fichiers sur le disque." },
      src: 'Cours 1 §1.2 · Quiz express 1', level: 1 },

    { id: 'c1-q-004', q: 'Sous quelle licence Linux est-il distribué ?',
      choices: ['GPL (libre et open source)', 'Propriétaire, payante', "Il n'y a pas de licence"],
      answer: 0,
      explain: "Linux est distribué sous licence GPL : chacun peut l'utiliser, l'étudier, le modifier et le redistribuer.",
      why: { 1: "C'est le cas de la plupart des Unix commerciaux, pas de Linux.",
             2: "Linux a bien une licence, la GPL ; c'est elle qui garantit sa liberté." },
      src: 'Cours 1 §2.5 · Quiz express 2', level: 1 },

    { id: 'c1-q-005', q: 'Parmi ces distributions, laquelle appartient à la famille Debian ?',
      choices: ['Fedora', 'Arch Linux', 'Ubuntu'],
      answer: 2,
      explain: 'Ubuntu est basée sur Debian (comme Linux Mint, Kali ou Raspberry Pi OS).',
      why: { 0: 'Fedora appartient à la famille Red Hat.',
             1: 'Arch Linux forme sa propre famille (avec Manjaro).' },
      src: 'Cours 1 §2.6 · Quiz express 2', level: 1 },

    { id: 'c1-q-006', q: "Qui a créé Linux, en s'inspirant d'Unix ?",
      choices: ['Dennis Ritchie', 'Linus Torvalds', 'Richard Stallman'],
      answer: 1,
      explain: 'Linus Torvalds a publié le premier noyau Linux en 1991.',
      why: { 0: 'Dennis Ritchie a créé Unix (1969) avec Ken Thompson, ainsi que le langage C.',
             2: 'Richard Stallman a lancé le projet GNU en 1983 (un système libre compatible Unix), pas le noyau Linux.' },
      src: 'Cours 1 §2.1, 2.5 · Quiz express 2', level: 1 },

    { id: 'c1-q-007', q: 'Quelle commande permet d\'afficher le répertoire courant ?',
      choices: ['ls', 'pwd', 'cd'],
      answer: 1,
      explain: 'pwd (print working directory) affiche le chemin absolu du répertoire courant.',
      why: { 0: "ls liste le contenu d'un répertoire, sans dire où l'on se trouve.",
             2: "cd change de répertoire et n'affiche rien." },
      src: 'Cours 1 §3.3 · Quiz express 3', level: 1 },

    { id: 'c1-q-008', q: 'Que fait la commande ls -a ?',
      choices: ['Elle trie les fichiers par taille', 'Elle supprime les fichiers', 'Elle affiche aussi les fichiers et dossiers cachés'],
      answer: 2,
      explain: "-a (--all) affiche aussi les éléments dont le nom commence par un point : .bashrc, .plan, ainsi que . et ..",
      why: { 0: "Le tri par taille, c'est ls -S.",
             1: "ls ne supprime jamais rien : c'est le rôle de rm." },
      src: 'Cours 1 §3.3 · Quiz express 3', level: 1 },

    { id: 'c1-q-009', q: 'Que fait le symbole > dans un terminal ?',
      choices: ["Il redirige le résultat d'une commande vers un fichier, en écrasant son contenu", 'Il compare deux fichiers', "Il affiche l'aide d'une commande"],
      answer: 0,
      explain: "> écrit la sortie dans un fichier en écrasant son contenu ; >> l'ajoute à la fin sans écraser.",
      why: { 1: 'Pour comparer deux fichiers, on utilise diff.',
             2: "L'aide d'une commande s'obtient avec man commande." },
      src: 'Cours 1 §3.7 · Quiz express 3', level: 1 },

    { id: 'c1-q-010', q: 'Que permet la virtualisation ?',
      choices: ["Faire fonctionner plusieurs systèmes d'exploitation sur une même machine physique", 'Augmenter la fréquence du processeur', "Remplacer le système d'exploitation par un pilote"],
      answer: 0,
      explain: "La virtualisation fait tourner plusieurs OS sur une seule machine physique, en partageant ses ressources.",
      why: { 1: "Elle partage les ressources existantes sans rendre le CPU plus rapide (l'hyperviseur en consomme même un peu).",
             2: "Un pilote ne remplace pas un OS : c'est un composant qui permet à l'OS de parler à un périphérique." },
      src: 'Cours 1 §4.1 · Quiz express 4 (1/3)', level: 1 },

    { id: 'c1-q-011', q: 'Que signifie le « cloisonnement » ?',
      choices: ['Les machines virtuelles partagent tous leurs fichiers', 'Chaque système fonctionne indépendamment, sans interférer avec les autres', 'Un seul système peut tourner à la fois'],
      answer: 1,
      explain: "Cloisonnement : chaque système vit sa vie sans interférence avec les autres. C'est l'une des deux règles d'or, avec la transparence.",
      why: { 0: 'Au contraire : chaque VM a ses propres fichiers (son disque virtuel), isolés des autres.',
             2: "Le but de la virtualisation est justement de faire tourner plusieurs systèmes en même temps." },
      src: 'Cours 1 §4.1 · Quiz express 4 (1/3)', level: 1 },

    { id: 'c1-q-012', q: "Dans l'analogie de l'immeuble, à quoi correspond l'hyperviseur ?",
      choices: ['Aux appartements', 'Aux fondations', 'Au syndic, qui organise le partage des ressources communes'],
      answer: 2,
      explain: "L'hyperviseur est le « syndic » : il organise le partage du matériel entre les VM.",
      why: { 0: 'Les appartements représentent les machines virtuelles.',
             1: 'Les fondations (et l\'eau, l\'électricité) représentent le matériel partagé : CPU, RAM, disque.' },
      src: 'Cours 1 §4.1 · Quiz express 4 (1/3)', level: 1 },

    { id: 'c1-q-013', q: "Où s'installe un hyperviseur de type 1 ?",
      choices: ['Directement sur le matériel', "Au-dessus d'un système d'exploitation hôte", 'Dans un navigateur web'],
      answer: 0,
      explain: "Le type 1 (natif, « bare metal ») est installé directement sur le matériel.",
      why: { 1: "C'est la définition du type 2 (hébergé).",
             2: "Aucun hyperviseur ne s'installe dans un navigateur ; le type 1 est au plus près du matériel." },
      src: 'Cours 1 §4.2 · Quiz express 4 (2/3)', level: 1 },

    { id: 'c1-q-014', q: 'Lequel de ces logiciels est un hyperviseur de type 2 ?',
      choices: ['VMware ESXi', 'Oracle VirtualBox', 'KVM'],
      answer: 1,
      explain: "VirtualBox s'installe comme un logiciel dans un OS hôte : c'est un type 2.",
      why: { 0: 'VMware ESXi est un hyperviseur de type 1 (bare metal) pour les serveurs.',
             2: 'KVM est classé type 1 : il est intégré au noyau Linux.' },
      src: 'Cours 1 §4.2 · Quiz express 4 (2/3)', level: 1 },

    { id: 'c1-q-015', q: 'Pourquoi un hyperviseur de type 2 est-il un peu moins performant ?',
      choices: ['Il ne sait pas gérer la RAM', "Il ne peut lancer qu'une seule VM", 'Les demandes des invités traversent deux couches (hyperviseur puis OS hôte)'],
      answer: 2,
      explain: "Les demandes des OS invités traversent deux couches logicielles (l'hyperviseur, puis l'OS hôte) au lieu d'une seule.",
      why: { 0: 'Il gère très bien la RAM : il en attribue une partie à chaque VM.',
             1: 'VirtualBox peut faire tourner plusieurs VM simultanément, dans la limite des ressources.' },
      src: 'Cours 1 §4.2 · Quiz express 4 (2/3)', level: 2 },

    { id: 'c1-q-016', q: 'Quelle est la principale différence entre une VM et un conteneur ?',
      choices: ["Le conteneur partage le noyau de l'hôte au lieu d'embarquer un OS complet", "Le conteneur est toujours plus lent qu'une VM", "Une VM n'a pas besoin d'hyperviseur"],
      answer: 0,
      explain: "Un conteneur partage le noyau de l'hôte : plus léger, il démarre en quelques secondes. Une VM embarque son propre OS.",
      why: { 1: "C'est l'inverse : le conteneur démarre plus vite et consomme moins de ressources.",
             2: 'Une VM a toujours besoin d\'un hyperviseur (de type 1 ou 2).' },
      src: 'Cours 1 §4.5 · Quiz express 4 (3/3)', level: 1 },

    { id: 'c1-q-017', q: 'Pourquoi une panne du serveur physique est-elle critique en environnement virtualisé ?',
      choices: ['Elle supprime les licences des hyperviseurs', 'Toutes les VM hébergées s\'arrêtent en même temps', 'Elle ne concerne que le réseau'],
      answer: 1,
      explain: "C'est la « dépendance à une seule machine » : toutes les VM hébergées tombent en même temps que le serveur.",
      why: { 0: "Les licences ne dépendent pas de l'état du matériel.",
             2: 'Tout dépend du serveur physique : calcul, mémoire, stockage et réseau des VM.' },
      src: 'Cours 1 §4.5 · Quiz express 4 (3/3)', level: 1 },

    { id: 'c1-q-018', q: 'Louer une VM chez un fournisseur (ex. notre VM Debian sur Azure) correspond au modèle :',
      choices: ['SaaS', 'PaaS', 'IaaS'],
      answer: 2,
      explain: "IaaS (Infrastructure as a Service) : le fournisseur loue VM, stockage et réseau ; on administre soi-même l'OS.",
      why: { 0: "SaaS = application prête à l'emploi (Gmail, Office 365) : on n'administre aucun système.",
             1: "PaaS = environnement d'exécution fourni (BDD, serveur web prêts) : on ne gère pas l'OS." },
      src: 'Cours 1 §4.5 · Quiz express 4 (3/3)', level: 1 },

    /* ---------- Cours : questions complémentaires ---------- */
    { id: 'c1-q-019', q: "Afficher la mémoire disponible, la charge du processeur ou les erreurs système relève de quel rôle de l'OS ?",
      choices: ['La gestion des droits', 'La gestion des fichiers', "La gestion de l'exécution des applications", 'La gestion des informations'],
      answer: 3,
      explain: "La gestion des informations fournit des indicateurs pour diagnostiquer le bon fonctionnement de la machine.",
      why: { 0: 'La gestion des droits contrôle QUI peut utiliser les ressources.',
             1: 'La gestion des fichiers concerne la lecture/écriture dans le système de fichiers et les droits d\'accès aux fichiers.',
             2: "Elle attribue les ressources aux applications et peut arrêter celles qui ne répondent plus." },
      src: 'Cours 1 §1.1', level: 1 },

    { id: 'c1-q-020', q: "Que garantit un système d'exploitation temps réel (ex. FreeRTOS) ?",
      choices: ["Qu'une tâche s'exécute dans un délai déterminé", 'Que plusieurs utilisateurs puissent travailler en même temps', 'Que la machine affiche toujours la bonne heure', "Qu'aucun programme ne puisse planter"],
      answer: 0,
      explain: "Un système temps réel garantit un délai d'exécution : critique dans l'embarqué (freinage automobile, aéronautique).",
      why: { 1: "C'est la définition d'un système multi-utilisateur.",
             2: "« Temps réel » ne concerne pas l'horloge : il s'agit de respecter des délais d'exécution.",
             3: 'Aucun OS ne garantit cela ; le temps réel porte sur les délais.' },
      src: 'Cours 1 §1.3', level: 2 },

    { id: 'c1-q-021', q: "Pourquoi la réécriture d'Unix en langage C (1973) a-t-elle été décisive ?",
      choices: ['Unix est devenu gratuit', 'Unix a obtenu une interface graphique', "Unix est devenu portable sur d'autres architectures matérielles", 'Unix est devenu multi-utilisateur'],
      answer: 2,
      explain: "Écrit en C plutôt qu'en langage machine, Unix a pu être recompilé pour d'autres machines : il est devenu portable.",
      why: { 0: 'Unix est resté majoritairement propriétaire ; le libre arrive avec GNU (1983) puis Linux (1991).',
             1: 'Les interfaces graphiques sont arrivées bien plus tard et sans lien avec le C.',
             3: "Le caractère multi-utilisateur tient à la conception d'Unix, pas au langage dans lequel il est écrit." },
      src: 'Cours 1 §2.1', level: 2 },

    { id: 'c1-q-022', q: 'Un programme C appelle read() pour lire un fichier. Que se passe-t-il ?',
      choices: ["read() accède directement au disque, sans passer par le noyau", "read() est une procédure de la bibliothèque standard qui déclenche l'appel système, exécuté en mode noyau", "read() demande au pilote de l'écran d'afficher le fichier"],
      answer: 1,
      explain: "La procédure de bibliothèque masque les détails : elle déclenche le véritable appel système READ, qui s'exécute en mode noyau (ce qui protège le système).",
      why: { 0: 'Un programme n\'accède jamais directement au matériel : il passe par le noyau via les appels système.',
             2: "read() lit des données ; il ne s'occupe pas de l'affichage." },
      src: 'Cours 1 §2.7', level: 2 },

    { id: 'c1-q-023', q: 'À quelle famille de distributions appartient Fedora ?',
      choices: ['Debian', 'SUSE', 'Arch Linux', 'Red Hat'],
      answer: 3,
      explain: 'Fedora appartient à la famille Red Hat, avec RHEL et CentOS Stream.',
      why: { 0: 'Famille Debian : Debian, Ubuntu, Linux Mint, Kali, Raspberry Pi OS.',
             1: 'Famille SUSE : openSUSE, SUSE Linux Enterprise.',
             2: 'Famille Arch : Arch Linux, Manjaro.' },
      src: 'Cours 1 §2.6', level: 1 },

    { id: 'c1-q-024', q: 'Tu es dans /home/etudiant/Cours. Lequel de ces chemins est un chemin ABSOLU vers presentation.txt ?',
      choices: ['../Test/presentation.txt', '/home/etudiant/Test/presentation.txt', 'Test/presentation.txt', './presentation.txt'],
      answer: 1,
      explain: 'Un chemin absolu commence par la racine / et reste valable quel que soit le répertoire courant.',
      why: { 0: "C'est un chemin relatif (.. = répertoire parent). Il est correct depuis Cours, mais pas absolu.",
             2: "Relatif, et faux depuis Cours : il n'y a pas de Test dans Cours.",
             3: 'Relatif : . désigne le répertoire courant (Cours), où le fichier n\'est pas.' },
      src: 'Cours 1 §3 · TP1 ex.9', level: 1 },

    { id: 'c1-q-025', q: "Quel est le rôle de l'option -R de ls (TP ex.7) ?",
      choices: ["Inverser l'ordre de tri", 'Afficher les fichiers cachés', 'Lister aussi le contenu de tous les sous-répertoires, récursivement', 'Afficher les tailles en Ko, Mo, Go'],
      answer: 2,
      explain: "-R (récursif) liste le répertoire puis chacun de ses sous-répertoires : pratique pour vérifier une arborescence.",
      why: { 0: "C'est -r minuscule (reverse). Attention à la casse !",
             1: "C'est -a (all).",
             3: "C'est -h (human readable), à combiner avec -l." },
      src: 'TP1 ex.7', level: 1 },

    { id: 'c1-q-026', q: 'rmdir Test échoue alors que Test existe et t\'appartient. Pourquoi, et comment le supprimer avec rmdir ?',
      choices: ['rmdir ne marche que sur les fichiers : il faut rm Test', 'Il faut écrire rmdir -r Test', 'Test n\'est pas vide : il faut d\'abord supprimer son contenu, puis faire rmdir Test', 'Il faut être root : sudo rmdir Test'],
      answer: 2,
      explain: "rmdir ne supprime que des répertoires vides (« Directory not empty »). On vide d'abord Test (rm sur les fichiers, rmdir sur les sous-répertoires vides), puis rmdir Test.",
      why: { 0: "C'est l'inverse : rmdir supprime des répertoires, et rm sans -r refuse un répertoire.",
             1: "rmdir n'a pas d'option -r ; la suppression récursive, c'est rm -r.",
             3: "Test est dans ton home et t'appartient : le problème n'est pas un manque de droits." },
      src: 'TP1 ex.12', level: 2 },

    { id: 'c1-q-027', q: 'Tu tapes cp Cours Test (Cours est un répertoire). Que se passe-t-il ?',
      choices: ['Cours est copié dans Test', 'Cours est déplacé dans Test', 'cp refuse : sans -r il ne copie pas les répertoires', 'Test est écrasé par Cours'],
      answer: 2,
      explain: "Par défaut cp ne copie que des fichiers (« -r not specified; omitting directory 'Cours' »). Il faut cp -r Cours Test.",
      why: { 0: 'Il manque -r pour copier un répertoire.',
             1: "Déplacer, c'est mv ; cp ne supprime jamais l'original.",
             3: "cp ne remplace pas un répertoire par un autre ; ici il refuse simplement l'opération." },
      src: 'TP1 ex.11', level: 2 },

    { id: 'c1-q-028', q: 'Tu tapes gedit presentation.txt (sans &), puis whoami dans le terminal. Que se passe-t-il ?',
      choices: ["whoami s'affiche normalement", 'gedit se ferme', 'Rien : le terminal attend la fin de gedit (premier plan) ; whoami ne s\'exécutera qu\'après sa fermeture', "whoami s'écrit dans presentation.txt"],
      answer: 2,
      explain: "gedit tourne au premier plan : le shell attend sa fin avant de lire une nouvelle commande. Avec gedit presentation.txt &, le terminal reste disponible.",
      why: { 0: 'Le shell ne lit pas de nouvelle commande tant que la commande au premier plan n\'est pas terminée.',
             1: 'Taper dans le terminal n\'a aucun effet sur gedit.',
             3: 'Le texte tapé reste dans le terminal, il n\'arrive pas dans le fichier.' },
      src: 'TP1 ex.5', level: 1 },

    { id: 'c1-q-029', q: 'gedit tourne au premier plan. Tu fais Ctrl+Z dans le terminal. Que se passe-t-il ?',
      choices: ['gedit est fermé définitivement', 'Le dernier caractère tapé est annulé', 'gedit passe en arrière-plan et continue de fonctionner normalement', 'gedit est suspendu (Stopped) : sa fenêtre ne répond plus et le terminal redevient disponible'],
      answer: 3,
      explain: "Ctrl+Z suspend le programme au premier plan. Pour qu'il reprenne : fg (premier plan) ou bg (arrière-plan).",
      why: { 0: "Ctrl+Z ne termine pas le programme (c'est plutôt Ctrl+C qui l'interrompt) : il le met en pause.",
             1: "Dans un terminal, Ctrl+Z n'a rien à voir avec « annuler ».",
             2: "Il est suspendu, pas relancé : pour qu'il continue en arrière-plan il faut ensuite taper bg." },
      src: 'TP1 ex.5, ex.26', level: 2 },

    { id: 'c1-q-030', q: 'liste_etc.txt contient la liste de /etc suivie de la date. Tu tapes date > ~/Test/liste_etc.txt. Que contient maintenant le fichier ?',
      choices: ['Uniquement la date du jour', 'La liste de /etc puis deux dates', 'La liste de /etc seule', 'Rien, le fichier est vide'],
      answer: 0,
      explain: "> vide le fichier avant d'écrire : l'ancien contenu (liste et première date) est perdu, il ne reste que la nouvelle date.",
      why: { 1: "C'est ce que donnerait >> (ajout à la fin).",
             2: "> réécrit tout le fichier : la liste est effacée.",
             3: 'La sortie de date est bien écrite : le fichier contient une ligne.' },
      src: 'TP1 ex.23', level: 2 },

    { id: 'c1-q-031', q: "Pourquoi ls -l /etc | wc -l donne-t-il un résultat supérieur de 1 au nombre d'éléments de /etc ?",
      choices: ['Parce que wc -l compte aussi le répertoire /etc lui-même', 'Parce que ls -l affiche les fichiers cachés', 'Parce que le tube ajoute une ligne vide', 'Parce que ls -l commence par une ligne « total … »'],
      answer: 3,
      explain: "ls -l affiche d'abord une ligne « total » (blocs occupés). Pour compter les éléments : ls /etc | wc -l.",
      why: { 0: 'wc ne sait rien de /etc : il compte seulement les lignes reçues.',
             1: 'Les fichiers cachés n\'apparaissent qu\'avec -a.',
             2: 'Un tube transmet la sortie telle quelle, sans rien ajouter.' },
      src: 'TP1 ex.23', level: 3 },

    { id: 'c1-q-032', q: 'Que fait 2>/dev/null à la fin de find /etc -name "*.conf" 2>/dev/null ?',
      choices: ['Il supprime les fichiers trouvés', "Il masque les messages d'erreur (Permission denied) et garde les résultats", 'Il enregistre les résultats dans /dev/null', 'Il limite la recherche à 2 niveaux de sous-répertoires'],
      answer: 1,
      explain: "2> redirige la sortie d'erreur (n°2) vers /dev/null, qui jette tout ; la sortie standard (les résultats) reste affichée.",
      why: { 0: 'find ne fait que chercher : rien n\'est supprimé.',
             2: "Les résultats passent par la sortie standard (n°1), qui n'est pas redirigée ici.",
             3: 'La profondeur se règle avec l\'option -maxdepth de find, pas avec une redirection.' },
      src: 'TP1 ex.24', level: 2 },

    { id: 'c1-q-033', q: 'Tu affiches avec cat l\'archive test.tar (qui contient fic1 à fic4). Que constates-tu ?',
      choices: ['Rien ne s\'affiche : une archive est chiffrée', 'On voit le texte des fichiers (Ceci, est, une, archive) mêlé à des en-têtes : noms de fichiers, droits, propriétaire', 'cat extrait l\'archive', 'cat affiche proprement la liste des fichiers'],
      answer: 1,
      explain: "Une archive tar n'est ni compressée ni chiffrée : elle met les fichiers bout à bout, chacun précédé d'un en-tête. Pour lister proprement : tar -tf test.tar.",
      why: { 0: 'tar ne chiffre rien ; et sans l\'option z, il ne compresse pas non plus.',
             2: "cat ne fait qu'afficher ; extraire, c'est tar -xvf.",
             3: 'La liste propre s\'obtient avec tar -tf (t = list).' },
      src: 'TP1 ex.17', level: 2 },

    { id: 'c1-q-034', q: 'Quelle est la différence entre sudo apt remove tree et sudo apt purge tree ?',
      choices: ['remove désinstalle mais garde les fichiers de configuration ; purge supprime aussi la configuration', 'Aucune différence', 'purge vide seulement le cache des paquets téléchargés', "remove supprime aussi les fichiers personnels de l'utilisateur"],
      answer: 0,
      explain: 'purge = désinstallation complète, configuration comprise ; remove permet de réinstaller plus tard en retrouvant sa configuration.',
      why: { 1: 'La différence porte sur les fichiers de configuration du paquet.',
             2: "Vider le cache des paquets téléchargés, c'est apt clean.",
             3: 'Aucune des deux ne touche aux fichiers de ton répertoire personnel.' },
      src: 'TP1 ex.25', level: 2 },

    { id: 'c1-q-035', q: "Tu crées alias la='ls -a', puis tu ouvres un nouveau terminal : la n'y fonctionne pas. Pourquoi ?",
      choices: ['Il fallait mettre des espaces autour du =', "Un alias n'existe que dans le shell où il a été créé ; il faut l'écrire dans ~/.bashrc pour qu'il soit chargé à chaque nouveau terminal", 'Les alias sont effacés au bout de quelques minutes', 'la est un nom réservé par le système'],
      answer: 1,
      explain: "La commande alias n'agit que dans le terminal courant. ~/.bashrc est relu à l'ouverture de chaque terminal : c'est là qu'on rend un alias permanent.",
      why: { 0: "Au contraire : pas d'espace autour du = (sinon erreur).",
             2: "L'alias vit tant que son terminal reste ouvert.",
             3: "la n'est pas réservé ; le problème est la portée de l'alias." },
      src: 'TP1 ex.20-21', level: 1 },

    { id: 'c1-q-036', q: "Pour l'alias sauvegarde du TP, pourquoi écrire alias sauvegarde='tar -czf ~/Sauvegardes/cours_$(date +%F).tar.gz ~/Cours' avec des guillemets SIMPLES ?",
      choices: ['Les guillemets doubles sont interdits dans un alias', 'Avec des guillemets doubles, $(date +%F) serait calculé une seule fois, à la création de l\'alias : la date resterait figée', 'Les guillemets simples compressent l\'archive', "C'est indifférent"],
      answer: 1,
      explain: "Entre guillemets simples, $(date +%F) est conservé tel quel dans l'alias et évalué à chaque utilisation : chaque sauvegarde porte la date du jour.",
      why: { 0: 'Ils sont autorisés (alias la="ls -a" fonctionne) ; le problème vient de l\'évaluation de $(…) entre guillemets doubles.',
             2: "La compression vient de l'option z de tar.",
             3: "Ce n'est pas indifférent : avec des guillemets doubles, toutes les sauvegardes porteraient la date de création de l'alias." },
      src: 'TP1 ex.28', level: 3 },

    { id: 'c1-q-037', q: 'Pourquoi trier la sortie de du -sh ~/* avec sort -h plutôt qu\'avec sort -n ?',
      choices: ['sort -n trie par nom de fichier', 'sort -h trie dans l\'ordre inverse', "sort -n ne fonctionne pas dans un tube", 'sort -n ne comprend pas les suffixes K, M, G : il classerait 900K après 2G'],
      answer: 3,
      explain: "sort -h (human numeric) compare des tailles lisibles comme 900K, 15M, 2G. sort -n ne lit que le nombre : 2 < 900.",
      why: { 0: 'Le tri alphabétique, c\'est sort sans option ; -n trie numériquement mais ignore les unités.',
             1: "L'ordre inverse, c'est -r.",
             2: 'sort lit très bien ce qui arrive par un tube.' },
      src: 'TP1 ex.27', level: 3 },

    { id: 'c1-q-038', q: 'Deux sleep tournent : la tâche [1] (PID 5012) et la tâche [2] (PID 5013). Que fait kill 1 ?',
      choices: ['Il arrête la tâche [1]', 'Il arrête les deux tâches', 'Il vise le processus de PID 1 (le premier processus du système) : refusé pour un simple utilisateur. Pour la tâche [1], il faut kill %1', 'Il suspend la tâche [1]'],
      answer: 2,
      explain: "Sans %, kill interprète le nombre comme un PID. kill %1 vise la tâche n°1 du terminal ; kill 5012 vise son PID.",
      why: { 0: 'Il faudrait kill %1 (ou kill 5012).',
             1: "kill ne vise que l'identifiant donné.",
             3: "Suspendre, c'est Ctrl+Z ; kill envoie par défaut un signal de terminaison." },
      src: 'TP1 ex.26', level: 3 },

    { id: 'c1-q-039', q: 'Quelle méthode de virtualisation exige des systèmes invités modifiés ?',
      choices: ["L'émulation", "L'isolation", 'La paravirtualisation'],
      answer: 2,
      explain: "En paravirtualisation, l'hyperviseur offre une interface d'accès partagé au matériel ; les OS invités doivent être adaptés pour l'utiliser (choix limité, maintenance plus complexe).",
      why: { 0: "L'émulation simule le matériel : l'OS invité tourne sans modification, d'où sa très bonne compatibilité.",
             1: "L'isolation découpe un même OS en espaces cloisonnés partageant un seul noyau (conteneurs) : il n'y a pas d'OS invité à modifier." },
      src: 'Cours 1 §4.3', level: 2 },

    { id: 'c1-q-040', q: "Le disque d'une VM VirtualBox est un fichier .vdi qui grossit au fur et à mesure qu'on le remplit. C'est un disque virtuel :",
      choices: ['statique', 'dynamique', 'physique', 'de type VLAN'],
      answer: 1,
      explain: 'Un disque dynamique grossit au fil du remplissage ; un disque statique a sa taille fixée dès le départ. Formats : VHD (Microsoft), VDI (Oracle), VMDK (VMware).',
      why: { 0: 'Un disque statique occupe d\'emblée toute sa taille sur l\'hôte.',
             2: "C'est un disque VIRTUEL : un simple fichier sur le disque physique de l'hôte.",
             3: 'Le VLAN relève de la virtualisation des réseaux, pas du stockage.' },
      src: 'Cours 1 §4.4', level: 2 },

    { id: 'c1-q-041', q: "Lequel de ces points est un INCONVÉNIENT de la virtualisation ?",
      choices: ['La réduction du TCO', 'La consolidation des serveurs', "Une faille dans l'hyperviseur peut toucher toutes les VM à la fois", 'La réduction du RTO'],
      answer: 2,
      explain: "Toutes les VM reposent sur le même hyperviseur : une faille à ce niveau les expose toutes (de même qu'une panne du serveur les arrête toutes).",
      why: { 0: 'TCO = coût total de possession : le réduire est un avantage.',
             1: 'Consolider = regrouper plusieurs serveurs sur une machine : un avantage.',
             3: 'RTO = temps de reprise après incident : le réduire est un avantage.' },
      src: 'Cours 1 §4.5', level: 2 },

    /* ---------- Réponses courtes ---------- */
    { id: 'c1-q-042', type: 'input', q: 'Quelle commande affiche ton identifiant (ton login) ?',
      accept: ['whoami'],
      explain: "whoami renvoie ton identifiant (ex. etudiant). who liste les personnes connectées, w ce qu'elles font.",
      src: 'TP1 ex.3', level: 1 },

    { id: 'c1-q-043', type: 'input', q: 'Dans /etc/services, sur quel numéro de port fonctionne le service ssh ?',
      accept: ['22', '22/tcp', 'port 22'],
      explain: 'grep ssh /etc/services affiche une ligne « ssh 22/tcp … » : SSH écoute sur le port 22.',
      src: 'TP1 ex.22', level: 1 },

    { id: 'c1-q-044', type: 'input', q: 'Quelle option de rm demande une confirmation avant chaque suppression ?',
      accept: ['-i', 'i', '--interactive', 'rm -i'],
      explain: "rm -i (interactive) demande confirmation ; on peut le rendre systématique avec alias rm='rm -i'.",
      src: 'TP1 ex.14', level: 1 },

    { id: 'c1-q-045', type: 'input', q: "Quelle lettre-option de tar permet de lister le contenu d'une archive sans l'extraire ?",
      accept: ['-t', 't', '--list', '-tf', 'tf', '-tvf', 'tvf'],
      explain: 't = list : tar -tf test.tar (ou tar -tvf pour le détail).',
      src: 'TP1 ex.17', level: 2 },

    { id: 'c1-q-046', type: 'input', q: 'Quelle touche permet de quitter man, less ou top ?',
      accept: ['q'],
      explain: 'q (quit) ferme le visualiseur ; on revient à l\'invite du shell.',
      src: 'TP1 ex.4, ex.26', level: 1 },

    { id: 'c1-q-047', type: 'input', q: 'En quelle année Linus Torvalds a-t-il publié le premier noyau Linux ?',
      accept: ['1991'],
      explain: 'Linux est né en 1991 ; Unix, lui, date de 1969 (Bell Labs).',
      src: 'Cours 1 §2.1', level: 1 },

    { id: 'c1-q-048', type: 'input', q: 'Quel fichier de ton répertoire personnel faut-il modifier pour rendre tes alias bash permanents ? (chemin avec ~)',
      accept: ['~/.bashrc', '.bashrc', '/home/etudiant/.bashrc'],
      explain: '~/.bashrc est lu à chaque ouverture de terminal ; /etc/bash.bashrc joue ce rôle pour tout le système.',
      src: 'TP1 ex.21', level: 1 },

    { id: 'c1-q-049', type: 'input', q: "D'après dpkg -L tree, dans quel répertoire se trouve l'exécutable tree ?",
      accept: ['/usr/bin', '/usr/bin/', '/usr/bin/tree'],
      explain: 'dpkg -L tree liste entre autres /usr/bin/tree (l\'exécutable), sa documentation et sa page de manuel.',
      src: 'TP1 ex.25', level: 2 },

    { id: 'c1-q-050', type: 'input', q: "Quelle lettre-option de tar compresse l'archive avec gzip ?",
      accept: ['z', '-z', '--gzip'],
      explain: 'tar -czf archive.tar.gz rep : c = créer, z = gzip, f = nom de l\'archive.',
      src: 'TP1 ex.28', level: 1 }
  ],

  /* =====================================================================
   *  EXERCICES « tape la commande »
   *  Contexte général : utilisateur etudiant, home = /home/etudiant
   *  Arborescence du TP : ~/Cours/{SE,BD}, ~/Perso, ~/Test/presentation.txt
   * ===================================================================== */
  exercises: [
    /* ---------- Se repérer ---------- */
    { id: 'c1-x-001',
      prompt: 'Affiche le chemin du répertoire dans lequel tu te trouves.',
      context: 'Tu viens d\'ouvrir un terminal.',
      answers: ['pwd'],
      hint: 'print working directory',
      explain: "pwd (print working directory) affiche le chemin absolu du répertoire courant. À l'ouverture d'un terminal, c'est ton home : /home/etudiant.",
      mistakes: [
        { re: '^ls', msg: "ls liste le CONTENU du répertoire, pas son chemin." },
        { re: '^cd', msg: "cd sert à changer de répertoire ; il n'affiche rien." }
      ],
      src: 'Cours 1 §3.3 · TP1 §5', level: 1 },

    { id: 'c1-x-002',
      prompt: 'Ouvre la page de manuel complète de la commande who.',
      answers: ['man who'],
      hint: 'La commande « la plus utile » du TP, suivie du nom de la commande.',
      explain: "man who affiche le manuel de who. On défile avec les flèches ou PgUp/PgDn et on quitte avec q.",
      mistakes: [
        { re: '^who\\s+--help', msg: "--help donne un résumé ; l'exercice demande la page de manuel complète : man who." },
        { re: '^help\\s', msg: "help ne documente que les commandes internes de bash ; le manuel d'une commande s'ouvre avec man." },
        { re: '^man$', msg: "Précise la commande dont tu veux le manuel : man who." }
      ],
      src: 'TP1 ex.4', level: 1 },

    { id: 'c1-x-003',
      prompt: 'Reviens dans ton répertoire personnel.',
      context: 'Tu es dans /etc/apt.',
      answers: ['cd', 'cd ~', 'cd ~/', 'cd /home/etudiant', 'cd $HOME'],
      hint: 'cd tout seul suffit.',
      explain: "cd sans argument (ou cd ~) ramène dans ton répertoire personnel /home/etudiant. « Si vous êtes perdu, tapez cd. »",
      mistakes: [
        { re: '^cd\\s+\\.\\.', msg: "cd .. ne remonte que d'un niveau (ici vers /etc)." },
        { re: '^cd\\s+/$', msg: "/ est la racine du système, pas ton répertoire personnel." },
        { re: '^cd\\s+home', msg: "home sans / est un chemin relatif, introuvable depuis /etc/apt. Ton home est /home/etudiant, ou simplement ~." }
      ],
      src: 'TP1 §5, ex.6', level: 1 },

    { id: 'c1-x-004',
      prompt: 'Remonte d\'un niveau dans l\'arborescence (vers le répertoire parent).',
      context: 'Tu es dans /home/etudiant/Cours/SE.',
      answers: ['cd ..', 'cd ../', 'cd /home/etudiant/Cours', 'cd ~/Cours'],
      hint: 'Le répertoire parent se note avec deux points.',
      explain: "cd .. remonte au répertoire parent : de /home/etudiant/Cours/SE à /home/etudiant/Cours.",
      mistakes: [
        { re: '^cd\\.\\.', msg: "Il faut un espace entre cd et .. : « cd.. » n'est pas une commande." },
        { re: '^cd\\s+\\.$', msg: ". est le répertoire courant : tu resterais dans SE." },
        { re: '^cd$', msg: "cd seul te ramène dans ton home, pas dans le répertoire parent." }
      ],
      src: 'TP1 §5', level: 1 },

    { id: 'c1-x-005',
      prompt: 'Affiche le contenu de ton répertoire personnel, fichiers cachés compris (format court).',
      context: 'Tu es dans ton home.',
      answers: ['ls -a', 'ls --all', 'ls -a ~', 'ls -a .', 'ls -a /home/etudiant', 'ls -A'],
      hint: 'Option « all » de ls.',
      explain: "ls -a (--all) affiche aussi les éléments dont le nom commence par un point : ., .., .bashrc, .plan…",
      mistakes: [
        { re: '^ls$', msg: "Sans option, ls masque les fichiers dont le nom commence par un point (.bashrc, .plan…)." },
        { re: '^ls\\s+-[a-zA-Z]*l', msg: "-l donne le format long ; ici on demande le format court : seulement -a." },
        { re: '^ls\\s+-R', msg: "-R liste récursivement les sous-répertoires ; les fichiers cachés, c'est -a." }
      ],
      src: 'Cours 1 §3.3 · TP1 ex.8', level: 1 },

    { id: 'c1-x-006',
      prompt: 'Affiche le contenu de /etc en format long, avec des tailles lisibles (K, M…).',
      answers: ['ls -lh /etc', 'ls -lh /etc/'],
      hint: 'Deux options : long + human readable.',
      explain: "ls -l donne le format long (droits, propriétaire, taille, date) ; -h affiche les tailles en K, M, G. /etc est le répertoire listé.",
      mistakes: [
        { re: '^ls\\s+-\\w+$', msg: "Sans argument, ls liste le répertoire courant : ajoute /etc." },
        { re: '^ls\\s+-l\\s', msg: "Il manque -h : les tailles seraient en octets." },
        { re: '^ls\\s+-h\\s', msg: "Seul, -h n'a pas d'effet visible : il faut le format long -l pour voir les tailles." }
      ],
      src: 'Cours 1 §3.3', level: 1 },

    /* ---------- Créer l'arborescence du TP ---------- */
    { id: 'c1-x-007',
      prompt: 'En une seule commande, crée les répertoires SE et BD à l\'intérieur de Cours.',
      context: 'Tu es dans ton home ; le répertoire Cours existe déjà (vide).',
      answers: ['mkdir Cours/SE Cours/BD', 'mkdir Cours/BD Cours/SE', 'mkdir ~/Cours/SE ~/Cours/BD', 'mkdir -p Cours/SE Cours/BD'],
      hint: 'mkdir accepte plusieurs arguments.',
      explain: "mkdir crée un répertoire par argument : Cours/SE et Cours/BD (chemins relatifs depuis ton home).",
      mistakes: [
        { re: '^touch', msg: "touch crée des fichiers vides, pas des répertoires : mkdir." },
        { re: '^mkdir\\s+(SE|BD)', msg: "Tu es dans ton home : SE et BD seraient créés à côté de Cours, pas dedans. Préfixe par Cours/." },
        { re: '^mkdir\\s+\\S+\\s*$', msg: "Il faut créer les DEUX répertoires : donne-les tous les deux à mkdir." }
      ],
      src: 'Cours 1 §3.4 · TP1 ex.7', level: 1 },

    { id: 'c1-x-008',
      prompt: 'Crée le fichier vide prise_de_notes.txt dans Cours/SE.',
      context: 'Tu es dans ton home.',
      answers: ['touch Cours/SE/prise_de_notes.txt', 'touch ~/Cours/SE/prise_de_notes.txt', 'touch /home/etudiant/Cours/SE/prise_de_notes.txt'],
      hint: 'La commande qui crée un fichier vide.',
      explain: "touch crée un fichier vide (ou met à jour sa date s'il existe). Le chemin relatif Cours/SE/ place le fichier au bon endroit.",
      mistakes: [
        { re: '^mkdir', msg: "mkdir créerait un RÉPERTOIRE nommé prise_de_notes.txt." },
        { re: '^touch\\s+prise_de_notes', msg: "Le fichier serait créé dans le répertoire courant (ton home), pas dans Cours/SE." }
      ],
      src: 'Cours 1 §3.4 · TP1 ex.7', level: 1 },

    { id: 'c1-x-009',
      prompt: 'Vérifie toute ton arborescence (ton home et tous ses sous-répertoires) avec ls.',
      context: 'Tu es dans ton home.',
      answers: ['ls -R', 'ls -R ~', 'ls -R .', 'ls --recursive', 'ls -R /home/etudiant'],
      hint: 'Option récursive de ls (attention à la casse).',
      explain: "ls -R (R majuscule) liste le répertoire puis, récursivement, le contenu de chacun de ses sous-répertoires.",
      mistakes: [
        { re: '^ls\\s+-r(\\s|$)', msg: "-r minuscule inverse seulement l'ordre de tri ! Le récursif, c'est -R majuscule." },
        { re: '^ls$', msg: "ls seul n'affiche que le premier niveau." },
        { re: '^tree', msg: "tree ferait l'affaire s'il est installé, mais l'exercice demande ls." }
      ],
      src: 'TP1 ex.7', level: 1 },

    /* ---------- Afficher, chemins ---------- */
    { id: 'c1-x-010',
      prompt: 'Affiche le fichier /etc/services page par page (il est long).',
      answers: ['less /etc/services', 'more /etc/services'],
      hint: 'Le visualiseur page par page (q pour quitter).',
      explain: "less affiche un fichier page par page : Espace pour avancer, /mot pour chercher, q pour quitter.",
      mistakes: [
        { re: '^cat', msg: "cat affiche tout d'un coup : le début défile hors de l'écran. Pour paginer : less." },
        { re: '^(head|tail)', msg: "head/tail n'affichent qu'un extrait (début ou fin) ; pour tout lire page par page : less." }
      ],
      src: 'Cours 1 §3.5 · TP1 §4', level: 1 },

    { id: 'c1-x-011',
      prompt: 'Affiche le contenu de presentation.txt en utilisant son chemin ABSOLU.',
      context: 'Tu es dans /home/etudiant/Perso ; le fichier est dans /home/etudiant/Test.',
      answers: ['cat /home/etudiant/Test/presentation.txt'],
      hint: 'Un chemin absolu commence à la racine /.',
      explain: "cat affiche le fichier ; /home/etudiant/Test/presentation.txt part de la racine, il fonctionne quel que soit le répertoire courant.",
      mistakes: [
        { re: '^cat\\s+\\.\\.', msg: "../Test/presentation.txt est un chemin RELATIF : il dépend de l'endroit où tu es." },
        { re: '^cat\\s+~', msg: "~ est un raccourci que le shell remplace par /home/etudiant : ça marche, mais écris le chemin absolu complet, qui commence par /." },
        { re: '^cat\\s+Test', msg: "Chemin relatif (et faux depuis Perso). Un chemin absolu commence par /." }
      ],
      src: 'TP1 ex.9', level: 1 },

    { id: 'c1-x-012',
      prompt: 'Affiche presentation.txt, cette fois avec un chemin RELATIF.',
      context: 'Tu es dans /home/etudiant/Cours ; le fichier est /home/etudiant/Test/presentation.txt.',
      answers: ['cat ../Test/presentation.txt', 'cat ./../Test/presentation.txt'],
      hint: 'Remonte d\'abord au parent, puis descends dans Test.',
      explain: ".. remonte de Cours à /home/etudiant, puis Test/presentation.txt descend jusqu'au fichier.",
      mistakes: [
        { re: '^cat\\s+Test/', msg: "Il n'y a pas de Test dans Cours : remonte d'abord au parent avec .." },
        { re: '^cat\\s+(/|~)', msg: "C'est un chemin absolu (ou ~). Un chemin relatif part du répertoire courant, ici avec .." },
        { re: '^cat\\s+\\.\\./presentation', msg: "Le fichier est dans Test : ../Test/presentation.txt." }
      ],
      src: 'TP1 ex.9', level: 2 },

    /* ---------- Déplacer, copier, supprimer ---------- */
    { id: 'c1-x-013',
      prompt: 'Change le chemin de presentation.txt (actuellement dans Test) en ~/.plan, sans oublier le point.',
      context: 'Tu es dans ton home.',
      answers: ['mv Test/presentation.txt ~/.plan', 'mv Test/presentation.txt .plan', 'mv ~/Test/presentation.txt ~/.plan', 'mv ~/Test/presentation.txt .plan', 'mv Test/presentation.txt /home/etudiant/.plan', 'mv /home/etudiant/Test/presentation.txt /home/etudiant/.plan'],
      hint: 'Déplacer et renommer se font avec la même commande.',
      explain: "mv source destination : après la commande, le fichier n'est plus accessible par Test/presentation.txt mais par ~/.plan (le point le rend caché).",
      mistakes: [
        { re: '^cp', msg: "cp laisserait l'original dans Test : l'exercice demande de CHANGER le chemin, donc mv." },
        { re: '(~/|\\s)plan$', msg: "Sans le point, le fichier s'appellerait plan et ne serait pas caché : le nom attendu est .plan." },
        { re: '^mv\\s+presentation', msg: "presentation.txt n'est pas dans ton home mais dans Test : Test/presentation.txt." }
      ],
      src: 'TP1 ex.10', level: 2 },

    { id: 'c1-x-014',
      prompt: 'Copie le fichier .plan dans le répertoire Perso, en gardant le même nom.',
      context: 'Tu es dans ton home.',
      answers: ['cp .plan Perso', 'cp .plan Perso/', 'cp .plan Perso/.plan', 'cp ~/.plan ~/Perso', 'cp ~/.plan ~/Perso/', 'cp ~/.plan Perso/'],
      hint: 'cp source destination ; si la destination est un répertoire, le nom est conservé.',
      explain: "cp .plan Perso crée Perso/.plan ; l'original reste dans ton home.",
      mistakes: [
        { re: '^mv', msg: "mv déplacerait le fichier : il n'existerait plus dans ton home. Copier = cp." },
        { re: '^cp\\s+plan', msg: "Le fichier s'appelle .plan (avec le point)." },
        { re: '^cp\\s+Perso', msg: "L'ordre est cp SOURCE DESTINATION : le fichier .plan d'abord." }
      ],
      src: 'Cours 1 §3.4 · TP1 §5', level: 1 },

    { id: 'c1-x-015',
      prompt: 'Copie récursivement le répertoire Cours dans le répertoire Test (pour obtenir Test/Cours).',
      context: 'Tu es dans ton home ; Test existe.',
      answers: ['cp -r Cours Test', 'cp -r Cours Test/', 'cp -R Cours Test', 'cp -r ~/Cours ~/Test', 'cp -r ~/Cours ~/Test/', 'cp -r Cours ~/Test', 'cp -r Cours Test/Cours'],
      hint: 'Par défaut cp ne copie pas les répertoires : il faut une option.',
      explain: "cp -r copie récursivement Cours et tout son contenu ; comme Test existe, la copie est créée dedans : Test/Cours.",
      mistakes: [
        { re: '^cp\\s+Cours', msg: "Sans -r, cp refuse de copier un répertoire (« -r not specified; omitting directory 'Cours' »)." },
        { re: '^mv', msg: "mv déplacerait Cours : il n'existerait plus dans ton home." },
        { re: '^cp\\s+-r\\s+Test', msg: "L'ordre est cp -r SOURCE DESTINATION : la source (Cours) d'abord." }
      ],
      src: 'Cours 1 §3.4 · TP1 ex.11', level: 2 },

    { id: 'c1-x-016',
      prompt: 'Supprime le répertoire Perso, qui est vide, avec la commande dédiée aux répertoires vides.',
      context: 'Tu es dans ton home.',
      answers: ['rmdir Perso', 'rmdir Perso/', 'rmdir ~/Perso'],
      hint: 'remove directory',
      explain: "rmdir supprime un répertoire VIDE ; il refuse (« Directory not empty ») s'il reste quelque chose dedans, ce qui le rend plus sûr que rm -r.",
      mistakes: [
        { re: '^rm\\s+Perso', msg: "rm sans option refuse de supprimer un répertoire (« Is a directory »)." },
        { re: '^rm\\s+-', msg: "rm -r fonctionnerait, mais l'exercice demande la commande dédiée aux répertoires vides : rmdir." }
      ],
      src: 'TP1 ex.12', level: 1 },

    { id: 'c1-x-017',
      prompt: 'Supprime la copie Test/Cours avec tout son contenu (sous-répertoires compris).',
      context: 'Tu es dans ton home.',
      answers: ['rm -r Test/Cours', 'rm -r Test/Cours/', 'rm -r ~/Test/Cours', 'rm -rf Test/Cours', 'rm -rf ~/Test/Cours'],
      hint: 'Option de rm qui descend dans les sous-répertoires.',
      explain: "rm -r supprime récursivement Test/Cours et tout ce qu'il contient. Attention : c'est définitif.",
      mistakes: [
        { re: '^rmdir', msg: "rmdir échoue : « Directory not empty ». Pour supprimer récursivement : rm -r." },
        { re: '^rm\\s+Test', msg: "Sans -r, rm refuse de supprimer un répertoire." },
        { re: '^rm\\s+-r\\s+(~/)?Test/?$', msg: "Attention : tu supprimerais tout Test, pas seulement la copie Test/Cours !" }
      ],
      src: 'TP1 ex.13', level: 2 },

    { id: 'c1-x-018',
      prompt: 'Supprime le fichier fic2 en demandant une confirmation avant la suppression.',
      answers: ['rm -i fic2'],
      hint: 'Option « interactive » de rm.',
      explain: "rm -i demande « remove regular file 'fic2'? » : on répond y pour confirmer.",
      mistakes: [
        { re: '^rm\\s+fic2', msg: "Par défaut rm ne demande rien : ajoute -i (interactive)." },
        { re: '^rm\\s+-f', msg: "-f fait l'inverse : il force la suppression sans jamais demander." }
      ],
      src: 'TP1 ex.14', level: 1 },

    /* ---------- Jokers, historique ---------- */
    { id: 'c1-x-019',
      prompt: 'Liste les fichiers de /usr/bin dont le nom commence par k et contient exactement 8 caractères.',
      answers: ['ls /usr/bin/k???????', 'ls -d /usr/bin/k???????'],
      hint: '? remplace exactement un caractère ; k compte déjà pour 1.',
      explain: "k??????? = la lettre k suivie de 7 caractères quelconques, soit 8 au total. Le shell remplace le motif par les noms correspondants, puis ls les affiche.",
      mistakes: [
        { re: 'k\\?{8}', msg: "k + 8 ? = 9 caractères : il faut k suivi de 7 ?." },
        { re: 'k\\?{1,6}(\\s|$)', msg: "Compte bien : k + 7 ? = 8 caractères." },
        { re: 'k\\*', msg: "* accepte n'importe quelle longueur : pour exactement 8 caractères, utilise des ? (un caractère chacun)." }
      ],
      src: 'TP1 ex.15', level: 2 },

    { id: 'c1-x-020',
      prompt: 'Relance la commande numéro 42 de l\'historique (tel qu\'affiché par history).',
      answers: ['!42'],
      hint: 'Point d\'exclamation + numéro.',
      explain: "!42 rappelle et exécute la commande n°42 de history.",
      mistakes: [
        { re: '^!\\s', msg: "Pas d'espace : !42, collé." },
        { re: '^history', msg: "history 42 affiche les 42 dernières commandes, il ne relance rien. Pour relancer : !42." }
      ],
      src: 'TP1 §8', level: 1 },

    /* ---------- Compiler, processus ---------- */
    { id: 'c1-x-021',
      prompt: 'Compile le fichier source exercice1.c pour produire un exécutable nommé exercice1.',
      answers: ['gcc exercice1.c -o exercice1', 'gcc -o exercice1 exercice1.c'],
      hint: 'gcc, le fichier source, et l\'option qui nomme la sortie.',
      explain: "gcc compile exercice1.c ; -o exercice1 donne le nom de l'exécutable produit (sinon il s'appellerait a.out).",
      mistakes: [
        { re: '-o\\s+exercice1\\.c', msg: "-o est suivi du nom de l'EXÉCUTABLE à produire (exercice1), jamais du fichier source : tu risquerais d'écraser ton code." },
        { re: '^gcc\\s+exercice1\\.c$', msg: "Sans -o, l'exécutable s'appellerait a.out : ajoute -o exercice1." },
        { re: '^\\./', msg: "Il faut d'abord compiler avec gcc avant de pouvoir exécuter." }
      ],
      src: 'TP1 §6', level: 2 },

    { id: 'c1-x-022',
      prompt: 'Exécute le programme exercice1, qui vient d\'être compilé dans le répertoire courant.',
      answers: ['./exercice1'],
      hint: 'Il faut indiquer explicitement le répertoire courant.',
      explain: "./exercice1 : ./ indique que le programme est dans le répertoire courant, qui n'est pas dans le PATH.",
      mistakes: [
        { re: '^exercice1$', msg: "« command not found » : le répertoire courant n'est pas dans le PATH, il faut écrire ./exercice1." },
        { re: '\\.c$', msg: "exercice1.c est le code source : on exécute le fichier compilé exercice1." },
        { re: '^(sh|bash)\\s', msg: "exercice1 est un binaire compilé, pas un script shell : lance-le directement avec ./exercice1." }
      ],
      src: 'TP1 §6', level: 1 },

    { id: 'c1-x-023',
      prompt: 'Ouvre presentation.txt dans gedit SANS bloquer le terminal.',
      context: 'Tu es dans le répertoire Test.',
      answers: ['gedit presentation.txt &'],
      hint: 'Un caractère en fin de commande lance en arrière-plan.',
      explain: "Le & final lance gedit en arrière-plan : le shell affiche [1] et le PID, et le terminal reste disponible.",
      mistakes: [
        { re: '^gedit\\s+presentation\\.txt$', msg: "Sans &, gedit tourne au premier plan : le terminal reste bloqué jusqu'à sa fermeture." },
        { re: '^&', msg: "Le & se place à la FIN de la commande." },
        { re: '^nano', msg: "nano s'ouvre dans le terminal lui-même ; l'exercice porte sur gedit." }
      ],
      src: 'TP1 ex.5', level: 1 },

    { id: 'c1-x-024',
      prompt: 'Ramène la tâche [1] au premier plan.',
      context: 'Tu as lancé deux fois sleep 300 & ; jobs affiche les tâches [1] et [2]+.',
      answers: ['fg %1', 'fg 1'],
      hint: 'foreground + numéro de tâche précédé de %.',
      explain: "fg %1 ramène la tâche n°1 au premier plan (le terminal attend alors sa fin).",
      mistakes: [
        { re: '^fg$', msg: "Sans argument, fg ramène la tâche courante (marquée +), ici la [2]. Précise %1." },
        { re: '^bg', msg: "bg relance en ARRIÈRE-plan ; premier plan = fg." },
        { re: '^kill', msg: "kill arrêterait la tâche ; on veut seulement la ramener au premier plan." }
      ],
      src: 'TP1 ex.26', level: 2 },

    { id: 'c1-x-025',
      prompt: 'Relance en arrière-plan la tâche que tu viens de suspendre.',
      context: 'La tâche [1] (sleep 300) vient d\'être suspendue avec Ctrl+Z : « [1]+ Stopped ».',
      answers: ['bg', 'bg %1', 'bg 1'],
      hint: 'background',
      explain: "bg relance la tâche suspendue en arrière-plan (sans argument, il vise la tâche courante +, ici la [1]).",
      mistakes: [
        { re: '^fg', msg: "fg la remettrait au premier plan et bloquerait le terminal : ici on veut l'arrière-plan, bg." },
        { re: '&$', msg: "& sert au LANCEMENT d'une commande ; pour une tâche déjà suspendue, c'est bg." }
      ],
      src: 'TP1 ex.5, ex.26', level: 2 },

    { id: 'c1-x-026',
      prompt: 'Affiche tous les processus du système (de tous les utilisateurs), comme dans le TP.',
      answers: ['ps aux', 'ps -ef', 'ps -e', 'ps -A'],
      hint: 'ps avec trois lettres, sans tiret.',
      explain: "ps aux : a = processus de tous les utilisateurs, u = format détaillé (USER, PID, %CPU, %MEM…), x = aussi ceux sans terminal.",
      mistakes: [
        { re: '^ps$', msg: "ps seul n'affiche que les processus du terminal courant." },
        { re: '^jobs', msg: "jobs ne liste que les tâches lancées depuis ce terminal." },
        { re: '^top', msg: "top affiche les processus les plus gourmands en temps réel ; l'exercice demande la liste complète avec ps." }
      ],
      src: 'TP1 ex.26', level: 1 },

    { id: 'c1-x-027',
      prompt: 'Arrête proprement le processus de PID 4321.',
      answers: ['kill 4321', 'kill -15 4321', 'kill -TERM 4321'],
      hint: 'kill suivi du PID.',
      explain: "kill 4321 envoie le signal SIGTERM au processus 4321, qui peut se terminer proprement.",
      mistakes: [
        { re: '-9|KILL', msg: "kill -9 force l'arrêt sans laisser le programme se terminer proprement : à garder en dernier recours. Commence par kill PID." },
        { re: '%4321', msg: "%n désigne un numéro de TÂCHE (jobs) ; ici on a un PID : kill 4321." }
      ],
      src: 'TP1 ex.26', level: 1 },

    /* ---------- Filtres et redirections ---------- */
    { id: 'c1-x-028',
      prompt: 'Affiche les 5 dernières lignes de /etc/services.',
      answers: ['tail -n 5 /etc/services', 'tail -5 /etc/services'],
      hint: 'La « queue » du fichier, avec l\'option qui fixe le nombre de lignes.',
      explain: "tail affiche la fin d'un fichier ; -n 5 limite à 5 lignes (10 par défaut).",
      mistakes: [
        { re: '^head', msg: "head affiche le DÉBUT du fichier ; la fin, c'est tail." },
        { re: '^tail\\s+/etc/services$', msg: "Sans -n 5, tail affiche 10 lignes." }
      ],
      src: 'TP1 ex.22', level: 1 },

    { id: 'c1-x-029',
      prompt: 'Affiche les lignes de /etc/services contenant ssh, sans tenir compte des majuscules/minuscules, avec le numéro de chaque ligne.',
      answers: ['grep -in ssh /etc/services'],
      hint: 'grep + deux options : ignore-case et line-number.',
      explain: "grep cherche le motif ssh ; -i ignore la casse (SSH, Ssh…) et -n préfixe chaque ligne trouvée par son numéro.",
      mistakes: [
        { re: '^grep\\s+-n\\s', msg: "Il manque -i pour ignorer la différence majuscules/minuscules." },
        { re: '^grep\\s+-i\\s', msg: "Il manque -n pour afficher les numéros de ligne." },
        { re: '^grep\\s+-\\w+\\s+/etc/services', msg: "L'ordre est grep motif fichier : le motif ssh d'abord." }
      ],
      src: 'TP1 ex.22', level: 2 },

    { id: 'c1-x-030',
      prompt: 'Enregistre la liste détaillée (format long) du contenu de /etc dans le fichier ~/Test/liste_etc.txt, en écrasant son contenu s\'il existe.',
      context: 'Tu es dans ton home.',
      answers: ['ls -l /etc > ~/Test/liste_etc.txt', 'ls -l /etc > Test/liste_etc.txt', 'ls -l /etc > /home/etudiant/Test/liste_etc.txt'],
      hint: 'ls -l puis une redirection qui écrase.',
      explain: "ls -l /etc produit la liste détaillée ; > l'écrit dans le fichier (créé s'il n'existe pas, écrasé sinon).",
      mistakes: [
        { re: '>>', msg: ">> AJOUTE à la fin du fichier ; pour écrire en écrasant : >." },
        { re: '\\|', msg: "Le tube | envoie vers une COMMANDE ; pour écrire dans un fichier : >." },
        { re: '^ls\\s+/etc', msg: "Il manque -l : la liste doit être détaillée (format long)." }
      ],
      src: 'TP1 ex.23', level: 2 },

    { id: 'c1-x-031',
      prompt: 'Ajoute la date du jour à la FIN de ~/Test/liste_etc.txt, sans effacer son contenu.',
      context: 'Tu es dans ton home.',
      answers: ['date >> ~/Test/liste_etc.txt', 'date >> Test/liste_etc.txt', 'date >> /home/etudiant/Test/liste_etc.txt'],
      hint: 'La commande date + la redirection qui ajoute.',
      explain: "date affiche la date et l'heure ; >> ajoute cette ligne à la fin du fichier sans toucher au reste (vérifiable avec tail).",
      mistakes: [
        { re: '^date\\s*>\\s*[^>]', msg: "Un seul > ÉCRASE le fichier : il ne contiendrait plus que la date. Pour ajouter : >>." },
        { re: '^echo\\s+date', msg: "echo date écrirait le mot « date » ; il faut exécuter la commande date." },
        { re: '\\|', msg: "Un tube envoie vers une commande, pas vers un fichier : utilise >>." }
      ],
      src: 'TP1 ex.23', level: 2 },

    { id: 'c1-x-032',
      prompt: 'Sans créer de fichier intermédiaire, compte le nombre d\'éléments présents dans /etc.',
      answers: ['ls /etc | wc -l', 'ls -1 /etc | wc -l'],
      hint: 'Liste /etc et envoie le résultat dans un compteur de lignes.',
      explain: "ls /etc liste les éléments (un par ligne quand la sortie part dans un tube) ; | les envoie à wc -l, qui compte les lignes.",
      mistakes: [
        { re: '^ls\\s+-[a-zA-Z]*l[a-zA-Z]*\\s', msg: "ls -l ajoute une ligne « total … » en tête : le compte serait faux de 1. Utilise ls simple." },
        { re: '^ls\\s+-[a-zA-Z]*a', msg: "-a ajoute les fichiers cachés ainsi que . et .. : le compte changerait." },
        { re: '>', msg: "Une redirection > créerait un fichier intermédiaire : utilise un tube |." },
        { re: '^wc', msg: "wc -l compte les lignes d'un FICHIER ; /etc est un répertoire. Fais-le lister par ls, puis compte avec un tube." }
      ],
      src: 'TP1 ex.23', level: 2 },

    { id: 'c1-x-033',
      prompt: 'En une seule ligne, compte le nombre de lignes de /etc/services qui contiennent le mot tcp.',
      answers: ['grep tcp /etc/services | wc -l', 'grep -c tcp /etc/services', 'cat /etc/services | grep tcp | wc -l'],
      hint: 'Filtrer avec grep, puis compter avec wc.',
      explain: "grep tcp /etc/services garde les lignes contenant tcp ; | wc -l les compte. (grep -c tcp fait les deux d'un coup.)",
      mistakes: [
        { re: '^wc\\s+-l\\s+/etc/services', msg: "Cela compte TOUTES les lignes du fichier : filtre d'abord avec grep tcp." },
        { re: '^grep\\s+tcp\\s+/etc/services$', msg: "Tu affiches les lignes, il reste à les compter : | wc -l." },
        { re: 'wc\\s*$', msg: "wc seul affiche lignes, mots et octets : précise -l." }
      ],
      src: 'TP1 ex.23', level: 2 },

    /* ---------- find ---------- */
    { id: 'c1-x-034',
      prompt: 'Retrouve tous les fichiers dont le nom se termine par .txt, dans toute ton arborescence personnelle.',
      context: 'Tu es dans ton home.',
      answers: ['find ~ -name "*.txt"', 'find . -name "*.txt"', 'find ~/ -name "*.txt"', 'find /home/etudiant -name "*.txt"', 'find -name "*.txt"'],
      hint: 'find, le point de départ, puis -name avec un joker entre guillemets.',
      explain: "find ~ parcourt ton home et tous ses sous-répertoires ; -name \"*.txt\" garde les noms finissant par .txt. Les guillemets empêchent le shell de remplacer lui-même *.txt.",
      mistakes: [
        { re: '^ls', msg: "ls ne descend pas dans les sous-répertoires (sauf -R) et ne filtre pas : pour chercher récursivement, find." },
        { re: "-name\\s+[\"']?\\.txt", msg: "Le motif doit contenir le joker : \"*.txt\" (n'importe quel nom finissant par .txt)." },
        { re: '^grep', msg: "grep cherche DANS le contenu des fichiers ; pour chercher des fichiers par leur nom : find." }
      ],
      src: 'TP1 ex.24', level: 2 },

    { id: 'c1-x-035',
      prompt: 'Affiche uniquement les répertoires de l\'arborescence Cours.',
      context: 'Tu es dans ton home.',
      answers: ['find Cours -type d', 'find Cours/ -type d', 'find ~/Cours -type d', 'find /home/etudiant/Cours -type d'],
      hint: 'find avec le critère de type (d comme directory).',
      explain: "find Cours parcourt l'arborescence ; -type d ne garde que les répertoires (Cours, Cours/SE, Cours/BD).",
      mistakes: [
        { re: '-type\\s+f', msg: "-type f sélectionne les fichiers ordinaires ; les répertoires, c'est -type d." },
        { re: '-name', msg: "-name filtre sur le nom ; pour filtrer sur la nature (répertoire), utilise -type d." },
        { re: '^ls', msg: "ls ne sait pas sélectionner les seuls répertoires de toute une arborescence : find … -type d." }
      ],
      src: 'TP1 ex.24', level: 2 },

    { id: 'c1-x-036',
      prompt: 'Recherche dans /etc tous les fichiers dont le nom se termine par .conf, en masquant les messages d\'erreur (Permission denied).',
      answers: ['find /etc -name "*.conf" 2>/dev/null', 'find /etc -name "*.conf" 2> /dev/null', 'find /etc -type f -name "*.conf" 2>/dev/null'],
      hint: 'Redirige la sortie d\'erreur (n°2) vers /dev/null.',
      explain: "find /etc -name \"*.conf\" cherche les .conf ; 2>/dev/null envoie la sortie d'erreur (n°2) dans le trou noir, les résultats restent affichés.",
      mistakes: [
        { re: '(^|[^2])>\\s*/dev/null', msg: "> /dev/null masque les RÉSULTATS (sortie standard) ; les erreurs passent par la sortie n°2 : 2>/dev/null." },
        { re: '^(sudo\\s+)?find\\s+/etc\\s+-name\\s+\\S+$', msg: "Il manque la redirection des erreurs : ajoute 2>/dev/null." },
        { re: '\\|\\s*grep', msg: "Un tube ne transmet que la sortie standard : les erreurs s'afficheraient quand même. Utilise 2>/dev/null." }
      ],
      src: 'TP1 ex.24', level: 3 },

    /* ---------- alias et .bashrc ---------- */
    { id: 'c1-x-037',
      prompt: 'Crée une commande la qui liste tous les fichiers d\'un répertoire, y compris les cachés (ls -a).',
      answers: ["alias la='ls -a'"],
      hint: "alias nom='commande', sans espace autour du =.",
      explain: "alias la='ls -a' crée le raccourci la. Les guillemets sont obligatoires car la commande contient un espace. Valable dans ce terminal seulement.",
      mistakes: [
        { re: '\\s=|=\\s', msg: "Pas d'espace autour du = dans un alias." },
        { re: '^alias\\s+la=ls\\s+-a$', msg: "Sans guillemets, l'espace coupe la définition : bash répond « alias: -a: not found ». Écris alias la='ls -a'." },
        { re: '^la=', msg: "Il manque le mot-clé alias : alias la='ls -a'." }
      ],
      src: 'TP1 ex.18', level: 2 },

    { id: 'c1-x-038',
      prompt: "Rends l'alias la permanent : ajoute la ligne alias la='ls -a' à la fin de ton ~/.bashrc, en une seule commande (sans éditeur).",
      context: 'Tu es dans ~/Test.',
      answers: ["echo \"alias la='ls -a'\" >> ~/.bashrc", "echo \"alias la='ls -a'\" >> /home/etudiant/.bashrc"],
      hint: 'echo du texte entre guillemets doubles, puis la redirection qui AJOUTE.',
      explain: "echo \"…\" produit la ligne de texte ; >> ~/.bashrc l'ajoute à la fin du fichier. Elle sera prise en compte dans les nouveaux terminaux.",
      mistakes: [
        { re: '[^>]>\\s*\\S*\\.bashrc', msg: "Un seul > ÉCRASERAIT tout ton .bashrc ! Pour ajouter une ligne : >>." },
        { re: '^alias', msg: "Taper l'alias ne le rend pas permanent : il faut l'ÉCRIRE dans ~/.bashrc (echo … >> ~/.bashrc)." },
        { re: '>>\\s*\\.bashrc', msg: "Tu es dans ~/Test : .bashrc désignerait ~/Test/.bashrc. Utilise ~/.bashrc." }
      ],
      src: 'TP1 ex.21', level: 3 },

    /* ---------- Paquets ---------- */
    { id: 'c1-x-039',
      prompt: 'Mets à jour la liste des paquets disponibles.',
      context: 'Debian/Ubuntu ; tu es membre du groupe sudo.',
      answers: ['sudo apt update', 'sudo apt-get update'],
      hint: 'Droits root + apt + rafraîchir la liste.',
      explain: "sudo donne les droits root ; apt update télécharge la liste à jour des paquets depuis les dépôts (sans rien installer).",
      mistakes: [
        { re: 'upgrade', msg: "upgrade INSTALLE les mises à jour ; update ne fait que rafraîchir la liste des paquets." },
        { re: '^apt', msg: "Mettre à jour la liste des paquets demande les droits root : préfixe avec sudo." }
      ],
      src: 'TP1 ex.25', level: 1 },

    { id: 'c1-x-040',
      prompt: 'Affiche la fiche descriptive du paquet tree (version, dépendances…).',
      answers: ['apt show tree', 'apt-cache show tree'],
      hint: 'apt + la sous-commande qui « montre » un paquet.',
      explain: "apt show tree affiche la version, la taille, les dépendances (Depends) et la description du paquet. Pas besoin de sudo pour consulter.",
      mistakes: [
        { re: 'search', msg: "apt search cherche des paquets par mot-clé ; pour la fiche détaillée d'un paquet : apt show." },
        { re: 'install', msg: "On veut seulement consulter sa description, pas l'installer." },
        { re: '^dpkg', msg: "dpkg -L liste les fichiers d'un paquet déjà installé ; la fiche descriptive, c'est apt show." }
      ],
      src: 'TP1 ex.25', level: 1 },

    { id: 'c1-x-041',
      prompt: 'Installe le paquet tree.',
      context: 'La liste des paquets vient d\'être mise à jour.',
      answers: ['sudo apt install tree', 'sudo apt-get install tree'],
      hint: 'sudo apt + la sous-commande d\'installation.',
      explain: "sudo apt install tree télécharge et installe tree et ses dépendances.",
      mistakes: [
        { re: '^apt\\s+install', msg: "Installer un paquet demande les droits root : sudo apt install tree." },
        { re: '^(sudo\\s+)?apt\\s+tree', msg: "Il manque la sous-commande install." },
        { re: '^(sudo\\s+)?tree', msg: "tree n'est pas encore installé : il faut d'abord sudo apt install tree." }
      ],
      src: 'TP1 ex.25', level: 1 },

    { id: 'c1-x-042',
      prompt: 'Liste tous les fichiers installés par le paquet tree (pour trouver où se trouve l\'exécutable).',
      answers: ['dpkg -L tree'],
      hint: 'dpkg avec l\'option L majuscule.',
      explain: "dpkg -L tree liste les fichiers du paquet : /usr/bin/tree (l'exécutable), sa documentation, sa page de manuel…",
      mistakes: [
        { re: 'dpkg\\s+-l', msg: "-l minuscule liste les PAQUETS installés ; -L majuscule liste les FICHIERS d'un paquet." },
        { re: '^apt\\s+show', msg: "apt show donne la fiche du paquet, pas la liste de ses fichiers : dpkg -L tree." },
        { re: '^which', msg: "which tree donnerait le chemin de l'exécutable seul ; l'exercice demande la liste complète des fichiers du paquet." }
      ],
      src: 'TP1 ex.25', level: 2 },

    { id: 'c1-x-043',
      prompt: 'Désinstalle complètement tree, fichiers de configuration compris.',
      answers: ['sudo apt purge tree', 'sudo apt-get purge tree', 'sudo apt remove --purge tree'],
      hint: 'Pas remove : la sous-commande qui « purge ».',
      explain: "sudo apt purge tree désinstalle le paquet ET supprime ses fichiers de configuration (remove les garderait).",
      mistakes: [
        { re: 'remove\\s+tree', msg: "remove garde les fichiers de configuration ; pour tout supprimer : purge." },
        { re: '^apt', msg: "Désinstaller un paquet demande les droits root : sudo." },
        { re: '^(sudo\\s+)?rm\\s', msg: "Ne supprime jamais un logiciel à la main : passe par le gestionnaire de paquets (apt purge)." }
      ],
      src: 'TP1 ex.25', level: 2 },

    /* ---------- Espace disque ---------- */
    { id: 'c1-x-044',
      prompt: 'Affiche l\'espace disque (taille, utilisé, disponible) de toutes les partitions, en unités lisibles.',
      answers: ['df -h'],
      hint: 'disk free + human readable.',
      explain: "df -h affiche pour chaque partition (système de fichiers) sa taille, l'espace utilisé, l'espace disponible et son point de montage.",
      mistakes: [
        { re: '^du', msg: "du mesure la place occupée par des fichiers/répertoires ; l'espace des partitions, c'est df." },
        { re: '^df$', msg: "Ajoute -h pour des tailles lisibles (G, M) au lieu de blocs de 1 Ko." }
      ],
      src: 'TP1 ex.27', level: 1 },

    { id: 'c1-x-045',
      prompt: 'Affiche les 3 éléments les plus volumineux de ton répertoire personnel, en combinant du, sort et tail.',
      context: 'Tu peux être n\'importe où.',
      answers: ['du -sh ~/* | sort -h | tail -3', 'du -sh ~/* | sort -h | tail -n 3', 'du -sh /home/etudiant/* | sort -h | tail -3', 'du -sh ~/* | sort -rh | head -3', 'du -sh ~/* | sort -rh | head -n 3'],
      hint: 'Taille de chaque élément de ~, tri « humain », puis les 3 dernières lignes.',
      explain: "du -sh ~/* donne la taille de chaque élément de ton home ; sort -h les trie du plus petit au plus gros en comprenant K, M, G ; tail -3 garde les 3 derniers, donc les plus gros.",
      mistakes: [
        { re: 'sort\\s+-(n|rn|nr)\\b', msg: "sort -n ignore les unités K, M, G (2G serait classé avant 900K) : utilise sort -h." },
        { re: 'sort\\s+-h\\s*\\|\\s*head', msg: "Après un tri croissant, les plus gros sont à la FIN : tail -3 (ou sort -rh | head -3)." },
        { re: '^du\\s+-h\\s', msg: "Sans -s, du détaille tous les sous-répertoires ; -s donne un total par élément." }
      ],
      src: 'TP1 ex.27', level: 3 },

    /* ---------- Archives ---------- */
    { id: 'c1-x-046',
      prompt: 'Archive les fichiers fic1, fic2, fic3 et fic4 dans une archive nommée test.tar (en affichant les fichiers traités).',
      answers: ['tar -cvf test.tar fic1 fic2 fic3 fic4', 'tar -cvf test.tar fic?', 'tar -cvf test.tar fic*', 'tar cvf test.tar fic1 fic2 fic3 fic4'],
      hint: 'create + verbose + file, puis le nom de l\'archive, puis les fichiers.',
      explain: "c = créer, v = afficher les fichiers traités, f test.tar = nom de l'archive ; viennent ensuite les fichiers à archiver.",
      mistakes: [
        { re: '^tar\\s+-?[a-z]*x', msg: "x = extraire ; pour CRÉER une archive : c." },
        { re: '^tar\\s+-?cvf\\s+fic', msg: "Le mot qui suit f est le NOM DE L'ARCHIVE : tu écraserais fic1 ! Écris tar -cvf test.tar fic1 …" },
        { re: '^tar\\s+-?c[a-eg-z]*\\s+test\\.tar', msg: "Il manque f (file) : sans lui, tar n'écrit pas dans test.tar." }
      ],
      src: 'TP1 §9, ex.17', level: 2 },

    { id: 'c1-x-047',
      prompt: 'Liste le contenu de l\'archive test.tar sans l\'extraire (et sans utiliser cat).',
      answers: ['tar -tf test.tar', 'tar -tvf test.tar'],
      hint: 't comme list.',
      explain: "tar -tf test.tar : t = lister, f test.tar = l'archive. Ajoute v pour avoir le détail (droits, taille, date).",
      mistakes: [
        { re: '^cat', msg: "cat affiche le contenu brut (en-têtes + données mélangés). tar -tf liste proprement les fichiers." },
        { re: '^tar\\s+-?[a-z]*x', msg: "x extrait l'archive ; on veut seulement lister : t." },
        { re: '^tar\\s+-?t[a-eg-z]*\\s', msg: "Il manque f suivi du nom de l'archive." }
      ],
      src: 'TP1 ex.17', level: 2 },

    { id: 'c1-x-048',
      prompt: 'Crée dans ~/Sauvegardes une archive compressée (gzip) du répertoire Cours, nommée cours_DATE.tar.gz, où DATE est la date du jour au format AAAA-MM-JJ calculée automatiquement.',
      context: 'Tu es dans ton home ; ~/Sauvegardes existe.',
      answers: [
        'tar -czf ~/Sauvegardes/cours_$(date +%F).tar.gz Cours',
        'tar -czvf ~/Sauvegardes/cours_$(date +%F).tar.gz Cours',
        'tar -czf Sauvegardes/cours_$(date +%F).tar.gz Cours',
        'tar -czvf Sauvegardes/cours_$(date +%F).tar.gz Cours',
        'tar -czf ~/Sauvegardes/cours_$(date +%F).tar.gz ~/Cours',
        'tar -czf ~/Sauvegardes/cours_$(date +%Y-%m-%d).tar.gz Cours'
      ],
      hint: 'tar -czf, puis le nom avec $(date +%F), puis le répertoire.',
      explain: "c = créer, z = compresser avec gzip, f = nom de l'archive. $(date +%F) est remplacé par la date du jour (ex. 2026-10-05) : l'archive s'appelle cours_2026-10-05.tar.gz.",
      mistakes: [
        { re: '^tar\\s+-?c(?![a-z]*z)', msg: "Il manque z : sans lui, l'archive n'est pas compressée (simple .tar)." },
        { re: '^(?!.*\\$\\(date)', msg: "Le nom doit contenir $(date +%F) : le shell le remplace par la date du jour." },
        { re: '-[a-z]*f[a-z]+\\s', msg: "f doit être la DERNIÈRE lettre du groupe : le mot qui suit f est le nom de l'archive." }
      ],
      src: 'TP1 ex.28', level: 3 },

    { id: 'c1-x-049',
      prompt: 'Extrais l\'archive ~/Sauvegardes/cours_2026-10-05.tar.gz dans le répertoire ~/Test, sans te déplacer.',
      context: 'Tu es dans ton home.',
      answers: [
        'tar -xzf ~/Sauvegardes/cours_2026-10-05.tar.gz -C ~/Test',
        'tar -xzvf ~/Sauvegardes/cours_2026-10-05.tar.gz -C ~/Test',
        'tar -xf ~/Sauvegardes/cours_2026-10-05.tar.gz -C ~/Test',
        'tar -xvf ~/Sauvegardes/cours_2026-10-05.tar.gz -C ~/Test',
        'tar -xzf Sauvegardes/cours_2026-10-05.tar.gz -C Test',
        'tar -xzf ~/Sauvegardes/cours_2026-10-05.tar.gz -C /home/etudiant/Test'
      ],
      hint: 'x pour extraire, z pour gzip, et l\'option -C pour choisir le répertoire de destination.',
      explain: "x = extraire, z = archive gzip, f = nom de l'archive ; -C ~/Test fait extraire dans ~/Test (qui doit exister). On obtient ~/Test/Cours.",
      mistakes: [
        { re: '^(?!.*-C)', msg: "Sans -C ~/Test, tar extrait dans le répertoire COURANT (ton home)." },
        { re: '^tar\\s+-?c', msg: "c crée une archive ; pour extraire : x." },
        { re: '^tar\\s+-?t', msg: "t liste seulement le contenu ; pour extraire : x." }
      ],
      src: 'TP1 ex.28', level: 3 },

    { id: 'c1-x-050',
      prompt: 'Vérifie que ~/Cours et sa copie ~/Test/Cours sont identiques, fichiers des sous-répertoires compris.',
      context: 'Tu es dans ton home.',
      answers: ['diff -r Cours Test/Cours', 'diff -r ~/Cours ~/Test/Cours', 'diff -r Test/Cours Cours', 'diff -r ~/Test/Cours ~/Cours', 'diff -r /home/etudiant/Cours /home/etudiant/Test/Cours'],
      hint: 'diff avec l\'option récursive.',
      explain: "diff -r compare récursivement les deux arborescences ; s'il n'affiche rien, elles sont identiques.",
      mistakes: [
        { re: '^diff\\s+(?!-r)', msg: "Sans -r, diff ne descend pas dans les sous-répertoires (il signale seulement « Common subdirectories »)." },
        { re: '^cmp', msg: "cmp compare deux fichiers octet par octet ; pour deux arborescences : diff -r." },
        { re: '^ls', msg: "ls -R permettrait de comparer les noms à l'œil, pas le contenu des fichiers : diff -r." }
      ],
      src: 'Cours 1 Mémento · TP1 ex.28', level: 3 }
  ]
});
