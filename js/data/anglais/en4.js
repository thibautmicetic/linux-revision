/* Anglais — chapitre 4 : La maison et les objets (pièces, meubles, objets, a/an/the, pluriels, there is/are, prépositions de lieu, this/that) */
APP.registerChapter({
  id: 'en4', subject: 'anglais', num: 4,
  title: 'La maison et les objets', subtitle: 'a, an, the · les pluriels · there is / there are · in, on, under · this, that',
  vocabSec: 'en4-s-vocab',
  sections: [
    {
      id: 'en4-s-vocab', title: 'Les mots de la maison',
      html: `
<p>Voici les mots de la maison et des objets de tous les jours. Touche un mot anglais pour l'entendre.</p>
<h3>La maison et les pièces</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">a house</span></td><td>une maison</td></tr>
<tr><td><span class="say">a flat</span></td><td>un appartement</td></tr>
<tr><td><span class="say">a room</span></td><td>une pièce</td></tr>
<tr><td><span class="say">the kitchen</span></td><td>la cuisine</td></tr>
<tr><td><span class="say">the bedroom</span></td><td>la chambre</td></tr>
<tr><td><span class="say">the bathroom</span></td><td>la salle de bains</td></tr>
<tr><td><span class="say">the toilet</span></td><td>les toilettes</td></tr>
<tr><td><span class="say">the living room</span></td><td>le salon</td></tr>
<tr><td><span class="say">the garden</span></td><td>le jardin</td></tr>
<tr><td><span class="say">the garage</span></td><td>le garage</td></tr>
<tr><td><span class="say">the stairs</span></td><td>l'escalier</td></tr>
<tr><td><span class="say">the floor</span></td><td>le sol, l'étage</td></tr>
<tr><td><span class="say">the wall</span></td><td>le mur</td></tr>
<tr><td><span class="say">the door</span></td><td>la porte</td></tr>
<tr><td><span class="say">the window</span></td><td>la fenêtre</td></tr></table>
<h3>Les meubles</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">a table</span></td><td>une table</td></tr>
<tr><td><span class="say">a chair</span></td><td>une chaise</td></tr>
<tr><td><span class="say">an armchair</span></td><td>un fauteuil</td></tr>
<tr><td><span class="say">a sofa</span></td><td>un canapé</td></tr>
<tr><td><span class="say">a bed</span></td><td>un lit</td></tr>
<tr><td><span class="say">a wardrobe</span></td><td>une armoire</td></tr>
<tr><td><span class="say">a cupboard</span></td><td>un placard</td></tr>
<tr><td><span class="say">a shelf</span></td><td>une étagère</td></tr>
<tr><td><span class="say">a lamp</span></td><td>une lampe</td></tr></table>
<h3>Dans la cuisine</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">a fridge</span></td><td>un frigo</td></tr>
<tr><td><span class="say">an oven</span></td><td>un four</td></tr>
<tr><td><span class="say">a cup</span></td><td>une tasse</td></tr>
<tr><td><span class="say">a glass</span></td><td>un verre</td></tr>
<tr><td><span class="say">a plate</span></td><td>une assiette</td></tr>
<tr><td><span class="say">a knife</span></td><td>un couteau</td></tr>
<tr><td><span class="say">a fork</span></td><td>une fourchette</td></tr>
<tr><td><span class="say">a spoon</span></td><td>une cuillère</td></tr></table>
<h3>Les objets de tous les jours</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">a key</span></td><td>une clé</td></tr>
<tr><td><span class="say">a phone</span></td><td>un téléphone</td></tr>
<tr><td><span class="say">a television</span> · <span class="say">a TV</span></td><td>une télévision</td></tr>
<tr><td><span class="say">a computer</span></td><td>un ordinateur</td></tr>
<tr><td><span class="say">a book</span></td><td>un livre</td></tr>
<tr><td><span class="say">a bag</span></td><td>un sac</td></tr>
<tr><td><span class="say">a box</span></td><td>une boîte, un carton</td></tr>
<tr><td><span class="say">an umbrella</span></td><td>un parapluie</td></tr></table>
<p>Pour décrire : <span class="say">big</span> = grand, gros · <span class="say">small</span> = petit. <span class="say">a big house</span> — une grande maison · <span class="say">a small kitchen</span> — une petite cuisine.</p>
<div class="callout warn"><b>Piège : room ou bedroom ?</b> <span class="say">room</span> = une pièce (n'importe laquelle). La chambre = <span class="say">bedroom</span> (<span class="say">bed</span> = lit). À l'hôtel, ta chambre se dit simplement <span class="say">your room</span>.</div>
<div class="callout key"><b>À retenir</b> Le placard = <span class="say">cupboard</span> ; l'armoire (pour les vêtements) = <span class="say">wardrobe</span>.</div>
<div class="callout info"><b>Les étages</b> <span class="say">the ground floor</span> = le rez-de-chaussée · <span class="say">the first floor</span> = le premier étage (en Angleterre). <span class="say">upstairs</span> = en haut, à l'étage · <span class="say">downstairs</span> = en bas.</div>
<div class="callout tip"><b>Prononciation</b> Dans <span class="say">cupboard</span>, le p ne se prononce pas : « keu-beud ». Dans <span class="say">knife</span>, le k ne se prononce pas : « naïf ».</div>`
    },
    {
      id: 'en4-s-articles', title: 'a, an, the… ou rien ?',
      html: `
<h3>a / an = un, une (rappel)</h3>
<p>On met <b>a</b> devant un son consonne, et <b>an</b> devant un son voyelle (a, e, i, o, u). C'est le <b>son</b> qui compte, pas la lettre :</p>
<ul>
<li><span class="say">a chair</span>, <span class="say">a key</span>, <span class="say">a house</span> (le h se prononce)</li>
<li><span class="say">an armchair</span>, <span class="say">an oven</span>, <span class="say">an umbrella</span>, <span class="say">an hour</span> (le h ne se prononce pas)</li>
</ul>
<p>Au pluriel, « des » ne se traduit souvent pas : <span class="say">a cup</span> → <span class="say">cups</span> (des tasses).</p>
<h3>the = le, la, les</h3>
<p><b>the</b> sert pour une chose <b>précise</b>, qu'on connaît. Il ne change jamais : <span class="say">the kitchen</span> (la cuisine), <span class="say">the bed</span> (le lit), <span class="say">the keys</span> (les clés).</p>
<p>Prononciation : « zeu » devant une consonne (<span class="say">the door</span>), « zi » devant un son voyelle (<span class="say">the oven</span>).</p>
<h3>Pas d'article : pour parler en général</h3>
<p>Quand on parle d'une chose <b>en général</b>, on ne met <b>pas d'article</b>, alors que le français dit « le, la, les » :</p>
<p><span class="say">I like coffee.</span> — J'aime le café (le café en général).<br>
<span class="say">I like old houses.</span> — J'aime les vieilles maisons.<br>
<span class="say">Books are expensive.</span> — Les livres sont chers.</p>
<p>Mais pour une chose précise, on met <b>the</b> : <span class="say">The coffee is cold.</span> — Le café est froid (celui qui est dans ma tasse).</p>
<div class="callout key"><b>À retenir</b> un, une → <b>a / an</b> · le, la, les (une chose précise) → <b>the</b> · le, la, les (en général) → <b>rien</b>.</div>
<div class="callout warn"><b>Pièges</b> Pas d'article après un possessif : <span class="say">my house</span> (et non « the my house »). « À la maison » = <span class="say">at home</span>, sans article. Et devant un métier, l'anglais met <b>a / an</b> : <span class="say">She is a doctor.</span> — Elle est médecin.</div>`
    },
    {
      id: 'en4-s-pluriels', title: 'Les pluriels : -s, -es, -ies, -ves',
      html: `
<p>Pour mettre un nom au pluriel, on ajoute en général <b>-s</b> : <span class="say">a chair</span> → <span class="say">two chairs</span>, <span class="say">a room</span> → <span class="say">three rooms</span>. Mais il y a quelques règles d'orthographe :</p>
<table><tr><th>Le mot finit par…</th><th>Règle</th><th>Exemples</th></tr>
<tr><td>presque tout</td><td>+ <b>s</b></td><td><span class="say">cups</span> (tasses) · <span class="say">beds</span> (lits) · <span class="say">doors</span> (portes)</td></tr>
<tr><td>-s, -sh, -ch, -x</td><td>+ <b>es</b></td><td><span class="say">glass, glasses</span> (verre) · <span class="say">dish, dishes</span> (plat) · <span class="say">watch, watches</span> (montre) · <span class="say">box, boxes</span> (boîte)</td></tr>
<tr><td>consonne + y</td><td>y → <b>ies</b></td><td><span class="say">baby, babies</span> (bébé) · <span class="say">family, families</span> (famille) · <span class="say">city, cities</span> (ville)</td></tr>
<tr><td>voyelle + y</td><td>+ <b>s</b></td><td><span class="say">key, keys</span> (clé) · <span class="say">boy, boys</span> (garçon) · <span class="say">day, days</span> (jour)</td></tr>
<tr><td>-f, -fe</td><td>f → <b>ves</b></td><td><span class="say">knife, knives</span> (couteau) · <span class="say">shelf, shelves</span> (étagère) · <span class="say">wife, wives</span> (épouse)</td></tr></table>
<p>Avec <b>-es</b>, on entend une syllabe en plus : <span class="say">box</span> (une syllabe) → <span class="say">boxes</span> (deux syllabes : « bok-siz »).</p>
<div class="callout key"><b>À retenir</b> <b>-s</b> en général · <b>-es</b> après s, sh, ch, x · consonne + y → <b>-ies</b> · la plupart des mots en <b>-f / -fe → -ves</b>.</div>
<div class="callout warn"><b>Pièges</b> L'adjectif ne prend jamais de -s : <span class="say">two big rooms</span> (et non « bigs »). Et n'oublie pas les pluriels irréguliers du chapitre 3 : <span class="say">men</span>, <span class="say">women</span>, <span class="say">children</span>, <span class="say">people</span>.</div>
<div class="callout tip"><b>Astuce</b> <span class="say">glasses</span> veut dire « des verres », mais aussi « des lunettes » : <span class="say">Where are my glasses?</span> — Où sont mes lunettes ?</div>`
    },
    {
      id: 'en4-s-thereis', title: 'There is / there are : il y a',
      html: `
<p>Pour dire « il y a », l'anglais utilise <b>there is</b> avec un singulier (une seule chose) et <b>there are</b> avec un pluriel (plusieurs choses).</p>
<table><tr><th></th><th>Une seule chose</th><th>Plusieurs choses</th></tr>
<tr><td>Affirmation</td><td><span class="say">There is a sofa.</span> (à l'oral : <span class="say">There's a sofa.</span>)</td><td><span class="say">There are two chairs.</span></td></tr>
<tr><td>Négation</td><td><span class="say">There isn't a garage.</span></td><td><span class="say">There aren't any shops.</span></td></tr>
<tr><td>Question</td><td><span class="say">Is there a lift?</span></td><td><span class="say">Are there any shops?</span></td></tr>
<tr><td>Réponses courtes</td><td><span class="say">Yes, there is.</span> / <span class="say">No, there isn't.</span></td><td><span class="say">Yes, there are.</span> / <span class="say">No, there aren't.</span></td></tr></table>
<h3>Exemples</h3>
<p><span class="say">There is a garden behind the house.</span> — Il y a un jardin derrière la maison.<br>
<span class="say">There are three bedrooms upstairs.</span> — Il y a trois chambres à l'étage.<br>
<span class="say">There isn't a lift.</span> — Il n'y a pas d'ascenseur.<br>
<span class="say">Is there a fridge in the room?</span> — Y a-t-il un frigo dans la chambre ?<br>
<span class="say">How many rooms are there?</span> — Combien de pièces y a-t-il ?</p>
<div class="callout key"><b>À retenir</b> <b>There is</b> + une seule chose · <b>There are</b> + plusieurs. Pour la question, on inverse : <b>Is there…?</b> <b>Are there…?</b></div>
<div class="callout info"><b>some et any</b> Au pluriel, « des » se dit <span class="say">some</span> dans une affirmation, et <span class="say">any</span> dans une question ou une négation : <span class="say">There are some books on the shelf.</span> (Il y a des livres sur l'étagère.) · <span class="say">Are there any cups?</span> (Y a-t-il des tasses ?) · <span class="say">There aren't any chairs.</span> (Il n'y a pas de chaises.) On peut aussi dire <span class="say">There is no lift.</span> (= There isn't a lift.)</div>
<div class="callout warn"><b>Pièges</b> Ne traduis pas « il y a » mot à mot : pas de « it has » ni de « there has ». Avec un pluriel, c'est <span class="say">There are</span> (jamais « There is two chairs »). Dans la réponse courte « oui », pas de forme courte : <span class="say">Yes, there is.</span> (et non « Yes, there's »).</div>`
    },
    {
      id: 'en4-s-prepositions', title: 'Où est… ? in, on, under, next to…',
      html: `
<p>Pour dire où se trouve une chose, on utilise <b>to be</b> + une préposition de lieu : <span class="say">The keys are on the table.</span> — Les clés sont sur la table.</p>
<table><tr><th>Anglais</th><th>Français</th><th>Exemple</th></tr>
<tr><td><span class="say">in</span></td><td>dans</td><td><span class="say">The milk is in the fridge.</span> — Le lait est dans le frigo.</td></tr>
<tr><td><span class="say">on</span></td><td>sur</td><td><span class="say">The phone is on the table.</span> — Le téléphone est sur la table.</td></tr>
<tr><td><span class="say">under</span></td><td>sous</td><td><span class="say">The cat is under the bed.</span> — Le chat est sous le lit.</td></tr>
<tr><td><span class="say">next to</span></td><td>à côté de</td><td><span class="say">The lamp is next to the sofa.</span> — La lampe est à côté du canapé.</td></tr>
<tr><td><span class="say">behind</span></td><td>derrière</td><td><span class="say">The garden is behind the house.</span> — Le jardin est derrière la maison.</td></tr>
<tr><td><span class="say">in front of</span></td><td>devant</td><td><span class="say">The car is in front of the garage.</span> — La voiture est devant le garage.</td></tr>
<tr><td><span class="say">between</span></td><td>entre</td><td><span class="say">The bathroom is between the two bedrooms.</span> — La salle de bains est entre les deux chambres.</td></tr>
<tr><td><span class="say">opposite</span></td><td>en face de</td><td><span class="say">The bank is opposite the station.</span> — La banque est en face de la gare.</td></tr></table>
<h3>Poser la question</h3>
<p><span class="say">Where is my phone?</span> — <span class="say">It's on the sofa.</span> (Où est mon téléphone ? — Il est sur le canapé.)<br>
<span class="say">Where are my keys?</span> — <span class="say">They're in your bag.</span> (Où sont mes clés ? — Elles sont dans ton sac.)</p>
<div class="callout key"><b>À retenir</b> <b>Where is</b> + une seule chose → réponse <b>It's</b>… · <b>Where are</b> + plusieurs → réponse <b>They're</b>…</div>
<div class="callout warn"><b>Le grand piège : devant ou en face de ?</b> <span class="say">in front of</span> = <b>devant</b> (juste devant, du même côté). « En face de » (de l'autre côté, par exemple de la rue) = <span class="say">opposite</span>.</div>
<div class="callout tip"><b>Les petits mots à ne pas oublier</b> <span class="say">next to</span> (avec <b>to</b>) et <span class="say">in front of</span> (avec <b>of</b>), mais <span class="say">behind</span>, <span class="say">opposite</span>, <span class="say">under</span> et <span class="say">between</span> tout seuls. Et aussi : <span class="say">on the wall</span> = au mur · <span class="say">on the floor</span> = par terre · <span class="say">on the first floor</span> = au premier étage.</div>`
    },
    {
      id: 'en4-s-demonstratifs', title: 'this, that, these, those',
      html: `
<p>Pour montrer une chose (ce, cette, ces…), l'anglais distingue ce qui est <b>près</b> de toi et ce qui est <b>loin</b>.</p>
<table><tr><th></th><th>Près (ici)</th><th>Loin (là-bas)</th></tr>
<tr><td>Une seule chose</td><td><span class="say">this</span> = ce, cette… -ci</td><td><span class="say">that</span> = ce, cette… -là</td></tr>
<tr><td>Plusieurs choses</td><td><span class="say">these</span> = ces… -ci</td><td><span class="say">those</span> = ces… -là</td></tr></table>
<h3>Exemples</h3>
<p><span class="say">This chair is very old.</span> — Cette chaise est très vieille.<br>
<span class="say">That house is very big.</span> — Cette maison-là est très grande.<br>
<span class="say">These cups are new.</span> — Ces tasses sont neuves.<br>
<span class="say">Those chairs are in the garden.</span> — Ces chaises-là sont dans le jardin.</p>
<h3>Tout seuls : ceci, cela, ça</h3>
<p><span class="say">This is my bedroom.</span> — Voici ma chambre.<br>
<span class="say">What's this?</span> — <span class="say">It's a key.</span> (Qu'est-ce que c'est ? — C'est une clé.)<br>
<span class="say">What are those?</span> — <span class="say">They're cups.</span> (Qu'est-ce que c'est, là-bas ? — Ce sont des tasses.)</p>
<div class="callout key"><b>À retenir</b> <b>this / that</b> + une seule chose → <b>is</b> · <b>these / those</b> + plusieurs → <b>are</b>. Le nom se met aussi au pluriel : <span class="say">these chairs</span>.</div>
<div class="callout info"><b>Prononciation</b> <span class="say">this</span> a un i court (« ziss »), <span class="say">these</span> un i long (« ziiz »). Écoute bien la différence : <span class="say">this key</span>, <span class="say">these keys</span>.</div>
<div class="callout warn"><b>Piège</b> Pas de « these chair » ni de « this chairs » : <span class="say">this chair</span> (une chaise), <span class="say">these chairs</span> (des chaises). Et jamais « these is » : <span class="say">These are my keys.</span></div>`
    },
    {
      id: 'en4-s-pieges', title: 'Les pièges des francophones',
      html: `
<p>Les erreurs les plus fréquentes de ce chapitre, à relire avant les exercices :</p>
<ul>
<li><b>room ou bedroom</b> : la chambre (à la maison) = <span class="say">bedroom</span> ; <span class="say">room</span> = une pièce (ou une chambre d'hôtel).</li>
<li><b>in front of ≠ en face de</b> : <span class="say">in front of the house</span> = devant la maison ; « en face de » = <span class="say">opposite</span>.</li>
<li><b>Il y a</b> : <span class="say">There is</span> + une seule chose, <span class="say">There are</span> + plusieurs. Jamais « it has » ni « There is two… ».</li>
<li><b>Pas d'article pour parler en général</b> : <span class="say">I like coffee.</span> (J'aime le café.), pas « I like the coffee ».</li>
<li><b>a ou an</b> dépend du son : <span class="say">a house</span> (le h se prononce), <span class="say">an oven</span>, <span class="say">an armchair</span>.</li>
<li><b>Les pluriels en -ves</b> : <span class="say">knives</span>, <span class="say">shelves</span> (pas « knifes »). Et <span class="say">keys</span> (pas « keies »).</li>
<li><b>this ou these</b> : <span class="say">this key</span> (une clé), <span class="say">these keys</span> (des clés).</li>
<li><b>Le placard</b> = <span class="say">cupboard</span> ; l'armoire = <span class="say">wardrobe</span>.</li>
</ul>
<div class="callout key"><b>À retenir</b> il y a → <b>There is / There are</b> · devant → <b>in front of</b> · en face de → <b>opposite</b> · ici → <b>this / these</b> · là-bas → <b>that / those</b>.</div>`
    }
  ],
  words: [
    { en: 'house', fr: 'la maison', pos: 'n', cat: 'La maison et les pièces', ex: 'My house is small.', exFr: 'Ma maison est petite.', level: 1, note: 'À la maison = at home (sans article).' },
    { en: 'flat', fr: 'l\'appartement', pos: 'n', cat: 'La maison et les pièces', alt: ['apartment'], ex: 'Our flat is on the second floor.', exFr: 'Notre appartement est au deuxième étage.', level: 1, note: 'En Amérique : apartment.' },
    { en: 'room', fr: 'la pièce', pos: 'n', cat: 'La maison et les pièces', ex: 'The house has got six rooms.', exFr: 'La maison a six pièces.', level: 1, note: 'La chambre (à la maison) = bedroom. Une chambre d\'hôtel = a room.' },
    { en: 'kitchen', fr: 'la cuisine', pos: 'n', cat: 'La maison et les pièces', ex: 'The kitchen is very small.', exFr: 'La cuisine est très petite.', level: 1 },
    { en: 'bedroom', fr: 'la chambre', pos: 'n', cat: 'La maison et les pièces', ex: 'There are three bedrooms.', exFr: 'Il y a trois chambres.', level: 1, note: 'bed (le lit) + room (la pièce).' },
    { en: 'bathroom', fr: 'la salle de bains', pos: 'n', cat: 'La maison et les pièces', ex: 'The bathroom is next to the bedroom.', exFr: 'La salle de bains est à côté de la chambre.', level: 1, note: 'Aux États-Unis, bathroom veut aussi dire « les toilettes ».' },
    { en: 'toilet', fr: 'les toilettes', pos: 'n', cat: 'La maison et les pièces', alt: ['toilets', 'loo'], ex: 'Where is the toilet, please?', exFr: 'Où sont les toilettes, s\'il vous plaît ?', level: 1, note: 'À la maison, on dit the toilet (au singulier). Familier : the loo.' },
    { en: 'living room', fr: 'le salon', pos: 'n', cat: 'La maison et les pièces', alt: ['lounge', 'sitting room'], ex: 'The sofa is in the living room.', exFr: 'Le canapé est dans le salon.', level: 1 },
    { en: 'garden', fr: 'le jardin', pos: 'n', cat: 'La maison et les pièces', ex: 'There is a garden behind the house.', exFr: 'Il y a un jardin derrière la maison.', level: 1, note: 'En Amérique, on dit souvent yard.' },
    { en: 'garage', fr: 'le garage', pos: 'n', cat: 'La maison et les pièces', ex: 'The car is in the garage.', exFr: 'La voiture est dans le garage.', level: 1, note: 'Se prononce « ga-râj » ou « ga-ridj ».' },
    { en: 'stairs', fr: 'l\'escalier', pos: 'n', cat: 'La maison et les pièces', ex: 'The stairs are next to the kitchen.', exFr: 'L\'escalier est à côté de la cuisine.', level: 2, note: 'Toujours au pluriel : the stairs are… En haut = upstairs ; en bas = downstairs.' },
    { en: 'floor', fr: 'le sol, l\'étage', pos: 'n', cat: 'La maison et les pièces', ex: 'My glasses are on the floor.', exFr: 'Mes lunettes sont par terre.', level: 2, note: 'the ground floor = le rez-de-chaussée ; the first floor = le premier étage (en Angleterre).' },
    { en: 'wall', fr: 'le mur', pos: 'n', cat: 'La maison et les pièces', ex: 'There is a picture on the wall.', exFr: 'Il y a un tableau au mur.', level: 1 },
    { en: 'door', fr: 'la porte', pos: 'n', cat: 'La maison et les pièces', ex: 'The door is open.', exFr: 'La porte est ouverte.', level: 1 },
    { en: 'window', fr: 'la fenêtre', pos: 'n', cat: 'La maison et les pièces', ex: 'The table is in front of the window.', exFr: 'La table est devant la fenêtre.', level: 1 },
    { en: 'table', fr: 'la table', pos: 'n', cat: 'Les meubles', ex: 'The cups are on the table.', exFr: 'Les tasses sont sur la table.', level: 1 },
    { en: 'chair', fr: 'la chaise', pos: 'n', cat: 'Les meubles', ex: 'There are four chairs in the kitchen.', exFr: 'Il y a quatre chaises dans la cuisine.', level: 1 },
    { en: 'armchair', fr: 'le fauteuil', pos: 'n', cat: 'Les meubles', ex: 'There is an armchair next to the window.', exFr: 'Il y a un fauteuil à côté de la fenêtre.', level: 1, note: 'arm = le bras : une chaise avec des bras ! On dit an armchair (son voyelle).' },
    { en: 'sofa', fr: 'le canapé', pos: 'n', cat: 'Les meubles', alt: ['couch', 'settee'], ex: 'The cat is on the sofa.', exFr: 'Le chat est sur le canapé.', level: 1 },
    { en: 'bed', fr: 'le lit', pos: 'n', cat: 'Les meubles', ex: 'My phone is under the bed.', exFr: 'Mon téléphone est sous le lit.', level: 1 },
    { en: 'wardrobe', fr: 'l\'armoire', pos: 'n', cat: 'Les meubles', ex: 'The wardrobe is in the bedroom.', exFr: 'L\'armoire est dans la chambre.', level: 2, note: 'En Amérique : closet. Le placard = cupboard.' },
    { en: 'cupboard', fr: 'le placard', pos: 'n', cat: 'Les meubles', ex: 'The cups are in the cupboard.', exFr: 'Les tasses sont dans le placard.', level: 1, note: 'Le p ne se prononce pas : « keu-beud ».' },
    { en: 'shelf', fr: 'l\'étagère', pos: 'n', cat: 'Les meubles', ex: 'The books are on the shelf.', exFr: 'Les livres sont sur l\'étagère.', level: 1, note: 'Pluriel : shelves (le f devient ves).' },
    { en: 'lamp', fr: 'la lampe', pos: 'n', cat: 'Les meubles', ex: 'The lamp is next to the bed.', exFr: 'La lampe est à côté du lit.', level: 1 },
    { en: 'fridge', fr: 'le frigo', pos: 'n', cat: 'Dans la cuisine', alt: ['refrigerator'], ex: 'The milk is in the fridge.', exFr: 'Le lait est dans le frigo.', level: 1, note: 'Le mot long : refrigerator (le réfrigérateur).' },
    { en: 'oven', fr: 'le four', pos: 'n', cat: 'Dans la cuisine', ex: 'The bread is in the oven.', exFr: 'Le pain est dans le four.', level: 1, note: 'Se prononce « eu-veun ». On dit an oven (son voyelle).' },
    { en: 'cup', fr: 'la tasse', pos: 'n', cat: 'Dans la cuisine', ex: 'This cup is very old.', exFr: 'Cette tasse est très vieille.', level: 1, note: 'a cup of tea = une tasse de thé.' },
    { en: 'glass', fr: 'le verre', pos: 'n', cat: 'Dans la cuisine', ex: 'The glasses are in the cupboard.', exFr: 'Les verres sont dans le placard.', level: 1, note: 'Pluriel : glasses (-es après s). glasses veut aussi dire « les lunettes ».' },
    { en: 'plate', fr: 'l\'assiette', pos: 'n', cat: 'Dans la cuisine', ex: 'There are six plates on the table.', exFr: 'Il y a six assiettes sur la table.', level: 1 },
    { en: 'knife', fr: 'le couteau', pos: 'n', cat: 'Dans la cuisine', ex: 'Where are the knives?', exFr: 'Où sont les couteaux ?', level: 1, note: 'Le k ne se prononce pas : « naïf ». Pluriel : knives.' },
    { en: 'fork', fr: 'la fourchette', pos: 'n', cat: 'Dans la cuisine', ex: 'There is a fork next to the plate.', exFr: 'Il y a une fourchette à côté de l\'assiette.', level: 1 },
    { en: 'spoon', fr: 'la cuillère', pos: 'n', cat: 'Dans la cuisine', ex: 'Is there a spoon?', exFr: 'Y a-t-il une cuillère ?', level: 1 },
    { en: 'key', fr: 'la clé', pos: 'n', cat: 'Les objets', ex: 'Where are my keys?', exFr: 'Où sont mes clés ?', level: 1, note: 'Pluriel : keys (voyelle + y → s). Se prononce « kii ».' },
    { en: 'phone', fr: 'le téléphone', pos: 'n', cat: 'Les objets', alt: ['telephone', 'mobile phone'], ex: 'Is this your phone?', exFr: 'C\'est ton téléphone ?', level: 1, note: 'Le portable = a mobile (phone) en Angleterre, a cell phone en Amérique.' },
    { en: 'television', fr: 'la télévision', pos: 'n', cat: 'Les objets', alt: ['TV', 'telly'], ex: 'The television is in the living room.', exFr: 'La télévision est dans le salon.', level: 1, note: 'On dit très souvent TV (« ti-vi »).' },
    { en: 'computer', fr: 'l\'ordinateur', pos: 'n', cat: 'Les objets', ex: 'My computer is in the bedroom.', exFr: 'Mon ordinateur est dans la chambre.', level: 1 },
    { en: 'book', fr: 'le livre', pos: 'n', cat: 'Les objets', ex: 'These books are very old.', exFr: 'Ces livres sont très vieux.', level: 1 },
    { en: 'bag', fr: 'le sac', pos: 'n', cat: 'Les objets', ex: 'My keys are in my bag.', exFr: 'Mes clés sont dans mon sac.', level: 1 },
    { en: 'box', fr: 'la boîte, le carton', pos: 'n', cat: 'Les objets', ex: 'There are two boxes in the garage.', exFr: 'Il y a deux cartons dans le garage.', level: 1, note: 'Pluriel : boxes (-es après x).' },
    { en: 'umbrella', fr: 'le parapluie', pos: 'n', cat: 'Les objets', ex: 'Is there an umbrella in the car?', exFr: 'Y a-t-il un parapluie dans la voiture ?', level: 1, note: 'On dit an umbrella (son voyelle).' },
    { en: 'big', fr: 'grand, gros', pos: 'adj', cat: 'Décrire la maison', ex: 'We have got a big garden.', exFr: 'Nous avons un grand jardin.', level: 1, note: 'Pour la taille d\'une personne : tall.' },
    { en: 'small', fr: 'petit', pos: 'adj', cat: 'Décrire la maison', ex: 'The bathroom is very small.', exFr: 'La salle de bains est très petite.', level: 1 },
    { en: 'in', fr: 'dans', pos: 'prep', cat: 'Où est… ?', ex: 'The children are in the garden.', exFr: 'Les enfants sont dans le jardin.', level: 1 },
    { en: 'on', fr: 'sur', pos: 'prep', cat: 'Où est… ?', ex: 'Your phone is on the table.', exFr: 'Ton téléphone est sur la table.', level: 1, note: 'Aussi : on the wall (au mur), on the floor (par terre).' },
    { en: 'under', fr: 'sous', pos: 'prep', cat: 'Où est… ?', ex: 'The dog is under the table.', exFr: 'Le chien est sous la table.', level: 1 },
    { en: 'next to', fr: 'à côté de', pos: 'prep', cat: 'Où est… ?', ex: 'The bank is next to the post office.', exFr: 'La banque est à côté de la poste.', level: 1, note: 'Avec to : next to (jamais « next of »).' },
    { en: 'behind', fr: 'derrière', pos: 'prep', cat: 'Où est… ?', ex: 'The garage is behind the house.', exFr: 'Le garage est derrière la maison.', level: 1 },
    { en: 'in front of', fr: 'devant', pos: 'prep', cat: 'Où est… ?', ex: 'The car is in front of the house.', exFr: 'La voiture est devant la maison.', level: 1, note: 'Attention : in front of = devant (et non « en face de », qui se dit opposite).' },
    { en: 'between', fr: 'entre', pos: 'prep', cat: 'Où est… ?', ex: 'The bathroom is between the two bedrooms.', exFr: 'La salle de bains est entre les deux chambres.', level: 1 },
    { en: 'opposite', fr: 'en face de', pos: 'prep', cat: 'Où est… ?', ex: 'There is a shop opposite my house.', exFr: 'Il y a un magasin en face de chez moi.', level: 1, note: 'Sans of : opposite the station. En Amérique, on dit aussi across from.' }
  ],
  phrases: [
    { en: 'There is a garden behind the house.', fr: 'Il y a un jardin derrière la maison.', cat: 'Décrire sa maison' },
    { en: 'There are three bedrooms.', fr: 'Il y a trois chambres.', cat: 'Décrire sa maison' },
    { en: 'How many rooms are there?', fr: 'Combien de pièces y a-t-il ?', cat: 'Décrire sa maison' },
    { en: 'We have got a small flat.', fr: 'Nous avons un petit appartement.', alt: ['We have a small flat.', 'We have got a small apartment.', 'We have a small apartment.'], cat: 'Décrire sa maison' },
    { en: 'My house has got a big garden.', fr: 'Ma maison a un grand jardin.', alt: ['My house has a big garden.'], cat: 'Décrire sa maison' },
    { en: 'This is my bedroom.', fr: 'Voici ma chambre.', alt: ['This is my room.'], cat: 'Décrire sa maison' },
    { en: 'The kitchen is next to the living room.', fr: 'La cuisine est à côté du salon.', alt: ['The kitchen is next to the lounge.', 'The kitchen is beside the living room.'], cat: 'Décrire sa maison' },
    { en: 'Is there a garage?', fr: 'Y a-t-il un garage ?', cat: 'Poser des questions' },
    { en: 'Are there any shops near here?', fr: 'Y a-t-il des magasins près d\'ici ?', alt: ['Are there shops near here?'], cat: 'Poser des questions' },
    { en: 'Is there a lift?', fr: 'Y a-t-il un ascenseur ?', alt: ['Is there an elevator?'], cat: 'À l\'hôtel', note: 'lift (Angleterre) = elevator (Amérique) = l\'ascenseur.' },
    { en: 'Is there a fridge in the room?', fr: 'Y a-t-il un frigo dans la chambre ?', alt: ['Is there a fridge in the bedroom?'], cat: 'À l\'hôtel' },
    { en: 'There isn\'t any hot water.', fr: 'Il n\'y a pas d\'eau chaude.', alt: ['There is no hot water.', 'There isn\'t hot water.'], cat: 'À l\'hôtel' },
    { en: 'Where is the toilet, please?', fr: 'Où sont les toilettes, s\'il vous plaît ?', alt: ['Where are the toilets, please?', 'Where is the loo, please?', 'Where is the bathroom, please?'], cat: 'À l\'hôtel' },
    { en: 'Where are my keys?', fr: 'Où sont mes clés ?', cat: 'Chercher un objet' },
    { en: 'Your keys are on the table.', fr: 'Tes clés sont sur la table.', cat: 'Chercher un objet' },
    { en: 'My glasses are next to the bed.', fr: 'Mes lunettes sont à côté du lit.', alt: ['My glasses are beside the bed.'], cat: 'Chercher un objet' },
    { en: 'There\'s a cat under the table!', fr: 'Il y a un chat sous la table !', cat: 'Chercher un objet', note: 'There\'s = There is.' },
    { en: 'What\'s this?', fr: 'Qu\'est-ce que c\'est ?', alt: ['What is that?', 'What is it?'], cat: 'Montrer un objet' },
    { en: 'Is this your phone?', fr: 'C\'est ton téléphone ?', alt: ['Is that your phone?', 'Is this your telephone?'], cat: 'Montrer un objet' },
    { en: 'These cups are very old.', fr: 'Ces tasses sont très vieilles.', alt: ['Those cups are very old.'], cat: 'Montrer un objet' },
    { en: 'The bank is opposite the station.', fr: 'La banque est en face de la gare.', alt: ['The bank is across from the station.'], cat: 'Dans la rue' },
    { en: 'The bus stop is in front of the hotel.', fr: 'L\'arrêt de bus est devant l\'hôtel.', cat: 'Dans la rue' },
    { en: 'I like coffee.', fr: 'J\'aime le café.', cat: 'Les articles', note: 'Pas d\'article : on parle du café en général.' }
  ],
  quiz: [
    { id: 'en4-q-01', q: 'Complète : There ___ two bedrooms.', choices: ['is', 'are', 'have', 'has'], answer: 1, topic: 'There is / there are', sec: 'en4-s-thereis',
      why: { 0: '« There is » va avec une seule chose. Ici il y a deux chambres : pluriel.', 2: '« Il y a » ne se dit pas avec have : on dit there is / there are.', 3: '« Il y a » ne se dit pas avec has : on dit there is / there are.' },
      explain: 'Plusieurs choses → **There are**. → **There are** two bedrooms. (Il y a deux chambres.)', say: 'There are two bedrooms.', level: 1 },
    { id: 'en4-q-02', q: 'Complète : There ___ a sofa in the living room.', choices: ['is', 'are', 'has', 'be'], answer: 0, topic: 'There is / there are', sec: 'en4-s-thereis',
      why: { 1: '« There are » va avec un pluriel. Ici il y a un seul canapé.', 2: '« Il y a » ne se dit pas avec has : on dit there is.', 3: '« be » est l\'infinitif : il faut le conjuguer (is).' },
      explain: 'Une seule chose → **There is**. → **There is** a sofa in the living room. (Il y a un canapé dans le salon.)', say: 'There is a sofa in the living room.', level: 1 },
    { id: 'en4-q-03', q: 'Comment dit-on « Il n\'y a pas de garage » ?', choices: ['There aren\'t a garage.', 'It hasn\'t a garage.', 'There isn\'t a garage.', 'There is not garage.'], answer: 2, topic: 'There is : la négation', sec: 'en4-s-thereis',
      why: { 0: '« aren\'t » va avec un pluriel ; un garage, c\'est singulier.', 1: '« Il y a » ne se traduit pas par it has : on dit there is / there isn\'t.', 3: 'Il manque « a » : There isn\'t a garage (ou There is no garage).' },
      explain: 'Négation au singulier : **There isn\'t a** … (ou There is **no** …). → **There isn\'t a garage.** (Il n\'y a pas de garage.)', say: 'There isn\'t a garage.', level: 1 },
    { id: 'en4-q-04', q: 'Complète : ___ there any shops near here?', choices: ['Is', 'Are', 'Have', 'Do'], answer: 1, topic: 'There is : la question', sec: 'en4-s-thereis',
      why: { 0: '« Is there » va avec une seule chose ; shops est au pluriel.', 2: '« Have there » n\'existe pas pour « y a-t-il ».', 3: '« Do there » n\'existe pas : on inverse simplement there et are.' },
      explain: 'Question au pluriel : **Are there** … ? → **Are there** any shops near here? (Y a-t-il des magasins près d\'ici ?)', say: 'Are there any shops near here?', level: 1 },
    { id: 'en4-q-05', q: 'Is there a lift? — No, ___', choices: ['there aren\'t.', 'it isn\'t.', 'there is.', 'there isn\'t.'], answer: 3, topic: 'There is : réponses courtes', sec: 'en4-s-thereis',
      why: { 0: '« aren\'t » va avec un pluriel ; a lift est singulier.', 1: 'On reprend there, pas it : No, there isn\'t.', 2: '« there is » veut dire oui. Ici la réponse est non.' },
      explain: 'Réponse courte : on reprend **there** + is / isn\'t. → No, **there isn\'t**. (Non, il n\'y en a pas.)', say: 'Is there a lift? No, there isn\'t.', level: 2 },
    { id: 'en4-q-06', q: 'Comment dit-on « Combien de chambres y a-t-il ? »', choices: ['How many bedrooms there are?', 'How many bedrooms is there?', 'How many bedrooms are there?', 'How much bedrooms are there?'], answer: 2, topic: 'There is : la question', sec: 'en4-s-thereis',
      why: { 0: 'Dans la question, on inverse : are there.', 1: 'bedrooms est au pluriel : are, pas is.', 3: '« How much » sert pour ce qui ne se compte pas (l\'eau, l\'argent). Pour des choses qu\'on compte : How many.' },
      explain: '**How many** + pluriel + **are there**? → **How many bedrooms are there?** (Combien de chambres y a-t-il ?)', say: 'How many bedrooms are there?', level: 2 },
    { id: 'en4-q-07', q: 'Complète : There is ___ umbrella in the car.', choices: ['a', 'an', 'some'], answer: 1, topic: 'a / an', sec: 'en4-s-articles',
      why: { 0: '« a » se met devant un son consonne ; umbrella commence par un son voyelle.', 2: '« some » s\'utilise avec un pluriel (some umbrellas), pas avec une seule chose.' },
      explain: 'Devant un son voyelle : **an**. → There is **an** umbrella in the car. (Il y a un parapluie dans la voiture.)', say: 'There is an umbrella in the car.', level: 1 },
    { id: 'en4-q-08', q: 'Complète : There is ___ house opposite the station.', choices: ['an', 'a', 'some'], answer: 1, topic: 'a / an', sec: 'en4-s-articles',
      why: { 0: 'Le h de house se prononce : c\'est un son consonne, donc a.', 2: '« some » s\'utilise avec un pluriel (some houses).' },
      explain: 'Le h de **house** se prononce → **a** house. (Mais an hour, car le h de hour est muet.) → There is **a** house opposite the station.', say: 'There is a house opposite the station.', level: 1 },
    { id: 'en4-q-09', q: 'Comment dit-on « J\'aime le café » (le café en général) ?', choices: ['I like the coffee.', 'I like coffee.', 'I like a coffee.', 'I like coffees.'], answer: 1, topic: 'L\'article the', sec: 'en4-s-articles',
      why: { 0: '« the coffee » = un café précis (celui-ci). Pour parler en général : pas d\'article.', 2: '« a coffee » = un café (une tasse).', 3: 'coffee ne se met pas au pluriel ici.' },
      explain: 'Pour parler d\'une chose **en général**, pas d\'article : **I like coffee.** (J\'aime le café.)', say: 'I like coffee.', level: 1 },
    { id: 'en4-q-10', q: 'Quel est le pluriel de « box » (la boîte) ?', choices: ['boxs', 'boxes', 'boxies', 'boxen'], answer: 1, topic: 'Les pluriels', sec: 'en4-s-pluriels',
      why: { 0: 'Après x, on ajoute -es.', 2: '-ies sert seulement pour consonne + y (baby → babies).', 3: 'Ce mot n\'existe pas.' },
      explain: 'Après **s, sh, ch, x** : **-es**. → one box, two **boxes**.', say: 'one box, two boxes', level: 1 },
    { id: 'en4-q-11', q: 'Quel est le pluriel de « knife » (le couteau) ?', choices: ['knives', 'knifes', 'knifs', 'knivs'], answer: 0, topic: 'Les pluriels', sec: 'en4-s-pluriels',
      why: { 1: 'Pour knife, le f devient v : knives.', 2: 'Pour knife, le f devient v, et on garde le e : knives.', 3: 'Il manque le e : knives.' },
      explain: '-f / -fe → **-ves**. → one knife, two **knives** (le k ne se prononce pas).', say: 'one knife, two knives', level: 1 },
    { id: 'en4-q-12', q: 'Quel est le pluriel de « family » ?', choices: ['familys', 'familyes', 'families'], answer: 2, topic: 'Les pluriels', sec: 'en4-s-pluriels',
      why: { 0: 'family finit par consonne (l) + y : le y devient ies.', 1: 'Le y devient i : families.' },
      explain: 'Consonne + y → **-ies**. → one family, two **families**.', say: 'one family, two families', level: 1 },
    { id: 'en4-q-13', q: 'Quel est le pluriel de « key » (la clé) ?', choices: ['keies', 'keys', 'kies'], answer: 1, topic: 'Les pluriels', sec: 'en4-s-pluriels',
      why: { 0: 'key finit par voyelle (e) + y : on garde le y et on ajoute seulement -s.', 2: 'Voyelle + y : on garde le y : keys.' },
      explain: 'Voyelle + y → **+ s**. → one key, two **keys**.', say: 'one key, two keys', level: 1 },
    { id: 'en4-q-14', q: 'Complète : The cat is ___ the bed. (sous)', choices: ['on', 'under', 'in', 'behind'], answer: 1, topic: 'Les prépositions de lieu', sec: 'en4-s-prepositions',
      why: { 0: '« on » = sur.', 2: '« in » = dans.', 3: '« behind » = derrière.' },
      explain: 'sous = **under**. → The cat is **under** the bed. (Le chat est sous le lit.)', say: 'The cat is under the bed.', level: 1 },
    { id: 'en4-q-15', q: 'Comment dit-on « La banque est en face de la gare » ?', choices: ['The bank is in front of the station.', 'The bank is next to the station.', 'The bank is opposite of the station.', 'The bank is opposite the station.'], answer: 3, topic: 'Les prépositions de lieu', sec: 'en4-s-prepositions',
      why: { 0: 'Piège : in front of = devant, pas « en face de ».', 1: '« next to » = à côté de.', 2: 'Pas de of après opposite (pour un lieu).' },
      explain: 'en face de = **opposite** (sans of). → The bank is **opposite** the station. (La banque est en face de la gare.)', say: 'The bank is opposite the station.', level: 1 },
    { id: 'en4-q-16', q: 'Que veut dire « The car is in front of the house » ?', choices: ['La voiture est en face de la maison.', 'La voiture est devant la maison.', 'La voiture est derrière la maison.', 'La voiture est dans la maison.'], answer: 1, topic: 'Les prépositions de lieu', sec: 'en4-s-prepositions',
      why: { 0: 'Piège : « en face de » se dit opposite. in front of = devant.', 2: '« derrière » se dit behind.', 3: '« dans » se dit in.' },
      explain: '**in front of** = devant. → The car is in front of the house. (La voiture est devant la maison.)', say: 'The car is in front of the house.', level: 1 },
    { id: 'en4-q-17', q: 'Complète : The bathroom is ___ the two bedrooms. (entre)', choices: ['between', 'behind', 'opposite', 'next'], answer: 0, topic: 'Les prépositions de lieu', sec: 'en4-s-prepositions',
      why: { 1: '« behind » = derrière.', 2: '« opposite » = en face de.', 3: '« next » seul ne suffit pas : next to = à côté de.' },
      explain: 'entre = **between**. → The bathroom is **between** the two bedrooms. (La salle de bains est entre les deux chambres.)', say: 'The bathroom is between the two bedrooms.', level: 1 },
    { id: 'en4-q-18', q: 'Complète : ___ are my keys. (ici, dans ma main)', choices: ['This', 'These', 'That', 'Those'], answer: 1, topic: 'this, that, these, those', sec: 'en4-s-demonstratifs',
      why: { 0: '« This » va avec une seule chose ; keys est au pluriel.', 2: '« That » = une seule chose, loin.', 3: '« Those » = plusieurs choses, mais loin (là-bas).' },
      explain: 'Plusieurs choses, près de moi → **These**. → **These** are my keys. (Ce sont mes clés.)', say: 'These are my keys.', level: 1 },
    { id: 'en4-q-19', q: 'Complète : ___ house over there is very big. (là-bas)', choices: ['This', 'These', 'That', 'Those'], answer: 2, topic: 'this, that, these, those', sec: 'en4-s-demonstratifs',
      why: { 0: '« This » = près de moi. over there = là-bas.', 1: '« These » = plusieurs choses, près de moi.', 3: '« Those » = plusieurs choses ; house est au singulier.' },
      explain: 'Une seule chose, loin → **That**. → **That** house over there is very big. (Cette maison-là est très grande.)', say: 'That house over there is very big.', level: 1 },
    { id: 'en4-q-20', q: 'Que veut dire « There are five rooms » ?', choices: ['Il y a cinq chambres.', 'Il y a cinq salles de bains.', 'Il y a cinq pièces.'], answer: 2, topic: 'Le vocabulaire de la maison', sec: 'en4-s-vocab',
      why: { 0: 'Piège : la chambre = bedroom. room = une pièce.', 1: 'La salle de bains = bathroom.' },
      explain: '**room** = une pièce (n\'importe laquelle). → There are five **rooms**. (Il y a cinq pièces.)', say: 'There are five rooms.', level: 1 },
    { id: 'en4-q-21', q: 'Comment dit-on « deux grandes chambres » ?', choices: ['two bigs bedrooms', 'two big bedrooms', 'two bedrooms big', 'two big bedroom'], answer: 1, topic: 'Les pluriels', sec: 'en4-s-pluriels',
      why: { 0: 'L\'adjectif ne prend jamais de -s.', 2: 'L\'adjectif se place avant le nom.', 3: 'Le nom doit être au pluriel : bedrooms.' },
      explain: 'L\'adjectif est invariable et se place avant le nom ; le nom prend le -s : **two big bedrooms**.', say: 'two big bedrooms', level: 1 },
    { id: 'en4-q-22', q: 'Écoute. Que dit la personne ?', listen: true, say: 'There are two chairs in the kitchen.', choices: ['Il y a deux chaises dans la cuisine.', 'Il y a deux chaises dans la chambre.', 'Il n\'y a pas de chaises dans la cuisine.', 'Il y a une chaise dans la cuisine.'], answer: 0, topic: 'Compréhension orale', sec: 'en4-s-thereis',
      why: { 1: 'La chambre = bedroom ; on entend kitchen (la cuisine).', 2: 'La phrase est affirmative (There are), pas négative (There aren\'t).', 3: 'On entend two chairs (deux chaises).' },
      explain: '**There are two chairs in the kitchen.** (Il y a deux chaises dans la cuisine.)', level: 2 },
    { id: 'en4-q-23', q: 'Écoute. Où sont les clés ?', listen: true, say: 'Your keys are next to the phone.', choices: ['Tes clés sont sous le téléphone.', 'Tes clés sont à côté du téléphone.', 'Tes clés sont derrière le téléphone.', 'Mes clés sont à côté du téléphone.'], answer: 1, topic: 'Compréhension orale', sec: 'en4-s-prepositions',
      why: { 0: '« sous » = under ; on entend next to (à côté de).', 2: '« derrière » = behind ; on entend next to.', 3: '« mes » = my ; on entend your (tes).' },
      explain: '**Your keys are next to the phone.** (Tes clés sont à côté du téléphone.)', level: 2 },
    { id: 'en4-q-24', q: 'Écoute. Que demande la personne ?', listen: true, say: 'Is there a garden behind the house?', choices: ['Il y a un jardin derrière la maison.', 'Y a-t-il un jardin derrière la maison ?', 'Y a-t-il un garage derrière la maison ?', 'Y a-t-il un jardin devant la maison ?'], answer: 1, topic: 'Compréhension orale', sec: 'en4-s-thereis',
      why: { 0: 'C\'est une question (Is there…?), pas une affirmation.', 2: 'garage ≠ garden (jardin).', 3: '« devant » = in front of ; on entend behind (derrière).' },
      explain: '**Is there a garden behind the house?** (Y a-t-il un jardin derrière la maison ?)', level: 2 },
    { id: 'en4-q-25', q: 'Écoute. Où sont les tasses ?', listen: true, say: 'The cups are in the cupboard.', choices: ['Les tasses sont sur l\'étagère.', 'Les tasses sont dans l\'armoire.', 'Une tasse est dans le placard.', 'Les tasses sont dans le placard.'], answer: 3, topic: 'Compréhension orale', sec: 'en4-s-vocab',
      why: { 0: 'L\'étagère = shelf ; on entend cupboard (placard).', 1: 'L\'armoire = wardrobe ; cupboard = le placard.', 2: 'On entend cups et are : plusieurs tasses.' },
      explain: '**The cups are in the cupboard.** (Les tasses sont dans le placard.) — cupboard se prononce « keu-beud ».', level: 2 }
  ],
  exercises: [
    { id: 'en4-x-01', prompt: 'Complète avec a ou an : ___ oven', answers: ['an', 'an oven'], topic: 'a / an', sec: 'en4-s-articles', strict: true,
      hint: 'oven commence par quel son ?',
      explain: 'oven commence par un son voyelle (« eu ») → **an oven** (un four).',
      rule: '**a** + son consonne · **an** + son voyelle',
      mistakes: [{ text: 'a', msg: 'oven commence par un son voyelle (« eu ») : **an** oven.' }, { text: 'a oven', msg: 'oven commence par un son voyelle : **an** oven.' }],
      say: 'an oven', level: 1 },
    { id: 'en4-x-02', prompt: 'Complète avec a ou an : There is ___ umbrella in the car.', answers: ['an', 'an umbrella'], topic: 'a / an', sec: 'en4-s-articles', strict: true,
      hint: 'umbrella commence par quel son ?',
      explain: 'umbrella commence par un son voyelle → **an** umbrella. → There is **an** umbrella in the car. (Il y a un parapluie dans la voiture.)',
      rule: '**a** + son consonne · **an** + son voyelle',
      mistakes: [{ text: 'a', msg: 'umbrella commence par un son voyelle : **an** umbrella.' }, { text: 'a umbrella', msg: 'umbrella commence par un son voyelle : **an** umbrella.' }],
      say: 'There is an umbrella in the car.', level: 1 },
    { id: 'en4-x-03', prompt: 'Complète avec a ou an : ___ house', answers: ['a', 'a house'], topic: 'a / an', sec: 'en4-s-articles', strict: true,
      hint: 'Le h de house se prononce-t-il ?',
      explain: 'Le h de house se prononce : c\'est un son consonne → **a house** (une maison).',
      rule: '**a** + son consonne (a house) · **an** + son voyelle (an hour, h muet)',
      mistakes: [{ text: 'an', msg: 'Le h de house se prononce (on souffle) : c\'est un son consonne → **a** house.' }, { text: 'an house', msg: 'Le h de house se prononce : **a** house.' }],
      say: 'a house', level: 1 },
    { id: 'en4-x-04', prompt: 'Traduis : J\'aime le thé. (le thé en général)', answers: ['I like tea'], topic: 'L\'article the', sec: 'en4-s-articles',
      hint: 'En général → pas d\'article.',
      explain: 'Pour parler d\'une chose **en général**, pas d\'article : **I like tea.** (J\'aime le thé.)',
      rule: 'le, la, les « en général » → **pas d\'article** en anglais',
      mistakes: [{ text: 'I like the tea', msg: 'Pour parler d\'une chose **en général**, pas d\'article : I like tea. (« the tea » = ce thé-là, un thé précis.)' }, { text: 'I like a tea', msg: '« a tea » = un thé (une tasse). En général : **I like tea**.' }],
      say: 'I like tea.', level: 1 },
    { id: 'en4-x-05', prompt: 'Traduis : Les clés sont sur la table.', answers: ['The keys are on the table'], topic: 'Les prépositions de lieu', sec: 'en4-s-prepositions',
      hint: 'Des clés précises → the ; sur = on.',
      explain: 'Des clés précises → **the** keys ; sur = **on**. → **The keys are on the table.** (Les clés sont sur la table.)',
      rule: 'Chose précise → **the** · sur = **on** · dans = **in**',
      mistakes: [{ text: 'Keys are on the table', msg: 'Ici on parle de clés précises (les clés) : il faut **the** : The keys…' }, { text: 'The keys are in the table', msg: 'in = dans. Sur = **on** : on the table.' }, { text: 'The keys is on the table', msg: 'keys est au pluriel : **are**.' }],
      say: 'The keys are on the table.', level: 1 },
    { id: 'en4-x-06', prompt: 'Mets au pluriel : a glass → two ___', answers: ['glasses'], topic: 'Les pluriels', sec: 'en4-s-pluriels', strict: true,
      hint: 'glass finit par s.',
      explain: 'Après **s, sh, ch, x** : **-es**. → a glass, two **glasses** (deux verres).',
      rule: '-s, -sh, -ch, -x → **-es**',
      mistakes: [{ text: 'glasss', msg: 'Après s, on ajoute **-es** : glass → glasses.' }, { text: 'glass', msg: 'Il faut le pluriel : glass → **glasses**.' }],
      say: 'two glasses', level: 1 },
    { id: 'en4-x-07', prompt: 'Mets au pluriel : a box → three ___', answers: ['boxes'], topic: 'Les pluriels', sec: 'en4-s-pluriels', strict: true,
      hint: 'box finit par x.',
      explain: 'Après **x** : **-es**. → a box, three **boxes** (trois boîtes).',
      rule: '-s, -sh, -ch, -x → **-es**',
      mistakes: [{ text: 'boxs', msg: 'Après x, on ajoute **-es** : box → boxes.' }, { text: 'boxies', msg: '-ies sert seulement pour consonne + y. Après x : **-es** → boxes.' }],
      say: 'three boxes', level: 1 },
    { id: 'en4-x-08', prompt: 'Mets au pluriel : a family → two ___', answers: ['families'], topic: 'Les pluriels', sec: 'en4-s-pluriels', strict: true,
      hint: 'Consonne + y…',
      explain: 'Consonne (l) + y → **-ies**. → a family, two **families** (deux familles).',
      rule: 'consonne + y → **-ies** · voyelle + y → **-s**',
      mistakes: [{ text: 'familys', msg: 'family finit par consonne + y : le y devient **ies** → families.' }, { text: 'familyes', msg: 'Le y devient i : **families**.' }],
      say: 'two families', level: 1 },
    { id: 'en4-x-09', prompt: 'Mets au pluriel : a key → two ___', answers: ['keys'], topic: 'Les pluriels', sec: 'en4-s-pluriels', strict: true,
      hint: 'Voyelle + y…',
      explain: 'Voyelle (e) + y → on garde le y et on ajoute **-s**. → a key, two **keys** (deux clés).',
      rule: 'consonne + y → **-ies** · voyelle + y → **-s**',
      mistakes: [{ text: 'keies', msg: 'Voyelle (e) + y : on garde le y et on ajoute seulement -s : **keys**.' }, { text: 'kies', msg: 'Voyelle + y : on garde le y : **keys**.' }],
      say: 'two keys', level: 1 },
    { id: 'en4-x-10', prompt: 'Mets au pluriel : a knife → six ___', answers: ['knives'], topic: 'Les pluriels', sec: 'en4-s-pluriels', strict: true,
      hint: '-fe → …',
      explain: '-f / -fe → **-ves**. → a knife, six **knives** (six couteaux).',
      rule: '-f / -fe → **-ves** (knife → knives, shelf → shelves, wife → wives)',
      mistakes: [{ text: 'knifes', msg: 'Pour knife, le f devient v : **knives**.' }, { text: 'knifs', msg: 'Pour knife, le f devient v et on garde le e : **knives**.' }],
      say: 'six knives', level: 1 },
    { id: 'en4-x-11', prompt: 'Mets au pluriel : a shelf → two ___', answers: ['shelves'], topic: 'Les pluriels', sec: 'en4-s-pluriels', strict: true,
      hint: '-f → …',
      explain: '-f → **-ves**. → a shelf, two **shelves** (deux étagères).',
      rule: '-f / -fe → **-ves** (knife → knives, shelf → shelves, wife → wives)',
      mistakes: [{ text: 'shelfs', msg: 'Pour shelf, le f devient **ves** : shelves.' }, { text: 'shelfes', msg: 'Le f devient v : **shelves**.' }],
      say: 'two shelves', level: 1 },
    { id: 'en4-x-12', prompt: 'Mets au pluriel : a baby → three ___', answers: ['babies'], topic: 'Les pluriels', sec: 'en4-s-pluriels', strict: true,
      hint: 'Consonne + y…',
      explain: 'Consonne (b) + y → **-ies**. → a baby, three **babies** (trois bébés).',
      rule: 'consonne + y → **-ies** · voyelle + y → **-s**',
      mistakes: [{ text: 'babys', msg: 'baby finit par consonne + y : le y devient **ies** → babies.' }, { text: 'babyes', msg: 'Le y devient i : **babies**.' }],
      say: 'three babies', level: 1 },
    { id: 'en4-x-13', prompt: 'Complète avec is ou are : There ___ four chairs in the kitchen.', answers: ['are'], topic: 'There is / there are', sec: 'en4-s-thereis', strict: true,
      hint: 'Une chaise ou plusieurs ?',
      explain: 'Plusieurs choses → **There are**. → There **are** four chairs in the kitchen. (Il y a quatre chaises dans la cuisine.)',
      rule: '**There is** + une seule chose · **There are** + plusieurs',
      mistakes: [{ text: 'is', msg: '« There is » va avec une seule chose. Quatre chaises : **There are**.' }, { text: 'have', msg: '« Il y a » ne se dit pas avec have : **There are**.' }],
      say: 'There are four chairs in the kitchen.', level: 1 },
    { id: 'en4-x-14', prompt: 'Traduis : Il y a un canapé dans le salon.', answers: ['There is a sofa in the living room', 'There is a couch in the living room', 'There is a settee in the living room', 'There is a sofa in the lounge', 'There is a sofa in the sitting room'], topic: 'There is / there are', sec: 'en4-s-thereis',
      hint: 'Il y a + une seule chose → There is…',
      explain: 'Une seule chose → **There is**. → **There is a sofa in the living room.** (Il y a un canapé dans le salon.)',
      rule: '**There is** + une seule chose · **There are** + plusieurs',
      mistakes: [{ text: 'It has a sofa in the living room', msg: '« Il y a » ne se traduit pas mot à mot : on dit **There is** a sofa…' }, { text: 'There are a sofa in the living room', msg: 'Un seul canapé : **There is** a sofa.' }, { text: 'There is a sofa in living room', msg: 'Il manque **the** : in **the** living room.' }],
      say: 'There is a sofa in the living room.', level: 1 },
    { id: 'en4-x-15', prompt: 'Mets à la forme négative : There is a garage.', answers: ['There isn\'t a garage', 'There is no garage'], topic: 'There is : la négation', sec: 'en4-s-thereis',
      hint: 'is + not.',
      explain: 'Négation : **There isn\'t a** … (ou There is **no** …). → **There isn\'t a garage.** (Il n\'y a pas de garage.)',
      rule: 'Négation : **There isn\'t a** … · **There aren\'t any** …',
      mistakes: [{ text: 'There aren\'t a garage', msg: 'Un seul garage : **There isn\'t** a garage.' }, { text: 'There is not garage', msg: 'Il manque **a** : There isn\'t **a** garage (ou There is **no** garage).' }, { text: 'There isn\'t no garage', msg: 'Pas de double négation en anglais : There isn\'t **a** garage ou There is **no** garage.' }],
      say: 'There isn\'t a garage.', level: 1 },
    { id: 'en4-x-16', prompt: 'Mets à la forme négative : There are chairs in the garden.', answers: ['There aren\'t any chairs in the garden', 'There aren\'t chairs in the garden', 'There are no chairs in the garden'], topic: 'There is : la négation', sec: 'en4-s-thereis',
      hint: 'are + not (+ any).',
      explain: 'Négation au pluriel : **There aren\'t any** … → **There aren\'t any chairs in the garden.** (Il n\'y a pas de chaises dans le jardin.)',
      rule: 'Négation : **There isn\'t a** … · **There aren\'t any** …',
      mistakes: [{ text: 'There isn\'t any chairs in the garden', msg: 'chairs est au pluriel : **aren\'t** (There aren\'t any chairs…).' }, { text: 'There aren\'t no chairs in the garden', msg: 'Pas de double négation en anglais : There aren\'t **any** chairs ou There are **no** chairs.' }, { text: 'There aren\'t some chairs in the garden', msg: 'Dans une négation, « des » se dit **any** (pas some) : There aren\'t any chairs.' }],
      say: 'There aren\'t any chairs in the garden.', level: 2 },
    { id: 'en4-x-17', prompt: 'Pose la question : There is a lift. → ___?', answers: ['Is there a lift'], topic: 'There is : la question', sec: 'en4-s-thereis',
      hint: 'On inverse there et is.',
      explain: 'Question : on inverse → **Is there** … ? → **Is there a lift?** (Y a-t-il un ascenseur ?)',
      rule: 'Question : **Is there** … ? · **Are there** … ?',
      mistakes: [{ text: 'There is a lift', msg: 'Pour la question, on inverse : **Is there** a lift?' }, { text: 'Is it a lift', msg: '« Is it…? » = Est-ce que c\'est… ? Pour « Y a-t-il… ? » : **Is there**…?' }, { text: 'Are there a lift', msg: 'Un seul ascenseur : **Is** there a lift?' }],
      say: 'Is there a lift?', level: 1 },
    { id: 'en4-x-18', prompt: 'Pose la question : There are shops near here. → ___?', answers: ['Are there any shops near here', 'Are there shops near here'], topic: 'There is : la question', sec: 'en4-s-thereis',
      hint: 'On inverse there et are (et on ajoute souvent any).',
      explain: 'Question au pluriel : **Are there any** … ? → **Are there any shops near here?** (Y a-t-il des magasins près d\'ici ?)',
      rule: 'Question : **Is there** … ? · **Are there (any)** … ?',
      mistakes: [{ text: 'Is there any shops near here', msg: 'shops est au pluriel : **Are** there any shops…?' }, { text: 'There are any shops near here', msg: 'Pour la question, on inverse : **Are there** any shops near here?' }],
      say: 'Are there any shops near here?', level: 1 },
    { id: 'en4-x-19', prompt: 'Réponds « non » avec une réponse courte : Is there a garden? → No, ___.', answers: ['there isn\'t', 'No, there isn\'t', 'there is no garden', 'No, there is no garden', 'there isn\'t a garden', 'No, there isn\'t a garden'], topic: 'There is : réponses courtes', sec: 'en4-s-thereis',
      hint: 'On reprend there + is, à la forme négative.',
      explain: 'Réponse courte : on reprend **there** + **isn\'t**. → No, **there isn\'t**. (Non, il n\'y en a pas.)',
      rule: 'Yes, there **is**. / No, there **isn\'t**. · Yes, there **are**. / No, there **aren\'t**.',
      mistakes: [{ re: '\\bit is(n\'t| not)\\b', msg: 'On reprend **there**, pas it : No, there isn\'t.' }, { re: '\\bthere are(n\'t| not)\\b', msg: 'a garden est singulier : No, there **isn\'t**.' }, { text: 'there is', msg: 'La réponse est « non » : il faut la négation : No, there **isn\'t**.' }],
      say: 'Is there a garden? No, there isn\'t.', level: 2 },
    { id: 'en4-x-20', prompt: 'Traduis : Combien de chambres y a-t-il ?', answers: ['How many bedrooms are there'], topic: 'There is : la question', sec: 'en4-s-thereis',
      hint: 'How many + pluriel + are there ?',
      explain: '**How many** + pluriel + **are there**? → **How many bedrooms are there?** (Combien de chambres y a-t-il ?)',
      rule: 'Combien de… y a-t-il ? = **How many** + pluriel + **are there**?',
      mistakes: [{ text: 'How many bedrooms there are', msg: 'Dans la question, on inverse : How many bedrooms **are there**?' }, { text: 'How many bedrooms is there', msg: 'bedrooms est au pluriel : **are** there.' }, { text: 'How many rooms are there', msg: 'room = une pièce. La chambre = **bedroom**.' }],
      say: 'How many bedrooms are there?', level: 2 },
    { id: 'en4-x-21', prompt: 'Complète avec la bonne préposition : The cat is ___ the bed. (sous)', answers: ['under'], topic: 'Les prépositions de lieu', sec: 'en4-s-prepositions', strict: true,
      hint: 'sous = …',
      explain: 'sous = **under**. → The cat is **under** the bed. (Le chat est sous le lit.)',
      rule: 'in = dans · on = sur · **under** = sous',
      mistakes: [{ text: 'on', msg: 'on = sur. Sous = **under**.' }, { text: 'in', msg: 'in = dans. Sous = **under**.' }],
      say: 'The cat is under the bed.', level: 1 },
    { id: 'en4-x-22', prompt: 'Complète : The car is ___ the house. (devant)', answers: ['in front of'], topic: 'Les prépositions de lieu', sec: 'en4-s-prepositions', strict: true,
      hint: 'Trois petits mots : in … of.',
      explain: 'devant = **in front of**. → The car is **in front of** the house. (La voiture est devant la maison.)',
      rule: 'devant = **in front of** · en face de = **opposite**',
      mistakes: [{ text: 'in front', msg: 'Il manque **of** : in front **of** the house.' }, { text: 'opposite', msg: 'opposite = en face de (de l\'autre côté). Devant = **in front of**.' }, { text: 'before', msg: 'before = avant (dans le temps). Devant (un lieu) = **in front of**.' }],
      say: 'The car is in front of the house.', level: 1 },
    { id: 'en4-x-23', prompt: 'Complète : The bank is ___ the station. (en face de)', answers: ['opposite', 'across from'], topic: 'Les prépositions de lieu', sec: 'en4-s-prepositions', strict: true,
      hint: 'Ce n\'est pas in front of !',
      explain: 'en face de = **opposite** (sans of). → The bank is **opposite** the station. (La banque est en face de la gare.)',
      rule: 'devant = **in front of** · en face de = **opposite**',
      mistakes: [{ text: 'in front of', msg: 'Piège : in front of = devant. En face de = **opposite**.' }, { text: 'opposite of', msg: 'Pas de of : The bank is **opposite** the station.' }],
      say: 'The bank is opposite the station.', level: 1 },
    { id: 'en4-x-24', prompt: 'Complète : The lamp is ___ the bed. (à côté de)', answers: ['next to', 'beside'], topic: 'Les prépositions de lieu', sec: 'en4-s-prepositions', strict: true,
      hint: 'Deux petits mots : next …',
      explain: 'à côté de = **next to**. → The lamp is **next to** the bed. (La lampe est à côté du lit.)',
      rule: 'à côté de = **next to** (avec to)',
      mistakes: [{ text: 'next', msg: 'Il manque **to** : next **to** the bed.' }, { text: 'next of', msg: 'On dit next **to** (pas of).' }],
      say: 'The lamp is next to the bed.', level: 1 },
    { id: 'en4-x-25', prompt: 'Traduis : Le jardin est derrière la maison.', answers: ['The garden is behind the house'], topic: 'Les prépositions de lieu', sec: 'en4-s-prepositions',
      hint: 'derrière = behind.',
      explain: 'derrière = **behind** (sans of). → **The garden is behind the house.** (Le jardin est derrière la maison.)',
      rule: '**behind** = derrière · **in front of** = devant',
      mistakes: [{ text: 'The garden is behind of the house', msg: 'Pas de of après behind : behind **the house**.' }, { text: 'The garden is in front of the house', msg: 'in front of = devant. Derrière = **behind**.' }],
      say: 'The garden is behind the house.', level: 1 },
    { id: 'en4-x-26', prompt: 'Traduis : La salle de bains est entre les deux chambres.', answers: ['The bathroom is between the two bedrooms'], topic: 'Les prépositions de lieu', sec: 'en4-s-prepositions',
      hint: 'entre = between ; chambre = bedroom.',
      explain: 'entre = **between**. → **The bathroom is between the two bedrooms.** (La salle de bains est entre les deux chambres.)',
      rule: '**between** = entre',
      mistakes: [{ text: 'The bathroom is between the two rooms', msg: 'room = une pièce. La chambre = **bedroom**.' }, { text: 'The bathroom is between the two bedroom', msg: 'Deux chambres : pluriel → bedroom**s**.' }],
      say: 'The bathroom is between the two bedrooms.', level: 2 },
    { id: 'en4-x-27', prompt: 'Complète avec this, that, these ou those : ___ are my keys. (ici, dans ma main)', answers: ['These'], topic: 'this, that, these, those', sec: 'en4-s-demonstratifs', strict: true,
      hint: 'Plusieurs clés, près de toi.',
      explain: 'Plusieurs choses, près de moi → **These**. → **These** are my keys. (Ce sont mes clés.)',
      rule: 'près : **this** (un) / **these** (plusieurs) · loin : **that** / **those**',
      mistakes: [{ text: 'This', msg: 'this = une seule chose. keys est au pluriel : **These** are my keys.' }, { text: 'Those', msg: 'those = là-bas, loin. Ici, près de moi : **these**.' }],
      say: 'These are my keys.', level: 1 },
    { id: 'en4-x-28', prompt: 'Complète avec this, that, these ou those : ___ house over there is very old. (là-bas)', answers: ['That'], topic: 'this, that, these, those', sec: 'en4-s-demonstratifs', strict: true,
      hint: 'Une seule maison, loin.',
      explain: 'Une seule chose, loin → **That**. → **That** house over there is very old. (Cette maison-là est très vieille.)',
      rule: 'près : **this** (un) / **these** (plusieurs) · loin : **that** / **those**',
      mistakes: [{ text: 'This', msg: 'this = ici, près de moi. Là-bas : **that**.' }, { text: 'Those', msg: 'those = plusieurs choses. house est au singulier : **that**.' }],
      say: 'That house over there is very old.', level: 1 },
    { id: 'en4-x-29', prompt: 'Corrige l\'erreur : These chair is very old.', answers: ['This chair is very old', 'These chairs are very old'], topic: 'this, that, these, those', sec: 'en4-s-demonstratifs',
      hint: 'these va avec un pluriel.',
      explain: 'these = pluriel. Avec une seule chaise : **This chair is** very old. (Ou au pluriel : **These chairs are** very old.)',
      rule: '**this** + singulier + is · **these** + pluriel + are',
      mistakes: [{ text: 'These chair is very old', msg: 'these = pluriel. Avec un singulier : **This** chair is… (ou au pluriel : These chairs are…).' }, { text: 'These chairs is very old', msg: 'Au pluriel : These chairs **are** very old.' }, { text: 'This chairs is very old', msg: 'this va avec un singulier : This **chair** is very old.' }],
      say: 'This chair is very old.', level: 1 },
    { id: 'en4-x-30', prompt: 'Remets dans l\'ordre : there / is / a / fridge / in / the / room / ?', answers: ['Is there a fridge in the room'], topic: 'There is : la question', sec: 'en4-s-thereis',
      hint: 'C\'est une question : on commence par Is.',
      explain: 'Question : **Is there** + la chose + le lieu ? → **Is there a fridge in the room?** (Y a-t-il un frigo dans la chambre ?)',
      rule: 'Question : **Is there** … ? · **Are there** … ?',
      mistakes: [{ text: 'There is a fridge in the room', msg: 'Avec le point d\'interrogation, c\'est une question : on inverse → **Is there** a fridge in the room?' }, { text: 'Is there in the room a fridge', msg: 'On dit d\'abord la chose, puis le lieu : Is there **a fridge in the room**?' }],
      say: 'Is there a fridge in the room?', level: 1 }
  ]
});
