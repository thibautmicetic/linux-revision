/* Anglais — chapitre 1 : Premiers pas (saluer, la politesse, se présenter, les pronoms, le verbe to be) */
(function () {
  const W = [
    // Saluer
    { en: 'hello', fr: 'bonjour (à toute heure)', pos: 'x', cat: 'Saluer', alt: ['hi'], ex: 'Hello, I\'m Anne.', exFr: 'Bonjour, je suis Anne.', level: 1, note: 'Le h se prononce : on souffle un peu, « hhello ».' },
    { en: 'hi', fr: 'salut', pos: 'x', cat: 'Saluer', alt: ['hello'], ex: 'Hi, Tom! How are you?', exFr: 'Salut, Tom ! Comment ça va ?', level: 1, note: 'Familier : entre amis, en famille. Se prononce « haï ».' },
    { en: 'good morning', fr: 'bonjour (le matin)', pos: 'x', cat: 'Saluer', ex: 'Good morning, Mr Brown.', exFr: 'Bonjour, monsieur Brown.', level: 1 },
    { en: 'good afternoon', fr: 'bonjour (l\'après-midi)', pos: 'x', cat: 'Saluer', ex: 'Good afternoon, Mrs Smith.', exFr: 'Bonjour, madame Smith.', level: 1 },
    { en: 'good evening', fr: 'bonsoir', pos: 'x', cat: 'Saluer', ex: 'Good evening! I\'m Paul.', exFr: 'Bonsoir ! Je suis Paul.', level: 1, note: 'Pour dire bonsoir en arrivant.' },
    { en: 'good night', fr: 'bonne nuit', pos: 'x', cat: 'Saluer', ex: 'Good night, Emma!', exFr: 'Bonne nuit, Emma !', level: 1, note: 'Seulement en partant le soir ou avant d\'aller dormir : ce n\'est pas « bonsoir ».' },
    { en: 'goodbye', fr: 'au revoir', pos: 'x', cat: 'Saluer', alt: ['bye', 'bye-bye'], ex: 'Goodbye, see you soon!', exFr: 'Au revoir, à bientôt !', level: 1, note: 'Plus familier : bye.' },
    // Politesse
    { en: 'please', fr: 's\'il vous plaît, s\'il te plaît', pos: 'x', cat: 'Politesse', ex: 'A coffee, please.', exFr: 'Un café, s\'il vous plaît.', level: 1 },
    { en: 'thank you', fr: 'merci', pos: 'x', cat: 'Politesse', alt: ['thanks'], ex: 'Thank you very much!', exFr: 'Merci beaucoup !', level: 1, note: 'Le th se prononce la langue entre les dents. Plus familier : thanks.' },
    { en: 'you\'re welcome', fr: 'de rien, je vous en prie', pos: 'x', cat: 'Politesse', alt: ['no problem'], ex: 'Thank you! — You\'re welcome.', exFr: 'Merci ! — De rien.', level: 1, note: 'Pour répondre à un merci (jamais « please »).' },
    { en: 'sorry', fr: 'pardon, désolé', pos: 'x', cat: 'Politesse', ex: 'Sorry, I\'m not English.', exFr: 'Pardon, je ne suis pas anglais.', level: 1, note: 'Pour s\'excuser. Sorry? avec la voix qui monte = Pardon ? (pour faire répéter).' },
    { en: 'excuse me', fr: 'excusez-moi', pos: 'x', cat: 'Politesse', ex: 'Excuse me, are you Mr Smith?', exFr: 'Excusez-moi, êtes-vous monsieur Smith ?', level: 1, note: 'Avant de déranger quelqu\'un : pour l\'aborder, lui poser une question ou passer.' },
    { en: 'yes', fr: 'oui', pos: 'x', cat: 'Politesse', ex: 'Are you tired? — Yes, I am.', exFr: 'Tu es fatigué ? — Oui.', level: 1 },
    { en: 'no', fr: 'non', pos: 'x', cat: 'Politesse', ex: 'No, thank you.', exFr: 'Non, merci.', level: 1 },
    // Pronoms
    { en: 'I', fr: 'je', pos: 'pron', cat: 'Les pronoms', ex: 'I am French.', exFr: 'Je suis français.', level: 1, note: 'Toujours une majuscule, même au milieu d\'une phrase. Se prononce « aï ».' },
    { en: 'you', fr: 'tu, vous', pos: 'pron', cat: 'Les pronoms', ex: 'You are my friend.', exFr: 'Tu es mon ami.', level: 1, note: 'Un seul mot pour tu, pour vous (politesse) et pour vous (plusieurs personnes).' },
    { en: 'he', fr: 'il (un homme, un garçon)', pos: 'pron', cat: 'Les pronoms', ex: 'He is a doctor.', exFr: 'Il est médecin.', level: 1, note: 'Se prononce « hi », en soufflant le h.' },
    { en: 'she', fr: 'elle (une femme, une fille)', pos: 'pron', cat: 'Les pronoms', ex: 'She is Italian.', exFr: 'Elle est italienne.', level: 1, note: 'Se prononce « chi ».' },
    { en: 'it', fr: 'il, elle (une chose, un animal)', pos: 'pron', cat: 'Les pronoms', ex: 'The house is big. It is very nice.', exFr: 'La maison est grande. Elle est très jolie.', level: 1, note: 'Les choses n\'ont pas de genre en anglais : toujours it.' },
    { en: 'we', fr: 'nous', pos: 'pron', cat: 'Les pronoms', ex: 'We are friends.', exFr: 'Nous sommes amis.', level: 1 },
    { en: 'they', fr: 'ils, elles', pos: 'pron', cat: 'Les pronoms', ex: 'They are English.', exFr: 'Ils sont anglais.', level: 1, note: 'Pour des personnes ou des choses, au masculin comme au féminin.' },
    // Les personnes
    { en: 'man', fr: 'un homme', pos: 'n', cat: 'Les personnes', ex: 'The man is a teacher.', exFr: 'L\'homme est professeur.', level: 1, note: 'Pluriel irrégulier : one man, two men.' },
    { en: 'woman', fr: 'une femme', pos: 'n', cat: 'Les personnes', ex: 'The woman is a nurse.', exFr: 'La femme est infirmière.', level: 1, note: 'Pluriel irrégulier : women, prononcé « wi-min ».' },
    { en: 'boy', fr: 'un garçon', pos: 'n', cat: 'Les personnes', ex: 'The boy is happy.', exFr: 'Le garçon est content.', level: 1 },
    { en: 'girl', fr: 'une fille', pos: 'n', cat: 'Les personnes', ex: 'The girl is from Spain.', exFr: 'La fille vient d\'Espagne.', level: 1, note: 'Une fille, une jeune fille. Pour « ma fille » (mon enfant), on dit my daughter.' },
    { en: 'friend', fr: 'un ami, une amie', pos: 'n', cat: 'Les personnes', ex: 'Paul is my friend.', exFr: 'Paul est mon ami.', level: 1, note: 'Se prononce « frènd ».' },
    { en: 'name', fr: 'le nom, le prénom', pos: 'n', cat: 'Les personnes', ex: 'My name is Paul.', exFr: 'Je m\'appelle Paul.', level: 1, note: 'My name is… = je m\'appelle… (mot à mot : mon nom est…).' },
    // Pays
    { en: 'France', fr: 'la France', pos: 'n', cat: 'Pays', ex: 'I\'m from France.', exFr: 'Je viens de France.', level: 1 },
    { en: 'England', fr: 'l\'Angleterre', pos: 'n', cat: 'Pays', ex: 'London is in England.', exFr: 'Londres est en Angleterre.', level: 1 },
    { en: 'Spain', fr: 'l\'Espagne', pos: 'n', cat: 'Pays', ex: 'Madrid is in Spain.', exFr: 'Madrid est en Espagne.', level: 2 },
    { en: 'Italy', fr: 'l\'Italie', pos: 'n', cat: 'Pays', ex: 'Rome is in Italy.', exFr: 'Rome est en Italie.', level: 2 },
    { en: 'Germany', fr: 'l\'Allemagne', pos: 'n', cat: 'Pays', ex: 'Berlin is in Germany.', exFr: 'Berlin est en Allemagne.', level: 2, note: 'Ne ressemble pas au français : Germany = l\'Allemagne, German = allemand.' },
    { en: 'the United States', fr: 'les États-Unis', pos: 'x', cat: 'Pays', alt: ['the USA', 'the US', 'the United States of America'], ex: 'She\'s from the United States.', exFr: 'Elle vient des États-Unis.', level: 2, note: 'Toujours avec the. En abrégé : the USA.' },
    // Nationalités
    { en: 'French', fr: 'français, française', pos: 'adj', cat: 'Nationalités', ex: 'We are French.', exFr: 'Nous sommes français.', level: 1, note: 'Toujours une majuscule. C\'est aussi le nom de la langue : le français.' },
    { en: 'English', fr: 'anglais, anglaise', pos: 'adj', cat: 'Nationalités', ex: 'Is he English?', exFr: 'Est-il anglais ?', level: 1, note: 'Toujours une majuscule. C\'est aussi le nom de la langue : l\'anglais.' },
    { en: 'British', fr: 'britannique', pos: 'adj', cat: 'Nationalités', ex: 'They are British.', exFr: 'Ils sont britanniques.', level: 2, note: 'Du Royaume-Uni (the UK) : Angleterre, Écosse, pays de Galles et Irlande du Nord.' },
    { en: 'American', fr: 'américain, américaine', pos: 'adj', cat: 'Nationalités', ex: 'Is she American?', exFr: 'Est-elle américaine ?', level: 2 },
    { en: 'Spanish', fr: 'espagnol, espagnole', pos: 'adj', cat: 'Nationalités', ex: 'My friend is Spanish.', exFr: 'Mon ami est espagnol.', level: 2 },
    { en: 'Italian', fr: 'italien, italienne', pos: 'adj', cat: 'Nationalités', ex: 'The waiter is Italian.', exFr: 'Le serveur est italien.', level: 2 },
    { en: 'German', fr: 'allemand, allemande', pos: 'adj', cat: 'Nationalités', ex: 'He isn\'t German.', exFr: 'Il n\'est pas allemand.', level: 2 },
    // Métiers
    { en: 'teacher', fr: 'un professeur, une professeure', pos: 'n', cat: 'Métiers', ex: 'I\'m a teacher.', exFr: 'Je suis professeur.', level: 1 },
    { en: 'doctor', fr: 'un médecin', pos: 'n', cat: 'Métiers', ex: 'She\'s a doctor.', exFr: 'Elle est médecin.', level: 1, note: 'doctor = médecin (et aussi « docteur »).' },
    { en: 'nurse', fr: 'un infirmier, une infirmière', pos: 'n', cat: 'Métiers', ex: 'He\'s a nurse.', exFr: 'Il est infirmier.', level: 2 },
    { en: 'engineer', fr: 'un ingénieur, une ingénieure', pos: 'n', cat: 'Métiers', ex: 'She\'s an engineer.', exFr: 'Elle est ingénieure.', level: 2, note: 'an engineer : an devant un son de voyelle.' },
    { en: 'retired', fr: 'retraité, à la retraite', pos: 'adj', cat: 'Métiers', ex: 'I\'m retired.', exFr: 'Je suis à la retraite.', level: 1, note: 'C\'est un adjectif : pas de a devant (I\'m retired).' },
    { en: 'job', fr: 'le métier, le travail', pos: 'n', cat: 'Métiers', ex: 'What\'s your job?', exFr: 'Quel est votre métier ?', level: 1 },
    // Petits mots utiles
    { en: 'from', fr: 'de (pour l\'origine)', pos: 'prep', cat: 'Petits mots utiles', ex: 'I\'m from Paris.', exFr: 'Je viens de Paris.', level: 1, note: 'I\'m from… = je viens de… (mot à mot : je suis de…).' },
    { en: 'very', fr: 'très', pos: 'adv', cat: 'Petits mots utiles', ex: 'I\'m very happy.', exFr: 'Je suis très content.', level: 1 },
    { en: 'happy', fr: 'content, heureux', pos: 'adj', cat: 'Petits mots utiles', ex: 'We are very happy.', exFr: 'Nous sommes très heureux.', level: 1 },
    { en: 'tired', fr: 'fatigué', pos: 'adj', cat: 'Petits mots utiles', ex: 'I\'m tired.', exFr: 'Je suis fatigué.', level: 1, note: 'Ne pas confondre tired (fatigué) et retired (à la retraite) !' }
  ];
  const CATS = ['Saluer', 'Politesse', 'Les pronoms', 'Les personnes', 'Pays', 'Nationalités', 'Métiers', 'Petits mots utiles'];
  const vocab = CATS.map((c) => '<h3>' + c + '</h3><table class="tbl"><tr><th>Anglais</th><th>Français</th></tr>' +
    W.filter((w) => w.cat === c).map((w) => '<tr><td><span class="say">' + w.en + '</span></td><td>' + w.fr + '</td></tr>').join('') + '</table>').join('');

  APP.registerChapter({
    id: 'en1', subject: 'anglais', num: 1,
    title: 'Premiers pas', subtitle: 'saluer, se présenter, être poli · le verbe to be (am, is, are)',
    vocabSec: 'en1-s-vocab',
    sections: [
      {
        id: 'en1-s-saluer', title: 'Dire bonjour et au revoir',
        html: `
<p>En anglais, on ne dit pas bonjour de la même façon le matin, l'après-midi ou le soir. Mais un mot marche toujours : <span class="say">hello</span>.</p>
<h3>Pour dire bonjour</h3>
<table class="tbl"><tr><th>Anglais</th><th>Français</th><th>Quand ?</th></tr>
<tr><td><span class="say">Hello</span></td><td>Bonjour</td><td>À toute heure, avec tout le monde</td></tr>
<tr><td><span class="say">Hi</span></td><td>Salut</td><td>Entre amis, en famille</td></tr>
<tr><td><span class="say">Good morning</span></td><td>Bonjour</td><td>Le matin (jusqu'à midi)</td></tr>
<tr><td><span class="say">Good afternoon</span></td><td>Bonjour</td><td>L'après-midi</td></tr>
<tr><td><span class="say">Good evening</span></td><td>Bonsoir</td><td>Le soir, en arrivant</td></tr></table>
<h3>Pour dire au revoir</h3>
<table class="tbl"><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">Goodbye</span></td><td>Au revoir</td></tr>
<tr><td><span class="say">Bye</span></td><td>Salut, au revoir (familier)</td></tr>
<tr><td><span class="say">See you soon!</span></td><td>À bientôt !</td></tr>
<tr><td><span class="say">See you later!</span></td><td>À plus tard ! À tout à l'heure !</td></tr>
<tr><td><span class="say">Have a nice day!</span></td><td>Bonne journée !</td></tr>
<tr><td><span class="say">Good night</span></td><td>Bonne nuit (en partant le soir, ou avant d'aller dormir)</td></tr></table>
<h3>Demander des nouvelles</h3>
<p><span class="say">How are you?</span> — Comment allez-vous ? / Comment vas-tu ?</p>
<ul>
<li><span class="say">I'm fine, thank you.</span> — Je vais bien, merci.</li>
<li><span class="say">Very well, thanks.</span> — Très bien, merci.</li>
<li><span class="say">Not bad.</span> — Pas mal.</li>
</ul>
<p>Puis on renvoie la question : <span class="say">And you?</span> — Et vous ? / Et toi ?</p>
<h3>La première rencontre</h3>
<p><span class="say">Nice to meet you.</span> — Enchanté (ravi de vous rencontrer).<br>Réponse : <span class="say">Nice to meet you too.</span> — Moi aussi, enchanté.</p>
<h3>Petit dialogue</h3>
<p><span class="say">Hello, Tom! How are you?</span> — Bonjour, Tom ! Comment vas-tu ?<br>
<span class="say">I'm fine, thanks. And you?</span> — Bien, merci. Et toi ?<br>
<span class="say">Very well, thank you.</span> — Très bien, merci.<br>
<span class="say">Goodbye, Tom! See you soon!</span> — Au revoir, Tom ! À bientôt !</p>
<div class="callout key"><b>À retenir</b> <span class="say">Hello</span> marche à toute heure. Le matin : <span class="say">good morning</span> ; l'après-midi : <span class="say">good afternoon</span> ; le soir, en arrivant : <span class="say">good evening</span>. Pour partir : <span class="say">goodbye</span>.</div>
<div class="callout warn"><b>Piège : good night</b> <span class="say">Good night</span> ne veut pas dire « bonsoir » mais « bonne nuit » : on le dit seulement en partant le soir ou avant d'aller se coucher. Pour dire bonsoir en arrivant : <span class="say">Good evening</span>.</div>
<div class="callout tip"><b>Astuce</b> <span class="say">How are you?</span> est surtout une formule de politesse : on répond court (<span class="say">Fine, thanks.</span>) et on sourit. Et pense à prononcer le <b>h</b> de <span class="say">hello</span> : on souffle un peu, comme pour réchauffer ses mains.</div>`
      },
      {
        id: 'en1-s-politesse', title: 'S\'il vous plaît, merci, pardon',
        html: `
<p>Les Anglais disent très souvent <span class="say">please</span>, <span class="say">thank you</span> et <span class="say">sorry</span>. Une demande sans <span class="say">please</span> paraît vite impolie.</p>
<table class="tbl"><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">please</span></td><td>s'il vous plaît, s'il te plaît</td></tr>
<tr><td><span class="say">thank you</span> · <span class="say">thanks</span></td><td>merci · merci (plus familier)</td></tr>
<tr><td><span class="say">thank you very much</span></td><td>merci beaucoup</td></tr>
<tr><td><span class="say">you're welcome</span></td><td>de rien, je vous en prie</td></tr>
<tr><td><span class="say">sorry</span></td><td>pardon, désolé</td></tr>
<tr><td><span class="say">excuse me</span></td><td>excusez-moi</td></tr>
<tr><td><span class="say">yes</span> · <span class="say">no</span></td><td>oui · non</td></tr></table>
<h3>Exemples</h3>
<p><span class="say">A coffee, please.</span> — Un café, s'il vous plaît.<br>
<span class="say">Yes, please.</span> — Oui, volontiers (oui, s'il vous plaît).<br>
<span class="say">No, thank you.</span> — Non, merci.<br>
<span class="say">Thank you very much!</span> — <span class="say">You're welcome.</span> — Merci beaucoup ! — De rien.</p>
<h3>Excuse me ou sorry ?</h3>
<ul>
<li><span class="say">Excuse me</span> : <b>avant</b> de déranger quelqu'un, pour l'aborder, lui poser une question ou passer.<br><span class="say">Excuse me, are you Mrs Brown?</span> — Excusez-moi, êtes-vous madame Brown ?</li>
<li><span class="say">Sorry</span> : <b>après</b> une petite gêne, pour s'excuser.<br><span class="say">Oh, sorry!</span> — Oh, pardon ! · <span class="say">I'm very sorry.</span> — Je suis vraiment désolé.</li>
</ul>
<h3>Quand on ne comprend pas</h3>
<p>Ces phrases sont précieuses quand on débute. Apprends-les telles quelles, comme des formules toutes faites :</p>
<ul>
<li><span class="say">Sorry?</span> — Pardon ? (avec la voix qui monte, pour faire répéter)</li>
<li><span class="say">I don't understand.</span> — Je ne comprends pas.</li>
<li><span class="say">Can you repeat that, please?</span> — Pouvez-vous répéter, s'il vous plaît ?</li>
<li><span class="say">More slowly, please.</span> — Plus lentement, s'il vous plaît.</li>
<li><span class="say">I'm a beginner.</span> — Je suis débutant (débutante).</li>
<li><span class="say">My English isn't very good.</span> — Mon anglais n'est pas très bon.</li>
</ul>
<div class="callout key"><b>À retenir</b> Pour demander : <span class="say">please</span>. Pour remercier : <span class="say">thank you</span>. Pour répondre à un merci : <span class="say">you're welcome</span>. Pour aborder quelqu'un : <span class="say">excuse me</span>. Pour s'excuser : <span class="say">sorry</span>.</div>
<div class="callout warn"><b>Piège</b> À <span class="say">Thank you!</span>, on ne répond pas « please » (ça veut seulement dire s'il vous plaît) : on répond <span class="say">You're welcome.</span> Et <span class="say">welcome</span> tout seul veut dire « bienvenue ».</div>
<div class="callout info"><b>Bon à savoir</b> Dans <span class="say">I don't understand</span> et <span class="say">Can you repeat that?</span>, les petits mots <span class="say">don't</span> et <span class="say">can</span> seront expliqués dans un prochain chapitre. Pour l'instant, retiens simplement les phrases.</div>`
      },
      {
        id: 'en1-s-pronoms', title: 'Je, tu, il… : les pronoms',
        html: `
<p>Les <b>pronoms personnels sujets</b> sont les petits mots qui disent <b>qui</b> fait l'action ou de qui on parle : je, tu, il… En anglais, il y en a 7.</p>
<table class="tbl"><tr><th>Anglais</th><th>Français</th><th>Pour qui ?</th></tr>
<tr><td><span class="say">I</span></td><td>je</td><td>moi</td></tr>
<tr><td><span class="say">you</span></td><td>tu, vous</td><td>la ou les personnes à qui je parle</td></tr>
<tr><td><span class="say">he</span></td><td>il</td><td>un homme, un garçon</td></tr>
<tr><td><span class="say">she</span></td><td>elle</td><td>une femme, une fille</td></tr>
<tr><td><span class="say">it</span></td><td>il, elle</td><td>une chose, un animal</td></tr>
<tr><td><span class="say">we</span></td><td>nous</td><td>moi + d'autres personnes</td></tr>
<tr><td><span class="say">they</span></td><td>ils, elles</td><td>plusieurs personnes ou plusieurs choses</td></tr></table>
<h3>I : toujours une majuscule</h3>
<p><span class="say">I</span> (je) s'écrit toujours avec une majuscule, même au milieu d'une phrase : <span class="say">Yes, I am.</span> Il se prononce « aï ».</p>
<h3>You : tu ET vous</h3>
<p>L'anglais n'a qu'un seul mot pour tutoyer et pour vouvoyer, pour une personne comme pour plusieurs :</p>
<p><span class="say">You are my friend.</span> — Tu es mon ami.<br>
<span class="say">You are very nice, Mrs Brown.</span> — Vous êtes très gentille, madame Brown.<br>
<span class="say">You are my friends.</span> — Vous êtes mes amis.</p>
<h3>He, she ou it ?</h3>
<p><span class="say">Tom is English. He is from London.</span> — Tom est anglais. Il vient de Londres.<br>
<span class="say">Anne is a nurse. She is very nice.</span> — Anne est infirmière. Elle est très gentille.<br>
<span class="say">The house is big. It is very nice.</span> — La maison est grande. Elle est très jolie.</p>
<h3>They : ils ET elles</h3>
<p><span class="say">Tom and Anne are friends. They are from Paris.</span> — Tom et Anne sont amis. Ils viennent de Paris.</p>
<div class="callout key"><b>À retenir</b> <span class="say">I</span> = je · <span class="say">you</span> = tu ou vous · <span class="say">he</span> = il (un homme) · <span class="say">she</span> = elle (une femme) · <span class="say">it</span> = il ou elle (une chose, un animal) · <span class="say">we</span> = nous · <span class="say">they</span> = ils ou elles.</div>
<div class="callout warn"><b>Piège</b> En français, une maison est « elle » et un téléphone est « il ». En anglais, les choses n'ont pas de genre : c'est toujours <span class="say">it</span>. Ne dis pas « she » pour une maison ! (Pour son propre chien ou son chat, on dit souvent <span class="say">he</span> ou <span class="say">she</span>.)</div>
<div class="callout tip"><b>Prononciation</b> <span class="say">he</span> se dit « hi » (en soufflant le h), <span class="say">she</span> se dit « chi », <span class="say">they</span> se dit « zéï » avec le bout de la langue entre les dents.</div>`
      },
      {
        id: 'en1-s-be', title: 'Le verbe to be (être)',
        html: `
<p><span class="say">to be</span> veut dire <b>être</b>. C'est le verbe le plus important de l'anglais. (Le petit mot <span class="say">to</span> devant un verbe indique sa forme de base, l'<b>infinitif</b> : to be = être, comme on dirait « le verbe être ».)</p>
<p>Bonne nouvelle : au présent, il n'a que <b>3 formes</b> : <span class="say">am</span>, <span class="say">is</span> et <span class="say">are</span>.</p>
<table class="tbl"><tr><th>Forme complète</th><th>Forme courte</th><th>Français</th></tr>
<tr><td><span class="say">I am</span></td><td><span class="say">I'm</span></td><td>je suis</td></tr>
<tr><td><span class="say">you are</span></td><td><span class="say">you're</span></td><td>tu es, vous êtes</td></tr>
<tr><td><span class="say">he is</span></td><td><span class="say">he's</span></td><td>il est</td></tr>
<tr><td><span class="say">she is</span></td><td><span class="say">she's</span></td><td>elle est</td></tr>
<tr><td><span class="say">it is</span></td><td><span class="say">it's</span></td><td>il/elle est, c'est</td></tr>
<tr><td><span class="say">we are</span></td><td><span class="say">we're</span></td><td>nous sommes</td></tr>
<tr><td><span class="say">they are</span></td><td><span class="say">they're</span></td><td>ils/elles sont</td></tr></table>
<h3>Les formes courtes</h3>
<p>À l'oral, on utilise presque toujours la <b>forme courte</b> (on dit aussi « contraction »). L'apostrophe (') remplace la lettre qui disparaît : I <b>a</b>m → I'm.</p>
<p><span class="say">I'm French.</span> — Je suis français.<br>
<span class="say">You're very nice.</span> — Tu es très gentil.<br>
<span class="say">She's a nurse.</span> — Elle est infirmière.<br>
<span class="say">It's a good job.</span> — C'est un bon métier.<br>
<span class="say">We're friends.</span> — Nous sommes amis.<br>
<span class="say">They're English.</span> — Ils sont anglais.</p>
<h3>Avec un prénom ou un nom</h3>
<p>Une seule personne ou une seule chose → comme he, she, it : <span class="say">is</span>. Plusieurs → comme they : <span class="say">are</span>.</p>
<p><span class="say">Paul is English.</span> — Paul est anglais.<br>
<span class="say">The coffee is very good.</span> — Le café est très bon.<br>
<span class="say">Anne and Tom are friends.</span> — Anne et Tom sont amis.</p>
<div class="callout key"><b>À retenir</b> <span class="say">I am</span> · <span class="say">he is</span>, <span class="say">she is</span>, <span class="say">it is</span> · <span class="say">you are</span>, <span class="say">we are</span>, <span class="say">they are</span>.</div>
<div class="callout warn"><b>Pièges</b> <span class="say">am</span> ne va qu'avec I. Deux personnes (Anne and Tom, Paul and I) = pluriel → <span class="say">are</span>. Et le verbe ne disparaît jamais : on ne dit pas « She nurse » mais <span class="say">She's a nurse.</span></div>
<div class="callout tip"><b>Astuce</b> Récite à voix haute, comme une comptine : <span class="say">I am, you are, he is, she is, it is, we are, they are.</span></div>`
      },
      {
        id: 'en1-s-negatif', title: 'Dire « ne… pas » avec to be',
        html: `
<p>Pour dire « ne… pas », c'est très simple : on ajoute <b><span class="say">not</span></b> juste <b>après</b> <span class="say">am</span>, <span class="say">is</span> ou <span class="say">are</span>. Il n'y a pas de « ne ».</p>
<table class="tbl"><tr><th>Forme complète</th><th>Formes courtes</th><th>Français</th></tr>
<tr><td><span class="say">I am not</span></td><td><span class="say">I'm not</span></td><td>je ne suis pas</td></tr>
<tr><td><span class="say">you are not</span></td><td><span class="say">you aren't</span> · <span class="say">you're not</span></td><td>tu n'es pas, vous n'êtes pas</td></tr>
<tr><td><span class="say">he is not</span></td><td><span class="say">he isn't</span> · <span class="say">he's not</span></td><td>il n'est pas</td></tr>
<tr><td><span class="say">she is not</span></td><td><span class="say">she isn't</span> · <span class="say">she's not</span></td><td>elle n'est pas</td></tr>
<tr><td><span class="say">it is not</span></td><td><span class="say">it isn't</span> · <span class="say">it's not</span></td><td>il/elle n'est pas, ce n'est pas</td></tr>
<tr><td><span class="say">we are not</span></td><td><span class="say">we aren't</span> · <span class="say">we're not</span></td><td>nous ne sommes pas</td></tr>
<tr><td><span class="say">they are not</span></td><td><span class="say">they aren't</span> · <span class="say">they're not</span></td><td>ils/elles ne sont pas</td></tr></table>
<p>Les deux formes courtes veulent dire exactement la même chose : choisis celle que tu préfères.</p>
<h3>Exemples</h3>
<p><span class="say">I'm not tired.</span> — Je ne suis pas fatigué.<br>
<span class="say">She isn't English, she's American.</span> — Elle n'est pas anglaise, elle est américaine.<br>
<span class="say">We aren't from London.</span> — Nous ne sommes pas de Londres.<br>
<span class="say">It isn't far.</span> — Ce n'est pas loin.<br>
<span class="say">My English isn't very good.</span> — Mon anglais n'est pas très bon.</p>
<div class="callout key"><b>À retenir</b> Négation = <b>am / is / are + not</b>. Formes courtes : <span class="say">I'm not</span>, <span class="say">isn't</span>, <span class="say">aren't</span>.</div>
<div class="callout warn"><b>Pièges</b> « I amn't » n'existe pas : avec I, la seule forme courte est <span class="say">I'm not</span>. Le mot not se place <b>après</b> le verbe : <span class="say">He isn't French</span> (jamais « He not is French »). Et ne confonds pas <span class="say">no</span> (non, pour répondre) et <span class="say">not</span> (pas) : « I'm no tired » est faux.</div>
<div class="callout tip"><b>Prononciation</b> <span class="say">isn't</span> se dit à peu près « iz-ent », <span class="say">aren't</span> se dit « arnt ».</div>`
      },
      {
        id: 'en1-s-questions', title: 'Poser une question avec to be',
        html: `
<p>Pour poser une question, on <b>inverse</b> : le verbe (<span class="say">am</span>, <span class="say">is</span>, <span class="say">are</span>) passe <b>devant</b> le sujet. C'est comme en français soigné : « Vous êtes… » → « Êtes-vous… ? »</p>
<table class="tbl"><tr><th>Affirmation</th><th>Question</th></tr>
<tr><td><span class="say">You are English.</span></td><td><span class="say">Are you English?</span><br>Êtes-vous anglais ?</td></tr>
<tr><td><span class="say">He is a doctor.</span></td><td><span class="say">Is he a doctor?</span><br>Est-il médecin ?</td></tr>
<tr><td><span class="say">She is tired.</span></td><td><span class="say">Is she tired?</span><br>Est-elle fatiguée ?</td></tr>
<tr><td><span class="say">They are from Spain.</span></td><td><span class="say">Are they from Spain?</span><br>Viennent-ils d'Espagne ?</td></tr>
<tr><td><span class="say">I am late.</span></td><td><span class="say">Am I late?</span><br>Suis-je en retard ?</td></tr></table>
<h3>Avec un mot interrogatif</h3>
<p>Le mot interrogatif vient en premier, puis le verbe, puis le sujet :</p>
<ul>
<li><span class="say">What's your name?</span> — Comment vous appelez-vous ? (mot à mot : quel est votre nom ?)</li>
<li><span class="say">Where are you from?</span> — D'où venez-vous ? (mot à mot : d'où êtes-vous ?)</li>
<li><span class="say">How are you?</span> — Comment allez-vous ?</li>
<li><span class="say">Who is he?</span> — Qui est-ce ? (qui est-il ?)</li>
</ul>
<p>Petits mots : <span class="say">what</span> = quoi, quel · <span class="say">where</span> = où · <span class="say">how</span> = comment · <span class="say">who</span> = qui. Et <span class="say">what's</span> = what is.</p>
<h3>Les réponses courtes</h3>
<p>En anglais, on répond rarement juste « Yes » ou « No » : on ajoute le <b>sujet</b> et le <b>verbe</b>. C'est plus naturel et plus poli.</p>
<table class="tbl"><tr><th>Question</th><th>Oui</th><th>Non</th></tr>
<tr><td><span class="say">Are you French?</span></td><td><span class="say">Yes, I am.</span></td><td><span class="say">No, I'm not.</span></td></tr>
<tr><td><span class="say">Is he English?</span></td><td><span class="say">Yes, he is.</span></td><td><span class="say">No, he isn't.</span></td></tr>
<tr><td><span class="say">Is it far?</span></td><td><span class="say">Yes, it is.</span></td><td><span class="say">No, it isn't.</span></td></tr>
<tr><td><span class="say">Are they friends?</span></td><td><span class="say">Yes, they are.</span></td><td><span class="say">No, they aren't.</span></td></tr></table>
<p>Attention, le sujet change : à <span class="say">Are you…?</span> (es-tu… ?), on répond avec <span class="say">I</span> (je) : <span class="say">Yes, I am.</span></p>
<div class="callout key"><b>À retenir</b> Question : <b>verbe + sujet</b> → <span class="say">Are you…?</span> <span class="say">Is she…?</span> Réponse courte : <b>Yes / No + sujet + verbe</b> → <span class="say">Yes, I am.</span> <span class="say">No, she isn't.</span></div>
<div class="callout warn"><b>Pièges</b> Dans une réponse courte avec <b>yes</b>, pas de forme courte à la fin : <span class="say">Yes, I am.</span> (jamais « Yes, I'm. ») et <span class="say">Yes, she is.</span> (jamais « Yes, she's. »). Et pas de do avec to be : on dit <span class="say">Are you English?</span>, pas « Do you are English? ».</div>
<div class="callout tip"><b>À l'oral</b> Dans une question à laquelle on répond par oui ou par non, la voix <b>monte</b> à la fin : <span class="say">Are you tired?</span></div>`
      },
      {
        id: 'en1-s-presenter', title: 'Se présenter : nom, pays, métier',
        html: `
<h3>Dire son nom</h3>
<p><span class="say">What's your name?</span> — Comment vous appelez-vous ?<br>
<span class="say">My name is Anne.</span> — Je m'appelle Anne. (mot à mot : mon nom est Anne)<br>
<span class="say">I'm Anne.</span> — Je suis Anne. (plus simple, très courant)<br>
<span class="say">This is my friend Paul.</span> — Je vous présente mon ami Paul. (mot à mot : ceci est…)</p>
<p>Petits mots utiles : <span class="say">my</span> = mon, ma, mes · <span class="say">your</span> = ton, ta, votre.</p>
<p>Devant un nom de famille : <span class="say">Mr Brown</span> (monsieur Brown), <span class="say">Mrs Brown</span> (madame Brown, femme mariée), <span class="say">Ms Brown</span> (madame Brown, sans préciser ; se prononce « miz »).</p>
<h3>Dire d'où l'on vient</h3>
<p><span class="say">Where are you from?</span> — D'où venez-vous ?<br>
<span class="say">I'm from France.</span> — Je viens de France. (<span class="say">from</span> = de, en provenance de)<br>
<span class="say">I'm from Nantes, in France.</span> — Je viens de Nantes, en France.<br>
<span class="say">I'm French.</span> — Je suis français (française).</p>
<table class="tbl"><tr><th>Pays</th><th>Nationalité</th></tr>
<tr><td><span class="say">France</span> — la France</td><td><span class="say">French</span> — français(e)</td></tr>
<tr><td><span class="say">England</span> — l'Angleterre</td><td><span class="say">English</span> — anglais(e)</td></tr>
<tr><td><span class="say">the United Kingdom</span> (<span class="say">the UK</span>) — le Royaume-Uni</td><td><span class="say">British</span> — britannique</td></tr>
<tr><td><span class="say">the United States</span> (<span class="say">the USA</span>) — les États-Unis</td><td><span class="say">American</span> — américain(e)</td></tr>
<tr><td><span class="say">Spain</span> — l'Espagne</td><td><span class="say">Spanish</span> — espagnol(e)</td></tr>
<tr><td><span class="say">Italy</span> — l'Italie</td><td><span class="say">Italian</span> — italien(ne)</td></tr>
<tr><td><span class="say">Germany</span> — l'Allemagne</td><td><span class="say">German</span> — allemand(e)</td></tr></table>
<div class="callout warn"><b>Piège : la majuscule</b> En anglais, les pays <b>et</b> les nationalités prennent une majuscule : <span class="say">I'm French.</span> (pas « french »). Et l'adjectif ne change jamais : <span class="say">He's French</span>, <span class="say">She's French</span>, <span class="say">They're French</span> (pas de e, pas de s).</div>
<h3>Dire son métier : a ou an</h3>
<p>En français, on dit « je suis professeur », sans article. En anglais, il faut <b>toujours</b> <span class="say">a</span> (un, une) devant un métier :</p>
<ul>
<li><b>a</b> devant un son de consonne : <span class="say">a teacher</span>, <span class="say">a doctor</span>, <span class="say">a nurse</span>.</li>
<li><b>an</b> devant un son de voyelle (a, e, i, o, u) : <span class="say">an engineer</span> (un ingénieur), <span class="say">an artist</span> (un artiste), <span class="say">an office worker</span> (un employé de bureau).</li>
</ul>
<p><span class="say">What's your job?</span> — Quel est votre métier ?<br>
<span class="say">I'm a teacher.</span> — Je suis professeur.<br>
<span class="say">She's an engineer.</span> — Elle est ingénieure.<br>
<span class="say">I'm retired.</span> — Je suis à la retraite. (Pas d'article : <span class="say">retired</span> n'est pas un métier mais un adjectif, comme <span class="say">tired</span>.)</p>
<div class="callout key"><b>À retenir</b> <span class="say">I'm a teacher.</span> (a + son de consonne) · <span class="say">I'm an engineer.</span> (an + son de voyelle) · <span class="say">I'm retired.</span> (sans article).</div>
<div class="callout warn"><b>Piège n° 1</b> Oublier l'article devant le métier : « She is doctor » est faux → <span class="say">She's a doctor.</span></div>
<h3>Petit dialogue</h3>
<p><span class="say">Hello, I'm Anne. What's your name?</span> — Bonjour, je suis Anne. Comment vous appelez-vous ?<br>
<span class="say">My name is Tom. Nice to meet you.</span> — Je m'appelle Tom. Enchanté.<br>
<span class="say">Nice to meet you too. Where are you from, Tom?</span> — Enchantée. D'où venez-vous, Tom ?<br>
<span class="say">I'm from London. I'm English. And you?</span> — Je viens de Londres. Je suis anglais. Et vous ?<br>
<span class="say">I'm from Nantes, in France. I'm retired.</span> — Je viens de Nantes, en France. Je suis à la retraite.</p>`
      },
      {
        id: 'en1-s-vocab', title: 'Le vocabulaire du chapitre',
        html: '<p>Tous les mots du chapitre, classés par thème. Touche un mot anglais pour l\'entendre, puis répète-le à voix haute.</p>' + vocab +
          '<div class="callout warn"><b>Pluriels irréguliers</b> <span class="say">one man, two men</span> (des hommes) · <span class="say">one woman, two women</span> (des femmes, prononcé « wi-min »).</div>' +
          '<div class="callout warn"><b>Mots qui se ressemblent</b> <span class="say">tired</span> = fatigué, mais <span class="say">retired</span> = à la retraite. <span class="say">Germany</span> = l\'Allemagne (le pays), <span class="say">German</span> = allemand. <span class="say">England</span> = l\'Angleterre (le pays), <span class="say">English</span> = anglais.</div>' +
          '<div class="callout tip"><b>Astuce</b> Apprends 5 à 10 mots par jour. Les flashcards et les exercices de l\'application te les reposeront au bon moment.</div>'
      }
    ],
    words: W,
    phrases: [
      // Saluer
      { en: 'How are you?', fr: 'Comment allez-vous ?', cat: 'Saluer', note: 'C\'est surtout une formule de politesse : on répond court, Fine, thanks.' },
      { en: 'I\'m fine, thank you. And you?', fr: 'Je vais bien, merci. Et vous ?', alt: ['I\'m fine, thanks. And you?', 'Fine, thank you. And you?', 'Fine, thanks. And you?', 'I\'m very well, thank you. And you?', 'Very well, thank you. And you?', 'Very well, thanks. And you?'], cat: 'Saluer' },
      { en: 'Nice to meet you.', fr: 'Enchanté, ravi de vous rencontrer.', alt: ['Pleased to meet you.'], cat: 'Saluer', note: 'Réponse : Nice to meet you too.' },
      { en: 'See you soon!', fr: 'À bientôt !', cat: 'Saluer' },
      { en: 'See you later!', fr: 'À plus tard !', cat: 'Saluer' },
      { en: 'Have a nice day!', fr: 'Bonne journée !', alt: ['Have a good day!'], cat: 'Saluer', note: 'Formule toute faite, très courante en partant.' },
      // Politesse
      { en: 'Thank you very much.', fr: 'Merci beaucoup.', alt: ['Thanks a lot.', 'Thank you so much.', 'Thanks very much.'], cat: 'Politesse' },
      { en: 'Yes, please.', fr: 'Oui, s\'il vous plaît.', cat: 'Politesse', note: 'Pour accepter quelque chose : oui, volontiers.' },
      { en: 'No, thank you.', fr: 'Non, merci.', alt: ['No, thanks.'], cat: 'Politesse' },
      { en: 'I\'m very sorry.', fr: 'Je suis vraiment désolé.', alt: ['I\'m so sorry.', 'I\'m really sorry.'], cat: 'Politesse' },
      { en: 'Excuse me, are you Mrs Brown?', fr: 'Excusez-moi, êtes-vous madame Brown ?', alt: ['Excuse me, are you Ms Brown?'], cat: 'Politesse' },
      // Se présenter
      { en: 'What\'s your name?', fr: 'Comment vous appelez-vous ?', cat: 'Se présenter', note: 'Mot à mot : quel est votre nom ?' },
      { en: 'My name is Anne.', fr: 'Je m\'appelle Anne.', alt: ['I\'m Anne.'], cat: 'Se présenter' },
      { en: 'This is my friend Paul.', fr: 'Je vous présente mon ami Paul.', cat: 'Se présenter', note: 'This is… = voici…, je vous présente…' },
      { en: 'Where are you from?', fr: 'D\'où venez-vous ?', cat: 'Se présenter' },
      { en: 'I\'m from France.', fr: 'Je viens de France.', alt: ['I come from France.'], cat: 'Se présenter' },
      { en: 'What\'s your job?', fr: 'Quel est votre métier ?', alt: ['What do you do?'], cat: 'Se présenter', note: 'On entend aussi très souvent : What do you do?' },
      { en: 'I\'m retired.', fr: 'Je suis à la retraite.', cat: 'Se présenter', note: 'Sans article : retired est un adjectif.' },
      { en: 'She\'s an engineer.', fr: 'Elle est ingénieure.', cat: 'Se présenter', note: 'an devant un son de voyelle.' },
      { en: 'Are you on holiday?', fr: 'Êtes-vous en vacances ?', alt: ['Are you on vacation?'], cat: 'Se présenter', note: 'on holiday (britannique) = on vacation (américain).' },
      // Comprendre
      { en: 'I don\'t understand.', fr: 'Je ne comprends pas.', cat: 'Comprendre', note: 'Expression toute faite : la forme don\'t sera expliquée plus tard.' },
      { en: 'Can you repeat that, please?', fr: 'Pouvez-vous répéter, s\'il vous plaît ?', alt: ['Could you repeat that, please?', 'Can you repeat, please?', 'Could you repeat, please?', 'Can you say that again, please?', 'Could you say that again, please?'], cat: 'Comprendre' },
      { en: 'More slowly, please.', fr: 'Plus lentement, s\'il vous plaît.', alt: ['Slower, please.', 'Slowly, please.'], cat: 'Comprendre' },
      { en: 'My English isn\'t very good.', fr: 'Mon anglais n\'est pas très bon.', cat: 'Comprendre' },
      { en: 'I\'m a beginner.', fr: 'Je suis débutant.', cat: 'Comprendre', note: 'a beginner = un débutant, une débutante.' }
    ],
    quiz: [
      { id: 'en1-q-01', q: 'Complète : I ___ French.', choices: ['am', 'is', 'are'], answer: 0, topic: 'Le verbe to be', sec: 'en1-s-be',
        why: { 1: '« is » va avec he, she, it.', 2: '« are » va avec you, we, they.' },
        explain: 'Avec **I**, toujours **am**. → I **am** French. (Je suis français.)', say: 'I am French.', level: 1 },
      { id: 'en1-q-02', q: 'Complète : She ___ a nurse.', choices: ['are', 'is', 'am'], answer: 1, topic: 'Le verbe to be', sec: 'en1-s-be',
        why: { 0: '« are » va avec you, we, they.', 2: '« am » va seulement avec I.' },
        explain: 'Avec he, she, it : **is**. → She **is** a nurse. (Elle est infirmière.)', say: 'She is a nurse.', level: 1 },
      { id: 'en1-q-03', q: 'Complète : They ___ from Spain.', choices: ['is', 'am', 'are'], answer: 2, topic: 'Le verbe to be', sec: 'en1-s-be',
        why: { 0: '« is » va avec une seule personne ou une seule chose (he, she, it).', 1: '« am » va seulement avec I.' },
        explain: 'Avec they (ils, elles) : **are**. → They **are** from Spain. (Ils viennent d\'Espagne.)', say: 'They are from Spain.', level: 1 },
      { id: 'en1-q-04', q: 'Complète : Paul and I ___ French.', choices: ['am', 'is', 'are'], answer: 2, topic: 'Le verbe to be', sec: 'en1-s-be',
        why: { 0: '« am » va avec I tout seul. Ici, Paul and I = Paul et moi = nous (we).', 1: '« is » va avec une seule personne.' },
        explain: 'Paul and I (Paul et moi) = **we** → **are**. → Paul and I **are** French. (Paul et moi sommes français.)', say: 'Paul and I are French.', level: 2 },
      { id: 'en1-q-05', q: 'Quelle est la forme courte de « we are » ?', choices: ['we\'s', 'we\'re', 'w\'are'], answer: 1, topic: 'Les formes courtes', sec: 'en1-s-be',
        why: { 0: '« \'s » remplace is, pas are.', 2: 'On garde le sujet en entier : c\'est le a de are qui disparaît.' },
        explain: 'we are → **we\'re** : l\'apostrophe remplace le a de are. → **We\'re** friends. (Nous sommes amis.)', say: 'We\'re friends.', level: 1 },
      { id: 'en1-q-06', q: 'Quelle est la forme courte de « he is » ?', choices: ['he\'s', 'his', 'he\'is'], answer: 0, topic: 'Les formes courtes', sec: 'en1-s-be',
        why: { 1: '« his » veut dire « son, sa » (à lui). Il se prononce presque pareil, mais ce n\'est pas le verbe être.', 2: 'Cette forme n\'existe pas : le i de is disparaît → he\'s.' },
        explain: 'he is → **he\'s** : l\'apostrophe remplace le i de is. → **He\'s** English. (Il est anglais.)', say: 'He\'s English.', level: 1 },
      { id: 'en1-q-07', q: 'Complète à la forme négative : He ___ English.', choices: ['aren\'t', 'isn\'t', 'not is', 'don\'t'], answer: 1, topic: 'La négation', sec: 'en1-s-negatif',
        why: { 0: '« aren\'t » va avec you, we, they.', 2: 'not se place après le verbe : is not → isn\'t.', 3: '« don\'t » ne s\'utilise pas avec to be : on ajoute simplement not.' },
        explain: 'Négation de is : **is not** → **isn\'t**. → He **isn\'t** English. (Il n\'est pas anglais.)', say: 'He isn\'t English.', level: 1 },
      { id: 'en1-q-08', q: 'Quelle est la forme négative de « I am » ?', choices: ['I amn\'t', 'I not am', 'I\'m not'], answer: 2, topic: 'La négation', sec: 'en1-s-negatif',
        why: { 0: '« amn\'t » n\'existe pas en anglais.', 1: 'not se place après le verbe, jamais avant.' },
        explain: 'Avec I, une seule forme courte : **I\'m not**. → **I\'m not** tired. (Je ne suis pas fatigué.)', say: 'I\'m not tired.', level: 1 },
      { id: 'en1-q-09', q: 'Complète la question : ___ you tired?', choices: ['Is', 'Am', 'Are'], answer: 2, topic: 'Les questions', sec: 'en1-s-questions',
        why: { 0: '« Is » va avec he, she, it.', 1: '« Am » va seulement avec I.' },
        explain: 'Avec you : **are**, placé devant le sujet pour poser la question. → **Are** you tired? (Es-tu fatigué ?)', say: 'Are you tired?', level: 1 },
      { id: 'en1-q-10', q: 'Quelle question est correcte ?', choices: ['He is a doctor?', 'Is he a doctor?', 'Is a doctor he?'], answer: 1, topic: 'Les questions', sec: 'en1-s-questions',
        why: { 0: 'C\'est une affirmation avec un point d\'interrogation : on l\'entend seulement à l\'oral, pour montrer sa surprise. La vraie question met le verbe devant : Is he…?', 2: 'Le sujet (he) se place juste après le verbe, avant le reste.' },
        explain: 'Question avec to be : **verbe + sujet** + le reste. → **Is he** a doctor? (Est-il médecin ?)', say: 'Is he a doctor?', level: 1 },
      { id: 'en1-q-11', q: 'Are you English? — No, ___.', choices: ['I\'m not', 'I amn\'t', 'I don\'t', 'you aren\'t'], answer: 0, topic: 'Les réponses courtes', sec: 'en1-s-questions',
        why: { 1: '« amn\'t » n\'existe pas.', 2: 'On répond avec le verbe de la question (to be), pas avec do.', 3: 'Tu parles de toi : la question dit you, la réponse dit I.' },
        explain: 'Réponse courte négative : **No, I\'m not.** (Non, je ne suis pas anglais.)', say: 'Are you English? No, I\'m not.', level: 1 },
      { id: 'en1-q-12', q: 'Is she a doctor? — Yes, ___.', choices: ['she\'s', 'she is', 'she does', 'it is'], answer: 1, topic: 'Les réponses courtes', sec: 'en1-s-questions',
        why: { 0: 'Dans une réponse courte avec yes, pas de forme courte à la fin : Yes, she is.', 2: 'On reprend le verbe de la question (is), pas does.', 3: 'On parle d\'une femme : she.' },
        explain: 'Réponse courte affirmative : **Yes, she is.** (Oui, elle est médecin.) Jamais « Yes, she\'s » : pas de forme courte à la fin.', say: 'Is she a doctor? Yes, she is.', level: 2 },
      { id: 'en1-q-13', q: 'Complète : She is ___ engineer.', choices: ['a', 'an', '(rien)'], answer: 1, topic: 'a / an', sec: 'en1-s-presenter',
        why: { 0: 'engineer commence par un son de voyelle (e) : on écrit an.', 2: 'En anglais, il faut toujours un article devant un métier.' },
        explain: 'Devant un son de voyelle : **an**. → She is **an** engineer. (Elle est ingénieure.)', say: 'She is an engineer.', level: 1 },
      { id: 'en1-q-14', q: 'Complète : I\'m ___ teacher.', choices: ['an', '(rien)', 'a'], answer: 2, topic: 'a / an', sec: 'en1-s-presenter',
        why: { 0: 'teacher commence par un son de consonne (t) : on écrit a.', 1: 'En français on dit « je suis professeur », mais en anglais l\'article est obligatoire.' },
        explain: 'Devant un son de consonne : **a**. → I\'m **a** teacher. (Je suis professeur.)', say: 'I\'m a teacher.', level: 1 },
      { id: 'en1-q-15', q: 'Complète : My house is big. ___ is very nice. (Ma maison est grande. Elle est très jolie.)', choices: ['She', 'It', 'He'], answer: 1, topic: 'Les pronoms', sec: 'en1-s-pronoms',
        why: { 0: 'she, c\'est pour une femme. Une maison est une chose : it.', 2: 'he, c\'est pour un homme.' },
        explain: 'Pour une chose : **it**, même si en français on dit « elle ». → My house is big. **It** is very nice.', say: 'My house is big. It is very nice.', level: 1 },
      { id: 'en1-q-16', q: 'Le mot « you » veut dire…', choices: ['seulement « tu »', 'seulement « vous »', '« tu » ou « vous »'], answer: 2, topic: 'Les pronoms', sec: 'en1-s-pronoms',
        why: { 0: 'you sert aussi pour vouvoyer et pour parler à plusieurs personnes.', 1: 'you sert aussi pour tutoyer.' },
        explain: '**you** = tu, vous (politesse) et vous (plusieurs personnes). → You are my friend. (Tu es mon ami.)', say: 'You are my friend.', level: 1 },
      { id: 'en1-q-17', q: 'Il est 20 h, tu arrives chez des amis. Tu dis :', choices: ['Good night!', 'Good evening!', 'Good afternoon!'], answer: 1, topic: 'Saluer', sec: 'en1-s-saluer',
        why: { 0: 'Good night = bonne nuit : seulement en partant ou avant d\'aller dormir.', 2: 'Good afternoon, c\'est pour l\'après-midi.' },
        explain: 'Le soir, en arrivant : **Good evening!** (Bonsoir !)', say: 'Good evening!', level: 1 },
      { id: 'en1-q-18', q: 'Tu veux poser une question à un inconnu dans la rue. Tu commences par :', choices: ['Excuse me', 'Sorry', 'Please', 'You\'re welcome'], answer: 0, topic: 'Politesse', sec: 'en1-s-politesse',
        why: { 1: 'sorry sert surtout à s\'excuser après une gêne, ou à faire répéter.', 2: 'please (s\'il vous plaît) se met plutôt à la fin d\'une demande.', 3: 'you\'re welcome (de rien) sert à répondre à un merci.' },
        explain: 'Pour aborder quelqu\'un : **Excuse me** (excusez-moi). → Excuse me, are you English? (Excusez-moi, êtes-vous anglais ?)', say: 'Excuse me, are you English?', level: 1 },
      { id: 'en1-q-19', q: 'Quelqu\'un te dit « Thank you! ». Tu réponds :', choices: ['Please.', 'Excuse me.', 'You\'re welcome.', 'Sorry.'], answer: 2, topic: 'Politesse', sec: 'en1-s-politesse',
        why: { 0: 'please veut seulement dire s\'il vous plaît : ce n\'est pas une réponse à un merci.', 1: 'excuse me sert à aborder quelqu\'un.', 3: 'sorry sert à s\'excuser.' },
        explain: 'Pour répondre à un merci : **You\'re welcome.** (De rien.)', say: 'You\'re welcome.', level: 1 },
      { id: 'en1-q-20', q: 'En anglais, les nationalités (French, English…) s\'écrivent…', choices: ['toujours avec une majuscule', 'en minuscules, comme en français', 'avec une majuscule seulement en début de phrase'], answer: 0, topic: 'Se présenter', sec: 'en1-s-presenter',
        why: { 1: 'Contrairement au français, l\'anglais met une majuscule aux nationalités.', 2: 'La majuscule est obligatoire partout dans la phrase.' },
        explain: 'Les pays **et** les nationalités prennent toujours une majuscule : I\'m **F**rench. (Je suis français.)', say: 'I\'m French.', level: 1 },
      { id: 'en1-q-21', q: 'Écoute. Que demande la personne ?', listen: true, say: 'Where are you from?', choices: ['Comment vous appelez-vous ?', 'D\'où venez-vous ?', 'Comment allez-vous ?', 'Quel est votre métier ?'], answer: 1, topic: 'Compréhension orale', sec: 'en1-s-presenter',
        why: { 0: 'Ce serait What\'s your name?', 2: 'Ce serait How are you?', 3: 'Ce serait What\'s your job?' },
        explain: '**Where are you from?** = D\'où venez-vous ? (where = où, from = de). Réponse : I\'m from France.', level: 1 },
      { id: 'en1-q-22', q: 'Écoute. Que dit la personne ?', listen: true, say: 'I\'m retired.', choices: ['Je suis à la retraite.', 'Je suis fatigué.', 'Je suis en retard.'], answer: 0, topic: 'Compréhension orale', sec: 'en1-s-presenter',
        why: { 1: 'fatigué = tired. Ici, on entend « re » au début : retired.', 2: 'en retard = late.' },
        explain: '**I\'m retired.** = Je suis à la retraite. Ne confonds pas retired (à la retraite) et tired (fatigué).', level: 1 },
      { id: 'en1-q-23', q: 'Écoute. Que dit la personne ?', listen: true, say: 'She isn\'t English, she\'s American.', choices: ['Elle est anglaise et américaine.', 'Il n\'est pas anglais, il est américain.', 'Elle n\'est pas anglaise, elle est américaine.', 'Elle n\'est pas américaine, elle est anglaise.'], answer: 2, topic: 'Compréhension orale', sec: 'en1-s-negatif',
        why: { 0: 'On entend isn\'t (n\'est pas) : elle n\'est pas anglaise.', 1: 'On entend she (elle), pas he (il).', 3: 'C\'est l\'inverse : isn\'t English (pas anglaise), she\'s American (elle est américaine).' },
        explain: 'She **isn\'t** English, she**\'s** American. (Elle n\'est pas anglaise, elle est américaine.)', level: 2 },
      { id: 'en1-q-24', q: 'Écoute. Que dit la personne ?', listen: true, say: 'Nice to meet you.', choices: ['À bientôt.', 'Bonne nuit.', 'De rien.', 'Enchanté.'], answer: 3, topic: 'Compréhension orale', sec: 'en1-s-saluer',
        why: { 0: 'À bientôt = See you soon.', 1: 'Bonne nuit = Good night.', 2: 'De rien = You\'re welcome.' },
        explain: '**Nice to meet you.** = Enchanté (ravi de vous rencontrer). Réponse : Nice to meet you too.', level: 1 }
    ],
    exercises: [
      { id: 'en1-x-01', prompt: 'Complète avec am, is ou are : I ___ from Paris.', answers: ['am'], topic: 'Le verbe to be', sec: 'en1-s-be', strict: true,
        hint: 'I = je : quelle forme de to be ?', explain: 'Avec I : **am**. → I **am** from Paris. (Je viens de Paris.)', rule: 'I **am** · he/she/it **is** · you/we/they **are**',
        mistakes: [{ text: 'is', msg: '« is » va avec he, she, it. Avec I : **am**.' }, { text: 'are', msg: '« are » va avec you, we, they. Avec I : **am**.' }], say: 'I am from Paris.', level: 1 },
      { id: 'en1-x-02', prompt: 'Complète avec am, is ou are : She ___ a doctor.', answers: ['is'], topic: 'Le verbe to be', sec: 'en1-s-be', strict: true,
        hint: 'She = elle (une seule personne).', explain: 'Avec he, she, it : **is**. → She **is** a doctor. (Elle est médecin.)', rule: 'I **am** · he/she/it **is** · you/we/they **are**',
        mistakes: [{ text: 'are', msg: '« are » va avec you, we, they. Avec she : **is**.' }, { text: 'am', msg: '« am » va seulement avec I. Avec she : **is**.' }], say: 'She is a doctor.', level: 1 },
      { id: 'en1-x-03', prompt: 'Complète avec am, is ou are : We ___ friends.', answers: ['are'], topic: 'Le verbe to be', sec: 'en1-s-be', strict: true,
        hint: 'We = nous.', explain: 'Avec you, we, they : **are**. → We **are** friends. (Nous sommes amis.)', rule: 'I **am** · he/she/it **is** · you/we/they **are**',
        mistakes: [{ text: 'is', msg: '« is » va avec une seule personne (he, she, it). Avec we : **are**.' }, { text: 'am', msg: '« am » va seulement avec I. Avec we : **are**.' }], say: 'We are friends.', level: 1 },
      { id: 'en1-x-04', prompt: 'Complète avec am, is ou are : Anne and Tom ___ English.', answers: ['are'], topic: 'Le verbe to be', sec: 'en1-s-be', strict: true,
        hint: 'Combien de personnes ?', explain: 'Anne and Tom = deux personnes = **they** → **are**. → Anne and Tom **are** English. (Anne et Tom sont anglais.)', rule: 'Plusieurs personnes ou plusieurs choses → **are**.',
        mistakes: [{ text: 'is', msg: 'Anne and Tom = deux personnes (they) : il faut **are**.' }, { text: 'am', msg: '« am » va seulement avec I. Ici, deux personnes : **are**.' }], say: 'Anne and Tom are English.', level: 1 },
      { id: 'en1-x-05', prompt: 'Mets à la forme négative : He is a teacher.', answers: ['He isn\'t a teacher', 'He\'s not a teacher'], topic: 'La négation', sec: 'en1-s-negatif',
        hint: 'Ajoute not après is.', explain: 'On ajoute **not** après is : He **isn\'t** a teacher. (Il n\'est pas professeur.) On peut aussi dire He\'s not a teacher.', rule: 'Négation : am / is / are + **not** (isn\'t, aren\'t, I\'m not).',
        mistakes: [{ text: 'He not is a teacher', msg: 'not se place **après** le verbe : He is not (isn\'t) a teacher.' }, { text: 'He is no a teacher', msg: '« no » = non (pour répondre). Pour la négation, c\'est **not** : He isn\'t a teacher.' }, { text: 'He don\'t is a teacher', msg: 'Pas de don\'t avec to be : on ajoute simplement **not** → He isn\'t a teacher.' }], say: 'He isn\'t a teacher.', level: 1 },
      { id: 'en1-x-06', prompt: 'Mets à la forme négative : I am tired.', answers: ['I\'m not tired'], topic: 'La négation', sec: 'en1-s-negatif',
        hint: 'Avec I, il n\'y a qu\'une forme courte possible.', explain: 'I am **not** → **I\'m not**. → **I\'m not** tired. (Je ne suis pas fatigué.)', rule: 'Avec I : **I\'m not** (« I amn\'t » n\'existe pas).',
        mistakes: [{ text: 'I not tired', msg: 'Il faut garder le verbe : I **am** not (I\'m not) tired.' }, { text: 'I not am tired', msg: 'not se place **après** am : I am not (I\'m not) tired.' }, { text: 'I\'m no tired', msg: '« no » = non. Pour la négation : **not** → I\'m not tired.' }], say: 'I\'m not tired.', level: 1 },
      { id: 'en1-x-07', prompt: 'Mets à la forme négative : They are from London.', answers: ['They aren\'t from London', 'They\'re not from London'], topic: 'La négation', sec: 'en1-s-negatif',
        hint: 'are + not = ?', explain: 'are + not → **aren\'t**. → They **aren\'t** from London. (Ils ne viennent pas de Londres.)', rule: 'are not = **aren\'t** · is not = **isn\'t**',
        mistakes: [{ text: 'They isn\'t from London', msg: 'Avec they : **aren\'t** (are not). isn\'t va avec he, she, it.' }, { text: 'They are no from London', msg: '« no » = non. Pour la négation : **not** → They aren\'t from London.' }, { text: 'They not are from London', msg: 'not se place **après** le verbe : They are not (aren\'t) from London.' }], say: 'They aren\'t from London.', level: 1 },
      { id: 'en1-x-08', prompt: 'Transforme en question : You are English.', answers: ['Are you English'], topic: 'Les questions', sec: 'en1-s-questions',
        hint: 'Le verbe passe devant le sujet.', explain: 'On inverse : **Are you** English? (Êtes-vous anglais ?)', rule: 'Question avec to be : **verbe + sujet** + reste ?',
        mistakes: [{ text: 'You are English', msg: 'Pour poser la question, mets **are** devant le sujet : Are you English?' }, { text: 'Do you are English', msg: 'Pas de do avec to be : on inverse simplement → **Are you** English?' }, { text: 'Is you English', msg: 'Avec you : **are** → Are you English?' }], say: 'Are you English?', level: 1 },
      { id: 'en1-x-09', prompt: 'Transforme en question : She is a nurse.', answers: ['Is she a nurse'], topic: 'Les questions', sec: 'en1-s-questions',
        hint: 'Le verbe passe devant le sujet.', explain: 'On inverse : **Is she** a nurse? (Est-elle infirmière ?)', rule: 'Question avec to be : **verbe + sujet** + reste ?',
        mistakes: [{ text: 'She is a nurse', msg: 'Pour poser la question, mets **is** devant le sujet : Is she a nurse?' }, { text: 'Is she nurse', msg: 'N\'oublie pas **a** devant le métier : Is she **a** nurse?' }, { text: 'Are she a nurse', msg: 'Avec she : **is** → Is she a nurse?' }], say: 'Is she a nurse?', level: 1 },
      { id: 'en1-x-10', prompt: 'Transforme en question : They are married. (Ils sont mariés.)', answers: ['Are they married'], topic: 'Les questions', sec: 'en1-s-questions',
        hint: 'Le verbe passe devant le sujet.', explain: 'On inverse : **Are they** married? (Sont-ils mariés ?)', rule: 'Question avec to be : **verbe + sujet** + reste ?',
        mistakes: [{ text: 'They are married', msg: 'Pour poser la question, mets **are** devant le sujet : Are they married?' }, { text: 'Is they married', msg: 'Avec they : **are** → Are they married?' }, { text: 'Do they are married', msg: 'Pas de do avec to be : on inverse simplement → **Are they** married?' }], say: 'Are they married?', level: 1 },
      { id: 'en1-x-11', prompt: 'Réponds « oui » par une réponse courte : Are you French?', answers: ['Yes, I am'], topic: 'Les réponses courtes', sec: 'en1-s-questions',
        hint: 'Question avec you → réponse avec I. Pas de forme courte à la fin !', explain: 'Réponse courte : **Yes, I am.** (Oui.) On ne termine jamais une phrase par « I\'m ».', rule: 'Réponse courte : Yes + sujet + **am / is / are** (en entier).',
        mistakes: [{ text: 'Yes, I do', msg: 'On reprend le verbe de la question : Are you…? → Yes, I **am**.' }, { text: 'Yes, you are', msg: 'Tu parles de toi : la réponse se fait avec **I** → Yes, I am.' }, { text: 'Yes, I are', msg: 'Avec I : **am** → Yes, I am.' }], say: 'Yes, I am.', level: 1 },
      { id: 'en1-x-12', prompt: 'Réponds « non » par une réponse courte : Is he German?', answers: ['No, he isn\'t', 'No, he\'s not'], topic: 'Les réponses courtes', sec: 'en1-s-questions',
        hint: 'No + sujet + verbe à la forme négative.', explain: 'Réponse courte négative : **No, he isn\'t.** (Non, il n\'est pas allemand.)', rule: 'Réponse courte : No + sujet + **isn\'t / aren\'t / I\'m not**.',
        mistakes: [{ text: 'No, he doesn\'t', msg: 'On reprend le verbe de la question (is) : No, he **isn\'t**.' }, { text: 'No, he not', msg: 'Il faut le verbe : No, he **isn\'t** (is not).' }, { text: 'No, it isn\'t', msg: 'On parle d\'un homme : **he** → No, he isn\'t.' }], say: 'No, he isn\'t.', level: 1 },
      { id: 'en1-x-13', prompt: 'Complète avec a ou an : She is ___ engineer.', answers: ['an'], topic: 'a / an', sec: 'en1-s-presenter', strict: true,
        hint: 'engineer commence par quel son ?', explain: 'engineer commence par un son de voyelle : **an**. → She is **an** engineer. (Elle est ingénieure.)', rule: '**a** + son de consonne · **an** + son de voyelle',
        mistakes: [{ text: 'a', msg: 'engineer commence par un son de voyelle (e) : **an** engineer.' }, { text: 'the', msg: '« the » = le, la. Pour dire le métier de quelqu\'un : **a / an**.' }], say: 'She is an engineer.', level: 1 },
      { id: 'en1-x-14', prompt: 'Complète avec a ou an : I\'m ___ teacher.', answers: ['a'], topic: 'a / an', sec: 'en1-s-presenter', strict: true,
        hint: 'teacher commence par quel son ?', explain: 'teacher commence par un son de consonne : **a**. → I\'m **a** teacher. (Je suis professeur.)', rule: '**a** + son de consonne · **an** + son de voyelle',
        mistakes: [{ text: 'an', msg: 'teacher commence par un son de consonne (t) : **a** teacher.' }, { text: 'the', msg: '« the » = le, la. Pour dire son métier : **a / an**.' }], say: 'I\'m a teacher.', level: 1 },
      { id: 'en1-x-15', prompt: 'Complète avec le bon pronom : Anne is French. ___ is from Lyon.', answers: ['She'], topic: 'Les pronoms', sec: 'en1-s-pronoms', strict: true,
        hint: 'Anne est une femme.', explain: 'Une femme : **she**. → Anne is French. **She** is from Lyon. (Anne est française. Elle vient de Lyon.)', rule: 'he = un homme · she = une femme · it = une chose',
        mistakes: [{ text: 'He', msg: 'he = il (un homme). Anne est une femme : **she**.' }, { text: 'It', msg: 'it, c\'est pour une chose ou un animal. Pour une femme : **she**.' }], say: 'Anne is French. She is from Lyon.', level: 1 },
      { id: 'en1-x-16', prompt: 'Complète avec le bon pronom : Paul and I are friends. ___ are from Nantes.', answers: ['We'], topic: 'Les pronoms', sec: 'en1-s-pronoms', strict: true,
        hint: 'Paul and I = Paul et moi.', explain: 'Paul et moi = nous = **we**. → **We** are from Nantes. (Nous venons de Nantes.)', rule: 'moi + d\'autres personnes = **we**',
        mistakes: [{ text: 'They', msg: 'Paul and I = Paul **et moi** → nous = **we** (they = ils, sans moi).' }, { text: 'You', msg: 'you = tu, vous. Paul et moi = nous = **we**.' }], say: 'Paul and I are friends. We are from Nantes.', level: 1 },
      { id: 'en1-x-17', prompt: 'Complète avec le bon pronom : My phone is new. ___ is very good. (Mon téléphone est neuf. Il est très bien.)', answers: ['It'], topic: 'Les pronoms', sec: 'en1-s-pronoms', strict: true,
        hint: 'Un téléphone, c\'est une personne ou une chose ?', explain: 'Pour une chose : **it** (même si en français on dit « il »). → **It** is very good.', rule: 'Les choses n\'ont pas de genre : toujours **it**.',
        mistakes: [{ text: 'He', msg: 'he, c\'est pour un homme. Un téléphone est une chose : **it**.' }, { text: 'She', msg: 'she, c\'est pour une femme. Un téléphone est une chose : **it**.' }], say: 'My phone is new. It is very good.', level: 1 },
      { id: 'en1-x-18', prompt: 'Traduis : Je suis à la retraite.', answers: ['I\'m retired'], topic: 'Se présenter', sec: 'en1-s-presenter',
        hint: 'retraité = retired (un adjectif).', explain: '→ **I\'m retired.** Pas d\'article : retired est un adjectif, comme tired (fatigué).', rule: 'Métier : I\'m **a** teacher · mais : I\'m **retired** (sans article).',
        mistakes: [{ text: 'I\'m a retired', msg: 'retired est un adjectif, pas un métier : pas de a → I\'m retired.' }, { text: 'I\'m retire', msg: 'retraité = retire**d** (avec un -d à la fin).' }, { text: 'I\'m tired', msg: 'tired = fatigué ! À la retraite = **retired**.' }], say: 'I\'m retired.', level: 1 },
      { id: 'en1-x-19', prompt: 'Traduis : Elle est médecin.', answers: ['She\'s a doctor'], topic: 'Se présenter', sec: 'en1-s-presenter',
        hint: 'N\'oublie pas l\'article devant le métier.', explain: '→ **She\'s a doctor.** En anglais, il faut **a** devant un métier.', rule: 'sujet + to be + **a / an** + métier',
        mistakes: [{ text: 'She is doctor', msg: 'En anglais, il faut **a** devant un métier : She is **a** doctor.' }, { text: 'He is a doctor', msg: 'Elle = **she** (he = il).' }, { text: 'She is a medecin', msg: 'médecin = **doctor** en anglais.' }], say: 'She\'s a doctor.', level: 1 },
      { id: 'en1-x-20', prompt: 'Traduis : Nous sommes français.', answers: ['We\'re French'], topic: 'Se présenter', sec: 'en1-s-presenter',
        hint: 'nous = we ; français = French (avec une majuscule).', explain: '→ **We\'re French.** (ou We are French). L\'adjectif ne prend jamais de -s.', rule: 'Nationalités : majuscule, et jamais de -s ni de -e.',
        mistakes: [{ text: 'We is French', msg: 'Avec we : **are** → We are French.' }, { text: 'Us are French', msg: 'Nous (sujet) = **we** → We are French.' }, { text: 'We are France', msg: 'France = le pays. La nationalité : **French**.' }], say: 'We\'re French.', level: 1 },
      { id: 'en1-x-21', prompt: 'Traduis : Je viens d\'Angleterre.', answers: ['I\'m from England', 'I come from England'], topic: 'Se présenter', sec: 'en1-s-presenter',
        hint: 'venir de (origine) = to be from.', explain: '→ **I\'m from England.** (mot à mot : je suis de l\'Angleterre)', rule: 'Origine : I\'m **from** + pays ou ville.',
        mistakes: [{ text: 'I\'m of England', msg: 'Pour l\'origine : **from** (pas of) → I\'m from England.' }, { text: 'I\'m from English', msg: 'English = anglais (la nationalité). Le pays : **England**.' }, { text: 'I from England', msg: 'Il faut le verbe : I**\'m** from England.' }], say: 'I\'m from England.', level: 1 },
      { id: 'en1-x-22', prompt: 'Remets dans l\'ordre : you / are / how / ?', answers: ['How are you'], topic: 'Les questions', sec: 'en1-s-questions',
        hint: 'Mot interrogatif, puis verbe, puis sujet.', explain: '→ **How are you?** (Comment allez-vous ?)', rule: 'Question : mot interrogatif + **verbe + sujet** ?',
        mistakes: [{ text: 'How you are', msg: 'Dans une question, le verbe vient avant le sujet : How **are you**?' }, { text: 'Are you how', msg: 'Le mot interrogatif (how) se place en premier : **How** are you?' }], say: 'How are you?', level: 1 },
      { id: 'en1-x-23', prompt: 'Remets dans l\'ordre : name / is / my / Anne', answers: ['My name is Anne'], topic: 'Se présenter', sec: 'en1-s-presenter',
        hint: 'Ce n\'est pas une question : sujet + verbe + reste.', explain: '→ **My name is Anne.** (Je m\'appelle Anne.)', rule: 'Affirmation : **sujet + verbe** + reste.',
        mistakes: [{ text: 'Is my name Anne', msg: 'Ici, c\'est une affirmation, pas une question : sujet + verbe → My name **is** Anne.' }, { text: 'My name Anne is', msg: 'Le verbe se place juste après le sujet : My name **is** Anne.' }], say: 'My name is Anne.', level: 1 },
      { id: 'en1-x-24', prompt: 'Quelqu\'un te dit « Thank you! ». Réponds « de rien » en anglais.', answers: ['You\'re welcome', 'No problem'], topic: 'Politesse', sec: 'en1-s-politesse',
        hint: 'Deux mots : you + …', explain: '→ **You\'re welcome.** (De rien, je vous en prie.)', rule: 'Merci → **You\'re welcome.**',
        mistakes: [{ text: 'Please', msg: 'please = s\'il vous plaît (pour demander). Pour répondre à un merci : **You\'re welcome**.' }, { text: 'Welcome', msg: '« Welcome » tout seul veut dire « bienvenue ». Pour « de rien » : **You\'re welcome**.' }, { text: 'Of nothing', msg: 'Le mot à mot du français ne marche pas ici ! On dit **You\'re welcome**.' }], say: 'You\'re welcome.', level: 1 },
      { id: 'en1-x-25', prompt: 'Traduis : Excusez-moi, êtes-vous anglais ?', answers: ['Excuse me, are you English'], topic: 'Politesse', sec: 'en1-s-politesse',
        hint: 'Excusez-moi = excuse me ; puis une question avec are.', explain: '→ **Excuse me, are you English?**', rule: 'Aborder quelqu\'un : **Excuse me**, + question.',
        mistakes: [{ text: 'Excuse me, you are English', msg: 'Pour la question, mets **are** devant le sujet : are you English?' }, { text: 'Excuse me, is you English', msg: 'Avec you : **are** → are you English?' }, { text: 'Excuse me, are you England', msg: 'England = le pays. La nationalité : **English**.' }], say: 'Excuse me, are you English?', level: 1 },
      { id: 'en1-x-26', prompt: 'Traduis : Ils ne sont pas allemands.', answers: ['They aren\'t German', 'They\'re not German'], topic: 'La négation', sec: 'en1-s-negatif',
        hint: 'allemand = German.', explain: '→ **They aren\'t German.** (ou They\'re not German). L\'adjectif ne prend pas de -s.', rule: 'Négation : are + **not** = aren\'t.',
        mistakes: [{ text: 'They not are German', msg: 'not se place **après** le verbe : They are not (aren\'t) German.' }, { text: 'They don\'t are German', msg: 'Pas de don\'t avec to be : They **aren\'t** German.' }, { text: 'They aren\'t Germany', msg: 'Germany = l\'Allemagne (le pays). La nationalité : **German**.' }], say: 'They aren\'t German.', level: 2 },
      { id: 'en1-x-27', prompt: 'Corrige la faute et réécris la phrase : He is a engineer.', answers: ['He is an engineer'], topic: 'a / an', sec: 'en1-s-presenter',
        hint: 'Regarde l\'article devant engineer.', explain: '→ He is **an** engineer. (Il est ingénieur.) Devant un son de voyelle, a devient **an**.', rule: '**a** + son de consonne · **an** + son de voyelle',
        mistakes: [{ text: 'He is a engineer', msg: 'Tu as recopié la faute ! Devant un son de voyelle (le e de engineer), on écrit **an**.' }, { text: 'He is engineer', msg: 'Il faut garder l\'article devant le métier : He is **an** engineer.' }], say: 'He is an engineer.', level: 1 }
    ]
  });
})();
