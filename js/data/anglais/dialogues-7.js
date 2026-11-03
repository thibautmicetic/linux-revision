/* Anglais — dialogues des chapitres 19 et 20 */
APP.registerDialogues([
  /* ---------- Chapitre 19 : services et petits problèmes ---------- */
  {
    id: 'en19-d-01', ch: 'en19', level: 1, sec: 'en19-s-banque-poste',
    title: 'Un colis pour la France',
    context: 'Margaret est à la poste de son village. Elle veut envoyer un cadeau à sa petite-fille, en France.',
    speakers: { A: { name: 'Margaret', g: 'f' }, B: { name: 'Raj', g: 'm' } },
    lines: [
      ['A', 'Good morning. I\'d like to send this parcel to France.', 'Bonjour. Je voudrais envoyer ce colis en France.'],
      ['B', 'Of course. Let me weigh it… It\'s two kilos.', 'Bien sûr. Je vais le peser… Il fait deux kilos.'],
      ['A', 'How long will it take?', 'Combien de temps ça va prendre ?'],
      ['B', 'About five days. Or two days by express.', 'Environ cinq jours. Ou deux jours en express.'],
      ['A', 'And how much is the express service?', 'Et combien coûte le service express ?'],
      ['B', 'Twenty-four pounds. Standard is only twelve.', 'Vingt-quatre livres. Le tarif normal n\'est qu\'à douze.'],
      ['A', 'Oh, that\'s too expensive. Standard is fine, thanks.', 'Oh, c\'est trop cher. Le tarif normal ira très bien, merci.'],
      ['B', 'No problem. Could you fill in this form, please?', 'Pas de problème. Pourriez-vous remplir ce formulaire, s\'il vous plaît ?'],
      ['A', 'Sure. Do I need to sign it?', 'Bien sûr. Est-ce que je dois le signer ?'],
      ['B', 'Yes, here. It will be delivered next week.', 'Oui, ici. Il sera livré la semaine prochaine.']
    ],
    questions: [
      { q: 'Combien pèse le colis ?', choices: ['Cinq kilos', 'Douze kilos', 'Deux kilos'], answer: 2, at: 1,
        why: { 0: 'Cinq (five), c\'est le nombre de jours de livraison au tarif normal.', 1: 'Douze (twelve), c\'est le prix du tarif normal, en livres.' },
        explain: '« Let me **weigh** it… It\'s **two kilos** » : je vais le peser… il fait deux kilos. **weigh** = peser.' },
      { q: 'Quel tarif Margaret choisit-elle, et pourquoi ?', choices: ['L\'express, parce que c\'est plus rapide', 'Le tarif normal, parce que l\'express est trop cher', 'Le tarif normal, parce que l\'express n\'existe pas pour la France'], answer: 1, at: 6,
        why: { 0: 'Elle trouve l\'express « **too expensive** » (trop cher) : elle ne le prend pas.', 2: 'L\'express existe : l\'employé donne même son prix (twenty-four pounds).' },
        explain: '« Oh, that\'s **too expensive**. **Standard** is fine, thanks » : c\'est trop cher, le tarif normal ira très bien. **too** + adjectif = trop.' },
      { q: 'Que doit faire Margaret avant de partir ?', choices: ['Remplir un formulaire et le signer', 'Payer vingt-quatre livres', 'Revenir la semaine prochaine'], answer: 0, at: 7,
        why: { 1: 'Vingt-quatre livres, c\'est le prix de l\'express, qu\'elle n\'a pas choisi.', 2: '« next week » (la semaine prochaine), c\'est quand le colis sera livré, pas quand elle revient.' },
        explain: '« Could you **fill in this form**, please? » — « Do I need to **sign** it? » — « Yes, here. » : elle doit remplir le formulaire et le signer.' }
    ]
  },
  {
    id: 'en19-d-02', ch: 'en19', level: 2, sec: 'en19-s-garage',
    title: 'Une panne en vacances',
    context: 'Pendant ses vacances en Écosse, Steve s\'arrête dans un petit garage : il a un problème avec sa voiture.',
    speakers: { A: { name: 'Steve', g: 'm' }, B: { name: 'Sarah', g: 'f' } },
    lines: [
      ['B', 'Hello. What seems to be the problem?', 'Bonjour. Quel est le problème ?'],
      ['A', 'The brakes don\'t work very well, and there\'s a strange noise.', 'Les freins ne marchent pas très bien, et il y a un bruit bizarre.'],
      ['B', 'Let me look… The noise isn\'t serious, but you need new brakes.', 'Je vais regarder… Le bruit n\'est pas grave, mais il vous faut des freins neufs.'],
      ['A', 'Can you repair them today? We\'re on holiday.', 'Pouvez-vous les réparer aujourd\'hui ? Nous sommes en vacances.'],
      ['B', 'I\'m afraid not. We need to order them.', 'Je regrette, non. Nous devons les commander.'],
      ['A', 'Oh no! When will the car be ready?', 'Oh non ! Quand la voiture sera-t-elle prête ?'],
      ['B', 'The brakes will be delivered tomorrow morning. Come back at three.', 'Les freins seront livrés demain matin. Revenez à quinze heures.'],
      ['A', 'OK. How much will it cost?', 'D\'accord. Combien ça va coûter ?'],
      ['B', 'About two hundred pounds.', 'Environ deux cents livres.'],
      ['A', 'That\'s expensive, but brakes are important!', 'C\'est cher, mais les freins, c\'est important !']
    ],
    questions: [
      { q: 'D\'après la mécanicienne, quel est le vrai problème ?', choices: ['Le bruit bizarre', 'Un pneu crevé', 'Les freins'], answer: 2, at: 2,
        why: { 0: 'Sarah dit « The noise **isn\'t serious** » : le bruit n\'est pas grave.', 1: 'Personne ne parle de pneu (tyre).' },
        explain: '« The noise isn\'t serious, but **you need new brakes** » : le bruit n\'est pas grave, mais il vous faut des freins neufs.' },
      { q: 'Pourquoi la voiture ne peut-elle pas être réparée aujourd\'hui ?', choices: ['Le garage est fermé l\'après-midi', 'Il faut commander les freins', 'La mécanicienne n\'a pas le temps'], answer: 1, at: 4,
        why: { 0: 'Le garage n\'est pas fermé : Sarah dit « **We need to order them** » (nous devons les commander).', 2: 'Elle ne parle pas de temps : il faut d\'abord commander les freins.' },
        explain: '« I\'m afraid not. **We need to order them** » : je regrette, non, nous devons les commander. **I\'m afraid** = je regrette (un refus poli).' },
      { q: 'Quand Steve doit-il revenir chercher sa voiture ?', choices: ['Demain matin', 'Aujourd\'hui à 15 heures', 'Demain à 15 heures'], answer: 2, at: 6,
        why: { 0: 'Demain matin (tomorrow morning), ce sont les freins qui arrivent. Steve doit revenir « at three ».', 1: 'Ce n\'est pas aujourd\'hui : les freins n\'arrivent que demain (tomorrow).' },
        explain: '« The brakes **will be delivered tomorrow morning**. **Come back at three** » : les freins seront livrés demain matin, revenez à trois heures (15 h). **will be delivered** = seront livrés (passif au futur).' }
    ]
  },
  {
    id: 'en19-d-03', ch: 'en19', level: 3, sec: 'en19-s-reclamation',
    title: 'Une réclamation',
    context: 'Karen revient dans un magasin d\'électroménager avec une machine à café achetée il y a quelques jours.',
    speakers: { A: { name: 'Karen', g: 'f' }, B: { name: 'James', g: 'm' } },
    lines: [
      ['B', 'Good afternoon. Can I help you?', 'Bonjour. Je peux vous aider ?'],
      ['A', 'Yes. I bought this coffee machine here on Saturday, but it doesn\'t work.', 'Oui. J\'ai acheté cette machine à café ici samedi, mais elle ne marche pas.'],
      ['B', 'I\'m sorry to hear that. Have you got the receipt?', 'Je suis désolé de l\'apprendre. Avez-vous le ticket de caisse ?'],
      ['A', 'Yes, here it is. I\'d like a refund, please.', 'Oui, le voici. Je voudrais être remboursée, s\'il vous plaît.'],
      ['B', 'I\'m afraid we don\'t give refunds. But you can exchange it.', 'Je regrette, nous ne remboursons pas. Mais vous pouvez l\'échanger.'],
      ['A', 'Hmm. Is the new one the same model?', 'Hum. La nouvelle, c\'est le même modèle ?'],
      ['B', 'Yes. They\'re made in Germany, and they\'re usually very good.', 'Oui. Elles sont fabriquées en Allemagne, et en général elles sont très bonnes.'],
      ['A', 'All right. Is it under guarantee?', 'D\'accord. Elle est sous garantie ?'],
      ['B', 'Yes, for two years. Just keep your receipt.', 'Oui, pendant deux ans. Gardez bien votre ticket de caisse.'],
      ['A', 'Thank you. That\'s good enough for me.', 'Merci. Ça me convient.']
    ],
    questions: [
      { q: 'Quel est le problème de la machine ?', choices: ['Elle est arrivée abîmée', 'Elle ne marche pas', 'Elle est trop chère'], answer: 1, at: 1,
        why: { 0: 'Abîmée se dirait « damaged ». Karen dit « it **doesn\'t work** ».', 2: 'Elle ne parle pas du prix : elle dit que la machine ne marche pas.' },
        explain: '« I bought this coffee machine here on Saturday, but **it doesn\'t work** » : j\'ai acheté cette machine ici samedi, mais elle ne marche pas.' },
      { q: 'Que propose le vendeur ?', choices: ['De rembourser Karen', 'De réparer la machine', 'D\'échanger la machine'], answer: 2, at: 4,
        why: { 0: '« I\'m afraid **we don\'t give refunds** » : je regrette, nous ne remboursons pas. C\'est un refus poli.', 1: 'Il ne parle pas de réparer (repair, fix) : il propose un échange.' },
        explain: '« I\'m afraid we don\'t give refunds. But **you can exchange it** » : je regrette, nous ne remboursons pas, mais vous pouvez l\'échanger.' },
      { q: 'Combien de temps dure la garantie ?', choices: ['Deux ans', 'Un an', 'Deux mois'], answer: 0, at: 8,
        why: { 1: 'Un an se dirait « one year ». James dit « for **two years** ».', 2: 'Deux mois se dirait « two months ». James dit « two **years** » : deux ans.' },
        explain: '« Is it under guarantee? » — « Yes, **for two years** » : oui, pendant deux ans. **under guarantee** = sous garantie.' }
    ]
  },

  /* ---------- Chapitre 20 : et si… ? ---------- */
  {
    id: 'en20-d-01', ch: 'en20', level: 1, sec: 'en20-s-if-will',
    title: 'Les projets du week-end',
    context: 'Vendredi soir, Linda et son mari Paul parlent de leur week-end.',
    speakers: { A: { name: 'Linda', g: 'f' }, B: { name: 'Paul', g: 'm' } },
    lines: [
      ['A', 'What shall we do tomorrow?', 'Qu\'est-ce qu\'on fait demain ?'],
      ['B', 'If it\'s sunny, we\'ll go to the seaside.', 'S\'il fait beau, nous irons au bord de la mer.'],
      ['A', 'Good idea. And if it rains?', 'Bonne idée. Et s\'il pleut ?'],
      ['B', 'If it rains, we\'ll visit my sister. She lives near Oxford.', 'S\'il pleut, nous rendrons visite à ma sœur. Elle habite près d\'Oxford.'],
      ['A', 'Your sister who has three dogs?', 'Ta sœur qui a trois chiens ?'],
      ['B', 'Yes, that\'s the one! We\'ll take a cake.', 'Oui, c\'est elle ! On apportera un gâteau.'],
      ['A', 'What will the weather be like tomorrow?', 'Quel temps fera-t-il demain ?'],
      ['B', 'Sunny in the morning, but rain in the afternoon.', 'Du soleil le matin, mais de la pluie l\'après-midi.'],
      ['A', 'Then let\'s do both! The beach first, then your sister.', 'Alors faisons les deux ! D\'abord la plage, puis ta sœur.']
    ],
    questions: [
      { q: 'Que feront-ils s\'il fait beau ?', choices: ['Ils iront au bord de la mer', 'Ils resteront à la maison', 'Ils iront voir la sœur de Paul'], answer: 0, at: 1,
        why: { 1: 'Rester à la maison se dirait « stay at home » : Paul ne le propose pas.', 2: 'Chez sa sœur, c\'est le plan s\'il pleut (« If it **rains** »).' },
        explain: '« **If it\'s sunny, we\'ll go to the seaside** » : s\'il fait beau, nous irons au bord de la mer. if + présent → will.' },
      { q: 'Combien de chiens la sœur de Paul a-t-elle ?', choices: ['Deux', 'Trois', 'Quatre'], answer: 1, at: 4,
        why: { 0: 'Deux se dirait « two ». Linda dit « **three** dogs ».', 2: 'Quatre se dirait « four ». Linda dit « **three** » : trois.' },
        explain: '« Your sister **who has three dogs**? » : ta sœur qui a trois chiens ? **who** = qui (pour une personne).' },
      { q: 'Que décident-ils à la fin ?', choices: ['D\'aller seulement chez la sœur de Paul', 'De rester chez eux à cause de la pluie', 'D\'aller à la plage le matin, puis chez la sœur'], answer: 2, at: 8,
        why: { 0: 'Pas seulement chez la sœur : « **The beach first** » (d\'abord la plage).', 1: 'Ils ne restent pas chez eux : « Let\'s do **both** » (faisons les deux).' },
        explain: 'Il fera beau le matin et il pleuvra l\'après-midi, alors Linda dit : « Let\'s do **both**! **The beach first, then your sister** » : d\'abord la plage, puis ta sœur.' }
    ]
  },
  {
    id: 'en20-d-02', ch: 'en20', level: 2, sec: 'en20-s-if-would',
    title: 'Si je gagnais au loto…',
    context: 'Au café, Brian montre à son amie Carol ce qu\'il vient d\'acheter.',
    speakers: { A: { name: 'Brian', g: 'm' }, B: { name: 'Carol', g: 'f' } },
    lines: [
      ['A', 'Look, Carol! I\'ve bought a lottery ticket.', 'Regarde, Carol ! J\'ai acheté un billet de loto.'],
      ['B', 'Really? What would you do if you won?', 'Vraiment ? Que ferais-tu si tu gagnais ?'],
      ['A', 'I\'d buy a camper van and travel around Europe.', 'J\'achèterais un camping-car et je voyagerais à travers l\'Europe.'],
      ['B', 'Not a house by the sea?', 'Pas une maison au bord de la mer ?'],
      ['A', 'No. I like my little house. And you?', 'Non. J\'aime ma petite maison. Et toi ?'],
      ['B', 'If I were rich, I\'d give half to a charity.', 'Si j\'étais riche, j\'en donnerais la moitié à une association.'],
      ['A', 'Half? That\'s very kind! And the other half?', 'La moitié ? C\'est très généreux ! Et l\'autre moitié ?'],
      ['B', 'I\'d go on a cruise with my grandchildren.', 'Je ferais une croisière avec mes petits-enfants.'],
      ['A', 'Lovely! But first, I need to win.', 'Super ! Mais d\'abord, il faut que je gagne.'],
      ['B', 'Yes… and you\'ve never won anything!', 'Oui… et tu n\'as jamais rien gagné !']
    ],
    questions: [
      { q: 'Que ferait Brian s\'il gagnait ?', choices: ['Il achèterait une maison au bord de la mer', 'Il ferait une croisière', 'Il achèterait un camping-car pour voyager'], answer: 2, at: 2,
        why: { 0: 'C\'est Carol qui parle d\'une maison au bord de la mer ; Brian répond « No ».', 1: 'La croisière, c\'est le rêve de Carol.' },
        explain: '« **I\'d buy a camper van** and travel around Europe » : j\'achèterais un camping-car et je voyagerais à travers l\'Europe. I\'d = I would (le conditionnel).' },
      { q: 'Que ferait Carol avec la moitié de l\'argent ?', choices: ['Elle la donnerait à une association', 'Elle la donnerait à ses petits-enfants', 'Elle la mettrait de côté'], answer: 0, at: 5,
        why: { 1: 'Avec ses petits-enfants, elle ferait une croisière (avec l\'autre moitié).', 2: 'Mettre de côté se dirait « save ». Carol dit « give half to **a charity** ».' },
        explain: '« If I were rich, **I\'d give half to a charity** » : si j\'étais riche, j\'en donnerais la moitié à une association. **half** = la moitié.' },
      { q: 'Que comprend-on grâce à la dernière réplique ?', choices: ['Brian gagne souvent au loto', 'Brian n\'a jamais gagné au loto', 'Brian a déjà gagné un camping-car'], answer: 1, at: 9,
        why: { 0: 'C\'est le contraire : « you\'ve **never** won anything » (tu n\'as jamais rien gagné).', 2: 'Il n\'a rien gagné : le camping-car, c\'est seulement un rêve (would).' },
        explain: '« You\'ve **never won anything**! » : tu n\'as jamais rien gagné ! Carol se moque gentiment : tout cela n\'est qu\'un rêve.' }
    ]
  },
  {
    id: 'en20-d-03', ch: 'en20', level: 3, sec: 'en20-s-relatifs',
    title: 'Le nouveau voisin',
    context: 'Au village, Joan fait la connaissance de Peter, qui vient d\'emménager dans la maison voisine.',
    speakers: { A: { name: 'Joan', g: 'f' }, B: { name: 'Peter', g: 'm' } },
    lines: [
      ['A', 'Welcome to the village! Do you like it here?', 'Bienvenue au village ! Ça vous plaît, ici ?'],
      ['B', 'Yes, very much. It\'s so peaceful after London.', 'Oui, beaucoup. C\'est tellement paisible après Londres.'],
      ['A', 'Are you retired?', 'Vous êtes à la retraite ?'],
      ['B', 'Yes, since March. I was an electrician for forty years.', 'Oui, depuis mars. J\'ai été électricien pendant quarante ans.'],
      ['A', 'Oh! The man who lived here before was a plumber.', 'Oh ! L\'homme qui habitait ici avant était plombier.'],
      ['B', 'Ha! So what do people do here all day?', 'Ha ! Alors, que font les gens ici toute la journée ?'],
      ['A', 'A lot of gardening. And there\'s a charity shop where I volunteer.', 'Beaucoup de jardinage. Et il y a une boutique solidaire où je fais du bénévolat.'],
      ['B', 'Do they need someone who can repair things?', 'Ont-ils besoin de quelqu\'un qui sait réparer des objets ?'],
      ['A', 'Yes! If you come on Thursday, they\'ll be very happy.', 'Oui ! Si vous venez jeudi, ils seront très contents.'],
      ['B', 'Perfect. See you on Thursday, then!', 'Parfait. À jeudi, alors !']
    ],
    questions: [
      { q: 'Quel était le métier de Peter ?', choices: ['Plombier', 'Électricien', 'Jardinier'], answer: 1, at: 3,
        why: { 0: 'Plombier (plumber), c\'était l\'homme qui habitait là avant.', 2: 'Le jardinage (gardening), c\'est ce que font les gens du village.' },
        explain: '« I **was an electrician** for forty years » : j\'ai été électricien pendant quarante ans.' },
      { q: 'Que propose Peter ?', choices: ['D\'aider Joan dans son jardin', 'De réparer des objets pour la boutique de l\'association', 'De donner de l\'argent à l\'association'], answer: 1, at: 7,
        why: { 0: 'On parle de jardinage, mais Peter ne propose pas d\'aider au jardin.', 2: 'Il propose son aide, pas de l\'argent : « someone **who can repair things** ».' },
        explain: 'Peter demande : « Do they need **someone who can repair things**? » (ont-ils besoin de quelqu\'un qui sait réparer des objets ?). Il propose donc de réparer des objets. **who** = qui (pour une personne).' },
      { q: 'Quand Peter ira-t-il à la boutique ?', choices: ['Mardi', 'Ce week-end', 'Jeudi'], answer: 2, at: 8,
        why: { 0: 'Mardi se dirait « Tuesday ». Joan dit « **Thursday** » : jeudi.', 1: 'Personne ne parle du week-end : Joan dit « on **Thursday** ».' },
        explain: '« **If you come on Thursday**, they\'ll be very happy » — « See you on Thursday, then! » : il ira jeudi. if + présent → will.' }
    ]
  }
]);
