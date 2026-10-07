/* Interface de l'application : accueil multi-matières, cours, sessions d'entraînement, terminal/labo, mémo/formulaire, progrès. */
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
    grid: '<rect x="3" y="3" width="7.5" height="7.5" rx="2"/><rect x="13.5" y="3" width="7.5" height="7.5" rx="2"/><rect x="3" y="13.5" width="7.5" height="7.5" rx="2"/><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="2"/>',
    book: '<path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v17H6.5A2.5 2.5 0 0 0 4 21.5zM4 21.5A2.5 2.5 0 0 1 6.5 19H20v3H6.5"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/>',
    term: '<rect x="2.5" y="4" width="19" height="16" rx="2.5"/><path d="m7 9 3 3-3 3M12.5 15H17"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
    chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
    wave: '<path d="M2 12c2.5-6 5-6 7.5 0s5 6 7.5 0 3.5-4 5-2"/><path d="M2 21h20"/>',
    flash: '<rect x="3" y="5" width="14" height="14" rx="2"/><path d="M7 3h12a2 2 0 0 1 2 2v12"/>',
    quiz: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6V14M12 17.5h.01"/>',
    cmd: '<path d="m5 8 4 4-4 4M11 16h8"/>',
    sigma: '<path d="M18 5H6l6 7-6 7h12"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    calc: '<rect x="5" y="2.5" width="14" height="19" rx="2"/><path d="M8 6.5h8M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15h.01M8 18.5h8"/>',
    redo: '<path d="M3 12a9 9 0 1 0 3-6.7L3 8M3 3v5h5"/>',
    fire: '<path d="M12 22c4 0 7-3 7-7 0-5-5-6-4-12-4 2-7 6-7 9-1-1-2-2-2-4-2 2-3 4.5-3 7 0 4 4 7 9 7z"/>',
    plus: '<path d="M12 5v14M5 12h14"/>'
  };
  const icon = (n, cls) => '<svg class="ic ' + (cls || '') + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (I[n] || I.grid) + '</svg>';
  function toast(msg) { const t = $('#toast'); t.textContent = msg; t.classList.add('on'); clearTimeout(toast.t); toast.t = setTimeout(() => t.classList.remove('on'), 2200); }

  /* ---------- thème ---------- */
  function applyTheme() { const t = P.setting('theme'); if (t === 'light' || t === 'dark') document.documentElement.dataset.theme = t; else delete document.documentElement.dataset.theme; }
  $('#themeBtn').onclick = () => { const order = ['auto', 'light', 'dark']; const t = P.setting('theme') || 'auto'; const n = order[(order.indexOf(t) + 1) % 3]; P.setting('theme', n); applyTheme(); toast('Thème : ' + { auto: 'automatique', light: 'clair', dark: 'sombre' }[n]); };
  applyTheme();

  /* ---------- matières ---------- */
  let SUBJ = P.setting('subject') && APP.subject(P.setting('subject')) ? P.setting('subject') : APP.subjects[0].id;
  const subj = () => APP.subject(SUBJ);
  const setSubj = (id) => { if (APP.subject(id) && id !== SUBJ) { SUBJ = id; P.setting('subject', id); } };
  const isMath = (x) => (x ? x.subject === 'maths' : SUBJ === 'maths');
  const mathify = (el) => { if (APP.renderMath) APP.renderMath(el); };
  const chs = (s) => APP.chaptersOf(s || SUBJ);
  const chOf = (id) => APP.chapter(id);
  const pct = (x) => Math.round((x || 0) * 100);
  const allOf = (kind, chIds, s) => chs(s).filter((c) => !chIds || chIds.includes(c.id)).flatMap((c) => (kind === 'quiz' ? c.quiz : kind === 'exo' ? c.exercises : kind === 'card' ? c.cards : []));
  const findItem = (id) => { for (const c of APP.chapters) for (const x of [].concat(c.quiz, c.exercises, c.cards)) if (x.id === id) return x; return null; };
  const R = (s) => '#/s/' + (s || SUBJ);
  function subjMastery(s) { const l = chs(s).map((c) => P.chapterStats(c).total); return l.length ? l.reduce((a, b) => a + b, 0) / l.length : 0; }
  const gensOf = (s, chId) => Object.entries(APP.generators || {}).filter(([, g]) => g.subject === (s || SUBJ) && (!chId || g.chapter === chId));

  // Sélection intelligente (répétition espacée) : à revoir d'abord, puis nouveautés, puis le reste
  function pickItems(pool, n, mode) {
    const st = P.state().items;
    if (mode === 'errors') return U.shuffle(pool.filter((x) => st[x.id] && st[x.id].ko > 0 && st[x.id].box <= 2)).slice(0, n);
    if (mode === 'all') return U.shuffle(pool).slice(0, n);
    const due = pool.filter((x) => P.isDue(x.id)).sort((a, b) => st[a.id].due - st[b.id].due);
    const fresh = pool.filter((x) => !st[x.id]).sort((a, b) => (a.level || 1) - (b.level || 1));
    const rest = pool.filter((x) => st[x.id] && !P.isDue(x.id)).sort((a, b) => st[a.id].box - st[b.id].box || st[a.id].last - st[b.id].last);
    const out = due.slice(0, n);
    const fr = U.shuffle(fresh.slice(0, 18)).sort((a, b) => (a.level || 1) - (b.level || 1));
    for (const x of fr) if (out.length < n) out.push(x);
    for (const x of rest) if (out.length < n) out.push(x);
    return U.shuffle(out);
  }

  /* ---------- navigation ---------- */
  function navItems(s) {
    const S = APP.subject(s);
    return [[R(s), 'Tableau de bord', 'grid', 'dash'], [R(s) + '/cours', 'Cours', 'book', 'cours'], [R(s) + '/entrainement', 'Entraînement', 'target', 'entrainement'], [S.tool.route, S.tool.label, S.tool.icon, 'tool'], [R(s) + '/memo', S.memo.label, s === 'maths' ? 'sigma' : 'search', 'memo'], [R(s) + '/progres', 'Progrès', 'chart', 'progres']];
  }
  function renderNav(active) {
    const due = P.dueCount(SUBJ);
    const sw = APP.subjects.map((s) => '<a href="' + R(s.id) + '" class="sw ' + (s.id === SUBJ ? 'on' : '') + '" style="--sc:' + s.color + '"><span class="sw-b">' + esc(s.badge) + '</span>' + esc(s.short) + '</a>').join('');
    $('#nav').innerHTML = '<a href="#/" class="' + (active === 'hub' ? 'on' : '') + '">' + icon('home') + '<span>Accueil</span></a><div class="subsw">' + sw + '</div>' +
      navItems(SUBJ).map(([h, l, i, k]) => '<a href="' + h + '" class="' + (active === k ? 'on' : '') + '">' + icon(i) + '<span>' + esc(l) + '</span>' + (k === 'entrainement' && due ? '<span class="badge">' + due + '</span>' : '') + '</a>').join('') +
      '<div class="sub">Chapitres · ' + esc(subj().short) + '</div>' + chs().map((c) => '<a href="#/ch/' + c.id + '" data-ch="' + c.id + '" class="' + (active === 'ch/' + c.id ? 'on' : '') + '"><span class="chip-ch" style="width:24px;height:22px;font-size:.7rem;border-radius:7px">' + c.num + '</span><span class="small">' + esc(c.title) + '</span></a>').join('');
    const B = [['#/', 'Accueil', 'home', 'hub']].concat(navItems(SUBJ).filter((x) => ['cours', 'entrainement', 'tool', 'progres'].includes(x[3])));
    $('#bottom').innerHTML = B.map(([h, l, i, k]) => '<a href="' + h + '" class="' + (active === k ? 'on' : '') + '">' + icon(i) + '<span>' + (k === 'entrainement' ? 'S\'entraîner' : esc(l)) + '</span></a>').join('');
    $('#topbar').innerHTML = '<a class="brand-m" href="#/"><span class="logo">$_</span></a><div class="subsw m">' + sw + '</div>';
    document.documentElement.style.setProperty('--subj', subj().color);
  }

  /* ---------- routeur ---------- */
  let cleanup = null;
  function route() {
    if (cleanup) { try { cleanup(); } catch (e) { console.error(e); } cleanup = null; }
    const h = location.hash.replace(/^#\/?/, '');
    const [path, qs] = h.split('?');
    const q = Object.fromEntries(new URLSearchParams(qs || ''));
    const parts = path.split('/').filter(Boolean);
    let active = 'hub';
    // anciennes adresses (version Linux seule)
    const legacy = { cours: 'cours', entrainement: 'entrainement', memo: 'memo', progres: 'progres' };
    if (legacy[parts[0]]) { location.replace(R('linux') + '/' + parts[0]); return; }
    if (parts[0] === 's' && APP.subject(parts[1])) { setSubj(parts[1]); active = parts[2] === 'labo' ? 'tool' : parts[2] || 'dash'; }
    else if (parts[0] === 'ch' || parts[0] === 'fiche') { const c = chOf(parts[1]); if (c) { setSubj(c.subject); active = 'ch/' + c.id; } }
    else if (parts[0] === 'tp') { const m = APP.missions.find((x) => x.id === parts[1]); if (m) { const c = chOf(m.chapter); setSubj(c.subject); active = 'ch/' + c.id; } }
    else if (parts[0] === 'terminal') { setSubj('linux'); active = 'tool'; }
    else if (parts[0] === 'session') active = 'entrainement';
    renderNav(active);
    main.scrollTop = 0; window.scrollTo(0, 0);
    try {
      if (!parts.length) pageHub();
      else if (parts[0] === 's') {
        switch (parts[2]) {
          case undefined: pageDash(); break;
          case 'cours': pageCours(); break;
          case 'entrainement': pageTraining(); break;
          case 'memo': pageMemo(q); break;
          case 'progres': pageProgress(); break;
          case 'labo': pageLabo(q); break;
          default: pageDash();
        }
      } else if (parts[0] === 'ch') pageChapter(parts[1], parts[2]);
      else if (parts[0] === 'fiche') pageFiche(parts[1], parts[2]);
      else if (parts[0] === 'session') pageSession();
      else if (parts[0] === 'terminal') pageTerminal(q);
      else if (parts[0] === 'tp') pageMission(parts[1]);
      else pageHub();
    } catch (e) { console.error(e); main.innerHTML = '<div class="page"><div class="card">Erreur d\'affichage : ' + esc(e.message) + '</div></div>'; }
    main.focus({ preventScroll: true });
  }
  window.addEventListener('hashchange', route);

  /* ================= ACCUEIL GÉNÉRAL ================= */
  function ring(v, label, size, color) {
    size = size || 116; const r = (size - 14) / 2, c = 2 * Math.PI * r;
    return '<div class="ring" style="width:' + size + 'px;height:' + size + 'px"><svg width="' + size + '" height="' + size + '"><circle cx="' + size / 2 + '" cy="' + size / 2 + '" r="' + r + '" stroke="var(--bg2)" stroke-width="10" fill="none"/><circle cx="' + size / 2 + '" cy="' + size / 2 + '" r="' + r + '" stroke="' + (color || 'var(--ok)') + '" stroke-width="10" fill="none" stroke-linecap="round" stroke-dasharray="' + c + '" stroke-dashoffset="' + c * (1 - Math.min(1, v)) + '"/></svg><div class="ring-t"><span>' + label + '</span></div></div>';
  }
  function pageHub() {
    const goal = P.setting('goal') || 20, today = P.todayCount(), streak = P.streak();
    let h = '<div class="page"><div class="hero"><div><div class="kicker">ESEO · cycle ingénieur</div><h1>' + (today ? 'Bon retour !' : 'Prêt à réviser ?') + '</h1><p class="muted">Objectif du jour : <b>' + Math.min(today, goal) + ' / ' + goal + '</b> questions' + (streak ? ' · ' + icon('fire') + ' série de <b>' + streak + ' jour' + (streak > 1 ? 's' : '') + '</b>' : '') + '</p><div class="bar" style="max-width:340px"><i style="width:' + Math.min(100, (today / goal) * 100) + '%;background:var(--ok)"></i></div></div>' + ring(Math.min(1, today / goal), Math.min(today, goal) + '<small>/ ' + goal + '</small>') + '</div>';
    h += '<div class="section-title"><h2>Matières</h2></div><div class="grid g2">';
    for (const s of APP.subjects) {
      const m = subjMastery(s.id), due = P.dueCount(s.id), nCh = chs(s.id).length;
      const nq = allOf('quiz', null, s.id).length, nx = allOf('exo', null, s.id).length;
      h += '<div class="card subj" style="--sc:' + s.color + '"><div class="row" style="flex-wrap:nowrap;gap:14px"><span class="subj-b">' + esc(s.badge) + '</span><div style="flex:1;min-width:0"><div class="kicker">' + esc(s.kicker) + '</div><h2 style="margin:0">' + esc(s.title) + '</h2></div><b style="font-size:1.3rem">' + pct(m) + '%</b></div><p class="muted small" style="margin:10px 0">' + esc(s.desc) + '</p><div class="bar"><i style="width:' + pct(m) + '%;background:var(--sc)"></i></div>';
      h += '<div class="small muted" style="margin:8px 0 12px">' + nCh + ' chapitres · ' + nq + ' quiz · ' + nx + ' exercices · ' + (P.subjectToday(s.id) || 0) + ' réponse' + (P.subjectToday(s.id) > 1 ? 's' : '') + ' aujourd\'hui</div>';
      h += '<div class="row"><a class="btn sm" href="' + R(s.id) + '" style="background:var(--sc)">Ouvrir</a><button class="btn sm ghost" data-smart="' + s.id + '">' + (due ? 'Réviser (' + due + ')' : 'Révision du jour') + '</button><a class="btn sm ghost" href="' + s.tool.route + '">' + esc(s.tool.label) + '</a></div></div>';
    }
    h += '<div class="card subj add"><div class="row" style="flex-wrap:nowrap;gap:14px"><span class="subj-b">' + icon('plus') + '</span><div><h2 style="margin:0">Bientôt d\'autres matières</h2><p class="muted small" style="margin:6px 0 0">L\'application est prête à accueillir de nouvelles parties (électronique, réseaux, BDD…) : chacune aura ses fiches, quiz, exercices et son suivi.</p></div></div></div></div>';
    h += '<div class="section-title"><h2>Activité</h2></div><div class="card">' + heatmap() + '<div class="small muted" style="margin-top:8px">Chaque case = un jour ; plus elle est verte, plus tu as répondu de questions.</div></div></div>';
    main.innerHTML = h;
    $$('[data-smart]').forEach((b) => (b.onclick = () => { setSubj(b.dataset.smart); startSmart(); }));
  }

  /* ================= TABLEAU DE BORD D'UNE MATIÈRE ================= */
  function nextAction() {
    const due = P.dueCount(SUBJ);
    if (due >= 3) return { t: due + ' élément' + (due > 1 ? 's' : '') + ' à réviser', p: 'La répétition espacée te les repropose au bon moment pour les ancrer durablement.', b: 'Réviser maintenant', go: () => startSmart() };
    for (const c of chs()) {
      const s = c.sections.find((x) => !P.state().sections[x.id]);
      if (s) return { t: 'Continue le chapitre ' + c.num + ' : ' + c.title, p: 'Prochaine fiche : ' + s.title, b: 'Lire la fiche', href: '#/fiche/' + c.id + '/' + s.id };
      const st = P.chapterStats(c);
      if (st.mx < 0.5) return { t: subj().exo.label + ' — chapitre ' + c.num, p: subj().exo.desc, b: 'S\'entraîner', go: () => startSession({ title: subj().exo.label + ' — ' + c.title, items: pickItems(c.exercises, 10), back: '#/ch/' + c.id + '/exos' }) };
      const m = APP.missions.find((x) => x.chapter === c.id && !(P.state().missions[x.id] && P.state().missions[x.id].done));
      if (m && st.mq > 0.4) return { t: 'TP pratique : ' + m.title, p: 'Mets en pratique dans le terminal simulé, vérifié étape par étape.', b: 'Lancer le TP', href: '#/tp/' + m.id };
    }
    return { t: 'Révision du jour', p: 'Un mélange adapté à ton niveau.', b: 'Commencer', go: () => startSmart() };
  }
  function pageDash() {
    const S = subj();
    const gm = subjMastery(SUBJ);
    const nx = nextAction();
    const st = P.state();
    const answered = Object.keys(st.items).filter((id) => { const x = findItem(id); return x ? x.subject === SUBJ : (SUBJ === 'maths') === /^gen-m/.test(id); }).length;
    const mDone = APP.missions.filter((m) => chOf(m.chapter) && chOf(m.chapter).subject === SUBJ && st.missions[m.id] && st.missions[m.id].done).length;
    const mTot = APP.missions.filter((m) => chOf(m.chapter) && chOf(m.chapter).subject === SUBJ).length;
    let h = '<div class="page"><div class="hero"><div><div class="kicker">' + esc(S.kicker) + '</div><h1>' + esc(S.title) + '</h1><p class="muted">' + esc(S.desc) + '</p></div>' + ring(gm, pct(gm) + '%<small>maîtrise</small>', 116, S.color) + '</div>';
    h += '<div class="next" style="margin:20px 0"><div style="flex:1"><b style="font-size:1.08rem">' + esc(nx.t) + '</b><p>' + esc(nx.p) + '</p></div>' + (nx.href ? '<a class="btn" href="' + nx.href + '">' + esc(nx.b) + '</a>' : '<button class="btn" id="nxBtn">' + esc(nx.b) + '</button>') + '</div>';
    h += '<div class="stats"><div class="stat"><b>' + P.dueCount(SUBJ) + '</b><span>à réviser</span></div><div class="stat"><b>' + answered + '</b><span>éléments travaillés</span></div>' + (mTot ? '<div class="stat"><b>' + mDone + ' / ' + mTot + '</b><span>TP pratiques</span></div>' : '<div class="stat"><b>' + (P.subjectToday(SUBJ) || 0) + '</b><span>réponses aujourd\'hui</span></div>') + '<div class="stat"><b>' + accuracyOf(SUBJ) + '</b><span>réussite</span></div></div>';
    h += '<div class="section-title"><h2>Chapitres</h2><a href="' + R() + '/cours" class="small">Tout voir</a></div><div class="grid g2">';
    for (const c of chs()) {
      const s = P.chapterStats(c);
      const nm = APP.missions.filter((m) => m.chapter === c.id).length;
      h += '<a class="card click ch-card" data-ch="' + c.id + '" href="#/ch/' + c.id + '"><div class="row" style="gap:12px;flex-wrap:nowrap"><span class="chip-ch">' + c.num + '</span><div style="flex:1;min-width:0"><b>' + esc(c.title) + '</b><div class="muted small">' + esc(c.subtitle) + '</div><div class="muted small">' + c.quiz.length + ' quiz · ' + c.exercises.length + ' exercices' + (nm ? ' · ' + nm + ' TP' : '') + '</div></div><b>' + pct(s.total) + '%</b></div><div class="bar" style="margin-top:12px"><i style="width:' + pct(s.total) + '%"></i></div></a>';
    }
    h += '</div><div class="section-title"><h2>Accès rapide</h2></div><div class="grid g4">';
    const qa = [['quiz', 'Quiz rapide', '10 questions de cours', 'q'], [SUBJ === 'maths' ? 'sigma' : 'cmd', S.exo.label, '10 exercices pratiques', 'x'], [S.tool.icon, S.tool.label, S.tool.desc, 't'], ['clock', 'Examen blanc', '20 questions, 25 min', 'e']];
    if (gensOf().length) qa.splice(2, 0, ['calc', 'Calculs express', '10 exercices générés', 'g']);
    for (const [i, t, s, k] of qa.slice(0, 4)) h += '<button class="card click qa" data-qa="' + k + '"><span class="ico">' + icon(i) + '</span><b>' + esc(t) + '</b><span>' + esc(s) + '</span></button>';
    h += '</div></div>';
    main.innerHTML = h;
    if ($('#nxBtn')) $('#nxBtn').onclick = nx.go;
    $$('[data-qa]').forEach((b) => (b.onclick = () => {
      const k = b.dataset.qa;
      if (k === 'q') startSession({ title: 'Quiz rapide', items: pickItems(allOf('quiz'), 10), back: R() });
      if (k === 'x') startSession({ title: S.exo.label, items: pickItems(allOf('exo'), 10), back: R() });
      if (k === 'g') startGen('mix');
      if (k === 't') location.hash = S.tool.route;
      if (k === 'e') startExam();
    }));
  }

  /* ================= COURS ================= */
  function pageCours() {
    const S = subj();
    let h = '<div class="page"><div class="kicker">' + esc(S.title) + '</div><h1>Cours</h1><p class="muted">' + (SUBJ === 'linux' ? '4 chapitres : chaque cours est accompagné de son TP. Lis les fiches, apprends les commandes, puis mets-les en pratique dans le terminal simulé.' : chs().length + ' chapitres de théorie de base. Pour chacun : fiches, formulaire, quiz, exercices où tu tapes les formules, et calculs générés à l\'infini.') + '</p><div class="grid" style="margin-top:18px">';
    for (const c of chs()) {
      const s = P.chapterStats(c);
      const ms = APP.missions.filter((m) => m.chapter === c.id);
      h += '<div class="card ch-card" data-ch="' + c.id + '"><div class="spread"><div class="row" style="flex-wrap:nowrap"><span class="chip-ch">' + c.num + '</span><div><h2 style="margin:0">' + esc(c.title) + '</h2><div class="muted small">' + esc(c.subtitle) + '</div></div></div><b style="font-size:1.3rem">' + pct(s.total) + '%</b></div><div class="bar" style="margin:12px 0"><i style="width:' + pct(s.total) + '%"></i></div>';
      h += '<div class="grid g4 small"><div><b>' + s.read + '/' + s.secs + '</b><div class="muted">fiches lues</div></div><div><b>' + pct(s.mq) + '%</b><div class="muted">quiz maîtrisés</div></div><div><b>' + pct(s.mx) + '%</b><div class="muted">exercices maîtrisés</div></div><div>' + (ms.length ? '<b>' + s.mDone + '/' + ms.length + '</b><div class="muted">TP réussis</div>' : '<b>' + pct(s.mc) + '%</b><div class="muted">formules sues</div>') + '</div></div>';
      h += '<div class="row" style="margin-top:14px"><a class="btn sm" href="#/ch/' + c.id + '">Ouvrir</a><a class="btn sm ghost" href="#/ch/' + c.id + '/quiz">Quiz</a><a class="btn sm ghost" href="#/ch/' + c.id + '/exos">' + esc(S.exo.label) + '</a>' + (ms.length ? '<a class="btn sm ghost" href="#/ch/' + c.id + '/tp">TP pratiques</a>' : '<a class="btn sm ghost" href="#/ch/' + c.id + '/formules">Formulaire</a>') + '</div></div>';
    }
    main.innerHTML = h + '</div></div>';
  }
  function pageChapter(id, tab) {
    const c = chOf(id);
    if (!c) { pageCours(); return; }
    const S = APP.subject(c.subject);
    const math = c.subject === 'maths';
    tab = tab || 'fiches';
    const s = P.chapterStats(c);
    const st = P.state();
    const tabs = [['fiches', 'Fiches (' + c.sections.length + ')']];
    if (c.commands.length) tabs.push(['commandes', 'Commandes (' + c.commands.length + ')']);
    if (c.formulas.length) tabs.push(['formules', 'Formulaire (' + c.formulas.length + ')']);
    tabs.push(['quiz', 'Quiz (' + c.quiz.length + ')'], ['exos', S.exo.label + ' (' + c.exercises.length + ')']);
    const gens = gensOf(c.subject, c.id);
    if (gens.length) tabs.push(['calculs', 'Calculs (∞)']);
    const nm = APP.missions.filter((m) => m.chapter === c.id).length;
    if (nm) tabs.push(['tp', 'TP pratiques (' + nm + ')']);
    let h = '<div class="page" data-ch="' + c.id + '"><div class="row" style="flex-wrap:nowrap;gap:14px"><span class="chip-ch" style="width:46px;height:46px;font-size:1.2rem">' + c.num + '</span><div style="flex:1;min-width:0"><div class="kicker">' + esc(S.short) + ' · ' + esc(c.subtitle) + '</div><h1 style="margin:0">' + esc(c.title) + '</h1></div><b style="font-size:1.4rem">' + pct(s.total) + '%</b></div>';
    h += '<div class="bar ch-card" data-ch="' + c.id + '" style="margin:14px 0 4px;border:0"><i style="width:' + pct(s.total) + '%;background:var(--chc)"></i></div>';
    h += '<div class="tabs">' + tabs.map(([k, l]) => '<a href="#/ch/' + c.id + '/' + k + '" class="' + (tab === k ? 'on' : '') + '">' + esc(l) + '</a>').join('') + '</div>';
    if (tab === 'fiches') {
      const first = c.sections.find((x) => !st.sections[x.id]) || c.sections[0];
      h += '<div class="spread" style="margin-bottom:12px"><p class="muted" style="margin:0">' + s.read + ' fiche' + (s.read > 1 ? 's' : '') + ' lue' + (s.read > 1 ? 's' : '') + ' sur ' + s.secs + '.</p>' + (first ? '<a class="btn sm" href="#/fiche/' + c.id + '/' + first.id + '">' + (s.read ? 'Continuer la lecture' : 'Commencer la lecture') + '</a>' : '') + '</div><div class="card flat sec-list" style="padding:0">';
      for (const x of c.sections) h += '<a href="#/fiche/' + c.id + '/' + x.id + '"><span class="check ' + (st.sections[x.id] ? 'on' : '') + '">✓</span><span style="flex:1"><b>' + esc(x.title) + '</b>' + (x.src ? '<div class="muted small">' + esc(x.src) + '</div>' : '') + '</span>›</a>';
      h += '</div>';
    } else if (tab === 'commandes') {
      h += '<div class="spread" style="margin-bottom:12px"><p class="muted" style="margin:0">Toutes les commandes du cours et du TP. Clique « Essayer » pour la tester dans le terminal.</p><button class="btn sm" id="flashBtn">' + icon('flash') + ' Flashcards du chapitre</button></div><div class="card flat" style="padding:0">' + c.commands.map((x) => cmdCard(x)).join('') + '</div>';
    } else if (tab === 'formules') {
      h += '<div class="spread" style="margin-bottom:12px"><p class="muted" style="margin:0">Toutes les formules du chapitre, à connaître par cœur.</p><button class="btn sm" id="flashBtn">' + icon('flash') + ' Les réviser en flashcards</button></div><div class="card flat" style="padding:0">' + c.formulas.map((x) => formulaCard(x)).join('') + '</div>';
    } else if (tab === 'quiz' || tab === 'exos') {
      const pool = tab === 'quiz' ? c.quiz : c.exercises;
      const lv = { new: 0, weak: 0, learn: 0, master: 0 };
      for (const x of pool) lv[P.level(x.id)]++;
      const errs = pool.filter((x) => st.items[x.id] && st.items[x.id].ko > 0 && st.items[x.id].box <= 2).length;
      h += '<div class="card"><div class="grid g4 small" style="margin-bottom:14px"><div><span class="lvl new"></span><b>' + lv.new + '</b> jamais vus</div><div><span class="lvl weak"></span><b>' + lv.weak + '</b> à revoir</div><div><span class="lvl learn"></span><b>' + lv.learn + '</b> en cours</div><div><span class="lvl master"></span><b>' + lv.master + '</b> maîtrisés</div></div>';
      h += '<div class="row"><button class="btn" data-start="smart">Session de 10 (intelligente)</button><button class="btn ghost" data-start="all">Tout (' + pool.length + ', mélangé)</button>' + (errs ? '<button class="btn ghost" data-start="errors">' + icon('redo') + ' Mes erreurs (' + errs + ')</button>' : '') + '</div>';
      h += '<p class="muted small" style="margin:12px 0 0">' + (tab === 'quiz' ? 'Chaque mauvaise réponse est expliquée : pourquoi elle est fausse et pourquoi la bonne est juste.' : esc(S.exo.desc)) + '</p></div>';
      h += '<div class="section-title"><h2>' + (tab === 'quiz' ? 'Questions' : 'Exercices') + '</h2></div><div class="card flat" style="padding:0">';
      pool.forEach((x) => { h += '<div class="mission-item" style="cursor:pointer" data-one="' + x.id + '"><span class="lvl ' + P.level(x.id) + '"></span><span style="flex:1;min-width:0">' + md(tab === 'quiz' ? x.q : x.prompt) + '</span><span class="pill">' + (x.level === 3 ? 'difficile' : x.level === 2 ? 'moyen' : 'facile') + '</span></div>'; });
      h += '</div>';
    } else if (tab === 'calculs') {
      h += '<p class="muted">Exercices générés aléatoirement : il y en a toujours de nouveaux. Idéal pour l\'entraînement quotidien.</p><div class="grid g2">';
      for (const [k, g] of gens) h += '<button class="card click qa" data-g="' + k + '"><span class="ico">' + icon('calc') + '</span><b>' + esc(g.label) + '</b><span>10 exercices · correction détaillée</span></button>';
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
    if (math) mathify(main);
    if ($('#flashBtn')) $('#flashBtn').onclick = () => startSession({ title: 'Flashcards — ' + c.title, items: pickItems(c.cards, 15), back: '#/ch/' + c.id + '/' + tab });
    $$('[data-start]').forEach((b) => (b.onclick = () => { const pool = tab === 'quiz' ? c.quiz : c.exercises; const mode = b.dataset.start; startSession({ title: (tab === 'quiz' ? 'Quiz' : S.exo.label) + ' — ' + c.title, items: pickItems(pool, mode === 'all' ? pool.length : 10, mode), back: '#/ch/' + c.id + '/' + tab }); }));
    $$('[data-one]').forEach((b) => (b.onclick = () => startSession({ title: 'Question', items: [findItem(b.dataset.one)], back: '#/ch/' + c.id + '/' + tab })));
    $$('[data-g]').forEach((b) => (b.onclick = () => startGen(b.dataset.g, '#/ch/' + c.id + '/calculs')));
    bindTry(main);
  }
  function cmdCard(x, hl) {
    const H = (s) => (hl ? highlight(esc(s || ''), hl) : esc(s || ''));
    const ex = x.example || '';
    return '<div class="cmd"><div class="cmd-h"><span class="cmd-name">' + H(x.cmd) + '</span>' + (x.syntax ? '<span class="cmd-syn">' + H(x.syntax) + '</span>' : '') + '</div><p>' + (hl ? H(x.desc) : md(x.desc || '')) + '</p>' + (x.details ? '<p class="muted small">' + (hl ? H(x.details) : md(x.details)) + '</p>' : '') + (ex ? '<div class="ex">$ ' + H(ex) + ' <button class="btn sm ghost" data-try="' + esc(ex.split('\n')[0]) + '" style="margin-left:6px;padding:2px 8px">Essayer</button></div>' : '') + (x.src ? '<div class="src">' + esc(x.src) + '</div>' : '') + '</div>';
  }
  function formulaCard(x, hl) {
    return '<div class="cmd fo"><div class="fo-name">' + (hl ? highlight(esc(x.name), hl) : esc(x.name)) + '</div><div class="fo-tex nomath">' + APP.tex(x.tex, true) + '</div>' + (x.note ? '<p class="muted small">' + md(x.note) + '</p>' : '') + '</div>';
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
    const math = c.subject === 'maths';
    const i = Math.max(0, c.sections.findIndex((s) => s.id === secId));
    const s = c.sections[i];
    const prev = c.sections[i - 1], next = c.sections[i + 1];
    let h = '<div class="page" data-ch="' + c.id + '" style="max-width:840px"><a href="#/ch/' + c.id + '" class="small">← ' + esc(c.title) + '</a><div class="kicker" style="margin-top:10px">Fiche ' + (i + 1) + ' / ' + c.sections.length + (s.src ? ' · ' + esc(s.src) : '') + '</div><h1>' + esc(s.title) + '</h1>';
    h += '<article class="fiche' + (math ? ' math' : '') + '">' + s.html + '</article><div id="endMark"></div>';
    h += '<p class="muted small">' + (math ? 'Astuce : entraîne-toi juste après la lecture avec les exercices « Tape la formule » du chapitre.' : 'Astuce : clique sur une commande d\'un bloc de code pour l\'essayer dans le terminal simulé.') + '</p>';
    h += '<div class="fiche-nav">' + (prev ? '<a class="btn ghost" href="#/fiche/' + c.id + '/' + prev.id + '">← ' + esc(prev.title.slice(0, 40)) + '</a>' : '<span></span>') + (next ? '<a class="btn" id="nextSec" href="#/fiche/' + c.id + '/' + next.id + '">' + esc(next.title.slice(0, 40)) + ' →</a>' : '<button class="btn" id="endCh">Tester le chapitre</button>') + '</div></div>';
    main.innerHTML = h;
    if (math) mathify($('.fiche')); else { decorateCode(main); bindTry(main); }
    const mark = () => { if (!P.state().sections[s.id]) P.markSection(s.id); };
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
    S = { title: o.title, items, i: 0, results: [], back: o.back || R() + '/entrainement', exam: !!o.exam, start: Date.now(), limit: o.limit || null, gen: o.gen || null, subject: SUBJ };
    if (location.hash === '#/session') route(); else location.hash = '#/session';
  }
  APP.startSession = startSession;
  function startSmart() {
    const goal = P.setting('goal') || 20;
    const pool = allOf('quiz').concat(allOf('exo'));
    const cards = allOf('card').filter((x) => P.isDue(x.id));
    let items = pickItems(pool, Math.max(8, goal - Math.min(cards.length, 6))).concat(cards.slice(0, 6));
    if (gensOf().length) for (let k = 0; k < 3; k++) items.push(APP.genRandom(SUBJ));
    startSession({ title: 'Révision du jour — ' + subj().short, items: U.shuffle(items), back: R() + '/entrainement' });
  }
  function startExam(chIds) {
    const q = U.shuffle(allOf('quiz', chIds)).slice(0, 12);
    const x = U.shuffle(allOf('exo', chIds)).slice(0, 6);
    const g = gensOf().length ? [APP.genRandom(SUBJ), APP.genRandom(SUBJ)] : [];
    startSession({ title: 'Examen blanc — ' + subj().short, items: U.shuffle(q.concat(x, g)), exam: true, limit: 25 * 60, back: R() + '/entrainement' });
  }
  function startGen(type, back) {
    const items = [];
    for (let k = 0; k < 10; k++) items.push(type === 'mix' ? APP.genRandom(SUBJ) : APP.genQuestion(type));
    startSession({ title: type === 'mix' ? 'Calculs express' : APP.generators[type].label, items, back: back || R() + '/entrainement', gen: type });
  }
  function itemKind(it) {
    if (it.kind === 'gen') return it.type === 'formula' ? 'mexo' : it.type === 'qcm' ? 'qcm' : 'input';
    if (it.kind === 'quiz') return it.type === 'input' ? 'input' : 'qcm';
    if (it.kind === 'exo') return it.subject === 'maths' ? 'mexo' : 'exo';
    return 'card';
  }
  const KLABEL = { qcm: 'QCM', input: 'Réponse courte', exo: 'Tape la commande', mexo: 'Tape la formule', card: 'Flashcard' };
  function pageSession() {
    if (!S) { location.hash = R() + '/entrainement'; return; }
    if (S.i >= S.items.length) return renderSummary();
    const it = S.items[S.i];
    const k = itemKind(it);
    const math = isMath(it) || it.subject === 'maths';
    const ch = it.chapter ? chOf(it.chapter) : null;
    const total = S.items.length;
    let h = '<div class="page"><div class="sess"><div class="sess-top"><a class="btn sm ghost" href="' + S.back + '">✕</a><div class="bar"><i style="width:' + (S.i / total) * 100 + '%"></i></div><span class="small muted">' + (S.i + 1) + '/' + total + '</span>' + (S.limit ? '<span class="pill warn" id="timer"></span>' : '') + '</div>';
    const gch = !ch && it.chapter ? chOf(it.chapter) : null;
    const cch = ch || gch;
    const topic = it.topic || (it.gen && APP.generators[it.gen] ? APP.generators[it.gen].label : '');
    h += '<div class="qcard" data-ch="' + (it.chapter || '') + '"><div class="qtheme">' + (cch ? '<span class="qt-ch">' + (math ? 'Maths' : 'Linux') + ' · ' + cch.num + '. ' + esc(cch.title) + '</span>' : '') + (topic ? '<span class="qt-sep">›</span><span class="qt-topic">' + esc(topic) + '</span>' : '') + '</div><div class="qmeta">' + (S.exam ? '<span class="pill warn">Examen</span>' : '') + (it.kind === 'gen' ? '<span class="pill acc">Calcul généré</span>' : '') + '<span class="pill acc">' + KLABEL[k] + '</span>' + (it.src ? '<span class="pill">' + esc(it.src) + '</span>' : '') + (it.level === 3 ? '<span class="pill ko">difficile</span>' : it.level === 2 ? '<span class="pill warn">moyen</span>' : '') + '</div>';
    if (k === 'qcm') {
      const order = it.choices.map((c, i) => i);
      const shuf = !it.choices.some((c) => /toutes|aucune|les deux|A et B/i.test(c)) && !it.gen;
      const ord = shuf ? U.shuffle(order) : order;
      h += '<div class="qtext">' + md(it.q) + '</div><div class="choices">' + ord.map((oi, n) => '<button class="choice" data-o="' + oi + '"><span class="k">' + (n + 1) + '</span><span>' + md(it.choices[oi]) + '</span></button>').join('') + '</div>';
    } else if (k === 'input') {
      h += '<div class="qtext">' + md(it.q) + '</div><form class="ansin" id="ansF"><input class="field" id="ans" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="' + esc(it.placeholder || 'Ta réponse') + '"><button class="btn">Valider</button></form>';
    } else if (k === 'exo') {
      h += '<div class="qtext">' + md(it.prompt) + '</div>' + (it.context ? '<div class="qctx">' + md(it.context) + '</div>' : '') + '<form class="cmdin" id="ansF"><span class="pr">etudiant@debian:~$</span><input id="ans" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" aria-label="Commande"><button class="btn sm">Valider</button></form>' + (!S.exam && it.hint ? '<div class="row" style="margin-top:10px"><button class="btn sm ghost" id="hintB">Indice</button></div><div id="hintBox"></div>' : '');
    } else if (k === 'mexo') {
      const vars = it.vars || [];
      const what = { antideriv: 'une primitive (le « + C » est facultatif)', value: 'une valeur exacte', set: 'les solutions séparées par ;', tuple: 'les valeurs dans l\'ordre, séparées par ;', text: 'un mot', expr: 'une expression' + (vars.length ? ' en ' + vars.join(', ') : '') }[it.check || (vars.length ? 'expr' : 'value')] || '';
      h += '<div class="qtext">' + md(it.prompt || it.q) + '</div>' + (it.context ? '<div class="qctx">' + md(it.context) + '</div>' : '');
      h += '<form class="mathin" id="ansF"><div class="mrow"><input id="ans" class="field mono" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" aria-label="Ta formule" placeholder="' + esc(it.placeholder || (vars.includes('x') ? 'ex. 2*x*sin(x) + x^2*cos(x)' : 'ex. sqrt(3)/2')) + '"><button class="btn">Valider</button></div><div class="mprev" id="mprev"><span class="muted small">Attendu : ' + esc(what) + (it.form === 'expanded' ? ' (forme développée)' : it.form === 'factored' ? ' (forme factorisée)' : '') + '</span></div><div id="kpad"></div></form>' + (!S.exam && it.hint ? '<div class="row" style="margin-top:10px"><button class="btn sm ghost" id="hintB">Indice</button><button class="btn sm ghost" id="syntB">Aide syntaxe</button></div><div id="hintBox"></div>' : '<div class="row" style="margin-top:10px"><button class="btn sm ghost" id="syntB">Aide syntaxe</button></div><div id="hintBox"></div>');
    } else {
      const cmd = it.kind === 'cmd', fo = it.kind === 'formula';
      const front = cmd ? '<div class="lbl">Commande</div><div class="face"><code style="font-size:1.1rem">' + esc(it.cmd) + '</code>' + (it.syntax ? '<div class="muted small" style="margin-top:8px"><code>' + esc(it.syntax) + '</code></div>' : '') + '<p class="muted small" style="margin-top:14px">Que fait-elle ? Quelles options importantes ?</p></div>'
        : fo ? '<div class="lbl">Formule</div><div class="face"><b>' + esc(it.name) + '</b><p class="muted small" style="margin-top:14px">Écris-la de tête (sur papier), puis retourne la carte.</p></div>'
          : '<div class="lbl">Notion</div><div class="face"><b>' + md(it.front) + '</b><p class="muted small" style="margin-top:14px">Explique-la de tête, puis retourne la carte.</p></div>';
      const back = cmd ? '<div class="face back" style="text-align:left">' + md(it.desc || '') + (it.details ? '<p class="muted small">' + md(it.details) + '</p>' : '') + (it.example ? '<div class="fb ok" style="margin-top:8px;padding:8px 10px"><code>$ ' + esc(it.example) + '</code></div>' : '') + '</div>'
        : fo ? '<div class="face back"><div class="lbl">' + esc(it.name) + '</div><div class="nomath">' + APP.tex(it.tex, true) + '</div>' + (it.note ? '<p class="muted small">' + md(it.note) + '</p>' : '') + '</div>'
          : '<div class="face back" style="text-align:left">' + md(it.back) + '</div>';
      h += '<div class="flash" id="flashC"><div>' + front + '</div></div><div id="flashBack" class="hidden">' + back + '</div><div id="flashAct"><button class="btn block" id="flipB">Retourner la carte</button></div>';
    }
    h += '<div id="fb"></div></div><div class="sess-actions"><span class="small muted">' + esc(S.title) + '</span><span class="small muted">' + (k === 'qcm' ? 'Touches 1-' + (it.choices ? it.choices.length : 4) + ' pour répondre' : k === 'mexo' ? 'Entrée pour valider' : '') + '</span></div></div></div>';
    main.innerHTML = h;
    if (math) mathify($('.qcard'));
    if (S.limit) {
      const tick = () => { const left = S.limit - Math.floor((Date.now() - S.start) / 1000); const t = $('#timer'); if (!t) return; if (left <= 0) { clearInterval(iv); S.i = S.items.length; route(); return; } t.textContent = Math.floor(left / 60) + ':' + String(left % 60).padStart(2, '0'); };
      const iv = setInterval(tick, 1000); tick();
      cleanup = () => clearInterval(iv);
    }
    const next = () => { S.i++; pageSession(); window.scrollTo(0, 0); };
    const record = (ok, answer, extra) => { S.results.push(Object.assign({ it, ok, answer }, extra || {})); P.record(it.id, ok, { answer, subject: it.subject || S.subject }); };
    const contBtn = (label) => '<div class="row" style="margin-top:14px;justify-content:flex-end"><button class="btn" id="contB">' + (label || (S.i + 1 < S.items.length ? 'Continuer' : 'Voir le bilan')) + ' →</button></div>';
    const showFb = (html) => { const fb = $('#fb'); fb.innerHTML = html; if (math) mathify(fb); bindTry(fb); bindSheets(fb); const b = $('#contB'); if (b) { b.onclick = next; setTimeout(() => b.focus(), 30); } };
    const keyH = (e) => {
      if (k === 'qcm' && /^[1-9]$/.test(e.key) && !$('.choice:disabled')) { const b = $$('.choice')[+e.key - 1]; if (b) b.click(); }
      else if (e.key === 'Enter' && $('#contB') && document.activeElement !== $('#contB') && document.activeElement.tagName !== 'INPUT') { e.preventDefault(); $('#contB').click(); }
    };
    document.addEventListener('keydown', keyH);
    const prevClean = cleanup;
    cleanup = () => { document.removeEventListener('keydown', keyH); if (prevClean) prevClean(); };
    if ($('#hintB')) $('#hintB').onclick = () => { $('#hintBox').innerHTML = '<div class="hintbox">' + md(it.hint) + '</div>'; if (math) mathify($('#hintBox')); $('#hintB').remove(); };
    if ($('#syntB')) $('#syntB').onclick = () => { $('#hintBox').innerHTML = '<div class="hintbox small">' + md(SYNTAX) + '</div>'; $('#syntB').remove(); };

    if (k === 'qcm') {
      $$('.choice').forEach((b) => (b.onclick = () => {
        const o = +b.dataset.o, ok = o === it.answer;
        record(ok, it.choices[o], { chosen: o });
        if (S.exam) { $$('.choice').forEach((x) => (x.disabled = true)); b.style.borderColor = 'var(--accent)'; setTimeout(next, 250); return; }
        $$('.choice').forEach((x) => { x.disabled = true; const xo = +x.dataset.o; if (xo === it.answer) x.classList.add('ok'); else if (xo === o) x.classList.add('ko'); });
        showFb(feedbackQcm(it, o) + contBtn());
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
        showFb('<div class="fb ' + (ok ? 'ok' : 'ko') + '"><h4>' + (ok ? '✓ Correct' : '✗ Incorrect') + '</h4>' + (ok ? '' : '<div>Ta réponse : <code>' + esc(v) + '</code></div><div>Réponse attendue : <code>' + esc(it.accept[0]) + '</code>' + (it.accept.length > 1 ? ' <span class="muted small">(ou ' + it.accept.slice(1).map((a) => '<code>' + esc(a) + '</code>').join(', ') + ')</span>' : '') + '</div>') + correctionHtml(it, {}) + '</div>' + contBtn());
      };
    } else if (k === 'exo') {
      const inp = $('#ans'); setTimeout(() => inp.focus(), 30);
      let attempts = 0;
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
          showFb('<div class="fb ok"><h4>✓ ' + (attempts > 1 ? 'Correct (au ' + attempts + 'e essai)' : 'Correct !') + '</h4>' + (r.notes.length ? '<ul>' + r.notes.map((n) => '<li>' + md(n) + '</li>').join('') + '</ul>' : '') + '<div class="exp"><b>Décomposition</b><br>' + md(it.explain || '') + (others.length ? '<div class="small muted" style="margin-top:6px">Autre(s) réponse(s) acceptée(s) : ' + others.map((a) => '<code>' + esc(a) + '</code>').join(' · ') + '</div>' : '') + '</div><div class="row" style="margin-top:10px"><button class="btn sm ghost" data-try="' + esc(v) + '">Essayer dans le terminal</button></div>' + ficheLinks(it) + '</div>' + contBtn());
        } else wrongBox(r, inp, attempts, () => '<div class="exp"><div>Réponse attendue :</div><div class="ans">$ ' + esc(r.expected) + '</div>' + (it.answers.length > 1 ? '<div class="small muted">ou : ' + it.answers.filter((a) => a !== r.expected).map((a) => '<code>' + esc(a) + '</code>').join(' · ') + '</div>' : '') + '<p><b>Décomposition</b><br>' + md(it.explain || '') + '</p>' + ficheLinks(it) + '</div>');
      };
    } else if (k === 'mexo') {
      const inp = $('#ans'); setTimeout(() => inp.focus(), 30);
      $('#kpad').append(APP.mathKeypad(inp, it.vars || []));
      const prev = $('#mprev');
      const base = prev.innerHTML;
      inp.addEventListener('input', () => {
        const v = inp.value.trim();
        if (!v) { prev.innerHTML = base; return; }
        try {
          let ast = APP.math.parse(v.replace(/\s*\+\s*(C|c|K|k|cte)\s*$/, '').replace(/^\s*[A-Za-z](\s*'+)?\s*(\(\s*[a-z]\s*\))?\s*=\s*/, ''), { vars: it.vars || [] });
          prev.innerHTML = '<span class="muted small">Lecture :</span> ' + APP.tex(APP.math.toTeX(ast));
        } catch (err) {
          if (/;|,/.test(v) && (it.check === 'set' || it.check === 'tuple')) prev.innerHTML = '<span class="muted small">Liste de valeurs</span>';
          else prev.innerHTML = '<span class="small" style="color:var(--warn)">… ' + esc(err.message) + '</span>';
        }
      });
      let attempts = 0;
      $('#ansF').onsubmit = (e) => {
        e.preventDefault();
        const v = inp.value.trim(); if (!v) return;
        const r = APP.mathCheck(it, v);
        if (r.parseError && attempts === 0) { showFb('<div class="fb ko"><h4>Formule illisible</h4><ul>' + r.msgs.map((m) => '<li>' + md(m) + '</li>').join('') + '</ul><div class="small muted">Ce n\'est pas compté comme une erreur : corrige la syntaxe et revalide.</div></div>'); return; }
        attempts++;
        if (attempts === 1) record(r.ok, v, { res: r });
        if (S.exam) return next();
        const expTex = r.texExpected || '';
        if (r.ok) {
          inp.disabled = true; $('#ansF button').disabled = true;
          showFb('<div class="fb ok"><h4>✓ ' + (attempts > 1 ? 'Correct (au ' + attempts + 'e essai)' : 'Correct !') + '</h4>' + (r.texUser ? '<div>Ta réponse : ' + esc(r.texUser) + '</div>' : '') + (r.notes.length ? '<ul>' + r.notes.map((n) => '<li>' + md(n) + '</li>').join('') + '</ul>' : '') + correctionHtml(it, {}) + '</div>' + contBtn());
        } else wrongBox(r, inp, attempts, () => correctionHtml(it, { answerHtml: '<b>Réponse attendue :</b> ' + esc(expTex) + (r.expVal ? ' <span class="muted">(≈ ' + esc(r.expVal) + ')</span>' : '') + ' <span class="small muted">— à taper : <code>' + esc(it.answer) + '</code></span>', withHint: true }));
      };
    } else {
      $('#flipB').onclick = $('#flashC').onclick = () => {
        $('#flashC').innerHTML = $('#flashBack').innerHTML;
        if (math) mathify($('#flashC'));
        $('#flashAct').innerHTML = '<p class="small muted" style="text-align:center;margin:12px 0 0">Tu la connaissais ?</p><div class="rate"><button class="btn danger" data-r="0">À revoir</button><button class="btn ghost" data-r="1">Difficile</button><button class="btn ok" data-r="2">Facile</button></div>';
        $('#flashC').onclick = null;
        $$('[data-r]').forEach((b) => (b.onclick = () => { const g = +b.dataset.r; P.rateCard(it.id, g); S.results.push({ it, ok: g > 0, card: true }); next(); }));
      };
    }
    function wrongBox(r, inp, attempts, solutionHtml) {
      const fb = $('#fb');
      showFb('<div class="fb ko"><h4>✗ Pas tout à fait</h4>' + (r.texUser ? '<div>Ta réponse : ' + esc(r.texUser) + (r.userVal ? ' <span class="muted">(≈ ' + esc(r.userVal) + ')</span>' : '') + '</div>' : '') + '<div class="whybox"><b>Où est l\'erreur ?</b><ul>' + r.msgs.map((m) => '<li>' + md(m) + '</li>').join('') + '</ul>' + (r.mine ? '<div class="mine">' + (Array.isArray(r.mine) ? '<b>Ce que fait ta commande :</b> ' + r.mine.map(md).join(' ; ') : '<b>Vérification :</b> ' + esc(r.mine)) + '</div>' : '') + '</div>' + (it.hint && !it.steps ? '' : '') + '<div class="row" style="margin-top:12px"><button class="btn sm" id="retryB">Réessayer</button><button class="btn sm ghost" id="showB">Voir la correction détaillée</button></div><div id="solBox"></div></div>');
      $('#retryB').onclick = () => { fb.innerHTML = ''; inp.focus(); inp.select(); };
      $('#showB').onclick = () => {
        inp.disabled = true; $('#ansF button').disabled = true;
        const sb = $('#solBox'); sb.innerHTML = solutionHtml() + contBtn();
        if (math) mathify(sb);
        bindSheets(sb);
        $('#retryB').remove(); $('#showB').remove();
        const b = $('#contB'); if (b) { b.onclick = next; setTimeout(() => b.focus(), 30); }
      };
      inp.select();
      void attempts;
    }
  }
  const SYNTAX = 'Syntaxe « calculatrice » : `*` multiplier (facultatif : `2x`, `x sin(x)`), `/` diviser, `^` puissance (`x^2`, `e^(2x)`), `sqrt(x)` racine, `abs(x)` ou `|x|`, `exp(x)`, `ln(x)`, `log(x)` (base 10), `sin cos tan arcsin arccos arctan`, `ch sh th`, `pi`, `e`, `i` (ou `j`). Plusieurs valeurs : sépare-les par `;`. Pour une primitive, le `+ C` est facultatif. Les virgules décimales sont acceptées (`0,5`).';
  function feedbackQcm(it, o) {
    const ok = o === it.answer;
    let h = '<div class="fb ' + (ok ? 'ok' : 'ko') + '"><h4>' + (ok ? '✓ Bonne réponse' : '✗ Mauvaise réponse') + '</h4>';
    if (!ok) {
      const why = it.why && (it.why[o] || it.why[String(o)]);
      h += '<div class="whybox"><b>Pourquoi « ' + md(it.choices[o]) + ' » est faux</b><div>' + (why ? md(why) : 'Ce n\'est pas ce que dit le cours.') + '</div></div>';
      h += '<div style="margin-top:8px"><b>Bonne réponse :</b> ' + md(it.choices[it.answer]) + '</div>';
    }
    h += correctionHtml(it, { showAnswer: false }) + '</div>';
    return h;
  }
  // Correction détaillée : résumé, méthode, étapes, règle, piège, liens vers la fiche
  function correctionHtml(it, o) {
    o = o || {};
    let h = '<div class="corr">';
    if (o.answerHtml) h += '<div class="corr-ans">' + o.answerHtml + '</div>';
    if (it.explain && !(it.steps && it.steps.length && o.compact)) h += '<div class="corr-sum">' + md(it.explain) + '</div>';
    if (it.hint && (it.steps || o.withHint)) h += '<div class="corr-blk"><div class="corr-t">Méthode</div><div>' + md(it.hint) + '</div></div>';
    if (it.steps && it.steps.length) h += '<div class="corr-blk"><div class="corr-t">Correction pas à pas</div><ol class="steps">' + it.steps.map((x) => '<li>' + md(x) + '</li>').join('') + '</ol></div>';
    if (it.rule) h += '<div class="callout key"><b>À retenir</b> ' + md(it.rule) + '</div>';
    if (it.pitfall) h += '<div class="callout warn"><b>Piège classique</b> ' + md(it.pitfall) + '</div>';
    return h + ficheLinks(it) + '</div>';
  }
  function ficheLinks(it) {
    const sec = secOf(it);
    const c = it.chapter ? chOf(it.chapter) : null;
    if (!c || !(sec || c.formulas.length)) return '';
    return '<div class="corr-links">' + (sec ? '<button class="btn sm ghost" data-fiche="' + c.id + '|' + sec.id + '">' + icon('book') + ' Revoir la fiche « ' + esc(sec.title) + ' »</button>' : '') + (c.formulas.length ? '<button class="btn sm ghost" data-forms="' + c.id + '">' + icon('sigma') + ' Formules du chapitre</button>' : '') + '</div>';
  }
  // Fiche la plus pertinente : champ sec, sinon recherche par mots-clés
  function secOf(it) {
    const c = it.chapter ? chOf(it.chapter) : null;
    if (!c || !c.sections.length) return null;
    if (it.sec) { const x = c.sections.find((s) => s.id === it.sec); if (x) return x; }
    const words = (t) => (String(t || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\\[a-z]+/g, ' ').match(/[a-z]{4,}/g) || []);
    const STOP = new Set(['dans', 'pour', 'avec', 'donc', 'cette', 'est', 'sont', 'une', 'des', 'les', 'que', 'qui', 'quel', 'quelle', 'vaut', 'valeur', 'calcule', 'donne', 'exacte', 'reponse']);
    const q = words([it.topic, it.q, it.prompt, it.explain, it.hint, it.rule].join(' ')).filter((w) => !STOP.has(w));
    let best = null, bs = 0;
    for (const s of c.sections) {
      const t = words(s.title + ' ' + s.title + ' ' + s.html.replace(/<[^>]+>/g, ' '));
      const set = new Set(t);
      const sc = q.reduce((a, w) => a + (set.has(w) ? 1 : 0), 0) + words(s.title).filter((w) => q.includes(w)).length * 3;
      if (sc > bs) { bs = sc; best = s; }
    }
    return bs >= 2 ? best : null;
  }
  // Fiche ou formulaire dans un panneau, sans quitter la session
  function openSheet(title, html, isMath) {
    const ov = document.createElement('div');
    ov.className = 'sheet-ov';
    ov.innerHTML = '<div class="sheet" role="dialog" aria-modal="true"><div class="sheet-h"><b>' + esc(title) + '</b><button class="btn sm ghost" data-close>Fermer ✕</button></div><div class="sheet-b fiche' + (isMath ? ' math' : '') + '">' + html + '</div></div>';
    document.body.append(ov);
    const b = ov.querySelector('.sheet-b');
    if (isMath) mathify(b); else decorateCode(b);
    const close = () => { ov.remove(); document.removeEventListener('keydown', esck, true); };
    const esck = (e) => { if (e.key === 'Escape') { e.stopPropagation(); close(); } };
    document.addEventListener('keydown', esck, true);
    ov.addEventListener('click', (e) => { if (e.target === ov || e.target.closest('[data-close]')) close(); });
  }
  function bindSheets(root) {
    $$('[data-fiche]', root).forEach((b) => (b.onclick = () => { const [cid, sid] = b.dataset.fiche.split('|'); const c = chOf(cid); const s = c.sections.find((x) => x.id === sid); openSheet(c.title + ' — ' + s.title, s.html, c.subject === 'maths'); }));
    $$('[data-forms]', root).forEach((b) => (b.onclick = () => { const c = chOf(b.dataset.forms); openSheet('Formules — ' + c.title, c.formulas.map((x) => formulaCard(x)).join(''), true); }));
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
    if (wrong.length || S.exam) {
      h += '<div class="section-title"><h2>' + (S.exam ? 'Correction' : 'À retenir') + '</h2></div>';
      for (const r of (S.exam ? res : wrong)) {
        const it = r.it, k = itemKind(it);
        h += '<div class="miss" style="border-color:' + (r.ok ? 'var(--ok)' : 'var(--ko)') + '"><div><b>' + md(it.q || it.prompt || '') + '</b></div>';
        if (k === 'qcm') h += '<div class="small">Ta réponse : ' + md(it.choices[r.chosen] || '') + (r.ok ? ' ✓' : '<br>' + (it.why && it.why[r.chosen] ? '<span class="muted">' + md(it.why[r.chosen]) + '</span><br>' : '') + 'Bonne réponse : <b>' + md(it.choices[it.answer]) + '</b>') + '</div>';
        else if (k === 'exo') h += '<div class="small">Ta commande : <code>' + esc(r.answer) + '</code>' + (r.ok ? ' ✓' : '<br>' + (r.res ? r.res.msgs.map(md).join('<br>') : '') + '<br>Attendu : <code>' + esc(it.answers[0]) + '</code>') + '</div>';
        else if (k === 'mexo') h += '<div class="small">Ta réponse : ' + (r.res && r.res.texUser ? esc(r.res.texUser) : '<code>' + esc(r.answer) + '</code>') + (r.ok ? ' ✓' : '<br>' + (r.res ? r.res.msgs.map(md).join('<br>') : '') + '<br>Attendu : ' + (r.res && r.res.texExpected ? esc(r.res.texExpected) : '<code>' + esc(it.answer) + '</code>')) + '</div>';
        else h += '<div class="small">Ta réponse : <code>' + esc(r.answer) + '</code>' + (r.ok ? ' ✓' : ' — attendu : <code>' + esc(it.accept[0]) + '</code>') + '</div>';
        if (!r.ok || S.exam) {
          const c = it.chapter ? chOf(it.chapter) : null;
          const topic = it.topic || (it.gen && APP.generators[it.gen] ? APP.generators[it.gen].label : '');
          h += '<details class="sumcorr"><summary>Correction détaillée' + (c ? ' <span class="muted">— ' + esc(c.title) + (topic ? ' › ' + esc(topic) : '') + '</span>' : '') + '</summary>' + correctionHtml(it, {}) + '</details>';
        }
        h += '</div>';
      }
    }
    h += '</div></div>';
    main.innerHTML = h;
    if (S.subject === 'maths') mathify(main);
    bindSheets(main);
    if ($('#redoB')) $('#redoB').onclick = () => startSession({ title: 'Mes erreurs', items: U.shuffle(wrong.map((r) => (r.it.kind === 'gen' ? APP.genQuestion(r.it.gen) : r.it))), back: S.back });
    $('#againB').onclick = () => {
      if (S.exam) return startExam();
      if (S.gen) return startGen(S.gen, S.back);
      const kinds = new Set(S.items.map((x) => x.kind));
      const ids = [...new Set(S.items.map((x) => x.chapter).filter(Boolean))];
      const pool = ids.flatMap((c) => { const ch = chOf(c); return [].concat(kinds.has('quiz') ? ch.quiz : [], kinds.has('exo') ? ch.exercises : [], kinds.has('card') || kinds.has('cmd') || kinds.has('formula') ? ch.cards : []); });
      startSession({ title: S.title, items: pickItems(pool, S.items.length), back: S.back });
    };
  }

  /* ================= ENTRAÎNEMENT ================= */
  function pageTraining() {
    const Sj = subj();
    const st = P.state().items;
    const errs = allOf('quiz').concat(allOf('exo')).filter((x) => st[x.id] && st[x.id].ko > 0 && st[x.id].box <= 2);
    const key = 'trSel-' + SUBJ;
    let sel = JSON.parse(sessionStorage.getItem(key) || 'null') || chs().map((c) => c.id);
    sel = sel.filter((id) => chOf(id));
    if (!sel.length) sel = chs().map((c) => c.id);
    const due = P.dueCount(SUBJ);
    let h = '<div class="page"><div class="kicker">' + esc(Sj.title) + '</div><h1>Entraînement</h1><p class="muted">La <b>répétition espacée</b> repropose chaque élément au bon moment : juste après une erreur, puis à 1, 3, 7, 16 et 35 jours quand tu réussis.</p>';
    h += '<div class="next" style="margin:18px 0"><div style="flex:1"><b style="font-size:1.08rem">Révision du jour</b><p>' + (due ? due + ' élément' + (due > 1 ? 's' : '') + ' à revoir + des nouveautés' : 'Un mélange adapté à ton niveau') + '</p></div><button class="btn" id="smartB">Commencer</button></div>';
    h += '<div class="card"><div class="spread"><b>Chapitres</b><div class="chips" id="chSel"><button data-c="*" class="' + (sel.length === chs().length ? 'on' : '') + '">Tous</button>' + chs().map((c) => '<button data-c="' + c.id + '" class="' + (sel.includes(c.id) && sel.length !== chs().length ? 'on' : '') + '" title="' + esc(c.title) + '">' + c.num + '</button>').join('') + '</div></div><div class="grid g3" style="margin-top:14px">';
    const T = [['quiz', 'quiz', 'Quiz de cours', 'QCM avec l\'explication de chaque mauvaise réponse.'], ['exo', SUBJ === 'maths' ? 'sigma' : 'cmd', Sj.exo.label, Sj.exo.desc], ['card', 'flash', 'Flashcards', Sj.cards]];
    for (const [k, i, t, d] of T) h += '<div class="card flat qa"><span class="ico">' + icon(i) + '</span><b>' + esc(t) + '</b><span>' + esc(d) + '</span><div class="row" style="margin-top:8px"><button class="btn sm" data-t="' + k + '" data-n="10">10</button><button class="btn sm ghost" data-t="' + k + '" data-n="20">20</button><button class="btn sm ghost" data-t="' + k + '" data-n="999">Tout</button></div></div>';
    h += '</div></div>';
    h += '<div class="grid g2" style="margin-top:14px"><div class="card qa"><span class="ico">' + icon('clock') + '</span><b>Examen blanc</b><span>20 questions mélangées en 25 minutes. Correction détaillée à la fin.</span><div class="row" style="margin-top:8px"><button class="btn sm" id="examB">Lancer l\'examen</button></div></div>';
    h += '<div class="card qa"><span class="ico">' + icon('redo') + '</span><b>Mes erreurs</b><span>' + (errs.length ? errs.length + ' question' + (errs.length > 1 ? 's' : '') + ' ratée' + (errs.length > 1 ? 's' : '') + ' récemment.' : 'Aucune erreur en attente : bravo !') + '</span><div class="row" style="margin-top:8px"><button class="btn sm" id="errB" ' + (errs.length ? '' : 'disabled') + '>Les retravailler</button></div></div></div>';
    const gens = gensOf();
    if (gens.length) {
      h += '<div class="section-title"><h2>Calculs & réflexes</h2><span class="muted small">exercices générés à l\'infini</span></div><div class="card"><div class="chips">';
      for (const [k, g] of gens) h += '<button data-g="' + k + '">' + esc(g.label) + '</button>';
      h += '</div><div class="row" style="margin-top:12px"><button class="btn sm" data-g="mix">' + icon('calc') + ' Mélange de tout</button></div></div>';
    }
    h += '</div>';
    main.innerHTML = h;
    const save = () => sessionStorage.setItem(key, JSON.stringify(sel));
    $$('#chSel button').forEach((b) => (b.onclick = () => {
      const c = b.dataset.c;
      if (c === '*') sel = chs().map((x) => x.id);
      else if (sel.length === chs().length) sel = [c];
      else sel = sel.includes(c) ? sel.filter((x) => x !== c) : sel.concat(c);
      if (!sel.length) sel = chs().map((x) => x.id);
      save();
      $$('#chSel button').forEach((x) => x.classList.toggle('on', x.dataset.c === '*' ? sel.length === chs().length : sel.includes(x.dataset.c) && sel.length !== chs().length));
    }));
    $('#smartB').onclick = startSmart;
    $$('[data-t]').forEach((b) => (b.onclick = () => { const k = b.dataset.t, n = +b.dataset.n; const pool = allOf(k, sel); startSession({ title: { quiz: 'Quiz', exo: Sj.exo.label, card: 'Flashcards' }[k], items: pickItems(pool, Math.min(n, pool.length), n >= 999 ? 'all' : 'smart'), back: R() + '/entrainement' }); }));
    $('#examB').onclick = () => startExam(sel);
    $('#errB').onclick = () => startSession({ title: 'Mes erreurs', items: U.shuffle(errs).slice(0, 20), back: R() + '/entrainement' });
    $$('[data-g]').forEach((b) => (b.onclick = () => startGen(b.dataset.g)));
  }

  /* ================= OUTILS ================= */
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
  function pageLabo(q) {
    const M = APP.math;
    const saved = sessionStorage.getItem('labo') || 'sin(x); x*cos(x)';
    main.innerHTML = '<div class="page"><div class="kicker">Mathématiques</div><h1>Labo</h1><p class="muted">Tape une ou plusieurs fonctions de x (séparées par ;) : tu vois leur écriture, leur courbe et leur dérivée calculée automatiquement.</p>' +
      '<div class="card"><form id="labF" class="mathin"><div class="mrow"><input id="labIn" class="field mono" value="' + esc(q.f || saved) + '" autocomplete="off" autocapitalize="off" spellcheck="false"><button class="btn">Tracer</button></div><div id="kpad"></div><div class="row small" style="margin-top:8px">x de <input id="x0" class="field mono" style="width:80px" value="-6.3"> à <input id="x1" class="field mono" style="width:80px" value="6.3"> · évaluer en x = <input id="xa" class="field mono" style="width:90px" value="pi/4"></div></form><div id="labOut" style="margin-top:14px"></div></div>' +
      '<div class="section-title"><h2>Cercle trigonométrique</h2></div><div class="card"><p class="muted small" style="margin-top:0">Fais glisser le point (ou clique un angle) : les valeurs exactes s\'affichent pour les angles remarquables.</p><div class="widget" data-w="cercle"></div></div>' +
      '<div class="section-title"><h2>Aide-mémoire de syntaxe</h2></div><div class="card small">' + md(SYNTAX) + '</div></div>';
    APP.mountWidgets(main);
    $('#kpad').append(APP.mathKeypad($('#labIn'), ['x']));
    const draw = () => {
      const src = $('#labIn').value; sessionStorage.setItem('labo', src);
      const fs = src.split(';').map((s) => s.trim()).filter(Boolean);
      const out = $('#labOut');
      let h = '';
      const ok = [];
      let x0 = -6.3, x1 = 6.3, xa = null;
      try { x0 = M.evalStr($('#x0').value, {}).re; x1 = M.evalStr($('#x1').value, {}).re; } catch (e) { /* défaut */ }
      try { xa = M.evalStr($('#xa').value, {}).re; } catch (e) { xa = null; }
      for (const f of fs) {
        try {
          const ast = M.parse(f, { vars: ['x'] });
          let der = '';
          try { der = APP.tex('f\'(x) = ' + M.toTeX(M.derive(ast, 'x'))); } catch (e) { der = '<span class="muted">(dérivée non calculable)</span>'; }
          let val = '';
          if (xa != null && isFinite(xa)) { try { const v = M.evaluate(ast, { x: xa }); val = APP.tex('f(' + String(+xa.toFixed(4)).replace('.', '{,}') + ') \\approx ' + M.fmt(v, 5).replace(/,/g, '{,}')); } catch (e) { val = ''; } }
          h += '<div class="labrow"><div>' + APP.tex('f(x) = ' + M.toTeX(ast), true) + '</div><div class="small">' + der + (val ? ' · ' + val : '') + '</div></div>';
          ok.push(f);
        } catch (e) { h += '<div class="labrow"><code>' + esc(f) + '</code> <span style="color:var(--ko)">' + esc(e.message) + '</span></div>'; }
      }
      out.innerHTML = h + '<div class="widget" id="labPlot"></div>';
      if (ok.length && x1 > x0) APP.plot($('#labPlot'), ok, [x0, x1]);
    };
    $('#labF').onsubmit = (e) => { e.preventDefault(); draw(); };
    draw();
  }

  /* ================= TP PRATIQUE (Linux) ================= */
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

  /* ================= MÉMO / FORMULAIRE ================= */
  function pageMemo(q) {
    const Sj = subj();
    const math = SUBJ === 'maths';
    let filter = q.ch || 'all';
    main.innerHTML = '<div class="page"><div class="kicker">Référence · ' + esc(Sj.short) + '</div><h1>' + esc(Sj.memo.title) + '</h1><div class="search" style="margin:14px 0 10px">' + icon('search') + '<input class="field" id="memoQ" placeholder="' + esc(Sj.memo.placeholder) + '" value="' + esc(q.q || '') + '" autocomplete="off"></div><div class="chips" id="memoCh"><button data-c="all" class="on">Tous</button>' + chs().map((c) => '<button data-c="' + c.id + '">' + c.num + ' · ' + esc(c.title) + '</button>').join('') + '</div><div id="memoRes" style="margin-top:14px"></div></div>';
    const render = () => {
      const t = $('#memoQ').value.trim();
      const tl = U.norm(t);
      let out = '';
      for (const c of chs()) {
        if (filter !== 'all' && c.id !== filter) continue;
        const items = math ? c.formulas : c.commands;
        const list = items.filter((x) => !tl || U.norm(math ? [x.name, x.tex, x.note].join(' ') : [x.cmd, x.syntax, x.desc, x.details, x.example].join(' ')).includes(tl));
        if (!list.length) continue;
        out += '<div class="section-title" data-ch="' + c.id + '"><h2><span class="chip-ch" style="width:30px;height:26px;font-size:.8rem;border-radius:8px;margin-right:8px">' + c.num + '</span>' + esc(c.title) + '</h2><span class="muted small">' + list.length + '</span></div><div class="card flat" style="padding:0">' + list.map((x) => (math ? formulaCard(x, t) : cmdCard(x, t))).join('') + '</div>';
      }
      const box = $('#memoRes');
      box.innerHTML = out || '<div class="empty">Rien trouvé pour « ' + esc(t) + ' ».</div>';
      if (math) mathify(box); else bindTry(box);
    };
    $('#memoQ').oninput = render;
    $$('#memoCh button').forEach((b) => (b.onclick = () => { filter = b.dataset.c; $$('#memoCh button').forEach((x) => x.classList.toggle('on', x === b)); render(); }));
    render();
    setTimeout(() => $('#memoQ').focus(), 50);
  }

  /* ================= PROGRÈS ================= */
  function accuracyOf(s) {
    const it = Object.entries(P.state().items).filter(([id]) => { const x = findItem(id); return x ? x.subject === s : (s === 'maths') === /^gen-m/.test(id); }).map(([, v]) => v);
    const n = it.reduce((a, x) => a + x.n, 0), ok = it.reduce((a, x) => a + x.ok, 0);
    return n ? Math.round((ok / n) * 100) + '%' : '—';
  }
  function pageProgress() {
    const st = P.state();
    const gm = subjMastery(SUBJ);
    let h = '<div class="page"><div class="kicker">Suivi · ' + esc(subj().short) + '</div><h1>Ma progression</h1>';
    h += '<div class="hero" style="margin:10px 0 18px"><div><p class="muted" style="margin:0">Maîtrise de la matière (fiches lues, quiz, exercices, flashcards' + (SUBJ === 'linux' ? ' et TP' : '') + ', pondérés).</p><div class="stats" style="margin-top:12px"><div class="stat"><b>' + P.streak() + ' j</b><span>série en cours</span></div><div class="stat"><b>' + (P.subjectToday(SUBJ) || 0) + '</b><span>réponses aujourd\'hui</span></div><div class="stat"><b>' + accuracyOf(SUBJ) + '</b><span>réussite</span></div><div class="stat"><b>' + P.dueCount(SUBJ) + '</b><span>à réviser</span></div></div></div>' + ring(gm, pct(gm) + '%<small>maîtrise</small>', 130, subj().color) + '</div>';
    h += '<div class="card"><b>Activité (12 dernières semaines, toutes matières)</b><div style="margin-top:10px">' + heatmap() + '</div></div>';
    h += '<div class="section-title"><h2>Par chapitre</h2></div><div class="card" style="overflow-x:auto"><table class="ptable"><tr><th>Chapitre</th><th>Fiches</th><th>Quiz</th><th>Exercices</th><th>Cartes</th>' + (SUBJ === 'linux' ? '<th>TP</th>' : '') + '<th>Réussite</th></tr>';
    for (const c of chs()) {
      const s = P.chapterStats(c);
      const b = (v) => '<div class="bar"><i style="width:' + pct(v) + '%"></i></div><span class="small muted">' + pct(v) + '%</span>';
      h += '<tr data-ch="' + c.id + '"><td><a href="#/ch/' + c.id + '"><b>' + c.num + '. ' + esc(c.title) + '</b></a></td><td>' + s.read + '/' + s.secs + '</td><td>' + b(s.mq) + '</td><td>' + b(s.mx) + '</td><td>' + b(s.mc) + '</td>' + (SUBJ === 'linux' ? '<td>' + s.mDone + '/' + s.missions + '</td>' : '') + '<td>' + (s.accuracy == null ? '—' : pct(s.accuracy) + '%') + '</td></tr>';
    }
    h += '</table></div>';
    // calculs générés : réussite par type
    const gens = gensOf();
    if (gens.length) {
      const rows = gens.map(([k, g]) => { const it = st.items['gen-' + (k.startsWith('m-') ? 'm-' + k.slice(2) : k)] || st.items['gen-' + k]; return [g.label, it]; }).filter(([, it]) => it);
      if (rows.length) h += '<div class="section-title"><h2>Calculs & réflexes</h2></div><div class="card" style="overflow-x:auto"><table class="ptable"><tr><th>Type</th><th>Réponses</th><th>Réussite</th></tr>' + rows.map(([l, it]) => '<tr><td>' + esc(l) + '</td><td>' + it.n + '</td><td>' + Math.round((it.ok / it.n) * 100) + '%</td></tr>').join('') + '</table></div>';
    }
    const weak = Object.entries(st.items).filter(([id, it]) => { const x = findItem(id); return it.ko > 0 && x && x.subject === SUBJ; }).sort((a, b) => b[1].ko - b[1].ok - (a[1].ko - a[1].ok) || b[1].lastWrong - a[1].lastWrong).slice(0, 12);
    h += '<div class="section-title"><h2>Points faibles</h2>' + (weak.length ? '<button class="btn sm" id="weakB">Les retravailler</button>' : '') + '</div><div class="card flat" style="padding:0">';
    if (!weak.length) h += '<div class="empty">Pas encore d\'erreurs enregistrées.</div>';
    for (const [id, it] of weak) {
      const x = findItem(id);
      h += '<div class="mission-item"><span class="lvl ' + P.level(id) + '"></span><span style="flex:1;min-width:0">' + md(x.q || x.prompt || x.front || x.cmd || x.name || '') + (it.wrongAnswer ? '<div class="small muted">Dernière réponse fausse : <code class="nomath">' + esc(it.wrongAnswer) + '</code></div>' : '') + '</span><span class="pill ko">' + it.ko + ' erreur' + (it.ko > 1 ? 's' : '') + '</span></div>';
    }
    h += '</div>';
    h += '<div class="section-title"><h2>Réglages</h2></div><div class="card"><div class="grid g2"><label>Objectif quotidien (toutes matières)<select class="field" id="goalS">' + [10, 20, 30, 50].map((g) => '<option ' + ((P.setting('goal') || 20) === g ? 'selected' : '') + '>' + g + '</option>').join('') + '</select></label><label>Thème<select class="field" id="themeS"><option value="auto">Automatique</option><option value="light">Clair</option><option value="dark">Sombre</option></select></label></div>';
    h += '<div class="hr"></div><b>Sauvegarde</b><p class="muted small">Ta progression (toutes matières) est stockée uniquement sur cet appareil. Exporte-la pour la transférer ou la sauvegarder.</p><div class="row"><button class="btn sm ghost" id="expB">Exporter (.json)</button><label class="btn sm ghost" style="cursor:pointer">Importer<input type="file" id="impF" accept=".json,application/json" hidden></label><button class="btn sm danger" id="rstB">Tout réinitialiser</button></div></div></div>';
    main.innerHTML = h;
    if (SUBJ === 'maths') mathify(main);
    $('#themeS').value = P.setting('theme') || 'auto';
    $('#themeS').onchange = (e) => { P.setting('theme', e.target.value); applyTheme(); };
    $('#goalS').onchange = (e) => { P.setting('goal', +e.target.value); toast('Objectif : ' + e.target.value + ' par jour'); };
    if ($('#weakB')) $('#weakB').onclick = () => startSession({ title: 'Points faibles', items: weak.map(([id]) => findItem(id)), back: R() + '/progres' });
    $('#expB').onclick = () => { const b = new Blob([P.export()], { type: 'application/json' }); const a = document.createElement('a'); a.href = URL.createObjectURL(b); a.download = 'revision-progression-' + U.today() + '.json'; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 2000); };
    $('#impF').onchange = (e) => { const f = e.target.files[0]; if (!f) return; f.text().then((t) => { try { P.import(t); toast('Progression importée'); route(); } catch (err) { toast('Fichier invalide'); } }); };
    $('#rstB').onclick = () => { if (confirm('Effacer toute ta progression (toutes matières) ? Cette action est irréversible.')) { P.reset(); toast('Progression réinitialisée'); route(); } };
  }
  function heatmap() {
    const d = P.state().daily; const days = 84; let h = '<div class="heat">';
    const start = new Date(Date.now() - (days - 1) * 86400000);
    const pad = (start.getDay() + 6) % 7;
    for (let k = 0; k < pad; k++) h += '<i style="visibility:hidden"></i>';
    for (let k = 0; k < days; k++) { const t = new Date(start.getTime() + k * 86400000); const v = (d[U.today(t)] || { n: 0 }).n; const l = v === 0 ? '' : v < 5 ? 'l1' : v < 15 ? 'l2' : v < 30 ? 'l3' : 'l4'; h += '<i class="' + l + '" title="' + U.today(t) + ' : ' + v + '"></i>'; }
    return h + '</div>';
  }

  /* ================= PWA ================= */
  let nosw = false; try { nosw = !!localStorage.getItem('nosw'); } catch (e) { nosw = false; }
  if ('serviceWorker' in navigator && /^https?:/.test(location.protocol) && !nosw) {
    navigator.serviceWorker.register('sw.js').then((reg) => {
      const pill = $('#offline');
      const ready = () => { if (pill) { pill.textContent = 'Disponible hors ligne'; pill.classList.add('ok'); } };
      if (reg.active) ready(); else navigator.serviceWorker.ready.then(ready);
    }).catch(() => {});
  }
  route();
})();
