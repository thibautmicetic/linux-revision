/* Noyau : registre du contenu, utilitaires, progression (localStorage) et répétition espacée. */
(function () {
  'use strict';
  const APP = (window.APP = window.APP || {});
  APP.chapters = APP.chapters || [];
  APP.missions = APP.missions || [];

  APP.registerChapter = function (ch) {
    ch.sections = ch.sections || [];
    ch.commands = ch.commands || [];
    ch.flashcards = ch.flashcards || [];
    ch.quiz = ch.quiz || [];
    ch.exercises = ch.exercises || [];
    ch.quiz.forEach((q) => { q.kind = 'quiz'; q.chapter = ch.id; });
    ch.exercises.forEach((x) => { x.kind = 'exo'; x.chapter = ch.id; });
    ch.commands.forEach((c) => { c.kind = 'cmd'; c.chapter = ch.id; });
    ch.flashcards.forEach((f) => { f.kind = 'card'; f.chapter = ch.id; });
    APP.chapters.push(ch);
    APP.chapters.sort((a, b) => a.num - b.num);
  };
  APP.registerMission = function (m) { APP.missions.push(m); };
  APP.chapter = (id) => APP.chapters.find((c) => c.id === id);

  /* ---------- utilitaires ---------- */
  const U = (APP.util = {});
  U.esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  // texte brut + `code` inline + **gras** + retours à la ligne
  U.md = (s) => U.esc(s)
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>')
    .replace(/\n/g, '<br>');
  U.shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  U.pick = (a) => a[Math.floor(Math.random() * a.length)];
  U.rand = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
  U.today = (d) => { d = d || new Date(); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); };
  U.lev = (a, b) => {
    const m = a.length, n = b.length; if (!m) return n; if (!n) return m;
    let prev = Array.from({ length: n + 1 }, (_, i) => i);
    for (let i = 1; i <= m; i++) {
      const cur = [i];
      for (let j = 1; j <= n; j++) cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      prev = cur;
    }
    return prev[n];
  };
  U.norm = (s) => String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\s+/g, '').trim();

  /* ---------- progression ---------- */
  const KEY = 'linuxrev.v1';
  const DAY = 86400000;
  const BOX_DAYS = [0, 0, 1, 3, 7, 16, 35]; // index = boîte Leitner (1..6)

  function blank() {
    return { items: {}, missions: {}, sections: {}, daily: {}, settings: { theme: 'auto', goal: 20 }, xp: 0, created: Date.now() };
  }
  let state;
  try { state = JSON.parse(localStorage.getItem(KEY)) || blank(); } catch (e) { state = blank(); }
  state = Object.assign(blank(), state);

  const P = (APP.progress = {});
  P.state = () => state;
  P.save = () => { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* stockage indisponible */ } };
  P.item = (id) => state.items[id];

  function bumpDaily(ok) {
    const k = U.today();
    const d = (state.daily[k] = state.daily[k] || { n: 0, ok: 0 });
    d.n++; if (ok) d.ok++;
  }

  // Enregistre une réponse. ok = bonne réponse du premier coup.
  P.record = function (id, ok, extra) {
    const it = (state.items[id] = state.items[id] || { n: 0, ok: 0, ko: 0, box: 0, due: 0, last: 0 });
    it.n++; it.last = Date.now();
    if (ok) {
      it.ok++; it.box = Math.min(6, (it.box || 0) + 1); it.streak = (it.streak || 0) + 1;
      state.xp += 10;
    } else {
      it.ko++; it.box = 1; it.streak = 0; it.lastWrong = Date.now();
      if (extra && extra.answer != null) it.wrongAnswer = String(extra.answer).slice(0, 200);
      state.xp += 2;
    }
    it.due = Date.now() + BOX_DAYS[it.box] * DAY - (it.box <= 1 ? 0 : 3600000);
    bumpDaily(ok);
    P.save();
  };
  // Flashcard : auto-évaluation (0 = à revoir, 1 = difficile, 2 = facile)
  P.rateCard = function (id, grade) {
    const it = (state.items[id] = state.items[id] || { n: 0, ok: 0, ko: 0, box: 0, due: 0, last: 0 });
    it.n++; it.last = Date.now();
    if (grade === 0) { it.box = 1; it.ko++; }
    else if (grade === 1) { it.box = Math.max(2, it.box); it.ok++; }
    else { it.box = Math.min(6, (it.box || 1) + 1); it.ok++; }
    it.due = Date.now() + BOX_DAYS[it.box] * DAY;
    state.xp += grade ? 5 : 1;
    bumpDaily(grade > 0);
    P.save();
  };
  P.markSection = (id) => { if (!state.sections[id]) { state.sections[id] = Date.now(); state.xp += 3; P.save(); } };
  P.missionStep = function (mid, stepIdx, total) {
    const m = (state.missions[mid] = state.missions[mid] || { steps: {}, done: false });
    if (!m.steps[stepIdx]) { m.steps[stepIdx] = Date.now(); state.xp += 8; bumpDaily(true); }
    if (Object.keys(m.steps).length >= total && !m.done) { m.done = Date.now(); state.xp += 40; }
    P.save();
  };
  P.resetMission = (mid) => { delete state.missions[mid]; P.save(); };

  P.isDue = (id) => { const it = state.items[id]; return it && it.box > 0 && it.due <= Date.now(); };
  P.isNew = (id) => !state.items[id];
  P.mastered = (id) => { const it = state.items[id]; return !!it && it.box >= 3; };
  P.level = (id) => { const it = state.items[id]; if (!it) return 'new'; if (it.box >= 4) return 'master'; if (it.box >= 2) return 'learn'; return 'weak'; };

  // Taux de maîtrise d'un ensemble d'items (0..1) : boîte 3+ = maîtrisé, boîtes 1-2 comptent partiellement
  P.mastery = function (ids) {
    if (!ids.length) return 0;
    let s = 0;
    for (const id of ids) {
      const it = state.items[id]; if (!it) continue;
      s += it.box >= 4 ? 1 : it.box === 3 ? 0.8 : it.box === 2 ? 0.45 : 0.15;
    }
    return s / ids.length;
  };

  P.chapterStats = function (ch) {
    const q = ch.quiz.map((x) => x.id), x = ch.exercises.map((e) => e.id);
    const cards = ch.commands.map((c) => c.id).concat(ch.flashcards.map((f) => f.id));
    const secs = ch.sections.map((s) => s.id);
    const missions = APP.missions.filter((m) => m.chapter === ch.id);
    const read = secs.filter((id) => state.sections[id]).length;
    const mDone = missions.filter((m) => state.missions[m.id] && state.missions[m.id].done).length;
    const mq = P.mastery(q), mx = P.mastery(x), mc = P.mastery(cards);
    const parts = [
      [secs.length ? read / secs.length : 0, 0.1],
      [mq, 0.3], [mx, 0.35], [mc, 0.1],
      [missions.length ? mDone / missions.length : 0, missions.length ? 0.15 : 0]
    ];
    const tw = parts.reduce((a, p) => a + p[1], 0);
    const total = parts.reduce((a, p) => a + p[0] * p[1], 0) / tw;
    const answered = q.concat(x).filter((id) => state.items[id]);
    const okc = answered.reduce((a, id) => a + state.items[id].ok, 0);
    const n = answered.reduce((a, id) => a + state.items[id].n, 0);
    return { total, read, secs: secs.length, mq, mx, mc, mDone, missions: missions.length, accuracy: n ? okc / n : null, answered: answered.length, items: q.length + x.length };
  };

  P.streak = function () {
    let d = new Date(), s = 0;
    if (!state.daily[U.today(d)]) d = new Date(Date.now() - DAY);
    while (state.daily[U.today(d)]) { s++; d = new Date(d.getTime() - DAY); }
    return s;
  };
  P.todayCount = () => (state.daily[U.today()] || { n: 0 }).n;
  P.dueCount = function () {
    let n = 0;
    for (const ch of APP.chapters) for (const it of [].concat(ch.quiz, ch.exercises, ch.commands, ch.flashcards)) if (P.isDue(it.id)) n++;
    return n;
  };
  P.export = () => JSON.stringify(state, null, 1);
  P.import = (txt) => { const s = JSON.parse(txt); if (!s || typeof s !== 'object' || !s.items) throw new Error('Fichier invalide'); state = Object.assign(blank(), s); P.save(); };
  P.reset = () => { state = blank(); P.save(); };
  P.setting = (k, v) => { if (v === undefined) return state.settings[k]; state.settings[k] = v; P.save(); };
})();
