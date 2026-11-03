/* Anglais — dialogues des chapitres 15 et 16 */
APP.registerDialogues([
  /* ---------- Chapitre 15 : demander, proposer, inviter ---------- */
  {
    id: 'en15-d-01', ch: 'en15', level: 1, sec: 'en15-s-demander',
    title: 'Un service entre voisins',
    context: 'Karen part bientôt en voyage. Elle sonne chez son voisin Dave pour lui demander un service.',
    speakers: { A: { name: 'Karen', g: 'f' }, B: { name: 'Dave', g: 'm' } },
    lines: [
      ['A', 'Hi, Dave. Could you do me a favour?', 'Salut, Dave. Tu pourrais me rendre un service ?'],
      ['B', 'Of course. What is it?', 'Bien sûr. Qu\'est-ce que c\'est ?'],
      ['A', 'I\'m going to Spain on Friday, for a week.', 'Je pars en Espagne vendredi, pour une semaine.'],
      ['B', 'Lucky you! How can I help?', 'Quelle chance ! Comment je peux t\'aider ?'],
      ['A', 'Could you feed my cat in the evening?', 'Tu pourrais donner à manger à mon chat le soir ?'],
      ['B', 'No problem. Shall I water the plants too?', 'Pas de problème. Tu veux que j\'arrose aussi les plantes ?'],
      ['A', 'Oh, yes, please. That\'s very kind of you.', 'Oh oui, volontiers. C\'est très gentil de ta part.'],
      ['B', 'Do you mind if I come at eight?', 'Ça te dérange si je viens à huit heures ?'],
      ['A', 'Not at all. Here are my keys.', 'Pas du tout. Voici mes clés.']
    ],
    questions: [
      { q: 'Combien de temps Karen part-elle ?', choices: ['Un week-end', 'Une semaine', 'Deux semaines'], answer: 1, at: 2,
        why: { 0: 'Un week-end se dirait « for the weekend ». Karen dit « for **a week** ».', 2: 'Deux semaines se dirait « two weeks ». Karen dit « for **a week** » : une semaine.' },
        explain: '« I\'m going to Spain on Friday, **for a week** » : je pars en Espagne vendredi, pour une semaine.' },
      { q: 'Que propose Dave en plus ?', choices: ['De relever le courrier', 'De nourrir le chien', 'D\'arroser les plantes'], answer: 2, at: 5,
        why: { 0: 'Le courrier (the post) n\'est pas mentionné. Dave dit « **water the plants** ».', 1: 'Karen a un **chat** (a cat), pas un chien (a dog). Et c\'est elle qui demande de le nourrir.' },
        explain: '« **Shall I** water the plants too? » : tu veux que j\'arrose aussi les plantes ? **Shall I…?** sert à proposer son aide.' },
      { q: 'Dave demande s\'il peut venir à huit heures. Que répond Karen ?', choices: ['Ça ne la dérange pas du tout', 'C\'est trop tard pour elle', 'Elle préfère sept heures'], answer: 0, at: 8,
        why: { 1: 'Trop tard se dirait « too late ». Karen dit « **Not at all** » : pas du tout.', 2: 'Elle ne propose pas d\'autre heure : elle répond « Not at all » et lui donne ses clés.' },
        explain: 'À « **Do you mind** if I come at eight? » (ça te dérange si… ?), Karen répond « **Not at all** » : pas du tout, donc c\'est d\'accord. Elle lui donne même ses clés : « Here are my keys ».' }
    ]
  },
  {
    id: 'en15-d-02', ch: 'en15', level: 2, sec: 'en15-s-repondre',
    title: 'Une invitation à dîner',
    context: 'Mark croise sa collègue Sophie à la sortie du bureau. Il voudrait l\'inviter à dîner.',
    speakers: { A: { name: 'Mark', g: 'm' }, B: { name: 'Sophie', g: 'f' } },
    lines: [
      ['A', 'Sophie, are you free on Saturday evening?', 'Sophie, tu es libre samedi soir ?'],
      ['B', 'Saturday? Why?', 'Samedi ? Pourquoi ?'],
      ['A', 'Would you like to come for dinner at our house?', 'Tu voudrais venir dîner chez nous ?'],
      ['B', 'Oh, I\'d love to, but I\'m afraid I can\'t. It\'s my mother\'s birthday.', 'Oh, j\'aimerais beaucoup, mais malheureusement je ne peux pas. C\'est l\'anniversaire de ma mère.'],
      ['A', 'No problem. How about Sunday lunch instead?', 'Pas de problème. Et un déjeuner dimanche, plutôt ?'],
      ['B', 'That sounds lovely. What time?', 'Ce serait très bien. À quelle heure ?'],
      ['A', 'Shall we say half past twelve?', 'Disons midi et demi ?'],
      ['B', 'Perfect. Shall I bring a dessert?', 'Parfait. Tu veux que j\'apporte un dessert ?'],
      ['A', 'Yes, please! See you on Sunday.', 'Oui, volontiers ! À dimanche.']
    ],
    questions: [
      { q: 'Pourquoi Sophie ne peut-elle pas venir samedi ?', choices: ['Elle travaille', 'C\'est l\'anniversaire de sa mère', 'Elle est malade'], answer: 1, at: 3,
        why: { 0: 'Elle ne parle pas de travail (work). Elle dit « It\'s my **mother\'s birthday** ».', 2: 'Malade se dirait « ill ». Elle dit « It\'s my **mother\'s birthday** ».' },
        explain: '« I\'d love to, **but I\'m afraid I can\'t**. It\'s my **mother\'s birthday** » : j\'aimerais beaucoup, mais malheureusement je ne peux pas, c\'est l\'anniversaire de ma mère. Un refus poli : merci, excuse, raison.' },
      { q: 'Que propose Mark à la place ?', choices: ['Un dîner dimanche', 'Un déjeuner samedi', 'Un déjeuner dimanche'], answer: 2, at: 4,
        why: { 0: 'Dîner se dirait « dinner ». Mark dit « Sunday **lunch** » : un déjeuner.', 1: 'Samedi, Sophie ne peut pas. Mark propose « **Sunday** lunch ».' },
        explain: '« **How about** Sunday lunch **instead**? » : et un déjeuner dimanche, plutôt ? **How about…?** sert à proposer, **instead** = à la place.' },
      { q: 'À quelle heure ont-ils rendez-vous ?', choices: ['12 h 30', '12 h 15', '13 h 30'], answer: 0, at: 6,
        why: { 1: '12 h 15 se dirait « quarter past twelve ». Mark dit « **half past twelve** ».', 2: '13 h 30 se dirait « half past one ». Mark dit « half past **twelve** ».' },
        explain: '« Shall we say **half past twelve**? » : disons midi et demi ? **half past twelve** = 12 h 30.' }
    ]
  },
  {
    id: 'en15-d-03', ch: 'en15', level: 3, sec: 'en15-s-recevoir',
    title: 'Un invité à la maison',
    context: 'Linda a invité son ami Peter à dîner. On sonne à la porte : c\'est lui.',
    speakers: { A: { name: 'Linda', g: 'f' }, B: { name: 'Peter', g: 'm' } },
    lines: [
      ['A', 'Hello, Peter! Come in. Can I take your coat?', 'Bonjour, Peter ! Entre. Je peux prendre ton manteau ?'],
      ['B', 'Thanks, Linda. These flowers are for you.', 'Merci, Linda. Ces fleurs sont pour toi.'],
      ['A', 'Oh, they\'re lovely! Would you like a glass of wine?', 'Oh, elles sont magnifiques ! Tu veux un verre de vin ?'],
      ['B', 'I\'d rather have an orange juice. I\'m driving tonight.', 'Je préférerais un jus d\'orange. Je conduis ce soir.'],
      ['A', 'Of course. Sit down and help yourself to some cheese.', 'Bien sûr. Assieds-toi et sers-toi du fromage.'],
      ['B', 'Thanks. Shall I help you in the kitchen?', 'Merci. Tu veux que je t\'aide à la cuisine ?'],
      ['A', 'No, it\'s fine. Dinner will be ready in ten minutes.', 'Non, ça va. Le dîner sera prêt dans dix minutes.'],
      ['B', 'Great! I\'m very hungry.', 'Super ! J\'ai très faim.'],
      ['A', 'Good! Make yourself at home.', 'Tant mieux ! Fais comme chez toi.']
    ],
    questions: [
      { q: 'Qu\'a apporté Peter ?', choices: ['Du vin', 'Des fleurs', 'Un dessert'], answer: 1, at: 1,
        why: { 0: 'Le vin, c\'est Linda qui le propose : « Would you like a glass of **wine**? ».', 2: 'Peter ne parle pas de dessert. Il dit « These **flowers** are for you ».' },
        explain: '« These **flowers** are for you » : ces fleurs sont pour toi. Linda répond « they\'re lovely! » (elles sont magnifiques).' },
      { q: 'Pourquoi Peter ne boit-il pas de vin ?', choices: ['Il conduit ce soir', 'Il n\'aime pas le vin', 'Il est malade'], answer: 0, at: 3,
        why: { 1: 'Il ne dit pas « I don\'t like wine ». Il dit « **I\'m driving** tonight ».', 2: 'Malade se dirait « ill ». Il dit « I\'m **driving** tonight ».' },
        explain: '« **I\'d rather** have an orange juice. **I\'m driving** tonight » : je préférerais un jus d\'orange, je conduis ce soir. **I\'d rather** = je préférerais.' },
      { q: 'Dans combien de temps le dîner sera-t-il prêt ?', choices: ['Dans 5 minutes', 'Dans 20 minutes', 'Dans 10 minutes'], answer: 2, at: 6,
        why: { 0: 'Cinq se dirait « five ». Linda dit « in **ten** minutes ».', 1: 'Vingt se dirait « twenty ». Linda dit « in **ten** minutes ».' },
        explain: '« Dinner will be ready **in ten minutes** » : le dîner sera prêt dans dix minutes. C\'est pour cela qu\'elle refuse l\'aide de Peter : « No, it\'s fine ».' }
    ]
  },

  /* ---------- Chapitre 16 : chez le médecin ---------- */
  {
    id: 'en16-d-01', ch: 'en16', level: 1, sec: 'en16-s-rdv',
    title: 'Prendre rendez-vous',
    context: 'Paul Martin, un Français qui habite en Angleterre, téléphone au cabinet de son médecin.',
    speakers: { A: { name: 'Carol', g: 'f' }, B: { name: 'Paul', g: 'm' } },
    lines: [
      ['A', 'Good morning, Riverside Surgery. How can I help?', 'Bonjour, cabinet médical Riverside. Que puis-je faire pour vous ?'],
      ['B', 'Hello. I\'d like to make an appointment, please.', 'Bonjour. Je voudrais prendre rendez-vous, s\'il vous plaît.'],
      ['A', 'Of course. Is it urgent?', 'Bien sûr. C\'est urgent ?'],
      ['B', 'Not really. I\'ve had a cough for two weeks.', 'Pas vraiment. Je tousse depuis deux semaines.'],
      ['A', 'I see. Can you come on Thursday at ten past nine?', 'Je vois. Pouvez-vous venir jeudi à neuf heures dix ?'],
      ['B', 'I\'m afraid I can\'t come on Thursday. Is Friday possible?', 'Malheureusement, je ne peux pas venir jeudi. Vendredi, c\'est possible ?'],
      ['A', 'Yes. Friday at quarter past eleven?', 'Oui. Vendredi à onze heures et quart ?'],
      ['B', 'That\'s perfect. Thank you.', 'C\'est parfait. Merci.'],
      ['A', 'Can I have your name, please?', 'Votre nom, s\'il vous plaît ?'],
      ['B', 'Yes, it\'s Paul Martin.', 'Oui, c\'est Paul Martin.']
    ],
    questions: [
      { q: 'Pourquoi Paul veut-il voir le médecin ?', choices: ['Il a de la fièvre depuis deux jours', 'Il tousse depuis deux semaines', 'Il a mal au dos'], answer: 1, at: 3,
        why: { 0: 'De la fièvre se dirait « a temperature ». Paul dit « I\'ve had **a cough** for two **weeks** ».', 2: 'Mal au dos se dirait « my back hurts ». Paul parle d\'**a cough** : une toux.' },
        explain: '« I\'ve had **a cough for two weeks** » : je tousse depuis deux semaines. Present perfect + **for** + durée = depuis.' },
      { q: 'Quel jour aura lieu le rendez-vous ?', choices: ['Jeudi', 'Mardi', 'Vendredi'], answer: 2, at: 6,
        why: { 0: 'Jeudi (Thursday), Paul ne peut pas : « I\'m afraid I can\'t come on Thursday ».', 1: 'Mardi se dirait « Tuesday ». On entend « Thursday », puis « **Friday** ».' },
        explain: 'Paul refuse jeudi (« I\'m afraid I can\'t come on Thursday ») et demande « Is **Friday** possible? ». La secrétaire répond « Yes. **Friday** at quarter past eleven? ».' },
      { q: 'À quelle heure est le rendez-vous ?', choices: ['9 h 10', '11 h 15', '11 h 45'], answer: 1, at: 6,
        why: { 0: '9 h 10 (ten past nine), c\'était l\'heure proposée jeudi, que Paul a refusée.', 2: '11 h 45 se dirait « quarter to twelve ». La secrétaire dit « **quarter past eleven** ».' },
        explain: '« Friday at **quarter past eleven** » : vendredi à onze heures et quart (11 h 15). **quarter past** = et quart.' }
    ]
  },
  {
    id: 'en16-d-02', ch: 'en16', level: 2, sec: 'en16-s-symptomes',
    title: 'Dans le cabinet du médecin',
    context: 'Mr Carter ne se sent pas bien. Il est dans le cabinet du docteur Hughes.',
    speakers: { A: { name: 'Dr Hughes', g: 'f' }, B: { name: 'Mr Carter', g: 'm' } },
    lines: [
      ['A', 'Good morning, Mr Carter. What\'s the matter?', 'Bonjour, monsieur Carter. Qu\'est-ce qui ne va pas ?'],
      ['B', 'I\'ve got a sore throat and a temperature.', 'J\'ai mal à la gorge et j\'ai de la fièvre.'],
      ['A', 'How long have you had a temperature?', 'Depuis combien de temps avez-vous de la fièvre ?'],
      ['B', 'For three days. And I can\'t sleep at night.', 'Depuis trois jours. Et je n\'arrive pas à dormir la nuit.'],
      ['A', 'Can I look at your throat? Yes, it\'s very red.', 'Je peux regarder votre gorge ? Oui, elle est très rouge.'],
      ['B', 'Is it serious?', 'C\'est grave ?'],
      ['A', 'No, it\'s just an infection. You have to take antibiotics.', 'Non, c\'est juste une infection. Vous devez prendre des antibiotiques.'],
      ['B', 'How often do I have to take them?', 'Combien de fois dois-je les prendre ?'],
      ['A', 'Twice a day, for a week. And you should rest.', 'Deux fois par jour, pendant une semaine. Et vous devriez vous reposer.'],
      ['B', 'Thank you, doctor.', 'Merci, docteur.']
    ],
    questions: [
      { q: 'Depuis combien de temps Mr Carter a-t-il de la fièvre ?', choices: ['Deux jours', 'Une semaine', 'Trois jours'], answer: 2, at: 3,
        why: { 0: 'Deux se dirait « two ». Il répond « For **three** days ».', 1: '« For a week », c\'est la durée du traitement, pas de la fièvre.' },
        explain: 'À « **How long have you had** a temperature? », il répond « **For three days** » : depuis trois jours.' },
      { q: 'Est-ce grave ?', choices: ['Non, c\'est juste une infection', 'Oui, il doit aller à l\'hôpital', 'Le médecin ne sait pas'], answer: 0, at: 6,
        why: { 1: 'L\'hôpital (hospital) n\'est pas mentionné. Le médecin dit « **No**, it\'s just an infection ».', 2: 'Le médecin sait : « it\'s **just an infection** ».' },
        explain: 'À « Is it **serious**? » (c\'est grave ?), le médecin répond « **No, it\'s just an infection** » : non, c\'est juste une infection.' },
      { q: 'Combien de fois par jour doit-il prendre les antibiotiques ?', choices: ['Une fois', 'Trois fois', 'Deux fois'], answer: 2, at: 8,
        why: { 0: 'Une fois se dirait « once a day ». Le médecin dit « **twice** a day ».', 1: 'Trois fois se dirait « three times a day ». Le médecin dit « **twice** » : deux fois.' },
        explain: '« **Twice a day**, for a week » : deux fois par jour, pendant une semaine. Et « you **should** rest » : vous devriez vous reposer (un conseil).' }
    ]
  },
  {
    id: 'en16-d-03', ch: 'en16', level: 3, sec: 'en16-s-pharmacie',
    title: 'À la pharmacie',
    context: 'Emily est en vacances en Angleterre. Elle tousse et entre dans une pharmacie.',
    speakers: { A: { name: 'Emily', g: 'f' }, B: { name: 'Mr Khan', g: 'm' } },
    lines: [
      ['B', 'Hello. Can I help you?', 'Bonjour. Je peux vous aider ?'],
      ['A', 'Can I have some antibiotics, please? I\'ve got a bad cough.', 'Je peux avoir des antibiotiques, s\'il vous plaît ? J\'ai une mauvaise toux.'],
      ['B', 'I\'m afraid you need a prescription for antibiotics.', 'Malheureusement, il faut une ordonnance pour les antibiotiques.'],
      ['A', 'Oh. I haven\'t got one. I\'m on holiday here.', 'Ah. Je n\'en ai pas. Je suis ici en vacances.'],
      ['B', 'How long have you had the cough?', 'Depuis combien de temps toussez-vous ?'],
      ['A', 'For four days. And I\'m very tired.', 'Depuis quatre jours. Et je suis très fatiguée.'],
      ['B', 'Try this cough syrup. Take it three times a day.', 'Essayez ce sirop pour la toux. Prenez-le trois fois par jour.'],
      ['A', 'Do I have to take it with food?', 'Est-ce que je dois le prendre en mangeant ?'],
      ['B', 'No, you don\'t have to. But you mustn\'t drink alcohol with it.', 'Non, vous n\'êtes pas obligée. Mais vous ne devez pas boire d\'alcool avec.'],
      ['A', 'OK, I\'ll take it. Thank you very much.', 'D\'accord, je le prends. Merci beaucoup.']
    ],
    questions: [
      { q: 'Pourquoi le pharmacien ne donne-t-il pas d\'antibiotiques à Emily ?', choices: ['Il n\'en a plus', 'Il faut une ordonnance', 'Elle est allergique'], answer: 1, at: 2,
        why: { 0: 'Il ne dit pas qu\'il n\'en a plus. Il dit « you need a **prescription** ».', 2: 'Les allergies (allergic) ne sont pas mentionnées. Il dit « you need a **prescription** ».' },
        explain: '« **I\'m afraid** you need a **prescription** for antibiotics » : malheureusement, il faut une ordonnance pour les antibiotiques. **I\'m afraid** annonce un refus poli.' },
      { q: 'Depuis combien de temps Emily tousse-t-elle ?', choices: ['Quatorze jours', 'Quatre jours', 'Trois jours'], answer: 1, at: 5,
        why: { 0: '14 se dirait « fourteen » (on appuie sur la fin). Emily dit « **four** days ».', 2: '« three », c\'est le nombre de fois par jour pour le sirop. Emily dit « For **four** days ».' },
        explain: '« How long have you had the cough? » — « **For four days** » : depuis quatre jours.' },
      { q: 'Qu\'est-ce qu\'Emily ne doit pas faire avec ce sirop ?', choices: ['Le prendre sans manger', 'Le prendre le soir', 'Boire de l\'alcool'], answer: 2, at: 8,
        why: { 0: '« **you don\'t have to** » = elle n\'est pas obligée de le prendre en mangeant : sans manger, c\'est permis.', 1: 'Le soir (in the evening) n\'est pas mentionné.' },
        explain: '« No, **you don\'t have to** » (pas obligée de le prendre en mangeant). « But **you mustn\'t** drink alcohol with it » : mais vous ne devez pas boire d\'alcool avec. **mustn\'t** = interdit ; **don\'t have to** = pas obligé.' }
    ]
  }
]);
