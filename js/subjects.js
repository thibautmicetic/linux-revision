/* Matières de l'application. Pour ajouter une matière : un APP.registerSubject({...}) ici,
   puis des fichiers de chapitres (APP.registerChapter({ subject: '<id>', ... })) chargés dans index.html. */
(function () {
  'use strict';
  const APP = window.APP;
  APP.registerSubject({
    id: 'linux', order: 1,
    title: 'Administration Linux', short: 'Linux', kicker: 'E4a · Cours 1 à 4 + TP',
    desc: 'Commandes, droits, processus, réseau et sécurité — avec un terminal Debian simulé et des TP guidés.',
    color: '#3b6cf6', badge: '$_',
    memo: { label: 'Mémo', title: 'Mémo des commandes', placeholder: 'Rechercher : chmod, port 22, signal, récursif…' },
    tool: { route: '#/terminal', label: 'Terminal', icon: 'term', desc: 'Debian simulé hors ligne' },
    exo: { label: 'Tape la commande', desc: 'Écris la commande demandée ; les erreurs sont analysées option par option.' },
    cards: 'Commandes et notions : retourne la carte et auto-évalue-toi.',
    missions: true
  });
  APP.registerSubject({
    id: 'maths', order: 2,
    title: 'Mathématiques', short: 'Maths', kicker: 'Théorie de base · cycle ingénieur',
    desc: 'Calcul, trigonométrie, dérivées, primitives, complexes, équations différentielles, séries, Laplace, algèbre linéaire, probabilités.',
    color: '#e0527a', badge: 'Σ',
    memo: { label: 'Formulaire', title: 'Formulaire', placeholder: 'Rechercher : cos(a+b), dérivée, primitive, DL…' },
    tool: { route: '#/s/maths/labo', label: 'Labo', icon: 'wave', desc: 'Tracer, dériver, cercle trigo' },
    exo: { label: 'Tape la formule', desc: 'Écris le résultat en syntaxe calculatrice : toute forme équivalente est acceptée, chaque erreur est analysée.' },
    cards: 'Formules et théorèmes : énonce-les de tête puis vérifie.',
    missions: false
  });
})();
