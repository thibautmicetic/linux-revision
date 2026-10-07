APP.registerChapter({
  id: 'c2',
  num: 2,
  title: 'Utilisateurs, groupes et permissions',
  subtitle: 'Cours 2 + TP 2',

  /* ================================================================
     SECTIONS (fiches de cours)
     ================================================================ */
  sections: [
    {
      id: 'c2-s-comptes',
      title: '1.1-1.3 Utilisateurs, comptes et /etc/passwd',
      src: 'Cours 2 §1.1-1.3 · TP2 ex.1 et 11',
      html: `
<h3>Un système multi-utilisateur</h3>
<p>Linux est <b>multi-utilisateur</b> : plusieurs personnes et services utilisent la même machine, parfois en même temps. Chaque utilisateur possède :</p>
<ul>
<li>un <b>login</b> (identifiant) ;</li>
<li>un <b>UID</b> (numéro unique) ;</li>
<li>un <b>répertoire personnel</b> (<code>/home/login</code>) ;</li>
<li>un <b>shell</b>.</li>
</ul>
<p>Chaque <b>processus</b> s'exécute au nom d'un utilisateur : il n'a <b>que les droits de cet utilisateur</b>. Objectif : isoler les utilisateurs les uns des autres et protéger le système contre les erreurs et les attaques.</p>
<pre class="code">$ whoami
etudiant
$ id
uid=1000(etudiant) gid=1000(etudiant) groupes=1000(etudiant),27(sudo)
$ ps -o user,pid,cmd
USER       PID  CMD
etudiant  2143  bash
etudiant  2210  ps -o user,pid,cmd</pre>
<h3>Trois types de comptes</h3>
<table class="tbl">
<tr><th>Type</th><th>UID</th><th>Rôle</th></tr>
<tr><td><b>root</b></td><td>0</td><td>Super-utilisateur : il a tous les droits et n'est pas soumis aux permissions. Réservé à l'administration.</td></tr>
<tr><td><b>Comptes système</b></td><td>1 à 999</td><td>Utilisés par les services (www-data, sshd, mysql…). Pas de connexion interactive, pas de mot de passe.</td></tr>
<tr><td><b>Utilisateurs</b></td><td>≥ 1000</td><td>Les comptes des personnes : répertoire personnel dans /home, shell interactif (bash).</td></tr>
</table>
<div class="callout key"><b>Bonne pratique</b> Ne jamais travailler en root. On utilise <code>sudo</code> ponctuellement, pour <b>une seule</b> commande d'administration.</div>
<h3>Le fichier /etc/passwd</h3>
<p>Chaque compte est décrit par une ligne de <code>/etc/passwd</code>, composée de <b>7 champs</b> séparés par « : ».</p>
<pre class="code">etudiant:x:1000:1000:Etudiant ESEO:/home/etudiant:/bin/bash</pre>
<table class="tbl">
<tr><th>#</th><th>Champ</th><th>Exemple</th></tr>
<tr><td>1</td><td>Login</td><td>etudiant</td></tr>
<tr><td>2</td><td>Mot de passe (toujours <code>x</code> : il est stocké ailleurs)</td><td>x</td></tr>
<tr><td>3</td><td>UID</td><td>1000</td></tr>
<tr><td>4</td><td>GID du groupe principal</td><td>1000</td></tr>
<tr><td>5</td><td>Commentaire (nom complet)</td><td>Etudiant ESEO</td></tr>
<tr><td>6</td><td>Répertoire personnel</td><td>/home/etudiant</td></tr>
<tr><td>7</td><td>Shell</td><td>/bin/bash</td></tr>
</table>
<div class="grid2">
<div class="mini"><h4>/etc/passwd</h4><p>Lisible par tout le monde (<code>-rw-r--r-- root root</code>) : il ne contient <b>pas</b> les mots de passe (le champ vaut x).</p></div>
<div class="mini"><h4>/etc/shadow</h4><p>Contient les mots de passe <b>hachés</b> : il n'est lisible que par root (sous Debian/Ubuntu : <code>-rw-r----- root shadow</code>).</p></div>
</div>
<pre class="code">$ grep etudiant /etc/passwd
etudiant:x:1000:1000:Etudiant ESEO:/home/etudiant:/bin/bash
$ cat /etc/shadow
cat: /etc/shadow: Permission non accordée</pre>
<div class="callout info"><b>nologin</b> Le shell <code>/usr/sbin/nologin</code> interdit la connexion interactive : c'est celui des comptes système.</div>
<div class="callout tip"><b>TP2 ex.1</b> <code>id</code> donne ton UID, ton groupe principal (<code>gid=…</code>, groupe propriétaire par défaut de tes fichiers) et la liste de tes groupes ; <code>groups</code> n'affiche que les noms. Note ton groupe principal : il sert à la fin du TP pour tout restaurer.</div>
`
    },
    {
      id: 'c2-s-groupes',
      title: '1.4-1.5 Groupes et gestion des comptes',
      src: 'Cours 2 §1.4-1.5 · TP2 ex.1, 7, 8 et 13',
      html: `
<h3>Les groupes</h3>
<p>Un <b>groupe</b> réunit des utilisateurs qui doivent partager les mêmes droits (une équipe, un projet, les administrateurs…).</p>
<div class="grid2">
<div class="mini"><h4>Groupe principal</h4><p>Défini dans <code>/etc/passwd</code> (4e champ, GID). C'est le groupe attribué aux fichiers que l'on crée. Souvent un groupe du même nom que l'utilisateur (etudiant).</p></div>
<div class="mini"><h4>Groupes secondaires</h4><p>Définis dans <code>/etc/group</code>. Un utilisateur peut appartenir à plusieurs groupes (sudo, projet…).</p></div>
</div>
<p>Format d'une ligne de <code>/etc/group</code> : <code>nom:x:GID:membre1,membre2</code></p>
<pre class="code">$ groups
etudiant sudo
$ getent group sudo
sudo:x:27:etudiant
$ grep projet /etc/group
projet:x:1002:toto,etudiant</pre>
<table class="tbl">
<tr><th>Commande</th><th>Affiche</th></tr>
<tr><td><code>id</code></td><td>UID, GID principal et tous les groupes (noms et numéros)</td></tr>
<tr><td><code>groups</code></td><td>les noms de mes groupes seulement</td></tr>
<tr><td><code>getent group projet</code></td><td>la ligne du groupe projet, donc ses membres</td></tr>
</table>
<h3>Gérer comptes et groupes</h3>
<table class="tbl">
<tr><th>Commande</th><th>Rôle</th></tr>
<tr><td><code>sudo adduser toto</code></td><td>crée l'utilisateur toto et son répertoire personnel (demande un mot de passe)</td></tr>
<tr><td><code>sudo passwd toto</code></td><td>change le mot de passe de toto (<code>passwd</code> seul : le sien)</td></tr>
<tr><td><code>sudo deluser --remove-home toto</code></td><td>supprime toto et ses fichiers personnels</td></tr>
<tr><td><code>sudo groupadd projet</code></td><td>crée le groupe projet</td></tr>
<tr><td><code>sudo usermod -aG projet toto</code></td><td>ajoute toto au groupe projet, sans le retirer de ses autres groupes</td></tr>
<tr><td><code>sudo groupdel projet</code></td><td>supprime le groupe projet</td></tr>
<tr><td><code>su - toto</code></td><td>ouvre une session en tant que toto (le mot de passe <b>de toto</b> est demandé) ; <code>exit</code> pour revenir</td></tr>
<tr><td><code>newgrp projet</code></td><td>ouvre un shell qui tient compte d'un groupe tout juste ajouté ; <code>exit</code> pour le quitter</td></tr>
</table>
<div class="callout warn"><b>Piège : -G sans -a</b> <code>sudo usermod -G projet toto</code> <b>remplace</b> tous les groupes secondaires de toto par projet (il perdrait par exemple sudo). Toujours <code>-aG</code> (a = append, ajouter).</div>
<div class="callout info"><b>Pourquoi newgrp ?</b> Les groupes d'un utilisateur sont lus à l'ouverture de session. Juste après <code>usermod -aG</code>, <code>id</code> n'affiche pas encore le nouveau groupe : il faut se reconnecter, ou taper <code>newgrp projet</code>.</div>
<div class="callout tip"><b>sudo ou su ?</b> <code>sudo commande</code> exécute UNE commande en root et demande <b>ton</b> mot de passe (il faut être membre du groupe sudo). <code>su - toto</code> ouvre un shell complet de toto et demande le mot de passe <b>de toto</b>.</div>
`
    },
    {
      id: 'c2-s-lire',
      title: '2.1-2.2 Catégories, droits et lecture de ls -l',
      src: 'Cours 2 §2.1-2.2 · TP2 ex.2 et 3',
      html: `
<h3>Trois catégories, trois droits</h3>
<p>Chaque fichier a un <b>propriétaire</b> et un <b>groupe propriétaire</b>. Ses permissions tiennent en <b>9 bits</b> : 3 droits pour chacune des 3 catégories.</p>
<div class="grid2">
<div class="mini"><h4>Catégories</h4><p><code>u</code> user : le propriétaire<br><code>g</code> group : les membres du groupe propriétaire<br><code>o</code> others : tous les autres<br><code>a</code> all : les trois à la fois (pour chmod)</p></div>
<div class="mini"><h4>Droits</h4><p><code>r</code> lecture = <b>4</b><br><code>w</code> écriture = <b>2</b><br><code>x</code> exécution = <b>1</b></p></div>
</div>
<p>Un droit absent est représenté par un tiret : <code>r-x</code> signifie lecture et exécution, sans écriture.</p>
<h3>Lire le résultat de ls -l</h3>
<pre class="code">$ ls -l script.sh
-rwxr-x---  1  alice  dev  2048  oct. 5 10:12  script.sh</pre>
<div class="flow"><span>- : type</span><span>rwx : propriétaire (alice)</span><span>r-x : groupe (dev)</span><span>--- : autres</span></div>
<ul>
<li><b>Type</b> (1er caractère) : <code>-</code> fichier ordinaire, <code>d</code> répertoire, <code>l</code> lien symbolique.</li>
<li><code>rwx</code> : alice peut lire, modifier et exécuter le script.</li>
<li><code>r-x</code> : les membres de dev peuvent le lire et l'exécuter.</li>
<li><code>---</code> : les autres utilisateurs n'ont aucun droit.</li>
</ul>
<table class="tbl">
<tr><th>Champ</th><th>Valeur</th></tr>
<tr><td>nombre de liens</td><td>1</td></tr>
<tr><td>propriétaire</td><td>alice</td></tr>
<tr><td>groupe</td><td>dev</td></tr>
<tr><td>taille (octets)</td><td>2048</td></tr>
<tr><td>date de modification</td><td>oct. 5 10:12</td></tr>
</table>
<div class="callout tip"><b>ls -ld</b> <code>ls -l rep</code> liste le <b>contenu</b> du répertoire. Pour voir les droits du répertoire <b>lui-même</b> : <code>ls -ld rep</code> (TP2 ex.3 : <code>ls -ld test</code>).</div>
<pre class="code">$ mkdir test
$ echo "une phrase" &gt; test/essai
$ ls -ld test
drwxr-xr-x 2 etudiant etudiant 4096 oct. 5 10:20 test
$ ls -l test
-rw-r--r-- 1 etudiant etudiant 11 oct. 5 10:21 essai</pre>
<p>Avec le umask standard 022 : un nouveau répertoire est en <code>rwxr-xr-x</code>, un nouveau fichier en <code>rw-r--r--</code> (voir 3.5).</p>
`
    },
    {
      id: 'c2-s-repertoires',
      title: '2.3-2.4 Droits sur les fichiers et sur les répertoires',
      src: 'Cours 2 §2.3-2.4 · TP2 ex.4',
      html: `
<h3>Même lettre, sens différent</h3>
<table class="tbl">
<tr><th>Droit</th><th>Sur un fichier</th><th>Sur un répertoire</th></tr>
<tr><td><b>r</b> (4)</td><td>lire le contenu du fichier (cat, less, cp…)</td><td>lister les noms des éléments qu'il contient (ls)</td></tr>
<tr><td><b>w</b> (2)</td><td>modifier le contenu du fichier</td><td>créer, supprimer ou renommer des éléments à l'intérieur</td></tr>
<tr><td><b>x</b> (1)</td><td>exécuter le fichier (programme ou script)</td><td>le traverser : y entrer avec cd et accéder à ses éléments</td></tr>
</table>
<p>Pour accéder à <code>/home/alice/cours/tp2.txt</code>, il faut le droit <b>x</b> sur <code>/</code>, <code>/home</code>, <code>/home/alice</code> et <code>/home/alice/cours</code>, puis <b>r</b> sur <code>tp2.txt</code>.</p>
<h3>Combinaisons à connaître</h3>
<div class="grid2">
<div class="mini"><h4>r sans x</h4><p>On voit les noms des fichiers, mais on ne peut ni les ouvrir ni entrer dans le répertoire. <code>ls -l</code> affiche des « ? ».</p></div>
<div class="mini"><h4>x sans r</h4><p>On ne peut pas lister le contenu, mais on peut ouvrir un fichier dont on connaît le nom exact (<code>cat rep/essai</code>).</p></div>
<div class="mini"><h4>w (avec x)</h4><p>On peut créer, renommer et supprimer des éléments, <b>même un fichier protégé en écriture</b>.</p></div>
<div class="mini"><h4>w sans x</h4><p>Sans droit de traversée, impossible d'atteindre les éléments : on ne peut ni créer ni supprimer.</p></div>
</div>
<div class="callout key"><b>À retenir</b> Modifier le <b>contenu</b> d'un fichier dépend des droits <b>du fichier</b> ; le <b>créer, le renommer ou le supprimer</b> dépend des droits <b>du répertoire</b> qui le contient.</div>
<h3>TP2 ex.4 : ce qu'on observe</h3>
<table class="tbl">
<tr><th>Manipulation</th><th>Résultat</th><th>Conclusion</th></tr>
<tr><td>Dans test : <code>chmod u-r .</code> puis <code>ls</code>, <code>cat essai</code></td><td>ls refusé ; cat essai (et ./essai) fonctionne</td><td>r = lister ; accéder à un nom connu ne demande que x</td></tr>
<tr><td>Dans test : <code>touch nouveau</code>, <code>mkdir sstest</code>, <code>chmod u-w nouveau .</code> ; modifier nouveau ; puis <code>chmod u+w .</code>, modifier puis supprimer nouveau</td><td>la modification reste refusée ; la suppression réussit (rm demande confirmation : « fichier protégé en écriture »)</td><td>contenu = droits du fichier ; suppression = droit w du répertoire</td></tr>
<tr><td>Depuis ~ : <code>chmod u-x test</code> puis <code>cd test</code>, <code>touch test/f</code>, <code>ls test</code></td><td>cd, création, suppression refusés ; ls montre au mieux les noms (avec erreurs, « ? » en ls -l)</td><td>x = traverser le répertoire et accéder à ses éléments</td></tr>
<tr><td>Dans test : <code>chmod u-x .</code> puis <code>touch f</code>, <code>cd sstest</code>, <code>ls</code></td><td>tout est refusé, même depuis l'intérieur</td><td>les droits du répertoire courant s'appliquent même quand on est dedans</td></tr>
<tr><td>Rétablir : <code>chmod u+x ~/test</code></td><td>OK</td><td><code>chmod u+x .</code> échouerait : sans x, même « . » ne peut plus être résolu</td></tr>
</table>
`
    },
    {
      id: 'c2-s-decision',
      title: '2.5-2.6 Comment le système décide · scripts exécutables',
      src: 'Cours 2 §2.5-2.6 · TP2 ex.3, 9 et 10',
      html: `
<h3>L'algorithme de décision</h3>
<p>À chaque accès, le système détermine <b>la</b> catégorie qui s'applique à vous, puis vérifie le droit demandé <b>dans cette seule catégorie</b>.</p>
<div class="flow"><span>root ? → accès accordé</span><span>propriétaire ? → droits u</span><span>membre du groupe ? → droits g</span><span>sinon → droits o</span></div>
<div class="callout warn"><b>Piège classique</b> Une seule catégorie s'applique : la <b>première</b> qui correspond. Si un fichier est en <code>---rwx---</code>, son propriétaire n'a <b>aucun droit</b>, même s'il est membre du groupe ! root, lui, ignore les permissions r et w (pour exécuter un fichier, il lui faut quand même au moins un x).</div>
<h3>Exemple : un script exécutable</h3>
<ul>
<li><code>./script</code> demande le droit <b>x</b> sur le fichier.</li>
<li>Un script est <b>lu</b> par son interpréteur (bash) : il faut aussi le droit <b>r</b>. Il faut donc <b>r et x</b>.</li>
<li><code>bash script.sh</code> fonctionne avec le seul droit <b>r</b> : c'est bash qui est exécuté, le script est seulement lu.</li>
<li>La première ligne <code>#!/bin/bash</code> (<b>shebang</b>) indique quel interpréteur utiliser.</li>
<li>Un fichier créé n'a <b>jamais</b> le droit x par défaut : il faut l'ajouter avec chmod.</li>
</ul>
<pre class="code">$ echo 'echo "Bonjour"' &gt; essai
$ ./essai
bash: ./essai: Permission non accordée
$ chmod u+x essai
$ ./essai
Bonjour
$ chmod u-r essai
$ ./essai
bash: ./essai: Permission non accordée
# x seul ne suffit pas pour un script</pre>
<h4>TP2 ex.3 en bref</h4>
<ol>
<li><code>mkdir test</code>, <code>echo "une phrase" &gt; test/essai</code> ; <code>ls -ld test</code> → drwxr-xr-x ; <code>ls -l test/essai</code> → -rw-r--r--.</li>
<li><code>chmod u-rw essai</code> : <code>cat essai</code> et <code>echo autre &gt; essai</code> sont refusés.</li>
<li><code>chmod u+w essai</code>, on y écrit la ligne <code>echo "Ceci est un essai"</code>, puis <code>chmod u+x essai</code> et <code>./essai</code> → <b>Permission non accordée</b> : r manque, bash ne peut pas lire le script.</li>
<li><code>chmod u+r essai</code> puis <code>./essai</code> → affiche « Ceci est un essai ». Pour un résultat plus intéressant : un vrai script avec shebang et plusieurs commandes (bonjour.sh).</li>
</ol>
<h4>TP2 ex.10 : bonjour.sh</h4>
<pre class="code">#!/bin/bash
echo "Bonjour $USER, nous sommes le $(date +%d/%m/%Y)"</pre>
<ul>
<li><code>bash bonjour.sh</code> fonctionne (le fichier, en rw-r--r--, est lisible) ; <code>./bonjour.sh</code> échoue (pas de x).</li>
<li><code>chmod u+x bonjour.sh</code> : exécutable par vous seul, <code>./bonjour.sh</code> marche. Le shebang indique au système de le faire lire par /bin/bash.</li>
<li>Exécutable par tous mais modifiable par vous seul : <code>chmod 755 bonjour.sh</code> (rwxr-xr-x) — les autres ont besoin de r <b>et</b> x.</li>
</ul>
<h4>TP2 ex.9 : lire des permissions (corrigé)</h4>
<table class="tbl">
<tr><th>ls -l</th><th>Octal</th></tr>
<tr><td><code>-rwxr-x---  alice dev    script.sh</code></td><td>750</td></tr>
<tr><td><code>drwxr-xr-x  bob   users  partage</code></td><td>755</td></tr>
<tr><td><code>-rw-rw-r--  alice dev    notes.txt</code></td><td>664</td></tr>
<tr><td><code>drwx------  alice alice  prive</code></td><td>700</td></tr>
<tr><td><code>-r--r--r--  root  root   lisezmoi</code></td><td>444</td></tr>
</table>
<p>carol est membre du groupe <b>dev</b> uniquement :</p>
<table class="tbl">
<tr><th>Question</th><th>Réponse</th><th>Justification</th></tr>
<tr><td>(a) exécuter script.sh</td><td>Oui</td><td>catégorie groupe (dev) : r-x, donc lecture + exécution, ce qu'il faut pour un script</td></tr>
<tr><td>(b) modifier notes.txt</td><td>Oui</td><td>catégorie groupe (dev) : rw-</td></tr>
<tr><td>(c) lister prive</td><td>Non</td><td>ni propriétaire ni membre du groupe alice → autres : ---</td></tr>
<tr><td>(d) créer un fichier dans partage</td><td>Non</td><td>pas membre de users → autres : r-x, pas de w</td></tr>
<tr><td>(e) supprimer lisezmoi dans partage</td><td>Non</td><td>supprimer dépend du w sur partage (autres : r-x), pas des droits de lisezmoi</td></tr>
</table>
`
    },
    {
      id: 'c2-s-chmod',
      title: '3.1-3.4 chmod : notations symbolique et octale',
      src: 'Cours 2 §3.1-3.4 · TP2 ex.3 et 6',
      html: `
<h3>chmod en notation symbolique</h3>
<div class="flow"><span>qui ? u g o a</span><span>opération + - =</span><span>droits r w x</span><span>fichier(s)</span></div>
<p>Plusieurs modifications se séparent par des virgules, <b>sans espace</b> : <code>chmod u+x,g-w fic</code>.</p>
<table class="tbl">
<tr><th>Exemple</th><th>Effet</th></tr>
<tr><td><code>chmod u+x script.sh</code></td><td>ajoute l'exécution au propriétaire</td></tr>
<tr><td><code>chmod g-w rapport.txt</code></td><td>retire l'écriture au groupe</td></tr>
<tr><td><code>chmod o+x fic</code></td><td>donne l'exécution aux autres</td></tr>
<tr><td><code>chmod u=rx fic</code></td><td>fixe exactement r-x pour le propriétaire</td></tr>
<tr><td><code>chmod o= prive</code></td><td>retire tous les droits aux autres</td></tr>
<tr><td><code>chmod u=rw,go=r fic</code></td><td>fixe exactement rw-r--r--</td></tr>
<tr><td><code>chmod ug-wx fic</code></td><td>combinaison : retire w et x au propriétaire et au groupe</td></tr>
<tr><td><code>chmod a+r fic</code></td><td>lecture pour tout le monde</td></tr>
<tr><td><code>chmod -R g+r dossier</code></td><td>récursif : le dossier et tout son contenu</td></tr>
</table>
<div class="callout info"><b>+ / - / =</b> <code>+</code> et <code>-</code> ne touchent qu'aux droits cités et conservent les autres ; <code>=</code> remplace entièrement les droits de la catégorie (<code>g=w</code> sur r-x donne -w-).</div>
<h3>La notation octale</h3>
<p>r = 4, w = 2, x = 1 : on additionne les valeurs de chaque catégorie pour obtenir un chiffre de 0 à 7, dans l'ordre <b>propriétaire, groupe, autres</b>.</p>
<table class="tbl">
<tr><th>Octal</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th></tr>
<tr><td>Droits</td><td>---</td><td>--x</td><td>-w-</td><td>-wx</td><td>r--</td><td>r-x</td><td>rw-</td><td>rwx</td></tr>
</table>
<pre class="code"># rwx r-x r-- → (4+2+1)(4+0+1)(4+0+0) = 754
$ chmod 754 fic</pre>
<h3>Convertir pas à pas</h3>
<table class="tbl">
<tr><th>Symbolique</th><th>Calcul</th><th>Octal</th><th>Usage</th></tr>
<tr><td>rw-r--r--</td><td>(4+2)(4)(4)</td><td>644</td><td>fichier standard</td></tr>
<tr><td>rwxr-x---</td><td>(4+2+1)(4+1)(0)</td><td>750</td><td>répertoire partagé avec le groupe</td></tr>
<tr><td>rw-------</td><td>(4+2)(0)(0)</td><td>600</td><td>fichier privé</td></tr>
<tr><td>r-x-wxr--</td><td>(4+1)(2+1)(4)</td><td>534</td><td>exemple du TP (ex.6)</td></tr>
</table>
<p><b>Méthode inverse</b> : on décompose chaque chiffre. 640 → 6 = 4+2 → rw- ; 4 → r-- ; 0 → --- ; donc <code>640 = rw-r-----</code>.</p>
<div class="callout warn"><b>Attention</b> <code>chmod 640</code> fixe <b>tous</b> les droits d'un coup (les droits initiaux n'ont aucune importance), alors que <code>chmod g+r</code> ne modifie qu'un seul droit et conserve les autres.</div>
<h3>Les droits usuels</h3>
<table class="tbl">
<tr><th>Octal</th><th>Droits</th><th>Usage</th></tr>
<tr><td>644</td><td>rw-r--r--</td><td>fichier standard : lisible par tous, modifiable par son propriétaire</td></tr>
<tr><td>600</td><td>rw-------</td><td>fichier privé : clé SSH, fichier de mots de passe, données personnelles</td></tr>
<tr><td>755</td><td>rwxr-xr-x</td><td>répertoire ou script utilisable par tous, modifiable par le propriétaire</td></tr>
<tr><td>700</td><td>rwx------</td><td>répertoire privé : personne d'autre ne peut y entrer</td></tr>
<tr><td>750</td><td>rwxr-x---</td><td>répertoire partagé en lecture avec le groupe uniquement</td></tr>
<tr><td>777</td><td>rwxrwxrwx</td><td><b>à éviter</b> : n'importe qui peut tout modifier ou supprimer</td></tr>
</table>
<h3>TP2 ex.6 : conversions (corrigé)</h3>
<table class="tbl">
<tr><th>Commande</th><th>Droits initiaux</th><th>Raisonnement</th><th>Résultat</th></tr>
<tr><td>(a) <code>chmod u=rx,g=wx,o=r fic</code></td><td>sans importance (= fixe tout)</td><td>r-x = 5 ; -wx = 3 ; r-- = 4</td><td>r-x-wxr-- → <b>chmod 534 fic</b></td></tr>
<tr><td>(b) <code>chmod uo+w,g-rx fic</code></td><td>r--r-x---</td><td>u : r-- + w = rw- ; g : r-x − rx = --- ; o : --- + w = -w-</td><td>rw-----w- → <b>chmod 602 fic</b></td></tr>
<tr><td>(c) <code>chmod 653 fic</code></td><td>711 (sans importance)</td><td>6 = rw- ; 5 = r-x ; 3 = -wx</td><td>rw-r-x-wx → <b>chmod u=rw,g=rx,o=wx fic</b></td></tr>
<tr><td>(d) <code>chmod u+x,g=w,o-r fic</code></td><td>r--r-x---</td><td>u : r-- + x = r-x ; g = -w- (fixé) ; o : --- − r = ---</td><td>r-x-w---- → <b>chmod 520 fic</b></td></tr>
</table>
<p><b>Question 2</b> : <code>chmod 653 fic</code> puis <code>chmod u-r,g+w,o-r fic</code>. 653 = rw-r-x-wx ; u-r → -w- ; g+w → rwx ; o-r → -wx (il n'y avait pas de r). Résultat <code>-w-rwx-wx</code>, donc une commande unique : <code>chmod 273 fic</code>.</p>
`
    },
    {
      id: 'c2-s-umask',
      title: '3.5-3.6 Les droits par défaut : umask',
      src: 'Cours 2 §3.5-3.6 · TP2 ex.5',
      html: `
<h3>Principe</h3>
<p>À la création, le système part de droits <b>maximaux</b>, puis retire ceux indiqués par le masque : l'<b>umask</b>.</p>
<table class="tbl">
<tr><th></th><th>Base</th><th>umask 022 (retiré)</th><th>Résultat</th></tr>
<tr><td>Fichier</td><td>666 rw-rw-rw-</td><td>----w--w-</td><td><b>644</b> rw-r--r--</td></tr>
<tr><td>Répertoire</td><td>777 rwxrwxrwx</td><td>----w--w-</td><td><b>755</b> rwxr-xr-x</td></tr>
</table>
<div class="callout key"><b>À retenir</b> Un fichier ne reçoit <b>jamais</b> le droit x par défaut, puisque la base est 666. Le umask indique les droits <b>retirés</b>, pas les droits donnés.</div>
<div class="callout info"><b>Retirer, pas soustraire</b> Le masque retire des droits : un droit absent de la base reste absent. Avec umask 033, un nouveau fichier est en 644 (rw-r--r--) et non « 633 » : il n'y avait pas de x à retirer, seuls les w du groupe et des autres disparaissent.</div>
<h3>Afficher et modifier</h3>
<pre class="code">$ umask
0022
$ umask -S
u=rwx,g=rx,o=rx
$ umask 077
$ touch secret ; mkdir coffre
$ ls -ld secret coffre
drwx------ 2 etudiant etudiant 4096 ... coffre
-rw------- 1 etudiant etudiant    0 ... secret</pre>
<ul>
<li><code>umask</code> : affiche le masque en octal.</li>
<li><code>umask -S</code> : l'affiche en symbolique, en indiquant les droits <b>conservés</b>.</li>
<li><code>umask 027</code> : modifie le masque en octal.</li>
<li><code>umask o-r</code> : même syntaxe que chmod, qui décrit alors les droits <b>autorisés</b>. Ici on retire aux autres la lecture des futurs fichiers (0022 devient 0026).</li>
</ul>
<h3>umask en pratique</h3>
<table class="tbl">
<tr><th>umask</th><th>Fichier</th><th>Répertoire</th><th>Usage</th></tr>
<tr><td>022</td><td>644 rw-r--r--</td><td>755 rwxr-xr-x</td><td>réglage standard</td></tr>
<tr><td>002</td><td>664 rw-rw-r--</td><td>775 rwxrwxr-x</td><td>travail en groupe (Ubuntu)</td></tr>
<tr><td>027</td><td>640 rw-r-----</td><td>750 rwxr-x---</td><td>équilibré : rien pour les autres</td></tr>
<tr><td>077</td><td>600 rw-------</td><td>700 rwx------</td><td>très privé</td></tr>
</table>
<div class="callout warn"><b>Durée de vie</b> Comme un alias, un umask modifié ne vaut que pour le <b>terminal courant</b>. Pour le rendre permanent, on l'ajoute à <code>~/.bashrc</code> : <code>echo "umask 027" &gt;&gt; ~/.bashrc</code> (surtout pas un seul &gt;, qui écraserait le fichier).</div>
<h3>TP2 ex.5 (corrigé)</h3>
<ol>
<li>Noter le umask d'origine : <code>umask</code> (par exemple 0022).</li>
<li>Très restrictif (personne d'autre ne lit, n'écrit ni ne traverse) : <code>umask 077</code> → fichier rw-------, répertoire rwx------.</li>
<li>Très permissif (tout le monde lit et traverse, vous seul écrivez) : <code>umask 022</code> → rw-r--r-- et rwxr-xr-x.</li>
<li>Équilibré (vous : tout ; groupe : lecture et traversée ; autres : rien) : <code>umask 027</code> → rw-r----- et rwxr-x---.</li>
<li>Rétablir la valeur notée : <code>umask 0022</code> (ou fermer le terminal).</li>
</ol>
`
    },
    {
      id: 'c2-s-chown',
      title: '4.1-4.4 chown, chgrp et travail en groupe',
      src: 'Cours 2 §4.1-4.4 · TP2 ex.7 et 8',
      html: `
<h3>chown : changer le propriétaire</h3>
<ul>
<li><code>chown</code> change le propriétaire d'un fichier, et éventuellement son groupe.</li>
<li><b>Réservé à root</b> : on l'utilise avec sudo. Sinon, n'importe qui pourrait « donner » ses fichiers à un autre utilisateur.</li>
<li>Syntaxes : <code>chown toto fic</code> · <code>chown toto:projet fic</code> · <code>chown :projet fic</code></li>
<li><code>-R</code> applique le changement à un répertoire et à tout son contenu.</li>
<li>Conséquence : l'ancien propriétaire relève désormais du groupe ou des autres, et ne peut plus changer les droits.</li>
</ul>
<pre class="code">$ chmod 600 essai
$ sudo chown toto essai
$ ls -l essai
-rw------- 1 toto etudiant 12 essai
$ cat essai
cat: essai: Permission non accordée
$ sudo chown -R $USER test
# on redevient propriétaire de test et de tout son contenu</pre>
<h3>chgrp : changer le groupe</h3>
<ul>
<li><code>chgrp projet fic</code> change <b>uniquement</b> le groupe propriétaire (<code>-R</code> pour un répertoire et son contenu).</li>
<li>Sans sudo si vous êtes propriétaire du fichier <b>et</b> membre du groupe visé.</li>
<li>Équivalent : <code>chown :projet fic</code> donne le même résultat.</li>
<li>Intérêt : combiné à <code>chmod g+rw</code>, il permet de partager un fichier avec une équipe, sans l'ouvrir à tout le monde.</li>
</ul>
<pre class="code">$ id
uid=1000(etudiant) ... ,1002(projet)
$ chgrp projet rapport.txt
$ chmod g+w rapport.txt
$ ls -l rapport.txt
-rw-rw-r-- 1 etudiant projet ... rapport.txt
$ chgrp root rapport.txt
chgrp: ... Opération non permise</pre>
<h3>Récapitulatif</h3>
<table class="tbl">
<tr><th>Commande</th><th>Ce qu'elle modifie</th><th>Qui peut l'utiliser</th><th>Exemple</th></tr>
<tr><td>chmod</td><td>les droits (ce que chaque catégorie peut faire)</td><td>le propriétaire du fichier, ou root</td><td><code>chmod 640 notes.txt</code></td></tr>
<tr><td>chown</td><td>le propriétaire (et éventuellement le groupe)</td><td>root uniquement (sudo)</td><td><code>sudo chown toto:projet fic</code></td></tr>
<tr><td>chgrp</td><td>le groupe propriétaire</td><td>le propriétaire, vers un groupe dont il est membre ; ou root</td><td><code>chgrp projet fic</code></td></tr>
</table>
<div class="callout warn"><b>Après des tests avec chown</b> On restaure toujours les propriétaires d'origine (ex. <code>sudo chown -R etudiant:etudiant test</code>) : sinon on perd l'accès à ses propres fichiers.</div>
<h3>Travailler en groupe</h3>
<div class="flow"><span>1. Créer le groupe : sudo groupadd projet</span><span>2. Ajouter les membres : sudo usermod -aG projet alice</span><span>3. Donner le répertoire au groupe : sudo chown root:projet /srv/projet ; sudo chmod 770 /srv/projet</span><span>4. Se reconnecter, ou newgrp projet</span></div>
<div class="callout warn"><b>Piège</b> Un fichier créé par alice appartient à <b>son groupe principal</b>, pas au groupe projet : bob ne peut donc pas le modifier. La solution est le droit spécial <b>setgid</b> (section 5).</div>
<h3>TP2 ex.7 et 8 : points clés</h3>
<ul>
<li>Après <code>sudo chown toto test</code>, etudiant ne peut plus créer de fichier dans test : il n'est plus propriétaire et relève du groupe etudiant (r-x), sans w.</li>
<li>Après <code>chmod 600 test/essai</code> puis <code>sudo chown toto test/essai</code>, <code>cat test/essai</code> est refusé (catégorie groupe : ---) et <code>chmod</code> aussi (seul le propriétaire ou root peut changer les droits).</li>
<li>chown change <b>qui</b> possède le fichier (donc quelle catégorie s'applique à chacun) ; chmod change <b>ce que</b> chaque catégorie peut faire.</li>
<li><code>sudo chown toto:projet test/essai</code> puis <code>sudo chmod 660 test/essai</code> : etudiant, ni toto ni membre de projet, tombe dans « autres » (---) : ni lecture, ni modification.</li>
<li>Après <code>sudo usermod -aG projet etudiant</code> et <code>newgrp projet</code>, <code>id</code> affiche projet : etudiant relève de la catégorie groupe (rw-) et peut modifier essai sans en être propriétaire.</li>
<li><code>chgrp projet test</code> (sans sudo : etudiant est propriétaire et membre de projet) puis <code>chmod g+w test</code> : le propriétaire et les membres de projet peuvent créer des fichiers dans test (à condition de pouvoir traverser /home/etudiant).</li>
<li>Restauration : <code>sudo chown -R etudiant:etudiant test</code>, puis <code>exit</code> pour quitter le shell ouvert par newgrp.</li>
<li>Bien configurer les groupes propriétaires permet de partager précisément avec une équipe sans ouvrir les fichiers à tous (moindre privilège).</li>
</ul>
`
    },
    {
      id: 'c2-s-speciaux',
      title: '5.1-5.2 Droits spéciaux, bonnes pratiques et audit',
      src: 'Cours 2 §5.1-5.2 · TP2 ex.11, 12 et 13',
      html: `
<h3>SUID, SGID et sticky bit</h3>
<table class="tbl">
<tr><th>Droit</th><th>Octal</th><th>Affichage</th><th>Effet</th><th>Exemple</th></tr>
<tr><td><b>SUID</b></td><td>4000</td><td>s à la place du x du propriétaire</td><td>le programme s'exécute avec les droits de son propriétaire</td><td><code>/usr/bin/passwd</code><br>-rwsr-xr-x root</td></tr>
<tr><td><b>SGID</b></td><td>2000</td><td>s à la place du x du groupe</td><td>sur un répertoire : les nouveaux fichiers héritent de son groupe</td><td><code>/srv/equipe</code><br>drwxrws--- root equipe</td></tr>
<tr><td><b>Sticky bit</b></td><td>1000</td><td>t à la place du x des autres</td><td>dans le répertoire, chacun ne peut supprimer que ses propres fichiers</td><td><code>/tmp</code><br>drwxrwxrwt root</td></tr>
</table>
<p>Syntaxe : <code>chmod 2770 rep</code> (SGID) · <code>chmod u+s prog</code> (SUID) · <code>chmod +t rep</code> (sticky bit). En octal, le chiffre spécial se place <b>devant</b> les trois chiffres habituels.</p>
<div class="callout info"><b>s ou S ?</b> Une lettre <b>majuscule</b> (S ou T) signale un droit spécial posé <b>sans</b> le x correspondant (ex. <code>chmod 1770 rep</code> → drwxrwx--T).</div>
<h3>TP2 ex.11 : fichiers sensibles</h3>
<pre class="code">$ ls -l /etc/passwd /etc/shadow
-rw-r--r-- 1 root root   ... /etc/passwd
-rw-r----- 1 root shadow ... /etc/shadow
$ ls -l /usr/bin/passwd
-rwsr-xr-x 1 root root ... /usr/bin/passwd
$ ls -ld /tmp
drwxrwxrwt 18 root root ... /tmp</pre>
<ul>
<li>/etc/passwd décrit les comptes (lisible par tous) ; /etc/shadow contient les mots de passe hachés (illisible pour un utilisateur) : d'où des droits différents.</li>
<li><code>passwd</code> a le droit <b>SUID</b> : lancé par vous, il s'exécute avec les droits de root et peut écrire dans /etc/shadow, mais il ne modifie que <b>votre</b> mot de passe.</li>
<li>Le <b>t</b> de /tmp : tout le monde peut y créer des fichiers, mais personne ne peut supprimer ceux des autres.</li>
</ul>
<h3>Bonnes pratiques</h3>
<ul>
<li><b>Moindre privilège</b> : n'accorder que les droits strictement nécessaires.</li>
<li><code>sudo</code> pour une commande ponctuelle, plutôt que de travailler en root.</li>
<li><b>Jamais de 777</b> : préférer un groupe dédié et les droits 770 ou 750.</li>
<li>Fichiers sensibles en <b>600</b> (clés SSH <code>~/.ssh/id_ed25519</code>, mots de passe).</li>
<li>Auditer régulièrement les fichiers trop ouverts et les programmes SUID.</li>
</ul>
<h3>Audit avec find (TP2 ex.12)</h3>
<pre class="code"># fichiers modifiables par tous
$ find ~ -type f -perm -o=w
# programmes SUID (erreurs masquées)
$ find /usr/bin -perm -4000 2&gt;/dev/null
/usr/bin/passwd
/usr/bin/sudo
# fichiers qui ne sont pas à moi
$ find ~ ! -user $USER
# mes droits sudo
$ sudo -l</pre>
<div class="callout tip"><b>-perm -mode</b> Le tiret signifie « <b>au moins</b> ces droits ». Sans tiret, <code>-perm 4000</code> chercherait des droits <b>exactement</b> égaux. Un fichier trouvé trop ouvert se corrige avec <code>chmod o-w fichier</code>. <code>2&gt;/dev/null</code> envoie les messages d'erreur dans le vide.</div>
<h3>TP2 ex.13 : un répertoire d'équipe (corrigé)</h3>
<pre class="code">$ sudo adduser alice ; sudo adduser bob
$ sudo groupadd equipe
$ sudo usermod -aG equipe alice ; sudo usermod -aG equipe bob
$ sudo mkdir /srv/equipe
$ sudo chown root:equipe /srv/equipe
$ sudo chmod 770 /srv/equipe</pre>
<ol>
<li><code>su - alice</code> puis <code>touch /srv/equipe/rapport.txt</code> → <code>-rw-r--r-- alice alice</code> (umask 022) : le fichier a le groupe <b>principal</b> d'alice. bob n'est pas dans le groupe alice → catégorie autres (r--) → il ne peut pas le modifier.</li>
<li><code>sudo chmod 2770 /srv/equipe</code> → <code>drwxrws--- root equipe</code>. alice, avec <code>umask 002</code>, recrée un fichier → <code>-rw-rw-r-- alice equipe</code> : grâce au <b>setgid</b> (le 2), il hérite du groupe equipe, et le umask 002 laisse w au groupe → bob peut le modifier.</li>
<li>toto n'est pas dans equipe → autres : --- → <code>cd /srv/equipe</code> : Permission non accordée.</li>
<li>Ménage : <code>sudo rm -r /srv/equipe</code>, <code>sudo deluser --remove-home alice</code> (idem bob et toto), <code>sudo groupdel equipe</code>, <code>sudo groupdel projet</code>.</li>
</ol>
<div class="callout info"><b>Pour aller plus loin</b> Avec w sur /srv/equipe, bob peut <b>supprimer</b> un fichier d'alice même s'il ne peut pas le modifier. Pour l'éviter : ajouter le sticky bit (<code>sudo chmod +t /srv/equipe</code>, affiché drwxrws--T).</div>
`
    },
    {
      id: 'c2-s-memento',
      title: 'Mémento',
      src: 'Cours 2 §6 · TP2',
      html: `
<table class="tbl">
<tr><th>Thème</th><th>Commandes</th></tr>
<tr><td>Identité</td><td><code>whoami</code> · <code>id</code> · <code>groups</code> · <code>getent group nom</code></td></tr>
<tr><td>Comptes</td><td><code>sudo adduser nom</code> · <code>sudo deluser --remove-home nom</code> · <code>sudo passwd nom</code> · <code>su - nom</code> · <code>sudo -l</code></td></tr>
<tr><td>Groupes</td><td><code>sudo groupadd g</code> · <code>sudo usermod -aG g nom</code> · <code>sudo groupdel g</code> · <code>newgrp g</code></td></tr>
<tr><td>Lire les droits</td><td><code>ls -l</code> · <code>ls -ld rep</code></td></tr>
<tr><td>Modifier les droits</td><td><code>chmod u+x fic</code> · <code>chmod u=rw,go=r fic</code> · <code>chmod 640 fic</code> · <code>chmod -R g+r rep</code></td></tr>
<tr><td>Droits par défaut</td><td><code>umask</code> · <code>umask -S</code> · <code>umask 027</code> · <code>umask o-r</code></td></tr>
<tr><td>Propriété</td><td><code>sudo chown nom:g fic</code> · <code>chgrp g fic</code> · <code>chown :g fic</code> · option <code>-R</code> : récursif</td></tr>
<tr><td>Scripts</td><td><code>./script</code> (r + x) · <code>bash script.sh</code> (r) · shebang <code>#!/bin/bash</code></td></tr>
<tr><td>Spéciaux</td><td><code>chmod u+s prog</code> · <code>chmod 2770 rep</code> · <code>chmod +t rep</code></td></tr>
<tr><td>Audit</td><td><code>find ~ -type f -perm -o=w</code> · <code>find /usr/bin -perm -4000 2&gt;/dev/null</code> · <code>find ~ ! -user $USER</code></td></tr>
</table>
<h3>Valeurs à connaître par cœur</h3>
<div class="grid2">
<div class="mini"><h4>Octal</h4><p>r = 4, w = 2, x = 1<br>7 rwx · 6 rw- · 5 r-x · 4 r-- · 3 -wx · 2 -w- · 1 --x · 0 ---</p></div>
<div class="mini"><h4>Droits usuels</h4><p>644 fichier · 600 privé · 755 script/répertoire · 700 répertoire privé · 750 partagé groupe · 777 jamais</p></div>
<div class="mini"><h4>umask</h4><p>Base 666 (fichier) / 777 (répertoire).<br>022 → 644/755 · 002 → 664/775 · 027 → 640/750 · 077 → 600/700</p></div>
<div class="mini"><h4>Spéciaux</h4><p>SUID 4000 (s sur u) · SGID 2000 (s sur g) · sticky 1000 (t sur o)</p></div>
</div>
<div class="callout key"><b>Les 5 pièges</b> (1) <code>usermod -G</code> sans <code>-a</code> remplace les groupes. (2) Supprimer un fichier dépend du w du <b>répertoire</b>. (3) Une seule catégorie s'applique (la première qui correspond). (4) Un script lancé avec ./ demande r <b>et</b> x. (5) chown exige sudo ; chmod et chgrp sont possibles pour le propriétaire.</div>
`
    }
  ],

  /* ================================================================
     COMMANDES
     ================================================================ */
  commands: [
    { id: 'c2-cmd-whoami', cmd: 'whoami', syntax: 'whoami',
      desc: "Affiche le nom de login de l'utilisateur courant.",
      details: "Ne donne que le nom ; pour l'UID, le GID et les groupes, utiliser `id`.",
      example: 'whoami   → etudiant', src: 'Cours 2 §1.1 · TP2 ex.1' },
    { id: 'c2-cmd-id', cmd: 'id', syntax: 'id [utilisateur]',
      desc: "Affiche l'UID, le GID du groupe principal et la liste de tous les groupes.",
      details: "Le `gid=…` est le groupe principal, attribué par défaut aux fichiers créés. Un groupe ajouté avec usermod -aG n'apparaît qu'après reconnexion ou `newgrp`.",
      example: 'id   → uid=1000(etudiant) gid=1000(etudiant) groupes=1000(etudiant),27(sudo)', src: 'Cours 2 §1.1 · TP2 ex.1' },
    { id: 'c2-cmd-groups', cmd: 'groups', syntax: 'groups [utilisateur]',
      desc: 'Affiche uniquement les noms des groupes auxquels on appartient.',
      details: "Avec un argument, affiche les groupes de cet UTILISATEUR (et non les membres d'un groupe).",
      example: 'groups   → etudiant sudo', src: 'Cours 2 §1.4 · TP2 ex.1' },
    { id: 'c2-cmd-getent', cmd: 'getent group', syntax: 'getent group nom',
      desc: "Affiche la ligne d'un groupe (nom:x:GID:membres), donc la liste de ses membres.",
      details: "Interroge la base des groupes (/etc/group). Sert à vérifier un `usermod -aG`.",
      example: 'getent group projet   → projet:x:1002:toto,etudiant', src: 'Cours 2 §1.4 · TP2 ex.8' },
    { id: 'c2-cmd-ps', cmd: 'ps -o user,pid,cmd', syntax: 'ps -o user,pid,cmd',
      desc: "Affiche les processus du terminal avec la colonne USER : chaque processus s'exécute au nom d'un utilisateur.",
      details: "Un processus n'a que les droits de l'utilisateur qui l'a lancé.",
      example: 'ps -o user,pid,cmd', src: 'Cours 2 §1.1' },
    { id: 'c2-cmd-grep-passwd', cmd: 'grep … /etc/passwd', syntax: 'grep login /etc/passwd',
      desc: "Affiche la ligne décrivant un compte : 7 champs séparés par « : ».",
      details: "login:x:UID:GID:commentaire:répertoire personnel:shell. Le mot de passe haché est dans /etc/shadow, lisible par root seulement.",
      example: 'grep etudiant /etc/passwd', src: 'Cours 2 §1.3 · TP2 ex.11' },
    { id: 'c2-cmd-sudo', cmd: 'sudo', syntax: 'sudo commande',
      desc: 'Exécute une seule commande avec les droits de root.',
      details: "Demande TON mot de passe ; réservé aux membres du groupe sudo. Bonne pratique : sudo ponctuel plutôt que travailler en root.",
      example: 'sudo adduser toto', src: 'Cours 2 §1.2 et §5.2' },
    { id: 'c2-cmd-sudo-l', cmd: 'sudo -l', syntax: 'sudo -l',
      desc: "Liste les commandes que l'on a le droit d'exécuter avec sudo.",
      details: "-l = list. Fait partie de l'audit de sécurité.",
      example: 'sudo -l', src: 'Cours 2 §5.2' },
    { id: 'c2-cmd-adduser', cmd: 'adduser', syntax: 'sudo adduser nom',
      desc: 'Crée un utilisateur, son groupe principal et son répertoire personnel (demande un mot de passe).',
      details: 'Commande interactive de Debian/Ubuntu ; nécessite sudo.',
      example: 'sudo adduser toto', src: 'Cours 2 §1.5 · TP2 ex.7 et 13' },
    { id: 'c2-cmd-passwd', cmd: 'passwd', syntax: 'passwd   |   sudo passwd nom',
      desc: "Change son propre mot de passe, ou (avec sudo) celui d'un autre utilisateur.",
      details: "/usr/bin/passwd a le droit SUID (-rwsr-xr-x root) : il s'exécute en root pour écrire dans /etc/shadow.",
      example: 'sudo passwd toto', src: 'Cours 2 §1.5 et §5.1 · TP2 ex.11' },
    { id: 'c2-cmd-deluser', cmd: 'deluser --remove-home', syntax: 'sudo deluser --remove-home nom',
      desc: 'Supprime un utilisateur et son répertoire personnel.',
      details: 'Sans --remove-home, le répertoire /home/nom est conservé.',
      example: 'sudo deluser --remove-home toto', src: 'Cours 2 §1.5 · TP2 ex.13' },
    { id: 'c2-cmd-groupadd', cmd: 'groupadd', syntax: 'sudo groupadd groupe',
      desc: 'Crée un groupe.',
      details: "Le groupe est ajouté à /etc/group ; on y ajoute ensuite des membres avec usermod -aG.",
      example: 'sudo groupadd projet', src: 'Cours 2 §1.5 · TP2 ex.8 et 13' },
    { id: 'c2-cmd-usermod', cmd: 'usermod -aG', syntax: 'sudo usermod -aG groupe utilisateur',
      desc: "Ajoute un utilisateur à un groupe secondaire sans le retirer des autres.",
      details: "-a (append) = ajouter ; -G = groupes secondaires. Sans -a, -G REMPLACE tous les groupes secondaires. Prise en compte à la prochaine connexion (ou newgrp).",
      example: 'sudo usermod -aG projet toto', src: 'Cours 2 §1.5 · TP2 ex.8' },
    { id: 'c2-cmd-groupdel', cmd: 'groupdel', syntax: 'sudo groupdel groupe',
      desc: 'Supprime un groupe.',
      details: 'Utilisé pour le ménage en fin de TP (groupes equipe et projet).',
      example: 'sudo groupdel projet', src: 'Cours 2 §1.5 · TP2 ex.13' },
    { id: 'c2-cmd-su', cmd: 'su -', syntax: 'su - utilisateur',
      desc: "Ouvre une session (shell de connexion) en tant qu'un autre utilisateur ; son mot de passe est demandé.",
      details: "Le - charge l'environnement de l'utilisateur (son répertoire personnel, ses variables). `exit` pour revenir.",
      example: 'su - alice', src: 'Cours 2 §1.5 · TP2 ex.13' },
    { id: 'c2-cmd-newgrp', cmd: 'newgrp', syntax: 'newgrp groupe',
      desc: "Ouvre un nouveau shell qui tient compte d'un groupe tout juste ajouté.",
      details: "Évite de se reconnecter après usermod -aG. Dans ce shell, le groupe indiqué devient le groupe principal (nouveaux fichiers dans ce groupe). `exit` pour le quitter.",
      example: 'newgrp projet', src: 'Cours 2 §1.5 · TP2 ex.8' },
    { id: 'c2-cmd-exit', cmd: 'exit', syntax: 'exit',
      desc: "Quitte le shell courant (ouvert par su - ou newgrp) et revient au précédent.",
      details: "Fin de l'ex.8 du TP : quitter le shell ouvert par newgrp.",
      example: 'exit', src: 'TP2 ex.8' },
    { id: 'c2-cmd-ls-l', cmd: 'ls -l', syntax: 'ls -l [rep]',
      desc: 'Liste détaillée : type, droits, liens, propriétaire, groupe, taille, date, nom.',
      details: "1er caractère : - fichier, d répertoire, l lien. Puis 3 triplets rwx : propriétaire, groupe, autres.",
      example: 'ls -l   → -rwxr-x--- 1 alice dev 2048 oct. 5 10:12 script.sh', src: 'Cours 2 §2.2 · TP2 ex.2' },
    { id: 'c2-cmd-ls-ld', cmd: 'ls -ld', syntax: 'ls -ld rep',
      desc: 'Affiche les informations du répertoire lui-même (et non son contenu).',
      details: '-d = directory : ne pas entrer dans le répertoire.',
      example: 'ls -ld test /tmp', src: 'Cours 2 §6 · TP2 ex.3 et 11' },
    { id: 'c2-cmd-chmod-sym', cmd: 'chmod (symbolique)', syntax: 'chmod [ugoa][+-][rwx] fichier',
      desc: 'Ajoute (+) ou retire (-) des droits à une ou plusieurs catégories, en conservant les autres.',
      details: "u propriétaire, g groupe, o autres, a tous. Plusieurs modifications séparées par des virgules sans espace : `chmod u+x,g-w fic`.",
      example: 'chmod u+x script.sh', src: 'Cours 2 §3.1 · TP2 ex.3' },
    { id: 'c2-cmd-chmod-eq', cmd: 'chmod =', syntax: 'chmod u=rw,go=r fichier',
      desc: "Fixe exactement les droits d'une catégorie (remplace les anciens).",
      details: "`chmod o= fic` retire tous les droits aux autres. `g=w` sur r-x donne -w-.",
      example: 'chmod u=rw,go=r fic   → rw-r--r--', src: 'Cours 2 §3.1 · TP2 ex.6' },
    { id: 'c2-cmd-chmod-oct', cmd: 'chmod (octal)', syntax: 'chmod NNN fichier',
      desc: "Fixe tous les droits d'un coup : r=4, w=2, x=1 additionnés pour chaque catégorie (u, g, o).",
      details: "Les droits initiaux n'ont aucune importance. 644 rw-r--r--, 600 rw-------, 755 rwxr-xr-x, 750 rwxr-x---, 700 rwx------. Éviter 777.",
      example: 'chmod 640 rapport.txt', src: 'Cours 2 §3.2-3.4 · TP2 ex.6' },
    { id: 'c2-cmd-chmod-R', cmd: 'chmod -R', syntax: 'chmod -R droits rep',
      desc: 'Applique la modification au répertoire et à tout son contenu.',
      details: "R majuscule : `chmod -r` signifierait « retirer r ».",
      example: 'chmod -R g+r test', src: 'Cours 2 §3.1' },
    { id: 'c2-cmd-echo', cmd: 'echo … > / >>', syntax: 'echo "texte" > fic   |   echo "texte" >> fic',
      desc: "Écrit un texte dans un fichier : > crée ou écrase, >> ajoute à la fin.",
      details: "TP2 ex.3 : `echo \"une phrase\" > test/essai`. Rendre un umask permanent : `echo \"umask 027\" >> ~/.bashrc` (jamais > qui écraserait le fichier).",
      example: 'echo "une phrase" > test/essai', src: 'TP2 ex.3 · Cours 2 §3.6' },
    { id: 'c2-cmd-dotslash', cmd: './script', syntax: './fichier',
      desc: 'Exécute un fichier du répertoire courant comme un programme.',
      details: "Exige x ; pour un script il faut aussi r (l'interpréteur le lit). Sans ./, le shell cherche la commande dans le PATH.",
      example: './bonjour.sh', src: 'Cours 2 §2.6 · TP2 ex.3 et 10' },
    { id: 'c2-cmd-bash', cmd: 'bash script.sh', syntax: 'bash script.sh',
      desc: 'Lance un script en le faisant lire par bash.',
      details: "Fonctionne avec le seul droit r : c'est bash (/bin/bash) qui est exécuté, le script est seulement lu.",
      example: 'bash bonjour.sh', src: 'Cours 2 §2.6 · TP2 ex.10' },
    { id: 'c2-cmd-nano', cmd: 'nano', syntax: 'nano fichier',
      desc: "Éditeur de texte dans le terminal ; crée le fichier s'il n'existe pas.",
      details: 'Ctrl+O pour enregistrer, Ctrl+X pour quitter.',
      example: 'nano bonjour.sh', src: 'TP2 ex.10' },
    { id: 'c2-cmd-umask', cmd: 'umask', syntax: 'umask',
      desc: 'Affiche le masque courant en octal (droits retirés aux nouveaux fichiers).',
      details: 'Le noter avant de le modifier pour pouvoir le rétablir.',
      example: 'umask   → 0022', src: 'Cours 2 §3.5 · TP2 ex.5' },
    { id: 'c2-cmd-umask-S', cmd: 'umask -S', syntax: 'umask -S',
      desc: 'Affiche le masque en symbolique, sous forme de droits CONSERVÉS.',
      details: 'S majuscule.',
      example: 'umask -S   → u=rwx,g=rx,o=rx', src: 'Cours 2 §3.5 · TP2 ex.5' },
    { id: 'c2-cmd-umask-set', cmd: 'umask NNN', syntax: 'umask 027',
      desc: 'Définit le masque (droits retirés) des futurs fichiers et répertoires, pour le terminal courant.',
      details: "Fichier : base 666 ; répertoire : base 777. 022 → 644/755, 002 → 664/775, 027 → 640/750, 077 → 600/700. Permanent : ajouter la ligne à ~/.bashrc.",
      example: 'umask 077', src: 'Cours 2 §3.5-3.6 · TP2 ex.5' },
    { id: 'c2-cmd-umask-sym', cmd: 'umask o-r', syntax: 'umask [ugoa][+-=][rwx]',
      desc: 'Modifie le masque avec la syntaxe de chmod, qui décrit alors les droits AUTORISÉS.',
      details: "`umask o-r` retire aux autres la lecture des futurs fichiers (0022 devient 0026).",
      example: 'umask o-r', src: 'TP2 §5' },
    { id: 'c2-cmd-chown', cmd: 'chown', syntax: 'sudo chown utilisateur fichier',
      desc: "Change le propriétaire d'un fichier ou d'un répertoire.",
      details: "Réservé à root (sudo). L'ancien propriétaire relève alors du groupe ou des autres et ne peut plus faire chmod.",
      example: 'sudo chown toto test', src: 'Cours 2 §4.1 · TP2 ex.7' },
    { id: 'c2-cmd-chown-ug', cmd: 'chown user:groupe', syntax: 'sudo chown utilisateur:groupe fichier',
      desc: 'Change le propriétaire ET le groupe en une seule commande.',
      details: "Ordre : utilisateur d'abord, puis groupe, séparés par « : ».",
      example: 'sudo chown toto:projet test/essai', src: 'Cours 2 §4.1 · TP2 ex.8 et 13' },
    { id: 'c2-cmd-chown-R', cmd: 'chown -R', syntax: 'sudo chown -R utilisateur[:groupe] rep',
      desc: "Change le propriétaire d'un répertoire et de tout son contenu.",
      details: "Sert notamment à restaurer les propriétaires d'origine après des tests. R majuscule.",
      example: 'sudo chown -R $USER test', src: 'Cours 2 §4.1 · TP2 ex.7 et 8' },
    { id: 'c2-cmd-chgrp', cmd: 'chgrp', syntax: 'chgrp groupe fichier',
      desc: 'Change uniquement le groupe propriétaire.',
      details: "Sans sudo si l'on est propriétaire du fichier ET membre du groupe visé (sinon : Opération non permise). -R pour un répertoire et son contenu.",
      example: 'chgrp projet rapport.txt', src: 'Cours 2 §4.2 · TP2 ex.8' },
    { id: 'c2-cmd-chown-g', cmd: 'chown :groupe', syntax: 'chown :groupe fichier',
      desc: 'Change seulement le groupe : même résultat que `chgrp groupe fichier`.',
      details: 'Rien avant les deux-points : le propriétaire ne change pas.',
      example: 'chown :projet rapport.txt', src: 'Cours 2 §4.1-4.2 · TP2 ex.8' },
    { id: 'c2-cmd-suid', cmd: 'chmod u+s', syntax: 'chmod u+s prog   |   chmod 4755 prog',
      desc: "Pose le SUID : le programme s'exécutera avec les droits de son propriétaire.",
      details: "Affiché s à la place du x du propriétaire (-rwsr-xr-x). Exemple système : /usr/bin/passwd. À surveiller (audit avec find -perm -4000).",
      example: 'ls -l /usr/bin/passwd   → -rwsr-xr-x root root', src: 'Cours 2 §5.1 · TP2 ex.11' },
    { id: 'c2-cmd-sgid', cmd: 'chmod 2770 / g+s', syntax: 'sudo chmod 2770 rep   |   chmod g+s rep',
      desc: 'Pose le SGID sur un répertoire : les nouveaux fichiers héritent de son groupe.',
      details: "Le 2 (2000) se place devant les 3 chiffres habituels. Affiché s à la place du x du groupe : drwxrws---.",
      example: 'sudo chmod 2770 /srv/equipe', src: 'Cours 2 §5.1 · TP2 ex.13' },
    { id: 'c2-cmd-sticky', cmd: 'chmod +t', syntax: 'chmod +t rep   |   chmod 1777 rep',
      desc: 'Pose le sticky bit : dans le répertoire, chacun ne peut supprimer que ses propres fichiers.',
      details: 'Affiché t à la place du x des autres (drwxrwxrwt pour /tmp) ; T majuscule si les autres n\'ont pas x.',
      example: 'ls -ld /tmp   → drwxrwxrwt root root', src: 'Cours 2 §5.1 · TP2 ex.11' },
    { id: 'c2-cmd-find-ow', cmd: 'find -perm -o=w', syntax: 'find rep -type f -perm -o=w',
      desc: 'Trouve les fichiers modifiables par tout le monde (au moins w pour les autres).',
      details: "Le tiret devant le mode = « au moins ces droits ». Corriger ensuite avec `chmod o-w fichier`.",
      example: 'find ~ -type f -perm -o=w', src: 'Cours 2 §5.2 · TP2 ex.12' },
    { id: 'c2-cmd-find-suid', cmd: 'find -perm -4000', syntax: 'find rep -perm -4000 2>/dev/null',
      desc: 'Liste les programmes ayant le droit SUID.',
      details: 'On y retrouve passwd, sudo, su, mount, newgrp… Toute entrée inattendue est suspecte.',
      example: 'find /usr/bin -perm -4000 2>/dev/null', src: 'Cours 2 §5.2 · TP2 ex.12' },
    { id: 'c2-cmd-find-user', cmd: 'find -user / ! -user', syntax: 'find rep -user nom   |   find rep ! -user nom',
      desc: "Trouve les fichiers appartenant à un utilisateur ou, avec !, ceux qui ne lui appartiennent pas.",
      details: '! inverse le test qui le suit.',
      example: 'find ~ ! -user $USER', src: 'Cours 2 §5.2 · TP2 ex.12' },
    { id: 'c2-cmd-devnull', cmd: '2>/dev/null', syntax: 'commande 2>/dev/null',
      desc: "Envoie les messages d'erreur dans le vide pour ne garder que les résultats.",
      details: "2 = sortie d'erreur. `> /dev/null` seul masquerait au contraire les résultats.",
      example: 'find /usr/bin -perm -4000 2>/dev/null', src: 'Cours 2 §5.2 · TP2 ex.12' }
  ],

  /* ================================================================
     FLASHCARDS (notions)
     ================================================================ */
  flashcards: [
    { id: 'c2-f-comptes', front: 'Les trois types de comptes (UID)',
      back: "root : UID 0, tous les droits, pas soumis aux permissions. Comptes système : UID 1 à 999 (www-data, sshd…), pas de connexion interactive (shell /usr/sbin/nologin), pas de mot de passe. Utilisateurs : UID ≥ 1000, home dans /home, shell bash." },
    { id: 'c2-f-passwd', front: '/etc/passwd et /etc/shadow',
      back: "/etc/passwd : une ligne par compte, 7 champs login:x:UID:GID:commentaire:home:shell, lisible par tous (le mot de passe vaut x). /etc/shadow : mots de passe hachés, lisible par root seulement." },
    { id: 'c2-f-group', front: 'Format de /etc/group',
      back: 'nom:x:GID:membre1,membre2 — ex. projet:x:1002:toto,etudiant. Affichage : getent group projet.' },
    { id: 'c2-f-principal', front: 'Groupe principal vs groupes secondaires',
      back: "Principal : GID du 4e champ de /etc/passwd, attribué aux fichiers que l'on crée. Secondaires : listés dans /etc/group ; un utilisateur peut en avoir plusieurs." },
    { id: 'c2-f-newgrp', front: "Pourquoi id n'affiche pas un groupe tout juste ajouté ?",
      back: "Les groupes sont lus à l'ouverture de session. Il faut se reconnecter, ou taper newgrp groupe (ouvre un shell qui en tient compte ; exit pour le quitter)." },
    { id: 'c2-f-rwx', front: 'Valeurs de r, w, x',
      back: 'r = 4, w = 2, x = 1. On additionne par catégorie (u, g, o) : rwx = 7, rw- = 6, r-x = 5, r-- = 4, -wx = 3, -w- = 2, --x = 1, --- = 0.' },
    { id: 'c2-f-ls', front: 'Les 10 caractères de ls -l',
      back: 'Type (- fichier, d répertoire, l lien symbolique) puis 3 triplets : propriétaire (u), groupe (g), autres (o). Ex. -rwxr-x--- : fichier, u = rwx, g = r-x, o = ---.' },
    { id: 'c2-f-rep', front: 'r, w, x sur un répertoire',
      back: "r : lister les noms (ls). w : créer, supprimer, renommer des éléments (avec x). x : traverser (cd, accès aux éléments). r sans x → noms visibles mais « ? » ; x sans r → accès à un nom connu sans pouvoir lister." },
    { id: 'c2-f-suppr', front: 'Supprimer un fichier : de quel droit cela dépend-il ?',
      back: "Du droit w (avec x) sur le RÉPERTOIRE qui le contient, pas des droits du fichier. Modifier son contenu dépend, lui, des droits du fichier." },
    { id: 'c2-f-decision', front: 'Comment le système choisit la catégorie',
      back: "root → accès accordé ; propriétaire → droits u ; membre du groupe → droits g ; sinon → droits o. UNE seule catégorie s'applique : en ---rwx---, le propriétaire n'a aucun droit, même s'il est membre du groupe." },
    { id: 'c2-f-script', front: 'Droits nécessaires pour lancer un script',
      back: "./script : r ET x (x pour lancer, r car bash doit le lire). bash script.sh : r suffit (c'est bash qui est exécuté). Un nouveau fichier n'a jamais x : chmod u+x." },
    { id: 'c2-f-shebang', front: 'Shebang #!/bin/bash',
      back: "Première ligne d'un script : indique quel interpréteur utiliser quand on le lance avec ./script." },
    { id: 'c2-f-usuels', front: 'Les droits usuels',
      back: '644 rw-r--r-- fichier standard · 600 rw------- fichier privé (clé SSH) · 755 rwxr-xr-x script ou répertoire pour tous · 700 rwx------ répertoire privé · 750 rwxr-x--- partagé avec le groupe · 777 à éviter.' },
    { id: 'c2-f-640', front: 'chmod 640 vs chmod g+r',
      back: "640 fixe les 9 droits d'un coup (rw-r-----), quels que soient les droits initiaux ; g+r ajoute seulement r au groupe et conserve tout le reste." },
    { id: 'c2-f-umask', front: 'Principe du umask',
      back: "Droits RETIRÉS à la création. Base fichier 666, répertoire 777. 022 → 644/755 ; 002 → 664/775 ; 027 → 640/750 ; 077 → 600/700. Vaut pour le terminal courant ; permanent via ~/.bashrc." },
    { id: 'c2-f-chown', front: 'Qui peut utiliser chmod, chown, chgrp ?',
      back: "chmod : le propriétaire ou root. chown : root uniquement (sudo), sinon chacun pourrait « donner » ses fichiers. chgrp : le propriétaire vers un groupe dont il est membre, ou root." },
    { id: 'c2-f-suid', front: 'SUID (4000, s sur le x du propriétaire)',
      back: "Le programme s'exécute avec les droits de son propriétaire. Ex. /usr/bin/passwd (-rwsr-xr-x root) peut écrire dans /etc/shadow mais ne modifie que votre mot de passe. chmod u+s prog." },
    { id: 'c2-f-sgid', front: 'SGID sur un répertoire (2000, s sur le x du groupe)',
      back: 'Les nouveaux fichiers héritent du groupe du répertoire (et non du groupe principal du créateur). Ex. sudo chmod 2770 /srv/equipe → drwxrws--- root equipe. Avec umask 002, toute l\'équipe peut modifier.' },
    { id: 'c2-f-sticky', front: 'Sticky bit (1000, t sur le x des autres)',
      back: 'Dans le répertoire, chacun ne peut supprimer que ses propres fichiers. Ex. /tmp : drwxrwxrwt. chmod +t rep.' },
    { id: 'c2-f-moindre', front: 'Bonnes pratiques de sécurité',
      back: 'Moindre privilège ; sudo ponctuel plutôt que root ; jamais 777 (groupe dédié + 770 ou 750) ; fichiers sensibles en 600 ; audit avec find -perm -o=w, find -perm -4000, find ! -user, sudo -l.' }
  ],

  /* ================================================================
     QUIZ
     ================================================================ */
  quiz: [
    /* ---------- Section 1 : utilisateurs et groupes ---------- */
    { id: 'c2-q-001', q: "Quel est l'UID du super-utilisateur root ?",
      choices: ['1000', '0', '1'], answer: 1,
      explain: "root a toujours l'UID 0 ; les comptes des personnes commencent en général à 1000.",
      why: { 0: "1000 est en général l'UID du premier compte de personne (ici etudiant).",
             2: "L'UID 1 appartient à un compte système (plage 1 à 999), utilisé par un service." },
      src: 'Cours 2 §1.2 · Quiz express 1', level: 1 },
    { id: 'c2-q-002', q: 'Où sont stockés les mots de passe hachés ?',
      choices: ['/etc/passwd', '/home/etudiant', '/etc/shadow'], answer: 2,
      explain: "/etc/shadow, lisible par root seulement. /etc/passwd est lisible par tous et ne contient qu'un x.",
      why: { 0: "/etc/passwd est lisible par tout le monde : son champ mot de passe vaut seulement x.",
             1: "/home/etudiant est le répertoire personnel : il contient vos fichiers, pas la base des comptes." },
      src: 'Cours 2 §1.3 · Quiz express 1', level: 1 },
    { id: 'c2-q-003', q: 'Quelle commande ajoute toto au groupe projet sans le retirer de ses autres groupes ?',
      choices: ['sudo usermod -aG projet toto', 'sudo usermod -G projet toto', 'sudo groupadd toto projet'], answer: 0,
      explain: "L'option -a (append) ajoute le groupe ; sans elle, -G remplace la liste des groupes secondaires.",
      why: { 1: "Sans -a, -G REMPLACE tous les groupes secondaires de toto par projet : il perdrait les autres (sudo…).",
             2: "groupadd crée un groupe ; il ne sert pas à ajouter un membre." },
      src: 'Cours 2 §1.5 · Quiz express 1', level: 1 },
    { id: 'c2-q-004', q: 'Un compte comme www-data ou sshd, utilisé par un service, a un UID…',
      choices: ['supérieur ou égal à 1000', 'égal à 0', 'compris entre 1 et 999'], answer: 2,
      explain: "Les comptes système ont un UID de 1 à 999 : pas de connexion interactive, pas de mot de passe.",
      why: { 0: "≥ 1000 : ce sont les comptes des personnes (home dans /home, shell bash).",
             1: "L'UID 0 est réservé à root." },
      src: 'Cours 2 §1.2', level: 1 },
    { id: 'c2-q-005', q: 'Dans la ligne `etudiant:x:1000:1000:Etudiant ESEO:/home/etudiant:/bin/bash`, que représente le 4e champ ?',
      choices: ["L'UID de l'utilisateur", "Le nombre de groupes de l'utilisateur", 'Le numéro de son shell', 'Le GID de son groupe principal'], answer: 3,
      explain: 'Ordre des 7 champs : login, mot de passe (x), UID, GID principal, commentaire, répertoire personnel, shell.',
      why: { 0: "L'UID est le 3e champ (ici aussi 1000, d'où la confusion possible).",
             1: "Les groupes secondaires sont listés dans /etc/group, pas comptés dans /etc/passwd.",
             2: "Le shell est le 7e champ, écrit en clair (/bin/bash)." },
      src: 'Cours 2 §1.3', level: 2 },
    { id: 'c2-q-006', q: 'etudiant crée un fichier dans son répertoire personnel. Quel groupe propriétaire le fichier reçoit-il ?',
      choices: ["Le groupe principal d'etudiant (GID de /etc/passwd)", "Le groupe sudo, puisqu'etudiant en est membre", 'Le dernier groupe secondaire ajouté', 'Aucun groupe'], answer: 0,
      explain: "Le groupe principal (gid=1000(etudiant) dans id) est attribué aux fichiers créés. Seul un répertoire setgid change cela.",
      why: { 1: "Être membre d'un groupe secondaire n'en fait pas le groupe des nouveaux fichiers.",
             2: "Les groupes secondaires ne sont jamais utilisés automatiquement pour les nouveaux fichiers.",
             3: "Tout fichier a toujours un propriétaire ET un groupe propriétaire." },
      src: 'Cours 2 §1.4 · TP2 ex.1', level: 1 },
    { id: 'c2-q-007', q: "Juste après `sudo usermod -aG projet etudiant`, la commande `id` n'affiche pas projet. Que faire ?",
      choices: ['Relancer usermod avec -G seul', 'Recréer le groupe avec groupadd', 'Se reconnecter, ou taper newgrp projet', "Rien : id n'affiche jamais les groupes secondaires"], answer: 2,
      explain: "Les groupes sont lus à l'ouverture de session : l'ajout est fait, mais le shell courant ne le voit pas encore. newgrp projet ouvre un shell qui en tient compte.",
      why: { 0: "-G sans -a remplacerait tous les groupes secondaires : dangereux et inutile.",
             1: "Le groupe existe déjà : groupadd échouerait.",
             3: "id affiche bien tous les groupes (groupes=…), mais seulement ceux connus à l'ouverture de session." },
      src: 'Cours 2 §1.5 · TP2 ex.8', level: 2 },
    { id: 'c2-q-008', q: 'Quelle commande affiche les membres du groupe projet ?',
      choices: ['groups projet', 'getent group projet', 'id projet'], answer: 1,
      explain: 'getent group projet → projet:x:1002:toto,etudiant : le dernier champ liste les membres.',
      why: { 0: "groups projet affiche les groupes d'un UTILISATEUR nommé projet.",
             2: "id projet donne les informations d'un utilisateur nommé projet, pas les membres d'un groupe." },
      src: 'Cours 2 §1.4 · TP2 ex.8', level: 1 },

    /* ---------- Section 2 : droits d'accès ---------- */
    { id: 'c2-q-009', q: 'Dans `-rw-r-----`, que peuvent faire les membres du groupe ?',
      choices: ['Lire et écrire', 'Lire seulement', 'Rien'], answer: 1,
      explain: 'Le deuxième triplet (r--) est celui du groupe : lecture seule.',
      why: { 0: "rw- est le premier triplet : celui du propriétaire.",
             2: "--- est le troisième triplet : celui des autres." },
      src: 'Cours 2 §2.2 · Quiz express 2', level: 1 },
    { id: 'c2-q-010', q: 'Quel droit faut-il sur un répertoire pour y entrer avec cd ?',
      choices: ['r', 'w', 'x'], answer: 2,
      explain: "Le droit x d'un répertoire permet de le traverser, donc d'y entrer avec cd.",
      why: { 0: "r sur un répertoire permet seulement de lister les noms (ls).",
             1: "w permet de créer, supprimer ou renommer des éléments (et seulement avec x)." },
      src: 'Cours 2 §2.3 · Quiz express 2', level: 1 },
    { id: 'c2-q-011', q: 'De quoi dépend la possibilité de supprimer un fichier ?',
      choices: ['Du droit w sur le fichier', 'Du droit w sur le répertoire qui le contient', 'Du droit x sur le fichier'], answer: 1,
      explain: "Supprimer revient à modifier le répertoire : c'est son droit w qui compte, pas celui du fichier.",
      why: { 0: "Le w du fichier permet de modifier son CONTENU, pas de le supprimer.",
             2: "x sur un fichier sert à l'exécuter." },
      src: 'Cours 2 §2.4 · Quiz express 2', level: 1 },
    { id: 'c2-q-012', q: 'Sur un répertoire, vous avez r mais pas x. Que pouvez-vous faire ?',
      choices: ['Voir les noms des fichiers, mais ni les ouvrir ni entrer (ls -l affiche des ?)', 'Entrer avec cd, mais pas lister', 'Créer des fichiers mais pas les lire', 'Tout : r suffit sur un répertoire'], answer: 0,
      explain: "r = lire la liste des noms ; tout accès aux éléments (cd, cat, ls -l) demande x.",
      why: { 1: "C'est la situation inverse (x sans r) : entrer demande x.",
             2: "Créer un fichier demande w ET x sur le répertoire.",
             3: "r ne permet que de lister les noms ; accéder aux éléments demande x." },
      src: 'Cours 2 §2.4 · TP2 ex.4', level: 2 },
    { id: 'c2-q-013', q: 'Le répertoire rep vous donne --x (x sans r) ; il contient le fichier lisible essai. Quelle commande fonctionne ?',
      choices: ['ls rep', 'touch rep/nouveau', 'cat rep/essai'], answer: 2,
      explain: "x permet de traverser : on accède à un fichier dont on connaît le nom exact. Sans r, on ne peut pas lister.",
      why: { 0: "Lister le contenu demande r sur le répertoire.",
             1: "Créer un fichier demande w (en plus de x) sur le répertoire." },
      src: 'Cours 2 §2.4 · TP2 ex.4', level: 2 },
    { id: 'c2-q-014', q: 'Pour lire /home/alice/cours/tp2.txt, de quels droits avez-vous besoin ?',
      choices: ['r sur chaque répertoire du chemin et r sur tp2.txt', 'r sur tp2.txt suffit', 'w sur /home/alice/cours et r sur tp2.txt', 'x sur /, /home, /home/alice et /home/alice/cours, puis r sur tp2.txt'], answer: 3,
      explain: "Chaque répertoire du chemin doit être traversé (x) ; le fichier final doit être lisible (r).",
      why: { 0: "r sur un répertoire sert à lister ; le traverser demande x.",
             1: "Sans x sur un seul des répertoires du chemin, le fichier est inaccessible.",
             2: "w sur le répertoire sert à créer ou supprimer, pas à lire." },
      src: 'Cours 2 §2.3', level: 2 },
    { id: 'c2-q-015', q: 'Le fichier `---rwx--- 1 alice dev notes` appartient à alice, qui est aussi membre de dev. Peut-elle le lire ?',
      choices: ['Oui, ses droits u et g se cumulent', "Non : seule la catégorie propriétaire s'applique, et elle vaut ---", 'Oui, un propriétaire peut toujours lire ses fichiers'], answer: 1,
      explain: "Le système prend la PREMIÈRE catégorie qui correspond (propriétaire) et ne regarde qu'elle. alice peut toutefois rétablir ses droits avec chmod, puisqu'elle est propriétaire.",
      why: { 0: "Les catégories ne se cumulent jamais : une seule s'applique.",
             2: "Le propriétaire n'a que les droits u (ici ---) ; il peut seulement les modifier avec chmod." },
      src: 'Cours 2 §2.5', level: 3 },
    { id: 'c2-q-016', q: 'essai contient `echo Bonjour` et a les droits --x------ ; vous en êtes propriétaire. Que donne `./essai` ?',
      choices: ['Bonjour', 'commande introuvable', 'Permission non accordée : bash doit aussi pouvoir lire le script (r)'], answer: 2,
      explain: "Un script est lu par son interpréteur : il faut r ET x. x seul ne suffit pas.",
      why: { 0: "Il faudrait aussi le droit r pour que bash lise le script.",
             1: "Avec ./ le fichier est bien trouvé ; c'est sa lecture qui est refusée." },
      src: 'Cours 2 §2.6 · TP2 ex.3', level: 2 },
    { id: 'c2-q-017', q: 'bonjour.sh est en rw-r--r--. Pourquoi `bash bonjour.sh` fonctionne-t-il alors que `./bonjour.sh` échoue ?',
      choices: ["C'est bash (/bin/bash, exécutable) qui est lancé ; le script est seulement lu, r suffit", 'bash ignore les permissions', 'bash ajoute automatiquement le droit x au script', "bash s'exécute toujours en root"], answer: 0,
      explain: "./bonjour.sh demande x sur le fichier ; bash bonjour.sh exécute /bin/bash, qui se contente de lire le script.",
      why: { 1: "bash respecte les permissions : sans r, bash bonjour.sh échouerait aussi.",
             2: "Les droits du fichier ne changent pas (ls -l le confirme).",
             3: "bash s'exécute avec vos droits, comme tout processus que vous lancez." },
      src: 'Cours 2 §2.6 · TP2 ex.10', level: 2 },
    { id: 'c2-q-018', q: "À quoi sert la première ligne `#!/bin/bash` d'un script ?",
      choices: ['À donner le droit x au fichier', 'À exécuter le script en root', "Rien : c'est un commentaire comme un autre", "À indiquer quel interpréteur doit exécuter le script lancé avec ./"], answer: 3,
      explain: "C'est le shebang : quand on lance ./script, le système lit cette ligne pour savoir quel interpréteur utiliser.",
      why: { 0: "Seul chmod modifie les droits ; il faut toujours chmod u+x.",
             1: "Le script s'exécute avec les droits de celui qui le lance.",
             2: "Pour bash c'est bien un commentaire, mais le système, lui, s'en sert pour choisir l'interpréteur." },
      src: 'Cours 2 §2.6 · TP2 ex.10', level: 1 },
    { id: 'c2-q-019', q: 'TP2 ex.9 : carol est membre de dev uniquement. Peut-elle exécuter `-rwxr-x--- 1 alice dev script.sh` ?',
      choices: ["Non, seule alice peut l'exécuter", 'Oui : elle relève de la catégorie groupe (r-x), qui a lecture et exécution', 'Non, il lui manque le droit w', 'Oui, car les autres ont x'], answer: 1,
      explain: "carol n'est pas alice mais est membre de dev : la catégorie groupe s'applique, r-x suffit pour un script.",
      why: { 0: "Le groupe dev a r-x : ses membres peuvent lire et exécuter.",
             2: "w sert à modifier le fichier, pas à l'exécuter.",
             3: "Les autres ont --- ; et carol relève de toute façon du groupe." },
      src: 'TP2 ex.9', level: 2 },
    { id: 'c2-q-020', q: "TP2 ex.9 : `drwxr-xr-x bob users partage` contient `-r--r--r-- root root lisezmoi`. carol (membre de dev uniquement) peut-elle supprimer lisezmoi ?",
      choices: ['Oui, lisezmoi est lisible par tous', 'Non, uniquement parce que lisezmoi appartient à root', "Non : supprimer dépend du w sur partage, et carol (autres) n'a que r-x", 'Oui, avec rm -f'], answer: 2,
      explain: "La suppression dépend des droits du répertoire partage. carol n'est ni bob ni membre de users : catégorie autres, r-x, pas de w.",
      why: { 0: "Pouvoir lire un fichier ne donne pas le droit de le supprimer.",
             1: "Le propriétaire du fichier n'entre pas en jeu (pas de sticky bit) : c'est le w du répertoire qui compte.",
             3: "-f supprime la question de confirmation, pas le contrôle des droits du répertoire." },
      src: 'TP2 ex.9', level: 3 },
    { id: 'c2-q-021', q: 'Vous êtes dans ~/test et tapez `chmod u-x .`. Que se passe-t-il ensuite pour `touch f` ou `cd sstest` ?',
      choices: ["Tout fonctionne puisqu'on est déjà dans le répertoire", 'Seul touch f fonctionne', 'Seul cd sstest fonctionne', "Tout est refusé : les droits du répertoire courant s'appliquent même quand on est dedans"], answer: 3,
      explain: "Sans x sur test, on ne peut plus accéder à ses éléments, même depuis l'intérieur. Pour rétablir : chmod u+x ~/test.",
      why: { 0: "Être « dans » un répertoire ne dispense pas du droit x pour accéder à ses éléments.",
             1: "Créer f demande w ET x sur test.",
             2: "Entrer dans sstest demande de traverser test (x)." },
      src: 'TP2 ex.4', level: 3 },

    /* ---------- Section 3 : chmod et umask ---------- */
    { id: 'c2-q-022', q: 'Quelle commande donne les droits rwxr-x--- ?',
      choices: ['chmod 750 fic', 'chmod 570 fic', 'chmod 755 fic'], answer: 0,
      explain: 'rwx = 7, r-x = 5, --- = 0 : chmod 750.',
      why: { 1: "Chiffres inversés : le premier est le propriétaire (rwx = 7).",
             2: "755 donne aussi r-x aux autres (rwxr-xr-x)." },
      src: 'Cours 2 §3.2 · Quiz express 3', level: 1 },
    { id: 'c2-q-023', q: 'Quelle est la valeur octale de rw-r--r-- ?',
      choices: ['755', '664', '644'], answer: 2,
      explain: 'rw- = 6, r-- = 4, r-- = 4 : 644, le réglage standard d\'un fichier.',
      why: { 0: "755 = rwxr-xr-x (avec x partout).",
             1: "664 = rw-rw-r-- : le groupe aurait aussi w." },
      src: 'Cours 2 §3.3 · Quiz express 3', level: 1 },
    { id: 'c2-q-024', q: 'Avec umask 027, quels droits aura un nouveau fichier ?',
      choices: ['rw-r-----', 'rwxr-x---', 'rw-rw-r--'], answer: 0,
      explain: '666 moins 027 donne 640, soit rw-r-----. Un fichier ne reçoit jamais x par défaut.',
      why: { 1: "rwxr-x--- (750) est le résultat pour un RÉPERTOIRE (base 777).",
             2: "rw-rw-r-- correspond à umask 002." },
      src: 'Cours 2 §3.6 · Quiz express 3', level: 2 },
    { id: 'c2-q-025', q: 'Le fichier est en rw-rw-rw-. Quelle différence entre `chmod 640 fic` et `chmod g+r fic` ?',
      choices: ['Aucune différence', 'chmod g+r donne rw-r----- ; chmod 640 ne change rien', 'chmod 640 donne rw-r----- ; chmod g+r ne change rien ici (le groupe a déjà r)', 'chmod 640 ajoute r au groupe en conservant le reste'], answer: 2,
      explain: "L'octal fixe les 9 droits d'un coup ; g+r ne modifie qu'un droit et conserve tous les autres.",
      why: { 0: "Ici on obtient rw-r----- d'un côté et rw-rw-rw- de l'autre.",
             1: "C'est l'inverse : g+r conserve tout le reste.",
             3: "Un octal FIXE tout, il ne conserve rien." },
      src: 'Cours 2 §3.3', level: 2 },
    { id: 'c2-q-026', q: 'fic est en rwxrwxr-x. Résultat de `chmod ug-wx fic` ?',
      choices: ['r--r--r--', '---r--r-x', 'r--r--r-x', 'rwxrwx---'], answer: 2,
      explain: 'u : rwx − wx = r-- ; g : rwx − wx = r-- ; o non concerné : r-x. → r--r--r-x (445).',
      why: { 0: "Les autres (o) ne sont pas visés : ils gardent r-x.",
             1: "On retire w et x au propriétaire, pas r.",
             3: "C'est l'inverse : ug-wx retire w et x à u et g, et ne touche pas aux autres (qui gardent r-x)." },
      src: 'Cours 2 §3.1', level: 2 },
    { id: 'c2-q-027', q: 'TP2 ex.6(d) : fic est en r--r-x---. Résultat de `chmod u+x,g=w,o-r fic` ?',
      choices: ['r-x-w----', 'r-xrwx---', 'rwx-w----', 'r-x-w-r--'], answer: 0,
      explain: 'u : r-- + x = r-x ; g = w fixe -w- ; o : --- − r = ---. → r-x-w---- (520).',
      why: { 1: "= FIXE les droits : g=w remplace r-x par -w-, il n'ajoute pas.",
             2: "u+x ajoute seulement x : le propriétaire n'a pas w.",
             3: "o-r retire r : les autres n'ont rien." },
      src: 'TP2 ex.6', level: 3 },
    { id: 'c2-q-028', q: 'TP2 ex.6(c) : fic est en 711. Résultat de `chmod 653 fic` ?',
      choices: ['rwxr-x-wx', 'rw-r-x-wx', 'rw-r-x--x', 'r-xrw--wx'], answer: 1,
      explain: "Un octal fixe tout, les droits initiaux sont ignorés : 6 = rw-, 5 = r-x, 3 = -wx. En symbolique : chmod u=rw,g=rx,o=wx fic.",
      why: { 0: "L'octal ne conserve pas le x initial du propriétaire : 6 = rw-.",
             2: "3 = 2+1 = -wx, pas --x.",
             3: "Chiffres inversés : 6 est le propriétaire, 5 le groupe." },
      src: 'TP2 ex.6', level: 2 },
    { id: 'c2-q-029', q: 'Avec umask 077, quels droits aura un nouveau répertoire ?',
      choices: ['rw-------', '---rwxrwx', 'rwxr-x---', 'rwx------'], answer: 3,
      explain: '777 moins 077 = 700 → rwx------.',
      why: { 0: "rw------- (600) est le résultat pour un FICHIER (base 666).",
             1: "Le umask indique ce qui est RETIRÉ, pas ce qui est donné.",
             2: "rwxr-x--- correspond à umask 027." },
      src: 'Cours 2 §3.6 · TP2 ex.5', level: 2 },
    { id: 'c2-q-030', q: 'Avec umask 022, qu\'affiche `umask -S` ?',
      choices: ['0022', 'g=w,o=w (les droits retirés)', 'u=rwx,g=rx,o=rx (les droits conservés)', 'rw-r--r--'], answer: 2,
      explain: "-S affiche le masque en symbolique, sous forme de droits CONSERVÉS.",
      why: { 0: "0022 est l'affichage de umask sans option (octal).",
             1: "-S affiche les droits conservés, pas ceux retirés.",
             3: "C'est le résultat pour un fichier, pas l'affichage du masque." },
      src: 'Cours 2 §3.5 · TP2 ex.5', level: 2 },
    { id: 'c2-q-031', q: 'Avec umask 033, quels droits aura un nouveau FICHIER ?',
      choices: ['rw-r--r-- (644)', 'rw--wx-wx (633)', 'r--r--r-- (444)', 'rwxr--r-- (744)'], answer: 0,
      explain: "Le masque retire des droits : 033 retire w et x au groupe et aux autres. La base 666 n'a pas de x, seuls les w disparaissent → rw-r--r--.",
      why: { 1: "Piège de la soustraction chiffre à chiffre : le masque ne fait que retirer des droits, il ne peut pas donner w et x au groupe.",
             2: "Le premier chiffre du masque est 0 : le propriétaire garde rw-.",
             3: "rwxr--r-- (744) est le résultat pour un RÉPERTOIRE (base 777)." },
      src: 'Cours 2 §3.5', level: 3 },

    /* ---------- Sections 4 et 5 : propriété, droits spéciaux ---------- */
    { id: 'c2-q-032', q: "Qui peut changer le propriétaire d'un fichier ?",
      choices: ['Le propriétaire du fichier', 'root (via sudo)', 'Tout membre du groupe'], answer: 1,
      explain: "Seul root peut changer le propriétaire, d'où sudo chown. Le propriétaire peut seulement changer les droits (chmod) et le groupe (chgrp).",
      why: { 0: "Sinon chacun pourrait « donner » ses fichiers à un autre ; le propriétaire peut faire chmod et chgrp, pas chown.",
             2: "Être membre du groupe ne donne aucun pouvoir sur le propriétaire." },
      src: 'Cours 2 §4.1 · Quiz express 4-5', level: 1 },
    { id: 'c2-q-033', q: 'Que signifie le t dans `drwxrwxrwt` (/tmp) ?',
      choices: ['Chacun ne peut supprimer que ses propres fichiers', 'Le répertoire est vidé à chaque redémarrage', 'Les fichiers sont chiffrés'], answer: 0,
      explain: "Le sticky bit : tout le monde peut créer des fichiers dans /tmp, mais personne ne peut supprimer ceux des autres.",
      why: { 1: "Le vidage de /tmp au démarrage dépend de la configuration du système, pas du t.",
             2: "Les permissions Unix ne chiffrent rien." },
      src: 'Cours 2 §5.1 · Quiz express 4-5', level: 1 },
    { id: 'c2-q-034', q: 'Pourquoi passwd peut-il modifier /etc/shadow sans que vous soyez root ?',
      choices: ['Parce que /etc/shadow est modifiable par tous', "Parce que passwd a le droit SUID et s'exécute avec les droits de root", "Grâce à l'umask"], answer: 1,
      explain: "Le droit SUID (s) fait s'exécuter passwd avec les droits de son propriétaire, root. Il ne modifie que votre propre mot de passe.",
      why: { 0: "/etc/shadow n'est lisible et modifiable que par root.",
             2: "Le umask ne règle que les droits des fichiers nouvellement créés." },
      src: 'Cours 2 §5.1 · Quiz express 4-5', level: 2 },
    { id: 'c2-q-035', q: 'Quelle est la différence entre `chgrp projet fic` et `chown :projet fic` ?',
      choices: ['Aucune : les deux changent seulement le groupe en projet', 'chown :projet change aussi le propriétaire en root', 'chgrp nécessite toujours sudo', 'chown :projet retire tout groupe au fichier'], answer: 0,
      explain: "Même résultat. En général : chgrp ne change que le groupe (sans sudo pour le propriétaire membre du groupe) ; chown change le propriétaire (root uniquement) et éventuellement le groupe.",
      why: { 1: "Rien avant les deux-points : le propriétaire reste inchangé.",
             2: "Le propriétaire membre du groupe visé peut faire chgrp sans sudo.",
             3: "Un fichier a toujours un groupe : on le remplace, on ne le retire pas." },
      src: 'Cours 2 §4.2 · TP2 ex.8', level: 2 },
    { id: 'c2-q-036', q: 'etudiant (membre de etudiant, sudo et projet) tape `chgrp root rapport.txt` sur son propre fichier, sans sudo. Résultat ?',
      choices: ['Le groupe devient root', 'Le propriétaire devient root', "Opération non permise : il n'est pas membre du groupe root"], answer: 2,
      explain: "Sans sudo, on ne peut donner un fichier qu'à un groupe dont on est membre.",
      why: { 0: "Il faudrait être membre du groupe root (ou utiliser sudo).",
             1: "chgrp ne touche jamais au propriétaire." },
      src: 'Cours 2 §4.2', level: 2 },
    { id: 'c2-q-037', q: 'Après `chmod 600 essai` puis `sudo chown toto essai`, etudiant tape `cat essai` puis `chmod 644 essai`. Que se passe-t-il ?',
      choices: ['Les deux fonctionnent : etudiant a créé le fichier', 'cat fonctionne mais chmod est refusé', 'cat est refusé mais chmod fonctionne', "Les deux sont refusés : etudiant relève du groupe (---) et n'est plus propriétaire"], answer: 3,
      explain: "Le fichier est désormais -rw------- toto etudiant : etudiant tombe dans la catégorie groupe → ---. Seul le propriétaire (toto) ou root peut changer les droits.",
      why: { 0: "Avoir créé le fichier ne compte pas : seul le propriétaire actuel compte.",
             1: "Catégorie groupe = --- : pas de lecture.",
             2: "chmod est réservé au propriétaire ou à root." },
      src: 'Cours 2 §4.1 · TP2 ex.7', level: 2 },
    { id: 'c2-q-038', q: "TP2 ex.13 : /srv/equipe est en drwxrwx--- root equipe. alice y crée rapport.txt (umask 022). bob, membre d'equipe, ne peut pas le modifier. Pourquoi ?",
      choices: ['bob ne peut pas entrer dans /srv/equipe', "Le fichier a le groupe principal d'alice (alice) : bob relève des autres (r--)", 'Seul root peut modifier les fichiers de /srv', "Le fichier n'a pas le droit x"], answer: 1,
      explain: "rapport.txt est en -rw-r--r-- alice alice. Solution : chmod 2770 (setgid) pour que les fichiers héritent du groupe equipe, et umask 002 pour que le groupe ait w.",
      why: { 0: "bob est membre d'equipe : il a rwx sur le répertoire.",
             2: "Aucune règle spéciale pour /srv : seuls les droits du fichier comptent pour le modifier.",
             3: "x n'est pas nécessaire pour modifier un fichier." },
      src: 'Cours 2 §4.3 · TP2 ex.13', level: 3 },
    { id: 'c2-q-039', q: 'Après `sudo chmod 2770 /srv/equipe`, que montre `ls -ld /srv/equipe` et quel est l\'effet ?',
      choices: ["drwsrwx--- : les programmes s'y exécutent en root", 'drwxrwx--T : chacun ne supprime que ses fichiers', 'drwxrws--- : les nouveaux fichiers héritent du groupe equipe', 'drwxrwx--- : le 2 est ignoré sur un répertoire'], answer: 2,
      explain: "Le 2 (2000) est le SGID : s à la place du x du groupe ; les fichiers créés dedans prennent le groupe equipe.",
      why: { 0: "s sur le propriétaire = SUID (4000), pas SGID (2000).",
             1: "t/T = sticky bit (1000), pas 2000.",
             3: "Le 2 pose bien le SGID, visible par le s du groupe." },
      src: 'Cours 2 §5.1 · TP2 ex.13', level: 2 },
    { id: 'c2-q-040', q: 'Que liste `find /usr/bin -perm -4000 2>/dev/null` ?',
      choices: ['Les fichiers de plus de 4000 octets', 'Les fichiers modifiables par tous', 'Les fichiers dont le mode vaut exactement 4000', 'Les programmes ayant le droit SUID (ex. passwd, sudo)'], answer: 3,
      explain: "-perm -4000 = au moins le bit SUID ; 2>/dev/null masque les messages d'erreur.",
      why: { 0: "La taille se cherche avec -size, pas -perm.",
             1: "Les fichiers modifiables par tous se cherchent avec -perm -o=w.",
             2: "Le tiret signifie « au moins » ; sans tiret, ce serait « exactement »." },
      src: 'Cours 2 §5.2 · TP2 ex.12', level: 2 },

    /* ---------- Réponses courtes ---------- */
    { id: 'c2-q-041', type: 'input', q: 'TP2 ex.6(a) : valeur octale de `chmod u=rx,g=wx,o=r fic` ?',
      accept: ['534', 'chmod 534 fic'],
      explain: 'r-x = 4+1 = 5 ; -wx = 2+1 = 3 ; r-- = 4 → 534 (r-x-wxr--).', src: 'TP2 ex.6', level: 2 },
    { id: 'c2-q-042', type: 'input', q: 'Écris en 9 caractères (ex. rw-r--r--) les droits obtenus avec `chmod 653 fic`.',
      accept: ['rw-r-x-wx'],
      explain: '6 = 4+2 = rw- ; 5 = 4+1 = r-x ; 3 = 2+1 = -wx.', src: 'TP2 ex.6', level: 2 },
    { id: 'c2-q-043', type: 'input', q: 'TP2 ex.6(b) : fic est en r--r-x---. Valeur octale après `chmod uo+w,g-rx fic` ?',
      accept: ['602'],
      explain: 'u : r-- + w = rw- (6) ; g : r-x − rx = --- (0) ; o : --- + w = -w- (2) → 602 (rw-----w-).', src: 'TP2 ex.6', level: 3 },
    { id: 'c2-q-044', type: 'input', q: 'TP2 ex.6 Q2 : `chmod 653 fic` puis `chmod u-r,g+w,o-r fic`. Quelle valeur octale donne le même résultat en une seule commande ?',
      accept: ['273', 'chmod 273 fic'],
      explain: '653 = rw-r-x-wx ; u-r → -w- (2) ; g+w → rwx (7) ; o-r → -wx inchangé (3) → 273.', src: 'TP2 ex.6', level: 3 },
    { id: 'c2-q-045', type: 'input', q: 'Avec umask 027, valeur octale des droits d\'un nouveau RÉPERTOIRE ?',
      accept: ['750'],
      explain: '777 − 027 = 750 → rwxr-x--- (un fichier, lui, serait en 640).', src: 'Cours 2 §3.6 · TP2 ex.5', level: 2 },
    { id: 'c2-q-046', type: 'input', q: 'Avec umask 077, droits (9 caractères) d\'un nouveau FICHIER ?',
      accept: ['rw-------'],
      explain: '666 − 077 = 600 → rw------- : rien pour le groupe ni les autres.', src: 'Cours 2 §3.6 · TP2 ex.5', level: 2 },
    { id: 'c2-q-047', type: 'input', q: '`umask` affiche 0022. Vous tapez `umask o-r`. Qu\'affiche maintenant `umask` ?',
      accept: ['0026', '026', '26'],
      explain: "En symbolique, umask décrit les droits autorisés : o=rx devient o=x, on retire donc 6 (r et w) aux autres → 0026. Un nouveau fichier sera en 640.", src: 'TP2 §5', level: 3 },
    { id: 'c2-q-048', type: 'input', q: 'TP2 ex.9 : valeur octale de `-rw-rw-r--` (notes.txt) ?',
      accept: ['664'],
      explain: 'rw- = 6 ; rw- = 6 ; r-- = 4 → 664.', src: 'TP2 ex.9', level: 1 },
    { id: 'c2-q-049', type: 'input', q: 'Quel mode octal (4 chiffres) passer à chmod pour un répertoire d\'équipe en rwxrwx--- avec le setgid ?',
      accept: ['2770'],
      explain: 'SGID = 2000, placé devant 770 → 2770 ; ls -ld affichera drwxrws---.', src: 'Cours 2 §5.1 · TP2 ex.13', level: 2 },
    { id: 'c2-q-050', type: 'input', q: 'TP2 ex.10 : valeur octale pour que bonjour.sh soit exécutable par tout le monde mais modifiable par vous seul ?',
      accept: ['755'],
      explain: 'rwx (7) pour vous, r-x (5) pour le groupe et les autres : un script lancé avec ./ demande r ET x.', src: 'TP2 ex.10', level: 2 }
  ],

  /* ================================================================
     EXERCICES "tape la commande"
     ================================================================ */
  exercises: [
    /* ---------- Niveau 1 ---------- */
    { id: 'c2-x-001',
      prompt: "Affiche ton nom de login (l'utilisateur sous lequel tu es connecté).",
      answers: ['whoami'],
      hint: '« Qui suis-je ? » en anglais, en un mot.',
      explain: "whoami affiche le login de l'utilisateur courant : etudiant.",
      mistakes: [
        { re: '^who$', msg: 'who liste les sessions ouvertes sur la machine ; whoami donne seulement ton login.' },
        { re: '^id', msg: 'id affiche aussi UID, GID et groupes ; ici on veut seulement le login : whoami.' }
      ],
      src: 'Cours 2 §1.1 · TP2 ex.1', level: 1 },
    { id: 'c2-x-002',
      prompt: 'Affiche en une commande ton UID, ton groupe principal (GID) et la liste de tous tes groupes.',
      answers: ['id'],
      hint: 'Deux lettres.',
      explain: 'id → uid=1000(etudiant) gid=1000(etudiant) groupes=1000(etudiant),27(sudo). Le gid est le groupe principal.',
      mistakes: [
        { re: '^whoami', msg: "whoami n'affiche que le login, sans UID ni groupes." },
        { re: '^groups', msg: 'groups affiche seulement les noms des groupes, sans UID ni GID.' }
      ],
      src: 'Cours 2 §1.1 · TP2 ex.1', level: 1 },
    { id: 'c2-x-003',
      prompt: 'Affiche uniquement les noms des groupes auxquels tu appartiens.',
      answers: ['groups'],
      hint: 'Le mot « groupes » en anglais.',
      explain: 'groups → etudiant sudo.',
      mistakes: [
        { re: '^id', msg: 'id affiche aussi les numéros (UID, GID) : la commande qui ne donne que les noms est groups.' },
        { re: '^group$', msg: "La commande s'écrit au pluriel : groups." }
      ],
      src: 'Cours 2 §1.4 · TP2 ex.1', level: 1 },
    { id: 'c2-x-004',
      prompt: 'Affiche la ligne du groupe sudo de la base des groupes (et donc la liste de ses membres).',
      answers: ['getent group sudo', 'grep sudo /etc/group'],
      hint: 'getent interroge une base : ici la base group.',
      explain: 'getent group sudo → sudo:x:27:etudiant. Le dernier champ liste les membres.',
      mistakes: [
        { re: '^groups\\s+sudo', msg: "groups sudo affiche les groupes d'un UTILISATEUR nommé sudo, pas les membres du groupe sudo." },
        { re: 'getent\\s+passwd', msg: "La base passwd contient les comptes ; pour un groupe, c'est getent group." }
      ],
      src: 'Cours 2 §1.4', level: 1 },
    { id: 'c2-x-005',
      prompt: 'Affiche la ligne de /etc/passwd qui décrit le compte etudiant.',
      answers: ['grep etudiant /etc/passwd', 'grep ^etudiant /etc/passwd', 'getent passwd etudiant'],
      hint: 'Filtre le fichier avec grep.',
      explain: 'grep etudiant /etc/passwd → etudiant:x:1000:1000:Etudiant ESEO:/home/etudiant:/bin/bash (7 champs).',
      mistakes: [
        { re: '/etc/shadow', msg: "/etc/shadow (mots de passe hachés) n'est lisible que par root ; les comptes sont décrits dans /etc/passwd." },
        { re: '^cat\\s+/etc/passwd$', msg: 'cat affiche tout le fichier : filtre la ligne voulue avec grep etudiant /etc/passwd.' }
      ],
      src: 'Cours 2 §1.3', level: 1 },
    { id: 'c2-x-006',
      prompt: 'Affiche les droits du répertoire test lui-même (et non son contenu).',
      context: 'Tu es dans ~ (/home/etudiant).',
      answers: ['ls -ld test'],
      hint: 'ls -l + l\'option d (directory).',
      explain: 'ls -ld test : -l pour le format long, -d pour afficher le répertoire lui-même → drwxr-xr-x … test.',
      mistakes: [
        { re: '^ls\\s+-l\\s+test', msg: 'ls -l test liste le CONTENU de test ; ajoute -d pour afficher le répertoire lui-même.' },
        { re: '^ls\\s+-d\\s+test', msg: '-d seul affiche juste le nom ; il faut aussi -l pour voir les droits : ls -ld test.' }
      ],
      src: 'Cours 2 §2.2 · TP2 ex.3', level: 1 },
    { id: 'c2-x-007',
      prompt: "Retire-toi (propriétaire seulement) les droits de lecture et d'écriture sur essai.",
      context: "Tu es dans ~/test. essai t'appartient et est en rw-r--r--.",
      answers: ['chmod u-rw essai'],
      chmod: { file: 'essai', from: 'rw-r--r--', to: '---r--r--' },
      hint: 'u, puis -, puis les deux lettres.',
      explain: 'chmod u-rw essai : u = propriétaire, - = retirer, rw = lecture + écriture → ---r--r--. cat essai et echo … > essai sont alors refusés (TP2 ex.3.3).',
      mistakes: [
        { re: 'chmod\\s+-rw', msg: 'Sans lettre de catégorie, le retrait vise tout le monde : précise u-rw.' },
        { re: 'chmod\\s+u-r\\s', msg: 'Tu ne retires que r : il faut retirer r ET w (u-rw).' },
        { re: 'chmod\\s+u-w\\s', msg: 'Tu ne retires que w : il faut retirer r ET w (u-rw).' }
      ],
      src: 'Cours 2 §3.1 · TP2 ex.3', level: 1 },
    { id: 'c2-x-008',
      prompt: "Rétablis uniquement ton droit d'écriture sur essai.",
      context: 'Tu es dans ~/test ; essai est en ---r--r--.',
      answers: ['chmod u+w essai'],
      chmod: { file: 'essai', from: '---r--r--', to: '-w-r--r--' },
      hint: 'u, +, w.',
      explain: 'chmod u+w essai → -w-r--r--. Tu peux de nouveau écrire dans essai, mais toujours pas le lire.',
      mistakes: [
        { re: 'chmod\\s+u\\+rw', msg: "L'énoncé ne rétablit que w (le TP rétablit r plus tard) : chmod u+w essai." },
        { re: 'chmod\\s+a?\\+w', msg: 'Sans u, + ne vise pas que toi : écris u+w.' }
      ],
      src: 'TP2 ex.3', level: 1 },
    { id: 'c2-x-009',
      prompt: "Ajoute-toi (à toi seul) le droit d'exécution sur essai.",
      context: 'Tu es dans ~/test ; essai (en -w-r--r--) contient la ligne echo "Ceci est un essai".',
      answers: ['chmod u+x essai'],
      chmod: { file: 'essai', from: '-w-r--r--', to: '-wxr--r--' },
      hint: 'u, +, x.',
      explain: 'chmod u+x essai → -wxr--r--. Le fichier est « exécutable » pour toi… mais pas encore lisible.',
      mistakes: [
        { re: 'chmod\\s+a?\\+x', msg: '+x sans u (ou a+x) donne x à tout le monde : l\'énoncé dit « à toi seul » → u+x.' },
        { re: 'chmod\\s+[0-7]{3}', msg: 'En octal il faudrait 344 (-wx r-- r--) ; u+x est plus simple : il ajoute x sans toucher au reste.' }
      ],
      src: 'TP2 ex.3', level: 1 },
    { id: 'c2-x-010',
      prompt: 'Exécute le fichier essai comme un programme, depuis le répertoire courant.',
      context: 'Tu es dans ~/test ; essai est en -wxr--r--.',
      answers: ['./essai'],
      hint: 'Préfixe le nom par le chemin du répertoire courant.',
      explain: './ = « dans le répertoire courant ». Ici le résultat est « Permission non accordée » : x est présent, mais bash ne peut pas LIRE le script (pas de r). Il faut r ET x (TP2 ex.3.4).',
      mistakes: [
        { re: '^essai$', msg: 'Sans ./, bash cherche essai dans le PATH, qui ne contient pas le répertoire courant : « commande introuvable ».' },
        { re: '^(bash|sh)\\s+essai', msg: "bash essai fait lire le fichier par bash (il faudrait r) ; l'énoncé demande de l'exécuter directement avec ./." }
      ],
      src: 'Cours 2 §2.6 · TP2 ex.3', level: 1 },
    { id: 'c2-x-011',
      prompt: "Lance le script bonjour.sh en le faisant lire par l'interpréteur bash (le fichier n'a pas le droit x).",
      context: 'Tu es dans ~ ; bonjour.sh est en rw-r--r--.',
      answers: ['bash bonjour.sh'],
      hint: "Donne le fichier en argument à l'interpréteur.",
      explain: 'bash bonjour.sh exécute /bin/bash, qui LIT le script : le droit r suffit. ./bonjour.sh échouerait faute de x.',
      mistakes: [
        { re: '^\\./bonjour', msg: "./bonjour.sh exige le droit x, que le fichier n'a pas (rw-r--r--)." },
        { re: '^sh\\s', msg: "Sous Debian/Ubuntu, sh est dash et non bash : l'énoncé demande bash." }
      ],
      src: 'Cours 2 §2.6 · TP2 ex.10', level: 1 },
    { id: 'c2-x-012',
      prompt: 'Rends bonjour.sh exécutable par toi seul.',
      context: 'Tu es dans ~ ; bonjour.sh est en rw-r--r--.',
      answers: ['chmod u+x bonjour.sh'],
      chmod: { file: 'bonjour.sh', from: 'rw-r--r--', to: 'rwxr--r--' },
      hint: 'Ajoute x au propriétaire.',
      explain: "chmod u+x bonjour.sh → rwxr--r--. ./bonjour.sh fonctionne (r + x) ; la ligne #!/bin/bash désigne l'interpréteur.",
      mistakes: [
        { re: 'chmod\\s+a?\\+x', msg: '+x sans u (ou a+x) donne x à tout le monde : écris u+x.' },
        { re: 'chmod\\s+0?777', msg: '777 donne tous les droits à tout le monde : à éviter absolument.' }
      ],
      src: 'Cours 2 §3.1 · TP2 ex.10', level: 1 },
    { id: 'c2-x-013',
      prompt: 'Affiche ton umask actuel en octal (pour pouvoir le rétablir plus tard).',
      answers: ['umask'],
      hint: 'La commande seule, sans argument.',
      explain: 'umask → 0022 : les droits retirés aux nouveaux fichiers et répertoires.',
      mistakes: [
        { re: 'umask\\s+-S', msg: "-S affiche en symbolique ; en octal, c'est umask sans argument." },
        { re: 'umask\\s+0?[0-7]{3}', msg: "Avec un nombre, tu MODIFIES le masque ! Sans argument, umask l'affiche." }
      ],
      src: 'Cours 2 §3.5 · TP2 ex.5', level: 1 },
    { id: 'c2-x-014',
      prompt: 'Affiche ton umask sous forme symbolique (droits conservés).',
      answers: ['umask -S'],
      hint: 'Une option en majuscule.',
      explain: 'umask -S → u=rwx,g=rx,o=rx (avec umask 022) : ce sont les droits CONSERVÉS.',
      mistakes: [
        { re: '^umask$', msg: "Sans option, umask affiche l'octal (0022) ; ajoute -S." },
        { re: 'umask\\s+-s', msg: "L'option est -S majuscule." }
      ],
      src: 'Cours 2 §3.5 · TP2 ex.5', level: 1 },
    { id: 'c2-x-015',
      prompt: 'Fixe les droits de rapport.txt à rw-r----- en notation octale.',
      context: 'Tu es dans ~ ; rapport.txt t\'appartient et est en rw-r--r--.',
      answers: ['chmod 640 rapport.txt'],
      chmod: { file: 'rapport.txt', from: 'rw-r--r--', to: 'rw-r-----' },
      hint: 'rw- = 4+2, r-- = 4, --- = 0.',
      explain: '640 : 6 = 4+2 = rw- (propriétaire), 4 = r-- (groupe), 0 = --- (autres).',
      mistakes: [
        { re: 'chmod\\s+0?604', msg: 'Ordre des chiffres : propriétaire, groupe, autres → 6 (rw-), 4 (r--), 0 (---).' },
        { re: 'chmod\\s+0?460', msg: 'Le premier chiffre est le propriétaire : rw- = 4+2 = 6.' },
        { re: 'chmod\\s+0?750', msg: '750 = rwxr-x--- : pas de x sur ce fichier, et rw- = 6.' }
      ],
      src: 'Cours 2 §3.2-3.3', level: 1 },
    { id: 'c2-x-016',
      prompt: "Crée l'utilisateur toto (avec son répertoire personnel).",
      context: 'Tu es etudiant (membre de sudo).',
      answers: ['sudo adduser toto'],
      hint: 'add + user, avec les droits root.',
      explain: 'sudo adduser toto crée le compte toto, son groupe principal et /home/toto, puis demande un mot de passe.',
      mistakes: [
        { re: 'useradd', msg: 'useradd est la commande bas niveau (sans -m, pas de répertoire personnel) ; le cours utilise adduser.' },
        { re: 'groupadd', msg: 'groupadd crée un groupe, pas un utilisateur.' },
        { re: '^adduser', msg: 'Créer un compte nécessite root : sudo adduser toto.' }
      ],
      src: 'Cours 2 §1.5 · TP2 ex.7', level: 1 },
    { id: 'c2-x-017',
      prompt: "Change le mot de passe de l'utilisateur toto.",
      context: 'Tu es etudiant (membre de sudo).',
      answers: ['sudo passwd toto'],
      hint: 'passwd + le nom du compte, en root.',
      explain: "sudo passwd toto : changer le mot de passe d'un AUTRE utilisateur demande root. passwd seul change le tien.",
      mistakes: [
        { re: '^passwd\\s+toto', msg: "Changer le mot de passe d'un autre utilisateur nécessite root : sudo passwd toto." },
        { re: '^(sudo\\s+)?passwd\\s*$', msg: 'Sans argument, passwd change TON mot de passe ; précise toto.' }
      ],
      src: 'Cours 2 §1.5', level: 1 },
    { id: 'c2-x-018',
      prompt: 'Crée le groupe projet.',
      context: 'Tu es etudiant (membre de sudo).',
      answers: ['sudo groupadd projet', 'sudo addgroup projet'],
      hint: 'group + add.',
      explain: 'sudo groupadd projet ajoute une ligne projet:x:GID: dans /etc/group.',
      mistakes: [
        { re: 'usermod', msg: 'usermod modifie un compte existant ; pour créer un groupe : groupadd.' },
        { re: 'adduser\\s+projet$', msg: 'adduser projet créerait un UTILISATEUR projet ; pour un groupe : groupadd projet.' },
        { re: '^groupadd', msg: 'Créer un groupe nécessite root : sudo groupadd projet.' }
      ],
      src: 'Cours 2 §1.5 · TP2 ex.8', level: 1 },
    { id: 'c2-x-019',
      prompt: "Ajoute l'utilisateur toto au groupe projet sans le retirer de ses autres groupes.",
      context: 'Tu es etudiant (membre de sudo).',
      answers: ['sudo usermod -aG projet toto', 'sudo gpasswd -a toto projet', 'sudo adduser toto projet'],
      hint: 'usermod avec deux options : append + Groups.',
      explain: "usermod modifie un compte : -a (append) ajoute, -G projet = groupe secondaire, toto = l'utilisateur. Vérification : getent group projet.",
      mistakes: [
        { re: 'usermod\\s+-G\\s', msg: 'Sans -a, usermod -G REMPLACE tous les groupes secondaires de toto : il perdrait les autres.' },
        { re: 'usermod\\s+-aG\\s+toto\\s+projet', msg: "Ordre : d'abord le groupe, puis l'utilisateur → usermod -aG projet toto." },
        { re: '^usermod', msg: 'Modifier un compte nécessite les droits root : préfixe avec sudo.' }
      ],
      src: 'Cours 2 §1.5 · TP2 ex.8', level: 1 },
    { id: 'c2-x-020',
      prompt: 'Ouvre une session complète en tant que toto (son environnement, son répertoire personnel).',
      answers: ['su - toto', 'su -l toto', 'su --login toto'],
      hint: 'substitute user, avec un tiret.',
      explain: 'su - toto : su (substitute user), - = shell de connexion. Le mot de passe demandé est celui de toto. exit pour revenir.',
      mistakes: [
        { re: '^su\\s+toto$', msg: 'Sans -, tu gardes ton environnement (répertoire courant, variables) : su - toto ouvre une vraie session de connexion.' },
        { re: '^sudo\\s+-u', msg: 'sudo -u exécute une commande en tant que toto ; le cours utilise su - toto pour ouvrir une session.' }
      ],
      src: 'Cours 2 §1.5 · TP2 ex.13', level: 1 },
    { id: 'c2-x-021',
      prompt: "Affiche la liste des commandes que tu as le droit d'exécuter avec sudo.",
      answers: ['sudo -l'],
      hint: 'Option « list » de sudo.',
      explain: 'sudo -l (list) affiche tes droits sudo : fait partie de l\'audit de sécurité.',
      mistakes: [
        { re: 'sudo\\s+ls', msg: "sudo ls exécute ls en root ; l'option list de sudo est -l." },
        { re: 'sudo\\s+-L', msg: "L'option est -l minuscule (list)." }
      ],
      src: 'Cours 2 §5.2', level: 1 },

    /* ---------- Niveau 2 ---------- */
    { id: 'c2-x-022',
      prompt: 'Retire-toi le droit de lecture sur le répertoire courant (test).',
      context: "Tu es dans ~/test (drwxr-xr-x, il t'appartient).",
      answers: ['chmod u-r .', 'chmod u-r ~/test', 'chmod u-r /home/etudiant/test', 'chmod u-r ../test'],
      hint: 'Le répertoire courant se note « . ».',
      explain: "chmod u-r . : « . » désigne le répertoire courant. Ensuite ls est refusé, mais cat essai fonctionne : r = lister, l'accès à un nom connu ne demande que x (TP2 ex.4.1).",
      mistakes: [
        { re: 'chmod\\s+u-r\\s+essai', msg: "Tu vises le fichier essai : c'est le répertoire courant (.) qu'il faut modifier." },
        { re: 'chmod\\s+-r\\s', msg: 'Sans u, le retrait vise tout le monde : écris u-r.' },
        { re: 'chmod\\s+u-x', msg: 'x = traverser ; la lecture (lister) est r.' }
      ],
      src: 'Cours 2 §2.4 · TP2 ex.4', level: 2 },
    { id: 'c2-x-023',
      prompt: 'Retire-toi le droit de traversée (exécution) sur le répertoire test.',
      context: 'Tu es dans ~ ; test est en rwxr-xr-x.',
      answers: ['chmod u-x test'],
      chmod: { file: 'test', from: 'rwxr-xr-x', to: 'rw-r-xr-x' },
      hint: 'Traverser un répertoire = le droit x.',
      explain: 'chmod u-x test → rw-r-xr-x. Ensuite cd test, touch test/f, cat test/essai sont refusés : x sur un répertoire = le traverser (TP2 ex.4.3).',
      mistakes: [
        { re: 'chmod\\s+u-r', msg: 'r = lister le contenu ; traverser (cd, accès aux éléments) correspond à x.' },
        { re: 'chmod\\s+a?-x', msg: 'Sans u, -x retire x à tout le monde : écris u-x.' }
      ],
      src: 'Cours 2 §2.3-2.4 · TP2 ex.4', level: 2 },
    { id: 'c2-x-024',
      prompt: 'Rétablis ton droit x sur le répertoire test, en le désignant par le chemin ~/test.',
      context: 'Tu es DANS ~/test et tu viens de retirer le droit x sur ce répertoire (chmod u-x .).',
      answers: ['chmod u+x ~/test', 'chmod u+x /home/etudiant/test'],
      hint: 'Indice du TP : utilise le chemin ~/test.',
      explain: "Sans x sur le répertoire courant, même « . » ne peut plus être résolu : chmod u+x . échoue. Le chemin ~/test part de / et ne traverse que /, /home et /home/etudiant, où tu as x.",
      mistakes: [
        { re: 'chmod\\s+\\S+\\s+\\.\\/?$', msg: '« . » est cherché dans le répertoire courant, que tu ne peux plus traverser : passe par ~/test.' },
        { re: 'chmod\\s+\\S+\\s+test\\/?$', msg: 'Un chemin relatif part du répertoire courant (non traversable) : utilise ~/test.' },
        { re: 'chmod\\s+a?\\+x', msg: 'Précise u+x pour ne rétablir que ton droit.' }
      ],
      src: 'TP2 ex.4', level: 2 },
    { id: 'c2-x-025',
      prompt: 'Supprime le fichier nouveau en forçant (sans question de confirmation).',
      context: 'Tu es dans ~/test, sur lequel tu as rwx. Le fichier nouveau est en r--r--r-- (protégé en écriture).',
      answers: ['rm -f nouveau'],
      hint: 'rm avec l\'option « force ».',
      explain: "rm -f nouveau : -f supprime sans demander. C'est possible car la suppression dépend du droit w sur le RÉPERTOIRE test, pas des droits du fichier (TP2 ex.4.2).",
      mistakes: [
        { re: 'chmod', msg: 'Inutile de changer les droits de nouveau : supprimer dépend du droit w du répertoire test, que tu as.' },
        { re: '^rm\\s+nouveau$', msg: 'Ça marche, mais rm demande confirmation (« fichier protégé en écriture ») : ajoute -f pour forcer.' }
      ],
      src: 'Cours 2 §2.4 · TP2 ex.4', level: 2 },
    { id: 'c2-x-026',
      prompt: "Définis un umask très restrictif : personne d'autre que toi ne peut lire, écrire ni traverser tes nouveaux fichiers et répertoires.",
      answers: ['umask 077', 'umask 0077', 'umask u=rwx,g=,o='],
      hint: 'On retire tout (7) au groupe et aux autres.',
      explain: 'umask 077 retire tout au groupe et aux autres : fichier 666 → 600 (rw-------), répertoire 777 → 700 (rwx------).',
      mistakes: [
        { re: 'umask\\s+0?700', msg: "Le umask indique ce qu'on RETIRE : 700 retirerait tout au propriétaire ! Il faut retirer 077." },
        { re: 'umask\\s+0?600', msg: '600 est le RÉSULTAT voulu pour un fichier ; le masque, lui, retire 077.' },
        { re: '^chmod', msg: 'chmod modifie des fichiers existants ; les droits des futurs fichiers se règlent avec umask.' }
      ],
      src: 'Cours 2 §3.6 · TP2 ex.5', level: 2 },
    { id: 'c2-x-027',
      prompt: 'Définis un umask équilibré : accès complet pour toi, lecture et traversée pour ton groupe, rien pour les autres.',
      answers: ['umask 027', 'umask 0027', 'umask u=rwx,g=rx,o='],
      hint: 'Retirer w (2) au groupe, tout (7) aux autres.',
      explain: 'umask 027 : on retire w au groupe et tout aux autres → fichiers 640 (rw-r-----), répertoires 750 (rwxr-x---).',
      mistakes: [
        { re: 'umask\\s+0?750', msg: "750 est le RÉSULTAT pour un répertoire ; le masque est ce qu'on retire : 027." },
        { re: 'umask\\s+0?022', msg: '022 laisse la lecture aux autres : il faut aussi tout leur retirer (7).' },
        { re: 'umask\\s+0?077', msg: '077 ne laisse rien au groupe : il doit garder r et x (on ne lui retire que w = 2).' }
      ],
      src: 'Cours 2 §3.6 · TP2 ex.5', level: 2 },
    { id: 'c2-x-028',
      prompt: 'Avec la syntaxe symbolique (comme chmod), retire aux autres la lecture sur tes futurs fichiers.',
      context: 'umask actuel : 0022.',
      answers: ['umask o-r'],
      hint: 'umask accepte la même syntaxe que chmod : o, -, r.',
      explain: 'En symbolique, umask décrit les droits AUTORISÉS : o-r retire r aux autres. Le masque passe de 0022 à 0026 → nouveaux fichiers en 640.',
      mistakes: [
        { re: '^chmod', msg: 'chmod modifie les fichiers existants ; pour les futurs fichiers : umask o-r.' },
        { re: 'umask\\s+0?026', msg: "Le résultat est bien 026, mais l'énoncé demande la syntaxe symbolique : umask o-r." },
        { re: 'umask\\s+o\\+r', msg: '+ ajouterait la lecture ; pour la retirer : o-r.' }
      ],
      src: 'TP2 §5', level: 2 },
    { id: 'c2-x-029',
      prompt: 'Rends le réglage umask 027 permanent : ajoute la ligne « umask 027 » à la fin de ton ~/.bashrc, en une commande.',
      answers: ['echo "umask 027" >> ~/.bashrc', 'echo "umask 027" >> /home/etudiant/.bashrc'],
      hint: 'echo + redirection qui AJOUTE en fin de fichier.',
      explain: 'echo "umask 027" >> ~/.bashrc : >> ajoute en fin de fichier. Le .bashrc est lu à chaque ouverture de terminal : le réglage devient permanent.',
      mistakes: [
        { re: '(^|[^>])>[^>]', msg: 'Avec un seul > tu ÉCRASES tout ton ~/.bashrc ! Utilise >> pour ajouter à la fin.' },
        { re: '^umask', msg: "Taper umask 027 ne vaut que pour le terminal courant : il faut l'écrire dans ~/.bashrc." }
      ],
      src: 'Cours 2 §3.6 · TP2 §5', level: 2 },
    { id: 'c2-x-030',
      prompt: 'TP2 ex.6(a) : applique à fic les droits u=rx, g=wx, o=r, en notation octale.',
      context: 'fic est en rw-r--r--.',
      answers: ['chmod 534 fic'],
      chmod: { file: 'fic', from: 'rw-r--r--', to: 'r-x-wxr--' },
      hint: 'r-x = 4+1, -wx = 2+1, r-- = 4.',
      explain: 'r-x = 5 ; -wx = 3 ; r-- = 4 → chmod 534 fic (r-x-wxr--).',
      mistakes: [
        { re: 'chmod\\s+0?543', msg: 'Groupe et autres inversés : g = -wx = 3, o = r-- = 4.' },
        { re: 'chmod\\s+0?5[0-24-7]4\\b', msg: 'Recalcule le groupe : w + x = 2 + 1 = 3.' },
        { re: 'chmod\\s+0?[0-46-7]34\\b', msg: 'Recalcule le propriétaire : r + x = 4 + 1 = 5.' }
      ],
      src: 'Cours 2 §3.3 · TP2 ex.6', level: 2 },
    { id: 'c2-x-031',
      prompt: "TP2 ex.10.4 : donne à bonjour.sh les droits permettant à tout le monde de l'exécuter, mais à toi seul de le modifier (en octal).",
      context: 'bonjour.sh est en rwxr--r--.',
      answers: ['chmod 755 bonjour.sh', 'chmod go+x bonjour.sh'],
      chmod: { file: 'bonjour.sh', from: 'rwxr--r--', to: 'rwxr-xr-x' },
      hint: 'Les autres ont besoin de r ET x.',
      explain: '755 = rwx (toi), r-x (groupe), r-x (autres). Un script lancé avec ./ exige r ET x : les autres ont besoin des deux.',
      mistakes: [
        { re: 'chmod\\s+0?711', msg: 'x sans r ne suffit pas pour un script : bash doit pouvoir le lire → r-x pour les autres (755).' },
        { re: 'chmod\\s+0?777', msg: '777 permettrait à tout le monde de le modifier : à éviter.' },
        { re: 'chmod\\s+0?775', msg: '775 laisse le groupe modifier le script ; toi seul dois avoir w : 755.' }
      ],
      src: 'Cours 2 §3.4 · TP2 ex.10', level: 2 },
    { id: 'c2-x-032',
      prompt: 'Donne au groupe le droit de lecture sur le répertoire test ET sur tout son contenu.',
      context: 'Tu es dans ~.',
      answers: ['chmod -R g+r test'],
      hint: 'Option récursive (majuscule).',
      explain: "chmod -R g+r test : -R applique g+r à test et à tout ce qu'il contient, sans toucher aux autres droits.",
      mistakes: [
        { re: 'chmod\\s+-r\\s', msg: "chmod -r signifie « retirer r » ! L'option récursive est -R majuscule." },
        { re: '^chmod\\s+g\\+r\\s+test\\/?$', msg: 'Sans -R, seul le répertoire test est modifié, pas son contenu.' },
        { re: 'chmod\\s+-R\\s+[0-7]{3}', msg: 'Un octal FIXERAIT tous les droits de tous les fichiers ; g+r ajoute seulement la lecture au groupe.' }
      ],
      src: 'Cours 2 §3.1', level: 2 },
    { id: 'c2-x-033',
      prompt: "TP2 ex.7.2 : change le propriétaire du répertoire test pour l'utilisateur toto.",
      context: "Tu es dans ~ ; test t'appartient ; toto existe.",
      answers: ['sudo chown toto test'],
      hint: 'change owner, réservé à root.',
      explain: 'sudo chown toto test : seul root peut changer le propriétaire. Ensuite (drwxr-xr-x toto etudiant), tu relèves du groupe (r-x) : tu ne peux plus créer de fichier dans test.',
      mistakes: [
        { re: 'chgrp', msg: 'chgrp change le groupe, pas le propriétaire.' },
        { re: 'chown\\s+test\\s+toto', msg: "Ordre : d'abord le nouveau propriétaire, puis le fichier → chown toto test." },
        { re: '^chown', msg: 'Opération non permise : seul root peut changer le propriétaire (sinon chacun pourrait « donner » ses fichiers) → sudo.' }
      ],
      src: 'Cours 2 §4.1 · TP2 ex.7', level: 2 },
    { id: 'c2-x-034',
      prompt: 'TP2 ex.7.4 : fixe les droits de test/essai à rw------- en octal.',
      context: "Tu es dans ~ ; test/essai t'appartient et est en rw-r--r--.",
      answers: ['chmod 600 test/essai', 'chmod go= test/essai'],
      chmod: { file: 'test/essai', from: 'rw-r--r--', to: 'rw-------' },
      hint: 'rw- = 6, puis rien pour les deux autres catégories.',
      explain: "600 : rw- (6) pour toi, rien (0) pour le groupe et les autres. Si tu donnes ensuite le fichier à toto, tu ne pourras plus le lire.",
      mistakes: [
        { re: 'chmod\\s+0?700', msg: '700 ajoute x, inutile sur ce fichier : rw- = 6 → 600.' },
        { re: 'chmod\\s+u=rw\\s', msg: "u=rw ne touche pas g et o, qui gardent r-- : il faut aussi go= (ou l'octal 600)." },
        { re: 'chmod\\s+0?0[0-7]6|chmod\\s+0?060', msg: 'Le premier chiffre est le propriétaire : 600.' }
      ],
      src: 'Cours 2 §3.4 · TP2 ex.7', level: 2 },
    { id: 'c2-x-035',
      prompt: 'TP2 ex.7.7 : redeviens (etudiant) propriétaire du répertoire test et de tout son contenu.',
      context: 'Tu es dans ~. Après tes tests, test et son contenu appartiennent à toto.',
      answers: ['sudo chown -R etudiant test', 'sudo chown -R $USER test', 'sudo chown -R etudiant:etudiant test', 'sudo chown -R $USER:$USER test'],
      hint: 'chown récursif, avec sudo.',
      explain: 'sudo chown -R etudiant test : -R applique le changement au répertoire et à tout son contenu ($USER vaut etudiant).',
      mistakes: [
        { re: 'chown\\s+-r\\s', msg: "L'option récursive est -R majuscule." },
        { re: '^(sudo\\s+)?chown\\s+[^-\\s]', msg: 'Sans -R, seul le répertoire test change de propriétaire, pas son contenu.' },
        { re: '^chown', msg: 'Seul root peut changer le propriétaire : sudo.' }
      ],
      src: 'Cours 2 §4.1 · TP2 ex.7', level: 2 },
    { id: 'c2-x-036',
      prompt: "TP2 ex.8.3 : en une seule commande, donne test/essai à l'utilisateur toto ET au groupe projet.",
      context: "Tu es dans ~ ; test/essai t'appartient (rw-------) ; toto et le groupe projet existent.",
      answers: ['sudo chown toto:projet test/essai'],
      hint: 'chown utilisateur:groupe.',
      explain: 'sudo chown toto:projet test/essai : propriétaire toto et groupe projet en une commande (root obligatoire).',
      mistakes: [
        { re: 'chown\\s+projet:toto', msg: 'Ordre : utilisateur:groupe → toto:projet.' },
        { re: 'chown\\s+toto\\s', msg: 'chown toto ne change que le propriétaire : ajoute :projet pour le groupe.' },
        { re: '^chown', msg: 'Seul root peut changer le propriétaire : sudo.' }
      ],
      src: 'Cours 2 §4.1 · TP2 ex.8', level: 2 },
    { id: 'c2-x-037',
      prompt: "Fixe les droits de test/essai à rw-rw---- (tu n'en es plus propriétaire).",
      context: 'Tu es dans ~ ; test/essai est maintenant en rw------- toto projet.',
      answers: ['sudo chmod 660 test/essai', 'sudo chmod g+rw test/essai'],
      chmod: { file: 'test/essai', from: 'rw-------', to: 'rw-rw----' },
      hint: 'Seul le propriétaire ou root peut faire chmod.',
      explain: "660 = rw- rw- ---, avec sudo car toto est propriétaire. Toi (ni toto, ni membre de projet) tombes dans « autres » : plus aucun accès (TP2 ex.8.4).",
      mistakes: [
        { re: 'chmod\\s+0?666', msg: '666 donnerait rw- aux autres : le dernier chiffre doit être 0.' },
        { re: '^chmod', msg: "Tu n'es plus propriétaire : chmod serait refusé (Opération non permise) → sudo chmod." }
      ],
      src: 'Cours 2 §4.4 · TP2 ex.8', level: 2 },
    { id: 'c2-x-038',
      prompt: 'Ouvre un shell qui tient compte de ton nouveau groupe projet, sans te reconnecter.',
      context: "Tu viens de taper sudo usermod -aG projet etudiant, mais id n'affiche pas encore projet.",
      answers: ['newgrp projet'],
      hint: 'new + grp.',
      explain: "newgrp projet ouvre un nouveau shell avec le groupe projet ; id l'affiche alors et tu peux modifier essai (catégorie groupe rw-). exit pour le quitter.",
      mistakes: [
        { re: 'usermod|groupadd', msg: 'Tu es déjà membre de projet : il faut seulement que ton shell en tienne compte (newgrp).' },
        { re: '^newgrp\\s*$', msg: 'Précise le groupe : newgrp projet.' },
        { re: '^id', msg: "id confirme seulement que le groupe n'est pas encore pris en compte : newgrp projet ouvre un shell qui le prend en compte." }
      ],
      src: 'Cours 2 §1.5 · TP2 ex.8', level: 2 },
    { id: 'c2-x-039',
      prompt: 'TP2 ex.8.6 : sans sudo, donne le répertoire test au groupe projet.',
      context: 'Tu es dans ~, propriétaire de test et membre de projet (shell ouvert par newgrp).',
      answers: ['chgrp projet test', 'chown :projet test'],
      hint: 'change group : d\'abord le groupe, puis le fichier.',
      explain: 'chgrp projet test : le propriétaire peut changer le groupe sans sudo, vers un groupe dont il est membre. chown :projet test donne le même résultat.',
      mistakes: [
        { re: 'chgrp\\s+test\\s+projet', msg: "Ordre : d'abord le groupe, puis le fichier → chgrp projet test." },
        { re: 'chown\\s+projet(\\s|$)', msg: 'chown projet test changerait le PROPRIÉTAIRE (un utilisateur projet) : pour le groupe, chgrp projet test ou chown :projet test.' }
      ],
      src: 'Cours 2 §4.2 · TP2 ex.8', level: 2 },
    { id: 'c2-x-040',
      prompt: "Accorde au groupe propriétaire le droit d'écriture sur test, sans toucher au reste.",
      context: 'Tu es dans ~ ; test est en rwxr-xr-x etudiant projet.',
      answers: ['chmod g+w test'],
      chmod: { file: 'test', from: 'rwxr-xr-x', to: 'rwxrwxr-x' },
      hint: 'g, +, w.',
      explain: 'chmod g+w test → rwxrwxr-x : les membres de projet (et toi, propriétaire) peuvent créer et supprimer des fichiers dans test.',
      mistakes: [
        { re: 'chmod\\s+0?777', msg: "777 donnerait aussi w aux autres : à éviter. Seul le groupe doit l'obtenir." },
        { re: 'chmod\\s+(a|o|ugo)?\\+w', msg: 'Sans g, +w ne vise pas uniquement le groupe : écris g+w.' }
      ],
      src: 'Cours 2 §4.2-4.3 · TP2 ex.8', level: 2 },
    { id: 'c2-x-041',
      prompt: "Supprime l'utilisateur toto ET son répertoire personnel.",
      context: 'Tu es etudiant (membre de sudo). Fin du TP : le ménage.',
      answers: ['sudo deluser --remove-home toto', 'sudo userdel -r toto'],
      hint: 'deluser avec une option longue.',
      explain: 'sudo deluser --remove-home toto supprime le compte et /home/toto.',
      mistakes: [
        { re: 'deluser\\s+toto$', msg: 'Sans --remove-home, /home/toto est conservé.' },
        { re: 'userdel\\s+toto$', msg: 'Sans -r, userdel conserve /home/toto ; le cours utilise deluser --remove-home toto.' },
        { re: 'groupdel', msg: 'groupdel supprime un groupe, pas un utilisateur.' }
      ],
      src: 'Cours 2 §1.5 · TP2 ex.13', level: 2 },
    { id: 'c2-x-042',
      prompt: 'Supprime le groupe projet.',
      context: 'Tu es etudiant (membre de sudo). Fin du TP : le ménage.',
      answers: ['sudo groupdel projet', 'sudo delgroup projet'],
      hint: 'group + del.',
      explain: 'sudo groupdel projet retire le groupe de /etc/group.',
      mistakes: [
        { re: 'deluser\\s+projet', msg: 'deluser supprime un utilisateur ; pour un groupe : groupdel projet.' },
        { re: '^groupdel', msg: 'Supprimer un groupe nécessite root : sudo groupdel projet.' }
      ],
      src: 'Cours 2 §1.5 · TP2 ex.13', level: 2 },
    { id: 'c2-x-043',
      prompt: 'TP2 ex.13.2 : donne /srv/equipe à root et au groupe equipe, en une commande.',
      context: "/srv/equipe vient d'être créé avec sudo mkdir (il appartient à root:root). Le groupe equipe existe.",
      answers: ['sudo chown root:equipe /srv/equipe', 'sudo chgrp equipe /srv/equipe', 'sudo chown :equipe /srv/equipe'],
      hint: 'chown utilisateur:groupe.',
      explain: 'sudo chown root:equipe /srv/equipe : propriétaire root, groupe equipe. Il restera à fixer les droits (770).',
      mistakes: [
        { re: 'chown\\s+equipe:root', msg: 'Ordre : utilisateur:groupe → root:equipe.' },
        { re: 'chown\\s+equipe(\\s|$)', msg: 'chown equipe changerait le propriétaire en un UTILISATEUR equipe : écris root:equipe.' },
        { re: '^(chown|chgrp)', msg: 'Le répertoire appartient à root : il faut sudo.' }
      ],
      src: 'Cours 2 §4.3 · TP2 ex.13', level: 2 },

    /* ---------- Niveau 3 ---------- */
    { id: 'c2-x-044',
      prompt: 'TP2 ex.6(c) : écris en notation symbolique (avec =) la commande équivalente à chmod 653 fic.',
      context: 'fic est en rwx--x--x (711).',
      answers: ['chmod u=rw,g=rx,o=wx fic'],
      hint: '6 = 4+2, 5 = 4+1, 3 = 2+1.',
      explain: "653 : 6 = rw-, 5 = r-x, 3 = -wx → chmod u=rw,g=rx,o=wx fic. Le = fixe exactement, comme l'octal : les droits initiaux (711) sont ignorés.",
      mistakes: [
        { re: 'chmod\\s+0?653', msg: "C'est la forme octale : l'énoncé demande u=…,g=…,o=…." },
        { re: 'o=x(\\s|,|$)', msg: '3 = 2 + 1 = -wx : les autres ont w ET x.' },
        { re: '\\+', msg: 'Avec +, les droits initiaux (711) seraient conservés : utilise = pour fixer exactement.' }
      ],
      src: 'Cours 2 §3.3 · TP2 ex.6', level: 3 },
    { id: 'c2-x-045',
      prompt: 'TP2 ex.6.2 : remplace « chmod 653 fic » suivi de « chmod u-r,g+w,o-r fic » par UNE seule commande octale donnant le même résultat.',
      context: 'fic est en rw-r--r--.',
      answers: ['chmod 273 fic'],
      chmod: { file: 'fic', from: 'rw-r--r--', to: '-w-rwx-wx' },
      hint: "Pars de 653 = rw-r-x-wx et applique chaque modification.",
      explain: '653 = rw-r-x-wx ; u-r → -w- (2) ; g+w → rwx (7) ; o-r → -wx inchangé (3). Résultat -w-rwx-wx = 273.',
      mistakes: [
        { re: 'chmod\\s+0?653', msg: "653 n'est que l'état intermédiaire : applique ensuite u-r, g+w, o-r." },
        { re: 'chmod\\s+0?473', msg: 'u-r retire r à rw- : il reste -w- = 2.' },
        { re: 'chmod\\s+0?27[0-24-7]\\b', msg: "Les autres sont en -wx (3) : o-r ne change rien puisqu'ils n'ont pas r." }
      ],
      src: 'TP2 ex.6', level: 3 },
    { id: 'c2-x-046',
      prompt: 'TP2 ex.13.4 : en une commande octale, donne un accès complet au propriétaire et au groupe, rien aux autres, ET active le setgid sur /srv/equipe.',
      context: '/srv/equipe est en drwxr-xr-x root equipe.',
      answers: ['sudo chmod 2770 /srv/equipe'],
      hint: 'Chiffre spécial du SGID devant les trois chiffres habituels.',
      explain: '2770 : 2 = setgid (2000) devant 770 (rwxrwx---). ls -ld affiche drwxrws--- : les fichiers créés dedans héritent du groupe equipe.',
      mistakes: [
        { re: 'chmod\\s+0?770', msg: "770 fixe bien les droits, mais sans le 2 initial les fichiers n'hériteront pas du groupe equipe." },
        { re: 'chmod\\s+4770', msg: "4 = SUID (droits du propriétaire à l'exécution) ; le setgid est 2." },
        { re: 'chmod\\s+[0-7]?77[1-7]', msg: 'Les autres ne doivent rien avoir : dernier chiffre 0.' }
      ],
      src: 'Cours 2 §5.1 · TP2 ex.13', level: 3 },
    { id: 'c2-x-047',
      prompt: 'Ajoute le sticky bit à /srv/equipe pour que chacun ne puisse supprimer que ses propres fichiers.',
      context: "/srv/equipe est en drwxrws--- root equipe ; alice et bob (membres d'equipe) y travaillent.",
      answers: ['sudo chmod +t /srv/equipe', 'sudo chmod o+t /srv/equipe', 'sudo chmod 3770 /srv/equipe'],
      hint: 'Le sticky bit se note t.',
      explain: "+t pose le sticky bit (1000) : ls -ld affiche drwxrws--T (T majuscule car les autres n'ont pas x). En octal : 2000 + 1000 + 770 = 3770.",
      mistakes: [
        { re: '\\+s', msg: "s correspond au SUID/SGID ; le sticky bit s'écrit t." },
        { re: 'chmod\\s+1777', msg: '1777 ouvrirait le répertoire à tout le monde (rwx pour les autres) : ajoute seulement t.' },
        { re: '^chmod', msg: 'Le répertoire appartient à root : sudo.' }
      ],
      src: 'Cours 2 §5.1 · TP2 ex.13', level: 3 },
    { id: 'c2-x-048',
      prompt: 'TP2 ex.12.1 : cherche dans ton répertoire personnel les fichiers ordinaires modifiables par tout le monde.',
      answers: ['find ~ -type f -perm -o=w', 'find ~ -type f -perm -002', 'find ~ -type f -perm -o+w', 'find /home/etudiant -type f -perm -o=w'],
      hint: 'find, ton home, -type f, -perm avec un tiret.',
      explain: 'find ~ : à partir de ton home ; -type f : fichiers ordinaires ; -perm -o=w : AU MOINS w pour les autres. Correction éventuelle : chmod o-w fichier.',
      mistakes: [
        { re: '-perm\\s+o[=+]w', msg: 'Sans tiret, -perm cherche des droits EXACTEMENT égaux (------w-) : -perm -o=w = « au moins w pour les autres ».' },
        { re: '-type\\s+d', msg: '-type d = répertoires ; les fichiers ordinaires sont -type f.' },
        { re: '^find\\s+/\\s', msg: 'On cherche dans ton répertoire personnel : find ~.' }
      ],
      src: 'Cours 2 §5.2 · TP2 ex.12', level: 3 },
    { id: 'c2-x-049',
      prompt: "TP2 ex.12.2 : liste les programmes de /usr/bin qui ont le droit SUID, en masquant les messages d'erreur.",
      answers: ['find /usr/bin -perm -4000 2>/dev/null', 'find /usr/bin -perm -u=s 2>/dev/null', 'find /usr/bin -perm /4000 2>/dev/null'],
      hint: 'SUID = 4000 ; erreurs = sortie 2.',
      explain: "-perm -4000 : au moins le bit SUID ; 2>/dev/null envoie les erreurs (sortie 2) dans le vide. On reconnaît passwd, sudo, su, mount, newgrp…",
      mistakes: [
        { re: '(^|[^2])>\\s*/dev/null', msg: "> /dev/null masque la sortie NORMALE (les résultats !) ; ce sont les erreurs qu'on cache avec 2>/dev/null." },
        { re: '-perm\\s+4000', msg: 'Sans tiret, -perm 4000 cherche le mode EXACTEMENT 4000 : rien ne correspond. Écris -perm -4000.' },
        { re: '-4000\\s*$', msg: 'Ajoute 2>/dev/null pour masquer les erreurs « Permission non accordée ».' }
      ],
      src: 'Cours 2 §5.2 · TP2 ex.12', level: 3 },
    { id: 'c2-x-050',
      prompt: "TP2 ex.12.3 : affiche les fichiers de ton répertoire personnel qui n'appartiennent PAS à toi (utilise la variable $USER).",
      answers: ['find ~ ! -user $USER', 'find ~ -not -user $USER', 'find ~ \\! -user $USER', 'find ~ ! -user etudiant', 'find /home/etudiant ! -user etudiant'],
      hint: 'find avec la négation ! devant -user.',
      explain: '! inverse le test : -user $USER trouverait TES fichiers, ! -user $USER trouve tous les autres. Aucune sortie = tout est bien à toi.',
      mistakes: [
        { re: '^find\\s+\\S+\\s+-user', msg: 'Sans !, tu trouves au contraire TES fichiers : ajoute ! devant -user.' },
        { re: '-user\\s+root', msg: "On cherche ce qui n'est pas à TOI : ! -user $USER." }
      ],
      src: 'Cours 2 §5.2 · TP2 ex.12', level: 3 }
  ]
});
