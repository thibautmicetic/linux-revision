/* Maths — Chapitre 6 : Primitives et intégrales */
APP.registerChapter({
  subject: 'maths',
  id: 'm6', num: 6,
  title: 'Primitives et intégrales',
  subtitle: 'Primitives usuelles, IPP, changement de variable',

  /* =====================================================================
   *  SECTIONS (fiches de cours)
   * ===================================================================== */
  sections: [
    {
      id: 'm6-s-primitive',
      title: 'Primitives : définition et unicité',
      html: String.raw`
<h3>Définition</h3>
<p>Soit $f$ définie sur un <b>intervalle</b> $I$. Une <b>primitive</b> de $f$ sur $I$ est une fonction $F$ dérivable sur $I$ telle que
$$F'(x) = f(x) \quad \text{pour tout } x \in I.$$
Primitiver, c'est « dériver à l'envers ». Notation : $\displaystyle\int f(x)\,\mathrm{d}x = F(x) + C$.</p>

<h3>Existence</h3>
<p>Toute fonction <b>continue</b> sur un intervalle admet des primitives (conséquence du théorème fondamental de l'analyse, voir la fiche sur l'intégrale). Attention : une primitive n'a pas toujours d'expression avec les fonctions usuelles, par exemple pour $\mathrm{e}^{-x^2}$ (la gaussienne) ou $\frac{\sin x}{x}$.</p>

<h3>Unicité à une constante près</h3>
<p>Si $F$ est une primitive de $f$ sur l'intervalle $I$, alors les primitives de $f$ sur $I$ sont <b>exactement</b> les fonctions $F + C$, $C \in \mathbb{R}$.<br>
<i>Preuve :</i> si $G$ est une autre primitive, $(G - F)' = f - f = 0$ sur un intervalle, donc $G - F$ est constante.<br>
Conséquence : pour $x_0 \in I$ et $y_0 \in \mathbb{R}$ donnés, il existe une <b>unique</b> primitive $F$ telle que $F(x_0) = y_0$ (condition initiale).</p>

<h3>Méthode : vérifier une primitive</h3>
<div class="flow"><span>Proposer $F$</span><span>Dériver $F$</span><span>Comparer $F'$ avec $f$</span><span>Ajuster un coefficient si besoin</span></div>
<p>Dériver son résultat est le meilleur réflexe anti-erreur : c'est rapide et ça détecte les facteurs oubliés et les erreurs de signe.</p>

<div class="callout tip"><b>Exemple corrigé</b> Trouver la primitive $F$ de $f(x) = 3x^2 - 4x + 1$ telle que $F(1) = 2$.<br>
Les primitives sont $F(x) = x^3 - 2x^2 + x + C$. Or $F(1) = 1 - 2 + 1 + C = C$, donc $C = 2$ et $F(x) = x^3 - 2x^2 + x + 2$.<br>
Vérification : $F'(x) = 3x^2 - 4x + 1$ ✓.</div>
<div class="callout warn"><b>Pièges classiques</b><ul>
<li><b>Dériver</b> au lieu de primitiver (le réflexe du chapitre précédent).</li>
<li>« À une constante près » n'est vrai que sur un <b>intervalle</b> : sur $\mathbb{R}^*$, les primitives de $\frac{1}{x}$ sont $\ln|x| + C_1$ sur $]-\infty, 0[$ et $\ln|x| + C_2$ sur $]0, +\infty[$, avec deux constantes indépendantes.</li>
<li>Oublier la constante quand une condition initiale est imposée (en physique : position initiale, vitesse initiale).</li>
</ul></div>
<div class="callout key"><b>À retenir</b> $F$ primitive de $f$ ⇔ $F' = f$. Deux primitives diffèrent d'une constante (sur un intervalle). Toujours <b>vérifier en dérivant</b>.</div>
`
    },
    {
      id: 'm6-s-usuelles',
      title: 'Primitives usuelles et formes composées',
      html: String.raw`
<h3>Tableau des primitives usuelles</h3>
<table class="tbl">
<tr><th>$f(x)$</th><th>Une primitive $F(x)$</th><th>Intervalle</th></tr>
<tr><td>$k$ (constante)</td><td>$kx$</td><td>$\mathbb{R}$</td></tr>
<tr><td>$x^n$ ($n \in \mathbb{N}$)</td><td>$\dfrac{x^{n+1}}{n+1}$</td><td>$\mathbb{R}$</td></tr>
<tr><td>$x^\alpha$ ($\alpha \neq -1$)</td><td>$\dfrac{x^{\alpha+1}}{\alpha+1}$</td><td>$]0, +\infty[$</td></tr>
<tr><td>$\dfrac{1}{x}$</td><td>$\ln|x|$</td><td>$]-\infty, 0[$ ou $]0, +\infty[$</td></tr>
<tr><td>$\dfrac{1}{x^2}$</td><td>$-\dfrac{1}{x}$</td><td>$]-\infty, 0[$ ou $]0, +\infty[$</td></tr>
<tr><td>$\dfrac{1}{\sqrt{x}}$</td><td>$2\sqrt{x}$</td><td>$]0, +\infty[$</td></tr>
<tr><td>$\sqrt{x}$</td><td>$\dfrac{2}{3}x^{3/2}$</td><td>$[0, +\infty[$</td></tr>
<tr><td>$\mathrm{e}^x$</td><td>$\mathrm{e}^x$</td><td>$\mathbb{R}$</td></tr>
<tr><td>$\mathrm{e}^{ax}$ ($a \neq 0$)</td><td>$\dfrac{1}{a}\mathrm{e}^{ax}$</td><td>$\mathbb{R}$</td></tr>
<tr><td>$a^x$ ($a \gt 0$, $a \neq 1$)</td><td>$\dfrac{a^x}{\ln a}$</td><td>$\mathbb{R}$</td></tr>
<tr><td>$\ln x$</td><td>$x\ln x - x$</td><td>$]0, +\infty[$</td></tr>
<tr><td>$\cos x$</td><td>$\sin x$</td><td>$\mathbb{R}$</td></tr>
<tr><td>$\sin x$</td><td>$-\cos x$</td><td>$\mathbb{R}$</td></tr>
<tr><td>$\dfrac{1}{\cos^2 x} = 1 + \tan^2 x$</td><td>$\tan x$</td><td>$\left]-\frac{\pi}{2}, \frac{\pi}{2}\right[$ (mod $\pi$)</td></tr>
<tr><td>$\tan x$</td><td>$-\ln|\cos x|$</td><td>$\left]-\frac{\pi}{2}, \frac{\pi}{2}\right[$ (mod $\pi$)</td></tr>
<tr><td>$\operatorname{ch} x$</td><td>$\operatorname{sh} x$</td><td>$\mathbb{R}$</td></tr>
<tr><td>$\operatorname{sh} x$</td><td>$\operatorname{ch} x$</td><td>$\mathbb{R}$</td></tr>
<tr><td>$\dfrac{1}{1+x^2}$</td><td>$\arctan x$</td><td>$\mathbb{R}$</td></tr>
<tr><td>$\dfrac{1}{a^2+x^2}$ ($a \gt 0$)</td><td>$\dfrac{1}{a}\arctan\dfrac{x}{a}$</td><td>$\mathbb{R}$</td></tr>
<tr><td>$\dfrac{1}{\sqrt{1-x^2}}$</td><td>$\arcsin x$</td><td>$]-1, 1[$</td></tr>
<tr><td>$\dfrac{1}{\sqrt{a^2-x^2}}$ ($a \gt 0$)</td><td>$\arcsin\dfrac{x}{a}$</td><td>$]-a, a[$</td></tr>
</table>

<h3>Formes composées : reconnaître $u'$ × (fonction de $u$)</h3>
<table class="tbl">
<tr><th>Forme</th><th>Primitive</th><th>Forme</th><th>Primitive</th></tr>
<tr><td>$u'\,u^n$ ($n \neq -1$)</td><td>$\dfrac{u^{n+1}}{n+1}$</td><td>$\dfrac{u'}{u}$</td><td>$\ln|u|$</td></tr>
<tr><td>$\dfrac{u'}{u^2}$</td><td>$-\dfrac{1}{u}$</td><td>$\dfrac{u'}{\sqrt{u}}$</td><td>$2\sqrt{u}$</td></tr>
<tr><td>$u'\,\mathrm{e}^u$</td><td>$\mathrm{e}^u$</td><td>$u'\cos u$</td><td>$\sin u$</td></tr>
<tr><td>$u'\sin u$</td><td>$-\cos u$</td><td>$\dfrac{u'}{1+u^2}$</td><td>$\arctan u$</td></tr>
<tr><td>$\dfrac{u'}{\cos^2 u}$</td><td>$\tan u$</td><td>$f(ax+b)$</td><td>$\dfrac{1}{a}F(ax+b)$</td></tr>
</table>

<h3>Méthode</h3>
<div class="flow"><span>Repérer un $u$ candidat</span><span>Vérifier que $u'$ apparaît, à une constante près</span><span>Ajuster la constante</span><span>Vérifier en dérivant</span></div>

<div class="callout tip"><b>Exemples corrigés</b>
$\displaystyle\int\frac{x}{x^2+1}\,\mathrm{d}x$ : $u = x^2 + 1$, $u' = 2x$, donc $\frac{x}{x^2+1} = \frac{1}{2}\cdot\frac{u'}{u}$ et une primitive est $\frac{1}{2}\ln(x^2+1)$.<br>
$\displaystyle\int\cos x\,\sin^3 x\,\mathrm{d}x$ : $u = \sin x$, forme $u'u^3$, primitive $\frac{\sin^4 x}{4}$.<br>
$\displaystyle\int\tan x\,\mathrm{d}x = \int\frac{\sin x}{\cos x}\,\mathrm{d}x = -\int\frac{-\sin x}{\cos x}\,\mathrm{d}x = -\ln|\cos x| + C$ (forme $-\frac{u'}{u}$).<br>
$\displaystyle\int\cos(3x+1)\,\mathrm{d}x = \frac{1}{3}\sin(3x+1) + C$.</div>
<div class="callout warn"><b>Pièges classiques</b><ul>
<li>On ne peut ajuster qu'une <b>constante</b>, jamais une fonction de $x$ : $\int\mathrm{e}^{x^2}\mathrm{d}x \neq \frac{\mathrm{e}^{x^2}}{2x}$ (dérive pour t'en convaincre).</li>
<li>Primitive d'un produit $\neq$ produit des primitives ; primitive d'un quotient $\neq$ quotient des primitives.</li>
<li>$\int\sin x\,\mathrm{d}x = -\cos x$ (signe !) ; $\int\cos(ax)\,\mathrm{d}x = \frac{1}{a}\sin(ax)$ (on <b>divise</b> par $a$).</li>
<li>$\int\frac{1}{x}\,\mathrm{d}x = \ln|x|$ : la règle $\frac{x^{n+1}}{n+1}$ échoue pour $n = -1$.</li>
</ul></div>
<div class="callout key"><b>À retenir</b> Lire le tableau des dérivées <b>de droite à gauche</b>. Formes composées : repérer $u$ et $u'$ ; seule une constante multiplicative peut être ajustée.</div>
`
    },
    {
      id: 'm6-s-integrale',
      title: 'Intégrale définie et théorème fondamental',
      html: String.raw`
<h3>Définition par une primitive</h3>
<p>Si $f$ est continue sur $[a, b]$ et $F$ en est une primitive :
$$\int_a^b f(x)\,\mathrm{d}x = \Big[F(x)\Big]_a^b = F(b) - F(a).$$
Le résultat ne dépend pas de la primitive choisie (la constante s'élimine). La variable est <b>muette</b> : $\int_a^b f(x)\,\mathrm{d}x = \int_a^b f(t)\,\mathrm{d}t$.</p>

<h3>Interprétation : aire algébrique</h3>
<p>Si $f \geq 0$ et $a \leq b$, $\int_a^b f$ est l'<b>aire</b> du domaine compris entre la courbe, l'axe des abscisses et les droites $x = a$, $x = b$. Les portions sous l'axe comptent <b>négativement</b>. Ci-dessous, $\int_0^{\pi}\sin = 2$ mais $\int_0^{2\pi}\sin = 0$ (les deux arches se compensent).</p>
<div class="widget" data-w="plot" data-f="sin(x)" data-x="-0.5;7" data-y="-1.5;1.5"></div>
<p><b>Sommes de Riemann</b> (méthode des rectangles, base du calcul numérique) : pour $f$ continue,
$$\int_a^b f(x)\,\mathrm{d}x = \lim_{n\to\infty}\frac{b-a}{n}\sum_{k=0}^{n-1} f\left(a + k\,\frac{b-a}{n}\right).$$</p>

<h3>Propriétés</h3>
<ul>
<li><b>Linéarité</b> : $\int_a^b (\lambda f + \mu g) = \lambda\int_a^b f + \mu\int_a^b g$.</li>
<li><b>Chasles</b> : $\int_a^b f + \int_b^c f = \int_a^c f$ ; $\int_b^a f = -\int_a^b f$ ; $\int_a^a f = 0$.</li>
<li><b>Positivité</b> : si $a \leq b$ et $f \geq 0$ sur $[a, b]$, alors $\int_a^b f \geq 0$. <b>Croissance</b> : $f \leq g$ ⇒ $\int_a^b f \leq \int_a^b g$ (toujours avec $a \leq b$).</li>
<li><b>Valeur absolue</b> : $\left|\int_a^b f\right| \leq \int_a^b |f|$ ($a \leq b$).</li>
<li><b>Inégalité de la moyenne</b> : si $m \leq f \leq M$ sur $[a, b]$, alors $m(b-a) \leq \int_a^b f \leq M(b-a)$.</li>
<li>Si $f$ est <b>continue, positive</b> et $\int_a^b f = 0$ (avec $a \lt b$), alors $f = 0$ sur $[a, b]$.</li>
<li><b>Parité</b> : $f$ paire ⇒ $\int_{-a}^{a} f = 2\int_0^a f$ ; $f$ impaire ⇒ $\int_{-a}^{a} f = 0$. <b>Périodicité</b> : si $f$ est $T$-périodique, $\int_a^{a+T} f$ ne dépend pas de $a$.</li>
</ul>

<h3>Valeur moyenne</h3>
<p>$$\mu = \frac{1}{b-a}\int_a^b f(x)\,\mathrm{d}x.$$
C'est la hauteur du rectangle de base $[a, b]$ ayant la même aire. Si $f$ est continue, il existe $c \in [a, b]$ tel que $f(c) = \mu$.</p>

<h3>Théorème fondamental de l'analyse</h3>
<p>Si $f$ est continue sur un intervalle $I$ et $a \in I$, la fonction
$$F(x) = \int_a^x f(t)\,\mathrm{d}t$$
est dérivable sur $I$ et $F' = f$ : c'est l'<b>unique primitive de $f$ qui s'annule en $a$</b>. Plus généralement, pour $u$, $v$ dérivables :
$$\frac{\mathrm{d}}{\mathrm{d}x}\int_{u(x)}^{v(x)} f(t)\,\mathrm{d}t = v'(x)\,f\big(v(x)\big) - u'(x)\,f\big(u(x)\big).$$</p>

<div class="callout tip"><b>Exemples corrigés</b>
$\displaystyle\int_0^{\pi}\sin x\,\mathrm{d}x = \Big[-\cos x\Big]_0^{\pi} = -\cos\pi + \cos 0 = 1 + 1 = 2$.<br>
$\displaystyle\int_0^1 \mathrm{e}^x\,\mathrm{d}x = \mathrm{e}^1 - \mathrm{e}^0 = \mathrm{e} - 1$ (et non $\mathrm{e}$ : $F(0) = 1 \neq 0$).<br>
$G(x) = \displaystyle\int_0^{x^2}\cos t\,\mathrm{d}t$ : $G'(x) = 2x\cos(x^2)$ (sans calculer l'intégrale ; on vérifie avec $G(x) = \sin(x^2)$).</div>
<div class="callout warn"><b>Pièges classiques</b><ul>
<li>Oublier de soustraire $F(a)$ quand il n'est pas nul.</li>
<li>Confondre intégrale (aire <b>algébrique</b>) et aire géométrique quand $f$ change de signe.</li>
<li>Renverser les bornes ($a \gt b$) inverse le sens des inégalités.</li>
<li>Dans le théorème fondamental, on <b>ne dérive pas</b> l'intégrande : $\frac{\mathrm{d}}{\mathrm{d}x}\int_0^x f(t)\,\mathrm{d}t = f(x)$.</li>
</ul></div>
<div class="callout key"><b>À retenir</b> $\int_a^b f = F(b) - F(a)$. $x \mapsto \int_a^x f(t)\,\mathrm{d}t$ a pour dérivée $f$. Moyenne : $\frac{1}{b-a}\int_a^b f$.</div>
`
    },
    {
      id: 'm6-s-ipp',
      title: 'Intégration par parties',
      html: String.raw`
<h3>Formule</h3>
<p>Si $u$ et $v$ sont de classe $C^1$ sur $[a, b]$ :
$$\int_a^b u(x)\,v'(x)\,\mathrm{d}x = \Big[u(x)\,v(x)\Big]_a^b - \int_a^b u'(x)\,v(x)\,\mathrm{d}x.$$
Origine : on intègre $(uv)' = u'v + uv'$. Version sans bornes : $\int uv' = uv - \int u'v$.</p>

<h3>Méthode : bien choisir $u$ (à dériver) et $v'$ (à primitiver)</h3>
<ul>
<li>On <b>dérive</b> ce qui se simplifie en dérivant : un polynôme (son degré baisse), $\ln x$ (devient $\frac{1}{x}$), $\arctan x$ (devient une fraction rationnelle).</li>
<li>On <b>primitive</b> ce qui se primitive sans se compliquer : $\mathrm{e}^{ax}$, $\sin$, $\cos$, $\operatorname{ch}$, $\operatorname{sh}$ (ou un polynôme quand l'autre facteur est $\ln$ ou $\arctan$).</li>
<li>Moyen mnémotechnique <b>ALPES</b> : on prend pour $u$ le facteur qui apparaît en premier dans la liste <b>A</b>rc (arctan, arcsin) – <b>L</b>ogarithme – <b>P</b>olynôme – <b>E</b>xponentielle – <b>S</b>inus/cosinus.</li>
<li>Astuce : pour $\int\ln x\,\mathrm{d}x$ ou $\int\arctan x\,\mathrm{d}x$, on prend $v' = 1$.</li>
<li>Polynôme de degré $n$ × exponentielle : $n$ IPP successives. Exponentielle × trigonométrique : deux IPP et on retombe sur l'intégrale de départ (équation).</li>
</ul>
<div class="flow"><span>Choisir $u$ et $v'$</span><span>Calculer $u'$ et $v$</span><span>Écrire $[uv] - \int u'v$</span><span>Calculer l'intégrale restante (plus simple)</span></div>

<div class="callout tip"><b>Exemples corrigés</b>
<b>1.</b> $\displaystyle\int_0^1 x\,\mathrm{e}^x\,\mathrm{d}x$ : $u = x$, $v' = \mathrm{e}^x$, $u' = 1$, $v = \mathrm{e}^x$.
$$\int_0^1 x\,\mathrm{e}^x\,\mathrm{d}x = \Big[x\,\mathrm{e}^x\Big]_0^1 - \int_0^1\mathrm{e}^x\,\mathrm{d}x = \mathrm{e} - (\mathrm{e} - 1) = 1.$$
<b>2.</b> $\displaystyle\int_1^{\mathrm{e}}\ln x\,\mathrm{d}x$ : $u = \ln x$, $v' = 1$, $u' = \frac{1}{x}$, $v = x$ : $\Big[x\ln x\Big]_1^{\mathrm{e}} - \displaystyle\int_1^{\mathrm{e}} 1\,\mathrm{d}x = \mathrm{e} - (\mathrm{e} - 1) = 1$. Au passage : $\int\ln x\,\mathrm{d}x = x\ln x - x + C$.<br>
<b>3.</b> $I = \displaystyle\int\mathrm{e}^x\cos x\,\mathrm{d}x$. IPP avec $u = \cos x$, $v' = \mathrm{e}^x$ : $I = \mathrm{e}^x\cos x + \int\mathrm{e}^x\sin x\,\mathrm{d}x$. Nouvelle IPP avec $u = \sin x$ : $\int\mathrm{e}^x\sin x\,\mathrm{d}x = \mathrm{e}^x\sin x - I$. Donc $2I = \mathrm{e}^x(\cos x + \sin x)$ et $I = \frac{\mathrm{e}^x(\cos x + \sin x)}{2} + C$.</div>
<div class="callout warn"><b>Pièges classiques</b><ul>
<li>Oublier le signe <b>moins</b> devant $\int u'v$, ou le terme tout entier.</li>
<li>Mauvais choix : avec $u = \mathrm{e}^x$ et $v' = x$ dans $\int x\mathrm{e}^x$, on obtient $\int\frac{x^2}{2}\mathrm{e}^x$, plus compliqué !</li>
<li>Oublier d'évaluer le crochet $[uv]_a^b$ aux bornes.</li>
<li>Primitiver chaque facteur séparément : $\int x\,\mathrm{e}^x \neq \frac{x^2}{2}\mathrm{e}^x$.</li>
</ul></div>
<div class="callout key"><b>À retenir</b> $\int_a^b uv' = [uv]_a^b - \int_a^b u'v$ : on dérive ce qui se simplifie (ALPES), on primitive ce qui reste stable.</div>
`
    },
    {
      id: 'm6-s-changement',
      title: 'Changement de variable',
      html: String.raw`
<h3>Théorème</h3>
<p>Si $\varphi$ est de classe $C^1$ sur $[\alpha, \beta]$ et $f$ continue sur l'intervalle $\varphi([\alpha, \beta])$ :
$$\int_{\alpha}^{\beta} f\big(\varphi(t)\big)\,\varphi'(t)\,\mathrm{d}t = \int_{\varphi(\alpha)}^{\varphi(\beta)} f(x)\,\mathrm{d}x.$$
En pratique : on pose $x = \varphi(t)$, on remplace $\mathrm{d}x$ par $\varphi'(t)\,\mathrm{d}t$ et on <b>change les bornes</b>.</p>

<h3>Méthode</h3>
<div class="flow"><span>Poser $x = \varphi(t)$ (ou $t = \psi(x)$)</span><span>Calculer $\mathrm{d}x = \varphi'(t)\,\mathrm{d}t$</span><span>Changer les bornes</span><span>Tout exprimer en $t$</span><span>Calculer (pas de retour à $x$ pour une intégrale définie)</span></div>

<div class="callout tip"><b>Exemple corrigé 1 : quart de disque</b> $I = \displaystyle\int_0^1\sqrt{1-x^2}\,\mathrm{d}x$. On pose $x = \sin t$, $t \in [0, \frac{\pi}{2}]$ : $\mathrm{d}x = \cos t\,\mathrm{d}t$ ; $x = 0 \leftrightarrow t = 0$, $x = 1 \leftrightarrow t = \frac{\pi}{2}$ ; $\sqrt{1 - \sin^2 t} = \cos t$ car $\cos t \geq 0$ ici.
$$I = \int_0^{\pi/2}\cos^2 t\,\mathrm{d}t = \int_0^{\pi/2}\frac{1+\cos 2t}{2}\,\mathrm{d}t = \left[\frac{t}{2} + \frac{\sin 2t}{4}\right]_0^{\pi/2} = \frac{\pi}{4}.$$
Cohérent : c'est l'aire d'un quart de disque de rayon 1.</div>
<div class="callout tip"><b>Exemple corrigé 2</b> $J = \displaystyle\int_1^4\frac{\mathrm{d}x}{x + \sqrt{x}}$. On pose $t = \sqrt{x}$, soit $x = t^2$, $\mathrm{d}x = 2t\,\mathrm{d}t$, bornes $1 \to 1$ et $4 \to 2$ :
$$J = \int_1^2\frac{2t}{t^2 + t}\,\mathrm{d}t = \int_1^2\frac{2}{t+1}\,\mathrm{d}t = 2\Big[\ln(t+1)\Big]_1^2 = 2\ln\frac{3}{2}.$$</div>
<p><b>Cas utiles</b> : changement affine $x = at + b$ ; $t = -x$ pour exploiter la parité ; $t = \ln x$ quand $\frac{\mathrm{d}x}{x}$ apparaît ; $x = a\sin t$ pour $\sqrt{a^2 - x^2}$ ; $x = a\tan t$ pour $a^2 + x^2$.</p>
<div class="callout warn"><b>Pièges classiques</b><ul>
<li>Oublier de <b>changer les bornes</b> (ou les changer et revenir quand même à $x$).</li>
<li>Oublier le facteur $\varphi'(t)$ : $\mathrm{d}x \neq \mathrm{d}t$.</li>
<li>$\sqrt{\cos^2 t} = |\cos t|$ : vérifier le signe sur l'intervalle choisi.</li>
<li>Laisser des $x$ et des $t$ mélangés dans la même intégrale.</li>
</ul></div>
<div class="callout key"><b>À retenir</b> Trois choses changent : la fonction, l'élément $\mathrm{d}x = \varphi'(t)\,\mathrm{d}t$, et les <b>bornes</b>.</div>
`
    },
    {
      id: 'm6-s-fractions',
      title: 'Fractions rationnelles simples',
      html: String.raw`
<h3>Briques de base</h3>
<table class="tbl">
<tr><th>$f(x)$</th><th>Une primitive</th></tr>
<tr><td>$\dfrac{1}{x-a}$</td><td>$\ln|x-a|$</td></tr>
<tr><td>$\dfrac{1}{(x-a)^n}$, $n \geq 2$</td><td>$-\dfrac{1}{(n-1)(x-a)^{n-1}}$</td></tr>
<tr><td>$\dfrac{1}{x^2+a^2}$ ($a \gt 0$)</td><td>$\dfrac{1}{a}\arctan\dfrac{x}{a}$</td></tr>
<tr><td>$\dfrac{2x+b}{x^2+bx+c}$</td><td>$\ln|x^2+bx+c|$</td></tr>
<tr><td>$\dfrac{1}{x^2-a^2}$ ($a \gt 0$)</td><td>$\dfrac{1}{2a}\ln\left|\dfrac{x-a}{x+a}\right|$</td></tr>
</table>

<h3>Décomposition en éléments simples (cas de base)</h3>
<p>Si $\deg P \lt \deg Q$ (sinon, faire d'abord la division euclidienne) et $Q(x) = (x-a)(x-b)$ avec $a \neq b$ :
$$\frac{P(x)}{(x-a)(x-b)} = \frac{A}{x-a} + \frac{B}{x-b}.$$
<b>Méthode « cache »</b> : pour obtenir $A$, on multiplie par $(x-a)$ puis on fait $x = a$ : $A = \dfrac{P(a)}{a-b}$. De même $B = \dfrac{P(b)}{b-a}$. On vérifie en réduisant au même dénominateur.</p>
<div class="callout tip"><b>Exemple corrigé</b> $\dfrac{1}{x^2+3x+2} = \dfrac{1}{(x+1)(x+2)} = \dfrac{A}{x+1} + \dfrac{B}{x+2}$.<br>
$A = \frac{1}{-1+2} = 1$, $B = \frac{1}{-2+1} = -1$. Donc
$$\int_0^1\frac{\mathrm{d}x}{x^2+3x+2} = \Big[\ln(x+1) - \ln(x+2)\Big]_0^1 = (\ln 2 - \ln 3) - (0 - \ln 2) = \ln\frac{4}{3}.$$</div>

<h3>Dénominateur du second degré sans racine réelle</h3>
<p>On met le dénominateur sous <b>forme canonique</b> pour se ramener à $\frac{1}{u^2 + a^2}$ : $x^2 + 2x + 5 = (x+1)^2 + 4$, donc
$$\int\frac{\mathrm{d}x}{x^2+2x+5} = \frac{1}{2}\arctan\frac{x+1}{2} + C.$$
Si le numérateur contient $x$, on fait d'abord apparaître la dérivée du dénominateur.</p>
<div class="callout tip"><b>Exemple corrigé</b> $\displaystyle\int\frac{x+3}{x^2+2x+5}\,\mathrm{d}x$ : $x + 3 = \frac{1}{2}(2x+2) + 2$, donc
$$\int\frac{x+3}{x^2+2x+5}\,\mathrm{d}x = \frac{1}{2}\ln(x^2+2x+5) + 2\times\frac{1}{2}\arctan\frac{x+1}{2} = \frac{1}{2}\ln(x^2+2x+5) + \arctan\frac{x+1}{2} + C.$$</div>
<div class="callout warn"><b>Pièges classiques</b><ul>
<li>Numérateur de degré $\geq$ à celui du dénominateur : division euclidienne d'abord ($\frac{x^2}{x^2+1} = 1 - \frac{1}{x^2+1}$).</li>
<li>Oublier la valeur absolue dans $\ln|x - a|$, ou le facteur $\frac{1}{a}$ devant $\arctan\frac{x}{a}$.</li>
<li>Erreur de signe dans la décomposition : <b>toujours vérifier</b> en réduisant au même dénominateur.</li>
<li>Confondre $\frac{1}{x^2+1}$ (primitive $\arctan x$) et $\frac{1}{x^2-1}$ (décomposition, des $\ln$).</li>
</ul></div>
<div class="callout key"><b>À retenir</b> Racines réelles distinctes : éléments simples → des $\ln$. Pas de racine réelle : forme canonique → $\arctan$.</div>
`
    },
    {
      id: 'm6-s-trigo',
      title: 'Linéarisation, intégrales classiques, Wallis',
      html: String.raw`
<h3>Linéarisation</h3>
<p>Pour intégrer un produit ou une puissance de fonctions trigonométriques, on le transforme en <b>somme</b> de $\cos(kx)$ et $\sin(kx)$ :</p>
<table class="tbl">
<tr><th>Formule</th><th>Conséquence</th></tr>
<tr><td>$\cos^2 x = \dfrac{1 + \cos 2x}{2}$</td><td>$\displaystyle\int\cos^2 x\,\mathrm{d}x = \frac{x}{2} + \frac{\sin 2x}{4} + C$</td></tr>
<tr><td>$\sin^2 x = \dfrac{1 - \cos 2x}{2}$</td><td>$\displaystyle\int\sin^2 x\,\mathrm{d}x = \frac{x}{2} - \frac{\sin 2x}{4} + C$</td></tr>
<tr><td>$\sin x\cos x = \dfrac{\sin 2x}{2}$</td><td>$\displaystyle\int\sin x\cos x\,\mathrm{d}x = -\frac{\cos 2x}{4} + C$</td></tr>
<tr><td>$\cos a\cos b = \frac{1}{2}\big[\cos(a+b) + \cos(a-b)\big]$</td><td rowspan="3">produits → sommes</td></tr>
<tr><td>$\sin a\sin b = \frac{1}{2}\big[\cos(a-b) - \cos(a+b)\big]$</td></tr>
<tr><td>$\sin a\cos b = \frac{1}{2}\big[\sin(a+b) + \sin(a-b)\big]$</td></tr>
</table>
<p>Pour les puissances plus élevées : formules d'Euler $\cos x = \frac{\mathrm{e}^{\mathrm{i}x} + \mathrm{e}^{-\mathrm{i}x}}{2}$ et binôme de Newton. Exemple : $\cos^3 x = \frac{\cos 3x + 3\cos x}{4}$.</p>

<h3>Puissances impaires</h3>
<p>On isole un facteur et on utilise $\cos^2 + \sin^2 = 1$ pour obtenir des formes $u'u^n$ : $\sin^3 x = \sin x\,(1 - \cos^2 x)$, donc
$$\int\sin^3 x\,\mathrm{d}x = -\cos x + \frac{\cos^3 x}{3} + C.$$</p>

<h3>Intégrales classiques sur une période</h3>
<ul>
<li>$\int_0^{2\pi}\cos(nx)\,\mathrm{d}x = \int_0^{2\pi}\sin(nx)\,\mathrm{d}x = 0$ pour $n \in \mathbb{N}^*$.</li>
<li>$\int_0^{2\pi}\cos^2(nx)\,\mathrm{d}x = \int_0^{2\pi}\sin^2(nx)\,\mathrm{d}x = \pi$ : la valeur moyenne de $\cos^2$ sur une période est $\frac{1}{2}$.</li>
<li><b>Orthogonalité</b> (base des séries de Fourier) : $\int_0^{2\pi}\cos(nx)\cos(mx)\,\mathrm{d}x = 0$ si $n \neq m$, et $\int_0^{2\pi}\sin(nx)\cos(mx)\,\mathrm{d}x = 0$ pour tous $n, m$.</li>
<li><b>Intégrale de Gauss</b> (admise, utile en probabilités) : $\int_{-\infty}^{+\infty}\mathrm{e}^{-x^2}\,\mathrm{d}x = \sqrt{\pi}$.</li>
</ul>

<h3>Intégrales de Wallis (aperçu)</h3>
<p>$$W_n = \int_0^{\pi/2}\sin^n x\,\mathrm{d}x = \int_0^{\pi/2}\cos^n x\,\mathrm{d}x.$$
$W_0 = \frac{\pi}{2}$, $W_1 = 1$. Une IPP ($u = \sin^{n+1} x$, $v' = \sin x$) donne $W_{n+2} = (n+1)\int_0^{\pi/2}\sin^n x\cos^2 x\,\mathrm{d}x = (n+1)(W_n - W_{n+2})$, d'où
$$W_{n+2} = \frac{n+1}{n+2}\,W_n.$$
Ainsi $W_2 = \frac{\pi}{4}$, $W_3 = \frac{2}{3}$, $W_4 = \frac{3\pi}{16}$. On montre aussi $n\,W_n\,W_{n-1} = \frac{\pi}{2}$ et $W_n \sim \sqrt{\frac{\pi}{2n}}$.</p>

<div class="callout tip"><b>Exemple corrigé</b> $\displaystyle\int_0^{\pi/2}\sin^3 x\,\mathrm{d}x = \left[-\cos x + \frac{\cos^3 x}{3}\right]_0^{\pi/2} = 0 - \left(-1 + \frac{1}{3}\right) = \frac{2}{3}$, ce qui est bien $W_3 = \frac{2}{3}W_1$.</div>
<div class="callout warn"><b>Pièges classiques</b><ul>
<li>$\int\cos^2 x\,\mathrm{d}x \neq \frac{\cos^3 x}{3}$ : ce n'est pas une forme $u'u^n$ (il manque $u' = -\sin x$).</li>
<li>Inverser les signes de $\cos^2$ et $\sin^2$ : test en $x = 0$, $\cos^2 0 = 1 = \frac{1 + 1}{2}$ ✓.</li>
<li>$\cos^2 x = (\cos x)^2$, à ne pas confondre avec $\cos(x^2)$.</li>
</ul></div>
<div class="callout key"><b>À retenir</b> Puissances paires : linéariser. Puissances impaires : isoler un facteur, forme $u'u^n$. Moyenne de $\cos^2$ ou $\sin^2$ sur une période : $\frac{1}{2}$.</div>
`
    },
    {
      id: 'm6-s-applications',
      title: 'Aires, valeur moyenne et valeur efficace',
      html: String.raw`
<h3>Aire entre deux courbes</h3>
<p>L'aire du domaine compris entre les courbes de $f$ et $g$ pour $x \in [a, b]$ vaut
$$\mathcal{A} = \int_a^b |f(x) - g(x)|\,\mathrm{d}x.$$
Méthode : chercher les points d'intersection ($f = g$), étudier le signe de $f - g$, découper l'intégrale en morceaux où le signe est constant.</p>
<div class="widget" data-w="plot" data-f="x;x^2" data-x="-0.5;1.5" data-y="-0.5;1.5"></div>
<div class="callout tip"><b>Exemple corrigé</b> Aire entre $y = x$ et $y = x^2$ : elles se coupent en $0$ et $1$, et $x \geq x^2$ sur $[0, 1]$.
$$\mathcal{A} = \int_0^1 (x - x^2)\,\mathrm{d}x = \frac{1}{2} - \frac{1}{3} = \frac{1}{6}.$$
Aire « géométrique » entre la sinusoïde et l'axe sur $[0, 2\pi]$ : $\int_0^{2\pi}|\sin x|\,\mathrm{d}x = 2 + 2 = 4$ (alors que $\int_0^{2\pi}\sin x\,\mathrm{d}x = 0$).</div>

<h3>Valeur moyenne d'un signal périodique</h3>
<p>Pour un signal $s$ de période $T$ :
$$\langle s \rangle = \frac{1}{T}\int_0^T s(t)\,\mathrm{d}t.$$
C'est la <b>composante continue</b> du signal (ce que mesure un voltmètre en position DC).</p>

<h3>Valeur efficace (RMS)</h3>
<p>$$S_{\text{eff}} = \sqrt{\langle s^2\rangle} = \sqrt{\frac{1}{T}\int_0^T s^2(t)\,\mathrm{d}t}.$$
Sens physique : c'est la valeur de la tension <b>continue</b> qui dissiperait la même puissance moyenne dans une résistance : $P = \dfrac{U_{\text{eff}}^2}{R} = R\,I_{\text{eff}}^2$. Les voltmètres « TRMS » mesurent cette grandeur.</p>
<table class="tbl">
<tr><th>Signal (amplitude $A$)</th><th>Valeur moyenne</th><th>Valeur efficace</th></tr>
<tr><td>Sinusoïde $A\sin(\omega t)$</td><td>$0$</td><td>$\dfrac{A}{\sqrt{2}}$</td></tr>
<tr><td>Sinusoïde redressée double alternance $|A\sin(\omega t)|$</td><td>$\dfrac{2A}{\pi}$</td><td>$\dfrac{A}{\sqrt{2}}$</td></tr>
<tr><td>Carré symétrique $\pm A$</td><td>$0$</td><td>$A$</td></tr>
<tr><td>Carré $0$ / $A$, rapport cyclique $\alpha$</td><td>$\alpha A$</td><td>$A\sqrt{\alpha}$</td></tr>
<tr><td>Triangle symétrique $\pm A$</td><td>$0$</td><td>$\dfrac{A}{\sqrt{3}}$</td></tr>
<tr><td>Dent de scie de $0$ à $A$</td><td>$\dfrac{A}{2}$</td><td>$\dfrac{A}{\sqrt{3}}$</td></tr>
</table>
<div class="callout tip"><b>Exemple corrigé</b> $u(t) = U_m\cos(\omega t)$, période $T = \frac{2\pi}{\omega}$. Par linéarisation, $u^2(t) = U_m^2\,\dfrac{1 + \cos(2\omega t)}{2}$. Sur une période, le cosinus a une moyenne nulle, donc $\langle u^2\rangle = \dfrac{U_m^2}{2}$ et
$$U_{\text{eff}} = \frac{U_m}{\sqrt{2}}.$$
Réseau électrique : $230\ \text{V}$ efficaces, soit une amplitude $U_m = 230\sqrt{2} \approx 325\ \text{V}$.</div>
<div class="callout warn"><b>Pièges classiques</b><ul>
<li>Valeur efficace $\neq$ valeur moyenne : une sinusoïde a une moyenne nulle mais une valeur efficace $\frac{A}{\sqrt{2}}$.</li>
<li>Le facteur $\frac{1}{\sqrt{2}}$ n'est valable que pour une <b>sinusoïde</b> (carré : $A$ ; triangle : $\frac{A}{\sqrt{3}}$).</li>
<li>Oublier la racine carrée, ou le facteur $\frac{1}{T}$.</li>
<li>Aire = $\int|f - g|$ : si les courbes se croisent, $\int(f - g)$ donne une compensation, pas une aire.</li>
</ul></div>
<div class="callout key"><b>À retenir</b> Moyenne : $\frac{1}{T}\int_0^T s$. Efficace : $\sqrt{\frac{1}{T}\int_0^T s^2}$. Sinusoïde : $S_{\text{eff}} = \frac{A}{\sqrt{2}}$.</div>
`
    },
    {
      id: 'm6-s-memo',
      title: 'Mémo : tableau récapitulatif',
      html: String.raw`
<table class="tbl">
<tr><th>$f$</th><th>$F$</th><th>$f$</th><th>$F$</th></tr>
<tr><td>$x^n$ ($n \neq -1$)</td><td>$\frac{x^{n+1}}{n+1}$</td><td>$u'u^n$</td><td>$\frac{u^{n+1}}{n+1}$</td></tr>
<tr><td>$\frac{1}{x}$</td><td>$\ln|x|$</td><td>$\frac{u'}{u}$</td><td>$\ln|u|$</td></tr>
<tr><td>$\frac{1}{\sqrt{x}}$</td><td>$2\sqrt{x}$</td><td>$\frac{u'}{\sqrt{u}}$</td><td>$2\sqrt{u}$</td></tr>
<tr><td>$\mathrm{e}^{ax}$</td><td>$\frac{1}{a}\mathrm{e}^{ax}$</td><td>$u'\mathrm{e}^u$</td><td>$\mathrm{e}^u$</td></tr>
<tr><td>$\cos x$</td><td>$\sin x$</td><td>$u'\cos u$</td><td>$\sin u$</td></tr>
<tr><td>$\sin x$</td><td>$-\cos x$</td><td>$u'\sin u$</td><td>$-\cos u$</td></tr>
<tr><td>$\frac{1}{1+x^2}$</td><td>$\arctan x$</td><td>$\frac{u'}{1+u^2}$</td><td>$\arctan u$</td></tr>
<tr><td>$\frac{1}{x^2+a^2}$</td><td>$\frac{1}{a}\arctan\frac{x}{a}$</td><td>$\frac{1}{\sqrt{1-x^2}}$</td><td>$\arcsin x$</td></tr>
<tr><td>$\ln x$</td><td>$x\ln x - x$</td><td>$\tan x$</td><td>$-\ln|\cos x|$</td></tr>
<tr><td>$\operatorname{ch} x$</td><td>$\operatorname{sh} x$</td><td>$\operatorname{sh} x$</td><td>$\operatorname{ch} x$</td></tr>
<tr><td>$a^x$</td><td>$\frac{a^x}{\ln a}$</td><td>$f(ax+b)$</td><td>$\frac{1}{a}F(ax+b)$</td></tr>
</table>
<div class="grid2">
<div class="mini"><h4>Intégrale</h4><p>$\int_a^b f = F(b) - F(a)$<br>Chasles, linéarité, positivité ($a \leq b$)<br>Moyenne : $\frac{1}{b-a}\int_a^b f$<br>$\left(\int_a^x f(t)\,\mathrm{d}t\right)' = f(x)$</p></div>
<div class="mini"><h4>IPP</h4><p>$\int_a^b uv' = [uv]_a^b - \int_a^b u'v$<br>$u$ : à dériver (ALPES : Arc, Log, Polynôme, Exp, Sin)<br>$v'$ : à primitiver</p></div>
<div class="mini"><h4>Changement de variable</h4><p>$x = \varphi(t)$, $\mathrm{d}x = \varphi'(t)\,\mathrm{d}t$<br><b>changer les bornes</b><br>$\sqrt{1-x^2}$ : $x = \sin t$</p></div>
<div class="mini"><h4>Fractions rationnelles</h4><p>$\frac{1}{(x-a)(x-b)} = \frac{A}{x-a} + \frac{B}{x-b}$ → $\ln$<br>$x^2 + bx + c$ sans racine : forme canonique → $\arctan$</p></div>
<div class="mini"><h4>Trigonométrie</h4><p>$\cos^2 x = \frac{1+\cos 2x}{2}$, $\sin^2 x = \frac{1-\cos 2x}{2}$<br>$\int_0^{2\pi}\cos^2 = \pi$<br>Wallis : $W_{n+2} = \frac{n+1}{n+2}W_n$</p></div>
<div class="mini"><h4>Signaux</h4><p>$\langle s\rangle = \frac{1}{T}\int_0^T s$<br>$S_{\text{eff}} = \sqrt{\frac{1}{T}\int_0^T s^2}$<br>Sinus : $\frac{A}{\sqrt{2}}$ ; carré : $A$ ; triangle : $\frac{A}{\sqrt{3}}$</p></div>
</div>
<div class="callout key"><b>Réflexes</b> Vérifier une primitive en la dérivant ; ne jamais oublier $F(a)$ ; en changement de variable, changer les bornes ; une aire est toujours positive.</div>
`
    }
  ],

  /* =====================================================================
   *  FORMULAIRE
   * ===================================================================== */
  formulas: [
    { id: 'm6-fo-def', name: 'Primitive', tex: String.raw`F \text{ primitive de } f \text{ sur } I \iff F' = f`, note: String.raw`Sur un intervalle, les primitives sont les $F + C$.` },
    { id: 'm6-fo-xn', name: 'Primitive de x^n', tex: String.raw`\int x^n\,\mathrm{d}x = \frac{x^{n+1}}{n+1} + C`, note: String.raw`Pour $n \neq -1$ (et $x^\alpha$, $\alpha \neq -1$, sur $]0,+\infty[$).` },
    { id: 'm6-fo-inv', name: 'Primitive de 1/x', tex: String.raw`\int \frac{\mathrm{d}x}{x} = \ln|x| + C`, note: String.raw`Sur $]-\infty, 0[$ ou sur $]0, +\infty[$.` },
    { id: 'm6-fo-inv2', name: 'Primitive de 1/x²', tex: String.raw`\int \frac{\mathrm{d}x}{x^2} = -\frac{1}{x} + C` },
    { id: 'm6-fo-invsqrt', name: 'Primitive de 1/√x', tex: String.raw`\int \frac{\mathrm{d}x}{\sqrt{x}} = 2\sqrt{x} + C`, note: String.raw`Et $\int\sqrt{x}\,\mathrm{d}x = \frac{2}{3}x^{3/2} + C$.` },
    { id: 'm6-fo-exp', name: 'Primitive de l\'exponentielle', tex: String.raw`\int \mathrm{e}^{ax}\,\mathrm{d}x = \frac{1}{a}\,\mathrm{e}^{ax} + C`, note: String.raw`$a \neq 0$ ; pour $a = 1$ : $\int\mathrm{e}^x = \mathrm{e}^x$.` },
    { id: 'm6-fo-ax', name: 'Primitive de a^x', tex: String.raw`\int a^x\,\mathrm{d}x = \frac{a^x}{\ln a} + C`, note: String.raw`$a \gt 0$, $a \neq 1$.` },
    { id: 'm6-fo-ln', name: 'Primitive du logarithme', tex: String.raw`\int \ln x\,\mathrm{d}x = x\ln x - x + C`, note: String.raw`Par IPP avec $u = \ln x$, $v' = 1$.` },
    { id: 'm6-fo-cos', name: 'Primitive du cosinus', tex: String.raw`\int \cos x\,\mathrm{d}x = \sin x + C` },
    { id: 'm6-fo-sin', name: 'Primitive du sinus', tex: String.raw`\int \sin x\,\mathrm{d}x = -\cos x + C`, note: String.raw`Attention au signe moins.` },
    { id: 'm6-fo-cosax', name: 'Primitive de cos(ax) et sin(ax)', tex: String.raw`\int \cos(ax)\,\mathrm{d}x = \frac{\sin(ax)}{a} \qquad \int \sin(ax)\,\mathrm{d}x = -\frac{\cos(ax)}{a}` },
    { id: 'm6-fo-tan', name: 'Primitive de 1/cos² et de tan', tex: String.raw`\int \frac{\mathrm{d}x}{\cos^2 x} = \tan x \qquad \int \tan x\,\mathrm{d}x = -\ln|\cos x|` },
    { id: 'm6-fo-chsh', name: 'Primitives de ch et sh', tex: String.raw`\int \operatorname{ch} x\,\mathrm{d}x = \operatorname{sh} x \qquad \int \operatorname{sh} x\,\mathrm{d}x = \operatorname{ch} x` },
    { id: 'm6-fo-arctan', name: 'Primitive de 1/(1+x²)', tex: String.raw`\int \frac{\mathrm{d}x}{1+x^2} = \arctan x + C` },
    { id: 'm6-fo-arctana', name: 'Primitive de 1/(x²+a²)', tex: String.raw`\int \frac{\mathrm{d}x}{x^2+a^2} = \frac{1}{a}\arctan\frac{x}{a} + C`, note: String.raw`$a \gt 0$ ; ne pas oublier le $\frac{1}{a}$.` },
    { id: 'm6-fo-arcsin', name: 'Primitive de 1/√(1−x²)', tex: String.raw`\int \frac{\mathrm{d}x}{\sqrt{1-x^2}} = \arcsin x + C`, note: String.raw`Plus généralement $\int\frac{\mathrm{d}x}{\sqrt{a^2-x^2}} = \arcsin\frac{x}{a}$.` },
    { id: 'm6-fo-x2a2', name: 'Primitive de 1/(x²−a²)', tex: String.raw`\int \frac{\mathrm{d}x}{x^2-a^2} = \frac{1}{2a}\ln\left|\frac{x-a}{x+a}\right| + C`, note: String.raw`Par décomposition : $\frac{1}{x^2-a^2} = \frac{1}{2a}\left(\frac{1}{x-a} - \frac{1}{x+a}\right)$.` },
    { id: 'm6-fo-affine', name: 'Composée avec ax+b', tex: String.raw`\int f(ax+b)\,\mathrm{d}x = \frac{1}{a}\,F(ax+b) + C`, note: String.raw`On <b>divise</b> par $a$.` },
    { id: 'm6-fo-uun', name: 'Forme u\' u^n', tex: String.raw`\int u'\,u^n = \frac{u^{n+1}}{n+1} + C`, note: String.raw`$n \neq -1$.` },
    { id: 'm6-fo-uu', name: 'Forme u\'/u', tex: String.raw`\int \frac{u'}{u} = \ln|u| + C` },
    { id: 'm6-fo-uu2', name: 'Forme u\'/u²', tex: String.raw`\int \frac{u'}{u^2} = -\frac{1}{u} + C` },
    { id: 'm6-fo-usqrt', name: 'Forme u\'/√u', tex: String.raw`\int \frac{u'}{\sqrt{u}} = 2\sqrt{u} + C` },
    { id: 'm6-fo-ueu', name: 'Forme u\' e^u', tex: String.raw`\int u'\,\mathrm{e}^u = \mathrm{e}^u + C` },
    { id: 'm6-fo-utrig', name: 'Formes u\' cos u et u\' sin u', tex: String.raw`\int u'\cos u = \sin u \qquad \int u'\sin u = -\cos u` },
    { id: 'm6-fo-uarctan', name: 'Forme u\'/(1+u²)', tex: String.raw`\int \frac{u'}{1+u^2} = \arctan u + C` },
    { id: 'm6-fo-integ', name: 'Intégrale et primitive', tex: String.raw`\int_a^b f(x)\,\mathrm{d}x = \Big[F(x)\Big]_a^b = F(b) - F(a)` },
    { id: 'm6-fo-chasles', name: 'Relation de Chasles', tex: String.raw`\int_a^b f + \int_b^c f = \int_a^c f`, note: String.raw`Et $\int_b^a f = -\int_a^b f$.` },
    { id: 'm6-fo-lin', name: 'Linéarité', tex: String.raw`\int_a^b (\lambda f + \mu g) = \lambda\int_a^b f + \mu\int_a^b g` },
    { id: 'm6-fo-pos', name: 'Positivité et croissance', tex: String.raw`a \leq b,\ f \leq g \ \Rightarrow\ \int_a^b f \leq \int_a^b g`, note: String.raw`En particulier $f \geq 0$ ⇒ $\int_a^b f \geq 0$ (si $a \leq b$).` },
    { id: 'm6-fo-abs', name: 'Inégalité triangulaire', tex: String.raw`\left|\int_a^b f\right| \leq \int_a^b |f|`, note: String.raw`Pour $a \leq b$.` },
    { id: 'm6-fo-moyineg', name: 'Inégalité de la moyenne', tex: String.raw`m \leq f \leq M \ \Rightarrow\ m\,(b-a) \leq \int_a^b f \leq M\,(b-a)` },
    { id: 'm6-fo-moy', name: 'Valeur moyenne', tex: String.raw`\mu = \frac{1}{b-a}\int_a^b f(x)\,\mathrm{d}x` },
    { id: 'm6-fo-parite', name: 'Parité', tex: String.raw`f \text{ paire} : \int_{-a}^{a} f = 2\int_0^a f \qquad f \text{ impaire} : \int_{-a}^{a} f = 0` },
    { id: 'm6-fo-tfa', name: 'Théorème fondamental', tex: String.raw`\frac{\mathrm{d}}{\mathrm{d}x}\int_a^x f(t)\,\mathrm{d}t = f(x)`, note: String.raw`$f$ continue ; $x \mapsto \int_a^x f$ est la primitive qui s'annule en $a$.` },
    { id: 'm6-fo-tfa2', name: 'Dérivée d\'une intégrale à bornes variables', tex: String.raw`\frac{\mathrm{d}}{\mathrm{d}x}\int_{u(x)}^{v(x)} f(t)\,\mathrm{d}t = v'(x)\,f\big(v(x)\big) - u'(x)\,f\big(u(x)\big)` },
    { id: 'm6-fo-ipp', name: 'Intégration par parties', tex: String.raw`\int_a^b u\,v' = \Big[u\,v\Big]_a^b - \int_a^b u'\,v`, note: String.raw`$u$ : à dériver ; $v'$ : à primitiver.` },
    { id: 'm6-fo-cdv', name: 'Changement de variable', tex: String.raw`\int_{\alpha}^{\beta} f\big(\varphi(t)\big)\,\varphi'(t)\,\mathrm{d}t = \int_{\varphi(\alpha)}^{\varphi(\beta)} f(x)\,\mathrm{d}x`, note: String.raw`$x = \varphi(t)$, $\mathrm{d}x = \varphi'(t)\,\mathrm{d}t$, on change les bornes.` },
    { id: 'm6-fo-cos2', name: 'Linéarisation de cos²', tex: String.raw`\cos^2 x = \frac{1 + \cos 2x}{2}`, note: String.raw`$\int\cos^2 x\,\mathrm{d}x = \frac{x}{2} + \frac{\sin 2x}{4}$.` },
    { id: 'm6-fo-sin2', name: 'Linéarisation de sin²', tex: String.raw`\sin^2 x = \frac{1 - \cos 2x}{2}`, note: String.raw`$\int\sin^2 x\,\mathrm{d}x = \frac{x}{2} - \frac{\sin 2x}{4}$.` },
    { id: 'm6-fo-wallis', name: 'Intégrales de Wallis', tex: String.raw`W_n = \int_0^{\pi/2}\sin^n x\,\mathrm{d}x, \qquad W_{n+2} = \frac{n+1}{n+2}\,W_n`, note: String.raw`$W_0 = \frac{\pi}{2}$, $W_1 = 1$, $W_2 = \frac{\pi}{4}$, $W_3 = \frac{2}{3}$.` },
    { id: 'm6-fo-aire', name: 'Aire entre deux courbes', tex: String.raw`\mathcal{A} = \int_a^b |f(x) - g(x)|\,\mathrm{d}x` },
    { id: 'm6-fo-moysig', name: 'Valeur moyenne d\'un signal', tex: String.raw`\langle s \rangle = \frac{1}{T}\int_0^T s(t)\,\mathrm{d}t` },
    { id: 'm6-fo-rms', name: 'Valeur efficace (RMS)', tex: String.raw`S_{\text{eff}} = \sqrt{\frac{1}{T}\int_0^T s^2(t)\,\mathrm{d}t}`, note: String.raw`$P = \frac{U_{\text{eff}}^2}{R}$.` },
    { id: 'm6-fo-rmssin', name: 'Valeur efficace d\'une sinusoïde', tex: String.raw`s(t) = A\cos(\omega t + \varphi) \ \Rightarrow\ S_{\text{eff}} = \frac{A}{\sqrt{2}}`, note: String.raw`Carré $\pm A$ : $A$ ; triangle $\pm A$ : $\frac{A}{\sqrt{3}}$.` }
  ],

  /* =====================================================================
   *  FLASHCARDS
   * ===================================================================== */
  flashcards: [
    { id: 'm6-f-primitive', front: String.raw`Définition d'une primitive`, back: String.raw`$F$ est une primitive de $f$ sur l'intervalle $I$ si $F$ est dérivable sur $I$ et $F' = f$.` },
    { id: 'm6-f-unicite', front: String.raw`Unicité des primitives`, back: String.raw`Sur un <b>intervalle</b>, deux primitives de $f$ diffèrent d'une constante : les primitives sont les $F + C$. Une condition $F(x_0) = y_0$ en fixe une seule.` },
    { id: 'm6-f-existence', front: String.raw`Quelles fonctions admettent des primitives ?`, back: String.raw`Toute fonction <b>continue</b> sur un intervalle (théorème fondamental). La primitive n'a pas forcément d'expression explicite ($\mathrm{e}^{-x^2}$).` },
    { id: 'm6-f-integrale', front: String.raw`Lien intégrale / primitive`, back: String.raw`$\displaystyle\int_a^b f(x)\,\mathrm{d}x = F(b) - F(a)$ pour toute primitive $F$ de $f$ (continue). Aire algébrique sous la courbe.` },
    { id: 'm6-f-tfa', front: String.raw`Théorème fondamental de l'analyse`, back: String.raw`$f$ continue sur $I$, $a \in I$ : $F(x) = \int_a^x f(t)\,\mathrm{d}t$ est dérivable et $F' = f$. C'est la primitive de $f$ qui s'annule en $a$.` },
    { id: 'm6-f-proprietes', front: String.raw`Propriétés de l'intégrale (Chasles, linéarité, positivité)`, back: String.raw`$\int_a^b + \int_b^c = \int_a^c$ ; $\int(\lambda f + \mu g) = \lambda\int f + \mu\int g$ ; $a \leq b$ et $f \leq g$ ⇒ $\int_a^b f \leq \int_a^b g$ ; $|\int f| \leq \int|f|$.` },
    { id: 'm6-f-moyenne', front: String.raw`Valeur moyenne d'une fonction sur $[a, b]$`, back: String.raw`$\mu = \dfrac{1}{b-a}\displaystyle\int_a^b f$. Si $f$ est continue, $f$ atteint cette valeur en au moins un point $c \in [a, b]$.` },
    { id: 'm6-f-ipp', front: String.raw`Intégration par parties : formule et choix`, back: String.raw`$\int_a^b uv' = [uv]_a^b - \int_a^b u'v$. On dérive ($u$) ce qui se simplifie : polynôme, $\ln$, $\arctan$ ; on primitive ($v'$) : exp, sin, cos. Mnémo ALPES.` },
    { id: 'm6-f-cdv', front: String.raw`Changement de variable : méthode`, back: String.raw`Poser $x = \varphi(t)$, remplacer $\mathrm{d}x$ par $\varphi'(t)\,\mathrm{d}t$, <b>changer les bornes</b> ($\alpha$, $\beta$ tels que $\varphi(\alpha) = a$, $\varphi(\beta) = b$), tout écrire en $t$.` },
    { id: 'm6-f-uu', front: String.raw`Primitive de $\dfrac{u'}{u}$ ; exemple`, back: String.raw`$\ln|u| + C$. Ex. : $\int\frac{x}{x^2+1}\,\mathrm{d}x = \frac{1}{2}\ln(x^2+1)$ ; $\int\tan x\,\mathrm{d}x = -\ln|\cos x|$.` },
    { id: 'm6-f-arctan', front: String.raw`Primitive de $\dfrac{1}{x^2+a^2}$`, back: String.raw`$\dfrac{1}{a}\arctan\dfrac{x}{a} + C$ ($a \gt 0$). Pour $x^2 + bx + c$ sans racine réelle : forme canonique $(x + \frac{b}{2})^2 + a^2$.` },
    { id: 'm6-f-elements', front: String.raw`Décomposition en éléments simples (deux racines distinctes)`, back: String.raw`$\frac{P(x)}{(x-a)(x-b)} = \frac{A}{x-a} + \frac{B}{x-b}$ si $\deg P \lt 2$, avec $A = \frac{P(a)}{a-b}$, $B = \frac{P(b)}{b-a}$. Primitive : $A\ln|x-a| + B\ln|x-b|$.` },
    { id: 'm6-f-linearisation', front: String.raw`Comment intégrer $\cos^2 x$ ?`, back: String.raw`Linéariser : $\cos^2 x = \frac{1+\cos 2x}{2}$, d'où $\int\cos^2 x\,\mathrm{d}x = \frac{x}{2} + \frac{\sin 2x}{4} + C$. (Pour $\sin^2$ : $\frac{1 - \cos 2x}{2}$.)` },
    { id: 'm6-f-wallis', front: String.raw`Intégrales de Wallis`, back: String.raw`$W_n = \int_0^{\pi/2}\sin^n x\,\mathrm{d}x$ ; $W_0 = \frac{\pi}{2}$, $W_1 = 1$ ; par IPP $W_{n+2} = \frac{n+1}{n+2}W_n$ ; $W_n \sim \sqrt{\frac{\pi}{2n}}$.` },
    { id: 'm6-f-parite', front: String.raw`Intégrale sur $[-a, a]$ d'une fonction paire ou impaire`, back: String.raw`Paire : $\int_{-a}^{a} f = 2\int_0^a f$. Impaire : $\int_{-a}^{a} f = 0$. Ex. : $\int_{-1}^{1}x^3\cos x\,\mathrm{d}x = 0$ sans calcul.` },
    { id: 'm6-f-rms', front: String.raw`Valeur efficace d'un signal $T$-périodique`, back: String.raw`$S_{\text{eff}} = \sqrt{\frac{1}{T}\int_0^T s^2(t)\,\mathrm{d}t}$ : la tension continue qui dissipe la même puissance. Sinusoïde : $\frac{A}{\sqrt{2}}$ ; carré $\pm A$ : $A$ ; triangle : $\frac{A}{\sqrt{3}}$.` },
    { id: 'm6-f-aire', front: String.raw`Aire entre deux courbes`, back: String.raw`$\mathcal{A} = \int_a^b |f - g|$ : trouver les intersections, étudier le signe de $f - g$, découper. Ex. : entre $y = x$ et $y = x^2$ sur $[0,1]$ : $\frac{1}{6}$.` }
  ],

  /* =====================================================================
   *  QCM
   * ===================================================================== */
  quiz: [
    { id: 'm6-q-001', level: 1, q: String.raw`Une primitive de $\cos x$ est :`,
      choices: [String.raw`$-\sin x$`, String.raw`$\sin x$`, String.raw`$\cos x$`, String.raw`$-\cos x$`], answer: 1,
      explain: String.raw`$(\sin x)' = \cos x$, donc $\sin x$ est une primitive de $\cos x$.`,
      why: { 0: String.raw`$(-\sin x)' = -\cos x$ : erreur de signe.`, 2: String.raw`$(\cos x)' = -\sin x \neq \cos x$.`, 3: String.raw`$-\cos x$ est une primitive de $\sin x$, pas de $\cos x$.` } },
    { id: 'm6-q-002', level: 1, q: String.raw`Une primitive de $\sin x$ est :`,
      choices: [String.raw`$\cos x$`, String.raw`$-\cos x$`, String.raw`$-\sin x$`], answer: 1,
      explain: String.raw`$(-\cos x)' = \sin x$. Le signe moins est indispensable.`,
      why: { 0: String.raw`$(\cos x)' = -\sin x$ : il manque un signe moins.`, 2: String.raw`$(-\sin x)' = -\cos x \neq \sin x$.` } },
    { id: 'm6-q-003', level: 1, q: String.raw`Une primitive de $x^n$ ($n \neq -1$) est :`,
      choices: [String.raw`$\dfrac{x^{n+1}}{n+1}$`, String.raw`$n\,x^{n-1}$`, String.raw`$\dfrac{x^{n+1}}{n}$`, String.raw`$x^{n+1}$`], answer: 0,
      explain: String.raw`On augmente l'exposant de 1 et on divise par le nouvel exposant : $\left(\frac{x^{n+1}}{n+1}\right)' = x^n$.`,
      why: { 1: String.raw`C'est la <b>dérivée</b> de $x^n$.`, 2: String.raw`On divise par le <b>nouvel</b> exposant $n+1$.`, 3: String.raw`Oubli de la division : $(x^{n+1})' = (n+1)x^n$.` } },
    { id: 'm6-q-004', level: 1, q: String.raw`Une primitive de $\dfrac{1}{x}$ sur $]-\infty, 0[$ est :`,
      choices: [String.raw`$-\dfrac{1}{x^2}$`, String.raw`$\ln x$`, String.raw`$\ln|x|$`], answer: 2,
      explain: String.raw`Pour $x \lt 0$ : $(\ln(-x))' = \frac{-1}{-x} = \frac{1}{x}$, et $\ln(-x) = \ln|x|$.`,
      why: { 0: String.raw`C'est la <b>dérivée</b> de $\frac{1}{x}$.`, 1: String.raw`$\ln x$ n'est pas défini pour $x \lt 0$.` } },
    { id: 'm6-q-005', level: 1, q: String.raw`Une primitive de $\mathrm{e}^{2x}$ est :`,
      choices: [String.raw`$2\,\mathrm{e}^{2x}$`, String.raw`$\dfrac{1}{2}\mathrm{e}^{2x}$`, String.raw`$\mathrm{e}^{2x}$`, String.raw`$\dfrac{\mathrm{e}^{2x+1}}{2x+1}$`], answer: 1,
      explain: String.raw`$\left(\frac{1}{2}\mathrm{e}^{2x}\right)' = \frac{1}{2}\times 2\mathrm{e}^{2x} = \mathrm{e}^{2x}$.`,
      why: { 0: String.raw`C'est la <b>dérivée</b> : on doit diviser par 2, pas multiplier.`, 2: String.raw`Oubli du facteur $\frac{1}{a}$ : $(\mathrm{e}^{2x})' = 2\mathrm{e}^{2x}$.`, 3: String.raw`La règle des puissances ne s'applique pas à une exponentielle.` } },
    { id: 'm6-q-006', level: 1, q: String.raw`Une primitive de $\dfrac{1}{1+x^2}$ est :`,
      choices: [String.raw`$\ln(1+x^2)$`, String.raw`$\arctan x$`, String.raw`$\arcsin x$`, String.raw`$-\dfrac{2x}{(1+x^2)^2}$`], answer: 1,
      explain: String.raw`$(\arctan x)' = \frac{1}{1+x^2}$.`,
      why: { 0: String.raw`$(\ln(1+x^2))' = \frac{2x}{1+x^2}$ : il faudrait $2x$ au numérateur.`, 2: String.raw`$(\arcsin x)' = \frac{1}{\sqrt{1-x^2}}$.`, 3: String.raw`C'est la <b>dérivée</b> de $\frac{1}{1+x^2}$.` } },
    { id: 'm6-q-007', level: 2, q: String.raw`Une primitive de $\dfrac{x}{1+x^2}$ est :`,
      choices: [String.raw`$\arctan x$`, String.raw`$\ln(1+x^2)$`, String.raw`$\dfrac{1}{2}\ln(1+x^2)$`, String.raw`$\dfrac{x^2/2}{x + x^3/3}$`], answer: 2,
      explain: String.raw`Forme $\frac{1}{2}\cdot\frac{u'}{u}$ avec $u = 1 + x^2$, $u' = 2x$.`,
      why: { 0: String.raw`$\arctan$ correspond à $\frac{1}{1+x^2}$, sans $x$ au numérateur.`, 1: String.raw`Oubli du $\frac{1}{2}$ : $(\ln(1+x^2))' = \frac{2x}{1+x^2}$.`, 3: String.raw`Primitive d'un quotient $\neq$ quotient des primitives.` } },
    { id: 'm6-q-008', level: 2, q: String.raw`Une primitive de $2x\,\mathrm{e}^{x^2}$ est :`,
      choices: [String.raw`$x^2\,\mathrm{e}^{x^2}$`, String.raw`$\mathrm{e}^{x^2}$`, String.raw`$2\,\mathrm{e}^{x^2}$`, String.raw`$\dfrac{\mathrm{e}^{x^2}}{2x}$`], answer: 1,
      explain: String.raw`Forme $u'\mathrm{e}^u$ avec $u = x^2$ : primitive $\mathrm{e}^{x^2}$.`,
      why: { 0: String.raw`Primitive d'un produit $\neq$ produit des primitives.`, 2: String.raw`Le facteur $2x$ est exactement $u'$ : pas de 2 en plus.`, 3: String.raw`On ne divise jamais par une fonction de $x$ : dérive $\frac{\mathrm{e}^{x^2}}{2x}$ pour voir que ça ne marche pas.` } },
    { id: 'm6-q-009', level: 2, q: String.raw`Une primitive de $\tan x$ sur $\left]-\frac{\pi}{2}, \frac{\pi}{2}\right[$ est :`,
      choices: [String.raw`$1 + \tan^2 x$`, String.raw`$\ln|\cos x|$`, String.raw`$-\ln|\cos x|$`, String.raw`$\dfrac{\tan^2 x}{2}$`], answer: 2,
      explain: String.raw`$\tan x = \frac{\sin x}{\cos x} = -\frac{u'}{u}$ avec $u = \cos x$ : primitive $-\ln|\cos x|$.`,
      why: { 0: String.raw`C'est la <b>dérivée</b> de $\tan x$.`, 1: String.raw`Erreur de signe : $(\ln|\cos x|)' = \frac{-\sin x}{\cos x} = -\tan x$.`, 3: String.raw`$\left(\frac{\tan^2 x}{2}\right)' = \tan x\,(1 + \tan^2 x)$ : ce n'est pas $\tan x$.` } },
    { id: 'm6-q-010', level: 1, q: String.raw`$\displaystyle\int_0^1 x^2\,\mathrm{d}x = $ ?`,
      choices: [String.raw`$\dfrac{1}{2}$`, String.raw`$\dfrac{1}{3}$`, String.raw`$2$`, String.raw`$1$`], answer: 1,
      explain: String.raw`$\left[\frac{x^3}{3}\right]_0^1 = \frac{1}{3}$.`,
      why: { 0: String.raw`C'est $\int_0^1 x\,\mathrm{d}x$.`, 2: String.raw`Tu as dérivé : $[2x]_0^1 = 2$.`, 3: String.raw`Oubli de la division par 3.` } },
    { id: 'm6-q-011', level: 1, q: String.raw`$\displaystyle\int_{-1}^{1} x^3\,\mathrm{d}x = $ ?`,
      choices: [String.raw`$\dfrac{1}{2}$`, String.raw`$0$`, String.raw`$\dfrac{1}{4}$`], answer: 1,
      explain: String.raw`$x^3$ est impaire sur un intervalle symétrique : $\left[\frac{x^4}{4}\right]_{-1}^{1} = \frac{1}{4} - \frac{1}{4} = 0$.`,
      why: { 0: String.raw`Tu as utilisé la règle des fonctions <b>paires</b> ($2\int_0^1$) alors que $x^3$ est impaire.`, 2: String.raw`Oubli de soustraire $F(-1) = \frac{1}{4}$.` } },
    { id: 'm6-q-012', level: 1, q: String.raw`$\displaystyle\int_0^{\pi}\sin x\,\mathrm{d}x = $ ?`,
      choices: [String.raw`$0$`, String.raw`$-2$`, String.raw`$2$`, String.raw`$1$`], answer: 2,
      explain: String.raw`$\Big[-\cos x\Big]_0^{\pi} = -\cos\pi + \cos 0 = 1 + 1 = 2$ (aire d'une arche de sinusoïde).`,
      why: { 0: String.raw`C'est l'intégrale sur $[0, 2\pi]$, ou l'erreur de prendre $[\sin x]$ comme primitive.`, 1: String.raw`Erreur de signe : la primitive de $\sin$ est $-\cos$.`, 3: String.raw`$-\cos\pi = +1$ <b>et</b> $+\cos 0 = +1$ : total $2$.` } },
    { id: 'm6-q-013', level: 1, q: String.raw`Relation de Chasles :`,
      choices: [String.raw`$\int_a^b f + \int_b^c f = \int_a^c f$`, String.raw`$\int_a^b f \times \int_b^c f = \int_a^c f$`, String.raw`$\int_a^b f + \int_b^c f = \int_a^c 2f$`, String.raw`$\int_a^c f = \int_a^b f - \int_b^c f$`], answer: 0,
      explain: String.raw`Les intégrales s'ajoutent comme des aires de domaines accolés : $\int_a^b f + \int_b^c f = \int_a^c f$.`,
      why: { 1: String.raw`Les intégrales s'<b>additionnent</b>, elles ne se multiplient pas.`, 2: String.raw`On ne double pas la fonction : on juxtapose les intervalles.`, 3: String.raw`Signe faux : c'est une somme.` } },
    { id: 'm6-q-014', level: 2, q: String.raw`Si $f \leq g$ sur $[a, b]$ avec $a \leq b$, alors :`,
      choices: [String.raw`$\int_a^b f \leq \int_a^b g$`, String.raw`$\int_a^b f \geq \int_a^b g$`, String.raw`$\int_a^b |f| \leq \int_a^b g$`, String.raw`$\int_b^a f \leq \int_b^a g$`], answer: 0,
      explain: String.raw`Croissance de l'intégrale (bornes dans l'ordre croissant) : $\int_a^b (g - f) \geq 0$.`,
      why: { 1: String.raw`Sens inversé.`, 2: String.raw`Faux : $|f|$ peut dépasser $g$ (ex. $f = -5$, $g = 0$).`, 3: String.raw`Avec les bornes renversées ($b \geq a$), l'inégalité s'<b>inverse</b>.` } },
    { id: 'm6-q-015', level: 2, q: String.raw`Valeur moyenne de $\sin$ sur $[0, \pi]$ ?`,
      choices: [String.raw`$0$`, String.raw`$\dfrac{1}{2}$`, String.raw`$\dfrac{2}{\pi}$`, String.raw`$2$`], answer: 2,
      explain: String.raw`$\mu = \frac{1}{\pi}\int_0^{\pi}\sin x\,\mathrm{d}x = \frac{2}{\pi} \approx 0{,}64$.`,
      why: { 0: String.raw`C'est la moyenne sur $[0, 2\pi]$ (une période complète).`, 1: String.raw`$\frac{1}{2}$ est la moyenne de $\sin^2$ sur une période.`, 3: String.raw`$2$ est l'intégrale : il faut diviser par la longueur $\pi$.` } },
    { id: 'm6-q-016', level: 2, q: String.raw`$\dfrac{\mathrm{d}}{\mathrm{d}x}\displaystyle\int_0^x \mathrm{e}^{-t^2}\,\mathrm{d}t = $ ?`,
      choices: [String.raw`$\mathrm{e}^{-x^2}$`, String.raw`$-2x\,\mathrm{e}^{-x^2}$`, String.raw`$\mathrm{e}^{-x^2} - 1$`, String.raw`on ne peut pas la calculer (pas de primitive explicite)`], answer: 0,
      explain: String.raw`Théorème fondamental : la dérivée de $x \mapsto \int_0^x f(t)\,\mathrm{d}t$ est $f(x)$.`,
      why: { 1: String.raw`Tu as dérivé l'intégrande : le théorème fondamental donne $f(x)$, pas $f'(x)$.`, 2: String.raw`La borne inférieure constante ne donne aucun terme : on ne soustrait pas $f(0)$.`, 3: String.raw`Le théorème fondamental donne la dérivée sans connaître de primitive explicite.` } },
    { id: 'm6-q-017', level: 3, q: String.raw`$\dfrac{\mathrm{d}}{\mathrm{d}x}\displaystyle\int_0^{x^2}\cos t\,\mathrm{d}t = $ ?`,
      choices: [String.raw`$\cos(x^2)$`, String.raw`$2x\cos(x^2)$`, String.raw`$\cos(2x)$`, String.raw`$\sin(x^2)$`], answer: 1,
      explain: String.raw`$\frac{\mathrm{d}}{\mathrm{d}x}\int_0^{v(x)} f = v'(x)f(v(x))$ avec $v = x^2$ : $2x\cos(x^2)$. Vérification : l'intégrale vaut $\sin(x^2)$.`,
      why: { 0: String.raw`Oubli du facteur $v'(x) = 2x$ (dérivée d'une composée).`, 2: String.raw`On évalue $f$ en $v(x) = x^2$, puis on multiplie par $v'(x)$.`, 3: String.raw`$\sin(x^2)$ est l'intégrale elle-même, pas sa dérivée.` } },
    { id: 'm6-q-018', level: 1, q: String.raw`Formule d'intégration par parties :`,
      choices: [String.raw`$\int_a^b uv' = [uv]_a^b - \int_a^b u'v$`, String.raw`$\int_a^b uv' = [uv]_a^b + \int_a^b u'v$`, String.raw`$\int_a^b uv' = [u'v]_a^b - \int_a^b uv$`, String.raw`$\int_a^b uv = \int_a^b u \times \int_a^b v$`], answer: 0,
      explain: String.raw`On intègre $(uv)' = u'v + uv'$ : $[uv]_a^b = \int u'v + \int uv'$.`,
      why: { 1: String.raw`Le signe est <b>moins</b>.`, 2: String.raw`Le crochet contient $uv$, pas $u'v$.`, 3: String.raw`L'intégrale d'un produit n'est pas le produit des intégrales.` } },
    { id: 'm6-q-019', level: 2, q: String.raw`Pour calculer $\int x\,\mathrm{e}^x\,\mathrm{d}x$ par parties, on choisit :`,
      choices: [String.raw`$u = \mathrm{e}^x$ (à dériver) et $v' = x$ (à primitiver)`, String.raw`$u = x$ (à dériver) et $v' = \mathrm{e}^x$ (à primitiver)`, String.raw`un changement de variable $t = \mathrm{e}^x$`], answer: 1,
      explain: String.raw`En dérivant $x$ on obtient $1$ : $\int x\mathrm{e}^x = x\mathrm{e}^x - \int\mathrm{e}^x = (x-1)\mathrm{e}^x$.`,
      why: { 0: String.raw`On obtiendrait $\int\frac{x^2}{2}\mathrm{e}^x$ : plus compliqué que le départ.`, 2: String.raw`Possible mais inutilement lourd ($x = \ln t$) ; l'IPP directe est la méthode naturelle.` } },
    { id: 'm6-q-020', level: 2, q: String.raw`Pour calculer $\int \ln x\,\mathrm{d}x$ par parties, on pose :`,
      choices: [String.raw`$u = \ln x$, $v' = 1$`, String.raw`$u = 1$, $v' = \ln x$`, String.raw`c'est impossible, $\ln$ n'a pas de primitive`], answer: 0,
      explain: String.raw`$u' = \frac{1}{x}$, $v = x$ : $\int\ln x = x\ln x - \int 1 = x\ln x - x + C$.`,
      why: { 1: String.raw`Il faudrait déjà connaître une primitive de $\ln x$ : on tourne en rond.`, 2: String.raw`$\ln$ est continue sur $]0, +\infty[$, elle a des primitives : $x\ln x - x$.` } },
    { id: 'm6-q-021', level: 2, q: String.raw`Une primitive de $x\ln x$ sur $]0, +\infty[$ est :`,
      choices: [String.raw`$\dfrac{x^2}{2}\ln x - \dfrac{x^2}{4}$`, String.raw`$\dfrac{x^2}{2}\ln x$`, String.raw`$\ln x + 1$`, String.raw`$\dfrac{x^2}{2}(x\ln x - x)$`], answer: 0,
      explain: String.raw`IPP avec $u = \ln x$, $v' = x$ : $\frac{x^2}{2}\ln x - \int\frac{x^2}{2}\cdot\frac{1}{x} = \frac{x^2}{2}\ln x - \frac{x^2}{4}$.`,
      why: { 1: String.raw`Oubli du terme $-\int u'v$.`, 2: String.raw`C'est la <b>dérivée</b> de $x\ln x$.`, 3: String.raw`Produit des primitives : faux.` } },
    { id: 'm6-q-022', level: 2, q: String.raw`Avec $x = \sin t$, l'intégrale $\displaystyle\int_0^1\sqrt{1-x^2}\,\mathrm{d}x$ devient :`,
      choices: [String.raw`$\displaystyle\int_0^{\pi/2}\cos^2 t\,\mathrm{d}t$`, String.raw`$\displaystyle\int_0^{1}\cos t\,\mathrm{d}t$`, String.raw`$\displaystyle\int_0^{\pi/2}\cos t\,\mathrm{d}t$`, String.raw`$\displaystyle\int_0^{\pi/2}\sin t\cos t\,\mathrm{d}t$`], answer: 0,
      explain: String.raw`$\sqrt{1-\sin^2 t} = \cos t$ (positif sur $[0, \frac{\pi}{2}]$), $\mathrm{d}x = \cos t\,\mathrm{d}t$, bornes $0 \to 0$ et $1 \to \frac{\pi}{2}$.`,
      why: { 1: String.raw`Bornes non changées et $\mathrm{d}x = \cos t\,\mathrm{d}t$ oublié.`, 2: String.raw`Oubli du facteur $\cos t$ venant de $\mathrm{d}x = \cos t\,\mathrm{d}t$.`, 3: String.raw`$\sqrt{1 - \sin^2 t} = \cos t$, pas $\sin t$.` } },
    { id: 'm6-q-023', level: 2, q: String.raw`Avec $t = \ln x$, l'intégrale $\displaystyle\int_1^2\frac{\ln x}{x}\,\mathrm{d}x$ devient :`,
      choices: [String.raw`$\displaystyle\int_1^2 t\,\mathrm{d}t$`, String.raw`$\displaystyle\int_0^{\ln 2} t\,\mathrm{d}t$`, String.raw`$\displaystyle\int_0^{\ln 2} t\,\mathrm{e}^{-t}\,\mathrm{d}t$`], answer: 1,
      explain: String.raw`$\mathrm{d}t = \frac{\mathrm{d}x}{x}$ ; $x = 1 \to t = 0$, $x = 2 \to t = \ln 2$. Résultat : $\frac{(\ln 2)^2}{2}$.`,
      why: { 0: String.raw`Les bornes doivent être transformées : $\ln 1 = 0$, $\ln 2$.`, 2: String.raw`Le $\frac{1}{x}$ est absorbé par $\mathrm{d}t = \frac{\mathrm{d}x}{x}$ : il ne reste pas de $\mathrm{e}^{-t}$.` } },
    { id: 'm6-q-024', level: 2, q: String.raw`Une primitive de $\dfrac{1}{x^2+4}$ est :`,
      choices: [String.raw`$\arctan\dfrac{x}{2}$`, String.raw`$\dfrac{1}{2}\arctan\dfrac{x}{2}$`, String.raw`$\dfrac{1}{4}\arctan\dfrac{x}{4}$`, String.raw`$\ln(x^2+4)$`], answer: 1,
      explain: String.raw`$\int\frac{\mathrm{d}x}{x^2+a^2} = \frac{1}{a}\arctan\frac{x}{a}$ avec $a = 2$.`,
      why: { 0: String.raw`Oubli du facteur $\frac{1}{a} = \frac{1}{2}$ : $\left(\arctan\frac{x}{2}\right)' = \frac{2}{x^2+4}$.`, 2: String.raw`$a^2 = 4$ donc $a = 2$, pas $4$.`, 3: String.raw`Il faudrait $2x$ au numérateur pour une forme $\frac{u'}{u}$.` } },
    { id: 'm6-q-025', level: 2, q: String.raw`Décomposition de $\dfrac{1}{x(x+1)}$ :`,
      choices: [String.raw`$\dfrac{1}{x} + \dfrac{1}{x+1}$`, String.raw`$\dfrac{1}{x} - \dfrac{1}{x+1}$`, String.raw`$\dfrac{1}{x+1} - \dfrac{1}{x}$`], answer: 1,
      explain: String.raw`$\frac{1}{x} - \frac{1}{x+1} = \frac{(x+1) - x}{x(x+1)} = \frac{1}{x(x+1)}$ ✓.`,
      why: { 0: String.raw`En réduisant : $\frac{2x+1}{x(x+1)}$. Ce n'est pas la bonne fraction.`, 2: String.raw`C'est l'opposé : $\frac{-1}{x(x+1)}$.` } },
    { id: 'm6-q-026', level: 1, q: String.raw`$\displaystyle\int_0^1\frac{\mathrm{d}x}{x+1} = $ ?`,
      choices: [String.raw`$\dfrac{3}{4}$`, String.raw`$\ln 2$`, String.raw`$\dfrac{1}{2}$`], answer: 1,
      explain: String.raw`$\Big[\ln(x+1)\Big]_0^1 = \ln 2 - \ln 1 = \ln 2$.`,
      why: { 0: String.raw`Tu as pris la dérivée $-\frac{1}{(x+1)^2}$ au lieu d'une primitive : $\left[-\frac{1}{(x+1)^2}\right]_0^1 = \frac{3}{4}$.`, 2: String.raw`Confusion avec $\int\frac{\mathrm{d}x}{(x+1)^2} = \left[-\frac{1}{x+1}\right]$, qui donne $\frac{1}{2}$.` } },
    { id: 'm6-q-027', level: 1, q: String.raw`Linéarisation : $\cos^2 x = $ ?`,
      choices: [String.raw`$\dfrac{1 + \cos 2x}{2}$`, String.raw`$\dfrac{1 - \cos 2x}{2}$`, String.raw`$\cos 2x$`, String.raw`$\dfrac{\cos 2x}{2}$`], answer: 0,
      explain: String.raw`$\cos 2x = 2\cos^2 x - 1$, donc $\cos^2 x = \frac{1 + \cos 2x}{2}$. Test en $0$ : $1 = \frac{1+1}{2}$ ✓.`,
      why: { 1: String.raw`C'est $\sin^2 x$ (test en $0$ : donne $0 \neq 1$).`, 2: String.raw`$\cos 2x = \cos^2 x - \sin^2 x$, pas $\cos^2 x$.`, 3: String.raw`Il manque le terme constant $\frac{1}{2}$ (test en $0$ : $\frac{1}{2} \neq 1$).` } },
    { id: 'm6-q-028', level: 2, q: String.raw`$\displaystyle\int_0^{2\pi}\cos^2 x\,\mathrm{d}x = $ ?`,
      choices: [String.raw`$0$`, String.raw`$\pi$`, String.raw`$2\pi$`, String.raw`$\dfrac{\pi}{2}$`], answer: 1,
      explain: String.raw`$\int_0^{2\pi}\frac{1 + \cos 2x}{2}\,\mathrm{d}x = \frac{2\pi}{2} + 0 = \pi$ (moyenne $\frac{1}{2}$ sur une longueur $2\pi$).`,
      why: { 0: String.raw`$\cos^2 \geq 0$ et n'est pas identiquement nulle : l'intégrale est strictement positive.`, 2: String.raw`Oubli du $\frac{1}{2}$ : $\cos^2$ vaut $\frac{1}{2}$ en moyenne, pas $1$.`, 3: String.raw`C'est la valeur sur $[0, \pi]$.` } },
    { id: 'm6-q-029', level: 1, q: String.raw`Valeur efficace de $s(t) = A\cos(\omega t)$ ?`,
      choices: [String.raw`$\dfrac{A}{2}$`, String.raw`$\dfrac{A}{\sqrt{2}}$`, String.raw`$0$`, String.raw`$\dfrac{2A}{\pi}$`], answer: 1,
      explain: String.raw`$\langle s^2\rangle = \frac{A^2}{2}$ (moyenne de $\cos^2$ = $\frac12$), donc $S_{\text{eff}} = \sqrt{\frac{A^2}{2}} = \frac{A}{\sqrt{2}}$.`,
      why: { 0: String.raw`$\frac{A^2}{2}$ est la moyenne de $s^2$ : il faut ensuite prendre la racine carrée.`, 2: String.raw`$0$ est la valeur <b>moyenne</b>, pas la valeur efficace.`, 3: String.raw`$\frac{2A}{\pi}$ est la valeur moyenne de $|s|$ (signal redressé).` } },
    { id: 'm6-q-030', level: 2, q: String.raw`Intégrales de Wallis $W_n = \int_0^{\pi/2}\sin^n x\,\mathrm{d}x$. Que vaut $W_2$ ?`,
      choices: [String.raw`$\dfrac{\pi}{2}$`, String.raw`$1$`, String.raw`$\dfrac{\pi}{4}$`, String.raw`$\dfrac{2}{3}$`], answer: 2,
      explain: String.raw`$W_2 = \frac{1}{2}W_0 = \frac{1}{2}\cdot\frac{\pi}{2} = \frac{\pi}{4}$ (ou par linéarisation de $\sin^2$).`,
      why: { 0: String.raw`C'est $W_0$.`, 1: String.raw`C'est $W_1$.`, 3: String.raw`C'est $W_3$.` } },
    { id: 'm6-q-031', level: 2, q: String.raw`Aire du domaine compris entre $y = x$ et $y = x^2$ pour $x \in [0, 1]$ ?`,
      choices: [String.raw`$\dfrac{1}{6}$`, String.raw`$\dfrac{5}{6}$`, String.raw`$-\dfrac{1}{6}$`, String.raw`$\dfrac{1}{2}$`], answer: 0,
      explain: String.raw`$x \geq x^2$ sur $[0, 1]$ : $\int_0^1 (x - x^2)\,\mathrm{d}x = \frac{1}{2} - \frac{1}{3} = \frac{1}{6}$.`,
      why: { 1: String.raw`On fait la <b>différence</b> des fonctions, pas la somme.`, 2: String.raw`Une aire est positive : on intègre (haut − bas).`, 3: String.raw`C'est seulement l'aire sous $y = x$.` } },
    { id: 'm6-q-032', level: 1, q: String.raw`Une primitive de $\dfrac{1}{\sqrt{x}}$ sur $]0, +\infty[$ est :`,
      choices: [String.raw`$\dfrac{1}{2\sqrt{x}}$`, String.raw`$2\sqrt{x}$`, String.raw`$\sqrt{x}$`, String.raw`$-\dfrac{1}{2x\sqrt{x}}$`], answer: 1,
      explain: String.raw`$(2\sqrt{x})' = 2\cdot\frac{1}{2\sqrt{x}} = \frac{1}{\sqrt{x}}$.`,
      why: { 0: String.raw`C'est la dérivée de $\sqrt{x}$, pas une primitive de $\frac{1}{\sqrt{x}}$.`, 2: String.raw`$(\sqrt{x})' = \frac{1}{2\sqrt{x}}$ : il manque un facteur 2.`, 3: String.raw`C'est la <b>dérivée</b> de $\frac{1}{\sqrt{x}}$.` } },
    { id: 'm6-q-033', level: 3, q: String.raw`$f$ est continue et positive sur $[a, b]$ ($a \lt b$) avec $\displaystyle\int_a^b f = 0$. Alors :`,
      choices: [String.raw`$f$ est nulle sur $[a, b]$`, String.raw`$f$ s'annule au moins une fois, mais pas forcément partout`, String.raw`on ne peut rien conclure`], answer: 0,
      explain: String.raw`Si $f(x_0) \gt 0$, par continuité $f \gt \frac{f(x_0)}{2}$ sur un petit intervalle, ce qui rendrait l'intégrale strictement positive. Donc $f = 0$.`,
      why: { 1: String.raw`Avec continuité <b>et</b> positivité, une seule valeur strictement positive suffit à rendre l'intégrale $\gt 0$.`, 2: String.raw`Le résultat est un théorème classique : continue + positive + intégrale nulle ⇒ nulle.` } },
    { id: 'm6-q-034', level: 2, q: String.raw`Valeur efficace d'un signal carré qui vaut alternativement $+A$ et $-A$ ?`,
      choices: [String.raw`$\dfrac{A}{\sqrt{2}}$`, String.raw`$A$`, String.raw`$0$`, String.raw`$\dfrac{A}{2}$`], answer: 1,
      explain: String.raw`$s^2 = A^2$ en permanence, donc $\langle s^2\rangle = A^2$ et $S_{\text{eff}} = A$.`,
      why: { 0: String.raw`$\frac{A}{\sqrt{2}}$ est propre aux signaux <b>sinusoïdaux</b>.`, 2: String.raw`$0$ est la valeur moyenne.`, 3: String.raw`$s^2$ est constant égal à $A^2$ : pas de facteur $\frac{1}{2}$.` } }
  ],

  /* =====================================================================
   *  EXERCICES « tape la formule »
   * ===================================================================== */
  exercises: [
    { id: 'm6-x-001', level: 1, check: 'antideriv', vars: ['x'],
      prompt: String.raw`Donne une primitive de $f(x) = 3x^2 - 4x + 5$.`,
      answer: 'x^3 - 2*x^2 + 5*x',
      mistakes: [
        { expr: '6*x - 4', msg: String.raw`Tu as <b>dérivé</b> au lieu de primitiver.` },
        { expr: '3*x^3 - 4*x^2 + 5*x', msg: String.raw`Il faut diviser par le nouvel exposant : $\int x^n = \frac{x^{n+1}}{n+1}$.` }
      ],
      hint: String.raw`$\int x^n\,\mathrm{d}x = \dfrac{x^{n+1}}{n+1}$, terme à terme.`,
      explain: String.raw`$\int 3x^2 = x^3$, $\int -4x = -2x^2$, $\int 5 = 5x$. Une primitive : $F(x) = x^3 - 2x^2 + 5x$ (+ $C$).` },
    { id: 'm6-x-002', level: 1, check: 'antideriv', vars: ['x'], domain: [0.3, 4],
      prompt: String.raw`Donne une primitive de $f(x) = \sqrt{x}$ sur $]0, +\infty[$.`,
      answer: '(2/3)*x^(3/2)',
      mistakes: [
        { expr: '1/(2*sqrt(x))', msg: String.raw`Tu as <b>dérivé</b> $\sqrt{x}$ au lieu de primitiver.` },
        { expr: 'x^(3/2)', msg: String.raw`Il faut diviser par le nouvel exposant $\frac{3}{2}$, c'est-à-dire multiplier par $\frac{2}{3}$.` }
      ],
      hint: String.raw`$\sqrt{x} = x^{1/2}$, puis $\int x^\alpha = \dfrac{x^{\alpha+1}}{\alpha+1}$.`,
      explain: String.raw`$\int x^{1/2}\,\mathrm{d}x = \dfrac{x^{3/2}}{3/2} = \dfrac{2}{3}x^{3/2} = \dfrac{2}{3}x\sqrt{x}$.` },
    { id: 'm6-x-003', level: 1, check: 'value', vars: [],
      prompt: String.raw`Calcule la valeur exacte de $\displaystyle\int_0^1 x^2\,\mathrm{d}x$.`,
      answer: '1/3',
      mistakes: [
        { expr: '2', msg: String.raw`Tu as dérivé : $[2x]_0^1 = 2$. Il faut une primitive, $\frac{x^3}{3}$.` },
        { expr: '1', msg: String.raw`Oubli de la division par 3 : une primitive de $x^2$ est $\frac{x^3}{3}$.` }
      ],
      hint: String.raw`Une primitive de $x^2$ est $\dfrac{x^3}{3}$.`,
      explain: String.raw`$\displaystyle\int_0^1 x^2\,\mathrm{d}x = \left[\frac{x^3}{3}\right]_0^1 = \frac{1}{3} - 0 = \frac{1}{3}$.` },
    { id: 'm6-x-004', level: 1, check: 'antideriv', vars: ['x'],
      prompt: String.raw`Donne une primitive de $f(x) = \sin x + 2\cos x$.`,
      answer: '-cos(x) + 2*sin(x)',
      mistakes: [
        { expr: 'cos(x) + 2*sin(x)', msg: String.raw`Signe : une primitive de $\sin x$ est $-\cos x$.` },
        { expr: '-cos(x) - 2*sin(x)', msg: String.raw`Signe : une primitive de $\cos x$ est $+\sin x$.` },
        { expr: 'cos(x) - 2*sin(x)', msg: String.raw`Tu as <b>dérivé</b> au lieu de primitiver.` }
      ],
      hint: String.raw`$\int\sin x = -\cos x$ et $\int\cos x = \sin x$.`,
      explain: String.raw`$F(x) = -\cos x + 2\sin x$. Vérification : $F'(x) = \sin x + 2\cos x$ ✓.` },
    { id: 'm6-x-005', level: 1, check: 'antideriv', vars: ['x'],
      prompt: String.raw`Donne une primitive de $f(x) = \cos(3x)$.`,
      answer: 'sin(3*x)/3',
      mistakes: [
        { expr: '3*sin(3*x)', msg: String.raw`On <b>divise</b> par $a = 3$, on ne multiplie pas : $\left(\sin 3x\right)' = 3\cos 3x$.` },
        { expr: 'sin(3*x)', msg: String.raw`Oubli du facteur $\frac{1}{3}$ : $(\sin 3x)' = 3\cos 3x$.` },
        { expr: '-sin(3*x)/3', msg: String.raw`Signe : une primitive de $\cos$ est $+\sin$.` }
      ],
      hint: String.raw`$\int\cos(ax)\,\mathrm{d}x = \dfrac{\sin(ax)}{a}$.`,
      explain: String.raw`$F(x) = \dfrac{\sin(3x)}{3}$ ; en dérivant : $\frac{3\cos(3x)}{3} = \cos(3x)$ ✓.` },
    { id: 'm6-x-006', level: 1, check: 'value', vars: [],
      prompt: String.raw`Calcule $\displaystyle\int_0^{\pi}\sin x\,\mathrm{d}x$.`,
      answer: '2',
      mistakes: [
        { expr: '-2', msg: String.raw`Signe : une primitive de $\sin$ est $-\cos$, et $-\cos\pi + \cos 0 = 2$.` },
        { expr: '0', msg: String.raw`Tu as évalué $\sin$ aux bornes au lieu d'une primitive ($-\cos$).` }
      ],
      hint: String.raw`Une primitive de $\sin$ est $-\cos$.`,
      explain: String.raw`$\Big[-\cos x\Big]_0^{\pi} = -\cos\pi - (-\cos 0) = 1 + 1 = 2$ : c'est l'aire d'une arche de sinusoïde.` },
    { id: 'm6-x-007', level: 1, check: 'antideriv', vars: ['x'],
      prompt: String.raw`Donne une primitive de $f(x) = \mathrm{e}^{-2x}$.`,
      answer: '-exp(-2*x)/2',
      mistakes: [
        { expr: 'exp(-2*x)/2', msg: String.raw`Signe : on divise par $a = -2$, donc la primitive est $-\frac{1}{2}\mathrm{e}^{-2x}$.` },
        { expr: '-2*exp(-2*x)', msg: String.raw`Tu as <b>dérivé</b> : il faut diviser par $-2$, pas multiplier.` },
        { expr: 'exp(-2*x)', msg: String.raw`Oubli du facteur $\frac{1}{a} = -\frac{1}{2}$.` }
      ],
      hint: String.raw`$\int\mathrm{e}^{ax}\,\mathrm{d}x = \dfrac{1}{a}\mathrm{e}^{ax}$ avec $a = -2$.`,
      explain: String.raw`$F(x) = -\dfrac{1}{2}\mathrm{e}^{-2x}$ ; $F'(x) = -\frac{1}{2}\times(-2)\mathrm{e}^{-2x} = \mathrm{e}^{-2x}$ ✓.` },
    { id: 'm6-x-008', level: 1, check: 'value', vars: [],
      prompt: String.raw`Calcule la valeur exacte de $\displaystyle\int_0^1\mathrm{e}^x\,\mathrm{d}x$.`,
      answer: 'e - 1',
      mistakes: [
        { expr: 'e', msg: String.raw`N'oublie pas de soustraire $F(0) = \mathrm{e}^0 = 1$.` }
      ],
      hint: String.raw`$\Big[\mathrm{e}^x\Big]_0^1 = \mathrm{e}^1 - \mathrm{e}^0$.`,
      explain: String.raw`$\displaystyle\int_0^1\mathrm{e}^x\,\mathrm{d}x = \mathrm{e}^1 - \mathrm{e}^0 = \mathrm{e} - 1 \approx 1{,}718$.` },
    { id: 'm6-x-009', level: 1, check: 'value', vars: [],
      prompt: String.raw`Calcule la valeur exacte de $\displaystyle\int_1^2\frac{\mathrm{d}x}{x}$.`,
      answer: 'ln(2)',
      mistakes: [
        { expr: '1/2', msg: String.raw`Tu as utilisé $-\frac{1}{x}$, qui est une primitive de $\frac{1}{x^2}$. Une primitive de $\frac{1}{x}$ est $\ln x$.` },
        { expr: '3/4', msg: String.raw`Tu as utilisé la dérivée $-\frac{1}{x^2}$ au lieu d'une primitive.` }
      ],
      hint: String.raw`Une primitive de $\dfrac{1}{x}$ sur $]0, +\infty[$ est $\ln x$.`,
      explain: String.raw`$\Big[\ln x\Big]_1^2 = \ln 2 - \ln 1 = \ln 2$.` },
    { id: 'm6-x-010', level: 2, check: 'antideriv', vars: ['x'],
      prompt: String.raw`Donne une primitive de $f(x) = (2x+1)^3$.`,
      answer: '(2*x+1)^4/8',
      mistakes: [
        { expr: '(2*x+1)^4/4', msg: String.raw`Oubli du facteur $\frac{1}{a} = \frac{1}{2}$ : en dérivant $\frac{(2x+1)^4}{4}$ on obtient $2(2x+1)^3$.` },
        { expr: '6*(2*x+1)^2', msg: String.raw`Tu as <b>dérivé</b> au lieu de primitiver.` }
      ],
      hint: String.raw`$\int f(ax+b) = \dfrac{1}{a}F(ax+b)$, ou forme $u'u^3$ avec $u' = 2$.`,
      explain: String.raw`$(2x+1)^3 = \frac{1}{2}\cdot 2(2x+1)^3 = \frac{1}{2}u'u^3$ : primitive $\frac{1}{2}\cdot\frac{u^4}{4} = \dfrac{(2x+1)^4}{8}$.` },
    { id: 'm6-x-011', level: 2, check: 'antideriv', vars: ['x'], domain: [0, 3],
      prompt: String.raw`Donne une primitive de $f(x) = \dfrac{1}{2x+1}$ sur $\left]-\frac{1}{2}, +\infty\right[$.`,
      answer: 'ln(2*x+1)/2',
      mistakes: [
        { expr: 'ln(2*x+1)', msg: String.raw`Oubli du $\frac{1}{2}$ : $(\ln(2x+1))' = \frac{2}{2x+1}$.` },
        { expr: '-2/(2*x+1)^2', msg: String.raw`Tu as <b>dérivé</b> au lieu de primitiver.` }
      ],
      hint: String.raw`$\dfrac{1}{2x+1} = \dfrac{1}{2}\cdot\dfrac{u'}{u}$ avec $u = 2x + 1$.`,
      explain: String.raw`$F(x) = \dfrac{1}{2}\ln(2x+1)$ (avec $2x + 1 \gt 0$).` },
    { id: 'm6-x-012', level: 2, check: 'antideriv', vars: ['x'],
      prompt: String.raw`Donne une primitive de $f(x) = \dfrac{x}{x^2+1}$.`,
      answer: 'ln(x^2+1)/2',
      mistakes: [
        { expr: 'ln(x^2+1)', msg: String.raw`Oubli du $\frac{1}{2}$ : $u' = 2x$ alors que le numérateur vaut $x$.` },
        { expr: 'arctan(x)', msg: String.raw`$\arctan x$ est une primitive de $\frac{1}{x^2+1}$ (sans $x$ au numérateur).` }
      ],
      hint: String.raw`Forme $\dfrac{u'}{u}$ avec $u = x^2 + 1$, $u' = 2x$.`,
      explain: String.raw`$\dfrac{x}{x^2+1} = \dfrac{1}{2}\cdot\dfrac{2x}{x^2+1}$, donc $F(x) = \dfrac{1}{2}\ln(x^2+1)$.` },
    { id: 'm6-x-013', level: 2, check: 'value', vars: [],
      prompt: String.raw`Calcule la valeur exacte de $\displaystyle\int_0^1\frac{\mathrm{d}x}{1+x^2}$.`,
      answer: 'pi/4',
      mistakes: [
        { expr: 'ln(2)', msg: String.raw`$\ln(1+x^2)$ est une primitive de $\frac{2x}{1+x^2}$, pas de $\frac{1}{1+x^2}$.` }
      ],
      hint: String.raw`Une primitive de $\dfrac{1}{1+x^2}$ est $\arctan x$.`,
      explain: String.raw`$\Big[\arctan x\Big]_0^1 = \arctan 1 - \arctan 0 = \dfrac{\pi}{4}$.` },
    { id: 'm6-x-014', level: 2, check: 'antideriv', vars: ['x'],
      prompt: String.raw`Donne une primitive de $f(x) = x\,\mathrm{e}^{x^2}$.`,
      answer: 'exp(x^2)/2',
      mistakes: [
        { expr: 'exp(x^2)', msg: String.raw`Oubli du $\frac{1}{2}$ : $(\mathrm{e}^{x^2})' = 2x\,\mathrm{e}^{x^2}$.` },
        { expr: 'x^2/2*exp(x^2)', msg: String.raw`Primitive d'un produit $\neq$ produit des primitives. Reconnais une forme $u'\mathrm{e}^u$.` }
      ],
      hint: String.raw`Forme $u'\mathrm{e}^u$ avec $u = x^2$, $u' = 2x$.`,
      explain: String.raw`$x\,\mathrm{e}^{x^2} = \dfrac{1}{2}\cdot 2x\,\mathrm{e}^{x^2}$, donc $F(x) = \dfrac{1}{2}\mathrm{e}^{x^2}$.` },
    { id: 'm6-x-015', level: 2, check: 'antideriv', vars: ['x'],
      prompt: String.raw`Donne une primitive de $f(x) = \dfrac{x}{\sqrt{x^2+1}}$.`,
      answer: 'sqrt(x^2+1)',
      mistakes: [
        { expr: '2*sqrt(x^2+1)', msg: String.raw`$\int\frac{u'}{\sqrt{u}} = 2\sqrt{u}$, mais ici le numérateur vaut $\frac{u'}{2}$ : le facteur 2 disparaît.` },
        { expr: 'ln(x^2+1)/2', msg: String.raw`Il y a une racine au dénominateur : c'est une forme $\frac{u'}{\sqrt{u}}$, pas $\frac{u'}{u}$.` }
      ],
      hint: String.raw`Forme $\dfrac{u'}{\sqrt{u}}$ avec $u = x^2 + 1$ : $\int\dfrac{u'}{\sqrt{u}} = 2\sqrt{u}$.`,
      explain: String.raw`$\dfrac{x}{\sqrt{x^2+1}} = \dfrac{1}{2}\cdot\dfrac{2x}{\sqrt{x^2+1}}$, donc $F(x) = \dfrac{1}{2}\cdot 2\sqrt{x^2+1} = \sqrt{x^2+1}$.` },
    { id: 'm6-x-016', level: 2, check: 'value', vars: [],
      prompt: String.raw`Calcule la valeur exacte de $\displaystyle\int_0^1\frac{x}{1+x^2}\,\mathrm{d}x$.`,
      answer: 'ln(2)/2',
      mistakes: [
        { expr: 'ln(2)', msg: String.raw`Oubli du $\frac{1}{2}$ : une primitive est $\frac{1}{2}\ln(1+x^2)$.` },
        { expr: 'pi/4', msg: String.raw`Avec $x$ au numérateur, ce n'est plus $\arctan$ : c'est une forme $\frac{u'}{u}$.` }
      ],
      hint: String.raw`Une primitive est $\dfrac{1}{2}\ln(1+x^2)$.`,
      explain: String.raw`$\left[\dfrac{1}{2}\ln(1+x^2)\right]_0^1 = \dfrac{1}{2}\ln 2 - 0 = \dfrac{\ln 2}{2}$.` },
    { id: 'm6-x-017', level: 2, check: 'antideriv', vars: ['x'],
      prompt: String.raw`Donne une primitive de $f(x) = \sin x\,\cos^2 x$.`,
      answer: '-cos(x)^3/3',
      mistakes: [
        { expr: 'cos(x)^3/3', msg: String.raw`Signe : avec $u = \cos x$, $u' = -\sin x$, donc $\sin x\cos^2 x = -u'u^2$.` },
        { expr: '-cos(x)^3', msg: String.raw`Il faut diviser par $3$ : $\int u'u^2 = \frac{u^3}{3}$.` }
      ],
      hint: String.raw`Pose $u = \cos x$ : $u' = -\sin x$, forme $-u'u^2$.`,
      explain: String.raw`$\sin x\cos^2 x = -(-\sin x)\cos^2 x = -u'u^2$, d'où $F(x) = -\dfrac{\cos^3 x}{3}$.` },
    { id: 'm6-x-018', level: 2, check: 'antideriv', vars: ['x'], domain: [0.3, 4],
      prompt: String.raw`Donne une primitive de $f(x) = \dfrac{\ln x}{x}$ sur $]0, +\infty[$.`,
      answer: 'ln(x)^2/2',
      mistakes: [
        { expr: 'ln(x)^2', msg: String.raw`Oubli du $\frac{1}{2}$ : $\int u'u = \frac{u^2}{2}$.` },
        { expr: '(1-ln(x))/x^2', msg: String.raw`Tu as <b>dérivé</b> au lieu de primitiver.` }
      ],
      hint: String.raw`Forme $u'u$ avec $u = \ln x$, $u' = \dfrac{1}{x}$.`,
      explain: String.raw`$\dfrac{\ln x}{x} = u'u$ avec $u = \ln x$, donc $F(x) = \dfrac{(\ln x)^2}{2}$.` },
    { id: 'm6-x-019', level: 2, check: 'antideriv', vars: ['x'],
      prompt: String.raw`Donne une primitive de $f(x) = \dfrac{1}{x^2+9}$.`,
      answer: 'arctan(x/3)/3',
      mistakes: [
        { expr: 'arctan(x/3)', msg: String.raw`Oubli du facteur $\frac{1}{a} = \frac{1}{3}$ : $\left(\arctan\frac{x}{3}\right)' = \frac{3}{x^2+9}$.` },
        { expr: 'ln(x^2+9)', msg: String.raw`Il faudrait $2x$ au numérateur pour une forme $\frac{u'}{u}$.` }
      ],
      hint: String.raw`$\int\dfrac{\mathrm{d}x}{x^2+a^2} = \dfrac{1}{a}\arctan\dfrac{x}{a}$ avec $a = 3$.`,
      explain: String.raw`$F(x) = \dfrac{1}{3}\arctan\dfrac{x}{3}$. Vérification : $\frac{1}{3}\cdot\frac{1/3}{1 + x^2/9} = \frac{1}{9 + x^2}$ ✓.` },
    { id: 'm6-x-020', level: 2, check: 'value', vars: [],
      prompt: String.raw`Calcule la valeur moyenne de $f(x) = x^2$ sur l'intervalle $[0, 3]$.`,
      answer: '3',
      mistakes: [
        { expr: '9', msg: String.raw`$9 = \int_0^3 x^2\,\mathrm{d}x$ : il faut encore diviser par la longueur $b - a = 3$.` },
        { expr: '9/2', msg: String.raw`On divise par la longueur de l'intervalle, $3$, pas par $2$.` }
      ],
      hint: String.raw`$\mu = \dfrac{1}{b-a}\displaystyle\int_a^b f(x)\,\mathrm{d}x$.`,
      explain: String.raw`$\displaystyle\int_0^3 x^2\,\mathrm{d}x = \left[\frac{x^3}{3}\right]_0^3 = 9$, donc $\mu = \dfrac{9}{3} = 3$.` },
    { id: 'm6-x-021', level: 2, check: 'antideriv', vars: ['x'], domain: [-1.2, 1.2],
      prompt: String.raw`Donne une primitive de $f(x) = \tan x$ sur $\left]-\frac{\pi}{2}, \frac{\pi}{2}\right[$.`,
      answer: '-ln(cos(x))',
      mistakes: [
        { expr: 'ln(cos(x))', msg: String.raw`Signe : $(\ln\cos x)' = \frac{-\sin x}{\cos x} = -\tan x$.` },
        { expr: '1 + tan(x)^2', msg: String.raw`Tu as <b>dérivé</b> $\tan$ au lieu de la primitiver.` }
      ],
      hint: String.raw`$\tan x = \dfrac{\sin x}{\cos x} = -\dfrac{u'}{u}$ avec $u = \cos x$.`,
      explain: String.raw`$\tan x = -\dfrac{(\cos x)'}{\cos x}$, donc $F(x) = -\ln|\cos x| = -\ln(\cos x)$ ici car $\cos x \gt 0$.` },
    { id: 'm6-x-022', level: 2, check: 'antideriv', vars: ['x'],
      prompt: String.raw`Donne une primitive de $f(x) = \operatorname{ch}(2x)$. (Syntaxe : $\operatorname{ch}$ = cosh, $\operatorname{sh}$ = sinh.)`,
      answer: 'sinh(2*x)/2',
      mistakes: [
        { expr: 'sinh(2*x)', msg: String.raw`Oubli du facteur $\frac{1}{2}$.` },
        { expr: '-sinh(2*x)/2', msg: String.raw`Pas de signe moins en trigonométrie hyperbolique : $\int\operatorname{ch} = \operatorname{sh}$.` }
      ],
      hint: String.raw`$\int\operatorname{ch}(ax)\,\mathrm{d}x = \dfrac{1}{a}\operatorname{sh}(ax)$.`,
      explain: String.raw`$F(x) = \dfrac{1}{2}\operatorname{sh}(2x)$ ; $F'(x) = \frac{1}{2}\times 2\operatorname{ch}(2x)$ ✓.` },
    { id: 'm6-x-023', level: 2, check: 'antideriv', vars: ['x'],
      prompt: String.raw`Donne une primitive de $f(x) = 2^x$.`,
      answer: '2^x/ln(2)',
      mistakes: [
        { expr: '2^(x+1)/(x+1)', msg: String.raw`L'exposant varie : la règle $\int x^n = \frac{x^{n+1}}{n+1}$ ne s'applique pas. Écris $2^x = \mathrm{e}^{x\ln 2}$.` },
        { expr: 'ln(2)*2^x', msg: String.raw`Tu as <b>dérivé</b> : il faut diviser par $\ln 2$.` }
      ],
      hint: String.raw`$2^x = \mathrm{e}^{x\ln 2}$, puis $\int\mathrm{e}^{ax} = \dfrac{\mathrm{e}^{ax}}{a}$.`,
      explain: String.raw`$\int\mathrm{e}^{x\ln 2}\,\mathrm{d}x = \dfrac{\mathrm{e}^{x\ln 2}}{\ln 2} = \dfrac{2^x}{\ln 2}$.` },
    { id: 'm6-x-024', level: 2, check: 'value', vars: [],
      prompt: String.raw`Calcule l'aire du domaine compris entre les courbes $y = x$ et $y = x^2$ pour $x \in [0, 1]$.`,
      answer: '1/6',
      mistakes: [
        { expr: '5/6', msg: String.raw`On intègre la <b>différence</b> (courbe du haut − courbe du bas), pas la somme.` },
        { expr: '-1/6', msg: String.raw`Une aire est positive : sur $[0, 1]$, $x \geq x^2$, on intègre $x - x^2$.` }
      ],
      hint: String.raw`Sur $[0, 1]$, $x \geq x^2$ : $\mathcal{A} = \displaystyle\int_0^1 (x - x^2)\,\mathrm{d}x$.`,
      explain: String.raw`$\mathcal{A} = \left[\dfrac{x^2}{2} - \dfrac{x^3}{3}\right]_0^1 = \dfrac{1}{2} - \dfrac{1}{3} = \dfrac{1}{6}$.` },
    { id: 'm6-x-025', level: 2, check: 'value', vars: [],
      prompt: String.raw`Calcule l'aire (géométrique, donc positive) du domaine compris entre la courbe de $\sin$ et l'axe des abscisses pour $x \in [0, 2\pi]$.`,
      answer: '4',
      mistakes: [
        { expr: '0', msg: String.raw`$\int_0^{2\pi}\sin x\,\mathrm{d}x = 0$ est l'aire <b>algébrique</b> : l'arche négative compense l'arche positive. Pour l'aire, intègre $|\sin x|$.` }
      ],
      hint: String.raw`Découpe : $\displaystyle\int_0^{\pi}\sin x\,\mathrm{d}x - \int_{\pi}^{2\pi}\sin x\,\mathrm{d}x$.`,
      explain: String.raw`$\displaystyle\int_0^{\pi}\sin x\,\mathrm{d}x = 2$ et $\displaystyle\int_{\pi}^{2\pi}\sin x\,\mathrm{d}x = -2$. Aire $= 2 + |-2| = 4$.` },
    { id: 'm6-x-026', level: 2, check: 'value', vars: [],
      prompt: String.raw`Calcule $\displaystyle\int_{-1}^{1}\left(x^5 + x^2\right)\mathrm{d}x$ (pense à la parité).`,
      answer: '2/3',
      mistakes: [
        { expr: '1/3', msg: String.raw`Oubli du facteur 2 : pour une fonction paire, $\int_{-1}^{1} = 2\int_0^1$.` },
        { expr: '0', msg: String.raw`Seul $x^5$ est impair ; $x^2$ est pair et sa contribution n'est pas nulle.` }
      ],
      hint: String.raw`$x^5$ est impaire (intégrale nulle), $x^2$ est paire : $\int_{-1}^1 x^2 = 2\int_0^1 x^2$.`,
      explain: String.raw`$\displaystyle\int_{-1}^{1}x^5\,\mathrm{d}x = 0$ (impaire) et $\displaystyle\int_{-1}^{1}x^2\,\mathrm{d}x = 2\left[\frac{x^3}{3}\right]_0^1 = \frac{2}{3}$. Total : $\dfrac{2}{3}$.` },
    { id: 'm6-x-027', level: 2, check: 'antideriv', vars: ['x'],
      prompt: String.raw`Par parties, donne une primitive de $f(x) = x\,\mathrm{e}^x$.`,
      answer: '(x-1)*exp(x)',
      mistakes: [
        { expr: 'x*exp(x)', msg: String.raw`Il manque le terme $-\int u'v = -\int\mathrm{e}^x = -\mathrm{e}^x$.` },
        { expr: 'x^2/2*exp(x)', msg: String.raw`Primitive d'un produit $\neq$ produit des primitives : fais une IPP.` },
        { expr: '(x+1)*exp(x)', msg: String.raw`Erreur de signe : $\int uv' = uv \mathbin{\boldsymbol{-}} \int u'v$.` }
      ],
      hint: String.raw`$u = x$ (à dériver), $v' = \mathrm{e}^x$ (à primitiver).`,
      explain: String.raw`$u = x$, $u' = 1$, $v = \mathrm{e}^x$ : $\int x\mathrm{e}^x\,\mathrm{d}x = x\mathrm{e}^x - \int\mathrm{e}^x\,\mathrm{d}x = x\mathrm{e}^x - \mathrm{e}^x = (x-1)\mathrm{e}^x$.` },
    { id: 'm6-x-028', level: 2, check: 'antideriv', vars: ['x'],
      prompt: String.raw`Par parties, donne une primitive de $f(x) = x\cos x$.`,
      answer: 'x*sin(x) + cos(x)',
      mistakes: [
        { expr: 'x*sin(x) - cos(x)', msg: String.raw`Signe : $-\int\sin x\,\mathrm{d}x = -(-\cos x) = +\cos x$.` },
        { expr: 'x^2/2*sin(x)', msg: String.raw`Primitive d'un produit $\neq$ produit des primitives.` }
      ],
      hint: String.raw`$u = x$, $v' = \cos x$, donc $v = \sin x$.`,
      explain: String.raw`$\int x\cos x\,\mathrm{d}x = x\sin x - \int\sin x\,\mathrm{d}x = x\sin x + \cos x$.` },
    { id: 'm6-x-029', level: 2, check: 'value', vars: [],
      prompt: String.raw`Calcule $\displaystyle\int_0^1 x\,\mathrm{e}^x\,\mathrm{d}x$ (intégration par parties).`,
      answer: '1',
      mistakes: [
        { expr: 'e', msg: String.raw`Tu n'as gardé que le crochet $[x\mathrm{e}^x]_0^1 = \mathrm{e}$ : il faut retrancher $\int_0^1\mathrm{e}^x\,\mathrm{d}x = \mathrm{e} - 1$.` },
        { expr: '2*e - 1', msg: String.raw`Erreur de signe dans l'IPP : c'est $[uv] \mathbin{\boldsymbol{-}} \int u'v$.` }
      ],
      hint: String.raw`$\displaystyle\int_0^1 x\mathrm{e}^x\,\mathrm{d}x = \Big[x\mathrm{e}^x\Big]_0^1 - \int_0^1\mathrm{e}^x\,\mathrm{d}x$.`,
      explain: String.raw`$\Big[x\mathrm{e}^x\Big]_0^1 = \mathrm{e}$ et $\displaystyle\int_0^1\mathrm{e}^x\,\mathrm{d}x = \mathrm{e} - 1$, donc l'intégrale vaut $\mathrm{e} - (\mathrm{e} - 1) = 1$.` },
    { id: 'm6-x-030', level: 2, check: 'value', vars: [],
      prompt: String.raw`Calcule $\displaystyle\int_1^{\mathrm{e}}\ln x\,\mathrm{d}x$.`,
      answer: '1',
      mistakes: [
        { expr: 'e', msg: String.raw`$x\ln x$ seul n'est pas une primitive de $\ln x$ : c'est $x\ln x - x$.` },
        { expr: '1/e - 1', msg: String.raw`Tu as utilisé la dérivée $\frac{1}{x}$ au lieu d'une primitive.` }
      ],
      hint: String.raw`Une primitive de $\ln x$ est $x\ln x - x$ (IPP avec $v' = 1$).`,
      explain: String.raw`$\Big[x\ln x - x\Big]_1^{\mathrm{e}} = (\mathrm{e} - \mathrm{e}) - (0 - 1) = 1$.` },
    { id: 'm6-x-031', level: 2, check: 'antideriv', vars: ['x'],
      prompt: String.raw`Donne une primitive de $f(x) = \cos^2 x$.`,
      answer: 'x/2 + sin(2*x)/4',
      mistakes: [
        { expr: 'cos(x)^3/3', msg: String.raw`Ce n'est pas une forme $u'u^n$ (il manque $u' = -\sin x$). Linéarise : $\cos^2 x = \frac{1+\cos 2x}{2}$.` },
        { expr: 'x/2 - sin(2*x)/4', msg: String.raw`Signe : $\cos^2 x = \frac{1 \mathbin{\boldsymbol{+}} \cos 2x}{2}$ (c'est $\sin^2$ qui a un moins).` }
      ],
      hint: String.raw`Linéarise : $\cos^2 x = \dfrac{1 + \cos 2x}{2}$.`,
      explain: String.raw`$\displaystyle\int\frac{1 + \cos 2x}{2}\,\mathrm{d}x = \frac{x}{2} + \frac{1}{2}\cdot\frac{\sin 2x}{2} = \frac{x}{2} + \frac{\sin 2x}{4}$.` },
    { id: 'm6-x-032', level: 2, check: 'value', vars: [],
      prompt: String.raw`Calcule la valeur exacte de $\displaystyle\int_0^{\pi}\cos^2 x\,\mathrm{d}x$.`,
      answer: 'pi/2',
      mistakes: [
        { expr: 'pi', msg: String.raw`Oubli du $\frac{1}{2}$ de la linéarisation : $\cos^2 x = \frac{1 + \cos 2x}{2}$.` },
        { expr: '-2/3', msg: String.raw`$\frac{\cos^3 x}{3}$ n'est pas une primitive de $\cos^2 x$ : linéarise.` }
      ],
      hint: String.raw`Une primitive de $\cos^2 x$ est $\dfrac{x}{2} + \dfrac{\sin 2x}{4}$.`,
      explain: String.raw`$\left[\dfrac{x}{2} + \dfrac{\sin 2x}{4}\right]_0^{\pi} = \dfrac{\pi}{2} + 0 - 0 = \dfrac{\pi}{2}$ (moyenne $\frac12$ sur une longueur $\pi$).` },
    { id: 'm6-x-033', level: 3, check: 'antideriv', vars: ['x'], domain: [0.3, 4],
      prompt: String.raw`Décompose puis donne une primitive de $f(x) = \dfrac{1}{x(x+1)}$ sur $]0, +\infty[$.`,
      answer: 'ln(x) - ln(x+1)',
      mistakes: [
        { expr: 'ln(x) + ln(x+1)', msg: String.raw`Décomposition fausse : $\frac{1}{x(x+1)} = \frac{1}{x} \mathbin{\boldsymbol{-}} \frac{1}{x+1}$ (vérifie en réduisant).` },
        { expr: 'ln(x)*ln(x+1)', msg: String.raw`Primitive d'un produit $\neq$ produit des primitives : décompose en éléments simples.` }
      ],
      hint: String.raw`$\dfrac{1}{x(x+1)} = \dfrac{A}{x} + \dfrac{B}{x+1}$ : $A = 1$, $B = -1$.`,
      explain: String.raw`$\dfrac{1}{x(x+1)} = \dfrac{1}{x} - \dfrac{1}{x+1}$, donc $F(x) = \ln x - \ln(x+1) = \ln\dfrac{x}{x+1}$.` },
    { id: 'm6-x-034', level: 3, check: 'value', vars: [],
      prompt: String.raw`Calcule la valeur exacte de $\displaystyle\int_0^1\frac{\mathrm{d}x}{x^2+3x+2}$.`,
      answer: 'ln(4/3)',
      mistakes: [
        { expr: 'ln(3)', msg: String.raw`Décomposition fausse : $\frac{1}{(x+1)(x+2)} = \frac{1}{x+1} \mathbin{\boldsymbol{-}} \frac{1}{x+2}$.` },
        { expr: 'ln(2/3)', msg: String.raw`Tu n'as gardé que $F(1) = \ln 2 - \ln 3$ : il faut soustraire $F(0) = \ln 1 - \ln 2 = -\ln 2$.` }
      ],
      hint: String.raw`$x^2 + 3x + 2 = (x+1)(x+2)$ et $\dfrac{1}{(x+1)(x+2)} = \dfrac{1}{x+1} - \dfrac{1}{x+2}$.`,
      explain: String.raw`$\Big[\ln(x+1) - \ln(x+2)\Big]_0^1 = (\ln 2 - \ln 3) - (0 - \ln 2) = 2\ln 2 - \ln 3 = \ln\dfrac{4}{3}$.` },
    { id: 'm6-x-035', level: 3, check: 'antideriv', vars: ['x'],
      prompt: String.raw`Donne une primitive de $f(x) = \dfrac{1}{x^2+2x+2}$.`,
      answer: 'arctan(x+1)',
      mistakes: [
        { expr: 'ln(x^2+2*x+2)', msg: String.raw`Le numérateur n'est pas la dérivée $2x + 2$ du dénominateur : ce n'est pas une forme $\frac{u'}{u}$.` },
        { expr: 'arctan(x)', msg: String.raw`Forme canonique : $x^2 + 2x + 2 = (x+1)^2 + 1$, donc c'est $\arctan(x+1)$.` }
      ],
      hint: String.raw`Forme canonique : $x^2 + 2x + 2 = (x+1)^2 + 1$.`,
      explain: String.raw`$\dfrac{1}{(x+1)^2 + 1} = \dfrac{u'}{1+u^2}$ avec $u = x + 1$, donc $F(x) = \arctan(x+1)$.` },
    { id: 'm6-x-036', level: 3, check: 'value', vars: [],
      prompt: String.raw`À l'aide du changement de variable $x = \sin t$, calcule $\displaystyle\int_0^1\sqrt{1-x^2}\,\mathrm{d}x$.`,
      answer: 'pi/4',
      mistakes: [
        { expr: 'pi/2', msg: String.raw`Oubli du $\frac{1}{2}$ dans $\cos^2 t = \frac{1 + \cos 2t}{2}$.` },
        { expr: '-2/3', msg: String.raw`$\frac{2}{3}(1-x^2)^{3/2}$ n'est pas une primitive : il manque $u' = -2x$. Utilise le changement de variable.` }
      ],
      hint: String.raw`$\mathrm{d}x = \cos t\,\mathrm{d}t$, bornes $0$ et $\dfrac{\pi}{2}$, $\sqrt{1 - \sin^2 t} = \cos t$.`,
      explain: String.raw`$\displaystyle\int_0^{\pi/2}\cos^2 t\,\mathrm{d}t = \left[\frac{t}{2} + \frac{\sin 2t}{4}\right]_0^{\pi/2} = \frac{\pi}{4}$ : l'aire d'un quart de disque de rayon 1.` },
    { id: 'm6-x-037', level: 3, check: 'antideriv', vars: ['x'],
      prompt: String.raw`Par deux intégrations par parties, donne une primitive de $f(x) = \mathrm{e}^x\cos x$.`,
      answer: 'exp(x)*(cos(x)+sin(x))/2',
      mistakes: [
        { expr: 'exp(x)*(cos(x)+sin(x))', msg: String.raw`On obtient $2I = \mathrm{e}^x(\cos x + \sin x)$ : n'oublie pas de diviser par 2.` },
        { expr: 'exp(x)*sin(x)', msg: String.raw`Primitive d'un produit $\neq$ produit des primitives : fais deux IPP.` }
      ],
      hint: String.raw`Deux IPP avec $v' = \mathrm{e}^x$ : on retombe sur $I$ et on résout l'équation.`,
      explain: String.raw`$I = \mathrm{e}^x\cos x + \int\mathrm{e}^x\sin x = \mathrm{e}^x\cos x + \mathrm{e}^x\sin x - I$, donc $I = \dfrac{\mathrm{e}^x(\cos x + \sin x)}{2}$.` },
    { id: 'm6-x-038', level: 3, check: 'value', vars: [],
      prompt: String.raw`Calcule la valeur efficace (exacte) de la tension $u(t) = 10\sin(\omega t)$ (en volts).`,
      answer: '5*sqrt(2)',
      mistakes: [
        { expr: '20/pi', msg: String.raw`$\frac{2A}{\pi}$ est la valeur moyenne de $|u|$ (signal redressé), pas la valeur efficace.` },
        { expr: '5', msg: String.raw`$S_{\text{eff}} = \frac{A}{\sqrt{2}}$, pas $\frac{A}{2}$.` },
        { expr: '50', msg: String.raw`$50 = \langle u^2\rangle$ : il faut prendre la racine carrée.` }
      ],
      hint: String.raw`$\langle\sin^2\rangle = \dfrac{1}{2}$ sur une période, puis $U_{\text{eff}} = \sqrt{\langle u^2\rangle}$.`,
      explain: String.raw`$\langle u^2\rangle = 100\,\langle\sin^2(\omega t)\rangle = 100\times\frac{1}{2} = 50$, donc $U_{\text{eff}} = \sqrt{50} = 5\sqrt{2} \approx 7{,}07\ \text{V}$.` },
    { id: 'm6-x-039', level: 3, check: 'value', vars: [],
      prompt: String.raw`Un signal en dents de scie de période $T$ vaut $s(t) = \dfrac{t}{T}$ pour $t \in [0, T[$. Calcule sa valeur efficace (exacte).`,
      answer: '1/sqrt(3)',
      mistakes: [
        { expr: '1/3', msg: String.raw`$\frac{1}{3} = \langle s^2\rangle$ : n'oublie pas la racine carrée.` },
        { expr: '1/2', msg: String.raw`$\frac{1}{2}$ est la valeur <b>moyenne</b> du signal, pas sa valeur efficace.` }
      ],
      hint: String.raw`$S_{\text{eff}}^2 = \dfrac{1}{T}\displaystyle\int_0^T \frac{t^2}{T^2}\,\mathrm{d}t$.`,
      explain: String.raw`$\dfrac{1}{T}\displaystyle\int_0^T\frac{t^2}{T^2}\,\mathrm{d}t = \frac{1}{T^3}\cdot\frac{T^3}{3} = \frac{1}{3}$, donc $S_{\text{eff}} = \dfrac{1}{\sqrt{3}} \approx 0{,}577$.` },
    { id: 'm6-x-040', level: 3, check: 'value', vars: [],
      prompt: String.raw`Soit $F(x) = \displaystyle\int_0^{x^2}\sqrt{1+t}\,\mathrm{d}t$. Calcule $F'(2)$ (valeur exacte).`,
      answer: '4*sqrt(5)',
      mistakes: [
        { expr: 'sqrt(5)', msg: String.raw`Oubli du facteur $v'(x) = 2x$ (la borne supérieure est $x^2$).` },
        { expr: '4*sqrt(3)', msg: String.raw`On évalue l'intégrande en la borne $x^2 = 4$, pas en $x = 2$.` }
      ],
      hint: String.raw`$\dfrac{\mathrm{d}}{\mathrm{d}x}\displaystyle\int_0^{v(x)} f(t)\,\mathrm{d}t = v'(x)\,f\big(v(x)\big)$.`,
      explain: String.raw`$F'(x) = 2x\sqrt{1 + x^2}$, donc $F'(2) = 4\sqrt{5}$.` }
  ]
});
