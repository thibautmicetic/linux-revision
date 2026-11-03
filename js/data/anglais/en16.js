/* Anglais — chapitre 16 : Chez le médecin (rendez-vous, symptômes, I've had a cough for three days, have to / don't have to / must / mustn't / should, la pharmacie, les urgences) */
APP.registerChapter({
  id: 'en16', subject: 'anglais', num: 16, tier: 2,
  title: 'Chez le médecin',
  subtitle: 'prendre rendez-vous · décrire ses symptômes · « for three days » · have to, mustn\'t · la pharmacie, les urgences',
  vocabSec: 'en16-s-vocab',
  sections: [
    {
      id: 'en16-s-rdv', title: 'Prendre rendez-vous',
      html: `
<p>Au Royaume-Uni, on va d'abord voir son <b>médecin généraliste</b>, le <span class="say">GP</span> (« dji-pi »). Son cabinet s'appelle <span class="say">the surgery</span> (ou <span class="say">the health centre</span>). Pour le voir, il faut presque toujours un <b>rendez-vous</b> : <span class="say">an appointment</span>.</p>
<h3>Au téléphone ou à l'accueil</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">I'd like to make an appointment, please.</span></td><td>Je voudrais prendre rendez-vous, s'il vous plaît.</td></tr>
<tr><td><span class="say">I'd like to see a doctor.</span></td><td>Je voudrais voir un médecin.</td></tr>
<tr><td><span class="say">Can I see a doctor today?</span></td><td>Est-ce que je peux voir un médecin aujourd'hui ?</td></tr>
<tr><td><span class="say">What's the earliest appointment?</span></td><td>Quel est le premier rendez-vous possible ? (le plus tôt)</td></tr>
<tr><td><span class="say">I've got an appointment with Dr Shaw at ten.</span></td><td>J'ai rendez-vous avec le docteur Shaw à dix heures.</td></tr>
<tr><td><span class="say">I'm on holiday here.</span></td><td>Je suis ici en vacances.</td></tr></table>
<h3>Ce que demande la secrétaire</h3>
<ul>
<li><span class="say">Is it urgent?</span> — C'est urgent ?</li>
<li><span class="say">Can you come on Tuesday at half past nine?</span> — Pouvez-vous venir mardi à neuf heures et demie ?</li>
<li><span class="say">What's your name and date of birth?</span> — Votre nom et votre date de naissance ?</li>
<li><span class="say">Have you been here before?</span> — Vous êtes déjà venu ici ? (present perfect : l'expérience)</li>
<li><span class="say">Please take a seat. The doctor will see you soon.</span> — Asseyez-vous. Le médecin va vous recevoir bientôt.</li>
</ul>
<div class="callout key"><b>À retenir</b> Prendre rendez-vous = <span class="say">make an appointment</span> (ou <span class="say">book an appointment</span>).</div>
<div class="callout warn"><b>Pièges</b> On ne dit pas « take an appointment ». Et un « rendez-vous » chez le médecin n'est jamais « a rendez-vous » : c'est <span class="say">an appointment</span>.<br><span class="say">surgery</span> veut aussi dire « la chirurgie » (une opération). Mais avec un rendez-vous chez le GP, <span class="say">the surgery</span> = le cabinet médical.</div>
<div class="callout tip"><b>À savoir</b> En Angleterre, pour un conseil médical qui n'est pas une urgence, on peut appeler le <b>111</b>. Pour une urgence : le <b>999</b> (ou le 112).</div>`
    },
    {
      id: 'en16-s-symptomes', title: 'Décrire ses symptômes',
      html: `
<p>Le médecin commence souvent par <span class="say">What's the matter?</span> ou <span class="say">What are your symptoms?</span> (Quels sont vos symptômes ?). Voici les trois façons de répondre.</p>
<h3>1. I've got (= I have) + un nom</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">I've got a cough.</span></td><td>Je tousse. (J'ai de la toux.)</td></tr>
<tr><td><span class="say">I've got a cold.</span></td><td>J'ai un rhume.</td></tr>
<tr><td><span class="say">I've got flu.</span></td><td>J'ai la grippe.</td></tr>
<tr><td><span class="say">I've got a temperature.</span></td><td>J'ai de la fièvre.</td></tr>
<tr><td><span class="say">I've got a runny nose.</span></td><td>J'ai le nez qui coule.</td></tr>
<tr><td><span class="say">I've got a rash on my arm.</span></td><td>J'ai des boutons (une éruption) sur le bras.</td></tr>
<tr><td><span class="say">I've got a pain in my chest.</span></td><td>J'ai une douleur dans la poitrine.</td></tr>
<tr><td><span class="say">I've got earache.</span></td><td>J'ai mal à l'oreille.</td></tr></table>
<h3>2. I feel + un adjectif</h3>
<ul>
<li><span class="say">I feel sick.</span> — J'ai mal au cœur, j'ai la nausée.</li>
<li><span class="say">I feel dizzy.</span> — J'ai la tête qui tourne.</li>
<li><span class="say">I feel tired all the time.</span> — Je suis tout le temps fatigué.</li>
<li><span class="say">I feel better today.</span> — Je me sens mieux aujourd'hui.</li>
</ul>
<h3>3. Une partie du corps + hurts / is sore / is swollen</h3>
<ul>
<li><span class="say">My knee hurts.</span> — J'ai mal au genou.</li>
<li><span class="say">My eyes are sore.</span> — J'ai les yeux irrités.</li>
<li><span class="say">My ankle is swollen.</span> — J'ai la cheville enflée. (<span class="say">I've sprained my ankle.</span> — Je me suis foulé la cheville.)</li>
<li><span class="say">It hurts when I walk.</span> — J'ai mal quand je marche.</li>
</ul>
<h3>Ce qui vient d'arriver : le present perfect</h3>
<p><span class="say">I've hurt my back.</span> — Je me suis fait mal au dos. · <span class="say">I've cut my finger.</span> — Je me suis coupé le doigt. · <span class="say">I can't sleep.</span> — Je n'arrive pas à dormir.</p>
<p>Et à dire absolument : <span class="say">I'm allergic to penicillin.</span> — Je suis allergique à la pénicilline.</p>
<div class="callout key"><b>À retenir</b> <b>I've got</b> + nom (a cough, a cold) · <b>I feel</b> + adjectif (sick, dizzy) · <b>My …</b> + <b>hurts</b> / <b>is sore</b> / <b>is swollen</b>.</div>
<div class="callout warn"><b>Pièges</b>
<ul>
<li><span class="say">I'm cold.</span> = j'ai froid ; <span class="say">I've got a cold.</span> = j'ai un rhume.</li>
<li>« J'ai de la fièvre » = <span class="say">I've got a temperature</span> (ou <span class="say">a fever</span>), avec <b>a</b>.</li>
<li>En anglais britannique, <span class="say">I feel sick</span> veut surtout dire « j'ai la nausée ». Pour « je suis malade » : <span class="say">I'm ill</span> ou <span class="say">I don't feel well</span>.</li>
</ul></div>`
    },
    {
      id: 'en16-s-depuis', title: 'Depuis combien de temps ? I\'ve had a cough for three days',
      html: `
<p>Le médecin veut toujours savoir <b>depuis combien de temps</b> tu as un symptôme. Attention, l'anglais ne fonctionne pas du tout comme le français !</p>
<p>En français : présent + <b>depuis</b> : « Je tousse depuis trois jours. »<br>En anglais : <b>present perfect</b> (have / has + participe passé) + <span class="say">for</span> + une durée. Le problème a commencé dans le passé et dure encore aujourd'hui.</p>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">I've had a cough for three days.</span></td><td>Je tousse depuis trois jours.</td></tr>
<tr><td><span class="say">I've had this pain for two weeks.</span></td><td>J'ai cette douleur depuis deux semaines.</td></tr>
<tr><td><span class="say">She has been ill for a week.</span></td><td>Elle est malade depuis une semaine.</td></tr>
<tr><td><span class="say">I haven't slept well for three nights.</span></td><td>Je dors mal depuis trois nuits.</td></tr>
<tr><td><span class="say">We've been here for two days.</span></td><td>Nous sommes ici depuis deux jours.</td></tr></table>
<p>Les deux participes les plus utiles : <span class="say">had</span> (de have : avoir) et <span class="say">been</span> (de be : être).</p>
<h3>La question du médecin</h3>
<ul>
<li><span class="say">How long have you had this cough?</span> — Depuis combien de temps avez-vous cette toux ?</li>
<li><span class="say">How long have you been ill?</span> — Depuis combien de temps êtes-vous malade ?</li>
<li>Réponse courte : <span class="say">For three days.</span> · <span class="say">For about a week.</span> · <span class="say">For a long time.</span></li>
</ul>
<div class="callout key"><b>À retenir</b> « depuis » + une durée = <b>for</b> + present perfect : <span class="say">I've had it for a week.</span> Question : <span class="say">How long have you had it?</span></div>
<div class="callout warn"><b>Pièges</b>
<ul>
<li>« I have a cough since three days » est faux deux fois : il faut le present perfect et <b>for</b> → <span class="say">I've had a cough for three days.</span></li>
<li>« How long do you have this cough? » est faux → <span class="say">How long have you had this cough?</span></li>
<li>Avec le prétérit, <span class="say">for</span> veut dire « pendant » (c'est fini) : <span class="say">I was in hospital for a week.</span> — J'ai été à l'hôpital pendant une semaine.</li>
</ul></div>
<div class="callout info"><b>Et « depuis lundi » ?</b> Avec un point de départ (un jour, une date), on utilise <span class="say">since</span> : <span class="say">I've had a temperature since Monday.</span> Tu le travailleras en détail au chapitre 17.</div>`
    },
    {
      id: 'en16-s-obligation', title: 'Obligation et interdiction : have to, must, mustn\'t, don\'t have to',
      html: `
<p>Chez le médecin et à la pharmacie, on entend beaucoup d'obligations, d'interdictions et de conseils. Tu connais déjà <span class="say">must</span> et <span class="say">should</span> (chapitre 11). Voici le tableau complet.</p>
<table><tr><th>Sens</th><th>Anglais</th><th>Exemple</th></tr>
<tr><td>obligation</td><td><span class="say">have to</span> / <span class="say">must</span></td><td><span class="say">You have to take these tablets.</span><br>Vous devez prendre ces comprimés.<br><span class="say">You must rest.</span><br>Vous devez vous reposer.</td></tr>
<tr><td>interdiction</td><td><span class="say">mustn't</span></td><td><span class="say">You mustn't drink alcohol.</span><br>Vous ne devez pas boire d'alcool. (c'est interdit)</td></tr>
<tr><td>pas nécessaire</td><td><span class="say">don't have to</span></td><td><span class="say">You don't have to come back.</span><br>Vous n'êtes pas obligé de revenir.</td></tr>
<tr><td>conseil</td><td><span class="say">should</span> / <span class="say">shouldn't</span></td><td><span class="say">You should drink a lot of water.</span><br>Vous devriez boire beaucoup d'eau.<br><span class="say">You shouldn't smoke.</span><br>Vous ne devriez pas fumer.</td></tr></table>
<h3>have to se conjugue comme un verbe normal</h3>
<ul>
<li>Avec he / she / it : <span class="say">She has to stay in bed.</span> — Elle doit rester au lit.</li>
<li>Question avec do / does : <span class="say">Do I have to come back?</span> — <span class="say">Yes, you do.</span> / <span class="say">No, you don't.</span></li>
<li>Négation : <span class="say">He doesn't have to take antibiotics.</span> — Il n'est pas obligé de prendre des antibiotiques.</li>
<li>Au passé : <span class="say">had to</span> : <span class="say">I had to go to hospital.</span> — J'ai dû aller à l'hôpital. (must n'a pas de passé)</li>
</ul>
<p><span class="say">must</span>, lui, ne change jamais : <span class="say">he must</span>, pas de do. On l'entend souvent dans la bouche du médecin, pour une obligation forte.</p>
<div class="callout key"><b>À retenir</b> <b>mustn't</b> = interdit · <b>don't have to</b> = pas obligé. Ce n'est pas du tout la même chose !</div>
<div class="callout warn"><b>Pièges</b>
<ul>
<li><span class="say">You mustn't drive.</span> = vous n'avez pas le droit de conduire. <span class="say">You don't have to drive.</span> = vous n'êtes pas obligé de conduire (si vous voulez, vous pouvez).</li>
<li><span class="say">He has to</span> (avec -s), pas « he have to ».</li>
<li>Pas de « don't must » ni « Do I must…? » : → <span class="say">mustn't</span>, <span class="say">Do I have to…?</span></li>
</ul></div>`
    },
    {
      id: 'en16-s-pharmacie', title: 'À la pharmacie',
      html: `
<p>Au Royaume-Uni, la pharmacie s'appelle souvent <span class="say">the chemist's</span>, et le pharmacien <span class="say">the pharmacist</span>. Il donne beaucoup de conseils : n'hésite pas à lui parler avant d'aller chez le médecin.</p>
<h3>Les médicaments</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">a prescription</span></td><td>une ordonnance</td></tr>
<tr><td><span class="say">a tablet</span> (= <span class="say">a pill</span>)</td><td>un comprimé</td></tr>
<tr><td><span class="say">a painkiller</span></td><td>un antidouleur (paracétamol, ibuprofène…)</td></tr>
<tr><td><span class="say">cough syrup</span></td><td>du sirop pour la toux</td></tr>
<tr><td><span class="say">a cream</span></td><td>une crème, une pommade</td></tr>
<tr><td><span class="say">a plaster</span></td><td>un pansement (adhésif)</td></tr>
<tr><td><span class="say">antibiotics</span></td><td>des antibiotiques (seulement sur ordonnance)</td></tr></table>
<h3>Demander et comprendre</h3>
<ul>
<li><span class="say">Do you have anything for a cough?</span> — Avez-vous quelque chose contre la toux ?</li>
<li><span class="say">Can I get this without a prescription?</span> — Puis-je avoir ceci sans ordonnance ?</li>
<li><span class="say">I'm afraid you need a prescription for that.</span> — Malheureusement, il vous faut une ordonnance pour ça.</li>
<li><span class="say">How often should I take it?</span> — Je dois le prendre combien de fois ?</li>
<li><span class="say">Take two tablets twice a day, after meals.</span> — Prenez deux comprimés deux fois par jour, après les repas.</li>
<li><span class="say">Don't take more than eight tablets a day.</span> — Ne prenez pas plus de huit comprimés par jour.</li>
<li><span class="say">It can make you tired.</span> — Il peut vous fatiguer.</li>
<li><span class="say">Are there any side effects?</span> — Est-ce qu'il y a des effets secondaires ?</li>
</ul>
<h3>Combien de fois ?</h3>
<p><span class="say">once a day</span> (une fois par jour) · <span class="say">twice a day</span> (deux fois par jour) · <span class="say">three times a day</span> (trois fois par jour) · <span class="say">every four hours</span> (toutes les quatre heures) · <span class="say">before meals</span> / <span class="say">after meals</span> (avant / après les repas)</p>
<div class="callout key"><b>À retenir</b> <b>once</b>, <b>twice</b>, puis <b>three times, four times…</b> + <b>a day</b>. Quelque chose contre… = something <b>for</b>… (<span class="say">something for a headache</span>).</div>
<div class="callout warn"><b>Faux amis</b> L'ordonnance = <span class="say">a prescription</span> (pas « an order », qui est une commande ; pas « a recipe », qui est une recette de cuisine ; pas « a receipt », qui est un ticket de caisse). Et « contre la toux » = <span class="say">for a cough</span>, pas « against ».</div>`
    },
    {
      id: 'en16-s-urgences', title: 'Les urgences',
      html: `
<p>En cas d'urgence au Royaume-Uni, on appelle le <b>999</b> (ou le <b>112</b>). À l'hôpital, le service des urgences s'appelle <span class="say">A&amp;E</span> (« éï ann i » : <span class="say">Accident and Emergency</span>). Aux États-Unis : <span class="say">the emergency room</span> (ER).</p>
<h3>Dire ce qui vient d'arriver : le present perfect</h3>
<ul>
<li><span class="say">My husband has fainted!</span> — Mon mari s'est évanoui !</li>
<li><span class="say">She has fallen and she can't get up.</span> — Elle est tombée et elle n'arrive pas à se relever.</li>
<li><span class="say">He has cut his hand. It's bleeding a lot.</span> — Il s'est coupé la main. Ça saigne beaucoup.</li>
<li><span class="say">I think her arm is broken.</span> — Je crois qu'elle a le bras cassé.</li>
<li><span class="say">He can't breathe!</span> — Il n'arrive pas à respirer !</li>
</ul>
<h3>Ce qu'on peut te demander</h3>
<ul>
<li><span class="say">What has happened?</span> — Que s'est-il passé ?</li>
<li><span class="say">Is he breathing?</span> — Est-ce qu'il respire ?</li>
<li><span class="say">Where does it hurt?</span> — Où avez-vous mal ?</li>
<li><span class="say">Lie down here, please.</span> — Allongez-vous ici, s'il vous plaît.</li>
<li><span class="say">You need an X-ray.</span> — Il vous faut une radio.</li>
<li><span class="say">We're going to do a blood test.</span> — Nous allons faire une prise de sang.</li>
</ul>
<div class="callout key"><b>À retenir</b> Pour ce qui vient d'arriver : <b>has / have + participe passé</b> : <span class="say">She has fainted.</span> <span class="say">He has fallen.</span> (fall, fell, fallen)</div>
<div class="callout warn"><b>Pièges</b>
<ul>
<li>« Il s'est évanoui » ne se dit pas « He is fainted » : → <span class="say">He has fainted.</span></li>
<li><span class="say">breathe</span> (respirer, le verbe) ≠ <span class="say">breath</span> (le souffle, le nom).</li>
<li>« Les urgences » ne se dit pas « the emergencies » : → <span class="say">A&amp;E</span>.</li>
</ul></div>`
    },
    {
      id: 'en16-s-vocab', title: 'Vocabulaire : symptômes, corps, médicaments, examens',
      html: `
<p>Clique sur un mot pour l'entendre. Le corps de base (head, arm, back, stomach, throat…) est au chapitre 11 : voici la suite.</p>
<h3>Les symptômes</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">a cough</span> · <span class="say">to cough</span></td><td>une toux · tousser</td></tr>
<tr><td><span class="say">to have a cold</span></td><td>avoir un rhume</td></tr>
<tr><td><span class="say">flu</span></td><td>la grippe</td></tr>
<tr><td><span class="say">a temperature</span></td><td>de la fièvre (mot à mot : une température)</td></tr>
<tr><td><span class="say">to sneeze</span></td><td>éternuer</td></tr>
<tr><td><span class="say">a runny nose</span></td><td>le nez qui coule</td></tr>
<tr><td><span class="say">sore</span></td><td>douloureux, irrité</td></tr>
<tr><td><span class="say">a pain</span></td><td>une douleur</td></tr>
<tr><td><span class="say">dizzy</span></td><td>étourdi, qui a la tête qui tourne</td></tr>
<tr><td><span class="say">to feel sick</span></td><td>avoir mal au cœur, avoir la nausée</td></tr>
<tr><td><span class="say">a rash</span></td><td>des boutons, une éruption</td></tr>
<tr><td><span class="say">swollen</span></td><td>enflé, gonflé</td></tr></table>
<h3>Problèmes et urgences</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">to bleed</span></td><td>saigner</td></tr>
<tr><td><span class="say">to sprain</span> · <span class="say">broken</span></td><td>se fouler · cassé</td></tr>
<tr><td><span class="say">allergic to</span></td><td>allergique à</td></tr>
<tr><td><span class="say">to faint</span></td><td>s'évanouir</td></tr>
<tr><td><span class="say">to breathe</span></td><td>respirer</td></tr>
<tr><td><span class="say">serious</span></td><td>grave</td></tr>
<tr><td><span class="say">food poisoning</span></td><td>une intoxication alimentaire</td></tr>
<tr><td><span class="say">blood pressure</span></td><td>la tension (artérielle)</td></tr></table>
<h3>Le corps (suite)</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">a knee</span> · <span class="say">an ankle</span></td><td>un genou · une cheville</td></tr>
<tr><td><span class="say">a wrist</span> · <span class="say">a finger</span></td><td>un poignet · un doigt</td></tr>
<tr><td><span class="say">a shoulder</span> · <span class="say">the neck</span></td><td>une épaule · le cou</td></tr>
<tr><td><span class="say">the chest</span> · <span class="say">an ear</span></td><td>la poitrine · une oreille</td></tr></table>
<h3>À la pharmacie</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">the pharmacist</span></td><td>le pharmacien, la pharmacienne</td></tr>
<tr><td><span class="say">a prescription</span></td><td>une ordonnance</td></tr>
<tr><td><span class="say">a tablet</span> · <span class="say">a painkiller</span></td><td>un comprimé · un antidouleur</td></tr>
<tr><td><span class="say">a cream</span> · <span class="say">cough syrup</span></td><td>une crème · du sirop pour la toux</td></tr>
<tr><td><span class="say">a plaster</span></td><td>un pansement</td></tr>
<tr><td><span class="say">antibiotics</span></td><td>des antibiotiques</td></tr>
<tr><td><span class="say">a side effect</span></td><td>un effet secondaire</td></tr>
<tr><td><span class="say">once</span> · <span class="say">twice</span></td><td>une fois · deux fois</td></tr></table>
<h3>Chez le médecin, à l'hôpital</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="say">an appointment</span></td><td>un rendez-vous</td></tr>
<tr><td><span class="say">a GP</span></td><td>un médecin généraliste</td></tr>
<tr><td><span class="say">the surgery</span></td><td>le cabinet médical (UK)</td></tr>
<tr><td><span class="say">to examine</span></td><td>examiner, ausculter</td></tr>
<tr><td><span class="say">an X-ray</span></td><td>une radio</td></tr>
<tr><td><span class="say">a blood test</span></td><td>une prise de sang</td></tr>
<tr><td><span class="say">an injection</span></td><td>une piqûre</td></tr>
<tr><td><span class="say">A&amp;E</span></td><td>les urgences (à l'hôpital)</td></tr>
<tr><td><span class="say">to lie down</span></td><td>s'allonger</td></tr>
<tr><td><span class="say">to get better</span></td><td>aller mieux, guérir</td></tr></table>
<div class="callout warn"><b>Faux amis</b> <span class="say">serious</span> = grave (<span class="say">Is it serious?</span> — C'est grave ?). <span class="say">a plaster</span> = un pansement (et aussi le plâtre). <span class="say">a cream</span> = une crème pour la peau.</div>`
    },
    {
      id: 'en16-s-pieges', title: 'Les pièges des francophones',
      html: `
<ul>
<li><b>Prendre rendez-vous</b> : <span class="say">make an appointment</span>, pas « take a rendez-vous ».</li>
<li><b>Rhume ou froid ?</b> <span class="say">I've got a cold</span> (j'ai un rhume) ≠ <span class="say">I'm cold</span> (j'ai froid).</li>
<li><b>Fièvre</b> : <span class="say">I've got a temperature</span>, avec <b>a</b>.</li>
<li><b>Depuis</b> + durée : <span class="say">I've had a cough for three days</span>, pas « I have a cough since three days ».</li>
<li><b>Depuis combien de temps ?</b> : <span class="say">How long have you had it?</span>, pas « How long do you have it? ».</li>
<li><b>mustn't ≠ don't have to</b> : <span class="say">You mustn't drive</span> (interdit) · <span class="say">You don't have to come back</span> (pas obligé).</li>
<li><b>have to avec he / she</b> : <span class="say">She has to rest.</span></li>
<li><b>Contre la toux</b> : <span class="say">something for a cough</span>, pas « against ».</li>
<li><b>L'ordonnance</b> : <span class="say">a prescription</span>, pas « an order ».</li>
<li><b>Il s'est évanoui</b> : <span class="say">He has fainted</span>, pas « He is fainted ».</li>
<li><b>Je me suis fait mal au genou</b> : <span class="say">I've hurt my knee</span> (avec my).</li>
</ul>
<div class="callout key"><b>À retenir</b> I've got + symptôme · I feel + adjectif · I've had it <b>for</b> + durée · <b>mustn't</b> = interdit · <b>don't have to</b> = pas obligé.</div>`
    }
  ],

  words: [
    // Les symptômes
    { en: 'cough', fr: 'la toux', pos: 'n', cat: 'Les symptômes', sec: 'en16-s-symptomes', ex: 'I\'ve got a bad cough.', exFr: 'J\'ai une mauvaise toux.', level: 1, note: 'Se prononce « kof ». C\'est aussi le verbe tousser : I cough a lot.' },
    { en: 'have a cold', fr: 'avoir un rhume', pos: 'x', cat: 'Les symptômes', sec: 'en16-s-symptomes', alt: ['have got a cold'], ex: 'I\'ve got a cold, so I\'m staying at home.', exFr: 'J\'ai un rhume, alors je reste à la maison.', level: 1, note: 'Attention : I\'m cold = j\'ai froid ; I\'ve got a cold = j\'ai un rhume.' },
    { en: 'flu', fr: 'la grippe', pos: 'n', cat: 'Les symptômes', sec: 'en16-s-symptomes', alt: ['influenza'], ex: 'My wife has got flu.', exFr: 'Ma femme a la grippe.', level: 1, note: 'On dit I\'ve got flu ou I\'ve got the flu.' },
    { en: 'temperature', fr: 'la température (la fièvre)', pos: 'n', cat: 'Les symptômes', sec: 'en16-s-symptomes', alt: ['fever'], ex: 'The baby has got a temperature.', exFr: 'Le bébé a de la fièvre.', level: 1, note: 'Au Royaume-Uni, « avoir de la fièvre » = have a temperature.' },
    { en: 'sneeze', fr: 'éternuer', pos: 'v', cat: 'Les symptômes', ex: 'I sneeze all the time in spring.', exFr: 'J\'éternue tout le temps au printemps.', level: 2, note: 'Quand quelqu\'un éternue, on dit : Bless you! (À vos souhaits !)' },
    { en: 'runny nose', fr: 'le nez qui coule', pos: 'n', cat: 'Les symptômes', sec: 'en16-s-symptomes', ex: 'I\'ve got a runny nose.', exFr: 'J\'ai le nez qui coule.', level: 2 },
    { en: 'sore', fr: 'douloureux, irrité', pos: 'adj', cat: 'Les symptômes', sec: 'en16-s-symptomes', ex: 'My eyes are sore.', exFr: 'J\'ai les yeux irrités.', level: 2, note: 'a sore throat = un mal de gorge (chapitre 11).' },
    { en: 'pain', fr: 'la douleur', pos: 'n', cat: 'Les symptômes', sec: 'en16-s-symptomes', ex: 'I\'ve got a pain in my chest.', exFr: 'J\'ai une douleur dans la poitrine.', level: 1, note: 'Attention : pain ne veut pas dire « le pain » (bread) !' },
    { en: 'dizzy', fr: 'étourdi (la tête qui tourne)', pos: 'adj', cat: 'Les symptômes', sec: 'en16-s-symptomes', ex: 'I feel dizzy when I stand up.', exFr: 'J\'ai la tête qui tourne quand je me lève.', level: 2 },
    { en: 'feel sick', fr: 'avoir mal au cœur, avoir la nausée', pos: 'x', cat: 'Les symptômes', sec: 'en16-s-symptomes', alt: ['feel nauseous'], ex: 'I always feel sick on boats.', exFr: 'J\'ai toujours mal au cœur en bateau.', level: 2, note: 'En anglais britannique, I feel sick = j\'ai la nausée. Pour « je suis malade » : I\'m ill.' },
    { en: 'rash', fr: 'des boutons, une éruption', pos: 'n', cat: 'Les symptômes', sec: 'en16-s-symptomes', ex: 'He\'s got a rash on his face.', exFr: 'Il a des boutons sur le visage.', level: 3 },
    { en: 'swollen', fr: 'enflé, gonflé', pos: 'adj', cat: 'Les symptômes', sec: 'en16-s-symptomes', ex: 'My ankle is swollen.', exFr: 'J\'ai la cheville enflée.', level: 2 },
    // Problèmes et urgences
    { en: 'bleed', fr: 'saigner', pos: 'v', cat: 'Problèmes et urgences', sec: 'en16-s-urgences', ex: 'His nose is bleeding.', exFr: 'Il saigne du nez.', level: 2, note: 'Irrégulier : bleed, bled, bled. Le sang = blood.' },
    { en: 'sprain', fr: 'se fouler, se faire une entorse à', pos: 'v', cat: 'Problèmes et urgences', sec: 'en16-s-symptomes', ex: 'I\'ve sprained my ankle.', exFr: 'Je me suis foulé la cheville.', level: 2, note: 'Verbe régulier : sprain, sprained. Pour un os cassé : My arm is broken.' },
    { en: 'allergic', fr: 'allergique', pos: 'adj', cat: 'Problèmes et urgences', sec: 'en16-s-symptomes', ex: 'I\'m allergic to penicillin.', exFr: 'Je suis allergique à la pénicilline.', level: 2, note: 'allergique à = allergic TO. Accent sur la 2e syllabe : « eu-LEU-djik ».' },
    { en: 'faint', fr: 's\'évanouir', pos: 'v', cat: 'Problèmes et urgences', sec: 'en16-s-urgences', alt: ['pass out'], ex: 'She has fainted!', exFr: 'Elle s\'est évanouie !', level: 2 },
    { en: 'breathe', fr: 'respirer', pos: 'v', cat: 'Problèmes et urgences', sec: 'en16-s-urgences', ex: 'Breathe slowly.', exFr: 'Respirez lentement.', level: 2, note: 'Le verbe breathe (« briiz », avec un th doux) ≠ le nom breath (le souffle, « brèss »).' },
    { en: 'serious', fr: 'grave', pos: 'adj', cat: 'Problèmes et urgences', ex: 'Don\'t worry, it\'s not serious.', exFr: 'Ne vous inquiétez pas, ce n\'est pas grave.', level: 1, note: 'Faux ami : serious = grave (et aussi sérieux pour une personne).' },
    { en: 'food poisoning', fr: 'l\'intoxication alimentaire', pos: 'n', cat: 'Problèmes et urgences', ex: 'I think I\'ve got food poisoning.', exFr: 'Je crois que j\'ai une intoxication alimentaire.', level: 3 },
    { en: 'blood pressure', fr: 'la tension (artérielle)', pos: 'n', cat: 'Problèmes et urgences', ex: 'I\'ve got high blood pressure.', exFr: 'J\'ai de la tension (de l\'hypertension).', level: 2, note: 'high blood pressure = l\'hypertension.' },
    // Le corps (suite)
    { en: 'knee', fr: 'le genou', pos: 'n', cat: 'Le corps (suite)', sec: 'en16-s-symptomes', ex: 'My knee hurts when I walk.', exFr: 'J\'ai mal au genou quand je marche.', level: 1, note: 'Le k ne se prononce pas : « nii ».' },
    { en: 'ankle', fr: 'la cheville', pos: 'n', cat: 'Le corps (suite)', ex: 'I fell and hurt my ankle.', exFr: 'Je suis tombé et je me suis fait mal à la cheville.', level: 2 },
    { en: 'wrist', fr: 'le poignet', pos: 'n', cat: 'Le corps (suite)', ex: 'She broke her wrist last year.', exFr: 'Elle s\'est cassé le poignet l\'année dernière.', level: 2, note: 'Le w ne se prononce pas : « rist ».' },
    { en: 'shoulder', fr: 'l\'épaule', pos: 'n', cat: 'Le corps (suite)', ex: 'I\'ve got a pain in my shoulder.', exFr: 'J\'ai une douleur à l\'épaule.', level: 1 },
    { en: 'chest', fr: 'la poitrine', pos: 'n', cat: 'Le corps (suite)', ex: 'He has a pain in his chest.', exFr: 'Il a une douleur dans la poitrine.', level: 2 },
    { en: 'ear', fr: 'l\'oreille', pos: 'n', cat: 'Le corps (suite)', ex: 'I\'ve got earache in my left ear.', exFr: 'J\'ai mal à l\'oreille gauche.', level: 1, note: 'mal à l\'oreille = earache (comme headache).' },
    { en: 'neck', fr: 'le cou', pos: 'n', cat: 'Le corps (suite)', ex: 'My neck hurts.', exFr: 'J\'ai mal au cou.', level: 1 },
    { en: 'finger', fr: 'le doigt', pos: 'n', cat: 'Le corps (suite)', ex: 'I\'ve cut my finger.', exFr: 'Je me suis coupé le doigt.', level: 1 },
    // À la pharmacie
    { en: 'pharmacist', fr: 'le pharmacien', pos: 'n', cat: 'À la pharmacie', sec: 'en16-s-pharmacie', alt: ['chemist'], ex: 'Ask the pharmacist.', exFr: 'Demandez au pharmacien.', level: 2 },
    { en: 'prescription', fr: 'l\'ordonnance', pos: 'n', cat: 'À la pharmacie', sec: 'en16-s-pharmacie', ex: 'You need a prescription for antibiotics.', exFr: 'Il faut une ordonnance pour les antibiotiques.', level: 1, note: 'Faux amis : an order = une commande ; a recipe = une recette.' },
    { en: 'tablet', fr: 'le comprimé', pos: 'n', cat: 'À la pharmacie', sec: 'en16-s-pharmacie', alt: ['pill'], ex: 'Take one tablet after dinner.', exFr: 'Prenez un comprimé après le dîner.', level: 1 },
    { en: 'painkiller', fr: 'l\'antidouleur', pos: 'n', cat: 'À la pharmacie', sec: 'en16-s-pharmacie', ex: 'Have you got any painkillers?', exFr: 'As-tu des antidouleurs ?', level: 2, note: 'Mot à mot : « tueur de douleur » (pain + killer).' },
    { en: 'cream', fr: 'la crème, la pommade', pos: 'n', cat: 'À la pharmacie', sec: 'en16-s-pharmacie', ex: 'Put this cream on the rash.', exFr: 'Mettez cette crème sur les boutons.', level: 2 },
    { en: 'cough syrup', fr: 'le sirop pour la toux', pos: 'n', cat: 'À la pharmacie', sec: 'en16-s-pharmacie', alt: ['cough mixture', 'cough medicine'], ex: 'This cough syrup is for children.', exFr: 'Ce sirop pour la toux est pour les enfants.', level: 2 },
    { en: 'plaster', fr: 'le pansement', pos: 'n', cat: 'À la pharmacie', sec: 'en16-s-pharmacie', alt: ['sticking plaster', 'band-aid'], ex: 'Can I have a plaster for my finger?', exFr: 'Je peux avoir un pansement pour mon doigt ?', level: 2, note: 'En américain : a Band-Aid. a plaster veut aussi dire « un plâtre ».' },
    { en: 'antibiotics', fr: 'les antibiotiques', pos: 'n', cat: 'À la pharmacie', sec: 'en16-s-pharmacie', alt: ['antibiotic'], ex: 'Do I have to take antibiotics?', exFr: 'Est-ce que je dois prendre des antibiotiques ?', level: 2 },
    { en: 'side effect', fr: 'l\'effet secondaire', pos: 'n', cat: 'À la pharmacie', sec: 'en16-s-pharmacie', ex: 'Are there any side effects?', exFr: 'Est-ce qu\'il y a des effets secondaires ?', level: 2, note: 'Souvent au pluriel : side effects.' },
    // Chez le médecin
    { en: 'appointment', fr: 'le rendez-vous', pos: 'n', cat: 'Chez le médecin', sec: 'en16-s-rdv', ex: 'I\'ve got an appointment at ten.', exFr: 'J\'ai rendez-vous à dix heures.', level: 1, note: 'prendre rendez-vous = make (ou book) an appointment.' },
    { en: 'GP', fr: 'le médecin généraliste', pos: 'n', cat: 'Chez le médecin', sec: 'en16-s-rdv', alt: ['general practitioner', 'family doctor'], ex: 'You should see your GP.', exFr: 'Vous devriez voir votre médecin généraliste.', level: 2, note: 'Se prononce « dji-pi ». GP = general practitioner.' },
    { en: 'surgery', fr: 'le cabinet médical', pos: 'n', cat: 'Chez le médecin', sec: 'en16-s-rdv', alt: ['doctor\'s surgery', 'health centre', 'doctor\'s'], ex: 'The surgery opens at eight.', exFr: 'Le cabinet médical ouvre à huit heures.', level: 2, note: 'Au Royaume-Uni, surgery = le cabinet du médecin. Mais surgery veut aussi dire « la chirurgie ».' },
    { en: 'examine', fr: 'examiner, ausculter', pos: 'v', cat: 'Chez le médecin', ex: 'The doctor examined my knee.', exFr: 'Le médecin a examiné mon genou.', level: 2 },
    { id: 'en16-w-xray', en: 'X-ray', fr: 'la radio (radiographie)', pos: 'n', cat: 'Chez le médecin', sec: 'en16-s-urgences', alt: ['xray'], ex: 'You need an X-ray of your wrist.', exFr: 'Il vous faut une radio du poignet.', level: 2, note: 'Se prononce « èks-réï ».' },
    { en: 'blood test', fr: 'la prise de sang', pos: 'n', cat: 'Chez le médecin', sec: 'en16-s-urgences', ex: 'I had a blood test yesterday.', exFr: 'J\'ai fait une prise de sang hier.', level: 2 },
    { en: 'injection', fr: 'la piqûre', pos: 'n', cat: 'Chez le médecin', alt: ['jab', 'shot'], ex: 'The nurse gave me an injection.', exFr: 'L\'infirmière m\'a fait une piqûre.', level: 2, note: 'Familier au Royaume-Uni : a jab (surtout pour un vaccin).' },
    { en: 'A&E', fr: 'les urgences (à l\'hôpital)', pos: 'n', cat: 'Chez le médecin', sec: 'en16-s-urgences', alt: ['accident and emergency', 'emergency room', 'ER', 'casualty'], ex: 'We went to A&E at midnight.', exFr: 'Nous sommes allés aux urgences à minuit.', level: 2, note: 'Se prononce « éï ann i » : Accident and Emergency. En américain : the emergency room (ER).' },
    { en: 'lie down', fr: 's\'allonger', pos: 'v', cat: 'Chez le médecin', sec: 'en16-s-urgences', ex: 'Lie down on the bed, please.', exFr: 'Allongez-vous sur le lit, s\'il vous plaît.', level: 2 },
    { en: 'get better', fr: 'aller mieux, guérir', pos: 'v', cat: 'Chez le médecin', alt: ['feel better', 'recover'], ex: 'I hope you get better soon.', exFr: 'J\'espère que tu vas vite aller mieux.', level: 1 }
  ],

  phrases: [
    { en: 'I\'d like to make an appointment, please.', fr: 'Je voudrais prendre rendez-vous, s\'il vous plaît.', alt: ['I would like to make an appointment, please.', 'I\'d like to book an appointment, please.', 'I\'d like to make an appointment.'], cat: 'Prendre rendez-vous', sec: 'en16-s-rdv', note: 'prendre rendez-vous = make an appointment.' },
    { en: 'I\'d like to see a doctor.', fr: 'Je voudrais voir un médecin.', alt: ['I would like to see a doctor.', 'I\'d like to see the doctor.', 'I\'d like to see a doctor, please.'], cat: 'Prendre rendez-vous', sec: 'en16-s-rdv' },
    { en: 'Is it urgent?', fr: 'C\'est urgent ?', alt: ['Is this urgent?'], cat: 'Prendre rendez-vous', sec: 'en16-s-rdv' },
    { en: 'What are your symptoms?', fr: 'Quels sont vos symptômes ?', cat: 'Décrire ses symptômes', sec: 'en16-s-symptomes' },
    { en: 'I\'ve got a cough.', fr: 'Je tousse.', alt: ['I have a cough.', 'I have got a cough.'], cat: 'Décrire ses symptômes', sec: 'en16-s-symptomes' },
    { en: 'I feel sick.', fr: 'J\'ai mal au cœur.', alt: ['I feel nauseous.', 'I\'m feeling sick.'], cat: 'Décrire ses symptômes', sec: 'en16-s-symptomes', note: 'En anglais britannique : j\'ai la nausée.' },
    { en: 'I feel dizzy.', fr: 'J\'ai la tête qui tourne.', alt: ['I\'m dizzy.', 'I\'m feeling dizzy.'], cat: 'Décrire ses symptômes', sec: 'en16-s-symptomes' },
    { en: 'I\'ve hurt my knee.', fr: 'Je me suis fait mal au genou.', alt: ['I have hurt my knee.', 'I hurt my knee.'], cat: 'Décrire ses symptômes', sec: 'en16-s-symptomes' },
    { en: 'It hurts when I walk.', fr: 'J\'ai mal quand je marche.', alt: ['It hurts when I\'m walking.'], cat: 'Décrire ses symptômes', sec: 'en16-s-symptomes' },
    { en: 'I\'m allergic to penicillin.', fr: 'Je suis allergique à la pénicilline.', cat: 'Décrire ses symptômes', sec: 'en16-s-symptomes' },
    { en: 'I\'ve had a cough for three days.', fr: 'Je tousse depuis trois jours.', alt: ['I have had a cough for three days.', 'I\'ve been coughing for three days.'], cat: 'Depuis combien de temps ?', sec: 'en16-s-depuis', note: 'depuis + durée = present perfect + for.' },
    { en: 'How long have you had it?', fr: 'Depuis combien de temps l\'avez-vous ?', alt: ['How long have you had this?'], cat: 'Depuis combien de temps ?', sec: 'en16-s-depuis' },
    { en: 'I\'ve been ill for a week.', fr: 'Je suis malade depuis une semaine.', alt: ['I have been ill for a week.', 'I\'ve been sick for a week.', 'I\'ve been ill for one week.'], cat: 'Depuis combien de temps ?', sec: 'en16-s-depuis' },
    { en: 'You have to stay in bed.', fr: 'Vous devez rester au lit.', alt: ['You must stay in bed.'], cat: 'Obligation et conseils', sec: 'en16-s-obligation' },
    { en: 'You don\'t have to come back.', fr: 'Vous n\'êtes pas obligé de revenir.', alt: ['You don\'t need to come back.', 'You needn\'t come back.'], cat: 'Obligation et conseils', sec: 'en16-s-obligation', note: 'don\'t have to = pas obligé (≠ mustn\'t = interdit).' },
    { en: 'You mustn\'t drink alcohol.', fr: 'Vous ne devez pas boire d\'alcool.', alt: ['You must not drink alcohol.'], cat: 'Obligation et conseils', sec: 'en16-s-obligation', note: 'mustn\'t = c\'est interdit.' },
    { en: 'Here\'s your prescription.', fr: 'Voici votre ordonnance.', alt: ['Here is your prescription.'], cat: 'À la pharmacie', sec: 'en16-s-pharmacie' },
    { en: 'Do you have anything for a cough?', fr: 'Avez-vous quelque chose contre la toux ?', alt: ['Have you got anything for a cough?', 'Do you have something for a cough?', 'Have you got something for a cough?'], cat: 'À la pharmacie', sec: 'en16-s-pharmacie' },
    { en: 'Can I get this without a prescription?', fr: 'Puis-je avoir ceci sans ordonnance ?', alt: ['Can I buy this without a prescription?', 'Could I get this without a prescription?', 'Can I have this without a prescription?'], cat: 'À la pharmacie', sec: 'en16-s-pharmacie' },
    { en: 'Take two tablets twice a day.', fr: 'Prenez deux comprimés deux fois par jour.', alt: ['Take two tablets two times a day.', 'Take two pills twice a day.'], cat: 'À la pharmacie', sec: 'en16-s-pharmacie' },
    { en: 'Where is A&E, please?', fr: 'Où sont les urgences, s\'il vous plaît ?', alt: ['Where\'s A&E, please?', 'Where is the A&E department, please?', 'Where is the emergency room, please?'], cat: 'Les urgences', sec: 'en16-s-urgences' },
    { en: 'He can\'t breathe!', fr: 'Il n\'arrive pas à respirer !', alt: ['He cannot breathe!'], cat: 'Les urgences', sec: 'en16-s-urgences' },
    { en: 'She has fainted.', fr: 'Elle s\'est évanouie.', alt: ['She\'s fainted.', 'She fainted.'], cat: 'Les urgences', sec: 'en16-s-urgences' },
    { en: 'Is it serious?', fr: 'C\'est grave ?', alt: ['Is this serious?'], cat: 'Les urgences', sec: 'en16-s-urgences', note: 'serious = grave.' },
    { en: 'I hope you get better soon.', fr: 'J\'espère que tu vas vite te rétablir.', alt: ['I hope you feel better soon.', 'I hope you\'ll get better soon.', 'I hope you\'ll feel better soon.'], cat: 'Les urgences', sec: 'en16-s-urgences' }
  ],

  quiz: [
    // Prendre rendez-vous
    { id: 'en16-q-01', q: 'Comment dit-on « prendre rendez-vous » (chez le médecin) ?', choices: ['take an appointment', 'make an appointment', 'take a rendez-vous', 'do a meeting'], answer: 1, topic: 'Prendre rendez-vous', sec: 'en16-s-rdv',
      why: { 0: 'Calque du français « prendre » : on ne dit pas « take an appointment ».', 2: 'Chez le médecin, un rendez-vous = an appointment.', 3: 'a meeting = une réunion.' },
      explain: 'Prendre rendez-vous = **make an appointment** (ou book an appointment). → I\'d like to **make an appointment**, please.', say: 'I\'d like to make an appointment, please.', level: 1 },
    { id: 'en16-q-02', q: '« I\'ve got an appointment at the surgery at ten. » Ici, « the surgery », c\'est :', choices: ['la chirurgie', 'la salle d\'attente', 'le cabinet du médecin', 'la pharmacie'], answer: 2, topic: 'Prendre rendez-vous', sec: 'en16-s-rdv',
      why: { 0: 'surgery peut vouloir dire « la chirurgie », mais avec un rendez-vous à dix heures, c\'est le cabinet médical.', 1: 'La salle d\'attente = the waiting room.', 3: 'La pharmacie = the pharmacy, the chemist\'s.' },
      explain: 'Au Royaume-Uni, **the surgery** = le cabinet du médecin (du GP). → J\'ai rendez-vous au cabinet médical à dix heures.', say: 'I\'ve got an appointment at the surgery at ten.', level: 2 },
    { id: 'en16-q-03', q: 'Complète : What\'s the ___ appointment? (le premier possible, le plus tôt)', choices: ['earlier', 'most early', 'earlyest', 'earliest'], answer: 3, topic: 'Prendre rendez-vous', sec: 'en16-s-rdv',
      why: { 0: '« earlier » est le comparatif (plus tôt que).', 1: 'early est court : -est, pas most.', 2: 'Le y devient i : earl**i**est.' },
      explain: 'Superlatif de early (y → i) : **the earliest**. → What\'s the **earliest** appointment? (Quel est le premier rendez-vous possible ?)', say: 'What\'s the earliest appointment?', level: 2 },
    // Décrire ses symptômes
    { id: 'en16-q-04', q: 'Comment dit-on « J\'ai de la fièvre » en anglais britannique ?', choices: ['I\'m hot.', 'I\'ve got a temperature.', 'I have fever.', 'I\'ve got a cold.'], answer: 1, topic: 'Décrire ses symptômes', sec: 'en16-s-symptomes',
      why: { 0: '« I\'m hot » = j\'ai chaud.', 2: 'Il manque l\'article : a fever (ou a temperature).', 3: '« a cold » = un rhume.' },
      explain: 'Avoir de la fièvre = **have a temperature** (ou a fever). → **I\'ve got a temperature.** (J\'ai de la fièvre.)', say: 'I\'ve got a temperature.', level: 1 },
    { id: 'en16-q-05', q: '« I\'ve got a cold » veut dire :', choices: ['J\'ai froid.', 'J\'ai la grippe.', 'J\'ai de la fièvre.', 'J\'ai un rhume.'], answer: 3, topic: 'Décrire ses symptômes', sec: 'en16-s-symptomes',
      why: { 0: '« J\'ai froid » se dit « I\'m cold ».', 1: 'La grippe = flu.', 2: 'De la fièvre = a temperature.' },
      explain: '**a cold** = un rhume. → I\'ve got a cold. (J\'ai un rhume.) Attention : I\'m cold = j\'ai froid.', say: 'I\'ve got a cold.', level: 1 },
    { id: 'en16-q-06', q: 'En anglais britannique, « I feel sick » veut surtout dire :', choices: ['J\'ai mal au cœur (la nausée).', 'Je suis malade depuis longtemps.', 'Je me sens mieux.', 'J\'ai mal à la tête.'], answer: 0, topic: 'Décrire ses symptômes', sec: 'en16-s-symptomes',
      why: { 1: '« Malade depuis longtemps » se dirait « I\'ve been ill for a long time ».', 2: '« Je me sens mieux » = I feel better.', 3: '« J\'ai mal à la tête » = I\'ve got a headache.' },
      explain: 'Au Royaume-Uni, **I feel sick** = j\'ai la nausée, j\'ai mal au cœur. Pour « je suis malade » : I\'m ill.', say: 'I feel sick.', level: 2 },
    { id: 'en16-q-07', q: 'Complète : My ankle is ___. (enflée)', choices: ['swollen', 'sore throat', 'broke', 'dizzy'], answer: 0, topic: 'Décrire ses symptômes', sec: 'en16-s-symptomes',
      why: { 1: '« a sore throat » = un mal de gorge : rien à voir avec la cheville.', 2: '« broke » est le prétérit de break. Cassée se dirait broken.', 3: '« dizzy » = la tête qui tourne.' },
      explain: '**swollen** = enflé, gonflé. → My ankle is **swollen**. (J\'ai la cheville enflée.)', say: 'My ankle is swollen.', level: 2 },
    // Depuis combien de temps ?
    { id: 'en16-q-08', q: 'Traduis « Je tousse depuis trois jours » :', choices: ['I cough since three days.', 'I have a cough since three days.', 'I\'ve had a cough for three days.', 'I had a cough for three days.'], answer: 2, topic: 'Depuis combien de temps ?', sec: 'en16-s-depuis',
      why: { 0: 'Calque du français : il faut le present perfect, et « depuis + durée » = for.', 1: 'Il faut le present perfect (I\'ve had) et for (pas since) devant une durée.', 3: '« I had… for three days » = j\'ai toussé pendant trois jours (c\'est fini).' },
      explain: 'Ça a commencé il y a trois jours et ça dure encore : **present perfect + for**. → **I\'ve had a cough for three days.** (Je tousse depuis trois jours.)', say: 'I\'ve had a cough for three days.', level: 2 },
    { id: 'en16-q-09', q: 'Complète (Elle est malade depuis une semaine) : She ___ ill for a week.', choices: ['is', 'was', 'has been', 'have been'], answer: 2, topic: 'Depuis combien de temps ?', sec: 'en16-s-depuis',
      why: { 0: 'Le présent ne va pas avec « depuis » en anglais : il faut le present perfect.', 1: '« was » = elle a été malade (c\'est fini).', 3: 'Avec she : has, pas have.' },
      explain: 'Depuis + durée = present perfect : **has been** (be → been). → She **has been** ill for a week. (Elle est malade depuis une semaine.)', say: 'She has been ill for a week.', level: 2 },
    { id: 'en16-q-10', q: 'Complète : I\'ve had this pain ___ two weeks.', choices: ['since', 'during', 'for', 'from'], answer: 2, topic: 'Depuis combien de temps ?', sec: 'en16-s-depuis',
      why: { 0: '« since » va avec un point de départ (since Monday), pas avec une durée comme two weeks.', 1: '« during » = pendant (during the night) : il ne traduit pas « depuis ».', 3: '« from » s\'emploie avec to : from Monday to Friday.' },
      explain: 'Devant une **durée** (two weeks, three days) : **for**. → I\'ve had this pain **for** two weeks. (J\'ai cette douleur depuis deux semaines.)', say: 'I\'ve had this pain for two weeks.', level: 2 },
    { id: 'en16-q-11', q: 'Le médecin veut savoir depuis combien de temps tu as cette toux. Il demande :', choices: ['How long do you have this cough?', 'How long have you had this cough?', 'Since when you have this cough?', 'How much time you have this cough?'], answer: 1, topic: 'Depuis combien de temps ?', sec: 'en16-s-depuis',
      why: { 0: 'Avec « depuis combien de temps », il faut le present perfect : have you had.', 2: 'Calque du français, et il manque l\'auxiliaire.', 3: 'Pour une durée : How long, et il faut le present perfect.' },
      explain: '**How long have you had…?** = Depuis combien de temps avez-vous… ? → **How long have you had this cough?**', say: 'How long have you had this cough?', level: 2 },
    // Obligation et interdiction
    { id: 'en16-q-12', q: 'Complète : He ___ take his medicine every morning.', choices: ['have to', 'has to', 'haves to', 'must to'], answer: 1, topic: 'Obligation et interdiction', sec: 'en16-s-obligation',
      why: { 0: 'Avec he, have devient has.', 2: '« haves » n\'existe pas : la forme de have avec he est has.', 3: 'Jamais de « to » après must.' },
      explain: 'have to se conjugue : avec he / she / it → **has to**. → He **has to** take his medicine every morning. (Il doit prendre son médicament tous les matins.)', say: 'He has to take his medicine every morning.', level: 1 },
    { id: 'en16-q-13', q: '« You don\'t have to come back » veut dire :', choices: ['Vous n\'avez pas le droit de revenir.', 'Vous n\'êtes pas obligé de revenir.', 'Vous ne pouvez pas revenir.', 'Vous n\'allez pas revenir.'], answer: 1, topic: 'Obligation et interdiction', sec: 'en16-s-obligation',
      why: { 0: 'L\'interdiction se dit « You mustn\'t come back ».', 2: 'Ce serait « You can\'t come back ».', 3: 'Ce serait « You won\'t come back ».' },
      explain: '**don\'t have to** = pas obligé (ce n\'est pas nécessaire). → You don\'t have to come back. (Vous n\'êtes pas obligé de revenir.)', say: 'You don\'t have to come back.', level: 2 },
    { id: 'en16-q-14', q: 'Pour une interdiction : You ___ drink alcohol with these tablets.', choices: ['don\'t have to', 'don\'t must', 'mustn\'t', 'haven\'t to'], answer: 2, topic: 'Obligation et interdiction', sec: 'en16-s-obligation',
      why: { 0: '« don\'t have to » = pas obligé : ici, c\'est interdit.', 1: 'Pas de do avec must : la négation est mustn\'t.', 3: '« haven\'t to » n\'existe pas.' },
      explain: 'Interdiction : **mustn\'t** (must not). → You **mustn\'t** drink alcohol with these tablets. (Vous ne devez pas boire d\'alcool avec ces comprimés.)', say: 'You mustn\'t drink alcohol with these tablets.', level: 2 },
    { id: 'en16-q-15', q: 'Complète la question : ___ I have to stay in bed?', choices: ['Am', 'Have', 'Must', 'Do'], answer: 3, topic: 'Obligation et interdiction', sec: 'en16-s-obligation',
      why: { 0: 'am ne sert pas à poser une question avec have to.', 1: '« Have I to stay » est faux : have to fait sa question avec do.', 2: '« Must I stay in bed? » existe, mais « Must I have to » est faux.' },
      explain: 'have to fait ses questions avec **do / does** : **Do** I have to stay in bed? — Yes, you do. (Est-ce que je dois rester au lit ? — Oui.)', say: 'Do I have to stay in bed?', level: 2 },
    { id: 'en16-q-16', q: 'Au passé : Last year I ___ go to hospital. (J\'ai dû aller à l\'hôpital)', choices: ['must', 'had to', 'have to', 'musted'], answer: 1, topic: 'Obligation et interdiction', sec: 'en16-s-obligation',
      why: { 0: 'must n\'a pas de forme passée.', 2: '« have to » est le présent ; last year = le passé.', 3: '« musted » n\'existe pas.' },
      explain: 'Le passé de have to / must : **had to**. → Last year I **had to** go to hospital. (L\'année dernière, j\'ai dû aller à l\'hôpital.)', say: 'Last year I had to go to hospital.', level: 2 },
    { id: 'en16-q-17', q: 'Le médecin te conseille de ne pas fumer : You ___ smoke.', choices: ['shouldn\'t', 'don\'t have to', 'should', 'aren\'t'], answer: 0, topic: 'Obligation et interdiction', sec: 'en16-s-obligation',
      why: { 1: '« don\'t have to » = pas obligé : ce n\'est pas un conseil de ne pas fumer.', 2: '« should » sans not = tu devrais fumer !', 3: '« aren\'t » ne va pas avec une base verbale.' },
      explain: 'Un conseil négatif : **shouldn\'t** + base. → You **shouldn\'t** smoke. (Vous ne devriez pas fumer.)', say: 'You shouldn\'t smoke.', level: 1 },
    // À la pharmacie
    { id: 'en16-q-18', q: '« Take two tablets twice a day. » Combien de comprimés par jour au total ?', choices: ['Deux', 'Six', 'Quatre', 'Un'], answer: 2, topic: 'À la pharmacie', sec: 'en16-s-pharmacie',
      why: { 0: 'Deux comprimés à chaque fois, et **deux fois** par jour (twice).', 1: 'Six, ce serait two tablets three times a day.', 3: 'On prend **two** tablets à chaque fois.' },
      explain: '**two tablets** (deux comprimés) **twice a day** (deux fois par jour) = 4 comprimés par jour.', say: 'Take two tablets twice a day.', level: 1 },
    { id: 'en16-q-19', q: 'Comment dit-on « l\'ordonnance » ?', choices: ['the order', 'the recipe', 'the prescription', 'the receipt'], answer: 2, topic: 'À la pharmacie', sec: 'en16-s-pharmacie',
      why: { 0: '« an order » = une commande.', 1: '« a recipe » = une recette de cuisine.', 3: '« a receipt » = un ticket de caisse.' },
      explain: 'L\'ordonnance = **the prescription**. → You need a **prescription** for antibiotics. (Il faut une ordonnance pour les antibiotiques.)', say: 'the prescription', level: 1 },
    { id: 'en16-q-20', q: 'Complète : Do you have anything ___ a cough?', choices: ['against', 'for', 'to', 'of'], answer: 1, topic: 'À la pharmacie', sec: 'en16-s-pharmacie',
      why: { 0: 'Calque du français « contre » : en anglais, on dit for.', 2: '« to » ne s\'emploie pas ici.', 3: '« of » ne s\'emploie pas ici.' },
      explain: 'Un médicament contre… = something **for**… → Do you have anything **for** a cough? (Avez-vous quelque chose contre la toux ?)', say: 'Do you have anything for a cough?', level: 1 },
    // Les urgences
    { id: 'en16-q-21', q: 'Complète : Help! My husband ___ fainted!', choices: ['is', 'has', 'have', 'was'], answer: 1, topic: 'Les urgences', sec: 'en16-s-urgences',
      why: { 0: 'Calque du français « il s\'est » : en anglais, il faut has + participe passé.', 2: 'Avec my husband (= he) : has.', 3: '« was fainted » n\'existe pas.' },
      explain: 'Ce qui vient d\'arriver : **has** + participe passé. → My husband **has fainted**! (Mon mari s\'est évanoui !)', say: 'Help! My husband has fainted!', level: 2 },
    // Compréhension orale
    { id: 'en16-q-22', q: 'Écoute. Que dit le patient ?', listen: true, say: 'I\'ve had a sore throat for two days.', choices: ['Il a mal à la gorge depuis deux semaines.', 'Il a mal aux dents depuis deux jours.', 'Il a eu mal à la gorge il y a deux jours.', 'Il a mal à la gorge depuis deux jours.'], answer: 3, topic: 'Compréhension orale', sec: 'en16-s-depuis',
      why: { 0: 'Deux semaines se dirait « two weeks ». On entend **two days**.', 1: 'Mal aux dents = toothache. On entend **a sore throat**.', 2: '« il y a deux jours » se dirait « two days ago ». Ici : **for** two days = depuis deux jours.' },
      explain: '**I\'ve had** a sore throat **for** two days = j\'ai mal à la gorge depuis deux jours (et j\'ai encore mal).', level: 2 },
    { id: 'en16-q-23', q: 'Écoute. Que dit le pharmacien ?', listen: true, say: 'This medicine can make you tired. You mustn\'t drive.', choices: ['Il est interdit de conduire.', 'On n\'est pas obligé de conduire.', 'Il faut conduire lentement.', 'On peut conduire sans problème.'], answer: 0, topic: 'Compréhension orale', sec: 'en16-s-obligation',
      why: { 1: '« pas obligé » se dirait « You don\'t have to drive ». On entend **mustn\'t**.', 2: 'Lentement = slowly : on ne l\'entend pas.', 3: 'Au contraire : **mustn\'t** = interdit.' },
      explain: 'This medicine can make you tired = ce médicament peut vous fatiguer. **You mustn\'t drive** = vous ne devez pas conduire (c\'est interdit).', level: 2 },
    { id: 'en16-q-24', q: 'Écoute. Quel rendez-vous propose la secrétaire ?', listen: true, say: 'Can you come on Tuesday at quarter past nine?', choices: ['Jeudi à 9 h 15', 'Mardi à 8 h 45', 'Mardi à 9 h 15', 'Mardi à 9 h 45'], answer: 2, topic: 'Compréhension orale', sec: 'en16-s-rdv',
      why: { 0: 'Jeudi = Thursday. On entend **Tuesday** (mardi).', 1: '8 h 45 se dirait « quarter to nine ». On entend **quarter past** nine.', 3: '9 h 45 se dirait « quarter to ten ».' },
      explain: '**Tuesday** = mardi ; **quarter past nine** = neuf heures et quart (9 h 15).', level: 2 },
    { id: 'en16-q-25', q: 'Écoute. Que s\'est-il passé ?', listen: true, say: 'She has fallen and I think her arm is broken.', choices: ['Elle s\'est évanouie et ne respire plus.', 'Elle est tombée et a sans doute le bras cassé.', 'Elle est tombée mais elle va bien.', 'Elle s\'est coupé le bras.'], answer: 1, topic: 'Compréhension orale', sec: 'en16-s-urgences',
      why: { 0: 'S\'évanouir = faint. On entend **has fallen** (elle est tombée).', 2: 'La personne pense que son bras est cassé : **broken**.', 3: 'Se couper = cut. On entend **broken** (cassé).' },
      explain: '**She has fallen** = elle est tombée (fall, fell, fallen). **I think her arm is broken** = je crois qu\'elle a le bras cassé.', level: 2 }
  ],

  exercises: [
    // Prendre rendez-vous
    { id: 'en16-x-01', prompt: 'Traduis : Je voudrais prendre rendez-vous, s\'il vous plaît.', answers: ['I\'d like to make an appointment, please.', 'I would like to make an appointment, please.', 'I\'d like to book an appointment, please.', 'I would like to book an appointment, please.', 'I\'d like to make an appointment.', 'I\'d like an appointment, please.'], topic: 'Prendre rendez-vous', sec: 'en16-s-rdv',
      hint: 'prendre rendez-vous = make an appointment',
      explain: '**I\'d like to make an appointment, please.** Prendre rendez-vous = **make** (ou book) **an appointment**.',
      rule: 'make / book an appointment = prendre rendez-vous',
      mistakes: [{ text: 'I\'d like to take an appointment, please.', msg: 'On ne dit pas « take » : prendre rendez-vous = **make** an appointment.' }, { text: 'I\'d like to make a rendez-vous, please.', msg: 'Chez le médecin, un rendez-vous = **an appointment**.' }],
      say: 'I\'d like to make an appointment, please.', level: 1 },
    { id: 'en16-x-02', prompt: 'Complète avec le superlatif de « early » : What\'s the ___ appointment?', answers: ['earliest'], topic: 'Prendre rendez-vous', sec: 'en16-s-rdv', strict: true,
      hint: 'early se termine par consonne + y…',
      explain: 'early → **the earliest** (y → i + est). → What\'s the **earliest** appointment? (Quel est le premier rendez-vous possible ?)',
      rule: 'consonne + y → -iest : early → the earliest',
      mistakes: [{ text: 'earlier', msg: '« earlier » est le comparatif (plus tôt que). Le superlatif : the **earliest**.' }, { text: 'most early', msg: 'early suit la règle des adjectifs courts : the **earliest**.' }, { text: 'earlyest', msg: 'Le y devient **i** : earl**i**est.' }],
      say: 'What\'s the earliest appointment?', level: 2 },
    // Décrire ses symptômes
    { id: 'en16-x-03', prompt: 'Traduis : J\'ai un rhume.', answers: ['I\'ve got a cold.', 'I have a cold.', 'I have got a cold.'], topic: 'Décrire ses symptômes', sec: 'en16-s-symptomes',
      hint: 'un rhume = a cold',
      explain: '**I\'ve got a cold.** (J\'ai un rhume.) Avec l\'article a.',
      rule: 'I\'ve got a cold = j\'ai un rhume · I\'m cold = j\'ai froid',
      mistakes: [{ text: 'I\'m cold.', msg: '« I\'m cold » = j\'ai froid. Un rhume : **I\'ve got a cold**.' }, { text: 'I have cold.', msg: 'Il faut l\'article : I have **a** cold.' }],
      say: 'I\'ve got a cold.', level: 1 },
    { id: 'en16-x-04', prompt: 'Traduis (anglais britannique) : J\'ai de la fièvre.', answers: ['I\'ve got a temperature.', 'I have a temperature.', 'I have got a temperature.', 'I\'ve got a fever.', 'I have a fever.'], topic: 'Décrire ses symptômes', sec: 'en16-s-symptomes',
      hint: 'Au Royaume-Uni : a temperature',
      explain: '**I\'ve got a temperature.** (J\'ai de la fièvre.) On dit aussi I\'ve got a fever.',
      rule: 'avoir de la fièvre = have (got) a temperature',
      mistakes: [{ text: 'I have fever.', msg: 'Il faut l\'article : I have **a** fever, ou mieux : I\'ve got **a temperature**.' }, { text: 'I\'m hot.', msg: '« I\'m hot » = j\'ai chaud. La fièvre : **I\'ve got a temperature**.' }],
      say: 'I\'ve got a temperature.', level: 1 },
    { id: 'en16-x-05', prompt: 'Traduis : J\'ai la tête qui tourne.', answers: ['I feel dizzy.', 'I\'m dizzy.', 'I\'m feeling dizzy.', 'I am feeling dizzy.'], topic: 'Décrire ses symptômes', sec: 'en16-s-symptomes',
      hint: 'I feel + adjectif',
      explain: '**I feel dizzy.** (J\'ai la tête qui tourne.) feel + adjectif.',
      rule: 'I feel + adjectif : I feel dizzy, I feel sick, I feel tired',
      mistakes: [{ text: 'My head turns.', msg: 'Calque du français : on dit **I feel dizzy**.' }, { text: 'I have dizzy.', msg: 'dizzy est un adjectif : **I feel** dizzy (ou I\'m dizzy).' }],
      say: 'I feel dizzy.', level: 2 },
    { id: 'en16-x-06', prompt: 'Traduis : Je suis allergique à la pénicilline.', answers: ['I\'m allergic to penicillin.'], topic: 'Décrire ses symptômes', sec: 'en16-s-symptomes',
      hint: 'allergique à = allergic + ?',
      explain: '**I\'m allergic to penicillin.** allergique à = allergic **to**.',
      rule: 'be allergic to + quelque chose',
      mistakes: [{ text: 'I\'m allergic at penicillin.', msg: 'allergique à = allergic **to** (pas at).' }, { text: 'I\'m allergic of penicillin.', msg: 'allergique à = allergic **to** (pas of).' }, { text: 'I have allergic to penicillin.', msg: 'allergic est un adjectif : **I\'m** (I am) allergic to…' }],
      say: 'I\'m allergic to penicillin.', level: 2 },
    { id: 'en16-x-07', prompt: 'Traduis : Je me suis fait mal au genou.', answers: ['I\'ve hurt my knee.', 'I have hurt my knee.', 'I hurt my knee.'], topic: 'Décrire ses symptômes', sec: 'en16-s-symptomes',
      hint: 'hurt (irrégulier) + my + le genou',
      explain: '**I\'ve hurt my knee.** (Je me suis fait mal au genou.) Avec **my**, et hurt ne change pas : hurt, hurt, hurt.',
      rule: 'I\'ve hurt my + partie du corps',
      mistakes: [{ text: 'I\'ve hurt the knee.', msg: 'Avec les parties du corps, on dit **my** : I\'ve hurt **my** knee.' }, { text: 'I have hurted my knee.', msg: 'hurt est irrégulier : hurt, hurt, hurt → I\'ve **hurt** my knee.' }],
      say: 'I\'ve hurt my knee.', level: 2 },
    // Depuis combien de temps ?
    { id: 'en16-x-08', prompt: 'Complète : I\'ve had a cough ___ a week.', answers: ['for'], topic: 'Depuis combien de temps ?', sec: 'en16-s-depuis', strict: true,
      hint: 'Depuis + une durée…',
      explain: 'Devant une durée (a week) : **for**. → I\'ve had a cough **for** a week. (Je tousse depuis une semaine.)',
      rule: 'present perfect + for + durée = depuis',
      mistakes: [{ text: 'since', msg: '« since » va avec un point de départ (since Monday). Devant une **durée** : **for**.' }, { text: 'during', msg: '« during » = pendant (during the night). « Depuis une semaine » = **for** a week.' }],
      say: 'I\'ve had a cough for a week.', level: 2 },
    { id: 'en16-x-09', prompt: 'Traduis : Je tousse depuis trois jours.', answers: ['I\'ve had a cough for three days.', 'I have had a cough for three days.', 'I\'ve been coughing for three days.', 'I have been coughing for three days.'], topic: 'Depuis combien de temps ?', sec: 'en16-s-depuis',
      hint: 'present perfect de have (I\'ve had) + a cough + for…',
      explain: 'Ça dure encore : **present perfect + for**. → **I\'ve had a cough for three days.** (Je tousse depuis trois jours.)',
      rule: 'depuis + durée = present perfect + for',
      mistakes: [{ text: 'I cough since three days.', msg: 'Calque du français : il faut le **present perfect** et **for** → I\'ve had a cough **for** three days.' }, { text: 'I have a cough for three days.', msg: 'Il faut le **present perfect** : I **have had** (I\'ve had) a cough for three days.' }, { text: 'I\'ve had a cough since three days.', msg: 'Devant une durée (three days), on dit **for**, pas since.' }],
      say: 'I\'ve had a cough for three days.', level: 2 },
    { id: 'en16-x-10', prompt: 'Traduis : Elle est malade depuis une semaine.', answers: ['She\'s been ill for a week.', 'She has been ill for a week.', 'She has been sick for a week.', 'She\'s been sick for a week.', 'She has been ill for one week.', 'She\'s been ill for one week.'], topic: 'Depuis combien de temps ?', sec: 'en16-s-depuis',
      hint: 'present perfect de be avec she : has been',
      explain: '**She has been ill for a week.** (Elle est malade depuis une semaine.) be → **been**.',
      rule: 'She has been + adjectif + for + durée',
      mistakes: [{ text: 'She is ill since a week.', msg: 'Calque du français : il faut **has been** et **for** → She **has been** ill **for** a week.' }, { text: 'She is ill for a week.', msg: 'Avec « depuis », il faut le present perfect : She **has been** ill for a week.' }, { text: 'She has been ill since a week.', msg: 'Devant une durée (a week), on dit **for**, pas since.' }],
      say: 'She has been ill for a week.', level: 2 },
    { id: 'en16-x-11', prompt: 'Pose la question du médecin : Depuis combien de temps avez-vous cette douleur ?', answers: ['How long have you had this pain?', 'How long have you had the pain?'], topic: 'Depuis combien de temps ?', sec: 'en16-s-depuis',
      hint: 'How long + have you + participe passé de have…',
      explain: '**How long have you had this pain?** (Depuis combien de temps avez-vous cette douleur ?)',
      rule: 'How long have you had…? = Depuis combien de temps avez-vous… ?',
      mistakes: [{ text: 'How long do you have this pain?', msg: 'Avec « depuis combien de temps », il faut le present perfect : How long **have you had**…?' }, { text: 'Since when do you have this pain?', msg: 'On dit **How long have you had** this pain? (present perfect).' }, { text: 'How long you have had this pain?', msg: 'Dans la question, **have** passe **avant** le sujet : How long **have you** had…?' }],
      say: 'How long have you had this pain?', level: 2 },
    // Obligation et interdiction
    { id: 'en16-x-12', prompt: 'Complète avec have ou has : My wife ___ to stay in bed.', answers: ['has'], topic: 'Obligation et interdiction', sec: 'en16-s-obligation', strict: true,
      hint: 'My wife = she',
      explain: 'have to se conjugue : avec she → **has to**. → My wife **has** to stay in bed. (Ma femme doit rester au lit.)',
      rule: 'I/you/we/they have to · he/she/it has to',
      mistakes: [{ text: 'have', msg: 'My wife = she : il faut **has** (she has to).' }, { text: 'is', msg: 'Ici, c\'est have to (devoir) : My wife **has** to stay in bed.' }],
      say: 'My wife has to stay in bed.', level: 1 },
    { id: 'en16-x-13', prompt: 'Mets à la forme interrogative : I have to take these tablets.', answers: ['Do I have to take these tablets?'], topic: 'Obligation et interdiction', sec: 'en16-s-obligation',
      hint: 'have to fait ses questions avec do.',
      explain: '**Do I have to take these tablets?** (Est-ce que je dois prendre ces comprimés ?) — Yes, you do. / No, you don\'t.',
      rule: 'Question : Do / Does + sujet + have to + base ?',
      mistakes: [{ text: 'Have I to take these tablets?', msg: 'have to fait sa question avec **do** : **Do I have to** take…?' }, { text: 'Must I to take these tablets?', msg: 'Pas de to après must. Et avec have to : **Do I have to** take…?' }, { text: 'I have to take these tablets?', msg: 'Il faut l\'auxiliaire **do** en premier : **Do I** have to…?' }],
      say: 'Do I have to take these tablets?', level: 2 },
    { id: 'en16-x-14', prompt: 'Complète (vous n\'êtes pas obligé) : You ___ come back next week.', answers: ['don\'t have to', 'do not have to', 'don\'t need to', 'do not need to', 'needn\'t'], topic: 'Obligation et interdiction', sec: 'en16-s-obligation',
      hint: 'Pas obligé ≠ interdit.',
      explain: 'Pas nécessaire = **don\'t have to**. → You **don\'t have to** come back next week. (Vous n\'êtes pas obligé de revenir la semaine prochaine.)',
      rule: 'don\'t have to = pas obligé · mustn\'t = interdit',
      mistakes: [{ text: 'mustn\'t', msg: '« mustn\'t » = c\'est **interdit**. Pour « pas obligé » : **don\'t have to**.' }, { text: 'don\'t must', msg: '« don\'t must » n\'existe pas. Pas obligé = **don\'t have to**.' }],
      say: 'You don\'t have to come back next week.', level: 2 },
    { id: 'en16-x-15', prompt: 'Complète (c\'est interdit) : You ___ drink alcohol with this medicine.', answers: ['mustn\'t', 'must not'], topic: 'Obligation et interdiction', sec: 'en16-s-obligation',
      hint: 'L\'interdiction…',
      explain: 'Interdiction : **mustn\'t**. → You **mustn\'t** drink alcohol with this medicine. (Vous ne devez pas boire d\'alcool avec ce médicament.)',
      rule: 'mustn\'t + base verbale = interdiction',
      mistakes: [{ text: 'don\'t have to', msg: '« don\'t have to » = pas obligé. Pour une interdiction : **mustn\'t**.' }, { text: 'don\'t must', msg: 'Pas de do avec must : **mustn\'t** (must not).' }],
      say: 'You mustn\'t drink alcohol with this medicine.', level: 2 },
    { id: 'en16-x-16', prompt: 'Complète au passé : Last year I ___ (have to) go to hospital.', answers: ['had to'], topic: 'Obligation et interdiction', sec: 'en16-s-obligation', strict: true,
      hint: 'Le passé de have to…',
      explain: 'Passé de have to : **had to**. → Last year I **had to** go to hospital. (L\'année dernière, j\'ai dû aller à l\'hôpital.)',
      rule: 'have to → had to (must n\'a pas de passé)',
      mistakes: [{ text: 'must', msg: 'must n\'a pas de passé. Au passé : **had to**.' }, { text: 'have to', msg: '« have to » est le présent. Last year = passé : **had to**.' }, { text: 'musted', msg: '« musted » n\'existe pas. Au passé : **had to**.' }],
      say: 'Last year I had to go to hospital.', level: 2 },
    { id: 'en16-x-17', prompt: 'Traduis (un conseil) : Tu ne devrais pas fumer.', answers: ['You shouldn\'t smoke.', 'You should not smoke.'], topic: 'Obligation et interdiction', sec: 'en16-s-obligation',
      hint: 'tu devrais = you should',
      explain: 'Conseil négatif : **shouldn\'t** + base. → **You shouldn\'t smoke.** (Tu ne devrais pas fumer.)',
      rule: 'shouldn\'t + base verbale = conseil négatif',
      mistakes: [{ text: 'You don\'t should smoke.', msg: 'Pas de do avec should : **shouldn\'t** (should not).' }, { text: 'You shouldn\'t to smoke.', msg: 'Pas de to après shouldn\'t : You shouldn\'t **smoke**.' }],
      say: 'You shouldn\'t smoke.', level: 1 },
    // À la pharmacie
    { id: 'en16-x-18', prompt: 'Traduis : Voici votre ordonnance.', answers: ['Here\'s your prescription.', 'Here is your prescription.'], topic: 'À la pharmacie', sec: 'en16-s-pharmacie',
      hint: 'l\'ordonnance = ?',
      explain: '**Here\'s your prescription.** (Voici votre ordonnance.)',
      rule: 'prescription = ordonnance · order = commande · recipe = recette',
      mistakes: [{ text: 'Here\'s your order.', msg: '« an order » = une commande. L\'ordonnance = **a prescription**.' }, { text: 'Here\'s your recipe.', msg: '« a recipe » = une recette de cuisine. L\'ordonnance = **a prescription**.' }],
      say: 'Here\'s your prescription.', level: 1 },
    { id: 'en16-x-19', prompt: 'Traduis : Avez-vous quelque chose contre la toux ?', answers: ['Do you have anything for a cough?', 'Do you have something for a cough?', 'Have you got anything for a cough?', 'Have you got something for a cough?'], topic: 'À la pharmacie', sec: 'en16-s-pharmacie',
      hint: 'contre = for (pas against)',
      explain: '**Do you have anything for a cough?** (Avez-vous quelque chose contre la toux ?) Un médicament contre… = something **for**…',
      rule: 'something for + symptôme = quelque chose contre…',
      mistakes: [{ text: 'Do you have anything against a cough?', msg: 'Calque du français : « contre » = **for** ici → anything **for** a cough.' }, { text: 'You have anything for a cough?', msg: 'Il manque l\'auxiliaire **do** : **Do you** have anything…?' }],
      say: 'Do you have anything for a cough?', level: 1 },
    { id: 'en16-x-20', prompt: 'Complète (deux fois par jour) : Take one tablet ___ a day.', answers: ['twice', 'two times'], topic: 'À la pharmacie', sec: 'en16-s-pharmacie', strict: true,
      hint: 'Un seul mot pour « deux fois ».',
      explain: '**twice** = deux fois. → Take one tablet **twice** a day. (Prenez un comprimé deux fois par jour.)',
      rule: 'once (1 fois) · twice (2 fois) · three times (3 fois)…',
      mistakes: [{ text: 'two time', msg: 'Il faut un -s à times… mais le plus naturel est **twice** (deux fois).' }, { text: 'twice times', msg: '« twice » veut déjà dire « deux fois » : **twice** a day.' }],
      say: 'Take one tablet twice a day.', level: 1 },
    { id: 'en16-x-21', prompt: 'Complète (après les repas) : Take it ___ meals.', answers: ['after'], topic: 'À la pharmacie', sec: 'en16-s-pharmacie', strict: true,
      hint: 'après = ?',
      explain: 'après = **after**. → Take it **after** meals. (Prenez-le après les repas.)',
      rule: 'before meals = avant les repas · after meals = après les repas',
      mistakes: [{ text: 'before', msg: '« before » = avant. Après les repas = **after** meals.' }, { text: 'behind', msg: '« behind » = derrière (un lieu). Après (le temps) = **after**.' }],
      say: 'Take it after meals.', level: 1 },
    // Les urgences
    { id: 'en16-x-22', prompt: 'Complète au present perfect : Help! She ___ (faint)!', answers: ['has fainted', '\'s fainted'], topic: 'Les urgences', sec: 'en16-s-urgences',
      hint: 'has + participe passé (verbe régulier : -ed)',
      explain: 'Ce qui vient d\'arriver : **has** + participe passé. → Help! She **has fainted**! (Au secours ! Elle s\'est évanouie !)',
      rule: 'he / she / it has + participe passé',
      mistakes: [{ text: 'is fainted', msg: 'Calque du français « elle s\'est » : en anglais, **has** fainted.' }, { text: 'have fainted', msg: 'Avec she : **has**, pas have.' }],
      say: 'Help! She has fainted!', level: 2 },
    { id: 'en16-x-23', prompt: 'Traduis : Il n\'arrive pas à respirer !', answers: ['He can\'t breathe!', 'He cannot breathe!'], topic: 'Les urgences', sec: 'en16-s-urgences',
      hint: 'ne pas arriver à = can\'t ; respirer = breathe',
      explain: '**He can\'t breathe!** (Il n\'arrive pas à respirer !) « Ne pas arriver à » = **can\'t**.',
      rule: 'can\'t + base verbale = ne pas pouvoir, ne pas arriver à',
      mistakes: [{ text: 'He can\'t breath!', msg: '« breath » est le nom (le souffle). Le verbe respirer s\'écrit **breathe**.' }, { text: 'He doesn\'t arrive to breathe!', msg: 'Calque du français : « ne pas arriver à » = **can\'t** → He **can\'t** breathe!' }],
      say: 'He can\'t breathe!', level: 2 },
    { id: 'en16-x-24', prompt: 'Traduis : Je crois que j\'ai le poignet cassé.', answers: ['I think my wrist is broken.', 'I think I\'ve broken my wrist.', 'I think I have broken my wrist.', 'I think I broke my wrist.'], topic: 'Les urgences', sec: 'en16-s-urgences',
      hint: 'le poignet = wrist ; cassé = broken',
      explain: '**I think my wrist is broken.** (Je crois que j\'ai le poignet cassé.) Mot à mot : « je crois que mon poignet est cassé ».',
      rule: 'my + partie du corps + is broken',
      mistakes: [{ text: 'I think I have the wrist broken.', msg: 'Calque du français : on dit **my wrist is broken** (mon poignet est cassé).' }, { text: 'I think my wrist is broke.', msg: 'Cassé = **broken** (participe passé). « broke » est le prétérit de break.' }],
      say: 'I think my wrist is broken.', level: 2 },
    { id: 'en16-x-25', prompt: 'Remets dans l\'ordre : had / How / you / long / have / it / ?', answers: ['How long have you had it?'], topic: 'Depuis combien de temps ?', sec: 'en16-s-depuis',
      hint: 'How long + have + sujet + participe ?',
      explain: '**How long have you had it?** (Depuis combien de temps l\'avez-vous ?)',
      rule: 'How long + have + sujet + participe passé ?',
      mistakes: [{ text: 'How long you have had it?', msg: 'Dans la question, **have** passe **avant** le sujet : How long **have you** had it?' }, { text: 'How long have had you it?', msg: 'Le sujet (you) vient juste après have : How long have **you had** it?' }],
      say: 'How long have you had it?', level: 2 },
    { id: 'en16-x-26', prompt: 'Le médecin demande « How long have you had this rash? ». Réponds : depuis une semaine.', answers: ['For a week.', 'For one week.', 'I\'ve had it for a week.', 'I have had it for a week.', 'For about a week.'], topic: 'Depuis combien de temps ?', sec: 'en16-s-depuis',
      hint: 'Réponse courte : for + durée.',
      explain: 'Réponse courte : **For a week.** (Depuis une semaine.) Ou la phrase complète : I\'ve had it for a week.',
      rule: 'How long…? → For + durée.',
      mistakes: [{ text: 'Since a week.', msg: 'Devant une durée, « depuis » = **for** : **For** a week.' }, { text: 'During a week.', msg: '« during » = pendant. Depuis une semaine = **For** a week.' }],
      say: 'For a week.', level: 2 },
    { id: 'en16-x-27', prompt: 'Traduis : J\'espère que tu vas vite te rétablir.', answers: ['I hope you get better soon.', 'I hope you feel better soon.', 'I hope you\'ll get better soon.', 'I hope you will get better soon.', 'I hope you\'ll feel better soon.'], topic: 'Les urgences', sec: 'en16-s-urgences',
      hint: 'se rétablir = get better ; vite = soon',
      explain: '**I hope you get better soon.** (J\'espère que tu vas vite te rétablir.) get better = aller mieux, guérir.',
      rule: 'get better = aller mieux, guérir',
      mistakes: [{ text: 'I hope you get best soon.', msg: '« best » = le meilleur. Aller mieux = get **better**.' }, { text: 'I hope you go better soon.', msg: 'On ne dit pas « go better » : aller mieux = **get better** (ou feel better).' }],
      say: 'I hope you get better soon.', level: 2 },
    { id: 'en16-x-28', prompt: 'Traduis : Où sont les urgences, s\'il vous plaît ? (à l\'hôpital, au Royaume-Uni)', answers: ['Where is A&E, please?', 'Where\'s A&E, please?', 'Where is the A&E department, please?', 'Where is the emergency room, please?', 'Where\'s the emergency room, please?', 'Where is Accident and Emergency, please?'], topic: 'Les urgences', sec: 'en16-s-urgences',
      hint: 'Les urgences = A&E (Accident and Emergency)',
      explain: '**Where is A&E, please?** (Où sont les urgences, s\'il vous plaît ?) En anglais, c\'est un singulier : A&E **is**.',
      rule: 'les urgences (à l\'hôpital) = A&E (UK), the emergency room (US)',
      mistakes: [{ text: 'Where are the emergencies, please?', msg: '« emergencies » = des situations d\'urgence. Le service des urgences = **A&E** : Where is A&E?' }, { text: 'Where is the urgences, please?', msg: '« urgences » est un mot français. En anglais : **A&E**.' }],
      say: 'Where is A&E, please?', level: 2 }
  ]
});
