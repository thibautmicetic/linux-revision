/* TP pratiques — Chapitre 1 (TP1 : prise en main de l'environnement Linux) */
(function () {
  'use strict';
  const APP = window.APP, mh = APP.mh;
  const H = '/home/etudiant';
  const today = () => { const d = new Date(); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); };
  const M = (m) => APP.registerMission(Object.assign({ chapter: 'c1' }, m));

  M({
    id: 'c1-m1', tp: 'TP1 · ex. 3 à 6', title: 'Premiers pas dans le shell',
    intro: 'Découvre le terminal : qui es-tu, où es-tu, comment lire le manuel et comment se déplacer.',
    steps: [
      { t: 'Affiche ton identifiant de connexion (login).', hint: 'Littéralement « qui suis-je ? » en anglais.', sol: 'whoami', why: '`whoami` affiche le login de l\'utilisateur courant.', check: (m) => m.ran(/^\s*whoami\s*$/, { ok: true }) },
      { t: 'Affiche la liste des personnes connectées avec `who`, puis la version détaillée avec `w`.', hint: 'Deux commandes : `who` puis `w`.', sol: 'who', why: '`w` (what) est plus complète que `who` : elle indique aussi ce que fait chaque utilisateur.', check: (m) => m.ran(/^\s*who\s*$/) && m.ran(/^\s*w\s*$/) },
      { t: 'Ouvre la page de manuel de `who`, fais défiler avec les flèches, puis quitte avec la touche **q**.', hint: '`man` + nom de la commande.', sol: 'man who', why: '`man commande` affiche le manuel complet ; on quitte avec q.', check: (m) => m.ev('man', (d) => d.name === 'who') },
      { t: 'Affiche le répertoire courant (où es-tu ?).', hint: 'print working directory', sol: 'pwd', why: 'À l\'ouverture d\'un terminal, tu es dans ton répertoire personnel /home/etudiant (noté ~).', check: (m) => m.ran(/^\s*pwd\s*$/) },
      { t: 'Déplace-toi dans `/etc` puis liste son contenu.', hint: '`cd /etc` puis `ls`.', sol: 'cd /etc', why: '`cd` change de répertoire, `ls` liste le répertoire courant.', check: (m) => m.ran(/^\s*ls(\s|$)/, { cwd: '/etc' }) },
      { t: 'Remonte d\'un niveau avec `cd ..`, puis reviens dans ton répertoire personnel avec `cd` tout seul.', hint: '`..` = répertoire parent. `cd` sans argument ramène à ~.', sol: 'cd ..', why: '`cd` seul (ou `cd ~`) ramène toujours chez toi. Si tu es perdu : `cd` !', check: (m) => m.ran(/^\s*cd\s+\.\.\/?\s*$/) && m.cwd() === H && m.ran(/^\s*cd\s*(~\/?)?\s*$/) },
      { t: 'Lance `gedit presentation.txt` **sans** `&` : le terminal est bloqué (tu as perdu la main). Suspends gedit avec **Ctrl+Z**.', hint: 'Ctrl+Z envoie le signal SIGTSTP au processus au premier plan.', sol: 'gedit presentation.txt', why: 'Un programme lancé au premier plan occupe le terminal. Ctrl+Z le suspend (état T « Stopped »).', check: (m) => m.ev('stopped', (d) => d.proc.comm === 'gedit') },
      { t: 'Relance gedit en arrière-plan avec `bg` : le terminal reste utilisable. Vérifie avec `jobs`.', hint: '`bg` relance le job suspendu en arrière-plan.', sol: 'bg', why: 'Lancer directement `gedit fichier &` aurait évité de bloquer le terminal.', check: (m) => m.ran(/^\s*bg\b/) && m.ran(/^\s*jobs\b/) && m.procs((p) => p.comm === 'gedit' && p.state === 'S').length > 0 },
      { t: 'Ouvre un **deuxième** gedit directement en arrière-plan (avec `&`) puis tape `whoami` : le terminal répond tout de suite.', hint: 'Ajoute & à la fin de la commande.', sol: 'gedit presentation.txt &', why: 'Le `&` lance le processus en arrière-plan ; le shell affiche `[n° de job] PID`.', check: (m) => m.ran(/^\s*gedit\b.*&\s*$/) && m.procs((p) => p.comm === 'gedit').length >= 2 }
    ],
    outro: 'Tu sais te repérer, lire le manuel et gérer l\'avant-plan / arrière-plan.'
  });

  M({
    id: 'c1-m2', tp: 'TP1 · ex. 2, 7 à 10', title: 'Construire une arborescence',
    intro: 'Crée l\'arborescence du TP, vérifie-la et manipule chemins absolus et relatifs.',
    steps: [
      { t: 'Crée le répertoire `Test` dans ton home, puis le fichier `Test/presentation.txt` contenant une phrase de présentation.', hint: '`mkdir Test` puis `echo "Nom : ..." > Test/presentation.txt` (ou nano).', sol: 'mkdir Test && echo "Nom : Dupont" > Test/presentation.txt', why: '`>` crée le fichier (ou écrase son contenu).', check: (m) => m.isFile('~/Test/presentation.txt') && m.content('~/Test/presentation.txt').trim().length > 0 },
      { t: 'Reproduis l\'arborescence : `~/Cours/SE/prise_de_notes.txt`, `~/Cours/BD` et `~/Perso`.', hint: '`mkdir -p` crée les parents ; `touch` crée un fichier vide.', sol: 'mkdir -p Cours/SE Cours/BD Perso && touch Cours/SE/prise_de_notes.txt', why: '`mkdir -p` crée toute la chaîne de répertoires sans erreur s\'ils existent déjà.', check: (m) => m.isFile('~/Cours/SE/prise_de_notes.txt') && m.isDir('~/Cours/BD') && m.isDir('~/Perso') },
      { t: 'Vérifie toute l\'arborescence d\'un coup depuis ton home.', hint: 'Option récursive de ls (R majuscule).', sol: 'ls -R', why: '`ls -R` liste aussi le contenu de tous les sous-répertoires (récursif).', check: (m) => m.ran(/^\s*ls\s+(-\S*\s+)*-\w*R/) },
      { t: 'Affiche aussi les fichiers **cachés** de ton répertoire personnel.', hint: 'Les fichiers cachés commencent par un point.', sol: 'ls -a', why: '`ls -a` montre les fichiers cachés (.bashrc, .profile…) et les entrées . et ..', check: (m) => m.ran(/^\s*ls\s+(.*\s)?-\w*a/) },
      { t: 'Affiche `presentation.txt` avec son chemin **absolu**.', hint: 'Un chemin absolu commence par /.', sol: 'cat /home/etudiant/Test/presentation.txt', why: 'Le chemin absolu part de la racine / et marche quel que soit le répertoire courant.', check: (m) => m.ran(/^\s*cat\s+\/home\/etudiant\/Test\/presentation\.txt\s*$/) },
      { t: 'Affiche-le maintenant avec un chemin **relatif**.', hint: 'Depuis ~ : `Test/presentation.txt`.', sol: 'cat Test/presentation.txt', why: 'Un chemin relatif part du répertoire courant (. = ici, .. = parent).', check: (m) => m.ran(/^\s*cat\s+(?![\/~])\S*presentation\.txt\s*$/, { ok: true }) },
      { t: 'Change le chemin de `presentation.txt` en `~/.plan` (n\'oublie pas le point).', hint: '`mv source destination` déplace/renomme.', sol: 'mv Test/presentation.txt ~/.plan', why: '`mv` attribue un nouveau chemin : l\'ancien n\'existe plus. Le point rend le fichier caché.', check: (m) => m.isFile('~/.plan') && !m.exists('~/Test/presentation.txt') }
    ]
  });

  M({
    id: 'c1-m3', tp: 'TP1 · ex. 11 à 14', title: 'Copier et supprimer des répertoires',
    intro: 'L\'arborescence `~/Cours/SE1/Notes_tp.txt`, `~/Cours/BD`, `~/Perso` et `~/Test` est déjà prête.',
    setup: (w) => { const A = w.vmA; mh.file(A, '~/Cours/SE1/Notes_tp.txt', 'Notes du TP\n'); mh.dir(A, '~/Cours/BD'); mh.dir(A, '~/Perso'); mh.dir(A, '~/Test'); },
    steps: [
      { t: 'Copie le répertoire `Cours` dans `Test` pour obtenir `~/Test/Cours/SE1/Notes_tp.txt`.', hint: 'Par défaut cp ne copie que des fichiers : il faut l\'option récursive.', sol: 'cp -r Cours Test', why: '`cp -r` copie un répertoire et tout son contenu. Sans -r : « -r non spécifié ; omission du répertoire ».', check: (m) => m.isFile('~/Test/Cours/SE1/Notes_tp.txt') && m.isFile('~/Cours/SE1/Notes_tp.txt') },
      { t: 'Essaie de supprimer `Test` avec `rmdir`. Observe le message d\'erreur.', hint: '`rmdir Test`', sol: 'rmdir Test', why: '`rmdir` ne supprime que les répertoires VIDES.', check: (m) => m.ran(/^\s*rmdir\s+(.*\s)?~?\/?(home\/etudiant\/)?Test\/?\s*$/, { fail: true }) },
      { t: 'Supprime la copie `Test/Cours` avec `rm` et l\'option qui descend dans les sous-répertoires.', hint: 'Option récursive de rm.', sol: 'rm -r Test/Cours', why: '`rm -r` efface récursivement. Attention : pas de corbeille sous Linux !', check: (m) => !m.exists('~/Test/Cours') && m.isFile('~/Cours/SE1/Notes_tp.txt') },
      { t: '`Test` est maintenant vide : supprime-le avec `rmdir`.', hint: 'Même commande qu\'à l\'étape 2.', sol: 'rmdir Test', why: 'Pour utiliser rmdir, il faut d\'abord vider le répertoire.', check: (m) => !m.exists('~/Test') },
      { t: 'Crée un fichier `jetable`, puis supprime-le avec l\'option de `rm` qui **demande confirmation** (réponds o ou y).', hint: 'i comme interactive.', sol: 'touch jetable && rm -i jetable', why: '`rm -i` demande confirmation avant chaque suppression : utile pour éviter les catastrophes.', check: (m) => m.ran(/^\s*rm\s+(.*\s)?-\w*i\w*\b/) && !m.exists('~/jetable') && m.ran(/jetable/) }
    ]
  });

  M({
    id: 'c1-m4', tp: 'TP1 · ex. 15-16 + §6', title: 'Jokers, historique et compilation',
    intro: 'Un fichier `exercice1.c` t\'attend dans ton répertoire personnel.',
    setup: (w) => mh.file(w.vmA, '~/exercice1.c', '#include <stdio.h>\n\nint main(void)\n{\n    printf("Bonjour ESEO !\\n");\n    return 0;\n}\n'),
    steps: [
      { t: 'Liste les fichiers de `/usr/bin` dont le nom commence par **k** et contient **exactement 8 caractères**.', hint: '`?` remplace exactement un caractère : k + 7 points d\'interrogation.', sol: 'ls /usr/bin/k???????', why: '`?` = un caractère quelconque ; `*` = n\'importe quelle suite (même vide).', check: (m) => m.ran(/^\s*ls\s+(-\S+\s+)*\/usr\/bin\/k\?{7}\s*$/) },
      { t: 'Liste les bibliothèques (extension `.so`) de `/usr/lib`.', hint: 'Joker `*` devant l\'extension.', sol: 'ls /usr/lib/*.so*', why: 'Le shell remplace `*.so*` par la liste des fichiers correspondants avant d\'exécuter ls.', check: (m) => m.ran(/^\s*ls\s+(-\S+\s+)*\/usr\/lib\/\*\.so\*?\s*$/) },
      { t: 'Affiche l\'historique numéroté de tes commandes.', hint: 'Une commande de 7 lettres.', sol: 'history', why: '`history` affiche les commandes précédentes avec leur numéro. Les flèches ↑/↓ les rappellent aussi.', check: (m) => m.ran(/^\s*history\b/) },
      { t: 'Ré-exécute une commande de l\'historique avec `!n` (n = son numéro).', hint: 'Exemple : `!1`', sol: '!1', why: '`!n` rappelle la commande n°n ; `!!` rappelle la dernière.', check: (m) => m.ev('histexp') },
      { t: 'Compile `exercice1.c` pour produire l\'exécutable `exercice1`.', hint: 'gcc source -o nom_executable', sol: 'gcc exercice1.c -o exercice1', why: '`-o` donne le nom du fichier exécutable généré (sinon : a.out).', check: (m) => { const n = m.node('~/exercice1'); return !!n && !!n.compiled; } },
      { t: 'Exécute ton programme.', hint: 'Il faut préciser le chemin : `./`', sol: './exercice1', why: 'Le répertoire courant n\'est pas dans le PATH : on lance un programme local avec `./nom`.', check: (m) => m.ran(/^\s*\.\/exercice1\s*$/, { ok: true }) }
    ]
  });

  M({
    id: 'c1-m5', tp: 'TP1 · ex. 17 et 28', title: 'Archiver et sauvegarder avec tar',
    intro: 'Un répertoire `~/Cours` (avec SE et BD) est déjà présent.',
    setup: (w) => { mh.file(w.vmA, '~/Cours/SE/prise_de_notes.txt', 'Processus, signaux, permissions\n'); mh.file(w.vmA, '~/Cours/BD/sql.txt', 'SELECT * FROM etudiants;\n'); },
    steps: [
      { t: 'Crée quatre fichiers : `fic1` contenant « Ceci », `fic2` « est », `fic3` « une », `fic4` « archive ».', hint: '`echo Ceci > fic1` … ou nano.', sol: 'echo Ceci > fic1; echo est > fic2; echo une > fic3; echo archive > fic4', check: (m) => /Ceci/.test(m.content('~/fic1') || '') && /est/.test(m.content('~/fic2') || '') && /une/.test(m.content('~/fic3') || '') && /archive/.test(m.content('~/fic4') || '') },
      { t: 'Archive ces quatre fichiers dans `test.tar`.', hint: 'c = create, v = verbose, f = fichier d\'archive.', sol: 'tar -cvf test.tar fic1 fic2 fic3 fic4', why: '`tar -cvf archive.tar fichiers…` : c crée, v affiche, f indique le nom de l\'archive (juste après).', check: (m) => { const n = m.node('~/test.tar'); return !!n && !!n.archive && ['fic1', 'fic2', 'fic3', 'fic4'].every((f) => n.archive.some((e) => e.p === f)); } },
      { t: 'Regarde le contenu brut de l\'archive avec `cat` : que constates-tu ?', hint: '`cat test.tar`', sol: 'cat test.tar', why: 'Une archive tar contient les fichiers bout à bout avec des en-têtes (nom, droits, propriétaire…).', check: (m) => m.ran(/^\s*cat\s+test\.tar\s*$/) },
      { t: 'Liste le contenu de l\'archive **sans l\'extraire**.', hint: 't = list.', sol: 'tar -tf test.tar', why: '`tar -tf` liste le contenu d\'une archive sans l\'extraire.', check: (m) => m.ran(/^\s*tar\s+(-?\w*t\w*f|-?\w*f\w*t\w*|--list)\b.*test\.tar/) || m.ran(/^\s*tar\s+-\w*t\w*\s+-?f?\s*test\.tar/) },
      { t: 'Crée `~/Sauvegardes` puis une archive **compressée** de `Cours` nommée avec la date du jour, ex. `cours_' + 'AAAA-MM-JJ.tar.gz`.', hint: '`date +%F` donne AAAA-MM-JJ ; `$(commande)` insère son résultat ; `-z` compresse avec gzip.', sol: 'mkdir ~/Sauvegardes && tar -czf ~/Sauvegardes/cours_$(date +%F).tar.gz Cours', why: '`$(date +%F)` est remplacé par la date avant l\'exécution de tar. `-z` = gzip (.tar.gz).', check: (m) => { const n = m.node('~/Sauvegardes/cours_' + today() + '.tar.gz'); return !!n && !!n.archive && n.gz; } },
      { t: 'Extrais cette archive dans `~/Test` (option `-C`), puis compare les deux arborescences avec `diff -r`.', hint: '`mkdir ~/Test && tar -xzf … -C ~/Test` puis `diff -r ~/Cours ~/Test/Cours`.', sol: 'mkdir -p ~/Test && tar -xzf ~/Sauvegardes/cours_$(date +%F).tar.gz -C ~/Test', why: '`-C rep` extrait dans rep. `diff -r` n\'affiche rien si les arborescences sont identiques.', check: (m) => m.isFile('~/Test/Cours/SE/prise_de_notes.txt') && m.ran(/^\s*diff\s+-\w*r/) }
    ]
  });

  M({
    id: 'c1-m6', tp: 'TP1 · ex. 18 à 21', title: 'Alias et fichier ~/.bashrc',
    intro: 'Crée tes propres raccourcis de commandes, puis rends-les permanents.',
    steps: [
      { t: 'Crée une commande `la` qui liste tous les fichiers, y compris les cachés.', hint: 'alias nom=\'commande\' (sans espace autour du =).', sol: "alias la='ls -a'", why: 'Pas d\'espace autour du =, et des guillemets si la commande contient des espaces.', check: (m) => m.term.tabs.some((t) => t.sh.stack.some((f) => /^ls\b.*-\w*[aA]/.test(f.aliases.la || ''))) },
      { t: 'Utilise ton alias `la`.', sol: 'la', check: (m) => m.ran(/^\s*la(\s|$)/, { ok: true }) },
      { t: 'Change `rm` pour qu\'il demande **toujours** confirmation.', hint: 'Un alias peut porter le nom d\'une commande existante.', sol: "alias rm='rm -i'", why: 'On utilise souvent les alias pour ajouter systématiquement des options.', check: (m) => m.term.tabs.some((t) => t.sh.stack.some((f) => /^rm\b.*-\w*i/.test(f.aliases.rm || ''))) },
      { t: 'Ouvre un **nouveau terminal** (bouton + en haut) et tape `alias` : tes alias y sont-ils ?', hint: 'Le bouton + ouvre « Terminal 2 ».', sol: 'alias', why: 'Non ! Un alias ne vaut que pour le shell où il a été défini.', check: (m) => m.term.tabs.length >= 2 && m.log.some((l) => /^\s*alias\s*$/.test(l.line) && l.tty !== 'pts/0') },
      { t: 'Ajoute tes alias `la` et `rm` à la fin de `~/.bashrc` (avec nano ou `echo "…" >> ~/.bashrc`).', hint: "echo \"alias la='ls -a'\" >> ~/.bashrc — attention à >> (et pas >) !", sol: "echo \"alias la='ls -a'\" >> ~/.bashrc", why: '`~/.bashrc` est lu à l\'ouverture de chaque terminal. Avec `>` tu aurais écrasé tout le fichier !', check: (m) => { const c = m.content('~/.bashrc') || ''; return /alias\s+la=/.test(c) && /alias\s+rm=/.test(c); } },
      { t: 'Ouvre encore un nouveau terminal et vérifie avec `alias` que `la` et `rm` sont bien définis.', sol: 'alias', why: 'Les changements de ~/.bashrc ne s\'appliquent qu\'aux NOUVEAUX shells (ou après `source ~/.bashrc`).', check: (m) => m.term.tabs.filter((t) => t.sh.stack[0].aliases.la && t.sh.stack[0].aliases.rm).length >= 1 && m.term.tabs.length >= 2 && m.log.filter((l) => /^\s*alias\s*$/.test(l.line)).length >= 2 }
    ]
  });

  M({
    id: 'c1-m7', tp: 'TP1 · ex. 22-23', title: 'Filtres, redirections et tubes',
    intro: 'Le fichier `/etc/services` liste les services réseau et leurs ports. Le répertoire `~/Test` existe.',
    setup: (w) => mh.dir(w.vmA, '~/Test'),
    steps: [
      { t: 'Affiche les 10 premières lignes de `/etc/services`, puis les 5 dernières.', hint: '`head` et `tail -n 5`.', sol: 'head /etc/services', why: 'head/tail affichent 10 lignes par défaut ; `-n N` change ce nombre.', check: (m) => m.ran(/^\s*head\s+(-n\s*10\s+)?\/etc\/services/) && m.ran(/^\s*tail\s+(-n\s*5|-5)\s+\/etc\/services/) },
      { t: 'Combien de lignes contient ce fichier ?', hint: 'wc compte… avec l\'option des lignes.', sol: 'wc -l /etc/services', check: (m) => m.ran(/wc\s+-l\s+\/etc\/services|cat\s+\/etc\/services\s*\|\s*wc\s+-l/) },
      { t: 'Affiche uniquement les lignes qui contiennent `ssh`. Sur quel port fonctionne ce service ?', hint: 'grep motif fichier', sol: 'grep ssh /etc/services', why: 'SSH écoute sur le port 22/tcp.', check: (m) => m.ran(/grep\s+(-\S+\s+)*ssh\s+\/etc\/services|\/etc\/services\s*\|\s*grep\s+(-\S+\s+)*ssh/) },
      { t: 'Recherche `SSH` en ignorant la casse ET en affichant le numéro de chaque ligne.', hint: 'Deux options de grep : i et n.', sol: 'grep -in SSH /etc/services', why: '`-i` ignore majuscules/minuscules, `-n` numérote les lignes trouvées.', check: (m) => m.ran(/grep\s+(-\w*i\w*n|-\w*n\w*i|-\w*i\w*\s+-\w*n|-\w*n\w*\s+-\w*i)\w*\s+/) },
      { t: 'Enregistre la liste **détaillée** du contenu de `/etc` dans `~/Test/liste_etc.txt`.', hint: '`>` redirige la sortie vers un fichier.', sol: 'ls -l /etc > ~/Test/liste_etc.txt', check: (m) => /passwd/.test(m.content('~/Test/liste_etc.txt') || '') && /^total/m.test(m.content('~/Test/liste_etc.txt') || '') },
      { t: 'Ajoute la date du jour **à la fin** de ce fichier, sans effacer son contenu. Vérifie avec `tail`.', hint: '`>>` ajoute à la fin.', sol: 'date >> ~/Test/liste_etc.txt', why: '`>` écrase, `>>` ajoute à la fin.', check: (m) => { const c = m.content('~/Test/liste_etc.txt') || ''; return /passwd/.test(c) && c.includes(String(new Date().getFullYear())) && m.ran(/^\s*date\b.*>>/); } },
      { t: 'Sans fichier intermédiaire, compte le nombre d\'éléments présents dans `/etc`.', hint: 'Un tube | envoie la sortie de ls à wc.', sol: 'ls /etc | wc -l', why: 'Le tube relie la sortie d\'une commande à l\'entrée de la suivante.', check: (m) => m.ran(/^\s*ls\s+(-\S+\s+)*\/etc\/?\s*\|\s*wc\s+-l\s*$/) },
      { t: 'En une seule ligne, compte les lignes de `/etc/services` qui contiennent `tcp`.', hint: 'grep … | wc -l (ou grep -c).', sol: 'grep tcp /etc/services | wc -l', check: (m) => m.ran(/grep\s+(-c\s+)?tcp\s+\/etc\/services(\s*\|\s*wc\s+-l)?|grep\s+-c\s+tcp|cat\s+\/etc\/services\s*\|\s*grep\s+tcp\s*\|\s*wc\s+-l/) && m.ran(/tcp.*(wc\s+-l|-c)|-c\s+tcp/) }
    ]
  });

  M({
    id: 'c1-m8', tp: 'TP1 · ex. 24, 25, 27', title: 'find, apt et espace disque',
    intro: 'Quelques fichiers .txt sont déjà dans ton home. Tu as les droits sudo.',
    setup: (w) => { mh.file(w.vmA, '~/notes.txt', 'a\n'); mh.file(w.vmA, '~/Cours/SE/prise_de_notes.txt', 'b\n'); mh.dir(w.vmA, '~/Cours/BD'); },
    steps: [
      { t: 'Depuis ton home, retrouve tous les fichiers dont le nom se termine par `.txt`.', hint: 'find rep -name "motif" (motif entre guillemets).', sol: 'find ~ -name "*.txt"', why: 'Les guillemets empêchent le shell de remplacer le joker avant find.', check: (m) => m.ran(/^\s*find\s+(~|\/home\/etudiant|\.)\/?\s+-i?name\s+["']?\*\.txt["']?/) },
      { t: 'Affiche uniquement les **répertoires** de ton arborescence `Cours`.', hint: 'Option -type d.', sol: 'find ~/Cours -type d', check: (m) => m.ran(/^\s*find\s+\S*Cours\/?\s+-type\s+d/) },
      { t: 'Cherche dans `/etc` les fichiers en `.conf` en **masquant les messages d\'erreur**.', hint: 'Redirige la sortie d\'erreur (2) vers /dev/null.', sol: 'find /etc -name "*.conf" 2>/dev/null', why: '`2>/dev/null` jette les erreurs (Permission non accordée) dans le « trou noir ».', check: (m) => m.ran(/find\s+\/etc\/?\s+.*-name\s+["']?\*\.conf["']?.*2>\s*\/dev\/null/) },
      { t: 'Mets à jour la liste des paquets disponibles.', hint: 'Il faut les droits root.', sol: 'sudo apt update', why: '`apt update` télécharge la liste des paquets ; il ne met rien à jour lui-même.', check: (m) => m.ran(/^\s*sudo\s+apt(-get)?\s+update\b/, { ok: true }) },
      { t: 'Affiche la description du paquet `tree` (version, dépendances).', sol: 'apt show tree', check: (m) => m.ran(/apt\s+show\s+tree/, { ok: true }) },
      { t: 'Installe `tree`, puis affiche ton arborescence avec.', sol: 'sudo apt install tree', check: (m) => m.installed('tree') && m.ran(/^\s*tree\b/, { ok: true }) },
      { t: 'Liste les fichiers installés par le paquet `tree`. Où est l\'exécutable ?', hint: 'dpkg -L', sol: 'dpkg -L tree', why: 'L\'exécutable est dans /usr/bin.', check: (m) => m.ran(/dpkg\s+-L\s+tree/, { ok: true }) },
      { t: 'Désinstalle `tree` **en supprimant aussi ses fichiers de configuration**.', hint: 'remove garde la configuration, … ne la garde pas.', sol: 'sudo apt purge tree', why: '`apt remove` garde les fichiers de configuration ; `apt purge` les supprime aussi.', check: (m) => !m.installed('tree') && m.ran(/apt(-get)?\s+purge\s+(-y\s+)?tree/) },
      { t: 'Affiche l\'espace disque des partitions en format lisible, puis la taille de chaque élément de ton home.', hint: '`df -h` puis `du -sh ~/*`', sol: 'df -h', why: '`df` = espace des partitions ; `du` = espace occupé par des fichiers.', check: (m) => m.ran(/^\s*df\s+-\w*h/) && m.ran(/^\s*du\s+-\w*s\w*/) }
    ]
  });
})();
