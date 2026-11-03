/* Anglais — chapitre 17 : Au travail (métiers, entreprise, réunions, e-mails, entretien d'embauche, present perfect + for / since) */
APP.registerChapter({
  id: 'en17', subject: 'anglais', num: 17, tier: 2,
  title: 'Au travail', subtitle: 'métiers · bureau, réunions, e-mails · entretien d\'embauche · for / since · I worked ou I\'ve worked',
  vocabSec: 'en17-s-vocab',
  sections: [
    {
      id: 'en17-s-metiers', title: 'Les métiers : I\'m an accountant, I work as…',
      html: `
<p>Tu sais déjà dire <span class="say">I'm a teacher</span> ou <span class="say">I'm retired</span> (chapitre 6). Voici d'autres métiers très courants, et les petits mots pour dire où et comment on travaille.</p>
<h3>Les métiers</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">an accountant</span></td><td>un ou une comptable</td></tr>
<tr><td><span class="say">a lawyer</span></td><td>un avocat, une avocate</td></tr>
<tr><td><span class="say">a mechanic</span></td><td>un mécanicien</td></tr>
<tr><td><span class="say">an electrician</span></td><td>un électricien</td></tr>
<tr><td><span class="say">a plumber</span></td><td>un plombier</td></tr>
<tr><td><span class="say">a builder</span></td><td>un maçon, un ouvrier du bâtiment</td></tr>
<tr><td><span class="say">a farmer</span></td><td>un agriculteur, une agricultrice</td></tr>
<tr><td><span class="say">a hairdresser</span></td><td>un coiffeur, une coiffeuse</td></tr>
<tr><td><span class="say">a shop assistant</span></td><td>un vendeur, une vendeuse</td></tr>
<tr><td><span class="say">a secretary</span></td><td>un ou une secrétaire</td></tr>
<tr><td><span class="say">a manager</span></td><td>un directeur, une directrice, un ou une responsable</td></tr>
<tr><td><span class="say">a driver</span> (<span class="say">a bus driver</span>, <span class="say">a lorry driver</span>)</td><td>un chauffeur (de bus, routier)</td></tr>
<tr><td><span class="say">a civil servant</span></td><td>un ou une fonctionnaire</td></tr>
<tr><td><span class="say">a postman</span> · <span class="say">a police officer</span></td><td>un facteur · un policier, une policière</td></tr></table>
<h3>Dire ce qu'on fait</h3>
<ul>
<li><span class="say">I'm an accountant.</span> — Je suis comptable. (toujours <b>a / an</b> devant le métier)</li>
<li><span class="say">I work as a driver.</span> — Je travaille comme chauffeur. (<span class="say">as</span> = comme, en tant que)</li>
<li><span class="say">I work for a small company.</span> — Je travaille pour une petite entreprise.</li>
<li><span class="say">I work in a factory.</span> — Je travaille dans une usine. <span class="say">She works at the hospital.</span> — Elle travaille à l'hôpital.</li>
<li><span class="say">I'm self-employed.</span> — Je suis à mon compte (indépendant).</li>
<li><span class="say">He's unemployed. He's looking for a job.</span> — Il est au chômage. Il cherche du travail.</li>
</ul>
<h3>Poser la question</h3>
<ul>
<li><span class="say">What does your wife do?</span> — Que fait votre femme dans la vie ?</li>
<li><span class="say">What do you do for a living?</span> — Qu'est-ce que vous faites pour gagner votre vie ?</li>
<li><span class="say">Who do you work for?</span> — Pour qui travaillez-vous ?</li>
</ul>
<div class="callout key"><b>À retenir</b> <span class="say">I'm a mechanic</span> (a / an devant le métier) · <span class="say">I work as a mechanic</span> (as = comme) · <span class="say">I work for a company</span> (for = pour) · <span class="say">I work in a factory</span> (in = dans).</div>
<div class="callout warn"><b>Piège</b> « Je travaille comme chauffeur » = <span class="say">I work as a driver</span>, pas « I work like a driver » : <span class="say">like</span> veut dire « comme, à la manière de ». Et n'oublie pas <b>a</b> après as : as <b>a</b> driver.</div>
<div class="callout tip"><b>Masculin, féminin</b> La plupart des métiers n'ont qu'une seule forme : <span class="say">a manager</span> = un directeur ou une directrice, <span class="say">a lawyer</span> = un avocat ou une avocate.</div>`
    },
    {
      id: 'en17-s-vocab', title: 'Vocabulaire : l\'entreprise, le bureau, la retraite',
      html: `
<p>Les mots de l'entreprise et du bureau. Clique sur un mot pour l'entendre. (Les métiers sont dans la fiche « Les métiers ».)</p>
<h3>L'entreprise</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">a factory</span></td><td>une usine</td></tr>
<tr><td><span class="say">an employee</span></td><td>un salarié, un employé</td></tr>
<tr><td><span class="say">a customer</span></td><td>un client, une cliente</td></tr>
<tr><td><span class="say">a team</span></td><td>une équipe</td></tr>
<tr><td><span class="say">a department</span></td><td>un service (dans une entreprise)</td></tr>
<tr><td><span class="say">the sales department</span></td><td>le service commercial</td></tr></table>
<h3>Au bureau</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">a desk</span></td><td>un bureau (le meuble)</td></tr>
<tr><td><span class="say">a meeting</span></td><td>une réunion</td></tr>
<tr><td><span class="say">an email</span></td><td>un e-mail</td></tr>
<tr><td><span class="say">a report</span></td><td>un rapport</td></tr>
<tr><td><span class="say">a contract</span></td><td>un contrat</td></tr></table>
<h3>Le temps de travail et l'argent</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">full-time</span></td><td>à plein temps</td></tr>
<tr><td><span class="say">part-time</span></td><td>à temps partiel</td></tr>
<tr><td><span class="say">a salary</span></td><td>un salaire</td></tr>
<tr><td><span class="say">to earn</span></td><td>gagner (de l'argent)</td></tr></table>
<h3>Les verbes du travail</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">to hire</span></td><td>embaucher</td></tr>
<tr><td><span class="say">to manage</span></td><td>diriger, gérer</td></tr>
<tr><td><span class="say">to sign</span></td><td>signer</td></tr>
<tr><td><span class="say">to agree</span></td><td>être d'accord</td></tr>
<tr><td><span class="say">to send</span> (<span class="say">sent</span>, <span class="say">sent</span>)</td><td>envoyer</td></tr></table>
<h3>La retraite</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">retirement</span></td><td>la retraite (la période de la vie)</td></tr>
<tr><td><span class="say">a pension</span></td><td>une pension de retraite (l'argent)</td></tr>
<tr><td><span class="say">a volunteer</span></td><td>un ou une bénévole</td></tr>
<tr><td><span class="say">former</span></td><td>ancien (d'avant)</td></tr></table>
<div class="callout key"><b>À retenir</b> <span class="say">an office</span> = un bureau (la pièce) ; <span class="say">a desk</span> = un bureau (le meuble).</div>
<div class="callout warn"><b>Faux amis</b> <span class="say">a factory</span> = une usine (un facteur = <span class="say">a postman</span>). <span class="say">to earn</span> = gagner de l'argent ; gagner un match = <span class="say">to win</span>. <span class="say">a reunion</span> = des retrouvailles : une réunion de travail = <span class="say">a meeting</span>.</div>`
    },
    {
      id: 'en17-s-forsince', title: 'Depuis combien de temps ? for et since',
      html: `
<p>En français, on dit « Je travaille ici <b>depuis</b> dix ans » avec le <b>présent</b>. En anglais, c'est impossible : l'action a commencé dans le passé et elle <b>continue aujourd'hui</b>. On utilise donc le <b>present perfect</b> (have / has + participe passé, chapitre 13).</p>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">I have worked here for ten years.</span></td><td>Je travaille ici depuis dix ans.</td></tr>
<tr><td><span class="say">She has lived in Nantes since 2010.</span></td><td>Elle habite à Nantes depuis 2010.</td></tr>
<tr><td><span class="say">We've known them for a long time.</span></td><td>Nous les connaissons depuis longtemps.</td></tr>
<tr><td><span class="say">He's had this car since January.</span></td><td>Il a cette voiture depuis janvier.</td></tr>
<tr><td><span class="say">I've been retired since 2019.</span></td><td>Je suis à la retraite depuis 2019.</td></tr></table>
<p>Avec <b>be</b> (être), le participe passé est <span class="say">been</span> : <span class="say">I've been a nurse for twenty years.</span> — Je suis infirmière depuis vingt ans.</p>
<h3>for ou since ?</h3>
<table><tr><th>for + une durée</th><th>since + un point de départ</th></tr>
<tr><td><span class="say">for ten years</span> (depuis dix ans)</td><td><span class="say">since 2015</span> (depuis 2015)</td></tr>
<tr><td><span class="say">for six months</span> (depuis six mois)</td><td><span class="say">since January</span> (depuis janvier)</td></tr>
<tr><td><span class="say">for two weeks</span> (depuis deux semaines)</td><td><span class="say">since Monday</span> (depuis lundi)</td></tr>
<tr><td><span class="say">for a long time</span> (depuis longtemps)</td><td><span class="say">since last year</span> (depuis l'année dernière)</td></tr>
<tr><td><span class="say">for three days</span> (depuis trois jours)</td><td><span class="say">since I was twenty</span> (depuis l'âge de vingt ans)</td></tr></table>
<div class="callout tip"><b>Astuce</b> Pose-toi la question en français. « Depuis <b>combien de temps</b> ? » → <span class="say">for</span>. « Depuis <b>quand</b> ? » → <span class="say">since</span>.</div>
<h3>La question : How long…?</h3>
<ul>
<li><span class="say">How long have you worked here?</span> — Depuis combien de temps travaillez-vous ici ?</li>
<li><span class="say">How long have you lived in this town?</span> — Depuis combien de temps habitez-vous dans cette ville ?</li>
<li><span class="say">How long has she been a nurse?</span> — Depuis combien de temps est-elle infirmière ?</li>
<li>Réponses courtes : <span class="say">For twenty years.</span> (Depuis vingt ans.) · <span class="say">Since 2004.</span> (Depuis 2004.)</li>
</ul>
<div class="callout key"><b>À retenir</b> « depuis » + présent en français → <b>have / has + participe passé</b> en anglais, puis <b>for</b> (une durée) ou <b>since</b> (un point de départ).</div>
<div class="callout warn"><b>Piège</b> « I work here since ten years » contient deux fautes. Le verbe : <span class="say">I have worked</span> (pas le présent). Le petit mot : <span class="say">for ten years</span> (dix ans est une durée).</div>
<div class="callout info"><b>À l'oral</b> Tu entendras aussi <span class="say">I've been working here for ten years.</span> C'est le même sens. Tu n'as pas besoin de le dire toi-même : le comprendre suffit.</div>`
    },
    {
      id: 'en17-s-fini', title: 'I worked ou I\'ve worked ? Fini ou encore vrai',
      html: `
<p>Avec <b>for</b>, tout dépend du temps du verbe. Le <b>prétérit</b> (<span class="say">I worked</span>) dit que c'est <b>fini</b>. Le <b>present perfect</b> (<span class="say">I've worked</span>) dit que c'est <b>encore vrai</b> aujourd'hui.</p>
<table><tr><th>C'est fini → prétérit</th><th>C'est encore vrai → present perfect</th></tr>
<tr><td><span class="say">I worked in a bank for thirty years.</span><br>J'ai travaillé dans une banque pendant trente ans. (je n'y travaille plus)</td><td><span class="say">I've worked in a bank for thirty years.</span><br>Je travaille dans une banque depuis trente ans. (j'y suis encore)</td></tr>
<tr><td><span class="say">He was a postman for forty years.</span><br>Il a été facteur pendant quarante ans.</td><td><span class="say">He has been a postman for forty years.</span><br>Il est facteur depuis quarante ans.</td></tr>
<tr><td><span class="say">How long did you work there?</span><br>Combien de temps avez-vous travaillé là-bas ?</td><td><span class="say">How long have you worked here?</span><br>Depuis combien de temps travaillez-vous ici ?</td></tr></table>
<p>Donc <span class="say">for</span> se traduit par <b>pendant</b> avec le prétérit, et par <b>depuis</b> avec le present perfect.</p>
<h3>Les petits mots utiles</h3>
<ul>
<li><span class="say">still</span> = toujours, encore (ça continue) : <span class="say">I still work there.</span> — J'y travaille toujours. <span class="say">She's still a nurse.</span> — Elle est toujours infirmière.</li>
<li><span class="say">not any more</span> = ne… plus : <span class="say">I don't work there any more.</span> — Je n'y travaille plus. Réponse courte : <span class="say">Not any more.</span> — Plus maintenant.</li>
<li><span class="say">until</span> = jusqu'à : <span class="say">I worked there until 2018.</span> — J'ai travaillé là-bas jusqu'en 2018.</li>
<li><span class="say">former</span> = ancien (d'avant) : <span class="say">my former boss</span> — mon ancien patron.</li>
</ul>
<div class="callout key"><b>À retenir</b> Fini → <b>prétérit</b> (<span class="say">I worked</span>), et for = pendant. Encore vrai → <b>present perfect</b> (<span class="say">I've worked</span>), et for = depuis.</div>
<div class="callout warn"><b>Pièges</b> <span class="say">since</span> va avec le present perfect : <span class="say">I've lived here since 2010</span> (pas « I live here since 2010 », ni « I lived here since 2010 »). Et <span class="say">still</span> se place <b>devant</b> le verbe, mais <b>après</b> am / is / are : <span class="say">I still work</span>, <span class="say">I'm still tired</span>.</div>`
    },
    {
      id: 'en17-s-parcours', title: 'Raconter son parcours (et sa retraite)',
      html: `
<p>Pour raconter sa vie professionnelle, on mélange les temps : le <b>prétérit</b> pour les étapes terminées (avec une date), le <b>present perfect</b> pour ce qui dure jusqu'à aujourd'hui. Les mots <span class="say">first</span>, <span class="say">then</span>, <span class="say">after that</span> (chapitre 14) donnent l'ordre.</p>
<h3>L'histoire de Bernard</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">I left school at sixteen.</span></td><td>J'ai quitté l'école à seize ans.</td></tr>
<tr><td><span class="say">First, I worked in a garage.</span></td><td>D'abord, j'ai travaillé dans un garage.</td></tr>
<tr><td><span class="say">Then I worked as a mechanic for twenty years.</span></td><td>Ensuite, j'ai été mécanicien pendant vingt ans.</td></tr>
<tr><td><span class="say">In 1995, I became a manager.</span></td><td>En 1995, je suis devenu responsable.</td></tr>
<tr><td><span class="say">I retired in 2018.</span></td><td>J'ai pris ma retraite en 2018.</td></tr>
<tr><td><span class="say">Since then, I've travelled a lot.</span></td><td>Depuis, j'ai beaucoup voyagé.</td></tr>
<tr><td><span class="say">I've been a volunteer at the library for two years.</span></td><td>Je suis bénévole à la bibliothèque depuis deux ans.</td></tr></table>
<p><span class="say">become</span> est irrégulier : <span class="say">become, became, become</span> (devenir). <span class="say">leave</span> aussi : <span class="say">leave, left, left</span> (quitter, partir).</p>
<h3>La retraite</h3>
<ul>
<li><span class="say">retirement</span> = la retraite (la période de la vie) : <span class="say">Enjoy your retirement!</span> — Profite bien de ta retraite !</li>
<li><span class="say">a pension</span> = la retraite (l'argent qu'on reçoit) : <span class="say">My pension isn't very big.</span> — Ma retraite n'est pas très grosse.</li>
<li><span class="say">to retire</span> = partir à la retraite · <span class="say">retired</span> = retraité (déjà vus).</li>
<li><span class="say">a volunteer</span> = un ou une bénévole : <span class="say">She's a volunteer at the hospital.</span> — Elle est bénévole à l'hôpital.</li>
</ul>
<div class="callout key"><b>À retenir</b> Une date ou un âge (<span class="say">in 1995</span>, <span class="say">at sixteen</span>, <span class="say">two years ago</span>) → prétérit. Jusqu'à aujourd'hui (<span class="say">since then</span>, <span class="say">for two years</span>) → present perfect.</div>
<div class="callout warn"><b>Pièges</b> « Je suis retraité depuis 2018 » = <span class="say">I've been retired since 2018</span>, pas « I'm retired since 2018 ». « La retraite » a deux traductions : <span class="say">retirement</span> (la période) et <span class="say">pension</span> (l'argent). Et <span class="say">a library</span> = une bibliothèque (une librairie = <span class="say">a bookshop</span>).</div>`
    },
    {
      id: 'en17-s-bureau', title: 'Au bureau : réunions et e-mails',
      html: `
<h3>En réunion</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">I'm in a meeting.</span></td><td>Je suis en réunion.</td></tr>
<tr><td><span class="say">The meeting starts at nine.</span></td><td>La réunion commence à neuf heures.</td></tr>
<tr><td><span class="say">Let's start.</span></td><td>Commençons.</td></tr>
<tr><td><span class="say">Has everyone got a copy of the report?</span></td><td>Tout le monde a une copie du rapport ?</td></tr>
<tr><td><span class="say">I agree.</span> · <span class="say">I don't agree.</span></td><td>Je suis d'accord. · Je ne suis pas d'accord.</td></tr>
<tr><td><span class="say">Any questions?</span></td><td>Des questions ?</td></tr></table>
<h3>Un e-mail simple</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">Dear Mr Smith,</span></td><td>Monsieur, (Cher Monsieur Smith,)</td></tr>
<tr><td><span class="say">Dear Sarah,</span></td><td>Chère Sarah,</td></tr>
<tr><td><span class="say">Thank you for your email.</span></td><td>Merci pour votre e-mail.</td></tr>
<tr><td><span class="say">I'm writing about the meeting on Monday.</span></td><td>Je vous écris au sujet de la réunion de lundi.</td></tr>
<tr><td><span class="say">Please find attached the report.</span></td><td>Veuillez trouver ci-joint le rapport.</td></tr>
<tr><td><span class="say">Could you send me the contract?</span></td><td>Pourriez-vous m'envoyer le contrat ?</td></tr>
<tr><td><span class="say">I look forward to hearing from you.</span></td><td>Dans l'attente de votre réponse.</td></tr>
<tr><td><span class="say">Kind regards,</span> · <span class="say">Best regards,</span></td><td>Cordialement,</td></tr></table>
<h3>Exemple</h3>
<p><span class="say">Dear Mrs Jones,</span><br>
<span class="say">Thank you for your email. I'm sorry, I can't come to the meeting on Tuesday. Could we meet on Wednesday instead?</span><br>
<span class="say">Kind regards,</span><br>
<span class="say">Paul Martin</span></p>
<p>(Madame, merci pour votre e-mail. Je suis désolé, je ne peux pas venir à la réunion de mardi. Pourrions-nous nous voir mercredi à la place ? Cordialement, Paul Martin)</p>
<div class="callout key"><b>À retenir</b> <span class="say">Dear</span> + le nom pour commencer, <span class="say">Kind regards</span> pour finir. <span class="say">Mr</span> = Monsieur, <span class="say">Mrs</span> = Madame (mariée), <span class="say">Ms</span> = Madame (sans dire si elle est mariée).</div>
<div class="callout warn"><b>Pièges</b> « Je suis d'accord » = <span class="say">I agree</span> (un seul verbe), jamais « I am agree ». Une réunion de travail = <span class="say">a meeting</span>. Et <span class="say">I look forward to hearing from you</span> est une formule toute faite : apprends-la par cœur, avec le <b>-ing</b>.</div>`
    },
    {
      id: 'en17-s-entretien', title: 'L\'entretien d\'embauche',
      html: `
<p>Un entretien d'embauche (<span class="say">a job interview</span>) utilise tout ce que tu viens d'apprendre : <span class="say">How long have you…?</span>, for, since, et le prétérit pour l'expérience passée.</p>
<h3>Postuler</h3>
<ul>
<li><span class="say">I'd like to apply for the job.</span> — Je voudrais postuler pour ce poste.</li>
<li><span class="say">I've sent my CV.</span> — J'ai envoyé mon CV.</li>
<li><span class="say">The job interview is on Thursday.</span> — L'entretien d'embauche est jeudi.</li>
</ul>
<h3>Les questions du recruteur</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">Tell me about yourself.</span></td><td>Parlez-moi de vous.</td></tr>
<tr><td><span class="say">Why do you want this job?</span></td><td>Pourquoi voulez-vous ce poste ?</td></tr>
<tr><td><span class="say">How long have you worked as an electrician?</span></td><td>Depuis combien de temps êtes-vous électricien ?</td></tr>
<tr><td><span class="say">What are your skills?</span></td><td>Quelles sont vos compétences ?</td></tr>
<tr><td><span class="say">Have you ever worked in a team?</span></td><td>Avez-vous déjà travaillé en équipe ?</td></tr>
<tr><td><span class="say">When can you start?</span></td><td>Quand pouvez-vous commencer ?</td></tr>
<tr><td><span class="say">Do you have any questions?</span></td><td>Avez-vous des questions ?</td></tr></table>
<h3>Répondre</h3>
<ul>
<li><span class="say">I have ten years' experience.</span> — J'ai dix ans d'expérience.</li>
<li><span class="say">I've been an electrician since 2012.</span> — Je suis électricien depuis 2012.</li>
<li><span class="say">Before that, I worked for a big company for five years.</span> — Avant cela, j'ai travaillé cinq ans pour une grande entreprise.</li>
<li><span class="say">I like working in a team.</span> — J'aime travailler en équipe.</li>
<li><span class="say">I can start next month.</span> — Je peux commencer le mois prochain.</li>
<li><span class="say">Is it full-time or part-time?</span> — C'est à plein temps ou à temps partiel ?</li>
<li><span class="say">What's the salary?</span> — Quel est le salaire ?</li>
</ul>
<div class="callout key"><b>À retenir</b> Postuler pour un poste = <span class="say">apply for a job</span>. Ton expérience passée → prétérit (<span class="say">I worked</span>). Ce qui dure encore → present perfect (<span class="say">I've been</span>).</div>
<div class="callout warn"><b>Faux amis</b> « Une formation » = <span class="say">training</span> (sans a, sans -s). <span class="say">experience</span> (l'expérience professionnelle) ne prend pas de -s : <span class="say">a lot of experience</span>. Le CV se dit <span class="say">a CV</span> en Grande-Bretagne (aux États-Unis : <span class="say">a résumé</span>).</div>`
    },
    {
      id: 'en17-s-pieges', title: 'Les pièges des francophones',
      html: `
<ul>
<li><b>depuis + présent</b> : « J'habite ici depuis 2010 » = <span class="say">I've lived here since 2010.</span> (pas « I live here since 2010 »).</li>
<li><b>for ou since</b> : une durée → <span class="say">for ten years</span> ; un point de départ → <span class="say">since 2010</span>. Jamais « since ten years ».</li>
<li><b>Fini ou pas ?</b> <span class="say">I worked there for ten years.</span> = c'est fini (pendant). <span class="say">I've worked here for ten years.</span> = j'y suis encore (depuis).</li>
<li><b>Une date précise → prétérit</b> : <span class="say">I retired in 2018.</span> (pas « I have retired in 2018 »).</li>
<li><b>Depuis combien de temps ?</b> = <span class="say">How long…?</span> Par exemple : <span class="say">How long have you lived here?</span></li>
<li><b>Le métier avec a / an</b> : <span class="say">She's an accountant.</span> (pas « she is accountant »).</li>
<li><b>comme = as</b> : <span class="say">I work as a driver.</span> (pas « like a driver »).</li>
<li><b>être d'accord</b> = <span class="say">agree</span> : <span class="say">I agree with you.</span> (pas « I am agree »).</li>
<li><b>postuler pour</b> = <span class="say">apply for</span> : <span class="say">I'd like to apply for the job.</span></li>
<li><b>ne… plus</b> = <span class="say">not any more</span> : <span class="say">I don't work there any more.</span></li>
<li><b>Faux amis</b> : une réunion = <span class="say">a meeting</span> ; une formation = <span class="say">training</span> ; une usine = <span class="say">a factory</span> ; une bibliothèque = <span class="say">a library</span>.</li>
</ul>
<div class="callout key"><b>À retenir</b> <span class="say">How long have you worked here?</span> — <span class="say">For ten years.</span> / <span class="say">Since 2015.</span></div>`
    }
  ],
  words: [
    // Les métiers
    { en: 'accountant', fr: 'le ou la comptable', pos: 'n', cat: 'Les métiers', sec: 'en17-s-metiers', ex: 'My sister is an accountant.', exFr: 'Ma sœur est comptable.', level: 2, note: 'Commence par un son voyelle : **an** accountant.' },
    { en: 'lawyer', fr: 'l\'avocat, l\'avocate', pos: 'n', cat: 'Les métiers', sec: 'en17-s-metiers', ex: 'I need a good lawyer.', exFr: 'J\'ai besoin d\'un bon avocat.', level: 2, note: 'Faux ami : l\'avocat (le fruit) = an avocado.' },
    { en: 'mechanic', fr: 'le mécanicien', pos: 'n', cat: 'Les métiers', sec: 'en17-s-metiers', ex: 'The mechanic is looking at my car.', exFr: 'Le mécanicien regarde ma voiture.', level: 1 },
    { en: 'electrician', fr: 'l\'électricien', pos: 'n', cat: 'Les métiers', sec: 'en17-s-metiers', ex: 'He has been an electrician for twenty years.', exFr: 'Il est électricien depuis vingt ans.', level: 2, note: 'Avec **an** : an electrician.' },
    { en: 'plumber', fr: 'le plombier', pos: 'n', cat: 'Les métiers', sec: 'en17-s-metiers', ex: 'We need a plumber in the bathroom.', exFr: 'Nous avons besoin d\'un plombier dans la salle de bains.', level: 2, note: 'Le b ne se prononce pas : « pleum-eur ».' },
    { en: 'builder', fr: 'le maçon, l\'ouvrier du bâtiment', pos: 'n', cat: 'Les métiers', sec: 'en17-s-metiers', ex: 'My son is a builder.', exFr: 'Mon fils est maçon.', level: 2 },
    { en: 'farmer', fr: 'l\'agriculteur, l\'agricultrice', pos: 'n', cat: 'Les métiers', sec: 'en17-s-metiers', ex: 'My grandfather was a farmer.', exFr: 'Mon grand-père était agriculteur.', level: 1, note: 'a farm = une ferme.' },
    { en: 'hairdresser', fr: 'le coiffeur, la coiffeuse', pos: 'n', cat: 'Les métiers', sec: 'en17-s-metiers', ex: 'I\'m going to the hairdresser\'s on Friday.', exFr: 'Je vais chez le coiffeur vendredi.', level: 2, note: 'Chez le coiffeur = at / to the hairdresser\'s.' },
    { en: 'shop assistant', fr: 'le vendeur, la vendeuse', pos: 'n', cat: 'Les métiers', sec: 'en17-s-metiers', alt: ['sales assistant'], ex: 'The shop assistant was very kind.', exFr: 'La vendeuse était très gentille.', level: 1 },
    { en: 'secretary', fr: 'le ou la secrétaire', pos: 'n', cat: 'Les métiers', sec: 'en17-s-metiers', ex: 'Please ask my secretary.', exFr: 'Demandez à ma secrétaire, s\'il vous plaît.', level: 2 },
    { en: 'manager', fr: 'le directeur, la directrice (le ou la responsable)', pos: 'n', cat: 'Les métiers', sec: 'en17-s-metiers', ex: 'I\'d like to speak to the manager.', exFr: 'Je voudrais parler au directeur.', level: 1, note: 'La personne qui dirige un magasin, un service ou une équipe.' },
    { en: 'driver', fr: 'le chauffeur, le conducteur', pos: 'n', cat: 'Les métiers', sec: 'en17-s-metiers', ex: 'He was a lorry driver for thirty years.', exFr: 'Il a été chauffeur routier pendant trente ans.', level: 1, note: 'a bus driver = un chauffeur de bus ; a lorry driver (US : a truck driver) = un chauffeur routier.' },
    { en: 'civil servant', fr: 'le ou la fonctionnaire', pos: 'n', cat: 'Les métiers', sec: 'en17-s-metiers', ex: 'My wife is a civil servant.', exFr: 'Ma femme est fonctionnaire.', level: 2 },
    { en: 'self-employed', fr: 'à son compte, indépendant', pos: 'adj', cat: 'Les métiers', sec: 'en17-s-metiers', ex: 'I\'ve been self-employed since 2015.', exFr: 'Je suis à mon compte depuis 2015.', level: 2 },
    { en: 'unemployed', fr: 'au chômage', pos: 'adj', cat: 'Les métiers', sec: 'en17-s-metiers', alt: ['out of work'], ex: 'He has been unemployed for six months.', exFr: 'Il est au chômage depuis six mois.', level: 2 },
    // L'entreprise
    { en: 'factory', fr: 'l\'usine', pos: 'n', cat: 'L\'entreprise', ex: 'My father worked in a factory.', exFr: 'Mon père travaillait dans une usine.', level: 1, note: 'Faux ami : un facteur = a postman. Pluriel : factories.' },
    { en: 'employee', fr: 'le salarié, l\'employé', pos: 'n', cat: 'L\'entreprise', ex: 'The company has two hundred employees.', exFr: 'L\'entreprise a deux cents salariés.', level: 2, note: 'On appuie sur la fin : « em-ploï-I ».' },
    { en: 'customer', fr: 'le client, la cliente', pos: 'n', cat: 'L\'entreprise', alt: ['client'], ex: 'The customer is always right.', exFr: 'Le client a toujours raison.', level: 1, note: 'customer = le client d\'un magasin ; client = le client d\'un avocat, d\'un comptable.' },
    { en: 'team', fr: 'l\'équipe', pos: 'n', cat: 'L\'entreprise', ex: 'I work in a small team.', exFr: 'Je travaille dans une petite équipe.', level: 1 },
    { en: 'department', fr: 'le service (dans une entreprise)', pos: 'n', cat: 'L\'entreprise', ex: 'She works in the sales department.', exFr: 'Elle travaille au service commercial.', level: 2 },
    { en: 'desk', fr: 'le bureau (le meuble)', pos: 'n', cat: 'Au bureau', ex: 'Your keys are on my desk.', exFr: 'Tes clés sont sur mon bureau.', level: 1, note: 'Le bureau (la pièce, le lieu) = an office.' },
    { en: 'meeting', fr: 'la réunion', pos: 'n', cat: 'Au bureau', ex: 'I\'m in a meeting until three.', exFr: 'Je suis en réunion jusqu\'à quinze heures.', level: 1, note: 'Faux ami : a reunion = des retrouvailles. En réunion = in a meeting.' },
    { en: 'email', fr: 'l\'e-mail, le courriel', pos: 'n', cat: 'Au bureau', alt: ['e-mail'], ex: 'I sent you an email this morning.', exFr: 'Je t\'ai envoyé un e-mail ce matin.', level: 1, note: 'C\'est aussi un verbe : to email somebody = envoyer un e-mail à quelqu\'un.' },
    { en: 'report', fr: 'le rapport', pos: 'n', cat: 'Au bureau', ex: 'I must finish this report today.', exFr: 'Je dois finir ce rapport aujourd\'hui.', level: 2 },
    { en: 'contract', fr: 'le contrat', pos: 'n', cat: 'Au bureau', ex: 'Please sign the contract here.', exFr: 'Veuillez signer le contrat ici.', level: 1 },
    { en: 'salary', fr: 'le salaire', pos: 'n', cat: 'Le temps de travail et l\'argent', alt: ['pay', 'wages'], ex: 'The salary is very good.', exFr: 'Le salaire est très bon.', level: 1, note: 'salary = un salaire mensuel ou annuel ; wages = une paie à l\'heure ou à la semaine.' },
    { en: 'full-time', fr: 'à plein temps', pos: 'adj', cat: 'Le temps de travail et l\'argent', ex: 'I work full-time.', exFr: 'Je travaille à plein temps.', level: 1 },
    { en: 'part-time', fr: 'à temps partiel', pos: 'adj', cat: 'Le temps de travail et l\'argent', ex: 'She works part-time, three days a week.', exFr: 'Elle travaille à temps partiel, trois jours par semaine.', level: 1 },
    { en: 'earn', fr: 'gagner (de l\'argent)', pos: 'v', cat: 'Le temps de travail et l\'argent', ex: 'He earns two thousand pounds a month.', exFr: 'Il gagne deux mille livres par mois.', level: 1, note: 'Gagner un match, un prix = win.' },
    // Les verbes du travail
    { en: 'hire', fr: 'embaucher', pos: 'v', cat: 'Les verbes du travail', alt: ['employ', 'take on'], ex: 'The company hired ten people last year.', exFr: 'L\'entreprise a embauché dix personnes l\'année dernière.', level: 2 },
    { en: 'manage', fr: 'diriger, gérer', pos: 'v', cat: 'Les verbes du travail', alt: ['run'], ex: 'She manages a team of ten people.', exFr: 'Elle dirige une équipe de dix personnes.', level: 2, note: 'Celui qui dirige = a manager.' },
    { en: 'sign', fr: 'signer', pos: 'v', cat: 'Les verbes du travail', ex: 'Can you sign here, please?', exFr: 'Pouvez-vous signer ici, s\'il vous plaît ?', level: 1, note: 'Le g ne se prononce pas : « saïn ».' },
    { en: 'agree', fr: 'être d\'accord', pos: 'v', cat: 'Les verbes du travail', ex: 'I agree with you.', exFr: 'Je suis d\'accord avec toi.', level: 1, note: 'Un seul verbe, sans be : I agree (jamais « I am agree »).' },
    // L'entretien d'embauche
    { en: 'job interview', fr: 'l\'entretien d\'embauche', pos: 'n', cat: 'L\'entretien d\'embauche', sec: 'en17-s-entretien', alt: ['interview'], ex: 'I have a job interview tomorrow.', exFr: 'J\'ai un entretien d\'embauche demain.', level: 1 },
    { en: 'CV', fr: 'le CV', pos: 'n', cat: 'L\'entretien d\'embauche', sec: 'en17-s-entretien', alt: ['resume'], ex: 'Please send us your CV.', exFr: 'Envoyez-nous votre CV, s\'il vous plaît.', level: 1, note: 'Se prononce « si-vi ». En américain : a résumé.' },
    { en: 'apply', fr: 'postuler, poser sa candidature', pos: 'v', cat: 'L\'entretien d\'embauche', sec: 'en17-s-entretien', ex: 'I\'d like to apply for this job.', exFr: 'Je voudrais postuler pour ce poste.', level: 2, note: 'Postuler pour un poste = apply **for** a job.' },
    { en: 'skills', fr: 'les compétences', pos: 'n', cat: 'L\'entretien d\'embauche', sec: 'en17-s-entretien', ex: 'What are your skills?', exFr: 'Quelles sont vos compétences ?', level: 2, note: 'Au singulier : a skill.' },
    { en: 'training', fr: 'la formation', pos: 'n', cat: 'L\'entretien d\'embauche', sec: 'en17-s-entretien', ex: 'New employees get two weeks of training.', exFr: 'Les nouveaux salariés ont deux semaines de formation.', level: 2, note: 'Faux ami : on ne dit pas « a formation ». training ne prend ni a ni -s.' },
    { en: 'career', fr: 'la carrière', pos: 'n', cat: 'L\'entretien d\'embauche', sec: 'en17-s-entretien', ex: 'He had a long career in the police.', exFr: 'Il a fait une longue carrière dans la police.', level: 2, note: 'On appuie sur la fin : « keu-RIR ».' },
    // Depuis combien de temps ?
    { en: 'since', fr: 'depuis (+ point de départ)', pos: 'prep', cat: 'Depuis combien de temps ?', sec: 'en17-s-forsince', ex: 'I\'ve lived here since 2010.', exFr: 'J\'habite ici depuis 2010.', level: 1, note: 'since + une date, un jour, un mois : since 2010, since Monday, since January.' },
    { en: 'for', fr: 'depuis, pendant (+ durée)', pos: 'prep', cat: 'Depuis combien de temps ?', sec: 'en17-s-forsince', ex: 'I\'ve lived here for ten years.', exFr: 'J\'habite ici depuis dix ans.', level: 1, note: 'for + une durée : for ten years, for six months. Avec le prétérit, for = pendant.' },
    { en: 'how long', fr: 'combien de temps, depuis combien de temps', pos: 'x', cat: 'Depuis combien de temps ?', sec: 'en17-s-forsince', ex: 'How long have you worked here?', exFr: 'Depuis combien de temps travaillez-vous ici ?', level: 1 },
    { en: 'still', fr: 'toujours, encore (ça continue)', pos: 'adv', cat: 'Depuis combien de temps ?', sec: 'en17-s-fini', ex: 'I still work for the same company.', exFr: 'Je travaille toujours pour la même entreprise.', level: 1, note: 'Devant le verbe (I still work), mais après be (I\'m still tired). Toujours (= tout le temps) = always.' },
    // La fin de carrière
    { en: 'until', fr: 'jusqu\'à (pour le temps)', pos: 'prep', cat: 'La fin de carrière', sec: 'en17-s-fini', alt: ['till'], ex: 'I worked there until 2018.', exFr: 'J\'ai travaillé là-bas jusqu\'en 2018.', level: 1 },
    { en: 'not any more', fr: 'ne… plus, plus maintenant', pos: 'x', cat: 'La fin de carrière', sec: 'en17-s-fini', alt: ['not anymore', 'no longer'], ex: 'I don\'t work there any more.', exFr: 'Je n\'y travaille plus.', level: 1, note: 'Réponse courte : Not any more. (Plus maintenant.) En américain : anymore, en un seul mot.' },
    { en: 'former', fr: 'ancien (d\'avant)', pos: 'adj', cat: 'La fin de carrière', sec: 'en17-s-fini', ex: 'I met my former boss in town.', exFr: 'J\'ai croisé mon ancien patron en ville.', level: 2, note: 'Ancien (= vieux) = old ; ancien (= d\'avant) = former.' },
    { en: 'retirement', fr: 'la retraite (la période)', pos: 'n', cat: 'La fin de carrière', sec: 'en17-s-parcours', ex: 'Enjoy your retirement!', exFr: 'Profite bien de ta retraite !', level: 1, note: 'to retire = partir à la retraite ; retired = retraité.' },
    { en: 'pension', fr: 'la pension de retraite', pos: 'n', cat: 'La fin de carrière', sec: 'en17-s-parcours', ex: 'My pension arrives at the end of the month.', exFr: 'Ma retraite arrive à la fin du mois.', level: 2, note: 'La retraite (l\'argent qu\'on reçoit) = a pension.' },
    { en: 'volunteer', fr: 'le ou la bénévole', pos: 'n', cat: 'La fin de carrière', sec: 'en17-s-parcours', ex: 'She is a volunteer at the hospital.', exFr: 'Elle est bénévole à l\'hôpital.', level: 2, note: 'Faire du bénévolat = do voluntary work.' }
  ],
  phrases: [
    { en: 'How long have you worked here?', fr: 'Depuis combien de temps travaillez-vous ici ?', alt: ['How long have you been working here?'], cat: 'Depuis combien de temps ?', sec: 'en17-s-forsince' },
    { en: 'I\'ve worked here for ten years.', fr: 'Je travaille ici depuis dix ans.', alt: ['I\'ve been working here for ten years.'], cat: 'Depuis combien de temps ?', sec: 'en17-s-forsince', note: 'depuis + durée → present perfect + for.' },
    { en: 'She has lived here since 2010.', fr: 'Elle habite ici depuis 2010.', alt: ['She has been living here since 2010.'], cat: 'Depuis combien de temps ?', sec: 'en17-s-forsince', note: 'depuis + point de départ → present perfect + since.' },
    { en: 'I\'ve been retired for five years.', fr: 'Je suis à la retraite depuis cinq ans.', cat: 'Depuis combien de temps ?', sec: 'en17-s-forsince' },
    { en: 'How long have you been retired?', fr: 'Depuis combien de temps êtes-vous à la retraite ?', cat: 'Depuis combien de temps ?', sec: 'en17-s-forsince' },
    { en: 'I worked in a bank for thirty years.', fr: 'J\'ai travaillé dans une banque pendant trente ans.', cat: 'Raconter son parcours', sec: 'en17-s-fini', note: 'Prétérit = c\'est fini ; for = pendant.' },
    { en: 'I don\'t work there any more.', fr: 'Je n\'y travaille plus.', alt: ['I don\'t work there anymore.', 'I no longer work there.'], cat: 'Raconter son parcours', sec: 'en17-s-fini' },
    { en: 'I worked there until 2018.', fr: 'J\'ai travaillé là-bas jusqu\'en 2018.', alt: ['I worked there till 2018.'], cat: 'Raconter son parcours', sec: 'en17-s-fini' },
    { en: 'I left school at sixteen.', fr: 'J\'ai quitté l\'école à seize ans.', alt: ['I left school when I was sixteen.'], cat: 'Raconter son parcours', sec: 'en17-s-parcours' },
    { en: 'I work as a driver.', fr: 'Je travaille comme chauffeur.', cat: 'Les métiers', sec: 'en17-s-metiers', note: 'comme (un métier) = as.' },
    { en: 'What do you do for a living?', fr: 'Qu\'est-ce que vous faites pour gagner votre vie ?', cat: 'Les métiers', sec: 'en17-s-metiers' },
    { en: 'I\'m self-employed.', fr: 'Je suis à mon compte.', cat: 'Les métiers', sec: 'en17-s-metiers' },
    { en: 'I\'m looking for a job.', fr: 'Je cherche du travail.', alt: ['I\'m looking for work.'], cat: 'Les métiers', sec: 'en17-s-metiers' },
    { en: 'I\'m in a meeting.', fr: 'Je suis en réunion.', cat: 'Au bureau', sec: 'en17-s-bureau' },
    { en: 'I agree with you.', fr: 'Je suis d\'accord avec vous.', cat: 'Au bureau', sec: 'en17-s-bureau', note: 'agree = être d\'accord (sans be).' },
    { en: 'Thank you for your email.', fr: 'Merci pour votre e-mail.', alt: ['Thanks for your email.'], cat: 'Au bureau', sec: 'en17-s-bureau' },
    { en: 'Please find attached my CV.', fr: 'Veuillez trouver ci-joint mon CV.', alt: ['Please find my CV attached.', 'I attach my CV.'], cat: 'Au bureau', sec: 'en17-s-bureau' },
    { en: 'I look forward to hearing from you.', fr: 'Dans l\'attente de votre réponse.', cat: 'Au bureau', sec: 'en17-s-bureau', note: 'Formule toute faite, avec -ing.' },
    { en: 'Kind regards', fr: 'Cordialement', alt: ['Best regards', 'Regards', 'Best wishes'], cat: 'Au bureau', sec: 'en17-s-bureau', note: 'Pour finir un e-mail.' },
    { en: 'Tell me about yourself.', fr: 'Parlez-moi de vous.', cat: 'L\'entretien d\'embauche', sec: 'en17-s-entretien' },
    { en: 'Why do you want this job?', fr: 'Pourquoi voulez-vous ce poste ?', cat: 'L\'entretien d\'embauche', sec: 'en17-s-entretien' },
    { en: 'I have ten years\' experience.', fr: 'J\'ai dix ans d\'expérience.', alt: ['I have ten years of experience.', 'I\'ve got ten years\' experience.'], cat: 'L\'entretien d\'embauche', sec: 'en17-s-entretien' },
    { en: 'When can you start?', fr: 'Quand pouvez-vous commencer ?', cat: 'L\'entretien d\'embauche', sec: 'en17-s-entretien' },
    { en: 'I\'d like to apply for the job.', fr: 'Je voudrais postuler pour ce poste.', alt: ['I would like to apply for the job.'], cat: 'L\'entretien d\'embauche', sec: 'en17-s-entretien' },
    { en: 'Is it full-time or part-time?', fr: 'C\'est à plein temps ou à temps partiel ?', cat: 'L\'entretien d\'embauche', sec: 'en17-s-entretien' }
  ],
  quiz: [
    { id: 'en17-q-01', q: 'Complète : I\'ve worked here ___ ten years.', choices: ['since', 'for', 'during', 'from'], answer: 1, topic: 'for ou since', sec: 'en17-s-forsince',
      why: { 0: 'since va avec un point de départ (since 2015), pas avec une durée.', 2: 'during = pendant un événement (during the meeting), pas avant une durée chiffrée.', 3: 'from = à partir de (from Monday to Friday).' },
      explain: '**ten years** est une durée → **for**. → I\'ve worked here **for** ten years. (Je travaille ici depuis dix ans.)', say: 'I\'ve worked here for ten years.', level: 1 },
    { id: 'en17-q-02', q: 'Complète : She has lived in Nantes ___ 2010.', choices: ['for', 'since', 'ago', 'in'], answer: 1, topic: 'for ou since', sec: 'en17-s-forsince',
      why: { 0: 'for va avec une durée (for ten years). 2010 est un point de départ.', 2: 'ago (il y a) se place après une durée et va avec le prétérit : ten years ago.', 3: 'in 2010 (en 2010) va avec le prétérit : She moved here in 2010.' },
      explain: '2010 est un **point de départ** (depuis quand ?) → **since**. → She has lived in Nantes **since** 2010. (Elle habite à Nantes depuis 2010.)', say: 'She has lived in Nantes since 2010.', level: 1 },
    { id: 'en17-q-03', q: 'Complète : I haven\'t seen him ___ last summer.', choices: ['for', 'since', 'ago'], answer: 1, topic: 'for ou since', sec: 'en17-s-forsince',
      why: { 0: 'last summer n\'est pas une durée, c\'est un point de départ : il faut since.', 2: 'ago se place après une durée (two years ago) et va avec le prétérit.' },
      explain: '**last summer** = un point de départ → **since**. → I haven\'t seen him **since** last summer. (Je ne l\'ai pas vu depuis l\'été dernier.)', say: 'I haven\'t seen him since last summer.', level: 2 },
    { id: 'en17-q-04', q: 'Traduis « Je travaille ici depuis 2015 » :', choices: ['I work here since 2015.', 'I\'ve worked here since 2015.', 'I\'ve worked here for 2015.', 'I worked here since 2015.'], answer: 1, topic: 'Le present perfect avec depuis', sec: 'en17-s-forsince',
      why: { 0: 'Piège : « depuis » + présent en français → present perfect en anglais (I\'ve worked).', 2: '2015 est un point de départ : il faut since.', 3: 'Le prétérit dirait que c\'est fini, et since demande le present perfect.' },
      explain: 'C\'est encore vrai → **present perfect** ; 2015 = point de départ → **since**. → I**\'ve worked** here **since** 2015.', say: 'I\'ve worked here since 2015.', level: 1 },
    { id: 'en17-q-05', q: 'Comment demander « Depuis combien de temps habitez-vous ici ? »', choices: ['How long do you live here?', 'How long have you lived here?', 'Since when you live here?', 'How many time have you lived here?'], answer: 1, topic: 'How long…?', sec: 'en17-s-forsince',
      why: { 0: 'Le présent ne va pas avec « depuis » : il faut have you lived.', 2: 'Il manque do, et le présent ne convient pas : How long have you lived…?', 3: '« Combien de temps » = How long (how many va avec des choses qu\'on compte).' },
      explain: '« Depuis combien de temps » = **How long** + present perfect. → **How long have you lived** here?', say: 'How long have you lived here?', level: 1 },
    { id: 'en17-q-06', q: 'Complète : How long ___ she been a nurse?', choices: ['has', 'have', 'is', 'does'], answer: 0, topic: 'How long…?', sec: 'en17-s-forsince',
      why: { 1: 'have va avec I, you, we, they. Avec she : has.', 2: 'is est le présent : il faut le present perfect (has been).', 3: 'does sert au présent simple, pas au present perfect.' },
      explain: 'Present perfect avec she → **has** + participe passé. → How long **has** she been a nurse? (Depuis combien de temps est-elle infirmière ?)', say: 'How long has she been a nurse?', level: 1 },
    { id: 'en17-q-07', q: 'Complète : I\'ve ___ retired since 2019.', choices: ['be', 'was', 'been', 'being'], answer: 2, topic: 'Le present perfect avec depuis', sec: 'en17-s-forsince',
      why: { 0: 'be est la base : après have, il faut le participe passé.', 1: 'was est le prétérit (2e colonne) : après have, il faut la 3e colonne.', 3: 'being est la forme en -ing.' },
      explain: 'have + **participe passé** de be : **been** (be, was, been). → I\'ve **been** retired since 2019. (Je suis à la retraite depuis 2019.)', say: 'I\'ve been retired since 2019.', level: 1 },
    { id: 'en17-q-08', q: 'Bernard ne travaille plus : il est à la retraite. Il dit :', choices: ['I\'ve worked in a bank for thirty years.', 'I worked in a bank for thirty years.', 'I work in a bank since thirty years.'], answer: 1, topic: 'Fini ou encore vrai', sec: 'en17-s-fini',
      why: { 0: 'Le present perfect voudrait dire qu\'il y travaille encore (depuis trente ans).', 2: 'Deux fautes : le présent, et since devant une durée.' },
      explain: 'C\'est **fini** → **prétérit**, et for = pendant. → I **worked** in a bank for thirty years. (J\'ai travaillé dans une banque pendant trente ans.)', say: 'I worked in a bank for thirty years.', level: 2 },
    { id: 'en17-q-09', q: 'Que veut dire « I\'ve lived in Lyon for ten years » ?', choices: ['J\'ai habité à Lyon pendant dix ans (je n\'y habite plus).', 'J\'habite à Lyon depuis dix ans.', 'J\'ai habité à Lyon il y a dix ans.'], answer: 1, topic: 'Fini ou encore vrai', sec: 'en17-s-fini',
      why: { 0: 'C\'est le sens du prétérit : I lived in Lyon for ten years.', 2: '« il y a dix ans » se dirait ten years ago, avec le prétérit.' },
      explain: 'Present perfect + for = **depuis** : c\'est encore vrai. → I\'ve lived in Lyon for ten years. (J\'habite à Lyon depuis dix ans.)', say: 'I\'ve lived in Lyon for ten years.', level: 2 },
    { id: 'en17-q-10', q: 'Complète : Do you still work there? — No, not ___.', choices: ['still', 'any more', 'yet', 'already'], answer: 1, topic: 'Fini ou encore vrai', sec: 'en17-s-fini',
      why: { 0: 'still = toujours (ça continue) : c\'est le contraire de la réponse.', 2: 'not yet = pas encore (ça n\'a pas encore commencé).', 3: 'already = déjà.' },
      explain: 'ne… plus = **not any more**. → Do you still work there? — No, not **any more**. (Tu y travailles toujours ? — Non, plus maintenant.)', say: 'Do you still work there? No, not any more.', level: 1 },
    { id: 'en17-q-11', q: 'Complète : I worked there ___ 2018, then I retired.', choices: ['since', 'until', 'for', 'ago'], answer: 1, topic: 'Fini ou encore vrai', sec: 'en17-s-fini',
      why: { 0: 'since dit quand une chose a commencé. Ici, 2018 est la fin : until.', 2: 'for va avec une durée (for ten years).', 3: 'ago se place après une durée (two years ago).' },
      explain: '« jusqu\'à » (la fin d\'une période) = **until**. → I worked there **until** 2018, then I retired. (J\'ai travaillé là-bas jusqu\'en 2018, puis j\'ai pris ma retraite.)', say: 'I worked there until 2018, then I retired.', level: 2 },
    { id: 'en17-q-12', q: 'Complète : I work ___ a mechanic in a garage.', choices: ['like', 'as', 'for', 'how'], answer: 1, topic: 'Les métiers', sec: 'en17-s-metiers',
      why: { 0: 'like = comme, à la manière de. Pour un métier : as.', 2: 'for sert pour l\'employeur : I work for a company.', 3: 'how = comment.' },
      explain: 'Travailler **comme** (un métier) = work **as**. → I work **as** a mechanic in a garage. (Je travaille comme mécanicien dans un garage.)', say: 'I work as a mechanic in a garage.', level: 1 },
    { id: 'en17-q-13', q: 'Complète : My son is ___ electrician.', choices: ['a', 'an', '(rien)'], answer: 1, topic: 'Les métiers', sec: 'en17-s-metiers',
      why: { 0: 'electrician commence par un son voyelle : an.', 2: 'En anglais, le métier prend toujours a / an.' },
      explain: 'Métier → **a / an** ; son voyelle → **an**. → My son is **an** electrician. (Mon fils est électricien.)', say: 'My son is an electrician.', level: 1 },
    { id: 'en17-q-14', q: '« Elle est au chômage. » En anglais :', choices: ['She is self-employed.', 'She is unemployed.', 'She is retired.', 'She is part-time.'], answer: 1, topic: 'Les métiers', sec: 'en17-s-metiers',
      why: { 0: 'self-employed = à son compte (elle travaille).', 2: 'retired = à la retraite.', 3: 'part-time = à temps partiel.' },
      explain: 'Au chômage = **unemployed**. → She is **unemployed**. (Elle est au chômage.)', say: 'She is unemployed.', level: 1 },
    { id: 'en17-q-15', q: 'Faux ami : « une formation » (pour apprendre un métier) se dit :', choices: ['a formation', 'training', 'a forming'], answer: 1, topic: 'Le vocabulaire du travail', sec: 'en17-s-entretien',
      why: { 0: 'a formation existe, mais veut dire « une disposition, un groupe » (une formation d\'avions), pas une formation pour apprendre un métier.', 2: 'a forming n\'existe pas.' },
      explain: 'La formation professionnelle = **training** (sans a, sans -s). → The company gives **training** to new employees. (L\'entreprise forme les nouveaux salariés.)', say: 'The company gives training to new employees.', level: 2 },
    { id: 'en17-q-16', q: '« Je suis d\'accord. » En anglais :', choices: ['I am agree.', 'I agree.', 'I\'m according.'], answer: 1, topic: 'Au bureau', sec: 'en17-s-bureau',
      why: { 0: 'agree est un verbe : pas de be devant.', 2: 'according (to) veut dire « selon » (according to the boss = selon le patron).' },
      explain: 'Être d\'accord = **agree**, un seul verbe. → **I agree.** (Je suis d\'accord.) Négation : I don\'t agree.', say: 'I agree.', level: 1 },
    { id: 'en17-q-17', q: 'Quelle formule termine un e-mail professionnel ?', choices: ['Kind regards,', 'Dear Sir,', 'Please find attached', 'Thank you for your email.'], answer: 0, topic: 'Au bureau', sec: 'en17-s-bureau',
      why: { 1: 'Dear… commence l\'e-mail.', 2: 'Please find attached annonce une pièce jointe, au milieu de l\'e-mail.', 3: 'Cette phrase se met au début, pour répondre à un e-mail.' },
      explain: '**Kind regards** (ou Best regards) = Cordialement, juste avant ton nom.', say: 'Kind regards.', level: 1 },
    { id: 'en17-q-18', q: 'Complète : I look forward to ___ from you.', choices: ['hear', 'hearing', 'heard', 'to hear'], answer: 1, topic: 'Au bureau', sec: 'en17-s-bureau',
      why: { 0: 'Dans cette formule, to est une préposition : il faut la forme en -ing.', 2: 'heard est le prétérit.', 3: 'to est déjà là : on ne le répète pas.' },
      explain: 'Formule toute faite : I look forward to **hearing** from you. (Dans l\'attente de votre réponse.)', say: 'I look forward to hearing from you.', level: 2 },
    { id: 'en17-q-19', q: 'Complète : I\'d like to apply ___ this job.', choices: ['to', 'for', 'at', 'on'], answer: 1, topic: 'L\'entretien d\'embauche', sec: 'en17-s-entretien',
      why: { 0: 'On dit apply to + une entreprise, mais apply for + un poste.', 2: 'apply at ne se dit pas pour un poste.', 3: 'apply on ne se dit pas pour un poste.' },
      explain: 'Postuler pour un poste = apply **for** a job. → I\'d like to apply **for** this job. (Je voudrais postuler pour ce poste.)', say: 'I\'d like to apply for this job.', level: 1 },
    { id: 'en17-q-20', q: 'Complète : I have ten years\' ___.', choices: ['experience', 'experiences', 'experiment'], answer: 0, topic: 'L\'entretien d\'embauche', sec: 'en17-s-entretien',
      why: { 1: 'L\'expérience professionnelle ne prend pas de -s.', 2: 'an experiment = une expérience scientifique.' },
      explain: '**experience** (l\'expérience professionnelle) ne prend pas de -s. → I have ten years\' **experience**. (J\'ai dix ans d\'expérience.)', say: 'I have ten years\' experience.', level: 2 },
    { id: 'en17-q-21', q: 'Complète : I met my ___ boss in the street. (mon ancien patron, celui d\'avant)', choices: ['ancient', 'former', 'before'], answer: 1, topic: 'Le vocabulaire du travail', sec: 'en17-s-fini',
      why: { 0: 'ancient = antique, très très vieux (ancient Rome).', 2: 'before (avant) ne se place pas devant un nom.' },
      explain: 'Ancien (= d\'avant) = **former**. → I met my **former** boss in the street. (J\'ai croisé mon ancien patron dans la rue.)', say: 'I met my former boss in the street.', level: 2 },
    { id: 'en17-q-22', q: 'Écoute. Que dit la personne ?', listen: true, say: 'I\'ve been a nurse for twelve years.', choices: ['Elle a été infirmière pendant douze ans, mais c\'est fini.', 'Elle est infirmière depuis douze ans.', 'Elle est infirmière depuis 2012.', 'Elle sera infirmière dans douze ans.'], answer: 1, topic: 'Compréhension orale', sec: 'en17-s-forsince',
      why: { 0: 'I\'ve been (present perfect) = c\'est encore vrai. Pour une chose finie : I was a nurse for twelve years.', 2: 'for twelve years = une durée (depuis douze ans). Depuis 2012 se dirait since 2012.', 3: 'Il n\'y a pas de futur (will) dans la phrase.' },
      explain: '**I\'ve been a nurse for twelve years** : je suis infirmière **depuis** douze ans (et je le suis encore).', level: 2 },
    { id: 'en17-q-23', q: 'Écoute. Où est la personne dont on parle ?', listen: true, say: 'She\'s in a meeting until three o\'clock.', choices: ['En réunion jusqu\'à 15 h', 'En réunion depuis 15 h', 'Au téléphone jusqu\'à 15 h', 'En réunion à partir de 13 h'], answer: 0, topic: 'Compréhension orale', sec: 'en17-s-bureau',
      why: { 1: 'until = jusqu\'à. « Depuis 15 h » se dirait since three o\'clock.', 2: 'in a meeting = en réunion, pas au téléphone.', 3: 'until = jusqu\'à, et three = 3 (15 h).' },
      explain: '**She\'s in a meeting until three o\'clock** : elle est en réunion jusqu\'à quinze heures.', level: 1 },
    { id: 'en17-q-24', q: 'Écoute. Que dit la personne ?', listen: true, say: 'I worked in a factory until 2015. Now I\'m retired.', choices: ['Elle travaille dans une usine depuis 2015.', 'Elle a travaillé dans une usine jusqu\'en 2015 ; maintenant, elle est à la retraite.', 'Elle a travaillé dans un bureau jusqu\'en 2015.'], answer: 1, topic: 'Compréhension orale', sec: 'en17-s-fini',
      why: { 0: 'worked (prétérit) + until = c\'est fini, jusqu\'en 2015. Depuis se dirait since, avec le present perfect.', 2: 'a factory = une usine (un bureau = an office).' },
      explain: '**I worked in a factory until 2015. Now I\'m retired.** : j\'ai travaillé dans une usine jusqu\'en 2015. Maintenant, je suis à la retraite.', level: 2 },
    { id: 'en17-q-25', q: 'Écoute. Que demande la personne ?', listen: true, say: 'How long have you lived in this town?', choices: ['Depuis combien de temps habitez-vous dans cette ville ?', 'Combien de temps allez-vous rester dans cette ville ?', 'Est-ce que vous aimez cette ville ?', 'Pourquoi habitez-vous dans cette ville ?'], answer: 0, topic: 'Compréhension orale', sec: 'en17-s-forsince',
      why: { 1: 'Il n\'y a pas de futur : have you lived = present perfect (depuis…).', 2: '« Vous aimez » se dirait Do you like…?', 3: '« Pourquoi » se dirait Why…?' },
      explain: '**How long have you lived** in this town? : depuis combien de temps habitez-vous dans cette ville ?', level: 1 }
  ],
  exercises: [
    { id: 'en17-x-01', prompt: 'Complète avec for ou since : I\'ve lived here ___ 2005.', answers: ['since'], topic: 'for ou since', sec: 'en17-s-forsince', strict: true,
      hint: 'Depuis quand ? ou depuis combien de temps ?',
      explain: '2005 est un **point de départ** → **since**. → I\'ve lived here **since** 2005. (J\'habite ici depuis 2005.)',
      rule: 'since + point de départ (2005, Monday, January) · for + durée (ten years)',
      mistakes: [{ text: 'for', msg: '2005 n\'est pas une durée, c\'est un **point de départ** (depuis quand ?) → **since** 2005.' }, { text: 'from', msg: 'from = à partir de (from Monday to Friday). Avec le present perfect, « depuis 2005 » = **since** 2005.' }],
      say: 'I\'ve lived here since 2005.', level: 1 },
    { id: 'en17-x-02', prompt: 'Complète avec for ou since : She has worked here ___ six months.', answers: ['for'], topic: 'for ou since', sec: 'en17-s-forsince', strict: true,
      hint: 'six mois : une durée ou un point de départ ?',
      explain: 'six months est une **durée** → **for**. → She has worked here **for** six months. (Elle travaille ici depuis six mois.)',
      rule: 'for + durée · since + point de départ',
      mistakes: [{ text: 'since', msg: 'six months est une **durée** (combien de temps ?) → **for** six months. since va avec un point de départ (since May).' }, { text: 'during', msg: 'during = pendant un événement (during the meeting). Avec une durée chiffrée : **for** six months.' }],
      say: 'She has worked here for six months.', level: 1 },
    { id: 'en17-x-03', prompt: 'Complète avec for ou since : We\'ve known them ___ a long time.', answers: ['for'], topic: 'for ou since', sec: 'en17-s-forsince', strict: true,
      hint: 'longtemps = une durée.',
      explain: 'a long time est une **durée** → **for**. → We\'ve known them **for** a long time. (Nous les connaissons depuis longtemps.)',
      rule: 'depuis longtemps = for a long time',
      mistakes: [{ text: 'since', msg: 'a long time est une **durée** → **for** a long time.' }, { text: 'from', msg: 'from = à partir de. « Depuis longtemps » = **for** a long time.' }],
      say: 'We\'ve known them for a long time.', level: 1 },
    { id: 'en17-x-04', prompt: 'Complète avec for ou since : He has been ill ___ Monday.', answers: ['since'], topic: 'for ou since', sec: 'en17-s-forsince', strict: true,
      hint: 'Monday : depuis quand ?',
      explain: 'Monday est un **point de départ** → **since**. → He has been ill **since** Monday. (Il est malade depuis lundi.)',
      rule: 'since Monday, since January, since 2010',
      mistakes: [{ text: 'for', msg: 'Monday est un **point de départ** (depuis quand ?) → **since** Monday.' }, { text: 'from', msg: 'from = à partir de. Avec le present perfect : **since** Monday.' }],
      say: 'He has been ill since Monday.', level: 1 },
    { id: 'en17-x-05', prompt: 'Complète au present perfect : I ___ (work) here for ten years.', answers: ['have worked', '\'ve worked'], topic: 'Le present perfect avec depuis', sec: 'en17-s-forsince',
      hint: 'C\'est encore vrai aujourd\'hui : have + participe passé.',
      explain: '« depuis » + présent en français → **present perfect**. → I **have worked** here for ten years. (Je travaille ici depuis dix ans.)',
      rule: 'Ça dure encore : have / has + participe passé + for / since',
      mistakes: [{ text: 'work', msg: '« depuis » + présent en français → **present perfect** en anglais : I **have worked** here for ten years.' }, { text: 'am working', msg: 'Le présent continu ne va pas avec « depuis dix ans » : il faut le **present perfect** → I **have worked**.' }, { text: 'worked', msg: 'worked seul (prétérit) dirait que c\'est fini. Ici, c\'est encore vrai → I **have worked**.' }, { text: 'have work', msg: 'Après have, il faut le **participe passé** : have **worked** (pour un verbe régulier, c\'est la forme en -ed).' }],
      say: 'I have worked here for ten years.', level: 1 },
    { id: 'en17-x-06', prompt: 'Complète au present perfect : My wife ___ (be) a teacher since 1990.', answers: ['has been'], topic: 'Le present perfect avec depuis', sec: 'en17-s-forsince',
      hint: 'My wife = she ; participe passé de be = ?',
      explain: 'My wife = she → **has** + **been**. → My wife **has been** a teacher since 1990. (Ma femme est professeure depuis 1990.)',
      rule: 'he / she / it + has been · I / you / we / they + have been',
      mistakes: [{ text: 'is', msg: 'Avec since, il faut le **present perfect** : My wife **has been** a teacher since 1990.' }, { text: 'have been', msg: 'My wife = she → **has** been (have va avec I, you, we, they).' }, { text: 'was', msg: 'was (prétérit) dirait que c\'est fini. Avec since, c\'est encore vrai → **has been**.' }],
      say: 'My wife has been a teacher since 1990.', level: 1 },
    { id: 'en17-x-07', prompt: 'Traduis : Depuis combien de temps travaillez-vous ici ?', answers: ['How long have you worked here', 'How long have you been working here'], topic: 'How long…?', sec: 'en17-s-forsince',
      hint: 'How long + have + you + participe passé…',
      explain: '**How long have you worked** here? (Depuis combien de temps travaillez-vous ici ?)',
      rule: 'Depuis combien de temps… ? = How long have / has + sujet + participe passé… ?',
      mistakes: [{ text: 'How long do you work here', msg: '« Depuis combien de temps » demande le **present perfect** : How long **have you worked** here?' }, { text: 'Since when do you work here', msg: 'Pour demander une durée, on dit **How long** + present perfect : How long **have you worked** here?' }, { text: 'How much time have you worked here', msg: '« Combien de temps » (une durée) = **How long** : How long have you worked here?' }, { text: 'How long have you work here', msg: 'Après have, il faut le **participe passé** : have you **worked** (verbe régulier → -ed).' }],
      say: 'How long have you worked here?', level: 2 },
    { id: 'en17-x-08', prompt: 'Traduis : Depuis combien de temps est-il à la retraite ?', answers: ['How long has he been retired'], topic: 'How long…?', sec: 'en17-s-forsince',
      hint: 'être à la retraite = be retired ; il = he → has.',
      explain: '**How long has he been retired?** (Depuis combien de temps est-il à la retraite ?) been = participe passé de be.',
      rule: 'How long + has + he / she + been… ?',
      mistakes: [{ text: 'How long is he retired', msg: 'Avec « depuis combien de temps », il faut le **present perfect** : How long **has he been** retired?' }, { text: 'How long has he retired', msg: 'retired est ici un adjectif (retraité) : il faut **be** → How long has he **been** retired?' }, { text: 'How long have he been retired', msg: 'he → **has** (have va avec I, you, we, they).' }],
      say: 'How long has he been retired?', level: 2 },
    { id: 'en17-x-09', prompt: 'Traduis : Je suis à la retraite depuis 2019.', answers: ['I\'ve been retired since 2019', 'I have been retired since 2019'], topic: 'Le present perfect avec depuis', sec: 'en17-s-forsince',
      hint: 'Present perfect de be retired + since ou for ?',
      explain: '**I\'ve been retired since 2019.** C\'est encore vrai → present perfect ; 2019 = point de départ → since.',
      rule: 'Je suis… depuis… = I\'ve been… for / since…',
      mistakes: [{ text: 'I\'m retired since 2019', msg: '« depuis » + présent en français → **present perfect** : I**\'ve been** retired since 2019.' }, { text: 'I\'ve been retired for 2019', msg: '2019 est un **point de départ** → **since** 2019.' }, { text: 'I retired since 2019', msg: 'Avec since, il faut le present perfect : I**\'ve been** retired since 2019. (Sans since, on peut dire : I retired in 2019.)' }],
      say: 'I\'ve been retired since 2019.', level: 2 },
    { id: 'en17-x-10', prompt: 'Traduis : J\'habite ici depuis dix ans.', answers: ['I\'ve lived here for ten years', 'I have lived here for ten years', 'I\'ve been living here for ten years'], topic: 'Le present perfect avec depuis', sec: 'en17-s-forsince',
      hint: 'Deux pièges : le temps du verbe et le petit mot.',
      explain: '**I\'ve lived here for ten years.** C\'est encore vrai → present perfect ; dix ans = durée → for.',
      rule: 'depuis + durée = present perfect + for',
      mistakes: [{ text: 'I live here since ten years', msg: 'Deux pièges : le verbe → **I\'ve lived** (present perfect), et la durée → **for** ten years.' }, { text: 'I live here for ten years', msg: 'Le présent ne va pas avec « depuis » : **I\'ve lived** here for ten years.' }, { text: 'I\'ve lived here since ten years', msg: 'ten years est une **durée** → **for** ten years. (since + point de départ : since 2015.)' }, { text: 'I lived here for ten years', msg: 'I lived (prétérit) = j\'ai habité ici pendant dix ans, mais c\'est **fini**. Pour « j\'habite ici depuis », il faut le present perfect : **I\'ve lived** here for ten years.' }],
      say: 'I\'ve lived here for ten years.', level: 2 },
    { id: 'en17-x-11', prompt: 'Bernard est à la retraite. Complète (c\'est fini) : I ___ (work) in a bank for thirty years.', answers: ['worked'], topic: 'Fini ou encore vrai', sec: 'en17-s-fini', strict: true,
      hint: 'Il ne travaille plus : quel temps ?',
      explain: 'C\'est **fini** → **prétérit**. → I **worked** in a bank for thirty years. (J\'ai travaillé dans une banque pendant trente ans.)',
      rule: 'Fini → prétérit (for = pendant) · encore vrai → present perfect (for = depuis)',
      mistakes: [{ text: 'have worked', msg: 'I have worked voudrait dire qu\'il y travaille **encore**. Bernard est à la retraite : c\'est fini → prétérit **worked**.' }, { text: 'work', msg: 'C\'est fini : il faut le **prétérit** → I **worked**.' }],
      say: 'I worked in a bank for thirty years.', level: 2 },
    { id: 'en17-x-12', prompt: 'Traduis : Il a été facteur pendant quarante ans.', answers: ['He was a postman for forty years', 'He worked as a postman for forty years'], topic: 'Fini ou encore vrai', sec: 'en17-s-fini',
      hint: 'facteur = postman ; c\'est fini → prétérit.',
      explain: '**He was a postman for forty years.** C\'est fini → prétérit ; for = pendant.',
      rule: 'pendant + durée (fini) = prétérit + for',
      mistakes: [{ text: 'He has been a postman for forty years', msg: 'Le present perfect voudrait dire qu\'il est **encore** facteur (depuis quarante ans). C\'est fini → **He was** a postman.' }, { text: 'He was postman for forty years', msg: 'Devant un métier, il faut **a** : He was **a** postman.' }, { text: 'He was a postman during forty years', msg: 'Devant une durée chiffrée, « pendant » = **for** (during + un événement : during the war).' }],
      say: 'He was a postman for forty years.', level: 2 },
    { id: 'en17-x-13', prompt: 'Complète : Do you still work there? — No, not ___. (plus maintenant)', answers: ['any more', 'anymore'], topic: 'Fini ou encore vrai', sec: 'en17-s-fini',
      hint: 'ne… plus = not any …',
      explain: 'ne… plus = **not any more**. → No, not **any more**. (Non, plus maintenant.)',
      rule: 'ne… plus = not … any more · toujours (ça continue) = still',
      mistakes: [{ text: 'still', msg: 'still = toujours (ça continue) : c\'est le contraire. Plus maintenant = not **any more**.' }, { text: 'yet', msg: 'not yet = pas encore. Plus maintenant = not **any more**.' }, { text: 'more', msg: 'Il manque **any** : not **any more**.' }],
      say: 'No, not any more.', level: 1 },
    { id: 'en17-x-14', prompt: 'Traduis : Je n\'y travaille plus.', answers: ['I don\'t work there any more', 'I don\'t work there anymore', 'I no longer work there'], topic: 'Fini ou encore vrai', sec: 'en17-s-fini',
      hint: 'don\'t … any more',
      explain: '**I don\'t work there any more.** (Je n\'y travaille plus.)',
      rule: 'ne… plus = don\'t / doesn\'t + verbe + any more',
      mistakes: [{ text: 'I don\'t work there more', msg: 'ne… plus = not … **any more** : I don\'t work there **any more**.' }, { text: 'I work there no more', msg: 'On met la négation avec **don\'t**, et **any more** à la fin : I don\'t work there any more.' }, { text: 'I don\'t work there still', msg: 'still = toujours (ça continue). Ne… plus = **any more**.' }],
      say: 'I don\'t work there any more.', level: 2 },
    { id: 'en17-x-15', prompt: 'Complète : I worked there ___ 2018. (jusqu\'en)', answers: ['until', 'till'], topic: 'Fini ou encore vrai', sec: 'en17-s-fini', strict: true,
      hint: 'jusqu\'à (pour le temps) = ?',
      explain: '« jusqu\'à » = **until**. → I worked there **until** 2018. (J\'ai travaillé là-bas jusqu\'en 2018.)',
      rule: 'jusqu\'à (temps) = until · depuis = since',
      mistakes: [{ text: 'since', msg: 'since = depuis (le début). Ici, 2018 est la fin → **until** 2018.' }, { text: 'to', msg: 'to s\'emploie dans from … to (from 2010 to 2018). Seul, « jusqu\'à » = **until**.' }],
      say: 'I worked there until 2018.', level: 1 },
    { id: 'en17-x-16', prompt: 'Traduis : Je travaille comme chauffeur.', answers: ['I work as a driver'], topic: 'Les métiers', sec: 'en17-s-metiers',
      hint: 'comme (un métier) = ?',
      explain: '**I work as a driver.** comme (un métier, un rôle) = **as**, suivi de a / an.',
      rule: 'travailler comme… = work as a / an…',
      mistakes: [{ text: 'I work like a driver', msg: '« comme » (un métier) = **as** : I work **as** a driver. (like = comme, à la manière de.)' }, { text: 'I work as driver', msg: 'Après as, il faut **a** devant le métier : as **a** driver.' }],
      say: 'I work as a driver.', level: 1 },
    { id: 'en17-x-17', prompt: 'Complète : She is ___ accountant.', answers: ['an'], topic: 'Les métiers', sec: 'en17-s-metiers', strict: true,
      hint: 'Le métier prend un article. accountant commence par…',
      explain: 'Métier → a / an ; accountant commence par un son voyelle → **an**. → She is **an** accountant. (Elle est comptable.)',
      rule: 'a + son consonne · an + son voyelle (an accountant, an electrician)',
      mistakes: [{ text: 'a', msg: 'accountant commence par un **son voyelle** → **an** accountant.' }, { text: 'the', msg: 'Pour dire le métier de quelqu\'un : **a / an** (the désigne une personne précise).' }],
      say: 'She is an accountant.', level: 1 },
    { id: 'en17-x-18', prompt: 'Complète : My son works ___ a big company. (pour)', answers: ['for'], topic: 'Les métiers', sec: 'en17-s-metiers', strict: true,
      hint: 'travailler pour une entreprise = work …',
      explain: 'Travailler **pour** une entreprise = work **for**. → My son works **for** a big company. (Mon fils travaille pour une grande entreprise.)',
      rule: 'work for a company · work in a factory · work as a driver',
      mistakes: [{ text: 'to', msg: 'to indique une direction. Travailler pour une entreprise = work **for**.' }, { text: 'with', msg: 'with = avec (des personnes : I work with nice colleagues). Pour l\'entreprise : work **for**.' }],
      say: 'My son works for a big company.', level: 1 },
    { id: 'en17-x-19', prompt: 'Traduis : Il est au chômage depuis six mois.', answers: ['He has been unemployed for six months', 'He\'s been unemployed for six months', 'He has been out of work for six months'], topic: 'Le present perfect avec depuis', sec: 'en17-s-forsince',
      hint: 'au chômage = unemployed ; depuis + durée…',
      explain: '**He has been unemployed for six months.** Present perfect (c\'est encore vrai) + for (une durée).',
      rule: 'Il est… depuis + durée = He has been… for…',
      mistakes: [{ text: 'He is unemployed since six months', msg: 'Deux pièges : le verbe → **has been** (present perfect), et la durée → **for** six months.' }, { text: 'He has been unemployed since six months', msg: 'six months est une **durée** → **for** six months.' }, { text: 'He is unemployed for six months', msg: 'Avec « depuis », il faut le present perfect : He **has been** unemployed for six months.' }],
      say: 'He has been unemployed for six months.', level: 2 },
    { id: 'en17-x-20', prompt: 'Traduis : Je suis en réunion.', answers: ['I\'m in a meeting', 'I am in a meeting'], topic: 'Au bureau', sec: 'en17-s-bureau',
      hint: 'une réunion = a meeting',
      explain: '**I\'m in a meeting.** (Je suis en réunion.)',
      rule: 'en réunion = in a meeting',
      mistakes: [{ text: 'I\'m in meeting', msg: 'Il faut l\'article : in **a** meeting.' }, { text: 'I\'m in a reunion', msg: 'Faux ami : une réunion de travail = **a meeting** (a reunion = des retrouvailles).' }],
      say: 'I\'m in a meeting.', level: 1 },
    { id: 'en17-x-21', prompt: 'Traduis : Je suis d\'accord avec vous.', answers: ['I agree with you'], topic: 'Au bureau', sec: 'en17-s-bureau',
      hint: 'être d\'accord = un seul verbe.',
      explain: '**I agree with you.** être d\'accord = agree (sans be).',
      rule: 'être d\'accord avec quelqu\'un = agree with somebody',
      mistakes: [{ text: 'I am agree with you', msg: 'Pas de **be** : « être d\'accord » = **agree**, un seul verbe → I agree with you.' }, { text: 'I agree you', msg: 'Il faut **with** : agree **with** you.' }],
      say: 'I agree with you.', level: 1 },
    { id: 'en17-x-22', prompt: 'Complète la fin de l\'e-mail : I look forward to ___ (hear) from you.', answers: ['hearing'], topic: 'Au bureau', sec: 'en17-s-bureau', strict: true,
      hint: 'Formule toute faite, avec -ing.',
      explain: 'Dans cette formule, to est une préposition : on met **-ing**. → I look forward to **hearing** from you. (Dans l\'attente de votre réponse.)',
      rule: 'I look forward to + verbe en -ing',
      mistakes: [{ text: 'hear', msg: 'Dans cette formule, **to** est une préposition : il faut **-ing** → look forward to **hearing**.' }, { text: 'heard', msg: 'heard est le prétérit. Ici : look forward to **hearing**.' }],
      say: 'I look forward to hearing from you.', level: 2 },
    { id: 'en17-x-23', prompt: 'Traduis : Merci pour votre e-mail.', answers: ['Thank you for your email', 'Thanks for your email', 'Thank you for your e-mail', 'Thanks for your e-mail'], topic: 'Au bureau', sec: 'en17-s-bureau',
      hint: 'merci pour = thank you …',
      explain: '**Thank you for your email.** merci pour = thank you **for**.',
      rule: 'merci pour… = thank you for…',
      mistakes: [{ text: 'Thank you of your email', msg: 'merci **pour** = thank you **for**.' }, { text: 'Thanks you for your email', msg: 'On dit **Thank you** ou **Thanks**, jamais « thanks you ».' }],
      say: 'Thank you for your email.', level: 1 },
    { id: 'en17-x-24', prompt: 'Complète : I\'d like to apply ___ this job.', answers: ['for'], topic: 'L\'entretien d\'embauche', sec: 'en17-s-entretien', strict: true,
      hint: 'postuler pour un poste = apply …',
      explain: 'Postuler pour un poste = apply **for**. → I\'d like to apply **for** this job. (Je voudrais postuler pour ce poste.)',
      rule: 'apply for a job',
      mistakes: [{ text: 'to', msg: 'Pour un poste : apply **for** a job.' }, { text: 'at', msg: 'On ne dit pas apply at. Pour un poste : apply **for**.' }],
      say: 'I\'d like to apply for this job.', level: 1 },
    { id: 'en17-x-25', prompt: 'Traduis : J\'ai dix ans d\'expérience.', answers: ['I have ten years\' experience', 'I have ten years of experience', 'I have ten years experience', 'I\'ve got ten years\' experience', 'I\'ve got ten years of experience'], topic: 'L\'entretien d\'embauche', sec: 'en17-s-entretien',
      hint: 'experience ne prend pas de -s.',
      explain: '**I have ten years\' experience.** (ou ten years **of** experience). experience reste au singulier.',
      rule: 'experience (professionnelle) : jamais de -s',
      mistakes: [{ re: 'experiences', msg: 'experience (l\'expérience professionnelle) ne prend **jamais de -s** : ten years\' **experience**.' }, { text: 'I have ten years', msg: 'Il manque le mot **experience** : I have ten years\' experience.' }],
      say: 'I have ten years\' experience.', level: 2 },
    { id: 'en17-x-26', prompt: 'Traduis : Quand pouvez-vous commencer ?', answers: ['When can you start', 'When can you begin', 'When could you start'], topic: 'L\'entretien d\'embauche', sec: 'en17-s-entretien',
      hint: 'can passe devant le sujet.',
      explain: '**When can you start?** (Quand pouvez-vous commencer ?)',
      rule: 'Question : mot interrogatif + can + sujet + verbe ?',
      mistakes: [{ text: 'When you can start', msg: 'Dans une question, **can** passe devant le sujet : When **can you** start?' }, { text: 'When can you to start', msg: 'Pas de **to** après can : When can you **start**?' }],
      say: 'When can you start?', level: 1 },
    { id: 'en17-x-27', prompt: 'Complète au prétérit : In 1995, I ___ (become) a manager.', answers: ['became'], topic: 'Raconter son parcours', sec: 'en17-s-parcours', strict: true,
      hint: 'Une date précise → prétérit. become est irrégulier.',
      explain: 'Date précise (in 1995) → **prétérit**. become, **became**, become. → In 1995, I **became** a manager. (En 1995, je suis devenu responsable.)',
      rule: 'Une date précise (in 1995, last year) → prétérit',
      mistakes: [{ text: 'become', msg: 'Avec une date précise, il faut le **prétérit** : become, **became**, become.' }, { text: 'have become', msg: 'Avec une date précise (in 1995), on utilise le **prétérit**, pas le present perfect : I **became**.' }],
      say: 'In 1995, I became a manager.', level: 2 },
    { id: 'en17-x-28', prompt: 'Remets dans l\'ordre : long / you / how / worked / have / here / ?', answers: ['How long have you worked here'], topic: 'How long…?', sec: 'en17-s-forsince',
      hint: 'How long + have + sujet + participe passé…',
      explain: '**How long have you worked here?** (Depuis combien de temps travaillez-vous ici ?)',
      rule: 'How long + have / has + sujet + participe passé… ?',
      mistakes: [{ text: 'How long you have worked here', msg: 'Dans la question, **have** passe devant le sujet : How long **have you** worked here?' }, { text: 'How have you long worked here', msg: '**How long** reste ensemble, au début de la question : **How long** have you worked here?' }],
      say: 'How long have you worked here?', level: 1 },
    { id: 'en17-x-29', prompt: 'Traduis : Elle dirige une équipe de dix personnes.', answers: ['She manages a team of ten people', 'She manages a team of ten', 'She runs a team of ten people', 'She leads a team of ten people'], topic: 'Le vocabulaire du travail', sec: 'en17-s-vocab',
      hint: 'diriger (une équipe) = manage ; she → -s.',
      explain: '**She manages a team of ten people.** manage = diriger, gérer ; avec she, le verbe prend un -s.',
      rule: 'diriger une équipe, un service = manage',
      mistakes: [{ text: 'She directs a team of ten people', msg: 'Pour une équipe, un service, un magasin : **manage** (diriger, gérer). direct s\'emploie surtout pour un film.' }, { text: 'She manage a team of ten people', msg: 'She → **manages** (-s à la 3e personne du présent simple).' }],
      say: 'She manages a team of ten people.', level: 2 }
  ]
});
