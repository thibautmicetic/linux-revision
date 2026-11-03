/* Anglais — chapitre 5 : Manger et boire (aliments, courses, restaurant, some / any, how much / how many) */
APP.registerChapter({
  id: 'en5', subject: 'anglais', num: 5,
  title: 'Manger et boire', subtitle: 'aliments, courses, restaurant · some / any · how much / how many',
  vocabSec: 'en5-s-vocab',
  sections: [
    {
      id: 'en5-s-vocab', title: 'Les mots de la table',
      html: `
<p>Voici les mots pour parler de ce qu'on mange et de ce qu'on boit. Clique sur un mot anglais pour l'entendre.</p>
<h3>Les repas</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">breakfast</span></td><td>le petit-déjeuner</td></tr>
<tr><td><span class="say">lunch</span></td><td>le déjeuner (le repas de midi)</td></tr>
<tr><td><span class="say">dinner</span></td><td>le dîner (le repas du soir)</td></tr>
</table>
<h3>Les aliments</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">bread</span></td><td>le pain</td></tr>
<tr><td><span class="say">butter</span></td><td>le beurre</td></tr>
<tr><td><span class="say">cheese</span></td><td>le fromage</td></tr>
<tr><td><span class="say">an egg</span></td><td>un œuf</td></tr>
<tr><td><span class="say">meat</span></td><td>la viande</td></tr>
<tr><td><span class="say">chicken</span></td><td>le poulet</td></tr>
<tr><td><span class="say">fish</span></td><td>le poisson</td></tr>
<tr><td><span class="say">rice</span></td><td>le riz</td></tr>
<tr><td><span class="say">pasta</span></td><td>les pâtes</td></tr>
<tr><td><span class="say">soup</span></td><td>la soupe</td></tr>
<tr><td><span class="say">a cake</span></td><td>un gâteau</td></tr>
<tr><td><span class="say">sugar</span></td><td>le sucre</td></tr>
<tr><td><span class="say">chips</span></td><td>les frites</td></tr>
</table>
<h3>Les boissons</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">water</span></td><td>l'eau</td></tr>
<tr><td><span class="say">coffee</span></td><td>le café</td></tr>
<tr><td><span class="say">tea</span></td><td>le thé</td></tr>
<tr><td><span class="say">milk</span></td><td>le lait</td></tr>
<tr><td><span class="say">orange juice</span></td><td>le jus d'orange</td></tr>
<tr><td><span class="say">wine</span></td><td>le vin (<span class="say">red wine</span> = vin rouge, <span class="say">white wine</span> = vin blanc)</td></tr>
</table>
<h3>Les fruits et légumes</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">fruit</span></td><td>les fruits</td></tr>
<tr><td><span class="say">a vegetable</span></td><td>un légume</td></tr>
<tr><td><span class="say">an apple</span></td><td>une pomme</td></tr>
<tr><td><span class="say">a banana</span></td><td>une banane</td></tr>
<tr><td><span class="say">an orange</span></td><td>une orange</td></tr>
<tr><td><span class="say">a strawberry</span></td><td>une fraise</td></tr>
<tr><td><span class="say">a potato</span></td><td>une pomme de terre</td></tr>
<tr><td><span class="say">a tomato</span></td><td>une tomate</td></tr>
<tr><td><span class="say">a carrot</span></td><td>une carotte</td></tr>
</table>
<div class="callout tip"><b>Prononciation</b> <span class="say">breakfast</span> se dit « brèk-feust ». <span class="say">vegetable</span> se dit en 3 syllabes seulement : « vèdj-teu-beul ». <span class="say">sugar</span> se dit « chou-gueu ».</div>
<div class="callout warn"><b>Faux amis</b> En Grande-Bretagne, <span class="say">chips</span> = les <b>frites</b> (<span class="say">fish and chips</span> = poisson pané et frites). Les chips françaises, en sachet, se disent <span class="say">crisps</span>. Et <span class="say">a cake</span> veut dire n'importe quel gâteau.</div>`
    },
    {
      id: 'en5-s-repas', title: 'Les repas et ce qu\'on aime',
      html: `
<h3>Prendre un repas : have + le repas</h3>
<p>Pour dire « prendre le petit-déjeuner », « déjeuner » ou « dîner », on utilise <b>have</b> suivi du nom du repas, <b>sans article</b> :</p>
<ul>
<li><span class="say">I have breakfast at eight.</span> — Je prends mon petit-déjeuner à huit heures.</li>
<li><span class="say">We have lunch at one o'clock.</span> — Nous déjeunons à une heure.</li>
<li><span class="say">Dinner is ready!</span> — Le dîner est prêt !</li>
</ul>
<h3>J'ai faim, j'ai soif</h3>
<p>En anglais, on n'« a » pas faim : on « est » affamé. On utilise donc le verbe <b>be</b> (être).</p>
<ul>
<li><span class="say">I'm hungry.</span> — J'ai faim.</li>
<li><span class="say">Are you thirsty?</span> — As-tu soif ?</li>
<li><span class="say">This soup is delicious!</span> — Cette soupe est délicieuse !</li>
</ul>
<h3>Dire ce qu'on aime : I like / I don't like</h3>
<ul>
<li><span class="say">I like cheese.</span> — J'aime le fromage.</li>
<li><span class="say">I love strawberries.</span> — J'adore les fraises.</li>
<li><span class="say">I don't like fish.</span> — Je n'aime pas le poisson.</li>
<li><span class="say">Do you like tea?</span> — Tu aimes le thé ? → <span class="say">Yes, I do.</span> (Oui.) / <span class="say">No, I don't.</span> (Non.)</li>
</ul>
<p>Pour l'instant, retiens ces phrases comme des formules toutes faites : le chapitre 6 explique comment elles fonctionnent.</p>
<div class="callout key"><b>À retenir</b> Pour parler d'un aliment <b>en général</b>, on ne met <b>pas d'article</b> : <span class="say">I like coffee</span> (J'aime le café). Pour ce qui se compte, on met le <b>pluriel</b> : <span class="say">I like apples</span> (J'aime les pommes).</div>
<div class="callout warn"><b>Pièges</b> Ne traduis pas « le » ni « les » : « I like the cheese » voudrait dire « j'aime <i>ce</i> fromage-là ». Et on ne dit pas « I have hungry » mais <span class="say">I'm hungry</span>.</div>`
    },
    {
      id: 'en5-s-denombrable', title: 'Ce qui se compte et ce qui ne se compte pas',
      html: `
<p>En anglais, les noms se rangent en deux familles. C'est important pour choisir entre <b>a / an</b>, <b>some</b>, <b>much</b> ou <b>many</b>.</p>
<h3>1. Les noms dénombrables : on peut les compter</h3>
<p>On peut dire « un, deux, trois… ». Ils ont un singulier (avec <b>a / an</b>) et un pluriel.</p>
<ul>
<li><span class="say">an apple</span> → <span class="say">two apples</span> (une pomme → deux pommes)</li>
<li><span class="say">an egg</span> → <span class="say">six eggs</span> (un œuf → six œufs)</li>
<li><span class="say">a tomato</span> → <span class="say">three tomatoes</span> (attention au <b>-es</b>, comme <span class="say">potatoes</span>)</li>
<li><span class="say">a strawberry</span> → <span class="say">ten strawberries</span> (le <b>y</b> devient <b>ies</b>)</li>
</ul>
<h3>2. Les noms indénombrables : on ne peut pas les compter</h3>
<p>Ce sont souvent des matières ou des liquides : on ne compte pas « deux laits » ni « trois riz ». Ils n'ont <b>pas de a / an</b>, <b>pas de pluriel</b>, et le verbe reste au <b>singulier</b>.</p>
<ul>
<li><span class="say">bread</span> (le pain), <span class="say">water</span> (l'eau), <span class="say">milk</span>, <span class="say">rice</span>, <span class="say">butter</span>, <span class="say">sugar</span>, <span class="say">meat</span>, <span class="say">cheese</span>, <span class="say">pasta</span></li>
<li><span class="say">The bread is fresh.</span> — Le pain est frais.</li>
<li><span class="say">The pasta is delicious.</span> — Les pâtes sont délicieuses. (singulier en anglais !)</li>
</ul>
<p>Pour « compter » un indénombrable, on ajoute une quantité ou un contenant : <span class="say">a slice of bread</span> (une tranche de pain), <span class="say">a glass of water</span> (un verre d'eau), <span class="say">two bottles of milk</span> (deux bouteilles de lait).</p>
<div class="callout key"><b>À retenir</b> Dénombrable : <span class="say">an apple</span>, <span class="say">some apples</span>. Indénombrable : <span class="say">some bread</span>, jamais « a bread » ni « breads ».</div>
<div class="callout warn"><b>Pièges</b> <span class="say">pasta</span> est singulier : <span class="say">The pasta is good</span> (et non « are »). <span class="say">fruit</span> est le plus souvent indénombrable : <span class="say">I eat a lot of fruit</span> (Je mange beaucoup de fruits). Au contraire, <span class="say">chips</span> (les frites) est un vrai pluriel.</div>`
    },
    {
      id: 'en5-s-someany', title: 'Some et any : du, de la, des',
      html: `
<p>En français, on dit « du pain », « de l'eau », « des pommes ». En anglais, on utilise souvent <b>some</b> ou <b>any</b> (un peu de, quelques). Ils vont avec les <b>indénombrables</b> et avec les <b>pluriels</b>.</p>
<h3>some : dans une phrase affirmative</h3>
<ul>
<li><span class="say">There is some milk.</span> — Il y a du lait.</li>
<li><span class="say">I've got some apples.</span> — J'ai des pommes.</li>
<li><span class="say">I'd like some bread, please.</span> — Je voudrais du pain, s'il vous plaît.</li>
</ul>
<h3>any : dans une phrase négative ou une question</h3>
<ul>
<li><span class="say">There isn't any milk.</span> — Il n'y a pas de lait.</li>
<li><span class="say">I haven't got any eggs.</span> — Je n'ai pas d'œufs.</li>
<li><span class="say">Have you got any bread?</span> — Avez-vous du pain ?</li>
<li><span class="say">Are there any tomatoes?</span> — Y a-t-il des tomates ?</li>
</ul>
<h3>L'exception polie : some pour demander ou proposer</h3>
<p>Quand on <b>demande</b> quelque chose poliment, ou qu'on le <b>propose</b>, on garde <b>some</b>, même dans une question :</p>
<ul>
<li><span class="say">Can I have some water, please?</span> — Je peux avoir de l'eau, s'il vous plaît ?</li>
<li><span class="say">Would you like some tea?</span> — Voulez-vous du thé ?</li>
</ul>
<div class="callout key"><b>À retenir</b> Phrase affirmative → <b>some</b>. Phrase négative (<span class="say">isn't</span>, <span class="say">aren't</span>, <span class="say">haven't</span>) ou question → <b>any</b>. Demande polie ou offre → <b>some</b>.</div>
<div class="callout tip"><b>Autre façon de dire « pas de »</b> <span class="say">There's no milk.</span> = <span class="say">There isn't any milk.</span> Avec <b>no</b>, le verbe reste affirmatif (is, et pas isn't).</div>
<div class="callout warn"><b>Pièges</b> Pas de double négation : on dit <span class="say">There isn't any bread</span> ou <span class="say">There's no bread</span>, jamais « There isn't no bread ». Et pour un seul objet qui se compte, on garde <b>a / an</b> : <span class="say">an apple</span>, pas « some apple ».</div>`
    },
    {
      id: 'en5-s-quantite', title: 'Combien ? Beaucoup ! (how much, how many, a lot of)',
      html: `
<h3>How many : pour ce qui se compte</h3>
<p><b>How many</b> + nom au <b>pluriel</b> = combien de… (des choses qu'on peut compter).</p>
<ul>
<li><span class="say">How many eggs are there?</span> — Combien d'œufs y a-t-il ?</li>
<li><span class="say">How many apples would you like?</span> — Combien de pommes voulez-vous ?</li>
</ul>
<h3>How much : pour ce qui ne se compte pas</h3>
<p><b>How much</b> + nom <b>indénombrable</b> (au singulier).</p>
<ul>
<li><span class="say">How much milk is there?</span> — Combien de lait y a-t-il ?</li>
<li><span class="say">How much sugar would you like?</span> — Combien de sucre voulez-vous ?</li>
</ul>
<h3>How much… ? pour demander un prix</h3>
<ul>
<li><span class="say">How much is it?</span> — C'est combien ?</li>
<li><span class="say">How much are the strawberries?</span> — Combien coûtent les fraises ?</li>
<li><span class="say">They're four euros a kilo.</span> — Elles sont à quatre euros le kilo.</li>
</ul>
<h3>A lot of : beaucoup de</h3>
<p><b>a lot of</b> marche avec les deux familles de noms :</p>
<ul>
<li><span class="say">There are a lot of apples.</span> — Il y a beaucoup de pommes.</li>
<li><span class="say">There is a lot of water.</span> — Il y a beaucoup d'eau.</li>
<li><span class="say">I drink a lot of tea.</span> — Je bois beaucoup de thé.</li>
</ul>
<div class="callout key"><b>À retenir</b> <b>How many</b> + pluriel (apples, eggs) · <b>How much</b> + indénombrable (milk, bread), ou pour un prix · <b>a lot of</b> + les deux.</div>
<div class="callout warn"><b>Pièges</b> N'oublie pas <b>of</b> : <span class="say">a lot of apples</span> (pas « a lot apples »). Et on ne dit pas « How many milk » mais <span class="say">How much milk</span>.</div>`
    },
    {
      id: 'en5-s-courses', title: 'Faire les courses',
      html: `
<h3>Les magasins</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">the supermarket</span></td><td>le supermarché</td></tr>
<tr><td><span class="say">the bakery</span></td><td>la boulangerie</td></tr>
<tr><td><span class="say">the butcher's</span></td><td>la boucherie</td></tr>
<tr><td><span class="say">the market</span></td><td>le marché</td></tr>
</table>
<p><span class="say">do the shopping</span> = faire les courses : <span class="say">I do the shopping on Saturdays.</span> — Je fais les courses le samedi.</p>
<h3>Les quantités : quantité + of + aliment</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">a bottle of water</span></td><td>une bouteille d'eau</td></tr>
<tr><td><span class="say">a kilo of potatoes</span></td><td>un kilo de pommes de terre</td></tr>
<tr><td><span class="say">half a kilo of cheese</span></td><td>un demi-kilo (une livre) de fromage</td></tr>
<tr><td><span class="say">a packet of pasta</span></td><td>un paquet de pâtes</td></tr>
<tr><td><span class="say">a slice of ham</span></td><td>une tranche de jambon</td></tr>
<tr><td><span class="say">a glass of wine</span></td><td>un verre de vin</td></tr>
<tr><td><span class="say">a cup of tea</span></td><td>une tasse de thé</td></tr>
<tr><td><span class="say">a piece of cake</span></td><td>un morceau de gâteau</td></tr>
</table>
<h3>Au marché : un petit dialogue</h3>
<p>— <span class="say">Good morning! Can I help you?</span> (Bonjour ! Je peux vous aider ?)<br>
— <span class="say">Yes, a kilo of tomatoes, please.</span> (Oui, un kilo de tomates, s'il vous plaît.)<br>
— <span class="say">Anything else?</span> (Autre chose ?)<br>
— <span class="say">Have you got any strawberries?</span> (Avez-vous des fraises ?)<br>
— <span class="say">Yes, they're four euros a kilo.</span> (Oui, elles sont à quatre euros le kilo.)<br>
— <span class="say">Half a kilo, please. How much is that?</span> (Une livre, s'il vous plaît. Ça fait combien ?)<br>
— <span class="say">That's five euros, please.</span> (Ça fait cinq euros, s'il vous plaît.)</p>
<div class="callout key"><b>À retenir</b> Quantité + <b>of</b> + aliment : <span class="say">a bottle of milk</span>, <span class="say">a packet of sugar</span>, <span class="say">two slices of bread</span>.</div>
<div class="callout warn"><b>Pièges</b> N'oublie jamais <b>of</b> (« a bottle water » ✗). Et attention à l'ordre des mots : <span class="say">a cup of tea</span> = une tasse <b>de</b> thé (pleine), mais <span class="say">a teacup</span> = une tasse <b>à</b> thé (l'objet).</div>`
    },
    {
      id: 'en5-s-restaurant', title: 'Au restaurant et au café',
      html: `
<h3>Les mots du restaurant</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">the menu</span></td><td>la carte, le menu</td></tr>
<tr><td><span class="say">the waiter</span> / <span class="say">the waitress</span></td><td>le serveur / la serveuse</td></tr>
<tr><td><span class="say">the starter</span></td><td>l'entrée</td></tr>
<tr><td><span class="say">the main course</span></td><td>le plat principal</td></tr>
<tr><td><span class="say">the dessert</span></td><td>le dessert</td></tr>
<tr><td><span class="say">a glass</span></td><td>un verre</td></tr>
<tr><td><span class="say">the bill</span></td><td>l'addition</td></tr>
<tr><td><span class="say">a tip</span></td><td>un pourboire</td></tr>
</table>
<h3>Commander poliment</h3>
<ul>
<li><span class="say">I'd like the soup, please.</span> — Je voudrais la soupe, s'il vous plaît. (<span class="say">I'd like</span> = <span class="say">I would like</span>)</li>
<li><span class="say">Can I have a coffee, please?</span> — Je peux avoir un café, s'il vous plaît ?</li>
<li><span class="say">Could I have the bill, please?</span> — Pourrais-je avoir l'addition, s'il vous plaît ? (<b>could</b> est encore plus poli que can)</li>
</ul>
<h3>Ce que dit le serveur</h3>
<ul>
<li><span class="say">Are you ready to order?</span> — Vous êtes prêts à commander ?</li>
<li><span class="say">What would you like?</span> — Que désirez-vous ?</li>
<li><span class="say">What would you like to drink?</span> — Que voulez-vous boire ?</li>
<li><span class="say">Anything else?</span> — Autre chose ?</li>
<li><span class="say">Enjoy your meal!</span> — Bon appétit !</li>
</ul>
<h3>Un petit dialogue</h3>
<p>— <span class="say">Good evening. A table for two, please.</span> (Bonsoir. Une table pour deux, s'il vous plaît.)<br>
— <span class="say">Of course. Here's the menu.</span> (Bien sûr. Voici la carte.)<br>
— <span class="say">For the starter, I'd like the soup, and for the main course, the chicken with rice.</span> (En entrée, je voudrais la soupe, et en plat principal, le poulet avec du riz.)<br>
— <span class="say">And to drink?</span> (Et comme boisson ?)<br>
— <span class="say">A glass of red wine and some water, please.</span> (Un verre de vin rouge et de l'eau, s'il vous plaît.)<br>
— … <span class="say">Could I have the bill, please?</span> (L'addition, s'il vous plaît.)</p>
<p>Au café : <span class="say">A coffee with milk, please.</span> (Un café au lait, s'il vous plaît.) · <span class="say">A cup of tea, please.</span> (Une tasse de thé, s'il vous plaît.) · Pour trinquer : <span class="say">Cheers!</span> (Santé !)</p>
<div class="callout key"><b>À retenir</b> Pour commander : <span class="say">I'd like…</span> · <span class="say">Can I have…?</span> · <span class="say">Could I have…?</span> + <span class="say">please</span>. Pour payer : <span class="say">Could I have the bill, please?</span></div>
<div class="callout warn"><b>Pièges</b> <span class="say">I like coffee</span> = j'aime le café ; <span class="say">I'd like a coffee</span> = je voudrais un café : le petit <b>'d</b> change tout ! « I want… » (je veux) paraît impoli. L'addition se dit <span class="say">the bill</span> (« addition » = une addition en calcul), et l'entrée <span class="say">the starter</span>. Aux États-Unis, on dit <span class="say">the check</span> pour l'addition, et le mot <span class="say">entrée</span> y désigne… le plat principal !</div>`
    }
  ],
  words: [
    // les repas
    { en: 'breakfast', fr: 'le petit-déjeuner', pos: 'n', cat: 'Les repas', ex: 'I have breakfast at eight.', exFr: 'Je prends mon petit-déjeuner à huit heures.', level: 1, note: 'Prononciation : « brèk-feust ». Prendre le petit-déjeuner = **have breakfast** (sans article).' },
    { en: 'lunch', fr: 'le déjeuner', pos: 'n', cat: 'Les repas', ex: 'Lunch is at one o\'clock.', exFr: 'Le déjeuner est à une heure.', level: 1, note: 'Déjeuner = **have lunch**.' },
    { en: 'dinner', fr: 'le dîner', pos: 'n', cat: 'Les repas', ex: 'Dinner is ready!', exFr: 'Le dîner est prêt !', level: 1, note: 'Dîner = **have dinner**.' },
    // les aliments
    { en: 'bread', fr: 'le pain', pos: 'n', cat: 'Les aliments', ex: 'There is some bread on the table.', exFr: 'Il y a du pain sur la table.', level: 1, note: 'Indénombrable : **some bread**, jamais « a bread ».' },
    { en: 'butter', fr: 'le beurre', pos: 'n', cat: 'Les aliments', ex: 'I\'d like some bread and butter, please.', exFr: 'Je voudrais du pain et du beurre, s\'il vous plaît.', level: 1 },
    { en: 'cheese', fr: 'le fromage', pos: 'n', cat: 'Les aliments', ex: 'I like French cheese.', exFr: 'J\'aime le fromage français.', level: 1 },
    { en: 'egg', fr: 'un œuf', pos: 'n', cat: 'Les aliments', ex: 'I\'ve got six eggs.', exFr: 'J\'ai six œufs.', level: 1, note: 'Son voyelle au début : **an** egg.' },
    { en: 'meat', fr: 'la viande', pos: 'n', cat: 'Les aliments', ex: 'There isn\'t any meat in this soup.', exFr: 'Il n\'y a pas de viande dans cette soupe.', level: 1, note: 'Indénombrable : some meat, pas « a meat ».' },
    { en: 'chicken', fr: 'le poulet', pos: 'n', cat: 'Les aliments', ex: 'The chicken is delicious.', exFr: 'Le poulet est délicieux.', level: 1 },
    { en: 'fish', fr: 'le poisson', pos: 'n', cat: 'Les aliments', ex: 'I don\'t like fish.', exFr: 'Je n\'aime pas le poisson.', level: 1, note: 'Au pluriel, on dit le plus souvent **fish** (sans -s) : two fish.' },
    { en: 'rice', fr: 'le riz', pos: 'n', cat: 'Les aliments', ex: 'Chicken with rice, please.', exFr: 'Du poulet avec du riz, s\'il vous plaît.', level: 1 },
    { en: 'pasta', fr: 'les pâtes', pos: 'n', cat: 'Les aliments', ex: 'The pasta is very good.', exFr: 'Les pâtes sont très bonnes.', level: 1, note: 'Singulier en anglais : the pasta **is**…' },
    { en: 'soup', fr: 'la soupe', pos: 'n', cat: 'Les aliments', ex: 'I\'d like the soup, please.', exFr: 'Je voudrais la soupe, s\'il vous plaît.', level: 1 },
    { en: 'cake', fr: 'un gâteau', pos: 'n', cat: 'Les aliments', ex: 'Would you like some cake?', exFr: 'Voulez-vous du gâteau ?', level: 1, note: 'a cake = n\'importe quel gâteau (pas seulement « un cake »).' },
    { en: 'sugar', fr: 'le sucre', pos: 'n', cat: 'Les aliments', ex: 'No sugar, thank you.', exFr: 'Pas de sucre, merci.', level: 1, note: 'Prononciation : « chou-gueu ».' },
    { en: 'chips', fr: 'les frites', pos: 'n', cat: 'Les aliments', alt: ['fries', 'French fries'], ex: 'Fish and chips, please!', exFr: 'Un poisson-frites, s\'il vous plaît !', level: 1, note: 'Faux ami (anglais britannique) : chips = les **frites**. Les chips en sachet se disent **crisps**. Aux États-Unis : fries.' },
    // les boissons
    { en: 'water', fr: 'l\'eau', pos: 'n', cat: 'Les boissons', ex: 'Can I have some water, please?', exFr: 'Je peux avoir de l\'eau, s\'il vous plaît ?', level: 1, note: 'Indénombrable : some water, a glass of water.' },
    { en: 'coffee', fr: 'le café', pos: 'n', cat: 'Les boissons', ex: 'I\'d like a coffee, please.', exFr: 'Je voudrais un café, s\'il vous plaît.', level: 1, note: 'Au café, on commande « a coffee » (= une tasse de café). L\'endroit se dit aussi a café.' },
    { en: 'tea', fr: 'le thé', pos: 'n', cat: 'Les boissons', ex: 'Would you like some tea?', exFr: 'Voulez-vous du thé ?', level: 1 },
    { en: 'milk', fr: 'le lait', pos: 'n', cat: 'Les boissons', ex: 'There isn\'t any milk.', exFr: 'Il n\'y a pas de lait.', level: 1 },
    { en: 'orange juice', fr: 'le jus d\'orange', pos: 'n', cat: 'Les boissons', ex: 'A glass of orange juice, please.', exFr: 'Un verre de jus d\'orange, s\'il vous plaît.', level: 1 },
    { en: 'wine', fr: 'le vin', pos: 'n', cat: 'Les boissons', ex: 'A bottle of red wine, please.', exFr: 'Une bouteille de vin rouge, s\'il vous plaît.', level: 1, note: 'red wine = vin rouge, white wine = vin blanc : la couleur se place **avant** le nom.' },
    // fruits et légumes
    { en: 'fruit', fr: 'les fruits', pos: 'n', cat: 'Fruits et légumes', ex: 'I eat a lot of fruit.', exFr: 'Je mange beaucoup de fruits.', level: 1, note: 'Le plus souvent indénombrable : some fruit, a lot of fruit.' },
    { en: 'vegetable', fr: 'un légume', pos: 'n', cat: 'Fruits et légumes', ex: 'Carrots are vegetables.', exFr: 'Les carottes sont des légumes.', level: 1, note: 'Prononciation en 3 syllabes : « vèdj-teu-beul ». Souvent au pluriel : vegetables.' },
    { en: 'apple', fr: 'une pomme', pos: 'n', cat: 'Fruits et légumes', ex: 'This apple is very good.', exFr: 'Cette pomme est très bonne.', level: 1, note: 'Son voyelle au début : **an** apple.' },
    { en: 'banana', fr: 'une banane', pos: 'n', cat: 'Fruits et légumes', ex: 'There are three bananas.', exFr: 'Il y a trois bananes.', level: 1 },
    { en: 'orange', fr: 'une orange', pos: 'n', cat: 'Fruits et légumes', ex: 'I\'ve got two oranges.', exFr: 'J\'ai deux oranges.', level: 1, note: 'Son voyelle au début : **an** orange.' },
    { en: 'strawberry', fr: 'une fraise', pos: 'n', cat: 'Fruits et légumes', ex: 'I love strawberries!', exFr: 'J\'adore les fraises !', level: 2, note: 'Pluriel : strawberr**ies** (consonne + y → ies).' },
    { en: 'potato', fr: 'une pomme de terre', pos: 'n', cat: 'Fruits et légumes', ex: 'A kilo of potatoes, please.', exFr: 'Un kilo de pommes de terre, s\'il vous plaît.', level: 1, note: 'Pluriel : potato**es** (avec -es).' },
    { en: 'tomato', fr: 'une tomate', pos: 'n', cat: 'Fruits et légumes', ex: 'There are some tomatoes in the salad.', exFr: 'Il y a des tomates dans la salade.', level: 1, note: 'Pluriel : tomato**es**. Prononciation britannique : « teu-mâ-to ».' },
    { en: 'carrot', fr: 'une carotte', pos: 'n', cat: 'Fruits et légumes', ex: 'I\'d like a kilo of carrots.', exFr: 'Je voudrais un kilo de carottes.', level: 1, note: 'Orthographe : carrot a **2 r et 1 t** (le contraire du français carotte).' },
    // au restaurant
    { en: 'menu', fr: 'la carte (au restaurant)', pos: 'n', cat: 'Au restaurant', sec: 'en5-s-restaurant', ex: 'Can I see the menu, please?', exFr: 'Je peux voir la carte, s\'il vous plaît ?', level: 1, note: 'Au restaurant, la carte = the menu. Une carte routière = a map.' },
    { en: 'waiter', fr: 'le serveur', pos: 'n', cat: 'Au restaurant', sec: 'en5-s-restaurant', ex: 'The waiter is very nice.', exFr: 'Le serveur est très gentil.', level: 1, note: 'La serveuse = the waitress.' },
    { en: 'starter', fr: 'l\'entrée (du repas)', pos: 'n', cat: 'Au restaurant', sec: 'en5-s-restaurant', alt: ['appetizer'], ex: 'The starter is a tomato salad.', exFr: 'L\'entrée est une salade de tomates.', level: 1, note: 'Faux ami : « entry » ne veut pas dire l\'entrée d\'un repas. Aux États-Unis, on dit appetizer.' },
    { en: 'main course', fr: 'le plat principal', pos: 'n', cat: 'Au restaurant', sec: 'en5-s-restaurant', ex: 'For the main course, I\'d like the chicken.', exFr: 'En plat principal, je voudrais le poulet.', level: 1 },
    { en: 'dessert', fr: 'le dessert', pos: 'n', cat: 'Au restaurant', sec: 'en5-s-restaurant', ex: 'What would you like for dessert?', exFr: 'Que voulez-vous comme dessert ?', level: 1, note: 'Prononciation : « di-zeurt », accent sur la 2e syllabe. Ne pas confondre avec desert (« dè-zeut ») = le désert.' },
    { en: 'glass', fr: 'un verre', pos: 'n', cat: 'Au restaurant', sec: 'en5-s-restaurant', ex: 'A glass of wine, please.', exFr: 'Un verre de vin, s\'il vous plaît.', level: 1, note: 'Pluriel : glass**es**.' },
    { en: 'bill', fr: 'l\'addition', pos: 'n', cat: 'Au restaurant', sec: 'en5-s-restaurant', alt: ['check'], ex: 'Could I have the bill, please?', exFr: 'Pourrais-je avoir l\'addition, s\'il vous plaît ?', level: 1, note: 'Faux ami : on ne dit pas « the addition ». Aux États-Unis : the check.' },
    // faire les courses
    { en: 'shopping', fr: 'les courses', pos: 'n', cat: 'Faire les courses', sec: 'en5-s-courses', ex: 'I do the shopping on Saturdays.', exFr: 'Je fais les courses le samedi.', level: 1, note: 'Faire les courses = **do the shopping**.' },
    { en: 'supermarket', fr: 'le supermarché', pos: 'n', cat: 'Faire les courses', sec: 'en5-s-courses', ex: 'The supermarket is near the station.', exFr: 'Le supermarché est près de la gare.', level: 1 },
    { en: 'bakery', fr: 'la boulangerie', pos: 'n', cat: 'Faire les courses', sec: 'en5-s-courses', ex: 'Is there a bakery near here?', exFr: 'Y a-t-il une boulangerie près d\'ici ?', level: 1 },
    { en: 'bottle', fr: 'une bouteille', pos: 'n', cat: 'Faire les courses', sec: 'en5-s-courses', ex: 'Two bottles of water, please.', exFr: 'Deux bouteilles d\'eau, s\'il vous plaît.', level: 1 },
    { en: 'kilo', fr: 'un kilo', pos: 'n', cat: 'Faire les courses', sec: 'en5-s-courses', alt: ['kilogram', 'kilogramme'], ex: 'Half a kilo of cheese, please.', exFr: 'Un demi-kilo de fromage, s\'il vous plaît.', level: 1 },
    { en: 'packet', fr: 'un paquet', pos: 'n', cat: 'Faire les courses', sec: 'en5-s-courses', alt: ['pack'], ex: 'A packet of sugar, please.', exFr: 'Un paquet de sucre, s\'il vous plaît.', level: 1 },
    { en: 'slice', fr: 'une tranche', pos: 'n', cat: 'Faire les courses', sec: 'en5-s-courses', ex: 'Two slices of ham, please.', exFr: 'Deux tranches de jambon, s\'il vous plaît.', level: 1 },
    // verbes et adjectifs
    { en: 'eat', fr: 'manger', pos: 'v', cat: 'Verbes et adjectifs', ex: 'What would you like to eat?', exFr: 'Qu\'est-ce que vous voulez manger ?', level: 1 },
    { en: 'drink', fr: 'boire', pos: 'v', cat: 'Verbes et adjectifs', ex: 'What would you like to drink?', exFr: 'Que voulez-vous boire ?', level: 1, note: 'C\'est aussi un nom : a drink = une boisson.' },
    { en: 'hungry', fr: 'qui a faim', pos: 'adj', cat: 'Verbes et adjectifs', sec: 'en5-s-repas', ex: 'I\'m hungry.', exFr: 'J\'ai faim.', level: 1, note: 'J\'ai faim = **I\'m hungry** (avec be, pas avec have).' },
    { en: 'thirsty', fr: 'qui a soif', pos: 'adj', cat: 'Verbes et adjectifs', sec: 'en5-s-repas', ex: 'Are you thirsty?', exFr: 'As-tu soif ?', level: 1, note: 'J\'ai soif = **I\'m thirsty** (avec be).' },
    { en: 'delicious', fr: 'délicieux', pos: 'adj', cat: 'Verbes et adjectifs', sec: 'en5-s-repas', ex: 'This soup is delicious!', exFr: 'Cette soupe est délicieuse !', level: 1 }
  ],
  phrases: [
    { en: 'A table for two, please.', fr: 'Une table pour deux, s\'il vous plaît.', cat: 'Au restaurant', sec: 'en5-s-restaurant' },
    { en: 'Can I see the menu, please?', fr: 'Je peux voir la carte, s\'il vous plaît ?', alt: ['Could I see the menu, please?', 'Can I have the menu, please?', 'Could I have the menu, please?'], cat: 'Au restaurant', sec: 'en5-s-restaurant' },
    { en: 'Are you ready to order?', fr: 'Vous êtes prêts à commander ?', cat: 'Au restaurant', sec: 'en5-s-restaurant', note: 'C\'est la question du serveur.' },
    { en: 'What would you like?', fr: 'Que désirez-vous ?', cat: 'Au restaurant', sec: 'en5-s-restaurant', note: 'Question polie du serveur ou du vendeur.' },
    { en: 'I\'d like the chicken, please.', fr: 'Je voudrais le poulet, s\'il vous plaît.', alt: ['Can I have the chicken, please?', 'Could I have the chicken, please?'], cat: 'Commander', sec: 'en5-s-restaurant', note: 'I\'d like = I would like (je voudrais).' },
    { en: 'For the starter, I\'d like the soup.', fr: 'En entrée, je voudrais la soupe.', alt: ['As a starter, I\'d like the soup.', 'For my starter, I\'d like the soup.', 'I\'d like the soup for the starter.'], cat: 'Commander', sec: 'en5-s-restaurant' },
    { en: 'What would you like to drink?', fr: 'Que voulez-vous boire ?', cat: 'Au restaurant', sec: 'en5-s-restaurant' },
    { en: 'Can I have a coffee, please?', fr: 'Je peux avoir un café, s\'il vous plaît ?', alt: ['Could I have a coffee, please?'], cat: 'Commander', sec: 'en5-s-restaurant' },
    { en: 'Can I have some water, please?', fr: 'Je peux avoir de l\'eau, s\'il vous plaît ?', alt: ['Could I have some water, please?'], cat: 'Commander', sec: 'en5-s-someany', note: 'Demande polie : on garde **some** dans la question.' },
    { en: 'Anything else?', fr: 'Autre chose ?', alt: ['Would you like anything else?'], cat: 'Au restaurant', sec: 'en5-s-restaurant' },
    { en: 'That\'s all, thank you.', fr: 'Ce sera tout, merci.', alt: ['That\'s all, thanks.', 'That\'s everything, thank you.'], cat: 'Au restaurant', sec: 'en5-s-restaurant' },
    { en: 'Enjoy your meal!', fr: 'Bon appétit !', alt: ['Enjoy!'], cat: 'Au restaurant', sec: 'en5-s-restaurant' },
    { en: 'It\'s delicious!', fr: 'C\'est délicieux !', alt: ['This is delicious!'], cat: 'Au restaurant', sec: 'en5-s-repas' },
    { en: 'Could I have the bill, please?', fr: 'Pourrais-je avoir l\'addition, s\'il vous plaît ?', alt: ['Can I have the bill, please?', 'Could we have the bill, please?', 'Can we have the bill, please?', 'Could I have the check, please?'], cat: 'Au restaurant', sec: 'en5-s-restaurant', note: 'the bill = l\'addition (the check aux États-Unis).' },
    { en: 'Can I pay by card?', fr: 'Je peux payer par carte ?', alt: ['Could I pay by card?', 'Can I pay by credit card?'], cat: 'Au restaurant', sec: 'en5-s-restaurant' },
    { en: 'I\'m hungry.', fr: 'J\'ai faim.', cat: 'Goûts et envies', sec: 'en5-s-repas' },
    { en: 'I\'m thirsty.', fr: 'J\'ai soif.', cat: 'Goûts et envies', sec: 'en5-s-repas' },
    { en: 'I\'m a vegetarian.', fr: 'Je suis végétarien.', alt: ['I\'m vegetarian.'], cat: 'Goûts et envies', sec: 'en5-s-repas' },
    { en: 'I like cheese.', fr: 'J\'aime le fromage.', cat: 'Goûts et envies', sec: 'en5-s-repas', note: 'Pour une généralité, pas d\'article : I like cheese.' },
    { en: 'I don\'t like fish.', fr: 'Je n\'aime pas le poisson.', cat: 'Goûts et envies', sec: 'en5-s-repas' },
    { en: 'How much is it?', fr: 'C\'est combien ?', alt: ['How much is this?', 'How much is that?', 'How much does it cost?'], cat: 'Faire les courses', sec: 'en5-s-quantite' },
    { en: 'A kilo of apples, please.', fr: 'Un kilo de pommes, s\'il vous plaît.', cat: 'Faire les courses', sec: 'en5-s-courses' },
    { en: 'Have you got any bread?', fr: 'Avez-vous du pain ?', alt: ['Do you have any bread?'], cat: 'Faire les courses', sec: 'en5-s-someany' },
    { en: 'There isn\'t any milk.', fr: 'Il n\'y a pas de lait.', alt: ['There\'s no milk.'], cat: 'Faire les courses', sec: 'en5-s-someany' },
    { en: 'How many eggs are there?', fr: 'Combien d\'œufs y a-t-il ?', cat: 'Faire les courses', sec: 'en5-s-quantite' }
  ],
  quiz: [
    { id: 'en5-q-01', q: 'Complète : I\'d like ___ apple, please.', choices: ['a', 'an', 'some', 'any'], answer: 1, topic: 'Dénombrable ou non', sec: 'en5-s-denombrable',
      why: { 0: 'Devant un son voyelle (apple commence par « a »), on écrit **an**, pas a.', 2: '**some** va avec un pluriel (some apples) ou un indénombrable (some bread), pas avec un seul objet.', 3: '**any** s\'emploie dans les négations et les questions, et pas avec un seul objet.' },
      explain: '**apple** se compte et commence par un son voyelle : **an apple**. → I\'d like **an** apple, please. (Je voudrais une pomme, s\'il vous plaît.)', say: 'I\'d like an apple, please.', level: 1 },
    { id: 'en5-q-02', q: 'Lequel de ces mots est indénombrable (on ne peut pas dire « a … ») ?', choices: ['egg', 'banana', 'bread', 'potato'], answer: 2, topic: 'Dénombrable ou non', sec: 'en5-s-denombrable',
      why: { 0: 'On peut compter les œufs : an egg, two eggs.', 1: 'On peut compter les bananes : a banana, three bananas.', 3: 'On peut compter les pommes de terre : a potato, two potatoes.' },
      explain: '**bread** (le pain) ne se compte pas en anglais : on dit **some bread** ou **a slice of bread**, jamais « a bread ». → I\'d like some bread, please. (Je voudrais du pain, s\'il vous plaît.)', say: 'I\'d like some bread, please.', level: 1 },
    { id: 'en5-q-03', q: 'Complète : The pasta ___ delicious.', choices: ['are', 'is', 'am', 'have'], answer: 1, topic: 'Dénombrable ou non', sec: 'en5-s-denombrable',
      why: { 0: '**pasta** est indénombrable, donc singulier en anglais, même si « les pâtes » est au pluriel en français.', 2: '**am** va seulement avec I.', 3: '**have** veut dire avoir ; ici il faut le verbe être.' },
      explain: 'Un indénombrable prend un verbe au **singulier** : The pasta **is** delicious. (Les pâtes sont délicieuses.)', say: 'The pasta is delicious.', level: 1 },
    { id: 'en5-q-04', q: 'Complète : There is ___ cheese on the table.', choices: ['some', 'any', 'a', 'many'], answer: 0, topic: 'Some et any', sec: 'en5-s-someany',
      why: { 1: '**any** s\'emploie dans les phrases négatives et les questions. Ici, la phrase est affirmative.', 2: '**cheese** ne se compte pas : pas de a.', 3: '**many** va avec un nom au pluriel (many apples) ; cheese ne se compte pas.' },
      explain: 'Phrase affirmative + indénombrable → **some**. → There is **some** cheese on the table. (Il y a du fromage sur la table.)', say: 'There is some cheese on the table.', level: 1 },
    { id: 'en5-q-05', q: 'Complète : There isn\'t ___ bread.', choices: ['some', 'no', 'any', 'a'], answer: 2, topic: 'Some et any', sec: 'en5-s-someany',
      why: { 0: 'Dans une phrase négative, **some** devient **any**.', 1: '**isn\'t** est déjà négatif : ajouter no ferait une double négation.', 3: '**bread** ne se compte pas : pas de a.' },
      explain: 'Phrase négative → **any**. → There isn\'t **any** bread. (Il n\'y a pas de pain.) On peut aussi dire : There\'s **no** bread.', say: 'There isn\'t any bread.', level: 1 },
    { id: 'en5-q-06', q: 'Complète : Have you got ___ eggs?', choices: ['any', 'an', 'a', 'much'], answer: 0, topic: 'Some et any', sec: 'en5-s-someany',
      why: { 1: '**an** s\'utilise avec un seul objet (an egg), pas avec un pluriel.', 2: '**a** s\'utilise avec un seul objet, et devant egg ce serait an.', 3: '**much** va avec ce qui ne se compte pas ; les œufs se comptent.' },
      explain: 'Dans une question, on utilise **any** : Have you got **any** eggs? (Avez-vous des œufs ?)', say: 'Have you got any eggs?', level: 1 },
    { id: 'en5-q-07', q: 'Complète : How ___ apples are there?', choices: ['much', 'many', 'lot of', 'any'], answer: 1, topic: 'How much / how many', sec: 'en5-s-quantite',
      why: { 0: '**much** va avec ce qui ne se compte pas (milk, bread). Les pommes se comptent.', 2: '« How lot of » n\'existe pas.', 3: '« How any » n\'existe pas : pour demander une quantité, on dit how much ou how many.' },
      explain: 'Les pommes se comptent : **How many** + pluriel. → How **many** apples are there? (Combien de pommes y a-t-il ?)', say: 'How many apples are there?', level: 1 },
    { id: 'en5-q-08', q: 'Complète : How ___ sugar is there?', choices: ['many', 'much', 'lot', 'some'], answer: 1, topic: 'How much / how many', sec: 'en5-s-quantite',
      why: { 0: '**many** va avec un pluriel qu\'on peut compter ; le sucre ne se compte pas.', 2: '« How lot » n\'existe pas.', 3: '« How some » n\'existe pas.' },
      explain: 'Le sucre ne se compte pas : **How much**. → How **much** sugar is there? (Combien de sucre y a-t-il ?)', say: 'How much sugar is there?', level: 1 },
    { id: 'en5-q-09', q: 'Que veut dire « How much is it? » ?', choices: ['Combien y en a-t-il ?', 'C\'est combien ?', 'C\'est à qui ?', 'Il y en a beaucoup ?'], answer: 1, topic: 'How much / how many', sec: 'en5-s-quantite',
      why: { 0: 'Pour compter des objets, on dirait « How many are there? ».', 2: '« C\'est à qui ? » se dit « Whose is it? ».', 3: '« Il y en a beaucoup ? » se dit « Are there a lot? ».' },
      explain: '**How much is it?** sert à demander un **prix** : C\'est combien ?', say: 'How much is it?', level: 1 },
    { id: 'en5-q-10', q: 'Quelle phrase est correcte ?', choices: ['There are a lot apples.', 'There are much apples.', 'There is a lot apples.', 'There are a lot of apples.'], answer: 3, topic: 'A lot of', sec: 'en5-s-quantite',
      why: { 0: 'Il manque **of** : a lot **of**.', 1: '**much** va avec ce qui ne se compte pas ; avec des pommes, on dit a lot of.', 2: 'Il manque **of**, et avec un pluriel, il faut **are**.' },
      explain: '**a lot of** = beaucoup de (avec un pluriel ou un indénombrable). → There are **a lot of** apples. (Il y a beaucoup de pommes.)', say: 'There are a lot of apples.', level: 1 },
    { id: 'en5-q-11', q: 'Complète : Two ___ of water, please.', choices: ['slices', 'bottles', 'packets', 'kilos'], answer: 1, topic: 'Les quantités', sec: 'en5-s-courses',
      why: { 0: '**slices** = des tranches (de pain, de jambon). On ne coupe pas l\'eau en tranches !', 2: '**packets** = des paquets (de pâtes, de sucre).', 3: 'L\'eau ne s\'achète pas au kilo.' },
      explain: 'L\'eau s\'achète en bouteille : Two **bottles** of water, please. (Deux bouteilles d\'eau, s\'il vous plaît.)', say: 'Two bottles of water, please.', level: 1 },
    { id: 'en5-q-12', q: 'Comment dit-on « une tranche de pain » ?', choices: ['a slice of bread', 'a slice bread', 'a bread slice of', 'a piece bread'], answer: 0, topic: 'Les quantités', sec: 'en5-s-courses',
      why: { 1: 'Il manque **of** entre la quantité et l\'aliment.', 2: 'L\'ordre est faux : quantité + **of** + aliment.', 3: 'Il manque **of** (a piece of bread = un morceau de pain).' },
      explain: 'Quantité + **of** + aliment : **a slice of bread** (une tranche de pain).', say: 'a slice of bread', level: 1 },
    { id: 'en5-q-13', q: 'Au restaurant, comment demander poliment l\'addition ?', choices: ['I want the addition.', 'Could I have the bill, please?', 'Give me the note.', 'Can I have the account?'], answer: 1, topic: 'Au restaurant', sec: 'en5-s-restaurant',
      why: { 0: '« addition » est un faux ami (c\'est une addition en calcul), et « I want » paraît impoli.', 2: '« Give me » est un ordre, et **note** veut dire un petit mot ou un billet de banque.', 3: '**account** veut dire un compte (en banque).' },
      explain: 'L\'addition = **the bill**. Pour être poli : **Could I have the bill, please?** (Pourrais-je avoir l\'addition, s\'il vous plaît ?)', say: 'Could I have the bill, please?', level: 1 },
    { id: 'en5-q-14', q: 'Que veut dire « I\'d like a coffee » ?', choices: ['J\'aime le café.', 'Je voudrais un café.', 'Je bois un café.', 'Je n\'aime pas le café.'], answer: 1, topic: 'Commander poliment', sec: 'en5-s-restaurant',
      why: { 0: '« J\'aime le café » se dit **I like coffee**, sans le \'d.', 2: '« Je bois » se dit I drink.', 3: '« Je n\'aime pas » se dit **I don\'t like**.' },
      explain: '**I\'d like** = I would like = **je voudrais**. → I\'d like a coffee. (Je voudrais un café.)', say: 'I\'d like a coffee, please.', level: 1 },
    { id: 'en5-q-15', q: 'Traduis « J\'aime le fromage » :', choices: ['I like the cheese.', 'I\'d like cheese.', 'I like cheese.', 'I like a cheese.'], answer: 2, topic: 'Dire ce qu\'on aime', sec: 'en5-s-repas',
      why: { 0: '« the cheese » désigne un fromage précis (ce fromage-là). Pour une généralité, pas d\'article.', 1: '**I\'d like** = je voudrais, pas j\'aime.', 3: '**cheese** ne se compte pas ici : pas de a.' },
      explain: 'Pour parler d\'un aliment en général, **pas d\'article** : **I like cheese.** (J\'aime le fromage.)', say: 'I like cheese.', level: 1 },
    { id: 'en5-q-16', q: 'Comment dit-on « l\'entrée » (le premier plat du repas) en anglais britannique ?', choices: ['the entry', 'the starter', 'the main course', 'the dessert'], answer: 1, topic: 'Au restaurant', sec: 'en5-s-restaurant',
      why: { 0: 'Faux ami : **entry** désigne le fait d\'entrer quelque part, pas un plat.', 2: '**the main course** = le plat principal.', 3: '**the dessert** = le dessert, à la fin du repas.' },
      explain: 'L\'entrée = **the starter** (appetizer aux États-Unis). → For the starter, I\'d like the soup. (En entrée, je voudrais la soupe.)', say: 'For the starter, I\'d like the soup.', level: 1 },
    { id: 'en5-q-17', q: 'À Londres, tu commandes des « chips ». Que t\'apporte-t-on ?', choices: ['Des chips en sachet', 'Des frites', 'Des biscuits', 'Du chocolat'], answer: 1, topic: 'Faux amis', sec: 'en5-s-vocab',
      why: { 0: 'Les chips en sachet se disent **crisps** en anglais britannique.', 2: 'Des biscuits se disent biscuits.', 3: 'Du chocolat se dit chocolate.' },
      explain: 'En anglais britannique, **chips** = les **frites** (fish and chips = poisson pané et frites). Les chips en sachet = **crisps**.', say: 'Fish and chips, please!', level: 2 },
    { id: 'en5-q-18', q: 'Comment dit-on « J\'ai soif » ?', choices: ['I have thirsty.', 'I\'m thirsty.', 'I\'ve got thirsty.', 'I thirsty.'], answer: 1, topic: 'Dire ce qu\'on aime', sec: 'en5-s-repas',
      why: { 0: 'En anglais, on utilise **be** (être) : on « est » assoiffé.', 2: 'have got veut dire posséder ; ici il faut **be** : I\'m thirsty.', 3: 'Il manque le verbe **be** : I am thirsty.' },
      explain: 'Faim et soif s\'expriment avec **be** : **I\'m thirsty.** (J\'ai soif.) · I\'m hungry. (J\'ai faim.)', say: 'I\'m thirsty.', level: 1 },
    { id: 'en5-q-19', q: 'Le serveur demande « Anything else? ». Que veut-il dire ?', choices: ['L\'addition ?', 'Une table pour deux ?', 'Autre chose ?', 'C\'est délicieux ?'], answer: 2, topic: 'Au restaurant', sec: 'en5-s-restaurant',
      why: { 0: '« L\'addition » se dit the bill.', 1: '« Une table pour deux » se dit a table for two.', 3: '« C\'est délicieux » se dit It\'s delicious.' },
      explain: '**Anything else?** = Autre chose ? On peut répondre : **That\'s all, thank you.** (Ce sera tout, merci.)', say: 'Anything else?', level: 1 },
    { id: 'en5-q-20', q: 'Écoute. Que demande la personne ?', listen: true, say: 'Can I have a glass of water, please?', choices: ['Un verre d\'eau', 'Une bouteille d\'eau', 'Un verre de vin', 'Une tasse de thé'], answer: 0, topic: 'Compréhension orale', sec: 'en5-s-restaurant',
      why: { 1: 'Une bouteille se dirait **a bottle**.', 2: 'Du vin se dirait **wine**.', 3: 'Une tasse de thé se dirait **a cup of tea**.' },
      explain: '**Can I have a glass of water, please?** = Je peux avoir un verre d\'eau, s\'il vous plaît ?', level: 1 },
    { id: 'en5-q-21', q: 'Écoute. Qu\'achète la personne ?', listen: true, say: 'A kilo of potatoes and some carrots, please.', choices: ['Des pommes et des carottes', 'Des tomates et des pommes de terre', 'Des pommes de terre et des carottes', 'Des pâtes et des carottes'], answer: 2, topic: 'Compréhension orale', sec: 'en5-s-courses',
      why: { 0: 'Des pommes se dirait **apples** ; ici on entend potatoes (pommes de terre).', 1: 'Il n\'y a pas de tomates (tomatoes) dans la phrase.', 3: 'Des pâtes se dirait **pasta**.' },
      explain: '**A kilo of potatoes and some carrots, please.** = Un kilo de pommes de terre et des carottes, s\'il vous plaît.', level: 2 },
    { id: 'en5-q-22', q: 'Écoute. Que dit la personne ?', listen: true, say: 'Sorry, there isn\'t any bread.', choices: ['Il y a beaucoup de pain.', 'Désolé, il n\'y a pas de pain.', 'Je n\'aime pas le pain.', 'Je voudrais du pain.'], answer: 1, topic: 'Compréhension orale', sec: 'en5-s-someany',
      why: { 0: '« Beaucoup de pain » se dirait a lot of bread.', 2: '« Je n\'aime pas » se dirait I don\'t like.', 3: '« Je voudrais » se dirait I\'d like.' },
      explain: '**Sorry, there isn\'t any bread.** = Désolé, il n\'y a pas de pain. (isn\'t any = pas de)', level: 2 },
    { id: 'en5-q-23', q: 'Écoute. Que commande la personne en dessert ?', listen: true, say: 'For dessert, I\'d like the chocolate cake, please.', choices: ['Une glace', 'Une salade de fruits', 'Des fraises', 'Le gâteau au chocolat'], answer: 3, topic: 'Compréhension orale', sec: 'en5-s-restaurant',
      why: { 0: 'Une glace se dirait **an ice cream**.', 1: 'Une salade de fruits se dirait **a fruit salad**.', 2: 'Des fraises se dirait **strawberries**.' },
      explain: '**For dessert, I\'d like the chocolate cake, please.** = En dessert, je voudrais le gâteau au chocolat, s\'il vous plaît.', level: 2 }
  ],
  exercises: [
    { id: 'en5-x-01', prompt: 'Complète avec a ou an : I\'d like ___ egg, please.', answers: ['an'], strict: true, topic: 'Dénombrable ou non', sec: 'en5-s-denombrable',
      hint: 'egg commence par quel son ?',
      explain: 'Devant un son voyelle : **an**. → I\'d like **an** egg, please. (Je voudrais un œuf, s\'il vous plaît.)',
      rule: '**a** + son consonne (a banana) · **an** + son voyelle (an egg, an apple, an orange)',
      mistakes: [{ text: 'a', msg: 'egg commence par un son voyelle (e) : on écrit **an** egg.' }, { text: 'some', msg: 'Un seul œuf : **an** egg. some s\'emploie avec un pluriel (some eggs) ou un indénombrable (some bread).' }],
      say: 'I\'d like an egg, please.', level: 1 },
    { id: 'en5-x-02', prompt: 'Complète avec some ou any : There is ___ cheese on the table.', answers: ['some'], strict: true, topic: 'Some et any', sec: 'en5-s-someany',
      hint: 'La phrase est-elle affirmative, négative ou une question ?',
      explain: 'Phrase affirmative → **some**. → There is **some** cheese on the table. (Il y a du fromage sur la table.)',
      rule: 'Affirmatif → **some** · négatif et question → **any**',
      mistakes: [{ text: 'any', msg: 'La phrase est affirmative : on utilise **some**. (any = négations et questions)' }, { text: 'a', msg: 'cheese ne se compte pas ici : pas de a. Pour dire « du fromage » : **some** cheese.' }],
      say: 'There is some cheese on the table.', level: 1 },
    { id: 'en5-x-03', prompt: 'Complète avec some ou any : There aren\'t ___ bananas.', answers: ['any'], strict: true, topic: 'Some et any', sec: 'en5-s-someany',
      hint: 'aren\'t = phrase négative.',
      explain: 'Phrase négative → **any**. → There aren\'t **any** bananas. (Il n\'y a pas de bananes.)',
      rule: 'Négatif (isn\'t, aren\'t, haven\'t) → **any**',
      mistakes: [{ text: 'some', msg: 'aren\'t rend la phrase négative : **some** devient **any**.' }, { text: 'no', msg: 'aren\'t est déjà négatif : pas de double négation. On dit There aren\'t **any** bananas (ou There are no bananas).' }],
      say: 'There aren\'t any bananas.', level: 1 },
    { id: 'en5-x-04', prompt: 'Complète avec some ou any : Is there ___ bread?', answers: ['any'], strict: true, topic: 'Some et any', sec: 'en5-s-someany',
      hint: 'C\'est une question simple (pas une demande polie).',
      explain: 'Dans une question simple → **any**. → Is there **any** bread? (Y a-t-il du pain ?)',
      rule: 'Question → **any** (sauf demande polie ou offre : Can I have some…? Would you like some…?)',
      mistakes: [{ text: 'some', msg: 'Dans une question simple, on utilise **any** : Is there any bread? (some se garde pour demander poliment ou proposer : Can I have some bread?)' }, { text: 'a', msg: 'bread ne se compte pas : pas de a. Dans une question : **any** bread.' }, { text: 'many', msg: '**many** va avec un pluriel (many eggs) ; bread ne se compte pas. Dans une question : **any** bread.' }],
      say: 'Is there any bread?', level: 1 },
    { id: 'en5-x-05', prompt: 'Complète avec some ou any : I\'d like ___ water, please.', answers: ['some'], strict: true, topic: 'Some et any', sec: 'en5-s-someany',
      hint: 'C\'est une demande polie, à la forme affirmative.',
      explain: 'Demande polie à l\'affirmatif → **some**. → I\'d like **some** water, please. (Je voudrais de l\'eau, s\'il vous plaît.)',
      rule: 'Affirmatif et demandes polies → **some**',
      mistakes: [{ text: 'any', msg: 'C\'est une demande polie à la forme affirmative : on utilise **some**.' }, { text: 'a', msg: 'water ne se compte pas : pas de a. On dit **some** water (ou a glass of water).' }],
      say: 'I\'d like some water, please.', level: 1 },
    { id: 'en5-x-06', prompt: 'Mets à la forme négative : There is some milk.', answers: ['There isn\'t any milk', 'There is no milk'], topic: 'Some et any', sec: 'en5-s-someany',
      hint: 'is → isn\'t, et some → ?',
      explain: 'Au négatif, **some** devient **any** : There **isn\'t any** milk. (Il n\'y a pas de lait.) On peut aussi dire : There is **no** milk.',
      rule: 'There is some… → There isn\'t **any**… (ou There is **no**…)',
      mistakes: [{ text: 'There isn\'t some milk', msg: 'Au négatif, **some** devient **any** : There isn\'t **any** milk.' }, { text: 'There isn\'t no milk', msg: 'Double négation ! isn\'t est déjà négatif : There isn\'t **any** milk (ou There is no milk).' }],
      say: 'There isn\'t any milk.', level: 1 },
    { id: 'en5-x-07', prompt: 'Pose la question : There are some eggs. → ___ ?', answers: ['Are there any eggs'], topic: 'Some et any', sec: 'en5-s-someany',
      hint: 'are passe devant there, et some devient… ?',
      explain: 'Question : **Are there** + **any**… ? → **Are there any** eggs? (Y a-t-il des œufs ?)',
      rule: 'There are some… → **Are there any**… ?',
      mistakes: [{ text: 'There are any eggs', msg: 'Pour poser la question, **are** passe devant there : **Are there** any eggs?' }, { text: 'Is there any eggs', msg: 'eggs est au pluriel : **Are** there any eggs?' }],
      say: 'Are there any eggs?', level: 1 },
    { id: 'en5-x-08', prompt: 'Complète avec much ou many : How ___ eggs have you got?', answers: ['many'], strict: true, topic: 'How much / how many', sec: 'en5-s-quantite',
      hint: 'Les œufs se comptent-ils ?',
      explain: 'Les œufs se comptent : **How many** + pluriel. → How **many** eggs have you got? (Combien d\'œufs avez-vous ?)',
      rule: '**How many** + pluriel (ce qui se compte) · **How much** + indénombrable',
      mistakes: [{ text: 'much', msg: 'eggs se compte (one egg, two eggs) : How **many**.' }, { text: 'a lot of', msg: 'Après How, on met **much** ou **many**. Ici : How **many** eggs…? (a lot of = beaucoup de)' }],
      say: 'How many eggs have you got?', level: 1 },
    { id: 'en5-x-09', prompt: 'Complète avec much ou many : How ___ milk is there?', answers: ['much'], strict: true, topic: 'How much / how many', sec: 'en5-s-quantite',
      hint: 'Le lait se compte-t-il ?',
      explain: 'Le lait ne se compte pas : **How much**. → How **much** milk is there? (Combien de lait y a-t-il ?)',
      rule: '**How much** + indénombrable (milk, bread, water)',
      mistakes: [{ text: 'many', msg: 'milk ne se compte pas : How **much** milk. (many va avec un pluriel : how many eggs)' }, { text: 'a lot of', msg: 'Après How, on met **much** ou **many**. Ici : How **much** milk…?' }],
      say: 'How much milk is there?', level: 1 },
    { id: 'en5-x-10', prompt: 'Traduis : Combien de lait y a-t-il ?', answers: ['How much milk is there'], topic: 'How much / how many', sec: 'en5-s-quantite',
      hint: 'How much + milk + is there ?',
      explain: '**How much** + indénombrable + **is there** ? → **How much milk is there?**',
      rule: 'How much / How many + nom + is there / are there ?',
      mistakes: [{ text: 'How many milk is there', msg: 'milk ne se compte pas : How **much** milk.' }, { text: 'How much milk there is', msg: 'Dans une question, **is** passe devant there : How much milk **is there**?' }],
      say: 'How much milk is there?', level: 2 },
    { id: 'en5-x-11', prompt: 'Complète : How ___ is it? — It\'s three euros.', answers: ['much'], strict: true, topic: 'How much / how many', sec: 'en5-s-quantite',
      hint: 'On demande un prix.',
      explain: 'Pour demander un prix : **How much** is it? (C\'est combien ?) — It\'s three euros. (C\'est trois euros.)',
      rule: 'Le prix : **How much is it?** · **How much are they?**',
      mistakes: [{ text: 'many', msg: 'Pour un prix, on dit toujours How **much** (How many sert à compter des objets).' }, { text: 'cost', msg: 'Le mot manquant est **much** : How much is it? (Combien ça coûte se dit aussi How much does it cost?)' }],
      say: 'How much is it?', level: 1 },
    { id: 'en5-x-12', prompt: 'Traduis : Il y a beaucoup de pommes.', answers: ['There are a lot of apples', 'There are lots of apples', 'There are many apples'], topic: 'A lot of', sec: 'en5-s-quantite',
      hint: 'beaucoup de = a lot of',
      explain: '**a lot of** = beaucoup de. Avec un pluriel : **There are** a lot of apples.',
      rule: '**a lot of** + pluriel ou indénombrable (a lot of apples, a lot of water)',
      mistakes: [{ text: 'There are a lot apples', msg: 'N\'oublie pas **of** : a lot **of** apples.' }, { text: 'There are much apples', msg: '**much** va avec ce qui ne se compte pas. Pour des pommes : **a lot of** apples.' }, { text: 'There is a lot of apples', msg: 'apples est au pluriel : **There are** a lot of apples.' }],
      say: 'There are a lot of apples.', level: 1 },
    { id: 'en5-x-13', prompt: 'Traduis : Je bois beaucoup de thé.', answers: ['I drink a lot of tea', 'I drink lots of tea'], topic: 'A lot of', sec: 'en5-s-quantite',
      hint: 'boire = drink ; beaucoup de = a lot of',
      explain: '**a lot of** marche aussi avec un indénombrable : I drink **a lot of** tea.',
      rule: '**a lot of** + indénombrable (tea, water, bread) ou pluriel',
      mistakes: [{ text: 'I drink a lot tea', msg: 'N\'oublie pas **of** : a lot **of** tea.' }, { text: 'I drink many tea', msg: '**many** va avec un pluriel qu\'on peut compter. Le thé ne se compte pas : a lot **of** tea.' }],
      say: 'I drink a lot of tea.', level: 1 },
    { id: 'en5-x-14', prompt: 'Traduis : une bouteille d\'eau', answers: ['a bottle of water'], topic: 'Les quantités', sec: 'en5-s-courses',
      hint: 'quantité + of + aliment',
      explain: 'Quantité + **of** + aliment : **a bottle of water** (une bouteille d\'eau).',
      rule: 'a bottle **of** · a kilo **of** · a packet **of** · a slice **of**',
      mistakes: [{ text: 'a bottle water', msg: 'Il faut **of** entre la quantité et l\'aliment : a bottle **of** water.' }, { text: 'a water bottle', msg: 'a water bottle = une bouteille à eau (le récipient, une gourde). Une bouteille **d\'**eau : a bottle **of** water.' }],
      say: 'a bottle of water', level: 1 },
    { id: 'en5-x-15', prompt: 'Traduis : un paquet de pâtes', answers: ['a packet of pasta', 'a pack of pasta'], topic: 'Les quantités', sec: 'en5-s-courses',
      hint: 'pâtes = pasta (indénombrable)',
      explain: '**a packet of pasta** : pasta reste au singulier (indénombrable).',
      rule: 'Quantité + **of** + aliment (un indénombrable ne prend pas de -s)',
      mistakes: [{ text: 'a packet of pastas', msg: 'pasta est indénombrable : pas de -s. → a packet of **pasta**.' }, { text: 'a packet pasta', msg: 'Il faut **of** : a packet **of** pasta.' }],
      say: 'a packet of pasta', level: 1 },
    { id: 'en5-x-16', prompt: 'Traduis : deux tranches de fromage', answers: ['two slices of cheese'], topic: 'Les quantités', sec: 'en5-s-courses',
      hint: 'C\'est « tranche » qui se met au pluriel, pas « fromage ».',
      explain: 'On met au pluriel la quantité : **two slices of cheese**. cheese reste au singulier.',
      rule: 'two slice**s** of cheese · three bottle**s** of milk (le -s va sur la quantité)',
      mistakes: [{ text: 'two slice of cheese', msg: 'Deux tranches : slice prend un -s → two **slices** of cheese.' }, { text: 'two slices of cheeses', msg: 'cheese reste au singulier (indénombrable) : two slices of **cheese**.' }],
      say: 'two slices of cheese', level: 1 },
    { id: 'en5-x-17', prompt: 'Traduis : un kilo de tomates', answers: ['a kilo of tomatoes', 'one kilo of tomatoes', 'a kilogram of tomatoes'], topic: 'Les quantités', sec: 'en5-s-courses',
      hint: 'Attention au pluriel de tomato.',
      explain: '**a kilo of tomatoes** : tomato → tomato**es** au pluriel.',
      rule: 'tomato → tomato**es** · potato → potato**es**',
      mistakes: [{ text: 'a kilo of tomatos', msg: 'Le pluriel de tomato prend **-es** : tomato**es** (comme potatoes).' }, { text: 'a kilo tomatoes', msg: 'Il faut **of** : a kilo **of** tomatoes.' }],
      say: 'a kilo of tomatoes', level: 1 },
    { id: 'en5-x-18', prompt: 'Écris le pluriel : one strawberry → two ___', answers: ['strawberries'], strict: true, topic: 'Dénombrable ou non', sec: 'en5-s-denombrable',
      hint: 'Le mot finit par consonne + y.',
      explain: 'Consonne + **y** → **ies** : strawberry → **strawberries**. (une fraise → deux fraises)',
      rule: 'Consonne + y → **ies** (strawberry → strawberries)',
      mistakes: [{ text: 'strawberrys', msg: 'Après une consonne (r), le **y** devient **ies** : strawberr**ies**.' }, { text: 'strawberry', msg: 'Il y en a deux : il faut le pluriel → **strawberries**.' }],
      say: 'two strawberries', level: 1 },
    { id: 'en5-x-19', prompt: 'Corrige la phrase : I\'d like a bread, please.', answers: ['I\'d like some bread, please', 'I\'d like bread, please', 'I\'d like a slice of bread, please'], topic: 'Dénombrable ou non', sec: 'en5-s-denombrable',
      hint: 'bread se compte-t-il ?',
      explain: 'bread ne se compte pas : pas de a. → I\'d like **some** bread, please. (Je voudrais du pain, s\'il vous plaît.)',
      rule: 'Indénombrable : **some** bread, jamais « a bread » ni « breads »',
      mistakes: [{ text: 'I\'d like a bread, please', msg: 'C\'est la phrase de départ : bread ne se compte pas, on ne peut pas mettre a. Utilise **some**.' }, { text: 'I\'d like some breads, please', msg: 'bread n\'a pas de pluriel : **some bread**.' }],
      say: 'I\'d like some bread, please.', level: 1 },
    { id: 'en5-x-20', prompt: 'Commande poliment. Traduis : Je voudrais un café, s\'il vous plaît.', answers: ['I\'d like a coffee, please', 'Can I have a coffee, please', 'Could I have a coffee, please'], topic: 'Commander poliment', sec: 'en5-s-restaurant',
      hint: 'je voudrais = I\'d like',
      explain: '**I\'d like** (= I would like) = je voudrais. → **I\'d like a coffee, please.** On peut aussi dire : Can I have a coffee, please?',
      rule: 'Commander : **I\'d like…** · **Can I have…?** · **Could I have…?** + please',
      mistakes: [{ text: 'I like a coffee, please', msg: '**I like** = j\'aime. Pour « je voudrais » : **I\'d like** (= I would like).' }, { text: 'I want a coffee, please', msg: '« I want » (je veux) paraît impoli en anglais. Pour commander : **I\'d like** a coffee, please.' }],
      say: 'I\'d like a coffee, please.', level: 1 },
    { id: 'en5-x-21', prompt: 'Traduis : Pourrais-je avoir l\'addition, s\'il vous plaît ?', answers: ['Could I have the bill, please', 'Can I have the bill, please', 'Could I have the check, please', 'Could we have the bill, please', 'Can we have the bill, please'], topic: 'Au restaurant', sec: 'en5-s-restaurant',
      hint: 'Pourrais-je avoir… ? = Could I have… ?',
      explain: '**Could I have the bill, please?** (the bill = l\'addition ; the check aux États-Unis)',
      rule: 'Pour payer : **Could I have the bill, please?**',
      mistakes: [{ text: 'Could I have the addition, please', msg: 'Faux ami : l\'addition au restaurant = **the bill** (the check aux États-Unis).' }, { text: 'I could have the bill, please', msg: 'Dans une question, **Could** passe devant le sujet : **Could I** have…?' }],
      say: 'Could I have the bill, please?', level: 1 },
    { id: 'en5-x-22', prompt: 'Remets dans l\'ordre : have / I / can / the menu / ?', answers: ['Can I have the menu'], topic: 'Commander poliment', sec: 'en5-s-restaurant',
      hint: 'Une question commence par can.',
      explain: 'Question : **Can** + sujet + verbe : **Can I have the menu?** (Je peux avoir la carte ?)',
      rule: 'Question polie : **Can I have** + chose + **please** ?',
      mistakes: [{ text: 'I can have the menu', msg: 'C\'est une question : **Can** se place avant le sujet → **Can I** have the menu?' }, { text: 'Can have I the menu', msg: 'Ordre : Can + sujet (I) + have → **Can I have** the menu?' }],
      say: 'Can I have the menu, please?', level: 1 },
    { id: 'en5-x-23', prompt: 'Traduis : J\'aime le thé.', answers: ['I like tea'], topic: 'Dire ce qu\'on aime', sec: 'en5-s-repas',
      hint: 'Le thé en général : faut-il un article ?',
      explain: 'Pour une généralité, **pas d\'article** : **I like tea.**',
      rule: 'J\'aime le / les… (en général) = I like + nom **sans the**',
      mistakes: [{ text: 'I like the tea', msg: 'Pour parler du thé en général, **pas de the** : I like tea. « the tea » = ce thé-là.' }, { text: 'I\'d like tea', msg: '**I\'d like** = je voudrais. J\'aime = **I like**.' }, { text: 'I love tea', msg: '**I love** = j\'adore. J\'aime = **I like**.' }],
      say: 'I like tea.', level: 1 },
    { id: 'en5-x-24', prompt: 'Traduis : Je n\'aime pas les bananes.', answers: ['I don\'t like bananas'], topic: 'Dire ce qu\'on aime', sec: 'en5-s-repas',
      hint: 'Je n\'aime pas = I don\'t like ; les bananes en général : pluriel sans the.',
      explain: '**I don\'t like bananas.** Pour une généralité : pluriel, sans the.',
      rule: 'I like / I don\'t like + pluriel ou indénombrable, **sans the**',
      mistakes: [{ text: 'I don\'t like the bananas', msg: 'Généralité : **pas de the**. Le pluriel suffit → I don\'t like **bananas**.' }, { text: 'I not like bananas', msg: 'La négation se fait avec **don\'t** : I **don\'t** like… (formule à retenir, expliquée au chapitre 6).' }, { text: 'I don\'t like banana', msg: 'Pour parler des bananes en général, on met le **pluriel** : bananas.' }],
      say: 'I don\'t like bananas.', level: 1 },
    { id: 'en5-x-25', prompt: 'Traduis : J\'ai faim.', answers: ['I\'m hungry'], topic: 'Dire ce qu\'on aime', sec: 'en5-s-repas',
      hint: 'En anglais, on « est » affamé.',
      explain: 'Faim et soif se disent avec **be** : **I\'m hungry.** (I\'m thirsty = J\'ai soif.)',
      rule: 'J\'ai faim = **I\'m hungry** · J\'ai soif = **I\'m thirsty**',
      mistakes: [{ text: 'I have hungry', msg: 'En anglais, on utilise **be** : **I\'m hungry** (mot à mot « je suis affamé »).' }, { text: 'I am hunger', msg: 'hunger est le nom (la faim). Avec be, il faut l\'adjectif **hungry** : I\'m hungry.' }],
      say: 'I\'m hungry.', level: 1 },
    { id: 'en5-x-26', prompt: 'Traduis : un verre de vin', answers: ['a glass of wine'], topic: 'Les quantités', sec: 'en5-s-courses',
      hint: 'quantité + of + boisson',
      explain: '**a glass of wine** = un verre de vin (plein).',
      rule: 'a glass **of** wine · a cup **of** tea · a bottle **of** water',
      mistakes: [{ text: 'a wine glass', msg: 'a wine glass = un verre **à** vin (l\'objet vide). Un verre **de** vin : a glass **of** wine.' }, { text: 'a glass wine', msg: 'Il faut **of** : a glass **of** wine.' }],
      say: 'a glass of wine', level: 1 }
  ]
});
