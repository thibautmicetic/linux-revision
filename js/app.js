/* Interface de l'application : navigation, accueil, cours, sessions d'entraînement, terminal, mémo, progrès. */
(function () {
  'use strict';
  const APP = window.APP, U = APP.util, P = APP.progress;
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => [...(r || document).querySelectorAll(s)];
  const main = $('#main');
  const esc = U.esc, md = U.md;

  /* ---------- icônes ---------- */
  const I = {
    home: '<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
    book: '<path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v17H6.5A2.5 2.5 0 0 0 4 21.5zM4 21.5A2.5 2.5 0 0 1 6.5 19H20v3H6.5"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/>',
    term: '<rect x="2.5" y="4" width="19" height="16" rx="2.5"/><path d="m7 9 3 3-3 3M12.5 15H17"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
    chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
    flash: '<rect x="3" y="5" width="14" height="14" rx="2"/><path d="M7 3h12a2 2 0 0 1 2 2v12"/>',
    quiz: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6V14M12 17.5h.01"/>',
    cmd: '<path d="m5 8 4 4-4 4M11 16h8"/>',
    lab: '<path d="M9 3h6M10 3v6L4.5 19a1.5 1.5 0 0 0 1.3 2.2h12.4a1.5 1.5 0 0 0 1.3-2.2L14 9V3"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    calc: '<rect x="5" y="2.5" width="14" height="19" rx="2"/><path d="M8 6.5h8M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15h.01M8 18.5h8"/>',
    redo: '<path d="M3 12a9 9 0 1 0 3-6.7L3 8M3 3v5h5"/>',
    fire: '<path d="M12 22c4 0 7-3 7-7 0-5-5-6-4-12-4 2-7 6-7 9-1-1-2-2-2-4-2 2-3 4.5-3 7 0 4 4 7 9 7z"/>'
  };
  const icon = (n, cls) => '<svg class="ic ' + (cls || '') + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + I[n] + '</svg>';

  const NAV = [['', 'Accueil', 'home'], ['cours', 'Cours', 'book'], ['entrainement', 'Entraînement', 'target'], ['terminal', 'Terminal', 'term'], ['memo', 'Mémo', 'search'], ['progres', 'Progrès', 'chart']];
  function renderNav(route) {
    const due = P.dueCount();
    $('#nav').innerHTML = NAV.map(([r, l, i]) => '<a href="#/' + r + '" class="' + (route === r ? 'on' : '') + '">' + icon(i) + '<span>' + l + '</span>' + (r === 'entrainement' && due ? '<span class="badge">' + due + '</span>' : '') + '</a>').join('') +
      '<div class="sub">Chapitres</div>' + APP.chapters.map((c) => '<a href="#/ch/' + c.id + '" data-ch="' + c.id + '" class="' + (route === 'ch/' + c.id ? 'on' : '') + '"><span class="chip-ch" style="width:22px;height:22px;font-size:.72rem;border-radius:7px">' + c.num + '</span><span class="small">' + esc(c.title) + '</span></a>').join('');
    $('#bottom').innerHTML = NAV.filter((n) => n[0] !== 'memo').map(([r, l, i]) => '<a href="#/' + r + '" class="' + (route === r ? 'on' : '') + '">' + icon(i) + '<span>' + (l === 'Entraînement' ? 'S\'entraîner' : l) + '</span></a>').join('');
  }
  function toast(msg) { const t = $('#toast'); t.textContent = msg; t.classList.add('on'); clearTimeout(toast.t); toast.t = setTimeout(() => t.classList.remove('on'), 2200); }

  /* ---------- thème ---------- */
  function applyTheme() { const t = P.setting('theme'); if (t === 'light' || t === 'dark') document.documentElement.dataset.theme = t; else delete document.documentElement.dataset.theme; }
  $('#themeBtn').onclick = () => { const order = ['auto', 'light', 'dark']; const t = P.setting('theme') || 'auto'; const n = order[(order.indexOf(t) + 1) % 3]; P.setting('theme', n); applyTheme(); toast('Thème : ' + { auto: 'automatique', light: 'clair', dark: 'sombre' }[n]); };
  applyTheme();

  /* ---------- données ---------- */
  const allOf = (kind, chs) => APP.chapters.filter((c) => !chs || chs.includes(c.id)).flatMap((c) => (kind === 'quiz' ? c.quiz : kind === 'exo' ? c.exercises : kind === 'card' ? c.flashcards.concat(c.commands) : []));
  const findItem = (id) => { for (const c of APP.chapters) for (const x of [].concat(c.quiz, c.exercises, c.commands, c.flashcards)) if (x.id === id) return x; return null; };
  const chOf = (id) => APP.chapter(id);
  const pct = (x) => Math.round((x || 0) * 100);

  // Sélection intelligente (répétition espacée) : à revoir d'abord, puis nouveautés, puis le reste
  function pickItems(pool, n, mode) {
    const st = P.state().items;
    if (mode === 'errors') return U.shuffle(pool.filter((x) => st[x.id] && st[x.id].ko > 0 && st[x.id].box <= 2)).slice(0, n);
    if (mode === 'all') return U.shuffle(pool).slice(0, n);
    if (mode === 'new') return pool.filter((x) => !st[x.id]).slice(0, n);
    const due = pool.filter((x) => P.isDue(x.id)).sort((a, b) => st[a.id].due - st[b.id].due);
    const fresh = pool.filter((x) => !st[x.id]).sort((a, b) => (a.level || 1) - (b.level || 1));
    const rest = pool.filter((x) => st[x.id] && !P.isDue(x.id)).sort((a, b) => st[a.id].box - st[b.id].box || st[a.id].last - st[b.id].last);
    const out = due.slice(0, n);
    const fr = U.shuffle(fresh.slice(0, Math.max(n, 12)).slice(0, 18)).sort((a, b) => (a.level || 1) - (b.level || 1));
    for (const x of fr) if (out.length < n) out.push(x);
    for (const x of rest) if (out.length < n) out.push(x);
    return U.shuffle(out);
  }

  /* ---------- routeur ---------- */
  let cleanup = null;
  function route() {
    if (cleanup) { try { cleanup(); } catch (e) { console.error(e); } cleanup = null; }
    const h = location.hash.replace(/^#\/?/, '');
    const [path, qs] = h.split('?');
    const q = Object.fromEntries(new URLSearchParams(qs || ''));
    const parts = path.split('/').filter(Boolean);
    let navKey = parts[0] || '';
    if (parts[0] === 'ch') navKey = 'ch/' + parts[1];
    if (parts[0] === 'fiche') navKey = 'ch/' + parts[1];
    if (parts[0] === 'session' || parts[0] === 'gen') navKey = 'entrainement';
    if (parts[0] === 'tp') navKey = 'ch/' + ((APP.missions.find((m) => m.id === parts[1]) || {}).chapter || '');
    renderNav(navKey);
    main.scrollTop = 0; window.scrollTo(0, 0);
    try {
      switch (parts[0]) {
        case undefined: pageHome(); break;
        case 'cours': pageCours(); break;
        case 'ch': pageChapter(parts[1], parts[2] || 'fiches'); break;
        case 'fiche': pageFiche(parts[1], parts[2]); break;
        case 'session': pageSession(); break;
        case 'entrainement': pageTraining(); break;
        case 'terminal': pageTerminal(q); break;
        case 'memo': pageMemo(q); break;
        case 'progres': pageProgress(); break;
        case 'tp': pageMission(parts[1]); break;
        default: pageHome();
      }
    } catch (e) { console.error(e); main.innerHTML = '<div class="page"><div class="card">Erreur d\'affichage : ' + esc(e.message) + '</div></div>'; }
    main.focus({ preventScroll: true });
  }
  window.addEventListener('hashchange', route);

  /* ================= ACCUEIL ================= */
  function ring(v, label, size) {
    size = size || 116; const r = (size - 14) / 2, c = 2 * Math.PI * r;
    return '<div class="ring" style="width:' + size + 'px;height:' + size + 'px"><svg width="' + size + '" height="' + size + '"><circle cx="' + size / 2 + '" cy="' + size / 2 + '" r="' + r + '" stroke="var(--bg2)" stroke-width="10" fill="none"/><circle cx="' + size / 2 + '" cy="' + size / 2 + '" r="' + r + '" stroke="var(--ok)" stroke-width="10" fill="none" stroke-linecap="round" stroke-dasharray="' + c + '" stroke-dashoffset="' + c * (1 - Math.min(1, v)) + '"/></svg><div class="ring-t"><span>' + label + '</span></div></div>';
  }
  function globalMastery() { const s = APP.chapters.map((c) => P.chapterStats(c).total); return s.reduce((a, b) => a + b, 0) / (s.length || 1); }
  function nextAction() {
    const due = P.dueCount();
    if (due >= 3) return { t: due + ' élément' + (due > 1 ? 's' : '') + ' à réviser', p: 'La répétition espacée te les repropose au bon moment pour les ancrer durablement.', b: 'Réviser maintenant', go: () => startSmart() };
    for (const c of APP.chapters) {
      const s = c.sections.find((x) => !P.state().sections[x.id]);
      if (s) return { t: 'Continue le chapitre ' + c.num + ' : ' + c.title, p: 'Prochaine fiche : ' + s.title, b: 'Lire la fiche', href: '#/fiche/' + c.id + '/' + s.id };
      const st = P.chapterStats(c);
      if (st.mx < 0.5) return { t: 'Entraîne-toi sur les commandes du chapitre ' + c.num, p: 'Tape les commandes du cours et du TP : chaque erreur est expliquée.', b: 'Tape la commande', go: () => startSession({ title: 'Commandes — ' + c.title, items: pickItems(c.exercises, 10), back: '#/ch/' + c.id + '/exos' }) };
      const m = APP.missions.find((x) => x.chapter === c.id && !(P.state().missions[x.id] && P.state().missions[x.id].done));
      if (m && st.mq > 0.4) return { t: 'TP pratique : ' + m.title, p: 'Mets en pratique dans le terminal simulé, vérifié étape par étape.', b: 'Lancer le TP', href: '#/tp/' + m.id };
    }
    return { t: 'Révision du jour', p: 'Un mélange de quiz, commandes et flashcards adapté à ton niveau.', b: 'Commencer', go: () => startSmart() };
  }
  function pageHome() {
    const goal = P.setting('goal') || 20, today = P.todayCount(), streak = P.streak();
    const gm = globalMastery();
    const nx = nextAction();
    const totalQ = allOf('quiz').length, totalX = allOf('exo').length;
    const st = P.state();
    const answered = Object.keys(st.items).length;
    const mDone = APP.missions.filter((m) => st.missions[m.id] && st.missions[m.id].done).length;
    let h = '<div class="page">';
    h += '<div class="hero"><div><div class="kicker">Administration Linux · E4a</div><h1>' + (today ? 'Bon retour !' : 'Prêt à réviser ?') + '</h1><p class="muted">Objectif du jour : <b>' + Math.min(today, goal) + ' / ' + goal + '</b> questions' + (streak ? ' · ' + icon('fire') + ' série de <b>' + streak + ' jour' + (streak > 1 ? 's' : '') + '</b>' : '') + '</p><div class="bar" style="max-width:340px"><i style="width:' + Math.min(100, (today / goal) * 100) + '%;background:var(--ok)"></i></div></div>' + ring(gm, pct(gm) + '%<small>maîtrise</small>') + '</div>';
    h += '<div class="next" style="margin:20px 0"><div style="flex:1"><b style="font-size:1.08rem">' + esc(nx.t) + '</b><p>' + esc(nx.p) + '</p></div>' + (nx.href ? '<a class="btn" href="' + nx.href + '">' + esc(nx.b) + '</a>' : '<button class="btn" id="nxBtn">' + esc(nx.b) + '</button>') + '</div>';
    h += '<div class="stats"><div class="stat"><b>' + P.dueCount() + '</b><span>à réviser</span></div><div class="stat"><b>' + answered + '</b><span>éléments travaillés</span></div><div class="stat"><b>' + mDone + ' / ' + APP.missions.length + '</b><span>TP pratiques</span></div><div class="stat"><b>' + st.xp + '</b><span>points d\'XP</span></div></div>';
    h += '<div class="section-title"><h2>Chapitres</h2><a href="#/cours" class="small">Tout voir</a></div><div class="grid g2">';
    for (const c of APP.chapters) {
      const s = P.chapterStats(c);
      h += '<a class="card click ch-card" data-ch="' + c.id + '" href="#/ch/' + c.id + '"><div class="row" style="gap:12px;flex-wrap:nowrap"><span class="chip-ch">' + c.num + '</span><div style="flex:1;min-width:0"><b>' + esc(c.title) + '</b><div class="muted small">' + esc(c.subtitle) + ' · ' + c.quiz.length + ' quiz · ' + c.exercises.length + ' commandes · ' + APP.missions.filter((m) => m.chapter === c.id).length + ' TP</div></div><b>' + pct(s.total) + '%</b></div><div class="bar" style="margin-top:12px"><i style="width:' + pct(s.total) + '%"></i></div></a>';
    }
    h += '</div><div class="section-title"><h2>Accès rapide</h2></div><div class="grid g4">';
    const qa = [['quiz', 'Quiz rapide', '10 questions de cours', 'q'], ['cmd', 'Tape la commande', '10 exercices pratiques', 'x'], ['term', 'Terminal libre', 'Debian simulé hors ligne', 't'], ['clock', 'Examen blanc', '20 questions, 25 min', 'e']];
    for (const [i, t, s, k] of qa) h += '<button class="card click qa" data-qa="' + k + '"><span class="ico">' + icon(i) + '</span><b>' + t + '</b><span>' + s + '</span></button>';
    h += '</div><p class="muted small" style="margin-top:26px">' + totalQ + ' questions de cours · ' + totalX + ' exercices de commandes · ' + APP.missions.length + ' TP guidés · terminal Linux simulé. Tout fonctionne sans connexion internet ; ta progression est enregistrée sur cet appareil.</p></div>';
    main.innerHTML = h;
    if ($('#nxBtn')) $('#nxBtn').onclick = nx.go;
    $$('[data-qa]').forEach((b) => (b.onclick = () => {
      const k = b.dataset.qa;
      if (k === 'q') startSession({ title: 'Quiz rapide', items: pickItems(allOf('quiz'), 10), back: '#/' });
      if (k === 'x') startSession({ title: 'Tape la commande', items: pickItems(allOf('exo'), 10), back: '#/' });
      if (k === 't') location.hash = '#/terminal';
      if (k === 'e') startExam();
    }));
  }

  /* ================= COURS ================= */
  function pageCours() {
    let h = '<div class="page"><div class="kicker">Programme</div><h1>Cours et TP</h1><p class="muted">4 chapitres : chaque cours est accompagné de son TP. Lis les fiches, apprends les commandes, puis mets-les en pratique dans le terminal simulé.</p><div class="grid" style="margin-top:18px">';
    for (const c of APP.chapters) {
      const s = P.chapterStats(c);
      const ms = APP.missions.filter((m) => m.chapter === c.id);
      h += '<div class="card ch-card" data-ch="' + c.id + '"><div class="spread"><div class="row" style="flex-wrap:nowrap"><span class="chip-ch">' + c.num + '</span><div><h2 style="margin:0">' + esc(c.title) + '</h2><div class="muted small">' + esc(c.subtitle) + '</div></div></div><b style="font-size:1.3rem">' + pct(s.total) + '%</b></div><div class="bar" style="margin:12px 0"><i style="width:' + pct(s.total) + '%"></i></div>';
      h += '<div class="grid g4 small"><div><b>' + s.read + '/' + s.secs + '</b><div class="muted">fiches lues</div></div><div><b>' + pct(s.mq) + '%</b><div class="muted">quiz maîtrisés</div></div><div><b>' + pct(s.mx) + '%</b><div class="muted">commandes maîtrisées</div></div><div><b>' + s.mDone + '/' + ms.length + '</b><div class="muted">TP réussis</div></div></div>';
      h += '<div class="row" style="margin-top:14px"><a class="btn sm" href="#/ch/' + c.id + '">Ouvrir</a><a class="btn sm ghost" href="#/ch/' + c.id + '/quiz">Quiz</a><a class="btn sm ghost" href="#/ch/' + c.id + '/exos">Commandes</a><a class="btn sm ghost" href="#/ch/' + c.id + '/tp">TP pratiques</a></div></div>';
    }
    main.innerHTML = h + '</div></div>';
  }
  function pageChapter(id, tab) {
    const c = chOf(id);
    if (!c) { pageCours(); return; }
    const s = P.chapterStats(c);
    const st = P.state();
    const tabs = [['fiches', 'Fiches (' + c.sections.length + ')'], ['commandes', 'Commandes (' + c.commands.length + ')'], ['quiz', 'Quiz (' + c.quiz.length + ')'], ['exos', 'Tape la commande (' + c.exercises.length + ')'], ['tp', 'TP pratiques (' + APP.missions.filter((m) => m.chapter === c.id).length + ')']];
    let h = '<div class="page" data-ch="' + c.id + '"><div class="row" style="flex-wrap:nowrap;gap:14px"><span class="chip-ch" style="width:46px;height:46px;font-size:1.2rem">' + c.num + '</span><div style="flex:1;min-width:0"><div class="kicker">' + esc(c.subtitle) + '</div><h1 style="margin:0">' + esc(c.title) + '</h1></div><b style="font-size:1.4rem">' + pct(s.total) + '%</b></div>';
    h += '<div class="bar ch-card" data-ch="' + c.id + '" style="margin:14px 0 4px;border:0"><i style="width:' + pct(s.total) + '%;background:var(--chc)"></i></div>';
    h += '<div class="tabs">' + tabs.map(([k, l]) => '<a href="#/ch/' + c.id + '/' + k + '" class="' + (tab === k ? 'on' : '') + '">' + l + '</a>').join('') + '</div>';
    if (tab === 'fiches') {
      const first = c.sections.find((x) => !st.sections[x.id]) || c.sections[0];
      h += '<div class="spread" style="margin-bottom:12px"><p class="muted" style="margin:0">' + s.read + ' fiche' + (s.read > 1 ? 's' : '') + ' lue' + (s.read > 1 ? 's' : '') + ' sur ' + s.secs + '.</p>' + (first ? '<a class="btn sm" href="#/fiche/' + c.id + '/' + first.id + '">' + (s.read ? 'Continuer la lecture' : 'Commencer la lecture') + '</a>' : '') + '</div><div class="card flat sec-list" style="padding:0">';
      for (const x of c.sections) h += '<a href="#/fiche/' + c.id + '/' + x.id + '"><span class="check ' + (st.sections[x.id] ? 'on' : '') + '">✓</span><span style="flex:1"><b>' + esc(x.title) + '</b>' + (x.src ? '<div class="muted small">' + esc(x.src) + '</div>' : '') + '</span>›</a>';
      h += '</div>';
    } else if (tab === 'commandes') {
      h += '<div class="spread" style="margin-bottom:12px"><p class="muted" style="margin:0">Toutes les commandes du cours et du TP. Clique « Essayer » pour la tester dans le terminal.</p><button class="btn sm" id="flashBtn">' + icon('flash') + ' Flashcards du chapitre</button></div><div class="card flat" style="padding:0">' + c.commands.map(cmdCard).join('') + '</div>';
    } else if (tab === 'quiz' || tab === 'exos') {
      const pool = tab === 'quiz' ? c.quiz : c.exercises;
      const lv = { new: 0, weak: 0, learn: 0, master: 0 };
      for (const x of pool) lv[P.level(x.id)]++;
      const errs = pool.filter((x) => st.items[x.id] && st.items[x.id].ko > 0 && st.items[x.id].box <= 2).length;
      h += '<div class="card"><div class="grid g4 small" style="margin-bottom:14px"><div><span class="lvl new"></span><b>' + lv.new + '</b> jamais vues</div><div><span class="lvl weak"></span><b>' + lv.weak + '</b> à revoir</div><div><span class="lvl learn"></span><b>' + lv.learn + '</b> en cours</div><div><span class="lvl master"></span><b>' + lv.master + '</b> maîtrisées</div></div>';
      h += '<div class="row"><button class="btn" data-start="smart">' + (tab === 'quiz' ? 'Quiz' : 'Session') + ' de 10 (intelligent)</button><button class="btn ghost" data-start="all">Tout (' + pool.length + ', mélangé)</button>' + (errs ? '<button class="btn ghost" data-start="errors">' + icon('redo') + ' Mes erreurs (' + errs + ')</button>' : '') + '</div>';
      h += '<p class="muted small" style="margin:12px 0 0">' + (tab === 'quiz' ? 'Chaque mauvaise réponse est expliquée : pourquoi elle est fausse et pourquoi la bonne est juste.' : 'Tape la commande comme dans un vrai terminal. Le correcteur accepte les variantes équivalentes (ordre des options, -la = -al…) et explique précisément chaque erreur.') + '</p></div>';
      h += '<div class="section-title"><h2>' + (tab === 'quiz' ? 'Questions' : 'Exercices') + '</h2></div><div class="card flat" style="padding:0">';
      pool.forEach((x, i) => { h += '<div class="mission-item" style="cursor:pointer" data-one="' + x.id + '"><span class="lvl ' + P.level(x.id) + '"></span><span style="flex:1;min-width:0">' + md(tab === 'quiz' ? x.q : x.prompt) + '</span><span class="pill">' + (x.level === 3 ? 'difficile' : x.level === 2 ? 'moyen' : 'facile') + '</span></div>'; });
      h += '</div>';
    } else if (tab === 'tp') {
      const ms = APP.missions.filter((m) => m.chapter === c.id);
      h += '<p class="muted">Chaque TP pratique se déroule dans un <b>terminal Debian simulé</b> (machine neuve à chaque fois). Les étapes sont validées automatiquement en observant l\'état de la machine ; un indice et la solution sont disponibles.</p><div class="card flat" style="padding:0">';
      ms.forEach((m, i) => {
        const pr = st.missions[m.id];
        const n = pr ? Object.keys(pr.steps).length : 0;
        h += '<a class="mission-item" href="#/tp/' + m.id + '"><span class="mi-n ' + (pr && pr.done ? 'done' : n ? 'part' : '') + '">' + (pr && pr.done ? '✓' : i + 1) + '</span><span style="flex:1;min-width:0"><b>' + esc(m.title) + '</b><div class="muted small">' + esc(m.tp || '') + ' · ' + m.steps.length + ' étapes' + (n && !(pr && pr.done) ? ' · ' + n + ' faites' : '') + '</div></span>›</a>';
      });
      h += '</div>';
    }
    main.innerHTML = h + '</div>';
    if ($('#flashBtn')) $('#flashBtn').onclick = () => startSession({ title: 'Flashcards — ' + c.title, items: pickItems(c.flashcards.concat(c.commands), 15), back: '#/ch/' + c.id + '/commandes' });
    $$('[data-start]').forEach((b) => (b.onclick = () => { const pool = tab === 'quiz' ? c.quiz : c.exercises; const mode = b.dataset.start; startSession({ title: (tab === 'quiz' ? 'Quiz' : 'Commandes') + ' — ' + c.title, items: pickItems(pool, mode === 'all' ? pool.length : 10, mode), back: '#/ch/' + c.id + '/' + tab }); }));
    $$('[data-one]').forEach((b) => (b.onclick = () => { const it = findItem(b.dataset.one); startSession({ title: 'Question', items: [it], back: '#/ch/' + c.id + '/' + tab }); }));
    bindTry(main);
  }
  function cmdCard(x, hl) {
    const H = (s) => (hl ? highlight(esc(s || ''), hl) : esc(s || ''));
    const ex = x.example || '';
    return '<div class="cmd"><div class="cmd-h"><span class="cmd-name">' + H(x.cmd) + '</span>' + (x.syntax ? '<span class="cmd-syn">' + H(x.syntax) + '</span>' : '') + '</div><p>' + (hl ? H(x.desc) : md(x.desc || '')) + '</p>' + (x.details ? '<p class="muted small">' + (hl ? H(x.details) : md(x.details)) + '</p>' : '') + (ex ? '<div class="ex">$ ' + H(ex) + ' <button class="btn sm ghost" data-try="' + esc(ex.split('\n')[0]) + '" style="margin-left:6px;padding:2px 8px">Essayer</button></div>' : '') + (x.src ? '<div class="src">' + esc(x.src) + '</div>' : '') + '</div>';
  }
  function highlight(html, q) { if (!q) return html; const re = new RegExp('(' + q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi'); return html.replace(/(<[^>]+>)|([^<]+)/g, (m, tag, txt) => tag || txt.replace(re, '<mark>$1</mark>')); }
  function bindTry(root) { $$('[data-try]', root).forEach((b) => (b.onclick = (e) => { e.preventDefault(); e.stopPropagation(); location.hash = '#/terminal?cmd=' + encodeURIComponent(b.dataset.try); })); }

  /* ---------- fiche ---------- */
  function decorateCode(root) {
    for (const pre of $$('pre.code', root)) {
      const lines = pre.textContent.split('\n');
      pre.innerHTML = lines.map((l) => {
        const m = /^(\$ |# (?=sudo|apt|ls))(.*)$/.exec(l);
        if (m) {
          const parts = /^(.*?)(\s{2,}#.*)?$/.exec(m[2]);
          return '<span class="pr">' + esc(m[1]) + '</span><span class="cl" data-try="' + esc(parts[1].trim()) + '" title="Essayer dans le terminal">' + esc(parts[1]) + '</span>' + (parts[2] ? '<span class="cm">' + esc(parts[2]) + '</span>' : '');
        }
        if (/^\s*#/.test(l)) return '<span class="cm">' + esc(l) + '</span>';
        return esc(l);
      }).join('\n');
    }
  }
  function pageFiche(chId, secId) {
    const c = chOf(chId);
    if (!c) return pageCours();
    const i = Math.max(0, c.sections.findIndex((s) => s.id === secId));
    const s = c.sections[i];
    const prev = c.sections[i - 1], next = c.sections[i + 1];
    let h = '<div class="page" data-ch="' + c.id + '" style="max-width:820px"><a href="#/ch/' + c.id + '" class="small">← ' + esc(c.title) + '</a><div class="kicker" style="margin-top:10px">Fiche ' + (i + 1) + ' / ' + c.sections.length + (s.src ? ' · ' + esc(s.src) : '') + '</div><h1>' + esc(s.title) + '</h1>';
    h += '<article class="fiche">' + s.html + '</article><div id="endMark"></div>';
    h += '<p class="muted small">Astuce : clique sur une commande d\'un bloc de code pour l\'essayer dans le terminal simulé.</p>';
    h += '<div class="fiche-nav">' + (prev ? '<a class="btn ghost" href="#/fiche/' + c.id + '/' + prev.id + '">← ' + esc(prev.title.slice(0, 40)) + '</a>' : '<span></span>') + (next ? '<a class="btn" id="nextSec" href="#/fiche/' + c.id + '/' + next.id + '">' + esc(next.title.slice(0, 40)) + ' →</a>' : '<button class="btn" id="endCh">Tester le chapitre</button>') + '</div></div>';
    main.innerHTML = h;
    decorateCode(main);
    bindTry(main);
    const mark = () => { if (!P.state().sections[s.id]) { P.markSection(s.id); } };
    const io = new IntersectionObserver((en) => { if (en.some((e) => e.isIntersecting)) { mark(); io.disconnect(); } });
    io.observe($('#endMark'));
    cleanup = () => io.disconnect();
    if ($('#nextSec')) $('#nextSec').addEventListener('click', mark);
    if ($('#endCh')) $('#endCh').onclick = () => { mark(); startSession({ title: 'Quiz — ' + c.title, items: pickItems(c.quiz, 10), back: '#/ch/' + c.id }); };
  }

  /* ================= SESSIONS ================= */
  let S = null;
  function startSession(o) {
    const items = (o.items || []).filter(Boolean);
    if (!items.length) { toast('Rien à réviser pour l\'instant !'); return; }
    S = { title: o.title, items, i: 0, results: [], back: o.back || '#/entrainement', exam: !!o.exam, start: Date.now(), limit: o.limit || null, gen: o.gen || null };
    if (location.hash === '#/session') route(); else location.hash = '#/session';
  }
  APP.startSession = startSession;
  function startSmart() {
    const goal = P.setting('goal') || 20;
    const pool = allOf('quiz').concat(allOf('exo'));
    const cards = allOf('card').filter((x) => P.isDue(x.id));
    const items = pickItems(pool, Math.max(8, goal - Math.min(cards.length, 6))).concat(cards.slice(0, 6));
    startSession({ title: 'Révision du jour', items: U.shuffle(items), back: '#/entrainement' });
  }
  function startExam(chs) {
    const q = U.shuffle(allOf('quiz', chs)).slice(0, 12);
    const x = U.shuffle(allOf('exo', chs)).slice(0, 6);
    const g = [APP.genRandom(), APP.genRandom()];
    startSession({ title: 'Examen blanc', items: U.shuffle(q.concat(x, g)), exam: true, limit: 25 * 60, back: '#/entrainement' });
  }
  function itemKind(it) { if (it.kind === 'gen') return it.type === 'qcm' ? 'qcm' : 'input'; if (it.kind === 'quiz') return it.type === 'input' ? 'input' : 'qcm'; if (it.kind === 'exo') return 'exo'; return 'card'; }
  function pageSession() {
    if (!S) { location.hash = '#/entrainement'; return; }
    if (S.i >= S.items.length) return renderSummary();
    const it = S.items[S.i];
    const k = itemKind(it);
    const ch = it.chapter ? chOf(it.chapter) : null;
    const total = S.items.length;
    let h = '<div class="page"><div class="sess"><div class="sess-top"><a class="btn sm ghost" href="' + S.back + '" id="quitS">✕</a><div class="bar"><i style="width:' + (S.i / total) * 100 + '%"></i></div><span class="small muted">' + (S.i + 1) + '/' + total + '</span>' + (S.limit ? '<span class="pill warn" id="timer"></span>' : '') + '</div>';
    h += '<div class="qcard" data-ch="' + (it.chapter || '') + '"><div class="qmeta">' + (S.exam ? '<span class="pill warn">Examen</span>' : '') + (ch ? '<span class="pill">Ch. ' + ch.num + '</span>' : '<span class="pill acc">Calcul</span>') + '<span class="pill acc">' + { qcm: 'QCM', input: 'Réponse courte', exo: 'Tape la commande', card: 'Flashcard' }[k] + '</span>' + (it.src ? '<span class="pill">' + esc(it.src) + '</span>' : '') + (it.level === 3 ? '<span class="pill ko">difficile</span>' : it.level === 2 ? '<span class="pill warn">moyen</span>' : '') + '</div>';
    if (k === 'qcm') {
      const order = it.choices.map((c, i) => i);
      const shuf = !it.choices.some((c) => /toutes|aucune|les deux|A et B/i.test(c)) && !it.gen;
      const ord = shuf ? U.shuffle(order) : order;
      h += '<div class="qtext">' + md(it.q) + '</div><div class="choices">' + ord.map((oi, n) => '<button class="choice" data-o="' + oi + '"><span class="k">' + (n + 1) + '</span><span>' + md(it.choices[oi]) + '</span></button>').join('') + '</div>';
    } else if (k === 'input') {
      h += '<div class="qtext">' + md(it.q) + '</div><form class="ansin" id="ansF"><input class="field" id="ans" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="' + esc(it.placeholder || 'Ta réponse') + '"><button class="btn">Valider</button></form>';
    } else if (k === 'exo') {
      h += '<div class="qtext">' + md(it.prompt) + '</div>' + (it.context ? '<div class="qctx">' + md(it.context) + '</div>' : '') + '<form class="cmdin" id="ansF"><span class="pr">etudiant@debian:~$</span><input id="ans" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" aria-label="Commande"><button class="btn sm">Valider</button></form>' + (!S.exam && it.hint ? '<div class="row" style="margin-top:10px"><button class="btn sm ghost" id="hintB">Indice</button></div><div id="hintBox"></div>' : '');
    } else {
      const front = it.kind === 'cmd' ? '<div class="lbl">Commande</div><div class="face"><code style="font-size:1.1rem">' + esc(it.cmd) + '</code>' + (it.syntax ? '<div class="muted small" style="margin-top:8px"><code>' + esc(it.syntax) + '</code></div>' : '') + '<p class="muted small" style="margin-top:14px">Que fait-elle ? Quelles options importantes ?</p></div>' : '<div class="lbl">Notion</div><div class="face"><b>' + md(it.front) + '</b><p class="muted small" style="margin-top:14px">Explique-la de tête, puis retourne la carte.</p></div>';
      const back = it.kind === 'cmd' ? '<div class="face back" style="text-align:left">' + md(it.desc || '') + (it.details ? '<p class="muted small">' + md(it.details) + '</p>' : '') + (it.example ? '<div class="fb ok" style="margin-top:8px;padding:8px 10px"><code>$ ' + esc(it.example) + '</code></div>' : '') + '</div>' : '<div class="face back" style="text-align:left">' + md(it.back) + '</div>';
      h += '<div class="flash" id="flashC"><div>' + front + '</div></div><div id="flashBack" class="hidden">' + back + '</div><div id="flashAct"><button class="btn block" id="flipB">Retourner la carte</button></div>';
    }
    h += '<div id="fb"></div></div><div class="sess-actions"><span class="small muted">' + esc(S.title) + '</span><span class="small muted">' + (k === 'qcm' ? 'Touches 1-' + (it.choices ? it.choices.length : 4) + ' pour répondre' : '') + '</span></div></div></div>';
    main.innerHTML = h;
    if (S.limit) {
      const tick = () => { const left = S.limit - Math.floor((Date.now() - S.start) / 1000); const t = $('#timer'); if (!t) return; if (left <= 0) { clearInterval(iv); S.i = S.items.length; route(); return; } t.textContent = Math.floor(left / 60) + ':' + String(left % 60).padStart(2, '0'); };
      const iv = setInterval(tick, 1000); tick();
      cleanup = () => clearInterval(iv);
    }
    const next = () => { S.i++; pageSession(); window.scrollTo(0, 0); };
    const record = (ok, answer, extra) => { S.results.push(Object.assign({ it, ok, answer }, extra || {})); if (it.kind === 'gen') P.record(it.id, ok, { answer }); else P.record(it.id, ok, { answer }); };
    const contBtn = (label) => '<div class="row" style="margin-top:14px;justify-content:flex-end"><button class="btn" id="contB">' + (label || (S.i + 1 < S.items.length ? 'Continuer' : 'Voir le bilan')) + ' →</button></div>';
    const bindCont = () => { const b = $('#contB'); if (b) { b.onclick = next; setTimeout(() => b.focus(), 30); } };
    const keyH = (e) => {
      if (k === 'qcm' && /^[1-9]$/.test(e.key) && !$('.choice:disabled')) { const b = $$('.choice')[+e.key - 1]; if (b) b.click(); }
      else if (e.key === 'Enter' && $('#contB') && document.activeElement !== $('#contB') && document.activeElement.tagName !== 'INPUT') { e.preventDefault(); $('#contB').click(); }
    };
    document.addEventListener('keydown', keyH);
    const prevClean = cleanup;
    cleanup = () => { document.removeEventListener('keydown', keyH); if (prevClean) prevClean(); };

    if (k === 'qcm') {
      $$('.choice').forEach((b) => (b.onclick = () => {
        const o = +b.dataset.o, ok = o === it.answer;
        record(ok, it.choices[o], { chosen: o });
        if (S.exam) { $$('.choice').forEach((x) => (x.disabled = true)); b.classList.add('ok'); b.style.borderColor = 'var(--accent)'; b.classList.remove('ok'); setTimeout(next, 250); return; }
        $$('.choice').forEach((x) => { x.disabled = true; const xo = +x.dataset.o; if (xo === it.answer) x.classList.add('ok'); else if (xo === o) x.classList.add('ko'); });
        $('#fb').innerHTML = feedbackQcm(it, o) + contBtn();
        bindCont();
      }));
    } else if (k === 'input') {
      const inp = $('#ans'); setTimeout(() => inp.focus(), 30);
      $('#ansF').onsubmit = (e) => {
        e.preventDefault();
        const v = inp.value.trim(); if (!v) return;
        const normF = it.norm || ((x) => U.norm(x).replace(/^-(?=[-rwxst]{9}$)/, ''));
        const ok = it.accept.some((a) => normF(a) === normF(v) || U.norm(a) === U.norm(v));
        record(ok, v);
        inp.disabled = true; $('#ansF button').disabled = true;
        if (S.exam) return next();
        $('#fb').innerHTML = '<div class="fb ' + (ok ? 'ok' : 'ko') + '"><h4>' + (ok ? '✓ Correct' : '✗ Incorrect') + '</h4>' + (ok ? '' : '<div>Ta réponse : <code>' + esc(v) + '</code></div><div>Réponse attendue : <code>' + esc(it.accept[0]) + '</code>' + (it.accept.length > 1 ? ' <span class="muted small">(ou ' + it.accept.slice(1).map((a) => '<code>' + esc(a) + '</code>').join(', ') + ')</span>' : '') + '</div>') + (it.explain ? '<div class="exp">' + md(it.explain) + '</div>' : '') + '</div>' + contBtn();
        bindCont();
      };
    } else if (k === 'exo') {
      const inp = $('#ans'); setTimeout(() => inp.focus(), 30);
      let attempts = 0;
      if ($('#hintB')) $('#hintB').onclick = () => { $('#hintBox').innerHTML = '<div class="hintbox">' + md(it.hint) + '</div>'; $('#hintB').remove(); S.hintUsed = true; };
      $('#ansF').onsubmit = (e) => {
        e.preventDefault();
        const v = inp.value.trim(); if (!v) return;
        const r = APP.checkCommand(it, v);
        attempts++;
        if (attempts === 1) record(r.ok, v, { res: r });
        if (S.exam) return next();
        if (r.ok) {
          inp.disabled = true; $('#ansF button').disabled = true;
          const others = it.answers.filter((a) => a !== r.expected);
          $('#fb').innerHTML = '<div class="fb ok"><h4>✓ ' + (attempts > 1 ? 'Correct (au ' + attempts + 'e essai)' : 'Correct !') + '</h4>' + (r.notes.length ? '<ul>' + r.notes.map((n) => '<li>' + md(n) + '</li>').join('') + '</ul>' : '') + '<div class="exp"><b>Décomposition</b><br>' + md(it.explain || '') + (others.length ? '<div class="small muted" style="margin-top:6px">Autre(s) réponse(s) acceptée(s) : ' + others.map((a) => '<code>' + esc(a) + '</code>').join(' · ') + '</div>' : '') + '</div><div class="row" style="margin-top:10px"><button class="btn sm ghost" data-try="' + esc(v) + '">Essayer dans le terminal</button></div></div>' + contBtn();
          bindTry($('#fb'));
          bindCont();
        } else {
          $('#fb').innerHTML = '<div class="fb ko"><h4>✗ Pas tout à fait</h4><ul>' + r.msgs.map((m) => '<li>' + md(m) + '</li>').join('') + '</ul>' + (r.mine ? '<div class="mine"><b>Ce que fait ta commande :</b> ' + r.mine.map(md).join(' ; ') + '</div>' : '') + '<div class="row" style="margin-top:12px"><button class="btn sm" id="retryB">Réessayer</button><button class="btn sm ghost" id="showB">Voir la réponse</button></div><div id="solBox"></div></div>';
          $('#retryB').onclick = () => { $('#fb').innerHTML = ''; inp.focus(); inp.select(); };
          $('#showB').onclick = () => {
            inp.disabled = true; $('#ansF button').disabled = true;
            $('#solBox').innerHTML = '<div class="exp"><div>Réponse attendue :</div><div class="ans">$ ' + esc(r.expected) + '</div>' + (it.answers.length > 1 ? '<div class="small muted">ou : ' + it.answers.filter((a) => a !== r.expected).map((a) => '<code>' + esc(a) + '</code>').join(' · ') + '</div>' : '') + '<p><b>Décomposition</b><br>' + md(it.explain || '') + '</p></div>' + contBtn();
            $('#retryB').remove(); $('#showB').remove();
            bindCont();
          };
          inp.select();
        }
      };
    } else {
      $('#flipB').onclick = $('#flashC').onclick = () => {
        $('#flashC').innerHTML = $('#flashBack').innerHTML;
        $('#flashAct').innerHTML = '<p class="small muted" style="text-align:center;margin:12px 0 0">Tu la connaissais ?</p><div class="rate"><button class="btn danger" data-r="0">À revoir</button><button class="btn ghost" data-r="1">Difficile</button><button class="btn ok" data-r="2">Facile</button></div>';
        $('#flashC').onclick = null;
        $$('[data-r]').forEach((b) => (b.onclick = () => { const g = +b.dataset.r; P.rateCard(it.id, g); S.results.push({ it, ok: g > 0, card: true }); next(); }));
      };
    }
  }
  function feedbackQcm(it, o) {
    const ok = o === it.answer;
    let h = '<div class="fb ' + (ok ? 'ok' : 'ko') + '"><h4>' + (ok ? '✓ Bonne réponse' : '✗ Mauvaise réponse') + '</h4>';
    if (!ok) {
      const why = it.why && (it.why[o] || it.why[String(o)]);
      h += '<div><b>Pourquoi « ' + md(it.choices[o]) + ' » est faux :</b> ' + (why ? md(why) : 'ce n\'est pas ce qui est décrit dans le cours.') + '</div>';
      h += '<div style="margin-top:6px"><b>Bonne réponse :</b> ' + md(it.choices[it.answer]) + '</div>';
    }
    h += '<div class="exp">' + md(it.explain || '') + '</div></div>';
    return h;
  }
  function renderSummary() {
    if (cleanup) { cleanup(); cleanup = null; }
    const res = S.results.filter((r) => !r.card);
    const cards = S.results.filter((r) => r.card);
    const ok = res.filter((r) => r.ok).length;
    const score = res.length ? ok / res.length : 1;
    const dur = Math.round((Date.now() - S.start) / 1000);
    let h = '<div class="page"><div class="sess summary"><div class="card" style="text-align:center"><div class="kicker">' + esc(S.title) + '</div><div class="big" style="color:' + (score >= 0.8 ? 'var(--ok)' : score >= 0.5 ? 'var(--warn)' : 'var(--ko)') + '">' + (res.length ? Math.round(score * 100) + '%' : '✓') + '</div><p class="muted">' + (res.length ? ok + ' bonne' + (ok > 1 ? 's' : '') + ' réponse' + (ok > 1 ? 's' : '') + ' sur ' + res.length : '') + (cards.length ? (res.length ? ' · ' : '') + cards.length + ' flashcard' + (cards.length > 1 ? 's' : '') : '') + ' · ' + Math.floor(dur / 60) + ' min ' + (dur % 60) + ' s</p>';
    h += '<p>' + (score >= 0.9 ? 'Excellent, c\'est maîtrisé !' : score >= 0.7 ? 'Bien joué ! Revois les quelques erreurs ci-dessous.' : score >= 0.5 ? 'C\'est en bonne voie : les erreurs reviendront bientôt en révision.' : 'Relis les fiches correspondantes puis retente : la répétition fait tout.') + '</p>';
    h += '<div class="row" style="justify-content:center">' + (res.some((r) => !r.ok) ? '<button class="btn" id="redoB">' + icon('redo') + ' Refaire mes erreurs</button>' : '') + '<button class="btn ghost" id="againB">Nouvelle session</button><a class="btn ghost" href="' + S.back + '">Retour</a></div></div>';
    const wrong = res.filter((r) => !r.ok);
    if (wrong.length) {
      h += '<div class="section-title"><h2>' + (S.exam ? 'Correction' : 'À retenir') + '</h2></div>';
      for (const r of (S.exam ? res : wrong)) {
        const it = r.it, k = itemKind(it);
        h += '<div class="miss" style="border-color:' + (r.ok ? 'var(--ok)' : 'var(--ko)') + '"><div><b>' + md(it.q || it.prompt || '') + '</b></div>';
        if (k === 'qcm') h += '<div class="small">Ta réponse : ' + md(it.choices[r.chosen] || '') + (r.ok ? ' ✓' : '<br>' + (it.why && it.why[r.chosen] ? '<span class="muted">' + md(it.why[r.chosen]) + '</span><br>' : '') + 'Bonne réponse : <b>' + md(it.choices[it.answer]) + '</b>') + '</div>';
        else if (k === 'exo') h += '<div class="small">Ta commande : <code>' + esc(r.answer) + '</code>' + (r.ok ? ' ✓' : '<br>' + (r.res ? r.res.msgs.map(md).join('<br>') : '') + '<br>Attendu : <code>' + esc(it.answers[0]) + '</code>') + '</div>';
        else h += '<div class="small">Ta réponse : <code>' + esc(r.answer) + '</code>' + (r.ok ? ' ✓' : ' — attendu : <code>' + esc(it.accept[0]) + '</code>') + '</div>';
        if (!r.ok) h += '<div class="small muted" style="margin-top:4px">' + md(it.explain || '') + '</div>';
        h += '</div>';
      }
    }
    h += '</div></div>';
    main.innerHTML = h;
    if ($('#redoB')) $('#redoB').onclick = () => startSession({ title: 'Mes erreurs', items: U.shuffle(wrong.map((r) => (r.it.kind === 'gen' ? APP.genQuestion(r.it.gen) : r.it))), back: S.back });
    $('#againB').onclick = () => { const kinds = S.items; if (S.exam) return startExam(); if (S.gen) return startGen(S.gen); startSession({ title: S.title, items: pickItems(kinds.filter((x) => x.kind !== 'gen').length ? [...new Set(kinds.map((x) => x.chapter))].flatMap((c) => { const ch = chOf(c); if (!ch) return []; const ks = new Set(kinds.map((x) => x.kind)); return [].concat(ks.has('quiz') ? ch.quiz : [], ks.has('exo') ? ch.exercises : [], ks.has('card') || ks.has('cmd') ? ch.flashcards.concat(ch.commands) : []); }) : [], kinds.length), back: S.back }); };
  }
  function startGen(type) {
    const items = [];
    for (let k = 0; k < 10; k++) items.push(type === 'mix' ? APP.genRandom() : APP.genQuestion(type));
    startSession({ title: type === 'mix' ? 'Calculs & réflexes' : APP.generators[type].label, items, back: '#/entrainement', gen: type });
  }

  /* ================= ENTRAÎNEMENT ================= */
  function pageTraining() {
    const st = P.state().items;
    const errs = allOf('quiz').concat(allOf('exo')).filter((x) => st[x.id] && st[x.id].ko > 0 && st[x.id].box <= 2);
    let sel = JSON.parse(sessionStorage.getItem('trSel') || 'null') || APP.chapters.map((c) => c.id);
    const due = P.dueCount();
    let h = '<div class="page"><div class="kicker">S\'entraîner</div><h1>Entraînement</h1><p class="muted">La <b>répétition espacée</b> repropose chaque élément au bon moment : juste après une erreur, puis à 1, 3, 7, 16 et 35 jours quand tu réussis.</p>';
    h += '<div class="next" style="margin:18px 0"><div style="flex:1"><b style="font-size:1.08rem">Révision du jour</b><p>' + (due ? due + ' élément' + (due > 1 ? 's' : '') + ' à revoir + des nouveautés' : 'Un mélange de quiz et de commandes adapté à ton niveau') + '</p></div><button class="btn" id="smartB">Commencer</button></div>';
    h += '<div class="card"><div class="spread"><b>Chapitres</b><div class="chips" id="chSel">' + APP.chapters.map((c) => '<button data-c="' + c.id + '" class="' + (sel.includes(c.id) ? 'on' : '') + '">Ch. ' + c.num + '</button>').join('') + '</div></div><div class="grid g3" style="margin-top:14px">';
    const T = [['quiz', 'quiz', 'Quiz de cours', 'QCM et réponses courtes, avec l\'explication de chaque mauvaise réponse.'], ['exo', 'cmd', 'Tape la commande', 'Écris la commande demandée ; les erreurs sont analysées option par option.'], ['card', 'flash', 'Flashcards', 'Commandes et notions : retourne la carte et auto-évalue-toi.']];
    for (const [k, i, t, d] of T) h += '<div class="card flat qa"><span class="ico">' + icon(i) + '</span><b>' + t + '</b><span>' + d + '</span><div class="row" style="margin-top:8px"><button class="btn sm" data-t="' + k + '" data-n="10">10</button><button class="btn sm ghost" data-t="' + k + '" data-n="20">20</button><button class="btn sm ghost" data-t="' + k + '" data-n="999">Tout</button></div></div>';
    h += '</div></div>';
    h += '<div class="grid g2" style="margin-top:14px"><div class="card qa"><span class="ico">' + icon('clock') + '</span><b>Examen blanc</b><span>20 questions mélangées (quiz, commandes, calculs) en 25 minutes. Correction détaillée à la fin.</span><div class="row" style="margin-top:8px"><button class="btn sm" id="examB">Lancer l\'examen</button></div></div>';
    h += '<div class="card qa"><span class="ico">' + icon('redo') + '</span><b>Mes erreurs</b><span>' + (errs.length ? errs.length + ' question' + (errs.length > 1 ? 's' : '') + ' ratée' + (errs.length > 1 ? 's' : '') + ' récemment.' : 'Aucune erreur en attente : bravo !') + '</span><div class="row" style="margin-top:8px"><button class="btn sm" id="errB" ' + (errs.length ? '' : 'disabled') + '>Les retravailler</button></div></div></div>';
    h += '<div class="section-title"><h2>Calculs & réflexes</h2><span class="muted small">exercices générés à l\'infini</span></div><div class="card"><div class="chips">';
    for (const [k, g] of Object.entries(APP.generators)) h += '<button data-g="' + k + '">' + esc(g.label) + '</button>';
    h += '</div><div class="row" style="margin-top:12px"><button class="btn sm" data-g="mix">' + icon('calc') + ' Mélange de tout</button></div></div></div>';
    main.innerHTML = h;
    const save = () => sessionStorage.setItem('trSel', JSON.stringify(sel));
    $$('#chSel button').forEach((b) => (b.onclick = () => { const c = b.dataset.c; sel = sel.includes(c) ? sel.filter((x) => x !== c) : sel.concat(c); if (!sel.length) sel = [c]; save(); $$('#chSel button').forEach((x) => x.classList.toggle('on', sel.includes(x.dataset.c))); }));
    $('#smartB').onclick = startSmart;
    $$('[data-t]').forEach((b) => (b.onclick = () => { const k = b.dataset.t, n = +b.dataset.n; const pool = allOf(k, sel); startSession({ title: { quiz: 'Quiz', exo: 'Tape la commande', card: 'Flashcards' }[k], items: pickItems(pool, Math.min(n, pool.length), n >= 999 ? 'all' : 'smart'), back: '#/entrainement' }); }));
    $('#examB').onclick = () => startExam(sel);
    $('#errB').onclick = () => startSession({ title: 'Mes erreurs', items: U.shuffle(errs).slice(0, 20), back: '#/entrainement' });
    $$('[data-g]').forEach((b) => (b.onclick = () => startGen(b.dataset.g)));
  }

  /* ================= TERMINAL LIBRE ================= */
  let sandbox = null;
  function pageTerminal(q) {
    main.innerHTML = '<div class="page wide term-page"><div class="spread" style="margin-bottom:10px"><div><div class="kicker">Bac à sable</div><h1 style="margin:0">Terminal Debian simulé</h1></div><div class="row"><button class="btn sm ghost" id="helpT">Commandes disponibles</button><button class="btn sm ghost" id="resetT">Réinitialiser la machine</button></div></div><div id="termHost"></div><p class="muted small" style="margin-top:8px">Tout est simulé dans ton navigateur : tu peux tout casser sans risque. Machine VM-A (192.168.1.10) + VM-B (192.168.1.20, compte etudiant / etudiant) pour SSH. L\'état est conservé tant que l\'application reste ouverte.</p></div>';
    const host = $('#termHost');
    if (!sandbox) { const div = document.createElement('div'); sandbox = new APP.SIM.TerminalUI(div, {}); }
    host.append(sandbox.root);
    sandbox.renderDesk(); sandbox.scroll();
    setTimeout(() => sandbox.input.focus(), 50);
    if (q.cmd) { sandbox.type(q.cmd); history.replaceState(null, '', '#/terminal'); }
    $('#resetT').onclick = () => { if (!confirm('Repartir d\'une machine neuve ? (fichiers, utilisateurs et processus seront perdus)')) return; sandbox.destroy(); sandbox.root.remove(); sandbox = null; pageTerminal({}); };
    $('#helpT').onclick = () => {
      const names = Object.keys(APP.SIM.cmds).concat(APP.SIM.BUILTINS.filter((b) => b.length > 1)).filter((v, i, a) => a.indexOf(v) === i).sort();
      sandbox.active.sh.termOut('\nCommandes disponibles dans le simulateur (' + names.length + ') :\n' + names.join('  ') + '\n\nAstuce : « man commande » pour l\'aide · Tab pour compléter · ↑ pour l\'historique.\n', 'dim');
      sandbox.scroll();
    };
  }

  /* ================= TP PRATIQUE ================= */
  let runner = null;
  function pageMission(id) {
    const m = APP.missions.find((x) => x.id === id);
    if (!m) { pageCours(); return; }
    const list = APP.missions.filter((x) => x.chapter === m.chapter);
    const idx = list.indexOf(m);
    const nextM = list[idx + 1];
    main.innerHTML = '<div class="page wide"><div class="spread" style="margin-bottom:10px"><a href="#/ch/' + m.chapter + '/tp" class="small">← TP pratiques du chapitre ' + chOf(m.chapter).num + '</a><span class="small muted">Mission ' + (idx + 1) + ' / ' + list.length + '</span></div><div id="mHost"></div></div>';
    runner = new APP.MissionRunner(m, $('#mHost'), { next: nextM ? () => { location.hash = '#/tp/' + nextM.id; } : () => { location.hash = '#/ch/' + m.chapter + '/tp'; }, onReset: (r) => { runner = r; } });
    cleanup = () => { if (runner) runner.destroy(); runner = null; };
  }

  /* ================= MÉMO ================= */
  function pageMemo(q) {
    let filter = q.ch || 'all';
    let h = '<div class="page"><div class="kicker">Référence</div><h1>Mémo des commandes</h1><div class="search" style="margin:14px 0 10px">' + icon('search') + '<input class="field" id="memoQ" placeholder="Rechercher : chmod, port 22, signal, récursif…" value="' + esc(q.q || '') + '" autocomplete="off"></div><div class="chips" id="memoCh"><button data-c="all" class="on">Tous</button>' + APP.chapters.map((c) => '<button data-c="' + c.id + '">Ch. ' + c.num + ' · ' + esc(c.title) + '</button>').join('') + '</div><div id="memoRes" style="margin-top:14px"></div></div>';
    main.innerHTML = h;
    const render = () => {
      const t = $('#memoQ').value.trim();
      const tl = U.norm(t);
      let out = '';
      let n = 0;
      for (const c of APP.chapters) {
        if (filter !== 'all' && c.id !== filter) continue;
        const list = c.commands.filter((x) => !tl || U.norm([x.cmd, x.syntax, x.desc, x.details, x.example].join(' ')).includes(tl));
        if (!list.length) continue;
        n += list.length;
        out += '<div class="section-title" data-ch="' + c.id + '"><h2><span class="chip-ch" style="width:26px;height:26px;font-size:.8rem;border-radius:8px;margin-right:8px">' + c.num + '</span>' + esc(c.title) + '</h2><span class="muted small">' + list.length + '</span></div><div class="card flat" style="padding:0">' + list.map((x) => cmdCard(x, t)).join('') + '</div>';
      }
      $('#memoRes').innerHTML = out || '<div class="empty">Aucune commande trouvée pour « ' + esc(t) + ' ».</div>';
      bindTry($('#memoRes'));
    };
    $('#memoQ').oninput = render;
    $$('#memoCh button').forEach((b) => (b.onclick = () => { filter = b.dataset.c; $$('#memoCh button').forEach((x) => x.classList.toggle('on', x === b)); render(); }));
    render();
    setTimeout(() => $('#memoQ').focus(), 50);
  }

  /* ================= PROGRÈS ================= */
  function pageProgress() {
    const st = P.state();
    const gm = globalMastery();
    let h = '<div class="page"><div class="kicker">Suivi</div><h1>Ma progression</h1>';
    h += '<div class="hero" style="margin:10px 0 18px"><div><p class="muted" style="margin:0">Maîtrise globale (fiches lues, quiz, commandes, flashcards et TP pondérés).</p><div class="stats" style="margin-top:12px"><div class="stat"><b>' + P.streak() + ' j</b><span>série en cours</span></div><div class="stat"><b>' + Object.keys(st.items).length + '</b><span>éléments travaillés</span></div><div class="stat"><b>' + accuracyAll() + '</b><span>réussite globale</span></div><div class="stat"><b>' + st.xp + '</b><span>XP</span></div></div></div>' + ring(gm, pct(gm) + '%<small>maîtrise</small>', 130) + '</div>';
    h += '<div class="card"><b>Activité (12 dernières semaines)</b><div style="margin-top:10px">' + heatmap() + '</div></div>';
    h += '<div class="section-title"><h2>Par chapitre</h2></div><div class="card" style="overflow-x:auto"><table class="ptable"><tr><th>Chapitre</th><th>Fiches</th><th>Quiz</th><th>Commandes</th><th>Flashcards</th><th>TP</th><th>Réussite</th></tr>';
    for (const c of APP.chapters) {
      const s = P.chapterStats(c);
      const b = (v) => '<div class="bar"><i style="width:' + pct(v) + '%"></i></div><span class="small muted">' + pct(v) + '%</span>';
      h += '<tr data-ch="' + c.id + '"><td><a href="#/ch/' + c.id + '"><b>' + c.num + '. ' + esc(c.title) + '</b></a></td><td>' + s.read + '/' + s.secs + '</td><td>' + b(s.mq) + '</td><td>' + b(s.mx) + '</td><td>' + b(s.mc) + '</td><td>' + s.mDone + '/' + s.missions + '</td><td>' + (s.accuracy == null ? '—' : pct(s.accuracy) + '%') + '</td></tr>';
    }
    h += '</table></div>';
    // points faibles
    const weak = Object.entries(st.items).filter(([id, it]) => it.ko > 0 && findItem(id)).sort((a, b) => b[1].ko - b[1].ok - (a[1].ko - a[1].ok) || b[1].lastWrong - a[1].lastWrong).slice(0, 10);
    h += '<div class="section-title"><h2>Points faibles</h2>' + (weak.length ? '<button class="btn sm" id="weakB">Les retravailler</button>' : '') + '</div><div class="card flat" style="padding:0">';
    if (!weak.length) h += '<div class="empty">Pas encore d\'erreurs enregistrées.</div>';
    for (const [id, it] of weak) {
      const x = findItem(id);
      h += '<div class="mission-item"><span class="lvl ' + P.level(id) + '"></span><span style="flex:1;min-width:0">' + md(x.q || x.prompt || x.front || x.cmd || '') + (it.wrongAnswer ? '<div class="small muted">Dernière réponse fausse : <code>' + esc(it.wrongAnswer) + '</code></div>' : '') + '</span><span class="pill ko">' + it.ko + ' erreur' + (it.ko > 1 ? 's' : '') + '</span></div>';
    }
    h += '</div>';
    h += '<div class="section-title"><h2>Réglages</h2></div><div class="card"><div class="grid g2"><label>Objectif quotidien<select class="field" id="goalS">' + [10, 20, 30, 50].map((g) => '<option ' + ((P.setting('goal') || 20) === g ? 'selected' : '') + '>' + g + '</option>').join('') + '</select></label><label>Thème<select class="field" id="themeS"><option value="auto">Automatique</option><option value="light">Clair</option><option value="dark">Sombre</option></select></label></div>';
    h += '<div class="hr"></div><b>Sauvegarde</b><p class="muted small">Ta progression est stockée uniquement sur cet appareil. Exporte-la pour la transférer ou la sauvegarder.</p><div class="row"><button class="btn sm ghost" id="expB">Exporter (.json)</button><label class="btn sm ghost" style="cursor:pointer">Importer<input type="file" id="impF" accept=".json,application/json" hidden></label><button class="btn sm danger" id="rstB">Tout réinitialiser</button></div></div></div>';
    main.innerHTML = h;
    $('#themeS').value = P.setting('theme') || 'auto';
    $('#themeS').onchange = (e) => { P.setting('theme', e.target.value); applyTheme(); };
    $('#goalS').onchange = (e) => { P.setting('goal', +e.target.value); toast('Objectif : ' + e.target.value + ' par jour'); };
    if ($('#weakB')) $('#weakB').onclick = () => startSession({ title: 'Points faibles', items: weak.map(([id]) => findItem(id)), back: '#/progres' });
    $('#expB').onclick = () => { const b = new Blob([P.export()], { type: 'application/json' }); const a = document.createElement('a'); a.href = URL.createObjectURL(b); a.download = 'linux-revision-progression-' + U.today() + '.json'; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 2000); };
    $('#impF').onchange = (e) => { const f = e.target.files[0]; if (!f) return; f.text().then((t) => { try { P.import(t); toast('Progression importée'); route(); } catch (err) { toast('Fichier invalide'); } }); };
    $('#rstB').onclick = () => { if (confirm('Effacer toute ta progression ? Cette action est irréversible.')) { P.reset(); toast('Progression réinitialisée'); route(); } };
  }
  function accuracyAll() { const it = Object.values(P.state().items); const n = it.reduce((a, x) => a + x.n, 0), ok = it.reduce((a, x) => a + x.ok, 0); return n ? Math.round((ok / n) * 100) + '%' : '—'; }
  function heatmap() {
    const d = P.state().daily; const days = 84; let h = '<div class="heat">';
    const start = new Date(Date.now() - (days - 1) * 86400000);
    const pad = (start.getDay() + 6) % 7;
    for (let k = 0; k < pad; k++) h += '<i style="visibility:hidden"></i>';
    for (let k = 0; k < days; k++) { const t = new Date(start.getTime() + k * 86400000); const v = (d[U.today(t)] || { n: 0 }).n; const l = v === 0 ? '' : v < 5 ? 'l1' : v < 15 ? 'l2' : v < 30 ? 'l3' : 'l4'; h += '<i class="' + l + '" title="' + U.today(t) + ' : ' + v + '"></i>'; }
    return h + '</div>';
  }

  /* ================= PWA ================= */
  if ('serviceWorker' in navigator && /^https?:/.test(location.protocol)) {
    navigator.serviceWorker.register('sw.js').then((reg) => {
      const pill = $('#offline');
      const ready = () => { if (pill) { pill.textContent = 'Disponible hors ligne'; pill.classList.add('ok'); } };
      if (reg.active) ready(); else navigator.serviceWorker.ready.then(ready);
    }).catch(() => {});
  }
  route();
})();
