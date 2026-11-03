/* Anglais — chapitre 3 : La famille et les gens (vocabulaire de la famille, my/his/her, le 's, have got, pluriels irréguliers, décrire quelqu'un) */
APP.registerChapter({
  id: 'en3', subject: 'anglais', num: 3,
  title: 'La famille et les gens', subtitle: 'my, his, her · le \'s · have got · décrire quelqu\'un',
  vocabSec: 'en3-s-vocab',
  sections: [
    {
      id: 'en3-s-vocab', title: 'Les mots de la famille',
      html: `
<p>Voici les mots pour parler de ta famille et des gens autour de toi. Touche un mot anglais pour l'entendre.</p>
<h3>Les parents et les enfants</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">mother</span> · <span class="say">mum</span></td><td>la mère · maman</td></tr>
<tr><td><span class="say">father</span> · <span class="say">dad</span></td><td>le père · papa</td></tr>
<tr><td><span class="say">parents</span></td><td>les parents (le père et la mère)</td></tr>
<tr><td><span class="say">son</span></td><td>le fils</td></tr>
<tr><td><span class="say">daughter</span></td><td>la fille (mon enfant)</td></tr>
<tr><td><span class="say">a child</span> · <span class="say">two children</span></td><td>un enfant · deux enfants</td></tr>
<tr><td><span class="say">baby</span></td><td>le bébé</td></tr>
<tr><td><span class="say">family</span></td><td>la famille</td></tr></table>
<h3>Frères, sœurs et couple</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">brother</span></td><td>le frère</td></tr>
<tr><td><span class="say">sister</span></td><td>la sœur</td></tr>
<tr><td><span class="say">husband</span></td><td>le mari</td></tr>
<tr><td><span class="say">wife</span></td><td>la femme (l'épouse)</td></tr></table>
<h3>Grands-parents et petits-enfants</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">grandmother</span> · <span class="say">grandma</span></td><td>la grand-mère · mamie</td></tr>
<tr><td><span class="say">grandfather</span> · <span class="say">grandpa</span></td><td>le grand-père · papi</td></tr>
<tr><td><span class="say">grandparents</span></td><td>les grands-parents</td></tr>
<tr><td><span class="say">grandson</span></td><td>le petit-fils</td></tr>
<tr><td><span class="say">granddaughter</span></td><td>la petite-fille</td></tr>
<tr><td><span class="say">grandchildren</span></td><td>les petits-enfants</td></tr></table>
<h3>Le reste de la famille</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">uncle</span></td><td>l'oncle</td></tr>
<tr><td><span class="say">aunt</span></td><td>la tante</td></tr>
<tr><td><span class="say">cousin</span></td><td>le cousin, la cousine</td></tr>
<tr><td><span class="say">nephew</span></td><td>le neveu</td></tr>
<tr><td><span class="say">niece</span></td><td>la nièce</td></tr>
<tr><td><span class="say">mother-in-law</span></td><td>la belle-mère (la mère de mon mari, de ma femme)</td></tr>
<tr><td><span class="say">father-in-law</span></td><td>le beau-père (le père de mon mari, de ma femme)</td></tr>
<tr><td><span class="say">son-in-law</span></td><td>le gendre</td></tr>
<tr><td><span class="say">daughter-in-law</span></td><td>la belle-fille (la femme de mon fils)</td></tr></table>
<h3>Les gens</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">a man</span> · <span class="say">two men</span></td><td>un homme · deux hommes</td></tr>
<tr><td><span class="say">a woman</span> · <span class="say">two women</span></td><td>une femme · deux femmes</td></tr>
<tr><td><span class="say">a person</span> · <span class="say">two people</span></td><td>une personne · deux personnes</td></tr>
<tr><td><span class="say">people</span></td><td>les gens</td></tr>
<tr><td><span class="say">boy</span></td><td>le garçon</td></tr>
<tr><td><span class="say">girl</span></td><td>la jeune fille, la fillette</td></tr>
<tr><td><span class="say">friend</span></td><td>l'ami, l'amie</td></tr>
<tr><td><span class="say">neighbour</span></td><td>le voisin, la voisine</td></tr></table>
<div class="callout key"><b>À retenir</b> <span class="say">cousin</span> sert pour un garçon ou une fille : <span class="say">my cousin</span> = mon cousin ou ma cousine. Et <span class="say">-in-law</span> (« par la loi », c'est-à-dire par le mariage) donne toute la belle-famille.</div>
<div class="callout warn"><b>Piège : parents</b> En anglais, <span class="say">parents</span> = seulement le père et la mère. Pour « toute ma famille » (oncles, cousins…), on dit <span class="say">my family</span>.</div>
<div class="callout warn"><b>Piège : daughter ou girl ?</b> <span class="say">my daughter</span> = ma fille (mon enfant). <span class="say">a girl</span> = une fille (le contraire d'un garçon), une jeune fille.</div>
<div class="callout info"><b>Prononciation</b> Le <i>th</i> de <span class="say">mother</span>, <span class="say">father</span>, <span class="say">brother</span> se prononce la langue entre les dents. Dans <span class="say">daughter</span>, le <i>gh</i> ne se prononce pas (« dô-teu »). <span class="say">son</span> se prononce comme <span class="say">sun</span> (le soleil).</div>`
    },
    {
      id: 'en3-s-possessifs', title: 'my, your, his, her… : mon, ton, son',
      html: `
<p>Pour dire à qui est quelque chose (mon, ton, son…), on met un petit mot devant le nom : c'est l'<b>adjectif possessif</b>.</p>
<table><tr><th>Pronom</th><th>Possessif</th><th>Exemple</th></tr>
<tr><td><span class="say">I</span> (je)</td><td><span class="say">my</span> = mon, ma, mes</td><td><span class="say">my brother</span> — mon frère</td></tr>
<tr><td><span class="say">you</span> (tu, vous)</td><td><span class="say">your</span> = ton, ta, tes, votre, vos</td><td><span class="say">your sister</span> — ta sœur, votre sœur</td></tr>
<tr><td><span class="say">he</span> (il)</td><td><span class="say">his</span> = son, sa, ses (à lui)</td><td><span class="say">his wife</span> — sa femme</td></tr>
<tr><td><span class="say">she</span> (elle)</td><td><span class="say">her</span> = son, sa, ses (à elle)</td><td><span class="say">her husband</span> — son mari</td></tr>
<tr><td><span class="say">it</span> (chose, animal)</td><td><span class="say">its</span> = son, sa, ses</td><td><span class="say">its name</span> — son nom (du chien)</td></tr>
<tr><td><span class="say">we</span> (nous)</td><td><span class="say">our</span> = notre, nos</td><td><span class="say">our children</span> — nos enfants</td></tr>
<tr><td><span class="say">they</span> (ils, elles)</td><td><span class="say">their</span> = leur, leurs</td><td><span class="say">their parents</span> — leurs parents</td></tr></table>
<div class="callout key"><b>À retenir</b> Le possessif ne change jamais : pas de masculin, pas de féminin, pas de pluriel. <span class="say">my father</span>, <span class="say">my mother</span>, <span class="say">my parents</span> : toujours <b>my</b>.</div>
<h3>Le grand piège : his ou her ?</h3>
<p>En français, « son » ou « sa » dépend de la chose possédée (<i>sa</i> voiture, <i>son</i> vélo). En anglais, on regarde <b>la personne qui possède</b> :</p>
<ul>
<li>c'est un homme → <b>his</b> : <span class="say">Paul and his mother</span> — Paul et sa mère.</li>
<li>c'est une femme → <b>her</b> : <span class="say">Marie and her father</span> — Marie et son père.</li>
</ul>
<p>Donc, en général, « sa femme » se dit <span class="say">his wife</span> (la femme de lui) et « son mari » <span class="say">her husband</span> (le mari d'elle).</p>
<div class="callout tip"><b>Astuce</b> Pose-toi la question : c'est « à lui » ou « à elle » ? À lui → <b>his</b>. À elle → <b>her</b>.</div>
<div class="callout warn"><b>Piège : its ou it's ?</b> <span class="say">its</span> = son, sa (pour une chose, un animal) ; <span class="say">it's</span> = it is (c'est). <span class="say">The dog is in its bed.</span> — Le chien est dans son panier. <span class="say">It's my dog.</span> — C'est mon chien.</div>`
    },
    {
      id: 'en3-s-genitif', title: 'Le \'s : la voiture de mon père',
      html: `
<p>Pour dire « la voiture <i>de</i> mon père », l'anglais n'utilise pas « of ». Il met le possesseur <b>en premier</b>, ajoute <b>'s</b>, puis la chose :</p>
<table><tr><th>Français</th><th>Anglais</th></tr>
<tr><td>la voiture de mon père</td><td><span class="say">my father's car</span></td></tr>
<tr><td>le mari d'Anne</td><td><span class="say">Anne's husband</span></td></tr>
<tr><td>la maison de ma sœur</td><td><span class="say">my sister's house</span></td></tr>
<tr><td>le nom de ton fils</td><td><span class="say">your son's name</span></td></tr></table>
<div class="callout key"><b>À retenir</b> Possesseur + <b>'s</b> + chose possédée. On lit « à l'envers » par rapport au français : <span class="say">Paul's wife</span> = la femme de Paul.</div>
<h3>Avec un pluriel</h3>
<ul>
<li>Pluriel en <b>-s</b> (parents, sons, sisters…) : on ajoute seulement l'apostrophe <b>'</b> après le s : <span class="say">my parents' house</span> — la maison de mes parents.</li>
<li>Pluriel sans -s (children, men, women, people) : on ajoute <b>'s</b> : <span class="say">the children's room</span> — la chambre des enfants.</li>
</ul>
<p>À l'oral, <span class="say">my parents' house</span> se prononce comme s'il n'y avait pas d'apostrophe.</p>
<div class="callout warn"><b>Piège</b> On ne dit pas « the car of my father ». On dit <span class="say">my father's car</span>.</div>
<div class="callout info"><b>'s a deux sens</b> <span class="say">He's my brother.</span> = He <b>is</b> my brother (C'est mon frère). Mais quand 's est collé à un nom et suivi d'un autre nom, c'est le possessif : <span class="say">Tom's brother</span> = le frère <b>de</b> Tom.</div>`
    },
    {
      id: 'en3-s-havegot', title: 'have got : avoir',
      html: `
<p>Pour dire ce qu'on <b>a</b> (des enfants, une voiture, une maison…), les Anglais disent très souvent <b>have got</b>. Le mot <i>got</i> ne se traduit pas : <span class="say">I have got</span> = j'ai.</p>
<table><tr><th>Forme complète</th><th>Forme courte (à l'oral)</th><th>Français</th></tr>
<tr><td><span class="say">I have got</span></td><td><span class="say">I've got</span></td><td>j'ai</td></tr>
<tr><td><span class="say">you have got</span></td><td><span class="say">you've got</span></td><td>tu as, vous avez</td></tr>
<tr><td><span class="say">he has got</span></td><td><span class="say">he's got</span></td><td>il a</td></tr>
<tr><td><span class="say">she has got</span></td><td><span class="say">she's got</span></td><td>elle a</td></tr>
<tr><td><span class="say">it has got</span></td><td><span class="say">it's got</span></td><td>il, elle a (chose, animal)</td></tr>
<tr><td><span class="say">we have got</span></td><td><span class="say">we've got</span></td><td>nous avons</td></tr>
<tr><td><span class="say">they have got</span></td><td><span class="say">they've got</span></td><td>ils, elles ont</td></tr></table>
<p><span class="say">I've got two sons.</span> — J'ai deux fils.<br><span class="say">My sister has got three children.</span> — Ma sœur a trois enfants.</p>
<div class="callout key"><b>À retenir</b> <b>has got</b> avec he, she, it (et avec un nom au singulier : my sister, Paul). <b>have got</b> avec I, you, we, they.</div>
<h3>La négation : haven't got / hasn't got</h3>
<p>On ajoute <b>not</b> juste après have / has : <span class="say">I haven't got a car.</span> — Je n'ai pas de voiture.<br><span class="say">He hasn't got any children.</span> — Il n'a pas d'enfants.</p>
<h3>La question : Have you got…?</h3>
<p>On met <b>Have</b> ou <b>Has</b> en premier : <span class="say">Have you got any children?</span> — Avez-vous des enfants ?<br><span class="say">Has she got a brother?</span> — A-t-elle un frère ?</p>
<p>Réponses courtes (sans répéter <i>got</i>) : <span class="say">Yes, I have.</span> / <span class="say">No, I haven't.</span> · <span class="say">Yes, she has.</span> / <span class="say">No, she hasn't.</span></p>
<div class="callout info"><b>Le petit mot any</b> Dans les questions et les négations, « des » ou « de » se dit souvent <span class="say">any</span> : <span class="say">Have you got any brothers?</span> (As-tu des frères ?) · <span class="say">I haven't got any sisters.</span> (Je n'ai pas de sœurs.)</div>
<div class="callout warn"><b>Piège : she's got</b> Devant <i>got</i>, <b>'s</b> veut dire <b>has</b> : <span class="say">She's got a brother.</span> = She <b>has</b> got a brother (Elle a un frère). Ce n'est pas du passé.</div>
<div class="callout warn"><b>Piège : l'âge</b> Pour l'âge, l'anglais utilise <b>to be</b>, pas <i>have</i> : <span class="say">I am sixty.</span> ou <span class="say">I am sixty years old.</span> — J'ai soixante ans. Jamais « I have sixty years ». Pour demander : <span class="say">How old are you?</span> — Quel âge as-tu ?</div>
<h3>Et have tout seul ?</h3>
<p>On peut aussi dire simplement <span class="say">I have two sons.</span> (même sens, très courant, surtout en Amérique). Mais la question et la négation avec <i>have</i> tout seul demandent un autre petit mot (<span class="say">Do you have…?</span>, <span class="say">I don't have…</span>) que tu verras plus tard. Pour l'instant, retiens <b>Have you got…?</b> et <b>I haven't got…</b>.</p>`
    },
    {
      id: 'en3-s-pluriels', title: 'Un homme, deux hommes : les pluriels irréguliers',
      html: `
<p>En général, on forme le pluriel avec <b>-s</b> : <span class="say">a sister</span> → <span class="say">two sisters</span>, <span class="say">a son</span> → <span class="say">three sons</span>. Mais quatre mots très courants pour parler des gens sont <b>irréguliers</b> :</p>
<table><tr><th>Un seul</th><th>Plusieurs</th><th>Français</th></tr>
<tr><td><span class="say">a man</span></td><td><span class="say">two men</span></td><td>un homme, deux hommes</td></tr>
<tr><td><span class="say">a woman</span></td><td><span class="say">two women</span></td><td>une femme, deux femmes</td></tr>
<tr><td><span class="say">a child</span></td><td><span class="say">two children</span></td><td>un enfant, deux enfants</td></tr>
<tr><td><span class="say">a person</span></td><td><span class="say">two people</span></td><td>une personne, deux personnes</td></tr></table>
<p><span class="say">My son has got three children.</span> — Mon fils a trois enfants.<br><span class="say">The two women are my sisters.</span> — Les deux femmes sont mes sœurs.<br><span class="say">People are very nice here.</span> — Les gens sont très sympas ici.</p>
<div class="callout key"><b>À retenir</b> <span class="say">people</span> (les gens) est toujours un pluriel : <span class="say">People are kind.</span> avec <b>are</b>, jamais « people is ». Et pas de -s en plus : jamais « mans », « childs », « childrens ».</div>
<div class="callout info"><b>Prononciation</b> <span class="say">woman</span> se dit « wou-meun », mais <span class="say">women</span> se dit « wi-min » : c'est le son du début qui change.</div>
<div class="callout tip"><b>Pour la suite</b> Deux autres mots de la famille ont un pluriel spécial : <span class="say">wife</span> → <span class="say">wives</span> (les épouses) et <span class="say">baby</span> → <span class="say">babies</span> (les bébés). Tu verras ces règles au chapitre suivant.</div>`
    },
    {
      id: 'en3-s-decrire', title: 'Décrire quelqu\'un',
      html: `
<p>Pour décrire une personne, on utilise <b>to be</b> + un adjectif : <span class="say">He is tall.</span> — Il est grand.</p>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">tall</span></td><td>grand (de taille)</td></tr>
<tr><td><span class="say">short</span></td><td>petit (de taille)</td></tr>
<tr><td><span class="say">young</span></td><td>jeune</td></tr>
<tr><td><span class="say">old</span></td><td>vieux, âgé</td></tr>
<tr><td><span class="say">married</span></td><td>marié</td></tr>
<tr><td><span class="say">single</span></td><td>célibataire</td></tr>
<tr><td><span class="say">divorced</span></td><td>divorcé</td></tr>
<tr><td><span class="say">retired</span></td><td>à la retraite</td></tr>
<tr><td><span class="say">nice</span></td><td>sympa, agréable</td></tr>
<tr><td><span class="say">kind</span></td><td>gentil</td></tr>
<tr><td><span class="say">funny</span></td><td>drôle</td></tr>
<tr><td><span class="say">beautiful</span></td><td>beau, belle</td></tr>
<tr><td><span class="say">happy</span></td><td>heureux</td></tr></table>
<h3>Exemples</h3>
<p><span class="say">My husband is tall.</span> — Mon mari est grand.<br>
<span class="say">Her daughter is very funny.</span> — Sa fille est très drôle.<br>
<span class="say">My parents are retired.</span> — Mes parents sont à la retraite.<br>
<span class="say">Is your son married?</span> — Ton fils est-il marié ? <span class="say">No, he isn't. He's single.</span> — Non. Il est célibataire.</p>
<div class="callout key"><b>À retenir</b> L'adjectif anglais <b>ne change jamais</b> : pas de féminin, pas de pluriel. <span class="say">a tall man</span>, <span class="say">a tall woman</span>, <span class="say">They are tall.</span> (jamais « talls »).</div>
<h3>Avec un nom : l'adjectif se met devant</h3>
<p><span class="say">a kind woman</span> — une femme gentille · <span class="say">a funny man</span> — un homme drôle · <span class="say">She is a nice person.</span> — C'est une personne sympa.</p>
<div class="callout warn"><b>Piège : grand et petit</b> Pour la taille d'une personne, « grand » = <span class="say">tall</span> (pas big, qui veut plutôt dire « gros ») et « petit » = <span class="say">short</span>. Pour « très », on dit <span class="say">very</span> : <span class="say">She is very kind.</span> — Elle est très gentille.</div>
<div class="callout tip"><b>Astuce</b> <span class="say">nice</span> = sympa, agréable (une personne, mais aussi une chose : <span class="say">a nice house</span>). <span class="say">kind</span> = gentil (qui est bon avec les autres) : <span class="say">It's very kind of you.</span> — C'est très gentil de votre part.</div>`
    },
    {
      id: 'en3-s-pieges', title: 'Les pièges des francophones',
      html: `
<p>Les erreurs les plus fréquentes de ce chapitre, à relire avant les exercices :</p>
<ul>
<li><b>his ou her</b> : on regarde qui possède. <span class="say">Marie and her son</span> (Marie et son fils) · <span class="say">Paul and his daughter</span> (Paul et sa fille).</li>
<li><b>L'âge avec to be</b> : <span class="say">I'm sixty.</span> (J'ai soixante ans), jamais « I have sixty years ».</li>
<li><b>Le 's</b> : <span class="say">my father's car</span>, pas « the car of my father ». Avec un pluriel en -s : <span class="say">my parents' house</span>.</li>
<li><b>have got</b> : <span class="say">She has got</span> (pas « she have got »), et la question <span class="say">Have you got…?</span> (pas « Do you have got…? »).</li>
<li><b>Les pluriels irréguliers</b> : <span class="say">men</span>, <span class="say">women</span>, <span class="say">children</span>, <span class="say">people</span>. Et <span class="say">people are</span>, jamais « people is ».</li>
<li><b>L'adjectif est invariable</b> et se place devant le nom : <span class="say">They are tall.</span> · <span class="say">a kind man</span>.</li>
<li><b>wife ou woman</b> : « ma femme » (mon épouse) = <span class="say">my wife</span> ; « une femme » = <span class="say">a woman</span>.</li>
<li><b>parents</b> = seulement le père et la mère.</li>
</ul>
<div class="callout key"><b>À retenir</b> À lui → <b>his</b>, à elle → <b>her</b> · l'âge → <b>I am</b> · avoir → <b>have got / has got</b>.</div>`
    }
  ],
  words: [
    { en: 'mother', fr: 'la mère', pos: 'n', cat: 'La famille proche', ex: 'My mother is very kind.', exFr: 'Ma mère est très gentille.', level: 1, note: 'Le th se prononce la langue entre les dents.' },
    { en: 'father', fr: 'le père', pos: 'n', cat: 'La famille proche', ex: 'My father is retired.', exFr: 'Mon père est à la retraite.', level: 1 },
    { en: 'parents', fr: 'les parents', pos: 'n', cat: 'La famille proche', ex: 'My parents are old.', exFr: 'Mes parents sont âgés.', level: 1, note: 'Seulement le père et la mère. Pour toute la famille : family.' },
    { en: 'mum', fr: 'la maman', pos: 'n', cat: 'La famille proche', alt: ['mummy'], ex: 'Mum, this is my friend Tom.', exFr: 'Maman, voici mon ami Tom.', level: 2, note: 'En Amérique : mom.' },
    { en: 'dad', fr: 'le papa', pos: 'n', cat: 'La famille proche', alt: ['daddy'], ex: 'My dad is very funny.', exFr: 'Mon papa est très drôle.', level: 2 },
    { en: 'son', fr: 'le fils', pos: 'n', cat: 'La famille proche', ex: 'I have got two sons.', exFr: 'J\'ai deux fils.', level: 1, note: 'Se prononce comme sun (le soleil).' },
    { en: 'daughter', fr: 'la fille (de quelqu\'un)', pos: 'n', cat: 'La famille proche', ex: 'Her daughter is twelve.', exFr: 'Sa fille a douze ans.', level: 1, note: 'Le gh ne se prononce pas : « dô-teu ». Une fille (le contraire d\'un garçon) = a girl.' },
    { en: 'child', fr: 'l\'enfant', pos: 'n', cat: 'La famille proche', ex: 'Have you got any children?', exFr: 'Avez-vous des enfants ?', level: 1, note: 'Pluriel irrégulier : one child, two children.' },
    { en: 'baby', fr: 'le bébé', pos: 'n', cat: 'La famille proche', ex: 'My niece has got a baby.', exFr: 'Ma nièce a un bébé.', level: 1, note: 'Pluriel : babies.' },
    { en: 'brother', fr: 'le frère', pos: 'n', cat: 'La famille proche', ex: 'My brother is tall.', exFr: 'Mon frère est grand.', level: 1 },
    { en: 'sister', fr: 'la sœur', pos: 'n', cat: 'La famille proche', ex: 'I have got one sister.', exFr: 'J\'ai une sœur.', level: 1 },
    { en: 'husband', fr: 'le mari', pos: 'n', cat: 'La famille proche', ex: 'Her husband is very nice.', exFr: 'Son mari est très sympa.', level: 1 },
    { en: 'wife', fr: 'l\'épouse', pos: 'n', cat: 'La famille proche', ex: 'This is my wife, Anne.', exFr: 'Voici ma femme, Anne.', level: 1, note: '« Ma femme » = my wife. Une femme (en général) = a woman. Pluriel : wives.' },
    { en: 'family', fr: 'la famille', pos: 'n', cat: 'La famille proche', ex: 'We have got a big family.', exFr: 'Nous avons une grande famille.', level: 1, note: 'Pluriel : families.' },
    { en: 'grandmother', fr: 'la grand-mère', pos: 'n', cat: 'Grands-parents et petits-enfants', alt: ['grandma', 'granny'], ex: 'My grandmother is ninety.', exFr: 'Ma grand-mère a quatre-vingt-dix ans.', level: 1, note: 'Plus affectueux : grandma ou granny (mamie).' },
    { en: 'grandfather', fr: 'le grand-père', pos: 'n', cat: 'Grands-parents et petits-enfants', alt: ['grandpa', 'granddad', 'grandad'], ex: 'His grandfather is very old.', exFr: 'Son grand-père est très âgé.', level: 1, note: 'Plus affectueux : grandpa ou granddad (papi).' },
    { en: 'grandparents', fr: 'les grands-parents', pos: 'n', cat: 'Grands-parents et petits-enfants', ex: 'Their grandparents are very kind.', exFr: 'Leurs grands-parents sont très gentils.', level: 1 },
    { en: 'grandson', fr: 'le petit-fils', pos: 'n', cat: 'Grands-parents et petits-enfants', ex: 'My grandson is five.', exFr: 'Mon petit-fils a cinq ans.', level: 1 },
    { en: 'granddaughter', fr: 'la petite-fille', pos: 'n', cat: 'Grands-parents et petits-enfants', ex: 'Her granddaughter is a baby.', exFr: 'Sa petite-fille est un bébé.', level: 1, note: 'La fille de ton fils ou de ta fille. Une petite fille (une enfant) = a little girl.' },
    { en: 'grandchildren', fr: 'les petits-enfants', pos: 'n', cat: 'Grands-parents et petits-enfants', ex: 'I have got four grandchildren.', exFr: 'J\'ai quatre petits-enfants.', level: 1, note: 'Au singulier : a grandchild (un petit-enfant).' },
    { en: 'uncle', fr: 'l\'oncle', pos: 'n', cat: 'Le reste de la famille', ex: 'My uncle is funny.', exFr: 'Mon oncle est drôle.', level: 1 },
    { en: 'aunt', fr: 'la tante', pos: 'n', cat: 'Le reste de la famille', ex: 'My aunt is single.', exFr: 'Ma tante est célibataire.', level: 1, note: 'Se prononce « ânnt » en Angleterre, « ènnt » en Amérique.' },
    { en: 'cousin', fr: 'le cousin, la cousine', pos: 'n', cat: 'Le reste de la famille', ex: 'My cousin is married.', exFr: 'Mon cousin est marié.', level: 1, note: 'Même mot pour un garçon et une fille. Se prononce « keu-zeun ».' },
    { en: 'nephew', fr: 'le neveu', pos: 'n', cat: 'Le reste de la famille', ex: 'My nephew is twenty.', exFr: 'Mon neveu a vingt ans.', level: 1, note: 'ph se prononce f : « nè-fiou ».' },
    { en: 'niece', fr: 'la nièce', pos: 'n', cat: 'Le reste de la famille', ex: 'Her niece is very kind.', exFr: 'Sa nièce est très gentille.', level: 1, note: 'Se prononce « niis ».' },
    { en: 'mother-in-law', fr: 'la belle-mère (la mère du conjoint)', pos: 'n', cat: 'Le reste de la famille', ex: 'My mother-in-law is very nice.', exFr: 'Ma belle-mère est très sympa.', level: 2, note: 'in-law = par le mariage. La nouvelle femme de ton père (aussi « belle-mère » en français) se dit stepmother.' },
    { en: 'father-in-law', fr: 'le beau-père (le père du conjoint)', pos: 'n', cat: 'Le reste de la famille', ex: 'My father-in-law is retired.', exFr: 'Mon beau-père est à la retraite.', level: 2, note: 'Le nouveau mari de ta mère se dit stepfather.' },
    { en: 'son-in-law', fr: 'le gendre', pos: 'n', cat: 'Le reste de la famille', ex: 'My son-in-law is very tall.', exFr: 'Mon gendre est très grand.', level: 2 },
    { en: 'daughter-in-law', fr: 'la belle-fille (la femme du fils)', pos: 'n', cat: 'Le reste de la famille', ex: 'Our daughter-in-law is a doctor.', exFr: 'Notre belle-fille est médecin.', level: 2 },
    { en: 'man', fr: 'l\'homme', pos: 'n', cat: 'Les gens', ex: 'He is a kind man.', exFr: 'C\'est un homme gentil.', level: 1, note: 'Pluriel irrégulier : one man, two men.' },
    { en: 'woman', fr: 'la femme', pos: 'n', cat: 'Les gens', ex: 'She is a funny woman.', exFr: 'C\'est une femme drôle.', level: 1, note: 'Pluriel irrégulier : one woman, two women (prononcé « wi-min »). Mon épouse = my wife.' },
    { en: 'person', fr: 'la personne', pos: 'n', cat: 'Les gens', ex: 'She is a nice person.', exFr: 'C\'est une personne sympa.', level: 1, note: 'Pluriel : people (one person, two people).' },
    { en: 'people', fr: 'les gens', pos: 'n', cat: 'Les gens', ex: 'People are very kind here.', exFr: 'Les gens sont très gentils ici.', level: 1, note: 'Toujours pluriel : people are (jamais people is).' },
    { en: 'boy', fr: 'le garçon', pos: 'n', cat: 'Les gens', ex: 'The boy is my grandson.', exFr: 'Le garçon est mon petit-fils.', level: 1 },
    { en: 'girl', fr: 'la jeune fille, la fillette', pos: 'n', cat: 'Les gens', ex: 'The girl is my niece.', exFr: 'La jeune fille est ma nièce.', level: 1, note: 'À ne pas confondre avec daughter : my daughter = ma fille (mon enfant).' },
    { en: 'friend', fr: 'l\'ami, l\'amie', pos: 'n', cat: 'Les gens', ex: 'Tom is my friend.', exFr: 'Tom est mon ami.', level: 1, note: 'Se prononce « frènd ».' },
    { en: 'neighbour', fr: 'le voisin, la voisine', pos: 'n', cat: 'Les gens', ex: 'Our neighbours are very nice.', exFr: 'Nos voisins sont très sympas.', level: 1, note: 'En Amérique : neighbor. Le gh ne se prononce pas : « néï-beu ».' },
    { en: 'tall', fr: 'grand (de taille)', pos: 'adj', cat: 'Décrire quelqu\'un', ex: 'My son is very tall.', exFr: 'Mon fils est très grand.', level: 1, note: 'Pour la taille d\'une personne : tall (pas big).' },
    { en: 'short', fr: 'petit (de taille)', pos: 'adj', cat: 'Décrire quelqu\'un', ex: 'My grandmother is short.', exFr: 'Ma grand-mère est petite.', level: 1, note: 'short veut aussi dire « court ».' },
    { en: 'young', fr: 'jeune', pos: 'adj', cat: 'Décrire quelqu\'un', ex: 'Their children are very young.', exFr: 'Leurs enfants sont très jeunes.', level: 1, note: 'Se prononce « yeung ».' },
    { en: 'old', fr: 'vieux, âgé', pos: 'adj', cat: 'Décrire quelqu\'un', ex: 'How old is your daughter?', exFr: 'Quel âge a ta fille ?', level: 1, note: 'How old…? = Quel âge… ? On répond avec to be : She is ten.' },
    { en: 'married', fr: 'marié', pos: 'adj', cat: 'Décrire quelqu\'un', ex: 'Are you married?', exFr: 'Êtes-vous marié ?', level: 1 },
    { en: 'single', fr: 'célibataire', pos: 'adj', cat: 'Décrire quelqu\'un', ex: 'My brother is single.', exFr: 'Mon frère est célibataire.', level: 1 },
    { en: 'divorced', fr: 'divorcé', pos: 'adj', cat: 'Décrire quelqu\'un', ex: 'Her parents are divorced.', exFr: 'Ses parents sont divorcés.', level: 2 },
    { en: 'retired', fr: 'à la retraite, retraité', pos: 'adj', cat: 'Décrire quelqu\'un', ex: 'I am retired.', exFr: 'Je suis à la retraite.', level: 1 },
    { en: 'nice', fr: 'sympa, agréable', pos: 'adj', cat: 'Décrire quelqu\'un', ex: 'Your sister is very nice.', exFr: 'Ta sœur est très sympa.', level: 1 },
    { en: 'kind', fr: 'gentil', pos: 'adj', cat: 'Décrire quelqu\'un', ex: 'Our neighbour is very kind.', exFr: 'Notre voisine est très gentille.', level: 1 },
    { en: 'funny', fr: 'drôle', pos: 'adj', cat: 'Décrire quelqu\'un', ex: 'Your dad is funny!', exFr: 'Ton papa est drôle !', level: 1 },
    { en: 'beautiful', fr: 'beau, belle', pos: 'adj', cat: 'Décrire quelqu\'un', ex: 'Your daughter is beautiful.', exFr: 'Ta fille est belle.', level: 2, note: 'Pour un homme, on dit plutôt handsome.' },
    { en: 'happy', fr: 'heureux', pos: 'adj', cat: 'Décrire quelqu\'un', ex: 'We are very happy.', exFr: 'Nous sommes très heureux.', level: 1 }
  ],
  phrases: [
    { en: 'This is my wife.', fr: 'Voici ma femme.', cat: 'Présenter sa famille' },
    { en: 'This is my husband.', fr: 'Voici mon mari.', cat: 'Présenter sa famille' },
    { en: 'Her name is Emma.', fr: 'Elle s\'appelle Emma.', alt: ['She is called Emma.'], cat: 'Présenter sa famille' },
    { en: 'What\'s your daughter\'s name?', fr: 'Comment s\'appelle ta fille ?', cat: 'Présenter sa famille' },
    { en: 'Have you got any children?', fr: 'Avez-vous des enfants ?', alt: ['Have you got children?', 'Do you have any children?', 'Do you have children?'], cat: 'Parler de sa famille' },
    { en: 'I have got two sons and a daughter.', fr: 'J\'ai deux fils et une fille.', alt: ['I have two sons and a daughter.', 'I have got two sons and one daughter.', 'I have two sons and one daughter.'], cat: 'Parler de sa famille' },
    { en: 'I have got three grandchildren.', fr: 'J\'ai trois petits-enfants.', alt: ['I have three grandchildren.'], cat: 'Parler de sa famille' },
    { en: 'Have you got any brothers or sisters?', fr: 'As-tu des frères et sœurs ?', alt: ['Have you got any brothers and sisters?', 'Have you got brothers or sisters?', 'Have you got brothers and sisters?', 'Do you have any brothers or sisters?', 'Do you have any brothers and sisters?'], cat: 'Parler de sa famille' },
    { en: 'I haven\'t got any brothers.', fr: 'Je n\'ai pas de frère.', alt: ['I haven\'t got a brother.', 'I don\'t have any brothers.', 'I don\'t have a brother.'], cat: 'Parler de sa famille' },
    { en: 'I\'m an only child.', fr: 'Je suis enfant unique.', cat: 'Parler de sa famille', note: 'only child = enfant unique.' },
    { en: 'She has got two children.', fr: 'Elle a deux enfants.', alt: ['She has two children.'], cat: 'Parler de sa famille', note: 'À l\'oral : She\'s got two children.' },
    { en: 'We have got a big family.', fr: 'Nous avons une grande famille.', alt: ['We have a big family.', 'We have got a large family.', 'We have a large family.'], cat: 'Parler de sa famille' },
    { en: 'Is he your son?', fr: 'Est-ce que c\'est ton fils ?', cat: 'Parler de sa famille' },
    { en: 'This is my brother\'s car.', fr: 'C\'est la voiture de mon frère.', alt: ['It is my brother\'s car.', 'That is my brother\'s car.'], cat: 'Le \'s possessif' },
    { en: 'Are you married?', fr: 'Êtes-vous marié ?', cat: 'Parler de soi' },
    { en: 'I\'m retired.', fr: 'Je suis à la retraite.', cat: 'Parler de soi' },
    { en: 'I am sixty years old.', fr: 'J\'ai soixante ans.', alt: ['I am sixty.'], cat: 'L\'âge', note: 'L\'âge se dit avec to be : I am… (jamais I have… years).' },
    { en: 'How old is your granddaughter?', fr: 'Quel âge a ta petite-fille ?', cat: 'L\'âge' },
    { en: 'She is six years old.', fr: 'Elle a six ans.', alt: ['She is six.'], cat: 'L\'âge' },
    { en: 'His wife is very nice.', fr: 'Sa femme est très sympa.', cat: 'Décrire quelqu\'un', note: 'La femme de lui → his wife.' },
    { en: 'Her husband is very tall.', fr: 'Son mari est très grand.', cat: 'Décrire quelqu\'un', note: 'Le mari d\'elle → her husband.' },
    { en: 'My grandson is very funny.', fr: 'Mon petit-fils est très drôle.', cat: 'Décrire quelqu\'un' },
    { en: 'People are very kind here.', fr: 'Les gens sont très gentils ici.', alt: ['People are very nice here.'], cat: 'Décrire quelqu\'un' },
    { en: 'It\'s very kind of you.', fr: 'C\'est très gentil de votre part.', alt: ['That\'s very kind of you.'], cat: 'Politesse' }
  ],
  quiz: [
    { id: 'en3-q-01', q: 'Complète : Paul is with ___ mother. (sa mère = la mère de Paul)', choices: ['his', 'her', 'its', 'he'], answer: 0, topic: 'his ou her ?', sec: 'en3-s-possessifs',
      why: { 1: '« her » = d\'elle : on l\'utilise quand c\'est une femme qui possède. Ici, c\'est Paul, un homme.', 2: '« its » s\'utilise pour une chose ou un animal, pas pour une personne.', 3: '« he » veut dire « il » (sujet) : ce n\'est pas un possessif.' },
      explain: 'On regarde **qui possède** : la mère de Paul (un homme) → **his**. → Paul is with **his** mother. (Paul est avec sa mère.)', say: 'Paul is with his mother.', level: 1 },
    { id: 'en3-q-02', q: 'Complète : Marie and ___ husband are retired.', choices: ['his', 'her', 'their', 'she'], answer: 1, topic: 'his ou her ?', sec: 'en3-s-possessifs',
      why: { 0: '« his » = de lui. Ici, le mari est celui de Marie, une femme.', 2: '« their » = leur : il faudrait plusieurs possesseurs.', 3: '« she » veut dire « elle » (sujet) : ce n\'est pas un possessif.' },
      explain: 'Le mari de Marie (une femme) → **her** husband. → Marie and **her** husband are retired. (Marie et son mari sont à la retraite.)', say: 'Marie and her husband are retired.', level: 1 },
    { id: 'en3-q-03', q: 'Complète : ___ children are very young. (nos enfants)', choices: ['We', 'Their', 'Our', 'Your'], answer: 2, topic: 'Les possessifs', sec: 'en3-s-possessifs',
      why: { 0: '« we » = nous (sujet) : ce n\'est pas un possessif.', 1: '« their » = leurs (à eux, à elles).', 3: '« your » = tes, vos (à toi, à vous).' },
      explain: 'nous → **our** (notre, nos). → **Our** children are very young. (Nos enfants sont très jeunes.)', say: 'Our children are very young.', level: 1 },
    { id: 'en3-q-04', q: 'Comment dit-on « leurs parents » ?', choices: ['theirs parents', 'their parents', 'there parents', 'they parents'], answer: 1, topic: 'Les possessifs', sec: 'en3-s-possessifs',
      why: { 0: 'Le possessif ne prend jamais de -s, même devant un pluriel.', 2: '« there » (là) se prononce comme their, mais c\'est un autre mot.', 3: '« they » = ils, elles (sujet) : ce n\'est pas un possessif.' },
      explain: 'ils, elles → **their** (leur, leurs), toujours invariable. → **their parents** (leurs parents).', say: 'their parents', level: 1 },
    { id: 'en3-q-05', q: 'Comment dit-on « la voiture de mon père » ?', choices: ['the car of my father', 'my car\'s father', 'my father\'s car', 'my fathers car'], answer: 2, topic: 'Le \'s possessif', sec: 'en3-s-genitif',
      why: { 0: 'C\'est la construction française. En anglais : possesseur + \'s + chose.', 1: 'L\'ordre est inversé : cela voudrait dire « le père de ma voiture » !', 3: 'Il manque l\'apostrophe : father\'s.' },
      explain: 'Possesseur + **\'s** + chose possédée. → **my father\'s car** (la voiture de mon père).', say: 'my father\'s car', level: 1 },
    { id: 'en3-q-06', q: 'Comment dit-on « la maison de mes parents » ?', choices: ['my parents\' house', 'my parent\'s house', 'the house of my parents', 'my parents house\'s'], answer: 0, topic: 'Le \'s possessif', sec: 'en3-s-genitif',
      why: { 1: '« my parent\'s » = d\'un seul parent. Avec un pluriel en -s, l\'apostrophe se met après le s.', 2: 'C\'est la construction française. En anglais, le possesseur vient en premier.', 3: 'Le \'s se met après le possesseur (parents), pas après la chose.' },
      explain: 'parents finit déjà par -s : on ajoute seulement l\'**apostrophe**. → **my parents\' house** (la maison de mes parents).', say: 'my parents\' house', level: 2 },
    { id: 'en3-q-07', q: 'Complète : the ___ room (la chambre des enfants)', choices: ['childrens\'', 'child\'s', 'childs\'', 'children\'s'], answer: 3, topic: 'Le \'s possessif', sec: 'en3-s-genitif',
      why: { 0: 'children ne finit pas par -s : on ajoute \'s, comme pour un singulier.', 1: '« child\'s » = d\'un seul enfant.', 2: '« childs » n\'existe pas : le pluriel de child est children.' },
      explain: 'Pluriel sans -s → on ajoute **\'s** : **the children\'s room** (la chambre des enfants).', say: 'the children\'s room', level: 2 },
    { id: 'en3-q-08', q: 'Complète : My sister ___ got three children.', choices: ['have', 'is', 'has', 'are'], answer: 2, topic: 'have got', sec: 'en3-s-havegot',
      why: { 0: '« have » va avec I, you, we, they. My sister = she → has.', 1: '« is got » n\'existe pas : pour « avoir », c\'est have got / has got.', 3: '« are » vient du verbe être.' },
      explain: 'my sister = she → **has got**. → My sister **has got** three children. (Ma sœur a trois enfants.)', say: 'My sister has got three children.', level: 1 },
    { id: 'en3-q-09', q: 'Complète : ___ you got any brothers?', choices: ['Do', 'Are', 'Has', 'Have'], answer: 3, topic: 'have got : la question', sec: 'en3-s-havegot',
      why: { 0: '« Do you got » n\'existe pas : avec got, la question commence par Have.', 1: '« Are » vient du verbe être.', 2: '« Has » va avec he, she, it.' },
      explain: 'Question : **Have** + sujet + got…? → **Have** you got any brothers? (As-tu des frères ?)', say: 'Have you got any brothers?', level: 1 },
    { id: 'en3-q-10', q: 'Mets à la forme négative : I have got a car.', choices: ['I don\'t have got a car.', 'I haven\'t got a car.', 'I have got not a car.', 'I not have got a car.'], answer: 1, topic: 'have got : la négation', sec: 'en3-s-havegot',
      why: { 0: 'On ne mélange pas don\'t et got.', 2: '« not » se place juste après have : haven\'t got.', 3: '« not » ne se met pas devant le verbe.' },
      explain: 'Négation : have + **not** + got → **haven\'t got**. → I **haven\'t got** a car. (Je n\'ai pas de voiture.)', say: 'I haven\'t got a car.', level: 1 },
    { id: 'en3-q-11', q: 'Has she got a sister? — Yes, ___', choices: ['she has got.', 'she is.', 'she have.', 'she has.'], answer: 3, topic: 'have got : réponses courtes', sec: 'en3-s-havegot',
      why: { 0: 'Dans une réponse courte, on ne répète pas got.', 1: 'La question est avec has, pas avec is : on répond avec has.', 2: 'Avec she, c\'est has.' },
      explain: 'Réponse courte : on reprend **has**, sans got. → Yes, **she has**. / No, she hasn\'t. (Oui. / Non.)', say: 'Has she got a sister? Yes, she has.', level: 2 },
    { id: 'en3-q-12', q: 'Comment dit-on « J\'ai soixante ans » ?', choices: ['I have sixty years.', 'I have got sixty years.', 'I am sixty years old.', 'I am sixty years.'], answer: 2, topic: 'Dire son âge', sec: 'en3-s-havegot',
      why: { 0: 'L\'âge se dit avec to be (être), jamais avec have.', 1: 'Même erreur : pas de have got pour l\'âge.', 3: 'Il manque old : sixty years old (ou simplement sixty).' },
      explain: 'L\'âge se dit avec **to be** : **I am sixty** ou **I am sixty years old**. (J\'ai soixante ans.)', say: 'I am sixty years old.', level: 1 },
    { id: 'en3-q-13', q: 'Quel est le pluriel de « woman » ?', choices: ['womans', 'women', 'womens', 'woman'], answer: 1, topic: 'Pluriels irréguliers', sec: 'en3-s-pluriels',
      why: { 0: 'woman est irrégulier : pas de -s.', 2: 'women est déjà un pluriel : pas de -s en plus.', 3: '« woman » est le singulier : au pluriel, la voyelle change (women).' },
      explain: 'one woman → two **women** (prononcé « wi-min »), comme one man → two men.', say: 'one woman, two women', level: 1 },
    { id: 'en3-q-14', q: 'Complète : My son has got two ___. (enfants)', choices: ['childs', 'childrens', 'child', 'children'], answer: 3, topic: 'Pluriels irréguliers', sec: 'en3-s-pluriels',
      why: { 0: 'child est irrégulier : pas de -s.', 1: 'children est déjà un pluriel : pas de -s en plus.', 2: 'two = deux : il faut le pluriel.' },
      explain: 'one child → two **children**. → My son has got two **children**. (Mon fils a deux enfants.)', say: 'My son has got two children.', level: 1 },
    { id: 'en3-q-15', q: 'Complète : People ___ very nice here.', choices: ['is', 'are', 'am', 'has'], answer: 1, topic: 'Pluriels irréguliers', sec: 'en3-s-pluriels',
      why: { 0: 'people (les gens) est un pluriel : on ne dit pas « people is ».', 2: '« am » va seulement avec I.', 3: '« has » veut dire « a » (avoir), pas « sont ».' },
      explain: '**people** est toujours pluriel → **are**. → People **are** very nice here. (Les gens sont très sympas ici.)', say: 'People are very nice here.', level: 1 },
    { id: 'en3-q-16', q: 'Comment dit-on « Mes frères sont grands » ?', choices: ['My brothers are talls.', 'My brothers are big.', 'My brother are tall.', 'My brothers are tall.'], answer: 3, topic: 'Décrire quelqu\'un', sec: 'en3-s-decrire',
      why: { 0: 'L\'adjectif anglais ne prend jamais de -s.', 1: '« big » = gros, grand (pour un objet). Pour la taille d\'une personne : tall.', 2: 'Mes frères : pluriel → brothers.' },
      explain: 'Grand (de taille) = **tall**, invariable. → My brothers are **tall**. (Mes frères sont grands.)', say: 'My brothers are tall.', level: 1 },
    { id: 'en3-q-17', q: 'Comment dit-on « une femme gentille » ?', choices: ['a kind woman', 'a woman kind', 'a kinds woman', 'a woman kinds'], answer: 0, topic: 'Décrire quelqu\'un', sec: 'en3-s-decrire',
      why: { 1: 'L\'adjectif se place avant le nom.', 2: 'L\'adjectif ne prend jamais de -s.', 3: 'Deux erreurs : l\'adjectif se place avant le nom et ne prend pas de -s.' },
      explain: 'En anglais, l\'adjectif se place **avant** le nom : **a kind woman** (une femme gentille).', say: 'a kind woman', level: 1 },
    { id: 'en3-q-18', q: 'Que veut dire « She\'s got a brother » ?', choices: ['Elle est un frère.', 'C\'est son frère.', 'Elle a un frère.', 'Elle a eu un frère.'], answer: 2, topic: 'have got', sec: 'en3-s-havegot',
      why: { 0: 'Devant got, \'s veut dire has (avoir), pas is (être).', 1: '« C\'est son frère » se dirait He\'s her brother.', 3: 'have got est un présent : got ne marque pas le passé ici.' },
      explain: '**She\'s got** = She **has** got = elle a. → She\'s got a brother. (Elle a un frère.)', say: 'She\'s got a brother.', level: 2 },
    { id: 'en3-q-19', q: 'Qui est « my brother\'s son » ?', choices: ['mon fils', 'mon neveu', 'mon cousin', 'mon oncle'], answer: 1, topic: 'La famille', sec: 'en3-s-vocab',
      why: { 0: 'Mon fils = my son.', 2: 'Mon cousin est le fils de mon oncle ou de ma tante.', 3: 'Mon oncle est le frère de mon père ou de ma mère.' },
      explain: 'my brother\'s son = le fils de mon frère = mon neveu : **my nephew**.', say: 'My brother\'s son is my nephew.', level: 2 },
    { id: 'en3-q-20', q: 'Qui est « my mother\'s mother » ?', choices: ['ma tante', 'ma belle-mère', 'ma sœur', 'ma grand-mère'], answer: 3, topic: 'La famille', sec: 'en3-s-vocab',
      why: { 0: 'Ma tante = la sœur de mon père ou de ma mère (my aunt).', 1: 'Ma belle-mère = la mère de mon mari ou de ma femme (my mother-in-law).', 2: 'Ma sœur = my sister.' },
      explain: 'my mother\'s mother = la mère de ma mère = **my grandmother** (ma grand-mère).', say: 'My mother\'s mother is my grandmother.', level: 1 },
    { id: 'en3-q-21', q: 'Écoute. Que dit la personne ?', listen: true, say: 'My sister has got two children.', choices: ['Mon frère a deux enfants.', 'Ma sœur a deux enfants.', 'Ma sœur n\'a pas d\'enfants.', 'Ma fille a deux enfants.'], answer: 1, topic: 'Compréhension orale', sec: 'en3-s-havegot',
      why: { 0: 'Frère = brother ; ici on entend sister (sœur).', 2: 'La phrase est affirmative (has got), pas négative (hasn\'t got).', 3: 'Fille = daughter ; ici on entend sister.' },
      explain: 'My **sister has got** two children. (Ma sœur a deux enfants.)', level: 2 },
    { id: 'en3-q-22', q: 'Écoute. Que dit la personne ?', listen: true, say: 'Her husband is retired.', choices: ['Son fils est à la retraite.', 'Son mari est à la retraite.', 'Mon mari est à la retraite.', 'Son mari est fatigué.'], answer: 1, topic: 'Compréhension orale', sec: 'en3-s-decrire',
      why: { 0: 'Fils = son ; ici on entend husband (mari).', 2: 'Mon = my ; ici on entend her (son, à elle).', 3: 'Fatigué = tired ; retired = à la retraite.' },
      explain: '**Her husband is retired.** (Son mari est à la retraite.) — her : c\'est le mari d\'une femme.', level: 2 },
    { id: 'en3-q-23', q: 'Écoute. Que demande la personne ?', listen: true, say: 'Have you got any grandchildren?', choices: ['Avez-vous des enfants ?', 'Avez-vous des grands-parents ?', 'Avez-vous des petits-enfants ?', 'J\'ai des petits-enfants.'], answer: 2, topic: 'Compréhension orale', sec: 'en3-s-havegot',
      why: { 0: 'Enfants = children ; on entend grandchildren (petits-enfants).', 1: 'Grands-parents = grandparents ; grandchildren = petits-enfants.', 3: 'C\'est une question (Have you got…?), pas une affirmation.' },
      explain: '**Have you got any grandchildren?** (Avez-vous des petits-enfants ?)', level: 2 },
    { id: 'en3-q-24', q: 'Écoute. Qui est-ce ?', listen: true, say: 'This is my daughter\'s husband.', choices: ['C\'est ma fille et son mari.', 'C\'est le fils de mon mari.', 'C\'est le mari de ma fille.', 'C\'est ma belle-fille.'], answer: 2, topic: 'Compréhension orale', sec: 'en3-s-genitif',
      why: { 0: 'Il n\'y a pas « and » (et) : daughter\'s = de ma fille.', 1: 'Fils = son ; ici on entend husband (mari).', 3: 'Ma belle-fille = my daughter-in-law.' },
      explain: 'my **daughter\'s husband** = le mari de ma fille (mon gendre : **my son-in-law**).', level: 2 }
  ],
  exercises: [
    { id: 'en3-x-01', prompt: 'Complète avec un possessif : Anne is with ___ son. (son fils = le fils d\'Anne)', answers: ['her'], topic: 'his ou her ?', sec: 'en3-s-possessifs', strict: true,
      hint: 'Le fils est à qui : à lui ou à elle ?',
      explain: 'Le fils d\'Anne (une femme) → **her** son. → Anne is with **her** son. (Anne est avec son fils.)',
      rule: 'à lui → **his** · à elle → **her** (on regarde qui possède, pas la chose possédée)',
      mistakes: [{ text: 'his', msg: '« his » = de lui. Ici, le fils est celui d\'Anne, une femme : **her** son.' }, { text: 'she', msg: '« she » veut dire « elle » (sujet). Pour son, sa, ses (à elle) : **her**.' }],
      say: 'Anne is with her son.', level: 1 },
    { id: 'en3-x-02', prompt: 'Complète avec un possessif : Tom and ___ wife are retired. (sa femme = la femme de Tom)', answers: ['his'], topic: 'his ou her ?', sec: 'en3-s-possessifs', strict: true,
      hint: 'La femme est à qui : à lui ou à elle ?',
      explain: 'La femme de Tom (un homme) → **his** wife. → Tom and **his** wife are retired. (Tom et sa femme sont à la retraite.)',
      rule: 'à lui → **his** · à elle → **her**',
      mistakes: [{ text: 'her', msg: '« her » = d\'elle. Ici, la femme est celle de Tom, un homme : **his** wife.' }, { text: 'he', msg: '« he » veut dire « il » (sujet). Pour son, sa, ses (à lui) : **his**.' }],
      say: 'Tom and his wife are retired.', level: 1 },
    { id: 'en3-x-03', prompt: 'Complète : ___ grandchildren are very funny. (nos petits-enfants)', answers: ['our'], topic: 'Les possessifs', sec: 'en3-s-possessifs', strict: true,
      hint: 'nous → notre, nos : quel possessif ?',
      explain: 'nous → **our** (notre, nos). → **Our** grandchildren are very funny. (Nos petits-enfants sont très drôles.)',
      rule: 'my · your · his · her · its · **our** · their',
      mistakes: [{ text: 'we', msg: '« we » = nous (sujet). Notre, nos = **our**.' }, { text: 'ours', msg: '« ours » veut dire « le nôtre » et s\'emploie sans nom. Devant un nom : **our** grandchildren.' }, { text: 'us', msg: '« us » = nous (après un verbe : with us). Notre, nos = **our**.' }],
      say: 'Our grandchildren are very funny.', level: 1 },
    { id: 'en3-x-04', prompt: 'Complète : The children are with ___ grandparents. (leurs grands-parents)', answers: ['their'], topic: 'Les possessifs', sec: 'en3-s-possessifs', strict: true,
      hint: 'ils, elles → leur, leurs.',
      explain: 'ils, elles → **their** (leur, leurs). → The children are with **their** grandparents. (Les enfants sont avec leurs grands-parents.)',
      rule: 'they → **their** (leur, leurs), invariable',
      mistakes: [{ text: 'there', msg: '« there » (là) se prononce comme their, mais c\'est un autre mot. Leur, leurs = **their**.' }, { text: 'they', msg: '« they » = ils, elles (sujet). Leur, leurs = **their**.' }, { text: 'theirs', msg: 'Le possessif ne prend pas de -s devant un nom : **their** grandparents.' }],
      say: 'The children are with their grandparents.', level: 1 },
    { id: 'en3-x-05', prompt: 'Traduis : ses enfants (les enfants de Marie)', answers: ['her children'], topic: 'his ou her ?', sec: 'en3-s-possessifs',
      hint: 'À elle → … ; enfant au pluriel → …',
      explain: 'Les enfants de Marie (une femme) → **her children** (ses enfants).',
      rule: 'à elle → **her** · child → **children**',
      mistakes: [{ text: 'his children', msg: '« his » = de lui. Les enfants de Marie (une femme) → **her** children.' }, { text: 'her childs', msg: 'Pluriel irrégulier : one child, two **children**.' }, { text: 'hers children', msg: 'Le possessif ne prend pas de -s : **her** children.' }],
      say: 'her children', level: 1 },
    { id: 'en3-x-06', prompt: 'Traduis : la femme de Paul', answers: ['Paul\'s wife'], topic: 'Le \'s possessif', sec: 'en3-s-genitif', strict: true,
      hint: 'Possesseur + \'s + chose.',
      explain: 'Possesseur + **\'s** + chose : **Paul\'s wife** (la femme de Paul).',
      rule: 'la chose de quelqu\'un → **quelqu\'un\'s** chose',
      mistakes: [{ text: 'the wife of Paul', msg: 'C\'est la construction française. En anglais : possesseur + **\'s** + chose → **Paul\'s wife**.' }, { text: 'Pauls wife', msg: 'N\'oublie pas l\'apostrophe : **Paul\'s** wife.' }, { text: 'Paul\'s woman', msg: 'Sa femme (son épouse) = **wife**. woman = une femme en général.' }],
      say: 'Paul\'s wife', level: 1 },
    { id: 'en3-x-07', prompt: 'Traduis : la voiture de ma sœur', answers: ['my sister\'s car'], topic: 'Le \'s possessif', sec: 'en3-s-genitif', strict: true,
      hint: 'D\'abord « ma sœur », puis \'s, puis « voiture ».',
      explain: 'Possesseur (my sister) + **\'s** + chose (car) : **my sister\'s car** (la voiture de ma sœur).',
      rule: 'Possesseur + **\'s** + chose possédée',
      mistakes: [{ text: 'the car of my sister', msg: 'C\'est la construction française. En anglais : **my sister\'s car**.' }, { text: 'my sisters car', msg: 'N\'oublie pas l\'apostrophe : my **sister\'s** car.' }, { text: 'my car\'s sister', msg: 'L\'ordre est inversé : d\'abord le possesseur (my sister), puis \'s, puis la chose (car).' }],
      say: 'my sister\'s car', level: 1 },
    { id: 'en3-x-08', prompt: 'Traduis : la maison de mes parents', answers: ['my parents\' house'], topic: 'Le \'s possessif', sec: 'en3-s-genitif', strict: true,
      hint: 'parents finit déjà par -s : où va l\'apostrophe ?',
      explain: 'Pluriel en -s → seulement l\'**apostrophe** après le s : **my parents\' house** (la maison de mes parents).',
      rule: 'Pluriel en -s → **s\'** (my parents\') · pluriel sans -s → **\'s** (the children\'s)',
      mistakes: [{ text: 'my parent\'s house', msg: '« parent\'s » = d\'un seul parent. Pour un pluriel en -s, l\'apostrophe se met **après** le s : my parents\' house.' }, { text: 'the house of my parents', msg: 'C\'est la construction française. En anglais : **my parents\' house**.' }, { text: 'my parents house', msg: 'Il manque l\'apostrophe après parents : **my parents\' house**.' }],
      say: 'my parents\' house', level: 2 },
    { id: 'en3-x-09', prompt: 'Complète : the ___ room (la chambre des enfants)', answers: ['children\'s'], topic: 'Le \'s possessif', sec: 'en3-s-genitif', strict: true,
      hint: 'children ne finit pas par -s.',
      explain: 'children est un pluriel sans -s → on ajoute **\'s** : **the children\'s room** (la chambre des enfants).',
      rule: 'Pluriel sans -s (children, men, women, people) → **\'s**',
      mistakes: [{ text: 'childrens\'', msg: 'children ne finit pas par -s : on ajoute **\'s** → children\'s.' }, { text: 'childrens', msg: 'Pas de -s en plus à children (déjà pluriel), mais il faut **\'s** : children\'s.' }, { text: 'child\'s', msg: '« child\'s » = d\'un seul enfant. Plusieurs enfants : **children\'s**.' }],
      say: 'the children\'s room', level: 2 },
    { id: 'en3-x-10', prompt: 'Complète avec have got ou has got : My brother ___ two daughters.', answers: ['has got', 'has'], topic: 'have got', sec: 'en3-s-havegot', strict: true,
      hint: 'My brother = he.',
      explain: 'my brother = he → **has got**. → My brother **has got** two daughters. (Mon frère a deux filles.)',
      rule: 'I / you / we / they **have got** · he / she / it **has got**',
      mistakes: [{ text: 'have got', msg: 'My brother = he → **has** got (have va avec I, you, we, they).' }, { text: 'is got', msg: '« is got » n\'existe pas : pour « avoir », c\'est **has got**.' }],
      say: 'My brother has got two daughters.', level: 1 },
    { id: 'en3-x-11', prompt: 'Complète : I ___ got a big family.', answers: ['have'], topic: 'have got', sec: 'en3-s-havegot', strict: true,
      hint: 'Avec I : have ou has ?',
      explain: 'Avec I : **have** got. → I **have** got a big family. (J\'ai une grande famille.) À l\'oral : I\'ve got…',
      rule: 'I / you / we / they **have got** · he / she / it **has got**',
      mistakes: [{ text: 'has', msg: '« has » va avec he, she, it. Avec I : **have** got.' }, { text: 'am', msg: '« am » vient de to be (être). Pour « avoir » : **have** got.' }],
      say: 'I have got a big family.', level: 1 },
    { id: 'en3-x-12', prompt: 'Mets à la forme négative : She has got a car.', answers: ['She hasn\'t got a car', 'She doesn\'t have a car'], topic: 'have got : la négation', sec: 'en3-s-havegot',
      hint: 'has + not + got.',
      explain: 'Négation : has + **not** + got → **hasn\'t got**. → She **hasn\'t got** a car. (Elle n\'a pas de voiture.)',
      rule: 'Négation : **haven\'t got** / **hasn\'t got**',
      mistakes: [{ text: 'She doesn\'t have got a car', msg: 'On ne mélange pas les deux : **She hasn\'t got a car**.' }, { text: 'She haven\'t got a car', msg: 'Avec she : **hasn\'t** (has + not).' }, { text: 'She has got not a car', msg: '« not » se place juste après has : She **hasn\'t got** a car.' }],
      say: 'She hasn\'t got a car.', level: 1 },
    { id: 'en3-x-13', prompt: 'Mets à la forme négative : They have got children.', answers: ['They haven\'t got any children', 'They haven\'t got children', 'They don\'t have any children', 'They don\'t have children'], topic: 'have got : la négation', sec: 'en3-s-havegot',
      hint: 'have + not + got (et souvent any).',
      explain: 'Négation : have + **not** + got → **haven\'t got**. → They **haven\'t got any** children. (Ils n\'ont pas d\'enfants.)',
      rule: 'Négation : **haven\'t got** (+ any devant un pluriel)',
      mistakes: [{ text: 'They hasn\'t got any children', msg: 'Avec they : **haven\'t** (hasn\'t va avec he, she, it).' }, { text: 'They don\'t have got any children', msg: 'On ne mélange pas don\'t et got : **They haven\'t got any children**.' }, { text: 'They haven\'t got any childs', msg: 'Pluriel irrégulier : **children**.' }],
      say: 'They haven\'t got any children.', level: 1 },
    { id: 'en3-x-14', prompt: 'Pose la question : You have got a dog. → ___?', answers: ['Have you got a dog', 'Do you have a dog'], topic: 'have got : la question', sec: 'en3-s-havegot',
      hint: 'Have passe devant le sujet.',
      explain: 'Question : **Have** + sujet + got…? → **Have you got** a dog? (As-tu un chien ?)',
      rule: 'Question : **Have / Has** + sujet + got… ?',
      mistakes: [{ text: 'Do you have got a dog', msg: 'On ne mélange pas do et got : **Have you got** a dog?' }, { text: 'You have got a dog', msg: 'Pour poser la question, **Have** passe devant le sujet : **Have you** got a dog?' }, { text: 'Has you got a dog', msg: 'Avec you : **Have** you got…?' }],
      say: 'Have you got a dog?', level: 1 },
    { id: 'en3-x-15', prompt: 'Pose la question : She has got a sister. → ___?', answers: ['Has she got a sister', 'Does she have a sister'], topic: 'have got : la question', sec: 'en3-s-havegot',
      hint: 'Has passe devant le sujet.',
      explain: 'Question : **Has** + she + got…? → **Has she got** a sister? (A-t-elle une sœur ?)',
      rule: 'Question : **Have / Has** + sujet + got… ?',
      mistakes: [{ text: 'Have she got a sister', msg: 'Avec she : **Has** she got…?' }, { text: 'Is she got a sister', msg: '« Is » vient de to be (être). Pour « avoir » : **Has** she got…?' }, { text: 'She has got a sister', msg: 'Pour poser la question, **Has** passe devant le sujet : **Has she** got a sister?' }],
      say: 'Has she got a sister?', level: 1 },
    { id: 'en3-x-16', prompt: 'Réponds « oui » avec une réponse courte : Have you got any grandchildren? → Yes, ___.', answers: ['I have', 'Yes, I have'], topic: 'have got : réponses courtes', sec: 'en3-s-havegot',
      hint: 'On reprend have, sans got.',
      explain: 'Réponse courte : on reprend **have**, sans got. → Yes, **I have**. (Oui.) Pour non : No, I haven\'t.',
      rule: 'Yes, I **have**. / No, I **haven\'t**. (sans got)',
      mistakes: [{ re: 'have got$', msg: 'Dans une réponse courte, on ne répète pas got : Yes, I **have**.' }, { text: 'I am', msg: 'La question est avec have : on répond avec **have** : Yes, I have.' }, { text: 'I has', msg: 'Avec I : **have** (has va avec he, she, it).' }],
      say: 'Have you got any grandchildren? Yes, I have.', level: 2 },
    { id: 'en3-x-17', prompt: 'Traduis : J\'ai soixante ans.', answers: ['I am sixty', 'I am sixty years old'], topic: 'Dire son âge', sec: 'en3-s-havegot',
      hint: 'L\'âge se dit avec to be.',
      explain: 'L\'âge se dit avec **to be** : **I am sixty** (years old). (J\'ai soixante ans.)',
      rule: 'Âge : **I am** + nombre (+ years old)',
      mistakes: [{ text: 'I have sixty years', msg: 'L\'âge se dit avec **to be** : I **am** sixty (years old). Jamais « I have… years ».' }, { text: 'I have got sixty years', msg: 'Pas de have got pour l\'âge : **I am sixty** (years old).' }, { text: 'I am sixty years', msg: 'Il manque **old** : I am sixty **years old** (ou simplement I am sixty).' }],
      say: 'I am sixty years old.', level: 1 },
    { id: 'en3-x-18', prompt: 'Traduis : Quel âge a ton fils ?', answers: ['How old is your son', 'What age is your son'], topic: 'Dire son âge', sec: 'en3-s-havegot',
      hint: 'How old + to be + … ?',
      explain: 'Pour demander l\'âge : **How old is** + la personne ? → **How old is your son?** (Quel âge a ton fils ?)',
      rule: 'Quel âge… ? = **How old** + is / are + … ?',
      mistakes: [{ text: 'How old has your son', msg: 'L\'âge se demande avec **to be** : How old **is** your son?' }, { text: 'How old your son is', msg: 'Dans la question, **is** passe avant le sujet : How old **is your son**?' }, { text: 'How many years has your son', msg: 'On ne compte pas les années avec have : on dit **How old is** your son?' }],
      say: 'How old is your son?', level: 2 },
    { id: 'en3-x-19', prompt: 'Mets au pluriel : one man → two ___', answers: ['men'], topic: 'Pluriels irréguliers', sec: 'en3-s-pluriels', strict: true,
      hint: 'Pluriel irrégulier : la voyelle change.',
      explain: 'one man → two **men** (un homme, deux hommes).',
      rule: 'man → **men** · woman → **women** · child → **children** · person → **people**',
      mistakes: [{ text: 'mans', msg: 'man est irrégulier : one man, two **men**.' }, { text: 'mens', msg: 'men est déjà un pluriel : pas de -s en plus.' }],
      say: 'one man, two men', level: 1 },
    { id: 'en3-x-20', prompt: 'Mets au pluriel : one woman → two ___', answers: ['women'], topic: 'Pluriels irréguliers', sec: 'en3-s-pluriels', strict: true,
      hint: 'Comme man → men.',
      explain: 'one woman → two **women** (prononcé « wi-min »).',
      rule: 'man → **men** · woman → **women** · child → **children** · person → **people**',
      mistakes: [{ text: 'womans', msg: 'woman est irrégulier : one woman, two **women**.' }, { text: 'womens', msg: 'women est déjà un pluriel : pas de -s en plus.' }],
      say: 'one woman, two women', level: 1 },
    { id: 'en3-x-21', prompt: 'Mets au pluriel : one child → three ___', answers: ['children'], topic: 'Pluriels irréguliers', sec: 'en3-s-pluriels', strict: true,
      hint: 'Pluriel irrégulier en -ren.',
      explain: 'one child → three **children** (un enfant, trois enfants).',
      rule: 'man → **men** · woman → **women** · child → **children** · person → **people**',
      mistakes: [{ text: 'childs', msg: 'child est irrégulier : one child, two **children**.' }, { text: 'childrens', msg: 'children est déjà un pluriel : pas de -s en plus.' }],
      say: 'one child, three children', level: 1 },
    { id: 'en3-x-22', prompt: 'Complète avec le pluriel de tous les jours : one person, two ___', answers: ['people'], topic: 'Pluriels irréguliers', sec: 'en3-s-pluriels', strict: true,
      hint: 'C\'est aussi le mot pour « les gens ».',
      explain: 'one person → two **people** (une personne, deux personnes). people veut aussi dire « les gens ».',
      rule: 'person → **people** (toujours pluriel : people are)',
      mistakes: [{ text: 'persons', msg: '« persons » ne s\'emploie que dans la langue administrative (panneaux, règlements). Au quotidien : one person, two **people**.' }, { text: 'peoples', msg: 'people est déjà un pluriel : pas de -s. (peoples veut dire « les peuples ».)' }],
      say: 'one person, two people', level: 1 },
    { id: 'en3-x-23', prompt: 'Corrige l\'erreur : People is very nice here.', answers: ['People are very nice here', 'The people are very nice here'], topic: 'Pluriels irréguliers', sec: 'en3-s-pluriels',
      hint: 'people est singulier ou pluriel ?',
      explain: '**people** (les gens) est un pluriel → **are**. → People **are** very nice here. (Les gens sont très sympas ici.)',
      rule: 'people, children, men, women → verbe au pluriel (**are**)',
      mistakes: [{ text: 'People is very nice here', msg: 'people est un **pluriel** (les gens) : People **are**…' }, { text: 'Peoples are very nice here', msg: 'Pas de -s : people est déjà un pluriel.' }],
      say: 'People are very nice here.', level: 1 },
    { id: 'en3-x-24', prompt: 'Traduis : Mes frères sont grands (de taille).', answers: ['My brothers are tall'], topic: 'Décrire quelqu\'un', sec: 'en3-s-decrire',
      hint: 'grand (de taille) = tall ; l\'adjectif ne change pas.',
      explain: 'Grand (de taille) = **tall**, invariable. → My brothers are **tall**. (Mes frères sont grands.)',
      rule: 'L\'adjectif est **invariable** : pas de -s au pluriel',
      mistakes: [{ text: 'My brothers are talls', msg: 'L\'adjectif anglais ne prend jamais de -s : They are **tall**.' }, { text: 'My brothers are big', msg: 'Pour la taille d\'une personne : **tall**. big veut plutôt dire « gros » (ou grand pour un objet).' }, { text: 'My brother are tall', msg: '« mes frères » est au pluriel → **brothers**.' }],
      say: 'My brothers are tall.', level: 1 },
    { id: 'en3-x-25', prompt: 'Traduis : C\'est une femme gentille.', answers: ['She is a kind woman', 'She is a nice woman'], topic: 'Décrire quelqu\'un', sec: 'en3-s-decrire',
      hint: 'Pour une femme, « c\'est » = She is ; l\'adjectif se place avant le nom.',
      explain: 'L\'adjectif se place **avant** le nom : **She is a kind woman.** (C\'est une femme gentille.)',
      rule: 'a / an + **adjectif** + nom',
      mistakes: [{ text: 'She is a woman kind', msg: 'L\'adjectif se place **avant** le nom : a **kind** woman.' }, { text: 'She is kind woman', msg: 'Il manque **a** : She is **a** kind woman.' }, { text: 'It is a kind woman', msg: 'Pour une personne, « c\'est » se dit **She is** (ou He is), pas it is.' }],
      say: 'She is a kind woman.', level: 2 },
    { id: 'en3-x-26', prompt: 'Traduis : Mon fils est marié.', answers: ['My son is married'], topic: 'Décrire quelqu\'un', sec: 'en3-s-decrire',
      hint: 'être marié = to be married.',
      explain: 'Être marié = **to be married**. → My son **is married**. (Mon fils est marié.)',
      rule: 'Décrire quelqu\'un : sujet + **to be** + adjectif',
      mistakes: [{ text: 'My son has married', msg: '« has married » voudrait dire « s\'est marié ». Pour dire qu\'il est marié (son état) : My son **is** married.' }, { text: 'My son is marry', msg: '« marry » est le verbe (se marier). Marié = **married**.' }],
      say: 'My son is married.', level: 1 },
    { id: 'en3-x-27', prompt: 'Remets dans l\'ordre (phrase affirmative) : got / has / she / brothers / two', answers: ['She has got two brothers'], topic: 'have got', sec: 'en3-s-havegot',
      hint: 'Sujet + has got + complément.',
      explain: 'Sujet + **has got** + complément : **She has got two brothers.** (Elle a deux frères.)',
      rule: 'Affirmation : sujet + **have / has got** + …',
      mistakes: [{ text: 'She got has two brothers', msg: 'On dit **has got**, dans cet ordre : She has got two brothers.' }, { text: 'Has she got two brothers', msg: 'C\'est la question. La consigne demande une phrase affirmative : **She has got** two brothers.' }],
      say: 'She has got two brothers.', level: 1 },
    { id: 'en3-x-28', prompt: 'Traduis : Avez-vous des enfants ?', answers: ['Have you got any children', 'Have you got children', 'Do you have any children', 'Do you have children', 'Have you got any kids', 'Do you have any kids'], topic: 'have got : la question', sec: 'en3-s-havegot',
      hint: 'Have + you + got + any + enfants (pluriel irrégulier) ?',
      explain: '**Have you got any children?** (Avez-vous des enfants ?) — any = des, dans une question.',
      rule: 'Question : **Have / Has** + sujet + got (+ any) … ?',
      mistakes: [{ text: 'Have you got any childs', msg: 'Pluriel irrégulier : one child, two **children**.' }, { text: 'Do you have got any children', msg: 'On ne mélange pas do et got : **Have you got** any children?' }, { text: 'You have got any children', msg: 'Dans la question, **Have** passe avant le sujet : **Have you** got any children?' }],
      say: 'Have you got any children?', level: 1 },
    { id: 'en3-x-29', prompt: 'Traduis : Sa femme est très sympa. (la femme de Tom)', answers: ['His wife is very nice'], topic: 'his ou her ?', sec: 'en3-s-possessifs',
      hint: 'La femme de Tom : à lui → … ; sympa = nice.',
      explain: 'La femme de Tom (un homme) → **his wife**. → **His wife is very nice.** (Sa femme est très sympa.)',
      rule: 'à lui → **his** · à elle → **her**',
      mistakes: [{ text: 'Her wife is very nice', msg: '« her » = d\'elle. La femme de Tom (un homme) → **his** wife.' }, { text: 'His woman is very nice', msg: 'L\'épouse = **wife**. woman = une femme en général.' }],
      say: 'His wife is very nice.', level: 1 },
    { id: 'en3-x-30', prompt: 'Complète : My sister\'s daughter is my ___.', answers: ['niece'], topic: 'La famille', sec: 'en3-s-vocab',
      hint: 'La fille de ta sœur…',
      explain: 'La fille de ma sœur = ma nièce : My sister\'s daughter is my **niece**.',
      rule: 'nephew = neveu · **niece** = nièce · cousin = cousin, cousine',
      mistakes: [{ text: 'nephew', msg: 'nephew = le neveu (un garçon). La fille de ta sœur = ta nièce : **niece**.' }, { text: 'cousin', msg: 'cousin = l\'enfant de ton oncle ou de ta tante. La fille de ta sœur = **niece**.' }],
      say: 'My sister\'s daughter is my niece.', level: 1 }
  ]
});
