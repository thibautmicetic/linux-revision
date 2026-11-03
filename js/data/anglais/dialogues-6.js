/* Anglais — dialogues des chapitres 17 et 18 */
APP.registerDialogues([
  /* ---------- Chapitre 17 : au travail ---------- */
  {
    id: 'en17-d-01', ch: 'en17', level: 1, sec: 'en17-s-forsince',
    title: 'La nouvelle collègue',
    context: 'Lundi matin, au bureau, Mark fait la connaissance d\'une nouvelle collègue, Helen.',
    speakers: { A: { name: 'Mark', g: 'm' }, B: { name: 'Helen', g: 'f' } },
    lines: [
      ['A', 'Hi, I\'m Mark. Are you the new accountant?', 'Salut, je suis Mark. Tu es la nouvelle comptable ?'],
      ['B', 'Yes, I am. I\'m Helen. Nice to meet you.', 'Oui. Je suis Helen. Enchantée.'],
      ['A', 'Nice to meet you too. Where did you work before?', 'Enchanté. Où est-ce que tu travaillais avant ?'],
      ['B', 'I worked for a bank in Bristol for six years.', 'J\'ai travaillé pour une banque à Bristol pendant six ans.'],
      ['A', 'And how long have you lived in London?', 'Et depuis combien de temps habites-tu à Londres ?'],
      ['B', 'Only since March. And you? How long have you worked here?', 'Seulement depuis mars. Et toi ? Depuis combien de temps travailles-tu ici ?'],
      ['A', 'For twelve years! I\'m in the sales department.', 'Depuis douze ans ! Je suis au service commercial.'],
      ['B', 'Twelve years? That\'s a long time!', 'Douze ans ? C\'est long !'],
      ['A', 'Yes, it is! Come on, I\'ll show you the coffee machine.', 'Eh oui ! Viens, je vais te montrer la machine à café.']
    ],
    questions: [
      { q: 'Où Helen travaillait-elle avant ?', choices: ['Dans une banque à Bristol', 'Dans une banque à Londres', 'Dans une usine à Bristol'], answer: 0, at: 3,
        why: { 1: 'Londres, c\'est la ville où elle habite maintenant. Elle dit « a bank **in Bristol** ».', 2: 'Une usine se dirait « a factory ». Helen dit « a **bank** » : une banque.' },
        explain: '« I **worked for a bank in Bristol** for six years » : j\'ai travaillé pour une banque à Bristol pendant six ans. Prétérit + for = c\'est fini (pendant).' },
      { q: 'Depuis quand Helen habite-t-elle à Londres ?', choices: ['Depuis six ans', 'Depuis mars', 'Depuis douze ans'], answer: 1, at: 5,
        why: { 0: 'Six ans, c\'est le temps qu\'elle a passé à la banque de Bristol (« for six years »).', 2: 'Douze ans, c\'est Mark : il travaille dans l\'entreprise depuis douze ans.' },
        explain: '« Only **since March** » : seulement depuis mars. **since** + un point de départ (ici, un mois).' },
      { q: 'Depuis combien de temps Mark travaille-t-il dans l\'entreprise ?', choices: ['2 ans', '12 ans', '20 ans'], answer: 1, at: 6,
        why: { 0: '2 ans se dirait « two years ». Mark dit « **twelve** » : douze.', 2: '20 ans se dirait « twenty years ». Mark dit « **twelve** » : douze.' },
        explain: 'Helen demande « How long have you worked here? » et Mark répond « **For twelve years!** » : depuis douze ans.' }
    ]
  },
  {
    id: 'en17-d-02', ch: 'en17', level: 2, sec: 'en17-s-entretien',
    title: 'L\'entretien d\'embauche',
    context: 'David passe un entretien d\'embauche pour un poste d\'électricien. Mme Clark lui pose des questions.',
    speakers: { A: { name: 'Mrs Clark', g: 'f' }, B: { name: 'David', g: 'm' } },
    lines: [
      ['A', 'Good morning, David. Please sit down.', 'Bonjour, David. Asseyez-vous, je vous en prie.'],
      ['B', 'Thank you, Mrs Clark.', 'Merci, madame Clark.'],
      ['A', 'So, how long have you been an electrician?', 'Alors, depuis combien de temps êtes-vous électricien ?'],
      ['B', 'Since 2010. First, I worked for a big company.', 'Depuis 2010. D\'abord, j\'ai travaillé pour une grande entreprise.'],
      ['A', 'And now?', 'Et maintenant ?'],
      ['B', 'I\'ve been self-employed for five years.', 'Je suis à mon compte depuis cinq ans.'],
      ['A', 'So why do you want this job?', 'Alors, pourquoi voulez-vous ce poste ?'],
      ['B', 'I\'d like to work in a team again.', 'Je voudrais de nouveau travailler en équipe.'],
      ['A', 'I see. It\'s a full-time job. When can you start?', 'Je vois. C\'est un poste à plein temps. Quand pouvez-vous commencer ?'],
      ['B', 'In two weeks, on the first of June.', 'Dans deux semaines, le premier juin.']
    ],
    questions: [
      { q: 'Depuis quand David est-il électricien ?', choices: ['Depuis 2010', 'Depuis 2012', 'Depuis cinq ans'], answer: 0, at: 3,
        why: { 1: 'David dit « since 2010 », pas 2012.', 2: 'Cinq ans, c\'est depuis quand il est **à son compte** (self-employed), pas depuis quand il est électricien.' },
        explain: '« How long have you been an electrician? » — « **Since 2010** » : depuis 2010. **since** + une année.' },
      { q: 'Quelle est la situation de David aujourd\'hui ?', choices: ['Il travaille pour une grande entreprise', 'Il est à son compte', 'Il est au chômage'], answer: 1, at: 5,
        why: { 0: '« I worked for a big company » est au prétérit : c\'était avant, c\'est fini.', 2: 'Au chômage se dirait « unemployed ». David dit « **self-employed** » : à son compte.' },
        explain: '« I\'**ve been self-employed** for five years » : je suis à mon compte depuis cinq ans. Le present perfect montre que c\'est encore vrai.' },
      { q: 'Quand David peut-il commencer ?', choices: ['Dans deux semaines, le 1er juin', 'Dans deux mois, le 1er juin', 'Dans deux semaines, le 1er juillet'], answer: 0, at: 9,
        why: { 1: 'Deux mois se dirait « two months ». David dit « two **weeks** » : deux semaines.', 2: 'Juillet se dirait « July ». David dit « **June** » : juin.' },
        explain: '« In **two weeks**, on the **first of June** » : dans deux semaines, le premier juin.' }
    ]
  },
  {
    id: 'en17-d-03', ch: 'en17', level: 3, sec: 'en17-s-fini',
    title: 'Les anciens collègues',
    context: 'En ville, George, qui est à la retraite, rencontre Linda. Ils ont travaillé ensemble à l\'usine.',
    speakers: { A: { name: 'Linda', g: 'f' }, B: { name: 'George', g: 'm' } },
    lines: [
      ['A', 'George! I haven\'t seen you for ages!', 'George ! Ça fait une éternité que je ne t\'ai pas vu !'],
      ['B', 'Linda! How are you? Do you still work at the factory?', 'Linda ! Comment vas-tu ? Tu travailles toujours à l\'usine ?'],
      ['A', 'No, not any more. I left in 2020.', 'Non, plus maintenant. Je suis partie en 2020.'],
      ['B', 'Really? What do you do now?', 'Vraiment ? Qu\'est-ce que tu fais maintenant ?'],
      ['A', 'I\'m a manager in a supermarket. I\'ve worked there for four years.', 'Je suis responsable dans un supermarché. J\'y travaille depuis quatre ans.'],
      ['B', 'Good for you!', 'Tant mieux pour toi !'],
      ['A', 'And you? Are you enjoying your retirement?', 'Et toi ? Tu profites bien de ta retraite ?'],
      ['B', 'Yes, very much. I\'ve been retired since January.', 'Oui, beaucoup. Je suis à la retraite depuis janvier.'],
      ['A', 'Only since January! What do you do all day?', 'Seulement depuis janvier ! Qu\'est-ce que tu fais de tes journées ?'],
      ['B', 'I help at the hospital. I\'m a volunteer there twice a week.', 'J\'aide à l\'hôpital. J\'y suis bénévole deux fois par semaine.']
    ],
    questions: [
      { q: 'Linda travaille-t-elle encore à l\'usine ?', choices: ['Oui, depuis 2020', 'Non, elle est partie en 2020', 'Oui, mais à temps partiel'], answer: 1, at: 2,
        why: { 0: 'Linda répond « No, **not any more** » (non, plus maintenant). 2020 est l\'année de son départ : « I **left** in 2020 ».', 2: 'Elle répond non (« not any more ») et ne parle pas de temps partiel (part-time).' },
        explain: '« No, **not any more**. I **left** in 2020 » : non, plus maintenant. Je suis partie en 2020. (**left** = prétérit de **leave**.)' },
      { q: 'Que fait Linda aujourd\'hui, et depuis combien de temps ?', choices: ['Elle est responsable dans un supermarché, depuis 4 ans', 'Elle est caissière dans un supermarché, depuis 4 ans', 'Elle est responsable dans un supermarché, depuis 14 ans'], answer: 0, at: 4,
        why: { 1: 'Caissière se dirait « cashier ». Linda dit « a **manager** » : une responsable.', 2: '14 se dirait « fourteen ». Linda dit « for **four** years » : depuis quatre ans.' },
        explain: '« I\'m a **manager** in a supermarket. I\'**ve worked** there **for four years** » : je suis responsable dans un supermarché, j\'y travaille depuis quatre ans.' },
      { q: 'Que fait George depuis qu\'il est à la retraite ?', choices: ['Il a trouvé un nouvel emploi à l\'hôpital', 'Il est bénévole à l\'hôpital deux fois par semaine', 'Il va à l\'hôpital deux fois par semaine pour se soigner'], answer: 1, at: 9,
        why: { 0: 'Ce n\'est pas un emploi : « a **volunteer** » = un bénévole (il n\'est pas payé).', 2: 'Il dit « I **help** at the hospital » : il aide, il n\'est pas malade.' },
        explain: '« I help at the hospital. I\'m a **volunteer** there **twice a week** » : j\'aide à l\'hôpital, j\'y suis bénévole deux fois par semaine.' }
    ]
  },
  /* ---------- Chapitre 18 : au téléphone ---------- */
  {
    id: 'en18-d-01', ch: 'en18', level: 1, sec: 'en18-s-message',
    title: 'Un message pour Mme Shaw',
    context: 'Paul, un Français, téléphone à l\'entreprise Green and Co. C\'est la standardiste, Kate, qui répond.',
    speakers: { A: { name: 'Kate', g: 'f' }, B: { name: 'Paul', g: 'm' } },
    lines: [
      ['A', 'Good morning, Green and Co. Kate speaking.', 'Bonjour, Green and Co, Kate à l\'appareil.'],
      ['B', 'Hello. Could I speak to Mrs Shaw, please?', 'Bonjour. Pourrais-je parler à Mme Shaw, s\'il vous plaît ?'],
      ['A', 'I\'m afraid she\'s in a meeting until eleven.', 'Malheureusement, elle est en réunion jusqu\'à onze heures.'],
      ['B', 'Oh. Can I leave a message?', 'Ah. Est-ce que je peux laisser un message ?'],
      ['A', 'Of course. May I have your name, please?', 'Bien sûr. Puis-je avoir votre nom, s\'il vous plaît ?'],
      ['B', 'Paul Dumas. That\'s D, U, M, A, S.', 'Paul Dumas. Ça s\'écrit D, U, M, A, S.'],
      ['A', 'Thank you. And what\'s it about?', 'Merci. Et c\'est à quel sujet ?'],
      ['B', 'The contract. Could you ask her to call me back?', 'Le contrat. Pourriez-vous lui demander de me rappeler ?'],
      ['A', 'Certainly. I\'ll give her the message.', 'Certainement. Je lui transmettrai le message.']
    ],
    questions: [
      { q: 'Où est Mme Shaw, et jusqu\'à quelle heure ?', choices: ['En réunion jusqu\'à 11 h', 'En réunion jusqu\'à 7 h', 'En vacances jusqu\'à lundi'], answer: 0, at: 2,
        why: { 1: '7 se dirait « seven ». Kate dit « **eleven** » : onze.', 2: 'En vacances se dirait « on holiday ». Kate dit « in a **meeting** » : en réunion.' },
        explain: '« I\'m afraid she\'s **in a meeting until eleven** » : malheureusement, elle est en réunion jusqu\'à onze heures.' },
      { q: 'Comment s\'écrit le nom de famille de Paul ?', choices: ['DUMAS', 'DIMAS', 'DUMAR'], answer: 0, at: 5,
        why: { 1: 'I se dirait « aï ». La deuxième lettre se dit « iou » : c\'est un U.', 2: 'R se dirait « âr ». La dernière lettre se dit « ès » : c\'est un S.' },
        explain: 'D (« di »), U (« iou »), M (« èm »), A (« éï »), S (« ès ») → **DUMAS**.' },
      { q: 'Que demande Paul ?', choices: ['Que Mme Shaw le rappelle', 'Que Mme Shaw lui envoie le contrat', 'Un rendez-vous avec Mme Shaw'], answer: 0, at: 7,
        why: { 1: 'Le contrat, c\'est le sujet de l\'appel (« The contract »). Mais Paul demande « ask her to **call me back** ».', 2: 'Un rendez-vous se dirait « an appointment ». Paul n\'en demande pas.' },
        explain: '« Could you **ask her to call me back**? » : pourriez-vous lui demander de me rappeler ?' }
    ]
  },
  {
    id: 'en18-d-02', ch: 'en18', level: 2, sec: 'en18-s-email',
    title: 'Les coordonnées de Gemma',
    context: 'Gemma téléphone à un club de randonnée pour s\'inscrire. Ian, un bénévole du club, note ses coordonnées.',
    speakers: { A: { name: 'Ian', g: 'm' }, B: { name: 'Gemma', g: 'f' } },
    lines: [
      ['A', 'Can I have your contact details, please?', 'Puis-je avoir vos coordonnées, s\'il vous plaît ?'],
      ['B', 'Of course. My name is Gemma Jones.', 'Bien sûr. Je m\'appelle Gemma Jones.'],
      ['A', 'Is that Gemma with a G or a J?', 'Gemma, c\'est avec un G ou un J ?'],
      ['B', 'With a G: G, E, double M, A.', 'Avec un G : G, E, deux M, A.'],
      ['A', 'Thanks. And what\'s your email address?', 'Merci. Et quelle est votre adresse e-mail ?'],
      ['B', 'It\'s gemma dot jones at gmail dot com.', 'C\'est gemma point jones arobase gmail point com.'],
      ['A', 'And your phone number?', 'Et votre numéro de téléphone ?'],
      ['B', 'Oh seven seven double oh, nine six one, four three two.', '07700 961 432.'],
      ['A', 'Sorry, was that nine six one or nine five one?', 'Pardon, c\'était 961 ou 951 ?'],
      ['B', 'Nine six one. Six!', '961. Six !']
    ],
    questions: [
      { q: 'Comment s\'écrit le prénom ?', choices: ['JEMMA', 'GEMMA', 'GEMA'], answer: 1, at: 3,
        why: { 0: 'Gemma dit « with a **G** » (« dji »). J se dirait « djéï ».', 2: 'Elle dit « **double M** » : il y a deux M.' },
        explain: '« With a **G**: G, E, **double M**, A » → **GEMMA**.' },
      { q: 'Quelle est son adresse e-mail ?', choices: ['gemma.jones@gmail.com', 'gemma-jones@gmail.com', 'gemmajones@gmail.com'], answer: 0, at: 5,
        why: { 1: 'Le tiret se dirait « dash ». Gemma dit « **dot** » : un point.', 2: 'Gemma dit « gemma **dot** jones » : il y a un point entre les deux noms.' },
        explain: '« gemma **dot** jones **at** gmail **dot** com » → gemma.jones@gmail.com.' },
      { q: 'Ian n\'est pas sûr d\'un morceau du numéro. Quel est le bon ?', choices: ['961', '951', '991'], answer: 0, at: 9,
        why: { 1: '951, c\'est ce que Ian croyait avoir entendu. Gemma corrige : « Nine **six** one. Six! »', 2: 'Il n\'y a pas de « double nine » : c\'est nine, **six**, one.' },
        explain: 'Ian demande « nine six one or nine five one? » et Gemma répond « **Nine six one. Six!** » : 961.' }
    ]
  },
  {
    id: 'en18-d-03', ch: 'en18', level: 3, sec: 'en18-s-rdv',
    title: 'Le rendez-vous chez le coiffeur',
    context: 'Robert a rendez-vous chez le coiffeur. Il appelle le salon, où Emily répond.',
    speakers: { A: { name: 'Emily', g: 'f' }, B: { name: 'Robert', g: 'm' } },
    lines: [
      ['A', 'Good morning, Top Cut. How can I help you?', 'Bonjour, salon Top Cut. Que puis-je faire pour vous ?'],
      ['B', 'Hello, it\'s Robert Hill. I have an appointment on Thursday at ten.', 'Bonjour, c\'est Robert Hill. J\'ai rendez-vous jeudi à dix heures.'],
      ['A', 'Yes, Mr Hill. I can see it here.', 'Oui, monsieur Hill. Je le vois ici.'],
      ['B', 'I\'m afraid I can\'t make it. I\'m taking my wife to the airport.', 'Malheureusement, je ne pourrai pas venir. J\'emmène ma femme à l\'aéroport.'],
      ['A', 'No problem. Would you like Friday afternoon instead?', 'Pas de problème. Voulez-vous vendredi après-midi à la place ?'],
      ['B', 'Hmm, I\'m playing golf on Friday. Is Saturday possible?', 'Hum, je joue au golf vendredi. Samedi, ce serait possible ?'],
      ['A', 'Let me check. Yes, Saturday at half past nine.', 'Je regarde. Oui, samedi à neuf heures et demie.'],
      ['B', 'Perfect. That suits me.', 'Parfait. Ça me convient.'],
      ['A', 'Great. I\'ll text you to confirm.', 'Très bien. Je vous enverrai un SMS pour confirmer.'],
      ['B', 'Thank you very much. Goodbye!', 'Merci beaucoup. Au revoir !']
    ],
    questions: [
      { q: 'Pourquoi Robert ne peut-il pas venir jeudi ?', choices: ['Il joue au golf', 'Il emmène sa femme à l\'aéroport', 'Il est malade'], answer: 1, at: 3,
        why: { 0: 'Le golf, c\'est vendredi : « I\'m playing golf **on Friday** ».', 2: 'Il ne parle pas de santé. Il dit « I\'m **taking my wife to the airport** ».' },
        explain: '« I\'m afraid I **can\'t make it**. I\'m **taking my wife to the airport** » : je ne pourrai pas venir, j\'emmène ma femme à l\'aéroport. Le présent continu montre que c\'est déjà prévu.' },
      { q: 'Pourquoi Robert refuse-t-il vendredi après-midi ?', choices: ['Le salon est fermé le vendredi', 'Il a déjà prévu de jouer au golf', 'Il travaille le vendredi'], answer: 1, at: 5,
        why: { 0: 'C\'est Emily qui propose vendredi : le salon est donc ouvert.', 2: 'Robert ne parle pas de travail. Il dit « I\'m **playing golf** on Friday ».' },
        explain: '« Hmm, **I\'m playing golf on Friday** » : je joue au golf vendredi. Il refuse poliment en donnant son programme (présent continu = déjà prévu), puis propose samedi.' },
      { q: 'Quel est le nouveau rendez-vous ?', choices: ['Samedi à 9 h 30', 'Samedi à 10 h', 'Vendredi à 9 h 30', 'Samedi à 8 h 30'], answer: 0, at: 6,
        why: { 1: '10 h, c\'était l\'heure du rendez-vous de jeudi. Emily dit « half past **nine** ».', 2: 'Vendredi, Robert joue au golf. Le nouveau rendez-vous est **Saturday** : samedi.', 3: '8 h 30 se dirait « half past eight ». Emily dit « half past **nine** ».' },
        explain: '« Yes, **Saturday at half past nine** » : oui, samedi à neuf heures et demie. Robert répond « That suits me » : ça me convient.' }
    ]
  }
]);
