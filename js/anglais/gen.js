/* Anglais : exercices générés à l'infini (conjugaison, to be, nombres, heure, pluriels, comparatifs, verbes irréguliers). */
(function () {
  'use strict';
  const APP = window.APP, U = APP.util, E = APP.en;
  const pick = U.pick, R = U.rand;
  const G = {};
  const q = (type, o) => Object.assign({ id: 'gen-en-' + type, kind: 'gen', subject: 'anglais', gen: 'en-' + type, type: 'en', level: 1, strict: true }, o);
  const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
  // sujets : [anglais, 3e personne du singulier ?, forme de be, français]
  const SUBJ = [['I', false, 'am', 'je'], ['You', false, 'are', 'tu / vous'], ['He', true, 'is', 'il'], ['She', true, 'is', 'elle'], ['We', false, 'are', 'nous'], ['They', false, 'are', 'ils / elles'], ['My father', true, 'is', 'mon père'], ['My sister', true, 'is', 'ma sœur'], ['Paul', true, 'is', 'Paul'], ['My friends', false, 'are', 'mes amis'], ['The children', false, 'are', 'les enfants']];
  const subjLow = (s) => (s === 'I' ? 'I' : s.charAt(0).toLowerCase() + s.slice(1));
  // conjugaison d'un verbe composé (get up, listen to) : on conjugue le premier mot
  const conj = (v, f) => { const [h, ...t] = v.split(' '); return [f(h)].concat(t).join(' '); };
  const thirdRule = (b, t) => (b === 'have' ? 'have → **has** (irrégulier)' : /ies$/.test(t) && /[^aeiou]y$/.test(b) ? 'consonne + y → **-ies** (' + b + ' → ' + t + ')' : /es$/.test(t) && !/[^aeiou]y$/.test(b) && t !== b + 's' ? 'après s, sh, ch, x, o → **-es** (' + b + ' → ' + t + ')' : 'on ajoute simplement **-s** (' + b + ' → ' + t + ')');
  const ingRule = (b, g) => (b + 'ing' === g ? 'on ajoute **-ing** (' + b + ' → ' + g + ')' : /ying$/.test(g) && /ie$/.test(b) ? '-ie devient **-ying** (' + b + ' → ' + g + ')' : g.length === b.length + 4 ? 'consonne finale **doublée** après une voyelle courte (' + b + ' → ' + g + ')' : 'le **e** final tombe (' + b + ' → ' + g + ')');

  /* ---------- to be ---------- */
  const BE_C = ['tired', 'at home', 'from France', 'happy today', 'very kind', 'in the garden', 'late', 'hungry', 'on holiday', 'ready'];
  G.be = {
    label: 'To be : am, is, are', chapter: 'en1',
    make() {
      const [s, , be, fr] = pick(SUBJ), c = pick(BE_C), ask = Math.random() < 0.35;
      const choices = ['am', 'is', 'are'];
      const sent = ask ? cap(be) + ' ' + subjLow(s) + ' ' + c + '?' : s + ' ' + be + ' ' + c + '.';
      const why = {};
      choices.forEach((x, i) => { if (x !== be) why[i] = x === 'am' ? '« am » va uniquement avec **I**.' : x === 'is' ? '« is » va avec **he, she, it** (ou un nom au singulier).' : '« are » va avec **you, we, they** (ou un nom au pluriel).'; });
      return q('be', {
        mode: 'choice', topic: 'Le verbe to be', chapter: 'en1', strict: false,
        q: 'Complète : ' + (ask ? '___ ' + subjLow(s) + ' ' + c + ' ?' : s + ' ___ ' + c + '.'), choices, answer: choices.indexOf(be), why, say: sent,
        rule: 'I **am** · he / she / it **is** · you / we / they **are**',
        explain: '« ' + s + ' » (' + fr + ') → **' + be + '**. ' + (ask ? 'Dans une question, to be passe **devant** le sujet : ' : '') + '→ ' + sent,
        steps: ['Le verbe **to be** (être) change selon le sujet : I **am**, he/she/it **is**, you/we/they **are**.', 'Ici le sujet est « ' + s + ' » (' + fr + ')' + (/^(My|Paul|The)/.test(s) ? ', qui se remplace par ' + (be === 'is' ? '**he / she**' : '**they**') : '') + ' → **' + be + '**.', (ask ? 'Question : on inverse to be et le sujet → ' : 'Phrase : ') + sent]
      });
    }
  };

  /* ---------- présent simple ---------- */
  const PRES = [['work', 'travailler', 'in an office'], ['play', 'jouer', 'tennis on Sundays'], ['watch', 'regarder', 'TV in the evening'], ['live', 'habiter', 'in a small house'], ['cook', 'cuisiner', 'dinner every evening'], ['go', 'aller', 'to work by bus'], ['do', 'faire', 'the shopping on Saturdays'], ['have', 'prendre', 'breakfast at seven'], ['study', 'étudier', 'English every day'], ['wash', 'laver', 'the car on Sundays'], ['finish', 'finir', 'work at six'], ['like', 'aimer', 'coffee'], ['speak', 'parler', 'English a little'], ['drink', 'boire', 'tea in the morning'], ['eat', 'manger', 'a lot of vegetables'], ['read', 'lire', 'the newspaper'], ['get up', 'se lever', 'early'], ['fly', 'prendre l\'avion', 'to London every month'], ['try', 'essayer', 'to speak English'], ['listen to', 'écouter', 'the radio'], ['visit', 'rendre visite à', 'my parents on Sundays'], ['walk', 'marcher', 'to the station'], ['teach', 'enseigner', 'French'], ['catch', 'attraper', 'the bus at eight'], ['carry', 'porter', 'a big bag']];
  G.present = {
    label: 'Présent simple (le -s)', chapter: 'en6',
    make() {
      const [s, t3, , fr] = pick(SUBJ), [v, vfr, c] = pick(PRES);
      const f = t3 ? conj(v, E.third) : v, b1 = v.split(' ')[0], f1 = f.split(' ')[0];
      const full = s + ' ' + f + ' ' + c;
      const mist = t3 ? [{ text: v, msg: 'Avec « ' + s + ' » (= ' + (/^(She|My sister)/.test(s) ? 'she' : 'he') + '), le verbe prend un **-s** : **' + f + '**.' }] : [{ text: conj(v, E.third), msg: 'Pas de -s avec « ' + s + ' » : le -s est réservé à he, she, it. → **' + v + '**.' }];
      if (t3 && f1 !== b1 + 's') mist.push({ text: conj(v, (x) => x + 's'), msg: 'Orthographe : ' + thirdRule(b1, f1) + '.' });
      mist.push({ text: (s === 'I' ? 'am ' : t3 ? 'is ' : 'are ') + v, msg: 'Au présent simple, pas de **am / is / are** devant le verbe : on dit directement « ' + s + ' **' + f + '** ».' });
      return q('present', {
        mode: 'write', topic: 'Présent simple', chapter: 'en6', level: 1, placeholder: 'le verbe conjugué',
        prompt: 'Complète au présent simple : ' + s + ' ___ (' + v + ') ' + c + '.', answers: [f, full], say: full + '.', mistakes: mist,
        rule: 'Présent simple : base du verbe, **+ -s** avec he / she / it.',
        explain: s + ' **' + f + '** ' + c + '. (to ' + v + ' = ' + vfr + ')',
        steps: ['Le **présent simple** sert pour les habitudes et les vérités : on prend la base du verbe (' + v + ').', 'Le sujet est « ' + s + ' » (' + fr + ') : ' + (t3 ? 'c\'est la **3e personne du singulier** (he / she / it) → on ajoute un -s : ' + thirdRule(b1, f1) + '.' : 'ce n\'est pas he / she / it → **pas de -s**.'), 'Résultat : ' + full + '.']
      });
    }
  };
  G.presentNeg = {
    label: 'Présent simple : négation', chapter: 'en6',
    make() {
      const [s, t3] = pick(SUBJ), [v, vfr, c] = pick(PRES);
      const f = t3 ? conj(v, E.third) : v, aux = t3 ? 'doesn\'t' : 'don\'t';
      const ans = s + ' ' + aux + ' ' + v + ' ' + c;
      return q('presentNeg', {
        mode: 'write', topic: 'Présent simple : négation', chapter: 'en6', level: 2, strict: false, placeholder: 'la phrase négative',
        prompt: 'Mets à la forme négative : ' + s + ' ' + f + ' ' + c + '.', answers: [ans], say: ans + '.',
        mistakes: [t3 ? { text: s + ' doesn\'t ' + f + ' ' + c, msg: 'Après **doesn\'t**, le verbe perd son -s : c\'est does qui porte la 3e personne. → doesn\'t **' + v + '**.' } : null, { text: s + ' ' + (t3 ? 'don\'t' : 'doesn\'t') + ' ' + v + ' ' + c, msg: '**doesn\'t** avec he / she / it, **don\'t** avec I / you / we / they. Ici : **' + aux + '**.' }, { text: s + ' not ' + f + ' ' + c, msg: 'En anglais, la négation a besoin de l\'auxiliaire **do / does** : ' + s + ' **' + aux + '** ' + v + '…' }, { text: s + ' ' + f + ' not ' + c, msg: 'On ne met pas « not » après le verbe : on utilise **' + aux + '** + base verbale.' }].filter(Boolean),
        rule: 'Négation : sujet + **don\'t / doesn\'t** + base verbale (sans -s).',
        explain: '→ ' + ans + '. (to ' + v + ' = ' + vfr + ')',
        steps: ['Au présent simple, la négation se fait avec l\'auxiliaire **do** + **not** : don\'t (do not) ou doesn\'t (does not).', '« ' + s + ' » ' + (t3 ? 'est he / she / it → **doesn\'t**' : 'n\'est pas he / she / it → **don\'t**') + '.', 'Après don\'t / doesn\'t, le verbe revient à la **base** : ' + v + '. → ' + ans + '.']
      });
    }
  };
  G.presentQ = {
    label: 'Présent simple : questions', chapter: 'en6',
    make() {
      const [s, t3] = pick(SUBJ.filter((x) => x[0] !== 'I')), [v, vfr, c] = pick(PRES);
      const f = t3 ? conj(v, E.third) : v, aux = t3 ? 'Does' : 'Do';
      const ans = aux + ' ' + subjLow(s) + ' ' + v + ' ' + c;
      return q('presentQ', {
        mode: 'write', topic: 'Présent simple : questions', chapter: 'en6', level: 2, strict: false, placeholder: 'la question',
        prompt: 'Transforme en question : ' + s + ' ' + f + ' ' + c + '.', answers: [ans], say: ans + '?',
        mistakes: [t3 ? { text: aux + ' ' + subjLow(s) + ' ' + f + ' ' + c, msg: 'Après **Does**, le verbe perd son -s : Does ' + subjLow(s) + ' **' + v + '**…?' } : null, { text: (t3 ? 'Do' : 'Does') + ' ' + subjLow(s) + ' ' + v + ' ' + c, msg: '**Does** avec he / she / it, **Do** avec I / you / we / they. Ici : **' + aux + '**.' }, { text: s + ' ' + f + ' ' + c, msg: 'Une question a besoin de l\'auxiliaire en premier : **' + aux + '** + sujet + base verbale ?' }, { text: cap(f) + ' ' + subjLow(s) + ' ' + c, msg: 'En anglais, on n\'inverse pas le verbe avec le sujet : on ajoute **' + aux + '** devant.' }].filter(Boolean),
        rule: 'Question : **Do / Does** + sujet + base verbale + … ?',
        explain: '→ ' + ans + '? (to ' + v + ' = ' + vfr + ')',
        steps: ['Pour poser une question au présent simple, on met l\'auxiliaire **Do** ou **Does** au début.', '« ' + s + ' » ' + (t3 ? '= he / she → **Does**' : '→ **Do**') + '.', 'Puis le sujet, puis le verbe à la **base** (sans -s) : ' + ans + '?']
      });
    }
  };

  /* ---------- présent continu ---------- */
  const CONT = [['cook', 'dinner'], ['watch', 'TV'], ['read', 'a book'], ['run', 'in the park'], ['swim', 'in the sea'], ['write', 'an email'], ['make', 'a cake'], ['have', 'a shower'], ['play', 'cards'], ['listen to', 'music'], ['drive', 'to work'], ['sit', 'in the garden'], ['wait', 'for the bus'], ['work', 'from home'], ['talk', 'on the phone'], ['study', 'English'], ['lie', 'on the beach'], ['shop', 'in town'], ['dance', 'in the kitchen']];
  const NOW = ['right now', 'at the moment', 'now'];
  G.continuous = {
    label: 'Présent continu (be + -ing)', chapter: 'en7',
    make() {
      const [s, , be, fr] = pick(SUBJ), [v, c] = pick(CONT), now = pick(NOW);
      const g = conj(v, E.ing), b1 = v.split(' ')[0], g1 = g.split(' ')[0];
      const ans = be + ' ' + g, full = s + ' ' + ans + ' ' + c + ' ' + now;
      const short = { am: '\'m', is: '\'s', are: '\'re' }[be];
      const mist = [{ text: g, msg: 'Il manque le verbe **' + be + '** : le présent continu = **am / is / are** + verbe en -ing.' }, { text: be + ' ' + v, msg: 'Après ' + be + ', il faut la forme en **-ing** : ' + be + ' **' + g + '**.' }];
      if (g1 !== b1 + 'ing') mist.push({ text: be + ' ' + conj(v, (x) => x + 'ing'), msg: 'Orthographe : ' + ingRule(b1, g1) + '.' });
      const wrongBe = be === 'are' ? 'is' : 'are'; mist.push({ text: wrongBe + ' ' + g, msg: 'Avec « ' + s + ' », to be se conjugue **' + be + '** (I am, he/she/it is, you/we/they are).' });
      return q('continuous', {
        mode: 'write', topic: 'Présent continu', chapter: 'en7', level: 2, placeholder: 'be + verbe en -ing',
        prompt: 'Complète au présent continu : ' + s + ' ___ (' + v + ') ' + c + ' ' + now + '.', answers: [ans, (s === 'I' ? 'I' : subjLow(s)) + short + ' ' + g, full], say: full + '.', mistakes: mist,
        rule: 'Présent continu : **am / is / are** + verbe en **-ing** (action en cours).',
        explain: s + ' **' + ans + '** ' + c + ' ' + now + '. (' + fr + ' … en ce moment)',
        steps: ['« ' + now + ' » indique une action **en train de se faire** → présent continu : to be + verbe en -ing.', 'Sujet « ' + s + ' » → to be = **' + be + '**.', 'Verbe en -ing : ' + ingRule(b1, g1) + '.', 'Résultat : ' + full + '.']
      });
    }
  };

  /* ---------- prétérit ---------- */
  const PAST = [['work', 'late'], ['play', 'tennis'], ['watch', 'a film'], ['cook', 'dinner'], ['go', 'to the cinema'], ['have', 'lunch with friends'], ['visit', 'my parents'], ['buy', 'a new phone'], ['see', 'a good film'], ['eat', 'too much'], ['drink', 'a lot of water'], ['meet', 'an old friend'], ['take', 'the train'], ['make', 'a cake'], ['write', 'a long letter'], ['study', 'English'], ['stop', 'at the bakery'], ['try', 'a new restaurant'], ['walk', 'to the beach'], ['call', 'my brother'], ['clean', 'the house'], ['come', 'home late'], ['get', 'a letter'], ['tell', 'a funny story'], ['find', 'some money'], ['lose', 'my keys'], ['sleep', 'very well'], ['leave', 'early'], ['drive', 'to the coast'], ['plan', 'a trip']];
  const WHEN = [['Yesterday', 0], ['Last week', 0], ['Last night', 0], ['two days ago', 1], ['last summer', 1], ['in 2019', 1]];
  G.past = {
    label: 'Prétérit (réguliers et irréguliers)', chapter: 'en8',
    make() {
      const [s, , , fr] = pick(SUBJ), [v, c] = pick(PAST), [w, end] = pick(WHEN);
      const vi = E.verbIndex[v];
      const forms = vi ? vi.pret.split('/') : [E.ed(v)];
      const ans = forms[0];
      const sentence = end ? s + ' ___ (' + v + ') ' + c + ' ' + w + '.' : w + ', ' + subjLow(s) + ' ___ (' + v + ') ' + c + '.';
      const full = (end ? s + ' ' + ans + ' ' + c + ' ' + w : w + ', ' + subjLow(s) + ' ' + ans + ' ' + c);
      const mist = [{ text: v, msg: '« ' + w + ' » indique le **passé** : il faut le prétérit, pas la base.' }, { text: E.third(v), msg: '« ' + E.third(v) + ' » est le présent. Au prétérit : **' + ans + '** (même forme pour toutes les personnes).' }, { text: 'did ' + v, msg: 'À l\'affirmatif, pas de « did » : on met directement le verbe au prétérit, **' + ans + '**.' }];
      if (vi) { mist.unshift({ text: E.ed(v), msg: '**' + v + '** est irrégulier : on ne dit pas « ' + E.ed(v) + ' » mais **' + ans + '**.' }); if (vi.pp !== vi.pret) mist.push({ text: vi.pp.split('/')[0], msg: '« ' + vi.pp.split('/')[0] + ' » est le participe passé (après have). Au prétérit : **' + ans + '**.' }); }
      else if (ans !== v + 'ed') mist.unshift({ text: v + 'ed', msg: 'Orthographe du -ed : ' + (/ied$/.test(ans) ? 'consonne + y → **-ied** (' + v + ' → ' + ans + ')' : /e$/.test(v) ? 'verbe en -e → on ajoute seulement **-d** (' + v + ' → ' + ans + ')' : 'consonne finale **doublée** (' + v + ' → ' + ans + ')') + '.' });
      return q('past', {
        mode: 'write', topic: 'Prétérit', chapter: vi ? 'en9' : 'en8', level: 2, placeholder: 'le verbe au prétérit',
        prompt: 'Complète au prétérit : ' + sentence, answers: [ans].concat(forms.filter((x) => x !== ans), [full]), say: full + '.', mistakes: mist,
        rule: vi ? 'Verbe irrégulier : prétérit = 2e colonne (' + v + ' → ' + vi.pret + ' → ' + vi.pp + ').' : 'Verbe régulier : base + **-ed** (même forme pour toutes les personnes).',
        explain: '→ ' + full + '. (' + fr + ' : action terminée dans le passé)',
        steps: ['« ' + w + ' » situe l\'action dans le **passé terminé** → prétérit.', vi ? '**' + v + '** est un verbe **irrégulier** : son prétérit est **' + vi.pret.replace('/', ' / ') + '** (voir le chapitre 9).' : '**' + v + '** est régulier : on ajoute -ed → **' + ans + '**' + (ans !== v + 'ed' ? ' (attention à l\'orthographe)' : '') + '.', 'Au prétérit, la forme est la même pour tous les sujets' + (v === 'be' ? ' (sauf be : was / were)' : '') + ' : ' + full + '.']
      });
    }
  };

  /* ---------- futur ---------- */
  const FUT = [['call', 'you'], ['visit', 'my parents'], ['help', 'you'], ['buy', 'some bread'], ['go', 'to the market'], ['see', 'the doctor'], ['finish', 'the work'], ['come', 'with us'], ['take', 'the train'], ['be', 'at home'], ['have', 'a party'], ['cook', 'dinner'], ['write', 'to you'], ['phone', 'the hotel']];
  const LATER = ['Tomorrow', 'Next week', 'Tonight', 'Next year', 'On Saturday'];
  G.future = {
    label: 'Futur avec will', chapter: 'en10',
    make() {
      const [s, , , fr] = pick(SUBJ), [v, c] = pick(FUT), w = pick(LATER);
      const ans = 'will ' + v, full = w + ', ' + subjLow(s) + ' will ' + v + ' ' + c;
      return q('future', {
        mode: 'write', topic: 'Futur avec will', chapter: 'en10', level: 2, placeholder: 'will + verbe',
        prompt: 'Complète au futur avec will : ' + w + ', ' + subjLow(s) + ' ___ (' + v + ') ' + c + '.', answers: [ans, (s === 'I' ? 'I' : subjLow(s)) + '\'ll ' + v, full], say: full + '.',
        mistakes: [{ text: 'will to ' + v, msg: 'Pas de **to** après will : will + base verbale → will **' + v + '**.' }, { text: 'will ' + E.third(v), msg: 'Après will, jamais de -s, même avec he / she : will **' + v + '**.' }, { text: v, msg: '« ' + w + ' » parle du futur : il faut **will** devant le verbe.' }, { text: 'will ' + E.ing(v), msg: 'Après will, la **base** du verbe (pas de -ing) : will **' + v + '**.' }],
        rule: 'Futur : **will** + base verbale, identique pour tous les sujets (contraction : I\'ll, she\'ll…).',
        explain: '→ ' + full + '. (' + fr + ' … futur)',
        steps: ['« ' + w + ' » parle du **futur** → will + base verbale.', 'will ne change jamais (pas de -s, pas de to) : **will ' + v + '**.', 'Résultat : ' + full + '. On peut contracter : ' + (s === 'I' ? 'I' : subjLow(s)) + '\'ll ' + v + '.']
      });
    }
  };

  /* ---------- nombres ---------- */
  const numPick = () => { const x = Math.random(); return x < 0.7 ? pick([R(0, 20), R(11, 19), R(2, 9) * 10, R(21, 99), R(21, 99)]) : x < 0.92 ? pick([R(1, 9) * 100, R(1, 9) * 100 + R(1, 99), R(100, 999)]) : pick([1000, 2000, 3000, 5000, 10000, 1500, 2500]); };
  const numSteps = (n) => {
    const st = ['On lit le nombre par blocs, comme en français : les milliers, les centaines, puis les dizaines et les unités.'];
    if (n >= 1000) st.push('Les milliers : ' + Math.floor(n / 1000) + ' → **' + E.numWord(Math.floor(n / 1000)) + ' thousand** (thousand reste au singulier).');
    if (n % 1000 >= 100) st.push('Les centaines : ' + Math.floor((n % 1000) / 100) + ' → **' + E.numWord(Math.floor((n % 1000) / 100)) + ' hundred** (sans -s ; les Britanniques ajoutent « and » avant la suite).');
    const r = n % 100;
    if (r || n < 100) st.push(r < 20 ? r + ' → **' + E.numWord(r) + '** (de 13 à 19, on finit par -teen).' : r + ' = ' + (r - (r % 10)) + (r % 10 ? ' + ' + (r % 10) : '') + ' → **' + E.numWord(r) + '**' + (r % 10 ? ' (avec un tiret à l\'écrit : ' + E.numWord(r).replace(' ', '-') + ')' : '') + '.');
    return st;
  };
  G.numbers = {
    label: 'Les nombres', chapter: 'en2',
    make() {
      const n = numPick(), wd = E.numWord(n), hy = wd.replace(/(ty) (one|two|three|four|five|six|seven|eight|nine)\b/g, '$1-$2');
      const nice = n >= 100 && n % 100 ? hy.replace(/hundred /, 'hundred and ') : hy;
      if (Math.random() < 0.5) {
        return q('numbers', {
          mode: 'dictee', topic: 'Les nombres', chapter: 'en2', strict: false, placeholder: 'le nombre en chiffres',
          prompt: 'Écoute et écris le nombre **en chiffres**.', answers: [String(n)], say: String(n), explain: '**' + n + '** se dit « ' + nice + ' ».', rule: '13-19 : -teen (accent sur la fin) · 20, 30… 90 : -ty (accent au début).', steps: numSteps(n),
          mistakes: n >= 13 && n <= 19 ? [{ text: String((n - 10) * 10), msg: 'Tu as entendu « ' + E.numWord((n - 10) * 10) + ' » (' + (n - 10) * 10 + ') : c\'était « ' + wd + ' » (' + n + '). Les -teen s\'accentuent à la fin : four**TEEN**, les -ty au début : **FOR**ty.' }] : n % 10 === 0 && n >= 30 && n <= 90 ? [{ text: String(n / 10 + 10), msg: 'Tu as entendu « ' + E.numWord(n / 10 + 10) + ' » : c\'était « ' + wd + ' » (' + n + ').' }] : []
        });
      }
      return q('numbers', {
        mode: 'write', topic: 'Les nombres', chapter: 'en2', strict: false, placeholder: 'en lettres, en anglais',
        prompt: 'Écris en lettres, en anglais : **' + n + '**', answers: [nice, wd], say: nice, explain: n + ' = **' + nice + '**', rule: 'Tiret entre les dizaines et les unités (twenty-one) ; hundred et thousand restent au singulier.', steps: numSteps(n),
        mistakes: [n === 40 || (n > 40 && n < 50) ? { re: '\\bfourty\\b', msg: 'Piège : **forty** (40) s\'écrit sans u, alors que four (4) et fourteen (14) en ont un.' } : null, n === 15 ? { text: 'fiveteen', msg: '15 = **fifteen** (et non fiveteen).' } : null, n === 12 ? { re: 'twelf|twelfe', msg: '12 = **twelve**.' } : null, n >= 13 && n <= 19 ? { text: E.numWord((n - 10) * 10), msg: 'C\'est ' + (n - 10) * 10 + '. Pour ' + n + ' : **' + wd + '** (-teen).' } : null, n >= 200 && n < 1000 ? { re: 'hundreds', msg: '**hundred** reste au singulier : two hundred, three hundred.' } : null].filter(Boolean)
      });
    }
  };

  /* ---------- l'heure ---------- */
  const HW = (h) => E.numWord(((h + 11) % 12) + 1);
  function timeForms(h, m) {
    const out = [];
    if (m === 0) out.push(HW(h) + ' o\'clock', HW(h));
    else if (m === 15) out.push('quarter past ' + HW(h), 'a quarter past ' + HW(h));
    else if (m === 30) out.push('half past ' + HW(h));
    else if (m === 45) out.push('quarter to ' + HW(h + 1), 'a quarter to ' + HW(h + 1));
    else if (m < 30) out.push(E.numWord(m) + ' past ' + HW(h), E.numWord(m) + ' minutes past ' + HW(h));
    else out.push(E.numWord(60 - m) + ' to ' + HW(h + 1), E.numWord(60 - m) + ' minutes to ' + HW(h + 1));
    out.push(HW(h) + ' ' + (m === 0 ? 'o\'clock' : m < 10 ? 'oh ' + E.numWord(m) : E.numWord(m)));
    return [...new Set(out)];
  }
  G.time = {
    label: 'L\'heure', chapter: 'en2',
    make() {
      const h = R(1, 12), m = pick([0, 0, 15, 30, 45, 5, 10, 20, 25, 35, 40, 50, 55]);
      const forms = timeForms(h, m), main = forms[0], digital = h + ':' + String(m).padStart(2, '0');
      return q('time', {
        mode: 'write', topic: 'L\'heure', chapter: 'en2', strict: false, level: 2, placeholder: 'It\'s…',
        prompt: 'Quelle heure est-il ? Écris-le en anglais : **' + digital + '**', answers: forms.concat(forms.map((x) => 'it is ' + x)), say: 'It\'s ' + main + '.',
        mistakes: m === 45 ? [{ text: 'quarter to ' + HW(h), msg: 'Attention : « quarter to » compte vers l\'heure **suivante** : ' + digital + ' = quarter to **' + HW(h + 1) + '** (comme « ' + ((h % 12) + 1) + ' heures moins le quart »).' }] : m === 30 ? [{ text: 'half ' + HW(h), msg: 'En anglais on dit **half past ' + HW(h) + '** : « half ' + HW(h) + ' » sans past n\'est pas correct.' }] : [],
        rule: 'past = après l\'heure (de :05 à :30) · to = avant l\'heure suivante (de :35 à :55) · quarter = un quart · half = la demie.',
        explain: digital + ' → **It\'s ' + main + '**' + (forms.length > 1 ? ' (ou : ' + forms.slice(1).join(', ') + ')' : '') + '.',
        steps: ['Deux façons de dire l\'heure : avec **past / to** (britannique) ou en lisant simplement les chiffres (' + HW(h) + ' ' + (m === 0 ? 'o\'clock' : m < 10 ? 'oh ' + E.numWord(m) : E.numWord(m)) + ').', m === 0 ? 'Heure pile : **o\'clock**.' : m <= 30 ? 'Les minutes (' + m + ') sont **après** ' + HW(h) + ' → « … past ' + HW(h) + ' »' + (m === 15 ? ' (15 = quarter)' : m === 30 ? ' (30 = half)' : '') + '.' : 'Il manque ' + (60 - m) + ' minutes pour arriver à ' + HW(h + 1) + ' → « … to ' + HW(h + 1) + ' »' + (m === 45 ? ' (15 = quarter)' : '') + '.', '→ It\'s ' + main + '.']
      });
    }
  };

  /* ---------- pluriels ---------- */
  const PL = [['box', 'boxes', 'es'], ['bus', 'buses', 'es'], ['glass', 'glasses', 'es'], ['dish', 'dishes', 'es'], ['watch', 'watches', 'es'], ['tomato', 'tomatoes', 'es'], ['potato', 'potatoes', 'es'], ['baby', 'babies', 'ies'], ['city', 'cities', 'ies'], ['family', 'families', 'ies'], ['party', 'parties', 'ies'], ['knife', 'knives', 'ves'], ['wife', 'wives', 'ves'], ['shelf', 'shelves', 'ves'], ['leaf', 'leaves', 'ves'], ['man', 'men', 'irr'], ['woman', 'women', 'irr'], ['child', 'children', 'irr'], ['person', 'people', 'irr'], ['foot', 'feet', 'irr'], ['tooth', 'teeth', 'irr'], ['mouse', 'mice', 'irr'], ['fish', 'fish', 'irr'], ['sheep', 'sheep', 'irr'], ['day', 'days', 's'], ['key', 'keys', 's'], ['boy', 'boys', 's'], ['car', 'cars', 's'], ['house', 'houses', 's'], ['book', 'books', 's']];
  const PLR = { s: 'on ajoute simplement **-s** (et après voyelle + y aussi : day → days)', es: 'après **s, ss, sh, ch, x, o** → **-es**', ies: 'consonne + **y** → **-ies**', ves: '**-f / -fe** → **-ves**', irr: 'pluriel **irrégulier** : à apprendre par cœur' };
  G.plural = {
    label: 'Les pluriels', chapter: 'en4',
    make() {
      const [sg, pl, k] = pick(PL), n = pick(['two', 'three', 'four', 'five']);
      const mist = [];
      if (sg + 's' !== pl) mist.push({ text: sg + 's', msg: '« ' + sg + 's » n\'existe pas : ' + PLR[k] + ' → **' + pl + '**.' });
      if (k === 'ies') mist.push({ text: sg + 'es', msg: 'Le y devient **ies** : ' + pl + '.' });
      if (k === 'ves') mist.push({ text: sg + 'es', msg: '-f / -fe devient **-ves** : ' + pl + '.' });
      if (k === 's' && /y$/.test(sg)) mist.push({ text: sg.slice(0, -1) + 'ies', msg: 'Voyelle + y : on garde le y et on ajoute -s → **' + pl + '**.' });
      if (pl === sg) mist.push({ text: sg + 's', msg: '**' + sg + '** est invariable : one ' + sg + ', two ' + sg + '.' });
      return q('plural', {
        mode: 'write', topic: 'Le pluriel des noms', chapter: 'en4', placeholder: 'le pluriel',
        prompt: 'Écris le pluriel : one ' + sg + ' → ' + n + ' ___', answers: [pl, n + ' ' + pl], say: 'one ' + sg + ', ' + n + ' ' + pl, mistakes: mist.filter((m, i, a) => a.findIndex((x) => x.text === m.text) === i),
        rule: 'Pluriel : -s en général ; -es après s, sh, ch, x, o ; consonne + y → -ies ; quelques irréguliers (men, women, children, people, feet, teeth).',
        explain: 'one ' + sg + ' → ' + n + ' **' + pl + '**',
        steps: ['La règle générale du pluriel est d\'ajouter **-s**, mais l\'orthographe change parfois.', '« ' + sg + ' » : ' + PLR[k] + '.', '→ ' + n + ' ' + pl + '.']
      });
    }
  };

  /* ---------- comparatifs et superlatifs ---------- */
  // [adjectif, comparatif, superlatif, phrase comparative, phrase superlative]
  const ADJ = [['big', 'bigger', 'biggest', 'An elephant is ___ (big) than a dog.', 'London is the ___ (big) city in England.'], ['small', 'smaller', 'smallest', 'A mouse is ___ (small) than a cat.', 'This is the ___ (small) room in the house.'], ['cheap', 'cheaper', 'cheapest', 'The bus is ___ (cheap) than a taxi.', 'It\'s the ___ (cheap) restaurant in town.'], ['old', 'older', 'oldest', 'My grandfather is ___ (old) than my father.', 'My grandmother is the ___ (old) person in the family.'], ['young', 'younger', 'youngest', 'My sister is ___ (young) than me.', 'Tom is the ___ (young) child in the class.'], ['tall', 'taller', 'tallest', 'My son is ___ (tall) than me.', 'He is the ___ (tall) man in the room.'], ['fast', 'faster', 'fastest', 'A plane is ___ (fast) than a train.', 'It\'s the ___ (fast) car in the world.'], ['hot', 'hotter', 'hottest', 'Summer is ___ (hot) than spring.', 'August is the ___ (hot) month of the year.'], ['nice', 'nicer', 'nicest', 'This hotel is ___ (nice) than the other one.', 'She is the ___ (nice) person I know.'], ['happy', 'happier', 'happiest', 'I am ___ (happy) today than yesterday.', 'It\'s the ___ (happy) day of my life.'], ['easy', 'easier', 'easiest', 'English is ___ (easy) than Chinese.', 'This is the ___ (easy) exercise.'], ['heavy', 'heavier', 'heaviest', 'A table is ___ (heavy) than a chair.', 'This is the ___ (heavy) bag.'], ['expensive', 'more expensive', 'most expensive', 'A Ferrari is ___ (expensive) than a Fiat.', 'It\'s the ___ (expensive) hotel in the city.'], ['beautiful', 'more beautiful', 'most beautiful', 'This beach is ___ (beautiful) than that one.', 'It\'s the ___ (beautiful) place in France.'], ['interesting', 'more interesting', 'most interesting', 'The book is ___ (interesting) than the film.', 'It\'s the ___ (interesting) museum in London.'], ['comfortable', 'more comfortable', 'most comfortable', 'The sofa is ___ (comfortable) than the chair.', 'It\'s the ___ (comfortable) bed in the house.'], ['good', 'better', 'best', 'Her English is ___ (good) than mine.', 'She is the ___ (good) cook in the family.'], ['bad', 'worse', 'worst', 'The weather is ___ (bad) today than yesterday.', 'It was the ___ (bad) film of the year.']];
  G.compare = {
    label: 'Comparatifs et superlatifs', chapter: 'en11',
    make() {
      const [a, c, s, pc, ps] = pick(ADJ), sup = Math.random() < 0.4;
      const ans = sup ? s.replace(/^most /, 'most ') : c;
      const longA = /^more /.test(c), irr = ['good', 'bad'].includes(a);
      const mist = [];
      if (!longA && !irr) { mist.push({ text: sup ? 'most ' + a : 'more ' + a, msg: '« ' + a + ' » est un adjectif **court** : on ajoute **' + (sup ? '-est' : '-er') + '** → ' + ans + ' (pas « ' + (sup ? 'most' : 'more') + ' »).' }); if (ans !== a + (sup ? 'est' : 'er')) mist.push({ text: a + (sup ? 'est' : 'er'), msg: 'Orthographe : ' + (/i(er|est)$/.test(ans) ? 'le y devient **i** (' + a + ' → ' + ans + ')' : /e$/.test(a) ? 'adjectif en -e : on ajoute seulement **' + (sup ? '-st' : '-r') + '**' : 'la consonne finale se **double** (' + a + ' → ' + ans + ')') + '.' }); }
      if (longA) mist.push({ text: a + (sup ? 'est' : 'er'), msg: '« ' + a + ' » est un adjectif **long** (3 syllabes ou plus) : on utilise **' + (sup ? 'most' : 'more') + '** devant → ' + ans + '.' });
      if (irr) mist.push({ text: a + (sup ? 'est' : 'er'), msg: '**' + a + '** est irrégulier : ' + a + ' → ' + c + ' → ' + s + '.' }, { text: (sup ? 'most ' : 'more ') + a, msg: '**' + a + '** est irrégulier : ' + a + ' → **' + c + '** → **' + s + '**.' });
      const sentence = sup ? ps : pc, full = sentence.replace(/___ \([a-z]+\)/, ans);
      return q('compare', {
        mode: 'write', topic: sup ? 'Le superlatif' : 'Le comparatif', chapter: 'en11', level: 2, placeholder: sup ? 'le superlatif' : 'le comparatif',
        prompt: 'Complète avec ' + (sup ? 'le superlatif' : 'le comparatif') + ' : ' + sentence, answers: [ans, full].concat(sup ? ['the ' + ans] : []), say: full, mistakes: mist,
        rule: sup ? 'Superlatif : the + adjectif court + **-est** · the **most** + adjectif long · good → the best, bad → the worst.' : 'Comparatif : adjectif court + **-er** than · **more** + adjectif long + than · good → better, bad → worse.',
        explain: '→ ' + full,
        steps: [sup ? 'Le **superlatif** (le plus…) : « the » + adjectif-**est** ou « the most » + adjectif.' : 'Le **comparatif** (plus … que) : adjectif-**er** + than, ou « more » + adjectif + than.', irr ? '**' + a + '** est irrégulier : ' + a + ' → ' + c + ' → ' + s + '.' : longA ? '« ' + a + ' » est long → **' + (sup ? 'most' : 'more') + ' ' + a + '**.' : '« ' + a + ' » est court → **' + ans + '**' + (ans !== a + (sup ? 'est' : 'er') ? ' (attention à l\'orthographe)' : '') + '.', '→ ' + full]
      });
    }
  };

  /* ---------- verbes irréguliers (révision rapide) ---------- */
  G.irregular = {
    label: 'Verbes irréguliers (rapide)', chapter: 'en9',
    make() {
      const pool = E.verbs.filter((v) => v.level <= 2);
      if (!pool.length) return G.present.make();
      const v = pick(pool), pp = Math.random() < 0.4;
      const forms = (pp ? v.pp : v.pret).split('/'), f1 = forms[0], other = (pp ? v.pret : v.pp).split('/')[0];
      const mist = [{ text: E.ed(v.base), msg: '**' + v.base + '** est irrégulier : pas de -ed → **' + f1 + '**.' }];
      if (other !== f1) mist.unshift({ text: other, msg: '« ' + other + ' » est le ' + (pp ? 'prétérit (2e colonne)' : 'participe passé (3e colonne)') + '. Ici : **' + f1 + '**.' });
      return q('irregular', {
        mode: 'write', topic: 'Verbes irréguliers', chapter: 'en9', level: v.level, placeholder: pp ? 'participe passé' : 'prétérit',
        prompt: (pp ? 'Participe passé' : 'Prétérit') + ' de **to ' + v.base + '** (' + v.fr + ') ?', answers: forms, say: v.base + ', ' + v.pret.split('/')[0] + ', ' + v.pp.split('/')[0],
        mistakes: mist.filter((m) => !forms.includes(m.text)),
        rule: 'Les 3 formes : base · prétérit (passé) · participe passé (après have).',
        explain: '**to ' + v.base + '** : ' + v.base + ' → ' + v.pret.replace('/', ' / ') + ' → ' + v.pp.replace('/', ' / '),
        steps: ['Les verbes irréguliers ont 3 formes à connaître par cœur : base, **prétérit**, **participe passé**.', 'to ' + v.base + ' (' + v.fr + ') : ' + v.base + ' · ' + v.pret.replace('/', ' / ') + ' · ' + v.pp.replace('/', ' / ') + '.', 'On demande le ' + (pp ? 'participe passé (3e colonne)' : 'prétérit (2e colonne)') + ' : **' + forms.join(' / ') + '**.']
      });
    }
  };

  for (const k in G) {
    G[k].subject = 'anglais';
    const make = G[k].make;
    // on retire les « erreurs typiques » qui coïncideraient avec une bonne réponse
    G[k].make = function () {
      const it = make.call(this);
      if (it.mistakes && it.answers) {
        const seen = new Set();
        it.mistakes = it.mistakes.filter((m) => { if (!m) return false; if (m.re) return true; const key = E.clean(m.text); if (seen.has(key)) return false; seen.add(key); return !E.check(Object.assign({}, it, { mistakes: [] }), m.text).ok; });
      }
      return it;
    };
    APP.generators = APP.generators || {};
    APP.generators['en-' + k] = G[k];
  }
})();
