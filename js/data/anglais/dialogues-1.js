/* Anglais — dialogues des chapitres 1 à 4 */
APP.registerDialogues([

  /* ---------- Chapitre 1 : saluer, se présenter, to be ---------- */
  {
    id: 'en1-d-01', ch: 'en1', level: 1, sec: 'en1-s-saluer',
    title: 'Une soirée entre amis',
    context: 'Emma est invitée chez des amis. Elle fait la connaissance d\'un homme.',
    speakers: { A: { name: 'James', g: 'm' }, B: { name: 'Emma', g: 'f' } },
    lines: [
      ['A', 'Good evening! I\'m James.', 'Bonsoir ! Je suis James.'],
      ['B', 'Hello, James. My name is Emma.', 'Bonsoir, James. Je m\'appelle Emma.'],
      ['A', 'Nice to meet you, Emma. How are you?', 'Enchanté, Emma. Comment allez-vous ?'],
      ['B', 'Very well, thank you. And you?', 'Très bien, merci. Et vous ?'],
      ['A', 'Oh, I\'m tired. Very tired!', 'Oh, je suis fatigué. Très fatigué !'],
      ['B', 'Oh, I\'m sorry.', 'Oh, je suis désolée.'],
      ['A', 'Goodbye, Emma. Good night!', 'Au revoir, Emma. Bonne nuit !'],
      ['B', 'Good night, James. See you soon!', 'Bonne nuit, James. À bientôt !']
    ],
    questions: [
      { q: 'À quel moment de la journée se passe la scène ?', choices: ['Le matin', 'L\'après-midi', 'Le soir'], answer: 2, at: 0,
        why: { 0: 'Le matin, on dirait « Good morning ».', 1: 'L\'après-midi, on dirait « Good afternoon ».' },
        explain: 'James dit « **Good evening** » : c\'est le bonjour du **soir** (bonsoir).' },
      { q: 'Comment va James ?', choices: ['Il va très bien', 'Il est très fatigué', 'Il est malade'], answer: 1, at: 4,
        why: { 0: '« Very well » (très bien), c\'est la réponse d\'Emma, pas celle de James.', 2: 'Malade se dirait « ill » ou « sick ». James dit « tired ».' },
        explain: 'James dit « Oh, I\'m **tired**. **Very tired**! » : je suis **fatigué**, très fatigué !' },
      { q: 'Que dit Emma à la fin ?', choices: ['À demain !', 'À bientôt !', 'À plus tard !'], answer: 1, at: 7,
        why: { 0: 'À demain se dirait « See you tomorrow! ».', 2: 'À plus tard se dirait « See you later! ».' },
        explain: 'Emma dit « Good night, James. **See you soon!** » : bonne nuit, James. **À bientôt** !' }
    ]
  },
  {
    id: 'en1-d-02', ch: 'en1', level: 1, sec: 'en1-s-presenter',
    title: 'Dans le train',
    context: 'Dans un train, une femme parle avec l\'homme assis à côté d\'elle.',
    speakers: { A: { name: 'Kate', g: 'f' }, B: { name: 'Peter', g: 'm' } },
    lines: [
      ['A', 'Hello! Are you English?', 'Bonjour ! Vous êtes anglais ?'],
      ['B', 'No, I\'m not. I\'m from Germany.', 'Non. Je viens d\'Allemagne.'],
      ['A', 'Oh, nice! I\'m Kate. I\'m from London.', 'Ah, super ! Moi, c\'est Kate. Je viens de Londres.'],
      ['B', 'Nice to meet you, Kate. I\'m Peter.', 'Enchanté, Kate. Moi, c\'est Peter.'],
      ['A', 'What\'s your job, Peter?', 'Quel est votre métier, Peter ?'],
      ['B', 'I\'m an engineer. And you?', 'Je suis ingénieur. Et vous ?'],
      ['A', 'I\'m a teacher. I\'m on holiday!', 'Je suis professeure. Je suis en vacances !'],
      ['B', 'Oh, I\'m on holiday too!', 'Ah, moi aussi, je suis en vacances !']
    ],
    questions: [
      { q: 'D\'où vient Peter ?', choices: ['D\'Allemagne', 'D\'Angleterre', 'D\'Espagne'], answer: 0, at: 1,
        why: { 1: 'Kate demande « Are you English? » et Peter répond « No, I\'m not » : non. C\'est Kate qui vient de Londres.', 2: 'L\'Espagne se dirait « Spain ».' },
        explain: 'Peter dit « No, I\'m not. I\'m from **Germany** » : non, je viens d\'**Allemagne**.' },
      { q: 'Quel est le métier de Peter ?', choices: ['Professeur', 'Médecin', 'Ingénieur'], answer: 2, at: 5,
        why: { 0: '« I\'m a teacher » (je suis professeure), c\'est Kate qui le dit.', 1: 'Médecin se dirait « doctor ».' },
        explain: 'Peter dit « I\'m **an engineer** » : je suis **ingénieur**.' },
      { q: 'Kate et Peter sont tous les deux…', choices: ['anglais', 'en vacances', 'professeurs'], answer: 1, at: 7,
        why: { 0: 'Seule Kate est anglaise (elle vient de Londres) : Peter vient d\'Allemagne.', 2: 'Seule Kate est professeure : Peter est ingénieur (« an engineer »).' },
        explain: 'Kate dit « I\'m **on holiday**! » et Peter répond « I\'m on holiday **too**! » : moi **aussi**, je suis en vacances.' }
    ]
  },
  {
    id: 'en1-d-03', ch: 'en1', level: 2, sec: 'en1-s-politesse',
    title: 'Le rendez-vous à la gare',
    context: 'Paul, un Français, attend à la gare une dame anglaise qu\'il ne connaît pas.',
    speakers: { A: { name: 'Paul', g: 'm' }, B: { name: 'Mrs Wilson', g: 'f' } },
    lines: [
      ['A', 'Excuse me, are you Mrs Wilson?', 'Excusez-moi, êtes-vous madame Wilson ?'],
      ['B', 'Yes, I am. Are you Paul?', 'Oui, c\'est moi. Vous êtes Paul ?'],
      ['A', 'Yes. Hello! Nice to meet you.', 'Oui. Bonjour ! Enchanté.'],
      ['B', 'Nice to meet you too. Are you from Paris?', 'Enchantée aussi. Vous êtes de Paris ?'],
      ['A', 'Sorry, I don\'t understand. More slowly, please.', 'Pardon, je ne comprends pas. Plus lentement, s\'il vous plaît.'],
      ['B', 'Are you... from... Paris?', 'Vous êtes… de… Paris ?'],
      ['A', 'Ah! No, I\'m not. I\'m from Lyon.', 'Ah ! Non. Je viens de Lyon.'],
      ['B', 'Your English is very good!', 'Votre anglais est très bon !'],
      ['A', 'Thank you very much! I\'m a beginner.', 'Merci beaucoup ! Je suis débutant.']
    ],
    questions: [
      { q: 'Que demande Paul quand il ne comprend pas ?', choices: ['De parler plus fort', 'De parler plus lentement', 'De répéter son nom'], answer: 1, at: 4,
        why: { 0: 'Plus fort se dirait « louder ». Paul dit « More slowly » : plus lentement.', 2: 'Pour faire répéter, on dirait « Can you repeat that? ». Paul dit « More slowly ».' },
        explain: 'Paul dit « Sorry, I **don\'t understand**. **More slowly**, please. » : pardon, je ne comprends pas. **Plus lentement**, s\'il vous plaît.' },
      { q: 'D\'où vient Paul ?', choices: ['De Paris', 'De Londres', 'De Lyon'], answer: 2, at: 6,
        why: { 0: 'Mrs Wilson demande « Are you from Paris? » et Paul répond « No, I\'m not » : non.', 1: 'Personne ne parle de Londres (« London ») : Paul dit « I\'m from Lyon ».' },
        explain: 'Paul répond « No, I\'m not. I\'m from **Lyon** » : non, je viens de **Lyon**.' },
      { q: 'Que pense Mrs Wilson de l\'anglais de Paul ?', choices: ['Il est très bon', 'Il n\'est pas très bon', 'Elle ne le comprend pas'], answer: 0, at: 7,
        why: { 1: 'Mrs Wilson dit « very good » (très bon). « Pas très bon » se dirait « isn\'t very good ».', 2: 'C\'est Paul qui ne comprend pas (« I don\'t understand »), pas Mrs Wilson.' },
        explain: 'Mrs Wilson dit « Your English is **very good**! » : votre anglais est **très bon** !' }
    ]
  },

  /* ---------- Chapitre 2 : nombres, heure, dates, prix ---------- */
  {
    id: 'en2-d-01', ch: 'en2', level: 1, sec: 'en2-s-quotidien',
    title: 'L\'inscription au club',
    context: 'Margaret s\'inscrit à un club de marche. Andrew, le responsable, remplit sa fiche.',
    speakers: { A: { name: 'Margaret', g: 'f' }, B: { name: 'Andrew', g: 'm' } },
    lines: [
      ['B', 'Good morning! What\'s your name, please?', 'Bonjour ! Quel est votre nom, s\'il vous plaît ?'],
      ['A', 'My name is Margaret Hill.', 'Je m\'appelle Margaret Hill.'],
      ['B', 'Thank you. And how old are you?', 'Merci. Et quel âge avez-vous ?'],
      ['A', 'I\'m sixty-four years old.', 'J\'ai soixante-quatre ans.'],
      ['B', 'And what\'s your phone number?', 'Et quel est votre numéro de téléphone ?'],
      ['A', 'It\'s four five, double eight, two oh.', 'C\'est le 45 88 20.'],
      ['B', 'Thank you. See you on Sunday at nine o\'clock!', 'Merci. À dimanche, à neuf heures !'],
      ['A', 'Very good. See you on Sunday!', 'Très bien. À dimanche !']
    ],
    questions: [
      { q: 'Quel âge a Margaret ?', choices: ['46 ans', '60 ans', '64 ans'], answer: 2, at: 3,
        why: { 0: '46 se dirait « forty-six ». Margaret dit « sixty-four » : 60 + 4.', 1: '60 se dirait « sixty » tout seul. Margaret dit « sixty-four ».' },
        explain: 'Margaret dit « I\'m **sixty-four** years old » : j\'ai **soixante-quatre** ans.' },
      { q: 'Quel est son numéro de téléphone ?', choices: ['45 88 20', '45 80 20', '54 88 20'], answer: 0, at: 5,
        why: { 1: 'Margaret dit « double eight » : deux fois 8, donc 88.', 2: 'Le numéro commence par « four five » : 4, puis 5.' },
        explain: 'Margaret dit « **four five, double eight, two oh** » : 45 88 20. « double eight » = 88 et « oh » = 0.' },
      { q: 'Quand Andrew et Margaret vont-ils se revoir ?', choices: ['Samedi à 9 h', 'Dimanche à 9 h', 'Dimanche à 10 h'], answer: 1, at: 6,
        why: { 0: 'Samedi se dirait « Saturday ». Andrew dit « Sunday ».', 2: '10 h se dirait « ten o\'clock ». Andrew dit « nine o\'clock ».' },
        explain: 'Andrew dit « See you on **Sunday** at **nine o\'clock**! » : à **dimanche**, à **neuf heures** !' }
    ]
  },
  {
    id: 'en2-d-02', ch: 'en2', level: 2, sec: 'en2-s-heure',
    title: 'Au guichet de la gare',
    context: 'À la gare, Michael demande des renseignements à Jane, au guichet.',
    speakers: { A: { name: 'Michael', g: 'm' }, B: { name: 'Jane', g: 'f' } },
    lines: [
      ['A', 'Good morning. What time is the train to Oxford?', 'Bonjour. À quelle heure est le train pour Oxford ?'],
      ['B', 'The train to Oxford is at quarter past ten.', 'Le train pour Oxford est à dix heures et quart.'],
      ['A', 'Quarter past ten? And what time is it, please?', 'Dix heures et quart ? Et quelle heure est-il, s\'il vous plaît ?'],
      ['B', 'It\'s ten o\'clock.', 'Il est dix heures.'],
      ['A', 'Good. How much is a ticket?', 'Bien. Combien coûte un billet ?'],
      ['B', 'It\'s sixteen pounds fifty.', 'C\'est seize livres cinquante.'],
      ['A', 'Thank you very much.', 'Merci beaucoup.'],
      ['B', 'You\'re welcome. Have a nice day!', 'Je vous en prie. Bonne journée !']
    ],
    questions: [
      { q: 'À quelle heure est le train pour Oxford ?', choices: ['10 h 15', '10 h', '10 h 45'], answer: 0, at: 1,
        why: { 1: '10 h (« ten o\'clock »), c\'est l\'heure qu\'il est, pas l\'heure du train.', 2: '10 h 45 se dirait « quarter to eleven ». « Quarter past ten » = 10 h 15.' },
        explain: 'Jane dit « The train to Oxford is at **quarter past ten** » : à dix heures **et quart** (10 h 15).' },
      { q: 'Quelle heure est-il quand Michael parle avec Jane ?', choices: ['10 h 30', '10 h 15', '10 h'], answer: 2, at: 3,
        why: { 0: '10 h 30 se dirait « half past ten ».', 1: '10 h 15 (« quarter past ten »), c\'est l\'heure du train.' },
        explain: 'Jane dit « It\'s **ten o\'clock** » : il est **dix heures** pile.' },
      { q: 'Combien coûte le billet ?', choices: ['6,50 livres', '16,50 livres', '60,50 livres'], answer: 1, at: 5,
        why: { 0: '6 se dirait « six ». Jane dit « sixteen » : 16.', 2: '60 se dirait « sixty ». Jane dit « sixteen » : 16.' },
        explain: 'Jane dit « It\'s **sixteen** pounds **fifty** » : **seize** livres cinquante (16,50 £).' }
    ]
  },
  {
    id: 'en2-d-03', ch: 'en2', level: 2, sec: 'en2-s-calendrier',
    title: 'Une invitation au téléphone',
    context: 'Rachel téléphone à son ami Simon pour l\'inviter à un dîner.',
    speakers: { A: { name: 'Rachel', g: 'f' }, B: { name: 'Simon', g: 'm' } },
    lines: [
      ['A', 'Hi, Simon! Are you busy on Friday?', 'Salut, Simon ! Tu es occupé vendredi ?'],
      ['B', 'Yes, I\'m busy on Friday. Sorry!', 'Oui, je suis occupé vendredi. Désolé !'],
      ['A', 'And on Saturday? It\'s my birthday!', 'Et samedi ? C\'est mon anniversaire !'],
      ['B', 'Saturday is fine. Happy birthday!', 'Samedi, ça me va. Joyeux anniversaire !'],
      ['A', 'Thank you! Dinner is at half past seven.', 'Merci ! Le dîner est à sept heures et demie.'],
      ['B', 'Half past seven. Where is it?', 'Sept heures et demie. C\'est où ?'],
      ['A', 'At the Italian restaurant.', 'Au restaurant italien.'],
      ['B', 'Very good. See you on Saturday!', 'Très bien. À samedi !'],
      ['A', 'See you on Saturday. Bye, Simon!', 'À samedi. Salut, Simon !']
    ],
    questions: [
      { q: 'Quel jour est le dîner ?', choices: ['Vendredi', 'Dimanche', 'Samedi'], answer: 2, at: 3,
        why: { 0: 'Vendredi (« Friday »), Simon est occupé : « I\'m busy on Friday ».', 1: 'Dimanche se dirait « Sunday ».' },
        explain: 'Rachel propose « And on **Saturday**? » et Simon répond « **Saturday** is fine » : **samedi**, ça me va.' },
      { q: 'Pourquoi Rachel organise-t-elle ce dîner ?', choices: ['C\'est l\'anniversaire de Rachel', 'Rachel est en vacances', 'C\'est l\'anniversaire de Simon'], answer: 0, at: 2,
        why: { 1: 'Rachel ne parle pas de vacances (« holiday »).', 2: 'Rachel dit « It\'s **my** birthday » : c\'est **mon** anniversaire. C\'est donc celui de Rachel.' },
        explain: 'Rachel dit « It\'s **my birthday**! » : c\'est **mon anniversaire** ! Simon lui répond « Happy birthday! ».' },
      { q: 'À quelle heure est le dîner ?', choices: ['7 h 15', '7 h 30', '6 h 30'], answer: 1, at: 4,
        why: { 0: '7 h 15 se dirait « quarter past seven ».', 2: 'Attention : « half past seven », c\'est la demie **après** sept heures, donc 7 h 30, pas 6 h 30.' },
        explain: 'Rachel dit « Dinner is at **half past seven** » : le dîner est à **sept heures et demie** (7 h 30, le soir).' }
    ]
  },

  /* ---------- Chapitre 3 : la famille, have got, le 's ---------- */
  {
    id: 'en3-d-01', ch: 'en3', level: 1, sec: 'en3-s-vocab',
    title: 'La photo de famille',
    context: 'George montre une photo de sa famille à Claire, sa voisine.',
    speakers: { A: { name: 'George', g: 'm' }, B: { name: 'Claire', g: 'f' } },
    lines: [
      ['B', 'Is this your family, George?', 'C\'est ta famille, George ?'],
      ['A', 'Yes, it is. This is my wife, Sue.', 'Oui. Voici ma femme, Sue.'],
      ['B', 'She\'s very beautiful! Are they your children?', 'Elle est très belle ! Ce sont tes enfants ?'],
      ['A', 'Yes. I\'ve got a son and two daughters.', 'Oui. J\'ai un fils et deux filles.'],
      ['B', 'How old is your son?', 'Quel âge a ton fils ?'],
      ['A', 'He\'s thirty. His name is Ben.', 'Il a trente ans. Il s\'appelle Ben.'],
      ['B', 'He\'s very tall!', 'Il est très grand !'],
      ['A', 'Yes, he is. And he\'s very funny.', 'Oui. Et il est très drôle.']
    ],
    questions: [
      { q: 'Comment s\'appelle la femme de George ?', choices: ['Ben', 'Claire', 'Sue'], answer: 2, at: 1,
        why: { 0: 'Ben, c\'est le fils de George : « His name is Ben ».', 1: 'Claire, c\'est la voisine qui regarde la photo.' },
        explain: 'George dit « This is **my wife, Sue** » : voici **ma femme**, Sue.' },
      { q: 'Combien d\'enfants a George ?', choices: ['Trois', 'Deux', 'Un'], answer: 0, at: 3,
        why: { 1: 'George a deux filles (« two daughters »), mais aussi un fils : 2 + 1 = 3.', 2: 'George a un fils (« a son »), mais aussi deux filles : 1 + 2 = 3.' },
        explain: 'George dit « I\'ve got **a son and two daughters** » : j\'ai **un fils et deux filles**, donc trois enfants.' },
      { q: 'Quel âge a le fils de George ?', choices: ['13 ans', '30 ans', '20 ans'], answer: 1, at: 5,
        why: { 0: '13 se dirait « thirteen ». George dit « thirty » : 30.', 2: '20 se dirait « twenty ». George dit « thirty » : 30.' },
        explain: 'George dit « He\'s **thirty** » : il a **trente** ans.' }
    ]
  },
  {
    id: 'en3-d-02', ch: 'en3', level: 2, sec: 'en3-s-havegot',
    title: 'Frères et sœurs',
    context: 'Au travail, Karen et Steve font connaissance pendant la pause.',
    speakers: { A: { name: 'Karen', g: 'f' }, B: { name: 'Steve', g: 'm' } },
    lines: [
      ['A', 'Have you got any brothers or sisters, Steve?', 'Tu as des frères et sœurs, Steve ?'],
      ['B', 'Yes, I\'ve got two sisters. And you?', 'Oui, j\'ai deux sœurs. Et toi ?'],
      ['A', 'I haven\'t got any sisters. I\'ve got a brother.', 'Je n\'ai pas de sœur. J\'ai un frère.'],
      ['B', 'Is your brother married?', 'Ton frère est marié ?'],
      ['A', 'No, he\'s divorced. He\'s got a daughter, Amy.', 'Non, il est divorcé. Il a une fille, Amy.'],
      ['B', 'How old is your niece?', 'Quel âge a ta nièce ?'],
      ['A', 'She\'s eight. She\'s very funny.', 'Elle a huit ans. Elle est très drôle.'],
      ['B', 'My sister\'s son is eight too!', 'Le fils de ma sœur a huit ans aussi !']
    ],
    questions: [
      { q: 'Combien de sœurs a Steve ?', choices: ['Une', 'Deux', 'Aucune'], answer: 1, at: 1,
        why: { 0: 'Steve dit « **two** sisters » : deux sœurs. C\'est Karen qui a **un** frère.', 2: 'C\'est Karen qui n\'a pas de sœur : « I haven\'t got any sisters ».' },
        explain: 'Steve dit « I\'ve got **two sisters** » : j\'ai **deux sœurs**.' },
      { q: 'Le frère de Karen est…', choices: ['marié', 'célibataire', 'divorcé'], answer: 2, at: 4,
        why: { 0: 'Steve demande « Is your brother married? » et Karen répond « No ».', 1: 'Célibataire se dirait « single ». Karen dit « divorced ».' },
        explain: 'Karen répond « No, he\'s **divorced** » : non, il est **divorcé**.' },
      { q: 'Qui est Amy ?', choices: ['La fille du frère de Karen', 'La fille de la sœur de Steve', 'La fille de Karen'], answer: 0, at: 4,
        why: { 1: 'La sœur de Steve a un fils (« my sister\'s son »), pas une fille.', 2: 'Karen dit « **He**\'s got a daughter » : c\'est son frère qui a une fille. Amy est donc sa nièce (« your niece »).' },
        explain: 'Karen parle de son frère : « **He\'s got a daughter, Amy** » (il a une fille, Amy). Steve dit ensuite « your **niece** » : ta nièce.' }
    ]
  },
  {
    id: 'en3-d-03', ch: 'en3', level: 2, sec: 'en3-s-genitif',
    title: 'Les petits-enfants',
    context: 'Par-dessus la haie du jardin, Richard bavarde avec sa voisine Barbara.',
    speakers: { A: { name: 'Barbara', g: 'f' }, B: { name: 'Richard', g: 'm' } },
    lines: [
      ['B', 'Have you got any grandchildren, Barbara?', 'Avez-vous des petits-enfants, Barbara ?'],
      ['A', 'Yes, I\'ve got three. Two girls and a boy.', 'Oui, j\'en ai trois. Deux filles et un garçon.'],
      ['B', 'How old is your grandson?', 'Quel âge a votre petit-fils ?'],
      ['A', 'He\'s five. He\'s my daughter\'s son.', 'Il a cinq ans. C\'est le fils de ma fille.'],
      ['B', 'Is your daughter married?', 'Votre fille est-elle mariée ?'],
      ['A', 'Yes. Her husband is Italian. He\'s very funny.', 'Oui. Son mari est italien. Il est très drôle.'],
      ['B', 'And your granddaughters? Are they your son\'s children?', 'Et vos petites-filles ? Ce sont les enfants de votre fils ?'],
      ['A', 'Yes. They\'re ten and twelve. They\'re very kind.', 'Oui. Elles ont dix et douze ans. Elles sont très gentilles.'],
      ['B', 'You\'ve got a beautiful family!', 'Vous avez une belle famille !']
    ],
    questions: [
      { q: 'Combien de petits-enfants a Barbara ?', choices: ['Deux', 'Trois', 'Cinq'], answer: 1, at: 1,
        why: { 0: 'Barbara a deux petites-filles, mais aussi un petit-fils : 2 + 1 = 3.', 2: 'Cinq (« five »), c\'est l\'âge de son petit-fils.' },
        explain: 'Barbara dit « Yes, I\'ve got **three**. Two girls and a boy. » : j\'en ai **trois**, deux filles et un garçon.' },
      { q: 'Qui est le petit-fils de Barbara ?', choices: ['Le fils de sa fille', 'Le fils de son fils', 'Le fils de sa sœur'], answer: 0, at: 3,
        why: { 1: 'Les enfants de son fils, ce sont les deux petites-filles (« your son\'s children »).', 2: 'Barbara ne parle pas de sa sœur (« sister »).' },
        explain: 'Barbara dit « He\'s **my daughter\'s son** » : c\'est **le fils de ma fille**. Le \'s se lit à l\'envers : daughter\'s son = le fils de la fille.' },
      { q: 'Le mari de la fille de Barbara est…', choices: ['espagnol', 'anglais', 'italien'], answer: 2, at: 5,
        why: { 0: 'Espagnol se dirait « Spanish ».', 1: 'Anglais se dirait « English ».' },
        explain: 'Barbara dit « Her husband is **Italian** » : son mari est **italien**.' }
    ]
  },

  /* ---------- Chapitre 4 : la maison, there is / there are, in, on, under ---------- */
  {
    id: 'en4-d-01', ch: 'en4', level: 1, sec: 'en4-s-prepositions',
    title: 'Où sont mes affaires ?',
    context: 'Le matin, Tony est pressé : il cherche ses affaires avant de partir travailler.',
    speakers: { A: { name: 'Tony', g: 'm' }, B: { name: 'Sarah', g: 'f' } },
    lines: [
      ['A', 'Sarah, where are my keys?', 'Sarah, où sont mes clés ?'],
      ['B', 'Your keys are on the table, in the kitchen.', 'Tes clés sont sur la table, dans la cuisine.'],
      ['A', 'Thanks! And where is my phone?', 'Merci ! Et où est mon téléphone ?'],
      ['B', 'It\'s next to the television.', 'Il est à côté de la télévision.'],
      ['A', 'No, it isn\'t. There\'s a book next to the television.', 'Non. Il y a un livre à côté de la télévision.'],
      ['B', 'Oh, sorry. It\'s under the sofa!', 'Oh, pardon. Il est sous le canapé !'],
      ['A', 'Oh yes! Thank you. Where is my umbrella?', 'Ah oui ! Merci. Où est mon parapluie ?'],
      ['B', 'It\'s behind the door.', 'Il est derrière la porte.'],
      ['A', 'Thank you, Sarah! Have a nice day!', 'Merci, Sarah ! Bonne journée !']
    ],
    questions: [
      { q: 'Où sont les clés de Tony ?', choices: ['Sur la table, dans la cuisine', 'Sous la table, dans la cuisine', 'Sur la table, dans le salon'], answer: 0, at: 1,
        why: { 1: 'Sous se dirait « under ». Sarah dit « on the table » : sur la table.', 2: 'Le salon se dirait « the living room ». Sarah dit « in the kitchen ».' },
        explain: 'Sarah dit « Your keys are **on the table**, **in the kitchen** » : tes clés sont **sur la table**, **dans la cuisine**.' },
      { q: 'Finalement, où est le téléphone ?', choices: ['À côté de la télévision', 'Sous le canapé', 'Derrière la porte', 'Sur la table'], answer: 1, at: 5,
        why: { 0: 'À côté de la télévision (« next to the television »), il y a un livre, pas le téléphone.', 2: 'Derrière la porte (« behind the door »), c\'est le parapluie.', 3: 'Sur la table (« on the table »), ce sont les clés.' },
        explain: 'Sarah dit « It\'s **under the sofa**! » : il est **sous le canapé** !' },
      { q: 'Qu\'y a-t-il à côté de la télévision ?', choices: ['Le téléphone', 'Les clés', 'Un livre'], answer: 2, at: 4,
        why: { 0: 'Sarah le croit, mais Tony dit « No, it isn\'t » : le téléphone n\'y est pas.', 1: 'Les clés sont sur la table de la cuisine.' },
        explain: 'Tony dit « **There\'s a book** next to the television » : il y a **un livre** à côté de la télévision.' }
    ]
  },
  {
    id: 'en4-d-02', ch: 'en4', level: 2, sec: 'en4-s-thereis',
    title: 'La visite d\'un appartement',
    context: 'Laura visite un appartement à louer avec le propriétaire, Mr Davies.',
    speakers: { A: { name: 'Laura', g: 'f' }, B: { name: 'Mr Davies', g: 'm' } },
    lines: [
      ['B', 'Hello! This is the living room.', 'Bonjour ! Voici le salon.'],
      ['A', 'It\'s very nice! How many bedrooms are there?', 'Il est très agréable ! Combien de chambres y a-t-il ?'],
      ['B', 'There are two bedrooms and a small bathroom.', 'Il y a deux chambres et une petite salle de bains.'],
      ['A', 'Is there a garden?', 'Y a-t-il un jardin ?'],
      ['B', 'No, there isn\'t. There\'s a big garage.', 'Non, il n\'y en a pas. Il y a un grand garage.'],
      ['A', 'And is there a lift?', 'Et y a-t-il un ascenseur ?'],
      ['B', 'Yes, there is. It\'s next to the stairs.', 'Oui. Il est à côté de l\'escalier.'],
      ['A', 'Good. Are there any shops near here?', 'Bien. Y a-t-il des magasins près d\'ici ?'],
      ['B', 'Yes, there\'s a supermarket opposite the flat.', 'Oui, il y a un supermarché en face de l\'appartement.']
    ],
    questions: [
      { q: 'Combien de chambres y a-t-il ?', choices: ['Une', 'Trois', 'Deux'], answer: 2, at: 2,
        why: { 0: 'Il y a **une** petite salle de bains, mais **deux** chambres (« two bedrooms »).', 1: 'Trois se dirait « three ».' },
        explain: 'Mr Davies dit « There are **two bedrooms** and a small bathroom » : il y a **deux chambres** et une petite salle de bains.' },
      { q: 'Y a-t-il un jardin ?', choices: ['Non, mais il y a un garage', 'Oui, derrière l\'appartement', 'Oui, à côté du garage'], answer: 0, at: 4,
        why: { 1: 'Mr Davies répond « No, there isn\'t » : non, il n\'y en a pas.', 2: 'Mr Davies répond « No, there isn\'t » : il y a un garage, mais pas de jardin.' },
        explain: 'Mr Davies dit « **No, there isn\'t**. **There\'s a big garage.** » : non, il n\'y en a pas. Il y a un grand garage.' },
      { q: 'Où est le supermarché ?', choices: ['À côté de l\'escalier', 'En face de l\'appartement', 'Derrière l\'appartement'], answer: 1, at: 8,
        why: { 0: 'À côté de l\'escalier (« next to the stairs »), c\'est l\'ascenseur.', 2: 'Derrière se dirait « behind ». Mr Davies dit « opposite » : en face.' },
        explain: 'Mr Davies dit « there\'s a supermarket **opposite** the flat » : il y a un supermarché **en face de** l\'appartement.' }
    ]
  },
  {
    id: 'en4-d-03', ch: 'en4', level: 2, sec: 'en4-s-demonstratifs',
    title: 'Au magasin de vaisselle',
    context: 'Dans un magasin, Linda choisit de la vaisselle pour son nouvel appartement.',
    speakers: { A: { name: 'Linda', g: 'f' }, B: { name: 'Chris', g: 'm' } },
    lines: [
      ['A', 'Excuse me, how much are these cups?', 'Excusez-moi, combien coûtent ces tasses ?'],
      ['B', 'The small cups? They\'re four pounds.', 'Les petites tasses ? Elles sont à quatre livres.'],
      ['A', 'And those big cups, next to the plates?', 'Et ces grandes tasses, là-bas, à côté des assiettes ?'],
      ['B', 'Those cups are six pounds. They\'re very nice.', 'Celles-là sont à six livres. Elles sont très jolies.'],
      ['A', 'Two big cups, please. And this glass?', 'Deux grandes tasses, s\'il vous plaît. Et ce verre ?'],
      ['B', 'That glass? It\'s two pounds fifty.', 'Ce verre-là ? Il est à deux livres cinquante.'],
      ['A', 'Two big cups and a glass. How much is it?', 'Deux grandes tasses et un verre. Ça fait combien ?'],
      ['B', 'It\'s fourteen pounds fifty, please.', 'Ça fait quatorze livres cinquante, s\'il vous plaît.'],
      ['A', 'Thank you very much. Goodbye!', 'Merci beaucoup. Au revoir !']
    ],
    questions: [
      { q: 'Combien coûtent les petites tasses ?', choices: ['6 livres', '4 livres', '2,50 livres'], answer: 1, at: 1,
        why: { 0: '6 livres, c\'est le prix des grandes tasses (« those big cups »).', 2: '2,50 livres, c\'est le prix du verre (« that glass »).' },
        explain: 'Chris dit « The small cups? They\'re **four pounds** » : les petites tasses sont à **quatre livres**.' },
      { q: 'Qu\'achète Linda ?', choices: ['Deux petites tasses et un verre', 'Deux grandes tasses et deux verres', 'Deux grandes tasses et un verre'], answer: 2, at: 6,
        why: { 0: 'Linda dit « Two **big** cups » : deux **grandes** tasses, pas les petites.', 1: 'Linda prend « a glass » : **un** seul verre.' },
        explain: 'Linda dit « **Two big cups and a glass** » : deux grandes tasses et un verre.' },
      { q: 'Combien paie Linda en tout ?', choices: ['14,50 livres', '40,50 livres', '12,50 livres'], answer: 0, at: 7,
        why: { 1: '40 se dirait « forty ». Chris dit « fourteen » : 14.', 2: '12 se dirait « twelve ». Chris dit « fourteen » : 14 (6 + 6 + 2,50).' },
        explain: 'Chris dit « It\'s **fourteen pounds fifty** » : ça fait **quatorze livres cinquante** (14,50 £).' }
    ]
  }
]);
