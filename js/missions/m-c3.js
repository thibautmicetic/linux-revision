/* TP pratiques — Chapitre 3 (TP3 : manipulation de processus) */
(function () {
  'use strict';
  const APP = window.APP, mh = APP.mh;
  const M = (m) => APP.registerMission(Object.assign({ chapter: 'c3' }, m));
  const sig = (n) => (e) => e.sig === n;

  M({
    id: 'c3-m1', tp: 'TP3 · ex. 1', title: 'Observer les processus : ps et top',
    intro: 'Liste et surveille les processus de la machine.',
    steps: [
      { t: 'Liste les processus de ton terminal.', sol: 'ps', why: 'Sans argument, ps n\'affiche que les processus du terminal courant (ton bash et ps lui-même).', check: (m) => m.ran(/^\s*ps\s*$/) },
      { t: 'Affiche-les avec plus de détails (option -l) : repère PID, PPID, UID, PRI, NI et TTY.', sol: 'ps -l', why: 'Le PPID de ps est le PID de ton bash : le shell est le parent des commandes que tu tapes.', check: (m) => m.ran(/^\s*ps\s+-\w*l\w*\s*$/) },
      { t: 'Lance `ping google.com` **en arrière-plan**, puis repère le processus ping avec `ps`.', sol: 'ping google.com &', why: 'Le ping en arrière-plan continue d\'afficher ses réponses : c\'est normal !', check: (m) => { const i = m.log.findIndex((l) => /^\s*ping\b.*&\s*$/.test(l.line)); return i >= 0 && m.log.slice(i + 1).some((l) => /^\s*ps\b/.test(l.line)); } },
      { t: 'Arrête ce ping (avec `kill %1`, ou `fg` puis Ctrl+C).', sol: 'kill %1', check: (m) => m.cmdline(/^ping/).length === 0 && m.ran(/^\s*ping\b.*&/) },
      { t: 'Affiche **tous** les processus du système (y compris ceux des autres utilisateurs et sans terminal).', sol: 'ps aux', why: '`ps aux` (format BSD) ou `ps -ef` (format standard, avec le PPID). TTY « ? » = pas de terminal (démons).', check: (m) => m.ran(/^\s*ps\s+(aux|-aux|-ef|-e|-A|ax|-eF|-ely|-el)\b/) },
      { t: 'Affiche uniquement les processus de **root**.', sol: 'ps -u root', check: (m) => m.ran(/^\s*ps\s+(-\w*\s+)*-u\s*root\b|^\s*ps\s+-U\s*root/) },
      { t: 'Lance `top`, trie par CPU (P) puis par mémoire (M), puis quitte avec q.', sol: 'top', why: 'top rafraîchit l\'affichage en continu (toutes les 3 s) ; ps est une photo à un instant donné.', check: (m) => m.ran(/^\s*h?top\s*$/) }
    ]
  });

  M({
    id: 'c3-m2', tp: 'TP3 · ex. 2', title: 'Envoyer des signaux avec kill',
    intro: 'Le paquet x11-apps (xclock) est déjà installé. Une horloge graphique va te servir de cobaye.',
    setup: (w) => mh.install(w.vmA, 'x11-apps'),
    steps: [
      { t: 'Affiche la liste de tous les signaux. Quels sont les numéros de SIGTERM, SIGKILL, SIGSTOP et SIGCONT ?', sol: 'kill -l', why: 'SIGTERM 15, SIGKILL 9, SIGSTOP 19, SIGCONT 18.', check: (m) => m.ran(/^\s*kill\s+-l\s*$/) },
      { t: 'Lance `xclock` en arrière-plan.', sol: 'xclock &', check: (m) => m.cmdline(/^xclock/).length > 0 },
      { t: 'Suspends l\'horloge avec le signal SIGSTOP (elle se fige).', hint: 'kill -STOP PID (le PID est affiché au lancement, ou `pgrep xclock`).', sol: 'kill -STOP $(pgrep xclock)', why: 'SIGSTOP suspend le processus (état T) ; il ne peut pas être intercepté.', check: (m) => m.ev('stopped', (d) => d.proc.comm === 'xclock') },
      { t: 'Fais-la repartir avec SIGCONT.', sol: 'kill -CONT $(pgrep xclock)', check: (m) => m.ev('continued', (d) => d.proc.comm === 'xclock') },
      { t: 'Termine-la proprement avec SIGTERM.', sol: 'kill $(pgrep xclock)', why: '`kill PID` envoie SIGTERM (15) par défaut : arrêt propre.', check: (m) => m.ev('signal', (d) => d.proc.comm === 'xclock' && d.sig === 15) && m.cmdline(/^xclock/).length === 0 },
      { t: 'Ouvre un 2e terminal (+). Depuis le terminal 1, envoie SIGTERM au bash du terminal 2 (son PID : `echo $$` dans le terminal 2). Que se passe-t-il ?', sol: 'kill 1350', why: 'Rien ! Un bash interactif ignore SIGTERM.', check: (m) => m.term.tabs.length >= 2 && m.ev('signal', (d) => d.proc.isShell && d.proc.interactive && d.sig === 15) },
      { t: 'Recommence avec SIGKILL (-9) sur ce même bash.', sol: 'kill -9 1350', why: 'SIGKILL ne peut être ni ignoré ni intercepté : le shell meurt et le terminal 2 se ferme. À utiliser en dernier recours.', check: (m) => m.ev('signal', (d) => d.proc.isShell && d.sig === 9) },
      { t: 'Tente de suspendre (SIGSTOP) le démon `sshd` (PID 812, appartenant à root).', sol: 'kill -STOP 812', why: '« Opération non permise » : on ne peut signaler que SES propres processus (sauf root via sudo).', check: (m) => m.ran(/^\s*kill\s+(-STOP|-SIGSTOP|-19|-s\s+STOP)\s+812\s*$/, { fail: true }) }
    ]
  });

  M({
    id: 'c3-m3', tp: 'TP3 · ex. 3 et 4', title: 'SIGTERM vs SIGKILL, avant-plan et jobs',
    intro: 'Utilise deux terminaux : un processus tourne dans le 1er, tu agis depuis le 2e.',
    setup: (w) => mh.install(w.vmA, 'x11-apps'),
    steps: [
      { t: 'Dans le terminal 1, lance `sleep 100` (au premier plan). Ouvre un 2e terminal (+), trouve le PID de sleep et termine-le **en douceur** (SIGTERM).', hint: '`ps -u etudiant` ou `pgrep sleep`, puis `kill -SIGTERM PID`.', sol: 'kill -SIGTERM $(pgrep sleep)', why: 'SIGTERM demande l\'arrêt propre : le programme peut fermer ses fichiers avant de s\'arrêter.', check: (m) => m.ev('signal', (d) => d.proc.comm === 'sleep' && d.sig === 15) },
      { t: 'Relance `sleep 100` dans le terminal 1 et tue-le depuis le terminal 2 avec **SIGKILL**.', sol: 'kill -9 $(pgrep sleep)', why: 'SIGKILL (9) tue immédiatement, sans laisser le processus réagir : à garder en dernier recours.', check: (m) => m.ev('signal', (d) => d.proc.comm === 'sleep' && d.sig === 9) },
      { t: 'Dans un terminal, lance `xclock &` puis `gedit` **sans &** : tu perds la main. Suspends gedit avec **Ctrl+Z**.', sol: 'gedit', why: 'Ctrl+Z envoie SIGTSTP (20) au processus de premier plan.', check: (m) => m.ev('stopped', (d) => d.proc.comm === 'gedit') && m.cmdline(/^xclock/).length > 0 },
      { t: 'Affiche les tâches avec `jobs` et compare avec `ps`. Que signifient + et - ?', sol: 'jobs', why: 'Le n° de job est différent du PID. + = job courant, - = job précédent.', check: (m) => m.ran(/^\s*jobs\b/) },
      { t: 'Relance gedit en arrière-plan avec `bg`, puis ramène xclock au premier plan avec `fg %n`.', sol: 'bg', check: (m) => m.ran(/^\s*bg\b/) && m.ran(/^\s*fg\s+%?\d+/) },
      { t: 'Termine xclock (au premier plan) avec **Ctrl+C**.', why: 'Ctrl+C envoie SIGINT (2) : interruption.', check: (m) => m.ev('signal', (d) => d.proc.comm === 'xclock' && d.sig === 2) },
      { t: 'Suspends gedit avec `kill -STOP`, puis relance-le avec `kill`… et le bon signal.', sol: 'kill -CONT $(pgrep gedit)', why: '`kill -CONT PID` (SIGCONT, 18) relance un processus suspendu.', check: (m) => m.ev('continued', (d) => d.proc.comm === 'gedit') && m.ran(/^\s*kill\s+(-CONT|-SIGCONT|-18|-s\s+CONT)\b/) }
    ]
  });

  M({
    id: 'c3-m4', tp: 'TP3 · ex. 5', title: 'Enchaîner des commandes : ; && ||',
    intro: '`;` enchaîne quoi qu\'il arrive, `&&` seulement si la précédente réussit, `||` seulement si elle échoue. `$?` contient le code de retour.',
    steps: [
      { t: 'Tape en une ligne : `echo "Début de l\'exercice"; pwd; ls -l`', sol: 'echo "Début"; pwd; ls -l', check: (m) => m.ran(/echo.*;\s*pwd\s*;\s*ls\s+-l/) },
      { t: 'Insère une commande incorrecte (`ls -z`) au milieu : les suivantes s\'exécutent-elles ?', sol: 'echo début; ls -z; pwd', why: 'Oui : `;` exécute chaque commande quel que soit le résultat de la précédente.', check: (m) => m.ran(/;\s*ls\s+-z\s*;|ls\s+-z\s*;/) },
      { t: 'Tape : `mkdir test_dir && cd test_dir && touch test_file.txt`', sol: 'mkdir test_dir && cd test_dir && touch test_file.txt', check: (m) => m.isFile('~/test_dir/test_file.txt') },
      { t: 'Reviens dans ton home et relance exactement la même ligne : que se passe-t-il ? Affiche ensuite le code de retour avec `echo $?`.', sol: 'cd ~', why: 'mkdir échoue (le répertoire existe) : avec &&, la suite n\'est PAS exécutée. $? vaut 1 (≠ 0 = échec).', check: (m) => m.ran(/^\s*mkdir\s+test_dir\s*&&/, { fail: true }) && m.ran(/^\s*echo\s+\$\?\s*$/) },
      { t: 'Tape : `cd non_existant_dir || echo "Le répertoire n\'existe pas."`', sol: 'cd non_existant_dir || echo "Le répertoire n\'existe pas."', why: '`||` n\'exécute la suite que si la commande précédente ÉCHOUE.', check: (m) => m.ran(/cd\s+\S+\s*\|\|\s*echo/) },
      { t: 'Combine les trois : `mkdir my_folder; cd my_folder && touch my_file.txt || echo "Échec de la création du fichier."` — puis relance-la depuis ton home quand my_folder existe déjà.', sol: 'mkdir my_folder; cd my_folder && touch my_file.txt || echo "Échec"', why: 'mkdir échoue la 2e fois mais `;` continue : cd réussit, touch aussi → pas de message d\'échec.', check: (m) => m.ranCount(/mkdir\s+my_folder\s*;\s*cd\s+my_folder\s*&&\s*touch\s+my_file\.txt\s*\|\|/) >= 2 }
    ]
  });

  M({
    id: 'c3-m5', tp: 'TP3 · ex. 6 et 7', title: 'Pause, reprise, killall et pkill',
    intro: '`yes > /dev/null` consomme 100 % d\'un processeur : parfait pour observer.',
    steps: [
      { t: 'Lance `yes > /dev/null &` et trouve son PID.', sol: 'yes > /dev/null &', why: '`> /dev/null` jette la sortie pour ne pas encombrer le terminal.', check: (m) => m.cmdline(/^yes/).length > 0 && m.ran(/^\s*(pgrep\s+yes|ps\b.*(\|\s*grep\s+yes)?)/) },
      { t: 'Observe sa consommation CPU dans `top` (q pour quitter), puis mets-le en pause avec SIGSTOP.', sol: 'kill -STOP $(pgrep yes)', check: (m) => m.ran(/^\s*h?top\s*$/) && m.ev('stopped', (d) => d.proc.comm === 'yes') },
      { t: 'Vérifie son état (colonne STAT de ps, ou `jobs`) : il doit être **T**. Sa consommation CPU tombe à 0.', sol: 'ps -o pid,stat,%cpu,cmd -C yes', check: (m) => m.ran(/^\s*(ps\b|jobs\b)/) && m.procs((p) => p.comm === 'yes' && p.state === 'T').length > 0 },
      { t: 'Reprends-le avec SIGCONT, puis arrête-le définitivement.', sol: 'kill -CONT $(pgrep yes) && kill $(pgrep yes)', check: (m) => m.ev('continued', (d) => d.proc.comm === 'yes') && m.cmdline(/^yes/).length === 0 },
      { t: 'Lance `ping -c 50 google.com &` et `ping -c 50 yahoo.com &`, puis arrête **tous** les ping avec `killall`.', sol: 'killall ping', why: '`killall nom` tue tous les processus portant exactement ce nom.', check: (m) => m.ranCount(/^\s*ping\b.*&\s*$/) >= 2 && m.ran(/^\s*killall\s+(-\S+\s+)*ping\s*$/) && m.cmdline(/^ping/).length === 0 },
      { t: 'Relance les deux ping, puis arrête **uniquement** celui de yahoo avec `pkill -f yahoo`.', sol: 'pkill -f yahoo', why: '`pkill -f` cherche le motif dans TOUTE la ligne de commande ; killall ne regarde que le nom exact du processus.', check: (m) => m.ran(/^\s*pkill\s+(-\S+\s+)*-f\s+(-\S+\s+)*yahoo/) && m.cmdline(/yahoo/).length === 0 && m.cmdline(/google/).length > 0 },
      { t: 'Fais le ménage : arrête le dernier ping.', sol: 'pkill ping', check: (m) => m.cmdline(/^ping/).length === 0 && m.ran(/pkill\s+(-f\s+)?yahoo/) }
    ]
  });

  M({
    id: 'c3-m6', tp: 'TP3 · ex. 8', title: 'Services et démons avec systemctl',
    intro: 'Le service SSH s\'appelle `ssh` sous Debian.',
    steps: [
      { t: 'Vérifie l\'état du service SSH. Repère l\'état et le PID principal.', sol: 'systemctl status ssh', check: (m) => m.ran(/^\s*(sudo\s+)?systemctl\s+status\s+sshd?(\.service)?\s*$/) },
      { t: 'Redémarre-le, puis vérifie avec `ps` que le démon sshd tourne. Son PID a-t-il changé ?', sol: 'sudo systemctl restart ssh', why: 'Oui : un redémarrage arrête le processus et en crée un nouveau (nouveau PID).', check: (m) => m.ev('service', (d) => d.op === 'restart' && d.name === 'ssh') && m.ran(/^\s*ps\b.*(sshd|aux|-ef)/) },
      { t: 'Désactive le démarrage automatique de SSH, puis vérifie avec `systemctl is-enabled ssh`.', sol: 'sudo systemctl disable ssh', check: (m) => m.service('ssh').enabled === false && m.ran(/systemctl\s+is-enabled\s+sshd?/) },
      { t: 'Réactive-le (tu en auras besoin pour la suite du semestre !).', sol: 'sudo systemctl enable ssh', why: 'enable/disable = démarrage automatique au boot ; start/stop = maintenant.', check: (m) => m.service('ssh').enabled === true && m.ev('service', (d) => d.op === 'enable') }
    ]
  });

  M({
    id: 'c3-m7', tp: 'TP3 · ex. 9', title: 'Script de gestion de processus',
    intro: 'Écris `process_manager.sh` : lancer un processus, récupérer son PID ($!), le suspendre 10 s, le reprendre, puis l\'arrêter.',
    steps: [
      { t: 'Crée `process_manager.sh` (avec nano) en complétant le squelette :\n`sleep 100 &` · `PID=$!` · `kill -STOP $PID` · `ps -o pid,stat,cmd -p $PID` · `sleep 10` · `kill -CONT $PID` · `sleep 5` · `kill $PID`', hint: '$! contient le PID du dernier processus lancé en arrière-plan.', sol: 'nano process_manager.sh', check: (m) => { const c = m.content('~/process_manager.sh') || ''; return /\$!/.test(c) && /kill\s+-(STOP|SIGSTOP|19)/.test(c) && /kill\s+-(CONT|SIGCONT|18)/.test(c); } },
      { t: 'Rends le script exécutable.', sol: 'chmod +x process_manager.sh', check: (m) => (m.perms('~/process_manager.sh') || '')[2] === 'x' },
      { t: 'Exécute-le et vérifie que la colonne STAT affichée passe bien par l\'état **T**.', sol: './process_manager.sh', why: 'T = stopped : le processus est suspendu par SIGSTOP.', check: (m) => m.ran(/^\s*(\.\/|bash\s+)\S*process_manager\.sh/) && m.ev('stopped', (d) => d.proc.comm === 'sleep') }
    ]
  });

  M({
    id: 'c3-m8', tp: 'TP3 · ex. 10 à 12', title: 'Arbre, états, zombies et orphelins',
    intro: 'Explore la parenté des processus et provoque un zombie et un orphelin.',
    steps: [
      { t: 'Affiche le PID de ton shell, lance un bash imbriqué (`bash`) et affiche `echo $$` et `ps -o pid,ppid,cmd`.', sol: 'echo $$', why: 'Le PPID du nouveau bash est le PID du précédent.', check: (m) => m.ran(/^\s*echo\s+\$\$\s*$/) && m.term.tabs.some((t) => t.sh.stack.some((f) => f.kind === 'bash')) && m.ran(/ps\s+-o\s+\S*ppid/) },
      { t: 'Affiche l\'arbre des processus de ton shell avec les PID, puis quitte les shells imbriqués avec `exit`.', sol: 'pstree -p $$', why: 'En remontant la parenté, on arrive à systemd (PID 1).', check: (m) => m.ran(/^\s*pstree\s+(-\w*p\w*)/) && !m.term.tabs.some((t) => t.sh.stack.some((f) => f.kind === 'bash')) },
      { t: 'Lance `sleep 300 &`, `yes > /dev/null &` et `sleep 400 &`, puis suspends le dernier sleep.', sol: 'kill -STOP %3', check: (m) => m.cmdline(/^sleep 300/).length && m.cmdline(/^yes/).length && m.procs((p) => /^sleep 400/.test(p.cmd) && p.state === 'T').length },
      { t: 'Affiche leurs états avec `ps -o pid,stat,%cpu,cmd` : explique S, R et T.', sol: 'ps -o pid,stat,%cpu,cmd', why: 'sleep attend (S, endormi) ; yes calcule (R) ; le sleep suspendu est T.', check: (m) => m.ran(/ps\s+-o\s+\S*stat/) },
      { t: 'Arrête les trois processus en une seule commande.', hint: 'kill PID1 PID2 PID3 (un processus suspendu ne réagit à SIGTERM qu\'après SIGCONT : kill %n relance automatiquement, ou utilise -9).', sol: 'kill -9 %1 %2 %3', check: (m) => !m.cmdline(/^sleep (300|400)/).length && !m.cmdline(/^yes/).length },
      { t: 'Crée un **zombie** : `bash -c \'sleep 1 & exec sleep 60\' &` puis, après 2 s, cherche-le (`ps aux | grep defunct`).', sol: "bash -c 'sleep 1 & exec sleep 60' &", why: 'L\'enfant (sleep 1) est terminé mais son parent (remplacé par sleep 60 via exec) ne lit jamais son code de sortie : état Z.', check: (m) => m.procs((p) => p.state === 'Z').length > 0 && m.ran(/defunct|stat/) },
      { t: 'Essaie de tuer le zombie avec `kill -9` : que se passe-t-il ? Fais-le disparaître en tuant son **parent**.', sol: 'kill $(pgrep -f "sleep 60")', why: 'Un zombie est déjà mort : kill n\'a aucun effet. Quand le parent meurt, le zombie est adopté puis récolté par systemd.', check: (m) => m.ev('signal', (d) => d.proc.state === 'Z' && d.sig === 9) && m.procs((p) => p.state === 'Z').length === 0 },
      { t: 'Crée un **orphelin** : `bash -c \'sleep 300 &\'` puis affiche le PPID de ce sleep (`ps -o pid,ppid,cmd -C sleep`).', sol: "bash -c 'sleep 300 &'", why: 'Le parent bash est terminé : le sleep orphelin est adopté par systemd (PPID 1).', check: (m) => m.procs((p) => p.comm === 'sleep' && p.ppid === 1).length > 0 && m.ran(/ps\s+-o\s+\S*ppid/) }
    ]
  });

  M({
    id: 'c3-m9', tp: 'TP3 · ex. 13 à 15', title: 'Priorités, nohup et trap',
    intro: 'Deux processus gourmands sur le même cœur, une valeur nice différente : qui gagne ?',
    steps: [
      { t: 'Lance `taskset -c 0 yes > /dev/null &` puis `taskset -c 0 nice -n 19 yes > /dev/null &`. Observe NI et %CPU dans `top`.', sol: 'taskset -c 0 nice -n 19 yes > /dev/null &', why: 'Plus la valeur nice est haute, moins le processus est prioritaire : celui en nice 19 n\'obtient presque rien.', check: (m) => m.procs((p) => p.comm === 'yes' && p.nice === 19).length && m.procs((p) => p.comm === 'yes' && p.nice === 0).length && m.ran(/^\s*h?top\s*$/) },
      { t: 'Avec `renice`, essaie de remettre le second processus à la priorité 0, en simple utilisateur. Puis recommence avec sudo.', sol: 'sudo renice -n 0 -p $(pgrep -n yes)', why: 'Un utilisateur peut BAISSER la priorité (augmenter nice) mais pas l\'augmenter : il faut root.', check: (m) => m.ran(/^\s*renice\b/, { fail: true }) && m.ran(/^\s*sudo\s+renice\b/, { ok: true }) },
      { t: 'Arrête les deux processus avec une seule commande.', sol: 'pkill yes', check: (m) => !m.cmdline(/^yes/).length },
      { t: 'Ouvre un 2e terminal, lances-y `sleep 600 &`, puis **ferme** ce terminal (× sur l\'onglet). Le sleep existe-t-il encore ?', sol: 'sleep 600 &', why: 'Non : à la fermeture, le terminal envoie SIGHUP à ses processus, qui se terminent.', check: (m) => m.ev('signal', (d) => d.sig === 1 && d.proc.comm === 'sleep') },
      { t: 'Recommence avec `nohup sleep 600 &` dans un nouveau terminal que tu fermes ensuite : le processus survit-il ?', sol: 'nohup sleep 600 &', why: 'Oui : nohup ignore SIGHUP. Sa sortie est ajoutée au fichier nohup.out.', check: (m) => m.procs((p) => p.nohup && /sleep 600/.test(p.cmd)).length > 0 && m.ev('termclose') && m.evCount('termclose') >= 2 },
      { t: 'Crée le script `signaux.sh` du TP (trap SIGINT qui affiche un message, trap SIGTERM qui fait `exit 0`, puis `while true; do sleep 1; done`), rends-le exécutable et lance-le. Appuie sur **Ctrl+C**.', hint: "trap 'echo \"SIGINT reçu : je refuse de m arrêter !\"' SIGINT", sol: 'nano signaux.sh', why: 'trap intercepte SIGINT : le script affiche son message et continue.', check: (m) => /trap/.test(m.content('~/signaux.sh') || '') && m.ev('signal', (d) => d.sig === 2 && d.proc.traps && d.proc.traps[2] != null) },
      { t: 'Depuis un 2e terminal, envoie-lui SIGTERM, puis relance-le et envoie-lui `kill -9`. Le trap s\'affiche-t-il ?', sol: 'kill -9 $(pgrep -f signaux)', why: 'SIGKILL et SIGSTOP ne peuvent jamais être interceptés : le trap ne s\'exécute pas.', check: (m) => m.ev('signal', (d) => d.sig === 15 && d.proc.traps && d.proc.traps[15] != null) && m.ev('signal', (d) => d.sig === 9 && /signaux/.test(d.proc.cmd)) }
    ]
  });
})();
