/* Anglais — chapitre 6 : La vie de tous les jours (verbes de la routine, présent simple, fréquence, travail) */
APP.registerChapter({
  id: 'en6', subject: 'anglais', num: 6,
  title: 'La vie de tous les jours', subtitle: 'le présent simple : I work, she works, Do you…? · toujours, souvent, jamais',
  vocabSec: 'en6-s-vocab',
  sections: [
    {
      id: 'en6-s-vocab', title: 'Les verbes de la journée',
      html: `
<p>Voici les verbes pour raconter une journée ordinaire. Ils sont donnés à la <b>base</b> : la forme du dictionnaire, sans « to ». Clique pour écouter.</p>
<h3>Le matin</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">wake up</span></td><td>se réveiller</td></tr>
<tr><td><span class="say">get up</span></td><td>se lever</td></tr>
<tr><td><span class="say">have a shower</span></td><td>prendre une douche</td></tr>
<tr><td><span class="say">get dressed</span></td><td>s'habiller</td></tr>
<tr><td><span class="say">have breakfast</span></td><td>prendre le petit-déjeuner</td></tr>
<tr><td><span class="say">go to work</span></td><td>aller au travail</td></tr>
<tr><td><span class="say">take the bus</span></td><td>prendre le bus</td></tr>
</table>
<h3>Dans la journée</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">work</span></td><td>travailler</td></tr>
<tr><td><span class="say">start</span></td><td>commencer</td></tr>
<tr><td><span class="say">finish</span></td><td>finir, terminer</td></tr>
<tr><td><span class="say">have lunch</span></td><td>déjeuner</td></tr>
<tr><td><span class="say">walk</span></td><td>marcher, se promener</td></tr>
<tr><td><span class="say">do the shopping</span></td><td>faire les courses</td></tr>
<tr><td><span class="say">cook</span></td><td>cuisiner, faire la cuisine</td></tr>
</table>
<h3>Le soir</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">come home</span></td><td>rentrer à la maison</td></tr>
<tr><td><span class="say">relax</span></td><td>se détendre</td></tr>
<tr><td><span class="say">watch TV</span></td><td>regarder la télé</td></tr>
<tr><td><span class="say">read</span></td><td>lire</td></tr>
<tr><td><span class="say">listen to the radio</span></td><td>écouter la radio</td></tr>
<tr><td><span class="say">go to bed</span></td><td>aller se coucher</td></tr>
</table>
<h3>D'autres verbes très utiles</h3>
<p><span class="say">live</span> (habiter, vivre) · <span class="say">like</span> (aimer) · <span class="say">love</span> (adorer) · <span class="say">go</span> (aller) · <span class="say">do</span> (faire) · <span class="say">play</span> (jouer) · <span class="say">study</span> (étudier) · <span class="say">wash</span> (laver)</p>
<h3>Les moments de la journée</h3>
<p><span class="say">in the morning</span> (le matin) · <span class="say">in the afternoon</span> (l'après-midi) · <span class="say">in the evening</span> (le soir) · <span class="say">at night</span> (la nuit)</p>
<div class="callout tip"><b>Astuce</b> Les verbes français en « se » (se lever, se réveiller, s'habiller) n'ont <b>pas</b> de « me / te / se » en anglais : <span class="say">I get up</span> = je me lève.</div>
<div class="callout warn"><b>Pièges</b> <span class="say">live</span> (« liv », i court) = habiter ; <span class="say">leave</span> (« liiv », i long) = partir. Et pour « prendre » une douche ou un repas, on dit <b>have</b> : <span class="say">have a shower</span>, <span class="say">have lunch</span>.</div>`
    },
    {
      id: 'en6-s-affirmatif', title: 'Le présent simple : I work, she works',
      html: `
<p>Le <b>présent simple</b> sert à parler de ce qu'on fait <b>d'habitude</b> (la routine, les habitudes) et de ce qui est <b>toujours vrai</b>.</p>
<ul>
<li><span class="say">I get up at seven.</span> — Je me lève à sept heures (tous les jours).</li>
<li><span class="say">We live in a small town.</span> — Nous habitons dans une petite ville.</li>
<li><span class="say">My son works in an office.</span> — Mon fils travaille dans un bureau.</li>
</ul>
<h3>La conjugaison : très facile… sauf un petit -s</h3>
<p>On prend la <b>base</b> du verbe pour toutes les personnes, <b>sauf avec he, she, it</b> : on ajoute alors un <b>-s</b>.</p>
<table><tr><th>Sujet</th><th>work (travailler)</th><th>Français</th></tr>
<tr><td>I</td><td><span class="say">I work</span></td><td>je travaille</td></tr>
<tr><td>you</td><td><span class="say">you work</span></td><td>tu travailles / vous travaillez</td></tr>
<tr><td>he</td><td><span class="say">he works</span></td><td>il travaille</td></tr>
<tr><td>she</td><td><span class="say">she works</span></td><td>elle travaille</td></tr>
<tr><td>it</td><td><span class="say">it works</span></td><td>ça marche (une chose, un appareil)</td></tr>
<tr><td>we</td><td><span class="say">we work</span></td><td>nous travaillons</td></tr>
<tr><td>they</td><td><span class="say">they work</span></td><td>ils / elles travaillent</td></tr>
</table>
<p>Le -s s'ajoute aussi avec un <b>nom au singulier</b> (qu'on pourrait remplacer par he, she ou it) :</p>
<ul>
<li><span class="say">My wife works on Saturdays.</span> — Ma femme travaille le samedi.</li>
<li><span class="say">The shop opens at nine.</span> — Le magasin ouvre à neuf heures.</li>
<li>Mais au pluriel, pas de -s : <span class="say">My children live in Lyon.</span> — Mes enfants habitent à Lyon.</li>
</ul>
<div class="callout key"><b>À retenir</b> Présent simple = la base du verbe. Avec <b>he, she, it</b> (ou un nom au singulier), on ajoute <b>-s</b> : <span class="say">I live</span> → <span class="say">she lives</span>.</div>
<div class="callout warn"><b>Pièges</b> L'oubli du -s : « she work » ✗ → <span class="say">she works</span>. Et pas de <b>be</b> devant le verbe : « I am work » ✗ → <span class="say">I work</span> (je travaille). En anglais comme en français, « je travaille » n'a qu'un seul verbe.</div>`
    },
    {
      id: 'en6-s-orthographe', title: 'Le -s de he, she, it : l\'orthographe',
      html: `
<p>Le plus souvent, on ajoute simplement <b>-s</b>. Mais quelques verbes changent un peu. Voici toutes les règles :</p>
<table><tr><th>Règle</th><th>Exemples</th></tr>
<tr><td>Cas général : <b>+ s</b></td><td><span class="say">work → works</span>, <span class="say">live → lives</span>, <span class="say">read → reads</span>, <span class="say">cook → cooks</span></td></tr>
<tr><td>Après <b>s, sh, ch, x, o</b> : <b>+ es</b></td><td><span class="say">watch → watches</span>, <span class="say">wash → washes</span>, <span class="say">finish → finishes</span>, <span class="say">go → goes</span>, <span class="say">do → does</span></td></tr>
<tr><td>Consonne + <b>y</b> : y → <b>ies</b></td><td><span class="say">study → studies</span>, <span class="say">carry → carries</span> (porter)</td></tr>
<tr><td>Voyelle + <b>y</b> : simplement <b>+ s</b></td><td><span class="say">play → plays</span>, <span class="say">buy → buys</span>, <span class="say">pay → pays</span></td></tr>
<tr><td>Le seul vrai irrégulier : <b>have</b></td><td><span class="say">have → has</span></td></tr>
</table>
<h3>Exemples</h3>
<ul>
<li><span class="say">She watches TV every evening.</span> — Elle regarde la télé tous les soirs.</li>
<li><span class="say">He goes to bed at eleven.</span> — Il se couche à onze heures.</li>
<li><span class="say">My granddaughter studies English.</span> — Ma petite-fille étudie l'anglais.</li>
<li><span class="say">He plays golf on Sundays.</span> — Il joue au golf le dimanche.</li>
<li><span class="say">She has a shower every morning.</span> — Elle prend une douche tous les matins.</li>
</ul>
<h3>La prononciation du -s</h3>
<p>Après un son « s », « z », « ch » ou « dj », la terminaison <b>-es</b> s'entend comme une syllabe de plus, « iz » : <span class="say">watches</span>, <span class="say">washes</span>, <span class="say">finishes</span>, <span class="say">closes</span>. Ailleurs, le -s s'entend à peine : <span class="say">works</span>, <span class="say">lives</span>. Attention : <span class="say">does</span> se dit « deuz », et <span class="say">says</span> se dit « sèz ».</p>
<div class="callout key"><b>À retenir</b> + s (works) · + es après s, sh, ch, x, o (watches, goes) · consonne + y → ies (studies) · voyelle + y → s (plays) · have → <b>has</b>.</div>
<div class="callout warn"><b>Pièges</b> On n'écrit pas « haves », « gos », « watchs » ni « studys ». Et <span class="say">plays</span> garde son y, car il y a une voyelle (a) juste avant.</div>`
    },
    {
      id: 'en6-s-negatif', title: 'La négation : don\'t / doesn\'t',
      html: `
<p>Pour dire « ne… pas » au présent simple, on place un petit mot avant le verbe : <b>don't</b> ou <b>doesn't</b>. C'est un <b>auxiliaire</b> : un « verbe d'aide » qu'on ne traduit pas, mais qui porte la négation.</p>
<table><tr><th>Sujet</th><th>Négation</th><th>Français</th></tr>
<tr><td>I, you, we, they</td><td><span class="say">I don't work</span></td><td>je ne travaille pas</td></tr>
<tr><td>he, she, it</td><td><span class="say">she doesn't work</span></td><td>elle ne travaille pas</td></tr>
</table>
<p><span class="say">don't</span> = do not · <span class="say">doesn't</span> = does not (les formes longues existent, mais on utilise surtout les formes courtes).</p>
<ul>
<li><span class="say">I don't like coffee.</span> — Je n'aime pas le café.</li>
<li><span class="say">We don't live in Paris.</span> — Nous n'habitons pas à Paris.</li>
<li><span class="say">He doesn't eat meat.</span> — Il ne mange pas de viande.</li>
<li><span class="say">My wife doesn't work on Mondays.</span> — Ma femme ne travaille pas le lundi.</li>
</ul>
<div class="callout key"><b>À retenir</b> Sujet + <b>don't / doesn't</b> + <b>base</b> du verbe. Avec he, she, it, le -s passe dans <b>does</b> : le verbe, lui, reste à la base. → <span class="say">She works.</span> → <span class="say">She doesn't work.</span></div>
<div class="callout warn"><b>Pièges</b> « She doesn't works » ✗ : un seul -s suffit, et il est déjà dans doesn't. « I not like » ✗ : il faut l'auxiliaire → <span class="say">I don't like</span>. Et « he don't » ✗ : avec he, she, it → <span class="say">he doesn't</span>.</div>
<div class="callout info"><b>Et le verbe be ?</b> be se débrouille tout seul, sans don't : <span class="say">I'm not tired.</span> (Je ne suis pas fatigué.) · <span class="say">She isn't at home.</span> (Elle n'est pas à la maison.) On ne dit jamais « I don't be ».</div>`
    },
    {
      id: 'en6-s-questions', title: 'Les questions : Do / Does… ? et les réponses courtes',
      html: `
<p>Pour poser une question, on met <b>Do</b> ou <b>Does</b> au début, puis le sujet, puis le verbe à la <b>base</b>.</p>
<table><tr><th>Do / Does</th><th>Sujet</th><th>Base</th><th>Suite</th></tr>
<tr><td>Do</td><td>you</td><td>live</td><td>here ?</td></tr>
<tr><td>Does</td><td>she</td><td>work</td><td>on Saturdays ?</td></tr>
</table>
<ul>
<li><span class="say">Do you live here?</span> — Vous habitez ici ?</li>
<li><span class="say">Does she work on Saturdays?</span> — Est-ce qu'elle travaille le samedi ?</li>
<li><span class="say">Do your children live near you?</span> — Vos enfants habitent près de chez vous ?</li>
<li><span class="say">Does your husband cook?</span> — Votre mari fait-il la cuisine ?</li>
</ul>
<div class="callout tip"><b>Astuce</b> Pense à <b>Do / Does</b> comme à « Est-ce que » : <i>Est-ce que</i> tu habites ici ? → <span class="say">Do you live here?</span></div>
<h3>Les réponses courtes</h3>
<p>En anglais, on répond rarement juste « Yes » ou « No » : on reprend le <b>sujet</b> et l'<b>auxiliaire</b>.</p>
<table><tr><th>Question</th><th>Oui</th><th>Non</th></tr>
<tr><td><span class="say">Do you like tea?</span></td><td><span class="say">Yes, I do.</span></td><td><span class="say">No, I don't.</span></td></tr>
<tr><td><span class="say">Does he drive?</span></td><td><span class="say">Yes, he does.</span></td><td><span class="say">No, he doesn't.</span></td></tr>
<tr><td><span class="say">Do they work?</span></td><td><span class="say">Yes, they do.</span></td><td><span class="say">No, they don't.</span></td></tr>
</table>
<div class="callout key"><b>À retenir</b> <b>Do / Does</b> + sujet + <b>base</b> ? → Yes, + sujet + <b>do / does</b>. · No, + sujet + <b>don't / doesn't</b>.</div>
<div class="callout warn"><b>Pièges</b> « Does she works? » ✗ → <span class="say">Does she work?</span> (le -s est déjà dans does). « Works she? » ✗ : en anglais, on n'inverse pas le verbe, on ajoute Do / Does. Et on ne répond pas « Yes, I like » mais <span class="say">Yes, I do</span>.</div>`
    },
    {
      id: 'en6-s-motsinterro', title: 'Où ? Quand ? À quelle heure ?',
      html: `
<p>Pour une question plus précise, on place le <b>mot interrogatif</b> tout au début, puis la question avec do / does :</p>
<p><b>Mot interrogatif + do / does + sujet + base ?</b></p>
<table><tr><th>Mot</th><th>Sens</th><th>Exemple</th></tr>
<tr><td><span class="say">What</span></td><td>que, quoi</td><td><span class="say">What do you do at the weekend?</span> — Que faites-vous le week-end ?</td></tr>
<tr><td><span class="say">What time</span></td><td>à quelle heure</td><td><span class="say">What time do you get up?</span> — À quelle heure vous levez-vous ?</td></tr>
<tr><td><span class="say">Where</span></td><td>où</td><td><span class="say">Where does he live?</span> — Où habite-t-il ?</td></tr>
<tr><td><span class="say">When</span></td><td>quand</td><td><span class="say">When does the shop open?</span> — Quand le magasin ouvre-t-il ?</td></tr>
<tr><td><span class="say">How</span></td><td>comment</td><td><span class="say">How do you go to work?</span> — Comment allez-vous au travail ?</td></tr>
<tr><td><span class="say">How often</span></td><td>à quelle fréquence</td><td><span class="say">How often do you go to the cinema?</span> — Vous allez au cinéma tous les combien ?</td></tr>
</table>
<h3>Pour répondre</h3>
<ul>
<li><span class="say">What time do you get up?</span> → <span class="say">I get up at seven.</span> (Je me lève à sept heures.)</li>
<li><span class="say">Where does your son live?</span> → <span class="say">He lives in London.</span> (Il habite à Londres.)</li>
<li><span class="say">How do you go to work?</span> → <span class="say">I go by bus.</span> (J'y vais en bus.)</li>
</ul>
<div class="callout key"><b>À retenir</b> Mot interrogatif + <b>do / does</b> + sujet + <b>base</b> ? → <span class="say">Where do you live?</span> · <span class="say">What time does she finish?</span></div>
<div class="callout warn"><b>Pièges</b> <span class="say">What do you do?</span> ne veut pas dire « Qu'est-ce que tu fais en ce moment ? » mais <b>« Quel est ton métier ? »</b>. Le premier do est l'auxiliaire, le second est le verbe faire. Et on ne dit pas « Where lives he? » mais <span class="say">Where does he live?</span></div>`
    },
    {
      id: 'en6-s-frequence', title: 'Toujours, souvent, jamais : la fréquence',
      html: `
<h3>Les adverbes de fréquence</h3>
<table><tr><th>Anglais</th><th>Français</th><th>Fréquence</th></tr>
<tr><td><span class="say">always</span></td><td>toujours</td><td>100 %</td></tr>
<tr><td><span class="say">usually</span></td><td>d'habitude</td><td>80 %</td></tr>
<tr><td><span class="say">often</span></td><td>souvent</td><td>60 %</td></tr>
<tr><td><span class="say">sometimes</span></td><td>parfois</td><td>40 %</td></tr>
<tr><td><span class="say">rarely</span></td><td>rarement</td><td>10 %</td></tr>
<tr><td><span class="say">never</span></td><td>jamais</td><td>0 %</td></tr>
</table>
<h3>Où les placer ?</h3>
<p><b>Avant</b> le verbe ordinaire :</p>
<ul>
<li><span class="say">I always get up early.</span> — Je me lève toujours tôt.</li>
<li><span class="say">She often cooks fish.</span> — Elle cuisine souvent du poisson.</li>
<li><span class="say">We never watch TV in the morning.</span> — Nous ne regardons jamais la télé le matin.</li>
</ul>
<p>Mais <b>après</b> le verbe <b>be</b> :</p>
<ul>
<li><span class="say">I'm always tired in the evening.</span> — Je suis toujours fatigué le soir.</li>
<li><span class="say">He is never late.</span> — Il n'est jamais en retard.</li>
</ul>
<p>Avec don't / doesn't ou dans une question, l'adverbe se place juste avant le verbe : <span class="say">I don't often drive.</span> (Je ne conduis pas souvent.) · <span class="say">Do you often cook?</span> (Vous cuisinez souvent ?)</p>
<h3>Les expressions de temps</h3>
<p>Elles se placent en général à la <b>fin</b> de la phrase.</p>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">every day</span></td><td>tous les jours</td></tr>
<tr><td><span class="say">every morning</span></td><td>tous les matins</td></tr>
<tr><td><span class="say">every week</span></td><td>toutes les semaines</td></tr>
<tr><td><span class="say">in the morning</span></td><td>le matin</td></tr>
<tr><td><span class="say">in the afternoon</span></td><td>l'après-midi</td></tr>
<tr><td><span class="say">in the evening</span></td><td>le soir</td></tr>
<tr><td><span class="say">at night</span></td><td>la nuit</td></tr>
<tr><td><span class="say">on Sundays</span></td><td>le dimanche (tous les dimanches)</td></tr>
<tr><td><span class="say">at the weekend</span></td><td>le week-end (<span class="say">on the weekend</span> en américain)</td></tr>
<tr><td><span class="say">once a week</span></td><td>une fois par semaine</td></tr>
<tr><td><span class="say">twice a day</span></td><td>deux fois par jour</td></tr>
</table>
<p>Les jours, toujours avec une majuscule : <span class="say">Monday</span>, <span class="say">Tuesday</span>, <span class="say">Wednesday</span>, <span class="say">Thursday</span>, <span class="say">Friday</span>, <span class="say">Saturday</span>, <span class="say">Sunday</span>.</p>
<ul>
<li><span class="say">I go to the market on Saturdays.</span> — Je vais au marché le samedi.</li>
<li><span class="say">My husband reads in the evening.</span> — Mon mari lit le soir.</li>
<li><span class="say">I take my pills twice a day.</span> — Je prends mes cachets deux fois par jour.</li>
</ul>
<div class="callout key"><b>À retenir</b> Adverbe de fréquence <b>avant</b> le verbe (<span class="say">I often read</span>), mais <b>après</b> be (<span class="say">I'm often tired</span>). <b>in</b> the morning / afternoon / evening · <b>at</b> night · <b>at</b> the weekend · <b>on</b> + jour.</div>
<div class="callout warn"><b>Pièges</b> Pas de « I read often books » : <span class="say">I often read books</span>. <b>never</b> est déjà négatif : on dit <span class="say">I never drink coffee</span>, pas « I don't never drink ». Et « le dimanche » (chaque dimanche) se dit <span class="say">on Sundays</span>, avec un -s.</div>`
    },
    {
      id: 'en6-s-travail', title: 'Parler de son travail (et de sa retraite)',
      html: `
<h3>Les mots du travail</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">a job</span></td><td>un emploi, un métier</td></tr>
<tr><td><span class="say">work</span></td><td>le travail / travailler</td></tr>
<tr><td><span class="say">an office</span></td><td>un bureau (la pièce, le lieu)</td></tr>
<tr><td><span class="say">a company</span></td><td>une entreprise</td></tr>
<tr><td><span class="say">a shop</span></td><td>un magasin</td></tr>
<tr><td><span class="say">a colleague</span></td><td>un ou une collègue</td></tr>
<tr><td><span class="say">the boss</span></td><td>le patron, la patronne</td></tr>
<tr><td><span class="say">retired</span></td><td>retraité, à la retraite</td></tr>
<tr><td><span class="say">busy</span></td><td>occupé</td></tr>
<tr><td><span class="say">free time</span></td><td>le temps libre</td></tr>
</table>
<h3>Poser la question</h3>
<ul>
<li><span class="say">What do you do?</span> — Que faites-vous dans la vie ?</li>
<li><span class="say">What's your job?</span> — Quel est votre métier ?</li>
<li><span class="say">Where do you work?</span> — Où travaillez-vous ?</li>
<li><span class="say">Do you like your job?</span> — Aimez-vous votre travail ?</li>
</ul>
<h3>Répondre</h3>
<ul>
<li><span class="say">I'm a nurse.</span> — Je suis infirmière. (avec <b>a / an</b> devant le métier !)</li>
<li><span class="say">I work in a shop.</span> — Je travaille dans un magasin.</li>
<li><span class="say">My daughter works for a big company.</span> — Ma fille travaille pour une grande entreprise.</li>
<li><span class="say">I'm retired.</span> — Je suis à la retraite.</li>
<li><span class="say">I'm a retired teacher.</span> — Je suis professeur à la retraite.</li>
</ul>
<h3>La vie de retraité</h3>
<p><span class="say">I'm retired, so I've got a lot of free time.</span> — Je suis à la retraite, alors j'ai beaucoup de temps libre.<br>
<span class="say">I usually walk in the morning, and I read in the afternoon.</span> — D'habitude, je marche le matin et je lis l'après-midi.<br>
<span class="say">On Wednesdays, I look after my grandchildren.</span> — Le mercredi, je garde mes petits-enfants.</p>
<div class="callout key"><b>À retenir</b> Le métier : <span class="say">I'm a teacher</span> (avec a / an). La retraite : <span class="say">I'm retired</span> (avec be).</div>
<div class="callout warn"><b>Pièges</b> On ne dit pas « I am teacher » mais <span class="say">I'm a teacher</span>. « J'ai un travail » se dit <span class="say">I've got a job</span> (pas « a work »). Et <span class="say">an office</span> = un bureau (la pièce) ; le meuble se dit <span class="say">a desk</span>.</div>`
    }
  ],
  words: [
    // la routine
    { en: 'wake up', fr: 'se réveiller', pos: 'v', cat: 'La routine', ex: 'I wake up at six.', exFr: 'Je me réveille à six heures.', level: 1 },
    { en: 'get up', fr: 'se lever', pos: 'v', cat: 'La routine', ex: 'She gets up at seven.', exFr: 'Elle se lève à sept heures.', level: 1, note: 'Avec he/she, le -s va sur get : she **gets** up.' },
    { en: 'have a shower', fr: 'prendre une douche', pos: 'v', cat: 'La routine', alt: ['take a shower'], ex: 'He has a shower every morning.', exFr: 'Il prend une douche tous les matins.', level: 1, note: 'Avec he/she : **has** a shower. En américain : take a shower.' },
    { en: 'get dressed', fr: 's\'habiller', pos: 'v', cat: 'La routine', ex: 'I get dressed after breakfast.', exFr: 'Je m\'habille après le petit-déjeuner.', level: 2 },
    { en: 'have breakfast', fr: 'prendre le petit-déjeuner', pos: 'v', cat: 'La routine', ex: 'We have breakfast in the kitchen.', exFr: 'Nous prenons le petit-déjeuner dans la cuisine.', level: 1, note: 'Sans article : have breakfast, have lunch, have dinner.' },
    { en: 'go to work', fr: 'aller au travail', pos: 'v', cat: 'La routine', ex: 'My son goes to work by bus.', exFr: 'Mon fils va au travail en bus.', level: 1, note: 'Sans article : go to work (pas « to the work »).' },
    { en: 'take', fr: 'prendre', pos: 'v', cat: 'La routine', ex: 'I take the bus every day.', exFr: 'Je prends le bus tous les jours.', level: 1, note: 'Pour un repas ou une douche, on dit plutôt **have** : have lunch, have a shower.' },
    { en: 'start', fr: 'commencer', pos: 'v', cat: 'La routine', alt: ['begin'], ex: 'Work starts at nine.', exFr: 'Le travail commence à neuf heures.', level: 1 },
    { en: 'finish', fr: 'finir, terminer', pos: 'v', cat: 'La routine', ex: 'She finishes work at five.', exFr: 'Elle finit le travail à cinq heures.', level: 1, note: 'he/she finish**es** (+ es après sh).' },
    { en: 'work', fr: 'travailler', pos: 'v', cat: 'La routine', ex: 'My daughter works in a hospital.', exFr: 'Ma fille travaille dans un hôpital.', level: 1, note: 'C\'est aussi un nom : work = le travail (go to work). Mais « un travail, un emploi » = **a job**.' },
    { en: 'cook', fr: 'cuisiner, faire la cuisine', pos: 'v', cat: 'La routine', ex: 'My husband cooks on Sundays.', exFr: 'Mon mari fait la cuisine le dimanche.', level: 1, note: 'a cook = un cuisinier. La cuisine (la pièce) = the kitchen.' },
    { en: 'walk', fr: 'marcher, se promener', pos: 'v', cat: 'La routine', ex: 'I walk in the park every morning.', exFr: 'Je me promène dans le parc tous les matins.', level: 1, note: 'Le l ne se prononce pas : « wôk ».' },
    { en: 'come home', fr: 'rentrer à la maison', pos: 'v', cat: 'La routine', alt: ['get home', 'go home'], ex: 'He comes home at six.', exFr: 'Il rentre à la maison à six heures.', level: 1, note: 'Sans « to » : come home, go home.' },
    { en: 'relax', fr: 'se détendre', pos: 'v', cat: 'La routine', ex: 'I relax in the garden.', exFr: 'Je me détends dans le jardin.', level: 2 },
    { en: 'watch TV', fr: 'regarder la télé', pos: 'v', cat: 'La routine', alt: ['watch television'], ex: 'They watch TV in the evening.', exFr: 'Ils regardent la télé le soir.', level: 1, note: 'he/she watch**es** (+ es après ch).' },
    { en: 'read', fr: 'lire', pos: 'v', cat: 'La routine', ex: 'She reads the newspaper every day.', exFr: 'Elle lit le journal tous les jours.', level: 1 },
    { en: 'listen', fr: 'écouter', pos: 'v', cat: 'La routine', alt: ['listen to'], ex: 'I listen to the radio in the car.', exFr: 'J\'écoute la radio dans la voiture.', level: 1, note: 'Avec un complément, on dit **listen to** : listen to music. Le t ne se prononce pas : « li-seun ».' },
    { en: 'go to bed', fr: 'aller se coucher', pos: 'v', cat: 'La routine', ex: 'I go to bed at eleven.', exFr: 'Je me couche à onze heures.', level: 1 },
    // verbes courants
    { en: 'live', fr: 'habiter, vivre', pos: 'v', cat: 'Verbes courants', ex: 'We live in a small town.', exFr: 'Nous habitons dans une petite ville.', level: 1, note: 'live se prononce « liv » (i court). leave (« liiv ») = partir.' },
    { en: 'like', fr: 'aimer (bien)', pos: 'v', cat: 'Verbes courants', ex: 'Do you like your job?', exFr: 'Aimez-vous votre travail ?', level: 1 },
    { en: 'love', fr: 'adorer', pos: 'v', cat: 'Verbes courants', ex: 'My wife loves flowers.', exFr: 'Ma femme adore les fleurs.', level: 1, note: 'love veut aussi dire aimer d\'amour : I love you.' },
    { en: 'go', fr: 'aller', pos: 'v', cat: 'Verbes courants', ex: 'She goes to the market on Fridays.', exFr: 'Elle va au marché le vendredi.', level: 1, note: 'he/she **goes**.' },
    { en: 'do', fr: 'faire', pos: 'v', cat: 'Verbes courants', ex: 'He does the shopping.', exFr: 'Il fait les courses.', level: 1, note: 'he/she **does** (prononcé « deuz »).' },
    { en: 'play', fr: 'jouer', pos: 'v', cat: 'Verbes courants', ex: 'He plays tennis on Saturdays.', exFr: 'Il joue au tennis le samedi.', level: 1, note: 'he/she **plays** : voyelle + y → juste -s.' },
    { en: 'study', fr: 'étudier', pos: 'v', cat: 'Verbes courants', ex: 'My grandson studies at university.', exFr: 'Mon petit-fils fait ses études à l\'université.', level: 1, note: 'he/she **studies** : consonne + y → ies.' },
    { en: 'wash', fr: 'laver', pos: 'v', cat: 'Verbes courants', ex: 'He washes the car on Sundays.', exFr: 'Il lave la voiture le dimanche.', level: 2, note: 'he/she wash**es** (+ es après sh).' },
    // le travail
    { en: 'job', fr: 'un emploi, un métier', pos: 'n', cat: 'Le travail', sec: 'en6-s-travail', ex: 'I like my job.', exFr: 'J\'aime mon métier.', level: 1, note: 'J\'ai un travail = I\'ve got a **job** (pas « a work »).' },
    { en: 'office', fr: 'le bureau (le lieu)', pos: 'n', cat: 'Le travail', sec: 'en6-s-travail', ex: 'She works in an office.', exFr: 'Elle travaille dans un bureau.', level: 1, note: 'Le meuble (la table de travail) = a desk.' },
    { en: 'company', fr: 'l\'entreprise', pos: 'n', cat: 'Le travail', sec: 'en6-s-travail', ex: 'He works for a big company.', exFr: 'Il travaille pour une grande entreprise.', level: 1 },
    { en: 'shop', fr: 'le magasin', pos: 'n', cat: 'Le travail', sec: 'en6-s-travail', alt: ['store'], ex: 'The shop opens at nine.', exFr: 'Le magasin ouvre à neuf heures.', level: 1, note: 'En américain : store.' },
    { en: 'colleague', fr: 'un collègue, une collègue', pos: 'n', cat: 'Le travail', sec: 'en6-s-travail', ex: 'My colleagues are very nice.', exFr: 'Mes collègues sont très sympathiques.', level: 2, note: 'Prononciation : « ko-liig ».' },
    { en: 'boss', fr: 'le patron, la patronne', pos: 'n', cat: 'Le travail', sec: 'en6-s-travail', ex: 'My boss is very nice.', exFr: 'Mon patron est très gentil.', level: 1 },
    { en: 'retired', fr: 'retraité, à la retraite', pos: 'adj', cat: 'Le travail', sec: 'en6-s-travail', ex: 'My husband is retired.', exFr: 'Mon mari est à la retraite.', level: 1, note: 'Avec be : I\'m retired. La retraite = retirement.' },
    { en: 'busy', fr: 'occupé', pos: 'adj', cat: 'Le travail', sec: 'en6-s-travail', ex: 'She is always busy.', exFr: 'Elle est toujours occupée.', level: 1, note: 'Prononciation : « bi-zi ».' },
    { en: 'free time', fr: 'le temps libre', pos: 'n', cat: 'Le travail', sec: 'en6-s-travail', ex: 'I read a lot in my free time.', exFr: 'Je lis beaucoup pendant mon temps libre.', level: 1 },
    { en: 'weekend', fr: 'le week-end', pos: 'n', cat: 'Les moments', sec: 'en6-s-frequence', ex: 'I don\'t work at the weekend.', exFr: 'Je ne travaille pas le week-end.', level: 1, note: 'at the weekend (britannique), on the weekend (américain).' },
    // la fréquence
    { en: 'always', fr: 'toujours', pos: 'adv', cat: 'La fréquence', sec: 'en6-s-frequence', ex: 'I always have coffee in the morning.', exFr: 'Je prends toujours un café le matin.', level: 1, note: '« toujours » au sens de « encore » se dit still.' },
    { en: 'usually', fr: 'd\'habitude, généralement', pos: 'adv', cat: 'La fréquence', sec: 'en6-s-frequence', ex: 'We usually have dinner at eight.', exFr: 'D\'habitude, nous dînons à huit heures.', level: 1 },
    { en: 'often', fr: 'souvent', pos: 'adv', cat: 'La fréquence', sec: 'en6-s-frequence', ex: 'She often reads in the evening.', exFr: 'Elle lit souvent le soir.', level: 1, note: 'Le t ne se prononce généralement pas : « o-feun ».' },
    { en: 'sometimes', fr: 'parfois, quelquefois', pos: 'adv', cat: 'La fréquence', sec: 'en6-s-frequence', ex: 'I sometimes go to the cinema.', exFr: 'Je vais parfois au cinéma.', level: 1 },
    { en: 'rarely', fr: 'rarement', pos: 'adv', cat: 'La fréquence', sec: 'en6-s-frequence', ex: 'He rarely drinks wine.', exFr: 'Il boit rarement du vin.', level: 2 },
    { en: 'never', fr: 'jamais', pos: 'adv', cat: 'La fréquence', sec: 'en6-s-frequence', ex: 'She never eats meat.', exFr: 'Elle ne mange jamais de viande.', level: 1, note: 'never est déjà négatif : pas de don\'t avec lui (She never eats…).' },
    { en: 'every day', fr: 'tous les jours', pos: 'x', cat: 'La fréquence', sec: 'en6-s-frequence', ex: 'I walk every day.', exFr: 'Je marche tous les jours.', level: 1, note: 'every + singulier : every day, every morning, every week. En deux mots ! (« everyday » en un mot est un adjectif : quotidien.)' },
    // les moments
    { en: 'morning', fr: 'le matin', pos: 'n', cat: 'Les moments', sec: 'en6-s-frequence', ex: 'I read the newspaper in the morning.', exFr: 'Je lis le journal le matin.', level: 1, note: 'Le matin = **in** the morning.' },
    { en: 'afternoon', fr: 'l\'après-midi', pos: 'n', cat: 'Les moments', sec: 'en6-s-frequence', ex: 'We walk in the afternoon.', exFr: 'Nous nous promenons l\'après-midi.', level: 1, note: 'L\'après-midi = **in** the afternoon.' },
    { en: 'evening', fr: 'le soir', pos: 'n', cat: 'Les moments', sec: 'en6-s-frequence', ex: 'I cook in the evening.', exFr: 'Je fais la cuisine le soir.', level: 1, note: 'Le soir = **in** the evening. Good evening = bonsoir.' },
    { en: 'night', fr: 'la nuit', pos: 'n', cat: 'Les moments', sec: 'en6-s-frequence', ex: 'I never drink coffee at night.', exFr: 'Je ne bois jamais de café la nuit.', level: 1, note: 'La nuit = **at** night (avec at, pas in).' },
    { en: 'early', fr: 'tôt', pos: 'adv', cat: 'Les moments', sec: 'en6-s-frequence', ex: 'I get up early.', exFr: 'Je me lève tôt.', level: 1 },
    { en: 'late', fr: 'tard', pos: 'adv', cat: 'Les moments', sec: 'en6-s-frequence', ex: 'He goes to bed late.', exFr: 'Il se couche tard.', level: 1, note: 'be late = être en retard : I\'m late! (Je suis en retard !)' }
  ],
  phrases: [
    { en: 'What do you do?', fr: 'Que faites-vous dans la vie ?', alt: ['What\'s your job?'], cat: 'Le travail', sec: 'en6-s-travail', note: 'Question sur le métier, et non sur ce qu\'on fait en ce moment.' },
    { en: 'I\'m retired.', fr: 'Je suis à la retraite.', cat: 'Le travail', sec: 'en6-s-travail' },
    { en: 'I work in an office.', fr: 'Je travaille dans un bureau.', cat: 'Le travail', sec: 'en6-s-travail' },
    { en: 'Do you like your job?', fr: 'Aimez-vous votre travail ?', cat: 'Le travail', sec: 'en6-s-questions' },
    { en: 'Where do you live?', fr: 'Où habitez-vous ?', cat: 'Se présenter', sec: 'en6-s-motsinterro' },
    { en: 'I live in a small town.', fr: 'J\'habite dans une petite ville.', cat: 'Se présenter', sec: 'en6-s-affirmatif' },
    { en: 'Do you speak French?', fr: 'Parlez-vous français ?', cat: 'Se présenter', sec: 'en6-s-questions' },
    { en: 'I speak a little English.', fr: 'Je parle un peu anglais.', cat: 'Se présenter', sec: 'en6-s-affirmatif' },
    { en: 'I don\'t understand.', fr: 'Je ne comprends pas.', cat: 'Se présenter', sec: 'en6-s-negatif' },
    { en: 'What time do you get up?', fr: 'À quelle heure vous levez-vous ?', cat: 'La routine', sec: 'en6-s-motsinterro' },
    { en: 'I usually get up at seven.', fr: 'D\'habitude, je me lève à sept heures.', alt: ['I usually get up at seven o\'clock.', 'Usually, I get up at seven.'], cat: 'La routine', sec: 'en6-s-frequence' },
    { en: 'I have a shower every morning.', fr: 'Je prends une douche tous les matins.', alt: ['I take a shower every morning.'], cat: 'La routine', sec: 'en6-s-affirmatif' },
    { en: 'He always goes to bed late.', fr: 'Il se couche toujours tard.', cat: 'La routine', sec: 'en6-s-frequence' },
    { en: 'I never watch TV in the morning.', fr: 'Je ne regarde jamais la télé le matin.', alt: ['I never watch television in the morning.'], cat: 'La routine', sec: 'en6-s-frequence' },
    { en: 'She doesn\'t work on Fridays.', fr: 'Elle ne travaille pas le vendredi.', cat: 'La routine', sec: 'en6-s-negatif' },
    { en: 'I go to the market on Saturdays.', fr: 'Je vais au marché le samedi.', cat: 'La routine', sec: 'en6-s-frequence' },
    { en: 'What do you do at the weekend?', fr: 'Que faites-vous le week-end ?', alt: ['What do you do on the weekend?', 'What do you do at weekends?', 'What do you do on weekends?'], cat: 'Le temps libre', sec: 'en6-s-motsinterro' },
    { en: 'What do you do in your free time?', fr: 'Que faites-vous pendant votre temps libre ?', cat: 'Le temps libre', sec: 'en6-s-motsinterro' },
    { en: 'How often do you go to the cinema?', fr: 'À quelle fréquence allez-vous au cinéma ?', alt: ['How often do you go to the movies?'], cat: 'Le temps libre', sec: 'en6-s-motsinterro' },
    { en: 'What time does the shop open?', fr: 'À quelle heure ouvre le magasin ?', alt: ['When does the shop open?', 'What time does the store open?'], cat: 'La ville', sec: 'en6-s-motsinterro' },
    { en: 'The bus leaves at nine.', fr: 'Le bus part à neuf heures.', alt: ['The bus leaves at nine o\'clock.'], cat: 'La ville', sec: 'en6-s-affirmatif' },
    { en: 'I\'m very busy today.', fr: 'Je suis très occupé aujourd\'hui.', cat: 'Le travail', sec: 'en6-s-travail' },
    { en: 'Yes, I do.', fr: 'Oui. (réponse courte à « Do you… ? »)', cat: 'Réponses courtes', sec: 'en6-s-questions', note: 'Ex. : Do you like tea? — Yes, I do.' },
    { en: 'No, she doesn\'t.', fr: 'Non. (réponse courte à « Does she… ? »)', cat: 'Réponses courtes', sec: 'en6-s-questions', note: 'Ex. : Does she work? — No, she doesn\'t.' }
  ],
  quiz: [
    { id: 'en6-q-01', q: 'Complète : She ___ in a bank.', choices: ['work', 'is work', 'works', 'working'], answer: 2, topic: 'Présent simple : affirmatif', sec: 'en6-s-affirmatif',
      why: { 0: 'Avec she, il faut le **-s** du présent simple.', 1: 'Pas de is devant le verbe au présent simple : she works.', 3: 'La forme en -ing ne s\'emploie pas seule après le sujet.' },
      explain: 'Avec **he, she, it**, le verbe prend un **-s** : She **works** in a bank. (Elle travaille dans une banque.)', say: 'She works in a bank.', level: 1 },
    { id: 'en6-q-02', q: 'Complète : He ___ TV every evening.', choices: ['watches', 'watchs', 'watch', 'is watch'], answer: 0, topic: 'Le -s : orthographe', sec: 'en6-s-orthographe',
      why: { 1: 'Après **ch**, on ajoute **-es**, pas seulement -s.', 2: 'Avec he, il faut ajouter -es.', 3: 'Pas de is devant le verbe au présent simple.' },
      explain: 'Après s, sh, ch, x, o : **+ es**. → He **watches** TV every evening. (Il regarde la télé tous les soirs.)', say: 'He watches TV every evening.', level: 1 },
    { id: 'en6-q-03', q: 'Complète : My granddaughter ___ English.', choices: ['studys', 'study', 'studyes', 'studies'], answer: 3, topic: 'Le -s : orthographe', sec: 'en6-s-orthographe',
      why: { 0: 'Consonne + y : le y devient **ies**.', 1: 'My granddaughter = she : il faut le -s.', 2: 'On ne garde pas le y : study → studies.' },
      explain: 'Consonne + **y** → **ies** : study → **studies**. → My granddaughter **studies** English. (Ma petite-fille étudie l\'anglais.)', say: 'My granddaughter studies English.', level: 1 },
    { id: 'en6-q-04', q: 'Complète : She ___ a shower every morning.', choices: ['have', 'haves', 'has', 'is'], answer: 2, topic: 'Le -s : orthographe', sec: 'en6-s-orthographe',
      why: { 0: 'Avec she, have devient **has**.', 1: '« haves » n\'existe pas : have → has.', 3: 'is ne veut pas dire « prendre » : have a shower = prendre une douche.' },
      explain: 'have est le seul vrai irrégulier : he/she/it **has**. → She **has** a shower every morning. (Elle prend une douche tous les matins.)', say: 'She has a shower every morning.', level: 1 },
    { id: 'en6-q-05', q: 'Complète : I ___ like coffee.', choices: ['doesn\'t', 'don\'t', 'not', 'am not'], answer: 1, topic: 'Présent simple : négatif', sec: 'en6-s-negatif',
      why: { 0: '**doesn\'t** va avec he, she, it. Avec I : don\'t.', 2: 'Il faut l\'auxiliaire : on ne met pas « not » tout seul devant le verbe.', 3: 'am not s\'utilise avec be (I\'m not tired), pas devant un autre verbe.' },
      explain: 'Négation au présent simple : I/you/we/they + **don\'t** + base. → I **don\'t** like coffee. (Je n\'aime pas le café.)', say: 'I don\'t like coffee.', level: 1 },
    { id: 'en6-q-06', q: 'Complète : He ___ eat meat.', choices: ['don\'t', 'isn\'t', 'not', 'doesn\'t'], answer: 3, topic: 'Présent simple : négatif', sec: 'en6-s-negatif',
      why: { 0: '**don\'t** va avec I, you, we, they. Avec he : doesn\'t.', 1: 'isn\'t s\'utilise avec be, pas devant un autre verbe.', 2: 'Il faut l\'auxiliaire doesn\'t : « He not eat » n\'existe pas.' },
      explain: 'he/she/it + **doesn\'t** + base. → He **doesn\'t** eat meat. (Il ne mange pas de viande.)', say: 'He doesn\'t eat meat.', level: 1 },
    { id: 'en6-q-07', q: 'Complète : She doesn\'t ___ on Sundays.', choices: ['work', 'works', 'working', 'to work'], answer: 0, topic: 'Présent simple : négatif', sec: 'en6-s-negatif',
      why: { 1: 'Le -s est déjà dans **doesn\'t** : le verbe reste à la base.', 2: 'Après doesn\'t, on met la base, pas la forme en -ing.', 3: 'Pas de « to » après doesn\'t.' },
      explain: 'Après **doesn\'t**, toujours la **base** : She doesn\'t **work** on Sundays. (Elle ne travaille pas le dimanche.)', say: 'She doesn\'t work on Sundays.', level: 1 },
    { id: 'en6-q-08', q: 'Complète : ___ you live in Paris?', choices: ['Are', 'Do', 'Does', 'Is'], answer: 1, topic: 'Présent simple : questions', sec: 'en6-s-questions',
      why: { 0: 'Are s\'utilise avec be ; ici le verbe est live : il faut l\'auxiliaire Do.', 2: '**Does** va avec he, she, it. Avec you : Do.', 3: 'Is va avec he, she, it, et seulement avec be.' },
      explain: 'Question : **Do** + I/you/we/they + base ? → **Do** you live in Paris? (Vous habitez à Paris ?)', say: 'Do you live in Paris?', level: 1 },
    { id: 'en6-q-09', q: 'Complète : ___ your wife drive?', choices: ['Do', 'Is', 'Does', 'Has'], answer: 2, topic: 'Présent simple : questions', sec: 'en6-s-questions',
      why: { 0: 'your wife = she : il faut **Does**.', 1: 'Is s\'utilise avec be, pas avec un autre verbe comme drive.', 3: 'Has n\'est pas l\'auxiliaire des questions au présent simple.' },
      explain: 'your wife = she → **Does** + sujet + base ? → **Does** your wife drive? (Votre femme conduit-elle ?)', say: 'Does your wife drive?', level: 1 },
    { id: 'en6-q-10', q: 'Complète : Does he ___ in London?', choices: ['lives', 'living', 'is live', 'live'], answer: 3, topic: 'Présent simple : questions', sec: 'en6-s-questions',
      why: { 0: 'Le -s est déjà dans **Does** : le verbe reste à la base.', 1: 'Après Does, on met la base, pas la forme en -ing.', 2: 'Pas de is : Does + sujet + base.' },
      explain: '**Does** + sujet + **base** ? → Does he **live** in London? (Est-ce qu\'il habite à Londres ?)', say: 'Does he live in London?', level: 1 },
    { id: 'en6-q-11', q: '« Do you cook? » Quelle est la bonne réponse courte pour dire oui ?', choices: ['Yes, I do.', 'Yes, I am.', 'Yes, I does.', 'Yes, I don\'t.'], answer: 0, topic: 'Réponses courtes', sec: 'en6-s-questions',
      why: { 1: 'La question est posée avec Do : on répond avec **do**, pas avec am.', 2: 'Avec I, c\'est do (does va avec he, she, it).', 3: 'Yes et don\'t se contredisent.' },
      explain: 'On reprend l\'auxiliaire de la question : Do you cook? — **Yes, I do.** (Oui.)', say: 'Yes, I do.', level: 1 },
    { id: 'en6-q-12', q: '« Does your husband work? » Pour répondre non :', choices: ['No, he don\'t.', 'No, he doesn\'t.', 'No, he isn\'t.', 'No, he not.'], answer: 1, topic: 'Réponses courtes', sec: 'en6-s-questions',
      why: { 0: 'Avec he, il faut **doesn\'t**.', 2: 'La question est posée avec Does, pas avec Is.', 3: 'Il manque l\'auxiliaire : No, he doesn\'t.' },
      explain: 'Does…? → **No, he doesn\'t.** (Non.)', say: 'No, he doesn\'t.', level: 1 },
    { id: 'en6-q-13', q: 'Quelle phrase est correcte ?', choices: ['I get always up at seven.', 'Always I get up at seven.', 'I always get up at seven.', 'I get up always at seven.'], answer: 2, topic: 'Adverbes de fréquence', sec: 'en6-s-frequence',
      why: { 0: 'always ne se met pas au milieu de « get up » : il se place **avant** le verbe.', 1: 'always ne se met pas en tête de phrase : il se place avant le verbe.', 3: 'always se place **avant** le verbe, pas après.' },
      explain: 'L\'adverbe de fréquence se place **avant** le verbe : I **always** get up at seven. (Je me lève toujours à sept heures.)', say: 'I always get up at seven.', level: 1 },
    { id: 'en6-q-14', q: 'Complète avec never : She ___ late.', choices: ['never is', 'is never', 'never', 'doesn\'t never'], answer: 1, topic: 'Adverbes de fréquence', sec: 'en6-s-frequence',
      why: { 0: 'Avec le verbe **be**, l\'adverbe se place **après** : is never.', 2: 'Il manque le verbe be : late est un adjectif.', 3: 'never est déjà négatif, et late n\'est pas un verbe : il faut **is**.' },
      explain: 'Avec **be**, l\'adverbe se place **après** le verbe : She **is never** late. (Elle n\'est jamais en retard.)', say: 'She is never late.', level: 1 },
    { id: 'en6-q-15', q: 'Complète : ___ time do you finish work?', choices: ['What', 'Where', 'Who', 'How'], answer: 0, topic: 'Mots interrogatifs', sec: 'en6-s-motsinterro',
      why: { 1: 'Where = où.', 2: 'Who = qui.', 3: 'How = comment ; « How time » n\'existe pas.' },
      explain: '**What time** = à quelle heure. → **What time** do you finish work? (À quelle heure finissez-vous le travail ?)', say: 'What time do you finish work?', level: 1 },
    { id: 'en6-q-16', q: 'Complète : Where ___ your daughter live?', choices: ['do', 'is', 'does', 'are'], answer: 2, topic: 'Mots interrogatifs', sec: 'en6-s-motsinterro',
      why: { 0: 'your daughter = she : il faut **does**.', 1: 'is s\'utilise avec be ; ici le verbe est live.', 3: 'are s\'utilise avec be et un sujet pluriel.' },
      explain: 'Mot interrogatif + **does** + sujet + base ? → Where **does** your daughter live? (Où habite votre fille ?)', say: 'Where does your daughter live?', level: 1 },
    { id: 'en6-q-17', q: 'Que veut dire « What do you do? » ?', choices: ['Qu\'est-ce que tu fais en ce moment ?', 'Quel est ton métier ?', 'Qu\'est-ce que tu as fait ?', 'Que veux-tu faire ?'], answer: 1, topic: 'Le travail', sec: 'en6-s-travail',
      why: { 0: 'Pour « en ce moment », on dirait What are you doing?', 2: 'C\'est une question au présent, pas au passé.', 3: '« Que veux-tu faire ? » se dirait What do you want to do?' },
      explain: '**What do you do?** = Que fais-tu dans la vie ? Quel est ton métier ? → I\'m a nurse. / I\'m retired.', say: 'What do you do?', level: 1 },
    { id: 'en6-q-18', q: 'Complète : I go to the market ___ Saturdays.', choices: ['in', 'at', 'on', 'the'], answer: 2, topic: 'Expressions de temps', sec: 'en6-s-frequence',
      why: { 0: 'in s\'utilise pour les moments de la journée (in the morning), pas pour les jours.', 1: 'at s\'utilise pour l\'heure (at seven) ou at night.', 3: 'Il faut une préposition : **on** Saturdays.' },
      explain: 'Avec un jour : **on**. → I go to the market **on** Saturdays. (Je vais au marché le samedi.)', say: 'I go to the market on Saturdays.', level: 1 },
    { id: 'en6-q-19', q: 'Complète : I often read ___ night.', choices: ['at', 'in', 'on', 'the'], answer: 0, topic: 'Expressions de temps', sec: 'en6-s-frequence',
      why: { 1: 'On dit in the morning, in the evening… mais **at night**.', 2: 'on s\'utilise avec les jours (on Sundays).', 3: 'Il faut une préposition : **at** night.' },
      explain: 'La nuit = **at night**. → I often read **at** night. (Je lis souvent la nuit.)', say: 'I often read at night.', level: 1 },
    { id: 'en6-q-20', q: 'Complète : She works ___ the morning.', choices: ['on', 'at', 'in', 'to'], answer: 2, topic: 'Expressions de temps', sec: 'en6-s-frequence',
      why: { 0: 'on s\'utilise avec les jours (on Mondays).', 1: 'at s\'utilise avec l\'heure (at nine) et at night.', 3: 'to indique une direction (go to work).' },
      explain: '**in** the morning / in the afternoon / in the evening. → She works **in** the morning. (Elle travaille le matin.)', say: 'She works in the morning.', level: 1 },
    { id: 'en6-q-21', q: 'Complète : My son ___ to work by bus.', choices: ['go', 'goes', 'gos', 'is go'], answer: 1, topic: 'Le -s : orthographe', sec: 'en6-s-orthographe',
      why: { 0: 'My son = he : il faut le -s (ici -es).', 2: 'Après **o**, on ajoute **-es** : goes.', 3: 'Pas de is devant le verbe au présent simple.' },
      explain: 'go → **goes** (+ es après o). → My son **goes** to work by bus. (Mon fils va au travail en bus.)', say: 'My son goes to work by bus.', level: 1 },
    { id: 'en6-q-22', q: 'Écoute. À quelle heure la personne se lève-t-elle d\'habitude ?', listen: true, say: 'I usually get up at seven o\'clock.', choices: ['À 11 heures', 'À 6 heures', 'À 7 heures', 'À 8 heures'], answer: 2, topic: 'Compréhension orale', sec: 'en6-s-frequence',
      why: { 0: '11 heures se dirait **eleven** o\'clock.', 1: '6 heures se dirait **six** o\'clock.', 3: '8 heures se dirait **eight** o\'clock.' },
      explain: '**I usually get up at seven o\'clock.** = D\'habitude, je me lève à sept heures.', level: 1 },
    { id: 'en6-q-23', q: 'Écoute. Qui travaille ?', listen: true, say: 'My husband is retired, and I work in a shop.', choices: ['Son mari, dans un magasin', 'La personne qui parle, dans un magasin', 'Personne : ils sont tous les deux à la retraite', 'Son mari, dans un bureau'], answer: 1, topic: 'Compréhension orale', sec: 'en6-s-travail',
      why: { 0: 'Le mari est **retired** (à la retraite) : il ne travaille plus.', 2: 'La personne dit **I work** : elle travaille.', 3: 'Le mari est retraité, et on entend **shop** (magasin), pas office (bureau).' },
      explain: '**My husband is retired, and I work in a shop.** = Mon mari est à la retraite, et moi, je travaille dans un magasin.', level: 2 },
    { id: 'en6-q-24', q: 'Écoute. Que dit-on de cette femme ?', listen: true, say: 'She never watches TV.', choices: ['Elle regarde souvent la télé.', 'Elle regarde la télé tous les soirs.', 'Elle regarde parfois la télé.', 'Elle ne regarde jamais la télé.'], answer: 3, topic: 'Compréhension orale', sec: 'en6-s-frequence',
      why: { 0: '« souvent » se dirait **often**.', 1: '« tous les soirs » se dirait **every evening**.', 2: '« parfois » se dirait **sometimes**.' },
      explain: '**She never watches TV.** = Elle ne regarde jamais la télé. (never = jamais)', level: 2 },
    { id: 'en6-q-25', q: 'Écoute. Qu\'entends-tu ?', listen: true, say: 'Does he go to work by bus?', choices: ['Une question : est-ce qu\'il va au travail en bus ?', 'Une affirmation : il va au travail en bus.', 'Une négation : il ne va pas au travail en bus.', 'Une question : est-ce que tu vas au travail en bus ?'], answer: 0, topic: 'Compréhension orale', sec: 'en6-s-questions',
      why: { 1: 'La phrase commence par **Does** : c\'est une question.', 2: 'On n\'entend pas doesn\'t : ce n\'est pas une négation.', 3: 'On entend **he** (il) et **Does**, pas you (tu).' },
      explain: '**Does he go to work by bus?** = Est-ce qu\'il va au travail en bus ? (Does au début = question avec he, she, it)', level: 2 }
  ],
  exercises: [
    // affirmatif et orthographe du -s
    { id: 'en6-x-01', prompt: 'Conjugue au présent simple : She ___ (work) in a hospital.', answers: ['works'], strict: true, topic: 'Présent simple : affirmatif', sec: 'en6-s-affirmatif',
      hint: 'She = 3e personne du singulier.',
      explain: 'Avec he/she/it : base + **s**. → She **works** in a hospital. (Elle travaille dans un hôpital.)',
      rule: 'I/you/we/they **work** · he/she/it **works**',
      mistakes: [{ text: 'work', msg: 'Avec **she**, le verbe prend un **-s** : she work**s**.' }, { text: 'is work', msg: 'Pas de **is** devant le verbe : au présent simple, on dit directement she **works**.' }],
      say: 'She works in a hospital.', level: 1 },
    { id: 'en6-x-02', prompt: 'Conjugue au présent simple : He ___ (watch) TV every evening.', answers: ['watches'], strict: true, topic: 'Le -s : orthographe', sec: 'en6-s-orthographe',
      hint: 'watch finit par ch.',
      explain: 'Après s, sh, ch, x, o : **+ es**. → He **watches** TV every evening. (Il regarde la télé tous les soirs.)',
      rule: 'Après s, sh, ch, x, o → **-es** (watches, washes, goes)',
      mistakes: [{ text: 'watchs', msg: 'Après **ch**, on ajoute **-es** : watch**es**.' }, { text: 'watch', msg: 'Avec **he**, il faut ajouter **-es** : watch**es**.' }],
      say: 'He watches TV every evening.', level: 1 },
    { id: 'en6-x-03', prompt: 'Conjugue au présent simple : My granddaughter ___ (study) English.', answers: ['studies'], strict: true, topic: 'Le -s : orthographe', sec: 'en6-s-orthographe',
      hint: 'study finit par consonne + y.',
      explain: 'Consonne + y → **ies** : My granddaughter **studies** English. (Ma petite-fille étudie l\'anglais.)',
      rule: 'Consonne + y → **ies** (study → studies) · voyelle + y → s (play → plays)',
      mistakes: [{ text: 'studys', msg: 'Après une consonne (d), le **y** devient **ies** : stud**ies**.' }, { text: 'study', msg: 'My granddaughter = she : il faut le -s → **studies**.' }],
      say: 'My granddaughter studies English.', level: 1 },
    { id: 'en6-x-04', prompt: 'Conjugue au présent simple : My husband ___ (go) to the market on Saturdays.', answers: ['goes'], strict: true, topic: 'Le -s : orthographe', sec: 'en6-s-orthographe',
      hint: 'go finit par o.',
      explain: 'Après **o** : + es → **goes**. → My husband **goes** to the market on Saturdays. (Mon mari va au marché le samedi.)',
      rule: 'go → **goes** · do → **does**',
      mistakes: [{ text: 'gos', msg: 'Après **o**, on ajoute **-es** : go**es**.' }, { text: 'go', msg: 'My husband = he : il faut le -s (ici -es) → **goes**.' }],
      say: 'My husband goes to the market on Saturdays.', level: 1 },
    { id: 'en6-x-05', prompt: 'Conjugue au présent simple : She ___ (have) a shower every morning.', answers: ['has'], strict: true, topic: 'Le -s : orthographe', sec: 'en6-s-orthographe',
      hint: 'have est le seul vrai irrégulier.',
      explain: 'have → **has** avec he/she/it. → She **has** a shower every morning. (Elle prend une douche tous les matins.)',
      rule: 'I/you/we/they **have** · he/she/it **has**',
      mistakes: [{ text: 'haves', msg: '« haves » n\'existe pas : avec she, have devient **has**.' }, { text: 'have', msg: 'Avec **she**, have devient **has**.' }],
      say: 'She has a shower every morning.', level: 1 },
    { id: 'en6-x-06', prompt: 'Conjugue au présent simple : He ___ (play) golf on Sundays.', answers: ['plays'], strict: true, topic: 'Le -s : orthographe', sec: 'en6-s-orthographe',
      hint: 'Que trouve-t-on avant le y : une voyelle ou une consonne ?',
      explain: 'Voyelle + y : on ajoute juste **-s**. → He **plays** golf on Sundays. (Il joue au golf le dimanche.)',
      rule: 'Voyelle + y → **+ s** (play → plays, buy → buys)',
      mistakes: [{ text: 'plaies', msg: 'Il y a une voyelle (a) avant le y : on garde le y et on ajoute juste **-s** → play**s**.' }, { text: 'play', msg: 'Avec **he**, il faut le **-s** : play**s**.' }],
      say: 'He plays golf on Sundays.', level: 1 },
    { id: 'en6-x-07', prompt: 'Conjugue au présent simple : We ___ (live) in a small house.', answers: ['live'], strict: true, topic: 'Présent simple : affirmatif', sec: 'en6-s-affirmatif',
      hint: 'We : faut-il un -s ?',
      explain: 'Avec I, you, we, they : la **base**, sans -s. → We **live** in a small house. (Nous habitons dans une petite maison.)',
      rule: 'Le -s seulement avec he/she/it : we **live**, she **lives**',
      mistakes: [{ text: 'lives', msg: 'Le -s ne s\'ajoute qu\'avec he, she, it. Avec **we** : live.' }, { text: 'are live', msg: 'Pas de **are** devant le verbe au présent simple : we **live**.' }],
      say: 'We live in a small house.', level: 1 },
    { id: 'en6-x-08', prompt: 'Conjugue au présent simple : The shop ___ (close) at seven.', answers: ['closes'], strict: true, topic: 'Présent simple : affirmatif', sec: 'en6-s-affirmatif',
      hint: 'The shop = it.',
      explain: 'The shop = it → **closes**. → The shop **closes** at seven. (Le magasin ferme à sept heures.)',
      rule: 'Nom singulier (= he, she, it) → verbe + **s**',
      mistakes: [{ text: 'close', msg: 'The shop = **it** : il faut le -s → close**s**.' }, { text: 'is close', msg: 'Attention : « is close » veut dire « est proche » ! Le verbe fermer au présent simple : **closes**.' }],
      say: 'The shop closes at seven.', level: 1 },
    { id: 'en6-x-09', prompt: 'Conjugue au présent simple : My son ___ (finish) work at six.', answers: ['finishes'], strict: true, topic: 'Le -s : orthographe', sec: 'en6-s-orthographe',
      hint: 'finish finit par sh.',
      explain: 'Après **sh** : + es → **finishes**. → My son **finishes** work at six. (Mon fils finit le travail à six heures.)',
      rule: 'Après s, sh, ch, x, o → **-es**',
      mistakes: [{ text: 'finishs', msg: 'Après **sh**, on ajoute **-es** : finish**es**.' }, { text: 'finish', msg: 'My son = he : il faut ajouter **-es** → finish**es**.' }],
      say: 'My son finishes work at six.', level: 1 },
    { id: 'en6-x-10', prompt: 'Conjugue au présent simple : My parents ___ (do) the shopping on Fridays.', answers: ['do'], strict: true, topic: 'Présent simple : affirmatif', sec: 'en6-s-affirmatif',
      hint: 'My parents = they.',
      explain: 'My parents = they → la base, sans -s : My parents **do** the shopping on Fridays. (Mes parents font les courses le vendredi.)',
      rule: 'Sujet pluriel (they) → base sans -s',
      mistakes: [{ text: 'does', msg: 'My parents = **they** (pluriel) : pas de -s → **do**.' }, { text: 'make', msg: 'Faire les courses se dit **do** the shopping (pas make).' }],
      say: 'My parents do the shopping on Fridays.', level: 1 },
    // négatif
    { id: 'en6-x-11', prompt: 'Mets à la forme négative : I like fish.', answers: ['I don\'t like fish'], topic: 'Présent simple : négatif', sec: 'en6-s-negatif',
      hint: 'I + don\'t + base.',
      explain: 'I/you/we/they + **don\'t** + base : I **don\'t like** fish. (Je n\'aime pas le poisson.)',
      rule: 'Négation : sujet + **don\'t / doesn\'t** + base',
      mistakes: [{ text: 'I not like fish', msg: 'Il faut l\'auxiliaire : I **don\'t** like fish.' }, { text: 'I doesn\'t like fish', msg: 'Avec **I**, on utilise **don\'t** (doesn\'t va avec he, she, it).' }, { text: 'I don\'t likes fish', msg: 'Après don\'t, le verbe reste à la **base** : like.' }],
      say: 'I don\'t like fish.', level: 1 },
    { id: 'en6-x-12', prompt: 'Mets à la forme négative : She works on Mondays.', answers: ['She doesn\'t work on Mondays'], topic: 'Présent simple : négatif', sec: 'en6-s-negatif',
      hint: 'She + doesn\'t + base (sans -s).',
      explain: 'he/she/it + **doesn\'t** + base : She **doesn\'t work** on Mondays. (Elle ne travaille pas le lundi.)',
      rule: 'She works → She **doesn\'t work** (le -s passe dans does)',
      mistakes: [{ text: 'She doesn\'t works on Mondays', msg: 'Le -s est déjà dans **doesn\'t** : le verbe reste à la base → work.' }, { text: 'She don\'t work on Mondays', msg: 'Avec **she**, il faut **doesn\'t**.' }, { text: 'She isn\'t work on Mondays', msg: 'isn\'t s\'utilise avec be. Avec un autre verbe : **doesn\'t** + base.' }],
      say: 'She doesn\'t work on Mondays.', level: 1 },
    { id: 'en6-x-13', prompt: 'Mets à la forme négative : He has breakfast.', answers: ['He doesn\'t have breakfast'], topic: 'Présent simple : négatif', sec: 'en6-s-negatif',
      hint: 'has redevient have après doesn\'t.',
      explain: 'He has → He **doesn\'t have** : après doesn\'t, la base **have**. → He doesn\'t have breakfast. (Il ne prend pas de petit-déjeuner.)',
      rule: 'doesn\'t + **base** : has → doesn\'t **have**',
      mistakes: [{ text: 'He doesn\'t has breakfast', msg: 'Après doesn\'t, le verbe revient à la base : **have** (pas has).' }, { text: 'He hasn\'t breakfast', msg: 'Ici, have veut dire « prendre » : la négation se fait avec **doesn\'t** → He doesn\'t have breakfast.' }],
      say: 'He doesn\'t have breakfast.', level: 2 },
    { id: 'en6-x-14', prompt: 'Mets à la forme négative : They watch TV in the evening.', answers: ['They don\'t watch TV in the evening', 'They don\'t watch television in the evening'], topic: 'Présent simple : négatif', sec: 'en6-s-negatif',
      hint: 'They + don\'t + base.',
      explain: 'they + **don\'t** + base : They **don\'t watch** TV in the evening. (Ils ne regardent pas la télé le soir.)',
      rule: 'I/you/we/they + **don\'t** + base',
      mistakes: [{ text: 'They doesn\'t watch TV in the evening', msg: 'Avec **they**, on utilise **don\'t**.' }, { text: 'They not watch TV in the evening', msg: 'Il faut l\'auxiliaire : They **don\'t** watch…' }],
      say: 'They don\'t watch TV in the evening.', level: 1 },
    { id: 'en6-x-15', prompt: 'Complète avec don\'t ou doesn\'t : My wife ___ drink coffee.', answers: ['doesn\'t'], strict: true, topic: 'Présent simple : négatif', sec: 'en6-s-negatif',
      hint: 'My wife = she.',
      explain: 'My wife = she → **doesn\'t**. → My wife **doesn\'t** drink coffee. (Ma femme ne boit pas de café.)',
      rule: 'he/she/it → **doesn\'t** · I/you/we/they → **don\'t**',
      mistakes: [{ text: 'don\'t', msg: 'My wife = **she** : il faut **doesn\'t**.' }, { text: 'isn\'t', msg: 'isn\'t s\'utilise avec be. Devant un verbe comme drink : **doesn\'t**.' }],
      say: 'My wife doesn\'t drink coffee.', level: 1 },
    // questions et réponses courtes
    { id: 'en6-x-16', prompt: 'Pose la question : You live in London. → ___ ?', answers: ['Do you live in London'], topic: 'Présent simple : questions', sec: 'en6-s-questions',
      hint: 'Do + sujet + base ?',
      explain: 'Question : **Do** + you + base ? → **Do you live** in London? (Vous habitez à Londres ?)',
      rule: 'Question : **Do / Does** + sujet + base ?',
      mistakes: [{ text: 'Are you live in London', msg: 'Are s\'utilise avec be. Avec un autre verbe, la question se fait avec **Do** : Do you live…?' }, { text: 'Live you in London', msg: 'En anglais, on n\'inverse pas le verbe : on ajoute **Do** devant le sujet → Do you live…?' }],
      say: 'Do you live in London?', level: 1 },
    { id: 'en6-x-17', prompt: 'Pose la question : She speaks English. → ___ ?', answers: ['Does she speak English'], topic: 'Présent simple : questions', sec: 'en6-s-questions',
      hint: 'Does + she + base (sans -s) ?',
      explain: '**Does** + she + **base** ? → **Does she speak** English? (Est-ce qu\'elle parle anglais ?)',
      rule: 'She speaks → **Does she speak**…? (le -s passe dans does)',
      mistakes: [{ text: 'Does she speaks English', msg: 'Le -s est déjà dans **Does** : le verbe reste à la base → speak.' }, { text: 'Do she speak English', msg: 'Avec **she**, il faut **Does**.' }, { text: 'Speaks she English', msg: 'On n\'inverse pas le verbe : on ajoute **Does** → Does she speak English?' }],
      say: 'Does she speak English?', level: 1 },
    { id: 'en6-x-18', prompt: 'Pose la question : Your son goes to work by car. → ___ ?', answers: ['Does your son go to work by car'], topic: 'Présent simple : questions', sec: 'en6-s-questions',
      hint: 'Your son = he.',
      explain: '**Does** + your son + **go** ? → **Does your son go** to work by car? (Votre fils va-t-il au travail en voiture ?)',
      rule: 'goes → **Does** + sujet + **go** ?',
      mistakes: [{ text: 'Does your son goes to work by car', msg: 'Après Does, la base : **go** (pas goes).' }, { text: 'Is your son go to work by car', msg: 'Is s\'utilise avec be. Ici : **Does** your son go…?' }, { text: 'Do your son go to work by car', msg: 'Your son = he : il faut **Does**.' }],
      say: 'Does your son go to work by car?', level: 1 },
    { id: 'en6-x-19', prompt: 'Complète avec Do ou Does : ___ your children live near you?', answers: ['Do'], strict: true, topic: 'Présent simple : questions', sec: 'en6-s-questions',
      hint: 'your children = they.',
      explain: 'your children = they → **Do**. → **Do** your children live near you? (Vos enfants habitent près de chez vous ?)',
      rule: '**Do** + I/you/we/they · **Does** + he/she/it',
      mistakes: [{ text: 'Does', msg: 'your children = **they** (pluriel) : il faut **Do**.' }, { text: 'Are', msg: 'Are s\'utilise avec be. Devant un verbe comme live : **Do**.' }],
      say: 'Do your children live near you?', level: 1 },
    { id: 'en6-x-20', prompt: 'Réponds « oui » avec une réponse courte : Do you like your job?', answers: ['Yes, I do'], topic: 'Réponses courtes', sec: 'en6-s-questions',
      hint: 'Yes + I + l\'auxiliaire de la question.',
      explain: 'On reprend l\'auxiliaire : Do you…? → **Yes, I do.**',
      rule: 'Do you…? → **Yes, I do.** / **No, I don\'t.**',
      mistakes: [{ text: 'Yes, I like', msg: 'Dans une réponse courte, on reprend l\'auxiliaire **do** : Yes, I **do**.' }, { text: 'Yes, I am', msg: 'La question commence par **Do** : on répond avec do → Yes, I **do**.' }],
      say: 'Yes, I do.', level: 1 },
    { id: 'en6-x-21', prompt: 'Réponds « non » avec une réponse courte : Does your husband cook?', answers: ['No, he doesn\'t'], topic: 'Réponses courtes', sec: 'en6-s-questions',
      hint: 'your husband = he.',
      explain: 'Does…? → **No, he doesn\'t.**',
      rule: 'Does he…? → **Yes, he does.** / **No, he doesn\'t.**',
      mistakes: [{ text: 'No, he don\'t', msg: 'Avec **he**, il faut **doesn\'t**.' }, { text: 'No, he isn\'t', msg: 'La question est posée avec **Does** : on répond avec doesn\'t.' }],
      say: 'No, he doesn\'t.', level: 1 },
    // mots interrogatifs
    { id: 'en6-x-22', prompt: 'Remets dans l\'ordre : time / do / what / get up / you / ?', answers: ['What time do you get up'], topic: 'Mots interrogatifs', sec: 'en6-s-motsinterro',
      hint: 'Mot interrogatif + do + sujet + base.',
      explain: '**What time** + **do** + you + **get up** ? → What time do you get up? (À quelle heure vous levez-vous ?)',
      rule: 'Mot interrogatif + **do / does** + sujet + base ?',
      mistakes: [{ text: 'What time you do get up', msg: 'L\'auxiliaire **do** se place **avant** le sujet : What time **do you** get up?' }, { text: 'Do you get up what time', msg: 'Le mot interrogatif se place **en premier** : **What time** do you get up?' }],
      say: 'What time do you get up?', level: 1 },
    { id: 'en6-x-23', prompt: 'Traduis : Où travaille ta fille ?', answers: ['Where does your daughter work'], topic: 'Mots interrogatifs', sec: 'en6-s-motsinterro',
      hint: 'Where + does + your daughter + base ?',
      explain: '**Where does** your daughter **work**? (ta fille = she → does)',
      rule: 'Where / What / When + **does** + he/she + base ?',
      mistakes: [{ text: 'Where works your daughter', msg: 'On n\'inverse pas le verbe : il faut l\'auxiliaire → Where **does** your daughter **work**?' }, { text: 'Where does your daughter works', msg: 'Après does, la base : **work** (pas works).' }, { text: 'Where do your daughter work', msg: 'your daughter = she : il faut **does**.' }],
      say: 'Where does your daughter work?', level: 2 },
    // fréquence
    { id: 'en6-x-24', prompt: 'Remets dans l\'ordre : always / I / coffee / drink / in the morning', answers: ['I always drink coffee in the morning', 'In the morning I always drink coffee'], topic: 'Adverbes de fréquence', sec: 'en6-s-frequence',
      hint: 'L\'adverbe se place avant le verbe.',
      explain: 'Adverbe de fréquence **avant** le verbe : I **always drink** coffee in the morning. (Je bois toujours du café le matin.)',
      rule: 'Sujet + **always / often / never…** + verbe',
      mistakes: [{ text: 'I drink always coffee in the morning', msg: 'always se place **avant** le verbe : I **always drink**…' }, { text: 'Always I drink coffee in the morning', msg: 'always se place juste **avant** le verbe, pas en tête de phrase : I **always** drink…' }],
      say: 'I always drink coffee in the morning.', level: 1 },
    { id: 'en6-x-25', prompt: 'Ajoute « never » à la phrase : She is late.', answers: ['She is never late'], topic: 'Adverbes de fréquence', sec: 'en6-s-frequence',
      hint: 'Avec be, l\'adverbe se place après.',
      explain: 'Avec **be**, l\'adverbe se place **après** : She **is never** late. (Elle n\'est jamais en retard.)',
      rule: 'Avec be : sujet + **be** + adverbe (I\'m always, she is never)',
      mistakes: [{ text: 'She never is late', msg: 'Avec le verbe **be**, l\'adverbe se place **après** : She **is never** late.' }, { text: 'She is late never', msg: 'never se place juste **après** is : She is **never** late.' }],
      say: 'She is never late.', level: 1 },
    { id: 'en6-x-26', prompt: 'Ajoute « usually » à la phrase : We have dinner at eight.', answers: ['We usually have dinner at eight', 'Usually we have dinner at eight'], topic: 'Adverbes de fréquence', sec: 'en6-s-frequence',
      hint: 'have est un verbe ordinaire ici.',
      explain: 'Avant le verbe ordinaire : We **usually have** dinner at eight. (D\'habitude, nous dînons à huit heures.)',
      rule: 'Adverbe de fréquence **avant** le verbe (sauf be)',
      mistakes: [{ text: 'We have usually dinner at eight', msg: 'usually se place **avant** le verbe : We **usually have** dinner…' }, { text: 'We usually has dinner at eight', msg: 'Avec **we**, c\'est **have** (has va avec he, she, it).' }],
      say: 'We usually have dinner at eight.', level: 1 },
    { id: 'en6-x-27', prompt: 'Traduis : Je me lève toujours tôt.', answers: ['I always get up early'], topic: 'Adverbes de fréquence', sec: 'en6-s-frequence',
      hint: 'se lever = get up ; tôt = early',
      explain: '**I always get up early.** L\'adverbe always se place avant le verbe get up.',
      rule: 'Sujet + **always** + verbe + complément',
      mistakes: [{ text: 'I get up always early', msg: 'always se place **avant** le verbe : I **always get up** early.' }, { text: 'I always get up soon', msg: '**soon** = bientôt. Tôt = **early**.' }],
      say: 'I always get up early.', level: 1 },
    { id: 'en6-x-28', prompt: 'Traduis : Mon fils ne regarde jamais la télé.', answers: ['My son never watches TV', 'My son never watches television', 'My son doesn\'t ever watch TV'], topic: 'Adverbes de fréquence', sec: 'en6-s-frequence',
      hint: 'never est déjà négatif ; my son = he.',
      explain: '**My son never watches TV.** never est déjà négatif (pas de doesn\'t), et my son = he → watch**es**.',
      rule: '**never** + verbe affirmatif (pas de don\'t / doesn\'t)',
      mistakes: [{ text: 'My son doesn\'t never watch TV', msg: 'Double négation ! **never** est déjà négatif : My son **never watches** TV.' }, { text: 'My son never watch TV', msg: 'My son = he : le verbe prend **-es** → never watch**es**.' }, { text: 'My son doesn\'t watch TV never', msg: 'Double négation ! **never** suffit, et il se place **avant** le verbe : My son **never watches** TV.' }],
      say: 'My son never watches TV.', level: 2 },
    // expressions de temps et travail
    { id: 'en6-x-29', prompt: 'Complète avec in, on ou at : I don\'t work ___ Sundays.', answers: ['on'], strict: true, topic: 'Expressions de temps', sec: 'en6-s-frequence',
      hint: 'Devant un jour de la semaine.',
      explain: 'Avec un jour : **on**. → I don\'t work **on** Sundays. (Je ne travaille pas le dimanche.)',
      rule: '**on** + jour · **in** the morning · **at** night · **at** seven',
      mistakes: [{ text: 'in', msg: 'in s\'utilise pour les moments de la journée (in the morning). Avec un jour : **on**.' }, { text: 'at', msg: 'at s\'utilise avec l\'heure (at seven) et at night. Avec un jour : **on**.' }],
      say: 'I don\'t work on Sundays.', level: 1 },
    { id: 'en6-x-30', prompt: 'Traduis : Mon mari est à la retraite.', answers: ['My husband is retired', 'My husband\'s retired'], topic: 'Le travail', sec: 'en6-s-travail',
      hint: 'à la retraite = retired (adjectif)',
      explain: '**My husband is retired.** On utilise be + l\'adjectif retired.',
      rule: 'Être à la retraite = **be retired** (I\'m retired)',
      mistakes: [{ text: 'My husband is at the retirement', msg: 'On ne traduit pas « à la retraite » mot à mot : on utilise l\'adjectif **retired** → My husband is retired.' }, { text: 'My husband is retraited', msg: '« retraited » n\'existe pas : retraité = **retired**.' }],
      say: 'My husband is retired.', level: 1 }
  ]
});
