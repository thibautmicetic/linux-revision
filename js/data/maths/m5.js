/* Maths — Chapitre 5 : Dérivation */
APP.registerChapter({
  subject: 'maths',
  id: 'm5', num: 5,
  title: 'Dérivation',
  subtitle: 'Dérivées usuelles, règles de calcul, applications',

  /* =====================================================================
   *  SECTIONS (fiches de cours)
   * ===================================================================== */
  sections: [
    {
      id: 'm5-s-def',
      title: 'Nombre dérivé et tangente',
      html: String.raw`
<h3>Taux d'accroissement</h3>
<p>Soit $f$ définie sur un intervalle $I$ et $a \in I$. Le <b>taux d'accroissement</b> de $f$ entre $a$ et $a+h$ ($h \neq 0$) est
$$\tau_a(h) = \frac{f(a+h)-f(a)}{h}.$$
C'est la pente de la <b>corde</b> (sécante) qui relie les points $A\big(a, f(a)\big)$ et $M\big(a+h, f(a+h)\big)$ de la courbe.</p>

<h3>Nombre dérivé, fonction dérivée</h3>
<p>$f$ est <b>dérivable en $a$</b> si $\tau_a(h)$ admet une limite <b>finie</b> quand $h \to 0$. Cette limite est le <b>nombre dérivé</b> :
$$f'(a) = \lim_{h\to 0}\frac{f(a+h)-f(a)}{h} = \lim_{x\to a}\frac{f(x)-f(a)}{x-a}.$$
Si $f$ est dérivable en tout point de $I$, la fonction $f' : x \mapsto f'(x)$ est la <b>fonction dérivée</b>. Notations : $f'(x)$, $\dfrac{\mathrm{d}f}{\mathrm{d}x}$ (physique), $\dot{x}(t)$ (dérivée par rapport au temps en mécanique).</p>

<h3>Interprétation géométrique : la tangente</h3>
<p>Quand $h \to 0$, la sécante pivote autour de $A$ et tend vers la <b>tangente</b> en $A$, droite de pente $f'(a)$ passant par $A$ :
$$T_a :\quad y = f'(a)\,(x-a) + f(a).$$</p>
<div class="widget" data-w="plot" data-f="x^2;2*x-1" data-x="-2;3" data-y="-2;6"></div>
<p>Ci-dessus : la parabole $y = x^2$ et sa tangente au point d'abscisse $1$ : $y = 2(x-1) + 1 = 2x - 1$.</p>

<h3>Approximation affine (développement limité d'ordre 1)</h3>
<p>$f$ est dérivable en $a$ si et seulement si $f(a+h) = f(a) + f'(a)\,h + h\,\varepsilon(h)$ avec $\varepsilon(h) \to 0$. Pour $h$ petit :
$$f(a+h) \approx f(a) + f'(a)\,h.$$
Exemple : $\sqrt{4{,}02} \approx \sqrt{4} + \frac{1}{2\sqrt{4}}\times 0{,}02 = 2{,}005$ (valeur exacte $2{,}004\,99\ldots$).</p>

<h3>Méthode : limites remarquables = nombres dérivés</h3>
<p>Reconnaître un taux d'accroissement donne des limites classiques :
$\displaystyle\lim_{x\to 0}\frac{\mathrm{e}^x - 1}{x} = \exp'(0) = 1$, $\displaystyle\lim_{x\to 0}\frac{\sin x}{x} = \sin'(0) = 1$, $\displaystyle\lim_{x\to 0}\frac{\ln(1+x)}{x} = \ln'(1) = 1$.</p>

<h3>Dérivabilité et continuité</h3>
<p><b>Dérivable en $a$ ⇒ continue en $a$.</b> La réciproque est <b>fausse</b> :</p>
<ul>
<li>$x \mapsto |x|$ est continue en $0$ mais $\tau_0(h) = \frac{|h|}{h}$ vaut $1$ si $h \gt 0$ et $-1$ si $h \lt 0$ : dérivées à droite et à gauche différentes (<b>point anguleux</b>) ;</li>
<li>$x \mapsto \sqrt{x}$ en $0$ : $\tau_0(h) = \frac{1}{\sqrt{h}} \to +\infty$ : <b>tangente verticale</b>, pas dérivable.</li>
</ul>

<div class="callout tip"><b>Exemple corrigé</b> $f(x) = x^2$ en $a = 3$ : $\dfrac{(3+h)^2 - 9}{h} = \dfrac{6h + h^2}{h} = 6 + h \xrightarrow[h\to 0]{} 6$. Donc $f'(3) = 6$ et la tangente en $3$ est $y = 6(x-3) + 9 = 6x - 9$.</div>
<div class="callout warn"><b>Pièges classiques</b><ul>
<li>Inverser $f(a)$ et $f'(a)$ dans l'équation de la tangente.</li>
<li>Écrire $(x+a)$ au lieu de $(x-a)$ : la tangente doit passer par le point $\big(a, f(a)\big)$ — vérifie en remplaçant $x$ par $a$.</li>
<li>Croire qu'une fonction continue est forcément dérivable.</li>
</ul></div>
<div class="callout key"><b>À retenir</b> $f'(a)$ = limite du taux d'accroissement = <b>pente de la tangente</b>. Tangente : $y = f'(a)(x-a)+f(a)$.</div>
`
    },
    {
      id: 'm5-s-usuelles',
      title: 'Dérivées usuelles',
      html: String.raw`
<p>Tableau à connaître <b>par cœur</b> (dans les deux sens : il sert aussi pour les primitives).</p>
<table class="tbl">
<tr><th>Fonction $f(x)$</th><th>Dérivée $f'(x)$</th><th>Où ?</th></tr>
<tr><td>$k$ (constante)</td><td>$0$</td><td>$\mathbb{R}$</td></tr>
<tr><td>$x^n$ ($n \in \mathbb{N}^*$)</td><td>$n\,x^{n-1}$</td><td>$\mathbb{R}$</td></tr>
<tr><td>$\dfrac{1}{x}$</td><td>$-\dfrac{1}{x^2}$</td><td>$\mathbb{R}^*$</td></tr>
<tr><td>$\dfrac{1}{x^n}$ ($n \in \mathbb{N}^*$)</td><td>$-\dfrac{n}{x^{n+1}}$</td><td>$\mathbb{R}^*$</td></tr>
<tr><td>$x^\alpha$ ($\alpha \in \mathbb{R}$)</td><td>$\alpha\,x^{\alpha-1}$</td><td>$]0, +\infty[$</td></tr>
<tr><td>$\sqrt{x}$</td><td>$\dfrac{1}{2\sqrt{x}}$</td><td>$]0, +\infty[$ (pas en $0$)</td></tr>
<tr><td>$\mathrm{e}^x$</td><td>$\mathrm{e}^x$</td><td>$\mathbb{R}$</td></tr>
<tr><td>$\ln x$</td><td>$\dfrac{1}{x}$</td><td>$]0, +\infty[$</td></tr>
<tr><td>$\ln|x|$</td><td>$\dfrac{1}{x}$</td><td>$\mathbb{R}^*$</td></tr>
<tr><td>$a^x = \mathrm{e}^{x\ln a}$ ($a \gt 0$)</td><td>$\ln(a)\,a^x$</td><td>$\mathbb{R}$</td></tr>
<tr><td>$\sin x$</td><td>$\cos x$</td><td>$\mathbb{R}$</td></tr>
<tr><td>$\cos x$</td><td>$-\sin x$</td><td>$\mathbb{R}$</td></tr>
<tr><td>$\tan x$</td><td>$1 + \tan^2 x = \dfrac{1}{\cos^2 x}$</td><td>$x \neq \frac{\pi}{2} + k\pi$</td></tr>
<tr><td>$\arcsin x$</td><td>$\dfrac{1}{\sqrt{1-x^2}}$</td><td>$]-1, 1[$</td></tr>
<tr><td>$\arccos x$</td><td>$-\dfrac{1}{\sqrt{1-x^2}}$</td><td>$]-1, 1[$</td></tr>
<tr><td>$\arctan x$</td><td>$\dfrac{1}{1+x^2}$</td><td>$\mathbb{R}$</td></tr>
<tr><td>$\operatorname{ch} x$</td><td>$\operatorname{sh} x$</td><td>$\mathbb{R}$</td></tr>
<tr><td>$\operatorname{sh} x$</td><td>$\operatorname{ch} x$</td><td>$\mathbb{R}$</td></tr>
<tr><td>$\operatorname{th} x$</td><td>$1 - \operatorname{th}^2 x = \dfrac{1}{\operatorname{ch}^2 x}$</td><td>$\mathbb{R}$</td></tr>
</table>

<div class="grid2">
<div class="mini"><h4>Le cycle trigonométrique</h4><p>$\sin \to \cos \to -\sin \to -\cos \to \sin$ : chaque dérivation « avance d'un quart de tour », d'où $\sin^{(n)}(x) = \sin\left(x + n\frac{\pi}{2}\right)$.</p></div>
<div class="mini"><h4>Trigonométrie hyperbolique</h4><p>$\operatorname{ch} x = \frac{\mathrm{e}^x + \mathrm{e}^{-x}}{2}$, $\operatorname{sh} x = \frac{\mathrm{e}^x - \mathrm{e}^{-x}}{2}$, $\operatorname{ch}^2 x - \operatorname{sh}^2 x = 1$. Ici <b>aucun signe moins</b> : $\operatorname{ch}' = \operatorname{sh}$ et $\operatorname{sh}' = \operatorname{ch}$.</p></div>
</div>
<div class="widget" data-w="plot" data-f="sin(x);cos(x)" data-x="-6.3;6.3" data-y="-1.5;1.5"></div>
<p>Observe : là où $\sin$ atteint un maximum (tangente horizontale), $\cos = \sin'$ s'annule ; là où $\sin$ croît, $\cos \gt 0$.</p>

<div class="callout tip"><b>Exemple corrigé : dérivée de $a^x$</b> On écrit $a^x = \mathrm{e}^{x\ln a}$, de la forme $\mathrm{e}^u$ avec $u = x\ln a$, $u' = \ln a$. Donc $(a^x)' = \ln(a)\,\mathrm{e}^{x\ln a} = \ln(a)\,a^x$. Par exemple $(2^x)' = \ln(2)\,2^x \approx 0{,}69 \times 2^x$.<br>
<b>Dérivée de $\operatorname{th}$</b> : $\operatorname{th} = \frac{\operatorname{sh}}{\operatorname{ch}}$, quotient : $\frac{\operatorname{ch}^2 - \operatorname{sh}^2}{\operatorname{ch}^2} = \frac{1}{\operatorname{ch}^2} = 1 - \operatorname{th}^2$.</div>
<div class="callout warn"><b>Pièges classiques</b><ul>
<li>$(a^x)' \neq x\,a^{x-1}$ : la règle $(x^n)' = nx^{n-1}$ ne vaut que si l'<b>exposant est constant</b>.</li>
<li>$(\cos x)' = -\sin x$ (le signe moins !), mais $(\operatorname{ch} x)' = +\operatorname{sh} x$.</li>
<li>$(\tan x)' = 1 + \tan^2 x$ alors que $(\operatorname{th} x)' = 1 - \operatorname{th}^2 x$.</li>
<li>$\sqrt{\ }$ n'est pas dérivable en $0$ ; $\arcsin$ et $\arccos$ ne le sont pas en $\pm 1$.</li>
</ul></div>
<div class="callout key"><b>À retenir</b> Les dérivées de $\arcsin$, $\arccos$, $\arctan$ sont <b>algébriques</b> (racines, fractions) : c'est pour cela qu'on les retrouve comme primitives de $\frac{1}{\sqrt{1-x^2}}$ et $\frac{1}{1+x^2}$.</div>
`
    },
    {
      id: 'm5-s-regles',
      title: 'Règles de calcul et dérivée de la réciproque',
      html: String.raw`
<h3>Opérations sur les fonctions dérivables</h3>
<table class="tbl">
<tr><th>Opération</th><th>Formule</th></tr>
<tr><td>Linéarité</td><td>$(\lambda u + \mu v)' = \lambda u' + \mu v'$</td></tr>
<tr><td>Produit</td><td>$(uv)' = u'v + uv'$</td></tr>
<tr><td>Inverse ($v \neq 0$)</td><td>$\left(\dfrac{1}{v}\right)' = -\dfrac{v'}{v^2}$</td></tr>
<tr><td>Quotient ($v \neq 0$)</td><td>$\left(\dfrac{u}{v}\right)' = \dfrac{u'v - uv'}{v^2}$</td></tr>
<tr><td>Composée</td><td>$(v \circ u)' = u' \times (v' \circ u)$, c'est-à-dire $\big[v(u(x))\big]' = u'(x)\,v'\big(u(x)\big)$</td></tr>
</table>

<h3>Formes composées à connaître</h3>
<table class="tbl">
<tr><th>Fonction</th><th>Dérivée</th><th>Fonction</th><th>Dérivée</th></tr>
<tr><td>$u^n$</td><td>$n\,u'\,u^{n-1}$</td><td>$\mathrm{e}^u$</td><td>$u'\,\mathrm{e}^u$</td></tr>
<tr><td>$\sqrt{u}$</td><td>$\dfrac{u'}{2\sqrt{u}}$</td><td>$\ln|u|$</td><td>$\dfrac{u'}{u}$</td></tr>
<tr><td>$\dfrac{1}{u}$</td><td>$-\dfrac{u'}{u^2}$</td><td>$u^\alpha$ ($u \gt 0$)</td><td>$\alpha\,u'\,u^{\alpha-1}$</td></tr>
<tr><td>$\sin u$</td><td>$u'\cos u$</td><td>$\cos u$</td><td>$-u'\sin u$</td></tr>
<tr><td>$\tan u$</td><td>$u'(1+\tan^2 u)$</td><td>$\arctan u$</td><td>$\dfrac{u'}{1+u^2}$</td></tr>
<tr><td>$\arcsin u$</td><td>$\dfrac{u'}{\sqrt{1-u^2}}$</td><td>$f(ax+b)$</td><td>$a\,f'(ax+b)$</td></tr>
</table>

<h3>Méthode</h3>
<div class="flow"><span>Repérer la structure (somme, produit, quotient, composée)</span><span>Nommer $u$, $v$ et calculer $u'$, $v'$</span><span>Appliquer la formule</span><span>Simplifier, factoriser (pour le signe)</span></div>

<div class="callout tip"><b>Exemples corrigés</b>
$f(x) = x\,\mathrm{e}^{-2x}$ : produit avec $u = x$, $v = \mathrm{e}^{-2x}$, $u' = 1$, $v' = -2\mathrm{e}^{-2x}$. Donc $f'(x) = \mathrm{e}^{-2x} - 2x\,\mathrm{e}^{-2x} = (1-2x)\,\mathrm{e}^{-2x}$.<br>
$g(x) = \ln(1 + \cos^2 x)$ : forme $\ln u$ avec $u = 1 + \cos^2 x$, $u' = 2\cos x \times (-\sin x)$. Donc $g'(x) = \dfrac{-2\sin x\cos x}{1+\cos^2 x}$.<br>
$h(x) = \dfrac{x}{x^2+1}$ : quotient, $h'(x) = \dfrac{1\cdot(x^2+1) - x\cdot 2x}{(x^2+1)^2} = \dfrac{1-x^2}{(x^2+1)^2}$.</div>

<h3>Dérivée de la fonction réciproque</h3>
<p>Si $f$ est continue et strictement monotone sur un intervalle $I$, dérivable en $x_0$ avec $f'(x_0) \neq 0$, alors $f^{-1}$ est dérivable en $y_0 = f(x_0)$ et
$$(f^{-1})'(y_0) = \frac{1}{f'(x_0)} = \frac{1}{f'\big(f^{-1}(y_0)\big)}.$$
Idée : on dérive $f\big(f^{-1}(y)\big) = y$ : $f'\big(f^{-1}(y)\big) \times (f^{-1})'(y) = 1$. Graphiquement, les deux courbes sont symétriques par rapport à la droite $y = x$ : les <b>pentes s'inversent</b>. Si $f'(x_0) = 0$, la réciproque a une tangente verticale (ex. $\sqrt[3]{y}$ en $0$).</p>
<div class="callout tip"><b>Exemple corrigé : $(\arctan)'$, $(\arcsin)'$, $(\ln)'$</b>
$\arctan$ est la réciproque de $\tan$ sur $]-\frac{\pi}{2}, \frac{\pi}{2}[$. Avec $x = \tan\theta$ : $(\arctan)'(x) = \dfrac{1}{1+\tan^2\theta} = \dfrac{1}{1+x^2}$.<br>
$(\arcsin)'(x) = \dfrac{1}{\cos(\arcsin x)} = \dfrac{1}{\sqrt{1-x^2}}$, car $\cos \geq 0$ sur $[-\frac{\pi}{2}, \frac{\pi}{2}]$ et $\cos^2 = 1 - \sin^2$.<br>
$(\ln)'(y) = \dfrac{1}{\exp(\ln y)} = \dfrac{1}{y}$.</div>

<h4>Exposant variable : passer par l'exponentielle</h4>
<p>Pour $u \gt 0$ : $u^v = \mathrm{e}^{v\ln u}$, donc $(u^v)' = \left(v'\ln u + v\dfrac{u'}{u}\right)u^v$. Exemple : $(x^x)' = (\ln x + 1)\,x^x$.</p>

<div class="callout warn"><b>Pièges classiques</b><ul>
<li>$(uv)' \neq u'v'$ et $\left(\frac{u}{v}\right)' \neq \frac{u'}{v'}$.</li>
<li>Quotient : c'est $u'v - uv'$ <b>dans cet ordre</b> ; à l'envers on obtient l'opposé.</li>
<li>Oubli de $u'$ dans une composée : $(\sin 3x)' = 3\cos 3x$, pas $\cos 3x$ ; $\big((2x+1)^4\big)' = 8(2x+1)^3$, pas $4(2x+1)^3$.</li>
<li>$(x^x)'$ n'est ni $x\cdot x^{x-1}$ (exposant variable) ni $\ln(x)\,x^x$ (base variable).</li>
</ul></div>
<div class="callout key"><b>À retenir</b> Composée : « dérivée de l'extérieur évaluée en l'intérieur, <b>fois</b> dérivée de l'intérieur ». Réciproque : $(f^{-1})' = \dfrac{1}{f' \circ f^{-1}}$.</div>
`
    },
    {
      id: 'm5-s-variations',
      title: 'Sens de variation et extremums',
      html: String.raw`
<h3>Signe de la dérivée et monotonie</h3>
<p>Soit $f$ dérivable sur un <b>intervalle</b> $I$ :</p>
<ul>
<li>$f' \geq 0$ sur $I$ ⇔ $f$ croissante sur $I$ ; $f' \leq 0$ ⇔ $f$ décroissante ;</li>
<li>$f' \gt 0$ sur $I$ (sauf éventuellement en des points isolés où elle s'annule) ⇒ $f$ <b>strictement</b> croissante ;</li>
<li>$f' = 0$ sur $I$ ⇔ $f$ constante sur $I$.</li>
</ul>

<h3>Extremums locaux</h3>
<p><b>Condition nécessaire.</b> Si $f$ est dérivable en $a$, point <b>intérieur</b> à $I$, et admet un extremum local en $a$, alors $f'(a) = 0$ ($a$ est un <b>point critique</b>).</p>
<p><b>Conditions suffisantes.</b> Si $f'$ s'annule en $a$ <b>en changeant de signe</b>, $f$ admet un extremum local en $a$ : maximum si $f'$ passe de $+$ à $-$, minimum si $f'$ passe de $-$ à $+$. Avec la dérivée seconde : $f'(a) = 0$ et $f''(a) \gt 0$ ⇒ minimum local ; $f'(a) = 0$ et $f''(a) \lt 0$ ⇒ maximum local.</p>

<h3>Méthode : étude d'une fonction</h3>
<div class="flow"><span>Domaine de définition</span><span>Dérivée, factorisée</span><span>Signe de $f'$</span><span>Tableau de variations + limites</span><span>Extremums, tangentes</span></div>

<div class="callout tip"><b>Exemple corrigé</b> $f(x) = x^3 - 3x$ sur $\mathbb{R}$. $f'(x) = 3x^2 - 3 = 3(x-1)(x+1)$.
<ul><li>$f' \gt 0$ sur $]-\infty, -1[$ et sur $]1, +\infty[$ : $f$ croissante ;</li><li>$f' \lt 0$ sur $]-1, 1[$ : $f$ décroissante.</li></ul>
Maximum local $f(-1) = 2$, minimum local $f(1) = -2$ (ce ne sont pas des extremums globaux : $f \to \pm\infty$).</div>
<div class="widget" data-w="plot" data-f="x^3-3*x" data-x="-2.5;2.5" data-y="-4;4"></div>

<h3>Application : démontrer une inégalité</h3>
<p>Pour montrer $f \leq g$ sur $I$, on étudie $h = g - f$ : on cherche son minimum et on vérifie qu'il est $\geq 0$. Exemple : $\mathrm{e}^x \geq 1 + x$ : $h(x) = \mathrm{e}^x - 1 - x$, $h'(x) = \mathrm{e}^x - 1$ du signe de $x$, minimum $h(0) = 0$.</p>

<div class="callout warn"><b>Pièges classiques</b><ul>
<li>$f'(a) = 0$ ne suffit pas : $x \mapsto x^3$ vérifie $f'(0) = 0$ mais n'a pas d'extremum en $0$ (point d'inflexion à tangente horizontale).</li>
<li>Un extremum peut se trouver au <b>bord</b> de l'intervalle, ou en un point où $f$ n'est pas dérivable ($|x|$ en $0$) : $f'$ ne s'y annule pas forcément.</li>
<li>Le lien signe/variations exige un <b>intervalle</b> : $x \mapsto -\frac{1}{x}$ a une dérivée $\frac{1}{x^2} \gt 0$ sur $\mathbb{R}^*$ mais n'est pas croissante sur $\mathbb{R}^*$ ($f(-1) = 1 \gt f(1) = -1$).</li>
</ul></div>
<div class="callout key"><b>À retenir</b> On étudie le <b>signe</b> de $f'$ : factoriser la dérivée est presque toujours la bonne idée. Extremum intérieur ⇒ $f' = 0$, mais pas l'inverse.</div>
`
    },
    {
      id: 'm5-s-convexite',
      title: 'Convexité et dérivée seconde',
      html: String.raw`
<h3>Définition</h3>
<p>$f$ est <b>convexe</b> sur $I$ si sa courbe est <b>sous ses cordes</b> : pour tous $x, y \in I$ et $t \in [0, 1]$,
$$f\big(tx + (1-t)y\big) \leq t\,f(x) + (1-t)\,f(y).$$
$f$ est <b>concave</b> si $-f$ est convexe (courbe au-dessus de ses cordes).</p>

<h3>Caractérisation par les dérivées</h3>
<ul>
<li>$f$ dérivable : $f$ convexe ⇔ $f'$ croissante ⇔ la courbe est <b>au-dessus de toutes ses tangentes</b> : $f(x) \geq f(a) + f'(a)(x-a)$.</li>
<li>$f$ deux fois dérivable : $f$ convexe ⇔ $f'' \geq 0$ ; $f$ concave ⇔ $f'' \leq 0$.</li>
</ul>
<p>Interprétation physique : si $x(t)$ est une position, $\ddot{x}(t)$ est l'accélération ; $f''$ mesure la façon dont la pente varie (la « courbure »).</p>

<h3>Point d'inflexion</h3>
<p>Point où la courbe <b>traverse sa tangente</b> : la convexité change. Si $f''$ s'annule <b>en changeant de signe</b> en $a$, le point $\big(a, f(a)\big)$ est un point d'inflexion. Exemples : $\sin$ en $0$ ($\sin'' = -\sin$ change de signe), $x^3$ en $0$.</p>

<h3>Inégalités de convexité classiques</h3>
<ul>
<li>$\mathrm{e}^x \geq 1 + x$ pour tout réel $x$ (exp convexe, tangente en $0$) ;</li>
<li>$\ln(1+x) \leq x$ pour $x \gt -1$ ($\ln$ concave, tangente en $1$) ;</li>
<li>$\sin x \leq x$ pour $x \geq 0$, et $\frac{2}{\pi}x \leq \sin x$ sur $[0, \frac{\pi}{2}]$ ($\sin$ concave sur $[0, \pi]$, donc au-dessus de sa corde).</li>
</ul>
<div class="widget" data-w="plot" data-f="exp(x);1+x" data-x="-3;2.5" data-y="-1.5;5"></div>

<div class="callout tip"><b>Exemple corrigé</b> Montrer que $\ln(1+x) \leq x$ pour $x \gt -1$. Posons $g(x) = x - \ln(1+x)$ : $g'(x) = 1 - \dfrac{1}{1+x} = \dfrac{x}{1+x}$, du signe de $x$ (car $1 + x \gt 0$). $g$ décroît sur $]-1, 0]$ et croît sur $[0, +\infty[$ : son minimum est $g(0) = 0$, donc $g \geq 0$.<br>
Autre méthode : $(\ln(1+x))'' = -\dfrac{1}{(1+x)^2} \lt 0$, donc la fonction est concave et sous sa tangente en $0$, qui est $y = x$.</div>
<div class="callout warn"><b>Pièges classiques</b><ul>
<li>$f''(a) = 0$ ne suffit pas pour une inflexion : $x^4$ a $f''(0) = 0$ mais reste convexe.</li>
<li>Convexe ne veut pas dire croissante ($x^2$ est convexe et décroissante sur $\mathbb{R}^-$).</li>
</ul></div>
<div class="callout key"><b>À retenir</b> $f'' \geq 0$ : convexe, courbe au-dessus de ses tangentes (« sourire ») ; $f'' \leq 0$ : concave (« grimace »). Inflexion : $f''$ change de signe.</div>
`
    },
    {
      id: 'm5-s-successives',
      title: 'Dérivées successives et formule de Leibniz',
      html: String.raw`
<h3>Dérivées d'ordre supérieur</h3>
<p>On pose $f^{(0)} = f$ et $f^{(n+1)} = \big(f^{(n)}\big)'$ ; ainsi $f^{(1)} = f'$, $f^{(2)} = f''$. $f$ est de <b>classe $C^n$</b> sur $I$ si elle est $n$ fois dérivable et si $f^{(n)}$ est continue ; de classe $C^\infty$ si c'est vrai pour tout $n$ (polynômes, $\exp$, $\sin$, $\cos$, $\ln$ sur $]0, +\infty[$…).</p>

<h3>Dérivées n-ièmes usuelles</h3>
<table class="tbl">
<tr><th>$f(x)$</th><th>$f^{(n)}(x)$</th></tr>
<tr><td>$\mathrm{e}^{ax}$</td><td>$a^n\,\mathrm{e}^{ax}$</td></tr>
<tr><td>$\sin x$</td><td>$\sin\left(x + n\frac{\pi}{2}\right)$</td></tr>
<tr><td>$\cos x$</td><td>$\cos\left(x + n\frac{\pi}{2}\right)$</td></tr>
<tr><td>$x^p$ ($p \in \mathbb{N}$)</td><td>$\dfrac{p!}{(p-n)!}\,x^{p-n}$ si $n \leq p$, et $0$ si $n \gt p$</td></tr>
<tr><td>$\dfrac{1}{x}$</td><td>$\dfrac{(-1)^n\,n!}{x^{n+1}}$</td></tr>
<tr><td>$\ln x$ ($n \geq 1$)</td><td>$\dfrac{(-1)^{n-1}\,(n-1)!}{x^n}$</td></tr>
</table>

<h3>Formule de Leibniz</h3>
<p>Si $f$ et $g$ sont $n$ fois dérivables :
$$(fg)^{(n)} = \sum_{k=0}^{n}\binom{n}{k}\,f^{(k)}\,g^{(n-k)}.$$
Mêmes coefficients que le binôme de Newton. Pour $n = 2$ : $(fg)'' = f''g + 2f'g' + fg''$.</p>

<div class="callout tip"><b>Exemple corrigé</b> $h(x) = x^2\,\mathrm{e}^x$. On prend $f = x^2$ (dérivées $2x$, $2$, puis $0$) et $g = \mathrm{e}^x$ (toutes ses dérivées valent $\mathrm{e}^x$). Seuls les termes $k = 0, 1, 2$ sont non nuls :
$$h^{(n)}(x) = \binom{n}{0}x^2\mathrm{e}^x + \binom{n}{1}2x\,\mathrm{e}^x + \binom{n}{2}\,2\,\mathrm{e}^x = \big(x^2 + 2nx + n(n-1)\big)\mathrm{e}^x.$$
Vérification pour $n = 1$ : $(x^2 + 2x)\mathrm{e}^x$, ce que donne bien la règle du produit.</div>
<div class="callout warn"><b>Pièges classiques</b><ul>
<li>Mettre les dérivées d'ordre $k$ sur le <b>polynôme</b> : elles s'annulent vite et la somme se réduit à quelques termes.</li>
<li>Les coefficients sont $\binom{n}{k}$, pas $1$ ni $\frac{1}{k!}$.</li>
<li>$\sin''' = -\cos$ (et non $\cos$) : suis le cycle.</li>
</ul></div>
<div class="callout key"><b>À retenir</b> Leibniz = binôme de Newton pour les dérivées d'un produit. $(\mathrm{e}^{ax})^{(n)} = a^n\mathrm{e}^{ax}$, $\sin^{(n)}(x) = \sin(x + n\frac{\pi}{2})$.</div>
`
    },
    {
      id: 'm5-s-taf',
      title: 'Théorème de Rolle et accroissements finis',
      html: String.raw`
<h3>Théorème de Rolle</h3>
<p>Si $f$ est <b>continue sur $[a, b]$</b>, <b>dérivable sur $]a, b[$</b> et $f(a) = f(b)$, alors il existe $c \in\, ]a, b[$ tel que $f'(c) = 0$. Géométriquement : une tangente horizontale entre deux points de même hauteur.</p>

<h3>Égalité des accroissements finis (TAF)</h3>
<p>Si $f$ est continue sur $[a, b]$ et dérivable sur $]a, b[$, il existe $c \in\, ]a, b[$ tel que
$$f(b) - f(a) = f'(c)\,(b - a).$$
Il existe une tangente <b>parallèle à la corde</b>. En cinématique : sur un trajet, il y a un instant où la vitesse instantanée égale la vitesse moyenne.</p>

<h3>Inégalité des accroissements finis (IAF)</h3>
<ul>
<li>Si $m \leq f' \leq M$ sur $[a, b]$, alors $m(b-a) \leq f(b) - f(a) \leq M(b-a)$.</li>
<li>Si $|f'| \leq M$ sur un intervalle $I$, alors pour tous $x, y \in I$ : $|f(x) - f(y)| \leq M\,|x - y|$ ($f$ est <b>$M$-lipschitzienne</b>).</li>
</ul>
<p>Exemple : $|\cos| \leq 1$ donc $|\sin x - \sin y| \leq |x - y|$ pour tous réels, et en particulier $|\sin x| \leq |x|$.</p>

<div class="callout tip"><b>Exemple corrigé</b> Montrer que pour $0 \lt a \lt b$ : $\dfrac{b-a}{b} \lt \ln b - \ln a \lt \dfrac{b-a}{a}$.<br>
$\ln$ est continue et dérivable sur $[a, b]$. Le TAF donne $c \in\, ]a, b[$ tel que $\ln b - \ln a = \dfrac{b-a}{c}$. Or $a \lt c \lt b$ donne $\dfrac{1}{b} \lt \dfrac{1}{c} \lt \dfrac{1}{a}$ ; on multiplie par $b - a \gt 0$. Avec $a = 1$, $b = 1+x$ : $\dfrac{x}{1+x} \lt \ln(1+x) \lt x$ pour $x \gt 0$.</div>
<div class="callout warn"><b>Pièges classiques</b><ul>
<li>Le réel $c$ n'est en général ni unique ni explicite : le TAF sert à <b>encadrer</b>, pas à calculer.</li>
<li>Toutes les hypothèses comptent : $|x|$ sur $[-1, 1]$ vérifie $f(-1) = f(1)$ mais $f'$ ne s'annule jamais (non dérivable en $0$).</li>
<li>Le TAF est faux pour une fonction à valeurs complexes ($t \mapsto \mathrm{e}^{\mathrm{i}t}$ sur $[0, 2\pi]$) ; l'inégalité, elle, reste vraie.</li>
</ul></div>
<div class="callout key"><b>À retenir</b> $f(b) - f(a) = f'(c)(b-a)$. Dérivée bornée par $M$ ⇒ $|f(x) - f(y)| \leq M|x-y|$.</div>
`
    },
    {
      id: 'm5-s-partielles',
      title: 'Fonctions de deux variables : dérivées partielles, différentielle',
      html: String.raw`
<h3>Dérivées partielles</h3>
<p>Soit $f : (x, y) \mapsto f(x, y)$. La <b>dérivée partielle par rapport à $x$</b> en $(a, b)$ est la dérivée de la fonction d'une variable $x \mapsto f(x, b)$, c'est-à-dire avec $y$ <b>figé</b> :
$$\frac{\partial f}{\partial x}(a, b) = \lim_{h \to 0}\frac{f(a+h, b) - f(a, b)}{h}.$$
De même pour $\dfrac{\partial f}{\partial y}$ en figeant $x$.</p>
<p><b>Méthode :</b> pour $\frac{\partial f}{\partial x}$, on dérive par rapport à $x$ en traitant $y$ comme une <b>constante</b> (toutes les règles d'une variable s'appliquent).</p>
<div class="callout tip"><b>Exemple corrigé</b> $f(x, y) = x^2y + \sin(xy)$.<br>
$\dfrac{\partial f}{\partial x} = 2xy + y\cos(xy)$ ($y$ constant : $x^2y$ se dérive en $2xy$ et $\sin(xy)$ en $y\cos(xy)$).<br>
$\dfrac{\partial f}{\partial y} = x^2 + x\cos(xy)$.</div>

<h3>Dérivées secondes, théorème de Schwarz</h3>
<p>On note $\dfrac{\partial^2 f}{\partial x^2}$, $\dfrac{\partial^2 f}{\partial x\,\partial y} = \dfrac{\partial}{\partial x}\left(\dfrac{\partial f}{\partial y}\right)$… Si $f$ est de classe $C^2$, l'ordre de dérivation n'importe pas : $\dfrac{\partial^2 f}{\partial x\,\partial y} = \dfrac{\partial^2 f}{\partial y\,\partial x}$ (Schwarz).</p>

<h3>Gradient</h3>
<p>$$\overrightarrow{\operatorname{grad}}\, f = \nabla f = \left(\frac{\partial f}{\partial x}, \frac{\partial f}{\partial y}\right).$$
Il indique la direction de <b>plus forte croissance</b> de $f$ et il est orthogonal aux lignes de niveau. En physique : $\vec{E} = -\overrightarrow{\operatorname{grad}}\,V$.</p>

<h3>Différentielle</h3>
<p>$$\mathrm{d}f = \frac{\partial f}{\partial x}\,\mathrm{d}x + \frac{\partial f}{\partial y}\,\mathrm{d}y,$$
qui traduit l'approximation affine : $f(a+h, b+k) \approx f(a, b) + \dfrac{\partial f}{\partial x}(a,b)\,h + \dfrac{\partial f}{\partial y}(a,b)\,k$.</p>

<h3>Application : propagation des incertitudes</h3>
<p>Si $G = f(x, y)$ est calculée à partir de mesures $x \pm \Delta x$ et $y \pm \Delta y$ :</p>
<ul>
<li>majorant (« pire cas ») : $\Delta G = \left|\dfrac{\partial f}{\partial x}\right|\Delta x + \left|\dfrac{\partial f}{\partial y}\right|\Delta y$ ;</li>
<li>incertitudes-types indépendantes : $u(G) = \sqrt{\left(\dfrac{\partial f}{\partial x}\right)^2u(x)^2 + \left(\dfrac{\partial f}{\partial y}\right)^2u(y)^2}$.</li>
</ul>
<p><b>Dérivée logarithmique</b> (produits, quotients, puissances) : si $G = k\,x^\alpha y^\beta$, alors $\ln|G| = \ln|k| + \alpha\ln|x| + \beta\ln|y|$, d'où $\dfrac{\mathrm{d}G}{G} = \alpha\dfrac{\mathrm{d}x}{x} + \beta\dfrac{\mathrm{d}y}{y}$ et
$$\frac{\Delta G}{|G|} = |\alpha|\frac{\Delta x}{|x|} + |\beta|\frac{\Delta y}{|y|}.$$</p>
<div class="callout tip"><b>Exemple corrigé</b> $P = \dfrac{U^2}{R}$ avec $U = 10{,}0 \pm 0{,}1\ \text{V}$ et $R = 50 \pm 1\ \Omega$. $P = 2{,}0\ \text{W}$.<br>
$\dfrac{\Delta P}{P} = 2\dfrac{\Delta U}{U} + \dfrac{\Delta R}{R} = 2 \times 1\,\% + 2\,\% = 4\,\%$, donc $\Delta P = 0{,}08\ \text{W}$ : $P = 2{,}00 \pm 0{,}08\ \text{W}$.</div>
<div class="callout warn"><b>Pièges classiques</b><ul>
<li>Pour $\frac{\partial f}{\partial x}$, on ne dérive <b>pas</b> les facteurs qui ne contiennent que $y$ : $\frac{\partial}{\partial x}(x^2y^3) = 2xy^3$.</li>
<li>Oublier l'exposant dans la dérivée logarithmique ($U^2$ compte <b>deux fois</b>).</li>
<li>Les incertitudes ne se compensent pas : on additionne des <b>valeurs absolues</b>, même pour un quotient.</li>
<li>Incertitudes <b>absolues</b> qui s'ajoutent pour une somme ou une différence, incertitudes <b>relatives</b> pour un produit ou un quotient.</li>
</ul></div>
<div class="callout key"><b>À retenir</b> Dérivée partielle = dériver en figeant les autres variables. $\mathrm{d}f = f_x\,\mathrm{d}x + f_y\,\mathrm{d}y$ sert directement au calcul d'incertitudes.</div>
`
    },
    {
      id: 'm5-s-memo',
      title: 'Mémo : tableau récapitulatif',
      html: String.raw`
<div class="grid2">
<div class="mini"><h4>Définition</h4><p>$f'(a) = \displaystyle\lim_{h\to 0}\frac{f(a+h)-f(a)}{h}$<br>Tangente : $y = f'(a)(x-a) + f(a)$<br>$f(a+h) \approx f(a) + f'(a)h$</p></div>
<div class="mini"><h4>Règles</h4><p>$(uv)' = u'v + uv'$<br>$\left(\frac{u}{v}\right)' = \frac{u'v - uv'}{v^2}$<br>$(v\circ u)' = u'\,(v'\circ u)$<br>$(f^{-1})' = \frac{1}{f'\circ f^{-1}}$</p></div>
</div>
<table class="tbl">
<tr><th>$f$</th><th>$f'$</th><th>$f$</th><th>$f'$</th></tr>
<tr><td>$x^n$</td><td>$nx^{n-1}$</td><td>$u^n$</td><td>$nu'u^{n-1}$</td></tr>
<tr><td>$\frac{1}{x}$</td><td>$-\frac{1}{x^2}$</td><td>$\frac{1}{u}$</td><td>$-\frac{u'}{u^2}$</td></tr>
<tr><td>$\sqrt{x}$</td><td>$\frac{1}{2\sqrt{x}}$</td><td>$\sqrt{u}$</td><td>$\frac{u'}{2\sqrt{u}}$</td></tr>
<tr><td>$\mathrm{e}^x$</td><td>$\mathrm{e}^x$</td><td>$\mathrm{e}^u$</td><td>$u'\mathrm{e}^u$</td></tr>
<tr><td>$\ln|x|$</td><td>$\frac{1}{x}$</td><td>$\ln|u|$</td><td>$\frac{u'}{u}$</td></tr>
<tr><td>$a^x$</td><td>$\ln(a)\,a^x$</td><td>$\sin u$</td><td>$u'\cos u$</td></tr>
<tr><td>$\sin x$</td><td>$\cos x$</td><td>$\cos u$</td><td>$-u'\sin u$</td></tr>
<tr><td>$\cos x$</td><td>$-\sin x$</td><td>$\tan u$</td><td>$u'(1+\tan^2 u)$</td></tr>
<tr><td>$\tan x$</td><td>$1+\tan^2 x = \frac{1}{\cos^2 x}$</td><td>$\arctan u$</td><td>$\frac{u'}{1+u^2}$</td></tr>
<tr><td>$\arcsin x$</td><td>$\frac{1}{\sqrt{1-x^2}}$</td><td>$\arccos x$</td><td>$-\frac{1}{\sqrt{1-x^2}}$</td></tr>
<tr><td>$\arctan x$</td><td>$\frac{1}{1+x^2}$</td><td>$\operatorname{th} x$</td><td>$1 - \operatorname{th}^2 x$</td></tr>
<tr><td>$\operatorname{ch} x$</td><td>$\operatorname{sh} x$</td><td>$\operatorname{sh} x$</td><td>$\operatorname{ch} x$</td></tr>
</table>
<div class="grid2">
<div class="mini"><h4>Variations, convexité</h4><p>$f' \geq 0$ sur un intervalle ⇔ $f$ croissante.<br>Extremum intérieur ⇒ $f'(a) = 0$ (réciproque fausse : $x^3$).<br>$f'' \geq 0$ ⇔ convexe ⇔ au-dessus des tangentes.<br>Inflexion : $f''$ change de signe.</p></div>
<div class="mini"><h4>Ordre n, TAF</h4><p>$(fg)^{(n)} = \sum_{k=0}^{n}\binom{n}{k}f^{(k)}g^{(n-k)}$<br>$\sin^{(n)}x = \sin(x + n\frac{\pi}{2})$<br>TAF : $f(b) - f(a) = f'(c)(b-a)$<br>$|f'| \leq M$ ⇒ $|f(x)-f(y)| \leq M|x-y|$</p></div>
<div class="mini"><h4>Deux variables</h4><p>$\frac{\partial f}{\partial x}$ : dériver en $x$, $y$ figé.<br>$\nabla f = \left(\frac{\partial f}{\partial x}, \frac{\partial f}{\partial y}\right)$<br>$\mathrm{d}f = \frac{\partial f}{\partial x}\mathrm{d}x + \frac{\partial f}{\partial y}\mathrm{d}y$</p></div>
<div class="mini"><h4>Incertitudes</h4><p>$G = k\,x^\alpha y^\beta$ :<br>$\frac{\Delta G}{|G|} = |\alpha|\frac{\Delta x}{|x|} + |\beta|\frac{\Delta y}{|y|}$<br>Somme : $\Delta(x+y) = \Delta x + \Delta y$</p></div>
</div>
<div class="callout key"><b>Réflexes</b> Toujours écrire $u$ et $u'$ avant d'appliquer une formule composée ; factoriser $f'$ pour étudier son signe ; vérifier une tangente en remplaçant $x$ par $a$.</div>
`
    }
  ],

  /* =====================================================================
   *  FORMULAIRE
   * ===================================================================== */
  formulas: [
    { id: 'm5-fo-def', name: 'Nombre dérivé', tex: String.raw`f'(a) = \lim_{h \to 0}\frac{f(a+h) - f(a)}{h}`, note: String.raw`Limite finie du taux d'accroissement ; aussi $\displaystyle\lim_{x\to a}\frac{f(x)-f(a)}{x-a}$.` },
    { id: 'm5-fo-tangente', name: 'Équation de la tangente', tex: String.raw`y = f'(a)\,(x-a) + f(a)`, note: String.raw`Au point d'abscisse $a$ ; pente $f'(a)$.` },
    { id: 'm5-fo-approx', name: 'Approximation affine', tex: String.raw`f(a+h) \approx f(a) + f'(a)\,h`, note: String.raw`Pour $h$ petit (développement limité d'ordre 1).` },
    { id: 'm5-fo-xn', name: 'Dérivée d\'une puissance', tex: String.raw`(x^n)' = n\,x^{n-1}`, note: String.raw`$n \in \mathbb{Z}$ ; plus généralement $(x^\alpha)' = \alpha x^{\alpha-1}$ sur $]0,+\infty[$.` },
    { id: 'm5-fo-inv', name: 'Dérivée de 1/x', tex: String.raw`\left(\frac{1}{x}\right)' = -\frac{1}{x^2}`, note: String.raw`Et $\left(\frac{1}{x^n}\right)' = -\frac{n}{x^{n+1}}$.` },
    { id: 'm5-fo-sqrt', name: 'Dérivée de la racine', tex: String.raw`(\sqrt{x})' = \frac{1}{2\sqrt{x}}`, note: String.raw`Pour $x \gt 0$ (pas dérivable en $0$).` },
    { id: 'm5-fo-exp', name: 'Dérivée de l\'exponentielle', tex: String.raw`(\mathrm{e}^x)' = \mathrm{e}^x` },
    { id: 'm5-fo-ln', name: 'Dérivée du logarithme', tex: String.raw`(\ln x)' = \frac{1}{x}`, note: String.raw`Et $(\ln|x|)' = \frac{1}{x}$ sur $\mathbb{R}^*$.` },
    { id: 'm5-fo-ax', name: 'Dérivée de a^x', tex: String.raw`(a^x)' = \ln(a)\,a^x`, note: String.raw`Car $a^x = \mathrm{e}^{x\ln a}$ ($a \gt 0$).` },
    { id: 'm5-fo-sin', name: 'Dérivée du sinus', tex: String.raw`(\sin x)' = \cos x` },
    { id: 'm5-fo-cos', name: 'Dérivée du cosinus', tex: String.raw`(\cos x)' = -\sin x`, note: String.raw`Attention au signe moins.` },
    { id: 'm5-fo-tan', name: 'Dérivée de la tangente', tex: String.raw`(\tan x)' = 1 + \tan^2 x = \frac{1}{\cos^2 x}` },
    { id: 'm5-fo-arcsin', name: 'Dérivée de arcsin', tex: String.raw`(\arcsin x)' = \frac{1}{\sqrt{1-x^2}}`, note: String.raw`Sur $]-1, 1[$.` },
    { id: 'm5-fo-arccos', name: 'Dérivée de arccos', tex: String.raw`(\arccos x)' = -\frac{1}{\sqrt{1-x^2}}`, note: String.raw`Sur $]-1, 1[$ ; $\arcsin + \arccos = \frac{\pi}{2}$.` },
    { id: 'm5-fo-arctan', name: 'Dérivée de arctan', tex: String.raw`(\arctan x)' = \frac{1}{1+x^2}` },
    { id: 'm5-fo-ch', name: 'Dérivée de ch', tex: String.raw`(\operatorname{ch} x)' = \operatorname{sh} x`, note: String.raw`Pas de signe moins (contrairement à $\cos$).` },
    { id: 'm5-fo-sh', name: 'Dérivée de sh', tex: String.raw`(\operatorname{sh} x)' = \operatorname{ch} x` },
    { id: 'm5-fo-th', name: 'Dérivée de th', tex: String.raw`(\operatorname{th} x)' = 1 - \operatorname{th}^2 x = \frac{1}{\operatorname{ch}^2 x}` },
    { id: 'm5-fo-lin', name: 'Linéarité', tex: String.raw`(\lambda u + \mu v)' = \lambda u' + \mu v'` },
    { id: 'm5-fo-prod', name: 'Dérivée d\'un produit', tex: String.raw`(uv)' = u'v + uv'`, note: String.raw`Et non $u'v'$.` },
    { id: 'm5-fo-quot', name: 'Dérivée d\'un quotient', tex: String.raw`\left(\frac{u}{v}\right)' = \frac{u'v - uv'}{v^2}`, note: String.raw`Cas particulier : $\left(\frac{1}{v}\right)' = -\frac{v'}{v^2}$.` },
    { id: 'm5-fo-comp', name: 'Dérivée d\'une composée', tex: String.raw`(v \circ u)' = u' \times (v' \circ u)`, note: String.raw`$\big[v(u(x))\big]' = u'(x)\,v'\big(u(x)\big)$.` },
    { id: 'm5-fo-un', name: 'Puissance d\'une fonction', tex: String.raw`(u^n)' = n\,u'\,u^{n-1}` },
    { id: 'm5-fo-eu', name: 'Exponentielle d\'une fonction', tex: String.raw`(\mathrm{e}^u)' = u'\,\mathrm{e}^u` },
    { id: 'm5-fo-lnu', name: 'Logarithme d\'une fonction', tex: String.raw`(\ln|u|)' = \frac{u'}{u}` },
    { id: 'm5-fo-sqrtu', name: 'Racine d\'une fonction', tex: String.raw`(\sqrt{u})' = \frac{u'}{2\sqrt{u}}`, note: String.raw`Là où $u \gt 0$.` },
    { id: 'm5-fo-trigu', name: 'Sinus et cosinus d\'une fonction', tex: String.raw`(\sin u)' = u'\cos u \qquad (\cos u)' = -u'\sin u` },
    { id: 'm5-fo-arctanu', name: 'Arctangente d\'une fonction', tex: String.raw`(\arctan u)' = \frac{u'}{1+u^2}` },
    { id: 'm5-fo-affine', name: 'Composée avec une fonction affine', tex: String.raw`\big(f(ax+b)\big)' = a\,f'(ax+b)`, note: String.raw`Ex. : $(\cos 5x)' = -5\sin 5x$.` },
    { id: 'm5-fo-uv', name: 'Exposant variable', tex: String.raw`(u^v)' = \left(v'\ln u + v\,\frac{u'}{u}\right)u^v`, note: String.raw`On écrit $u^v = \mathrm{e}^{v\ln u}$ ($u \gt 0$) ; ex. $(x^x)' = (\ln x + 1)x^x$.` },
    { id: 'm5-fo-recip', name: 'Dérivée de la réciproque', tex: String.raw`(f^{-1})'(y) = \frac{1}{f'\big(f^{-1}(y)\big)}`, note: String.raw`Si $f'\big(f^{-1}(y)\big) \neq 0$.` },
    { id: 'm5-fo-convexe', name: 'Convexité', tex: String.raw`f'' \geq 0 \iff f \text{ convexe} \iff f(x) \geq f(a) + f'(a)(x-a)`, note: String.raw`Courbe au-dessus de ses tangentes ; concave si $f'' \leq 0$.` },
    { id: 'm5-fo-eaxn', name: 'Dérivée n-ième de e^(ax)', tex: String.raw`\left(\mathrm{e}^{ax}\right)^{(n)} = a^n\,\mathrm{e}^{ax}` },
    { id: 'm5-fo-sinn', name: 'Dérivée n-ième de sin et cos', tex: String.raw`\sin^{(n)}(x) = \sin\left(x + n\frac{\pi}{2}\right) \qquad \cos^{(n)}(x) = \cos\left(x + n\frac{\pi}{2}\right)` },
    { id: 'm5-fo-invn', name: 'Dérivée n-ième de 1/x', tex: String.raw`\left(\frac{1}{x}\right)^{(n)} = \frac{(-1)^n\,n!}{x^{n+1}}` },
    { id: 'm5-fo-leibniz', name: 'Formule de Leibniz', tex: String.raw`(fg)^{(n)} = \sum_{k=0}^{n}\binom{n}{k} f^{(k)}\,g^{(n-k)}`, note: String.raw`Pour $n = 2$ : $(fg)'' = f''g + 2f'g' + fg''$.` },
    { id: 'm5-fo-rolle', name: 'Théorème de Rolle', tex: String.raw`f(a) = f(b) \Rightarrow \exists\, c \in\, ]a,b[,\ f'(c) = 0`, note: String.raw`$f$ continue sur $[a,b]$, dérivable sur $]a,b[$.` },
    { id: 'm5-fo-taf', name: 'Accroissements finis', tex: String.raw`f(b) - f(a) = f'(c)\,(b-a), \quad c \in\, ]a,b[`, note: String.raw`$f$ continue sur $[a,b]$, dérivable sur $]a,b[$.` },
    { id: 'm5-fo-iaf', name: 'Inégalité des accroissements finis', tex: String.raw`|f'| \leq M \ \Rightarrow\ |f(x) - f(y)| \leq M\,|x-y|`, note: String.raw`Ex. : $|\sin x - \sin y| \leq |x-y|$.` },
    { id: 'm5-fo-partielle', name: 'Dérivée partielle', tex: String.raw`\frac{\partial f}{\partial x}(a,b) = \lim_{h\to 0}\frac{f(a+h,b) - f(a,b)}{h}`, note: String.raw`On dérive par rapport à $x$, $y$ étant figé.` },
    { id: 'm5-fo-schwarz', name: 'Théorème de Schwarz', tex: String.raw`\frac{\partial^2 f}{\partial x\,\partial y} = \frac{\partial^2 f}{\partial y\,\partial x}`, note: String.raw`Pour $f$ de classe $C^2$.` },
    { id: 'm5-fo-grad', name: 'Gradient', tex: String.raw`\overrightarrow{\operatorname{grad}}\, f = \nabla f = \left(\frac{\partial f}{\partial x}, \frac{\partial f}{\partial y}\right)`, note: String.raw`Direction de plus forte croissance ; $\vec{E} = -\overrightarrow{\operatorname{grad}}\,V$.` },
    { id: 'm5-fo-diff', name: 'Différentielle', tex: String.raw`\mathrm{d}f = \frac{\partial f}{\partial x}\,\mathrm{d}x + \frac{\partial f}{\partial y}\,\mathrm{d}y` },
    { id: 'm5-fo-incert', name: 'Incertitude (majorant)', tex: String.raw`\Delta G = \left|\frac{\partial f}{\partial x}\right|\Delta x + \left|\frac{\partial f}{\partial y}\right|\Delta y`, note: String.raw`Version « incertitudes-types » : $u(G) = \sqrt{f_x^2\,u(x)^2 + f_y^2\,u(y)^2}$.` },
    { id: 'm5-fo-logderiv', name: 'Incertitude relative (dérivée logarithmique)', tex: String.raw`G = k\,x^\alpha y^\beta \ \Rightarrow\ \frac{\Delta G}{|G|} = |\alpha|\frac{\Delta x}{|x|} + |\beta|\frac{\Delta y}{|y|}` }
  ],

  /* =====================================================================
   *  FLASHCARDS
   * ===================================================================== */
  flashcards: [
    { id: 'm5-f-derive', front: String.raw`Définition : $f$ dérivable en $a$, nombre dérivé`, back: String.raw`$f$ est dérivable en $a$ si le taux d'accroissement $\dfrac{f(a+h)-f(a)}{h}$ admet une limite <b>finie</b> quand $h \to 0$. Cette limite est $f'(a)$.` },
    { id: 'm5-f-tangente', front: String.raw`Interprétation géométrique de $f'(a)$ et équation de la tangente`, back: String.raw`$f'(a)$ est la <b>pente de la tangente</b> à la courbe au point $\big(a, f(a)\big)$ (limite des pentes des sécantes). Tangente : $y = f'(a)(x-a) + f(a)$.` },
    { id: 'm5-f-continuite', front: String.raw`Dérivabilité et continuité : quel lien ?`, back: String.raw`Dérivable en $a$ ⇒ continue en $a$. Réciproque <b>fausse</b> : $|x|$ est continue mais pas dérivable en $0$ (point anguleux) ; $\sqrt{x}$ en $0$ (tangente verticale).` },
    { id: 'm5-f-approx', front: String.raw`Approximation affine d'une fonction au voisinage de $a$`, back: String.raw`$f(a+h) = f(a) + f'(a)h + h\varepsilon(h)$ avec $\varepsilon(h) \to 0$. Pour $h$ petit : $f(a+h) \approx f(a) + f'(a)h$ (la courbe se confond avec sa tangente).` },
    { id: 'm5-f-composee', front: String.raw`Dérivée d'une composée $v(u(x))$`, back: String.raw`$\big[v(u(x))\big]' = u'(x)\times v'\big(u(x)\big)$ : dérivée de l'extérieur évaluée en l'intérieur, fois la dérivée de l'intérieur. Ex. : $(\mathrm{e}^{x^2})' = 2x\,\mathrm{e}^{x^2}$.` },
    { id: 'm5-f-prodquot', front: String.raw`Dérivées d'un produit et d'un quotient`, back: String.raw`$(uv)' = u'v + uv'$ ; $\left(\dfrac{u}{v}\right)' = \dfrac{u'v - uv'}{v^2}$ (ordre important : à l'envers on obtient l'opposé).` },
    { id: 'm5-f-reciproque', front: String.raw`Dérivée de la fonction réciproque`, back: String.raw`Si $f$ est strictement monotone, dérivable et $f'(f^{-1}(y)) \neq 0$ : $(f^{-1})'(y) = \dfrac{1}{f'\big(f^{-1}(y)\big)}$. Ex. : $(\arctan)'(x) = \frac{1}{1+\tan^2(\arctan x)} = \frac{1}{1+x^2}$.` },
    { id: 'm5-f-variations', front: String.raw`Lien entre signe de $f'$ et variations de $f$`, back: String.raw`Sur un <b>intervalle</b> : $f' \geq 0$ ⇔ $f$ croissante ; $f' \gt 0$ (sauf en des points isolés) ⇒ strictement croissante ; $f' = 0$ ⇔ $f$ constante. Faux sur une réunion d'intervalles ($-1/x$ sur $\mathbb{R}^*$).` },
    { id: 'm5-f-extremum', front: String.raw`Extremum local : condition nécessaire, condition suffisante`, back: String.raw`Nécessaire : extremum en $a$ <b>intérieur</b> et $f$ dérivable ⇒ $f'(a) = 0$. Suffisante : $f'$ s'annule en <b>changeant de signe</b> (ou $f'(a) = 0$ et $f''(a) \neq 0$). Contre-exemple : $x^3$ en $0$.` },
    { id: 'm5-f-convexite', front: String.raw`Fonction convexe : caractérisations`, back: String.raw`Courbe sous ses cordes ⇔ ($f$ dérivable) $f'$ croissante ⇔ courbe au-dessus de ses tangentes ⇔ ($f$ deux fois dérivable) $f'' \geq 0$.` },
    { id: 'm5-f-inflexion', front: String.raw`Point d'inflexion`, back: String.raw`Point où la courbe traverse sa tangente (changement de convexité). Si $f''$ s'annule <b>en changeant de signe</b> en $a$, c'est un point d'inflexion. $f''(a) = 0$ seul ne suffit pas ($x^4$).` },
    { id: 'm5-f-leibniz', front: String.raw`Formule de Leibniz`, back: String.raw`$(fg)^{(n)} = \displaystyle\sum_{k=0}^{n}\binom{n}{k}f^{(k)}g^{(n-k)}$. Ex. : $(x^2\mathrm{e}^x)^{(n)} = (x^2 + 2nx + n(n-1))\mathrm{e}^x$.` },
    { id: 'm5-f-rolle', front: String.raw`Théorème de Rolle (hypothèses et conclusion)`, back: String.raw`$f$ continue sur $[a,b]$, dérivable sur $]a,b[$, $f(a) = f(b)$ ⇒ il existe $c \in\, ]a,b[$ tel que $f'(c) = 0$ (tangente horizontale).` },
    { id: 'm5-f-taf', front: String.raw`Accroissements finis : égalité et inégalité`, back: String.raw`Égalité : $f(b) - f(a) = f'(c)(b-a)$ pour un $c \in\, ]a,b[$ (tangente parallèle à la corde). Inégalité : $|f'| \leq M$ sur $I$ ⇒ $|f(x) - f(y)| \leq M|x-y|$.` },
    { id: 'm5-f-partielle', front: String.raw`Dérivée partielle $\dfrac{\partial f}{\partial x}$ : définition et méthode`, back: String.raw`Dérivée de $x \mapsto f(x, y)$ à $y$ <b>fixé</b> : on dérive par rapport à $x$ en traitant $y$ comme une constante. Ex. : $\frac{\partial}{\partial x}(x^2y^3) = 2xy^3$.` },
    { id: 'm5-f-gradient', front: String.raw`Gradient et différentielle d'une fonction de deux variables`, back: String.raw`$\nabla f = \left(\frac{\partial f}{\partial x}, \frac{\partial f}{\partial y}\right)$ : direction de plus forte croissance. $\mathrm{d}f = \frac{\partial f}{\partial x}\mathrm{d}x + \frac{\partial f}{\partial y}\mathrm{d}y$ : variation au premier ordre.` },
    { id: 'm5-f-incertitude', front: String.raw`Incertitude relative sur $G = k\,x^\alpha y^\beta$`, back: String.raw`Dérivée logarithmique : $\dfrac{\Delta G}{|G|} = |\alpha|\dfrac{\Delta x}{|x|} + |\beta|\dfrac{\Delta y}{|y|}$. Ex. : $P = RI^2$ ⇒ $\frac{\Delta P}{P} = \frac{\Delta R}{R} + 2\frac{\Delta I}{I}$.` }
  ],

  /* =====================================================================
   *  QCM
   * ===================================================================== */
  quiz: [
    { id: 'm5-q-001', level: 1, q: String.raw`Que vaut la dérivée de $f(x) = x^n$ ($n \in \mathbb{N}^*$) ?`,
      choices: [String.raw`$x^{n-1}$`, String.raw`$n\,x^{n-1}$`, String.raw`$n\,x^{n}$`, String.raw`$\dfrac{x^{n+1}}{n+1}$`], answer: 1,
      explain: String.raw`On multiplie par l'exposant et on le diminue de 1 : $(x^n)' = n\,x^{n-1}$. Ex. : $(x^3)' = 3x^2$.`,
      why: { 0: String.raw`Il manque le facteur $n$ (l'exposant « descend » devant).`, 2: String.raw`On multiplie bien par $n$, mais l'exposant doit baisser de 1.`, 3: String.raw`C'est une <b>primitive</b> de $x^n$, pas sa dérivée.` } },
    { id: 'm5-q-002', level: 1, q: String.raw`$(\cos x)' = $ ?`,
      choices: [String.raw`$\sin x$`, String.raw`$-\cos x$`, String.raw`$-\sin x$`, String.raw`$\cos x$`], answer: 2,
      explain: String.raw`$(\cos x)' = -\sin x$ : en $0^+$, $\cos$ décroît, donc sa dérivée y est négative.`,
      why: { 0: String.raw`Oubli du signe moins : c'est $(\sin x)' = \cos x$ qui n'a pas de signe.`, 1: String.raw`$-\cos x$ est la dérivée <b>seconde</b> de $\cos$.`, 3: String.raw`$\cos$ n'est pas sa propre dérivée (c'est le cas de $\mathrm{e}^x$).` } },
    { id: 'm5-q-003', level: 1, q: String.raw`Dérivée de $\ln x$ sur $]0, +\infty[$ ?`,
      choices: [String.raw`$\dfrac{1}{x}$`, String.raw`$x\ln x - x$`, String.raw`$\mathrm{e}^x$`, String.raw`$-\dfrac{1}{x^2}$`], answer: 0,
      explain: String.raw`$(\ln x)' = \dfrac{1}{x}$ (par la dérivée de la réciproque de $\exp$).`,
      why: { 1: String.raw`$x\ln x - x$ est une <b>primitive</b> de $\ln x$.`, 2: String.raw`Confusion avec la fonction réciproque $\exp$.`, 3: String.raw`C'est la dérivée de $\frac{1}{x}$.` } },
    { id: 'm5-q-004', level: 1, q: String.raw`Règle du produit : $(uv)' = $ ?`,
      choices: [String.raw`$u'v'$`, String.raw`$u'v - uv'$`, String.raw`$u'v + uv'$`, String.raw`$\dfrac{u'v + uv'}{v^2}$`], answer: 2,
      explain: String.raw`$(uv)' = u'v + uv'$ : on dérive un facteur à la fois et on additionne.`,
      why: { 0: String.raw`Erreur la plus classique : la dérivée d'un produit n'est pas le produit des dérivées (ex. $(x\cdot x)' = 2x \neq 1$).`, 1: String.raw`Le signe moins appartient au numérateur de la dérivée d'un <b>quotient</b>.`, 3: String.raw`Mélange avec la formule du quotient : pas de dénominateur pour un produit.` } },
    { id: 'm5-q-005', level: 1, q: String.raw`$\left(\dfrac{u}{v}\right)' = $ ?`,
      choices: [String.raw`$\dfrac{u'v - uv'}{v^2}$`, String.raw`$\dfrac{uv' - u'v}{v^2}$`, String.raw`$\dfrac{u'}{v'}$`, String.raw`$\dfrac{u'v - uv'}{v}$`], answer: 0,
      explain: String.raw`$\left(\frac{u}{v}\right)' = \frac{u'v - uv'}{v^2}$ (on commence par dériver le numérateur).`,
      why: { 1: String.raw`Numérateur à l'envers : on obtient l'<b>opposé</b> de la bonne dérivée.`, 2: String.raw`La dérivée d'un quotient n'est pas le quotient des dérivées.`, 3: String.raw`Le dénominateur est $v^2$, pas $v$.` } },
    { id: 'm5-q-006', level: 1, q: String.raw`$(\mathrm{e}^{u})' = $ ?`,
      choices: [String.raw`$\mathrm{e}^{u}$`, String.raw`$u\,\mathrm{e}^{u-1}$`, String.raw`$u'\,\mathrm{e}^{u'}$`, String.raw`$u'\,\mathrm{e}^{u}$`], answer: 3,
      explain: String.raw`Composée de $\exp$ et $u$ : $(\mathrm{e}^u)' = u'\,\exp'(u) = u'\,\mathrm{e}^u$.`,
      why: { 0: String.raw`Oubli du facteur $u'$ (dérivée de l'intérieur).`, 1: String.raw`On a appliqué à tort la règle $(x^n)' = nx^{n-1}$ : ici la base $\mathrm{e}$ est constante et l'exposant varie.`, 2: String.raw`L'exposant reste $u$ : on ne dérive pas à l'intérieur de l'exponentielle.` } },
    { id: 'm5-q-007', level: 1, q: String.raw`$(\sqrt{x})' = $ ? ($x \gt 0$)`,
      choices: [String.raw`$\dfrac{1}{\sqrt{x}}$`, String.raw`$\dfrac{1}{2\sqrt{x}}$`, String.raw`$2\sqrt{x}$`, String.raw`$\dfrac{2}{3}x^{3/2}$`], answer: 1,
      explain: String.raw`$\sqrt{x} = x^{1/2}$ donc $(\sqrt{x})' = \frac{1}{2}x^{-1/2} = \frac{1}{2\sqrt{x}}$.`,
      why: { 0: String.raw`Il manque le facteur $\frac{1}{2}$ (l'exposant $\frac12$ qui descend).`, 2: String.raw`$2\sqrt{x}$ est une <b>primitive</b> de $\frac{1}{\sqrt{x}}$.`, 3: String.raw`$\frac{2}{3}x^{3/2}$ est une <b>primitive</b> de $\sqrt{x}$.` } },
    { id: 'm5-q-008', level: 2, q: String.raw`$(\tan x)' = $ ?`,
      choices: [String.raw`$1 - \tan^2 x$`, String.raw`$-\dfrac{1}{\cos^2 x}$`, String.raw`$\dfrac{1}{\sin^2 x}$`, String.raw`$1 + \tan^2 x$`], answer: 3,
      explain: String.raw`$\left(\frac{\sin}{\cos}\right)' = \frac{\cos^2 + \sin^2}{\cos^2} = \frac{1}{\cos^2 x} = 1 + \tan^2 x$.`,
      why: { 0: String.raw`$1 - \operatorname{th}^2$ est la dérivée de la tangente <b>hyperbolique</b>.`, 1: String.raw`Erreur de signe : $\tan$ est croissante, sa dérivée est positive.`, 2: String.raw`Confusion avec la cotangente, dont la dérivée est $-\frac{1}{\sin^2 x}$.` } },
    { id: 'm5-q-009', level: 1, q: String.raw`$(\arctan x)' = $ ?`,
      choices: [String.raw`$\dfrac{1}{1+x^2}$`, String.raw`$\dfrac{1}{\sqrt{1-x^2}}$`, String.raw`$1 + \tan^2 x$`, String.raw`$-\dfrac{1}{1+x^2}$`], answer: 0,
      explain: String.raw`Dérivée de la réciproque de $\tan$ : $\frac{1}{1+\tan^2(\arctan x)} = \frac{1}{1+x^2}$.`,
      why: { 1: String.raw`C'est la dérivée de $\arcsin$.`, 2: String.raw`C'est la dérivée de $\tan$, pas de sa réciproque.`, 3: String.raw`$\arctan$ est croissante : sa dérivée est positive.` } },
    { id: 'm5-q-010', level: 2, q: String.raw`$(\arccos x)' = $ ? (sur $]-1, 1[$)`,
      choices: [String.raw`$\dfrac{1}{\sqrt{1-x^2}}$`, String.raw`$-\dfrac{1}{\sqrt{1-x^2}}$`, String.raw`$-\dfrac{1}{1+x^2}$`, String.raw`$-\sin x$`], answer: 1,
      explain: String.raw`$\arccos = \frac{\pi}{2} - \arcsin$, donc $(\arccos x)' = -\frac{1}{\sqrt{1-x^2}}$ ($\arccos$ est décroissante).`,
      why: { 0: String.raw`C'est la dérivée de $\arcsin$ ; $\arccos$ est décroissante.`, 2: String.raw`Forme de la dérivée de $\arctan$ (avec un signe en plus) : rien à voir.`, 3: String.raw`C'est la dérivée de $\cos$, pas de sa réciproque.` } },
    { id: 'm5-q-011', level: 1, q: String.raw`$(\operatorname{ch} x)' = $ ?`,
      choices: [String.raw`$-\operatorname{sh} x$`, String.raw`$\operatorname{sh} x$`, String.raw`$\operatorname{ch} x$`], answer: 1,
      explain: String.raw`$\operatorname{ch} x = \frac{\mathrm{e}^x + \mathrm{e}^{-x}}{2}$ donc $(\operatorname{ch} x)' = \frac{\mathrm{e}^x - \mathrm{e}^{-x}}{2} = \operatorname{sh} x$.`,
      why: { 0: String.raw`Pas de signe moins en trigonométrie hyperbolique (contrairement à $(\cos)' = -\sin$).`, 2: String.raw`En dérivant $\mathrm{e}^{-x}$ on obtient $-\mathrm{e}^{-x}$ : on tombe sur $\operatorname{sh}$, pas sur $\operatorname{ch}$.` } },
    { id: 'm5-q-012', level: 2, q: String.raw`$(\operatorname{th} x)' = $ ?`,
      choices: [String.raw`$1 + \operatorname{th}^2 x$`, String.raw`$\dfrac{1}{\operatorname{sh}^2 x}$`, String.raw`$1 - \operatorname{th}^2 x$`, String.raw`$-\dfrac{1}{\operatorname{ch}^2 x}$`], answer: 2,
      explain: String.raw`$\left(\frac{\operatorname{sh}}{\operatorname{ch}}\right)' = \frac{\operatorname{ch}^2 - \operatorname{sh}^2}{\operatorname{ch}^2} = \frac{1}{\operatorname{ch}^2 x} = 1 - \operatorname{th}^2 x$.`,
      why: { 0: String.raw`C'est la forme de $(\tan)'$ ; ici $\operatorname{ch}^2 - \operatorname{sh}^2 = 1$ donne un signe moins.`, 1: String.raw`Le dénominateur est $\operatorname{ch}^2$ (on dérive un quotient par $\operatorname{ch}$).`, 3: String.raw`$\operatorname{th}$ est croissante : sa dérivée est positive.` } },
    { id: 'm5-q-013', level: 2, q: String.raw`Dérivée de $f(x) = 2^x$ ?`,
      choices: [String.raw`$x\,2^{x-1}$`, String.raw`$2^x$`, String.raw`$\dfrac{2^x}{\ln 2}$`, String.raw`$\ln(2)\,2^x$`], answer: 3,
      explain: String.raw`$2^x = \mathrm{e}^{x\ln 2}$ donc $(2^x)' = \ln(2)\,\mathrm{e}^{x\ln 2} = \ln(2)\,2^x$.`,
      why: { 0: String.raw`La règle $(x^n)' = nx^{n-1}$ suppose un exposant <b>constant</b> ; ici c'est l'exposant qui varie.`, 1: String.raw`Seule $\mathrm{e}^x$ est sa propre dérivée.`, 2: String.raw`$\frac{2^x}{\ln 2}$ est une <b>primitive</b> de $2^x$.` } },
    { id: 'm5-q-014', level: 1, q: String.raw`Géométriquement, le nombre dérivé $f'(a)$ est :`,
      choices: [String.raw`la pente de la tangente à la courbe au point d'abscisse $a$`, String.raw`l'ordonnée du point d'abscisse $a$`, String.raw`la pente de la droite reliant l'origine au point $\big(a, f(a)\big)$`, String.raw`l'aire sous la courbe entre $0$ et $a$`], answer: 0,
      explain: String.raw`$f'(a)$ est la limite des pentes des sécantes : c'est la pente (coefficient directeur) de la tangente en $\big(a, f(a)\big)$.`,
      why: { 1: String.raw`L'ordonnée du point, c'est $f(a)$.`, 2: String.raw`C'est la pente d'une corde, $\frac{f(a)}{a}$, pas celle de la tangente.`, 3: String.raw`L'aire sous la courbe relève de l'intégrale.` } },
    { id: 'm5-q-015', level: 1, q: String.raw`Équation de la tangente à la courbe de $f$ au point d'abscisse $a$ :`,
      choices: [String.raw`$y = f(a)(x-a) + f'(a)$`, String.raw`$y = f'(a)(x-a) + f(a)$`, String.raw`$y = f'(a)(x+a) + f(a)$`, String.raw`$y = f'(a)\,x + f(a)$`], answer: 1,
      explain: String.raw`Droite de pente $f'(a)$ passant par $\big(a, f(a)\big)$ : $y = f'(a)(x-a) + f(a)$. Pour $x = a$, on retrouve bien $y = f(a)$.`,
      why: { 0: String.raw`Rôles de $f(a)$ et $f'(a)$ inversés : la pente est $f'(a)$.`, 2: String.raw`Erreur de signe : en $x = a$ on doit retrouver $f(a)$, il faut $(x - a)$.`, 3: String.raw`Oubli du décalage $-a$ : cette droite ne passe pas par $\big(a, f(a)\big)$ (sauf si $a = 0$).` } },
    { id: 'm5-q-016', level: 2, q: String.raw`La fonction $x \mapsto |x|$ en $0$ est :`,
      choices: [String.raw`continue et dérivable`, String.raw`continue mais non dérivable`, String.raw`ni continue ni dérivable`, String.raw`dérivable mais non continue`], answer: 1,
      explain: String.raw`$\frac{|h|}{h}$ vaut $1$ pour $h \gt 0$ et $-1$ pour $h \lt 0$ : pas de limite, donc pas dérivable (point anguleux). Mais $|h| \to 0$ : continue.`,
      why: { 0: String.raw`Dérivées à droite ($+1$) et à gauche ($-1$) différentes : pas dérivable.`, 2: String.raw`$|x|$ est continue en $0$ (pas de saut).`, 3: String.raw`Impossible : dérivable ⇒ continue.` } },
    { id: 'm5-q-017', level: 2, q: String.raw`$f$ est dérivable sur $\mathbb{R}$ et $f'(a) = 0$. Que peut-on affirmer ?`,
      choices: [String.raw`$f$ admet un extremum local en $a$`, String.raw`la tangente en $a$ est horizontale`, String.raw`$f$ est constante au voisinage de $a$`, String.raw`le point d'abscisse $a$ est un point d'inflexion`], answer: 1,
      explain: String.raw`$f'(a) = 0$ dit seulement que la tangente a une pente nulle. Il faut un changement de signe de $f'$ pour conclure à un extremum.`,
      why: { 0: String.raw`Pas forcément : $x^3$ vérifie $f'(0) = 0$ sans extremum.`, 2: String.raw`L'annulation de $f'$ en un seul point ne dit rien de tel ($x^2$ en $0$).`, 3: String.raw`Pas forcément : $x^2$ a $f'(0) = 0$ et un minimum en $0$, pas une inflexion.` } },
    { id: 'm5-q-018', level: 2, q: String.raw`$f$ est deux fois dérivable sur $I$ avec $f'' \gt 0$. Alors :`,
      choices: [String.raw`$f$ est croissante sur $I$`, String.raw`$f$ est convexe : sa courbe est au-dessus de ses tangentes`, String.raw`$f$ est concave sur $I$`, String.raw`$f$ est positive sur $I$`], answer: 1,
      explain: String.raw`$f'' \gt 0$ ⇒ $f'$ croissante ⇒ $f$ convexe, courbe au-dessus de chacune de ses tangentes.`,
      why: { 0: String.raw`$f'' \gt 0$ dit que $f'$ croît, pas que $f' \geq 0$ : $x^2$ décroît sur $\mathbb{R}^-$.`, 2: String.raw`C'est l'inverse : concave correspond à $f'' \leq 0$.`, 3: String.raw`Aucune information sur le signe de $f$ : $x^2 - 1$ est convexe et prend des valeurs négatives.` } },
    { id: 'm5-q-019', level: 2, q: String.raw`Le point $\big(a, f(a)\big)$ est un point d'inflexion si :`,
      choices: [String.raw`$f''(a) = 0$`, String.raw`$f'(a) = 0$`, String.raw`$f''$ s'annule en $a$ en changeant de signe`, String.raw`$f'$ change de signe en $a$`], answer: 2,
      explain: String.raw`Une inflexion est un changement de convexité, donc un changement de signe de $f''$.`,
      why: { 0: String.raw`Insuffisant : $x^4$ a $f''(0) = 0$ mais reste convexe.`, 1: String.raw`$f'(a) = 0$ signifie tangente horizontale, pas inflexion.`, 3: String.raw`Un changement de signe de $f'$ caractérise un <b>extremum</b>.` } },
    { id: 'm5-q-020', level: 2, q: String.raw`$f$ est strictement monotone et dérivable, $y = f(x)$ avec $f'(x) \neq 0$. Alors $(f^{-1})'(y) = $ ?`,
      choices: [String.raw`$-\dfrac{1}{f'(x)}$`, String.raw`$\dfrac{1}{f(x)}$`, String.raw`$\dfrac{1}{f'(x)}$`, String.raw`$f'(x)$`], answer: 2,
      explain: String.raw`En dérivant $f\big(f^{-1}(y)\big) = y$ : $f'(x)\,(f^{-1})'(y) = 1$. Les pentes s'inversent par symétrie par rapport à $y = x$.`,
      why: { 0: String.raw`Pas de signe moins : une fonction croissante a une réciproque croissante.`, 1: String.raw`Confusion entre fonction réciproque $f^{-1}$ et inverse $\frac{1}{f}$.`, 3: String.raw`La symétrie par rapport à $y = x$ échange les axes : la pente devient $\frac{1}{f'(x)}$.` } },
    { id: 'm5-q-021', level: 2, q: String.raw`Formule de Leibniz pour $n = 2$ : $(fg)'' = $ ?`,
      choices: [String.raw`$f''g''$`, String.raw`$f''g + f'g' + fg''$`, String.raw`$f''g + 2f'g' + fg''$`, String.raw`$f''g - 2f'g' + fg''$`], answer: 2,
      explain: String.raw`$(fg)' = f'g + fg'$, puis $(fg)'' = f''g + f'g' + f'g' + fg'' = f''g + 2f'g' + fg''$ (coefficients $\binom{2}{k}$ : 1, 2, 1).`,
      why: { 0: String.raw`Généralisation fausse de « dérivée du produit = produit des dérivées ».`, 1: String.raw`Il manque le coefficient binomial $\binom{2}{1} = 2$ : le terme $f'g'$ apparaît deux fois.`, 3: String.raw`Aucun signe moins : tous les termes de la règle du produit sont positifs.` } },
    { id: 'm5-q-022', level: 2, q: String.raw`Dérivée troisième de $\sin x$ ?`,
      choices: [String.raw`$\cos x$`, String.raw`$-\cos x$`, String.raw`$-\sin x$`, String.raw`$\sin x$`], answer: 1,
      explain: String.raw`$\sin \to \cos \to -\sin \to -\cos$. Formule : $\sin^{(3)}(x) = \sin\left(x + \frac{3\pi}{2}\right) = -\cos x$.`,
      why: { 0: String.raw`C'est la dérivée première (ou erreur de signe sur la troisième).`, 2: String.raw`C'est la dérivée seconde.`, 3: String.raw`C'est la dérivée quatrième.` } },
    { id: 'm5-q-023', level: 2, q: String.raw`Dérivée $n$-ième de $\mathrm{e}^{2x}$ ?`,
      choices: [String.raw`$2\,\mathrm{e}^{2x}$`, String.raw`$2n\,\mathrm{e}^{2x}$`, String.raw`$2^n\,\mathrm{e}^{2x}$`, String.raw`$\mathrm{e}^{2x}$`], answer: 2,
      explain: String.raw`Chaque dérivation multiplie par $2$ : $(\mathrm{e}^{2x})^{(n)} = 2^n\,\mathrm{e}^{2x}$.`,
      why: { 0: String.raw`C'est seulement la dérivée première.`, 1: String.raw`Le facteur $2$ se <b>multiplie</b> à chaque dérivation, il ne s'additionne pas.`, 3: String.raw`Oubli du facteur $2$ apporté par la dérivée de $2x$.` } },
    { id: 'm5-q-024', level: 2, q: String.raw`Le théorème de Rolle s'applique à $f$ sur $[a, b]$ lorsque :`,
      choices: [String.raw`$f$ est continue sur $[a, b]$, dérivable sur $]a, b[$ et $f(a) = f(b)$`, String.raw`$f$ est dérivable sur $]a, b[$`, String.raw`$f$ est continue sur $[a, b]$ et $f(a) = f(b)$`, String.raw`$f(a) = f(b) = 0$, sans autre hypothèse`], answer: 0,
      explain: String.raw`Les trois hypothèses sont nécessaires : continuité sur le fermé, dérivabilité sur l'ouvert, $f(a) = f(b)$. Conclusion : $f'(c) = 0$ pour un $c \in\, ]a, b[$.`,
      why: { 1: String.raw`Il manque $f(a) = f(b)$ et la continuité aux bornes ($x$ sur $[0,1]$ : $f'$ ne s'annule jamais).`, 2: String.raw`Il manque la dérivabilité : $|x|$ sur $[-1, 1]$ est un contre-exemple.`, 3: String.raw`$f(a) = f(b)$ suffit (pas besoin de $0$), mais la continuité et la dérivabilité sont indispensables.` } },
    { id: 'm5-q-025', level: 2, q: String.raw`Le théorème des accroissements finis affirme qu'il existe $c \in\, ]a, b[$ tel que :`,
      choices: [String.raw`$f'(c) = 0$`, String.raw`$f(b) - f(a) = f'(c)(b - a)$`, String.raw`$f(c) = \dfrac{f(a) + f(b)}{2}$`, String.raw`$f'(c) = f(b) - f(a)$`], answer: 1,
      explain: String.raw`Il existe une tangente parallèle à la corde : $f'(c) = \frac{f(b) - f(a)}{b - a}$.`,
      why: { 0: String.raw`C'est le théorème de Rolle (cas particulier $f(a) = f(b)$).`, 2: String.raw`C'est une conséquence du théorème des valeurs intermédiaires, pas le TAF.`, 3: String.raw`Il faut diviser par $b - a$ : $f'(c)$ est une <b>pente</b>.` } },
    { id: 'm5-q-026', level: 3, q: String.raw`Pour tous réels $a$ et $b$, on a $|\sin b - \sin a| \leq$ ?`,
      choices: [String.raw`$|b - a|$`, String.raw`$|\cos b - \cos a|$`, String.raw`$\frac{1}{2}|b - a|$`, String.raw`$|b - a|^2$`], answer: 0,
      explain: String.raw`Inégalité des accroissements finis avec $|\sin'| = |\cos| \leq 1$ : $\sin$ est 1-lipschitzienne.`,
      why: { 1: String.raw`Faux : pour $a = -\frac{\pi}{2}$, $b = \frac{\pi}{2}$, le membre de gauche vaut $2$ et celui de droite $0$.`, 2: String.raw`Faux près de $0$ : $\sin b - \sin a \approx b - a$ car $\cos 0 = 1$.`, 3: String.raw`Faux pour $|b - a|$ petit : $\sin b - \sin a \approx (b - a)\cos a$, bien plus grand que $(b-a)^2$.` } },
    { id: 'm5-q-027', level: 1, q: String.raw`$f(x, y) = x^2y^3$. Que vaut $\dfrac{\partial f}{\partial x}$ ?`,
      choices: [String.raw`$2xy^3$`, String.raw`$3x^2y^2$`, String.raw`$6xy^2$`, String.raw`$2xy^3 + 3x^2y^2$`], answer: 0,
      explain: String.raw`$y$ est traité comme une constante : $\frac{\partial}{\partial x}(x^2y^3) = y^3 \times 2x = 2xy^3$.`,
      why: { 1: String.raw`C'est $\frac{\partial f}{\partial y}$ (on a dérivé par rapport à $y$).`, 2: String.raw`On a dérivé les deux facteurs : $y^3$ est une constante pour $\frac{\partial}{\partial x}$.`, 3: String.raw`C'est la somme des deux dérivées partielles, pas $\frac{\partial f}{\partial x}$.` } },
    { id: 'm5-q-028', level: 2, q: String.raw`Gradient de $f(x, y) = x^2 + y^2$ au point $(1, 2)$ ?`,
      choices: [String.raw`$(1, 2)$`, String.raw`$(2, 4)$`, String.raw`$5$`, String.raw`$(2, 2)$`], answer: 1,
      explain: String.raw`$\nabla f = (2x, 2y)$, donc en $(1, 2)$ : $(2, 4)$.`,
      why: { 0: String.raw`Oubli du facteur 2 de la dérivée de $x^2$.`, 2: String.raw`$5 = f(1, 2)$ ; le gradient est un <b>vecteur</b> de dérivées partielles.`, 3: String.raw`$\frac{\partial f}{\partial y} = 2y = 4$ en $y = 2$.` } },
    { id: 'm5-q-029', level: 2, q: String.raw`Différentielle de $f(x, y) = xy$ ?`,
      choices: [String.raw`$\mathrm{d}f = \mathrm{d}x\,\mathrm{d}y$`, String.raw`$\mathrm{d}f = y\,\mathrm{d}x + x\,\mathrm{d}y$`, String.raw`$\mathrm{d}f = x\,\mathrm{d}x + y\,\mathrm{d}y$`, String.raw`$\mathrm{d}f = \mathrm{d}x + \mathrm{d}y$`], answer: 1,
      explain: String.raw`$\frac{\partial f}{\partial x} = y$, $\frac{\partial f}{\partial y} = x$, d'où $\mathrm{d}f = y\,\mathrm{d}x + x\,\mathrm{d}y$ (c'est la règle du produit).`,
      why: { 0: String.raw`La différentielle est <b>linéaire</b> en $\mathrm{d}x$, $\mathrm{d}y$ : pas de produit de différentielles.`, 2: String.raw`Dérivées partielles inversées : $\frac{\partial (xy)}{\partial x} = y$.`, 3: String.raw`C'est la différentielle de $x + y$.` } },
    { id: 'm5-q-030', level: 2, q: String.raw`On calcule $U = RI$. Incertitude relative (majorant) sur $U$ ?`,
      choices: [String.raw`$\dfrac{\Delta U}{U} = \dfrac{\Delta R}{R}\times\dfrac{\Delta I}{I}$`, String.raw`$\Delta U = \Delta R + \Delta I$`, String.raw`$\dfrac{\Delta U}{U} = \dfrac{\Delta R}{R} + \dfrac{\Delta I}{I}$`, String.raw`$\dfrac{\Delta U}{U} = \dfrac{\Delta R}{R} - \dfrac{\Delta I}{I}$`], answer: 2,
      explain: String.raw`Dérivée logarithmique : $\ln U = \ln R + \ln I$ ⇒ $\frac{\mathrm{d}U}{U} = \frac{\mathrm{d}R}{R} + \frac{\mathrm{d}I}{I}$ ; les incertitudes relatives s'ajoutent.`,
      why: { 0: String.raw`On <b>additionne</b> les incertitudes relatives, on ne les multiplie pas.`, 1: String.raw`Les incertitudes absolues s'ajoutent pour une somme, pas pour un produit (et $\Omega$ + A n'a pas de sens).`, 3: String.raw`Les incertitudes ne se compensent jamais : on ajoute des valeurs absolues.` } },
    { id: 'm5-q-031', level: 1, q: String.raw`Dérivée de $(2x+3)^5$ ?`,
      choices: [String.raw`$5(2x+3)^4$`, String.raw`$10(2x+3)^4$`, String.raw`$10x(2x+3)^4$`, String.raw`$2(2x+3)^5$`], answer: 1,
      explain: String.raw`$(u^5)' = 5u'u^4$ avec $u = 2x+3$, $u' = 2$ : $10(2x+3)^4$.`,
      why: { 0: String.raw`Oubli de $u' = 2$ (dérivée de l'intérieur).`, 2: String.raw`$u' = 2$ (constante), pas $2x$.`, 3: String.raw`L'exposant doit baisser : la règle est $n\,u'\,u^{n-1}$.` } },
    { id: 'm5-q-032', level: 2, q: String.raw`Sur $\mathbb{R}^*$, la dérivée de $\ln|x|$ est :`,
      choices: [String.raw`$\dfrac{1}{|x|}$`, String.raw`$\dfrac{1}{x}$`, String.raw`$-\dfrac{1}{x}$ pour $x \lt 0$`, String.raw`inexistante pour $x \lt 0$`], answer: 1,
      explain: String.raw`Pour $x \lt 0$ : $\ln|x| = \ln(-x)$, de dérivée $\frac{-1}{-x} = \frac{1}{x}$. Donc $(\ln|x|)' = \frac{1}{x}$ sur tout $\mathbb{R}^*$.`,
      why: { 0: String.raw`Pour $x \lt 0$, la dérivée de $\ln(-x)$ est $\frac{-1}{-x} = \frac{1}{x} \lt 0$, pas $\frac{1}{|x|}$.`, 2: String.raw`Erreur de signe : $(\ln(-x))' = \frac{-1}{-x} = \frac{1}{x}$.`, 3: String.raw`$\ln|x|$ est définie et dérivable sur $]-\infty, 0[$.` } },
    { id: 'm5-q-033', level: 2, q: String.raw`Pour $x \gt 0$, les dérivées de $x^\pi$ et de $\pi^x$ sont respectivement :`,
      choices: [String.raw`$\pi x^{\pi-1}$ et $\ln(\pi)\,\pi^x$`, String.raw`$\pi x^{\pi-1}$ et $x\,\pi^{x-1}$`, String.raw`$\ln(\pi)\,x^\pi$ et $\pi^x$`, String.raw`$\ln(x)\,x^\pi$ et $\ln(\pi)\,\pi^x$`], answer: 0,
      explain: String.raw`$x^\pi$ : exposant constant, $(x^\alpha)' = \alpha x^{\alpha-1}$. $\pi^x = \mathrm{e}^{x\ln\pi}$ : exposant variable, dérivée $\ln(\pi)\,\pi^x$.`,
      why: { 1: String.raw`Pour $\pi^x$, c'est l'exposant qui varie : la règle des puissances ne s'applique pas.`, 2: String.raw`Formules inversées entre les deux fonctions.`, 3: String.raw`$x^\pi$ a un exposant constant : $(x^\pi)' = \pi x^{\pi - 1}$.` } },
    { id: 'm5-q-034', level: 3, q: String.raw`$f$ est définie et dérivable sur $\mathbb{R}^*$ avec $f'(x) \gt 0$ pour tout $x \neq 0$. Alors :`,
      choices: [String.raw`$f$ est strictement croissante sur $\mathbb{R}^*$`, String.raw`$f$ est strictement croissante sur $]-\infty, 0[$ et sur $]0, +\infty[$`, String.raw`$f$ est bornée`, String.raw`$f$ s'annule en $0$`], answer: 1,
      explain: String.raw`Le lien signe/variations ne vaut que sur un <b>intervalle</b>. $\mathbb{R}^*$ est la réunion de deux intervalles : on conclut sur chacun séparément.`,
      why: { 0: String.raw`$\mathbb{R}^*$ n'est pas un intervalle : $f(x) = -\frac{1}{x}$ a $f' \gt 0$ mais $f(-1) = 1 \gt f(1) = -1$.`, 2: String.raw`Rien ne l'impose : $f(x) = x$ sur $\mathbb{R}^*$ n'est pas bornée.`, 3: String.raw`$f$ n'est même pas définie en $0$.` } }
  ],

  /* =====================================================================
   *  EXERCICES « tape la formule »
   * ===================================================================== */
  exercises: [
    { id: 'm5-x-001', level: 1, check: 'expr', vars: ['x'],
      prompt: String.raw`Dérive $f(x) = x^5 - 3x^2 + 7x - 2$.`,
      answer: '5*x^4 - 6*x + 7',
      mistakes: [
        { expr: '5*x^5 - 6*x^2 + 7', msg: String.raw`Tu as multiplié par l'exposant sans le diminuer : $(x^n)' = n\,x^{n-1}$.` },
        { expr: '5*x^4 - 6*x + 7 - 2', msg: String.raw`La dérivée d'une constante est nulle : le $-2$ disparaît.` }
      ],
      hint: String.raw`Dérive terme à terme avec $(x^n)' = nx^{n-1}$ ; une constante a une dérivée nulle.`,
      explain: String.raw`$(x^5)' = 5x^4$, $(-3x^2)' = -6x$, $(7x)' = 7$, $(-2)' = 0$. Donc $f'(x) = 5x^4 - 6x + 7$.` },
    { id: 'm5-x-002', level: 1, check: 'expr', vars: ['x'], domain: [0.3, 4],
      prompt: String.raw`Dérive $f(x) = \dfrac{1}{x} + \sqrt{x}$ sur $]0, +\infty[$.`,
      answer: '-1/x^2 + 1/(2*sqrt(x))',
      mistakes: [
        { expr: '1/x^2 + 1/(2*sqrt(x))', msg: String.raw`Signe : $\left(\frac{1}{x}\right)' = -\frac{1}{x^2}$ (la fonction $\frac1x$ décroît).` },
        { expr: '-1/x^2 + 1/sqrt(x)', msg: String.raw`$(\sqrt{x})' = \frac{1}{2\sqrt{x}}$ : n'oublie pas le facteur $\frac12$.` },
        { expr: 'ln(x) + 1/(2*sqrt(x))', msg: String.raw`$\ln x$ est une primitive de $\frac1x$, pas sa dérivée.` }
      ],
      hint: String.raw`$\left(\frac{1}{x}\right)' = -\frac{1}{x^2}$ et $(\sqrt{x})' = \frac{1}{2\sqrt{x}}$.`,
      explain: String.raw`$f'(x) = -\dfrac{1}{x^2} + \dfrac{1}{2\sqrt{x}}$.` },
    { id: 'm5-x-003', level: 1, check: 'value', vars: [],
      prompt: String.raw`Soit $f(x) = x^3 - 2x$. Calcule $f'(2)$.`,
      answer: '10',
      mistakes: [
        { expr: '4', msg: String.raw`Tu as calculé $f(2) = 8 - 4 = 4$ : il faut d'abord dériver, puis remplacer $x$ par $2$.` },
        { expr: '12', msg: String.raw`N'oublie pas la dérivée de $-2x$, qui vaut $-2$.` }
      ],
      hint: String.raw`Calcule d'abord $f'(x)$, puis remplace $x$ par $2$.`,
      explain: String.raw`$f'(x) = 3x^2 - 2$, donc $f'(2) = 3 \times 4 - 2 = 10$.` },
    { id: 'm5-x-004', level: 1, check: 'expr', vars: ['x'], domain: [0.3, 4],
      prompt: String.raw`Dérive $f(x) = 3\mathrm{e}^x - 2\ln x + 4\cos x$ sur $]0, +\infty[$.`,
      answer: '3*exp(x) - 2/x - 4*sin(x)',
      mistakes: [
        { expr: '3*exp(x) - 2/x + 4*sin(x)', msg: String.raw`Signe : $(\cos x)' = -\sin x$, donc $(4\cos x)' = -4\sin x$.` },
        { expr: '3*exp(x) - 2*x*ln(x) + 2*x + 4*sin(x)', msg: String.raw`Tu as primitivé au lieu de dériver !` }
      ],
      hint: String.raw`Linéarité : $(\mathrm{e}^x)' = \mathrm{e}^x$, $(\ln x)' = \frac1x$, $(\cos x)' = -\sin x$.`,
      explain: String.raw`$f'(x) = 3\mathrm{e}^x - 2\times\dfrac{1}{x} + 4\times(-\sin x) = 3\mathrm{e}^x - \dfrac{2}{x} - 4\sin x$.` },
    { id: 'm5-x-005', level: 1, check: 'expr', vars: ['x'],
      prompt: String.raw`Dérive $f(x) = \sin(2x)$.`,
      answer: '2*cos(2*x)',
      mistakes: [
        { expr: 'cos(2*x)', msg: String.raw`Oubli de $u'$ : $(\sin u)' = u'\cos u$ avec $u = 2x$, $u' = 2$.` },
        { expr: '-2*sin(2*x)', msg: String.raw`C'est la dérivée de $\cos(2x)$ ; ici on dérive un sinus : $(\sin)' = \cos$.` }
      ],
      hint: String.raw`$(\sin u)' = u'\cos u$ avec $u = 2x$.`,
      explain: String.raw`$u = 2x$, $u' = 2$ : $f'(x) = 2\cos(2x)$.` },
    { id: 'm5-x-006', level: 1, check: 'expr', vars: ['x'],
      prompt: String.raw`Dérive $f(x) = (2x+1)^4$.`,
      answer: '8*(2*x+1)^3',
      mistakes: [
        { expr: '4*(2*x+1)^3', msg: String.raw`Oubli de $u'$ : $(u^4)' = 4u'u^3$ avec $u' = 2$.` },
        { expr: '8*(2*x+1)^4', msg: String.raw`L'exposant doit baisser de 1 : $(u^n)' = n\,u'\,u^{n-1}$.` }
      ],
      hint: String.raw`$(u^n)' = n\,u'\,u^{n-1}$ avec $u = 2x + 1$.`,
      explain: String.raw`$u = 2x+1$, $u' = 2$ : $f'(x) = 4 \times 2 \times (2x+1)^3 = 8(2x+1)^3$.` },
    { id: 'm5-x-007', level: 1, check: 'expr', vars: ['x'],
      prompt: String.raw`Dérive $f(x) = \mathrm{e}^{3x}$.`,
      answer: '3*exp(3*x)',
      mistakes: [
        { expr: 'exp(3*x)', msg: String.raw`Oubli de $u'$ : $(\mathrm{e}^u)' = u'\mathrm{e}^u$ avec $u = 3x$.` },
        { expr: '3*x*exp(3*x-1)', msg: String.raw`Ce n'est pas une puissance de $x$ : la règle $(x^n)' = nx^{n-1}$ ne s'applique pas à $\mathrm{e}^{u}$.` }
      ],
      hint: String.raw`$(\mathrm{e}^u)' = u'\,\mathrm{e}^u$.`,
      explain: String.raw`$u = 3x$, $u' = 3$ : $f'(x) = 3\mathrm{e}^{3x}$.` },
    { id: 'm5-x-008', level: 1, check: 'value', vars: [],
      prompt: String.raw`Soit $f(x) = \arctan x$. Calcule la valeur exacte de $f'(1)$.`,
      answer: '1/2',
      mistakes: [
        { expr: 'pi/4', msg: String.raw`$\frac{\pi}{4} = \arctan 1 = f(1)$ : il fallait la dérivée en $1$.` },
        { expr: '1/sqrt(2)', msg: String.raw`Confusion avec $(\arcsin)'$ : $(\arctan x)' = \frac{1}{1+x^2}$, sans racine.` }
      ],
      hint: String.raw`$(\arctan x)' = \dfrac{1}{1+x^2}$.`,
      explain: String.raw`$f'(x) = \dfrac{1}{1+x^2}$, donc $f'(1) = \dfrac{1}{2}$.` },
    { id: 'm5-x-009', level: 1, check: 'expr', vars: ['x'],
      prompt: String.raw`Dérive $f(x) = \cos(5x)$.`,
      answer: '-5*sin(5*x)',
      mistakes: [
        { expr: '5*sin(5*x)', msg: String.raw`Signe : $(\cos u)' = -u'\sin u$.` },
        { expr: '-sin(5*x)', msg: String.raw`Oubli de $u' = 5$.` }
      ],
      hint: String.raw`$(\cos u)' = -u'\sin u$ avec $u = 5x$.`,
      explain: String.raw`$u = 5x$, $u' = 5$ : $f'(x) = -5\sin(5x)$.` },
    { id: 'm5-x-010', level: 2, check: 'expr', vars: ['x'],
      prompt: String.raw`Dérive $f(x) = x^2\sin x$.`,
      answer: '2*x*sin(x) + x^2*cos(x)',
      mistakes: [
        { expr: '2*x*cos(x)', msg: String.raw`Tu as dérivé chaque facteur séparément : $(uv)' \neq u'v'$, c'est $u'v + uv'$.` },
        { expr: '2*x*sin(x) - x^2*cos(x)', msg: String.raw`Pas de signe moins dans la règle du produit : $(uv)' = u'v + uv'$.` }
      ],
      hint: String.raw`Produit : $(uv)' = u'v + uv'$ avec $u = x^2$ et $v = \sin x$.`,
      explain: String.raw`$u' = 2x$, $v' = \cos x$, donc $f'(x) = 2x\sin x + x^2\cos x$.` },
    { id: 'm5-x-011', level: 2, check: 'expr', vars: ['x'],
      prompt: String.raw`Donne l'équation de la tangente à la courbe de $f(x) = x^2 - 3x + 1$ au point d'abscisse $a = 2$, sous la forme $y = \ldots$`,
      answer: 'x - 3',
      mistakes: [
        { expr: 'x + 1', msg: String.raw`Signe : c'est $(x - a)$, ici $(x - 2)$. Vérifie : en $x = 2$ tu dois retrouver $f(2) = -1$.` },
        { expr: '-x + 3', msg: String.raw`Tu as inversé $f(a)$ et $f'(a)$ : la pente est $f'(2) = 1$ et l'ordonnée du point $f(2) = -1$.` }
      ],
      hint: String.raw`Calcule $f(2)$ et $f'(2)$, puis $y = f'(2)(x-2) + f(2)$.`,
      explain: String.raw`$f(2) = 4 - 6 + 1 = -1$ ; $f'(x) = 2x - 3$, $f'(2) = 1$. Tangente : $y = 1\cdot(x - 2) - 1 = x - 3$.` },
    { id: 'm5-x-012', level: 2, check: 'expr', vars: ['x'],
      prompt: String.raw`Dérive $f(x) = x\,\mathrm{e}^x$.`,
      answer: '(x+1)*exp(x)',
      mistakes: [
        { expr: 'exp(x)', msg: String.raw`$(uv)' \neq u'v'$ : il manque le terme $uv' = x\mathrm{e}^x$.` },
        { expr: 'x*exp(x)', msg: String.raw`Il manque le terme $u'v = 1\times\mathrm{e}^x$.` }
      ],
      hint: String.raw`Produit avec $u = x$, $v = \mathrm{e}^x$.`,
      explain: String.raw`$u' = 1$, $v' = \mathrm{e}^x$ : $f'(x) = \mathrm{e}^x + x\mathrm{e}^x = (x+1)\mathrm{e}^x$.` },
    { id: 'm5-x-013', level: 2, check: 'expr', vars: ['x'],
      prompt: String.raw`Dérive $f(x) = \ln(x^2 + 1)$.`,
      answer: '2*x/(x^2+1)',
      mistakes: [
        { expr: '1/(x^2+1)', msg: String.raw`Oubli de $u'$ : $(\ln u)' = \frac{u'}{u}$ avec $u' = 2x$.` },
        { expr: '1/(2*x)', msg: String.raw`On ne dérive pas l'intérieur du $\ln$ à la place : c'est $\frac{u'}{u}$, pas $\frac{1}{u'}$.` }
      ],
      hint: String.raw`$(\ln u)' = \dfrac{u'}{u}$ avec $u = x^2 + 1$.`,
      explain: String.raw`$u = x^2 + 1 \gt 0$, $u' = 2x$ : $f'(x) = \dfrac{2x}{x^2+1}$.` },
    { id: 'm5-x-014', level: 2, check: 'expr', vars: ['x'],
      prompt: String.raw`Dérive $f(x) = \sqrt{1 + x^2}$.`,
      answer: 'x/sqrt(1+x^2)',
      mistakes: [
        { expr: '1/(2*sqrt(1+x^2))', msg: String.raw`Oubli de $u' = 2x$ : $(\sqrt{u})' = \frac{u'}{2\sqrt u}$.` },
        { expr: '2*x/sqrt(1+x^2)', msg: String.raw`Il manque le $2$ du dénominateur : $(\sqrt{u})' = \frac{u'}{2\sqrt{u}}$.` }
      ],
      hint: String.raw`$(\sqrt{u})' = \dfrac{u'}{2\sqrt{u}}$ avec $u = 1 + x^2$.`,
      explain: String.raw`$u' = 2x$ : $f'(x) = \dfrac{2x}{2\sqrt{1+x^2}} = \dfrac{x}{\sqrt{1+x^2}}$.` },
    { id: 'm5-x-015', level: 2, check: 'expr', vars: ['x'], domain: [0, 3],
      prompt: String.raw`Dérive $f(x) = \dfrac{x - 1}{x + 1}$ (pour $x \neq -1$).`,
      answer: '2/(x+1)^2',
      mistakes: [
        { expr: '-2/(x+1)^2', msg: String.raw`Numérateur à l'envers : c'est $u'v - uv'$, pas $uv' - u'v$.` },
        { expr: '1', msg: String.raw`$\left(\frac{u}{v}\right)' \neq \frac{u'}{v'}$ : applique la formule du quotient.` }
      ],
      hint: String.raw`$\left(\dfrac{u}{v}\right)' = \dfrac{u'v - uv'}{v^2}$ avec $u = x - 1$, $v = x + 1$.`,
      explain: String.raw`$u' = v' = 1$ : $f'(x) = \dfrac{(x+1) - (x-1)}{(x+1)^2} = \dfrac{2}{(x+1)^2}$.` },
    { id: 'm5-x-016', level: 2, check: 'expr', vars: ['x'],
      prompt: String.raw`Donne l'équation de la tangente à la courbe de $f(x) = \sqrt{x}$ au point d'abscisse $4$, sous la forme $y = \ldots$`,
      answer: 'x/4 + 1',
      mistakes: [
        { expr: 'x/2', msg: String.raw`$(\sqrt{x})' = \frac{1}{2\sqrt{x}}$, donc $f'(4) = \frac{1}{4}$ et non $\frac12$.` },
        { expr: 'x/4 + 3', msg: String.raw`Signe : c'est $(x - 4)$ et non $(x + 4)$.` }
      ],
      hint: String.raw`$f(4) = 2$ et $f'(4) = \dfrac{1}{2\sqrt{4}}$.`,
      explain: String.raw`$f(4) = 2$, $f'(4) = \frac{1}{4}$. Tangente : $y = \frac{1}{4}(x - 4) + 2 = \frac{x}{4} + 1$.` },
    { id: 'm5-x-017', level: 2, check: 'expr', vars: ['x'],
      prompt: String.raw`Dérive $f(x) = \dfrac{1}{x^2 + 1}$.`,
      answer: '-2*x/(x^2+1)^2',
      mistakes: [
        { expr: '2*x/(x^2+1)^2', msg: String.raw`Signe : $\left(\frac{1}{v}\right)' = -\frac{v'}{v^2}$.` },
        { expr: '-1/(x^2+1)^2', msg: String.raw`Oubli de $v' = 2x$ au numérateur.` },
        { expr: '1/(2*x)', msg: String.raw`L'inverse d'une fonction ne se dérive pas en inversant sa dérivée : $\left(\frac1v\right)' = -\frac{v'}{v^2}$.` }
      ],
      hint: String.raw`$\left(\dfrac{1}{v}\right)' = -\dfrac{v'}{v^2}$.`,
      explain: String.raw`$v = x^2 + 1$, $v' = 2x$ : $f'(x) = -\dfrac{2x}{(x^2+1)^2}$.` },
    { id: 'm5-x-018', level: 2, check: 'expr', vars: ['x'],
      prompt: String.raw`Dérive $f(x) = \mathrm{e}^{-x^2}$.`,
      answer: '-2*x*exp(-x^2)',
      mistakes: [
        { expr: 'exp(-x^2)', msg: String.raw`Oubli de $u' = -2x$.` },
        { expr: '2*x*exp(-x^2)', msg: String.raw`Signe : $u = -x^2$ donne $u' = -2x$.` }
      ],
      hint: String.raw`$(\mathrm{e}^u)' = u'\mathrm{e}^u$ avec $u = -x^2$.`,
      explain: String.raw`$u' = -2x$ : $f'(x) = -2x\,\mathrm{e}^{-x^2}$.` },
    { id: 'm5-x-019', level: 2, check: 'expr', vars: ['x'],
      prompt: String.raw`Dérive $f(x) = \sin^2 x$.`,
      answer: '2*sin(x)*cos(x)',
      mistakes: [
        { expr: '2*sin(x)', msg: String.raw`Oubli de $u' = \cos x$ : $(u^2)' = 2u'u$.` },
        { expr: 'cos(x)^2', msg: String.raw`Tu as dérivé le sinus puis gardé le carré : $(u^2)' = 2u'u$, pas $(u')^2$.` }
      ],
      hint: String.raw`$\sin^2 x = (\sin x)^2$ : forme $u^2$ avec $u = \sin x$.`,
      explain: String.raw`$(u^2)' = 2u'u$ avec $u' = \cos x$ : $f'(x) = 2\sin x\cos x = \sin(2x)$.` },
    { id: 'm5-x-020', level: 2, check: 'value', vars: [],
      prompt: String.raw`Soit $f(x) = x\sin x$. Calcule $f'\left(\frac{\pi}{2}\right)$.`,
      answer: '1',
      mistakes: [
        { expr: '0', msg: String.raw`$(uv)' \neq u'v'$ : $1\times\cos\frac{\pi}{2} = 0$ n'est qu'un des deux termes.` },
        { expr: 'pi/2', msg: String.raw`$\frac{\pi}{2} = f\left(\frac{\pi}{2}\right)$ : il fallait la dérivée.` }
      ],
      hint: String.raw`$f'(x) = \sin x + x\cos x$.`,
      explain: String.raw`$f'(x) = \sin x + x\cos x$, donc $f'\left(\frac{\pi}{2}\right) = 1 + \frac{\pi}{2}\times 0 = 1$.` },
    { id: 'm5-x-021', level: 2, check: 'expr', vars: ['x'], domain: [0.3, 4],
      prompt: String.raw`Dérive $f(x) = x\ln x - x$ sur $]0, +\infty[$.`,
      answer: 'ln(x)',
      mistakes: [
        { expr: '1/x - 1', msg: String.raw`$(x\ln x)' \neq 1\times\frac{1}{x}$ : c'est $u'v + uv' = \ln x + 1$.` },
        { expr: 'ln(x) + 1', msg: String.raw`N'oublie pas la dérivée de $-x$, qui vaut $-1$.` }
      ],
      hint: String.raw`$(x\ln x)' = 1\cdot\ln x + x\cdot\frac{1}{x}$.`,
      explain: String.raw`$(x\ln x)' = \ln x + 1$ et $(-x)' = -1$ : $f'(x) = \ln x$. (C'est pour cela que $x\ln x - x$ est une primitive de $\ln$.)` },
    { id: 'm5-x-022', level: 2, check: 'expr', vars: ['x'],
      prompt: String.raw`Dérive $f(x) = \arctan(2x)$.`,
      answer: '2/(1+4*x^2)',
      mistakes: [
        { expr: '1/(1+4*x^2)', msg: String.raw`Oubli de $u' = 2$ : $(\arctan u)' = \frac{u'}{1+u^2}$.` },
        { expr: '2/(1+2*x^2)', msg: String.raw`$u^2 = (2x)^2 = 4x^2$, pas $2x^2$.` }
      ],
      hint: String.raw`$(\arctan u)' = \dfrac{u'}{1+u^2}$ avec $u = 2x$.`,
      explain: String.raw`$u = 2x$, $u' = 2$, $u^2 = 4x^2$ : $f'(x) = \dfrac{2}{1+4x^2}$.` },
    { id: 'm5-x-023', level: 2, check: 'expr', vars: ['x'], domain: [0.3, 4],
      prompt: String.raw`Dérive $f(x) = \dfrac{\mathrm{e}^x}{x}$ sur $]0, +\infty[$.`,
      answer: '(x-1)*exp(x)/x^2',
      mistakes: [
        { expr: '(1-x)*exp(x)/x^2', msg: String.raw`Numérateur à l'envers : $u'v - uv' = \mathrm{e}^x\cdot x - \mathrm{e}^x\cdot 1$.` },
        { expr: 'exp(x)', msg: String.raw`$\left(\frac{u}{v}\right)' \neq \frac{u'}{v'}$.` }
      ],
      hint: String.raw`Quotient avec $u = \mathrm{e}^x$, $v = x$.`,
      explain: String.raw`$f'(x) = \dfrac{\mathrm{e}^x\cdot x - \mathrm{e}^x\cdot 1}{x^2} = \dfrac{(x-1)\,\mathrm{e}^x}{x^2}$.` },
    { id: 'm5-x-024', level: 2, check: 'expr', vars: ['x'],
      prompt: String.raw`Dérive $f(x) = \operatorname{ch}(2x)$. (Syntaxe : $\operatorname{ch}$ = cosh, $\operatorname{sh}$ = sinh.)`,
      answer: '2*sinh(2*x)',
      mistakes: [
        { expr: '-2*sinh(2*x)', msg: String.raw`Pas de signe moins : $(\operatorname{ch})' = \operatorname{sh}$ (contrairement à $\cos$).` },
        { expr: 'sinh(2*x)', msg: String.raw`Oubli de $u' = 2$.` }
      ],
      hint: String.raw`$(\operatorname{ch} u)' = u'\operatorname{sh} u$.`,
      explain: String.raw`$u = 2x$, $u' = 2$ : $f'(x) = 2\operatorname{sh}(2x)$.` },
    { id: 'm5-x-025', level: 2, check: 'expr', vars: ['x'],
      prompt: String.raw`Dérive $f(x) = 2^x$.`,
      answer: 'ln(2)*2^x',
      mistakes: [
        { expr: 'x*2^(x-1)', msg: String.raw`L'exposant varie : la règle $(x^n)' = nx^{n-1}$ ne s'applique pas. Écris $2^x = \mathrm{e}^{x\ln 2}$.` },
        { expr: '2^x', msg: String.raw`Seule $\mathrm{e}^x$ est sa propre dérivée ; écris $2^x = \mathrm{e}^{x\ln 2}$.` }
      ],
      hint: String.raw`$2^x = \mathrm{e}^{x\ln 2}$.`,
      explain: String.raw`$2^x = \mathrm{e}^{x\ln 2}$, forme $\mathrm{e}^u$ avec $u' = \ln 2$ : $f'(x) = \ln(2)\,2^x$.` },
    { id: 'm5-x-026', level: 2, check: 'expr', vars: ['x'],
      prompt: String.raw`Donne l'équation de la tangente à la courbe de $\sin$ au point d'abscisse $\pi$, sous la forme $y = \ldots$`,
      answer: 'pi - x',
      mistakes: [
        { expr: 'x - pi', msg: String.raw`$\cos\pi = -1$, pas $1$ : la pente est négative.` },
        { expr: '-x', msg: String.raw`Il manque le décalage : c'est $f'(\pi)(x - \pi) + f(\pi)$.` }
      ],
      hint: String.raw`$\sin\pi = 0$ et $\sin'(\pi) = \cos\pi$.`,
      explain: String.raw`$f(\pi) = 0$, $f'(\pi) = \cos\pi = -1$ : $y = -(x - \pi) + 0 = \pi - x$.` },
    { id: 'm5-x-027', level: 2, check: 'expr', vars: ['x'], domain: [-1.2, 1.2],
      prompt: String.raw`Dérive $f(x) = \ln(\cos x)$ sur $\left]-\frac{\pi}{2}, \frac{\pi}{2}\right[$.`,
      answer: '-tan(x)',
      mistakes: [
        { expr: 'tan(x)', msg: String.raw`Signe : $(\cos x)' = -\sin x$.` },
        { expr: '1/cos(x)', msg: String.raw`Oubli de $u'$ : $(\ln u)' = \frac{u'}{u}$ avec $u' = -\sin x$.` }
      ],
      hint: String.raw`$(\ln u)' = \dfrac{u'}{u}$ avec $u = \cos x$.`,
      explain: String.raw`$f'(x) = \dfrac{-\sin x}{\cos x} = -\tan x$.` },
    { id: 'm5-x-028', level: 2, check: 'expr', vars: ['x'], domain: [-0.9, 0.9],
      prompt: String.raw`Dérive $f(x) = \arcsin x + \arccos x$ sur $]-1, 1[$, puis simplifie.`,
      answer: '0',
      mistakes: [
        { expr: '2/sqrt(1-x^2)', msg: String.raw`$(\arccos x)' = -\frac{1}{\sqrt{1-x^2}}$ (signe moins : $\arccos$ décroît).` }
      ],
      hint: String.raw`Les dérivées de $\arcsin$ et $\arccos$ sont opposées.`,
      explain: String.raw`$f'(x) = \dfrac{1}{\sqrt{1-x^2}} - \dfrac{1}{\sqrt{1-x^2}} = 0$. Donc $f$ est constante sur l'intervalle $]-1,1[$ : $\arcsin x + \arccos x = f(0) = \frac{\pi}{2}$.` },
    { id: 'm5-x-029', level: 2, check: 'expr', vars: ['x'],
      prompt: String.raw`Donne l'équation de la tangente à la courbe de $f(x) = \dfrac{1}{x}$ au point d'abscisse $-1$, sous la forme $y = \ldots$`,
      answer: '-x - 2',
      mistakes: [
        { expr: '-x', msg: String.raw`Attention : $x - a$ avec $a = -1$ donne $x + 1$.` },
        { expr: 'x', msg: String.raw`Signe : $f'(x) = -\frac{1}{x^2}$, donc $f'(-1) = -1$.` }
      ],
      hint: String.raw`$f(-1) = -1$ et $f'(x) = -\dfrac{1}{x^2}$.`,
      explain: String.raw`$f(-1) = -1$, $f'(-1) = -\frac{1}{1} = -1$ : $y = -1\cdot\big(x - (-1)\big) - 1 = -x - 2$.` },
    { id: 'm5-x-030', level: 2, check: 'expr', vars: ['x', 'y'],
      prompt: String.raw`Soit $f(x, y) = x^2y + 3xy^3$. Calcule $\dfrac{\partial f}{\partial x}(x, y)$.`,
      answer: '2*x*y + 3*y^3',
      mistakes: [
        { expr: 'x^2 + 9*x*y^2', msg: String.raw`C'est $\frac{\partial f}{\partial y}$ : ici on dérive par rapport à $x$, $y$ étant constant.` },
        { expr: '2*x*y + x^2 + 3*y^3 + 9*x*y^2', msg: String.raw`On ne dérive que par rapport à $x$ : les facteurs en $y$ restent tels quels.` }
      ],
      hint: String.raw`$y$ est une constante : $x^2y \to 2xy$ et $3xy^3 \to 3y^3$.`,
      explain: String.raw`$\dfrac{\partial}{\partial x}(x^2y) = 2xy$ et $\dfrac{\partial}{\partial x}(3xy^3) = 3y^3$, donc $\dfrac{\partial f}{\partial x} = 2xy + 3y^3$.` },
    { id: 'm5-x-031', level: 2, check: 'expr', vars: ['x', 'y'],
      prompt: String.raw`Soit $f(x, y) = \mathrm{e}^{xy}$. Calcule $\dfrac{\partial f}{\partial y}(x, y)$.`,
      answer: 'x*exp(x*y)',
      mistakes: [
        { expr: 'exp(x*y)', msg: String.raw`Oubli de $u' = \frac{\partial (xy)}{\partial y} = x$.` },
        { expr: 'y*exp(x*y)', msg: String.raw`C'est $\frac{\partial f}{\partial x}$ : par rapport à $y$, la dérivée de $xy$ est $x$.` }
      ],
      hint: String.raw`$(\mathrm{e}^u)' = u'\mathrm{e}^u$ avec $u = xy$ dérivé par rapport à $y$.`,
      explain: String.raw`$\dfrac{\partial}{\partial y}(xy) = x$, donc $\dfrac{\partial f}{\partial y} = x\,\mathrm{e}^{xy}$.` },
    { id: 'm5-x-032', level: 3, check: 'expr', vars: ['x'], domain: [0.3, 3],
      prompt: String.raw`Dérive $f(x) = x^x$ sur $]0, +\infty[$.`,
      answer: '(ln(x)+1)*x^x',
      mistakes: [
        { expr: 'x*x^(x-1)', msg: String.raw`L'exposant n'est pas constant : la règle $(x^n)' = nx^{n-1}$ ne s'applique pas.` },
        { expr: 'ln(x)*x^x', msg: String.raw`La base n'est pas constante non plus : écris $x^x = \mathrm{e}^{x\ln x}$.` }
      ],
      hint: String.raw`Écris $x^x = \mathrm{e}^{x\ln x}$.`,
      explain: String.raw`$x^x = \mathrm{e}^{u}$ avec $u = x\ln x$, $u' = \ln x + 1$. Donc $f'(x) = (\ln x + 1)\,x^x$.` },
    { id: 'm5-x-033', level: 3, check: 'expr', vars: ['x'], domain: [-2, 2],
      prompt: String.raw`Dérive $f(x) = \dfrac{\sin x}{1 + \cos x}$ sur $]-\pi, \pi[$ et simplifie.`,
      answer: '1/(1+cos(x))',
      mistakes: [
        { expr: '-1/(1+cos(x))', msg: String.raw`Numérateur à l'envers : c'est $u'v - uv'$.` },
        { expr: '-cos(x)/sin(x)', msg: String.raw`$\left(\frac{u}{v}\right)' \neq \frac{u'}{v'}$.` }
      ],
      hint: String.raw`Quotient, puis utilise $\cos^2 x + \sin^2 x = 1$ au numérateur.`,
      explain: String.raw`$f'(x) = \dfrac{\cos x(1 + \cos x) - \sin x(-\sin x)}{(1+\cos x)^2} = \dfrac{\cos x + \cos^2 x + \sin^2 x}{(1+\cos x)^2} = \dfrac{1 + \cos x}{(1+\cos x)^2} = \dfrac{1}{1+\cos x}$.` },
    { id: 'm5-x-034', level: 3, check: 'expr', vars: ['x'],
      prompt: String.raw`Dérive $f(x) = \mathrm{e}^{\sin x}$.`,
      answer: 'cos(x)*exp(sin(x))',
      mistakes: [
        { expr: 'exp(sin(x))', msg: String.raw`Oubli de $u' = \cos x$.` },
        { expr: 'exp(cos(x))', msg: String.raw`On ne dérive pas l'exposant « à l'intérieur » : $(\mathrm{e}^u)' = u'\mathrm{e}^u$.` }
      ],
      hint: String.raw`$(\mathrm{e}^u)' = u'\mathrm{e}^u$ avec $u = \sin x$.`,
      explain: String.raw`$u' = \cos x$ : $f'(x) = \cos x\;\mathrm{e}^{\sin x}$.` },
    { id: 'm5-x-035', level: 3, check: 'expr', vars: ['x'],
      prompt: String.raw`Dérive $f(x) = \cos^3(2x)$.`,
      answer: '-6*sin(2*x)*cos(2*x)^2',
      mistakes: [
        { expr: '-3*sin(2*x)*cos(2*x)^2', msg: String.raw`Il y a deux composées emboîtées : n'oublie pas le facteur $2$ venant de $(2x)' = 2$.` },
        { expr: '3*cos(2*x)^2', msg: String.raw`Oubli de $u'$ : avec $u = \cos(2x)$, $u' = -2\sin(2x)$.` }
      ],
      hint: String.raw`Forme $u^3$ avec $u = \cos(2x)$, puis $u' = -2\sin(2x)$.`,
      explain: String.raw`$(u^3)' = 3u'u^2$ avec $u = \cos(2x)$, $u' = -2\sin(2x)$ : $f'(x) = 3\times(-2\sin 2x)\cos^2(2x) = -6\sin(2x)\cos^2(2x)$.` },
    { id: 'm5-x-036', level: 3, check: 'expr', vars: ['x'],
      prompt: String.raw`Dérive $f(x) = \ln\left(x + \sqrt{x^2+1}\right)$ et simplifie.`,
      answer: '1/sqrt(x^2+1)',
      mistakes: [
        { expr: '1/(x+sqrt(x^2+1))', msg: String.raw`Oubli de $u'$ : $(\ln u)' = \frac{u'}{u}$ avec $u' = 1 + \frac{x}{\sqrt{x^2+1}}$.` }
      ],
      hint: String.raw`$u = x + \sqrt{x^2+1}$, $u' = 1 + \dfrac{x}{\sqrt{x^2+1}} = \dfrac{\sqrt{x^2+1} + x}{\sqrt{x^2+1}}$.`,
      explain: String.raw`$u' = \dfrac{\sqrt{x^2+1} + x}{\sqrt{x^2+1}}$, donc $\dfrac{u'}{u} = \dfrac{1}{\sqrt{x^2+1}}$ (on simplifie par $x + \sqrt{x^2+1} \gt 0$). C'est la fonction $\operatorname{argsh}$, réciproque de $\operatorname{sh}$.` },
    { id: 'm5-x-037', level: 3, check: 'value', vars: [],
      prompt: String.raw`Soit $f(x) = x^4 - 6x^2$. Calcule la dérivée seconde $f''(2)$.`,
      answer: '36',
      mistakes: [
        { expr: '8', msg: String.raw`$8 = f'(2)$ : il faut dériver une seconde fois.` },
        { expr: '-8', msg: String.raw`$-8 = f(2)$ : il faut dériver deux fois.` }
      ],
      hint: String.raw`$f'(x) = 4x^3 - 12x$, puis dérive encore.`,
      explain: String.raw`$f'(x) = 4x^3 - 12x$, $f''(x) = 12x^2 - 12$, donc $f''(2) = 48 - 12 = 36 \gt 0$ : la courbe est convexe au voisinage de $2$.` },
    { id: 'm5-x-038', level: 3, check: 'expr', vars: ['x', 'y'],
      prompt: String.raw`Soit $f(x, y) = \sqrt{x^2 + y^2}$ (distance à l'origine). Calcule $\dfrac{\partial f}{\partial x}(x, y)$ pour $(x, y) \neq (0, 0)$.`,
      answer: 'x/sqrt(x^2+y^2)',
      mistakes: [
        { expr: '1/(2*sqrt(x^2+y^2))', msg: String.raw`Oubli de $u' = \frac{\partial (x^2+y^2)}{\partial x} = 2x$.` },
        { expr: '2*x/sqrt(x^2+y^2)', msg: String.raw`$(\sqrt{u})' = \frac{u'}{2\sqrt{u}}$ : le $2$ se simplifie avec celui de $2x$.` }
      ],
      hint: String.raw`$(\sqrt{u})' = \dfrac{u'}{2\sqrt{u}}$ avec $u = x^2 + y^2$, $y$ constant.`,
      explain: String.raw`$\dfrac{\partial f}{\partial x} = \dfrac{2x}{2\sqrt{x^2+y^2}} = \dfrac{x}{\sqrt{x^2+y^2}}$.` },
    { id: 'm5-x-039', level: 3, check: 'expr', vars: ['x', 'y'],
      prompt: String.raw`Soit $f(x, y) = x^3y^2$. Calcule la dérivée seconde croisée $\dfrac{\partial^2 f}{\partial x\,\partial y}(x, y)$.`,
      answer: '6*x^2*y',
      mistakes: [
        { expr: '6*x*y^2', msg: String.raw`C'est $\frac{\partial^2 f}{\partial x^2}$ : il faut dériver une fois par rapport à $x$ et une fois par rapport à $y$.` },
        { expr: '3*x^2*y^2', msg: String.raw`Ce n'est que $\frac{\partial f}{\partial x}$ : dérive encore par rapport à $y$.` }
      ],
      hint: String.raw`$\dfrac{\partial f}{\partial y} = 2x^3y$, puis dérive par rapport à $x$.`,
      explain: String.raw`$\dfrac{\partial f}{\partial y} = 2x^3y$, puis $\dfrac{\partial}{\partial x}(2x^3y) = 6x^2y$. Dans l'autre ordre : $\frac{\partial f}{\partial x} = 3x^2y^2$ puis $\frac{\partial}{\partial y} \to 6x^2y$ (Schwarz).` },
    { id: 'm5-x-040', level: 3, check: 'value', vars: [],
      prompt: String.raw`On calcule une puissance $P = RI^2$ avec des incertitudes relatives $\dfrac{\Delta R}{R} = 1\,\%$ et $\dfrac{\Delta I}{I} = 2\,\%$. Donne l'incertitude relative $\dfrac{\Delta P}{P}$ (majorant) sous forme décimale, par exemple $0{,}01$ pour $1\,\%$.`,
      answer: '0.05',
      mistakes: [
        { expr: '0.03', msg: String.raw`Oubli de l'exposant : $I^2$ compte deux fois, $\frac{\Delta P}{P} = \frac{\Delta R}{R} + 2\frac{\Delta I}{I}$.` },
        { expr: '0.0002', msg: String.raw`On <b>additionne</b> les incertitudes relatives, on ne les multiplie pas.` }
      ],
      hint: String.raw`Dérivée logarithmique : $\ln P = \ln R + 2\ln I$.`,
      explain: String.raw`$\dfrac{\mathrm{d}P}{P} = \dfrac{\mathrm{d}R}{R} + 2\dfrac{\mathrm{d}I}{I}$, d'où $\dfrac{\Delta P}{P} = 1\,\% + 2\times 2\,\% = 5\,\% = 0{,}05$.` }
  ]
});
