/* Anglais — dialogues des chapitres 5 à 8 */
APP.registerDialogues([
  /* ---------- Chapitre 5 : manger et boire ---------- */
  {
    id: 'en5-d-01', ch: 'en5', level: 1,
    title: 'Le petit-déjeuner à l\'hôtel',
    context: 'Linda prend son petit-déjeuner dans un hôtel. Le serveur vient la voir.',
    speakers: { A: { name: 'James', g: 'm' }, B: { name: 'Linda', g: 'f' } },
    lines: [
      ['A', 'Good morning! Tea or coffee?', 'Bonjour ! Du thé ou du café ?'],
      ['B', 'Tea, please. With milk, no sugar.', 'Du thé, s\'il vous plaît. Avec du lait, sans sucre.'],
      ['A', 'Would you like some eggs?', 'Voulez-vous des œufs ?'],
      ['B', 'Yes, please. Two eggs and some bread.', 'Oui, s\'il vous plaît. Deux œufs et du pain.'],
      ['A', 'OK. Anything else?', 'D\'accord. Autre chose ?'],
      ['B', 'An orange juice, please.', 'Un jus d\'orange, s\'il vous plaît.'],
      ['A', 'Sorry, there isn\'t any orange juice today.', 'Désolé, il n\'y a pas de jus d\'orange aujourd\'hui.'],
      ['B', 'No problem. Some water, then.', 'Pas de problème. Alors, de l\'eau.']
    ],
    questions: [
      { q: 'Que prend Linda dans son thé ?', choices: ['Du sucre', 'Du lait', 'Du lait et du sucre'], answer: 1, at: 1,
        why: { 0: 'Elle dit « no sugar » : sans sucre.', 2: 'Elle prend du lait, mais elle dit « no sugar » : pas de sucre.' },
        explain: 'Linda dit « Tea, please. **With milk, no sugar**. » : du thé **avec du lait, sans sucre**.' },
      { q: 'Combien d\'œufs Linda demande-t-elle ?', choices: ['Un', 'Trois', 'Deux'], answer: 2, at: 3,
        why: { 0: 'Un œuf se dirait « an egg » ou « one egg ». Linda dit « two eggs ».', 1: 'Trois se dirait « three ». Linda dit « two eggs ».' },
        explain: 'Linda répond « Yes, please. **Two eggs** and some bread. » : **deux œufs** et du pain.' },
      { q: 'Que boit Linda à la place du jus d\'orange ?', choices: ['De l\'eau', 'Du café', 'Du lait'], answer: 0, at: 7,
        why: { 1: 'Elle a choisi du thé, pas du café (« Tea, please »). À la fin, elle dit « Some water ».', 2: 'Le lait (« milk »), c\'est pour son thé. À la fin, elle dit « Some water » : de l\'eau.' },
        explain: 'Il n\'y a pas de jus d\'orange, alors Linda dit « No problem. **Some water**, then. » : pas de problème, alors **de l\'eau**.' }
    ]
  },
  {
    id: 'en5-d-02', ch: 'en5', level: 1,
    title: 'Au marché',
    context: 'David fait ses courses au marché. Il parle à la vendeuse de fruits et légumes.',
    speakers: { A: { name: 'Mary', g: 'f' }, B: { name: 'David', g: 'm' } },
    lines: [
      ['A', 'Hello! What would you like?', 'Bonjour ! Que désirez-vous ?'],
      ['B', 'A kilo of potatoes and some carrots, please.', 'Un kilo de pommes de terre et des carottes, s\'il vous plaît.'],
      ['A', 'How many carrots?', 'Combien de carottes ?'],
      ['B', 'Six, please. Have you got any bananas?', 'Six, s\'il vous plaît. Vous avez des bananes ?'],
      ['A', 'No, sorry. There aren\'t any bananas today.', 'Non, désolée. Il n\'y a pas de bananes aujourd\'hui.'],
      ['B', 'OK, that\'s all. How much is it?', 'D\'accord, ce sera tout. C\'est combien ?'],
      ['A', 'That\'s three pounds forty, please.', 'Ça fait trois livres quarante, s\'il vous plaît.'],
      ['B', 'Can I pay by card?', 'Je peux payer par carte ?'],
      ['A', 'Yes, of course.', 'Oui, bien sûr.']
    ],
    questions: [
      { q: 'Combien de carottes David veut-il ?', choices: ['Six', 'Sept', 'Seize'], answer: 0, at: 3,
        why: { 1: 'Sept se dirait « seven ». David dit « six ».', 2: 'Seize se dirait « sixteen » (avec -teen à la fin). David dit « six ».' },
        explain: 'Mary demande « How many carrots? » et David répond « **Six**, please. » : **six**, s\'il vous plaît.' },
      { q: 'Pourquoi David ne prend-il pas de bananes ?', choices: ['Elles sont trop chères', 'Il n\'aime pas les bananes', 'Il n\'y en a pas aujourd\'hui'], answer: 2, at: 4,
        why: { 0: 'On ne parle pas du prix des bananes. Mary dit « There aren\'t any bananas ».', 1: 'David demande des bananes, donc il les aime. Mary répond qu\'il n\'y en a pas.' },
        explain: 'Mary répond « No, sorry. **There aren\'t any bananas** today. » : non, désolée, **il n\'y a pas de bananes** aujourd\'hui.' },
      { q: 'Combien David paie-t-il ?', choices: ['3 livres 14', '3 livres 40', '4 livres 30'], answer: 1, at: 6,
        why: { 0: '14 se dirait « fourteen ». Mary dit « forty » (40).', 2: 'Ce serait « four pounds thirty ». Mary dit « three pounds forty ».' },
        explain: 'Mary dit « That\'s **three pounds forty**, please. » : ça fait **trois livres quarante**.' }
    ]
  },
  {
    id: 'en5-d-03', ch: 'en5', level: 2,
    title: 'Au restaurant',
    context: 'Richard dîne au restaurant. La serveuse vient prendre sa commande.',
    speakers: { A: { name: 'Kate', g: 'f' }, B: { name: 'Richard', g: 'm' } },
    lines: [
      ['A', 'Good evening! Are you ready to order?', 'Bonsoir ! Vous êtes prêt à commander ?'],
      ['B', 'Yes. For the starter, the tomato soup, please.', 'Oui. En entrée, la soupe de tomates, s\'il vous plaît.'],
      ['A', 'And for the main course?', 'Et en plat principal ?'],
      ['B', 'I\'d like the fish with rice, please.', 'Je voudrais le poisson avec du riz, s\'il vous plaît.'],
      ['A', 'Sorry, there isn\'t any fish this evening.', 'Désolée, il n\'y a pas de poisson ce soir.'],
      ['B', 'Oh! The chicken and chips, then.', 'Oh ! Alors, le poulet-frites.'],
      ['A', 'What would you like to drink?', 'Que voulez-vous boire ?'],
      ['B', 'A glass of red wine and some water, please.', 'Un verre de vin rouge et de l\'eau, s\'il vous plaît.']
    ],
    questions: [
      { q: 'Que prend Richard en entrée ?', choices: ['Une salade de tomates', 'Une soupe de tomates', 'Une soupe de poisson'], answer: 1, at: 1,
        why: { 0: 'Il dit « soup » (soupe), pas « salad » (salade).', 2: 'Il dit « tomato soup » : la soupe de tomates. Le poisson, c\'est ce qu\'il voulait en plat principal.' },
        explain: 'Richard dit « For the starter, **the tomato soup**, please. » : en entrée, **la soupe de tomates**.' },
      { q: 'Pourquoi Richard ne prend-il pas le poisson ?', choices: ['Il n\'y en a pas ce soir', 'Il n\'aime pas le poisson', 'C\'est trop cher'], answer: 0, at: 4,
        why: { 1: 'Il demande le poisson, donc il l\'aime. Kate dit « there isn\'t any fish ».', 2: 'On ne parle pas de prix. Kate dit « there isn\'t any fish this evening ».' },
        explain: 'Kate dit « Sorry, **there isn\'t any fish** this evening. » : désolée, **il n\'y a pas de poisson** ce soir. Alors Richard prend le poulet-frites.' },
      { q: 'Que commande Richard à boire ?', choices: ['Un verre de vin blanc et de l\'eau', 'Une bouteille de vin rouge', 'Un verre de vin rouge et de l\'eau'], answer: 2, at: 7,
        why: { 0: 'Le vin blanc se dirait « white wine ». Richard dit « red wine ».', 1: 'Il dit « a glass » (un verre), pas « a bottle » (une bouteille).' },
        explain: 'Richard dit « **A glass of red wine and some water**, please. » : **un verre de vin rouge et de l\'eau**.' }
    ]
  },

  /* ---------- Chapitre 6 : la vie de tous les jours (présent simple) ---------- */
  {
    id: 'en6-d-01', ch: 'en6', level: 1,
    title: 'À l\'arrêt de bus',
    context: 'Deux voisins, Rachel et Jack, se rencontrent un matin à l\'arrêt de bus.',
    speakers: { A: { name: 'Rachel', g: 'f' }, B: { name: 'Jack', g: 'm' } },
    lines: [
      ['A', 'Hello! Do you take this bus every day?', 'Bonjour ! Vous prenez ce bus tous les jours ?'],
      ['B', 'Yes, I do. I go to work by bus.', 'Oui. Je vais au travail en bus.'],
      ['A', 'What do you do?', 'Que faites-vous dans la vie ?'],
      ['B', 'I\'m a nurse. I work in a hospital.', 'Je suis infirmier. Je travaille dans un hôpital.'],
      ['A', 'Do you like your job?', 'Vous aimez votre travail ?'],
      ['B', 'Yes, I do. But I start at six every morning.', 'Oui. Mais je commence à six heures tous les matins.'],
      ['A', 'Oh, that\'s early! I get up at nine.', 'Oh, c\'est tôt ! Moi, je me lève à neuf heures.'],
      ['B', 'Are you retired?', 'Vous êtes à la retraite ?'],
      ['A', 'Yes. I go to the market every Wednesday.', 'Oui. Je vais au marché tous les mercredis.']
    ],
    questions: [
      { q: 'Où travaille Jack ?', choices: ['Dans un hôpital', 'Dans un bureau', 'Dans un magasin'], answer: 0, at: 3,
        why: { 1: 'Un bureau se dirait « an office ». Jack dit « a hospital ».', 2: 'Un magasin se dirait « a shop ». Jack dit « a hospital ».' },
        explain: 'Jack dit « I\'m a nurse. **I work in a hospital**. » : je suis infirmier, **je travaille dans un hôpital**.' },
      { q: 'À quelle heure Jack commence-t-il le travail ?', choices: ['À 9 heures', 'À 6 heures', 'À 7 heures'], answer: 1, at: 5,
        why: { 0: '9 heures (« nine »), c\'est l\'heure où Rachel se lève.', 2: '7 heures se dirait « seven ». Jack dit « at six ».' },
        explain: 'Jack dit « But **I start at six** every morning. » : mais **je commence à six heures** tous les matins.' },
      { q: 'Quel jour Rachel va-t-elle au marché ?', choices: ['Le samedi', 'Le mardi', 'Le mercredi'], answer: 2, at: 8,
        why: { 0: 'Samedi se dirait « Saturday ». Rachel dit « every Wednesday ».', 1: 'Mardi se dirait « Tuesday ». Rachel dit « Wednesday » (mercredi).' },
        explain: 'Rachel dit « I go to the market **every Wednesday**. » : je vais au marché **tous les mercredis**.' }
    ]
  },
  {
    id: 'en6-d-02', ch: 'en6', level: 1,
    title: 'Une invitation',
    context: 'Laura parle avec son ami Mark. Elle veut les inviter, lui et sa femme Jane.',
    speakers: { A: { name: 'Laura', g: 'f' }, B: { name: 'Mark', g: 'm' } },
    lines: [
      ['A', 'Are you and Jane free on Saturday evening?', 'Jane et toi, vous êtes libres samedi soir ?'],
      ['B', 'Yes, we are.', 'Oui, nous sommes libres.'],
      ['A', 'Come for dinner! Does Jane like fish?', 'Venez dîner ! Est-ce que Jane aime le poisson ?'],
      ['B', 'No, she doesn\'t. She\'s a vegetarian.', 'Non. Elle est végétarienne.'],
      ['A', 'OK. Does she eat cheese?', 'D\'accord. Est-ce qu\'elle mange du fromage ?'],
      ['B', 'Yes, she does. She loves cheese!', 'Oui. Elle adore le fromage !'],
      ['A', 'What time does she finish work on Saturdays?', 'À quelle heure finit-elle le travail, le samedi ?'],
      ['B', 'She usually finishes at seven.', 'D\'habitude, elle finit à sept heures.'],
      ['A', 'Perfect. Dinner is at eight, then.', 'Parfait. Alors, le dîner est à huit heures.']
    ],
    questions: [
      { q: 'Pourquoi Jane ne mange-t-elle pas de poisson ?', choices: ['Elle est malade', 'Elle est végétarienne', 'Elle n\'a pas faim'], answer: 1, at: 3,
        why: { 0: 'Malade se dirait « ill ». Mark dit « She\'s a vegetarian ».', 2: 'On n\'entend pas « hungry » (faim). Mark dit « She\'s a vegetarian ».' },
        explain: 'Mark répond « No, she doesn\'t. **She\'s a vegetarian**. » : non, **elle est végétarienne**.' },
      { q: 'Qu\'est-ce que Jane adore ?', choices: ['Le fromage', 'Le vin blanc', 'Les gâteaux'], answer: 0, at: 5,
        why: { 1: 'On ne parle pas de vin. Mark dit « She loves cheese ».', 2: 'Les gâteaux se diraient « cakes ». Mark dit « cheese » : le fromage.' },
        explain: 'Mark dit « Yes, she does. **She loves cheese!** » : oui, **elle adore le fromage** !' },
      { q: 'À quelle heure est le dîner ?', choices: ['À 7 heures', 'À 6 heures', 'À 8 heures'], answer: 2, at: 8,
        why: { 0: '7 heures (« seven »), c\'est l\'heure où Jane finit le travail.', 1: 'Six heures se dirait « six ». Laura dit « at eight ».' },
        explain: 'Laura dit « Perfect. **Dinner is at eight**, then. » : parfait, alors **le dîner est à huit heures**.' }
    ]
  },
  {
    id: 'en6-d-03', ch: 'en6', level: 2,
    title: 'Chez le médecin',
    context: 'George va voir sa médecin, le docteur Wilson. Elle lui pose des questions sur ses habitudes.',
    speakers: { A: { name: 'Dr Wilson', g: 'f' }, B: { name: 'George', g: 'm' } },
    lines: [
      ['A', 'Good morning, George. How are you?', 'Bonjour, George. Comment allez-vous ?'],
      ['B', 'Not very well. I\'m always tired.', 'Pas très bien. Je suis toujours fatigué.'],
      ['A', 'What time do you go to bed?', 'À quelle heure vous couchez-vous ?'],
      ['B', 'Very late. I usually go to bed at one.', 'Très tard. D\'habitude, je me couche à une heure.'],
      ['A', 'Do you drink a lot of coffee?', 'Vous buvez beaucoup de café ?'],
      ['B', 'Yes, I do. Six cups a day.', 'Oui. Six tasses par jour.'],
      ['A', 'That\'s a lot! How often do you walk?', 'C\'est beaucoup ! À quelle fréquence marchez-vous ?'],
      ['B', 'I never walk. I always take the car.', 'Je ne marche jamais. Je prends toujours la voiture.'],
      ['A', 'Please walk every day, and go to bed early.', 'Marchez tous les jours, s\'il vous plaît, et couchez-vous tôt.']
    ],
    questions: [
      { q: 'Quel est le problème de George ?', choices: ['Il a toujours faim', 'Il est toujours fatigué', 'Il a mal à la tête'], answer: 1, at: 1,
        why: { 0: 'Avoir faim se dirait « hungry ». George dit « tired » : fatigué.', 2: 'On ne parle pas de tête. George dit « I\'m always tired ».' },
        explain: 'George dit « Not very well. **I\'m always tired**. » : pas très bien, **je suis toujours fatigué**.' },
      { q: 'Combien de tasses de café George boit-il par jour ?', choices: ['Deux', 'Sept', 'Six'], answer: 2, at: 5,
        why: { 0: 'Deux se dirait « two ». George dit « six cups ».', 1: 'Sept se dirait « seven ». George dit « six ».' },
        explain: 'George répond « Yes, I do. **Six cups a day**. » : oui, **six tasses par jour**.' },
      { q: 'Que conseille la médecin à la fin ?', choices: ['Marcher tous les jours et se coucher tôt', 'Prendre la voiture', 'Boire plus de café'], answer: 0, at: 8,
        why: { 1: 'C\'est ce que George fait déjà (« I always take the car »). La médecin dit « walk every day ».', 2: 'Au contraire : six tasses, elle trouve que c\'est beaucoup (« That\'s a lot! »).' },
        explain: 'La médecin dit « Please **walk every day**, and **go to bed early**. » : **marchez tous les jours** et **couchez-vous tôt**.' }
    ]
  },

  /* ---------- Chapitre 7 : en ce moment (présent continu) ---------- */
  {
    id: 'en7-d-01', ch: 'en7', level: 1,
    title: 'Un coup de fil de maman',
    context: 'Ben est chez lui, à Londres. Sa mère l\'appelle au téléphone.',
    speakers: { A: { name: 'Margaret', g: 'f' }, B: { name: 'Ben', g: 'm' } },
    lines: [
      ['A', 'Hello, Ben! It\'s Mum.', 'Allô, Ben ! C\'est maman.'],
      ['B', 'Hi, Mum! How are you?', 'Salut, maman ! Comment vas-tu ?'],
      ['A', 'Fine, thanks. What are you doing?', 'Bien, merci. Qu\'est-ce que tu fais ?'],
      ['B', 'I\'m cooking pasta for dinner.', 'Je fais des pâtes pour le dîner.'],
      ['A', 'Is Lucy there?', 'Lucy est là ?'],
      ['B', 'Yes, she\'s watching TV in the living room.', 'Oui, elle regarde la télé dans le salon.'],
      ['A', 'What\'s the weather like in London?', 'Quel temps fait-il à Londres ?'],
      ['B', 'It\'s raining, and it\'s very cold.', 'Il pleut, et il fait très froid.'],
      ['A', 'Oh! Here, the sun is shining.', 'Oh ! Ici, le soleil brille.']
    ],
    questions: [
      { q: 'Que fait Ben quand sa mère appelle ?', choices: ['Il regarde la télé', 'Il fait des pâtes', 'Il fait les courses'], answer: 1, at: 3,
        why: { 0: 'C\'est Lucy qui regarde la télé (« she\'s watching TV »).', 2: 'Les courses se diraient « shopping ». Ben dit « I\'m cooking pasta ».' },
        explain: 'Ben dit « **I\'m cooking pasta** for dinner. » : **je fais des pâtes** pour le dîner.' },
      { q: 'Où est Lucy ?', choices: ['Dans la cuisine', 'Dans le jardin', 'Dans le salon'], answer: 2, at: 5,
        why: { 0: 'La cuisine se dirait « the kitchen ». Ben dit « in the living room ».', 1: 'Le jardin se dirait « the garden ». Ben dit « in the living room ».' },
        explain: 'Ben dit « Yes, she\'s watching TV **in the living room**. » : oui, elle regarde la télé **dans le salon**.' },
      { q: 'Quel temps fait-il à Londres ?', choices: ['Il pleut et il fait froid', 'Il y a du soleil', 'Il neige'], answer: 0, at: 7,
        why: { 1: 'Le soleil brille chez la maman (« Here, the sun is shining »), pas à Londres.', 2: 'Il neige se dirait « It\'s snowing ». Ben dit « It\'s raining ».' },
        explain: 'Ben dit « **It\'s raining**, and **it\'s very cold**. » : **il pleut**, et **il fait très froid**.' }
    ]
  },
  {
    id: 'en7-d-02', ch: 'en7', level: 1,
    title: 'Rendez-vous à la gare',
    context: 'Sarah et Andrew ne se sont jamais vus. Ils se téléphonent pour se retrouver à la gare.',
    speakers: { A: { name: 'Sarah', g: 'f' }, B: { name: 'Andrew', g: 'm' } },
    lines: [
      ['A', 'Hello, Andrew? It\'s Sarah. I\'m at the station.', 'Allô, Andrew ? C\'est Sarah. Je suis à la gare.'],
      ['B', 'Hi, Sarah! Where are you?', 'Salut, Sarah ! Où es-tu ?'],
      ['A', 'I\'m sitting in the cafe, next to the window.', 'Je suis assise dans le café, à côté de la fenêtre.'],
      ['B', 'What are you wearing?', 'Qu\'est-ce que tu portes ?'],
      ['A', 'A red coat and a white scarf.', 'Un manteau rouge et une écharpe blanche.'],
      ['B', 'OK. I\'m wearing a blue jacket and jeans.', 'D\'accord. Moi, je porte une veste bleue et un jean.'],
      ['A', 'Are you carrying a bag?', 'Tu portes un sac ?'],
      ['B', 'Yes, a big black bag. I\'m coming!', 'Oui, un grand sac noir. J\'arrive !']
    ],
    questions: [
      { q: 'Où est Sarah exactement ?', choices: ['Dans le café, à côté de la fenêtre', 'Devant la gare', 'Dans le café, à côté de la porte'], answer: 0, at: 2,
        why: { 1: 'Devant se dirait « in front of ». Sarah dit « in the cafe ».', 2: 'La porte se dirait « the door ». Sarah dit « next to the window » : à côté de la fenêtre.' },
        explain: 'Sarah dit « I\'m sitting **in the cafe, next to the window**. » : je suis assise **dans le café, à côté de la fenêtre**.' },
      { q: 'Que porte Sarah ?', choices: ['Une veste bleue et un jean', 'Un manteau noir et une écharpe rouge', 'Un manteau rouge et une écharpe blanche'], answer: 2, at: 4,
        why: { 0: 'C\'est ce que porte Andrew (« a blue jacket and jeans »).', 1: 'Le noir, c\'est le sac d\'Andrew. Sarah dit « a red coat and a white scarf ».' },
        explain: 'Sarah répond « **A red coat and a white scarf**. » : **un manteau rouge et une écharpe blanche**.' },
      { q: 'Comment est le sac d\'Andrew ?', choices: ['Petit et noir', 'Grand et noir', 'Grand et bleu'], answer: 1, at: 7,
        why: { 0: 'Petit se dirait « small ». Andrew dit « a big black bag ».', 2: 'Le bleu, c\'est sa veste (« a blue jacket »). Le sac est noir : « black ».' },
        explain: 'Andrew dit « Yes, **a big black bag**. » : oui, **un grand sac noir**.' }
    ]
  },
  {
    id: 'en7-d-03', ch: 'en7', level: 2,
    title: 'Que fais-tu en ce moment ?',
    context: 'Emily téléphone à son ami Chris pour prendre de ses nouvelles.',
    speakers: { A: { name: 'Emily', g: 'f' }, B: { name: 'Chris', g: 'm' } },
    lines: [
      ['A', 'Hi, Chris! Are you working today?', 'Salut, Chris ! Tu travailles aujourd\'hui ?'],
      ['B', 'No, I\'m not. I never work on Sundays.', 'Non. Je ne travaille jamais le dimanche.'],
      ['A', 'What are you doing at the moment?', 'Qu\'est-ce que tu fais en ce moment ?'],
      ['B', 'I\'m walking by the sea with my dog.', 'Je me promène au bord de la mer avec mon chien.'],
      ['A', 'What\'s the weather like there?', 'Quel temps fait-il là-bas ?'],
      ['B', 'It\'s sunny, but it\'s very windy. And you?', 'Il y a du soleil, mais il y a beaucoup de vent. Et toi ?'],
      ['A', 'I\'m cooking lunch. My parents usually come on Sundays.', 'Je prépare le déjeuner. D\'habitude, mes parents viennent le dimanche.'],
      ['B', 'Do you like cooking?', 'Tu aimes cuisiner ?'],
      ['A', 'Yes, I love it!', 'Oui, j\'adore ça !']
    ],
    questions: [
      { q: 'Pourquoi Chris ne travaille-t-il pas aujourd\'hui ?', choices: ['Il est malade', 'Il ne travaille jamais le dimanche', 'Il est en vacances'], answer: 1, at: 1,
        why: { 0: 'Malade se dirait « ill ». Chris dit « I never work on Sundays ».', 2: 'En vacances se dirait « on holiday ». Chris dit qu\'il ne travaille jamais le dimanche.' },
        explain: 'Chris répond « No, I\'m not. **I never work on Sundays**. » : non, **je ne travaille jamais le dimanche**.' },
      { q: 'Que fait Chris en ce moment ?', choices: ['Il se promène au bord de la mer avec son chien', 'Il nage dans la mer', 'Il prépare le déjeuner'], answer: 0, at: 3,
        why: { 1: 'Nager se dirait « swimming ». Chris dit « I\'m walking by the sea ».', 2: 'C\'est Emily qui prépare le déjeuner (« I\'m cooking lunch »).' },
        explain: 'Chris dit « **I\'m walking by the sea** with my dog. » : **je me promène au bord de la mer** avec mon chien.' },
      { q: 'Quel temps fait-il au bord de la mer ?', choices: ['Il pleut et il y a du vent', 'Il y a du soleil, sans vent', 'Il y a du soleil et beaucoup de vent'], answer: 2, at: 5,
        why: { 0: 'Il pleut se dirait « It\'s raining ». Chris dit « It\'s sunny ».', 1: 'Chris dit « it\'s very windy » : il y a beaucoup de vent.' },
        explain: 'Chris dit « **It\'s sunny**, but **it\'s very windy**. » : **il y a du soleil**, mais **il y a beaucoup de vent**.' }
    ]
  },

  /* ---------- Chapitre 8 : raconter le passé (prétérit) ---------- */
  {
    id: 'en8-d-01', ch: 'en8', level: 1,
    title: 'Le week-end de Kevin',
    context: 'Lundi matin, au bureau, Lisa parle avec son collègue Kevin.',
    speakers: { A: { name: 'Lisa', g: 'f' }, B: { name: 'Kevin', g: 'm' } },
    lines: [
      ['A', 'Hi, Kevin! How was your weekend?', 'Salut, Kevin ! Comment s\'est passé ton week-end ?'],
      ['B', 'It was nice, thanks. I went to the cinema on Saturday.', 'C\'était sympa, merci. Je suis allé au cinéma samedi.'],
      ['A', 'Oh! Did you like the film?', 'Ah ! Le film t\'a plu ?'],
      ['B', 'No, I didn\'t. It was very boring!', 'Non. Il était très ennuyeux !'],
      ['A', 'What did you do on Sunday?', 'Qu\'est-ce que tu as fait dimanche ?'],
      ['B', 'I stayed at home. My children came for lunch.', 'Je suis resté à la maison. Mes enfants sont venus déjeuner.'],
      ['A', 'Nice! I visited my mother in Brighton.', 'Sympa ! Moi, j\'ai rendu visite à ma mère à Brighton.']
    ],
    questions: [
      { q: 'Où Kevin est-il allé samedi ?', choices: ['Au restaurant', 'Au cinéma', 'Au musée'], answer: 1, at: 1,
        why: { 0: 'Le restaurant se dirait « the restaurant ». Kevin dit « I went to the cinema ».', 2: 'Le musée se dirait « the museum ». Kevin dit « the cinema ».' },
        explain: 'Kevin dit « **I went to the cinema** on Saturday. » : **je suis allé au cinéma** samedi.' },
      { q: 'Kevin a-t-il aimé le film ?', choices: ['Oui, il était génial', 'Oui, mais il était long', 'Non, il était ennuyeux'], answer: 2, at: 3,
        why: { 0: 'Génial se dirait « great ». Kevin dit « It was very boring ».', 1: 'Kevin répond « No, I didn\'t » : non, il ne l\'a pas aimé.' },
        explain: 'Kevin répond « **No, I didn\'t.** It was very **boring**! » : **non**, il était très **ennuyeux** !' },
      { q: 'Qui est venu déjeuner chez Kevin dimanche ?', choices: ['Ses enfants', 'Sa mère', 'Lisa'], answer: 0, at: 5,
        why: { 1: 'C\'est Lisa qui a rendu visite à sa mère (« I visited my mother »).', 2: 'Lisa n\'est pas venue : elle était chez sa mère, à Brighton.' },
        explain: 'Kevin dit « I stayed at home. **My children came for lunch**. » : je suis resté à la maison, **mes enfants sont venus déjeuner**.' }
    ]
  },
  {
    id: 'en8-d-02', ch: 'en8', level: 1,
    title: 'Retour de vacances',
    context: 'Karen revient au travail après ses vacances. Son collègue Steve lui pose des questions.',
    speakers: { A: { name: 'Steve', g: 'm' }, B: { name: 'Karen', g: 'f' } },
    lines: [
      ['A', 'Hello, Karen! Did you have a good holiday?', 'Bonjour, Karen ! Tu as passé de bonnes vacances ?'],
      ['B', 'Yes, thanks! We went to Spain.', 'Oui, merci ! Nous sommes allés en Espagne.'],
      ['A', 'Great! Where did you stay?', 'Super ! Où avez-vous séjourné ?'],
      ['B', 'In a small hotel by the sea.', 'Dans un petit hôtel au bord de la mer.'],
      ['A', 'How was the weather?', 'Quel temps a-t-il fait ?'],
      ['B', 'Wonderful! It was hot and sunny every day.', 'Merveilleux ! Il a fait chaud et beau tous les jours.'],
      ['A', 'When did you come back?', 'Quand êtes-vous rentrés ?'],
      ['B', 'Three days ago. I took a lot of photos!', 'Il y a trois jours. J\'ai pris beaucoup de photos !']
    ],
    questions: [
      { q: 'Dans quel pays Karen est-elle allée ?', choices: ['En Italie', 'En Espagne', 'En Allemagne'], answer: 1, at: 1,
        why: { 0: 'L\'Italie se dirait « Italy ». Karen dit « Spain ».', 2: 'L\'Allemagne se dirait « Germany ». Karen dit « Spain ».' },
        explain: 'Karen dit « Yes, thanks! **We went to Spain**. » : oui, merci ! **Nous sommes allés en Espagne**.' },
      { q: 'Où Karen a-t-elle séjourné ?', choices: ['Dans un petit hôtel au bord de la mer', 'Dans un grand hôtel à la montagne', 'Chez des amis'], answer: 0, at: 3,
        why: { 1: 'Grand se dirait « big » et la montagne « the mountains ». Karen dit « a small hotel by the sea ».', 2: 'Chez des amis se dirait « with friends ». Karen dit « in a small hotel ».' },
        explain: 'Karen répond « **In a small hotel by the sea**. » : **dans un petit hôtel au bord de la mer**.' },
      { q: 'Quand Karen est-elle rentrée ?', choices: ['Il y a deux jours', 'Il y a trois semaines', 'Il y a trois jours'], answer: 2, at: 7,
        why: { 0: 'Deux se dirait « two ». Karen dit « three days ago ».', 1: 'Les semaines se diraient « weeks ». Karen dit « days » : jours.' },
        explain: 'Karen dit « **Three days ago**. I took a lot of photos! » : **il y a trois jours**. J\'ai pris beaucoup de photos !' }
    ]
  },
  {
    id: 'en8-d-03', ch: 'en8', level: 2,
    title: 'La vie de Frank',
    context: 'Au club du quartier, Barbara fait connaissance avec Frank et lui pose des questions sur sa vie.',
    speakers: { A: { name: 'Barbara', g: 'f' }, B: { name: 'Frank', g: 'm' } },
    lines: [
      ['A', 'Where were you born, Frank?', 'Où êtes-vous né, Frank ?'],
      ['B', 'I was born in Leeds, in 1958.', 'Je suis né à Leeds, en 1958.'],
      ['A', 'And when did you move here?', 'Et quand avez-vous déménagé ici ?'],
      ['B', 'Twelve years ago, when I retired.', 'Il y a douze ans, quand j\'ai pris ma retraite.'],
      ['A', 'What was your job?', 'Quel était votre métier ?'],
      ['B', 'I was a teacher. I loved my job.', 'J\'étais professeur. J\'adorais mon métier.'],
      ['A', 'And where did you meet your wife?', 'Et où avez-vous rencontré votre femme ?'],
      ['B', 'At a party. We got married in 1984.', 'À une fête. Nous nous sommes mariés en 1984.'],
      ['A', 'That was a long time ago!', 'C\'était il y a longtemps !']
    ],
    questions: [
      { q: 'En quelle année Frank est-il né ?', choices: ['En 1958', 'En 1984', 'En 1968'], answer: 0, at: 1,
        why: { 1: '1984, c\'est l\'année de son mariage (« We got married in 1984 »).', 2: '1968 se dirait « nineteen sixty-eight ». Frank dit « nineteen fifty-eight ».' },
        explain: 'Frank dit « **I was born** in Leeds, **in 1958**. » : **je suis né** à Leeds, **en 1958**.' },
      { q: 'Quand Frank a-t-il déménagé ici ?', choices: ['Il y a deux ans', 'Il y a douze ans', 'Il y a vingt ans'], answer: 1, at: 3,
        why: { 0: 'Deux se dirait « two ». Frank dit « twelve » : douze.', 2: 'Vingt se dirait « twenty ». Frank dit « twelve years ago ».' },
        explain: 'Frank répond « **Twelve years ago**, when I retired. » : **il y a douze ans**, quand j\'ai pris ma retraite.' },
      { q: 'Où Frank a-t-il rencontré sa femme ?', choices: ['À l\'école', 'Au travail', 'À une fête'], answer: 2, at: 7,
        why: { 0: 'Frank était professeur, mais il a rencontré sa femme « at a party » : à une fête.', 1: 'Au travail se dirait « at work ». Frank dit « at a party ».' },
        explain: 'Frank dit « **At a party**. We got married in 1984. » : **à une fête**. Nous nous sommes mariés en 1984.' }
    ]
  }
]);
