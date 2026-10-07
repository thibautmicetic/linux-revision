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
      topic: 'Dérivée des puissances', sec: 'm5-s-usuelles',
      steps: [
        String.raw`Rappel : la dérivée $f'(x)$ mesure la vitesse de variation de $f$, c'est-à-dire la pente de la tangente au point d'abscisse $x$. Pour les puissances de $x$, on dispose d'une formule toute faite.`,
        String.raw`Règle des puissances : l'exposant passe devant en facteur, puis on lui retire 1 : $(x^n)' = n\,x^{n-1}$.`,
        String.raw`Exemple : $(x^3)' = 3x^{3-1} = 3x^2$. Vérification par la définition : $\frac{(x+h)^3 - x^3}{h} = 3x^2 + 3xh + h^2 \to 3x^2$ quand $h \to 0$ ✔.`
      ],
      choices: [String.raw`$x^{n-1}$`, String.raw`$n\,x^{n-1}$`, String.raw`$n\,x^{n}$`, String.raw`$\dfrac{x^{n+1}}{n+1}$`], answer: 1,
      explain: String.raw`Règle des puissances : l'exposant $n$ « descend » devant en facteur, puis on le diminue de 1, ce qui donne $(x^n)' = n\,x^{n-1}$. Exemple : $(x^3)' = 3x^2$. On le retrouve avec la définition : $\frac{(x+h)^3 - x^3}{h} = 3x^2 + 3xh + h^2$, qui tend bien vers $3x^2$ quand $h$ tend vers 0.`,
      rule: String.raw`$(x^n)' = n\,x^{n-1}$`,
      why: { 0: String.raw`Il manque le facteur $n$ : l'exposant doit « descendre » devant. Avec $n = 3$, on obtiendrait $x^2$ au lieu de $3x^2$.`, 2: String.raw`On a bien multiplié par $n$, mais oublié de diminuer l'exposant de 1 : le degré de la dérivée doit baisser d'une unité.`, 3: String.raw`C'est une <b>primitive</b> de $x^n$ (on a fait l'opération inverse) : en dérivant $\frac{x^{n+1}}{n+1}$ on retrouve $x^n$, pas $(x^n)'$.` } },
    { id: 'm5-q-002', level: 1, q: String.raw`$(\cos x)' = $ ?`,
      topic: 'Dérivée du cosinus', sec: 'm5-s-usuelles',
      steps: [
        String.raw`Rappel : $\cos x$ et $\sin x$ sont les coordonnées du point du cercle trigonométrique d'angle $x$ ; quand on les dérive, elles s'échangent, avec un signe moins pour le cosinus.`,
        String.raw`Formules : $(\sin x)' = \cos x$ et $(\cos x)' = -\sin x$.`,
        String.raw`Contrôle du signe : sur $]0, \pi[$, $\cos$ décroît (de $1$ à $-1$), donc sa dérivée y est négative ; comme $\sin x \gt 0$ sur cet intervalle, c'est bien $-\sin x$ ✔.`
      ],
      choices: [String.raw`$\sin x$`, String.raw`$-\cos x$`, String.raw`$-\sin x$`, String.raw`$\cos x$`], answer: 2,
      explain: String.raw`Formule à connaître : $(\cos x)' = -\sin x$. On peut vérifier le signe sur le cercle : juste après $0$, le cosinus part de son maximum $1$ et décroît, donc sa dérivée y est négative, ce que donne bien $-\sin x \lt 0$ pour $x$ petit et positif. À l'inverse $(\sin x)' = \cos x$ sans signe moins.`,
      rule: String.raw`$(\sin x)' = \cos x$ et $(\cos x)' = -\sin x$`,
      why: { 0: String.raw`Oubli du signe moins : c'est $(\sin x)' = \cos x$ qui n'a pas de signe. Le cosinus décroît sur $[0, \pi]$, sa dérivée y est donc négative.`, 1: String.raw`$-\cos x$ est la dérivée <b>seconde</b> de $\cos$ : on a dérivé deux fois ($\cos \to -\sin \to -\cos$).`, 3: String.raw`$\cos$ n'est pas sa propre dérivée : seule l'exponentielle $\mathrm{e}^x$ a cette propriété.` } },
    { id: 'm5-q-003', level: 1, q: String.raw`Dérivée de $\ln x$ sur $]0, +\infty[$ ?`,
      topic: 'Dérivée du logarithme', sec: 'm5-s-usuelles',
      steps: [
        String.raw`Rappel : $\ln$ est la fonction réciproque de $\exp$ : pour $x \gt 0$, $\ln x$ est le nombre dont l'exponentielle vaut $x$, autrement dit $\mathrm{e}^{\ln x} = x$.`,
        String.raw`On dérive les deux membres de $\mathrm{e}^{\ln x} = x$ (dérivée d'une composée $\mathrm{e}^u$ avec $u = \ln x$) : $(\ln x)' \times \mathrm{e}^{\ln x} = 1$.`,
        String.raw`Comme $\mathrm{e}^{\ln x} = x$ : $(\ln x)' \times x = 1$, donc $(\ln x)' = \dfrac{1}{x}$, positive sur $]0, +\infty[$ : $\ln$ est bien croissante ✔.`
      ],
      choices: [String.raw`$\dfrac{1}{x}$`, String.raw`$x\ln x - x$`, String.raw`$\mathrm{e}^x$`, String.raw`$-\dfrac{1}{x^2}$`], answer: 0,
      explain: String.raw`$\ln$ est la réciproque de $\exp$. En dérivant $\mathrm{e}^{\ln x} = x$ on obtient $(\ln x)' \times \mathrm{e}^{\ln x} = 1$, soit $(\ln x)' \times x = 1$, donc $(\ln x)' = \dfrac{1}{x}$. Cohérent : $\ln$ est croissante sur $]0, +\infty[$ et $\frac1x \gt 0$ sur cet intervalle.`,
      rule: String.raw`$(\ln x)' = \dfrac{1}{x}$ pour $x \gt 0$`,
      why: { 1: String.raw`$x\ln x - x$ est une <b>primitive</b> de $\ln x$ : on a intégré au lieu de dériver.`, 2: String.raw`Confusion avec la fonction réciproque $\exp$ : la dérivée de $\ln$ n'a rien à voir avec $\mathrm{e}^x$.`, 3: String.raw`C'est la dérivée de $\frac{1}{x}$ (un cran trop loin) : $\left(\frac1x\right)' = -\frac{1}{x^2}$.` } },
    { id: 'm5-q-004', level: 1, q: String.raw`Règle du produit : $(uv)' = $ ?`,
      topic: 'Dérivée d\'un produit', sec: 'm5-s-regles',
      steps: [
        String.raw`Rappel : quand $f = u \times v$, les deux facteurs varient en même temps ; la variation totale est la somme de l'effet de la variation de $u$ (avec $v$ figé) et de celui de $v$ (avec $u$ figé).`,
        String.raw`Formule : $(uv)' = u'v + uv'$ : on dérive un facteur en gardant l'autre, puis on échange les rôles et on additionne.`,
        String.raw`Test avec $u = v = x$ : $(x \cdot x)' = (x^2)' = 2x$, et la formule donne $1 \cdot x + x \cdot 1 = 2x$ ✔, alors que $u'v' = 1 \times 1 = 1$ serait faux.`
      ],
      choices: [String.raw`$u'v'$`, String.raw`$u'v - uv'$`, String.raw`$u'v + uv'$`, String.raw`$\dfrac{u'v + uv'}{v^2}$`], answer: 2,
      explain: String.raw`On dérive un facteur à la fois en laissant l'autre intact, puis on additionne : $(uv)' = u'v + uv'$. Test simple avec $u = v = x$ : $(x \cdot x)' = (x^2)' = 2x$, et la formule donne bien $1 \cdot x + x \cdot 1 = 2x$. Chaque terme contient exactement un facteur dérivé.`,
      rule: String.raw`$(uv)' = u'v + uv'$`,
      why: { 0: String.raw`Erreur la plus classique : la dérivée d'un produit n'est pas le produit des dérivées. Avec $u = v = x$, on aurait $(x^2)' = 1 \times 1 = 1$ au lieu de $2x$.`, 1: String.raw`Le signe moins appartient au numérateur de la dérivée d'un <b>quotient</b> ; dans un produit, les deux termes s'ajoutent.`, 3: String.raw`Mélange avec la formule du quotient : un produit n'a pas de dénominateur $v^2$.` } },
    { id: 'm5-q-005', level: 1, q: String.raw`$\left(\dfrac{u}{v}\right)' = $ ?`,
      topic: 'Dérivée d\'un quotient', sec: 'm5-s-regles',
      steps: [
        String.raw`Rappel : un quotient $\frac{u}{v}$ s'écrit $u \times \frac{1}{v}$. On combine donc la règle du produit et la dérivée de l'inverse, $\left(\frac{1}{v}\right)' = -\frac{v'}{v^2}$.`,
        String.raw`Calcul : $\left(u \cdot \frac1v\right)' = u' \cdot \frac1v + u \cdot \left(-\frac{v'}{v^2}\right) = \frac{u'v}{v^2} - \frac{uv'}{v^2}$ (on met au même dénominateur $v^2$).`,
        String.raw`D'où $\left(\frac{u}{v}\right)' = \frac{u'v - uv'}{v^2}$ : on commence par dériver le numérateur, et l'ordre compte à cause du signe moins.`
      ],
      choices: [String.raw`$\dfrac{u'v - uv'}{v^2}$`, String.raw`$\dfrac{uv' - u'v}{v^2}$`, String.raw`$\dfrac{u'}{v'}$`, String.raw`$\dfrac{u'v - uv'}{v}$`], answer: 0,
      explain: String.raw`Formule du quotient : $\left(\frac{u}{v}\right)' = \frac{u'v - uv'}{v^2}$, en commençant toujours par dériver le numérateur $u$. Moyen de contrôle : avec $u = 1$, on doit retrouver $\left(\frac1v\right)' = -\frac{v'}{v^2}$, ce que donne bien la formule puisque $u' = 0$. L'ordre compte à cause du signe moins.`,
      rule: String.raw`$\left(\dfrac{u}{v}\right)' = \dfrac{u'v - uv'}{v^2}$`,
      why: { 1: String.raw`Numérateur à l'envers : on obtient l'<b>opposé</b> de la bonne dérivée. Contrôle avec $u = x$, $v = 1$ : on trouverait $-1$ au lieu de $1$.`, 2: String.raw`La dérivée d'un quotient n'est pas le quotient des dérivées (avec $v$ constant, $v' = 0$ donnerait une division par zéro).`, 3: String.raw`Le dénominateur est $v^2$, pas $v$ : il vient de la dérivée de $\frac{1}{v}$, qui vaut $-\frac{v'}{v^2}$.` } },
    { id: 'm5-q-006', level: 1, q: String.raw`$(\mathrm{e}^{u})' = $ ?`,
      topic: 'Dérivée d\'une composée', sec: 'm5-s-regles',
      steps: [
        String.raw`Rappel : $\mathrm{e}^{u(x)}$ est une fonction composée : on calcule d'abord $u(x)$ (fonction « intérieure »), puis on lui applique l'exponentielle (fonction « extérieure »).`,
        String.raw`Règle de la chaîne : dérivée de l'extérieur évaluée en l'intérieur, multipliée par la dérivée de l'intérieur. Ici $\exp' = \exp$, donc $(\mathrm{e}^u)' = \mathrm{e}^u \times u'$.`,
        String.raw`Exemples : $(\mathrm{e}^{3x})' = 3\,\mathrm{e}^{3x}$ et $(\mathrm{e}^{x^2})' = 2x\,\mathrm{e}^{x^2}$ : l'exposant ne change pas, le facteur $u'$ apparaît devant.`
      ],
      choices: [String.raw`$\mathrm{e}^{u}$`, String.raw`$u\,\mathrm{e}^{u-1}$`, String.raw`$u'\,\mathrm{e}^{u'}$`, String.raw`$u'\,\mathrm{e}^{u}$`], answer: 3,
      explain: String.raw`$\mathrm{e}^u$ est la composée de $\exp$ (fonction extérieure) et de $u$ (fonction intérieure). Règle de la chaîne : on dérive l'extérieur en gardant l'intérieur, $\exp'(u) = \mathrm{e}^u$, puis on multiplie par la dérivée de l'intérieur : $(\mathrm{e}^u)' = u'\,\mathrm{e}^u$. Exemple : $(\mathrm{e}^{3x})' = 3\mathrm{e}^{3x}$.`,
      rule: String.raw`$(\mathrm{e}^{u})' = u'\,\mathrm{e}^{u}$`,
      why: { 0: String.raw`Oubli du facteur $u'$ (dérivée de l'intérieur). Ce n'est vrai que si $u(x) = x + c$.`, 1: String.raw`On a appliqué à tort la règle $(x^n)' = nx^{n-1}$ : ici la base $\mathrm{e}$ est constante et c'est l'exposant qui varie.`, 2: String.raw`L'exposant reste $u$ : on ne remplace pas l'intérieur par sa dérivée, on multiplie par $u'$ devant.` } },
    { id: 'm5-q-007', level: 1, q: String.raw`$(\sqrt{x})' = $ ? ($x \gt 0$)`,
      topic: 'Dérivée de la racine carrée', sec: 'm5-s-usuelles',
      steps: [
        String.raw`Rappel : la racine carrée est une puissance d'exposant $\frac12$ : $\sqrt{x} = x^{1/2}$, et la règle $(x^\alpha)' = \alpha\,x^{\alpha - 1}$ vaut pour tout exposant réel $\alpha$.`,
        String.raw`Calcul : $\left(x^{1/2}\right)' = \frac12\,x^{\frac12 - 1} = \frac12\,x^{-1/2}$.`,
        String.raw`Comme $x^{-1/2} = \frac{1}{\sqrt x}$ : $(\sqrt{x})' = \dfrac{1}{2\sqrt{x}}$, définie seulement pour $x \gt 0$.`
      ],
      choices: [String.raw`$\dfrac{1}{\sqrt{x}}$`, String.raw`$\dfrac{1}{2\sqrt{x}}$`, String.raw`$2\sqrt{x}$`, String.raw`$\dfrac{2}{3}x^{3/2}$`], answer: 1,
      explain: String.raw`On écrit la racine comme une puissance : $\sqrt{x} = x^{1/2}$. La règle $(x^\alpha)' = \alpha\,x^{\alpha - 1}$ donne $\frac{1}{2}x^{-1/2} = \frac{1}{2\sqrt{x}}$. Vérification : en $x = 1$ la pente vaut $\frac12$, et effectivement $\sqrt{1{,}01} \approx 1{,}005$.`,
      rule: String.raw`$(\sqrt{x})' = \dfrac{1}{2\sqrt{x}}$`,
      why: { 0: String.raw`Il manque le facteur $\frac{1}{2}$, c'est-à-dire l'exposant $\frac12$ qui descend devant.`, 2: String.raw`$2\sqrt{x}$ est une <b>primitive</b> de $\frac{1}{\sqrt{x}}$, pas une dérivée.`, 3: String.raw`$\frac{2}{3}x^{3/2}$ est une <b>primitive</b> de $\sqrt{x}$ (on a augmenté l'exposant au lieu de le diminuer).` } },
    { id: 'm5-q-008', level: 2, q: String.raw`$(\tan x)' = $ ?`,
      topic: 'Dérivée de la tangente', sec: 'm5-s-usuelles',
      steps: [
        String.raw`Rappel : $\tan x = \dfrac{\sin x}{\cos x}$ (définie quand $\cos x \neq 0$) : on la dérive comme un quotient.`,
        String.raw`Avec $u = \sin$, $v = \cos$ : $u' = \cos$ et $v' = -\sin$, donc $(\tan x)' = \dfrac{\cos x \cos x - \sin x\,(-\sin x)}{\cos^2 x} = \dfrac{\cos^2 x + \sin^2 x}{\cos^2 x}$.`,
        String.raw`Le numérateur vaut $1$ : $(\tan x)' = \dfrac{1}{\cos^2 x}$. En séparant plutôt la fraction : $\frac{\cos^2 x}{\cos^2 x} + \frac{\sin^2 x}{\cos^2 x} = 1 + \tan^2 x$.`
      ],
      choices: [String.raw`$1 - \tan^2 x$`, String.raw`$-\dfrac{1}{\cos^2 x}$`, String.raw`$\dfrac{1}{\sin^2 x}$`, String.raw`$1 + \tan^2 x$`], answer: 3,
      explain: String.raw`On écrit $\tan = \frac{\sin}{\cos}$ et on applique la formule du quotient avec $u = \sin$, $v = \cos$ : $\frac{\cos x \cos x - \sin x(-\sin x)}{\cos^2 x} = \frac{\cos^2 x + \sin^2 x}{\cos^2 x}$. Ce numérateur vaut 1, d'où $\frac{1}{\cos^2 x}$, qu'on peut aussi écrire $1 + \tan^2 x$ en séparant la fraction.`,
      rule: String.raw`$(\tan x)' = 1 + \tan^2 x = \dfrac{1}{\cos^2 x}$`,
      why: { 0: String.raw`$1 - \operatorname{th}^2$ est la dérivée de la tangente <b>hyperbolique</b> ; pour $\tan$, $\cos^2 + \sin^2 = 1$ donne un signe plus.`, 1: String.raw`Erreur de signe : $\tan$ est croissante sur chaque intervalle de définition, sa dérivée est donc positive.`, 2: String.raw`Confusion avec la cotangente, dont la dérivée est $-\frac{1}{\sin^2 x}$ ; pour $\tan$ on divise par $\cos^2 x$.` } },
    { id: 'm5-q-009', level: 1, q: String.raw`$(\arctan x)' = $ ?`,
      topic: 'Dérivée de arctangente', sec: 'm5-s-regles',
      steps: [
        String.raw`Rappel : $\arctan x$ est l'angle de $\left]-\frac{\pi}{2}, \frac{\pi}{2}\right[$ dont la tangente vaut $x$ : c'est la fonction réciproque de $\tan$.`,
        String.raw`Dérivée d'une réciproque : $(f^{-1})'(x) = \dfrac{1}{f'\big(f^{-1}(x)\big)}$. Avec $f = \tan$ et $f' = 1 + \tan^2$ : $(\arctan x)' = \dfrac{1}{1 + \tan^2(\arctan x)}$.`,
        String.raw`Comme $\tan(\arctan x) = x$ : $(\arctan x)' = \dfrac{1}{1 + x^2}$, toujours positive ✔.`
      ],
      choices: [String.raw`$\dfrac{1}{1+x^2}$`, String.raw`$\dfrac{1}{\sqrt{1-x^2}}$`, String.raw`$1 + \tan^2 x$`, String.raw`$-\dfrac{1}{1+x^2}$`], answer: 0,
      explain: String.raw`$\arctan$ est la réciproque de $\tan$. La formule de la réciproque donne $(\arctan)'(x) = \frac{1}{\tan'(\arctan x)} = \frac{1}{1 + \tan^2(\arctan x)}$. Or $\tan(\arctan x) = x$, donc $(\arctan x)' = \frac{1}{1+x^2}$, toujours positive : $\arctan$ est croissante sur $\mathbb{R}$.`,
      rule: String.raw`$(\arctan x)' = \dfrac{1}{1+x^2}$`,
      why: { 1: String.raw`C'est la dérivée de $\arcsin$ (avec une racine et un signe moins sous la racine).`, 2: String.raw`C'est la dérivée de $\tan$ elle-même, pas de sa réciproque : il faut prendre l'inverse et l'évaluer en $\arctan x$.`, 3: String.raw`$\arctan$ est croissante : sa dérivée est positive, il n'y a pas de signe moins.` } },
    { id: 'm5-q-010', level: 2, q: String.raw`$(\arccos x)' = $ ? (sur $]-1, 1[$)`,
      topic: 'Dérivée de arccosinus', sec: 'm5-s-usuelles',
      steps: [
        String.raw`Rappel : $\arccos x$ est l'angle de $[0, \pi]$ dont le cosinus vaut $x$. Quand $x$ va de $-1$ à $1$, cet angle va de $\pi$ à $0$ : $\arccos$ est décroissante.`,
        String.raw`Identité : $\arccos x + \arcsin x = \frac{\pi}{2}$ pour $x \in [-1, 1]$, donc $\arccos x = \frac{\pi}{2} - \arcsin x$.`,
        String.raw`On dérive : la constante $\frac{\pi}{2}$ disparaît, $(\arccos x)' = -(\arcsin x)' = -\dfrac{1}{\sqrt{1-x^2}}$ sur $]-1, 1[$ (négative, cohérent avec la décroissance ✔).`
      ],
      choices: [String.raw`$\dfrac{1}{\sqrt{1-x^2}}$`, String.raw`$-\dfrac{1}{\sqrt{1-x^2}}$`, String.raw`$-\dfrac{1}{1+x^2}$`, String.raw`$-\sin x$`], answer: 1,
      explain: String.raw`On utilise l'identité $\arccos x = \frac{\pi}{2} - \arcsin x$ sur $[-1, 1]$. En dérivant, la constante disparaît et il reste $(\arccos x)' = -(\arcsin x)' = -\frac{1}{\sqrt{1-x^2}}$. Le signe moins est cohérent : $\arccos$ est décroissante (elle va de $\pi$ à $0$).`,
      rule: String.raw`$(\arcsin x)' = \dfrac{1}{\sqrt{1-x^2}}$ et $(\arccos x)' = -\dfrac{1}{\sqrt{1-x^2}}$`,
      why: { 0: String.raw`C'est la dérivée de $\arcsin$ ; $\arccos$ est décroissante, il faut un signe moins.`, 2: String.raw`C'est la forme de la dérivée de $\arctan$ (avec un signe en plus) : pas de racine, ce n'est pas la bonne fonction.`, 3: String.raw`C'est la dérivée de $\cos$, pas de sa réciproque $\arccos$.` } },
    { id: 'm5-q-011', level: 1, q: String.raw`$(\operatorname{ch} x)' = $ ?`,
      topic: 'Fonctions hyperboliques', sec: 'm5-s-usuelles',
      steps: [
        String.raw`Rappel : les fonctions hyperboliques sont définies avec l'exponentielle : $\operatorname{ch} x = \frac{\mathrm{e}^x + \mathrm{e}^{-x}}{2}$ et $\operatorname{sh} x = \frac{\mathrm{e}^x - \mathrm{e}^{-x}}{2}$.`,
        String.raw`On dérive terme à terme : $(\mathrm{e}^x)' = \mathrm{e}^x$ et $(\mathrm{e}^{-x})' = -\mathrm{e}^{-x}$ (forme $\mathrm{e}^u$ avec $u' = -1$).`,
        String.raw`Donc $(\operatorname{ch} x)' = \frac{\mathrm{e}^x - \mathrm{e}^{-x}}{2} = \operatorname{sh} x$, sans aucun signe moins devant.`
      ],
      choices: [String.raw`$-\operatorname{sh} x$`, String.raw`$\operatorname{sh} x$`, String.raw`$\operatorname{ch} x$`], answer: 1,
      explain: String.raw`On part de la définition $\operatorname{ch} x = \frac{\mathrm{e}^x + \mathrm{e}^{-x}}{2}$. Comme $(\mathrm{e}^{-x})' = -\mathrm{e}^{-x}$, on obtient $(\operatorname{ch} x)' = \frac{\mathrm{e}^x - \mathrm{e}^{-x}}{2} = \operatorname{sh} x$. Contrairement au cosinus, il n'y a aucun signe moins en trigonométrie hyperbolique.`,
      rule: String.raw`$(\operatorname{ch} x)' = \operatorname{sh} x$ et $(\operatorname{sh} x)' = \operatorname{ch} x$`,
      why: { 0: String.raw`On a recopié le signe de $(\cos)' = -\sin$ : en hyperbolique il n'y en a pas, le calcul avec les exponentielles donne $+\operatorname{sh} x$.`, 2: String.raw`En dérivant $\mathrm{e}^{-x}$ on obtient $-\mathrm{e}^{-x}$ : le signe du second terme change, on tombe sur $\operatorname{sh}$ et non sur $\operatorname{ch}$.` } },
    { id: 'm5-q-012', level: 2, q: String.raw`$(\operatorname{th} x)' = $ ?`,
      topic: 'Tangente hyperbolique', sec: 'm5-s-usuelles',
      steps: [
        String.raw`Rappel : $\operatorname{th} x = \frac{\operatorname{sh} x}{\operatorname{ch} x}$, avec $(\operatorname{sh})' = \operatorname{ch}$, $(\operatorname{ch})' = \operatorname{sh}$ et l'identité $\operatorname{ch}^2 x - \operatorname{sh}^2 x = 1$.`,
        String.raw`Formule du quotient avec $u = \operatorname{sh}$, $v = \operatorname{ch}$ : $(\operatorname{th} x)' = \frac{\operatorname{ch} x\,\operatorname{ch} x - \operatorname{sh} x\,\operatorname{sh} x}{\operatorname{ch}^2 x} = \frac{1}{\operatorname{ch}^2 x}$.`,
        String.raw`En séparant la fraction : $\frac{\operatorname{ch}^2 x}{\operatorname{ch}^2 x} - \frac{\operatorname{sh}^2 x}{\operatorname{ch}^2 x} = 1 - \operatorname{th}^2 x$.`
      ],
      choices: [String.raw`$1 + \operatorname{th}^2 x$`, String.raw`$\dfrac{1}{\operatorname{sh}^2 x}$`, String.raw`$1 - \operatorname{th}^2 x$`, String.raw`$-\dfrac{1}{\operatorname{ch}^2 x}$`], answer: 2,
      explain: String.raw`On écrit $\operatorname{th} = \frac{\operatorname{sh}}{\operatorname{ch}}$ et on applique la formule du quotient : $\frac{\operatorname{ch}^2 x - \operatorname{sh}^2 x}{\operatorname{ch}^2 x}$. L'identité $\operatorname{ch}^2 - \operatorname{sh}^2 = 1$ donne $\frac{1}{\operatorname{ch}^2 x}$, qui s'écrit aussi $1 - \operatorname{th}^2 x$ en séparant la fraction.`,
      rule: String.raw`$(\operatorname{th} x)' = 1 - \operatorname{th}^2 x = \dfrac{1}{\operatorname{ch}^2 x}$`,
      why: { 0: String.raw`C'est la forme de $(\tan)'$ ; ici $(\operatorname{ch})' = +\operatorname{sh}$ et le numérateur vaut $\operatorname{ch}^2 - \operatorname{sh}^2 = 1$, ce qui fait apparaître un signe moins.`, 1: String.raw`Le dénominateur est $\operatorname{ch}^2$ car on dérive un quotient par $\operatorname{ch}$.`, 3: String.raw`$\operatorname{th}$ est croissante : sa dérivée est positive.` } },
    { id: 'm5-q-013', level: 2, q: String.raw`Dérivée de $f(x) = 2^x$ ?`,
      topic: 'Exponentielle de base a', sec: 'm5-s-usuelles',
      steps: [
        String.raw`Rappel : pour $a \gt 0$, la fonction $x \mapsto a^x$ est définie par $a^x = \mathrm{e}^{x\ln a}$ : la base est fixe et c'est l'exposant qui varie, ce n'est donc pas une fonction puissance.`,
        String.raw`Avec $a = 2$ : $2^x = \mathrm{e}^{x\ln 2}$, forme $\mathrm{e}^u$ avec $u = x\ln 2$ et $u' = \ln 2$ (une constante).`,
        String.raw`$(2^x)' = u'\,\mathrm{e}^u = \ln 2 \times \mathrm{e}^{x\ln 2} = \ln(2)\,2^x$.`
      ],
      choices: [String.raw`$x\,2^{x-1}$`, String.raw`$2^x$`, String.raw`$\dfrac{2^x}{\ln 2}$`, String.raw`$\ln(2)\,2^x$`], answer: 3,
      explain: String.raw`Ici c'est l'exposant qui varie : on revient à l'exponentielle avec $2^x = \mathrm{e}^{x\ln 2}$. C'est une forme $\mathrm{e}^u$ avec $u = x\ln 2$ et $u' = \ln 2$, donc $(2^x)' = \ln(2)\,\mathrm{e}^{x\ln 2} = \ln(2)\,2^x$. Comme $\ln 2 \approx 0{,}69 \gt 0$, la fonction est bien croissante.`,
      rule: String.raw`$(a^x)' = \ln(a)\,a^x$ car $a^x = \mathrm{e}^{x\ln a}$`,
      why: { 0: String.raw`La règle $(x^n)' = nx^{n-1}$ suppose un exposant <b>constant</b> et une base variable ; ici c'est l'inverse.`, 1: String.raw`Seule $\mathrm{e}^x$ est sa propre dérivée ; pour une autre base il apparaît le facteur $\ln a$.`, 2: String.raw`$\frac{2^x}{\ln 2}$ est une <b>primitive</b> de $2^x$ : on a divisé par $\ln 2$ au lieu de multiplier.` } },
    { id: 'm5-q-014', level: 1, q: String.raw`Géométriquement, le nombre dérivé $f'(a)$ est :`,
      topic: 'Interprétation du nombre dérivé', sec: 'm5-s-def',
      steps: [
        String.raw`Rappel : le taux d'accroissement $\frac{f(a+h) - f(a)}{h}$ est la pente de la sécante (la corde) qui relie les points de la courbe d'abscisses $a$ et $a + h$.`,
        String.raw`Le nombre dérivé est la limite de ce taux quand $h \to 0$ : le second point se rapproche du premier, la sécante pivote et tend vers la tangente.`,
        String.raw`Donc $f'(a)$ est la pente (le coefficient directeur) de la tangente au point $\big(a, f(a)\big)$.`
      ],
      choices: [String.raw`la pente de la tangente à la courbe au point d'abscisse $a$`, String.raw`l'ordonnée du point d'abscisse $a$`, String.raw`la pente de la droite reliant l'origine au point $\big(a, f(a)\big)$`, String.raw`l'aire sous la courbe entre $0$ et $a$`], answer: 0,
      explain: String.raw`Par définition, $f'(a) = \lim_{h \to 0} \frac{f(a+h) - f(a)}{h}$ : c'est la limite des pentes des sécantes passant par $\big(a, f(a)\big)$. Quand $h$ tend vers 0, ces sécantes se rapprochent de la tangente, donc $f'(a)$ est le coefficient directeur (la pente) de la tangente en ce point.`,
      rule: String.raw`$f'(a) = \lim_{h \to 0} \dfrac{f(a+h) - f(a)}{h}$ = pente de la tangente en $a$`,
      why: { 1: String.raw`L'ordonnée du point, c'est $f(a)$ ; le nombre dérivé mesure une pente, pas une hauteur.`, 2: String.raw`C'est la pente de la corde issue de l'origine, $\frac{f(a)}{a}$, qui n'a pas de raison d'être tangente à la courbe.`, 3: String.raw`L'aire sous la courbe relève de l'intégrale, opération inverse de la dérivation.` } },
    { id: 'm5-q-015', level: 1, q: String.raw`Équation de la tangente à la courbe de $f$ au point d'abscisse $a$ :`,
      topic: 'Équation de la tangente', sec: 'm5-s-def',
      steps: [
        String.raw`Rappel : une droite de pente $m$ passant par le point $(x_0, y_0)$ a pour équation $y = m(x - x_0) + y_0$.`,
        String.raw`La tangente en $a$ a pour pente $m = f'(a)$ et passe par le point $\big(a, f(a)\big)$, d'où $y = f'(a)(x - a) + f(a)$.`,
        String.raw`Contrôle : en $x = a$, le terme $f'(a)(x - a)$ s'annule et on trouve bien $y = f(a)$ ✔.`
      ],
      choices: [String.raw`$y = f(a)(x-a) + f'(a)$`, String.raw`$y = f'(a)(x-a) + f(a)$`, String.raw`$y = f'(a)(x+a) + f(a)$`, String.raw`$y = f'(a)\,x + f(a)$`], answer: 1,
      explain: String.raw`La tangente est la droite de pente $f'(a)$ qui passe par le point $\big(a, f(a)\big)$. Une droite de pente $m$ passant par $(a, b)$ s'écrit $y = m(x - a) + b$, d'où $y = f'(a)(x-a) + f(a)$. Contrôle immédiat : pour $x = a$ on retrouve bien $y = f(a)$.`,
      rule: String.raw`Tangente en $a$ : $y = f'(a)(x - a) + f(a)$`,
      why: { 0: String.raw`Rôles de $f(a)$ et $f'(a)$ inversés : la pente (coefficient de $x$) doit être $f'(a)$.`, 2: String.raw`Erreur de signe : en $x = a$ on doit retrouver $f(a)$, il faut donc le facteur $(x - a)$ qui s'annule en $a$.`, 3: String.raw`Oubli du décalage $-a$ : cette droite a la bonne pente mais ne passe pas par $\big(a, f(a)\big)$, sauf si $a = 0$.` } },
    { id: 'm5-q-016', level: 2, q: String.raw`La fonction $x \mapsto |x|$ en $0$ est :`,
      topic: 'Dérivabilité et continuité', sec: 'm5-s-def',
      steps: [
        String.raw`Rappel : $f$ est continue en $a$ si $f(x) \to f(a)$ quand $x \to a$ (pas de saut) ; elle est dérivable en $a$ si le taux d'accroissement $\frac{f(a+h) - f(a)}{h}$ a une limite finie (une seule tangente).`,
        String.raw`Continuité en $0$ : $|h| \to 0 = |0|$ quand $h \to 0$ ✔.`,
        String.raw`Dérivabilité : $\frac{|h| - |0|}{h} = \frac{|h|}{h}$ vaut $1$ si $h \gt 0$ et $-1$ si $h \lt 0$ : les limites à droite et à gauche diffèrent, le taux n'a pas de limite ✗.`,
        String.raw`Conclusion : continue mais non dérivable en $0$ (point anguleux, deux demi-tangentes de pentes $1$ et $-1$).`
      ],
      choices: [String.raw`continue et dérivable`, String.raw`continue mais non dérivable`, String.raw`ni continue ni dérivable`, String.raw`dérivable mais non continue`], answer: 1,
      explain: String.raw`Continuité : $|h| \to 0 = |0|$ quand $h \to 0$, donc $|x|$ est continue en $0$. Dérivabilité : le taux d'accroissement $\frac{|h| - 0}{h}$ vaut $1$ pour $h \gt 0$ et $-1$ pour $h \lt 0$, il n'a donc pas de limite. La courbe présente un point anguleux : deux demi-tangentes de pentes $1$ et $-1$.`,
      rule: String.raw`Dérivable ⇒ continue, mais la réciproque est fausse (contre-exemple : $|x|$ en $0$).`,
      why: { 0: String.raw`Dérivées à droite ($+1$) et à gauche ($-1$) différentes : la limite du taux d'accroissement n'existe pas, donc pas dérivable.`, 2: String.raw`$|x|$ est continue en $0$ : il n'y a pas de saut, $|h|$ tend bien vers $0$.`, 3: String.raw`Impossible : toute fonction dérivable en un point y est continue.` } },
    { id: 'm5-q-017', level: 2, q: String.raw`$f$ est dérivable sur $\mathbb{R}$ et $f'(a) = 0$. Que peut-on affirmer ?`,
      topic: 'Dérivée nulle et extremum', sec: 'm5-s-variations',
      steps: [
        String.raw`Rappel : $f'(a)$ est la pente de la tangente en $a$. Un extremum local correspond à un changement de sens de variation, donc à un <b>changement de signe</b> de $f'$.`,
        String.raw`$f'(a) = 0$ signifie seulement : tangente de pente nulle, donc horizontale.`,
        String.raw`Contre-exemple pour l'extremum : $f(x) = x^3$, $f'(x) = 3x^2$, $f'(0) = 0$, mais $3x^2 \geq 0$ ne change pas de signe : $f$ est croissante, sans extremum en $0$.`
      ],
      choices: [String.raw`$f$ admet un extremum local en $a$`, String.raw`la tangente en $a$ est horizontale`, String.raw`$f$ est constante au voisinage de $a$`, String.raw`le point d'abscisse $a$ est un point d'inflexion`], answer: 1,
      explain: String.raw`$f'(a)$ est la pente de la tangente en $a$ : $f'(a) = 0$ dit seulement que cette tangente est horizontale, d'équation $y = f(a)$. Pour conclure à un extremum, il faut en plus que $f'$ <b>change de signe</b> en $a$ ; l'exemple $x^3$ en $0$ montre que ce n'est pas automatique.`,
      rule: String.raw`$f'(a) = 0$ ⇔ tangente horizontale ; extremum local ⇔ $f'$ s'annule <b>en changeant de signe</b>.`,
      why: { 0: String.raw`Pas forcément : $x^3$ vérifie $f'(0) = 0$ mais est strictement croissante, sans extremum.`, 2: String.raw`L'annulation de $f'$ en un seul point ne dit pas que $f$ est constante autour : $x^2$ a $f'(0) = 0$ et n'est constante nulle part.`, 3: String.raw`Pas forcément : $x^2$ a $f'(0) = 0$ et un minimum en $0$, pas une inflexion.` } },
    { id: 'm5-q-018', level: 2, q: String.raw`$f$ est deux fois dérivable sur $I$ avec $f'' \gt 0$. Alors :`,
      topic: 'Convexité', sec: 'm5-s-convexite',
      steps: [
        String.raw`Rappel : une fonction convexe a une courbe qui « tourne vers le haut » (forme de sourire) : ses pentes augmentent, et la courbe reste au-dessus de chacune de ses tangentes.`,
        String.raw`$f'' \gt 0$ signifie que $f'$ (la pente) est croissante, ce qui est exactement la convexité.`,
        String.raw`Cela ne dit rien du signe de $f$ ni de celui de $f'$ : $x^2 - 1$ est convexe, négative sur $]-1, 1[$ et décroissante sur $\mathbb{R}^-$.`
      ],
      choices: [String.raw`$f$ est croissante sur $I$`, String.raw`$f$ est convexe : sa courbe est au-dessus de ses tangentes`, String.raw`$f$ est concave sur $I$`, String.raw`$f$ est positive sur $I$`], answer: 1,
      explain: String.raw`$f'' \gt 0$ signifie que $f'$ est croissante : les pentes des tangentes augmentent de gauche à droite, la courbe « tourne vers le haut ». C'est la définition de la convexité, et une fonction convexe a sa courbe au-dessus de chacune de ses tangentes. Exemple : $x^2$ avec $f'' = 2 \gt 0$.`,
      rule: String.raw`$f'' \geq 0$ sur $I$ ⇔ $f$ convexe ; $f'' \leq 0$ ⇔ $f$ concave.`,
      why: { 0: String.raw`$f'' \gt 0$ dit que $f'$ croît, pas que $f' \geq 0$ : $x^2$ est convexe mais décroît sur $\mathbb{R}^-$.`, 2: String.raw`C'est l'inverse : concave correspond à $f'' \leq 0$ (courbe sous ses tangentes).`, 3: String.raw`$f''$ ne donne aucune information sur le signe de $f$ : $x^2 - 1$ est convexe et négative sur $]-1, 1[$.` } },
    { id: 'm5-q-019', level: 2, q: String.raw`Le point $\big(a, f(a)\big)$ est un point d'inflexion si :`,
      topic: 'Point d\'inflexion', sec: 'm5-s-convexite',
      steps: [
        String.raw`Rappel : un point d'inflexion est un point où la courbe change de convexité (elle passe de convexe à concave ou l'inverse) ; elle y traverse sa tangente.`,
        String.raw`La convexité est donnée par le signe de $f''$ : changer de convexité, c'est donc avoir $f''$ qui change de signe en $a$.`,
        String.raw`$f''(a) = 0$ seul ne suffit pas : $f(x) = x^4$ a $f''(x) = 12x^2$, nulle en $0$ mais positive des deux côtés, donc pas d'inflexion.`
      ],
      choices: [String.raw`$f''(a) = 0$`, String.raw`$f'(a) = 0$`, String.raw`$f''$ s'annule en $a$ en changeant de signe`, String.raw`$f'$ change de signe en $a$`], answer: 2,
      explain: String.raw`Un point d'inflexion est un point où la courbe change de convexité : elle passe de convexe à concave ou l'inverse. Comme la convexité est donnée par le signe de $f''$, il faut que $f''$ s'annule <b>en changeant de signe</b>. La seule annulation ne suffit pas, comme le montre $x^4$ en $0$.`,
      rule: String.raw`Inflexion en $a$ ⇔ $f''$ change de signe en $a$.`,
      why: { 0: String.raw`Condition nécessaire mais insuffisante : $x^4$ a $f''(0) = 0$ mais $f'' = 12x^2 \geq 0$ reste positive, la fonction reste convexe.`, 1: String.raw`$f'(a) = 0$ signifie tangente horizontale, ce qui concerne la pente et non la convexité.`, 3: String.raw`Un changement de signe de $f'$ caractérise un <b>extremum</b>, pas une inflexion.` } },
    { id: 'm5-q-020', level: 2, q: String.raw`$f$ est strictement monotone et dérivable, $y = f(x)$ avec $f'(x) \neq 0$. Alors $(f^{-1})'(y) = $ ?`,
      topic: 'Dérivée de la réciproque', sec: 'm5-s-regles',
      steps: [
        String.raw`Rappel : $f^{-1}$ « défait » ce que fait $f$ : si $y = f(x)$ alors $x = f^{-1}(y)$, et $f\big(f^{-1}(y)\big) = y$. Les deux courbes sont symétriques par rapport à la droite $y = x$.`,
        String.raw`On dérive $f\big(f^{-1}(y)\big) = y$ par rapport à $y$ (dérivée d'une composée) : $f'\big(f^{-1}(y)\big) \times (f^{-1})'(y) = 1$.`,
        String.raw`Avec $f^{-1}(y) = x$ : $f'(x)\,(f^{-1})'(y) = 1$, d'où $(f^{-1})'(y) = \dfrac{1}{f'(x)}$, ce qui est possible car $f'(x) \neq 0$.`
      ],
      choices: [String.raw`$-\dfrac{1}{f'(x)}$`, String.raw`$\dfrac{1}{f(x)}$`, String.raw`$\dfrac{1}{f'(x)}$`, String.raw`$f'(x)$`], answer: 2,
      explain: String.raw`On dérive l'identité $f\big(f^{-1}(y)\big) = y$ par rapport à $y$ avec la règle de la chaîne : $f'\big(f^{-1}(y)\big) \times (f^{-1})'(y) = 1$, soit $f'(x)\,(f^{-1})'(y) = 1$. D'où $(f^{-1})'(y) = \frac{1}{f'(x)}$ : la symétrie par rapport à $y = x$ échange les axes et inverse les pentes.`,
      rule: String.raw`$(f^{-1})'(y) = \dfrac{1}{f'\big(f^{-1}(y)\big)}$`,
      why: { 0: String.raw`Pas de signe moins : une fonction croissante a une réciproque croissante, les pentes gardent le même signe.`, 1: String.raw`Confusion entre la fonction réciproque $f^{-1}$ et l'inverse $\frac{1}{f}$ : ce sont deux objets différents.`, 3: String.raw`La symétrie par rapport à $y = x$ échange abscisses et ordonnées : la pente $m$ devient $\frac{1}{m}$, elle ne reste pas égale.` } },
    { id: 'm5-q-021', level: 2, q: String.raw`Formule de Leibniz pour $n = 2$ : $(fg)'' = $ ?`,
      topic: 'Formule de Leibniz', sec: 'm5-s-successives',
      steps: [
        String.raw`Rappel : $(fg)''$ est la dérivée de la dérivée de $fg$. La formule de Leibniz généralise la règle du produit aux dérivées successives, avec les coefficients du binôme de Newton.`,
        String.raw`Première dérivation : $(fg)' = f'g + fg'$.`,
        String.raw`Seconde dérivation, terme par terme : $(f'g)' = f''g + f'g'$ et $(fg')' = f'g' + fg''$.`,
        String.raw`Somme : $(fg)'' = f''g + 2f'g' + fg''$, coefficients $1, 2, 1$ comme dans $(a+b)^2 = a^2 + 2ab + b^2$.`
      ],
      choices: [String.raw`$f''g''$`, String.raw`$f''g + f'g' + fg''$`, String.raw`$f''g + 2f'g' + fg''$`, String.raw`$f''g - 2f'g' + fg''$`], answer: 2,
      explain: String.raw`On dérive deux fois avec la règle du produit. D'abord $(fg)' = f'g + fg'$, puis on dérive chacun des deux termes : $(f'g)' = f''g + f'g'$ et $(fg')' = f'g' + fg''$. En additionnant, le terme $f'g'$ apparaît deux fois : $(fg)'' = f''g + 2f'g' + fg''$, avec les coefficients binomiaux 1, 2, 1.`,
      rule: String.raw`$(fg)^{(n)} = \sum_{k=0}^{n} \binom{n}{k} f^{(k)} g^{(n-k)}$`,
      why: { 0: String.raw`Généralisation fausse de « dérivée du produit = produit des dérivées », déjà fausse au rang 1.`, 1: String.raw`Il manque le coefficient $\binom{2}{1} = 2$ : le terme $f'g'$ provient des deux dérivations et apparaît deux fois.`, 3: String.raw`Aucun signe moins : tous les termes de la règle du produit sont positifs (c'est l'analogue de $(a+b)^2$).` } },
    { id: 'm5-q-022', level: 2, q: String.raw`Dérivée troisième de $\sin x$ ?`,
      topic: 'Dérivées successives', sec: 'm5-s-successives',
      steps: [
        String.raw`Rappel : la dérivée troisième $f'''$ s'obtient en dérivant trois fois de suite la fonction.`,
        String.raw`$(\sin x)' = \cos x$, puis $(\cos x)' = -\sin x$, puis $(-\sin x)' = -\cos x$.`,
        String.raw`Donc $\sin''' x = -\cos x$. Le cycle a une période de 4 : la dérivée quatrième redonne $\sin x$.`
      ],
      choices: [String.raw`$\cos x$`, String.raw`$-\cos x$`, String.raw`$-\sin x$`, String.raw`$\sin x$`], answer: 1,
      explain: String.raw`On dérive trois fois de suite : $(\sin)' = \cos$, puis $(\cos)' = -\sin$, puis $(-\sin)' = -\cos$. Les dérivées successives du sinus sont périodiques de période 4. Formule générale : $\sin^{(n)}(x) = \sin\left(x + n\frac{\pi}{2}\right)$, et pour $n = 3$ on trouve $\sin\left(x + \frac{3\pi}{2}\right) = -\cos x$.`,
      rule: String.raw`$\sin^{(n)}(x) = \sin\left(x + n\dfrac{\pi}{2}\right)$`,
      why: { 0: String.raw`C'est la dérivée première (ou une erreur de signe sur la troisième).`, 2: String.raw`C'est la dérivée seconde : il manque une dérivation.`, 3: String.raw`C'est la dérivée quatrième : on revient au point de départ après 4 dérivations.` } },
    { id: 'm5-q-023', level: 2, q: String.raw`Dérivée $n$-ième de $\mathrm{e}^{2x}$ ?`,
      topic: 'Dérivée n-ième', sec: 'm5-s-successives',
      steps: [
        String.raw`Rappel : la dérivée $n$-ième $f^{(n)}$ s'obtient en dérivant $n$ fois ; pour trouver une formule en $n$, on calcule les premières dérivées et on repère le motif.`,
        String.raw`$(\mathrm{e}^{2x})' = 2\,\mathrm{e}^{2x}$, $(\mathrm{e}^{2x})'' = 2 \times 2\,\mathrm{e}^{2x} = 4\,\mathrm{e}^{2x}$, $(\mathrm{e}^{2x})''' = 8\,\mathrm{e}^{2x}$.`,
        String.raw`Chaque dérivation multiplie par $2$ : $(\mathrm{e}^{2x})^{(n)} = 2^n\,\mathrm{e}^{2x}$ (récurrence immédiate).`
      ],
      choices: [String.raw`$2\,\mathrm{e}^{2x}$`, String.raw`$2n\,\mathrm{e}^{2x}$`, String.raw`$2^n\,\mathrm{e}^{2x}$`, String.raw`$\mathrm{e}^{2x}$`], answer: 2,
      explain: String.raw`Chaque dérivation de $\mathrm{e}^{2x}$ fait sortir un facteur $2$ (dérivée de l'intérieur $2x$) et laisse l'exponentielle inchangée. Après une dérivation on a $2\mathrm{e}^{2x}$, après deux $4\mathrm{e}^{2x}$, après trois $8\mathrm{e}^{2x}$ : par récurrence, $(\mathrm{e}^{2x})^{(n)} = 2^n\,\mathrm{e}^{2x}$.`,
      rule: String.raw`$\left(\mathrm{e}^{ax}\right)^{(n)} = a^n\,\mathrm{e}^{ax}$`,
      why: { 0: String.raw`C'est seulement la dérivée première (cas $n = 1$).`, 1: String.raw`Le facteur $2$ se <b>multiplie</b> à chaque dérivation ($2 \times 2 \times \dots$), il ne s'additionne pas.`, 3: String.raw`Oubli du facteur $2$ apporté à chaque fois par la dérivée de $2x$.` } },
    { id: 'm5-q-024', level: 2, q: String.raw`Le théorème de Rolle s'applique à $f$ sur $[a, b]$ lorsque :`,
      topic: 'Théorème de Rolle', sec: 'm5-s-taf',
      steps: [
        String.raw`Rappel : le théorème de Rolle dit qu'une courbe « sans saut ni pointe » qui part et arrive à la même hauteur possède au moins une tangente horizontale entre les deux.`,
        String.raw`Hypothèses : $f$ continue sur $[a, b]$ (bornes comprises), dérivable sur $]a, b[$ (pas de point anguleux), et $f(a) = f(b)$.`,
        String.raw`Conclusion : il existe $c \in\, ]a, b[$ avec $f'(c) = 0$. Si l'on retire une hypothèse, il y a un contre-exemple : $|x|$ sur $[-1, 1]$, ou $x$ sur $[0, 1]$.`
      ],
      choices: [String.raw`$f$ est continue sur $[a, b]$, dérivable sur $]a, b[$ et $f(a) = f(b)$`, String.raw`$f$ est dérivable sur $]a, b[$`, String.raw`$f$ est continue sur $[a, b]$ et $f(a) = f(b)$`, String.raw`$f(a) = f(b) = 0$, sans autre hypothèse`], answer: 0,
      explain: String.raw`Les trois hypothèses sont nécessaires : continuité sur le segment fermé $[a, b]$, dérivabilité sur l'ouvert $]a, b[$, et égalité $f(a) = f(b)$. La conclusion est alors qu'il existe $c \in\, ]a, b[$ tel que $f'(c) = 0$ : une tangente horizontale. Si l'une des hypothèses manque, des contre-exemples simples existent.`,
      rule: String.raw`Rolle : $f$ continue sur $[a,b]$, dérivable sur $]a,b[$, $f(a) = f(b)$ ⇒ $\exists c \in\, ]a,b[$, $f'(c) = 0$.`,
      why: { 1: String.raw`Il manque $f(a) = f(b)$ et la continuité aux bornes : $x$ sur $[0,1]$ est dérivable mais $f'$ ne s'annule jamais.`, 2: String.raw`Il manque la dérivabilité : $|x|$ sur $[-1, 1]$ vérifie le reste mais n'a de tangente horizontale nulle part.`, 3: String.raw`$f(a) = f(b)$ suffit (pas besoin que ce soit $0$), mais la continuité et la dérivabilité sont indispensables.` } },
    { id: 'm5-q-025', level: 2, q: String.raw`Le théorème des accroissements finis affirme qu'il existe $c \in\, ]a, b[$ tel que :`,
      topic: 'Accroissements finis', sec: 'm5-s-taf',
      steps: [
        String.raw`Rappel : le TAF généralise Rolle : entre $a$ et $b$, il existe un point où la tangente est parallèle à la corde. En cinématique : à un instant du trajet, la vitesse instantanée égale la vitesse moyenne.`,
        String.raw`Pente de la corde : $\dfrac{f(b) - f(a)}{b - a}$ ; pente de la tangente en $c$ : $f'(c)$.`,
        String.raw`Égalité des pentes : $f'(c) = \dfrac{f(b) - f(a)}{b - a}$, soit $f(b) - f(a) = f'(c)(b - a)$.`
      ],
      choices: [String.raw`$f'(c) = 0$`, String.raw`$f(b) - f(a) = f'(c)(b - a)$`, String.raw`$f(c) = \dfrac{f(a) + f(b)}{2}$`, String.raw`$f'(c) = f(b) - f(a)$`], answer: 1,
      explain: String.raw`Pour $f$ continue sur $[a, b]$ et dérivable sur $]a, b[$, il existe un point $c$ où la tangente est parallèle à la corde joignant $\big(a, f(a)\big)$ et $\big(b, f(b)\big)$. La pente de la corde est $\frac{f(b) - f(a)}{b - a}$, donc $f'(c) = \frac{f(b) - f(a)}{b - a}$, ce qui s'écrit $f(b) - f(a) = f'(c)(b - a)$.`,
      rule: String.raw`TAF : $f(b) - f(a) = f'(c)(b - a)$ pour un $c \in\, ]a, b[$`,
      why: { 0: String.raw`C'est la conclusion du théorème de Rolle, cas particulier du TAF où $f(a) = f(b)$.`, 2: String.raw`C'est une conséquence du théorème des valeurs intermédiaires (sur $f$), pas du TAF (qui porte sur $f'$).`, 3: String.raw`Il faut diviser par $b - a$ : $f'(c)$ est une <b>pente</b>, rapport d'une variation verticale sur une variation horizontale.` } },
    { id: 'm5-q-026', level: 3, q: String.raw`Pour tous réels $a$ et $b$, on a $|\sin b - \sin a| \leq$ ?`,
      topic: 'Inégalité des accroissements finis', sec: 'm5-s-taf',
      steps: [
        String.raw`Rappel : si la pente d'une fonction est toujours comprise entre $-M$ et $M$, la fonction ne peut pas varier de plus de $M$ fois l'écart en $x$ : $|f(b) - f(a)| \leq M\,|b - a|$.`,
        String.raw`Pour $f = \sin$ : $f' = \cos$ et $|\cos t| \leq 1$ pour tout réel $t$, donc $M = 1$.`,
        String.raw`Conclusion : $|\sin b - \sin a| \leq 1 \times |b - a|$ pour tous réels $a$ et $b$.`
      ],
      choices: [String.raw`$|b - a|$`, String.raw`$|\cos b - \cos a|$`, String.raw`$\frac{1}{2}|b - a|$`, String.raw`$|b - a|^2$`], answer: 0,
      explain: String.raw`On applique l'inégalité des accroissements finis : si $|f'| \leq M$ sur un intervalle, alors $|f(b) - f(a)| \leq M\,|b - a|$. Ici $f = \sin$ et $|\sin'| = |\cos| \leq 1$ partout, donc $|\sin b - \sin a| \leq |b - a|$. On dit que $\sin$ est 1-lipschitzienne.`,
      rule: String.raw`IAF : $|f'| \leq M$ ⇒ $|f(b) - f(a)| \leq M\,|b - a|$`,
      why: { 1: String.raw`Faux : pour $a = -\frac{\pi}{2}$, $b = \frac{\pi}{2}$, le membre de gauche vaut $2$ et celui de droite $0$.`, 2: String.raw`Faux près de $0$ : $\sin b - \sin a \approx b - a$ car $\cos 0 = 1$, la constante $\frac12$ est trop petite.`, 3: String.raw`Faux pour $|b - a|$ petit : $\sin b - \sin a \approx (b - a)\cos a$, bien plus grand que $(b-a)^2$.` } },
    { id: 'm5-q-027', level: 1, q: String.raw`$f(x, y) = x^2y^3$. Que vaut $\dfrac{\partial f}{\partial x}$ ?`,
      topic: 'Dérivées partielles', sec: 'm5-s-partielles',
      steps: [
        String.raw`Rappel : pour une fonction de deux variables, $\frac{\partial f}{\partial x}$ mesure la variation de $f$ quand seul $x$ bouge : on dérive par rapport à $x$ en traitant $y$ comme une constante.`,
        String.raw`On écrit $f = y^3 \cdot x^2$ : le facteur $y^3$ joue le rôle d'un coefficient constant.`,
        String.raw`$\dfrac{\partial f}{\partial x} = y^3 \cdot (x^2)' = y^3 \cdot 2x = 2xy^3$.`
      ],
      choices: [String.raw`$2xy^3$`, String.raw`$3x^2y^2$`, String.raw`$6xy^2$`, String.raw`$2xy^3 + 3x^2y^2$`], answer: 0,
      explain: String.raw`Pour la dérivée partielle par rapport à $x$, la variable $y$ est figée et se comporte comme une constante. On écrit donc $f = y^3 \times x^2$, où $y^3$ est un coefficient constant. On dérive $x^2$ en $2x$ et on garde le coefficient : $\frac{\partial f}{\partial x} = y^3 \times 2x = 2xy^3$.`,
      rule: String.raw`$\dfrac{\partial f}{\partial x}$ : on dérive par rapport à $x$, les autres variables étant constantes.`,
      why: { 1: String.raw`C'est $\frac{\partial f}{\partial y}$ : on a dérivé par rapport à $y$ au lieu de $x$.`, 2: String.raw`On a dérivé les deux facteurs : $y^3$ est une constante pour $\frac{\partial}{\partial x}$ et ne se dérive pas.`, 3: String.raw`C'est la somme des deux dérivées partielles, qui n'a pas de sens ici ; on ne demande que $\frac{\partial f}{\partial x}$.` } },
    { id: 'm5-q-028', level: 2, q: String.raw`Gradient de $f(x, y) = x^2 + y^2$ au point $(1, 2)$ ?`,
      topic: 'Gradient', sec: 'm5-s-partielles',
      steps: [
        String.raw`Rappel : le gradient $\nabla f$ est le vecteur dont les composantes sont les dérivées partielles ; il indique la direction dans laquelle $f$ augmente le plus vite.`,
        String.raw`$\frac{\partial f}{\partial x} = 2x$ ($y^2$ est constant) et $\frac{\partial f}{\partial y} = 2y$ ($x^2$ est constant), donc $\nabla f = (2x, 2y)$.`,
        String.raw`Au point $(1, 2)$ : $\nabla f(1, 2) = (2 \times 1, 2 \times 2) = (2, 4)$.`
      ],
      choices: [String.raw`$(1, 2)$`, String.raw`$(2, 4)$`, String.raw`$5$`, String.raw`$(2, 2)$`], answer: 1,
      explain: String.raw`Le gradient est le vecteur des dérivées partielles : $\nabla f = \left(\frac{\partial f}{\partial x}, \frac{\partial f}{\partial y}\right) = (2x, 2y)$. On l'évalue au point $(1, 2)$ : $(2 \times 1, 2 \times 2) = (2, 4)$. Ce vecteur pointe dans la direction où $f$ augmente le plus vite, ici en s'éloignant de l'origine.`,
      rule: String.raw`$\nabla f = \left(\dfrac{\partial f}{\partial x}, \dfrac{\partial f}{\partial y}\right)$`,
      why: { 0: String.raw`Oubli du facteur 2 de la dérivée de $x^2$ et de $y^2$ : on a recopié le point au lieu de dériver.`, 2: String.raw`$5 = f(1, 2)$ est la valeur de la fonction ; le gradient est un <b>vecteur</b> de dérivées partielles.`, 3: String.raw`Erreur sur la seconde composante : $\frac{\partial f}{\partial y} = 2y = 4$ en $y = 2$.` } },
    { id: 'm5-q-029', level: 2, q: String.raw`Différentielle de $f(x, y) = xy$ ?`,
      topic: 'Différentielle', sec: 'm5-s-partielles',
      steps: [
        String.raw`Rappel : la différentielle $\mathrm{d}f$ donne la petite variation de $f$ quand $x$ varie de $\mathrm{d}x$ et $y$ de $\mathrm{d}y$ : $\mathrm{d}f = \frac{\partial f}{\partial x}\,\mathrm{d}x + \frac{\partial f}{\partial y}\,\mathrm{d}y$.`,
        String.raw`Pour $f = xy$ : $\frac{\partial f}{\partial x} = y$ ($y$ constant) et $\frac{\partial f}{\partial y} = x$ ($x$ constant).`,
        String.raw`D'où $\mathrm{d}f = y\,\mathrm{d}x + x\,\mathrm{d}y$.`
      ],
      choices: [String.raw`$\mathrm{d}f = \mathrm{d}x\,\mathrm{d}y$`, String.raw`$\mathrm{d}f = y\,\mathrm{d}x + x\,\mathrm{d}y$`, String.raw`$\mathrm{d}f = x\,\mathrm{d}x + y\,\mathrm{d}y$`, String.raw`$\mathrm{d}f = \mathrm{d}x + \mathrm{d}y$`], answer: 1,
      explain: String.raw`La différentielle s'écrit $\mathrm{d}f = \frac{\partial f}{\partial x}\mathrm{d}x + \frac{\partial f}{\partial y}\mathrm{d}y$. Ici $\frac{\partial (xy)}{\partial x} = y$ (car $y$ est constant) et $\frac{\partial (xy)}{\partial y} = x$, d'où $\mathrm{d}f = y\,\mathrm{d}x + x\,\mathrm{d}y$. On reconnaît la règle du produit écrite avec des différentielles.`,
      rule: String.raw`$\mathrm{d}f = \dfrac{\partial f}{\partial x}\,\mathrm{d}x + \dfrac{\partial f}{\partial y}\,\mathrm{d}y$`,
      why: { 0: String.raw`La différentielle est <b>linéaire</b> en $\mathrm{d}x$ et $\mathrm{d}y$ : pas de produit de différentielles (ce serait un terme d'ordre 2, négligeable).`, 2: String.raw`Dérivées partielles inversées : $\frac{\partial (xy)}{\partial x} = y$, et non $x$.`, 3: String.raw`C'est la différentielle de $x + y$ ; pour un produit, chaque terme est pondéré par l'autre variable.` } },
    { id: 'm5-q-030', level: 2, q: String.raw`On calcule $U = RI$. Incertitude relative (majorant) sur $U$ ?`,
      topic: 'Propagation des incertitudes', sec: 'm5-s-partielles',
      steps: [
        String.raw`Rappel : l'incertitude relative $\frac{\Delta U}{U}$ est l'erreur rapportée à la valeur (en %). Pour un produit, on utilise la dérivée logarithmique, car $\ln$ transforme les produits en sommes.`,
        String.raw`$\ln U = \ln R + \ln I$, et en différentiant : $\dfrac{\mathrm{d}U}{U} = \dfrac{\mathrm{d}R}{R} + \dfrac{\mathrm{d}I}{I}$.`,
        String.raw`Majorant (pire cas, erreurs de même sens) : $\dfrac{\Delta U}{U} = \dfrac{\Delta R}{R} + \dfrac{\Delta I}{I}$.`
      ],
      choices: [String.raw`$\dfrac{\Delta U}{U} = \dfrac{\Delta R}{R}\times\dfrac{\Delta I}{I}$`, String.raw`$\Delta U = \Delta R + \Delta I$`, String.raw`$\dfrac{\Delta U}{U} = \dfrac{\Delta R}{R} + \dfrac{\Delta I}{I}$`, String.raw`$\dfrac{\Delta U}{U} = \dfrac{\Delta R}{R} - \dfrac{\Delta I}{I}$`], answer: 2,
      explain: String.raw`On utilise la dérivée logarithmique : $\ln U = \ln R + \ln I$, puis on différentie : $\frac{\mathrm{d}U}{U} = \frac{\mathrm{d}R}{R} + \frac{\mathrm{d}I}{I}$. Pour obtenir un majorant, on prend les valeurs absolues des erreurs (dans le pire cas elles s'ajoutent) : pour un produit, les incertitudes relatives s'additionnent.`,
      rule: String.raw`Produit ou quotient : $\dfrac{\Delta U}{U} = \dfrac{\Delta R}{R} + \dfrac{\Delta I}{I}$`,
      why: { 0: String.raw`On <b>additionne</b> les incertitudes relatives, on ne les multiplie pas (le produit de deux petits nombres serait ridiculement petit).`, 1: String.raw`Les incertitudes absolues s'ajoutent pour une somme, pas pour un produit (et additionner des ohms et des ampères n'a pas de sens physique).`, 3: String.raw`Les incertitudes ne se compensent jamais dans un majorant : on ajoute des valeurs absolues, dans le pire des cas.` } },
    { id: 'm5-q-031', level: 1, q: String.raw`Dérivée de $(2x+3)^5$ ?`,
      topic: 'Puissance d\'une fonction', sec: 'm5-s-regles',
      steps: [
        String.raw`Rappel : $(2x+3)^5$ est une composée : une fonction intérieure $u = 2x + 3$ élevée à la puissance $5$. On applique $(u^n)' = n\,u'\,u^{n-1}$.`,
        String.raw`Ici $u = 2x + 3$, $u' = 2$ et $n = 5$.`,
        String.raw`$(u^5)' = 5 \times 2 \times (2x+3)^4 = 10(2x+3)^4$.`
      ],
      choices: [String.raw`$5(2x+3)^4$`, String.raw`$10(2x+3)^4$`, String.raw`$10x(2x+3)^4$`, String.raw`$2(2x+3)^5$`], answer: 1,
      explain: String.raw`On reconnaît une forme $u^5$ avec $u = 2x + 3$, donc $u' = 2$. La formule $(u^n)' = n\,u'\,u^{n-1}$ donne $5 \times 2 \times (2x+3)^4 = 10(2x+3)^4$. Il est inutile (et risqué) de développer la puissance avant de dériver.`,
      rule: String.raw`$(u^n)' = n\,u'\,u^{n-1}$`,
      why: { 0: String.raw`Oubli de $u' = 2$, la dérivée de l'intérieur $2x + 3$.`, 2: String.raw`$u' = 2$ est une constante : la dérivée de $2x + 3$ n'est pas $2x$.`, 3: String.raw`L'exposant doit baisser d'une unité et le facteur $n = 5$ descendre : la règle est $n\,u'\,u^{n-1}$.` } },
    { id: 'm5-q-032', level: 2, q: String.raw`Sur $\mathbb{R}^*$, la dérivée de $\ln|x|$ est :`,
      topic: 'Logarithme de |x|', sec: 'm5-s-usuelles',
      steps: [
        String.raw`Rappel : $|x| = x$ si $x \gt 0$ et $|x| = -x$ si $x \lt 0$ ; on étudie donc $\ln|x|$ séparément sur chacun des deux intervalles.`,
        String.raw`Sur $]0, +\infty[$ : $\ln|x| = \ln x$, de dérivée $\frac{1}{x}$.`,
        String.raw`Sur $]-\infty, 0[$ : $\ln|x| = \ln(-x)$, forme $\ln u$ avec $u = -x$, $u' = -1$, de dérivée $\frac{u'}{u} = \frac{-1}{-x} = \frac{1}{x}$.`,
        String.raw`Même formule partout : $(\ln|x|)' = \dfrac{1}{x}$ sur $\mathbb{R}^*$.`
      ],
      choices: [String.raw`$\dfrac{1}{|x|}$`, String.raw`$\dfrac{1}{x}$`, String.raw`$-\dfrac{1}{x}$ pour $x \lt 0$`, String.raw`inexistante pour $x \lt 0$`], answer: 1,
      explain: String.raw`On distingue deux cas. Pour $x \gt 0$, $\ln|x| = \ln x$ a pour dérivée $\frac{1}{x}$. Pour $x \lt 0$, $\ln|x| = \ln(-x)$ est une forme $\ln u$ avec $u = -x$, $u' = -1$, donc sa dérivée vaut $\frac{-1}{-x} = \frac{1}{x}$. Dans les deux cas on obtient $(\ln|x|)' = \frac{1}{x}$.`,
      rule: String.raw`$(\ln|x|)' = \dfrac{1}{x}$ sur $\mathbb{R}^*$`,
      why: { 0: String.raw`Pour $x \lt 0$, la dérivée de $\ln(-x)$ est $\frac{-1}{-x} = \frac{1}{x} \lt 0$ ; la fonction décroît sur $]-\infty, 0[$, sa dérivée ne peut pas être $\frac{1}{|x|} \gt 0$.`, 2: String.raw`Erreur de signe : on a oublié le facteur $u' = -1$, et $(\ln(-x))' = \frac{-1}{-x} = \frac{1}{x}$.`, 3: String.raw`$\ln|x|$ est définie et dérivable sur $]-\infty, 0[$, car $|x| \gt 0$ pour $x \neq 0$.` } },
    { id: 'm5-q-033', level: 2, q: String.raw`Pour $x \gt 0$, les dérivées de $x^\pi$ et de $\pi^x$ sont respectivement :`,
      topic: 'Puissance ou exponentielle', sec: 'm5-s-usuelles',
      steps: [
        String.raw`Rappel : dans $x^\pi$, la base varie et l'exposant est fixe (fonction puissance) ; dans $\pi^x$, la base est fixe et l'exposant varie (exponentielle de base $\pi$).`,
        String.raw`$x^\pi$ : règle $(x^\alpha)' = \alpha\,x^{\alpha-1}$ avec $\alpha = \pi$, d'où $\pi\,x^{\pi - 1}$.`,
        String.raw`$\pi^x = \mathrm{e}^{x\ln\pi}$ : forme $\mathrm{e}^u$ avec $u' = \ln\pi$, d'où $(\pi^x)' = \ln(\pi)\,\pi^x$.`
      ],
      choices: [String.raw`$\pi x^{\pi-1}$ et $\ln(\pi)\,\pi^x$`, String.raw`$\pi x^{\pi-1}$ et $x\,\pi^{x-1}$`, String.raw`$\ln(\pi)\,x^\pi$ et $\pi^x$`, String.raw`$\ln(x)\,x^\pi$ et $\ln(\pi)\,\pi^x$`], answer: 0,
      explain: String.raw`Il faut repérer ce qui varie. Dans $x^\pi$, l'exposant est constant : c'est une fonction puissance, $(x^\alpha)' = \alpha x^{\alpha-1}$ donne $\pi x^{\pi-1}$. Dans $\pi^x$, c'est l'exposant qui varie : on écrit $\pi^x = \mathrm{e}^{x\ln\pi}$, de dérivée $\ln(\pi)\,\mathrm{e}^{x\ln\pi} = \ln(\pi)\,\pi^x$.`,
      rule: String.raw`$(x^\alpha)' = \alpha\,x^{\alpha-1}$ (exposant constant) ; $(a^x)' = \ln(a)\,a^x$ (base constante)`,
      why: { 1: String.raw`Pour $\pi^x$, c'est l'exposant qui varie : la règle des puissances ne s'applique pas, il faut passer par $\mathrm{e}^{x\ln\pi}$.`, 2: String.raw`Formules inversées entre les deux fonctions : le facteur $\ln$ concerne la fonction exponentielle de base $\pi$.`, 3: String.raw`$x^\pi$ a un exposant constant : $(x^\pi)' = \pi x^{\pi - 1}$, sans logarithme.` } },
    { id: 'm5-q-034', level: 3, q: String.raw`$f$ est définie et dérivable sur $\mathbb{R}^*$ avec $f'(x) \gt 0$ pour tout $x \neq 0$. Alors :`,
      topic: 'Signe de la dérivée', sec: 'm5-s-variations',
      steps: [
        String.raw`Rappel : le théorème « $f' \gt 0$ sur $I$ ⇒ $f$ strictement croissante sur $I$ » exige que $I$ soit un <b>intervalle</b> (d'un seul tenant), car sa preuve applique le TAF entre deux points quelconques de $I$.`,
        String.raw`$\mathbb{R}^* = \,]-\infty, 0[\, \cup \,]0, +\infty[$ n'est pas un intervalle : on applique le théorème sur chacun des deux morceaux séparément.`,
        String.raw`On ne peut pas comparer un point négatif et un point positif : $f(x) = -\frac{1}{x}$ a $f'(x) = \frac{1}{x^2} \gt 0$, mais $f(-1) = 1 \gt f(1) = -1$.`
      ],
      choices: [String.raw`$f$ est strictement croissante sur $\mathbb{R}^*$`, String.raw`$f$ est strictement croissante sur $]-\infty, 0[$ et sur $]0, +\infty[$`, String.raw`$f$ est bornée`, String.raw`$f$ s'annule en $0$`], answer: 1,
      explain: String.raw`Le théorème « $f' \gt 0$ ⇒ $f$ strictement croissante » ne vaut que sur un <b>intervalle</b>, car sa preuve utilise le TAF entre deux points quelconques. Or $\mathbb{R}^*$ est la réunion de deux intervalles disjoints : on conclut séparément sur $]-\infty, 0[$ et sur $]0, +\infty[$, sans pouvoir comparer un point négatif à un point positif.`,
      rule: String.raw`Signe de $f'$ ⇒ variations, seulement sur un <b>intervalle</b>.`,
      why: { 0: String.raw`$\mathbb{R}^*$ n'est pas un intervalle : $f(x) = -\frac{1}{x}$ a $f' = \frac{1}{x^2} \gt 0$ mais $f(-1) = 1 \gt f(1) = -1$.`, 2: String.raw`Rien ne l'impose : $f(x) = x$ sur $\mathbb{R}^*$ vérifie l'hypothèse sans être bornée.`, 3: String.raw`$f$ n'est même pas définie en $0$, on ne peut rien dire de $f(0)$.` } }
  ],

  /* =====================================================================
   *  EXERCICES « tape la formule »
   * ===================================================================== */
  exercises: [
    { id: 'm5-x-001', level: 1, check: 'expr', vars: ['x'],
      topic: 'Dérivée d\'un polynôme', sec: 'm5-s-usuelles',
      prompt: String.raw`Dérive $f(x) = x^5 - 3x^2 + 7x - 2$.`,
      answer: '5*x^4 - 6*x + 7',
      steps: [
        String.raw`Rappel : dériver, c'est calculer la pente de la courbe en chaque point. La dérivée d'une somme est la somme des dérivées et les coefficients restent en facteur : $(au + bv)' = au' + bv'$. On dérive donc $f$ terme à terme.`,
        String.raw`Règle des puissances $(x^n)' = n\,x^{n-1}$ : $(x^5)' = 5x^4$ et $(-3x^2)' = -3 \times 2x = -6x$.`,
        String.raw`$(7x)' = 7 \times 1 = 7$, et la constante $-2$ a une dérivée nulle : $(-2)' = 0$.`,
        String.raw`On additionne : $f'(x) = 5x^4 - 6x + 7$. Contrôle : $f$ est de degré 5, $f'$ est bien de degré 4 ✔.`
      ],
      rule: String.raw`$(x^n)' = n\,x^{n-1}$, $(k)' = 0$ et $(au + bv)' = au' + bv'$`,
      pitfall: String.raw`Multiplier par l'exposant sans le diminuer, ou laisser traîner la constante dans la dérivée.`,
      mistakes: [
        { expr: '5*x^5 - 6*x^2 + 7', msg: String.raw`Tu as multiplié par l'exposant sans le diminuer. La règle est $(x^n)' = n\,x^{n-1}$ : l'exposant descend <b>et</b> baisse de 1, donc $(x^5)' = 5x^4$ et $(x^2)' = 2x$.` },
        { expr: '5*x^4 - 6*x + 7 - 2', msg: String.raw`La dérivée d'une constante est nulle (une constante ne varie pas, sa pente est 0) : le $-2$ disparaît, il reste $5x^4 - 6x + 7$.` },
        { expr: '5*x^4 - 3*x + 7', msg: String.raw`Le coefficient $-3$ doit être multiplié par l'exposant 2 : $(-3x^2)' = -3 \times 2x = -6x$, pas $-3x$.` }
      ],
      hint: String.raw`Dérive terme à terme avec $(x^n)' = nx^{n-1}$ ; une constante a une dérivée nulle.`,
      explain: String.raw`On dérive terme à terme avec $(x^n)' = nx^{n-1}$ et la constante disparaît : $f'(x) = 5x^4 - 6x + 7$.` },
    { id: 'm5-x-002', level: 1, check: 'expr', vars: ['x'], domain: [0.3, 4],
      topic: 'Dérivées usuelles', sec: 'm5-s-usuelles',
      prompt: String.raw`Dérive $f(x) = \dfrac{1}{x} + \sqrt{x}$ sur $]0, +\infty[$.`,
      answer: '-1/x^2 + 1/(2*sqrt(x))',
      steps: [
        String.raw`Rappel : $\frac1x$ et $\sqrt x$ sont des puissances de $x$ : $\frac{1}{x} = x^{-1}$ et $\sqrt{x} = x^{1/2}$. La règle $(x^\alpha)' = \alpha\,x^{\alpha-1}$ vaut pour tout exposant réel, et on dérive la somme terme à terme.`,
        String.raw`Premier terme : $\frac{1}{x} = x^{-1}$, donc $\left(\frac1x\right)' = -1 \times x^{-2} = -\dfrac{1}{x^2}$.`,
        String.raw`Second terme : $\sqrt{x} = x^{1/2}$, donc $(\sqrt x)' = \frac12 x^{-1/2} = \dfrac{1}{2\sqrt{x}}$ (valable pour $x \gt 0$).`,
        String.raw`Résultat : $f'(x) = -\dfrac{1}{x^2} + \dfrac{1}{2\sqrt{x}}$. Contrôle des signes : $\frac1x$ décroît (terme négatif) et $\sqrt{x}$ croît (terme positif) ✔.`
      ],
      rule: String.raw`$(x^\alpha)' = \alpha\,x^{\alpha-1}$ ; en particulier $\left(\frac1x\right)' = -\frac{1}{x^2}$ et $(\sqrt{x})' = \frac{1}{2\sqrt{x}}$`,
      pitfall: String.raw`Oublier le signe moins de $\left(\frac1x\right)'$ ou le facteur $\frac12$ de $(\sqrt x)'$.`,
      mistakes: [
        { expr: '1/x^2 + 1/(2*sqrt(x))', msg: String.raw`Erreur de signe : $\frac{1}{x} = x^{-1}$ et l'exposant $-1$ descend devant, donc $\left(\frac{1}{x}\right)' = -\frac{1}{x^2}$ (logique, $\frac1x$ décroît).` },
        { expr: '-1/x^2 + 1/sqrt(x)', msg: String.raw`Il manque le facteur $\frac12$ : $\sqrt{x} = x^{1/2}$, l'exposant $\frac12$ descend devant, d'où $(\sqrt{x})' = \frac{1}{2\sqrt{x}}$.` },
        { expr: 'ln(x) + 1/(2*sqrt(x))', msg: String.raw`$\ln x$ est une <b>primitive</b> de $\frac1x$, pas sa dérivée. Pour dériver, écris $\frac1x = x^{-1}$ et applique $(x^n)' = nx^{n-1}$.` }
      ],
      hint: String.raw`$\left(\frac{1}{x}\right)' = -\frac{1}{x^2}$ et $(\sqrt{x})' = \frac{1}{2\sqrt{x}}$.`,
      explain: String.raw`En écrivant $\frac1x = x^{-1}$ et $\sqrt x = x^{1/2}$, la règle des puissances donne $f'(x) = -\dfrac{1}{x^2} + \dfrac{1}{2\sqrt{x}}$.` },
    { id: 'm5-x-003', level: 1, check: 'value', vars: [],
      topic: 'Calcul d\'un nombre dérivé', sec: 'm5-s-def',
      prompt: String.raw`Soit $f(x) = x^3 - 2x$. Calcule $f'(2)$.`,
      answer: '10',
      steps: [
        String.raw`Rappel : $f'(2)$ est le nombre dérivé en $2$, c'est-à-dire la pente de la tangente à la courbe au point d'abscisse $2$. On calcule d'abord la fonction dérivée $f'(x)$, puis seulement ensuite on remplace $x$ par $2$.`,
        String.raw`Dérivée terme à terme : $(x^3)' = 3x^2$ et $(-2x)' = -2$, donc $f'(x) = 3x^2 - 2$.`,
        String.raw`On évalue en $x = 2$ : $f'(2) = 3 \times 2^2 - 2 = 3 \times 4 - 2 = 12 - 2 = 10$.`,
        String.raw`Résultat : $f'(2) = 10$. Contrôle par le taux d'accroissement : $\frac{f(2{,}01) - f(2)}{0{,}01} = \frac{4{,}1006 - 4}{0{,}01} \approx 10{,}06$, très proche de $10$ ✔.`
      ],
      rule: String.raw`Le nombre dérivé $f'(a)$ s'obtient en remplaçant $x$ par $a$ dans l'expression de $f'(x)$.`,
      pitfall: String.raw`Calculer $f(2)$ au lieu de $f'(2)$, ou remplacer $x$ par $2$ avant de dériver.`,
      mistakes: [
        { expr: '4', msg: String.raw`Tu as calculé $f(2) = 8 - 4 = 4$, la valeur de la fonction. Il faut d'abord dériver ($f'(x) = 3x^2 - 2$), puis remplacer $x$ par $2$.` },
        { expr: '12', msg: String.raw`Tu as oublié la dérivée de $-2x$, qui vaut $-2$ : $f'(2) = 12 - 2 = 10$.` },
        { expr: '0', msg: String.raw`Tu as remplacé $x$ par $2$ <b>avant</b> de dériver : $f(2) = 4$ est une constante, de dérivée nulle. On dérive d'abord, on évalue ensuite.` }
      ],
      hint: String.raw`Calcule d'abord $f'(x)$, puis remplace $x$ par $2$.`,
      explain: String.raw`On dérive d'abord : $f'(x) = 3x^2 - 2$, puis on évalue : $f'(2) = 12 - 2 = 10$.` },
    { id: 'm5-x-004', level: 1, check: 'expr', vars: ['x'], domain: [0.3, 4],
      topic: 'Linéarité de la dérivation', sec: 'm5-s-usuelles',
      prompt: String.raw`Dérive $f(x) = 3\mathrm{e}^x - 2\ln x + 4\cos x$ sur $]0, +\infty[$.`,
      answer: '3*exp(x) - 2/x - 4*sin(x)',
      steps: [
        String.raw`Rappel : la dérivation est linéaire : un coefficient multiplicatif reste en facteur, $(k\,u)' = k\,u'$, et la dérivée d'une somme est la somme des dérivées. On dérive donc chaque fonction usuelle séparément.`,
        String.raw`$(3\mathrm{e}^x)' = 3\mathrm{e}^x$ : l'exponentielle est sa propre dérivée.`,
        String.raw`$(-2\ln x)' = -2 \times \dfrac{1}{x} = -\dfrac{2}{x}$ (valable sur $]0, +\infty[$).`,
        String.raw`$(4\cos x)' = 4 \times (-\sin x) = -4\sin x$ : attention au signe moins de la dérivée du cosinus.`,
        String.raw`Résultat : $f'(x) = 3\mathrm{e}^x - \dfrac{2}{x} - 4\sin x$.`
      ],
      rule: String.raw`$(k\,u)' = k\,u'$ ; $(\mathrm{e}^x)' = \mathrm{e}^x$, $(\ln x)' = \frac1x$, $(\cos x)' = -\sin x$`,
      pitfall: String.raw`Le signe moins de $(\cos x)' = -\sin x$, qui s'oublie très facilement.`,
      mistakes: [
        { expr: '3*exp(x) - 2/x + 4*sin(x)', msg: String.raw`Erreur de signe : $(\cos x)' = -\sin x$, donc $(4\cos x)' = -4\sin x$. Moyen mnémotechnique : le cosinus décroît juste après $0$, sa dérivée y est négative.` },
        { expr: '3*exp(x) - 2*x*ln(x) + 2*x + 4*sin(x)', msg: String.raw`Tu as calculé une <b>primitive</b> (intégré) au lieu de dériver : $x\ln x - x$ est une primitive de $\ln x$ et $\sin x$ une primitive de $\cos x$.` }
      ],
      hint: String.raw`Linéarité : $(\mathrm{e}^x)' = \mathrm{e}^x$, $(\ln x)' = \frac1x$, $(\cos x)' = -\sin x$.`,
      explain: String.raw`Par linéarité avec les dérivées usuelles : $f'(x) = 3\mathrm{e}^x - \dfrac{2}{x} - 4\sin x$.` },
    { id: 'm5-x-005', level: 1, check: 'expr', vars: ['x'],
      topic: 'Dérivée d\'une composée', sec: 'm5-s-regles',
      prompt: String.raw`Dérive $f(x) = \sin(2x)$.`,
      answer: '2*cos(2*x)',
      steps: [
        String.raw`Rappel : $\sin(2x)$ est une fonction composée : on calcule d'abord l'« intérieur » $u(x) = 2x$, puis on prend le sinus. Pour dériver, on dérive l'extérieur en gardant l'intérieur, puis on multiplie par la dérivée de l'intérieur.`,
        String.raw`On dérive l'intérieur : $u'(x) = 2$.`,
        String.raw`Formule de la composée : $(\sin u)' = u' \times \cos u$. On dérive le sinus en gardant l'intérieur intact, puis on multiplie par $u'$ : $f'(x) = 2 \times \cos(2x)$.`,
        String.raw`Résultat : $f'(x) = 2\cos(2x)$. Contrôle : près de $0$, $\sin(2x) \approx 2x$ a une pente $2$, et $2\cos 0 = 2$ ✔.`
      ],
      rule: String.raw`$(\sin u)' = u'\cos u$ et $(\cos u)' = -u'\sin u$`,
      pitfall: String.raw`Oublier de multiplier par la dérivée intérieure $u' = 2$.`,
      mistakes: [
        { expr: 'cos(2*x)', msg: String.raw`Il manque le facteur $u'$ : $(\sin u)' = u'\cos u$ avec $u = 2x$ et $u' = 2$. Quand l'intérieur n'est pas simplement $x$, on multiplie toujours par sa dérivée.` },
        { expr: '-2*sin(2*x)', msg: String.raw`C'est la dérivée de $\cos(2x)$. Ici on dérive un sinus : $(\sin)' = \cos$, sans signe moins.` },
        { expr: '2*cos(x)', msg: String.raw`L'intérieur ne change pas quand on dérive l'extérieur : on écrit $\cos(2x)$, pas $\cos x$. Le facteur $2$ vient seulement de $u' = 2$.` }
      ],
      hint: String.raw`$(\sin u)' = u'\cos u$ avec $u = 2x$.`,
      explain: String.raw`Composée $\sin(u)$ avec $u = 2x$ et $u' = 2$ : $f'(x) = 2\cos(2x)$.` },
    { id: 'm5-x-006', level: 1, check: 'expr', vars: ['x'],
      topic: 'Puissance d\'une fonction', sec: 'm5-s-regles',
      prompt: String.raw`Dérive $f(x) = (2x+1)^4$.`,
      answer: '8*(2*x+1)^3',
      steps: [
        String.raw`Rappel : $(2x+1)^4$ est la puissance d'une fonction : forme $u^n$ avec $u(x) = 2x + 1$ et $n = 4$. On applique la règle des puissances <b>et</b> on multiplie par $u'$ ; inutile de développer.`,
        String.raw`On dérive l'intérieur : $u'(x) = 2$.`,
        String.raw`Formule : $(u^n)' = n\,u'\,u^{n-1}$, donc $f'(x) = 4 \times 2 \times (2x+1)^{3}$.`,
        String.raw`Résultat : $f'(x) = 8(2x+1)^3$. Contrôle en $x = 0$ : $(1+2x)^4 \approx 1 + 8x$ près de $0$, de pente $8$, et $8 \times 1^3 = 8$ ✔.`
      ],
      rule: String.raw`$(u^n)' = n\,u'\,u^{n-1}$`,
      pitfall: String.raw`Oublier le facteur $u' = 2$, ou ne pas baisser l'exposant.`,
      mistakes: [
        { expr: '4*(2*x+1)^3', msg: String.raw`Il manque $u'$ : $(u^4)' = 4\,u'\,u^3$ avec $u = 2x + 1$, donc $u' = 2$. On obtient $4 \times 2 = 8$ devant.` },
        { expr: '8*(2*x+1)^4', msg: String.raw`L'exposant doit baisser de 1 : $(u^n)' = n\,u'\,u^{n-1}$, donc la puissance devient $3$.` },
        { expr: '8*x*(2*x+1)^3', msg: String.raw`La dérivée de $2x + 1$ est la constante $2$, pas $2x$ : $u' = 2$.` }
      ],
      hint: String.raw`$(u^n)' = n\,u'\,u^{n-1}$ avec $u = 2x + 1$.`,
      explain: String.raw`Forme $u^4$ avec $u = 2x+1$, $u' = 2$ : $f'(x) = 4 \times 2 \times (2x+1)^3 = 8(2x+1)^3$.` },
    { id: 'm5-x-007', level: 1, check: 'expr', vars: ['x'],
      topic: 'Dérivée de exp(u)', sec: 'm5-s-regles',
      prompt: String.raw`Dérive $f(x) = \mathrm{e}^{3x}$.`,
      answer: '3*exp(3*x)',
      steps: [
        String.raw`Rappel : $\mathrm{e}^{3x}$ est une composée : l'exponentielle (extérieur) appliquée à $u(x) = 3x$ (intérieur). L'exponentielle est sa propre dérivée, il suffit donc de la recopier et de multiplier par $u'$.`,
        String.raw`On dérive l'intérieur : $u'(x) = 3$.`,
        String.raw`Formule $(\mathrm{e}^u)' = u'\,\mathrm{e}^u$ : on recopie l'exponentielle telle quelle et on multiplie par $u'$.`,
        String.raw`Résultat : $f'(x) = 3\mathrm{e}^{3x}$. Contrôle : $f'(0) = 3$, et près de $0$, $\mathrm{e}^{3x} \approx 1 + 3x$ a bien une pente $3$ ✔.`
      ],
      rule: String.raw`$(\mathrm{e}^{u})' = u'\,\mathrm{e}^{u}$ ; en particulier $(\mathrm{e}^{ax})' = a\,\mathrm{e}^{ax}$`,
      pitfall: String.raw`Oublier le facteur $u'$, ou traiter $\mathrm{e}^{3x}$ comme une puissance de $x$.`,
      mistakes: [
        { expr: 'exp(3*x)', msg: String.raw`Il manque $u'$ : $(\mathrm{e}^u)' = u'\,\mathrm{e}^u$ avec $u = 3x$, donc on multiplie par $3$. Seule $\mathrm{e}^x$ est exactement sa propre dérivée.` },
        { expr: '3*x*exp(3*x-1)', msg: String.raw`Ce n'est pas une puissance de $x$ : la base $\mathrm{e}$ est constante et c'est l'exposant qui varie, la règle $(x^n)' = nx^{n-1}$ ne s'applique pas.` },
        { expr: '3*exp(x)', msg: String.raw`L'exposant reste $3x$ : on garde $\mathrm{e}^{3x}$ et on multiplie par $u' = 3$.` }
      ],
      hint: String.raw`$(\mathrm{e}^u)' = u'\,\mathrm{e}^u$.`,
      explain: String.raw`Composée $\mathrm{e}^u$ avec $u = 3x$, $u' = 3$ : $f'(x) = 3\mathrm{e}^{3x}$.` },
    { id: 'm5-x-008', level: 1, check: 'value', vars: [],
      topic: 'Dérivée de arctangente', sec: 'm5-s-usuelles',
      prompt: String.raw`Soit $f(x) = \arctan x$. Calcule la valeur exacte de $f'(1)$.`,
      answer: '1/2',
      steps: [
        String.raw`Rappel : $\arctan x$ est l'angle de $\left]-\frac{\pi}{2}, \frac{\pi}{2}\right[$ dont la tangente vaut $x$ (réciproque de $\tan$). On utilise sa dérivée usuelle, puis on l'évalue en $x = 1$.`,
        String.raw`$(\arctan x)' = \dfrac{1}{1+x^2}$ (dérivée de la réciproque de $\tan$ : $\frac{1}{1+\tan^2(\arctan x)} = \frac{1}{1+x^2}$).`,
        String.raw`En $x = 1$ : $f'(1) = \dfrac{1}{1 + 1^2} = \dfrac{1}{2}$.`,
        String.raw`Résultat : $\frac12$. Cohérence : $\arctan$ est croissante, sa dérivée est positive et toujours $\leq 1$ (valeur maximale en $0$) ✔.`
      ],
      rule: String.raw`$(\arctan x)' = \dfrac{1}{1+x^2}$`,
      pitfall: String.raw`Confondre $f(1) = \arctan 1 = \frac{\pi}{4}$ et le nombre dérivé $f'(1)$.`,
      mistakes: [
        { expr: 'pi/4', msg: String.raw`$\frac{\pi}{4} = \arctan 1 = f(1)$ est la valeur de la fonction. Il fallait d'abord dériver : $f'(x) = \frac{1}{1+x^2}$, puis remplacer $x$ par $1$.` },
        { expr: '1/sqrt(2)', msg: String.raw`Confusion avec $(\arcsin x)' = \frac{1}{\sqrt{1-x^2}}$ : la dérivée de $\arctan$ est $\frac{1}{1+x^2}$, sans racine.` },
        { expr: '2', msg: String.raw`$2 = 1 + 1^2$ n'est que le dénominateur : la dérivée est l'<b>inverse</b> $\frac{1}{1+x^2}$.` }
      ],
      hint: String.raw`$(\arctan x)' = \dfrac{1}{1+x^2}$.`,
      explain: String.raw`$f'(x) = \dfrac{1}{1+x^2}$, donc $f'(1) = \dfrac{1}{2}$.` },
    { id: 'm5-x-009', level: 1, check: 'expr', vars: ['x'],
      topic: 'Dérivée d\'une composée', sec: 'm5-s-regles',
      prompt: String.raw`Dérive $f(x) = \cos(5x)$.`,
      answer: '-5*sin(5*x)',
      steps: [
        String.raw`Rappel : $\cos(5x)$ est une composée : le cosinus (extérieur) appliqué à $u(x) = 5x$ (intérieur). On dérive le cosinus en gardant l'intérieur, puis on multiplie par $u'$.`,
        String.raw`On dérive l'intérieur : $u'(x) = 5$.`,
        String.raw`Formule $(\cos u)' = -u'\sin u$ : le cosinus se dérive en $-\sin$, on garde l'intérieur $5x$ et on multiplie par $u'$.`,
        String.raw`Résultat : $f'(x) = -5\sin(5x)$. Contrôle : en $0$, $\cos(5x)$ est maximal, donc $f'(0)$ doit être nul, et $-5\sin 0 = 0$ ✔.`
      ],
      rule: String.raw`$(\cos u)' = -u'\sin u$`,
      pitfall: String.raw`Oublier le signe moins ou le facteur $u' = 5$ : deux erreurs indépendantes, vérifie les deux.`,
      mistakes: [
        { expr: '5*sin(5*x)', msg: String.raw`Erreur de signe : $(\cos u)' = -u'\sin u$. La dérivée du cosinus porte toujours un signe moins.` },
        { expr: '-sin(5*x)', msg: String.raw`Il manque le facteur $u' = 5$ : quand l'intérieur est $5x$, on multiplie par sa dérivée $5$.` },
        { expr: '-5*sin(x)', msg: String.raw`L'intérieur ne change pas : on garde $\sin(5x)$, le $5$ devant vient seulement de $u'$.` }
      ],
      hint: String.raw`$(\cos u)' = -u'\sin u$ avec $u = 5x$.`,
      explain: String.raw`Composée $\cos(u)$ avec $u = 5x$, $u' = 5$ : $f'(x) = -5\sin(5x)$.` },
    { id: 'm5-x-010', level: 2, check: 'expr', vars: ['x'],
      topic: 'Dérivée d\'un produit', sec: 'm5-s-regles',
      prompt: String.raw`Dérive $f(x) = x^2\sin x$.`,
      answer: '2*x*sin(x) + x^2*cos(x)',
      steps: [
        String.raw`Rappel : $f$ est un <b>produit</b> de deux fonctions qui varient toutes les deux ; on dérive un facteur à la fois en gardant l'autre, puis on additionne. Ici $u(x) = x^2$ et $v(x) = \sin x$.`,
        String.raw`On dérive chaque facteur : $u'(x) = 2x$ et $v'(x) = \cos x$.`,
        String.raw`Règle du produit : $(uv)' = u'v + uv' = 2x \cdot \sin x + x^2 \cdot \cos x$.`,
        String.raw`Résultat : $f'(x) = 2x\sin x + x^2\cos x$. Contrôle de structure : chaque terme contient exactement un facteur dérivé ($u'$ ou $v'$) ✔.`
      ],
      rule: String.raw`$(uv)' = u'v + uv'$`,
      pitfall: String.raw`Écrire $(uv)' = u'v'$ : la dérivée d'un produit n'est pas le produit des dérivées.`,
      mistakes: [
        { expr: '2*x*cos(x)', msg: String.raw`Tu as fait le produit des dérivées $u'v'$. La règle est $(uv)' = u'v + uv'$ : on dérive un facteur à la fois en gardant l'autre, puis on additionne.` },
        { expr: '2*x*sin(x) - x^2*cos(x)', msg: String.raw`Pas de signe moins dans la règle du produit : $(uv)' = u'v + uv'$ (le signe moins appartient à la formule du quotient).` },
        { expr: '2*x*sin(x)', msg: String.raw`Il manque le terme $uv' = x^2\cos x$ : on doit aussi dériver le second facteur $\sin x$.` }
      ],
      hint: String.raw`Produit : $(uv)' = u'v + uv'$ avec $u = x^2$ et $v = \sin x$.`,
      explain: String.raw`Produit avec $u = x^2$, $v = \sin x$ : $u' = 2x$, $v' = \cos x$, donc $f'(x) = 2x\sin x + x^2\cos x$.` },
    { id: 'm5-x-011', level: 2, check: 'expr', vars: ['x'],
      topic: 'Équation de la tangente', sec: 'm5-s-def',
      prompt: String.raw`Donne l'équation de la tangente à la courbe de $f(x) = x^2 - 3x + 1$ au point d'abscisse $a = 2$, sous la forme $y = \ldots$`,
      answer: 'x - 3',
      steps: [
        String.raw`Rappel : la tangente en $a$ est la droite qui « colle » à la courbe au point $\big(a, f(a)\big)$ ; sa pente est $f'(a)$, d'où l'équation $y = f'(a)(x - a) + f(a)$. Il faut donc calculer $f(2)$ et $f'(2)$.`,
        String.raw`Ordonnée du point : $f(2) = 2^2 - 3 \times 2 + 1 = 4 - 6 + 1 = -1$.`,
        String.raw`Pente : $f'(x) = 2x - 3$, donc $f'(2) = 4 - 3 = 1$.`,
        String.raw`On remplace : $y = 1 \cdot (x - 2) + (-1) = x - 2 - 1 = x - 3$.`,
        String.raw`Vérification : en $x = 2$, $y = 2 - 3 = -1 = f(2)$ ✔ (la tangente passe bien par le point), et sa pente vaut $1 = f'(2)$ ✔.`
      ],
      rule: String.raw`Tangente en $a$ : $y = f'(a)(x - a) + f(a)$`,
      pitfall: String.raw`Écrire $(x + a)$ au lieu de $(x - a)$, ou inverser les rôles de $f(a)$ et $f'(a)$.`,
      mistakes: [
        { expr: 'x + 1', msg: String.raw`Erreur de signe : c'est $(x - a)$, ici $(x - 2)$. Vérifie toujours : en $x = 2$ tu dois retrouver $f(2) = -1$, or $2 + 1 = 3$.` },
        { expr: '-x + 3', msg: String.raw`Tu as inversé $f(a)$ et $f'(a)$ : la pente (coefficient de $x - a$) est $f'(2) = 1$ et l'ordonnée du point est $f(2) = -1$.` },
        { expr: 'x - 1', msg: String.raw`Tu as oublié le décalage : $y = f'(2)\,x + f(2)$ ne passe pas par $(2, -1)$. Il faut $y = f'(2)(x - 2) + f(2)$.` }
      ],
      hint: String.raw`Calcule $f(2)$ et $f'(2)$, puis $y = f'(2)(x-2) + f(2)$.`,
      explain: String.raw`$f(2) = -1$ et $f'(2) = 1$, d'où $y = 1\cdot(x - 2) - 1 = x - 3$.` },
    { id: 'm5-x-012', level: 2, check: 'expr', vars: ['x'],
      topic: 'Dérivée d\'un produit', sec: 'm5-s-regles',
      prompt: String.raw`Dérive $f(x) = x\,\mathrm{e}^x$.`,
      answer: '(x+1)*exp(x)',
      steps: [
        String.raw`Rappel : $x\,\mathrm{e}^x$ est un produit de deux fonctions ; on utilise $(uv)' = u'v + uv'$ avec $u(x) = x$ et $v(x) = \mathrm{e}^x$.`,
        String.raw`On dérive chaque facteur : $u'(x) = 1$ et $v'(x) = \mathrm{e}^x$.`,
        String.raw`Règle du produit : $(uv)' = u'v + uv' = 1 \cdot \mathrm{e}^x + x \cdot \mathrm{e}^x$.`,
        String.raw`On factorise par $\mathrm{e}^x$ : $f'(x) = (x + 1)\,\mathrm{e}^x$. Contrôle : $f'$ s'annule en $x = -1$, là où $x\mathrm{e}^x$ atteint son minimum $-\frac{1}{\mathrm{e}}$ ✔.`
      ],
      rule: String.raw`$(uv)' = u'v + uv'$, puis factoriser par $\mathrm{e}^x$`,
      pitfall: String.raw`N'écrire qu'un seul des deux termes de la règle du produit.`,
      mistakes: [
        { expr: 'exp(x)', msg: String.raw`Tu as fait $u'v'$ ou oublié le terme $uv' = x\,\mathrm{e}^x$ : avec $(uv)' = u'v + uv'$, on obtient $\mathrm{e}^x + x\mathrm{e}^x$.` },
        { expr: 'x*exp(x)', msg: String.raw`Il manque le terme $u'v = 1 \times \mathrm{e}^x$ : on doit aussi dériver le facteur $x$.` }
      ],
      hint: String.raw`Produit avec $u = x$, $v = \mathrm{e}^x$.`,
      explain: String.raw`Produit avec $u = x$, $v = \mathrm{e}^x$ : $f'(x) = \mathrm{e}^x + x\mathrm{e}^x = (x+1)\mathrm{e}^x$.` },
    { id: 'm5-x-013', level: 2, check: 'expr', vars: ['x'],
      topic: 'Dérivée de ln(u)', sec: 'm5-s-regles',
      prompt: String.raw`Dérive $f(x) = \ln(x^2 + 1)$.`,
      answer: '2*x/(x^2+1)',
      steps: [
        String.raw`Rappel : $\ln(x^2+1)$ est une composée : le logarithme appliqué à $u(x) = x^2 + 1$. Comme $u(x) \geq 1 \gt 0$, $f$ est définie et dérivable sur $\mathbb{R}$, et la règle de la chaîne donne $(\ln u)' = \frac{u'}{u}$.`,
        String.raw`On dérive l'intérieur : $u'(x) = 2x$.`,
        String.raw`Formule $(\ln u)' = \dfrac{u'}{u}$ : $f'(x) = \dfrac{2x}{x^2 + 1}$.`,
        String.raw`Contrôle : $f$ est paire, donc $f'$ doit être impaire ✔ ; et $f'(0) = 0$ car $f$ a son minimum $\ln 1 = 0$ en $0$ ✔.`
      ],
      rule: String.raw`$(\ln u)' = \dfrac{u'}{u}$`,
      pitfall: String.raw`Écrire $\frac{1}{u}$ en oubliant le facteur $u'$ au numérateur.`,
      mistakes: [
        { expr: '1/(x^2+1)', msg: String.raw`Il manque $u'$ : $(\ln u)' = \frac{u'}{u}$ avec $u' = 2x$. Le $\frac{1}{u}$ seul n'est valable que si $u = x$.` },
        { expr: '1/(2*x)', msg: String.raw`On ne remplace pas $u$ par $u'$ : la formule est $\frac{u'}{u}$ (dérivée de l'intérieur au numérateur, intérieur au dénominateur), pas $\frac{1}{u'}$.` }
      ],
      hint: String.raw`$(\ln u)' = \dfrac{u'}{u}$ avec $u = x^2 + 1$.`,
      explain: String.raw`Composée $\ln(u)$ avec $u = x^2 + 1 \gt 0$, $u' = 2x$ : $f'(x) = \dfrac{2x}{x^2+1}$.` },
    { id: 'm5-x-014', level: 2, check: 'expr', vars: ['x'],
      topic: 'Dérivée de la racine de u', sec: 'm5-s-regles',
      prompt: String.raw`Dérive $f(x) = \sqrt{1 + x^2}$.`,
      answer: 'x/sqrt(1+x^2)',
      steps: [
        String.raw`Rappel : $\sqrt{1+x^2}$ est une composée : la racine appliquée à $u(x) = 1 + x^2 \gt 0$. De $(\sqrt x)' = \frac{1}{2\sqrt x}$ et de la règle de la chaîne on tire $(\sqrt{u})' = \frac{u'}{2\sqrt u}$.`,
        String.raw`On dérive l'intérieur : $u'(x) = 2x$.`,
        String.raw`Formule $(\sqrt{u})' = \dfrac{u'}{2\sqrt{u}}$ : $f'(x) = \dfrac{2x}{2\sqrt{1+x^2}}$.`,
        String.raw`On simplifie par $2$ : $f'(x) = \dfrac{x}{\sqrt{1+x^2}}$.`,
        String.raw`Contrôle : $f$ est paire donc $f'$ impaire ✔, $f'(0) = 0$ (minimum de $f$) ✔, et $|f'(x)| \lt 1$ car $\sqrt{1+x^2} \gt |x|$ ✔.`
      ],
      rule: String.raw`$(\sqrt{u})' = \dfrac{u'}{2\sqrt{u}}$`,
      pitfall: String.raw`Oublier $u'$, ou oublier le $2$ du dénominateur.`,
      mistakes: [
        { expr: '1/(2*sqrt(1+x^2))', msg: String.raw`Il manque $u' = 2x$ : $(\sqrt{u})' = \frac{u'}{2\sqrt u}$. Sans ce facteur, la dérivée ne serait pas nulle en $0$ alors que $f$ y a un minimum.` },
        { expr: '2*x/sqrt(1+x^2)', msg: String.raw`Il manque le $2$ du dénominateur : $(\sqrt{u})' = \frac{u'}{2\sqrt{u}}$, et ce $2$ se simplifie avec celui de $u' = 2x$.` }
      ],
      hint: String.raw`$(\sqrt{u})' = \dfrac{u'}{2\sqrt{u}}$ avec $u = 1 + x^2$.`,
      explain: String.raw`Composée $\sqrt{u}$ avec $u = 1 + x^2$, $u' = 2x$ : $f'(x) = \dfrac{2x}{2\sqrt{1+x^2}} = \dfrac{x}{\sqrt{1+x^2}}$.` },
    { id: 'm5-x-015', level: 2, check: 'expr', vars: ['x'], domain: [0, 3],
      topic: 'Dérivée d\'un quotient', sec: 'm5-s-regles',
      prompt: String.raw`Dérive $f(x) = \dfrac{x - 1}{x + 1}$ (pour $x \neq -1$).`,
      answer: '2/(x+1)^2',
      steps: [
        String.raw`Rappel : $f$ est un quotient $\frac{u}{v}$ avec $u(x) = x - 1$ et $v(x) = x + 1$ (non nul pour $x \neq -1$). La dérivée d'un quotient n'est pas le quotient des dérivées : on utilise $\left(\frac{u}{v}\right)' = \frac{u'v - uv'}{v^2}$.`,
        String.raw`On dérive : $u'(x) = 1$ et $v'(x) = 1$.`,
        String.raw`Formule $\left(\dfrac{u}{v}\right)' = \dfrac{u'v - uv'}{v^2}$ : $f'(x) = \dfrac{1 \cdot (x+1) - (x-1) \cdot 1}{(x+1)^2}$.`,
        String.raw`Numérateur, en gardant les parenthèses : $x + 1 - (x - 1) = x + 1 - x + 1 = 2$. Donc $f'(x) = \dfrac{2}{(x+1)^2}$.`,
        String.raw`Vérification : $f(x) = \frac{(x+1) - 2}{x+1} = 1 - \frac{2}{x+1}$, dont la dérivée est $-2 \times \left(-\frac{1}{(x+1)^2}\right) = \frac{2}{(x+1)^2}$ ✔.`
      ],
      rule: String.raw`$\left(\dfrac{u}{v}\right)' = \dfrac{u'v - uv'}{v^2}$`,
      pitfall: String.raw`Oublier les parenthèses : $-(x - 1) = -x + 1$, pas $-x - 1$.`,
      mistakes: [
        { expr: '-2/(x+1)^2', msg: String.raw`Numérateur à l'envers : c'est $u'v - uv'$ (on commence par dériver le <b>numérateur</b>), pas $uv' - u'v$. L'inversion change le signe du résultat.` },
        { expr: '1', msg: String.raw`$\left(\frac{u}{v}\right)' \neq \frac{u'}{v'}$ : la dérivée d'un quotient n'est pas le quotient des dérivées. Applique $\frac{u'v - uv'}{v^2}$.` },
        { expr: '0', msg: String.raw`Erreur de parenthèses : $(x+1) - (x-1) = 2$, et non $x + 1 - x - 1 = 0$. Le signe moins s'applique à tout $(x-1)$.` }
      ],
      hint: String.raw`$\left(\dfrac{u}{v}\right)' = \dfrac{u'v - uv'}{v^2}$ avec $u = x - 1$, $v = x + 1$.`,
      explain: String.raw`Quotient avec $u = x - 1$, $v = x + 1$, $u' = v' = 1$ : $f'(x) = \dfrac{(x+1) - (x-1)}{(x+1)^2} = \dfrac{2}{(x+1)^2}$.` },
    { id: 'm5-x-016', level: 2, check: 'expr', vars: ['x'],
      topic: 'Équation de la tangente', sec: 'm5-s-def',
      prompt: String.raw`Donne l'équation de la tangente à la courbe de $f(x) = \sqrt{x}$ au point d'abscisse $4$, sous la forme $y = \ldots$`,
      answer: 'x/4 + 1',
      steps: [
        String.raw`Rappel : la tangente au point d'abscisse $a$ est la droite de pente $f'(a)$ passant par $\big(a, f(a)\big)$ : $y = f'(a)(x - a) + f(a)$. Ici $a = 4$.`,
        String.raw`Ordonnée du point : $f(4) = \sqrt{4} = 2$.`,
        String.raw`Pente : $f'(x) = \dfrac{1}{2\sqrt{x}}$, donc $f'(4) = \dfrac{1}{2 \times 2} = \dfrac{1}{4}$.`,
        String.raw`On remplace : $y = \frac{1}{4}(x - 4) + 2 = \frac{x}{4} - 1 + 2 = \frac{x}{4} + 1$.`,
        String.raw`Vérification : en $x = 4$, $y = 1 + 1 = 2 = f(4)$ ✔.`
      ],
      rule: String.raw`Tangente en $a$ : $y = f'(a)(x - a) + f(a)$ ; $(\sqrt{x})' = \frac{1}{2\sqrt x}$`,
      pitfall: String.raw`Oublier le facteur $\frac12$ de $(\sqrt x)'$, ou le décalage $(x - 4)$.`,
      mistakes: [
        { expr: 'x/2', msg: String.raw`Pente fausse : $(\sqrt{x})' = \frac{1}{2\sqrt{x}}$, donc $f'(4) = \frac{1}{2 \times 2} = \frac{1}{4}$ et non $\frac12$.` },
        { expr: 'x/4 + 3', msg: String.raw`Erreur de signe : c'est $(x - 4)$ et non $(x + 4)$. En $x = 4$ tu dois retrouver $f(4) = 2$.` },
        { expr: 'x/4 + 2', msg: String.raw`Oubli du décalage : $y = f'(4)\,x + f(4)$ ne passe pas par $(4, 2)$. Il faut $y = \frac14(x - 4) + 2$.` }
      ],
      hint: String.raw`$f(4) = 2$ et $f'(4) = \dfrac{1}{2\sqrt{4}}$.`,
      explain: String.raw`$f(4) = 2$ et $f'(4) = \frac{1}{4}$, d'où $y = \frac{1}{4}(x - 4) + 2 = \frac{x}{4} + 1$.` },
    { id: 'm5-x-017', level: 2, check: 'expr', vars: ['x'],
      topic: 'Dérivée de l\'inverse', sec: 'm5-s-regles',
      prompt: String.raw`Dérive $f(x) = \dfrac{1}{x^2 + 1}$.`,
      answer: '-2*x/(x^2+1)^2',
      steps: [
        String.raw`Rappel : $\frac{1}{v}$ est l'inverse d'une fonction ; quand $v$ augmente, $\frac1v$ diminue, d'où un signe moins : $\left(\frac{1}{v}\right)' = -\frac{v'}{v^2}$. Ici $v(x) = x^2 + 1$, qui ne s'annule jamais.`,
        String.raw`On dérive : $v'(x) = 2x$.`,
        String.raw`Formule $\left(\dfrac{1}{v}\right)' = -\dfrac{v'}{v^2}$ (cas $u = 1$, $u' = 0$ de la formule du quotient).`,
        String.raw`Résultat : $f'(x) = -\dfrac{2x}{(x^2+1)^2}$.`,
        String.raw`Contrôle : $f$ est maximale en $0$ donc $f'(0) = 0$ ✔, et $f$ décroît pour $x \gt 0$, où $f'(x) \lt 0$ ✔.`
      ],
      rule: String.raw`$\left(\dfrac{1}{v}\right)' = -\dfrac{v'}{v^2}$`,
      pitfall: String.raw`Oublier le signe moins ou le facteur $v'$ au numérateur.`,
      mistakes: [
        { expr: '2*x/(x^2+1)^2', msg: String.raw`Erreur de signe : $\left(\frac{1}{v}\right)' = -\frac{v'}{v^2}$. Logique : quand $v$ augmente, $\frac1v$ diminue.` },
        { expr: '-1/(x^2+1)^2', msg: String.raw`Il manque $v' = 2x$ au numérateur : $\left(\frac{1}{v}\right)' = -\frac{v'}{v^2}$. Le $-\frac{1}{v^2}$ seul ne vaut que pour $v = x$.` },
        { expr: '1/(2*x)', msg: String.raw`On ne dérive pas l'inverse d'une fonction en inversant sa dérivée : $\left(\frac1v\right)' = -\frac{v'}{v^2}$, pas $\frac{1}{v'}$.` }
      ],
      hint: String.raw`$\left(\dfrac{1}{v}\right)' = -\dfrac{v'}{v^2}$.`,
      explain: String.raw`Forme $\frac1v$ avec $v = x^2 + 1$, $v' = 2x$ : $f'(x) = -\dfrac{2x}{(x^2+1)^2}$.` },
    { id: 'm5-x-018', level: 2, check: 'expr', vars: ['x'],
      topic: 'Dérivée de exp(u)', sec: 'm5-s-regles',
      prompt: String.raw`Dérive $f(x) = \mathrm{e}^{-x^2}$.`,
      answer: '-2*x*exp(-x^2)',
      steps: [
        String.raw`Rappel : $\mathrm{e}^{-x^2}$ est une composée : l'exponentielle appliquée à $u(x) = -x^2$. On recopie l'exponentielle telle quelle et on multiplie par $u'$.`,
        String.raw`On dérive l'intérieur : $u'(x) = -2x$ (le signe moins fait partie de $u$).`,
        String.raw`Formule $(\mathrm{e}^u)' = u'\,\mathrm{e}^u$ : $f'(x) = -2x\,\mathrm{e}^{-x^2}$.`,
        String.raw`Contrôle : la courbe en cloche est maximale en $0$, donc $f'(0) = 0$ ✔ ; elle décroît pour $x \gt 0$, où $-2x\,\mathrm{e}^{-x^2} \lt 0$ ✔.`
      ],
      rule: String.raw`$(\mathrm{e}^{u})' = u'\,\mathrm{e}^{u}$`,
      pitfall: String.raw`Perdre le signe moins de $u = -x^2$ en dérivant.`,
      mistakes: [
        { expr: 'exp(-x^2)', msg: String.raw`Il manque $u' = -2x$ : $(\mathrm{e}^u)' = u'\,\mathrm{e}^u$, on multiplie toujours par la dérivée de l'exposant.` },
        { expr: '2*x*exp(-x^2)', msg: String.raw`Erreur de signe : $u = -x^2$ donne $u' = -2x$. Contrôle : la cloche décroît pour $x \gt 0$, la dérivée doit y être négative.` },
        { expr: '-x^2*exp(-x^2)', msg: String.raw`Tu as multiplié par $u$ au lieu de $u'$ : le facteur devant est la <b>dérivée</b> de l'exposant, $u' = -2x$.` }
      ],
      hint: String.raw`$(\mathrm{e}^u)' = u'\mathrm{e}^u$ avec $u = -x^2$.`,
      explain: String.raw`Composée $\mathrm{e}^u$ avec $u = -x^2$, $u' = -2x$ : $f'(x) = -2x\,\mathrm{e}^{-x^2}$.` },
    { id: 'm5-x-019', level: 2, check: 'expr', vars: ['x'],
      topic: 'Puissance d\'une fonction', sec: 'm5-s-regles',
      prompt: String.raw`Dérive $f(x) = \sin^2 x$.`,
      answer: '2*sin(x)*cos(x)',
      steps: [
        String.raw`Rappel : la notation $\sin^2 x$ signifie $(\sin x)^2$ : c'est le carré d'une fonction, forme $u^2$ avec $u(x) = \sin x$. On applique $(u^2)' = 2\,u'\,u$.`,
        String.raw`On dérive l'intérieur : $u'(x) = \cos x$.`,
        String.raw`Formule $(u^2)' = 2\,u'\,u$ : $f'(x) = 2\cos x \sin x$.`,
        String.raw`On peut simplifier : $2\sin x\cos x = \sin(2x)$.`,
        String.raw`Vérification : $\sin^2 x = \frac{1 - \cos(2x)}{2}$, dont la dérivée est $\frac{2\sin(2x)}{2} = \sin(2x)$ ✔.`
      ],
      rule: String.raw`$(u^2)' = 2\,u'\,u$ ; $2\sin x\cos x = \sin(2x)$`,
      pitfall: String.raw`Dériver le carré sans multiplier par $u' = \cos x$, ou dériver le sinus sans redescendre l'exposant.`,
      mistakes: [
        { expr: '2*sin(x)', msg: String.raw`Il manque $u' = \cos x$ : $(u^2)' = 2\,u'\,u$. On dérive le carré <b>et</b> l'intérieur.` },
        { expr: 'cos(x)^2', msg: String.raw`Tu as dérivé le sinus puis gardé le carré : $(u^2)' = 2u'u$, pas $(u')^2$.` },
        { expr: '2*cos(x)', msg: String.raw`Il manque le facteur $u = \sin x$ : $(u^2)' = 2\,u'\,u = 2\cos x \times \sin x$.` }
      ],
      hint: String.raw`$\sin^2 x = (\sin x)^2$ : forme $u^2$ avec $u = \sin x$.`,
      explain: String.raw`Forme $u^2$ avec $u = \sin x$, $u' = \cos x$ : $f'(x) = 2\sin x\cos x = \sin(2x)$.` },
    { id: 'm5-x-020', level: 2, check: 'value', vars: [],
      topic: 'Dérivée d\'un produit', sec: 'm5-s-regles',
      prompt: String.raw`Soit $f(x) = x\sin x$. Calcule $f'\left(\frac{\pi}{2}\right)$.`,
      answer: '1',
      steps: [
        String.raw`Rappel : $x\sin x$ est un produit ; on le dérive avec $(uv)' = u'v + uv'$ où $u(x) = x$ et $v(x) = \sin x$, puis on évalue la <b>dérivée</b> (et non la fonction) en $\frac{\pi}{2}$.`,
        String.raw`On dérive chaque facteur : $u'(x) = 1$ et $v'(x) = \cos x$.`,
        String.raw`Règle du produit : $f'(x) = u'v + uv' = \sin x + x\cos x$.`,
        String.raw`En $x = \frac{\pi}{2}$ : $\sin\frac{\pi}{2} = 1$ et $\cos\frac{\pi}{2} = 0$, donc $f'\left(\frac{\pi}{2}\right) = 1 + \frac{\pi}{2} \times 0 = 1$.`
      ],
      rule: String.raw`$(uv)' = u'v + uv'$, puis on évalue`,
      pitfall: String.raw`Se tromper dans les valeurs remarquables : $\cos\frac{\pi}{2} = 0$ et $\sin\frac{\pi}{2} = 1$.`,
      mistakes: [
        { expr: '0', msg: String.raw`Tu as calculé $u'v'$ ou seulement le terme $x\cos x$ : avec $(uv)' = u'v + uv'$, il y a aussi le terme $\sin\frac{\pi}{2} = 1$.` },
        { expr: 'pi/2', msg: String.raw`$\frac{\pi}{2} = f\left(\frac{\pi}{2}\right)$ est la valeur de la fonction : il fallait dériver avant d'évaluer.` },
        { expr: '1+pi/2', msg: String.raw`Valeur remarquable : $\cos\frac{\pi}{2} = 0$ (et non $1$), donc le terme $x\cos x$ s'annule.` }
      ],
      hint: String.raw`$f'(x) = \sin x + x\cos x$.`,
      explain: String.raw`Par la règle du produit, $f'(x) = \sin x + x\cos x$, donc $f'\left(\frac{\pi}{2}\right) = 1 + \frac{\pi}{2}\times 0 = 1$.` },
    { id: 'm5-x-021', level: 2, check: 'expr', vars: ['x'], domain: [0.3, 4],
      topic: 'Produit avec un logarithme', sec: 'm5-s-regles',
      prompt: String.raw`Dérive $f(x) = x\ln x - x$ sur $]0, +\infty[$.`,
      answer: 'ln(x)',
      steps: [
        String.raw`Rappel : $f$ est la somme d'un produit $x\ln x$ et de $-x$ ; on dérive chaque morceau, le produit avec $(uv)' = u'v + uv'$.`,
        String.raw`Produit $u \times v$ avec $u(x) = x$, $v(x) = \ln x$ : $u'(x) = 1$, $v'(x) = \frac{1}{x}$.`,
        String.raw`$(x\ln x)' = u'v + uv' = 1 \cdot \ln x + x \cdot \frac{1}{x} = \ln x + 1$.`,
        String.raw`$(-x)' = -1$, donc $f'(x) = \ln x + 1 - 1 = \ln x$.`,
        String.raw`Interprétation : $x\ln x - x$ est donc une primitive de $\ln x$ sur $]0, +\infty[$ ✔ (résultat à retenir).`
      ],
      rule: String.raw`$(uv)' = u'v + uv'$ ; $(x\ln x - x)' = \ln x$`,
      pitfall: String.raw`Oublier la dérivée de $-x$ ou un terme de la règle du produit.`,
      mistakes: [
        { expr: '1/x - 1', msg: String.raw`Tu as fait $u'v'$ : $(x\ln x)' \neq 1 \times \frac{1}{x}$. La règle du produit donne $u'v + uv' = \ln x + 1$.` },
        { expr: 'ln(x) + 1', msg: String.raw`Tu as oublié de dériver le $-x$, qui donne $-1$ : $\ln x + 1 - 1 = \ln x$.` }
      ],
      hint: String.raw`$(x\ln x)' = 1\cdot\ln x + x\cdot\frac{1}{x}$.`,
      explain: String.raw`$(x\ln x)' = \ln x + 1$ et $(-x)' = -1$, donc $f'(x) = \ln x$ : c'est pour cela que $x\ln x - x$ est une primitive de $\ln$.` },
    { id: 'm5-x-022', level: 2, check: 'expr', vars: ['x'],
      topic: 'Dérivée de arctan(u)', sec: 'm5-s-regles',
      prompt: String.raw`Dérive $f(x) = \arctan(2x)$.`,
      answer: '2/(1+4*x^2)',
      steps: [
        String.raw`Rappel : $\arctan(2x)$ est une composée : l'arctangente appliquée à $u(x) = 2x$. Comme $(\arctan x)' = \frac{1}{1+x^2}$, la règle de la chaîne donne $(\arctan u)' = \frac{u'}{1+u^2}$.`,
        String.raw`On dérive l'intérieur : $u'(x) = 2$, et on calcule $u^2 = (2x)^2 = 4x^2$.`,
        String.raw`Formule $(\arctan u)' = \dfrac{u'}{1+u^2}$ : $f'(x) = \dfrac{2}{1 + 4x^2}$.`,
        String.raw`Contrôle : $f'(0) = 2$, cohérent car près de $0$, $\arctan(2x) \approx 2x$ ✔.`
      ],
      rule: String.raw`$(\arctan u)' = \dfrac{u'}{1+u^2}$`,
      pitfall: String.raw`Écrire $1 + 2x^2$ au lieu de $1 + (2x)^2 = 1 + 4x^2$.`,
      mistakes: [
        { expr: '1/(1+4*x^2)', msg: String.raw`Il manque $u' = 2$ au numérateur : $(\arctan u)' = \frac{u'}{1+u^2}$.` },
        { expr: '2/(1+2*x^2)', msg: String.raw`Le carré porte sur tout $u$ : $u^2 = (2x)^2 = 4x^2$, pas $2x^2$.` },
        { expr: '2/(1+x^2)', msg: String.raw`Il faut remplacer $x$ par $u = 2x$ dans le dénominateur : $1 + u^2 = 1 + 4x^2$.` }
      ],
      hint: String.raw`$(\arctan u)' = \dfrac{u'}{1+u^2}$ avec $u = 2x$.`,
      explain: String.raw`Composée $\arctan(u)$ avec $u = 2x$, $u' = 2$, $u^2 = 4x^2$ : $f'(x) = \dfrac{2}{1+4x^2}$.` },
    { id: 'm5-x-023', level: 2, check: 'expr', vars: ['x'], domain: [0.3, 4],
      topic: 'Dérivée d\'un quotient', sec: 'm5-s-regles',
      prompt: String.raw`Dérive $f(x) = \dfrac{\mathrm{e}^x}{x}$ sur $]0, +\infty[$.`,
      answer: '(x-1)*exp(x)/x^2',
      steps: [
        String.raw`Rappel : $\frac{\mathrm{e}^x}{x}$ est un quotient $\frac{u}{v}$ avec $u(x) = \mathrm{e}^x$ et $v(x) = x \neq 0$ ; on applique $\left(\frac{u}{v}\right)' = \frac{u'v - uv'}{v^2}$.`,
        String.raw`On dérive : $u'(x) = \mathrm{e}^x$ et $v'(x) = 1$.`,
        String.raw`Formule $\left(\dfrac{u}{v}\right)' = \dfrac{u'v - uv'}{v^2} = \dfrac{\mathrm{e}^x \cdot x - \mathrm{e}^x \cdot 1}{x^2}$.`,
        String.raw`On factorise le numérateur par $\mathrm{e}^x$ : $f'(x) = \dfrac{(x - 1)\,\mathrm{e}^x}{x^2}$.`,
        String.raw`Contrôle : $f'(1) = 0$, et en effet $\frac{\mathrm{e}^x}{x}$ atteint son minimum $\mathrm{e}$ en $x = 1$ sur $]0, +\infty[$ ✔.`
      ],
      rule: String.raw`$\left(\dfrac{u}{v}\right)' = \dfrac{u'v - uv'}{v^2}$`,
      pitfall: String.raw`Inverser l'ordre des termes du numérateur, ce qui change le signe.`,
      mistakes: [
        { expr: '(1-x)*exp(x)/x^2', msg: String.raw`Numérateur à l'envers : c'est $u'v - uv' = \mathrm{e}^x\cdot x - \mathrm{e}^x\cdot 1$, en commençant par la dérivée du numérateur.` },
        { expr: 'exp(x)', msg: String.raw`$\left(\frac{u}{v}\right)' \neq \frac{u'}{v'}$ : ici $\frac{\mathrm{e}^x}{1}$ serait faux. Applique $\frac{u'v - uv'}{v^2}$.` },
        { expr: '(x+1)*exp(x)/x^2', msg: String.raw`Erreur de signe : la formule du quotient comporte un <b>moins</b>, $u'v - uv'$ (c'est la règle du produit qui a un plus).` }
      ],
      hint: String.raw`Quotient avec $u = \mathrm{e}^x$, $v = x$.`,
      explain: String.raw`Quotient avec $u = \mathrm{e}^x$, $v = x$ : $f'(x) = \dfrac{x\mathrm{e}^x - \mathrm{e}^x}{x^2} = \dfrac{(x-1)\,\mathrm{e}^x}{x^2}$.` },
    { id: 'm5-x-024', level: 2, check: 'expr', vars: ['x'],
      topic: 'Fonctions hyperboliques', sec: 'm5-s-usuelles',
      prompt: String.raw`Dérive $f(x) = \operatorname{ch}(2x)$. (Syntaxe : $\operatorname{ch}$ = cosh, $\operatorname{sh}$ = sinh.)`,
      answer: '2*sinh(2*x)',
      steps: [
        String.raw`Rappel : $\operatorname{ch} x = \frac{\mathrm{e}^x + \mathrm{e}^{-x}}{2}$ (cosinus hyperbolique) a pour dérivée $\operatorname{sh} x = \frac{\mathrm{e}^x - \mathrm{e}^{-x}}{2}$. Ici $\operatorname{ch}(2x)$ est une composée avec l'intérieur $u(x) = 2x$.`,
        String.raw`On dérive l'intérieur : $u'(x) = 2$.`,
        String.raw`Formule $(\operatorname{ch} u)' = u'\operatorname{sh} u$, <b>sans</b> signe moins (contrairement à $\cos$) : $f'(x) = 2\operatorname{sh}(2x)$.`,
        String.raw`Contrôle : $\operatorname{ch}$ est paire et minimale en $0$, donc $f'(0) = 0$ ✔ ($\operatorname{sh} 0 = 0$) et $f'$ est impaire ✔.`
      ],
      rule: String.raw`$(\operatorname{ch} u)' = u'\operatorname{sh} u$ et $(\operatorname{sh} u)' = u'\operatorname{ch} u$ (aucun signe moins)`,
      pitfall: String.raw`Recopier le signe moins de $(\cos)' = -\sin$ en hyperbolique.`,
      mistakes: [
        { expr: '-2*sinh(2*x)', msg: String.raw`Pas de signe moins : $(\operatorname{ch})' = \operatorname{sh}$. Avec $\operatorname{ch} x = \frac{\mathrm{e}^x + \mathrm{e}^{-x}}{2}$, la dérivée vaut $\frac{\mathrm{e}^x - \mathrm{e}^{-x}}{2} = \operatorname{sh} x$.` },
        { expr: 'sinh(2*x)', msg: String.raw`Il manque $u' = 2$ : $(\operatorname{ch} u)' = u'\operatorname{sh} u$ avec $u = 2x$.` },
        { expr: '2*cosh(2*x)', msg: String.raw`La dérivée de $\operatorname{ch}$ est $\operatorname{sh}$, pas $\operatorname{ch}$ (c'est l'exponentielle qui est sa propre dérivée).` }
      ],
      hint: String.raw`$(\operatorname{ch} u)' = u'\operatorname{sh} u$.`,
      explain: String.raw`Composée $\operatorname{ch}(u)$ avec $u = 2x$, $u' = 2$ : $f'(x) = 2\operatorname{sh}(2x)$.` },
    { id: 'm5-x-025', level: 2, check: 'expr', vars: ['x'],
      topic: 'Exponentielle de base a', sec: 'm5-s-usuelles',
      prompt: String.raw`Dérive $f(x) = 2^x$.`,
      answer: 'ln(2)*2^x',
      steps: [
        String.raw`Rappel : $2^x$ n'est pas une fonction puissance (c'est l'exposant qui varie) : par définition $2^x = \mathrm{e}^{x\ln 2}$. On la dérive donc comme une exponentielle.`,
        String.raw`Forme $\mathrm{e}^u$ avec $u(x) = x\ln 2$, et $u'(x) = \ln 2$ (une constante).`,
        String.raw`Formule $(\mathrm{e}^u)' = u'\,\mathrm{e}^u$ : $f'(x) = \ln 2 \cdot \mathrm{e}^{x\ln 2}$.`,
        String.raw`On revient à $2^x$ : $f'(x) = \ln(2)\,2^x$. Contrôle : $\ln 2 \approx 0{,}69 \gt 0$, donc $f$ est croissante ✔.`
      ],
      rule: String.raw`$(a^x)' = \ln(a)\,a^x$ car $a^x = \mathrm{e}^{x\ln a}$`,
      pitfall: String.raw`Appliquer la règle des puissances $(x^n)' = nx^{n-1}$ alors que c'est l'exposant qui varie.`,
      mistakes: [
        { expr: 'x*2^(x-1)', msg: String.raw`L'exposant varie : la règle $(x^n)' = nx^{n-1}$ (exposant constant) ne s'applique pas. Écris $2^x = \mathrm{e}^{x\ln 2}$.` },
        { expr: '2^x', msg: String.raw`Seule $\mathrm{e}^x$ est sa propre dérivée ; pour la base $2$, écris $2^x = \mathrm{e}^{x\ln 2}$ et il apparaît le facteur $\ln 2$.` },
        { expr: '2^x/ln(2)', msg: String.raw`C'est une <b>primitive</b> de $2^x$ : en dérivant on <b>multiplie</b> par $\ln 2$, on ne divise pas.` }
      ],
      hint: String.raw`$2^x = \mathrm{e}^{x\ln 2}$.`,
      explain: String.raw`$2^x = \mathrm{e}^{x\ln 2}$ est une forme $\mathrm{e}^u$ avec $u' = \ln 2$, donc $f'(x) = \ln(2)\,2^x$.` },
    { id: 'm5-x-026', level: 2, check: 'expr', vars: ['x'],
      topic: 'Équation de la tangente', sec: 'm5-s-def',
      prompt: String.raw`Donne l'équation de la tangente à la courbe de $\sin$ au point d'abscisse $\pi$, sous la forme $y = \ldots$`,
      answer: 'pi - x',
      steps: [
        String.raw`Rappel : la tangente en $a$ est la droite de pente $f'(a)$ passant par $\big(a, f(a)\big)$ : $y = f'(a)(x - a) + f(a)$. Ici $f = \sin$ et $a = \pi$.`,
        String.raw`Ordonnée du point : $f(\pi) = \sin\pi = 0$.`,
        String.raw`Pente : $f'(x) = \cos x$, donc $f'(\pi) = \cos\pi = -1$.`,
        String.raw`On remplace : $y = -1 \cdot (x - \pi) + 0 = \pi - x$.`,
        String.raw`Vérification : en $x = \pi$, $y = 0 = \sin\pi$ ✔ ; pente $-1$ cohérente avec la décroissance de $\sin$ autour de $\pi$ ✔.`
      ],
      rule: String.raw`Tangente en $a$ : $y = f'(a)(x - a) + f(a)$`,
      pitfall: String.raw`Se tromper sur $\cos\pi = -1$, ou oublier le décalage $(x - \pi)$.`,
      mistakes: [
        { expr: 'x - pi', msg: String.raw`Pente fausse : $\cos\pi = -1$, pas $1$. Autour de $\pi$ le sinus décroît, la pente est négative.` },
        { expr: '-x', msg: String.raw`Il manque le décalage : c'est $f'(\pi)(x - \pi) + f(\pi)$, pas $f'(\pi)\,x$. En $x = \pi$ ta droite donne $-\pi$ au lieu de $0$.` }
      ],
      hint: String.raw`$\sin\pi = 0$ et $\sin'(\pi) = \cos\pi$.`,
      explain: String.raw`$f(\pi) = 0$ et $f'(\pi) = \cos\pi = -1$, d'où $y = -(x - \pi) = \pi - x$.` },
    { id: 'm5-x-027', level: 2, check: 'expr', vars: ['x'], domain: [-1.2, 1.2],
      topic: 'Dérivée de ln(u)', sec: 'm5-s-regles',
      prompt: String.raw`Dérive $f(x) = \ln(\cos x)$ sur $\left]-\frac{\pi}{2}, \frac{\pi}{2}\right[$.`,
      answer: '-tan(x)',
      steps: [
        String.raw`Rappel : $\ln(\cos x)$ est une composée : le logarithme appliqué à $u(x) = \cos x$, strictement positif sur $\left]-\frac{\pi}{2}, \frac{\pi}{2}\right[$. On utilise $(\ln u)' = \frac{u'}{u}$.`,
        String.raw`On dérive l'intérieur : $u'(x) = -\sin x$.`,
        String.raw`Formule $(\ln u)' = \dfrac{u'}{u}$ : $f'(x) = \dfrac{-\sin x}{\cos x}$.`,
        String.raw`On simplifie : $f'(x) = -\tan x$.`,
        String.raw`Contrôle : $f$ est maximale en $0$ (où $\ln 1 = 0$), donc $f'(0) = 0$ ✔ ; $f$ paire donc $f'$ impaire ✔.`
      ],
      rule: String.raw`$(\ln u)' = \dfrac{u'}{u}$ ; $\dfrac{\sin x}{\cos x} = \tan x$`,
      pitfall: String.raw`Oublier le signe moins de $(\cos x)' = -\sin x$.`,
      mistakes: [
        { expr: 'tan(x)', msg: String.raw`Erreur de signe : $u = \cos x$ donne $u' = -\sin x$, donc $\frac{u'}{u} = -\tan x$.` },
        { expr: '1/cos(x)', msg: String.raw`Il manque $u'$ : $(\ln u)' = \frac{u'}{u}$ avec $u' = -\sin x$, pas $\frac{1}{u}$ seul.` }
      ],
      hint: String.raw`$(\ln u)' = \dfrac{u'}{u}$ avec $u = \cos x$.`,
      explain: String.raw`Composée $\ln(u)$ avec $u = \cos x$, $u' = -\sin x$ : $f'(x) = \dfrac{-\sin x}{\cos x} = -\tan x$.` },
    { id: 'm5-x-028', level: 2, check: 'expr', vars: ['x'], domain: [-0.9, 0.9],
      topic: 'Arcsinus et arccosinus', sec: 'm5-s-usuelles',
      prompt: String.raw`Dérive $f(x) = \arcsin x + \arccos x$ sur $]-1, 1[$, puis simplifie.`,
      answer: '0',
      steps: [
        String.raw`Rappel : $\arcsin x$ et $\arccos x$ sont les angles dont le sinus (resp. le cosinus) vaut $x$ ; $\arcsin$ croît et $\arccos$ décroît sur $[-1, 1]$. On dérive la somme terme à terme.`,
        String.raw`$(\arcsin x)' = \dfrac{1}{\sqrt{1-x^2}}$.`,
        String.raw`$(\arccos x)' = -\dfrac{1}{\sqrt{1-x^2}}$ (signe moins : $\arccos$ est décroissante).`,
        String.raw`On additionne : $f'(x) = \dfrac{1}{\sqrt{1-x^2}} - \dfrac{1}{\sqrt{1-x^2}} = 0$.`,
        String.raw`Conséquence : $f$ est constante sur l'<b>intervalle</b> $]-1, 1[$, égale à $f(0) = 0 + \frac{\pi}{2}$, donc $\arcsin x + \arccos x = \frac{\pi}{2}$.`
      ],
      rule: String.raw`$(\arcsin x)' = \dfrac{1}{\sqrt{1-x^2}}$, $(\arccos x)' = -\dfrac{1}{\sqrt{1-x^2}}$`,
      pitfall: String.raw`Oublier le signe moins de la dérivée de $\arccos$.`,
      mistakes: [
        { expr: '2/sqrt(1-x^2)', msg: String.raw`$(\arccos x)' = -\frac{1}{\sqrt{1-x^2}}$ avec un signe moins ($\arccos$ décroît de $\pi$ à $0$) : les deux dérivées s'annulent.` },
        { expr: 'pi/2', msg: String.raw`$\frac{\pi}{2}$ est la <b>valeur</b> de $f(x)$, pas sa dérivée : une fonction constante a une dérivée nulle.` }
      ],
      hint: String.raw`Les dérivées de $\arcsin$ et $\arccos$ sont opposées.`,
      explain: String.raw`Les dérivées de $\arcsin$ et $\arccos$ sont opposées, donc $f'(x) = 0$ : $f$ est constante, égale à $\frac{\pi}{2}$.` },
    { id: 'm5-x-029', level: 2, check: 'expr', vars: ['x'],
      topic: 'Équation de la tangente', sec: 'm5-s-def',
      prompt: String.raw`Donne l'équation de la tangente à la courbe de $f(x) = \dfrac{1}{x}$ au point d'abscisse $-1$, sous la forme $y = \ldots$`,
      answer: '-x - 2',
      steps: [
        String.raw`Rappel : la tangente en $a$ a pour équation $y = f'(a)(x - a) + f(a)$. Ici $a = -1$, donc $x - a = x - (-1) = x + 1$ : attention au signe.`,
        String.raw`Ordonnée du point : $f(-1) = \frac{1}{-1} = -1$.`,
        String.raw`Pente : $f'(x) = -\dfrac{1}{x^2}$, donc $f'(-1) = -\dfrac{1}{(-1)^2} = -1$.`,
        String.raw`On remplace : $y = -1 \cdot (x + 1) + (-1) = -x - 1 - 1 = -x - 2$.`,
        String.raw`Vérification : en $x = -1$, $y = 1 - 2 = -1 = f(-1)$ ✔.`
      ],
      rule: String.raw`Tangente en $a$ : $y = f'(a)(x - a) + f(a)$ ; avec $a \lt 0$, $(x - a) = (x + |a|)$`,
      pitfall: String.raw`Avec $a$ négatif, écrire $(x - 1)$ au lieu de $(x + 1)$.`,
      mistakes: [
        { expr: '-x', msg: String.raw`Attention au signe de $a$ : $x - a$ avec $a = -1$ donne $x + 1$, pas $x - 1$. Contrôle : en $x = -1$ ta droite donne $1$ au lieu de $f(-1) = -1$.` },
        { expr: 'x', msg: String.raw`Erreur de signe sur la pente : $f'(x) = -\frac{1}{x^2}$ est toujours négative, donc $f'(-1) = -1$ (le carré rend $(-1)^2 = 1$ positif).` }
      ],
      hint: String.raw`$f(-1) = -1$ et $f'(x) = -\dfrac{1}{x^2}$.`,
      explain: String.raw`$f(-1) = -1$ et $f'(-1) = -1$, d'où $y = -(x + 1) - 1 = -x - 2$.` },
    { id: 'm5-x-030', level: 2, check: 'expr', vars: ['x', 'y'],
      topic: 'Dérivées partielles', sec: 'm5-s-partielles',
      prompt: String.raw`Soit $f(x, y) = x^2y + 3xy^3$. Calcule $\dfrac{\partial f}{\partial x}(x, y)$.`,
      answer: '2*x*y + 3*y^3',
      steps: [
        String.raw`Rappel : pour une fonction de deux variables, $\frac{\partial f}{\partial x}$ mesure la variation de $f$ quand seul $x$ bouge : on dérive par rapport à $x$ en traitant $y$ comme une <b>constante</b> (un simple nombre).`,
        String.raw`Premier terme : $x^2y = y \cdot x^2$, avec $y$ coefficient constant : $\frac{\partial}{\partial x}(x^2 y) = y \cdot 2x = 2xy$.`,
        String.raw`Second terme : $3xy^3 = (3y^3) \cdot x$ : $\frac{\partial}{\partial x}(3xy^3) = 3y^3$.`,
        String.raw`Résultat : $\dfrac{\partial f}{\partial x} = 2xy + 3y^3$.`,
        String.raw`Vérification en $(1, 1)$ : $f(x, 1) = x^2 + 3x$ a pour dérivée $2x + 3 = 5$ en $x = 1$, et $2 + 3 = 5$ ✔.`
      ],
      rule: String.raw`$\dfrac{\partial f}{\partial x}$ : on dérive par rapport à $x$ en traitant $y$ comme une constante`,
      pitfall: String.raw`Dériver aussi les facteurs en $y$, ou dériver par rapport à la mauvaise variable.`,
      mistakes: [
        { expr: 'x^2 + 9*x*y^2', msg: String.raw`C'est $\frac{\partial f}{\partial y}$ : tu as dérivé par rapport à $y$. Ici on dérive par rapport à $x$, $y$ étant figé.` },
        { expr: '2*x*y + x^2 + 3*y^3 + 9*x*y^2', msg: String.raw`On ne dérive que par rapport à $x$ : les facteurs en $y$ sont des constantes et restent tels quels (pas de règle du produit entre $x^2$ et $y$).` }
      ],
      hint: String.raw`$y$ est une constante : $x^2y \to 2xy$ et $3xy^3 \to 3y^3$.`,
      explain: String.raw`En traitant $y$ comme une constante, $\frac{\partial}{\partial x}(x^2y) = 2xy$ et $\frac{\partial}{\partial x}(3xy^3) = 3y^3$, donc $\dfrac{\partial f}{\partial x} = 2xy + 3y^3$.` },
    { id: 'm5-x-031', level: 2, check: 'expr', vars: ['x', 'y'],
      topic: 'Dérivées partielles', sec: 'm5-s-partielles',
      prompt: String.raw`Soit $f(x, y) = \mathrm{e}^{xy}$. Calcule $\dfrac{\partial f}{\partial y}(x, y)$.`,
      answer: 'x*exp(x*y)',
      steps: [
        String.raw`Rappel : $\frac{\partial f}{\partial y}$ se calcule en dérivant par rapport à $y$, $x$ étant traité comme une constante. Toutes les règles usuelles (composée, produit…) s'appliquent.`,
        String.raw`Composée $\mathrm{e}^{u}$ avec $u(x, y) = xy$.`,
        String.raw`Dérivée de l'intérieur par rapport à $y$ : $\frac{\partial u}{\partial y} = x$ (comme la dérivée de $3y$ est $3$).`,
        String.raw`Formule $(\mathrm{e}^u)' = u'\,\mathrm{e}^u$ : $\dfrac{\partial f}{\partial y} = x\,\mathrm{e}^{xy}$.`
      ],
      rule: String.raw`$\dfrac{\partial}{\partial y}\,\mathrm{e}^{u} = \dfrac{\partial u}{\partial y}\,\mathrm{e}^{u}$`,
      pitfall: String.raw`Oublier le facteur $\frac{\partial u}{\partial y} = x$, ou le confondre avec $\frac{\partial u}{\partial x} = y$.`,
      mistakes: [
        { expr: 'exp(x*y)', msg: String.raw`Il manque $u' = \frac{\partial (xy)}{\partial y} = x$ : comme en une variable, on multiplie par la dérivée de l'exposant.` },
        { expr: 'y*exp(x*y)', msg: String.raw`C'est $\frac{\partial f}{\partial x}$ : par rapport à $y$, la dérivée de $xy$ est $x$ (c'est $x$ la constante).` }
      ],
      hint: String.raw`$(\mathrm{e}^u)' = u'\mathrm{e}^u$ avec $u = xy$ dérivé par rapport à $y$.`,
      explain: String.raw`Avec $x$ constant, $\frac{\partial}{\partial y}(xy) = x$, donc $\dfrac{\partial f}{\partial y} = x\,\mathrm{e}^{xy}$.` },
    { id: 'm5-x-032', level: 3, check: 'expr', vars: ['x'], domain: [0.3, 3],
      topic: 'Fonction x puissance x', sec: 'm5-s-usuelles',
      prompt: String.raw`Dérive $f(x) = x^x$ sur $]0, +\infty[$.`,
      answer: '(ln(x)+1)*x^x',
      steps: [
        String.raw`Rappel : dans $x^x$, la base <b>et</b> l'exposant varient : ni $(x^n)' = nx^{n-1}$ (exposant constant) ni $(a^x)' = \ln(a)\,a^x$ (base constante) ne s'appliquent. On revient à la définition $x^x = \mathrm{e}^{x\ln x}$ (pour $x \gt 0$).`,
        String.raw`Forme $\mathrm{e}^u$ avec $u(x) = x\ln x$.`,
        String.raw`$u$ est un produit : $u'(x) = 1 \cdot \ln x + x \cdot \frac{1}{x} = \ln x + 1$.`,
        String.raw`Formule $(\mathrm{e}^u)' = u'\,\mathrm{e}^u$ : $f'(x) = (\ln x + 1)\,\mathrm{e}^{x\ln x} = (\ln x + 1)\,x^x$.`,
        String.raw`Contrôle : $f'(1) = (0 + 1) \times 1 = 1$, et $f'$ s'annule en $x = \frac{1}{\mathrm{e}}$, où $x^x$ atteint son minimum ✔.`
      ],
      rule: String.raw`$u^v = \mathrm{e}^{v\ln u}$ ; $(\mathrm{e}^{w})' = w'\,\mathrm{e}^{w}$`,
      pitfall: String.raw`Traiter $x^x$ comme $x^n$ ou comme $a^x$ : les deux formules exigent qu'une partie soit constante.`,
      mistakes: [
        { expr: 'x*x^(x-1)', msg: String.raw`L'exposant n'est pas constant : la règle $(x^n)' = nx^{n-1}$ ne s'applique pas. Écris $x^x = \mathrm{e}^{x\ln x}$.` },
        { expr: 'ln(x)*x^x', msg: String.raw`Tu as traité $x^x$ comme $a^x$ (base constante) : la base varie aussi. Avec $u = x\ln x$, $u' = \ln x + 1$ (règle du produit).` }
      ],
      hint: String.raw`Écris $x^x = \mathrm{e}^{x\ln x}$.`,
      explain: String.raw`On écrit $x^x = \mathrm{e}^{x\ln x}$ ; avec $u = x\ln x$, $u' = \ln x + 1$, donc $f'(x) = (\ln x + 1)\,x^x$.` },
    { id: 'm5-x-033', level: 3, check: 'expr', vars: ['x'], domain: [-2, 2],
      topic: 'Dérivée d\'un quotient', sec: 'm5-s-regles',
      prompt: String.raw`Dérive $f(x) = \dfrac{\sin x}{1 + \cos x}$ sur $]-\pi, \pi[$ et simplifie.`,
      answer: '1/(1+cos(x))',
      steps: [
        String.raw`Rappel : $f$ est un quotient $\frac{u}{v}$ avec $u(x) = \sin x$ et $v(x) = 1 + \cos x$, non nul sur $]-\pi, \pi[$ ; on applique $\left(\frac{u}{v}\right)' = \frac{u'v - uv'}{v^2}$, puis on simplifie avec $\cos^2 + \sin^2 = 1$.`,
        String.raw`On dérive : $u'(x) = \cos x$ et $v'(x) = -\sin x$.`,
        String.raw`Formule du quotient : $f'(x) = \dfrac{\cos x\,(1 + \cos x) - \sin x\,(-\sin x)}{(1+\cos x)^2}$.`,
        String.raw`Numérateur : $\cos x + \cos^2 x + \sin^2 x = \cos x + 1$, grâce à $\cos^2 x + \sin^2 x = 1$. On simplifie par $1 + \cos x \neq 0$ : $f'(x) = \dfrac{1 + \cos x}{(1+\cos x)^2} = \dfrac{1}{1 + \cos x}$.`,
        String.raw`Vérification : $f(x) = \tan\frac{x}{2}$ (formules de l'angle moitié), dont la dérivée est $\frac{1}{2\cos^2(x/2)} = \frac{1}{1 + \cos x}$ ✔.`
      ],
      rule: String.raw`$\left(\dfrac{u}{v}\right)' = \dfrac{u'v - uv'}{v^2}$ ; $\cos^2 x + \sin^2 x = 1$`,
      pitfall: String.raw`Le double signe moins : $-u v' = -\sin x \times (-\sin x) = +\sin^2 x$.`,
      mistakes: [
        { expr: '-1/(1+cos(x))', msg: String.raw`Numérateur à l'envers : c'est $u'v - uv'$, en commençant par la dérivée du numérateur $\sin x$.` },
        { expr: '-cos(x)/sin(x)', msg: String.raw`$\left(\frac{u}{v}\right)' \neq \frac{u'}{v'}$ : on ne divise pas les dérivées, on applique $\frac{u'v - uv'}{v^2}$.` },
        { expr: '(cos(x)+cos(x)^2-sin(x)^2)/(1+cos(x))^2', msg: String.raw`Erreur de signe : $-uv' = -\sin x \times (-\sin x) = +\sin^2 x$. Les deux moins donnent un plus, ce qui permet d'utiliser $\cos^2 + \sin^2 = 1$.` }
      ],
      hint: String.raw`Quotient, puis utilise $\cos^2 x + \sin^2 x = 1$ au numérateur.`,
      explain: String.raw`La formule du quotient donne un numérateur $\cos x + \cos^2 x + \sin^2 x = 1 + \cos x$, d'où $f'(x) = \dfrac{1}{1+\cos x}$ après simplification.` },
    { id: 'm5-x-034', level: 3, check: 'expr', vars: ['x'],
      topic: 'Dérivée de exp(u)', sec: 'm5-s-regles',
      prompt: String.raw`Dérive $f(x) = \mathrm{e}^{\sin x}$.`,
      answer: 'cos(x)*exp(sin(x))',
      steps: [
        String.raw`Rappel : $\mathrm{e}^{\sin x}$ est une composée : l'exponentielle appliquée à $u(x) = \sin x$. On recopie l'exponentielle et on multiplie par la dérivée de l'exposant.`,
        String.raw`On dérive l'intérieur : $u'(x) = \cos x$.`,
        String.raw`Formule $(\mathrm{e}^u)' = u'\,\mathrm{e}^u$ : on garde $\mathrm{e}^{\sin x}$ intact et on multiplie par $\cos x$.`,
        String.raw`Résultat : $f'(x) = \cos x\;\mathrm{e}^{\sin x}$. Contrôle : $f$ est maximale en $\frac{\pi}{2}$ (où $\sin = 1$), et $f'\left(\frac{\pi}{2}\right) = 0$ ✔.`
      ],
      rule: String.raw`$(\mathrm{e}^{u})' = u'\,\mathrm{e}^{u}$`,
      pitfall: String.raw`Modifier l'exposant en dérivant : il reste $\sin x$, on multiplie juste par $\cos x$.`,
      mistakes: [
        { expr: 'exp(sin(x))', msg: String.raw`Il manque $u' = \cos x$ : $(\mathrm{e}^u)' = u'\,\mathrm{e}^u$, on multiplie toujours par la dérivée de l'exposant.` },
        { expr: 'exp(cos(x))', msg: String.raw`On ne dérive pas l'exposant « sur place » : l'exposant reste $\sin x$, et sa dérivée $\cos x$ vient en facteur devant.` }
      ],
      hint: String.raw`$(\mathrm{e}^u)' = u'\mathrm{e}^u$ avec $u = \sin x$.`,
      explain: String.raw`Composée $\mathrm{e}^u$ avec $u = \sin x$, $u' = \cos x$ : $f'(x) = \cos x\;\mathrm{e}^{\sin x}$.` },
    { id: 'm5-x-035', level: 3, check: 'expr', vars: ['x'],
      topic: 'Composées emboîtées', sec: 'm5-s-regles',
      prompt: String.raw`Dérive $f(x) = \cos^3(2x)$.`,
      answer: '-6*sin(2*x)*cos(2*x)^2',
      steps: [
        String.raw`Rappel : pour une composée à plusieurs étages, on dérive de l'extérieur vers l'intérieur et on multiplie toutes les dérivées obtenues. Ici $x \mapsto 2x \mapsto \cos(2x) \mapsto \big(\cos(2x)\big)^3$ : on pose $u(x) = \cos(2x)$, de sorte que $f = u^3$.`,
        String.raw`Calcul de $u'$ : $u$ est elle-même une composée $\cos(w)$ avec $w = 2x$, $w' = 2$, donc $u'(x) = -2\sin(2x)$.`,
        String.raw`Formule $(u^3)' = 3\,u'\,u^2$ : $f'(x) = 3 \times \big(-2\sin(2x)\big) \times \cos^2(2x)$.`,
        String.raw`Résultat : $f'(x) = -6\sin(2x)\cos^2(2x)$.`,
        String.raw`Contrôle : $f$ est maximale en $0$ ($\cos^3 0 = 1$), et $f'(0) = -6 \times 0 \times 1 = 0$ ✔.`
      ],
      rule: String.raw`$(u^n)' = n\,u'\,u^{n-1}$ et $(\cos w)' = -w'\sin w$ (on dérive chaque étage)`,
      pitfall: String.raw`Oublier une des dérivées intérieures : ici il y en a deux, $-\sin$ et $2$.`,
      mistakes: [
        { expr: '-3*sin(2*x)*cos(2*x)^2', msg: String.raw`Deux composées emboîtées : il manque le facteur $2$ venant de $(2x)' = 2$. On a $u' = -2\sin(2x)$, pas $-\sin(2x)$.` },
        { expr: '3*cos(2*x)^2', msg: String.raw`Il manque $u'$ : avec $u = \cos(2x)$, $(u^3)' = 3\,u'\,u^2$ et $u' = -2\sin(2x)$.` },
        { expr: '6*sin(2*x)*cos(2*x)^2', msg: String.raw`Erreur de signe : $(\cos w)' = -w'\sin w$, donc $u' = -2\sin(2x)$.` }
      ],
      hint: String.raw`Forme $u^3$ avec $u = \cos(2x)$, puis $u' = -2\sin(2x)$.`,
      explain: String.raw`Forme $u^3$ avec $u = \cos(2x)$ et $u' = -2\sin(2x)$ : $f'(x) = 3u'u^2 = -6\sin(2x)\cos^2(2x)$.` },
    { id: 'm5-x-036', level: 3, check: 'expr', vars: ['x'],
      topic: 'Dérivée de ln(u)', sec: 'm5-s-regles',
      prompt: String.raw`Dérive $f(x) = \ln\left(x + \sqrt{x^2+1}\right)$ et simplifie.`,
      answer: '1/sqrt(x^2+1)',
      steps: [
        String.raw`Rappel : $f$ est une composée $\ln(u)$ avec $u(x) = x + \sqrt{x^2+1}$, strictement positif car $\sqrt{x^2+1} \gt |x|$ ; on utilise $(\ln u)' = \frac{u'}{u}$.`,
        String.raw`Calcul de $u'$ : $\left(\sqrt{x^2+1}\right)' = \dfrac{2x}{2\sqrt{x^2+1}} = \dfrac{x}{\sqrt{x^2+1}}$, donc $u'(x) = 1 + \dfrac{x}{\sqrt{x^2+1}}$.`,
        String.raw`Même dénominateur : $u'(x) = \dfrac{\sqrt{x^2+1} + x}{\sqrt{x^2+1}}$. On voit apparaître $u$ au numérateur !`,
        String.raw`Formule $(\ln u)' = \dfrac{u'}{u} = \dfrac{\sqrt{x^2+1} + x}{\sqrt{x^2+1}} \times \dfrac{1}{x + \sqrt{x^2+1}}$.`,
        String.raw`On simplifie par $x + \sqrt{x^2+1} \neq 0$ : $f'(x) = \dfrac{1}{\sqrt{x^2+1}}$. C'est la dérivée de $\operatorname{argsh}$, réciproque de $\operatorname{sh}$ ✔.`
      ],
      rule: String.raw`$(\ln u)' = \dfrac{u'}{u}$ et $(\sqrt{w})' = \dfrac{w'}{2\sqrt{w}}$`,
      pitfall: String.raw`Ne pas réduire $u'$ au même dénominateur : la simplification spectaculaire n'apparaît qu'ainsi.`,
      mistakes: [
        { expr: '1/(x+sqrt(x^2+1))', msg: String.raw`Il manque $u'$ : $(\ln u)' = \frac{u'}{u}$ avec $u' = 1 + \frac{x}{\sqrt{x^2+1}}$, pas $\frac{1}{u}$ seul.` },
        { expr: '1+x/sqrt(x^2+1)', msg: String.raw`Tu as seulement calculé $u'$ : il faut encore diviser par $u = x + \sqrt{x^2+1}$, car $(\ln u)' = \frac{u'}{u}$.` },
        { expr: '(1+1/(2*sqrt(x^2+1)))/(x+sqrt(x^2+1))', msg: String.raw`Dans la racine, il faut aussi la dérivée intérieure : $\left(\sqrt{x^2+1}\right)' = \frac{2x}{2\sqrt{x^2+1}} = \frac{x}{\sqrt{x^2+1}}$, pas $\frac{1}{2\sqrt{x^2+1}}$.` }
      ],
      hint: String.raw`$u = x + \sqrt{x^2+1}$, $u' = 1 + \dfrac{x}{\sqrt{x^2+1}} = \dfrac{\sqrt{x^2+1} + x}{\sqrt{x^2+1}}$.`,
      explain: String.raw`Avec $u = x + \sqrt{x^2+1}$, on trouve $u' = \frac{u}{\sqrt{x^2+1}}$, donc $\frac{u'}{u} = \dfrac{1}{\sqrt{x^2+1}}$ : c'est la fonction $\operatorname{argsh}$.` },
    { id: 'm5-x-037', level: 3, check: 'value', vars: [],
      topic: 'Dérivée seconde', sec: 'm5-s-successives',
      prompt: String.raw`Soit $f(x) = x^4 - 6x^2$. Calcule la dérivée seconde $f''(2)$.`,
      answer: '36',
      steps: [
        String.raw`Rappel : la dérivée seconde $f''$ est la dérivée de $f'$ ; elle mesure comment la pente varie (son signe donne la convexité). On dérive donc deux fois, puis on évalue en $x = 2$.`,
        String.raw`Dérivée première : $f'(x) = 4x^3 - 12x$.`,
        String.raw`Dérivée seconde : $f''(x) = (4x^3)' - (12x)' = 12x^2 - 12$.`,
        String.raw`On évalue : $f''(2) = 12 \times 4 - 12 = 48 - 12 = 36$.`,
        String.raw`Interprétation : $f''(2) = 36 \gt 0$, la courbe est convexe au voisinage de $x = 2$.`
      ],
      rule: String.raw`$f'' = (f')'$ : on dérive deux fois avec $(x^n)' = nx^{n-1}$`,
      pitfall: String.raw`S'arrêter à la dérivée première, ou oublier un terme à la seconde dérivation.`,
      mistakes: [
        { expr: '8', msg: String.raw`$8 = f'(2) = 32 - 24$ : c'est la dérivée première. Il faut dériver une seconde fois : $f''(x) = 12x^2 - 12$.` },
        { expr: '-8', msg: String.raw`$-8 = f(2) = 16 - 24$ : c'est la valeur de la fonction. Il faut dériver deux fois avant d'évaluer.` },
        { expr: '48', msg: String.raw`Tu as oublié de dériver le terme $-12x$ de $f'$, qui donne $-12$ : $f''(2) = 48 - 12 = 36$.` }
      ],
      hint: String.raw`$f'(x) = 4x^3 - 12x$, puis dérive encore.`,
      explain: String.raw`$f'(x) = 4x^3 - 12x$ puis $f''(x) = 12x^2 - 12$, donc $f''(2) = 36 \gt 0$ (courbe convexe près de 2).` },
    { id: 'm5-x-038', level: 3, check: 'expr', vars: ['x', 'y'],
      topic: 'Dérivées partielles', sec: 'm5-s-partielles',
      prompt: String.raw`Soit $f(x, y) = \sqrt{x^2 + y^2}$ (distance à l'origine). Calcule $\dfrac{\partial f}{\partial x}(x, y)$ pour $(x, y) \neq (0, 0)$.`,
      answer: 'x/sqrt(x^2+y^2)',
      steps: [
        String.raw`Rappel : $\frac{\partial f}{\partial x}$ s'obtient en dérivant par rapport à $x$ avec $y$ constant. Ici $f = \sqrt{u}$ avec $u(x, y) = x^2 + y^2$ : on utilise $(\sqrt{u})' = \frac{u'}{2\sqrt u}$.`,
        String.raw`Dérivée de l'intérieur par rapport à $x$ : $\frac{\partial u}{\partial x} = 2x$ ($y^2$ est une constante, de dérivée nulle).`,
        String.raw`Formule $(\sqrt{u})' = \dfrac{u'}{2\sqrt{u}}$ : $\dfrac{\partial f}{\partial x} = \dfrac{2x}{2\sqrt{x^2+y^2}}$.`,
        String.raw`On simplifie par $2$ : $\dfrac{\partial f}{\partial x} = \dfrac{x}{\sqrt{x^2+y^2}}$.`,
        String.raw`Contrôle : sur l'axe $y = 0$, $x \gt 0$, on a $f = |x| = x$ de dérivée $1$, et la formule donne $\frac{x}{\sqrt{x^2}} = 1$ ✔.`
      ],
      rule: String.raw`$\dfrac{\partial}{\partial x}\sqrt{u} = \dfrac{\partial u / \partial x}{2\sqrt{u}}$`,
      pitfall: String.raw`Dériver aussi $y^2$, qui est une constante pour $\frac{\partial}{\partial x}$.`,
      mistakes: [
        { expr: '1/(2*sqrt(x^2+y^2))', msg: String.raw`Il manque $u' = \frac{\partial (x^2+y^2)}{\partial x} = 2x$ au numérateur : $(\sqrt{u})' = \frac{u'}{2\sqrt u}$.` },
        { expr: '2*x/sqrt(x^2+y^2)', msg: String.raw`Il manque le $2$ du dénominateur : $(\sqrt{u})' = \frac{u'}{2\sqrt{u}}$, et ce $2$ se simplifie avec celui de $2x$.` },
        { expr: '(x+y)/sqrt(x^2+y^2)', msg: String.raw`$y^2$ est une constante quand on dérive par rapport à $x$ : sa dérivée est nulle, il ne doit pas rester de $y$ au numérateur.` }
      ],
      hint: String.raw`$(\sqrt{u})' = \dfrac{u'}{2\sqrt{u}}$ avec $u = x^2 + y^2$, $y$ constant.`,
      explain: String.raw`Avec $u = x^2 + y^2$ et $\frac{\partial u}{\partial x} = 2x$ : $\dfrac{\partial f}{\partial x} = \dfrac{2x}{2\sqrt{x^2+y^2}} = \dfrac{x}{\sqrt{x^2+y^2}}$.` },
    { id: 'm5-x-039', level: 3, check: 'expr', vars: ['x', 'y'],
      topic: 'Dérivées partielles secondes', sec: 'm5-s-partielles',
      prompt: String.raw`Soit $f(x, y) = x^3y^2$. Calcule la dérivée seconde croisée $\dfrac{\partial^2 f}{\partial x\,\partial y}(x, y)$.`,
      answer: '6*x^2*y',
      steps: [
        String.raw`Rappel : $\frac{\partial^2 f}{\partial x\,\partial y}$ s'obtient en dérivant une fois par rapport à $y$, puis le résultat une fois par rapport à $x$ ; d'après le théorème de Schwarz, l'ordre est indifférent pour une fonction polynomiale.`,
        String.raw`Par rapport à $y$ ($x$ constant) : $\dfrac{\partial f}{\partial y} = x^3 \times 2y = 2x^3y$.`,
        String.raw`Puis par rapport à $x$ ($y$ constant) : $\dfrac{\partial}{\partial x}(2x^3y) = 2y \times 3x^2 = 6x^2y$.`,
        String.raw`Vérification dans l'autre ordre : $\frac{\partial f}{\partial x} = 3x^2y^2$, puis $\frac{\partial}{\partial y}(3x^2y^2) = 6x^2y$ ✔ (Schwarz).`
      ],
      rule: String.raw`Schwarz : $\dfrac{\partial^2 f}{\partial x\,\partial y} = \dfrac{\partial^2 f}{\partial y\,\partial x}$ pour $f$ de classe $C^2$`,
      pitfall: String.raw`Dériver deux fois par rapport à la même variable au lieu d'une fois par rapport à chacune.`,
      mistakes: [
        { expr: '6*x*y^2', msg: String.raw`C'est $\frac{\partial^2 f}{\partial x^2}$ : tu as dérivé deux fois par rapport à $x$. Pour la dérivée croisée, il faut une dérivation en $x$ et une en $y$.` },
        { expr: '3*x^2*y^2', msg: String.raw`Ce n'est que $\frac{\partial f}{\partial x}$ (une seule dérivation) : dérive encore par rapport à $y$.` }
      ],
      hint: String.raw`$\dfrac{\partial f}{\partial y} = 2x^3y$, puis dérive par rapport à $x$.`,
      explain: String.raw`$\frac{\partial f}{\partial y} = 2x^3y$, puis $\frac{\partial}{\partial x}(2x^3y) = 6x^2y$ ; l'autre ordre donne le même résultat (Schwarz).` },
    { id: 'm5-x-040', level: 3, check: 'value', vars: [],
      topic: 'Propagation des incertitudes', sec: 'm5-s-partielles',
      prompt: String.raw`On calcule une puissance $P = RI^2$ avec des incertitudes relatives $\dfrac{\Delta R}{R} = 1\,\%$ et $\dfrac{\Delta I}{I} = 2\,\%$. Donne l'incertitude relative $\dfrac{\Delta P}{P}$ (majorant) sous forme décimale, par exemple $0{,}01$ pour $1\,\%$.`,
      answer: '0.05',
      steps: [
        String.raw`Rappel : l'incertitude relative $\frac{\Delta P}{P}$ est l'erreur rapportée à la valeur. Pour un produit de puissances, on utilise la dérivée logarithmique, car $\ln$ transforme produits en sommes et puissances en facteurs : $\ln P = \ln R + 2\ln I$.`,
        String.raw`On différentie : $\dfrac{\mathrm{d}P}{P} = \dfrac{\mathrm{d}R}{R} + 2\,\dfrac{\mathrm{d}I}{I}$.`,
        String.raw`Majorant : dans le pire des cas, les erreurs s'ajoutent en valeur absolue : $\dfrac{\Delta P}{P} = \dfrac{\Delta R}{R} + 2\,\dfrac{\Delta I}{I}$.`,
        String.raw`Application numérique : $\dfrac{\Delta P}{P} = 1\,\% + 2 \times 2\,\% = 5\,\%$, soit $0{,}05$.`
      ],
      rule: String.raw`Pour $P = R^aI^b$ : $\dfrac{\Delta P}{P} = |a|\,\dfrac{\Delta R}{R} + |b|\,\dfrac{\Delta I}{I}$`,
      pitfall: String.raw`Oublier que l'exposant 2 de $I^2$ double l'incertitude relative sur $I$.`,
      mistakes: [
        { expr: '0.03', msg: String.raw`Tu as oublié l'exposant : $I^2$ donne $2\ln I$, donc l'incertitude sur $I$ compte deux fois : $\frac{\Delta P}{P} = \frac{\Delta R}{R} + 2\frac{\Delta I}{I}$.` },
        { expr: '0.0002', msg: String.raw`On <b>additionne</b> les incertitudes relatives (pondérées par les exposants), on ne les multiplie pas.` },
        { expr: '5', msg: String.raw`$5\,\%$ correspond à $0{,}05$ : l'énoncé demande la forme décimale, pas le pourcentage.` }
      ],
      hint: String.raw`Dérivée logarithmique : $\ln P = \ln R + 2\ln I$.`,
      explain: String.raw`Avec $\ln P = \ln R + 2\ln I$, on obtient $\dfrac{\Delta P}{P} = 1\,\% + 2\times 2\,\% = 5\,\% = 0{,}05$.` }
  ]
});
