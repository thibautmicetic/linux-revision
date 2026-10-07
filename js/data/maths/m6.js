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
      topic: 'Primitives usuelles', sec: 'm6-s-usuelles',
      choices: [String.raw`$-\sin x$`, String.raw`$\sin x$`, String.raw`$\cos x$`, String.raw`$-\cos x$`], answer: 1,
      steps: [
        String.raw`Rappel : une primitive de $f$ est une fonction $F$ dont la dérivée est $f$ ($F' = f$). Primitiver, c'est « dériver à l'envers » : on lit le tableau des dérivées de droite à gauche.`,
        String.raw`On cherche $F$ telle que $F'(x) = \cos x$. Dans le tableau des dérivées : $(\sin x)' = \cos x$.`,
        String.raw`Donc $F(x) = \sin x$ (à une constante près). Vérification en dérivant : $(\sin x)' = \cos x$ ✔.`
      ],
      explain: String.raw`Une primitive de $f$ est une fonction $F$ telle que $F' = f$ : on cherche donc une fonction dont la dérivée vaut $\cos x$. Comme $(\sin x)' = \cos x$, la fonction $\sin x$ convient (ainsi que toutes les $\sin x + C$). Pour contrôler une primitive, on la dérive toujours : on doit retrouver exactement la fonction de départ.`,
      rule: String.raw`$\int \cos x\,\mathrm{d}x = \sin x + C$ et $\int \sin x\,\mathrm{d}x = -\cos x + C$`,
      why: { 0: String.raw`Erreur de signe (confusion avec $(\cos x)' = -\sin x$) : en dérivant $-\sin x$ on obtient $-\cos x$, pas $\cos x$.`, 2: String.raw`On a cru que $\cos$ était sa propre primitive ; or $(\cos x)' = -\sin x \neq \cos x$.`, 3: String.raw`On a confondu avec la primitive du <b>sinus</b> : la dérivée de $-\cos x$ vaut $\sin x$.` } },
    { id: 'm6-q-002', level: 1, q: String.raw`Une primitive de $\sin x$ est :`,
      topic: 'Primitives usuelles', sec: 'm6-s-usuelles',
      choices: [String.raw`$\cos x$`, String.raw`$-\cos x$`, String.raw`$-\sin x$`], answer: 1,
      steps: [
        String.raw`Rappel : une primitive $F$ de $f$ vérifie $F' = f$ ; on la trouve en lisant le tableau des dérivées à l'envers, puis on vérifie en dérivant.`,
        String.raw`On connaît $(\cos x)' = -\sin x$ : c'est presque $\sin x$, au signe près.`,
        String.raw`On change le signe : $(-\cos x)' = -(-\sin x) = \sin x$. Une primitive est donc $-\cos x$ ✔.`
      ],
      explain: String.raw`On cherche une fonction dont la dérivée vaut $\sin x$. On sait que $(\cos x)' = -\sin x$ ; en changeant le signe, $(-\cos x)' = -(-\sin x) = \sin x$. Une primitive de $\sin x$ est donc $-\cos x$ : le signe moins est indispensable, et on le contrôle en dérivant.`,
      rule: String.raw`$\int \sin x\,\mathrm{d}x = -\cos x + C$`,
      why: { 0: String.raw`On a oublié le signe : $(\cos x)' = -\sin x$, donc $\cos x$ est une primitive de $-\sin x$, pas de $\sin x$.`, 2: String.raw`On a pris la <b>dérivée</b> de $\cos x$ ; en dérivant $-\sin x$ on obtient $-\cos x \neq \sin x$.` } },
    { id: 'm6-q-003', level: 1, q: String.raw`Une primitive de $x^n$ ($n \neq -1$) est :`,
      topic: 'Primitive des puissances', sec: 'm6-s-usuelles',
      choices: [String.raw`$\dfrac{x^{n+1}}{n+1}$`, String.raw`$n\,x^{n-1}$`, String.raw`$\dfrac{x^{n+1}}{n}$`, String.raw`$x^{n+1}$`], answer: 0,
      steps: [
        String.raw`Rappel : primitiver est l'inverse de dériver. Dériver $x^n$ fait baisser l'exposant de 1 et le fait descendre en facteur ; primitiver doit donc augmenter l'exposant de 1 et diviser par ce nouvel exposant.`,
        String.raw`Candidat : $F(x) = \dfrac{x^{n+1}}{n+1}$ (possible car $n + 1 \neq 0$).`,
        String.raw`Vérification en dérivant : $F'(x) = \dfrac{(n+1)\,x^{n}}{n+1} = x^n$ ✔. Exemple : $\int x^2\,\mathrm{d}x = \frac{x^3}{3}$.`
      ],
      explain: String.raw`Pour primitiver $x^n$, on fait l'inverse de la dérivation : on augmente l'exposant de 1, puis on divise par ce nouvel exposant $n + 1$. Vérification : $\left(\frac{x^{n+1}}{n+1}\right)' = \frac{(n+1)x^n}{n+1} = x^n$. La condition $n \neq -1$ évite la division par zéro ; pour $n = -1$, la primitive est $\ln|x|$.`,
      rule: String.raw`$\int x^n\,\mathrm{d}x = \dfrac{x^{n+1}}{n+1} + C$ ($n \neq -1$)`,
      why: { 1: String.raw`On a <b>dérivé</b> $x^n$ (exposant diminué) au lieu de le primitiver.`, 2: String.raw`On a divisé par l'ancien exposant $n$ au lieu du nouveau $n+1$ : en dérivant on trouverait $\frac{n+1}{n}x^n$.`, 3: String.raw`On a augmenté l'exposant sans diviser : $(x^{n+1})' = (n+1)x^n$, il reste un facteur $n+1$ en trop.` } },
    { id: 'm6-q-004', level: 1, q: String.raw`Une primitive de $\dfrac{1}{x}$ sur $]-\infty, 0[$ est :`,
      topic: 'Primitive de 1/x', sec: 'm6-s-usuelles',
      choices: [String.raw`$-\dfrac{1}{x^2}$`, String.raw`$\ln x$`, String.raw`$\ln|x|$`], answer: 2,
      steps: [
        String.raw`Rappel : une primitive doit être définie sur tout l'intervalle considéré, ici $]-\infty, 0[$, et avoir pour dérivée $\frac{1}{x}$. La règle $\frac{x^{n+1}}{n+1}$ échoue pour $n = -1$ (division par 0).`,
        String.raw`Sur $]-\infty, 0[$, $|x| = -x \gt 0$, donc $\ln|x| = \ln(-x)$ est bien défini (contrairement à $\ln x$).`,
        String.raw`Vérification en dérivant : forme $\ln u$ avec $u = -x$, $u' = -1$, d'où $(\ln(-x))' = \frac{-1}{-x} = \frac{1}{x}$ ✔.`
      ],
      explain: String.raw`Sur $]-\infty, 0[$, $\ln x$ n'existe pas : il faut une fonction définie pour $x \lt 0$. On essaie $\ln|x| = \ln(-x)$ : c'est une forme $\ln u$ avec $u = -x$, de dérivée $\frac{u'}{u} = \frac{-1}{-x} = \frac{1}{x}$. Donc $\ln|x|$ est une primitive de $\frac1x$ sur chacun des intervalles $]-\infty, 0[$ et $]0, +\infty[$.`,
      rule: String.raw`$\int \dfrac{\mathrm{d}x}{x} = \ln|x| + C$ sur un intervalle ne contenant pas $0$`,
      why: { 0: String.raw`On a <b>dérivé</b> $\frac1x$ au lieu de le primitiver : $\left(\frac1x\right)' = -\frac{1}{x^2}$.`, 1: String.raw`On a appliqué la formule valable pour $x \gt 0$ sans regarder l'intervalle : $\ln x$ n'est pas défini pour $x \lt 0$.` } },
    { id: 'm6-q-005', level: 1, q: String.raw`Une primitive de $\mathrm{e}^{2x}$ est :`,
      topic: 'Primitive de exp(ax)', sec: 'm6-s-usuelles',
      choices: [String.raw`$2\,\mathrm{e}^{2x}$`, String.raw`$\dfrac{1}{2}\mathrm{e}^{2x}$`, String.raw`$\mathrm{e}^{2x}$`, String.raw`$\dfrac{\mathrm{e}^{2x+1}}{2x+1}$`], answer: 1,
      steps: [
        String.raw`Rappel : une primitive $F$ de $f$ vérifie $F' = f$. En dérivant $\mathrm{e}^{ax}$, il sort un facteur $a$ ; pour primitiver, il faut donc diviser par $a$.`,
        String.raw`Ici $a = 2$ : candidat $F(x) = \frac{1}{2}\mathrm{e}^{2x}$.`,
        String.raw`Vérification en dérivant : $F'(x) = \frac12 \times 2\,\mathrm{e}^{2x} = \mathrm{e}^{2x}$ ✔.`
      ],
      explain: String.raw`En dérivant $\mathrm{e}^{2x}$, il sort un facteur $2$ : $(\mathrm{e}^{2x})' = 2\,\mathrm{e}^{2x}$. Pour primitiver, il faut compenser ce facteur en divisant par $2$ : une primitive est $\frac{1}{2}\mathrm{e}^{2x}$. Vérification : $\left(\frac{1}{2}\mathrm{e}^{2x}\right)' = \frac{1}{2}\times 2\mathrm{e}^{2x} = \mathrm{e}^{2x}$.`,
      rule: String.raw`$\int \mathrm{e}^{ax}\,\mathrm{d}x = \dfrac{1}{a}\,\mathrm{e}^{ax} + C$ ($a \neq 0$)`,
      why: { 0: String.raw`On a <b>dérivé</b> : $2\mathrm{e}^{2x}$ est la dérivée de $\mathrm{e}^{2x}$ ; pour primitiver on divise par 2, on ne multiplie pas.`, 2: String.raw`On a recopié l'exponentielle en oubliant le facteur $\frac{1}{a}$ : $(\mathrm{e}^{2x})' = 2\mathrm{e}^{2x}$, pas $\mathrm{e}^{2x}$.`, 3: String.raw`On a appliqué la règle des puissances $\frac{x^{n+1}}{n+1}$ à l'exposant : elle ne vaut pas pour une exponentielle.` } },
    { id: 'm6-q-006', level: 1, q: String.raw`Une primitive de $\dfrac{1}{1+x^2}$ est :`,
      topic: 'Primitive et arctangente', sec: 'm6-s-usuelles',
      choices: [String.raw`$\ln(1+x^2)$`, String.raw`$\arctan x$`, String.raw`$\arcsin x$`, String.raw`$-\dfrac{2x}{(1+x^2)^2}$`], answer: 1,
      steps: [
        String.raw`Rappel : primitiver $\frac{1}{1+x^2}$, c'est trouver une fonction dont la dérivée vaut $\frac{1}{1+x^2}$ ; on la cherche dans le tableau des dérivées usuelles.`,
        String.raw`On reconnaît la dérivée de l'arctangente : $(\arctan x)' = \frac{1}{1+x^2}$.`,
        String.raw`Une primitive est donc $\arctan x$ ✔. En revanche $\left(\ln(1+x^2)\right)' = \frac{2x}{1+x^2}$ ne convient pas.`
      ],
      explain: String.raw`On lit le tableau des dérivées à l'envers : $(\arctan x)' = \frac{1}{1+x^2}$, donc $\arctan x$ est une primitive de $\frac{1}{1+x^2}$ sur $\mathbb{R}$. C'est une forme à reconnaître : un « 1 » au numérateur et $1 + x^2$ au dénominateur. Avec $2x$ au numérateur, la primitive serait en revanche $\ln(1+x^2)$.`,
      rule: String.raw`$\int \dfrac{\mathrm{d}x}{1+x^2} = \arctan x + C$`,
      why: { 0: String.raw`On a cru à une forme $\frac{u'}{u}$ : mais $(\ln(1+x^2))' = \frac{2x}{1+x^2}$, il faudrait $2x$ au numérateur.`, 2: String.raw`Confusion entre fonctions réciproques : $(\arcsin x)' = \frac{1}{\sqrt{1-x^2}}$.`, 3: String.raw`On a <b>dérivé</b> $\frac{1}{1+x^2}$ au lieu de le primitiver.` } },
    { id: 'm6-q-007', level: 2, q: String.raw`Une primitive de $\dfrac{x}{1+x^2}$ est :`,
      topic: "Forme u'/u", sec: 'm6-s-usuelles',
      choices: [String.raw`$\arctan x$`, String.raw`$\ln(1+x^2)$`, String.raw`$\dfrac{1}{2}\ln(1+x^2)$`, String.raw`$\dfrac{x^2/2}{x + x^3/3}$`], answer: 2,
      steps: [
        String.raw`Rappel : quand le numérateur est (à une constante près) la dérivée du dénominateur, on reconnaît une forme $\frac{u'}{u}$, dont une primitive est $\ln|u|$.`,
        String.raw`Avec $u = 1 + x^2$ : $u' = 2x$. Le numérateur $x$ vaut $\frac12 u'$, donc $\frac{x}{1+x^2} = \frac{1}{2}\cdot\frac{u'}{u}$.`,
        String.raw`Une primitive est $\frac{1}{2}\ln(1+x^2)$ (pas de valeur absolue car $1 + x^2 \gt 0$).`,
        String.raw`Vérification en dérivant : $\frac{1}{2}\cdot\frac{2x}{1+x^2} = \frac{x}{1+x^2}$ ✔.`
      ],
      explain: String.raw`On cherche une forme $\frac{u'}{u}$ : avec $u = 1 + x^2$, $u' = 2x$, alors que le numérateur vaut seulement $x$. On écrit donc $\frac{x}{1+x^2} = \frac{1}{2}\cdot\frac{2x}{1+x^2}$, dont une primitive est $\frac{1}{2}\ln(1+x^2)$. En dérivant, on retrouve bien $\frac12\cdot\frac{2x}{1+x^2} = \frac{x}{1+x^2}$.`,
      rule: String.raw`$\int \dfrac{u'}{u} = \ln|u| + C$ ; ajuster la constante : $x = \frac{1}{2}(2x)$`,
      why: { 0: String.raw`On n'a pas vu le $x$ au numérateur : $\arctan x$ est la primitive de $\frac{1}{1+x^2}$.`, 1: String.raw`On a reconnu $\frac{u'}{u}$ mais oublié d'ajuster la constante : $(\ln(1+x^2))' = \frac{2x}{1+x^2}$, deux fois trop.`, 3: String.raw`On a primitivé numérateur et dénominateur séparément : la primitive d'un quotient n'est pas le quotient des primitives.` } },
    { id: 'm6-q-008', level: 2, q: String.raw`Une primitive de $2x\,\mathrm{e}^{x^2}$ est :`,
      topic: "Forme u'e^u", sec: 'm6-s-usuelles',
      choices: [String.raw`$x^2\,\mathrm{e}^{x^2}$`, String.raw`$\mathrm{e}^{x^2}$`, String.raw`$2\,\mathrm{e}^{x^2}$`, String.raw`$\dfrac{\mathrm{e}^{x^2}}{2x}$`], answer: 1,
      steps: [
        String.raw`Rappel : la dérivée de $\mathrm{e}^{u}$ est $u'\,\mathrm{e}^u$. Donc devant « dérivée de l'exposant × exponentielle », la primitive est simplement l'exponentielle.`,
        String.raw`Ici l'exposant est $u = x^2$ et $u' = 2x$ : c'est exactement le facteur devant.`,
        String.raw`Une primitive est $\mathrm{e}^{x^2}$. Vérification en dérivant : $(\mathrm{e}^{x^2})' = 2x\,\mathrm{e}^{x^2}$ ✔.`
      ],
      explain: String.raw`On reconnaît une forme $u'\,\mathrm{e}^u$ avec $u = x^2$ : le facteur $2x$ est exactement $u'$. Comme $(\mathrm{e}^u)' = u'\,\mathrm{e}^u$, une primitive est $\mathrm{e}^{x^2}$. Vérification : $(\mathrm{e}^{x^2})' = 2x\,\mathrm{e}^{x^2}$, on retrouve bien la fonction de départ.`,
      rule: String.raw`$\int u'\,\mathrm{e}^{u} = \mathrm{e}^{u} + C$`,
      why: { 0: String.raw`On a primitivé $2x$ en $x^2$ et gardé $\mathrm{e}^{x^2}$ : la primitive d'un produit n'est pas le produit des primitives (en dérivant, on obtiendrait $2x\mathrm{e}^{x^2} + 2x^3\mathrm{e}^{x^2}$).`, 2: String.raw`Le facteur $2x$ est déjà exactement $u'$ : ajouter un 2 donnerait $4x\,\mathrm{e}^{x^2}$ en dérivant.`, 3: String.raw`On a « divisé par la dérivée de l'exposant » comme pour $\mathrm{e}^{ax}$ : cela ne marche que si $u'$ est une constante.` } },
    { id: 'm6-q-009', level: 2, q: String.raw`Une primitive de $\tan x$ sur $\left]-\frac{\pi}{2}, \frac{\pi}{2}\right[$ est :`,
      topic: 'Primitive de la tangente', sec: 'm6-s-usuelles',
      choices: [String.raw`$1 + \tan^2 x$`, String.raw`$\ln|\cos x|$`, String.raw`$-\ln|\cos x|$`, String.raw`$\dfrac{\tan^2 x}{2}$`], answer: 2,
      steps: [
        String.raw`Rappel : pour primitiver un quotient, on regarde si le numérateur est (au signe ou à une constante près) la dérivée du dénominateur : forme $\frac{u'}{u}$, de primitive $\ln|u|$.`,
        String.raw`$\tan x = \frac{\sin x}{\cos x}$ ; avec $u = \cos x$, $u' = -\sin x$, donc $\sin x = -u'$ et $\tan x = -\frac{u'}{u}$.`,
        String.raw`Une primitive est $-\ln|\cos x|$. Vérification : $(-\ln|\cos x|)' = -\frac{-\sin x}{\cos x} = \tan x$ ✔.`
      ],
      explain: String.raw`On écrit $\tan x = \frac{\sin x}{\cos x}$. Avec $u = \cos x$, on a $u' = -\sin x$, donc $\tan x = -\frac{u'}{u}$. Une primitive de $\frac{u'}{u}$ étant $\ln|u|$, une primitive de $\tan x$ est $-\ln|\cos x|$. Vérification : $(-\ln|\cos x|)' = -\frac{-\sin x}{\cos x} = \tan x$.`,
      rule: String.raw`$\int \tan x\,\mathrm{d}x = -\ln|\cos x| + C$`,
      why: { 0: String.raw`On a <b>dérivé</b> $\tan$ au lieu de la primitiver : $(\tan x)' = 1 + \tan^2 x$.`, 1: String.raw`On a oublié le signe de $(\cos x)' = -\sin x$ : $(\ln|\cos x|)' = -\tan x$.`, 3: String.raw`On a appliqué $\int u = \frac{u^2}{2}$ comme si c'était $\int u'u$ : il manque le facteur $u' = 1 + \tan^2 x$ (en dérivant on obtient $\tan x\,(1 + \tan^2 x)$).` } },
    { id: 'm6-q-010', level: 1, q: String.raw`$\displaystyle\int_0^1 x^2\,\mathrm{d}x = $ ?`,
      topic: "Calcul d'intégrale", sec: 'm6-s-integrale',
      choices: [String.raw`$\dfrac{1}{2}$`, String.raw`$\dfrac{1}{3}$`, String.raw`$2$`, String.raw`$1$`], answer: 1,
      steps: [
        String.raw`Rappel : pour $f \geq 0$, $\int_a^b f(x)\,\mathrm{d}x$ est l'aire sous la courbe entre $a$ et $b$. On la calcule avec une primitive $F$ : $\int_a^b f = F(b) - F(a)$.`,
        String.raw`Primitive de $x^2$ : $F(x) = \frac{x^3}{3}$ (exposant $+1$, puis division par $3$).`,
        String.raw`$F(1) - F(0) = \frac{1^3}{3} - \frac{0^3}{3} = \frac{1}{3} - 0 = \frac13$.`
      ],
      explain: String.raw`Théorème fondamental : $\int_a^b f(x)\,\mathrm{d}x = F(b) - F(a)$ où $F$ est une primitive de $f$. Une primitive de $x^2$ est $\frac{x^3}{3}$, donc $\int_0^1 x^2\,\mathrm{d}x = \frac{1}{3} - 0 = \frac{1}{3}$. C'est l'aire sous la parabole entre $0$ et $1$, logiquement plus petite que l'aire $\frac12$ sous la droite $y = x$.`,
      rule: String.raw`$\int_a^b f(x)\,\mathrm{d}x = \big[F(x)\big]_a^b = F(b) - F(a)$`,
      why: { 0: String.raw`On a pris la primitive de $x$ ($\frac{x^2}{2}$) au lieu de celle de $x^2$ : $\frac12 = \int_0^1 x\,\mathrm{d}x$.`, 2: String.raw`On a dérivé au lieu de primitiver : $[2x]_0^1 = 2$.`, 3: String.raw`On a oublié la division par le nouvel exposant 3 : $[x^3]_0^1 = 1$.` } },
    { id: 'm6-q-011', level: 1, q: String.raw`$\displaystyle\int_{-1}^{1} x^3\,\mathrm{d}x = $ ?`,
      topic: 'Parité et intégrale', sec: 'm6-s-integrale',
      choices: [String.raw`$\dfrac{1}{2}$`, String.raw`$0$`, String.raw`$\dfrac{1}{4}$`], answer: 1,
      steps: [
        String.raw`Rappel : $f$ est impaire si $f(-x) = -f(x)$ (courbe symétrique par rapport à l'origine). Sur un intervalle symétrique $[-a, a]$, ses parties positive et négative se compensent : $\int_{-a}^a f = 0$.`,
        String.raw`$(-x)^3 = -x^3$ : $x^3$ est impaire, et $[-1, 1]$ est symétrique, donc l'intégrale vaut $0$.`,
        String.raw`Vérification par le calcul : avec la primitive $\frac{x^4}{4}$, on obtient $\frac{1^4}{4} - \frac{(-1)^4}{4} = \frac14 - \frac14 = 0$ ✔.`
      ],
      explain: String.raw`La fonction $x^3$ est impaire : $(-x)^3 = -x^3$. Sur l'intervalle symétrique $[-1, 1]$, l'aire algébrique négative à gauche compense exactement l'aire positive à droite, donc l'intégrale est nulle. Par le calcul : $\left[\frac{x^4}{4}\right]_{-1}^{1} = \frac{1}{4} - \frac{1}{4} = 0$.`,
      rule: String.raw`$f$ impaire ⇒ $\int_{-a}^{a} f = 0$ ; $f$ paire ⇒ $\int_{-a}^{a} f = 2\int_0^a f$`,
      why: { 0: String.raw`On a appliqué la règle des fonctions <b>paires</b> ($2\int_0^1 x^3 = \frac12$) alors que $x^3$ est impaire.`, 2: String.raw`On a oublié de soustraire $F(-1) = \frac{(-1)^4}{4} = \frac{1}{4}$ : on n'a calculé que $F(1)$.` } },
    { id: 'm6-q-012', level: 1, q: String.raw`$\displaystyle\int_0^{\pi}\sin x\,\mathrm{d}x = $ ?`,
      topic: "Calcul d'intégrale", sec: 'm6-s-integrale',
      choices: [String.raw`$0$`, String.raw`$-2$`, String.raw`$2$`, String.raw`$1$`], answer: 2,
      steps: [
        String.raw`Rappel : $\int_a^b f = F(b) - F(a)$ avec $F$ une primitive de $f$. Ici $\sin \geq 0$ sur $[0, \pi]$ : l'intégrale est l'aire d'une arche de sinusoïde, donc positive.`,
        String.raw`Primitive de $\sin x$ : $F(x) = -\cos x$ (car $(-\cos x)' = \sin x$).`,
        String.raw`$F(\pi) = -\cos\pi = -(-1) = 1$ et $F(0) = -\cos 0 = -1$.`,
        String.raw`$F(\pi) - F(0) = 1 - (-1) = 2$.`
      ],
      explain: String.raw`Une primitive de $\sin$ est $-\cos$. Donc $\int_0^{\pi}\sin x\,\mathrm{d}x = \big[-\cos x\big]_0^{\pi} = (-\cos\pi) - (-\cos 0) = 1 + 1 = 2$. C'est l'aire d'une arche de sinusoïde, positive puisque $\sin \geq 0$ sur $[0, \pi]$.`,
      rule: String.raw`$\int_a^b \sin x\,\mathrm{d}x = \big[-\cos x\big]_a^b$`,
      why: { 0: String.raw`On a pris $\sin$ lui-même comme « primitive » ($[\sin x]_0^\pi = 0$), ou confondu avec l'intégrale sur $[0, 2\pi]$.`, 1: String.raw`Erreur de signe : on a pris $\cos$ comme primitive de $\sin$, alors que c'est $-\cos$.`, 3: String.raw`Erreur dans les signes : $-\cos\pi = +1$ <b>et</b> $-(-\cos 0) = +1$, le total est $2$.` } },
    { id: 'm6-q-013', level: 1, q: String.raw`Relation de Chasles :`,
      topic: 'Relation de Chasles', sec: 'm6-s-integrale',
      choices: [String.raw`$\int_a^b f + \int_b^c f = \int_a^c f$`, String.raw`$\int_a^b f \times \int_b^c f = \int_a^c f$`, String.raw`$\int_a^b f + \int_b^c f = \int_a^c 2f$`, String.raw`$\int_a^c f = \int_a^b f - \int_b^c f$`], answer: 0,
      steps: [
        String.raw`Rappel : la relation de Chasles dit qu'on peut découper l'intervalle d'intégration en morceaux et additionner les intégrales, comme on additionne les aires de domaines accolés.`,
        String.raw`Avec une primitive $F$ : $\int_a^b f + \int_b^c f = \big(F(b) - F(a)\big) + \big(F(c) - F(b)\big)$.`,
        String.raw`Le terme $F(b)$ s'élimine : il reste $F(c) - F(a) = \int_a^c f$ ✔.`
      ],
      explain: String.raw`L'intégrale sur $[a, c]$ se découpe en $[a, b]$ puis $[b, c]$, comme une aire qu'on coupe en deux morceaux accolés : $\int_a^b f + \int_b^c f = \int_a^c f$. Avec une primitive $F$, c'est immédiat : $\big(F(b) - F(a)\big) + \big(F(c) - F(b)\big) = F(c) - F(a)$, le terme $F(b)$ s'élimine.`,
      rule: String.raw`$\int_a^b f + \int_b^c f = \int_a^c f$`,
      why: { 1: String.raw`On a imaginé une propriété multiplicative : les intégrales sur des intervalles accolés s'<b>additionnent</b>.`, 2: String.raw`On a cru que juxtaposer les intervalles doublait la fonction : on change l'intervalle, pas la fonction intégrée.`, 3: String.raw`Erreur de signe : la soustraction correspond à renverser des bornes ($\int_c^b f = -\int_b^c f$), pas à juxtaposer des intervalles.` } },
    { id: 'm6-q-014', level: 2, q: String.raw`Si $f \leq g$ sur $[a, b]$ avec $a \leq b$, alors :`,
      topic: "Croissance de l'intégrale", sec: 'm6-s-integrale',
      choices: [String.raw`$\int_a^b f \leq \int_a^b g$`, String.raw`$\int_a^b f \geq \int_a^b g$`, String.raw`$\int_a^b |f| \leq \int_a^b g$`, String.raw`$\int_b^a f \leq \int_b^a g$`], answer: 0,
      steps: [
        String.raw`Rappel : si $h \geq 0$ et $a \leq b$, $\int_a^b h$ est une aire, donc $\int_a^b h \geq 0$ (positivité de l'intégrale).`,
        String.raw`On l'applique à $h = g - f$, positive par hypothèse : $\int_a^b (g - f) \geq 0$.`,
        String.raw`Par linéarité : $\int_a^b g - \int_a^b f \geq 0$, soit $\int_a^b f \leq \int_a^b g$.`
      ],
      explain: String.raw`Si $f \leq g$ sur $[a, b]$, alors $g - f \geq 0$, et l'intégrale d'une fonction positive avec des bornes dans l'ordre croissant est positive : $\int_a^b (g - f) \geq 0$. Par linéarité, cela donne $\int_a^b f \leq \int_a^b g$. C'est la croissance de l'intégrale ; elle exige des bornes dans le bon ordre.`,
      rule: String.raw`$f \leq g$ sur $[a,b]$ et $a \leq b$ ⇒ $\int_a^b f \leq \int_a^b g$`,
      why: { 1: String.raw`On a inversé le sens de l'inégalité : la plus grande fonction a la plus grande intégrale (bornes dans l'ordre).`, 2: String.raw`On a remplacé $f$ par $|f|$ sans justification : $|f|$ peut dépasser $g$ (ex. $f = -5 \leq g = 0$ mais $|f| = 5$).`, 3: String.raw`On a oublié que renverser les bornes change le signe : $\int_b^a = -\int_a^b$, donc l'inégalité s'<b>inverse</b>.` } },
    { id: 'm6-q-015', level: 2, q: String.raw`Valeur moyenne de $\sin$ sur $[0, \pi]$ ?`,
      topic: 'Valeur moyenne', sec: 'm6-s-applications',
      choices: [String.raw`$0$`, String.raw`$\dfrac{1}{2}$`, String.raw`$\dfrac{2}{\pi}$`, String.raw`$2$`], answer: 2,
      steps: [
        String.raw`Rappel : la valeur moyenne $\mu$ de $f$ sur $[a, b]$ est la hauteur du rectangle de base $[a, b]$ qui a la même aire que le domaine sous la courbe : $\mu = \frac{1}{b-a}\int_a^b f$.`,
        String.raw`Intégrale : $\int_0^{\pi}\sin x\,\mathrm{d}x = \big[-\cos x\big]_0^{\pi} = 1 + 1 = 2$.`,
        String.raw`On divise par la longueur $b - a = \pi$ : $\mu = \frac{2}{\pi} \approx 0{,}64$, bien compris entre $0$ et $1$ ✔.`
      ],
      explain: String.raw`La valeur moyenne de $f$ sur $[a, b]$ est $\mu = \frac{1}{b-a}\int_a^b f(x)\,\mathrm{d}x$ : c'est la hauteur du rectangle de même aire que le domaine sous la courbe. Ici $\int_0^{\pi}\sin x\,\mathrm{d}x = 2$ et la longueur vaut $\pi$, donc $\mu = \frac{2}{\pi} \approx 0{,}64$, valeur bien comprise entre $0$ et $1$.`,
      rule: String.raw`$\mu = \dfrac{1}{b-a}\displaystyle\int_a^b f(x)\,\mathrm{d}x$`,
      why: { 0: String.raw`On a pris la moyenne sur une période complète $[0, 2\pi]$, où les arches positive et négative se compensent.`, 1: String.raw`On a confondu avec la moyenne de $\sin^2$, qui vaut $\frac{1}{2}$ sur une période.`, 3: String.raw`On a donné l'intégrale sans la diviser par la longueur $\pi$ de l'intervalle.` } },
    { id: 'm6-q-016', level: 2, q: String.raw`$\dfrac{\mathrm{d}}{\mathrm{d}x}\displaystyle\int_0^x \mathrm{e}^{-t^2}\,\mathrm{d}t = $ ?`,
      topic: 'Théorème fondamental', sec: 'm6-s-integrale',
      choices: [String.raw`$\mathrm{e}^{-x^2}$`, String.raw`$-2x\,\mathrm{e}^{-x^2}$`, String.raw`$\mathrm{e}^{-x^2} - 1$`, String.raw`on ne peut pas la calculer (pas de primitive explicite)`], answer: 0,
      steps: [
        String.raw`Rappel (théorème fondamental) : si $f$ est continue, $F(x) = \int_a^x f(t)\,\mathrm{d}t$ est une primitive de $f$, donc $F'(x) = f(x)$ : dériver une intégrale par rapport à sa borne supérieure redonne l'intégrande.`,
        String.raw`Ici $f(t) = \mathrm{e}^{-t^2}$ est continue sur $\mathbb{R}$, et la borne inférieure $0$ est constante.`,
        String.raw`La dérivée vaut donc $f(x) = \mathrm{e}^{-x^2}$ : on remplace simplement $t$ par $x$.`
      ],
      explain: String.raw`Le théorème fondamental de l'analyse affirme que, pour $f$ continue, $F(x) = \int_0^x f(t)\,\mathrm{d}t$ est la primitive de $f$ qui s'annule en $0$ : donc $F'(x) = f(x)$. Avec $f(t) = \mathrm{e}^{-t^2}$, on obtient $F'(x) = \mathrm{e}^{-x^2}$. Peu importe que cette primitive n'ait pas d'expression avec les fonctions usuelles : sa dérivée est connue.`,
      rule: String.raw`$\dfrac{\mathrm{d}}{\mathrm{d}x}\displaystyle\int_a^x f(t)\,\mathrm{d}t = f(x)$ ($f$ continue)`,
      why: { 1: String.raw`On a dérivé l'intégrande $\mathrm{e}^{-t^2}$ : le théorème donne $f(x)$, pas $f'(x)$.`, 2: String.raw`On a cru devoir soustraire $f(0) = 1$ : la borne inférieure constante donne une constante $F(0)$, de dérivée nulle.`, 3: String.raw`On a cru qu'il fallait une primitive explicite : le théorème fondamental donne la dérivée sans la connaître.` } },
    { id: 'm6-q-017', level: 3, q: String.raw`$\dfrac{\mathrm{d}}{\mathrm{d}x}\displaystyle\int_0^{x^2}\cos t\,\mathrm{d}t = $ ?`,
      topic: 'Intégrale à borne variable', sec: 'm6-s-integrale',
      choices: [String.raw`$\cos(x^2)$`, String.raw`$2x\cos(x^2)$`, String.raw`$\cos(2x)$`, String.raw`$\sin(x^2)$`], answer: 1,
      steps: [
        String.raw`Rappel : si $G$ est une primitive de $f$, $\int_0^{v(x)} f(t)\,\mathrm{d}t = G\big(v(x)\big) - G(0)$ : c'est une fonction composée de $x$.`,
        String.raw`On dérive la composée : $\frac{\mathrm{d}}{\mathrm{d}x}G\big(v(x)\big) = v'(x)\,G'\big(v(x)\big) = v'(x)\,f\big(v(x)\big)$.`,
        String.raw`Avec $v(x) = x^2$, $v'(x) = 2x$ et $f = \cos$ : la dérivée vaut $2x\cos(x^2)$.`,
        String.raw`Vérification : l'intégrale vaut $\big[\sin t\big]_0^{x^2} = \sin(x^2)$, et $(\sin(x^2))' = 2x\cos(x^2)$ ✔.`
      ],
      explain: String.raw`Soit $G$ une primitive de $\cos$ : l'intégrale vaut $G(x^2) - G(0)$. En dérivant cette composée, on obtient $2x\,G'(x^2) = 2x\cos(x^2)$. Vérification directe : $\int_0^{x^2}\cos t\,\mathrm{d}t = \sin(x^2)$, dont la dérivée est bien $2x\cos(x^2)$.`,
      rule: String.raw`$\dfrac{\mathrm{d}}{\mathrm{d}x}\displaystyle\int_a^{v(x)} f(t)\,\mathrm{d}t = v'(x)\,f\big(v(x)\big)$`,
      why: { 0: String.raw`On a appliqué le théorème fondamental comme si la borne était $x$ : il manque le facteur $v'(x) = 2x$ de la dérivée d'une composée.`, 2: String.raw`On a évalué $\cos$ en $v'(x) = 2x$ au lieu de $v(x) = x^2$ (et oublié de multiplier par $v'$).`, 3: String.raw`C'est l'intégrale elle-même, $\sin(x^2)$ : on a oublié de la dériver.` } },
    { id: 'm6-q-018', level: 1, q: String.raw`Formule d'intégration par parties :`,
      topic: 'Intégration par parties', sec: 'm6-s-ipp',
      choices: [String.raw`$\int_a^b uv' = [uv]_a^b - \int_a^b u'v$`, String.raw`$\int_a^b uv' = [uv]_a^b + \int_a^b u'v$`, String.raw`$\int_a^b uv' = [u'v]_a^b - \int_a^b uv$`, String.raw`$\int_a^b uv = \int_a^b u \times \int_a^b v$`], answer: 0,
      steps: [
        String.raw`Rappel : l'intégration par parties sert à intégrer un produit $u \times v'$ : on dérive un facteur ($u$) et on primitive l'autre ($v'$). Elle découle de la règle du produit.`,
        String.raw`Dérivée d'un produit : $(uv)' = u'v + uv'$. On intègre de $a$ à $b$ : $\big[uv\big]_a^b = \int_a^b u'v + \int_a^b uv'$.`,
        String.raw`On isole $\int_a^b uv'$ en faisant passer $\int_a^b u'v$ de l'autre côté : $\int_a^b uv' = \big[uv\big]_a^b - \int_a^b u'v$.`
      ],
      explain: String.raw`On part de la dérivée d'un produit : $(uv)' = u'v + uv'$. En intégrant entre $a$ et $b$ : $[uv]_a^b = \int_a^b u'v + \int_a^b uv'$. On isole ensuite $\int_a^b uv'$, ce qui donne $\int_a^b uv' = [uv]_a^b - \int_a^b u'v$ : le signe moins vient de ce passage de l'autre côté de l'égalité.`,
      rule: String.raw`$\int_a^b u\,v' = \big[u\,v\big]_a^b - \int_a^b u'\,v$`,
      why: { 1: String.raw`Erreur de signe en isolant $\int uv'$ : le terme $\int u'v$ passe de l'autre côté avec un <b>moins</b>.`, 2: String.raw`On a mis les dérivées au mauvais endroit : le crochet contient $uv$ (les fonctions elles-mêmes) et l'intégrale restante contient $u'v$.`, 3: String.raw`On a cru que l'intégrale d'un produit est le produit des intégrales, ce qui est faux : $\int_0^1 x \cdot x\,\mathrm{d}x = \frac13 \neq \frac12 \times \frac12$.` } },
    { id: 'm6-q-019', level: 2, q: String.raw`Pour calculer $\int x\,\mathrm{e}^x\,\mathrm{d}x$ par parties, on choisit :`,
      topic: 'Choix des facteurs en IPP', sec: 'm6-s-ipp',
      choices: [String.raw`$u = \mathrm{e}^x$ (à dériver) et $v' = x$ (à primitiver)`, String.raw`$u = x$ (à dériver) et $v' = \mathrm{e}^x$ (à primitiver)`, String.raw`un changement de variable $t = \mathrm{e}^x$`], answer: 1,
      steps: [
        String.raw`Rappel : dans $\int u\,v' = uv - \int u'v$, on veut que la nouvelle intégrale $\int u'v$ soit plus simple que celle de départ. On dérive donc ce qui se simplifie (un polynôme) et on primitive ce qui reste stable (exponentielle, sinus, cosinus).`,
        String.raw`Choix $u = x$ ($u' = 1$) et $v' = \mathrm{e}^x$ ($v = \mathrm{e}^x$) : $\int x\mathrm{e}^x\,\mathrm{d}x = x\mathrm{e}^x - \int 1 \cdot \mathrm{e}^x\,\mathrm{d}x$.`,
        String.raw`$= x\mathrm{e}^x - \mathrm{e}^x = (x - 1)\mathrm{e}^x$. Vérification : $\big((x-1)\mathrm{e}^x\big)' = \mathrm{e}^x + (x-1)\mathrm{e}^x = x\mathrm{e}^x$ ✔.`
      ],
      explain: String.raw`En IPP, on dérive le facteur qui se simplifie en dérivant et on primitive celui qui ne se complique pas. Ici $x$ devient $1$ en dérivant, et $\mathrm{e}^x$ reste $\mathrm{e}^x$ en primitivant : avec $u = x$ et $v' = \mathrm{e}^x$, on obtient $\int x\mathrm{e}^x = x\mathrm{e}^x - \int\mathrm{e}^x = (x-1)\mathrm{e}^x$. Le choix inverse ferait apparaître $\frac{x^2}{2}$, plus compliqué.`,
      rule: String.raw`IPP : $u$ = polynôme (à dériver), $v'$ = exponentielle ou trigonométrique (à primitiver)`,
      why: { 0: String.raw`Choix inversé : en primitivant $x$ on obtient $\frac{x^2}{2}$, et la nouvelle intégrale $\int\frac{x^2}{2}\mathrm{e}^x$ est plus compliquée que celle de départ.`, 2: String.raw`Possible ($x = \ln t$) mais inutilement lourd : on n'a pas reconnu le cas type « polynôme × exponentielle » de l'IPP.` } },
    { id: 'm6-q-020', level: 2, q: String.raw`Pour calculer $\int \ln x\,\mathrm{d}x$ par parties, on pose :`,
      topic: 'Primitive du logarithme', sec: 'm6-s-ipp',
      choices: [String.raw`$u = \ln x$, $v' = 1$`, String.raw`$u = 1$, $v' = \ln x$`, String.raw`c'est impossible, $\ln$ n'a pas de primitive`], answer: 0,
      steps: [
        String.raw`Rappel : l'IPP $\int u\,v' = uv - \int u'v$ permet d'intégrer un produit. Astuce : on écrit $\ln x = \ln x \times 1$ et on dérive le $\ln$, qui devient $\frac1x$, plus simple.`,
        String.raw`$u = \ln x$, $u' = \frac{1}{x}$ ; $v' = 1$, $v = x$. Donc $\int\ln x\,\mathrm{d}x = x\ln x - \int x \cdot \frac{1}{x}\,\mathrm{d}x = x\ln x - \int 1\,\mathrm{d}x$.`,
        String.raw`$= x\ln x - x + C$. Vérification : $(x\ln x - x)' = \ln x + x \cdot \frac1x - 1 = \ln x$ ✔.`
      ],
      explain: String.raw`On ne connaît pas directement de primitive de $\ln x$, mais on sait le dériver : on écrit $\ln x = \ln x \times 1$, on pose $u = \ln x$ (à dériver, $u' = \frac{1}{x}$) et $v' = 1$ (à primitiver, $v = x$). L'IPP donne $\int\ln x = x\ln x - \int x \cdot \frac{1}{x} = x\ln x - x + C$. Vérification : $(x\ln x - x)' = \ln x + 1 - 1 = \ln x$.`,
      rule: String.raw`$\int \ln x\,\mathrm{d}x = x\ln x - x + C$ (IPP avec $v' = 1$)`,
      why: { 1: String.raw`On a choisi de primitiver $\ln x$, ce qu'on ne sait justement pas faire : on tourne en rond.`, 2: String.raw`On a cru qu'une fonction sans primitive « dans le tableau » n'en a pas : toute fonction continue sur un intervalle admet des primitives, ici $x\ln x - x$.` } },
    { id: 'm6-q-021', level: 2, q: String.raw`Une primitive de $x\ln x$ sur $]0, +\infty[$ est :`,
      topic: 'Intégration par parties', sec: 'm6-s-ipp',
      choices: [String.raw`$\dfrac{x^2}{2}\ln x - \dfrac{x^2}{4}$`, String.raw`$\dfrac{x^2}{2}\ln x$`, String.raw`$\ln x + 1$`, String.raw`$\dfrac{x^2}{2}(x\ln x - x)$`], answer: 0,
      steps: [
        String.raw`Rappel : pour intégrer un produit par parties, on dérive le facteur qui se simplifie ; $\ln x$ devient $\frac1x$ en dérivant, donc on pose $u = \ln x$ et $v' = x$.`,
        String.raw`$u' = \frac{1}{x}$ et $v = \frac{x^2}{2}$ : $\int x\ln x\,\mathrm{d}x = \frac{x^2}{2}\ln x - \int \frac{x^2}{2}\cdot\frac{1}{x}\,\mathrm{d}x$.`,
        String.raw`$\int\frac{x}{2}\,\mathrm{d}x = \frac{x^2}{4}$, donc une primitive est $\frac{x^2}{2}\ln x - \frac{x^2}{4}$.`,
        String.raw`Vérification en dérivant : $x\ln x + \frac{x^2}{2}\cdot\frac{1}{x} - \frac{x}{2} = x\ln x$ ✔.`
      ],
      explain: String.raw`On fait une IPP en dérivant le logarithme : $u = \ln x$ ($u' = \frac1x$) et $v' = x$ ($v = \frac{x^2}{2}$). On obtient $\frac{x^2}{2}\ln x - \int\frac{x}{2}\,\mathrm{d}x = \frac{x^2}{2}\ln x - \frac{x^2}{4}$. Vérification : la dérivée vaut $x\ln x + \frac{x}{2} - \frac{x}{2} = x\ln x$.`,
      rule: String.raw`$\int u\,v' = uv - \int u'v$ ; avec un $\ln$, on prend $u = \ln x$`,
      why: { 1: String.raw`On a oublié le terme $-\int u'v$ de la formule d'IPP : en dérivant $\frac{x^2}{2}\ln x$ on obtient $x\ln x + \frac{x}{2}$.`, 2: String.raw`On a <b>dérivé</b> $x\ln x$ ($(x\ln x)' = \ln x + 1$) au lieu de le primitiver.`, 3: String.raw`On a multiplié les primitives de chaque facteur : la primitive d'un produit n'est pas le produit des primitives.` } },
    { id: 'm6-q-022', level: 2, q: String.raw`Avec $x = \sin t$, l'intégrale $\displaystyle\int_0^1\sqrt{1-x^2}\,\mathrm{d}x$ devient :`,
      topic: 'Changement de variable', sec: 'm6-s-changement',
      choices: [String.raw`$\displaystyle\int_0^{\pi/2}\cos^2 t\,\mathrm{d}t$`, String.raw`$\displaystyle\int_0^{1}\cos t\,\mathrm{d}t$`, String.raw`$\displaystyle\int_0^{\pi/2}\cos t\,\mathrm{d}t$`, String.raw`$\displaystyle\int_0^{\pi/2}\sin t\cos t\,\mathrm{d}t$`], answer: 0,
      steps: [
        String.raw`Rappel : un changement de variable $x = \varphi(t)$ remplace trois choses : l'expression de la fonction, l'élément $\mathrm{d}x = \varphi'(t)\,\mathrm{d}t$, et les bornes (valeurs de $t$ correspondantes).`,
        String.raw`Fonction : $\sqrt{1 - \sin^2 t} = \sqrt{\cos^2 t} = |\cos t| = \cos t$, car $\cos t \geq 0$ pour $t \in \left[0, \frac{\pi}{2}\right]$.`,
        String.raw`Élément : $\mathrm{d}x = \cos t\,\mathrm{d}t$. Bornes : $x = 0 \Rightarrow t = 0$ et $x = 1 \Rightarrow t = \frac{\pi}{2}$.`,
        String.raw`Résultat : $\int_0^{\pi/2}\cos t \times \cos t\,\mathrm{d}t = \int_0^{\pi/2}\cos^2 t\,\mathrm{d}t$.`
      ],
      explain: String.raw`Un changement de variable modifie trois choses : la fonction, l'élément $\mathrm{d}x$ et les bornes. Avec $x = \sin t$ : $\mathrm{d}x = \cos t\,\mathrm{d}t$ ; $\sqrt{1 - \sin^2 t} = \cos t$ car $\cos t \geq 0$ sur $\left[0, \frac{\pi}{2}\right]$ ; les bornes $0$ et $1$ deviennent $0$ et $\frac{\pi}{2}$. Le produit $\cos t \times \cos t$ donne $\int_0^{\pi/2}\cos^2 t\,\mathrm{d}t$.`,
      rule: String.raw`Changement de variable : remplacer la fonction, $\mathrm{d}x = \varphi'(t)\,\mathrm{d}t$ <b>et</b> les bornes`,
      why: { 1: String.raw`On a seulement remplacé la fonction : les bornes n'ont pas été transformées et le facteur $\cos t$ venant de $\mathrm{d}x$ a été oublié.`, 2: String.raw`On a changé les bornes mais oublié que $\mathrm{d}x = \cos t\,\mathrm{d}t$ apporte un second facteur $\cos t$.`, 3: String.raw`On a mal simplifié la racine : $\sqrt{1 - \sin^2 t} = \cos t$, pas $\sin t$.` } },
    { id: 'm6-q-023', level: 2, q: String.raw`Avec $t = \ln x$, l'intégrale $\displaystyle\int_1^2\frac{\ln x}{x}\,\mathrm{d}x$ devient :`,
      topic: 'Changement de variable', sec: 'm6-s-changement',
      choices: [String.raw`$\displaystyle\int_1^2 t\,\mathrm{d}t$`, String.raw`$\displaystyle\int_0^{\ln 2} t\,\mathrm{d}t$`, String.raw`$\displaystyle\int_0^{\ln 2} t\,\mathrm{e}^{-t}\,\mathrm{d}t$`], answer: 1,
      steps: [
        String.raw`Rappel : dans un changement de variable $t = \varphi(x)$, on exprime tout en $t$ : la fonction, l'élément ($\mathrm{d}t = \varphi'(x)\,\mathrm{d}x$) et les bornes.`,
        String.raw`$t = \ln x$ donne $\mathrm{d}t = \frac{1}{x}\,\mathrm{d}x$ : on écrit $\frac{\ln x}{x}\,\mathrm{d}x = \ln x \cdot \frac{\mathrm{d}x}{x} = t\,\mathrm{d}t$.`,
        String.raw`Bornes : $x = 1 \Rightarrow t = \ln 1 = 0$ et $x = 2 \Rightarrow t = \ln 2$. D'où $\int_0^{\ln 2} t\,\mathrm{d}t = \left[\frac{t^2}{2}\right]_0^{\ln 2} = \frac{(\ln 2)^2}{2}$.`
      ],
      explain: String.raw`Avec $t = \ln x$, on a $\mathrm{d}t = \frac{1}{x}\,\mathrm{d}x$ : le facteur $\frac{\mathrm{d}x}{x}$ de l'intégrale devient exactement $\mathrm{d}t$, et $\ln x$ devient $t$. Les bornes se transforment aussi : $x = 1$ donne $t = \ln 1 = 0$ et $x = 2$ donne $t = \ln 2$. On obtient $\int_0^{\ln 2} t\,\mathrm{d}t = \frac{(\ln 2)^2}{2}$.`,
      rule: String.raw`$t = \ln x$ ⇒ $\mathrm{d}t = \dfrac{\mathrm{d}x}{x}$ ; les bornes deviennent $\ln a$ et $\ln b$`,
      why: { 0: String.raw`On a oublié de transformer les bornes : elles doivent devenir $\ln 1 = 0$ et $\ln 2$.`, 2: String.raw`On a exprimé $x = \mathrm{e}^t$ sans voir que $\frac{\mathrm{d}x}{x}$ est exactement $\mathrm{d}t$ : il ne reste aucun facteur $\mathrm{e}^{-t}$.` } },
    { id: 'm6-q-024', level: 2, q: String.raw`Une primitive de $\dfrac{1}{x^2+4}$ est :`,
      topic: 'Primitive et arctangente', sec: 'm6-s-fractions',
      choices: [String.raw`$\arctan\dfrac{x}{2}$`, String.raw`$\dfrac{1}{2}\arctan\dfrac{x}{2}$`, String.raw`$\dfrac{1}{4}\arctan\dfrac{x}{4}$`, String.raw`$\ln(x^2+4)$`], answer: 1,
      steps: [
        String.raw`Rappel : $\int\frac{\mathrm{d}x}{1+x^2} = \arctan x$. Pour $x^2 + a^2$, on factorise $a^2$ afin de faire apparaître $1 + \left(\frac{x}{a}\right)^2$, ce qui donne la formule $\frac{1}{a}\arctan\frac{x}{a}$.`,
        String.raw`Ici $a^2 = 4$, donc $a = 2$ : $\frac{1}{x^2+4} = \frac14\cdot\frac{1}{1 + (x/2)^2}$.`,
        String.raw`Une primitive est $\frac{1}{2}\arctan\frac{x}{2}$. Vérification : $\frac12 \cdot \frac{1/2}{1 + x^2/4} = \frac{1/4}{(4 + x^2)/4} = \frac{1}{x^2+4}$ ✔.`
      ],
      explain: String.raw`On factorise le 4 pour se ramener à $\frac{1}{1 + u^2}$ : $\frac{1}{x^2+4} = \frac{1}{4}\cdot\frac{1}{1 + (x/2)^2}$. Avec $u = \frac{x}{2}$ et $u' = \frac12$, cela s'écrit $\frac{1}{2}\cdot\frac{u'}{1+u^2}$, de primitive $\frac{1}{2}\arctan\frac{x}{2}$. C'est la formule $\int\frac{\mathrm{d}x}{x^2+a^2} = \frac1a\arctan\frac{x}{a}$ avec $a = 2$.`,
      rule: String.raw`$\int \dfrac{\mathrm{d}x}{x^2+a^2} = \dfrac{1}{a}\arctan\dfrac{x}{a} + C$`,
      why: { 0: String.raw`On a oublié le facteur $\frac{1}{a} = \frac12$ : la dérivée de $\arctan\frac{x}{2}$ vaut $\frac{2}{x^2+4}$, deux fois trop.`, 2: String.raw`On a pris $a = 4$ (la valeur de $a^2$) au lieu de $a = \sqrt{4} = 2$.`, 3: String.raw`On a cru à une forme $\frac{u'}{u}$ : il faudrait $2x$ au numérateur.` } },
    { id: 'm6-q-025', level: 2, q: String.raw`Décomposition de $\dfrac{1}{x(x+1)}$ :`,
      topic: 'Éléments simples', sec: 'm6-s-fractions',
      choices: [String.raw`$\dfrac{1}{x} + \dfrac{1}{x+1}$`, String.raw`$\dfrac{1}{x} - \dfrac{1}{x+1}$`, String.raw`$\dfrac{1}{x+1} - \dfrac{1}{x}$`], answer: 1,
      steps: [
        String.raw`Rappel : décomposer en éléments simples, c'est écrire une fraction rationnelle comme une somme de fractions $\frac{A}{x - a}$, faciles à primitiver. On cherche $\frac{1}{x(x+1)} = \frac{A}{x} + \frac{B}{x+1}$.`,
        String.raw`Calcul de $A$ (méthode « cache ») : on multiplie par $x$ et on pose $x = 0$ : $A = \frac{1}{0 + 1} = 1$.`,
        String.raw`Calcul de $B$ : on multiplie par $x + 1$ et on pose $x = -1$ : $B = \frac{1}{-1} = -1$.`,
        String.raw`Vérification : $\frac{1}{x} - \frac{1}{x+1} = \frac{(x+1) - x}{x(x+1)} = \frac{1}{x(x+1)}$ ✔.`
      ],
      explain: String.raw`On cherche $A$ et $B$ tels que $\frac{1}{x(x+1)} = \frac{A}{x} + \frac{B}{x+1}$. Méthode « cache » : en multipliant par $x$ puis en posant $x = 0$, on trouve $A = 1$ ; en multipliant par $x + 1$ puis en posant $x = -1$, on trouve $B = -1$. Vérification : $\frac{1}{x} - \frac{1}{x+1} = \frac{(x+1) - x}{x(x+1)} = \frac{1}{x(x+1)}$.`,
      rule: String.raw`$\dfrac{1}{(x-a)(x-b)} = \dfrac{A}{x-a} + \dfrac{B}{x-b}$ ; méthode « cache » pour $A$ et $B$`,
      why: { 0: String.raw`On a deviné $A = B = 1$ sans vérifier : en réduisant au même dénominateur, on obtient $\frac{2x+1}{x(x+1)}$.`, 2: String.raw`Erreur de signe sur les deux coefficients ($A = -1$, $B = 1$) : on obtient l'opposé, $\frac{-1}{x(x+1)}$.` } },
    { id: 'm6-q-026', level: 1, q: String.raw`$\displaystyle\int_0^1\frac{\mathrm{d}x}{x+1} = $ ?`,
      topic: "Calcul d'intégrale", sec: 'm6-s-integrale',
      choices: [String.raw`$\dfrac{3}{4}$`, String.raw`$\ln 2$`, String.raw`$\dfrac{1}{2}$`], answer: 1,
      steps: [
        String.raw`Rappel : $\int_a^b f = F(b) - F(a)$ avec $F$ une primitive. Pour $\frac{1}{x + 1}$, le numérateur est la dérivée du dénominateur : forme $\frac{u'}{u}$, de primitive $\ln|u|$.`,
        String.raw`Une primitive est $F(x) = \ln(x+1)$ (pas de valeur absolue : $x + 1 \gt 0$ sur $[0, 1]$).`,
        String.raw`$F(1) - F(0) = \ln 2 - \ln 1 = \ln 2 - 0 = \ln 2 \approx 0{,}69$.`
      ],
      explain: String.raw`On reconnaît une forme $\frac{u'}{u}$ avec $u = x + 1$ et $u' = 1$ : une primitive est $\ln(x+1)$. Alors $\int_0^1\frac{\mathrm{d}x}{x+1} = \ln 2 - \ln 1 = \ln 2 \approx 0{,}69$. C'est cohérent : la fonction varie de $1$ à $\frac12$ sur un intervalle de longueur 1, l'aire est donc entre $\frac12$ et $1$.`,
      rule: String.raw`$\int \dfrac{\mathrm{d}x}{x+a} = \ln|x+a| + C$`,
      why: { 0: String.raw`On a utilisé la dérivée $-\frac{1}{(x+1)^2}$ au lieu d'une primitive : $\left[-\frac{1}{(x+1)^2}\right]_0^1 = -\frac14 + 1 = \frac{3}{4}$.`, 2: String.raw`On a pris $-\frac{1}{x+1}$, primitive de $\frac{1}{(x+1)^2}$ et non de $\frac{1}{x+1}$ : $\left[-\frac{1}{x+1}\right]_0^1 = \frac{1}{2}$.` } },
    { id: 'm6-q-027', level: 1, q: String.raw`Linéarisation : $\cos^2 x = $ ?`,
      topic: 'Linéarisation', sec: 'm6-s-trigo',
      choices: [String.raw`$\dfrac{1 + \cos 2x}{2}$`, String.raw`$\dfrac{1 - \cos 2x}{2}$`, String.raw`$\cos 2x$`, String.raw`$\dfrac{\cos 2x}{2}$`], answer: 0,
      steps: [
        String.raw`Rappel : linéariser, c'est remplacer une puissance de $\cos$ ou de $\sin$ par une somme de $\cos(kx)$ sans puissance, qu'on sait primitiver. On utilise les formules de duplication.`,
        String.raw`Duplication : $\cos 2x = 2\cos^2 x - 1$, donc $2\cos^2 x = 1 + \cos 2x$ et $\cos^2 x = \frac{1 + \cos 2x}{2}$.`,
        String.raw`Test en $x = 0$ : $\cos^2 0 = 1$ et $\frac{1 + \cos 0}{2} = \frac{1 + 1}{2} = 1$ ✔.`
      ],
      explain: String.raw`On part de la formule de duplication $\cos 2x = 2\cos^2 x - 1$, puis on isole $\cos^2 x$ : $\cos^2 x = \frac{1 + \cos 2x}{2}$. Cette forme sans carré est facile à primitiver. Test rapide en $x = 0$ : $\cos^2 0 = 1$ et $\frac{1 + \cos 0}{2} = 1$, les deux côtés coïncident.`,
      rule: String.raw`$\cos^2 x = \dfrac{1 + \cos 2x}{2}$ et $\sin^2 x = \dfrac{1 - \cos 2x}{2}$`,
      why: { 1: String.raw`C'est la formule de $\sin^2 x$ (signe inversé) : en $x = 0$ elle donne $0 \neq \cos^2 0 = 1$.`, 2: String.raw`On a confondu avec la duplication : $\cos 2x = \cos^2 x - \sin^2 x$, pas $\cos^2 x$.`, 3: String.raw`On a oublié le terme constant $\frac12$ : en $x = 0$ on obtiendrait $\frac12 \neq 1$.` } },
    { id: 'm6-q-028', level: 2, q: String.raw`$\displaystyle\int_0^{2\pi}\cos^2 x\,\mathrm{d}x = $ ?`,
      topic: 'Linéarisation', sec: 'm6-s-trigo',
      choices: [String.raw`$0$`, String.raw`$\pi$`, String.raw`$2\pi$`, String.raw`$\dfrac{\pi}{2}$`], answer: 1,
      steps: [
        String.raw`Rappel : pour intégrer $\cos^2 x$, on linéarise d'abord : $\cos^2 x = \frac{1 + \cos 2x}{2} = \frac12 + \frac{\cos 2x}{2}$.`,
        String.raw`Partie constante : $\int_0^{2\pi}\frac12\,\mathrm{d}x = \frac{1}{2} \times 2\pi = \pi$.`,
        String.raw`Partie oscillante : $\int_0^{2\pi}\frac{\cos 2x}{2}\,\mathrm{d}x = \left[\frac{\sin 2x}{4}\right]_0^{2\pi} = 0 - 0 = 0$. Total : $\pi$.`
      ],
      explain: String.raw`On linéarise : $\cos^2 x = \frac{1}{2} + \frac{\cos 2x}{2}$. L'intégrale de la constante $\frac12$ sur $[0, 2\pi]$ vaut $\frac{1}{2} \times 2\pi = \pi$, et celle de $\frac{\cos 2x}{2}$ est nulle car $\left[\frac{\sin 2x}{4}\right]_0^{2\pi} = 0$. Le total vaut $\pi$ : $\cos^2$ vaut $\frac12$ en moyenne sur une longueur $2\pi$.`,
      rule: String.raw`$\int_0^{2\pi}\cos^2 x\,\mathrm{d}x = \int_0^{2\pi}\sin^2 x\,\mathrm{d}x = \pi$`,
      why: { 0: String.raw`On a raisonné comme pour $\cos$ (moyenne nulle) : or $\cos^2 \geq 0$ et n'est pas identiquement nulle, son intégrale est strictement positive.`, 2: String.raw`On a oublié le $\frac12$ de la linéarisation, comme si $\cos^2$ valait $1$ en moyenne.`, 3: String.raw`On a intégré sur $[0, \pi]$ au lieu de $[0, 2\pi]$.` } },
    { id: 'm6-q-029', level: 1, q: String.raw`Valeur efficace de $s(t) = A\cos(\omega t)$ ?`,
      topic: 'Valeur efficace', sec: 'm6-s-applications',
      choices: [String.raw`$\dfrac{A}{2}$`, String.raw`$\dfrac{A}{\sqrt{2}}$`, String.raw`$0$`, String.raw`$\dfrac{2A}{\pi}$`], answer: 1,
      steps: [
        String.raw`Rappel : la valeur efficace (RMS) est la racine carrée de la moyenne du carré du signal sur une période : $S_{\text{eff}} = \sqrt{\langle s^2\rangle}$. C'est la valeur continue qui dissiperait la même puissance.`,
        String.raw`On linéarise le carré : $s^2 = A^2\cos^2(\omega t) = \frac{A^2}{2} + \frac{A^2}{2}\cos(2\omega t)$.`,
        String.raw`Moyenne sur une période : le cosinus a une moyenne nulle, donc $\langle s^2\rangle = \frac{A^2}{2}$.`,
        String.raw`Racine : $S_{\text{eff}} = \sqrt{\frac{A^2}{2}} = \frac{A}{\sqrt 2} \approx 0{,}707\,A$.`
      ],
      explain: String.raw`La valeur efficace est la racine de la moyenne du carré : $S_{\text{eff}} = \sqrt{\langle s^2\rangle}$. Ici $s^2 = A^2\cos^2(\omega t) = A^2\,\frac{1 + \cos(2\omega t)}{2}$, dont la moyenne sur une période vaut $\frac{A^2}{2}$ (le cosinus a une moyenne nulle). On prend la racine : $S_{\text{eff}} = \frac{A}{\sqrt{2}} \approx 0{,}707\,A$.`,
      rule: String.raw`$S_{\text{eff}} = \sqrt{\langle s^2\rangle}$ ; sinusoïde d'amplitude $A$ : $S_{\text{eff}} = \dfrac{A}{\sqrt 2}$`,
      why: { 0: String.raw`On a mal pris la racine : $\sqrt{\frac{A^2}{2}} = \frac{A}{\sqrt2}$, pas $\frac{A}{2}$.`, 2: String.raw`On a calculé la valeur <b>moyenne</b> du signal (nulle pour une sinusoïde), pas la valeur efficace.`, 3: String.raw`$\frac{2A}{\pi}$ est la valeur moyenne de $|s|$ (signal redressé) : on a moyenné $|s|$ au lieu de $s^2$.` } },
    { id: 'm6-q-030', level: 2, q: String.raw`Intégrales de Wallis $W_n = \int_0^{\pi/2}\sin^n x\,\mathrm{d}x$. Que vaut $W_2$ ?`,
      topic: 'Intégrales de Wallis', sec: 'm6-s-trigo',
      choices: [String.raw`$\dfrac{\pi}{2}$`, String.raw`$1$`, String.raw`$\dfrac{\pi}{4}$`, String.raw`$\dfrac{2}{3}$`], answer: 2,
      steps: [
        String.raw`Rappel : $W_n = \int_0^{\pi/2}\sin^n x\,\mathrm{d}x$ ; on connaît $W_0 = \frac{\pi}{2}$ (intégrale de 1) et $W_1 = 1$, et une IPP donne la relation $W_{n+2} = \frac{n+1}{n+2}\,W_n$.`,
        String.raw`Avec $n = 0$ : $W_2 = \frac{0 + 1}{0 + 2}\,W_0 = \frac12 \times \frac{\pi}{2} = \frac{\pi}{4}$.`,
        String.raw`Vérification par linéarisation : $\sin^2 x = \frac{1 - \cos 2x}{2}$, donc $W_2 = \frac{1}{2}\cdot\frac{\pi}{2} - \left[\frac{\sin 2x}{4}\right]_0^{\pi/2} = \frac{\pi}{4} - 0 = \frac{\pi}{4}$ ✔.`
      ],
      explain: String.raw`Les intégrales de Wallis vérifient $W_0 = \frac{\pi}{2}$, $W_1 = 1$ et la relation $W_{n+2} = \frac{n+1}{n+2}\,W_n$, obtenue par intégration par parties. Pour $n = 0$ : $W_2 = \frac{1}{2}W_0 = \frac{\pi}{4}$. On le retrouve par linéarisation de $\sin^2 x = \frac{1 - \cos 2x}{2}$, dont l'intégrale sur $\left[0, \frac{\pi}{2}\right]$ vaut $\frac{\pi}{4}$.`,
      rule: String.raw`$W_{n+2} = \dfrac{n+1}{n+2}\,W_n$, avec $W_0 = \dfrac{\pi}{2}$ et $W_1 = 1$`,
      why: { 0: String.raw`C'est $W_0 = \int_0^{\pi/2} 1\,\mathrm{d}x$ : on a oublié le facteur $\frac{1}{2}$ de la relation de récurrence.`, 1: String.raw`C'est $W_1 = \int_0^{\pi/2}\sin x\,\mathrm{d}x$ : on s'est trompé d'indice.`, 3: String.raw`C'est $W_3 = \frac{2}{3}W_1$ : on a appliqué la récurrence à partir de $W_1$ au lieu de $W_0$.` } },
    { id: 'm6-q-031', level: 2, q: String.raw`Aire du domaine compris entre $y = x$ et $y = x^2$ pour $x \in [0, 1]$ ?`,
      topic: 'Aire entre deux courbes', sec: 'm6-s-applications',
      choices: [String.raw`$\dfrac{1}{6}$`, String.raw`$\dfrac{5}{6}$`, String.raw`$-\dfrac{1}{6}$`, String.raw`$\dfrac{1}{2}$`], answer: 0,
      steps: [
        String.raw`Rappel : l'aire du domaine compris entre deux courbes est l'intégrale de l'écart vertical, (courbe du haut) − (courbe du bas), qui est positif.`,
        String.raw`Sur $[0, 1]$, $x - x^2 = x(1 - x) \geq 0$ : la droite $y = x$ est au-dessus de la parabole.`,
        String.raw`$\mathcal{A} = \int_0^1 (x - x^2)\,\mathrm{d}x = \left[\frac{x^2}{2} - \frac{x^3}{3}\right]_0^1 = \frac12 - \frac13 = \frac{1}{6}$.`
      ],
      explain: String.raw`L'aire entre deux courbes s'obtient en intégrant (courbe du haut − courbe du bas). Sur $[0, 1]$, $x \geq x^2$ (par exemple $0{,}5 \geq 0{,}25$), donc $\mathcal{A} = \int_0^1 (x - x^2)\,\mathrm{d}x = \left[\frac{x^2}{2} - \frac{x^3}{3}\right]_0^1 = \frac{1}{2} - \frac{1}{3} = \frac{1}{6}$.`,
      rule: String.raw`$\mathcal{A} = \displaystyle\int_a^b \big(f(x) - g(x)\big)\,\mathrm{d}x$ si $f \geq g$ sur $[a, b]$`,
      why: { 1: String.raw`On a additionné les deux aires sous les courbes ($\frac12 + \frac13$) au lieu de faire leur différence.`, 2: String.raw`On a intégré (bas − haut), soit $x^2 - x$ : une aire est toujours positive.`, 3: String.raw`On n'a calculé que l'aire sous $y = x$, sans retirer celle sous $y = x^2$.` } },
    { id: 'm6-q-032', level: 1, q: String.raw`Une primitive de $\dfrac{1}{\sqrt{x}}$ sur $]0, +\infty[$ est :`,
      topic: 'Primitive des puissances', sec: 'm6-s-usuelles',
      choices: [String.raw`$\dfrac{1}{2\sqrt{x}}$`, String.raw`$2\sqrt{x}$`, String.raw`$\sqrt{x}$`, String.raw`$-\dfrac{1}{2x\sqrt{x}}$`], answer: 1,
      steps: [
        String.raw`Rappel : une racine s'écrit comme une puissance, $\frac{1}{\sqrt x} = x^{-1/2}$, et $\int x^\alpha\,\mathrm{d}x = \frac{x^{\alpha+1}}{\alpha+1}$ pour tout $\alpha \neq -1$.`,
        String.raw`Avec $\alpha = -\frac12$ : $\alpha + 1 = \frac{1}{2}$, donc une primitive est $\frac{x^{1/2}}{1/2} = 2x^{1/2} = 2\sqrt{x}$.`,
        String.raw`Vérification en dérivant : $(2\sqrt x)' = 2 \times \frac{1}{2\sqrt x} = \frac{1}{\sqrt x}$ ✔.`
      ],
      explain: String.raw`On écrit $\frac{1}{\sqrt{x}} = x^{-1/2}$ et on applique $\int x^\alpha = \frac{x^{\alpha+1}}{\alpha+1}$ avec $\alpha = -\frac12$ : $\frac{x^{1/2}}{1/2} = 2\sqrt{x}$. Vérification : $(2\sqrt{x})' = 2 \times \frac{1}{2\sqrt{x}} = \frac{1}{\sqrt{x}}$. On peut aussi le retrouver en lisant à l'envers $(\sqrt x)' = \frac{1}{2\sqrt x}$.`,
      rule: String.raw`$\int \dfrac{\mathrm{d}x}{\sqrt{x}} = 2\sqrt{x} + C$`,
      why: { 0: String.raw`On a écrit la dérivée de $\sqrt{x}$, $\frac{1}{2\sqrt x}$ : ce n'est pas une primitive de $\frac{1}{\sqrt x}$ (sa dérivée vaut $-\frac{1}{4x\sqrt x}$).`, 2: String.raw`On a lu le tableau à l'envers sans ajuster le facteur : $(\sqrt{x})' = \frac{1}{2\sqrt{x}}$, il manque un facteur 2.`, 3: String.raw`On a <b>dérivé</b> $x^{-1/2}$ au lieu de le primitiver : $-\frac12 x^{-3/2} = -\frac{1}{2x\sqrt x}$.` } },
    { id: 'm6-q-033', level: 3, q: String.raw`$f$ est continue et positive sur $[a, b]$ ($a \lt b$) avec $\displaystyle\int_a^b f = 0$. Alors :`,
      topic: "Positivité de l'intégrale", sec: 'm6-s-integrale',
      choices: [String.raw`$f$ est nulle sur $[a, b]$`, String.raw`$f$ s'annule au moins une fois, mais pas forcément partout`, String.raw`on ne peut rien conclure`], answer: 0,
      steps: [
        String.raw`Rappel : l'intégrale d'une fonction positive est une aire, donc $\geq 0$. La question est de savoir si une aire nulle force la fonction à être nulle partout.`,
        String.raw`Par l'absurde : supposons $f(x_0) \gt 0$. Par continuité, $f \geq \frac{f(x_0)}{2}$ sur un petit intervalle de longueur $\delta \gt 0$ autour de $x_0$.`,
        String.raw`Comme $f \geq 0$ ailleurs, $\int_a^b f \geq \frac{f(x_0)}{2} \times \delta \gt 0$ : contradiction avec $\int_a^b f = 0$.`,
        String.raw`Conclusion : $f(x) = 0$ pour tout $x \in [a, b]$.`
      ],
      explain: String.raw`Raisonnons par l'absurde : si $f(x_0) \gt 0$ en un point, la continuité garantit $f \geq \frac{f(x_0)}{2}$ sur un petit intervalle de longueur $\delta \gt 0$. Comme $f \geq 0$ partout, on aurait $\int_a^b f \geq \frac{f(x_0)}{2}\,\delta \gt 0$, ce qui contredit $\int_a^b f = 0$. Donc $f$ est nulle sur tout $[a, b]$.`,
      rule: String.raw`$f$ continue, $f \geq 0$ et $\int_a^b f = 0$ ($a \lt b$) ⇒ $f = 0$ sur $[a, b]$`,
      why: { 1: String.raw`On a oublié le rôle de la continuité : une seule valeur strictement positive crée une petite « bosse » d'aire strictement positive.`, 2: String.raw`On a cru l'hypothèse trop faible : c'est un théorème classique, valable dès que $f$ est continue et positive.` } },
    { id: 'm6-q-034', level: 2, q: String.raw`Valeur efficace d'un signal carré qui vaut alternativement $+A$ et $-A$ ?`,
      topic: 'Valeur efficace', sec: 'm6-s-applications',
      choices: [String.raw`$\dfrac{A}{\sqrt{2}}$`, String.raw`$A$`, String.raw`$0$`, String.raw`$\dfrac{A}{2}$`], answer: 1,
      steps: [
        String.raw`Rappel : la valeur efficace est la racine de la moyenne du carré du signal : $S_{\text{eff}} = \sqrt{\langle s^2\rangle}$.`,
        String.raw`Le signal vaut $+A$ ou $-A$, donc $s^2 = A^2$ à chaque instant, et $\langle s^2\rangle = A^2$.`,
        String.raw`$S_{\text{eff}} = \sqrt{A^2} = A$ (amplitude positive).`
      ],
      explain: String.raw`La valeur efficace est $\sqrt{\langle s^2\rangle}$. Pour un signal carré qui vaut $+A$ ou $-A$, le carré vaut toujours $(\pm A)^2 = A^2$ : sa moyenne est donc $A^2$, et $S_{\text{eff}} = \sqrt{A^2} = A$. Le facteur $\frac{1}{\sqrt 2}$ est propre aux sinusoïdes et ne s'applique pas à n'importe quel signal.`,
      rule: String.raw`$S_{\text{eff}} = \sqrt{\langle s^2\rangle}$ ; carré $\pm A$ : $S_{\text{eff}} = A$`,
      why: { 0: String.raw`On a appliqué la formule des sinusoïdes $\frac{A}{\sqrt2}$, qui vient de $\langle\cos^2\rangle = \frac12$ ; ici $s^2$ est constant.`, 2: String.raw`On a calculé la valeur <b>moyenne</b> (nulle, les deux paliers se compensent) au lieu de la valeur efficace.`, 3: String.raw`On a introduit un facteur $\frac{1}{2}$ qui n'existe pas : $s^2 = A^2$ en permanence, sa moyenne est $A^2$.` } }
  ],

  /* =====================================================================
   *  EXERCICES « tape la formule »
   * ===================================================================== */
  exercises: [
    { id: 'm6-x-001', level: 1, check: 'antideriv', vars: ['x'],
      topic: "Primitive d'un polynôme", sec: 'm6-s-usuelles',
      prompt: String.raw`Donne une primitive de $f(x) = 3x^2 - 4x + 5$.`,
      answer: 'x^3 - 2*x^2 + 5*x',
      steps: [
        String.raw`Rappel : une primitive de $f$ est une fonction $F$ telle que $F' = f$. On primitive une somme terme à terme, les coefficients restent en facteur, avec $\int x^n\,\mathrm{d}x = \frac{x^{n+1}}{n+1}$.`,
        String.raw`$\int 3x^2\,\mathrm{d}x = 3 \times \frac{x^3}{3} = x^3$ et $\int -4x\,\mathrm{d}x = -4 \times \frac{x^2}{2} = -2x^2$.`,
        String.raw`$\int 5\,\mathrm{d}x = 5x$ (une constante se primitive en constante × $x$). Donc $F(x) = x^3 - 2x^2 + 5x$ (+ $C$).`,
        String.raw`Vérification en dérivant : $F'(x) = 3x^2 - 4x + 5 = f(x)$ ✔.`
      ],
      rule: String.raw`$\int x^n\,\mathrm{d}x = \dfrac{x^{n+1}}{n+1} + C$ ; $\int (au + bv) = a\int u + b\int v$`,
      pitfall: String.raw`Dériver au lieu de primitiver, ou oublier de diviser par le nouvel exposant.`,
      mistakes: [
        { expr: '6*x - 4', msg: String.raw`Tu as <b>dérivé</b> $f$ au lieu de la primitiver. Une primitive $F$ doit vérifier $F' = f$ : les exposants augmentent, ils ne diminuent pas.` },
        { expr: '3*x^3 - 4*x^2 + 5*x', msg: String.raw`Tu as augmenté les exposants sans diviser : $\int x^n = \frac{x^{n+1}}{n+1}$. En dérivant ta réponse, tu obtiendrais $9x^2 - 8x + 5$.` },
        { expr: 'x^3 - 2*x^2 + 5', msg: String.raw`Une constante se primitive en $5x$ (dont la dérivée est $5$), pas en $5$ (dont la dérivée est nulle).` }
      ],
      hint: String.raw`$\int x^n\,\mathrm{d}x = \dfrac{x^{n+1}}{n+1}$, terme à terme.`,
      explain: String.raw`Terme à terme avec $\int x^n = \frac{x^{n+1}}{n+1}$ : $F(x) = x^3 - 2x^2 + 5x$ (+ $C$), et en dérivant on retrouve bien $f$.` },
    { id: 'm6-x-002', level: 1, check: 'antideriv', vars: ['x'], domain: [0.3, 4],
      topic: 'Primitive des puissances', sec: 'm6-s-usuelles',
      prompt: String.raw`Donne une primitive de $f(x) = \sqrt{x}$ sur $]0, +\infty[$.`,
      answer: '(2/3)*x^(3/2)',
      steps: [
        String.raw`Rappel : une primitive $F$ de $f$ vérifie $F' = f$. On écrit la racine comme une puissance, $\sqrt{x} = x^{1/2}$, pour utiliser $\int x^\alpha\,\mathrm{d}x = \frac{x^{\alpha+1}}{\alpha+1}$ ($\alpha \neq -1$).`,
        String.raw`Avec $\alpha = \frac12$ : $\alpha + 1 = \frac32$, donc $F(x) = \dfrac{x^{3/2}}{3/2}$.`,
        String.raw`Diviser par $\frac32$, c'est multiplier par $\frac23$ : $F(x) = \frac{2}{3}x^{3/2} = \frac23 x\sqrt{x}$.`,
        String.raw`Vérification en dérivant : $F'(x) = \frac23 \times \frac32\,x^{1/2} = \sqrt{x}$ ✔.`
      ],
      rule: String.raw`$\int x^\alpha\,\mathrm{d}x = \dfrac{x^{\alpha+1}}{\alpha+1} + C$ ($\alpha \neq -1$)`,
      pitfall: String.raw`Diviser par $\frac32$ revient à multiplier par $\frac23$, et non par $\frac32$.`,
      mistakes: [
        { expr: '1/(2*sqrt(x))', msg: String.raw`Tu as <b>dérivé</b> $\sqrt{x}$ au lieu de la primitiver : pour primitiver, l'exposant augmente ($\frac12 \to \frac32$).` },
        { expr: 'x^(3/2)', msg: String.raw`Il faut diviser par le nouvel exposant $\frac{3}{2}$, c'est-à-dire multiplier par $\frac{2}{3}$ : la dérivée de $x^{3/2}$ vaut $\frac32\sqrt{x}$, trop grand.` },
        { expr: '(3/2)*x^(3/2)', msg: String.raw`Diviser par $\frac32$, c'est multiplier par l'inverse $\frac{2}{3}$, pas par $\frac32$.` }
      ],
      hint: String.raw`$\sqrt{x} = x^{1/2}$, puis $\int x^\alpha = \dfrac{x^{\alpha+1}}{\alpha+1}$.`,
      explain: String.raw`$\sqrt{x} = x^{1/2}$, donc $F(x) = \dfrac{x^{3/2}}{3/2} = \dfrac{2}{3}x^{3/2}$ ; en dérivant on retrouve $\sqrt x$.` },
    { id: 'm6-x-003', level: 1, check: 'value', vars: [],
      topic: "Calcul d'intégrale", sec: 'm6-s-integrale',
      prompt: String.raw`Calcule la valeur exacte de $\displaystyle\int_0^1 x^2\,\mathrm{d}x$.`,
      answer: '1/3',
      steps: [
        String.raw`Rappel : $\int_a^b f(x)\,\mathrm{d}x = F(b) - F(a)$, où $F$ est une primitive de $f$ ; pour $f \geq 0$, c'est l'aire sous la courbe entre $a$ et $b$.`,
        String.raw`Primitive de $x^2$ : $F(x) = \frac{x^3}{3}$ (vérification : $F'(x) = x^2$ ✔).`,
        String.raw`$F(1) - F(0) = \frac{1^3}{3} - \frac{0^3}{3} = \frac13 - 0 = \frac{1}{3}$.`,
        String.raw`Ordre de grandeur : l'aire sous la parabole est inférieure à celle sous la droite $y = x$, qui vaut $\frac12$ ✔.`
      ],
      rule: String.raw`$\int_a^b f = \big[F\big]_a^b = F(b) - F(a)$`,
      pitfall: String.raw`Utiliser la dérivée $2x$ au lieu d'une primitive.`,
      mistakes: [
        { expr: '2', msg: String.raw`Tu as utilisé la dérivée $2x$ : $[2x]_0^1 = 2$. Il faut une <b>primitive</b> de $x^2$, c'est-à-dire $\frac{x^3}{3}$.` },
        { expr: '1', msg: String.raw`Tu as oublié de diviser par le nouvel exposant : la primitive de $x^2$ est $\frac{x^3}{3}$, pas $x^3$.` },
        { expr: '1/2', msg: String.raw`Tu as intégré $x$ au lieu de $x^2$ : $\int_0^1 x\,\mathrm{d}x = \frac12$.` }
      ],
      hint: String.raw`Une primitive de $x^2$ est $\dfrac{x^3}{3}$.`,
      explain: String.raw`Avec la primitive $\frac{x^3}{3}$ : $\displaystyle\int_0^1 x^2\,\mathrm{d}x = \frac{1}{3} - 0 = \frac{1}{3}$.` },
    { id: 'm6-x-004', level: 1, check: 'antideriv', vars: ['x'],
      topic: 'Primitives trigonométriques', sec: 'm6-s-usuelles',
      prompt: String.raw`Donne une primitive de $f(x) = \sin x + 2\cos x$.`,
      answer: '-cos(x) + 2*sin(x)',
      steps: [
        String.raw`Rappel : on primitive terme à terme ; il faut connaître $\int\sin x = -\cos x$ et $\int\cos x = \sin x$ (lecture à l'envers de $(\cos x)' = -\sin x$ et $(\sin x)' = \cos x$).`,
        String.raw`$\int\sin x\,\mathrm{d}x = -\cos x$ : le signe moins compense celui de $(\cos x)' = -\sin x$.`,
        String.raw`$\int 2\cos x\,\mathrm{d}x = 2\sin x$. Donc $F(x) = -\cos x + 2\sin x$.`,
        String.raw`Vérification en dérivant : $F'(x) = \sin x + 2\cos x = f(x)$ ✔.`
      ],
      rule: String.raw`$\int\sin x\,\mathrm{d}x = -\cos x + C$ et $\int\cos x\,\mathrm{d}x = \sin x + C$`,
      pitfall: String.raw`Le signe : la primitive de $\sin$ est $-\cos$, celle de $\cos$ est $+\sin$.`,
      mistakes: [
        { expr: 'cos(x) + 2*sin(x)', msg: String.raw`Erreur de signe : la dérivée de $\cos x$ est $-\sin x$, donc une primitive de $\sin x$ est $-\cos x$.` },
        { expr: '-cos(x) - 2*sin(x)', msg: String.raw`Erreur de signe : $(\sin x)' = \cos x$, donc une primitive de $\cos x$ est $+\sin x$, sans signe moins.` },
        { expr: 'cos(x) - 2*sin(x)', msg: String.raw`Tu as <b>dérivé</b> $f$ au lieu de la primitiver : $(\sin x + 2\cos x)' = \cos x - 2\sin x$.` }
      ],
      hint: String.raw`$\int\sin x = -\cos x$ et $\int\cos x = \sin x$.`,
      explain: String.raw`Avec $\int\sin = -\cos$ et $\int\cos = \sin$ : $F(x) = -\cos x + 2\sin x$, et $F'(x) = \sin x + 2\cos x$ ✔.` },
    { id: 'm6-x-005', level: 1, check: 'antideriv', vars: ['x'],
      topic: 'Primitive de cos(ax)', sec: 'm6-s-usuelles',
      prompt: String.raw`Donne une primitive de $f(x) = \cos(3x)$.`,
      answer: 'sin(3*x)/3',
      steps: [
        String.raw`Rappel : en dérivant $\sin(ax)$, il sort un facteur $a$ : $(\sin(ax))' = a\cos(ax)$. Pour primitiver $\cos(ax)$, il faut donc compenser en divisant par $a$.`,
        String.raw`Ici $a = 3$ : $(\sin(3x))' = 3\cos(3x)$, trois fois trop.`,
        String.raw`On divise par 3 : $F(x) = \dfrac{\sin(3x)}{3}$.`,
        String.raw`Vérification en dérivant : $F'(x) = \frac{1}{3} \times 3\cos(3x) = \cos(3x)$ ✔.`
      ],
      rule: String.raw`$\int\cos(ax)\,\mathrm{d}x = \dfrac{\sin(ax)}{a} + C$ et $\int\sin(ax)\,\mathrm{d}x = -\dfrac{\cos(ax)}{a} + C$`,
      pitfall: String.raw`Multiplier par $a$ (réflexe de la dérivation) au lieu de diviser.`,
      mistakes: [
        { expr: '3*sin(3*x)', msg: String.raw`Tu as multiplié par $a = 3$ (réflexe de dérivation) : pour primitiver, on <b>divise</b> par $a$. En effet $(3\sin 3x)' = 9\cos 3x$.` },
        { expr: 'sin(3*x)', msg: String.raw`Il manque le facteur $\frac{1}{3}$ : en dérivant $\sin(3x)$ on obtient $3\cos(3x)$, trois fois trop.` },
        { expr: '-sin(3*x)/3', msg: String.raw`Erreur de signe : une primitive de $\cos$ est $+\sin$ (c'est la primitive de $\sin$ qui porte un moins).` }
      ],
      hint: String.raw`$\int\cos(ax)\,\mathrm{d}x = \dfrac{\sin(ax)}{a}$.`,
      explain: String.raw`$(\sin 3x)' = 3\cos 3x$, donc on divise par 3 : $F(x) = \dfrac{\sin(3x)}{3}$.` },
    { id: 'm6-x-006', level: 1, check: 'value', vars: [],
      topic: "Calcul d'intégrale", sec: 'm6-s-integrale',
      prompt: String.raw`Calcule $\displaystyle\int_0^{\pi}\sin x\,\mathrm{d}x$.`,
      answer: '2',
      steps: [
        String.raw`Rappel : $\int_a^b f = F(b) - F(a)$ avec $F$ une primitive de $f$ ; comme $\sin \geq 0$ sur $[0, \pi]$, le résultat est l'aire d'une arche de sinusoïde.`,
        String.raw`Primitive de $\sin x$ : $F(x) = -\cos x$ (car $(-\cos x)' = \sin x$).`,
        String.raw`$F(\pi) = -\cos\pi = -(-1) = 1$ et $F(0) = -\cos 0 = -1$.`,
        String.raw`$\int_0^\pi\sin x\,\mathrm{d}x = F(\pi) - F(0) = 1 - (-1) = 2$, positif comme attendu ✔.`
      ],
      rule: String.raw`$\int_a^b \sin x\,\mathrm{d}x = \big[-\cos x\big]_a^b$`,
      pitfall: String.raw`Les deux signes moins : $-\cos\pi = +1$ et $-(-\cos 0) = +1$.`,
      mistakes: [
        { expr: '-2', msg: String.raw`Erreur de signe : tu as pris $\cos x$ comme primitive. C'est $-\cos x$, et $-\cos\pi + \cos 0 = 1 + 1 = 2$ (une aire au-dessus de l'axe est positive).` },
        { expr: '0', msg: String.raw`Tu as évalué $\sin$ aux bornes ($\sin\pi - \sin 0 = 0$) au lieu d'une primitive, $-\cos$.` },
        { expr: '1', msg: String.raw`Tu as oublié de soustraire $F(0) = -\cos 0 = -1$ : $1 - (-1) = 2$.` }
      ],
      hint: String.raw`Une primitive de $\sin$ est $-\cos$.`,
      explain: String.raw`Avec la primitive $-\cos x$ : $\Big[-\cos x\Big]_0^{\pi} = 1 + 1 = 2$, l'aire d'une arche de sinusoïde.` },
    { id: 'm6-x-007', level: 1, check: 'antideriv', vars: ['x'],
      topic: 'Primitive de exp(ax)', sec: 'm6-s-usuelles',
      prompt: String.raw`Donne une primitive de $f(x) = \mathrm{e}^{-2x}$.`,
      answer: '-exp(-2*x)/2',
      steps: [
        String.raw`Rappel : en dérivant $\mathrm{e}^{ax}$ il sort un facteur $a$ ; pour primitiver, on divise donc par $a$ : $\int\mathrm{e}^{ax}\,\mathrm{d}x = \frac{1}{a}\mathrm{e}^{ax}$.`,
        String.raw`Ici $a = -2$, donc $\frac{1}{a} = -\frac{1}{2}$.`,
        String.raw`Une primitive est $F(x) = -\frac{1}{2}\mathrm{e}^{-2x}$.`,
        String.raw`Vérification en dérivant : $F'(x) = -\frac12 \times (-2)\,\mathrm{e}^{-2x} = \mathrm{e}^{-2x}$ ✔.`
      ],
      rule: String.raw`$\int\mathrm{e}^{ax}\,\mathrm{d}x = \dfrac{1}{a}\,\mathrm{e}^{ax} + C$`,
      pitfall: String.raw`Oublier que $a = -2$ est négatif : le facteur $\frac1a$ porte un signe moins.`,
      mistakes: [
        { expr: 'exp(-2*x)/2', msg: String.raw`Erreur de signe : on divise par $a = -2$, donc le facteur est $-\frac{1}{2}$. Vérifie : $\left(\frac12\mathrm{e}^{-2x}\right)' = -\mathrm{e}^{-2x}$.` },
        { expr: '-2*exp(-2*x)', msg: String.raw`Tu as <b>dérivé</b> $\mathrm{e}^{-2x}$ : pour primitiver, on divise par $-2$ au lieu de multiplier.` },
        { expr: 'exp(-2*x)', msg: String.raw`Il manque le facteur $\frac{1}{a} = -\frac{1}{2}$ : la dérivée de $\mathrm{e}^{-2x}$ vaut $-2\mathrm{e}^{-2x}$.` }
      ],
      hint: String.raw`$\int\mathrm{e}^{ax}\,\mathrm{d}x = \dfrac{1}{a}\mathrm{e}^{ax}$ avec $a = -2$.`,
      explain: String.raw`On divise par $a = -2$ : $F(x) = -\dfrac{1}{2}\mathrm{e}^{-2x}$, et $F'(x) = \mathrm{e}^{-2x}$ ✔.` },
    { id: 'm6-x-008', level: 1, check: 'value', vars: [],
      topic: "Calcul d'intégrale", sec: 'm6-s-integrale',
      prompt: String.raw`Calcule la valeur exacte de $\displaystyle\int_0^1\mathrm{e}^x\,\mathrm{d}x$.`,
      answer: 'e - 1',
      steps: [
        String.raw`Rappel : $\int_a^b f = F(b) - F(a)$ avec $F$ une primitive de $f$. L'exponentielle est sa propre primitive : $F(x) = \mathrm{e}^x$.`,
        String.raw`$F(1) = \mathrm{e}^1 = \mathrm{e}$ et $F(0) = \mathrm{e}^0 = 1$.`,
        String.raw`$\int_0^1\mathrm{e}^x\,\mathrm{d}x = \mathrm{e} - 1 \approx 1{,}718$.`,
        String.raw`Ordre de grandeur : $\mathrm{e}^x$ varie de $1$ à $\mathrm{e} \approx 2{,}72$ sur un intervalle de longueur 1, l'aire est donc entre $1$ et $2{,}72$ ✔.`
      ],
      rule: String.raw`$\int_a^b \mathrm{e}^x\,\mathrm{d}x = \mathrm{e}^b - \mathrm{e}^a$`,
      pitfall: String.raw`Croire que $F(0) = \mathrm{e}^0 = 0$ : en fait $\mathrm{e}^0 = 1$.`,
      mistakes: [
        { expr: 'e', msg: String.raw`Tu as oublié de soustraire $F(0)$, ou cru que $\mathrm{e}^0 = 0$ : en fait $\mathrm{e}^0 = 1$, donc le résultat est $\mathrm{e} - 1$.` },
        { expr: 'e + 1', msg: String.raw`On calcule $F(1) - F(0) = \mathrm{e} - 1$ : on soustrait la valeur en la borne du bas, on ne l'ajoute pas.` }
      ],
      hint: String.raw`$\Big[\mathrm{e}^x\Big]_0^1 = \mathrm{e}^1 - \mathrm{e}^0$.`,
      explain: String.raw`L'exponentielle est sa propre primitive : $\displaystyle\int_0^1\mathrm{e}^x\,\mathrm{d}x = \mathrm{e}^1 - \mathrm{e}^0 = \mathrm{e} - 1 \approx 1{,}718$.` },
    { id: 'm6-x-009', level: 1, check: 'value', vars: [],
      topic: 'Intégrale et logarithme', sec: 'm6-s-integrale',
      prompt: String.raw`Calcule la valeur exacte de $\displaystyle\int_1^2\frac{\mathrm{d}x}{x}$.`,
      answer: 'ln(2)',
      steps: [
        String.raw`Rappel : $\int_a^b f = F(b) - F(a)$. La règle des puissances échoue pour $\frac{1}{x} = x^{-1}$ (division par 0) : une primitive de $\frac1x$ sur $]0, +\infty[$ est $\ln x$.`,
        String.raw`$F(2) = \ln 2$ et $F(1) = \ln 1 = 0$.`,
        String.raw`$\int_1^2\frac{\mathrm{d}x}{x} = \ln 2 - 0 = \ln 2 \approx 0{,}69$.`,
        String.raw`Ordre de grandeur : $\frac1x$ varie de $1$ à $\frac12$ sur $[1, 2]$, l'aire est donc entre $\frac12$ et $1$ ✔.`
      ],
      rule: String.raw`$\int \dfrac{\mathrm{d}x}{x} = \ln|x| + C$`,
      pitfall: String.raw`Appliquer $\frac{x^{n+1}}{n+1}$ avec $n = -1$, ou confondre $\frac1x$ et $\frac{1}{x^2}$.`,
      mistakes: [
        { expr: '1/2', msg: String.raw`Tu as utilisé $-\frac{1}{x}$, qui est une primitive de $\frac{1}{x^2}$ : $\left[-\frac1x\right]_1^2 = -\frac12 + 1 = \frac12$. Une primitive de $\frac{1}{x}$ est $\ln x$.` },
        { expr: '3/4', msg: String.raw`Tu as utilisé la dérivée $-\frac{1}{x^2}$ au lieu d'une primitive : $\left[-\frac{1}{x^2}\right]_1^2 = -\frac14 + 1 = \frac34$.` }
      ],
      hint: String.raw`Une primitive de $\dfrac{1}{x}$ sur $]0, +\infty[$ est $\ln x$.`,
      explain: String.raw`Une primitive de $\frac1x$ est $\ln x$, donc $\int_1^2\frac{\mathrm{d}x}{x} = \ln 2 - \ln 1 = \ln 2$.` },
    { id: 'm6-x-010', level: 2, check: 'antideriv', vars: ['x'],
      topic: "Forme u'u^n", sec: 'm6-s-usuelles',
      prompt: String.raw`Donne une primitive de $f(x) = (2x+1)^3$.`,
      answer: '(2*x+1)^4/8',
      steps: [
        String.raw`Rappel : comme $(u^{n+1})' = (n+1)\,u'\,u^n$, une primitive de $u'\,u^n$ est $\frac{u^{n+1}}{n+1}$. Il faut donc faire apparaître $u'$ devant $u^n$.`,
        String.raw`Avec $u = 2x + 1$ : $u' = 2$. On écrit $(2x+1)^3 = \frac{1}{2} \times 2(2x+1)^3 = \frac12\,u'\,u^3$.`,
        String.raw`Une primitive de $u'u^3$ est $\frac{u^4}{4}$, donc $F(x) = \frac12 \times \frac{(2x+1)^4}{4} = \frac{(2x+1)^4}{8}$.`,
        String.raw`Vérification en dérivant : $F'(x) = \frac{4 \times 2\,(2x+1)^3}{8} = (2x+1)^3$ ✔.`
      ],
      rule: String.raw`$\int u'\,u^n = \dfrac{u^{n+1}}{n+1} + C$ ($n \neq -1$)`,
      pitfall: String.raw`Oublier le facteur $\frac{1}{u'} = \frac12$ (ou développer inutilement la puissance).`,
      mistakes: [
        { expr: '(2*x+1)^4/4', msg: String.raw`Il manque le facteur $\frac{1}{2}$ : en dérivant $\frac{(2x+1)^4}{4}$ on obtient $2(2x+1)^3$, à cause de $u' = 2$.` },
        { expr: '6*(2*x+1)^2', msg: String.raw`Tu as <b>dérivé</b> au lieu de primitiver : l'exposant doit augmenter, pas diminuer.` },
        { expr: '(2*x+1)^4/2', msg: String.raw`Tu as divisé par $u' = 2$ mais pas par le nouvel exposant $4$ : il faut diviser par $2 \times 4 = 8$.` }
      ],
      hint: String.raw`$\int f(ax+b) = \dfrac{1}{a}F(ax+b)$, ou forme $u'u^3$ avec $u' = 2$.`,
      explain: String.raw`$(2x+1)^3 = \frac12\,u'u^3$ avec $u = 2x + 1$, d'où $F(x) = \dfrac{(2x+1)^4}{8}$ ; en dérivant on retrouve $(2x+1)^3$.` },
    { id: 'm6-x-011', level: 2, check: 'antideriv', vars: ['x'], domain: [0, 3],
      topic: "Forme u'/u", sec: 'm6-s-usuelles',
      prompt: String.raw`Donne une primitive de $f(x) = \dfrac{1}{2x+1}$ sur $\left]-\frac{1}{2}, +\infty\right[$.`,
      answer: 'ln(2*x+1)/2',
      steps: [
        String.raw`Rappel : une primitive de $\frac{u'}{u}$ est $\ln|u|$ (car $(\ln|u|)' = \frac{u'}{u}$). Il faut donc que le numérateur soit la dérivée du dénominateur.`,
        String.raw`Avec $u = 2x + 1$ : $u' = 2$, alors que le numérateur vaut $1$. On écrit $\frac{1}{2x+1} = \frac12 \cdot \frac{2}{2x+1} = \frac12\cdot\frac{u'}{u}$.`,
        String.raw`Sur $\left]-\frac12, +\infty\right[$, $2x + 1 \gt 0$ : $F(x) = \frac{1}{2}\ln(2x+1)$.`,
        String.raw`Vérification en dérivant : $F'(x) = \frac12 \times \frac{2}{2x+1} = \frac{1}{2x+1}$ ✔.`
      ],
      rule: String.raw`$\int \dfrac{u'}{u} = \ln|u| + C$ ; $\int\dfrac{\mathrm{d}x}{ax+b} = \dfrac{1}{a}\ln|ax+b| + C$`,
      pitfall: String.raw`Oublier le facteur $\frac{1}{2}$ qui compense $u' = 2$.`,
      mistakes: [
        { expr: 'ln(2*x+1)', msg: String.raw`Il manque le $\frac{1}{2}$ : $(\ln(2x+1))' = \frac{2}{2x+1}$, deux fois trop, à cause de $u' = 2$.` },
        { expr: '-2/(2*x+1)^2', msg: String.raw`Tu as <b>dérivé</b> $\frac{1}{2x+1}$ au lieu de le primitiver.` },
        { expr: '2*ln(2*x+1)', msg: String.raw`Tu as multiplié par $u' = 2$ au lieu de diviser : $(2\ln(2x+1))' = \frac{4}{2x+1}$.` }
      ],
      hint: String.raw`$\dfrac{1}{2x+1} = \dfrac{1}{2}\cdot\dfrac{u'}{u}$ avec $u = 2x + 1$.`,
      explain: String.raw`$\frac{1}{2x+1} = \frac12\cdot\frac{u'}{u}$ avec $u = 2x + 1 \gt 0$, donc $F(x) = \dfrac{1}{2}\ln(2x+1)$.` },
    { id: 'm6-x-012', level: 2, check: 'antideriv', vars: ['x'],
      topic: "Forme u'/u", sec: 'm6-s-usuelles',
      prompt: String.raw`Donne une primitive de $f(x) = \dfrac{x}{x^2+1}$.`,
      answer: 'ln(x^2+1)/2',
      steps: [
        String.raw`Rappel : une primitive de $\frac{u'}{u}$ est $\ln|u|$ ; on regarde donc si le numérateur est, à une constante près, la dérivée du dénominateur.`,
        String.raw`Avec $u = x^2 + 1$ : $u' = 2x$. Le numérateur $x$ vaut $\frac12 u'$, donc $\frac{x}{x^2+1} = \frac12\cdot\frac{2x}{x^2+1}$.`,
        String.raw`Comme $x^2 + 1 \gt 0$ : $F(x) = \frac{1}{2}\ln(x^2+1)$.`,
        String.raw`Vérification en dérivant : $F'(x) = \frac12 \cdot \frac{2x}{x^2+1} = \frac{x}{x^2+1}$ ✔.`
      ],
      rule: String.raw`$\int \dfrac{u'}{u} = \ln|u| + C$`,
      pitfall: String.raw`Confondre avec $\frac{1}{x^2+1}$ (sans $x$ au numérateur), dont la primitive est $\arctan x$.`,
      mistakes: [
        { expr: 'ln(x^2+1)', msg: String.raw`Il manque le facteur $\frac{1}{2}$ : $(\ln(x^2+1))' = \frac{2x}{x^2+1}$, deux fois trop, car $u' = 2x$ alors que le numérateur vaut $x$.` },
        { expr: 'arctan(x)', msg: String.raw`$\arctan x$ est une primitive de $\frac{1}{x^2+1}$, sans $x$ au numérateur. Ici le $x$ au numérateur signale une forme $\frac{u'}{u}$.` }
      ],
      hint: String.raw`Forme $\dfrac{u'}{u}$ avec $u = x^2 + 1$, $u' = 2x$.`,
      explain: String.raw`$\frac{x}{x^2+1} = \frac12\cdot\frac{u'}{u}$ avec $u = x^2 + 1$, donc $F(x) = \dfrac{1}{2}\ln(x^2+1)$.` },
    { id: 'm6-x-013', level: 2, check: 'value', vars: [],
      topic: 'Intégrale et arctangente', sec: 'm6-s-usuelles',
      prompt: String.raw`Calcule la valeur exacte de $\displaystyle\int_0^1\frac{\mathrm{d}x}{1+x^2}$.`,
      answer: 'pi/4',
      steps: [
        String.raw`Rappel : $\int_a^b f = F(b) - F(a)$. On reconnaît la dérivée de l'arctangente : $(\arctan x)' = \frac{1}{1+x^2}$, donc $F(x) = \arctan x$.`,
        String.raw`$F(1) = \arctan 1 = \frac{\pi}{4}$ (l'angle dont la tangente vaut 1) et $F(0) = \arctan 0 = 0$.`,
        String.raw`$\int_0^1\frac{\mathrm{d}x}{1+x^2} = \frac{\pi}{4} - 0 = \frac{\pi}{4} \approx 0{,}785$.`,
        String.raw`Ordre de grandeur : la fonction varie de $1$ à $\frac12$, l'aire est entre $\frac12$ et $1$ ✔.`
      ],
      rule: String.raw`$\int\dfrac{\mathrm{d}x}{1+x^2} = \arctan x + C$`,
      pitfall: String.raw`Prendre $\ln(1+x^2)$, qui est une primitive de $\frac{2x}{1+x^2}$.`,
      mistakes: [
        { expr: 'ln(2)', msg: String.raw`$\ln(1+x^2)$ est une primitive de $\frac{2x}{1+x^2}$, pas de $\frac{1}{1+x^2}$ : il faudrait $2x$ au numérateur. Ici c'est $\arctan x$.` },
        { expr: 'ln(2)/2', msg: String.raw`Tu as pris $\frac12\ln(1+x^2)$, primitive de $\frac{x}{1+x^2}$ : sans $x$ au numérateur, la primitive est $\arctan x$.` }
      ],
      hint: String.raw`Une primitive de $\dfrac{1}{1+x^2}$ est $\arctan x$.`,
      explain: String.raw`Une primitive est $\arctan x$, donc l'intégrale vaut $\arctan 1 - \arctan 0 = \dfrac{\pi}{4}$.` },
    { id: 'm6-x-014', level: 2, check: 'antideriv', vars: ['x'],
      topic: "Forme u'e^u", sec: 'm6-s-usuelles',
      prompt: String.raw`Donne une primitive de $f(x) = x\,\mathrm{e}^{x^2}$.`,
      answer: 'exp(x^2)/2',
      steps: [
        String.raw`Rappel : $(\mathrm{e}^u)' = u'\,\mathrm{e}^u$, donc une primitive de $u'\,\mathrm{e}^u$ est $\mathrm{e}^u$. Il faut faire apparaître la dérivée de l'exposant devant l'exponentielle.`,
        String.raw`Avec $u = x^2$ : $u' = 2x$, alors que le facteur vaut $x$. On écrit $x\,\mathrm{e}^{x^2} = \frac12 \times 2x\,\mathrm{e}^{x^2} = \frac12\,u'\,\mathrm{e}^u$.`,
        String.raw`Donc $F(x) = \frac{1}{2}\mathrm{e}^{x^2}$.`,
        String.raw`Vérification en dérivant : $F'(x) = \frac12 \times 2x\,\mathrm{e}^{x^2} = x\,\mathrm{e}^{x^2}$ ✔.`
      ],
      rule: String.raw`$\int u'\,\mathrm{e}^{u} = \mathrm{e}^{u} + C$`,
      pitfall: String.raw`Primitiver chaque facteur séparément : la primitive d'un produit n'est pas le produit des primitives.`,
      mistakes: [
        { expr: 'exp(x^2)', msg: String.raw`Il manque le $\frac{1}{2}$ : $(\mathrm{e}^{x^2})' = 2x\,\mathrm{e}^{x^2}$, deux fois trop.` },
        { expr: 'x^2/2*exp(x^2)', msg: String.raw`La primitive d'un produit n'est pas le produit des primitives. Reconnais plutôt une forme $u'\,\mathrm{e}^u$ avec $u = x^2$.` }
      ],
      hint: String.raw`Forme $u'\mathrm{e}^u$ avec $u = x^2$, $u' = 2x$.`,
      explain: String.raw`$x\,\mathrm{e}^{x^2} = \frac12\,u'\mathrm{e}^u$ avec $u = x^2$, donc $F(x) = \dfrac{1}{2}\mathrm{e}^{x^2}$.` },
    { id: 'm6-x-015', level: 2, check: 'antideriv', vars: ['x'],
      topic: "Forme u'/racine de u", sec: 'm6-s-usuelles',
      prompt: String.raw`Donne une primitive de $f(x) = \dfrac{x}{\sqrt{x^2+1}}$.`,
      answer: 'sqrt(x^2+1)',
      steps: [
        String.raw`Rappel : $(\sqrt{u})' = \frac{u'}{2\sqrt u}$, donc une primitive de $\frac{u'}{\sqrt{u}}$ est $2\sqrt{u}$. On cherche à faire apparaître cette forme.`,
        String.raw`Avec $u = x^2 + 1$ : $u' = 2x$ ; le numérateur vaut $x = \frac12 u'$, donc $\frac{x}{\sqrt{x^2+1}} = \frac12\cdot\frac{u'}{\sqrt u}$.`,
        String.raw`Une primitive est $\frac12 \times 2\sqrt{u} = \sqrt{x^2+1}$.`,
        String.raw`Vérification en dérivant : $\left(\sqrt{x^2+1}\right)' = \frac{2x}{2\sqrt{x^2+1}} = \frac{x}{\sqrt{x^2+1}}$ ✔.`
      ],
      rule: String.raw`$\int \dfrac{u'}{\sqrt{u}} = 2\sqrt{u} + C$`,
      pitfall: String.raw`Confondre $\frac{u'}{\sqrt u}$ (primitive $2\sqrt u$) et $\frac{u'}{u}$ (primitive $\ln|u|$).`,
      mistakes: [
        { expr: '2*sqrt(x^2+1)', msg: String.raw`On a bien $\int\frac{u'}{\sqrt{u}} = 2\sqrt{u}$, mais ici le numérateur vaut $\frac{u'}{2}$ (et non $u' = 2x$) : le facteur 2 disparaît.` },
        { expr: 'ln(x^2+1)/2', msg: String.raw`Il y a une <b>racine</b> au dénominateur : c'est une forme $\frac{u'}{\sqrt{u}}$ (primitive $2\sqrt u$), pas $\frac{u'}{u}$ (primitive $\ln u$).` }
      ],
      hint: String.raw`Forme $\dfrac{u'}{\sqrt{u}}$ avec $u = x^2 + 1$ : $\int\dfrac{u'}{\sqrt{u}} = 2\sqrt{u}$.`,
      explain: String.raw`$\frac{x}{\sqrt{x^2+1}} = \frac12\cdot\frac{u'}{\sqrt u}$ avec $u = x^2 + 1$, donc $F(x) = \sqrt{x^2+1}$.` },
    { id: 'm6-x-016', level: 2, check: 'value', vars: [],
      topic: "Intégrale d'une forme u'/u", sec: 'm6-s-integrale',
      prompt: String.raw`Calcule la valeur exacte de $\displaystyle\int_0^1\frac{x}{1+x^2}\,\mathrm{d}x$.`,
      answer: 'ln(2)/2',
      steps: [
        String.raw`Rappel : $\int_a^b f = F(b) - F(a)$. Le numérateur $x$ est la moitié de la dérivée $2x$ du dénominateur : forme $\frac12\cdot\frac{u'}{u}$ avec $u = 1 + x^2$.`,
        String.raw`Une primitive est $F(x) = \frac{1}{2}\ln(1+x^2)$ (vérification : $F'(x) = \frac12\cdot\frac{2x}{1+x^2}$ ✔).`,
        String.raw`$F(1) = \frac12\ln 2$ et $F(0) = \frac12\ln 1 = 0$.`,
        String.raw`$\int_0^1\frac{x}{1+x^2}\,\mathrm{d}x = \frac{\ln 2}{2} \approx 0{,}35$.`
      ],
      rule: String.raw`$\int \dfrac{u'}{u} = \ln|u| + C$`,
      pitfall: String.raw`Oublier le $\frac12$, ou prendre $\arctan$ alors qu'il y a $x$ au numérateur.`,
      mistakes: [
        { expr: 'ln(2)', msg: String.raw`Il manque le $\frac{1}{2}$ : une primitive est $\frac{1}{2}\ln(1+x^2)$, car $u' = 2x$ vaut deux fois le numérateur.` },
        { expr: 'pi/4', msg: String.raw`Avec $x$ au numérateur, ce n'est plus $\arctan$ (réservé à $\frac{1}{1+x^2}$) : c'est une forme $\frac{u'}{u}$.` }
      ],
      hint: String.raw`Une primitive est $\dfrac{1}{2}\ln(1+x^2)$.`,
      explain: String.raw`Une primitive est $\frac12\ln(1+x^2)$, donc l'intégrale vaut $\frac12\ln 2 - 0 = \dfrac{\ln 2}{2}$.` },
    { id: 'm6-x-017', level: 2, check: 'antideriv', vars: ['x'],
      topic: "Forme u'u^n", sec: 'm6-s-usuelles',
      prompt: String.raw`Donne une primitive de $f(x) = \sin x\,\cos^2 x$.`,
      answer: '-cos(x)^3/3',
      steps: [
        String.raw`Rappel : une primitive de $u'\,u^n$ est $\frac{u^{n+1}}{n+1}$. Devant une puissance de $\cos$ multipliée par $\sin$, on pose $u = \cos x$.`,
        String.raw`$u = \cos x$, $u' = -\sin x$. Donc $\sin x\cos^2 x = -(-\sin x)\cos^2 x = -u'\,u^2$.`,
        String.raw`Une primitive de $u'u^2$ est $\frac{u^3}{3}$, donc $F(x) = -\dfrac{\cos^3 x}{3}$.`,
        String.raw`Vérification en dérivant : $F'(x) = -\frac{3\cos^2 x \times (-\sin x)}{3} = \sin x\cos^2 x$ ✔.`
      ],
      rule: String.raw`$\int u'\,u^n = \dfrac{u^{n+1}}{n+1} + C$`,
      pitfall: String.raw`Le signe : $u' = -\sin x$, donc $\sin x = -u'$.`,
      mistakes: [
        { expr: 'cos(x)^3/3', msg: String.raw`Erreur de signe : avec $u = \cos x$, $u' = -\sin x$, donc $\sin x\cos^2 x = -u'u^2$. En dérivant ta réponse on obtient $-\sin x\cos^2 x$.` },
        { expr: '-cos(x)^3', msg: String.raw`Il faut diviser par le nouvel exposant $3$ : $\int u'u^2 = \frac{u^3}{3}$.` }
      ],
      hint: String.raw`Pose $u = \cos x$ : $u' = -\sin x$, forme $-u'u^2$.`,
      explain: String.raw`Avec $u = \cos x$, $\sin x\cos^2 x = -u'u^2$, d'où $F(x) = -\dfrac{\cos^3 x}{3}$.` },
    { id: 'm6-x-018', level: 2, check: 'antideriv', vars: ['x'], domain: [0.3, 4],
      topic: "Forme u'u^n", sec: 'm6-s-usuelles',
      prompt: String.raw`Donne une primitive de $f(x) = \dfrac{\ln x}{x}$ sur $]0, +\infty[$.`,
      answer: 'ln(x)^2/2',
      steps: [
        String.raw`Rappel : une primitive de $u'\,u$ est $\frac{u^2}{2}$, car $\left(\frac{u^2}{2}\right)' = u'u$. On cherche une fonction et sa dérivée dans l'expression.`,
        String.raw`Avec $u = \ln x$ : $u' = \frac{1}{x}$, donc $\frac{\ln x}{x} = \frac{1}{x} \times \ln x = u'\,u$.`,
        String.raw`Une primitive est $F(x) = \dfrac{(\ln x)^2}{2}$.`,
        String.raw`Vérification en dérivant : $F'(x) = \frac{2\ln x \times \frac1x}{2} = \frac{\ln x}{x}$ ✔.`
      ],
      rule: String.raw`$\int u'\,u = \dfrac{u^2}{2} + C$`,
      pitfall: String.raw`Oublier le $\frac12$, ou se lancer dans une IPP inutile.`,
      mistakes: [
        { expr: 'ln(x)^2', msg: String.raw`Il manque le $\frac{1}{2}$ : $\int u'u = \frac{u^2}{2}$, car $\left((\ln x)^2\right)' = \frac{2\ln x}{x}$.` },
        { expr: '(1-ln(x))/x^2', msg: String.raw`Tu as <b>dérivé</b> $\frac{\ln x}{x}$ (formule du quotient) au lieu de le primitiver.` },
        { expr: 'ln(x)', msg: String.raw`Tu n'as primitivé que le facteur $\frac1x$ en oubliant $\ln x$ : la dérivée de $\ln x$ est $\frac1x$, pas $\frac{\ln x}{x}$.` }
      ],
      hint: String.raw`Forme $u'u$ avec $u = \ln x$, $u' = \dfrac{1}{x}$.`,
      explain: String.raw`$\frac{\ln x}{x} = u'u$ avec $u = \ln x$, donc $F(x) = \dfrac{(\ln x)^2}{2}$.` },
    { id: 'm6-x-019', level: 2, check: 'antideriv', vars: ['x'],
      topic: 'Primitive et arctangente', sec: 'm6-s-fractions',
      prompt: String.raw`Donne une primitive de $f(x) = \dfrac{1}{x^2+9}$.`,
      answer: 'arctan(x/3)/3',
      steps: [
        String.raw`Rappel : $\int\frac{\mathrm{d}x}{1+x^2} = \arctan x$. Pour $x^2 + a^2$, on factorise $a^2$ : $\frac{1}{x^2 + a^2} = \frac{1}{a^2}\cdot\frac{1}{1 + (x/a)^2}$, ce qui donne $\frac1a\arctan\frac{x}{a}$.`,
        String.raw`Ici $a^2 = 9$, donc $a = 3$ : $\frac{1}{x^2+9} = \frac{1}{9}\cdot\frac{1}{1 + (x/3)^2}$.`,
        String.raw`Avec $u = \frac{x}{3}$, $u' = \frac13$ : $\frac{1}{x^2+9} = \frac{1}{3}\cdot\frac{u'}{1+u^2}$, d'où $F(x) = \frac{1}{3}\arctan\frac{x}{3}$.`,
        String.raw`Vérification en dérivant : $F'(x) = \frac13\cdot\frac{1/3}{1 + x^2/9} = \frac{1/9}{(9 + x^2)/9} = \frac{1}{x^2+9}$ ✔.`
      ],
      rule: String.raw`$\int\dfrac{\mathrm{d}x}{x^2+a^2} = \dfrac{1}{a}\arctan\dfrac{x}{a} + C$`,
      pitfall: String.raw`Oublier le facteur $\frac{1}{a}$, ou prendre $a = 9$ au lieu de $a = \sqrt 9 = 3$.`,
      mistakes: [
        { expr: 'arctan(x/3)', msg: String.raw`Il manque le facteur $\frac{1}{a} = \frac{1}{3}$ : $\left(\arctan\frac{x}{3}\right)' = \frac{1/3}{1 + x^2/9} = \frac{3}{x^2+9}$, trois fois trop.` },
        { expr: 'ln(x^2+9)', msg: String.raw`Il faudrait $2x$ au numérateur pour une forme $\frac{u'}{u}$ ; avec un numérateur constant, c'est une arctangente.` },
        { expr: 'arctan(x/9)/9', msg: String.raw`On a $a^2 = 9$, donc $a = \sqrt 9 = 3$ et non $9$.` }
      ],
      hint: String.raw`$\int\dfrac{\mathrm{d}x}{x^2+a^2} = \dfrac{1}{a}\arctan\dfrac{x}{a}$ avec $a = 3$.`,
      explain: String.raw`Formule $\frac1a\arctan\frac{x}{a}$ avec $a = 3$ : $F(x) = \dfrac{1}{3}\arctan\dfrac{x}{3}$, et $F'(x) = \frac{1}{x^2+9}$ ✔.` },
    { id: 'm6-x-020', level: 2, check: 'value', vars: [],
      topic: 'Valeur moyenne', sec: 'm6-s-applications',
      prompt: String.raw`Calcule la valeur moyenne de $f(x) = x^2$ sur l'intervalle $[0, 3]$.`,
      answer: '3',
      steps: [
        String.raw`Rappel : la valeur moyenne de $f$ sur $[a, b]$ est $\mu = \frac{1}{b - a}\int_a^b f(x)\,\mathrm{d}x$ : c'est la hauteur du rectangle de base $[a, b]$ qui a la même aire que le domaine sous la courbe.`,
        String.raw`Intégrale : $\int_0^3 x^2\,\mathrm{d}x = \left[\frac{x^3}{3}\right]_0^3 = \frac{27}{3} - 0 = 9$.`,
        String.raw`Longueur de l'intervalle : $b - a = 3 - 0 = 3$, donc $\mu = \frac{9}{3} = 3$.`,
        String.raw`Cohérence : $x^2$ varie de $0$ à $9$ sur $[0, 3]$, la moyenne $3$ est bien entre les deux ✔.`
      ],
      rule: String.raw`$\mu = \dfrac{1}{b-a}\displaystyle\int_a^b f(x)\,\mathrm{d}x$`,
      pitfall: String.raw`Oublier de diviser par la longueur de l'intervalle, ou faire la moyenne des valeurs extrêmes.`,
      mistakes: [
        { expr: '9', msg: String.raw`$9 = \int_0^3 x^2\,\mathrm{d}x$ est l'intégrale : il faut encore diviser par la longueur $b - a = 3$.` },
        { expr: '9/2', msg: String.raw`$\frac92$ est la moyenne des valeurs extrêmes $\frac{f(0) + f(3)}{2}$ : la valeur moyenne d'une fonction se calcule avec l'intégrale divisée par la longueur $3$.` }
      ],
      hint: String.raw`$\mu = \dfrac{1}{b-a}\displaystyle\int_a^b f(x)\,\mathrm{d}x$.`,
      explain: String.raw`$\displaystyle\int_0^3 x^2\,\mathrm{d}x = 9$ et la longueur vaut $3$, donc $\mu = \dfrac{9}{3} = 3$.` },
    { id: 'm6-x-021', level: 2, check: 'antideriv', vars: ['x'], domain: [-1.2, 1.2],
      topic: 'Primitive de la tangente', sec: 'm6-s-usuelles',
      prompt: String.raw`Donne une primitive de $f(x) = \tan x$ sur $\left]-\frac{\pi}{2}, \frac{\pi}{2}\right[$.`,
      answer: '-ln(cos(x))',
      steps: [
        String.raw`Rappel : une primitive de $\frac{u'}{u}$ est $\ln|u|$. On écrit $\tan x = \frac{\sin x}{\cos x}$ et on regarde si le numérateur est la dérivée du dénominateur.`,
        String.raw`Avec $u = \cos x$ : $u' = -\sin x$, donc $\sin x = -u'$ et $\tan x = -\frac{u'}{u}$.`,
        String.raw`Une primitive est $-\ln|\cos x|$ ; sur $\left]-\frac{\pi}{2}, \frac{\pi}{2}\right[$, $\cos x \gt 0$, donc $F(x) = -\ln(\cos x)$.`,
        String.raw`Vérification en dérivant : $F'(x) = -\frac{-\sin x}{\cos x} = \frac{\sin x}{\cos x} = \tan x$ ✔.`
      ],
      rule: String.raw`$\int\tan x\,\mathrm{d}x = -\ln|\cos x| + C$`,
      pitfall: String.raw`Perdre le signe moins venant de $(\cos x)' = -\sin x$.`,
      mistakes: [
        { expr: 'ln(cos(x))', msg: String.raw`Erreur de signe : $(\ln\cos x)' = \frac{-\sin x}{\cos x} = -\tan x$. Il faut $-\ln(\cos x)$.` },
        { expr: '1 + tan(x)^2', msg: String.raw`Tu as <b>dérivé</b> $\tan$ au lieu de la primitiver.` }
      ],
      hint: String.raw`$\tan x = \dfrac{\sin x}{\cos x} = -\dfrac{u'}{u}$ avec $u = \cos x$.`,
      explain: String.raw`$\tan x = -\frac{u'}{u}$ avec $u = \cos x \gt 0$, donc $F(x) = -\ln(\cos x)$.` },
    { id: 'm6-x-022', level: 2, check: 'antideriv', vars: ['x'],
      topic: 'Primitives hyperboliques', sec: 'm6-s-usuelles',
      prompt: String.raw`Donne une primitive de $f(x) = \operatorname{ch}(2x)$. (Syntaxe : $\operatorname{ch}$ = cosh, $\operatorname{sh}$ = sinh.)`,
      answer: 'sinh(2*x)/2',
      steps: [
        String.raw`Rappel : $(\operatorname{sh} x)' = \operatorname{ch} x$, donc $\operatorname{sh}$ est une primitive de $\operatorname{ch}$ (sans signe moins, contrairement à $\cos$ et $\sin$). Avec $\operatorname{ch}(ax)$, on divise par $a$.`,
        String.raw`$(\operatorname{sh}(2x))' = 2\operatorname{ch}(2x)$ : deux fois trop.`,
        String.raw`On divise par 2 : $F(x) = \frac{1}{2}\operatorname{sh}(2x)$.`,
        String.raw`Vérification en dérivant : $F'(x) = \frac12 \times 2\operatorname{ch}(2x) = \operatorname{ch}(2x)$ ✔.`
      ],
      rule: String.raw`$\int\operatorname{ch}(ax)\,\mathrm{d}x = \dfrac{1}{a}\operatorname{sh}(ax) + C$`,
      pitfall: String.raw`Ajouter un signe moins par analogie avec $\int\sin = -\cos$.`,
      mistakes: [
        { expr: 'sinh(2*x)', msg: String.raw`Il manque le facteur $\frac{1}{2}$ : $(\operatorname{sh}(2x))' = 2\operatorname{ch}(2x)$, deux fois trop.` },
        { expr: '-sinh(2*x)/2', msg: String.raw`Pas de signe moins en trigonométrie hyperbolique : $(\operatorname{sh})' = \operatorname{ch}$, donc $\int\operatorname{ch} = \operatorname{sh}$.` },
        { expr: '2*sinh(2*x)', msg: String.raw`Tu as multiplié par $a = 2$ (réflexe de dérivation) : pour primitiver, on divise par $a$.` }
      ],
      hint: String.raw`$\int\operatorname{ch}(ax)\,\mathrm{d}x = \dfrac{1}{a}\operatorname{sh}(ax)$.`,
      explain: String.raw`On divise par $a = 2$ : $F(x) = \dfrac{1}{2}\operatorname{sh}(2x)$, et $F'(x) = \operatorname{ch}(2x)$ ✔.` },
    { id: 'm6-x-023', level: 2, check: 'antideriv', vars: ['x'],
      topic: 'Exponentielle de base a', sec: 'm6-s-usuelles',
      prompt: String.raw`Donne une primitive de $f(x) = 2^x$.`,
      answer: '2^x/ln(2)',
      steps: [
        String.raw`Rappel : $2^x$ est une exponentielle (c'est l'exposant qui varie) : $2^x = \mathrm{e}^{x\ln 2}$. On la primitive donc comme $\mathrm{e}^{ax}$, en divisant par $a$.`,
        String.raw`Ici $a = \ln 2$ : $\int\mathrm{e}^{x\ln 2}\,\mathrm{d}x = \frac{\mathrm{e}^{x\ln 2}}{\ln 2}$.`,
        String.raw`On revient à $2^x$ : $F(x) = \dfrac{2^x}{\ln 2}$.`,
        String.raw`Vérification en dérivant : $F'(x) = \frac{\ln 2 \times 2^x}{\ln 2} = 2^x$ ✔.`
      ],
      rule: String.raw`$\int a^x\,\mathrm{d}x = \dfrac{a^x}{\ln a} + C$ ($a \gt 0$, $a \neq 1$)`,
      pitfall: String.raw`Appliquer la règle des puissances $\frac{x^{n+1}}{n+1}$ à une exponentielle.`,
      mistakes: [
        { expr: '2^(x+1)/(x+1)', msg: String.raw`L'exposant varie : la règle $\int x^n = \frac{x^{n+1}}{n+1}$ (base variable, exposant fixe) ne s'applique pas. Écris $2^x = \mathrm{e}^{x\ln 2}$.` },
        { expr: 'ln(2)*2^x', msg: String.raw`Tu as <b>dérivé</b> : $(2^x)' = \ln(2)\,2^x$. Pour primitiver, on divise par $\ln 2$.` },
        { expr: '2^x', msg: String.raw`Seule $\mathrm{e}^x$ est sa propre primitive ; pour $2^x$, il faut diviser par $\ln 2$.` }
      ],
      hint: String.raw`$2^x = \mathrm{e}^{x\ln 2}$, puis $\int\mathrm{e}^{ax} = \dfrac{\mathrm{e}^{ax}}{a}$.`,
      explain: String.raw`$2^x = \mathrm{e}^{x\ln 2}$, donc $F(x) = \dfrac{2^x}{\ln 2}$ ; en dérivant on retrouve $2^x$.` },
    { id: 'm6-x-024', level: 2, check: 'value', vars: [],
      topic: 'Aire entre deux courbes', sec: 'm6-s-applications',
      prompt: String.raw`Calcule l'aire du domaine compris entre les courbes $y = x$ et $y = x^2$ pour $x \in [0, 1]$.`,
      answer: '1/6',
      steps: [
        String.raw`Rappel : l'aire entre deux courbes sur $[a, b]$ est $\int_a^b (\text{haut} - \text{bas})\,\mathrm{d}x$ ; il faut d'abord savoir quelle courbe est au-dessus.`,
        String.raw`Sur $[0, 1]$ : $x - x^2 = x(1 - x) \geq 0$, donc $y = x$ est au-dessus de $y = x^2$.`,
        String.raw`$\mathcal{A} = \int_0^1 (x - x^2)\,\mathrm{d}x = \left[\frac{x^2}{2} - \frac{x^3}{3}\right]_0^1$.`,
        String.raw`$\mathcal{A} = \frac12 - \frac13 - 0 = \frac{3 - 2}{6} = \frac{1}{6}$.`
      ],
      rule: String.raw`$\mathcal{A} = \displaystyle\int_a^b \big(f(x) - g(x)\big)\,\mathrm{d}x$ si $f \geq g$ sur $[a, b]$`,
      pitfall: String.raw`Additionner les aires sous les deux courbes au lieu de les soustraire.`,
      mistakes: [
        { expr: '5/6', msg: String.raw`Tu as additionné les aires sous les deux courbes ($\frac12 + \frac13$) : on intègre la <b>différence</b> (haut − bas).` },
        { expr: '-1/6', msg: String.raw`Tu as intégré (bas − haut) : sur $[0, 1]$, $x \geq x^2$, on intègre $x - x^2$ pour obtenir une aire positive.` },
        { expr: '1/2', msg: String.raw`C'est l'aire sous $y = x$ seulement : il faut retirer l'aire sous $y = x^2$, qui vaut $\frac13$.` }
      ],
      hint: String.raw`Sur $[0, 1]$, $x \geq x^2$ : $\mathcal{A} = \displaystyle\int_0^1 (x - x^2)\,\mathrm{d}x$.`,
      explain: String.raw`Sur $[0, 1]$, $x \geq x^2$, donc $\mathcal{A} = \int_0^1 (x - x^2)\,\mathrm{d}x = \frac12 - \frac13 = \dfrac{1}{6}$.` },
    { id: 'm6-x-025', level: 2, check: 'value', vars: [],
      topic: 'Aire géométrique', sec: 'm6-s-applications',
      prompt: String.raw`Calcule l'aire (géométrique, donc positive) du domaine compris entre la courbe de $\sin$ et l'axe des abscisses pour $x \in [0, 2\pi]$.`,
      answer: '4',
      steps: [
        String.raw`Rappel : l'intégrale compte <b>négativement</b> les parties situées sous l'axe (aire algébrique). Pour une aire géométrique, on intègre $|f|$, donc on découpe là où $f$ change de signe.`,
        String.raw`$\sin \geq 0$ sur $[0, \pi]$ et $\sin \leq 0$ sur $[\pi, 2\pi]$ : $\mathcal{A} = \int_0^{\pi}\sin x\,\mathrm{d}x - \int_{\pi}^{2\pi}\sin x\,\mathrm{d}x$.`,
        String.raw`$\int_0^{\pi}\sin x\,\mathrm{d}x = [-\cos x]_0^{\pi} = 1 + 1 = 2$ et $\int_{\pi}^{2\pi}\sin x\,\mathrm{d}x = [-\cos x]_{\pi}^{2\pi} = -1 - 1 = -2$.`,
        String.raw`$\mathcal{A} = 2 - (-2) = 4$ : deux arches de même aire $2$.`
      ],
      rule: String.raw`Aire géométrique $= \displaystyle\int_a^b |f(x)|\,\mathrm{d}x$ : découper aux changements de signe`,
      pitfall: String.raw`Calculer $\int_0^{2\pi}\sin x\,\mathrm{d}x = 0$ : les deux arches se compensent.`,
      mistakes: [
        { expr: '0', msg: String.raw`$\int_0^{2\pi}\sin x\,\mathrm{d}x = 0$ est l'aire <b>algébrique</b> : l'arche sous l'axe compte négativement et compense l'autre. Pour l'aire géométrique, intègre $|\sin x|$.` },
        { expr: '2', msg: String.raw`Tu n'as compté qu'une arche : la seconde, située sous l'axe, a aussi une aire $2$.` }
      ],
      hint: String.raw`Découpe : $\displaystyle\int_0^{\pi}\sin x\,\mathrm{d}x - \int_{\pi}^{2\pi}\sin x\,\mathrm{d}x$.`,
      explain: String.raw`Chaque arche a une aire $2$ ; la seconde est sous l'axe et on prend sa valeur absolue : $\mathcal{A} = 2 + 2 = 4$.` },
    { id: 'm6-x-026', level: 2, check: 'value', vars: [],
      topic: 'Parité et intégrale', sec: 'm6-s-integrale',
      prompt: String.raw`Calcule $\displaystyle\int_{-1}^{1}\left(x^5 + x^2\right)\mathrm{d}x$ (pense à la parité).`,
      answer: '2/3',
      steps: [
        String.raw`Rappel : sur un intervalle symétrique $[-a, a]$, une fonction impaire ($f(-x) = -f(x)$) a une intégrale nulle, et une fonction paire ($f(-x) = f(x)$) vérifie $\int_{-a}^{a} f = 2\int_0^a f$.`,
        String.raw`$(-x)^5 = -x^5$ : $x^5$ est impaire, donc $\int_{-1}^{1} x^5\,\mathrm{d}x = 0$.`,
        String.raw`$(-x)^2 = x^2$ : $x^2$ est paire, donc $\int_{-1}^{1} x^2\,\mathrm{d}x = 2\int_0^1 x^2\,\mathrm{d}x = 2 \times \frac{1}{3} = \frac{2}{3}$.`,
        String.raw`Total : $0 + \frac23 = \frac23$. Vérification directe : $\left[\frac{x^6}{6} + \frac{x^3}{3}\right]_{-1}^{1} = \left(\frac16 + \frac13\right) - \left(\frac16 - \frac13\right) = \frac{2}{3}$ ✔.`
      ],
      rule: String.raw`$f$ impaire : $\int_{-a}^{a} f = 0$ ; $f$ paire : $\int_{-a}^{a} f = 2\int_0^a f$`,
      pitfall: String.raw`Annuler toute l'intégrale alors que seule la partie impaire disparaît.`,
      mistakes: [
        { expr: '1/3', msg: String.raw`Il manque le facteur 2 : pour la fonction paire $x^2$, $\int_{-1}^{1} x^2 = 2\int_0^1 x^2 = \frac23$.` },
        { expr: '0', msg: String.raw`Seul $x^5$ est impair ; $x^2$ est pair (et positif), sa contribution n'est pas nulle.` }
      ],
      hint: String.raw`$x^5$ est impaire (intégrale nulle), $x^2$ est paire : $\int_{-1}^1 x^2 = 2\int_0^1 x^2$.`,
      explain: String.raw`La partie impaire $x^5$ donne $0$ et la partie paire $x^2$ donne $2 \times \frac13$ : total $\dfrac{2}{3}$.` },
    { id: 'm6-x-027', level: 2, check: 'antideriv', vars: ['x'],
      topic: 'Intégration par parties', sec: 'm6-s-ipp',
      prompt: String.raw`Par parties, donne une primitive de $f(x) = x\,\mathrm{e}^x$.`,
      answer: '(x-1)*exp(x)',
      steps: [
        String.raw`Rappel : l'intégration par parties $\int u\,v' = uv - \int u'v$ sert à primitiver un produit. On dérive le facteur qui se simplifie (le polynôme $x$) et on primitive celui qui reste simple ($\mathrm{e}^x$).`,
        String.raw`$u = x$, $u' = 1$ ; $v' = \mathrm{e}^x$, $v = \mathrm{e}^x$.`,
        String.raw`$\int x\,\mathrm{e}^x\,\mathrm{d}x = x\,\mathrm{e}^x - \int 1 \cdot \mathrm{e}^x\,\mathrm{d}x = x\,\mathrm{e}^x - \mathrm{e}^x = (x - 1)\,\mathrm{e}^x$.`,
        String.raw`Vérification en dérivant : $\big((x-1)\mathrm{e}^x\big)' = 1 \cdot \mathrm{e}^x + (x - 1)\,\mathrm{e}^x = x\,\mathrm{e}^x$ ✔.`
      ],
      rule: String.raw`$\int u\,v' = uv - \int u'\,v$`,
      pitfall: String.raw`Oublier le terme $-\int u'v$, ou se tromper de signe.`,
      mistakes: [
        { expr: 'x*exp(x)', msg: String.raw`Il manque le terme $-\int u'v = -\int\mathrm{e}^x\,\mathrm{d}x = -\mathrm{e}^x$ de la formule d'IPP.` },
        { expr: 'x^2/2*exp(x)', msg: String.raw`La primitive d'un produit n'est pas le produit des primitives : fais une intégration par parties.` },
        { expr: '(x+1)*exp(x)', msg: String.raw`Erreur de signe : $\int uv' = uv \mathbin{\boldsymbol{-}} \int u'v$, donc $x\mathrm{e}^x - \mathrm{e}^x$.` }
      ],
      hint: String.raw`$u = x$ (à dériver), $v' = \mathrm{e}^x$ (à primitiver).`,
      explain: String.raw`IPP avec $u = x$ et $v' = \mathrm{e}^x$ : $\int x\mathrm{e}^x\,\mathrm{d}x = x\mathrm{e}^x - \mathrm{e}^x = (x-1)\mathrm{e}^x$.` },
    { id: 'm6-x-028', level: 2, check: 'antideriv', vars: ['x'],
      topic: 'Intégration par parties', sec: 'm6-s-ipp',
      prompt: String.raw`Par parties, donne une primitive de $f(x) = x\cos x$.`,
      answer: 'x*sin(x) + cos(x)',
      steps: [
        String.raw`Rappel : pour un produit « polynôme × trigonométrique », on intègre par parties, $\int u\,v' = uv - \int u'v$, en dérivant le polynôme.`,
        String.raw`$u = x$, $u' = 1$ ; $v' = \cos x$, $v = \sin x$.`,
        String.raw`$\int x\cos x\,\mathrm{d}x = x\sin x - \int\sin x\,\mathrm{d}x = x\sin x - (-\cos x) = x\sin x + \cos x$.`,
        String.raw`Vérification en dérivant : $(x\sin x + \cos x)' = \sin x + x\cos x - \sin x = x\cos x$ ✔.`
      ],
      rule: String.raw`$\int u\,v' = uv - \int u'\,v$`,
      pitfall: String.raw`Le double signe : $-\int\sin x = -(-\cos x) = +\cos x$.`,
      mistakes: [
        { expr: 'x*sin(x) - cos(x)', msg: String.raw`Erreur de signe : $-\int\sin x\,\mathrm{d}x = -(-\cos x) = +\cos x$.` },
        { expr: 'x^2/2*sin(x)', msg: String.raw`La primitive d'un produit n'est pas le produit des primitives : intègre par parties.` },
        { expr: 'x*sin(x)', msg: String.raw`Il manque le terme $-\int u'v = -\int\sin x\,\mathrm{d}x = \cos x$.` }
      ],
      hint: String.raw`$u = x$, $v' = \cos x$, donc $v = \sin x$.`,
      explain: String.raw`IPP avec $u = x$ et $v' = \cos x$ : $\int x\cos x\,\mathrm{d}x = x\sin x - \int\sin x\,\mathrm{d}x = x\sin x + \cos x$.` },
    { id: 'm6-x-029', level: 2, check: 'value', vars: [],
      topic: 'Intégration par parties', sec: 'm6-s-ipp',
      prompt: String.raw`Calcule $\displaystyle\int_0^1 x\,\mathrm{e}^x\,\mathrm{d}x$ (intégration par parties).`,
      answer: '1',
      steps: [
        String.raw`Rappel : IPP sur un intervalle : $\int_a^b u\,v' = \big[uv\big]_a^b - \int_a^b u'v$. On dérive $x$ et on primitive $\mathrm{e}^x$.`,
        String.raw`$u = x$, $u' = 1$, $v = \mathrm{e}^x$ : $\int_0^1 x\,\mathrm{e}^x\,\mathrm{d}x = \big[x\,\mathrm{e}^x\big]_0^1 - \int_0^1\mathrm{e}^x\,\mathrm{d}x$.`,
        String.raw`Crochet : $1 \cdot \mathrm{e}^1 - 0 \cdot \mathrm{e}^0 = \mathrm{e}$. Intégrale restante : $\big[\mathrm{e}^x\big]_0^1 = \mathrm{e} - 1$.`,
        String.raw`Résultat : $\mathrm{e} - (\mathrm{e} - 1) = 1$. Contrôle avec la primitive $(x-1)\mathrm{e}^x$ : $0 - (-1) = 1$ ✔.`
      ],
      rule: String.raw`$\int_a^b u\,v' = \big[uv\big]_a^b - \int_a^b u'\,v$`,
      pitfall: String.raw`Oublier de retrancher l'intégrale restante, ou se tromper de signe.`,
      mistakes: [
        { expr: 'e', msg: String.raw`Tu n'as gardé que le crochet $[x\mathrm{e}^x]_0^1 = \mathrm{e}$ : il faut retrancher $\int_0^1\mathrm{e}^x\,\mathrm{d}x = \mathrm{e} - 1$.` },
        { expr: '2*e - 1', msg: String.raw`Erreur de signe dans l'IPP : c'est $[uv] \mathbin{\boldsymbol{-}} \int u'v$, pas $+$.` }
      ],
      hint: String.raw`$\displaystyle\int_0^1 x\mathrm{e}^x\,\mathrm{d}x = \Big[x\mathrm{e}^x\Big]_0^1 - \int_0^1\mathrm{e}^x\,\mathrm{d}x$.`,
      explain: String.raw`Par parties : $[x\mathrm{e}^x]_0^1 - \int_0^1\mathrm{e}^x\,\mathrm{d}x = \mathrm{e} - (\mathrm{e} - 1) = 1$.` },
    { id: 'm6-x-030', level: 2, check: 'value', vars: [],
      topic: 'Primitive du logarithme', sec: 'm6-s-ipp',
      prompt: String.raw`Calcule $\displaystyle\int_1^{\mathrm{e}}\ln x\,\mathrm{d}x$.`,
      answer: '1',
      steps: [
        String.raw`Rappel : une primitive de $\ln x$ s'obtient par parties avec $u = \ln x$ et $v' = 1$ : $\int\ln x = x\ln x - \int x \cdot \frac1x = x\ln x - x$.`,
        String.raw`Vérification de la primitive : $(x\ln x - x)' = \ln x + 1 - 1 = \ln x$ ✔.`,
        String.raw`$F(\mathrm{e}) = \mathrm{e}\ln\mathrm{e} - \mathrm{e} = \mathrm{e} - \mathrm{e} = 0$ et $F(1) = 1 \cdot \ln 1 - 1 = -1$.`,
        String.raw`$\int_1^{\mathrm{e}}\ln x\,\mathrm{d}x = F(\mathrm{e}) - F(1) = 0 - (-1) = 1$.`
      ],
      rule: String.raw`$\int\ln x\,\mathrm{d}x = x\ln x - x + C$`,
      pitfall: String.raw`Oublier le $-x$ dans la primitive $x\ln x - x$.`,
      mistakes: [
        { expr: 'e', msg: String.raw`Tu as pris $x\ln x$ seul comme primitive : $[x\ln x]_1^{\mathrm{e}} = \mathrm{e}$. Or $(x\ln x)' = \ln x + 1$ ; la bonne primitive est $x\ln x - x$.` },
        { expr: '1/e - 1', msg: String.raw`Tu as utilisé la dérivée $\frac{1}{x}$ au lieu d'une primitive : $\left[\frac1x\right]_1^{\mathrm{e}} = \frac{1}{\mathrm{e}} - 1$.` }
      ],
      hint: String.raw`Une primitive de $\ln x$ est $x\ln x - x$ (IPP avec $v' = 1$).`,
      explain: String.raw`Avec la primitive $x\ln x - x$ : $\Big[x\ln x - x\Big]_1^{\mathrm{e}} = 0 - (-1) = 1$.` },
    { id: 'm6-x-031', level: 2, check: 'antideriv', vars: ['x'],
      topic: 'Linéarisation', sec: 'm6-s-trigo',
      prompt: String.raw`Donne une primitive de $f(x) = \cos^2 x$.`,
      answer: 'x/2 + sin(2*x)/4',
      steps: [
        String.raw`Rappel : on ne sait pas primitiver directement une puissance paire de $\cos$ ; on la <b>linéarise</b> avec $\cos 2x = 2\cos^2 x - 1$, d'où $\cos^2 x = \frac{1 + \cos 2x}{2}$.`,
        String.raw`On écrit $\cos^2 x = \frac12 + \frac12\cos(2x)$ et on primitive terme à terme.`,
        String.raw`$\int\frac12\,\mathrm{d}x = \frac{x}{2}$ et $\int\frac12\cos(2x)\,\mathrm{d}x = \frac12\cdot\frac{\sin(2x)}{2} = \frac{\sin(2x)}{4}$. Donc $F(x) = \frac{x}{2} + \frac{\sin 2x}{4}$.`,
        String.raw`Vérification en dérivant : $F'(x) = \frac12 + \frac{2\cos 2x}{4} = \frac{1 + \cos 2x}{2} = \cos^2 x$ ✔.`
      ],
      rule: String.raw`$\cos^2 x = \dfrac{1 + \cos 2x}{2}$, donc $\int\cos^2 x\,\mathrm{d}x = \dfrac{x}{2} + \dfrac{\sin 2x}{4} + C$`,
      pitfall: String.raw`Écrire $\frac{\cos^3 x}{3}$ : ce n'est pas une forme $u'u^n$ (il manque $u' = -\sin x$).`,
      mistakes: [
        { expr: 'cos(x)^3/3', msg: String.raw`Ce n'est pas une forme $u'u^n$ : il manquerait le facteur $u' = -\sin x$. Linéarise : $\cos^2 x = \frac{1+\cos 2x}{2}$.` },
        { expr: 'x/2 - sin(2*x)/4', msg: String.raw`Erreur de signe : $\cos^2 x = \frac{1 \mathbin{\boldsymbol{+}} \cos 2x}{2}$ (c'est $\sin^2$ qui a un moins).` },
        { expr: 'x/2 + sin(2*x)/2', msg: String.raw`Le $\frac12$ de la linéarisation <b>et</b> le $\frac12$ de $\int\cos(2x) = \frac{\sin 2x}{2}$ se multiplient : on obtient $\frac{\sin 2x}{4}$.` }
      ],
      hint: String.raw`Linéarise : $\cos^2 x = \dfrac{1 + \cos 2x}{2}$.`,
      explain: String.raw`On linéarise $\cos^2 x = \frac{1 + \cos 2x}{2}$, d'où $F(x) = \dfrac{x}{2} + \dfrac{\sin 2x}{4}$ ; en dérivant on retrouve $\cos^2 x$.` },
    { id: 'm6-x-032', level: 2, check: 'value', vars: [],
      topic: 'Linéarisation', sec: 'm6-s-trigo',
      prompt: String.raw`Calcule la valeur exacte de $\displaystyle\int_0^{\pi}\cos^2 x\,\mathrm{d}x$.`,
      answer: 'pi/2',
      steps: [
        String.raw`Rappel : pour intégrer $\cos^2 x$, on linéarise : $\cos^2 x = \frac{1 + \cos 2x}{2}$, dont une primitive est $\frac{x}{2} + \frac{\sin 2x}{4}$.`,
        String.raw`En $\pi$ : $\frac{\pi}{2} + \frac{\sin 2\pi}{4} = \frac{\pi}{2} + 0$. En $0$ : $0 + \frac{\sin 0}{4} = 0$.`,
        String.raw`$\int_0^\pi\cos^2 x\,\mathrm{d}x = \frac{\pi}{2} - 0 = \frac{\pi}{2}$.`,
        String.raw`Cohérence : $\cos^2$ vaut $\frac12$ en moyenne ; sur une longueur $\pi$ cela donne bien $\frac{\pi}{2}$ ✔.`
      ],
      rule: String.raw`$\cos^2 x = \dfrac{1 + \cos 2x}{2}$`,
      pitfall: String.raw`Oublier le $\frac12$ de la linéarisation.`,
      mistakes: [
        { expr: 'pi', msg: String.raw`Il manque le $\frac{1}{2}$ de la linéarisation : $\cos^2 x = \frac{1 + \cos 2x}{2}$ vaut $\frac12$ en moyenne, pas $1$.` },
        { expr: '-2/3', msg: String.raw`$\frac{\cos^3 x}{3}$ n'est pas une primitive de $\cos^2 x$ (sa dérivée vaut $-\sin x\cos^2 x$) : il faut linéariser.` }
      ],
      hint: String.raw`Une primitive de $\cos^2 x$ est $\dfrac{x}{2} + \dfrac{\sin 2x}{4}$.`,
      explain: String.raw`Avec la primitive $\frac{x}{2} + \frac{\sin 2x}{4}$ : l'intégrale vaut $\dfrac{\pi}{2}$ (moyenne $\frac12$ sur une longueur $\pi$).` },
    { id: 'm6-x-033', level: 3, check: 'antideriv', vars: ['x'], domain: [0.3, 4],
      topic: 'Éléments simples', sec: 'm6-s-fractions',
      prompt: String.raw`Décompose puis donne une primitive de $f(x) = \dfrac{1}{x(x+1)}$ sur $]0, +\infty[$.`,
      answer: 'ln(x) - ln(x+1)',
      steps: [
        String.raw`Rappel : pour primitiver une fraction rationnelle dont le dénominateur est un produit de facteurs du premier degré, on la décompose en éléments simples $\frac{A}{x - a}$, qui se primitivent en $A\ln|x - a|$.`,
        String.raw`On cherche $\frac{1}{x(x+1)} = \frac{A}{x} + \frac{B}{x+1}$. Méthode « cache » : $A = \frac{1}{0 + 1} = 1$ (multiplier par $x$, faire $x = 0$) et $B = \frac{1}{-1} = -1$ (multiplier par $x + 1$, faire $x = -1$).`,
        String.raw`Donc $\frac{1}{x(x+1)} = \frac{1}{x} - \frac{1}{x+1}$ et, sur $]0, +\infty[$, $F(x) = \ln x - \ln(x+1) = \ln\frac{x}{x+1}$.`,
        String.raw`Vérification en dérivant : $F'(x) = \frac1x - \frac{1}{x+1} = \frac{(x+1) - x}{x(x+1)} = \frac{1}{x(x+1)}$ ✔.`
      ],
      rule: String.raw`$\int\dfrac{A}{x - a}\,\mathrm{d}x = A\ln|x - a| + C$`,
      pitfall: String.raw`Se tromper de signe sur $B$ : vérifier en réduisant au même dénominateur.`,
      mistakes: [
        { expr: 'ln(x) + ln(x+1)', msg: String.raw`Décomposition fausse : $\frac{1}{x} + \frac{1}{x+1} = \frac{2x+1}{x(x+1)}$. La bonne est $\frac{1}{x} \mathbin{\boldsymbol{-}} \frac{1}{x+1}$.` },
        { expr: 'ln(x)*ln(x+1)', msg: String.raw`La primitive d'un produit n'est pas le produit des primitives : décompose d'abord en éléments simples.` },
        { expr: 'ln(x+1) - ln(x)', msg: String.raw`Signes inversés : $A = +1$ (coefficient de $\frac1x$) et $B = -1$ (coefficient de $\frac{1}{x+1}$).` }
      ],
      hint: String.raw`$\dfrac{1}{x(x+1)} = \dfrac{A}{x} + \dfrac{B}{x+1}$ : $A = 1$, $B = -1$.`,
      explain: String.raw`$\dfrac{1}{x(x+1)} = \dfrac{1}{x} - \dfrac{1}{x+1}$, donc $F(x) = \ln x - \ln(x+1)$ ; en dérivant on retrouve $f$.` },
    { id: 'm6-x-034', level: 3, check: 'value', vars: [],
      topic: 'Éléments simples', sec: 'm6-s-fractions',
      prompt: String.raw`Calcule la valeur exacte de $\displaystyle\int_0^1\frac{\mathrm{d}x}{x^2+3x+2}$.`,
      answer: 'ln(4/3)',
      steps: [
        String.raw`Rappel : on factorise le dénominateur puis on décompose en éléments simples, chacun se primitivant en un logarithme. Racines de $x^2 + 3x + 2$ : $-1$ et $-2$, donc $x^2 + 3x + 2 = (x+1)(x+2)$.`,
        String.raw`Méthode « cache » : $\frac{1}{(x+1)(x+2)} = \frac{A}{x+1} + \frac{B}{x+2}$ avec $A = \frac{1}{-1 + 2} = 1$ et $B = \frac{1}{-2 + 1} = -1$.`,
        String.raw`Primitive sur $[0, 1]$ : $F(x) = \ln(x+1) - \ln(x+2)$.`,
        String.raw`$F(1) - F(0) = (\ln 2 - \ln 3) - (\ln 1 - \ln 2) = 2\ln 2 - \ln 3 = \ln\frac{4}{3} \approx 0{,}29$.`
      ],
      rule: String.raw`$\dfrac{1}{(x-a)(x-b)} = \dfrac{A}{x-a} + \dfrac{B}{x-b}$, puis $\int\dfrac{\mathrm{d}x}{x-a} = \ln|x-a| + C$`,
      pitfall: String.raw`Oublier de soustraire $F(0)$, qui n'est pas nul ici ($-\ln 2$).`,
      mistakes: [
        { expr: 'ln(3)', msg: String.raw`Décomposition fausse : $\frac{1}{(x+1)(x+2)} = \frac{1}{x+1} \mathbin{\boldsymbol{-}} \frac{1}{x+2}$ (avec un $+$, on trouverait $\ln 3$).` },
        { expr: 'ln(2/3)', msg: String.raw`Tu n'as gardé que $F(1) = \ln 2 - \ln 3$ : il faut soustraire $F(0) = \ln 1 - \ln 2 = -\ln 2$.` }
      ],
      hint: String.raw`$x^2 + 3x + 2 = (x+1)(x+2)$ et $\dfrac{1}{(x+1)(x+2)} = \dfrac{1}{x+1} - \dfrac{1}{x+2}$.`,
      explain: String.raw`$\frac{1}{(x+1)(x+2)} = \frac{1}{x+1} - \frac{1}{x+2}$, d'où $\Big[\ln(x+1) - \ln(x+2)\Big]_0^1 = 2\ln 2 - \ln 3 = \ln\dfrac{4}{3}$.` },
    { id: 'm6-x-035', level: 3, check: 'antideriv', vars: ['x'],
      topic: 'Forme canonique et arctangente', sec: 'm6-s-fractions',
      prompt: String.raw`Donne une primitive de $f(x) = \dfrac{1}{x^2+2x+2}$.`,
      answer: 'arctan(x+1)',
      steps: [
        String.raw`Rappel : quand le dénominateur du second degré n'a pas de racine réelle (ici $\Delta = 4 - 8 \lt 0$), on le met sous forme canonique pour se ramener à $\frac{u'}{1 + u^2}$, de primitive $\arctan u$.`,
        String.raw`Forme canonique : $x^2 + 2x + 2 = (x+1)^2 - 1 + 2 = (x+1)^2 + 1$.`,
        String.raw`Avec $u = x + 1$, $u' = 1$ : $\frac{1}{(x+1)^2 + 1} = \frac{u'}{1 + u^2}$, donc $F(x) = \arctan(x + 1)$.`,
        String.raw`Vérification en dérivant : $F'(x) = \frac{1}{1 + (x+1)^2} = \frac{1}{x^2 + 2x + 2}$ ✔.`
      ],
      rule: String.raw`$\int\dfrac{u'}{1+u^2} = \arctan u + C$ ; forme canonique $x^2 + bx + c = \left(x + \frac{b}{2}\right)^2 + c - \frac{b^2}{4}$`,
      pitfall: String.raw`Chercher une forme $\frac{u'}{u}$ alors que le numérateur n'est pas la dérivée du dénominateur.`,
      mistakes: [
        { expr: 'ln(x^2+2*x+2)', msg: String.raw`Le numérateur $1$ n'est pas la dérivée $2x + 2$ du dénominateur : ce n'est pas une forme $\frac{u'}{u}$.` },
        { expr: 'arctan(x)', msg: String.raw`Il faut la forme canonique : $x^2 + 2x + 2 = (x+1)^2 + 1$, donc c'est $\arctan(x+1)$ et non $\arctan x$.` }
      ],
      hint: String.raw`Forme canonique : $x^2 + 2x + 2 = (x+1)^2 + 1$.`,
      explain: String.raw`$x^2 + 2x + 2 = (x+1)^2 + 1$, forme $\frac{u'}{1+u^2}$ avec $u = x + 1$ : $F(x) = \arctan(x+1)$.` },
    { id: 'm6-x-036', level: 3, check: 'value', vars: [],
      topic: 'Changement de variable', sec: 'm6-s-changement',
      prompt: String.raw`À l'aide du changement de variable $x = \sin t$, calcule $\displaystyle\int_0^1\sqrt{1-x^2}\,\mathrm{d}x$.`,
      answer: 'pi/4',
      steps: [
        String.raw`Rappel : un changement de variable $x = \varphi(t)$ transforme trois choses : la fonction, l'élément $\mathrm{d}x = \varphi'(t)\,\mathrm{d}t$, et les bornes. Ici $x = \sin t$ supprime la racine grâce à $1 - \sin^2 t = \cos^2 t$.`,
        String.raw`Bornes : $x = 0 \Rightarrow t = 0$ et $x = 1 \Rightarrow t = \frac{\pi}{2}$. Élément : $\mathrm{d}x = \cos t\,\mathrm{d}t$. Fonction : $\sqrt{1 - \sin^2 t} = \cos t$ (positif sur $\left[0, \frac{\pi}{2}\right]$).`,
        String.raw`L'intégrale devient $\int_0^{\pi/2}\cos t \cdot \cos t\,\mathrm{d}t = \int_0^{\pi/2}\cos^2 t\,\mathrm{d}t$.`,
        String.raw`Linéarisation : $\int_0^{\pi/2}\frac{1 + \cos 2t}{2}\,\mathrm{d}t = \left[\frac{t}{2} + \frac{\sin 2t}{4}\right]_0^{\pi/2} = \frac{\pi}{4} + 0 - 0 = \frac{\pi}{4}$.`,
        String.raw`Interprétation : c'est l'aire d'un quart de disque de rayon 1, soit $\frac{\pi \times 1^2}{4}$ ✔.`
      ],
      rule: String.raw`$x = \varphi(t)$ : $\mathrm{d}x = \varphi'(t)\,\mathrm{d}t$, et on change les bornes`,
      pitfall: String.raw`Oublier le facteur $\cos t$ venant de $\mathrm{d}x$, ou ne pas changer les bornes.`,
      mistakes: [
        { expr: 'pi/2', msg: String.raw`Il manque le $\frac{1}{2}$ de la linéarisation $\cos^2 t = \frac{1 + \cos 2t}{2}$.` },
        { expr: '-2/3', msg: String.raw`$\frac{2}{3}(1-x^2)^{3/2}$ n'est pas une primitive de $\sqrt{1 - x^2}$ (il manquerait le facteur $u' = -2x$) : utilise le changement de variable.` }
      ],
      hint: String.raw`$\mathrm{d}x = \cos t\,\mathrm{d}t$, bornes $0$ et $\dfrac{\pi}{2}$, $\sqrt{1 - \sin^2 t} = \cos t$.`,
      explain: String.raw`Avec $x = \sin t$, l'intégrale devient $\int_0^{\pi/2}\cos^2 t\,\mathrm{d}t = \dfrac{\pi}{4}$ : l'aire d'un quart de disque de rayon 1.` },
    { id: 'm6-x-037', level: 3, check: 'antideriv', vars: ['x'],
      topic: 'Double intégration par parties', sec: 'm6-s-ipp',
      prompt: String.raw`Par deux intégrations par parties, donne une primitive de $f(x) = \mathrm{e}^x\cos x$.`,
      answer: 'exp(x)*(cos(x)+sin(x))/2',
      steps: [
        String.raw`Rappel : dans $\int\mathrm{e}^x\cos x$, aucun facteur ne se simplifie en dérivant. On fait deux IPP successives en primitivant toujours l'exponentielle : on retombe sur l'intégrale de départ $I$, puis on résout une équation en $I$.`,
        String.raw`1re IPP ($u = \cos x$, $v' = \mathrm{e}^x$) : $I = \mathrm{e}^x\cos x - \int\mathrm{e}^x(-\sin x)\,\mathrm{d}x = \mathrm{e}^x\cos x + \int\mathrm{e}^x\sin x\,\mathrm{d}x$.`,
        String.raw`2e IPP ($u = \sin x$, $v' = \mathrm{e}^x$) : $\int\mathrm{e}^x\sin x\,\mathrm{d}x = \mathrm{e}^x\sin x - \int\mathrm{e}^x\cos x\,\mathrm{d}x = \mathrm{e}^x\sin x - I$.`,
        String.raw`Donc $I = \mathrm{e}^x\cos x + \mathrm{e}^x\sin x - I$, soit $2I = \mathrm{e}^x(\cos x + \sin x)$ et $I = \frac{\mathrm{e}^x(\cos x + \sin x)}{2}$.`,
        String.raw`Vérification en dérivant : $\frac12\big[\mathrm{e}^x(\cos x + \sin x) + \mathrm{e}^x(-\sin x + \cos x)\big] = \frac12 \cdot 2\mathrm{e}^x\cos x = \mathrm{e}^x\cos x$ ✔.`
      ],
      rule: String.raw`Deux IPP en primitivant $\mathrm{e}^x$, puis résoudre $I = \ldots - I$ : $\int\mathrm{e}^x\cos x\,\mathrm{d}x = \dfrac{\mathrm{e}^x(\cos x + \sin x)}{2} + C$`,
      pitfall: String.raw`Changer de choix entre les deux IPP (on reviendrait au point de départ), ou oublier de diviser par 2.`,
      mistakes: [
        { expr: 'exp(x)*(cos(x)+sin(x))', msg: String.raw`On obtient $2I = \mathrm{e}^x(\cos x + \sin x)$ : n'oublie pas de diviser par 2.` },
        { expr: 'exp(x)*sin(x)', msg: String.raw`La primitive d'un produit n'est pas le produit des primitives : fais deux IPP.` },
        { expr: 'exp(x)*(cos(x)-sin(x))/2', msg: String.raw`Erreur de signe dans la 1re IPP : $-\int\mathrm{e}^x(-\sin x) = +\int\mathrm{e}^x\sin x$, les deux moins donnent un plus.` }
      ],
      hint: String.raw`Deux IPP avec $v' = \mathrm{e}^x$ : on retombe sur $I$ et on résout l'équation.`,
      explain: String.raw`Deux IPP en primitivant $\mathrm{e}^x$ donnent $I = \mathrm{e}^x(\cos x + \sin x) - I$, d'où $I = \dfrac{\mathrm{e}^x(\cos x + \sin x)}{2}$.` },
    { id: 'm6-x-038', level: 3, check: 'value', vars: [],
      topic: 'Valeur efficace', sec: 'm6-s-applications',
      prompt: String.raw`Calcule la valeur efficace (exacte) de la tension $u(t) = 10\sin(\omega t)$ (en volts).`,
      answer: '5*sqrt(2)',
      steps: [
        String.raw`Rappel : la valeur efficace est la racine de la moyenne du carré sur une période : $U_{\text{eff}} = \sqrt{\langle u^2\rangle}$. C'est la tension continue qui dissiperait la même puissance dans une résistance.`,
        String.raw`Carré linéarisé : $u^2 = 100\sin^2(\omega t) = 100 \cdot \frac{1 - \cos(2\omega t)}{2} = 50 - 50\cos(2\omega t)$.`,
        String.raw`Moyenne sur une période : le cosinus a une moyenne nulle, donc $\langle u^2\rangle = 50$.`,
        String.raw`$U_{\text{eff}} = \sqrt{50} = \sqrt{25 \times 2} = 5\sqrt{2} \approx 7{,}07\ \text{V}$, soit $\frac{10}{\sqrt2}$ ✔.`
      ],
      rule: String.raw`Sinusoïde d'amplitude $A$ : $U_{\text{eff}} = \dfrac{A}{\sqrt{2}}$`,
      pitfall: String.raw`Confondre valeur efficace, valeur moyenne et moyenne de $|u|$.`,
      mistakes: [
        { expr: '20/pi', msg: String.raw`$\frac{2A}{\pi}$ est la valeur moyenne de $|u|$ (signal redressé), pas la valeur efficace, qui utilise le carré.` },
        { expr: '5', msg: String.raw`$U_{\text{eff}} = \frac{A}{\sqrt{2}}$, pas $\frac{A}{2}$ : la racine porte sur le 2.` },
        { expr: '50', msg: String.raw`$50 = \langle u^2\rangle$ est la moyenne du carré : il faut encore prendre la racine carrée.` }
      ],
      hint: String.raw`$\langle\sin^2\rangle = \dfrac{1}{2}$ sur une période, puis $U_{\text{eff}} = \sqrt{\langle u^2\rangle}$.`,
      explain: String.raw`$\langle u^2\rangle = 100 \times \frac12 = 50$, donc $U_{\text{eff}} = \sqrt{50} = 5\sqrt{2} \approx 7{,}07\ \text{V}$.` },
    { id: 'm6-x-039', level: 3, check: 'value', vars: [],
      topic: 'Valeur efficace', sec: 'm6-s-applications',
      prompt: String.raw`Un signal en dents de scie de période $T$ vaut $s(t) = \dfrac{t}{T}$ pour $t \in [0, T[$. Calcule sa valeur efficace (exacte).`,
      answer: '1/sqrt(3)',
      steps: [
        String.raw`Rappel : $S_{\text{eff}} = \sqrt{\langle s^2\rangle}$ avec $\langle s^2\rangle = \frac{1}{T}\int_0^T s^2(t)\,\mathrm{d}t$ (moyenne du carré sur une période).`,
        String.raw`$s^2(t) = \frac{t^2}{T^2}$, donc $\int_0^T\frac{t^2}{T^2}\,\mathrm{d}t = \frac{1}{T^2}\left[\frac{t^3}{3}\right]_0^T = \frac{1}{T^2}\cdot\frac{T^3}{3} = \frac{T}{3}$.`,
        String.raw`Moyenne : $\langle s^2\rangle = \frac{1}{T}\cdot\frac{T}{3} = \frac{1}{3}$.`,
        String.raw`$S_{\text{eff}} = \sqrt{\frac{1}{3}} = \frac{1}{\sqrt 3} \approx 0{,}577$, entre la moyenne $\frac12$ et le maximum $1$ ✔.`
      ],
      rule: String.raw`$S_{\text{eff}} = \sqrt{\dfrac{1}{T}\displaystyle\int_0^T s^2(t)\,\mathrm{d}t}$`,
      pitfall: String.raw`Oublier la racine carrée finale, ou confondre avec la valeur moyenne.`,
      mistakes: [
        { expr: '1/3', msg: String.raw`$\frac{1}{3} = \langle s^2\rangle$ est la moyenne du carré : n'oublie pas la racine carrée finale.` },
        { expr: '1/2', msg: String.raw`$\frac{1}{2}$ est la valeur <b>moyenne</b> du signal, pas sa valeur efficace (qui moyenne le carré).` }
      ],
      hint: String.raw`$S_{\text{eff}}^2 = \dfrac{1}{T}\displaystyle\int_0^T \frac{t^2}{T^2}\,\mathrm{d}t$.`,
      explain: String.raw`$\langle s^2\rangle = \frac{1}{T}\int_0^T\frac{t^2}{T^2}\,\mathrm{d}t = \frac13$, donc $S_{\text{eff}} = \dfrac{1}{\sqrt{3}} \approx 0{,}577$.` },
    { id: 'm6-x-040', level: 3, check: 'value', vars: [],
      topic: 'Intégrale à borne variable', sec: 'm6-s-integrale',
      prompt: String.raw`Soit $F(x) = \displaystyle\int_0^{x^2}\sqrt{1+t}\,\mathrm{d}t$. Calcule $F'(2)$ (valeur exacte).`,
      answer: '4*sqrt(5)',
      steps: [
        String.raw`Rappel : si $G$ est une primitive de $f$, $F(x) = \int_0^{v(x)} f(t)\,\mathrm{d}t = G\big(v(x)\big) - G(0)$ ; en dérivant cette composée, $F'(x) = v'(x)\,f\big(v(x)\big)$.`,
        String.raw`Ici $f(t) = \sqrt{1+t}$, $v(x) = x^2$ et $v'(x) = 2x$ : $F'(x) = 2x\sqrt{1 + x^2}$.`,
        String.raw`En $x = 2$ : $F'(2) = 2 \times 2 \times \sqrt{1 + 4} = 4\sqrt{5}$.`,
        String.raw`Vérification : $F(x) = \left[\frac23(1+t)^{3/2}\right]_0^{x^2} = \frac23(1 + x^2)^{3/2} - \frac23$, et $F'(x) = \frac23 \cdot \frac32 \cdot 2x\,(1+x^2)^{1/2} = 2x\sqrt{1+x^2}$ ✔.`
      ],
      rule: String.raw`$\dfrac{\mathrm{d}}{\mathrm{d}x}\displaystyle\int_a^{v(x)} f(t)\,\mathrm{d}t = v'(x)\,f\big(v(x)\big)$`,
      pitfall: String.raw`Oublier le facteur $v'(x)$, ou évaluer $f$ en $x$ au lieu de $v(x)$.`,
      mistakes: [
        { expr: 'sqrt(5)', msg: String.raw`Il manque le facteur $v'(x) = 2x$ : la borne supérieure est $x^2$, il faut dériver cette composée.` },
        { expr: '4*sqrt(3)', msg: String.raw`On évalue l'intégrande en la borne $v(2) = 4$ (soit $\sqrt{1 + 4}$), pas en $x = 2$.` }
      ],
      hint: String.raw`$\dfrac{\mathrm{d}}{\mathrm{d}x}\displaystyle\int_0^{v(x)} f(t)\,\mathrm{d}t = v'(x)\,f\big(v(x)\big)$.`,
      explain: String.raw`$F'(x) = 2x\sqrt{1+x^2}$ (dérivée d'une intégrale à borne $x^2$), donc $F'(2) = 4\sqrt{5}$.` }
  ]
});
