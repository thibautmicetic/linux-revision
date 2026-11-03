/* Anglais — chapitre 18 : Au téléphone (appeler un service, messages, épeler, adresse e-mail, verbes à particule, rendez-vous, I'm seeing / I'll) */
APP.registerChapter({
  id: 'en18', subject: 'anglais', num: 18, tier: 2,
  title: 'Au téléphone', subtitle: 'appeler un service · laisser un message · épeler, e-mail · call back, hang up… · rendez-vous · I\'m seeing / I\'ll',
  vocabSec: 'en18-s-vocab',
  sections: [
    {
      id: 'en18-s-appel', title: 'Appeler une entreprise ou un service',
      html: `
<p>Au chapitre 12, tu as appris les bases : <span class="say">Hello, it's Paul.</span>, <span class="say">Hold on, please.</span>, <span class="say">Could you call me back?</span> Ici, on va plus loin : appeler une banque, un cabinet, une entreprise… où c'est souvent un ou une <b>standardiste</b> (<span class="say">a receptionist</span>) qui répond.</p>
<h3>Ce que dit la personne qui répond</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">Good morning, Bristol Bank, Sarah speaking. How can I help you?</span></td><td>Bonjour, Banque de Bristol, Sarah à l'appareil. Que puis-je faire pour vous ?</td></tr>
<tr><td><span class="say">May I ask who's calling?</span></td><td>Puis-je savoir qui est à l'appareil ?</td></tr>
<tr><td><span class="say">One moment, please. I'll put you through.</span></td><td>Un instant, s'il vous plaît. Je vous mets en relation.</td></tr>
<tr><td><span class="say">I'm afraid the line is engaged. Would you like to hold?</span></td><td>Malheureusement, la ligne est occupée. Voulez-vous patienter ?</td></tr>
<tr><td><span class="say">I'm afraid she isn't available at the moment.</span></td><td>Malheureusement, elle n'est pas disponible pour le moment.</td></tr>
<tr><td><span class="say">I'm afraid he's on holiday until Monday.</span></td><td>Malheureusement, il est en vacances jusqu'à lundi.</td></tr></table>
<h3>Ce que tu dis</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">Good morning. Could I speak to Mr Lee, please?</span></td><td>Bonjour. Pourrais-je parler à M. Lee, s'il vous plaît ?</td></tr>
<tr><td><span class="say">I'd like to speak to someone in the sales department.</span></td><td>Je voudrais parler à quelqu'un du service commercial.</td></tr>
<tr><td><span class="say">Could I have extension 204, please?</span></td><td>Pourriez-vous me passer le poste 204, s'il vous plaît ?</td></tr>
<tr><td><span class="say">I'm calling about my bill.</span></td><td>J'appelle au sujet de ma facture.</td></tr>
<tr><td><span class="say">My name is Martin, and I'm calling from Nantes.</span></td><td>Je m'appelle Martin et j'appelle de Nantes.</td></tr></table>
<h3>Le répondeur automatique</h3>
<p><span class="say">Press one for the sales department. Press two for all other questions.</span> — Appuyez sur 1 pour le service commercial. Appuyez sur 2 pour toutes les autres questions.</p>
<div class="callout key"><b>À retenir</b> <span class="say">I'm afraid…</span> sert à annoncer <b>poliment une mauvaise nouvelle</b> : « malheureusement, je suis désolé, mais… ». Ici, ça ne veut pas dire « j'ai peur ».</div>
<div class="callout warn"><b>Piège</b> <span class="say">engaged</span> veut dire « occupé » pour une ligne de téléphone (et aussi « fiancé » !). Pour une personne occupée, on dit <span class="say">busy</span>.</div>
<div class="callout tip"><b>Astuce</b> Prépare ta première phrase avant d'appeler : <span class="say">Good morning, my name is…, I'm calling about…</span> Le reste viendra plus facilement.</div>`
    },
    {
      id: 'en18-s-message', title: 'Laisser et prendre un message',
      html: `
<h3>Prendre un message</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">Would you like to leave a message?</span></td><td>Voulez-vous laisser un message ?</td></tr>
<tr><td><span class="say">Can I take your name and number?</span></td><td>Puis-je avoir votre nom et votre numéro ?</td></tr>
<tr><td><span class="say">What's it about?</span></td><td>C'est à quel sujet ?</td></tr>
<tr><td><span class="say">I'll tell him you called.</span></td><td>Je lui dirai que vous avez appelé.</td></tr>
<tr><td><span class="say">I'll ask her to call you back.</span></td><td>Je lui demanderai de vous rappeler.</td></tr>
<tr><td><span class="say">I'll give him the message.</span></td><td>Je lui transmettrai le message.</td></tr></table>
<h3>Laisser un message</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">Could you tell her that Paul called?</span></td><td>Pourriez-vous lui dire que Paul a appelé ?</td></tr>
<tr><td><span class="say">Could you ask him to call me back?</span></td><td>Pourriez-vous lui demander de me rappeler ?</td></tr>
<tr><td><span class="say">It's about the meeting on Friday.</span></td><td>C'est au sujet de la réunion de vendredi.</td></tr>
<tr><td><span class="say">It's urgent.</span></td><td>C'est urgent.</td></tr>
<tr><td><span class="say">Please call me back as soon as possible.</span></td><td>Rappelez-moi dès que possible, s'il vous plaît.</td></tr>
<tr><td><span class="say">You can reach me on my mobile.</span></td><td>Vous pouvez me joindre sur mon portable.</td></tr></table>
<h3>Sur la messagerie vocale</h3>
<p>Le message d'accueil : <span class="say">Hello, you've reached Tom Baker. I can't take your call right now. Please leave a message after the tone.</span><br>(Bonjour, vous êtes bien chez Tom Baker. Je ne peux pas vous répondre pour le moment. Laissez un message après le bip.)</p>
<p>Ton message : <span class="say">Hi Tom, it's Anna. It's about Saturday. Can you call me back? My number is oh seven seven double oh, nine one two, three four five. Thanks, bye!</span><br>(Salut Tom, c'est Anna. C'est au sujet de samedi. Tu peux me rappeler ? Mon numéro est le 07700 912 345. Merci, salut !)</p>
<div class="callout key"><b>À retenir</b> Demander à quelqu'un <b>de</b> faire quelque chose = <span class="say">ask</span> + personne + <b>to</b> + verbe : <span class="say">Could you ask him to call me back?</span> Dire que… = <span class="say">tell</span> + personne : <span class="say">Could you tell her that I called?</span></div>
<div class="callout warn"><b>Pièges</b> On ne dit pas « ask him that he calls me » mais <span class="say">ask him to call me</span>. Avec <span class="say">tell</span>, la personne vient directement, sans « to » : <span class="say">tell her</span> (pas « tell to her », ni « say her »). Et « laisser un message » = <span class="say">leave a message</span> (pas « let »).</div>`
    },
    {
      id: 'en18-s-alphabet', title: 'Épeler : l\'alphabet anglais',
      html: `
<p>Au téléphone, il faut souvent <b>épeler</b> (<span class="say">to spell</span>) son nom. Les lettres anglaises ne se disent pas comme en français : clique pour les entendre.</p>
<p><span class="say">A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z</span></p>
<h3>Les lettres rangées par son</h3>
<table><tr><th>Son (à peu près)</th><th>Lettres</th></tr>
<tr><td>« éï » (comme dans « paye »)</td><td><span class="say">A, H, J, K</span></td></tr>
<tr><td>« i »</td><td><span class="say">B, C, D, E, G, P, T, V</span></td></tr>
<tr><td>« è »</td><td><span class="say">F, L, M, N, S, X, Z</span></td></tr>
<tr><td>« aï »</td><td><span class="say">I, Y</span></td></tr>
<tr><td>« oou »</td><td><span class="say">O</span></td></tr>
<tr><td>« iou »</td><td><span class="say">Q, U, W</span></td></tr>
<tr><td>« âr »</td><td><span class="say">R</span></td></tr></table>
<h3>Les lettres pièges</h3>
<table><tr><th>Lettre</th><th>Se dit à peu près</th><th>Attention</th></tr>
<tr><td><span class="say">E</span></td><td>« i »</td><td>un francophone croit entendre I</td></tr>
<tr><td><span class="say">I</span></td><td>« aï »</td><td>ce n'est pas « i »</td></tr>
<tr><td><span class="say">G</span></td><td>« dji »</td><td>ressemble à notre J</td></tr>
<tr><td><span class="say">J</span></td><td>« djéï »</td><td>ressemble à notre G (« jé »)</td></tr>
<tr><td><span class="say">A</span></td><td>« éï »</td><td>ressemble à notre « é »</td></tr>
<tr><td><span class="say">R</span></td><td>« âr »</td><td>ce n'est pas « èr »</td></tr>
<tr><td><span class="say">U</span> · <span class="say">W</span></td><td>« iou » · « dabeul-iou »</td><td>W = « double U »</td></tr>
<tr><td><span class="say">Y</span></td><td>« ouaï »</td><td>ce n'est pas « i grec »</td></tr>
<tr><td><span class="say">Z</span></td><td>« zèd » (US : « zi »)</td><td></td></tr></table>
<h3>Épeler au téléphone</h3>
<ul>
<li><span class="say">How do you spell that?</span> — Comment ça s'écrit ?</li>
<li><span class="say">Could you spell your surname, please?</span> — Pourriez-vous épeler votre nom de famille ?</li>
<li><span class="say">It's Grey: G, R, E, Y.</span> — C'est Grey : G, R, E, Y.</li>
<li>Deux lettres identiques : <span class="say">double</span>. <span class="say">Hall: H, A, double L.</span></li>
<li>Une majuscule : <span class="say">a capital letter</span>. Tout en minuscules : <span class="say">all in small letters</span>.</li>
<li>Pour être sûr : <span class="say">Is that M for Mary or N for Nancy?</span> — C'est M comme Mary ou N comme Nancy ?</li>
</ul>
<div class="callout key"><b>À retenir</b> <span class="say">E</span> = « i », <span class="say">I</span> = « aï », <span class="say">G</span> = « dji », <span class="say">J</span> = « djéï ». Deux lettres identiques : <span class="say">double</span> (double L, double S).</div>
<div class="callout warn"><b>Piège</b> Si tu épelles « à la française », ton correspondant entend d'autres lettres : ton « i » français, il l'entend comme un <b>E</b> ; ton « jé » (G), il l'entend comme un <b>J</b>. Entraîne-toi à épeler ton nom à voix haute !</div>`
    },
    {
      id: 'en18-s-email', title: 'Donner une adresse e-mail et un numéro',
      html: `
<h3>Les signes d'une adresse e-mail</h3>
<table><tr><th>Signe</th><th>Anglais</th><th>Français</th></tr>
<tr><td>@</td><td><span class="say">at</span></td><td>arobase</td></tr>
<tr><td>.</td><td><span class="say">dot</span></td><td>point</td></tr>
<tr><td>-</td><td><span class="say">dash</span> (ou <span class="say">hyphen</span>)</td><td>tiret</td></tr>
<tr><td>_</td><td><span class="say">underscore</span></td><td>tiret bas</td></tr>
<tr><td>/</td><td><span class="say">slash</span></td><td>barre oblique</td></tr></table>
<h3>Exemples</h3>
<ul>
<li>anna.brown@gmail.com → <span class="say">anna dot brown at gmail dot com</span></li>
<li>paul_martin@orange.fr → <span class="say">paul underscore martin at orange dot F R</span></li>
<li>www.bristolbank.co.uk → <span class="say">w w w dot bristolbank dot co dot uk</span> (on dit « dabeul-iou, dabeul-iou, dabeul-iou »)</li>
</ul>
<p>Des précisions utiles : <span class="say">It's all one word.</span> — C'est en un seul mot (tout attaché). <span class="say">It's all in small letters.</span> — Tout est en minuscules.</p>
<h3>Les numéros : un chiffre à la fois</h3>
<p>Rappel du chapitre 12 : on lit les chiffres <b>un par un</b>, le 0 se dit <span class="say">oh</span>, et deux chiffres identiques se disent avec <span class="say">double</span>. On fait de petits groupes, avec une pause entre eux.</p>
<p>07700 912 345 → <span class="say">oh seven seven double oh, nine one two, three four five</span></p>
<h3>Vérifier</h3>
<ul>
<li><span class="say">Let me read that back to you.</span> — Je vous relis.</li>
<li><span class="say">Is that right?</span> — C'est bien ça ?</li>
<li><span class="say">Sorry, was that fifteen or fifty?</span> — Pardon, c'était 15 ou 50 ?</li>
</ul>
<div class="callout key"><b>À retenir</b> @ = <span class="say">at</span>, . = <span class="say">dot</span>, - = <span class="say">dash</span>, _ = <span class="say">underscore</span>. Pour un numéro : chiffre par chiffre, <span class="say">oh</span> pour 0, <span class="say">double</span> pour deux chiffres identiques.</div>
<div class="callout warn"><b>Piège</b> Dans une adresse, le point se dit <span class="say">dot</span>, jamais « point ». À la fin d'une phrase, le point s'appelle <span class="say">a full stop</span> : ne le dis pas dans une adresse e-mail.</div>`
    },
    {
      id: 'en18-s-verbes', title: 'Les verbes à particule du téléphone',
      html: `
<p>Tu connais déjà <span class="say">call back</span> (rappeler) et <span class="say">hold on</span> (patienter). Ce sont des <b>verbes à particule</b> : un verbe + un petit mot (<span class="say">back</span>, <span class="say">on</span>, <span class="say">up</span>, <span class="say">through</span>, <span class="say">off</span>) qui change le sens. Le téléphone en utilise beaucoup.</p>
<table><tr><th>Anglais</th><th>Français</th><th>Exemple</th></tr>
<tr><td><span class="say">call back</span></td><td>rappeler</td><td><span class="say">I'll call you back.</span> — Je te rappelle.</td></tr>
<tr><td><span class="say">hold on</span></td><td>patienter, ne pas quitter</td><td><span class="say">Hold on a minute.</span> — Ne quittez pas une minute.</td></tr>
<tr><td><span class="say">hang up</span></td><td>raccrocher</td><td><span class="say">Please don't hang up.</span> — Ne raccrochez pas, s'il vous plaît.</td></tr>
<tr><td><span class="say">pick up</span></td><td>décrocher</td><td><span class="say">Nobody is picking up.</span> — Personne ne décroche.</td></tr>
<tr><td><span class="say">put through</span></td><td>passer quelqu'un, mettre en relation</td><td><span class="say">I'll put you through.</span> — Je vous mets en relation.</td></tr>
<tr><td><span class="say">get through</span></td><td>obtenir la communication</td><td><span class="say">I called the bank, but I couldn't get through.</span> — J'ai appelé la banque, mais je n'ai pas réussi à les avoir.</td></tr>
<tr><td><span class="say">speak up</span></td><td>parler plus fort</td><td><span class="say">Could you speak up, please?</span> — Pourriez-vous parler plus fort ?</td></tr>
<tr><td><span class="say">cut off</span></td><td>couper (la communication)</td><td><span class="say">Sorry, we were cut off.</span> — Désolé, nous avons été coupés.</td></tr></table>
<h3>Où mettre me, you, him, her, it ?</h3>
<p>Avec un <b>pronom</b>, il se place <b>au milieu</b>, entre le verbe et le petit mot :</p>
<ul>
<li><span class="say">Call me back.</span> — Rappelle-moi. (jamais « call back me »)</li>
<li><span class="say">I'll put you through.</span> — Je vous passe la personne. (jamais « put through you »)</li>
<li><span class="say">The phone is ringing. Can you pick it up?</span> — Le téléphone sonne. Tu peux décrocher ?</li>
</ul>
<h3>Au prétérit</h3>
<p>Le verbe change, le petit mot reste : <span class="say">hang up</span> → <span class="say">hung up</span> · <span class="say">pick up</span> → <span class="say">picked up</span> · <span class="say">put through</span> → <span class="say">put through</span> · <span class="say">get through</span> → <span class="say">got through</span> · <span class="say">hold on</span> → <span class="say">held on</span>.<br><span class="say">She hung up before I could answer.</span> — Elle a raccroché avant que je puisse répondre.</p>
<div class="callout key"><b>À retenir</b> verbe + pronom + particule : <span class="say">call me back</span>, <span class="say">put you through</span>, <span class="say">pick it up</span>.</div>
<div class="callout warn"><b>Piège</b> <span class="say">hang up</span> (raccrocher) et <span class="say">hold on</span> (rester en ligne) disent le contraire ! Et <span class="say">pick up</span> = décrocher, pas raccrocher.</div>`
    },
    {
      id: 'en18-s-futur', title: 'Le futur au téléphone : I\'m seeing… ou I\'ll… ?',
      html: `
<h3>1. Un rendez-vous déjà prévu : le présent continu</h3>
<p>Pour un rendez-vous <b>organisé</b> (il est dans ton agenda, avec un jour et une heure), on utilise le <b>présent continu</b> (am / is / are + -ing, chapitre 7), avec un mot de temps.</p>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">I'm seeing the dentist on Monday.</span></td><td>Je vais chez le dentiste lundi.</td></tr>
<tr><td><span class="say">We're having a meeting at ten tomorrow.</span></td><td>Nous avons une réunion demain à dix heures.</td></tr>
<tr><td><span class="say">She's flying to Rome next week.</span></td><td>Elle prend l'avion pour Rome la semaine prochaine.</td></tr>
<tr><td><span class="say">I'm meeting Paul for lunch the day after tomorrow.</span></td><td>Je déjeune avec Paul après-demain.</td></tr>
<tr><td><span class="say">What are you doing on Friday?</span></td><td>Qu'est-ce que tu fais vendredi ?</td></tr></table>
<p>C'est comme en français (« je vois le dentiste lundi ») : on parle du futur avec un présent. Mais en anglais, c'est le présent <b>continu</b>.</p>
<h3>2. Une décision prise pendant l'appel : will</h3>
<p>Quand tu décides <b>sur le moment</b>, ou quand tu proposes ou promets quelque chose (chapitre 10) : <b>will</b>, souvent contracté en <span class="say">I'll</span>.</p>
<ul>
<li><span class="say">I'll call you back in five minutes.</span> — Je te rappelle dans cinq minutes.</li>
<li><span class="say">Hold on, I'll get a pen.</span> — Ne quitte pas, je vais chercher un stylo.</li>
<li><span class="say">OK, I'll text you the address.</span> — D'accord, je t'envoie l'adresse par SMS.</li>
<li><span class="say">I'll tell her.</span> — Je le lui dirai.</li>
</ul>
<h3>Les deux dans le même appel</h3>
<p>— <span class="say">Are you free on Tuesday?</span> (Tu es libre mardi ?)<br>
— <span class="say">No, sorry, I'm working on Tuesday.</span> (Non, désolé, je travaille mardi : c'est prévu.)<br>
— <span class="say">What about Wednesday?</span> (Et mercredi ?)<br>
— <span class="say">Wednesday is fine. I'll come at two.</span> (Mercredi, ça va. Je viendrai à deux heures : je le décide maintenant.)</p>
<div class="callout key"><b>À retenir</b> Rendez-vous prévu → <span class="say">I'm seeing the doctor on Monday.</span> Décision sur le moment → <span class="say">I'll call you back.</span> Projet, intention → <span class="say">I'm going to…</span> (chapitre 10).</div>
<div class="callout warn"><b>Pièges</b> « Je te rappelle demain » (une promesse) = <span class="say">I'll call you back tomorrow</span>, pas « I call you back ». « Je vois le médecin lundi » (prévu) = <span class="say">I'm seeing the doctor on Monday</span>, pas « I see the doctor on Monday ».</div>`
    },
    {
      id: 'en18-s-rdv', title: 'Prendre, déplacer, annuler un rendez-vous',
      html: `
<p>Un rendez-vous chez le médecin, le coiffeur, à la banque se dit <span class="say">an appointment</span>. (Une réunion de travail = <span class="say">a meeting</span>.)</p>
<h3>Prendre rendez-vous</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">I'd like to make an appointment for Tuesday.</span></td><td>Je voudrais prendre rendez-vous pour mardi.</td></tr>
<tr><td><span class="say">When are you available?</span></td><td>Quand êtes-vous disponible ?</td></tr>
<tr><td><span class="say">Does Thursday suit you?</span></td><td>Est-ce que jeudi vous convient ?</td></tr>
<tr><td><span class="say">Let me check my diary.</span></td><td>Je regarde mon agenda.</td></tr>
<tr><td><span class="say">Thursday at half past two is fine.</span></td><td>Jeudi à deux heures et demie, c'est parfait.</td></tr>
<tr><td><span class="say">See you on Thursday, then.</span></td><td>À jeudi, alors.</td></tr></table>
<h3>Déplacer un rendez-vous</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">I'm afraid I can't make it on Thursday.</span></td><td>Malheureusement, je ne pourrai pas venir jeudi.</td></tr>
<tr><td><span class="say">Could we move it to Friday?</span></td><td>Pourrait-on le déplacer à vendredi ?</td></tr>
<tr><td><span class="say">Can I come on Friday instead?</span></td><td>Est-ce que je peux venir vendredi à la place ?</td></tr>
<tr><td><span class="say">We have to postpone the meeting until next week.</span></td><td>Nous devons reporter la réunion à la semaine prochaine.</td></tr></table>
<h3>Annuler, confirmer</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">I'm calling to cancel my appointment.</span></td><td>J'appelle pour annuler mon rendez-vous.</td></tr>
<tr><td><span class="say">I'm sorry, I have to cancel.</span></td><td>Je suis désolé, je dois annuler.</td></tr>
<tr><td><span class="say">I'm calling to confirm your appointment on Monday at ten.</span></td><td>J'appelle pour confirmer votre rendez-vous de lundi à dix heures.</td></tr></table>
<div class="callout info"><b>Rappel des petits mots du temps</b> <span class="say">on Monday</span> (un jour) · <span class="say">at ten o'clock</span> (une heure) · <span class="say">in the morning</span> (un moment de la journée) · <span class="say">on the fifth of May</span> (une date).</div>
<div class="callout key"><b>À retenir</b> prendre rendez-vous = <span class="say">make an appointment</span> · déplacer = <span class="say">move</span> · reporter = <span class="say">postpone</span> · annuler = <span class="say">cancel</span> · confirmer = <span class="say">confirm</span>.</div>
<div class="callout warn"><b>Faux amis</b> On ne dit pas « take an appointment » mais <span class="say">make an appointment</span>. Mon agenda = <span class="say">my diary</span> (<span class="say">an agenda</span> = l'ordre du jour d'une réunion). Et « reporter » = <span class="say">postpone</span> (<span class="say">to report</span> = signaler, faire un rapport).</div>`
    },
    {
      id: 'en18-s-vocab', title: 'Vocabulaire : téléphone, épeler, rendez-vous',
      html: `
<p>Les mots de ce chapitre. Clique sur un mot pour l'entendre.</p>
<h3>Le téléphone</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">to ring</span> (<span class="say">rang</span>, <span class="say">rung</span>)</td><td>sonner</td></tr>
<tr><td><span class="say">to dial</span></td><td>composer (un numéro)</td></tr>
<tr><td><span class="say">to press</span></td><td>appuyer (sur une touche)</td></tr>
<tr><td><span class="say">a text</span> · <span class="say">to text</span></td><td>un SMS · envoyer un SMS</td></tr>
<tr><td><span class="say">to reach</span></td><td>joindre (quelqu'un)</td></tr>
<tr><td><span class="say">to charge</span></td><td>recharger (un téléphone)</td></tr>
<tr><td><span class="say">voicemail</span></td><td>la messagerie vocale, le répondeur</td></tr>
<tr><td><span class="say">a missed call</span></td><td>un appel manqué</td></tr>
<tr><td><span class="say">a wrong number</span></td><td>un faux numéro</td></tr>
<tr><td><span class="say">the line</span></td><td>la ligne</td></tr>
<tr><td><span class="say">engaged</span> (US : <span class="say">busy</span>)</td><td>occupé (une ligne)</td></tr>
<tr><td><span class="say">an extension</span></td><td>un poste (numéro interne)</td></tr>
<tr><td><span class="say">a receptionist</span></td><td>un ou une standardiste, réceptionniste</td></tr>
<tr><td><span class="say">a signal</span></td><td>le réseau (du portable)</td></tr></table>
<h3>Les coordonnées</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">contact details</span></td><td>les coordonnées</td></tr>
<tr><td><span class="say">first name</span> · <span class="say">surname</span></td><td>le prénom · le nom de famille</td></tr>
<tr><td><span class="say">an email address</span></td><td>une adresse e-mail</td></tr>
<tr><td><span class="say">a website</span></td><td>un site internet</td></tr>
<tr><td><span class="say">a capital letter</span> · <span class="say">a small letter</span></td><td>une majuscule · une minuscule</td></tr></table>
<h3>Les mots utiles</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">available</span></td><td>disponible</td></tr>
<tr><td><span class="say">urgent</span></td><td>urgent</td></tr>
<tr><td><span class="say">as soon as possible</span></td><td>dès que possible</td></tr>
<tr><td><span class="say">the day after tomorrow</span></td><td>après-demain</td></tr></table>
<div class="callout key"><b>À retenir</b> <span class="say">There's no signal here.</span> — Il n'y a pas de réseau ici. <span class="say">I have three missed calls.</span> — J'ai trois appels manqués.</div>
<div class="callout warn"><b>Piège</b> « Je n'ai pas de réseau » se dit <span class="say">I've got no signal.</span> (ou <span class="say">I've got no reception.</span>), pas « I have no network ». Et « un SMS » se dit <span class="say">a text</span> : les Anglais ne disent presque jamais « SMS ».</div>`
    }
  ],
  words: [
    // Les verbes du téléphone
    { en: 'hang up', fr: 'raccrocher', pos: 'v', cat: 'Les verbes du téléphone', sec: 'en18-s-verbes', ex: 'Please don\'t hang up.', exFr: 'Ne raccrochez pas, s\'il vous plaît.', level: 1, note: 'Prétérit : hung up. Contraire : hold on (rester en ligne).' },
    { en: 'pick up', fr: 'décrocher', pos: 'v', cat: 'Les verbes du téléphone', sec: 'en18-s-verbes', ex: 'I called three times, but nobody picked up.', exFr: 'J\'ai appelé trois fois, mais personne n\'a décroché.', level: 1, note: 'Avec un pronom : pick it up.' },
    { en: 'put through', fr: 'passer quelqu\'un, mettre en relation', pos: 'v', cat: 'Les verbes du téléphone', sec: 'en18-s-verbes', ex: 'I\'ll put you through to Mr Lee.', exFr: 'Je vous passe M. Lee.', level: 2, note: 'Le pronom au milieu : put **you** through.' },
    { en: 'get through', fr: 'obtenir la communication', pos: 'v', cat: 'Les verbes du téléphone', sec: 'en18-s-verbes', ex: 'I called the bank, but I couldn\'t get through.', exFr: 'J\'ai appelé la banque, mais je n\'ai pas réussi à les avoir.', level: 2 },
    { en: 'speak up', fr: 'parler plus fort', pos: 'v', cat: 'Les verbes du téléphone', sec: 'en18-s-verbes', alt: ['speak louder'], ex: 'Could you speak up, please?', exFr: 'Pourriez-vous parler plus fort, s\'il vous plaît ?', level: 1 },
    { en: 'cut off', fr: 'couper (la communication)', pos: 'v', cat: 'Les verbes du téléphone', sec: 'en18-s-verbes', ex: 'Sorry, we were cut off.', exFr: 'Désolé, nous avons été coupés.', level: 2, note: 'Expression toute faite : we were cut off / we got cut off = nous avons été coupés.' },
    { en: 'ring', fr: 'sonner', pos: 'v', cat: 'Le téléphone', ex: 'Your phone is ringing!', exFr: 'Ton téléphone sonne !', level: 1, note: 'Irrégulier : ring, rang, rung. En anglais britannique, ring veut aussi dire « appeler » : I\'ll ring you.' },
    { en: 'dial', fr: 'composer (un numéro)', pos: 'v', cat: 'Le téléphone', ex: 'Dial 999 in an emergency.', exFr: 'Composez le 999 en cas d\'urgence.', level: 2, note: 'Le 999 est le numéro des urgences en Grande-Bretagne.' },
    { en: 'press', fr: 'appuyer (sur une touche)', pos: 'v', cat: 'Le téléphone', ex: 'Press one for the sales department.', exFr: 'Appuyez sur 1 pour le service commercial.', level: 1 },
    { en: 'text', fr: 'le SMS, le texto', pos: 'n', cat: 'Le téléphone', alt: ['text message'], ex: 'I\'ll send you a text.', exFr: 'Je t\'enverrai un SMS.', level: 1, note: 'C\'est aussi un verbe : I\'ll text you = je t\'enverrai un SMS.' },
    { en: 'reach', fr: 'joindre (quelqu\'un)', pos: 'v', cat: 'Le téléphone', sec: 'en18-s-message', ex: 'You can reach me on my mobile.', exFr: 'Vous pouvez me joindre sur mon portable.', level: 2, note: 'Sur mon portable = on my mobile (avec on).' },
    { en: 'charge', fr: 'recharger (un téléphone)', pos: 'v', cat: 'Le téléphone', ex: 'Can I charge my phone here?', exFr: 'Est-ce que je peux recharger mon téléphone ici ?', level: 2, note: 'Le chargeur = the charger.' },
    { en: 'voicemail', fr: 'la messagerie vocale, le répondeur', pos: 'n', cat: 'Le téléphone', alt: ['answerphone'], ex: 'I left a message on your voicemail.', exFr: 'J\'ai laissé un message sur ta messagerie.', level: 2 },
    { en: 'missed call', fr: 'l\'appel manqué', pos: 'n', cat: 'Le téléphone', ex: 'I have three missed calls.', exFr: 'J\'ai trois appels manqués.', level: 1 },
    { en: 'wrong number', fr: 'le faux numéro', pos: 'n', cat: 'Le téléphone', ex: 'Sorry, I think you have the wrong number.', exFr: 'Désolé, je crois que vous vous êtes trompé de numéro.', level: 1 },
    { en: 'line', fr: 'la ligne (de téléphone)', pos: 'n', cat: 'Le téléphone', sec: 'en18-s-appel', ex: 'The line is very bad.', exFr: 'La ligne est très mauvaise.', level: 1 },
    { en: 'engaged', fr: 'occupé (pour une ligne de téléphone)', pos: 'adj', cat: 'Le téléphone', sec: 'en18-s-appel', alt: ['busy'], ex: 'The line is engaged.', exFr: 'La ligne est occupée.', level: 2, note: 'En américain : busy. engaged veut aussi dire « fiancé ».' },
    { en: 'extension', fr: 'le poste (numéro interne)', pos: 'n', cat: 'Le téléphone', sec: 'en18-s-appel', ex: 'Could I have extension 204, please?', exFr: 'Pourriez-vous me passer le poste 204, s\'il vous plaît ?', level: 2 },
    { en: 'receptionist', fr: 'le ou la standardiste, le ou la réceptionniste', pos: 'n', cat: 'Le téléphone', sec: 'en18-s-appel', ex: 'The receptionist put me through.', exFr: 'La standardiste m\'a mis en relation.', level: 2 },
    { en: 'signal', fr: 'le réseau (du portable)', pos: 'n', cat: 'Le téléphone', alt: ['reception'], ex: 'There\'s no signal here.', exFr: 'Il n\'y a pas de réseau ici.', level: 2 },
    // Laisser un message
    { en: 'leave a message', fr: 'laisser un message', pos: 'x', cat: 'Laisser un message', sec: 'en18-s-message', ex: 'Would you like to leave a message?', exFr: 'Voulez-vous laisser un message ?', level: 1, note: 'leave, left, left. Prendre un message = take a message.' },
    { en: 'contact details', fr: 'les coordonnées', pos: 'n', cat: 'Laisser un message', sec: 'en18-s-message', ex: 'Can I have your contact details?', exFr: 'Puis-je avoir vos coordonnées ?', level: 2 },
    { en: 'urgent', fr: 'urgent', pos: 'adj', cat: 'Laisser un message', sec: 'en18-s-message', ex: 'Please call me back. It\'s urgent.', exFr: 'Rappelez-moi, s\'il vous plaît. C\'est urgent.', level: 1, note: 'On appuie sur le début : « EUR-djeunt ».' },
    { en: 'as soon as possible', fr: 'dès que possible', pos: 'x', cat: 'Laisser un message', sec: 'en18-s-message', alt: ['asap'], ex: 'Please call me back as soon as possible.', exFr: 'Rappelez-moi dès que possible, s\'il vous plaît.', level: 1 },
    { en: 'available', fr: 'disponible', pos: 'adj', cat: 'Laisser un message', sec: 'en18-s-appel', alt: ['free'], ex: 'Mr Lee isn\'t available at the moment.', exFr: 'M. Lee n\'est pas disponible pour le moment.', level: 1 },
    // Épeler et donner une adresse
    { en: 'spell', fr: 'épeler', pos: 'v', cat: 'Épeler, donner une adresse', sec: 'en18-s-alphabet', ex: 'How do you spell your name?', exFr: 'Comment s\'écrit votre nom ?', level: 1, note: 'Prétérit : spelt (britannique) ou spelled.' },
    { en: 'alphabet', fr: 'l\'alphabet', pos: 'n', cat: 'Épeler, donner une adresse', sec: 'en18-s-alphabet', ex: 'The English alphabet has twenty-six letters.', exFr: 'L\'alphabet anglais a vingt-six lettres.', level: 1 },
    { en: 'capital letter', fr: 'la majuscule', pos: 'n', cat: 'Épeler, donner une adresse', sec: 'en18-s-alphabet', alt: ['capital'], ex: 'Write your name in capital letters.', exFr: 'Écrivez votre nom en majuscules.', level: 2 },
    { en: 'small letter', fr: 'la minuscule', pos: 'n', cat: 'Épeler, donner une adresse', sec: 'en18-s-alphabet', alt: ['lower case', 'lowercase'], ex: 'My email address is all in small letters.', exFr: 'Mon adresse e-mail est tout en minuscules.', level: 2 },
    { en: 'double', fr: 'double (deux fois la même lettre ou le même chiffre)', pos: 'adj', cat: 'Épeler, donner une adresse', sec: 'en18-s-alphabet', ex: 'Hall is spelt with a double L.', exFr: 'Hall s\'écrit avec deux L.', level: 1, note: 'Au téléphone : 44 = double four.' },
    { en: 'email address', fr: 'l\'adresse e-mail', pos: 'n', cat: 'Épeler, donner une adresse', sec: 'en18-s-email', alt: ['e-mail address'], ex: 'What\'s your email address?', exFr: 'Quelle est votre adresse e-mail ?', level: 1 },
    { en: 'at', fr: 'arobase (@)', pos: 'x', cat: 'Épeler, donner une adresse', sec: 'en18-s-email', ex: 'My email is tom at gmail dot com.', exFr: 'Mon e-mail, c\'est tom arobase gmail point com.', level: 1 },
    { en: 'dot', fr: 'point (dans une adresse e-mail ou internet)', pos: 'n', cat: 'Épeler, donner une adresse', sec: 'en18-s-email', ex: 'It\'s anna dot brown at gmail dot com.', exFr: 'C\'est anna point brown arobase gmail point com.', level: 1, note: 'Le point à la fin d\'une phrase = a full stop (US : a period).' },
    { en: 'dash', fr: 'le tiret (-)', pos: 'n', cat: 'Épeler, donner une adresse', sec: 'en18-s-email', alt: ['hyphen'], ex: 'Jean-Paul is written with a dash.', exFr: 'Jean-Paul s\'écrit avec un tiret.', level: 2 },
    { en: 'underscore', fr: 'le tiret bas (_)', pos: 'n', cat: 'Épeler, donner une adresse', sec: 'en18-s-email', ex: 'There\'s an underscore between the two names.', exFr: 'Il y a un tiret bas entre les deux noms.', level: 2 },
    { en: 'website', fr: 'le site internet', pos: 'n', cat: 'Épeler, donner une adresse', sec: 'en18-s-email', alt: ['site', 'web site'], ex: 'You can find our number on our website.', exFr: 'Vous trouverez notre numéro sur notre site internet.', level: 1 },
    { en: 'first name', fr: 'le prénom', pos: 'n', cat: 'Épeler, donner une adresse', sec: 'en18-s-alphabet', ex: 'What\'s your first name?', exFr: 'Quel est votre prénom ?', level: 1 },
    { en: 'surname', fr: 'le nom de famille', pos: 'n', cat: 'Épeler, donner une adresse', sec: 'en18-s-alphabet', alt: ['last name', 'family name'], ex: 'Could you spell your surname, please?', exFr: 'Pourriez-vous épeler votre nom de famille, s\'il vous plaît ?', level: 1 },
    // Les rendez-vous
    { en: 'cancel', fr: 'annuler', pos: 'v', cat: 'Les rendez-vous', sec: 'en18-s-rdv', ex: 'I\'m calling to cancel my appointment.', exFr: 'J\'appelle pour annuler mon rendez-vous.', level: 1, note: 'Prétérit : cancelled (britannique) ou canceled (américain).' },
    { en: 'postpone', fr: 'reporter (à plus tard)', pos: 'v', cat: 'Les rendez-vous', sec: 'en18-s-rdv', alt: ['put off'], ex: 'We have to postpone the meeting.', exFr: 'Nous devons reporter la réunion.', level: 2, note: 'Faux ami : to report = signaler, faire un rapport.' },
    { en: 'confirm', fr: 'confirmer', pos: 'v', cat: 'Les rendez-vous', sec: 'en18-s-rdv', ex: 'I\'ll text you to confirm.', exFr: 'Je vous enverrai un SMS pour confirmer.', level: 1 },
    { en: 'suit', fr: 'convenir (à quelqu\'un)', pos: 'v', cat: 'Les rendez-vous', sec: 'en18-s-rdv', ex: 'Does Thursday suit you?', exFr: 'Est-ce que jeudi vous convient ?', level: 2, note: 'Sans préposition : suit you. Le nom a suit = un costume.' },
    { en: 'diary', fr: 'l\'agenda', pos: 'n', cat: 'Les rendez-vous', sec: 'en18-s-rdv', alt: ['calendar'], ex: 'Let me check my diary.', exFr: 'Je regarde mon agenda.', level: 2, note: 'Faux ami : an agenda = l\'ordre du jour d\'une réunion. a diary veut aussi dire « un journal intime ».' },
    { en: 'make it', fr: 'pouvoir venir, être là (à un rendez-vous)', pos: 'x', cat: 'Les rendez-vous', sec: 'en18-s-rdv', ex: 'Sorry, I can\'t make it on Monday.', exFr: 'Désolé, je ne peux pas venir lundi.', level: 2 },
    { en: 'the day after tomorrow', fr: 'après-demain', pos: 'x', cat: 'Les rendez-vous', sec: 'en18-s-futur', ex: 'I\'m seeing the doctor the day after tomorrow.', exFr: 'Je vois le médecin après-demain.', level: 1, note: 'Avant-hier = the day before yesterday.' }
  ],
  phrases: [
    { en: 'May I ask who\'s calling?', fr: 'Puis-je savoir qui est à l\'appareil ?', alt: ['Can I ask who\'s calling?', 'Who\'s calling, please?'], cat: 'Appeler un service', sec: 'en18-s-appel' },
    { en: 'I\'ll put you through.', fr: 'Je vous mets en relation.', cat: 'Appeler un service', sec: 'en18-s-appel', note: 'put through = passer quelqu\'un au téléphone.' },
    { en: 'I\'m afraid he isn\'t available.', fr: 'Malheureusement, il n\'est pas disponible.', alt: ['I\'m sorry, he isn\'t available.'], cat: 'Appeler un service', sec: 'en18-s-appel', note: 'I\'m afraid = formule polie pour une mauvaise nouvelle.' },
    { en: 'The line is engaged.', fr: 'La ligne est occupée.', alt: ['The line is busy.'], cat: 'Appeler un service', sec: 'en18-s-appel' },
    { en: 'Would you like to leave a message?', fr: 'Voulez-vous laisser un message ?', alt: ['Do you want to leave a message?'], cat: 'Laisser un message', sec: 'en18-s-message' },
    { en: 'Could you ask her to call me back?', fr: 'Pourriez-vous lui demander de me rappeler ?', alt: ['Can you ask her to call me back?', 'Could you ask her to ring me back?'], cat: 'Laisser un message', sec: 'en18-s-message', note: 'ask + personne + to + verbe.' },
    { en: 'Could you tell him that I called?', fr: 'Pourriez-vous lui dire que j\'ai appelé ?', alt: ['Could you tell him I called?', 'Can you tell him that I called?'], cat: 'Laisser un message', sec: 'en18-s-message' },
    { en: 'Please call me back as soon as possible.', fr: 'Rappelez-moi dès que possible, s\'il vous plaît.', alt: ['Please ring me back as soon as possible.', 'Could you call me back as soon as possible?'], cat: 'Laisser un message', sec: 'en18-s-message' },
    { en: 'How do you spell that?', fr: 'Comment ça s\'écrit ?', alt: ['How do you spell it?', 'How is that spelt?'], cat: 'Épeler', sec: 'en18-s-alphabet' },
    { en: 'Is that with a double L?', fr: 'C\'est avec deux L ?', cat: 'Épeler', sec: 'en18-s-alphabet' },
    { en: 'My email address is tom at gmail dot com.', fr: 'Mon adresse e-mail, c\'est tom arobase gmail point com.', cat: 'Épeler', sec: 'en18-s-email' },
    { en: 'Let me read that back to you.', fr: 'Je vous relis.', alt: ['Let me read it back to you.'], cat: 'Épeler', sec: 'en18-s-email' },
    { en: 'Could you speak up, please?', fr: 'Pourriez-vous parler plus fort, s\'il vous plaît ?', alt: ['Can you speak up, please?', 'Could you speak louder, please?'], cat: 'Les verbes du téléphone', sec: 'en18-s-verbes' },
    { en: 'Please don\'t hang up.', fr: 'Ne raccrochez pas, s\'il vous plaît.', alt: ['Don\'t hang up, please.'], cat: 'Les verbes du téléphone', sec: 'en18-s-verbes' },
    { en: 'Sorry, we were cut off.', fr: 'Désolé, nous avons été coupés.', alt: ['Sorry, we got cut off.'], cat: 'Les verbes du téléphone', sec: 'en18-s-verbes' },
    { en: 'I couldn\'t get through to you.', fr: 'Je n\'ai pas réussi à vous joindre.', alt: ['I couldn\'t reach you.'], cat: 'Les verbes du téléphone', sec: 'en18-s-verbes' },
    { en: 'I\'ll call you back in five minutes.', fr: 'Je vous rappelle dans cinq minutes.', alt: ['I\'ll ring you back in five minutes.', 'I\'ll phone you back in five minutes.'], cat: 'Le futur au téléphone', sec: 'en18-s-futur', note: 'Décision prise sur le moment → will.' },
    { en: 'I\'m seeing the dentist on Monday.', fr: 'Je vais chez le dentiste lundi.', alt: ['I\'m going to the dentist on Monday.', 'I\'m going to see the dentist on Monday.'], cat: 'Le futur au téléphone', sec: 'en18-s-futur', note: 'Rendez-vous prévu → présent continu.' },
    { en: 'What are you doing on Friday?', fr: 'Qu\'est-ce que tu fais vendredi ?', cat: 'Le futur au téléphone', sec: 'en18-s-futur' },
    { en: 'I\'d like to make an appointment for Tuesday.', fr: 'Je voudrais prendre rendez-vous pour mardi.', alt: ['Could I make an appointment for Tuesday?', 'Can I make an appointment for Tuesday?'], cat: 'Les rendez-vous', sec: 'en18-s-rdv', note: 'prendre rendez-vous = make an appointment.' },
    { en: 'Does Thursday suit you?', fr: 'Est-ce que jeudi vous convient ?', alt: ['Is Thursday OK for you?', 'Is Thursday all right for you?'], cat: 'Les rendez-vous', sec: 'en18-s-rdv' },
    { en: 'Let me check my diary.', fr: 'Je regarde mon agenda.', alt: ['I\'ll check my diary.'], cat: 'Les rendez-vous', sec: 'en18-s-rdv' },
    { en: 'I\'m afraid I can\'t make it on Monday.', fr: 'Malheureusement, je ne pourrai pas venir lundi.', alt: ['I\'m sorry, I can\'t make it on Monday.', 'I\'m afraid I can\'t come on Monday.'], cat: 'Les rendez-vous', sec: 'en18-s-rdv' },
    { en: 'Could we move it to Friday?', fr: 'Pourrait-on le déplacer à vendredi ?', alt: ['Can we move it to Friday?', 'Could we change it to Friday?'], cat: 'Les rendez-vous', sec: 'en18-s-rdv' },
    { en: 'I\'m calling to cancel my appointment.', fr: 'J\'appelle pour annuler mon rendez-vous.', alt: ['I\'m phoning to cancel my appointment.', 'I\'m ringing to cancel my appointment.'], cat: 'Les rendez-vous', sec: 'en18-s-rdv' }
  ],
  quiz: [
    { id: 'en18-q-01', q: '« I\'m afraid he isn\'t here. » Que veut dire « I\'m afraid » ici ?', choices: ['J\'ai peur', 'Malheureusement (je suis désolé)', 'Je pense', 'Je suis sûr'], answer: 1, topic: 'Appeler un service', sec: 'en18-s-appel',
      why: { 0: 'C\'est le sens habituel, mais ici c\'est une formule polie : personne n\'a peur !', 2: 'Je pense = I think.', 3: 'Je suis sûr = I\'m sure.' },
      explain: '**I\'m afraid…** annonce poliment une mauvaise nouvelle : malheureusement, il n\'est pas là.', say: 'I\'m afraid he isn\'t here.', level: 1 },
    { id: 'en18-q-02', q: 'La standardiste veut savoir qui appelle. Elle dit poliment :', choices: ['Who are you?', 'May I ask who\'s calling?', 'What is your call?', 'Who do you call?'], answer: 1, topic: 'Appeler un service', sec: 'en18-s-appel',
      why: { 0: 'Who are you? (Qui êtes-vous ?) est trop direct, presque impoli au téléphone.', 2: 'Cette phrase ne se dit pas.', 3: 'Who do you call? = Qui appelez-vous ?' },
      explain: '**May I ask who\'s calling?** = Puis-je savoir qui est à l\'appareil ? (who\'s = who is)', say: 'May I ask who\'s calling?', level: 1 },
    { id: 'en18-q-03', q: 'Complète : One moment, please. I\'ll put you ___.', choices: ['through', 'on', 'back', 'up'], answer: 0, topic: 'Les verbes du téléphone', sec: 'en18-s-verbes',
      why: { 1: 'put on = mettre (un vêtement).', 2: 'put back = remettre à sa place.', 3: 'put up = accrocher, ou héberger quelqu\'un.' },
      explain: '**put through** = mettre en relation. → One moment, please. I\'ll put you **through**. (Un instant, s\'il vous plaît. Je vous mets en relation.)', say: 'One moment, please. I\'ll put you through.', level: 1 },
    { id: 'en18-q-04', q: 'Complète : Could you ask her ___ me back?', choices: ['call', 'to call', 'calling', 'that she calls'], answer: 1, topic: 'Laisser un message', sec: 'en18-s-message',
      why: { 0: 'Après ask + personne, il faut to devant le verbe.', 2: 'Pas de -ing : ask her to call.', 3: 'On ne dit pas « ask her that she calls » en anglais.' },
      explain: 'Demander à quelqu\'un de faire = **ask** + personne + **to** + verbe. → Could you ask her **to call** me back? (Pourriez-vous lui demander de me rappeler ?)', say: 'Could you ask her to call me back?', level: 1 },
    { id: 'en18-q-05', q: '« The line is engaged. » Cela veut dire :', choices: ['La ligne est coupée.', 'La ligne est occupée.', 'La ligne est mauvaise.', 'La ligne est fiancée.'], answer: 1, topic: 'Appeler un service', sec: 'en18-s-appel',
      why: { 0: 'Coupée se dirait cut off (we were cut off).', 2: 'Mauvaise se dirait The line is bad.', 3: 'engaged veut bien dire fiancé… pour une personne ! Pour une ligne, c\'est « occupée ».' },
      explain: '**engaged** (pour une ligne de téléphone) = occupé. → The line is **engaged**. (La ligne est occupée.) En américain : The line is busy.', say: 'The line is engaged.', level: 1 },
    { id: 'en18-q-06', q: 'Comment se prononce la lettre E en anglais ?', choices: ['comme « i »', 'comme « eu »', 'comme « é »', 'comme « aï »'], answer: 0, topic: 'L\'alphabet', sec: 'en18-s-alphabet',
      why: { 1: '« eu », c\'est le E français.', 2: '« éï » (proche de « é »), c\'est la lettre A.', 3: '« aï », c\'est la lettre I.' },
      explain: 'En anglais, **E** se dit « i ». C\'est le grand piège : quand un Anglais dit « i », il épelle un E.', say: 'E', level: 1 },
    { id: 'en18-q-07', q: 'Et la lettre I ?', choices: ['comme « i »', 'comme « aï »', 'comme « éï »'], answer: 1, topic: 'L\'alphabet', sec: 'en18-s-alphabet',
      why: { 0: '« i », c\'est la lettre E en anglais.', 2: '« éï », c\'est la lettre A.' },
      explain: 'En anglais, **I** se dit « aï », comme le mot I (je).', say: 'I', level: 1 },
    { id: 'en18-q-08', q: 'La lettre G se dit « dji ». Quelle lettre se dit « djéï » ?', choices: ['G', 'J', 'Y', 'H'], answer: 1, topic: 'L\'alphabet', sec: 'en18-s-alphabet',
      why: { 0: 'G se dit « dji ».', 2: 'Y se dit « ouaï ».', 3: 'H se dit « éïtch ».' },
      explain: '**J** se dit « djéï » et **G** se dit « dji » : c\'est presque l\'inverse du français (G « jé », J « ji »).', say: 'G, J', level: 2 },
    { id: 'en18-q-09', q: 'Pour épeler « Hall » au téléphone, on dit :', choices: ['H, A, double L', 'H, A, two L', 'H, A, L twice'], answer: 0, topic: 'L\'alphabet', sec: 'en18-s-alphabet',
      why: { 1: 'On ne dit pas « two L » : deux lettres identiques = double.', 2: 'On comprendrait, mais on dit simplement double L.' },
      explain: 'Deux lettres identiques qui se suivent : **double**. → Hall : H, A, **double L**.', say: 'H, A, double L.', level: 1 },
    { id: 'en18-q-10', q: 'Comment lit-on « tom.lee@gmail.com » ?', choices: ['tom point lee at gmail point com', 'tom dot lee at gmail dot com', 'tom dot lee arobase gmail dot com', 'tom full stop lee at gmail full stop com'], answer: 1, topic: 'Adresse e-mail', sec: 'en18-s-email',
      why: { 0: 'Le point d\'une adresse se dit dot, pas « point ».', 2: '@ se dit at en anglais.', 3: 'full stop = le point à la fin d\'une phrase, pas dans une adresse.' },
      explain: '. = **dot**, @ = **at**. → tom **dot** lee **at** gmail **dot** com.', say: 'tom dot lee at gmail dot com', level: 1 },
    { id: 'en18-q-11', q: 'Que veut dire « Don\'t hang up! » ?', choices: ['Ne raccrochez pas !', 'Ne décrochez pas !', 'Rappelez-moi !', 'Parlez plus fort !'], answer: 0, topic: 'Les verbes du téléphone', sec: 'en18-s-verbes',
      why: { 1: 'Décrocher = pick up.', 2: 'Rappelez-moi = Call me back!', 3: 'Parlez plus fort = Speak up!' },
      explain: '**hang up** = raccrocher. → **Don\'t hang up!** (Ne raccrochez pas !)', say: 'Don\'t hang up!', level: 1 },
    { id: 'en18-q-12', q: 'Complète : Sorry, I can\'t hear you. Could you speak ___?', choices: ['up', 'on', 'through', 'off'], answer: 0, topic: 'Les verbes du téléphone', sec: 'en18-s-verbes',
      why: { 1: 'speak on ne veut pas dire « parler plus fort ».', 2: 'through sert dans put through / get through (la communication).', 3: 'off sert dans cut off (couper).' },
      explain: '**speak up** = parler plus fort. → Could you speak **up**? (Pourriez-vous parler plus fort ?)', say: 'Sorry, I can\'t hear you. Could you speak up?', level: 1 },
    { id: 'en18-q-13', q: 'Quelle phrase est correcte ?', choices: ['I\'ll call back you.', 'I\'ll call you back.', 'I\'ll back call you.'], answer: 1, topic: 'Les verbes du téléphone', sec: 'en18-s-verbes',
      why: { 0: 'Avec un pronom (you), il se place au milieu : call you back.', 2: 'back se place après le verbe, jamais avant.' },
      explain: 'Verbe + **pronom** + particule. → I\'ll call **you** back. (Je te rappelle.)', say: 'I\'ll call you back.', level: 1 },
    { id: 'en18-q-14', q: 'Le téléphone sonne, mais personne ne répond : Nobody is ___ up.', choices: ['picking', 'hanging', 'putting', 'speaking'], answer: 0, topic: 'Les verbes du téléphone', sec: 'en18-s-verbes',
      why: { 1: 'hang up = raccrocher : il faut d\'abord avoir décroché.', 2: 'put up ne s\'utilise pas pour le téléphone.', 3: 'speak up = parler plus fort.' },
      explain: '**pick up** = décrocher. → Nobody is **picking** up. (Personne ne décroche.)', say: 'Nobody is picking up.', level: 2 },
    { id: 'en18-q-15', q: 'Rendez-vous noté dans ton agenda : « Je vais chez le dentiste lundi. »', choices: ['I see the dentist on Monday.', 'I\'m seeing the dentist on Monday.', 'I seeing the dentist on Monday.', 'I\'m see the dentist on Monday.'], answer: 1, topic: 'Le futur au téléphone', sec: 'en18-s-futur',
      why: { 0: 'Le présent simple ne sert pas pour un rendez-vous prévu : il faut le présent continu.', 2: 'Il manque am : I\'m seeing.', 3: 'Après am, il faut la forme en -ing : I\'m seeing.' },
      explain: 'Rendez-vous déjà organisé → **présent continu**. → I**\'m seeing** the dentist on Monday.', say: 'I\'m seeing the dentist on Monday.', level: 2 },
    { id: 'en18-q-16', q: 'Pendant l\'appel, tu décides tout de suite de rappeler plus tard. Tu dis :', choices: ['I call you back later.', 'I\'m calling you back later.', 'I\'ll call you back later.'], answer: 2, topic: 'Le futur au téléphone', sec: 'en18-s-futur',
      why: { 0: 'Le présent simple ne sert pas pour une décision : il faut will.', 1: 'Le présent continu sert pour un rendez-vous déjà organisé, pas pour une décision prise à l\'instant.' },
      explain: 'Décision prise **sur le moment** → **will**. → **I\'ll call** you back later. (Je te rappelle plus tard.)', say: 'I\'ll call you back later.', level: 2 },
    { id: 'en18-q-17', q: 'Complète : What ___ you doing on Saturday? — I\'m visiting my sister.', choices: ['do', 'are', 'will', 'is'], answer: 1, topic: 'Le futur au téléphone', sec: 'en18-s-futur',
      why: { 0: 'do sert au présent simple (What do you do?), pas avec doing.', 2: 'will ne va pas avec doing : What will you do?', 3: 'is va avec he, she, it.' },
      explain: 'Projet organisé → présent continu : **are** + you + doing. → What **are** you doing on Saturday? (Qu\'est-ce que tu fais samedi ?)', say: 'What are you doing on Saturday? I\'m visiting my sister.', level: 1 },
    { id: 'en18-q-18', q: '« Prendre rendez-vous » se dit :', choices: ['take an appointment', 'make an appointment', 'do a meeting', 'have a rendezvous'], answer: 1, topic: 'Les rendez-vous', sec: 'en18-s-rdv',
      why: { 0: 'Piège : on ne dit pas « take », mais make an appointment.', 2: 'a meeting = une réunion.', 3: 'rendezvous ne s\'emploie presque pas pour un rendez-vous chez le médecin.' },
      explain: 'Prendre rendez-vous = **make an appointment**. → I\'d like to **make an appointment**. (Je voudrais prendre rendez-vous.)', say: 'I\'d like to make an appointment.', level: 1 },
    { id: 'en18-q-19', q: 'Que veut dire « Does Tuesday suit you? » ?', choices: ['Est-ce que mardi vous convient ?', 'Êtes-vous libre mardi soir ?', 'Vous mettez un costume mardi ?', 'Vous travaillez mardi ?'], answer: 0, topic: 'Les rendez-vous', sec: 'en18-s-rdv',
      why: { 1: 'Il n\'est pas question du soir (evening).', 2: 'a suit (le nom) = un costume, mais ici suit est un verbe : convenir.', 3: 'Travailler se dirait work.' },
      explain: '**suit** (verbe) = convenir. → Does Tuesday **suit** you? (Est-ce que mardi vous convient ?)', say: 'Does Tuesday suit you?', level: 2 },
    { id: 'en18-q-20', q: '« Je dois annuler mon rendez-vous. » :', choices: ['I have to cancel my appointment.', 'I have to postpone my appointment.', 'I have to confirm my appointment.', 'I have to cancel my agenda.'], answer: 0, topic: 'Les rendez-vous', sec: 'en18-s-rdv',
      why: { 1: 'postpone = reporter à plus tard.', 2: 'confirm = confirmer.', 3: 'an agenda = l\'ordre du jour : le rendez-vous se dit appointment.' },
      explain: 'Annuler = **cancel**. → I have to **cancel** my appointment. (Je dois annuler mon rendez-vous.)', say: 'I have to cancel my appointment.', level: 1 },
    { id: 'en18-q-21', q: 'Faux ami : « Je regarde mon agenda » se dit :', choices: ['Let me check my agenda.', 'Let me check my diary.', 'Let me check my journal.'], answer: 1, topic: 'Les rendez-vous', sec: 'en18-s-rdv',
      why: { 0: 'an agenda = l\'ordre du jour d\'une réunion.', 2: 'a journal = un journal intime ou une revue, pas un agenda.' },
      explain: 'Un agenda = **a diary**. → Let me check my **diary**. (Je regarde mon agenda.)', say: 'Let me check my diary.', level: 2 },
    { id: 'en18-q-22', q: 'Écoute. Que dit la standardiste ?', listen: true, say: 'I\'m afraid Mr Lee is in a meeting. Would you like to leave a message?', choices: ['M. Lee est en réunion ; voulez-vous laisser un message ?', 'M. Lee est en vacances ; rappelez plus tard.', 'M. Lee arrive ; patientez un instant.', 'M. Lee a laissé un message pour vous.'], answer: 0, topic: 'Compréhension orale', sec: 'en18-s-message',
      why: { 1: 'En vacances se dirait on holiday. Elle dit in a meeting.', 2: 'Patienter se dirait hold on. Elle propose de laisser un message.', 3: 'C\'est l\'inverse : c\'est vous qui pouvez laisser un message (Would you like to leave…?).' },
      explain: '**Mr Lee is in a meeting** (M. Lee est en réunion). **Would you like to leave a message?** (Voulez-vous laisser un message ?)', level: 1 },
    { id: 'en18-q-23', q: 'Écoute. Comment s\'écrit le nom de famille ?', listen: true, say: 'My surname is Grey: G, R, E, Y.', choices: ['GRAY', 'GREY', 'JREY', 'GRIY'], answer: 1, topic: 'Compréhension orale', sec: 'en18-s-alphabet',
      why: { 0: 'A se dirait « éï ». On entend E, qui se dit « i ».', 2: 'La première lettre se dit « dji » : c\'est un G (J se dirait « djéï »).', 3: 'Le « i » que tu entends, c\'est la lettre E en anglais.' },
      explain: 'G (« dji »), R (« âr »), E (« i »), Y (« ouaï ») → **GREY**.', level: 2 },
    { id: 'en18-q-24', q: 'Écoute. Que propose la personne ?', listen: true, say: 'Sorry, I can\'t make it on Tuesday. Can we meet on Thursday instead?', choices: ['De se voir mardi plutôt que jeudi', 'De se voir jeudi plutôt que mardi', 'D\'annuler le rendez-vous', 'De se voir mardi et jeudi'], answer: 1, topic: 'Compréhension orale', sec: 'en18-s-rdv',
      why: { 0: 'C\'est l\'inverse : elle ne peut pas venir mardi (I can\'t make it on Tuesday).', 2: 'Elle n\'annule pas (cancel) : elle propose un autre jour.', 3: 'instead = à la place : un seul rendez-vous, jeudi.' },
      explain: '**I can\'t make it on Tuesday** (je ne peux pas venir mardi). **Can we meet on Thursday instead?** (On peut se voir jeudi à la place ?)', level: 2 },
    { id: 'en18-q-25', q: 'Écoute. Quelle est l\'adresse e-mail ?', listen: true, say: 'My email address is kate dot hill at gmail dot com.', choices: ['kate.hill@gmail.com', 'kate-hill@gmail.com', 'katehill@gmail.com', 'kate_hill@gmail.com'], answer: 0, topic: 'Compréhension orale', sec: 'en18-s-email',
      why: { 1: 'Le tiret (-) se dirait dash.', 2: 'On entend dot entre kate et hill : il y a un point.', 3: 'Le tiret bas (_) se dirait underscore.' },
      explain: 'kate **dot** hill **at** gmail **dot** com → **kate.hill@gmail.com**.', level: 1 }
  ],
  exercises: [
    { id: 'en18-x-01', prompt: 'Complète : Hold on, I\'ll put you ___ to the manager.', answers: ['through'], topic: 'Les verbes du téléphone', sec: 'en18-s-verbes', strict: true,
      hint: 'mettre en relation = put …',
      explain: '**put through** = mettre en relation. → Hold on, I\'ll put you **through** to the manager. (Ne quittez pas, je vous passe le directeur.)',
      rule: 'put somebody through = passer quelqu\'un au téléphone',
      mistakes: [{ text: 'on', msg: 'put on = mettre (un vêtement). Pour passer quelqu\'un au téléphone : put you **through**.' }, { text: 'back', msg: 'back = en retour (call back = rappeler). Ici : put you **through**.' }],
      say: 'Hold on, I\'ll put you through to the manager.', level: 1 },
    { id: 'en18-x-02', prompt: 'Remets dans l\'ordre : back / you / call / I\'ll / .', answers: ['I\'ll call you back'], topic: 'Les verbes du téléphone', sec: 'en18-s-verbes',
      hint: 'Le pronom se met au milieu.',
      explain: '**I\'ll call you back.** (Je te rappelle.) Le pronom se place entre le verbe et la particule.',
      rule: 'verbe + pronom + particule : call you back, put you through',
      mistakes: [{ text: 'I\'ll call back you', msg: 'Avec un pronom (you, me, him…), il se place **au milieu** : call **you** back.' }, { text: 'I\'ll back call you', msg: 'back se place après le verbe : I\'ll **call you back**.' }],
      say: 'I\'ll call you back.', level: 1 },
    { id: 'en18-x-03', prompt: 'Traduis : Ne raccrochez pas !', answers: ['Don\'t hang up', 'Do not hang up', 'Please don\'t hang up', 'Don\'t hang up, please'], topic: 'Les verbes du téléphone', sec: 'en18-s-verbes',
      hint: 'raccrocher = hang …',
      explain: '**Don\'t hang up!** (Ne raccrochez pas !) hang up = raccrocher.',
      rule: 'raccrocher = hang up · décrocher = pick up · patienter = hold on',
      mistakes: [{ text: 'Don\'t pick up', msg: 'pick up = **décrocher**. Raccrocher = **hang up**.' }, { text: 'Don\'t hold on', msg: 'hold on = patienter, rester en ligne. Raccrocher = **hang up**.' }],
      say: 'Don\'t hang up!', level: 1 },
    { id: 'en18-x-04', prompt: 'Traduis : Pourriez-vous parler plus fort, s\'il vous plaît ?', answers: ['Could you speak up, please', 'Could you speak up', 'Can you speak up, please', 'Could you please speak up', 'Could you speak louder, please', 'Can you speak louder, please'], topic: 'Les verbes du téléphone', sec: 'en18-s-verbes',
      hint: 'parler plus fort = speak …',
      explain: '**Could you speak up, please?** (On peut aussi dire : Could you speak louder?)',
      rule: 'parler plus fort = speak up (ou speak louder)',
      mistakes: [{ text: 'Could you speak more strong, please', msg: '« plus fort » (la voix) = speak **up** (ou speak **louder**). strong = fort (musclé).' }, { text: 'Could you speak more loud, please', msg: 'loud est un mot court : son comparatif est **louder**. Ou, plus simple : speak **up**.' }],
      say: 'Could you speak up, please?', level: 1 },
    { id: 'en18-x-05', prompt: 'Complète (nous avons été coupés) : Sorry! I think we ___ cut off.', answers: ['were', 'got'], topic: 'Les verbes du téléphone', sec: 'en18-s-verbes', strict: true,
      hint: 'C\'est déjà arrivé : passé de be avec we.',
      explain: 'Expression toute faite : we **were** cut off (ou we got cut off) = nous avons été coupés.',
      rule: 'nous avons été coupés = we were cut off / we got cut off',
      mistakes: [{ text: 'was', msg: 'we → **were** (was va avec I, he, she, it).' }, { text: 'are', msg: 'C\'est déjà arrivé : il faut le passé → we **were** cut off.' }],
      say: 'Sorry! I think we were cut off.', level: 2 },
    { id: 'en18-x-06', prompt: 'Complète : Could you ask him ___ me back? (de me rappeler)', answers: ['to call', 'to ring', 'to phone'], topic: 'Laisser un message', sec: 'en18-s-message',
      hint: 'ask + personne + to + verbe',
      explain: '**ask** + personne + **to** + verbe. → Could you ask him **to call** me back? (Pourriez-vous lui demander de me rappeler ?)',
      rule: 'demander à quelqu\'un de faire = ask somebody to do',
      mistakes: [{ text: 'call', msg: 'Après ask + personne, il faut **to** + verbe : ask him **to call** me back.' }, { text: 'that he calls', msg: 'En anglais, on ne dit pas « ask him that he calls » : **ask him to call** me back.' }],
      say: 'Could you ask him to call me back?', level: 1 },
    { id: 'en18-x-07', prompt: 'Traduis : Voulez-vous laisser un message ?', answers: ['Would you like to leave a message', 'Do you want to leave a message'], topic: 'Laisser un message', sec: 'en18-s-message',
      hint: 'Voulez-vous… (poli) = Would you like to… ?',
      explain: '**Would you like to leave a message?** (Voulez-vous laisser un message ?)',
      rule: 'laisser un message = leave a message',
      mistakes: [{ text: 'Would you like to let a message', msg: '« laisser un message » = **leave** a message (let = laisser faire, permettre).' }, { text: 'Would you like leave a message', msg: 'Après would like, il faut **to** : Would you like **to** leave a message?' }],
      say: 'Would you like to leave a message?', level: 1 },
    { id: 'en18-x-08', prompt: 'Traduis : Pourriez-vous lui dire que j\'ai appelé ? (lui = à elle)', answers: ['Could you tell her that I called', 'Could you tell her I called', 'Can you tell her that I called', 'Can you tell her I called', 'Could you tell her that I phoned', 'Could you tell her I phoned', 'Could you tell her that I rang', 'Could you tell her I rang'], topic: 'Laisser un message', sec: 'en18-s-message',
      hint: 'dire à quelqu\'un = tell + personne',
      explain: '**Could you tell her that I called?** tell + la personne, directement (sans to).',
      rule: 'dire à quelqu\'un = tell somebody (sans to)',
      mistakes: [{ text: 'Could you say her that I called', msg: 'Avec la personne à qui on parle, on utilise **tell** : tell **her** (say ne prend pas la personne directement).' }, { text: 'Could you tell to her that I called', msg: 'Pas de **to** après tell : tell **her**.' }],
      say: 'Could you tell her that I called?', level: 2 },
    { id: 'en18-x-09', prompt: 'Écris la lettre qui se prononce « i » en anglais :', answers: ['E'], topic: 'L\'alphabet', sec: 'en18-s-alphabet', strict: true,
      hint: 'C\'est le grand piège des francophones.',
      explain: 'En anglais, **E** se dit « i ». (La lettre I se dit « aï ».)',
      rule: 'E = « i » · I = « aï »',
      mistakes: [{ text: 'I', msg: 'I se prononce « **aï** » en anglais. La lettre qui se dit « i », c\'est **E**.' }, { text: 'Y', msg: 'Y se prononce « **ouaï** ». La lettre qui se dit « i », c\'est **E**.' }],
      say: 'E', level: 1 },
    { id: 'en18-x-10', prompt: 'Écris la lettre qui se prononce « dji » en anglais :', answers: ['G'], topic: 'L\'alphabet', sec: 'en18-s-alphabet', strict: true,
      hint: 'Comme le début de « jeans ».',
      explain: 'En anglais, **G** se dit « dji ». (J se dit « djéï ».)',
      rule: 'G = « dji » · J = « djéï »',
      mistakes: [{ text: 'J', msg: 'J se prononce « **djéï** ». La lettre qui se dit « dji », c\'est **G**.' }, { text: 'D', msg: 'D se prononce « **di** ». « dji », c\'est **G**.' }],
      say: 'G', level: 1 },
    { id: 'en18-x-11', prompt: 'Écris la lettre qui se prononce « aï » en anglais :', answers: ['I'], topic: 'L\'alphabet', sec: 'en18-s-alphabet', strict: true,
      hint: 'Comme le mot « je » en anglais.',
      explain: 'En anglais, **I** se dit « aï », comme le mot I (je).',
      rule: 'I = « aï » · Y = « ouaï » · E = « i »',
      mistakes: [{ text: 'E', msg: 'E se prononce « **i** » en anglais. La lettre « aï », c\'est **I**.' }, { text: 'A', msg: 'A se prononce « **éï** ». La lettre « aï », c\'est **I**.' }],
      say: 'I', level: 1 },
    { id: 'en18-x-12', prompt: 'Épelle comme au téléphone, avec « double » : Hall → H, A, ___', answers: ['double L'], topic: 'L\'alphabet', sec: 'en18-s-alphabet',
      hint: 'Deux lettres identiques qui se suivent…',
      explain: 'Deux lettres identiques : **double**. → H, A, **double L**.',
      rule: 'deux lettres identiques = double + la lettre (double L, double S)',
      mistakes: [{ text: 'L L', msg: 'Pour deux lettres identiques qui se suivent, on dit **double** : H, A, **double L**.' }, { text: 'two L', msg: 'On ne dit pas « two L » : **double L**.' }],
      say: 'H, A, double L.', level: 1 },
    { id: 'en18-x-13', prompt: 'Écris en toutes lettres, comme on le dit : anna.brown@gmail.com', answers: ['anna dot brown at gmail dot com'], topic: 'Adresse e-mail', sec: 'en18-s-email',
      hint: '. = ? · @ = ?',
      explain: '. = **dot**, @ = **at**. → anna **dot** brown **at** gmail **dot** com.',
      rule: '@ = at · . = dot',
      mistakes: [{ re: '@', msg: 'Écris l\'adresse **en mots**, comme on la dit au téléphone : @ = **at**, . = **dot**.' }, { text: 'anna point brown at gmail point com', msg: 'Le point d\'une adresse se dit **dot** (pas « point »).' }, { text: 'anna dot brown arobase gmail dot com', msg: '@ se dit **at** en anglais.' }, { text: 'anna full stop brown at gmail full stop com', msg: 'full stop = le point à la fin d\'une phrase. Dans une adresse : **dot**.' }],
      say: 'anna dot brown at gmail dot com', level: 1 },
    { id: 'en18-x-14', prompt: 'Écris en toutes lettres, comme on le dit : paul_martin@orange.fr', answers: ['paul underscore martin at orange dot fr', 'paul underscore martin at orange dot f r'], topic: 'Adresse e-mail', sec: 'en18-s-email',
      hint: '_ = ? · @ = ? · . = ?',
      explain: '_ = **underscore**, @ = **at**, . = **dot**. → paul **underscore** martin **at** orange **dot** F R.',
      rule: '_ = underscore · - = dash',
      mistakes: [{ re: '@|_', msg: 'Écris l\'adresse **en mots**, comme on la dit au téléphone : _ = **underscore**, @ = **at**, . = **dot**.' }, { text: 'paul dash martin at orange dot fr', msg: 'dash = le tiret (-). Le tiret bas (_) = **underscore**.' }, { text: 'paul underscore martin at orange point fr', msg: 'Le point d\'une adresse se dit **dot**.' }],
      say: 'paul underscore martin at orange dot F R', level: 2 },
    { id: 'en18-x-15', prompt: 'Complète : My email address is tom ___ gmail dot com. (@)', answers: ['at'], topic: 'Adresse e-mail', sec: 'en18-s-email', strict: true,
      hint: '@ en anglais = ?',
      explain: '@ se dit **at**. → My email address is tom **at** gmail dot com.',
      rule: '@ = at',
      mistakes: [{ text: 'arobase', msg: 'En anglais, @ se dit **at**.' }, { text: 'and', msg: 'and = et. @ se dit **at**.' }],
      say: 'My email address is tom at gmail dot com.', level: 1 },
    { id: 'en18-x-16', prompt: 'Écris en lettres, comme au téléphone, avec « oh » et « double » : 07712', answers: ['oh double seven one two'], topic: 'Les numéros', sec: 'en18-s-email',
      hint: 'Chiffre par chiffre : 0 = oh ; 77 = double…',
      explain: 'On lit chiffre par chiffre : 0 = **oh**, 77 = **double seven**, puis **one**, **two**. → oh, double seven, one, two.',
      rule: 'Au téléphone : chiffre par chiffre, 0 = oh, deux chiffres identiques = double',
      mistakes: [{ re: '\\d', msg: 'Écris le numéro **en lettres**, comme on le dit au téléphone : oh, double seven, one, two.' }, { text: 'oh seven seven one two', msg: 'Pas faux à l\'oral, mais la consigne demande **double** : deux chiffres identiques qui se suivent → **double seven**.' }, { text: 'oh seventy-seven twelve', msg: 'Au téléphone, on lit les chiffres **un par un** : oh, double seven, one, two.' }],
      say: 'oh double seven one two', level: 2 },
    { id: 'en18-x-17', prompt: 'Rendez-vous prévu. Complète au présent continu : I ___ (see) the doctor on Monday.', answers: ['am seeing', '\'m seeing'], topic: 'Le futur au téléphone', sec: 'en18-s-futur',
      hint: 'am + verbe en -ing',
      explain: 'Rendez-vous déjà organisé → **présent continu**. → I **am seeing** the doctor on Monday. (Je vois le médecin lundi.)',
      rule: 'Rendez-vous prévu : am / is / are + -ing + mot de temps',
      mistakes: [{ text: 'see', msg: 'Pour un rendez-vous déjà prévu, on utilise le **présent continu** : I **am seeing** the doctor on Monday.' }, { text: 'will see', msg: 'La consigne demande le présent continu : pour un rendez-vous déjà dans l\'agenda → **am seeing**. (will sert pour une décision prise sur le moment.)' }, { text: 'seeing', msg: 'Il manque **am** : I **am** seeing.' }],
      say: 'I\'m seeing the doctor on Monday.', level: 1 },
    { id: 'en18-x-18', prompt: 'Complète au présent continu : We ___ (have) a meeting at ten tomorrow.', answers: ['are having', '\'re having'], topic: 'Le futur au téléphone', sec: 'en18-s-futur',
      hint: 'we → are + -ing (have → having)',
      explain: 'Réunion déjà prévue → présent continu. → We **are having** a meeting at ten tomorrow. (Nous avons une réunion demain à dix heures.)',
      rule: 'have → having (le e final tombe)',
      mistakes: [{ text: 'have', msg: 'Pour un rendez-vous prévu, il faut le **présent continu** : we **are having** a meeting.' }, { text: 'are have', msg: 'Après are, il faut la forme en **-ing** : are **having**.' }, { text: 'are haveing', msg: 'Orthographe : le e final tombe → **having**.' }],
      say: 'We are having a meeting at ten tomorrow.', level: 1 },
    { id: 'en18-x-19', prompt: 'Traduis (projet) : Qu\'est-ce que tu fais vendredi ?', answers: ['What are you doing on Friday', 'What are you doing Friday'], topic: 'Le futur au téléphone', sec: 'en18-s-futur',
      hint: 'Présent continu : What are you…?',
      explain: '**What are you doing on Friday?** Pour demander un projet, on utilise le présent continu.',
      rule: 'Demander un projet : What are you doing + moment ?',
      mistakes: [{ text: 'What do you do on Friday', msg: 'What do you do on Fridays? = que fais-tu **le vendredi** (chaque semaine). Pour ce vendredi (un projet) : **What are you doing** on Friday?' }, { text: 'What you are doing on Friday', msg: 'Dans la question, **are** passe devant le sujet : What **are you** doing?' }],
      say: 'What are you doing on Friday?', level: 2 },
    { id: 'en18-x-20', prompt: 'Décision sur le moment. Complète avec will : Hold on, I ___ (get) a pen.', answers: ['will get', '\'ll get'], topic: 'Le futur au téléphone', sec: 'en18-s-futur',
      hint: 'will + base verbale',
      explain: 'Décision prise **à l\'instant** → **will**. → Hold on, I**\'ll get** a pen. (Ne quitte pas, je vais chercher un stylo.)',
      rule: 'Décision sur le moment, proposition : I\'ll + base verbale',
      mistakes: [{ text: 'get', msg: 'Décision prise à l\'instant → **will** : I\'ll get a pen.' }, { text: 'am getting', msg: 'Le présent continu sert pour un rendez-vous prévu. Une décision prise à l\'instant → **I\'ll get**.' }, { text: 'will to get', msg: 'Pas de **to** après will : I will **get**.' }],
      say: 'Hold on, I\'ll get a pen.', level: 1 },
    { id: 'en18-x-21', prompt: 'Traduis : Je vous rappelle dans cinq minutes.', answers: ['I\'ll call you back in five minutes', 'I will call you back in five minutes', 'I\'ll ring you back in five minutes', 'I\'ll phone you back in five minutes'], topic: 'Le futur au téléphone', sec: 'en18-s-futur',
      hint: 'C\'est une promesse : will. dans cinq minutes = in…',
      explain: '**I\'ll call you back in five minutes.** Une promesse → will ; « dans » + durée = **in**.',
      rule: 'Je te rappelle (promesse) = I\'ll call you back · dans 5 minutes = in five minutes',
      mistakes: [{ text: 'I call you back in five minutes', msg: 'Le présent français « je vous rappelle » est ici une promesse → **I\'ll** call you back.' }, { text: 'I\'ll recall you in five minutes', msg: 'Rappeler (au téléphone) = **call back** ; recall = se souvenir.' }, { text: 'I\'ll call you back after five minutes', msg: '« dans cinq minutes » = **in** five minutes (after = après).' }],
      say: 'I\'ll call you back in five minutes.', level: 2 },
    { id: 'en18-x-22', prompt: 'Traduis : Je voudrais prendre rendez-vous.', answers: ['I\'d like to make an appointment', 'I would like to make an appointment', 'Could I make an appointment', 'Can I make an appointment'], topic: 'Les rendez-vous', sec: 'en18-s-rdv',
      hint: 'prendre rendez-vous = … an appointment',
      explain: '**I\'d like to make an appointment.** prendre rendez-vous = **make** an appointment.',
      rule: 'prendre rendez-vous = make an appointment',
      mistakes: [{ text: 'I\'d like to take an appointment', msg: '« prendre rendez-vous » = **make** an appointment (pas take).' }, { text: 'I\'d like to make a rendezvous', msg: 'Un rendez-vous (médecin, coiffeur, banque…) = **an appointment**.' }, { text: 'I\'d like to make a meeting', msg: 'a meeting = une réunion. Un rendez-vous (médecin, banque…) = **an appointment**.' }],
      say: 'I\'d like to make an appointment.', level: 1 },
    { id: 'en18-x-23', prompt: 'Traduis : J\'appelle pour annuler mon rendez-vous.', answers: ['I\'m calling to cancel my appointment', 'I am calling to cancel my appointment', 'I\'m phoning to cancel my appointment', 'I\'m ringing to cancel my appointment'], topic: 'Les rendez-vous', sec: 'en18-s-rdv',
      hint: 'Tu es en train d\'appeler : présent continu. pour + verbe = to.',
      explain: '**I\'m calling to cancel my appointment.** Ce que tu fais en ce moment → présent continu ; « pour » + verbe (le but) = **to**.',
      rule: 'J\'appelle pour… = I\'m calling to…',
      mistakes: [{ text: 'I call to cancel my appointment', msg: 'Ce que tu fais en ce moment même → présent continu : I**\'m calling** to cancel…' }, { text: 'I\'m calling for cancel my appointment', msg: '« pour » + verbe (le but) = **to** : I\'m calling **to** cancel.' }],
      say: 'I\'m calling to cancel my appointment.', level: 2 },
    { id: 'en18-x-24', prompt: 'Complète : I can\'t come on Monday. Can I come on Friday ___? (à la place)', answers: ['instead'], topic: 'Les rendez-vous', sec: 'en18-s-rdv',
      hint: 'à la place, en fin de phrase = ?',
      explain: '« à la place » = **instead**, en fin de phrase. → Can I come on Friday **instead**? (Est-ce que je peux venir vendredi à la place ?)',
      rule: 'à la place = instead (en fin de phrase)',
      mistakes: [{ text: 'in place', msg: '« à la place » = **instead** (en fin de phrase).' }, { text: 'rather', msg: 'rather = plutôt (I\'d rather…). En fin de phrase, « à la place » = **instead**.' }],
      say: 'I can\'t come on Monday. Can I come on Friday instead?', level: 1 },
    { id: 'en18-x-25', prompt: 'Traduis : Est-ce que jeudi vous convient ?', answers: ['Does Thursday suit you', 'Is Thursday OK for you', 'Is Thursday all right for you', 'Is Thursday good for you', 'Is Thursday convenient for you', 'Does Thursday work for you', 'Is Thursday OK'], topic: 'Les rendez-vous', sec: 'en18-s-rdv',
      hint: 'convenir = suit (verbe) : question avec does.',
      explain: '**Does Thursday suit you?** suit est un verbe : la question se fait avec does.',
      rule: 'Est-ce que … vous convient ? = Does … suit you?',
      mistakes: [{ text: 'Does Thursday suits you', msg: 'Après **does**, le verbe reste à la base : does Thursday **suit** you?' }, { text: 'Is Thursday suit you', msg: 'suit est un verbe : la question se fait avec **does** → **Does** Thursday suit you?' }],
      say: 'Does Thursday suit you?', level: 2 },
    { id: 'en18-x-26', prompt: 'Traduis : Je regarde mon agenda.', answers: ['Let me check my diary', 'I\'ll check my diary', 'I\'m checking my diary', 'I\'m looking at my diary', 'Let me look at my diary', 'I\'ll look at my diary'], topic: 'Les rendez-vous', sec: 'en18-s-rdv',
      hint: 'agenda = attention, faux ami !',
      explain: '**Let me check my diary.** (Je regarde mon agenda.) Un agenda = a diary.',
      rule: 'mon agenda = my diary (an agenda = l\'ordre du jour)',
      mistakes: [{ text: 'Let me check my agenda', msg: 'Faux ami : an agenda = l\'ordre du jour d\'une réunion. Mon agenda = **my diary**.' }, { text: 'I look my diary', msg: 'look a besoin de **at** : I\'m looking **at** my diary (ou : Let me check my diary).' }],
      say: 'Let me check my diary.', level: 2 },
    { id: 'en18-x-27', prompt: 'Complète avec le bon verbe : We have to ___ the meeting until next week. (reporter)', answers: ['postpone', 'put off'], topic: 'Les rendez-vous', sec: 'en18-s-rdv',
      hint: 'Attention au faux ami.',
      explain: 'Reporter (à plus tard) = **postpone** (ou put off). → We have to **postpone** the meeting until next week. (Nous devons reporter la réunion à la semaine prochaine.)',
      rule: 'reporter = postpone · annuler = cancel',
      mistakes: [{ text: 'cancel', msg: 'cancel = **annuler** (il n\'y aura pas de réunion). Reporter = **postpone** (ou put off).' }, { text: 'report', msg: 'Faux ami : to report = signaler, faire un rapport. Reporter (à plus tard) = **postpone**.' }],
      say: 'We have to postpone the meeting until next week.', level: 2 },
    { id: 'en18-x-28', prompt: 'Traduis : Comment ça s\'écrit ?', answers: ['How do you spell that', 'How do you spell it', 'How is that spelt', 'How is it spelt'], topic: 'L\'alphabet', sec: 'en18-s-alphabet',
      hint: 'épeler = spell ; question avec do.',
      explain: '**How do you spell that?** (Comment ça s\'écrit ?)',
      rule: 'Comment ça s\'écrit ? = How do you spell that?',
      mistakes: [{ text: 'How you spell that', msg: 'Il manque **do** : How **do** you spell that?' }, { text: 'How it is spelt', msg: 'Dans une question, **is** passe devant le sujet : How **is it** spelt? (ou : How do you spell it?)' }],
      say: 'How do you spell that?', level: 1 }
  ]
});
