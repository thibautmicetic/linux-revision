/* Anglais — chapitre 8 : Raconter le passé (prétérit en -ed, was / were, did, marqueurs du passé) */
APP.registerChapter({
  id: 'en8', subject: 'anglais', num: 8,
  title: 'Raconter le passé', subtitle: 'yesterday, last week, ago : le prétérit (-ed), was / were et did',
  vocabSec: 'en8-s-vocab',
  sections: [
    {
      id: 'en8-s-ed', title: 'Le prétérit : -ed pour raconter le passé',
      html: `
<p>Pour raconter ce qui s'est passé (hier, l'an dernier…), l'anglais utilise le <b>prétérit</b> : c'est le temps du passé pour une action <b>terminée</b>. Il traduit le plus souvent notre passé composé (« j'ai travaillé ») et souvent aussi notre imparfait (« je travaillais »).</p>
<p>Pour la plupart des verbes (les verbes <b>réguliers</b>), on ajoute simplement <b>-ed</b> à la base du verbe.</p>
<table><tr><th>Présent</th><th>Prétérit</th><th>Français</th></tr>
<tr><td><span class="say">I work</span></td><td><span class="say">I worked</span></td><td>j'ai travaillé</td></tr>
<tr><td><span class="say">she plays</span></td><td><span class="say">she played</span></td><td>elle a joué</td></tr>
<tr><td><span class="say">we visit</span></td><td><span class="say">we visited</span></td><td>nous avons visité</td></tr>
<tr><td><span class="say">they watch TV</span></td><td><span class="say">they watched TV</span></td><td>ils ont regardé la télé</td></tr>
</table>
<p>Bonne nouvelle : le prétérit est <b>le même pour toutes les personnes</b>. Pas de -s avec he / she / it : <span class="say">I worked</span>, <span class="say">he worked</span>, <span class="say">they worked</span>.</p>
<p>Exemples :<br>
<span class="say">I cooked dinner yesterday.</span> — J'ai préparé le dîner hier.<br>
<span class="say">We visited Rome last year.</span> — Nous avons visité Rome l'année dernière.<br>
<span class="say">My sister called me last night.</span> — Ma sœur m'a appelé hier soir.<br>
<span class="say">When I was young, I lived in Lyon.</span> — Quand j'étais jeune, j'habitais à Lyon.</p>
<div class="callout key"><b>À retenir</b> Verbe régulier au prétérit = base + <b>-ed</b>, pour toutes les personnes : <span class="say">I worked</span>, <span class="say">she worked</span>, <span class="say">we worked</span>.</div>
<div class="callout warn"><b>Piège</b> « J'ai travaillé hier » ne se traduit pas mot à mot avec have : on dit <span class="say">I worked yesterday</span> (et non « I have worked yesterday »). Dès qu'on dit <b>quand</b> (hier, en 2010, il y a deux jours…), on prend le prétérit.</div>`
    },
    {
      id: 'en8-s-orth', title: 'L\'orthographe du -ed',
      html: `
<p>On ajoute <b>-ed</b>, mais l'orthographe change un peu dans 3 cas.</p>
<table><tr><th>Règle</th><th>Exemples</th></tr>
<tr><td>1. En général : + <b>ed</b></td><td><span class="say">work</span> → <span class="say">worked</span>, <span class="say">want</span> → <span class="say">wanted</span>, <span class="say">play</span> → <span class="say">played</span>, <span class="say">stay</span> → <span class="say">stayed</span></td></tr>
<tr><td>2. Le verbe finit par <b>e</b> : on ajoute seulement <b>d</b></td><td><span class="say">like</span> → <span class="say">liked</span>, <span class="say">live</span> → <span class="say">lived</span>, <span class="say">love</span> → <span class="say">loved</span>, <span class="say">move</span> → <span class="say">moved</span>, <span class="say">arrive</span> → <span class="say">arrived</span></td></tr>
<tr><td>3. Consonne + <b>y</b> : y devient <b>ied</b></td><td><span class="say">study</span> → <span class="say">studied</span>, <span class="say">try</span> → <span class="say">tried</span>, <span class="say">carry</span> → <span class="say">carried</span>, <span class="say">cry</span> → <span class="say">cried</span></td></tr>
<tr><td>4. Verbe court en <b>1 voyelle + 1 consonne</b> : la consonne est doublée</td><td><span class="say">stop</span> → <span class="say">stopped</span>, <span class="say">plan</span> → <span class="say">planned</span>, <span class="say">shop</span> → <span class="say">shopped</span>, <span class="say">drop</span> → <span class="say">dropped</span></td></tr>
</table>
<div class="callout key"><b>À retenir</b> <span class="say">liked</span> (e + d) · <span class="say">studied</span> (consonne + y → ied) · <span class="say">stopped</span> (on double) · <span class="say">played</span> (voyelle + y : on garde le y).</div>
<div class="callout warn"><b>Pièges</b> Après une <b>voyelle + y</b>, le y reste : <span class="say">played</span>, <span class="say">stayed</span>, <span class="say">enjoyed</span> (jamais « plaied »). Et on ne double pas après deux voyelles : <span class="say">rained</span>, <span class="say">cooked</span>, <span class="say">waited</span>.</div>
<div class="callout tip"><b>Bon à savoir</b> <span class="say">travel</span> → <span class="say">travelled</span> en anglais britannique, <span class="say">traveled</span> en américain : les deux sont acceptés. Les verbes plus longs comme <span class="say">visit</span> ou <span class="say">open</span> ne doublent pas : <span class="say">visited</span>, <span class="say">opened</span>.</div>`
    },
    {
      id: 'en8-s-prononc', title: 'Prononcer -ed : 3 sons',
      html: `
<p>Le <b>e</b> de -ed ne se prononce presque jamais ! <span class="say">worked</span> se dit en <b>une seule syllabe</b> (« weurkt »), pas « wor-kèd ». Il y a 3 façons de prononcer la fin -ed. Clique sur chaque mot pour l'écouter.</p>
<table><tr><th>Son</th><th>Quand ?</th><th>Exemples</th></tr>
<tr><td><b>« t »</b></td><td>après les sons soufflés : k, p, s, ch, sh, f</td><td><span class="say">worked</span>, <span class="say">cooked</span>, <span class="say">stopped</span>, <span class="say">watched</span>, <span class="say">washed</span>, <span class="say">danced</span>, <span class="say">liked</span></td></tr>
<tr><td><b>« d »</b></td><td>après les autres sons (voyelles, l, n, m, v…)</td><td><span class="say">played</span>, <span class="say">lived</span>, <span class="say">called</span>, <span class="say">cleaned</span>, <span class="say">moved</span>, <span class="say">stayed</span>, <span class="say">retired</span></td></tr>
<tr><td><b>« id »</b> (une syllabe en plus)</td><td>seulement après <b>t</b> ou <b>d</b></td><td><span class="say">wanted</span>, <span class="say">needed</span>, <span class="say">visited</span>, <span class="say">started</span>, <span class="say">waited</span>, <span class="say">decided</span></td></tr>
</table>
<p>Écoute la différence :<br>
<span class="say">I work every day.</span> / <span class="say">I worked yesterday.</span><br>
<span class="say">I want a coffee.</span> / <span class="say">I wanted a coffee.</span></p>
<div class="callout key"><b>À retenir</b> On ajoute une syllabe « id » <b>seulement après t ou d</b> (<span class="say">wanted</span>, <span class="say">needed</span>). Sinon, -ed se colle au verbe : « t » ou « d », sans syllabe en plus.</div>
<div class="callout warn"><b>Piège</b> Ne dis pas « play-èd » ou « work-èd » : <span class="say">played</span> et <span class="say">worked</span> n'ont qu'une syllabe. Entre « t » et « d », pas de panique : on te comprendra toujours. L'important est de ne pas ajouter de syllabe.</div>`
    },
    {
      id: 'en8-s-was', title: 'was / were : le passé de to be',
      html: `
<p>Le verbe <i>to be</i> (être) a deux formes au passé : <b>was</b> et <b>were</b>.</p>
<table><tr><th>Affirmatif</th><th>Négatif</th><th>Question</th></tr>
<tr><td><span class="say">I was</span></td><td><span class="say">I wasn't</span></td><td><span class="say">Was I?</span></td></tr>
<tr><td><span class="say">you were</span></td><td><span class="say">you weren't</span></td><td><span class="say">Were you?</span></td></tr>
<tr><td><span class="say">he was</span>, <span class="say">she was</span>, <span class="say">it was</span></td><td><span class="say">he wasn't</span>, <span class="say">she wasn't</span>, <span class="say">it wasn't</span></td><td><span class="say">Was he?</span> <span class="say">Was she?</span> <span class="say">Was it?</span></td></tr>
<tr><td><span class="say">we were</span></td><td><span class="say">we weren't</span></td><td><span class="say">Were we?</span></td></tr>
<tr><td><span class="say">they were</span></td><td><span class="say">they weren't</span></td><td><span class="say">Were they?</span></td></tr>
</table>
<p><span class="say">wasn't</span> = was not · <span class="say">weren't</span> = were not.</p>
<p>Exemples :<br>
<span class="say">I was tired yesterday.</span> — J'étais fatigué(e) hier.<br>
<span class="say">It was cold last night.</span> — Il faisait froid hier soir.<br>
<span class="say">We were on holiday in Spain.</span> — Nous étions en vacances en Espagne.<br>
<span class="say">The film wasn't very good.</span> — Le film n'était pas très bien.<br>
<span class="say">Where were you?</span> — Où étais-tu ?<br>
<span class="say">Were you at home?</span> — <span class="say">Yes, I was.</span> / <span class="say">No, I wasn't.</span> — Tu étais à la maison ? Oui. / Non.</p>
<h3>Il y avait : there was / there were</h3>
<p><span class="say">There was a big party.</span> — Il y avait une grande fête.<br>
<span class="say">There were a lot of people.</span> — Il y avait beaucoup de monde.</p>
<h3>Être né : I was born</h3>
<p><span class="say">I was born in 1958.</span> — Je suis né(e) en 1958.<br>
<span class="say">Where were you born?</span> — Où es-tu né(e) ?<br>
<span class="say">My son was born in Nantes.</span> — Mon fils est né à Nantes.</p>
<div class="callout key"><b>À retenir</b> I / he / she / it → <b>was</b> · you / we / they → <b>were</b>.</div>
<div class="callout warn"><b>Pièges</b> Avec was / were, <b>pas de did</b> : <span class="say">I wasn't tired</span> (pas « I didn't was »), <span class="say">Were you at home?</span> (pas « Did you were »). Et « je suis né » se dit au passé : <span class="say">I was born</span> (jamais « I am born »).</div>`
    },
    {
      id: 'en8-s-did', title: 'did / didn\'t : le négatif et les questions',
      html: `
<p>Pour le négatif et les questions au passé, on utilise <b>did</b> (le passé de <i>do</i>). C'est un <b>auxiliaire</b> : un petit verbe qui aide le vrai verbe. Le vrai verbe revient alors à la <b>base</b> (sans -ed).</p>
<table><tr><th>Affirmatif</th><th>Négatif</th><th>Question</th></tr>
<tr><td><span class="say">I worked.</span></td><td><span class="say">I didn't work.</span></td><td><span class="say">Did you work?</span></td></tr>
<tr><td><span class="say">She liked it.</span></td><td><span class="say">She didn't like it.</span></td><td><span class="say">Did she like it?</span></td></tr>
<tr><td><span class="say">They went.</span></td><td><span class="say">They didn't go.</span></td><td><span class="say">Did they go?</span></td></tr>
</table>
<h3>Négatif : didn't + base</h3>
<p><span class="say">I didn't work yesterday.</span> — Je n'ai pas travaillé hier.<br>
<span class="say">She didn't call me.</span> — Elle ne m'a pas appelé.<br>
<span class="say">We didn't go to the beach.</span> — Nous ne sommes pas allés à la plage.</p>
<h3>Question : Did + sujet + base ?</h3>
<p><span class="say">Did you like the film?</span> — Tu as aimé le film ?<br>
<span class="say">Yes, I did.</span> — Oui. / <span class="say">No, I didn't.</span> — Non.<br>
<span class="say">Did she visit the museum?</span> — Est-ce qu'elle a visité le musée ?</p>
<h3>Avec un mot interrogatif</h3>
<p><span class="say">What did you do yesterday?</span> — Qu'est-ce que tu as fait hier ?<br>
<span class="say">Where did you go?</span> — Où es-tu allé(e) ?<br>
<span class="say">When did you arrive?</span> — Quand es-tu arrivé(e) ?<br>
<span class="say">What time did you get up?</span> — À quelle heure tu t'es levé(e) ?</p>
<div class="callout key"><b>À retenir</b> <b>didn't</b> + base · <b>Did</b> + sujet + base ? Le passé est déjà dans did : le verbe ne prend donc pas -ed.</div>
<div class="callout warn"><b>Le piège n° 1</b> On ne dit pas « I didn't went » mais <span class="say">I didn't go</span>. Pas « Did you saw? » mais <span class="say">Did you see?</span>. Pas « She didn't liked » mais <span class="say">She didn't like</span>.</div>
<div class="callout tip"><b>Bon à savoir</b> Dans <span class="say">What did you do?</span>, le premier <b>did</b> est l'auxiliaire et <b>do</b> est le vrai verbe (faire). Tout seul, <b>did</b> veut dire « a fait » : <span class="say">I did the shopping.</span> — J'ai fait les courses.</div>`
    },
    {
      id: 'en8-s-marqueurs', title: 'Les mots du passé : yesterday, last, ago',
      html: `
<p>Ces mots indiquent qu'on parle du passé : avec eux, on utilise le <b>prétérit</b>.</p>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">yesterday</span></td><td>hier</td></tr>
<tr><td><span class="say">yesterday morning</span></td><td>hier matin</td></tr>
<tr><td><span class="say">yesterday afternoon</span></td><td>hier après-midi</td></tr>
<tr><td><span class="say">last night</span></td><td>hier soir, la nuit dernière</td></tr>
<tr><td><span class="say">the day before yesterday</span></td><td>avant-hier</td></tr>
<tr><td><span class="say">last week</span></td><td>la semaine dernière</td></tr>
<tr><td><span class="say">last month</span></td><td>le mois dernier</td></tr>
<tr><td><span class="say">last year</span></td><td>l'année dernière</td></tr>
<tr><td><span class="say">last summer</span></td><td>l'été dernier</td></tr>
<tr><td><span class="say">last Monday</span></td><td>lundi dernier</td></tr>
<tr><td><span class="say">two days ago</span></td><td>il y a deux jours</td></tr>
<tr><td><span class="say">three years ago</span></td><td>il y a trois ans</td></tr>
<tr><td><span class="say">a long time ago</span></td><td>il y a longtemps</td></tr>
<tr><td><span class="say">in 2010</span></td><td>en 2010</td></tr>
<tr><td><span class="say">in May</span></td><td>en mai</td></tr>
<tr><td><span class="say">when I was young</span></td><td>quand j'étais jeune</td></tr>
<tr><td><span class="say">when I was a child</span></td><td>quand j'étais enfant</td></tr>
<tr><td><span class="say">then</span></td><td>ensuite, puis</td></tr>
</table>
<p>Exemples :<br>
<span class="say">I retired two years ago.</span> — J'ai pris ma retraite il y a deux ans.<br>
<span class="say">We moved last year.</span> — Nous avons déménagé l'année dernière.<br>
<span class="say">We had lunch, then we visited the museum.</span> — Nous avons déjeuné, puis nous avons visité le musée.</p>
<div class="callout key"><b>À retenir</b> <b>ago</b> se place <b>après</b> la durée : <span class="say">two days ago</span>. Et <b>last</b> s'emploie <b>sans « the »</b> : <span class="say">last week</span>, <span class="say">last year</span>.</div>
<div class="callout warn"><b>Pièges</b> « Il y a deux jours » ne se dit pas « there are two days » mais <span class="say">two days ago</span>. « La semaine dernière » = <span class="say">last week</span> (pas « the last week »). « Hier soir » = <span class="say">last night</span> (on évite « yesterday night »).</div>
<div class="callout tip"><b>Bon à savoir</b> L'imparfait français (« quand j'étais jeune, j'habitais… ») se traduit lui aussi par le prétérit : <span class="say">When I was young, I lived in a small village.</span></div>`
    },
    {
      id: 'en8-s-irreg', title: 'Les verbes irréguliers les plus courants',
      html: `
<p>Certains verbes très courants ne prennent pas -ed au prétérit : ce sont les verbes <b>irréguliers</b>. Voici les indispensables pour raconter ta journée ou tes vacances. Ils sont tous détaillés, avec beaucoup d'autres, au <b>chapitre 9 « Les verbes irréguliers »</b>.</p>
<table><tr><th>Base</th><th>Prétérit</th><th>Français</th><th>Exemple</th></tr>
<tr><td><span class="say">go</span></td><td><span class="say">went</span></td><td>aller</td><td><span class="say">We went to the beach.</span> — Nous sommes allés à la plage.</td></tr>
<tr><td><span class="say">have</span></td><td><span class="say">had</span></td><td>avoir, prendre (un repas)</td><td><span class="say">We had lunch in a café.</span> — Nous avons déjeuné dans un café.</td></tr>
<tr><td><span class="say">do</span></td><td><span class="say">did</span></td><td>faire</td><td><span class="say">I did the shopping.</span> — J'ai fait les courses.</td></tr>
<tr><td><span class="say">see</span></td><td><span class="say">saw</span></td><td>voir</td><td><span class="say">I saw a good film.</span> — J'ai vu un bon film.</td></tr>
<tr><td><span class="say">come</span></td><td><span class="say">came</span></td><td>venir</td><td><span class="say">My children came for lunch.</span> — Mes enfants sont venus déjeuner.</td></tr>
<tr><td><span class="say">make</span></td><td><span class="say">made</span></td><td>faire, fabriquer</td><td><span class="say">She made a cake.</span> — Elle a fait un gâteau.</td></tr>
<tr><td><span class="say">get</span></td><td><span class="say">got</span></td><td>obtenir, recevoir</td><td><span class="say">We got married in 1985.</span> — Nous nous sommes mariés en 1985.</td></tr>
<tr><td><span class="say">buy</span></td><td><span class="say">bought</span></td><td>acheter</td><td><span class="say">I bought a new coat.</span> — J'ai acheté un nouveau manteau.</td></tr>
<tr><td><span class="say">take</span></td><td><span class="say">took</span></td><td>prendre</td><td><span class="say">I took a lot of photos.</span> — J'ai pris beaucoup de photos.</td></tr>
<tr><td><span class="say">eat</span></td><td><span class="say">ate</span></td><td>manger</td><td><span class="say">We ate fish.</span> — Nous avons mangé du poisson.</td></tr>
<tr><td><span class="say">say</span></td><td><span class="say">said</span></td><td>dire</td><td><span class="say">He said hello.</span> — Il a dit bonjour.</td></tr>
<tr><td><span class="say">meet</span></td><td><span class="say">met</span></td><td>rencontrer</td><td><span class="say">I met my wife in 1980.</span> — J'ai rencontré ma femme en 1980.</td></tr>
</table>
<div class="callout key"><b>À retenir</b> Comme pour les verbes réguliers, le prétérit irrégulier est le même pour toutes les personnes (<span class="say">I went</span>, <span class="say">she went</span>). Et après did / didn't, on revient à la base : <span class="say">Did you go?</span> <span class="say">I didn't see.</span></div>
<div class="callout warn"><b>Piège</b> « goed », « buyed », « eated » n'existent pas : <span class="say">went</span>, <span class="say">bought</span>, <span class="say">ate</span>. Attention aussi à la prononciation de <span class="say">said</span> (« sèd »).</div>
<div class="callout tip"><b>Pour aller plus loin</b> Le chapitre 9 présente les autres verbes irréguliers, classés par familles, avec leurs 3 formes à écouter.</div>`
    },
    {
      id: 'en8-s-vocab', title: 'Vocabulaire : sorties, vacances et événements de la vie',
      html: `
<h3>Les sorties et les vacances</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">the weekend</span></td><td>le week-end</td></tr>
<tr><td><span class="say">a holiday</span></td><td>des vacances</td></tr>
<tr><td><span class="say">a trip</span></td><td>un voyage, une excursion</td></tr>
<tr><td><span class="say">travel</span></td><td>voyager</td></tr>
<tr><td><span class="say">the beach</span></td><td>la plage</td></tr>
<tr><td><span class="say">the sea</span></td><td>la mer</td></tr>
<tr><td><span class="say">the mountains</span></td><td>la montagne</td></tr>
<tr><td><span class="say">a museum</span></td><td>un musée</td></tr>
<tr><td><span class="say">a restaurant</span></td><td>un restaurant</td></tr>
<tr><td><span class="say">the cinema</span></td><td>le cinéma</td></tr>
<tr><td><span class="say">a film</span></td><td>un film</td></tr>
<tr><td><span class="say">a hotel</span></td><td>un hôtel</td></tr>
<tr><td><span class="say">a ticket</span></td><td>un billet, un ticket</td></tr>
<tr><td><span class="say">a party</span></td><td>une fête, une soirée</td></tr>
<tr><td><span class="say">a photo</span></td><td>une photo</td></tr>
<tr><td><span class="say">a suitcase</span></td><td>une valise</td></tr>
<tr><td><span class="say">a plane</span></td><td>un avion</td></tr>
</table>
<h3>Les verbes et expressions utiles</h3>
<p><span class="say">go on holiday</span> → <span class="say">We went on holiday to Italy.</span> — Nous sommes partis en vacances en Italie.<br>
<span class="say">visit</span> → <span class="say">We visited a museum.</span> — Nous avons visité un musée.<br>
<span class="say">stay</span> → <span class="say">We stayed in a small hotel.</span> — Nous avons séjourné dans un petit hôtel.<br>
<span class="say">arrive</span> → <span class="say">We arrived on Friday.</span> — Nous sommes arrivés vendredi.<br>
<span class="say">come back</span> → <span class="say">We came back on Sunday.</span> — Nous sommes rentrés dimanche.<br>
<span class="say">enjoy</span> → <span class="say">I enjoyed the trip.</span> — Le voyage m'a plu.<br>
<span class="say">relax</span> → <span class="say">We relaxed on the beach.</span> — Nous nous sommes détendus sur la plage.<br>
<span class="say">have a good time</span> → <span class="say">We had a great time!</span> — On s'est très bien amusés !</p>
<p>Pour donner son avis : <span class="say">It was great!</span> (C'était génial !) · <span class="say">It was wonderful.</span> (C'était merveilleux.) · <span class="say">It was boring.</span> (C'était ennuyeux.)</p>
<h3>Les événements de la vie</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">I was born in…</span></td><td>Je suis né(e) en / à…</td></tr>
<tr><td><span class="say">I started work in…</span></td><td>J'ai commencé à travailler en…</td></tr>
<tr><td><span class="say">I studied…</span></td><td>J'ai étudié…</td></tr>
<tr><td><span class="say">I got married in…</span></td><td>Je me suis marié(e) en…</td></tr>
<tr><td><span class="say">the wedding</span></td><td>le mariage (la fête)</td></tr>
<tr><td><span class="say">We moved to…</span></td><td>Nous avons déménagé à / en…</td></tr>
<tr><td><span class="say">I retired in…</span></td><td>J'ai pris ma retraite en…</td></tr>
<tr><td><span class="say">I'm retired.</span></td><td>Je suis à la retraite.</td></tr>
</table>
<div class="callout key"><b>À retenir</b> Pour raconter ta vie : <span class="say">I was born in…</span>, <span class="say">I got married in…</span>, <span class="say">We moved to…</span>, <span class="say">I retired…</span> — avec une date (<span class="say">in 1985</span>) ou <b>ago</b> (<span class="say">ten years ago</span>).</div>
<div class="callout warn"><b>Pièges</b> Un voyage = <span class="say">a trip</span> ; voyager = <span class="say">travel</span>. « Se marier » = <span class="say">get married</span> (prétérit : <span class="say">got married</span>). <span class="say">visit</span> s'emploie pour un lieu et aussi pour une personne : <span class="say">I visited my aunt.</span> — J'ai rendu visite à ma tante.</div>
<div class="callout tip"><b>Bon à savoir</b> En anglais américain : <span class="say">vacation</span> (vacances), <span class="say">movie</span> (film), <span class="say">the movies</span> (le cinéma).</div>`
    }
  ],
  words: [
    // sorties et vacances
    { en: 'holiday', fr: 'les vacances', pos: 'n', cat: 'Sorties et vacances', alt: ['holidays', 'vacation'], ex: 'We went on holiday to Italy.', exFr: 'Nous sommes partis en vacances en Italie.', level: 1, note: 'En vacances = on holiday. En américain : vacation.' },
    { en: 'trip', fr: 'le voyage, l\'excursion', pos: 'n', cat: 'Sorties et vacances', ex: 'We had a great trip.', exFr: 'Nous avons fait un super voyage.', level: 1, note: 'trip est le nom (un voyage) ; voyager = travel.' },
    { en: 'travel', fr: 'voyager', pos: 'v', cat: 'Sorties et vacances', ex: 'They travelled a lot when they were young.', exFr: 'Ils ont beaucoup voyagé quand ils étaient jeunes.', level: 1, note: 'Prétérit : travelled (britannique) ou traveled (américain).' },
    { en: 'beach', fr: 'la plage', pos: 'n', cat: 'Sorties et vacances', ex: 'We went to the beach.', exFr: 'Nous sommes allés à la plage.', level: 1, note: 'Prononce un « i » bien long, comme dans see.' },
    { en: 'sea', fr: 'la mer', pos: 'n', cat: 'Sorties et vacances', ex: 'The sea was very cold.', exFr: 'La mer était très froide.', level: 1, note: 'Se prononce comme see (voir).' },
    { en: 'mountain', fr: 'la montagne', pos: 'n', cat: 'Sorties et vacances', ex: 'We stayed in the mountains.', exFr: 'Nous avons séjourné à la montagne.', level: 1, note: 'À la montagne = in the mountains (au pluriel).' },
    { en: 'museum', fr: 'le musée', pos: 'n', cat: 'Sorties et vacances', ex: 'We visited a museum in London.', exFr: 'Nous avons visité un musée à Londres.', level: 1, note: 'Prononciation : « mioû-ZI-eum », l\'accent est sur le 2e son.' },
    { en: 'restaurant', fr: 'le restaurant', pos: 'n', cat: 'Sorties et vacances', ex: 'We had dinner in a restaurant.', exFr: 'Nous avons dîné au restaurant.', level: 1, note: 'Prononciation : « RESS-tront », l\'accent est sur le début.' },
    { en: 'cinema', fr: 'le cinéma', pos: 'n', cat: 'Sorties et vacances', ex: 'I went to the cinema last night.', exFr: 'Je suis allé au cinéma hier soir.', level: 1, note: 'En américain : the movies.' },
    { en: 'film', fr: 'le film', pos: 'n', cat: 'Sorties et vacances', alt: ['movie'], ex: 'The film was very long.', exFr: 'Le film était très long.', level: 1, note: 'En américain : movie.' },
    { en: 'hotel', fr: 'l\'hôtel', pos: 'n', cat: 'Sorties et vacances', ex: 'We stayed in a small hotel.', exFr: 'Nous avons séjourné dans un petit hôtel.', level: 1, note: 'Le h se prononce et l\'accent est sur la fin : « hô-TÈL ».' },
    { en: 'ticket', fr: 'le billet, le ticket', pos: 'n', cat: 'Sorties et vacances', ex: 'I bought two tickets.', exFr: 'J\'ai acheté deux billets.', level: 1 },
    { en: 'weekend', fr: 'le week-end', pos: 'n', cat: 'Sorties et vacances', alt: ['week-end'], ex: 'We visited my parents last weekend.', exFr: 'Nous avons rendu visite à mes parents le week-end dernier.', level: 1 },
    { en: 'party', fr: 'la fête, la soirée', pos: 'n', cat: 'Sorties et vacances', ex: 'We had a party for my birthday.', exFr: 'Nous avons fait une fête pour mon anniversaire.', level: 1 },
    { en: 'photo', fr: 'la photo', pos: 'n', cat: 'Sorties et vacances', alt: ['picture', 'photograph'], ex: 'She took a photo of the sea.', exFr: 'Elle a pris une photo de la mer.', level: 1, note: 'Prendre une photo = take a photo (prétérit : took).' },
    { en: 'suitcase', fr: 'la valise', pos: 'n', cat: 'Sorties et vacances', ex: 'My suitcase was very heavy.', exFr: 'Ma valise était très lourde.', level: 2 },
    { en: 'plane', fr: 'l\'avion', pos: 'n', cat: 'Sorties et vacances', alt: ['airplane', 'aeroplane'], ex: 'We took the plane to Rome.', exFr: 'Nous avons pris l\'avion pour Rome.', level: 1 },
    { en: 'visit', fr: 'visiter, rendre visite à', pos: 'v', cat: 'Sorties et vacances', ex: 'I visited my aunt yesterday.', exFr: 'J\'ai rendu visite à ma tante hier.', level: 1, note: 'visited se prononce « vi-zi-tid » (après t : une syllabe en plus).' },
    { en: 'stay', fr: 'rester, séjourner', pos: 'v', cat: 'Sorties et vacances', ex: 'We stayed at home on Sunday.', exFr: 'Nous sommes restés à la maison dimanche.', level: 1, note: 'Prétérit : stayed (voyelle + y : on garde le y).' },
    { en: 'enjoy', fr: 'apprécier, aimer bien', pos: 'v', cat: 'Sorties et vacances', ex: 'Did you enjoy the concert?', exFr: 'Tu as aimé le concert ?', level: 2, note: 'Prétérit : enjoyed. Toujours suivi de quelque chose : I enjoyed the trip.' },
    { en: 'relax', fr: 'se détendre, se reposer', pos: 'v', cat: 'Sorties et vacances', ex: 'We relaxed on the beach.', exFr: 'Nous nous sommes détendus sur la plage.', level: 2 },
    { en: 'arrive', fr: 'arriver', pos: 'v', cat: 'Sorties et vacances', ex: 'We arrived at the hotel at six o\'clock.', exFr: 'Nous sommes arrivés à l\'hôtel à six heures.', level: 1, note: 'arrive **in** + ville ou pays, arrive **at** + lieu précis.' },
    { en: 'come back', fr: 'revenir, rentrer', pos: 'v', cat: 'Sorties et vacances', ex: 'We came back on Sunday.', exFr: 'Nous sommes rentrés dimanche.', level: 1, note: 'Prétérit irrégulier : came back.' },
    { en: 'boring', fr: 'ennuyeux', pos: 'adj', cat: 'Sorties et vacances', ex: 'The museum was boring.', exFr: 'Le musée était ennuyeux.', level: 1, note: 'Je m\'ennuyais = I was bored.' },
    { en: 'wonderful', fr: 'merveilleux', pos: 'adj', cat: 'Sorties et vacances', ex: 'It was a wonderful holiday.', exFr: 'C\'étaient des vacances merveilleuses.', level: 2 },
    { en: 'great', fr: 'génial, super', pos: 'adj', cat: 'Sorties et vacances', ex: 'The weather was great!', exFr: 'Il a fait un temps super !', level: 1 },
    // événements de la vie
    { en: 'born', fr: 'né, née', pos: 'adj', cat: 'Les événements de la vie', ex: 'My daughter was born in Paris.', exFr: 'Ma fille est née à Paris.', level: 1, note: 'Naître = to be born, au passé avec was / were : I was born in… (je suis né en…).' },
    { en: 'married', fr: 'marié, mariée', pos: 'adj', cat: 'Les événements de la vie', ex: 'Are you married?', exFr: 'Tu es marié(e) ?', level: 1, note: 'Se marier = get married.' },
    { en: 'get married', fr: 'se marier', pos: 'v', cat: 'Les événements de la vie', ex: 'My son got married last summer.', exFr: 'Mon fils s\'est marié l\'été dernier.', level: 1, note: 'Prétérit : got married.' },
    { en: 'wedding', fr: 'le mariage (la cérémonie)', pos: 'n', cat: 'Les événements de la vie', ex: 'The wedding was beautiful.', exFr: 'Le mariage était magnifique.', level: 2 },
    { en: 'move', fr: 'déménager', pos: 'v', cat: 'Les événements de la vie', ex: 'We moved to Brittany in 2015.', exFr: 'Nous avons déménagé en Bretagne en 2015.', level: 1, note: 'move veut aussi dire « bouger ». On dit aussi move house.' },
    { en: 'retire', fr: 'prendre sa retraite', pos: 'v', cat: 'Les événements de la vie', ex: 'My husband retired last year.', exFr: 'Mon mari a pris sa retraite l\'année dernière.', level: 1, note: 'Être à la retraite = to be retired : I\'m retired.' },
    { en: 'start', fr: 'commencer', pos: 'v', cat: 'Les événements de la vie', ex: 'I started work at sixteen.', exFr: 'J\'ai commencé à travailler à seize ans.', level: 1, note: 'started se prononce « star-tid » (après t : une syllabe en plus).' },
    { en: 'finish', fr: 'finir, terminer', pos: 'v', cat: 'Les événements de la vie', ex: 'The film finished at ten o\'clock.', exFr: 'Le film a fini à dix heures.', level: 1 },
    { en: 'study', fr: 'étudier', pos: 'v', cat: 'Les événements de la vie', ex: 'She studied English at school.', exFr: 'Elle a étudié l\'anglais à l\'école.', level: 1, note: 'Prétérit : studied (y → ied).' },
    // mots du passé
    { en: 'yesterday', fr: 'hier', pos: 'adv', cat: 'Les mots du passé', sec: 'en8-s-marqueurs', ex: 'I was at home yesterday.', exFr: 'J\'étais à la maison hier.', level: 1 },
    { en: 'last night', fr: 'hier soir, la nuit dernière', pos: 'x', cat: 'Les mots du passé', sec: 'en8-s-marqueurs', ex: 'I watched a film last night.', exFr: 'J\'ai regardé un film hier soir.', level: 1, note: 'On évite « yesterday night ».' },
    { en: 'last week', fr: 'la semaine dernière', pos: 'x', cat: 'Les mots du passé', sec: 'en8-s-marqueurs', ex: 'We went to London last week.', exFr: 'Nous sommes allés à Londres la semaine dernière.', level: 1, note: 'Pas de « the » : last week, last year, last Monday.' },
    { en: 'last year', fr: 'l\'année dernière', pos: 'x', cat: 'Les mots du passé', sec: 'en8-s-marqueurs', ex: 'They moved last year.', exFr: 'Ils ont déménagé l\'année dernière.', level: 1 },
    { en: 'ago', fr: 'il y a (+ durée)', pos: 'adv', cat: 'Les mots du passé', sec: 'en8-s-marqueurs', ex: 'We met forty years ago.', exFr: 'Nous nous sommes rencontrés il y a quarante ans.', level: 1, note: '**ago** se place après la durée : two days ago = il y a deux jours.' },
    { en: 'the day before yesterday', fr: 'avant-hier', pos: 'x', cat: 'Les mots du passé', sec: 'en8-s-marqueurs', ex: 'She called the day before yesterday.', exFr: 'Elle a appelé avant-hier.', level: 2 },
    { en: 'a long time ago', fr: 'il y a longtemps', pos: 'x', cat: 'Les mots du passé', sec: 'en8-s-marqueurs', ex: 'I studied English a long time ago.', exFr: 'J\'ai étudié l\'anglais il y a longtemps.', level: 2 },
    { en: 'when I was young', fr: 'quand j\'étais jeune', pos: 'x', cat: 'Les mots du passé', sec: 'en8-s-marqueurs', ex: 'When I was young, I played football.', exFr: 'Quand j\'étais jeune, je jouais au foot.', level: 1 },
    { en: 'then', fr: 'ensuite, puis', pos: 'adv', cat: 'Les mots du passé', sec: 'en8-s-marqueurs', ex: 'We had lunch, then we went to the beach.', exFr: 'Nous avons déjeuné, puis nous sommes allés à la plage.', level: 1 }
  ],
  phrases: [
    { en: 'What did you do last weekend?', fr: 'Qu\'est-ce que tu as fait le week-end dernier ?', alt: ['What did you do last week-end?'], cat: 'Raconter son week-end', sec: 'en8-s-did' },
    { en: 'How was your weekend?', fr: 'Comment s\'est passé ton week-end ?', alt: ['How was your week-end?'], cat: 'Raconter son week-end', sec: 'en8-s-was' },
    { en: 'I stayed at home.', fr: 'Je suis resté(e) à la maison.', alt: ['I stayed home.'], cat: 'Raconter son week-end', sec: 'en8-s-ed' },
    { en: 'I saw my friends last night.', fr: 'J\'ai vu mes amis hier soir.', alt: ['I saw my friends yesterday evening.'], cat: 'Raconter son week-end', sec: 'en8-s-irreg' },
    { en: 'We had dinner in a restaurant.', fr: 'Nous avons dîné au restaurant.', alt: ['We had dinner at a restaurant.'], cat: 'Raconter son week-end', sec: 'en8-s-irreg' },
    { en: 'I didn\'t like the film.', fr: 'Je n\'ai pas aimé le film.', alt: ['I didn\'t like the movie.'], cat: 'Raconter son week-end', sec: 'en8-s-did' },
    { en: 'I was very tired yesterday.', fr: 'J\'étais très fatigué(e) hier.', alt: ['Yesterday I was very tired.'], cat: 'Raconter son week-end', sec: 'en8-s-was' },
    { en: 'Did you have a good holiday?', fr: 'Tu as passé de bonnes vacances ?', alt: ['Did you have a nice holiday?'], cat: 'Les vacances', sec: 'en8-s-did' },
    { en: 'Where did you go?', fr: 'Où es-tu allé(e) ?', cat: 'Les vacances', sec: 'en8-s-did' },
    { en: 'We went to the beach.', fr: 'Nous sommes allés à la plage.', cat: 'Les vacances', sec: 'en8-s-irreg' },
    { en: 'We visited a museum.', fr: 'Nous avons visité un musée.', cat: 'Les vacances', sec: 'en8-s-ed' },
    { en: 'We arrived late.', fr: 'Nous sommes arrivés en retard.', cat: 'Les vacances', sec: 'en8-s-ed' },
    { en: 'I took a lot of photos.', fr: 'J\'ai pris beaucoup de photos.', alt: ['I took lots of photos.', 'I took a lot of pictures.'], cat: 'Les vacances', sec: 'en8-s-irreg' },
    { en: 'Did you enjoy the trip?', fr: 'Le voyage t\'a plu ?', alt: ['Did you like the trip?'], cat: 'Les vacances', sec: 'en8-s-did' },
    { en: 'We had a great time!', fr: 'On s\'est très bien amusés !', alt: ['We had a good time!'], cat: 'Les vacances', sec: 'en8-s-vocab', note: 'have a good time = bien s\'amuser, passer un bon moment.' },
    { en: 'It was wonderful!', fr: 'C\'était merveilleux !', cat: 'Les vacances', sec: 'en8-s-was' },
    { en: 'The weather was terrible.', fr: 'Il a fait un temps affreux.', alt: ['The weather was awful.'], cat: 'Les vacances', sec: 'en8-s-was' },
    { en: 'I was born in 1962.', fr: 'Je suis né(e) en 1962.', cat: 'Raconter sa vie', sec: 'en8-s-was' },
    { en: 'Where were you born?', fr: 'Où es-tu né(e) ?', cat: 'Raconter sa vie', sec: 'en8-s-was' },
    { en: 'We got married in 1985.', fr: 'Nous nous sommes mariés en 1985.', alt: ['We married in 1985.', 'We were married in 1985.'], cat: 'Raconter sa vie', sec: 'en8-s-vocab' },
    { en: 'We moved to Nantes in 2010.', fr: 'Nous avons déménagé à Nantes en 2010.', cat: 'Raconter sa vie', sec: 'en8-s-vocab' },
    { en: 'I retired three years ago.', fr: 'J\'ai pris ma retraite il y a trois ans.', cat: 'Raconter sa vie', sec: 'en8-s-marqueurs' },
    { en: 'When I was young, I lived in Lyon.', fr: 'Quand j\'étais jeune, j\'habitais à Lyon.', alt: ['I lived in Lyon when I was young.'], cat: 'Raconter sa vie', sec: 'en8-s-marqueurs' },
    { en: 'It was a long time ago.', fr: 'C\'était il y a longtemps.', cat: 'Raconter sa vie', sec: 'en8-s-marqueurs' }
  ],
  quiz: [
    { id: 'en8-q-01', q: 'Complète : Yesterday I ___ in the garden.', choices: ['work', 'works', 'worked', 'working'], answer: 2, topic: 'Le prétérit en -ed', sec: 'en8-s-ed',
      why: { 0: '« work » est le présent ; yesterday (hier) demande le passé.', 1: '« works » est le présent avec he / she / it.', 3: '« working » s\'utilise avec am / is / are (présent continu).' },
      explain: 'Yesterday → **prétérit** : work + ed = **worked**. → Yesterday I **worked** in the garden. (Hier, j\'ai travaillé dans le jardin.)', say: 'Yesterday I worked in the garden.' },
    { id: 'en8-q-02', q: 'Prétérit de « stop » (arrêter, s\'arrêter) ?', choices: ['stoped', 'stopt', 'stopped', 'stoping'], answer: 2, topic: 'Orthographe du -ed', sec: 'en8-s-orth',
      why: { 0: 'stop est court et finit par voyelle + consonne : on double le p.', 1: 'On entend « t », mais on écrit toujours -ed.', 3: '-ing n\'est pas le passé (et il faudrait aussi doubler le p).' },
      explain: 'stop → **stopped** : consonne doublée, comme plan → planned. → The bus **stopped**. (Le bus s\'est arrêté.)', say: 'The bus stopped.' },
    { id: 'en8-q-03', q: 'Prétérit de « study » (étudier) ?', choices: ['studyed', 'studed', 'studies', 'studied'], answer: 3, topic: 'Orthographe du -ed', sec: 'en8-s-orth',
      why: { 0: 'Consonne (d) + y : le y devient ied.', 1: 'Il faut garder le i : studied.', 2: '« studies » est le présent avec he / she / it.' },
      explain: 'Consonne + **y** → **ied** : study → **studied**. → She **studied** English. (Elle a étudié l\'anglais.)', say: 'She studied English.' },
    { id: 'en8-q-04', q: 'Prétérit de « play » (jouer) ?', choices: ['played', 'plaied', 'plaid', 'plays'], answer: 0, topic: 'Orthographe du -ed', sec: 'en8-s-orth',
      why: { 1: 'Voyelle (a) + y : on garde le y.', 2: 'Il faut garder le y et ajouter -ed.', 3: '« plays » est le présent avec he / she / it.' },
      explain: 'Voyelle + y : on garde le y → **played**. → We **played** cards. (Nous avons joué aux cartes.)', say: 'We played cards.' },
    { id: 'en8-q-05', q: 'Dans quel verbe la fin -ed se prononce « id » (une syllabe en plus) ?', choices: ['worked', 'played', 'liked', 'wanted'], answer: 3, topic: 'Prononciation de -ed', sec: 'en8-s-prononc',
      why: { 0: 'worked : -ed se prononce « t », sans syllabe en plus.', 1: 'played : -ed se prononce « d », sans syllabe en plus.', 2: 'liked : -ed se prononce « t », sans syllabe en plus.' },
      explain: '« id » seulement après **t** ou **d** : **wanted**, needed, visited. → I **wanted** a coffee. (Je voulais un café.)', say: 'I wanted a coffee.' },
    { id: 'en8-q-06', q: 'Écoute ce verbe au passé. Comment se prononce la fin ?', listen: true, say: 'needed', choices: ['« t » (une seule syllabe)', '« d » (une seule syllabe)', '« id » (une syllabe en plus)'], answer: 2, topic: 'Prononciation de -ed', sec: 'en8-s-prononc',
      why: { 0: 'need finit par d : on ajoute une syllabe « id ».', 1: 'need finit par d : -ed ne se colle pas, on ajoute une syllabe « id ».' },
      explain: '**needed** : après t ou d, -ed se prononce « id » → « nii-did ».' },
    { id: 'en8-q-07', q: 'Écoute. Qu\'a fait la personne ?', listen: true, say: 'I watched TV last night.', choices: ['Elle regarde la télé ce soir.', 'Elle a regardé la télé hier soir.', 'Elle a lavé la voiture hier soir.', 'Elle va regarder la télé demain.'], answer: 1, topic: 'Compréhension orale', sec: 'en8-s-prononc',
      why: { 0: '« watched » est au passé, et « last night » = hier soir.', 2: '« laver » serait washed.', 3: 'La phrase est au passé, pas au futur.' },
      explain: '**watched** = a regardé (on entend un petit « t » à la fin) ; **last night** = hier soir. → I watched TV last night. (J\'ai regardé la télé hier soir.)' },
    { id: 'en8-q-08', q: 'Complète : I ___ at home yesterday.', choices: ['were', 'was', 'am', 'did'], answer: 1, topic: 'was / were', sec: 'en8-s-was',
      why: { 0: '« were » va avec you, we, they.', 2: '« am » est le présent ; yesterday = passé.', 3: '« did » ne s\'utilise pas avec to be (at home).' },
      explain: 'to be au passé avec I : **was**. → I **was** at home yesterday. (J\'étais à la maison hier.)', say: 'I was at home yesterday.' },
    { id: 'en8-q-09', q: 'Complète : You ___ late this morning!', choices: ['was', 'are', 'were', 'did'], answer: 2, topic: 'was / were', sec: 'en8-s-was',
      why: { 0: '« was » va avec I, he, she, it. Avec you : were.', 1: '« are » est le présent ; ici on parle de ce matin, c\'est passé.', 3: '« did » ne s\'utilise pas avec to be + adjectif (late).' },
      explain: 'Avec you : **were**. → You **were** late this morning! (Tu étais en retard ce matin !)', say: 'You were late this morning!' },
    { id: 'en8-q-10', q: 'Complète : ___ you at the party last night?', choices: ['Did', 'Was', 'Were', 'Are'], answer: 2, topic: 'was / were', sec: 'en8-s-was',
      why: { 0: 'Avec to be (être à la fête), pas de did : on inverse were et le sujet.', 1: '« Was » va avec I, he, she, it.', 3: '« Are » est le présent ; last night = passé.' },
      explain: 'Question avec to be au passé : **Were** you…? → **Were** you at the party last night? (Tu étais à la fête hier soir ?)', say: 'Were you at the party last night?' },
    { id: 'en8-q-11', q: 'Complète : I didn\'t ___ the film.', choices: ['liked', 'like', 'likes', 'liking'], answer: 1, topic: 'did / didn\'t', sec: 'en8-s-did',
      why: { 0: 'Après didn\'t, le verbe revient à la base : le passé est déjà dans did.', 2: 'Pas de -s après didn\'t.', 3: 'Après didn\'t, pas de -ing : la base.' },
      explain: 'didn\'t + **base** : I didn\'t **like** the film. (Je n\'ai pas aimé le film.)', say: 'I didn\'t like the film.' },
    { id: 'en8-q-12', q: 'Complète : ___ you go to the cinema last week?', choices: ['Did', 'Do', 'Were', 'Was'], answer: 0, topic: 'did / didn\'t', sec: 'en8-s-did',
      why: { 1: '« Do » est le présent ; last week = passé.', 2: 'Avec un verbe d\'action comme go, on utilise Did, pas were.', 3: '« Was » va avec to be (et avec I, he, she, it).' },
      explain: 'Question au passé : **Did** + sujet + base. → **Did** you go to the cinema last week? (Tu es allé au cinéma la semaine dernière ?)', say: 'Did you go to the cinema last week?' },
    { id: 'en8-q-13', q: 'Quelle phrase est correcte ?', choices: ['I didn\'t went to work.', 'I not went to work.', 'I didn\'t go to work.', 'I wasn\'t go to work.'], answer: 2, topic: 'did / didn\'t', sec: 'en8-s-did',
      why: { 0: 'Après didn\'t, la base : go (pas went).', 1: 'Il faut l\'auxiliaire didn\'t : I didn\'t go.', 3: 'wasn\'t va avec to be (I wasn\'t tired), pas avec un verbe comme go.' },
      explain: 'Négatif au passé : **didn\'t + base** → I **didn\'t go** to work. (Je ne suis pas allé au travail.)', say: 'I didn\'t go to work.' },
    { id: 'en8-q-14', q: '« Did you enjoy the trip? » Réponse : Yes, ___.', choices: ['I enjoyed', 'I was', 'I do', 'I did'], answer: 3, topic: 'Réponses courtes', sec: 'en8-s-did',
      why: { 0: 'Dans une réponse courte, on reprend l\'auxiliaire de la question : did.', 1: 'La question est posée avec did, pas avec was.', 2: 'La question est au passé : did.' },
      explain: 'Réponse courte : **Yes, I did.** / **No, I didn\'t.** (Did you enjoy the trip? = Le voyage t\'a plu ?)', say: 'Did you enjoy the trip? Yes, I did.' },
    { id: 'en8-q-15', q: 'Complète : Where ___ you go on holiday last summer?', choices: ['did', 'were', 'do', 'was'], answer: 0, topic: 'did / didn\'t', sec: 'en8-s-did',
      why: { 1: 'Avec go, on utilise did (were va avec to be).', 2: '« do » est le présent ; last summer = passé.', 3: '« was » va avec to be et avec I, he, she, it.' },
      explain: 'Mot interrogatif + **did** + sujet + base : **Where did you go** on holiday last summer? (Où es-tu parti en vacances l\'été dernier ?)', say: 'Where did you go on holiday last summer?' },
    { id: 'en8-q-16', q: 'Comment dit-on « il y a deux ans » ?', choices: ['there are two years', 'two years ago', 'since two years', 'ago two years'], answer: 1, topic: 'Les mots du passé', sec: 'en8-s-marqueurs',
      why: { 0: 'C\'est du mot à mot : en anglais, « il y a » + durée passée = ago.', 2: '« since » veut dire « depuis », pas « il y a ».', 3: 'ago se place après la durée.' },
      explain: '**two years ago** = il y a deux ans. → We moved two years ago. (Nous avons déménagé il y a deux ans.)', say: 'We moved two years ago.' },
    { id: 'en8-q-17', q: 'Comment dit-on « Je suis né à Lyon » ?', choices: ['I am born in Lyon.', 'I born in Lyon.', 'I was born in Lyon.', 'I were born in Lyon.'], answer: 2, topic: 'was / were', sec: 'en8-s-was',
      why: { 0: 'La naissance est passée : en anglais, on utilise was born.', 1: 'Il manque was : I was born.', 3: 'Avec I : was.' },
      explain: 'Naître = **to be born** → I **was born** in Lyon. (Je suis né à Lyon.)', say: 'I was born in Lyon.' },
    { id: 'en8-q-18', q: 'Complète : It ___ cold yesterday, so I stayed at home.', choices: ['was', 'were', 'did', 'is'], answer: 0, topic: 'was / were', sec: 'en8-s-was',
      why: { 1: '« were » va avec you, we, they ; avec it : was.', 2: '« did » ne s\'utilise pas devant un adjectif (cold) : il faut to be.', 3: '« is » est le présent ; yesterday = passé.' },
      explain: 'It **was** cold yesterday, so I stayed at home. (Il faisait froid hier, alors je suis resté à la maison.)', say: 'It was cold yesterday, so I stayed at home.' },
    { id: 'en8-q-19', q: 'Prétérit de « go » (aller) ?', choices: ['goed', 'gone', 'went', 'goes'], answer: 2, topic: 'Verbes irréguliers courants', sec: 'en8-s-irreg',
      why: { 0: 'go est irrégulier : pas de -ed.', 1: '« gone » est le participe passé (il s\'utilise après have, voir chapitre 9).', 3: '« goes » est le présent avec he / she / it.' },
      explain: 'go → **went** (irrégulier, voir chapitre 9). → We **went** to the beach. (Nous sommes allés à la plage.)', say: 'We went to the beach.' },
    { id: 'en8-q-20', q: 'Complète : We ___ a lot of photos on holiday.', choices: ['taked', 'took', 'take', 'takes'], answer: 1, topic: 'Verbes irréguliers courants', sec: 'en8-s-irreg',
      why: { 0: 'take est irrégulier : « taked » n\'existe pas.', 2: '« take » est le présent (ou la base).', 3: '« takes » est le présent avec he / she / it.' },
      explain: 'take → **took**. → We **took** a lot of photos on holiday. (Nous avons pris beaucoup de photos en vacances.)', say: 'We took a lot of photos on holiday.' },
    { id: 'en8-q-21', q: 'Écoute. Qu\'ont-ils fait ?', listen: true, say: 'We went to the beach and we had lunch in a small restaurant.', choices: ['Ils vont à la plage et déjeunent dans un petit restaurant.', 'Ils sont allés au musée, puis au restaurant.', 'Ils sont allés à la plage et ont déjeuné dans un petit restaurant.', 'Ils sont allés à la plage mais n\'ont pas mangé.'], answer: 2, topic: 'Compréhension orale', sec: 'en8-s-irreg',
      why: { 0: '« went » et « had » sont au passé.', 1: 'On entend beach (la plage), pas museum.', 3: '« had lunch » = ils ont déjeuné.' },
      explain: '**went** = sont allés ; **had lunch** = ont déjeuné. → We went to the beach and we had lunch in a small restaurant.' },
    { id: 'en8-q-22', q: 'Écoute. Qu\'a dit la personne ?', listen: true, say: 'I retired three years ago.', choices: ['J\'ai déménagé il y a trois ans.', 'J\'ai pris ma retraite il y a trois ans.', 'Je prendrai ma retraite dans trois ans.', 'J\'ai pris ma retraite il y a treize ans.'], answer: 1, topic: 'Compréhension orale', sec: 'en8-s-vocab',
      why: { 0: '« J\'ai déménagé » serait I moved.', 2: '« retired » est au passé, et ago = il y a.', 3: 'On entend three (3), pas thirteen (13).' },
      explain: '**retired** = a pris sa retraite ; **three years ago** = il y a trois ans. → I retired three years ago.' },
    { id: 'en8-q-23', q: 'Écoute. Que demande la personne ?', listen: true, say: 'Did you have a good weekend?', choices: ['Tu pars en week-end ?', 'Tu as passé un bon week-end ?', 'Tu as un bon travail ?', 'Tu étais là ce week-end ?'], answer: 1, topic: 'Compréhension orale', sec: 'en8-s-did',
      why: { 0: 'La question commence par Did : on parle du week-end passé.', 2: 'On entend weekend, pas work.', 3: '« Tu étais là ? » serait Were you here?' },
      explain: '**Did you have a good weekend?** = Tu as passé un bon week-end ? (have a good weekend = passer un bon week-end)' },
    { id: 'en8-q-24', q: 'Comment dit-on « Je suis allé à Londres la semaine dernière » ?', choices: ['I went to London the last week.', 'I went to London last week.', 'I go to London last week.', 'I have gone to London last week.'], answer: 1, topic: 'Les mots du passé', sec: 'en8-s-marqueurs',
      why: { 0: 'Pas de « the » devant last week.', 2: '« go » est le présent : il faut went.', 3: 'Avec last week (un moment précis du passé), on utilise le prétérit simple : went.' },
      explain: '**last week** sans « the », et le prétérit **went**. → I went to London last week. (Je suis allé à Londres la semaine dernière.)', say: 'I went to London last week.' }
  ],
  exercises: [
    { id: 'en8-x-01', prompt: 'Écris le prétérit de « work » (travailler).', answers: ['worked'], topic: 'Le prétérit en -ed', sec: 'en8-s-ed', strict: true,
      hint: 'Verbe régulier : + ed.',
      explain: 'work → **worked**. → I **worked** yesterday. (J\'ai travaillé hier.)',
      rule: 'Verbe régulier au prétérit : base + ed, pour toutes les personnes.',
      mistakes: [{ text: 'workt', msg: 'On l\'entend « t », mais on l\'écrit toujours **-ed** : **worked**.' }, { text: 'working', msg: '-ing sert au présent continu. Au passé : **worked**.' }],
      say: 'I worked yesterday.' },
    { id: 'en8-x-02', prompt: 'Écris le prétérit de « like » (aimer).', answers: ['liked'], topic: 'Orthographe du -ed', sec: 'en8-s-orth', strict: true,
      hint: 'like finit déjà par un e.',
      explain: 'like → **liked** : le verbe finit par e, on ajoute seulement d. → I **liked** the film. (J\'ai aimé le film.)',
      rule: 'Verbe en e : on ajoute seulement d (like → liked, live → lived).',
      mistakes: [{ text: 'likeed', msg: 'Le verbe finit déjà par e : on ajoute seulement **d** → **liked**.' }, { text: 'likked', msg: 'On ne double pas le k : like finit par e, on ajoute d → **liked**.' }],
      say: 'I liked the film.' },
    { id: 'en8-x-03', prompt: 'Écris le prétérit de « stop » (arrêter).', answers: ['stopped'], topic: 'Orthographe du -ed', sec: 'en8-s-orth', strict: true,
      hint: 'Verbe court en voyelle + consonne…',
      explain: 'stop → **stopped** : on double le p. → The rain **stopped**. (La pluie s\'est arrêtée.)',
      rule: 'Verbe court en 1 voyelle + 1 consonne : on double la consonne (stop → stopped, plan → planned).',
      mistakes: [{ text: 'stoped', msg: 'stop est court et finit par voyelle + consonne : on double le p → **stopped**.' }, { text: 'stopt', msg: 'On l\'entend « t », mais on écrit **-ed** (en doublant le p) : **stopped**.' }],
      say: 'The rain stopped.' },
    { id: 'en8-x-04', prompt: 'Écris le prétérit de « study » (étudier).', answers: ['studied'], topic: 'Orthographe du -ed', sec: 'en8-s-orth', strict: true,
      hint: 'Consonne + y : que devient le y ?',
      explain: 'study → **studied** : consonne + y → ied. → She **studied** English. (Elle a étudié l\'anglais.)',
      rule: 'Consonne + y : y → ied (study → studied, cry → cried).',
      mistakes: [{ text: 'studyed', msg: 'Consonne + y : le y devient **ied** → **studied**.' }, { text: 'studed', msg: 'On garde le i : y → **ied** → **studied**.' }],
      say: 'She studied English.' },
    { id: 'en8-x-05', prompt: 'Écris le prétérit de « play » (jouer).', answers: ['played'], topic: 'Orthographe du -ed', sec: 'en8-s-orth', strict: true,
      hint: 'Voyelle + y : le y reste-t-il ?',
      explain: 'play → **played** : voyelle (a) + y, on garde le y. → We **played** cards. (Nous avons joué aux cartes.)',
      rule: 'Voyelle + y : on garde le y (play → played, stay → stayed).',
      mistakes: [{ text: 'plaied', msg: 'Voyelle (a) + y : on garde le y → **played**.' }, { text: 'plaid', msg: 'Il faut garder le y et ajouter -ed : **played**.' }],
      say: 'We played cards.' },
    { id: 'en8-x-06', prompt: 'Complète au prétérit : We ___ (visit) a museum yesterday.', answers: ['visited', 'We visited a museum yesterday'], topic: 'Le prétérit en -ed', sec: 'en8-s-ed', strict: true,
      hint: 'yesterday → passé. Attention à l\'orthographe.',
      explain: 'visit → **visited** (pas de doublement : l\'accent est sur « VI »). → We **visited** a museum yesterday. (Nous avons visité un musée hier.)',
      rule: 'Moment précis du passé (yesterday, last week…) → prétérit.',
      mistakes: [{ text: 'visitted', msg: 'On ne double pas le t de visit (verbe long, accent sur « VI ») : **visited**.' }, { text: 'visit', msg: 'Yesterday → passé : **visited**.' }, { text: 'have visited', msg: 'Avec yesterday (moment précis), on utilise le prétérit simple : **visited**.' }],
      say: 'We visited a museum yesterday.' },
    { id: 'en8-x-07', prompt: 'Complète avec was ou were : I ___ very tired last night.', answers: ['was', 'I was very tired last night'], topic: 'was / were', sec: 'en8-s-was', strict: true,
      hint: 'I → was ou were ?',
      explain: 'Avec I : **was**. → I **was** very tired last night. (J\'étais très fatigué hier soir.)',
      rule: 'I / he / she / it → was · you / we / they → were',
      mistakes: [{ text: 'were', msg: 'Avec I : **was**. « were » va avec you, we, they.' }, { text: 'am', msg: 'last night = passé : **was**.' }],
      say: 'I was very tired last night.' },
    { id: 'en8-x-08', prompt: 'Complète avec was ou were : My parents ___ on holiday last week.', answers: ['were', 'My parents were on holiday last week'], topic: 'was / were', sec: 'en8-s-was', strict: true,
      hint: 'My parents = they.',
      explain: 'My parents = they → **were**. → My parents **were** on holiday last week. (Mes parents étaient en vacances la semaine dernière.)',
      rule: 'I / he / she / it → was · you / we / they → were',
      mistakes: [{ text: 'was', msg: 'My parents = they (plusieurs personnes) → **were**.' }, { text: 'are', msg: 'last week = passé : **were**.' }],
      say: 'My parents were on holiday last week.' },
    { id: 'en8-x-09', prompt: 'Mets à la forme négative : It was cold.', answers: ['It wasn\'t cold'], topic: 'was / were', sec: 'en8-s-was',
      hint: 'was + not.',
      explain: 'Avec was / were, on ajoute simplement **not** : It **wasn\'t** (was not) cold. (Il ne faisait pas froid.)',
      rule: 'Négatif : wasn\'t / weren\'t (jamais de did avec to be).',
      mistakes: [{ text: 'It didn\'t was cold', msg: 'Avec was / were, pas de did : on ajoute **not** → It **wasn\'t** cold.' }, { text: 'It didn\'t be cold', msg: 'Avec to be, pas de did : It **wasn\'t** cold.' }, { text: 'It not was cold', msg: '« not » se place après was : It **wasn\'t** (was not) cold.' }],
      say: 'It wasn\'t cold.' },
    { id: 'en8-x-10', prompt: 'Transforme en question : You were at home.', answers: ['Were you at home'], topic: 'was / were', sec: 'en8-s-was',
      hint: 'On inverse were et you.',
      explain: 'Question avec to be : on inverse → **Were you** at home? (Tu étais à la maison ?)',
      rule: 'Question : Was / Were + sujet… ? (pas de did avec to be)',
      mistakes: [{ text: 'Did you were at home', msg: 'Avec was / were, pas de did : on inverse → **Were you** at home?' }, { text: 'Was you at home', msg: 'Avec you : **were** → Were you at home?' }, { text: 'Did you be at home', msg: 'Avec to be, pas de did : **Were you** at home?' }],
      say: 'Were you at home?' },
    { id: 'en8-x-11', prompt: 'Mets à la forme négative : I liked the film.', answers: ['I didn\'t like the film', 'I didn\'t like the movie'], topic: 'did / didn\'t', sec: 'en8-s-did',
      hint: 'didn\'t + base du verbe.',
      explain: 'Négatif au passé : **didn\'t + base** → I **didn\'t like** the film. (Je n\'ai pas aimé le film.)',
      rule: 'Sujet + didn\'t + base verbale (sans -ed).',
      mistakes: [{ text: 'I didn\'t liked the film', msg: 'Après didn\'t, le verbe revient à la **base** (sans -ed) : I didn\'t **like** the film.' }, { text: 'I liked not the film', msg: 'En anglais, on utilise l\'auxiliaire : I **didn\'t like** the film.' }, { text: 'I don\'t liked the film', msg: 'Au passé : **didn\'t** (pas don\'t) + base → I didn\'t like the film.' }],
      say: 'I didn\'t like the film.' },
    { id: 'en8-x-12', prompt: 'Mets à la forme négative : She went to the beach.', answers: ['She didn\'t go to the beach'], topic: 'did / didn\'t', sec: 'en8-s-did',
      hint: 'didn\'t + base : went → ?',
      explain: 'didn\'t + **base** : went → **go**. → She **didn\'t go** to the beach. (Elle n\'est pas allée à la plage.)',
      rule: 'Sujet + didn\'t + base verbale (même pour les verbes irréguliers).',
      mistakes: [{ text: 'She didn\'t went to the beach', msg: 'Après didn\'t, la **base** : went → **go**. Le passé est déjà dans did.' }, { text: 'She doesn\'t go to the beach', msg: '« doesn\'t » est le présent. Au passé : She **didn\'t go**.' }, { text: 'She didn\'t goes to the beach', msg: 'Pas de -s après didn\'t : She didn\'t **go**.' }],
      say: 'She didn\'t go to the beach.' },
    { id: 'en8-x-13', prompt: 'Transforme en question : You enjoyed the trip.', answers: ['Did you enjoy the trip'], topic: 'did / didn\'t', sec: 'en8-s-did',
      hint: 'Did + sujet + base ?',
      explain: 'Question au passé : **Did** + sujet + **base** → **Did you enjoy** the trip? (Le voyage t\'a plu ?)',
      rule: 'Question au passé : Did + sujet + base verbale ?',
      mistakes: [{ text: 'Did you enjoyed the trip', msg: 'Après Did, le verbe revient à la **base** : enjoy.' }, { text: 'Do you enjoy the trip', msg: 'Au passé : **Did**, pas Do.' }, { text: 'Enjoyed you the trip', msg: 'En anglais, on ne place pas le verbe avant le sujet : **Did** you enjoy the trip?' }],
      say: 'Did you enjoy the trip?' },
    { id: 'en8-x-14', prompt: 'Remets dans l\'ordre : you / what / yesterday / did / do / ?', answers: ['What did you do yesterday'], topic: 'did / didn\'t', sec: 'en8-s-did',
      hint: 'Mot interrogatif + did + sujet + base + moment.',
      explain: '→ **What did you do yesterday?** (Qu\'est-ce que tu as fait hier ?) did = auxiliaire, do = faire.',
      rule: 'Mot interrogatif + did + sujet + base verbale ?',
      mistakes: [{ text: 'What you did do yesterday', msg: 'Dans la question, **did** se place avant le sujet : What **did you** do yesterday?' }, { text: 'What did you yesterday do', msg: 'Le verbe do suit le sujet, et yesterday va à la fin : What did you **do yesterday**?' }],
      say: 'What did you do yesterday?' },
    { id: 'en8-x-15', prompt: 'Traduis : Où es-tu allé ?', answers: ['Where did you go'], topic: 'did / didn\'t', sec: 'en8-s-did',
      hint: 'Where + did + you + base de went.',
      explain: '→ **Where did you go?** (Où es-tu allé ?)',
      rule: 'Mot interrogatif + did + sujet + base verbale ?',
      mistakes: [{ text: 'Where did you went', msg: 'Après did, la **base** : **go**.' }, { text: 'Where you went', msg: 'Il faut l\'auxiliaire did : Where **did you go**?' }, { text: 'Where are you gone', msg: 'C\'est une construction française. En anglais : Where **did you go**?' }],
      say: 'Where did you go?' },
    { id: 'en8-x-16', prompt: 'Réponds « oui » avec une réponse courte : Did you see the film? — Yes, ___.', answers: ['I did', 'Yes, I did'], topic: 'Réponses courtes', sec: 'en8-s-did',
      hint: 'On reprend l\'auxiliaire de la question.',
      explain: '→ Did you see the film? Yes, **I did**. (Oui.) / No, I didn\'t. (Non.)',
      rule: 'Réponse courte au passé : Yes, I did / No, I didn\'t.',
      mistakes: [{ text: 'I saw', msg: 'Dans une réponse courte, on reprend l\'auxiliaire de la question : Yes, **I did**.' }, { text: 'I do', msg: 'La question est au passé : Yes, I **did**.' }, { text: 'I was', msg: 'La question est posée avec did : Yes, I **did**.' }],
      say: 'Yes, I did.' },
    { id: 'en8-x-17', prompt: 'Réponds « non » avec une réponse courte : Were you tired? — No, ___.', answers: ['I wasn\'t', 'No, I wasn\'t', 'I wasn\'t tired', 'No, I wasn\'t tired'], topic: 'Réponses courtes', sec: 'en8-s-was',
      hint: 'La question est posée avec were (to be).',
      explain: '→ Were you tired? No, **I wasn\'t**. (Non.) Avec I : was → wasn\'t.',
      rule: 'Réponse courte avec to be : Yes, I was / No, I wasn\'t · Yes, they were / No, they weren\'t.',
      mistakes: [{ text: 'I didn\'t', msg: 'La question est posée avec were (to be) : No, I **wasn\'t**.' }, { text: 'I weren\'t', msg: 'Avec I : **wasn\'t**.' }],
      say: 'No, I wasn\'t.' },
    { id: 'en8-x-18', prompt: 'Traduis : il y a deux jours', answers: ['two days ago'], topic: 'Les mots du passé', sec: 'en8-s-marqueurs',
      hint: 'La durée d\'abord, puis un petit mot.',
      explain: '« il y a » + durée = durée + **ago** → **two days ago**.',
      rule: 'il y a + durée (dans le passé) = durée + ago',
      mistakes: [{ text: 'there are two days', msg: '« il y a » + durée passée = **ago**, placé après : two days ago.' }, { text: 'ago two days', msg: '**ago** se place après la durée : two days ago.' }, { text: 'since two days', msg: 'since = depuis. Il y a deux jours = two days **ago**.' }],
      say: 'two days ago' },
    { id: 'en8-x-19', prompt: 'Traduis : la semaine dernière', answers: ['last week'], topic: 'Les mots du passé', sec: 'en8-s-marqueurs',
      hint: 'Pas d\'article.',
      explain: '→ **last week** (sans « the »).',
      rule: 'last week / last year / last Monday : sans « the ».',
      mistakes: [{ text: 'the last week', msg: 'Pas de « the » : **last week**. (the last week = les 7 derniers jours.)' }, { text: 'the week last', msg: 'last se place avant le nom : **last week**.' }],
      say: 'last week' },
    { id: 'en8-x-20', prompt: 'Traduis : hier soir', answers: ['last night', 'yesterday evening'], topic: 'Les mots du passé', sec: 'en8-s-marqueurs',
      hint: 'Mot à mot : « la dernière nuit ».',
      explain: '→ **last night** (ou yesterday evening).',
      rule: 'hier soir = last night ; hier matin = yesterday morning.',
      mistakes: [{ text: 'yesterday night', msg: 'On dit plutôt **last night** (ou yesterday evening).' }, { text: 'the last night', msg: 'Pas de « the » : **last night**.' }],
      say: 'last night' },
    { id: 'en8-x-21', prompt: 'Complète au prétérit : Last summer, we ___ (go) to Spain.', answers: ['went', 'Last summer, we went to Spain'], topic: 'Verbes irréguliers courants', sec: 'en8-s-irreg', strict: true,
      hint: 'go est irrégulier.',
      explain: 'go → **went**. → Last summer, we **went** to Spain. (L\'été dernier, nous sommes allés en Espagne.)',
      rule: 'Les verbes irréguliers ont un prétérit à apprendre par cœur (go → went) : voir chapitre 9.',
      mistakes: [{ text: 'goed', msg: 'go est irrégulier : le prétérit est **went** (voir chapitre 9).' }, { text: 'go', msg: 'Last summer = passé : **went**.' }, { text: 'gone', msg: '« gone » est le participe passé (après have). Au prétérit : **went**.' }],
      say: 'Last summer, we went to Spain.' },
    { id: 'en8-x-22', prompt: 'Complète au prétérit : I ___ (buy) a new coat yesterday.', answers: ['bought', 'I bought a new coat yesterday'], topic: 'Verbes irréguliers courants', sec: 'en8-s-irreg', strict: true,
      hint: 'buy est irrégulier.',
      explain: 'buy → **bought**. → I **bought** a new coat yesterday. (J\'ai acheté un nouveau manteau hier.)',
      rule: 'buy → bought (irrégulier).',
      mistakes: [{ text: 'buyed', msg: 'buy est irrégulier : le prétérit est **bought**.' }, { text: 'buy', msg: 'yesterday → passé : **bought**.' }],
      say: 'I bought a new coat yesterday.' },
    { id: 'en8-x-23', prompt: 'Complète au prétérit : We ___ (have) dinner in a restaurant.', answers: ['had', 'We had dinner in a restaurant'], topic: 'Verbes irréguliers courants', sec: 'en8-s-irreg', strict: true,
      hint: 'have est irrégulier.',
      explain: 'have → **had**. → We **had** dinner in a restaurant. (Nous avons dîné au restaurant.)',
      rule: 'have → had (irrégulier) ; have dinner = dîner.',
      mistakes: [{ text: 'haved', msg: 'have est irrégulier : le prétérit est **had**.' }, { text: 'have', msg: 'Il faut le passé : **had**.' }, { text: 'has', msg: '« has » est le présent avec he / she / it. Au passé : **had**.' }],
      say: 'We had dinner in a restaurant.' },
    { id: 'en8-x-24', prompt: 'Traduis : Je suis né en 1958.', answers: ['I was born in 1958'], topic: 'was / were', sec: 'en8-s-was', strict: true,
      hint: 'Naître = to be born, au passé.',
      explain: '→ **I was born in 1958.** (Je suis né en 1958.)',
      rule: 'Naître = to be born : I was born in + année / ville.',
      mistakes: [{ text: 'I am born in 1958', msg: 'Ta naissance est passée : I **was** born in 1958.' }, { text: 'I born in 1958', msg: 'Il manque **was** : I was born in 1958.' }, { text: 'I was born on 1958', msg: 'Avec une année : **in** 1958.' }],
      say: 'I was born in 1958.' },
    { id: 'en8-x-25', prompt: 'Traduis : Nous nous sommes mariés en 1980.', answers: ['We got married in 1980', 'We married in 1980', 'We were married in 1980'], topic: 'Les événements de la vie', sec: 'en8-s-vocab', strict: true,
      hint: 'Se marier = get married (get est irrégulier).',
      explain: '→ **We got married in 1980.** (Nous nous sommes mariés en 1980.)',
      rule: 'se marier = get married → prétérit : got married.',
      mistakes: [{ text: 'We have married in 1980', msg: 'Avec une date, on utilise le prétérit : We **got married** in 1980.' }, { text: 'We are married in 1980', msg: 'Au passé : We **got married** in 1980.' }, { text: 'We got marry in 1980', msg: 'On dit **get married** : We got **married** in 1980.' }],
      say: 'We got married in 1980.' },
    { id: 'en8-x-26', prompt: 'Traduis : J\'ai pris ma retraite il y a trois ans.', answers: ['I retired three years ago'], topic: 'Les événements de la vie', sec: 'en8-s-marqueurs', strict: true,
      hint: 'prendre sa retraite = retire ; il y a = … ago.',
      explain: '→ **I retired three years ago.** (J\'ai pris ma retraite il y a trois ans.)',
      rule: 'Durée + ago → prétérit.',
      mistakes: [{ text: 'I retired there are three years', msg: 'il y a + durée = **ago**, après la durée : three years ago.' }, { text: 'I have retired three years ago', msg: 'Avec ago, on utilise le prétérit simple : I **retired** three years ago.' }, { text: 'I retired ago three years', msg: '**ago** se place après la durée : three years ago.' }, { text: 'I retire three years ago', msg: 'C\'est passé (three years ago) : il faut le prétérit → I **retired** three years ago.' }],
      say: 'I retired three years ago.' },
    { id: 'en8-x-27', prompt: 'Complète au prétérit : When I was young, I ___ (live) in a small village.', answers: ['lived', 'When I was young, I lived in a small village'], topic: 'Le prétérit en -ed', sec: 'en8-s-marqueurs', strict: true,
      hint: 'live finit par e.',
      explain: 'live → **lived**. → When I was young, I **lived** in a small village. (Quand j\'étais jeune, j\'habitais dans un petit village.) L\'imparfait français se traduit aussi par le prétérit.',
      rule: 'Verbe en e : + d (live → lived).',
      mistakes: [{ text: 'live', msg: 'When I was young = passé : **lived**.' }, { text: 'liveed', msg: 'live finit déjà par e : on ajoute seulement d → **lived**.' }],
      say: 'When I was young, I lived in a small village.' },
    { id: 'en8-x-28', prompt: 'Traduis : Elle m\'a appelé hier.', answers: ['She called me yesterday', 'Yesterday she called me', 'She phoned me yesterday', 'She rang me yesterday'], topic: 'Le prétérit en -ed', sec: 'en8-s-ed', strict: true,
      hint: 'appeler = call ; hier = yesterday.',
      explain: '→ **She called me yesterday.** (Elle m\'a appelé hier.)',
      rule: 'Moment précis du passé (yesterday) → prétérit.',
      mistakes: [{ text: 'She has called me yesterday', msg: 'Avec yesterday, prétérit simple : She **called** me yesterday.' }, { text: 'She call me yesterday', msg: 'Il faut le passé : She **called** me yesterday.' }, { text: 'She calls me yesterday', msg: '« calls » est le présent. Au passé : She **called** me yesterday.' }],
      say: 'She called me yesterday.' }
  ]
});
