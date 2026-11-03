/* Anglais — chapitre 2 : Nombres, heure et dates (âge, prix, téléphone, jours, mois, at / on / in) */
(function () {
  const W = [
    // Les nombres
    { en: 'twelve', fr: 'douze', pos: 'num', cat: 'Les nombres', ex: 'It\'s twelve o\'clock.', exFr: 'Il est douze heures (midi).', level: 1, note: '11 et 12 ne suivent aucune règle : eleven, twelve.' },
    { en: 'fifteen', fr: 'quinze', pos: 'num', cat: 'Les nombres', ex: 'He\'s fifteen.', exFr: 'Il a quinze ans.', level: 1, note: 'Pas « fiveteen » : five devient fif-.' },
    { en: 'twenty', fr: 'vingt', pos: 'num', cat: 'Les nombres', ex: 'It\'s twenty euros.', exFr: 'C\'est vingt euros.', level: 1 },
    { en: 'forty', fr: 'quarante', pos: 'num', cat: 'Les nombres', ex: 'She\'s forty years old.', exFr: 'Elle a quarante ans.', level: 1, note: 'Sans u, alors que four (4) en a un.' },
    { en: 'fifty', fr: 'cinquante', pos: 'num', cat: 'Les nombres', ex: 'It\'s fifty pounds.', exFr: 'C\'est cinquante livres.', level: 1, note: 'On appuie sur le début : FIF-ty (alors que fifteen se dit fif-TEEN).' },
    { en: 'sixty', fr: 'soixante', pos: 'num', cat: 'Les nombres', ex: 'I\'m sixty.', exFr: 'J\'ai soixante ans.', level: 1, note: 'On appuie sur le début : SIX-ty (alors que sixteen se dit six-TEEN).' },
    { en: 'hundred', fr: 'cent', pos: 'num', cat: 'Les nombres', alt: ['a hundred', 'one hundred'], ex: 'It\'s a hundred euros.', exFr: 'C\'est cent euros.', level: 1, note: 'On dit a hundred ou one hundred. Pas de s après un nombre : three hundred.' },
    { en: 'thousand', fr: 'mille', pos: 'num', cat: 'Les nombres', alt: ['a thousand', 'one thousand'], ex: 'It\'s two thousand euros.', exFr: 'C\'est deux mille euros.', level: 1, note: 'Pas de s après un nombre : two thousand.' },
    // Les ordinaux
    { en: 'first', fr: 'premier, première', pos: 'adj', cat: 'Les ordinaux', ex: 'It\'s the first of May.', exFr: 'C\'est le premier mai.', level: 1, note: 'En abrégé : 1st.' },
    { en: 'second', fr: 'deuxième, second', pos: 'adj', cat: 'Les ordinaux', ex: 'It\'s my second time in London.', exFr: 'C\'est la deuxième fois que je viens à Londres.', level: 1, note: 'En abrégé : 2nd. C\'est aussi le nom « une seconde » (de temps).' },
    { en: 'third', fr: 'troisième', pos: 'adj', cat: 'Les ordinaux', ex: 'My birthday is on the third of March.', exFr: 'Mon anniversaire est le 3 mars.', level: 1, note: 'En abrégé : 3rd.' },
    // L'heure
    { en: 'o\'clock', fr: 'heure(s) pile', pos: 'x', cat: 'L\'heure', ex: 'It\'s six o\'clock.', exFr: 'Il est six heures.', level: 1, note: 'Seulement pour l\'heure pile, jamais avec des minutes.' },
    { en: 'half', fr: 'la moitié, et demie', pos: 'n', cat: 'L\'heure', ex: 'It\'s half past nine.', exFr: 'Il est neuf heures et demie.', level: 1, note: 'Le l ne se prononce pas : « hâf ».' },
    { en: 'quarter', fr: 'le quart, et quart', pos: 'n', cat: 'L\'heure', ex: 'It\'s quarter to five.', exFr: 'Il est cinq heures moins le quart.', level: 1, note: 'quarter past = et quart · quarter to = moins le quart.' },
    // L'âge et les prix
    { en: 'old', fr: 'vieux, âgé', pos: 'adj', cat: 'L\'âge et les prix', ex: 'How old are you?', exFr: 'Quel âge avez-vous ?', level: 1, note: 'How old…? = quel âge… ? (mot à mot : combien vieux…).' },
    { en: 'birthday', fr: 'l\'anniversaire', pos: 'n', cat: 'L\'âge et les prix', ex: 'Happy birthday!', exFr: 'Joyeux anniversaire !', level: 1, note: 'Faux ami : anniversary = anniversaire de mariage.' },
    { en: 'pound', fr: 'la livre (sterling)', pos: 'n', cat: 'L\'âge et les prix', ex: 'It\'s ten pounds.', exFr: 'C\'est dix livres.', level: 2, note: 'La monnaie du Royaume-Uni (symbole £).' },
    // Les jours
    { en: 'Monday', fr: 'lundi', pos: 'n', cat: 'Les jours', ex: 'See you on Monday!', exFr: 'À lundi !', level: 1, note: 'Les jours prennent toujours une majuscule.' },
    { en: 'Tuesday', fr: 'mardi', pos: 'n', cat: 'Les jours', ex: 'Today is Tuesday.', exFr: 'Aujourd\'hui, c\'est mardi.', level: 1 },
    { en: 'Wednesday', fr: 'mercredi', pos: 'n', cat: 'Les jours', ex: 'Is the shop open on Wednesday?', exFr: 'Le magasin est-il ouvert mercredi ?', level: 1, note: 'Se prononce « wènz-dé » : le premier d ne se prononce pas.' },
    { en: 'Thursday', fr: 'jeudi', pos: 'n', cat: 'Les jours', ex: 'The market is on Thursday.', exFr: 'Le marché, c\'est jeudi.', level: 1, note: 'Avec th : ne pas confondre avec Tuesday (mardi).' },
    { en: 'Friday', fr: 'vendredi', pos: 'n', cat: 'Les jours', ex: 'It\'s Friday!', exFr: 'C\'est vendredi !', level: 1 },
    { en: 'Saturday', fr: 'samedi', pos: 'n', cat: 'Les jours', ex: 'I\'m free on Saturday.', exFr: 'Je suis libre samedi.', level: 1 },
    { en: 'Sunday', fr: 'dimanche', pos: 'n', cat: 'Les jours', ex: 'The shop is closed on Sunday.', exFr: 'Le magasin est fermé dimanche.', level: 1 },
    // Les mois
    { en: 'January', fr: 'janvier', pos: 'n', cat: 'Les mois', ex: 'January is the first month of the year.', exFr: 'Janvier est le premier mois de l\'année.', level: 1, note: 'Les mois prennent toujours une majuscule.' },
    { en: 'February', fr: 'février', pos: 'n', cat: 'Les mois', ex: 'My birthday is in February.', exFr: 'Mon anniversaire est en février.', level: 1 },
    { en: 'March', fr: 'mars', pos: 'n', cat: 'Les mois', ex: 'It\'s the tenth of March.', exFr: 'C\'est le 10 mars.', level: 1 },
    { en: 'April', fr: 'avril', pos: 'n', cat: 'Les mois', ex: 'Paris is beautiful in April.', exFr: 'Paris est magnifique en avril.', level: 1 },
    { en: 'May', fr: 'mai', pos: 'n', cat: 'Les mois', ex: 'The first of May is a holiday in France.', exFr: 'Le premier mai est un jour férié en France.', level: 1 },
    { en: 'June', fr: 'juin', pos: 'n', cat: 'Les mois', ex: 'The days are long in June.', exFr: 'Les jours sont longs en juin.', level: 1 },
    { en: 'July', fr: 'juillet', pos: 'n', cat: 'Les mois', ex: 'We\'re on holiday in July.', exFr: 'Nous sommes en vacances en juillet.', level: 1 },
    { en: 'August', fr: 'août', pos: 'n', cat: 'Les mois', ex: 'It\'s hot in August.', exFr: 'Il fait chaud en août.', level: 1 },
    { en: 'September', fr: 'septembre', pos: 'n', cat: 'Les mois', ex: 'It\'s the first of September.', exFr: 'C\'est le premier septembre.', level: 1 },
    { en: 'October', fr: 'octobre', pos: 'n', cat: 'Les mois', ex: 'Halloween is in October.', exFr: 'Halloween, c\'est en octobre.', level: 1 },
    { en: 'November', fr: 'novembre', pos: 'n', cat: 'Les mois', ex: 'My birthday is on the fifth of November.', exFr: 'Mon anniversaire est le 5 novembre.', level: 1 },
    { en: 'December', fr: 'décembre', pos: 'n', cat: 'Les mois', ex: 'Christmas is in December.', exFr: 'Noël, c\'est en décembre.', level: 1 },
    // Les saisons
    { en: 'spring', fr: 'le printemps', pos: 'n', cat: 'Les saisons', ex: 'It\'s nice in spring.', exFr: 'Il fait bon au printemps.', level: 1, note: 'Pas de majuscule pour les saisons.' },
    { en: 'summer', fr: 'l\'été', pos: 'n', cat: 'Les saisons', ex: 'It\'s hot in summer.', exFr: 'Il fait chaud en été.', level: 1 },
    { en: 'autumn', fr: 'l\'automne', pos: 'n', cat: 'Les saisons', alt: ['fall'], ex: 'Autumn is a beautiful season.', exFr: 'L\'automne est une belle saison.', level: 1, note: 'En américain : fall. Le n final ne se prononce pas : « o-teum ».' },
    { en: 'winter', fr: 'l\'hiver', pos: 'n', cat: 'Les saisons', ex: 'It\'s cold in winter.', exFr: 'Il fait froid en hiver.', level: 1 },
    // Le temps qui passe
    { en: 'today', fr: 'aujourd\'hui', pos: 'adv', cat: 'Le temps qui passe', ex: 'Today is my birthday!', exFr: 'Aujourd\'hui, c\'est mon anniversaire !', level: 1 },
    { en: 'tomorrow', fr: 'demain', pos: 'adv', cat: 'Le temps qui passe', ex: 'See you tomorrow!', exFr: 'À demain !', level: 1 },
    { en: 'yesterday', fr: 'hier', pos: 'adv', cat: 'Le temps qui passe', ex: 'yesterday morning', exFr: 'hier matin', level: 1, note: 'Pour parler d\'hier, il faut le passé : on le verra dans un prochain chapitre.' },
    { en: 'week', fr: 'la semaine', pos: 'n', cat: 'Le temps qui passe', ex: 'See you next week!', exFr: 'À la semaine prochaine !', level: 1 },
    { en: 'month', fr: 'le mois', pos: 'n', cat: 'Le temps qui passe', ex: 'December is a cold month.', exFr: 'Décembre est un mois froid.', level: 1, note: 'Le th final se prononce la langue entre les dents.' },
    { en: 'year', fr: 'l\'année, l\'an', pos: 'n', cat: 'Le temps qui passe', ex: 'Happy New Year!', exFr: 'Bonne année !', level: 1 },
    { en: 'morning', fr: 'le matin', pos: 'n', cat: 'Le temps qui passe', ex: 'I\'m tired in the morning.', exFr: 'Je suis fatigué le matin.', level: 1 },
    { en: 'afternoon', fr: 'l\'après-midi', pos: 'n', cat: 'Le temps qui passe', ex: 'See you this afternoon!', exFr: 'À cet après-midi !', level: 1 },
    { en: 'evening', fr: 'le soir', pos: 'n', cat: 'Le temps qui passe', ex: 'The film is at eight in the evening.', exFr: 'Le film est à huit heures du soir.', level: 1 },
    { en: 'night', fr: 'la nuit', pos: 'n', cat: 'Le temps qui passe', ex: 'It\'s cold at night.', exFr: 'Il fait froid la nuit.', level: 1, note: 'Attention : at night (la nuit), mais in the morning, in the evening.' }
  ];
  const CATS = ['Les nombres', 'Les ordinaux', 'L\'heure', 'L\'âge et les prix', 'Les jours', 'Les mois', 'Les saisons', 'Le temps qui passe'];
  const vocab = CATS.map((c) => '<h3>' + c + '</h3><table class="tbl"><tr><th>Anglais</th><th>Français</th></tr>' +
    W.filter((w) => w.cat === c).map((w) => '<tr><td><span class="say">' + w.en + '</span></td><td>' + w.fr + '</td></tr>').join('') + '</table>').join('');

  APP.registerChapter({
    id: 'en2', subject: 'anglais', num: 2,
    title: 'Nombres, heure et dates', subtitle: 'compter, dire son âge, l\'heure, la date et les prix · at, on, in',
    vocabSec: 'en2-s-vocab',
    sections: [
      {
        id: 'en2-s-nombres', title: 'Compter de 0 à 20',
        html: `
<p>Les nombres servent partout : l'âge, l'heure, les prix, le téléphone… Commençons par les vingt premiers. Touche chaque nombre pour l'entendre, et répète-le à voix haute.</p>
<table class="tbl"><tr><th>Nombre</th><th>Anglais</th><th>Nombre</th><th>Anglais</th></tr>
<tr><td>0</td><td><span class="say">zero</span></td><td>11</td><td><span class="say">eleven</span></td></tr>
<tr><td>1</td><td><span class="say">one</span></td><td>12</td><td><span class="say">twelve</span></td></tr>
<tr><td>2</td><td><span class="say">two</span></td><td>13</td><td><span class="say">thirteen</span></td></tr>
<tr><td>3</td><td><span class="say">three</span></td><td>14</td><td><span class="say">fourteen</span></td></tr>
<tr><td>4</td><td><span class="say">four</span></td><td>15</td><td><span class="say">fifteen</span></td></tr>
<tr><td>5</td><td><span class="say">five</span></td><td>16</td><td><span class="say">sixteen</span></td></tr>
<tr><td>6</td><td><span class="say">six</span></td><td>17</td><td><span class="say">seventeen</span></td></tr>
<tr><td>7</td><td><span class="say">seven</span></td><td>18</td><td><span class="say">eighteen</span></td></tr>
<tr><td>8</td><td><span class="say">eight</span></td><td>19</td><td><span class="say">nineteen</span></td></tr>
<tr><td>9</td><td><span class="say">nine</span></td><td>20</td><td><span class="say">twenty</span></td></tr>
<tr><td>10</td><td><span class="say">ten</span></td><td></td><td></td></tr></table>
<h3>11 et 12 : à apprendre par cœur</h3>
<p><span class="say">eleven</span> (11) et <span class="say">twelve</span> (12) ne suivent aucune règle.</p>
<h3>De 13 à 19 : la fin en -teen</h3>
<p>De 13 à 19, on ajoute <b>-teen</b> au chiffre : <span class="say">fourteen</span> (4 + teen), <span class="say">sixteen</span>, <span class="say">seventeen</span>… Et on appuie sur la fin : four-<b>TEEN</b>.</p>
<p>Attention, quelques nombres changent un peu : <span class="say">thirteen</span> (13, et pas « threeteen »), <span class="say">fifteen</span> (15, et pas « fiveteen »), <span class="say">eighteen</span> (18, avec un seul t).</p>
<div class="callout key"><b>À retenir</b> 13 à 19 = chiffre + <b>-teen</b>, avec la voix qui appuie sur la fin : <span class="say">thirteen</span>, <span class="say">fifteen</span>, <span class="say">nineteen</span>.</div>
<div class="callout warn"><b>Piège à l'oral</b> 13 et 30, 14 et 40, 15 et 50… se ressemblent beaucoup ! Pour 13, on appuie sur la <b>fin</b> (thir-<b>TEEN</b>) ; pour 30, sur le <b>début</b> (<b>THIR</b>-ty). Écoute la différence : <span class="say">thirteen, thirty</span> · <span class="say">fourteen, forty</span> · <span class="say">fifteen, fifty</span> · <span class="say">sixteen, sixty</span>.</div>
<div class="callout tip"><b>Prononciation</b> Dans <span class="say">three</span> et <span class="say">thirteen</span>, le <b>th</b> se prononce le bout de la langue entre les dents (ni « tri », ni « zri »). Dans <span class="say">two</span>, le w ne se prononce pas : « tou ».</div>`
      },
      {
        id: 'en2-s-grands', title: 'De 20 à 100, puis hundred et thousand',
        html: `
<h3>Les dizaines</h3>
<table class="tbl"><tr><th>Nombre</th><th>Anglais</th></tr>
<tr><td>20</td><td><span class="say">twenty</span></td></tr>
<tr><td>30</td><td><span class="say">thirty</span></td></tr>
<tr><td>40</td><td><span class="say">forty</span></td></tr>
<tr><td>50</td><td><span class="say">fifty</span></td></tr>
<tr><td>60</td><td><span class="say">sixty</span></td></tr>
<tr><td>70</td><td><span class="say">seventy</span></td></tr>
<tr><td>80</td><td><span class="say">eighty</span></td></tr>
<tr><td>90</td><td><span class="say">ninety</span></td></tr>
<tr><td>100</td><td><span class="say">a hundred</span> ou <span class="say">one hundred</span></td></tr></table>
<p>Les dizaines se terminent par <b>-ty</b>. Bonne nouvelle : pas de « soixante-dix » ni de « quatre-vingts » ! 70 se dit simplement « sept-dix » : <span class="say">seventy</span> ; 80 = <span class="say">eighty</span> ; 90 = <span class="say">ninety</span>.</p>
<h3>Les nombres composés : 21, 35, 99…</h3>
<p>On dit la dizaine, puis l'unité, avec un <b>trait d'union</b> à l'écrit, et <b>sans « et »</b> :</p>
<p>21 = <span class="say">twenty-one</span> · 35 = <span class="say">thirty-five</span> · 47 = <span class="say">forty-seven</span> · 68 = <span class="say">sixty-eight</span> · 71 = <span class="say">seventy-one</span> · 85 = <span class="say">eighty-five</span> · 99 = <span class="say">ninety-nine</span></p>
<h3>Hundred (cent) et thousand (mille)</h3>
<table class="tbl"><tr><th>Nombre</th><th>Anglais</th></tr>
<tr><td>100</td><td><span class="say">a hundred</span></td></tr>
<tr><td>105</td><td><span class="say">a hundred and five</span></td></tr>
<tr><td>250</td><td><span class="say">two hundred and fifty</span></td></tr>
<tr><td>1,000</td><td><span class="say">a thousand</span></td></tr>
<tr><td>2,500</td><td><span class="say">two thousand five hundred</span></td></tr>
<tr><td>1,000,000</td><td><span class="say">a million</span></td></tr></table>
<p>Au Royaume-Uni, on ajoute <span class="say">and</span> après hundred : <span class="say">two hundred and fifty</span>. Les Américains disent souvent <span class="say">two hundred fifty</span>. Les deux sont compris partout.</p>
<div class="callout key"><b>À retenir</b> Dizaines en <b>-ty</b> · 21 = <span class="say">twenty-one</span> (trait d'union, pas de « et ») · 100 = <span class="say">a hundred</span> · 1 000 = <span class="say">a thousand</span>.</div>
<div class="callout warn"><b>Pièges</b> <span class="say">forty</span> (40) s'écrit <b>sans u</b>, alors que <span class="say">four</span> (4) en a un. <span class="say">hundred</span> et <span class="say">thousand</span> ne prennent <b>pas de s</b> après un nombre : <span class="say">three hundred</span> (pas « three hundreds »), <span class="say">five thousand</span>.</div>
<div class="callout info"><b>Virgule et point</b> L'anglais fait l'inverse du français ! La <b>virgule</b> sépare les milliers : 1,000 = 1 000. Le <b>point</b> sert pour les décimales : 2.5 = 2,5 (on dit <span class="say">two point five</span>).</div>`
      },
      {
        id: 'en2-s-ordinaux', title: 'Premier, deuxième… : les ordinaux',
        html: `
<p>Les nombres <b>ordinaux</b> servent à classer : le premier, le deuxième, le troisième… En anglais, on les utilise surtout pour les <b>dates</b> (le 5 mai).</p>
<table class="tbl"><tr><th>Abrégé</th><th>Anglais</th><th>Français</th></tr>
<tr><td>1st</td><td><span class="say">first</span></td><td>premier</td></tr>
<tr><td>2nd</td><td><span class="say">second</span></td><td>deuxième</td></tr>
<tr><td>3rd</td><td><span class="say">third</span></td><td>troisième</td></tr>
<tr><td>4th</td><td><span class="say">fourth</span></td><td>quatrième</td></tr>
<tr><td>5th</td><td><span class="say">fifth</span></td><td>cinquième</td></tr>
<tr><td>6th</td><td><span class="say">sixth</span></td><td>sixième</td></tr>
<tr><td>7th</td><td><span class="say">seventh</span></td><td>septième</td></tr>
<tr><td>8th</td><td><span class="say">eighth</span></td><td>huitième</td></tr>
<tr><td>9th</td><td><span class="say">ninth</span></td><td>neuvième</td></tr>
<tr><td>10th</td><td><span class="say">tenth</span></td><td>dixième</td></tr>
<tr><td>12th</td><td><span class="say">twelfth</span></td><td>douzième</td></tr>
<tr><td>20th</td><td><span class="say">twentieth</span></td><td>vingtième</td></tr>
<tr><td>21st</td><td><span class="say">twenty-first</span></td><td>vingt et unième</td></tr>
<tr><td>22nd</td><td><span class="say">twenty-second</span></td><td>vingt-deuxième</td></tr>
<tr><td>23rd</td><td><span class="say">twenty-third</span></td><td>vingt-troisième</td></tr>
<tr><td>30th</td><td><span class="say">thirtieth</span></td><td>trentième</td></tr>
<tr><td>31st</td><td><span class="say">thirty-first</span></td><td>trente et unième</td></tr></table>
<h3>La règle</h3>
<ul>
<li>En général, on ajoute <b>-th</b> : <span class="say">four</span> → <span class="say">fourth</span>, <span class="say">six</span> → <span class="say">sixth</span>, <span class="say">ten</span> → <span class="say">tenth</span>.</li>
<li>Trois exceptions à connaître par cœur : <span class="say">first</span> (1er), <span class="say">second</span> (2e), <span class="say">third</span> (3e). On les retrouve dans 21st, 22nd, 23rd, 31st…</li>
<li>Petits changements d'orthographe : <span class="say">fifth</span> (pas « fiveth »), <span class="say">ninth</span> (le e disparaît), <span class="say">twelfth</span>, <span class="say">eighth</span> (un seul t), <span class="say">twentieth</span> (le y devient ie).</li>
</ul>
<p>En abrégé, on écrit le nombre suivi des <b>deux dernières lettres</b> du mot : 1st (fir<b>st</b>), 2nd (seco<b>nd</b>), 3rd (thi<b>rd</b>), 4th (four<b>th</b>)… En français, on écrit 1er, 2e, 3e.</p>
<h3>Exemples</h3>
<p><span class="say">It's the first of May.</span> — C'est le premier mai.<br>
<span class="say">It's my second time in London.</span> — C'est la deuxième fois que je viens à Londres.<br>
<span class="say">My birthday is on the third of March.</span> — Mon anniversaire est le 3 mars.</p>
<div class="callout key"><b>À retenir</b> <span class="say">first</span>, <span class="say">second</span>, <span class="say">third</span>, puis presque toujours <b>-th</b> : <span class="say">fourth</span>, <span class="say">fifth</span>, <span class="say">sixth</span>…</div>
<div class="callout warn"><b>Piège</b> Pour une date, le français utilise un nombre normal (« le 5 mai »), mais l'anglais utilise l'<b>ordinal</b> : <span class="say">the fifth of May</span> (mot à mot : le cinquième de mai). Et « le premier mai » = <span class="say">the first of May</span>.</div>
<div class="callout tip"><b>Prononciation</b> Dans <span class="say">fifth</span>, <span class="say">sixth</span>, <span class="say">tenth</span>, le <b>th</b> final se prononce le bout de la langue entre les dents.</div>`
      },
      {
        id: 'en2-s-quotidien', title: 'L\'âge, les prix et le téléphone',
        html: `
<h3>Dire son âge</h3>
<p><span class="say">How old are you?</span> — Quel âge avez-vous ? (mot à mot : combien vieux êtes-vous ?)<br>
<span class="say">I'm sixty.</span> ou <span class="say">I'm sixty years old.</span> — J'ai soixante ans.</p>
<p><span class="say">How old is he?</span> — Quel âge a-t-il ?<br>
<span class="say">He's twelve.</span> — Il a douze ans.<br>
<span class="say">My friend is seventy-two.</span> — Mon ami a soixante-douze ans.</p>
<div class="callout warn"><b>Piège n° 1 des Français</b> En anglais, l'âge se dit avec <b>to be</b> (être), jamais avec have (avoir) : on « est » soixante ans ! « I have sixty years » est faux → <span class="say">I'm sixty.</span> Et si on dit years, il faut ajouter old : <span class="say">I'm sixty years old</span> (jamais « I'm sixty years » tout seul).</div>
<h3>Demander un prix</h3>
<p><span class="say">How much is it?</span> — C'est combien ? Combien ça coûte ?<br>
<span class="say">It's ten euros.</span> — C'est dix euros.<br>
<span class="say">It's twelve euros fifty.</span> — C'est douze euros cinquante (12,50 €).<br>
<span class="say">It's five pounds.</span> — C'est cinq livres. (Au Royaume-Uni, on paie en livres : <span class="say">pounds</span>, symbole £.)<br>
<span class="say">It's three pounds ninety-nine.</span> — C'est trois livres quatre-vingt-dix-neuf (3,99 £).</p>
<p>À l'écrit, le symbole se met <b>devant</b> le nombre : £5, €10. Mais à l'oral, on dit la monnaie <b>après</b> : <span class="say">five pounds</span>, <span class="say">ten euros</span>. Aux États-Unis, on paie en <span class="say">dollars</span>.</p>
<h3>Donner son numéro de téléphone</h3>
<p>En anglais, on dit les chiffres <b>un par un</b> (et non deux par deux comme en français), avec de petites pauses.</p>
<ul>
<li>Le 0 se dit souvent <span class="say">oh</span>, comme la lettre O (on peut aussi dire <span class="say">zero</span>).</li>
<li>Deux chiffres pareils à la suite : <span class="say">double</span> (surtout au Royaume-Uni). 44 = <span class="say">double four</span>.</li>
</ul>
<p><span class="say">What's your phone number?</span> — Quel est votre numéro de téléphone ?<br>
06 12 45 78 90 → <span class="say">oh six, one two, four five, seven eight, nine oh</span><br>
02 44 31 87 15 → <span class="say">oh two, double four, three one, eight seven, one five</span></p>
<div class="callout key"><b>À retenir</b> Âge : <span class="say">I'm sixty.</span> (avec to be) · Prix : <span class="say">How much is it?</span> — <span class="say">It's ten euros.</span> · Téléphone : chiffre par chiffre, 0 = <span class="say">oh</span>.</div>`
      },
      {
        id: 'en2-s-heure', title: 'Dire l\'heure',
        html: `
<p>Pour demander l'heure : <span class="say">What time is it?</span> ou <span class="say">What's the time?</span> — Quelle heure est-il ?<br>
Pour répondre, on dit <span class="say">It's…</span> (Il est…), ou simplement l'heure.</p>
<h3>L'heure pile : o'clock</h3>
<p><span class="say">It's three o'clock.</span> — Il est trois heures.<br>
<span class="say">It's ten o'clock.</span> — Il est dix heures.</p>
<h3>Les minutes : past (après) et to (avant)</h3>
<p>On dit d'abord les minutes, puis l'heure. <span class="say">past</span> = après (jusqu'à la demie). <span class="say">to</span> = avant, « moins » : après la demie, on compte vers l'heure suivante.</p>
<table class="tbl"><tr><th>Heure</th><th>Anglais</th><th>Français</th></tr>
<tr><td>3 h 05</td><td><span class="say">It's five past three.</span></td><td>trois heures cinq</td></tr>
<tr><td>3 h 10</td><td><span class="say">It's ten past three.</span></td><td>trois heures dix</td></tr>
<tr><td>3 h 15</td><td><span class="say">It's quarter past three.</span></td><td>trois heures et quart</td></tr>
<tr><td>3 h 30</td><td><span class="say">It's half past three.</span></td><td>trois heures et demie</td></tr>
<tr><td>3 h 40</td><td><span class="say">It's twenty to four.</span></td><td>quatre heures moins vingt</td></tr>
<tr><td>3 h 45</td><td><span class="say">It's quarter to four.</span></td><td>quatre heures moins le quart</td></tr>
<tr><td>3 h 50</td><td><span class="say">It's ten to four.</span></td><td>quatre heures moins dix</td></tr></table>
<p>On peut aussi dire <span class="say">a quarter past three</span>, avec a : les deux sont corrects.</p>
<h3>La façon facile : lire les chiffres</h3>
<p>Comme sur une montre digitale, on peut simplement lire l'heure, puis les minutes : 3:15 → <span class="say">three fifteen</span> · 7:45 → <span class="say">seven forty-five</span> · 9:30 → <span class="say">nine thirty</span>. C'est très courant, et c'est correct !</p>
<h3>Le matin ou l'après-midi ? a.m. et p.m.</h3>
<p>Les Anglais disent rarement « 15 heures » ou « 20 heures » (sauf pour les trains et les avions). Ils comptent de 1 à 12 et ajoutent :</p>
<ul>
<li><span class="say">a.m.</span> = de minuit à midi : 8 h → <span class="say">eight a.m.</span></li>
<li><span class="say">p.m.</span> = de midi à minuit : 20 h → <span class="say">eight p.m.</span> ; 15 h 30 → <span class="say">three thirty p.m.</span></li>
</ul>
<p>Ou plus simplement : <span class="say">eight in the morning</span> (8 h du matin), <span class="say">three in the afternoon</span> (15 h), <span class="say">eight in the evening</span> (20 h). Midi = <span class="say">midday</span> ou <span class="say">noon</span> ; minuit = <span class="say">midnight</span>.</p>
<h3>À quelle heure ? at</h3>
<p><span class="say">The train is at ten fifteen.</span> — Le train est à dix heures quinze.<br>
<span class="say">See you at eight o'clock!</span> — À huit heures !</p>
<div class="callout key"><b>À retenir</b> <span class="say">It's</span> + l'heure. Les minutes + <span class="say">past</span> (après) ou <span class="say">to</span> (avant) + l'heure. <span class="say">o'clock</span> seulement pour l'heure pile.</div>
<div class="callout warn"><b>Pièges</b> On ne dit pas « hours » pour donner l'heure : « It's three hours » est faux → <span class="say">It's three o'clock.</span> (<span class="say">hour</span> = une heure de durée : <span class="say">one hour</span>.) Et pour 8 h 45, on compte vers l'heure suivante, comme en français : <span class="say">quarter to nine</span> (neuf heures moins le quart).</div>
<div class="callout info"><b>Bon à savoir</b> En Angleterre, on entend souvent <span class="say">half six</span> pour dire 6 h 30 : c'est la forme familière de <span class="say">half past six</span>.</div>`
      },
      {
        id: 'en2-s-calendrier', title: 'Les jours, les mois, les saisons et la date',
        html: `
<h3>Les jours de la semaine</h3>
<table class="tbl"><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">Monday</span></td><td>lundi</td></tr>
<tr><td><span class="say">Tuesday</span></td><td>mardi</td></tr>
<tr><td><span class="say">Wednesday</span></td><td>mercredi</td></tr>
<tr><td><span class="say">Thursday</span></td><td>jeudi</td></tr>
<tr><td><span class="say">Friday</span></td><td>vendredi</td></tr>
<tr><td><span class="say">Saturday</span></td><td>samedi</td></tr>
<tr><td><span class="say">Sunday</span></td><td>dimanche</td></tr></table>
<p>Samedi et dimanche = <span class="say">the weekend</span> (le week-end). <span class="say">Wednesday</span> se prononce « wènz-dé » : le premier d ne se prononce pas.</p>
<h3>Les mois de l'année</h3>
<table class="tbl"><tr><th>Anglais</th><th>Français</th><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">January</span></td><td>janvier</td><td><span class="say">July</span></td><td>juillet</td></tr>
<tr><td><span class="say">February</span></td><td>février</td><td><span class="say">August</span></td><td>août</td></tr>
<tr><td><span class="say">March</span></td><td>mars</td><td><span class="say">September</span></td><td>septembre</td></tr>
<tr><td><span class="say">April</span></td><td>avril</td><td><span class="say">October</span></td><td>octobre</td></tr>
<tr><td><span class="say">May</span></td><td>mai</td><td><span class="say">November</span></td><td>novembre</td></tr>
<tr><td><span class="say">June</span></td><td>juin</td><td><span class="say">December</span></td><td>décembre</td></tr></table>
<h3>Les saisons</h3>
<p><span class="say">spring</span> — le printemps · <span class="say">summer</span> — l'été · <span class="say">autumn</span> — l'automne (en américain : <span class="say">fall</span>) · <span class="say">winter</span> — l'hiver</p>
<h3>Dire la date</h3>
<p><span class="say">What's the date today?</span> — Quelle est la date aujourd'hui ?<br>
<span class="say">It's the fifth of May.</span> — C'est le 5 mai.<br>
<span class="say">Today is Monday, the first of June.</span> — Aujourd'hui, c'est lundi 1er juin.<br>
<span class="say">My birthday is on the tenth of March.</span> — Mon anniversaire est le 10 mars.</p>
<p>On dit : <b>the</b> + ordinal + <b>of</b> + mois. À l'écrit, au Royaume-Uni : <i>5 May</i> ou <i>5th May</i>. Les Américains disent plutôt <span class="say">May fifth</span> (écrit <i>May 5</i>).</p>
<h3>Les années</h3>
<p>On coupe l'année en deux : 1965 → <span class="say">nineteen sixty-five</span> (dix-neuf / soixante-cinq) · 1990 → <span class="say">nineteen ninety</span>. Pour les années 2000 : 2005 → <span class="say">two thousand and five</span> · 2026 → <span class="say">twenty twenty-six</span>.</p>
<div class="callout key"><b>À retenir</b> Jours et mois : <b>toujours une majuscule</b> (<span class="say">Monday</span>, <span class="say">May</span>). Les saisons, non (<span class="say">summer</span>). La date : <span class="say">the fifth of May</span>.</div>
<div class="callout warn"><b>Pièges</b> Ne confonds pas <span class="say">Tuesday</span> (mardi) et <span class="say">Thursday</span> (jeudi, avec th). Et l'anniversaire se dit <span class="say">birthday</span> : <span class="say">Happy birthday!</span> — Joyeux anniversaire ! (<span class="say">anniversary</span> = anniversaire de mariage.)</div>`
      },
      {
        id: 'en2-s-prepositions', title: 'Quand ? at, on, in',
        html: `
<p>Pour dire <b>quand</b>, l'anglais utilise trois petits mots : <span class="say">at</span>, <span class="say">on</span> et <span class="say">in</span>. Imagine un entonnoir : <b>at</b> pour un moment précis, <b>on</b> pour un jour, <b>in</b> pour une période plus longue.</p>
<table class="tbl"><tr><th>Mot</th><th>Pour…</th><th>Exemples</th></tr>
<tr><td><b><span class="say">at</span></b></td><td>une heure, un moment précis</td><td><span class="say">at six o'clock</span> (à six heures) · <span class="say">at half past nine</span> (à neuf heures et demie) · <span class="say">at midday</span> (à midi) · <span class="say">at night</span> (la nuit)</td></tr>
<tr><td><b><span class="say">on</span></b></td><td>un jour, une date</td><td><span class="say">on Monday</span> (lundi) · <span class="say">on Sunday morning</span> (dimanche matin) · <span class="say">on the fifth of May</span> (le 5 mai) · <span class="say">on my birthday</span> (le jour de mon anniversaire)</td></tr>
<tr><td><b><span class="say">in</span></b></td><td>un mois, une saison, une année, une partie de la journée</td><td><span class="say">in May</span> (en mai) · <span class="say">in summer</span> (en été) · <span class="say">in nineteen sixty-five</span> (en 1965) · <span class="say">in the morning</span> (le matin) · <span class="say">in the evening</span> (le soir)</td></tr></table>
<h3>Exemples avec to be</h3>
<p><span class="say">The film is at eight o'clock.</span> — Le film est à huit heures.<br>
<span class="say">The shop is closed on Sunday.</span> — Le magasin est fermé dimanche.<br>
<span class="say">My birthday is in July.</span> — Mon anniversaire est en juillet.<br>
<span class="say">It's cold in winter.</span> — Il fait froid en hiver.<br>
<span class="say">I'm tired in the evening.</span> — Je suis fatigué le soir.</p>
<h3>Sans at, on, in : today, tomorrow, next…</h3>
<p>Devant <span class="say">today</span> (aujourd'hui), <span class="say">tomorrow</span> (demain), <span class="say">yesterday</span> (hier), <span class="say">this</span> (ce, cette) et <span class="say">next</span> (prochain), on ne met <b>rien</b> :</p>
<p><span class="say">See you tomorrow!</span> — À demain !<br>
<span class="say">I'm busy this afternoon.</span> — Je suis occupé cet après-midi.<br>
<span class="say">See you next week!</span> — À la semaine prochaine !</p>
<div class="callout key"><b>À retenir</b> <b>at</b> + une heure · <b>on</b> + un jour ou une date · <b>in</b> + un mois, une saison, une année, <span class="say">in the morning</span> / <span class="say">in the afternoon</span> / <span class="say">in the evening</span>. Mais : <span class="say">at night</span>.</div>
<div class="callout warn"><b>Pièges</b> « lundi » se dit <span class="say">on Monday</span>, sans « the ». Le matin = <span class="say">in the morning</span>, mais la nuit = <span class="say">at night</span> (sans the). Et pour le week-end : <span class="say">at the weekend</span> au Royaume-Uni, <span class="say">on the weekend</span> aux États-Unis.</div>`
      },
      {
        id: 'en2-s-vocab', title: 'Le vocabulaire du chapitre',
        html: '<p>Les mots du chapitre, classés par thème. Touche un mot anglais pour l\'entendre, puis répète-le à voix haute. (Tous les nombres de 0 à 100 sont dans les fiches « Compter de 0 à 20 » et « De 20 à 100 ».)</p>' + vocab +
          '<div class="callout warn"><b>Mots qui se ressemblent</b> <span class="say">Tuesday</span> (mardi) / <span class="say">Thursday</span> (jeudi) · <span class="say">fifteen</span> (15) / <span class="say">fifty</span> (50) · <span class="say">birthday</span> (anniversaire) / <span class="say">anniversary</span> (anniversaire de mariage).</div>' +
          '<div class="callout tip"><b>Astuce</b> Récite les jours et les mois à voix haute, dans l\'ordre, une fois par jour pendant une semaine : <span class="say">Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.</span></div>'
      }
    ],
    words: W,
    phrases: [
      // L'âge
      { en: 'How old are you?', fr: 'Quel âge avez-vous ?', cat: 'L\'âge', note: 'Mot à mot : combien vieux êtes-vous ?' },
      { en: 'I\'m sixty.', fr: 'J\'ai soixante ans.', alt: ['I\'m sixty years old.'], cat: 'L\'âge', note: 'Avec to be (être), jamais have !' },
      { en: 'When is your birthday?', fr: 'Quand est votre anniversaire ?', alt: ['When\'s your birthday?'], cat: 'L\'âge' },
      { en: 'My birthday is in May.', fr: 'Mon anniversaire est en mai.', cat: 'L\'âge', note: 'in + un mois.' },
      // L'heure
      { en: 'What time is it?', fr: 'Quelle heure est-il ?', alt: ['What\'s the time?'], cat: 'L\'heure' },
      { en: 'It\'s three o\'clock.', fr: 'Il est trois heures.', alt: ['It\'s three.'], cat: 'L\'heure' },
      { en: 'It\'s half past six.', fr: 'Il est six heures et demie.', alt: ['It\'s six thirty.', 'It\'s half six.'], cat: 'L\'heure' },
      { en: 'It\'s quarter past ten.', fr: 'Il est dix heures et quart.', alt: ['It\'s a quarter past ten.', 'It\'s ten fifteen.'], cat: 'L\'heure' },
      { en: 'It\'s quarter to eight.', fr: 'Il est huit heures moins le quart.', alt: ['It\'s a quarter to eight.', 'It\'s seven forty-five.'], cat: 'L\'heure', note: 'On compte vers l\'heure suivante : quarter to eight.' },
      { en: 'The train is at ten fifteen.', fr: 'Le train est à dix heures quinze.', alt: ['The train is at quarter past ten.', 'The train is at a quarter past ten.'], cat: 'L\'heure' },
      // Les jours et les dates
      { en: 'What day is it today?', fr: 'Quel jour sommes-nous ?', alt: ['What day is it?', 'What day is today?'], cat: 'Les jours et les dates' },
      { en: 'Today is Monday.', fr: 'Aujourd\'hui, c\'est lundi.', alt: ['It\'s Monday today.', 'It\'s Monday.'], cat: 'Les jours et les dates' },
      { en: 'What\'s the date today?', fr: 'Quelle est la date aujourd\'hui ?', alt: ['What\'s today\'s date?'], cat: 'Les jours et les dates' },
      { en: 'It\'s the first of June.', fr: 'C\'est le premier juin.', alt: ['It\'s June the first.', 'It\'s June first.', 'It\'s the 1st of June.', 'It\'s June 1st.', 'It\'s 1st June.'], cat: 'Les jours et les dates' },
      { en: 'See you on Friday!', fr: 'À vendredi !', alt: ['See you Friday!'], cat: 'Les jours et les dates' },
      { en: 'See you tomorrow!', fr: 'À demain !', cat: 'Les jours et les dates' },
      { en: 'We\'re on holiday in August.', fr: 'Nous sommes en vacances en août.', alt: ['We\'re on vacation in August.'], cat: 'Les jours et les dates' },
      { en: 'Is the shop open on Sunday?', fr: 'Le magasin est-il ouvert dimanche ?', alt: ['Is the shop open on Sundays?', 'Is the store open on Sunday?'], cat: 'Les jours et les dates' },
      { en: 'I\'m busy this afternoon.', fr: 'Je suis occupé cet après-midi.', cat: 'Les jours et les dates' },
      // Les prix
      { en: 'How much is it?', fr: 'C\'est combien ?', alt: ['How much is this?', 'How much is that?', 'How much does it cost?'], cat: 'Les prix' },
      { en: 'It\'s ten euros.', fr: 'C\'est dix euros.', alt: ['That\'s ten euros.'], cat: 'Les prix' },
      { en: 'It\'s twelve pounds fifty.', fr: 'C\'est douze livres cinquante.', alt: ['That\'s twelve pounds fifty.', 'It\'s twelve fifty.'], cat: 'Les prix' },
      // Le téléphone
      { en: 'What\'s your phone number?', fr: 'Quel est votre numéro de téléphone ?', alt: ['What\'s your telephone number?', 'What\'s your number?'], cat: 'Le téléphone', note: 'On répond chiffre par chiffre : oh six, one two…' }
    ],
    quiz: [
      { id: 'en2-q-01', q: 'Comment dit-on « 15 » en anglais ?', choices: ['fiveteen', 'fifteen', 'fifty', 'fivety'], answer: 1, topic: 'Les nombres', sec: 'en2-s-nombres',
        why: { 0: 'Ce mot n\'existe pas : five devient fif- dans fifteen.', 2: 'fifty = 50 (les dizaines finissent en -ty).', 3: 'Ce mot n\'existe pas. 50 = fifty.' },
        explain: '15 = **fifteen** (five devient fif-, puis -teen). → He\'s fifteen. (Il a quinze ans.)', say: 'fifteen', level: 1 },
      { id: 'en2-q-02', q: 'Comment s\'écrit « 40 » ?', choices: ['fourty', 'fourteen', 'forty'], answer: 2, topic: 'Les nombres', sec: 'en2-s-grands',
        why: { 0: 'Piège classique : four (4) a un u, mais forty (40) n\'en a pas.', 1: 'fourteen = 14 (fin en -teen).' },
        explain: '40 = **forty**, sans u. → She\'s forty. (Elle a quarante ans.)', say: 'forty', level: 1 },
      { id: 'en2-q-03', q: 'Écoute. Quel nombre entends-tu ?', listen: true, say: 'thirteen', choices: ['13', '30', '3'], answer: 0, topic: 'Compréhension orale', sec: 'en2-s-nombres',
        why: { 1: '30 = thirty : on appuie sur le début (THIR-ty). Ici, la voix appuie sur la fin : thir-TEEN.', 2: '3 = three.' },
        explain: 'On a entendu **thirteen** (13) : la fin en -teen est accentuée, thir-**TEEN**. Pour 30, on dit **THIR**-ty.', level: 1 },
      { id: 'en2-q-04', q: 'Écoute. Quel âge a la personne ?', listen: true, say: 'I\'m sixty years old.', choices: ['16 ans', '60 ans', '66 ans', '6 ans'], answer: 1, topic: 'Compréhension orale', sec: 'en2-s-quotidien',
        why: { 0: '16 = sixteen (fin en -teen). Ici, on a entendu sixty.', 2: '66 = sixty-six.', 3: '6 = six.' },
        explain: '**I\'m sixty years old.** = J\'ai soixante ans. (sixty = 60, avec la voix sur le début : SIX-ty.)', level: 1 },
      { id: 'en2-q-05', q: 'Comment dit-on « J\'ai 60 ans » ?', choices: ['I have sixty years.', 'I\'m sixty.', 'I\'m sixty years.', 'I have sixty.'], answer: 1, topic: 'L\'âge', sec: 'en2-s-quotidien',
        why: { 0: 'C\'est du mot à mot du français : en anglais, l\'âge se dit avec to be, pas have.', 2: 'Si on dit years, il faut ajouter old : I\'m sixty years old.', 3: 'Pas de have pour l\'âge : on utilise to be.' },
        explain: 'L\'âge se dit avec **to be** : **I\'m sixty.** (ou I\'m sixty years old). Jamais « I have… ».', say: 'I\'m sixty.', level: 1 },
      { id: 'en2-q-06', q: 'Complète : How ___ are you? — I\'m sixty.', choices: ['old', 'much', 'many', 'age'], answer: 0, topic: 'L\'âge', sec: 'en2-s-quotidien',
        why: { 1: 'How much…? sert à demander un prix.', 2: 'How many…? sert à demander une quantité (combien de…).', 3: 'age est un nom (l\'âge) : on ne dit pas « How age ».' },
        explain: 'Pour demander l\'âge : **How old** are you? (Quel âge avez-vous ?)', say: 'How old are you?', level: 1 },
      { id: 'en2-q-07', q: 'Comment dit-on « 21 » ?', choices: ['twenty and one', 'twenty-one', 'one-twenty'], answer: 1, topic: 'Les nombres', sec: 'en2-s-grands',
        why: { 0: 'Pas de « and » comme dans « vingt et un » : on relie les deux par un trait d\'union.', 2: 'On dit d\'abord la dizaine, puis l\'unité.' },
        explain: '21 = **twenty-one** : la dizaine, un trait d\'union, puis l\'unité.', say: 'twenty-one', level: 1 },
      { id: 'en2-q-08', q: 'Le 1er juin se dit : the ___ of June.', choices: ['one', 'first', 'oneth'], answer: 1, topic: 'Les ordinaux', sec: 'en2-s-ordinaux',
        why: { 0: 'Pour une date, on utilise l\'ordinal (premier), pas le nombre.', 2: 'Ce mot n\'existe pas : premier = first.' },
        explain: 'Pour une date, on prend l\'**ordinal** : the **first** of June (le premier juin).', say: 'It\'s the first of June.', level: 1 },
      { id: 'en2-q-09', q: 'Le 3 mars se dit : the ___ of March.', choices: ['three', 'thirth', 'third', 'threeth'], answer: 2, topic: 'Les ordinaux', sec: 'en2-s-ordinaux',
        why: { 0: 'Pour une date, il faut l\'ordinal (troisième), pas le nombre.', 1: 'Ce mot n\'existe pas.', 3: 'Ce mot n\'existe pas : troisième = third, une des trois exceptions.' },
        explain: 'troisième = **third** (une exception, comme first et second). → the **third** of March (le 3 mars).', say: 'the third of March', level: 1 },
      { id: 'en2-q-10', q: 'Il est 3 h 30. Comment le dire ?', choices: ['It\'s three and half.', 'It\'s half to three.', 'It\'s half past three.'], answer: 2, topic: 'L\'heure', sec: 'en2-s-heure',
        why: { 0: 'C\'est du mot à mot du français : on dit half past three (la demie après trois heures).', 1: 'to = moins, avant l\'heure : « half to » ne se dit pas.' },
        explain: '3 h 30 = **half past three** (la demie après trois heures). On peut aussi dire three thirty.', say: 'It\'s half past three.', level: 1 },
      { id: 'en2-q-11', q: 'Il est 8 h 45. Comment le dire ?', choices: ['It\'s quarter past eight.', 'It\'s quarter to nine.', 'It\'s quarter to eight.', 'It\'s eight and quarter.'], answer: 1, topic: 'L\'heure', sec: 'en2-s-heure',
        why: { 0: 'quarter past eight = 8 h 15.', 2: 'quarter to eight = 7 h 45 : il faut compter vers l\'heure suivante, 9 h.', 3: 'C\'est du mot à mot du français : cette forme n\'existe pas.' },
        explain: '8 h 45 = « neuf heures moins le quart » = **quarter to nine**. On peut aussi dire eight forty-five.', say: 'It\'s quarter to nine.', level: 2 },
      { id: 'en2-q-12', q: 'Il est 4 heures pile. Comment le dire ?', choices: ['It\'s four hours.', 'It\'s four o\'clock.', 'It\'s four times.'], answer: 1, topic: 'L\'heure', sec: 'en2-s-heure',
        why: { 0: 'hours = des heures de durée (four hours = pendant quatre heures). Pour l\'heure qu\'il est : o\'clock.', 2: 'four times = quatre fois.' },
        explain: 'Heure pile : **o\'clock**. → It\'s four **o\'clock**. (Il est quatre heures.)', say: 'It\'s four o\'clock.', level: 1 },
      { id: 'en2-q-13', q: 'Écoute. Quelle heure est-il ?', listen: true, say: 'It\'s quarter past six.', choices: ['5 h 45', '6 h 15', '6 h 45', '6 h 30'], answer: 1, topic: 'Compréhension orale', sec: 'en2-s-heure',
        why: { 0: '5 h 45 = quarter to six.', 2: '6 h 45 = quarter to seven.', 3: '6 h 30 = half past six.' },
        explain: '**quarter past six** = le quart après six heures = 6 h 15 (six heures et quart).', level: 2 },
      { id: 'en2-q-14', q: 'Ton rendez-vous est à 15 h. En anglais, on écrit plutôt :', choices: ['3 a.m.', '3 p.m.', '15 p.m.'], answer: 1, topic: 'L\'heure', sec: 'en2-s-heure',
        why: { 0: 'a.m. = de minuit à midi : 3 a.m. = 3 h du matin !', 2: 'Avec a.m. et p.m., on compte seulement de 1 à 12.' },
        explain: '15 h = 3 heures de l\'après-midi = **3 p.m.** (p.m. = de midi à minuit).', say: 'three p.m.', level: 2 },
      { id: 'en2-q-15', q: 'Complète : See you ___ Monday!', choices: ['in', 'at', 'on'], answer: 2, topic: 'at, on, in', sec: 'en2-s-prepositions',
        why: { 0: 'in sert pour les mois, les saisons, les années.', 1: 'at sert pour les heures.' },
        explain: 'Avec un jour : **on**. → See you **on** Monday! (À lundi !)', say: 'See you on Monday!', level: 1 },
      { id: 'en2-q-16', q: 'Complète : My birthday is ___ July.', choices: ['in', 'on', 'at'], answer: 0, topic: 'at, on, in', sec: 'en2-s-prepositions',
        why: { 1: 'on sert pour un jour ou une date précise (on the 5th of July).', 2: 'at sert pour les heures.' },
        explain: 'Avec un mois : **in**. → My birthday is **in** July. (Mon anniversaire est en juillet.)', say: 'My birthday is in July.', level: 1 },
      { id: 'en2-q-17', q: 'Complète : The film is ___ eight o\'clock.', choices: ['on', 'at', 'in'], answer: 1, topic: 'at, on, in', sec: 'en2-s-prepositions',
        why: { 0: 'on sert pour les jours et les dates.', 2: 'in sert pour les mois, les saisons, les années, et dans in the morning…' },
        explain: 'Avec une heure : **at**. → The film is **at** eight o\'clock. (Le film est à huit heures.)', say: 'The film is at eight o\'clock.', level: 1 },
      { id: 'en2-q-18', q: 'Complète : It\'s cold ___ night. (Il fait froid la nuit.)', choices: ['at', 'on', 'in'], answer: 0, topic: 'at, on, in', sec: 'en2-s-prepositions',
        why: { 1: 'on sert pour les jours et les dates.', 2: 'On dit in the morning, in the evening… mais night est l\'exception : at night.' },
        explain: 'Exception à retenir : **at night** (la nuit). Mais in the morning, in the afternoon, in the evening.', say: 'It\'s cold at night.', level: 2 },
      { id: 'en2-q-19', q: 'Quel jour vient après Tuesday ?', choices: ['Thursday', 'Wednesday', 'Monday', 'Friday'], answer: 1, topic: 'Les jours', sec: 'en2-s-calendrier',
        why: { 0: 'Thursday = jeudi : il vient après Wednesday.', 2: 'Monday = lundi : il vient avant Tuesday.', 3: 'Friday = vendredi.' },
        explain: 'Tuesday (mardi) → **Wednesday** (mercredi) → Thursday (jeudi). Wednesday se prononce « wènz-dé ».', say: 'Tuesday, Wednesday, Thursday', level: 1 },
      { id: 'en2-q-20', q: 'En anglais, les jours et les mois s\'écrivent…', choices: ['avec une majuscule', 'en minuscules, comme en français', 'avec une majuscule seulement en début de phrase'], answer: 0, topic: 'Les jours', sec: 'en2-s-calendrier',
        why: { 1: 'Contrairement au français, l\'anglais met une majuscule aux jours et aux mois.', 2: 'La majuscule est obligatoire partout dans la phrase.' },
        explain: 'Jours et mois : **toujours une majuscule** : Monday, May. (Les saisons, non : summer.)', say: 'Monday, the first of May', level: 1 },
      { id: 'en2-q-21', q: 'Écoute. Combien ça coûte ?', listen: true, say: 'It\'s twelve pounds fifty.', choices: ['20,50 £', '12,50 £', '12,15 £', '2,50 £'], answer: 1, topic: 'Compréhension orale', sec: 'en2-s-quotidien',
        why: { 0: '20 = twenty. Ici, on a entendu twelve (12).', 2: '15 = fifteen. Ici, on a entendu fifty (50).', 3: 'On a entendu twelve (12), pas two (2).' },
        explain: '**twelve pounds fifty** = 12,50 £ (douze livres cinquante).', level: 2 },
      { id: 'en2-q-22', q: 'Écoute. Quel est le numéro de téléphone ?', listen: true, say: 'My number is oh two, four one, six eight, nine three, five oh.', choices: ['02 41 68 93 50', '02 41 68 93 15', '20 41 68 93 50', '02 14 68 93 50'], answer: 0, topic: 'Compréhension orale', sec: 'en2-s-quotidien',
        why: { 1: 'La fin est five, oh (5, 0) et non fifteen (15).', 2: 'Le numéro commence par oh, two (0, 2).', 3: 'On a entendu four, one (4, 1), pas one, four.' },
        explain: 'Au téléphone, on dit les chiffres un par un, et 0 se dit **oh** : oh two, four one, six eight, nine three, five oh = 02 41 68 93 50.', level: 2 },
      { id: 'en2-q-23', q: 'Comment lit-on « 1,500 » (écrit à l\'anglaise) ?', choices: ['one point five', 'one thousand five hundred', 'one hundred and fifty'], answer: 1, topic: 'Les nombres', sec: 'en2-s-grands',
        why: { 0: 'one point five s\'écrirait 1.5 (avec un point).', 2: 'one hundred and fifty = 150.' },
        explain: 'En anglais, la **virgule** sépare les milliers : 1,500 = 1 500 = **one thousand five hundred**.', say: 'one thousand five hundred', level: 2 },
      { id: 'en2-q-24', q: 'Comment dit-on l\'année 1965 ?', choices: ['nineteen sixty-five', 'nineteen six five', 'one nine six five'], answer: 0, topic: 'Les années', sec: 'en2-s-calendrier',
        why: { 1: 'On lit deux nombres, 19 et 65 (sixty-five), et non les chiffres un par un.', 2: 'Chiffre par chiffre, c\'est pour le téléphone, pas pour les années.' },
        explain: 'Une année se coupe en deux : 19 / 65 → **nineteen sixty-five**.', say: 'nineteen sixty-five', level: 2 },
      { id: 'en2-q-25', q: 'Au magasin, comment demander « C\'est combien ? »', choices: ['How many is it?', 'How much is it?', 'How is it much?'], answer: 1, topic: 'Les prix', sec: 'en2-s-quotidien',
        why: { 0: 'How many…? sert à compter des choses (combien de…).', 2: 'How much reste groupé en tête de question, puis viennent le verbe et le sujet.' },
        explain: 'Pour un prix : **How much is it?** (C\'est combien ?) — Réponse : It\'s ten euros.', say: 'How much is it?', level: 1 }
    ],
    exercises: [
      { id: 'en2-x-01', prompt: 'Écris en lettres : 15', answers: ['fifteen'], topic: 'Les nombres', sec: 'en2-s-nombres', strict: true,
        hint: '5 + -teen, mais five change un peu.', explain: '15 = **fifteen**. → He\'s fifteen. (Il a quinze ans.)', rule: '13 à 19 : -teen (attention : thirteen, fifteen).',
        mistakes: [{ text: 'fiveteen', msg: 'Presque ! five devient **fif-** : fifteen.' }, { text: 'fifty', msg: 'fifty = 50. Pour 15 : fif**teen**.' }], say: 'fifteen', level: 1 },
      { id: 'en2-x-02', prompt: 'Écris en lettres : 40', answers: ['forty'], topic: 'Les nombres', sec: 'en2-s-grands', strict: true,
        hint: 'Attention à l\'orthographe : ce n\'est pas tout à fait four + ty.', explain: '40 = **forty** (sans u). → She\'s forty. (Elle a quarante ans.)', rule: 'four (4) · fourteen (14) · mais **forty** (40), sans u.',
        mistakes: [{ text: 'fourty', msg: 'Piège classique : forty (40) s\'écrit **sans u**, alors que four (4) en a un.' }, { text: 'fourteen', msg: 'fourteen = 14 (-teen). Pour 40 : **forty** (-ty).' }], say: 'forty', level: 1 },
      { id: 'en2-x-03', prompt: 'Écris en lettres : 12', answers: ['twelve'], topic: 'Les nombres', sec: 'en2-s-nombres', strict: true,
        hint: '11 et 12 sont des exceptions.', explain: '12 = **twelve**. → It\'s twelve o\'clock. (Il est douze heures.)', rule: '11 = eleven · 12 = twelve (à apprendre par cœur).',
        mistakes: [{ text: 'twoteen', msg: '12 ne suit pas la règle -teen : c\'est **twelve**.' }, { text: 'twenty', msg: 'twenty = 20. Pour 12 : **twelve**.' }], say: 'twelve', level: 1 },
      { id: 'en2-x-04', prompt: 'Écris en lettres : 21', answers: ['twenty-one'], topic: 'Les nombres', sec: 'en2-s-grands', strict: true,
        hint: 'La dizaine, un trait d\'union, puis l\'unité.', explain: '21 = **twenty-one** (sans « and »).', rule: 'Nombres composés : dizaine**-**unité (twenty-one, thirty-five…).',
        mistakes: [{ text: 'twenty and one', msg: 'Pas de « and » comme dans « vingt et un » : **twenty-one**.' }, { text: 'twentyone', msg: 'On sépare les deux mots par un trait d\'union : **twenty-one**.' }], say: 'twenty-one', level: 1 },
      { id: 'en2-x-05', prompt: 'Écris en lettres : 300', answers: ['three hundred'], topic: 'Les nombres', sec: 'en2-s-grands', strict: true,
        hint: 'cent = hundred.', explain: '300 = **three hundred** (sans s).', rule: 'hundred et thousand ne prennent pas de **s** après un nombre.',
        mistakes: [{ text: 'three hundreds', msg: 'hundred ne prend pas de -s après un nombre : **three hundred**.' }, { text: 'three cents', msg: '« cent » est un mot français (et en anglais, a cent = un centime !). 100 = **hundred**.' }], say: 'three hundred', level: 1 },
      { id: 'en2-x-06', prompt: 'Écris en lettres : 105', answers: ['one hundred and five', 'a hundred and five'], topic: 'Les nombres', sec: 'en2-s-grands', strict: true,
        hint: 'cent = a hundred (ou one hundred), puis and + l\'unité.', explain: '105 = **a hundred and five** (ou one hundred and five ; les Américains disent souvent one hundred five).', rule: 'Au Royaume-Uni : hundred **and** + le reste (two hundred and fifty).',
        mistakes: [{ text: 'one hundred and fifty', msg: 'fifty = 50 : ça ferait 150. Pour 105 : one hundred and **five**.' }, { text: 'hundred and five', msg: 'Devant hundred, il faut **a** ou **one** : a hundred and five.' }], say: 'a hundred and five', level: 2 },
      { id: 'en2-x-07', prompt: 'Écris en lettres : 2 000', answers: ['two thousand'], topic: 'Les nombres', sec: 'en2-s-grands', strict: true,
        hint: 'mille = thousand.', explain: '2 000 = **two thousand** (sans s). À l\'anglaise, on l\'écrit 2,000.', rule: 'hundred et thousand ne prennent pas de **s** après un nombre.',
        mistakes: [{ text: 'two thousands', msg: 'thousand ne prend pas de -s après un nombre : **two thousand**.' }, { text: 'two mille', msg: '« mille » est un mot français. 1 000 = **thousand**.' }], say: 'two thousand', level: 1 },
      { id: 'en2-x-08', prompt: 'Écris l\'ordinal en lettres : 3e (troisième)', answers: ['third'], topic: 'Les ordinaux', sec: 'en2-s-ordinaux', strict: true,
        hint: 'C\'est une des trois exceptions.', explain: '3e = **third** (abrégé : 3rd).', rule: 'first, second, third : exceptions ; ensuite -th (fourth, fifth…).',
        mistakes: [{ text: 'threeth', msg: 'troisième est une exception : **third**.' }, { text: 'three', msg: 'three = trois. Troisième (ordinal) = **third**.' }, { text: 'thirth', msg: 'Presque ! L\'ordinal de three est **third** (finit par -rd).' }], say: 'third', level: 1 },
      { id: 'en2-x-09', prompt: 'Écris l\'ordinal en lettres : 1er (premier)', answers: ['first'], topic: 'Les ordinaux', sec: 'en2-s-ordinaux', strict: true,
        hint: 'C\'est une des trois exceptions.', explain: '1er = **first** (abrégé : 1st). → It\'s the first of May. (C\'est le premier mai.)', rule: 'first, second, third : exceptions ; ensuite -th (fourth, fifth…).',
        mistakes: [{ text: 'oneth', msg: 'premier est une exception : **first**.' }, { text: 'one', msg: 'one = un. Premier (ordinal) = **first**.' }], say: 'first', level: 1 },
      { id: 'en2-x-10', prompt: 'Écris l\'ordinal en lettres : 2e (deuxième)', answers: ['second'], topic: 'Les ordinaux', sec: 'en2-s-ordinaux', strict: true,
        hint: 'C\'est une des trois exceptions, et il ressemble au français.', explain: '2e = **second** (abrégé : 2nd).', rule: 'first, second, third : exceptions ; ensuite -th (fourth, fifth…).',
        mistakes: [{ text: 'twoth', msg: 'deuxième est une exception : **second**.' }, { text: 'two', msg: 'two = deux. Deuxième (ordinal) = **second**.' }], say: 'second', level: 1 },
      { id: 'en2-x-11', prompt: 'Traduis : J\'ai 60 ans.', answers: ['I\'m sixty', 'I\'m sixty years old'], topic: 'L\'âge', sec: 'en2-s-quotidien',
        hint: 'Attention : pas de « have » pour l\'âge.', explain: '→ **I\'m sixty.** (ou I\'m sixty years old). En anglais, on « est » son âge.', rule: 'L\'âge : sujet + **to be** + nombre (+ years old).',
        mistakes: [{ text: 'I have sixty years', msg: 'En anglais, l\'âge se dit avec **to be** (être), pas have : **I\'m sixty**.' }, { text: 'I have sixty', msg: 'Pas de have pour l\'âge : on utilise **to be** → I\'m sixty.' }, { text: 'I\'m sixty years', msg: 'Avec years, il faut ajouter **old** : I\'m sixty years old (ou simplement I\'m sixty).' }], say: 'I\'m sixty.', level: 1 },
      { id: 'en2-x-12', prompt: 'Traduis : Quel âge avez-vous ?', answers: ['How old are you', 'What is your age'], topic: 'L\'âge', sec: 'en2-s-quotidien',
        hint: 'How + old + …', explain: '→ **How old are you?** (mot à mot : combien vieux êtes-vous ?)', rule: 'Demander l\'âge : **How old** + to be + sujet ?',
        mistakes: [{ text: 'How many years have you', msg: 'C\'est du mot à mot du français. En anglais, on demande **How old are you?**' }, { text: 'How old you are', msg: 'Dans une question, le verbe vient avant le sujet : How old **are you**?' }, { text: 'How old is you', msg: 'Avec you : **are** → How old are you?' }], say: 'How old are you?', level: 1 },
      { id: 'en2-x-13', prompt: 'Complète avec le bon verbe : My friend ___ seventy-two. (Mon ami a 72 ans.)', answers: ['is'], topic: 'L\'âge', sec: 'en2-s-quotidien', strict: true,
        hint: 'Pour l\'âge, quel verbe en anglais ?', explain: 'L\'âge se dit avec to be : My friend **is** seventy-two.', rule: 'L\'âge : **to be** + nombre, jamais have.',
        mistakes: [{ text: 'has', msg: 'Pour l\'âge, on utilise **to be** : My friend **is** seventy-two.' }, { text: 'have', msg: 'Pas de have pour l\'âge, et avec my friend (= he) : **is**.' }, { text: 'are', msg: 'My friend = une seule personne (he) : **is**.' }], say: 'My friend is seventy-two.', level: 1 },
      { id: 'en2-x-14', prompt: 'Réponds à « What time is it? » : il est 4 heures pile.', answers: ['It\'s four o\'clock', 'It\'s four', 'Four o\'clock'], topic: 'L\'heure', sec: 'en2-s-heure',
        hint: 'It\'s + heure + le mot pour « pile ».', explain: '→ **It\'s four o\'clock.** (Il est quatre heures.)', rule: 'Heure pile : It\'s + heure + **o\'clock**.',
        mistakes: [{ text: 'It\'s four hours', msg: 'hours = des heures de durée. Pour l\'heure qu\'il est : **o\'clock** → It\'s four o\'clock.' }, { text: 'Is four o\'clock', msg: 'Il faut le sujet **it** : It\'s four o\'clock.' }], say: 'It\'s four o\'clock.', level: 1 },
      { id: 'en2-x-15', prompt: 'Réponds à « What time is it? » : il est 6 h 30.', answers: ['It\'s half past six', 'It\'s six thirty', 'It\'s half six', 'Half past six', 'Six thirty'], topic: 'L\'heure', sec: 'en2-s-heure',
        hint: 'La demie après six heures…', explain: '→ **It\'s half past six.** (ou It\'s six thirty)', rule: '… et demie = **half past** + heure.',
        mistakes: [{ text: 'It\'s six and half', msg: 'On ne traduit pas « six heures et demie » mot à mot : on dit **half past six** (la demie après six).' }, { text: 'It\'s six and a half', msg: 'On ne traduit pas « six heures et demie » mot à mot : on dit **half past six** (la demie après six).' }, { text: 'It\'s half to six', msg: 'to = moins (avant l\'heure). 6 h 30 = half **past** six.' }], say: 'It\'s half past six.', level: 1 },
      { id: 'en2-x-16', prompt: 'Réponds à « What time is it? » : il est 10 h 15.', answers: ['It\'s quarter past ten', 'It\'s a quarter past ten', 'It\'s ten fifteen', 'Quarter past ten', 'A quarter past ten', 'Ten fifteen'], topic: 'L\'heure', sec: 'en2-s-heure',
        hint: 'Le quart après dix heures…', explain: '→ **It\'s quarter past ten.** (ou It\'s ten fifteen)', rule: '… et quart = **quarter past** + heure.',
        mistakes: [{ text: 'It\'s quarter to ten', msg: 'quarter to ten = 9 h 45. Pour 10 h 15 : quarter **past** ten.' }, { text: 'It\'s ten and quarter', msg: 'Pas de « and » : on dit **quarter past ten** (le quart après dix heures).' }], say: 'It\'s quarter past ten.', level: 1 },
      { id: 'en2-x-17', prompt: 'Réponds à « What time is it? » : il est 7 h 45.', answers: ['It\'s quarter to eight', 'It\'s a quarter to eight', 'It\'s seven forty-five', 'Quarter to eight', 'A quarter to eight', 'Seven forty-five'], topic: 'L\'heure', sec: 'en2-s-heure',
        hint: 'Comme en français : huit heures moins le quart.', explain: '→ **It\'s quarter to eight.** (ou It\'s seven forty-five)', rule: '… moins le quart = **quarter to** + l\'heure suivante.',
        mistakes: [{ text: 'It\'s quarter to seven', msg: 'quarter to seven = 6 h 45. Pour 7 h 45, on compte vers 8 h : quarter to **eight**.' }, { text: 'It\'s quarter past seven', msg: 'quarter past seven = 7 h 15. Pour 7 h 45 : quarter **to** eight.' }, { text: 'It\'s eight less quarter', msg: 'C\'est du mot à mot du français ! « moins le quart » = **quarter to** : quarter to eight.' }], say: 'It\'s quarter to eight.', level: 2 },
      { id: 'en2-x-18', prompt: 'Complète avec at, on ou in : The film is ___ nine o\'clock.', answers: ['at'], topic: 'at, on, in', sec: 'en2-s-prepositions', strict: true,
        hint: 'nine o\'clock est une heure.', explain: 'Avec une heure : **at**. → The film is **at** nine o\'clock. (Le film est à neuf heures.)', rule: '**at** + heure · **on** + jour · **in** + mois, saison, année',
        mistakes: [{ text: 'in', msg: 'in sert pour les mois, les saisons, les années. Avec une heure : **at**.' }, { text: 'on', msg: 'on sert pour les jours et les dates. Avec une heure : **at**.' }], say: 'The film is at nine o\'clock.', level: 1 },
      { id: 'en2-x-19', prompt: 'Complète avec at, on ou in : See you ___ Friday!', answers: ['on'], topic: 'at, on, in', sec: 'en2-s-prepositions', strict: true,
        hint: 'Friday est un jour.', explain: 'Avec un jour : **on**. → See you **on** Friday! (À vendredi !)', rule: '**at** + heure · **on** + jour · **in** + mois, saison, année',
        mistakes: [{ text: 'in', msg: 'in sert pour les mois, les saisons, les années. Avec un jour : **on**.' }, { text: 'at', msg: 'at sert pour les heures. Avec un jour : **on**.' }], say: 'See you on Friday!', level: 1 },
      { id: 'en2-x-20', prompt: 'Complète avec at, on ou in : We\'re on holiday ___ August.', answers: ['in'], topic: 'at, on, in', sec: 'en2-s-prepositions', strict: true,
        hint: 'August est un mois.', explain: 'Avec un mois : **in**. → We\'re on holiday **in** August. (Nous sommes en vacances en août.)', rule: '**at** + heure · **on** + jour · **in** + mois, saison, année',
        mistakes: [{ text: 'on', msg: 'on sert pour un jour ou une date. Avec un mois seul : **in**.' }, { text: 'at', msg: 'at sert pour les heures. Avec un mois : **in**.' }], say: 'We\'re on holiday in August.', level: 1 },
      { id: 'en2-x-21', prompt: 'Complète avec at, on ou in : I\'m tired ___ the evening.', answers: ['in'], topic: 'at, on, in', sec: 'en2-s-prepositions', strict: true,
        hint: 'Le matin, l\'après-midi, le soir : toujours le même petit mot.', explain: '**in** the evening (le soir). → I\'m tired **in** the evening. (Je suis fatigué le soir.)', rule: '**in** the morning / afternoon / evening · mais **at** night',
        mistakes: [{ text: 'at', msg: 'On dit at night, mais **in** the evening (comme in the morning, in the afternoon).' }, { text: 'on', msg: 'on sert pour les jours et les dates. Le soir : **in** the evening.' }], say: 'I\'m tired in the evening.', level: 2 },
      { id: 'en2-x-22', prompt: 'Complète avec at, on ou in : My birthday is ___ the fifth of May.', answers: ['on'], topic: 'at, on, in', sec: 'en2-s-prepositions', strict: true,
        hint: 'Une date précise, c\'est un jour.', explain: 'Avec une date : **on**. → My birthday is **on** the fifth of May. (Mon anniversaire est le 5 mai.)', rule: '**on** + date (on the fifth of May) · **in** + mois seul (in May)',
        mistakes: [{ text: 'in', msg: 'in va avec un mois seul (in May). Avec une date précise : **on** the fifth of May.' }, { text: 'at', msg: 'at sert pour les heures. Avec une date : **on**.' }], say: 'My birthday is on the fifth of May.', level: 2 },
      { id: 'en2-x-23', prompt: 'Traduis : C\'est combien ?', answers: ['How much is it', 'How much is this', 'How much is that', 'How much does it cost'], topic: 'Les prix', sec: 'en2-s-quotidien',
        hint: 'combien (pour un prix) = how much.', explain: '→ **How much is it?** (C\'est combien ?)', rule: 'Prix : **How much** is it? — It\'s + prix.',
        mistakes: [{ text: 'How many is it', msg: 'How many sert à compter des choses (combien de…). Pour un prix : **How much**.' }, { text: 'How much it is', msg: 'Dans une question, le verbe vient avant le sujet : How much **is it**?' }], say: 'How much is it?', level: 1 },
      { id: 'en2-x-24', prompt: 'Traduis : C\'est cinq livres. (un prix au Royaume-Uni)', answers: ['It\'s five pounds', 'That\'s five pounds'], topic: 'Les prix', sec: 'en2-s-quotidien',
        hint: 'la livre (monnaie) = pound.', explain: '→ **It\'s five pounds.** (On dit la monnaie après le nombre, avec un s au pluriel.)', rule: 'Prix : It\'s + nombre + monnaie (euros, pounds, dollars).',
        mistakes: [{ text: 'It\'s five livres', msg: 'La livre (monnaie) = **pound** en anglais : five pounds.' }, { text: 'Is five pounds', msg: 'Il faut le sujet **it** : It\'s five pounds.' }], say: 'It\'s five pounds.', level: 1 },
      { id: 'en2-x-25', prompt: 'Traduis : Mon anniversaire est en juillet.', answers: ['My birthday is in July'], topic: 'Les dates', sec: 'en2-s-calendrier',
        hint: 'anniversaire (de naissance) = birthday ; en + mois = in.', explain: '→ **My birthday is in July.**', rule: 'Anniversaire = **birthday** · en + mois = **in**.',
        mistakes: [{ text: 'My anniversary is in July', msg: 'Faux ami : anniversary = anniversaire de mariage. Pour l\'anniversaire de naissance : **birthday**.' }, { text: 'My birthday is on July', msg: 'Avec un mois seul : **in** → in July.' }, { text: 'My birthday is in June', msg: 'June = juin. Juillet = **July**.' }], say: 'My birthday is in July.', level: 1 },
      { id: 'en2-x-26', prompt: 'Écris la date comme on la dit à l\'oral : le 14 juillet.', answers: ['the fourteenth of July', 'July the fourteenth', 'July fourteenth', 'the 14th of July', 'July the 14th', 'July 14th'], topic: 'Les dates', sec: 'en2-s-calendrier',
        hint: 'the + ordinal + of + mois.', explain: '→ **the fourteenth of July** (mot à mot : le quatorzième de juillet).', rule: 'Date : **the** + ordinal + **of** + mois (the fifth of May).',
        mistakes: [{ text: 'the fourteen of July', msg: 'Pour une date, il faut l\'ordinal : the four**teenth** of July.' }, { text: 'fourteen July', msg: 'À l\'oral, on utilise l\'ordinal et the… of : **the fourteenth of July**.' }], say: 'the fourteenth of July', level: 2 },
      { id: 'en2-x-27', prompt: 'Écris comme on le dit au téléphone (chiffre par chiffre, 0 = oh) : 07 52', answers: ['oh seven five two', 'zero seven five two', 'o seven five two'], topic: 'Le téléphone', sec: 'en2-s-quotidien',
        hint: 'Quatre chiffres, quatre mots.', explain: '→ **oh seven, five two**. Au téléphone, on dit les chiffres un par un, et 0 se dit oh.', rule: 'Téléphone : chiffre par chiffre · 0 = **oh** · 44 = double four.',
        mistakes: [{ text: 'oh seven fifty-two', msg: 'Au téléphone, on dit les chiffres **un par un** : five, two (pas fifty-two).' }, { text: 'seven five two', msg: 'N\'oublie pas le 0 du début : on dit **oh** (ou zero).' }], say: 'oh seven, five two', level: 2 },
      { id: 'en2-x-28', prompt: 'Traduis : À demain !', answers: ['See you tomorrow'], topic: 'Le temps qui passe', sec: 'en2-s-prepositions',
        hint: 'À bientôt = See you soon. Et à demain ?', explain: '→ **See you tomorrow!**', rule: 'À… (pour se quitter) = **See you** + moment : See you soon, See you tomorrow, See you on Monday.',
        mistakes: [{ text: 'See you yesterday', msg: 'yesterday = hier ! Demain = **tomorrow**.' }, { text: 'To tomorrow', msg: 'Le mot à mot du français ne marche pas : on dit **See you tomorrow!**' }], say: 'See you tomorrow!', level: 1 },
      { id: 'en2-x-29', prompt: 'Remets dans l\'ordre : is / time / it / what / ?', answers: ['What time is it'], topic: 'L\'heure', sec: 'en2-s-heure',
        hint: 'What time en premier, puis le verbe, puis le sujet.', explain: '→ **What time is it?** (Quelle heure est-il ?)', rule: 'Question : mot interrogatif + **verbe + sujet** ?',
        mistakes: [{ text: 'What time it is', msg: 'Dans une question, le verbe is vient avant it : What time **is it**?' }, { text: 'What is it time', msg: 'What time reste groupé au début : **What time** is it?' }], say: 'What time is it?', level: 1 },
      { id: 'en2-x-30', prompt: 'Traduis : Aujourd\'hui, c\'est lundi.', answers: ['Today is Monday', 'It\'s Monday today', 'It\'s Monday', 'Today it\'s Monday'], topic: 'Les jours', sec: 'en2-s-calendrier',
        hint: 'aujourd\'hui = today ; lundi = Monday (avec une majuscule).', explain: '→ **Today is Monday.** (ou It\'s Monday today)', rule: 'Jours : majuscule et pas d\'article (Monday, pas the Monday).',
        mistakes: [{ text: 'Today is the Monday', msg: 'Pas de the devant un jour : Today is **Monday**.' }, { text: 'Yesterday is Monday', msg: 'yesterday = hier. Aujourd\'hui = **today**.' }], say: 'Today is Monday.', level: 1 }
    ]
  });
})();
