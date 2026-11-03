/* Anglais — chapitre 7 : En ce moment (présent continu, vêtements, météo) */
APP.registerChapter({
  id: 'en7', subject: 'anglais', num: 7,
  title: 'En ce moment', subtitle: 'I\'m working now : le présent continu, les vêtements et la météo',
  vocabSec: 'en7-s-vocab',
  sections: [
    {
      id: 'en7-s-forme', title: 'Le présent continu : « en train de… »',
      html: `
<p>Pour dire ce qu'on fait <b>en ce moment</b>, l'anglais utilise le <b>présent continu</b> (on dit aussi « présent progressif ») : c'est l'équivalent de « je suis <b>en train de</b>… ».</p>
<p>Il se forme avec <b>am / is / are</b> (le verbe <i>to be</i>, que tu connais déjà) + le verbe avec <b>-ing</b> à la fin.</p>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">I am working.</span> = <span class="say">I'm working.</span></td><td>Je travaille (en ce moment).</td></tr>
<tr><td><span class="say">You are reading.</span> = <span class="say">You're reading.</span></td><td>Tu lis.</td></tr>
<tr><td><span class="say">He is sleeping.</span> = <span class="say">He's sleeping.</span></td><td>Il dort.</td></tr>
<tr><td><span class="say">She is cooking.</span> = <span class="say">She's cooking.</span></td><td>Elle fait la cuisine.</td></tr>
<tr><td><span class="say">It is raining.</span> = <span class="say">It's raining.</span></td><td>Il pleut.</td></tr>
<tr><td><span class="say">We are eating.</span> = <span class="say">We're eating.</span></td><td>Nous mangeons.</td></tr>
<tr><td><span class="say">They are playing.</span> = <span class="say">They're playing.</span></td><td>Ils jouent.</td></tr>
</table>
<p>Exemples :<br>
<span class="say">I'm waiting for the bus.</span> — J'attends le bus.<br>
<span class="say">My husband is watching TV.</span> — Mon mari regarde la télé.<br>
<span class="say">The children are playing in the garden.</span> — Les enfants jouent dans le jardin.</p>
<div class="callout key"><b>À retenir</b> Présent continu = <b>am / is / are</b> + verbe en <b>-ing</b>. Il faut <b>toujours les deux</b> morceaux.</div>
<div class="callout warn"><b>Piège</b> En français, on dit simplement « je travaille ». En anglais, ne dis pas « I working » (il manque <b>am</b>) ni « I am work » (il manque <b>-ing</b>) : on dit <span class="say">I'm working</span>.</div>
<div class="callout tip"><b>Astuce</b> À l'oral, on contracte presque toujours : <span class="say">I'm</span>, <span class="say">you're</span>, <span class="say">he's</span>, <span class="say">she's</span>, <span class="say">it's</span>, <span class="say">we're</span>, <span class="say">they're</span>.</div>`
    },
    {
      id: 'en7-s-ing', title: 'L\'orthographe du -ing',
      html: `
<p>Le plus souvent, on ajoute simplement <b>-ing</b> à la fin du verbe. Mais il y a 3 petites règles à connaître.</p>
<table><tr><th>Règle</th><th>Exemples</th></tr>
<tr><td>1. En général : + <b>ing</b></td><td><span class="say">work</span> → <span class="say">working</span>, <span class="say">play</span> → <span class="say">playing</span>, <span class="say">eat</span> → <span class="say">eating</span>, <span class="say">read</span> → <span class="say">reading</span></td></tr>
<tr><td>2. Le verbe finit par un <b>e</b> muet : le <b>e</b> tombe</td><td><span class="say">make</span> → <span class="say">making</span>, <span class="say">write</span> → <span class="say">writing</span>, <span class="say">come</span> → <span class="say">coming</span>, <span class="say">dance</span> → <span class="say">dancing</span>, <span class="say">have</span> → <span class="say">having</span></td></tr>
<tr><td>3. Verbe court qui finit par <b>1 voyelle + 1 consonne</b> : la consonne est <b>doublée</b></td><td><span class="say">run</span> → <span class="say">running</span>, <span class="say">swim</span> → <span class="say">swimming</span>, <span class="say">sit</span> → <span class="say">sitting</span>, <span class="say">stop</span> → <span class="say">stopping</span>, <span class="say">get</span> → <span class="say">getting</span>, <span class="say">shop</span> → <span class="say">shopping</span></td></tr>
<tr><td>4. Le verbe finit par <b>ie</b> : <b>ie</b> devient <b>y</b></td><td><span class="say">lie</span> → <span class="say">lying</span> (être allongé), <span class="say">tie</span> → <span class="say">tying</span> (attacher)</td></tr>
</table>
<p>Exemples :<br>
<span class="say">She's making a cake.</span> — Elle fait un gâteau.<br>
<span class="say">He's swimming in the sea.</span> — Il nage dans la mer.<br>
<span class="say">The cat is lying on the sofa.</span> — Le chat est allongé sur le canapé.</p>
<div class="callout key"><b>À retenir</b> e muet → il tombe (<span class="say">making</span>) · verbe court en voyelle + consonne → on double (<span class="say">running</span>) · ie → y (<span class="say">lying</span>).</div>
<div class="callout warn"><b>Pièges</b> On ne double pas après <b>deux voyelles</b> (<span class="say">eating</span>, <span class="say">raining</span>, <span class="say">waiting</span>) ni après <b>w</b> ou <b>y</b> (<span class="say">snowing</span>, <span class="say">playing</span>). Et <span class="say">writing</span> s'écrit avec un seul t (pas « writting »). <span class="say">see</span> → <span class="say">seeing</span> garde ses deux e.</div>
<div class="callout tip"><b>Bon à savoir</b> Les verbes plus longs comme <span class="say">listen</span>, <span class="say">visit</span> ou <span class="say">open</span> ne doublent pas : <span class="say">listening</span>, <span class="say">visiting</span>, <span class="say">opening</span>.</div>`
    },
    {
      id: 'en7-s-neg-q', title: 'Négatif, questions et réponses courtes',
      html: `
<h3>Le négatif : on ajoute not</h3>
<p>On met <b>not</b> juste après am / is / are.</p>
<table><tr><th>Forme longue</th><th>Forme courte</th><th>Français</th></tr>
<tr><td><span class="say">I am not working.</span></td><td><span class="say">I'm not working.</span></td><td>Je ne travaille pas.</td></tr>
<tr><td><span class="say">You are not listening.</span></td><td><span class="say">You aren't listening.</span></td><td>Tu n'écoutes pas.</td></tr>
<tr><td><span class="say">She is not sleeping.</span></td><td><span class="say">She isn't sleeping.</span></td><td>Elle ne dort pas.</td></tr>
<tr><td><span class="say">It is not raining.</span></td><td><span class="say">It isn't raining.</span></td><td>Il ne pleut pas.</td></tr>
<tr><td><span class="say">They are not playing.</span></td><td><span class="say">They aren't playing.</span></td><td>Ils ne jouent pas.</td></tr>
</table>
<h3>La question : on inverse</h3>
<p>Comme avec <i>to be</i>, on met <b>am / is / are avant le sujet</b> :</p>
<p><span class="say">You are listening.</span> → <span class="say">Are you listening?</span> — Tu écoutes ?<br>
<span class="say">Is she working today?</span> — Elle travaille aujourd'hui ?<br>
<span class="say">Is it raining?</span> — Il pleut ?</p>
<p>Avec un mot interrogatif au début :<br>
<span class="say">What are you doing?</span> — Qu'est-ce que tu fais ?<br>
<span class="say">Where are you going?</span> — Où vas-tu ?<br>
<span class="say">Why are you laughing?</span> — Pourquoi tu ris ?<br>
<span class="say">Who are you talking to?</span> — À qui parles-tu ?</p>
<h3>Les réponses courtes</h3>
<table><tr><th>Question</th><th>Oui</th><th>Non</th></tr>
<tr><td><span class="say">Are you cooking?</span></td><td><span class="say">Yes, I am.</span></td><td><span class="say">No, I'm not.</span></td></tr>
<tr><td><span class="say">Is he sleeping?</span></td><td><span class="say">Yes, he is.</span></td><td><span class="say">No, he isn't.</span></td></tr>
<tr><td><span class="say">Are they coming?</span></td><td><span class="say">Yes, they are.</span></td><td><span class="say">No, they aren't.</span></td></tr>
</table>
<div class="callout key"><b>À retenir</b> Négatif : am / is / are + <b>not</b> + verbe en -ing. Question : <b>Am / Is / Are</b> + sujet + verbe en -ing ?</div>
<div class="callout warn"><b>Pièges</b> Pas de <b>do / does</b> ici : on ne dit pas « Do you listening? » ni « She doesn't sleeping ». Et dans la réponse courte « oui », pas de contraction à la fin : <span class="say">Yes, I am.</span> (jamais « Yes, I'm. »).</div>`
    },
    {
      id: 'en7-s-simple-continu', title: 'Maintenant ou d\'habitude ?',
      html: `
<p>En français, « je travaille » peut vouloir dire « je travaille <b>d'habitude</b> » ou « je travaille <b>en ce moment</b> ». L'anglais, lui, fait la différence.</p>
<table><tr><th>Présent simple (chapitre 6) : habitude</th><th>Présent continu : en ce moment</th></tr>
<tr><td><span class="say">I work every day.</span><br>Je travaille tous les jours.</td><td><span class="say">I'm working now.</span><br>Je travaille en ce moment.</td></tr>
<tr><td><span class="say">She usually drinks tea.</span><br>D'habitude, elle boit du thé.</td><td><span class="say">Today she's drinking coffee.</span><br>Aujourd'hui, elle boit du café.</td></tr>
<tr><td><span class="say">It rains a lot in Brittany.</span><br>Il pleut beaucoup en Bretagne.</td><td><span class="say">Look! It's raining.</span><br>Regarde ! Il pleut.</td></tr>
<tr><td><span class="say">What do you do?</span><br>Qu'est-ce que tu fais dans la vie ?</td><td><span class="say">What are you doing?</span><br>Qu'est-ce que tu es en train de faire ?</td></tr>
</table>
<h3>Les mots qui annoncent le présent continu</h3>
<p><span class="say">now</span> (maintenant) · <span class="say">right now</span> (en ce moment même) · <span class="say">at the moment</span> (en ce moment) · <span class="say">today</span> (aujourd'hui) · <span class="say">this week</span> (cette semaine) · <span class="say">Look!</span> (Regarde !) · <span class="say">Listen!</span> (Écoute !)</p>
<p>Et ceux du présent simple : <span class="say">every day</span> (tous les jours) · <span class="say">usually</span> (d'habitude) · <span class="say">always</span> (toujours) · <span class="say">often</span> (souvent) · <span class="say">never</span> (jamais) · <span class="say">on Sundays</span> (le dimanche).</p>
<div class="callout key"><b>À retenir</b> Habitude → <b>présent simple</b> : <span class="say">I work</span>. En ce moment → <b>présent continu</b> : <span class="say">I'm working</span>.</div>
<div class="callout warn"><b>Piège : les verbes qui refusent -ing</b> Quelques verbes ne se mettent presque jamais au présent continu, même pour maintenant : <span class="say">like</span>, <span class="say">love</span>, <span class="say">hate</span>, <span class="say">want</span>, <span class="say">need</span>, <span class="say">know</span>, <span class="say">understand</span>. On dit <span class="say">I want a coffee.</span> (Je veux un café) et <span class="say">I understand.</span> (Je comprends), pas « I'm wanting » ni « I'm understanding ».</div>
<div class="callout tip"><b>Astuce</b> <span class="say">have</span> au sens de « posséder » ne prend pas -ing (<span class="say">I have a car.</span>), mais au sens de « manger, prendre » oui : <span class="say">We're having lunch.</span> — Nous sommes en train de déjeuner.</div>`
    },
    {
      id: 'en7-s-like', title: 'like, love, hate + -ing',
      html: `
<p>Pour dire ce qu'on aime faire <b>en général</b>, on met le deuxième verbe en <b>-ing</b> après <span class="say">like</span> (aimer), <span class="say">love</span> (adorer) et <span class="say">hate</span> (détester).</p>
<p><span class="say">I like swimming.</span> — J'aime nager.<br>
<span class="say">She loves cooking.</span> — Elle adore cuisiner.<br>
<span class="say">He hates waiting.</span> — Il déteste attendre.<br>
<span class="say">We love walking in the mountains.</span> — Nous adorons marcher en montagne.<br>
<span class="say">I don't like getting up early.</span> — Je n'aime pas me lever tôt.<br>
<span class="say">Do you like dancing?</span> — Tu aimes danser ?</p>
<p>Ici, on parle d'un goût en général : like / love / hate restent au <b>présent simple</b>, avec le -s pour he / she / it (<span class="say">she loves</span>, <span class="say">he hates</span>). Seul le deuxième verbe prend -ing.</p>
<div class="callout key"><b>À retenir</b> like / love / hate + verbe en <b>-ing</b> : <span class="say">I love reading.</span> — J'adore lire.</div>
<div class="callout warn"><b>Piège</b> En français on dit « j'aime nager » avec l'infinitif. En anglais, ne dis pas « I like swim » : <span class="say">I like swimming</span>. Et ne confonds pas <span class="say">I like swimming</span> (j'aime nager, en général) avec <span class="say">I'm swimming</span> (je suis en train de nager).</div>
<div class="callout tip"><b>Bon à savoir</b> On entend aussi <span class="say">I like to swim</span> (surtout en anglais américain) : c'est correct aussi. Mais <span class="say">I'd like to swim</span> veut dire « je voudrais nager » : c'est une autre expression.</div>`
    },
    {
      id: 'en7-s-vocab', title: 'Vocabulaire : les vêtements et les activités',
      html: `
<p>Pour dire ce que quelqu'un porte <b>en ce moment</b>, on utilise <span class="say">wear</span> (porter un vêtement) au présent continu : <span class="say">She's wearing a red dress.</span> — Elle porte une robe rouge.</p>
<h3>Les vêtements</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">clothes</span></td><td>les vêtements</td></tr>
<tr><td><span class="say">a shirt</span></td><td>une chemise</td></tr>
<tr><td><span class="say">a T-shirt</span></td><td>un tee-shirt</td></tr>
<tr><td><span class="say">trousers</span></td><td>un pantalon</td></tr>
<tr><td><span class="say">jeans</span></td><td>un jean</td></tr>
<tr><td><span class="say">a dress</span></td><td>une robe</td></tr>
<tr><td><span class="say">a skirt</span></td><td>une jupe</td></tr>
<tr><td><span class="say">a jumper</span></td><td>un pull</td></tr>
<tr><td><span class="say">a jacket</span></td><td>une veste</td></tr>
<tr><td><span class="say">a coat</span></td><td>un manteau</td></tr>
<tr><td><span class="say">a hat</span></td><td>un chapeau, un bonnet</td></tr>
<tr><td><span class="say">a scarf</span></td><td>une écharpe</td></tr>
<tr><td><span class="say">gloves</span></td><td>des gants</td></tr>
<tr><td><span class="say">socks</span></td><td>des chaussettes</td></tr>
<tr><td><span class="say">shoes</span></td><td>des chaussures</td></tr>
<tr><td><span class="say">trainers</span></td><td>des baskets</td></tr>
<tr><td><span class="say">boots</span></td><td>des bottes</td></tr>
</table>
<p><span class="say">put on</span> = mettre (un vêtement) : <span class="say">I'm putting on my coat.</span> — Je mets mon manteau.<br>
<span class="say">take off</span> = enlever : <span class="say">Take off your shoes, please.</span> — Enlève tes chaussures, s'il te plaît.</p>
<h3>Quelques activités (souvent au présent continu)</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">wait for</span></td><td>attendre (quelqu'un, quelque chose)</td></tr>
<tr><td><span class="say">listen to</span></td><td>écouter</td></tr>
<tr><td><span class="say">look at</span></td><td>regarder</td></tr>
<tr><td><span class="say">talk to</span></td><td>parler à, discuter avec</td></tr>
<tr><td><span class="say">call</span></td><td>appeler, téléphoner</td></tr>
<tr><td><span class="say">laugh</span></td><td>rire</td></tr>
<tr><td><span class="say">cry</span></td><td>pleurer</td></tr>
<tr><td><span class="say">walk</span></td><td>marcher, se promener</td></tr>
<tr><td><span class="say">run</span></td><td>courir</td></tr>
<tr><td><span class="say">swim</span></td><td>nager</td></tr>
<tr><td><span class="say">sit</span></td><td>s'asseoir (<span class="say">she's sitting</span> = elle est assise)</td></tr>
<tr><td><span class="say">carry</span></td><td>porter (un sac, un objet)</td></tr>
</table>
<div class="callout key"><b>À retenir</b> <span class="say">trousers</span>, <span class="say">jeans</span> et <span class="say">clothes</span> sont toujours au <b>pluriel</b> : <span class="say">My trousers are black.</span> — Mon pantalon est noir.</div>
<div class="callout warn"><b>Pièges</b> Porter un vêtement = <span class="say">wear</span> ; porter un sac = <span class="say">carry</span>. Faux amis : un pull = <span class="say">a jumper</span> (<span class="say">to pull</span> = tirer) ; des baskets = <span class="say">trainers</span> (<span class="say">a basket</span> = un panier). Et n'oublie pas les petits mots : <span class="say">wait for</span>, <span class="say">listen to</span>, <span class="say">look at</span>.</div>
<div class="callout tip"><b>Bon à savoir</b> En anglais américain : <span class="say">pants</span> (pantalon), <span class="say">sweater</span> (pull), <span class="say">sneakers</span> (baskets). Attention, en Angleterre, <span class="say">pants</span> veut dire « slip, culotte » !</div>`
    },
    {
      id: 'en7-s-meteo', title: 'La météo : quel temps fait-il ?',
      html: `
<p>Pour parler du temps qu'il fait, l'anglais commence presque toujours par <span class="say">It's</span> (= it is). Le « il » de « il pleut » ou de « il fait froid » se traduit par <b>it</b>.</p>
<h3>Poser la question</h3>
<p><span class="say">What's the weather like?</span> — Quel temps fait-il ?<br>
<span class="say">What's the weather like in London today?</span> — Quel temps fait-il à Londres aujourd'hui ?</p>
<h3>Répondre</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">It's raining.</span></td><td>Il pleut.</td></tr>
<tr><td><span class="say">It's snowing.</span></td><td>Il neige.</td></tr>
<tr><td><span class="say">It's sunny.</span></td><td>Il fait beau, il y a du soleil.</td></tr>
<tr><td><span class="say">The sun is shining.</span></td><td>Le soleil brille.</td></tr>
<tr><td><span class="say">It's cloudy.</span></td><td>Le ciel est nuageux.</td></tr>
<tr><td><span class="say">It's windy.</span></td><td>Il y a du vent.</td></tr>
<tr><td><span class="say">It's cold.</span></td><td>Il fait froid.</td></tr>
<tr><td><span class="say">It's hot.</span></td><td>Il fait chaud.</td></tr>
<tr><td><span class="say">It's warm.</span></td><td>Il fait bon, il fait doux.</td></tr>
<tr><td><span class="say">It's twenty degrees.</span></td><td>Il fait vingt degrés.</td></tr>
</table>
<p><span class="say">It's raining</span> et <span class="say">It's snowing</span> sont au présent continu : il pleut <b>en ce moment</b>. <span class="say">It's sunny</span> ou <span class="say">It's cold</span>, c'est simplement <i>to be</i> + un adjectif.</p>
<div class="callout key"><b>À retenir</b> Météo = <b>It's</b> + adjectif (<span class="say">It's cold</span>) ou <b>It's</b> + verbe en -ing (<span class="say">It's raining</span>).</div>
<div class="callout warn"><b>Pièges</b> « Il fait froid » ne se traduit pas mot à mot : pas de « it makes » → <span class="say">It's cold</span>. « J'ai froid » se dit avec <i>to be</i> : <span class="say">I'm cold</span> (pas « I have cold ») ; de même <span class="say">I'm hot</span> — J'ai chaud. Et <span class="say">the weather</span> (le temps qu'il fait) n'est pas <span class="say">the time</span> (l'heure).</div>
<div class="callout tip"><b>Astuce</b> Avant de sortir : <span class="say">Take your umbrella, it's raining!</span> — Prends ton parapluie, il pleut !</div>`
    }
  ],
  words: [
    // vêtements
    { en: 'clothes', fr: 'les vêtements', pos: 'n', cat: 'Les vêtements', ex: 'I\'m buying new clothes.', exFr: 'J\'achète de nouveaux vêtements.', level: 1, note: 'Toujours au pluriel. Se prononce presque comme « klôz ».' },
    { en: 'shirt', fr: 'la chemise', pos: 'n', cat: 'Les vêtements', ex: 'He\'s wearing a white shirt.', exFr: 'Il porte une chemise blanche.', level: 1 },
    { en: 'trousers', fr: 'le pantalon', pos: 'n', cat: 'Les vêtements', alt: ['pants'], ex: 'My trousers are black.', exFr: 'Mon pantalon est noir.', level: 1, note: 'Toujours au pluriel : my trousers **are**… En américain : pants (mais en Angleterre, pants = un slip !).' },
    { en: 'jeans', fr: 'le jean', pos: 'n', cat: 'Les vêtements', ex: 'I\'m wearing my old jeans.', exFr: 'Je porte mon vieux jean.', level: 1, note: 'Toujours au pluriel, comme trousers : my jeans **are** blue.' },
    { en: 'dress', fr: 'la robe', pos: 'n', cat: 'Les vêtements', ex: 'She\'s wearing a beautiful dress.', exFr: 'Elle porte une belle robe.', level: 1 },
    { en: 'skirt', fr: 'la jupe', pos: 'n', cat: 'Les vêtements', ex: 'Her skirt is blue.', exFr: 'Sa jupe est bleue.', level: 1 },
    { en: 'shoes', fr: 'les chaussures', pos: 'n', cat: 'Les vêtements', ex: 'I\'m putting on my shoes.', exFr: 'Je mets mes chaussures.', level: 1, note: 'Une chaussure = a shoe.' },
    { en: 'trainers', fr: 'les baskets', pos: 'n', cat: 'Les vêtements', alt: ['sneakers'], ex: 'He always wears trainers.', exFr: 'Il porte toujours des baskets.', level: 2, note: 'Faux ami : a basket = un panier. En américain : sneakers.' },
    { en: 'socks', fr: 'les chaussettes', pos: 'n', cat: 'Les vêtements', ex: 'My socks are wet.', exFr: 'Mes chaussettes sont mouillées.', level: 1 },
    { en: 'coat', fr: 'le manteau', pos: 'n', cat: 'Les vêtements', ex: 'Put on your coat, it\'s cold.', exFr: 'Mets ton manteau, il fait froid.', level: 1 },
    { en: 'jacket', fr: 'la veste', pos: 'n', cat: 'Les vêtements', ex: 'I\'m wearing a jacket today.', exFr: 'Je porte une veste aujourd\'hui.', level: 1, note: 'Veut dire aussi : le blouson.' },
    { en: 'jumper', fr: 'le pull', pos: 'n', cat: 'Les vêtements', alt: ['sweater', 'pullover'], ex: 'My jumper is very warm.', exFr: 'Mon pull est très chaud.', level: 1, note: 'Faux ami : « pull » n\'est pas un vêtement en anglais (to pull = tirer). En américain : sweater.' },
    { en: 'hat', fr: 'le chapeau', pos: 'n', cat: 'Les vêtements', ex: 'He\'s wearing a big hat.', exFr: 'Il porte un grand chapeau.', level: 1, note: 'Un bonnet se dit aussi a hat (ou a woolly hat).' },
    { en: 'scarf', fr: 'l\'écharpe', pos: 'n', cat: 'Les vêtements', ex: 'Take your scarf, it\'s windy.', exFr: 'Prends ton écharpe, il y a du vent.', level: 2, note: 'Veut dire aussi : le foulard. Pluriel : scarves.' },
    { en: 'gloves', fr: 'les gants', pos: 'n', cat: 'Les vêtements', ex: 'I\'m looking for my gloves.', exFr: 'Je cherche mes gants.', level: 2, note: 'Un gant = a glove.' },
    { en: 'boots', fr: 'les bottes', pos: 'n', cat: 'Les vêtements', ex: 'She\'s wearing her new boots.', exFr: 'Elle porte ses nouvelles bottes.', level: 2 },
    { en: 'wear', fr: 'porter (un vêtement)', pos: 'v', cat: 'Les vêtements', ex: 'What are you wearing today?', exFr: 'Qu\'est-ce que tu portes aujourd\'hui ?', level: 1, note: 'Porter un sac, un objet = carry.' },
    { en: 'put on', fr: 'mettre (un vêtement)', pos: 'v', cat: 'Les vêtements', ex: 'I\'m putting on my coat.', exFr: 'Je mets mon manteau.', level: 2, note: 'put → putting (on double le t).' },
    { en: 'take off', fr: 'enlever (un vêtement)', pos: 'v', cat: 'Les vêtements', ex: 'Take off your shoes, please.', exFr: 'Enlève tes chaussures, s\'il te plaît.', level: 2 },
    // météo
    { en: 'weather', fr: 'le temps (la météo)', pos: 'n', cat: 'La météo', sec: 'en7-s-meteo', ex: 'The weather is very bad today.', exFr: 'Il fait très mauvais aujourd\'hui.', level: 1, note: 'Quel temps fait-il ? = What\'s the weather like? Attention : the weather (le temps qu\'il fait) n\'est pas the time (l\'heure).' },
    { en: 'rain', fr: 'pleuvoir', pos: 'v', cat: 'La météo', sec: 'en7-s-meteo', ex: 'It\'s raining again!', exFr: 'Il pleut encore !', level: 1, note: 'La pluie = the rain (même mot).' },
    { en: 'snow', fr: 'neiger', pos: 'v', cat: 'La météo', sec: 'en7-s-meteo', ex: 'It\'s snowing in the mountains.', exFr: 'Il neige à la montagne.', level: 1, note: 'La neige = the snow (même mot).' },
    { en: 'sun', fr: 'le soleil', pos: 'n', cat: 'La météo', sec: 'en7-s-meteo', ex: 'I\'m sitting in the sun.', exFr: 'Je suis assis au soleil.', level: 1 },
    { en: 'sunny', fr: 'ensoleillé', pos: 'adj', cat: 'La météo', sec: 'en7-s-meteo', ex: 'It\'s sunny today.', exFr: 'Il fait beau aujourd\'hui (il y a du soleil).', level: 1 },
    { en: 'cloudy', fr: 'nuageux', pos: 'adj', cat: 'La météo', sec: 'en7-s-meteo', ex: 'It\'s cloudy this morning.', exFr: 'Le ciel est nuageux ce matin.', level: 2 },
    { en: 'wind', fr: 'le vent', pos: 'n', cat: 'La météo', sec: 'en7-s-meteo', ex: 'The wind is very strong.', exFr: 'Le vent est très fort.', level: 2 },
    { en: 'windy', fr: 'venteux (il y a du vent)', pos: 'adj', cat: 'La météo', sec: 'en7-s-meteo', ex: 'It\'s very windy today.', exFr: 'Il y a beaucoup de vent aujourd\'hui.', level: 2 },
    { en: 'cold', fr: 'froid', pos: 'adj', cat: 'La météo', sec: 'en7-s-meteo', ex: 'It\'s cold this morning.', exFr: 'Il fait froid ce matin.', level: 1, note: 'J\'ai froid = I\'m cold (avec to be, pas « I have cold »).' },
    { en: 'hot', fr: 'chaud', pos: 'adj', cat: 'La météo', sec: 'en7-s-meteo', ex: 'It\'s very hot today.', exFr: 'Il fait très chaud aujourd\'hui.', level: 1, note: 'J\'ai chaud = I\'m hot. Pour une chaleur agréable, on dit plutôt warm.' },
    { en: 'warm', fr: 'doux, tiède (il fait bon)', pos: 'adj', cat: 'La météo', sec: 'en7-s-meteo', ex: 'It\'s warm in the garden.', exFr: 'Il fait bon dans le jardin.', level: 2, note: 'a warm coat = un manteau chaud.' },
    { en: 'umbrella', fr: 'le parapluie', pos: 'n', cat: 'La météo', sec: 'en7-s-meteo', ex: 'She\'s carrying a red umbrella.', exFr: 'Elle porte un parapluie rouge.', level: 1 },
    { en: 'shine', fr: 'briller', pos: 'v', cat: 'La météo', sec: 'en7-s-meteo', ex: 'Look, the sun is shining!', exFr: 'Regarde, le soleil brille !', level: 2, note: 'shine → shining (le e tombe).' },
    // activités
    { en: 'wait', fr: 'attendre', pos: 'v', cat: 'Activités', ex: 'I\'m waiting for my husband.', exFr: 'J\'attends mon mari.', level: 1, note: 'Attendre quelqu\'un = wait **for** someone.' },
    { en: 'listen', fr: 'écouter', pos: 'v', cat: 'Activités', ex: 'She\'s listening to the radio.', exFr: 'Elle écoute la radio.', level: 1, note: 'Écouter quelque chose = listen **to** something. Le t ne se prononce pas : « lissn ».' },
    { en: 'look', fr: 'regarder', pos: 'v', cat: 'Activités', ex: 'Look at the sky!', exFr: 'Regarde le ciel !', level: 1, note: 'Regarder quelque chose = look **at** something. Pour la télé, on dit watch TV.' },
    { en: 'laugh', fr: 'rire', pos: 'v', cat: 'Activités', ex: 'Why are you laughing?', exFr: 'Pourquoi tu ris ?', level: 2, note: 'Prononciation : « laaf ».' },
    { en: 'cry', fr: 'pleurer', pos: 'v', cat: 'Activités', ex: 'Why is she crying?', exFr: 'Pourquoi est-ce qu\'elle pleure ?', level: 2, note: 'cry → crying, mais she cries (y → ies).' },
    { en: 'talk', fr: 'parler, discuter', pos: 'v', cat: 'Activités', ex: 'We\'re talking about the weather.', exFr: 'Nous parlons de la météo.', level: 1, note: 'Parler à quelqu\'un = talk **to** someone. Le l ne se prononce pas : « tôk ».' },
    { en: 'call', fr: 'appeler, téléphoner', pos: 'v', cat: 'Activités', ex: 'I\'m calling my sister.', exFr: 'J\'appelle ma sœur.', level: 1 },
    { en: 'carry', fr: 'porter (un sac, un objet)', pos: 'v', cat: 'Activités', ex: 'He\'s carrying a big bag.', exFr: 'Il porte un gros sac.', level: 2, note: 'Pour un vêtement, on dit wear.' },
    { en: 'swim', fr: 'nager', pos: 'v', cat: 'Activités', ex: 'They\'re swimming in the sea.', exFr: 'Ils nagent dans la mer.', level: 1, note: 'swim → swimming (on double le m).' },
    { en: 'run', fr: 'courir', pos: 'v', cat: 'Activités', ex: 'He\'s running to the station.', exFr: 'Il court jusqu\'à la gare.', level: 1, note: 'run → running (on double le n).' },
    { en: 'walk', fr: 'marcher, se promener', pos: 'v', cat: 'Activités', ex: 'We\'re walking in the park.', exFr: 'Nous nous promenons dans le parc.', level: 1, note: 'Le l ne se prononce pas : « wôk ».' },
    { en: 'sit', fr: 's\'asseoir', pos: 'v', cat: 'Activités', ex: 'She\'s sitting in the garden.', exFr: 'Elle est assise dans le jardin.', level: 2, note: 'Être assis = be sitting : she\'s sitting. sit → sitting (on double le t).' },
    // maintenant et goûts
    { en: 'now', fr: 'maintenant', pos: 'adv', cat: 'Maintenant', sec: 'en7-s-simple-continu', ex: 'I\'m cooking now.', exFr: 'Je fais la cuisine maintenant.', level: 1 },
    { en: 'at the moment', fr: 'en ce moment', pos: 'x', cat: 'Maintenant', sec: 'en7-s-simple-continu', alt: ['right now'], ex: 'I\'m not working at the moment.', exFr: 'Je ne travaille pas en ce moment.', level: 2, note: 'On dit aussi right now (en ce moment même).' },
    { en: 'love', fr: 'adorer', pos: 'v', cat: 'Les goûts', sec: 'en7-s-like', ex: 'I love dancing.', exFr: 'J\'adore danser.', level: 1, note: 'love + verbe en -ing. Veut dire aussi « aimer (d\'amour) » : I love you.' },
    { en: 'hate', fr: 'détester', pos: 'v', cat: 'Les goûts', sec: 'en7-s-like', ex: 'She hates getting up early.', exFr: 'Elle déteste se lever tôt.', level: 1, note: 'hate + verbe en -ing.' }
  ],
  phrases: [
    { en: 'What are you doing?', fr: 'Qu\'est-ce que tu fais (en ce moment) ?', cat: 'En ce moment', sec: 'en7-s-neg-q' },
    { en: 'I\'m watching TV.', fr: 'Je regarde la télé.', alt: ['I\'m watching television.'], cat: 'En ce moment', sec: 'en7-s-forme' },
    { en: 'I\'m waiting for the bus.', fr: 'J\'attends le bus.', cat: 'En ce moment', sec: 'en7-s-forme' },
    { en: 'I\'m coming!', fr: 'J\'arrive !', cat: 'En ce moment', sec: 'en7-s-forme', note: 'Mot à mot : « je suis en train de venir ».' },
    { en: 'Are you listening to me?', fr: 'Est-ce que tu m\'écoutes ?', cat: 'En ce moment', sec: 'en7-s-neg-q' },
    { en: 'She\'s talking on the phone.', fr: 'Elle est au téléphone.', cat: 'En ce moment', sec: 'en7-s-forme' },
    { en: 'We\'re having lunch.', fr: 'Nous sommes en train de déjeuner.', cat: 'En ce moment', sec: 'en7-s-simple-continu' },
    { en: 'I\'m not working today.', fr: 'Je ne travaille pas aujourd\'hui.', cat: 'En ce moment', sec: 'en7-s-neg-q' },
    { en: 'Where are you going?', fr: 'Où vas-tu ?', cat: 'En ce moment', sec: 'en7-s-neg-q', note: 'Mot à mot : « où es-tu en train d\'aller ? ».' },
    { en: 'I\'m looking for my keys.', fr: 'Je cherche mes clés.', cat: 'En ce moment', sec: 'en7-s-forme', note: 'look for = chercher.' },
    { en: 'Listen! The baby is crying.', fr: 'Écoute ! Le bébé pleure.', cat: 'En ce moment', sec: 'en7-s-simple-continu' },
    { en: 'What\'s the weather like?', fr: 'Quel temps fait-il ?', alt: ['How\'s the weather?'], cat: 'La météo', sec: 'en7-s-meteo' },
    { en: 'It\'s raining.', fr: 'Il pleut.', cat: 'La météo', sec: 'en7-s-meteo' },
    { en: 'Look! It\'s snowing!', fr: 'Regarde ! Il neige !', cat: 'La météo', sec: 'en7-s-meteo' },
    { en: 'It\'s very cold today.', fr: 'Il fait très froid aujourd\'hui.', cat: 'La météo', sec: 'en7-s-meteo' },
    { en: 'The sun is shining.', fr: 'Le soleil brille.', cat: 'La météo', sec: 'en7-s-meteo' },
    { en: 'It\'s windy and cloudy.', fr: 'Il y a du vent et des nuages.', alt: ['It\'s cloudy and windy.'], cat: 'La météo', sec: 'en7-s-meteo' },
    { en: 'I\'m cold.', fr: 'J\'ai froid.', cat: 'La météo', sec: 'en7-s-meteo', note: 'Avec to be : I\'m cold (pas « I have cold »).' },
    { en: 'Take an umbrella!', fr: 'Prends un parapluie !', cat: 'La météo', sec: 'en7-s-meteo' },
    { en: 'Put on your coat.', fr: 'Mets ton manteau.', alt: ['Put your coat on.'], cat: 'Les vêtements', sec: 'en7-s-vocab' },
    { en: 'I\'m wearing a blue shirt.', fr: 'Je porte une chemise bleue.', cat: 'Les vêtements', sec: 'en7-s-vocab' },
    { en: 'I love walking by the sea.', fr: 'J\'adore me promener au bord de la mer.', cat: 'Les goûts', sec: 'en7-s-like' },
    { en: 'I hate waiting.', fr: 'Je déteste attendre.', cat: 'Les goûts', sec: 'en7-s-like' }
  ],
  quiz: [
    { id: 'en7-q-01', q: 'Complète : She ___ reading a book.', choices: ['is', 'are', 'am', 'does'], answer: 0, topic: 'Former le présent continu', sec: 'en7-s-forme',
      why: { 1: '« are » va avec you, we, they.', 2: '« am » va seulement avec I.', 3: '« does » sert au présent simple : on ne le met jamais devant un verbe en -ing.' },
      explain: 'Présent continu : **am / is / are** + verbe en -ing. Avec she : **is**. → She **is reading** a book. (Elle lit un livre.)', say: 'She is reading a book.' },
    { id: 'en7-q-02', q: 'Complète : My parents ___ watching TV.', choices: ['is', 'do', 'are', 'am'], answer: 2, topic: 'Former le présent continu', sec: 'en7-s-forme',
      why: { 0: '« is » va avec he, she, it (une seule personne). My parents = plusieurs personnes.', 1: '« do » ne s\'utilise pas devant un verbe en -ing.', 3: '« am » va seulement avec I.' },
      explain: 'My parents = they (plusieurs personnes) → **are**. → My parents **are watching** TV. (Mes parents regardent la télé.)', say: 'My parents are watching TV.' },
    { id: 'en7-q-03', q: 'Quelle est la forme en -ing de « make » (faire) ?', choices: ['makeing', 'making', 'makking', 'maked'], answer: 1, topic: 'Orthographe du -ing', sec: 'en7-s-ing',
      why: { 0: 'Le e final muet tombe devant -ing.', 2: 'On ne double pas le k : on enlève seulement le e.', 3: '-ed est la marque du passé (et make est irrégulier : made). Ici, il faut -ing.' },
      explain: 'Verbe en **e** muet : le e tombe → **making**. → She\'s **making** a cake. (Elle fait un gâteau.)', say: 'She\'s making a cake.' },
    { id: 'en7-q-04', q: 'Quelle est la forme en -ing de « swim » (nager) ?', choices: ['swiming', 'swimeing', 'swimming', 'swimms'], answer: 2, topic: 'Orthographe du -ing', sec: 'en7-s-ing',
      why: { 0: 'swim est court et finit par une voyelle + une consonne (i + m) : on double le m.', 1: 'Il n\'y a pas de e à ajouter.', 3: '« swimms » n\'existe pas : il faut -ing.' },
      explain: 'Verbe court en **voyelle + consonne** : on double la consonne → **swimming** (comme run → running, sit → sitting). → He\'s **swimming** in the sea. (Il nage dans la mer.)', say: 'He\'s swimming in the sea.' },
    { id: 'en7-q-05', q: 'Quelle est la forme en -ing de « lie » (être allongé) ?', choices: ['lieing', 'lying', 'liing', 'lyeing'], answer: 1, topic: 'Orthographe du -ing', sec: 'en7-s-ing',
      why: { 0: 'Les verbes en -ie changent : ie devient y.', 2: 'On ne garde pas le i : ie devient y.', 3: 'Le e disparaît : ie → y, puis -ing.' },
      explain: 'Verbes en **-ie** : ie → **y** + ing → **lying** (tie → tying). → The cat is **lying** on the sofa. (Le chat est allongé sur le canapé.)', say: 'The cat is lying on the sofa.' },
    { id: 'en7-q-06', q: 'Quelle phrase est correcte ?', choices: ['He doesn\'t working.', 'He not working.', 'He isn\'t working.', 'He isn\'t work.'], answer: 2, topic: 'Le négatif', sec: 'en7-s-neg-q',
      why: { 0: '« doesn\'t » sert au présent simple. Au présent continu : isn\'t + verbe en -ing.', 1: 'Il manque le verbe to be : is not (isn\'t).', 3: 'Il manque le -ing : working.' },
      explain: 'Négatif du présent continu : **is not (isn\'t)** + verbe en -ing. → He **isn\'t working**. (Il ne travaille pas.)', say: 'He isn\'t working.' },
    { id: 'en7-q-07', q: 'Complète : ___ you listening?', choices: ['Do', 'Is', 'Are', 'Does'], answer: 2, topic: 'Les questions', sec: 'en7-s-neg-q',
      why: { 0: 'Pas de do avec un verbe en -ing : on utilise to be.', 1: '« Is » va avec he, she, it.', 3: '« Does » sert au présent simple.' },
      explain: 'Question au présent continu : **Are** + you + verbe en -ing ? → **Are** you listening? (Tu écoutes ?)', say: 'Are you listening?' },
    { id: 'en7-q-08', q: '« Are you cooking? » Réponse : Yes, ___.', choices: ['I am', 'I\'m', 'I do', 'am I'], answer: 0, topic: 'Réponses courtes', sec: 'en7-s-neg-q',
      why: { 1: 'Dans une réponse courte « oui », on ne contracte pas à la fin : « Yes, I\'m » est impossible.', 2: 'La question est posée avec are (to be) : on répond avec am, pas avec do.', 3: 'Dans la réponse, le sujet vient d\'abord : I am.' },
      explain: 'Réponse courte : on reprend le verbe de la question. Are you…? → Yes, **I am**. / No, **I\'m not**.', say: 'Are you cooking? Yes, I am.' },
    { id: 'en7-q-09', q: 'Complète : Every morning, I ___ to work by bus.', choices: ['am going', 'go', 'going', 'goes'], answer: 1, topic: 'Simple ou continu ?', sec: 'en7-s-simple-continu',
      why: { 0: '« Every morning » (chaque matin) = une habitude : présent simple, pas présent continu.', 2: 'Il manque un verbe conjugué, et c\'est une habitude : présent simple.', 3: '« goes » va avec he, she, it.' },
      explain: 'Habitude (every morning) → **présent simple**. → Every morning, I **go** to work by bus. (Chaque matin, je vais au travail en bus.)', say: 'Every morning, I go to work by bus.' },
    { id: 'en7-q-10', q: 'Complète : Listen! The phone ___.', choices: ['rings', 'ring', 'is ringing', 'ringing'], answer: 2, topic: 'Simple ou continu ?', sec: 'en7-s-simple-continu',
      why: { 0: '« rings » = il sonne d\'habitude. Ici, « Listen! » montre que ça se passe maintenant.', 1: 'The phone = it : il faudrait au moins un -s, et ici c\'est maintenant.', 3: 'Il manque is.' },
      explain: '« Listen! » (Écoute !) = maintenant → présent continu. → Listen! The phone **is ringing**. (Écoute ! Le téléphone sonne.)', say: 'Listen! The phone is ringing.' },
    { id: 'en7-q-11', q: 'Quelle expression annonce le présent continu ?', choices: ['every day', 'usually', 'on Sundays', 'at the moment'], answer: 3, topic: 'Simple ou continu ?', sec: 'en7-s-simple-continu',
      why: { 0: '« every day » (tous les jours) = une habitude → présent simple.', 1: '« usually » (d\'habitude) → présent simple.', 2: '« on Sundays » (le dimanche) = une habitude → présent simple.' },
      explain: '**at the moment** = en ce moment → présent continu. → I\'m cooking **at the moment**. (Je fais la cuisine en ce moment.)', say: 'I\'m cooking at the moment.' },
    { id: 'en7-q-12', q: 'Complète : She usually drinks tea, but today she ___ coffee.', choices: ['drinks', 'is drinking', 'drink', 'drinking'], answer: 1, topic: 'Simple ou continu ?', sec: 'en7-s-simple-continu',
      why: { 0: '« drinks » = une habitude. « but today » (mais aujourd\'hui) montre que c\'est différent, en ce moment.', 2: 'Avec she, il faudrait un -s ; et ici on veut le présent continu.', 3: 'Il manque is.' },
      explain: 'usually → habitude (drinks) ; **but today** → en ce moment : **is drinking**. → She usually drinks tea, but today she **is drinking** coffee. (D\'habitude elle boit du thé, mais aujourd\'hui elle boit du café.)', say: 'She usually drinks tea, but today she is drinking coffee.' },
    { id: 'en7-q-13', q: 'Quelle phrase est correcte ?', choices: ['I\'m knowing the answer.', 'I know the answer.', 'I knowing the answer.', 'I am know the answer.'], answer: 1, topic: 'Verbes sans -ing', sec: 'en7-s-simple-continu',
      why: { 0: '« know » (savoir, connaître) fait partie des verbes qui ne se mettent presque jamais en -ing.', 2: 'Il manque un verbe conjugué ; et know ne se met pas en -ing.', 3: 'On ne met pas am devant un verbe sans -ing.' },
      explain: 'know, want, need, like, love, understand : pas de -ing, même maintenant. → I **know** the answer. (Je connais la réponse.)', say: 'I know the answer.' },
    { id: 'en7-q-14', q: 'Complète : I like ___.', choices: ['swim', 'swimming', 'swiming', 'swims'], answer: 1, topic: 'like / love / hate + -ing', sec: 'en7-s-like',
      why: { 0: 'Après like, on ne met pas la base seule : il faut le verbe en -ing.', 2: 'Orthographe : swim → swimming, avec deux m.', 3: '« swims » est la forme conjuguée avec he / she / it.' },
      explain: 'like / love / hate + verbe en **-ing** : I like **swimming**. (J\'aime nager.)', say: 'I like swimming.' },
    { id: 'en7-q-15', q: 'Complète : He hates ___ for the bus.', choices: ['waiting', 'wait', 'waits', 'is waiting'], answer: 0, topic: 'like / love / hate + -ing', sec: 'en7-s-like',
      why: { 1: 'Après hate, le verbe se met en -ing.', 2: 'Le verbe conjugué, c\'est déjà hates : le deuxième verbe prend seulement -ing.', 3: 'Il y a déjà un verbe conjugué (hates) : pas de is ici.' },
      explain: 'hate + verbe en **-ing** : He hates **waiting** for the bus. (Il déteste attendre le bus.)', say: 'He hates waiting for the bus.' },
    { id: 'en7-q-16', q: 'Comment dit-on « Il fait froid » ?', choices: ['It makes cold.', 'He is cold.', 'It\'s cold.', 'It does cold.'], answer: 2, topic: 'La météo', sec: 'en7-s-meteo',
      why: { 0: 'On ne traduit pas « fait » par make : pour la météo, on utilise to be.', 1: '« He is cold » = il (un homme) a froid. Pour la météo, « il » = it.', 3: 'On ne traduit pas « fait » par do : It\'s + adjectif.' },
      explain: 'Météo : **It\'s** + adjectif. → **It\'s cold.** (Il fait froid.)', say: 'It\'s cold.' },
    { id: 'en7-q-17', q: 'Comment dit-on « J\'ai froid » ?', choices: ['I have cold.', 'I\'m cold.', 'It\'s cold.', 'I make cold.'], answer: 1, topic: 'La météo', sec: 'en7-s-meteo',
      why: { 0: 'En anglais, on ne « possède » pas le froid : on utilise to be.', 2: '« It\'s cold » = il fait froid (la météo), pas j\'ai froid.', 3: 'make ne s\'utilise pas ici.' },
      explain: 'Avoir froid / chaud = **to be** cold / hot. → **I\'m cold.** (J\'ai froid.) · I\'m hot. (J\'ai chaud.)', say: 'I\'m cold.' },
    { id: 'en7-q-18', q: 'Comment dit-on « Je porte un pull » (sur moi, en ce moment) ?', choices: ['I\'m carrying a jumper.', 'I\'m wearing a jumper.', 'I\'m wear a jumper.', 'I\'m wearing a pull.'], answer: 1, topic: 'Les vêtements', sec: 'en7-s-vocab',
      why: { 0: '« carry » = porter un objet (dans les mains). Pour un vêtement sur soi : wear.', 2: 'Il manque le -ing : wearing.', 3: '« pull » est un faux ami : to pull = tirer. Un pull = a jumper.' },
      explain: 'Porter un vêtement = **wear**. → I\'m **wearing** a **jumper**. (Je porte un pull.)', say: 'I\'m wearing a jumper.' },
    { id: 'en7-q-19', q: 'Complète : My new trousers ___ too long.', choices: ['is', 'are', 'am', 'be'], answer: 1, topic: 'Les vêtements', sec: 'en7-s-vocab',
      why: { 0: '« trousers » (un pantalon) est toujours au pluriel en anglais.', 2: '« am » va seulement avec I.', 3: '« be » doit être conjugué.' },
      explain: '**trousers** (un pantalon) est toujours pluriel → **are**. → My new trousers **are** too long. (Mon nouveau pantalon est trop long.)', say: 'My new trousers are too long.' },
    { id: 'en7-q-20', q: 'Écoute. Quel temps fait-il ?', listen: true, say: 'It\'s raining and it\'s very windy.', choices: ['Il neige et il fait froid.', 'Il fait beau mais il y a du vent.', 'Il pleut et il y a beaucoup de vent.', 'Il pleut mais il fait chaud.'], answer: 2, topic: 'Compréhension orale', sec: 'en7-s-meteo',
      why: { 0: '« Il neige » serait snowing ; on entend raining.', 1: 'On entend raining (il pleut), pas sunny.', 3: 'On n\'entend pas hot (chaud) mais windy (il y a du vent).' },
      explain: '**raining** = il pleut ; **windy** = il y a du vent. → It\'s raining and it\'s very windy. (Il pleut et il y a beaucoup de vent.)' },
    { id: 'en7-q-21', q: 'Écoute. Que fait la personne ?', listen: true, say: 'I\'m at the supermarket. I\'m buying some bread.', choices: ['Elle mange du pain à la maison.', 'Elle achète du pain au supermarché.', 'Elle travaille au supermarché.', 'Elle cherche le supermarché.'], answer: 1, topic: 'Compréhension orale', sec: 'en7-s-forme',
      why: { 0: 'Elle dit « at the supermarket » : elle n\'est pas à la maison.', 2: 'On entend buying (acheter), pas working (travailler).', 3: 'Elle dit « I\'m at the supermarket » : elle y est déjà.' },
      explain: '**I\'m buying** = je suis en train d\'acheter. → I\'m at the supermarket. I\'m buying some bread. (Je suis au supermarché. J\'achète du pain.)' },
    { id: 'en7-q-22', q: 'Écoute. Comment est-elle habillée ?', listen: true, say: 'She\'s wearing a red dress and black shoes.', choices: ['Une jupe rouge et des bottes noires.', 'Une robe noire et des chaussures rouges.', 'Une robe rouge et des chaussures noires.', 'Un manteau rouge et un chapeau noir.'], answer: 2, topic: 'Compréhension orale', sec: 'en7-s-vocab',
      why: { 0: '« dress » = une robe (une jupe = a skirt) ; « shoes » = des chaussures (des bottes = boots).', 1: 'Les couleurs sont inversées : red dress (robe rouge), black shoes (chaussures noires).', 3: 'On n\'entend ni coat (manteau) ni hat (chapeau).' },
      explain: '**a red dress** = une robe rouge ; **black shoes** = des chaussures noires. En anglais, la couleur se place avant le nom.' },
    { id: 'en7-q-23', q: 'Écoute. Que fait l\'homme ?', listen: true, say: 'What are you doing? I\'m waiting for my wife.', choices: ['Il appelle sa femme.', 'Il attend sa femme.', 'Il écoute sa femme.', 'Il cherche sa femme.'], answer: 1, topic: 'Compréhension orale', sec: 'en7-s-vocab',
      why: { 0: '« Il appelle » serait I\'m calling.', 2: '« Il écoute » serait I\'m listening to.', 3: '« Il cherche » serait I\'m looking for.' },
      explain: '**wait for** = attendre. → I\'m waiting for my wife. (J\'attends ma femme.)' },
    { id: 'en7-q-24', q: 'Quelle question veut dire « Qu\'est-ce que tu fais (en ce moment) ? »', choices: ['What do you do?', 'What are you doing?', 'What you are doing?', 'What is you doing?'], answer: 1, topic: 'Les questions', sec: 'en7-s-neg-q',
      why: { 0: '« What do you do? » = Qu\'est-ce que tu fais dans la vie ? (ton métier).', 2: 'Dans une question, are se place avant le sujet : What are you…?', 3: 'Avec you : are, pas is.' },
      explain: 'En ce moment → présent continu : **What are you doing?** (Qu\'est-ce que tu fais ?)', say: 'What are you doing?' }
  ],
  exercises: [
    { id: 'en7-x-01', prompt: 'Complète avec am, is ou are : My wife ___ cooking.', answers: ['is', 'My wife is cooking'], topic: 'Former le présent continu', sec: 'en7-s-forme', strict: true,
      hint: 'My wife = she.',
      explain: 'My wife = she → **is**. → My wife **is** cooking. (Ma femme fait la cuisine.)',
      rule: 'I **am** · he/she/it **is** · you/we/they **are** + verbe en -ing',
      mistakes: [{ text: 'are', msg: '« are » va avec you, we, they. My wife = she → **is**.' }, { text: 'am', msg: '« am » va seulement avec I. My wife = she → **is**.' }, { text: 'does', msg: 'Pas de **does** devant un verbe en -ing : on utilise to be → My wife **is** cooking.' }],
      say: 'My wife is cooking.' },
    { id: 'en7-x-02', prompt: 'Mets au présent continu : I ___ (wait) for the bus.', answers: ['am waiting', '\'m waiting', 'I am waiting', 'I am waiting for the bus'], topic: 'Former le présent continu', sec: 'en7-s-forme', strict: true,
      hint: 'Deux morceaux : am + verbe en -ing.',
      explain: 'Présent continu = **am** + **waiting**. → I **am waiting** (I\'m waiting) for the bus. (J\'attends le bus.)',
      rule: 'am / is / are + verbe en -ing',
      mistakes: [{ text: 'waiting', msg: 'Il manque **am** : le présent continu a besoin de to be → I **am waiting**.' }, { text: 'am wait', msg: 'Il manque **-ing** : I am **waiting**.' }, { text: 'wait', msg: 'Ici, on parle de maintenant : présent continu → I **am waiting**.' }],
      say: 'I am waiting for the bus.' },
    { id: 'en7-x-03', prompt: 'Mets au présent continu : The children ___ (play) in the garden.', answers: ['are playing', 'The children are playing in the garden'], topic: 'Former le présent continu', sec: 'en7-s-forme', strict: true,
      hint: 'The children = they.',
      explain: 'The children = they → **are playing**. → The children **are playing** in the garden. (Les enfants jouent dans le jardin.)',
      rule: 'they → are + verbe en -ing',
      mistakes: [{ text: 'is playing', msg: 'The children (les enfants) = they, plusieurs personnes → **are** playing.' }, { text: 'play', msg: '« play » = ils jouent d\'habitude (présent simple). En ce moment : **are playing**.' }, { text: 'are play', msg: 'Il manque **-ing** : are **playing**.' }],
      say: 'The children are playing in the garden.' },
    { id: 'en7-x-04', prompt: 'Écris la forme en -ing de « make » (faire).', answers: ['making'], topic: 'Orthographe du -ing', sec: 'en7-s-ing', strict: true,
      hint: 'Que devient le e final ?',
      explain: 'make → **making** : le e muet tombe, comme write → writing, come → coming. → She\'s **making** a cake. (Elle fait un gâteau.)',
      rule: 'Verbe en e muet : on enlève le e et on ajoute -ing.',
      mistakes: [{ text: 'makeing', msg: 'Le **e** final muet tombe devant -ing : **making**.' }, { text: 'makking', msg: 'On ne double pas le k : on enlève seulement le e → **making**.' }],
      say: 'She\'s making a cake.' },
    { id: 'en7-x-05', prompt: 'Écris la forme en -ing de « run » (courir).', answers: ['running'], topic: 'Orthographe du -ing', sec: 'en7-s-ing', strict: true,
      hint: 'Verbe court en voyelle + consonne…',
      explain: 'run → **running** : verbe court qui finit par une voyelle + une consonne (u + n), on double le n. → He\'s **running**. (Il court.)',
      rule: 'Verbe court en 1 voyelle + 1 consonne : on double la consonne (run → running, sit → sitting).',
      mistakes: [{ text: 'runing', msg: 'run est court et finit par voyelle + consonne (u + n) : on **double** le n → **running**.' }, { text: 'runned', msg: '-ed est la marque du passé. Ici, on veut -ing : **running**.' }, { text: 'run', msg: 'Il faut ajouter -ing (en doublant le n) : **running**.' }],
      say: 'He\'s running.' },
    { id: 'en7-x-06', prompt: 'Écris la forme en -ing de « write » (écrire).', answers: ['writing'], topic: 'Orthographe du -ing', sec: 'en7-s-ing', strict: true,
      hint: 'Le e final muet…',
      explain: 'write → **writing** : le e tombe, et un seul t. → I\'m **writing** a letter. (J\'écris une lettre.)',
      rule: 'Verbe en e muet : on enlève le e et on ajoute -ing.',
      mistakes: [{ text: 'writting', msg: 'Un seul **t** : write → **writing** (on enlève seulement le e). Le double t, c\'est dans written.' }, { text: 'writeing', msg: 'Le **e** final tombe devant -ing : **writing**.' }],
      say: 'I\'m writing a letter.' },
    { id: 'en7-x-07', prompt: 'Écris la forme en -ing de « lie » (être allongé).', answers: ['lying'], topic: 'Orthographe du -ing', sec: 'en7-s-ing', strict: true,
      hint: 'Verbe en -ie : ie devient…',
      explain: 'lie → **lying** : ie devient y, puis -ing. → The cat is **lying** on the sofa. (Le chat est allongé sur le canapé.)',
      rule: 'Verbe en -ie : ie → y + ing (lie → lying, tie → tying).',
      mistakes: [{ text: 'lieing', msg: 'Les verbes en **-ie** changent : ie → **y**, puis -ing → **lying**.' }, { text: 'liing', msg: 'ie devient **y** : **lying**.' }],
      say: 'The cat is lying on the sofa.' },
    { id: 'en7-x-08', prompt: 'Écris la forme en -ing de « sit » (s\'asseoir).', answers: ['sitting'], topic: 'Orthographe du -ing', sec: 'en7-s-ing', strict: true,
      hint: 'Comme run → running.',
      explain: 'sit → **sitting** : on double le t. → She\'s **sitting** in the garden. (Elle est assise dans le jardin.)',
      rule: 'Verbe court en 1 voyelle + 1 consonne : on double la consonne.',
      mistakes: [{ text: 'siting', msg: 'sit est court et finit par voyelle + consonne : on double le t → **sitting**.' }, { text: 'sitteing', msg: 'Pas de e : on double le t et on ajoute -ing → **sitting**.' }],
      say: 'She\'s sitting in the garden.' },
    { id: 'en7-x-09', prompt: 'Écris la forme en -ing de « rain » (pleuvoir).', answers: ['raining'], topic: 'Orthographe du -ing', sec: 'en7-s-ing', strict: true,
      hint: 'Deux voyelles avant le n…',
      explain: 'rain → **raining** : simple + ing. On ne double pas après deux voyelles (a + i). → It\'s **raining**. (Il pleut.)',
      rule: 'Deux voyelles avant la consonne finale : pas de doublement (rain → raining, eat → eating).',
      mistakes: [{ text: 'rainning', msg: 'On ne double pas après **deux voyelles** (a + i) : **raining**.' }, { text: 'raineing', msg: 'Il n\'y a pas de e à ajouter : rain + ing → **raining**.' }],
      say: 'It\'s raining.' },
    { id: 'en7-x-10', prompt: 'Mets à la forme négative : She is sleeping.', answers: ['She isn\'t sleeping'], topic: 'Le négatif', sec: 'en7-s-neg-q',
      hint: 'On ajoute not après is.',
      explain: 'Négatif : **is not (isn\'t)** + verbe en -ing. → She **isn\'t sleeping**. (Elle ne dort pas.)',
      rule: 'am / is / are + not + verbe en -ing',
      mistakes: [{ text: 'She doesn\'t sleeping', msg: '**doesn\'t** sert au présent simple. Au présent continu, on ajoute not après is → She **isn\'t** sleeping.' }, { text: 'She not sleeping', msg: 'Il manque le verbe to be : She **is not** (isn\'t) sleeping.' }, { text: 'She isn\'t sleep', msg: 'Garde le **-ing** : She isn\'t **sleeping**.' }],
      say: 'She isn\'t sleeping.' },
    { id: 'en7-x-11', prompt: 'Mets à la forme négative : I\'m working today.', answers: ['I\'m not working today'], topic: 'Le négatif', sec: 'en7-s-neg-q',
      hint: 'I\'m + not + …',
      explain: 'Négatif : **I\'m not** + verbe en -ing. → I\'m **not** working today. (Je ne travaille pas aujourd\'hui.)',
      rule: 'am / is / are + not + verbe en -ing',
      mistakes: [{ text: 'I don\'t working today', msg: 'Pas de **don\'t** avec -ing : on ajoute **not** après am → I\'m **not** working today.' }, { text: 'I not working today', msg: 'Il manque **am** : I **am not** (I\'m not) working today.' }, { text: 'I\'m not work today', msg: 'Garde le **-ing** : I\'m not **working** today.' }],
      say: 'I\'m not working today.' },
    { id: 'en7-x-12', prompt: 'Transforme en question : You are listening.', answers: ['Are you listening'], topic: 'Les questions', sec: 'en7-s-neg-q',
      hint: 'On inverse are et le sujet.',
      explain: 'Question : **Are** + sujet + verbe en -ing ? → **Are you listening?** (Tu écoutes ?)',
      rule: 'Question : Am / Is / Are + sujet + verbe en -ing ?',
      mistakes: [{ text: 'Do you listening', msg: 'Pas de **do** au présent continu : on met **Are** avant le sujet → Are you listening?' }, { text: 'You are listening', msg: 'Pour poser la question, il faut inverser : **Are you** listening?' }, { text: 'Are you listen', msg: 'Garde le **-ing** : Are you **listening**?' }, { text: 'Is you listening', msg: 'Avec you, on utilise **are** (pas is) : **Are** you listening?' }],
      say: 'Are you listening?' },
    { id: 'en7-x-13', prompt: 'Transforme en question : He is wearing a coat.', answers: ['Is he wearing a coat'], topic: 'Les questions', sec: 'en7-s-neg-q',
      hint: 'On inverse is et he.',
      explain: 'Question : **Is** + he + verbe en -ing ? → **Is he wearing** a coat? (Est-ce qu\'il porte un manteau ?)',
      rule: 'Question : Am / Is / Are + sujet + verbe en -ing ?',
      mistakes: [{ text: 'Does he wearing a coat', msg: 'Pas de **does** au présent continu : on met **Is** avant le sujet → Is he wearing a coat?' }, { text: 'Is he wear a coat', msg: 'Garde le **-ing** : Is he **wearing** a coat?' }, { text: 'He is wearing a coat', msg: 'Pour poser la question, il faut inverser : **Is he** wearing a coat?' }],
      say: 'Is he wearing a coat?' },
    { id: 'en7-x-14', prompt: 'Réponds « oui » avec une réponse courte : Are you cooking? — Yes, ___.', answers: ['I am', 'Yes, I am'], topic: 'Réponses courtes', sec: 'en7-s-neg-q',
      hint: 'On reprend le verbe de la question (to be).',
      explain: '→ Are you cooking? Yes, **I am**. (Oui.) Attention : on ne contracte jamais à la fin d\'une réponse courte (« Yes, I\'m » est impossible).',
      rule: 'Réponse courte : Yes, I am / he is / they are · No, I\'m not / he isn\'t / they aren\'t',
      mistakes: [{ text: 'I do', msg: 'La question est posée avec **are** : on répond avec to be → Yes, **I am**.' }, { text: 'I cooking', msg: 'Dans une réponse courte, on reprend seulement le sujet et to be : Yes, **I am**.' }, { text: 'I are', msg: 'Avec I : **am** → Yes, I am.' }],
      say: 'Yes, I am.' },
    { id: 'en7-x-15', prompt: 'Réponds « non » avec une réponse courte : Is it raining? — No, ___.', answers: ['it isn\'t', 'No, it isn\'t'], topic: 'Réponses courtes', sec: 'en7-s-neg-q',
      hint: 'it + is + not…',
      explain: '→ Is it raining? No, **it isn\'t**. (Non, il ne pleut pas.) On peut aussi dire No, it\'s not.',
      rule: 'Réponse courte : No, it isn\'t / he isn\'t / I\'m not / they aren\'t',
      mistakes: [{ text: 'it doesn\'t', msg: 'La question est posée avec **is** : on répond avec to be → No, it **isn\'t**.' }, { text: 'it not', msg: 'Il manque **is** : No, it **isn\'t** (it is not).' }, { text: 'he isn\'t', msg: 'Pour la météo, on garde **it** : No, **it** isn\'t.' }],
      say: 'No, it isn\'t.' },
    { id: 'en7-x-16', prompt: 'Remets dans l\'ordre : doing / are / what / you / ?', answers: ['What are you doing'], topic: 'Les questions', sec: 'en7-s-neg-q',
      hint: 'Mot interrogatif + are + sujet + -ing.',
      explain: '→ **What are you doing?** (Qu\'est-ce que tu fais ?)',
      rule: 'Mot interrogatif + am / is / are + sujet + verbe en -ing ?',
      mistakes: [{ text: 'What you are doing', msg: 'Dans une question, **are** se place avant le sujet : What **are you** doing?' }, { text: 'Are you doing what', msg: 'Le mot interrogatif **What** se place en premier : What are you doing?' }],
      say: 'What are you doing?' },
    { id: 'en7-x-17', prompt: 'Traduis (en ce moment) : Où vas-tu ?', answers: ['Where are you going'], topic: 'Les questions', sec: 'en7-s-neg-q',
      hint: 'Where + are + you + go…ing ?',
      explain: '→ **Where are you going?** (Où vas-tu ?)',
      rule: 'Mot interrogatif + am / is / are + sujet + verbe en -ing ?',
      mistakes: [{ text: 'Where you are going', msg: 'Dans une question, **are** se place avant le sujet : Where **are you** going?' }, { text: 'Where do you go', msg: '« Where do you go? » = où vas-tu d\'habitude. Pour maintenant : **Where are you going?**' }, { text: 'Where are you go', msg: 'Garde le **-ing** : Where are you **going**?' }],
      say: 'Where are you going?' },
    { id: 'en7-x-18', prompt: 'Présent simple ou continu ? Complète : Every morning, I ___ (drink) a cup of coffee.', answers: ['drink', 'Every morning, I drink a cup of coffee'], topic: 'Simple ou continu ?', sec: 'en7-s-simple-continu', strict: true,
      hint: 'Every morning = chaque matin : habitude ou maintenant ?',
      explain: 'Habitude (every morning) → **présent simple**. → Every morning, I **drink** a cup of coffee. (Chaque matin, je bois une tasse de café.)',
      rule: 'Habitude → présent simple · en ce moment → présent continu',
      mistakes: [{ text: 'am drinking', msg: '« Every morning » (chaque matin) = une habitude → présent simple : I **drink**.' }, { text: 'drinking', msg: 'Il faut un verbe conjugué ; et c\'est une habitude → I **drink**.' }, { text: 'drinks', msg: 'Pas de -s avec I : I **drink**.' }],
      say: 'Every morning, I drink a cup of coffee.' },
    { id: 'en7-x-19', prompt: 'Présent simple ou continu ? Complète : Look! It ___ (snow)!', answers: ['is snowing', '\'s snowing', 'It is snowing', 'Look! It is snowing!'], topic: 'Simple ou continu ?', sec: 'en7-s-simple-continu', strict: true,
      hint: 'Look! = ça se passe maintenant.',
      explain: '« Look! » (Regarde !) → maintenant → présent continu. → Look! It **is snowing** (It\'s snowing)! (Regarde ! Il neige !)',
      rule: 'Look! / Listen! / now → présent continu',
      mistakes: [{ text: 'snows', msg: '« Look! » montre que ça se passe maintenant → présent continu : It **is snowing**.' }, { text: 'is snow', msg: 'Garde le **-ing** : It is **snowing**.' }, { text: 'is snowwing', msg: 'On ne double jamais le w : **snowing**.' }],
      say: 'Look! It\'s snowing!' },
    { id: 'en7-x-20', prompt: 'Complète les 2 trous (sépare-les par une virgule) : She usually ___ (wear) jeans, but today she ___ (wear) a dress.', answers: ['wears, is wearing', 'wears, \'s wearing'], topic: 'Simple ou continu ?', sec: 'en7-s-simple-continu', strict: true,
      hint: 'usually = d\'habitude ; today = aujourd\'hui (en ce moment).',
      explain: 'usually → présent simple : **wears** ; today → présent continu : **is wearing**. → She usually **wears** jeans, but today she **is wearing** a dress. (D\'habitude elle porte un jean, mais aujourd\'hui elle porte une robe.)',
      rule: 'Habitude → présent simple · en ce moment → présent continu',
      mistakes: [{ text: 'is wearing, wears', msg: 'C\'est l\'inverse : usually (d\'habitude) → présent simple **wears** ; today (aujourd\'hui) → présent continu **is wearing**.' }, { text: 'wear, is wearing', msg: 'Avec she au présent simple, il faut un **-s** : she **wears**.' }, { text: 'wears, wearing', msg: 'Il manque **is** : today she **is wearing**.' }],
      say: 'She usually wears jeans, but today she is wearing a dress.' },
    { id: 'en7-x-21', prompt: 'Complète avec le bon verbe : I love ___ (dance).', answers: ['dancing', 'to dance'], topic: 'like / love / hate + -ing', sec: 'en7-s-like', strict: true,
      hint: 'love + verbe en -ing (attention au e final).',
      explain: 'love + verbe en **-ing** : I love **dancing**. (J\'adore danser.) Le e de dance tombe.',
      rule: 'like / love / hate + verbe en -ing',
      mistakes: [{ text: 'dance', msg: 'Après love (comme like, hate), le verbe prend **-ing** : I love **dancing**.' }, { text: 'danceing', msg: 'Le e final tombe devant -ing : **dancing**.' }, { text: 'dances', msg: 'Le deuxième verbe ne se conjugue pas : I love **dancing**.' }],
      say: 'I love dancing.' },
    { id: 'en7-x-22', prompt: 'Complète avec le bon verbe : My husband hates ___ (get) up early.', answers: ['getting', 'to get'], topic: 'like / love / hate + -ing', sec: 'en7-s-like', strict: true,
      hint: 'hate + -ing ; get est court…',
      explain: 'hate + verbe en **-ing** : My husband hates **getting** up early. (Mon mari déteste se lever tôt.) get → getting : on double le t.',
      rule: 'like / love / hate + verbe en -ing',
      mistakes: [{ text: 'get', msg: 'Après hate, le verbe prend **-ing** : hates **getting** up.' }, { text: 'geting', msg: 'get est court (voyelle + consonne) : on double le t → **getting**.' }],
      say: 'My husband hates getting up early.' },
    { id: 'en7-x-23', prompt: 'Traduis (en ce moment) : Il pleut.', answers: ['It\'s raining'], topic: 'La météo', sec: 'en7-s-meteo',
      hint: 'Météo : on commence par It\'s…',
      explain: '→ **It\'s raining.** (Il pleut, en ce moment.) « It rains » voudrait dire qu\'il pleut souvent, en général.',
      rule: 'Météo maintenant : It\'s + verbe en -ing (It\'s raining, It\'s snowing).',
      mistakes: [{ text: 'It rains', msg: '« It rains » = il pleut en général (souvent). Pour maintenant : **It\'s raining**.' }, { text: 'He is raining', msg: 'Pour la météo, « il » se dit **it** : It\'s raining.' }, { text: 'It\'s rain', msg: 'Il faut le verbe en -ing : It\'s **raining**.' }, { text: 'It raining', msg: 'Il manque **is** : It **is** raining (It\'s raining).' }],
      say: 'It\'s raining.' },
    { id: 'en7-x-24', prompt: 'Traduis : Il fait froid aujourd\'hui.', answers: ['It\'s cold today', 'Today it\'s cold'], topic: 'La météo', sec: 'en7-s-meteo',
      hint: 'It\'s + adjectif.',
      explain: '→ **It\'s cold today.** (Il fait froid aujourd\'hui.)',
      rule: 'Météo : It\'s + adjectif (cold, hot, sunny, windy…).',
      mistakes: [{ text: 'It makes cold today', msg: 'Pas de « make » pour la météo : **It\'s** + adjectif → It\'s cold today.' }, { text: 'He is cold today', msg: '« He is cold » = il (un homme) a froid. Pour la météo : **It\'s** cold.' }, { text: 'It does cold today', msg: 'Pas de « do » pour la météo : **It\'s** cold today.' }],
      say: 'It\'s cold today.' },
    { id: 'en7-x-25', prompt: 'Traduis : J\'ai froid.', answers: ['I\'m cold'], topic: 'La météo', sec: 'en7-s-meteo',
      hint: 'En anglais, on « est » froid.',
      explain: 'Avoir froid = **to be** cold → **I\'m cold.** (J\'ai froid.)',
      rule: 'Avoir froid / chaud = to be cold / hot.',
      mistakes: [{ text: 'I have cold', msg: 'Avoir froid = **to be** cold : **I\'m cold**. (I have a cold = j\'ai un rhume !)' }, { text: 'It\'s cold', msg: '« It\'s cold » = il fait froid. J\'ai froid = **I\'m cold**.' }, { text: 'I have got cold', msg: 'Avoir froid se dit avec to be : **I\'m cold**.' }],
      say: 'I\'m cold.' },
    { id: 'en7-x-26', prompt: 'Traduis (sur moi, en ce moment) : Je porte un manteau.', answers: ['I\'m wearing a coat'], topic: 'Les vêtements', sec: 'en7-s-vocab',
      hint: 'Porter un vêtement = wear.',
      explain: '→ **I\'m wearing a coat.** (Je porte un manteau.)',
      rule: 'Porter un vêtement = wear ; porter un objet = carry.',
      mistakes: [{ text: 'I\'m carrying a coat', msg: '**carry** = porter un objet dans les mains. Pour un vêtement sur soi : **wear** → I\'m wearing a coat.' }, { text: 'I wear a coat', msg: '« I wear » = d\'habitude. En ce moment : **I\'m wearing** a coat.' }, { text: 'I\'m wearing coat', msg: 'Il manque l\'article **a** : I\'m wearing **a** coat.' }],
      say: 'I\'m wearing a coat.' },
    { id: 'en7-x-27', prompt: 'Complète avec le mot anglais : It\'s cold. Put on your ___ ! (pull)', answers: ['jumper', 'sweater', 'pullover'], topic: 'Les vêtements', sec: 'en7-s-vocab',
      hint: 'Ce n\'est pas « pull »…',
      explain: 'Un pull = **a jumper** (ou a sweater). → It\'s cold. Put on your **jumper**! (Il fait froid. Mets ton pull !)',
      rule: 'Faux ami : to pull = tirer. Un pull = a jumper / a sweater.',
      mistakes: [{ text: 'pull', msg: 'Faux ami : **to pull** veut dire tirer. Un pull = a **jumper** (ou a sweater).' }, { text: 'jacket', msg: '« jacket » = une veste. Un pull = a **jumper**.' }],
      say: 'It\'s cold. Put on your jumper!' },
    { id: 'en7-x-28', prompt: 'Complète avec is ou are : My trousers ___ too long.', answers: ['are'], topic: 'Les vêtements', sec: 'en7-s-vocab', strict: true,
      hint: 'trousers est singulier ou pluriel en anglais ?',
      explain: '**trousers** (un pantalon) est toujours pluriel → **are**. → My trousers **are** too long. (Mon pantalon est trop long.)',
      rule: 'trousers, jeans, clothes : toujours au pluriel.',
      mistakes: [{ text: 'is', msg: '**trousers** (un pantalon) est toujours **pluriel** en anglais → my trousers **are**.' }, { text: 'am', msg: '« am » va seulement avec I. trousers est pluriel → **are**.' }],
      say: 'My trousers are too long.' },
    { id: 'en7-x-29', prompt: 'Complète avec le mot anglais : Take your ___ , it\'s raining! (parapluie)', answers: ['umbrella'], topic: 'La météo', sec: 'en7-s-meteo',
      hint: 'Il commence par « u ».',
      explain: 'Un parapluie = **an umbrella**. → Take your **umbrella**, it\'s raining! (Prends ton parapluie, il pleut !)',
      rule: 'parapluie = umbrella (deux l).',
      mistakes: [{ text: 'parapluie', msg: 'C\'est le mot français : en anglais, un parapluie = an **umbrella**.' }, { text: 'an umbrella', msg: 'Après **your**, pas d\'article : Take your **umbrella**.' }],
      say: 'Take your umbrella, it\'s raining!' }
  ]
});
