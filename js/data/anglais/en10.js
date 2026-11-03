/* Anglais — chapitre 10 : Projets et voyages (le futur avec will et be going to, transports, voyage, demander son chemin) */
APP.registerChapter({
  id: 'en10', subject: 'anglais', num: 10,
  title: 'Projets et voyages', subtitle: 'will, be going to · transports · gare, hôtel · demander son chemin',
  vocabSec: 'en10-s-vocab',
  sections: [
    {
      id: 'en10-s-will', title: 'Le futur avec will',
      html: `
<p>Pour parler du futur, l'anglais utilise souvent le petit mot <span class="say">will</span>. Il se place devant le verbe, qui reste à la <b>base</b> (la forme du dictionnaire, sans « to »).</p>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">I will go</span></td><td>j'irai</td></tr>
<tr><td><span class="say">She will come</span></td><td>elle viendra</td></tr>
<tr><td><span class="say">We will see</span></td><td>nous verrons</td></tr>
<tr><td><span class="say">They will be here</span></td><td>ils seront là</td></tr></table>
<p><b>will est le même pour toutes les personnes</b> : <span class="say">I will</span>, <span class="say">he will</span>, <span class="say">they will</span>… jamais de -s.</p>
<h3>La forme courte</h3>
<p>À l'oral, on contracte presque toujours : <span class="say">I'll</span> (= I will), <span class="say">you'll</span>, <span class="say">he'll</span>, <span class="say">she'll</span>, <span class="say">it'll</span>, <span class="say">we'll</span>, <span class="say">they'll</span>.</p>
<h3>La négation : won't</h3>
<p><span class="say">will not</span> devient <span class="say">won't</span> (se prononce « ouônnt » ; ne pas confondre avec <span class="say">want</span>, vouloir).<br><span class="say">I won't be late.</span> — Je ne serai pas en retard.</p>
<h3>La question : will devant le sujet</h3>
<p><span class="say">Will you come with me?</span> — Tu viendras avec moi ?<br>Réponse courte : <span class="say">Yes, I will.</span> (Oui.) / <span class="say">No, I won't.</span> (Non.)</p>
<h3>Quand utiliser will ?</h3>
<ul>
<li><b>Une décision prise sur le moment</b> : <span class="say">I'm tired. I'll take a taxi.</span> — Je suis fatigué. Je vais prendre un taxi.</li>
<li><b>Une promesse, une proposition d'aide</b> : <span class="say">I'll call you tomorrow.</span> — Je t'appellerai demain. <span class="say">I'll help you.</span> — Je vais t'aider.</li>
<li><b>Une prédiction (ce qu'on pense du futur)</b> : <span class="say">You will love London!</span> — Tu vas adorer Londres ! <span class="say">I think it will rain.</span> — Je pense qu'il va pleuvoir.</li>
</ul>
<div class="callout key"><b>À retenir</b> sujet + <b>will</b> + base verbale. Négation : <b>won't</b>. Question : <b>Will</b> + sujet + base verbale ?</div>
<div class="callout warn"><b>Piège</b> Jamais de « to » après will : on dit <span class="say">I will go</span>, pas « I will to go ». Et jamais de -s : <span class="say">he will go</span>, pas « he wills go » ni « he will goes ».</div>`
    },
    {
      id: 'en10-s-going', title: 'Le futur avec be going to',
      html: `
<p>Pour parler d'un <b>projet déjà décidé</b>, l'anglais utilise <b>be going to</b>. C'est très proche du français « je vais + verbe » : <span class="say">I'm going to visit London.</span> — Je vais visiter Londres.</p>
<p>Formation : <b>am / is / are</b> (le verbe to be, que tu connais) + <b>going to</b> + base verbale.</p>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">I'm going to visit London.</span></td><td>Je vais visiter Londres.</td></tr>
<tr><td><span class="say">She's going to take the train.</span></td><td>Elle va prendre le train.</td></tr>
<tr><td><span class="say">We're going to travel by car.</span></td><td>Nous allons voyager en voiture.</td></tr>
<tr><td><span class="say">They're going to book a hotel.</span></td><td>Ils vont réserver un hôtel.</td></tr></table>
<h3>Négation et question</h3>
<p>Comme toujours avec to be : on ajoute <b>not</b> après am / is / are, ou on les place devant le sujet pour poser la question.</p>
<ul>
<li><span class="say">I'm not going to take the plane.</span> — Je ne vais pas prendre l'avion.</li>
<li><span class="say">He isn't going to come.</span> — Il ne va pas venir.</li>
<li><span class="say">Are you going to visit Scotland?</span> — Tu vas visiter l'Écosse ?</li>
<li><span class="say">What are you going to do tonight?</span> — Qu'est-ce que tu vas faire ce soir ?</li>
</ul>
<h3>Une prédiction avec un indice</h3>
<p>On l'utilise aussi quand on <b>voit</b> que quelque chose va arriver : <span class="say">Look at the sky! It's going to rain.</span> — Regarde le ciel ! Il va pleuvoir.</p>
<div class="callout key"><b>À retenir</b> am / is / are + <b>going to</b> + base verbale = un projet, une intention (« je vais… »).</div>
<div class="callout warn"><b>Piège</b> N'oublie ni <b>am / is / are</b> ni <b>to</b> : <span class="say">I'm going to visit</span>, pas « I going to visit » ni « I'm going visit ».</div>
<div class="callout tip"><b>À l'oral</b> Les Anglais prononcent souvent <span class="say">going to</span> très vite, comme « gonna ». C'est familier : à l'écrit, garde <b>going to</b>.</div>`
    },
    {
      id: 'en10-s-difference', title: 'will ou going to ? Les mots du futur',
      html: `
<p>Les deux parlent du futur. Pour choisir, pose-toi une seule question : <b>quand ai-je décidé ?</b></p>
<table><tr><th>Situation</th><th>Exemple</th></tr>
<tr><td><b>will</b> : tu décides <b>maintenant</b>, en parlant</td><td><span class="say">There's no bread. I'll go to the baker's.</span><br>Il n'y a pas de pain. Je vais aller à la boulangerie.</td></tr>
<tr><td><b>going to</b> : c'était <b>déjà décidé</b> avant</td><td><span class="say">I'm going to go to the baker's this afternoon.</span><br>Je vais aller à la boulangerie cet après-midi (c'est prévu).</td></tr>
<tr><td><b>will</b> : une promesse, une proposition</td><td><span class="say">I'll carry your suitcase.</span><br>Je vais porter ta valise.</td></tr>
<tr><td><b>going to</b> : un projet organisé</td><td><span class="say">We're going to visit Scotland in June.</span><br>Nous allons visiter l'Écosse en juin.</td></tr></table>
<div class="callout info"><b>Pas de panique</b> Souvent, les deux sont possibles et on te comprendra toujours. Si tu hésites : un <b>projet</b> → <b>going to</b> ; une <b>décision rapide</b> ou une <b>promesse</b> → <b>will</b>.</div>
<h3>Les mots du futur</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">tomorrow</span></td><td>demain</td></tr>
<tr><td><span class="say">tomorrow morning</span></td><td>demain matin</td></tr>
<tr><td><span class="say">tonight</span></td><td>ce soir</td></tr>
<tr><td><span class="say">next week</span></td><td>la semaine prochaine</td></tr>
<tr><td><span class="say">next month</span> · <span class="say">next year</span></td><td>le mois prochain · l'année prochaine</td></tr>
<tr><td><span class="say">soon</span></td><td>bientôt</td></tr>
<tr><td><span class="say">later</span></td><td>plus tard</td></tr>
<tr><td><span class="say">in two days</span></td><td>dans deux jours</td></tr></table>
<p><span class="say">I'll see you next week.</span> — Je te verrai la semaine prochaine.<br><span class="say">The bus will be here soon.</span> — Le bus sera bientôt là.</p>
<div class="callout key"><b>À retenir</b> Projet décidé → <b>going to</b>. Décision sur le moment, promesse → <b>will</b>.</div>
<div class="callout warn"><b>Piège</b> « La semaine prochaine » se dit <span class="say">next week</span>, sans « the ». Et « dans deux jours » se dit <span class="say">in two days</span>.</div>`
    },
    {
      id: 'en10-s-vocab', title: 'Vocabulaire : transports, voyage, hôtel',
      html: `
<p>Les mots pour se déplacer et voyager. Clique sur un mot pour l'entendre.</p>
<h3>Les transports</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">a car</span></td><td>une voiture</td></tr>
<tr><td><span class="say">a bus</span></td><td>un bus</td></tr>
<tr><td><span class="say">a coach</span></td><td>un car (autocar)</td></tr>
<tr><td><span class="say">a train</span></td><td>un train</td></tr>
<tr><td><span class="say">a plane</span></td><td>un avion</td></tr>
<tr><td><span class="say">a boat</span></td><td>un bateau</td></tr>
<tr><td><span class="say">a bike</span></td><td>un vélo</td></tr>
<tr><td><span class="say">a taxi</span></td><td>un taxi</td></tr>
<tr><td><span class="say">the underground</span> (<span class="say">the Tube</span> à Londres)</td><td>le métro</td></tr></table>
<h3>Le voyage</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">the airport</span></td><td>l'aéroport</td></tr>
<tr><td><span class="say">the station</span></td><td>la gare</td></tr>
<tr><td><span class="say">a ticket</span></td><td>un billet</td></tr>
<tr><td><span class="say">a single ticket</span></td><td>un aller simple</td></tr>
<tr><td><span class="say">a return ticket</span></td><td>un aller-retour</td></tr>
<tr><td><span class="say">a passport</span></td><td>un passeport</td></tr>
<tr><td><span class="say">luggage</span></td><td>les bagages</td></tr>
<tr><td><span class="say">a suitcase</span></td><td>une valise</td></tr>
<tr><td><span class="say">a flight</span></td><td>un vol (en avion)</td></tr>
<tr><td><span class="say">a platform</span></td><td>un quai (à la gare)</td></tr>
<tr><td><span class="say">a trip</span></td><td>un voyage</td></tr>
<tr><td><span class="say">a holiday</span> · <span class="say">on holiday</span></td><td>les vacances · en vacances</td></tr>
<tr><td><span class="say">a map</span></td><td>un plan, une carte</td></tr></table>
<h3>À l'hôtel</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">a hotel</span></td><td>un hôtel</td></tr>
<tr><td><span class="say">a room</span></td><td>une chambre</td></tr>
<tr><td><span class="say">a single room</span></td><td>une chambre pour une personne</td></tr>
<tr><td><span class="say">a double room</span></td><td>une chambre double</td></tr>
<tr><td><span class="say">a booking</span> · <span class="say">a reservation</span></td><td>une réservation</td></tr>
<tr><td><span class="say">reception</span></td><td>la réception</td></tr></table>
<h3>Les verbes du voyage</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">to travel</span></td><td>voyager</td></tr>
<tr><td><span class="say">to arrive</span></td><td>arriver</td></tr>
<tr><td><span class="say">to leave</span></td><td>partir</td></tr>
<tr><td><span class="say">to visit</span></td><td>visiter, rendre visite à</td></tr>
<tr><td><span class="say">to book</span></td><td>réserver</td></tr>
<tr><td><span class="say">to miss</span></td><td>rater, manquer (le train)</td></tr></table>
<div class="callout key"><b>À retenir</b> <span class="say">luggage</span> (les bagages) est toujours au singulier : <span class="say">My luggage is in the car.</span> — Mes bagages sont dans la voiture.</div>
<div class="callout warn"><b>Faux amis</b> <span class="say">a car</span> = une voiture (un car = <span class="say">a coach</span>). <span class="say">to book</span> = réserver (mais <span class="say">a book</span> = un livre).</div>`
    },
    {
      id: 'en10-s-transport', title: 'Se déplacer : by, to, from, into',
      html: `
<h3>En bus, en train… : by</h3>
<p>Pour dire avec quel moyen de transport on voyage : <b>by</b> + le transport, <b>sans article</b>.</p>
<p><span class="say">by car</span> (en voiture) · <span class="say">by bus</span> (en bus) · <span class="say">by train</span> · <span class="say">by plane</span> · <span class="say">by boat</span> · <span class="say">by bike</span> (à vélo) · <span class="say">by taxi</span></p>
<p><span class="say">I go to work by bus.</span> — Je vais au travail en bus.</p>
<div class="callout warn"><b>Exception</b> « À pied » se dit <span class="say">on foot</span> : <span class="say">I go to the market on foot.</span> — Je vais au marché à pied. On peut dire aussi : <span class="say">I walk to the market.</span></div>
<p>On peut aussi utiliser <span class="say">take</span> (prendre) : <span class="say">I take the bus.</span> — Je prends le bus. <span class="say">We took a taxi.</span> — Nous avons pris un taxi.</p>
<h3>Les petits mots du mouvement</h3>
<table><tr><th>Mot</th><th>Sens</th><th>Exemple</th></tr>
<tr><td><span class="say">to</span></td><td>à, vers (là où l'on va)</td><td><span class="say">I'm going to London.</span> — Je vais à Londres.</td></tr>
<tr><td><span class="say">from</span></td><td>de (d'où l'on vient)</td><td><span class="say">The train from Paris is late.</span> — Le train de Paris est en retard.</td></tr>
<tr><td><span class="say">from … to</span></td><td>de … à</td><td><span class="say">This bus goes from the station to the airport.</span> — Ce bus va de la gare à l'aéroport.</td></tr>
<tr><td><span class="say">into</span></td><td>dans (en entrant)</td><td><span class="say">Come into the kitchen!</span> — Entre dans la cuisine !</td></tr>
<tr><td><span class="say">by</span></td><td>en (moyen de transport)</td><td><span class="say">We travel by train.</span> — Nous voyageons en train.</td></tr></table>
<h3>Monter et descendre</h3>
<ul>
<li>Bus, train, avion : <span class="say">get on the bus</span> (monter dans le bus), <span class="say">get off the bus</span> (descendre du bus).</li>
<li>Voiture, taxi : <span class="say">get into the taxi</span> (monter dans le taxi), <span class="say">get out of the taxi</span> (descendre du taxi).</li>
</ul>
<div class="callout key"><b>À retenir</b> « à » + ville : <b>to</b> si on y va (<span class="say">I'm going to Paris.</span>), <b>in</b> si on y est (<span class="say">I live in Paris.</span>).</div>
<div class="callout warn"><b>Piège</b> Avec <span class="say">home</span> (la maison, chez soi), pas de « to » : <span class="say">I go home.</span> — Je rentre à la maison.</div>`
    },
    {
      id: 'en10-s-chemin', title: 'Demander et indiquer son chemin',
      html: `
<h3>Demander son chemin</h3>
<ul>
<li><span class="say">Excuse me, where is the station?</span> — Excusez-moi, où est la gare ?</li>
<li><span class="say">How do I get to the airport?</span> — Comment aller à l'aéroport ?</li>
<li><span class="say">Is there a bank near here?</span> — Y a-t-il une banque près d'ici ?</li>
<li><span class="say">Is it far from here?</span> — C'est loin d'ici ?</li>
</ul>
<h3>Comprendre la réponse</h3>
<p>Pour donner une direction, on utilise le verbe seul, sans sujet : c'est l'<b>impératif</b>, comme « allez », « tournez » en français.</p>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">Go straight on.</span></td><td>Allez tout droit.</td></tr>
<tr><td><span class="say">Turn left.</span></td><td>Tournez à gauche.</td></tr>
<tr><td><span class="say">Turn right.</span></td><td>Tournez à droite.</td></tr>
<tr><td><span class="say">Take the first street on the left.</span></td><td>Prenez la première rue à gauche.</td></tr>
<tr><td><span class="say">Take the second street on the right.</span></td><td>Prenez la deuxième rue à droite.</td></tr>
<tr><td><span class="say">Turn right at the traffic lights.</span></td><td>Tournez à droite au feu.</td></tr>
<tr><td><span class="say">Cross the street.</span></td><td>Traversez la rue.</td></tr></table>
<h3>Situer un lieu</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">It's on the left.</span> / <span class="say">It's on the right.</span></td><td>C'est à gauche. / C'est à droite.</td></tr>
<tr><td><span class="say">It's next to the bank.</span></td><td>C'est à côté de la banque.</td></tr>
<tr><td><span class="say">It's opposite the church.</span></td><td>C'est en face de l'église.</td></tr>
<tr><td><span class="say">It's between the bank and the hotel.</span></td><td>C'est entre la banque et l'hôtel.</td></tr>
<tr><td><span class="say">It's on the corner.</span></td><td>C'est au coin de la rue.</td></tr>
<tr><td><span class="say">It's near the station.</span></td><td>C'est près de la gare.</td></tr>
<tr><td><span class="say">It's five minutes on foot.</span></td><td>C'est à cinq minutes à pied.</td></tr></table>
<div class="callout key"><b>À retenir</b> <span class="say">left</span> = gauche, <span class="say">right</span> = droite, <span class="say">straight on</span> = tout droit.</div>
<div class="callout warn"><b>Pièges</b> « Tout droit » ne se dit pas « all right » (qui veut dire « d'accord ») : c'est <span class="say">straight on</span>. Et « en face de » = <span class="say">opposite</span>, alors que <span class="say">in front of</span> = devant.</div>
<div class="callout tip"><b>Astuce</b> Tu n'as pas compris ? Dis : <span class="say">Sorry, I don't understand. More slowly, please.</span> — Pardon, je ne comprends pas. Plus lentement, s'il vous plaît.</div>`
    },
    {
      id: 'en10-s-hotel-gare', title: 'À la gare, à l\'aéroport, à l\'hôtel',
      html: `
<h3>À la gare</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">A single ticket to Oxford, please.</span></td><td>Un aller simple pour Oxford, s'il vous plaît.</td></tr>
<tr><td><span class="say">A return ticket to London, please.</span></td><td>Un aller-retour pour Londres, s'il vous plaît.</td></tr>
<tr><td><span class="say">How much is it?</span></td><td>C'est combien ?</td></tr>
<tr><td><span class="say">What time does the train leave?</span></td><td>À quelle heure part le train ?</td></tr>
<tr><td><span class="say">What time does it arrive in London?</span></td><td>À quelle heure arrive-t-il à Londres ?</td></tr>
<tr><td><span class="say">Which platform does the train leave from?</span></td><td>De quel quai part le train ?</td></tr>
<tr><td><span class="say">It leaves from platform four.</span></td><td>Il part du quai numéro 4.</td></tr>
<tr><td><span class="say">Is this the train to Bristol?</span></td><td>C'est bien le train pour Bristol ?</td></tr></table>
<div class="callout info"><b>Les horaires</b> Pour un horaire (train, avion, magasin), on utilise le <b>présent simple</b>, comme en français : <span class="say">The train leaves at half past nine.</span> — Le train part à 9 h 30.</div>
<h3>À l'aéroport</h3>
<ul>
<li><span class="say">Here is my passport.</span> — Voici mon passeport.</li>
<li><span class="say">My flight is at ten o'clock.</span> — Mon vol est à dix heures.</li>
<li><span class="say">Where is my luggage?</span> — Où sont mes bagages ?</li>
</ul>
<h3>À l'hôtel</h3>
<p>Un petit dialogue à la réception :</p>
<ul>
<li><span class="say">Good evening. I have a reservation. My name is Martin.</span> — Bonsoir. J'ai une réservation. Je m'appelle Martin.</li>
<li><span class="say">Yes, a double room for two nights.</span> — Oui, une chambre double pour deux nuits.</li>
<li><span class="say">What time is breakfast?</span> — À quelle heure est le petit-déjeuner ?</li>
<li><span class="say">From seven to ten.</span> — De sept heures à dix heures.</li>
<li><span class="say">Here is your key. Room twenty-five.</span> — Voici votre clé. Chambre 25.</li>
</ul>
<div class="callout key"><b>À retenir</b> <span class="say">single</span> = aller simple (ou chambre pour une personne), <span class="say">return</span> = aller-retour, <span class="say">double room</span> = chambre double.</div>
<div class="callout warn"><b>Piège</b> « Un aller simple » ne se dit pas « a simple ticket » mais <span class="say">a single ticket</span>.</div>`
    },
    {
      id: 'en10-s-pieges', title: 'Les pièges des francophones',
      html: `
<ul>
<li><b>to après will</b> : <span class="say">I will go</span>, jamais « I will to go ».</li>
<li><b>-s avec will</b> : <span class="say">She will come</span>, jamais « she wills come » ni « she will comes ».</li>
<li><b>Oublier to be avec going to</b> : <span class="say">I'm going to travel</span>, pas « I going to travel ».</li>
<li><b>going to + lieu ou going to + verbe ?</b> <span class="say">I'm going to London.</span> = Je vais à Londres (j'y vais). <span class="say">I'm going to visit London.</span> = Je vais visiter Londres (c'est mon projet).</li>
<li><b>Le présent pour une promesse</b> : « Je t'appelle demain » se dit <span class="say">I'll call you tomorrow.</span> (pas « I call you tomorrow »).</li>
<li><b>by foot</b> → <span class="say">on foot</span> ; « en bus » = <span class="say">by bus</span>, sans « the ».</li>
<li><b>luggages</b> n'existe pas : <span class="say">my luggage</span>.</li>
<li><b>car / coach</b> : <span class="say">a car</span> = une voiture ; le car = <span class="say">a coach</span>.</li>
<li><b>Tout droit</b> = <span class="say">straight on</span> (et non « all right », qui veut dire « d'accord »).</li>
<li><b>Devant / en face de</b> : devant = <span class="say">in front of</span> ; en face de = <span class="say">opposite</span>.</li>
<li><b>visit</b> sans préposition : <span class="say">I visit my sister.</span> — Je rends visite à ma sœur.</li>
</ul>
<div class="callout key"><b>À retenir</b> will + base · am/is/are + going to + base · by + transport (sauf <span class="say">on foot</span>).</div>`
    }
  ],
  words: [
    // Les transports
    { en: 'car', fr: 'la voiture', pos: 'n', cat: 'Les transports', ex: 'I go to work by car.', exFr: 'Je vais au travail en voiture.', level: 1, note: 'Faux ami : « un car » (autocar) se dit **a coach**. A car = une voiture.' },
    { en: 'bus', fr: 'le bus', pos: 'n', cat: 'Les transports', ex: 'The bus is late.', exFr: 'Le bus est en retard.', level: 1, note: 'L\'arrêt de bus = the bus stop.' },
    { en: 'coach', fr: 'le car (autocar)', pos: 'n', cat: 'Les transports', ex: 'We are going to travel by coach.', exFr: 'Nous allons voyager en car.', level: 2, note: 'Le bus de ville = bus ; le car pour les longs trajets = coach.' },
    { en: 'train', fr: 'le train', pos: 'n', cat: 'Les transports', ex: 'The train leaves at nine o\'clock.', exFr: 'Le train part à neuf heures.', level: 1 },
    { en: 'plane', fr: 'l\'avion', pos: 'n', cat: 'Les transports', alt: ['aeroplane', 'airplane'], ex: 'I\'m going to take the plane.', exFr: 'Je vais prendre l\'avion.', level: 1, note: 'On dit aussi aeroplane (britannique) ou airplane (américain).' },
    { en: 'boat', fr: 'le bateau', pos: 'n', cat: 'Les transports', ex: 'We are going to take the boat to England.', exFr: 'Nous allons prendre le bateau pour l\'Angleterre.', level: 1 },
    { en: 'bike', fr: 'le vélo', pos: 'n', cat: 'Les transports', alt: ['bicycle'], ex: 'My son goes to school by bike.', exFr: 'Mon fils va à l\'école à vélo.', level: 1, note: 'Le mot complet est bicycle. À vélo = by bike.' },
    { en: 'taxi', fr: 'le taxi', pos: 'n', cat: 'Les transports', alt: ['cab'], ex: 'We took a taxi to the hotel.', exFr: 'Nous avons pris un taxi jusqu\'à l\'hôtel.', level: 1 },
    { en: 'underground', fr: 'le métro', pos: 'n', cat: 'Les transports', alt: ['tube', 'subway', 'metro'], ex: 'I take the underground to work.', exFr: 'Je prends le métro pour aller au travail.', level: 2, note: 'À Londres, on dit souvent **the Tube** ; aux États-Unis, **the subway**.' },
    { en: 'on foot', fr: 'à pied', pos: 'x', cat: 'Les transports', sec: 'en10-s-transport', ex: 'The station is ten minutes on foot.', exFr: 'La gare est à dix minutes à pied.', level: 1, note: 'Attention : **on** foot, et non « by foot ».' },
    // Le voyage
    { en: 'airport', fr: 'l\'aéroport', pos: 'n', cat: 'Le voyage', ex: 'The airport is far from the city.', exFr: 'L\'aéroport est loin de la ville.', level: 1 },
    { en: 'station', fr: 'la gare', pos: 'n', cat: 'Le voyage', alt: ['train station', 'railway station'], ex: 'I\'ll meet you at the station.', exFr: 'Je te retrouverai à la gare.', level: 1, note: 'station désigne aussi une station de métro (a Tube station). La gare routière = the bus station.' },
    { en: 'ticket', fr: 'le billet', pos: 'n', cat: 'Le voyage', ex: 'I have two tickets for the train.', exFr: 'J\'ai deux billets pour le train.', level: 1, note: 'ticket = billet (train, avion, concert) ou ticket (bus).' },
    { en: 'single ticket', fr: 'l\'aller simple', pos: 'n', cat: 'Le voyage', alt: ['single', 'one-way ticket'], ex: 'I need a single ticket to York.', exFr: 'J\'ai besoin d\'un aller simple pour York.', level: 1, note: 'Piège : on ne dit pas « simple ticket ». Aux États-Unis : a one-way ticket.' },
    { en: 'return ticket', fr: 'le billet aller-retour', pos: 'n', cat: 'Le voyage', alt: ['return', 'round-trip ticket'], ex: 'He bought a return ticket.', exFr: 'Il a acheté un billet aller-retour.', level: 1, note: 'Aux États-Unis : a round-trip ticket.' },
    { en: 'passport', fr: 'le passeport', pos: 'n', cat: 'Le voyage', ex: 'Don\'t forget your passport!', exFr: 'N\'oublie pas ton passeport !', level: 1 },
    { en: 'luggage', fr: 'les bagages', pos: 'n', cat: 'Le voyage', alt: ['baggage'], ex: 'My luggage is in the car.', exFr: 'Mes bagages sont dans la voiture.', level: 1, note: 'Toujours au singulier : my luggage **is**… (jamais « luggages »).' },
    { en: 'suitcase', fr: 'la valise', pos: 'n', cat: 'Le voyage', ex: 'Your suitcase is in the room.', exFr: 'Ta valise est dans la chambre.', level: 1 },
    { en: 'flight', fr: 'le vol (en avion)', pos: 'n', cat: 'Le voyage', ex: 'My flight leaves at six o\'clock.', exFr: 'Mon vol part à six heures.', level: 1 },
    { en: 'platform', fr: 'le quai (de gare)', pos: 'n', cat: 'Le voyage', ex: 'The train leaves from platform two.', exFr: 'Le train part du quai numéro 2.', level: 2, note: 'À la gare, platform = le quai, la voie.' },
    { en: 'trip', fr: 'le voyage', pos: 'n', cat: 'Le voyage', alt: ['journey'], ex: 'Have a good trip!', exFr: 'Bon voyage !', level: 1, note: 'travel est surtout un verbe : voyager.' },
    { en: 'holiday', fr: 'les vacances', pos: 'n', cat: 'Le voyage', alt: ['holidays', 'vacation'], ex: 'We are going on holiday next week.', exFr: 'Nous partons en vacances la semaine prochaine.', level: 1, note: 'En vacances = on holiday (britannique) ; vacation est américain.' },
    { en: 'map', fr: 'le plan, la carte', pos: 'n', cat: 'Le voyage', ex: 'Do you have a map of the city?', exFr: 'Avez-vous un plan de la ville ?', level: 1, note: 'Attention : la carte au restaurant = the menu.' },
    // À l'hôtel
    { en: 'hotel', fr: 'l\'hôtel', pos: 'n', cat: 'À l\'hôtel', ex: 'Our hotel is next to the station.', exFr: 'Notre hôtel est à côté de la gare.', level: 1, note: 'On dit a hotel (le h se prononce).' },
    { en: 'room', fr: 'la chambre', pos: 'n', cat: 'À l\'hôtel', ex: 'I\'d like a room for two nights.', exFr: 'Je voudrais une chambre pour deux nuits.', level: 1, note: 'room veut aussi dire « la pièce ». Chambre pour une personne = a single room ; chambre double = a double room.' },
    { en: 'booking', fr: 'la réservation', pos: 'n', cat: 'À l\'hôtel', alt: ['reservation'], ex: 'I have a booking for tonight.', exFr: 'J\'ai une réservation pour ce soir.', level: 1, note: 'On dit aussi a reservation.' },
    { en: 'reception', fr: 'la réception', pos: 'n', cat: 'À l\'hôtel', ex: 'Ask at reception.', exFr: 'Demandez à la réception.', level: 2 },
    // Demander son chemin
    { en: 'street', fr: 'la rue', pos: 'n', cat: 'Demander son chemin', sec: 'en10-s-chemin', alt: ['road'], ex: 'The bank is in the next street.', exFr: 'La banque est dans la rue suivante.', level: 1 },
    { en: 'corner', fr: 'le coin', pos: 'n', cat: 'Demander son chemin', sec: 'en10-s-chemin', ex: 'The shop is on the corner.', exFr: 'Le magasin est au coin de la rue.', level: 2 },
    { en: 'traffic lights', fr: 'les feux (de circulation)', pos: 'n', cat: 'Demander son chemin', sec: 'en10-s-chemin', ex: 'Stop at the traffic lights.', exFr: 'Arrête-toi au feu.', level: 2, note: 'Toujours au pluriel : at the traffic lights = au feu.' },
    { en: 'left', fr: 'à gauche', pos: 'adv', cat: 'Demander son chemin', sec: 'en10-s-chemin', alt: ['on the left'], ex: 'Turn left after the bank.', exFr: 'Tournez à gauche après la banque.', level: 1 },
    { en: 'right', fr: 'à droite', pos: 'adv', cat: 'Demander son chemin', sec: 'en10-s-chemin', alt: ['on the right'], ex: 'The station is on the right.', exFr: 'La gare est à droite.', level: 1, note: 'right veut aussi dire « exact » : That\'s right! = C\'est exact !' },
    { en: 'straight on', fr: 'tout droit', pos: 'x', cat: 'Demander son chemin', sec: 'en10-s-chemin', alt: ['straight ahead'], ex: 'Go straight on for two minutes.', exFr: 'Allez tout droit pendant deux minutes.', level: 1, note: 'Piège : « all right » veut dire « d\'accord », pas « tout droit ».' },
    { en: 'next to', fr: 'à côté de', pos: 'prep', cat: 'Demander son chemin', sec: 'en10-s-chemin', alt: ['beside'], ex: 'The bank is next to the hotel.', exFr: 'La banque est à côté de l\'hôtel.', level: 1 },
    { en: 'opposite', fr: 'en face de', pos: 'prep', cat: 'Demander son chemin', sec: 'en10-s-chemin', alt: ['across from'], ex: 'The café is opposite the station.', exFr: 'Le café est en face de la gare.', level: 1, note: 'Ne pas confondre avec in front of = devant.' },
    { en: 'near', fr: 'près de', pos: 'prep', cat: 'Demander son chemin', sec: 'en10-s-chemin', alt: ['close to'], ex: 'Is there a bank near here?', exFr: 'Y a-t-il une banque près d\'ici ?', level: 1, note: 'Pas de « of » : near the station = près de la gare.' },
    { en: 'far', fr: 'loin', pos: 'adv', cat: 'Demander son chemin', sec: 'en10-s-chemin', ex: 'Is it far from here?', exFr: 'C\'est loin d\'ici ?', level: 1, note: 'loin de = far from.' },
    { en: 'between', fr: 'entre', pos: 'prep', cat: 'Demander son chemin', sec: 'en10-s-chemin', ex: 'The hotel is between the bank and the church.', exFr: 'L\'hôtel est entre la banque et l\'église.', level: 2 },
    { en: 'turn', fr: 'tourner', pos: 'v', cat: 'Demander son chemin', sec: 'en10-s-chemin', ex: 'Turn right at the church.', exFr: 'Tournez à droite à l\'église.', level: 1 },
    { en: 'cross', fr: 'traverser', pos: 'v', cat: 'Demander son chemin', sec: 'en10-s-chemin', ex: 'Cross the street at the traffic lights.', exFr: 'Traversez la rue au feu.', level: 2 },
    // Les verbes du voyage
    { en: 'travel', fr: 'voyager', pos: 'v', cat: 'Les verbes du voyage', ex: 'We like to travel by train.', exFr: 'Nous aimons voyager en train.', level: 1, note: 'Prétérit : travelled (traveled en américain).' },
    { en: 'arrive', fr: 'arriver', pos: 'v', cat: 'Les verbes du voyage', ex: 'The train arrives at ten o\'clock.', exFr: 'Le train arrive à dix heures.', level: 1, note: 'Arriver à + ville = arrive in London ; arriver à + lieu précis = arrive at the station.' },
    { en: 'visit', fr: 'visiter, rendre visite à', pos: 'v', cat: 'Les verbes du voyage', ex: 'I\'m going to visit my sister.', exFr: 'Je vais rendre visite à ma sœur.', level: 1, note: 'Sans préposition : visit London, visit my friends.' },
    { en: 'book', fr: 'réserver', pos: 'v', cat: 'Les verbes du voyage', ex: 'I\'m going to book a room.', exFr: 'Je vais réserver une chambre.', level: 1, note: 'a book = un livre, mais to book = réserver.' },
    { en: 'miss', fr: 'rater, manquer', pos: 'v', cat: 'Les verbes du voyage', ex: 'I don\'t want to miss my flight.', exFr: 'Je ne veux pas rater mon vol.', level: 2 },
    // Parler du futur
    { en: 'tomorrow', fr: 'demain', pos: 'adv', cat: 'Parler du futur', sec: 'en10-s-difference', ex: 'We\'re going to leave tomorrow morning.', exFr: 'Nous allons partir demain matin.', level: 1 },
    { en: 'tonight', fr: 'ce soir', pos: 'adv', cat: 'Parler du futur', sec: 'en10-s-difference', ex: 'What are you going to do tonight?', exFr: 'Qu\'est-ce que tu vas faire ce soir ?', level: 1, note: 'tonight veut aussi dire « cette nuit ».' },
    { en: 'next week', fr: 'la semaine prochaine', pos: 'x', cat: 'Parler du futur', sec: 'en10-s-difference', ex: 'I\'ll see you next week.', exFr: 'Je te verrai la semaine prochaine.', level: 1, note: 'Sans « the » : next week, next month, next year.' },
    { en: 'soon', fr: 'bientôt', pos: 'adv', cat: 'Parler du futur', sec: 'en10-s-difference', ex: 'The bus will be here soon.', exFr: 'Le bus sera bientôt là.', level: 1 },
    { en: 'later', fr: 'plus tard', pos: 'adv', cat: 'Parler du futur', sec: 'en10-s-difference', ex: 'I\'ll do it later.', exFr: 'Je le ferai plus tard.', level: 1 }
  ],
  phrases: [
    { en: 'I\'ll call you tomorrow.', fr: 'Je t\'appellerai demain.', alt: ['I\'ll phone you tomorrow.', 'I\'ll ring you tomorrow.'], cat: 'Parler du futur', sec: 'en10-s-will', note: 'will = une promesse. I\'ll = I will.' },
    { en: 'I\'m going to visit London.', fr: 'Je vais visiter Londres.', cat: 'Parler du futur', sec: 'en10-s-going', note: 'be going to = un projet déjà décidé.' },
    { en: 'What are you going to do?', fr: 'Qu\'est-ce que tu vas faire ?', cat: 'Parler du futur', sec: 'en10-s-going' },
    { en: 'I won\'t be late.', fr: 'Je ne serai pas en retard.', cat: 'Parler du futur', sec: 'en10-s-will', note: 'won\'t = will not.' },
    { en: 'Will you come with me?', fr: 'Tu viendras avec moi ?', alt: ['Are you going to come with me?'], cat: 'Parler du futur', sec: 'en10-s-will' },
    { en: 'I\'ll take a taxi.', fr: 'Je vais prendre un taxi.', alt: ['I\'m going to take a taxi.'], cat: 'Parler du futur', sec: 'en10-s-difference', note: 'Décision prise sur le moment → will.' },
    { en: 'We\'re going on holiday next week.', fr: 'Nous partons en vacances la semaine prochaine.', alt: ['We\'re going to go on holiday next week.'], cat: 'Parler du futur', sec: 'en10-s-going' },
    { en: 'A single ticket to Oxford, please.', fr: 'Un aller simple pour Oxford, s\'il vous plaît.', alt: ['A single to Oxford, please.', 'A one-way ticket to Oxford, please.'], cat: 'À la gare', sec: 'en10-s-hotel-gare' },
    { en: 'A return ticket to London, please.', fr: 'Un aller-retour pour Londres, s\'il vous plaît.', alt: ['A return to London, please.', 'A round-trip ticket to London, please.'], cat: 'À la gare', sec: 'en10-s-hotel-gare' },
    { en: 'What time does the train leave?', fr: 'À quelle heure part le train ?', alt: ['When does the train leave?'], cat: 'À la gare', sec: 'en10-s-hotel-gare', note: 'Pour un horaire : présent simple (does… leave).' },
    { en: 'Which platform does the train leave from?', fr: 'De quel quai part le train ?', alt: ['What platform does the train leave from?'], cat: 'À la gare', sec: 'en10-s-hotel-gare' },
    { en: 'Is this the train to Bristol?', fr: 'C\'est bien le train pour Bristol ?', cat: 'À la gare', sec: 'en10-s-hotel-gare' },
    { en: 'Here is my passport.', fr: 'Voici mon passeport.', cat: 'À l\'aéroport', sec: 'en10-s-hotel-gare' },
    { en: 'Excuse me, where is the station?', fr: 'Excusez-moi, où est la gare ?', alt: ['Excuse me, where is the train station?'], cat: 'Demander son chemin', sec: 'en10-s-chemin' },
    { en: 'How do I get to the airport?', fr: 'Comment aller à l\'aéroport ?', alt: ['How can I get to the airport?'], cat: 'Demander son chemin', sec: 'en10-s-chemin' },
    { en: 'Is it far from here?', fr: 'C\'est loin d\'ici ?', cat: 'Demander son chemin', sec: 'en10-s-chemin' },
    { en: 'Go straight on.', fr: 'Allez tout droit.', alt: ['Go straight ahead.'], cat: 'Demander son chemin', sec: 'en10-s-chemin' },
    { en: 'Turn right at the traffic lights.', fr: 'Tournez à droite au feu.', cat: 'Demander son chemin', sec: 'en10-s-chemin' },
    { en: 'Take the first street on the left.', fr: 'Prenez la première rue à gauche.', alt: ['Take the first road on the left.', 'Take the first left.'], cat: 'Demander son chemin', sec: 'en10-s-chemin' },
    { en: 'It\'s next to the bank.', fr: 'C\'est à côté de la banque.', alt: ['It\'s beside the bank.'], cat: 'Demander son chemin', sec: 'en10-s-chemin' },
    { en: 'It\'s opposite the church.', fr: 'C\'est en face de l\'église.', alt: ['It\'s across from the church.'], cat: 'Demander son chemin', sec: 'en10-s-chemin', note: 'opposite = en face de (in front of = devant).' },
    { en: 'It\'s five minutes on foot.', fr: 'C\'est à cinq minutes à pied.', alt: ['It\'s a five-minute walk.'], cat: 'Demander son chemin', sec: 'en10-s-chemin' },
    { en: 'I have a reservation.', fr: 'J\'ai une réservation.', alt: ['I have a booking.', 'I\'ve got a reservation.', 'I\'ve got a booking.'], cat: 'À l\'hôtel', sec: 'en10-s-hotel-gare' },
    { en: 'A double room for two nights, please.', fr: 'Une chambre double pour deux nuits, s\'il vous plaît.', cat: 'À l\'hôtel', sec: 'en10-s-hotel-gare' },
    { en: 'What time is breakfast?', fr: 'À quelle heure est le petit-déjeuner ?', alt: ['When is breakfast?'], cat: 'À l\'hôtel', sec: 'en10-s-hotel-gare' }
  ],
  quiz: [
    { id: 'en10-q-01', q: 'Complète (promesse) : I ___ call you tomorrow.', choices: ['am', 'wills', 'will', 'going'], answer: 2, topic: 'Le futur avec will', sec: 'en10-s-will',
      why: { 0: '« am » seul ne fait pas le futur : il faudrait « am going to ».', 1: 'will ne prend jamais de -s.', 3: '« going » seul ne suffit pas : il faudrait « am going to ».' },
      explain: 'Pour une promesse : **will** + base verbale. → I **will** call you tomorrow. (Je t\'appellerai demain.) À l\'oral : **I\'ll** call you.', say: 'I will call you tomorrow.' },
    { id: 'en10-q-02', q: 'Traduis « Je ne serai pas en retard » : I ___ be late.', choices: ['won\'t', 'don\'t', 'willn\'t', 'am not'], answer: 0, topic: 'Le futur avec will', sec: 'en10-s-will',
      why: { 1: '« don\'t » sert au présent. Au futur, la négation est won\'t (will not).', 2: '« willn\'t » n\'existe pas : la forme courte de will not est **won\'t**.', 3: '« I am not be » est impossible : deux fois le verbe être.' },
      explain: 'Négation de will : **will not**, en forme courte **won\'t**. → I **won\'t** be late. (Je ne serai pas en retard.)', say: 'I won\'t be late.' },
    { id: 'en10-q-03', q: 'Complète : She will ___ tomorrow.', choices: ['comes', 'to come', 'coming', 'come'], answer: 3, topic: 'Le futur avec will', sec: 'en10-s-will',
      why: { 0: 'Après will, pas de -s : le verbe reste à la base.', 1: 'Jamais de « to » après will.', 2: 'Pas de -ing après will.' },
      explain: 'Après **will**, toujours la **base verbale**, sans to et sans -s. → She will **come** tomorrow. (Elle viendra demain.)', say: 'She will come tomorrow.' },
    { id: 'en10-q-04', q: 'Comment demander « Tu m\'aideras ? »', choices: ['Do you will help me?', 'Will you help me?', 'Will you to help me?', 'Are you will help me?'], answer: 1, topic: 'Le futur avec will', sec: 'en10-s-will',
      why: { 0: 'Pas de do avec will : will fait la question tout seul.', 2: 'Pas de « to » après will.', 3: '« are » et « will » ne vont pas ensemble.' },
      explain: 'Question au futur : **Will** + sujet + base verbale ? → **Will you help** me? (Tu m\'aideras ?) Réponse courte : Yes, I will. / No, I won\'t.', say: 'Will you help me?' },
    { id: 'en10-q-05', q: 'Projet déjà décidé : Next summer, we ___ visit Scotland.', choices: ['are going to', 'is going to', 'going to', 'are going'], answer: 0, topic: 'Le futur avec be going to', sec: 'en10-s-going',
      why: { 1: '« is » va avec he, she, it. Avec we : are.', 2: 'Il manque le verbe to be : we **are** going to.', 3: 'Il manque « to » : are going **to** visit.' },
      explain: 'Projet décidé : **am / is / are + going to + base**. → Next summer, we **are going to** visit Scotland. (L\'été prochain, nous allons visiter l\'Écosse.)', say: 'Next summer, we are going to visit Scotland.' },
    { id: 'en10-q-06', q: 'Complète : My husband ___ going to buy a new car.', choices: ['are', 'am', 'is', 'be'], answer: 2, topic: 'Le futur avec be going to', sec: 'en10-s-going',
      why: { 0: '« are » va avec you, we, they.', 1: '« am » va seulement avec I.', 3: '« be » doit être conjugué : is.' },
      explain: 'My husband = he → **is** going to. → My husband **is going to** buy a new car. (Mon mari va acheter une nouvelle voiture.)', say: 'My husband is going to buy a new car.' },
    { id: 'en10-q-07', q: 'Complète : ___ you going to take the train?', choices: ['Do', 'Are', 'Will', 'Is'], answer: 1, topic: 'Le futur avec be going to', sec: 'en10-s-going',
      why: { 0: 'Pas de do avec going to : c\'est le verbe to be qui fait la question.', 2: '« Will you going to » mélange les deux futurs : impossible.', 3: '« is » va avec he, she, it.' },
      explain: 'Question avec going to : **am / is / are** passe devant le sujet. → **Are** you going to take the train? (Tu vas prendre le train ?)', say: 'Are you going to take the train?' },
    { id: 'en10-q-08', q: 'Forme négative : I ___ going to take the plane.', choices: ['am not', 'don\'t', 'won\'t', 'not'], answer: 0, topic: 'Le futur avec be going to', sec: 'en10-s-going',
      why: { 1: 'Pas de do avec going to : on met not après am.', 2: 'won\'t va avec will, pas avec going to.', 3: 'Il manque le verbe to be : I **am** not.' },
      explain: 'Négation : **am / is / are + not + going to**. → I **am not** going to take the plane. (Je ne vais pas prendre l\'avion.) À l\'oral : I\'m not going to…', say: 'I\'m not going to take the plane.' },
    { id: 'en10-q-09', q: 'Le téléphone sonne. Tu décides tout de suite de répondre. Tu dis :', choices: ['I answer it.', 'I\'m answer it.', 'I will answering it.', 'I\'ll answer it.'], answer: 3, topic: 'will ou going to ?', sec: 'en10-s-difference',
      why: { 0: 'Le présent simple ne sert pas à annoncer ce qu\'on va faire dans un instant.', 1: '« I\'m answer » est faux : pas de to be devant un verbe à la base.', 2: 'Après will : la base, sans -ing.' },
      explain: 'Décision prise **sur le moment** → **will**. → **I\'ll answer** it. (Je vais répondre.)', say: 'I\'ll answer it.' },
    { id: 'en10-q-10', q: 'Tes billets pour Rome sont déjà achetés. Quelle phrase est correcte ?', choices: ['I visit Rome in May.', 'I\'m going to visit Rome in May.', 'I will to visit Rome in May.', 'I\'m going visit Rome in May.'], answer: 1, topic: 'will ou going to ?', sec: 'en10-s-difference',
      why: { 0: 'Le présent simple (I visit) ne convient pas pour un projet futur.', 2: 'Jamais de « to » après will.', 3: 'Il manque « to » : going **to** visit.' },
      explain: 'Projet déjà décidé et organisé → **be going to**. → I\'m **going to visit** Rome in May. (Je vais visiter Rome en mai.)', say: 'I\'m going to visit Rome in May.' },
    { id: 'en10-q-11', q: 'Complète : I go to work ___ bus.', choices: ['by', 'with', 'on', 'in'], answer: 0, topic: 'Prépositions de mouvement', sec: 'en10-s-transport',
      why: { 1: '« with » = avec (une personne, un objet), pas pour un moyen de transport.', 2: 'On peut dire « on the bus » (avec the), mais sans article : **by** bus.', 3: '« in bus » ne se dit pas.' },
      explain: 'Moyen de transport : **by** + transport, sans article. → I go to work **by** bus. (Je vais au travail en bus.)', say: 'I go to work by bus.' },
    { id: 'en10-q-12', q: 'Traduis « à pied » : I go to the market ___.', choices: ['by foot', 'with foot', 'on foot', 'at foot'], answer: 2, topic: 'Prépositions de mouvement', sec: 'en10-s-transport',
      why: { 0: 'On dit by car, by bus… mais pour la marche, l\'expression correcte est **on foot**.', 1: '« with foot » ne se dit pas.', 3: '« at foot » ne se dit pas.' },
      explain: 'À pied = **on foot**. → I go to the market **on foot**. (Je vais au marché à pied.) On peut aussi dire : I walk to the market.', say: 'I go to the market on foot.' },
    { id: 'en10-q-13', q: 'Complète : This train goes ___ Paris ___ Lyon.', choices: ['from … to', 'of … to', 'from … at', 'since … to'], answer: 0, topic: 'Prépositions de mouvement', sec: 'en10-s-transport',
      why: { 1: '« of » ne sert pas à dire d\'où l\'on part : on dit **from**.', 2: 'La destination se dit **to**, pas at.', 3: '« since » veut dire « depuis » (pour le temps), pas un lieu de départ.' },
      explain: '**from** = de (le point de départ), **to** = à, vers (la destination). → This train goes **from** Paris **to** Lyon. (Ce train va de Paris à Lyon.)', say: 'This train goes from Paris to Lyon.' },
    { id: 'en10-q-14', q: 'Complète : Get ___ the taxi! (Monte dans le taxi !)', choices: ['at', 'from', 'by', 'into'], answer: 3, topic: 'Prépositions de mouvement', sec: 'en10-s-transport',
      why: { 0: '« at » indique un endroit où l\'on est, pas un mouvement vers l\'intérieur.', 1: '« from » = de (on sort de quelque part).', 2: '« by » = en (moyen de transport) ou près de.' },
      explain: '**into** = dans, avec un mouvement vers l\'intérieur. → Get **into** the taxi! (Monte dans le taxi !) On dit aussi : Get in the taxi!', say: 'Get into the taxi!' },
    { id: 'en10-q-15', q: 'Que veut dire « Go straight on » ?', choices: ['Tournez à droite.', 'Allez tout droit.', 'Faites demi-tour.', 'Arrêtez-vous ici.'], answer: 1, topic: 'Demander son chemin', sec: 'en10-s-chemin',
      why: { 0: 'Tournez à droite = Turn right.', 2: 'Faites demi-tour = Turn back.', 3: 'Arrêtez-vous ici = Stop here.' },
      explain: '**Go straight on** = Allez tout droit. Attention : right = droite, mais straight = droit (tout droit).', say: 'Go straight on.' },
    { id: 'en10-q-16', q: 'Complète : Take the first street ___ the left.', choices: ['on', 'in', 'of', 'at'], answer: 0, topic: 'Demander son chemin', sec: 'en10-s-chemin',
      why: { 1: '« in the left » ne se dit pas.', 2: '« of » = de ; ici on dit **on** the left.', 3: '« at the left » ne se dit pas pour une direction.' },
      explain: 'À gauche, à droite (position) = **on the left**, **on the right**. → Take the first street **on** the left. (Prenez la première rue à gauche.)', say: 'Take the first street on the left.' },
    { id: 'en10-q-17', q: 'La banque est en face de l\'hôtel : The bank is ___ the hotel.', choices: ['next to', 'between', 'opposite', 'in front of'], answer: 2, topic: 'Demander son chemin', sec: 'en10-s-chemin',
      why: { 0: 'next to = à côté de.', 1: 'between = entre (deux choses).', 3: 'Piège : in front of = devant, pas « en face de ».' },
      explain: 'En face de = **opposite**. → The bank is **opposite** the hotel. (La banque est en face de l\'hôtel.)', say: 'The bank is opposite the hotel.' },
    { id: 'en10-q-18', q: 'Écoute. Que demande la personne ?', listen: true, say: 'What time does the train leave?', choices: ['Où est la gare ?', 'Combien coûte le billet ?', 'À quelle heure part le train ?', 'De quel quai part le train ?'], answer: 2, topic: 'Compréhension orale', sec: 'en10-s-hotel-gare',
      why: { 0: 'Où est la gare ? = Where is the station?', 1: 'Combien coûte le billet ? = How much is the ticket?', 3: 'De quel quai ? = Which platform…?' },
      explain: '**What time** = à quelle heure ; **leave** = partir. → What time does the train leave? (À quelle heure part le train ?)' },
    { id: 'en10-q-19', q: 'Écoute. Que dit la personne ?', listen: true, say: 'Go straight on, then turn right.', choices: ['Tournez à droite, puis allez tout droit.', 'Allez tout droit, puis tournez à droite.', 'Allez tout droit, puis tournez à gauche.', 'C\'est tout droit, à côté de la gare.'], answer: 1, topic: 'Compréhension orale', sec: 'en10-s-chemin',
      why: { 0: 'L\'ordre est inversé : d\'abord straight on (tout droit), ensuite right.', 2: 'right = à droite ; à gauche serait left.', 3: 'Il n\'est pas question de la gare.' },
      explain: '**Go straight on** (allez tout droit), **then** (puis) **turn right** (tournez à droite).' },
    { id: 'en10-q-20', q: 'Écoute. Que dit la personne ?', listen: true, say: 'I\'m going to visit my sister next week.', choices: ['J\'ai rendu visite à ma sœur la semaine dernière.', 'Ma sœur va venir la semaine prochaine.', 'Je rends visite à ma sœur chaque semaine.', 'Je vais rendre visite à ma sœur la semaine prochaine.'], answer: 3, topic: 'Compréhension orale', sec: 'en10-s-going',
      why: { 0: 'going to parle du futur, et next week = la semaine prochaine.', 1: 'C\'est « je » (I) qui va voir sa sœur, pas l\'inverse.', 2: '« chaque semaine » se dirait every week.' },
      explain: '**I\'m going to visit** = je vais rendre visite (projet) ; **next week** = la semaine prochaine.' },
    { id: 'en10-q-21', q: 'Écoute. Que demande la personne ?', listen: true, say: 'A return ticket to London, please.', choices: ['Un aller-retour pour Londres, s\'il vous plaît.', 'Un aller simple pour Londres, s\'il vous plaît.', 'Deux billets pour Londres, s\'il vous plaît.', 'Un billet pour Londres pour demain, s\'il vous plaît.'], answer: 0, topic: 'Compréhension orale', sec: 'en10-s-hotel-gare',
      why: { 1: 'Un aller simple = a single ticket.', 2: '« a » = un seul billet, pas deux.', 3: 'Il n\'est pas question de demain (tomorrow).' },
      explain: '**a return ticket** = un aller-retour. → A return ticket to London, please. (Un aller-retour pour Londres, s\'il vous plaît.)' },
    { id: 'en10-q-22', q: 'Complète : Where is my ___? (mes bagages)', choices: ['luggages', 'luggage', 'baggages'], answer: 1, topic: 'Le vocabulaire du voyage', sec: 'en10-s-vocab',
      why: { 0: 'luggage ne prend jamais de -s.', 2: 'baggage ne prend jamais de -s non plus.' },
      explain: '**luggage** (les bagages) est toujours au **singulier** en anglais. → Where **is** my **luggage**? (Où sont mes bagages ?)', say: 'Where is my luggage?' },
    { id: 'en10-q-23', q: '« Je prends le car pour aller à Londres. » En anglais, « le car » se dit :', choices: ['the car', 'the taxi', 'the coach'], answer: 2, topic: 'Le vocabulaire du voyage', sec: 'en10-s-vocab',
      why: { 0: 'Faux ami : a car = une voiture.', 1: 'a taxi = un taxi.' },
      explain: 'Le car (autocar) = **a coach**. → I take the **coach** to London. (Je prends le car pour aller à Londres.) Attention : a **car** = une voiture.', say: 'I take the coach to London.' },
    { id: 'en10-q-24', q: 'Complète : I live ___ London, but I\'m going ___ Paris tomorrow.', choices: ['to … in', 'in … in', 'in … to', 'at … at'], answer: 2, topic: 'Prépositions de mouvement', sec: 'en10-s-transport',
      why: { 0: 'C\'est l\'inverse : on habite **in** une ville, on va **to** une ville.', 1: 'Pour la destination (aller à), il faut **to**.', 3: '« at » ne s\'utilise pas ici avec une ville.' },
      explain: '« à » + ville : **in** quand on y est (I live **in** London), **to** quand on y va (I\'m going **to** Paris). → I live in London, but I\'m going to Paris tomorrow. (J\'habite à Londres, mais je vais à Paris demain.)', say: 'I live in London, but I\'m going to Paris tomorrow.' }
  ],
  exercises: [
    { id: 'en10-x-01', prompt: 'Complète au futur avec will : I ___ (help) you with your suitcase.', answers: ['will help', '\'ll help'], topic: 'Le futur avec will', sec: 'en10-s-will',
      hint: 'will + verbe à la base.',
      explain: 'Une proposition d\'aide → **will + base verbale**. → I **will help** you with your suitcase. (Je vais t\'aider avec ta valise.) À l\'oral : I\'ll help you.',
      rule: 'sujet + will + base verbale (sans to, sans -s)',
      mistakes: [{ text: 'will to help', msg: 'Jamais de **to** après will : I will **help** you.' }, { text: 'will helps', msg: 'Après will, le verbe reste à la base, sans -s : will **help**.' }, { text: 'help', msg: 'Pour parler du futur, il faut **will** devant le verbe : I **will help** you.' }],
      say: 'I will help you with your suitcase.' },
    { id: 'en10-x-02', prompt: 'Complète au futur avec will : The train ___ (be) late.', answers: ['will be'], topic: 'Le futur avec will', sec: 'en10-s-will',
      hint: 'Après will, quelle forme de to be ?',
      explain: 'Après will, la base **be**. → The train **will be** late. (Le train sera en retard.)',
      rule: 'will be = serai, seras, sera… (pareil pour toutes les personnes)',
      mistakes: [{ text: 'will is', msg: 'Après will, on met la base **be** (jamais is, am ou are).' }, { text: 'will to be', msg: 'Pas de **to** après will : will **be**.' }],
      say: 'The train will be late.' },
    { id: 'en10-x-03', prompt: 'Mets à la forme négative : I will be late.', answers: ['I won\'t be late', 'I will not be late'], topic: 'Le futur avec will', sec: 'en10-s-will',
      hint: 'will not = …',
      explain: '**will not** = **won\'t**. → I **won\'t** be late. (Je ne serai pas en retard.)',
      rule: 'Négation : sujet + won\'t (will not) + base verbale',
      mistakes: [{ text: 'I don\'t will be late', msg: 'Pas de do avec will : la négation est **won\'t** (will not).' }, { text: 'I will be not late', msg: '**not** se place juste après will : I **will not** (won\'t) be late.' }],
      say: 'I won\'t be late.' },
    { id: 'en10-x-04', prompt: 'Pose la question : You will come tomorrow. → ___?', answers: ['Will you come tomorrow'], topic: 'Le futur avec will', sec: 'en10-s-will',
      hint: 'will passe devant le sujet.',
      explain: 'Question : **Will + sujet + base** ? → **Will you come** tomorrow? (Tu viendras demain ?)',
      rule: 'Will + sujet + base verbale ?',
      mistakes: [{ text: 'Do you will come tomorrow', msg: 'Pas de do : avec will, on inverse simplement → **Will you** come tomorrow?' }, { text: 'Will you to come tomorrow', msg: 'Pas de **to** après will : Will you **come** tomorrow?' }, { text: 'You will come tomorrow', msg: 'Pour poser la question, **Will** passe devant le sujet : **Will you** come tomorrow?' }],
      say: 'Will you come tomorrow?' },
    { id: 'en10-x-05', prompt: 'Complète avec be going to : We ___ (visit) London next month.', answers: ['are going to visit'], topic: 'Le futur avec be going to', sec: 'en10-s-going',
      hint: 'we → are + going to + base.',
      explain: 'we + **are going to** + base. → We **are going to visit** London next month. (Nous allons visiter Londres le mois prochain.)',
      rule: 'am / is / are + going to + base verbale',
      mistakes: [{ text: 'going to visit', msg: 'Il manque le verbe to be : we **are** going to visit.' }, { text: 'are going visit', msg: 'Il manque **to** : are going **to** visit.' }, { text: 'is going to visit', msg: 'Avec we, to be se conjugue **are** : we are going to visit.' }],
      say: 'We are going to visit London next month.' },
    { id: 'en10-x-06', prompt: 'Complète avec be going to : My wife ___ (buy) a new phone.', answers: ['is going to buy'], topic: 'Le futur avec be going to', sec: 'en10-s-going',
      hint: 'My wife = she.',
      explain: 'My wife = she → **is going to** + base. → My wife **is going to buy** a new phone. (Ma femme va acheter un nouveau téléphone.)',
      rule: 'he / she / it + is going to + base verbale',
      mistakes: [{ text: 'are going to buy', msg: 'My wife = she → **is** going to (are va avec you, we, they).' }, { text: 'is going to buys', msg: 'Après going to, le verbe reste à la base : going to **buy**.' }, { text: 'is going to bought', msg: 'Après going to, pas de passé : la base **buy**.' }],
      say: 'My wife is going to buy a new phone.' },
    { id: 'en10-x-07', prompt: 'Mets à la forme négative : I\'m going to take the plane.', answers: ['I\'m not going to take the plane', 'I am not going to take the plane'], topic: 'Le futur avec be going to', sec: 'en10-s-going',
      hint: 'not se place après am.',
      explain: 'On ajoute **not** après am. → I\'m **not** going to take the plane. (Je ne vais pas prendre l\'avion.)',
      rule: 'Négation : am / is / are + not + going to + base',
      mistakes: [{ text: 'I don\'t going to take the plane', msg: 'Pas de do avec going to : on ajoute **not** après am → I\'m **not** going to…' }, { text: 'I won\'t going to take the plane', msg: 'won\'t va avec will. Avec going to : I\'m **not** going to…' }],
      say: 'I\'m not going to take the plane.' },
    { id: 'en10-x-08', prompt: 'Pose la question : She is going to travel by train. → ___?', answers: ['Is she going to travel by train'], topic: 'Le futur avec be going to', sec: 'en10-s-going',
      hint: 'is passe devant le sujet.',
      explain: 'Question : **Is + she + going to** + base ? → **Is she going to** travel by train? (Elle va voyager en train ?)',
      rule: 'Question : Am / Is / Are + sujet + going to + base ?',
      mistakes: [{ text: 'Does she going to travel by train', msg: 'Pas de does : avec going to, c\'est **Is** qui passe devant le sujet.' }, { text: 'She is going to travel by train', msg: 'Pour la question, mets **Is** devant le sujet : **Is she** going to…?' }],
      say: 'Is she going to travel by train?' },
    { id: 'en10-x-09', prompt: 'Traduis avec be going to : Je vais visiter Londres.', answers: ['I\'m going to visit London', 'I am going to visit London'], topic: 'Le futur avec be going to', sec: 'en10-s-going',
      hint: 'Je vais + verbe = I\'m going to + verbe.',
      explain: 'Projet décidé : **I\'m going to** + base. → I\'m **going to visit** London.',
      rule: 'je vais + verbe = I\'m going to + base verbale',
      mistakes: [{ text: 'I go to visit London', msg: 'Le présent « I go » ne marque pas le futur. Il faut **am going to** : I\'m going to visit London.' }, { text: 'I\'m going visit London', msg: 'Il manque **to** : going **to** visit.' }, { text: 'I will visit London', msg: 'Cette phrase est correcte, mais la consigne demande **be going to** (projet décidé) : I\'m going to visit London.' }],
      say: 'I\'m going to visit London.' },
    { id: 'en10-x-10', prompt: 'Traduis : Je t\'appellerai demain.', answers: ['I\'ll call you tomorrow', 'I will call you tomorrow', 'I\'ll phone you tomorrow', 'I\'ll ring you tomorrow', 'I\'m going to call you tomorrow'], topic: 'Le futur avec will', sec: 'en10-s-will',
      hint: 'appeler = call ; une promesse → will.',
      explain: 'Une promesse → **will**. → **I\'ll call** you tomorrow. (Je t\'appellerai demain.)',
      rule: 'Promesse : I\'ll (I will) + base verbale',
      mistakes: [{ text: 'I will to call you tomorrow', msg: 'Pas de **to** après will : I will **call** you.' }, { text: 'I call you tomorrow', msg: 'Le présent ne suffit pas pour une promesse : il faut **will** → I\'ll call you tomorrow.' }],
      say: 'I\'ll call you tomorrow.' },
    { id: 'en10-x-11', prompt: 'Complète avec la bonne préposition : I go to work ___ bus.', answers: ['by'], topic: 'Prépositions de mouvement', sec: 'en10-s-transport', strict: true,
      hint: 'en bus, en voiture, en train…',
      explain: 'Moyen de transport : **by** + transport, sans article. → I go to work **by** bus. (Je vais au travail en bus.)',
      rule: 'by car, by bus, by train, by plane… (mais on foot)',
      mistakes: [{ text: 'with', msg: 'Moyen de transport : **by** (et non with) → by bus, by car, by train.' }, { text: 'in', msg: 'On ne dit pas « in bus ». Moyen de transport : **by** bus.' }, { text: 'on', msg: '« on » demanderait l\'article : on **the** bus. Sans article : **by** bus.' }],
      say: 'I go to work by bus.' },
    { id: 'en10-x-12', prompt: 'Traduis : Je vais au marché à pied.', answers: ['I go to the market on foot', 'I\'m going to the market on foot', 'I walk to the market'], topic: 'Prépositions de mouvement', sec: 'en10-s-transport',
      hint: 'à pied = ? (attention, pas by)',
      explain: 'À pied = **on foot**. → I go to the market **on foot**. (On peut aussi dire : I walk to the market.)',
      rule: 'à pied = on foot',
      mistakes: [{ text: 'I go to the market by foot', msg: 'À pied = **on foot** (on dit by car, by bus, mais **on** foot).' }, { text: 'I go at the market on foot', msg: 'Aller à un endroit = go **to** : I go **to** the market.' }],
      say: 'I go to the market on foot.' },
    { id: 'en10-x-13', prompt: 'Traduis : Le train va de Paris à Lyon.', answers: ['The train goes from Paris to Lyon'], topic: 'Prépositions de mouvement', sec: 'en10-s-transport',
      hint: 'de … à = from … to',
      explain: '**from** = de (départ), **to** = à (destination). → The train goes **from** Paris **to** Lyon.',
      rule: 'de … à (un trajet) = from … to',
      mistakes: [{ text: 'The train goes of Paris to Lyon', msg: '« de » (point de départ) = **from** : from Paris to Lyon.' }, { text: 'The train goes from Paris at Lyon', msg: '« à » (destination) = **to** : from Paris **to** Lyon.' }],
      say: 'The train goes from Paris to Lyon.' },
    { id: 'en10-x-14', prompt: 'Complète : Get ___ the taxi! (Monte dans le taxi !)', answers: ['into', 'in'], topic: 'Prépositions de mouvement', sec: 'en10-s-transport', strict: true,
      hint: 'dans, avec un mouvement vers l\'intérieur.',
      explain: '**into** = dans (en entrant). → Get **into** the taxi! (Monte dans le taxi !) On dit aussi Get in the taxi!',
      rule: 'into = dans (mouvement vers l\'intérieur)',
      mistakes: [{ text: 'at', msg: '« at » indique un endroit où l\'on est. Pour entrer dans un véhicule : get **into** (ou get in).' }, { text: 'on', msg: 'get on = monter dans un bus, un train ou un avion. Pour une voiture ou un taxi : get **into**.' }],
      say: 'Get into the taxi!' },
    { id: 'en10-x-15', prompt: 'Traduis : Tournez à gauche.', answers: ['Turn left', 'Turn to the left'], topic: 'Demander son chemin', sec: 'en10-s-chemin',
      hint: 'tourner = turn ; gauche = ?',
      explain: '**Turn left.** (Tournez à gauche.) Pour une direction, pas besoin de préposition.',
      rule: 'Turn left / Turn right = tournez à gauche / à droite',
      mistakes: [{ text: 'Turn at left', msg: 'Pas de « at » : **Turn left** (tournez à gauche).' }, { text: 'Turn right', msg: 'right = droite. Gauche = **left**.' }, { text: 'Turn on the left', msg: 'Pour donner une direction, on dit simplement **Turn left**. (on the left sert à situer un lieu : It\'s on the left.)' }],
      say: 'Turn left.' },
    { id: 'en10-x-16', prompt: 'Traduis : Allez tout droit.', answers: ['Go straight on', 'Go straight ahead', 'Go straight'], topic: 'Demander son chemin', sec: 'en10-s-chemin',
      hint: 'tout droit = straight …',
      explain: '**Go straight on.** (Allez tout droit.)',
      rule: 'tout droit = straight on',
      mistakes: [{ text: 'Go all right', msg: 'Piège : « all right » veut dire « d\'accord ». Tout droit = **straight on**.' }, { text: 'Go right', msg: 'right = à droite. Tout droit = **straight on**.' }],
      say: 'Go straight on.' },
    { id: 'en10-x-17', prompt: 'Complète : Take the first street ___ the right.', answers: ['on'], topic: 'Demander son chemin', sec: 'en10-s-chemin', strict: true,
      hint: 'à droite (position) = ___ the right',
      explain: 'À droite = **on the right**. → Take the first street **on** the right. (Prenez la première rue à droite.)',
      rule: 'on the left / on the right = à gauche / à droite',
      mistakes: [{ text: 'at', msg: 'À droite, à gauche (position) : **on** the right, **on** the left.' }, { text: 'in', msg: 'On ne dit pas « in the right » : **on** the right.' }],
      say: 'Take the first street on the right.' },
    { id: 'en10-x-18', prompt: 'Complète : The bank is ___ the post office. (à côté de)', answers: ['next to', 'beside'], topic: 'Demander son chemin', sec: 'en10-s-chemin',
      hint: 'Deux petits mots, sans « of ».',
      explain: 'À côté de = **next to**. → The bank is **next to** the post office. (La banque est à côté de la poste.)',
      rule: 'next to = à côté de (sans of)',
      mistakes: [{ text: 'next of', msg: 'Pas de « of » : à côté de = **next to**.' }, { text: 'near of', msg: 'Pas de « of » après near. Et « à côté de » se dit **next to**.' }],
      say: 'The bank is next to the post office.' },
    { id: 'en10-x-19', prompt: 'Complète : The hotel is ___ the station. (en face de)', answers: ['opposite', 'across from'], topic: 'Demander son chemin', sec: 'en10-s-chemin',
      hint: 'Attention, ce n\'est pas « devant ».',
      explain: 'En face de = **opposite**. → The hotel is **opposite** the station. (L\'hôtel est en face de la gare.)',
      rule: 'opposite = en face de · in front of = devant',
      mistakes: [{ text: 'in front of', msg: 'Piège : in front of = **devant**. En face de = **opposite**.' }, { text: 'opposite of', msg: 'Pas de « of » : opposite **the** station.' }, { text: 'face to', msg: '« face to » ne se dit pas : en face de = **opposite**.' }],
      say: 'The hotel is opposite the station.' },
    { id: 'en10-x-20', prompt: 'Traduis : Où est la gare ?', answers: ['Where is the station', 'Where is the train station', 'Where is the railway station'], topic: 'Demander son chemin', sec: 'en10-s-chemin',
      hint: 'la gare = the station',
      explain: '**Where is the station?** (Où est la gare ?) À l\'oral : Where\'s the station?',
      rule: 'Où est… ? = Where is… ?',
      mistakes: [{ text: 'Where the station is', msg: 'Dans une question, **is** se place avant le sujet : Where **is** the station?' }, { text: 'Where is station', msg: 'Il faut l\'article : Where is **the** station?' }],
      say: 'Where is the station?' },
    { id: 'en10-x-21', prompt: 'Traduis : Comment aller à l\'aéroport ?', answers: ['How do I get to the airport', 'How do I go to the airport', 'How do you get to the airport', 'How can I get to the airport', 'How can I go to the airport'], topic: 'Demander son chemin', sec: 'en10-s-chemin',
      hint: 'How do I get … ?',
      explain: '**How do I get to** the airport? (Comment aller à l\'aéroport ?) get to = arriver à, aller à.',
      rule: 'Comment aller à… ? = How do I get to… ?',
      mistakes: [{ text: 'How I get to the airport', msg: 'Il faut l\'auxiliaire **do** dans la question : How **do** I get to…?' }, { text: 'How do I get at the airport', msg: 'Aller **à** un endroit = **to** : How do I get **to** the airport?' }],
      say: 'How do I get to the airport?' },
    { id: 'en10-x-22', prompt: 'Traduis : À quelle heure part le train ?', answers: ['What time does the train leave', 'When does the train leave', 'At what time does the train leave', 'What time does the train go', 'What time does the train depart'], topic: 'À la gare', sec: 'en10-s-hotel-gare',
      hint: 'À quelle heure = What time ; partir = leave.',
      explain: '**What time does the train leave?** (À quelle heure part le train ?) Pour un horaire : présent simple avec does.',
      rule: 'What time does + sujet + base verbale ?',
      mistakes: [{ text: 'What time the train leaves', msg: 'Dans une question, il faut **does** : What time **does** the train leave?' }, { text: 'What time does the train leaves', msg: 'Après does, pas de -s : does the train **leave**.' }, { text: 'What hour does the train leave', msg: '« À quelle heure » = **What time** (et non what hour).' }],
      say: 'What time does the train leave?' },
    { id: 'en10-x-23', prompt: 'Traduis : J\'ai une réservation.', answers: ['I have a reservation', 'I have a booking', 'I\'ve got a reservation', 'I\'ve got a booking'], topic: 'À l\'hôtel', sec: 'en10-s-hotel-gare',
      hint: 'une réservation = a reservation ou a booking',
      explain: '**I have a reservation.** (J\'ai une réservation.) On dit aussi : I have a booking.',
      rule: 'J\'ai = I have',
      mistakes: [{ text: 'I am a reservation', msg: 'J\'**ai** = I **have** (avoir), pas I am (être).' }, { text: 'I have a reserve', msg: '« une réservation » = **a reservation** ou **a booking**.' }],
      say: 'I have a reservation.' },
    { id: 'en10-x-24', prompt: 'Traduis : Un aller simple pour Oxford, s\'il vous plaît.', answers: ['A single ticket to Oxford, please', 'A single to Oxford, please', 'A one-way ticket to Oxford, please', 'One single ticket to Oxford, please', 'One single to Oxford, please'], topic: 'À la gare', sec: 'en10-s-hotel-gare',
      hint: 'un aller simple = a … ticket',
      explain: '**A single ticket to Oxford, please.** single = aller simple ; to = pour, vers.',
      rule: 'single = aller simple · return = aller-retour',
      mistakes: [{ text: 'A simple ticket to Oxford, please', msg: 'Piège : un aller simple = a **single** ticket (simple veut dire « facile »).' }, { text: 'A return ticket to Oxford, please', msg: 'a return ticket = un aller-**retour**. Un aller simple = a **single** ticket.' }],
      say: 'A single ticket to Oxford, please.' },
    { id: 'en10-x-25', prompt: 'Complète : My ___ is in the car. (mes bagages)', answers: ['luggage', 'baggage'], topic: 'Le vocabulaire du voyage', sec: 'en10-s-vocab', strict: true,
      hint: 'Toujours au singulier !',
      explain: '**luggage** est toujours au singulier. → My **luggage** is in the car. (Mes bagages sont dans la voiture.)',
      rule: 'luggage (les bagages) : jamais de -s, verbe au singulier',
      mistakes: [{ text: 'luggages', msg: 'luggage ne prend **jamais** de -s : my **luggage** is…' }, { text: 'baggages', msg: 'baggage ne prend jamais de -s. Le mot le plus courant : my **luggage**.' }],
      say: 'My luggage is in the car.' },
    { id: 'en10-x-26', prompt: 'Remets dans l\'ordre : going / are / to / you / what / do / ?', answers: ['What are you going to do'], topic: 'Le futur avec be going to', sec: 'en10-s-going',
      hint: 'Mot interrogatif + are + sujet + going to + verbe.',
      explain: '**What are you going to do?** (Qu\'est-ce que tu vas faire ?)',
      rule: 'Question : What + am/is/are + sujet + going to + base ?',
      mistakes: [{ text: 'What you are going to do', msg: 'Dans une question, **are** passe devant le sujet : What **are you** going to do?' }, { text: 'Are you going to do what', msg: 'Le mot interrogatif **What** se place au début de la question.' }],
      say: 'What are you going to do?' },
    { id: 'en10-x-27', prompt: 'Complète avec won\'t : I ___ (not / forget) your birthday.', answers: ['won\'t forget', 'will not forget'], topic: 'Le futur avec will', sec: 'en10-s-will',
      hint: 'won\'t + base verbale.',
      explain: 'Promesse au négatif : **won\'t** + base. → I **won\'t forget** your birthday. (Je n\'oublierai pas ton anniversaire.)',
      rule: 'won\'t (will not) + base verbale',
      mistakes: [{ text: 'won\'t to forget', msg: 'Pas de **to** après won\'t : won\'t **forget**.' }, { text: 'don\'t forget', msg: 'don\'t = présent. Pour une promesse au futur : **won\'t** forget.' }, { text: 'won\'t forgot', msg: 'Après won\'t, la base du verbe : **forget** (pas le prétérit forgot).' }],
      say: 'I won\'t forget your birthday.' },
    { id: 'en10-x-28', prompt: 'Traduis : Je vais à Londres demain.', answers: ['I\'m going to London tomorrow', 'I\'m going to go to London tomorrow', 'I will go to London tomorrow'], topic: 'Prépositions de mouvement', sec: 'en10-s-transport',
      hint: 'Aller vers une ville : to.',
      explain: 'Destination → **to**. → I\'m going **to** London tomorrow. (Je vais à Londres demain.)',
      rule: 'aller à + ville = go to + ville · être à + ville = be in + ville',
      mistakes: [{ text: 'I\'m going in London tomorrow', msg: 'Pour aller vers une ville : **to** London. (in London = à Londres, quand on y est déjà.)' }, { text: 'I\'m going at London tomorrow', msg: 'Pour la destination : **to** London.' }],
      say: 'I\'m going to London tomorrow.' }
  ]
});
