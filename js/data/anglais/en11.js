/* Anglais — chapitre 11 : Décrire et comparer (adjectifs, comparatif, superlatif, le corps et la santé, can / should / must) */
APP.registerChapter({
  id: 'en11', subject: 'anglais', num: 11,
  title: 'Décrire et comparer', subtitle: 'adjectifs · bigger, the biggest · le corps, la santé · can, should, must',
  vocabSec: 'en11-s-vocab',
  sections: [
    {
      id: 'en11-s-adjectifs', title: 'Les adjectifs : où les placer ?',
      html: `
<p>Un <b>adjectif</b> est un mot qui décrit : rouge, grand, cher, fatigué… En anglais, deux règles très simples suffisent.</p>
<h3>Règle 1 : l'adjectif se place AVANT le nom</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">a red car</span></td><td>une voiture rouge</td></tr>
<tr><td><span class="say">a big house</span></td><td>une grande maison</td></tr>
<tr><td><span class="say">an interesting book</span></td><td>un livre intéressant</td></tr>
<tr><td><span class="say">a cheap hotel</span></td><td>un hôtel pas cher</td></tr></table>
<h3>Règle 2 : l'adjectif ne change jamais</h3>
<p>Pas de -s au pluriel, pas de féminin : <span class="say">two red cars</span> (deux voitures rouges), <span class="say">a young man</span> / <span class="say">a young woman</span> (un jeune homme / une jeune femme).</p>
<h3>Après le verbe to be</h3>
<p>L'adjectif peut aussi venir après <b>to be</b>, comme en français : <span class="say">The car is red.</span> — La voiture est rouge. <span class="say">The rooms are small.</span> — Les chambres sont petites.</p>
<p>Pour dire « très », on met <span class="say">very</span> devant l'adjectif : <span class="say">It's very expensive.</span> — C'est très cher.</p>
<h3>Deux adjectifs</h3>
<p>La taille se place avant la couleur : <span class="say">a big black dog</span> — un gros chien noir.</p>
<div class="callout key"><b>À retenir</b> adjectif + nom : <span class="say">a red car</span>. L'adjectif est invariable : <span class="say">two red cars</span>.</div>
<div class="callout warn"><b>Piège</b> Ne dis pas « a car red » ni « two reds cars » : seul le nom prend le -s.</div>`
    },
    {
      id: 'en11-s-vocab', title: 'Vocabulaire : couleurs, taille, qualités',
      html: `
<h3>Les couleurs</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">red</span></td><td>rouge</td></tr>
<tr><td><span class="say">blue</span></td><td>bleu</td></tr>
<tr><td><span class="say">green</span></td><td>vert</td></tr>
<tr><td><span class="say">yellow</span></td><td>jaune</td></tr>
<tr><td><span class="say">black</span></td><td>noir</td></tr>
<tr><td><span class="say">white</span></td><td>blanc</td></tr>
<tr><td><span class="say">grey</span></td><td>gris</td></tr>
<tr><td><span class="say">brown</span></td><td>marron, brun</td></tr>
<tr><td><span class="say">pink</span> · <span class="say">orange</span></td><td>rose · orange</td></tr></table>
<h3>La taille</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">big</span></td><td>grand, gros</td></tr>
<tr><td><span class="say">small</span></td><td>petit</td></tr>
<tr><td><span class="say">long</span></td><td>long</td></tr>
<tr><td><span class="say">short</span></td><td>court (et petit, pour une personne)</td></tr>
<tr><td><span class="say">tall</span></td><td>grand (pour une personne, un immeuble)</td></tr></table>
<h3>Les qualités : apprends-les par paires</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">cheap</span> ↔ <span class="say">expensive</span></td><td>pas cher ↔ cher</td></tr>
<tr><td><span class="say">easy</span> ↔ <span class="say">difficult</span></td><td>facile ↔ difficile</td></tr>
<tr><td><span class="say">new</span> ↔ <span class="say">old</span></td><td>nouveau, neuf ↔ vieux</td></tr>
<tr><td><span class="say">young</span> ↔ <span class="say">old</span></td><td>jeune ↔ âgé</td></tr>
<tr><td><span class="say">good</span> ↔ <span class="say">bad</span></td><td>bon ↔ mauvais</td></tr>
<tr><td><span class="say">fast</span> ↔ <span class="say">slow</span></td><td>rapide ↔ lent</td></tr>
<tr><td><span class="say">beautiful</span></td><td>beau, belle</td></tr>
<tr><td><span class="say">interesting</span></td><td>intéressant</td></tr>
<tr><td><span class="say">nice</span></td><td>sympa, agréable</td></tr></table>
<div class="callout key"><b>À retenir</b> « pas cher » se dit en un seul mot : <span class="say">cheap</span>. <span class="say">This hotel is cheap.</span> — Cet hôtel n'est pas cher.</div>
<div class="callout warn"><b>Piège</b> <span class="say">hair</span> (les cheveux) est au singulier : <span class="say">My hair is grey.</span> — Mes cheveux sont gris.</div>`
    },
    {
      id: 'en11-s-sentiments', title: 'Comment tu te sens ? (to be + adjectif)',
      html: `
<p>Pour dire comment on se sent, l'anglais utilise <b>to be</b> + un adjectif : <span class="say">I'm happy.</span> — Je suis content.</p>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">I'm happy.</span></td><td>Je suis heureux, content.</td></tr>
<tr><td><span class="say">I'm sad.</span></td><td>Je suis triste.</td></tr>
<tr><td><span class="say">I'm tired.</span></td><td>Je suis fatigué.</td></tr>
<tr><td><span class="say">I'm angry.</span></td><td>Je suis en colère.</td></tr></table>
<h3>Attention : j'ai faim = je suis affamé</h3>
<p>Là où le français dit « j'<b>ai</b> faim », l'anglais dit « je <b>suis</b> affamé » :</p>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">I'm hungry.</span></td><td>J'ai faim.</td></tr>
<tr><td><span class="say">I'm thirsty.</span></td><td>J'ai soif.</td></tr>
<tr><td><span class="say">I'm cold.</span></td><td>J'ai froid.</td></tr>
<tr><td><span class="say">I'm hot.</span></td><td>J'ai chaud.</td></tr>
<tr><td><span class="say">I'm afraid.</span></td><td>J'ai peur.</td></tr>
<tr><td><span class="say">I'm sixty years old.</span></td><td>J'ai soixante ans. (tu l'as déjà vu !)</td></tr></table>
<p>Question et réponse courte : <span class="say">Are you hungry?</span> — <span class="say">Yes, I am.</span> / <span class="say">No, I'm not.</span></p>
<div class="callout key"><b>À retenir</b> J'ai faim, soif, froid, chaud, peur = <b>I'm</b> hungry, thirsty, cold, hot, afraid.</div>
<div class="callout warn"><b>Piège</b> « I have hungry » est faux. Et « il fait froid » (le temps) se dit <span class="say">It's cold.</span> ; « j'ai froid » se dit <span class="say">I'm cold.</span></div>`
    },
    {
      id: 'en11-s-comparatif', title: 'Comparer : plus … que, aussi … que',
      html: `
<p>Pour comparer deux choses (« plus … que »), il y a deux méthodes, selon la <b>longueur</b> de l'adjectif. Le « que » de la comparaison se dit <span class="say">than</span>.</p>
<h3>1. Adjectif court : -er + than</h3>
<p>Adjectif court = une seule syllabe (cheap, old, fast…), ou deux syllabes terminées par -y (easy, happy).</p>
<table><tr><th>Adjectif</th><th>Comparatif</th><th>Exemple</th></tr>
<tr><td><span class="say">cheap</span></td><td><span class="say">cheaper</span></td><td><span class="say">The bus is cheaper than the train.</span> — Le bus est moins cher que le train.</td></tr>
<tr><td><span class="say">old</span></td><td><span class="say">older</span></td><td><span class="say">My brother is older than me.</span> — Mon frère est plus âgé que moi.</td></tr>
<tr><td><span class="say">fast</span></td><td><span class="say">faster</span></td><td><span class="say">The train is faster than the bus.</span> — Le train est plus rapide que le bus.</td></tr></table>
<h3>Les petites règles d'orthographe</h3>
<ul>
<li>Finit par <b>e</b> : on ajoute seulement <b>-r</b> : <span class="say">nice</span> → <span class="say">nicer</span>.</li>
<li>Finit par une voyelle + une consonne : on <b>double</b> la consonne : <span class="say">big</span> → <span class="say">bigger</span>, <span class="say">hot</span> → <span class="say">hotter</span>, <span class="say">sad</span> → <span class="say">sadder</span>.</li>
<li>Finit par une consonne + <b>y</b> : le y devient <b>ier</b> : <span class="say">easy</span> → <span class="say">easier</span>, <span class="say">happy</span> → <span class="say">happier</span>.</li>
</ul>
<h3>2. Adjectif long : more … than</h3>
<p>Adjectif long = deux syllabes ou plus (sauf en -y). On met <span class="say">more</span> (plus) devant : <span class="say">more expensive</span>, <span class="say">more beautiful</span>, <span class="say">more difficult</span>, <span class="say">more interesting</span>.</p>
<p><span class="say">This hotel is more expensive than the other one.</span> — Cet hôtel est plus cher que l'autre.<br><span class="say">This book is more interesting than the film.</span> — Ce livre est plus intéressant que le film.</p>
<h3>3. Les irréguliers (à connaître par cœur)</h3>
<table><tr><th>Adjectif</th><th>Comparatif</th></tr>
<tr><td><span class="say">good</span> (bon)</td><td><span class="say">better</span> (meilleur)</td></tr>
<tr><td><span class="say">bad</span> (mauvais)</td><td><span class="say">worse</span> (pire)</td></tr>
<tr><td><span class="say">far</span> (loin)</td><td><span class="say">further</span> (plus loin) — on dit aussi <span class="say">farther</span></td></tr></table>
<p><span class="say">Your English is better than my English.</span> — Ton anglais est meilleur que le mien.</p>
<h3>4. Aussi … que : as … as</h3>
<p><span class="say">My car is as big as your car.</span> — Ma voiture est aussi grande que ta voiture.<br><span class="say">She is as tall as her mother.</span> — Elle est aussi grande que sa mère.</p>
<p>À la forme négative, cela veut dire « moins … que » : <span class="say">The bus is not as fast as the train.</span> — Le bus n'est pas aussi rapide que le train (il est moins rapide).</p>
<div class="callout key"><b>À retenir</b> court : <b>-er than</b> (cheaper than) · long : <b>more … than</b> (more expensive than) · good → <b>better</b>, bad → <b>worse</b>, far → <b>further</b> · égalité : <b>as … as</b>.</div>
<div class="callout warn"><b>Pièges</b> Jamais les deux ensemble : pas « more cheaper ». « Moins cher » se dit simplement <span class="say">cheaper</span>. Et « que » se dit <span class="say">than</span> (pas « that », ni « then » qui veut dire « ensuite »).</div>`
    },
    {
      id: 'en11-s-superlatif', title: 'Le superlatif : le plus …',
      html: `
<p>Pour dire « le plus … » (le plus grand, le plus cher), on met toujours <b>the</b> devant.</p>
<h3>Adjectif court : the + -est</h3>
<table><tr><th>Adjectif</th><th>Superlatif</th></tr>
<tr><td><span class="say">cheap</span></td><td><span class="say">the cheapest</span> (le moins cher)</td></tr>
<tr><td><span class="say">old</span></td><td><span class="say">the oldest</span> (le plus vieux)</td></tr>
<tr><td><span class="say">big</span></td><td><span class="say">the biggest</span> (le plus grand)</td></tr>
<tr><td><span class="say">easy</span></td><td><span class="say">the easiest</span> (le plus facile)</td></tr>
<tr><td><span class="say">near</span></td><td><span class="say">the nearest</span> (le plus proche)</td></tr></table>
<p>Mêmes règles d'orthographe qu'au comparatif : <span class="say">nice</span> → <span class="say">the nicest</span>, <span class="say">big</span> → <span class="say">the biggest</span>, <span class="say">easy</span> → <span class="say">the easiest</span>.</p>
<h3>Adjectif long : the most …</h3>
<p><span class="say">the most expensive</span> (le plus cher) · <span class="say">the most beautiful</span> (le plus beau) · <span class="say">the most interesting</span> (le plus intéressant)</p>
<p><span class="say">It's the most beautiful city in the world.</span> — C'est la plus belle ville du monde.</p>
<h3>Les irréguliers</h3>
<table><tr><th>Adjectif</th><th>Comparatif</th><th>Superlatif</th></tr>
<tr><td><span class="say">good</span></td><td><span class="say">better</span></td><td><span class="say">the best</span> (le meilleur)</td></tr>
<tr><td><span class="say">bad</span></td><td><span class="say">worse</span></td><td><span class="say">the worst</span> (le pire)</td></tr>
<tr><td><span class="say">far</span></td><td><span class="say">further</span></td><td><span class="say">the furthest</span> (le plus loin)</td></tr></table>
<p><span class="say">It's the best restaurant in town.</span> — C'est le meilleur restaurant de la ville.<br><span class="say">Where is the nearest pharmacy?</span> — Où est la pharmacie la plus proche ?</p>
<div class="callout key"><b>À retenir</b> <b>the</b> + adjectif court + <b>-est</b> · <b>the most</b> + adjectif long · <b>the best</b>, <b>the worst</b>.</div>
<div class="callout warn"><b>Piège</b> Après un superlatif, « de » + lieu se dit <b>in</b> : <span class="say">the biggest city in France</span> (la plus grande ville de France), pas « of France ».</div>`
    },
    {
      id: 'en11-s-modaux', title: 'Pouvoir et devoir : can, should, must',
      html: `
<p><span class="say">can</span>, <span class="say">should</span> et <span class="say">must</span> sont des petits verbes spéciaux. Ils fonctionnent tous de la même façon :</p>
<ul>
<li>ils ne changent jamais : pas de -s (<span class="say">she can</span>) ;</li>
<li>ils sont suivis de la <b>base verbale sans « to »</b> : <span class="say">I can swim.</span> ;</li>
<li>question : on les place devant le sujet (<span class="say">Can you…?</span>) ; négation : on ajoute <b>not</b> (<span class="say">can't</span>, <span class="say">shouldn't</span>, <span class="say">mustn't</span>). Jamais de do / does.</li>
</ul>
<h3>can / can't : pouvoir, savoir faire</h3>
<table><tr><th>Sens</th><th>Exemple</th></tr>
<tr><td>Capacité (savoir faire)</td><td><span class="say">I can swim.</span> — Je sais nager.<br><span class="say">She can't drive.</span> — Elle ne sait pas conduire.</td></tr>
<tr><td>Permission (avoir le droit)</td><td><span class="say">Can I sit here?</span> — Je peux m'asseoir ici ?<br><span class="say">You can't park here.</span> — Vous ne pouvez pas vous garer ici.</td></tr>
<tr><td>Demande polie</td><td><span class="say">Can you help me, please?</span> — Pouvez-vous m'aider, s'il vous plaît ?</td></tr></table>
<p><span class="say">can't</span> (= <span class="say">cannot</span>) se prononce « kânnt » en anglais britannique.</p>
<h3>should : un conseil (tu devrais)</h3>
<p><span class="say">You should rest.</span> — Tu devrais te reposer.<br><span class="say">You shouldn't eat so much.</span> — Tu ne devrais pas manger autant.<br><span class="say">Should I call a doctor?</span> — Est-ce que je devrais appeler un médecin ?</p>
<h3>must : une obligation (tu dois)</h3>
<p><span class="say">You must take this medicine.</span> — Vous devez prendre ce médicament.<br><span class="say">I must go now.</span> — Je dois partir maintenant.</p>
<p><span class="say">mustn't</span> exprime une <b>interdiction</b> : <span class="say">You mustn't smoke here.</span> — Il est interdit de fumer ici.</p>
<div class="callout key"><b>À retenir</b> <b>can</b> = pouvoir, savoir · <b>should</b> = devrais (conseil) · <b>must</b> = dois (obligation) — toujours + base verbale, sans to.</div>
<div class="callout warn"><b>Pièges</b> Pas de to : <span class="say">I must go</span> (pas « I must to go »). Pas de -s : <span class="say">he can</span> (pas « he cans »). Pas de do : <span class="say">Can you swim?</span> (pas « Do you can swim? »). Et « je sais nager » = <span class="say">I can swim</span>, pas « I know swim ».</div>
<div class="callout tip"><b>À savoir</b> On entend aussi <span class="say">have to</span> pour une obligation : <span class="say">I have to work tomorrow.</span> — Je dois travailler demain.</div>`
    },
    {
      id: 'en11-s-sante', title: 'Le corps et la santé',
      html: `
<h3>Le corps</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">the head</span></td><td>la tête</td></tr>
<tr><td><span class="say">an arm</span></td><td>un bras</td></tr>
<tr><td><span class="say">a hand</span></td><td>une main</td></tr>
<tr><td><span class="say">a leg</span></td><td>une jambe</td></tr>
<tr><td><span class="say">a foot</span> · <span class="say">two feet</span></td><td>un pied · deux pieds</td></tr>
<tr><td><span class="say">the back</span></td><td>le dos</td></tr>
<tr><td><span class="say">the stomach</span></td><td>le ventre</td></tr>
<tr><td><span class="say">a tooth</span> · <span class="say">two teeth</span></td><td>une dent · deux dents</td></tr>
<tr><td><span class="say">an eye</span> · <span class="say">two eyes</span></td><td>un œil · les yeux</td></tr>
<tr><td><span class="say">the throat</span></td><td>la gorge</td></tr></table>
<div class="callout warn"><b>Piège</b> Avec les parties du corps, on dit <b>my, your, his, her…</b> et non « the » : <span class="say">I wash my hands.</span> — Je me lave les mains.</div>
<h3>Dire où on a mal</h3>
<ul>
<li><b>partie du corps + hurts</b> : <span class="say">My back hurts.</span> — J'ai mal au dos. Au pluriel, pas de -s : <span class="say">My feet hurt.</span> — J'ai mal aux pieds.</li>
<li><b>I have a … + ache</b> (la douleur, se prononce « éïk ») : <span class="say">I have a headache.</span> — J'ai mal à la tête. <span class="say">I have a stomach ache.</span> — J'ai mal au ventre. <span class="say">I have toothache.</span> — J'ai mal aux dents.</li>
</ul>
<p>Et aussi : <span class="say">I have a sore throat.</span> — J'ai mal à la gorge. <span class="say">I have a temperature.</span> — J'ai de la fièvre. <span class="say">I'm ill.</span> — Je suis malade. <span class="say">I don't feel well.</span> — Je ne me sens pas bien.</p>
<h3>Chez le médecin</h3>
<ul>
<li><span class="say">I'd like an appointment, please.</span> — Je voudrais un rendez-vous, s'il vous plaît.</li>
<li><span class="say">What's the matter?</span> — Qu'est-ce qui ne va pas ?</li>
<li><span class="say">Where does it hurt?</span> — Où avez-vous mal ?</li>
<li><span class="say">It hurts here.</span> — J'ai mal ici.</li>
<li><span class="say">You should rest and drink a lot of water.</span> — Vous devriez vous reposer et boire beaucoup d'eau.</li>
</ul>
<h3>À la pharmacie</h3>
<ul>
<li><span class="say">Do you have something for a headache?</span> — Avez-vous quelque chose contre le mal de tête ?</li>
<li><span class="say">Take one tablet three times a day.</span> — Prenez un comprimé trois fois par jour.</li>
<li><span class="say">You must take it after meals.</span> — Vous devez le prendre après les repas.</li>
</ul>
<div class="callout key"><b>À retenir</b> J'ai mal à… = <b>My … hurts</b> ou <b>I have a …ache</b>. Pluriels irréguliers : <span class="say">tooth</span> → <span class="say">teeth</span>, <span class="say">foot</span> → <span class="say">feet</span>.</div>
<div class="callout tip"><b>Au Royaume-Uni</b> La pharmacie s'appelle souvent <span class="say">the chemist's</span>. En cas d'urgence, on appelle le 999 (le 112 fonctionne aussi).</div>`
    },
    {
      id: 'en11-s-pieges', title: 'Les pièges des francophones',
      html: `
<ul>
<li><b>Place de l'adjectif</b> : <span class="say">a red car</span>, pas « a car red ».</li>
<li><b>Pas de -s à l'adjectif</b> : <span class="say">two big houses</span>, pas « two bigs houses ».</li>
<li><b>Avoir faim, soif, froid</b> : <span class="say">I'm hungry</span>, pas « I have hungry ».</li>
<li><b>more + -er</b> : <span class="say">cheaper</span> ou <span class="say">more expensive</span>, mais jamais « more cheaper ».</li>
<li><b>than, pas that</b> : <span class="say">She is older than me.</span> — Elle est plus âgée que moi.</li>
<li><b>gooder, badder</b> n'existent pas : <span class="say">better</span>, <span class="say">worse</span>, <span class="say">the best</span>, <span class="say">the worst</span>.</li>
<li><b>Oublier the au superlatif</b> : <span class="say">the biggest</span>, <span class="say">the most expensive</span>.</li>
<li><b>to après can, should, must</b> : <span class="say">I can swim</span>, <span class="say">you should rest</span>, <span class="say">you must go</span>.</li>
<li><b>Savoir faire</b> = <span class="say">can</span> : <span class="say">I can swim</span> (je sais nager), pas « I know swim ».</li>
<li><b>J'ai mal à la tête</b> : <span class="say">I have a headache</span> ou <span class="say">My head hurts</span>.</li>
<li><b>Les parties du corps</b> : <span class="say">My back hurts</span> (avec my), pas « the back hurts ».</li>
</ul>
<div class="callout key"><b>À retenir</b> adjectif avant le nom, invariable · -er / more … than · the -est / the most · can, should, must + base sans to.</div>`
    }
  ],
  words: [
    // Les couleurs
    { en: 'red', fr: 'rouge', pos: 'adj', cat: 'Les couleurs', ex: 'I have a red car.', exFr: 'J\'ai une voiture rouge.', level: 1 },
    { en: 'blue', fr: 'bleu', pos: 'adj', cat: 'Les couleurs', ex: 'The sky is blue.', exFr: 'Le ciel est bleu.', level: 1 },
    { en: 'green', fr: 'vert', pos: 'adj', cat: 'Les couleurs', ex: 'She has green eyes.', exFr: 'Elle a les yeux verts.', level: 1 },
    { en: 'yellow', fr: 'jaune', pos: 'adj', cat: 'Les couleurs', ex: 'The taxis in New York are yellow.', exFr: 'Les taxis de New York sont jaunes.', level: 1 },
    { en: 'black', fr: 'noir', pos: 'adj', cat: 'Les couleurs', ex: 'I drink my coffee black.', exFr: 'Je bois mon café noir.', level: 1 },
    { en: 'white', fr: 'blanc', pos: 'adj', cat: 'Les couleurs', ex: 'The walls are white.', exFr: 'Les murs sont blancs.', level: 1 },
    { en: 'grey', fr: 'gris', pos: 'adj', cat: 'Les couleurs', alt: ['gray'], ex: 'My hair is grey.', exFr: 'Mes cheveux sont gris.', level: 1, note: 'Orthographe américaine : gray. Attention : hair (les cheveux) est au singulier.' },
    { en: 'brown', fr: 'marron, brun', pos: 'adj', cat: 'Les couleurs', ex: 'He has brown eyes.', exFr: 'Il a les yeux marron.', level: 1 },
    // La taille
    { en: 'big', fr: 'grand, gros', pos: 'adj', cat: 'La taille', ex: 'They have a big house.', exFr: 'Ils ont une grande maison.', level: 1, note: 'Comparatif : bigger (le g est doublé) ; superlatif : the biggest.' },
    { en: 'small', fr: 'petit', pos: 'adj', cat: 'La taille', alt: ['little'], ex: 'The room is very small.', exFr: 'La chambre est très petite.', level: 1, note: 'Pour la taille d\'une personne : short (petit), tall (grand).' },
    { en: 'long', fr: 'long', pos: 'adj', cat: 'La taille', ex: 'It\'s a long trip.', exFr: 'C\'est un long voyage.', level: 1 },
    { en: 'short', fr: 'court', pos: 'adj', cat: 'La taille', ex: 'The film is short.', exFr: 'Le film est court.', level: 1, note: 'short veut aussi dire « petit » pour une personne : He is short. Le contraire : tall (grand).' },
    // Les qualités
    { en: 'cheap', fr: 'bon marché, pas cher', pos: 'adj', cat: 'Les qualités', ex: 'This hotel is cheap.', exFr: 'Cet hôtel n\'est pas cher.', level: 1, note: '« moins cher » = cheaper.' },
    { en: 'expensive', fr: 'cher', pos: 'adj', cat: 'Les qualités', ex: 'This restaurant is expensive.', exFr: 'Ce restaurant est cher.', level: 1, note: 'Adjectif long : more expensive (plus cher), the most expensive (le plus cher).' },
    { en: 'easy', fr: 'facile', pos: 'adj', cat: 'Les qualités', ex: 'English is easy!', exFr: 'L\'anglais, c\'est facile !', level: 1, note: 'Comparatif : easier (le y devient i).' },
    { en: 'difficult', fr: 'difficile', pos: 'adj', cat: 'Les qualités', alt: ['hard'], ex: 'This exercise is difficult.', exFr: 'Cet exercice est difficile.', level: 1 },
    { en: 'new', fr: 'nouveau, neuf', pos: 'adj', cat: 'Les qualités', ex: 'I have a new phone.', exFr: 'J\'ai un nouveau téléphone.', level: 1 },
    { en: 'old', fr: 'vieux, âgé', pos: 'adj', cat: 'Les qualités', ex: 'This church is very old.', exFr: 'Cette église est très vieille.', level: 1, note: 'Aussi pour l\'âge : How old are you? (Quel âge as-tu ?)' },
    { en: 'young', fr: 'jeune', pos: 'adj', cat: 'Les qualités', ex: 'My grandson is very young.', exFr: 'Mon petit-fils est très jeune.', level: 1 },
    { en: 'beautiful', fr: 'beau, belle', pos: 'adj', cat: 'Les qualités', ex: 'Edinburgh is a beautiful city.', exFr: 'Édimbourg est une belle ville.', level: 1 },
    { en: 'interesting', fr: 'intéressant', pos: 'adj', cat: 'Les qualités', ex: 'This book is very interesting.', exFr: 'Ce livre est très intéressant.', level: 1 },
    { en: 'good', fr: 'bon, bien', pos: 'adj', cat: 'Les qualités', ex: 'This cake is very good.', exFr: 'Ce gâteau est très bon.', level: 1, note: 'Irrégulier : better (meilleur), the best (le meilleur).' },
    { en: 'bad', fr: 'mauvais', pos: 'adj', cat: 'Les qualités', ex: 'The weather is bad today.', exFr: 'Il fait mauvais aujourd\'hui.', level: 1, note: 'Irrégulier : worse (pire), the worst (le pire).' },
    { en: 'nice', fr: 'sympa, agréable', pos: 'adj', cat: 'Les qualités', ex: 'Your neighbours are very nice.', exFr: 'Tes voisins sont très sympas.', level: 1 },
    { en: 'fast', fr: 'rapide', pos: 'adj', cat: 'Les qualités', alt: ['quick'], ex: 'The train is fast.', exFr: 'Le train est rapide.', level: 1 },
    { en: 'slow', fr: 'lent', pos: 'adj', cat: 'Les qualités', ex: 'The bus is very slow.', exFr: 'Le bus est très lent.', level: 1 },
    // Sentiments et sensations
    { en: 'happy', fr: 'heureux, content', pos: 'adj', cat: 'Sentiments et sensations', sec: 'en11-s-sentiments', ex: 'I\'m very happy to see you.', exFr: 'Je suis très content de te voir.', level: 1 },
    { en: 'sad', fr: 'triste', pos: 'adj', cat: 'Sentiments et sensations', sec: 'en11-s-sentiments', ex: 'Why are you sad?', exFr: 'Pourquoi es-tu triste ?', level: 1 },
    { en: 'tired', fr: 'fatigué', pos: 'adj', cat: 'Sentiments et sensations', sec: 'en11-s-sentiments', ex: 'I\'m tired after the trip.', exFr: 'Je suis fatigué après le voyage.', level: 1 },
    { en: 'angry', fr: 'en colère', pos: 'adj', cat: 'Sentiments et sensations', sec: 'en11-s-sentiments', ex: 'My wife is angry with me.', exFr: 'Ma femme est en colère contre moi.', level: 1, note: 'en colère contre quelqu\'un = angry with someone.' },
    { en: 'be hungry', fr: 'avoir faim', pos: 'v', cat: 'Sentiments et sensations', sec: 'en11-s-sentiments', alt: ['hungry'], ex: 'Are you hungry?', exFr: 'Tu as faim ?', level: 1, note: 'En anglais, on « est » affamé : I **am** hungry (jamais « I have hungry »).' },
    { en: 'be thirsty', fr: 'avoir soif', pos: 'v', cat: 'Sentiments et sensations', sec: 'en11-s-sentiments', alt: ['thirsty'], ex: 'I\'m very thirsty.', exFr: 'J\'ai très soif.', level: 1, note: 'Avec to be : I **am** thirsty.' },
    { en: 'be cold', fr: 'avoir froid', pos: 'v', cat: 'Sentiments et sensations', sec: 'en11-s-sentiments', alt: ['cold'], ex: 'I\'m cold. Close the window, please.', exFr: 'J\'ai froid. Ferme la fenêtre, s\'il te plaît.', level: 1, note: 'Le contraire : be hot (avoir chaud). « Il fait froid » = it\'s cold.' },
    // Le corps
    { en: 'head', fr: 'la tête', pos: 'n', cat: 'Le corps', sec: 'en11-s-sante', ex: 'Put your hat on your head.', exFr: 'Mets ton chapeau sur ta tête.', level: 1 },
    { en: 'arm', fr: 'le bras', pos: 'n', cat: 'Le corps', sec: 'en11-s-sante', ex: 'She broke her arm.', exFr: 'Elle s\'est cassé le bras.', level: 1, note: 'Avec le corps, on dit my, your, her… : her arm (son bras), pas « the arm ».' },
    { en: 'leg', fr: 'la jambe', pos: 'n', cat: 'Le corps', sec: 'en11-s-sante', ex: 'My legs are tired.', exFr: 'J\'ai les jambes fatiguées.', level: 1 },
    { en: 'back', fr: 'le dos', pos: 'n', cat: 'Le corps', sec: 'en11-s-sante', ex: 'I sleep on my back.', exFr: 'Je dors sur le dos.', level: 1, note: 'J\'ai mal au dos = My back hurts.' },
    { en: 'stomach', fr: 'le ventre', pos: 'n', cat: 'Le corps', sec: 'en11-s-sante', alt: ['tummy'], ex: 'I have a pain in my stomach.', exFr: 'J\'ai mal au ventre.', level: 1, note: 'Prononciation : « steumeuk » (ch = k). stomach veut aussi dire l\'estomac.' },
    { en: 'tooth', fr: 'la dent', pos: 'n', cat: 'Le corps', sec: 'en11-s-sante', ex: 'My tooth hurts.', exFr: 'J\'ai mal à une dent.', level: 1, note: 'Pluriel irrégulier : one tooth, two **teeth**.' },
    { en: 'hand', fr: 'la main', pos: 'n', cat: 'Le corps', sec: 'en11-s-sante', ex: 'Wash your hands.', exFr: 'Lave-toi les mains.', level: 1 },
    { en: 'foot', fr: 'le pied', pos: 'n', cat: 'Le corps', sec: 'en11-s-sante', ex: 'My feet hurt.', exFr: 'J\'ai mal aux pieds.', level: 1, note: 'Pluriel irrégulier : one foot, two **feet**.' },
    { en: 'eye', fr: 'l\'œil', pos: 'n', cat: 'Le corps', sec: 'en11-s-sante', ex: 'She has blue eyes.', exFr: 'Elle a les yeux bleus.', level: 1, note: 'Pluriel : eyes (les yeux).' },
    { en: 'throat', fr: 'la gorge', pos: 'n', cat: 'Le corps', sec: 'en11-s-sante', ex: 'My throat is red.', exFr: 'J\'ai la gorge rouge.', level: 2, note: 'J\'ai mal à la gorge = I have a sore throat. Le th : la langue entre les dents.' },
    // La santé
    { en: 'headache', fr: 'le mal de tête', pos: 'n', cat: 'La santé', sec: 'en11-s-sante', ex: 'I have a headache.', exFr: 'J\'ai mal à la tête.', level: 1, note: 'Même modèle : stomach ache (mal au ventre), toothache (mal aux dents), backache (mal au dos).' },
    { en: 'hurt', fr: 'faire mal', pos: 'v', cat: 'La santé', sec: 'en11-s-sante', ex: 'My leg hurts.', exFr: 'J\'ai mal à la jambe.', level: 1, note: 'Verbe irrégulier : hurt, hurt, hurt. My back hurts = j\'ai mal au dos.' },
    { en: 'ill', fr: 'malade', pos: 'adj', cat: 'La santé', sec: 'en11-s-sante', alt: ['sick'], ex: 'I\'m ill. I\'m going to stay in bed.', exFr: 'Je suis malade. Je vais rester au lit.', level: 1, note: 'On dit aussi sick (surtout américain).' },
    { en: 'doctor', fr: 'le médecin', pos: 'n', cat: 'La santé', sec: 'en11-s-sante', ex: 'You should see a doctor.', exFr: 'Tu devrais voir un médecin.', level: 1, note: 'Abrégé : Dr. Aller chez le médecin = go to the doctor\'s.' },
    { en: 'pharmacy', fr: 'la pharmacie', pos: 'n', cat: 'La santé', sec: 'en11-s-sante', alt: ['chemist\'s', 'chemist', 'drugstore'], ex: 'Is there a pharmacy near here?', exFr: 'Y a-t-il une pharmacie près d\'ici ?', level: 1, note: 'Au Royaume-Uni, on dit souvent **the chemist\'s** ; aux États-Unis, **the drugstore**.' },
    { en: 'medicine', fr: 'le médicament', pos: 'n', cat: 'La santé', sec: 'en11-s-sante', ex: 'Take this medicine after dinner.', exFr: 'Prends ce médicament après le dîner.', level: 1, note: 'medicine veut aussi dire « la médecine ». Un comprimé = a tablet.' },
    { en: 'fever', fr: 'la fièvre', pos: 'n', cat: 'La santé', sec: 'en11-s-sante', alt: ['temperature'], ex: 'The child has a fever.', exFr: 'L\'enfant a de la fièvre.', level: 2, note: 'Au Royaume-Uni, on dit souvent : I have a temperature (j\'ai de la fièvre).' }
  ],
  phrases: [
    { en: 'It\'s a big red car.', fr: 'C\'est une grosse voiture rouge.', cat: 'Décrire', sec: 'en11-s-adjectifs', note: 'La taille avant la couleur, les deux avant le nom.' },
    { en: 'The room is very nice.', fr: 'La chambre est très agréable.', cat: 'Décrire', sec: 'en11-s-adjectifs' },
    { en: 'I\'m hungry.', fr: 'J\'ai faim.', cat: 'Comment ça va ?', sec: 'en11-s-sentiments', note: 'avoir faim = to be hungry.' },
    { en: 'Are you thirsty?', fr: 'Tu as soif ?', cat: 'Comment ça va ?', sec: 'en11-s-sentiments' },
    { en: 'I\'m very tired today.', fr: 'Je suis très fatigué aujourd\'hui.', cat: 'Comment ça va ?', sec: 'en11-s-sentiments' },
    { en: 'The train is faster than the bus.', fr: 'Le train est plus rapide que le bus.', alt: ['The train is quicker than the bus.'], cat: 'Comparer', sec: 'en11-s-comparatif' },
    { en: 'This shop is cheaper.', fr: 'Ce magasin est moins cher.', cat: 'Comparer', sec: 'en11-s-comparatif', note: '« moins cher » = cheaper.' },
    { en: 'This hotel is more expensive.', fr: 'Cet hôtel est plus cher.', cat: 'Comparer', sec: 'en11-s-comparatif' },
    { en: 'My brother is older than me.', fr: 'Mon frère est plus âgé que moi.', alt: ['My brother is older than I am.'], cat: 'Comparer', sec: 'en11-s-comparatif' },
    { en: 'She is as tall as her mother.', fr: 'Elle est aussi grande que sa mère.', cat: 'Comparer', sec: 'en11-s-comparatif' },
    { en: 'It\'s the best restaurant in town.', fr: 'C\'est le meilleur restaurant de la ville.', alt: ['It\'s the best restaurant in the town.', 'It\'s the best restaurant in the city.'], cat: 'Comparer', sec: 'en11-s-superlatif' },
    { en: 'This is the most beautiful city.', fr: 'C\'est la plus belle ville.', alt: ['It\'s the most beautiful city.'], cat: 'Comparer', sec: 'en11-s-superlatif' },
    { en: 'Where is the nearest pharmacy?', fr: 'Où est la pharmacie la plus proche ?', alt: ['Where is the nearest chemist\'s?', 'Where is the nearest chemist?'], cat: 'À la pharmacie', sec: 'en11-s-superlatif' },
    { en: 'I have a headache.', fr: 'J\'ai mal à la tête.', alt: ['I\'ve got a headache.', 'My head hurts.'], cat: 'Chez le médecin', sec: 'en11-s-sante' },
    { en: 'My back hurts.', fr: 'J\'ai mal au dos.', alt: ['I have backache.', 'I have a backache.', 'I\'ve got backache.', 'I\'ve got a backache.'], cat: 'Chez le médecin', sec: 'en11-s-sante' },
    { en: 'I have a sore throat.', fr: 'J\'ai mal à la gorge.', alt: ['I\'ve got a sore throat.', 'My throat hurts.'], cat: 'Chez le médecin', sec: 'en11-s-sante' },
    { en: 'I don\'t feel well.', fr: 'Je ne me sens pas bien.', alt: ['I\'m not feeling well.', 'I don\'t feel very well.'], cat: 'Chez le médecin', sec: 'en11-s-sante' },
    { en: 'I\'d like an appointment, please.', fr: 'Je voudrais un rendez-vous, s\'il vous plaît.', alt: ['I would like to make an appointment, please.'], cat: 'Chez le médecin', sec: 'en11-s-sante' },
    { en: 'Do you have something for a headache?', fr: 'Avez-vous quelque chose contre le mal de tête ?', alt: ['Have you got something for a headache?', 'Do you have anything for a headache?'], cat: 'À la pharmacie', sec: 'en11-s-sante' },
    { en: 'Take one tablet three times a day.', fr: 'Prenez un comprimé trois fois par jour.', cat: 'À la pharmacie', sec: 'en11-s-sante' },
    { en: 'Can you help me, please?', fr: 'Pouvez-vous m\'aider, s\'il vous plaît ?', alt: ['Could you help me, please?'], cat: 'Pouvoir, devoir', sec: 'en11-s-modaux' },
    { en: 'I can\'t swim.', fr: 'Je ne sais pas nager.', cat: 'Pouvoir, devoir', sec: 'en11-s-modaux', note: 'Savoir faire quelque chose = can : I can swim = je sais nager.' },
    { en: 'Can I sit here?', fr: 'Je peux m\'asseoir ici ?', alt: ['May I sit here?'], cat: 'Pouvoir, devoir', sec: 'en11-s-modaux' },
    { en: 'You should rest.', fr: 'Tu devrais te reposer.', alt: ['You should get some rest.'], cat: 'Pouvoir, devoir', sec: 'en11-s-modaux', note: 'should = un conseil.' },
    { en: 'You must take this medicine.', fr: 'Vous devez prendre ce médicament.', alt: ['You have to take this medicine.'], cat: 'Pouvoir, devoir', sec: 'en11-s-modaux', note: 'must = une obligation.' }
  ],
  quiz: [
    { id: 'en11-q-01', q: 'Comment dit-on « une voiture rouge » ?', choices: ['a red car', 'a car red', 'a reds car', 'a car reds'], answer: 0, topic: 'Place de l\'adjectif', sec: 'en11-s-adjectifs',
      why: { 1: 'En anglais, l\'adjectif se place **avant** le nom.', 2: 'L\'adjectif ne prend jamais de -s.', 3: 'L\'adjectif se place avant le nom et ne prend jamais de -s.' },
      explain: 'L\'adjectif se place **avant** le nom : a **red** car (une voiture rouge).', say: 'a red car' },
    { id: 'en11-q-02', q: 'Complète : I have two ___ bikes. (bleus)', choices: ['blues', 'bleu', 'blue', 'blue\'s'], answer: 2, topic: 'Place de l\'adjectif', sec: 'en11-s-adjectifs',
      why: { 0: 'L\'adjectif anglais ne prend **jamais** de -s, même au pluriel.', 1: '« bleu » est le mot français.', 3: 'L\'apostrophe + s marque la possession, pas le pluriel.' },
      explain: 'L\'adjectif est **invariable** : two **blue** bikes (deux vélos bleus). Seul le nom prend le -s.', say: 'I have two blue bikes.' },
    { id: 'en11-q-03', q: 'Traduis « J\'ai faim » : I ___ hungry.', choices: ['have', 'am', 'do', 'has'], answer: 1, topic: 'Sentiments avec to be', sec: 'en11-s-sentiments',
      why: { 0: 'En anglais, on « est » affamé : I **am** hungry (pas have).', 2: '« do » ne s\'utilise pas devant un adjectif.', 3: '« has » va avec he, she, it ; et de toute façon il faut to be.' },
      explain: 'Avoir faim = **to be hungry**. → I **am** hungry. (J\'ai faim.) De même : I\'m thirsty (j\'ai soif), I\'m cold (j\'ai froid).', say: 'I\'m hungry.' },
    { id: 'en11-q-04', q: 'Complète : The train is ___ than the bus. (rapide)', choices: ['more fast', 'fastest', 'more faster', 'faster'], answer: 3, topic: 'Le comparatif', sec: 'en11-s-comparatif',
      why: { 0: 'fast est un adjectif court : on ajoute -er, pas more.', 1: '« fastest » est le superlatif (le plus rapide), avec the.', 2: 'Jamais more et -er ensemble : c\'est l\'un ou l\'autre.' },
      explain: 'Adjectif court : **-er + than**. → The train is **faster than** the bus. (Le train est plus rapide que le bus.)', say: 'The train is faster than the bus.' },
    { id: 'en11-q-05', q: 'Complète : This hotel is ___ than the other one. (cher)', choices: ['expensiver', 'most expensive', 'more expensive', 'expensive more'], answer: 2, topic: 'Le comparatif', sec: 'en11-s-comparatif',
      why: { 0: 'expensive est un adjectif long : on ne peut pas ajouter -er.', 1: '« most » sert au superlatif (le plus).', 3: 'more se place **avant** l\'adjectif.' },
      explain: 'Adjectif long : **more + adjectif + than**. → This hotel is **more expensive than** the other one. (Cet hôtel est plus cher que l\'autre.)', say: 'This hotel is more expensive than the other one.' },
    { id: 'en11-q-06', q: 'Quel est le comparatif de « big » ?', choices: ['biger', 'bigger', 'more big', 'bigest'], answer: 1, topic: 'Le comparatif', sec: 'en11-s-comparatif',
      why: { 0: 'Le g se double : bi**gg**er.', 2: 'big est court : -er, pas more.', 3: '« bigest » est mal écrit, et c\'est un superlatif (the biggest).' },
      explain: 'Voyelle + consonne à la fin : on **double** la consonne. big → **bigger**, hot → hotter. → My house is bigger. (Ma maison est plus grande.)', say: 'bigger' },
    { id: 'en11-q-07', q: 'Quel est le comparatif de « easy » ?', choices: ['easyer', 'more easy', 'easiest', 'easier'], answer: 3, topic: 'Le comparatif', sec: 'en11-s-comparatif',
      why: { 0: 'Le y devient i : eas**ier**.', 1: 'easy suit la règle des adjectifs courts : -er (avec y → i).', 2: '« easiest » est le superlatif (le plus facile).' },
      explain: 'Adjectif en consonne + **y** : y → **ier**. easy → **easier**, happy → happier. → English is easier than Chinese. (L\'anglais est plus facile que le chinois.)', say: 'easier' },
    { id: 'en11-q-08', q: 'Complète : Your English is ___ than my English. (bon → meilleur)', choices: ['better', 'gooder', 'more good', 'best'], answer: 0, topic: 'Le comparatif', sec: 'en11-s-comparatif',
      why: { 1: 'good est irrégulier : « gooder » n\'existe pas.', 2: 'good est irrégulier : on ne dit pas « more good ».', 3: '« best » est le superlatif (the best = le meilleur).' },
      explain: 'good → **better** (meilleur) → the best. → Your English is **better** than my English. (Ton anglais est meilleur que le mien.)', say: 'Your English is better than my English.' },
    { id: 'en11-q-09', q: 'Complète : This film is ___ than the book. (mauvais → pire)', choices: ['badder', 'more bad', 'worse', 'worst'], answer: 2, topic: 'Le comparatif', sec: 'en11-s-comparatif',
      why: { 0: 'bad est irrégulier : « badder » n\'existe pas.', 1: 'bad est irrégulier : on ne dit pas « more bad ».', 3: '« worst » est le superlatif (the worst = le pire).' },
      explain: 'bad → **worse** (pire) → the worst. → This film is **worse** than the book. (Ce film est pire que le livre.)', say: 'This film is worse than the book.' },
    { id: 'en11-q-10', q: 'Complète : She is older ___ her husband.', choices: ['that', 'than', 'as', 'then'], answer: 1, topic: 'Le comparatif', sec: 'en11-s-comparatif',
      why: { 0: '« that » ne sert pas à comparer : le « que » de la comparaison est **than**.', 2: '« as » s\'utilise dans as … as (aussi … que).', 3: '« then » veut dire « ensuite ». Attention à l\'orthographe : th**a**n.' },
      explain: 'Le « que » de la comparaison = **than**. → She is older **than** her husband. (Elle est plus âgée que son mari.)', say: 'She is older than her husband.' },
    { id: 'en11-q-11', q: 'Complète : My car is as big ___ your car.', choices: ['as', 'than', 'that', 'like'], answer: 0, topic: 'Le comparatif', sec: 'en11-s-comparatif',
      why: { 1: 'than va avec un comparatif (bigger than). Ici : as … **as**.', 2: '« that » ne sert pas à comparer.', 3: '« like » = comme, mais la structure est as … **as**.' },
      explain: 'Égalité : **as + adjectif + as**. → My car is **as big as** your car. (Ma voiture est aussi grande que ta voiture.)', say: 'My car is as big as your car.' },
    { id: 'en11-q-12', q: 'Complète : Paris is ___ city in France.', choices: ['the bigger', 'the most big', 'biggest', 'the biggest'], answer: 3, topic: 'Le superlatif', sec: 'en11-s-superlatif',
      why: { 0: '« bigger » est le comparatif (plus grand que). Le plus grand : the biggest.', 1: 'big est court : -est, pas most.', 2: 'Il faut **the** devant le superlatif.' },
      explain: 'Superlatif d\'un adjectif court : **the + -est**. → Paris is **the biggest** city in France. (Paris est la plus grande ville de France.) De France = **in** France.', say: 'Paris is the biggest city in France.' },
    { id: 'en11-q-13', q: 'Complète : It\'s ___ restaurant in town. (le meilleur)', choices: ['the better', 'the best', 'the goodest', 'the most good'], answer: 1, topic: 'Le superlatif', sec: 'en11-s-superlatif',
      why: { 0: '« better » est le comparatif (meilleur que…).', 2: 'good est irrégulier : « goodest » n\'existe pas.', 3: 'good est irrégulier : on ne dit pas « most good ».' },
      explain: 'good → better → **the best**. → It\'s **the best** restaurant in town. (C\'est le meilleur restaurant de la ville.)', say: 'It\'s the best restaurant in town.' },
    { id: 'en11-q-14', q: 'Complète : It\'s ___ city in the world. (la plus belle)', choices: ['the beautifulest', 'the more beautiful', 'the most beautiful', 'most beautiful'], answer: 2, topic: 'Le superlatif', sec: 'en11-s-superlatif',
      why: { 0: 'beautiful est long : on ne peut pas ajouter -est.', 1: '« more » sert au comparatif (plus belle que). Le superlatif : the **most**.', 3: 'Il faut **the** devant most.' },
      explain: 'Adjectif long : **the most + adjectif**. → It\'s **the most beautiful** city in the world. (C\'est la plus belle ville du monde.)', say: 'It\'s the most beautiful city in the world.' },
    { id: 'en11-q-15', q: 'Complète : The airport is ___ than the station. (loin → plus loin)', choices: ['further', 'farer', 'more far', 'the furthest'], answer: 0, topic: 'Le comparatif', sec: 'en11-s-comparatif',
      why: { 1: 'far est irrégulier : « farer » n\'existe pas.', 2: 'far est irrégulier : on ne dit pas « more far ».', 3: '« the furthest » est le superlatif (le plus loin de tous).' },
      explain: 'far → **further** (plus loin) → the furthest. → The airport is **further** than the station. (L\'aéroport est plus loin que la gare.) On dit aussi farther.', say: 'The airport is further than the station.' },
    { id: 'en11-q-16', q: 'Que veut dire « My back hurts » ?', choices: ['J\'ai mal au ventre.', 'J\'ai mal à la tête.', 'J\'ai mal au bras.', 'J\'ai mal au dos.'], answer: 3, topic: 'Le corps et la santé', sec: 'en11-s-sante',
      why: { 0: 'ventre = stomach.', 1: 'J\'ai mal à la tête = I have a headache.', 2: 'bras = arm.' },
      explain: '**back** = le dos ; **hurt** = faire mal. → My back hurts. (J\'ai mal au dos.) Mot à mot : « mon dos fait mal ».', say: 'My back hurts.' },
    { id: 'en11-q-17', q: 'Complète : I brush my ___ every morning. (les dents)', choices: ['tooths', 'teeth', 'teeths', 'toothes'], answer: 1, topic: 'Le corps et la santé', sec: 'en11-s-sante',
      why: { 0: 'tooth a un pluriel irrégulier : teeth.', 2: 'teeth est déjà un pluriel : pas de -s en plus.', 3: 'Pluriel irrégulier : one tooth, two teeth.' },
      explain: 'Pluriel irrégulier : one **tooth** → two **teeth** (comme foot → feet). → I brush my **teeth** every morning. (Je me brosse les dents tous les matins.)', say: 'I brush my teeth every morning.' },
    { id: 'en11-q-18', q: 'Complète : I can ___ English.', choices: ['speak', 'to speak', 'speaks', 'speaking'], answer: 0, topic: 'can / can\'t', sec: 'en11-s-modaux',
      why: { 1: 'Jamais de « to » après can.', 2: 'Pas de -s après can.', 3: 'Pas de -ing après can.' },
      explain: 'can + **base verbale** (sans to). → I can **speak** English. (Je sais parler anglais.)', say: 'I can speak English.' },
    { id: 'en11-q-19', q: 'Traduis « Elle ne sait pas nager » : She ___ swim.', choices: ['doesn\'t can', 'don\'t can', 'can\'t', 'not can'], answer: 2, topic: 'can / can\'t', sec: 'en11-s-modaux',
      why: { 0: 'Pas de do / does avec can : la négation est can\'t (cannot).', 1: 'Pas de do avec can.', 3: 'not se place après can : can not → **can\'t**.' },
      explain: 'Négation : **can\'t** (cannot). → She **can\'t** swim. (Elle ne sait pas nager.) can = pouvoir, savoir (faire).', say: 'She can\'t swim.' },
    { id: 'en11-q-20', q: 'Pour demander la permission : ___ I sit here?', choices: ['Am', 'Does', 'Have', 'Can'], answer: 3, topic: 'can / can\'t', sec: 'en11-s-modaux',
      why: { 0: '« Am I sit » est faux : am ne se met pas devant une base verbale.', 1: 'does va avec he, she, it, et ne sert pas à demander la permission.', 2: '« Have I sit » est faux.' },
      explain: 'Pour demander la permission : **Can I** + base ? → **Can** I sit here? (Je peux m\'asseoir ici ?)', say: 'Can I sit here?' },
    { id: 'en11-q-21', q: 'Un conseil : You ___ see a doctor. (Tu devrais…)', choices: ['should to', 'should', 'shoulds', 'are should'], answer: 1, topic: 'should / must', sec: 'en11-s-modaux',
      why: { 0: 'Jamais de « to » après should.', 2: 'should ne prend jamais de -s.', 3: 'Pas de to be devant should.' },
      explain: '**should** + base = un conseil (tu devrais). → You **should** see a doctor. (Tu devrais voir un médecin.)', say: 'You should see a doctor.' },
    { id: 'en11-q-22', q: 'Une obligation : You ___ take this medicine three times a day.', choices: ['must', 'must to', 'musts', 'are must'], answer: 0, topic: 'should / must', sec: 'en11-s-modaux',
      why: { 1: 'Jamais de « to » après must.', 2: 'must ne prend jamais de -s.', 3: 'Pas de to be devant must.' },
      explain: '**must** + base = une obligation (vous devez). → You **must** take this medicine three times a day. (Vous devez prendre ce médicament trois fois par jour.)', say: 'You must take this medicine three times a day.' },
    { id: 'en11-q-23', q: 'Écoute. Que dit la personne ?', listen: true, say: 'I have a sore throat.', choices: ['J\'ai mal aux dents.', 'J\'ai de la fièvre.', 'J\'ai mal à la gorge.', 'J\'ai mal à la tête.'], answer: 2, topic: 'Compréhension orale', sec: 'en11-s-sante',
      why: { 0: 'mal aux dents = toothache.', 1: 'de la fièvre = a temperature, a fever.', 3: 'mal à la tête = a headache.' },
      explain: '**a sore throat** = un mal de gorge. → I have a sore throat. (J\'ai mal à la gorge.)' },
    { id: 'en11-q-24', q: 'Écoute. Que dit la personne ?', listen: true, say: 'The blue bag is cheaper than the black one.', choices: ['Le sac bleu est moins cher que le noir.', 'Le sac noir est moins cher que le bleu.', 'Le sac bleu est plus cher que le noir.', 'Le sac bleu est aussi cher que le noir.'], answer: 0, topic: 'Compréhension orale', sec: 'en11-s-comparatif',
      why: { 1: 'C\'est le sac **bleu** (blue) qui est moins cher.', 2: 'cheaper = moins cher, pas plus cher.', 3: 'aussi cher que = as expensive as.' },
      explain: '**cheaper than** = moins cher que ; **the black one** = le noir (one remplace bag). → The blue bag is cheaper than the black one.' },
    { id: 'en11-q-25', q: 'Écoute. Que demande la personne ?', listen: true, say: 'Where is the nearest pharmacy?', choices: ['La pharmacie est-elle ouverte ?', 'Où est le médecin le plus proche ?', 'La pharmacie est-elle loin ?', 'Où est la pharmacie la plus proche ?'], answer: 3, topic: 'Compréhension orale', sec: 'en11-s-superlatif',
      why: { 0: 'ouverte = open.', 1: 'médecin = doctor ; ici on entend pharmacy.', 2: 'loin = far.' },
      explain: '**the nearest** = le plus proche (superlatif de near). → Where is the nearest pharmacy? (Où est la pharmacie la plus proche ?)' }
  ],
  exercises: [
    { id: 'en11-x-01', prompt: 'Traduis : une voiture rouge', answers: ['a red car'], topic: 'Place de l\'adjectif', sec: 'en11-s-adjectifs',
      hint: 'L\'adjectif se place avant le nom.',
      explain: 'Adjectif **avant** le nom : a **red car** (une voiture rouge).',
      rule: 'article + adjectif + nom : a red car, a big house',
      mistakes: [{ text: 'a car red', msg: 'L\'adjectif se place **avant** le nom : a **red** car.' }, { text: 'red car', msg: 'N\'oublie pas l\'article : **a** red car (une voiture rouge).' }],
      say: 'a red car' },
    { id: 'en11-x-02', prompt: 'Traduis : deux grandes maisons', answers: ['two big houses', 'two large houses'], topic: 'Place de l\'adjectif', sec: 'en11-s-adjectifs',
      hint: 'L\'adjectif ne prend jamais de -s.',
      explain: 'L\'adjectif est invariable, seul le nom prend le -s : two **big** house**s**.',
      rule: 'L\'adjectif ne change jamais : two big houses',
      mistakes: [{ text: 'two bigs houses', msg: 'L\'adjectif ne prend **jamais** de -s : two **big** houses.' }, { text: 'two houses big', msg: 'L\'adjectif se place avant le nom : two **big houses**.' }, { text: 'two big house', msg: 'Le nom, lui, prend le -s du pluriel : two big **houses**.' }],
      say: 'two big houses' },
    { id: 'en11-x-03', prompt: 'Complète : I ___ hungry. (J\'ai faim.)', answers: ['am'], topic: 'Sentiments avec to be', sec: 'en11-s-sentiments', strict: true,
      hint: 'En anglais, on « est » affamé.',
      explain: 'Avoir faim = **to be hungry**. → I **am** hungry. (J\'ai faim.)',
      rule: 'avoir faim, soif, froid, chaud = to be hungry, thirsty, cold, hot',
      mistakes: [{ text: 'have', msg: 'Avoir faim = **to be** hungry : I **am** hungry.' }, { text: 'has', msg: 'On utilise **to be** : I **am** hungry.' }],
      say: 'I am hungry.' },
    { id: 'en11-x-04', prompt: 'Traduis : Il a soif.', answers: ['He is thirsty'], topic: 'Sentiments avec to be', sec: 'en11-s-sentiments',
      hint: 'avoir soif = to be thirsty',
      explain: 'Avoir soif = **to be thirsty**. → He **is thirsty**. (Il a soif.)',
      rule: 'avoir soif = to be thirsty',
      mistakes: [{ text: 'He has thirsty', msg: 'Avoir soif = **to be** thirsty : He **is** thirsty.' }, { text: 'He has thirst', msg: 'En anglais on utilise **to be** + adjectif : He **is thirsty**.' }],
      say: 'He is thirsty.' },
    { id: 'en11-x-05', prompt: 'Traduis : Nous avons froid.', answers: ['We are cold'], topic: 'Sentiments avec to be', sec: 'en11-s-sentiments',
      hint: 'avoir froid = to be cold',
      explain: 'Avoir froid = **to be cold**. → We **are cold**. (Nous avons froid.)',
      rule: 'avoir froid = to be cold · il fait froid = it\'s cold',
      mistakes: [{ text: 'We have cold', msg: 'Avoir froid = **to be cold** : We **are** cold.' }, { text: 'It is cold', msg: '« It\'s cold » = il fait froid (le temps). Nous avons froid = **We are cold**.' }],
      say: 'We are cold.' },
    { id: 'en11-x-06', prompt: 'Complète au comparatif : This bag is ___ (cheap) than that one.', answers: ['cheaper'], topic: 'Le comparatif', sec: 'en11-s-comparatif', strict: true,
      hint: 'Adjectif court : + …',
      explain: 'cheap est court : **-er**. → This bag is **cheaper** than that one. (Ce sac est moins cher que celui-là.)',
      rule: 'Adjectif court : adjectif + -er + than',
      mistakes: [{ text: 'more cheap', msg: 'cheap est court (une syllabe) : on ajoute **-er** → cheaper.' }, { text: 'cheapest', msg: '« cheapest » est le superlatif (le moins cher de tous). Pour comparer deux choses : **cheaper**.' }, { text: 'more cheaper', msg: 'Jamais more et -er ensemble : **cheaper**.' }],
      say: 'This bag is cheaper than that one.' },
    { id: 'en11-x-07', prompt: 'Complète au comparatif : The train is ___ (fast) than the car.', answers: ['faster'], topic: 'Le comparatif', sec: 'en11-s-comparatif', strict: true,
      hint: 'Adjectif court : + -er',
      explain: 'fast → **faster**. → The train is **faster** than the car. (Le train est plus rapide que la voiture.)',
      rule: 'Adjectif court : adjectif + -er + than',
      mistakes: [{ text: 'more fast', msg: 'fast est court : **faster** (pas more fast).' }, { text: 'fastest', msg: '« fastest » est le superlatif. Pour comparer deux choses : **faster**.' }],
      say: 'The train is faster than the car.' },
    { id: 'en11-x-08', prompt: 'Complète au comparatif : My house is ___ (big) than your house.', answers: ['bigger'], topic: 'Le comparatif', sec: 'en11-s-comparatif', strict: true,
      hint: 'Attention à l\'orthographe : la consonne finale…',
      explain: 'big → bi**gg**er (la consonne est doublée). → My house is **bigger** than your house. (Ma maison est plus grande que ta maison.)',
      rule: 'Voyelle + consonne à la fin : consonne doublée (big → bigger, hot → hotter)',
      mistakes: [{ text: 'biger', msg: 'big se termine par voyelle + consonne : le g se **double** → bi**gg**er.' }, { text: 'more big', msg: 'big est court : **-er** → bigger.' }],
      say: 'My house is bigger than your house.' },
    { id: 'en11-x-09', prompt: 'Complète au comparatif : English is ___ (easy) than Chinese.', answers: ['easier'], topic: 'Le comparatif', sec: 'en11-s-comparatif', strict: true,
      hint: 'Que devient le y ?',
      explain: 'easy → eas**ier**. → English is **easier** than Chinese. (L\'anglais est plus facile que le chinois.)',
      rule: 'Consonne + y : y → ier (easy → easier, happy → happier)',
      mistakes: [{ text: 'easyer', msg: 'Après une consonne, le y devient **i** : eas**ier**.' }, { text: 'more easy', msg: 'easy suit la règle des adjectifs courts : **easier**.' }],
      say: 'English is easier than Chinese.' },
    { id: 'en11-x-10', prompt: 'Complète au comparatif : This book is ___ (interesting) than the film.', answers: ['more interesting'], topic: 'Le comparatif', sec: 'en11-s-comparatif', strict: true,
      hint: 'Adjectif long : … + adjectif',
      explain: 'interesting est long : **more** interesting. → This book is **more interesting** than the film. (Ce livre est plus intéressant que le film.)',
      rule: 'Adjectif long : more + adjectif + than',
      mistakes: [{ text: 'interestinger', msg: 'interesting est long : on met **more** devant → more interesting.' }, { text: 'most interesting', msg: '« most » sert au superlatif. Pour comparer : **more** interesting.' }, { text: 'more interestinger', msg: 'Jamais more et -er ensemble : **more interesting**.' }],
      say: 'This book is more interesting than the film.' },
    { id: 'en11-x-11', prompt: 'Complète : She is younger ___ her sister.', answers: ['than'], topic: 'Le comparatif', sec: 'en11-s-comparatif', strict: true,
      hint: 'Le « que » de la comparaison.',
      explain: '« que » après un comparatif = **than**. → She is younger **than** her sister. (Elle est plus jeune que sa sœur.)',
      rule: 'comparatif + than : younger than, more expensive than',
      mistakes: [{ text: 'that', msg: 'Pour comparer, « que » = **than** (et non that).' }, { text: 'then', msg: '« then » veut dire « ensuite ». Pour comparer : th**a**n.' }, { text: 'as', msg: 'as s\'utilise dans as … as. Après un comparatif (younger) : **than**.' }],
      say: 'She is younger than her sister.' },
    { id: 'en11-x-12', prompt: 'Complète : Your English is ___ (good) than my English.', answers: ['better'], topic: 'Le comparatif', sec: 'en11-s-comparatif', strict: true,
      hint: 'good est irrégulier.',
      explain: 'good → **better** → the best. → Your English is **better** than my English. (Ton anglais est meilleur que le mien.)',
      rule: 'good → better → the best',
      mistakes: [{ text: 'gooder', msg: 'good est irrégulier : **better**.' }, { text: 'more good', msg: 'good est irrégulier : on ne dit pas « more good » mais **better**.' }, { text: 'best', msg: '« best » est le superlatif (the best = le meilleur). Pour comparer : **better**.' }],
      say: 'Your English is better than my English.' },
    { id: 'en11-x-13', prompt: 'Complète : The weather is ___ (bad) today than yesterday.', answers: ['worse'], topic: 'Le comparatif', sec: 'en11-s-comparatif', strict: true,
      hint: 'bad est irrégulier.',
      explain: 'bad → **worse** → the worst. → The weather is **worse** today than yesterday. (Il fait plus mauvais aujourd\'hui qu\'hier.)',
      rule: 'bad → worse → the worst',
      mistakes: [{ text: 'badder', msg: 'bad est irrégulier : **worse**.' }, { text: 'more bad', msg: 'bad est irrégulier : on ne dit pas « more bad » mais **worse**.' }, { text: 'worst', msg: '« worst » est le superlatif (the worst = le pire). Pour comparer : **worse**.' }],
      say: 'The weather is worse today than yesterday.' },
    { id: 'en11-x-14', prompt: 'Complète : The airport is ___ (far) than the station.', answers: ['further', 'farther'], topic: 'Le comparatif', sec: 'en11-s-comparatif', strict: true,
      hint: 'far est irrégulier.',
      explain: 'far → **further** (ou farther) → the furthest. → The airport is **further** than the station. (L\'aéroport est plus loin que la gare.)',
      rule: 'far → further → the furthest',
      mistakes: [{ text: 'farer', msg: 'far est irrégulier : **further** (ou farther).' }, { text: 'more far', msg: 'far est irrégulier : on ne dit pas « more far » mais **further**.' }],
      say: 'The airport is further than the station.' },
    { id: 'en11-x-15', prompt: 'Complète au superlatif (avec the) : It\'s ___ (cheap) hotel in town.', answers: ['the cheapest'], topic: 'Le superlatif', sec: 'en11-s-superlatif', strict: true,
      hint: 'the + adjectif court + …',
      explain: 'Adjectif court : **the + -est**. → It\'s **the cheapest** hotel in town. (C\'est l\'hôtel le moins cher de la ville.)',
      rule: 'Superlatif court : the + adjectif + -est',
      mistakes: [{ text: 'the most cheap', msg: 'cheap est court : **the** + **-est** → the cheapest.' }, { text: 'cheapest', msg: 'Il faut **the** devant le superlatif : **the** cheapest.' }, { text: 'the cheaper', msg: '« cheaper » est le comparatif. Le superlatif : the cheap**est**.' }],
      say: 'It\'s the cheapest hotel in town.' },
    { id: 'en11-x-16', prompt: 'Complète au superlatif : This is ___ (expensive) restaurant in London.', answers: ['the most expensive'], topic: 'Le superlatif', sec: 'en11-s-superlatif', strict: true,
      hint: 'Adjectif long : the most …',
      explain: 'Adjectif long : **the most** + adjectif. → This is **the most expensive** restaurant in London. (C\'est le restaurant le plus cher de Londres.)',
      rule: 'Superlatif long : the most + adjectif',
      mistakes: [{ text: 'the expensivest', msg: 'expensive est long : on ne peut pas ajouter -est → **the most expensive**.' }, { text: 'the more expensive', msg: '« more » sert au comparatif. Le superlatif : the **most** expensive.' }, { text: 'most expensive', msg: 'Il faut **the** : **the** most expensive.' }],
      say: 'This is the most expensive restaurant in London.' },
    { id: 'en11-x-17', prompt: 'Complète au superlatif : She is ___ (good) cook in the family.', answers: ['the best'], topic: 'Le superlatif', sec: 'en11-s-superlatif', strict: true,
      hint: 'good → better → …',
      explain: 'good → better → **the best**. → She is **the best** cook in the family. (C\'est la meilleure cuisinière de la famille.)',
      rule: 'good → better → the best',
      mistakes: [{ text: 'the goodest', msg: 'good est irrégulier : **the best**.' }, { text: 'the better', msg: '« better » est le comparatif. Le superlatif : **the best**.' }, { text: 'the most good', msg: 'good est irrégulier : on dit **the best**.' }],
      say: 'She is the best cook in the family.' },
    { id: 'en11-x-18', prompt: 'Traduis : C\'est le pire jour de ma vie.', answers: ['It\'s the worst day of my life', 'This is the worst day of my life', 'It\'s the worst day in my life', 'This is the worst day in my life'], topic: 'Le superlatif', sec: 'en11-s-superlatif',
      hint: 'pire (superlatif de bad) = the …',
      explain: 'bad → worse → **the worst**. → It\'s **the worst** day of my life.',
      rule: 'bad → worse → the worst',
      mistakes: [{ text: 'It\'s the baddest day of my life', msg: 'bad est irrégulier : bad → worse → **the worst**.' }, { text: 'It\'s the worse day of my life', msg: '« worse » est le comparatif (pire que). Le superlatif : **the worst**.' }],
      say: 'It\'s the worst day of my life.' },
    { id: 'en11-x-19', prompt: 'Traduis : Mon frère est aussi grand que moi.', answers: ['My brother is as tall as me', 'My brother is as tall as I am', 'My brother is as tall as I'], topic: 'Le comparatif', sec: 'en11-s-comparatif',
      hint: 'aussi … que = as … as ; grand (personne) = tall',
      explain: 'Égalité : **as + adjectif + as**. → My brother is **as tall as** me.',
      rule: 'aussi … que = as … as',
      mistakes: [{ text: 'My brother is as tall than me', msg: 'Égalité : **as** … **as** (pas than) → as tall **as** me.' }, { text: 'My brother is so tall as me', msg: 'Dans une phrase affirmative : **as** tall **as** me.' }],
      say: 'My brother is as tall as me.' },
    { id: 'en11-x-20', prompt: 'Traduis : J\'ai mal à la tête.', answers: ['I have a headache', 'I\'ve got a headache', 'My head hurts', 'My head is hurting'], topic: 'Le corps et la santé', sec: 'en11-s-sante',
      hint: 'le mal de tête = a headache',
      explain: '**I have a headache.** (J\'ai mal à la tête.) On peut dire aussi : My head hurts.',
      rule: 'J\'ai mal à… = I have a …ache ou My … hurts',
      mistakes: [{ text: 'I have headache', msg: 'Il faut l\'article : I have **a** headache.' }, { text: 'I have a head ache', msg: 'headache s\'écrit en **un seul mot** : I have a **headache**.' }],
      say: 'I have a headache.' },
    { id: 'en11-x-21', prompt: 'Traduis : J\'ai mal au dos.', answers: ['My back hurts', 'I have backache', 'I have a backache', 'I\'ve got backache', 'I\'ve got a backache', 'I have back pain', 'My back is hurting', 'I have a pain in my back'], topic: 'Le corps et la santé', sec: 'en11-s-sante',
      hint: 'le dos = back ; faire mal = hurt',
      explain: '**My back hurts.** (J\'ai mal au dos.) Mot à mot : « mon dos fait mal ».',
      rule: 'partie du corps (my …) + hurts',
      mistakes: [{ text: 'My back hurt', msg: 'Au présent, my back = it → **hurts** avec un -s. (« My back hurt » serait le passé.)' }, { text: 'The back hurts', msg: 'Avec les parties du corps, on utilise **my** (mon) : **My** back hurts.' }],
      say: 'My back hurts.' },
    { id: 'en11-x-22', prompt: 'Pluriel : one tooth → two ___', answers: ['teeth'], topic: 'Le corps et la santé', sec: 'en11-s-sante', strict: true,
      hint: 'Pluriel irrégulier, comme foot → feet.',
      explain: 'one tooth → two **teeth** (une dent → deux dents).',
      rule: 'tooth → teeth · foot → feet',
      mistakes: [{ text: 'tooths', msg: 'Pluriel irrégulier : tooth → **teeth**.' }, { text: 'teeths', msg: 'teeth est déjà au pluriel : pas de -s en plus.' }],
      say: 'one tooth, two teeth' },
    { id: 'en11-x-23', prompt: 'Pluriel : one foot → two ___', answers: ['feet'], topic: 'Le corps et la santé', sec: 'en11-s-sante', strict: true,
      hint: 'Pluriel irrégulier : le oo devient…',
      explain: 'one foot → two **feet** (un pied → deux pieds).',
      rule: 'foot → feet · tooth → teeth',
      mistakes: [{ text: 'foots', msg: 'Pluriel irrégulier : foot → **feet**.' }, { text: 'feets', msg: 'feet est déjà au pluriel : pas de -s en plus.' }],
      say: 'one foot, two feet' },
    { id: 'en11-x-24', prompt: 'Complète : I ___ swim. (Je sais nager.)', answers: ['can'], topic: 'can / can\'t', sec: 'en11-s-modaux', strict: true,
      hint: 'Savoir faire quelque chose…',
      explain: 'Savoir faire quelque chose = **can**. → I **can** swim. (Je sais nager.)',
      rule: 'savoir faire = can + base verbale',
      mistakes: [{ text: 'know', msg: 'Savoir faire quelque chose = **can** : I can swim. (know = savoir une information.)' }, { text: 'know to', msg: 'On ne dit pas « know to swim » : **I can swim**.' }],
      say: 'I can swim.' },
    { id: 'en11-x-25', prompt: 'Mets à la forme négative : She can drive.', answers: ['She can\'t drive', 'She cannot drive'], topic: 'can / can\'t', sec: 'en11-s-modaux',
      hint: 'can + not = …',
      explain: 'Négation : **can\'t** (cannot). → She **can\'t** drive. (Elle ne sait pas conduire.)',
      rule: 'can\'t (cannot) + base verbale · jamais de do / does',
      mistakes: [{ text: 'She doesn\'t can drive', msg: 'Pas de does avec can : **She can\'t drive**.' }, { text: 'She can\'t drives', msg: 'Après can\'t, la base sans -s : can\'t **drive**.' }, { text: 'She can\'t to drive', msg: 'Pas de to après can\'t : can\'t **drive**.' }],
      say: 'She can\'t drive.' },
    { id: 'en11-x-26', prompt: 'Pose la question : You can help me. → ___?', answers: ['Can you help me'], topic: 'can / can\'t', sec: 'en11-s-modaux',
      hint: 'can passe devant le sujet.',
      explain: 'Question : **Can + sujet + base** ? → **Can you help** me? (Tu peux m\'aider ?)',
      rule: 'Question : Can + sujet + base verbale ?',
      mistakes: [{ text: 'Do you can help me', msg: 'Pas de do avec can : **Can you** help me?' }, { text: 'Can you to help me', msg: 'Pas de to après can : Can you **help** me?' }, { text: 'You can help me', msg: 'Pour la question, **Can** passe devant le sujet : **Can you** help me?' }],
      say: 'Can you help me?' },
    { id: 'en11-x-27', prompt: 'Traduis : Tu devrais voir un médecin.', answers: ['You should see a doctor', 'You should see the doctor', 'You should go to the doctor', 'You should go to the doctor\'s', 'You should go and see a doctor', 'You should consult a doctor', 'You ought to see a doctor'], topic: 'should / must', sec: 'en11-s-modaux',
      hint: 'tu devrais (conseil) = you should',
      explain: 'Un conseil : **should** + base. → You **should see** a doctor.',
      rule: 'should + base verbale = conseil (tu devrais)',
      mistakes: [{ text: 'You should to see a doctor', msg: 'Pas de to après should : You should **see** a doctor.' }, { text: 'You must see a doctor', msg: '« must » = tu **dois** (obligation). « Tu devrais » (un conseil) = **should**.' }],
      say: 'You should see a doctor.' },
    { id: 'en11-x-28', prompt: 'Complète (obligation) : You ___ show your passport.', answers: ['must', 'have to'], topic: 'should / must', sec: 'en11-s-modaux', strict: true,
      hint: 'Une obligation : vous devez…',
      explain: 'Une obligation : **must** + base. → You **must** show your passport. (Vous devez montrer votre passeport.)',
      rule: 'must + base verbale = obligation (tu dois)',
      mistakes: [{ text: 'must to', msg: 'Pas de to après must : You must **show**…' }, { text: 'should', msg: 'should = un conseil (tu devrais). Pour une obligation : **must**.' }],
      say: 'You must show your passport.' },
    { id: 'en11-x-29', prompt: 'Complète : He ___ (must / take) his medicine every day.', answers: ['must take', 'has to take'], topic: 'should / must', sec: 'en11-s-modaux',
      hint: 'must ne change jamais, et le verbe reste à la base.',
      explain: '**must** + base, même avec he. → He **must take** his medicine every day. (Il doit prendre son médicament tous les jours.)',
      rule: 'must : pas de -s, pas de to, verbe à la base',
      mistakes: [{ text: 'musts take', msg: 'must ne prend jamais de -s : he **must** take.' }, { text: 'must takes', msg: 'Après must, la base sans -s : must **take**.' }, { text: 'must to take', msg: 'Pas de to après must : must **take**.' }],
      say: 'He must take his medicine every day.' },
    { id: 'en11-x-30', prompt: 'Remets dans l\'ordre (Le train est plus rapide que le bus) : is / bus / train / faster / the / than / the', answers: ['The train is faster than the bus'], topic: 'Le comparatif', sec: 'en11-s-comparatif',
      hint: 'sujet + is + comparatif + than + …',
      explain: '**The train is faster than the bus.** (Le train est plus rapide que le bus.)',
      rule: 'A + is + adjectif-er + than + B',
      mistakes: [{ text: 'The bus is faster than the train', msg: 'Attention au sens : c\'est **le train** qui est plus rapide → The train is faster than the bus.' }, { text: 'The train is than faster the bus', msg: 'than se place **après** l\'adjectif : faster **than**.' }],
      say: 'The train is faster than the bus.' }
  ]
});
