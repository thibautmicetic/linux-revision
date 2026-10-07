/* TP pratiques — Chapitre 2 (TP2 : utilisateurs, groupes et permissions) */
(function () {
  'use strict';
  const APP = window.APP, mh = APP.mh;
  const M = (m) => APP.registerMission(Object.assign({ chapter: 'c2' }, m));
  const uperm = (m, p) => (m.perms(p) || '---------').slice(0, 3);

  M({
    id: 'c2-m1', tp: 'TP2 · ex. 1-2', title: 'Qui suis-je ? Lire les droits',
    intro: 'Identifie tes groupes puis apprends à lire la sortie de `ls -l`.',
    setup: (w) => { mh.dir(w.vmA, '~/test'); mh.file(w.vmA, '~/test/essai', 'une phrase\n'); },
    steps: [
      { t: 'Affiche ton UID, ton groupe principal (GID) et tous tes groupes.', sol: 'id', why: '`id` donne uid, gid (groupe principal = groupe des fichiers que tu crées) et groupes secondaires.', check: (m) => m.ran(/^\s*id\s*$/) },
      { t: 'Affiche seulement les noms de tes groupes.', sol: 'groups', check: (m) => m.ran(/^\s*groups\s*$/) },
      { t: 'Affiche les droits, propriétaire et groupe des éléments de ton home.', sol: 'ls -l', why: '10 caractères : type (- fichier, d répertoire, l lien) puis rwx pour u, g, o.', check: (m) => m.ran(/^\s*ls\s+(-\w*l\w*)(\s|$)/) },
      { t: 'Affiche les droits du **répertoire** `test` lui-même (et pas son contenu).', hint: 'Option -d de ls.', sol: 'ls -ld test', why: 'Sans -d, ls -l test afficherait le contenu du répertoire.', check: (m) => m.ran(/^\s*ls\s+(-\w*l\w*d\w*|-\w*d\w*l\w*|-l\s+-d|-d\s+-l)\s+\S*test\/?\s*$/) }
    ]
  });

  M({
    id: 'c2-m2', tp: 'TP2 · ex. 3', title: 'Les droits d\'un fichier',
    intro: 'Expérimente r, w et x sur un fichier, puis transforme-le en script exécutable.',
    steps: [
      { t: 'Crée un répertoire `test` et, dedans, un fichier `essai` contenant une phrase.', hint: '`mkdir test` puis `echo "une phrase" > test/essai`.', sol: 'mkdir test && echo "une phrase" > test/essai', check: (m) => m.isFile('~/test/essai') && (m.content('~/test/essai') || '').trim().length > 0 },
      { t: 'Retire-**toi** (propriétaire) les droits de lecture et d\'écriture sur `essai`.', hint: 'chmod u-…', sol: 'chmod u-rw test/essai', why: 'u = propriétaire (user), - = retirer.', check: (m) => uperm(m, '~/test/essai').slice(0, 2) === '--' },
      { t: 'Essaie d\'afficher `essai`, puis d\'y écrire une autre phrase : les deux sont refusés.', sol: 'cat test/essai', check: (m) => m.ran(/^\s*cat\s+\S*essai/, { fail: true }) && m.ran(/>\s*\S*essai/, { fail: true }) },
      { t: 'Rétablis le droit d\'écriture, puis remplace le contenu par la ligne `echo "Ceci est un essai"`.', hint: "echo 'echo \"Ceci est un essai\"' > test/essai", sol: 'chmod u+w test/essai && echo \'echo "Ceci est un essai"\' > test/essai', check: (m) => uperm(m, '~/test/essai')[1] === 'w' && /echo\s+.*Ceci est un essai/.test(m.content('~/test/essai') || '') },
      { t: 'Ajoute-toi le droit d\'exécution et lance `./essai` depuis le répertoire `test`. Quel est le problème ?', hint: '`chmod u+x test/essai`, `cd test`, `./essai`', sol: 'chmod u+x test/essai', why: 'Un script est LU par bash : sans le droit r, impossible de l\'exécuter (Permission non accordée).', check: (m) => uperm(m, '~/test/essai')[2] === 'x' && m.ran(/(^|\s)(\.\/essai|\S*test\/essai)\s*$/, { fail: true }) },
      { t: 'Rétablis la lecture et relance `./essai` : ça marche !', sol: 'chmod u+r essai', why: 'Un script a besoin de r ET x. Avec `bash essai`, r suffit (c\'est bash qui est exécuté).', check: (m) => m.ran(/(^|\s)(\.\/essai|\S*test\/essai)\s*$/, { ok: true }) }
    ]
  });

  M({
    id: 'c2-m3', tp: 'TP2 · ex. 4', title: 'Les droits des répertoires',
    intro: 'Le répertoire `~/test` contient `essai`. Découvre ce que r, w et x signifient pour un répertoire.',
    setup: (w) => { mh.dir(w.vmA, '~/test'); mh.file(w.vmA, '~/test/essai', 'echo "Ceci est un essai"\n', 0o744); },
    steps: [
      { t: 'Retire-toi le droit **r** sur `test`. Essaie `ls test`, puis `cat test/essai`.', sol: 'chmod u-r test', why: 'Sans r on ne peut pas LISTER le répertoire, mais on accède à un fichier dont on connaît le nom (grâce à x).', check: (m) => m.ran(/^\s*ls\s+(-\S+\s+)*\S*test\/?\s*$/, { fail: true }) && m.ran(/^\s*cat\s+\S*test\/essai/, { ok: true }) },
      { t: 'Rétablis r. Retire maintenant **w** sur `test` et essaie de supprimer `test/essai`.', sol: 'chmod u+r,u-w test', why: 'Supprimer un fichier = modifier le répertoire : il faut w sur le RÉPERTOIRE.', check: (m) => uperm(m, '~/test')[0] === 'r' && m.ran(/^\s*rm\s+(-\S+\s+)*\S*test\/essai/, { fail: true }) },
      { t: 'Rétablis w sur `test`. Crée `test/protege`, retire-lui w, puis supprime-le (réponds o).', hint: 'rm demande « supprimer fichier protégé en écriture ? »', sol: 'chmod u+w test && touch test/protege && chmod a-w test/protege && rm test/protege', why: 'Avec w sur le répertoire, on peut supprimer un fichier même protégé en écriture.', check: (m) => m.ran(/protege/) && !m.exists('~/test/protege') && uperm(m, '~/test')[1] === 'w' },
      { t: 'Depuis ton home, retire **x** sur `test`. Essaie `cd test` et `ls -l test`.', sol: 'chmod u-x test', why: 'x sur un répertoire = le TRAVERSER : sans x, pas de cd ni d\'accès aux fichiers (ls -l affiche des ?).', check: (m) => m.ran(/^\s*cd\s+\S*test\/?\s*$/, { fail: true }) && m.ran(/^\s*ls\s+-\w*l\w*\s+\S*test/) },
      { t: 'Rétablis x sur `test` (tu peux utiliser le chemin `~/test`).', sol: 'chmod u+x ~/test', check: (m) => uperm(m, '~/test') === 'rwx' }
    ]
  });

  M({
    id: 'c2-m4', tp: 'TP2 · ex. 5', title: 'Choisir son umask',
    intro: 'Le masque umask indique les droits RETIRÉS à la création (base 666 pour un fichier, 777 pour un répertoire).',
    steps: [
      { t: 'Affiche ton umask actuel (en octal, puis en symbolique).', sol: 'umask', check: (m) => m.ran(/^\s*umask\s*$/) && m.ran(/^\s*umask\s+-S\s*$/) },
      { t: 'Définis un umask **très restrictif** (personne d\'autre que toi : ni lecture, ni écriture, ni traversée), puis crée le fichier `f1` et le répertoire `d1`.', hint: 'On retire tout au groupe et aux autres : 077.', sol: 'umask 077 && touch f1 && mkdir d1', why: '666 − 077 → 600 (rw-------) ; 777 − 077 → 700 (rwx------).', check: (m) => m.mode('~/f1') === '600' && m.mode('~/d1') === '700' },
      { t: 'Umask **permissif** : tout le monde lit et traverse, toi seul écris. Crée `f2` et `d2`.', sol: 'umask 022 && touch f2 && mkdir d2', why: '022 → fichiers 644, répertoires 755 (réglage standard).', check: (m) => m.mode('~/f2') === '644' && m.mode('~/d2') === '755' },
      { t: 'Umask **équilibré** : accès complet pour toi, lecture/traversée pour le groupe, rien pour les autres. Crée `f3` et `d3`.', sol: 'umask 027 && touch f3 && mkdir d3', why: '027 → fichiers 640 (rw-r-----), répertoires 750 (rwxr-x---).', check: (m) => m.mode('~/f3') === '640' && m.mode('~/d3') === '750' },
      { t: 'Rétablis ton umask d\'origine (022).', sol: 'umask 022', why: 'Un umask modifié ne vaut que pour le terminal courant ; pour le rendre permanent : ~/.bashrc.', check: (m) => m.umask() === 0o022 && m.ran(/^\s*umask\s+0?022\s*$/) }
    ]
  });

  M({
    id: 'c2-m5', tp: 'TP2 · ex. 6 + cours §3', title: 'chmod en pratique : octal et symbolique',
    intro: 'Des fichiers sont prêts dans `~/droits`. Donne à chacun exactement les droits demandés (octal ou symbolique, au choix).',
    setup: (w) => { const A = w.vmA; mh.dir(A, '~/droits'); mh.file(A, '~/droits/script.sh', '#!/bin/bash\necho ok\n', 0o644); mh.file(A, '~/droits/notes.txt', 'notes\n', 0o600); mh.file(A, '~/droits/cle_ssh', 'secret\n', 0o644); mh.dir(A, '~/droits/partage', 0o777); mh.file(A, '~/droits/rapport.txt', 'rapport\n', 0o640); mh.file(A, '~/droits/fic', '', 0o711); },
    steps: [
      { t: '`script.sh` : **rwxr-x---** (le groupe peut lire et exécuter).', sol: 'chmod 750 droits/script.sh', why: 'rwx = 7, r-x = 5, --- = 0 → 750.', check: (m) => m.mode('~/droits/script.sh') === '750' },
      { t: '`notes.txt` : fichier standard **rw-r--r--**.', sol: 'chmod 644 droits/notes.txt', why: '644 : lisible par tous, modifiable par le propriétaire seulement.', check: (m) => m.mode('~/droits/notes.txt') === '644' },
      { t: '`cle_ssh` : fichier **privé** (seul le propriétaire lit/écrit).', sol: 'chmod 600 droits/cle_ssh', why: '600 = rw------- : clés SSH, mots de passe.', check: (m) => m.mode('~/droits/cle_ssh') === '600' },
      { t: '`partage` (répertoire en 777 !) : partagé en lecture avec le groupe uniquement → **rwxr-x---**.', sol: 'chmod 750 droits/partage', why: 'Jamais de 777 : n\'importe qui pourrait tout modifier ou supprimer.', check: (m) => m.mode('~/droits/partage') === '750' },
      { t: '`rapport.txt` (actuellement rw-r-----) : **ajoute** l\'écriture au groupe sans toucher au reste.', hint: 'Notation symbolique : g+w', sol: 'chmod g+w droits/rapport.txt', why: '`chmod g+w` modifie un seul droit ; `chmod 660` fixerait tous les droits d\'un coup.', check: (m) => m.mode('~/droits/rapport.txt') === '660' },
      { t: '`fic` (droits initiaux 711) : applique `chmod 653 fic`, puis retire r au propriétaire, ajoute w au groupe et retire r aux autres. Quels droits obtiens-tu ?', hint: '653 = rw-r-x-wx ; puis u-r,g+w,o-r', sol: 'chmod 653 droits/fic && chmod u-r,g+w,o-r droits/fic', why: 'Résultat : -w-rwx-wx = 273 (ex. 6 du TP : une seule commande `chmod 273 fic` suffisait).', check: (m) => m.mode('~/droits/fic') === '273' }
    ]
  });

  M({
    id: 'c2-m6', tp: 'TP2 · ex. 7', title: 'Changer le propriétaire : chown',
    intro: 'Le répertoire `~/test` et le fichier `~/test/essai` t\'appartiennent. Tu as les droits sudo.',
    setup: (w) => { mh.dir(w.vmA, '~/test'); mh.file(w.vmA, '~/test/essai', 'une phrase\n'); },
    steps: [
      { t: 'Crée un utilisateur de test nommé `toto` (choisis un mot de passe, puis Entrée pour les autres questions).', sol: 'sudo adduser toto', why: '`adduser` crée le compte, son groupe et son répertoire personnel /home/toto.', check: (m) => !!m.user('toto') && m.isDir('/home/toto') },
      { t: 'Donne le répertoire `test` à `toto`, puis vérifie avec `ls -ld test`.', sol: 'sudo chown toto test', why: 'Seul root peut changer le propriétaire (sinon on pourrait « donner » ses fichiers).', check: (m) => m.owner('~/test') === 'toto' },
      { t: 'Essaie de créer un fichier dans `test` : que remarques-tu ?', sol: 'touch test/nouveau', why: 'Tu n\'es plus propriétaire : tu relèves des droits « autres » (r-x), donc pas de w.', check: (m) => m.ran(/^\s*touch\s+\S*test\/\S+/, { fail: true }) },
      { t: 'Fixe les droits de `test/essai` à **rw-------** (en octal), puis donne-le à `toto`.', hint: 'chmod d\'abord (tant que tu es propriétaire !), puis sudo chown.', sol: 'chmod 600 test/essai && sudo chown toto test/essai', check: (m) => m.mode('~/test/essai') === '600' && m.owner('~/test/essai') === 'toto' },
      { t: 'Essaie de lire `test/essai`, puis d\'en modifier les droits avec chmod.', sol: 'cat test/essai', why: 'Le propriétaire toto a rw, toi (« autres ») rien. Seul le propriétaire (ou root) peut faire chmod.', check: (m) => m.ran(/^\s*cat\s+\S*essai/, { fail: true }) && m.ran(/^\s*chmod\s+\S+\s+\S*essai/, { fail: true }) },
      { t: 'Redeviens propriétaire de `test` **et de tout son contenu**, en une commande récursive.', sol: 'sudo chown -R etudiant test', why: 'Toujours restaurer les propriétaires après des tests, sinon on perd l\'accès à ses propres fichiers.', check: (m) => m.owner('~/test') === 'etudiant' && m.owner('~/test/essai') === 'etudiant' }
    ]
  });

  M({
    id: 'c2-m7', tp: 'TP2 · ex. 8', title: 'Travailler en groupe',
    intro: 'L\'utilisateur `toto` existe déjà. Le fichier `~/test/essai` t\'appartient.',
    setup: (w) => { const A = w.vmA; A.addUser('toto', { pw: 'toto' }); mh.dir(A, '~/test'); mh.file(A, '~/test/essai', 'une phrase\n'); },
    steps: [
      { t: 'Crée un groupe `projet` et ajoutes-y `toto`. Vérifie avec `getent group projet`.', sol: 'sudo groupadd projet && sudo usermod -aG projet toto', why: 'Sans -a, `usermod -G` REMPLACE tous les groupes secondaires de toto !', check: (m) => m.inGroup('toto', 'projet') && m.ran(/getent\s+group\s+projet/) },
      { t: 'En **une seule commande**, donne `test/essai` à l\'utilisateur `toto` ET au groupe `projet`.', hint: 'chown utilisateur:groupe fichier', sol: 'sudo chown toto:projet test/essai', check: (m) => m.owner('~/test/essai') === 'toto' && m.group('~/test/essai') === 'projet' },
      { t: 'Fixe ses droits à **rw-rw----**.', hint: 'Tu n\'es plus propriétaire : il faut sudo.', sol: 'sudo chmod 660 test/essai', check: (m) => m.mode('~/test/essai') === '660' },
      { t: 'Essaie d\'afficher `essai` : refusé. Pourquoi ?', sol: 'cat test/essai', why: 'Tu n\'es ni le propriétaire (toto) ni membre du groupe projet : ce sont les droits « autres » (---) qui s\'appliquent.', check: (m) => m.ran(/^\s*cat\s+\S*essai/, { fail: true }) },
      { t: 'Ajoute-toi au groupe `projet`, puis ouvre un shell qui en tient compte avec `newgrp projet`. Vérifie avec `id`.', sol: 'sudo usermod -aG projet etudiant', why: 'Un nouveau groupe n\'est pris en compte qu\'à la reconnexion… ou dans un shell ouvert par newgrp.', check: (m) => m.inGroup('etudiant', 'projet') && m.ev('newgrp') && m.ran(/^\s*id\s*$/) },
      { t: 'Modifie maintenant `essai` (ex. `echo modif >> test/essai`) : ça marche !', sol: 'echo modif >> test/essai', why: 'Tu es membre de projet : les droits du groupe (rw-) s\'appliquent.', check: (m) => /modif|\n.+\n/.test(m.content('~/test/essai') || '') && m.ran(/>>?\s*\S*essai/, { ok: true }) },
      { t: 'Avec `chgrp` (sans sudo), donne le répertoire `test` au groupe `projet` et accorde l\'écriture au groupe.', sol: 'chgrp projet test && chmod g+w test', why: 'Le propriétaire peut faire chgrp vers un groupe dont il est membre. Désormais, tout membre de projet peut créer des fichiers dans test.', check: (m) => m.group('~/test') === 'projet' && (m.perms('~/test') || '')[4] === 'w' },
      { t: 'Quitte le shell ouvert par newgrp avec `exit`.', sol: 'exit', check: (m) => m.ran(/^\s*exit\s*$/) && !m.term.tabs.some((t) => t.sh.stack.some((f) => f.kind === 'newgrp')) }
    ]
  });

  M({
    id: 'c2-m8', tp: 'TP2 · ex. 10', title: 'Un vrai script exécutable',
    intro: 'Écris un script avec un shebang, puis donne-lui les bons droits.',
    steps: [
      { t: 'Avec nano, crée `bonjour.sh` contenant :\n`#!/bin/bash`\n`echo "Bonjour $USER, nous sommes le $(date +%d/%m/%Y)"`\n(Ctrl+O pour enregistrer, Ctrl+X pour quitter)', sol: 'nano bonjour.sh', check: (m) => /^#!\/bin\/bash/.test(m.content('~/bonjour.sh') || '') && /echo/.test(m.content('~/bonjour.sh') || '') },
      { t: 'Lance-le avec `bash bonjour.sh`, puis avec `./bonjour.sh`. Pourquoi la 2e méthode échoue-t-elle ?', sol: 'bash bonjour.sh', why: 'Avec `bash fichier`, c\'est bash qui est exécuté : le droit r suffit. `./fichier` exige le droit x.', check: (m) => m.ran(/^\s*bash\s+\S*bonjour\.sh/, { ok: true }) && m.ran(/^\s*\.\/bonjour\.sh/, { fail: true }) },
      { t: 'Rends le script exécutable **par toi seul**, puis lance `./bonjour.sh`.', sol: 'chmod u+x bonjour.sh', why: 'La 1re ligne `#!/bin/bash` (shebang) indique quel interpréteur utiliser.', check: (m) => (m.perms('~/bonjour.sh') || '')[2] === 'x' && m.ran(/^\s*\.\/bonjour\.sh/, { ok: true }) },
      { t: 'Donne-lui les droits pour que **tout le monde puisse l\'exécuter** mais **toi seul le modifier**.', sol: 'chmod 755 bonjour.sh', why: 'rwxr-xr-x = 755 (r est nécessaire pour exécuter un script).', check: (m) => m.mode('~/bonjour.sh') === '755' }
    ]
  });

  M({
    id: 'c2-m9', tp: 'TP2 · ex. 11-12', title: 'Fichiers sensibles, droits spéciaux et audit',
    intro: 'Explore /etc/passwd, /etc/shadow, le SUID de passwd et le sticky bit de /tmp, puis audite ton home. Un fichier trop ouvert s\'y cache.',
    setup: (w) => { mh.file(w.vmA, '~/Documents/budget.txt', 'confidentiel\n', 0o666); },
    steps: [
      { t: 'Affiche les droits de `/etc/passwd` et `/etc/shadow`, puis essaie de lire `/etc/shadow`.', sol: 'ls -l /etc/passwd /etc/shadow', why: '/etc/passwd (644) est lisible par tous et ne contient pas les mots de passe ; /etc/shadow (640, root:shadow) contient les empreintes.', check: (m) => m.ran(/ls\s+-\w*l.*\/etc\/(passwd|shadow)/) && m.ran(/^\s*(cat|less|head|more)\s+\/etc\/shadow/, { fail: true }) },
      { t: 'Affiche les droits de `/usr/bin/passwd`. Quelle lettre inhabituelle apparaît ?', sol: 'ls -l /usr/bin/passwd', why: 'Le **s** (SUID) : passwd s\'exécute avec les droits de son propriétaire root, et peut donc écrire dans /etc/shadow.', check: (m) => m.ran(/ls\s+-\w*l\w*\s+\/usr\/bin\/passwd/) },
      { t: 'Affiche les droits du répertoire `/tmp` lui-même. Que signifie le **t** final ?', sol: 'ls -ld /tmp', why: 'Sticky bit : dans /tmp, chacun ne peut supprimer que SES propres fichiers.', check: (m) => m.ran(/ls\s+(-\w*l\w*d|-\w*d\w*l|-l\s+-d|-d\s+-l)\w*\s+\/tmp\/?\s*$/) },
      { t: 'Recherche dans ton home les fichiers **modifiables par tout le monde**.', hint: 'find ~ -type f -perm -o=w', sol: 'find ~ -type f -perm -o=w', check: (m) => m.ran(/find\s+(~|\/home\/etudiant)\S*\s+.*-perm\s+(-o=w|-o\+w|-002|-0002|\/o=w)/) },
      { t: 'Corrige les droits du fichier trouvé pour que les autres ne puissent plus l\'écrire.', sol: 'chmod o-w ~/Documents/budget.txt', check: (m) => !/w/.test((m.perms('~/Documents/budget.txt') || 'w').slice(6)) },
      { t: 'Liste les programmes SUID de `/usr/bin` en masquant les erreurs.', sol: 'find /usr/bin -perm -4000 2>/dev/null', check: (m) => m.ran(/find\s+\/usr\/bin\/?\s+.*-perm\s+(-4000|-u=s|\/4000|-u\+s)/) },
      { t: 'Vérifie qu\'aucun fichier de ton home n\'appartient à un autre utilisateur.', sol: 'find ~ ! -user $USER', check: (m) => m.ran(/find\s+(~|\/home\/etudiant)\S*\s+(!|-not)\s+-user\s+(\$USER|etudiant)/) }
    ]
  });

  M({
    id: 'c2-m10', tp: 'TP2 · ex. 13', title: 'Défi : un répertoire d\'équipe',
    intro: '**alice** et **bob** doivent partager `/srv/equipe` : chacun lit et modifie les fichiers de l\'autre, personne d\'autre n\'y accède. Mots de passe conseillés : alice / bob.',
    setup: (w) => { w.vmA.addUser('toto', { pw: 'toto' }); },
    steps: [
      { t: 'Crée les utilisateurs `alice` et `bob`, et un groupe `equipe` dont ils sont membres.', sol: 'sudo adduser alice', check: (m) => !!m.user('alice') && !!m.user('bob') && m.inGroup('alice', 'equipe') && m.inGroup('bob', 'equipe') },
      { t: 'Crée `/srv/equipe`, donne-le à root et au groupe `equipe`, avec un accès complet pour le groupe et rien pour les autres.', sol: 'sudo mkdir /srv/equipe && sudo chown root:equipe /srv/equipe && sudo chmod 770 /srv/equipe', check: (m) => m.isDir('/srv/equipe') && m.owner('/srv/equipe') === 'root' && m.group('/srv/equipe') === 'equipe' && /^7[67]0$/.test(m.mode('/srv/equipe').slice(-3)) },
      { t: 'Connecte-toi en tant qu\'alice (`su - alice`) et crée `/srv/equipe/rapport.txt`. Regarde son groupe avec `ls -l`, puis `exit`.', sol: 'su - alice', why: 'Le fichier appartient au groupe PRINCIPAL d\'alice (alice), pas à equipe : bob ne pourra pas le modifier.', check: (m) => m.exists('/srv/equipe/rapport.txt') && m.owner('/srv/equipe/rapport.txt') === 'alice' },
      { t: 'Applique le droit **setgid** : `sudo chmod 2770 /srv/equipe`, puis observe `ls -ld /srv/equipe`.', sol: 'sudo chmod 2770 /srv/equipe', why: 'Le s à la place du x du groupe : les nouveaux fichiers héritent du groupe du répertoire (equipe).', check: (m) => m.mode('/srv/equipe') === '2770' },
      { t: 'En tant qu\'alice, avec `umask 002`, crée `/srv/equipe/bilan.txt`. Puis en tant que bob, ajoute une ligne à ce fichier.', hint: 'su - alice ; umask 002 ; touch /srv/equipe/bilan.txt ; exit ; su - bob ; echo ok >> /srv/equipe/bilan.txt', sol: 'su - alice', why: 'Grâce au setgid (groupe equipe) et à l\'umask 002 (rw pour le groupe), bob peut modifier le fichier d\'alice.', check: (m) => m.group('/srv/equipe/bilan.txt') === 'equipe' && m.ran(/>>?\s*\/srv\/equipe\/bilan\.txt/, { ok: true, user: 'bob' }) },
      { t: 'Vérifie que `toto` ne peut pas entrer dans `/srv/equipe`.', hint: 'su - toto (mot de passe : toto) puis cd /srv/equipe', sol: 'su - toto', check: (m) => m.ran(/^\s*(cd|ls)\s+(-\S+\s+)*\/srv\/equipe/, { fail: true, user: 'toto' }) },
      { t: 'Fais le ménage : supprime `/srv/equipe`, les utilisateurs alice, bob et toto, puis le groupe equipe.', sol: 'sudo rm -r /srv/equipe', check: (m) => !m.exists('/srv/equipe') && !m.user('alice') && !m.user('bob') && !m.user('toto') && !m.group_('equipe') }
    ]
  });
})();
