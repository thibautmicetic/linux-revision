#!/usr/bin/env node
/* Vérifie un ou plusieurs chapitres d'anglais : structure, ids, fiches, réponses acceptées, erreurs typiques refusées.
   Usage : node tools/validate-anglais.js js/data/anglais/en1.js [en2.js …]   (sans argument : tous les chapitres) */
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..');
global.window = global;
global.localStorage = { getItem() { return null; }, setItem() {} };
require(path.join(root, 'js/core.js'));
require(path.join(root, 'js/anglais/en.js'));
const APP = global.APP, E = APP.en, U = APP.util;
const dir = path.join(root, 'js/data/anglais');
let files = process.argv.slice(2).map((f) => path.resolve(f));
if (!files.length) files = fs.readdirSync(dir).filter((f) => /^en\d+\.js$/.test(f)).map((f) => path.join(dir, f));
// le chapitre des verbes irréguliers sert à la détection des erreurs : on le charge toujours en premier
const verbs = path.join(dir, 'en9.js');
const order = [verbs].filter((f) => fs.existsSync(f) && !files.includes(f)).concat(files.sort((a, b) => (a === verbs ? -1 : b === verbs ? 1 : 0)));
let total = 0;
for (const f of order) {
  const before = new Set(APP.chapters);
  try { eval(fs.readFileSync(f, 'utf8')); } catch (e) { console.log(path.basename(f) + ' : ERREUR DE SYNTAXE / CHARGEMENT : ' + e.message); total++; continue; }
  if (!files.includes(f)) continue;
  // les chapitres sont triés par numéro : on prend celui que ce fichier vient d'ajouter
  const added = APP.chapters.filter((c) => !before.has(c));
  if (added.length !== 1) { console.log(path.basename(f) + ' : ' + (added.length ? added.length + ' chapitres enregistrés' : 'aucun chapitre enregistré')); total++; continue; }
  const ch = added[0];
  const errs = [], warns = [];
  const err = (m) => errs.push(m), warn = (m) => warns.push(m);
  if (ch.subject !== 'anglais') err('subject doit être « anglais »');
  for (const k of ['id', 'num', 'title', 'subtitle']) if (!ch[k]) err('champ manquant : ' + k);
  const secIds = new Set(ch.sections.map((s) => s.id));
  if (ch.sections.length < 3) err('au moins 3 fiches attendues');
  if (ch.vocabSec && !secIds.has(ch.vocabSec)) err('vocabSec « ' + ch.vocabSec + ' » n\'est pas une fiche du chapitre');
  for (const s of ch.sections) {
    if (!s.id || !s.title || !s.html) err('fiche incomplète : ' + (s.id || s.title));
    if (s.html && !/class="say"/.test(s.html) && !ch.verbs) warn('fiche ' + s.id + ' : aucun <span class="say"> (texte anglais non écoutable)');
    if (s.html && /\$\{/.test(s.html)) err('fiche ' + s.id + ' : contient ${');
    const opens = (s.html.match(/<(table|ul|ol|div|p|span|b|i|h3|tr|td|th)\b/g) || []).length, closes = (s.html.match(/<\/(table|ul|ol|div|p|span|b|i|h3|tr|td|th)>/g) || []).length;
    if (opens !== closes) warn('fiche ' + s.id + ' : balises ouvrantes/fermantes déséquilibrées (' + opens + '/' + closes + ')');
  }
  // ids uniques
  const ids = new Map();
  for (const it of [].concat(ch.quiz, ch.exercises, ch.flashcards)) { if (ids.has(it.id)) err('id en double : ' + it.id); ids.set(it.id, 1); }
  // mots
  const POS = ['n', 'v', 'adj', 'adv', 'prep', 'pron', 'num', 'x', 'conj', 'det', ''];
  const seenFr = new Map(), seenEn = new Map();
  for (const w of ch.words || []) {
    if (!w.en || !w.fr) { err('mot incomplet : ' + JSON.stringify(w)); continue; }
    if (!POS.includes(w.pos || '')) err('pos inconnu pour ' + w.en + ' : ' + w.pos);
    const kf = U.norm(w.fr), ke = U.norm(w.en);
    if (seenFr.has(kf)) err('traduction française en double : « ' + w.fr + ' » (' + seenFr.get(kf) + ', ' + w.en + ')');
    if (seenEn.has(ke)) err('mot anglais en double : ' + w.en);
    seenFr.set(kf, w.en); seenEn.set(ke, 1);
    if (/^(a|an|the|to) /i.test(w.en) && w.pos !== 'x') warn('mot « ' + w.en + ' » : retire l\'article / le « to » (accepté automatiquement)');
    if (w.sec && !secIds.has(w.sec)) err('mot ' + w.en + ' : sec inconnue ' + w.sec);
    if (!w.ex) warn('mot sans exemple : ' + w.en);
  }
  const seenP = new Map();
  for (const p of ch.phrases || []) {
    if (!p.en || !p.fr) { err('phrase incomplète : ' + JSON.stringify(p)); continue; }
    const k = U.norm(p.fr); if (seenP.has(k)) err('phrase française en double : ' + p.fr); seenP.set(k, 1);
    if (p.sec && !secIds.has(p.sec)) err('phrase ' + p.en + ' : sec inconnue ' + p.sec);
  }
  if (!ch.verbs) {
    if ((ch.words || []).length < 30) warn('peu de mots (' + (ch.words || []).length + ')');
    if ((ch.phrases || []).length < 12) warn('peu de phrases (' + (ch.phrases || []).length + ')');
  }
  // QCM
  const authoredQ = ch.quiz.filter((q) => !q.prep && !/-v-/.test(q.id));
  if (!ch.verbs && authoredQ.length < 12) warn('peu de QCM écrits à la main (' + authoredQ.length + ')');
  for (const q of ch.quiz) {
    if (q.prep) { for (let k = 0; k < 3; k++) { q.prep(); if (q.choices.length < 3 || new Set(q.choices.map(U.norm)).size !== q.choices.length) { err('QCM généré ' + q.id + ' : choix insuffisants ou en double ' + JSON.stringify(q.choices)); break; } } continue; }
    if (!q.q || !Array.isArray(q.choices) || q.choices.length < 2) { err('QCM ' + q.id + ' : question ou choix manquants'); continue; }
    if (!(q.answer >= 0 && q.answer < q.choices.length)) err('QCM ' + q.id + ' : answer hors limites');
    if (new Set(q.choices.map(U.norm)).size !== q.choices.length) err('QCM ' + q.id + ' : choix en double');
    if (!q.explain) err('QCM ' + q.id + ' : explain manquant');
    if (!q.topic) err('QCM ' + q.id + ' : topic manquant');
    if (!/-v-/.test(q.id)) {
      if (!q.sec || !secIds.has(q.sec)) err('QCM ' + q.id + ' : sec manquante ou inconnue (' + q.sec + ')');
      for (let i = 0; i < q.choices.length; i++) if (i !== q.answer && !(q.why && (q.why[i] || q.why[String(i)]))) err('QCM ' + q.id + ' : why manquant pour le choix ' + i);
      if (q.listen && !q.say) err('QCM ' + q.id + ' : listen sans say');
      if (!q.say) warn('QCM ' + q.id + ' : pas de say');
    }
  }
  // exercices
  const authoredX = ch.exercises.filter((x) => /-x-/.test(x.id));
  if (!ch.verbs && authoredX.length < 15) warn('peu d\'exercices écrits à la main (' + authoredX.length + ')');
  for (const x of ch.exercises) {
    if (!x.prompt || !Array.isArray(x.answers) || !x.answers.length) { err('exercice ' + x.id + ' : prompt ou answers manquants'); continue; }
    for (const a of x.answers) { const r = E.check(x, a); if (!r.ok) err('exercice ' + x.id + ' : la réponse « ' + a + ' » est refusée'); }
    if (x.mode === 'speak') { const r = E.checkSpeech(x, [x.answers[0]]); if (!r.ok) err('oral ' + x.id + ' : la réponse modèle est refusée'); }
    if (/-x-/.test(x.id)) {
      for (const k of ['explain', 'rule', 'topic']) if (!x[k]) err('exercice ' + x.id + ' : ' + k + ' manquant');
      if (!x.sec || !secIds.has(x.sec)) err('exercice ' + x.id + ' : sec manquante ou inconnue (' + x.sec + ')');
      if ((x.mistakes || []).length < 2) err('exercice ' + x.id + ' : au moins 2 mistakes attendues');
      if (!x.say) warn('exercice ' + x.id + ' : pas de say');
    }
    for (const m of x.mistakes || []) {
      if (m.text == null && !m.re) { err('exercice ' + x.id + ' : mistake sans text ni re'); continue; }
      if (m.re) { try { new RegExp(m.re, 'i'); } catch (e) { err('exercice ' + x.id + ' : re invalide ' + m.re); continue; } }
      if (m.text != null) {
        const r = E.check(x, m.text);
        if (r.ok) err('exercice ' + x.id + ' : l\'erreur « ' + m.text + ' » est ACCEPTÉE comme bonne réponse');
        else if (!r.msgs.includes(m.msg)) err('exercice ' + x.id + ' : l\'erreur « ' + m.text + ' » n\'affiche pas son message (affiché : ' + r.msgs[0] + ')');
      }
      for (const a of x.answers) if (m.re && new RegExp(m.re, 'i').test(E.clean(a))) err('exercice ' + x.id + ' : la regex ' + m.re + ' attrape la bonne réponse « ' + a + ' »');
    }
  }
  console.log(path.basename(f) + ' — ' + ch.title + ' : ' + ch.sections.length + ' fiches, ' + (ch.words || []).length + ' mots, ' + (ch.phrases || []).length + ' phrases, ' + (ch.verbs || []).length + ' verbes, ' + authoredQ.length + ' QCM + ' + authoredX.length + ' exercices écrits → ' + ch.quiz.length + ' QCM, ' + ch.exercises.length + ' exercices, ' + ch.flashcards.length + ' cartes');
  if (process.env.WARN !== '0') for (const w of warns.slice(0, 40)) console.log('  avert. : ' + w);
  for (const e of errs) console.log('  ERREUR : ' + e);
  console.log(errs.length ? '  ' + errs.length + ' erreur(s)' : '  OK : aucune erreur');
  total += errs.length;
}
process.exit(total ? 1 : 0);
