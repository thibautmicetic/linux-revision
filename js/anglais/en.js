/* Anglais : moteur de correction (réponses écrites et orales), synthèse et reconnaissance vocales,
   et expansion des chapitres (mots, phrases, verbes irréguliers → QCM, écoute, écriture, oral, flashcards). */
(function () {
  'use strict';
  const APP = window.APP, U = APP.util, P = APP.progress;
  const E = (APP.en = {});
  E.words = []; E.phrases = []; E.verbs = []; E.verbIndex = {};

  /* ---------- nombres en lettres ---------- */
  const UNITS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const TENS = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  function numWord(n) {
    n = Math.floor(n);
    if (n < 20) return UNITS[n];
    if (n < 100) return TENS[Math.floor(n / 10)] + (n % 10 ? ' ' + UNITS[n % 10] : '');
    if (n < 1000) return UNITS[Math.floor(n / 100)] + ' hundred' + (n % 100 ? ' ' + numWord(n % 100) : '');
    if (n < 1000000) return numWord(Math.floor(n / 1000)) + ' thousand' + (n % 1000 ? ' ' + numWord(n % 1000) : '');
    return String(n);
  }
  E.numWord = numWord;

  /* ---------- normalisation ---------- */
  const SPELL = { colour: 'color', colours: 'colors', favourite: 'favorite', neighbour: 'neighbor', neighbours: 'neighbors', centre: 'center', theatre: 'theater', grey: 'gray', travelling: 'traveling', travelled: 'traveled', cancelled: 'canceled', organise: 'organize', realise: 'realize', okay: 'ok', learnt: 'learned', dreamt: 'dreamed', burnt: 'burned', spelt: 'spelled', smelt: 'smelled', spoilt: 'spoiled', gotten: 'got', mum: 'mom', programme: 'program', metre: 'meter', litre: 'liter', practise: 'practice', jewellery: 'jewelry', pyjamas: 'pajamas', tyre: 'tire', cheque: 'check', storey: 'story', mr: 'mister', mrs: 'missus', ms: 'miz', dr: 'doctor' };
  E.clean = (s) => String(s == null ? '' : s).toLowerCase()
    .replace(/[’‘`´]/g, "'").replace(/[“”«»"]/g, ' ')
    .replace(/(\d)[,\s](?=\d{3}\b)/g, '$1')
    .replace(/(\d+)(st|nd|rd|th)\b/g, '$1 $2')
    .replace(/[.,!?;:¿¡()…\-–—/]/g, ' ')
    .replace(/\s+/g, ' ').trim();
  function expand(s) {
    return s
      .replace(/\bcan not\b/g, 'cannot').replace(/\bcan't\b/g, 'cannot').replace(/\bwon't\b/g, 'will not').replace(/\bshan't\b/g, 'shall not')
      .replace(/\bain't\b/g, 'is not').replace(/\b(do|does|did|is|are|was|were|has|have|had|could|would|should|must|need|might|dare)n't\b/g, '$1 not')
      .replace(/\bi'm\b/g, 'i am').replace(/\b(\w+)'re\b/g, '$1 are').replace(/\b(\w+)'ve\b/g, '$1 have').replace(/\b(\w+)'ll\b/g, '$1 will').replace(/\b(i|you|he|she|it|we|they)'d\b/g, '$1 would')
      .replace(/\blet's\b/g, 'let us')
      .replace(/\b0\d+\b/g, (d) => d.split('').map((x) => UNITS[+x]).join(' '))
      .replace(/\b(\d+)\b/g, (m, d) => (d.length <= 6 ? numWord(+d) : d))
      .replace(/\boh\b/g, 'zero')
      .replace(/\bhundred and\b/g, 'hundred')
      .replace(/\b[a-z]+\b/g, (w) => SPELL[w] || w)
      .replace(/\s+/g, ' ').trim();
  }
  // toutes les écritures équivalentes d'une réponse ('s = is / has / possessif)
  // « Yes, I'm » : pas de contraction en fin de réponse courte
  const FINAL_CONTR = /\b(i'm|you're|we're|they're|he's|she's|it's|that's|there's|i've|you've|we've|they've|i'll|you'll|he'll|she'll|we'll|they'll)\s*([.,!?;]|$)/i;
  E.badFinalContraction = (s) => FINAL_CONTR.test(String(s || '').replace(/[’‘`´]/g, "'"));
  function variants(s) {
    if (E.badFinalContraction(s)) return [E.clean(s) + ' #contraction'];
    const base = expand(E.clean(s));
    const out = new Set([base]);
    if (/\b(he|she|it|that|there|what|where|who|how|here)'s\b/.test(base)) {
      out.add(base.replace(/\b(he|she|it|that|there|what|where|who|how|here)'s\b/g, '$1 is'));
      out.add(base.replace(/\b(he|she|it|that|there|what|where|who|how|here)'s\b/g, '$1 has'));
    }
    return [...out];
  }
  E.variants = variants;
  const words = (s) => (s ? s.split(' ').filter(Boolean) : []);
  const hasAccent = (s) => /[éèêëàâäîïôöùûüçœæ]/i.test(s);

  // alignement mot à mot (plus longue sous-suite commune)
  function align(a, b) {
    const m = a.length, n = b.length, L = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
    for (let i = m - 1; i >= 0; i--) for (let j = n - 1; j >= 0; j--) L[i][j] = a[i] === b[j] ? L[i + 1][j + 1] + 1 : Math.max(L[i + 1][j], L[i][j + 1]);
    const ops = []; let i = 0, j = 0;
    while (i < m || j < n) {
      if (i < m && j < n && a[i] === b[j]) { ops.push({ t: 'eq', u: a[i], e: b[j] }); i++; j++; }
      else if (i < m && j < n && L[i + 1][j + 1] === L[i][j]) { ops.push({ t: 'sub', u: a[i], e: b[j] }); i++; j++; }
      else if (j < n && (i >= m || L[i][j + 1] >= L[i + 1][j])) { ops.push({ t: 'miss', e: b[j] }); j++; }
      else { ops.push({ t: 'extra', u: a[i] }); i++; }
    }
    return ops;
  }
  E.align = align;

  /* ---------- règles de grammaire pour expliquer les erreurs ---------- */
  const third = (v) => (v === 'have' ? 'has' : v === 'be' ? 'is' : v === 'do' ? 'does' : v === 'go' ? 'goes' : /(s|sh|ch|x|z|o)$/.test(v) ? v + 'es' : /[^aeiou]y$/.test(v) ? v.slice(0, -1) + 'ies' : v + 's');
  E.third = third;
  const DOUBLE = ['stop', 'run', 'swim', 'sit', 'get', 'put', 'cut', 'shop', 'plan', 'begin', 'hit', 'win', 'set', 'drop', 'chat', 'jog', 'nod', 'rob', 'skip', 'travel', 'forget', 'prefer', 'refer', 'admit', 'hug', 'beg', 'clap', 'grab', 'slip', 'step', 'tap', 'trip', 'wrap', 'dig', 'let', 'shut'];
  E.ing = (v) => (v === 'be' ? 'being' : v === 'see' ? 'seeing' : /ie$/.test(v) ? v.slice(0, -2) + 'ying' : /[^e]e$/.test(v) ? v.slice(0, -1) + 'ing' : DOUBLE.includes(v) ? v + v.slice(-1) + 'ing' : v + 'ing');
  E.ed = (v) => (/e$/.test(v) ? v + 'd' : /[^aeiou]y$/.test(v) ? v.slice(0, -1) + 'ied' : DOUBLE.includes(v) ? v + v.slice(-1) + 'ed' : v + 'ed');
  function overRegular(w) {
    // « goed », « buyed », « taked » : un verbe irrégulier traité comme régulier
    for (const v of E.verbs) {
      const b = v.base;
      if (!b || b.includes(' ')) continue;
      if ([b + 'ed', b + 'd', E.ed(b)].includes(w) && !v.pret.split('/').includes(w)) return v;
    }
    return null;
  }
  const BE = ['am', 'is', 'are', 'was', 'were'];
  const SUBJ3 = ['he', 'she', 'it'], SUBJ = ['i', 'you', 'we', 'they', 'he', 'she', 'it'];
  const AUX = ['do', 'does', 'did', 'not', 'cannot', 'can', 'will', 'would', 'must', 'should', 'could', 'may', 'might', 'to'];
  const FR_WORDS = new Set(['le', 'la', 'les', 'un', 'une', 'des', 'je', 'tu', 'il', 'elle', 'nous', 'vous', 'ils', 'elles', 'est', 'et', 'dans', 'pour', 'avec', 'de', 'du', 'au', 'aux', 'pas', 'ne', 'mon', 'ma', 'mes', 'ton', 'ta', 'tes', 'son', 'sa', 'ses', 'ce', 'cette', 'qui', 'que', 'oui', 'non', 'bonjour', 'merci', 'suis', 'sont', 'ai', 'avez', 'avons', 'fait', 'très', 'sur', 'sous', 'chez', 'mais', 'ou', 'où', 'quoi', 'comment', 'pourquoi', 'quand']);
  E.looksFrench = (raw) => { const w = U.norm(raw.replace(/[^\p{L}\s']/gu, ' ').replace(/\s+/g, '·')).split('·').filter(Boolean); const fr = String(raw).toLowerCase().split(/[^\p{L}']+/u).filter((x) => FR_WORDS.has(x)).length; return fr >= 2 && fr >= 0.3 * w.length; };
  // prev = mot attendu juste avant (pour savoir si le mot est un verbe conjugué ou un nom)
  function explainSub(u, e, prev) {
    if (!u || !e) return null;
    const v = overRegular(u);
    if (v) return '**' + v.base + '** est un verbe **irrégulier** : on ne dit pas « ' + u + ' » mais **' + v.pret.split('/')[0] + '** au prétérit (participe passé : **' + v.pp.split('/')[0] + '**).';
    const pv = E.verbs.find((x) => x.pp.split('/').includes(u) && x.pret.split('/').includes(e) && x.pret !== x.pp);
    if (pv) return '« ' + u + ' » est le **participe passé** de ' + pv.base + '. Au prétérit, on utilise la 2e colonne : **' + e + '**.';
    const pv2 = E.verbs.find((x) => x.pret.split('/').includes(u) && x.pp.split('/').includes(e) && x.pret !== x.pp);
    if (pv2) return '« ' + u + ' » est le **prétérit** de ' + pv2.base + '. Après have/has (ou au passif), on utilise le **participe passé** (3e colonne) : **' + e + '**.';
    if ((u === 'a' && e === 'an') || (u === 'an' && e === 'a')) return 'Devant un **son voyelle** on écrit **an** (an apple, an hour), devant un son consonne **a** (a car, a university).';
    if (BE.includes(u) && BE.includes(e)) return 'Le verbe **to be** change selon le sujet : I **am**, he/she/it **is**, you/we/they **are** (au passé : I/he/she/it **was**, you/we/they **were**). Ici il faut **' + e + '**.';
    if ((u === 'do' && e === 'does') || (u === 'does' && e === 'do') || (u === "don't" && e === "doesn't")) return 'Avec **he, she, it** on utilise **does** (doesn\'t) ; avec I, you, we, they : **do** (don\'t). Ici : **' + e + '**.';
    if ((u === 'has' && e === 'have') || (u === 'have' && e === 'has')) return '**has** pour he/she/it, **have** pour I/you/we/they. Ici : **' + e + '**.';
    const verbCtx = prev && (SUBJ.includes(prev) || AUX.includes(prev) || /^[A-Z]/.test(prev));
    if (third(u) === e && u !== e) return verbCtx || !prev ? 'À la 3e personne du singulier (**he, she, it**, ou un nom au singulier), le verbe prend un **-s** au présent simple : **' + e + '**.' : 'Il faut un **-s** : **' + e + '** (pluriel : plusieurs choses ou personnes).';
    if (third(e) === u && u !== e) return verbCtx ? 'Pas de **-s** ici : « ' + u + ' » → **' + e + '**. Le -s ne s\'ajoute qu\'avec he/she/it au présent simple, et jamais après does, doesn\'t, did, can, will…' : 'Pas de **-s** ici : il faut le singulier **' + e + '** (une seule chose).';
    if ([E.ed(u), u + 'ed', u + 'd'].includes(e)) return 'Il faut le **prétérit** : **' + e + '** (verbe régulier + -ed). En anglais, le passé se marque sur le verbe.';
    if ([E.ed(e), e + 'ed', e + 'd'].includes(u)) return 'Pas de **-ed** ici : **' + e + '**. Après did / didn\'t, to, will, can… le verbe reste à la base.';
    if (E.ing(u) === e || u + 'ing' === e) return 'Il faut la forme en **-ing** : **' + e + '**.';
    if (E.ing(e) === u || e + 'ing' === u) return 'Pas de **-ing** ici : **' + e + '** (la base du verbe).';
    if (/ing$/.test(u) && /ing$/.test(e)) return 'Orthographe du **-ing** : on écrit **' + e + '**. Règles : le **e** final tombe (make → making), la consonne finale se **double** après une voyelle courte (run → running, swim → swimming).';
    if (/ies$/.test(e) && u === e.slice(0, -3) + 'ys') return 'Verbe en consonne + **y** : le y devient **ies** à la 3e personne (study → studies, fly → flies).';
    if (/es$/.test(e) && u === e.slice(0, -2) + 's') return 'Après **s, sh, ch, x, o**, on ajoute **-es** : watch → watches, go → goes, wash → washes.';
    if (/ed$/.test(u) && /ed$/.test(e)) return 'Orthographe du prétérit régulier : on écrit **' + e + '** (e final : like → liked ; consonne + y : study → studied ; consonne doublée : stop → stopped).';
    if (u.length >= 4 && U.lev(u, e) <= 2) return 'Orthographe : on écrit **' + e + '** (et non « ' + u + ' »).';
    return null;
  }

  /* ---------- correction d'une réponse écrite ---------- */
  // it.answers : réponses acceptées ; it.artOpt : article facultatif ; it.toOpt : « to » facultatif ; it.strict : pas de tolérance aux fautes de frappe
  E.prep = function (it, s) {
    let v = variants(s);
    if (it.artOpt) v = v.concat(v.map((x) => x.replace(/^(a|an|the|some) /, '')));
    if (it.toOpt) v = v.concat(v.map((x) => x.replace(/^to /, '')));
    return [...new Set(v)];
  };
  E.check = function (it, input) {
    const raw = String(input || '').trim();
    const res = { ok: false, msgs: [], notes: [], expected: it.answers[0], ops: null, input: raw };
    const uv = E.prep(it, raw);
    const capNote = () => { if (/(^|\s)i(\s|'|$)/.test(raw.replace(/[.,!?]/g, ' '))) res.notes.push('Petit détail : **I** (je) s\'écrit toujours avec une **majuscule** en anglais.'); };
    for (const a of it.answers) {
      if (E.prep(it, a).some((x) => uv.includes(x))) { res.ok = true; res.expected = a; capNote(); return res; }
    }
    // erreurs typiques prévues par l'exercice
    for (const m of it.mistakes || []) {
      const hit = (m.text != null && E.prep(it, m.text).some((x) => uv.includes(x))) || (m.re && new RegExp(m.re, 'i').test(E.clean(raw)));
      if (hit) { res.msgs.push(m.msg); break; }
    }
    // réponse la plus proche
    let best = null;
    for (const a of it.answers) for (const av of E.prep(it, a)) for (const u of uv) {
      const ops = align(words(u), words(av));
      const cost = ops.filter((o) => o.t !== 'eq').length;
      if (!best || cost < best.cost) best = { a, av, u, ops, cost };
    }
    res.expected = best ? best.a : it.answers[0];
    res.ops = best ? best.ops : null;
    // tolérance : une seule faute de frappe sur un mot long (pas une faute de grammaire)
    if (!res.msgs.length && best && !it.strict) {
      const diff = best.ops.filter((o) => o.t !== 'eq');
      if (diff.length === 1 && diff[0].t === 'sub') {
        const { u, e } = diff[0];
        const xs = explainSub(u, e, null);
        const gram = xs && !/^Orthographe : /.test(xs);
        if (!gram && e.length >= 5 && U.lev(u, e) === 1) { res.ok = true; res.typo = true; res.notes.push('Accepté, mais attention à l\'orthographe : on écrit **' + e + '** (tu as écrit « ' + u + ' »).'); capNote(); return res; }
      }
    }
    if (!res.msgs.length && E.badFinalContraction(raw)) res.msgs.push('Dans une **réponse courte**, on ne contracte pas le dernier mot : **Yes, I am** / **Yes, she is** / **Yes, they are** (pas « Yes, I\'m »). La contraction n\'est possible qu\'au milieu de la phrase.');
    if (it.fr && U.norm(raw) === U.norm(it.fr)) res.msgs.push('Tu as répondu en **français** : il faut écrire la traduction en **anglais**.');
    else if (E.looksFrench(raw)) res.msgs.push('On dirait du **français** : la réponse doit être en **anglais**.');
    else if (hasAccent(raw)) res.msgs.push('Il y a des accents (é, è, à, ç…) dans ta réponse : ils n\'existent pas en anglais. As-tu écrit un mot en français ?');
    if (best && !res.msgs.length) {
      // « she is work » : to be + verbe à la base au lieu du présent simple
      const uw = words(best.u), ew = words(best.av);
      for (let k = 0; k + 1 < uw.length; k++) if (BE.includes(uw[k]) && !ew.includes(uw[k]) && !/ing$/.test(uw[k + 1]) && ew.some((x) => x === uw[k + 1] || x === third(uw[k + 1]) || x === E.ed(uw[k + 1]))) { res.msgs.push('Pas de **' + uw[k] + '** devant le verbe ici : au présent simple, on dit directement « she **works** », « I **work** ». (**to be** + verbe ne s\'emploie qu\'avec -ing : she is work**ing** = elle est en train de travailler.)'); break; }
    }
    if (best && !res.msgs.length) {
      const diff = best.ops.filter((o) => o.t !== 'eq');
      const uw = words(best.u), ew = words(best.av);
      if (diff.length && uw.length === ew.length && uw.slice().sort().join(' ') === ew.slice().sort().join(' ')) res.msgs.push('Les mots sont bons mais **pas dans le bon ordre**. En anglais : sujet + verbe + complément, et l\'adjectif se place **avant** le nom (a **red** car). Dans une question, l\'auxiliaire vient en premier (**Do** you…? **Is** she…?).');
      else {
        let prevE = null;
        for (const o of best.ops) {
          if (o.t === 'eq') { prevE = o.e; continue; }
          if (o.t === 'sub') { const x = explainSub(o.u, o.e, prevE); res.msgs.push(x || '« ' + o.u + ' » au lieu de **' + o.e + '**.'); prevE = o.e; }
          else if (o.t === 'miss') res.msgs.push(o.e === 'not' ? 'Il manque la négation **not**.' : ['do', 'does', 'did'].includes(o.e) ? 'Il manque l\'auxiliaire **' + o.e + '** (obligatoire pour les questions et les négations au présent et au prétérit).' : BE.includes(o.e) ? 'Il manque le verbe **' + o.e + '** (to be) : en anglais, il ne peut pas être sous-entendu.' : ['a', 'an', 'the'].includes(o.e) ? 'Il manque l\'article **' + o.e + '**.' : o.e === 'will' ? 'Il manque **will** pour exprimer le futur.' : 'Il manque le mot **' + o.e + '**.');
          else res.msgs.push(['to'].includes(o.u) && best.ops.some((x) => x.e === 'will' || x.e === 'can' || x.e === 'must') ? 'Pas de **to** après will, can, must, should : on met directement le verbe.' : 'Le mot « ' + o.u + ' » est en trop.');
          if (res.msgs.length >= 3) break;
        }
      }
    }
    if (!res.msgs.length) res.msgs.push('Ce n\'est pas la réponse attendue. Compare avec la correction ci-dessous.');
    return res;
  };
  // affichage de la réponse attendue avec les mots à corriger surlignés
  // (sur la phrase d'origine : majuscules et contractions conservées)
  E.diffHtml = function (res) {
    const orig = String(res.expected).trim().split(/\s+/), cw = words(E.clean(res.expected));
    if (res.input == null || orig.length !== cw.length) return U.esc(res.expected);
    const ops = align(words(E.clean(res.input)), cw);
    let k = 0;
    return ops.filter((o) => o.t !== 'extra').map((o) => { const w = U.esc(orig[k++]); return o.t === 'eq' ? w : '<mark class="en-fix">' + w + '</mark>'; }).join(' ');
  };

  /* ---------- correction d'une réponse orale ---------- */
  E.checkSpeech = function (it, alts) {
    const res = { ok: false, heard: alts[0] || '', msgs: [] };
    let best = null;
    for (const t of alts) for (const a of it.answers) for (const av of E.prep(it, a)) for (const u of E.prep(it, t)) {
      const ew = words(av), uw = words(u);
      const ops = align(uw, ew);
      const errs = ops.filter((o) => o.t === 'sub' || o.t === 'miss').length;
      const rate = errs / Math.max(1, ew.length);
      if (!best || rate < best.rate) best = { rate, ops, t, a };
    }
    if (!best) return res;
    res.heard = best.t;
    const n = words(E.clean(best.a)).length;
    res.ok = best.rate === 0 || (n >= 5 && best.rate <= 0.2);
    if (!res.ok) {
      const miss = best.ops.filter((o) => o.t === 'sub' || o.t === 'miss').map((o) => o.e);
      res.msgs.push('Mots mal compris ou manquants : ' + miss.map((w) => '**' + w + '**').join(', ') + '. Écoute le modèle, puis réessaie en articulant ces mots.');
    }
    res.expected = best.a;
    return res;
  };

  /* ---------- synthèse vocale (hors ligne : voix du téléphone / de l'ordinateur) ---------- */
  let voices = [];
  const loadVoices = () => { try { voices = window.speechSynthesis.getVoices().filter((v) => /^en([-_]|$)/i.test(v.lang)); } catch (e) { voices = []; } };
  if (window.speechSynthesis) { loadVoices(); try { window.speechSynthesis.addEventListener('voiceschanged', loadVoices); } catch (e) { window.speechSynthesis.onvoiceschanged = loadVoices; } }
  E.canSpeak = () => !!window.speechSynthesis && typeof window.SpeechSynthesisUtterance !== 'undefined';
  E.voices = () => voices;
  E.accent = () => P.setting('enAccent') || 'gb';
  E.pickVoice = function () {
    const pref = P.setting('enVoice');
    const acc = E.accent() === 'us' ? /en[-_]US/i : /en[-_]GB/i;
    return voices.find((v) => v.name === pref) || voices.find((v) => acc.test(v.lang) && v.localService && /enhanced|premium|natural/i.test(v.name)) || voices.find((v) => acc.test(v.lang) && v.localService) || voices.find((v) => acc.test(v.lang)) || voices.find((v) => v.localService) || voices[0] || null;
  };
  E.say = function (text, rate, onend) {
    if (!E.canSpeak() || !text) { if (onend) onend(); return false; }
    try {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(String(text));
      const v = E.pickVoice();
      if (v) u.voice = v;
      u.lang = v ? v.lang : E.accent() === 'us' ? 'en-US' : 'en-GB';
      u.rate = rate || P.setting('enRate') || 0.9;
      if (onend) { u.onend = onend; u.onerror = onend; }
      window.speechSynthesis.speak(u);
      return true;
    } catch (e) { if (onend) onend(); return false; }
  };
  E.stopSay = () => { try { window.speechSynthesis.cancel(); } catch (e) { /* rien */ } };

  /* ---------- reconnaissance vocale (selon le navigateur : Chrome, Safari) ---------- */
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  E.canListen = () => !!SR;
  let rec = null;
  E.listen = function () {
    return new Promise((resolve, reject) => {
      if (!SR) { reject('unsupported'); return; }
      try { if (rec) rec.abort(); } catch (e) { /* rien */ }
      rec = new SR();
      rec.lang = E.accent() === 'us' ? 'en-US' : 'en-GB';
      rec.interimResults = false; rec.continuous = false; rec.maxAlternatives = 5;
      let done = false;
      rec.onresult = (e) => { done = true; const alts = []; for (const r of e.results) for (let i = 0; i < r.length; i++) alts.push(r[i].transcript); resolve(alts); };
      rec.onerror = (e) => { if (done) return; done = true; reject(e.error || 'error'); };
      rec.onend = () => { if (!done) { done = true; resolve([]); } };
      try { rec.start(); } catch (e) { done = true; reject('start'); }
    });
  };
  E.stopListen = () => { try { if (rec) rec.stop(); } catch (e) { /* rien */ } };
  E.listenError = (err) => ({
    'not-allowed': 'Accès au micro refusé. Autorise le micro pour ce site dans les réglages du navigateur.',
    'service-not-allowed': 'La reconnaissance vocale n\'est pas autorisée ici (sur iPhone, ouvre l\'app dans Safari plutôt que depuis l\'écran d\'accueil, et active Siri / la dictée).',
    network: 'La reconnaissance vocale a besoin d\'Internet sur ce navigateur. Réessaie une fois connecté.',
    'no-speech': 'Je n\'ai rien entendu. Appuie sur le micro, puis parle tout de suite, près du téléphone.',
    'audio-capture': 'Aucun micro détecté.',
    unsupported: 'Ce navigateur ne sait pas reconnaître la voix (essaie Chrome ou Safari).'
  }[err] || 'La reconnaissance vocale a échoué (' + err + ').');

  /* ---------- boutons « écouter » dans les fiches ---------- */
  E.mount = function (root) {
    if (!root) return;
    root.querySelectorAll('.say:not([data-mounted]), [data-say]:not([data-mounted])').forEach((el) => {
      el.dataset.mounted = '1';
      if (!el.matches('button')) { el.setAttribute('role', 'button'); el.tabIndex = 0; el.title = 'Écouter'; }
      const go = (ev) => { ev.preventDefault(); ev.stopPropagation(); E.say(el.dataset.say || el.textContent, ev.shiftKey ? 0.6 : null); };
      el.addEventListener('click', go);
      el.addEventListener('keydown', (ev) => { if (ev.key === 'Enter' || ev.key === ' ') go(ev); });
    });
  };

  /* ---------- expansion des chapitres ---------- */
  const slug = (s) => String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 40);
  function pickDistractors(item, pool, key, n) {
    const same = pool.filter((x) => x !== item && x[key] !== item[key] && U.norm(x.fr) !== U.norm(item.fr) && U.norm(x.en) !== U.norm(item.en));
    const pref = same.filter((x) => (x.pos || '') === (item.pos || ''));
    const out = U.shuffle(pref).slice(0, n);
    for (const x of U.shuffle(same)) if (out.length < n && !out.includes(x)) out.push(x);
    if (out.length < n) for (const x of U.shuffle(E.words)) if (out.length < n && !out.includes(x) && x !== item && x[key] !== item[key]) out.push(x);
    return out;
  }
  function choicePrep(item, pool, key) {
    return function () {
      const d = pickDistractors(item, pool, key, 3);
      const all = U.shuffle([item].concat(d));
      this.choices = all.map((x) => x[key]);
      this.answer = all.indexOf(item);
      this.why = {};
      all.forEach((x, i) => { if (x !== item) this.why[i] = '« ' + x[key] + ' » veut dire **' + (key === 'en' ? x.fr : x.en) + '**.'; });
    };
  }
  const exLine = (x) => (x.ex ? '\n\nExemple : <i>' + x.ex + '</i>' + (x.exFr ? ' — ' + x.exFr : '') : '');
  function expandChapter(ch) {
    if (ch.subject !== 'anglais') return;
    ch.quiz = ch.quiz || []; ch.exercises = ch.exercises || []; ch.flashcards = ch.flashcards || []; ch.sections = ch.sections || [];
    ch.quiz.forEach((q) => { q.mode = q.mode || (q.say && q.listen ? 'listen' : 'choice'); });
    ch.exercises.forEach((x) => { x.mode = x.mode || 'write'; if (x.answer && !x.answers) x.answers = [x.answer]; });
    const vsec = ch.vocabSec || null;
    const W = (ch.words || []).map((w) => Object.assign({ pos: '' }, w, { id: w.id || ch.id + '-w-' + slug(w.en) }));
    const PH = (ch.phrases || []).map((p) => Object.assign({}, p, { id: p.id || ch.id + '-p-' + slug(p.en) }));
    ch.words = W; ch.phrases = PH;
    for (const w of W) {
      E.words.push(Object.assign({ chapter: ch.id }, w));
      const ans = [w.en].concat(w.alt || []);
      const topic = 'Vocabulaire · ' + (w.cat || ch.title);
      const common = { topic, sec: w.sec || vsec, say: w.en, fr: w.fr, artOpt: w.pos === 'n', toOpt: w.pos === 'v', level: w.level || 1, note: w.note };
      const expl = '**' + w.en + '** = « ' + w.fr + ' »' + (w.note ? '\n\n' + w.note : '') + exLine(w);
      ch.flashcards.push({ id: w.id, en: true, front: w.fr, back: w.en, say: w.en, ex: w.ex, exFr: w.exFr, note: w.note, topic });
      ch.quiz.push(Object.assign({}, common, { id: w.id + '-c', mode: 'choice', q: 'Comment dit-on « **' + w.fr + '** » en anglais ?', choices: [], answer: 0, prep: choicePrep(w, W, 'en'), explain: expl, sayChoices: true }));
      ch.quiz.push(Object.assign({}, common, { id: w.id + '-l', mode: 'listen', q: 'Écoute. Que veut dire ce mot ?', choices: [], answer: 0, prep: choicePrep(w, W, 'fr'), explain: expl, level: (w.level || 1) + 1 }));
      ch.exercises.push(Object.assign({}, common, { id: w.id + '-w', mode: 'write', prompt: 'Écris en anglais : « **' + w.fr + '** »', answers: ans, explain: expl, hint: 'Commence par « ' + w.en[0] + ' » (' + w.en.replace(/[^a-zA-Z]/g, '').length + ' lettres).', placeholder: 'en anglais…' }));
      ch.exercises.push(Object.assign({}, common, { id: w.id + '-s', mode: 'speak', show: 'fr', prompt: 'Dis en anglais : « **' + w.fr + '** »', answers: ans, explain: expl }));
    }
    for (const p of PH) {
      E.phrases.push(Object.assign({ chapter: ch.id }, p));
      const ans = [p.en].concat(p.alt || []);
      const topic = 'Phrases utiles · ' + (p.cat || ch.title);
      const common = { topic, sec: p.sec || vsec, say: p.en, fr: p.fr, level: p.level || 2 };
      const expl = '**' + p.en + '** = « ' + p.fr + ' »' + (p.note ? '\n\n' + p.note : '');
      ch.flashcards.push({ id: p.id, en: true, front: p.fr, back: p.en, say: p.en, note: p.note, topic });
      ch.quiz.push(Object.assign({}, common, { id: p.id + '-l', mode: 'listen', q: 'Écoute la phrase. Que veut-elle dire ?', choices: [], answer: 0, prep: choicePrep(p, PH.length >= 4 ? PH : PH.concat(E.phrases), 'fr'), explain: expl }));
      ch.exercises.push(Object.assign({}, common, { id: p.id + '-w', mode: 'write', prompt: 'Traduis en anglais : « **' + p.fr + '** »', answers: ans, explain: expl, placeholder: 'en anglais…', level: (p.level || 2) + 1 }));
      ch.exercises.push(Object.assign({}, common, { id: p.id + '-s', mode: 'speak', show: 'en', prompt: 'Répète à voix haute :', answers: ans, explain: expl }));
    }
    // verbes irréguliers : [base, prétérit, participe passé, traduction, niveau]
    for (const row of ch.verbs || []) {
      const [base, pret, pp, fr, lvl, vnote] = row;
      const v = { base, pret, pp, fr, level: lvl || 1, note: vnote || '', id: ch.id + '-v-' + slug(base) };
      E.verbs.push(v); E.verbIndex[base] = v;
      const p1 = pret.split('/')[0], pp1 = pp.split('/')[0];
      const all3 = base + ' · ' + pret.replace(/\//g, ' / ') + ' · ' + pp.replace(/\//g, ' / ');
      const topic = 'Verbes irréguliers' + (v.level === 1 ? ' · les plus courants' : v.level === 2 ? ' · niveau 2' : ' · niveau 3');
      const tbl = '**to ' + base + '** (' + fr + ') : ' + base + ' → **' + pret.replace(/\//g, ' / ') + '** (prétérit) → **' + pp.replace(/\//g, ' / ') + '** (participe passé)' + (v.note ? '\n\n' + v.note : '');
      const common = { topic, sec: (ch.verbSecs && (ch.verbSecs[v.level] || ch.verbSecs[1])) || null, level: v.level, strict: true, verb: base };
      ch.flashcards.push({ id: v.id, en: true, front: 'to ' + base + ' — ' + fr, back: all3, say: base + ', ' + p1 + ', ' + pp1, topic, note: 'Les 3 formes : base verbale · prétérit · participe passé.' });
      const wrongP = [...new Set([E.ed(base), pp1 !== p1 ? pp1 : null, base, third(base)].filter((x) => x && !pret.split('/').includes(x)))].slice(0, 3);
      ch.quiz.push(Object.assign({}, common, { id: v.id + '-c', mode: 'choice', q: 'Prétérit de **to ' + base + '** (' + fr + ') ?', choices: [p1].concat(wrongP), answer: 0, sayChoices: true, say: p1, explain: tbl, why: Object.fromEntries(wrongP.map((w, i) => [i + 1, w === E.ed(base) ? '« ' + w + ' » : c\'est la règle des verbes réguliers (-ed). **' + base + '** est irrégulier : **' + p1 + '**.' : w === pp1 ? '« ' + w + ' » est le **participe passé** (3e colonne), utilisé après have/has. Le prétérit est la 2e colonne : **' + p1 + '**.' : w === base ? '« ' + w + ' » est la base verbale (le présent). Au prétérit : **' + p1 + '**.' : '« ' + w + ' » est la forme du présent avec he/she/it.'])) }));
      // erreurs typiques : confusion prétérit / participe, puis « -ed » (sans jamais refuser une forme correcte)
      const mk = (ok, list) => { const seen = new Set(ok.map((x) => E.clean(x))); return list.filter((m) => { const k = E.clean(m.text); if (seen.has(k)) return false; seen.add(k); return true; }); };
      ch.exercises.push(Object.assign({}, common, { id: v.id + '-p', mode: 'write', prompt: 'Prétérit de **to ' + base + '** (' + fr + ') ?', answers: pret.split('/'), say: p1, explain: tbl, placeholder: 'prétérit…',
        mistakes: mk(pret.split('/'), [{ text: pp1, msg: '« ' + pp1 + ' » est le participe passé (3e colonne). Le prétérit (2e colonne) est **' + p1 + '**.' }, { text: E.ed(base), msg: '**' + base + '** est irrégulier : pas de -ed. Le prétérit est **' + p1 + '**.' }, { text: base, msg: '« ' + base + ' » est la base (le présent). Le prétérit est **' + p1 + '**.' }]) }));
      ch.exercises.push(Object.assign({}, common, { id: v.id + '-pp', mode: 'write', prompt: 'Participe passé de **to ' + base + '** (' + fr + ') ?', answers: pp.split('/'), say: pp1, explain: tbl, level: v.level + 1, placeholder: 'participe passé…',
        mistakes: mk(pp.split('/'), [{ text: p1, msg: '« ' + p1 + ' » est le prétérit (2e colonne). Le participe passé (3e colonne) est **' + pp1 + '**.' }, { text: E.ed(base), msg: '**' + base + '** est irrégulier : pas de -ed. Le participe passé est **' + pp1 + '**.' }, { text: base, msg: '« ' + base + ' » est la base. Le participe passé est **' + pp1 + '**.' }]) }));
      ch.exercises.push(Object.assign({}, common, { id: v.id + '-s', mode: 'speak', show: 'fr', strict: false, prompt: 'Dis les 3 formes de **to ' + base + '** (' + fr + ')', answers: [base + ' ' + p1 + ' ' + pp1].concat(pret.includes('/') || pp.includes('/') ? [base + ' ' + pret.split('/').pop() + ' ' + pp.split('/').pop()] : []), say: base + ', ' + p1 + ', ' + pp1, explain: tbl }));
    }
  }
  APP.chapterHooks = APP.chapterHooks || [];
  APP.chapterHooks.push(expandChapter);
})();
