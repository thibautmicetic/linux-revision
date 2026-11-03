/* Anglais — chapitre 13 (niveau 2) : Ce que j'ai déjà fait (le present perfect : have / has + participe passé, ever / never, already / yet / just, been / gone, present perfect ou prétérit) */
APP.registerChapter({
  id: 'en13', subject: 'anglais', num: 13, tier: 2,
  title: 'Ce que j\'ai déjà fait', subtitle: 'le present perfect · ever, never · already, yet, just · been ou gone · present perfect ou prétérit',
  vocabSec: 'en13-s-vocab',
  sections: [
    {
      id: 'en13-s-forme', title: 'Le present perfect : have / has + participe passé',
      html: `
<p>Au chapitre 12, tu as découvert la question <span class="say">Have you ever…?</span>. Ici, on apprend bien ce temps : le <b>present perfect</b>.</p>
<p>Le present perfect parle du <b>passé</b>, mais <b>sans dire quand</b>. Ce qui compte, c'est le lien avec <b>maintenant</b> : <span class="say">I have lost my keys.</span> — J'ai perdu mes clés (et je ne les ai toujours pas).</p>
<h3>La construction : have / has + participe passé</h3>
<p>Le <b>participe passé</b>, c'est la <b>3e colonne</b> des verbes irréguliers (chapitre 9) : <span class="say">see, saw, seen</span>. Pour les verbes réguliers, c'est la forme en <b>-ed</b>, comme au prétérit : <span class="say">visit</span> → <span class="say">visited</span>.</p>
<table><tr><th>Forme longue</th><th>Forme courte (à l'oral)</th><th>Français</th></tr>
<tr><td><span class="say">I have finished</span></td><td><span class="say">I've finished</span></td><td>j'ai fini</td></tr>
<tr><td><span class="say">you have finished</span></td><td><span class="say">you've finished</span></td><td>tu as fini</td></tr>
<tr><td><span class="say">he has finished</span></td><td><span class="say">he's finished</span></td><td>il a fini</td></tr>
<tr><td><span class="say">she has finished</span></td><td><span class="say">she's finished</span></td><td>elle a fini</td></tr>
<tr><td><span class="say">we have finished</span></td><td><span class="say">we've finished</span></td><td>nous avons fini</td></tr>
<tr><td><span class="say">they have finished</span></td><td><span class="say">they've finished</span></td><td>ils ont fini</td></tr></table>
<h3>Quelques participes à connaître</h3>
<p>Réguliers : <span class="say">finished</span> (fini) · <span class="say">visited</span> (visité) · <span class="say">cleaned</span> (nettoyé) · <span class="say">stopped</span> (arrêté).<br>
Irréguliers : <span class="say">been</span> (été, allé) · <span class="say">done</span> (fait) · <span class="say">seen</span> (vu) · <span class="say">eaten</span> (mangé) · <span class="say">lost</span> (perdu) · <span class="say">bought</span> (acheté) · <span class="say">broken</span> (cassé) · <span class="say">written</span> (écrit) · <span class="say">met</span> (rencontré).</p>
<h3>Négation et question</h3>
<ul>
<li>Négation : <span class="say">haven't</span> / <span class="say">hasn't</span> + participe. <span class="say">I haven't seen this film.</span> — Je n'ai pas vu ce film.</li>
<li>Question : <b>Have / Has</b> passe devant le sujet. <span class="say">Has she called you?</span> — Est-ce qu'elle t'a appelé ?</li>
<li>Réponses courtes : <span class="say">Yes, I have.</span> / <span class="say">No, I haven't.</span> · <span class="say">Yes, she has.</span> / <span class="say">No, she hasn't.</span></li>
</ul>
<div class="callout key"><b>À retenir</b> sujet + <b>have / has</b> + <b>participe passé</b>. <b>has</b> avec he, she, it (ou un nom au singulier) ; <b>have</b> avec I, you, we, they.</div>
<div class="callout warn"><b>Pièges</b> Pas de <b>did</b> au present perfect : <span class="say">Have you seen it?</span> (pas « Did you seen it? »). Après have, jamais le prétérit : <span class="say">I have seen</span> (pas « I have saw »). Et <span class="say">she's</span> peut vouloir dire <b>she is</b> (<span class="say">She's tired.</span> — Elle est fatiguée) ou <b>she has</b> (<span class="say">She's left.</span> — Elle est partie).</div>`
    },
    {
      id: 'en13-s-experience', title: 'Raconter ses expériences : ever, never, combien de fois',
      html: `
<p>Pour parler de ce qu'on a fait (ou pas) <b>dans sa vie</b>, jusqu'à aujourd'hui, sans dire quand, on utilise le present perfect.</p>
<h3>ever : « déjà », dans une question</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">Have you ever been abroad?</span></td><td>Es-tu déjà allé à l'étranger ?</td></tr>
<tr><td><span class="say">Have you ever ridden a horse?</span></td><td>Es-tu déjà monté à cheval ?</td></tr>
<tr><td><span class="say">Have you ever met a famous person?</span></td><td>As-tu déjà rencontré une personne célèbre ?</td></tr>
<tr><td><span class="say">Has your wife ever tried snails?</span></td><td>Ta femme a-t-elle déjà goûté des escargots ?</td></tr></table>
<h3>Répondre</h3>
<ul>
<li><span class="say">Yes, I have.</span> — Oui. · <span class="say">Yes, once.</span> — Oui, une fois. · <span class="say">Yes, twice.</span> — Oui, deux fois. · <span class="say">Yes, three times.</span> — Oui, trois fois.</li>
<li><span class="say">No, I haven't.</span> — Non. · <span class="say">No, never.</span> — Non, jamais.</li>
</ul>
<h3>never : jamais</h3>
<p><span class="say">never</span> se place entre have et le participe : <span class="say">I've never been on a cruise.</span> — Je n'ai jamais fait de croisière. <span class="say">She has never skied.</span> — Elle n'a jamais fait de ski.</p>
<p>En fin de phrase, <span class="say">before</span> veut dire « auparavant, avant aujourd'hui » : <span class="say">I've never done this before.</span> — Je n'ai jamais fait ça auparavant.</p>
<h3>Combien de fois ?</h3>
<p><span class="say">How many times have you been to London?</span> — Combien de fois es-tu allé à Londres ?<br>
<span class="say">once</span> (une fois) · <span class="say">twice</span> (deux fois) · <span class="say">three times</span> (trois fois) · <span class="say">many times</span> (de nombreuses fois).</p>
<div class="callout key"><b>À retenir</b> <b>ever</b> = déjà (dans une question : « une fois dans ta vie ? »). <b>never</b> = jamais. Une fois = <b>once</b>, deux fois = <b>twice</b>, puis <b>three times</b>, <b>four times</b>…</div>
<div class="callout warn"><b>Pièges</b> <b>never</b> est déjà négatif : <span class="say">I've never been</span>, jamais « I haven't never been ». Et pas de <b>ever</b> dans une phrase affirmative : « I've ever been to Rome » est faux → <span class="say">I've been to Rome.</span></div>`
    },
    {
      id: 'en13-s-deja-encore', title: 'already, yet, just : c\'est fait ou pas encore ?',
      html: `
<p>Le present perfect sert aussi à faire le point : qu'est-ce qui est <b>déjà fait</b> ? Qu'est-ce qui n'est <b>pas encore fait</b> ? Trois petits mots t'aident.</p>
<table><tr><th>Mot</th><th>Sens</th><th>Place</th><th>Exemple</th></tr>
<tr><td><span class="say">just</span></td><td>venir de</td><td>entre have et le participe</td><td><span class="say">I've just cleaned the kitchen.</span><br>Je viens de nettoyer la cuisine.</td></tr>
<tr><td><span class="say">already</span></td><td>déjà (c'est fait)</td><td>entre have et le participe</td><td><span class="say">She has already done the washing.</span><br>Elle a déjà fait la lessive.</td></tr>
<tr><td><span class="say">yet</span> (question)</td><td>déjà ? (est-ce fait ?)</td><td>à la fin</td><td><span class="say">Have you made the beds yet?</span><br>Tu as fait les lits ?</td></tr>
<tr><td><span class="say">not … yet</span></td><td>pas encore</td><td>yet à la fin</td><td><span class="say">I haven't hoovered yet.</span><br>Je n'ai pas encore passé l'aspirateur.</td></tr></table>
<h3>La liste des tâches</h3>
<ul>
<li><span class="say">Have you done the washing-up yet?</span> — Tu as fait la vaisselle ?</li>
<li><span class="say">Yes, I've just done it.</span> — Oui, je viens de la faire.</li>
<li><span class="say">Have you taken the bin out?</span> — Tu as sorti la poubelle ?</li>
<li><span class="say">Not yet. I'll do it later.</span> — Pas encore. Je le ferai plus tard.</li>
</ul>
<div class="callout key"><b>À retenir</b> <b>just</b> et <b>already</b> au milieu : have + just / already + participe. <b>yet</b> à la fin d'une question ou d'une négation.</div>
<div class="callout info"><b>Trois façons de dire « déjà »</b> <span class="say">ever</span> : dans ta vie ? (<span class="say">Have you ever been to Rome?</span>) · <span class="say">already</span> : c'est fait, plus tôt que prévu (<span class="say">I've already paid.</span>) · <span class="say">yet</span> : est-ce que c'est fait ? (<span class="say">Have you paid yet?</span>)</div>
<div class="callout warn"><b>Piège</b> « Je n'ai pas encore fini » se dit <span class="say">I haven't finished yet.</span>, et non « I haven't already finished » ni « I have yet finished ». Et « je viens de… » ne se traduit pas mot à mot : <span class="say">I've just eaten.</span> — Je viens de manger.</div>`
    },
    {
      id: 'en13-s-been-gone', title: 'been ou gone ?',
      html: `
<p>Le verbe <span class="say">go</span> (aller) a deux participes possibles au present perfect. Ils ne veulent pas dire la même chose.</p>
<table><tr><th>Anglais</th><th>Sens</th></tr>
<tr><td><span class="say">My husband has gone to the bank.</span></td><td>Mon mari est allé à la banque. Il y est <b>encore</b> (il n'est pas revenu).</td></tr>
<tr><td><span class="say">My husband has been to the bank.</span></td><td>Mon mari est allé à la banque, et il est <b>revenu</b>.</td></tr></table>
<ul>
<li><span class="say">gone</span> = parti, pas encore revenu : <span class="say">Where's Anna? She's gone to the shops.</span> — Où est Anna ? Elle est partie faire les courses.</li>
<li><span class="say">been</span> = allé et revenu : <span class="say">I've been to the shops. I've bought some bread.</span> — Je suis allé faire les courses. J'ai acheté du pain.</li>
<li>Pour une expérience, toujours <b>been</b> : <span class="say">Have you ever been to Ireland?</span> — Es-tu déjà allé en Irlande ?</li>
<li><span class="say">Where have you been?</span> — Où étais-tu ? (tu es revenu, et je te demande où tu étais)</li>
</ul>
<h3>been, c'est aussi « été »</h3>
<p><span class="say">been</span> est aussi le participe de <b>be</b> (être) : <span class="say">I've been very busy this week.</span> — J'ai été très occupé cette semaine.</p>
<div class="callout key"><b>À retenir</b> <b>gone</b> = parti (la personne est encore là-bas). <b>been</b> = allé et revenu (ou « été »).</div>
<div class="callout warn"><b>Piège</b> Pour dire « je suis déjà allé à… », on dit <b>been to</b> + lieu : <span class="say">I've been to Scotland.</span> — Je suis déjà allé en Écosse. Pas « I've gone to Scotland » : cela voudrait dire que tu y es encore !</div>`
    },
    {
      id: 'en13-s-ou-preterit', title: 'Present perfect ou prétérit ?',
      html: `
<p>En français, on dit « j'ai vu » dans les deux cas. En anglais, il faut choisir entre le <b>prétérit</b> (<span class="say">I saw</span>) et le <b>present perfect</b> (<span class="say">I have seen</span>). Une seule question à te poser : <b>est-ce que je dis quand ?</b></p>
<table><tr><th>Present perfect : pas de moment précis</th><th>Prétérit : un moment précis du passé</th></tr>
<tr><td><span class="say">I've been to Scotland.</span><br>Je suis déjà allé en Écosse.</td><td><span class="say">I went to Scotland in 2010.</span><br>Je suis allé en Écosse en 2010.</td></tr>
<tr><td><span class="say">I've lost my glasses.</span><br>J'ai perdu mes lunettes (je ne les ai pas).</td><td><span class="say">I lost my glasses yesterday.</span><br>J'ai perdu mes lunettes hier.</td></tr>
<tr><td><span class="say">She has already eaten.</span><br>Elle a déjà mangé.</td><td><span class="say">She ate at twelve o'clock.</span><br>Elle a mangé à midi.</td></tr></table>
<h3>Les mots qui aident</h3>
<ul>
<li><b>Prétérit</b> : <span class="say">yesterday</span>, <span class="say">last week</span>, <span class="say">last year</span>, <span class="say">two days ago</span>, <span class="say">in 2010</span>, <span class="say">on Monday</span>, <span class="say">when I was young</span>… et toutes les questions avec <span class="say">When…?</span> (quand ?).</li>
<li><b>Present perfect</b> : <span class="say">ever</span>, <span class="say">never</span>, <span class="say">already</span>, <span class="say">yet</span>, <span class="say">just</span>, <span class="say">so far</span> (jusqu'à présent), <span class="say">recently</span> (récemment), <span class="say">today</span>, <span class="say">this week</span> (une période pas encore finie).</li>
</ul>
<h3>Une conversation passe de l'un à l'autre</h3>
<p><span class="say">Have you ever been to Italy?</span> — Es-tu déjà allé en Italie ?<br>
<span class="say">Yes, I have.</span> — Oui.<br>
<span class="say">When did you go?</span> — Quand y es-tu allé ?<br>
<span class="say">I went there last summer.</span> — J'y suis allé l'été dernier.<br>
<span class="say">Did you like it?</span> — Ça t'a plu ?<br>
<span class="say">Yes, I loved it!</span> — Oui, j'ai adoré !</p>
<div class="callout key"><b>À retenir</b> On dit <b>quand</b> (ou on demande « quand ? ») → <b>prétérit</b>. On ne dit pas quand, et ça compte <b>maintenant</b> → <b>present perfect</b>.</div>
<div class="callout warn"><b>Pièges</b> « I have seen him yesterday » est faux → <span class="say">I saw him yesterday.</span> « When have you arrived? » est faux → <span class="say">When did you arrive?</span></div>`
    },
    {
      id: 'en13-s-nouvelles', title: 'Annoncer une nouvelle et réagir',
      html: `
<p>Pour <b>annoncer une nouvelle</b> (une chose qui vient d'arriver et qui compte maintenant), on utilise le present perfect.</p>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">Guess what? I've passed my driving test!</span></td><td>Tu sais quoi ? J'ai réussi mon permis !</td></tr>
<tr><td><span class="say">Our daughter has had a baby!</span></td><td>Notre fille a eu un bébé !</td></tr>
<tr><td><span class="say">My son and his girlfriend have got engaged.</span></td><td>Mon fils et sa copine se sont fiancés.</td></tr>
<tr><td><span class="say">Our neighbours have moved.</span></td><td>Nos voisins ont déménagé.</td></tr>
<tr><td><span class="say">I've lost my glasses!</span></td><td>J'ai perdu mes lunettes !</td></tr>
<tr><td><span class="say">It's stopped raining.</span></td><td>Il a arrêté de pleuvoir.</td></tr></table>
<h3>Réagir</h3>
<ul>
<li>Une bonne nouvelle : <span class="say">Congratulations!</span> (Félicitations !) · <span class="say">Well done!</span> (Bravo !) · <span class="say">That's great news!</span> (C'est une super nouvelle !)</li>
<li>Une mauvaise nouvelle : <span class="say">Oh no!</span> (Oh non !) · <span class="say">What a shame!</span> (Quel dommage !) · <span class="say">Oh dear!</span> (Oh là là !)</li>
</ul>
<h3>Ensuite, les détails au prétérit</h3>
<p>On annonce au present perfect, puis on raconte (où, quand, comment) au <b>prétérit</b> :<br>
<span class="say">I've lost my wallet.</span> — <span class="say">Oh no! Where did you lose it?</span> — <span class="say">I think I lost it on the bus.</span><br>
(J'ai perdu mon portefeuille. — Oh non ! Où l'as-tu perdu ? — Je crois que je l'ai perdu dans le bus.)</p>
<div class="callout key"><b>À retenir</b> Annoncer → <b>present perfect</b> (<span class="say">I've passed my exam!</span>). Raconter les détails → <b>prétérit</b> (<span class="say">I passed it on Monday.</span>).</div>
<div class="callout warn"><b>Pièges</b> <span class="say">news</span> est toujours <b>singulier</b> : <span class="say">The news is good.</span> — Les nouvelles sont bonnes. On ne dit pas « a news » : <span class="say">That's great news!</span> Et <span class="say">pass an exam</span> = <b>réussir</b> un examen (passer un examen = <span class="say">take an exam</span>).</div>`
    },
    {
      id: 'en13-s-vocab', title: 'Vocabulaire : expériences, nouvelles, tâches de la maison',
      html: `
<p>Les mots pour parler de ses expériences, annoncer des nouvelles et faire le point sur les tâches de la maison. Clique sur un mot pour l'entendre.</p>
<h3>Expériences et voyages</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">abroad</span></td><td>à l'étranger</td></tr>
<tr><td><span class="say">a country</span></td><td>un pays</td></tr>
<tr><td><span class="say">the world</span></td><td>le monde</td></tr>
<tr><td><span class="say">foreign</span></td><td>étranger, étrangère</td></tr>
<tr><td><span class="say">a language</span></td><td>une langue</td></tr>
<tr><td><span class="say">an island</span></td><td>une île</td></tr>
<tr><td><span class="say">a lake</span></td><td>un lac</td></tr>
<tr><td><span class="say">a river</span></td><td>une rivière, un fleuve</td></tr>
<tr><td><span class="say">a castle</span></td><td>un château (fort)</td></tr>
<tr><td><span class="say">a cruise</span></td><td>une croisière</td></tr>
<tr><td><span class="say">a horse</span></td><td>un cheval</td></tr>
<tr><td><span class="say">famous</span></td><td>célèbre</td></tr>
<tr><td><span class="say">a snail</span></td><td>un escargot</td></tr>
<tr><td><span class="say">to ski</span></td><td>skier, faire du ski</td></tr>
<tr><td><span class="say">to try</span></td><td>essayer, goûter</td></tr>
<tr><td><span class="say">to climb</span></td><td>escalader, grimper</td></tr></table>
<h3>Combien de fois ? Quand ?</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">once</span></td><td>une fois</td></tr>
<tr><td><span class="say">twice</span></td><td>deux fois</td></tr>
<tr><td><span class="say">How many times?</span></td><td>Combien de fois ?</td></tr>
<tr><td><span class="say">before</span></td><td>avant, auparavant</td></tr>
<tr><td><span class="say">just</span></td><td>venir de (I've just…)</td></tr>
<tr><td><span class="say">yet</span></td><td>déjà ? (question) · pas encore (avec not)</td></tr>
<tr><td><span class="say">so far</span></td><td>jusqu'à présent</td></tr>
<tr><td><span class="say">recently</span></td><td>récemment</td></tr>
<tr><td><span class="say">this week</span></td><td>cette semaine</td></tr></table>
<h3>Les nouvelles</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">the news</span></td><td>les nouvelles, les informations</td></tr>
<tr><td><span class="say">glasses</span></td><td>des lunettes</td></tr>
<tr><td><span class="say">an exam</span></td><td>un examen</td></tr>
<tr><td><span class="say">a driving test</span></td><td>l'examen du permis de conduire</td></tr>
<tr><td><span class="say">to pass</span></td><td>réussir (un examen)</td></tr>
<tr><td><span class="say">to fail</span></td><td>échouer, rater (un examen)</td></tr>
<tr><td><span class="say">to get engaged</span></td><td>se fiancer</td></tr>
<tr><td><span class="say">pregnant</span></td><td>enceinte</td></tr>
<tr><td><span class="say">Congratulations!</span></td><td>Félicitations !</td></tr>
<tr><td><span class="say">Well done!</span></td><td>Bravo !</td></tr>
<tr><td><span class="say">Guess what?</span></td><td>Tu sais quoi ? Devine !</td></tr>
<tr><td><span class="say">What a shame!</span></td><td>Quel dommage !</td></tr></table>
<h3>Les tâches de la maison</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">the housework</span></td><td>le ménage, les tâches ménagères</td></tr>
<tr><td><span class="say">to clean</span></td><td>nettoyer</td></tr>
<tr><td><span class="say">to tidy</span></td><td>ranger</td></tr>
<tr><td><span class="say">a dishwasher</span></td><td>un lave-vaisselle</td></tr>
<tr><td><span class="say">to do the washing</span></td><td>faire la lessive</td></tr>
<tr><td><span class="say">to iron</span></td><td>repasser</td></tr>
<tr><td><span class="say">to hoover</span></td><td>passer l'aspirateur</td></tr>
<tr><td><span class="say">to make the bed</span></td><td>faire le lit</td></tr>
<tr><td><span class="say">to empty</span></td><td>vider</td></tr>
<tr><td><span class="say">a bin</span></td><td>une poubelle</td></tr>
<tr><td><span class="say">to pack</span></td><td>faire sa valise</td></tr></table>
<div class="callout key"><b>À retenir</b> <span class="say">news</span> est singulier (<span class="say">The news is good.</span>), <span class="say">glasses</span> est pluriel (<span class="say">My glasses are on the table.</span>), <span class="say">housework</span> ne prend jamais de -s.</div>
<div class="callout warn"><b>Faux amis</b> <span class="say">pass an exam</span> = réussir un examen (passer un examen = <span class="say">take an exam</span>). <span class="say">foreign</span> est un adjectif (<span class="say">a foreign country</span>, un pays étranger) ; « à l'étranger » = <span class="say">abroad</span>, sans « to » : <span class="say">I've never lived abroad.</span></div>`
    },
    {
      id: 'en13-s-pieges', title: 'Les pièges des francophones',
      html: `
<ul>
<li><b>Le passé composé ne se traduit pas toujours avec have</b> : « Hier, j'ai vu Tom » = <span class="say">I saw Tom yesterday.</span> (une date → prétérit).</li>
<li><b>When + present perfect</b> : impossible. On dit <span class="say">When did you arrive?</span> (Quand es-tu arrivé ?).</li>
<li><b>have + prétérit</b> : « I have went », « I have saw » sont faux → <span class="say">I have gone</span>, <span class="say">I have seen</span> (3e colonne).</li>
<li><b>has / have</b> : <span class="say">she has</span>, <span class="say">my son has</span> ; mais <span class="say">I have</span>, <span class="say">they have</span>.</li>
<li><b>never + not</b> : « I haven't never » est faux → <span class="say">I've never been there.</span></li>
<li><b>Les trois « déjà »</b> : <span class="say">ever</span> (dans ta vie ?), <span class="say">already</span> (c'est déjà fait), <span class="say">yet</span> (c'est fait ?).</li>
<li><b>yet à la fin</b> : <span class="say">I haven't packed yet.</span> — Je n'ai pas encore fait ma valise.</li>
<li><b>Venir de</b> : « Je viens de manger » = <span class="say">I've just eaten.</span> (et non « I come from eating »).</li>
<li><b>been / gone</b> : <span class="say">She's gone to Paris.</span> (elle y est encore) ; <span class="say">She's been to Paris.</span> (elle est déjà allée à Paris).</li>
<li><b>Faux amis</b> : <span class="say">pass an exam</span> = réussir un examen ; <span class="say">glasses</span> = des lunettes (<span class="say">a glass</span> = un verre).</li>
<li><b>Une fois, deux fois</b> = <span class="say">once</span>, <span class="say">twice</span> (plus naturel que « one time, two times »).</li>
</ul>
<div class="callout key"><b>À retenir</b> have / has + participe passé · pas de date · ever, never, already, yet, just · une date précise ou « When…? » → prétérit.</div>`
    }
  ],
  words: [
    // Expériences et voyages
    { en: 'abroad', fr: 'à l\'étranger', pos: 'adv', cat: 'Expériences et voyages', ex: 'Have you ever lived abroad?', exFr: 'As-tu déjà vécu à l\'étranger ?', level: 1, note: 'Sans « to » : go abroad = partir à l\'étranger.' },
    { en: 'country', fr: 'le pays', pos: 'n', cat: 'Expériences et voyages', ex: 'Which countries have you visited?', exFr: 'Quels pays as-tu visités ?', level: 1, note: 'Pluriel : countries. La campagne = the countryside.' },
    { en: 'world', fr: 'le monde', pos: 'n', cat: 'Expériences et voyages', ex: 'She has travelled all over the world.', exFr: 'Elle a voyagé dans le monde entier.', level: 1, note: 'all over the world = dans le monde entier.' },
    { en: 'foreign', fr: 'étranger, étrangère', pos: 'adj', cat: 'Expériences et voyages', ex: 'Have you ever driven in a foreign country?', exFr: 'As-tu déjà conduit dans un pays étranger ?', level: 2, note: 'C\'est un adjectif : a foreign country. « À l\'étranger » = abroad. Le g ne se prononce pas.' },
    { en: 'language', fr: 'la langue (qu\'on parle)', pos: 'n', cat: 'Expériences et voyages', ex: 'How many languages do you speak?', exFr: 'Combien de langues parles-tu ?', level: 1, note: 'La langue dans la bouche = the tongue.' },
    { en: 'island', fr: 'l\'île', pos: 'n', cat: 'Expériences et voyages', ex: 'Malta is a small island.', exFr: 'Malte est une petite île.', level: 2, note: 'Le s ne se prononce pas : « aï-lannd ».' },
    { en: 'lake', fr: 'le lac', pos: 'n', cat: 'Expériences et voyages', ex: 'Have you ever swum in a lake?', exFr: 'As-tu déjà nagé dans un lac ?', level: 1 },
    { en: 'river', fr: 'la rivière, le fleuve', pos: 'n', cat: 'Expériences et voyages', ex: 'Our hotel is next to the river.', exFr: 'Notre hôtel est à côté de la rivière.', level: 1 },
    { en: 'castle', fr: 'le château (fort)', pos: 'n', cat: 'Expériences et voyages', ex: 'We have visited three castles in Scotland.', exFr: 'Nous avons visité trois châteaux en Écosse.', level: 2, note: 'Le t ne se prononce pas : « ka-sseul ».' },
    { en: 'cruise', fr: 'la croisière', pos: 'n', cat: 'Expériences et voyages', ex: 'My parents have been on a cruise.', exFr: 'Mes parents ont fait une croisière.', level: 2, note: 'Faire une croisière = go on a cruise.' },
    { en: 'horse', fr: 'le cheval', pos: 'n', cat: 'Expériences et voyages', ex: 'Have you ever ridden a horse?', exFr: 'Es-tu déjà monté à cheval ?', level: 1, note: 'Pluriel : horses. Monter à cheval = ride a horse (ride, rode, ridden).' },
    { en: 'famous', fr: 'célèbre', pos: 'adj', cat: 'Expériences et voyages', ex: 'Have you ever met a famous person?', exFr: 'As-tu déjà rencontré une personne célèbre ?', level: 1 },
    { en: 'snail', fr: 'l\'escargot', pos: 'n', cat: 'Expériences et voyages', ex: 'Have you ever eaten snails?', exFr: 'As-tu déjà mangé des escargots ?', level: 3, note: 'Une question que les Anglais posent souvent aux Français !' },
    { en: 'ski', fr: 'skier, faire du ski', pos: 'v', cat: 'Expériences et voyages', ex: 'She has never skied.', exFr: 'Elle n\'a jamais fait de ski.', level: 2, note: 'Prétérit et participe passé : skied.' },
    { en: 'try', fr: 'essayer, goûter', pos: 'v', cat: 'Expériences et voyages', ex: 'I have never tried Japanese food.', exFr: 'Je n\'ai jamais goûté la cuisine japonaise.', level: 1, note: 'Prétérit et participe passé : tried. Essayer un vêtement = try on.' },
    { en: 'climb', fr: 'escalader, grimper', pos: 'v', cat: 'Expériences et voyages', ex: 'Have you ever climbed a mountain?', exFr: 'As-tu déjà escaladé une montagne ?', level: 2, note: 'Le b ne se prononce pas : « klaïm ».' },
    // Combien de fois ?
    { en: 'once', fr: 'une fois', pos: 'adv', cat: 'Combien de fois ?', sec: 'en13-s-experience', ex: 'I have been to London once.', exFr: 'Je suis allé à Londres une fois.', level: 1, note: 'Plus naturel que « one time ». Se prononce « ouannss ».' },
    { en: 'twice', fr: 'deux fois', pos: 'adv', cat: 'Combien de fois ?', sec: 'en13-s-experience', ex: 'She has been to New York twice.', exFr: 'Elle est allée à New York deux fois.', level: 1, note: 'Ensuite : three times, four times…' },
    { en: 'How many times?', fr: 'Combien de fois ?', pos: 'x', cat: 'Combien de fois ?', sec: 'en13-s-experience', ex: 'How many times have you been to Spain?', exFr: 'Combien de fois es-tu allé en Espagne ?', level: 1, note: 'times se compte : how **many** (pas how much).' },
    { en: 'before', fr: 'avant, auparavant', pos: 'adv', cat: 'Combien de fois ?', sec: 'en13-s-experience', ex: 'I have never done this before.', exFr: 'Je n\'ai jamais fait ça auparavant.', level: 1, note: 'En fin de phrase : auparavant, avant aujourd\'hui. Devant un nom : before lunch = avant le déjeuner.' },
    // Les petits mots du present perfect
    { en: 'just', fr: 'venir de (+ verbe)', pos: 'adv', cat: 'Les petits mots du present perfect', sec: 'en13-s-deja-encore', ex: 'I have just finished my lunch.', exFr: 'Je viens de finir mon déjeuner.', level: 1, note: 'Se place entre have et le participe : I\'ve just arrived. just veut aussi dire « juste, seulement ».' },
    { en: 'yet', fr: 'déjà (question), encore (avec not)', pos: 'adv', cat: 'Les petits mots du present perfect', sec: 'en13-s-deja-encore', ex: 'Has the taxi arrived yet?', exFr: 'Le taxi est-il déjà arrivé ?', level: 1, note: 'Toujours à la fin. Question : … yet? = déjà ? Négation : I haven\'t … yet = pas encore.' },
    { en: 'so far', fr: 'jusqu\'à présent, jusqu\'ici', pos: 'x', cat: 'Les petits mots du present perfect', sec: 'en13-s-ou-preterit', ex: 'So far, I have visited five countries.', exFr: 'Jusqu\'à présent, j\'ai visité cinq pays.', level: 2, note: 'Avec le present perfect : la période n\'est pas finie.' },
    { en: 'recently', fr: 'récemment', pos: 'adv', cat: 'Les petits mots du present perfect', sec: 'en13-s-ou-preterit', ex: 'Have you seen Tom recently?', exFr: 'As-tu vu Tom récemment ?', level: 2 },
    { en: 'this week', fr: 'cette semaine', pos: 'x', cat: 'Les petits mots du present perfect', sec: 'en13-s-ou-preterit', ex: 'Have you seen your mother this week?', exFr: 'As-tu vu ta mère cette semaine ?', level: 1, note: 'La semaine n\'est pas finie → present perfect. Sans « the ».' },
    // Les nouvelles
    { en: 'news', fr: 'les nouvelles, les informations', pos: 'n', cat: 'Les nouvelles', sec: 'en13-s-nouvelles', ex: 'I have some good news!', exFr: 'J\'ai une bonne nouvelle !', level: 1, note: 'Toujours singulier : the news **is** good. On ne dit pas « a news ». À la télé : the news = les infos.' },
    { en: 'glasses', fr: 'les lunettes', pos: 'n', cat: 'Les nouvelles', ex: 'I have lost my glasses again!', exFr: 'J\'ai encore perdu mes lunettes !', level: 1, note: 'Toujours pluriel : my glasses **are**… (a glass = un verre).' },
    { en: 'exam', fr: 'l\'examen', pos: 'n', cat: 'Les nouvelles', ex: 'The exam was very difficult.', exFr: 'L\'examen était très difficile.', level: 1, note: 'Passer un examen = take an exam. Le réussir = pass it.' },
    { en: 'driving test', fr: 'l\'examen du permis de conduire', pos: 'n', cat: 'Les nouvelles', ex: 'My grandson has passed his driving test.', exFr: 'Mon petit-fils a réussi son permis de conduire.', level: 2, note: 'Le permis (la carte) = a driving licence.' },
    { en: 'pass', fr: 'réussir (un examen)', pos: 'v', cat: 'Les nouvelles', sec: 'en13-s-nouvelles', ex: 'Guess what? I have passed my exam!', exFr: 'Tu sais quoi ? J\'ai réussi mon examen !', level: 1, note: 'Faux ami : pass an exam = **réussir** un examen. Passer un examen = take an exam.' },
    { en: 'fail', fr: 'échouer à, rater (un examen)', pos: 'v', cat: 'Les nouvelles', ex: 'She failed her driving test twice.', exFr: 'Elle a raté son permis deux fois.', level: 2, note: 'Rater un train = miss a train (et non fail).' },
    { en: 'get engaged', fr: 'se fiancer', pos: 'v', cat: 'Les nouvelles', sec: 'en13-s-nouvelles', ex: 'My daughter has got engaged!', exFr: 'Ma fille s\'est fiancée !', level: 2, note: 'Fiancé, fiancée = engaged : They are engaged.' },
    { en: 'pregnant', fr: 'enceinte', pos: 'adj', cat: 'Les nouvelles', ex: 'Our daughter-in-law is pregnant!', exFr: 'Notre belle-fille est enceinte !', level: 2 },
    { en: 'Congratulations!', fr: 'Félicitations !', pos: 'x', cat: 'Les nouvelles', sec: 'en13-s-nouvelles', ex: 'Congratulations on your new job!', exFr: 'Félicitations pour ton nouveau travail !', level: 1, note: 'Toujours avec un -s. Félicitations pour… = Congratulations on…' },
    { en: 'Well done!', fr: 'Bravo !', pos: 'x', cat: 'Les nouvelles', sec: 'en13-s-nouvelles', ex: 'You\'ve finished already? Well done!', exFr: 'Tu as déjà fini ? Bravo !', level: 1 },
    { en: 'Guess what?', fr: 'Tu sais quoi ? (Devine !)', pos: 'x', cat: 'Les nouvelles', sec: 'en13-s-nouvelles', ex: 'Guess what? We have bought a new car!', exFr: 'Tu sais quoi ? Nous avons acheté une nouvelle voiture !', level: 2, note: 'Pour annoncer une nouvelle surprenante.' },
    { en: 'What a shame!', fr: 'Quel dommage !', pos: 'x', cat: 'Les nouvelles', sec: 'en13-s-nouvelles', alt: ['What a pity!'], ex: 'You\'ve missed the concert? What a shame!', exFr: 'Tu as raté le concert ? Quel dommage !', level: 2, note: 'On dit aussi What a pity!' },
    // Les tâches de la maison
    { en: 'housework', fr: 'le ménage, les tâches ménagères', pos: 'n', cat: 'Les tâches de la maison', ex: 'I have done all the housework.', exFr: 'J\'ai fait tout le ménage.', level: 1, note: 'Jamais de -s. Les devoirs (de l\'école) = homework.' },
    { en: 'clean', fr: 'nettoyer', pos: 'v', cat: 'Les tâches de la maison', ex: 'Have you cleaned the kitchen?', exFr: 'As-tu nettoyé la cuisine ?', level: 1, note: 'clean est aussi un adjectif : propre.' },
    { en: 'tidy', fr: 'ranger', pos: 'v', cat: 'Les tâches de la maison', alt: ['tidy up'], ex: 'I have tidied my room.', exFr: 'J\'ai rangé ma chambre.', level: 1, note: 'Participe passé : tidied (le y devient ied).' },
    { en: 'dishwasher', fr: 'le lave-vaisselle', pos: 'n', cat: 'Les tâches de la maison', ex: 'Have you emptied the dishwasher yet?', exFr: 'As-tu déjà vidé le lave-vaisselle ?', level: 2, note: 'Faire la vaisselle (à la main) = do the washing-up.' },
    { en: 'do the washing', fr: 'faire la lessive', pos: 'x', cat: 'Les tâches de la maison', alt: ['do the laundry'], ex: 'I haven\'t done the washing yet.', exFr: 'Je n\'ai pas encore fait la lessive.', level: 1, note: 'Attention : the washing = le linge ; the washing-up = la vaisselle.' },
    { en: 'iron', fr: 'repasser', pos: 'v', cat: 'Les tâches de la maison', ex: 'Have you ironed my shirt?', exFr: 'As-tu repassé ma chemise ?', level: 2, note: 'Se prononce « aï-eunn ». an iron = un fer à repasser.' },
    { en: 'hoover', fr: 'passer l\'aspirateur', pos: 'v', cat: 'Les tâches de la maison', alt: ['vacuum'], ex: 'I have just hoovered the living room.', exFr: 'Je viens de passer l\'aspirateur dans le salon.', level: 2, note: 'Hoover est une marque devenue un verbe en Grande-Bretagne. Aux États-Unis : vacuum.' },
    { en: 'make the bed', fr: 'faire le lit', pos: 'x', cat: 'Les tâches de la maison', ex: 'Have you made your bed?', exFr: 'As-tu fait ton lit ?', level: 1, note: 'make, made, made.' },
    { en: 'empty', fr: 'vider', pos: 'v', cat: 'Les tâches de la maison', ex: 'I have just emptied the bin.', exFr: 'Je viens de vider la poubelle.', level: 2, note: 'Participe passé : emptied. empty est aussi un adjectif : vide.' },
    { en: 'bin', fr: 'la poubelle', pos: 'n', cat: 'Les tâches de la maison', alt: ['rubbish bin', 'dustbin', 'trash can'], ex: 'I have taken the bin out.', exFr: 'J\'ai sorti la poubelle.', level: 2, note: 'Sortir la poubelle = take the bin out. Aux États-Unis : the trash can.' },
    { en: 'pack', fr: 'faire sa valise', pos: 'v', cat: 'Les tâches de la maison', ex: 'I have packed my suitcase.', exFr: 'J\'ai fait ma valise.', level: 1, note: 'Défaire sa valise = unpack.' }
  ],
  phrases: [
    { en: 'Have you ever been abroad?', fr: 'Es-tu déjà allé à l\'étranger ?', alt: ['Have you ever travelled abroad?'], cat: 'Parler de ses expériences', sec: 'en13-s-experience', note: 'ever = déjà (une fois dans ta vie).' },
    { en: 'Have you ever ridden a horse?', fr: 'Es-tu déjà monté à cheval ?', cat: 'Parler de ses expériences', sec: 'en13-s-experience', note: 'ride, rode, ridden.' },
    { en: 'I\'ve never been on a cruise.', fr: 'Je n\'ai jamais fait de croisière.', cat: 'Parler de ses expériences', sec: 'en13-s-experience', note: 'never se place entre have et le participe.' },
    { en: 'I\'ve been there twice.', fr: 'J\'y suis allé deux fois.', cat: 'Parler de ses expériences', sec: 'en13-s-experience', note: 'there = là-bas, y.' },
    { en: 'How many times have you been to London?', fr: 'Combien de fois es-tu allé à Londres ?', cat: 'Parler de ses expériences', sec: 'en13-s-experience' },
    { en: 'I\'ve never done this before.', fr: 'Je n\'ai jamais fait ça auparavant.', alt: ['I have never done that before.'], cat: 'Parler de ses expériences', sec: 'en13-s-experience' },
    { en: 'The taxi has just arrived.', fr: 'Le taxi vient d\'arriver.', cat: 'C\'est fait ou pas encore ?', sec: 'en13-s-deja-encore', note: 'venir de = have just + participe.' },
    { en: 'She\'s just left.', fr: 'Elle vient de partir.', cat: 'C\'est fait ou pas encore ?', sec: 'en13-s-deja-encore', note: 'She\'s = she has. leave, left, left.' },
    { en: 'Have you packed yet?', fr: 'Tu as (déjà) fait ta valise ?', cat: 'C\'est fait ou pas encore ?', sec: 'en13-s-deja-encore', note: 'yet se place à la fin de la question.' },
    { en: 'I haven\'t done it yet.', fr: 'Je ne l\'ai pas encore fait.', cat: 'C\'est fait ou pas encore ?', sec: 'en13-s-deja-encore' },
    { en: 'I\'ve already done the washing-up.', fr: 'J\'ai déjà fait la vaisselle.', alt: ['I\'ve already washed up.', 'I\'ve already done the dishes.'], cat: 'C\'est fait ou pas encore ?', sec: 'en13-s-deja-encore' },
    { en: 'Have you had lunch yet?', fr: 'Tu as déjà déjeuné ?', alt: ['Have you eaten lunch yet?'], cat: 'C\'est fait ou pas encore ?', sec: 'en13-s-deja-encore' },
    { en: 'Have you heard the news?', fr: 'Tu connais la nouvelle ?', cat: 'Annoncer une nouvelle', sec: 'en13-s-nouvelles' },
    { en: 'Guess what? I\'ve passed my driving test!', fr: 'Tu sais quoi ? J\'ai réussi mon permis !', cat: 'Annoncer une nouvelle', sec: 'en13-s-nouvelles', note: 'pass = réussir (faux ami).' },
    { en: 'They\'ve got engaged!', fr: 'Ils se sont fiancés !', alt: ['They have gotten engaged!', 'They got engaged!'], cat: 'Annoncer une nouvelle', sec: 'en13-s-nouvelles' },
    { en: 'I\'ve lost my glasses.', fr: 'J\'ai perdu mes lunettes.', cat: 'Annoncer une nouvelle', sec: 'en13-s-nouvelles' },
    { en: 'That\'s great news!', fr: 'C\'est une super nouvelle !', alt: ['That\'s good news!', 'That\'s wonderful news!'], cat: 'Annoncer une nouvelle', sec: 'en13-s-nouvelles', note: 'news est singulier : pas de « a ».' },
    { en: 'Where have you been?', fr: 'Où étais-tu ?', cat: 'been ou gone ?', sec: 'en13-s-been-gone', note: 'La personne est revenue : been.' },
    { en: 'He\'s gone to the shops.', fr: 'Il est parti faire des courses.', cat: 'been ou gone ?', sec: 'en13-s-been-gone', note: 'gone : il n\'est pas encore revenu.' },
    { en: 'When did you go there?', fr: 'Quand y es-tu allé ?', cat: 'Present perfect ou prétérit ?', sec: 'en13-s-ou-preterit', note: 'When…? → prétérit.' },
    { en: 'I went there in 2015.', fr: 'J\'y suis allé en 2015.', cat: 'Present perfect ou prétérit ?', sec: 'en13-s-ou-preterit', note: 'Une date précise → prétérit.' },
    { en: 'I\'ve been very busy this week.', fr: 'J\'ai été très occupé cette semaine.', cat: 'Present perfect ou prétérit ?', sec: 'en13-s-ou-preterit' },
    { en: 'I haven\'t seen her recently.', fr: 'Je ne l\'ai pas vue récemment.', cat: 'Present perfect ou prétérit ?', sec: 'en13-s-ou-preterit' },
    { en: 'So far, so good.', fr: 'Jusqu\'ici, tout va bien.', cat: 'Present perfect ou prétérit ?', sec: 'en13-s-ou-preterit', note: 'Une expression toute faite, très courante.' }
  ],
  quiz: [
    { id: 'en13-q-01', q: 'Complète : She ___ lost her keys.', choices: ['have', 'has', 'is', 'did'], answer: 1, topic: 'Le present perfect', sec: 'en13-s-forme',
      why: { 0: '« have » va avec I, you, we, they. Avec she : has.', 2: '« She is lost » voudrait dire « elle est perdue » : ce n\'est pas le sens ici.', 3: 'did ne s\'utilise jamais devant un participe passé.' },
      explain: 'Present perfect : **has** + participe passé avec he, she, it. → She **has lost** her keys. (Elle a perdu ses clés.)', say: 'She has lost her keys.', level: 1 },
    { id: 'en13-q-02', q: 'Complète : We ___ finished the housework.', choices: ['has', 'are', 'did', 'have'], answer: 3, topic: 'Le present perfect', sec: 'en13-s-forme',
      why: { 0: '« has » va avec he, she, it. Avec we : have.', 1: '« are » est le verbe to be : il ne fait pas le present perfect.', 2: 'did ne s\'utilise pas devant un participe passé.' },
      explain: 'we + **have** + participe passé. → We **have finished** the housework. (Nous avons fini le ménage.)', say: 'We have finished the housework.', level: 1 },
    { id: 'en13-q-03', q: 'Complète : I have ___ that film.', choices: ['saw', 'seen', 'see', 'seeing'], answer: 1, topic: 'Le participe passé', sec: 'en13-s-forme',
      why: { 0: '« saw » est le prétérit (2e colonne). Après have : le participe passé.', 2: '« see » est la base. Après have : le participe passé.', 3: 'Après have, pas de -ing ici : le participe passé.' },
      explain: 'see, saw, **seen** : après have, la **3e colonne**. → I have **seen** that film. (J\'ai vu ce film.)', say: 'I have seen that film.', level: 1 },
    { id: 'en13-q-04', q: 'Forme négative : He ___ called me.', choices: ['didn\'t', 'haven\'t', 'hasn\'t', 'isn\'t'], answer: 2, topic: 'Le present perfect', sec: 'en13-s-forme',
      why: { 0: 'didn\'t s\'utilise avec la base (didn\'t call), pas avec un participe.', 1: '« haven\'t » va avec I, you, we, they. Avec he : hasn\'t.', 3: '« isn\'t » est la négation de to be, pas du present perfect.' },
      explain: 'Négation : **hasn\'t** (has not) + participe avec he, she, it. → He **hasn\'t called** me. (Il ne m\'a pas appelé.)', say: 'He hasn\'t called me.', level: 1 },
    { id: 'en13-q-05', q: 'Comment demander « As-tu déjà vécu à l\'étranger ? »', choices: ['Have you ever live abroad?', 'Are you ever lived abroad?', 'Have you ever lived to abroad?', 'Have you ever lived abroad?'], answer: 3, topic: 'Parler de ses expériences', sec: 'en13-s-experience',
      why: { 0: 'Après have, il faut le participe passé : lived.', 1: 'Le present perfect se fait avec have, pas avec are.', 2: 'Pas de « to » devant abroad.' },
      explain: 'Expérience : **Have** + sujet + **ever** + participe ? → **Have you ever lived abroad?** (As-tu déjà vécu à l\'étranger ?)', say: 'Have you ever lived abroad?', level: 1 },
    { id: 'en13-q-06', q: 'Réponse courte : Have you ever ridden a horse? — Yes, I ___.', choices: ['have', 'did', 'ridden', 'do'], answer: 0, topic: 'Parler de ses expériences', sec: 'en13-s-experience',
      why: { 1: '« did » répond à une question qui commence par Did. Ici, la question commence par Have.', 2: 'On ne répète pas le participe dans une réponse courte.', 3: '« do » répond à une question au présent simple (Do you…?).' },
      explain: 'La réponse courte reprend l\'auxiliaire de la question : **Have** you…? → Yes, I **have**. / No, I **haven\'t**.', say: 'Have you ever ridden a horse? Yes, I have.', level: 1 },
    { id: 'en13-q-07', q: 'Traduis « Je ne suis jamais allé en Écosse » :', choices: ['I haven\'t never been to Scotland.', 'I\'m never been to Scotland.', 'I\'ve never been to Scotland.', 'I never was to Scotland.'], answer: 2, topic: 'Parler de ses expériences', sec: 'en13-s-experience',
      why: { 0: 'never est déjà négatif : on ne met pas not en plus.', 1: 'Le present perfect se fait avec have (I\'ve), pas avec am (I\'m).', 3: 'Cette phrase n\'existe pas : il faut le present perfect, I\'ve never been.' },
      explain: '**never** se place entre have et le participe, sans not. → I**\'ve never been** to Scotland. (Je ne suis jamais allé en Écosse.)', say: 'I\'ve never been to Scotland.', level: 1 },
    { id: 'en13-q-08', q: 'Le mot le plus naturel pour dire « deux fois » :', choices: ['second', 'twice', 'double', 'two'], answer: 1, topic: 'Combien de fois ?', sec: 'en13-s-experience',
      why: { 0: 'second = deuxième (ou une seconde).', 2: 'double = double (a double room), pas « deux fois ».', 3: 'two = deux, il manque « fois » : on dirait two times, mais twice est plus naturel.' },
      explain: 'Une fois = **once**, deux fois = **twice**, puis three times… → I\'ve been there **twice**. (J\'y suis allé deux fois.)', say: 'I\'ve been there twice.', level: 1 },
    { id: 'en13-q-09', q: 'Ton mari devait arroser les plantes. Tu lui demandes si c\'est fait : Have you watered the plants ___?', choices: ['just', 'ever', 'yet', 'never'], answer: 2, topic: 'already, yet, just', sec: 'en13-s-deja-encore',
      why: { 0: 'just (venir de) se place avant le participe, pas à la fin.', 1: 'ever sert pour l\'expérience (une fois dans ta vie ?) et se place avant le participe.', 3: 'never (jamais) se place avant le participe, et ce n\'est pas le sens.' },
      explain: 'Pour demander si une chose attendue est faite : **yet**, à la fin. → Have you watered the plants **yet**? (Tu as arrosé les plantes ?)', say: 'Have you watered the plants yet?', level: 1 },
    { id: 'en13-q-10', q: 'Complète : I\'ve ___ done the washing-up. (c\'est déjà fait)', choices: ['already', 'yet', 'ever', 'still'], answer: 0, topic: 'already, yet, just', sec: 'en13-s-deja-encore',
      why: { 1: 'yet se met à la fin, et seulement dans une question ou une négation.', 2: 'ever s\'utilise dans les questions sur l\'expérience (Have you ever…?).', 3: 'still veut dire « encore, toujours » ; il ne va pas ici.' },
      explain: 'Déjà (c\'est fait) dans une phrase affirmative : **already**, entre have et le participe. → I\'ve **already** done the washing-up. (J\'ai déjà fait la vaisselle.)', say: 'I\'ve already done the washing-up.', level: 1 },
    { id: 'en13-q-11', q: 'Quelle phrase veut dire « Je n\'ai pas encore fait ma valise » ?', choices: ['I have yet packed.', 'I haven\'t already packed.', 'I yet haven\'t packed.', 'I haven\'t packed yet.'], answer: 3, topic: 'already, yet, just', sec: 'en13-s-deja-encore',
      why: { 0: 'Il manque la négation : I have**n\'t**.', 1: 'Pas encore = not … **yet**. already s\'utilise dans les phrases affirmatives.', 2: 'yet se place à la fin de la phrase.' },
      explain: 'Pas encore = **haven\'t** + participe + **yet** (à la fin). → I **haven\'t packed yet**. (Je n\'ai pas encore fait ma valise.)', say: 'I haven\'t packed yet.', level: 2 },
    { id: 'en13-q-12', q: 'Que veut dire « I\'ve just had lunch » ?', choices: ['Je vais déjeuner.', 'Je viens de déjeuner.', 'Je n\'ai pas encore déjeuné.', 'Je déjeune en ce moment.'], answer: 1, topic: 'already, yet, just', sec: 'en13-s-deja-encore',
      why: { 0: 'Le futur se dirait I\'m going to have lunch.', 2: 'Pas encore se dirait I haven\'t had lunch yet.', 3: 'En ce moment se dirait I\'m having lunch.' },
      explain: '**have just** + participe = **venir de**. → I\'ve **just had** lunch. (Je viens de déjeuner.)', say: 'I\'ve just had lunch.', level: 1 },
    { id: 'en13-q-13', q: 'Ta femme est partie au supermarché et n\'est pas encore rentrée. Tu dis : My wife has ___ to the supermarket.', choices: ['been', 'went', 'gone', 'go'], answer: 2, topic: 'been ou gone ?', sec: 'en13-s-been-gone',
      why: { 0: '« been » voudrait dire qu\'elle est déjà revenue.', 1: '« went » est le prétérit : après has, il faut le participe passé.', 3: '« go » est la base : après has, il faut le participe passé.' },
      explain: '**gone** = partie, pas encore revenue. → My wife has **gone** to the supermarket. (Ma femme est partie au supermarché.)', say: 'My wife has gone to the supermarket.', level: 2 },
    { id: 'en13-q-14', q: 'Complète : Have you ever ___ to Rome?', choices: ['gone', 'been', 'went', 'be'], answer: 1, topic: 'been ou gone ?', sec: 'en13-s-been-gone',
      why: { 0: 'Pour une expérience (aller et revenir), on dit been. gone voudrait dire que la personne est encore là-bas.', 2: '« went » est le prétérit : après have, il faut le participe passé.', 3: '« be » est la base : après have, il faut le participe passé been.' },
      explain: 'Expérience : **been to** + lieu. → Have you ever **been** to Rome? (Es-tu déjà allé à Rome ?)', say: 'Have you ever been to Rome?', level: 1 },
    { id: 'en13-q-15', q: 'Complète : I ___ Tom yesterday.', choices: ['have seen', 'seen', 'saw', 'have saw'], answer: 2, topic: 'Present perfect ou prétérit ?', sec: 'en13-s-ou-preterit',
      why: { 0: 'Avec yesterday (un moment précis), on n\'utilise pas le present perfect.', 1: '« seen » est le participe passé : il ne s\'utilise jamais seul.', 3: '« have saw » est faux : après have, il faudrait seen. Et avec yesterday, il faut le prétérit.' },
      explain: 'Moment précis (**yesterday**) → **prétérit**. → I **saw** Tom yesterday. (J\'ai vu Tom hier.)', say: 'I saw Tom yesterday.', level: 1 },
    { id: 'en13-q-16', q: 'Quelle question est correcte ?', choices: ['When have you arrived?', 'When you arrived?', 'When are you arrived?', 'When did you arrive?'], answer: 3, topic: 'Present perfect ou prétérit ?', sec: 'en13-s-ou-preterit',
      why: { 0: 'When (quand ?) demande un moment précis : on n\'utilise pas le present perfect.', 1: 'Il manque l\'auxiliaire did.', 2: 'Le passé d\'arrive ne se fait pas avec are.' },
      explain: 'Avec **When…?**, toujours le **prétérit**. → **When did you arrive?** (Quand es-tu arrivé ?)', say: 'When did you arrive?', level: 2 },
    { id: 'en13-q-17', q: 'Complète : So far, I ___ to Canada three times.', choices: ['went', 'have been', 'was', 'go'], answer: 1, topic: 'Present perfect ou prétérit ?', sec: 'en13-s-ou-preterit',
      why: { 0: 'So far (jusqu\'à présent) : la période n\'est pas finie. On n\'utilise pas le prétérit.', 2: '« was » est le prétérit de be : il ne convient pas avec so far.', 3: '« go » est le présent : il ne parle pas de ce qu\'on a déjà fait.' },
      explain: '**So far** = jusqu\'à présent → **present perfect**. → So far, I **have been** to Canada three times. (Jusqu\'à présent, je suis allé trois fois au Canada.)', say: 'So far, I have been to Canada three times.', level: 2 },
    { id: 'en13-q-18', q: 'Ton ami te dit : « I\'ve passed my driving test! » Que réponds-tu ?', choices: ['What a shame!', 'You\'re welcome!', 'Congratulations!', 'Excuse me!'], answer: 2, topic: 'Annoncer une nouvelle', sec: 'en13-s-nouvelles',
      why: { 0: 'What a shame! = Quel dommage ! C\'est pour une mauvaise nouvelle.', 1: 'You\'re welcome = De rien (après un merci).', 3: 'Excuse me = Excusez-moi : pour attirer l\'attention.' },
      explain: 'Il a **réussi** son permis (pass = réussir) : c\'est une bonne nouvelle → **Congratulations!** (Félicitations !)', say: 'I\'ve passed my driving test! Congratulations!', level: 1 },
    { id: 'en13-q-19', q: 'Faux ami ! Que veut dire « to pass an exam » ?', choices: ['passer un examen', 'rater un examen', 'préparer un examen', 'réussir un examen'], answer: 3, topic: 'Annoncer une nouvelle', sec: 'en13-s-nouvelles',
      why: { 0: 'Passer un examen se dit take an exam.', 1: 'Rater un examen se dit fail an exam.', 2: 'Préparer un examen se dit prepare for an exam ou study for an exam.' },
      explain: '**pass** an exam = **réussir** un examen. → She has **passed** her exam. (Elle a réussi son examen.)', say: 'She has passed her exam.', level: 1 },
    { id: 'en13-q-20', q: 'Complète : The news ___ very good!', choices: ['are', 'is', 'have', 'be'], answer: 1, topic: 'Le vocabulaire du chapitre', sec: 'en13-s-vocab',
      why: { 0: 'news finit par -s, mais c\'est un mot singulier.', 2: '« have » ne va pas ici : il faut le verbe to be.', 3: '« be » doit être conjugué.' },
      explain: '**news** est toujours **singulier**. → The news **is** very good! (Les nouvelles sont très bonnes !)', say: 'The news is very good!', level: 2 },
    { id: 'en13-q-21', q: 'Écoute. Que dit la personne ?', listen: true, say: 'I\'ve never been on a cruise.', choices: ['Je vais faire une croisière.', 'J\'ai fait une croisière l\'année dernière.', 'Je n\'ai jamais fait de croisière.', 'J\'ai fait deux croisières.'], answer: 2, topic: 'Compréhension orale', sec: 'en13-s-experience',
      why: { 0: 'Le futur se dirait I\'m going to go on a cruise.', 1: 'L\'année dernière se dirait last year, avec le prétérit.', 3: 'Deux fois se dirait twice.' },
      explain: '**never** = jamais ; **a cruise** = une croisière. → I\'ve never been on a cruise. (Je n\'ai jamais fait de croisière.)', level: 1 },
    { id: 'en13-q-22', q: 'Écoute. Que demande la personne ?', listen: true, say: 'Have you done the washing-up yet?', choices: ['Tu as fait la vaisselle ?', 'Tu veux faire la vaisselle ?', 'Tu as fait la lessive ?', 'Qui a fait la vaisselle ?'], answer: 0, topic: 'Compréhension orale', sec: 'en13-s-deja-encore',
      why: { 1: 'Tu veux… ? se dirait Do you want to…?', 2: 'La lessive se dit the washing ; ici on entend the washing-**up** : la vaisselle.', 3: 'Qui… ? se dirait Who has…?' },
      explain: '**Have you done… yet?** = Tu as (déjà) fait… ? ; **the washing-up** = la vaisselle.', level: 2 },
    { id: 'en13-q-23', q: 'Écoute. Où est le mari maintenant ?', listen: true, say: 'My husband has gone to the bank.', choices: ['À la maison : il est revenu de la banque.', 'Au travail.', 'Il ira à la banque demain.', 'À la banque : il n\'est pas encore revenu.'], answer: 3, topic: 'Compréhension orale', sec: 'en13-s-been-gone',
      why: { 0: 'S\'il était revenu, on entendrait has **been** to the bank.', 1: 'Il n\'est pas question du travail (work).', 2: 'Le futur se dirait He will go ou He\'s going to go.' },
      explain: '**has gone** = il est parti, et il est **encore là-bas**. → My husband has gone to the bank. (Mon mari est allé à la banque.)', level: 2 },
    { id: 'en13-q-24', q: 'Écoute. Qu\'est-il arrivé à la personne ?', listen: true, say: 'I\'ve lost my glasses. I think I left them on the bus.', choices: ['Elle a perdu ses clés dans le bus.', 'Elle a perdu ses lunettes, sans doute dans le bus.', 'Elle a trouvé des lunettes dans le bus.', 'Elle a oublié son verre dans le bus.'], answer: 1, topic: 'Compréhension orale', sec: 'en13-s-nouvelles',
      why: { 0: 'Les clés se diraient keys. On entend **glasses** : des lunettes.', 2: 'Trouver se dirait found. On entend **lost** : perdu.', 3: 'glasses (au pluriel) = des lunettes, pas un verre.' },
      explain: '**I\'ve lost my glasses** = j\'ai perdu mes lunettes ; **I think I left them on the bus** = je crois que je les ai laissées dans le bus (détail au prétérit).', level: 2 }
  ],
  exercises: [
    { id: 'en13-x-01', prompt: 'Complète au present perfect : I ___ (finish) my book.', answers: ['have finished'], topic: 'Le present perfect', sec: 'en13-s-forme',
      hint: 'have / has + participe passé.',
      explain: 'I + **have** + participe passé (finish → finished). → I **have finished** my book. (J\'ai fini mon livre.) À l\'oral : I\'ve finished.',
      rule: 'I / you / we / they + have + participe passé',
      mistakes: [{ text: 'has finished', msg: '**has** va avec he, she, it. Avec I : **have** finished.' }, { text: 'have finish', msg: 'Après have, il faut le **participe passé** : finish → finish**ed**.' }, { text: 'finished', msg: 'Il manque **have** : le present perfect, c\'est have + participe passé → I **have** finished.' }],
      say: 'I have finished my book.' },
    { id: 'en13-x-02', prompt: 'Complète au present perfect : My son ___ (buy) a new car.', answers: ['has bought'], topic: 'Le present perfect', sec: 'en13-s-forme',
      hint: 'My son = he. buy est irrégulier.',
      explain: 'My son = he → **has** + participe passé. buy, bought, **bought**. → My son **has bought** a new car. (Mon fils a acheté une nouvelle voiture.)',
      rule: 'he / she / it + has + participe passé',
      mistakes: [{ text: 'have bought', msg: 'My son = he → **has** bought (have va avec I, you, we, they).' }, { text: 'has buyed', msg: 'buy est irrégulier : buy, bought, **bought**.' }, { text: 'has brought', msg: '« brought » vient de bring (apporter). Acheter : buy → **bought**.' }],
      say: 'My son has bought a new car.' },
    { id: 'en13-x-03', prompt: 'Complète au present perfect : We ___ (eat) too much!', answers: ['have eaten'], topic: 'Le participe passé', sec: 'en13-s-forme',
      hint: 'eat, ate, … ?',
      explain: 'eat, ate, **eaten** : après have, la 3e colonne. → We **have eaten** too much! (Nous avons trop mangé !)',
      rule: 'have / has + participe passé (3e colonne des verbes irréguliers)',
      mistakes: [{ text: 'have ate', msg: '« ate » est le prétérit. Après have : le participe passé **eaten**.' }, { text: 'has eaten', msg: 'Avec we : **have** (has va avec he, she, it).' }],
      say: 'We have eaten too much!' },
    { id: 'en13-x-04', prompt: 'Mets à la forme négative : She has called me.', answers: ['She hasn\'t called me', 'She has not called me'], topic: 'Le present perfect', sec: 'en13-s-forme',
      hint: 'has + not = …',
      explain: 'Négation : **hasn\'t** (has not) + participe. → She **hasn\'t called** me. (Elle ne m\'a pas appelé.)',
      rule: 'Négation : haven\'t / hasn\'t + participe passé',
      mistakes: [{ text: 'She didn\'t called me', msg: 'Au present perfect, pas de did : on met **not** après has → She **hasn\'t** called me.' }, { text: 'She hasn\'t call me', msg: 'Le participe passé reste après hasn\'t : call**ed**.' }, { text: 'She has called not me', msg: '**not** se place juste après has : She **has not** (hasn\'t) called me.' }],
      say: 'She hasn\'t called me.' },
    { id: 'en13-x-05', prompt: 'Pose la question : You have seen this film. → ___?', answers: ['Have you seen this film'], topic: 'Le present perfect', sec: 'en13-s-forme',
      hint: 'Have passe devant le sujet.',
      explain: 'Question : **Have** + sujet + participe ? → **Have you seen** this film? (As-tu vu ce film ?)',
      rule: 'Question : Have / Has + sujet + participe passé ?',
      mistakes: [{ text: 'Did you seen this film', msg: 'Pas de did au present perfect : c\'est **Have** qui passe devant le sujet → Have you seen this film?' }, { text: 'Have you saw this film', msg: '« saw » est le prétérit. Après have : le participe **seen**.' }, { text: 'You have seen this film', msg: 'Pour poser la question, **Have** passe devant le sujet : **Have you** seen this film?' }],
      say: 'Have you seen this film?' },
    { id: 'en13-x-06', prompt: 'Complète la réponse courte (oui) : Has she ever been to Spain? — Yes, ___.', answers: ['she has', 'Yes, she has'], topic: 'Parler de ses expériences', sec: 'en13-s-experience',
      hint: 'On reprend l\'auxiliaire de la question.',
      explain: 'La question commence par **Has** → réponse courte : Yes, she **has**. (Oui.) Non : No, she hasn\'t.',
      rule: 'Have you…? → Yes, I have. · Has she…? → Yes, she has.',
      mistakes: [{ text: 'she did', msg: '« did » répond à une question avec Did. Ici, la question commence par **Has** → Yes, she **has**.' }, { text: 'she is', msg: 'La question commence par **Has**, pas par Is → Yes, she **has**.' }, { text: 'she\'s', msg: 'Pas de contraction à la fin d\'une réponse courte : Yes, she **has**.' }],
      say: 'Has she ever been to Spain? Yes, she has.' },
    { id: 'en13-x-07', prompt: 'Traduis : Es-tu déjà allé à l\'étranger ?', answers: ['Have you ever been abroad', 'Have you ever travelled abroad'], topic: 'Parler de ses expériences', sec: 'en13-s-experience',
      hint: 'Have you ever … ? ; à l\'étranger = abroad.',
      explain: 'Une expérience → **Have you ever been** + lieu ? → **Have you ever been abroad?** (Es-tu déjà allé à l\'étranger ?)',
      rule: 'Es-tu déjà allé… ? = Have you ever been… ?',
      mistakes: [{ text: 'Have you ever been to abroad', msg: 'Pas de **to** devant abroad : Have you ever been **abroad**?' }, { text: 'Have you already been abroad', msg: 'Pour une expérience (dans ta vie), « déjà » se dit **ever** : Have you **ever** been abroad?' }, { text: 'Have you ever gone abroad', msg: 'Pour une expérience (aller et revenir), on dit **been** : Have you ever **been** abroad?' }],
      say: 'Have you ever been abroad?' },
    { id: 'en13-x-08', prompt: 'Traduis : Je n\'ai jamais fait de ski.', answers: ['I\'ve never skied', 'I have never skied', 'I\'ve never been skiing', 'I have never been skiing'], topic: 'Parler de ses expériences', sec: 'en13-s-experience',
      hint: 'never se place entre have et le participe. ski → skied.',
      explain: '**never** entre have et le participe, sans not. → I**\'ve never skied**. (Je n\'ai jamais fait de ski.)',
      rule: 'I\'ve never + participe passé = je n\'ai jamais…',
      mistakes: [{ text: 'I haven\'t never skied', msg: '**never** est déjà négatif : pas de not en plus → I\'ve **never** skied.' }, { text: 'I\'ve never ski', msg: 'Après have, le participe passé : ski → **skied**.' }, { text: 'I\'ve ever skied', msg: '**ever** veut dire « déjà » (dans une question). Jamais = **never** : I\'ve never skied.' }],
      say: 'I\'ve never skied.' },
    { id: 'en13-x-09', prompt: 'Complète (deux fois) : I\'ve been to London ___.', answers: ['twice', 'two times'], topic: 'Combien de fois ?', sec: 'en13-s-experience',
      hint: 'once = une fois, … = deux fois.',
      explain: 'Deux fois = **twice** (plus naturel que two times). → I\'ve been to London **twice**. (Je suis allé à Londres deux fois.)',
      rule: 'once (1 fois) · twice (2 fois) · three times, four times…',
      mistakes: [{ text: 'second', msg: 'second = deuxième. Deux fois = **twice**.' }, { text: 'two time', msg: 'Il faudrait le pluriel (two times), mais le plus naturel est **twice**.' }, { text: 'double', msg: 'double = double. Deux fois = **twice**.' }],
      say: 'I\'ve been to London twice.' },
    { id: 'en13-x-10', prompt: 'Traduis : Combien de fois es-tu allé à Londres ?', answers: ['How many times have you been to London'], topic: 'Combien de fois ?', sec: 'en13-s-experience',
      hint: 'How many times + question au present perfect.',
      explain: '**How many times have you been** to London? (Combien de fois es-tu allé à Londres ?)',
      rule: 'Combien de fois… ? = How many times + have / has + sujet + participe ?',
      mistakes: [{ text: 'How much times have you been to London', msg: 'times se compte : How **many** times (much est pour ce qui ne se compte pas).' }, { text: 'How many times you have been to London', msg: 'Dans la question, have passe devant le sujet : How many times **have you** been…?' }, { text: 'How many times have you gone to London', msg: 'Pour aller et revenir : **been** to London.' }],
      say: 'How many times have you been to London?' },
    { id: 'en13-x-11', prompt: 'Complète au present perfect avec just : I ___ (just / finish) the housework.', answers: ['have just finished'], topic: 'already, yet, just', sec: 'en13-s-deja-encore',
      hint: 'have + just + participe passé.',
      explain: '**just** se place entre have et le participe. → I **have just finished** the housework. (Je viens de finir le ménage.)',
      rule: 'venir de + verbe = have / has + just + participe passé',
      mistakes: [{ text: 'just have finished', msg: 'just se place **entre** have et le participe : I have **just** finished.' }, { text: 'have just finish', msg: 'Après have, le participe passé : finish**ed**.' }, { text: 'come from finishing', msg: '« venir de » ne se traduit pas mot à mot : I **have just finished**.' }],
      say: 'I have just finished the housework.' },
    { id: 'en13-x-12', prompt: 'Remets dans l\'ordre : already / I / done / have / the washing-up', answers: ['I have already done the washing-up', 'I\'ve already done the washing-up'], topic: 'already, yet, just', sec: 'en13-s-deja-encore',
      hint: 'sujet + have + already + participe + complément.',
      explain: '**already** se place entre have et le participe. → I have **already** done the washing-up. (J\'ai déjà fait la vaisselle.)',
      rule: 'have / has + already + participe passé',
      mistakes: [{ text: 'I have done already the washing-up', msg: 'already se place entre have et le participe : I have **already done**…' }, { text: 'Already I have done the washing-up', msg: 'already se place après have : I have **already** done the washing-up.' }],
      say: 'I have already done the washing-up.' },
    { id: 'en13-x-13', prompt: 'Mets à la forme négative avec yet : I have packed.', answers: ['I haven\'t packed yet', 'I have not packed yet'], topic: 'already, yet, just', sec: 'en13-s-deja-encore',
      hint: 'haven\'t + participe + yet (à la fin).',
      explain: 'Pas encore = **haven\'t** + participe + **yet**. → I **haven\'t packed yet**. (Je n\'ai pas encore fait ma valise.)',
      rule: 'Pas encore : haven\'t / hasn\'t + participe + yet',
      mistakes: [{ text: 'I haven\'t already packed', msg: 'Pas encore = not … **yet** (already s\'utilise dans une phrase affirmative) : I haven\'t packed **yet**.' }, { text: 'I have yet packed', msg: 'Il faut la négation **not** : I have**n\'t** packed yet.' }],
      say: 'I haven\'t packed yet.' },
    { id: 'en13-x-14', prompt: 'Traduis avec yet : Tu as arrosé les plantes ? (water the plants)', answers: ['Have you watered the plants yet'], topic: 'already, yet, just', sec: 'en13-s-deja-encore',
      hint: 'Have you + participe … yet ?',
      explain: 'Une chose attendue : est-ce fait ? → **Have you watered** the plants **yet**? (Tu as arrosé les plantes ?)',
      rule: 'Question : Have / Has + sujet + participe + … yet ?',
      mistakes: [{ text: 'Have you yet watered the plants', msg: 'yet se place **à la fin** de la question : …the plants **yet**?' }, { text: 'Have you water the plants yet', msg: 'Après have, le participe passé : water**ed**.' }, { text: 'You have watered the plants yet', msg: 'Pour poser la question, **Have** passe devant le sujet : **Have you** watered…?' }],
      say: 'Have you watered the plants yet?' },
    { id: 'en13-x-15', prompt: 'Complète avec been ou gone : Where is Dad? — He\'s ___ to the garage.', answers: ['gone'], topic: 'been ou gone ?', sec: 'en13-s-been-gone', strict: true,
      hint: 'Papa n\'est pas encore revenu.',
      explain: 'Il est encore là-bas → **gone**. → He\'s **gone** to the garage. (Il est parti au garage.) He\'s = He has.',
      rule: 'gone = parti (encore là-bas) · been = allé et revenu',
      mistakes: [{ text: 'been', msg: '**been** voudrait dire qu\'il est déjà revenu. Il est encore là-bas → **gone**.' }, { text: 'went', msg: '« went » est le prétérit. Après he\'s (he has), le participe passé : **gone**.' }],
      say: 'Where is Dad? He\'s gone to the garage.' },
    { id: 'en13-x-16', prompt: 'Complète avec been ou gone : I\'ve never ___ to Ireland.', answers: ['been'], topic: 'been ou gone ?', sec: 'en13-s-been-gone', strict: true,
      hint: 'Une expérience (dans ta vie).',
      explain: 'Pour une expérience : **been to** + lieu. → I\'ve never **been** to Ireland. (Je ne suis jamais allé en Irlande.)',
      rule: 'Expérience : have been to + lieu',
      mistakes: [{ text: 'gone', msg: 'Pour une expérience (aller et revenir), on dit **been** : I\'ve never **been** to Ireland.' }, { text: 'was', msg: '« was » est le prétérit. Après have, le participe passé : **been**.' }],
      say: 'I\'ve never been to Ireland.' },
    { id: 'en13-x-17', prompt: 'Prétérit ou present perfect ? Complète : My daughter ___ (get) married in 2015.', answers: ['got'], topic: 'Present perfect ou prétérit ?', sec: 'en13-s-ou-preterit', strict: true,
      hint: 'Il y a une date précise.',
      explain: 'Une date précise (**in 2015**) → **prétérit** : get, **got**, got. → My daughter **got** married in 2015. (Ma fille s\'est mariée en 2015.)',
      rule: 'Moment précis (in 2015, yesterday, last week, ago) → prétérit',
      mistakes: [{ text: 'has got', msg: 'Avec une date précise (in 2015), on utilise le **prétérit** : My daughter **got** married.' }, { text: 'get', msg: 'C\'est du passé : il faut le prétérit de get → **got**.' }],
      say: 'My daughter got married in 2015.' },
    { id: 'en13-x-18', prompt: 'Traduis : Je l\'ai vu hier. (him)', answers: ['I saw him yesterday'], topic: 'Present perfect ou prétérit ?', sec: 'en13-s-ou-preterit',
      hint: 'hier = un moment précis.',
      explain: 'Avec **yesterday** → **prétérit**. → I **saw** him yesterday. (Je l\'ai vu hier.)',
      rule: 'yesterday, last…, ago, in 2010 → prétérit (jamais have)',
      mistakes: [{ text: 'I have seen him yesterday', msg: 'Avec yesterday (moment précis), on utilise le **prétérit** : I **saw** him yesterday.' }, { text: 'I seen him yesterday', msg: '« seen » est le participe passé (après have). Au prétérit : **saw**.' }],
      say: 'I saw him yesterday.' },
    { id: 'en13-x-19', prompt: 'Traduis : Quand es-tu arrivé ?', answers: ['When did you arrive', 'When did you get here'], topic: 'Present perfect ou prétérit ?', sec: 'en13-s-ou-preterit',
      hint: 'When…? → prétérit avec did.',
      explain: 'Avec **When** (quand ?), on demande un moment précis → **prétérit**. → **When did you arrive?** (Quand es-tu arrivé ?)',
      rule: 'When + did + sujet + base verbale ?',
      mistakes: [{ text: 'When have you arrived', msg: 'Avec **When** (quand ?), pas de present perfect : When **did** you arrive?' }, { text: 'When did you arrived', msg: 'Après did, le verbe reste à la base : did you **arrive**.' }],
      say: 'When did you arrive?' },
    { id: 'en13-x-20', prompt: 'Prétérit ou present perfect ? Complète : So far, I ___ (visit) six countries.', answers: ['have visited'], topic: 'Present perfect ou prétérit ?', sec: 'en13-s-ou-preterit',
      hint: 'So far = jusqu\'à présent : ce n\'est pas fini.',
      explain: '**So far** (jusqu\'à présent) → **present perfect**. → So far, I **have visited** six countries. (Jusqu\'à présent, j\'ai visité six pays.)',
      rule: 'so far, ever, never, already, yet, just, this week → present perfect',
      mistakes: [{ text: 'visited', msg: 'So far : la période n\'est pas finie → present perfect : I **have visited**.' }, { text: 'have visit', msg: 'Après have, le participe passé : visit**ed**.' }, { text: 'has visited', msg: 'Avec I : **have** (has va avec he, she, it).' }],
      say: 'So far, I have visited six countries.' },
    { id: 'en13-x-21', prompt: 'Traduis : J\'ai perdu mes lunettes. (je ne les ai toujours pas)', answers: ['I\'ve lost my glasses', 'I have lost my glasses'], topic: 'Annoncer une nouvelle', sec: 'en13-s-nouvelles',
      hint: 'Une nouvelle, sans date → present perfect. lose est irrégulier.',
      explain: 'Une nouvelle qui compte maintenant → **present perfect** : lose, lost, **lost**. → I**\'ve lost** my glasses. (J\'ai perdu mes lunettes.)',
      rule: 'Annoncer une nouvelle → have / has + participe passé',
      mistakes: [{ text: 'I\'ve lost my glass', msg: 'Les lunettes = **glasses**, toujours au pluriel (a glass = un verre).' }, { text: 'I\'ve losed my glasses', msg: 'lose est irrégulier : lose, lost, **lost**.' }, { text: 'I\'ve lose my glasses', msg: 'Après have, le participe passé : lose → **lost**.' }],
      say: 'I\'ve lost my glasses.' },
    { id: 'en13-x-22', prompt: 'Traduis : Ils se sont fiancés !', answers: ['They\'ve got engaged', 'They have got engaged', 'They got engaged'], topic: 'Annoncer une nouvelle', sec: 'en13-s-nouvelles',
      hint: 'se fiancer = get engaged.',
      explain: 'se fiancer = **get engaged**. → They**\'ve got engaged**! (Ils se sont fiancés !) On entend aussi They got engaged!',
      rule: 'se fiancer = get engaged · être fiancé = be engaged',
      mistakes: [{ text: 'They have engaged', msg: 'se fiancer = **get** engaged : They\'ve **got** engaged!' }, { text: 'They\'ve got fianced', msg: '« fiancé » se dit **engaged** en anglais : They\'ve got **engaged**!' }],
      say: 'They\'ve got engaged!' },
    { id: 'en13-x-23', prompt: 'Traduis : Félicitations !', answers: ['Congratulations'], topic: 'Annoncer une nouvelle', sec: 'en13-s-nouvelles',
      hint: 'Un long mot qui finit par -s.',
      explain: '**Congratulations!** (Félicitations !) Toujours avec un -s. Félicitations pour… = Congratulations on…',
      rule: 'Félicitations ! = Congratulations! (toujours au pluriel)',
      mistakes: [{ text: 'Congratulation', msg: 'Toujours avec un **-s** : Congratulation**s**!' }, { text: 'Felicitations', msg: 'C\'est le mot français ! En anglais : **Congratulations!**' }],
      say: 'Congratulations!' },
    { id: 'en13-x-24', prompt: 'Complète : The news ___ (be) very good.', answers: ['is'], topic: 'Le vocabulaire du chapitre', sec: 'en13-s-vocab', strict: true,
      hint: 'news a un -s, mais…',
      explain: '**news** est toujours **singulier**. → The news **is** very good. (Les nouvelles sont très bonnes.)',
      rule: 'news (les nouvelles) : verbe au singulier',
      mistakes: [{ text: 'are', msg: 'news a l\'air d\'un pluriel, mais il est **singulier** : The news **is**…' }, { text: 'were', msg: 'news est singulier, et la phrase est au présent : The news **is**…' }],
      say: 'The news is very good.' },
    { id: 'en13-x-25', prompt: 'Traduis : Elle vient de partir.', answers: ['She\'s just left', 'She has just left', 'She\'s just gone', 'She has just gone', 'She just left'], topic: 'already, yet, just', sec: 'en13-s-deja-encore',
      hint: 'venir de = have / has + just + participe. leave, left, left.',
      explain: '**venir de** = has **just** + participe. → She**\'s just left**. (Elle vient de partir.)',
      rule: 'venir de + verbe = have / has + just + participe passé',
      mistakes: [{ text: 'She comes from leaving', msg: '« venir de » ne se traduit pas mot à mot : She**\'s just left**.' }, { text: 'She just has left', msg: 'just se place entre has et le participe : She has **just** left.' }, { text: 'She has just leave', msg: 'Après has, le participe passé : leave → **left**.' }],
      say: 'She\'s just left.' },
    { id: 'en13-x-26', prompt: 'Complète au present perfect : It ___ (stop) raining.', answers: ['has stopped'], topic: 'Annoncer une nouvelle', sec: 'en13-s-nouvelles',
      hint: 'It → has. stop : attention à l\'orthographe.',
      explain: 'It → **has** + participe : stop → stop**ped** (le p est doublé). → It **has stopped** raining. (Il a arrêté de pleuvoir.) À l\'oral : It\'s stopped raining.',
      rule: 'stop → stopped (consonne doublée après une voyelle courte)',
      mistakes: [{ text: 'has stoped', msg: 'Orthographe : le p est doublé → stop**ped**.' }, { text: 'have stopped', msg: 'It → **has** (have va avec I, you, we, they).' }, { text: 'is stopped', msg: 'L\'auxiliaire du present perfect est **has** (pas is) : It **has** stopped raining.' }],
      say: 'It has stopped raining.' },
    { id: 'en13-x-27', prompt: 'Traduis avec yet : Tu as déjà déjeuné ?', answers: ['Have you had lunch yet', 'Have you eaten lunch yet', 'Have you had your lunch yet'], topic: 'already, yet, just', sec: 'en13-s-deja-encore',
      hint: 'déjeuner = have lunch ; have, had, had.',
      explain: 'have lunch → participe **had**, et **yet** à la fin. → **Have you had lunch yet?** (Tu as déjà déjeuné ?)',
      rule: 'Est-ce fait ? → Have you + participe … yet ?',
      mistakes: [{ text: 'Have you have lunch yet', msg: 'Après have, le participe passé de have : **had** → Have you **had** lunch yet?' }, { text: 'Have you yet had lunch', msg: 'yet se place **à la fin** : Have you had lunch **yet**?' }, { text: 'Have you ever had lunch', msg: '**ever** = déjà dans ta vie (expérience). Pour une chose attendue aujourd\'hui : **yet**, à la fin.' }],
      say: 'Have you had lunch yet?' },
    { id: 'en13-x-28', prompt: 'Traduis : J\'ai été très occupé cette semaine.', answers: ['I\'ve been very busy this week', 'I have been very busy this week'], topic: 'been ou gone ?', sec: 'en13-s-been-gone',
      hint: 'été = been (participe de be) ; cette semaine n\'est pas finie.',
      explain: 'La semaine n\'est pas finie → **present perfect** ; « été » = **been**. → I**\'ve been** very busy **this week**. (J\'ai été très occupé cette semaine.)',
      rule: 'this week, today (période pas finie) → present perfect',
      mistakes: [{ text: 'I have very busy this week', msg: 'Il manque **been** (le participe de be) : I have **been** very busy.' }, { text: 'I\'ve been very occupied this week', msg: 'Occupé (une personne) = **busy**. (occupied se dit d\'une place, d\'un siège.)' }, { text: 'I\'ve been very busy the week', msg: 'Cette semaine = **this week** (sans the).' }],
      say: 'I\'ve been very busy this week.' }
  ]
});
