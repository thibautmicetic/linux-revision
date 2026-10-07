APP.registerChapter({
  id: 'c3',
  num: 3,
  title: 'Les processus',
  subtitle: 'Cours 3 + TP 3',

  sections: [
    {
      id: 'c3-s-def', title: "1. Qu'est-ce qu'un processus ?", src: 'Cours 3 §1.1-1.3 · TP3 §1-2, ex.1',
      html: `<p>Un <b>processus</b> est un objet <b>dynamique</b> correspondant à l'exécution d'un programme ou d'une commande Linux : c'est un programme <b>en train d'être exécuté</b> par le système. Il regroupe l'état d'avancement du programme, ses données propres et des informations sur son contexte d'exécution. Les processus ont un identifiant unique, passent par plusieurs états et coexistent en partageant les ressources du système.</p>
<div class="flow"><span>Programme : /usr/bin/firefox (fichier sur disque)</span><span>lancement</span><span>Processus PID 4821 en mémoire : code + données, temps CPU, fichiers ouverts</span></div>
<h3>1.2 Programme ou processus ?</h3>
<div class="grid2">
<div class="mini"><h4>Programme</h4><p>Ensemble de fichiers contenant du code ou des instructions, stocké sur le disque sous forme de fichier exécutable. Objet <b>statique</b> : il ne fait rien tant qu'on ne le lance pas.</p></div>
<div class="mini"><h4>Processus</h4><p><b>Instance en cours d'exécution</b> d'un programme, avec les ressources que le système lui attribue (mémoire, temps processeur…). Objet <b>dynamique</b> : un même programme peut donner <b>plusieurs processus</b> en même temps (deux terminaux = deux processus bash, chacun avec son PID).</p></div>
</div>
<div class="callout info"><b>Image du cours</b> Le programme est le plan de construction (la <i>recette</i>) ; le processus est le programme en action (le <i>plat en train d'être cuisiné</i>), qui utilise les ressources pour effectuer les tâches définies par le code.</div>
<h3>1.3 Les caractéristiques d'un processus</h3>
<table class="tbl">
<tr><th>Attribut</th><th>Signification</th></tr>
<tr><td><code>PID</code></td><td>Numéro d'identification unique (entier positif)</td></tr>
<tr><td><code>PPID</code></td><td>PID du processus <b>parent</b> (celui qui l'a créé)</td></tr>
<tr><td><code>UID</code> / <code>USER</code></td><td>Propriétaire : en général l'utilisateur qui l'a lancé</td></tr>
<tr><td><code>TTY</code></td><td>Terminal dont il dépend, s'il existe (<code>?</code> sinon)</td></tr>
<tr><td><code>CWD</code></td><td>Répertoire courant du processus</td></tr>
<tr><td><code>NI</code> / <code>PRI</code></td><td>Priorité de travail (valeur nice)</td></tr>
<tr><td><code>TIME</code></td><td>Temps processeur consommé</td></tr>
<tr><td><code>STAT</code></td><td>État actuel (R, S, T, Z…)</td></tr>
</table>
<pre class="code">$ ps -o pid,ppid,user,tty,ni,stat,time,cmd
  PID  PPID USER  TT     NI STAT     TIME CMD
 1200  1180 alice pts/0   0 Ss   00:00:00 bash
 1342  1200 alice pts/0   0 R+   00:00:00 ps -o ...
# bash (PID 1200) est le parent de la commande ps (PPID 1200)
$ echo $$
1200
# $$ = PID du shell courant</pre>
<div class="callout key"><b>À retenir</b> <code>echo $$</code> affiche le PID du shell courant. Toute commande tapée dans ce shell aura ce numéro comme PPID.</div>
<p>Au TP (ex.1), <code>ps -l</code> (format long) montre ces caractéristiques : colonnes <code>S</code> (état), <code>UID</code>, <code>PID</code>, <code>PPID</code>, <code>PRI</code>, <code>NI</code>, <code>TTY</code>, <code>TIME</code>, <code>CMD</code>.</p>`
    },
    {
      id: 'c3-s-types', title: '2.1-2.3 Parent/enfant, système/utilisateur, avant/arrière-plan', src: 'Cours 3 §2.1-2.3 · TP3 ex.1, ex.4, ex.10',
      html: `<h3>2.1 Processus parent et processus enfant</h3>
<div class="grid2">
<div class="mini"><h4>Parent</h4><p>Processus qui en crée un autre ; il peut contrôler certains aspects de l'enfant, comme sa terminaison. Ex. : <code>bash</code> est le parent des commandes tapées dans le terminal.</p></div>
<div class="mini"><h4>Enfant</h4><p>Processus créé par un parent ; il <b>hérite</b> de certaines de ses caractéristiques (variables d'environnement…). Ex. : <code>ls</code> lancé depuis bash est un enfant de bash.</p></div>
</div>
<p>Chaque processus connaît son parent grâce au <b>PPID</b>. <code>pstree</code> affiche cette hiérarchie sous forme d'arbre ; tout remonte à <code>systemd</code> (PID 1).</p>
<pre class="code">systemd(1)
 ├─ cron
 └─ sshd ── … ── bash(1200)
                  ├─ ls      # PPID 1200
                  └─ ping    # PPID 1200</pre>
<h4>TP ex.10 : des shells imbriqués</h4>
<pre class="code">$ echo $$
1200
$ bash                 # nouveau shell, enfant du premier
$ echo $$
1410
$ ps -o pid,ppid,cmd
  PID  PPID CMD
 1200  1180 bash
 1410  1200 bash
 1425  1410 ps -o pid,ppid,cmd
$ pstree -p $$         # arbre à partir du shell courant
bash(1410)───pstree(1430)
$ exit                 # retour au shell de départ (1200)</pre>
<p>Chaque <code>bash</code> lancé reçoit un <b>nouveau PID</b> et a pour <b>PPID</b> le PID du shell qui l'a lancé. En remontant la chaîne (<code>pstree -p | less</code>), on arrive toujours au processus de <b>PID 1</b> : <code>systemd</code> (anciennement <code>init</code>).</p>
<h3>2.2 Processus système et processus utilisateur</h3>
<div class="grid2">
<div class="mini"><h4>Système</h4><p>Essentiels au fonctionnement du système, ils démarrent avec lui, lancés par <code>init</code> ou <code>systemd</code>. Ils tournent généralement en arrière-plan comme <b>démons</b>, souvent avec des privilèges élevés (root). Ex. : <code>systemd</code>, <code>sshd</code>.</p></div>
<div class="mini"><h4>Utilisateur</h4><p>Lancés par les utilisateurs, via un terminal ou une application graphique ; interactifs (<code>nano</code>) ou en arrière-plan. Ils ont généralement moins de privilèges. Ex. : <code>gedit</code>, <code>firefox</code>.</p></div>
</div>
<pre class="code">$ ps -u root | head -3     # processus appartenant à root (système)
$ ps -u $USER              # processus de l'utilisateur courant</pre>
<h3>2.3 Avant-plan et arrière-plan</h3>
<div class="grid2">
<div class="mini"><h4>Avant-plan (foreground)</h4><p>Interagit directement avec l'utilisateur via le terminal (affichage, saisie). Il faut attendre sa fin pour <b>retrouver la main</b>. Ex. : <code>vim</code>, ou <code>gedit</code> lancé sans <code>&amp;</code>.</p></div>
<div class="mini"><h4>Arrière-plan (background)</h4><p>S'exécute sans interaction directe ; le terminal reste disponible. On l'obtient en ajoutant <code>&amp;</code> à la fin de la commande.</p></div>
</div>
<pre class="code">$ ping google.com &amp;
[1] 4821          # [numéro de job] PID
$ ls              # le terminal reste utilisable pendant le ping</pre>
<div class="callout warn"><b>Attention</b> Le ping en arrière-plan continue d'écrire dans le terminal. Pour l'arrêter : <code>fg %1</code> puis <kbd>Ctrl</kbd>+<kbd>C</kbd>, ou <code>kill 4821</code>.</div>`
    },
    {
      id: 'c3-s-demons', title: '2.4-2.5 Démons, zombies et orphelins', src: 'Cours 3 §2.4-2.5 · TP3 ex.8, ex.12',
      html: `<h3>2.4 Les démons (daemons)</h3>
<p>Un <b>démon</b> est un processus qui tourne en <b>arrière-plan</b>, généralement lancé au démarrage du système, pour fournir un service (connexions réseau, journaux, tâches planifiées…). Il n'interagit pas directement avec les utilisateurs et n'est rattaché à <b>aucun terminal</b> : la colonne <code>TTY</code> affiche <code>?</code> dans <code>ps</code>. Son nom se termine souvent par <b>d</b> : <code>sshd</code>, <code>httpd</code>, <code>crond</code>…</p>
<table class="tbl">
<tr><th>Démon</th><th>Service rendu</th></tr>
<tr><td><code>systemd</code></td><td>Démarre et supervise les services (PID 1)</td></tr>
<tr><td><code>sshd</code></td><td>Connexions à distance (SSH)</td></tr>
<tr><td><code>apache2</code> / <code>httpd</code></td><td>Serveur web</td></tr>
<tr><td><code>cron</code></td><td>Tâches planifiées</td></tr>
<tr><td><code>systemd-journald</code></td><td>Collecte des journaux</td></tr>
<tr><td><code>mysqld</code></td><td>Serveur de base de données</td></tr>
</table>
<h4>TP ex.8 : piloter un service avec systemctl</h4>
<pre class="code">$ systemctl status ssh          # état (active/inactive), PID principal (Main PID), derniers journaux
$ sudo systemctl start ssh      # démarrer s'il est arrêté
$ sudo systemctl restart ssh    # arrêter puis relancer : le PID change
$ ps -ef | grep sshd            # vérifier que le démon tourne
$ sudo systemctl disable ssh    # plus de démarrage automatique au boot
$ systemctl is-enabled ssh
disabled
$ sudo systemctl enable ssh     # réactiver (indispensable pour la suite du semestre)</pre>
<div class="callout info"><b>Nom du service</b> Sous Debian, le service s'appelle <code>ssh</code> ; le programme démon s'appelle <code>sshd</code>. Sur d'autres distributions, le service lui-même s'appelle <code>sshd</code>.</div>
<div class="callout tip"><b>À distinguer</b> <code>start</code> / <code>stop</code> / <code>restart</code> agissent <b>maintenant</b> ; <code>enable</code> / <code>disable</code> règlent le démarrage <b>automatique au boot</b>. Après <code>restart</code>, le PID principal change : c'est un nouveau processus.</div>
<h3>2.5 Zombies et orphelins</h3>
<div class="grid2">
<div class="mini"><h4>Zombie (Z)</h4><p>A <b>terminé</b> son exécution mais garde son entrée dans la table des processus, car son parent n'a pas encore lu son code de sortie (<code>wait()</code>). N'utilise ni CPU ni mémoire, mais occupe une place : trop de zombies peuvent saturer la table. Repérable avec <code>ps aux</code> : état <code>Z</code>, mention <code>&lt;defunct&gt;</code>.</p></div>
<div class="mini"><h4>Orphelin</h4><p>Processus dont le <b>parent s'est terminé avant lui</b>. Il est automatiquement <b>adopté par init / systemd (PID 1)</b>, qui récoltera son code de sortie. Ex. : on tue un parent alors que son enfant tourne encore.</p></div>
</div>
<h4>TP ex.12 a) Fabriquer un zombie</h4>
<pre class="code">$ bash -c 'sleep 1 &amp; exec sleep 60' &amp;
[1] 6000
# bash lance l'enfant « sleep 1 », puis exec remplace bash par « sleep 60 » (même PID 6000)
# sleep 60 ne fera jamais wait() : quand sleep 1 se termine, il devient zombie
$ ps -o pid,ppid,stat,cmd --ppid 6000
  PID  PPID STAT CMD
 6001  6000 Z    [sleep] &lt;defunct&gt;
$ ps aux | grep defunct        # autre façon de le repérer
$ kill -9 6001                 # aucun effet : un zombie est déjà mort
$ kill 6000                    # on termine le parent...
# ...le zombie devient orphelin, il est adopté par PID 1 qui lit son code : il disparaît</pre>
<h4>TP ex.12 b) Fabriquer un orphelin</h4>
<pre class="code">$ bash -c 'sleep 300 &amp;'       # le bash intermédiaire se termine aussitôt
$ ps -o pid,ppid,cmd -C sleep
  PID  PPID CMD
 6100     1 sleep 300
$ ps -p 1
  PID TTY          TIME CMD
    1 ?        00:00:02 systemd</pre>
<div class="callout info"><b>Bureau graphique</b> L'orphelin peut être adopté par <code>systemd --user</code> (le gestionnaire de ta session) plutôt que par le PID 1 : son PPID est alors celui de ce processus. Vérifie avec <code>ps -p PPID</code>.</div>
<div class="callout key"><b>À retenir</b> On ne « tue » pas un zombie, même avec <code>kill -9</code> : il faut que son parent fasse <code>wait()</code> ou se termine. Un orphelin, lui, est bien vivant : il continue de tourner sous un nouveau parent.</div>`
    },
    {
      id: 'c3-s-cycle', title: "3. Cycle de vie et codes d'état (STAT)", src: 'Cours 3 §3.1-3.4 · TP3 ex.11',
      html: `<h3>3.1 Création : fork() et exec()</h3>
<ul>
<li><code>fork()</code> : appel système qui <b>duplique</b> le processus parent pour créer un processus enfant (nouveau PID).</li>
<li><code>exec()</code> : souvent utilisé juste après <code>fork()</code>, il <b>remplace</b> le code de l'enfant par celui d'un nouveau programme (le PID ne change pas).</li>
<li><code>wait()</code> : le parent attend la fin de l'enfant et récupère son <b>code de sortie</b>.</li>
</ul>
<div class="flow"><span>bash PID 1200</span><span>fork() : copie de bash, PID 1201, PPID 1200</span><span>exec("ls") : le PID 1201 devient ls</span><span>exit : code de sortie</span><span>wait() : bash le récupère et réaffiche l'invite</span></div>
<h3>3.2 Les états d'un processus</h3>
<div class="flow"><span>Création</span><span>Prêt (Ready)</span><span>En exécution (Running)</span><span>Terminé (Zombie)</span></div>
<table class="tbl">
<tr><th>État</th><th>Description</th></tr>
<tr><td>Prêt</td><td>Créé et doté de ses ressources, il attend que l'ordonnanceur lui attribue le processeur (file d'attente).</td></tr>
<tr><td>En exécution</td><td>Il exécute réellement ses instructions ; un seul processus par cœur à un instant donné.</td></tr>
<tr><td>En attente (Blocked / Sleeping)</td><td>Il attend un événement externe (lecture de fichier, réseau…) et libère le processeur.</td></tr>
<tr><td>Terminé</td><td>Fin normale ou signal (SIGTERM, SIGKILL) ; il reste zombie jusqu'au <code>wait()</code> du parent.</td></tr>
</table>
<p>Transitions : <b>admis</b> (Création → Prêt), <b>élu</b> par l'ordonnanceur (Prêt → Exécution), <b>préempté</b> (Exécution → Prêt), <b>attente d'E/S</b> (Exécution → Attente), <b>événement</b> survenu (Attente → Prêt), <b>fin / signal</b> (Exécution → Terminé).</p>
<h3>3.3 Sommeil et terminaison</h3>
<div class="grid2">
<div class="mini"><h4>Endormi (sleeping)</h4><p>Mis en veille, il ne consomme pas de CPU tant qu'il n'a rien d'utile à faire. <b>S</b> = sommeil <b>interruptible</b> : un signal peut le réveiller. <b>D</b> = sommeil <b>non interruptible</b> : il attend un événement matériel (écriture disque…) et ne peut pas être interrompu avant la fin de l'opération.</p></div>
<div class="mini"><h4>Terminé</h4><p>Fin de l'exécution ou réception d'un signal (SIGTERM, SIGKILL). Il libère ses ressources (mémoire, fichiers ouverts…) mais reste <b>zombie</b> tant que son parent n'a pas lu son code de sortie avec <code>wait()</code>, puis disparaît de la table des processus.</p></div>
</div>
<pre class="code">$ sleep 60 &amp;
[1] 5120
$ ps -o pid,stat,cmd
  PID STAT CMD
 1200 Ss   bash
 5120 S    sleep 60
 5125 R+   ps -o pid,stat,cmd</pre>
<div class="callout warn"><b>Syntaxe</b> La diapo écrit <code>sleep 60 &amp; ; ps -o pid,stat,cmd</code>. En bash, <code>&amp;</code> termine déjà la commande, donc <code>&amp; ;</code> provoque une erreur de syntaxe : tape <code>sleep 60 &amp; ps -o pid,stat,cmd</code>, ou deux lignes.</div>
<h3>3.4 Les codes d'état (colonne STAT)</h3>
<table class="tbl">
<tr><th>Code</th><th>État</th><th>Signification</th></tr>
<tr><td><code>R</code></td><td>Running</td><td>En exécution ou prêt (file d'attente)</td></tr>
<tr><td><code>S</code></td><td>Sleeping</td><td>Endormi, interruptible</td></tr>
<tr><td><code>D</code></td><td>Disk sleep</td><td>Endormi, non interruptible (E/S)</td></tr>
<tr><td><code>T</code></td><td>Stopped</td><td>Suspendu (Ctrl+Z, SIGSTOP)</td></tr>
<tr><td><code>Z</code></td><td>Zombie</td><td>Terminé, en attente du wait() du parent</td></tr>
<tr><td><code>I</code></td><td>Idle</td><td>Thread noyau inactif</td></tr>
</table>
<table class="tbl">
<tr><th>Suffixe</th><th>Signification</th></tr>
<tr><td><code>s</code></td><td>Chef de session (ex. un shell)</td></tr>
<tr><td><code>+</code></td><td>Dans le groupe de premier plan du terminal</td></tr>
<tr><td><code>&lt;</code> / <code>N</code></td><td>Priorité haute / basse (nice négatif / positif)</td></tr>
<tr><td><code>l</code></td><td>Multi-thread</td></tr>
</table>
<pre class="code">$ ps -o pid,stat,cmd
  PID STAT CMD
 1200 Ss   bash                  # endormi (attend ta saisie) + chef de session
 4821 T    vim notes.txt         # suspendu par Ctrl+Z
 4830 R+   ps -o pid,stat,cmd    # en exécution, au premier plan</pre>
<h4>TP ex.11 : observer R, S et T</h4>
<pre class="code">$ sleep 300 &amp;
[1] 4001
$ yes &gt; /dev/null &amp;
[2] 4002
$ sleep 400 &amp;
[3] 4003
$ kill -STOP 4003
$ ps -o pid,stat,%cpu,cmd -p 4001,4002,4003
  PID STAT %CPU CMD
 4001 S     0.0 sleep 300
 4002 R    99.5 yes
 4003 T     0.0 sleep 400
$ kill %1 %2 %3          # arrêter les trois en une commande (voir 5.2)</pre>
<div class="callout key"><b>Pourquoi S et R ?</b> <code>sleep</code> attend la fin d'un délai (un événement) : il est endormi (S) et ne consomme pas de CPU. <code>yes</code> calcule sans arrêt : il est toujours prêt ou en exécution (R) et monte vers 100 % d'un cœur. Le <code>sleep</code> qui a reçu SIGSTOP est suspendu (T).</div>`
    },
    {
      id: 'c3-s-visu', title: '4. Visualiser les processus : ps, top, htop, pstree', src: 'Cours 3 §4.1-4.3 · TP3 ex.1, ex.6, ex.16',
      html: `<h3>4.1 La commande ps (Process Status)</h3>
<p><code>ps</code> affiche une <b>photo</b> des processus à un instant donné (pas de rafraîchissement).</p>
<table class="tbl">
<tr><th>Commande</th><th>Résultat</th></tr>
<tr><td><code>ps</code></td><td>Processus du terminal courant</td></tr>
<tr><td><code>ps -l</code></td><td>Format long : S, UID, PID, PPID, PRI, NI, TTY, TIME, CMD… (TP ex.1)</td></tr>
<tr><td><code>ps aux</code></td><td>Tous les processus, format BSD détaillé (%CPU, %MEM…)</td></tr>
<tr><td><code>ps -ef</code></td><td>Tous les processus, format standard (avec PPID)</td></tr>
<tr><td><code>ps -u alice</code></td><td>Processus de l'utilisateur alice</td></tr>
<tr><td><code>ps -p 1200</code></td><td>Uniquement le processus de PID 1200 (plusieurs : <code>-p 4001,4002</code>)</td></tr>
<tr><td><code>ps -o pid,cmd</code></td><td>Choisir les colonnes affichées</td></tr>
<tr><td><code>ps aux --sort=-%cpu</code></td><td>Trier par consommation CPU décroissante (<code>-</code> = décroissant)</td></tr>
<tr><td><code>ps -C sleep</code> / <code>ps --ppid 6000</code></td><td>Sélection par nom de commande / par PID du parent (TP ex.12)</td></tr>
</table>
<pre class="code">$ ps
  PID TTY          TIME CMD
 1200 pts/0    00:00:00 bash
 1350 pts/0    00:00:00 ps
$ ps -ef | grep sshd
root       812       1  0 09:02 ?        00:00:00 sshd
alice     1360    1200  0 10:05 pts/0    00:00:00 grep sshd
$ pgrep sshd           # renvoie directement le PID
812</pre>
<div class="callout tip"><b>Astuce</b> Avec <code>ps … | grep sshd</code>, la commande <code>grep sshd</code> apparaît elle-même dans le résultat. <code>pgrep sshd</code> renvoie directement le PID, sans ligne parasite.</div>
<div class="callout info"><b>TP ex.1</b> Tous les processus du système (y compris ceux des autres utilisateurs et ceux qui ne dépendent d'aucun terminal) : <code>ps aux</code> ou <code>ps -ef</code>. Ceux du super-utilisateur : <code>ps -u root</code>.</div>
<h3>4.2 Lire la sortie de ps aux</h3>
<pre class="code">USER   PID %CPU %MEM    VSZ    RSS TTY   STAT START  TIME COMMAND
root     1  0.0  0.3 168420  12040 ?     Ss   09:01  0:02 /sbin/init
alice 1200  0.0  0.1  10120   5200 pts/0 Ss   09:15  0:00 bash
alice 2210 12.5  4.8 912340 190220 ?     Sl   09:20  1:48 firefox</pre>
<table class="tbl">
<tr><th>Colonne</th><th>Signification</th></tr>
<tr><td>USER</td><td>Propriétaire du processus</td></tr>
<tr><td>PID</td><td>Identifiant du processus</td></tr>
<tr><td>%CPU</td><td>Part du processeur utilisée</td></tr>
<tr><td>%MEM</td><td>Part de la mémoire vive utilisée</td></tr>
<tr><td>VSZ / RSS</td><td>Mémoire virtuelle / mémoire réellement occupée en RAM (Ko)</td></tr>
<tr><td>TTY</td><td>Terminal associé (<code>?</code> = aucun)</td></tr>
<tr><td>STAT</td><td>État (R, S, D, T, Z…) et suffixes</td></tr>
<tr><td>START</td><td>Heure de lancement</td></tr>
<tr><td>TIME</td><td>Temps CPU cumulé</td></tr>
<tr><td>COMMAND</td><td>Commande qui a lancé le processus</td></tr>
</table>
<div class="callout key"><b>Lecture de la ligne firefox</b> Appartient à alice, PID 2210, utilise 12,5 % du CPU et 4,8 % de la RAM, n'est rattaché à aucun terminal (<code>?</code> : lancé depuis l'interface graphique), état <code>Sl</code> = endormi + multi-thread, lancé à 09:20, 1 min 48 s de temps CPU cumulé.</div>
<h4>Les plus gourmands (TP ex.16)</h4>
<pre class="code">$ ps aux --sort=-%cpu | head -6    # en-tête + les 5 plus gourmands en CPU
$ ps aux --sort=-%mem | head -6    # idem pour la mémoire</pre>
<h3>4.3 Surveiller en temps réel : top, htop, pstree</h3>
<ul>
<li><code>top</code> : processus en temps réel avec l'utilisation CPU et mémoire, rafraîchis toutes les 3 s. Touches : <kbd>P</kbd> tri CPU, <kbd>M</kbd> tri mémoire, <kbd>k</kbd> tuer un processus, <kbd>q</kbd> quitter.</li>
<li><code>htop</code> : version améliorée et interactive de top (flèches, tri par colonne, <kbd>F9</kbd> pour arrêter un processus). À installer : <code>sudo apt install htop</code>.</li>
<li><code>pstree</code> : processus sous forme d'arbre parents / enfants ; <code>pstree -p</code> ajoute les PID.</li>
</ul>
<pre class="code">$ top
top - 10:02:11 up  1:01,  1 user, ...
Tasks: 182 total,   1 running, ...
%Cpu(s):  3.2 us,  1.1 sy, ... 95.5 id
  PID USER   ... %CPU %MEM COMMAND
 2210 alice  ... 12.5  4.8 firefox
$ pstree -p
systemd(1)─┬─cron(640)
           ├─sshd(812)───sshd(1180)───bash(1200)
           └─systemd-journal(301)</pre>
<div class="callout info"><b>ps ou top ?</b> <code>ps</code> = photo à un instant donné ; <code>top</code> / <code>htop</code> = film rafraîchi en continu. Dans <code>ps</code>, %CPU est une moyenne depuis le lancement du processus ; <code>top</code> montre la consommation du moment.</div>
<h4>Le répertoire virtuel /proc (TP ex.16)</h4>
<p>Le noyau expose chaque processus dans un répertoire <code>/proc/PID/</code> :</p>
<pre class="code">$ cat /proc/2210/status      # résumé : nom, état, PID, PPID, propriétaire…
Name:   firefox
...
State:  S (sleeping)
...
Pid:    2210
PPid:   1530
...
Uid:    1000    1000    1000    1000
$ ls -l /proc/2210/cwd       # lien vers son répertoire courant
$ cat /proc/2210/cmdline     # sa ligne de commande</pre>`
    },
    {
      id: 'c3-s-signaux', title: '5.1-5.2 Les signaux : kill, pkill, killall, trap', src: 'Cours 3 §5.1-5.2 · TP3 ex.2, 3, 6, 7, 15',
      html: `<h3>5.1 Les signaux</h3>
<p>Un <b>signal</b> est un message envoyé à un processus pour lui demander de réagir : s'arrêter, se suspendre, reprendre… Chaque signal a un <b>nom</b> et un <b>numéro</b> (liste complète : <code>kill -l</code>). Un processus peut <b>intercepter</b> la plupart des signaux, <b>sauf SIGKILL et SIGSTOP</b>.</p>
<table class="tbl">
<tr><th>Signal</th><th>N°</th><th>Effet</th></tr>
<tr><td>SIGHUP</td><td>1</td><td>Terminal fermé / relire la configuration</td></tr>
<tr><td>SIGINT</td><td>2</td><td>Interruption (<kbd>Ctrl</kbd>+<kbd>C</kbd>)</td></tr>
<tr><td>SIGKILL</td><td>9</td><td>Arrêt immédiat, forcé (non interceptable)</td></tr>
<tr><td>SIGTERM</td><td>15</td><td>Arrêt propre (signal par défaut de kill)</td></tr>
<tr><td>SIGCONT</td><td>18</td><td>Reprendre un processus suspendu</td></tr>
<tr><td>SIGSTOP</td><td>19</td><td>Suspendre (non interceptable)</td></tr>
<tr><td>SIGTSTP</td><td>20</td><td>Suspendre depuis le clavier (<kbd>Ctrl</kbd>+<kbd>Z</kbd>)</td></tr>
</table>
<p>Syntaxe générale : <code>kill -signal PID</code>, avec un nom ou un numéro. Ainsi <code>kill -9</code> = <code>kill -KILL</code> = <code>kill -SIGKILL</code> = <code>kill -s KILL</code>.</p>
<h3>5.2 Terminer un processus : kill, pkill, killall</h3>
<ul>
<li><code>kill PID</code> : envoie <b>SIGTERM (15)</b> ; le processus s'arrête proprement (fermeture des fichiers…).</li>
<li><code>kill -9 PID</code> : envoie <b>SIGKILL</b> ; arrêt immédiat et forcé, à utiliser en <b>dernier recours</b>.</li>
<li><code>pkill nom</code> : envoie un signal aux processus dont le nom correspond (<code>-u</code> : d'un utilisateur ; <code>-f</code> : motif cherché dans toute la ligne de commande).</li>
<li><code>killall nom</code> : tue tous les processus portant <b>exactement</b> ce nom.</li>
<li>On ne peut signaler que <b>ses propres processus</b> ; ceux des autres utilisateurs nécessitent <code>sudo</code>.</li>
</ul>
<pre class="code">$ pgrep firefox
2210
$ kill 2210                          # arrêt propre (SIGTERM)
$ kill -9 2210                       # si le processus ne répond plus (SIGKILL)
$ kill -STOP 2210 ; kill -CONT 2210  # suspendre puis reprendre
$ pkill -u alice sleep               # tous les sleep d'alice
$ sudo killall apache2               # tous les processus nommés apache2</pre>
<div class="callout warn"><b>Piège : kill -9 d'emblée</b> SIGKILL ne laisse aucune chance au programme de se terminer proprement (fichiers temporaires, données non enregistrées). Toujours essayer <code>kill PID</code> d'abord, puis <code>-9</code> seulement s'il ne répond plus.</div>
<h4>Ce que montre le TP (ex.2, 3, 6)</h4>
<ul>
<li><b>xclock</b> : SIGSTOP fige l'horloge (la fenêtre n'est plus redessinée), SIGCONT la relance, SIGTERM et SIGKILL ferment la fenêtre.</li>
<li><b>bash d'un second terminal</b> : <code>kill PID</code> (SIGTERM) n'a aucun effet, car un bash interactif ignore SIGTERM ; <code>kill -9 PID</code> le tue et le terminal se ferme. SIGTERM est une <i>demande</i> que le processus peut ignorer ou intercepter ; SIGKILL est imposé par le noyau.</li>
<li><b>Processus d'un autre utilisateur</b> (ex. sshd, PID 812, à root) : <code>kill -STOP 812</code> répond <code>Operation not permitted</code>. On ne contrôle que ses propres processus.</li>
<li><b>yes &gt; /dev/null &amp;</b> : après <code>kill -STOP PID</code>, l'état passe à <code>T</code> et son %CPU tombe à 0 dans top ; <code>kill -CONT PID</code> le relance ; <code>kill PID</code> l'arrête.</li>
</ul>
<div class="callout info"><b>Processus suspendu et SIGTERM</b> Un processus en état <code>T</code> ne traite pas SIGTERM tout de suite : le signal reste en attente jusqu'à sa reprise (SIGCONT). Seul SIGKILL agit immédiatement. Avec un numéro de job (<code>kill %3</code>), bash envoie en plus SIGCONT au job suspendu, qui s'arrête donc bien.</div>
<h4>killall ou pkill ? (TP ex.7)</h4>
<pre class="code">$ ping -c 50 google.com &amp;
$ ping -c 50 yahoo.com &amp;
$ killall ping        # arrête LES DEUX : le programme s'appelle ping
$ pkill -f yahoo      # arrête seulement celui dont la ligne de commande contient yahoo</pre>
<div class="grid2">
<div class="mini"><h4>killall nom</h4><p>Compare le <b>nom exact</b> du programme. <code>killall yahoo</code> ne trouve rien : aucun programme ne s'appelle yahoo.</p></div>
<div class="mini"><h4>pkill motif</h4><p>Cherche le motif dans le nom du processus ; avec <code>-f</code>, dans <b>toute la ligne de commande</b> (arguments compris).</p></div>
</div>
<h4>Intercepter un signal avec trap (TP ex.15)</h4>
<pre class="code">#!/bin/bash
# signaux.sh
trap 'echo "SIGINT reçu : je refuse de m arrêter !"' SIGINT
trap 'echo "SIGTERM reçu : arrêt propre..."; exit 0' SIGTERM
echo "Mon PID est $$"
while true; do sleep 1; done</pre>
<ul>
<li><kbd>Ctrl</kbd>+<kbd>C</kbd> : le message SIGINT s'affiche et le script <b>continue</b>.</li>
<li><code>kill -TERM PID</code> : le message SIGTERM s'affiche puis <code>exit 0</code> : arrêt propre.</li>
<li><code>kill -9 PID</code> : arrêt immédiat, <b>aucun message</b>. SIGKILL (comme SIGSTOP) ne peut pas être intercepté : sinon un programme pourrait se rendre impossible à arrêter ou à suspendre.</li>
</ul>`
    },
    {
      id: 'c3-s-jobs', title: '5.3 Jobs : &, Ctrl+Z, jobs, fg, bg, nohup', src: 'Cours 3 §5.3 · TP3 ex.4, ex.14',
      html: `<p>Dans bash, les processus lancés depuis un terminal sont des <b>tâches (jobs)</b>. Chaque job a un <b>numéro de job</b> propre au terminal, différent du <b>PID</b> : <code>[3] 31926</code> = job 3, PID 31926.</p>
<div class="flow"><span>Avant-plan</span><span>Ctrl+Z : suspendu (T)</span><span>bg : arrière-plan</span><span>fg : retour au premier plan</span></div>
<table class="tbl">
<tr><th>Action</th><th>Effet</th></tr>
<tr><td><code>commande &amp;</code></td><td>Lancement direct en arrière-plan</td></tr>
<tr><td><kbd>Ctrl</kbd>+<kbd>Z</kbd></td><td>Suspend le processus au premier plan (SIGTSTP) : état T, on récupère la main</td></tr>
<tr><td><kbd>Ctrl</kbd>+<kbd>C</kbd></td><td>Interrompt le processus au premier plan (SIGINT)</td></tr>
<tr><td><code>jobs</code></td><td>Liste les tâches du terminal (<code>+</code> job courant, <code>-</code> job précédent)</td></tr>
<tr><td><code>bg %n</code></td><td>Relance le job n (suspendu) en arrière-plan</td></tr>
<tr><td><code>fg %n</code></td><td>Ramène le job n au premier plan</td></tr>
<tr><td><code>kill -CONT PID</code></td><td>Relance un processus suspendu (même depuis un autre terminal)</td></tr>
<tr><td><code>nohup commande &amp;</code></td><td>Le processus survit à la fermeture du terminal</td></tr>
</table>
<pre class="code">$ sleep 300
^Z
[1]+  Stopped                 sleep 300
$ bg %1
[1]+ sleep 300 &amp;
$ jobs
[1]+  Running                 sleep 300 &amp;
$ fg %1
sleep 300</pre>
<p>Sans argument, <code>fg</code> et <code>bg</code> agissent sur le job courant (<code>+</code>). On peut aussi désigner <code>%%</code> ou <code>%+</code> (job courant) et <code>%-</code> (job précédent).</p>
<h4>TP ex.4 : xclock, gedit et les numéros de job</h4>
<pre class="code">$ xclock &amp;
[1] 31926              # job 1, PID 31926 : l'invite revient tout de suite
$ gedit                # premier plan : plus d'invite
^Z
[2]+  Stopped                 gedit
# la fenêtre de gedit ne répond plus : le processus est suspendu
$ jobs
[1]-  Running                 xclock &amp;
[2]+  Stopped                 gedit
$ bg %2                # gedit reprend, en arrière-plan
$ fg %1                # xclock au premier plan, puis Ctrl+C pour le terminer</pre>
<p>Chaque nouveau job reçoit le numéro suivant ([1], [2], [3]…) ; le dernier lancé ou suspendu devient le job courant <code>+</code>.</p>
<div class="grid2">
<div class="mini"><h4>jobs</h4><p>Seulement les tâches lancées depuis <b>ce</b> shell, avec numéro de job et état (Running / Stopped).</p></div>
<div class="mini"><h4>ps</h4><p>Les processus du terminal avec leur <b>PID</b>, y compris bash et ps lui-même.</p></div>
</div>
<div class="callout warn"><b>Piège : job ou PID ?</b> <code>fg</code>, <code>bg</code> et <code>kill %n</code> attendent un <b>numéro de job</b> précédé de <code>%</code>. <code>kill 2</code> viserait le processus de PID 2, pas le job 2 !</div>
<div class="callout tip"><b>Relancer avec kill (TP ex.4)</b> Un processus suspendu reprend avec <code>kill -CONT PID</code> (SIGCONT, 18). Ctrl+Z correspond à SIGTSTP : <code>kill -TSTP PID</code> produit le même effet.</div>
<h4>Survivre à la fermeture du terminal : nohup (TP ex.14)</h4>
<ul>
<li><code>sleep 600 &amp;</code> puis fermer la fenêtre : le shell reçoit <b>SIGHUP</b> et le transmet à ses jobs, donc <code>sleep</code> disparaît.</li>
<li><code>nohup sleep 600 &amp;</code> : <code>sleep</code> ignore SIGHUP et <b>survit</b> (devenu orphelin, il est adopté par PID 1 ou <code>systemd --user</code>).</li>
<li>Si la sortie standard n'est pas redirigée, nohup l'ajoute au fichier <code>nohup.out</code> (répertoire courant, sinon <code>~/nohup.out</code>).</li>
</ul>
<pre class="code">$ nohup sleep 600 &amp;
[1] 7020
nohup: ignoring input and appending output to 'nohup.out'</pre>`
    },
    {
      id: 'c3-s-nice', title: '5.4 Priorités : nice et renice', src: 'Cours 3 §5.4 · TP3 ex.13',
      html: `<p>Chaque processus possède une <b>valeur nice</b>, de <b>-20</b> à <b>19</b> (défaut <b>0</b>), qui influence sa part de temps processeur. <b>Plus la valeur est basse, plus le processus est prioritaire</b> (il est moins « gentil » avec les autres).</p>
<div class="flow"><span>-20 : plus prioritaire</span><span>-10</span><span>0 : défaut</span><span>10</span><span>19 : moins prioritaire</span></div>
<pre class="code">$ nice -n 10 tar czf sauvegarde.tar.gz /home   # lancer avec une priorité basse
$ renice -n 5 -p 2210                            # modifier un processus existant
$ sudo renice -n -5 -p 812                       # augmenter la priorité (root uniquement)
$ ps -o pid,ni,cmd -p 2210                       # vérifier la colonne NI
  PID  NI CMD
 2210   5 firefox</pre>
<div class="grid2">
<div class="mini"><h4>nice</h4><p>Pour <b>lancer</b> une nouvelle commande avec une valeur donnée : <code>nice -n N commande</code>.</p></div>
<div class="mini"><h4>renice</h4><p>Pour <b>modifier</b> un processus déjà lancé : <code>renice -n N -p PID</code>.</p></div>
</div>
<div class="callout warn"><b>Droits</b> Seul root peut attribuer une valeur négative. Plus précisément, un utilisateur normal peut seulement <b>augmenter</b> la valeur nice de ses propres processus (baisser leur priorité) : la rediminuer, même de 19 à 0, exige aussi <code>sudo</code>. Sinon : <code>Permission denied</code>.</div>
<h4>TP ex.13 : deux yes sur le même cœur</h4>
<pre class="code">$ taskset -c 0 yes &gt; /dev/null &amp;             # nice 0, épinglé sur le cœur 0
[1] 5001
$ taskset -c 0 nice -n 19 yes &gt; /dev/null &amp;  # nice 19, même cœur
[2] 5002
$ top                                          # colonne NI : 0 et 19
$ renice -n -5 -p 5001                         # utilisateur normal : refusé
renice: failed to set priority for 5001 (process ID): Permission denied
$ sudo renice -n 0 -p 5002                     # retour à 0 : sudo nécessaire aussi
$ pkill yes                                    # arrêter les deux</pre>
<div class="callout key"><b>Observation</b> Sur un même cœur, le yes à nice 0 obtient presque tout le CPU (environ 98 %) et celui à nice 19 seulement quelques %. Après le renice à 0, ils se partagent le cœur à peu près à 50/50. Dans STAT, un processus à nice positif porte le suffixe <code>N</code>, à nice négatif le suffixe <code>&lt;</code>.</div>`
    },
    {
      id: 'c3-s-shell', title: 'TP : enchaîner les commandes et scripter', src: 'TP3 ex.5, ex.9, ex.16',
      html: `<h3>Enchaîner plusieurs commandes (TP ex.5)</h3>
<table class="tbl">
<tr><th>Opérateur</th><th>La commande suivante s'exécute…</th><th>Exemple</th></tr>
<tr><td><code>;</code></td><td>toujours, quel que soit le résultat</td><td><code>echo "Début de l'exercice"; pwd; ls -l</code></td></tr>
<tr><td><code>&amp;&amp;</code></td><td>seulement si la précédente a <b>réussi</b> (code 0)</td><td><code>mkdir test_dir &amp;&amp; cd test_dir &amp;&amp; touch test_file.txt</code></td></tr>
<tr><td><code>||</code></td><td>seulement si la précédente a <b>échoué</b> (code non nul)</td><td><code>cd non_existant_dir || echo "Le répertoire n'existe pas."</code></td></tr>
</table>
<p>La variable <code>$?</code> contient la valeur de retour de la dernière commande : <b>0 = succès</b>, autre valeur = échec.</p>
<pre class="code">$ ls -z ; echo $?
ls: invalid option -- 'z'
...
2
$ pwd ; echo $?
/home/etudiant
0</pre>
<ul>
<li>Avec <code>;</code>, une commande en erreur (<code>ls -z</code>) n'empêche pas les suivantes de s'exécuter.</li>
<li><code>mkdir test_dir &amp;&amp; cd test_dir &amp;&amp; touch test_file.txt</code> relancé (depuis le dossier parent) alors que test_dir existe : mkdir échoue (« File exists ») et ni cd ni touch ne s'exécutent. Attention : après la première exécution, tu es <b>dans</b> test_dir, car cd agit sur le shell courant.</li>
<li><code>cd non_existant_dir || echo "…"</code> : cd affiche son erreur, puis le message s'affiche.</li>
<li><code>mkdir my_folder; cd my_folder &amp;&amp; touch my_file.txt || echo "Échec de la création du fichier."</code> : si my_folder existe déjà, mkdir affiche une erreur mais <code>;</code> continue ; cd et touch réussissent, donc le message d'échec ne s'affiche pas. Dans <code>a &amp;&amp; b || c</code>, c s'exécute si a <b>ou</b> b échoue.</li>
</ul>
<h3>Script de gestion d'un processus (TP ex.9)</h3>
<pre class="code">#!/bin/bash
# process_manager.sh
sleep 100 &amp;               # 1. lancer un processus en arrière-plan
PID=$!                    # 2. $! = PID du dernier processus lancé en arrière-plan
echo "Processus lancé, PID = $PID"
kill -STOP $PID           # 3. pause : STAT passe à T
ps -o pid,stat,cmd -p $PID
sleep 10
kill -CONT $PID           # 4. reprise
sleep 5
kill $PID                 # 5. arrêt propre (SIGTERM)
echo "Processus $PID terminé"</pre>
<pre class="code">$ chmod +x process_manager.sh
$ ./process_manager.sh
Processus lancé, PID = 8120
  PID STAT CMD
 8120 T    sleep 100
Processus 8120 terminé</pre>
<div class="callout warn"><b>Pièges</b> Pas d'espace autour du <code>=</code> (<code>PID=$!</code>). Ne pas confondre <code>$!</code> (PID du dernier processus en arrière-plan), <code>$$</code> (PID du shell ou du script lui-même) et <code>$?</code> (code de retour de la dernière commande).</div>
<h3>Défi : surveiller les processus gourmands (TP ex.16)</h3>
<pre class="code">#!/bin/bash
# surveillance.sh : toutes les 5 s, affiche le processus le plus gourmand en CPU
while true; do
  top1=$(ps -eo pid,comm,%cpu --sort=-%cpu --no-headers | head -1)
  echo "Le plus gourmand : $top1"
  echo "$top1" | awk '$3 &gt; 50 { print "ALERTE : " $2 " (PID " $1 ") utilise " $3 " % du CPU" }'
  sleep 5
done</pre>
<p>Pour tester : lancer <code>yes &gt; /dev/null &amp;</code> dans un autre terminal. Bonus : proposer à l'utilisateur de suspendre (<code>kill -STOP</code>) ou d'arrêter (<code>kill</code>, SIGTERM) le processus détecté.</p>`
    },
    {
      id: 'c3-s-memento', title: '6. Mémento — Les processus', src: 'Cours 3 §6 · TP3 récapitulatif',
      html: `<table class="tbl">
<tr><th>Besoin</th><th>Commande</th></tr>
<tr><td>Processus du terminal / de tout le système</td><td><code>ps</code> · <code>ps -l</code> · <code>ps aux</code> · <code>ps -ef</code></td></tr>
<tr><td>Colonnes choisies, PID précis</td><td><code>ps -o pid,ppid,stat,cmd -p PID</code></td></tr>
<tr><td>Par utilisateur / nom / parent</td><td><code>ps -u root</code> · <code>ps -C sleep</code> · <code>ps --ppid PID</code></td></tr>
<tr><td>Les plus gourmands</td><td><code>ps aux --sort=-%cpu | head -6</code></td></tr>
<tr><td>Temps réel / arbre</td><td><code>top</code> (P, M, k, q) · <code>htop</code> · <code>pstree -p</code></td></tr>
<tr><td>Trouver un PID</td><td><code>pgrep nom</code> · <code>echo $$</code> (shell) · <code>$!</code> (dernier &amp;)</td></tr>
<tr><td>Liste des signaux</td><td><code>kill -l</code></td></tr>
<tr><td>Arrêt propre / forcé</td><td><code>kill PID</code> (SIGTERM) · <code>kill -9 PID</code> (SIGKILL)</td></tr>
<tr><td>Suspendre / reprendre</td><td><code>kill -STOP PID</code> · <code>kill -CONT PID</code></td></tr>
<tr><td>Par nom</td><td><code>pkill nom</code> · <code>pkill -f motif</code> · <code>killall nom</code></td></tr>
<tr><td>Jobs</td><td><code>commande &amp;</code> · <kbd>Ctrl</kbd>+<kbd>Z</kbd> · <kbd>Ctrl</kbd>+<kbd>C</kbd> · <code>jobs</code> · <code>fg %n</code> · <code>bg %n</code></td></tr>
<tr><td>Survivre au terminal</td><td><code>nohup commande &amp;</code> (sortie dans nohup.out)</td></tr>
<tr><td>Priorités</td><td><code>nice -n 10 commande</code> · <code>renice -n 5 -p PID</code> · <code>sudo renice -n -5 -p PID</code></td></tr>
<tr><td>Enchaîner</td><td><code>;</code> (toujours) · <code>&amp;&amp;</code> (si succès) · <code>||</code> (si échec) · <code>echo $?</code></td></tr>
<tr><td>Services</td><td><code>systemctl status ssh</code> · <code>sudo systemctl restart ssh</code> · <code>enable</code> / <code>disable</code> / <code>is-enabled</code></td></tr>
<tr><td>Scripts et /proc</td><td><code>trap 'commandes' SIGTERM</code> · <code>cat /proc/PID/status</code></td></tr>
</table>
<div class="callout key"><b>Les numéros à connaître</b> SIGHUP 1 · SIGINT 2 (Ctrl+C) · SIGKILL 9 · SIGTERM 15 (défaut de kill) · SIGCONT 18 · SIGSTOP 19 · SIGTSTP 20 (Ctrl+Z). Valeur nice : -20 (plus prioritaire) à 19 (moins prioritaire), 0 par défaut.</div>
<div class="callout warn"><b>Pièges classiques</b> kill -9 d'emblée au lieu de SIGTERM · fg (premier plan) vs bg (arrière-plan) · numéro de job (%n) vs PID · nice négatif sans sudo · killall (nom exact) vs pkill -f (ligne de commande complète) · &amp;&amp; (si succès) vs || (si échec) · $$ vs $! vs $?.</div>`
    }
  ],

  commands: [
    { id: 'c3-cmd-ps', cmd: 'ps', syntax: 'ps [options]',
      desc: "Affiche une « photo » des processus à un instant donné ; sans option, seulement ceux du terminal courant.",
      details: "Colonnes par défaut : PID, TTY, TIME, CMD. On y voit le shell (bash) et ps lui-même. Pour un affichage rafraîchi en continu, utiliser top.",
      example: 'ps', src: 'Cours 3 §4.1 · TP3 ex.1' },
    { id: 'c3-cmd-ps-l', cmd: 'ps -l', syntax: 'ps -l',
      desc: "Format long : affiche plus de caractéristiques des processus du terminal.",
      details: "Colonnes F, S (état), UID, PID, PPID, C, PRI, NI, ADDR, SZ, WCHAN, TTY, TIME, CMD : on y retrouve propriétaire, parent, priorité et terminal.",
      example: 'ps -l', src: 'TP3 ex.1' },
    { id: 'c3-cmd-ps-aux', cmd: 'ps aux', syntax: 'ps aux',
      desc: "Tous les processus du système (tous les utilisateurs, avec ou sans terminal), au format BSD détaillé.",
      details: "Syntaxe BSD, sans tiret : a = tous les utilisateurs, u = format orienté utilisateur, x = y compris les processus sans terminal. Colonnes : USER PID %CPU %MEM VSZ RSS TTY STAT START TIME COMMAND.",
      example: 'ps aux | grep firefox', src: 'Cours 3 §4.1-4.2 · TP3 ex.1' },
    { id: 'c3-cmd-ps-ef', cmd: 'ps -ef', syntax: 'ps -ef',
      desc: "Tous les processus, au format standard (System V), avec la colonne PPID.",
      details: "-e = tous les processus, -f = format complet. Colonnes : UID PID PPID C STIME TTY TIME CMD.",
      example: 'ps -ef | grep sshd', src: 'Cours 3 §4.1' },
    { id: 'c3-cmd-ps-u', cmd: 'ps -u', syntax: 'ps -u utilisateur',
      desc: "Affiche les processus appartenant à un utilisateur donné.",
      details: "ps -u root : processus de root (système) ; ps -u $USER : tes propres processus.",
      example: 'ps -u root | head -3', src: 'Cours 3 §2.2, §4.1 · TP3 ex.1' },
    { id: 'c3-cmd-ps-p', cmd: 'ps -p', syntax: 'ps -p PID[,PID...]',
      desc: "Affiche uniquement le ou les processus dont on donne le PID.",
      details: "Plusieurs PID séparés par des virgules : ps -p 4001,4002,4003. Souvent combiné avec -o pour choisir les colonnes.",
      example: 'ps -p 1200', src: 'Cours 3 §4.1 · TP3 ex.11' },
    { id: 'c3-cmd-ps-o', cmd: 'ps -o', syntax: 'ps -o col1,col2,... [-p PID]',
      desc: "Choisit les colonnes affichées : pid, ppid, user, tty, ni, stat, %cpu, time, cmd…",
      details: "Liste séparée par des virgules, sans espace. Ex. : ps -o pid,ppid,stat,cmd pour suivre la parenté et l'état.",
      example: 'ps -o pid,ni,cmd -p 2210', src: 'Cours 3 §1.3, §4.1 · TP3 ex.10-11' },
    { id: 'c3-cmd-ps-sort', cmd: 'ps --sort', syntax: 'ps aux --sort=-%cpu | head -6',
      desc: "Trie la sortie de ps selon une colonne ; le signe - donne un tri décroissant.",
      details: "--sort=-%cpu : les plus gourmands en CPU d'abord ; --sort=-%mem : en mémoire. head -6 = la ligne d'en-tête + 5 processus.",
      example: 'ps aux --sort=-%mem | head -6', src: 'Cours 3 §4.1 · TP3 ex.16' },
    { id: 'c3-cmd-ps-C', cmd: 'ps -C / --ppid', syntax: 'ps -C nom   |   ps --ppid PID',
      desc: "Sélectionne les processus par nom de commande (-C) ou par PID de leur parent (--ppid).",
      details: "Utilisés au TP pour trouver l'orphelin (ps -o pid,ppid,cmd -C sleep) et les enfants zombies d'un parent (ps -o pid,ppid,stat,cmd --ppid 6000).",
      example: 'ps -o pid,ppid,cmd -C sleep', src: 'TP3 ex.12' },
    { id: 'c3-cmd-pgrep', cmd: 'pgrep', syntax: 'pgrep [-u utilisateur] [-f] motif',
      desc: "Renvoie directement le PID des processus dont le nom correspond au motif.",
      details: "Plus simple que ps | grep (pas de ligne parasite « grep »). -u filtre par utilisateur, -f cherche dans toute la ligne de commande, -l affiche aussi le nom.",
      example: 'pgrep sshd', src: 'Cours 3 §4.1 · TP3 ex.6' },
    { id: 'c3-cmd-top', cmd: 'top', syntax: 'top',
      desc: "Affiche les processus en temps réel, avec l'utilisation CPU et mémoire (rafraîchie toutes les 3 s).",
      details: "Touches : P = tri par CPU, M = tri par mémoire, k = tuer un processus (demande le PID), q = quitter. La colonne NI montre la valeur nice.",
      example: 'top', src: 'Cours 3 §4.3 · TP3 ex.1, ex.6, ex.13' },
    { id: 'c3-cmd-htop', cmd: 'htop', syntax: 'htop',
      desc: "Version améliorée et interactive de top : navigation aux flèches, tri par colonne, arrêt d'un processus avec F9.",
      details: "Pas toujours installé : sudo apt install htop. F10 ou q pour quitter.",
      example: 'sudo apt install htop', src: 'Cours 3 §4.3' },
    { id: 'c3-cmd-pstree', cmd: 'pstree -p', syntax: 'pstree [-p] [PID]',
      desc: "Affiche les processus sous forme d'arbre (hiérarchie parents / enfants) ; -p ajoute les PID.",
      details: "pstree -p $$ : arbre à partir du shell courant. pstree -p | less : arbre complet, qu'on remonte jusqu'à systemd(1).",
      example: 'pstree -p $$', src: 'Cours 3 §4.3 · TP3 ex.10' },
    { id: 'c3-cmd-proc', cmd: '/proc/PID', syntax: 'cat /proc/PID/status',
      desc: "Répertoire virtuel du noyau qui décrit un processus : état, PPID, propriétaire, mémoire…",
      details: "status = résumé (Name, State, Pid, PPid, Uid…) ; cwd = lien vers le répertoire courant (ls -l /proc/PID/cwd) ; cmdline = ligne de commande.",
      example: 'cat /proc/2210/status', src: 'TP3 ex.16' },
    { id: 'c3-cmd-pidshell', cmd: '$$', syntax: 'echo $$',
      desc: "Variable spéciale : PID du shell courant.",
      details: "Dans un script, $$ est le PID du bash qui exécute le script. Ne pas confondre avec $! (dernier processus lancé en arrière-plan) ni avec $? (code de retour).",
      example: 'echo $$', src: 'Cours 3 §1.3 · TP3 ex.10, ex.15' },
    { id: 'c3-cmd-lastbg', cmd: '$!', syntax: 'commande &   puis   PID=$!',
      desc: "Variable spéciale : PID du dernier processus lancé en arrière-plan.",
      details: "Indispensable dans un script pour piloter le processus qu'on vient de lancer (kill -STOP $PID…). Pas d'espace autour du = lors de l'affectation.",
      example: 'sleep 100 & echo $!', src: 'TP3 ex.9' },
    { id: 'c3-cmd-retour', cmd: '$?', syntax: 'echo $?',
      desc: "Variable spéciale : valeur de retour (code de sortie) de la dernière commande.",
      details: "0 = succès ; toute autre valeur = échec (ls -z renvoie 2). C'est ce code que testent && et ||.",
      example: 'ls -z ; echo $?', src: 'TP3 ex.5' },
    { id: 'c3-cmd-kill-l', cmd: 'kill -l', syntax: 'kill -l',
      desc: "Liste tous les signaux disponibles avec leur numéro.",
      details: "kill -l 9 affiche le nom du signal 9 (KILL). Sur Linux x86 : HUP 1, INT 2, KILL 9, TERM 15, CONT 18, STOP 19, TSTP 20.",
      example: 'kill -l', src: 'Cours 3 §5.1 · TP3 ex.2' },
    { id: 'c3-cmd-kill', cmd: 'kill', syntax: 'kill PID   (= kill -TERM PID = kill -15 PID)',
      desc: "Envoie SIGTERM (15) : demande au processus de s'arrêter proprement.",
      details: "Le processus peut fermer ses fichiers et nettoyer, voire intercepter ou ignorer le signal. Forme générale : kill -signal PID (nom ou numéro). On ne peut signaler que ses propres processus (sinon sudo).",
      example: 'kill 2210', src: 'Cours 3 §5.2 · TP3 ex.3' },
    { id: 'c3-cmd-kill9', cmd: 'kill -9', syntax: 'kill -9 PID   (= kill -KILL PID)',
      desc: "Envoie SIGKILL : arrêt immédiat et forcé par le noyau, à utiliser en dernier recours.",
      details: "Ne peut être ni intercepté ni ignoré : aucun nettoyage (fichiers temporaires, données non enregistrées perdues). Toujours essayer kill PID d'abord.",
      example: 'kill -9 2210', src: 'Cours 3 §5.2 · TP3 ex.3' },
    { id: 'c3-cmd-kill-stop', cmd: 'kill -STOP', syntax: 'kill -STOP PID   (= kill -19 PID)',
      desc: "Suspend (met en pause) le processus : état T, plus aucune consommation CPU.",
      details: "SIGSTOP ne peut pas être intercepté. Variante clavier : Ctrl+Z envoie SIGTSTP (20), qui, lui, peut l'être.",
      example: 'kill -STOP 3300', src: 'Cours 3 §5.2 · TP3 ex.6, ex.9' },
    { id: 'c3-cmd-kill-cont', cmd: 'kill -CONT', syntax: 'kill -CONT PID   (= kill -18 PID)',
      desc: "Fait reprendre un processus suspendu (SIGCONT).",
      details: "Fonctionne depuis n'importe quel terminal, contrairement à fg / bg qui ne gèrent que les jobs du shell courant.",
      example: 'kill -CONT 3300', src: 'Cours 3 §5.2 · TP3 ex.4, ex.6' },
    { id: 'c3-cmd-kill-hup', cmd: 'kill -HUP', syntax: 'kill -HUP PID   (= kill -1 PID)',
      desc: "Envoie SIGHUP (1) : « terminal fermé » ; beaucoup de démons l'interprètent comme « relire la configuration ».",
      details: "C'est le signal que reçoivent les processus d'un terminal qu'on ferme : ils s'arrêtent, sauf s'ils ont été lancés avec nohup.",
      example: 'sudo kill -HUP 812', src: 'Cours 3 §5.1 · TP3 ex.14' },
    { id: 'c3-cmd-pkill', cmd: 'pkill', syntax: 'pkill [-signal] [-u utilisateur] nom',
      desc: "Envoie un signal (SIGTERM par défaut) aux processus dont le nom correspond au motif.",
      details: "-u filtre par propriétaire. Le motif est cherché dans le nom du processus (correspondance partielle possible).",
      example: 'pkill -u alice sleep', src: 'Cours 3 §5.2 · TP3 ex.13' },
    { id: 'c3-cmd-pkill-f', cmd: 'pkill -f', syntax: 'pkill -f motif',
      desc: "Cherche le motif dans la ligne de commande COMPLÈTE (arguments compris), pas seulement dans le nom.",
      details: "pkill -f yahoo arrête « ping -c 50 yahoo.com » mais pas le ping vers google, alors que killall ping arrêterait les deux.",
      example: 'pkill -f yahoo', src: 'TP3 ex.7' },
    { id: 'c3-cmd-killall', cmd: 'killall', syntax: 'killall [-signal] nom',
      desc: "Envoie un signal (SIGTERM par défaut) à tous les processus portant EXACTEMENT ce nom.",
      details: "Compare le nom du programme, pas ses arguments. Pour des processus appartenant à d'autres utilisateurs (ex. apache2, lancé par root), il faut sudo.",
      example: 'sudo killall apache2', src: 'Cours 3 §5.2 · TP3 ex.7' },
    { id: 'c3-cmd-ctrlc', cmd: 'Ctrl+C', syntax: 'Ctrl+C',
      desc: "Envoie SIGINT (2) au processus au premier plan : l'interrompt.",
      details: "Ne concerne que le processus de premier plan. Un programme peut intercepter SIGINT (trap, TP ex.15).",
      example: 'ping google.com   puis   Ctrl+C', src: 'Cours 3 §5.1 · TP3 ex.4' },
    { id: 'c3-cmd-ctrlz', cmd: 'Ctrl+Z', syntax: 'Ctrl+Z',
      desc: "Envoie SIGTSTP (20) au processus au premier plan : le suspend (état T) et rend la main.",
      details: "Le shell affiche [n]+ Stopped. Ensuite : bg %n (reprise en arrière-plan) ou fg %n (reprise au premier plan).",
      example: 'sleep 300   puis   Ctrl+Z', src: 'Cours 3 §5.3 · TP3 ex.4' },
    { id: 'c3-cmd-amp', cmd: '&', syntax: 'commande &',
      desc: "Lance la commande en arrière-plan : le terminal reste disponible.",
      details: "Le shell affiche [numéro de job] PID, ex. [1] 4821. Le & sépare déjà les commandes : ne pas mettre de ; juste après.",
      example: 'ping google.com &', src: 'Cours 3 §2.3 · TP3 ex.1, ex.4' },
    { id: 'c3-cmd-jobs', cmd: 'jobs', syntax: 'jobs [-l]',
      desc: "Liste les tâches (jobs) du terminal courant avec leur numéro et leur état (Running, Stopped).",
      details: "+ = job courant (cible par défaut de fg / bg), - = job précédent. -l ajoute les PID. Les numéros de job sont propres à chaque terminal.",
      example: 'jobs -l', src: 'Cours 3 §5.3 · TP3 ex.4' },
    { id: 'c3-cmd-fg', cmd: 'fg', syntax: 'fg [%n]',
      desc: "Ramène le job n au premier plan (qu'il soit suspendu ou en arrière-plan).",
      details: "Sans argument : le job courant (+). %n est un numéro de job, pas un PID.",
      example: 'fg %1', src: 'Cours 3 §5.3 · TP3 ex.4' },
    { id: 'c3-cmd-bg', cmd: 'bg', syntax: 'bg [%n]',
      desc: "Relance en arrière-plan le job n suspendu (après Ctrl+Z).",
      details: "Sans argument : le job courant (+). Le job passe de Stopped à Running et le terminal reste disponible.",
      example: 'bg %1', src: 'Cours 3 §5.3 · TP3 ex.4' },
    { id: 'c3-cmd-nohup', cmd: 'nohup', syntax: 'nohup commande &',
      desc: "Lance une commande qui ignore SIGHUP : elle survit à la fermeture du terminal.",
      details: "Si la sortie n'est pas redirigée, elle est ajoutée au fichier nohup.out (répertoire courant, sinon ~/nohup.out).",
      example: 'nohup sleep 600 &', src: 'Cours 3 §5.3 · TP3 ex.14' },
    { id: 'c3-cmd-nice', cmd: 'nice -n', syntax: 'nice -n N commande',
      desc: "Lance une commande avec la valeur nice N (de -20 à 19 ; 0 par défaut).",
      details: "Valeur haute = moins prioritaire. Seul root peut donner une valeur négative. nice sans argument affiche la valeur courante.",
      example: 'nice -n 10 tar czf sauvegarde.tar.gz /home', src: 'Cours 3 §5.4 · TP3 ex.13' },
    { id: 'c3-cmd-renice', cmd: 'renice', syntax: 'renice -n N -p PID',
      desc: "Modifie la valeur nice d'un processus DÉJÀ lancé.",
      details: "Un utilisateur normal peut seulement augmenter la valeur (baisser la priorité) de ses propres processus ; la diminuer (même de 19 à 0) ou passer en négatif exige sudo.",
      example: 'renice -n 5 -p 2210', src: 'Cours 3 §5.4 · TP3 ex.13' },
    { id: 'c3-cmd-taskset', cmd: 'taskset -c', syntax: 'taskset -c CPU commande',
      desc: "Lance une commande en l'épinglant sur un ou plusieurs cœurs de processeur.",
      details: "Au TP, deux yes sur le même cœur (taskset -c 0) permettent d'observer l'effet de nice sur le partage du CPU.",
      example: 'taskset -c 0 nice -n 19 yes > /dev/null &', src: 'TP3 ex.13' },
    { id: 'c3-cmd-yes', cmd: 'yes > /dev/null &', syntax: 'yes > /dev/null &',
      desc: "Crée un processus gourmand de test : yes écrit « y » sans fin, la sortie est jetée dans /dev/null.",
      details: "Il monte à près de 100 % d'un cœur (état R). Pratique pour tester top, kill -STOP / -CONT et nice ; l'arrêter ensuite avec kill PID ou pkill yes.",
      example: 'yes > /dev/null &', src: 'TP3 ex.6, ex.11, ex.13' },
    { id: 'c3-cmd-pv', cmd: ';', syntax: 'commande1 ; commande2',
      desc: "Exécute les commandes l'une après l'autre, quel que soit le résultat de la précédente.",
      details: "Enchaînement inconditionnel : une erreur (ex. ls -z) n'empêche pas la suite.",
      example: "echo \"Début de l'exercice\"; pwd; ls -l", src: 'TP3 ex.5' },
    { id: 'c3-cmd-and', cmd: '&&', syntax: 'commande1 && commande2',
      desc: "Exécute commande2 seulement si commande1 a RÉUSSI (code de retour 0).",
      details: "Pour n'enchaîner que si tout se passe bien : si mkdir échoue, cd et touch ne sont pas exécutés.",
      example: 'mkdir test_dir && cd test_dir && touch test_file.txt', src: 'TP3 ex.5' },
    { id: 'c3-cmd-or', cmd: '||', syntax: 'commande1 || commande2',
      desc: "Exécute commande2 seulement si commande1 a ÉCHOUÉ (code de retour non nul).",
      details: "Pour un plan B ou un message d'erreur. Dans a && b || c, c s'exécute si a OU b échoue.",
      example: "cd non_existant_dir || echo \"Le répertoire n'existe pas.\"", src: 'TP3 ex.5' },
    { id: 'c3-cmd-sysstatus', cmd: 'systemctl status', syntax: 'systemctl status service',
      desc: "Affiche l'état d'un service : actif ou non, PID principal (Main PID), derniers journaux.",
      details: "Sous Debian, le service SSH s'appelle ssh (sshd sur d'autres distributions). Pas besoin de sudo pour consulter.",
      example: 'systemctl status ssh', src: 'TP3 ex.8' },
    { id: 'c3-cmd-sysstart', cmd: 'systemctl start/stop/restart', syntax: 'sudo systemctl start|stop|restart service',
      desc: "Démarre, arrête ou redémarre un service, immédiatement.",
      details: "restart arrête puis relance le démon : son PID change. Vérifier avec pgrep sshd ou ps -ef | grep sshd.",
      example: 'sudo systemctl restart ssh', src: 'TP3 ex.8' },
    { id: 'c3-cmd-sysenable', cmd: 'systemctl enable/disable', syntax: 'sudo systemctl enable|disable service   ;   systemctl is-enabled service',
      desc: "Active ou désactive le démarrage automatique du service au boot ; is-enabled répond enabled ou disabled.",
      details: "disable n'arrête pas le service en cours (c'est le rôle de stop) : il empêche seulement son lancement au prochain démarrage.",
      example: 'sudo systemctl disable ssh && systemctl is-enabled ssh', src: 'TP3 ex.8' },
    { id: 'c3-cmd-trap', cmd: 'trap', syntax: "trap 'commandes' SIGNAL",
      desc: "Dans un script bash, exécute des commandes quand le script reçoit un signal (interception).",
      details: "Utilisable pour SIGINT, SIGTERM, SIGHUP… mais jamais pour SIGKILL ni SIGSTOP, qui ne peuvent pas être interceptés.",
      example: "trap 'echo \"SIGTERM reçu\"; exit 0' SIGTERM", src: 'TP3 ex.15' },
    { id: 'c3-cmd-exec', cmd: 'exec', syntax: 'exec commande',
      desc: "Remplace le shell courant par la commande, sans créer de nouveau processus (même PID).",
      details: "C'est l'appel exec() du cours, sans fork(). Au TP, bash -c 'sleep 1 & exec sleep 60' fabrique un zombie. Attention : exec dans ton terminal remplace ton shell, qui disparaît à la fin de la commande.",
      example: "bash -c 'sleep 1 & exec sleep 60' &", src: 'Cours 3 §3.1 · TP3 ex.12' }
  ],

  flashcards: [
    { id: 'c3-f-prog', front: 'Programme vs processus', back: "Programme : fichier exécutable sur le disque, objet statique (la recette). Processus : programme en cours d'exécution en mémoire, avec un PID et des ressources, objet dynamique (le plat en train d'être cuisiné). Un même programme peut donner plusieurs processus." },
    { id: 'c3-f-pid', front: 'PID et PPID', back: "PID : numéro unique (entier positif) qui identifie le processus. PPID : PID de son parent, celui qui l'a créé. Ex. : ps lancé depuis le bash 1200 a pour PPID 1200." },
    { id: 'c3-f-sysuser', front: 'Processus système vs processus utilisateur', back: "Système : essentiels, démarrent avec le système (lancés par systemd), souvent root, en arrière-plan (systemd, sshd). Utilisateur : lancés par un utilisateur (terminal ou interface graphique), moins de privilèges (gedit, firefox, nano)." },
    { id: 'c3-f-fgbg', front: 'Avant-plan vs arrière-plan', back: "Avant-plan : interagit avec le terminal, on attend sa fin pour retrouver la main. Arrière-plan (commande &) : s'exécute sans interaction, le terminal reste disponible." },
    { id: 'c3-f-daemon', front: 'Démon (daemon)', back: "Processus d'arrière-plan lancé en général au démarrage pour fournir un service (sshd, cron, apache2, systemd-journald). Rattaché à aucun terminal : TTY = ? dans ps. Nom souvent terminé par d." },
    { id: 'c3-f-zombie', front: 'Processus zombie (Z)', back: "Processus terminé dont le parent n'a pas encore lu le code de sortie (wait()). Ne consomme ni CPU ni mémoire mais occupe une entrée dans la table des processus. kill -9 est sans effet : il disparaît quand le parent fait wait() ou se termine. Affiché <defunct>." },
    { id: 'c3-f-orphan', front: 'Processus orphelin', back: "Processus vivant dont le parent s'est terminé avant lui. Il est adopté par init / systemd (PID 1), ou par systemd --user sur un bureau graphique, qui récoltera son code de sortie." },
    { id: 'c3-f-fork', front: 'fork()', back: "Appel système qui duplique le processus parent pour créer un enfant, avec un nouveau PID. Le shell fait fork() pour chaque commande tapée." },
    { id: 'c3-f-exec', front: 'exec()', back: "Appel système qui remplace le code du processus par celui d'un nouveau programme ; le PID reste le même. Souvent appelé juste après fork() (fork + exec = lancer une commande)." },
    { id: 'c3-f-wait', front: 'wait() et code de sortie', back: "Le parent attend la fin de son enfant et récupère son code de sortie ; tant que ce n'est pas fait, l'enfant terminé reste zombie. Ensuite bash réaffiche l'invite." },
    { id: 'c3-f-etats', front: "Les états du cycle de vie", back: "Création → Prêt (attend le CPU) → En exécution (élu ; préempté → retour Prêt) → En attente (E/S, libère le CPU ; événement → Prêt) → Terminé (zombie jusqu'au wait() du parent)." },
    { id: 'c3-f-SD', front: 'STAT S vs D', back: "S : sommeil interruptible, un signal peut réveiller le processus. D : sommeil non interruptible, il attend un événement matériel (écriture disque…) et ne peut pas être interrompu avant la fin de l'opération." },
    { id: 'c3-f-stat', front: 'Codes STAT : R S D T Z I', back: "R = en exécution ou prêt · S = endormi interruptible · D = endormi non interruptible (E/S) · T = suspendu (Ctrl+Z, SIGSTOP) · Z = zombie · I = thread noyau inactif." },
    { id: 'c3-f-suffix', front: 'Suffixes STAT : s + < N l', back: "s = chef de session (un shell) · + = groupe de premier plan du terminal · < = priorité haute · N = priorité basse · l = multi-thread. Ex. : Ss = bash en attente de saisie, R+ = ps en cours au premier plan." },
    { id: 'c3-f-signal', front: 'Signal', back: "Message envoyé à un processus pour lui demander de réagir (s'arrêter, se suspendre, reprendre…). Chaque signal a un nom et un numéro (kill -l). Un processus peut intercepter la plupart d'entre eux." },
    { id: 'c3-f-uncatch', front: 'Signaux non interceptables', back: "SIGKILL (9) et SIGSTOP (19) : le processus ne peut ni les intercepter (trap) ni les ignorer. Sinon un programme pourrait se rendre impossible à arrêter ou à suspendre." },
    { id: 'c3-f-termkill', front: 'SIGTERM (15) vs SIGKILL (9)', back: "SIGTERM : demande d'arrêt propre (défaut de kill), que le processus peut intercepter ou ignorer (un bash interactif l'ignore). SIGKILL : arrêt immédiat imposé par le noyau, sans nettoyage : dernier recours." },
    { id: 'c3-f-job', front: 'Numéro de job vs PID', back: "[3] 31926 : 3 = numéro de job, propre au terminal (utilisé avec %3 par fg, bg, kill) ; 31926 = PID, unique dans tout le système. jobs affiche les numéros de job, ps les PID." },
    { id: 'c3-f-nice', front: 'Valeur nice', back: "De -20 (plus prioritaire) à 19 (moins prioritaire), 0 par défaut. Seul root peut attribuer une valeur négative ; un utilisateur normal peut seulement augmenter la valeur de ses processus. Colonne NI dans ps et top." },
    { id: 'c3-f-retour', front: 'Code de retour ($?)', back: "Valeur renvoyée par une commande qui se termine : 0 = succès, autre valeur = échec. && enchaîne si 0, || enchaîne si non nul ; echo $? l'affiche." }
  ],

  quiz: [
    { id: 'c3-q-001', q: "Qu'est-ce qu'un processus ?",
      choices: ['Un fichier exécutable stocké sur le disque', "Un programme en cours d'exécution", 'Un répertoire du système'],
      answer: 1,
      explain: "Un processus est un programme en cours d'exécution, avec son PID et ses ressources ; le fichier exécutable sur le disque est le programme.",
      why: { 0: "C'est la définition du programme : un objet statique sur le disque, qui ne fait rien tant qu'on ne le lance pas.",
             2: "Un répertoire est un type de fichier, pas une exécution de code." },
      src: 'Cours 3 §1.1 · Quiz express 1', level: 1 },
    { id: 'c3-q-002', q: "Que représente le PPID d'un processus ?",
      choices: ['Sa priorité', 'Le PID de son processus parent', 'Le numéro de son terminal'],
      answer: 1,
      explain: "Le PPID (Parent PID) est l'identifiant du processus qui l'a créé.",
      why: { 0: "La priorité est indiquée par NI / PRI (valeur nice).",
             2: "Le terminal est donné par la colonne TTY (ex. pts/0)." },
      src: 'Cours 3 §1.3 · Quiz express 1', level: 1 },
    { id: 'c3-q-003', q: 'Un même programme peut-il donner plusieurs processus en même temps ?',
      choices: ['Non, jamais', "Seulement pour l'utilisateur root", 'Oui, chaque lancement crée une nouvelle instance'],
      answer: 2,
      explain: "Chaque lancement crée un nouveau processus avec son propre PID (ex. deux fenêtres de terminal = deux processus bash).",
      why: { 0: "Faux : ouvre deux terminaux, ps -u $USER montre deux bash avec des PID différents.",
             1: "N'importe quel utilisateur peut lancer plusieurs fois le même programme." },
      src: 'Cours 3 §1.2 · Quiz express 1', level: 1 },
    { id: 'c3-q-004', q: 'Comment lancer une commande en arrière-plan ?',
      choices: ['En ajoutant & à la fin de la commande', 'En la préfixant par sudo', 'En appuyant sur Ctrl+C'],
      answer: 0,
      explain: "Le symbole & lance la commande en arrière-plan et rend immédiatement la main au terminal ([n° de job] PID s'affiche).",
      why: { 1: "sudo exécute la commande avec les droits root, toujours au premier plan.",
             2: "Ctrl+C interrompt (SIGINT) le processus au premier plan." },
      src: 'Cours 3 §2.3 · Quiz express 2', level: 1 },
    { id: 'c3-q-005', q: "Qu'est-ce qu'un processus zombie ?",
      choices: ['Un processus qui consomme 100 % du CPU', "Un processus terminé dont le parent n'a pas lu le code de sortie", 'Un processus lancé par root'],
      answer: 1,
      explain: "Un zombie a fini son exécution mais reste dans la table des processus tant que son parent n'a pas récupéré son code de sortie (wait()).",
      why: { 0: "Un zombie ne consomme justement ni CPU ni mémoire : il est déjà terminé.",
             2: "Le propriétaire n'a rien à voir : un zombie est défini par son état (Z), pas par son UID." },
      src: 'Cours 3 §2.5 · Quiz express 2', level: 1 },
    { id: 'c3-q-006', q: 'Que devient un processus orphelin ?',
      choices: ['Il est immédiatement détruit', 'Il passe en avant-plan', 'Il est adopté par init / systemd (PID 1)'],
      answer: 2,
      explain: "Un orphelin est automatiquement réaffecté à init / systemd (PID 1), qui récoltera son code de sortie.",
      why: { 0: "Il continue de tourner : seul son parent a disparu.",
             1: "Il n'a plus de terminal de contrôle actif ; il ne passe surtout pas en avant-plan." },
      src: 'Cours 3 §2.5 · Quiz express 2', level: 1 },
    { id: 'c3-q-007', q: 'Quel appel système duplique un processus pour créer un enfant ?',
      choices: ['exec()', 'fork()', 'wait()'],
      answer: 1,
      explain: "fork() duplique le parent (nouveau PID) ; exec() remplace ensuite le code de l'enfant par un nouveau programme.",
      why: { 0: "exec() ne crée pas de processus : il remplace le code du processus courant (même PID).",
             2: "wait() permet au parent d'attendre la fin de l'enfant et de lire son code de sortie." },
      src: 'Cours 3 §3.1 · Quiz express 3', level: 1 },
    { id: 'c3-q-008', q: "Un processus qui attend la fin d'une lecture sur disque est dans l'état :",
      choices: ['En attente (Blocked / Sleeping)', 'En exécution (Running)', 'Zombie'],
      answer: 0,
      explain: "En attente d'une E/S, le processus libère le processeur ; il repassera à l'état Prêt quand l'événement surviendra.",
      why: { 1: "En exécution, il utiliserait le CPU ; or il ne peut rien faire tant que les données ne sont pas arrivées.",
             2: "Un zombie est terminé ; ce processus est vivant et attend." },
      src: 'Cours 3 §3.2 · Quiz express 3', level: 1 },
    { id: 'c3-q-009', q: 'Que signifie la lettre T dans la colonne STAT ?',
      choices: ['Terminé', 'Temps réel', 'Suspendu (stopped)'],
      answer: 2,
      explain: "T = stopped : le processus est suspendu, par exemple avec Ctrl+Z ou le signal SIGSTOP.",
      why: { 0: "Un processus terminé non récolté apparaît en Z (zombie) ; un processus fini et récolté n'apparaît plus.",
             1: "Il n'existe pas de code STAT « temps réel » dans le cours ; T signifie stopped." },
      src: 'Cours 3 §3.4 · Quiz express 3', level: 1 },
    { id: 'c3-q-010', q: 'Quelle commande affiche les processus en temps réel ?',
      choices: ['ps', 'pstree', 'top'],
      answer: 2,
      explain: "top (ou htop) rafraîchit l'affichage en continu ; ps affiche une photo à un instant donné.",
      why: { 0: "ps prend une photo instantanée, sans rafraîchissement.",
             1: "pstree affiche l'arbre des processus, une seule fois." },
      src: 'Cours 3 §4.3 · Quiz express 4', level: 1 },
    { id: 'c3-q-011', q: 'Dans ps aux, que signifie une colonne TTY égale à « ? » ?',
      choices: ["Le processus n'est rattaché à aucun terminal", 'Le processus est un zombie', 'Le terminal est inconnu de root'],
      answer: 0,
      explain: "« ? » signifie qu'aucun terminal n'est associé : c'est typiquement le cas des démons (et des applications lancées depuis l'interface graphique).",
      why: { 1: "Un zombie se repère dans la colonne STAT (Z, <defunct>), pas dans TTY.",
             2: "root connaît tous les terminaux ; « ? » veut dire « pas de terminal »." },
      src: 'Cours 3 §4.2 · Quiz express 4', level: 1 },
    { id: 'c3-q-012', q: 'Quelle commande affiche la hiérarchie parents / enfants ?',
      choices: ['ps -u', 'pstree', 'top -k'],
      answer: 1,
      explain: "pstree affiche les processus sous forme d'arbre ; pstree -p ajoute les PID.",
      why: { 0: "ps -u sélectionne les processus d'un utilisateur, sans arbre.",
             2: "top n'a pas d'option -k ; dans top, c'est la TOUCHE k qui sert à tuer un processus." },
      src: 'Cours 3 §4.3 · Quiz express 4', level: 1 },
    { id: 'c3-q-013', q: 'Quel signal la commande kill envoie-t-elle par défaut ?',
      choices: ['SIGKILL (9)', 'SIGTERM (15)', 'SIGSTOP (19)'],
      answer: 1,
      explain: "kill envoie SIGTERM (15) : arrêt propre. kill -9 envoie SIGKILL pour forcer l'arrêt.",
      why: { 0: "SIGKILL n'est envoyé que si on le demande explicitement (kill -9).",
             2: "SIGSTOP suspend le processus ; il faut kill -STOP." },
      src: 'Cours 3 §5.2 · Quiz express 5', level: 1 },
    { id: 'c3-q-014', q: 'Après Ctrl+Z, quelle commande relance le job en arrière-plan ?',
      choices: ['bg', 'fg', 'jobs'],
      answer: 0,
      explain: "bg relance le job suspendu en arrière-plan ; fg le ramène au premier plan ; jobs liste les tâches.",
      why: { 1: "fg le relance aussi, mais au PREMIER plan : tu perds la main sur le terminal.",
             2: "jobs se contente de lister les tâches et leur état." },
      src: 'Cours 3 §5.3 · Quiz express 5', level: 1 },
    { id: 'c3-q-015', q: 'Quelle valeur nice rend un processus le plus prioritaire ?',
      choices: ['19', '0', '-20'],
      answer: 2,
      explain: "-20 est la priorité la plus haute, 19 la plus basse ; seul root peut fixer une valeur négative.",
      why: { 0: "19 est au contraire la priorité la plus BASSE (processus très « gentil »).",
             1: "0 est la valeur par défaut, au milieu de l'échelle." },
      src: 'Cours 3 §5.4 · Quiz express 5', level: 1 },
    { id: 'c3-q-016', type: 'input', q: 'Quel est le numéro du signal SIGKILL ?', accept: ['9'],
      explain: "SIGKILL = 9 : kill -9 PID force l'arrêt immédiat, sans possibilité d'interception.",
      src: 'Cours 3 §5.1', level: 1 },
    { id: 'c3-q-017', type: 'input', q: 'Quel est le numéro du signal SIGTERM, envoyé par défaut par kill ?', accept: ['15'],
      explain: "SIGTERM = 15 : kill PID équivaut à kill -15 PID (arrêt propre).",
      src: 'Cours 3 §5.1 · TP3 ex.2', level: 1 },
    { id: 'c3-q-018', type: 'input', q: 'Quel est le numéro du signal SIGSTOP (sur Linux x86) ?', accept: ['19'],
      explain: "SIGSTOP = 19 : suspension non interceptable (kill -STOP PID = kill -19 PID).",
      src: 'Cours 3 §5.1 · TP3 ex.2', level: 2 },
    { id: 'c3-q-019', type: 'input', q: 'Quel est le numéro du signal SIGCONT (sur Linux x86) ?', accept: ['18'],
      explain: "SIGCONT = 18 : il fait reprendre un processus suspendu (kill -CONT PID).",
      src: 'Cours 3 §5.1 · TP3 ex.2', level: 2 },
    { id: 'c3-q-020', type: 'input', q: 'Quel signal le raccourci Ctrl+Z envoie-t-il ? (nom)', accept: ['SIGTSTP', 'TSTP', '20'],
      explain: "Ctrl+Z envoie SIGTSTP (20), la version clavier de la suspension. On peut le vérifier avec kill -TSTP PID.",
      src: 'Cours 3 §5.1 · TP3 ex.4', level: 2 },
    { id: 'c3-q-021', q: 'Quel signal le raccourci Ctrl+C envoie-t-il au processus au premier plan ?',
      choices: ['SIGTERM (15)', 'SIGKILL (9)', 'SIGINT (2)', 'SIGTSTP (20)'],
      answer: 2,
      explain: "Ctrl+C envoie SIGINT (2), l'interruption clavier. Au TP, on termine ainsi les jobs ramenés au premier plan.",
      why: { 0: "SIGTERM est le signal par défaut de la commande kill, pas d'un raccourci clavier.",
             1: "Aucun raccourci n'envoie SIGKILL ; il faut kill -9 PID.",
             3: "SIGTSTP correspond à Ctrl+Z (suspension)." },
      src: 'Cours 3 §5.1 · TP3 ex.4', level: 1 },
    { id: 'c3-q-022', q: 'Quel signal un processus ne peut-il PAS intercepter ?',
      choices: ['SIGTERM', 'SIGINT', 'SIGHUP', 'SIGKILL'],
      answer: 3,
      explain: "SIGKILL (et SIGSTOP) ne peuvent être ni interceptés ni ignorés ; tous les autres peuvent l'être (ex. avec trap).",
      why: { 0: "SIGTERM peut être intercepté (trap … SIGTERM) ou ignoré (un bash interactif l'ignore).",
             1: "SIGINT peut être intercepté : c'est ce que fait signaux.sh au TP ex.15.",
             2: "SIGHUP peut être ignoré : c'est exactement ce que fait nohup." },
      src: 'Cours 3 §5.1 · TP3 ex.15', level: 1 },
    { id: 'c3-q-023', q: 'Que contient la variable spéciale $$ ?',
      choices: ['Le code de retour de la dernière commande', 'Le PID du dernier processus lancé en arrière-plan', 'Le PID du shell courant', 'Le PPID du shell courant'],
      answer: 2,
      explain: "$$ = PID du shell courant (ou du bash qui exécute le script). echo $$ l'affiche.",
      why: { 0: "Le code de retour est dans $?.",
             1: "Le PID du dernier processus lancé avec & est dans $!.",
             3: "Le PPID du shell est dans la variable PPID (ou ps -o ppid -p $$), pas dans $$." },
      src: 'Cours 3 §1.3 · TP3 ex.10', level: 1 },
    { id: 'c3-q-024', type: 'input', q: 'Quelle valeur contient $? après une commande qui a réussi ?', accept: ['0'],
      explain: "0 = succès ; toute valeur non nulle signale un échec (ls -z renvoie 2). && et || se basent sur ce code.",
      src: 'TP3 ex.5', level: 1 },
    { id: 'c3-q-025', q: 'Dans process_manager.sh, juste après « sleep 100 & », comment récupérer le PID de sleep ?',
      choices: ['PID=$$', 'PID=$?', 'PID=$!', 'PID=$(jobs)'],
      answer: 2,
      explain: "$! contient le PID du dernier processus lancé en arrière-plan : c'est l'indice donné par le TP.",
      why: { 0: "$$ est le PID du bash qui exécute le script, pas celui de sleep.",
             1: "$? est le code de retour (ici 0, car le lancement en arrière-plan a réussi).",
             3: "jobs affiche des lignes de texte ([1]+ Running …), pas un PID." },
      src: 'TP3 ex.9', level: 2 },
    { id: 'c3-q-026', type: 'input', q: 'Quel est le PID du processus qui adopte les orphelins (init / systemd) ?', accept: ['1'],
      explain: "systemd (anciennement init) a le PID 1 ; il adopte les orphelins et récolte leur code de sortie. Sur un bureau graphique, systemd --user peut jouer ce rôle.",
      src: 'Cours 3 §2.5 · TP3 ex.10, ex.12', level: 1 },
    { id: 'c3-q-027', type: 'input', q: "Dans quel fichier nohup écrit-il la sortie standard quand elle n'est pas redirigée ?", accept: ['nohup.out'],
      explain: "nohup ajoute la sortie à nohup.out dans le répertoire courant (ou ~/nohup.out si le répertoire courant n'est pas accessible en écriture).",
      src: 'TP3 ex.14', level: 2 },
    { id: 'c3-q-028', q: 'Depuis un dossier où test_dir existe déjà, tu tapes : mkdir test_dir && cd test_dir && touch test_file.txt. Que se passe-t-il ?',
      choices: ['Le dossier est écrasé et recréé vide', "mkdir affiche une erreur et ni cd ni touch ne sont exécutés", "mkdir affiche une erreur, puis cd et touch s'exécutent quand même", 'Tout réussit sans aucun message'],
      answer: 1,
      explain: "mkdir échoue (« File exists », code non nul) : avec &&, la suite n'est exécutée que si la commande précédente a réussi.",
      why: { 0: "mkdir n'écrase jamais un dossier existant : il échoue.",
             2: "Ce serait le comportement avec ; (enchaînement inconditionnel), pas avec &&.",
             3: "mkdir sans -p signale bien l'erreur et renvoie un code non nul." },
      src: 'TP3 ex.5', level: 2 },
    { id: 'c3-q-029', q: 'Quelle est la différence entre ; et && ?',
      choices: ['&& lance les deux commandes en parallèle', "; n'exécute la suite que si la précédente a échoué", 'Aucune différence', "; enchaîne quoi qu'il arrive ; && n'exécute la suite que si la précédente a réussi"],
      answer: 3,
      explain: "; = enchaînement inconditionnel ; && = seulement si code de retour 0 ; || = seulement si code non nul.",
      why: { 0: "C'est un seul & qui met une commande en arrière-plan ; && enchaîne séquentiellement selon le résultat.",
             1: "C'est le rôle de ||.",
             2: "La différence apparaît dès qu'une commande échoue (ex. ls -z)." },
      src: 'TP3 ex.5', level: 1 },
    { id: 'c3-q-030', q: 'Depuis le dossier parent, alors que my_folder existe déjà, tu tapes : mkdir my_folder; cd my_folder && touch my_file.txt || echo "Échec de la création du fichier." Résultat ?',
      choices: ['bash refuse la ligne : on ne peut pas mélanger ;, && et ||', "Rien ne s'exécute après l'erreur de mkdir", "mkdir affiche une erreur, mais cd et touch réussissent : le message d'échec ne s'affiche pas", 'Le message « Échec de la création du fichier. » s\'affiche'],
      answer: 2,
      explain: "Le ; ignore l'échec de mkdir ; cd réussit, donc touch s'exécute et réussit ; le || n'est déclenché que si cd ou touch échoue.",
      why: { 0: "On peut combiner librement les trois opérateurs sur une ligne.",
             1: "Après ;, la commande suivante s'exécute toujours.",
             3: "echo ne s'exécuterait que si cd ou touch échouait ; ici les deux réussissent." },
      src: 'TP3 ex.5', level: 3 },
    { id: 'c3-q-031', q: 'Deux pings tournent : ping -c 50 google.com & et ping -c 50 yahoo.com &. Quelle commande arrête UNIQUEMENT celui vers yahoo ?',
      choices: ['killall ping', 'killall yahoo', 'pkill yahoo', 'pkill -f yahoo'],
      answer: 3,
      explain: "pkill -f cherche le motif dans toute la ligne de commande : seul le ping dont les arguments contiennent yahoo est visé.",
      why: { 0: "killall ping arrête les DEUX pings : ils portent le même nom.",
             1: "killall compare le nom exact du programme : aucun processus ne s'appelle yahoo.",
             2: "Sans -f, pkill ne regarde que le nom du processus (ping), pas ses arguments : rien ne correspond." },
      src: 'TP3 ex.7', level: 2 },
    { id: 'c3-q-032', q: "TP ex.2 : sur le bash d'un second terminal, kill PID ne fait rien, alors que kill -9 PID ferme le terminal. Qu'en déduire ?",
      choices: ["SIGTERM est une demande que le processus peut ignorer ou intercepter ; SIGKILL est imposé par le noyau", 'SIGTERM ne fonctionne que pour root', 'SIGKILL suspend le processus au lieu de le terminer', "kill sans option n'envoie aucun signal"],
      answer: 0,
      explain: "Un bash interactif ignore SIGTERM ; SIGKILL ne peut être ni ignoré ni intercepté, d'où l'arrêt immédiat.",
      why: { 1: "Le bash t'appartient : tu as le droit de lui envoyer SIGTERM, il choisit simplement de l'ignorer.",
             2: "SIGKILL termine le processus ; c'est SIGSTOP qui suspend.",
             3: "kill sans option envoie SIGTERM (15)." },
      src: 'TP3 ex.2', level: 2 },
    { id: 'c3-q-033', q: 'Connecté en etudiant, tu tapes kill -STOP 812, où 812 est le démon sshd (propriétaire root). Que se passe-t-il ?',
      choices: ['sshd est suspendu (état T)', "Refus « Operation not permitted » : on ne peut signaler que ses propres processus (sinon sudo)", 'sshd est tué', 'Le signal attend que root se connecte'],
      answer: 1,
      explain: "Un utilisateur ne peut envoyer de signal qu'à ses propres processus ; pour ceux des autres, il faut sudo.",
      why: { 0: "Il faudrait sudo pour suspendre un processus de root.",
             2: "SIGSTOP ne tue jamais ; et de toute façon le signal est refusé.",
             3: "Un signal refusé n'est pas mis en attente : il n'est simplement pas envoyé." },
      src: 'Cours 3 §5.2 · TP3 ex.2', level: 2 },
    { id: 'c3-q-034', q: 'Dans la sortie de jobs, que signifient les signes + et - ?',
      choices: ['+ = en cours, - = suspendu', '+ = priorité haute, - = priorité basse', '+ = job courant (cible par défaut de fg et bg), - = job précédent'],
      answer: 2,
      explain: "+ marque le job courant (celui visé par fg ou bg sans argument), - le job précédent.",
      why: { 0: "L'état est écrit en toutes lettres (Running / Stopped) ; + et - n'indiquent pas l'état.",
             1: "La priorité se lit dans la colonne NI de ps ou top, pas dans jobs." },
      src: 'TP3 ex.4', level: 1 },
    { id: 'c3-q-035', q: 'Après xclock &, le shell affiche [3] 31926. Que vaut 3 ?',
      choices: ['Le PID de xclock', 'Le numéro de job, propre à ce terminal', 'Le nombre de processus xclock lancés', 'La valeur nice'],
      answer: 1,
      explain: "[3] est le numéro de job (utilisable avec %3 dans fg, bg, kill) ; 31926 est le PID.",
      why: { 0: "Le PID est le second nombre, 31926.",
             2: "C'est le 3e job de ce terminal, quels que soient les programmes.",
             3: "La valeur nice ne s'affiche pas au lancement ; elle se lit dans la colonne NI." },
      src: 'TP3 ex.4', level: 1 },
    { id: 'c3-q-036', q: "TP ex.11 : pourquoi sleep 300 est-il dans l'état S alors que yes > /dev/null est en R ?",
      choices: ['sleep a été suspendu par Ctrl+Z', 'yes est lancé par root', 'sleep est un zombie', "sleep attend un événement (la fin du délai) sans utiliser le CPU, alors que yes calcule en permanence"],
      answer: 3,
      explain: "sleep est endormi en attendant son minuteur (S) ; yes est toujours prêt ou en exécution (R) et consomme presque 100 % d'un cœur.",
      why: { 0: "Un processus suspendu serait en T, pas en S.",
             1: "Le propriétaire ne change pas l'état ; les deux sont lancés par etudiant.",
             2: "Un zombie serait en Z ; sleep 300 est bien vivant." },
      src: 'Cours 3 §3.4 · TP3 ex.11', level: 2 },
    { id: 'c3-q-037', q: 'Le processus sleep 400 (PID 4003) est suspendu (état T). Tu tapes kill 4003. Que se passe-t-il ?',
      choices: ['Il meurt immédiatement', "Le SIGTERM reste en attente : il ne sera traité qu'à la reprise du processus (SIGCONT)", 'Il devient zombie', "kill répond « Operation not permitted »"],
      answer: 1,
      explain: "Un processus stoppé ne traite pas ses signaux (sauf SIGKILL et SIGCONT) : SIGTERM attend la reprise. Avec kill %n, bash envoie aussi SIGCONT au job suspendu.",
      why: { 0: "Seul SIGKILL agit immédiatement sur un processus suspendu.",
             2: "Il deviendra zombie seulement après sa mort, si personne ne lit son code de sortie.",
             3: "C'est ton processus : tu as le droit de lui envoyer un signal." },
      src: 'Cours 3 §5.1 · TP3 ex.11', level: 3 },
    { id: 'c3-q-038', q: 'Que se passe-t-il si tu envoies kill -9 à un processus zombie ?',
      choices: ['Il disparaît immédiatement', 'Il redevient actif (état R)', "Rien : il est déjà terminé ; il faut que son parent lise son code de sortie ou se termine"],
      answer: 2,
      explain: "Un zombie est déjà mort : aucun signal ne l'affecte. On le fait disparaître en terminant son parent ; il est alors adopté par PID 1 qui fait le wait().",
      why: { 0: "Le zombie n'exécute plus rien : il ne peut pas « recevoir » un signal. Seul le wait() du parent (ou d'un adoptant) l'efface.",
             1: "Un processus terminé ne redémarre jamais." },
      src: 'Cours 3 §2.5 · TP3 ex.12', level: 2 },
    { id: 'c3-q-039', q: 'Tu lances sleep 600 & puis tu fermes la fenêtre du terminal. Que devient sleep ?',
      choices: ['Il continue normalement', 'Il reçoit SIGHUP et se termine', 'Il devient zombie', 'Il est suspendu (T)'],
      answer: 1,
      explain: "À la fermeture du terminal, le shell reçoit SIGHUP et le transmet à ses jobs, qui s'arrêtent. nohup évite cela.",
      why: { 0: "C'est ce qui se passe avec nohup sleep 600 &, pas sans.",
             2: "Il est tué puis récolté normalement ; un zombie nécessite un parent qui ne fait pas wait().",
             3: "SIGHUP termine le processus ; il ne le suspend pas." },
      src: 'TP3 ex.14', level: 2 },
    { id: 'c3-q-040', q: 'Que garantit nohup commande & ?',
      choices: ['Le processus devient prioritaire', 'Le processus ne peut plus être tué par kill -9', 'Le processus ignore SIGHUP et survit à la fermeture du terminal', 'Le processus est relancé automatiquement au démarrage'],
      answer: 2,
      explain: "nohup fait ignorer SIGHUP : le processus survit à la fermeture du terminal ; sa sortie part dans nohup.out.",
      why: { 0: "La priorité se règle avec nice / renice.",
             1: "SIGKILL ne peut jamais être ignoré, même avec nohup.",
             3: "Le démarrage automatique concerne les services (systemctl enable)." },
      src: 'Cours 3 §5.3 · TP3 ex.14', level: 1 },
    { id: 'c3-q-041', q: 'signaux.sh (trap sur SIGINT et SIGTERM) tourne au premier plan. Tu presses Ctrl+C. Que se passe-t-il ?',
      choices: ["Le script s'arrête", "Le message « SIGINT reçu : je refuse de m arrêter ! » s'affiche et le script continue", 'Le script passe en arrière-plan', 'Le terminal se ferme'],
      answer: 1,
      explain: "trap intercepte SIGINT : au lieu de s'arrêter, le script exécute l'echo puis reprend sa boucle.",
      why: { 0: "C'est le comportement par défaut, remplacé ici par le trap.",
             2: "Passer en arrière-plan se fait avec Ctrl+Z puis bg.",
             3: "Ctrl+C n'agit que sur le processus au premier plan, pas sur le terminal." },
      src: 'TP3 ex.15', level: 2 },
    { id: 'c3-q-042', q: 'Tu envoies kill -9 PID au script signaux.sh. Que se passe-t-il ?',
      choices: ["Le message du trap SIGTERM s'affiche puis le script s'arrête", 'Le script ignore le signal', 'Le script se suspend', 'Le script est tué immédiatement, sans message : SIGKILL ne peut pas être intercepté'],
      answer: 3,
      explain: "trap n'a aucun effet sur SIGKILL (ni sur SIGSTOP) : le noyau tue le processus directement.",
      why: { 0: "Le trap SIGTERM ne réagit qu'à SIGTERM (15), pas à SIGKILL (9).",
             1: "SIGKILL ne peut pas être ignoré.",
             2: "La suspension, c'est SIGSTOP ou SIGTSTP." },
      src: 'TP3 ex.15', level: 2 },
    { id: 'c3-q-043', q: 'Connecté en etudiant (sans sudo), tu tapes renice -n -5 -p 5001 sur ton propre processus yes. Résultat ?',
      choices: ["Ça fonctionne puisque c'est ton processus", 'Permission refusée : seul root peut baisser la valeur nice (augmenter la priorité)', 'La valeur devient 5', 'Le processus est tué'],
      answer: 1,
      explain: "Une valeur négative (priorité plus haute) est réservée à root : renice répond « Permission denied ». Avec sudo, ça passe.",
      why: { 0: "Être propriétaire permet seulement de baisser la priorité (augmenter la valeur nice).",
             2: "renice ne change pas le signe ; la demande est simplement refusée.",
             3: "renice modifie une priorité, il n'envoie aucun signal." },
      src: 'Cours 3 §5.4 · TP3 ex.13', level: 2 },
    { id: 'c3-q-044', q: 'Deux yes tournent sur le même cœur (taskset -c 0), l\'un avec nice 0, l\'autre avec nice 19. Qu\'observe-t-on dans top ?',
      choices: ['Chacun obtient environ 50 % du cœur', 'Celui à nice 19 prend presque tout le CPU', 'Celui à nice 0 prend presque tout le cœur, celui à nice 19 seulement quelques %', 'Celui à nice 19 est suspendu (T)'],
      answer: 2,
      explain: "Le processus le plus prioritaire (nice 0) reçoit l'essentiel du temps processeur ; après un renice à 0, le partage redevient environ 50/50.",
      why: { 0: "50/50 n'arrive que si les deux ont la même valeur nice.",
             1: "C'est l'inverse : 19 est la priorité la plus basse.",
             3: "Une priorité basse ne suspend pas : le processus reste en R, il reçoit juste moins de CPU." },
      src: 'TP3 ex.13', level: 2 },
    { id: 'c3-q-045', q: 'Dans ps aux, que représentent les colonnes VSZ et RSS ?',
      choices: ['VSZ = mémoire virtuelle, RSS = mémoire réellement occupée en RAM (en Ko)', 'VSZ = %CPU, RSS = %MEM', 'VSZ = vitesse du processus, RSS = taille du swap', 'Deux noms pour la même mesure'],
      answer: 0,
      explain: "VSZ = taille de la mémoire virtuelle ; RSS = mémoire physique réellement occupée ; toutes deux en Ko.",
      why: { 1: "%CPU et %MEM sont des colonnes séparées de ps aux.",
             2: "Il n'y a pas de colonne « vitesse » ; VSZ et RSS sont des tailles mémoire.",
             3: "RSS est en général bien plus petite que VSZ (ex. firefox : 912340 vs 190220 Ko)." },
      src: 'Cours 3 §4.2', level: 2 },
    { id: 'c3-q-046', q: 'Pourquoi écrit-on ps aux --sort=-%cpu | head -6 pour voir les 5 processus les plus gourmands ?',
      choices: ['ps ajoute toujours une ligne pour head', "La première ligne est l'en-tête des colonnes", 'head compte à partir de 0', 'Pour inclure ps lui-même dans le résultat'],
      answer: 1,
      explain: "La 1re ligne de ps aux est l'en-tête (USER PID %CPU…) : 6 lignes = en-tête + 5 processus.",
      why: { 0: "ps ne connaît pas head ; c'est juste la ligne d'en-tête qui s'ajoute.",
             2: "head -6 affiche les 6 premières lignes, comptées à partir de 1.",
             3: "ps n'est pas forcément parmi les plus gourmands ; c'est l'en-tête qui compte pour une ligne." },
      src: 'TP3 ex.16', level: 2 },
    { id: 'c3-q-047', q: 'Que signifie le code D dans la colonne STAT ?',
      choices: ['Daemon (démon)', 'Dead : processus terminé', "Sommeil non interruptible : il attend la fin d'une E/S (ex. écriture disque)", 'Mode debug'],
      answer: 2,
      explain: "D = disk sleep : endormi non interruptible, il ne peut pas être interrompu avant la fin de l'opération matérielle.",
      why: { 0: "Un démon se reconnaît à TTY = ?, pas à un code STAT.",
             1: "Un processus terminé non récolté apparaît en Z.",
             3: "Il n'y a pas de code STAT « debug » dans le cours." },
      src: 'Cours 3 §3.3-3.4', level: 2 },
    { id: 'c3-q-048', q: 'Dans ps, le shell bash apparaît avec STAT = Ss. Que cela signifie-t-il ?',
      choices: ['Suspendu deux fois', 'Endormi (il attend une saisie) et chef de session', 'Processus système (s = system)', 'Zombie de session'],
      answer: 1,
      explain: "S = sommeil interruptible (bash attend que tu tapes) ; suffixe s = chef de session.",
      why: { 0: "Suspendu s'écrirait T.",
             2: "Le suffixe s signifie « chef de session », pas « système ».",
             3: "Un zombie s'écrirait Z." },
      src: 'Cours 3 §3.4', level: 2 },
    { id: 'c3-q-049', q: 'Quel est le rôle de exec() ?',
      choices: ["Attendre la fin d'un enfant", 'Créer un nouveau processus avec un nouveau PID', 'Envoyer un signal', "Remplacer le code du processus par celui d'un nouveau programme, en gardant le même PID"],
      answer: 3,
      explain: "exec() remplace le programme exécuté par le processus ; le PID est conservé. Au TP, exec sleep 60 remplace le bash parent du zombie.",
      why: { 0: "C'est le rôle de wait().",
             1: "C'est fork() qui crée un nouveau processus.",
             2: "Les signaux s'envoient avec kill (appel système kill())." },
      src: 'Cours 3 §3.1 · TP3 ex.12', level: 2 },
    { id: 'c3-q-050', q: 'Que fait sudo systemctl disable ssh ?',
      choices: ['Arrête immédiatement le service ssh', "Empêche ssh de démarrer automatiquement au boot, sans l'arrêter maintenant", 'Désinstalle le paquet openssh-server', 'Suspend le démon sshd (état T)'],
      answer: 1,
      explain: "disable agit sur le démarrage automatique ; pour arrêter tout de suite, c'est stop. systemctl is-enabled ssh affiche alors disabled.",
      why: { 0: "C'est le rôle de systemctl stop.",
             2: "La désinstallation passe par apt remove.",
             3: "systemctl ne suspend pas un démon ; ce serait kill -STOP." },
      src: 'TP3 ex.8', level: 2 }
  ],

  exercises: [
    { id: 'c3-x-001',
      prompt: 'Affiche les processus lancés depuis ton terminal courant (photo instantanée, sans option).',
      context: 'Tu es etudiant, dans un terminal bash.',
      answers: ['ps'],
      hint: 'Process Status, sans argument.',
      explain: "ps sans option liste les processus du terminal courant : en général bash et ps lui-même (colonnes PID, TTY, TIME, CMD).",
      mistakes: [
        { re: '^ps\\s+(aux|-ef|-e|-A)', msg: "Cette variante liste TOUS les processus du système, pas seulement ceux de ton terminal." },
        { re: '^(top|htop)', msg: "top / htop affichent en temps réel ; ici on veut la photo instantanée de ps." }
      ],
      src: 'Cours 3 §4.1 · TP3 ex.1', level: 1 },
    { id: 'c3-x-002',
      prompt: 'Affiche le PID du shell dans lequel tu tapes.',
      context: 'Tu es etudiant, dans un terminal bash.',
      answers: ['echo $$'],
      hint: 'Une variable spéciale composée de deux symboles identiques.',
      explain: "echo affiche le contenu de la variable spéciale $$, qui vaut le PID du shell courant.",
      mistakes: [
        { re: '\\$\\?', msg: "$? est le code de retour de la dernière commande, pas un PID." },
        { re: '\\$!', msg: "$! est le PID du dernier processus lancé en arrière-plan, pas celui du shell." },
        { re: '^\\$\\$\\s*$', msg: "Tapé seul, $$ serait exécuté comme une commande : affiche-le avec echo." }
      ],
      src: 'Cours 3 §1.3 · TP3 ex.10', level: 1 },
    { id: 'c3-x-003',
      prompt: "Affiche TOUS les processus du système (y compris ceux des autres utilisateurs et ceux sans terminal), au format BSD détaillé avec les colonnes %CPU et %MEM.",
      answers: ['ps aux'],
      hint: 'Trois lettres BSD, sans tiret : a, u, x.',
      explain: "ps aux : a = processus de tous les utilisateurs, u = format orienté utilisateur (USER, %CPU, %MEM…), x = y compris ceux sans terminal.",
      mistakes: [
        { re: '^ps\\s+-aux', msg: "En syntaxe BSD, pas de tiret : ps aux. Avec un tiret, -aux est interprété à la manière POSIX (et peut chercher un utilisateur « x »)." },
        { re: '^ps\\s+-ef', msg: "ps -ef liste bien tout, mais au format standard (UID, PID, PPID…), sans %CPU ni %MEM." },
        { re: '^ps\\s*$', msg: "ps seul ne montre que les processus de ton terminal." }
      ],
      src: 'Cours 3 §4.1 · TP3 ex.1', level: 1 },
    { id: 'c3-x-004',
      prompt: 'Affiche tous les processus au format standard (System V), qui contient la colonne PPID.',
      answers: ['ps -ef'],
      hint: '-e pour tous, -f pour le format complet.',
      explain: "ps -ef : -e = tous les processus, -f = format complet (UID PID PPID C STIME TTY TIME CMD).",
      mistakes: [
        { re: '^ps\\s+aux', msg: "ps aux n'affiche pas la colonne PPID ; le format standard avec PPID, c'est ps -ef." },
        { re: '^ps\\s+-e\\s*$', msg: "-e seul liste tout, mais sans le format complet : ajoute -f pour avoir le PPID." }
      ],
      src: 'Cours 3 §4.1', level: 1 },
    { id: 'c3-x-005',
      prompt: 'Affiche les processus de ton terminal au format long (avec UID, PPID, PRI, NI…), comme demandé au TP.',
      answers: ['ps -l'],
      hint: 'Une seule lettre minuscule, comme pour ls.',
      explain: "ps -l (long) ajoute notamment les colonnes S (état), UID, PPID, PRI et NI.",
      mistakes: [
        { re: '^ps\\s+-L', msg: "-L (majuscule) affiche les threads ; le format long, c'est -l minuscule." },
        { re: '^ls', msg: "ls -l liste des fichiers ! Pour les processus, c'est ps -l." }
      ],
      src: 'TP3 ex.1', level: 1 },
    { id: 'c3-x-006',
      prompt: 'Affiche la liste des processus dont le propriétaire est le super-utilisateur root.',
      answers: ['ps -u root', 'ps -U root'],
      hint: 'Option de ps qui sélectionne un utilisateur.',
      explain: "ps -u root sélectionne les processus dont l'utilisateur (effectif) est root : ce sont surtout des processus système.",
      mistakes: [
        { re: 'grep\\s+root', msg: "grep root filtre du texte : il attrape aussi toute ligne contenant « root » ailleurs. ps a une option dédiée : -u root." },
        { re: '^ps\\s+-u\\s*$', msg: "Il faut préciser l'utilisateur après -u." }
      ],
      src: 'Cours 3 §2.2 · TP3 ex.1', level: 1 },
    { id: 'c3-x-007',
      prompt: 'Affiche uniquement le processus de PID 1200.',
      context: 'Le bash de ton terminal a le PID 1200.',
      answers: ['ps -p 1200', 'ps --pid 1200', 'ps 1200'],
      hint: '-p comme PID.',
      explain: "ps -p 1200 limite l'affichage au processus de PID 1200 (plusieurs PID : -p 1200,1342).",
      mistakes: [
        { re: '^ps\\s+-u\\s+1200', msg: "-u sélectionne un utilisateur, pas un PID." },
        { re: '^ps\\s+-P', msg: "L'option est en minuscule : -p." },
        { re: '^kill', msg: "Attention : kill envoie un signal ! On veut seulement afficher le processus." }
      ],
      src: 'Cours 3 §4.1', level: 1 },
    { id: 'c3-x-008',
      prompt: 'Affiche directement le PID du démon sshd, avec une seule commande sans pipe.',
      answers: ['pgrep sshd', 'pidof sshd'],
      hint: 'Le « grep » des processus.',
      explain: "pgrep sshd cherche les processus nommés sshd et n'affiche que leur PID (812 dans l'exemple du cours).",
      mistakes: [
        { re: '^pkill', msg: "Attention : pkill ENVOIE un signal (SIGTERM) et arrêterait sshd ! pgrep se contente de chercher." },
        { re: '\\|', msg: "ps … | grep sshd fonctionne, mais la consigne demande une commande sans pipe qui ne renvoie que le PID." }
      ],
      src: 'Cours 3 §4.1 · TP3 ex.6', level: 1 },
    { id: 'c3-x-009',
      prompt: "Affiche les processus en temps réel (rafraîchissement automatique), avec l'outil installé par défaut.",
      answers: ['top'],
      hint: 'Trois lettres ; P trie par CPU, M par mémoire, q quitte.',
      explain: "top rafraîchit la liste toutes les 3 s ; touches P (CPU), M (mémoire), k (tuer), q (quitter).",
      mistakes: [
        { re: '^htop', msg: "htop n'est pas installé par défaut (sudo apt install htop) : l'outil standard est top." },
        { re: '^ps', msg: "ps prend une photo à un instant donné ; il ne se rafraîchit pas." }
      ],
      src: 'Cours 3 §4.3 · TP3 ex.1', level: 1 },
    { id: 'c3-x-010',
      prompt: "Affiche l'arbre complet des processus, avec les PID.",
      answers: ['pstree -p'],
      hint: 'pstree + une option pour les PID.',
      explain: "pstree dessine la hiérarchie parents / enfants depuis systemd(1) ; -p ajoute le PID entre parenthèses.",
      mistakes: [
        { re: '^pstree\\s*$', msg: "Sans -p, pstree n'affiche pas les PID." },
        { re: '^ps\\s+-p', msg: "ps -p sélectionne un PID ; il ne dessine pas d'arbre." }
      ],
      src: 'Cours 3 §4.3 · TP3 ex.10', level: 1 },
    { id: 'c3-x-011',
      prompt: 'Affiche la liste de tous les signaux que l\'on peut envoyer aux processus.',
      answers: ['kill -l', 'kill -L'],
      hint: "L'option « list » de kill.",
      explain: "kill -l liste les signaux avec leur numéro (1) SIGHUP, 2) SIGINT, … 9) SIGKILL, … 15) SIGTERM…).",
      mistakes: [
        { re: '^man', msg: "Le manuel décrit les signaux, mais kill a une option qui en affiche directement la liste." },
        { re: '^kill\\s*$', msg: "kill sans argument affiche juste l'aide : ajoute l'option qui liste (-l)." }
      ],
      src: 'Cours 3 §5.1 · TP3 ex.2', level: 1 },
    { id: 'c3-x-012',
      prompt: 'Lance un ping vers google.com en arrière-plan, pour garder la main sur le terminal.',
      answers: ['ping google.com &'],
      hint: 'Un symbole à la fin de la commande.',
      explain: "Le & final lance ping en arrière-plan : le shell affiche [numéro de job] PID et rend l'invite.",
      mistakes: [
        { re: '^ping\\s+google\\.com\\s*$', msg: "Sans & final, ping reste au premier plan et bloque le terminal." },
        { re: '^\\s*&', msg: "Le & se place à la FIN de la commande." },
        { re: '^bg\\b', msg: "bg relance un job déjà suspendu ; pour lancer directement en arrière-plan, on ajoute & à la fin." }
      ],
      src: 'Cours 3 §2.3 · TP3 ex.1', level: 1 },
    { id: 'c3-x-013',
      prompt: "Affiche la liste des tâches (jobs) de ce terminal, avec leur numéro de job et leur état.",
      context: 'Tu as lancé xclock & puis gedit & dans ce terminal.',
      answers: ['jobs', 'jobs -l'],
      hint: 'Le nom anglais des « tâches ».',
      explain: "jobs affiche [1]- Running xclock & et [2]+ Running gedit & : numéro de job, job courant (+) / précédent (-) et état.",
      mistakes: [
        { re: '^ps', msg: "ps affiche des PID, pas les numéros de job [n] ni l'état Running / Stopped vus par le shell." }
      ],
      src: 'Cours 3 §5.3 · TP3 ex.4', level: 1 },
    { id: 'c3-x-014',
      prompt: 'Ramène le job 1 (vim) au premier plan.',
      context: 'jobs affiche : [1]+ Stopped vim notes.txt. Son PID est 4821.',
      answers: ['fg %1', 'fg 1', '%1', 'fg'],
      hint: 'fg = foreground, suivi de %numéro.',
      explain: "fg %1 ramène le job 1 au premier plan et le relance s'il était suspendu ; vim réapparaît dans le terminal.",
      mistakes: [
        { re: '^bg', msg: "bg relance le job en ARRIÈRE-plan ; pour le ramener au premier plan, c'est fg." },
        { re: '4821', msg: "fg attend un numéro de job (%1), pas un PID." }
      ],
      src: 'Cours 3 §5.3 · TP3 ex.4', level: 1 },
    { id: 'c3-x-015',
      prompt: 'Fais reprendre le job 1 en arrière-plan, avec la commande de gestion des jobs.',
      context: 'Tu as lancé sleep 300 puis pressé Ctrl+Z : [1]+ Stopped sleep 300. Son PID est 5120.',
      answers: ['bg %1', 'bg 1', 'bg', '%1 &'],
      hint: 'bg = background.',
      explain: "bg %1 envoie SIGCONT au job 1 et le laisse en arrière-plan : jobs affiche alors [1]+ Running sleep 300 &.",
      mistakes: [
        { re: '^fg', msg: "fg le ramènerait au premier plan et tu perdrais la main sur le terminal." },
        { re: '5120', msg: "bg attend un numéro de job (%1), pas le PID." },
        { re: '^kill', msg: "kill -CONT relancerait aussi le processus, mais la consigne demande la commande dédiée aux jobs : bg." }
      ],
      src: 'Cours 3 §5.3 · TP3 ex.4', level: 1 },
    { id: 'c3-x-016',
      prompt: "Demande à firefox de s'arrêter proprement (signal par défaut, SIGTERM).",
      context: 'Le processus firefox a le PID 2210 et t\'appartient.',
      answers: ['kill 2210', 'kill -TERM 2210', 'kill -15 2210'],
      hint: 'kill sans option envoie déjà SIGTERM.',
      explain: "kill 2210 envoie SIGTERM (15) : firefox peut fermer proprement ses fichiers avant de s'arrêter.",
      mistakes: [
        { re: 'kill\\s+(-9|-KILL|-SIGKILL|-s\\s+(9|KILL|SIGKILL))\\b', msg: "SIGKILL d'emblée est une mauvaise habitude : arrêt brutal, sans nettoyage. On commence par SIGTERM ; -9 en dernier recours." },
        { re: '%', msg: "%n désigne un numéro de job ; ici tu connais le PID : kill 2210." },
        { re: '^(killall|pkill)', msg: "Ça viserait tous les firefox par leur nom ; la consigne donne un PID précis." }
      ],
      src: 'Cours 3 §5.2 · TP3 ex.3', level: 1 },
    { id: 'c3-x-017',
      prompt: "Force l'arrêt immédiat de firefox.",
      context: 'firefox (PID 2210) est figé : kill 2210 n\'a eu aucun effet.',
      answers: ['kill -9 2210', 'kill -KILL 2210'],
      hint: 'Le signal non interceptable, numéro 9.',
      explain: "kill -9 2210 envoie SIGKILL : le noyau arrête le processus immédiatement, sans qu'il puisse l'intercepter.",
      mistakes: [
        { re: '^kill\\s+2210\\s*$', msg: "C'est ce que tu viens d'essayer (SIGTERM) : il faut le signal non interceptable, SIGKILL." },
        { re: '-(STOP|SIGSTOP|19|TSTP|20)\\b', msg: "Ce signal suspend le processus ; il ne le termine pas." },
        { re: '-(15|TERM|SIGTERM)\\b', msg: "SIGTERM vient d'échouer : il faut SIGKILL (9)." }
      ],
      src: 'Cours 3 §5.2 · TP3 ex.3', level: 1 },
    { id: 'c3-x-018',
      prompt: 'Affiche la valeur de retour de la dernière commande exécutée.',
      context: 'Tu viens de taper ls -z (option invalide).',
      answers: ['echo $?'],
      hint: 'Variable spéciale : dollar + point d\'interrogation.',
      explain: "echo $? affiche le code de retour de ls -z : 2 (non nul = échec). Après une commande réussie, ce serait 0.",
      mistakes: [
        { re: '\\$\\$', msg: "$$ est le PID du shell, pas un code de retour." },
        { re: '\\$!', msg: "$! est le PID du dernier processus lancé en arrière-plan." }
      ],
      src: 'TP3 ex.5', level: 1 },
    { id: 'c3-x-019',
      prompt: "Sur une seule ligne, affiche « Début de l'exercice » avec echo, puis le répertoire courant, puis le contenu détaillé du dossier ; chaque commande doit s'exécuter quoi qu'il arrive.",
      answers: ["echo \"Début de l'exercice\"; pwd; ls -l"],
      hint: "Séparateur inconditionnel : le point-virgule.",
      explain: "Le ; enchaîne les commandes l'une après l'autre sans tenir compte de leur code de retour : echo, puis pwd, puis ls -l.",
      mistakes: [
        { re: '&&', msg: "&& n'exécute la suite que si la précédente réussit ; la consigne veut un enchaînement inconditionnel : ;" },
        { re: '\\|\\|', msg: "|| n'exécute la suite qu'en cas d'échec ; il faut le point-virgule." },
        { re: '\\|', msg: "Un pipe envoie la sortie d'une commande dans la suivante ; ici on veut juste les enchaîner avec ;" }
      ],
      src: 'TP3 ex.5', level: 1 },
    { id: 'c3-x-020',
      prompt: 'Lance la commande yes en arrière-plan, en jetant sa sortie dans /dev/null pour ne pas encombrer le terminal.',
      answers: ['yes > /dev/null &', 'yes >/dev/null &'],
      hint: 'Redirection > vers /dev/null, puis & à la fin.',
      explain: "yes écrit « y » sans fin ; > /dev/null jette cette sortie ; & met le processus en arrière-plan. Il monte à près de 100 % d'un cœur.",
      mistakes: [
        { re: '^yes\\s*&\\s*$', msg: "Sans redirection, yes inonde ton terminal de « y » : ajoute > /dev/null avant le &." },
        { re: '&\\s*>', msg: "Le & doit être tout à la fin, après la redirection." },
        { re: '^yes\\s*>\\s*/dev/null\\s*$', msg: "Il manque le & final : yes tournerait au premier plan et bloquerait le terminal." }
      ],
      src: 'TP3 ex.6', level: 1 },
    { id: 'c3-x-021',
      prompt: 'Mets le processus yes en pause avec le signal de suspension qui ne peut pas être intercepté.',
      context: 'yes > /dev/null tourne en arrière-plan avec le PID 3300.',
      answers: ['kill -STOP 3300', 'kill -19 3300'],
      hint: 'SIGSTOP, numéro 19.',
      explain: "kill -STOP 3300 suspend yes : son état passe à T et sa consommation CPU tombe à 0 dans top.",
      mistakes: [
        { re: '-(TSTP|SIGTSTP|20)\\b', msg: "SIGTSTP (Ctrl+Z) suspend aussi, mais il peut être intercepté ; le signal non interceptable est SIGSTOP (19)." },
        { re: 'kill\\s+(-9|-KILL|-SIGKILL)\\b', msg: "SIGKILL tue le processus ; on veut seulement le mettre en pause." },
        { re: '^kill\\s+3300\\s*$', msg: "Sans option, kill envoie SIGTERM : le processus s'arrêterait." }
      ],
      src: 'Cours 3 §5.2 · TP3 ex.6', level: 2 },
    { id: 'c3-x-022',
      prompt: 'Fais reprendre le processus yes avec la commande kill.',
      context: 'Le processus yes (PID 3300) a été suspendu par kill -STOP depuis un autre terminal ; il est dans l\'état T.',
      answers: ['kill -CONT 3300', 'kill -18 3300'],
      hint: 'SIGCONT, numéro 18.',
      explain: "kill -CONT 3300 envoie SIGCONT : yes repasse en R et reprend sa consommation CPU.",
      mistakes: [
        { re: '^(fg|bg)', msg: "fg / bg ne gèrent que les jobs du terminal où ils ont été lancés ; ici, utilise kill avec le signal de reprise." },
        { re: '-(STOP|SIGSTOP|19)\\b', msg: "SIGSTOP suspend ; pour reprendre, c'est SIGCONT (18)." },
        { re: '^kill\\s+3300\\s*$', msg: "Sans option, kill envoie SIGTERM : le processus ne reprendrait pas, il s'arrêterait (une fois relancé)." }
      ],
      src: 'Cours 3 §5.2 · TP3 ex.4, ex.6', level: 2 },
    { id: 'c3-x-023',
      prompt: 'Depuis ce terminal, envoie à gedit le signal exactement équivalent à Ctrl+Z, pour vérifier l\'expérience du TP.',
      context: 'gedit tourne au premier plan dans un autre terminal, avec le PID 3105.',
      answers: ['kill -TSTP 3105', 'kill -20 3105'],
      hint: 'Terminal SToP, numéro 20.',
      explain: "Ctrl+Z envoie SIGTSTP (20) au processus au premier plan ; kill -TSTP 3105 produit le même effet : gedit est suspendu (T).",
      mistakes: [
        { re: '-(STOP|SIGSTOP|19)\\b', msg: "SIGSTOP suspend aussi, mais Ctrl+Z envoie SIGTSTP (20), la version « clavier » interceptable." },
        { re: '-(INT|SIGINT|2)\\b', msg: "SIGINT (2) correspond à Ctrl+C, qui interrompt le programme." }
      ],
      src: 'Cours 3 §5.1 · TP3 ex.4', level: 2 },
    { id: 'c3-x-024',
      prompt: "Crée le dossier test_dir, entre dedans puis crée le fichier test_file.txt ; chaque étape ne doit s'exécuter que si la précédente a réussi.",
      answers: ['mkdir test_dir && cd test_dir && touch test_file.txt'],
      hint: 'Opérateur « ET logique » entre chaque commande.',
      explain: "&& n'exécute la commande suivante que si la précédente a renvoyé 0 : si mkdir échoue (dossier existant), ni cd ni touch ne s'exécutent.",
      mistakes: [
        { re: ';', msg: "Avec ; chaque commande s'exécute même si la précédente échoue (touch créerait le fichier au mauvais endroit si cd échouait)." },
        { re: '\\|\\|', msg: "|| exécute la suite seulement en cas d'ÉCHEC : il faut &&." }
      ],
      src: 'TP3 ex.5', level: 2 },
    { id: 'c3-x-025',
      prompt: "Essaie d'aller dans le dossier non_existant_dir et, seulement si ça échoue, affiche « Le répertoire n'existe pas. »",
      answers: ["cd non_existant_dir || echo \"Le répertoire n'existe pas.\""],
      hint: 'Opérateur « OU logique ».',
      explain: "|| n'exécute echo que si cd renvoie un code non nul : bash affiche son erreur, puis ton message.",
      mistakes: [
        { re: '&&', msg: "Avec &&, echo ne s'afficherait que si cd RÉUSSIT : c'est l'inverse qu'on veut (||)." },
        { re: ';', msg: "Avec ; le message s'afficherait même si cd réussissait." }
      ],
      src: 'TP3 ex.5', level: 2 },
    { id: 'c3-x-026',
      prompt: 'Arrête TOUS les processus nommés exactement ping, avec la commande qui travaille sur le nom exact du programme.',
      context: 'Deux pings tournent : ping -c 50 google.com & et ping -c 50 yahoo.com &.',
      answers: ['killall ping'],
      hint: '« Tuer tous » ceux qui portent ce nom.',
      explain: "killall ping envoie SIGTERM à tous les processus dont le nom est exactement ping : les deux pings s'arrêtent.",
      mistakes: [
        { re: '^pkill', msg: "pkill marcherait aussi ici, mais la consigne vise killall (nom exact du programme)." },
        { re: '^kill\\s+ping', msg: "kill attend un PID, pas un nom : c'est killall (ou pkill) qui travaille par nom." },
        { re: 'killall\\s+(google|yahoo)', msg: "killall compare le NOM du programme (ping), pas ses arguments." }
      ],
      src: 'Cours 3 §5.2 · TP3 ex.7', level: 2 },
    { id: 'c3-x-027',
      prompt: 'Arrête uniquement le ping qui cible yahoo.com, sans toucher à celui vers google.com.',
      context: 'Deux pings tournent : ping -c 50 google.com & et ping -c 50 yahoo.com &.',
      answers: ['pkill -f yahoo', 'pkill -f yahoo.com'],
      hint: 'pkill avec l\'option qui regarde la ligne de commande complète.',
      explain: "pkill -f cherche le motif dans toute la ligne de commande (« ping -c 50 yahoo.com ») : seul ce ping reçoit SIGTERM.",
      mistakes: [
        { re: '^killall', msg: "killall compare le NOM du programme (ping) : killall yahoo ne trouve rien, killall ping tue les deux." },
        { re: '^pkill\\s+yahoo', msg: "Sans -f, pkill compare seulement le nom du processus (ping), pas ses arguments : ajoute -f." },
        { re: '^pkill\\s+ping', msg: "pkill ping viserait les deux pings ; il faut cibler yahoo dans la ligne de commande avec -f." }
      ],
      src: 'TP3 ex.7', level: 2 },
    { id: 'c3-x-028',
      prompt: "Arrête (SIGTERM) tous les processus sleep appartenant à l'utilisatrice alice, et seulement les siens.",
      context: 'Tu es etudiant, membre du groupe sudo. alice a lancé plusieurs sleep.',
      answers: ['sudo pkill -u alice sleep', 'sudo killall -u alice sleep'],
      hint: 'pkill avec un filtre sur le propriétaire ; les processus d\'alice ne sont pas les tiens.',
      explain: "pkill -u alice sleep vise les processus nommés sleep dont le propriétaire est alice ; sudo est nécessaire car ce ne sont pas tes processus.",
      mistakes: [
        { re: '(killall|pkill)\\s+sleep\\s*$', msg: "Sans -u alice, tu viserais les sleep de TOUS les utilisateurs." },
        { re: '^kill\\s', msg: "kill attend des PID ; pour viser par nom et par utilisateur, utilise pkill -u." }
      ],
      src: 'Cours 3 §5.2', level: 2 },
    { id: 'c3-x-029',
      prompt: 'Lance sleep 600 en arrière-plan de façon qu\'il survive à la fermeture du terminal.',
      answers: ['nohup sleep 600 &'],
      hint: '« no hang up », avant la commande, et & à la fin.',
      explain: "nohup fait ignorer SIGHUP à sleep ; le & le met en arrière-plan. À la fermeture du terminal, il continue (adopté par PID 1 ou systemd --user).",
      mistakes: [
        { re: '^sleep\\s+600\\s*&', msg: "Sans nohup, à la fermeture du terminal le processus reçoit SIGHUP et s'arrête." },
        { re: '^nohup\\s+sleep\\s+600\\s*$', msg: "Il manque le & : sleep resterait au premier plan et tu perdrais la main." },
        { re: '&\\s*nohup|^&', msg: "Ordre : nohup commande &" }
      ],
      src: 'Cours 3 §5.3 · TP3 ex.14', level: 2 },
    { id: 'c3-x-030',
      prompt: 'Lance la sauvegarde « tar czf sauvegarde.tar.gz /home » avec une priorité basse : valeur nice 10.',
      answers: ['nice -n 10 tar czf sauvegarde.tar.gz /home', 'nice -10 tar czf sauvegarde.tar.gz /home'],
      hint: 'nice -n N devant la commande.',
      explain: "nice -n 10 lance tar avec la valeur nice 10 : il cède plus facilement le processeur aux autres processus.",
      mistakes: [
        { re: 'nice\\s+-n\\s*-10', msg: "-10 serait une priorité HAUTE (valeur négative, réservée à root). Priorité basse = valeur positive : -n 10." },
        { re: '^renice', msg: "renice modifie un processus déjà lancé ; pour lancer une commande avec une priorité, c'est nice." },
        { re: '^tar.*nice', msg: "nice se place AVANT la commande : nice -n 10 tar …" }
      ],
      src: 'Cours 3 §5.4', level: 2 },
    { id: 'c3-x-031',
      prompt: 'Baisse la priorité de firefox, déjà lancé, en lui donnant la valeur nice 5.',
      context: 'firefox a le PID 2210 et t\'appartient.',
      answers: ['renice -n 5 -p 2210', 'renice 5 -p 2210', 'renice -n 5 2210', 'renice 5 2210'],
      hint: 're-nice : -n valeur, -p PID.',
      explain: "renice -n 5 -p 2210 fixe la valeur nice du processus 2210 à 5. Augmenter sa valeur nice est permis sans sudo sur ses propres processus.",
      mistakes: [
        { re: '^nice\\s', msg: "nice sert à LANCER une commande ; pour un processus existant, c'est renice." },
        { re: 'firefox', msg: "renice -p attend un PID (2210), pas un nom de programme." },
        { re: '-n\\s*-5', msg: "-5 serait une priorité plus haute (réservé à root) ; on veut 5." }
      ],
      src: 'Cours 3 §5.4', level: 2 },
    { id: 'c3-x-032',
      prompt: 'Augmente la priorité du démon sshd en lui donnant la valeur nice -5.',
      context: 'sshd a le PID 812. Tu es etudiant, membre du groupe sudo.',
      answers: ['sudo renice -n -5 -p 812', 'sudo renice -n -5 812'],
      hint: 'Valeur négative = root uniquement.',
      explain: "sudo renice -n -5 -p 812 : seule une commande lancée en root peut attribuer une valeur nice négative (et sshd appartient à root).",
      mistakes: [
        { re: '^renice', msg: "Une valeur nice négative (priorité plus haute) est réservée à root : préfixe avec sudo." },
        { re: '-n\\s+5\\b', msg: "5 baisserait la priorité ; pour l'augmenter, il faut une valeur négative : -5." },
        { re: 'sshd', msg: "renice -p attend un PID (812), pas un nom." }
      ],
      src: 'Cours 3 §5.4 · TP3 ex.13', level: 2 },
    { id: 'c3-x-033',
      prompt: 'Vérifie la valeur nice de firefox en n\'affichant que les colonnes PID, NI et CMD (dans cet ordre), pour ce seul processus.',
      context: 'firefox a le PID 2210.',
      answers: ['ps -o pid,ni,cmd -p 2210', 'ps -p 2210 -o pid,ni,cmd'],
      hint: 'ps -o colonnes -p PID.',
      explain: "-o pid,ni,cmd choisit les colonnes ; -p 2210 restreint l'affichage à firefox. La colonne NI donne la valeur nice.",
      mistakes: [
        { re: ',\\s+', msg: "Pas d'espace dans la liste de colonnes : pid,ni,cmd." },
        { re: '-o\\s+pid,cmd', msg: "Il manque la colonne ni (valeur nice)." },
        { re: '^ps\\s+-o\\s+\\S+\\s*$', msg: "Il manque -p 2210 pour n'afficher que firefox." }
      ],
      src: 'Cours 3 §5.4', level: 2 },
    { id: 'c3-x-034',
      prompt: "Affiche l'arbre des processus, avec les PID, à partir de ton shell courant uniquement.",
      context: 'Tu viens de taper bash deux fois (shells imbriqués).',
      answers: ['pstree -p $$'],
      hint: 'pstree -p suivi du PID du shell courant (variable spéciale).',
      explain: "pstree -p $$ dessine l'arbre à partir du PID du shell courant : on voit bash(…)───pstree(…).",
      mistakes: [
        { re: '^pstree\\s+-p\\s*$', msg: "Sans argument, pstree part de systemd (PID 1) : ajoute $$ pour partir de ton shell." },
        { re: '\\$!', msg: "$! est le dernier processus lancé en arrière-plan ; ton shell, c'est $$." },
        { re: '^pstree\\s+\\$\\$', msg: "Il manque -p pour afficher les PID." }
      ],
      src: 'TP3 ex.10', level: 2 },
    { id: 'c3-x-035',
      prompt: "Vérifie l'état du service SSH (nom du service sous Debian).",
      answers: ['systemctl status ssh', 'systemctl status ssh.service', 'service ssh status'],
      hint: 'systemctl + action + nom du service.',
      explain: "systemctl status ssh affiche l'état (active / inactive), le PID principal (Main PID) et les dernières lignes de journal. Pas besoin de sudo pour consulter.",
      mistakes: [
        { re: 'sshd', msg: "Sous Debian, le service s'appelle ssh (sshd est le nom du démon, et du service sur d'autres distributions)." },
        { re: 'is-enabled', msg: "is-enabled dit seulement si le démarrage automatique est activé ; l'état complet, c'est status." }
      ],
      src: 'TP3 ex.8', level: 2 },
    { id: 'c3-x-036',
      prompt: 'Redémarre le service ssh (arrêt puis relance en une commande).',
      context: 'Tu es etudiant, membre du groupe sudo.',
      answers: ['sudo systemctl restart ssh'],
      hint: 'Action restart, droits root.',
      explain: "sudo systemctl restart ssh arrête puis relance le démon : le PID principal de sshd change (vérifie avec pgrep sshd).",
      mistakes: [
        { re: '\\bstart\\s+ssh', msg: "start ne fait rien si le service tourne déjà ; pour l'arrêter puis le relancer, c'est restart." },
        { re: '\\bstop\\b', msg: "stop arrête le service sans le relancer." },
        { re: 'sshd', msg: "Sous Debian, le service s'appelle ssh." }
      ],
      src: 'TP3 ex.8', level: 2 },
    { id: 'c3-x-037',
      prompt: 'Réactive le démarrage automatique de ssh au boot puis, seulement si ça a réussi, vérifie qu\'il est bien activé.',
      context: 'Tu es etudiant, membre du groupe sudo ; le service a été désactivé avec disable.',
      answers: ['sudo systemctl enable ssh && systemctl is-enabled ssh'],
      hint: 'enable, puis && et la commande qui répond enabled / disabled.',
      explain: "enable rétablit le démarrage automatique ; && enchaîne seulement en cas de succès ; is-enabled affiche enabled.",
      mistakes: [
        { re: 'status', msg: "status donne l'état complet ; la commande qui répond juste enabled / disabled est is-enabled." },
        { re: ';', msg: "La consigne dit « seulement si ça a réussi » : &&." },
        { re: '\\bstart\\b', msg: "start démarre le service maintenant ; enable règle le démarrage automatique au boot." }
      ],
      src: 'TP3 ex.8', level: 2 },
    { id: 'c3-x-038',
      prompt: 'Affiche le fichier virtuel qui résume l\'état du processus 2210 (Name, State, PPid, Uid…).',
      answers: ['cat /proc/2210/status', 'less /proc/2210/status'],
      hint: '/proc/PID/…',
      explain: "Le noyau expose chaque processus dans /proc/PID ; le fichier status contient son nom, son état, son PID, son PPID, son propriétaire…",
      mistakes: [
        { re: '/proc/status', msg: "Le numéro du processus fait partie du chemin : /proc/2210/status." },
        { re: 'cmdline', msg: "cmdline contient la ligne de commande ; le résumé (état, PPID, propriétaire), c'est status." }
      ],
      src: 'TP3 ex.16', level: 2 },
    { id: 'c3-x-039',
      prompt: 'Crée le dossier sauvegarde puis affiche OK si la création a réussi, Erreur sinon (une seule ligne, sans if).',
      answers: ['mkdir sauvegarde && echo OK || echo Erreur'],
      hint: 'Combine && (succès) puis || (échec).',
      explain: "Si mkdir réussit, && lance echo OK (qui réussit, donc || est ignoré). Si mkdir échoue, && est sauté et || lance echo Erreur.",
      mistakes: [
        { re: '\\|\\|.*&&', msg: "Ordre inversé : avec a || b && c, OK s'afficherait même après l'échec de mkdir. Écris mkdir … && echo OK || echo Erreur." },
        { re: ';', msg: "; ignore le code de retour : il faut && pour le succès et || pour l'échec." }
      ],
      src: 'TP3 ex.5', level: 3 },
    { id: 'c3-x-040',
      prompt: "Affiche les 5 processus les plus gourmands en CPU, avec la ligne d'en-tête, au format ps aux.",
      answers: ['ps aux --sort=-%cpu | head -6', 'ps aux --sort -%cpu | head -6', 'ps aux --sort=-pcpu | head -6'],
      hint: 'Tri décroissant avec --sort=-…, puis head.',
      explain: "--sort=-%cpu trie par %CPU décroissant ; head -6 garde l'en-tête + 5 processus.",
      mistakes: [
        { re: '--sort[=\\s]\\+?%cpu', msg: "Sans le signe -, le tri est croissant : les MOINS gourmands en premier." },
        { re: 'head\\s+(-n\\s*)?-?5\\b', msg: "La 1re ligne est l'en-tête : pour voir 5 processus, il faut head -6." },
        { re: '%mem', msg: "%mem trie par mémoire ; ici on veut le CPU." }
      ],
      src: 'Cours 3 §4.1 · TP3 ex.16', level: 3 },
    { id: 'c3-x-041',
      prompt: 'Écris la ligne du script qui stocke le PID de ce sleep dans la variable PID.',
      context: 'Script process_manager.sh : la ligne précédente est « sleep 100 & ».',
      answers: ['PID=$!'],
      hint: 'Variable spéciale : PID du dernier processus lancé en arrière-plan.',
      explain: "$! vaut le PID du dernier processus lancé avec & ; PID=$! le mémorise pour les kill suivants.",
      mistakes: [
        { re: '\\s=|=\\s', msg: "Pas d'espace autour du = en bash : PID=$!" },
        { re: '\\$\\$', msg: "$$ est le PID du script (le bash) lui-même, pas celui du sleep." },
        { re: '\\$\\?', msg: "$? est un code de retour, pas un PID." }
      ],
      src: 'TP3 ex.9', level: 3 },
    { id: 'c3-x-042',
      prompt: 'Écris la ligne du script qui met ce processus en pause (signal non interceptable), en utilisant la variable.',
      context: 'Dans process_manager.sh, la variable PID contient le PID du sleep.',
      answers: ['kill -STOP $PID', 'kill -19 $PID'],
      hint: 'kill -STOP suivi du contenu de la variable.',
      explain: "kill -STOP $PID suspend le sleep ; la ligne ps -o pid,stat,cmd -p $PID qui suit affiche alors l'état T.",
      mistakes: [
        { re: 'kill\\s+(-\\w+\\s+)?PID', msg: "Il faut le $ pour lire le contenu de la variable : $PID." },
        { re: '-(CONT|SIGCONT|18)\\b', msg: "SIGCONT fait reprendre ; pour mettre en pause, c'est SIGSTOP." },
        { re: '-(TSTP|SIGTSTP|20)\\b', msg: "Le signal de suspension non interceptable est SIGSTOP (19), pas SIGTSTP." }
      ],
      src: 'TP3 ex.9', level: 3 },
    { id: 'c3-x-043',
      prompt: 'Affiche les colonnes PID, STAT, %CPU et CMD (dans cet ordre) pour ces trois processus uniquement.',
      context: 'Tu as lancé sleep 300 & (PID 4001), yes > /dev/null & (PID 4002) et sleep 400 & (PID 4003), puis suspendu 4003.',
      answers: ['ps -o pid,stat,%cpu,cmd -p 4001,4002,4003', 'ps -p 4001,4002,4003 -o pid,stat,%cpu,cmd'],
      hint: 'ps -o colonnes -p liste_de_PID séparés par des virgules.',
      explain: "On obtient 4001 en S (sleep endormi), 4002 en R (yes calcule, ~100 % CPU) et 4003 en T (suspendu).",
      mistakes: [
        { re: '-p\\s+4001\\s+4002', msg: "Avec ps -p, sépare les PID par des virgules : -p 4001,4002,4003." },
        { re: ',\\s+\\w', msg: "Pas d'espace dans les listes séparées par des virgules." },
        { re: 'pid,%cpu,stat', msg: "Respecte l'ordre demandé : pid,stat,%cpu,cmd." }
      ],
      src: 'TP3 ex.11', level: 3 },
    { id: 'c3-x-044',
      prompt: 'Termine proprement (SIGTERM) les trois jobs en une seule commande kill, en les désignant par leur numéro de job.',
      context: 'jobs affiche : [1] Running sleep 300 &, [2]- Running yes > /dev/null &, [3]+ Stopped sleep 400 (PID 4001, 4002, 4003).',
      answers: ['kill %1 %2 %3', 'kill -TERM %1 %2 %3', 'kill -15 %1 %2 %3'],
      hint: 'kill accepte plusieurs %n à la suite.',
      explain: "kill %1 %2 %3 envoie SIGTERM aux trois jobs ; pour le job 3 suspendu, bash envoie aussi SIGCONT, si bien qu'il s'arrête réellement.",
      mistakes: [
        { re: 'kill\\s+(-9|-KILL|-SIGKILL)\\b', msg: "Inutile de commencer par SIGKILL : SIGTERM suffit, -9 reste le dernier recours." },
        { re: '4001', msg: "Avec les PID, le sleep suspendu (T) garderait son SIGTERM en attente jusqu'à sa reprise. La consigne demande les numéros de job (%n) : bash envoie alors aussi SIGCONT au job suspendu." },
        { re: '%1,', msg: "Sépare les jobs par des espaces : %1 %2 %3." }
      ],
      src: 'TP3 ex.11', level: 3 },
    { id: 'c3-x-045',
      prompt: 'Lance yes en arrière-plan, sortie jetée dans /dev/null, épinglé sur le cœur 0 et avec la priorité la plus basse possible.',
      answers: ['taskset -c 0 nice -n 19 yes > /dev/null &', 'nice -n 19 taskset -c 0 yes > /dev/null &'],
      hint: 'taskset -c 0, puis nice -n 19, puis la commande, la redirection et &.',
      explain: "taskset -c 0 limite le processus au cœur 0 ; nice -n 19 lui donne la priorité la plus basse ; > /dev/null jette la sortie ; & le met en arrière-plan.",
      mistakes: [
        { re: 'nice\\s+-n\\s*20\\b', msg: "La valeur nice va de -20 à 19 : la priorité la plus basse est 19." },
        { re: 'nice\\s+-n\\s*-(19|20)\\b', msg: "Une valeur négative donne une priorité HAUTE (et réservée à root) ; la plus basse, c'est 19." },
        { re: 'taskset\\s+0\\b', msg: "Avec un numéro de cœur, il faut -c : taskset -c 0 (sans -c, l'argument serait lu comme un masque)." }
      ],
      src: 'TP3 ex.13', level: 3 },
    { id: 'c3-x-046',
      prompt: 'Remets ce processus à la valeur nice 0.',
      context: 'Le second yes (PID 5002) tourne avec la valeur nice 19. Tu es etudiant, membre du groupe sudo.',
      answers: ['sudo renice -n 0 -p 5002', 'sudo renice -n 0 5002', 'sudo renice 0 -p 5002'],
      hint: 'Passer de 19 à 0, c\'est augmenter la priorité.',
      explain: "Diminuer la valeur nice (de 19 à 0) augmente la priorité : un utilisateur normal ne le peut pas, même sur son propre processus. sudo renice -n 0 -p 5002 le permet.",
      mistakes: [
        { re: '^renice', msg: "Sans sudo : « Permission denied ». Un utilisateur normal peut seulement augmenter la valeur nice, jamais la rediminuer." },
        { re: '^(sudo\\s+)?nice\\s', msg: "nice lance une nouvelle commande ; pour un processus existant : renice." }
      ],
      src: 'TP3 ex.13', level: 3 },
    { id: 'c3-x-047',
      prompt: 'Affiche les colonnes PID, PPID, STAT et CMD des enfants du processus 6000, pour repérer le zombie.',
      context: "Tu as lancé bash -c 'sleep 1 & exec sleep 60' & ; le shell a affiché [1] 6000. Deux secondes se sont écoulées.",
      answers: ['ps -o pid,ppid,stat,cmd --ppid 6000', 'ps --ppid 6000 -o pid,ppid,stat,cmd'],
      hint: 'Option longue de ps qui sélectionne par PID du parent.',
      explain: "--ppid 6000 sélectionne les enfants de 6000 ; on voit 6001 avec STAT Z et CMD [sleep] <defunct>.",
      mistakes: [
        { re: '-p\\s+6000', msg: "-p 6000 afficherait le parent lui-même ; on veut ses ENFANTS : --ppid 6000." },
        { re: '\\s-ppid', msg: "Option longue : deux tirets, --ppid." },
        { re: ',\\s+', msg: "Pas d'espace dans la liste de colonnes." }
      ],
      src: 'TP3 ex.12', level: 3 },
    { id: 'c3-x-048',
      prompt: 'Fais disparaître le zombie sans attendre les 60 secondes, avec un simple SIGTERM bien ciblé.',
      context: 'Le zombie a le PID 6001 (état Z). Son parent, sleep 60 (issu de exec), a le PID 6000 et ne fera jamais de wait().',
      answers: ['kill 6000', 'kill -TERM 6000', 'kill -15 6000'],
      hint: 'On ne peut pas tuer un mort : vise celui qui devrait faire wait().',
      explain: "En terminant le parent 6000, le zombie devient orphelin : il est adopté par PID 1 (ou systemd --user), qui lit son code de sortie et le fait disparaître.",
      mistakes: [
        { re: '6001', msg: "Un zombie est déjà mort : aucun signal (même -9) ne l'affecte. Il faut terminer son parent, 6000." },
        { re: 'kill\\s+(-9|-KILL|-SIGKILL)\\s+6000', msg: "SIGKILL marcherait, mais SIGTERM suffit ici : réserve -9 au dernier recours." }
      ],
      src: 'Cours 3 §2.5 · TP3 ex.12', level: 3 },
    { id: 'c3-x-049',
      prompt: 'Affiche les colonnes PID, PPID et CMD de tous les processus dont le nom de commande est sleep, pour voir qui a adopté l\'orphelin.',
      context: "Tu viens de lancer bash -c 'sleep 300 &' : le shell intermédiaire s'est terminé aussitôt.",
      answers: ['ps -o pid,ppid,cmd -C sleep', 'ps -C sleep -o pid,ppid,cmd'],
      hint: 'Option de ps (majuscule) qui sélectionne par nom de commande.',
      explain: "-C sleep sélectionne les processus nommés sleep ; la colonne PPID montre 1 (systemd) ou le PID de systemd --user : le nouvel adoptant.",
      mistakes: [
        { re: '-c\\s+sleep', msg: "L'option est en majuscule : -C (sélection par nom de commande)." },
        { re: 'grep', msg: "ps … | grep fonctionne, mais la consigne demande l'option de sélection par nom de ps : -C." },
        { re: '^pgrep', msg: "pgrep ne donne que les PID, pas les colonnes PPID et CMD demandées." }
      ],
      src: 'TP3 ex.12', level: 3 },
    { id: 'c3-x-050',
      prompt: 'Écris la ligne qui, à la réception de SIGTERM, affiche bye puis termine le script avec le code 0.',
      context: 'Tu écris le script signaux.sh.',
      answers: ["trap 'echo bye; exit 0' SIGTERM", "trap 'echo bye; exit 0' TERM", "trap 'echo bye; exit 0' 15"],
      hint: "trap 'commandes' SIGNAL",
      explain: "trap associe des commandes à un signal : à la réception de SIGTERM, le script exécute echo bye puis exit 0 (arrêt propre).",
      mistakes: [
        { re: 'KILL|\\s9\\s*$', msg: "SIGKILL ne peut pas être intercepté : un trap dessus n'a aucun effet." },
        { re: '^trap\\s+(SIG)?TERM', msg: "Syntaxe : trap 'commandes' SIGNAL (les commandes d'abord, le signal ensuite)." },
        { re: '\\bINT\\b|SIGINT', msg: "SIGINT correspond à Ctrl+C ; la consigne vise SIGTERM." }
      ],
      src: 'TP3 ex.15', level: 3 }
  ]
});
