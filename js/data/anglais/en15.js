/* Anglais — chapitre 15 : Demander, proposer, inviter (Could you…? Can I…? Do you mind if…? Shall I…? Let's…, How about…? Would you like to…? I'd rather, accepter et refuser poliment, recevoir chez soi) */
APP.registerChapter({
  id: 'en15', subject: 'anglais', num: 15, tier: 2,
  title: 'Demander, proposer, inviter',
  subtitle: 'Could you…? · Do you mind if…? · Shall I…? · Let\'s… · Would you like to…? · accepter et refuser poliment',
  vocabSec: 'en15-s-vocab',
  sections: [
    {
      id: 'en15-s-demander', title: 'Demander un service : Could you…?',
      html: `
<p>Au chapitre 12, tu as vu <span class="say">Can you…?</span> et <span class="say">Could you…?</span> pour demander quelque chose. Ici, on va plus loin : demander un <b>service</b> à un voisin, à un ami ou à un inconnu… et savoir répondre.</p>
<h3>Demander à quelqu'un de faire quelque chose</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">Can you help me?</span></td><td>Tu peux m'aider ? (simple, entre proches)</td></tr>
<tr><td><span class="say">Could you help me, please?</span></td><td>Pourriez-vous m'aider, s'il vous plaît ? (plus poli)</td></tr>
<tr><td><span class="say">Could you do me a favour?</span></td><td>Pourrais-tu me rendre un service ?</td></tr>
<tr><td><span class="say">Could you give me a hand?</span></td><td>Pourrais-tu me donner un coup de main ?</td></tr>
<tr><td><span class="say">Could you look after my cat this weekend?</span></td><td>Pourrais-tu garder mon chat ce week-end ?</td></tr>
<tr><td><span class="say">Could you give me a lift to the station?</span></td><td>Pourrais-tu me déposer à la gare ?</td></tr>
<tr><td><span class="say">Could you turn the music down, please?</span></td><td>Pourriez-vous baisser la musique, s'il vous plaît ?</td></tr></table>
<h3>Répondre</h3>
<ul>
<li>Pour dire oui : <span class="say">Sure.</span> (Bien sûr.) · <span class="say">Of course.</span> (Bien sûr.) · <span class="say">No problem.</span> (Pas de problème.) · <span class="say">Certainly.</span> (Certainement — très poli, par exemple dans un magasin)</li>
<li>Pour dire non : <span class="say">Sorry, I can't. I'm busy.</span> (Désolé, je ne peux pas. Je suis occupé.)</li>
</ul>
<div class="callout key"><b>À retenir</b> <b>Could you</b> + base verbale (sans to) + <b>please</b> ? C'est la demande polie qui marche partout.</div>
<div class="callout warn"><b>Piège</b> Le petit mot <b>me</b> (ou him, her, us) se place <b>après</b> le verbe, et non avant comme en français : « Tu peux <b>m'</b>aider ? » = <span class="say">Can you help me?</span> (pas « Can you me help? »). « Rendre un service » se dit avec <b>do</b> : <span class="say">do me a favour</span> (pas « make »).</div>
<div class="callout info"><b>Pour aller plus loin</b> Encore plus poli : <span class="say">Would you mind closing the window?</span> (Ça vous ennuierait de fermer la fenêtre ?). Après <span class="say">Would you mind</span>, le verbe prend <b>-ing</b>. Pour dire oui : <span class="say">No, not at all.</span> (Non, pas du tout : je le fais volontiers.)</div>`
    },
    {
      id: 'en15-s-permission', title: 'Demander la permission : Can I…? Do you mind if…?',
      html: `
<p>Pour demander <b>la permission</b> (« est-ce que je peux… ? »), on met <b>I</b> juste après le petit verbe.</p>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">Can I use your phone?</span></td><td>Je peux utiliser ton téléphone ? (simple)</td></tr>
<tr><td><span class="say">Could I borrow your umbrella?</span></td><td>Pourrais-je emprunter votre parapluie ? (plus poli)</td></tr>
<tr><td><span class="say">May I come in?</span></td><td>Puis-je entrer ? (très poli, un peu formel)</td></tr>
<tr><td><span class="say">Do you mind if I sit here?</span></td><td>Ça vous dérange si je m'assieds ici ?</td></tr>
<tr><td><span class="say">Do you mind if I open the window?</span></td><td>Ça vous dérange si j'ouvre la fenêtre ?</td></tr></table>
<h3>Do you mind if I…? : attention à la réponse !</h3>
<p><span class="say">mind</span> veut dire « être gêné, voir un inconvénient ». La question veut donc dire : « Est-ce que <b>ça vous gêne</b> si… ? ». Pour répondre « vas-y, pas de souci », on dit donc… <b>non</b> !</p>
<ul>
<li><span class="say">No, not at all.</span> — Non, pas du tout. (= vas-y)</li>
<li><span class="say">No, go ahead.</span> — Non, allez-y. (= vas-y)</li>
<li><span class="say">Of course not.</span> — Bien sûr que non. (= vas-y)</li>
<li>Si ça gêne vraiment, on s'excuse et on donne une raison : <span class="say">Sorry, I'm a bit cold.</span> — Désolé, j'ai un peu froid.</li>
</ul>
<p>Après <span class="say">if</span>, le verbe est au <b>présent simple</b> : <span class="say">Do you mind if I close the door?</span> — Ça vous dérange si je ferme la porte ?</p>
<div class="callout key"><b>À retenir</b> <b>Can I / Could I / May I</b> + base verbale ? · <b>Do you mind if I</b> + présent ? → pour dire d'accord : <span class="say">No, not at all.</span></div>
<div class="callout warn"><b>Piège : emprunter ou prêter ?</b> <span class="say">borrow</span> = emprunter (je prends) ; <span class="say">lend</span> = prêter (je donne). « Tu peux me prêter ton stylo ? » se dit <span class="say">Can you lend me your pen?</span> ou <span class="say">Can I borrow your pen?</span>, jamais « Can you borrow me… ».</div>
<div class="callout warn"><b>Piège</b> À « Do you mind if I…? », répondre <span class="say">Yes, I do.</span> veut dire « oui, ça me dérange » : c'est un refus !</div>`
    },
    {
      id: 'en15-s-proposer', title: 'Proposer son aide : Shall I…? I\'ll…',
      html: `
<p>Pour <b>proposer ton aide</b>, l'anglais a une petite question très pratique : <span class="say">Shall I…?</span> (Voulez-vous que je… ? Je vous… ?). Le mot <span class="say">shall</span> s'emploie presque uniquement avec <b>I</b> et <b>we</b>, dans une question.</p>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">Shall I carry your bag?</span></td><td>Voulez-vous que je porte votre sac ?</td></tr>
<tr><td><span class="say">Shall I open the window?</span></td><td>J'ouvre la fenêtre ?</td></tr>
<tr><td><span class="say">Shall I call a taxi?</span></td><td>Voulez-vous que j'appelle un taxi ?</td></tr>
<tr><td><span class="say">Would you like me to help you?</span></td><td>Voulez-vous que je vous aide ?</td></tr></table>
<h3>Proposer sur le moment : I'll…</h3>
<p>Quand tu décides <b>tout de suite</b> de rendre service, utilise <span class="say">I'll</span> (= I will, vu au chapitre 10) :</p>
<ul>
<li><span class="say">Sit down, I'll make the coffee.</span> — Assieds-toi, je vais faire le café.</li>
<li><span class="say">Don't worry, I'll do the washing-up.</span> — Ne t'inquiète pas, je vais faire la vaisselle.</li>
<li><span class="say">I'll give you a lift to the station.</span> — Je vais te déposer à la gare.</li>
</ul>
<h3>Répondre à une offre</h3>
<ul>
<li>Accepter : <span class="say">Yes, please. That's very kind of you.</span> — Oui, volontiers. C'est très gentil de votre part.</li>
<li>Refuser : <span class="say">No, thanks. I'm fine.</span> — Non merci, ça va. · <span class="say">That's OK, I can do it.</span> — Ça va, je peux le faire.</li>
</ul>
<div class="callout key"><b>À retenir</b> <b>Shall I</b> + base verbale ? = je propose de le faire pour toi. On répond <span class="say">Yes, please.</span> ou <span class="say">No, thanks.</span></div>
<div class="callout warn"><b>Piège</b> « Tu veux que je t'aide ? » ne se traduit pas mot à mot : « Do you want I help you? » est faux. Dis <span class="say">Shall I help you?</span> ou <span class="say">Do you want me to help you?</span></div>`
    },
    {
      id: 'en15-s-suggerer', title: 'Faire une suggestion : Let\'s…, Shall we…?, How about…?',
      html: `
<p>Pour proposer de faire quelque chose <b>ensemble</b> (« et si on… ? », « allons… »), il y a quatre façons. Attention à la forme du verbe qui suit !</p>
<table><tr><th>Structure</th><th>Exemple</th></tr>
<tr><td><span class="say">Let's</span> + base verbale</td><td><span class="say">Let's go to the beach!</span><br>Allons à la plage !</td></tr>
<tr><td><span class="say">Shall we</span> + base verbale ?</td><td><span class="say">Shall we go for a walk?</span><br>Si on allait se promener ?</td></tr>
<tr><td><span class="say">Why don't we</span> + base verbale ?</td><td><span class="say">Why don't we invite the neighbours?</span><br>Pourquoi ne pas inviter les voisins ?</td></tr>
<tr><td><span class="say">How about</span> + verbe en <b>-ing</b> (ou un nom) ?</td><td><span class="say">How about going to the theatre?</span><br>Et si on allait au théâtre ?<br><span class="say">How about Saturday?</span><br>Et samedi, ça te va ?</td></tr></table>
<p><span class="say">Let's</span> = <span class="say">let us</span>. À la forme négative : <span class="say">Let's not go out tonight.</span> — Ne sortons pas ce soir.<br><span class="say">What about…?</span> s'emploie comme <span class="say">How about…?</span> : <span class="say">What about a picnic?</span> — Et si on faisait un pique-nique ?</p>
<p><span class="say">Shall we</span> sert aussi à organiser : <span class="say">What shall we do tonight?</span> (Qu'est-ce qu'on fait ce soir ?) · <span class="say">Where shall we meet?</span> (Où est-ce qu'on se retrouve ?)</p>
<h3>Répondre à une suggestion</h3>
<ul>
<li>Oui : <span class="say">Good idea!</span> (Bonne idée !) · <span class="say">That sounds great!</span> (Ça a l'air génial !) · <span class="say">Why not?</span> (Pourquoi pas ?) · <span class="say">Yes, let's!</span> (Oui, allons-y !)</li>
<li>Pas vraiment : <span class="say">I'm not sure.</span> (Je ne sais pas trop.) · <span class="say">I'd rather stay at home.</span> (Je préférerais rester à la maison.)</li>
</ul>
<div class="callout key"><b>À retenir</b> <b>Let's</b>, <b>Shall we</b>, <b>Why don't we</b> + base verbale · <b>How about</b> + verbe en <b>-ing</b>.</div>
<div class="callout warn"><b>Pièges</b> Pas de to : <span class="say">Let's go</span> (pas « Let's to go »). Après How about : <span class="say">How about going…?</span> (pas « How about go »). Et <span class="say">Why don't we…?</span> n'est pas une vraie question « pourquoi » : c'est une proposition.</div>`
    },
    {
      id: 'en15-s-inviter', title: 'Inviter : Would you like to…? I\'d rather…',
      html: `
<p>Pour <b>inviter</b> quelqu'un, la formule la plus courante est <span class="say">Would you like to…?</span> (Voudrais-tu… ? Aimeriez-vous… ?).</p>
<h3>Inviter</h3>
<ul>
<li><span class="say">Are you free on Saturday evening?</span> — Tu es libre samedi soir ?</li>
<li><span class="say">Have you got any plans for the weekend?</span> — Tu as des projets pour le week-end ?</li>
<li><span class="say">Would you like to come for dinner?</span> — Voudrais-tu venir dîner ?</li>
<li><span class="say">Would you like to join us?</span> — Veux-tu te joindre à nous ?</li>
<li><span class="say">There's a concert in the park on Sunday. Would you like to come?</span> — Il y a un concert dans le parc dimanche. Tu veux venir ?</li>
</ul>
<h3>would like : + nom, ou + to + verbe</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">Would you like a drink?</span></td><td>Voulez-vous quelque chose à boire ? (+ nom)</td></tr>
<tr><td><span class="say">Would you like to go out tonight?</span></td><td>Voudrais-tu sortir ce soir ? (+ <b>to</b> + verbe)</td></tr>
<tr><td><span class="say">I'd like to see the exhibition.</span></td><td>Je voudrais voir l'exposition.</td></tr>
<tr><td><span class="say">I'd love to!</span></td><td>Avec grand plaisir ! (mot à mot : j'adorerais)</td></tr></table>
<h3>I'd rather : je préférerais</h3>
<p><span class="say">I'd rather</span> (= <span class="say">I would rather</span>) + <b>base verbale sans to</b> = je préférerais.</p>
<ul>
<li><span class="say">Would you like tea or coffee?</span> — <span class="say">I'd rather have coffee, please.</span><br>Tu veux du thé ou du café ? — Je préférerais un café, s'il te plaît.</li>
<li><span class="say">I'd rather stay at home tonight.</span> — Je préférerais rester à la maison ce soir.</li>
<li><span class="say">I'd rather not.</span> — Je préférerais ne pas le faire.</li>
</ul>
<p>On peut dire aussi <span class="say">I'd prefer</span> + nom, ou + <b>to</b> + verbe : <span class="say">I'd prefer coffee.</span> · <span class="say">I'd prefer to stay at home.</span></p>
<div class="callout key"><b>À retenir</b> would like <b>to</b> + verbe (<span class="say">I'd like to come</span>) · would rather + verbe <b>sans to</b> (<span class="say">I'd rather stay</span>). Dans les deux cas, <b>'d</b> = would.</div>
<div class="callout warn"><b>Pièges</b> <span class="say">Would you like to come?</span> : n'oublie pas <b>to</b>. Mais <span class="say">I'd rather stay</span> : pas de to.<br><span class="say">Do you like dancing?</span> (Tu aimes danser ? = en général) ≠ <span class="say">Would you like to dance?</span> (Tu veux danser ? = une invitation, maintenant).</div>`
    },
    {
      id: 'en15-s-repondre', title: 'Accepter et refuser poliment',
      html: `
<p>Quand on t'invite, il faut savoir dire oui… et surtout savoir dire non <b>sans vexer</b>. En anglais, un « No. » tout seul paraît très sec.</p>
<h3>Accepter</h3>
<ul>
<li><span class="say">I'd love to!</span> — Avec grand plaisir !</li>
<li><span class="say">That would be lovely.</span> — Ce serait très agréable.</li>
<li><span class="say">That sounds great!</span> — Ça a l'air génial !</li>
<li><span class="say">Yes, thank you. That's very kind of you.</span> — Oui, merci. C'est très gentil de ta part.</li>
</ul>
<h3>Refuser poliment : la recette</h3>
<p>1. On remercie → 2. on s'excuse → 3. on donne une raison → 4. on propose autre chose.</p>
<p><span class="say">Thanks for asking, but I'm afraid I can't. I'm busy on Saturday. Maybe another time?</span><br>Merci de me le proposer, mais malheureusement je ne peux pas. Je suis pris samedi. Une autre fois, peut-être ?</p>
<ul>
<li><span class="say">I'd love to, but I'm busy that evening.</span> — J'aimerais beaucoup, mais je suis pris ce soir-là.</li>
<li><span class="say">I'm sorry, I've already got plans.</span> — Je suis désolé, j'ai déjà quelque chose de prévu.</li>
<li><span class="say">How about next week instead?</span> — Et la semaine prochaine, plutôt ?</li>
</ul>
<h3>I'm afraid… : malheureusement</h3>
<p>Tu connais <span class="say">I'm afraid</span> = j'ai peur. Mais devant une mauvaise nouvelle ou un refus, <span class="say">I'm afraid…</span> veut dire « <b>malheureusement</b> », « je regrette, mais… » : <span class="say">I'm afraid I can't come.</span> — Malheureusement, je ne peux pas venir.</p>
<div class="callout key"><b>À retenir</b> Pour refuser : <b>Thanks</b> + <b>I'm afraid I can't</b> + une raison + <b>Maybe another time?</b></div>
<div class="callout warn"><b>Piège : comprendre un refus poli</b> Les Anglais disent rarement « non » franchement. <span class="say">I'd love to, but…</span> (j'aimerais bien, mais…) ou <span class="say">That's a nice idea, but…</span> (c'est une bonne idée, mais…) veulent dire… <b>non</b> ! Écoute bien ce qui vient après <b>but</b>.</div>`
    },
    {
      id: 'en15-s-recevoir', title: 'Recevoir chez soi (et être invité)',
      html: `
<p>Recevoir des amis ou être invité chez des Anglais : voici les phrases qui reviennent à chaque fois.</p>
<h3>Celui qui reçoit</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">Welcome! Come in.</span></td><td>Bienvenue ! Entrez.</td></tr>
<tr><td><span class="say">Can I take your coat?</span></td><td>Je peux prendre votre manteau ?</td></tr>
<tr><td><span class="say">Please, sit down.</span> · <span class="say">Have a seat.</span></td><td>Asseyez-vous, je vous en prie.</td></tr>
<tr><td><span class="say">Make yourself at home.</span></td><td>Faites comme chez vous.</td></tr>
<tr><td><span class="say">Can I get you something to drink?</span></td><td>Je vous sers quelque chose à boire ?</td></tr>
<tr><td><span class="say">Help yourself!</span></td><td>Servez-vous !</td></tr>
<tr><td><span class="say">Dinner is ready!</span></td><td>Le dîner est prêt ! (À table !)</td></tr>
<tr><td><span class="say">Thank you for coming.</span></td><td>Merci d'être venus.</td></tr></table>
<h3>L'invité</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">Thank you for inviting me.</span></td><td>Merci de m'avoir invité.</td></tr>
<tr><td><span class="say">These flowers are for you.</span></td><td>Ces fleurs sont pour vous.</td></tr>
<tr><td><span class="say">What a lovely house!</span></td><td>Quelle jolie maison !</td></tr>
<tr><td><span class="say">This is delicious!</span></td><td>C'est délicieux !</td></tr>
<tr><td><span class="say">Shall I lay the table?</span></td><td>Je mets la table ?</td></tr>
<tr><td><span class="say">Thanks for a lovely evening.</span></td><td>Merci pour cette excellente soirée.</td></tr></table>
<p>Quand on lui offre un cadeau, la personne qui reçoit dit souvent : <span class="say">Oh, you shouldn't have!</span> — Oh, il ne fallait pas !</p>
<div class="callout key"><b>À retenir</b> <span class="say">Help yourself!</span> = Servez-vous ! · <span class="say">Make yourself at home.</span> = Faites comme chez vous. S'il y a plusieurs invités : <span class="say">yourselves</span> (<span class="say">Help yourselves!</span>).</div>
<div class="callout warn"><b>Piège</b> À table, on ne dit pas « Serve yourself! » mais <span class="say">Help yourself!</span>. Et « l'invité » se dit <span class="say">a guest</span>.</div>
<div class="callout tip"><b>Astuce culturelle</b> Au Royaume-Uni, on arrive rarement les mains vides : une bouteille de vin, des fleurs ou des chocolats. Et on remercie souvent encore le lendemain, par un petit message.</div>`
    },
    {
      id: 'en15-s-vocab', title: 'Vocabulaire : sorties, services, invitations',
      html: `
<p>Clique sur un mot pour l'entendre. Ces mots reviennent dans les exercices et les flashcards.</p>
<h3>Sorties et invitations</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">to invite</span> · <span class="say">an invitation</span></td><td>inviter · une invitation</td></tr>
<tr><td><span class="say">to go out</span></td><td>sortir</td></tr>
<tr><td><span class="say">a barbecue</span> · <span class="say">the theatre</span></td><td>un barbecue · le théâtre</td></tr>
<tr><td><span class="say">an exhibition</span></td><td>une exposition</td></tr>
<tr><td><span class="say">a picnic</span></td><td>un pique-nique</td></tr>
<tr><td><span class="say">to go for a walk</span></td><td>aller se promener</td></tr>
<tr><td><span class="say">to go for a drink</span></td><td>aller boire un verre</td></tr>
<tr><td><span class="say">to join</span></td><td>se joindre à, rejoindre</td></tr>
<tr><td><span class="say">to meet</span></td><td>retrouver (quelqu'un), se retrouver</td></tr>
<tr><td><span class="say">free</span></td><td>libre (pas occupé)</td></tr>
<tr><td><span class="say">plans</span></td><td>des projets, quelque chose de prévu</td></tr>
<tr><td><span class="say">together</span></td><td>ensemble</td></tr>
<tr><td><span class="say">an idea</span></td><td>une idée</td></tr></table>
<h3>Proposer, accepter, refuser</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">to offer</span> · <span class="say">to suggest</span></td><td>proposer, offrir · suggérer</td></tr>
<tr><td><span class="say">to accept</span></td><td>accepter</td></tr>
<tr><td><span class="say">to prefer</span> · <span class="say">I'd rather</span></td><td>préférer · je préférerais</td></tr>
<tr><td><span class="say">I'd love to</span></td><td>avec grand plaisir</td></tr>
<tr><td><span class="say">I'm afraid…</span></td><td>malheureusement…, je regrette mais…</td></tr>
<tr><td><span class="say">Why not?</span></td><td>Pourquoi pas ?</td></tr>
<tr><td><span class="say">no problem</span> · <span class="say">not at all</span></td><td>pas de problème · pas du tout</td></tr>
<tr><td><span class="say">certainly</span></td><td>certainement</td></tr>
<tr><td><span class="say">go ahead</span></td><td>allez-y, je vous en prie</td></tr>
<tr><td><span class="say">another time</span></td><td>une autre fois</td></tr>
<tr><td><span class="say">maybe</span> (= <span class="say">perhaps</span>)</td><td>peut-être</td></tr>
<tr><td><span class="say">instead</span></td><td>à la place, plutôt</td></tr></table>
<h3>Services entre voisins</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">a favour</span></td><td>un service (<span class="say">do someone a favour</span> = rendre un service)</td></tr>
<tr><td><span class="say">to give me a hand</span></td><td>me donner un coup de main</td></tr>
<tr><td><span class="say">to give me a lift</span></td><td>me déposer (en voiture)</td></tr>
<tr><td><span class="say">to borrow</span> ↔ <span class="say">to lend</span></td><td>emprunter ↔ prêter</td></tr>
<tr><td><span class="say">to look after</span></td><td>s'occuper de, garder (un enfant, un animal)</td></tr>
<tr><td><span class="say">to feed</span></td><td>nourrir, donner à manger à</td></tr>
<tr><td><span class="say">to keep an eye on</span></td><td>surveiller, jeter un œil sur</td></tr>
<tr><td><span class="say">the noise</span></td><td>le bruit</td></tr>
<tr><td><span class="say">to turn down</span></td><td>baisser (le son, le chauffage)</td></tr>
<tr><td><span class="say">to mind</span></td><td>être gêné, voir un inconvénient</td></tr></table>
<h3>Recevoir chez soi</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">a guest</span></td><td>un invité</td></tr>
<tr><td><span class="say">a present</span> (= <span class="say">a gift</span>)</td><td>un cadeau</td></tr>
<tr><td><span class="say">a flower</span></td><td>une fleur</td></tr>
<tr><td><span class="say">Welcome!</span></td><td>Bienvenue !</td></tr>
<tr><td><span class="say">to tidy up</span></td><td>ranger</td></tr>
<tr><td><span class="say">to lay the table</span></td><td>mettre la table</td></tr>
<tr><td><span class="say">to clear the table</span></td><td>débarrasser la table</td></tr></table>
<div class="callout warn"><b>Attention</b> <span class="say">to offer</span> = proposer : <span class="say">He offered to help.</span> — Il a proposé d'aider. Pour « offrir un cadeau », on dit plutôt <span class="say">to give a present</span> : <span class="say">I gave her a present.</span> — Je lui ai offert un cadeau.</div>`
    }
  ],

  words: [
    // Sorties et invitations
    { en: 'invite', fr: 'inviter', pos: 'v', cat: 'Sorties et invitations', sec: 'en15-s-inviter', ex: 'We want to invite our neighbours for dinner.', exFr: 'Nous voulons inviter nos voisins à dîner.', level: 1, note: 'inviter quelqu\'un à dîner = invite someone for dinner (ou to dinner).' },
    { en: 'invitation', fr: 'l\'invitation', pos: 'n', cat: 'Sorties et invitations', sec: 'en15-s-inviter', ex: 'Thank you for the invitation.', exFr: 'Merci pour l\'invitation.', level: 1 },
    { en: 'go out', fr: 'sortir', pos: 'v', cat: 'Sorties et invitations', sec: 'en15-s-suggerer', ex: 'Shall we go out tonight?', exFr: 'On sort ce soir ?', level: 1, note: 'go, went, gone : We went out last night. (Nous sommes sortis hier soir.)' },
    { en: 'barbecue', fr: 'le barbecue', pos: 'n', cat: 'Sorties et invitations', ex: 'We\'re having a barbecue in the garden.', exFr: 'Nous faisons un barbecue dans le jardin.', level: 1, note: 'faire un barbecue = have a barbecue.' },
    { en: 'theatre', fr: 'le théâtre', pos: 'n', cat: 'Sorties et invitations', alt: ['theater'], ex: 'How about going to the theatre?', exFr: 'Et si on allait au théâtre ?', level: 1, note: 'Orthographe américaine : theater.' },
    { en: 'exhibition', fr: 'l\'exposition', pos: 'n', cat: 'Sorties et invitations', ex: 'I\'d like to see the exhibition at the museum.', exFr: 'Je voudrais voir l\'exposition au musée.', level: 2, note: 'Le h ne se prononce pas : « ek-si-BI-cheunn ».' },
    { en: 'picnic', fr: 'le pique-nique', pos: 'n', cat: 'Sorties et invitations', ex: 'Let\'s have a picnic in the park.', exFr: 'Faisons un pique-nique dans le parc.', level: 1, note: 'faire un pique-nique = have a picnic.' },
    { en: 'go for a walk', fr: 'aller se promener', pos: 'x', cat: 'Sorties et invitations', sec: 'en15-s-suggerer', alt: ['take a walk', 'go for a stroll'], ex: 'Shall we go for a walk after lunch?', exFr: 'Si on allait se promener après le déjeuner ?', level: 1 },
    { en: 'go for a drink', fr: 'aller boire un verre', pos: 'x', cat: 'Sorties et invitations', ex: 'Would you like to go for a drink after work?', exFr: 'Tu veux aller boire un verre après le travail ?', level: 2 },
    { en: 'join', fr: 'se joindre à, rejoindre', pos: 'v', cat: 'Sorties et invitations', sec: 'en15-s-inviter', ex: 'Would you like to join us?', exFr: 'Veux-tu te joindre à nous ?', level: 2, note: 'Sans préposition : join us (pas « join to us »).' },
    { en: 'meet', fr: 'retrouver (quelqu\'un), se retrouver', pos: 'v', cat: 'Sorties et invitations', sec: 'en15-s-suggerer', ex: 'Let\'s meet at the station at six.', exFr: 'Retrouvons-nous à la gare à six heures.', level: 1, note: 'meet veut aussi dire « rencontrer » (Nice to meet you). Irrégulier : meet, met, met.' },
    { en: 'free', fr: 'libre (pas occupé)', pos: 'adj', cat: 'Sorties et invitations', sec: 'en15-s-inviter', ex: 'Are you free on Saturday?', exFr: 'Es-tu libre samedi ?', level: 1, note: 'free veut aussi dire « gratuit » : The museum is free.' },
    { en: 'plans', fr: 'les projets (ce qui est prévu)', pos: 'n', cat: 'Sorties et invitations', sec: 'en15-s-inviter', alt: ['plan'], ex: 'Have you got any plans for the weekend?', exFr: 'Tu as des projets pour le week-end ?', level: 2, note: 'Souvent au pluriel : I\'ve already got plans. (J\'ai déjà quelque chose de prévu.)' },
    { en: 'together', fr: 'ensemble', pos: 'adv', cat: 'Sorties et invitations', ex: 'Why don\'t we have lunch together?', exFr: 'Pourquoi ne pas déjeuner ensemble ?', level: 1 },
    { en: 'idea', fr: 'l\'idée', pos: 'n', cat: 'Sorties et invitations', sec: 'en15-s-suggerer', ex: 'That\'s a good idea!', exFr: 'C\'est une bonne idée !', level: 1, note: 'Prononciation : « aï-DI-eu ».' },
    // Proposer, accepter, refuser
    { en: 'offer', fr: 'proposer, offrir', pos: 'v', cat: 'Proposer, accepter, refuser', sec: 'en15-s-proposer', ex: 'He offered to help me.', exFr: 'Il a proposé de m\'aider.', level: 2, note: 'offer to + verbe = proposer de faire quelque chose.' },
    { en: 'suggest', fr: 'suggérer', pos: 'v', cat: 'Proposer, accepter, refuser', sec: 'en15-s-suggerer', ex: 'What do you suggest?', exFr: 'Qu\'est-ce que tu suggères ?', level: 2, note: 'Prononciation : « seu-DJEST ».' },
    { en: 'accept', fr: 'accepter', pos: 'v', cat: 'Proposer, accepter, refuser', sec: 'en15-s-repondre', ex: 'I\'m happy to accept your invitation.', exFr: 'Je suis heureux d\'accepter ton invitation.', level: 2 },
    { en: 'prefer', fr: 'préférer', pos: 'v', cat: 'Proposer, accepter, refuser', sec: 'en15-s-inviter', ex: 'I prefer tea to coffee.', exFr: 'Je préfère le thé au café.', level: 1, note: 'préférer A à B = prefer A to B. « Je préférerais » = I\'d rather ou I\'d prefer.' },
    { en: 'I\'d rather', fr: 'je préférerais', pos: 'x', cat: 'Proposer, accepter, refuser', sec: 'en15-s-inviter', alt: ['I would rather', 'I\'d prefer', 'I would prefer'], ex: 'I\'d rather stay at home tonight.', exFr: 'Je préférerais rester à la maison ce soir.', level: 2, note: 'I\'d rather + base verbale, sans to : I\'d rather go (pas « I\'d rather to go »).' },
    { en: 'I\'d love to', fr: 'avec grand plaisir (pour accepter)', pos: 'x', cat: 'Proposer, accepter, refuser', sec: 'en15-s-repondre', alt: ['I would love to'], ex: 'Would you like to come? — I\'d love to!', exFr: 'Tu veux venir ? — Avec grand plaisir !', level: 1, note: 'Le to reste tout seul à la fin : I\'d love to (sous-entendu : to come).' },
    { en: 'I\'m afraid', fr: 'malheureusement, je regrette (mais)', pos: 'x', cat: 'Proposer, accepter, refuser', sec: 'en15-s-repondre', ex: 'I\'m afraid I can\'t come.', exFr: 'Malheureusement, je ne peux pas venir.', level: 2, note: 'Devant un refus ou une mauvaise nouvelle, I\'m afraid ne veut pas dire « j\'ai peur ».' },
    { en: 'Why not?', fr: 'Pourquoi pas ?', pos: 'x', cat: 'Proposer, accepter, refuser', sec: 'en15-s-suggerer', ex: 'Shall we go to the beach? — Why not?', exFr: 'On va à la plage ? — Pourquoi pas ?', level: 1 },
    { en: 'no problem', fr: 'pas de problème', pos: 'x', cat: 'Proposer, accepter, refuser', sec: 'en15-s-demander', ex: 'Can you help me? — No problem!', exFr: 'Tu peux m\'aider ? — Pas de problème !', level: 1 },
    { en: 'not at all', fr: 'pas du tout', pos: 'x', cat: 'Proposer, accepter, refuser', sec: 'en15-s-permission', ex: 'Do you mind if I sit here? — Not at all.', exFr: 'Ça vous dérange si je m\'assieds ici ? — Pas du tout.', level: 1, note: 'Réponse à Do you mind…? : « pas du tout », donc vas-y.' },
    { en: 'certainly', fr: 'certainement', pos: 'adv', cat: 'Proposer, accepter, refuser', sec: 'en15-s-demander', ex: 'Could I have the bill, please? — Certainly, sir.', exFr: 'Pourrais-je avoir l\'addition ? — Certainement, monsieur.', level: 2, note: 'Une façon très polie de dire oui (serveur, vendeur…).' },
    { en: 'go ahead', fr: 'allez-y, je vous en prie', pos: 'x', cat: 'Proposer, accepter, refuser', sec: 'en15-s-permission', ex: 'Can I use your phone? — Sure, go ahead.', exFr: 'Je peux utiliser ton téléphone ? — Bien sûr, vas-y.', level: 2 },
    { en: 'another time', fr: 'une autre fois', pos: 'x', cat: 'Proposer, accepter, refuser', sec: 'en15-s-repondre', ex: 'I\'m busy tonight. Maybe another time?', exFr: 'Je suis pris ce soir. Une autre fois, peut-être ?', level: 1, note: 'another s\'écrit en un seul mot.' },
    { en: 'maybe', fr: 'peut-être', pos: 'adv', cat: 'Proposer, accepter, refuser', alt: ['perhaps'], ex: 'Maybe we can go out on Sunday.', exFr: 'Peut-être qu\'on peut sortir dimanche.', level: 1, note: 'perhaps veut dire la même chose.' },
    { en: 'instead', fr: 'à la place, plutôt', pos: 'adv', cat: 'Proposer, accepter, refuser', sec: 'en15-s-repondre', ex: 'I can\'t come on Friday. How about Saturday instead?', exFr: 'Je ne peux pas venir vendredi. Et samedi, plutôt ?', level: 2, note: 'Se place souvent à la fin de la phrase.' },
    // Services entre voisins
    { en: 'favour', fr: 'le service (rendre un service)', pos: 'n', cat: 'Services entre voisins', sec: 'en15-s-demander', alt: ['favor'], ex: 'Could you do me a favour?', exFr: 'Pourrais-tu me rendre un service ?', level: 2, note: 'rendre un service = do someone a favour (avec do, pas make). Orthographe américaine : favor.' },
    { en: 'give me a hand', fr: 'me donner un coup de main', pos: 'x', cat: 'Services entre voisins', sec: 'en15-s-demander', alt: ['lend me a hand'], ex: 'Could you give me a hand with these boxes?', exFr: 'Pourrais-tu me donner un coup de main avec ces cartons ?', level: 2 },
    { en: 'give me a lift', fr: 'me déposer (en voiture)', pos: 'x', cat: 'Services entre voisins', sec: 'en15-s-demander', alt: ['give me a ride', 'drive me'], ex: 'Can you give me a lift to the station?', exFr: 'Tu peux me déposer à la gare ?', level: 2, note: 'Au Royaume-Uni, a lift = un trajet en voiture (et aussi un ascenseur). En américain : a ride.' },
    { en: 'borrow', fr: 'emprunter', pos: 'v', cat: 'Services entre voisins', sec: 'en15-s-permission', ex: 'Can I borrow your umbrella?', exFr: 'Je peux emprunter ton parapluie ?', level: 1, note: 'borrow = prendre (emprunter) ; lend = donner (prêter).' },
    { en: 'lend', fr: 'prêter', pos: 'v', cat: 'Services entre voisins', sec: 'en15-s-permission', ex: 'Could you lend me your car?', exFr: 'Pourrais-tu me prêter ta voiture ?', level: 1, note: 'Irrégulier : lend, lent, lent. Prêter quelque chose à quelqu\'un = lend someone something.' },
    { en: 'look after', fr: 's\'occuper de, garder', pos: 'v', cat: 'Services entre voisins', sec: 'en15-s-demander', alt: ['take care of'], ex: 'Could you look after my dog this weekend?', exFr: 'Pourrais-tu garder mon chien ce week-end ?', level: 2, note: 'Garder un enfant, un animal = look after.' },
    { en: 'feed', fr: 'nourrir, donner à manger à', pos: 'v', cat: 'Services entre voisins', ex: 'Can you feed the cat tonight?', exFr: 'Tu peux donner à manger au chat ce soir ?', level: 2, note: 'Irrégulier : feed, fed, fed.' },
    { en: 'keep an eye on', fr: 'surveiller, jeter un œil sur', pos: 'x', cat: 'Services entre voisins', sec: 'en15-s-demander', ex: 'Could you keep an eye on my house this week?', exFr: 'Pourrais-tu surveiller ma maison cette semaine ?', level: 2, note: 'Mot à mot : « garder un œil sur ».' },
    { en: 'noise', fr: 'le bruit', pos: 'n', cat: 'Services entre voisins', ex: 'Sorry about the noise last night.', exFr: 'Désolé pour le bruit hier soir.', level: 2 },
    { en: 'turn down', fr: 'baisser (le son, le chauffage)', pos: 'v', cat: 'Services entre voisins', sec: 'en15-s-demander', ex: 'Could you turn the music down, please?', exFr: 'Pourriez-vous baisser la musique, s\'il vous plaît ?', level: 2, note: 'Le contraire : turn up (monter le son). Avec it, le petit mot it se met au milieu : turn it down.' },
    { en: 'mind', fr: 'être gêné, voir un inconvénient', pos: 'v', cat: 'Services entre voisins', sec: 'en15-s-permission', ex: 'Do you mind if I open the window?', exFr: 'Ça vous dérange si j\'ouvre la fenêtre ?', level: 2, note: 'Do you mind…? = Est-ce que ça vous gêne ? Pour dire « vas-y », on répond No, not at all.' },
    // Recevoir chez soi
    { en: 'guest', fr: 'l\'invité', pos: 'n', cat: 'Recevoir chez soi', sec: 'en15-s-recevoir', ex: 'We have guests for dinner tonight.', exFr: 'Nous avons des invités à dîner ce soir.', level: 1, note: 'Le u ne s\'entend pas : « guest » se prononce « gueste ».' },
    { en: 'present', fr: 'le cadeau', pos: 'n', cat: 'Recevoir chez soi', sec: 'en15-s-recevoir', alt: ['gift'], ex: 'I\'ve got a little present for you.', exFr: 'J\'ai un petit cadeau pour toi.', level: 1, note: 'On dit aussi gift. Accent sur la 1re syllabe : « PRÉ-zeunt ».' },
    { en: 'flower', fr: 'la fleur', pos: 'n', cat: 'Recevoir chez soi', sec: 'en15-s-recevoir', ex: 'These flowers are for you.', exFr: 'Ces fleurs sont pour toi.', level: 1 },
    { en: 'welcome', fr: 'bienvenue', pos: 'x', cat: 'Recevoir chez soi', sec: 'en15-s-recevoir', ex: 'Welcome to our home!', exFr: 'Bienvenue chez nous !', level: 1, note: 'Tu connais déjà You\'re welcome (de rien). Welcome! tout seul = Bienvenue !' },
    { en: 'tidy up', fr: 'ranger', pos: 'v', cat: 'Recevoir chez soi', alt: ['tidy'], ex: 'Shall I help you tidy up?', exFr: 'Tu veux que je t\'aide à ranger ?', level: 2 },
    { en: 'lay the table', fr: 'mettre la table', pos: 'x', cat: 'Recevoir chez soi', sec: 'en15-s-recevoir', alt: ['set the table'], ex: 'Can you lay the table, please?', exFr: 'Tu peux mettre la table, s\'il te plaît ?', level: 2, note: 'On dit aussi set the table (surtout en américain).' },
    { en: 'clear the table', fr: 'débarrasser la table', pos: 'x', cat: 'Recevoir chez soi', sec: 'en15-s-recevoir', ex: 'Shall I help you clear the table?', exFr: 'Tu veux que je t\'aide à débarrasser la table ?', level: 2, note: 'Le contraire : lay the table (mettre la table).' }
  ],

  phrases: [
    { en: 'Could you do me a favour?', fr: 'Pourrais-tu me rendre un service ?', alt: ['Can you do me a favour?', 'Could you do me a favor?', 'Can you do me a favor?'], cat: 'Demander un service', sec: 'en15-s-demander', note: 'rendre un service = do a favour (avec do).' },
    { en: 'Could you give me a hand?', fr: 'Pourrais-tu me donner un coup de main ?', alt: ['Can you give me a hand?', 'Could you lend me a hand?', 'Could you give me a hand, please?'], cat: 'Demander un service', sec: 'en15-s-demander' },
    { en: 'Could you look after my cat?', fr: 'Pourriez-vous garder mon chat ?', alt: ['Can you look after my cat?', 'Could you take care of my cat?', 'Could you look after my cat, please?'], cat: 'Demander un service', sec: 'en15-s-demander' },
    { en: 'Can I borrow your umbrella?', fr: 'Je peux emprunter ton parapluie ?', alt: ['Could I borrow your umbrella?', 'May I borrow your umbrella?', 'Can you lend me your umbrella?', 'Could you lend me your umbrella?'], cat: 'Demander la permission', sec: 'en15-s-permission', note: 'emprunter = borrow ; prêter = lend.' },
    { en: 'Do you mind if I open the window?', fr: 'Ça vous dérange si j\'ouvre la fenêtre ?', alt: ['Would you mind if I opened the window?', 'Is it OK if I open the window?'], cat: 'Demander la permission', sec: 'en15-s-permission' },
    { en: 'No, not at all. Go ahead.', fr: 'Non, pas du tout. Allez-y.', alt: ['Not at all. Go ahead.', 'No, not at all, go ahead.'], cat: 'Demander la permission', sec: 'en15-s-permission', note: 'La bonne réponse à « Do you mind if…? » pour dire d\'accord.' },
    { en: 'Shall I carry your bag?', fr: 'Voulez-vous que je porte votre sac ?', alt: ['Do you want me to carry your bag?', 'Would you like me to carry your bag?', 'Can I carry your bag?'], cat: 'Proposer son aide', sec: 'en15-s-proposer' },
    { en: 'Let\'s go to the cinema.', fr: 'Allons au cinéma.', alt: ['Let\'s go to the cinema!', 'Let\'s go to the movies.'], cat: 'Faire une suggestion', sec: 'en15-s-suggerer' },
    { en: 'Shall we go for a walk?', fr: 'Si on allait se promener ?', alt: ['How about going for a walk?', 'Why don\'t we go for a walk?', 'What about going for a walk?'], cat: 'Faire une suggestion', sec: 'en15-s-suggerer' },
    { en: 'Why don\'t we have lunch together?', fr: 'Pourquoi ne pas déjeuner ensemble ?', alt: ['Why don\'t we eat lunch together?', 'Why not have lunch together?'], cat: 'Faire une suggestion', sec: 'en15-s-suggerer' },
    { en: 'How about Saturday?', fr: 'Et samedi, ça te va ?', alt: ['What about Saturday?', 'How about on Saturday?'], cat: 'Faire une suggestion', sec: 'en15-s-suggerer' },
    { en: 'Good idea!', fr: 'Bonne idée !', alt: ['That\'s a good idea!', 'Great idea!', 'What a good idea!'], cat: 'Faire une suggestion', sec: 'en15-s-suggerer' },
    { en: 'Are you free on Saturday evening?', fr: 'Tu es libre samedi soir ?', alt: ['Are you free on Saturday night?', 'Are you free Saturday evening?', 'Are you free this Saturday evening?'], cat: 'Inviter', sec: 'en15-s-inviter' },
    { en: 'Would you like to come for dinner?', fr: 'Voudriez-vous venir dîner ?', alt: ['Would you like to come to dinner?', 'Would you like to come over for dinner?', 'Would you like to come round for dinner?'], cat: 'Inviter', sec: 'en15-s-inviter' },
    { en: 'I\'d love to, thank you.', fr: 'Avec plaisir, merci.', alt: ['I would love to, thank you.', 'I\'d love to, thanks.', 'I\'d love to. Thank you.'], cat: 'Accepter et refuser', sec: 'en15-s-repondre' },
    { en: 'I\'m afraid I can\'t.', fr: 'Malheureusement, je ne peux pas.', alt: ['I\'m sorry, I can\'t.', 'Unfortunately, I can\'t.', 'I\'m afraid I cannot.'], cat: 'Accepter et refuser', sec: 'en15-s-repondre', note: 'Ici, I\'m afraid = malheureusement (pas « j\'ai peur »).' },
    { en: 'Maybe another time.', fr: 'Une autre fois, peut-être.', alt: ['Perhaps another time.', 'Another time, maybe.', 'Maybe next time.'], cat: 'Accepter et refuser', sec: 'en15-s-repondre' },
    { en: 'That sounds great!', fr: 'Ça a l\'air génial !', alt: ['That sounds good!', 'Sounds great!', 'Sounds good!', 'That sounds lovely!'], cat: 'Accepter et refuser', sec: 'en15-s-repondre' },
    { en: 'I\'d rather stay at home.', fr: 'Je préférerais rester à la maison.', alt: ['I would rather stay at home.', 'I\'d prefer to stay at home.', 'I\'d rather stay home.'], cat: 'Accepter et refuser', sec: 'en15-s-inviter', note: 'I\'d rather + base verbale, sans to.' },
    { en: 'Come in and sit down.', fr: 'Entrez et asseyez-vous.', alt: ['Come in and have a seat.', 'Come in and take a seat.', 'Come in, sit down.'], cat: 'Recevoir chez soi', sec: 'en15-s-recevoir' },
    { en: 'Make yourself at home.', fr: 'Faites comme chez vous.', alt: ['Make yourselves at home.'], cat: 'Recevoir chez soi', sec: 'en15-s-recevoir' },
    { en: 'Help yourself!', fr: 'Servez-vous !', alt: ['Help yourselves!'], cat: 'Recevoir chez soi', sec: 'en15-s-recevoir' },
    { en: 'Can I get you something to drink?', fr: 'Je vous sers quelque chose à boire ?', alt: ['Would you like something to drink?', 'Can I get you a drink?', 'Would you like a drink?'], cat: 'Recevoir chez soi', sec: 'en15-s-recevoir' },
    { en: 'Thank you for inviting me.', fr: 'Merci de m\'avoir invité.', alt: ['Thanks for inviting me.', 'Thank you for the invitation.', 'Thank you for having me.'], cat: 'Recevoir chez soi', sec: 'en15-s-recevoir' },
    { en: 'Thanks for a lovely evening.', fr: 'Merci pour cette excellente soirée.', alt: ['Thank you for a lovely evening.', 'Thanks for a wonderful evening.', 'Thank you for a wonderful evening.', 'Thanks for a great evening.'], cat: 'Recevoir chez soi', sec: 'en15-s-recevoir' }
  ],

  quiz: [
    // Demander un service
    { id: 'en15-q-01', q: 'Tu demandes poliment à un inconnu de t\'aider. Que dis-tu ?', choices: ['You can help me?', 'Help me.', 'Could you help me, please?', 'Could you to help me?'], answer: 2, topic: 'Demander un service', sec: 'en15-s-demander',
      why: { 0: 'Ce n\'est pas une vraie question : le petit verbe doit venir avant le sujet (Can you…? / Could you…?).', 1: 'C\'est un ordre : sans could ni please, cela paraît sec.', 3: 'Jamais de « to » après could.' },
      explain: 'Demande polie : **Could you** + base verbale + **please** ? → **Could you help me, please?** (Pourriez-vous m\'aider, s\'il vous plaît ?)', say: 'Could you help me, please?', level: 1 },
    { id: 'en15-q-02', q: 'Traduis « Tu peux me donner un coup de main ? »', choices: ['Can you me give a hand?', 'Do you can give me a hand?', 'Can you give a hand me?', 'Can you give me a hand?'], answer: 3, topic: 'Demander un service', sec: 'en15-s-demander',
      why: { 0: 'En anglais, me se place **après** le verbe : give **me**.', 1: 'Pas de do avec can : **Can you**…?', 2: 'L\'ordre est give + **me** + a hand.' },
      explain: 'Le petit mot **me** se place après le verbe : Can you **give me** a hand? (Tu peux me donner un coup de main ?)', say: 'Can you give me a hand?', level: 1 },
    { id: 'en15-q-03', q: 'Complète : Could you ___ me a favour?', choices: ['make', 'give', 'do', 'take'], answer: 2, topic: 'Demander un service', sec: 'en15-s-demander',
      why: { 0: 'Piège du français « faire » : rendre un service se dit avec **do**.', 1: '« give me a hand » existe, mais avec favour, le verbe est **do**.', 3: '« take » veut dire prendre.' },
      explain: 'Rendre un service = **do** someone a favour. → Could you **do** me a favour? (Pourrais-tu me rendre un service ?)', say: 'Could you do me a favour?', level: 2 },
    // Demander la permission
    { id: 'en15-q-04', q: 'On te demande « Do you mind if I open the window? ». Tu es d\'accord. Que réponds-tu ?', choices: ['Yes, I do.', 'No, not at all.', 'Yes, I mind.', 'No, you can\'t.'], answer: 1, topic: 'Demander la permission', sec: 'en15-s-permission',
      why: { 0: '« Yes, I do » = oui, ça me dérange : c\'est un refus !', 2: '« Yes, I mind » = oui, ça me gêne : c\'est un refus (et la réponse naturelle serait plutôt « Yes, I do »).', 3: '« No, you can\'t » = non, tu ne peux pas : c\'est un refus.' },
      explain: '**mind** = être gêné. « Est-ce que ça vous gêne ? » → **No, not at all.** (Non, pas du tout = vas-y.)', say: 'No, not at all.', level: 2 },
    { id: 'en15-q-05', q: 'Complète : Do you mind if I ___ here?', choices: ['sit', 'will sit', 'to sit', 'sitting'], answer: 0, topic: 'Demander la permission', sec: 'en15-s-permission',
      why: { 1: 'Après if, on ne met pas will : le présent simple suffit.', 2: 'Après « if I », il faut un verbe conjugué, pas « to ».', 3: '-ing va après « Would you mind » (Would you mind sitting…?), pas après « if I ».' },
      explain: '**Do you mind if I** + présent simple ? → Do you mind if I **sit** here? (Ça vous dérange si je m\'assieds ici ?)', say: 'Do you mind if I sit here?', level: 2 },
    { id: 'en15-q-06', q: 'Complète : Can I ___ your umbrella? (emprunter)', choices: ['lend', 'borrow', 'take me', 'give'], answer: 1, topic: 'Demander la permission', sec: 'en15-s-permission',
      why: { 0: '« lend » = prêter (c\'est l\'autre qui prête). Emprunter = borrow.', 2: '« take me » n\'a pas de sens ici.', 3: '« give » = donner.' },
      explain: 'Emprunter = **borrow** (je prends) ; prêter = lend (je donne). → Can I **borrow** your umbrella? (Je peux emprunter ton parapluie ?)', say: 'Can I borrow your umbrella?', level: 1 },
    { id: 'en15-q-07', q: 'Complète : Could you ___ me ten pounds? (prêter)', choices: ['borrow', 'lend', 'lent', 'borrowing'], answer: 1, topic: 'Demander la permission', sec: 'en15-s-permission',
      why: { 0: '« borrow » = emprunter. On ne dit jamais « borrow me ».', 2: '« lent » est le prétérit de lend. Après could : la base, lend.', 3: 'Après could, la base verbale, pas -ing.' },
      explain: 'Prêter = **lend** (lend, lent, lent). → Could you **lend** me ten pounds? (Pourrais-tu me prêter dix livres ?)', say: 'Could you lend me ten pounds?', level: 1 },
    // Proposer son aide
    { id: 'en15-q-08', q: 'Une dame a une lourde valise. Tu proposes de la porter :', choices: ['Do you want I carry your suitcase?', 'Shall I carry your suitcase?', 'Shall you carry my suitcase?', 'I carry your suitcase?'], answer: 1, topic: 'Proposer son aide', sec: 'en15-s-proposer',
      why: { 0: 'Calque du français « Vous voulez que je… » : c\'est faux. Il faudrait « Do you want me to carry… ».', 2: 'Ici, c\'est elle qui porterait ta valise !', 3: 'Il manque le petit verbe de la question : Shall I…?' },
      explain: 'Pour proposer ton aide : **Shall I** + base verbale ? → **Shall I carry your suitcase?** (Voulez-vous que je porte votre valise ?)', say: 'Shall I carry your suitcase?', level: 1 },
    { id: 'en15-q-09', q: 'Une amie a les bras chargés. Tu décides sur le moment de l\'aider :', choices: ['I help you!', 'I\'ll help you!', 'I helped you!', 'I\'m help you!'], answer: 1, topic: 'Proposer son aide', sec: 'en15-s-proposer',
      why: { 0: 'Le présent simple sert aux habitudes. Pour une décision sur le moment : I\'ll.', 2: '« helped » est le passé.', 3: '« I\'m help » n\'existe pas.' },
      explain: 'Décision prise **sur le moment** : **I\'ll** (= I will) + base verbale. → **I\'ll help you!** (Je vais t\'aider !)', say: 'I\'ll help you!', level: 1 },
    // Faire une suggestion
    { id: 'en15-q-10', q: 'Complète : Let\'s ___ to the beach!', choices: ['to go', 'go', 'going', 'goes'], answer: 1, topic: 'Faire une suggestion', sec: 'en15-s-suggerer',
      why: { 0: 'Jamais de « to » après let\'s.', 2: 'Après let\'s, la base verbale (pas -ing).', 3: 'Pas de -s après let\'s.' },
      explain: '**Let\'s** + base verbale = allons…, faisons… → **Let\'s go** to the beach! (Allons à la plage !)', say: 'Let\'s go to the beach!', level: 1 },
    { id: 'en15-q-11', q: 'Complète : How about ___ a picnic on Sunday?', choices: ['have', 'to have', 'we have', 'having'], answer: 3, topic: 'Faire une suggestion', sec: 'en15-s-suggerer',
      why: { 0: 'Après How about, le verbe prend -ing.', 1: 'Pas de « to » après How about : le verbe prend -ing.', 2: 'How about n\'est pas suivi d\'un sujet : How about + -ing.' },
      explain: '**How about** + verbe en **-ing** ? → How about **having** a picnic on Sunday? (Et si on faisait un pique-nique dimanche ?)', say: 'How about having a picnic on Sunday?', level: 2 },
    { id: 'en15-q-12', q: 'Complète : Why ___ we go to the theatre tonight?', choices: ['don\'t', 'not', 'doesn\'t', 'aren\'t'], answer: 0, topic: 'Faire une suggestion', sec: 'en15-s-suggerer',
      why: { 1: '« Why not » s\'emploie sans sujet : Why not go…? Avec we, il faut don\'t.', 2: '« doesn\'t » va avec he, she, it. Avec we : don\'t.', 3: '« aren\'t » ne va pas avec une base verbale (go).' },
      explain: '**Why don\'t we** + base verbale ? = Pourquoi ne pas… ? (une proposition). → Why **don\'t** we go to the theatre tonight? (Et si on allait au théâtre ce soir ?)', say: 'Why don\'t we go to the theatre tonight?', level: 2 },
    { id: 'en15-q-13', q: '« Shall we meet at the station? » veut dire :', choices: ['Nous devons nous retrouver à la gare.', 'Nous nous sommes retrouvés à la gare.', 'On se retrouve à la gare ?', 'Tu viens me chercher à la gare ?'], answer: 2, topic: 'Faire une suggestion', sec: 'en15-s-suggerer',
      why: { 0: '« Nous devons » se dirait « We must » ou « We have to ».', 1: 'Le passé serait « We met at the station ».', 3: 'Ce serait « Can you pick me up at the station? ».' },
      explain: '**Shall we** + verbe ? = on… ? (une proposition à faire ensemble). → Shall we meet at the station? (On se retrouve à la gare ?)', say: 'Shall we meet at the station?', level: 2 },
    // Inviter
    { id: 'en15-q-14', q: 'Complète : Would you like ___ to dinner on Friday?', choices: ['come', 'coming', 'to come', 'that you come'], answer: 2, topic: 'Inviter', sec: 'en15-s-inviter',
      why: { 0: 'Après would like, il faut **to** devant le verbe.', 1: 'Après would like : to + base, pas -ing.', 3: 'Calque du français « que tu viennes » : impossible en anglais.' },
      explain: '**Would you like to** + base verbale ? → Would you like **to come** to dinner on Friday? (Voudrais-tu venir dîner vendredi ?)', say: 'Would you like to come to dinner on Friday?', level: 1 },
    { id: 'en15-q-15', q: 'Complète : I\'d rather ___ at home tonight.', choices: ['to stay', 'stay', 'staying', 'stayed'], answer: 1, topic: 'Inviter', sec: 'en15-s-inviter',
      why: { 0: 'Pas de « to » après I\'d rather (contrairement à I\'d like to).', 2: 'Après I\'d rather, la base verbale, pas -ing.', 3: 'Pas de passé ici : la base verbale.' },
      explain: '**I\'d rather** + base verbale **sans to** = je préférerais. → I\'d rather **stay** at home tonight. (Je préférerais rester à la maison ce soir.)', say: 'I\'d rather stay at home tonight.', level: 2 },
    { id: 'en15-q-16', q: '« Would you like tea or coffee? » Tu préfères le café. Que réponds-tu ?', choices: ['I like coffee.', 'I\'d rather to have coffee.', 'I\'m rather coffee.', 'I\'d rather have coffee, please.'], answer: 3, topic: 'Inviter', sec: 'en15-s-inviter',
      why: { 0: '« I like coffee » = j\'aime le café (en général) : cela ne répond pas vraiment à l\'offre.', 1: 'Pas de « to » après I\'d rather.', 2: '« I\'m rather » n\'existe pas : I\'d = I would.' },
      explain: '**I\'d rather** + base verbale. → **I\'d rather have coffee, please.** (Je préférerais un café, s\'il vous plaît.)', say: 'I\'d rather have coffee, please.', level: 2 },
    { id: 'en15-q-17', q: '« Would you like to dance? » veut dire :', choices: ['Tu veux danser ?', 'Tu aimes danser ?', 'Tu sais danser ?', 'Tu as dansé ?'], answer: 0, topic: 'Inviter', sec: 'en15-s-inviter',
      why: { 1: '« Tu aimes danser ? » (en général) se dit « Do you like dancing? ».', 2: '« Tu sais danser ? » se dit « Can you dance? ».', 3: 'Ce serait « Did you dance? ».' },
      explain: '**Would you like to…?** = une invitation, maintenant : Tu veux… ? → Would you like to dance? (Tu veux danser ?)', say: 'Would you like to dance?', level: 1 },
    // Accepter et refuser
    { id: 'en15-q-18', q: 'Ton voisin t\'invite à son barbecue. Tu acceptes avec enthousiasme :', choices: ['I\'m afraid I can\'t.', 'I\'d love to!', 'Maybe another time.', 'I love.'], answer: 1, topic: 'Accepter et refuser', sec: 'en15-s-repondre',
      why: { 0: '« I\'m afraid I can\'t » = malheureusement je ne peux pas : c\'est un refus.', 2: '« Maybe another time » = une autre fois peut-être : c\'est un refus.', 3: '« I love » tout seul ne se dit pas : I\'d love **to**.' },
      explain: 'Pour accepter avec plaisir : **I\'d love to!** (Avec grand plaisir !) Le to reste à la fin.', say: 'I\'d love to!', level: 1 },
    { id: 'en15-q-19', q: 'Quelqu\'un te dit « I\'d love to, but I\'m afraid I\'m busy on Saturday. » Cette personne…', choices: ['accepte l\'invitation', 'a peur de venir', 'propose de venir samedi', 'refuse poliment l\'invitation'], answer: 3, topic: 'Accepter et refuser', sec: 'en15-s-repondre',
      why: { 0: 'Écoute ce qui vient après **but** : « I\'m busy » = je suis pris. C\'est un non.', 1: 'Ici, **I\'m afraid** veut dire « malheureusement », pas « j\'ai peur ».', 2: 'Elle dit justement qu\'elle est prise (busy) samedi.' },
      explain: '« J\'aimerais beaucoup, **mais** malheureusement je suis pris samedi » : c\'est un **refus poli**. I\'d love to, **but**… = non.', say: 'I\'d love to, but I\'m afraid I\'m busy on Saturday.', level: 2 },
    { id: 'en15-q-20', q: 'Quelle est la façon la plus polie de refuser une invitation ?', choices: ['No. I don\'t want.', 'No, I refuse.', 'Thanks for asking, but I\'m afraid I can\'t.', 'I can\'t. Bye.'], answer: 2, topic: 'Accepter et refuser', sec: 'en15-s-repondre',
      why: { 0: 'Très sec, et incorrect (il faudrait « I don\'t want to »).', 1: '« I refuse » sonne dur, presque fâché.', 3: 'Sans merci ni excuse, c\'est très sec.' },
      explain: 'On remercie, puis on s\'excuse : **Thanks for asking, but I\'m afraid I can\'t.** (Merci de me le proposer, mais malheureusement je ne peux pas.)', say: 'Thanks for asking, but I\'m afraid I can\'t.', level: 1 },
    // Recevoir chez soi
    { id: 'en15-q-21', q: 'Tes invités arrivent. Pour dire « Faites comme chez vous » :', choices: ['Do like at your home.', 'You are at home.', 'Make yourselves at home.', 'Feel at your house.'], answer: 2, topic: 'Recevoir chez soi', sec: 'en15-s-recevoir',
      why: { 0: 'Calque du français : ça ne se dit pas en anglais.', 1: '« You are at home » = vous êtes à la maison (une simple information).', 3: 'Ça ne se dit pas. L\'expression est « Make yourself (yourselves) at home ».' },
      explain: 'Expression toute faite : **Make yourself at home** (à plusieurs : **yourselves**). (Faites comme chez vous.)', say: 'Make yourselves at home.', level: 1 },
    // Compréhension orale
    { id: 'en15-q-22', q: 'Écoute. Que demande la personne ?', listen: true, say: 'Could you look after my cat this weekend?', choices: ['De chercher son chat', 'De garder son chat ce week-end', 'De nourrir son chien demain', 'D\'acheter un chat'], answer: 1, topic: 'Compréhension orale', sec: 'en15-s-demander',
      why: { 0: 'Chercher se dirait « look for ». Ici : **look after** = s\'occuper de, garder.', 2: 'Chien = dog, et demain = tomorrow. On entend **cat** et **this weekend**.', 3: 'Acheter = buy.' },
      explain: '**look after** = s\'occuper de, garder. → Could you look after my cat this weekend? (Pourrais-tu garder mon chat ce week-end ?)', level: 2 },
    { id: 'en15-q-23', q: 'Écoute. Que propose la personne ?', listen: true, say: 'Why don\'t we have lunch together on Sunday?', choices: ['De dîner ensemble samedi', 'De faire un pique-nique dimanche', 'De déjeuner ensemble dimanche', 'De déjeuner au restaurant lundi'], answer: 2, topic: 'Compréhension orale', sec: 'en15-s-suggerer',
      why: { 0: 'Dîner = dinner, samedi = Saturday. On entend **lunch** et **Sunday**.', 1: 'Pique-nique = picnic. On entend **have lunch**.', 3: 'Lundi = Monday. On entend **Sunday**.' },
      explain: '**Why don\'t we…?** = pourquoi ne pas… ? → Why don\'t we have lunch together on Sunday? (Pourquoi ne pas déjeuner ensemble dimanche ?)', level: 2 },
    { id: 'en15-q-24', q: 'Écoute. La personne accepte-t-elle l\'invitation ?', listen: true, say: 'Thank you for asking, but I\'m afraid I can\'t come.', choices: ['Oui, avec plaisir', 'Elle ne sait pas encore', 'Oui, mais elle arrivera en retard', 'Non, elle refuse poliment'], answer: 3, topic: 'Compréhension orale', sec: 'en15-s-repondre',
      why: { 0: 'Elle dit « I\'m afraid I **can\'t** come » : elle ne peut pas venir.', 1: 'Elle est claire : « I can\'t come ».', 2: 'En retard se dirait « late ». Elle dit « I can\'t come ».' },
      explain: '**I\'m afraid I can\'t come** = malheureusement, je ne peux pas venir. Elle remercie d\'abord : Thank you for asking. C\'est un refus poli.', level: 2 },
    { id: 'en15-q-25', q: 'Écoute. Que demande la personne ?', listen: true, say: 'Do you mind if I use your phone?', choices: ['Si elle peut utiliser le téléphone', 'Si on peut lui prêter de l\'argent', 'Qu\'on l\'appelle plus tard', 'Où est le téléphone'], answer: 0, topic: 'Compréhension orale', sec: 'en15-s-permission',
      why: { 1: 'L\'argent = money. On entend **your phone**.', 2: 'Ce serait « Can you call me later? ».', 3: 'Ce serait « Where is the phone? ».' },
      explain: '**Do you mind if I…?** = Ça vous dérange si je… ? → Do you mind if I use your phone? (Ça vous dérange si j\'utilise votre téléphone ?)', level: 2 }
  ],

  exercises: [
    // Demander un service
    { id: 'en15-x-01', prompt: 'Rends cette demande polie avec « Could » : Help me with my bags.', answers: ['Could you help me with my bags, please?', 'Could you help me with my bags?', 'Could you please help me with my bags?'], topic: 'Demander un service', sec: 'en15-s-demander',
      hint: 'Could + you + base verbale… + please ?',
      explain: 'Demande polie : **Could you** + base verbale + **please** ? → **Could you help me with my bags, please?** (Pourriez-vous m\'aider avec mes sacs, s\'il vous plaît ?)',
      rule: 'Could you + base verbale (sans to), please ?',
      mistakes: [{ text: 'Could you to help me with my bags, please?', msg: 'Pas de « to » après could : Could you **help** me…' }, { text: 'You could help me with my bags, please?', msg: 'Dans une question, **could** passe **avant** le sujet : **Could you** help me…?' }],
      say: 'Could you help me with my bags, please?', level: 1 },
    { id: 'en15-x-02', prompt: 'Traduis : Tu peux me rendre un service ?', answers: ['Can you do me a favour?', 'Could you do me a favour?', 'Can you do me a favor?', 'Could you do me a favor?'], topic: 'Demander un service', sec: 'en15-s-demander',
      hint: 'rendre un service = do someone a favour',
      explain: 'Rendre un service = **do** someone a **favour**. → **Can you do me a favour?** (Tu peux me rendre un service ?)',
      rule: 'do someone a favour = rendre un service (avec do, pas make)',
      mistakes: [{ text: 'Can you make me a favour?', msg: 'Rendre un service se dit avec **do** (pas make) : Can you **do** me a favour?' }, { text: 'Could you make me a favour?', msg: 'Rendre un service se dit avec **do** (pas make) : Could you **do** me a favour?' }, { text: 'Can you me do a favour?', msg: 'Le petit mot **me** se place **après** le verbe : Can you **do me** a favour?' }],
      say: 'Can you do me a favour?', level: 2 },
    { id: 'en15-x-03', prompt: 'Traduis : Pourriez-vous me donner un coup de main ?', answers: ['Could you give me a hand?', 'Could you lend me a hand?', 'Could you give me a hand, please?'], topic: 'Demander un service', sec: 'en15-s-demander',
      hint: 'donner un coup de main = give someone a hand',
      explain: 'L\'expression est **give someone a hand**. → **Could you give me a hand?** (Pourriez-vous me donner un coup de main ?)',
      rule: 'Could you + verbe + me… ? (me après le verbe)',
      mistakes: [{ text: 'Could you me give a hand?', msg: 'En anglais, **me** se place **après** le verbe : Could you **give me** a hand?' }, { text: 'Could you help me a hand?', msg: 'L\'expression est **give** me a hand (donner un coup de main).' }],
      say: 'Could you give me a hand?', level: 2 },
    // Demander la permission
    { id: 'en15-x-04', prompt: 'Complète (Ça vous dérange si je m\'assieds ici ?) : Do you ___ if I sit here?', answers: ['mind'], topic: 'Demander la permission', sec: 'en15-s-permission', strict: true,
      hint: 'Le verbe qui veut dire « être gêné ».',
      explain: '« Ça vous dérange si… ? » = **Do you mind if…?** → Do you **mind** if I sit here?',
      rule: 'Do you mind if I + présent ? = Ça vous dérange si je… ?',
      mistakes: [{ text: 'disturb', msg: 'On ne dit pas « Do you disturb » : « ça vous dérange » = Do you **mind**…?' }, { text: 'bother', msg: 'On ne dit pas « Do you bother » : l\'expression est Do you **mind** if…?' }],
      say: 'Do you mind if I sit here?', level: 2 },
    { id: 'en15-x-05', prompt: 'On te demande « Do you mind if I open the window? ». Réponds que ça ne te dérange pas du tout.', answers: ['No, not at all.', 'Not at all.', 'No, go ahead.', 'Not at all, go ahead.', 'No, not at all. Go ahead.', 'Of course not.', 'No, of course not.'], topic: 'Demander la permission', sec: 'en15-s-permission',
      hint: 'mind = être gêné. Tu n\'es PAS gêné…',
      explain: 'La question veut dire « Est-ce que ça vous gêne ? ». Pour dire d\'accord : **No, not at all.** (Non, pas du tout.) On peut ajouter **Go ahead.** (Allez-y.)',
      rule: 'Do you mind…? → No, not at all. (= d\'accord)',
      mistakes: [{ text: 'Yes, I do.', msg: '« Yes, I do » = oui, ça me dérange : c\'est un **refus** ! Pour dire d\'accord : **No, not at all.**' }, { text: 'Yes, I mind.', msg: '« Yes, I mind » = oui, ça me gêne : c\'est un refus. Pour dire d\'accord : **No, not at all.**' }, { text: 'Yes, of course.', msg: 'Attention : « mind » = être gêné. « Yes » voudrait dire que ça te gêne. Réponds **No, not at all** (ou Of course not).' }],
      say: 'No, not at all.', level: 2 },
    { id: 'en15-x-06', prompt: 'Complète : Do you mind if I ___ (use) your phone?', answers: ['use'], topic: 'Demander la permission', sec: 'en15-s-permission', strict: true,
      hint: 'Après if : le présent simple.',
      explain: 'Après **if**, le présent simple : Do you mind if I **use** your phone? (Ça vous dérange si j\'utilise votre téléphone ?)',
      rule: 'Do you mind if I + présent simple ?',
      mistakes: [{ text: 'will use', msg: 'Après **if**, pas de will : le présent simple suffit → if I **use**.' }, { text: 'to use', msg: 'Après « if I », il faut le verbe conjugué, sans to : if I **use**.' }, { text: 'using', msg: 'Le -ing va après « Would you mind » (Would you mind using…?). Après « if I » : **use**.' }],
      say: 'Do you mind if I use your phone?', level: 2 },
    { id: 'en15-x-07', prompt: 'Complète avec borrow ou lend : Can I ___ your umbrella?', answers: ['borrow'], topic: 'Demander la permission', sec: 'en15-s-permission', strict: true,
      hint: 'C\'est toi qui prends le parapluie.',
      explain: 'Je prends = j\'emprunte = **borrow**. → Can I **borrow** your umbrella? (Je peux emprunter ton parapluie ?)',
      rule: 'borrow = emprunter (je prends) · lend = prêter (je donne)',
      mistakes: [{ text: 'lend', msg: '« lend » = prêter (c\'est l\'autre qui donne). Ici, tu **empruntes** : **borrow**.' }, { text: 'take', msg: '« take » = prendre, mais « emprunter » se dit **borrow** : Can I borrow your umbrella?' }],
      say: 'Can I borrow your umbrella?', level: 1 },
    { id: 'en15-x-08', prompt: 'Complète avec borrow ou lend : Could you ___ me ten pounds?', answers: ['lend'], topic: 'Demander la permission', sec: 'en15-s-permission', strict: true,
      hint: 'C\'est l\'autre personne qui donne l\'argent.',
      explain: 'L\'autre donne = il prête = **lend**. → Could you **lend** me ten pounds? (Pourrais-tu me prêter dix livres ?)',
      rule: 'lend someone something = prêter quelque chose à quelqu\'un',
      mistakes: [{ text: 'borrow', msg: '« borrow » = emprunter. On ne dit jamais « borrow me » : prêter = **lend** → Could you **lend** me…?' }, { text: 'lent', msg: '« lent » est le prétérit (lend, lent, lent). Après could : la base **lend**.' }],
      say: 'Could you lend me ten pounds?', level: 1 },
    // Proposer son aide
    { id: 'en15-x-09', prompt: 'Propose ton aide avec « Shall I » : Je porte ta valise ?', answers: ['Shall I carry your suitcase?', 'Shall I carry your case?'], topic: 'Proposer son aide', sec: 'en15-s-proposer',
      hint: 'porter = carry ; la valise = suitcase',
      explain: '**Shall I** + base verbale ? = je propose de le faire pour toi. → **Shall I carry your suitcase?** (Je porte ta valise ?)',
      rule: 'Shall I + base verbale ? = Voulez-vous que je… ?',
      mistakes: [{ text: 'Do you want I carry your suitcase?', msg: 'Calque du français : « Do you want I… » est faux. Dis **Shall I carry** your suitcase?' }, { text: 'Shall I to carry your suitcase?', msg: 'Pas de « to » après shall : Shall I **carry**…?' }],
      say: 'Shall I carry your suitcase?', level: 1 },
    { id: 'en15-x-10', prompt: 'Traduis : Tu veux que je t\'aide ?', answers: ['Shall I help you?', 'Do you want me to help you?', 'Would you like me to help you?', 'Can I help you?'], topic: 'Proposer son aide', sec: 'en15-s-proposer',
      hint: 'La façon la plus simple commence par « Shall I… ».',
      explain: '**Shall I help you?** (ou Do you want **me to** help you?) = Tu veux que je t\'aide ?',
      rule: 'Shall I + base ? · Do you want me to + base ?',
      mistakes: [{ text: 'Do you want I help you?', msg: 'On ne peut pas traduire mot à mot « tu veux que je… ». Dis **Shall I help you?** ou Do you want **me to** help you?' }, { text: 'Do you want that I help you?', msg: 'Pas de « that » ici : **Shall I help you?** ou Do you want **me to** help you?' }],
      say: 'Shall I help you?', level: 2 },
    { id: 'en15-x-11', prompt: 'Complète (décision prise sur le moment) : Sit down, I ___ (make) the coffee.', answers: ['will make', '\'ll make', 'I\'ll make', 'I will make'], topic: 'Proposer son aide', sec: 'en15-s-proposer',
      hint: 'Pour une décision immédiate : will (souvent contracté en \'ll).',
      explain: 'Décision prise **sur le moment** : **will** + base verbale. → Sit down, I**\'ll make** the coffee. (Assieds-toi, je vais faire le café.)',
      rule: 'I\'ll + base verbale = je décide maintenant de le faire',
      mistakes: [{ text: 'make', msg: '« I make » = une habitude (présent simple). Pour une décision sur le moment : I **will make** (I\'ll make).' }, { text: 'will to make', msg: 'Pas de « to » après will : I will **make**.' }],
      say: 'Sit down, I\'ll make the coffee.', level: 2 },
    // Faire une suggestion
    { id: 'en15-x-12', prompt: 'Complète : Let\'s ___ (go) for a walk!', answers: ['go'], topic: 'Faire une suggestion', sec: 'en15-s-suggerer', strict: true,
      hint: 'Après let\'s : la base verbale.',
      explain: '**Let\'s** + base verbale. → **Let\'s go** for a walk! (Allons nous promener !)',
      rule: 'Let\'s + base verbale (sans to)',
      mistakes: [{ text: 'to go', msg: 'Pas de « to » après let\'s : Let\'s **go**.' }, { text: 'going', msg: 'Après let\'s, la base verbale (pas -ing) : Let\'s **go**.' }],
      say: 'Let\'s go for a walk!', level: 1 },
    { id: 'en15-x-13', prompt: 'Complète : How about ___ (go) to the theatre?', answers: ['going'], topic: 'Faire une suggestion', sec: 'en15-s-suggerer', strict: true,
      hint: 'Après How about, le verbe prend une terminaison…',
      explain: '**How about** + verbe en **-ing**. → How about **going** to the theatre? (Et si on allait au théâtre ?)',
      rule: 'How about / What about + verbe en -ing ?',
      mistakes: [{ text: 'go', msg: 'Après How about, le verbe prend **-ing** : How about **going**…?' }, { text: 'to go', msg: 'Pas de « to » après How about : le verbe prend -ing → **going**.' }],
      say: 'How about going to the theatre?', level: 2 },
    { id: 'en15-x-14', prompt: 'Transforme avec « Why don\'t we » : Let\'s invite the neighbours.', answers: ['Why don\'t we invite the neighbours?', 'Why don\'t we invite the neighbors?'], topic: 'Faire une suggestion', sec: 'en15-s-suggerer',
      hint: 'Why don\'t we + base verbale ?',
      explain: '**Why don\'t we** + base verbale ? → **Why don\'t we invite the neighbours?** (Pourquoi ne pas inviter les voisins ?)',
      rule: 'Why don\'t we + base verbale ? = Pourquoi ne pas… ?',
      mistakes: [{ text: 'Why we don\'t invite the neighbours?', msg: 'Dans la question, **don\'t** passe **avant** le sujet : Why **don\'t we** invite…?' }, { text: 'Why don\'t we to invite the neighbours?', msg: 'Pas de « to » : Why don\'t we **invite**…?' }],
      say: 'Why don\'t we invite the neighbours?', level: 2 },
    { id: 'en15-x-15', prompt: 'Transforme avec « Shall we » : Let\'s meet at the station.', answers: ['Shall we meet at the station?'], topic: 'Faire une suggestion', sec: 'en15-s-suggerer',
      hint: 'Shall we + base verbale ?',
      explain: '**Shall we** + base verbale ? → **Shall we meet at the station?** (On se retrouve à la gare ?)',
      rule: 'Shall we + base verbale ? = On… ? Et si on… ?',
      mistakes: [{ text: 'Shall we to meet at the station?', msg: 'Pas de « to » après shall : Shall we **meet**…?' }, { text: 'We shall meet at the station?', msg: 'Dans une question, **shall** passe **avant** le sujet : **Shall we** meet…?' }],
      say: 'Shall we meet at the station?', level: 2 },
    { id: 'en15-x-16', prompt: 'Traduis avec « How about » : Et si on allait au cinéma ?', answers: ['How about going to the cinema?', 'What about going to the cinema?', 'How about going to the movies?'], topic: 'Faire une suggestion', sec: 'en15-s-suggerer',
      hint: 'How about + verbe en -ing ?',
      explain: '**How about going** to the cinema? (Et si on allait au cinéma ?) Après How about : **-ing**.',
      rule: 'How about + verbe en -ing ?',
      mistakes: [{ text: 'How about go to the cinema?', msg: 'Après How about, le verbe prend **-ing** : How about **going**…?' }, { text: 'How about to go to the cinema?', msg: 'Pas de « to » après How about : How about **going**…?' }],
      say: 'How about going to the cinema?', level: 2 },
    // Inviter
    { id: 'en15-x-17', prompt: 'Traduis : Voudrais-tu venir dîner samedi ?', answers: ['Would you like to come for dinner on Saturday?', 'Would you like to come to dinner on Saturday?', 'Would you like to come for dinner on Saturday evening?', 'Would you like to come to dinner on Saturday evening?', 'Would you like to come for dinner Saturday?', 'Would you like to come to dinner Saturday?', 'Would you like to come over for dinner on Saturday?'], topic: 'Inviter', sec: 'en15-s-inviter',
      hint: 'Would you like to + verbe… ? ; samedi = on Saturday',
      explain: '**Would you like to** + base verbale ? → **Would you like to come for dinner on Saturday?**',
      rule: 'Would you like to + base verbale ? = Voudrais-tu… ?',
      mistakes: [{ text: 'Would you like come for dinner on Saturday?', msg: 'Il manque **to** : Would you like **to come**…?' }, { text: 'Do you like to come for dinner on Saturday?', msg: '« Do you like » = aimes-tu (en général). Pour inviter : **Would you like to**…?' }],
      say: 'Would you like to come for dinner on Saturday?', level: 1 },
    { id: 'en15-x-18', prompt: 'Complète : I\'d rather ___ (stay) at home.', answers: ['stay'], topic: 'Inviter', sec: 'en15-s-inviter', strict: true,
      hint: 'Après I\'d rather : la base verbale, sans to.',
      explain: '**I\'d rather** + base verbale **sans to**. → I\'d rather **stay** at home. (Je préférerais rester à la maison.)',
      rule: 'I\'d rather + base verbale (sans to) = je préférerais',
      mistakes: [{ text: 'to stay', msg: 'Pas de « to » après I\'d rather (contrairement à I\'d like to) : I\'d rather **stay**.' }, { text: 'staying', msg: 'Après I\'d rather, la base verbale : I\'d rather **stay**.' }],
      say: 'I\'d rather stay at home.', level: 2 },
    { id: 'en15-x-19', prompt: 'Traduis avec « rather » : Je préférerais du thé, s\'il vous plaît.', answers: ['I\'d rather have tea, please.', 'I would rather have tea, please.', 'I\'d rather have some tea, please.', 'I\'d rather have a tea, please.', 'I\'d rather have tea.', 'I\'d rather have some tea.', 'I\'d rather have a cup of tea, please.'], topic: 'Inviter', sec: 'en15-s-inviter',
      hint: 'I\'d rather + have + …',
      explain: '**I\'d rather** + base verbale : **I\'d rather have tea, please.** (Je préférerais du thé, s\'il vous plaît.)',
      rule: 'I\'d rather + base verbale = je préférerais',
      mistakes: [{ text: 'I\'d rather to have tea, please.', msg: 'Pas de « to » après I\'d rather : I\'d rather **have** tea.' }, { text: 'I prefer tea, please.', msg: '« I prefer » = je préfère (en général). « Je préférerais » = **I\'d rather have** (ou I\'d prefer).' }],
      say: 'I\'d rather have tea, please.', level: 2 },
    { id: 'en15-x-20', prompt: 'On te demande « Would you like to come to the concert? ». Accepte avec enthousiasme, avec « love ».', answers: ['I\'d love to!', 'I would love to!', 'Yes, I\'d love to!', 'I\'d love to, thank you!', 'I\'d love to, thanks!', 'Yes, I would love to!'], topic: 'Accepter et refuser', sec: 'en15-s-repondre',
      hint: 'I would love… et le petit mot qui reste à la fin.',
      explain: '**I\'d love to!** (Avec grand plaisir !) Le **to** reste à la fin : c\'est « to come » sous-entendu.',
      rule: 'I\'d love to = avec grand plaisir (le to reste à la fin)',
      mistakes: [{ text: 'I\'d love.', msg: 'Il manque le petit **to** à la fin : **I\'d love to!**' }, { text: 'I love to!', msg: '« I love » = j\'adore (en général). Pour accepter une invitation : **I\'d** (= I would) **love to!**' }],
      say: 'I\'d love to!', level: 1 },
    { id: 'en15-x-21', prompt: 'Refuse poliment avec « afraid » : Malheureusement, je ne peux pas.', answers: ['I\'m afraid I can\'t.', 'I\'m afraid I cannot.', 'I\'m sorry, I\'m afraid I can\'t.'], topic: 'Accepter et refuser', sec: 'en15-s-repondre',
      hint: 'I\'m afraid + I can\'t',
      explain: '**I\'m afraid I can\'t.** (Malheureusement, je ne peux pas.) Ici, I\'m afraid = malheureusement.',
      rule: 'I\'m afraid… = malheureusement, je regrette mais…',
      mistakes: [{ text: 'I have afraid I can\'t.', msg: 'On dit **I\'m** (I am) afraid, avec to be, pas « I have ».' }, { text: 'I\'m afraid I don\'t can.', msg: 'Pas de do avec can : la négation est **can\'t** → I\'m afraid I **can\'t**.' }],
      say: 'I\'m afraid I can\'t.', level: 2 },
    { id: 'en15-x-22', prompt: 'Traduis : Une autre fois, peut-être.', answers: ['Maybe another time.', 'Perhaps another time.', 'Another time, maybe.', 'Another time, perhaps.', 'Maybe next time.'], topic: 'Accepter et refuser', sec: 'en15-s-repondre',
      hint: 'peut-être = maybe ; une autre fois = another time',
      explain: '**Maybe another time.** (Une autre fois, peut-être.) Parfait pour adoucir un refus.',
      rule: 'another = un autre (en un seul mot)',
      mistakes: [{ text: 'Maybe an other time.', msg: '« another » s\'écrit en **un seul mot** : Maybe **another** time.' }, { text: 'Maybe one other time.', msg: '« une autre fois » = **another time**.' }],
      say: 'Maybe another time.', level: 1 },
    { id: 'en15-x-23', prompt: 'Réponds à l\'offre « Shall I open the window? » : Oui, volontiers. C\'est très gentil de votre part.', answers: ['Yes, please. That\'s very kind of you.', 'Yes, please. It\'s very kind of you.', 'Yes, please. That\'s very kind.', 'Yes please, that\'s very kind of you.'], topic: 'Proposer son aide', sec: 'en15-s-proposer',
      hint: 'Pour accepter une offre : Yes, please.',
      explain: 'On accepte une offre avec **Yes, please.** puis **That\'s very kind of you.** (C\'est très gentil de votre part.)',
      rule: 'Shall I…? → Yes, please. / No, thanks.',
      mistakes: [{ text: 'Yes, you shall. That\'s very kind of you.', msg: 'On ne reprend pas shall dans la réponse : pour accepter une offre, on dit **Yes, please.**' }, { text: 'Yes, I do. That\'s very kind of you.', msg: 'La question n\'est pas posée avec do : pour accepter une offre, on dit **Yes, please.**' }],
      say: 'Yes, please. That\'s very kind of you.', level: 1 },
    { id: 'en15-x-24', prompt: 'Traduis : Veux-tu te joindre à nous ? (avec « Would you like »)', answers: ['Would you like to join us?'], topic: 'Inviter', sec: 'en15-s-inviter',
      hint: 'se joindre à = join (sans préposition)',
      explain: '**Would you like to join us?** (Veux-tu te joindre à nous ?) join + personne, directement.',
      rule: 'Would you like to + base verbale ? · join someone (sans to)',
      mistakes: [{ text: 'Would you like join us?', msg: 'Il manque **to** : Would you like **to join** us?' }, { text: 'Would you like to join to us?', msg: 'join se construit sans préposition : join **us** (pas « join to us »).' }],
      say: 'Would you like to join us?', level: 2 },
    // Recevoir chez soi
    { id: 'en15-x-25', prompt: 'Traduis : Faites comme chez vous. (à une seule personne)', answers: ['Make yourself at home.'], topic: 'Recevoir chez soi', sec: 'en15-s-recevoir',
      hint: 'Make + yourself + …',
      explain: 'Expression toute faite : **Make yourself at home.** (Faites comme chez vous.)',
      rule: 'Make yourself at home = Faites comme chez vous',
      mistakes: [{ text: 'Make like at home.', msg: 'L\'expression est **Make yourself at home**.' }, { text: 'Do like at home.', msg: 'Calque du français : on dit **Make yourself at home**.' }],
      say: 'Make yourself at home.', level: 1 },
    { id: 'en15-x-26', prompt: 'Traduis : Servez-vous ! (à une seule personne)', answers: ['Help yourself!'], topic: 'Recevoir chez soi', sec: 'en15-s-recevoir',
      hint: 'Le verbe n\'est pas « serve »…',
      explain: 'À table, « Servez-vous ! » = **Help yourself!** (à plusieurs : Help yourselves!)',
      rule: 'Help yourself! = Servez-vous !',
      mistakes: [{ text: 'Serve yourself!', msg: 'À table, on ne dit pas « Serve yourself » mais **Help yourself!**' }, { text: 'Help you!', msg: 'Il faut **yourself** (vous-même) : **Help yourself!**' }],
      say: 'Help yourself!', level: 1 },
    { id: 'en15-x-27', prompt: 'Traduis : Merci de m\'avoir invité.', answers: ['Thank you for inviting me.', 'Thanks for inviting me.', 'Thank you for having me.', 'Thanks for having me.', 'Thank you for the invitation.', 'Thanks for the invitation.'], topic: 'Recevoir chez soi', sec: 'en15-s-recevoir',
      hint: 'Thank you for + verbe en -ing…',
      explain: 'Après **for**, le verbe prend **-ing** : **Thank you for inviting me.** (Merci de m\'avoir invité.)',
      rule: 'Thank you for + verbe en -ing',
      mistakes: [{ text: 'Thank you for invite me.', msg: 'Après **for**, le verbe prend **-ing** : Thank you for **inviting** me.' }, { text: 'Thank you to invite me.', msg: 'On dit Thank you **for** + -ing : Thank you **for inviting** me.' }],
      say: 'Thank you for inviting me.', level: 2 },
    { id: 'en15-x-28', prompt: 'Remets dans l\'ordre (Tu es libre samedi ?) : free / are / Saturday / you / on / ?', answers: ['Are you free on Saturday?'], topic: 'Inviter', sec: 'en15-s-inviter',
      hint: 'Question avec to be : Are + sujet + …',
      explain: '**Are you free on Saturday?** (Tu es libre samedi ?) Avec to be, le verbe passe devant le sujet.',
      rule: 'Question avec be : Are + sujet + adjectif ?',
      mistakes: [{ text: 'You are free on Saturday?', msg: 'Dans une question, **are** passe **avant** le sujet : **Are you** free on Saturday?' }, { text: 'Are free you on Saturday?', msg: 'Le sujet vient juste après are : Are **you free**…?' }],
      say: 'Are you free on Saturday?', level: 1 }
  ]
});
