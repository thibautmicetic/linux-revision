#!/usr/bin/env node
/* Valide un fichier de contenu maths : LaTeX (KaTeX), exercices (réponses, erreurs typiques), identifiants.
   Usage : node tools/validate-maths.js js/data/maths/m2.js */
const path = require('path');
const root = path.join(__dirname, '..');
global.window = global; global.localStorage = { getItem() { return null; }, setItem() {} };
require(path.join(root, 'js/core.js')); require(path.join(root, 'js/math/expr.js')); require(path.join(root, 'js/math/check.js'));
const katex = require(path.join(root, 'vendor/katex/katex.min.js'));
const APP = global.APP;
const files = process.argv.slice(2);
let errors = 0;
const err = (id, m) => { errors++; console.log('ERREUR', id, ':', m); };
function texSegs(s) { const out = []; String(s || '').replace(/\$\$([\s\S]+?)\$\$|\$([^$]+?)\$/g, (m, d, i) => { out.push({ tex: d || i, display: !!d }); return ''; }); return out; }
function checkTex(id, s) {
  const str = String(s || '');
  const nd = (str.replace(/\\\$/g, '').match(/\$/g) || []).length;
  if (nd % 2) err(id, 'nombre impair de $ : ' + str.slice(0, 80));
  for (const t of texSegs(str)) { try { katex.renderToString(t.tex, { displayMode: t.display, throwOnError: true, strict: 'ignore' }); } catch (e) { err(id, 'LaTeX invalide « ' + t.tex.slice(0, 60) + ' » : ' + e.message.slice(0, 120)); } }
}
for (const f of files) {
  const before = APP.chapters.length;
  require(path.resolve(f));
  const ch = APP.chapters[APP.chapters.length - 1];
  if (APP.chapters.length === before) { err(f, 'registerChapter non appelé'); continue; }
  const ids = new Set();
  const all = [].concat(ch.sections, ch.formulas || [], ch.flashcards, ch.quiz, ch.exercises);
  for (const x of all) { if (ids.has(x.id)) err(x.id, 'id en double'); ids.add(x.id); if (!String(x.id).startsWith(ch.id + '-')) err(x.id, 'id doit commencer par ' + ch.id + '-'); }
  if (ch.subject !== 'maths') err(ch.id, "subject doit valoir 'maths'");
  for (const s of ch.sections) checkTex(s.id, s.html.replace(/<[^>]+>/g, ' ').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&'));
  for (const fo of ch.formulas || []) { if (!fo.name || !fo.tex) err(fo.id, 'name/tex manquant'); try { katex.renderToString(fo.tex, { displayMode: true, throwOnError: true, strict: 'ignore' }); } catch (e) { err(fo.id, 'tex invalide : ' + e.message.slice(0, 120)); } checkTex(fo.id, fo.note); }
  for (const c of ch.flashcards) { checkTex(c.id, c.front); checkTex(c.id, c.back); }
  for (const q of ch.quiz) {
    checkTex(q.id, q.q); checkTex(q.id, q.explain);
    if (q.type === 'input') { if (!q.accept || !q.accept.length) err(q.id, 'accept manquant'); continue; }
    if (!Array.isArray(q.choices) || q.answer == null || q.answer >= q.choices.length) err(q.id, 'choices/answer invalides');
    (q.choices || []).forEach((c, i) => { checkTex(q.id, c); if (i !== q.answer && !(q.why && (q.why[i] || q.why[String(i)]))) err(q.id, 'why manquant pour le choix ' + i); });
    for (const k in q.why || {}) checkTex(q.id, q.why[k]);
  }
  for (const x of ch.exercises) {
    checkTex(x.id, x.prompt); checkTex(x.id, x.explain); checkTex(x.id, x.hint); checkTex(x.id, x.context);
    if (!x.answer) { err(x.id, 'answer manquant'); continue; }
    const r = APP.mathCheck(x, x.answer);
    if (!r.ok) { err(x.id, 'la réponse « ' + x.answer + ' » n\'est pas acceptée : ' + r.msgs.join(' / ')); continue; }
    for (const a of x.answers || []) { const r2 = APP.mathCheck(x, a); if (!r2.ok) err(x.id, 'réponse alternative refusée « ' + a + ' » : ' + r2.msgs.join(' / ')); }
    for (const m of x.mistakes || []) {
      if (m.expr) { const r3 = APP.mathCheck(x, m.expr); if (r3.ok) err(x.id, 'l\'erreur typique « ' + m.expr + ' » est acceptée comme juste'); else if (r3.parseError) err(x.id, 'erreur typique illisible « ' + m.expr + ' » : ' + r3.parseError); }
      checkTex(x.id, m.msg);
    }
    if (x.check !== 'text' && x.check !== 'value' && x.check !== 'set' && x.check !== 'tuple' && (!x.vars || !x.vars.length)) err(x.id, 'vars manquant (ou check: value/set/tuple)');
  }
  console.log(ch.id, ch.title, '— sections', ch.sections.length, 'formules', (ch.formulas || []).length, 'cartes', ch.flashcards.length, 'quiz', ch.quiz.length, 'exercices', ch.exercises.length);
}
console.log(errors ? errors + ' erreur(s)' : 'OK : aucune erreur');
process.exit(errors ? 1 : 0);
