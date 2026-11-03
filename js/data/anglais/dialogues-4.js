/* Anglais — dialogues des chapitres 13 et 14 */
APP.registerDialogues([
  /* ---------- Chapitre 13 : le present perfect ---------- */
  {
    id: 'en13-d-01', ch: 'en13', level: 1, sec: 'en13-s-nouvelles',
    title: 'Des nouvelles de la famille',
    context: 'Au supermarché, Linda croise son voisin Peter.',
    speakers: { A: { name: 'Linda', g: 'f' }, B: { name: 'Peter', g: 'm' } },
    lines: [
      ['A', 'Hello, Peter! I haven\'t seen you recently.', 'Bonjour, Peter ! Je ne t\'ai pas vu ces derniers temps.'],
      ['B', 'Hi, Linda! We\'ve just come back from Scotland.', 'Salut, Linda ! Nous venons de rentrer d\'Écosse.'],
      ['A', 'How lovely! And how is your family?', 'Super ! Et comment va ta famille ?'],
      ['B', 'Very well. Guess what? Our daughter has had a baby!', 'Très bien. Tu sais quoi ? Notre fille a eu un bébé !'],
      ['A', 'Congratulations! Is it a boy or a girl?', 'Félicitations ! C\'est un garçon ou une fille ?'],
      ['B', 'A little girl. She was born on Monday.', 'Une petite fille. Elle est née lundi.'],
      ['A', 'That\'s great news! Have you seen her yet?', 'C\'est une super nouvelle ! Tu l\'as déjà vue ?'],
      ['B', 'Not yet. We\'re going to visit them on Saturday.', 'Pas encore. Nous allons leur rendre visite samedi.']
    ],
    questions: [
      { q: 'D\'où Peter vient-il de rentrer ?', choices: ['D\'Irlande', 'D\'Écosse', 'D\'Angleterre'], answer: 1, at: 1,
        why: { 0: 'L\'Irlande se dirait « Ireland ». Peter dit « **Scotland** ».', 2: 'L\'Angleterre se dirait « England ». Peter dit « **Scotland** » : l\'Écosse.' },
        explain: '« We\'ve **just come back** from **Scotland** » : nous venons de rentrer d\'Écosse. **have just** + participe passé = venir de.' },
      { q: 'Quel jour le bébé est-il né ?', choices: ['Samedi', 'Dimanche', 'Lundi'], answer: 2, at: 5,
        why: { 0: 'Samedi (Saturday), c\'est le jour où Peter va rendre visite au bébé.', 1: 'Dimanche se dirait « Sunday ». Peter dit « on **Monday** ».' },
        explain: '« A little girl. She was **born on Monday** » : une petite fille, née lundi. Avec un jour précis, Peter passe au prétérit (was born).' },
      { q: 'Peter a-t-il déjà vu sa petite-fille ?', choices: ['Oui, il l\'a vue lundi', 'Non, pas encore : il ira samedi', 'Non, et il ne peut pas y aller'], answer: 1, at: 7,
        why: { 0: 'Linda demande « Have you seen her **yet**? » et Peter répond « **Not yet** » : pas encore.', 2: 'Il va y aller : « We\'re **going to visit** them on Saturday ».' },
        explain: '« **Not yet**. We\'re going to visit them on Saturday » : pas encore, nous allons leur rendre visite samedi.' }
    ]
  },
  {
    id: 'en13-d-02', ch: 'en13', level: 2, sec: 'en13-s-deja-encore',
    title: 'Avant le départ',
    context: 'Carol et son mari Richard partent en vacances ce matin. Carol vérifie que tout est prêt.',
    speakers: { A: { name: 'Carol', g: 'f' }, B: { name: 'Richard', g: 'm' } },
    lines: [
      ['A', 'Richard, have you packed yet?', 'Richard, tu as fait ta valise ?'],
      ['B', 'Yes, I\'ve already packed my suitcase.', 'Oui, j\'ai déjà fait ma valise.'],
      ['A', 'Good. Have you watered the plants?', 'Bien. Tu as arrosé les plantes ?'],
      ['B', 'Yes, I\'ve just done it.', 'Oui, je viens de le faire.'],
      ['A', 'And the bin? Have you taken it out?', 'Et la poubelle ? Tu l\'as sortie ?'],
      ['B', 'Oh no, not yet. I\'ll do it now.', 'Oh non, pas encore. Je le fais tout de suite.'],
      ['A', 'Where are the passports? I can\'t find them.', 'Où sont les passeports ? Je ne les trouve pas.'],
      ['B', 'It\'s OK, I\'ve put them in my bag.', 'Pas de souci, je les ai mis dans mon sac.'],
      ['A', 'Great! Oh, the taxi has just arrived!', 'Parfait ! Oh, le taxi vient d\'arriver !']
    ],
    questions: [
      { q: 'Quand Richard a-t-il arrosé les plantes ?', choices: ['Il y a un instant', 'Hier soir', 'Il ne l\'a pas encore fait'], answer: 0, at: 3,
        why: { 1: 'Hier soir se dirait « last night ». Richard dit « I\'ve **just** done it ».', 2: 'C\'est fait : « Yes, I\'ve just done it ». C\'est la poubelle qui n\'est pas encore sortie.' },
        explain: '« Yes, I\'ve **just done** it » : oui, je viens de le faire. **just** = venir de.' },
      { q: 'Qu\'est-ce que Richard n\'a pas encore fait ?', choices: ['Sa valise', 'Sortir la poubelle', 'Appeler le taxi'], answer: 1, at: 5,
        why: { 0: 'Sa valise est prête : « I\'ve **already** packed my suitcase ».', 2: 'Personne ne parle d\'appeler le taxi : il arrive tout seul à la fin.' },
        explain: 'Carol demande pour la poubelle (**the bin**) et Richard répond « Oh no, **not yet**. I\'ll do it now » : oh non, pas encore, je le fais tout de suite.' },
      { q: 'Où sont les passeports ?', choices: ['Dans la valise', 'Sur la table', 'Dans le sac de Richard'], answer: 2, at: 7,
        why: { 0: 'Richard ne parle pas de la valise ici. Il dit « in **my bag** ».', 1: 'La table (the table) n\'est pas mentionnée. Richard dit « in **my bag** ».' },
        explain: '« I\'ve **put them in my bag** » : je les ai mis dans mon sac. put, put, put.' }
    ]
  },
  {
    id: 'en13-d-03', ch: 'en13', level: 3, sec: 'en13-s-been-gone',
    title: 'Tu es déjà allé au Canada ?',
    context: 'À un anniversaire, Helen discute avec Mark, un ami de son frère.',
    speakers: { A: { name: 'Helen', g: 'f' }, B: { name: 'Mark', g: 'm' } },
    lines: [
      ['A', 'Have you ever been to Canada, Mark?', 'Tu es déjà allé au Canada, Mark ?'],
      ['B', 'Yes, twice. I went there in 2015 and 2019.', 'Oui, deux fois. J\'y suis allé en 2015 et en 2019.'],
      ['A', 'Oh, I\'d like to go there. I\'ve never been to America.', 'Oh, j\'aimerais y aller. Je ne suis jamais allée en Amérique.'],
      ['B', 'You should go! My wife loved it.', 'Tu devrais y aller ! Ma femme a adoré.'],
      ['A', 'Is your wife here tonight?', 'Ta femme est là ce soir ?'],
      ['B', 'No, she\'s gone to Spain with her sister.', 'Non, elle est partie en Espagne avec sa sœur.'],
      ['A', 'Oh, when did she leave?', 'Ah, quand est-elle partie ?'],
      ['B', 'On Sunday. She\'ll be back next week.', 'Dimanche. Elle sera de retour la semaine prochaine.'],
      ['A', 'And you? Have you been to Spain?', 'Et toi ? Tu es déjà allé en Espagne ?'],
      ['B', 'Yes, many times. But I\'ve never seen Madrid!', 'Oui, plein de fois. Mais je n\'ai jamais vu Madrid !']
    ],
    questions: [
      { q: 'Combien de fois Mark est-il allé au Canada ?', choices: ['Une fois', 'Deux fois', 'Trois fois'], answer: 1, at: 1,
        why: { 0: 'Une fois se dirait « once ». Mark dit « **twice** ».', 2: 'Trois fois se dirait « three times ». Mark dit « **twice** » et donne deux années : 2015 et 2019.' },
        explain: '« Yes, **twice**. I went there in 2015 and 2019 » : oui, deux fois. Avec les dates, Mark passe au **prétérit** (went).' },
      { q: 'Helen est-elle déjà allée en Amérique ?', choices: ['Oui, en 2015', 'Oui, avec la femme de Mark', 'Non, jamais'], answer: 2, at: 2,
        why: { 0: 'C\'est Mark qui est allé au Canada en 2015, pas Helen.', 1: 'C\'est la femme de Mark qui a adoré le Canada. Helen dit « I\'ve **never** been to America ».' },
        explain: '« I\'ve **never been** to America » : je ne suis jamais allée en Amérique.' },
      { q: 'Où est la femme de Mark en ce moment ?', choices: ['En Espagne', 'À la fête', 'Au Canada', 'À la maison : elle est rentrée dimanche'], answer: 0, at: 5,
        why: { 1: 'Helen demande si elle est là ce soir, et Mark répond « **No** ».', 2: 'Elle a adoré le Canada, mais elle n\'y est pas en ce moment.', 3: 'Dimanche, c\'est le jour où elle est **partie** (« When did she leave? — On Sunday »). Elle rentre la semaine prochaine.' },
        explain: '« She\'s **gone** to Spain with her sister » : elle est partie en Espagne avec sa sœur. **gone** = partie et pas encore revenue : elle est donc en Espagne.' }
    ]
  },
  /* ---------- Chapitre 14 : raconter une histoire ---------- */
  {
    id: 'en14-d-01', ch: 'en14', level: 1, sec: 'en14-s-incidents',
    title: 'Un petit accident',
    context: 'Jenny arrive en retard au bureau. Son collègue Dan lui demande ce qui s\'est passé.',
    speakers: { A: { name: 'Dan', g: 'm' }, B: { name: 'Jenny', g: 'f' } },
    lines: [
      ['A', 'Jenny! What happened? Are you OK?', 'Jenny ! Que s\'est-il passé ? Ça va ?'],
      ['B', 'I had a little accident this morning.', 'J\'ai eu un petit accident ce matin.'],
      ['A', 'Oh no! What were you doing?', 'Oh non ! Qu\'est-ce que tu faisais ?'],
      ['B', 'I was walking to the bus stop.', 'J\'allais à pied à l\'arrêt de bus.'],
      ['A', 'And then?', 'Et ensuite ?'],
      ['B', 'There was ice everywhere. Suddenly, I slipped and fell.', 'Il y avait du verglas partout. Soudain, j\'ai glissé et je suis tombée.'],
      ['A', 'Are you hurt?', 'Tu es blessée ?'],
      ['B', 'Just my hand. A kind man helped me.', 'Juste la main. Un monsieur gentil m\'a aidée.'],
      ['A', 'You were lucky! Sit down, I\'ll make you a tea.', 'Tu as eu de la chance ! Assieds-toi, je vais te faire un thé.']
    ],
    questions: [
      { q: 'Que faisait Jenny au moment de l\'accident ?', choices: ['Elle conduisait', 'Elle allait à pied à l\'arrêt de bus', 'Elle attendait le bus'], answer: 1, at: 3,
        why: { 0: 'Conduire se dirait « I was driving ». Jenny dit « I was **walking** ».', 2: 'Attendre le bus se dirait « I was waiting for the bus ». Jenny dit « I was **walking to** the bus stop ».' },
        explain: '« I **was walking** to the bus stop » : j\'allais à pied à l\'arrêt de bus. **was + -ing** = l\'action en cours au moment de l\'accident.' },
      { q: 'Pourquoi est-elle tombée ?', choices: ['Elle a glissé sur le verglas', 'Une voiture l\'a heurtée', 'Elle courait sous la pluie'], answer: 0, at: 5,
        why: { 1: 'Il n\'y a pas de voiture (car) dans l\'histoire.', 2: 'Jenny marchait (walking), et elle parle de verglas (**ice**), pas de pluie (rain).' },
        explain: '« There was **ice** everywhere. Suddenly, I **slipped** and **fell** » : il y avait du verglas partout. Soudain, j\'ai glissé et je suis tombée.' },
      { q: 'Où Jenny a-t-elle mal ?', choices: ['Au bras', 'À la tête', 'À la main'], answer: 2, at: 7,
        why: { 0: 'Le bras se dirait « my arm ». Jenny dit « my **hand** ».', 1: 'La tête se dirait « my head ». Jenny dit « my **hand** ».' },
        explain: '« Just my **hand** » : juste la main. Puis « A kind man **helped** me » : un monsieur gentil m\'a aidée.' }
    ]
  },
  {
    id: 'en14-d-02', ch: 'en14', level: 2, sec: 'en14-s-incidents',
    title: 'Au commissariat',
    context: 'Paul, un touriste, entre au commissariat. Une policière le reçoit.',
    speakers: { A: { name: 'Officer Jones', g: 'f' }, B: { name: 'Paul', g: 'm' } },
    lines: [
      ['A', 'Good afternoon. How can I help you?', 'Bonjour. Que puis-je faire pour vous ?'],
      ['B', 'I\'d like to report a theft. Someone stole my wallet.', 'Je voudrais signaler un vol. Quelqu\'un a volé mon portefeuille.'],
      ['A', 'I\'m sorry. When did it happen?', 'Je suis désolée. Quand est-ce arrivé ?'],
      ['B', 'About an hour ago, at the market.', 'Il y a environ une heure, au marché.'],
      ['A', 'What were you doing?', 'Que faisiez-vous ?'],
      ['B', 'I was buying some fruit. A man was standing behind me.', 'J\'achetais des fruits. Un homme se tenait derrière moi.'],
      ['A', 'Can you describe him?', 'Pouvez-vous le décrire ?'],
      ['B', 'He was young and very tall.', 'Il était jeune et très grand.'],
      ['A', 'What was he wearing?', 'Que portait-il ?'],
      ['B', 'A green jacket. Then he ran away.', 'Une veste verte. Ensuite, il s\'est enfui.']
    ],
    questions: [
      { q: 'Qu\'est-ce qu\'on a volé à Paul ?', choices: ['Son sac', 'Son téléphone', 'Son portefeuille'], answer: 2, at: 1,
        why: { 0: 'Le sac se dirait « my bag ». Paul dit « my **wallet** ».', 1: 'Le téléphone se dirait « my phone ». Paul dit « my **wallet** » : mon portefeuille.' },
        explain: '« I\'d like to **report a theft**. Someone **stole** my **wallet** » : je voudrais signaler un vol. Quelqu\'un a volé mon portefeuille.' },
      { q: 'Que faisait Paul au moment du vol ?', choices: ['Il achetait des fruits', 'Il buvait un café', 'Il attendait le bus'], answer: 0, at: 5,
        why: { 1: 'Boire un café se dirait « I was having a coffee ». Paul dit « I was **buying** some **fruit** ».', 2: 'Attendre le bus se dirait « I was waiting for the bus ». Paul était au marché (at the market).' },
        explain: '« I **was buying** some fruit » : j\'achetais des fruits. Le passé continu décrit ce que Paul était en train de faire.' },
      { q: 'Comment le voleur était-il habillé ?', choices: ['D\'une veste rouge', 'D\'un manteau vert', 'D\'une veste verte'], answer: 2, at: 9,
        why: { 0: 'Rouge se dirait « red ». Paul dit « **green** ».', 1: 'Un manteau se dirait « a coat ». Paul dit « a green **jacket** ».' },
        explain: '« What **was** he **wearing**? — A **green jacket** » : que portait-il ? — Une veste verte. Puis « he **ran away** » : il s\'est enfui.' }
    ]
  },
  {
    id: 'en14-d-03', ch: 'en14', level: 3, sec: 'en14-s-used-to',
    title: 'Quand papi était petit',
    context: 'Lucy, dix ans, pose des questions à son grand-père George sur son enfance.',
    speakers: { A: { name: 'Lucy', g: 'f' }, B: { name: 'George', g: 'm' } },
    lines: [
      ['A', 'Grandpa, where did you live when you were a child?', 'Papi, où habitais-tu quand tu étais enfant ?'],
      ['B', 'I grew up on a farm, near a small village.', 'J\'ai grandi dans une ferme, près d\'un petit village.'],
      ['A', 'Did you use to have animals?', 'Vous aviez des animaux ?'],
      ['B', 'Yes, we had horses and a big dog called Max.', 'Oui, nous avions des chevaux et un gros chien qui s\'appelait Max.'],
      ['A', 'Did you use to walk to school?', 'Tu allais à l\'école à pied ?'],
      ['B', 'Yes, every day. It took forty minutes!', 'Oui, tous les jours. Ça prenait quarante minutes !'],
      ['A', 'Wow! What did you use to do after school?', 'Waouh ! Que faisais-tu après l\'école ?'],
      ['B', 'I used to help my father on the farm.', 'J\'aidais mon père à la ferme.'],
      ['A', 'Did you have a TV?', 'Vous aviez la télé ?'],
      ['B', 'No, we didn\'t. We used to play cards in the evening.', 'Non. Le soir, nous jouions aux cartes.']
    ],
    questions: [
      { q: 'Où George a-t-il grandi ?', choices: ['Dans une grande ville', 'Dans une ferme, près d\'un village', 'Dans un village au bord de la mer'], answer: 1, at: 1,
        why: { 0: 'Une grande ville se dirait « a big city ». George dit « on a **farm**, near a small **village** ».', 2: 'La mer (the sea) n\'est pas mentionnée. George a grandi dans une ferme (a **farm**).' },
        explain: '« I **grew up** on a **farm**, near a small village » : j\'ai grandi dans une ferme, près d\'un petit village. grow up, grew up : grandir.' },
      { q: 'Combien de temps lui fallait-il pour aller à l\'école ?', choices: ['40 minutes', '14 minutes', '50 minutes'], answer: 0, at: 5,
        why: { 1: '14 se dit « fourteen » (on appuie sur la fin). George dit « **forty** » (on appuie sur le début) : 40.', 2: '50 se dit « fifty ». George dit « **forty** » : 40.' },
        explain: '« Yes, every day. It took **forty minutes**! » : oui, tous les jours. Ça prenait quarante minutes !' },
      { q: 'Que faisait la famille le soir ?', choices: ['Elle regardait la télé', 'Elle lisait des livres', 'Elle jouait aux cartes'], answer: 2, at: 9,
        why: { 0: 'Ils n\'avaient pas la télé : à la question « Did you have a TV? », George répond « No, we **didn\'t** ».', 1: 'George ne parle pas de livres (books). Il dit « we **used to play cards** ».' },
        explain: '« We **used to play cards** in the evening » : le soir, nous jouions aux cartes. **used to** = une habitude du passé.' }
    ]
  }
]);
