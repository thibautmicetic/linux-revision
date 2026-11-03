/* Anglais — chapitre 12 : Converser au quotidien (questions, politesse, small talk, téléphone, shopping, urgences, present perfect) */
APP.registerChapter({
  id: 'en12', subject: 'anglais', num: 12,
  title: 'Converser au quotidien',
  subtitle: 'poser des questions, demander poliment, téléphoner, faire ses achats, demander de l\'aide',
  vocabSec: 'en12-s-vocab',
  sections: [
    {
      id: 'en12-s-questions', title: 'Poser une question',
      html: `
<p>En voyage, on passe son temps à <b>poser des questions</b> : où est… ? combien… ? quand… ? Une question anglaise se construit en deux étapes : un <b>mot interrogatif</b>, puis un <b>auxiliaire</b> placé avant le sujet.</p>
<h3>1. Les mots interrogatifs</h3>
<table><tr><th>Mot</th><th>Sens</th><th>Exemple</th></tr>
<tr><td><span class="say">what</span></td><td>quoi ? quel ?</td><td><span class="say">What is your name?</span><br>Comment vous appelez-vous ?</td></tr>
<tr><td><span class="say">where</span></td><td>où ?</td><td><span class="say">Where is the station?</span><br>Où est la gare ?</td></tr>
<tr><td><span class="say">when</span></td><td>quand ?</td><td><span class="say">When is the next train?</span><br>Quand part le prochain train ?</td></tr>
<tr><td><span class="say">who</span></td><td>qui ?</td><td><span class="say">Who is that man?</span><br>Qui est cet homme ?</td></tr>
<tr><td><span class="say">why</span></td><td>pourquoi ?</td><td><span class="say">Why are you tired?</span> — <span class="say">Because I didn't sleep well.</span><br>Pourquoi es-tu fatigué ? — Parce que j'ai mal dormi.</td></tr>
<tr><td><span class="say">how</span></td><td>comment ?</td><td><span class="say">How are you?</span><br>Comment allez-vous ?</td></tr>
<tr><td><span class="say">how much</span></td><td>combien ? (un prix, une quantité qu'on ne compte pas)</td><td><span class="say">How much is it?</span><br>Combien ça coûte ?</td></tr>
<tr><td><span class="say">how many</span></td><td>combien de ? (des choses qu'on compte)</td><td><span class="say">How many tickets do you want?</span><br>Combien de billets voulez-vous ?</td></tr>
<tr><td><span class="say">how often</span></td><td>à quelle fréquence ? tous les combien ?</td><td><span class="say">How often do you go swimming?</span><br>Tu vas nager tous les combien ?</td></tr>
<tr><td><span class="say">how long</span></td><td>combien de temps ?</td><td><span class="say">How long are you staying?</span><br>Combien de temps restez-vous ?</td></tr>
<tr><td><span class="say">which</span></td><td>quel ? lequel ? (parmi un choix)</td><td><span class="say">Which bus goes to the airport?</span><br>Quel bus va à l'aéroport ?</td></tr>
<tr><td><span class="say">whose</span></td><td>à qui ?</td><td><span class="say">Whose bag is this?</span><br>À qui est ce sac ?</td></tr></table>
<div class="callout tip"><b>Prononciation</b> Dans <span class="say">who</span> et <span class="say">whose</span>, le w ne se prononce pas : « hou », « houz ». Dans <span class="say">what</span>, <span class="say">where</span>, <span class="say">when</span>, <span class="say">why</span>, on entend un petit « w » au début.</div>
<h3>2. La construction : mot interrogatif + auxiliaire + sujet + verbe</h3>
<p>En français, on peut dire « Tu habites où ? ». En anglais, c'est impossible : il faut un <b>auxiliaire</b> (un petit verbe « aide » qui sert à fabriquer la question), placé <b>avant le sujet</b>. Tu les connais déjà :</p>
<table><tr><th>Quand ?</th><th>Auxiliaire</th><th>Exemple</th></tr>
<tr><td>Présent simple (habitudes)</td><td><span class="say">do</span> / <span class="say">does</span> (he, she, it)</td><td><span class="say">Where do you live?</span> — Où habitez-vous ?<br><span class="say">What does your son do?</span> — Que fait votre fils dans la vie ?</td></tr>
<tr><td>Prétérit (passé terminé)</td><td><span class="say">did</span></td><td><span class="say">When did you arrive?</span> — Quand êtes-vous arrivé ?</td></tr>
<tr><td>Avec be : en ce moment (-ing), un lieu, un état</td><td><span class="say">am</span> / <span class="say">is</span> / <span class="say">are</span> (passé : <span class="say">was</span> / <span class="say">were</span>)</td><td><span class="say">What are you doing?</span> — Que faites-vous ?<br><span class="say">Where is the bank?</span> — Où est la banque ?</td></tr>
<tr><td>Futur</td><td><span class="say">will</span></td><td><span class="say">When will you come back?</span> — Quand reviendrez-vous ?</td></tr>
<tr><td>Possibilité, permission</td><td><span class="say">can</span>, <span class="say">could</span></td><td><span class="say">How can I help you?</span> — Comment puis-je vous aider ?</td></tr></table>
<div class="callout key"><b>À retenir</b> <b>Mot interrogatif + auxiliaire + sujet + verbe ?</b><br>Après <span class="say">do</span>, <span class="say">does</span>, <span class="say">did</span>, <span class="say">will</span>, <span class="say">can</span>, le verbe reste à la <b>base</b> : pas de -s, pas de -ed.</div>
<p><b>Les réponses courtes</b> reprennent l'auxiliaire de la question :<br>
<span class="say">Do you like tea? — Yes, I do.</span> · <span class="say">Did you sleep well? — No, I didn't.</span> · <span class="say">Are you tired? — Yes, I am.</span> · <span class="say">Can you swim? — No, I can't.</span></p>
<div class="callout warn"><b>Pièges fréquents</b>
<ul>
<li>« Where you live? » : il manque l'auxiliaire → <span class="say">Where do you live?</span></li>
<li>« Where does she lives? » : pas de -s après does → <span class="say">Where does she live?</span></li>
<li>« When did you arrived? » : après did, la base → <span class="say">When did you arrive?</span></li>
<li>« How much tickets? » : les billets se comptent → <span class="say">How many tickets?</span></li>
<li><span class="say">who</span> (qui ?) ≠ <span class="say">whose</span> (à qui ?). Et <span class="say">who's</span> = who is (qui est).</li>
</ul></div>
<div class="callout info"><b>Petite exception</b> Quand <span class="say">who</span> ou <span class="say">what</span> est lui-même le sujet (« qui fait l'action ? »), pas d'auxiliaire : <span class="say">Who wants a coffee?</span> (Qui veut un café ?) · <span class="say">What happened?</span> (Que s'est-il passé ?)</div>`
    },
    {
      id: 'en12-s-poli', title: 'Demander poliment',
      html: `
<p>En anglais, la politesse passe par quelques petits mots : <span class="say">please</span> (s'il vous plaît), <span class="say">could</span> (pourriez-vous, pourrais-je) et <span class="say">would</span> (voudriez-vous, je voudrais). Sans eux, une demande peut paraître sèche, même si elle est correcte.</p>
<table><tr><th>Pour…</th><th>On dit</th><th>Exemple</th></tr>
<tr><td>demander à quelqu'un de faire quelque chose</td><td><span class="say">Can you…?</span><br><span class="say">Could you…, please?</span> (plus poli)</td><td><span class="say">Could you help me, please?</span><br>Pourriez-vous m'aider, s'il vous plaît ?</td></tr>
<tr><td>demander la permission</td><td><span class="say">Can I…?</span> / <span class="say">Could I…?</span></td><td><span class="say">Can I sit here?</span><br>Puis-je m'asseoir ici ?</td></tr>
<tr><td>demander un objet</td><td><span class="say">Could I have…, please?</span></td><td><span class="say">Could I have the bill, please?</span><br>Pourrais-je avoir l'addition, s'il vous plaît ?</td></tr>
<tr><td>proposer quelque chose</td><td><span class="say">Would you like…?</span></td><td><span class="say">Would you like a coffee?</span><br>Voulez-vous un café ?</td></tr>
<tr><td>dire ce que l'on veut</td><td><span class="say">I'd like…</span> (= <span class="say">I would like</span>)</td><td><span class="say">I'd like a ticket to London, please.</span><br>Je voudrais un billet pour Londres, s'il vous plaît.</td></tr></table>
<h3>Répondre</h3>
<ul>
<li>Pour dire oui : <span class="say">Yes, of course.</span> (Oui, bien sûr.) · <span class="say">Sure!</span> (Bien sûr ! — plus familier) · <span class="say">Yes, please.</span> (Oui, volontiers — pour accepter une offre)</li>
<li>Pour dire non : <span class="say">Sorry, I can't.</span> (Désolé, je ne peux pas.) · <span class="say">No, thank you.</span> (Non, merci.)</li>
</ul>
<h3>Quand on ne comprend pas</h3>
<ul>
<li><span class="say">Sorry, I don't understand.</span> — Désolé, je ne comprends pas.</li>
<li><span class="say">Could you speak more slowly, please?</span> — Pourriez-vous parler plus lentement, s'il vous plaît ?</li>
<li><span class="say">Could you repeat that, please?</span> — Pourriez-vous répéter, s'il vous plaît ?</li>
<li><span class="say">What does this word mean?</span> — Que veut dire ce mot ?</li>
<li><span class="say">How do you say this in English?</span> — Comment dit-on ça en anglais ?</li>
</ul>
<div class="callout key"><b>À retenir</b> Après <span class="say">can</span>, <span class="say">could</span>, <span class="say">would</span> : le verbe directement, <b>sans « to »</b> (Could you open…, jamais « Could you to open »). <span class="say">please</span> se met à la fin, ou juste après le sujet : <span class="say">Could you please help me?</span></div>
<div class="callout warn"><b>Pièges</b> <span class="say">Would you like a tea?</span> (Voulez-vous un thé ? = une offre) ≠ <span class="say">Do you like tea?</span> (Aimez-vous le thé ? = un goût en général).<br>« I want a coffee » est correct mais sonne brusque, comme un enfant qui réclame : préfère <span class="say">I'd like a coffee, please.</span></div>`
    },
    {
      id: 'en12-s-smalltalk', title: 'Faire la conversation (small talk)',
      html: `
<p>Le <b>small talk</b>, c'est la petite conversation polie avec un inconnu : dans une file d'attente, un train, un hôtel. Les Britanniques l'adorent ! Quelques phrases suffisent pour être sympathique.</p>
<h3>Engager la conversation</h3>
<ul>
<li><span class="say">Nice weather today, isn't it?</span> — Il fait beau aujourd'hui, n'est-ce pas ? → <span class="say">Yes, lovely!</span> (Oui, magnifique !)</li>
<li><span class="say">It's cold today, isn't it?</span> — Il fait froid aujourd'hui, n'est-ce pas ?</li>
<li><span class="say">Is this seat free?</span> — Cette place est-elle libre ?</li>
</ul>
<h3>Faire connaissance</h3>
<table><tr><th>Question</th><th>Réponse possible</th></tr>
<tr><td><span class="say">Where are you from?</span><br>D'où venez-vous ?</td><td><span class="say">I'm from France. I'm French.</span><br>Je viens de France. Je suis français(e).</td></tr>
<tr><td><span class="say">What do you do?</span><br>Que faites-vous dans la vie ?</td><td><span class="say">I'm retired. I was a teacher.</span><br>Je suis à la retraite. J'étais professeur.</td></tr>
<tr><td><span class="say">Are you on holiday?</span><br>Êtes-vous en vacances ?</td><td><span class="say">Yes, we're here for a week.</span><br>Oui, nous sommes ici pour une semaine.</td></tr>
<tr><td><span class="say">Is it your first time in London?</span><br>C'est votre première fois à Londres ?</td><td><span class="say">No, it's my second time.</span><br>Non, c'est la deuxième fois.</td></tr>
<tr><td><span class="say">How was your trip?</span><br>Comment s'est passé votre voyage ?</td><td><span class="say">It was fine, thanks.</span><br>Ça s'est bien passé, merci.</td></tr></table>
<h3>Se quitter</h3>
<ul>
<li><span class="say">It was nice talking to you.</span> — J'ai été ravi(e) de discuter avec vous.</li>
<li><span class="say">Enjoy your holiday!</span> — Bonnes vacances !</li>
<li><span class="say">Have a nice day!</span> — Bonne journée ! → <span class="say">Thanks, you too!</span> (Merci, vous aussi !)</li>
</ul>
<div class="callout key"><b>À retenir</b> <span class="say">isn't it?</span> à la fin d'une phrase = « n'est-ce pas ? ». C'est la façon la plus simple de lancer une conversation : <span class="say">Lovely day, isn't it?</span></div>
<div class="callout warn"><b>Pièges</b>
<ul>
<li><span class="say">What do you do?</span> = quel est votre métier ? ≠ <span class="say">What are you doing?</span> = que faites-vous en ce moment ?</li>
<li>Les nationalités prennent une <b>majuscule</b> : <span class="say">I'm French</span>, <span class="say">She's English</span>.</li>
<li>À « Have a nice day! », on répond <span class="say">You too!</span> (vous aussi), pas « Me too » (moi aussi).</li>
</ul></div>
<div class="callout tip"><b>Astuce culturelle</b> Sujets sûrs : la météo, le voyage, d'où l'on vient. Avec un inconnu, on évite l'âge, le salaire et la politique.</div>`
    },
    {
      id: 'en12-s-telephone', title: 'Au téléphone',
      html: `
<p>Au téléphone, pas de gestes pour t'aider : il faut quelques <b>phrases toutes faites</b>. Bonne nouvelle, ce sont toujours les mêmes !</p>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">Hello?</span></td><td>Allô ?</td></tr>
<tr><td><span class="say">Hello, this is Paul speaking.</span><br><span class="say">Hello, it's Paul.</span></td><td>Allô, c'est Paul (à l'appareil).</td></tr>
<tr><td><span class="say">Can I speak to Mary, please?</span></td><td>Puis-je parler à Mary, s'il vous plaît ?</td></tr>
<tr><td><span class="say">Who's calling, please?</span></td><td>C'est de la part de qui ?</td></tr>
<tr><td><span class="say">Speaking.</span></td><td>C'est moi-même.</td></tr>
<tr><td><span class="say">Hold on, please.</span><br><span class="say">Just a moment, please.</span></td><td>Ne quittez pas.<br>Un instant, s'il vous plaît.</td></tr>
<tr><td><span class="say">She isn't here at the moment.</span></td><td>Elle n'est pas là en ce moment.</td></tr>
<tr><td><span class="say">Can I take a message?</span></td><td>Puis-je prendre un message ?</td></tr>
<tr><td><span class="say">Could you call me back?</span></td><td>Pourriez-vous me rappeler ?</td></tr>
<tr><td><span class="say">I'll call you later.</span></td><td>Je t'appellerai plus tard. / Je vous rappellerai plus tard.</td></tr>
<tr><td><span class="say">Sorry, I can't hear you.</span></td><td>Désolé, je ne vous entends pas.</td></tr>
<tr><td><span class="say">Sorry, wrong number.</span></td><td>Désolé, c'est une erreur de numéro.</td></tr>
<tr><td><span class="say">Could you spell that, please?</span></td><td>Pourriez-vous épeler, s'il vous plaît ?</td></tr></table>
<h3>Un appel type</h3>
<p>— <span class="say">Hello, this is Paul Martin speaking. Could I speak to Mrs Brown, please?</span><br>(Allô, c'est Paul Martin. Pourrais-je parler à Mme Brown, s'il vous plaît ?)<br>
— <span class="say">I'm sorry, she isn't here at the moment. Can I take a message?</span><br>(Je suis désolé, elle n'est pas là en ce moment. Puis-je prendre un message ?)<br>
— <span class="say">Yes, could she call me back, please?</span><br>(Oui, pourrait-elle me rappeler, s'il vous plaît ?)<br>
— <span class="say">Of course. What's your number?</span><br>(Bien sûr. Quel est votre numéro ?)</p>
<div class="callout tip"><b>Donner un numéro</b> En anglais, on lit les chiffres <b>un par un</b>. Le 0 se dit souvent <span class="say">oh</span>, et deux chiffres identiques se disent avec <span class="say">double</span> : 44 = <span class="say">double four</span>. Exemple : 01 23 44 = <span class="say">oh one, two three, double four</span>.</div>
<div class="callout key"><b>À retenir</b> Au téléphone, on se présente avec <span class="say">This is…</span> ou <span class="say">It's…</span>, pas avec « I am… ». Le petit mot <b>me</b> se met au milieu : <span class="say">call me back</span>.</div>
<div class="callout warn"><b>Piège</b> « Rappeler quelqu'un » au téléphone = <span class="say">call back</span>. Le mot anglais <span class="say">recall</span> veut dire « se souvenir » : ne dis pas « Could you recall me? ».</div>`
    },
    {
      id: 'en12-s-shopping', title: 'Faire du shopping',
      html: `
<p>Dans un magasin, le vendeur pose presque toujours les mêmes questions. Voici de quoi répondre… et demander.</p>
<h3>Le vendeur demande</h3>
<table><tr><th>Le vendeur</th><th>Tu réponds</th></tr>
<tr><td><span class="say">Can I help you?</span><br>Je peux vous aider ?</td><td><span class="say">I'm just looking, thanks.</span> — Je regarde seulement, merci.<br><span class="say">Yes, I'm looking for a jumper.</span> — Oui, je cherche un pull.</td></tr>
<tr><td><span class="say">What size are you?</span><br>Quelle taille faites-vous ?</td><td><span class="say">I'm a medium.</span> — Je fais du M.</td></tr>
<tr><td><span class="say">How would you like to pay?</span><br>Comment souhaitez-vous payer ?</td><td><span class="say">By card, please.</span> — Par carte, s'il vous plaît.<br><span class="say">In cash.</span> — En espèces.</td></tr></table>
<h3>Tu demandes</h3>
<ul>
<li><span class="say">Do you have it in blue?</span> — L'avez-vous en bleu ?</li>
<li><span class="say">Do you have it in a bigger size?</span> — L'avez-vous dans une taille plus grande ? (<span class="say">a smaller size</span> = une taille plus petite)</li>
<li><span class="say">Can I try it on?</span> — Puis-je l'essayer ?</li>
<li><span class="say">Where are the changing rooms?</span> — Où sont les cabines d'essayage ?</li>
<li><span class="say">It's too small.</span> / <span class="say">It's too big.</span> — C'est trop petit. / C'est trop grand.</li>
<li><span class="say">How much is it?</span> — Combien ça coûte ? · <span class="say">How much are they?</span> — Combien coûtent-ils ?</li>
<li><span class="say">I'll take it.</span> — Je le prends.</li>
<li><span class="say">Can I pay by card?</span> — Puis-je payer par carte ?</li>
<li><span class="say">Could I have a receipt, please?</span> — Pourrais-je avoir un ticket de caisse, s'il vous plaît ?</li>
</ul>
<p>Le vendeur te rend la monnaie : <span class="say">Here's your change.</span> (Voici votre monnaie.)</p>
<h3>Lire un prix</h3>
<p>£12.50 → <span class="say">twelve pounds fifty</span> · $5.99 → <span class="say">five dollars ninety-nine</span> · 20 € → <span class="say">twenty euros</span></p>
<div class="callout key"><b>À retenir</b> Pour un prix : <span class="say">How much…?</span> (jamais how many). <span class="say">it</span> pour une seule chose, <span class="say">them</span> pour plusieurs : <span class="say">Can I try them on?</span> · <span class="say">I'll take them.</span></div>
<div class="callout warn"><b>Pièges</b>
<ul>
<li><span class="say">trousers</span> (un pantalon), <span class="say">jeans</span>, <span class="say">shoes</span> sont au pluriel : <span class="say">How much are these trousers?</span></li>
<li>Dans <span class="say">try it on</span>, le petit mot <b>it</b> se place au milieu (pas « try on it »).</li>
<li><b>par</b> carte = <span class="say">by card</span> ; <b>en</b> espèces = <span class="say">in cash</span>.</li>
</ul></div>
<div class="callout tip"><b>Astuce</b> Les tailles et les pointures britanniques ne sont pas les mêmes qu'en France : demande toujours à essayer (<span class="say">Can I try it on?</span>).</div>`
    },
    {
      id: 'en12-s-urgences', title: 'Urgences : demander de l\'aide',
      html: `
<p>On espère ne jamais en avoir besoin, mais ces phrases peuvent tout changer. Apprends-les par cœur !</p>
<div class="callout info"><b>Numéros d'urgence</b> Le <b>112</b> fonctionne dans toute l'Europe, Royaume-Uni compris. Au Royaume-Uni, il y a aussi le <b>999</b> ; aux États-Unis et au Canada, le <b>911</b>.</div>
<h3>Appeler à l'aide</h3>
<ul>
<li><span class="say">Help!</span> — Au secours !</li>
<li><span class="say">Call an ambulance!</span> — Appelez une ambulance !</li>
<li><span class="say">Call the police!</span> — Appelez la police !</li>
<li><span class="say">Fire!</span> — Au feu !</li>
<li><span class="say">Stop, thief!</span> — Au voleur !</li>
</ul>
<h3>Expliquer le problème</h3>
<ul>
<li><span class="say">I'm lost.</span> — Je suis perdu(e).</li>
<li><span class="say">I've lost my wallet.</span> — J'ai perdu mon portefeuille. (<span class="say">my passport</span> = mon passeport, <span class="say">my keys</span> = mes clés)</li>
<li><span class="say">Someone stole my bag.</span> — On m'a volé mon sac.</li>
<li><span class="say">There was an accident.</span> — Il y a eu un accident.</li>
<li><span class="say">I don't feel well.</span> — Je ne me sens pas bien.</li>
<li><span class="say">It hurts here.</span> — J'ai mal ici.</li>
<li><span class="say">I need a doctor.</span> — J'ai besoin d'un médecin.</li>
</ul>
<h3>Demander où aller</h3>
<ul>
<li><span class="say">Can you help me, please?</span> — Pouvez-vous m'aider, s'il vous plaît ?</li>
<li><span class="say">Where is the nearest hospital?</span> — Où est l'hôpital le plus proche ?</li>
<li><span class="say">Where is the nearest pharmacy?</span> — Où est la pharmacie la plus proche ?</li>
<li><span class="say">Is there a police station near here?</span> — Y a-t-il un commissariat près d'ici ?</li>
<li><span class="say">Do you speak French?</span> — Parlez-vous français ?</li>
</ul>
<div class="callout key"><b>À retenir</b> <span class="say">the nearest</span> = le plus proche (<span class="say">near</span> → <span class="say">nearer</span> → <span class="say">the nearest</span>). Il se place <b>avant</b> le nom : <span class="say">the nearest pharmacy</span> (la pharmacie la plus proche).</div>
<div class="callout warn"><b>Pièges</b>
<ul>
<li>« Je suis perdu » = <span class="say">I'm lost</span>, pas « I'm losing » (= je suis en train de perdre, par exemple un match).</li>
<li>« J'ai perdu mes clés » (et je ne les ai toujours pas) = <span class="say">I've lost my keys</span> : c'est le present perfect, expliqué dans la fiche suivante.</li>
<li>Au Royaume-Uni, la pharmacie s'appelle souvent <span class="say">the chemist's</span>. Les médicaments = <span class="say">medicine</span>.</li>
</ul></div>
<div class="callout tip"><b>Astuce</b> Note dans ton téléphone le nom et l'adresse de ton hôtel. En cas de souci, montre l'écran en disant : <span class="say">This is my hotel. Can you help me?</span></div>`
    },
    {
      id: 'en12-s-present-perfect', title: 'Le present perfect : « Have you ever…? »',
      html: `
<p>Le <b>present perfect</b> est un temps du passé qui garde un lien avec <b>aujourd'hui</b>. On l'utilise surtout pour parler de son <b>expérience</b> (« dans ma vie, j'ai déjà… ») ou de ce qui <b>vient de se passer</b>. On n'en voit ici que l'essentiel.</p>
<h3>La construction : have / has + participe passé</h3>
<p>Le participe passé, c'est la <b>3e colonne</b> des verbes irréguliers (chapitre 9) : <span class="say">be, was, been</span> · <span class="say">see, saw, seen</span>. Pour les verbes réguliers, c'est la forme en <b>-ed</b> : <span class="say">visit</span> → <span class="say">visited</span>.</p>
<table><tr><th></th><th>I / you / we / they</th><th>he / she / it</th></tr>
<tr><td>Affirmation</td><td><span class="say">I have seen</span> (<span class="say">I've seen</span>)</td><td><span class="say">She has seen</span> (<span class="say">She's seen</span>)</td></tr>
<tr><td>Négation</td><td><span class="say">I haven't seen</span></td><td><span class="say">She hasn't seen</span></td></tr>
<tr><td>Question</td><td><span class="say">Have you seen…?</span></td><td><span class="say">Has she seen…?</span></td></tr>
<tr><td>Réponse courte</td><td><span class="say">Yes, I have.</span> / <span class="say">No, I haven't.</span></td><td><span class="say">Yes, she has.</span> / <span class="say">No, she hasn't.</span></td></tr></table>
<h3>1. L'expérience : ever (déjà, un jour) et never (jamais)</h3>
<ul>
<li><span class="say">Have you ever been to London?</span> — Es-tu déjà allé à Londres ? (une fois dans ta vie)</li>
<li><span class="say">Yes, I have. I've been there twice.</span> — Oui. J'y suis allé deux fois.</li>
<li><span class="say">No, I haven't. I've never been to England.</span> — Non. Je ne suis jamais allé en Angleterre.</li>
<li><span class="say">Have you ever tried Indian food?</span> — As-tu déjà goûté la cuisine indienne ?</li>
<li><span class="say">My wife has never driven in London.</span> — Ma femme n'a jamais conduit à Londres.</li>
</ul>
<h3>2. Ce qui vient de se passer : just, already, yet</h3>
<ul>
<li><span class="say">I've just arrived.</span> — Je viens d'arriver. (<span class="say">just</span> = venir de)</li>
<li><span class="say">I've already paid.</span> — J'ai déjà payé.</li>
<li><span class="say">Have you finished yet?</span> — Tu as (déjà) fini ?</li>
<li><span class="say">I haven't finished yet.</span> — Je n'ai pas encore fini.</li>
</ul>
<div class="callout key"><b>À retenir</b> <span class="say">ever</span>, <span class="say">never</span>, <span class="say">just</span>, <span class="say">already</span> se placent <b>entre</b> have et le participe : <span class="say">I have never seen</span>. <span class="say">yet</span> se met <b>à la fin</b> d'une question ou d'une négation.</div>
<h3>3. Present perfect ou prétérit ?</h3>
<p>Dès qu'on donne un <b>moment précis</b> du passé (<span class="say">yesterday</span>, <span class="say">last year</span>, <span class="say">in 2018</span>, <span class="say">two days ago</span>), on utilise le <b>prétérit</b>. Sans date (« dans ma vie », « jusqu'à maintenant »), on utilise le <b>present perfect</b>.</p>
<table><tr><th>Present perfect (pas de date)</th><th>Prétérit (date précise)</th></tr>
<tr><td><span class="say">I have been to Scotland.</span><br>Je suis déjà allé en Écosse.</td><td><span class="say">I went to Scotland in 2018.</span><br>Je suis allé en Écosse en 2018.</td></tr>
<tr><td><span class="say">She has lost her keys.</span><br>Elle a perdu ses clés (elle ne les a toujours pas).</td><td><span class="say">She lost her keys yesterday.</span><br>Elle a perdu ses clés hier.</td></tr></table>
<p>Une conversation passe souvent de l'un à l'autre :<br>
<span class="say">Have you ever been to Italy?</span> — <span class="say">Yes, I have.</span> — <span class="say">When did you go?</span> — <span class="say">I went there in 2019.</span><br>
(Es-tu déjà allé en Italie ? — Oui. — Quand y es-tu allé ? — J'y suis allé en 2019.)</p>
<div class="callout warn"><b>Pièges</b>
<ul>
<li>« I have been to London last year » est faux : avec une date → <span class="say">I went to London last year.</span></li>
<li>Le passé composé français ne se traduit pas toujours par have : « Hier, j'ai mangé une pizza » = <span class="say">Yesterday I ate a pizza.</span></li>
<li><span class="say">He has been to Paris</span> = il est déjà allé à Paris (et il est revenu) ; <span class="say">He has gone to Paris</span> = il est parti à Paris (il y est encore).</li>
</ul></div>`
    },
    {
      id: 'en12-s-vocab', title: 'Vocabulaire : magasins, argent, vêtements, téléphone',
      html: `
<p>Clique sur un mot pour l'entendre. Les mots de ces tableaux reviennent dans les exercices et les flashcards.</p>
<h3>Magasins et services</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">a shop</span> (US : <span class="say">a store</span>)</td><td>un magasin</td></tr>
<tr><td><span class="say">a supermarket</span></td><td>un supermarché</td></tr>
<tr><td><span class="say">a bakery</span></td><td>une boulangerie</td></tr>
<tr><td><span class="say">a bank</span></td><td>une banque</td></tr>
<tr><td><span class="say">a cash machine</span> (US : <span class="say">an ATM</span>)</td><td>un distributeur de billets</td></tr>
<tr><td><span class="say">the post office</span></td><td>la poste</td></tr>
<tr><td><span class="say">a pharmacy</span> (UK : <span class="say">a chemist's</span>)</td><td>une pharmacie</td></tr>
<tr><td><span class="say">a hospital</span></td><td>un hôpital</td></tr>
<tr><td><span class="say">a police station</span></td><td>un commissariat de police</td></tr>
<tr><td><span class="say">the toilets</span> (US : <span class="say">the restroom</span>)</td><td>les toilettes</td></tr>
<tr><td><span class="say">open</span> / <span class="say">closed</span></td><td>ouvert / fermé</td></tr></table>
<h3>L'argent</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">money</span></td><td>l'argent</td></tr>
<tr><td><span class="say">cash</span></td><td>l'argent liquide, les espèces</td></tr>
<tr><td><span class="say">a card</span></td><td>une carte bancaire</td></tr>
<tr><td><span class="say">a coin</span></td><td>une pièce de monnaie</td></tr>
<tr><td><span class="say">a note</span> (US : <span class="say">a bill</span>)</td><td>un billet de banque</td></tr>
<tr><td><span class="say">change</span></td><td>la monnaie (qu'on vous rend)</td></tr>
<tr><td><span class="say">the price</span></td><td>le prix</td></tr>
<tr><td><span class="say">cheap</span> / <span class="say">expensive</span></td><td>pas cher / cher</td></tr>
<tr><td><span class="say">free</span></td><td>gratuit (et aussi : libre)</td></tr>
<tr><td><span class="say">a receipt</span></td><td>un ticket de caisse, un reçu</td></tr></table>
<h3>Vêtements et tailles</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">clothes</span></td><td>les vêtements</td></tr>
<tr><td><span class="say">a shirt</span> / <span class="say">a T-shirt</span></td><td>une chemise / un tee-shirt</td></tr>
<tr><td><span class="say">trousers</span> (US : <span class="say">pants</span>) / <span class="say">jeans</span></td><td>un pantalon / un jean</td></tr>
<tr><td><span class="say">a dress</span> / <span class="say">a skirt</span></td><td>une robe / une jupe</td></tr>
<tr><td><span class="say">a jumper</span> (US : <span class="say">a sweater</span>)</td><td>un pull</td></tr>
<tr><td><span class="say">a jacket</span> / <span class="say">a coat</span></td><td>une veste / un manteau</td></tr>
<tr><td><span class="say">shoes</span></td><td>des chaussures</td></tr>
<tr><td><span class="say">a size</span> : <span class="say">small</span>, <span class="say">medium</span>, <span class="say">large</span></td><td>une taille : S, M, L</td></tr>
<tr><td><span class="say">the changing room</span></td><td>la cabine d'essayage</td></tr>
<tr><td><span class="say">to try on</span></td><td>essayer (un vêtement)</td></tr></table>
<h3>Au téléphone</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">a mobile</span> (US : <span class="say">a cell phone</span>)</td><td>un portable</td></tr>
<tr><td><span class="say">a phone number</span></td><td>un numéro de téléphone</td></tr>
<tr><td><span class="say">to call</span> (UK : <span class="say">to ring</span>)</td><td>appeler, téléphoner</td></tr>
<tr><td><span class="say">to call back</span></td><td>rappeler</td></tr>
<tr><td><span class="say">to hold on</span></td><td>patienter, ne pas quitter</td></tr>
<tr><td><span class="say">to answer</span></td><td>répondre</td></tr>
<tr><td><span class="say">a message</span></td><td>un message</td></tr>
<tr><td><span class="say">a charger</span></td><td>un chargeur</td></tr></table>
<h3>Urgences</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">to help</span> · <span class="say">Help!</span></td><td>aider · Au secours !</td></tr>
<tr><td><span class="say">an emergency</span></td><td>une urgence</td></tr>
<tr><td><span class="say">an ambulance</span></td><td>une ambulance</td></tr>
<tr><td><span class="say">the police</span></td><td>la police</td></tr>
<tr><td><span class="say">a doctor</span></td><td>un médecin</td></tr>
<tr><td><span class="say">a wallet</span> / <span class="say">a purse</span></td><td>un portefeuille / un porte-monnaie</td></tr>
<tr><td><span class="say">a passport</span></td><td>un passeport</td></tr>
<tr><td><span class="say">lost</span></td><td>perdu</td></tr>
<tr><td><span class="say">the nearest</span></td><td>le plus proche</td></tr></table>
<h3>Politesse et conversation</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">of course</span> / <span class="say">sure</span></td><td>bien sûr</td></tr>
<tr><td><span class="say">slowly</span></td><td>lentement</td></tr>
<tr><td><span class="say">the weather</span></td><td>le temps (qu'il fait)</td></tr>
<tr><td><span class="say">a trip</span></td><td>un voyage</td></tr>
<tr><td><span class="say">a holiday</span> (US : <span class="say">a vacation</span>)</td><td>des vacances</td></tr>
<tr><td><span class="say">retired</span></td><td>à la retraite</td></tr>
<tr><td><span class="say">already</span> · <span class="say">ever</span> · <span class="say">never</span></td><td>déjà · déjà, un jour (dans une question) · jamais</td></tr>
<tr><td><span class="say">just</span> · <span class="say">not yet</span></td><td>venir de (I've just…) · pas encore</td></tr></table>
<div class="callout warn"><b>Faux amis</b> <span class="say">change</span> = la monnaie rendue, mais la monnaie d'un pays (l'euro, la livre) se dit <span class="say">currency</span>. <span class="say">expensive</span> = cher (prix) ; « cher » pour une personne aimée = <span class="say">dear</span>.</div>`
    }
  ],

  words: [
    // Magasins et services
    { en: 'shop', fr: 'le magasin', pos: 'n', cat: 'Magasins et services', alt: ['store'], ex: 'There is a small shop near my hotel.', exFr: 'Il y a un petit magasin près de mon hôtel.', level: 1, note: 'En américain : store.' },
    { en: 'bank', fr: 'la banque', pos: 'n', cat: 'Magasins et services', ex: 'The bank opens at nine.', exFr: 'La banque ouvre à neuf heures.', level: 1 },
    { en: 'post office', fr: 'la poste', pos: 'n', cat: 'Magasins et services', ex: 'The post office is next to the bank.', exFr: 'La poste est à côté de la banque.', level: 2 },
    { en: 'pharmacy', fr: 'la pharmacie', pos: 'n', cat: 'Magasins et services', alt: ['chemist\'s', 'chemist', 'drugstore'], ex: 'Is there a pharmacy near here?', exFr: 'Y a-t-il une pharmacie près d\'ici ?', level: 1, note: 'Au Royaume-Uni, on dit souvent « the chemist\'s » ; aux États-Unis, « drugstore ».' },
    { en: 'hospital', fr: 'l\'hôpital', pos: 'n', cat: 'Magasins et services', ex: 'My brother works in a hospital.', exFr: 'Mon frère travaille dans un hôpital.', level: 1, note: 'Le h se prononce (on souffle) : « hos-pi-tal ».' },
    { en: 'police station', fr: 'le commissariat de police', pos: 'n', cat: 'Magasins et services', ex: 'Where is the police station?', exFr: 'Où est le commissariat ?', level: 2 },
    { en: 'cash machine', fr: 'le distributeur de billets', pos: 'n', cat: 'Magasins et services', alt: ['cashpoint', 'ATM'], ex: 'The cash machine is not working.', exFr: 'Le distributeur de billets ne marche pas.', level: 2, note: 'En américain : ATM.' },
    { en: 'toilets', fr: 'les toilettes', pos: 'n', cat: 'Magasins et services', alt: ['toilet', 'restroom', 'loo'], ex: 'Excuse me, where are the toilets?', exFr: 'Excusez-moi, où sont les toilettes ?', level: 1, note: 'En américain : the restroom. Au Royaume-Uni, on entend aussi « the loo » (familier).' },
    { en: 'open', fr: 'ouvert', pos: 'adj', cat: 'Magasins et services', ex: 'Is the pharmacy open now?', exFr: 'La pharmacie est-elle ouverte maintenant ?', level: 1, note: 'open est aussi le verbe « ouvrir » : The bank opens at nine.' },
    { en: 'closed', fr: 'fermé', pos: 'adj', cat: 'Magasins et services', ex: 'The museum is closed on Mondays.', exFr: 'Le musée est fermé le lundi.', level: 1 },
    // L'argent
    { en: 'money', fr: 'l\'argent', pos: 'n', cat: 'L\'argent', ex: 'I don\'t have much money.', exFr: 'Je n\'ai pas beaucoup d\'argent.', level: 1, note: 'money ne prend pas de -s : « How much money? », « much money ».' },
    { en: 'cash', fr: 'l\'argent liquide, les espèces', pos: 'n', cat: 'L\'argent', ex: 'Can I pay in cash?', exFr: 'Puis-je payer en espèces ?', level: 1, note: 'payer en espèces = pay in cash.' },
    { en: 'card', fr: 'la carte bancaire', pos: 'n', cat: 'L\'argent', alt: ['credit card', 'bank card', 'debit card'], ex: 'My card is in my wallet.', exFr: 'Ma carte est dans mon portefeuille.', level: 1, note: 'payer par carte = pay by card.' },
    { en: 'change', fr: 'la monnaie (qu\'on vous rend)', pos: 'n', cat: 'L\'argent', ex: 'Here is your change.', exFr: 'Voici votre monnaie.', level: 2, note: '« Keep the change! » = Gardez la monnaie ! La monnaie d\'un pays (l\'euro, la livre) se dit currency.' },
    { en: 'price', fr: 'le prix', pos: 'n', cat: 'L\'argent', ex: 'What is the price of this bag?', exFr: 'Quel est le prix de ce sac ?', level: 1 },
    { en: 'cheap', fr: 'pas cher, bon marché', pos: 'adj', cat: 'L\'argent', ex: 'This hotel is cheap.', exFr: 'Cet hôtel n\'est pas cher.', level: 1 },
    { en: 'expensive', fr: 'cher', pos: 'adj', cat: 'L\'argent', ex: 'Life in London is very expensive.', exFr: 'La vie à Londres est très chère.', level: 1, note: '« cher » pour un prix = expensive ; « cher » pour une personne aimée = dear.' },
    { en: 'receipt', fr: 'le ticket de caisse', pos: 'n', cat: 'L\'argent', ex: 'Keep your receipt.', exFr: 'Gardez votre ticket de caisse.', level: 2, note: 'Le p ne se prononce pas : « ri-sîte ».' },
    // Vêtements et tailles
    { en: 'clothes', fr: 'les vêtements', pos: 'n', cat: 'Vêtements et tailles', ex: 'I need new clothes.', exFr: 'J\'ai besoin de nouveaux vêtements.', level: 1, note: 'Toujours au pluriel. Se prononce presque comme « clôze ».' },
    { en: 'shirt', fr: 'la chemise', pos: 'n', cat: 'Vêtements et tailles', ex: 'This shirt is too small.', exFr: 'Cette chemise est trop petite.', level: 2 },
    { en: 'trousers', fr: 'le pantalon', pos: 'n', cat: 'Vêtements et tailles', alt: ['pants'], ex: 'These trousers are too long.', exFr: 'Ce pantalon est trop long.', level: 2, note: 'Toujours au pluriel en anglais : my trousers ARE… En américain : pants (attention : en britannique, pants = slip !).' },
    { en: 'dress', fr: 'la robe', pos: 'n', cat: 'Vêtements et tailles', ex: 'She is wearing a red dress.', exFr: 'Elle porte une robe rouge.', level: 2 },
    { en: 'jacket', fr: 'la veste', pos: 'n', cat: 'Vêtements et tailles', ex: 'My jacket is in the car.', exFr: 'Ma veste est dans la voiture.', level: 2 },
    { en: 'coat', fr: 'le manteau', pos: 'n', cat: 'Vêtements et tailles', ex: 'Take your coat, it\'s cold.', exFr: 'Prends ton manteau, il fait froid.', level: 2 },
    { en: 'shoes', fr: 'les chaussures', pos: 'n', cat: 'Vêtements et tailles', ex: 'These shoes are very comfortable.', exFr: 'Ces chaussures sont très confortables.', level: 1, note: 'Une chaussure = a shoe.' },
    { en: 'size', fr: 'la taille (d\'un vêtement)', pos: 'n', cat: 'Vêtements et tailles', ex: 'What size are you?', exFr: 'Quelle taille faites-vous ?', level: 1, note: 'Les tailles : small (S), medium (M), large (L).' },
    { en: 'changing room', fr: 'la cabine d\'essayage', pos: 'n', cat: 'Vêtements et tailles', alt: ['fitting room', 'changing rooms'], ex: 'Where are the changing rooms?', exFr: 'Où sont les cabines d\'essayage ?', level: 2, note: 'En américain : fitting room.' },
    { en: 'try on', fr: 'essayer (un vêtement)', pos: 'v', cat: 'Vêtements et tailles', ex: 'She is trying on a dress.', exFr: 'Elle essaie une robe.', level: 2, note: 'Avec it, le petit mot on va à la fin : Can I try it on?' },
    // Au téléphone
    { en: 'mobile', fr: 'le portable', pos: 'n', cat: 'Au téléphone', alt: ['mobile phone', 'cell phone', 'cellphone'], ex: 'My mobile is in my bag.', exFr: 'Mon portable est dans mon sac.', level: 1, note: 'En américain : cell phone.' },
    { en: 'phone number', fr: 'le numéro de téléphone', pos: 'n', cat: 'Au téléphone', alt: ['telephone number', 'number'], ex: 'What is your phone number?', exFr: 'Quel est ton numéro de téléphone ?', level: 1 },
    { en: 'call', fr: 'appeler, téléphoner', pos: 'v', cat: 'Au téléphone', alt: ['phone', 'ring'], ex: 'I will call you tomorrow.', exFr: 'Je t\'appellerai demain.', level: 1, note: 'En britannique, on dit aussi ring : I\'ll ring you.' },
    { en: 'call back', fr: 'rappeler (au téléphone)', pos: 'v', cat: 'Au téléphone', alt: ['ring back', 'phone back'], ex: 'Can you call me back in ten minutes?', exFr: 'Peux-tu me rappeler dans dix minutes ?', level: 2, note: 'Le pronom se met au milieu : call ME back. (recall = se souvenir !)' },
    { en: 'hold on', fr: 'patienter (au téléphone)', pos: 'v', cat: 'Au téléphone', alt: ['hang on'], ex: 'Hold on a moment, please.', exFr: 'Patientez un instant, s\'il vous plaît.', level: 2 },
    { en: 'answer', fr: 'répondre', pos: 'v', cat: 'Au téléphone', ex: 'Can you answer the phone, please?', exFr: 'Peux-tu répondre au téléphone, s\'il te plaît ?', level: 2, note: 'answer est aussi le nom « la réponse ». Le w ne se prononce pas : « ânn-seu ».' },
    // Urgences
    { en: 'help', fr: 'aider', pos: 'v', cat: 'Urgences', ex: 'Can you help me, please?', exFr: 'Pouvez-vous m\'aider, s\'il vous plaît ?', level: 1, note: 'Crié seul, « Help! » veut dire « Au secours ! ».' },
    { en: 'emergency', fr: 'l\'urgence', pos: 'n', cat: 'Urgences', ex: 'This is an emergency!', exFr: 'C\'est une urgence !', level: 2, note: 'Numéros d\'urgence : 112 dans toute l\'Europe, 999 au Royaume-Uni, 911 aux États-Unis.' },
    { en: 'police', fr: 'la police', pos: 'n', cat: 'Urgences', ex: 'I want to call the police.', exFr: 'Je veux appeler la police.', level: 1, note: 'L\'accent est sur la 2e syllabe : « peu-LISS ».' },
    { en: 'doctor', fr: 'le médecin', pos: 'n', cat: 'Urgences', ex: 'My wife is a doctor.', exFr: 'Ma femme est médecin.', level: 1, note: 'Devant un métier, l\'anglais met « a » : She is A doctor.' },
    { en: 'wallet', fr: 'le portefeuille', pos: 'n', cat: 'Urgences', ex: 'My wallet is in my pocket.', exFr: 'Mon portefeuille est dans ma poche.', level: 2, note: 'Le porte-monnaie (pour les pièces) se dit purse en britannique.' },
    { en: 'passport', fr: 'le passeport', pos: 'n', cat: 'Urgences', ex: 'Here is my passport.', exFr: 'Voici mon passeport.', level: 1 },
    { en: 'lost', fr: 'perdu', pos: 'adj', cat: 'Urgences', ex: 'We are lost. Can you help us?', exFr: 'Nous sommes perdus. Pouvez-vous nous aider ?', level: 1, note: 'C\'est aussi le participe passé de lose (perdre) : I have lost my keys.' },
    { en: 'nearest', fr: 'le plus proche', pos: 'adj', cat: 'Urgences', ex: 'Where is the nearest bus stop?', exFr: 'Où est l\'arrêt de bus le plus proche ?', level: 2, note: 'near (proche) → nearer (plus proche) → the nearest (le plus proche).' },
    // Politesse et conversation
    { en: 'weather', fr: 'le temps (qu\'il fait)', pos: 'n', cat: 'Politesse et conversation', ex: 'The weather is lovely today.', exFr: 'Il fait un temps magnifique aujourd\'hui.', level: 1, note: 'weather = le temps qu\'il fait (la météo). Le temps qui passe = time.' },
    { en: 'trip', fr: 'le voyage', pos: 'n', cat: 'Politesse et conversation', alt: ['journey'], ex: 'How was your trip?', exFr: 'Comment s\'est passé ton voyage ?', level: 2 },
    { en: 'holiday', fr: 'les vacances', pos: 'n', cat: 'Politesse et conversation', alt: ['holidays', 'vacation'], ex: 'We are on holiday.', exFr: 'Nous sommes en vacances.', level: 1, note: 'être en vacances = be on holiday. En américain : vacation.' },
    { en: 'retired', fr: 'à la retraite', pos: 'adj', cat: 'Politesse et conversation', ex: 'My husband is retired.', exFr: 'Mon mari est à la retraite.', level: 1, note: 'Pour répondre à « What do you do? » : I\'m retired. I was a teacher.' },
    { en: 'of course', fr: 'bien sûr', pos: 'x', cat: 'Politesse et conversation', alt: ['sure'], ex: 'Can I sit here? — Of course!', exFr: 'Je peux m\'asseoir ici ? — Bien sûr !', level: 1 },
    { en: 'slowly', fr: 'lentement', pos: 'adv', cat: 'Politesse et conversation', ex: 'Please speak slowly.', exFr: 'Parlez lentement, s\'il vous plaît.', level: 1, note: 'slow (lent) + -ly → slowly (lentement).' },
    { en: 'already', fr: 'déjà', pos: 'adv', cat: 'Politesse et conversation', ex: 'I have already paid.', exFr: 'J\'ai déjà payé.', level: 2, note: 'Se place entre have et le participe : I have already paid.' },
    { en: 'ever', fr: 'déjà, un jour (dans une question)', pos: 'adv', cat: 'Politesse et conversation', ex: 'Have you ever eaten fish and chips?', exFr: 'As-tu déjà mangé du fish and chips ?', level: 2, note: 'Have you ever…? = As-tu déjà… (une fois dans ta vie) ?' },
    { en: 'not yet', fr: 'pas encore', pos: 'x', cat: 'Politesse et conversation', ex: 'Have you finished? — Not yet.', exFr: 'Tu as fini ? — Pas encore.', level: 2, note: 'Dans une phrase, yet se met à la fin : I haven\'t finished yet.' }
  ],

  phrases: [
    { en: 'Where are you from?', fr: 'D\'où venez-vous ?', alt: ['Where do you come from?'], cat: 'Faire la conversation' },
    { en: 'What do you do?', fr: 'Que faites-vous dans la vie ?', alt: ['What do you do for a living?', 'What\'s your job?'], cat: 'Faire la conversation', note: 'On demande le métier. Réponse possible : I\'m retired (Je suis à la retraite).' },
    { en: 'Nice weather today, isn\'t it?', fr: 'Il fait beau aujourd\'hui, n\'est-ce pas ?', alt: ['Lovely weather today, isn\'t it?', 'It\'s nice today, isn\'t it?', 'It\'s a nice day today, isn\'t it?'], cat: 'Faire la conversation' },
    { en: 'Have a nice day!', fr: 'Bonne journée !', alt: ['Have a good day!'], cat: 'Faire la conversation', note: 'Réponse : Thanks, you too! (Merci, vous aussi !)' },
    { en: 'Would you like a coffee?', fr: 'Voulez-vous un café ?', alt: ['Would you like some coffee?', 'Would you like a cup of coffee?', 'Do you want a coffee?'], cat: 'Demandes polies' },
    { en: 'Sorry, I can\'t.', fr: 'Désolé, je ne peux pas.', alt: ['I\'m sorry, I can\'t.'], cat: 'Demandes polies' },
    { en: 'Could you speak more slowly, please?', fr: 'Pourriez-vous parler plus lentement, s\'il vous plaît ?', alt: ['Can you speak more slowly, please?', 'Could you please speak more slowly?', 'Could you speak more slowly?'], cat: 'Demandes polies' },
    { en: 'Could you repeat that, please?', fr: 'Pourriez-vous répéter, s\'il vous plaît ?', alt: ['Can you repeat that, please?', 'Could you repeat, please?', 'Could you say that again, please?', 'Could you repeat that?'], cat: 'Demandes polies' },
    { en: 'Hello, this is Paul speaking.', fr: 'Allô, c\'est Paul à l\'appareil.', alt: ['Hello, Paul speaking.', 'Hello, this is Paul.', 'Hello, it\'s Paul.', 'Hi, this is Paul speaking.'], cat: 'Au téléphone' },
    { en: 'Can I speak to Mary, please?', fr: 'Puis-je parler à Mary, s\'il vous plaît ?', alt: ['Could I speak to Mary, please?', 'May I speak to Mary, please?', 'Can I speak with Mary, please?', 'Could I speak with Mary, please?'], cat: 'Au téléphone' },
    { en: 'Hold on, please.', fr: 'Ne quittez pas, s\'il vous plaît.', alt: ['Hold on a moment, please.', 'Hang on, please.', 'Just a moment, please.', 'One moment, please.', 'Hold the line, please.'], cat: 'Au téléphone' },
    { en: 'Could you call me back?', fr: 'Pourriez-vous me rappeler ?', alt: ['Can you call me back?', 'Could you ring me back?', 'Could you phone me back?'], cat: 'Au téléphone', note: 'rappeler = call back (et non recall, qui veut dire se souvenir).' },
    { en: 'I\'ll call you later.', fr: 'Je t\'appellerai plus tard.', alt: ['I\'ll ring you later.', 'I\'ll phone you later.'], cat: 'Au téléphone' },
    { en: 'I\'m just looking, thanks.', fr: 'Je regarde seulement, merci.', alt: ['I\'m just looking, thank you.', 'Just looking, thanks.', 'I\'m only looking, thanks.'], cat: 'Faire du shopping' },
    { en: 'Do you have it in blue?', fr: 'L\'avez-vous en bleu ?', alt: ['Have you got it in blue?', 'Do you have this in blue?'], cat: 'Faire du shopping' },
    { en: 'Can I try it on?', fr: 'Puis-je l\'essayer ?', alt: ['Could I try it on?', 'May I try it on?'], cat: 'Faire du shopping', note: 'Pour un vêtement : try it on (it se place au milieu).' },
    { en: 'How much is it?', fr: 'Combien ça coûte ?', alt: ['How much is this?', 'How much does it cost?', 'How much is that?'], cat: 'Faire du shopping' },
    { en: 'I\'ll take it.', fr: 'Je le prends.', alt: ['I\'ll have it.'], cat: 'Faire du shopping', note: 'Pour plusieurs choses : I\'ll take them.' },
    { en: 'Can I pay by card?', fr: 'Puis-je payer par carte ?', alt: ['Could I pay by card?', 'Can I pay by credit card?', 'Do you take cards?'], cat: 'Faire du shopping' },
    { en: 'Could I have a receipt, please?', fr: 'Pourrais-je avoir un ticket de caisse, s\'il vous plaît ?', alt: ['Can I have a receipt, please?', 'Could I have the receipt, please?', 'Can I get a receipt, please?', 'Could I have a receipt?'], cat: 'Faire du shopping' },
    { en: 'Help! Call an ambulance!', fr: 'Au secours ! Appelez une ambulance !', alt: ['Help! Call an ambulance, please!'], cat: 'Urgences' },
    { en: 'I\'ve lost my wallet.', fr: 'J\'ai perdu mon portefeuille.', alt: ['I lost my wallet.'], cat: 'Urgences' },
    { en: 'Where is the nearest hospital?', fr: 'Où est l\'hôpital le plus proche ?', alt: ['Where is the closest hospital?'], cat: 'Urgences' },
    { en: 'I don\'t feel well.', fr: 'Je ne me sens pas bien.', alt: ['I\'m not feeling well.', 'I don\'t feel good.'], cat: 'Urgences' },
    { en: 'Have you ever been to London?', fr: 'Es-tu déjà allé à Londres ?', cat: 'Present perfect', note: 'been to = être allé quelque part (et en être revenu).' }
  ],

  quiz: [
    // Mots interrogatifs
    { id: 'en12-q-01', q: 'Complète : ___ do you live? — In Lyon.', choices: ['When', 'Where', 'Who', 'What'], answer: 1, topic: 'Mots interrogatifs', sec: 'en12-s-questions',
      why: { 0: '« When » = quand : la réponse serait un moment (in May, tomorrow…).', 2: '« Who » = qui : la réponse serait une personne.', 3: '« What » = quoi, quel : la réponse « In Lyon » est un lieu.' },
      explain: 'La réponse est un lieu (In Lyon), donc on demande **où** : **Where**. → **Where** do you live? (Où habites-tu ?)', say: 'Where do you live?', level: 1 },
    { id: 'en12-q-02', q: 'Complète : How ___ is this bag? — Thirty pounds.', choices: ['much', 'many', 'long', 'often'], answer: 0, topic: 'Mots interrogatifs', sec: 'en12-s-questions',
      why: { 1: '« How many » sert à compter des choses (How many bags?), pas à demander un prix.', 2: '« How long » = combien de temps (ou quelle longueur).', 3: '« How often » = à quelle fréquence.' },
      explain: 'Pour un **prix**, on dit **How much**. → How **much** is this bag? — Thirty pounds. (Combien coûte ce sac ? — Trente livres.)', say: 'How much is this bag?', level: 1 },
    { id: 'en12-q-03', q: 'Complète : How ___ do you see your grandchildren? — Every weekend.', choices: ['long', 'many', 'often', 'much'], answer: 2, topic: 'Mots interrogatifs', sec: 'en12-s-questions',
      why: { 0: '« How long » = combien de temps (une durée : two hours, a week).', 1: '« How many » sert à compter des choses.', 3: '« How much » sert pour un prix ou une quantité.' },
      explain: '« Every weekend » (tous les week-ends) répond à la question **à quelle fréquence ?** : **How often**. → How **often** do you see your grandchildren? (À quelle fréquence vois-tu tes petits-enfants ?)', say: 'How often do you see your grandchildren?', level: 1 },
    { id: 'en12-q-04', q: 'Complète : ___ umbrella is this? — It\'s Anna\'s.', choices: ['Who', 'Which', 'Whose', 'What'], answer: 2, topic: 'Mots interrogatifs', sec: 'en12-s-questions',
      why: { 0: '« Who » = qui. Pour « à qui ? », on dit whose.', 1: '« Which » = lequel, quel (parmi un choix).', 3: '« What » = quoi, quel ; ici on demande le propriétaire.' },
      explain: 'Pour demander **à qui** est une chose : **Whose** + nom. → **Whose** umbrella is this? — It\'s Anna\'s. (À qui est ce parapluie ? — C\'est celui d\'Anna.)', say: 'Whose umbrella is this?', level: 2 },
    // Construire une question
    { id: 'en12-q-05', q: 'Complète (au présent) : Where ___ your sister work? — In a hospital.', choices: ['do', 'is', 'are', 'does'], answer: 3, topic: 'Construire une question', sec: 'en12-s-questions',
      why: { 0: '« do » va avec I, you, we, they. Avec your sister (= she) : does.', 1: '« is » irait avec un verbe en -ing (Where is she working?). Avec work, il faut does.', 2: '« are » va avec you, we, they, et jamais avec un verbe à la base.' },
      explain: 'Présent simple avec he/she/it (your sister = she) : **does** + sujet + base verbale. → Where **does** your sister work? (Où travaille ta sœur ?)', say: 'Where does your sister work?', level: 1 },
    { id: 'en12-q-06', q: 'Complète : What ___ you doing? — I\'m waiting for the bus.', choices: ['are', 'do', 'is', 'did'], answer: 0, topic: 'Construire une question', sec: 'en12-s-questions',
      why: { 1: '« do » sert au présent simple (What do you do? = quel est ton métier ?). Avec doing (-ing), il faut be.', 2: '« is » va avec he, she, it. Avec you : are.', 3: '« did » sert au passé et ne va pas avec un verbe en -ing.' },
      explain: 'Présent continu (en ce moment) : **be** + sujet + verbe en -ing. → What **are** you doing? — I\'m waiting for the bus. (Que fais-tu ? — J\'attends le bus.)', say: 'What are you doing?', level: 1 },
    { id: 'en12-q-07', q: 'Complète : When ___ you arrive? — Yesterday evening.', choices: ['do', 'will', 'did', 'are'], answer: 2, topic: 'Construire une question', sec: 'en12-s-questions',
      why: { 0: '« do » est le présent ; la réponse « yesterday evening » est dans le passé.', 1: '« will » parle du futur ; or la réponse est « hier soir ».', 3: '« are » ne va pas avec un verbe à la base comme arrive.' },
      explain: 'Hier soir = passé : **did** + sujet + **base verbale**. → When **did** you arrive? — Yesterday evening. (Quand es-tu arrivé ? — Hier soir.)', say: 'When did you arrive?', level: 1 },
    // Demandes polies
    { id: 'en12-q-08', q: 'Tu veux demander poliment à quelqu\'un de fermer la fenêtre. Que dis-tu ?', choices: ['Close the window.', 'Could you close the window, please?', 'You close the window?', 'I want you close the window.'], answer: 1, topic: 'Demandes polies', sec: 'en12-s-poli',
      why: { 0: 'C\'est un ordre : sans « could » ni « please », cela paraît sec.', 2: 'Ce n\'est pas une vraie question polie : il faut un auxiliaire en premier (Could you…?).', 3: 'C\'est incorrect (il faudrait « I want you to close… ») et « I want » sonne autoritaire.' },
      explain: 'Demande polie : **Could you** + verbe + **please** ? → **Could you close the window, please?** (Pourriez-vous fermer la fenêtre, s\'il vous plaît ?)', say: 'Could you close the window, please?', level: 1 },
    { id: 'en12-q-09', q: '« Would you like a cup of tea? » veut dire :', choices: ['Aimez-vous le thé ?', 'Avez-vous bu une tasse de thé ?', 'Faites-vous du thé ?', 'Voulez-vous une tasse de thé ?'], answer: 3, topic: 'Demandes polies', sec: 'en12-s-poli',
      why: { 0: '« Aimez-vous le thé ? » se dit « Do you like tea? » (un goût en général).', 1: 'Ce serait « Have you had a cup of tea? ».', 2: 'Ce serait « Are you making tea? ».' },
      explain: '**Would you like…?** sert à **proposer** quelque chose : Voulez-vous… ? → Would you like a cup of tea? (Voulez-vous une tasse de thé ?)', say: 'Would you like a cup of tea?', level: 1 },
    { id: 'en12-q-10', q: 'Au café, quelle est la façon la plus polie de commander ?', choices: ['I want a coffee.', 'Give me a coffee.', 'I\'d like a coffee, please.', 'I like a coffee.'], answer: 2, topic: 'Demandes polies', sec: 'en12-s-poli',
      why: { 0: '« I want » est correct mais sonne brusque, comme un enfant qui réclame.', 1: 'C\'est un ordre : impoli, surtout sans « please ».', 3: '« I like » = j\'aime (en général) : ce n\'est pas une commande.' },
      explain: '**I\'d like** (= I would like) = je voudrais. → **I\'d like a coffee, please.** (Je voudrais un café, s\'il vous plaît.)', say: 'I\'d like a coffee, please.', level: 1 },
    { id: 'en12-q-11', q: 'On te demande « Can you help me tomorrow? ». Tu ne peux pas. Que réponds-tu ?', choices: ['Sorry, I can\'t.', 'No, I don\'t.', 'Sorry, I not can.', 'No, I can\'t help never.'], answer: 0, topic: 'Demandes polies', sec: 'en12-s-poli',
      why: { 1: 'La question est posée avec can : la réponse courte reprend can (I can\'t), pas do.', 2: 'La négation de can est can\'t (cannot) : « I not can » n\'existe pas.', 3: 'C\'est incorrect : une seule négation suffit en anglais, et never veut dire « jamais ».' },
      explain: 'On reprend l\'auxiliaire de la question : Can you…? → **Sorry, I can\'t.** (Désolé, je ne peux pas.) Pour accepter : **Yes, of course.** (Oui, bien sûr.)', say: 'Sorry, I can\'t.', level: 1 },
    // Small talk
    { id: 'en12-q-12', q: '« What do you do? » veut dire :', choices: ['Que fais-tu en ce moment ?', 'Qu\'as-tu fait hier ?', 'Que fais-tu dans la vie (ton métier) ?', 'Que vas-tu faire ?'], answer: 2, topic: 'Small talk', sec: 'en12-s-smalltalk',
      why: { 0: '« Que fais-tu en ce moment ? » se dit « What are you doing? » (présent continu).', 1: 'Ce serait « What did you do yesterday? » (passé avec did).', 3: 'Ce serait « What will you do? » (futur avec will).' },
      explain: '**What do you do?** (présent simple = une habitude) demande le **métier**. Réponses : I\'m a nurse (Je suis infirmière), I\'m retired (Je suis à la retraite).', say: 'What do you do?', level: 1 },
    { id: 'en12-q-13', q: 'Complète : Nice weather today, ___?', choices: ['is it', 'isn\'t it', 'no', 'doesn\'t it'], answer: 1, topic: 'Small talk', sec: 'en12-s-smalltalk',
      why: { 0: 'Après une phrase affirmative, la petite question finale est négative : isn\'t it.', 2: '« no ? » à la française n\'existe pas en anglais : on dit isn\'t it?', 3: 'La phrase sous-entendue est « It is nice weather » : on reprend is, pas does.' },
      explain: '**isn\'t it?** à la fin = « n\'est-ce pas ? ». → Nice weather today, **isn\'t it?** (Il fait beau aujourd\'hui, n\'est-ce pas ?) Réponse : Yes, lovely! (Oui, magnifique !)', say: 'Nice weather today, isn\'t it?', level: 1 },
    { id: 'en12-q-14', q: 'Une serveuse te dit « Have a nice day! ». Que réponds-tu ?', choices: ['Me too!', 'Nice to meet you.', 'Yes, I have.', 'Thanks, you too!'], answer: 3, topic: 'Small talk', sec: 'en12-s-smalltalk',
      why: { 0: '« Me too » = moi aussi. Pour retourner un souhait à l\'autre personne, on dit you too.', 1: '« Nice to meet you » (Enchanté) se dit quand on rencontre quelqu\'un pour la première fois.', 2: 'Ce n\'est pas une vraie question : c\'est un souhait (Bonne journée !).' },
      explain: 'Pour rendre un souhait : **You too!** (Vous aussi !) → Thanks, you too! (Merci, vous aussi !)', say: 'Thanks, you too!', level: 1 },
    // Au téléphone
    { id: 'en12-q-15', q: 'Au téléphone, comment dire « Allô, c\'est Paul à l\'appareil » ?', choices: ['Hello, here is Paul.', 'Hello, this is Paul speaking.', 'Hello, I am Paul speaking.', 'Hello, it is me Paul.'], answer: 1, topic: 'Au téléphone', sec: 'en12-s-telephone',
      why: { 0: '« Here is Paul » est un calque du français « ici Paul » : on ne le dit pas au téléphone.', 2: 'Au téléphone, on ne se présente pas avec « I am… » mais avec « This is… ».', 3: 'Ce n\'est pas naturel : on dit « It\'s Paul » ou « This is Paul ».' },
      explain: 'Au téléphone : **This is** + prénom (+ **speaking**). → **Hello, this is Paul speaking.** (Allô, c\'est Paul à l\'appareil.) Plus simple : Hello, it\'s Paul.', say: 'Hello, this is Paul speaking.', level: 1 },
    // Shopping
    { id: 'en12-q-16', q: 'Complète : How much ___ these shoes?', choices: ['are', 'is', 'do', 'cost'], answer: 0, topic: 'Faire du shopping', sec: 'en12-s-shopping',
      why: { 1: '« shoes » est au pluriel (des chaussures) : il faut are.', 2: 'Avec do, il faudrait aussi le verbe cost : How much do these shoes cost?', 3: 'Il manque l\'auxiliaire : « How much do these shoes cost? ».' },
      explain: 'Prix de plusieurs choses : **How much are** + nom au pluriel ? → How much **are** these shoes? (Combien coûtent ces chaussures ?) Pour une seule chose : How much **is** it?', say: 'How much are these shoes?', level: 1 },
    // Urgences
    { id: 'en12-q-17', q: 'Tu ne retrouves plus ton chemin. Que dis-tu ?', choices: ['I\'m losing.', 'I lose.', 'I\'m lost.', 'I have lose.'], answer: 2, topic: 'Urgences', sec: 'en12-s-urgences',
      why: { 0: '« I\'m losing » = je suis en train de perdre (un match, un jeu).', 1: '« I lose » = je perds (en général, au présent simple).', 3: 'C\'est incorrect : après have, il faut le participe passé lost, et le sens serait « j\'ai perdu ».' },
      explain: '« Perdu » (je ne sais plus où je suis) se dit **lost**. → **I\'m lost.** (Je suis perdu.) Puis : Can you help me, please? (Pouvez-vous m\'aider ?)', say: 'I\'m lost.', level: 1 },
    // Present perfect
    { id: 'en12-q-18', q: 'Complète : ___ you ever been to Ireland?', choices: ['Did', 'Have', 'Are', 'Has'], answer: 1, topic: 'Present perfect', sec: 'en12-s-present-perfect',
      why: { 0: '« ever » + been (participe passé) = present perfect : il faut have, pas did.', 2: '« Are you been » n\'existe pas : been (participe de be) va avec have.', 3: '« has » va avec he, she, it. Avec you : have.' },
      explain: 'Expérience (une fois dans ta vie ?) : **Have** + sujet + **ever** + participe passé. → **Have** you ever been to Ireland? (Es-tu déjà allé en Irlande ?)', say: 'Have you ever been to Ireland?', level: 2 },
    { id: 'en12-q-19', q: 'Complète : I ___ to Spain in 2019.', choices: ['have been', 'go', 'have gone', 'went'], answer: 3, topic: 'Present perfect', sec: 'en12-s-present-perfect',
      why: { 0: 'Avec une date précise (in 2019), on n\'utilise pas le present perfect.', 1: '« go » est le présent ; 2019 est dans le passé.', 2: 'Date précise → prétérit ; et « have gone » voudrait dire que tu y es encore.' },
      explain: 'Date précise (**in 2019**) → **prétérit**. → I **went** to Spain in 2019. (Je suis allé en Espagne en 2019.)', say: 'I went to Spain in 2019.', level: 2 },
    { id: 'en12-q-20', q: 'Complète : The bus has ___ left. (= le bus vient de partir)', choices: ['just', 'yet', 'ever', 'never'], answer: 0, topic: 'Present perfect', sec: 'en12-s-present-perfect',
      why: { 1: '« yet » se place à la fin d\'une question ou d\'une négation (pas encore).', 2: '« ever » s\'emploie surtout dans les questions : Have you ever…?', 3: '« never » = jamais : le sens serait tout autre.' },
      explain: 'have / has + **just** + participe passé = **venir de**. → The bus has **just** left. (Le bus vient de partir.)', say: 'The bus has just left.', level: 2 },
    { id: 'en12-q-21', q: 'Complète : I haven\'t paid ___. (= je n\'ai pas encore payé)', choices: ['already', 'just', 'ever', 'yet'], answer: 3, topic: 'Present perfect', sec: 'en12-s-present-perfect',
      why: { 0: '« already » (déjà) s\'utilise dans les phrases affirmatives : I have already paid.', 1: '« just » (venir de) se place avant le participe, dans une phrase affirmative.', 2: '« ever » s\'utilise dans les questions (Have you ever…?).' },
      explain: 'À la fin d\'une phrase négative, **yet** = **pas encore**. → I haven\'t paid **yet**. (Je n\'ai pas encore payé.)', say: 'I haven\'t paid yet.', level: 2 },
    // Compréhension orale
    { id: 'en12-q-22', q: 'Écoute. Que demande la personne ?', listen: true, say: 'Could you speak more slowly, please?', choices: ['De parler plus fort', 'De parler plus lentement', 'De répéter son nom', 'De rappeler plus tard'], answer: 1, topic: 'Compréhension orale', sec: 'en12-s-poli',
      why: { 0: '« Plus fort » se dirait louder : Could you speak louder?', 2: 'Ce serait « Could you repeat your name? ».', 3: 'Ce serait « Could you call back later? ».' },
      explain: '**slowly** = lentement. → Could you speak more slowly, please? (Pourriez-vous parler plus lentement, s\'il vous plaît ?) Une phrase précieuse quand on débute !', level: 2 },
    { id: 'en12-q-23', q: 'Écoute. Que veut savoir la cliente ?', listen: true, say: 'Excuse me, how much is this jacket?', choices: ['Le prix de la veste', 'La taille de la veste', 'Si elle peut essayer la veste', 'Où sont les vestes'], answer: 0, topic: 'Compréhension orale', sec: 'en12-s-shopping',
      why: { 1: 'La taille se demanderait avec « What size is this jacket? ».', 2: 'Ce serait « Can I try this jacket on? ».', 3: 'Ce serait « Where are the jackets? ».' },
      explain: '**How much is…?** = combien coûte… ? → Excuse me, how much is this jacket? (Excusez-moi, combien coûte cette veste ?)', level: 2 },
    { id: 'en12-q-24', q: 'Écoute. Que propose la personne au téléphone ?', listen: true, say: 'Sorry, she isn\'t here at the moment. Can I take a message?', choices: ['De rappeler demain', 'D\'attendre une minute', 'De prendre un message', 'De parler plus lentement'], answer: 2, topic: 'Compréhension orale', sec: 'en12-s-telephone',
      why: { 0: 'Il faudrait entendre « call back tomorrow ».', 1: 'Ce serait « Hold on a minute ».', 3: 'Ce serait « Could you speak more slowly? ».' },
      explain: 'She isn\'t here at the moment = elle n\'est pas là en ce moment. **Can I take a message?** = Puis-je prendre un message ?', level: 2 },
    { id: 'en12-q-25', q: 'Écoute. Quel est le problème ?', listen: true, say: 'Excuse me, I have lost my passport.', choices: ['La personne a oublié son passeport à l\'hôtel.', 'La personne a trouvé un passeport.', 'On a volé le sac de la personne.', 'La personne a perdu son passeport.'], answer: 3, topic: 'Compréhension orale', sec: 'en12-s-urgences',
      why: { 0: '« Oublié » se dirait forgotten, et l\'hôtel (hotel) n\'est pas mentionné.', 1: '« Trouvé » se dirait found.', 2: 'Un vol se dirait « Someone stole my bag ». Ici : lost = perdu.' },
      explain: '**I have lost** (= I\'ve lost) = j\'ai perdu. → Excuse me, I have lost my passport. (Excusez-moi, j\'ai perdu mon passeport.)', level: 2 },
    { id: 'en12-q-26', q: 'Écoute. Que comprends-tu ?', listen: true, say: 'Have you ever been to Scotland? Yes, I went there last summer.', choices: ['La personne n\'est jamais allée en Écosse.', 'La personne est allée en Écosse l\'été dernier.', 'La personne ira en Écosse l\'été prochain.', 'La personne habite en Écosse.'], answer: 1, topic: 'Compréhension orale', sec: 'en12-s-present-perfect',
      why: { 0: 'Elle répond « Yes » : elle y est déjà allée.', 2: '« went » est au passé, et « last summer » = l\'été dernier.', 3: 'Il faudrait entendre « I live in Scotland ».' },
      explain: '**Have you ever been…?** (present perfect : l\'expérience). La réponse donne une date, donc elle passe au **prétérit** : I **went** there last summer. (Es-tu déjà allé en Écosse ? — Oui, j\'y suis allé l\'été dernier.)', level: 2 }
  ],

  exercises: [
    // Mots interrogatifs
    { id: 'en12-x-01', prompt: 'Complète avec le bon mot interrogatif : ___ is the station? — Over there.', answers: ['Where'], topic: 'Mots interrogatifs', sec: 'en12-s-questions',
      hint: 'La réponse est un lieu.',
      explain: 'Pour demander un lieu : **Where** (où). → **Where** is the station? — Over there. (Où est la gare ? — Là-bas.)',
      rule: 'where = où · when = quand · who = qui · what = quoi, quel',
      mistakes: [{ text: 'What', msg: '« What » = quoi, quel. Pour un lieu (où ?), on dit **Where**.' }, { text: 'When', msg: '« When » = quand (un moment). Pour un lieu : **Where**.' }, { text: 'Who', msg: '« Who » = qui (une personne). Pour un lieu : **Where**.' }],
      say: 'Where is the station?', level: 1 },
    { id: 'en12-x-02', prompt: 'Complète : How ___ is this T-shirt? — Ten pounds.', answers: ['much'], topic: 'Mots interrogatifs', sec: 'en12-s-questions',
      hint: 'On demande un prix.',
      explain: 'Pour un **prix** : **How much**. → How **much** is this T-shirt? — Ten pounds. (Combien coûte ce tee-shirt ? — Dix livres.)',
      rule: 'How much = combien (prix, quantité qu\'on ne compte pas) · How many = combien de (choses qu\'on compte)',
      mistakes: [{ text: 'many', msg: '« How many » sert à compter des objets (How many T-shirts?). Pour un **prix** : **How much**.' }, { text: 'long', msg: '« How long » = combien de temps. Pour un prix : **How much**.' }],
      say: 'How much is this T-shirt?', level: 1 },
    { id: 'en12-x-03', prompt: 'Complète : How ___ tickets do you want? — Two, please.', answers: ['many'], topic: 'Mots interrogatifs', sec: 'en12-s-questions',
      hint: 'Les billets, ça se compte.',
      explain: 'Des choses qu\'on compte (one ticket, two tickets) : **How many** + pluriel. → How **many** tickets do you want? (Combien de billets voulez-vous ?)',
      rule: 'How many + nom au pluriel (choses qu\'on compte) · How much + prix ou nom sans pluriel (money, water)',
      mistakes: [{ text: 'much', msg: '« How much » s\'utilise pour un prix ou ce qu\'on ne compte pas (money, water). Les billets se comptent : **How many**.' }, { text: 'often', msg: '« How often » = à quelle fréquence. Pour un nombre de billets : **How many**.' }],
      say: 'How many tickets do you want?', level: 1 },
    { id: 'en12-x-04', prompt: 'Complète : ___ are you learning English? — Because I love travelling.', answers: ['Why'], topic: 'Mots interrogatifs', sec: 'en12-s-questions',
      hint: 'La réponse commence par « Because » (parce que).',
      explain: 'Une réponse en **Because…** (parce que) répond à **Why** (pourquoi). → **Why** are you learning English? — Because I love travelling. (Pourquoi apprends-tu l\'anglais ? — Parce que j\'adore voyager.)',
      rule: 'Why…? (pourquoi ?) → Because… (parce que…)',
      mistakes: [{ text: 'Because', msg: '« Because » (parce que) sert à **répondre**. Pour poser la question : **Why** (pourquoi).' }, { text: 'How', msg: '« How » = comment. Pour « pourquoi » : **Why**.' }, { text: 'What', msg: '« What » = quoi, quel. Pour « pourquoi » : **Why**.' }],
      say: 'Why are you learning English?', level: 1 },
    { id: 'en12-x-05', prompt: 'Complète : ___ coat is this? — It\'s my wife\'s.', answers: ['Whose'], topic: 'Mots interrogatifs', sec: 'en12-s-questions',
      hint: 'On demande à qui appartient le manteau.',
      explain: 'Pour demander **à qui** est une chose : **Whose** + nom. → **Whose** coat is this? — It\'s my wife\'s. (À qui est ce manteau ? — C\'est celui de ma femme.)',
      rule: 'who = qui · whose = à qui · who\'s = who is (qui est)',
      mistakes: [{ text: 'Who', msg: '« Who » = qui. Pour demander **à qui** est une chose : **Whose** + nom.' }, { text: 'Who\'s', msg: '« Who\'s » = who is (qui est). Pour « à qui » : **Whose** (la prononciation est la même, mais pas l\'orthographe !).' }],
      say: 'Whose coat is this?', level: 2 },
    // Construire une question
    { id: 'en12-x-06', prompt: 'Remets dans l\'ordre : live / do / where / you / ?', answers: ['Where do you live?'], topic: 'Construire une question', sec: 'en12-s-questions',
      hint: 'Mot interrogatif + auxiliaire + sujet + verbe.',
      explain: 'Mot interrogatif (**Where**) + auxiliaire (**do**) + sujet (**you**) + verbe (**live**). → **Where do you live?** (Où habites-tu ?)',
      rule: 'Mot interrogatif + auxiliaire + sujet + verbe ?',
      mistakes: [{ text: 'Where you do live?', msg: 'L\'auxiliaire **do** se place **avant** le sujet : Where **do you** live?' }, { text: 'Do you live where?', msg: 'Le mot interrogatif (**Where**) se place **en premier** : Where do you live?' }],
      say: 'Where do you live?', level: 1 },
    { id: 'en12-x-07', prompt: 'Pose la question avec « Where » : She works in a hospital. → Where…?', answers: ['Where does she work?'], topic: 'Construire une question', sec: 'en12-s-questions',
      hint: 'Présent simple avec she : quel auxiliaire ?',
      explain: 'Présent simple, she → **does** + sujet + **base verbale** (le -s de works part dans does). → **Where does she work?** (Où travaille-t-elle ?)',
      rule: 'Au présent : Where do / does + sujet + base verbale ?',
      mistakes: [{ text: 'Where does she works?', msg: 'Après **does**, le verbe perd son -s : Where does she **work**? (le -s est déjà dans does).' }, { text: 'Where she works?', msg: 'Il manque l\'auxiliaire : au présent avec she, on met **does** avant le sujet → Where **does** she work?' }, { text: 'Where do she work?', msg: 'Avec she (he, it) : **does**, pas do.' }],
      say: 'Where does she work?', level: 1 },
    { id: 'en12-x-08', prompt: 'Pose la question au passé : You arrived yesterday. → When…?', answers: ['When did you arrive?'], topic: 'Construire une question', sec: 'en12-s-questions',
      hint: 'Au passé, l\'auxiliaire est did.',
      explain: 'Question au passé : **did** + sujet + **base verbale** (arrived → arrive). → **When did you arrive?** (Quand es-tu arrivé ?)',
      rule: 'Au passé : mot interrogatif + did + sujet + base verbale ?',
      mistakes: [{ text: 'When did you arrived?', msg: 'Après **did**, le verbe revient à la base : **arrive** (sans -ed : le passé est déjà dans did).' }, { text: 'When you arrived?', msg: 'Il faut l\'auxiliaire **did** avant le sujet : When **did** you arrive?' }],
      say: 'When did you arrive?', level: 1 },
    { id: 'en12-x-09', prompt: 'Pose la question au futur : They will come. → When…?', answers: ['When will they come?'], topic: 'Construire une question', sec: 'en12-s-questions',
      hint: 'will passe avant le sujet.',
      explain: 'Futur : mot interrogatif + **will** + sujet + base verbale. → **When will they come?** (Quand viendront-ils ?)',
      rule: 'Au futur : mot interrogatif + will + sujet + base verbale ?',
      mistakes: [{ text: 'When they will come?', msg: 'Dans une question, **will** passe **avant** le sujet : When **will they** come?' }, { text: 'When will they to come?', msg: 'Pas de « to » après will : When will they **come**?' }, { text: 'When do they will come?', msg: 'Pas de do avec will : **will** est déjà l\'auxiliaire → When will they come?' }],
      say: 'When will they come?', level: 1 },
    { id: 'en12-x-10', prompt: 'Traduis (avec le présent continu) : Combien de temps restez-vous ?', answers: ['How long are you staying?', 'How long are you staying for?'], topic: 'Construire une question', sec: 'en12-s-questions',
      hint: 'combien de temps = How long ; rester = stay.',
      explain: '**How long** (combien de temps) + **are** + you + **staying** ? → **How long are you staying?** (Combien de temps restez-vous ?)',
      rule: 'How long = combien de temps (une durée)',
      mistakes: [{ text: 'How much time are you staying?', msg: 'Pour une durée, on dit **How long** (et non « how much time ») : How long are you staying?' }, { text: 'How long you are staying?', msg: 'Il faut inverser : **are** avant le sujet → How long **are you** staying?' }, { text: 'How long do you stay?', msg: 'La consigne demande le présent continu : How long **are you staying**?' }],
      say: 'How long are you staying?', level: 2 },
    // Demandes polies
    { id: 'en12-x-11', prompt: 'Rends cette demande polie avec « Could » : Open the door.', answers: ['Could you open the door, please?', 'Could you open the door?', 'Could you please open the door?'], topic: 'Demandes polies', sec: 'en12-s-poli',
      hint: 'Could + you + verbe… + please ?',
      explain: 'Demande polie : **Could you** + base verbale + **please** ? → **Could you open the door, please?** (Pourriez-vous ouvrir la porte, s\'il vous plaît ?)',
      rule: 'Could you + base verbale (sans to), please ?',
      mistakes: [{ text: 'Could you to open the door, please?', msg: 'Pas de « to » après could : Could you **open** the door, please?' }, { text: 'You could open the door, please?', msg: 'Dans une question, **could** se place **avant** le sujet : **Could you** open…?' }, { text: 'Could you opened the door, please?', msg: 'Après could, le verbe reste à la **base** : open (sans -ed).' }],
      say: 'Could you open the door, please?', level: 1 },
    { id: 'en12-x-12', prompt: 'Complète : I ___ like a coffee, please. (= je voudrais)', answers: ['would', '\'d'], topic: 'Demandes polies', sec: 'en12-s-poli',
      hint: 'C\'est le mot qui donne « I\'d like ».',
      explain: '« Je voudrais » = **I would like** (souvent contracté en **I\'d like**). → I **would** like a coffee, please. (Je voudrais un café, s\'il vous plaît.)',
      rule: 'I would like = I\'d like = je voudrais',
      mistakes: [{ text: 'will', msg: '« will » sert au futur. Pour « je voudrais » : I **would** like (I\'d like).' }, { text: 'want', msg: '« I want like » n\'existe pas. « Je voudrais » = I **would** like.' }, { text: 'am', msg: 'Pas de « am » ici : « je voudrais » = I **would** like.' }],
      say: 'I would like a coffee, please.', level: 1 },
    { id: 'en12-x-13', prompt: 'Traduis pour proposer poliment : Voulez-vous un thé ?', answers: ['Would you like a tea?', 'Would you like some tea?', 'Would you like a cup of tea?', 'Would you like tea?'], topic: 'Demandes polies', sec: 'en12-s-poli',
      hint: 'Pour proposer : Would you like… ?',
      explain: 'Pour **proposer** poliment : **Would you like** + chose ? → **Would you like a tea?** (Voulez-vous un thé ?)',
      rule: 'Would you like…? = Voulez-vous… ? (une offre) · Do you like…? = Aimez-vous… ? (un goût)',
      mistakes: [{ text: 'Do you like tea?', msg: '« Do you like tea? » = Aimez-vous le thé ? (en général). Pour **proposer** : **Would you like** a tea?' }, { text: 'Do you like a tea?', msg: '« Do you like » = aimez-vous. Pour **proposer** : **Would you like** a tea?' }, { text: 'Do you want a tea?', msg: 'C\'est compréhensible, mais moins poli. Pour proposer poliment : **Would you like** a tea?' }, { text: 'You would like a tea?', msg: 'Dans une question, would se place **avant** le sujet : **Would you** like…?' }],
      say: 'Would you like a tea?', level: 1 },
    { id: 'en12-x-14', prompt: 'Demande la permission : Puis-je m\'asseoir ici ?', answers: ['Can I sit here?', 'Could I sit here?', 'May I sit here?', 'Can I sit down here?', 'Could I sit down here?'], topic: 'Demandes polies', sec: 'en12-s-poli',
      hint: 's\'asseoir = sit.',
      explain: 'Demander la permission : **Can I** (ou Could I) + base verbale ? → **Can I sit here?** (Puis-je m\'asseoir ici ?)',
      rule: 'Can I / Could I + base verbale ? = Puis-je… ?',
      mistakes: [{ text: 'Can I to sit here?', msg: 'Pas de « to » après can : Can I **sit** here?' }, { text: 'I can sit here?', msg: 'Pour poser la question, **can** passe **avant** le sujet : **Can I** sit here?' }],
      say: 'Can I sit here?', level: 1 },
    // Small talk
    { id: 'en12-x-15', prompt: 'Complète : Nice weather today, ___ it?', answers: ['isn\'t'], topic: 'Small talk', sec: 'en12-s-smalltalk',
      hint: 'C\'est l\'équivalent de « n\'est-ce pas ? » : une petite question négative.',
      explain: 'Après une phrase affirmative, la petite question finale est **négative** : **isn\'t it?** (n\'est-ce pas ?). → Nice weather today, **isn\'t** it?',
      rule: 'It\'s… , isn\'t it? = …, n\'est-ce pas ?',
      mistakes: [{ text: 'is', msg: 'Après une phrase affirmative, la petite question est **négative** : **isn\'t** it?' }, { text: 'doesn\'t', msg: 'La phrase sous-entendue est « It **is** nice weather » : on reprend **is** → isn\'t it?' }, { text: 'no', msg: '« no ? » à la française ne se dit pas. On dit : **isn\'t** it?' }],
      say: 'Nice weather today, isn\'t it?', level: 1 },
    { id: 'en12-x-16', prompt: 'Réponds à « What do you do? » en anglais : Je suis à la retraite.', answers: ['I\'m retired.'], topic: 'Small talk', sec: 'en12-s-smalltalk',
      hint: 'à la retraite = retired.',
      explain: '« À la retraite » = **retired** (un adjectif, avec to be). → **I\'m retired.** (Je suis à la retraite.) Tu peux ajouter : I was a teacher. (J\'étais professeur.)',
      rule: 'être à la retraite = to be retired',
      mistakes: [{ text: 'I am at the retirement', msg: '« À la retraite » se dit simplement **retired** : I\'m retired.' }, { text: 'I am retire', msg: 'Il faut le **-d** : I\'m **retired**.' }, { text: 'I retired', msg: '« I retired » (prétérit) = j\'ai pris ma retraite (à un moment précis). « Je suis à la retraite » = **I\'m retired** (avec to be).' }],
      say: 'I\'m retired.', level: 1 },
    { id: 'en12-x-17', prompt: 'Traduis : D\'où venez-vous ? (votre pays)', answers: ['Where are you from?', 'Where do you come from?'], topic: 'Small talk', sec: 'en12-s-smalltalk',
      hint: 'Le petit mot « from » se met à la fin.',
      explain: 'Pour demander l\'origine : **Where are you from?** (mot à mot : où êtes-vous de ?). Réponse : I\'m from France. (Je viens de France.)',
      rule: 'Where are you from? → I\'m from + pays',
      mistakes: [{ text: 'From where are you?', msg: 'En anglais, **from** se met à la **fin** : Where are you **from**?' }, { text: 'Where you are from?', msg: 'Il faut inverser : **are** avant le sujet → Where **are you** from?' }, { text: 'Where are you coming from?', msg: '« Where are you coming from? » = d\'où arrivez-vous (en ce moment). Pour le pays d\'origine : **Where are you from?**' }],
      say: 'Where are you from?', level: 1 },
    // Au téléphone
    { id: 'en12-x-18', prompt: 'Au téléphone, complète : Hello, ___ is Paul speaking.', answers: ['this'], topic: 'Au téléphone', sec: 'en12-s-telephone',
      hint: 'Au téléphone, on ne dit pas « I am ».',
      explain: 'Au téléphone, on se présente avec **This is** + prénom. → Hello, **this** is Paul speaking. (Allô, c\'est Paul à l\'appareil.)',
      rule: 'Au téléphone : This is + prénom (speaking) · It\'s + prénom',
      mistakes: [{ text: 'here', msg: '« Here is Paul » est un calque du français « ici Paul ». Au téléphone : **This is** Paul.' }, { text: 'I', msg: 'On ne dit pas « I is », et au téléphone on se présente avec **This is** : This is Paul speaking.' }, { text: 'it', msg: 'Avec **speaking**, on dit **This is** Paul speaking. (Sans speaking, « It\'s Paul » est aussi possible.)' }],
      say: 'Hello, this is Paul speaking.', level: 1 },
    { id: 'en12-x-19', prompt: 'Traduis : Pourriez-vous me rappeler ?', answers: ['Could you call me back?', 'Can you call me back?', 'Could you ring me back?', 'Could you phone me back?', 'Can you ring me back?', 'Can you phone me back?'], topic: 'Au téléphone', sec: 'en12-s-telephone',
      hint: 'rappeler = call back ; le pronom me se met au milieu.',
      explain: '« Rappeler » au téléphone = **call back**, avec le pronom au milieu : call **me** back. → **Could you call me back?** (Pourriez-vous me rappeler ?)',
      rule: 'call + me / you / him… + back',
      mistakes: [{ text: 'Could you recall me?', msg: '« recall » veut dire se souvenir. « Rappeler » au téléphone = **call back** : Could you call me back?' }, { text: 'Could you call back me?', msg: 'Le pronom **me** se place **au milieu** : call **me** back.' }],
      say: 'Could you call me back?', level: 2 },
    { id: 'en12-x-20', prompt: 'Traduis avec will : Je t\'appellerai plus tard.', answers: ['I\'ll call you later.', 'I\'ll ring you later.', 'I\'ll phone you later.'], topic: 'Au téléphone', sec: 'en12-s-telephone',
      hint: 'plus tard = later.',
      explain: 'Une promesse pour plus tard → futur avec **will** (I\'ll). → **I\'ll call you later.** (Je t\'appellerai plus tard.)',
      rule: 'Futur : sujet + will (\'ll) + base verbale',
      mistakes: [{ text: 'I call you later', msg: 'Pour une promesse (futur), il faut **will** : I\'**ll** call you later.' }, { text: 'I will to call you later', msg: 'Pas de « to » après will : I will **call** you later.' }, { text: 'I will call you after', msg: '« plus tard » = **later**. (after = après, suivi d\'un complément : after lunch.)' }],
      say: 'I\'ll call you later.', level: 1 },
    // Faire du shopping
    { id: 'en12-x-21', prompt: 'Traduis (en parlant d\'une veste) : Puis-je l\'essayer ?', answers: ['Can I try it on?', 'Could I try it on?', 'May I try it on?'], topic: 'Faire du shopping', sec: 'en12-s-shopping',
      hint: 'essayer un vêtement = try on ; it se place au milieu.',
      explain: 'Essayer un vêtement = **try on**, et **it** se met au milieu : try **it** on. → **Can I try it on?** (Puis-je l\'essayer ?)',
      rule: 'try + it / them + on',
      mistakes: [{ text: 'Can I try on it?', msg: 'Avec **it**, le petit mot **on** se place **après** : try **it on**.' }, { text: 'Can I try it?', msg: 'Pour un vêtement, on dit **try on** : Can I try it **on**? (try seul = essayer, goûter.)' }],
      say: 'Can I try it on?', level: 1 },
    { id: 'en12-x-22', prompt: 'Complète : Can I pay ___ card?', answers: ['by'], topic: 'Faire du shopping', sec: 'en12-s-shopping',
      hint: 'par carte = ___ card ; en espèces = in cash.',
      explain: '« Par carte » = **by card**. → Can I pay **by** card? (Puis-je payer par carte ?)',
      rule: 'pay by card (par carte) · pay in cash (en espèces)',
      mistakes: [{ text: 'with', msg: 'On dit **by card** (par carte) et **in cash** (en espèces).' }, { text: 'in', msg: '« in » va avec cash (in cash). Pour la carte : **by** card.' }, { text: 'par', msg: 'C\'est du français ! « par carte » = **by** card.' }],
      say: 'Can I pay by card?', level: 1 },
    { id: 'en12-x-23', prompt: 'Traduis : Combien coûtent ces chaussures ?', answers: ['How much are these shoes?', 'How much do these shoes cost?'], topic: 'Faire du shopping', sec: 'en12-s-shopping',
      hint: 'ces chaussures = these shoes (pluriel).',
      explain: 'Prix de plusieurs choses : **How much are** + pluriel ? → **How much are these shoes?** (Combien coûtent ces chaussures ?)',
      rule: 'How much is + singulier ? · How much are + pluriel ?',
      mistakes: [{ text: 'How much is these shoes?', msg: '« shoes » est au pluriel : How much **are** these shoes?' }, { text: 'How many are these shoes?', msg: 'Pour un prix : **How much**, jamais how many.' }, { text: 'How much cost these shoes?', msg: 'Il faut l\'auxiliaire **do** : How much **do** these shoes **cost**? (ou plus simple : How much **are** these shoes?)' }],
      say: 'How much are these shoes?', level: 1 },
    // Urgences
    { id: 'en12-x-24', prompt: 'Traduis : Où est la pharmacie la plus proche ?', answers: ['Where is the nearest pharmacy?', 'Where is the closest pharmacy?', 'Where is the nearest chemist\'s?', 'Where is the nearest chemist?', 'Where is the nearest drugstore?'], topic: 'Urgences', sec: 'en12-s-urgences',
      hint: 'le plus proche = the nearest, placé avant le nom.',
      explain: '« Le plus proche » = **the nearest**, avant le nom. → **Where is the nearest pharmacy?** (Où est la pharmacie la plus proche ?)',
      rule: 'near → nearer → the nearest (+ nom)',
      mistakes: [{ text: 'Where is the pharmacy the most near?', msg: 'On ne dit pas « the most near » : near → **the nearest**, placé **avant** le nom → the nearest pharmacy.' }, { text: 'Where is the most near pharmacy?', msg: 'near est un mot court : near → near**er** → **the nearest**. → the nearest pharmacy.' }, { text: 'Where is the nearer pharmacy?', msg: '« nearer » = plus proche (entre deux choses). « Le plus proche » = **the nearest**.' }],
      say: 'Where is the nearest pharmacy?', level: 2 },
    { id: 'en12-x-25', prompt: 'Traduis : J\'ai perdu mon portefeuille.', answers: ['I\'ve lost my wallet.', 'I lost my wallet.'], topic: 'Urgences', sec: 'en12-s-urgences',
      hint: 'perdre = lose (irrégulier : lose, lost, lost) ; portefeuille = wallet.',
      explain: 'Je ne l\'ai toujours pas → present perfect : **I\'ve lost** my wallet. (J\'ai perdu mon portefeuille.) « I lost my wallet » (prétérit) est aussi correct.',
      rule: 'lose → lost → lost · I\'ve lost = j\'ai perdu (et je ne l\'ai toujours pas)',
      mistakes: [{ text: 'I have losed my wallet', msg: 'lose est irrégulier : lose → lost → **lost**. → I\'ve **lost** my wallet.' }, { text: 'I have lose my wallet', msg: 'Après have, il faut le **participe passé** : I have **lost** my wallet.' }, { text: 'I am lost my wallet', msg: '« I am lost » = je suis perdu. « J\'ai perdu » = I **have** lost.' }],
      say: 'I\'ve lost my wallet.', level: 2 },
    { id: 'en12-x-26', prompt: 'Traduis : Je suis perdu.', answers: ['I\'m lost.'], topic: 'Urgences', sec: 'en12-s-urgences',
      hint: 'perdu = lost.',
      explain: '« Perdu » (je ne sais plus où je suis) = **lost**, avec to be. → **I\'m lost.** (Je suis perdu.)',
      rule: 'être perdu = to be lost',
      mistakes: [{ text: 'I\'m losing', msg: '« I\'m losing » = je suis en train de perdre (un match). « Perdu » (je ne trouve plus mon chemin) = **lost** : I\'m lost.' }, { text: 'I have lost', msg: '« I have lost » = j\'ai perdu (quelque chose). Pour « je suis perdu » : **I\'m lost**.' }, { text: 'I\'m lose', msg: 'Il faut l\'adjectif **lost** : I\'m **lost**.' }],
      say: 'I\'m lost.', level: 1 },
    // Present perfect
    { id: 'en12-x-27', prompt: 'Complète au present perfect : I have never ___ (drive) on the left.', answers: ['driven'], topic: 'Present perfect', sec: 'en12-s-present-perfect', strict: true,
      hint: 'Après have : 3e colonne (drive, drove, …).',
      explain: 'Après **have** (+ never), le **participe passé** : drive → drove → **driven**. → I have never **driven** on the left. (Je n\'ai jamais conduit à gauche.)',
      rule: 'have / has + participe passé (3e colonne)',
      mistakes: [{ text: 'drove', msg: '« drove » est le prétérit. Après have : participe passé **driven**.' }, { text: 'drived', msg: 'drive est irrégulier : drive → drove → **driven**.' }, { text: 'drive', msg: 'Après have, il faut le **participe passé** : **driven**.' }],
      say: 'I have never driven on the left.', level: 2 },
    { id: 'en12-x-28', prompt: 'Complète : ___ you ever been to New York?', answers: ['Have'], topic: 'Present perfect', sec: 'en12-s-present-perfect', strict: true,
      hint: 'ever + been : quel auxiliaire ?',
      explain: 'Expérience : **Have** + sujet + **ever** + participe passé. → **Have** you ever been to New York? (Es-tu déjà allé à New York ?) Réponse : Yes, I have. / No, I haven\'t.',
      rule: 'Have you ever + participe passé…? = As-tu déjà… ?',
      mistakes: [{ text: 'Did', msg: 'Avec **ever** + **been** (participe passé), c\'est le present perfect : **Have** you ever been…?' }, { text: 'Are', msg: '« been » va avec **have**, jamais avec are : **Have** you ever been…?' }, { text: 'Has', msg: '« has » va avec he, she, it. Avec you : **Have**.' }],
      say: 'Have you ever been to New York?', level: 2 },
    { id: 'en12-x-29', prompt: 'Complète au present perfect : She ___ (visit) Rome twice.', answers: ['has visited'], topic: 'Present perfect', sec: 'en12-s-present-perfect',
      hint: 'she → has ; visit est régulier.',
      explain: 'Present perfect avec she : **has** + participe passé (verbe régulier : -ed). → She **has visited** Rome twice. (Elle a visité Rome deux fois.)',
      rule: 'I / you / we / they have + participe · he / she / it has + participe',
      mistakes: [{ text: 'have visited', msg: 'Avec she : **has** (have va avec I, you, we, they).' }, { text: 'visited', msg: 'Au present perfect, il faut **has** + participe : She **has visited** Rome twice. (visited seul est le prétérit.)' }, { text: 'is visited', msg: 'Pas de « is » : le present perfect se construit avec **has** + participe passé.' }],
      say: 'She has visited Rome twice.', level: 2 },
    { id: 'en12-x-30', prompt: 'Prétérit ou present perfect ? Complète : I ___ (go) to London last year.', answers: ['went'], topic: 'Present perfect', sec: 'en12-s-present-perfect', strict: true,
      hint: '« last year » est une date précise.',
      explain: 'Date précise (**last year**) → **prétérit** : go → **went**. → I **went** to London last year. (Je suis allé à Londres l\'année dernière.)',
      rule: 'Date précise (yesterday, last year, in 2019, ago) → prétérit · Sans date (expérience) → present perfect',
      mistakes: [{ text: 'have been', msg: 'Avec une date précise (**last year**), on utilise le **prétérit** : I **went**.' }, { text: 'have gone', msg: 'Avec **last year**, il faut le prétérit : I **went**. (Et « have gone » voudrait dire que tu y es encore !)' }, { text: 'go', msg: 'Il faut le passé : last year → **went**.' }],
      say: 'I went to London last year.', level: 2 },
    { id: 'en12-x-31', prompt: 'Complète la négation : I ___ finished yet. (= je n\'ai pas encore fini)', answers: ['haven\'t'], topic: 'Present perfect', sec: 'en12-s-present-perfect',
      hint: 'Négation de have.',
      explain: 'Present perfect négatif : **haven\'t** (have not) + participe, et **yet** à la fin. → I **haven\'t** finished yet. (Je n\'ai pas encore fini.)',
      rule: 'haven\'t / hasn\'t + participe passé + yet = pas encore',
      mistakes: [{ text: 'didn\'t', msg: 'Avec **yet** et le participe finished, c\'est le present perfect : I **haven\'t** finished yet.' }, { text: 'don\'t', msg: 'Le participe finished va avec **have** : I **haven\'t** finished yet.' }, { text: 'hasn\'t', msg: '« hasn\'t » va avec he, she, it. Avec I : **haven\'t**.' }],
      say: 'I haven\'t finished yet.', level: 2 },
    { id: 'en12-x-32', prompt: 'Traduis : Je viens d\'arriver.', answers: ['I\'ve just arrived.', 'I just arrived.'], topic: 'Present perfect', sec: 'en12-s-present-perfect',
      hint: '« venir de » = have + just + participe passé.',
      explain: '« Venir de » se dit avec **just** : have + **just** + participe passé. → **I\'ve just arrived.** (Je viens d\'arriver.)',
      rule: 'venir de faire = have / has + just + participe passé',
      mistakes: [{ text: 'I come to arrive', msg: '« Venir de » ne se traduit pas mot à mot ! On dit : have + **just** + participe → I\'ve **just** arrived.' }, { text: 'I have arrived just', msg: '**just** se place **entre** have et le participe : I\'ve **just** arrived.' }, { text: 'I\'ve just arrive', msg: 'Après have, il faut le **participe passé** : arrive**d**.' }],
      say: 'I\'ve just arrived.', level: 2 }
  ]
});
