/* Anglais — chapitre 19 : Services et petits problèmes (banque, poste, garage, réclamations, le passif, too / enough, need to) */
APP.registerChapter({
  id: 'en19', subject: 'anglais', num: 19, tier: 2,
  title: 'Services et petits problèmes', subtitle: 'banque, poste, garage · se plaindre poliment · le passif · too / enough · need to',
  vocabSec: 'en19-s-vocab',
  sections: [
    {
      id: 'en19-s-passif', title: 'Le passif : « It is made in… », « It was built in… »',
      html: `
<p>Compare ces deux phrases : « Des gens fabriquent ces chaussures en Italie » et « Ces chaussures <b>sont fabriquées</b> en Italie ». La deuxième est au <b>passif</b> : le sujet (les chaussures) ne fait pas l'action, il la <b>subit</b>.</p>
<p>L'anglais utilise beaucoup le passif quand on ne sait pas <b>qui</b> fait l'action, ou quand ce n'est pas important. Tu le verras partout : dans les magasins, sur les panneaux, à la banque, à la poste.</p>
<h3>La construction : to be + participe passé</h3>
<p>Le participe passé, tu le connais : c'est la <b>3e colonne</b> des verbes irréguliers (chapitre 9 : <span class="say">make, made, made</span> · <span class="say">build, built, built</span>), ou la forme en <b>-ed</b> des verbes réguliers (<span class="say">close</span> → <span class="say">closed</span>). C'est le même que pour le present perfect.</p>
<table><tr><th>Temps</th><th>Anglais</th><th>Français</th></tr>
<tr><td>Présent<br>(is / are)</td><td><span class="say">It is made in China.</span><br><span class="say">The shop is closed on Mondays.</span><br><span class="say">English is spoken here.</span></td><td>C'est fabriqué en Chine.<br>Le magasin est fermé le lundi.<br>Ici, on parle anglais.</td></tr>
<tr><td>Prétérit<br>(was / were)</td><td><span class="say">This church was built in 1850.</span><br><span class="say">My wallet was stolen.</span><br><span class="say">The letters were sent yesterday.</span></td><td>Cette église a été construite en 1850.<br>On m'a volé mon portefeuille.<br>Les lettres ont été envoyées hier.</td></tr>
<tr><td>Futur<br>(will be)</td><td><span class="say">It will be delivered tomorrow.</span></td><td>Il sera livré demain.</td></tr></table>
<p>Négation et question : comme avec to be. <span class="say">Breakfast isn't included.</span> — Le petit déjeuner n'est pas compris. <span class="say">Is breakfast included?</span> — Le petit déjeuner est-il compris ? <span class="say">When was it built?</span> — Quand a-t-il été construit ?</p>
<h3>Le « on » français</h3>
<p>Quand le français dit « on » (sans dire qui), l'anglais utilise souvent le passif : <span class="say">My car was stolen.</span> — On m'a volé ma voiture. <span class="say">I was told to wait.</span> — On m'a dit d'attendre.</p>
<h3>Dire qui fait l'action : by</h3>
<p><span class="say">This book was written by Agatha Christie.</span> — Ce livre a été écrit par Agatha Christie.</p>
<div class="callout tip"><b>Tu le connais déjà !</b> <span class="say">I was born in Lyon.</span> (Je suis né à Lyon) est un passif : was + participe passé. Et pour un produit : <span class="say">made in</span> + pays (<span class="say">made in Japan</span>), <span class="say">made of</span> + matière (<span class="say">made of wood</span>, en bois).</div>
<div class="callout key"><b>À retenir</b> Passif = <b>to be + participe passé</b>. Le temps se voit sur be : <span class="say">is made</span> (présent), <span class="say">was made</span> (passé), <span class="say">will be made</span> (futur). Pour dire qui fait l'action : <b>by</b>.</div>
<div class="callout warn"><b>Pièges</b>
<ul>
<li>N'oublie pas <b>be</b> : <span class="say">It is made in China.</span> (pas « It made in China »).</li>
<li>Après be, le <b>participe passé</b>, pas le prétérit : <span class="say">It was written</span> (pas « was wrote »), <span class="say">It was stolen</span> (pas « was stole »).</li>
<li>« On m'a volé mon sac » : c'est le sac qui a été volé → <span class="say">My bag was stolen.</span> (pas « I was stolen my bag »).</li>
</ul></div>`
    },
    {
      id: 'en19-s-too-enough', title: 'Trop, assez : too et enough',
      html: `
<p>Deux petits mots très utiles pour se plaindre… ou pour refuser poliment : <span class="say">too</span> (trop) et <span class="say">enough</span> (assez). Le piège, c'est leur <b>place</b> dans la phrase.</p>
<h3>too + adjectif : trop</h3>
<p><span class="say">It's too expensive.</span> — C'est trop cher.<br><span class="say">These trousers are too long.</span> — Ce pantalon est trop long.<br><span class="say">It's too late to call him.</span> — Il est trop tard pour l'appeler.</p>
<h3>too much / too many + nom : trop de</h3>
<table><tr><th>Quand ?</th><th>Anglais</th><th>Français</th></tr>
<tr><td>Ce qu'on ne compte pas<br>(money, noise, time…)</td><td><span class="say">There is too much noise.</span></td><td>Il y a trop de bruit.</td></tr>
<tr><td>Ce qu'on compte<br>(people, cars…)</td><td><span class="say">There are too many people.</span></td><td>Il y a trop de monde.</td></tr></table>
<p>C'est la même règle que <span class="say">How much…?</span> / <span class="say">How many…?</span>, que tu connais déjà.</p>
<h3>enough : assez</h3>
<ul>
<li><b>après</b> un adjectif : <span class="say">It isn't big enough.</span> — Ce n'est pas assez grand. <span class="say">Is the room warm enough?</span> — La chambre est-elle assez chaude ?</li>
<li><b>avant</b> un nom : <span class="say">I don't have enough money.</span> — Je n'ai pas assez d'argent. <span class="say">We have enough time.</span> — Nous avons assez de temps.</li>
</ul>
<p>Pour se plaindre poliment : <span class="say">I'm sorry, but this isn't good enough.</span> — Je suis désolé, mais ce n'est pas acceptable.</p>
<div class="callout key"><b>À retenir</b> <b>too</b> + adjectif (too big) · <b>too much</b> / <b>too many</b> + nom · adjectif + <b>enough</b> (big enough) · <b>enough</b> + nom (enough money).</div>
<div class="callout warn"><b>Pièges</b>
<ul>
<li><span class="say">very</span> ≠ <span class="say">too</span> : <span class="say">It's very expensive</span> = c'est très cher (mais je peux l'acheter) ; <span class="say">It's too expensive</span> = c'est trop cher (je ne l'achète pas).</li>
<li>Pas « enough big » : l'adjectif d'abord → <span class="say">big enough</span>.</li>
<li>Pas « too much expensive » : devant un adjectif, <span class="say">too</span> tout seul.</li>
<li>À la fin d'une phrase, <span class="say">too</span> veut dire « aussi » : <span class="say">Me too!</span> — Moi aussi !</li>
</ul></div>
<div class="callout tip"><b>Prononciation</b> <span class="say">enough</span> se prononce « i-neuf » : ici, le <i>gh</i> se dit comme un f.</div>`
    },
    {
      id: 'en19-s-need', title: 'Avoir besoin : need, need to, don\'t need to',
      html: `
<p><span class="say">need</span> veut dire <b>avoir besoin de</b>. C'est un verbe normal : -s avec he / she / it, do / does pour les questions et les négations, -ed au passé (<span class="say">needed</span>).</p>
<h3>need + nom : avoir besoin de quelque chose</h3>
<p><span class="say">I need a new tyre.</span> — J'ai besoin d'un pneu neuf.<br><span class="say">She needs help.</span> — Elle a besoin d'aide.<br><span class="say">We need a plumber.</span> — Il nous faut un plombier.</p>
<h3>need to + verbe : devoir, avoir besoin de faire</h3>
<p><span class="say">I need to send a parcel.</span> — Je dois envoyer un colis.<br><span class="say">You need to fill in this form.</span> — Vous devez remplir ce formulaire.<br><span class="say">I needed to call a mechanic.</span> — J'ai dû appeler un mécanicien.</p>
<h3>Question et négation</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">Do I need to sign here?</span><br><span class="say">Yes, you do.</span> / <span class="say">No, you don't.</span></td><td>Est-ce que je dois signer ici ?<br>Oui. / Non.</td></tr>
<tr><td><span class="say">You don't need to pay.</span></td><td>Vous n'avez pas besoin de payer. (ce n'est pas nécessaire)</td></tr>
<tr><td><span class="say">He doesn't need to come.</span></td><td>Il n'a pas besoin de venir.</td></tr></table>
<div class="callout key"><b>À retenir</b> <b>need</b> + nom · <b>need to</b> + verbe · <b>don't need to</b> = pas besoin de, pas obligé.</div>
<div class="callout warn"><b>Pièges</b>
<ul>
<li>« J'ai besoin de… » = <span class="say">I need…</span> (pas « I have need »).</li>
<li>N'oublie pas le <b>-s</b> : <span class="say">My car needs new brakes.</span></li>
<li>N'oublie pas <b>to</b> devant le verbe : <span class="say">I need to go.</span> (pas « I need go »).</li>
<li><span class="say">You don't need to…</span> (pas besoin) ≠ <span class="say">You mustn't…</span> (c'est interdit, chapitre 11).</li>
</ul></div>`
    },
    {
      id: 'en19-s-banque-poste', title: 'À la banque et à la poste',
      html: `
<p>À la banque et à la poste, on utilise toujours les mêmes phrases polies, avec <span class="say">I'd like to…</span> (je voudrais) et <span class="say">Could you…?</span> (pourriez-vous… ?).</p>
<h3>À la banque</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">I'd like to open an account.</span></td><td>Je voudrais ouvrir un compte.</td></tr>
<tr><td><span class="say">I'd like to withdraw two hundred pounds.</span></td><td>Je voudrais retirer deux cents livres.</td></tr>
<tr><td><span class="say">I'd like to change some euros into pounds.</span></td><td>Je voudrais changer des euros en livres.</td></tr>
<tr><td><span class="say">I'd like to make a transfer.</span></td><td>Je voudrais faire un virement.</td></tr>
<tr><td><span class="say">The cash machine has kept my card.</span></td><td>Le distributeur a gardé ma carte.</td></tr>
<tr><td><span class="say">I've forgotten my PIN.</span></td><td>J'ai oublié mon code secret.</td></tr></table>
<p>L'employé peut te dire : <span class="say">Can I see some ID, please?</span> (Puis-je voir une pièce d'identité ?) · <span class="say">Could you fill in this form?</span> (Pourriez-vous remplir ce formulaire ?) · <span class="say">Sign here, please.</span> (Signez ici, s'il vous plaît.)</p>
<h3>À la poste</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">I'd like to send this parcel to France.</span></td><td>Je voudrais envoyer ce colis en France.</td></tr>
<tr><td><span class="say">Six stamps for France, please.</span></td><td>Six timbres pour la France, s'il vous plaît.</td></tr>
<tr><td><span class="say">How much does it cost to send this postcard?</span></td><td>Combien coûte l'envoi de cette carte postale ?</td></tr>
<tr><td><span class="say">How long will it take?</span></td><td>Combien de temps ça va prendre ?</td></tr></table>
<p>L'employé : <span class="say">It weighs two kilos.</span> (Il pèse deux kilos.) · <span class="say">First class or second class?</span> (Tarif rapide ou normal ?) · <span class="say">It will be delivered on Monday.</span> (Il sera livré lundi.)</p>
<div class="callout key"><b>À retenir</b> <span class="say">I'd like to</span> + verbe = je voudrais (poli). <span class="say">fill in a form</span> = remplir un formulaire.</div>
<div class="callout warn"><b>Faux ami</b> « Retirer de l'argent » = <span class="say">withdraw</span> (ou <span class="say">take out</span>) money. Le verbe <span class="say">retire</span> veut dire « prendre sa retraite » !</div>
<div class="callout tip"><b>Au Royaume-Uni</b> Une lettre envoyée en <span class="say">first class</span> arrive en général le lendemain ; <span class="say">second class</span> est moins cher mais plus lent. Et on fait la queue sagement : <span class="say">Is this the queue?</span> (C'est bien la file d'attente ?)</div>`
    },
    {
      id: 'en19-s-garage', title: 'Au garage et chez le réparateur : décrire une panne',
      html: `
<p>Une panne de voiture, une fuite d'eau, le chauffage qui ne marche plus… Pour expliquer le problème, quelques phrases suffisent.</p>
<h3>« Ça ne marche pas »</h3>
<p><span class="say">It doesn't work.</span> ou <span class="say">It isn't working.</span> — Ça ne marche pas. (Le verbe <span class="say">work</span> veut aussi dire « fonctionner ».)<br><span class="say">It's broken.</span> — C'est cassé. · <span class="say">The lift is out of order.</span> — L'ascenseur est en panne.</p>
<h3>Au garage</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">My car has broken down.</span></td><td>Ma voiture est tombée en panne.</td></tr>
<tr><td><span class="say">It won't start.</span></td><td>Elle ne veut pas démarrer.</td></tr>
<tr><td><span class="say">The engine makes a strange noise.</span></td><td>Le moteur fait un bruit bizarre.</td></tr>
<tr><td><span class="say">I've got a flat tyre.</span></td><td>J'ai un pneu crevé.</td></tr>
<tr><td><span class="say">Can you change the wheel?</span></td><td>Pouvez-vous changer la roue ?</td></tr>
<tr><td><span class="say">The brakes don't work very well.</span></td><td>Les freins ne marchent pas très bien.</td></tr>
<tr><td><span class="say">The battery is flat.</span></td><td>La batterie est à plat.</td></tr></table>
<p>Le mécanicien : <span class="say">What seems to be the problem?</span> (Quel est le problème ?) · <span class="say">You need new brakes.</span> (Il vous faut des freins neufs.)<br>
Toi : <span class="say">Can you fix it today?</span> (Pouvez-vous la réparer aujourd'hui ?) · <span class="say">How long will it take?</span> (Combien de temps ça va prendre ?) · <span class="say">How much will it cost?</span> (Combien ça va coûter ?)<br>
Le mécanicien : <span class="say">It will be ready tomorrow.</span> (Elle sera prête demain.)</p>
<h3>À la maison</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">The heating isn't working.</span></td><td>Le chauffage ne marche pas.</td></tr>
<tr><td><span class="say">There's a leak in the bathroom.</span></td><td>Il y a une fuite dans la salle de bains.</td></tr>
<tr><td><span class="say">The washing machine is broken.</span></td><td>La machine à laver est en panne.</td></tr>
<tr><td><span class="say">The boiler has broken down.</span></td><td>La chaudière est tombée en panne.</td></tr>
<tr><td><span class="say">The tap is leaking.</span></td><td>Le robinet fuit.</td></tr>
<tr><td><span class="say">There's a strange smell in the kitchen.</span></td><td>Il y a une odeur bizarre dans la cuisine.</td></tr>
<tr><td><span class="say">Could you send a plumber, please?</span></td><td>Pourriez-vous envoyer un plombier, s'il vous plaît ?</td></tr></table>
<div class="callout key"><b>À retenir</b> <span class="say">break down</span> = tomber en panne (voiture, machine) : <span class="say">It has broken down.</span> · Dans <span class="say">It won't start</span>, <span class="say">won't</span> veut dire « refuse de ».</div>
<div class="callout warn"><b>Pièges</b>
<ul>
<li>« Ma voiture est en panne » se dit <span class="say">My car has broken down</span> ou <span class="say">My car isn't working</span>, plutôt que « my car is broken ».</li>
<li>Le garagiste (la personne) = <span class="say">the mechanic</span> ; <span class="say">the garage</span>, c'est l'atelier (ou le garage de la maison).</li>
<li>« À plat » : <span class="say">a flat tyre</span> (un pneu), <span class="say">a flat battery</span> (une batterie). Ici, <span class="say">flat</span> ne veut pas dire « appartement » !</li>
</ul></div>`
    },
    {
      id: 'en19-s-reclamation', title: 'Se plaindre poliment, se faire rembourser',
      html: `
<p>Les Britanniques se plaignent… très poliment ! Commence par <span class="say">Excuse me</span> ou <span class="say">I'm sorry, but…</span>, explique le problème calmement, puis demande ce que tu veux.</p>
<h3>1. Expliquer le problème</h3>
<ul>
<li><span class="say">Excuse me, I'd like to make a complaint.</span> — Excusez-moi, je voudrais faire une réclamation.</li>
<li><span class="say">I bought this lamp here last week, and it doesn't work.</span> — J'ai acheté cette lampe ici la semaine dernière, et elle ne marche pas.</li>
<li><span class="say">It's faulty.</span> — Elle est défectueuse. · <span class="say">It was damaged.</span> — Elle était abîmée. · <span class="say">It's the wrong size.</span> — Ce n'est pas la bonne taille.</li>
<li><span class="say">I'd like to complain about the noise.</span> — Je voudrais me plaindre du bruit.</li>
</ul>
<h3>2. Demander une solution</h3>
<ul>
<li><span class="say">Could I have a refund, please?</span> — Pourrais-je être remboursé, s'il vous plaît ?</li>
<li><span class="say">Can I exchange it?</span> — Puis-je l'échanger ?</li>
<li><span class="say">Could you replace it?</span> — Pourriez-vous la remplacer ?</li>
<li><span class="say">Could I speak to the manager, please?</span> — Pourrais-je parler au responsable, s'il vous plaît ?</li>
</ul>
<h3>3. Ce que le vendeur peut répondre</h3>
<ul>
<li><span class="say">Have you got the receipt?</span> — Avez-vous le ticket de caisse ?</li>
<li><span class="say">It's still under guarantee.</span> — Elle est encore sous garantie.</li>
<li><span class="say">I'm afraid we can't give you a refund, but you can exchange it.</span> — Je regrette, nous ne pouvons pas vous rembourser, mais vous pouvez l'échanger.</li>
</ul>
<div class="callout info"><b>I'm afraid…</b> Tu connais <span class="say">I'm afraid</span> = j'ai peur. Mais au début d'une phrase, c'est aussi la façon polie d'annoncer une <b>mauvaise nouvelle</b> : « je regrette, malheureusement ». <span class="say">I'm afraid it's not possible.</span> — Je regrette, ce n'est pas possible.</div>
<div class="callout key"><b>À retenir</b> Pour rester poli : <span class="say">Excuse me…</span> · <span class="say">I'm sorry, but…</span> · <span class="say">Could I…?</span> · <span class="say">I'd like…</span></div>
<div class="callout warn"><b>Faux amis</b>
<ul>
<li>une réclamation = <span class="say">a complaint</span> (pas « reclamation »).</li>
<li>se plaindre <b>de</b> = <span class="say">complain about</span>.</li>
<li>être remboursé = <span class="say">get a refund</span> ; « reimburse » existe mais s'entend peu dans un magasin.</li>
</ul></div>`
    },
    {
      id: 'en19-s-vocab', title: 'Vocabulaire : banque, poste, pannes, réclamations',
      html: `
<p>Clique sur un mot pour l'entendre. Les mots de ces tableaux reviennent dans les exercices et les flashcards.</p>
<h3>À la banque</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">an account</span></td><td>un compte (en banque)</td></tr>
<tr><td><span class="say">to withdraw</span></td><td>retirer (de l'argent)</td></tr>
<tr><td><span class="say">a PIN</span></td><td>un code secret (de carte)</td></tr>
<tr><td><span class="say">a transfer</span></td><td>un virement</td></tr>
<tr><td><span class="say">a form</span> · <span class="say">to fill in</span></td><td>un formulaire · remplir</td></tr>
<tr><td><span class="say">the exchange rate</span></td><td>le taux de change</td></tr>
<tr><td><span class="say">ID</span></td><td>une pièce d'identité</td></tr></table>
<h3>À la poste</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">a parcel</span></td><td>un colis</td></tr>
<tr><td><span class="say">a stamp</span></td><td>un timbre</td></tr>
<tr><td><span class="say">an envelope</span></td><td>une enveloppe</td></tr>
<tr><td><span class="say">a postcard</span></td><td>une carte postale</td></tr>
<tr><td><span class="say">to post</span></td><td>poster, envoyer par la poste</td></tr>
<tr><td><span class="say">to deliver</span></td><td>livrer</td></tr>
<tr><td><span class="say">the postman</span></td><td>le facteur</td></tr>
<tr><td><span class="say">to weigh</span></td><td>peser</td></tr></table>
<h3>La voiture et les pannes</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">to break down</span></td><td>tomber en panne</td></tr>
<tr><td><span class="say">the engine</span></td><td>le moteur</td></tr>
<tr><td><span class="say">a tyre</span> (US : <span class="say">a tire</span>)</td><td>un pneu</td></tr>
<tr><td><span class="say">the brakes</span></td><td>les freins</td></tr>
<tr><td><span class="say">petrol</span> (US : <span class="say">gas</span>)</td><td>l'essence</td></tr>
<tr><td><span class="say">a wheel</span></td><td>une roue</td></tr>
<tr><td><span class="say">to repair</span> · <span class="say">to fix</span></td><td>réparer</td></tr>
<tr><td><span class="say">a smell</span> · <span class="say">strange</span></td><td>une odeur · bizarre</td></tr>
<tr><td><span class="say">broken</span></td><td>cassé</td></tr>
<tr><td><span class="say">out of order</span></td><td>en panne, hors service</td></tr></table>
<h3>Les réparations à la maison</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">a leak</span></td><td>une fuite</td></tr>
<tr><td><span class="say">the heating</span></td><td>le chauffage</td></tr>
<tr><td><span class="say">the washing machine</span></td><td>la machine à laver</td></tr>
<tr><td><span class="say">the boiler</span></td><td>la chaudière</td></tr>
<tr><td><span class="say">a tap</span></td><td>un robinet</td></tr></table>
<p>Pour réparer, tu connais déjà <span class="say">a mechanic</span> (un mécanicien), <span class="say">a plumber</span> (un plombier) et <span class="say">an electrician</span> (un électricien), vus au chapitre 17.</p>
<h3>Réclamations et services</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">to complain</span> · <span class="say">a complaint</span></td><td>se plaindre · une réclamation</td></tr>
<tr><td><span class="say">a refund</span></td><td>un remboursement</td></tr>
<tr><td><span class="say">to exchange</span> · <span class="say">to replace</span></td><td>échanger · remplacer</td></tr>
<tr><td><span class="say">faulty</span> · <span class="say">damaged</span></td><td>défectueux · abîmé</td></tr>
<tr><td><span class="say">a guarantee</span></td><td>une garantie</td></tr>
<tr><td><span class="say">customer service</span></td><td>le service client</td></tr>
<tr><td><span class="say">a queue</span></td><td>une file d'attente</td></tr>
<tr><td><span class="say">opening hours</span></td><td>les horaires d'ouverture</td></tr>
<tr><td><span class="say">a counter</span></td><td>un guichet, un comptoir</td></tr></table>
<h3>Petits mots de grammaire</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">too</span></td><td>trop</td></tr>
<tr><td><span class="say">enough</span></td><td>assez</td></tr>
<tr><td><span class="say">to need</span></td><td>avoir besoin de</td></tr></table>
<div class="callout warn"><b>Prononciation</b> Lettres muettes : <span class="say">sign</span> (signer : le g), <span class="say">weigh</span> (le gh), <span class="say">plumber</span> (le b). <span class="say">queue</span> se dit « kiou ».</div>`
    },
    {
      id: 'en19-s-pieges', title: 'Les pièges des francophones',
      html: `
<ul>
<li><b>Le passif sans be</b> : <span class="say">It is made in Italy</span>, pas « It made in Italy ».</li>
<li><b>Le prétérit au lieu du participe</b> : <span class="say">It was stolen</span>, pas « It was stole ».</li>
<li><b>« On »</b> se traduit souvent par le passif : <span class="say">English is spoken here.</span> — Ici, on parle anglais.</li>
<li><b>very ou too</b> : <span class="say">too expensive</span> = trop cher (on n'achète pas) ; <span class="say">very expensive</span> = très cher.</li>
<li><b>La place de enough</b> : <span class="say">big enough</span>, mais <span class="say">enough money</span>.</li>
<li><b>too much / too many</b> : <span class="say">too much noise</span>, <span class="say">too many people</span>.</li>
<li><b>need to</b> : <span class="say">I need to go</span> (pas « I need go ») ; <span class="say">she needs</span> (avec -s).</li>
<li><b>Retirer de l'argent</b> = <span class="say">withdraw</span>, pas « retire » (prendre sa retraite).</li>
<li><b>Une réclamation</b> = <span class="say">a complaint</span> ; se plaindre de = <span class="say">complain about</span>.</li>
<li><b>Tomber en panne</b> = <span class="say">break down</span> : <span class="say">My car has broken down.</span></li>
<li><b>I'm afraid…</b> au début d'une phrase = je regrette (une mauvaise nouvelle, dite poliment).</li>
</ul>
<div class="callout key"><b>À retenir</b> passif = be + participe passé · too + adjectif, adjectif + enough · need to + verbe · et toujours poli : <span class="say">Could I…?</span> <span class="say">I'm sorry, but…</span></div>`
    }
  ],
  words: [
    // À la banque
    { en: 'account', fr: 'le compte (en banque)', pos: 'n', cat: 'À la banque', sec: 'en19-s-banque-poste', alt: ['bank account'], ex: 'I\'d like to open an account.', exFr: 'Je voudrais ouvrir un compte.', level: 1, note: 'ouvrir un compte = open an account.' },
    { en: 'withdraw', fr: 'retirer (de l\'argent)', pos: 'v', cat: 'À la banque', sec: 'en19-s-banque-poste', alt: ['take out'], ex: 'I\'d like to withdraw fifty pounds.', exFr: 'Je voudrais retirer cinquante livres.', level: 2, note: 'Irrégulier : withdraw, withdrew, withdrawn. Faux ami : retire = prendre sa retraite.' },
    { en: 'PIN', fr: 'le code secret (de la carte)', pos: 'n', cat: 'À la banque', sec: 'en19-s-banque-poste', alt: ['PIN number', 'PIN code'], ex: 'I\'ve forgotten my PIN.', exFr: 'J\'ai oublié mon code secret.', level: 2, note: 'Se prononce « pinn ». On dit aussi PIN number.' },
    { en: 'form', fr: 'le formulaire', pos: 'n', cat: 'À la banque', sec: 'en19-s-banque-poste', ex: 'Please fill in this form.', exFr: 'Veuillez remplir ce formulaire.', level: 1 },
    { en: 'fill in', fr: 'remplir (un formulaire)', pos: 'v', cat: 'À la banque', sec: 'en19-s-banque-poste', alt: ['fill out', 'complete'], ex: 'Could you fill in this form, please?', exFr: 'Pourriez-vous remplir ce formulaire, s\'il vous plaît ?', level: 2, note: 'En américain : fill out. Remplir un verre = fill a glass.' },
    { en: 'exchange rate', fr: 'le taux de change', pos: 'n', cat: 'À la banque', sec: 'en19-s-banque-poste', ex: 'What\'s the exchange rate today?', exFr: 'Quel est le taux de change aujourd\'hui ?', level: 3, note: 'Pour changer des euros en livres : change euros into pounds.' },
    { en: 'ID', fr: 'la pièce d\'identité', pos: 'n', cat: 'À la banque', sec: 'en19-s-banque-poste', alt: ['identity card', 'ID card', 'identification'], ex: 'Have you got any ID?', exFr: 'Avez-vous une pièce d\'identité ?', level: 1, note: 'Se prononce « aï-di ». Un passeport ou une carte d\'identité.' },
    { en: 'transfer', fr: 'le virement', pos: 'n', cat: 'À la banque', sec: 'en19-s-banque-poste', alt: ['bank transfer'], ex: 'I\'d like to make a transfer.', exFr: 'Je voudrais faire un virement.', level: 3, note: 'Aussi un verbe : transfer money (virer de l\'argent).' },
    // À la poste
    { en: 'parcel', fr: 'le colis', pos: 'n', cat: 'À la poste', sec: 'en19-s-banque-poste', alt: ['package'], ex: 'I\'d like to send this parcel to France.', exFr: 'Je voudrais envoyer ce colis en France.', level: 1, note: 'En américain : package.' },
    { en: 'stamp', fr: 'le timbre', pos: 'n', cat: 'À la poste', sec: 'en19-s-banque-poste', ex: 'Two stamps for France, please.', exFr: 'Deux timbres pour la France, s\'il vous plaît.', level: 1 },
    { en: 'envelope', fr: 'l\'enveloppe', pos: 'n', cat: 'À la poste', sec: 'en19-s-banque-poste', ex: 'Put the letter in the envelope.', exFr: 'Mets la lettre dans l\'enveloppe.', level: 2, note: 'Accent sur la 1re syllabe : « ÈNN-veu-lôp ».' },
    { en: 'postcard', fr: 'la carte postale', pos: 'n', cat: 'À la poste', sec: 'en19-s-banque-poste', ex: 'I sent you a postcard from Scotland.', exFr: 'Je t\'ai envoyé une carte postale d\'Écosse.', level: 1 },
    { en: 'post', fr: 'poster, envoyer par la poste', pos: 'v', cat: 'À la poste', sec: 'en19-s-banque-poste', alt: ['mail', 'send'], ex: 'Can you post this letter for me?', exFr: 'Peux-tu poster cette lettre pour moi ?', level: 2, note: 'En américain : mail. Le courrier = the post (UK), the mail (US).' },
    { en: 'deliver', fr: 'livrer', pos: 'v', cat: 'À la poste', sec: 'en19-s-banque-poste', ex: 'The parcel was delivered yesterday.', exFr: 'Le colis a été livré hier.', level: 2, note: 'la livraison = delivery.' },
    { en: 'postman', fr: 'le facteur', pos: 'n', cat: 'À la poste', sec: 'en19-s-banque-poste', alt: ['postwoman', 'mailman', 'mail carrier'], ex: 'The postman comes at ten.', exFr: 'Le facteur passe à dix heures.', level: 2, note: 'Une factrice = a postwoman.' },
    { en: 'weigh', fr: 'peser', pos: 'v', cat: 'À la poste', sec: 'en19-s-banque-poste', ex: 'It weighs two kilos.', exFr: 'Il pèse deux kilos.', level: 3, note: 'Le gh ne se prononce pas : « wéï ». Le poids = weight.' },
    // La voiture et les pannes
    { en: 'break down', fr: 'tomber en panne', pos: 'v', cat: 'La voiture et les pannes', sec: 'en19-s-garage', ex: 'My car broke down on the way home.', exFr: 'Ma voiture est tombée en panne sur le chemin du retour.', level: 1, note: 'Irrégulier : break, broke, broken. La panne = a breakdown.' },
    { en: 'engine', fr: 'le moteur', pos: 'n', cat: 'La voiture et les pannes', sec: 'en19-s-garage', ex: 'The engine makes a strange noise.', exFr: 'Le moteur fait un bruit bizarre.', level: 2, note: 'Se prononce « ÈNN-djinn ».' },
    { en: 'tyre', fr: 'le pneu', pos: 'n', cat: 'La voiture et les pannes', sec: 'en19-s-garage', alt: ['tire'], ex: 'I\'ve got a flat tyre.', exFr: 'J\'ai un pneu crevé.', level: 2, note: 'Orthographe américaine : tire. Un pneu crevé, à plat = a flat tyre.' },
    { en: 'brakes', fr: 'les freins', pos: 'n', cat: 'La voiture et les pannes', sec: 'en19-s-garage', alt: ['brake'], ex: 'The brakes don\'t work very well.', exFr: 'Les freins ne marchent pas très bien.', level: 2, note: 'Un frein = a brake. Freiner = to brake.' },
    { en: 'petrol', fr: 'l\'essence', pos: 'n', cat: 'La voiture et les pannes', sec: 'en19-s-garage', alt: ['gas', 'gasoline'], ex: 'We need to get some petrol.', exFr: 'Nous devons prendre de l\'essence.', level: 2, note: 'En américain : gas. Le gazole = diesel. Une station-service = a petrol station.' },
    { en: 'wheel', fr: 'la roue', pos: 'n', cat: 'La voiture et les pannes', sec: 'en19-s-garage', ex: 'Can you change the wheel, please?', exFr: 'Pouvez-vous changer la roue, s\'il vous plaît ?', level: 2, note: 'Le volant = the steering wheel. La roue de secours = the spare wheel.' },
    { en: 'repair', fr: 'réparer', pos: 'v', cat: 'La voiture et les pannes', sec: 'en19-s-garage', alt: ['fix'], ex: 'Can you repair it today?', exFr: 'Pouvez-vous la réparer aujourd\'hui ?', level: 1, note: 'fix veut dire la même chose, en plus courant. Une réparation = a repair.' },
    { en: 'smell', fr: 'l\'odeur', pos: 'n', cat: 'La voiture et les pannes', sec: 'en19-s-garage', ex: 'There\'s a strange smell in the car.', exFr: 'Il y a une odeur bizarre dans la voiture.', level: 2, note: 'Aussi un verbe : It smells of petrol. (Ça sent l\'essence.)' },
    { en: 'strange', fr: 'bizarre, étrange', pos: 'adj', cat: 'La voiture et les pannes', sec: 'en19-s-garage', alt: ['weird', 'odd'], ex: 'That\'s strange!', exFr: 'C\'est bizarre !', level: 2, note: 'Attention : a stranger = un inconnu (un étranger = a foreigner).' },
    { en: 'broken', fr: 'cassé', pos: 'adj', cat: 'La voiture et les pannes', sec: 'en19-s-garage', ex: 'My glasses are broken.', exFr: 'Mes lunettes sont cassées.', level: 1, note: 'C\'est le participe passé de break (casser). Pour une voiture, on dit plutôt : It has broken down.' },
    { en: 'out of order', fr: 'en panne, hors service', pos: 'x', cat: 'La voiture et les pannes', sec: 'en19-s-garage', ex: 'The lift is out of order.', exFr: 'L\'ascenseur est en panne.', level: 2, note: 'Pour une machine publique : un ascenseur (a lift), un distributeur… Sur un panneau : OUT OF ORDER.' },
    // Les réparations à la maison
    { en: 'leak', fr: 'la fuite (d\'eau, de gaz)', pos: 'n', cat: 'Les réparations à la maison', sec: 'en19-s-garage', ex: 'There\'s a leak in the bathroom.', exFr: 'Il y a une fuite dans la salle de bains.', level: 2 },
    { en: 'heating', fr: 'le chauffage', pos: 'n', cat: 'Les réparations à la maison', sec: 'en19-s-garage', ex: 'The heating isn\'t working.', exFr: 'Le chauffage ne marche pas.', level: 1, note: 'Le chauffage central = central heating.' },
    { en: 'washing machine', fr: 'la machine à laver', pos: 'n', cat: 'Les réparations à la maison', sec: 'en19-s-garage', ex: 'The washing machine is broken.', exFr: 'La machine à laver est en panne.', level: 1 },
    { en: 'boiler', fr: 'la chaudière', pos: 'n', cat: 'Les réparations à la maison', sec: 'en19-s-garage', ex: 'The boiler has broken down.', exFr: 'La chaudière est tombée en panne.', level: 3, note: 'Très courant au Royaume-Uni : la chaudière donne le chauffage et l\'eau chaude.' },
    { en: 'tap', fr: 'le robinet', pos: 'n', cat: 'Les réparations à la maison', sec: 'en19-s-garage', alt: ['faucet'], ex: 'The tap in the kitchen is leaking.', exFr: 'Le robinet de la cuisine fuit.', level: 2, note: 'En américain : faucet. L\'eau du robinet = tap water.' },
    // Réclamations
    { en: 'complain', fr: 'se plaindre', pos: 'v', cat: 'Réclamations', sec: 'en19-s-reclamation', ex: 'I want to complain about the noise.', exFr: 'Je veux me plaindre du bruit.', level: 1, note: 'se plaindre DE = complain ABOUT.' },
    { en: 'complaint', fr: 'la réclamation, la plainte', pos: 'n', cat: 'Réclamations', sec: 'en19-s-reclamation', ex: 'I\'d like to make a complaint.', exFr: 'Je voudrais faire une réclamation.', level: 2, note: 'faire une réclamation = make a complaint. Faux ami : pas « reclamation ».' },
    { en: 'refund', fr: 'le remboursement', pos: 'n', cat: 'Réclamations', sec: 'en19-s-reclamation', ex: 'Can I have a refund, please?', exFr: 'Puis-je être remboursé, s\'il vous plaît ?', level: 1, note: 'Aussi un verbe : They refunded my money. (Ils m\'ont remboursé.)' },
    { en: 'exchange', fr: 'échanger', pos: 'v', cat: 'Réclamations', sec: 'en19-s-reclamation', ex: 'Can I exchange this shirt?', exFr: 'Puis-je échanger cette chemise ?', level: 1, note: 'exchange it for another one = l\'échanger contre un autre.' },
    { en: 'replace', fr: 'remplacer', pos: 'v', cat: 'Réclamations', sec: 'en19-s-reclamation', ex: 'They replaced my old phone.', exFr: 'Ils ont remplacé mon vieux téléphone.', level: 2 },
    { en: 'faulty', fr: 'défectueux', pos: 'adj', cat: 'Réclamations', sec: 'en19-s-reclamation', ex: 'This charger is faulty.', exFr: 'Ce chargeur est défectueux.', level: 2 },
    { en: 'damaged', fr: 'abîmé, endommagé', pos: 'adj', cat: 'Réclamations', sec: 'en19-s-reclamation', ex: 'The parcel arrived damaged.', exFr: 'Le colis est arrivé abîmé.', level: 2 },
    { en: 'guarantee', fr: 'la garantie', pos: 'n', cat: 'Réclamations', sec: 'en19-s-reclamation', alt: ['warranty'], ex: 'It\'s still under guarantee.', exFr: 'C\'est encore sous garantie.', level: 2, note: 'Se prononce « ga-reunn-TI ». On dit aussi warranty.' },
    { en: 'customer service', fr: 'le service client', pos: 'n', cat: 'Réclamations', sec: 'en19-s-reclamation', alt: ['customer services'], ex: 'Please call customer service.', exFr: 'Veuillez appeler le service client.', level: 2, note: 'Un client (dans un magasin) = a customer.' },
    // Les services
    { en: 'queue', fr: 'la file d\'attente', pos: 'n', cat: 'Les services', alt: ['line'], ex: 'There is a long queue at the post office.', exFr: 'Il y a une longue file d\'attente à la poste.', level: 2, note: 'Se prononce « kiou ». Faire la queue = queue (UK), stand in line (US).' },
    { en: 'opening hours', fr: 'les horaires d\'ouverture', pos: 'n', cat: 'Les services', alt: ['opening times'], ex: 'What are your opening hours?', exFr: 'Quels sont vos horaires d\'ouverture ?', level: 2 },
    { en: 'counter', fr: 'le guichet, le comptoir', pos: 'n', cat: 'Les services', alt: ['desk'], ex: 'Please go to counter number three.', exFr: 'Allez au guichet numéro trois, s\'il vous plaît.', level: 2 },
    // Trop, assez, besoin
    { en: 'too', fr: 'trop', pos: 'adv', cat: 'Trop, assez, besoin', sec: 'en19-s-too-enough', ex: 'It\'s too expensive.', exFr: 'C\'est trop cher.', level: 1, note: 'too se place AVANT l\'adjectif. À la fin d\'une phrase, too veut dire « aussi » : Me too!' },
    { en: 'enough', fr: 'assez', pos: 'adv', cat: 'Trop, assez, besoin', sec: 'en19-s-too-enough', ex: 'Is it big enough?', exFr: 'Est-ce que c\'est assez grand ?', level: 1, note: 'APRÈS un adjectif (big enough), AVANT un nom (enough money). Se prononce « i-neuf ».' },
    { en: 'need', fr: 'avoir besoin de', pos: 'v', cat: 'Trop, assez, besoin', sec: 'en19-s-need', ex: 'I need a new tyre.', exFr: 'J\'ai besoin d\'un pneu neuf.', level: 1, note: 'need to + verbe = devoir, avoir besoin de : I need to go. Avec he/she : needs.' }
  ],
  phrases: [
    { en: 'Is breakfast included?', fr: 'Le petit déjeuner est-il compris ?', alt: ['Is breakfast included in the price?'], cat: 'Le passif', sec: 'en19-s-passif' },
    { en: 'It\'s made in Italy.', fr: 'C\'est fabriqué en Italie.', alt: ['It was made in Italy.'], cat: 'Le passif', sec: 'en19-s-passif' },
    { en: 'My bag was stolen.', fr: 'On m\'a volé mon sac.', alt: ['My bag has been stolen.', 'Someone stole my bag.', 'Somebody stole my bag.'], cat: 'Le passif', sec: 'en19-s-passif', note: 'Le « on » français devient souvent un passif.' },
    { en: 'When was it built?', fr: 'Quand a-t-il été construit ?', alt: ['When was this built?'], cat: 'Le passif', sec: 'en19-s-passif' },
    { en: 'English is spoken here.', fr: 'Ici, on parle anglais.', alt: ['We speak English here.', 'They speak English here.'], cat: 'Le passif', sec: 'en19-s-passif' },
    { en: 'It\'s too expensive.', fr: 'C\'est trop cher.', alt: ['That\'s too expensive.', 'This is too expensive.'], cat: 'Trop, assez', sec: 'en19-s-too-enough' },
    { en: 'It isn\'t big enough.', fr: 'Ce n\'est pas assez grand.', alt: ['It\'s not big enough.', 'This isn\'t big enough.'], cat: 'Trop, assez', sec: 'en19-s-too-enough', note: 'enough se place après l\'adjectif.' },
    { en: 'I don\'t have enough money.', fr: 'Je n\'ai pas assez d\'argent.', alt: ['I haven\'t got enough money.'], cat: 'Trop, assez', sec: 'en19-s-too-enough', note: 'enough se place avant le nom.' },
    { en: 'There are too many people.', fr: 'Il y a trop de monde.', alt: ['There are too many people here.'], cat: 'Trop, assez', sec: 'en19-s-too-enough' },
    { en: 'I need to send a parcel.', fr: 'Je dois envoyer un colis.', alt: ['I have to send a parcel.', 'I need to send a package.', 'I need to post a parcel.', 'I must send a parcel.'], cat: 'Avoir besoin', sec: 'en19-s-need' },
    { en: 'You don\'t need to pay.', fr: 'Vous n\'avez pas besoin de payer.', alt: ['You don\'t have to pay.', 'You needn\'t pay.'], cat: 'Avoir besoin', sec: 'en19-s-need' },
    { en: 'I\'d like to open an account.', fr: 'Je voudrais ouvrir un compte.', alt: ['I\'d like to open a bank account.'], cat: 'À la banque', sec: 'en19-s-banque-poste' },
    { en: 'I\'ve forgotten my PIN.', fr: 'J\'ai oublié mon code secret.', alt: ['I forgot my PIN.', 'I\'ve forgotten my PIN number.', 'I forgot my PIN number.'], cat: 'À la banque', sec: 'en19-s-banque-poste' },
    { en: 'How long will it take?', fr: 'Combien de temps cela va-t-il prendre ?', alt: ['How long does it take?', 'How long is it going to take?'], cat: 'À la poste', sec: 'en19-s-banque-poste' },
    { en: 'My car has broken down.', fr: 'Ma voiture est tombée en panne.', alt: ['My car broke down.'], cat: 'Au garage', sec: 'en19-s-garage' },
    { en: 'It won\'t start.', fr: 'Elle ne veut pas démarrer.', alt: ['The car won\'t start.', 'It doesn\'t start.'], cat: 'Au garage', sec: 'en19-s-garage', note: 'Ici, won\'t veut dire « refuse de ».' },
    { en: 'The heating isn\'t working.', fr: 'Le chauffage ne marche pas.', alt: ['The heating doesn\'t work.', 'The heating\'s not working.'], cat: 'À la maison', sec: 'en19-s-garage' },
    { en: 'Can you fix it?', fr: 'Pouvez-vous le réparer ?', alt: ['Can you repair it?', 'Could you fix it?', 'Could you repair it?'], cat: 'Au garage', sec: 'en19-s-garage' },
    { en: 'How much will it cost?', fr: 'Combien ça va coûter ?', alt: ['How much is it going to cost?'], cat: 'Au garage', sec: 'en19-s-garage' },
    { en: 'It doesn\'t work.', fr: 'Ça ne marche pas.', alt: ['It isn\'t working.', 'It\'s not working.'], cat: 'Réclamations', sec: 'en19-s-reclamation' },
    { en: 'I\'d like to make a complaint.', fr: 'Je voudrais faire une réclamation.', alt: ['I want to make a complaint.', 'I\'d like to complain.'], cat: 'Réclamations', sec: 'en19-s-reclamation' },
    { en: 'Could I have a refund, please?', fr: 'Pourrais-je être remboursé, s\'il vous plaît ?', alt: ['Can I have a refund, please?', 'Could I get a refund, please?', 'Can I get a refund, please?', 'Could I have my money back, please?', 'Can I have my money back, please?'], cat: 'Réclamations', sec: 'en19-s-reclamation' },
    { en: 'Can I exchange it?', fr: 'Puis-je l\'échanger ?', alt: ['Could I exchange it?', 'Can I change it?'], cat: 'Réclamations', sec: 'en19-s-reclamation' },
    { en: 'I\'m afraid it\'s not possible.', fr: 'Je regrette, ce n\'est pas possible.', alt: ['I\'m afraid that\'s not possible.', 'I\'m sorry, it\'s not possible.'], cat: 'Réclamations', sec: 'en19-s-reclamation', note: 'I\'m afraid… = je regrette (mauvaise nouvelle polie).' },
    { en: 'Could I speak to the manager, please?', fr: 'Pourrais-je parler au responsable, s\'il vous plaît ?', alt: ['Can I speak to the manager, please?', 'May I speak to the manager, please?'], cat: 'Réclamations', sec: 'en19-s-reclamation' }
  ],
  quiz: [
    // Le passif
    { id: 'en19-q-01', q: 'Complète : This cheese ___ made in France.', choices: ['are', 'has', 'is', 'does'], answer: 2, topic: 'Le passif', sec: 'en19-s-passif',
      why: { 0: '« are » va avec un sujet pluriel ; this cheese est singulier.', 1: '« has made » voudrait dire « a fabriqué » : le fromage ne fabrique rien !', 3: '« does » sert aux questions et négations du présent simple, pas au passif.' },
      explain: 'Passif au présent : **is / are + participe passé**. This cheese est singulier → This cheese **is made** in France. (Ce fromage est fabriqué en France.)', say: 'This cheese is made in France.', level: 1 },
    { id: 'en19-q-02', q: 'Complète : This church ___ built in 1850.', choices: ['was', 'is', 'were', 'did'], answer: 0, topic: 'Le passif', sec: 'en19-s-passif',
      why: { 1: '« in 1850 » : c\'est du passé, il faut le prétérit de be.', 2: '« were » va avec un sujet pluriel ; this church est singulier.', 3: '« did » ne s\'utilise pas au passif : on utilise be (was / were).' },
      explain: 'Passif au prétérit : **was / were + participe passé**. → This church **was built** in 1850. (Cette église a été construite en 1850.)', say: 'This church was built in 1850.', level: 1 },
    { id: 'en19-q-03', q: 'Complète : This book was ___ by Agatha Christie.', choices: ['wrote', 'write', 'writed', 'written'], answer: 3, topic: 'Le passif', sec: 'en19-s-passif',
      why: { 0: '« wrote » est le prétérit (2e colonne). Après be, il faut le participe passé (3e colonne).', 1: '« write » est la base verbale.', 2: 'write est irrégulier : « writed » n\'existe pas.' },
      explain: 'write, wrote, **written** : au passif, on utilise la 3e colonne. → This book was **written** by Agatha Christie. (Ce livre a été écrit par Agatha Christie.) **by** = par.', say: 'This book was written by Agatha Christie.', level: 1 },
    { id: 'en19-q-04', q: 'Traduis : « On m\'a volé mon portefeuille. »', choices: ['I was stolen my wallet.', 'My wallet was stolen.', 'My wallet stole.', 'One stole my wallet.'], answer: 1, topic: 'Le passif', sec: 'en19-s-passif',
      why: { 0: 'Ce n\'est pas toi qui as été volé, c\'est le portefeuille : le sujet est my wallet.', 2: 'Sans was, cela voudrait dire « mon portefeuille a volé » !', 3: 'Le « on » français ne se traduit pas par one ici : l\'anglais utilise le passif.' },
      explain: 'Le « on » français devient souvent un **passif** : My wallet **was stolen**. (On m\'a volé mon portefeuille.) steal, stole, **stolen**.', say: 'My wallet was stolen.', level: 2 },
    { id: 'en19-q-05', q: 'Complète la question : When ___ this bridge built?', choices: ['did', 'has', 'was', 'is'], answer: 2, topic: 'Le passif', sec: 'en19-s-passif',
      why: { 0: 'Au passif, la question se fait avec be, pas avec did.', 1: '« has… built » serait actif : on ne demande pas ce que le pont a construit !', 3: '« is » est le présent ; la construction d\'un pont, c\'est du passé : was.' },
      explain: 'Question au passif : **was + sujet + participe passé** ? → When **was** this bridge **built**? (Quand ce pont a-t-il été construit ?)', say: 'When was this bridge built?', level: 2 },
    { id: 'en19-q-06', q: 'Que veut dire « Breakfast is served from 7 to 10 » ?', choices: ['Le petit déjeuner est servi de 7 h à 10 h.', 'Le petit déjeuner est compris dans le prix.', 'Le petit déjeuner coûte de 7 à 10 livres.', 'Le petit déjeuner a été servi à 7 h.'], answer: 0, topic: 'Le passif', sec: 'en19-s-passif',
      why: { 1: '« compris » se dirait included.', 2: 'Il n\'y a pas de prix (pounds) : from 7 to 10 = de 7 h à 10 h.', 3: '« is served » est au présent (tous les jours), pas au passé (was served).' },
      explain: '**is served** = est servi (passif au présent). → Breakfast is served from 7 to 10. (Le petit déjeuner est servi de 7 h à 10 h.)', say: 'Breakfast is served from 7 to 10.', level: 1 },
    // too / enough
    { id: 'en19-q-07', q: 'Tu ne peux pas acheter ce manteau. Complète : It\'s ___ expensive.', choices: ['too', 'very', 'enough', 'much'], answer: 0, topic: 'too / enough', sec: 'en19-s-too-enough',
      why: { 1: 'very = très : on pourrait encore l\'acheter. Ici, tu ne l\'achètes pas : trop = too.', 2: 'enough (assez) se place après l\'adjectif, et le sens serait « assez cher ».', 3: '« much expensive » ne se dit pas.' },
      explain: '**too** + adjectif = trop. → It\'s **too** expensive. (C\'est trop cher.) Avec very (très cher), on pourrait l\'acheter quand même.', say: 'It\'s too expensive.', level: 1 },
    { id: 'en19-q-08', q: 'Complète : This room isn\'t ___ for four people.', choices: ['enough big', 'big enough', 'too big', 'big too'], answer: 1, topic: 'too / enough', sec: 'en19-s-too-enough',
      why: { 0: 'enough se place **après** l\'adjectif : big enough.', 2: '« isn\'t too big » = n\'est pas trop grande : ce n\'est pas le sens voulu.', 3: '« big too » voudrait dire « grande aussi ».' },
      explain: 'adjectif + **enough** : This room isn\'t **big enough** for four people. (Cette chambre n\'est pas assez grande pour quatre personnes.)', say: 'This room isn\'t big enough for four people.', level: 1 },
    { id: 'en19-q-09', q: 'Complète : We don\'t have ___ time.', choices: ['too', 'very', 'enough', 'too many'], answer: 2, topic: 'too / enough', sec: 'en19-s-too-enough',
      why: { 0: 'too tout seul se place devant un adjectif, pas devant un nom.', 1: 'very se place devant un adjectif (very good), pas devant un nom.', 3: 'too many va avec ce qu\'on compte (people, cars) ; time ne se compte pas.' },
      explain: '**enough** + nom (avant le nom) : We don\'t have **enough time**. (Nous n\'avons pas assez de temps.)', say: 'We don\'t have enough time.', level: 1 },
    { id: 'en19-q-10', q: 'Complète : There are ___ cars in the city centre.', choices: ['too much', 'enough much', 'too', 'too many'], answer: 3, topic: 'too / enough', sec: 'en19-s-too-enough',
      why: { 0: 'too much va avec ce qu\'on ne compte pas (too much noise). Les voitures se comptent : too many.', 1: '« enough much » n\'existe pas.', 2: 'too tout seul va devant un adjectif (too big), pas devant un nom.' },
      explain: 'Ce qu\'on compte (cars) : **too many**. → There are **too many** cars in the city centre. (Il y a trop de voitures dans le centre-ville.)', say: 'There are too many cars in the city centre.', level: 2 },
    { id: 'en19-q-11', q: 'Complète : There is too ___ noise in this hotel.', choices: ['many', 'much', 'lot', 'enough'], answer: 1, topic: 'too / enough', sec: 'en19-s-too-enough',
      why: { 0: 'too many va avec ce qu\'on compte (people). noise ne se compte pas : too much.', 2: '« too lot » n\'existe pas.', 3: '« too enough » n\'existe pas.' },
      explain: 'Ce qu\'on ne compte pas (noise, money, time) : **too much**. → There is **too much** noise in this hotel. (Il y a trop de bruit dans cet hôtel.)', say: 'There is too much noise in this hotel.', level: 2 },
    // need
    { id: 'en19-q-12', q: 'Complète : My husband ___ a new phone.', choices: ['need', 'is need', 'needs', 'has need'], answer: 2, topic: 'need / need to', sec: 'en19-s-need',
      why: { 0: 'My husband = he : il faut un -s → needs.', 1: 'Pas de is devant need au présent simple.', 3: '« has need » est du mot à mot : avoir besoin de = need.' },
      explain: 'need est un verbe normal : -s avec he/she/it. → My husband **needs** a new phone. (Mon mari a besoin d\'un nouveau téléphone.)', say: 'My husband needs a new phone.', level: 1 },
    { id: 'en19-q-13', q: 'Que veut dire « You don\'t need to pay » ?', choices: ['Vous ne pouvez pas payer.', 'Il est interdit de payer.', 'Vous n\'avez pas payé.', 'Vous n\'avez pas besoin de payer.'], answer: 3, topic: 'need / need to', sec: 'en19-s-need',
      why: { 0: '« ne pouvez pas » se dirait can\'t.', 1: 'Une interdiction se dirait mustn\'t.', 2: '« Vous n\'avez pas payé » se dirait You didn\'t pay ou You haven\'t paid.' },
      explain: '**don\'t need to** = ne pas avoir besoin de, ne pas être obligé. → You don\'t need to pay. (Vous n\'avez pas besoin de payer : c\'est gratuit, ou c\'est déjà payé.)', say: 'You don\'t need to pay.', level: 1 },
    { id: 'en19-q-14', q: 'Complète : ___ I need to sign here?', choices: ['Do', 'Am', 'Have', 'Must'], answer: 0, topic: 'need / need to', sec: 'en19-s-need',
      why: { 1: 'am ne sert pas à poser une question avec un autre verbe.', 2: '« Have I need… » n\'existe pas : need est un verbe normal → Do I need…?', 3: 'must et need ne vont pas ensemble.' },
      explain: 'need est un verbe normal : la question se fait avec **do**. → **Do** I need to sign here? — Yes, you do. (Est-ce que je dois signer ici ? — Oui.)', say: 'Do I need to sign here?', level: 2 },
    // Banque, poste
    { id: 'en19-q-15', q: 'À la banque, l\'employé dit : « Can I see some ID, please? » Que veut-il voir ?', choices: ['Ta carte bancaire', 'Une pièce d\'identité', 'Ton code secret', 'Un formulaire'], answer: 1, topic: 'À la banque', sec: 'en19-s-banque-poste',
      why: { 0: 'La carte bancaire = your card.', 2: 'Le code secret = your PIN (et on ne le montre jamais !).', 3: 'Un formulaire = a form.' },
      explain: '**ID** (« aï-di ») = une pièce d\'identité (passeport, carte d\'identité). → Can I see some ID, please? (Puis-je voir une pièce d\'identité, s\'il vous plaît ?)', say: 'Can I see some ID, please?', level: 1 },
    { id: 'en19-q-16', q: 'Comment dit-on « retirer de l\'argent » ?', choices: ['retire money', 'remove money', 'withdraw money', 'pull money'], answer: 2, topic: 'À la banque', sec: 'en19-s-banque-poste',
      why: { 0: 'Faux ami : retire veut dire « prendre sa retraite ».', 1: 'remove = enlever (une tache, un objet), pas pour l\'argent.', 3: 'pull = tirer (une porte) : ça ne se dit pas.' },
      explain: 'Retirer de l\'argent = **withdraw** money (ou take out money). → I\'d like to withdraw fifty pounds. (Je voudrais retirer cinquante livres.)', say: 'I\'d like to withdraw fifty pounds.', level: 1 },
    { id: 'en19-q-17', q: 'À la poste, l\'employé demande : « First class or second class? » Que veut-il savoir ?', choices: ['Ton âge', 'Si tu veux un envoi rapide ou normal', 'Si tu voyages en 1re ou en 2e classe', 'Le poids de ton colis'], answer: 1, topic: 'À la poste', sec: 'en19-s-banque-poste',
      why: { 0: 'L\'âge se demande avec How old are you?', 2: 'On n\'est pas à la gare ! À la poste, first class = l\'envoi rapide.', 3: 'Le poids se demande avec How much does it weigh?' },
      explain: 'Au Royaume-Uni, **first class** = envoi rapide (souvent le lendemain), **second class** = envoi normal, moins cher.', say: 'First class or second class?', level: 2 },
    // Garage
    { id: 'en19-q-18', q: 'Complète : My car has broken ___ . (Ma voiture est tombée en panne.)', choices: ['up', 'down', 'out', 'off'], answer: 1, topic: 'Décrire une panne', sec: 'en19-s-garage',
      why: { 0: 'break up = rompre, se séparer (un couple).', 2: 'break out = éclater (un incendie, une guerre).', 3: 'break off = se détacher, interrompre.' },
      explain: '**break down** = tomber en panne (voiture, machine). → My car has **broken down**. (Ma voiture est tombée en panne.)', say: 'My car has broken down.', level: 1 },
    { id: 'en19-q-19', q: 'Que veut dire « The car won\'t start » ?', choices: ['La voiture ne veut pas démarrer.', 'La voiture ne s\'arrête pas.', 'La voiture n\'a pas démarré hier.', 'La voiture ne partira pas demain.'], answer: 0, topic: 'Décrire une panne', sec: 'en19-s-garage',
      why: { 1: 's\'arrêter = stop.', 2: 'Au passé, on dirait « didn\'t start yesterday ».', 3: 'Personne ne parle de demain : ici, won\'t veut dire « refuse de ». La voiture ne démarre pas, maintenant.' },
      explain: '**won\'t** peut exprimer un refus : The car **won\'t start**. (La voiture ne veut pas démarrer.) Comme pour une personne : He won\'t listen. (Il ne veut pas écouter.)', say: 'The car won\'t start.', level: 2 },
    // Réclamations
    { id: 'en19-q-20', q: 'Le vendeur dit : « I\'m afraid we can\'t give you a refund. » Que veut-il dire ?', choices: ['Il a peur de vous rembourser.', 'Il va vous rembourser tout de suite.', 'Il vous offre un produit gratuit.', 'Il regrette : il ne peut pas vous rembourser.'], answer: 3, topic: 'Se plaindre poliment', sec: 'en19-s-reclamation',
      why: { 0: 'Ici, I\'m afraid ne veut pas dire « j\'ai peur » : c\'est une façon polie d\'annoncer une mauvaise nouvelle.', 1: 'can\'t = ne peut pas : il refuse de rembourser.', 2: 'Il ne parle pas de produit gratuit (free).' },
      explain: '**I\'m afraid…** = je regrette, malheureusement (une mauvaise nouvelle, dite poliment). **a refund** = un remboursement. → I\'m afraid we can\'t give you a refund. (Je regrette, nous ne pouvons pas vous rembourser.)', say: 'I\'m afraid we can\'t give you a refund.', level: 2 },
    { id: 'en19-q-21', q: 'Complète : I\'d like to complain ___ the noise.', choices: ['about', 'of', 'for', 'from'], answer: 0, topic: 'Se plaindre poliment', sec: 'en19-s-reclamation',
      why: { 1: '« complain of » sert pour une douleur, chez le médecin. Pour un problème : complain about.', 2: 'for ne va pas avec complain.', 3: 'from ne va pas avec complain.' },
      explain: 'se plaindre **de** quelque chose = complain **about** something. → I\'d like to complain **about** the noise. (Je voudrais me plaindre du bruit.)', say: 'I\'d like to complain about the noise.', level: 1 },
    // Compréhension orale
    { id: 'en19-q-22', q: 'Écoute. Que demande la personne ?', listen: true, say: 'My car has broken down. Can you send a mechanic?', choices: ['Le prix d\'une voiture neuve', 'Un taxi pour rentrer chez elle', 'Un plombier, car il y a une fuite', 'Un mécanicien, car sa voiture est en panne'], answer: 3, topic: 'Compréhension orale', sec: 'en19-s-garage',
      why: { 0: 'Elle ne veut pas acheter de voiture : « My car has broken down » = ma voiture est tombée en panne.', 1: 'Pas de taxi : elle demande « a mechanic ».', 2: 'Un plombier se dirait « a plumber ». On entend « a mechanic ».' },
      explain: 'My car **has broken down**. Can you send **a mechanic**? (Ma voiture est tombée en panne. Pouvez-vous envoyer un mécanicien ?)', level: 2 },
    { id: 'en19-q-23', q: 'Écoute. Que dit l\'employé de la poste ?', listen: true, say: 'The parcel will be delivered on Thursday.', choices: ['Le colis a été livré mardi.', 'Le colis sera livré jeudi.', 'Le colis sera livré mardi.', 'Le colis a été envoyé jeudi.'], answer: 1, topic: 'Compréhension orale', sec: 'en19-s-banque-poste',
      why: { 0: 'will be = futur (sera livré) ; et Thursday = jeudi.', 2: 'mardi = Tuesday ; on entend Thursday (avec le th) : jeudi.', 3: 'delivered = livré (envoyé = sent) ; et will be parle du futur.' },
      explain: '**will be delivered** = sera livré (passif au futur). → The parcel will be delivered on **Thursday**. (Le colis sera livré jeudi.)', level: 2 },
    { id: 'en19-q-24', q: 'Écoute. Que veut le client ?', listen: true, say: 'These trousers are too short. Can I exchange them?', choices: ['Le pantalon est trop long : il veut être remboursé.', 'Le pantalon est assez court : il le garde.', 'Les chaussures sont trop petites : il veut les échanger.', 'Le pantalon est trop court : il veut l\'échanger.'], answer: 3, topic: 'Compréhension orale', sec: 'en19-s-reclamation',
      why: { 0: 'too short = trop court ; et exchange = échanger (pas rembourser).', 1: 'too = trop (pas « assez ») ; et il veut l\'échanger.', 2: 'trousers = un pantalon (les chaussures = shoes).' },
      explain: 'These **trousers** are **too short**. Can I **exchange** them? (Ce pantalon est trop court. Puis-je l\'échanger ?) trousers est un pluriel en anglais : them.', level: 2 },
    { id: 'en19-q-25', q: 'Écoute. Qu\'apprend-on sur la banque ?', listen: true, say: 'I\'m sorry, the bank is closed on Saturday afternoons.', choices: ['Elle est fermée le samedi après-midi.', 'Elle est ouverte le samedi après-midi.', 'Elle est fermée tous les après-midi.', 'Elle est fermée le dimanche.'], answer: 0, topic: 'Compréhension orale', sec: 'en19-s-passif',
      why: { 1: 'closed = fermée (ouverte = open).', 2: 'Pas tous les après-midi : seulement « on Saturday afternoons », le samedi.', 3: 'dimanche = Sunday ; on entend Saturday : samedi.' },
      explain: 'The bank **is closed on Saturday afternoons**. (La banque est fermée le samedi après-midi.) **on** + jour au pluriel = chaque semaine, ce jour-là.', level: 1 }
  ],
  exercises: [
    // Le passif
    { id: 'en19-x-01', prompt: 'Mets au passif (présent) : They make these shoes in Italy. → These shoes ___ in Italy.', answers: ['are made'], topic: 'Le passif', sec: 'en19-s-passif', strict: true,
      hint: 'to be (au présent, pluriel) + participe passé de make.',
      explain: 'Passif : **be + participe passé**. These shoes est pluriel → These shoes **are made** in Italy. (Ces chaussures sont fabriquées en Italie.)',
      rule: 'Passif au présent : am / is / are + participe passé',
      mistakes: [{ text: 'is made', msg: 'These shoes est pluriel : **are** made.' }, { text: 'are make', msg: 'Après be, il faut le **participe passé** : make → **made**.' }, { text: 'made', msg: 'Il manque **be** : au passif, on dit These shoes **are** made.' }],
      say: 'These shoes are made in Italy.', level: 1 },
    { id: 'en19-x-02', prompt: 'Complète au passif (prétérit) : This castle ___ (build) in 1450. (Ce château a été construit en 1450.)', answers: ['was built'], topic: 'Le passif', sec: 'en19-s-passif', strict: true,
      hint: 'was + participe passé (build, built, built).',
      explain: 'In 1450 → passé : **was + participe passé**. → This castle **was built** in 1450.',
      rule: 'Passif au prétérit : was / were + participe passé',
      mistakes: [{ text: 'was build', msg: 'Après was, le **participe passé** : build → **built**.' }, { text: 'is built', msg: 'In 1450 : c\'est du passé → **was** built.' }, { text: 'were built', msg: 'This castle est singulier : **was** built.' }, { text: 'built', msg: 'Il manque **was** : au passif, be + participe passé → **was built**.' }],
      say: 'This castle was built in 1450.', level: 1 },
    { id: 'en19-x-03', prompt: 'Complète au passif : My phone ___ (steal) yesterday. (On m\'a volé mon téléphone hier.)', answers: ['was stolen'], topic: 'Le passif', sec: 'en19-s-passif', strict: true,
      hint: 'steal, stole, stolen : quelle colonne après was ?',
      explain: 'Passif au prétérit : **was + participe passé**. steal, stole, **stolen** → My phone **was stolen** yesterday.',
      rule: 'Après be, toujours le participe passé (3e colonne)',
      mistakes: [{ text: 'was stole', msg: '« stole » est le prétérit. Au passif, il faut le **participe passé** : **stolen**.' }, { text: 'was stealed', msg: 'steal est irrégulier : steal, stole, **stolen**.' }, { text: 'stolen', msg: 'Il manque **was** : My phone **was** stolen.' }],
      say: 'My phone was stolen yesterday.', level: 1 },
    { id: 'en19-x-04', prompt: 'Traduis : Ici, on parle anglais.', answers: ['English is spoken here', 'We speak English here', 'They speak English here'], topic: 'Le passif', sec: 'en19-s-passif',
      hint: 'Le « on » français : pense au passif (speak, spoke, spoken).',
      explain: 'Le « on » se traduit souvent par un passif : **English is spoken here.** (Ici, on parle anglais.) C\'est ce qu\'on lit sur les vitrines.',
      rule: '« On » + verbe → souvent le passif : be + participe passé',
      mistakes: [{ text: 'English is speak here', msg: 'Après is, le participe passé : speak → **spoken**.' }, { text: 'English is spoke here', msg: '« spoke » est le prétérit ; il faut le participe passé : **spoken**.' }, { text: 'English speaks here', msg: 'Sans be, cela voudrait dire « l\'anglais parle ici » ! Passif : English **is spoken** here.' }],
      say: 'English is spoken here.', level: 2 },
    { id: 'en19-x-05', prompt: 'Pose la question : The room was cleaned. → ___?', answers: ['Was the room cleaned'], topic: 'Le passif', sec: 'en19-s-passif',
      hint: 'Comme avec to be : was passe devant le sujet.',
      explain: 'Question au passif : **Was + sujet + participe passé** ? → **Was the room cleaned?** (La chambre a-t-elle été nettoyée ?)',
      rule: 'Question au passif : was / were + sujet + participe passé ?',
      mistakes: [{ text: 'Did the room cleaned', msg: 'Au passif, pas de did : **was** passe devant le sujet → Was the room cleaned?' }, { text: 'Was cleaned the room', msg: 'Le sujet se place juste après was : **Was the room** cleaned?' }],
      say: 'Was the room cleaned?', level: 2 },
    { id: 'en19-x-06', prompt: 'Complète : Is breakfast ___ (include) in the price?', answers: ['included'], topic: 'Le passif', sec: 'en19-s-passif', strict: true,
      hint: 'Après is : le participe passé d\'un verbe régulier.',
      explain: 'Passif au présent : is + participe passé. → Is breakfast **included** in the price? (Le petit déjeuner est-il compris dans le prix ?)',
      rule: 'Verbe régulier : participe passé en -ed (include → included)',
      mistakes: [{ text: 'include', msg: 'Après is, le participe passé : includ**ed**.' }, { text: 'including', msg: '« including » veut dire « y compris ». Ici, passif : Is breakfast **included**?' }],
      say: 'Is breakfast included in the price?', level: 1 },
    { id: 'en19-x-07', prompt: 'Mets au passif : Someone repaired my car. → My car ___.', answers: ['was repaired', 'was fixed', 'has been repaired'], topic: 'Le passif', sec: 'en19-s-passif', strict: true,
      hint: 'repaired est au prétérit : was + participe passé.',
      explain: 'Le prétérit actif (repaired) devient **was + participe passé** au passif. → My car **was repaired**. (Ma voiture a été réparée.)',
      rule: 'Actif au prétérit → passif : was / were + participe passé',
      mistakes: [{ text: 'is repaired', msg: 'repaired (prétérit) : c\'est du passé → **was** repaired.' }, { text: 'repaired', msg: 'Il manque **was** : My car **was** repaired.' }],
      say: 'My car was repaired.', level: 2 },
    { id: 'en19-x-08', prompt: 'Traduis : Le magasin est fermé le lundi.', answers: ['The shop is closed on Mondays', 'The shop is closed on Monday', 'The store is closed on Mondays', 'The store is closed on Monday', 'The shop closes on Mondays', 'The shop is shut on Mondays'], topic: 'Le passif', sec: 'en19-s-passif',
      hint: 'fermé = closed ; le lundi (chaque lundi) = on Mondays.',
      explain: '**The shop is closed on Mondays.** (Le magasin est fermé le lundi.) Pour une habitude : on + jour au pluriel.',
      rule: 'le lundi (tous les lundis) = on Mondays',
      mistakes: [{ text: 'The shop is close on Mondays', msg: 'Fermé = **closed** (avec -d) : « close » est le verbe à la base.' }, { text: 'The shop is closed the Monday', msg: '« le lundi » (chaque lundi) = **on Mondays**, avec on.' }],
      say: 'The shop is closed on Mondays.', level: 1 },
    // too / enough
    { id: 'en19-x-09', prompt: 'Complète : I can\'t drink this tea. It\'s ___ hot.', answers: ['too'], topic: 'too / enough', sec: 'en19-s-too-enough', strict: true,
      hint: 'Tu ne peux pas le boire : c\'est trop…',
      explain: 'On ne peut pas le boire : **too** (trop). → It\'s **too** hot. (Il est trop chaud.)',
      rule: 'too + adjectif = trop (on ne peut pas)',
      mistakes: [{ text: 'very', msg: 'very = très (on pourrait encore le boire). Ici, tu ne peux pas : **too** (trop).' }, { text: 'enough', msg: 'enough = assez, et il se place après l\'adjectif. Ici : **too** hot.' }, { text: 'to', msg: '« to » (à, pour) s\'écrit avec un seul o. Trop = **too**.' }],
      say: 'It\'s too hot.', level: 1 },
    { id: 'en19-x-10', prompt: 'Traduis : C\'est trop cher.', answers: ['It\'s too expensive', 'That\'s too expensive', 'This is too expensive'], topic: 'too / enough', sec: 'en19-s-too-enough',
      hint: 'trop = too, cher = expensive.',
      explain: '**too** + adjectif : **It\'s too expensive.** (C\'est trop cher.)',
      rule: 'too + adjectif (sans much)',
      mistakes: [{ text: 'It\'s very expensive', msg: 'very = très. Trop = **too** : It\'s **too** expensive.' }, { text: 'It\'s too much expensive', msg: 'Devant un adjectif, **too** tout seul : too expensive (too much va devant un nom).' }, { text: 'It\'s expensive too', msg: 'À la fin, too voudrait dire « aussi » ! Trop = too **avant** l\'adjectif : too expensive.' }],
      say: 'It\'s too expensive.', level: 1 },
    { id: 'en19-x-11', prompt: 'Remets dans l\'ordre (Ce n\'est pas assez grand) : big / isn\'t / enough / it', answers: ['It isn\'t big enough', 'It\'s not big enough'], topic: 'too / enough', sec: 'en19-s-too-enough',
      hint: 'enough se place après l\'adjectif.',
      explain: 'adjectif + **enough** : **It isn\'t big enough.** (Ce n\'est pas assez grand.)',
      rule: 'adjectif + enough : big enough, warm enough',
      mistakes: [{ text: 'It isn\'t enough big', msg: 'enough se place **après** l\'adjectif : big **enough**.' }, { text: 'Isn\'t it big enough', msg: 'Ça, c\'est une question ! Pour une affirmation, le sujet d\'abord : **It isn\'t** big enough.' }],
      say: 'It isn\'t big enough.', level: 1 },
    { id: 'en19-x-12', prompt: 'Traduis : Je n\'ai pas assez d\'argent.', answers: ['I don\'t have enough money', 'I haven\'t got enough money'], topic: 'too / enough', sec: 'en19-s-too-enough',
      hint: 'Devant un nom, enough se place avant.',
      explain: '**enough** + nom : **I don\'t have enough money.** (Je n\'ai pas assez d\'argent.)',
      rule: 'enough + nom : enough money, enough time',
      mistakes: [{ text: 'I don\'t have money enough', msg: 'Devant un nom, enough se place **avant** : enough **money**.' }, { text: 'I don\'t have too much money', msg: 'too much = trop. « Pas assez de » = **not enough** : I don\'t have **enough** money.' }],
      say: 'I don\'t have enough money.', level: 1 },
    { id: 'en19-x-13', prompt: 'Complète avec too much ou too many : There are ___ people in this queue.', answers: ['too many'], topic: 'too / enough', sec: 'en19-s-too-enough', strict: true,
      hint: 'Les gens, ça se compte (one person, two people).',
      explain: 'Ce qu\'on compte : **too many**. → There are **too many** people in this queue. (Il y a trop de monde dans cette file d\'attente.)',
      rule: 'too many + nom qu\'on compte · too much + nom qu\'on ne compte pas',
      mistakes: [{ text: 'too much', msg: 'people se compte (one person, two people) : **too many**.' }, { text: 'too', msg: 'Devant un nom, il faut too **many** (ou too much).' }],
      say: 'There are too many people in this queue.', level: 2 },
    { id: 'en19-x-14', prompt: 'Complète avec too much ou too many : You spend ___ money!', answers: ['too much'], topic: 'too / enough', sec: 'en19-s-too-enough', strict: true,
      hint: 'money ne se compte pas (pas de -s).',
      explain: 'Ce qu\'on ne compte pas : **too much**. → You spend **too much** money! (Tu dépenses trop d\'argent !)',
      rule: 'too much + money, noise, time, water…',
      mistakes: [{ text: 'too many', msg: 'money ne se compte pas : **too much** money.' }, { text: 'too', msg: 'Devant un nom : too **much** money.' }],
      say: 'You spend too much money!', level: 2 },
    { id: 'en19-x-15', prompt: 'Complète : The bed isn\'t long ___ for me. (Le lit n\'est pas assez long pour moi.)', answers: ['enough'], topic: 'too / enough', sec: 'en19-s-too-enough', strict: true,
      hint: 'assez, après l\'adjectif.',
      explain: 'adjectif + **enough** : The bed isn\'t long **enough** for me.',
      rule: 'not + adjectif + enough = pas assez…',
      mistakes: [{ text: 'too', msg: 'too long = trop long. Ici, ce n\'est **pas assez** long : long **enough**.' }, { text: 'very', msg: 'very se place avant l\'adjectif et veut dire « très ». Pas assez long : long **enough**.' }],
      say: 'The bed isn\'t long enough for me.', level: 1 },
    // need
    { id: 'en19-x-16', prompt: 'Complète au présent : My car ___ (need) new tyres.', answers: ['needs'], topic: 'need / need to', sec: 'en19-s-need', strict: true,
      hint: 'My car = it.',
      explain: 'need est un verbe normal : -s avec he/she/it. → My car **needs** new tyres. (Ma voiture a besoin de pneus neufs.)',
      rule: 'he / she / it needs',
      mistakes: [{ text: 'need', msg: 'My car = it : au présent, **needs** avec un -s.' }, { text: 'is needing', msg: 'need ne se met presque jamais à la forme en -ing : **needs**.' }],
      say: 'My car needs new tyres.', level: 1 },
    { id: 'en19-x-17', prompt: 'Traduis : Je dois envoyer un colis.', answers: ['I need to send a parcel', 'I have to send a parcel', 'I must send a parcel', 'I\'ve got to send a parcel', 'I need to send a package', 'I have to send a package', 'I must send a package', 'I need to post a parcel', 'I have to post a parcel', 'I must post a parcel'], topic: 'need / need to', sec: 'en19-s-need',
      hint: 'need to + verbe (ou have to).',
      explain: '**I need to send a parcel.** (Je dois envoyer un colis.) On peut dire aussi I have to send a parcel.',
      rule: 'need to + base verbale',
      mistakes: [{ text: 'I need send a parcel', msg: 'need + verbe : n\'oublie pas **to** → I need **to** send a parcel.' }, { text: 'I need to sending a parcel', msg: 'Après need to, la **base** du verbe : need to **send**.' }],
      say: 'I need to send a parcel.', level: 1 },
    { id: 'en19-x-18', prompt: 'Mets à la forme négative : You need to sign this form. → You ___ sign this form.', answers: ['don\'t need to', 'needn\'t', 'don\'t have to'], topic: 'need / need to', sec: 'en19-s-need',
      hint: 'need est un verbe normal : négation avec don\'t.',
      explain: 'Négation : **don\'t need to** = pas besoin de. → You **don\'t need to** sign this form. (Vous n\'avez pas besoin de signer ce formulaire.)',
      rule: 'don\'t / doesn\'t need to = pas besoin de · mustn\'t = interdiction',
      mistakes: [{ text: 'needn\'t to', msg: 'Après needn\'t, pas de to. Le plus simple : **don\'t need to**.' }, { text: 'mustn\'t', msg: 'mustn\'t = c\'est interdit. « Pas besoin de » = **don\'t need to**.' }, { text: 'doesn\'t need to', msg: 'Avec you : **don\'t** (doesn\'t va avec he, she, it).' }],
      say: 'You don\'t need to sign this form.', level: 2 },
    { id: 'en19-x-19', prompt: 'Complète la question : ___ I need to pay now?', answers: ['Do'], topic: 'need / need to', sec: 'en19-s-need', strict: true,
      hint: 'need est un verbe normal, sujet I.',
      explain: 'Question avec **do** : **Do** I need to pay now? (Est-ce que je dois payer maintenant ?) Réponse : Yes, you do. / No, you don\'t.',
      rule: 'Do / Does + sujet + need to…?',
      mistakes: [{ text: 'Am', msg: 'need est un verbe normal : la question se fait avec **Do** → Do I need to…?' }, { text: 'Does', msg: 'Avec I : **Do** (does va avec he, she, it).' }],
      say: 'Do I need to pay now?', level: 1 },
    // Banque, poste
    { id: 'en19-x-20', prompt: 'Traduis : Je voudrais ouvrir un compte.', answers: ['I\'d like to open an account', 'I\'d like to open a bank account', 'I want to open an account'], topic: 'À la banque', sec: 'en19-s-banque-poste',
      hint: 'je voudrais = I\'d like to ; un compte = an account.',
      explain: '**I\'d like to open an account.** (Je voudrais ouvrir un compte.) I\'d like to + verbe = je voudrais (poli).',
      rule: 'I\'d like to + base verbale = je voudrais',
      mistakes: [{ text: 'I\'d like to open a count', msg: 'Un compte en banque = an **account** (avec ac- devant).' }, { text: 'I\'d like open an account', msg: 'Après I\'d like, il faut **to** + verbe : I\'d like **to** open an account.' }],
      say: 'I\'d like to open an account.', level: 1 },
    { id: 'en19-x-21', prompt: 'Complète : I\'d like to ___ 100 pounds. (retirer)', answers: ['withdraw', 'take out'], topic: 'À la banque', sec: 'en19-s-banque-poste', strict: true,
      hint: 'Attention au faux ami !',
      explain: 'Retirer de l\'argent = **withdraw** (ou take out). → I\'d like to **withdraw** 100 pounds. (Je voudrais retirer cent livres.)',
      rule: 'retirer de l\'argent = withdraw · retire = prendre sa retraite',
      mistakes: [{ text: 'retire', msg: 'Faux ami ! retire = prendre sa retraite. Retirer de l\'argent = **withdraw** (ou take out).' }, { text: 'remove', msg: 'remove = enlever (un objet, une tache). Pour l\'argent : **withdraw**.' }],
      say: 'I\'d like to withdraw 100 pounds.', level: 1 },
    { id: 'en19-x-22', prompt: 'Traduis : Deux timbres pour la France, s\'il vous plaît.', answers: ['Two stamps for France, please', 'Could I have two stamps for France, please', 'Can I have two stamps for France, please', 'I\'d like two stamps for France, please'], topic: 'À la poste', sec: 'en19-s-banque-poste',
      hint: 'un timbre = a stamp.',
      explain: '**Two stamps for France, please.** (Deux timbres pour la France, s\'il vous plaît.)',
      rule: 'Pas d\'article devant un nom de pays : for France',
      mistakes: [{ text: 'Two stamp for France, please', msg: 'Deux timbres : pluriel → two stamp**s**.' }, { text: 'Two stamps for the France, please', msg: 'Pas d\'article devant un nom de pays : for **France**.' }],
      say: 'Two stamps for France, please.', level: 1 },
    // Garage, maison
    { id: 'en19-x-23', prompt: 'Traduis : Ma voiture est tombée en panne.', answers: ['My car has broken down', 'My car broke down', 'My car\'s broken down'], topic: 'Décrire une panne', sec: 'en19-s-garage',
      hint: 'tomber en panne = break down (break, broke, broken).',
      explain: '**My car has broken down.** (Ma voiture est tombée en panne.) break down = tomber en panne.',
      rule: 'tomber en panne = break down',
      mistakes: [{ text: 'My car has broken', msg: 'broken tout seul = cassé. Tomber en panne = break **down** : My car has broken **down**.' }, { text: 'My car has broke down', msg: 'Après has, le participe passé : break, broke, **broken** → has broken down.' }, { text: 'My car is fallen in breakdown', msg: 'Pas de mot à mot : tomber en panne = **break down** → My car has broken down.' }],
      say: 'My car has broken down.', level: 2 },
    { id: 'en19-x-24', prompt: 'Complète : The heating ___ working. (Le chauffage ne marche pas.)', answers: ['isn\'t'], topic: 'Décrire une panne', sec: 'en19-s-garage', strict: true,
      hint: 'working (-ing) : il faut be à la forme négative.',
      explain: 'Avec -ing, il faut **be** : The heating **isn\'t** working. (On peut dire aussi : The heating doesn\'t work.)',
      rule: 'It isn\'t working = It doesn\'t work = ça ne marche pas',
      mistakes: [{ text: 'doesn\'t', msg: 'Avec working (-ing), il faut **be** : **isn\'t** working. (Sans -ing : doesn\'t work.)' }, { text: 'not', msg: 'Il manque **is** : The heating **isn\'t** working.' }],
      say: 'The heating isn\'t working.', level: 1 },
    { id: 'en19-x-25', prompt: 'Complète : The lift is out of ___ . (L\'ascenseur est en panne.)', answers: ['order', 'service'], topic: 'Décrire une panne', sec: 'en19-s-garage', strict: true,
      hint: 'L\'expression des panneaux « hors service ».',
      explain: '**out of order** = en panne, hors service. → The lift is **out of order**.',
      rule: 'out of order = en panne (machine, ascenseur, distributeur)',
      mistakes: [{ text: 'work', msg: 'L\'expression est **out of order** (hors service).' }, { text: 'ordre', msg: 'Presque ! En anglais, on écrit **order** (o-r-d-e-r).' }],
      say: 'The lift is out of order.', level: 2 },
    // Réclamations
    { id: 'en19-x-26', prompt: 'Traduis : Je voudrais faire une réclamation.', answers: ['I\'d like to make a complaint', 'I want to make a complaint', 'I\'d like to complain'], topic: 'Se plaindre poliment', sec: 'en19-s-reclamation',
      hint: 'une réclamation = a complaint (faux ami !).',
      explain: '**I\'d like to make a complaint.** (Je voudrais faire une réclamation.) On dit **make** a complaint.',
      rule: 'faire une réclamation = make a complaint',
      mistakes: [{ text: 'I\'d like to make a reclamation', msg: 'Faux ami : une réclamation = a **complaint**.' }, { text: 'I\'d like to do a complaint', msg: 'On dit **make** a complaint (pas do).' }],
      say: 'I\'d like to make a complaint.', level: 2 },
    { id: 'en19-x-27', prompt: 'Complète : I\'d like to complain ___ the noise.', answers: ['about'], topic: 'Se plaindre poliment', sec: 'en19-s-reclamation', strict: true,
      hint: 'se plaindre DE… en anglais ?',
      explain: 'se plaindre **de** = complain **about**. → I\'d like to complain **about** the noise. (Je voudrais me plaindre du bruit.)',
      rule: 'complain about something',
      mistakes: [{ text: 'of', msg: 'se plaindre DE = complain **about**.' }, { text: 'for', msg: 'On dit complain **about** quelque chose (for ne va pas ici).' }],
      say: 'I\'d like to complain about the noise.', level: 1 },
    { id: 'en19-x-28', prompt: 'Traduis : Pourrais-je être remboursé, s\'il vous plaît ?', answers: ['Could I have a refund, please', 'Can I have a refund, please', 'Could I get a refund, please', 'Can I get a refund, please', 'Could I have my money back, please', 'Can I have my money back, please', 'Could I be refunded, please', 'May I have a refund, please', 'Could I have a refund', 'Can I have a refund'], topic: 'Se plaindre poliment', sec: 'en19-s-reclamation',
      hint: 'un remboursement = a refund.',
      explain: '**Could I have a refund, please?** (Pourrais-je être remboursé, s\'il vous plaît ?)',
      rule: 'Could I have…, please? = Pourrais-je avoir…, s\'il vous plaît ?',
      mistakes: [{ text: 'Could I have a remboursement, please', msg: 'C\'est du français ! Le remboursement = a **refund**.' }, { text: 'Could I to have a refund, please', msg: 'Pas de to après could : Could I **have** a refund?' }],
      say: 'Could I have a refund, please?', level: 2 },
    { id: 'en19-x-29', prompt: 'Le vendeur annonce poliment une mauvaise nouvelle. Complète : I\'m ___, we don\'t have this size.', answers: ['afraid', 'sorry'], topic: 'Se plaindre poliment', sec: 'en19-s-reclamation', strict: true,
      hint: 'Le mot qui veut aussi dire « avoir peur »…',
      explain: '**I\'m afraid…** = je regrette (mauvaise nouvelle polie). → I\'m **afraid**, we don\'t have this size. (Je regrette, nous n\'avons pas cette taille.)',
      rule: 'I\'m afraid… = je regrette, malheureusement',
      mistakes: [{ text: 'fear', msg: 'Pour annoncer poliment une mauvaise nouvelle, on dit **I\'m afraid**…' }, { text: 'scared', msg: 'scared = effrayé. L\'expression polie est **I\'m afraid**…' }],
      say: 'I\'m afraid, we don\'t have this size.', level: 2 }
  ]
});
