# Révisions — Linux, Maths & Anglais

Application de révision **100 % hors ligne** (PWA), organisée en **matières** :

## Administration Linux (cours 1 à 4 + TP 1 à 4)
- **Fiches de cours** (40), **quiz** (200 questions, chaque mauvaise réponse expliquée).
- **Tape la commande** (200 exercices) : le correcteur analyse ta commande (options, arguments, `sudo`, `>` vs `>>`, `&&` vs `;`…), accepte les variantes équivalentes et explique chaque erreur.
- **Terminal Debian simulé** (droits, utilisateurs, processus, signaux, réseau, SSH vers une 2e machine, UFW, fail2ban, apt, systemctl, nano, top…) et **39 TP guidés** validés automatiquement.

## Mathématiques (théorie de base du cycle ingénieur)
12 chapitres : calcul algébrique, trigonométrie, fonctions usuelles, limites/DL, dérivation, primitives et intégrales, nombres complexes, équations différentielles, suites et séries, Fourier et Laplace, algèbre linéaire, probabilités.
- **Fiches** avec formules mises en forme (KaTeX), cercle trigonométrique interactif et courbes.
- **Formulaire** consultable et révisable en flashcards.
- **Quiz** avec explication de chaque mauvaise réponse.
- **Tape la formule** : tu écris le résultat en syntaxe calculatrice (`2x sin(x) + x^2 cos(x)`, `sqrt(3)/2`, `pi/6 ; 5pi/6`…). La réponse est comparée par **équivalence mathématique** (toute forme juste est acceptée) et les erreurs sont analysées : signe, facteur oublié (dérivée intérieure), constante, dérivé au lieu de primitiver, degrés au lieu de radians, valeur approchée, solutions manquantes, forme non développée…
- **Calculs & réflexes** générés à l'infini (valeurs sur le cercle, équations trigo, identités remarquables, second degré, exp/ln, DL, dérivées, primitives, complexes, équations différentielles, déterminants, probabilités) pour l'entraînement quotidien.
- **Labo** : tracer des fonctions, voir leur dérivée, cercle trigonométrique.

## Anglais (grand débutant)
12 chapitres progressifs : premiers pas et to be, nombres/heure/dates, famille, maison, nourriture, présent simple, présent continu, prétérit, **verbes irréguliers** (95 verbes, 3 formes), futur et voyages, adjectifs et comparatifs, converser au quotidien.
- **Fiches à écouter** : chaque mot ou phrase en anglais se lit à voix haute d'un clic (voix du téléphone, hors ligne).
- **Vocabulaire** et phrases utiles, révisés en flashcards avec audio.
- **QCM**, **écoute** (entendre puis choisir le sens, dictée de nombres), **écriture** (le correcteur explique chaque faute : -s de la 3e personne, am/is/are, do/does, a/an, verbe irrégulier mis en -ed, prétérit/participe, ordre des mots, orthographe, français à la place de l'anglais ; contractions et orthographe US/UK acceptées) et **oral** (reconnaissance vocale du navigateur, ou auto-évaluation si elle n'est pas disponible).
- **Conjugaison & réflexes** générés à l'infini : to be, présent simple (affirmatif, négatif, questions), présent continu, prétérit, futur, nombres, heure, pluriels, comparatifs, verbes irréguliers.
- Page **Oral** : écouter n'importe quel texte, choisir l'accent (britannique / américain), la voix et la vitesse, tester le micro.

## Pour toutes les matières
Répétition espacée, révision du jour, examen blanc chronométré, « mes erreurs », suivi de progression (maîtrise par chapitre, réussite, points faibles, activité, série de jours), export/import de la progression.

## Lancer

- **macOS** : double-clique sur `Lancer l'application.command` (ouvre http://localhost:8765).
- Ou : `python3 -m http.server 8765` dans ce dossier, puis http://localhost:8765.
- En ligne : https://thibautmicetic.github.io/linux-revision/ (sur téléphone : Safari › Partager › Sur l'écran d'accueil, ou Chrome › Installer l'application).

La progression est enregistrée localement dans le navigateur.

## Ajouter une matière

1. Déclarer la matière dans `js/subjects.js` (`APP.registerSubject({ id, title, short, color, badge, memo, tool, exo, … })`).
2. Créer ses chapitres dans `js/data/<matière>/…js` avec `APP.registerChapter({ subject: '<id>', … })` (même format que les chapitres existants : `sections`, `quiz`, `exercises`, `flashcards`, `formulas` ou `commands`).
3. Les ajouter dans `index.html`, puis relancer `python3 tools/build-sw.py`.

Le contenu maths se vérifie avec `node tools/validate-maths.js js/data/maths/m1.js` (rendu LaTeX, réponses acceptées, erreurs typiques refusées), le contenu d'anglais avec `node tools/validate-anglais.js` (structure, réponses acceptées, erreurs typiques refusées et expliquées).

## Structure

```
index.html, manifest.webmanifest, sw.js   PWA (sw.js est généré par tools/build-sw.py)
css/style.css
vendor/katex/       rendu des formules (KaTeX, licence MIT), embarqué pour le hors ligne
js/core.js          matières, chapitres, progression, répétition espacée
js/subjects.js      déclaration des matières
js/app.js           interface
js/shparse.js, js/cmdinfo.js, js/checker.js, js/sim/   Linux : correcteur de commandes et terminal simulé
js/missions/, js/missions.js                            Linux : TP guidés
js/generators.js                                        Linux : exercices générés
js/math/expr.js     maths : lecture des formules, évaluation (complexes), LaTeX, dérivation
js/math/check.js    maths : correcteur par équivalence + explication des erreurs
js/math/render.js   maths : rendu KaTeX, cercle trigonométrique, courbes, clavier
js/math/gen.js      maths : exercices générés
js/data/c1..c4.js   contenu Linux
js/data/maths/      contenu maths (m1..m12)
js/anglais/en.js    anglais : correcteur, voix (synthèse et reconnaissance), exercices dérivés des mots/phrases/verbes
js/anglais/gen.js   anglais : exercices générés (conjugaison, nombres, heure…)
js/data/anglais/    contenu anglais (en1..en12, en9 = verbes irréguliers)
```

Après toute modification, relancer `python3 tools/build-sw.py` pour mettre à jour le cache hors ligne.
