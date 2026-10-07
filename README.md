# Linux Révision — ESEO E4a (Administration Linux)

Application de révision **100 % hors ligne** (PWA) pour les cours 1 à 4 et les TP 1 à 4 :

- **Fiches de cours** (40) : tout le cours + les notions des TP, avec blocs de commandes cliquables.
- **Quiz** (200 questions) : chaque mauvaise réponse est expliquée (pourquoi elle est fausse, pourquoi la bonne est juste).
- **Tape la commande** (200 exercices) : un correcteur analyse ta commande (options, arguments, `sudo`, `>` vs `>>`, `&&` vs `;`…), accepte les variantes équivalentes et explique précisément chaque erreur.
- **Flashcards** (commandes + notions) avec répétition espacée.
- **Calculs & réflexes** générés à l'infini : octal ↔ symbolique, effet d'un `chmod`, `umask`, « qui peut faire quoi ? », adressage IP, signaux, ports, états STAT.
- **Terminal Debian simulé** : système de fichiers avec vrais droits (rwx, SUID, SGID, sticky, umask), utilisateurs/groupes/sudo/su/newgrp, processus et signaux (jobs, Ctrl+Z, fg/bg, kill, nice, zombies, orphelins, trap, nohup), réseau (ip, ping, dig, ss, /etc/network/interfaces, /etc/hosts), SSH avec clés vers une 2e machine (VM-B), UFW, fail2ban, apt, systemctl, journalctl, nano, top…
- **39 TP pratiques guidés** reprenant les exercices des TP, validés automatiquement étape par étape (indice + solution).
- **Examen blanc** chronométré, **suivi de progression** (maîtrise par chapitre, série de jours, points faibles, activité), export/import de la progression.

## Lancer

- **macOS** : double-clique sur `Lancer l'application.command` (ouvre http://localhost:8765).
- Ou dans un terminal, depuis ce dossier :

  ```bash
  python3 -m http.server 8765
  ```

  puis ouvre http://localhost:8765.

Au premier chargement, l'application se met en cache (badge « Disponible hors ligne »). Tu peux alors l'**installer** (Chrome/Edge : icône « Installer » dans la barre d'adresse ; Safari macOS : Fichier › Ajouter au Dock) et l'utiliser sans connexion ni serveur.

Ouvrir directement `index.html` fonctionne aussi, mais sans le mode hors ligne/installable.

**Sur téléphone** : une PWA doit être servie en HTTPS. Le plus simple est de déposer ce dossier sur un hébergement statique (GitHub Pages, Netlify…), de l'ouvrir une fois sur le téléphone puis « Ajouter à l'écran d'accueil ». Elle fonctionne ensuite hors ligne.

La progression est enregistrée localement dans le navigateur (onglet **Progrès** › Exporter pour la sauvegarder ou la transférer).

## Structure

```
index.html, manifest.webmanifest, sw.js   PWA (sw.js est généré par tools/build-sw.py)
css/style.css
js/core.js          registre du contenu, progression, répétition espacée
js/shparse.js       analyse syntaxique bash (partagée)
js/cmdinfo.js       dictionnaire des commandes et options (explications + man)
js/checker.js       correcteur des exercices « tape la commande »
js/sim/             terminal simulé (machine, shell, commandes, interface)
js/data/c1..c4.js   contenu des chapitres (fiches, commandes, quiz, exercices)
js/missions/        TP pratiques guidés
js/generators.js    exercices générés
js/app.js           interface
```

Après toute modification d'un fichier, relancer `python3 tools/build-sw.py` pour mettre à jour le cache hors ligne.
