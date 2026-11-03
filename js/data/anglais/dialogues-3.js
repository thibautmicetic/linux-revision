/* Anglais — dialogues des chapitres 9 à 12 */
APP.registerDialogues([
  /* ---------- Chapitre 9 : les verbes irréguliers ---------- */
  {
    id: 'en9-d-01', ch: 'en9', level: 1, sec: 'en9-s-liste1',
    title: 'Le week-end de Susan',
    context: 'Lundi matin, Mike croise sa voisine Susan et lui demande des nouvelles de son week-end.',
    speakers: { A: { name: 'Mike', g: 'm' }, B: { name: 'Susan', g: 'f' } },
    lines: [
      ['A', 'Hello, Susan! Did you have a good weekend?', 'Bonjour, Susan ! Tu as passé un bon week-end ?'],
      ['B', 'Yes, thanks. I went to the market on Saturday.', 'Oui, merci. Je suis allée au marché samedi.'],
      ['A', 'Oh, nice! What did you buy?', 'Ah, sympa ! Qu\'est-ce que tu as acheté ?'],
      ['B', 'I bought some fish and a lot of fruit.', 'J\'ai acheté du poisson et beaucoup de fruits.'],
      ['A', 'And what did you do on Sunday?', 'Et qu\'est-ce que tu as fait dimanche ?'],
      ['B', 'My sister came for lunch. She brought a cake.', 'Ma sœur est venue déjeuner. Elle a apporté un gâteau.'],
      ['A', 'Lovely! Was it good?', 'Super ! Il était bon ?'],
      ['B', 'Yes, it was delicious!', 'Oui, il était délicieux !']
    ],
    questions: [
      { q: 'Où Susan est-elle allée samedi ?', choices: ['Au supermarché', 'Au marché', 'À la boulangerie'], answer: 1, at: 1,
        why: { 0: '« Supermarket » veut dire supermarché. Susan dit « the **market** » : le marché.', 2: 'La boulangerie se dirait « the bakery ». Susan dit « the **market** ».' },
        explain: '« I **went** to the **market** on Saturday » : je suis allée au marché samedi. **Went** est le prétérit de **go** (aller).' },
      { q: 'Qu\'a-t-elle acheté ?', choices: ['Du poisson et des fruits', 'Du poisson et des légumes', 'De la viande et des fruits'], answer: 0, at: 3,
        why: { 1: 'Des légumes se dirait « vegetables ». Susan dit « a lot of **fruit** ».', 2: 'De la viande se dirait « meat ». Susan dit « some **fish** » : du poisson.' },
        explain: '« I **bought** some **fish** and a lot of **fruit** » : j\'ai acheté du poisson et beaucoup de fruits. **Bought** est le prétérit de **buy** (acheter).' },
      { q: 'Qui est venu déjeuner dimanche ?', choices: ['Sa mère', 'Une amie', 'Sa sœur'], answer: 2, at: 5,
        why: { 0: 'Sa mère se dirait « my mother ». Susan dit « my **sister** ».', 1: 'Une amie se dirait « my friend ». Susan dit « my **sister** ».' },
        explain: '« My **sister came** for lunch. She **brought** a cake » : ma sœur est venue déjeuner, elle a apporté un gâteau. **Came** vient de **come**, **brought** de **bring**.' }
    ]
  },
  {
    id: 'en9-d-02', ch: 'en9', level: 2, sec: 'en9-s-liste1',
    title: 'Une journée difficile',
    context: 'Le soir, Emma demande à son mari Tony comment s\'est passée sa journée.',
    speakers: { A: { name: 'Emma', g: 'f' }, B: { name: 'Tony', g: 'm' } },
    lines: [
      ['A', 'Hi, Tony. How was your day?', 'Salut, Tony. Comment s\'est passée ta journée ?'],
      ['B', 'Terrible! I woke up late this morning.', 'Horrible ! Je me suis réveillé en retard ce matin.'],
      ['A', 'Oh no! Did you take the bus?', 'Oh non ! Tu as pris le bus ?'],
      ['B', 'No, I took a taxi. It cost thirty pounds!', 'Non, j\'ai pris un taxi. Ça m\'a coûté trente livres !'],
      ['A', 'Thirty pounds? Oh dear!', 'Trente livres ? Oh là là !'],
      ['B', 'And I forgot my phone at home.', 'Et j\'ai oublié mon téléphone à la maison.'],
      ['A', 'I know. I found it on the table!', 'Je sais. Je l\'ai trouvé sur la table !'],
      ['B', 'What a day! I\'d like a cup of tea.', 'Quelle journée ! Je voudrais une tasse de thé.']
    ],
    questions: [
      { q: 'Qu\'est-il arrivé à Tony ce matin ?', choices: ['Il s\'est réveillé en retard', 'Il était malade', 'Il a raté son train'], answer: 0, at: 1,
        why: { 1: 'Malade se dirait « ill ». Tony dit « I **woke up late** ».', 2: 'Tony ne parle pas de train. Il dit « I **woke up late** » : je me suis réveillé en retard.' },
        explain: '« I **woke up late** this morning » : je me suis réveillé en retard ce matin. **Woke** est le prétérit de **wake** (se réveiller).' },
      { q: 'Combien a coûté le taxi ?', choices: ['13 livres', '30 livres', '40 livres'], answer: 1, at: 3,
        why: { 0: '13 se dit « thirteen » (on appuie sur la fin). Tony dit « **thirty** » (on appuie sur le début) : 30.', 2: '40 se dit « forty ». Tony dit « **thirty** » : 30.' },
        explain: '« It **cost thirty pounds** » : ça a coûté trente livres. **Cost** ne change pas au prétérit (cost, cost, cost).' },
      { q: 'Où était le téléphone de Tony ?', choices: ['Dans le taxi', 'Au bureau', 'À la maison, sur la table'], answer: 2, at: 6,
        why: { 0: 'Il ne l\'a pas perdu dans le taxi : il l\'a oublié « **at home** », à la maison.', 1: 'Au bureau se dirait « at the office ». Tony dit « **at home** ».' },
        explain: 'Tony dit « I **forgot** my phone **at home** » et Emma répond « I **found** it **on the table** » : je l\'ai trouvé sur la table. **Forgot** vient de **forget**, **found** de **find**.' }
    ]
  },
  {
    id: 'en9-d-03', ch: 'en9', level: 3, sec: 'en9-s-liste1',
    title: 'Le mariage',
    context: 'Au bureau, Gary demande à sa collègue Alice comment s\'est passé le mariage de samedi.',
    speakers: { A: { name: 'Gary', g: 'm' }, B: { name: 'Alice', g: 'f' } },
    lines: [
      ['A', 'Hi, Alice! How was the wedding on Saturday?', 'Salut, Alice ! Comment s\'est passé le mariage samedi ?'],
      ['B', 'Wonderful! My nephew got married in a small church.', 'Merveilleux ! Mon neveu s\'est marié dans une petite église.'],
      ['A', 'Lovely! What did you wear?', 'Super ! Qu\'est-ce que tu portais ?'],
      ['B', 'I wore a blue dress and a hat.', 'Je portais une robe bleue et un chapeau.'],
      ['A', 'And did you have a good dinner?', 'Et vous avez bien dîné ?'],
      ['B', 'Yes, we ate and drank a lot!', 'Oui, nous avons beaucoup mangé et beaucoup bu !'],
      ['A', 'What time did you leave?', 'À quelle heure êtes-vous partis ?'],
      ['B', 'At two in the morning! I slept all day on Sunday.', 'À deux heures du matin ! J\'ai dormi toute la journée dimanche.']
    ],
    questions: [
      { q: 'Qui s\'est marié samedi ?', choices: ['Son fils', 'Son neveu', 'Sa nièce'], answer: 1, at: 1,
        why: { 0: 'Son fils se dirait « my son ». Alice dit « my **nephew** » : mon neveu.', 2: 'Sa nièce se dirait « my niece ». Alice dit « my **nephew** » : mon neveu.' },
        explain: '« My **nephew got married** in a small church » : mon neveu s\'est marié dans une petite église. **Got** est le prétérit de **get** (get married = se marier).' },
      { q: 'Que portait Alice ?', choices: ['Une robe bleue et un chapeau', 'Une robe bleue et un manteau', 'Une jupe bleue et un chapeau'], answer: 0, at: 3,
        why: { 1: 'Un manteau se dirait « a coat ». Alice dit « a **hat** » : un chapeau.', 2: 'Une jupe se dirait « a skirt ». Alice dit « a blue **dress** » : une robe bleue.' },
        explain: '« I **wore** a blue **dress** and a **hat** » : je portais une robe bleue et un chapeau. **Wore** est le prétérit de **wear** (porter un vêtement).' },
      { q: 'À quelle heure sont-ils partis ?', choices: ['À minuit', 'À 2 h de l\'après-midi', 'À 2 h du matin'], answer: 2, at: 7,
        why: { 0: 'Minuit se dirait « midnight ». Alice dit « at **two** in the morning ».', 1: '« In the **morning** » veut dire du matin. 2 h de l\'après-midi se dirait « two in the afternoon ».' },
        explain: 'Gary demande « What time did you **leave**? » et Alice répond « At **two in the morning** » : à deux heures du matin. Puis « I **slept** all day » : **slept** est le prétérit de **sleep** (dormir).' }
    ]
  },

  /* ---------- Chapitre 10 : projets et voyages ---------- */
  {
    id: 'en10-d-01', ch: 'en10', level: 1, sec: 'en10-s-hotel-gare',
    title: 'Au guichet de la gare',
    context: 'Peter est au guichet d\'une gare anglaise. Il veut aller à Cambridge.',
    speakers: { A: { name: 'Peter', g: 'm' }, B: { name: 'Joan', g: 'f' } },
    lines: [
      ['A', 'Good morning. A return ticket to Cambridge, please.', 'Bonjour. Un aller-retour pour Cambridge, s\'il vous plaît.'],
      ['B', 'Are you travelling today?', 'Vous voyagez aujourd\'hui ?'],
      ['A', 'Yes, and I\'ll come back tomorrow.', 'Oui, et je reviendrai demain.'],
      ['B', 'OK. That\'s twenty-four pounds, please.', 'D\'accord. Ça fait vingt-quatre livres, s\'il vous plaît.'],
      ['A', 'Here you are. What time does the next train leave?', 'Voici. À quelle heure part le prochain train ?'],
      ['B', 'At ten fifteen, from platform three.', 'À dix heures quinze, quai numéro trois.'],
      ['A', 'Thank you very much.', 'Merci beaucoup.'],
      ['B', 'You\'re welcome. Have a nice trip!', 'Je vous en prie. Bon voyage !']
    ],
    questions: [
      { q: 'Quel billet Peter achète-t-il ?', choices: ['Un aller simple', 'Un aller-retour', 'Deux allers simples'], answer: 1, at: 0,
        why: { 0: 'Un aller simple se dirait « a **single** ticket ». Peter demande « a **return** ticket ».', 2: 'Peter demande un seul billet : « **a return** ticket », un aller-retour.' },
        explain: '« A **return ticket** to Cambridge, please » : un aller-retour pour Cambridge. Il le confirme ensuite : « I\'ll **come back** tomorrow » (je reviendrai demain).' },
      { q: 'Combien coûte le billet ?', choices: ['24 livres', '14 livres', '34 livres'], answer: 0, at: 3,
        why: { 1: '14 se dirait « fourteen ». Joan dit « **twenty-four** » : 24.', 2: '34 se dirait « thirty-four ». Joan dit « **twenty-four** » : 24.' },
        explain: '« That\'s **twenty-four pounds**, please » : ça fait vingt-quatre livres, s\'il vous plaît.' },
      { q: 'De quel quai part le train ?', choices: ['Quai 2', 'Quai 10', 'Quai 3'], answer: 2, at: 5,
        why: { 0: '2 se dirait « two ». Joan dit « platform **three** ».', 1: '10, c\'est l\'heure (« at **ten** fifteen », 10 h 15). Le quai, c\'est « platform **three** ».' },
        explain: '« At ten fifteen, from **platform three** » : à 10 h 15, quai numéro trois.' }
    ]
  },
  {
    id: 'en10-d-02', ch: 'en10', level: 2, sec: 'en10-s-chemin',
    title: 'Le chemin du musée',
    context: 'Anne visite une ville anglaise. Elle arrête un passant dans la rue.',
    speakers: { A: { name: 'Anne', g: 'f' }, B: { name: 'Robert', g: 'm' } },
    lines: [
      ['A', 'Excuse me, how do I get to the museum?', 'Excusez-moi, comment aller au musée ?'],
      ['B', 'Go straight on, then turn left at the traffic lights.', 'Allez tout droit, puis tournez à gauche au feu.'],
      ['A', 'Left at the traffic lights. Is it far?', 'À gauche au feu. C\'est loin ?'],
      ['B', 'No, it\'s ten minutes on foot.', 'Non, c\'est à dix minutes à pied.'],
      ['A', 'Is it on the left or on the right?', 'Il est à gauche ou à droite ?'],
      ['B', 'On the right, opposite the church.', 'À droite, en face de l\'église.'],
      ['A', 'Thanks! I\'ll walk, then.', 'Merci ! Alors j\'irai à pied.'],
      ['B', 'Enjoy your visit!', 'Bonne visite !']
    ],
    questions: [
      { q: 'Que faut-il faire au feu ?', choices: ['Tourner à droite', 'Aller tout droit', 'Tourner à gauche'], answer: 2, at: 1,
        why: { 0: 'À droite se dirait « turn right ». Robert dit « turn **left** ».', 1: '« Go straight on » (allez tout droit), c\'est avant le feu. Au feu : « turn **left** ».' },
        explain: '« Go straight on, then **turn left at the traffic lights** » : allez tout droit, puis tournez à gauche au feu.' },
      { q: 'Combien de temps faut-il à pied ?', choices: ['Deux minutes', 'Dix minutes', 'Cinq minutes'], answer: 1, at: 3,
        why: { 0: 'Deux se dirait « two ». Robert dit « **ten** minutes ».', 2: 'Cinq se dirait « five ». Robert dit « **ten** minutes ».' },
        explain: '« No, it\'s **ten minutes on foot** » : non, c\'est à dix minutes à pied.' },
      { q: 'Où se trouve le musée ?', choices: ['En face de l\'église', 'À côté de l\'église', 'Derrière l\'église'], answer: 0, at: 5,
        why: { 1: 'À côté de se dirait « next to ». Robert dit « **opposite** » : en face de.', 2: 'Derrière se dirait « behind ». Robert dit « **opposite** » : en face de.' },
        explain: '« On the right, **opposite the church** » : à droite, en face de l\'église.' }
    ]
  },
  {
    id: 'en10-d-03', ch: 'en10', level: 3, sec: 'en10-s-going',
    title: 'Les projets de l\'été',
    context: 'Helen demande à son ami Colin ce qu\'il va faire cet été.',
    speakers: { A: { name: 'Helen', g: 'f' }, B: { name: 'Colin', g: 'm' } },
    lines: [
      ['A', 'What are you going to do this summer?', 'Qu\'est-ce que tu vas faire cet été ?'],
      ['B', 'We\'re going to visit London in July.', 'Nous allons visiter Londres en juillet.'],
      ['A', 'Lovely! Are you going to fly?', 'Super ! Vous allez prendre l\'avion ?'],
      ['B', 'No, we\'re going to take the train.', 'Non, nous allons prendre le train.'],
      ['A', 'And where are you going to stay?', 'Et où allez-vous loger ?'],
      ['B', 'In a small hotel near the station.', 'Dans un petit hôtel près de la gare.'],
      ['A', 'Did you book a room?', 'Vous avez réservé une chambre ?'],
      ['B', 'No, I\'ll book it tomorrow.', 'Non, je la réserverai demain.'],
      ['A', 'Don\'t forget, Colin! July is very busy.', 'N\'oublie pas, Colin ! En juillet, il y a beaucoup de monde.']
    ],
    questions: [
      { q: 'Quand Colin va-t-il à Londres ?', choices: ['En juin', 'En juillet', 'En août'], answer: 1, at: 1,
        why: { 0: 'Juin se dit « June ». Colin dit « in **July** ».', 2: 'Août se dit « August ». Colin dit « in **July** ».' },
        explain: '« We\'re **going to visit** London **in July** » : nous allons visiter Londres en juillet. **Going to** = un projet déjà décidé.' },
      { q: 'Comment vont-ils voyager ?', choices: ['En train', 'En avion', 'En car'], answer: 0, at: 3,
        why: { 1: 'Helen demande « Are you going to fly? » (vous allez prendre l\'avion ?) et Colin répond « **No** ».', 2: 'Un car se dirait « a coach ». Colin dit « take the **train** ».' },
        explain: '« No, we\'re **going to take the train** » : non, nous allons prendre le train.' },
      { q: 'Quand Colin va-t-il réserver la chambre ?', choices: ['Ce soir', 'La semaine prochaine', 'Demain'], answer: 2, at: 7,
        why: { 0: 'Ce soir se dirait « tonight ». Colin dit « **tomorrow** ».', 1: 'La semaine prochaine se dirait « next week ». Colin dit « **tomorrow** ».' },
        explain: '« No, **I\'ll book it tomorrow** » : non, je la réserverai demain. **I\'ll** = I will : une décision prise sur le moment.' }
    ]
  },

  /* ---------- Chapitre 11 : décrire et comparer ---------- */
  {
    id: 'en11-d-01', ch: 'en11', level: 1, sec: 'en11-s-sante',
    title: 'Une visite chez le médecin',
    context: 'Julia ne se sent pas bien. Elle est chez le médecin, le docteur Patel.',
    speakers: { A: { name: 'Dr Patel', g: 'm' }, B: { name: 'Julia', g: 'f' } },
    lines: [
      ['A', 'Good morning, Julia. What\'s the problem?', 'Bonjour, Julia. Qu\'est-ce qui ne va pas ?'],
      ['B', 'I have a headache and a sore throat.', 'J\'ai mal à la tête et à la gorge.'],
      ['A', 'Do you have a fever?', 'Avez-vous de la fièvre ?'],
      ['B', 'Yes, a little. And I\'m very tired.', 'Oui, un peu. Et je suis très fatiguée.'],
      ['A', 'You must take this medicine.', 'Vous devez prendre ce médicament.'],
      ['B', 'How often should I take it?', 'Combien de fois faut-il le prendre ?'],
      ['A', 'One tablet three times a day.', 'Un comprimé trois fois par jour.'],
      ['B', 'Can I go to work tomorrow?', 'Est-ce que je peux aller travailler demain ?'],
      ['A', 'No, you should rest for two days.', 'Non, vous devriez vous reposer pendant deux jours.']
    ],
    questions: [
      { q: 'Où Julia a-t-elle mal ?', choices: ['À la tête et à la gorge', 'À la tête et au dos', 'Au ventre et à la gorge'], answer: 0, at: 1,
        why: { 1: 'Mal au dos se dirait « my back hurts ». Julia dit « a **sore throat** » : mal à la gorge.', 2: 'Mal au ventre se dirait avec « stomach ». Julia dit « a **headache** » : mal à la tête.' },
        explain: '« I have a **headache** and a **sore throat** » : j\'ai mal à la tête et à la gorge.' },
      { q: 'Combien de fois par jour doit-elle prendre le médicament ?', choices: ['Une fois', 'Deux fois', 'Trois fois'], answer: 2, at: 6,
        why: { 0: '« **One** tablet », c\'est un comprimé à chaque fois. Mais le médecin dit « **three times** a day ».', 1: 'Deux fois se dirait « twice ». Le médecin dit « **three times** a day ».' },
        explain: '« One tablet **three times a day** » : un comprimé trois fois par jour.' },
      { q: 'Peut-elle aller travailler demain ?', choices: ['Oui, sans problème', 'Non, elle devrait se reposer deux jours', 'Oui, mais seulement l\'après-midi'], answer: 1, at: 8,
        why: { 0: 'Julia demande « Can I go to work tomorrow? » et le médecin répond « **No** ».', 2: 'Le médecin ne parle pas d\'après-midi : il répond « **No**, you should **rest** ».' },
        explain: '« No, you **should rest** for two days » : non, vous devriez vous reposer pendant deux jours. **Should** = devrait : un conseil.' }
    ]
  },
  {
    id: 'en11-d-02', ch: 'en11', level: 2, sec: 'en11-s-comparatif',
    title: 'Quel hôtel choisir ?',
    context: 'Lucy et Simon sont en vacances au bord de la mer. Ils cherchent un hôtel.',
    speakers: { A: { name: 'Lucy', g: 'f' }, B: { name: 'Simon', g: 'm' } },
    lines: [
      ['A', 'Look, Simon, there are two hotels here.', 'Regarde, Simon, il y a deux hôtels ici.'],
      ['B', 'The Grand Hotel is very beautiful.', 'Le Grand Hotel est très beau.'],
      ['A', 'Yes, but it\'s more expensive: ninety pounds a night.', 'Oui, mais il est plus cher : quatre-vingt-dix livres la nuit.'],
      ['B', 'And the Park Hotel?', 'Et le Park Hotel ?'],
      ['A', 'It\'s cheaper. Sixty pounds a night.', 'Il est moins cher. Soixante livres la nuit.'],
      ['B', 'Is it near the beach?', 'Il est près de la plage ?'],
      ['A', 'Yes, it\'s nearer than the Grand Hotel.', 'Oui, il est plus près que le Grand Hotel.'],
      ['B', 'Perfect! The Park Hotel, then.', 'Parfait ! Le Park Hotel, alors.']
    ],
    questions: [
      { q: 'Combien coûte une nuit au Grand Hotel ?', choices: ['60 livres', '90 livres', '19 livres'], answer: 1, at: 2,
        why: { 0: '60 livres (« **sixty** »), c\'est le prix du Park Hotel.', 2: '19 se dirait « nineteen ». Lucy dit « **ninety** » : 90.' },
        explain: '« It\'s **more expensive**: **ninety pounds** a night » : il est plus cher, 90 livres la nuit.' },
      { q: 'Que dit Lucy du Park Hotel ?', choices: ['Il est moins cher', 'Il est plus beau', 'Il est plus grand'], answer: 0, at: 4,
        why: { 1: 'C\'est le Grand Hotel qui est « very **beautiful** ».', 2: 'Plus grand se dirait « bigger ». Lucy dit « It\'s **cheaper** » : il est moins cher.' },
        explain: '« It\'s **cheaper**. Sixty pounds a night » : il est moins cher, 60 livres la nuit. **Cheaper** = cheap + **-er**.' },
      { q: 'Où est le Park Hotel ?', choices: ['Loin de la plage', 'Près de la gare', 'Près de la plage'], answer: 2, at: 6,
        why: { 0: 'Loin se dirait « far ». Simon demande « Is it near the beach? » et Lucy répond « **Yes** ».', 1: 'Ils ne parlent pas de gare (« station ») mais de la plage : « the **beach** ».' },
        explain: 'Simon demande « Is it **near the beach**? » et Lucy répond « Yes, it\'s **nearer than** the Grand Hotel » : oui, il est plus près que le Grand Hotel.' }
    ]
  },
  {
    id: 'en11-d-03', ch: 'en11', level: 3, sec: 'en11-s-superlatif',
    title: 'Le meilleur restaurant',
    context: 'Fiona vient d\'arriver dans le quartier. Elle demande conseil à son voisin Brian.',
    speakers: { A: { name: 'Fiona', g: 'f' }, B: { name: 'Brian', g: 'm' } },
    lines: [
      ['A', 'Brian, what\'s the best restaurant in town?', 'Brian, quel est le meilleur restaurant de la ville ?'],
      ['B', 'Luigi\'s. It\'s small, but the pasta is delicious.', 'Chez Luigi. C\'est petit, mais les pâtes sont délicieuses.'],
      ['A', 'Is it expensive?', 'C\'est cher ?'],
      ['B', 'No, it\'s cheaper than the restaurants in the centre.', 'Non, c\'est moins cher que les restaurants du centre-ville.'],
      ['A', 'Great! Where is it?', 'Super ! Où est-ce ?'],
      ['B', 'It\'s next to the bank, in Green Street.', 'C\'est à côté de la banque, dans Green Street.'],
      ['A', 'Should I book a table?', 'Je devrais réserver une table ?'],
      ['B', 'Yes, you must. There are only eight tables.', 'Oui, il le faut. Il n\'y a que huit tables.'],
      ['A', 'Thanks, Brian! I\'ll call them today.', 'Merci, Brian ! Je les appellerai aujourd\'hui.']
    ],
    questions: [
      { q: 'Que dit Brian du restaurant de Luigi ?', choices: ['Il est grand et moderne', 'Les pâtes sont délicieuses', 'Les pizzas sont excellentes'], answer: 1, at: 1,
        why: { 0: 'Brian dit « It\'s **small** » : c\'est petit.', 2: 'Brian ne parle pas de pizzas : il dit « the **pasta** is delicious » (les pâtes).' },
        explain: '« It\'s small, but the **pasta** is **delicious** » : c\'est petit, mais les pâtes sont délicieuses.' },
      { q: 'Comment sont les prix chez Luigi ?', choices: ['Plus chers que dans le centre', 'Aussi chers que dans le centre', 'Moins chers que dans le centre'], answer: 2, at: 3,
        why: { 0: 'Plus cher se dirait « more expensive ». Brian dit « **cheaper than** » : moins cher que.', 1: 'Aussi cher que se dirait « as expensive as ». Brian dit « **cheaper than** » : moins cher que.' },
        explain: '« No, it\'s **cheaper than** the restaurants in the centre » : non, c\'est moins cher que les restaurants du centre-ville.' },
      { q: 'Combien de tables y a-t-il au restaurant ?', choices: ['8 tables', '18 tables', '80 tables'], answer: 0, at: 7,
        why: { 1: '18 se dirait « eighteen ». Brian dit « **eight** » : 8.', 2: '80 se dirait « eighty ». Brian dit « **eight** » : 8.' },
        explain: '« Yes, you **must**. There are only **eight tables** » : oui, il le faut, il n\'y a que huit tables. **Must** = devoir : une obligation.' }
    ]
  },

  /* ---------- Chapitre 12 : converser au quotidien ---------- */
  {
    id: 'en12-d-01', ch: 'en12', level: 1, sec: 'en12-s-shopping',
    title: 'Au magasin de vêtements',
    context: 'Alan entre dans un magasin de vêtements. Une vendeuse, Megan, vient le voir.',
    speakers: { A: { name: 'Megan', g: 'f' }, B: { name: 'Alan', g: 'm' } },
    lines: [
      ['A', 'Hello! Can I help you?', 'Bonjour ! Je peux vous aider ?'],
      ['B', 'Yes, please. Do you have this jacket in blue?', 'Oui, s\'il vous plaît. Vous avez cette veste en bleu ?'],
      ['A', 'Yes, we do. Here you are.', 'Oui. Tenez, la voici.'],
      ['B', 'Thank you. Can I try it on?', 'Merci. Je peux l\'essayer ?'],
      ['A', 'Of course. The changing room is on the left.', 'Bien sûr. La cabine d\'essayage est à gauche.'],
      ['B', 'It\'s perfect! How much is it?', 'Elle est parfaite ! Combien coûte-t-elle ?'],
      ['A', 'It\'s forty-five pounds.', 'Elle coûte quarante-cinq livres.'],
      ['B', 'I\'ll take it. Can I pay by card?', 'Je la prends. Je peux payer par carte ?'],
      ['A', 'Yes, of course. Here\'s your receipt.', 'Oui, bien sûr. Voici votre ticket de caisse.']
    ],
    questions: [
      { q: 'Que cherche Alan ?', choices: ['Une veste bleue', 'Un manteau bleu', 'Une chemise bleue'], answer: 0, at: 1,
        why: { 1: 'Un manteau se dirait « a coat ». Alan dit « this **jacket** » : cette veste.', 2: 'Une chemise se dirait « a shirt ». Alan dit « this **jacket** » : cette veste.' },
        explain: '« Do you have this **jacket** in **blue**? » : vous avez cette veste en bleu ?' },
      { q: 'Où est la cabine d\'essayage ?', choices: ['À droite', 'À gauche', 'En face'], answer: 1, at: 4,
        why: { 0: 'À droite se dirait « on the right ». Megan dit « on the **left** ».', 2: 'En face se dirait « opposite ». Megan dit « on the **left** » : à gauche.' },
        explain: '« The **changing room** is **on the left** » : la cabine d\'essayage est à gauche.' },
      { q: 'Combien coûte la veste ?', choices: ['54 livres', '15 livres', '45 livres'], answer: 2, at: 6,
        why: { 0: '54 se dirait « fifty-four ». Megan dit « **forty-five** » : 45.', 1: '15 se dirait « fifteen ». Megan dit « **forty-five** » : 45.' },
        explain: '« It\'s **forty-five pounds** » : elle coûte quarante-cinq livres.' }
    ]
  },
  {
    id: 'en12-d-02', ch: 'en12', level: 2, sec: 'en12-s-telephone',
    title: 'Bob n\'est pas là',
    context: 'Martin téléphone chez son ami Bob. C\'est Jenny, la femme de Bob, qui répond.',
    speakers: { A: { name: 'Jenny', g: 'f' }, B: { name: 'Martin', g: 'm' } },
    lines: [
      ['A', 'Hello, Jenny speaking.', 'Allô, Jenny à l\'appareil.'],
      ['B', 'Hello, this is Martin. Can I speak to Bob, please?', 'Bonjour, c\'est Martin. Je peux parler à Bob, s\'il te plaît ?'],
      ['A', 'Sorry, Martin, he isn\'t here. He\'s at the supermarket.', 'Désolée, Martin, il n\'est pas là. Il est au supermarché.'],
      ['B', 'Could he call me back, please?', 'Est-ce qu\'il pourrait me rappeler, s\'il te plaît ?'],
      ['A', 'Yes, of course. Has he got your number?', 'Oui, bien sûr. Il a ton numéro ?'],
      ['B', 'Yes, he has. I\'m at home all afternoon.', 'Oui. Je suis à la maison tout l\'après-midi.'],
      ['A', 'OK. He\'ll come back at half past three.', 'D\'accord. Il rentrera à trois heures et demie.'],
      ['B', 'Thanks, Jenny. Have a nice day!', 'Merci, Jenny. Bonne journée !'],
      ['A', 'You too. Bye!', 'Toi aussi. Au revoir !']
    ],
    questions: [
      { q: 'Où est Bob ?', choices: ['Au supermarché', 'Chez le médecin', 'Au travail'], answer: 0, at: 2,
        why: { 1: 'Chez le médecin se dirait « at the doctor\'s ». Jenny dit « at the **supermarket** ».', 2: 'Au travail se dirait « at work ». Jenny dit « at the **supermarket** ».' },
        explain: '« He isn\'t here. He\'s **at the supermarket** » : il n\'est pas là, il est au supermarché.' },
      { q: 'Que demande Martin ?', choices: ['Le numéro de téléphone de Bob', 'Que Bob vienne chez lui', 'Que Bob le rappelle'], answer: 2, at: 3,
        why: { 0: 'Martin ne demande pas de numéro : il dit « Could he **call me back**? ».', 1: 'Martin ne demande pas de visite : il dit « Could he **call me back**? » : pourrait-il me rappeler ?' },
        explain: '« Could he **call me back**, please? » : est-ce qu\'il pourrait me rappeler ? **Call back** = rappeler (au téléphone).' },
      { q: 'À quelle heure Bob va-t-il rentrer ?', choices: ['À 3 h', 'À 3 h 30', 'À 2 h 30'], answer: 1, at: 6,
        why: { 0: '3 h pile se dirait « three o\'clock ». Jenny dit « **half past** three » : trois heures et demie.', 2: '2 h 30 se dirait « half past two ». Jenny dit « half past **three** ».' },
        explain: '« He\'ll come back at **half past three** » : il rentrera à trois heures et demie. **Half past** = et demie.' }
    ]
  },
  {
    id: 'en12-d-03', ch: 'en12', level: 3, sec: 'en12-s-urgences',
    title: 'Le portefeuille perdu',
    context: 'Hannah entre dans un commissariat de police, en Angleterre. Elle parle au policier, Neil.',
    speakers: { A: { name: 'Hannah', g: 'f' }, B: { name: 'Neil', g: 'm' } },
    lines: [
      ['A', 'Excuse me, can you help me? I\'ve lost my wallet.', 'Excusez-moi, vous pouvez m\'aider ? J\'ai perdu mon portefeuille.'],
      ['B', 'Oh dear. When did you lose it?', 'Oh là là. Quand l\'avez-vous perdu ?'],
      ['A', 'This morning, on the bus to the station.', 'Ce matin, dans le bus pour la gare.'],
      ['B', 'What was in your wallet?', 'Qu\'est-ce qu\'il y avait dans votre portefeuille ?'],
      ['A', 'My bank card and sixty pounds.', 'Ma carte bancaire et soixante livres.'],
      ['B', 'Have you called your bank?', 'Avez-vous appelé votre banque ?'],
      ['A', 'No, not yet.', 'Non, pas encore.'],
      ['B', 'You must call them now. Here\'s our phone.', 'Vous devez les appeler maintenant. Voici notre téléphone.'],
      ['A', 'Thank you. You\'re very kind.', 'Merci. Vous êtes très gentil.']
    ],
    questions: [
      { q: 'Où Hannah a-t-elle perdu son portefeuille ?', choices: ['Dans le bus', 'À la gare', 'Dans le train'], answer: 0, at: 2,
        why: { 1: 'Hannah dit « on the bus **to** the station » : dans le bus **pour aller** à la gare, pas à la gare.', 2: 'Le train se dirait « the train ». Hannah dit « on the **bus** ».' },
        explain: '« This morning, **on the bus** to the station » : ce matin, dans le bus pour la gare.' },
      { q: 'Qu\'y avait-il dans son portefeuille ?', choices: ['Son passeport et 60 livres', 'Sa carte bancaire et 60 livres', 'Sa carte bancaire et 16 livres'], answer: 1, at: 4,
        why: { 0: 'Le passeport se dirait « passport ». Hannah dit « my **bank card** » : ma carte bancaire.', 2: '16 se dirait « sixteen ». Hannah dit « **sixty** » : 60.' },
        explain: '« My **bank card** and **sixty pounds** » : ma carte bancaire et soixante livres.' },
      { q: 'Hannah a-t-elle déjà appelé sa banque ?', choices: ['Oui, ce matin', 'Oui, depuis le bus', 'Non, pas encore'], answer: 2, at: 6,
        why: { 0: '« This morning » (ce matin), c\'est le moment où elle a perdu son portefeuille. Pour la banque, elle répond « **No, not yet** ».', 1: 'Hannah n\'a appelé personne : elle répond « **No, not yet** » (non, pas encore).' },
        explain: 'Neil demande « **Have you called** your bank? » (avez-vous appelé votre banque ?) et Hannah répond « **No, not yet** » : non, pas encore.' }
    ]
  }
]);
