#!/usr/bin/env node
/* Vérifie les dialogues d'anglais : structure, personnages, répliques, questions de compréhension.
   Usage : node tools/validate-dialogues.js js/data/anglais/dialogues-1.js [...]   (sans argument : tous les fichiers dialogues-*.js) */
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..');
global.window = global;
global.localStorage = { getItem() { return null; }, setItem() {} };
require(path.join(root, 'js/core.js'));
require(path.join(root, 'js/anglais/en.js'));
const APP = global.APP, E = APP.en, U = APP.util;
const dir = path.join(root, 'js/data/anglais');
for (const f of fs.readdirSync(dir).filter((f) => /^en\d+\.js$/.test(f)).sort((a, b) => parseInt(a.slice(2)) - parseInt(b.slice(2)))) eval(fs.readFileSync(path.join(dir, f), 'utf8'));
let files = process.argv.slice(2).map((f) => path.resolve(f));
if (!files.length) files = fs.readdirSync(dir).filter((f) => /^dialogues-\d+\.js$/.test(f)).map((f) => path.join(dir, f));
let total = 0;
const allIds = new Set();
for (const f of files) {
  let list = null;
  APP.registerDialogues = (l) => { list = l; };
  try { eval(fs.readFileSync(f, 'utf8')); } catch (e) { console.log(path.basename(f) + ' : ERREUR DE SYNTAXE / CHARGEMENT : ' + e.message); total++; continue; }
  if (!Array.isArray(list)) { console.log(path.basename(f) + ' : APP.registerDialogues([...]) non appelé'); total++; continue; }
  const errs = [], warns = [];
  const per = {};
  for (const d of list) {
    const tag = 'dialogue ' + (d.id || '?');
    const err = (m) => errs.push(tag + ' : ' + m), warn = (m) => warns.push(tag + ' : ' + m);
    const ch = APP.chapter(d.ch);
    if (!ch || ch.subject !== 'anglais') { err('chapitre inconnu « ' + d.ch + ' »'); continue; }
    per[d.ch] = (per[d.ch] || 0) + 1;
    if (!d.id || !new RegExp('^' + d.ch + '-d-\\d{2}$').test(d.id)) err('id attendu de la forme ' + d.ch + '-d-01');
    if (allIds.has(d.id)) err('id en double'); allIds.add(d.id);
    for (const k of ['title', 'context']) if (!d[k]) err(k + ' manquant');
    if (d.sec && !ch.sections.find((s) => s.id === d.sec)) err('sec inconnue ' + d.sec);
    const sp = d.speakers || {};
    const keys = Object.keys(sp);
    if (keys.length < 2 || keys.length > 3) err('2 ou 3 personnages attendus');
    for (const k of keys) { if (!sp[k].name) err('personnage ' + k + ' sans nom'); if (!['m', 'f'].includes(sp[k].g)) err('personnage ' + k + ' : g doit valoir « m » ou « f »'); }
    if (!Array.isArray(d.lines) || d.lines.length < 4 || d.lines.length > 12) err('4 à 12 répliques attendues');
    (d.lines || []).forEach((l, i) => {
      if (!Array.isArray(l) || l.length !== 3) { err('réplique ' + i + ' : format [qui, anglais, français] attendu'); return; }
      const [who, en, fr] = l;
      if (!sp[who]) err('réplique ' + i + ' : personnage « ' + who + ' » inconnu');
      if (!en || !fr) err('réplique ' + i + ' : texte anglais ou traduction manquant');
      if (/[àâçéèêëîïôûùüœ]/i.test(en)) err('réplique ' + i + ' : accent français dans le texte anglais « ' + en + ' »');
      if (en && en.split(/\s+/).length > 16) warn('réplique ' + i + ' longue (' + en.split(/\s+/).length + ' mots) : « ' + en + ' »');
      if (/\$\{|`/.test(en + fr)) err('réplique ' + i + ' : ${ ou backtick interdit');
    });
    const used = new Set((d.lines || []).map((l) => l[0]));
    for (const k of keys) if (!used.has(k)) err('le personnage ' + k + ' ne parle jamais');
    if (!Array.isArray(d.questions) || d.questions.length < 2 || d.questions.length > 4) err('2 à 4 questions attendues');
    (d.questions || []).forEach((q, i) => {
      const t = 'question ' + (i + 1);
      if (!q.q || !Array.isArray(q.choices) || q.choices.length < 3 || q.choices.length > 4) { err(t + ' : q et 3-4 choix attendus'); return; }
      if (!(q.answer >= 0 && q.answer < q.choices.length)) err(t + ' : answer hors limites');
      if (new Set(q.choices.map(U.norm)).size !== q.choices.length) err(t + ' : choix en double');
      for (let k = 0; k < q.choices.length; k++) if (k !== q.answer && !(q.why && (q.why[k] || q.why[String(k)]))) err(t + ' : why manquant pour le choix ' + k);
      if (!q.explain) err(t + ' : explain manquant');
      if (q.at == null || !(q.at >= 0 && q.at < (d.lines || []).length)) err(t + ' : at (index de la réplique qui contient la réponse) manquant ou hors limites');
    });
  }
  for (const c of APP.chaptersOf('anglais')) if (per[c.id] != null && per[c.id] < 3) warns.push(c.id + ' : seulement ' + per[c.id] + ' dialogue(s)');
  console.log(path.basename(f) + ' : ' + list.length + ' dialogues (' + Object.entries(per).map(([k, v]) => k + '×' + v).join(', ') + ')');
  if (process.env.WARN !== '0') for (const w of warns) console.log('  avert. : ' + w);
  for (const e of errs) console.log('  ERREUR : ' + e);
  console.log(errs.length ? '  ' + errs.length + ' erreur(s)' : '  OK : aucune erreur');
  total += errs.length;
}
process.exit(total ? 1 : 0);
