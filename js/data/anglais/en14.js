/* Anglais — chapitre 14 (niveau 2) : Raconter une histoire (le passé continu was / were + -ing, when / while, les mots pour raconter, used to, souvenirs, incidents, police, émotions) */
APP.registerChapter({
  id: 'en14', subject: 'anglais', num: 14, tier: 2,
  title: 'Raconter une histoire', subtitle: 'le passé continu · when, while · first, then, suddenly · used to · incidents et émotions',
  vocabSec: 'en14-s-vocab',
  sections: [
    {
      id: 'en14-s-forme', title: 'Le passé continu : was / were + -ing',
      html: `
<p>Tu connais déjà deux choses : le <b>présent continu</b> (<span class="say">I'm working</span> — je suis en train de travailler, chapitre 7) et <b>was / were</b>, le passé de to be (chapitre 8). Mets-les ensemble et tu obtiens le <b>passé continu</b> : <b>was / were + verbe en -ing</b>.</p>
<p>Il dit ce qui était <b>en train de se passer</b> à un moment du passé. En français, c'est souvent l'<b>imparfait</b> : <span class="say">At eight o'clock, I was having breakfast.</span> — À huit heures, je prenais mon petit-déjeuner.</p>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">I was working</span></td><td>je travaillais, j'étais en train de travailler</td></tr>
<tr><td><span class="say">you were working</span></td><td>tu travaillais</td></tr>
<tr><td><span class="say">he was working</span> · <span class="say">she was working</span></td><td>il travaillait · elle travaillait</td></tr>
<tr><td><span class="say">it was raining</span></td><td>il pleuvait</td></tr>
<tr><td><span class="say">we were working</span></td><td>nous travaillions</td></tr>
<tr><td><span class="say">they were working</span></td><td>ils travaillaient</td></tr></table>
<h3>Négation et question</h3>
<ul>
<li>Négation : <span class="say">wasn't</span> / <span class="say">weren't</span> + -ing. <span class="say">We weren't watching TV.</span> — Nous ne regardions pas la télé.</li>
<li>Question : <b>Was / Were</b> passe devant le sujet. <span class="say">What were you doing at ten o'clock?</span> — Que faisais-tu à dix heures ?</li>
<li>Réponses courtes : <span class="say">Yes, I was.</span> / <span class="say">No, I wasn't.</span> · <span class="say">Yes, they were.</span> / <span class="say">No, they weren't.</span></li>
</ul>
<h3>Pour planter le décor d'une histoire</h3>
<p><span class="say">It was a cold morning. It was snowing and the children were playing in the garden.</span> — C'était un matin froid. Il neigeait et les enfants jouaient dans le jardin.</p>
<div class="callout key"><b>À retenir</b> <b>was</b> (I, he, she, it) / <b>were</b> (you, we, they) + verbe en <b>-ing</b> = une action <b>en cours</b> à un moment du passé.</div>
<div class="callout warn"><b>Piège</b> L'imparfait français ne se traduit pas toujours par le passé continu. Pour un <b>état</b>, on garde le prétérit : « j'étais fatigué » = <span class="say">I was tired</span> ; « j'avais une voiture » = <span class="say">I had a car</span> (jamais « I was having a car »). Pour une <b>habitude</b> (« je jouais au foot tous les samedis »), on utilise <span class="say">used to</span> (voir plus loin).</div>`
    },
    {
      id: 'en14-s-when-while', title: 'when et while : une action interrompue',
      html: `
<p>Une histoire mélange souvent deux temps du passé :</p>
<ul>
<li>le <b>passé continu</b> pour l'action <b>longue</b>, celle qui était en cours ;</li>
<li>le <b>prétérit</b> pour l'action <b>courte</b>, celle qui arrive au milieu et l'interrompt.</li>
</ul>
<table><tr><th>Action longue (passé continu)</th><th>Action courte (prétérit)</th></tr>
<tr><td><span class="say">I was cooking</span><br>Je faisais la cuisine</td><td><span class="say">when the phone rang.</span><br>quand le téléphone a sonné.</td></tr>
<tr><td><span class="say">We were having dinner</span><br>Nous dînions</td><td><span class="say">when the lights went out.</span><br>quand la lumière s'est éteinte.</td></tr>
<tr><td><span class="say">She was walking to the station</span><br>Elle allait à pied à la gare</td><td><span class="say">when she slipped on the ice.</span><br>quand elle a glissé sur le verglas.</td></tr></table>
<h3>while : pendant que</h3>
<p><span class="say">while</span> introduit en général l'action <b>longue</b> : <span class="say">While I was shopping, someone stole my bag.</span> — Pendant que je faisais les courses, quelqu'un a volé mon sac.</p>
<p>Deux actions longues en même temps : <span class="say">While I was cooking, my husband was reading.</span> — Pendant que je faisais la cuisine, mon mari lisait.</p>
<h3>Deux prétérits : les actions se suivent</h3>
<p><span class="say">When the phone rang, I answered it.</span> — Quand le téléphone a sonné, j'ai répondu. (D'abord le téléphone sonne, ensuite je réponds.)</p>
<div class="callout key"><b>À retenir</b> <b>while</b> + passé continu (l'action longue) · <b>when</b> + prétérit (l'action courte, le plus souvent).</div>
<div class="callout warn"><b>Piège</b> <span class="say">while</span> = « pendant que » + une phrase. « Pendant » + une durée se dit <span class="say">for</span> (<span class="say">for two hours</span>, pendant deux heures) ; « pendant » + un nom se dit <span class="say">during</span> (<span class="say">during the film</span>, pendant le film).</div>`
    },
    {
      id: 'en14-s-raconter', title: 'Les mots pour raconter une histoire',
      html: `
<p>Pour raconter une histoire dans l'ordre, l'anglais utilise des petits mots, souvent au début de la phrase, suivis d'une virgule.</p>
<table><tr><th>Anglais</th><th>Français</th><th>À quoi ça sert</th></tr>
<tr><td><span class="say">One day…</span></td><td>Un jour…</td><td>commencer l'histoire</td></tr>
<tr><td><span class="say">At first…</span></td><td>Au début…</td><td>la situation de départ</td></tr>
<tr><td><span class="say">First…</span></td><td>D'abord…</td><td>la 1re étape</td></tr>
<tr><td><span class="say">Then…</span></td><td>Puis, ensuite…</td><td>l'étape suivante</td></tr>
<tr><td><span class="say">After that…</span></td><td>Après ça…</td><td>l'étape suivante</td></tr>
<tr><td><span class="say">Suddenly…</span></td><td>Soudain, tout à coup…</td><td>une surprise</td></tr>
<tr><td><span class="say">Luckily…</span></td><td>Heureusement…</td><td>une bonne chose</td></tr>
<tr><td><span class="say">Unfortunately…</span></td><td>Malheureusement…</td><td>une mauvaise chose</td></tr>
<tr><td><span class="say">Finally…</span> · <span class="say">In the end…</span></td><td>Enfin… · Finalement…</td><td>la fin</td></tr></table>
<h3>Une petite histoire</h3>
<p><span class="say">One day last winter, I was driving to my sister's house.</span> — Un jour, l'hiver dernier, j'allais en voiture chez ma sœur.<br>
<span class="say">It was snowing and there was ice on the road.</span> — Il neigeait et il y avait du verglas sur la route.<br>
<span class="say">Suddenly, a dog ran across the road.</span> — Soudain, un chien a traversé la route en courant.<br>
<span class="say">I tried to stop, but my car slipped and hit a tree.</span> — J'ai essayé de m'arrêter, mais ma voiture a glissé et a heurté un arbre.<br>
<span class="say">Luckily, I wasn't hurt.</span> — Heureusement, je n'étais pas blessé.<br>
<span class="say">After that, a kind man called the police.</span> — Après ça, un monsieur gentil a appelé la police.<br>
<span class="say">In the end, I arrived three hours late!</span> — Finalement, je suis arrivé avec trois heures de retard !</p>
<div class="callout key"><b>À retenir</b> Le décor au <b>passé continu</b> (<span class="say">It was snowing</span>), les événements au <b>prétérit</b> (<span class="say">a dog ran across the road</span>), et des petits mots pour relier : <b>then, after that, suddenly, finally</b>.</div>
<div class="callout warn"><b>Faux amis</b> <span class="say">eventually</span> = finalement, au bout du compte (et non « éventuellement », qui se dit <span class="say">possibly</span>). <span class="say">actually</span> = en fait (et non « actuellement », qui se dit <span class="say">at the moment</span>).</div>`
    },
    {
      id: 'en14-s-used-to', title: 'used to : les habitudes du passé',
      html: `
<p>Pour parler d'une <b>habitude du passé</b>, ou d'une chose qui était vraie <b>avant</b> et qui ne l'est plus, on utilise <b>used to + base verbale</b>. En français, on dit souvent « avant, je… » avec l'imparfait.</p>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">I used to play football.</span></td><td>Avant, je jouais au football (je n'y joue plus).</td></tr>
<tr><td><span class="say">We used to live in the countryside.</span></td><td>Avant, nous habitions à la campagne.</td></tr>
<tr><td><span class="say">My father used to smoke.</span></td><td>Mon père fumait (il a arrêté).</td></tr>
<tr><td><span class="say">There used to be a cinema here.</span></td><td>Avant, il y avait un cinéma ici.</td></tr></table>
<p><b>used to est le même pour toutes les personnes</b> : <span class="say">I used to</span>, <span class="say">she used to</span>, <span class="say">they used to</span>.</p>
<h3>Négation et question : avec did</h3>
<ul>
<li>Négation : <span class="say">didn't use to</span> (sans d !) : <span class="say">I didn't use to like vegetables.</span> — Avant, je n'aimais pas les légumes.</li>
<li>Question : <span class="say">Did you use to walk to school?</span> — Avant, tu allais à l'école à pied ?</li>
<li>Réponses courtes : <span class="say">Yes, I did.</span> / <span class="say">No, I didn't.</span></li>
</ul>
<div class="callout tip"><b>Prononciation</b> <span class="say">used to</span> se dit « youss-tou » : le d ne s'entend pas.</div>
<div class="callout key"><b>À retenir</b> <b>used to + base verbale</b> = avant, autrefois (et plus maintenant). Négation et question avec <b>did</b> : <span class="say">didn't use to</span>, <span class="say">Did you use to…?</span></div>
<div class="callout warn"><b>Pièges</b> used to n'existe qu'au passé : pour une habitude d'aujourd'hui, on dit <span class="say">I usually get up at seven.</span> (D'habitude, je me lève à sept heures.) Et après did, on écrit <b>use</b>, sans d : <span class="say">Did you use to…?</span></div>`
    },
    {
      id: 'en14-s-incidents', title: 'Petits incidents, accidents et police',
      html: `
<p>Pour raconter un incident ou un accident, on commence souvent par la question <span class="say">What happened?</span> — Que s'est-il passé ?</p>
<h3>Les petits incidents</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">I dropped my phone.</span></td><td>J'ai fait tomber mon téléphone.</td></tr>
<tr><td><span class="say">I spilled coffee on my shirt.</span></td><td>J'ai renversé du café sur ma chemise.</td></tr>
<tr><td><span class="say">I slipped on the ice.</span></td><td>J'ai glissé sur le verglas.</td></tr>
<tr><td><span class="say">I fell off my bike.</span></td><td>Je suis tombé de vélo.</td></tr>
<tr><td><span class="say">I broke my arm.</span></td><td>Je me suis cassé le bras.</td></tr>
<tr><td><span class="say">A car crashed into a tree.</span></td><td>Une voiture a percuté un arbre.</td></tr></table>
<p><span class="say">Are you hurt?</span> — Tu es blessé ? · <span class="say">Is anyone injured?</span> — Il y a des blessés ? · <span class="say">Call an ambulance!</span> — Appelez une ambulance ! (Au Royaume-Uni, le numéro d'urgence est le 999 ; dans toute l'Europe, le 112.)</p>
<h3>À la police</h3>
<ul>
<li><span class="say">I'd like to report a theft.</span> — Je voudrais signaler un vol.</li>
<li><span class="say">Someone stole my wallet.</span> — Quelqu'un a volé mon portefeuille.</li>
<li><span class="say">When did it happen?</span> — Quand est-ce arrivé ?</li>
<li><span class="say">What were you doing?</span> — Que faisiez-vous ?</li>
<li><span class="say">I was sitting in a café.</span> — J'étais assis dans un café.</li>
<li><span class="say">Can you describe the thief?</span> — Pouvez-vous décrire le voleur ?</li>
<li><span class="say">He was tall. He was wearing a black jacket.</span> — Il était grand. Il portait une veste noire.</li>
<li><span class="say">He ran away.</span> — Il s'est enfui.</li>
</ul>
<div class="callout key"><b>À retenir</b> Pour décrire la scène : <b>passé continu</b> (<span class="say">I was sitting</span>, <span class="say">he was wearing</span>). Pour les événements : <b>prétérit</b> (<span class="say">He took my bag and ran away.</span>).</div>
<div class="callout warn"><b>Pièges</b> « voler » a deux traductions : <span class="say">steal</span> (prendre ce qui n'est pas à soi : steal, stole, stolen) et <span class="say">fly</span> (en avion). « Le vol » (le délit) = <span class="say">a theft</span> ; le vol en avion = <span class="say">a flight</span>. Et « crier » = <span class="say">shout</span> : <span class="say">cry</span> veut dire <b>pleurer</b>.</div>`
    },
    {
      id: 'en14-s-emotions', title: 'Les émotions : dire ce qu\'on a ressenti',
      html: `
<p>Pour raconter ce qu'on a ressenti : <b>was / were</b> + adjectif, ou <b>felt</b> (de feel, se sentir) + adjectif. <span class="say">I was so scared!</span> — J'ai eu tellement peur ! <span class="say">I felt embarrassed.</span> — Je me suis senti gêné.</p>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">scared</span> · <span class="say">frightened</span></td><td>effrayé, qui a peur</td></tr>
<tr><td><span class="say">surprised</span></td><td>surpris</td></tr>
<tr><td><span class="say">worried</span></td><td>inquiet</td></tr>
<tr><td><span class="say">nervous</span></td><td>stressé, anxieux</td></tr>
<tr><td><span class="say">embarrassed</span></td><td>gêné</td></tr>
<tr><td><span class="say">upset</span></td><td>bouleversé, contrarié</td></tr>
<tr><td><span class="say">relieved</span></td><td>soulagé</td></tr>
<tr><td><span class="say">excited</span></td><td>tout excité, impatient</td></tr>
<tr><td><span class="say">bored</span></td><td>qui s'ennuie</td></tr>
<tr><td><span class="say">proud</span></td><td>fier</td></tr></table>
<h3>-ed ou -ing ?</h3>
<p>Beaucoup d'adjectifs existent en deux versions :</p>
<ul>
<li><b>-ed</b> = ce que la <b>personne ressent</b> : <span class="say">I'm bored.</span> — Je m'ennuie.</li>
<li><b>-ing</b> = ce qui <b>provoque</b> l'émotion : <span class="say">The film is boring.</span> — Le film est ennuyeux.</li>
</ul>
<table><tr><th>La personne ressent (-ed)</th><th>La chose provoque (-ing)</th></tr>
<tr><td><span class="say">I was bored.</span> — Je m'ennuyais.</td><td><span class="say">It was boring.</span> — C'était ennuyeux.</td></tr>
<tr><td><span class="say">I was excited.</span> — J'étais tout excité.</td><td><span class="say">It was exciting.</span> — C'était passionnant.</td></tr>
<tr><td><span class="say">I was surprised.</span> — J'étais surpris.</td><td><span class="say">It was surprising.</span> — C'était surprenant.</td></tr>
<tr><td><span class="say">I was interested.</span> — J'étais intéressé.</td><td><span class="say">It was interesting.</span> — C'était intéressant.</td></tr></table>
<h3>Réagir</h3>
<p><span class="say">Don't worry!</span> — Ne t'inquiète pas ! · <span class="say">What a relief!</span> — Quel soulagement ! · <span class="say">I'm so proud of you!</span> — Je suis si fier de toi !</p>
<div class="callout key"><b>À retenir</b> <b>-ed</b> = je ressens (<span class="say">I'm bored.</span>) · <b>-ing</b> = ça provoque (<span class="say">It's boring.</span>).</div>
<div class="callout warn"><b>Faux amis</b> <span class="say">I'm boring.</span> = je suis ennuyeux (et non « je m'ennuie ») ! <span class="say">nervous</span> = stressé, anxieux (« énervé » se dit <span class="say">annoyed</span>). <span class="say">excited</span> = enthousiaste, impatient : en anglais, le mot n'a rien de gênant.</div>`
    },
    {
      id: 'en14-s-vocab', title: 'Vocabulaire : souvenirs, incidents, police, émotions',
      html: `
<p>Les mots pour raconter ses souvenirs, un incident ou une histoire. Clique sur un mot pour l'entendre.</p>
<h3>Souvenirs d'enfance</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">childhood</span></td><td>l'enfance</td></tr>
<tr><td><span class="say">a memory</span></td><td>un souvenir (dans la tête)</td></tr>
<tr><td><span class="say">to remember</span></td><td>se souvenir de, se rappeler</td></tr>
<tr><td><span class="say">to grow up</span></td><td>grandir</td></tr>
<tr><td><span class="say">the countryside</span></td><td>la campagne</td></tr>
<tr><td><span class="say">a village</span></td><td>un village</td></tr>
<tr><td><span class="say">a farm</span></td><td>une ferme</td></tr>
<tr><td><span class="say">a school</span></td><td>une école</td></tr>
<tr><td><span class="say">a toy</span></td><td>un jouet</td></tr>
<tr><td><span class="say">a tree</span></td><td>un arbre</td></tr>
<tr><td><span class="say">a dog</span></td><td>un chien</td></tr>
<tr><td><span class="say">strict</span></td><td>sévère</td></tr>
<tr><td><span class="say">naughty</span></td><td>pas sage, vilain (enfant)</td></tr></table>
<h3>Petits incidents et accidents</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">to happen</span></td><td>arriver, se passer</td></tr>
<tr><td><span class="say">an accident</span></td><td>un accident</td></tr>
<tr><td><span class="say">to drop</span></td><td>faire tomber, laisser tomber</td></tr>
<tr><td><span class="say">to spill</span></td><td>renverser (un liquide)</td></tr>
<tr><td><span class="say">to slip</span></td><td>glisser</td></tr>
<tr><td><span class="say">ice</span></td><td>la glace, le verglas</td></tr>
<tr><td><span class="say">injured</span></td><td>blessé</td></tr>
<tr><td><span class="say">an ambulance</span></td><td>une ambulance</td></tr>
<tr><td><span class="say">to crash</span></td><td>percuter, avoir un accident</td></tr>
<tr><td><span class="say">lucky</span></td><td>qui a de la chance</td></tr></table>
<h3>À la police</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">a police officer</span></td><td>un policier, une policière</td></tr>
<tr><td><span class="say">a thief</span></td><td>un voleur, une voleuse</td></tr>
<tr><td><span class="say">a theft</span></td><td>un vol (le délit)</td></tr>
<tr><td><span class="say">to describe</span></td><td>décrire</td></tr>
<tr><td><span class="say">to shout</span></td><td>crier</td></tr>
<tr><td><span class="say">to run away</span></td><td>s'enfuir</td></tr></table>
<h3>Raconter</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">one day</span></td><td>un jour</td></tr>
<tr><td><span class="say">at first</span></td><td>au début</td></tr>
<tr><td><span class="say">after that</span></td><td>après ça, ensuite</td></tr>
<tr><td><span class="say">suddenly</span></td><td>soudain, tout à coup</td></tr>
<tr><td><span class="say">finally</span></td><td>enfin, finalement</td></tr>
<tr><td><span class="say">luckily</span></td><td>heureusement</td></tr>
<tr><td><span class="say">unfortunately</span></td><td>malheureusement</td></tr>
<tr><td><span class="say">while</span></td><td>pendant que</td></tr>
<tr><td><span class="say">used to</span></td><td>avant, autrefois (une habitude passée)</td></tr></table>
<h3>Les émotions</h3>
<p>Voir le tableau de la fiche « Les émotions » : <span class="say">scared</span>, <span class="say">surprised</span>, <span class="say">worried</span>, <span class="say">nervous</span>, <span class="say">embarrassed</span>, <span class="say">upset</span>, <span class="say">relieved</span>, <span class="say">excited</span>, <span class="say">bored</span>, <span class="say">proud</span>.</p>
<div class="callout key"><b>À retenir</b> <span class="say">a thief</span> (un voleur), pluriel <span class="say">thieves</span>. <span class="say">a theft</span> (un vol). <span class="say">lucky</span> s'utilise avec to be : <span class="say">You were lucky!</span> — Tu as eu de la chance !</div>
<div class="callout warn"><b>Faux amis</b> <span class="say">a souvenir</span> = un objet rapporté de voyage ; un souvenir (dans la tête) = <span class="say">a memory</span>. <span class="say">a campaign</span> = une campagne (électorale) ; la campagne (les champs) = <span class="say">the countryside</span>. Et sévère (un parent, un professeur) = <span class="say">strict</span>.</div>`
    },
    {
      id: 'en14-s-pieges', title: 'Les pièges des francophones',
      html: `
<ul>
<li><b>was / were</b> : <span class="say">I was</span>, <span class="say">he was</span> ; <span class="say">you were</span>, <span class="say">we were</span>, <span class="say">they were</span>.</li>
<li><b>Oublier -ing</b> : « I was cook » est faux → <span class="say">I was cooking</span>.</li>
<li><b>did + passé continu</b> : « Did you sleeping? » est faux → <span class="say">Were you sleeping?</span></li>
<li><b>L'imparfait d'un état</b> : « j'avais faim » = <span class="say">I was hungry</span> ; « j'avais une voiture » = <span class="say">I had a car</span> (pas de -ing).</li>
<li><b>when / while</b> : l'action courte qui interrompt est au <b>prétérit</b> : <span class="say">I was reading when the phone rang.</span> (pas « when the phone was ringing »).</li>
<li><b>used to</b> : <span class="say">I used to live</span> (avec d), mais <span class="say">I didn't use to</span> et <span class="say">Did you use to…?</span> (sans d).</li>
<li><b>remember of</b> : on dit <span class="say">I remember my first day.</span> (sans « of »).</li>
<li><b>souvenir</b> : un souvenir (dans la tête) = <span class="say">a memory</span>.</li>
<li><b>crier / pleurer</b> : crier = <span class="say">shout</span> ; <span class="say">cry</span> = pleurer.</li>
<li><b>bored / boring</b> : <span class="say">I'm bored.</span> = je m'ennuie ; <span class="say">I'm boring.</span> = je suis ennuyeux !</li>
<li><b>eventually, actually</b> = finalement, en fait (et non « éventuellement », « actuellement »).</li>
</ul>
<div class="callout key"><b>À retenir</b> Décor et action en cours → was / were + -ing · événement → prétérit · habitude passée → used to + base verbale.</div>`
    }
  ],
  words: [
    // Souvenirs d'enfance
    { en: 'childhood', fr: 'l\'enfance', pos: 'n', cat: 'Souvenirs d\'enfance', ex: 'I had a happy childhood.', exFr: 'J\'ai eu une enfance heureuse.', level: 1 },
    { en: 'memory', fr: 'le souvenir (dans la tête)', pos: 'n', cat: 'Souvenirs d\'enfance', ex: 'I have good memories of my childhood.', exFr: 'J\'ai de bons souvenirs de mon enfance.', level: 1, note: 'Faux ami : a souvenir = un objet rapporté de voyage. memory veut aussi dire « la mémoire ».' },
    { en: 'remember', fr: 'se souvenir de, se rappeler', pos: 'v', cat: 'Souvenirs d\'enfance', ex: 'I remember my first bike.', exFr: 'Je me souviens de mon premier vélo.', level: 1, note: 'Sans « of » : I remember my first day (et non « remember of »).' },
    { en: 'grow up', fr: 'grandir', pos: 'v', cat: 'Souvenirs d\'enfance', ex: 'I grew up in a small village.', exFr: 'J\'ai grandi dans un petit village.', level: 1, note: 'grow, grew, grown (chapitre 9) : I grew up in…' },
    { en: 'countryside', fr: 'la campagne', pos: 'n', cat: 'Souvenirs d\'enfance', ex: 'My grandparents lived in the countryside.', exFr: 'Mes grands-parents habitaient à la campagne.', level: 1, note: 'À la campagne = in the countryside. (a campaign = une campagne électorale)' },
    { en: 'village', fr: 'le village', pos: 'n', cat: 'Souvenirs d\'enfance', ex: 'There used to be a baker\'s in the village.', exFr: 'Avant, il y avait une boulangerie dans le village.', level: 1 },
    { en: 'farm', fr: 'la ferme', pos: 'n', cat: 'Souvenirs d\'enfance', ex: 'My uncle had a farm.', exFr: 'Mon oncle avait une ferme.', level: 1, note: 'Dans une ferme = on a farm.' },
    { en: 'school', fr: 'l\'école', pos: 'n', cat: 'Souvenirs d\'enfance', ex: 'I used to walk to school.', exFr: 'J\'allais à l\'école à pied.', level: 1, note: 'Aller à l\'école = go to school (sans the).' },
    { en: 'toy', fr: 'le jouet', pos: 'n', cat: 'Souvenirs d\'enfance', ex: 'Children didn\'t have many toys.', exFr: 'Les enfants n\'avaient pas beaucoup de jouets.', level: 2 },
    { en: 'tree', fr: 'l\'arbre', pos: 'n', cat: 'Souvenirs d\'enfance', ex: 'We used to climb trees.', exFr: 'Nous grimpions aux arbres.', level: 1 },
    { en: 'dog', fr: 'le chien', pos: 'n', cat: 'Souvenirs d\'enfance', ex: 'We used to have a big dog.', exFr: 'Avant, nous avions un gros chien.', level: 1 },
    { en: 'strict', fr: 'sévère', pos: 'adj', cat: 'Souvenirs d\'enfance', ex: 'My teachers were very strict.', exFr: 'Mes professeurs étaient très sévères.', level: 2, note: 'Pour un parent, un professeur : strict.' },
    { en: 'naughty', fr: 'pas sage, vilain (enfant)', pos: 'adj', cat: 'Souvenirs d\'enfance', ex: 'I was a naughty little boy!', exFr: 'J\'étais un petit garçon pas sage !', level: 3, note: 'Se dit surtout des enfants.' },
    // Petits incidents et accidents
    { en: 'happen', fr: 'arriver, se passer', pos: 'v', cat: 'Petits incidents et accidents', sec: 'en14-s-incidents', ex: 'The accident happened at six o\'clock.', exFr: 'L\'accident s\'est produit à six heures.', level: 1, note: 'What happened? = Que s\'est-il passé ? (sans did)' },
    { en: 'accident', fr: 'l\'accident', pos: 'n', cat: 'Petits incidents et accidents', sec: 'en14-s-incidents', ex: 'I saw an accident yesterday.', exFr: 'J\'ai vu un accident hier.', level: 1, note: 'Avoir un accident = have an accident.' },
    { en: 'drop', fr: 'faire tomber, laisser tomber', pos: 'v', cat: 'Petits incidents et accidents', sec: 'en14-s-incidents', ex: 'I dropped my phone.', exFr: 'J\'ai fait tomber mon téléphone.', level: 1, note: 'Prétérit : dropped (le p est doublé).' },
    { en: 'spill', fr: 'renverser (un liquide)', pos: 'v', cat: 'Petits incidents et accidents', sec: 'en14-s-incidents', ex: 'I spilled coffee on my shirt.', exFr: 'J\'ai renversé du café sur ma chemise.', level: 2, note: 'Prétérit : spilled (ou spilt en britannique).' },
    { en: 'slip', fr: 'glisser', pos: 'v', cat: 'Petits incidents et accidents', sec: 'en14-s-incidents', ex: 'She slipped on the ice.', exFr: 'Elle a glissé sur le verglas.', level: 2, note: 'Prétérit : slipped (le p est doublé).' },
    { en: 'ice', fr: 'la glace, le verglas', pos: 'n', cat: 'Petits incidents et accidents', sec: 'en14-s-incidents', ex: 'Be careful, there is ice on the road.', exFr: 'Attention, il y a du verglas sur la route.', level: 2, note: 'La glace qu\'on mange = ice cream.' },
    { en: 'injured', fr: 'blessé', pos: 'adj', cat: 'Petits incidents et accidents', sec: 'en14-s-incidents', alt: ['hurt'], ex: 'Is anyone injured?', exFr: 'Y a-t-il des blessés ?', level: 2, note: 'On dit aussi hurt : Are you hurt? = Tu es blessé ?' },
    { en: 'ambulance', fr: 'l\'ambulance', pos: 'n', cat: 'Petits incidents et accidents', sec: 'en14-s-incidents', ex: 'The ambulance arrived very quickly.', exFr: 'L\'ambulance est arrivée très vite.', level: 1 },
    { en: 'crash', fr: 'percuter, avoir un accident', pos: 'v', cat: 'Petits incidents et accidents', sec: 'en14-s-incidents', ex: 'A car crashed into a tree.', exFr: 'Une voiture a percuté un arbre.', level: 2, note: 'a crash = un accident (de voiture, d\'avion).' },
    { en: 'lucky', fr: 'qui a de la chance', pos: 'adj', cat: 'Petits incidents et accidents', sec: 'en14-s-incidents', ex: 'You were lucky!', exFr: 'Tu as eu de la chance !', level: 1, note: 'Avoir de la chance = be lucky (avec to be).' },
    // À la police
    { en: 'police officer', fr: 'le policier, la policière', pos: 'n', cat: 'À la police', sec: 'en14-s-incidents', alt: ['policeman', 'policewoman'], ex: 'A police officer helped me.', exFr: 'Un policier m\'a aidé.', level: 1, note: 'On dit aussi policeman, policewoman.' },
    { en: 'thief', fr: 'le voleur, la voleuse', pos: 'n', cat: 'À la police', sec: 'en14-s-incidents', ex: 'The police caught the thief.', exFr: 'La police a attrapé le voleur.', level: 2, note: 'Pluriel : thieves. Voler = steal, stole, stolen.' },
    { en: 'theft', fr: 'le vol (le délit)', pos: 'n', cat: 'À la police', sec: 'en14-s-incidents', ex: 'There have been many thefts in this street.', exFr: 'Il y a eu beaucoup de vols dans cette rue.', level: 2, note: 'Le vol en avion = a flight.' },
    { en: 'describe', fr: 'décrire', pos: 'v', cat: 'À la police', sec: 'en14-s-incidents', ex: 'Can you describe the man?', exFr: 'Pouvez-vous décrire l\'homme ?', level: 2 },
    { en: 'shout', fr: 'crier', pos: 'v', cat: 'À la police', sec: 'en14-s-incidents', ex: 'A man was shouting in the street.', exFr: 'Un homme criait dans la rue.', level: 2, note: 'Piège : cry = pleurer. Crier = shout.' },
    { en: 'run away', fr: 's\'enfuir', pos: 'v', cat: 'À la police', sec: 'en14-s-incidents', ex: 'The thief ran away with my bag.', exFr: 'Le voleur s\'est enfui avec mon sac.', level: 2, note: 'run, ran, run : He ran away.' },
    // Raconter une histoire
    { en: 'one day', fr: 'un jour', pos: 'x', cat: 'Raconter une histoire', sec: 'en14-s-raconter', ex: 'One day, my father came home with a dog.', exFr: 'Un jour, mon père est rentré à la maison avec un chien.', level: 1 },
    { en: 'at first', fr: 'au début', pos: 'x', cat: 'Raconter une histoire', sec: 'en14-s-raconter', ex: 'At first, I didn\'t like my new school.', exFr: 'Au début, je n\'aimais pas ma nouvelle école.', level: 2, note: 'At first = au début (la situation change ensuite). First = d\'abord.' },
    { en: 'after that', fr: 'après ça, ensuite', pos: 'x', cat: 'Raconter une histoire', sec: 'en14-s-raconter', ex: 'We had lunch. After that, we went to the beach.', exFr: 'Nous avons déjeuné. Après ça, nous sommes allés à la plage.', level: 1 },
    { en: 'suddenly', fr: 'soudain, tout à coup', pos: 'adv', cat: 'Raconter une histoire', sec: 'en14-s-raconter', ex: 'Suddenly, it started to rain.', exFr: 'Soudain, il s\'est mis à pleuvoir.', level: 1 },
    { en: 'finally', fr: 'enfin, finalement', pos: 'adv', cat: 'Raconter une histoire', sec: 'en14-s-raconter', alt: ['in the end'], ex: 'Finally, the bus arrived.', exFr: 'Enfin, le bus est arrivé.', level: 1, note: 'Faux ami : eventually = finalement (et non « éventuellement »).' },
    { en: 'luckily', fr: 'heureusement', pos: 'adv', cat: 'Raconter une histoire', sec: 'en14-s-raconter', alt: ['fortunately'], ex: 'Luckily, I had my phone.', exFr: 'Heureusement, j\'avais mon téléphone.', level: 1 },
    { en: 'unfortunately', fr: 'malheureusement', pos: 'adv', cat: 'Raconter une histoire', sec: 'en14-s-raconter', ex: 'Unfortunately, the shop was closed.', exFr: 'Malheureusement, le magasin était fermé.', level: 2 },
    { en: 'while', fr: 'pendant que', pos: 'conj', cat: 'Raconter une histoire', sec: 'en14-s-when-while', ex: 'While I was cooking, the phone rang.', exFr: 'Pendant que je faisais la cuisine, le téléphone a sonné.', level: 1, note: 'while + une phrase. Pendant + durée = for ; pendant + nom = during.' },
    { en: 'used to', fr: 'avant, autrefois (habitude passée)', pos: 'x', cat: 'Raconter une histoire', sec: 'en14-s-used-to', ex: 'I used to play the piano.', exFr: 'Avant, je jouais du piano.', level: 1, note: 'Se prononce « youss-tou ». Négation : didn\'t use to (sans d).' },
    // Les émotions
    { en: 'scared', fr: 'effrayé, qui a peur', pos: 'adj', cat: 'Les émotions', sec: 'en14-s-emotions', alt: ['frightened', 'afraid'], ex: 'The children were scared of the dog.', exFr: 'Les enfants avaient peur du chien.', level: 1, note: 'Avoir peur de = be scared of (ou be afraid of).' },
    { en: 'surprised', fr: 'surpris', pos: 'adj', cat: 'Les émotions', sec: 'en14-s-emotions', ex: 'I was very surprised to see him.', exFr: 'J\'ai été très surpris de le voir.', level: 1, note: 'surprising = surprenant.' },
    { en: 'worried', fr: 'inquiet', pos: 'adj', cat: 'Les émotions', sec: 'en14-s-emotions', ex: 'Your mother was worried about you.', exFr: 'Ta mère était inquiète pour toi.', level: 1, note: 'Ne t\'inquiète pas ! = Don\'t worry!' },
    { en: 'nervous', fr: 'stressé, anxieux', pos: 'adj', cat: 'Les émotions', sec: 'en14-s-emotions', ex: 'I was nervous before the exam.', exFr: 'J\'étais stressé avant l\'examen.', level: 2, note: 'Faux ami : nervous = stressé, anxieux. Énervé = annoyed.' },
    { en: 'embarrassed', fr: 'gêné', pos: 'adj', cat: 'Les émotions', sec: 'en14-s-emotions', ex: 'He was embarrassed because he forgot her name.', exFr: 'Il était gêné parce qu\'il avait oublié son prénom.', level: 2, note: 'Attention à l\'orthographe : deux r et deux s.' },
    { en: 'upset', fr: 'bouleversé, contrarié', pos: 'adj', cat: 'Les émotions', sec: 'en14-s-emotions', ex: 'She was very upset after the accident.', exFr: 'Elle était très bouleversée après l\'accident.', level: 2 },
    { en: 'relieved', fr: 'soulagé', pos: 'adj', cat: 'Les émotions', sec: 'en14-s-emotions', ex: 'I was relieved when I found my keys.', exFr: 'J\'ai été soulagé quand j\'ai retrouvé mes clés.', level: 2, note: 'Quel soulagement ! = What a relief!' },
    { en: 'excited', fr: 'tout excité, impatient', pos: 'adj', cat: 'Les émotions', sec: 'en14-s-emotions', ex: 'The children are excited about the holidays.', exFr: 'Les enfants sont tout excités à l\'idée des vacances.', level: 2, note: 'excited = enthousiaste, impatient. exciting = passionnant.' },
    { en: 'bored', fr: 'qui s\'ennuie', pos: 'adj', cat: 'Les émotions', sec: 'en14-s-emotions', ex: 'I was bored at school.', exFr: 'Je m\'ennuyais à l\'école.', level: 1, note: 'I\'m bored = je m\'ennuie. Mais I\'m boring = je suis ennuyeux !' },
    { en: 'proud', fr: 'fier', pos: 'adj', cat: 'Les émotions', sec: 'en14-s-emotions', ex: 'My parents were very proud of me.', exFr: 'Mes parents étaient très fiers de moi.', level: 1, note: 'Fier de = proud of.' }
  ],
  phrases: [
    { en: 'What happened?', fr: 'Que s\'est-il passé ?', alt: ['What\'s happened?'], cat: 'Raconter un incident', sec: 'en14-s-incidents', note: 'Sans did : What est le sujet.' },
    { en: 'What were you doing?', fr: 'Qu\'est-ce que tu faisais ?', cat: 'Le passé continu', sec: 'en14-s-forme' },
    { en: 'It was raining.', fr: 'Il pleuvait.', cat: 'Le passé continu', sec: 'en14-s-forme' },
    { en: 'I was cooking when the phone rang.', fr: 'Je faisais la cuisine quand le téléphone a sonné.', cat: 'Le passé continu', sec: 'en14-s-when-while', note: 'Action longue (was cooking) interrompue par une action courte (rang).' },
    { en: 'While I was walking, I saw an accident.', fr: 'Pendant que je marchais, j\'ai vu un accident.', cat: 'Le passé continu', sec: 'en14-s-when-while' },
    { en: 'Someone stole my bag.', fr: 'Quelqu\'un a volé mon sac.', alt: ['Somebody stole my bag.'], cat: 'Raconter un incident', sec: 'en14-s-incidents', note: 'steal, stole, stolen.' },
    { en: 'I\'d like to report a theft.', fr: 'Je voudrais signaler un vol.', cat: 'Raconter un incident', sec: 'en14-s-incidents' },
    { en: 'I slipped on the ice.', fr: 'J\'ai glissé sur le verglas.', cat: 'Raconter un incident', sec: 'en14-s-incidents' },
    { en: 'I fell off my bike.', fr: 'Je suis tombé de vélo.', cat: 'Raconter un incident', sec: 'en14-s-incidents', note: 'fall, fell, fallen. Tomber de = fall off.' },
    { en: 'Are you hurt?', fr: 'Tu es blessé ?', alt: ['Are you injured?'], cat: 'Raconter un incident', sec: 'en14-s-incidents' },
    { en: 'Suddenly, the lights went out.', fr: 'Soudain, la lumière s\'est éteinte.', cat: 'Raconter une histoire', sec: 'en14-s-raconter' },
    { en: 'In the end, everything was fine.', fr: 'Finalement, tout s\'est bien passé.', alt: ['Finally, everything was fine.'], cat: 'Raconter une histoire', sec: 'en14-s-raconter' },
    { en: 'I used to live in the countryside.', fr: 'Avant, j\'habitais à la campagne.', cat: 'Les habitudes du passé', sec: 'en14-s-used-to' },
    { en: 'We used to have a dog.', fr: 'Avant, nous avions un chien.', cat: 'Les habitudes du passé', sec: 'en14-s-used-to' },
    { en: 'Did you use to walk to school?', fr: 'Avant, tu allais à l\'école à pied ?', cat: 'Les habitudes du passé', sec: 'en14-s-used-to', note: 'Après did : use (sans d).' },
    { en: 'I didn\'t use to like vegetables.', fr: 'Avant, je n\'aimais pas les légumes.', cat: 'Les habitudes du passé', sec: 'en14-s-used-to' },
    { en: 'There used to be a cinema here.', fr: 'Avant, il y avait un cinéma ici.', cat: 'Les habitudes du passé', sec: 'en14-s-used-to' },
    { en: 'When I was a child, we lived on a farm.', fr: 'Quand j\'étais enfant, nous habitions dans une ferme.', cat: 'Les habitudes du passé', sec: 'en14-s-used-to' },
    { en: 'I remember my first day at school.', fr: 'Je me souviens de mon premier jour d\'école.', cat: 'Les habitudes du passé', sec: 'en14-s-vocab' },
    { en: 'I was so scared!', fr: 'J\'ai eu tellement peur !', alt: ['I was so frightened!'], cat: 'Les émotions', sec: 'en14-s-emotions' },
    { en: 'I felt so embarrassed!', fr: 'J\'étais tellement gêné !', alt: ['I was so embarrassed!'], cat: 'Les émotions', sec: 'en14-s-emotions' },
    { en: 'What a relief!', fr: 'Quel soulagement !', cat: 'Les émotions', sec: 'en14-s-emotions' },
    { en: 'Don\'t worry, it doesn\'t matter.', fr: 'Ne t\'inquiète pas, ce n\'est pas grave.', cat: 'Les émotions', sec: 'en14-s-emotions' },
    { en: 'I\'m so proud of you!', fr: 'Je suis si fier de toi !', cat: 'Les émotions', sec: 'en14-s-emotions' }
  ],
  quiz: [
    { id: 'en14-q-01', q: 'Complète : At eight o\'clock, I ___ having breakfast.', choices: ['were', 'am', 'was', 'did'], answer: 2, topic: 'Le passé continu', sec: 'en14-s-forme',
      why: { 0: '« were » va avec you, we, they. Avec I : was.', 1: '« am » est le présent ; at eight o\'clock parle ici d\'un moment passé.', 3: 'did ne s\'utilise pas devant un verbe en -ing.' },
      explain: 'Passé continu : **was / were + -ing**. Avec I : **was**. → At eight o\'clock, I **was having** breakfast. (À huit heures, je prenais mon petit-déjeuner.)', say: 'At eight o\'clock, I was having breakfast.', level: 1 },
    { id: 'en14-q-02', q: 'Complète : The children ___ playing in the garden.', choices: ['was', 'were', 'is', 'did'], answer: 1, topic: 'Le passé continu', sec: 'en14-s-forme',
      why: { 0: 'The children = they (pluriel) : were, pas was.', 2: '« is » est le présent, et il va avec he, she, it.', 3: 'did ne s\'utilise pas devant un verbe en -ing.' },
      explain: 'The children = they → **were** + -ing. → The children **were playing** in the garden. (Les enfants jouaient dans le jardin.)', say: 'The children were playing in the garden.', level: 1 },
    { id: 'en14-q-03', q: 'Complète : It was ___ when we left the house.', choices: ['raining', 'rain', 'rained', 'rains'], answer: 0, topic: 'Le passé continu', sec: 'en14-s-forme',
      why: { 1: 'Après was, il faut la forme en -ing pour une action en cours.', 2: '« was rained » n\'est pas possible ici : on dit It was raining.', 3: '« rains » est le présent simple.' },
      explain: 'was + verbe en **-ing**. → It **was raining** when we left the house. (Il pleuvait quand nous sommes sortis de la maison.)', say: 'It was raining when we left the house.', level: 1 },
    { id: 'en14-q-04', q: 'Forme négative : We ___ watching TV.', choices: ['didn\'t', 'wasn\'t', 'don\'t', 'weren\'t'], answer: 3, topic: 'Le passé continu', sec: 'en14-s-forme',
      why: { 0: 'didn\'t va avec la base (didn\'t watch), pas avec -ing.', 1: '« wasn\'t » va avec I, he, she, it. Avec we : weren\'t.', 2: 'don\'t est le présent, et il ne va pas avec -ing.' },
      explain: 'Négation du passé continu : **wasn\'t / weren\'t** + -ing. Avec we : **weren\'t**. → We **weren\'t watching** TV. (Nous ne regardions pas la télé.)', say: 'We weren\'t watching TV.', level: 1 },
    { id: 'en14-q-05', q: 'Comment demander « Que faisais-tu ? »', choices: ['What did you doing?', 'What was you doing?', 'What were you doing?', 'What you were doing?'], answer: 2, topic: 'Le passé continu', sec: 'en14-s-forme',
      why: { 0: 'did ne va pas avec -ing : c\'est were qui fait la question.', 1: 'Avec you : were, pas was.', 3: 'Dans la question, were passe devant le sujet.' },
      explain: 'Question : mot interrogatif + **were** + sujet + -ing ? → **What were you doing?** (Que faisais-tu ?)', say: 'What were you doing?', level: 1 },
    { id: 'en14-q-06', q: 'Réponse courte : Were you sleeping? — No, I ___.', choices: ['wasn\'t', 'weren\'t', 'didn\'t', 'don\'t'], answer: 0, topic: 'Le passé continu', sec: 'en14-s-forme',
      why: { 1: 'Avec I : wasn\'t (weren\'t va avec you, we, they).', 2: 'didn\'t répond à une question avec Did.', 3: 'don\'t répond à une question au présent avec Do.' },
      explain: 'La réponse courte reprend was / were, accordé avec le sujet : I → **wasn\'t**. → Were you sleeping? — No, I **wasn\'t**. (Tu dormais ? — Non.)', say: 'Were you sleeping? No, I wasn\'t.', level: 2 },
    { id: 'en14-q-07', q: 'Complète : I was cooking ___ the phone rang.', choices: ['while', 'during', 'when', 'then'], answer: 2, topic: 'when et while', sec: 'en14-s-when-while',
      why: { 0: 'while va avec l\'action longue. « the phone rang » est une action courte → when.', 1: 'during va devant un nom (during the film), pas devant une phrase.', 3: 'then veut dire « ensuite » : il ne relie pas les deux actions ainsi.' },
      explain: 'Action longue (was cooking) interrompue par une action courte au prétérit, avec **when**. → I was cooking **when** the phone rang. (Je faisais la cuisine quand le téléphone a sonné.)', say: 'I was cooking when the phone rang.', level: 1 },
    { id: 'en14-q-08', q: 'Complète (pendant que) : ___ I was walking to the station, I saw an accident.', choices: ['During', 'While', 'For', 'After'], answer: 1, topic: 'when et while', sec: 'en14-s-when-while',
      why: { 0: 'during va devant un nom (during the holidays), pas devant une phrase.', 2: 'for va devant une durée (for two hours).', 3: 'after = après : ce n\'est pas « pendant que ».' },
      explain: 'Pendant que = **while** + passé continu. → **While** I was walking to the station, I saw an accident. (Pendant que j\'allais à la gare, j\'ai vu un accident.)', say: 'While I was walking to the station, I saw an accident.', level: 1 },
    { id: 'en14-q-09', q: 'Traduis « Elle dormait quand le téléphone a sonné » : She ___ when the phone rang.', choices: ['slept', 'is sleeping', 'sleeps', 'was sleeping'], answer: 3, topic: 'when et while', sec: 'en14-s-when-while',
      why: { 0: '« She slept when the phone rang » voudrait dire qu\'elle s\'est endormie au moment où le téléphone a sonné.', 1: '« is sleeping » est le présent continu.', 2: '« sleeps » est le présent simple.' },
      explain: 'L\'action longue en cours → passé continu : **was sleeping**. → She **was sleeping** when the phone rang. (Elle dormait quand le téléphone a sonné.)', say: 'She was sleeping when the phone rang.', level: 2 },
    { id: 'en14-q-10', q: 'Que veut dire « When the phone rang, I answered it » ?', choices: ['Je répondais au téléphone quand il a sonné.', 'Quand le téléphone a sonné, j\'ai répondu.', 'Pendant que le téléphone sonnait, je dormais.', 'Le téléphone sonnait, mais je n\'ai pas répondu.'], answer: 1, topic: 'when et while', sec: 'en14-s-when-while',
      why: { 0: '« Je répondais » serait I was answering. Ici, les deux verbes sont au prétérit.', 2: 'Il n\'est pas question de dormir (sleep).', 3: 'answered = j\'ai répondu : la personne a bien répondu.' },
      explain: 'Deux **prétérits** = deux actions qui se suivent : le téléphone sonne (**rang**), puis je réponds (**answered**). → Quand le téléphone a sonné, j\'ai répondu.', say: 'When the phone rang, I answered it.', level: 2 },
    { id: 'en14-q-11', q: 'Que s\'est-il passé ? « I was reading when the lights went out. »', choices: ['La lumière s\'est éteinte pendant que la personne lisait.', 'La personne a commencé à lire après la coupure.', 'La personne a éteint la lumière pour lire.'], answer: 0, topic: 'when et while', sec: 'en14-s-when-while',
      why: { 1: 'was reading = elle était déjà en train de lire quand la lumière s\'est éteinte.', 2: 'went out = s\'est éteinte toute seule ; la personne n\'a rien éteint.' },
      explain: '**was reading** = l\'action longue (en cours) ; **went out** = l\'action courte qui l\'interrompt. → Je lisais quand la lumière s\'est éteinte.', say: 'I was reading when the lights went out.', level: 2 },
    { id: 'en14-q-12', q: 'Quel mot annonce la fin d\'une histoire ?', choices: ['First', 'Suddenly', 'Then', 'Finally'], answer: 3, topic: 'Raconter une histoire', sec: 'en14-s-raconter',
      why: { 0: 'First = d\'abord : c\'est le début.', 1: 'Suddenly = soudain : une surprise au milieu de l\'histoire.', 2: 'Then = puis, ensuite : une étape au milieu.' },
      explain: '**Finally** (enfin, finalement) ou **In the end** annonce la fin. L\'ordre : First → Then → After that → **Finally**.', say: 'Finally, we arrived home.', level: 1 },
    { id: 'en14-q-13', q: 'Que veut dire « suddenly » ?', choices: ['Heureusement', 'Soudain, tout à coup', 'Ensuite', 'Lentement'], answer: 1, topic: 'Raconter une histoire', sec: 'en14-s-raconter',
      why: { 0: 'Heureusement = luckily.', 2: 'Ensuite = then ou after that.', 3: 'Lentement = slowly.' },
      explain: '**suddenly** = soudain, tout à coup. → **Suddenly**, a dog ran across the road. (Soudain, un chien a traversé la route en courant.)', say: 'Suddenly, a dog ran across the road.', level: 1 },
    { id: 'en14-q-14', q: 'Faux ami ! Que veut dire « eventually » ?', choices: ['Éventuellement', 'Peut-être', 'Finalement, au bout du compte', 'Souvent'], answer: 2, topic: 'Raconter une histoire', sec: 'en14-s-raconter',
      why: { 0: 'C\'est le piège : « éventuellement » se dit possibly.', 1: 'Peut-être = maybe ou perhaps.', 3: 'Souvent = often.' },
      explain: '**eventually** = finalement, au bout du compte (après un long moment). → The bus **eventually** arrived. (Le bus a fini par arriver.)', say: 'The bus eventually arrived.', level: 3 },
    { id: 'en14-q-15', q: 'Complète : When I was young, I ___ play football every Saturday.', choices: ['used to', 'use to', 'was used to', 'am used to'], answer: 0, topic: 'used to', sec: 'en14-s-used-to',
      why: { 1: 'À l\'affirmatif, on écrit used to (avec d).', 2: 'Pas de was : une habitude passée se dit simplement used to + base.', 3: '« am used to » est une autre expression (être habitué à) et elle est au présent.' },
      explain: 'Habitude du passé : **used to + base verbale**. → When I was young, I **used to play** football every Saturday. (Quand j\'étais jeune, je jouais au foot tous les samedis.)', say: 'When I was young, I used to play football every Saturday.', level: 1 },
    { id: 'en14-q-16', q: 'Forme négative : I ___ like vegetables.', choices: ['didn\'t used to', 'don\'t used to', 'wasn\'t use to', 'didn\'t use to'], answer: 3, topic: 'used to', sec: 'en14-s-used-to',
      why: { 0: 'Après didn\'t, on écrit use, sans d (le passé est déjà dans did).', 1: 'don\'t est le présent : il faut didn\'t.', 2: 'Pas de was : la négation de used to se fait avec didn\'t.' },
      explain: 'Négation : **didn\'t use to** + base. → I **didn\'t use to like** vegetables. (Avant, je n\'aimais pas les légumes.)', say: 'I didn\'t use to like vegetables.', level: 2 },
    { id: 'en14-q-17', q: 'Quelle question est correcte ?', choices: ['Did you used to live here?', 'Did you use to live here?', 'Were you use to live here?', 'Do you used to live here?'], answer: 1, topic: 'used to', sec: 'en14-s-used-to',
      why: { 0: 'Après did, on écrit use, sans d.', 2: 'La question se fait avec did, pas avec were.', 3: 'do est le présent : pour le passé, did.' },
      explain: 'Question : **Did** + sujet + **use to** + base ? → **Did you use to live** here? (Avant, tu habitais ici ?)', say: 'Did you use to live here?', level: 2 },
    { id: 'en14-q-18', q: 'Que veut dire « There used to be a cinema here » ?', choices: ['Avant, il y avait un cinéma ici (il n\'existe plus).', 'Il y a un cinéma ici depuis longtemps.', 'Il va y avoir un cinéma ici.', 'On a l\'habitude d\'aller au cinéma ici.'], answer: 0, topic: 'used to', sec: 'en14-s-used-to',
      why: { 1: 'used to parle du passé, de ce qui n\'est plus vrai : le cinéma n\'existe plus.', 2: 'Le futur se dirait There will be ou There\'s going to be.', 3: 'Il ne s\'agit pas d\'une habitude d\'aujourd\'hui : used to = autrefois.' },
      explain: '**There used to be** = avant, il y avait (et plus maintenant). → There used to be a cinema here. (Avant, il y avait un cinéma ici.)', say: 'There used to be a cinema here.', level: 2 },
    { id: 'en14-q-19', q: 'Complète : The film was very long. I was ___.', choices: ['boring', 'bored', 'bore'], answer: 1, topic: 'Les émotions', sec: 'en14-s-emotions',
      why: { 0: 'I was boring = j\'étais ennuyeux ! Pour ce qu\'on ressent : -ed.', 2: 'bore n\'est pas l\'adjectif : il faut bored.' },
      explain: '**-ed** = ce que la personne ressent. → The film was very long. I was **bored**. (Le film était très long. Je m\'ennuyais.) Le film, lui, était **boring**.', say: 'The film was very long. I was bored.', level: 1 },
    { id: 'en14-q-20', q: 'Faux ami ! « I was nervous before the exam » veut dire :', choices: ['J\'étais énervé avant l\'examen.', 'J\'étais en colère avant l\'examen.', 'J\'étais fatigué avant l\'examen.', 'J\'étais stressé avant l\'examen.'], answer: 3, topic: 'Les émotions', sec: 'en14-s-emotions',
      why: { 0: 'C\'est le piège : énervé se dit annoyed.', 1: 'En colère se dit angry.', 2: 'Fatigué se dit tired.' },
      explain: '**nervous** = stressé, anxieux. → I was **nervous** before the exam. (J\'étais stressé avant l\'examen.)', say: 'I was nervous before the exam.', level: 2 },
    { id: 'en14-q-21', q: 'Complète : I ___ my first day at school. (je me souviens de)', choices: ['remember of', 'remind', 'souvenir', 'remember'], answer: 3, topic: 'Souvenirs d\'enfance', sec: 'en14-s-vocab',
      why: { 0: 'Pas de « of » après remember.', 1: 'remind = rappeler quelque chose à quelqu\'un.', 2: 'a souvenir est un nom (un objet-souvenir), pas un verbe.' },
      explain: 'Se souvenir de = **remember**, sans of. → I **remember** my first day at school. (Je me souviens de mon premier jour d\'école.)', say: 'I remember my first day at school.', level: 1 },
    { id: 'en14-q-22', q: 'Écoute. Que s\'est-il passé ?', listen: true, say: 'I was driving home when I saw the accident.', choices: ['La personne a eu un accident en rentrant.', 'La personne rentrait en voiture quand elle a vu l\'accident.', 'La personne a vu l\'accident à la télé.', 'La personne allait au travail à pied.'], answer: 1, topic: 'Compréhension orale', sec: 'en14-s-when-while',
      why: { 0: 'Elle n\'a pas eu l\'accident : elle l\'a vu (saw).', 2: 'Il n\'est pas question de télé : elle était en voiture (driving).', 3: 'driving home = elle rentrait chez elle en voiture.' },
      explain: '**I was driving home** = je rentrais en voiture (action longue) ; **when I saw the accident** = quand j\'ai vu l\'accident (action courte).', level: 1 },
    { id: 'en14-q-23', q: 'Écoute. Où était la personne quand on lui a volé son sac ?', listen: true, say: 'Someone stole my bag while I was sitting in the park.', choices: ['Dans un café', 'Au marché', 'Assise dans le parc', 'Dans le bus'], answer: 2, topic: 'Compréhension orale', sec: 'en14-s-incidents',
      why: { 0: 'Un café se dirait a café. On entend **the park**.', 1: 'Le marché se dirait the market. On entend **the park**.', 3: 'Le bus se dirait the bus. On entend **the park**.' },
      explain: '**Someone stole my bag** (quelqu\'un a volé mon sac) **while I was sitting in the park** (pendant que j\'étais assis(e) dans le parc).', level: 2 },
    { id: 'en14-q-24', q: 'Écoute. Que comprends-tu ?', listen: true, say: 'We used to live on a farm, but now we live in town.', choices: ['Ils habitent dans une ferme.', 'Ils vont s\'installer dans une ferme.', 'Ils ont toujours habité en ville.', 'Avant, ils habitaient dans une ferme ; maintenant, ils habitent en ville.'], answer: 3, topic: 'Compréhension orale', sec: 'en14-s-used-to',
      why: { 0: 'used to = avant : ils n\'y habitent plus (now we live in town).', 1: 'Il n\'est pas question du futur.', 2: 'Ils habitaient dans une ferme avant (used to live on a farm).' },
      explain: '**We used to live on a farm** = avant, nous habitions dans une ferme ; **but now we live in town** = mais maintenant, nous habitons en ville.', level: 2 },
    { id: 'en14-q-25', q: 'Écoute. Comment va la personne ?', listen: true, say: 'I slipped on the ice, but luckily I wasn\'t hurt.', choices: ['Elle a glissé, mais elle n\'est pas blessée.', 'Elle s\'est cassé le bras.', 'Elle est tombée de vélo.', 'Elle est à l\'hôpital.'], answer: 0, topic: 'Compréhension orale', sec: 'en14-s-incidents',
      why: { 1: 'On entend « luckily I **wasn\'t hurt** » : heureusement, je n\'étais pas blessé(e).', 2: 'Il n\'est pas question de vélo (bike) : elle a glissé sur le verglas (ice).', 3: 'Il n\'est pas question d\'hôpital (hospital).' },
      explain: '**I slipped on the ice** = j\'ai glissé sur le verglas ; **luckily I wasn\'t hurt** = heureusement, je n\'étais pas blessé(e).', level: 2 }
  ],
  exercises: [
    { id: 'en14-x-01', prompt: 'Complète au passé continu : I ___ (read) a book.', answers: ['was reading'], topic: 'Le passé continu', sec: 'en14-s-forme',
      hint: 'was / were + verbe en -ing.',
      explain: 'Avec I : **was** + -ing. → I **was reading** a book. (Je lisais un livre.)',
      rule: 'I / he / she / it + was + -ing · you / we / they + were + -ing',
      mistakes: [{ text: 'were reading', msg: 'Avec I : **was** (were va avec you, we, they).' }, { text: 'was read', msg: 'Au passé continu, le verbe prend **-ing** : was read**ing**.' }, { text: 'am reading', msg: '« am reading » est le présent continu. Au passé : I **was** reading.' }],
      say: 'I was reading a book.' },
    { id: 'en14-x-02', prompt: 'Complète au passé continu : They ___ (play) cards.', answers: ['were playing'], topic: 'Le passé continu', sec: 'en14-s-forme',
      hint: 'They : was ou were ?',
      explain: 'Avec they : **were** + -ing. → They **were playing** cards. (Ils jouaient aux cartes.)',
      rule: 'you / we / they + were + -ing',
      mistakes: [{ text: 'was playing', msg: 'Avec they : **were** (was va avec I, he, she, it).' }, { text: 'were play', msg: 'Il faut la forme en **-ing** : were play**ing**.' }, { text: 'played', msg: '« played » est le prétérit (ils ont joué). Pour « ils jouaient » (en cours) : **were playing**.' }],
      say: 'They were playing cards.' },
    { id: 'en14-x-03', prompt: 'Complète au passé continu : It ___ (snow) when we arrived.', answers: ['was snowing'], topic: 'Le passé continu', sec: 'en14-s-forme',
      hint: 'Le décor : il neigeait.',
      explain: 'Le décor, l\'action en cours → **was snowing**. → It **was snowing** when we arrived. (Il neigeait quand nous sommes arrivés.)',
      rule: 'Le décor d\'une histoire → passé continu',
      mistakes: [{ text: 'snowed', msg: '« snowed » = il a neigé. Pour « il neigeait » (en cours) : It **was snowing**.' }, { text: 'was snow', msg: 'Il faut la forme en **-ing** : was snow**ing**.' }, { text: 'is snowing', msg: '« is snowing » est le présent. Au passé : It **was** snowing.' }],
      say: 'It was snowing when we arrived.' },
    { id: 'en14-x-04', prompt: 'Mets à la forme négative : She was working.', answers: ['She wasn\'t working', 'She was not working'], topic: 'Le passé continu', sec: 'en14-s-forme',
      hint: 'was + not = …',
      explain: 'Négation : **wasn\'t** (was not) + -ing. → She **wasn\'t working**. (Elle ne travaillait pas.)',
      rule: 'Négation : wasn\'t / weren\'t + -ing',
      mistakes: [{ text: 'She didn\'t working', msg: 'Pas de did au passé continu : on ajoute **not** après was → She **wasn\'t** working.' }, { text: 'She wasn\'t work', msg: 'Le verbe garde **-ing** : She wasn\'t work**ing**.' }, { text: 'She weren\'t working', msg: 'Avec she : **wasn\'t** (weren\'t va avec you, we, they).' }],
      say: 'She wasn\'t working.' },
    { id: 'en14-x-05', prompt: 'Pose la question : You were sleeping. → ___?', answers: ['Were you sleeping'], topic: 'Le passé continu', sec: 'en14-s-forme',
      hint: 'Were passe devant le sujet.',
      explain: 'Question : **Were** + sujet + -ing ? → **Were you sleeping?** (Tu dormais ?)',
      rule: 'Question : Was / Were + sujet + -ing ?',
      mistakes: [{ text: 'Did you sleeping', msg: 'Pas de did au passé continu : c\'est **Were** qui passe devant le sujet → Were you sleeping?' }, { text: 'Was you sleeping', msg: 'Avec you : **Were** (was va avec I, he, she, it).' }, { text: 'You were sleeping', msg: 'Pour poser la question, **Were** passe devant le sujet : **Were you** sleeping?' }],
      say: 'Were you sleeping?' },
    { id: 'en14-x-06', prompt: 'Traduis : Qu\'est-ce que tu faisais ?', answers: ['What were you doing'], topic: 'Le passé continu', sec: 'en14-s-forme',
      hint: 'What + were + you + -ing ?',
      explain: '« Tu faisais » (en train de) → passé continu. → **What were you doing?** (Qu\'est-ce que tu faisais ?)',
      rule: 'What + was / were + sujet + -ing ?',
      mistakes: [{ text: 'What did you do', msg: 'What did you do? = Qu\'est-ce que tu **as fait** ? Pour « tu faisais » (en cours) : What **were** you **doing**?' }, { text: 'What was you doing', msg: 'Avec you : **were** → What were you doing?' }, { text: 'What you were doing', msg: 'Dans la question, were passe devant le sujet : What **were you** doing?' }],
      say: 'What were you doing?' },
    { id: 'en14-x-07', prompt: 'Écris la phrase en entier, au bon temps : I (cook) when the phone (ring).', answers: ['I was cooking when the phone rang'], topic: 'when et while', sec: 'en14-s-when-while',
      hint: 'Action longue → was + -ing ; action courte → prétérit (ring, rang, rung).',
      explain: 'Action longue → **was cooking** ; action courte qui l\'interrompt → **rang**. → I **was cooking** when the phone **rang**. (Je faisais la cuisine quand le téléphone a sonné.)',
      rule: 'Action longue au passé continu + when + action courte au prétérit',
      mistakes: [{ text: 'I cooked when the phone rang', msg: 'L\'action longue (cuisiner) se met au **passé continu** : I **was cooking**…' }, { text: 'I was cooking when the phone was ringing', msg: 'L\'action courte qui interrompt se met au **prétérit** : when the phone **rang**.' }, { text: 'I was cooking when the phone ringed', msg: 'ring est irrégulier : ring, **rang**, rung.' }],
      say: 'I was cooking when the phone rang.' },
    { id: 'en14-x-08', prompt: 'Complète avec when ou while : I was having a shower ___ you called.', answers: ['when'], topic: 'when et while', sec: 'en14-s-when-while', strict: true,
      hint: '« you called » : action longue ou courte ?',
      explain: '« you called » est une action **courte** au prétérit → **when**. → I was having a shower **when** you called. (Je prenais une douche quand tu as appelé.)',
      rule: 'when + action courte (prétérit) · while + action longue (passé continu)',
      mistakes: [{ text: 'while', msg: 'while va avec une action longue. Ici, « you called » est une action courte → **when**.' }, { text: 'during', msg: 'during va devant un nom (during the film). Devant une phrase avec une action courte : **when**.' }],
      say: 'I was having a shower when you called.' },
    { id: 'en14-x-09', prompt: 'Complète (pendant que) : ___ I was sleeping, a thief came into the house.', answers: ['While', 'When'], topic: 'when et while', sec: 'en14-s-when-while', strict: true,
      hint: 'pendant que + une phrase.',
      explain: 'Pendant que = **while** + passé continu. → **While** I was sleeping, a thief came into the house. (Pendant que je dormais, un voleur est entré dans la maison.)',
      rule: 'pendant que = while · pendant + durée = for · pendant + nom = during',
      mistakes: [{ text: 'During', msg: 'during va devant un nom (during the night). Devant une phrase : **While** I was sleeping…' }, { text: 'For', msg: 'for va devant une durée (for two hours). « Pendant que » = **While**.' }],
      say: 'While I was sleeping, a thief came into the house.' },
    { id: 'en14-x-10', prompt: 'Traduis : Il pleuvait.', answers: ['It was raining'], topic: 'Le passé continu', sec: 'en14-s-forme',
      hint: 'Pour la météo, le sujet est It.',
      explain: 'Le décor en cours → passé continu. → **It was raining.** (Il pleuvait.)',
      rule: 'Il pleuvait / il neigeait = It was raining / It was snowing',
      mistakes: [{ text: 'It rained', msg: '« It rained » = il a plu. Pour « il pleuvait » (le décor) : It **was raining**.' }, { text: 'It was rain', msg: 'Il faut la forme en **-ing** : It was rain**ing**.' }, { text: 'He was raining', msg: 'Pour la météo, le sujet est toujours **It** : It was raining.' }],
      say: 'It was raining.' },
    { id: 'en14-x-11', prompt: 'Remets dans l\'ordre : to / in / used / we / the countryside / live', answers: ['We used to live in the countryside'], topic: 'used to', sec: 'en14-s-used-to',
      hint: 'sujet + used to + verbe + lieu.',
      explain: 'sujet + **used to** + base verbale. → We **used to live** in the countryside. (Avant, nous habitions à la campagne.)',
      rule: 'sujet + used to + base verbale',
      mistakes: [{ text: 'We live used to in the countryside', msg: 'used to se place **devant** le verbe : We **used to live**…' }, { text: 'Used we to live in the countryside', msg: 'Ce n\'est pas une question : sujet + used to + verbe → **We used to live**…' }],
      say: 'We used to live in the countryside.' },
    { id: 'en14-x-12', prompt: 'Complète avec used to : My grandfather ___ (work) on a farm.', answers: ['used to work'], topic: 'used to', sec: 'en14-s-used-to',
      hint: 'used to + base verbale.',
      explain: 'Habitude passée : **used to + base**. → My grandfather **used to work** on a farm. (Mon grand-père travaillait dans une ferme.)',
      rule: 'used to + base verbale (le même pour toutes les personnes)',
      mistakes: [{ text: 'use to work', msg: 'À l\'affirmatif, on écrit **used** to (avec d) : used to work.' }, { text: 'used to worked', msg: 'Après used to, la **base** du verbe : used to **work**.' }, { text: 'used to working', msg: 'Après used to, la base (pas -ing) : used to **work**.' }],
      say: 'My grandfather used to work on a farm.' },
    { id: 'en14-x-13', prompt: 'Mets à la forme négative : I used to like fish.', answers: ['I didn\'t use to like fish', 'I did not use to like fish', 'I used not to like fish'], topic: 'used to', sec: 'en14-s-used-to',
      hint: 'didn\'t + use to (sans d).',
      explain: 'Négation : **didn\'t use to** + base. → I **didn\'t use to like** fish. (Avant, je n\'aimais pas le poisson.)',
      rule: 'Négation : didn\'t use to + base verbale',
      mistakes: [{ text: 'I didn\'t used to like fish', msg: 'Après didn\'t, on écrit **use** to, sans d (le passé est déjà dans did).' }, { text: 'I don\'t use to like fish', msg: 'Pour le passé : **didn\'t** use to.' }, { text: 'I wasn\'t used to like fish', msg: 'Pas de was : la négation se fait avec **didn\'t** → I didn\'t use to like fish.' }],
      say: 'I didn\'t use to like fish.' },
    { id: 'en14-x-14', prompt: 'Pose la question : You used to walk to school. → ___?', answers: ['Did you use to walk to school'], topic: 'used to', sec: 'en14-s-used-to',
      hint: 'Did + sujet + use to + base ?',
      explain: 'Question : **Did** + sujet + **use to** + base ? → **Did you use to walk** to school? (Avant, tu allais à l\'école à pied ?)',
      rule: 'Question : Did + sujet + use to + base verbale ?',
      mistakes: [{ text: 'Did you used to walk to school', msg: 'Après did, on écrit **use** to, sans d.' }, { text: 'Were you used to walk to school', msg: 'La question se fait avec **Did** : Did you use to walk…?' }, { text: 'You used to walk to school', msg: 'Pour poser la question, il faut **Did** devant le sujet : **Did you use to** walk…?' }],
      say: 'Did you use to walk to school?' },
    { id: 'en14-x-15', prompt: 'Traduis avec used to : Avant, nous avions un chien.', answers: ['We used to have a dog'], topic: 'used to', sec: 'en14-s-used-to',
      hint: 'avoir = have ; used to + base.',
      explain: 'Avant (et plus maintenant) → **used to + base**. → We **used to have** a dog. (Avant, nous avions un chien.)',
      rule: 'avant + imparfait = used to + base verbale',
      mistakes: [{ text: 'We used to had a dog', msg: 'Après used to, la base : **have** (pas had).' }, { text: 'We use to have a dog', msg: 'Au passé : **used** to (avec d).' }, { text: 'We were having a dog', msg: 'Un état (avoir) ne se met pas au passé continu : We **used to have** a dog.' }],
      say: 'We used to have a dog.' },
    { id: 'en14-x-16', prompt: 'Traduis : Avant, il y avait un cinéma ici.', answers: ['There used to be a cinema here'], topic: 'used to', sec: 'en14-s-used-to',
      hint: 'il y a = there is → il y avait (avant) = there used to …',
      explain: '« Il y avait » (et plus maintenant) → **There used to be**. → There used to be a cinema here. (Avant, il y avait un cinéma ici.)',
      rule: 'there is → there used to be (avant, il y avait)',
      mistakes: [{ text: 'It used to be a cinema here', msg: '« Il y avait » = **There** used to be (comme there is = il y a).' }, { text: 'There used to have a cinema here', msg: '« il y a » se construit avec be : There used to **be**.' }],
      say: 'There used to be a cinema here.' },
    { id: 'en14-x-17', prompt: 'Complète : We had lunch. ___ that, we went for a walk. (après ça)', answers: ['After'], topic: 'Raconter une histoire', sec: 'en14-s-raconter', strict: true,
      hint: 'après = …',
      explain: 'Après ça = **After that**. → We had lunch. **After** that, we went for a walk. (Nous avons déjeuné. Après ça, nous sommes allés nous promener.)',
      rule: 'first → then → after that → finally',
      mistakes: [{ text: 'Then', msg: 'Then s\'emploie seul (Then, we went…). Devant that : **After** that.' }, { text: 'Before', msg: 'Before that = avant ça. Ici : déjeuner, **puis** promenade → **After** that.' }],
      say: 'We had lunch. After that, we went for a walk.' },
    { id: 'en14-x-18', prompt: 'Traduis : Soudain, il s\'est mis à pleuvoir.', answers: ['Suddenly, it started to rain', 'Suddenly, it started raining', 'Suddenly, it began to rain', 'Suddenly, it began raining'], topic: 'Raconter une histoire', sec: 'en14-s-raconter',
      hint: 'soudain = suddenly ; se mettre à = start to.',
      explain: 'Un événement soudain → **prétérit**. → **Suddenly**, it **started** to rain. (Soudain, il s\'est mis à pleuvoir.)',
      rule: 'Un événement (court, soudain) → prétérit',
      mistakes: [{ text: 'Suddenly, it was starting to rain', msg: 'Une action courte et soudaine se met au **prétérit** : it **started** to rain.' }, { text: 'Suddenly, it starts to rain', msg: 'On raconte au passé : it **started** to rain.' }],
      say: 'Suddenly, it started to rain.' },
    { id: 'en14-x-19', prompt: 'Traduis : Que s\'est-il passé ?', answers: ['What happened', 'What has happened', 'What\'s happened'], topic: 'Petits incidents et accidents', sec: 'en14-s-incidents',
      hint: 'se passer = happen.',
      explain: '**What happened?** (Que s\'est-il passé ?) What est le sujet : pas de did.',
      rule: 'Quand What est le sujet : What + verbe au prétérit ? (sans did)',
      mistakes: [{ text: 'What did happen', msg: 'Quand What est le sujet de la question, pas de did : **What happened?**' }, { text: 'What is passed', msg: 'se passer = **happen** : What **happened**?' }, { text: 'What was happened', msg: 'Pas de was : **What happened?**' }],
      say: 'What happened?' },
    { id: 'en14-x-20', prompt: 'Traduis : Quelqu\'un a volé mon sac.', answers: ['Someone stole my bag', 'Somebody stole my bag', 'Someone has stolen my bag', 'Somebody has stolen my bag'], topic: 'Petits incidents et accidents', sec: 'en14-s-incidents',
      hint: 'voler (dérober) = steal, stole, stolen.',
      explain: 'steal, **stole**, stolen. → Someone **stole** my bag. (Quelqu\'un a volé mon sac.)',
      rule: 'voler (dérober) = steal · voler (en avion) = fly',
      mistakes: [{ text: 'Someone stealed my bag', msg: 'steal est irrégulier : steal, **stole**, stolen.' }, { text: 'Someone flew my bag', msg: 'Piège : voler en avion = fly. Voler (dérober) = **steal** → stole.' }, { text: 'Someone has stole my bag', msg: 'Après has, le participe **stolen**. Ou bien le prétérit seul : Someone **stole** my bag.' }],
      say: 'Someone stole my bag.' },
    { id: 'en14-x-21', prompt: 'Traduis : Je voudrais signaler un vol.', answers: ['I\'d like to report a theft', 'I would like to report a theft'], topic: 'Petits incidents et accidents', sec: 'en14-s-incidents',
      hint: 'signaler (à la police) = report ; le vol = a theft.',
      explain: '**I\'d like to report a theft.** (Je voudrais signaler un vol.) report = signaler, déclarer.',
      rule: 'Je voudrais + verbe = I\'d like to + verbe',
      mistakes: [{ text: 'I\'d like to report a flight', msg: 'a flight = un vol **en avion**. Le vol (le délit) = **a theft**.' }, { text: 'I\'d like to signal a theft', msg: 'Signaler (à la police) = **report**.' }, { text: 'I\'d like report a theft', msg: 'Il faut **to** : I\'d like **to** report.' }],
      say: 'I\'d like to report a theft.' },
    { id: 'en14-x-22', prompt: 'Complète avec un adjectif (bore) : The film was so long. I was ___.', answers: ['bored'], topic: 'Les émotions', sec: 'en14-s-emotions', strict: true,
      hint: 'Ce que je ressens : -ed ou -ing ?',
      explain: '**-ed** = ce que la personne ressent. → I was **bored**. (Je m\'ennuyais.)',
      rule: '-ed = je ressens (bored) · -ing = ça provoque (boring)',
      mistakes: [{ text: 'boring', msg: 'I was boring = j\'étais ennuyeux ! Pour « je m\'ennuyais » : I was **bored**.' }, { text: 'bore', msg: 'Il faut l\'adjectif en -ed : bor**ed**.' }],
      say: 'The film was so long. I was bored.' },
    { id: 'en14-x-23', prompt: 'Complète avec un adjectif (excite) : What a match! It was really ___.', answers: ['exciting'], topic: 'Les émotions', sec: 'en14-s-emotions', strict: true,
      hint: 'Le match provoque l\'émotion : -ed ou -ing ?',
      explain: '**-ing** = ce qui provoque l\'émotion. → It was really **exciting**. (C\'était vraiment passionnant.)',
      rule: '-ing = ça provoque (exciting) · -ed = je ressens (excited)',
      mistakes: [{ text: 'excited', msg: '-ed = ce que la personne ressent. Le match provoque l\'émotion → excit**ing**.' }, { text: 'exiting', msg: 'Orthographe : ex**c**iting (exit = la sortie).' }],
      say: 'What a match! It was really exciting.' },
    { id: 'en14-x-24', prompt: 'Traduis : J\'ai eu tellement peur !', answers: ['I was so scared', 'I was so frightened', 'I was so afraid', 'I was really scared', 'I was very scared'], topic: 'Les émotions', sec: 'en14-s-emotions',
      hint: 'avoir peur = be scared.',
      explain: 'Avoir peur = **be scared** (avec to be). → I **was so scared**! (J\'ai eu tellement peur !)',
      rule: 'avoir peur = be scared / be afraid / be frightened',
      mistakes: [{ text: 'I had so scared', msg: 'Avoir peur = **be** scared : I **was** so scared!' }, { text: 'I had so much fear', msg: 'On dit plutôt **I was so scared!** (avoir peur = be scared).' }, { text: 'I was so scary', msg: 'scary = effrayant (qui fait peur). Pour la personne qui a peur : **scared**.' }],
      say: 'I was so scared!' },
    { id: 'en14-x-25', prompt: 'Traduis : Ne t\'inquiète pas !', answers: ['Don\'t worry'], topic: 'Les émotions', sec: 'en14-s-emotions',
      hint: 'Impératif négatif : Don\'t + verbe.',
      explain: '**Don\'t worry!** (Ne t\'inquiète pas !) worry est un verbe ; inquiet = worried.',
      rule: 'Impératif négatif : Don\'t + base verbale',
      mistakes: [{ text: 'Don\'t be worry', msg: 'worry est ici un verbe : **Don\'t worry!** (ou Don\'t be worried).' }, { text: 'Not worry', msg: 'Impératif négatif : **Don\'t** + verbe → Don\'t worry!' }],
      say: 'Don\'t worry!' },
    { id: 'en14-x-26', prompt: 'Faux ami : traduis « Il criait. »', answers: ['He was shouting'], topic: 'Petits incidents et accidents', sec: 'en14-s-incidents',
      hint: 'crier = shout ; « il criait » = action en cours.',
      explain: 'Crier = **shout** ; action en cours → passé continu. → He **was shouting**. (Il criait.)',
      rule: 'crier = shout · pleurer = cry',
      mistakes: [{ text: 'He was crying', msg: 'Piège : cry = **pleurer**. Crier = **shout** → He was shouting.' }, { text: 'He shouted', msg: '« Il criait » (en cours) → passé continu : He **was shouting**.' }],
      say: 'He was shouting.' },
    { id: 'en14-x-27', prompt: 'Traduis : Je me souviens de mon premier jour d\'école.', answers: ['I remember my first day at school', 'I remember my first day of school'], topic: 'Souvenirs d\'enfance', sec: 'en14-s-vocab',
      hint: 'se souvenir de = remember (sans of).',
      explain: '**I remember** my first day at school. (Je me souviens de mon premier jour d\'école.) Pas de « of » après remember.',
      rule: 'se souvenir de quelque chose = remember something',
      mistakes: [{ text: 'I remember of my first day at school', msg: 'Pas de « of » : I remember **my** first day.' }, { text: 'I remind my first day at school', msg: 'remind = rappeler (quelque chose à quelqu\'un). Se souvenir = **remember**.' }, { text: 'I souvenir my first day at school', msg: 'a souvenir est un nom (un objet-souvenir). Se souvenir = **remember**.' }],
      say: 'I remember my first day at school.' },
    { id: 'en14-x-28', prompt: 'Complète au bon temps : While we ___ (walk) in the park, it started to rain.', answers: ['were walking'], topic: 'when et while', sec: 'en14-s-when-while',
      hint: 'Après while : l\'action longue.',
      explain: 'Après **while**, l\'action longue → passé continu : we **were walking**. → While we were walking in the park, it started to rain. (Pendant que nous nous promenions dans le parc, il s\'est mis à pleuvoir.)',
      rule: 'while + passé continu (action longue)',
      mistakes: [{ text: 'walked', msg: 'Après while, l\'action longue se met au **passé continu** : we **were walking**.' }, { text: 'was walking', msg: 'Avec we : **were** walking.' }],
      say: 'While we were walking in the park, it started to rain.' }
  ]
});
