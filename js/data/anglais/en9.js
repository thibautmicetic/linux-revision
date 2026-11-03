/* Anglais — chapitre 9 : les verbes irréguliers (les 3 formes : base, prétérit, participe passé) */
(function () {
  // [base, prétérit, participe passé, traduction, niveau (1 = indispensable), remarque]
  const V = [
    ['be', 'was/were', 'been', 'être', 1, 'Au prétérit : I/he/she/it **was**, you/we/they **were**.'],
    ['have', 'had', 'had', 'avoir', 1],
    ['do', 'did', 'done', 'faire', 1, '**did** sert aussi d\'auxiliaire au passé : Did you…? I didn\'t…'],
    ['go', 'went', 'gone', 'aller', 1],
    ['say', 'said', 'said', 'dire', 1, 'Prononciation : said se dit « sèd ».'],
    ['get', 'got', 'got/gotten', 'obtenir, recevoir', 1, 'gotten est la forme américaine du participe passé.'],
    ['make', 'made', 'made', 'fabriquer, faire', 1],
    ['know', 'knew', 'known', 'savoir, connaître', 1, 'Le k ne se prononce pas : « nô », « niou », « nône ».'],
    ['think', 'thought', 'thought', 'penser', 1],
    ['take', 'took', 'taken', 'prendre', 1],
    ['see', 'saw', 'seen', 'voir', 1],
    ['come', 'came', 'come', 'venir', 1],
    ['give', 'gave', 'given', 'donner', 1],
    ['find', 'found', 'found', 'trouver', 1],
    ['tell', 'told', 'told', 'dire, raconter', 1],
    ['become', 'became', 'become', 'devenir', 1],
    ['leave', 'left', 'left', 'partir, quitter', 1],
    ['feel', 'felt', 'felt', 'ressentir, se sentir', 1],
    ['put', 'put', 'put', 'mettre', 1],
    ['bring', 'brought', 'brought', 'apporter', 1],
    ['begin', 'began', 'begun', 'commencer', 1],
    ['keep', 'kept', 'kept', 'garder', 1],
    ['write', 'wrote', 'written', 'écrire', 1],
    ['hear', 'heard', 'heard', 'entendre', 1],
    ['meet', 'met', 'met', 'rencontrer', 1],
    ['run', 'ran', 'run', 'courir', 1],
    ['pay', 'paid', 'paid', 'payer', 1],
    ['sit', 'sat', 'sat', 's\'asseoir', 1],
    ['speak', 'spoke', 'spoken', 'parler', 1],
    ['read', 'read', 'read', 'lire', 1, 'Même orthographe, mais au passé on prononce « rèd » (et « rid » au présent).'],
    ['eat', 'ate', 'eaten', 'manger', 1],
    ['drink', 'drank', 'drunk', 'boire', 1],
    ['sleep', 'slept', 'slept', 'dormir', 1],
    ['buy', 'bought', 'bought', 'acheter', 1],
    ['sell', 'sold', 'sold', 'vendre', 1],
    ['send', 'sent', 'sent', 'envoyer', 1],
    ['spend', 'spent', 'spent', 'dépenser, passer (du temps)', 1],
    ['understand', 'understood', 'understood', 'comprendre', 1],
    ['lose', 'lost', 'lost', 'perdre', 1],
    ['drive', 'drove', 'driven', 'conduire', 1],
    ['forget', 'forgot', 'forgotten', 'oublier', 1],
    ['stand', 'stood', 'stood', 'être debout', 2],
    ['hold', 'held', 'held', 'tenir', 2],
    ['let', 'let', 'let', 'laisser, permettre', 2],
    ['mean', 'meant', 'meant', 'signifier, vouloir dire', 2],
    ['win', 'won', 'won', 'gagner', 2, 'won se prononce comme « one ».'],
    ['learn', 'learned/learnt', 'learned/learnt', 'apprendre', 2, 'Les deux formes existent : learned (surtout américain) et learnt (britannique).'],
    ['swim', 'swam', 'swum', 'nager', 2],
    ['sing', 'sang', 'sung', 'chanter', 2],
    ['wake', 'woke', 'woken', 'se réveiller', 2],
    ['break', 'broke', 'broken', 'casser', 2],
    ['build', 'built', 'built', 'construire', 2],
    ['catch', 'caught', 'caught', 'attraper', 2],
    ['choose', 'chose', 'chosen', 'choisir', 2],
    ['cost', 'cost', 'cost', 'coûter', 2],
    ['cut', 'cut', 'cut', 'couper', 2],
    ['draw', 'drew', 'drawn', 'dessiner', 2],
    ['fall', 'fell', 'fallen', 'tomber', 2],
    ['fly', 'flew', 'flown', 'voler (en avion)', 2],
    ['grow', 'grew', 'grown', 'grandir, pousser', 2],
    ['hit', 'hit', 'hit', 'frapper, heurter', 2],
    ['hurt', 'hurt', 'hurt', 'faire mal, blesser', 2],
    ['lend', 'lent', 'lent', 'prêter', 2],
    ['ride', 'rode', 'ridden', 'aller à vélo, à cheval', 2],
    ['ring', 'rang', 'rung', 'sonner', 2],
    ['show', 'showed', 'shown', 'montrer', 2],
    ['shut', 'shut', 'shut', 'fermer', 2],
    ['steal', 'stole', 'stolen', 'voler (dérober)', 2],
    ['teach', 'taught', 'taught', 'enseigner', 2],
    ['throw', 'threw', 'thrown', 'lancer, jeter', 2],
    ['wear', 'wore', 'worn', 'porter (un vêtement)', 2],
    ['fight', 'fought', 'fought', 'se battre', 2],
    ['hide', 'hid', 'hidden', 'cacher', 2],
    ['light', 'lit', 'lit', 'allumer', 2],
    ['dream', 'dreamed/dreamt', 'dreamed/dreamt', 'rêver', 3],
    ['burn', 'burned/burnt', 'burned/burnt', 'brûler', 3],
    ['forgive', 'forgave', 'forgiven', 'pardonner', 3],
    ['freeze', 'froze', 'frozen', 'geler', 3],
    ['hang', 'hung', 'hung', 'accrocher, suspendre', 3],
    ['lay', 'laid', 'laid', 'poser (à plat), mettre la table', 3],
    ['lead', 'led', 'led', 'mener, guider', 3],
    ['shine', 'shone', 'shone', 'briller', 3],
    ['shoot', 'shot', 'shot', 'tirer (avec une arme)', 3],
    ['tear', 'tore', 'torn', 'déchirer', 3],
    ['bite', 'bit', 'bitten', 'mordre', 3],
    ['blow', 'blew', 'blown', 'souffler', 3],
    ['dig', 'dug', 'dug', 'creuser', 3],
    ['feed', 'fed', 'fed', 'nourrir', 3],
    ['shake', 'shook', 'shaken', 'secouer', 3],
    ['stick', 'stuck', 'stuck', 'coller', 3],
    ['bend', 'bent', 'bent', 'plier, se pencher', 3],
    ['quit', 'quit', 'quit', 'arrêter, quitter', 3],
    ['bet', 'bet', 'bet', 'parier', 3],
    ['spread', 'spread', 'spread', 'étaler, répandre', 3],
    ['sweep', 'swept', 'swept', 'balayer', 3]
  ];
  const f = (x) => x.split('/').map((y) => '<span class="say">' + y + '</span>').join(' / ');
  const table = (lvl) => '<table class="verbs"><tr><th>Base</th><th>Prétérit</th><th>Participe passé</th><th>Traduction</th><th></th></tr>' +
    V.filter((v) => (lvl === 1 ? v[4] === 1 : v[4] > 1)).map((v) => '<tr><td><b>' + f(v[0]) + '</b></td><td>' + f(v[1]) + '</td><td>' + f(v[2]) + '</td><td>' + v[3] + '</td><td><button class="say-all" data-say="' + v[0] + ', ' + v[1].split('/')[0] + ', ' + v[2].split('/')[0] + '" aria-label="Écouter les 3 formes">▶</button></td></tr>').join('') + '</table>';

  APP.registerChapter({
    id: 'en9', subject: 'anglais', num: 9,
    title: 'Les verbes irréguliers', subtitle: 'go · went · gone : les 3 formes à connaître par cœur',
    verbSecs: { 1: 'en9-s-liste1', 2: 'en9-s-liste2', 3: 'en9-s-liste2' },
    sections: [
      {
        id: 'en9-s-intro', title: 'C\'est quoi, un verbe irrégulier ?',
        html: `
<p>Pour parler du passé, la plupart des verbes anglais ajoutent simplement <b>-ed</b> : <span class="say">work</span> → <span class="say">worked</span> (travailler → travaillé), <span class="say">play</span> → <span class="say">played</span>. Ce sont les verbes <b>réguliers</b>.</p>
<p>Mais les verbes les plus utilisés ne suivent pas cette règle : ce sont les verbes <b>irréguliers</b>. Ils ont <b>3 formes</b> à apprendre par cœur :</p>
<table><tr><th>1. Base</th><th>2. Prétérit</th><th>3. Participe passé</th></tr>
<tr><td><span class="say">go</span></td><td><span class="say">went</span></td><td><span class="say">gone</span></td></tr>
<tr><td>I go = je vais</td><td>I went = je suis allé (hier…)</td><td>I have gone = je suis parti</td></tr></table>
<ul>
<li><b>La base</b> : le présent et l'infinitif (<span class="say">to go</span>, <span class="say">I go</span>).</li>
<li><b>Le prétérit</b> : le passé simple de tous les jours, pour une action terminée (<span class="say">Yesterday I went to the market.</span> — Hier je suis allé au marché).</li>
<li><b>Le participe passé</b> : s'utilise après <b>have / has</b> (<span class="say">I have eaten.</span> — J'ai mangé) et au passif (<span class="say">It is made in France.</span> — C'est fabriqué en France).</li>
</ul>
<div class="callout key"><b>Bonne nouvelle</b> Une cinquantaine de verbes suffisent pour presque toutes les conversations. Ils sont dans la fiche « Les indispensables ».</div>
<div class="callout tip"><b>Comment les apprendre</b> Dis les 3 formes à voix haute, comme une petite chanson : <span class="say">go, went, gone</span> · <span class="say">see, saw, seen</span> · <span class="say">eat, ate, eaten</span>. 5 verbes par jour, et les flashcards de l'appli les repasseront au bon moment.</div>`
      },
      {
        id: 'en9-s-familles', title: 'Les apprendre par familles',
        html: `
<p>Beaucoup de verbes irréguliers se ressemblent. Les apprendre par familles divise l'effort par deux.</p>
<h3>Famille A-A-A : les 3 formes sont identiques</h3>
<p><span class="say">cut, cut, cut</span> (couper) · <span class="say">put, put, put</span> (mettre) · <span class="say">let, let, let</span> · <span class="say">hit, hit, hit</span> · <span class="say">cost, cost, cost</span> · <span class="say">shut, shut, shut</span> · <span class="say">hurt, hurt, hurt</span>.</p>
<h3>Famille A-B-B : prétérit = participe passé</h3>
<ul>
<li>En <b>-ought / -aught</b> : <span class="say">buy, bought, bought</span> · <span class="say">bring, brought, brought</span> · <span class="say">think, thought, thought</span> · <span class="say">teach, taught, taught</span> · <span class="say">catch, caught, caught</span>.</li>
<li>En <b>-t</b> : <span class="say">keep, kept, kept</span> · <span class="say">sleep, slept, slept</span> · <span class="say">feel, felt, felt</span> · <span class="say">leave, left, left</span> · <span class="say">send, sent, sent</span> · <span class="say">spend, spent, spent</span> · <span class="say">meet, met, met</span>.</li>
<li>Autres : <span class="say">have, had, had</span> · <span class="say">make, made, made</span> · <span class="say">say, said, said</span> · <span class="say">pay, paid, paid</span> · <span class="say">find, found, found</span> · <span class="say">tell, told, told</span> · <span class="say">sell, sold, sold</span> · <span class="say">hear, heard, heard</span> · <span class="say">understand, understood, understood</span>.</li>
</ul>
<h3>Famille A-B-C : 3 formes différentes</h3>
<ul>
<li><b>i → a → u</b> : <span class="say">begin, began, begun</span> · <span class="say">drink, drank, drunk</span> · <span class="say">swim, swam, swum</span> · <span class="say">sing, sang, sung</span> · <span class="say">ring, rang, rung</span>.</li>
<li>Participe en <b>-en</b> : <span class="say">eat, ate, eaten</span> · <span class="say">take, took, taken</span> · <span class="say">give, gave, given</span> · <span class="say">write, wrote, written</span> · <span class="say">speak, spoke, spoken</span> · <span class="say">drive, drove, driven</span> · <span class="say">forget, forgot, forgotten</span>.</li>
<li>En <b>-ew / -own</b> : <span class="say">know, knew, known</span> · <span class="say">grow, grew, grown</span> · <span class="say">throw, threw, thrown</span> · <span class="say">fly, flew, flown</span>.</li>
<li>Les inclassables : <span class="say">go, went, gone</span> · <span class="say">see, saw, seen</span> · <span class="say">do, did, done</span> · <span class="say">be, was, been</span>.</li>
</ul>
<h3>Famille A-B-A : participe passé = base</h3>
<p><span class="say">come, came, come</span> · <span class="say">become, became, become</span> · <span class="say">run, ran, run</span>.</p>`
      },
      {
        id: 'en9-s-utiliser', title: 'Quand utiliser chaque forme ?',
        html: `
<h3>Le prétérit (2e colonne) : une action passée et terminée</h3>
<p><span class="say">I went to London last year.</span> — Je suis allé à Londres l'année dernière.<br><span class="say">She bought a new car.</span> — Elle a acheté une nouvelle voiture.</p>
<p>Le prétérit est <b>le même pour toutes les personnes</b> (I went, she went, they went). Seul <b>be</b> change : <span class="say">I was</span>, <span class="say">you were</span>.</p>
<h3>Question et négation au passé : did + la base</h3>
<p><span class="say">Did you go to the market?</span> — Es-tu allé au marché ?<br><span class="say">I didn't go.</span> — Je n'y suis pas allé.</p>
<div class="callout warn"><b>Le piège n° 1</b> Après <b>did</b> ou <b>didn't</b>, le verbe revient à la <b>base</b> : on dit <span class="say">I didn't go</span>, jamais « I didn't went ». Le passé est déjà porté par did.</div>
<h3>Le participe passé (3e colonne) : après have / has</h3>
<p><span class="say">I have seen this film.</span> — J'ai vu ce film (déjà, dans ma vie).<br><span class="say">She has lost her keys.</span> — Elle a perdu ses clés (et elle ne les a toujours pas).</p>
<div class="callout key"><b>À retenir</b> Hier, l'an dernier, il y a deux jours → <b>prétérit</b> (2e colonne). Après have / has → <b>participe passé</b> (3e colonne). Après did / didn't → <b>base</b> (1re colonne).</div>`
      },
      { id: 'en9-s-liste1', title: 'Les indispensables (tableau à écouter)', html: '<p>Les verbes irréguliers les plus utilisés. Clique sur un mot pour l\'entendre, ou sur ▶ pour entendre les 3 formes d\'affilée.</p>' + table(1) + '<div class="callout tip"><b>Astuce</b> Cache les colonnes 2 et 3 avec ta main et récite. Puis fais les exercices « Verbes irréguliers » de l\'entraînement.</div>' },
      { id: 'en9-s-liste2', title: 'Les autres verbes courants', html: '<p>À apprendre une fois les indispensables bien connus.</p>' + table(2) },
      {
        id: 'en9-s-pieges', title: 'Les pièges des francophones',
        html: `
<ul>
<li><b>Mettre -ed partout</b> : « goed », « buyed », « taked » n'existent pas → <span class="say">went</span>, <span class="say">bought</span>, <span class="say">took</span>.</li>
<li><b>Confondre prétérit et participe</b> : on dit <span class="say">I saw him yesterday</span> (pas « I seen »), et <span class="say">I have seen him</span> (pas « I have saw »).</li>
<li><b>Did + passé</b> : <span class="say">Did you see?</span> et non « Did you saw? ».</li>
<li><b>read</b> s'écrit pareil aux 3 formes, mais se prononce « rid » au présent et « rèd » au passé : écoute <span class="say">I read every day</span> puis <span class="say">I read a book yesterday</span>.</li>
<li><b>gone / been</b> : <span class="say">He has gone to Paris</span> (il est parti à Paris, il y est encore) ; <span class="say">He has been to Paris</span> (il est déjà allé à Paris, il est revenu).</li>
</ul>`
      }
    ],
    verbs: V,
    quiz: [
      { id: 'en9-q-01', q: 'Yesterday, I ___ to the cinema.', choices: ['go', 'went', 'gone', 'goed'], answer: 1, topic: 'Prétérit des verbes irréguliers', sec: 'en9-s-utiliser', why: { 0: '« go » est la base : avec yesterday (hier), il faut le passé.', 2: '« gone » est le participe passé : il s\'utilise après have / has.', 3: '« goed » n\'existe pas : go est irrégulier.' }, explain: '« Yesterday » indique le passé : on prend le prétérit de go, **went**. → Yesterday, I **went** to the cinema. (Hier, je suis allé au cinéma.)', say: 'Yesterday, I went to the cinema.' },
      { id: 'en9-q-02', q: 'I didn\'t ___ the film.', choices: ['saw', 'seen', 'see', 'sees'], answer: 2, topic: 'Négation au passé', sec: 'en9-s-utiliser', why: { 0: 'Après didn\'t, le verbe revient à la base : le passé est déjà dans did.', 1: '« seen » s\'utilise après have / has.', 3: 'Pas de -s après didn\'t.' }, explain: 'Après **didn\'t**, toujours la **base** du verbe. → I didn\'t **see** the film. (Je n\'ai pas vu le film.)', say: 'I didn\'t see the film.' },
      { id: 'en9-q-03', q: 'She has ___ her keys.', choices: ['lost', 'lose', 'losed', 'loses'], answer: 0, topic: 'Participe passé', sec: 'en9-s-utiliser', why: { 1: '« lose » est la base : après has, il faut le participe passé.', 2: '« losed » n\'existe pas : lose → lost → lost.', 3: '« loses » est le présent (elle perd).' }, explain: 'Après **has**, on met le **participe passé** : lose → lost → **lost**. → She has **lost** her keys. (Elle a perdu ses clés.)', say: 'She has lost her keys.' },
      { id: 'en9-q-04', q: 'Did you ___ breakfast this morning?', choices: ['ate', 'eat', 'eaten', 'eated'], answer: 1, topic: 'Question au passé', sec: 'en9-s-utiliser', why: { 0: 'Après did, le verbe reste à la base : le passé est porté par did.', 2: '« eaten » s\'utilise après have.', 3: '« eated » n\'existe pas.' }, explain: 'Question au passé : **Did** + sujet + **base**. → Did you **eat** breakfast this morning? (As-tu pris ton petit-déjeuner ce matin ?)', say: 'Did you eat breakfast this morning?' },
      { id: 'en9-q-05', q: 'Quelle est la famille de « buy, bought, bought » ?', choices: ['Les 3 formes identiques', 'Prétérit = participe passé', '3 formes différentes', 'Participe passé = base'], answer: 1, topic: 'Familles de verbes', sec: 'en9-s-familles', why: { 0: 'buy et bought sont différents.', 2: 'Le prétérit et le participe sont tous les deux « bought ».', 3: 'Le participe « bought » n\'est pas la base « buy ».' }, explain: 'buy → **bought** → **bought** : le prétérit et le participe passé sont identiques (famille A-B-B, comme think → thought → thought).', say: 'buy, bought, bought' },
      { id: 'en9-q-06', q: 'They ___ in Spain last summer.', choices: ['was', 'were', 'been', 'are'], answer: 1, topic: 'Prétérit de to be', sec: 'en9-s-intro', why: { 0: '« was » va avec I, he, she, it.', 2: '« been » est le participe passé (après have).', 3: '« are » est le présent ; last summer indique le passé.' }, explain: 'Au passé, to be devient **was** (I, he, she, it) ou **were** (you, we, they). → They **were** in Spain last summer. (Ils étaient en Espagne l\'été dernier.)', say: 'They were in Spain last summer.' },
      { id: 'en9-q-07', q: 'Écoute. Que dit la personne ?', listen: true, say: 'I bought some bread this morning.', choices: ['J\'ai acheté du pain ce matin.', 'J\'ai apporté du pain ce matin.', 'Je vais acheter du pain demain.', 'J\'ai pensé au pain ce matin.'], answer: 0, topic: 'Compréhension orale', sec: 'en9-s-familles', why: { 1: '« apporté » serait brought (de bring).', 2: 'La phrase est au passé (bought), pas au futur.', 3: '« pensé » serait thought (de think).' }, explain: '**bought** est le passé de **buy** (acheter). → I bought some bread this morning. (J\'ai acheté du pain ce matin.) Attention : bought (acheter) et brought (apporter) se ressemblent.' },
      { id: 'en9-q-08', q: 'Écoute. Que dit la personne ?', listen: true, say: 'We met in two thousand and five.', choices: ['Nous nous sommes rencontrés en 2005.', 'Nous nous rencontrerons en 2005.', 'Nous avons mangé en 2005.', 'Nous sommes partis en 2005.'], answer: 0, topic: 'Compréhension orale', sec: 'en9-s-liste1', why: { 1: 'met est au passé, pas au futur.', 2: '« manger » au passé serait ate.', 3: '« partir » au passé serait left.' }, explain: '**met** est le passé de **meet** (rencontrer). → We met in 2005. (Nous nous sommes rencontrés en 2005.)' },
      { id: 'en9-q-09', q: 'I have ___ this book three times.', choices: ['read', 'readed', 'red', 'reading'], answer: 0, topic: 'Participe passé', sec: 'en9-s-pieges', why: { 1: '« readed » n\'existe pas : read est irrégulier.', 2: '« red » veut dire rouge : c\'est seulement la prononciation du passé de read.', 3: 'Après have, il faut le participe passé, pas la forme en -ing.' }, explain: 'read → read → **read** (même orthographe, prononcé « rèd » au passé). → I have **read** this book three times. (J\'ai lu ce livre trois fois.)', say: 'I have read this book three times.' },
      { id: 'en9-q-10', q: 'He ___ me a long letter.', choices: ['writed', 'wrote', 'written', 'write'], answer: 1, topic: 'Prétérit des verbes irréguliers', sec: 'en9-s-liste1', why: { 0: '« writed » n\'existe pas : write → wrote → written.', 2: '« written » s\'utilise après have / has.', 3: 'Avec he au présent ce serait writes ; ici on raconte un fait passé.' }, explain: 'write → **wrote** → written. → He **wrote** me a long letter. (Il m\'a écrit une longue lettre.)', say: 'He wrote me a long letter.' }
    ],
    exercises: [
      { id: 'en9-x-01', prompt: 'Complète au prétérit : Last week, we ___ (go) to the seaside.', answers: ['went'], topic: 'Prétérit des verbes irréguliers', sec: 'en9-s-utiliser', strict: true, hint: 'go est irrégulier : 2e colonne.', explain: 'go → **went** → gone. → Last week, we **went** to the seaside. (La semaine dernière, nous sommes allés à la mer.)', rule: 'Action passée terminée (last week, yesterday, ago) → prétérit (2e colonne).', mistakes: [{ text: 'goed', msg: 'go est irrégulier : pas de -ed. Le prétérit est **went**.' }, { text: 'gone', msg: '« gone » est le participe passé (après have). Au prétérit : **went**.' }], say: 'Last week, we went to the seaside.' },
      { id: 'en9-x-02', prompt: 'Complète au prétérit : She ___ (buy) a new phone yesterday.', answers: ['bought'], topic: 'Prétérit des verbes irréguliers', sec: 'en9-s-familles', strict: true, hint: 'Famille -ought.', explain: 'buy → **bought** → bought. → She **bought** a new phone yesterday. (Elle a acheté un nouveau téléphone hier.)', rule: 'buy, bring, think, teach, catch : prétérit en -ought / -aught.', mistakes: [{ text: 'buyed', msg: 'buy est irrégulier : le prétérit est **bought**.' }, { text: 'brought', msg: '« brought » vient de bring (apporter). Acheter = buy → **bought**.' }], say: 'She bought a new phone yesterday.' },
      { id: 'en9-x-03', prompt: 'Mets à la forme négative : I saw your brother.', answers: ['I didn\'t see your brother', 'I did not see your brother'], topic: 'Négation au passé', sec: 'en9-s-utiliser', hint: 'didn\'t + base du verbe.', explain: 'Négation au passé : **didn\'t + base**. saw → **see**. → I **didn\'t see** your brother. (Je n\'ai pas vu ton frère.)', rule: 'Au passé : sujet + didn\'t + base verbale.', mistakes: [{ text: 'I didn\'t saw your brother', msg: 'Après didn\'t, le verbe revient à la **base** : see (le passé est déjà dans did).' }, { text: 'I saw not your brother', msg: 'En anglais, on ne met pas « not » après le verbe : on utilise l\'auxiliaire **didn\'t** + base.' }, { text: 'I not saw your brother', msg: 'Il faut l\'auxiliaire **didn\'t** : I didn\'t see…' }], say: 'I didn\'t see your brother.' },
      { id: 'en9-x-04', prompt: 'Pose la question au passé : You took the bus. → ___?', answers: ['Did you take the bus'], topic: 'Question au passé', sec: 'en9-s-utiliser', hint: 'Did + sujet + base ?', explain: 'Question au passé : **Did + sujet + base** : took → **take**. → **Did** you **take** the bus? (As-tu pris le bus ?)', rule: 'Question au passé : Did + sujet + base verbale ?', mistakes: [{ text: 'Did you took the bus', msg: 'Après did, le verbe revient à la **base** : take.' }, { text: 'You took the bus', msg: 'Pour poser une question, il faut l\'auxiliaire **Did** en premier : Did you take…?' }, { text: 'Took you the bus', msg: 'En anglais, on n\'inverse pas le verbe : on utilise **Did** + sujet + base.' }], say: 'Did you take the bus?' },
      { id: 'en9-x-05', prompt: 'Complète : I have ___ (eat) too much!', answers: ['eaten'], topic: 'Participe passé', sec: 'en9-s-utiliser', strict: true, hint: 'Après have : 3e colonne.', explain: 'Après **have**, le participe passé : eat → ate → **eaten**. → I have **eaten** too much! (J\'ai trop mangé !)', rule: 'have / has + participe passé (3e colonne).', mistakes: [{ text: 'ate', msg: '« ate » est le prétérit. Après have : participe passé **eaten**.' }, { text: 'eated', msg: 'eat est irrégulier : eat → ate → **eaten**.' }], say: 'I have eaten too much!' },
      { id: 'en9-x-06', prompt: 'Complète au prétérit : They ___ (be) very happy.', answers: ['were'], topic: 'Prétérit de to be', sec: 'en9-s-intro', strict: true, hint: 'They : was ou were ?', explain: 'to be au passé : I/he/she/it **was**, you/we/they **were**. → They **were** very happy. (Ils étaient très heureux.)', rule: 'was avec I, he, she, it ; were avec you, we, they.', mistakes: [{ text: 'was', msg: '« was » va avec I, he, she, it. Avec they : **were**.' }, { text: 'been', msg: '« been » est le participe passé (après have). Au prétérit : **were**.' }], say: 'They were very happy.' },
      { id: 'en9-x-07', prompt: 'Traduis : J\'ai oublié mon parapluie. (au prétérit)', answers: ['I forgot my umbrella'], topic: 'Prétérit des verbes irréguliers', sec: 'en9-s-liste1', hint: 'oublier = forget (irrégulier).', explain: 'forget → **forgot** → forgotten. → I **forgot** my umbrella.', rule: 'Le passé composé français se traduit souvent par le prétérit anglais.', mistakes: [{ text: 'I forgetted my umbrella', msg: 'forget est irrégulier : le prétérit est **forgot**.' }, { text: 'I have forgot my umbrella', msg: 'Après have, il faudrait le participe forgotten ; mais ici le prétérit simple suffit : **I forgot my umbrella**.' }], say: 'I forgot my umbrella.' },
      { id: 'en9-x-08', prompt: 'Complète au prétérit : He ___ (tell) me a funny story.', answers: ['told'], topic: 'Prétérit des verbes irréguliers', sec: 'en9-s-familles', strict: true, hint: 'tell, sell : prétérit en -old.', explain: 'tell → **told** → told. → He **told** me a funny story. (Il m\'a raconté une histoire drôle.)', rule: 'tell → told, sell → sold.', mistakes: [{ text: 'telled', msg: 'tell est irrégulier : **told**.' }, { text: 'tells', msg: '« tells » est le présent. Au prétérit : **told**.' }], say: 'He told me a funny story.' },
      { id: 'en9-x-09', prompt: 'Complète au prétérit : We ___ (meet) at a party.', answers: ['met'], topic: 'Prétérit des verbes irréguliers', sec: 'en9-s-familles', strict: true, hint: 'meet → … (famille en -t).', explain: 'meet → **met** → met. → We **met** at a party. (Nous nous sommes rencontrés à une fête.)', rule: 'keep → kept, sleep → slept, meet → met, feel → felt.', mistakes: [{ text: 'meeted', msg: 'meet est irrégulier : **met**.' }, { text: 'meet', msg: 'Il faut le prétérit : meet → **met**.' }], say: 'We met at a party.' },
      { id: 'en9-x-10', prompt: 'Complète au prétérit : I ___ (sleep) very well last night.', answers: ['slept'], topic: 'Prétérit des verbes irréguliers', sec: 'en9-s-familles', strict: true, hint: 'sleep → … (famille en -t).', explain: 'sleep → **slept** → slept. → I **slept** very well last night. (J\'ai très bien dormi cette nuit.)', rule: 'keep → kept, sleep → slept, feel → felt.', mistakes: [{ text: 'sleeped', msg: 'sleep est irrégulier : **slept**.' }, { text: 'sleept', msg: 'Le double e devient un seul e : **slept**.' }], say: 'I slept very well last night.' },
      { id: 'en9-x-11', prompt: 'Complète : Have you ever ___ (be) to London?', answers: ['been'], topic: 'Participe passé', sec: 'en9-s-pieges', strict: true, hint: 'Après have : participe passé de be.', explain: 'be → was/were → **been**. → Have you ever **been** to London? (Es-tu déjà allé à Londres ?)', rule: 'have been to + lieu = être déjà allé quelque part.', mistakes: [{ text: 'was', msg: '« was » est le prétérit. Après have : **been**.' }, { text: 'gone', msg: '« gone » voudrait dire que la personne y est encore. Pour « déjà allé (et revenu) » : **been**.' }], say: 'Have you ever been to London?' },
      { id: 'en9-x-12', prompt: 'Complète au prétérit : My father ___ (drive) to work.', answers: ['drove'], topic: 'Prétérit des verbes irréguliers', sec: 'en9-s-familles', strict: true, hint: 'drive, write, ride : i → o.', explain: 'drive → **drove** → driven. → My father **drove** to work. (Mon père est allé au travail en voiture.)', rule: 'drive → drove, write → wrote, ride → rode.', mistakes: [{ text: 'drived', msg: 'drive est irrégulier : **drove**.' }, { text: 'driven', msg: '« driven » est le participe passé (après have). Au prétérit : **drove**.' }], say: 'My father drove to work.' },
      { id: 'en9-x-13', prompt: 'Traduis : Elle a écrit une lettre. (au prétérit)', answers: ['She wrote a letter'], topic: 'Prétérit des verbes irréguliers', sec: 'en9-s-liste1', hint: 'écrire = write (irrégulier).', explain: 'write → **wrote** → written. → She **wrote** a letter.', rule: 'Action terminée dans le passé → prétérit.', mistakes: [{ text: 'She writed a letter', msg: 'write est irrégulier : **wrote**.' }, { text: 'She written a letter', msg: '« written » ne s\'utilise qu\'après have/has. Au prétérit : **wrote**.' }], say: 'She wrote a letter.' },
      { id: 'en9-x-14', prompt: 'Complète au prétérit : The children ___ (run) in the garden.', answers: ['ran'], topic: 'Prétérit des verbes irréguliers', sec: 'en9-s-familles', strict: true, hint: 'run → … → run.', explain: 'run → **ran** → run. → The children **ran** in the garden. (Les enfants ont couru dans le jardin.)', rule: 'come → came → come, run → ran → run (participe = base).', mistakes: [{ text: 'runned', msg: 'run est irrégulier : **ran**.' }, { text: 'run', msg: 'Il faut le prétérit : run → **ran**.' }], say: 'The children ran in the garden.' },
      { id: 'en9-x-15', prompt: 'Complète : I didn\'t ___ (understand) the question.', answers: ['understand'], topic: 'Négation au passé', sec: 'en9-s-utiliser', strict: true, hint: 'Après didn\'t : quelle forme ?', explain: 'Après **didn\'t**, la **base** : I didn\'t **understand** the question. (Je n\'ai pas compris la question.)', rule: 'didn\'t + base verbale (1re colonne).', mistakes: [{ text: 'understood', msg: 'Après didn\'t, le verbe revient à la **base** : understand.' }, { text: 'understands', msg: 'Pas de -s après didn\'t : **understand**.' }], say: 'I didn\'t understand the question.' }
    ]
  });
})();
