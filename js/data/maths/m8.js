/* Maths — Chapitre 8 : Équations différentielles linéaires */
APP.registerChapter({
  subject: 'maths',
  id: 'm8', num: 8,
  title: 'Équations différentielles',
  subtitle: 'Premier et second ordre linéaires',

  /* ======================= FICHES DE COURS ======================= */
  sections: [
    {
      id: 'm8-s-vocab',
      title: 'Vocabulaire et principe de résolution',
      html: String.raw`
<p>Une <b>équation différentielle</b> relie une fonction inconnue $y$ (de la variable $x$, ou $t$ en physique) à ses dérivées. Son <b>ordre</b> est celui de la dérivée la plus élevée qui apparaît. <b>Résoudre</b> sur un intervalle $I$, c'est trouver <i>toutes</i> les fonctions dérivables (autant de fois que nécessaire) sur $I$ qui vérifient l'équation en tout point de $I$.</p>
<h4>Équation linéaire</h4>
<p>Une équation différentielle est <b>linéaire</b> d'ordre $n$ si elle s'écrit
$$a_n(x)\,y^{(n)} + \cdots + a_1(x)\,y' + a_0(x)\,y = b(x) :$$
$y$ et ses dérivées apparaissent « au degré 1 », sans produit entre elles ni fonction appliquée à $y$ (pas de $y^2$, $yy'$, $\sin y$, $\sqrt{y'}$…). Les coefficients $a_k(x)$ peuvent dépendre de $x$ ; s'ils sont constants, on parle d'équation <b>à coefficients constants</b>. $b(x)$ est le <b>second membre</b> ; l'équation <b>homogène</b> (ou sans second membre) associée est celle obtenue avec $b = 0$.</p>
<table class="tbl">
<tr><th>Équation</th><th>Nature</th></tr>
<tr><td>$y' + 3y = \mathrm{e}^{x}$</td><td>linéaire, ordre 1, coefficients constants</td></tr>
<tr><td>$xy' - y = x^2$</td><td>linéaire, ordre 1, coefficients variables</td></tr>
<tr><td>$y'' + 4y = 0$</td><td>linéaire, ordre 2, homogène</td></tr>
<tr><td>$y' = y^2$</td><td>non linéaire (terme $y^2$)</td></tr>
<tr><td>$\theta'' + \frac{g}{\ell}\sin\theta = 0$</td><td>non linéaire (pendule) ; linéarisée en $\theta'' + \frac{g}{\ell}\theta = 0$ pour les petits angles</td></tr>
</table>
<h4>Structure des solutions (équations linéaires)</h4>
<ul>
<li><b>Homogène</b> : toute combinaison linéaire de solutions est encore solution. L'ensemble des solutions est un espace vectoriel de dimension 1 à l'ordre 1, de dimension 2 à l'ordre 2 (d'où 1 ou 2 constantes).</li>
<li><b>Théorème de structure</b> : si $y_p$ est <i>une</i> solution particulière de (E), les solutions de (E) sont exactement les $y = y_p + y_h$, où $y_h$ parcourt les solutions de l'équation homogène.</li>
<li><b>Principe de superposition</b> : si $y_1$ est solution avec le second membre $b_1$ et $y_2$ avec $b_2$, alors $\lambda y_1 + \mu y_2$ est solution avec le second membre $\lambda b_1 + \mu b_2$.</li>
</ul>
<div class="flow"><span>1. Résoudre l'équation homogène</span><span>2. Trouver une solution particulière</span><span>3. Additionner</span><span>4. Fixer les constantes avec les conditions initiales</span></div>
<div class="callout tip"><b>Exemple corrigé</b> $y = \mathrm{e}^{2x}$ est-elle solution de $y' - 2y = 0$ ? $y' = 2\mathrm{e}^{2x}$ donc $y' - 2y = 0$ : oui. Et $y_p = x - 1$ est solution de $y' + y = x$ car $1 + (x - 1) = x$. Les solutions de $y' + y = x$ sont donc $y = x - 1 + C\mathrm{e}^{-x}$.</div>
<div class="callout warn"><b>Pièges</b> Les constantes se déterminent <b>en dernier</b>, sur la solution complète $y_p + y_h$, jamais sur $y_h$ seule. Le théorème de structure ne s'applique qu'aux équations <b>linéaires</b>. Une solution particulière n'est pas unique : deux solutions particulières diffèrent d'une solution homogène.</div>
<div class="callout key"><b>À retenir</b> Solution générale = solution particulière + solution générale de l'homogène. Ordre 1 : une constante ; ordre 2 : deux constantes.</div>`
    },
    {
      id: 'm8-s-edl1-homogene',
      title: 'Premier ordre : équation homogène',
      html: String.raw`
<h3>Coefficient constant</h3>
<p>Pour $a \in \mathbb{R}$ :
$$y' + ay = 0 \iff y(x) = C\,\mathrm{e}^{-ax}, \quad C \in \mathbb{R}.$$
Écrit autrement : $y' = ky \iff y = C\,\mathrm{e}^{kx}$. La constante vaut $C = y(0)$.</p>
<h3>Coefficient variable</h3>
<p><b>Théorème.</b> Soit $a$ continue sur un intervalle $I$ et $A$ <b>une primitive</b> de $a$ sur $I$. Les solutions sur $I$ de
$$y' + a(x)\,y = 0 \quad \text{sont les fonctions} \quad y(x) = C\,\mathrm{e}^{-A(x)}, \quad C \in \mathbb{R}.$$
<i>Preuve :</i> $\left(y\,\mathrm{e}^{A}\right)' = (y' + ay)\,\mathrm{e}^{A} = 0$, donc $y\,\mathrm{e}^{A}$ est constante sur l'intervalle $I$.</p>
<ul>
<li>Une solution est soit identiquement nulle, soit <b>jamais nulle</b> (et de signe constant).</li>
<li><b>Normalisation</b> : pour $\alpha(x)y' + \beta(x)y = 0$, on divise par $\alpha(x)$ sur un intervalle où $\alpha$ ne s'annule pas, pour se ramener à $y' + a(x)y = 0$ avec $a = \frac{\beta}{\alpha}$.</li>
</ul>
<div class="callout tip"><b>Exemples corrigés</b> $2y' + y = 0 \iff y' + \frac{1}{2}y = 0 \iff y = C\mathrm{e}^{-x/2}$.
$y' + 2xy = 0$ : $a(x) = 2x$, $A(x) = x^2$, donc $y = C\mathrm{e}^{-x^2}$.
$xy' + y = 0$ sur $]0, +\infty[$ : $y' + \frac{1}{x}y = 0$, $A(x) = \ln x$, donc $y = C\mathrm{e}^{-\ln x} = \frac{C}{x}$.</div>
<div class="callout warn"><b>Pièges</b> Signe : $y' + ay = 0$ donne $\mathrm{e}^{-ax}$, mais $y' = ay$ donne $\mathrm{e}^{ax}$. On met dans l'exponentielle une <b>primitive</b> de $a$ (pour $y' + 2xy = 0$ : $\mathrm{e}^{-x^2}$, pas $\mathrm{e}^{-2x}$). Penser à <b>normaliser</b> (coefficient 1 devant $y'$) : $2y' + y = 0$ donne $\mathrm{e}^{-x/2}$, pas $\mathrm{e}^{-x}$ ni $\mathrm{e}^{-2x}$.</div>
<div class="callout key"><b>À retenir</b> $y' + a(x)y = 0 \iff y = C\mathrm{e}^{-A(x)}$ avec $A' = a$ ; à coefficient constant, $y = C\mathrm{e}^{-ax}$.</div>`
    },
    {
      id: 'm8-s-edl1-complete',
      title: 'Premier ordre : variation de la constante, problème de Cauchy',
      html: String.raw`
<p>On étudie $(E) : y' + a(x)\,y = b(x)$ avec $a$ et $b$ continues sur $I$. D'après le théorème de structure, il suffit de trouver <b>une</b> solution particulière $y_p$ : $y = y_p + C\mathrm{e}^{-A(x)}$.</p>
<h4>Méthode de la variation de la constante (toujours applicable)</h4>
<p>On cherche $y_p$ sous la forme $y(x) = C(x)\,\mathrm{e}^{-A(x)}$, où $C$ est maintenant une <i>fonction</i>. En reportant dans (E), les termes en $C(x)$ se simplifient (c'est la vérification que l'on ne s'est pas trompé) et il reste
$$C'(x)\,\mathrm{e}^{-A(x)} = b(x) \iff C'(x) = b(x)\,\mathrm{e}^{A(x)}.$$
Il suffit alors de primitiver.</p>
<div class="callout tip"><b>Exemple corrigé 1</b> $y' - y = x\,\mathrm{e}^{x}$. Homogène : $y = C\mathrm{e}^{x}$. On pose $y = C(x)\mathrm{e}^{x}$ : $y' - y = C'(x)\mathrm{e}^{x} = x\mathrm{e}^{x}$, donc $C'(x) = x$ et $C(x) = \frac{x^2}{2} + K$. Solutions : $y = \left(\frac{x^2}{2} + K\right)\mathrm{e}^{x}$.</div>
<div class="callout tip"><b>Exemple corrigé 2</b> $xy' - y = x^2$ sur $]0, +\infty[$. On normalise : $y' - \frac{1}{x}y = x$. $A(x) = -\ln x$, donc $y_h = C\mathrm{e}^{\ln x} = Cx$. On pose $y = C(x)\,x$ : $C'(x)\,x = x$, donc $C(x) = x + K$ et $y = x^2 + Kx$.</div>
<h4>Problème de Cauchy</h4>
<p><b>Théorème (Cauchy–Lipschitz linéaire).</b> Si $a$ et $b$ sont continues sur $I$, pour tout $x_0 \in I$ et tout $y_0 \in \mathbb{R}$, il existe une <b>unique</b> solution de (E) sur $I$ telle que $y(x_0) = y_0$.</p>
<p><b>Méthode :</b> écrire la solution générale (avec sa constante $C$), puis imposer $y(x_0) = y_0$ pour trouver $C$. Pour $a$ et $b$ constants ($a \neq 0$), on obtient directement
$$y(x) = \frac{b}{a} + \left(y_0 - \frac{b}{a}\right)\mathrm{e}^{-a(x - x_0)}.$$</p>
<div class="callout tip"><b>Exemple corrigé 3</b> $y' + 2y = 6$, $y(0) = 0$. $y_h = C\mathrm{e}^{-2x}$, $y_p = 3$ (constante : $0 + 2 \times 3 = 6$). Donc $y = 3 + C\mathrm{e}^{-2x}$, et $y(0) = 3 + C = 0$ donne $C = -3$ : $y = 3\left(1 - \mathrm{e}^{-2x}\right)$.</div>
<div class="callout warn"><b>Pièges</b> Appliquer la condition initiale sur la solution <b>complète</b>, pas sur $y_h$ seule (sinon on trouve $C = 0$ et on oublie $y_p$). Dans la variation de la constante, si les termes en $C(x)$ ne disparaissent pas, il y a une erreur de calcul. Ne pas oublier de normaliser <b>le second membre</b> aussi : $xy' - y = x^2$ devient $y' - \frac{y}{x} = x$.</div>
<div class="callout key"><b>À retenir</b> $y = C(x)\mathrm{e}^{-A(x)}$ avec $C' = b\,\mathrm{e}^{A}$ ; une condition initiale fixe l'unique constante.</div>`
    },
    {
      id: 'm8-s-edl1-particuliere',
      title: 'Premier ordre : solutions particulières usuelles',
      html: String.raw`
<p>Pour $y' + ay = b(x)$ <b>à coefficient constant</b> $a$, on peut souvent deviner la forme de $y_p$ (plus rapide que la variation de la constante) :</p>
<table class="tbl">
<tr><th>Second membre $b(x)$</th><th>Forme cherchée pour $y_p$</th></tr>
<tr><td>constante $b$ ($a \neq 0$)</td><td>constante : $y_p = \frac{b}{a}$</td></tr>
<tr><td>polynôme de degré $n$ ($a \neq 0$)</td><td>polynôme de degré $n$ (coefficients à identifier)</td></tr>
<tr><td>$k\,\mathrm{e}^{mx}$ avec $m \neq -a$</td><td>$\lambda\,\mathrm{e}^{mx}$, et on trouve $\lambda = \frac{k}{m + a}$</td></tr>
<tr><td>$k\,\mathrm{e}^{mx}$ avec $m = -a$</td><td>$\lambda x\,\mathrm{e}^{mx}$ (« résonance »), et $\lambda = k$</td></tr>
<tr><td>$B\cos(\omega x)$ ou $B\sin(\omega x)$</td><td>$\lambda\cos(\omega x) + \mu\sin(\omega x)$ (<b>les deux</b> termes)</td></tr>
<tr><td>somme $b_1 + b_2$</td><td>$y_{p,1} + y_{p,2}$ (superposition)</td></tr>
</table>
<h4>Méthode complexe pour un second membre sinusoïdal</h4>
<p>$B\cos(\omega x) = \operatorname{Re}\left(B\mathrm{e}^{\mathrm{i}\omega x}\right)$. On résout $z' + az = B\mathrm{e}^{\mathrm{i}\omega x}$ avec $z_p = \lambda\mathrm{e}^{\mathrm{i}\omega x}$, d'où $\lambda = \frac{B}{a + \mathrm{i}\omega}$, puis $y_p = \operatorname{Re}(z_p)$ (ou $\operatorname{Im}$ pour un sinus). C'est exactement le calcul d'impédances en électronique.</p>
<div class="callout tip"><b>Exemples corrigés</b>
(1) $y' + y = x$ : $y_p = \alpha x + \beta$ donne $\alpha + \alpha x + \beta = x$, d'où $\alpha = 1$, $\beta = -1$ : $y_p = x - 1$.
(2) $y' - 2y = \mathrm{e}^{x}$ : $y_p = \lambda\mathrm{e}^{x}$ donne $\lambda - 2\lambda = 1$, d'où $\lambda = -1$ : $y_p = -\mathrm{e}^{x}$.
(3) $y' + y = \mathrm{e}^{-x}$ : $\lambda\mathrm{e}^{-x}$ est solution de l'homogène (on obtiendrait $0 = \mathrm{e}^{-x}$). On essaie $\lambda x\mathrm{e}^{-x}$ : $\lambda\mathrm{e}^{-x} - \lambda x\mathrm{e}^{-x} + \lambda x\mathrm{e}^{-x} = \lambda\mathrm{e}^{-x}$, donc $\lambda = 1$ : $y_p = x\mathrm{e}^{-x}$.
(4) $y' + y = \cos x$ : $z_p = \frac{\mathrm{e}^{\mathrm{i}x}}{1 + \mathrm{i}} = \frac{1 - \mathrm{i}}{2}(\cos x + \mathrm{i}\sin x)$, donc $y_p = \operatorname{Re}(z_p) = \frac{\cos x + \sin x}{2}$.</div>
<div class="callout warn"><b>Pièges</b> Pour $B\cos(\omega x)$, chercher $\lambda\cos(\omega x)$ seul ne marche pas : la dérivée fait apparaître un sinus. Si l'exponentielle du second membre est solution de l'homogène ($m = -a$), multiplier par $x$. Toujours <b>vérifier</b> $y_p$ en le réinjectant.</div>
<div class="callout key"><b>À retenir</b> Constante → constante ; polynôme → polynôme de même degré ; $\mathrm{e}^{mx}$ → $\lambda\mathrm{e}^{mx}$ (ou $\lambda x\mathrm{e}^{mx}$ si $m = -a$) ; sinusoïde → $\lambda\cos + \mu\sin$ ou méthode complexe.</div>`
    },
    {
      id: 'm8-s-edl2-homogene',
      title: 'Second ordre à coefficients constants : équation homogène',
      html: String.raw`
<p>On étudie $(H) : ay'' + by' + cy = 0$ avec $a, b, c$ réels, $a \neq 0$. En cherchant des solutions de la forme $y = \mathrm{e}^{rx}$, on trouve $(ar^2 + br + c)\,\mathrm{e}^{rx} = 0$, d'où l'<b>équation caractéristique</b>
$$ar^2 + br + c = 0, \qquad \Delta = b^2 - 4ac.$$</p>
<table class="tbl">
<tr><th>Cas</th><th>Racines</th><th>Solutions réelles de (H) ($C_1, C_2 \in \mathbb{R}$)</th></tr>
<tr><td>$\Delta \gt 0$</td><td>deux racines réelles $r_1 \neq r_2$</td><td>$y = C_1\mathrm{e}^{r_1 x} + C_2\mathrm{e}^{r_2 x}$</td></tr>
<tr><td>$\Delta = 0$</td><td>racine double $r_0 = -\frac{b}{2a}$</td><td>$y = (C_1 x + C_2)\,\mathrm{e}^{r_0 x}$</td></tr>
<tr><td>$\Delta \lt 0$</td><td>$r = \alpha \pm \mathrm{i}\beta$, $\alpha = -\frac{b}{2a}$, $\beta = \frac{\sqrt{-\Delta}}{2a}$</td><td>$y = \mathrm{e}^{\alpha x}\left(C_1\cos\beta x + C_2\sin\beta x\right)$</td></tr>
</table>
<p>Dans le cas $\Delta \lt 0$, on peut aussi écrire $y = A\,\mathrm{e}^{\alpha x}\cos(\beta x - \varphi)$ avec $A = \sqrt{C_1^2 + C_2^2}$ : <b>la partie réelle $\alpha$ règle l'amortissement, la partie imaginaire $\beta$ la pulsation</b>.</p>
<p>Cas classiques ($\omega \gt 0$) : $y'' + \omega^2 y = 0 \iff y = C_1\cos\omega x + C_2\sin\omega x$ (oscillateur harmonique) ; $y'' - \omega^2 y = 0 \iff y = C_1\mathrm{e}^{\omega x} + C_2\mathrm{e}^{-\omega x}$ (ou $A\operatorname{ch}\omega x + B\operatorname{sh}\omega x$).</p>
<div class="widget" data-w="plot" data-f="exp(-0.3*x)*cos(2*x);exp(-0.3*x);-exp(-0.3*x)" data-x="0;12" data-y="-1.1;1.1"></div>
<p>Ci-dessus : $\mathrm{e}^{-0{,}3x}\cos 2x$ (cas $\Delta \lt 0$, $\alpha = -0{,}3$, $\beta = 2$) oscille entre les enveloppes $\pm\mathrm{e}^{-0{,}3x}$.</p>
<div class="callout tip"><b>Exemples corrigés</b>
$y'' - 3y' + 2y = 0$ : $r^2 - 3r + 2 = (r - 1)(r - 2)$, donc $y = C_1\mathrm{e}^{x} + C_2\mathrm{e}^{2x}$.
$y'' + 2y' + y = 0$ : $(r + 1)^2 = 0$, donc $y = (C_1 x + C_2)\mathrm{e}^{-x}$.
$y'' + 2y' + 5y = 0$ : $\Delta = 4 - 20 = -16$, $r = \frac{-2 \pm 4\mathrm{i}}{2} = -1 \pm 2\mathrm{i}$, donc $y = \mathrm{e}^{-x}(C_1\cos 2x + C_2\sin 2x)$.</div>
<div class="callout warn"><b>Pièges</b> $\beta = \frac{\sqrt{-\Delta}}{2a}$ et non $\sqrt{-\Delta}$. Cas $\Delta = 0$ : ne pas oublier le facteur $x$ (sinon une seule constante « utile »). Cas $\Delta \lt 0$ : c'est $\mathrm{e}^{\alpha x}\cos\beta x$, pas $\mathrm{e}^{\beta x}\cos\alpha x$. Pour $y'' + 9y = 0$, la pulsation est $3 = \sqrt{9}$, pas $9$.</div>
<div class="callout key"><b>À retenir</b> Équation caractéristique $ar^2 + br + c = 0$ ; trois cas selon le signe de $\Delta$ ; deux constantes réelles.</div>`
    },
    {
      id: 'm8-s-edl2-complete',
      title: 'Second ordre : second membre, résonance, problème de Cauchy',
      html: String.raw`
<p>On étudie $(E) : ay'' + by' + cy = f(x)$. Solution générale : $y = y_p + y_h$. On note $P(r) = ar^2 + br + c$ le polynôme caractéristique.</p>
<table class="tbl">
<tr><th>Second membre $f(x)$</th><th>Forme cherchée pour $y_p$</th></tr>
<tr><td>constante $d$ ($c \neq 0$)</td><td>$y_p = \frac{d}{c}$</td></tr>
<tr><td>polynôme de degré $n$</td><td>polynôme de degré $n$ si $c \neq 0$ ; de degré $n + 1$ si $c = 0$, $b \neq 0$</td></tr>
<tr><td>$k\,\mathrm{e}^{mx}$, $m$ non racine de $P$</td><td>$\lambda\mathrm{e}^{mx}$ avec $\lambda = \frac{k}{P(m)}$</td></tr>
<tr><td>$k\,\mathrm{e}^{mx}$, $m$ racine simple</td><td>$\lambda x\,\mathrm{e}^{mx}$ (et $\lambda = \frac{k}{P'(m)}$)</td></tr>
<tr><td>$k\,\mathrm{e}^{mx}$, $m$ racine double</td><td>$\lambda x^2\,\mathrm{e}^{mx}$ (et $\lambda = \frac{k}{2a}$)</td></tr>
<tr><td>$B\cos\omega x$ ou $B\sin\omega x$, $\mathrm{i}\omega$ non racine</td><td>$\lambda\cos\omega x + \mu\sin\omega x$, ou $\operatorname{Re}\left(\frac{B\mathrm{e}^{\mathrm{i}\omega x}}{P(\mathrm{i}\omega)}\right)$</td></tr>
<tr><td>$B\cos\omega x$, $\mathrm{i}\omega$ racine ($b = 0$, $\omega^2 = \frac{c}{a}$)</td><td>$x(\lambda\cos\omega x + \mu\sin\omega x)$ : <b>résonance</b></td></tr>
</table>
<p><b>Résonance</b> : quand l'excitation a exactement la pulsation propre d'un système non amorti, l'amplitude de $y_p$ croît <b>linéairement</b> avec $x$ : pour $y'' + \omega^2 y = B\cos\omega x$, $y_p = \frac{B}{2\omega}\,x\sin\omega x$.</p>
<h4>Problème de Cauchy</h4>
<p>Pour tout $x_0$ et tous réels $y_0, y_1$, il existe une <b>unique</b> solution vérifiant $y(x_0) = y_0$ <b>et</b> $y'(x_0) = y_1$. Deux conditions pour deux constantes : on résout un système $2 \times 2$ en $C_1, C_2$.</p>
<div class="callout tip"><b>Exemple corrigé 1</b> $y'' - 3y' + 2y = 4$, $y(0) = 0$, $y'(0) = 0$. $y_p = \frac{4}{2} = 2$, donc $y = 2 + C_1\mathrm{e}^{x} + C_2\mathrm{e}^{2x}$. Conditions : $2 + C_1 + C_2 = 0$ et $C_1 + 2C_2 = 0$, d'où $C_2 = 2$, $C_1 = -4$ : $y = 2 - 4\mathrm{e}^{x} + 2\mathrm{e}^{2x}$.</div>
<div class="callout tip"><b>Exemple corrigé 2</b> $y'' - 3y' + 2y = \mathrm{e}^{x}$ : $m = 1$ est racine simple de $r^2 - 3r + 2$. On pose $y_p = \lambda x\mathrm{e}^{x}$ : $y_p' = \lambda(1 + x)\mathrm{e}^{x}$, $y_p'' = \lambda(2 + x)\mathrm{e}^{x}$, et $y_p'' - 3y_p' + 2y_p = \lambda(2 + x - 3 - 3x + 2x)\mathrm{e}^{x} = -\lambda\mathrm{e}^{x}$, donc $\lambda = -1$ (on retrouve $\frac{1}{P'(1)} = \frac{1}{-1}$).</div>
<div class="callout tip"><b>Exemple corrigé 3</b> $y'' + y = \cos x$ : $\mathrm{i}$ est racine de $r^2 + 1$, résonance. $y_p = \frac{x\sin x}{2}$ : en effet $y_p'' = \cos x - \frac{x\sin x}{2}$, donc $y_p'' + y_p = \cos x$.</div>
<div class="callout warn"><b>Pièges</b> Trouver $y_p$ <b>avant</b> d'appliquer les conditions initiales. $y'(0)$ se calcule en dérivant la solution <b>complète</b> (y compris $y_p$). Si $m$ est racine, $\lambda\mathrm{e}^{mx}$ ne peut pas marcher : multiplier par $x$ (ou $x^2$).</div>
<div class="callout key"><b>À retenir</b> Forme de $y_p$ calquée sur le second membre, multipliée par $x$ (ou $x^2$) en cas de résonance ; deux conditions initiales $y(x_0)$, $y'(x_0)$.</div>`
    },
    {
      id: 'm8-s-rc-rl',
      title: 'Application : circuits RC et RL (premier ordre)',
      html: String.raw`
<h3>Circuit RC série soumis à un échelon de tension $E$</h3>
<p>Loi des mailles : $E = Ri + u_C$ avec $i = C\dfrac{\mathrm{d}u_C}{\mathrm{d}t}$, d'où
$$RC\,\frac{\mathrm{d}u_C}{\mathrm{d}t} + u_C = E, \qquad \tau = RC.$$
C'est une EDL1 à coefficients constants : $u_C(t) = E + K\mathrm{e}^{-t/\tau}$. La tension aux bornes d'un condensateur est <b>continue</b> (énergie $\frac{1}{2}Cu_C^2$), ce qui fixe $K$.</p>
<ul>
<li><b>Charge</b> ($u_C(0) = 0$) : $u_C(t) = E\left(1 - \mathrm{e}^{-t/\tau}\right)$ et $i(t) = \frac{E}{R}\mathrm{e}^{-t/\tau}$.</li>
<li><b>Décharge</b> ($E = 0$, $u_C(0) = U_0$) : $u_C(t) = U_0\,\mathrm{e}^{-t/\tau}$.</li>
<li>Forme universelle d'un premier ordre : $y(t) = y_\infty + \left(y(0) - y_\infty\right)\mathrm{e}^{-t/\tau}$.</li>
</ul>
<div class="widget" data-w="plot" data-f="1-exp(-x);exp(-x)" data-x="0;5" data-y="0;1.1"></div>
<p>Charge et décharge normalisées ($E = 1$, $\tau = 1$) : à $t = \tau$, la charge atteint $1 - \mathrm{e}^{-1} \approx 63\ \%$ de la valeur finale ; la décharge en est à $\mathrm{e}^{-1} \approx 37\ \%$.</p>
<h4>La constante de temps $\tau$</h4>
<ul>
<li>Unité : $[RC] = \Omega \cdot \mathrm{F} = \mathrm{s}$.</li>
<li>$t = \tau$ : 63 % du chemin parcouru ; $t = 3\tau$ : 95 % ; $t = 5\tau$ : plus de 99 % — on considère le régime permanent atteint.</li>
<li>La tangente à l'origine coupe l'asymptote $y = y_\infty$ à l'instant $t = \tau$ (lecture graphique).</li>
<li>Temps de demi-charge : $E(1 - \mathrm{e}^{-t/\tau}) = \frac{E}{2} \iff t_{1/2} = \tau\ln 2$.</li>
</ul>
<h3>Circuit RL série</h3>
<p>$E = Ri + L\dfrac{\mathrm{d}i}{\mathrm{d}t}$, soit $\frac{L}{R}\,i' + i = \frac{E}{R}$, avec $\tau = \frac{L}{R}$. L'intensité dans une bobine est <b>continue</b> ; avec $i(0) = 0$ : $i(t) = \frac{E}{R}\left(1 - \mathrm{e}^{-t/\tau}\right)$.</p>
<div class="callout tip"><b>Exemple corrigé</b> $R = 10\ \mathrm{k}\Omega$, $C = 100\ \mu\mathrm{F}$, $E = 5\ \mathrm{V}$ : $\tau = 10^4 \times 10^{-4} = 1\ \mathrm{s}$ et $u_C(t) = 5(1 - \mathrm{e}^{-t})$. À $t = 1\ \mathrm{s}$ : $u_C \approx 3{,}16\ \mathrm{V}$ ; au bout de $5\ \mathrm{s}$, le condensateur est chargé à plus de 99 %. Pour une bobine $L = 0{,}1\ \mathrm{H}$ et $R = 50\ \Omega$ : $\tau = \frac{0{,}1}{50} = 2\ \mathrm{ms}$.</div>
<div class="callout warn"><b>Pièges</b> $\tau = RC$ mais $\tau = \frac{L}{R}$ (pas $LR$ ni $\frac{R}{L}$). L'exponentielle est $\mathrm{e}^{-t/\tau}$, pas $\mathrm{e}^{-\tau t}$. Convertir les unités ($\mathrm{k}\Omega$, $\mu\mathrm{F}$, $\mathrm{mH}$) avant de calculer. La condition initiale vient de la <b>continuité</b> de $u_C$ (ou de $i_L$), pas de la valeur de la source.</div>
<div class="callout key"><b>À retenir</b> $\tau\,y' + y = y_\infty$ ; $y(t) = y_\infty + (y(0) - y_\infty)\mathrm{e}^{-t/\tau}$ ; $\tau_{RC} = RC$, $\tau_{RL} = \frac{L}{R}$ ; 63 % à $\tau$, régime permanent à $5\tau$.</div>`
    },
    {
      id: 'm8-s-rlc',
      title: 'Application : circuit RLC et oscillateur masse-ressort',
      html: String.raw`
<h3>Circuit RLC série</h3>
<p>Loi des mailles avec $i = C\dfrac{\mathrm{d}u_C}{\mathrm{d}t}$ : $E = L\dfrac{\mathrm{d}i}{\mathrm{d}t} + Ri + u_C$, soit
$$LC\,u_C'' + RC\,u_C' + u_C = E.$$
On la met sous <b>forme canonique</b> :
$$u_C'' + 2\xi\omega_0\,u_C' + \omega_0^2\,u_C = \omega_0^2 E, \qquad \omega_0 = \frac{1}{\sqrt{LC}}, \qquad \xi = \frac{R}{2}\sqrt{\frac{C}{L}}.$$
$\omega_0$ est la <b>pulsation propre</b>, $\xi$ le <b>facteur d'amortissement</b> (souvent noté $m$ en électronique) ; le facteur de qualité est $Q = \frac{1}{2\xi} = \frac{1}{R}\sqrt{\frac{L}{C}}$.</p>
<h4>Les trois régimes (selon le signe de $\Delta$)</h4>
<p>Équation caractéristique $r^2 + 2\xi\omega_0 r + \omega_0^2 = 0$, de discriminant réduit $\Delta' = \omega_0^2(\xi^2 - 1)$.</p>
<table class="tbl">
<tr><th>Régime</th><th>Condition</th><th>Solution homogène</th></tr>
<tr><td>Apériodique</td><td>$\xi \gt 1$ ($R \gt R_c$)</td><td>$C_1\mathrm{e}^{r_1 t} + C_2\mathrm{e}^{r_2 t}$, $r_{1,2} = -\omega_0\left(\xi \pm \sqrt{\xi^2 - 1}\right) \lt 0$</td></tr>
<tr><td>Critique</td><td>$\xi = 1$ ($R = R_c = 2\sqrt{L/C}$)</td><td>$(C_1 + C_2 t)\,\mathrm{e}^{-\omega_0 t}$ : retour le plus rapide sans oscillation</td></tr>
<tr><td>Pseudo-périodique</td><td>$0 \lt \xi \lt 1$</td><td>$\mathrm{e}^{-\xi\omega_0 t}(C_1\cos\omega t + C_2\sin\omega t)$, $\omega = \omega_0\sqrt{1 - \xi^2}$</td></tr>
<tr><td>Harmonique</td><td>$\xi = 0$ ($R = 0$, circuit LC)</td><td>$C_1\cos\omega_0 t + C_2\sin\omega_0 t$</td></tr>
</table>
<p>La pseudo-période vaut $T = \frac{2\pi}{\omega}$, légèrement supérieure à $T_0 = \frac{2\pi}{\omega_0}$. Dans tous les cas amortis, $u_C(t) \to E$.</p>
<div class="widget" data-w="plot" data-f="1.0774*exp(-0.2679*x)-0.0774*exp(-3.732*x);(1+x)*exp(-x);exp(-0.2*x)*(cos(0.9798*x)+0.2041*sin(0.9798*x))" data-x="0;15" data-y="-0.8;1.1"></div>
<p>Retour à l'équilibre depuis $y(0) = 1$, $y'(0) = 0$ avec $\omega_0 = 1$ : apériodique ($\xi = 2$), critique ($\xi = 1$), pseudo-périodique ($\xi = 0{,}2$).</p>
<h3>Oscillateur mécanique masse-ressort</h3>
<p>Une masse $m$ accrochée à un ressort de raideur $k$, avec un frottement fluide $-h\,x'$ : $mx'' = -kx - hx'$, soit
$$mx'' + hx' + kx = 0, \qquad \omega_0 = \sqrt{\frac{k}{m}}, \qquad \xi = \frac{h}{2\sqrt{km}}.$$
Sans frottement : $x(t) = X_0\cos\omega_0 t + \frac{V_0}{\omega_0}\sin\omega_0 t$ (avec $x(0) = X_0$, $x'(0) = V_0$), de période $T_0 = 2\pi\sqrt{\frac{m}{k}}$.</p>
<p><b>Analogie électromécanique</b> : $L \leftrightarrow m$ (inertie), $R \leftrightarrow h$ (dissipation), $\frac{1}{C} \leftrightarrow k$ (rappel), charge $q \leftrightarrow x$, intensité $i \leftrightarrow$ vitesse $v$.</p>
<div class="callout tip"><b>Exemple corrigé</b> $L = 10\ \mathrm{mH}$, $C = 1\ \mu\mathrm{F}$, $R = 100\ \Omega$ : $\omega_0 = \frac{1}{\sqrt{10^{-2} \times 10^{-6}}} = 10^4\ \mathrm{rad/s}$ ; $\xi = 50\sqrt{\frac{10^{-6}}{10^{-2}}} = 50 \times 10^{-2} = 0{,}5$ : régime pseudo-périodique, $\omega = 10^4\sqrt{0{,}75} \approx 8\,660\ \mathrm{rad/s}$. Résistance critique : $R_c = 2\sqrt{\frac{10^{-2}}{10^{-6}}} = 200\ \Omega$.</div>
<div class="callout warn"><b>Pièges</b> $\omega_0 = \frac{1}{\sqrt{LC}}$, pas $\frac{1}{LC}$. La pseudo-pulsation $\omega = \omega_0\sqrt{1 - \xi^2}$ est <b>inférieure</b> à $\omega_0$. Le régime dépend de $\xi$ (donc de $R$, $L$ et $C$ ensemble), pas de $R$ seul. Ne pas confondre $m$ (masse) et $m$ (amortissement) : ici on note $\xi$ l'amortissement.</div>
<div class="callout key"><b>À retenir</b> Forme canonique $y'' + 2\xi\omega_0 y' + \omega_0^2 y = \omega_0^2 y_\infty$ ; $\xi \gt 1$ apériodique, $\xi = 1$ critique, $\xi \lt 1$ pseudo-périodique ; $\omega_0 = \frac{1}{\sqrt{LC}} = \sqrt{\frac{k}{m}}$.</div>`
    },
    {
      id: 'm8-s-memo',
      title: 'Mémo : équations différentielles',
      html: String.raw`
<table class="tbl">
<tr><th>Équation</th><th>Solutions</th></tr>
<tr><td>$y' + ay = 0$</td><td>$C\mathrm{e}^{-ax}$</td></tr>
<tr><td>$y' + a(x)y = 0$</td><td>$C\mathrm{e}^{-A(x)}$, $A' = a$</td></tr>
<tr><td>$y' + a(x)y = b(x)$</td><td>$y_p + C\mathrm{e}^{-A(x)}$ ; variation : $C'(x) = b(x)\mathrm{e}^{A(x)}$</td></tr>
<tr><td>$y' + ay = b$ (constantes)</td><td>$\frac{b}{a} + C\mathrm{e}^{-ax}$</td></tr>
<tr><td>$ay'' + by' + cy = 0$, $\Delta \gt 0$</td><td>$C_1\mathrm{e}^{r_1x} + C_2\mathrm{e}^{r_2x}$</td></tr>
<tr><td>$\Delta = 0$</td><td>$(C_1x + C_2)\mathrm{e}^{r_0x}$</td></tr>
<tr><td>$\Delta \lt 0$, $r = \alpha \pm \mathrm{i}\beta$</td><td>$\mathrm{e}^{\alpha x}(C_1\cos\beta x + C_2\sin\beta x)$</td></tr>
<tr><td>$y'' + \omega^2 y = 0$</td><td>$C_1\cos\omega x + C_2\sin\omega x$</td></tr>
</table>
<div class="grid2">
<div class="mini"><h4>Solutions particulières</h4><p>Constante → constante ; polynôme → polynôme ; $k\mathrm{e}^{mx}$ → $\lambda\mathrm{e}^{mx}$, $\lambda x\mathrm{e}^{mx}$ ou $\lambda x^2\mathrm{e}^{mx}$ selon que $m$ est racine 0, 1 ou 2 fois ; $\cos\omega x$ → $\lambda\cos\omega x + \mu\sin\omega x$ (méthode complexe).</p></div>
<div class="mini"><h4>Électricité</h4><p>RC : $\tau = RC$ ; RL : $\tau = \frac{L}{R}$ ; $y = y_\infty + (y_0 - y_\infty)\mathrm{e}^{-t/\tau}$. RLC : $\omega_0 = \frac{1}{\sqrt{LC}}$, $\xi = \frac{R}{2}\sqrt{\frac{C}{L}}$, $R_c = 2\sqrt{\frac{L}{C}}$.</p></div>
</div>
<div class="flow"><span>Homogène</span><span>Particulière</span><span>Somme</span><span>Conditions initiales</span><span>Vérification</span></div>
<div class="callout key"><b>Réflexes</b> Normaliser (coefficient 1 devant $y'$) ; constantes fixées en dernier sur la solution complète ; vérifier en réinjectant et en testant $y(0)$ ; en cas de résonance, multiplier par $x$.</div>`
    }
  ],

  /* ======================= FORMULAIRE ======================= */
  formulas: [
    { id: 'm8-fo-edl1-forme', name: 'EDL du premier ordre (forme normalisée)', tex: String.raw`y' + a(x)\,y = b(x)`, note: String.raw`Homogène associée : $y' + a(x)y = 0$.` },
    { id: 'm8-fo-edl1-cst', name: 'EDL1 homogène à coefficient constant', tex: String.raw`y' + ay = 0 \iff y = C\,\mathrm{e}^{-ax}`, note: String.raw`Avec $C = y(0)$.` },
    { id: 'm8-fo-edl1-ky', name: 'Croissance / décroissance exponentielle', tex: String.raw`y' = ky \iff y = C\,\mathrm{e}^{kx}` },
    { id: 'm8-fo-edl1-ax', name: 'EDL1 homogène à coefficient variable', tex: String.raw`y' + a(x)\,y = 0 \iff y = C\,\mathrm{e}^{-A(x)},\quad A' = a` },
    { id: 'm8-fo-structure', name: 'Théorème de structure', tex: String.raw`y = y_p + y_h`, note: String.raw`Solution particulière + solution générale de l'équation homogène.` },
    { id: 'm8-fo-superposition', name: 'Principe de superposition', tex: String.raw`L(y_1) = b_1,\ L(y_2) = b_2 \Rightarrow L(\lambda y_1 + \mu y_2) = \lambda b_1 + \mu b_2`, note: String.raw`$L(y)$ désigne le membre de gauche, linéaire en $y$.` },
    { id: 'm8-fo-varconst', name: 'Variation de la constante (ordre 1)', tex: String.raw`y = C(x)\,\mathrm{e}^{-A(x)} \Rightarrow C'(x) = b(x)\,\mathrm{e}^{A(x)}` },
    { id: 'm8-fo-sp1-const', name: 'Solution particulière : second membre constant', tex: String.raw`y' + ay = b \ (a \neq 0) : \quad y_p = \frac{b}{a}` },
    { id: 'm8-fo-sp1-exp', name: 'Ordre 1 : second membre exponentiel', tex: String.raw`y' + ay = k\,\mathrm{e}^{mx},\ m \neq -a : \quad y_p = \frac{k}{m + a}\,\mathrm{e}^{mx}`, note: String.raw`Si $m = -a$ : $y_p = kx\,\mathrm{e}^{-ax}$.` },
    { id: 'm8-fo-sp1-sin', name: 'Ordre 1 : second membre sinusoïdal (méthode complexe)', tex: String.raw`y' + ay = B\cos\omega x : \quad y_p = \operatorname{Re}\left(\frac{B\,\mathrm{e}^{\mathrm{i}\omega x}}{a + \mathrm{i}\omega}\right)`, note: String.raw`Ou chercher $y_p = \lambda\cos\omega x + \mu\sin\omega x$.` },
    { id: 'm8-fo-cauchy1', name: 'Problème de Cauchy, ordre 1 à coefficients constants', tex: String.raw`y(x) = \frac{b}{a} + \left(y_0 - \frac{b}{a}\right)\mathrm{e}^{-a(x - x_0)}`, note: String.raw`Solution de $y' + ay = b$, $y(x_0) = y_0$.` },
    { id: 'm8-fo-tau', name: 'Premier ordre en physique (forme en τ)', tex: String.raw`\tau\,y' + y = y_\infty \Rightarrow y(t) = y_\infty + \left(y(0) - y_\infty\right)\mathrm{e}^{-t/\tau}` },
    { id: 'm8-fo-carac', name: 'Équation caractéristique', tex: String.raw`ay'' + by' + cy = 0 \ \longrightarrow\ ar^2 + br + c = 0`, note: String.raw`$\Delta = b^2 - 4ac$.` },
    { id: 'm8-fo-delta-pos', name: 'EDL2 homogène, Δ > 0', tex: String.raw`y = C_1\,\mathrm{e}^{r_1 x} + C_2\,\mathrm{e}^{r_2 x}` },
    { id: 'm8-fo-delta-nul', name: 'EDL2 homogène, Δ = 0', tex: String.raw`y = (C_1 x + C_2)\,\mathrm{e}^{r_0 x},\quad r_0 = -\frac{b}{2a}` },
    { id: 'm8-fo-delta-neg', name: 'EDL2 homogène, Δ < 0', tex: String.raw`y = \mathrm{e}^{\alpha x}\left(C_1\cos\beta x + C_2\sin\beta x\right)`, note: String.raw`Racines $\alpha \pm \mathrm{i}\beta$ avec $\alpha = -\frac{b}{2a}$ et $\beta = \frac{\sqrt{-\Delta}}{2a}$.` },
    { id: 'm8-fo-amplitude-phase', name: 'Forme amplitude-phase', tex: String.raw`C_1\cos\beta x + C_2\sin\beta x = A\cos(\beta x - \varphi),\quad A = \sqrt{C_1^2 + C_2^2}`, note: String.raw`avec $\cos\varphi = \frac{C_1}{A}$, $\sin\varphi = \frac{C_2}{A}$.` },
    { id: 'm8-fo-oscillateur', name: 'Oscillateur harmonique', tex: String.raw`y'' + \omega^2 y = 0 \iff y = C_1\cos\omega x + C_2\sin\omega x` },
    { id: 'm8-fo-oscillateur-hyp', name: 'Équation y\'\' − ω²y = 0', tex: String.raw`y'' - \omega^2 y = 0 \iff y = C_1\,\mathrm{e}^{\omega x} + C_2\,\mathrm{e}^{-\omega x}`, note: String.raw`ou $A\operatorname{ch}(\omega x) + B\operatorname{sh}(\omega x)$.` },
    { id: 'm8-fo-sp2-const', name: 'Ordre 2 : second membre constant', tex: String.raw`ay'' + by' + cy = d \ (c \neq 0) : \quad y_p = \frac{d}{c}` },
    { id: 'm8-fo-sp2-poly', name: 'Ordre 2 : second membre polynomial', tex: String.raw`\deg y_p = \begin{cases} n & \text{si } c \neq 0 \\ n + 1 & \text{si } c = 0,\ b \neq 0 \end{cases}`, note: String.raw`$n$ = degré du second membre.` },
    { id: 'm8-fo-sp2-exp', name: 'Ordre 2 : second membre exponentiel', tex: String.raw`f = k\,\mathrm{e}^{mx},\ P(m) \neq 0 : \quad y_p = \frac{k}{P(m)}\,\mathrm{e}^{mx}`, note: String.raw`$P(r) = ar^2 + br + c$.` },
    { id: 'm8-fo-sp2-exp-res', name: 'Ordre 2 : exponentielle résonante', tex: String.raw`m \text{ racine simple} : y_p = \frac{k}{P'(m)}\,x\,\mathrm{e}^{mx}; \quad m \text{ racine double} : y_p = \frac{k}{2a}\,x^2\mathrm{e}^{mx}` },
    { id: 'm8-fo-sp2-sin', name: 'Ordre 2 : second membre sinusoïdal', tex: String.raw`f = B\cos\omega x,\ P(\mathrm{i}\omega) \neq 0 : \quad y_p = \operatorname{Re}\left(\frac{B\,\mathrm{e}^{\mathrm{i}\omega x}}{P(\mathrm{i}\omega)}\right)` },
    { id: 'm8-fo-resonance', name: 'Résonance de l\'oscillateur non amorti', tex: String.raw`y'' + \omega^2 y = B\cos\omega x : \quad y_p = \frac{B}{2\omega}\,x\sin\omega x` },
    { id: 'm8-fo-cauchy2', name: 'Problème de Cauchy, ordre 2', tex: String.raw`y(x_0) = y_0,\quad y'(x_0) = y_1 \ \Rightarrow\ \text{solution unique}`, note: String.raw`Deux conditions pour deux constantes.` },
    { id: 'm8-fo-rc-eq', name: 'Circuit RC série', tex: String.raw`RC\,\frac{\mathrm{d}u_C}{\mathrm{d}t} + u_C = E,\qquad \tau = RC` },
    { id: 'm8-fo-rc-charge', name: 'Charge d\'un condensateur', tex: String.raw`u_C(t) = E\left(1 - \mathrm{e}^{-t/\tau}\right),\qquad i(t) = \frac{E}{R}\,\mathrm{e}^{-t/\tau}`, note: String.raw`Avec $u_C(0) = 0$.` },
    { id: 'm8-fo-rc-decharge', name: 'Décharge d\'un condensateur', tex: String.raw`u_C(t) = U_0\,\mathrm{e}^{-t/\tau}` },
    { id: 'm8-fo-rl', name: 'Circuit RL série', tex: String.raw`L\,\frac{\mathrm{d}i}{\mathrm{d}t} + Ri = E,\qquad \tau = \frac{L}{R},\qquad i(t) = \frac{E}{R}\left(1 - \mathrm{e}^{-t/\tau}\right)` },
    { id: 'm8-fo-63', name: 'Lecture de la constante de temps', tex: String.raw`1 - \mathrm{e}^{-1} \approx 0{,}63,\quad 1 - \mathrm{e}^{-3} \approx 0{,}95,\quad 1 - \mathrm{e}^{-5} \approx 0{,}993`, note: String.raw`Temps de demi-charge : $t_{1/2} = \tau\ln 2$ ; la tangente à l'origine coupe l'asymptote en $t = \tau$.` },
    { id: 'm8-fo-rlc-eq', name: 'Circuit RLC série', tex: String.raw`LC\,u_C'' + RC\,u_C' + u_C = E` },
    { id: 'm8-fo-canonique', name: 'Forme canonique du second ordre', tex: String.raw`y'' + 2\xi\omega_0\,y' + \omega_0^2\,y = \omega_0^2\,y_\infty`, note: String.raw`$\xi$ : facteur d'amortissement (souvent noté $m$), $\omega_0$ : pulsation propre, $Q = \frac{1}{2\xi}$.` },
    { id: 'm8-fo-rlc-param', name: 'Paramètres du RLC série', tex: String.raw`\omega_0 = \frac{1}{\sqrt{LC}},\qquad \xi = \frac{R}{2}\sqrt{\frac{C}{L}},\qquad Q = \frac{1}{R}\sqrt{\frac{L}{C}}` },
    { id: 'm8-fo-regimes', name: 'Les régimes du second ordre', tex: String.raw`\xi > 1 : \text{apériodique},\quad \xi = 1 : \text{critique},\quad 0 < \xi < 1 : \text{pseudo-périodique}` },
    { id: 'm8-fo-pseudo', name: 'Pseudo-pulsation et pseudo-période', tex: String.raw`\omega = \omega_0\sqrt{1 - \xi^2},\qquad T = \frac{2\pi}{\omega}`, note: String.raw`Enveloppe $\mathrm{e}^{-\xi\omega_0 t}$.` },
    { id: 'm8-fo-rc-critique', name: 'Résistance critique', tex: String.raw`R_c = 2\sqrt{\frac{L}{C}}` },
    { id: 'm8-fo-masse-ressort', name: 'Oscillateur masse-ressort', tex: String.raw`mx'' + hx' + kx = 0,\qquad \omega_0 = \sqrt{\frac{k}{m}},\qquad T_0 = 2\pi\sqrt{\frac{m}{k}}` },
    { id: 'm8-fo-masse-sol', name: 'Oscillateur libre : solution', tex: String.raw`x(t) = X_0\cos(\omega_0 t) + \frac{V_0}{\omega_0}\sin(\omega_0 t)`, note: String.raw`Avec $x(0) = X_0$ et $x'(0) = V_0$.` }
  ],

  /* ======================= FLASHCARDS ======================= */
  flashcards: [
    { id: 'm8-f-lineaire', front: String.raw`Équation différentielle linéaire : définition, ordre, homogène`, back: String.raw`Linéaire d'ordre $n$ : $a_n(x)y^{(n)} + \cdots + a_0(x)y = b(x)$ ($y$ et ses dérivées au degré 1, sans produit entre elles).
$b$ = second membre ; homogène si $b = 0$.
Contre-exemples : $y' = y^2$, $y'' + \sin y = 0$.` },
    { id: 'm8-f-structure', front: String.raw`Théorème de structure (équations linéaires)`, back: String.raw`Solutions de (E) = **une** solution particulière $y_p$ + **toutes** les solutions $y_h$ de l'équation homogène.
Ordre 1 : 1 constante ; ordre 2 : 2 constantes. Les constantes se fixent à la fin.` },
    { id: 'm8-f-edl1-h', front: String.raw`Solutions de $y' + a(x)y = 0$`, back: String.raw`$y = C\,\mathrm{e}^{-A(x)}$, $C \in \mathbb{R}$, où $A$ est une primitive de $a$.
Coefficient constant : $C\mathrm{e}^{-ax}$. Ex. $y' + 2xy = 0 \Rightarrow C\mathrm{e}^{-x^2}$.
Normaliser d'abord : coefficient 1 devant $y'$.` },
    { id: 'm8-f-varconst', front: String.raw`Méthode de la variation de la constante (ordre 1)`, back: String.raw`Chercher $y = C(x)\mathrm{e}^{-A(x)}$ ; en reportant, les termes en $C(x)$ disparaissent :
$C'(x)\mathrm{e}^{-A(x)} = b(x)$, donc $C'(x) = b(x)\mathrm{e}^{A(x)}$, puis primitiver.
Ex. $y' - y = x\mathrm{e}^{x}$ : $C' = x$, $y = (\frac{x^2}{2} + K)\mathrm{e}^{x}$.` },
    { id: 'm8-f-sp1', front: String.raw`Ordre 1 ($y' + ay = b(x)$, $a$ constant) : formes de solutions particulières`, back: String.raw`Constante $b$ : $\frac{b}{a}$. Polynôme : polynôme de même degré.
$k\mathrm{e}^{mx}$ : $\lambda\mathrm{e}^{mx}$ si $m \neq -a$, sinon $\lambda x\mathrm{e}^{mx}$.
$B\cos\omega x$ : $\lambda\cos\omega x + \mu\sin\omega x$ (ou méthode complexe).` },
    { id: 'm8-f-cauchy', front: String.raw`Problème de Cauchy : énoncé et méthode`, back: String.raw`Équation linéaire à coefficients continus : pour des conditions initiales données ($y(x_0)$ à l'ordre 1 ; $y(x_0)$ et $y'(x_0)$ à l'ordre 2), il existe une **unique** solution.
Méthode : solution générale complète, puis on impose les conditions pour calculer les constantes.` },
    { id: 'm8-f-carac', front: String.raw`$ay'' + by' + cy = 0$ : les trois cas`, back: String.raw`Équation caractéristique $ar^2 + br + c = 0$.
$\Delta \gt 0$ : $C_1\mathrm{e}^{r_1x} + C_2\mathrm{e}^{r_2x}$.
$\Delta = 0$ : $(C_1x + C_2)\mathrm{e}^{r_0x}$.
$\Delta \lt 0$, $r = \alpha \pm \mathrm{i}\beta$ : $\mathrm{e}^{\alpha x}(C_1\cos\beta x + C_2\sin\beta x)$.` },
    { id: 'm8-f-delta-neg', front: String.raw`Cas $\Delta \lt 0$ : comment lire $\alpha$ et $\beta$ ?`, back: String.raw`$\alpha = -\frac{b}{2a}$ (partie réelle : amortissement), $\beta = \frac{\sqrt{-\Delta}}{2a}$ (partie imaginaire : pulsation).
Ex. $y'' + 2y' + 5y = 0$ : $r = -1 \pm 2\mathrm{i}$, $y = \mathrm{e}^{-x}(C_1\cos 2x + C_2\sin 2x)$.` },
    { id: 'm8-f-sp2-exp', front: String.raw`Ordre 2 : second membre $k\,\mathrm{e}^{mx}$`, back: String.raw`$m$ non racine de $P$ : $y_p = \frac{k}{P(m)}\mathrm{e}^{mx}$.
$m$ racine simple : $y_p = \lambda x\mathrm{e}^{mx}$ ($\lambda = \frac{k}{P'(m)}$).
$m$ racine double : $y_p = \lambda x^2\mathrm{e}^{mx}$ ($\lambda = \frac{k}{2a}$).` },
    { id: 'm8-f-complexe', front: String.raw`Méthode complexe pour un second membre $B\cos\omega x$`, back: String.raw`Remplacer par $B\mathrm{e}^{\mathrm{i}\omega x}$, chercher $z_p = \lambda\mathrm{e}^{\mathrm{i}\omega x}$ : $\lambda = \frac{B}{P(\mathrm{i}\omega)}$.
Puis $y_p = \operatorname{Re}(z_p)$ ($\operatorname{Im}$ pour un sinus).
Si $P(\mathrm{i}\omega) = 0$ : **résonance**, $y_p = x(\lambda\cos\omega x + \mu\sin\omega x)$.` },
    { id: 'm8-f-superposition', front: String.raw`Principe de superposition`, back: String.raw`Si $y_1$ est solution avec le second membre $b_1$ et $y_2$ avec $b_2$, alors $y_1 + y_2$ est solution avec $b_1 + b_2$.
Ex. pour $y' + y = x + \mathrm{e}^{x}$ : $y_p = (x - 1) + \frac{\mathrm{e}^{x}}{2}$.` },
    { id: 'm8-f-tau', front: String.raw`Constante de temps $\tau$ d'un premier ordre`, back: String.raw`$\tau y' + y = y_\infty$ : $y(t) = y_\infty + (y(0) - y_\infty)\mathrm{e}^{-t/\tau}$.
À $t = \tau$ : 63 % du chemin ; à $5\tau$ : plus de 99 %.
La tangente à l'origine coupe l'asymptote en $t = \tau$.` },
    { id: 'm8-f-rc', front: String.raw`Charge et décharge d'un condensateur (RC série)`, back: String.raw`$RC\,u' + u = E$, $\tau = RC$.
Charge ($u(0) = 0$) : $u = E(1 - \mathrm{e}^{-t/\tau})$, $i = \frac{E}{R}\mathrm{e}^{-t/\tau}$.
Décharge : $u = U_0\mathrm{e}^{-t/\tau}$. $u_C$ est continue.` },
    { id: 'm8-f-rl', front: String.raw`Circuit RL série soumis à un échelon $E$`, back: String.raw`$L\,i' + Ri = E$, $\tau = \frac{L}{R}$.
Avec $i(0) = 0$ : $i(t) = \frac{E}{R}(1 - \mathrm{e}^{-t/\tau})$.
L'intensité dans la bobine est continue.` },
    { id: 'm8-f-canonique', front: String.raw`Forme canonique d'un second ordre ; cas du RLC série`, back: String.raw`$y'' + 2\xi\omega_0 y' + \omega_0^2 y = \omega_0^2 y_\infty$.
RLC : $\omega_0 = \frac{1}{\sqrt{LC}}$, $\xi = \frac{R}{2}\sqrt{\frac{C}{L}}$, $Q = \frac{1}{2\xi}$.` },
    { id: 'm8-f-regimes', front: String.raw`Les régimes d'un oscillateur amorti`, back: String.raw`$\xi \gt 1$ : apériodique (deux exponentielles décroissantes).
$\xi = 1$ : critique, $(C_1 + C_2 t)\mathrm{e}^{-\omega_0 t}$, retour le plus rapide sans oscillation ($R_c = 2\sqrt{L/C}$).
$\xi \lt 1$ : pseudo-périodique, $\omega = \omega_0\sqrt{1 - \xi^2}$.` },
    { id: 'm8-f-masse', front: String.raw`Oscillateur masse-ressort et analogie électrique`, back: String.raw`$mx'' + hx' + kx = 0$, $\omega_0 = \sqrt{\frac{k}{m}}$, $T_0 = 2\pi\sqrt{\frac{m}{k}}$.
Analogie : $m \leftrightarrow L$, $h \leftrightarrow R$, $k \leftrightarrow \frac{1}{C}$, $x \leftrightarrow q$, $v \leftrightarrow i$.` }
  ],

  /* ======================= QCM ======================= */
  quiz: [
    { id: 'm8-q-001', level: 1, topic: 'Classification des EDO', sec: 'm8-s-vocab', q: String.raw`L'équation $y' + 3y = \mathrm{e}^{x}$ est :`,
      choices: [String.raw`non linéaire`, String.raw`linéaire d'ordre 1 à coefficients constants`, String.raw`linéaire d'ordre 2`, String.raw`homogène`], answer: 1,
      explain: String.raw`La dérivée la plus haute est $y'$ (ordre 1), et $y$, $y'$ apparaissent au premier degré avec des coefficients constants (1 et 3) : l'équation est linéaire d'ordre 1 à coefficients constants. Son second membre $\mathrm{e}^{x}$ est non nul, elle n'est donc pas homogène.`,
      steps: [
        String.raw`Rappel : une équation différentielle est **linéaire** si l'inconnue $y$ et ses dérivées n'apparaissent qu'au premier degré (pas de $y^2$, $yy'$, $\sin y$…) ; son **ordre** est celui de la dérivée la plus haute ; elle est **homogène** si son second membre (le terme sans $y$) est nul.`,
        String.raw`Ordre : la dérivée la plus haute est $y'$, donc ordre 1.`,
        String.raw`Linéarité : $y'$ et $3y$ sont du premier degré en $y$, avec des coefficients constants $1$ et $3$.`,
        String.raw`Second membre : $\mathrm{e}^{x} \neq 0$, donc l'équation n'est pas homogène (son équation homogène associée est $y' + 3y = 0$).`
      ],
      rule: String.raw`Ordre = plus haute dérivée ; linéaire = $y, y', y''$ au degré 1 ; homogène = second membre nul.`,
      why: { 0: String.raw`Erreur : croire que $\mathrm{e}^{x}$ rend l'équation non linéaire. Le second membre peut être n'importe quelle fonction de $x$ ; seule compte la façon dont $y$ apparaît (ici au degré 1).`, 2: String.raw`Erreur sur l'ordre : il n'y a pas de $y''$. L'ordre est celui de la plus haute dérivée présente, ici $y'$.`, 3: String.raw`Erreur de vocabulaire : homogène signifie second membre nul, or ici il vaut $\mathrm{e}^{x}$.` } },
    { id: 'm8-q-002', level: 1, topic: 'Linéarité d\'une EDO', sec: 'm8-s-vocab', q: String.raw`Laquelle de ces équations n'est **pas** linéaire ?`,
      choices: [String.raw`$y' + x^2 y = \sin x$`, String.raw`$y'' + y = \cos x$`, String.raw`$y' = y^2$`, String.raw`$xy' - y = 0$`], answer: 2,
      explain: String.raw`Dans $y' = y^2$, l'inconnue apparaît au carré : l'équation n'est pas linéaire (si $y_1$ et $y_2$ sont solutions, $(y_1 + y_2)^2 \neq y_1^2 + y_2^2$, donc la somme n'est plus solution). Les trois autres n'ont que des termes du premier degré en $y$, même avec des coefficients dépendant de $x$.`,
      steps: [
        String.raw`Rappel : une équation linéaire s'écrit $a_n(x)y^{(n)} + \dots + a_1(x)y' + a_0(x)y = b(x)$ : $y$ et ses dérivées au degré 1, multipliées par des fonctions de $x$ seulement.`,
        String.raw`$y' + x^2y = \sin x$ : coefficient $x^2$ variable mais $y$ au degré 1, linéaire. $y'' + y = \cos x$ : linéaire. $xy' - y = 0$ : linéaire homogène.`,
        String.raw`$y' = y^2$ contient $y^2$ : l'inconnue est au degré 2, l'équation n'est **pas** linéaire.`
      ],
      rule: String.raw`Linéaire : les coefficients peuvent dépendre de $x$, jamais de $y$ ; aucun produit ni puissance de $y$, $y'$, $y''$.`,
      why: { 0: String.raw`Erreur : croire qu'un coefficient variable ($x^2$) casse la linéarité. Seule la puissance de $y$ compte : $x^2y$ est du premier degré en $y$.`, 1: String.raw`Erreur : $\cos x$ est le second membre, une fonction de $x$ seulement ; $y'' + y$ est bien linéaire en $y$.`, 3: String.raw`Erreur : $xy'$ et $y$ sont du premier degré en $y$ (le facteur $x$ est un coefficient). C'est une équation linéaire homogène.` } },
    { id: 'm8-q-003', level: 1, topic: 'EDL1 homogène', sec: 'm8-s-edl1-homogene', q: String.raw`Les solutions de $y' + 3y = 0$ sont :`,
      choices: [String.raw`$C\mathrm{e}^{3x}$`, String.raw`$C\mathrm{e}^{-x/3}$`, String.raw`$C - 3x$`, String.raw`$C\mathrm{e}^{-3x}$`], answer: 3,
      explain: String.raw`On isole $y'$ : $y' = -3y$. Les fonctions dont la dérivée est proportionnelle à elles-mêmes sont les exponentielles, d'où $y = C\mathrm{e}^{-3x}$ avec $C$ réel. Vérification : $-3C\mathrm{e}^{-3x} + 3C\mathrm{e}^{-3x} = 0$.`,
      steps: [
        String.raw`Rappel : l'équation homogène $y' + ay = 0$ ($a$ constante) a pour solutions $y = C\mathrm{e}^{-ax}$, $C \in \mathbb{R}$ : la dérivée est proportionnelle à la fonction.`,
        String.raw`Ici $a = 3$ : $y' = -3y$, donc $y = C\mathrm{e}^{-3x}$.`,
        String.raw`Vérification : $y' = -3C\mathrm{e}^{-3x}$, donc $y' + 3y = -3C\mathrm{e}^{-3x} + 3C\mathrm{e}^{-3x} = 0$ ✔.`
      ],
      rule: String.raw`$y' + ay = 0 \iff y = C\mathrm{e}^{-ax}$.`,
      why: { 0: String.raw`Erreur de signe : $y' + 3y = 0$ s'écrit $y' = -3y$. Avec $C\mathrm{e}^{3x}$ on obtient $y' + 3y = 6C\mathrm{e}^{3x} \neq 0$.`, 1: String.raw`Erreur : coefficient inversé. Dans $\mathrm{e}^{-ax}$, c'est $a = 3$ lui-même qui multiplie $x$, pas $\frac{1}{a}$.`, 2: String.raw`Erreur : $C - 3x$ vérifie $y' = -3$, une autre équation. Ici $y'$ doit être proportionnel à $y$, ce qui donne une exponentielle.` } },
    { id: 'm8-q-004', level: 1, topic: 'EDL1 homogène', sec: 'm8-s-edl1-homogene', q: String.raw`Les solutions de $2y' + y = 0$ sont :`,
      choices: [String.raw`$C\mathrm{e}^{-2x}$`, String.raw`$C\mathrm{e}^{-x/2}$`, String.raw`$C\mathrm{e}^{x/2}$`, String.raw`$C\mathrm{e}^{-x}$`], answer: 1,
      explain: String.raw`Le coefficient de $y'$ vaut 2 : on divise par 2 pour obtenir la forme normalisée $y' + \frac{1}{2}y = 0$. On applique alors $y = C\mathrm{e}^{-ax}$ avec $a = \frac{1}{2}$ : $y = C\mathrm{e}^{-x/2}$.`,
      steps: [
        String.raw`Rappel : la formule $y = C\mathrm{e}^{-ax}$ s'applique à la forme **normalisée** $y' + ay = 0$ (coefficient 1 devant $y'$).`,
        String.raw`On divise par 2 : $y' + \frac{1}{2}y = 0$, donc $a = \frac{1}{2}$.`,
        String.raw`$y = C\mathrm{e}^{-x/2}$. Vérification : $2y' + y = 2 \times \left(-\frac{1}{2}\right)C\mathrm{e}^{-x/2} + C\mathrm{e}^{-x/2} = 0$ ✔.`
      ],
      rule: String.raw`Normaliser d'abord : $\alpha y' + \beta y = 0 \iff y' + \frac{\beta}{\alpha}y = 0 \iff y = C\mathrm{e}^{-\beta x/\alpha}$.`,
      why: { 0: String.raw`Erreur : multiplier par 2 au lieu de diviser. Pour normaliser, on divise toute l'équation par le coefficient de $y'$.`, 2: String.raw`Erreur de signe : $y' = -\frac{1}{2}y$, l'exposant est négatif.`, 3: String.raw`Erreur : ne pas normaliser. Le coefficient de $y'$ vaut 2, il faut d'abord diviser par 2.` } },
    { id: 'm8-q-005', level: 2, topic: 'EDL1 à coefficient variable', sec: 'm8-s-edl1-homogene', q: String.raw`Les solutions de $y' + 2xy = 0$ sur $\mathbb{R}$ sont :`,
      choices: [String.raw`$C\mathrm{e}^{-2x}$`, String.raw`$C\mathrm{e}^{x^2}$`, String.raw`$C\mathrm{e}^{-x^2}$`, String.raw`$C\mathrm{e}^{-2x^2}$`], answer: 2,
      explain: String.raw`Pour $y' + a(x)y = 0$, les solutions sont $C\mathrm{e}^{-A(x)}$ avec $A$ une primitive de $a$. Ici $a(x) = 2x$ et $A(x) = x^2$, donc $y = C\mathrm{e}^{-x^2}$ ; on vérifie que $y' = -2xC\mathrm{e}^{-x^2} = -2xy$.`,
      steps: [
        String.raw`Rappel : $y' + a(x)y = 0$ ($a$ continue) a pour solutions $y = C\mathrm{e}^{-A(x)}$, où $A$ est **une primitive** de $a$.`,
        String.raw`Ici $a(x) = 2x$ ; une primitive est $A(x) = x^2$ (car $(x^2)' = 2x$).`,
        String.raw`$y = C\mathrm{e}^{-x^2}$. Vérification : $y' = -2x\,C\mathrm{e}^{-x^2}$, donc $y' + 2xy = 0$ ✔.`
      ],
      rule: String.raw`$y' + a(x)y = 0 \iff y = C\mathrm{e}^{-A(x)}$ avec $A' = a$.`,
      why: { 0: String.raw`Erreur : mettre une primitive de 2 (soit $2x$) dans l'exponentielle au lieu d'une primitive de $a(x) = 2x$, qui est $x^2$.`, 1: String.raw`Erreur de signe : la formule est $\mathrm{e}^{-A(x)}$, pas $\mathrm{e}^{+A(x)}$.`, 3: String.raw`Erreur de primitive : $(2x^2)' = 4x \neq 2x$. Une primitive de $2x$ est $x^2$.` } },
    { id: 'm8-q-006', level: 1, topic: 'Structure des solutions', sec: 'm8-s-vocab', q: String.raw`Pour une équation linéaire (E), la solution générale est :`,
      choices: [String.raw`le produit d'une solution particulière et de la solution générale homogène`, String.raw`la solution générale de l'équation homogène seule`, String.raw`une solution particulière seule`, String.raw`la somme d'une solution particulière et de la solution générale de l'équation homogène`], answer: 3,
      explain: String.raw`Théorème de structure : si $y_p$ est une solution particulière de (E), toutes les solutions s'écrivent $y = y_p + y_h$, où $y_h$ parcourt les solutions de l'équation homogène. La raison est la linéarité : la différence de deux solutions de (E) vérifie l'équation homogène.`,
      steps: [
        String.raw`Rappel : l'équation homogène associée à (E) est la même équation avec un second membre nul ; ses solutions $y_h$ portent les constantes arbitraires.`,
        String.raw`Si $y$ et $y_p$ sont deux solutions de (E), alors par linéarité $y - y_p$ vérifie l'équation avec le second membre $b - b = 0$ : c'est une solution homogène $y_h$.`,
        String.raw`Donc $y = y_p + y_h$ : solution générale = une solution particulière + la solution générale homogène.`
      ],
      rule: String.raw`$y = y_p + y_h$ (théorème de structure des équations linéaires).`,
      why: { 0: String.raw`Erreur : on additionne, on ne multiplie pas. Le produit de deux solutions ne vérifie pas une équation linéaire en général.`, 1: String.raw`Erreur : les solutions homogènes vérifient l'équation **sans** second membre ; elles ne sont pas solutions de (E) si celui-ci est non nul.`, 2: String.raw`Erreur : une solution particulière n'est qu'une solution parmi une infinité ; il manque $y_h$, qui porte les constantes.` } },
    { id: 'm8-q-007', level: 1, topic: 'Solution particulière constante', sec: 'm8-s-edl1-particuliere', q: String.raw`Une solution particulière constante de $y' + 2y = 6$ est :`,
      choices: [String.raw`$y_p = 6$`, String.raw`$y_p = 3$`, String.raw`$y_p = 12$`, String.raw`$y_p = \frac{1}{3}$`], answer: 1,
      explain: String.raw`Une constante $y_p = k$ a une dérivée nulle, donc l'équation devient $0 + 2k = 6$ et $k = 3$. Vérification : $y_p' + 2y_p = 0 + 6 = 6$.`,
      steps: [
        String.raw`Rappel : quand le second membre est une constante $b$ (et $a \neq 0$), on cherche une solution particulière constante $y_p = k$, dont la dérivée est nulle.`,
        String.raw`On remplace : $y_p' + 2y_p = 0 + 2k = 6$.`,
        String.raw`$k = \frac{6}{2} = 3$. Vérification : $0 + 2 \times 3 = 6$ ✔.`
      ],
      rule: String.raw`$y' + ay = b$ (constantes, $a \neq 0$) : $y_p = \frac{b}{a}$.`,
      why: { 0: String.raw`Erreur : prendre le second membre lui-même. Test : $y_p = 6$ donne $0 + 12 = 12 \neq 6$ ; il faut diviser par $a = 2$.`, 2: String.raw`Erreur : multiplier par $a$ au lieu de diviser. Test : $0 + 24 \neq 6$.`, 3: String.raw`Erreur : quotient inversé, $\frac{a}{b} = \frac{2}{6}$ au lieu de $\frac{b}{a} = \frac{6}{2}$.` } },
    { id: 'm8-q-008', level: 2, topic: 'Second membre exponentiel', sec: 'm8-s-edl1-particuliere', q: String.raw`Pour $y' + y = \mathrm{e}^{2x}$, on cherche $y_p = \lambda\mathrm{e}^{2x}$. Que vaut $\lambda$ ?`,
      choices: [String.raw`$1$`, String.raw`$\frac{1}{2}$`, String.raw`$\frac{1}{3}$`, String.raw`$-1$`], answer: 2,
      explain: String.raw`On dérive $y_p = \lambda\mathrm{e}^{2x}$ : $y_p' = 2\lambda\mathrm{e}^{2x}$. En reportant, $2\lambda\mathrm{e}^{2x} + \lambda\mathrm{e}^{2x} = 3\lambda\mathrm{e}^{2x}$ doit valoir $\mathrm{e}^{2x}$, donc $\lambda = \frac{1}{3}$.`,
      steps: [
        String.raw`Rappel : pour un second membre $\mathrm{e}^{mx}$ (ici $m = 2$) qui n'est pas solution homogène (ici $y_h = C\mathrm{e}^{-x}$), on cherche $y_p = \lambda\mathrm{e}^{mx}$ et on identifie $\lambda$.`,
        String.raw`Dérivée : $(\lambda\mathrm{e}^{2x})' = 2\lambda\mathrm{e}^{2x}$ (facteur 2 de la dérivée intérieure).`,
        String.raw`Report : $y_p' + y_p = 2\lambda\mathrm{e}^{2x} + \lambda\mathrm{e}^{2x} = 3\lambda\mathrm{e}^{2x} = \mathrm{e}^{2x}$, donc $3\lambda = 1$ et $\lambda = \frac{1}{3}$.`
      ],
      rule: String.raw`$y' + ay = \mathrm{e}^{mx}$ avec $m \neq -a$ : $y_p = \frac{\mathrm{e}^{mx}}{m + a}$.`,
      why: { 0: String.raw`Erreur : recopier le second membre ($y_p = \mathrm{e}^{2x}$) sans identifier. Test : $y_p' + y_p = 3\mathrm{e}^{2x} \neq \mathrm{e}^{2x}$.`, 1: String.raw`Erreur : oublier le facteur 2 de la dérivée ($\lambda + \lambda = 1$) ou oublier le terme $y_p$ ($2\lambda = 1$). Il faut $2\lambda + \lambda = 1$.`, 3: String.raw`Erreur de signe : avec $\lambda = -1$, $y_p' + y_p = -3\mathrm{e}^{2x}$. Les termes $2\lambda$ et $\lambda$ s'ajoutent.` } },
    { id: 'm8-q-009', level: 3, topic: 'Résonance au premier ordre', sec: 'm8-s-edl1-particuliere', q: String.raw`Pour $y' + 2y = \mathrm{e}^{-2x}$, sous quelle forme chercher une solution particulière ?`,
      choices: [String.raw`$\lambda\mathrm{e}^{-2x}$`, String.raw`$\lambda x\,\mathrm{e}^{-2x}$`, String.raw`$\lambda\mathrm{e}^{2x}$`, String.raw`$\lambda x^2\mathrm{e}^{-2x}$`], answer: 1,
      explain: String.raw`Les solutions homogènes sont $C\mathrm{e}^{-2x}$ : le second membre en fait partie, donc $\lambda\mathrm{e}^{-2x}$ donnerait $0 = \mathrm{e}^{-2x}$. On multiplie par $x$ : $y_p = \lambda x\mathrm{e}^{-2x}$, et on trouve $\lambda = 1$.`,
      steps: [
        String.raw`Rappel : si le second membre $\mathrm{e}^{mx}$ est déjà solution de l'équation homogène (ici $m = -a$), la forme $\lambda\mathrm{e}^{mx}$ ne peut pas marcher ; on cherche $y_p = \lambda x\,\mathrm{e}^{mx}$.`,
        String.raw`Homogène : $y' + 2y = 0 \iff y = C\mathrm{e}^{-2x}$ ; le second membre $\mathrm{e}^{-2x}$ en fait partie.`,
        String.raw`Avec $y_p = \lambda x\mathrm{e}^{-2x}$ : $y_p' = \lambda(1 - 2x)\mathrm{e}^{-2x}$, donc $y_p' + 2y_p = \lambda\mathrm{e}^{-2x}$ et $\lambda = 1$.`
      ],
      rule: String.raw`Ordre 1 : si $\mathrm{e}^{mx}$ est solution homogène ($m = -a$), chercher $y_p = \lambda x\,\mathrm{e}^{mx}$.`,
      why: { 0: String.raw`Erreur : ne pas voir que $\mathrm{e}^{-2x}$ est solution homogène. En reportant, $(\lambda\mathrm{e}^{-2x})' + 2\lambda\mathrm{e}^{-2x} = 0$ : on obtiendrait $0 = \mathrm{e}^{-2x}$.`, 2: String.raw`Erreur de signe : la forme cherchée reprend l'exponentielle du second membre, $\mathrm{e}^{-2x}$.`, 3: String.raw`Erreur : le facteur $x^2$ sert pour une racine double à l'ordre 2. À l'ordre 1, un seul facteur $x$ suffit.` } },
    { id: 'm8-q-010', level: 2, topic: 'Second membre trigonométrique', sec: 'm8-s-edl1-particuliere', q: String.raw`Pour $y' + y = \cos x$, sous quelle forme chercher une solution particulière ?`,
      choices: [String.raw`$\lambda\cos x$`, String.raw`$\lambda\sin x$`, String.raw`$\lambda\cos x + \mu\sin x$`, String.raw`$\lambda x\cos x$`], answer: 2,
      explain: String.raw`Dériver un cosinus fait apparaître un sinus : une forme avec un seul des deux ne peut pas équilibrer l'équation. On cherche $y_p = \lambda\cos x + \mu\sin x$ ; l'identification donne $\lambda = \mu = \frac{1}{2}$.`,
      steps: [
        String.raw`Rappel : pour un second membre $\cos\omega x$ ou $\sin\omega x$ (sans résonance), on cherche $y_p = \lambda\cos\omega x + \mu\sin\omega x$ : la dérivation échange cosinus et sinus, il faut donc les deux.`,
        String.raw`Avec $y_p = \lambda\cos x + \mu\sin x$ : $y_p' = -\lambda\sin x + \mu\cos x$, donc $y_p' + y_p = (\lambda + \mu)\cos x + (\mu - \lambda)\sin x$.`,
        String.raw`Identification avec $\cos x$ : $\lambda + \mu = 1$ et $\mu - \lambda = 0$, d'où $\lambda = \mu = \frac{1}{2}$ et $y_p = \frac{\cos x + \sin x}{2}$.`
      ],
      rule: String.raw`Second membre $B\cos\omega x$ : $y_p = \lambda\cos\omega x + \mu\sin\omega x$ (hors résonance).`,
      why: { 0: String.raw`Erreur : un cosinus seul ne suffit pas, car $(\lambda\cos x)' + \lambda\cos x = \lambda\cos x - \lambda\sin x$ : le terme en $\sin x$ ne peut pas s'annuler.`, 1: String.raw`Erreur symétrique : $(\lambda\sin x)' + \lambda\sin x = \lambda\cos x + \lambda\sin x$, il reste un $\sin x$ indésirable.`, 3: String.raw`Erreur : le facteur $x$ ne sert qu'en cas de résonance ; ici la solution homogène est $C\mathrm{e}^{-x}$, sans rapport avec $\cos x$.` } },
    { id: 'm8-q-011', level: 1, topic: 'Problème de Cauchy, ordre 1', sec: 'm8-s-edl1-complete', q: String.raw`La solution de $y' + y = 0$ telle que $y(0) = 3$ est :`,
      choices: [String.raw`$\mathrm{e}^{-x} + 3$`, String.raw`$3\mathrm{e}^{x}$`, String.raw`$\mathrm{e}^{-3x}$`, String.raw`$3\mathrm{e}^{-x}$`], answer: 3,
      explain: String.raw`La solution générale de $y' + y = 0$ est $y = C\mathrm{e}^{-x}$, et la condition $y(0) = C = 3$ fixe la constante : $y = 3\mathrm{e}^{-x}$. On vérifie : $y' + y = -3\mathrm{e}^{-x} + 3\mathrm{e}^{-x} = 0$ et $y(0) = 3$.`,
      steps: [
        String.raw`Rappel : un problème de Cauchy = une équation différentielle + une condition initiale. On écrit la solution générale (avec sa constante), puis la condition fixe la constante.`,
        String.raw`Solution générale : $y' + y = 0 \iff y = C\mathrm{e}^{-x}$.`,
        String.raw`Condition initiale : $y(0) = C\mathrm{e}^{0} = C = 3$, d'où $y = 3\mathrm{e}^{-x}$. Vérification : $y' + y = -3\mathrm{e}^{-x} + 3\mathrm{e}^{-x} = 0$ ✔.`
      ],
      rule: String.raw`$y' + ay = 0$, $y(0) = y_0$ : $y = y_0\,\mathrm{e}^{-ax}$.`,
      why: { 0: String.raw`Erreur : ajouter la constante au lieu de la multiplier. $\mathrm{e}^{-x} + 3$ vérifie $y' + y = 3 \neq 0$ (et vaut 4 en 0).`, 1: String.raw`Erreur de signe dans l'exponentielle : $(3\mathrm{e}^{x})' + 3\mathrm{e}^{x} = 6\mathrm{e}^{x} \neq 0$.`, 2: String.raw`Erreur : mettre la condition initiale dans l'exposant. Le taux $-1$ est fixé par l'équation ; la condition fixe la constante **multiplicative**.` } },
    { id: 'm8-q-012', level: 2, topic: 'Variation de la constante', sec: 'm8-s-edl1-complete', q: String.raw`Variation de la constante pour $y' + a(x)y = b(x)$ : avec $y = C(x)\mathrm{e}^{-A(x)}$, on obtient :`,
      choices: [String.raw`$C'(x) = b(x)\mathrm{e}^{-A(x)}$`, String.raw`$C'(x) = b(x)\mathrm{e}^{A(x)}$`, String.raw`$C(x) = b(x)\mathrm{e}^{A(x)}$`, String.raw`$C'(x) = b(x)$`], answer: 1,
      explain: String.raw`En dérivant $y = C(x)\mathrm{e}^{-A(x)}$, les termes en $C(x)$ se compensent et il reste $y' + a(x)y = C'(x)\mathrm{e}^{-A(x)}$. L'équation donne $C'(x)\mathrm{e}^{-A(x)} = b(x)$, soit $C'(x) = b(x)\mathrm{e}^{A(x)}$ ; il reste ensuite à primitiver.`,
      steps: [
        String.raw`Rappel (variation de la constante) : on remplace la constante $C$ de la solution homogène $C\mathrm{e}^{-A(x)}$ par une fonction $C(x)$, et on cherche l'équation vérifiée par $C(x)$.`,
        String.raw`Dérivée d'un produit (avec $A' = a$) : $y' = C'(x)\mathrm{e}^{-A(x)} - a(x)C(x)\mathrm{e}^{-A(x)}$.`,
        String.raw`Donc $y' + a(x)y = C'(x)\mathrm{e}^{-A(x)}$ : l'équation devient $C'(x)\mathrm{e}^{-A(x)} = b(x)$.`,
        String.raw`On multiplie par $\mathrm{e}^{A(x)}$ : $C'(x) = b(x)\mathrm{e}^{A(x)}$, puis on primitive pour obtenir $C(x)$.`
      ],
      rule: String.raw`$y = C(x)\mathrm{e}^{-A(x)}$ : $C'(x) = b(x)\mathrm{e}^{A(x)}$.`,
      why: { 0: String.raw`Erreur de signe : diviser par $\mathrm{e}^{-A(x)}$ revient à multiplier par $\mathrm{e}^{+A(x)}$.`, 2: String.raw`Erreur : confondre $C$ et $C'$. On obtient la dérivée $C'(x)$ ; il faut encore primitiver.`, 3: String.raw`Erreur : oublier le facteur exponentiel, qui vient de $y = C(x)\mathrm{e}^{-A(x)}$ et ne disparaît pas.` } },
    { id: 'm8-q-013', level: 1, topic: 'Équation caractéristique', sec: 'm8-s-edl2-homogene', q: String.raw`L'équation caractéristique de $y'' - 5y' + 6y = 0$ est :`,
      choices: [String.raw`$r^2 + 5r + 6 = 0$`, String.raw`$-5r + 6 = 0$`, String.raw`$r^2 - 5r + 6 = 0$`, String.raw`$r^2 - 5r - 6 = 0$`], answer: 2,
      explain: String.raw`En cherchant des solutions $y = \mathrm{e}^{rx}$ ($y' = r\mathrm{e}^{rx}$, $y'' = r^2\mathrm{e}^{rx}$), on obtient $(r^2 - 5r + 6)\mathrm{e}^{rx} = 0$, donc $r^2 - 5r + 6 = 0$. Concrètement : $y''$ devient $r^2$, $y'$ devient $r$, $y$ devient 1, coefficients et signes conservés.`,
      steps: [
        String.raw`Rappel : pour $ay'' + by' + cy = 0$, l'**équation caractéristique** est $ar^2 + br + c = 0$. Elle vient de l'essai $y = \mathrm{e}^{rx}$, pour lequel $y' = r\mathrm{e}^{rx}$ et $y'' = r^2\mathrm{e}^{rx}$.`,
        String.raw`Report : $(r^2 - 5r + 6)\mathrm{e}^{rx} = 0$, et comme $\mathrm{e}^{rx} \neq 0$ : $r^2 - 5r + 6 = 0$.`,
        String.raw`Coefficients conservés avec leurs signes : $a = 1$, $b = -5$, $c = 6$.`
      ],
      rule: String.raw`$ay'' + by' + cy = 0$ : équation caractéristique $ar^2 + br + c = 0$.`,
      why: { 0: String.raw`Erreur de signe : les coefficients se recopient tels quels, $-5y'$ donne $-5r$.`, 1: String.raw`Erreur : oublier $y''$, qui donne le terme $r^2$.`, 3: String.raw`Erreur de signe sur le terme constant : $+6y$ donne $+6$.` } },
    { id: 'm8-q-014', level: 2, topic: 'EDL2 homogène, Δ > 0', sec: 'm8-s-edl2-homogene', q: String.raw`Les solutions réelles de $y'' - 5y' + 6y = 0$ sont :`,
      choices: [String.raw`$C_1\mathrm{e}^{-2x} + C_2\mathrm{e}^{-3x}$`, String.raw`$(C_1x + C_2)\mathrm{e}^{2x}$`, String.raw`$C_1\mathrm{e}^{2x} + C_2\mathrm{e}^{3x}$`, String.raw`$C_1\cos 2x + C_2\sin 3x$`], answer: 2,
      explain: String.raw`L'équation caractéristique $r^2 - 5r + 6 = (r - 2)(r - 3) = 0$ a deux racines réelles distinctes, 2 et 3 ($\Delta = 1 \gt 0$). Les solutions sont donc $C_1\mathrm{e}^{2x} + C_2\mathrm{e}^{3x}$.`,
      steps: [
        String.raw`Rappel : si l'équation caractéristique a deux racines réelles distinctes $r_1, r_2$ ($\Delta \gt 0$), les solutions sont $y = C_1\mathrm{e}^{r_1x} + C_2\mathrm{e}^{r_2x}$.`,
        String.raw`$\Delta = (-5)^2 - 4 \times 6 = 25 - 24 = 1 \gt 0$ ; racines $\frac{5 \pm 1}{2}$, soit 2 et 3 (contrôle : somme 5, produit 6).`,
        String.raw`Solutions : $y = C_1\mathrm{e}^{2x} + C_2\mathrm{e}^{3x}$.`
      ],
      rule: String.raw`$\Delta \gt 0$ : $y = C_1\mathrm{e}^{r_1x} + C_2\mathrm{e}^{r_2x}$.`,
      why: { 0: String.raw`Erreur de signe sur les racines : $r^2 - 5r + 6$ a pour racines $+2$ et $+3$ ; $-2$ et $-3$ sont celles de $r^2 + 5r + 6$.`, 1: String.raw`Erreur de cas : la forme $(C_1x + C_2)\mathrm{e}^{r_0x}$ est réservée à une racine double ($\Delta = 0$) ; ici $\Delta = 1$.`, 3: String.raw`Erreur de cas : les cosinus et sinus n'apparaissent que si $\Delta \lt 0$ (racines complexes).` } },
    { id: 'm8-q-015', level: 2, topic: 'EDL2 homogène, Δ = 0', sec: 'm8-s-edl2-homogene', q: String.raw`Les solutions réelles de $y'' + 4y' + 4y = 0$ sont :`,
      choices: [String.raw`$C_1\mathrm{e}^{-2x} + C_2\mathrm{e}^{-2x}$`, String.raw`$(C_1x + C_2)\mathrm{e}^{-2x}$`, String.raw`$(C_1x + C_2)\mathrm{e}^{2x}$`, String.raw`$C_1\cos 2x + C_2\sin 2x$`], answer: 1,
      explain: String.raw`$r^2 + 4r + 4 = (r + 2)^2$ : racine double $r_0 = -2$ ($\Delta = 0$). Dans ce cas les solutions sont $(C_1x + C_2)\mathrm{e}^{-2x}$ : le facteur $x$ fournit la deuxième solution indépendante $x\mathrm{e}^{-2x}$.`,
      steps: [
        String.raw`Rappel : si l'équation caractéristique a une racine double $r_0$ ($\Delta = 0$), les solutions sont $y = (C_1x + C_2)\mathrm{e}^{r_0x}$.`,
        String.raw`$r^2 + 4r + 4 = (r + 2)^2$ : $\Delta = 16 - 16 = 0$, racine double $r_0 = -\frac{4}{2} = -2$.`,
        String.raw`Solutions : $y = (C_1x + C_2)\mathrm{e}^{-2x}$.`
      ],
      rule: String.raw`$\Delta = 0$ : $y = (C_1x + C_2)\mathrm{e}^{r_0x}$ avec $r_0 = -\frac{b}{2a}$.`,
      why: { 0: String.raw`Erreur : $C_1\mathrm{e}^{-2x} + C_2\mathrm{e}^{-2x} = (C_1 + C_2)\mathrm{e}^{-2x}$ ne contient en fait qu'une constante. Il manque la solution $x\mathrm{e}^{-2x}$.`, 2: String.raw`Erreur de signe sur la racine : $r_0 = -\frac{b}{2a} = -2$, pas $+2$.`, 3: String.raw`Erreur de cas : $\Delta = 0$, pas $\Delta \lt 0$ ; il n'y a ni cosinus ni sinus.` } },
    { id: 'm8-q-016', level: 2, topic: 'Oscillateur harmonique', sec: 'm8-s-edl2-homogene', q: String.raw`Les solutions réelles de $y'' + 9y = 0$ sont :`,
      choices: [String.raw`$C_1\mathrm{e}^{3x} + C_2\mathrm{e}^{-3x}$`, String.raw`$C_1\cos 9x + C_2\sin 9x$`, String.raw`$(C_1x + C_2)\mathrm{e}^{3x}$`, String.raw`$C_1\cos 3x + C_2\sin 3x$`], answer: 3,
      explain: String.raw`$r^2 + 9 = 0 \iff r^2 = (3\mathrm{i})^2 \iff r = \pm 3\mathrm{i}$ : $\alpha = 0$ et $\beta = 3$. Les solutions réelles sont $C_1\cos 3x + C_2\sin 3x$ (oscillations de pulsation $\sqrt{9} = 3$).`,
      steps: [
        String.raw`Rappel : si les racines sont complexes $\alpha \pm \mathrm{i}\beta$ ($\Delta \lt 0$), les solutions réelles sont $y = \mathrm{e}^{\alpha x}(C_1\cos\beta x + C_2\sin\beta x)$.`,
        String.raw`Équation caractéristique : $r^2 + 9 = 0$, soit $r^2 = -9 = (3\mathrm{i})^2$, donc $r = \pm 3\mathrm{i}$ : $\alpha = 0$, $\beta = 3$.`,
        String.raw`$y = C_1\cos 3x + C_2\sin 3x$. Vérification : $(\cos 3x)'' = -9\cos 3x$, donc $y'' + 9y = 0$ ✔.`
      ],
      rule: String.raw`$y'' + \omega^2y = 0 \iff y = C_1\cos\omega x + C_2\sin\omega x$.`,
      why: { 0: String.raw`Erreur de signe : ce sont les solutions de $y'' - 9y = 0$ (racines réelles $\pm 3$).`, 1: String.raw`Erreur : prendre $\beta = 9$ au lieu de $\sqrt{9} = 3$. Test : $(\cos 9x)'' + 9\cos 9x = -72\cos 9x \neq 0$.`, 2: String.raw`Erreur de cas : il n'y a pas de racine double ($\Delta = -36 \neq 0$).` } },
    { id: 'm8-q-017', level: 3, topic: 'EDL2 homogène, Δ < 0', sec: 'm8-s-edl2-homogene', q: String.raw`Les solutions réelles de $y'' + 2y' + 5y = 0$ sont :`,
      choices: [String.raw`$\mathrm{e}^{-2x}(C_1\cos x + C_2\sin x)$`, String.raw`$\mathrm{e}^{-x}(C_1\cos 2x + C_2\sin 2x)$`, String.raw`$\mathrm{e}^{x}(C_1\cos 2x + C_2\sin 2x)$`, String.raw`$\mathrm{e}^{-x}(C_1\cos 4x + C_2\sin 4x)$`], answer: 1,
      explain: String.raw`$\Delta = 4 - 20 = -16 \lt 0$, donc $r = \frac{-2 \pm 4\mathrm{i}}{2} = -1 \pm 2\mathrm{i}$ : $\alpha = -1$ règle l'amortissement et $\beta = 2$ la pulsation. Les solutions sont $\mathrm{e}^{-x}(C_1\cos 2x + C_2\sin 2x)$.`,
      steps: [
        String.raw`Rappel : si $\Delta \lt 0$, les racines sont $\alpha \pm \mathrm{i}\beta$ avec $\alpha = -\frac{b}{2a}$, $\beta = \frac{\sqrt{-\Delta}}{2a}$, et $y = \mathrm{e}^{\alpha x}(C_1\cos\beta x + C_2\sin\beta x)$.`,
        String.raw`Équation caractéristique $r^2 + 2r + 5 = 0$ : $\Delta = 4 - 20 = -16$, $\sqrt{-\Delta} = 4$.`,
        String.raw`$\alpha = -\frac{2}{2} = -1$ et $\beta = \frac{4}{2} = 2$, donc $y = \mathrm{e}^{-x}(C_1\cos 2x + C_2\sin 2x)$.`
      ],
      rule: String.raw`$r = \alpha \pm \mathrm{i}\beta$ : $y = \mathrm{e}^{\alpha x}(C_1\cos\beta x + C_2\sin\beta x)$.`,
      why: { 0: String.raw`Erreur : échanger partie réelle et partie imaginaire. La partie réelle $-1$ va dans l'exponentielle, la partie imaginaire 2 dans les cosinus et sinus.`, 2: String.raw`Erreur de signe : $\alpha = -\frac{b}{2a} = -1$ ; avec $\mathrm{e}^{x}$, les solutions exploseraient au lieu d'être amorties.`, 3: String.raw`Erreur : oublier de diviser par $2a$ ; $\beta = \frac{\sqrt{-\Delta}}{2a} = \frac{4}{2} = 2$ et non 4.` } },
    { id: 'm8-q-018', level: 2, topic: 'EDL2 homogène, Δ > 0', sec: 'm8-s-edl2-homogene', q: String.raw`Les solutions réelles de $y'' - y = 0$ sont :`,
      choices: [String.raw`$C_1\cos x + C_2\sin x$`, String.raw`$(C_1x + C_2)\mathrm{e}^{x}$`, String.raw`$C_1\operatorname{ch} x + C_2\operatorname{sh} x$`, String.raw`$C_1\mathrm{e}^{x}$`], answer: 2,
      explain: String.raw`$r^2 - 1 = 0 \iff r = \pm 1$ : deux racines réelles distinctes, donc $y = A\mathrm{e}^{x} + B\mathrm{e}^{-x}$. Comme $\mathrm{e}^{x} = \operatorname{ch} x + \operatorname{sh} x$ et $\mathrm{e}^{-x} = \operatorname{ch} x - \operatorname{sh} x$, cela s'écrit aussi $C_1\operatorname{ch} x + C_2\operatorname{sh} x$.`,
      steps: [
        String.raw`Rappel : deux racines réelles distinctes $r_1, r_2$ donnent $y = A\mathrm{e}^{r_1x} + B\mathrm{e}^{r_2x}$ ; on rappelle $\operatorname{ch} x = \frac{\mathrm{e}^{x} + \mathrm{e}^{-x}}{2}$ et $\operatorname{sh} x = \frac{\mathrm{e}^{x} - \mathrm{e}^{-x}}{2}$.`,
        String.raw`$r^2 - 1 = 0 \iff r = 1$ ou $r = -1$, donc $y = A\mathrm{e}^{x} + B\mathrm{e}^{-x}$.`,
        String.raw`Avec $\mathrm{e}^{x} = \operatorname{ch} x + \operatorname{sh} x$ et $\mathrm{e}^{-x} = \operatorname{ch} x - \operatorname{sh} x$ : $y = (A + B)\operatorname{ch} x + (A - B)\operatorname{sh} x = C_1\operatorname{ch} x + C_2\operatorname{sh} x$.`
      ],
      rule: String.raw`$y'' - \omega^2y = 0 \iff y = C_1\mathrm{e}^{\omega x} + C_2\mathrm{e}^{-\omega x} = A\operatorname{ch}\omega x + B\operatorname{sh}\omega x$.`,
      why: { 0: String.raw`Erreur de signe : $\cos x$ et $\sin x$ sont les solutions de $y'' + y = 0$ (racines $\pm\mathrm{i}$).`, 1: String.raw`Erreur de cas : les racines $1$ et $-1$ sont distinctes, il n'y a pas de racine double, donc pas de facteur $x$.`, 3: String.raw`Erreur : oublier la seconde solution $\mathrm{e}^{-x}$. Une EDL d'ordre 2 a deux constantes.` } },
    { id: 'm8-q-019', level: 3, topic: 'Second membre exponentiel, ordre 2', sec: 'm8-s-edl2-complete', q: String.raw`Pour $y'' - 3y' + 2y = \mathrm{e}^{x}$, sous quelle forme chercher une solution particulière ?`,
      choices: [String.raw`$\lambda\mathrm{e}^{x}$`, String.raw`$\lambda x^2\mathrm{e}^{x}$`, String.raw`$(\lambda x + \mu)\mathrm{e}^{2x}$`, String.raw`$\lambda x\,\mathrm{e}^{x}$`], answer: 3,
      explain: String.raw`Le polynôme caractéristique $P(r) = (r - 1)(r - 2)$ a $1$ pour racine **simple**, et le second membre est $\mathrm{e}^{1 \cdot x}$ : $\lambda\mathrm{e}^{x}$ est solution homogène et ne peut convenir. On multiplie par $x$ : $y_p = \lambda x\mathrm{e}^{x}$, avec $\lambda = \frac{1}{P'(1)} = -1$.`,
      steps: [
        String.raw`Rappel : pour un second membre $k\mathrm{e}^{mx}$, on cherche $\lambda\mathrm{e}^{mx}$ si $P(m) \neq 0$, $\lambda x\mathrm{e}^{mx}$ si $m$ est racine simple de $P$, $\lambda x^2\mathrm{e}^{mx}$ si $m$ est racine double ($P$ = polynôme caractéristique).`,
        String.raw`$P(r) = r^2 - 3r + 2 = (r - 1)(r - 2)$ et $m = 1$ : $P(1) = 0$, et $1$ est racine simple (l'autre racine est 2).`,
        String.raw`Forme : $y_p = \lambda x\mathrm{e}^{x}$ ; on trouve $\lambda = \frac{1}{P'(1)} = \frac{1}{2 - 3} = -1$.`
      ],
      rule: String.raw`Second membre $k\mathrm{e}^{mx}$ : facteur $x^0$, $x^1$ ou $x^2$ selon que $m$ n'est pas racine, est racine simple ou double de $P$.`,
      why: { 0: String.raw`Erreur : ne pas tester si $m = 1$ est racine. $\lambda\mathrm{e}^{x}$ est solution homogène, le report donne $0 = \mathrm{e}^{x}$.`, 1: String.raw`Erreur : le facteur $x^2$ correspond à une racine **double** ; ici 1 est racine simple.`, 2: String.raw`Erreur : l'exponentielle de $y_p$ doit être celle du second membre, $\mathrm{e}^{x}$, pas $\mathrm{e}^{2x}$.` } },
    { id: 'm8-q-020', level: 3, topic: 'Résonance', sec: 'm8-s-edl2-complete', q: String.raw`Pour $y'' + y = \cos x$, sous quelle forme chercher une solution particulière ?`,
      choices: [String.raw`$\lambda\cos x + \mu\sin x$`, String.raw`$x(\lambda\cos x + \mu\sin x)$`, String.raw`$\lambda x^2\cos x$`, String.raw`$\lambda\cos 2x$`], answer: 1,
      explain: String.raw`Les solutions homogènes de $y'' + y = 0$ sont $C_1\cos x + C_2\sin x$, et le second membre $\cos x$ en fait partie ($\mathrm{i}$ est racine de $r^2 + 1$) : c'est la **résonance**. On multiplie la forme habituelle par $x$ et on trouve $y_p = \frac{x\sin x}{2}$.`,
      steps: [
        String.raw`Rappel : pour un second membre $\cos\omega x$, on cherche $\lambda\cos\omega x + \mu\sin\omega x$, **sauf** si $\mathrm{i}\omega$ est racine de l'équation caractéristique (résonance) : on multiplie alors par $x$.`,
        String.raw`Équation caractéristique : $r^2 + 1 = 0$, racines $\pm\mathrm{i}$. Avec $\omega = 1$, $\mathrm{i}\omega = \mathrm{i}$ est racine : résonance.`,
        String.raw`Forme : $y_p = x(\lambda\cos x + \mu\sin x)$ ; l'identification donne $\lambda = 0$ et $\mu = \frac{1}{2}$, soit $y_p = \frac{x\sin x}{2}$.`
      ],
      rule: String.raw`Résonance ($\mathrm{i}\omega$ racine) : $y_p = x(\lambda\cos\omega x + \mu\sin\omega x)$.`,
      why: { 0: String.raw`Erreur : ne pas détecter la résonance. $\lambda\cos x + \mu\sin x$ est solution homogène, le report donne $0 = \cos x$.`, 2: String.raw`Erreur : $\mathrm{i}$ est racine simple, un seul facteur $x$ suffit ; et il faut aussi prévoir un sinus.`, 3: String.raw`Erreur : la pulsation de $y_p$ est celle du second membre (1), pas 2.` } },
    { id: 'm8-q-021', level: 1, topic: 'Problème de Cauchy, ordre 2', sec: 'm8-s-edl2-complete', q: String.raw`Combien de conditions initiales faut-il pour déterminer une unique solution d'une EDL d'ordre 2 ?`,
      choices: [String.raw`1`, String.raw`2`, String.raw`3`, String.raw`0`], answer: 1,
      explain: String.raw`La solution générale d'une EDL d'ordre 2 contient deux constantes $C_1$ et $C_2$ ; pour les déterminer il faut deux équations, données par $y(x_0)$ **et** $y'(x_0)$. Le théorème de Cauchy garantit qu'avec ces deux conditions la solution existe et est unique.`,
      steps: [
        String.raw`Rappel : une EDL d'ordre $n$ a une solution générale à $n$ constantes arbitraires ; un problème de Cauchy fixe $n$ conditions initiales.`,
        String.raw`Ordre 2 : deux constantes $C_1$, $C_2$, donc deux conditions : la valeur $y(x_0)$ et la pente $y'(x_0)$.`,
        String.raw`On obtient un système $2 \times 2$ en $C_1$, $C_2$, qui a une unique solution (théorème de Cauchy).`
      ],
      rule: String.raw`Ordre $n$ : $n$ constantes, donc $n$ conditions initiales ($y(x_0)$, $y'(x_0)$, …).`,
      why: { 0: String.raw`Erreur : une seule condition laisse une constante libre, donc une infinité de solutions (une condition suffit seulement à l'ordre 1).`, 2: String.raw`Erreur : trois conditions pour deux inconnues $C_1, C_2$ surdéterminent le problème (en général sans solution).`, 3: String.raw`Erreur : sans condition, il reste deux constantes arbitraires, donc une infinité de solutions.` } },
    { id: 'm8-q-022', level: 1, topic: 'Constante de temps RC', sec: 'm8-s-rc-rl', q: String.raw`La constante de temps d'un circuit RC série est :`,
      choices: [String.raw`$\frac{R}{C}$`, String.raw`$\frac{1}{RC}$`, String.raw`$RC$`, String.raw`$\frac{C}{R}$`], answer: 2,
      explain: String.raw`La loi des mailles du circuit RC série donne $RC\,u_C' + u_C = E$, de la forme $\tau u' + u = E$ : la constante de temps est $\tau = RC$. Elle est bien homogène à un temps ($\Omega \times \mathrm{F} = \mathrm{s}$).`,
      steps: [
        String.raw`Rappel : la **constante de temps** $\tau$ d'un circuit du premier ordre se lit sur la forme $\tau u' + u = \text{constante}$ ; les solutions contiennent $\mathrm{e}^{-t/\tau}$.`,
        String.raw`Circuit RC série : $u_R + u_C = E$ avec $u_R = Ri$ et $i = Cu_C'$, donc $RC\,u_C' + u_C = E$.`,
        String.raw`Par identification, $\tau = RC$ ; contrôle d'unités : $\Omega \cdot \mathrm{F} = \mathrm{s}$ ✔.`
      ],
      rule: String.raw`RC : $\tau = RC$ ; RL : $\tau = \frac{L}{R}$.`,
      why: { 0: String.raw`Erreur : $\frac{R}{C}$ n'est pas homogène à un temps ; $\tau$ est le coefficient de $u'$, c'est-à-dire le produit $RC$.`, 1: String.raw`Erreur : $\frac{1}{RC}$ est l'inverse de $\tau$ (en $\mathrm{s}^{-1}$), le coefficient de $u$ dans la forme $u' + \frac{1}{RC}u = \frac{E}{RC}$.`, 3: String.raw`Erreur : $\frac{C}{R}$ n'est pas homogène à un temps.` } },
    { id: 'm8-q-023', level: 1, topic: 'Constante de temps RL', sec: 'm8-s-rc-rl', q: String.raw`La constante de temps d'un circuit RL série est :`,
      choices: [String.raw`$LR$`, String.raw`$\frac{R}{L}$`, String.raw`$\frac{L}{R}$`, String.raw`$\sqrt{LC}$`], answer: 2,
      explain: String.raw`La loi des mailles donne $L\,i' + Ri = E$. Pour lire $\tau$, on divise par $R$ afin d'avoir le coefficient 1 devant $i$ : $\frac{L}{R}\,i' + i = \frac{E}{R}$, donc $\tau = \frac{L}{R}$ (en secondes, $\mathrm{H}/\Omega = \mathrm{s}$).`,
      steps: [
        String.raw`Rappel : la constante de temps $\tau$ se lit sur la forme $\tau\,i' + i = \text{constante}$ (coefficient 1 devant $i$).`,
        String.raw`Circuit RL série : $u_L + u_R = E$ avec $u_L = L\,i'$, donc $L\,i' + Ri = E$.`,
        String.raw`On divise par $R$ : $\frac{L}{R}\,i' + i = \frac{E}{R}$, donc $\tau = \frac{L}{R}$.`
      ],
      rule: String.raw`RL série : $\tau = \frac{L}{R}$.`,
      why: { 0: String.raw`Erreur : imiter $RC$ en écrivant $LR$. Pour normaliser, on **divise** par $R$, d'où $\frac{L}{R}$.`, 1: String.raw`Erreur : $\frac{R}{L}$ est l'inverse de $\tau$ (coefficient de $i$ dans $i' + \frac{R}{L}i = \frac{E}{L}$).`, 3: String.raw`Erreur : $\sqrt{LC} = \frac{1}{\omega_0}$ concerne un circuit contenant bobine **et** condensateur (LC, RLC).` } },
    { id: 'm8-q-024', level: 2, topic: 'Charge d\'un condensateur', sec: 'm8-s-rc-rl', q: String.raw`Lors de la charge d'un condensateur ($u_C(0) = 0$, source $E$), $u_C(t) = $ ?`,
      choices: [String.raw`$E\,\mathrm{e}^{-t/\tau}$`, String.raw`$E\left(1 - \mathrm{e}^{-t/\tau}\right)$`, String.raw`$E\left(1 - \mathrm{e}^{-\tau t}\right)$`, String.raw`$E\left(1 + \mathrm{e}^{-t/\tau}\right)$`], answer: 1,
      explain: String.raw`La solution générale de $\tau u' + u = E$ est $u = E + K\mathrm{e}^{-t/\tau}$ (solution particulière constante $E$ + solution homogène). La condition $u(0) = 0$ donne $K = -E$, d'où $u_C(t) = E\left(1 - \mathrm{e}^{-t/\tau}\right)$, qui part de 0 et tend vers $E$.`,
      steps: [
        String.raw`Rappel : en charge, $\tau u_C' + u_C = E$ ; solution générale = solution particulière constante + solution homogène.`,
        String.raw`$u_p = E$ (car $0 + E = E$) et $u_h = K\mathrm{e}^{-t/\tau}$, donc $u_C = E + K\mathrm{e}^{-t/\tau}$.`,
        String.raw`Condition initiale : $u_C(0) = E + K = 0$, donc $K = -E$ et $u_C(t) = E\left(1 - \mathrm{e}^{-t/\tau}\right)$. Contrôle : $u_C(0) = 0$ et $u_C \to E$ ✔.`
      ],
      rule: String.raw`Charge : $u_C = E\left(1 - \mathrm{e}^{-t/\tau}\right)$ ; décharge : $u_C = U_0\,\mathrm{e}^{-t/\tau}$.`,
      why: { 0: String.raw`Erreur : c'est la loi de **décharge** (elle part de $E$ et tend vers 0), alors qu'ici $u_C(0) = 0$.`, 2: String.raw`Erreur : l'exposant doit être sans dimension, $-\frac{t}{\tau}$, pas $-\tau t$.`, 3: String.raw`Erreur de signe sur $K$ : cette fonction vaut $2E$ en $t = 0$, la condition $u_C(0) = 0$ n'est pas respectée.` } },
    { id: 'm8-q-025', level: 2, topic: 'Constante de temps : lecture', sec: 'm8-s-rc-rl', q: String.raw`En charge, à l'instant $t = \tau$, la tension $u_C$ a atteint environ :`,
      choices: [String.raw`37 % de $E$`, String.raw`50 % de $E$`, String.raw`63 % de $E$`, String.raw`99 % de $E$`], answer: 2,
      explain: String.raw`En charge, $u_C(t) = E\left(1 - \mathrm{e}^{-t/\tau}\right)$, donc $u_C(\tau) = E(1 - \mathrm{e}^{-1})$. Avec $\mathrm{e}^{-1} \approx 0{,}368$, on obtient environ $0{,}632\,E$, soit 63 % de la valeur finale : c'est la méthode graphique classique pour lire $\tau$.`,
      steps: [
        String.raw`Rappel : en charge, $u_C(t) = E\left(1 - \mathrm{e}^{-t/\tau}\right)$ ; la constante de temps mesure la rapidité de la charge.`,
        String.raw`En $t = \tau$ : $u_C(\tau) = E\left(1 - \mathrm{e}^{-1}\right)$.`,
        String.raw`$\mathrm{e}^{-1} \approx 0{,}368$, donc $1 - \mathrm{e}^{-1} \approx 0{,}632$ : environ 63 % de $E$.`
      ],
      rule: String.raw`À $t = \tau$ : 63 % du chemin parcouru (charge) ou 37 % restant (décharge).`,
      why: { 0: String.raw`Erreur : $\mathrm{e}^{-1} \approx 37\ \%$ est la part qui **reste** à parcourir (ou la valeur atteinte en décharge).`, 1: String.raw`Erreur : 50 % est atteint plus tôt, à $t = \tau\ln 2 \approx 0{,}69\,\tau$.`, 3: String.raw`Erreur : 99 % n'est atteint que vers $t = 5\tau$.` } },
    { id: 'm8-q-026', level: 1, topic: 'Régime permanent', sec: 'm8-s-rc-rl', q: String.raw`Au bout de combien de temps considère-t-on en pratique le régime permanent atteint (à 1 % près) ?`,
      choices: [String.raw`$\tau$`, String.raw`$2\tau$`, String.raw`$\tau\ln 2$`, String.raw`$5\tau$`], answer: 3,
      explain: String.raw`L'écart à la valeur finale décroît comme $\mathrm{e}^{-t/\tau}$. À $t = 5\tau$, il vaut $\mathrm{e}^{-5} \approx 0{,}007$, moins de 1 % de l'écart initial : on considère le régime permanent atteint. À $\tau$ et $2\tau$, il reste encore 37 % et 14 %.`,
      steps: [
        String.raw`Rappel : dans un circuit du premier ordre, l'écart entre la grandeur et sa valeur finale est proportionnel à $\mathrm{e}^{-t/\tau}$.`,
        String.raw`Valeurs : $\mathrm{e}^{-1} \approx 0{,}37$, $\mathrm{e}^{-2} \approx 0{,}14$, $\mathrm{e}^{-3} \approx 0{,}05$, $\mathrm{e}^{-5} \approx 0{,}007$.`,
        String.raw`Le premier multiple usuel de $\tau$ où l'écart passe sous 1 % est $5\tau$ : c'est la règle pratique.`
      ],
      rule: String.raw`Régime permanent atteint (à 1 % près) au bout de $5\tau$.`,
      why: { 0: String.raw`Erreur : à $t = \tau$, il reste encore $\mathrm{e}^{-1} \approx 37\ \%$ de l'écart.`, 1: String.raw`Erreur : à $2\tau$, il reste $\mathrm{e}^{-2} \approx 14\ \%$, bien plus que 1 %.`, 2: String.raw`Erreur : $\tau\ln 2$ est le temps de demi-charge (il reste 50 % de l'écart).` } },
    { id: 'm8-q-027', level: 2, topic: 'Pulsation propre RLC', sec: 'm8-s-rlc', q: String.raw`La pulsation propre d'un circuit RLC série est :`,
      choices: [String.raw`$\sqrt{LC}$`, String.raw`$\frac{1}{LC}$`, String.raw`$\frac{R}{L}$`, String.raw`$\frac{1}{\sqrt{LC}}$`], answer: 3,
      explain: String.raw`L'équation du RLC série est $LC\,u'' + RC\,u' + u = E$. En divisant par $LC$, le coefficient de $u$ devient $\frac{1}{LC} = \omega_0^2$, donc la pulsation propre vaut $\omega_0 = \frac{1}{\sqrt{LC}}$ (en rad/s).`,
      steps: [
        String.raw`Rappel : la forme canonique d'un oscillateur du second ordre est $u'' + 2\xi\omega_0u' + \omega_0^2u = \omega_0^2E$, où $\omega_0$ est la **pulsation propre** (pulsation des oscillations sans amortissement).`,
        String.raw`RLC série : $LC\,u'' + RC\,u' + u = E$ ; on divise par $LC$ : $u'' + \frac{R}{L}u' + \frac{1}{LC}u = \frac{E}{LC}$.`,
        String.raw`Identification : $\omega_0^2 = \frac{1}{LC}$, donc $\omega_0 = \frac{1}{\sqrt{LC}}$.`
      ],
      rule: String.raw`RLC série : $\omega_0 = \frac{1}{\sqrt{LC}}$ et $\xi = \frac{R}{2}\sqrt{\frac{C}{L}}$.`,
      why: { 0: String.raw`Erreur : fraction inversée. $\sqrt{LC}$ est homogène à un temps, c'est $\frac{1}{\omega_0}$.`, 1: String.raw`Erreur : $\frac{1}{LC} = \omega_0^2$ ; il manque la racine carrée.`, 2: String.raw`Erreur : $\frac{R}{L} = 2\xi\omega_0$ est le coefficient de $u'$, lié à l'amortissement, pas la pulsation propre.` } },
    { id: 'm8-q-028', level: 2, topic: 'Régime critique RLC', sec: 'm8-s-rlc', q: String.raw`Le régime critique d'un RLC série est obtenu pour $R = $ ?`,
      choices: [String.raw`$\sqrt{\frac{L}{C}}$`, String.raw`$2\sqrt{\frac{L}{C}}$`, String.raw`$2\sqrt{\frac{C}{L}}$`, String.raw`$\frac{1}{\sqrt{LC}}$`], answer: 1,
      explain: String.raw`Le facteur d'amortissement vaut $\xi = \frac{R}{2}\sqrt{\frac{C}{L}}$ (il vient de $\frac{R}{L} = 2\xi\omega_0$). Le régime critique correspond à $\xi = 1$, c'est-à-dire à une racine double, soit $R = 2\sqrt{\frac{L}{C}}$.`,
      steps: [
        String.raw`Rappel : le régime critique d'un oscillateur amorti correspond à une racine double de l'équation caractéristique, c'est-à-dire à $\xi = 1$.`,
        String.raw`Identification : $2\xi\omega_0 = \frac{R}{L}$ avec $\omega_0 = \frac{1}{\sqrt{LC}}$, donc $\xi = \frac{R}{2L}\sqrt{LC} = \frac{R}{2}\sqrt{\frac{C}{L}}$.`,
        String.raw`$\xi = 1 \iff R = \frac{2}{\sqrt{C/L}} = 2\sqrt{\frac{L}{C}}$.`
      ],
      rule: String.raw`Régime critique : $\xi = 1 \iff R_c = 2\sqrt{\frac{L}{C}}$.`,
      why: { 0: String.raw`Erreur : oublier le facteur 2, qui vient de l'écriture $2\xi\omega_0$.`, 2: String.raw`Erreur : rapport inversé. $\sqrt{\frac{L}{C}}$ est en ohms, $\sqrt{\frac{C}{L}}$ en siemens.`, 3: String.raw`Erreur : $\frac{1}{\sqrt{LC}}$ est la pulsation propre (en rad/s), pas une résistance.` } },
    { id: 'm8-q-029', level: 2, topic: 'Régimes d\'un oscillateur', sec: 'm8-s-rlc', q: String.raw`Un oscillateur amorti de facteur d'amortissement $\xi$ est en régime pseudo-périodique lorsque :`,
      choices: [String.raw`$\xi \gt 1$`, String.raw`$\xi = 1$`, String.raw`$0 \lt \xi \lt 1$`, String.raw`$\xi \lt 0$`], answer: 2,
      explain: String.raw`L'équation caractéristique $r^2 + 2\xi\omega_0r + \omega_0^2 = 0$ a pour discriminant réduit $\Delta' = \omega_0^2(\xi^2 - 1)$. Pour $0 \lt \xi \lt 1$, $\Delta' \lt 0$ : racines complexes, donc oscillations amorties (régime pseudo-périodique).`,
      steps: [
        String.raw`Rappel : l'oscillateur amorti s'écrit $y'' + 2\xi\omega_0y' + \omega_0^2y = 0$ ; le régime dépend du signe du discriminant de $r^2 + 2\xi\omega_0r + \omega_0^2 = 0$.`,
        String.raw`Discriminant réduit : $\Delta' = (\xi\omega_0)^2 - \omega_0^2 = \omega_0^2(\xi^2 - 1)$.`,
        String.raw`$\xi \lt 1$ donne $\Delta' \lt 0$ : racines complexes, solutions en $\mathrm{e}^{-\xi\omega_0t}\cos(\dots)$, oscillations amorties. ($\xi = 1$ : critique ; $\xi \gt 1$ : apériodique.)`
      ],
      rule: String.raw`$\xi \lt 1$ : pseudo-périodique ; $\xi = 1$ : critique ; $\xi \gt 1$ : apériodique.`,
      why: { 0: String.raw`Erreur : $\xi \gt 1$ donne $\Delta' \gt 0$, deux racines réelles négatives : régime apériodique, sans oscillation.`, 1: String.raw`Erreur : $\xi = 1$ donne $\Delta' = 0$, racine double : régime critique.`, 3: String.raw`Erreur : un amortissement négatif ferait croître l'amplitude (système instable) ; le régime pseudo-périodique suppose $0 \lt \xi \lt 1$.` } },
    { id: 'm8-q-030', level: 3, topic: 'Pseudo-pulsation', sec: 'm8-s-rlc', q: String.raw`En régime pseudo-périodique, la pseudo-pulsation vaut :`,
      choices: [String.raw`$\omega_0$`, String.raw`$\omega_0\sqrt{1 - \xi^2}$`, String.raw`$\omega_0(1 - \xi^2)$`, String.raw`$\frac{\omega_0}{\sqrt{1 - \xi^2}}$`], answer: 1,
      explain: String.raw`Pour $\xi \lt 1$, les racines de $r^2 + 2\xi\omega_0r + \omega_0^2 = 0$ sont $-\xi\omega_0 \pm \mathrm{i}\omega_0\sqrt{1 - \xi^2}$. La partie imaginaire $\omega_0\sqrt{1 - \xi^2}$ est la pseudo-pulsation ; elle est inférieure à $\omega_0$ car l'amortissement ralentit les oscillations.`,
      steps: [
        String.raw`Rappel : pour des racines $\alpha \pm \mathrm{i}\beta$, les solutions sont $\mathrm{e}^{\alpha t}(C_1\cos\beta t + C_2\sin\beta t)$ : $\beta$ est la pulsation des oscillations, appelée **pseudo-pulsation**.`,
        String.raw`$\Delta' = \omega_0^2(\xi^2 - 1) \lt 0$, donc $\sqrt{-\Delta'} = \omega_0\sqrt{1 - \xi^2}$.`,
        String.raw`Racines : $r = -\xi\omega_0 \pm \mathrm{i}\omega_0\sqrt{1 - \xi^2}$, d'où $\omega = \omega_0\sqrt{1 - \xi^2}$.`
      ],
      rule: String.raw`Pseudo-pulsation : $\omega = \omega_0\sqrt{1 - \xi^2} \lt \omega_0$.`,
      why: { 0: String.raw`Erreur : $\omega_0$ n'est la pulsation des oscillations que sans amortissement ($\xi = 0$).`, 2: String.raw`Erreur : oublier la racine carrée dans $\sqrt{-\Delta'} = \omega_0\sqrt{1 - \xi^2}$.`, 3: String.raw`Erreur : cette valeur est supérieure à $\omega_0$, alors que l'amortissement ralentit les oscillations ; la racine doit être au numérateur.` } },
    { id: 'm8-q-031', level: 2, topic: 'Oscillateur masse-ressort', sec: 'm8-s-rlc', q: String.raw`Période propre d'un oscillateur masse-ressort (masse $m$, raideur $k$, sans frottement) :`,
      choices: [String.raw`$2\pi\sqrt{\frac{k}{m}}$`, String.raw`$\sqrt{\frac{k}{m}}$`, String.raw`$2\pi\sqrt{\frac{m}{k}}$`, String.raw`$2\pi\frac{m}{k}$`], answer: 2,
      explain: String.raw`Le principe fondamental de la dynamique donne $mx'' = -kx$, soit $x'' + \frac{k}{m}x = 0$ : pulsation propre $\omega_0 = \sqrt{\frac{k}{m}}$. La période vaut $T_0 = \frac{2\pi}{\omega_0} = 2\pi\sqrt{\frac{m}{k}}$ : une masse plus lourde oscille plus lentement.`,
      steps: [
        String.raw`Rappel : $x'' + \omega_0^2x = 0$ a des solutions sinusoïdales de pulsation $\omega_0$ et de période $T_0 = \frac{2\pi}{\omega_0}$.`,
        String.raw`PFD : $mx'' = -kx$, donc $x'' + \frac{k}{m}x = 0$ et $\omega_0 = \sqrt{\frac{k}{m}}$.`,
        String.raw`$T_0 = \frac{2\pi}{\omega_0} = 2\pi\sqrt{\frac{m}{k}}$. Contrôle : si $m$ augmente, $T_0$ augmente ✔.`
      ],
      rule: String.raw`Masse-ressort : $\omega_0 = \sqrt{\frac{k}{m}}$ et $T_0 = 2\pi\sqrt{\frac{m}{k}}$.`,
      why: { 0: String.raw`Erreur : rapport inversé (c'est $2\pi\omega_0$). Une masse plus lourde doit osciller plus lentement, donc $m$ au numérateur.`, 1: String.raw`Erreur : $\sqrt{\frac{k}{m}}$ est la pulsation propre $\omega_0$, pas la période.`, 3: String.raw`Erreur : oublier la racine carrée ; $\frac{m}{k}$ est homogène à un temps au carré.` } },
    { id: 'm8-q-032', level: 3, topic: 'Problème de Cauchy, ordre 2', sec: 'm8-s-edl2-complete', q: String.raw`La solution de $y'' + 4y = 0$ avec $y(0) = 0$ et $y'(0) = 2$ est :`,
      choices: [String.raw`$2\sin 2x$`, String.raw`$\cos 2x$`, String.raw`$2\sin x$`, String.raw`$\sin 2x$`], answer: 3,
      explain: String.raw`$r^2 + 4 = 0$ donne $r = \pm 2\mathrm{i}$, donc $y = C_1\cos 2x + C_2\sin 2x$. La condition $y(0) = 0$ impose $C_1 = 0$, puis $y'(0) = 2C_2 = 2$ donne $C_2 = 1$ : $y = \sin 2x$.`,
      steps: [
        String.raw`Rappel : $y'' + \omega^2y = 0$ a pour solutions $C_1\cos\omega x + C_2\sin\omega x$ ; les deux conditions initiales fixent $C_1$ et $C_2$.`,
        String.raw`$r^2 + 4 = 0 \iff r = \pm 2\mathrm{i}$, donc $y = C_1\cos 2x + C_2\sin 2x$.`,
        String.raw`$y(0) = C_1 = 0$. Dérivée : $y' = -2C_1\sin 2x + 2C_2\cos 2x$, donc $y'(0) = 2C_2 = 2$ et $C_2 = 1$.`,
        String.raw`$y = \sin 2x$. Vérification : $y(0) = 0$ ✔, $y'(0) = 2\cos 0 = 2$ ✔, $y'' + 4y = -4\sin 2x + 4\sin 2x = 0$ ✔.`
      ],
      rule: String.raw`Ne pas oublier le facteur $\omega$ en dérivant : $(\sin\omega x)' = \omega\cos\omega x$.`,
      why: { 0: String.raw`Erreur : oublier le facteur 2 de la dérivée de $\sin 2x$. $(2\sin 2x)' = 4\cos 2x$ vaut 4 en 0, pas 2.`, 1: String.raw`Erreur : $\cos 0 = 1 \neq 0$, la condition $y(0) = 0$ n'est pas respectée.`, 2: String.raw`Erreur de pulsation : $\sqrt{4} = 2$. $(2\sin x)'' + 4 \times 2\sin x = 6\sin x \neq 0$, ce n'est pas solution.` } },
    { id: 'm8-q-033', level: 2, topic: 'Principe de superposition', sec: 'm8-s-vocab', q: String.raw`Si $y_1$ vérifie $y' + ay = b_1$ et $y_2$ vérifie $y' + ay = b_2$, alors $y_1 + y_2$ vérifie :`,
      choices: [String.raw`$y' + ay = b_1 + b_2$`, String.raw`$y' + ay = b_1 b_2$`, String.raw`$y' + 2ay = b_1 + b_2$`, String.raw`$y' + ay = 0$`], answer: 0,
      explain: String.raw`Dériver et multiplier par $a$ sont des opérations linéaires : $(y_1 + y_2)' + a(y_1 + y_2) = (y_1' + ay_1) + (y_2' + ay_2) = b_1 + b_2$. C'est le principe de superposition : pour une somme de seconds membres, on additionne les solutions.`,
      steps: [
        String.raw`Rappel (principe de superposition) : pour une équation linéaire, si $y_1$ correspond au second membre $b_1$ et $y_2$ à $b_2$, alors $y_1 + y_2$ correspond à $b_1 + b_2$.`,
        String.raw`Calcul : $(y_1 + y_2)' + a(y_1 + y_2) = y_1' + y_2' + ay_1 + ay_2$.`,
        String.raw`On regroupe : $(y_1' + ay_1) + (y_2' + ay_2) = b_1 + b_2$.`
      ],
      rule: String.raw`Superposition : seconds membres additionnés $\Rightarrow$ solutions particulières additionnées.`,
      why: { 1: String.raw`Erreur : la linéarité transforme une somme en somme, jamais en produit.`, 2: String.raw`Erreur : $a(y_1 + y_2) = ay_1 + ay_2$, le coefficient reste $a$ (il ne double pas).`, 3: String.raw`Erreur : c'est la **différence** $y_1 - y_2$ qui vérifie l'équation homogène, et seulement lorsque $b_1 = b_2$.` } },
    { id: 'm8-q-034', level: 3, topic: 'Zéros des solutions homogènes', sec: 'm8-s-edl1-homogene', q: String.raw`Une solution de $y' + a(x)y = 0$ ($a$ continue sur un intervalle) qui s'annule en un point est :`,
      choices: [String.raw`la fonction nulle`, String.raw`une fonction qui change de signe en ce point`, String.raw`une fonction qui ne s'annule qu'en ce point`, String.raw`impossible : une telle solution n'existe pas`], answer: 0,
      explain: String.raw`Toute solution s'écrit $y = C\mathrm{e}^{-A(x)}$, et une exponentielle ne s'annule jamais. Si $y(x_0) = 0$, alors $C = 0$ : la solution est la fonction nulle. C'est aussi une conséquence de l'unicité de Cauchy, puisque la fonction nulle est déjà une solution qui vaut 0 en $x_0$.`,
      steps: [
        String.raw`Rappel : les solutions de $y' + a(x)y = 0$ sont exactement les fonctions $y = C\mathrm{e}^{-A(x)}$, où $A$ est une primitive de $a$.`,
        String.raw`Si $y(x_0) = 0$ : $C\mathrm{e}^{-A(x_0)} = 0$. Comme $\mathrm{e}^{-A(x_0)} \gt 0$, on a forcément $C = 0$.`,
        String.raw`Donc $y = 0$ partout. Autrement dit, une solution non nulle ne s'annule jamais et garde un signe constant.`
      ],
      rule: String.raw`Une solution non nulle de $y' + a(x)y = 0$ ne s'annule jamais (signe constant).`,
      why: { 1: String.raw`Erreur : $C\mathrm{e}^{-A(x)}$ garde le signe de $C$ sur tout l'intervalle, elle ne peut pas changer de signe.`, 2: String.raw`Erreur : si $C \neq 0$, la solution ne s'annule **nulle part**, puisque l'exponentielle est strictement positive.`, 3: String.raw`Erreur : la fonction nulle existe, elle vérifie l'équation et s'annule partout.` } }
  ],

  /* ======================= EXERCICES ======================= */
  exercises: [
    { id: 'm8-x-001', level: 1, topic: 'Problème de Cauchy, ordre 1', sec: 'm8-s-edl1-homogene', check: 'expr', vars: ['x'],
      prompt: String.raw`Résous le problème de Cauchy $y' + 3y = 0$, $y(0) = 2$. Donne $y(x)$.`,
      answer: '2*exp(-3*x)',
      mistakes: [
        { expr: '2*exp(3*x)', msg: String.raw`Erreur de signe : $y' + 3y = 0$ s'écrit $y' = -3y$, d'où $\mathrm{e}^{-3x}$ (exponentielle décroissante).` },
        { expr: 'exp(-3*x)', msg: String.raw`N'oublie pas la constante : la condition initiale donne $C = y(0) = 2$.` },
        { expr: '2*exp(-x/3)', msg: String.raw`Le coefficient de $x$ dans l'exponentielle est $-a = -3$, pas $-\frac{1}{a}$.` }
      ],
      hint: String.raw`$y' + ay = 0 \iff y = C\mathrm{e}^{-ax}$, et $C = y(0)$.`,
      explain: String.raw`Les solutions sont $y = C\mathrm{e}^{-3x}$ ; la condition $y(0) = C = 2$ donne $y(x) = 2\mathrm{e}^{-3x}$.`,
      steps: [
        String.raw`Rappel : un **problème de Cauchy** est une équation différentielle accompagnée d'une condition initiale. Pour $y' + ay = 0$ ($a$ constante), les solutions sont $y = C\mathrm{e}^{-ax}$ (la dérivée est proportionnelle à la fonction).`,
        String.raw`Solution générale : $y' + 3y = 0 \iff y' = -3y$, donc $y = C\mathrm{e}^{-3x}$, $C \in \mathbb{R}$.`,
        String.raw`Condition initiale : $y(0) = C\mathrm{e}^{0} = C = 2$.`,
        String.raw`Solution : $y(x) = 2\mathrm{e}^{-3x}$. Vérification : $y' = -6\mathrm{e}^{-3x}$, donc $y' + 3y = -6\mathrm{e}^{-3x} + 6\mathrm{e}^{-3x} = 0$ ✔ et $y(0) = 2$ ✔.`
      ],
      rule: String.raw`$y' + ay = 0$, $y(0) = y_0$ : $y = y_0\,\mathrm{e}^{-ax}$.`,
      pitfall: String.raw`Le signe : $y' + 3y = 0$ donne une exponentielle **décroissante** $\mathrm{e}^{-3x}$.` },
    { id: 'm8-x-002', level: 1, topic: 'EDL1 homogène normalisée', sec: 'm8-s-edl1-homogene', check: 'expr', vars: ['x'],
      prompt: String.raw`Résous $2y' + y = 0$ avec $y(0) = 4$.`,
      answer: '4*exp(-x/2)',
      mistakes: [
        { expr: '4*exp(-2*x)', msg: String.raw`Normalise d'abord : $y' + \frac{1}{2}y = 0$, donc l'exposant est $-\frac{x}{2}$ (on divise par 2, on ne multiplie pas).` },
        { expr: '4*exp(-x)', msg: String.raw`Le coefficient de $y'$ vaut 2 : divise toute l'équation par 2 avant d'appliquer la formule.` },
        { expr: '4*exp(x/2)', msg: String.raw`Erreur de signe : $y' = -\frac{1}{2}y$, l'exponentielle est décroissante.` }
      ],
      hint: String.raw`Divise par 2 pour avoir $y' + ay = 0$.`,
      explain: String.raw`On normalise : $y' + \frac{1}{2}y = 0$, donc $y = C\mathrm{e}^{-x/2}$, et $C = y(0) = 4$ : $y = 4\mathrm{e}^{-x/2}$.`,
      steps: [
        String.raw`Rappel : la formule $y = C\mathrm{e}^{-ax}$ vaut pour la forme **normalisée** $y' + ay = 0$ (coefficient 1 devant $y'$).`,
        String.raw`On divise par 2 : $y' + \frac{1}{2}y = 0$, donc $a = \frac{1}{2}$ et $y = C\mathrm{e}^{-x/2}$.`,
        String.raw`Condition initiale : $y(0) = C = 4$.`,
        String.raw`Solution : $y = 4\mathrm{e}^{-x/2}$. Vérification : $y' = -2\mathrm{e}^{-x/2}$, donc $2y' + y = -4\mathrm{e}^{-x/2} + 4\mathrm{e}^{-x/2} = 0$ ✔.`
      ],
      rule: String.raw`$\alpha y' + \beta y = 0 \iff y = C\mathrm{e}^{-\beta x/\alpha}$ (normaliser d'abord).` },
    { id: 'm8-x-003', level: 2, topic: 'EDL1 à coefficient variable', sec: 'm8-s-edl1-homogene', check: 'expr', vars: ['x'],
      prompt: String.raw`Résous $y' + 2xy = 0$ avec $y(0) = 3$.`,
      answer: '3*exp(-x^2)',
      mistakes: [
        { expr: '3*exp(-2*x)', msg: String.raw`Il faut une **primitive** de $a(x) = 2x$ dans l'exponentielle : $A(x) = x^2$.` },
        { expr: '3*exp(x^2)', msg: String.raw`Erreur de signe : $y = C\mathrm{e}^{-A(x)}$.` },
        { expr: '3*exp(-2*x^2)', msg: String.raw`$(2x^2)' = 4x$ : une primitive de $2x$ est $x^2$, pas $2x^2$.` }
      ],
      hint: String.raw`$y = C\mathrm{e}^{-A(x)}$ où $A$ est une primitive de $2x$.`,
      explain: String.raw`$A(x) = x^2$, donc $y = C\mathrm{e}^{-x^2}$ ; $y(0) = C = 3$ : $y = 3\mathrm{e}^{-x^2}$.`,
      steps: [
        String.raw`Rappel : $y' + a(x)y = 0$ ($a$ continue) a pour solutions $y = C\mathrm{e}^{-A(x)}$, où $A$ est **une primitive** de $a$.`,
        String.raw`Ici $a(x) = 2x$, une primitive est $A(x) = x^2$ : solution générale $y = C\mathrm{e}^{-x^2}$.`,
        String.raw`Condition initiale : $y(0) = C\mathrm{e}^{0} = C = 3$.`,
        String.raw`Solution : $y = 3\mathrm{e}^{-x^2}$. Vérification : $y' = -6x\mathrm{e}^{-x^2}$ et $2xy = 6x\mathrm{e}^{-x^2}$, donc $y' + 2xy = 0$ ✔.`
      ],
      rule: String.raw`$y' + a(x)y = 0 \iff y = C\mathrm{e}^{-A(x)}$ avec $A' = a$.` },
    { id: 'm8-x-004', level: 2, topic: 'EDL1 à coefficient variable', sec: 'm8-s-edl1-homogene', check: 'expr', vars: ['x'], domain: [0.3, 4],
      prompt: String.raw`Sur $]0, +\infty[$, résous $xy' + y = 0$ avec $y(1) = 2$.`,
      answer: '2/x',
      mistakes: [
        { expr: '2*x', msg: String.raw`Erreur de signe : $y' = -\frac{y}{x}$ donne $\mathrm{e}^{-\ln x} = \frac{1}{x}$ (et non $\mathrm{e}^{\ln x} = x$).` },
        { expr: '2*exp(1-x)', msg: String.raw`Normalise : le coefficient de $y$ devient $\frac{1}{x}$, dont une primitive est $\ln x$ (pas $x$).` },
        { expr: '1/x', msg: String.raw`Applique la condition initiale : $y(1) = \frac{C}{1} = 2$, donc $C = 2$.` }
      ],
      hint: String.raw`Normalise : $y' + \frac{1}{x}y = 0$, et une primitive de $\frac{1}{x}$ est $\ln x$.`,
      explain: String.raw`$y = C\mathrm{e}^{-\ln x} = \frac{C}{x}$ et $y(1) = C = 2$ : $y = \frac{2}{x}$. (Variante : $(xy)' = xy' + y = 0$, donc $xy$ est constant.)`,
      steps: [
        String.raw`Rappel : pour appliquer $y = C\mathrm{e}^{-A(x)}$, il faut la forme normalisée $y' + a(x)y = 0$ ; on divise donc par $x$ (possible car $x \gt 0$).`,
        String.raw`$y' + \frac{1}{x}y = 0$ : $a(x) = \frac{1}{x}$, une primitive sur $]0, +\infty[$ est $A(x) = \ln x$.`,
        String.raw`Solution générale : $y = C\mathrm{e}^{-\ln x} = \frac{C}{x}$ (car $\mathrm{e}^{-\ln x} = \frac{1}{\mathrm{e}^{\ln x}} = \frac{1}{x}$). Condition : $y(1) = C = 2$.`,
        String.raw`Solution : $y = \frac{2}{x}$. Vérification : $xy' + y = x \times \left(-\frac{2}{x^2}\right) + \frac{2}{x} = 0$ ✔ et $y(1) = 2$ ✔.`
      ],
      rule: String.raw`$\mathrm{e}^{-\ln x} = \frac{1}{x}$ ; normaliser avant d'appliquer $y = C\mathrm{e}^{-A(x)}$.` },
    { id: 'm8-x-005', level: 1, topic: 'Solution particulière constante', sec: 'm8-s-edl1-particuliere', check: 'value', vars: [],
      prompt: String.raw`Donne la solution particulière constante de $y' + 4y = 10$.`,
      answer: '5/2',
      mistakes: [
        { expr: '10', msg: String.raw`$y_p = 10$ donne $0 + 40 \neq 10$ : il faut diviser par $a = 4$.` },
        { expr: '40', msg: String.raw`On divise par $a$, on ne multiplie pas : $4y_p = 10$.` },
        { expr: '2/5', msg: String.raw`Quotient inversé : $y_p = \frac{b}{a} = \frac{10}{4}$, pas $\frac{4}{10}$.` }
      ],
      hint: String.raw`Une constante a une dérivée nulle : $4y_p = 10$.`,
      explain: String.raw`$y_p' = 0$ donc $4y_p = 10$ et $y_p = \frac{10}{4} = \frac{5}{2}$.`,
      steps: [
        String.raw`Rappel : pour $y' + ay = b$ avec $a$, $b$ constantes ($a \neq 0$), on cherche une solution particulière **constante** $y_p = k$ ; sa dérivée est nulle.`,
        String.raw`On remplace : $0 + 4k = 10$.`,
        String.raw`$k = \frac{10}{4} = \frac{5}{2}$. Vérification : $0 + 4 \times \frac{5}{2} = 10$ ✔.`
      ],
      rule: String.raw`$y' + ay = b$ (constantes, $a \neq 0$) : $y_p = \frac{b}{a}$.` },
    { id: 'm8-x-006', level: 2, topic: 'Problème de Cauchy, second membre constant', sec: 'm8-s-edl1-particuliere', check: 'expr', vars: ['x'],
      prompt: String.raw`Résous $y' + 2y = 6$ avec $y(0) = 0$.`,
      answer: '3-3*exp(-2*x)',
      mistakes: [
        { expr: '6-6*exp(-2*x)', msg: String.raw`La solution particulière constante est $\frac{6}{2} = 3$, pas 6.` },
        { expr: '3+3*exp(-2*x)', msg: String.raw`Erreur sur la constante : $y(0) = 3 + C = 0$ donne $C = -3$.` },
        { expr: '-3*exp(-2*x)', msg: String.raw`Tu as oublié d'ajouter $y_p = 3$ à la fin : la solution est $y_p + y_h$.` }
      ],
      hint: String.raw`$y = y_p + C\mathrm{e}^{-2x}$ avec $y_p$ constante ; la condition initiale s'applique à la solution complète.`,
      explain: String.raw`$y_p = 3$ et $y = 3 + C\mathrm{e}^{-2x}$ ; $y(0) = 3 + C = 0$ donne $C = -3$, d'où $y = 3 - 3\mathrm{e}^{-2x}$.`,
      steps: [
        String.raw`Rappel (théorème de structure) : solution générale $= y_p + y_h$. Ici $y_h = C\mathrm{e}^{-2x}$ et, le second membre étant constant, on cherche $y_p$ constante.`,
        String.raw`$y_p = k$ : $0 + 2k = 6$, donc $k = 3$. Solution générale : $y = 3 + C\mathrm{e}^{-2x}$.`,
        String.raw`Condition initiale (sur la solution complète) : $y(0) = 3 + C = 0$, donc $C = -3$.`,
        String.raw`Solution : $y = 3 - 3\mathrm{e}^{-2x}$. Vérification : $y' = 6\mathrm{e}^{-2x}$ et $y' + 2y = 6\mathrm{e}^{-2x} + 6 - 6\mathrm{e}^{-2x} = 6$ ✔, $y(0) = 0$ ✔.`
      ],
      rule: String.raw`$y = y_p + y_h$, puis la condition initiale sur la solution complète.`,
      pitfall: String.raw`On applique la condition initiale à $y_p + y_h$, jamais à $y_h$ seule.` },
    { id: 'm8-x-007', level: 2, topic: 'Second membre polynomial', sec: 'm8-s-edl1-particuliere', check: 'expr', vars: ['x'],
      prompt: String.raw`Résous $y' + y = x$ avec $y(0) = 0$.`,
      answer: 'exp(-x)+x-1',
      mistakes: [
        { expr: 'x-1', msg: String.raw`C'est la solution particulière, mais $y(0) = -1 \neq 0$ : ajoute $C\mathrm{e}^{-x}$ et applique la condition.` },
        { expr: 'x', msg: String.raw`$y = x$ donne $y' + y = 1 + x \neq x$ : cherche $y_p = \alpha x + \beta$.` },
        { expr: 'x-1-exp(-x)', msg: String.raw`Erreur sur la constante : $y(0) = -1 + C = 0$ donne $C = +1$.` }
      ],
      hint: String.raw`Cherche $y_p = \alpha x + \beta$, puis $y = y_p + C\mathrm{e}^{-x}$.`,
      explain: String.raw`$y_p = x - 1$ (identification), puis $y = x - 1 + C\mathrm{e}^{-x}$ et $y(0) = -1 + C = 0$ donne $C = 1$ : $y = \mathrm{e}^{-x} + x - 1$.`,
      steps: [
        String.raw`Rappel : pour un second membre polynomial de degré 1 (et $a \neq 0$), on cherche $y_p = \alpha x + \beta$ ; puis $y = y_p + C\mathrm{e}^{-x}$.`,
        String.raw`$y_p' + y_p = \alpha + \alpha x + \beta = x$ : identification $\alpha = 1$ (coefficient de $x$) et $\alpha + \beta = 0$ (constante), donc $\beta = -1$ et $y_p = x - 1$.`,
        String.raw`Solution générale : $y = x - 1 + C\mathrm{e}^{-x}$. Condition : $y(0) = -1 + C = 0$, donc $C = 1$.`,
        String.raw`Solution : $y = \mathrm{e}^{-x} + x - 1$. Vérification : $y' = -\mathrm{e}^{-x} + 1$ et $y' + y = x$ ✔, $y(0) = 1 + 0 - 1 = 0$ ✔.`
      ],
      rule: String.raw`Second membre polynôme de degré $n$ (et $a \neq 0$) : $y_p$ polynôme de degré $n$.` },
    { id: 'm8-x-008', level: 2, topic: 'Second membre exponentiel', sec: 'm8-s-edl1-particuliere', check: 'expr', vars: ['x'],
      prompt: String.raw`Résous $y' - 2y = \mathrm{e}^{x}$ avec $y(0) = 0$.`,
      answer: 'exp(2*x)-exp(x)',
      mistakes: [
        { expr: '-exp(x)', msg: String.raw`C'est la solution particulière, mais elle vaut $-1$ en 0 : ajoute $C\mathrm{e}^{2x}$.` },
        { expr: 'exp(x)-exp(2*x)', msg: String.raw`Erreur de signe sur $\lambda$ : $\lambda - 2\lambda = -\lambda = 1$ donne $\lambda = -1$.` },
        { expr: 'exp(-2*x)-exp(x)', msg: String.raw`$y' - 2y = 0$ donne $y_h = C\mathrm{e}^{+2x}$ (ici $a = -2$, donc $\mathrm{e}^{-ax} = \mathrm{e}^{2x}$).` }
      ],
      hint: String.raw`$y_h = C\mathrm{e}^{2x}$ ; cherche $y_p = \lambda\mathrm{e}^{x}$.`,
      explain: String.raw`$y_p = -\mathrm{e}^{x}$ (car $\lambda - 2\lambda = 1$), $y = C\mathrm{e}^{2x} - \mathrm{e}^{x}$ et $y(0) = C - 1 = 0$ : $y = \mathrm{e}^{2x} - \mathrm{e}^{x}$.`,
      steps: [
        String.raw`Rappel : $y = y_h + y_p$. Pour $y' - 2y = 0$ ($a = -2$), $y_h = C\mathrm{e}^{2x}$ ; le second membre $\mathrm{e}^{x}$ n'est pas solution homogène, on cherche donc $y_p = \lambda\mathrm{e}^{x}$.`,
        String.raw`$y_p' - 2y_p = \lambda\mathrm{e}^{x} - 2\lambda\mathrm{e}^{x} = -\lambda\mathrm{e}^{x} = \mathrm{e}^{x}$, donc $\lambda = -1$ : $y_p = -\mathrm{e}^{x}$.`,
        String.raw`Solution générale : $y = C\mathrm{e}^{2x} - \mathrm{e}^{x}$. Condition : $y(0) = C - 1 = 0$, donc $C = 1$.`,
        String.raw`Solution : $y = \mathrm{e}^{2x} - \mathrm{e}^{x}$. Vérification : $y' - 2y = (2\mathrm{e}^{2x} - \mathrm{e}^{x}) - (2\mathrm{e}^{2x} - 2\mathrm{e}^{x}) = \mathrm{e}^{x}$ ✔, $y(0) = 0$ ✔.`
      ],
      rule: String.raw`$y' + ay = \mathrm{e}^{mx}$, $m \neq -a$ : $y_p = \frac{\mathrm{e}^{mx}}{m + a}$.` },
    { id: 'm8-x-009', level: 3, topic: 'Résonance au premier ordre', sec: 'm8-s-edl1-particuliere', check: 'expr', vars: ['x'],
      prompt: String.raw`Résous $y' + y = \mathrm{e}^{-x}$ avec $y(0) = 0$.`,
      answer: 'x*exp(-x)',
      mistakes: [
        { expr: '(x+1)*exp(-x)', msg: String.raw`Tu as pris $C = 1$ : impose $y(0) = 0$, ce qui donne $C = 0$.` },
        { expr: 'x*exp(x)', msg: String.raw`Erreur de signe : la solution doit contenir $\mathrm{e}^{-x}$, comme le second membre.` },
        { expr: '-x*exp(-x)', msg: String.raw`Erreur de signe sur $\lambda$ : $y_p' + y_p = \lambda\mathrm{e}^{-x} = \mathrm{e}^{-x}$ donne $\lambda = +1$.` }
      ],
      hint: String.raw`$\mathrm{e}^{-x}$ est solution de l'homogène : cherche $y_p = \lambda x\mathrm{e}^{-x}$.`,
      explain: String.raw`Le second membre est solution homogène, d'où $y_p = \lambda x\mathrm{e}^{-x}$ avec $\lambda = 1$ ; $y = (x + C)\mathrm{e}^{-x}$ et $y(0) = C = 0$ : $y = x\mathrm{e}^{-x}$.`,
      steps: [
        String.raw`Rappel : si le second membre $\mathrm{e}^{mx}$ est solution de l'équation homogène, on cherche $y_p = \lambda x\,\mathrm{e}^{mx}$ (sinon on obtiendrait $0 = \mathrm{e}^{mx}$). Ici $y_h = C\mathrm{e}^{-x}$ et le second membre est $\mathrm{e}^{-x}$ : c'est le cas.`,
        String.raw`$y_p = \lambda x\mathrm{e}^{-x}$ : $y_p' = \lambda(1 - x)\mathrm{e}^{-x}$, donc $y_p' + y_p = \lambda\mathrm{e}^{-x}$ ; on veut $\mathrm{e}^{-x}$, d'où $\lambda = 1$.`,
        String.raw`Solution générale : $y = x\mathrm{e}^{-x} + C\mathrm{e}^{-x} = (x + C)\mathrm{e}^{-x}$. Condition : $y(0) = C = 0$.`,
        String.raw`Solution : $y = x\mathrm{e}^{-x}$. Vérification : $y' = (1 - x)\mathrm{e}^{-x}$, $y' + y = \mathrm{e}^{-x}$ ✔, $y(0) = 0$ ✔.`
      ],
      rule: String.raw`Si $\mathrm{e}^{mx}$ est solution homogène ($m = -a$) : $y_p = \lambda x\,\mathrm{e}^{mx}$.` },
    { id: 'm8-x-010', level: 3, topic: 'Second membre trigonométrique', sec: 'm8-s-edl1-particuliere', check: 'expr', vars: ['x'],
      prompt: String.raw`Résous $y' + y = \cos x$ avec $y(0) = 0$.`,
      answer: '(cos(x)+sin(x)-exp(-x))/2',
      mistakes: [
        { expr: '(cos(x)+sin(x))/2', msg: String.raw`C'est la solution particulière, mais elle vaut $\frac{1}{2}$ en 0 : ajoute $C\mathrm{e}^{-x}$.` },
        { expr: '(cos(x)-sin(x)-exp(-x))/2', msg: String.raw`Erreur dans l'identification : $\mu - \lambda = 0$ donne $\mu = \lambda = +\frac{1}{2}$ (ou, en complexe, $\frac{1}{1 + \mathrm{i}} = \frac{1 - \mathrm{i}}{2}$, ce qui donne $+\sin x$).` },
        { expr: '(cos(x)+sin(x)+exp(-x))/2', msg: String.raw`Erreur sur la constante : $y(0) = \frac{1}{2} + C = 0$ donne $C = -\frac{1}{2}$.` }
      ],
      hint: String.raw`Cherche $y_p = \lambda\cos x + \mu\sin x$ (ou $\operatorname{Re}\frac{\mathrm{e}^{\mathrm{i}x}}{1 + \mathrm{i}}$).`,
      explain: String.raw`$y_p = \frac{\cos x + \sin x}{2}$ (identification), puis $y = y_p + C\mathrm{e}^{-x}$ et $y(0) = \frac{1}{2} + C = 0$ donne $C = -\frac{1}{2}$.`,
      steps: [
        String.raw`Rappel : pour un second membre $\cos x$ (sans résonance, car $y_h = C\mathrm{e}^{-x}$), on cherche $y_p = \lambda\cos x + \mu\sin x$ : il faut les deux, car dériver échange cosinus et sinus.`,
        String.raw`$y_p' + y_p = (-\lambda\sin x + \mu\cos x) + (\lambda\cos x + \mu\sin x) = (\lambda + \mu)\cos x + (\mu - \lambda)\sin x$. Identification avec $\cos x$ : $\lambda + \mu = 1$ et $\mu - \lambda = 0$, donc $\lambda = \mu = \frac{1}{2}$.`,
        String.raw`Solution générale : $y = \frac{\cos x + \sin x}{2} + C\mathrm{e}^{-x}$. Condition : $y(0) = \frac{1}{2} + C = 0$, donc $C = -\frac{1}{2}$.`,
        String.raw`Solution : $y = \frac{\cos x + \sin x - \mathrm{e}^{-x}}{2}$. Vérification : $y(0) = \frac{1 + 0 - 1}{2} = 0$ ✔ ; $y' + y = \cos x$ car $y_p$ convient et $(\mathrm{e}^{-x})' + \mathrm{e}^{-x} = 0$ ✔.`
      ],
      rule: String.raw`Second membre $\cos\omega x$ : $y_p = \lambda\cos\omega x + \mu\sin\omega x$, puis identification des coefficients de $\cos$ et $\sin$.` },
    { id: 'm8-x-011', level: 3, topic: 'Variation de la constante', sec: 'm8-s-edl1-complete', check: 'expr', vars: ['x'],
      prompt: String.raw`Par variation de la constante, résous $y' - y = x\,\mathrm{e}^{x}$ avec $y(0) = 0$.`,
      answer: 'x^2*exp(x)/2',
      mistakes: [
        { expr: 'x*exp(x)', msg: String.raw`$C'(x) = x$ : il faut encore primitiver, $C(x) = \frac{x^2}{2}$.` },
        { expr: 'x^2*exp(x)', msg: String.raw`Une primitive de $x$ est $\frac{x^2}{2}$ : facteur $\frac{1}{2}$ oublié.` },
        { expr: '(x^2/2+1)*exp(x)', msg: String.raw`La condition $y(0) = 0$ impose $K = 0$ (ici $y(0) = 1$).` }
      ],
      hint: String.raw`Pose $y = C(x)\mathrm{e}^{x}$ : tu obtiens $C'(x) = x$.`,
      explain: String.raw`Avec $y = C(x)\mathrm{e}^{x}$ on obtient $C'(x) = x$, donc $C(x) = \frac{x^2}{2} + K$ ; $y(0) = K = 0$ : $y = \frac{x^2}{2}\mathrm{e}^{x}$.`,
      steps: [
        String.raw`Rappel (variation de la constante) : on part de la solution homogène ($y' - y = 0 \iff y = C\mathrm{e}^{x}$) et on remplace la constante par une fonction : $y = C(x)\mathrm{e}^{x}$.`,
        String.raw`$y' = C'(x)\mathrm{e}^{x} + C(x)\mathrm{e}^{x}$, donc $y' - y = C'(x)\mathrm{e}^{x}$. L'équation donne $C'(x)\mathrm{e}^{x} = x\mathrm{e}^{x}$, soit $C'(x) = x$.`,
        String.raw`On primitive : $C(x) = \frac{x^2}{2} + K$, donc $y = \left(\frac{x^2}{2} + K\right)\mathrm{e}^{x}$. Condition : $y(0) = K = 0$.`,
        String.raw`Solution : $y = \frac{x^2}{2}\mathrm{e}^{x}$. Vérification : $y' = \left(x + \frac{x^2}{2}\right)\mathrm{e}^{x}$, donc $y' - y = x\mathrm{e}^{x}$ ✔, $y(0) = 0$ ✔.`
      ],
      rule: String.raw`Variation de la constante : $y = C(x)\mathrm{e}^{-A(x)}$ donne $C'(x) = b(x)\mathrm{e}^{A(x)}$.` },
    { id: 'm8-x-012', level: 3, topic: 'Variation de la constante', sec: 'm8-s-edl1-complete', check: 'expr', vars: ['x'], domain: [0.3, 4],
      prompt: String.raw`Sur $]0, +\infty[$, résous $xy' - y = x^2$ avec $y(1) = 3$.`,
      answer: 'x^2+2*x',
      mistakes: [
        { expr: 'x^3/2+5*x/2', msg: String.raw`En normalisant, divise **aussi** le second membre par $x$ : $y' - \frac{y}{x} = x$.` },
        { expr: 'x^2+3*x', msg: String.raw`Vérifie la condition : $y(1) = 1 + K = 3$ donne $K = 2$.` },
        { expr: 'x^2', msg: String.raw`Tu as oublié la solution homogène $Kx$ : sans elle, impossible d'avoir $y(1) = 3$.` }
      ],
      hint: String.raw`Normalise : $y' - \frac{1}{x}y = x$. Homogène : $y = Cx$. Puis pose $y = C(x)\,x$.`,
      explain: String.raw`$y_h = Cx$ ; avec $y = C(x)x$ on trouve $C'(x) = 1$, donc $y = x^2 + Kx$, et $y(1) = 1 + K = 3$ donne $y = x^2 + 2x$.`,
      steps: [
        String.raw`Rappel : on normalise (division par $x \gt 0$), on résout l'homogène, puis on applique la variation de la constante. Forme normalisée : $y' - \frac{1}{x}y = x$ (le second membre est **aussi** divisé par $x$).`,
        String.raw`Homogène : $a(x) = -\frac{1}{x}$, $A(x) = -\ln x$, donc $y_h = C\mathrm{e}^{\ln x} = Cx$.`,
        String.raw`Variation : $y = C(x)\,x$, $y' = C'(x)x + C(x)$, donc $y' - \frac{y}{x} = C'(x)x = x$ : $C'(x) = 1$, $C(x) = x + K$ et $y = x^2 + Kx$.`,
        String.raw`Condition : $y(1) = 1 + K = 3$, donc $K = 2$ et $y = x^2 + 2x$. Vérification : $xy' - y = x(2x + 2) - (x^2 + 2x) = x^2$ ✔.`
      ],
      rule: String.raw`Normaliser = diviser **toute** l'équation (second membre compris) par le coefficient de $y'$.` },
    { id: 'm8-x-013', level: 2, topic: 'EDL1 à coefficient variable', sec: 'm8-s-edl1-complete', check: 'expr', vars: ['x'],
      prompt: String.raw`Résous $y' + 2xy = x$ avec $y(0) = 1$.`,
      answer: '(1+exp(-x^2))/2',
      mistakes: [
        { expr: 'exp(-x^2)', msg: String.raw`Il manque la solution particulière : une constante convient ($2x \times \frac{1}{2} = x$).` },
        { expr: '1/2+exp(-x^2)', msg: String.raw`Applique $y(0) = 1$ à la solution complète : $\frac{1}{2} + C = 1$, donc $C = \frac{1}{2}$.` },
        { expr: '(1-exp(-x^2))/2', msg: String.raw`Erreur sur la constante : $\frac{1}{2} + C = 1$ donne $C = +\frac{1}{2}$ (ta fonction vaut 0 en 0).` }
      ],
      hint: String.raw`Une solution particulière constante existe : $2x\,y_p = x$.`,
      explain: String.raw`$y_p = \frac{1}{2}$ et $y_h = C\mathrm{e}^{-x^2}$ ; $y(0) = \frac{1}{2} + C = 1$ donne $C = \frac{1}{2}$, donc $y = \frac{1 + \mathrm{e}^{-x^2}}{2}$.`,
      steps: [
        String.raw`Rappel : $y = y_p + y_h$ avec $y_h = C\mathrm{e}^{-A(x)}$. Ici $a(x) = 2x$, $A(x) = x^2$, donc $y_h = C\mathrm{e}^{-x^2}$.`,
        String.raw`Solution particulière : on essaie une constante $k$ ; $0 + 2xk = x$ pour tout $x$ donne $k = \frac{1}{2}$.`,
        String.raw`Solution générale : $y = \frac{1}{2} + C\mathrm{e}^{-x^2}$. Condition : $y(0) = \frac{1}{2} + C = 1$, donc $C = \frac{1}{2}$.`,
        String.raw`Solution : $y = \frac{1 + \mathrm{e}^{-x^2}}{2}$. Vérification : $y' = -x\mathrm{e}^{-x^2}$ et $2xy = x + x\mathrm{e}^{-x^2}$, donc $y' + 2xy = x$ ✔, $y(0) = 1$ ✔.`
      ],
      rule: String.raw`$y = y_p + C\mathrm{e}^{-A(x)}$ ; toujours tester une solution particulière simple (constante) avant la variation de la constante.` },
    { id: 'm8-x-014', level: 1, topic: 'Constante de temps RC', sec: 'm8-s-rc-rl', check: 'value', vars: [],
      prompt: String.raw`Un circuit RC série a $R = 10\ \mathrm{k}\Omega$ et $C = 100\ \mu\mathrm{F}$. Donne la constante de temps $\tau$ en secondes.`,
      answer: '1',
      mistakes: [
        { expr: '1000', msg: String.raw`Convertis : $10\ \mathrm{k}\Omega = 10^4\ \Omega$ et $100\ \mu\mathrm{F} = 10^{-4}\ \mathrm{F}$ (et non $10^{-1}$).` },
        { expr: '0.001', msg: String.raw`Tu as oublié le préfixe k : $10\ \mathrm{k}\Omega = 10^4\ \Omega$ (et non $10\ \Omega$).` }
      ],
      hint: String.raw`$\tau = RC$ en unités SI.`,
      explain: String.raw`En unités SI, $\tau = RC = 10^4 \times 10^{-4} = 1\ \mathrm{s}$.`,
      steps: [
        String.raw`Rappel : la constante de temps d'un circuit RC est $\tau = RC$ ; en ohms et farads, elle s'exprime en secondes.`,
        String.raw`Conversions : $R = 10\ \mathrm{k}\Omega = 10 \times 10^{3} = 10^4\ \Omega$ ; $C = 100\ \mu\mathrm{F} = 100 \times 10^{-6} = 10^{-4}\ \mathrm{F}$.`,
        String.raw`$\tau = 10^4 \times 10^{-4} = 1\ \mathrm{s}$.`
      ],
      rule: String.raw`$\tau = RC$ ; préfixes : $\mathrm{k} = 10^3$, $\mathrm{m} = 10^{-3}$, $\mu = 10^{-6}$.` },
    { id: 'm8-x-015', level: 2, topic: 'Constante de temps RL', sec: 'm8-s-rc-rl', check: 'value', vars: [],
      prompt: String.raw`Un circuit RL série a $L = 0{,}1\ \mathrm{H}$ et $R = 50\ \Omega$. Donne la constante de temps en secondes (nombre décimal ou fraction).`,
      answer: '0.002',
      mistakes: [
        { expr: '5', msg: String.raw`$\tau = \frac{L}{R}$, pas $LR$ : pour normaliser $L\,i' + Ri = E$, on divise par $R$.` },
        { expr: '500', msg: String.raw`$\frac{R}{L}$ est l'inverse de la constante de temps : $\tau = \frac{L}{R}$.` }
      ],
      hint: String.raw`$\tau = \frac{L}{R}$.`,
      explain: String.raw`$\tau = \frac{L}{R} = \frac{0{,}1}{50} = 0{,}002\ \mathrm{s} = 2\ \mathrm{ms}$.`,
      steps: [
        String.raw`Rappel : pour un circuit RL, $L\,i' + Ri = E$ ; en divisant par $R$ : $\frac{L}{R}\,i' + i = \frac{E}{R}$, donc $\tau = \frac{L}{R}$.`,
        String.raw`$\tau = \frac{0{,}1}{50} = \frac{1}{500} = 0{,}002\ \mathrm{s}$.`,
        String.raw`Soit $2\ \mathrm{ms}$ ; contrôle d'unités : $\mathrm{H}/\Omega = \mathrm{s}$ ✔.`
      ],
      rule: String.raw`RL série : $\tau = \frac{L}{R}$.` },
    { id: 'm8-x-016', level: 2, topic: 'Charge d\'un condensateur', sec: 'm8-s-rc-rl', check: 'expr', vars: ['t'], domain: [0, 3],
      prompt: String.raw`Un condensateur initialement déchargé se charge sous $E = 5\ \mathrm{V}$ avec $\tau = 0{,}5\ \mathrm{s}$. Donne $u_C(t)$ (variable $t$).`,
      answer: '5*(1-exp(-2*t))',
      mistakes: [
        { expr: '5*(1-exp(-t/2))', msg: String.raw`L'exponentielle est $\mathrm{e}^{-t/\tau} = \mathrm{e}^{-t/0{,}5} = \mathrm{e}^{-2t}$.` },
        { expr: '5*exp(-2*t)', msg: String.raw`C'est une décharge : en charge, $u_C(0) = 0$ et $u_C \to E$.` },
        { expr: '5-exp(-2*t)', msg: String.raw`La constante vaut $K = -E = -5$ : $u_C(0) = 5 + K = 0$ (ta fonction vaut 4 en 0).` }
      ],
      hint: String.raw`$u_C(t) = E\left(1 - \mathrm{e}^{-t/\tau}\right)$.`,
      explain: String.raw`$u_C = E + K\mathrm{e}^{-t/\tau}$ avec $\frac{1}{\tau} = 2$ et $K = -5$ : $u_C(t) = 5\left(1 - \mathrm{e}^{-2t}\right)$.`,
      steps: [
        String.raw`Rappel : en charge, $\tau u_C' + u_C = E$ ; solution générale $u_C = E + K\mathrm{e}^{-t/\tau}$ (solution particulière constante $E$ + solution homogène).`,
        String.raw`Ici $E = 5$ et $\frac{1}{\tau} = \frac{1}{0{,}5} = 2\ \mathrm{s}^{-1}$ : $u_C = 5 + K\mathrm{e}^{-2t}$.`,
        String.raw`Condition initiale (condensateur déchargé) : $u_C(0) = 5 + K = 0$, donc $K = -5$.`,
        String.raw`$u_C(t) = 5\left(1 - \mathrm{e}^{-2t}\right)$. Vérification : $0{,}5\,u_C' + u_C = 0{,}5 \times 10\mathrm{e}^{-2t} + 5 - 5\mathrm{e}^{-2t} = 5$ ✔.`
      ],
      rule: String.raw`Charge : $u_C(t) = E\left(1 - \mathrm{e}^{-t/\tau}\right)$.` },
    { id: 'm8-x-017', level: 2, topic: 'Décharge d\'un condensateur', sec: 'm8-s-rc-rl', check: 'expr', vars: ['t'], domain: [0, 3],
      prompt: String.raw`Un condensateur chargé sous $U_0 = 12\ \mathrm{V}$ se décharge dans une résistance avec $\tau = 2\ \mathrm{s}$. Donne $u_C(t)$.`,
      answer: '12*exp(-t/2)',
      mistakes: [
        { expr: '12*exp(-2*t)', msg: String.raw`$\mathrm{e}^{-t/\tau}$ avec $\tau = 2$ donne $\mathrm{e}^{-t/2}$.` },
        { expr: '12*(1-exp(-t/2))', msg: String.raw`C'est une charge ; en décharge, $u_C(0) = U_0$ et $u_C \to 0$.` },
        { expr: '12*exp(t/2)', msg: String.raw`Erreur de signe : la tension doit décroître vers 0, donc $\mathrm{e}^{-t/2}$.` }
      ],
      hint: String.raw`$RC\,u' + u = 0$ avec $u(0) = U_0$.`,
      explain: String.raw`Sans source, $\tau u_C' + u_C = 0$, donc $u_C = K\mathrm{e}^{-t/\tau}$ avec $K = U_0$ : $u_C(t) = 12\,\mathrm{e}^{-t/2}$.`,
      steps: [
        String.raw`Rappel : en décharge (pas de source), $\tau u_C' + u_C = 0$, dont les solutions sont $u_C = K\mathrm{e}^{-t/\tau}$.`,
        String.raw`Avec $\tau = 2$ : $u_C = K\mathrm{e}^{-t/2}$.`,
        String.raw`Condition initiale : $u_C(0) = K = U_0 = 12$.`,
        String.raw`$u_C(t) = 12\,\mathrm{e}^{-t/2}$. Vérification : $2u_C' + u_C = 2 \times (-6\mathrm{e}^{-t/2}) + 12\mathrm{e}^{-t/2} = 0$ ✔.`
      ],
      rule: String.raw`Décharge : $u_C(t) = U_0\,\mathrm{e}^{-t/\tau}$.` },
    { id: 'm8-x-018', level: 2, topic: 'Constante de temps : lecture', sec: 'm8-s-rc-rl', check: 'value', vars: [],
      prompt: String.raw`Lors de la charge d'un condensateur ($u_C(0) = 0$), donne la valeur exacte du rapport $\frac{u_C(\tau)}{E}$.`,
      answer: '1-exp(-1)',
      mistakes: [
        { expr: 'exp(-1)', msg: String.raw`$\mathrm{e}^{-1} \approx 37\ \%$ est ce qui **reste** à parcourir ; la part atteinte est $1 - \mathrm{e}^{-1}$.` },
        { expr: '0.63', msg: String.raw`C'est une valeur approchée ; donne la valeur exacte avec exp.` },
        { expr: '1', msg: String.raw`La valeur finale $E$ n'est atteinte que quand $t \to +\infty$ ; à $t = \tau$ on n'en est qu'à $1 - \mathrm{e}^{-1}$.` }
      ],
      hint: String.raw`$u_C(t) = E(1 - \mathrm{e}^{-t/\tau})$, évalue en $t = \tau$.`,
      explain: String.raw`$\frac{u_C(\tau)}{E} = 1 - \mathrm{e}^{-1} \approx 0{,}632$ : 63 % de la valeur finale.`,
      steps: [
        String.raw`Rappel : en charge à partir de 0, $u_C(t) = E\left(1 - \mathrm{e}^{-t/\tau}\right)$.`,
        String.raw`En $t = \tau$ : $\frac{t}{\tau} = 1$, donc $u_C(\tau) = E\left(1 - \mathrm{e}^{-1}\right)$.`,
        String.raw`$\frac{u_C(\tau)}{E} = 1 - \mathrm{e}^{-1} \approx 1 - 0{,}368 = 0{,}632$ : 63 % de la valeur finale.`
      ],
      rule: String.raw`À $t = \tau$, la charge a parcouru $1 - \mathrm{e}^{-1} \approx 63\ \%$ du chemin.` },
    { id: 'm8-x-019', level: 2, topic: 'Temps de demi-charge', sec: 'm8-s-rc-rl', check: 'value', vars: [],
      prompt: String.raw`Un condensateur se charge avec $\tau = 2\ \mathrm{s}$. Au bout de combien de temps (valeur exacte, en s) $u_C$ atteint-elle $\frac{E}{2}$ ?`,
      answer: '2*ln(2)',
      mistakes: [
        { expr: '1', msg: String.raw`Ce n'est pas $\frac{\tau}{2}$ : la charge n'est pas linéaire, résous $\mathrm{e}^{-t/\tau} = \frac{1}{2}$.` },
        { expr: 'ln(2)/2', msg: String.raw`$t = \tau\ln 2$ : on multiplie par $\tau$, on ne divise pas.` },
        { expr: 'ln(2)', msg: String.raw`C'est le résultat pour $\tau = 1$ ; ici $t = \tau\ln 2 = 2\ln 2$.` }
      ],
      hint: String.raw`Résous $1 - \mathrm{e}^{-t/2} = \frac{1}{2}$.`,
      explain: String.raw`$\mathrm{e}^{-t/2} = \frac{1}{2} \iff -\frac{t}{2} = -\ln 2 \iff t = 2\ln 2 \approx 1{,}39\ \mathrm{s}$.`,
      steps: [
        String.raw`Rappel : en charge, $u_C(t) = E\left(1 - \mathrm{e}^{-t/\tau}\right)$ ; on cherche $t$ tel que $u_C(t) = \frac{E}{2}$.`,
        String.raw`$1 - \mathrm{e}^{-t/2} = \frac{1}{2} \iff \mathrm{e}^{-t/2} = \frac{1}{2}$.`,
        String.raw`On prend le logarithme : $-\frac{t}{2} = \ln\frac{1}{2} = -\ln 2$, donc $t = 2\ln 2$.`,
        String.raw`Ordre de grandeur : $2\ln 2 \approx 1{,}39\ \mathrm{s}$, inférieur à $\tau = 2\ \mathrm{s}$ (à $\tau$ on est déjà à 63 %) ✔.`
      ],
      rule: String.raw`Temps de demi-charge : $t_{1/2} = \tau\ln 2$.` },
    { id: 'm8-x-020', level: 2, topic: 'Établissement du courant RL', sec: 'm8-s-rc-rl', check: 'expr', vars: ['t'], domain: [0, 2],
      prompt: String.raw`Circuit RL série : $E = 10\ \mathrm{V}$, $R = 5\ \Omega$, $L = 1\ \mathrm{H}$, $i(0) = 0$. Donne $i(t)$ en ampères.`,
      answer: '2*(1-exp(-5*t))',
      mistakes: [
        { expr: '2*(1-exp(-t/5))', msg: String.raw`$\tau = \frac{L}{R} = 0{,}2\ \mathrm{s}$, donc $\mathrm{e}^{-t/\tau} = \mathrm{e}^{-5t}$.` },
        { expr: '10*(1-exp(-5*t))', msg: String.raw`L'intensité finale est $\frac{E}{R} = 2\ \mathrm{A}$, pas $E$.` },
        { expr: '2*exp(-5*t)', msg: String.raw`Le courant part de $i(0) = 0$ et s'établit : c'est $2(1 - \mathrm{e}^{-5t})$, pas une décroissance.` }
      ],
      hint: String.raw`$L\,i' + Ri = E$ : $i_\infty = \frac{E}{R}$ et $\tau = \frac{L}{R}$.`,
      explain: String.raw`$i' + 5i = 10$ : $i_\infty = 2$ A et $\tau = 0{,}2$ s ; avec $i(0) = 0$ : $i(t) = 2\left(1 - \mathrm{e}^{-5t}\right)$.`,
      steps: [
        String.raw`Rappel : loi des mailles du RL série, $L\,i' + Ri = E$. Solution générale : $i = i_\infty + K\mathrm{e}^{-t/\tau}$ avec $i_\infty = \frac{E}{R}$ (régime permanent, $i' = 0$) et $\tau = \frac{L}{R}$.`,
        String.raw`Valeurs : $i_\infty = \frac{10}{5} = 2\ \mathrm{A}$ et $\tau = \frac{1}{5} = 0{,}2\ \mathrm{s}$, donc $\frac{1}{\tau} = 5$ : $i = 2 + K\mathrm{e}^{-5t}$.`,
        String.raw`Condition initiale : $i(0) = 2 + K = 0$, donc $K = -2$.`,
        String.raw`$i(t) = 2\left(1 - \mathrm{e}^{-5t}\right)$. Vérification : $i' + 5i = 10\mathrm{e}^{-5t} + 10 - 10\mathrm{e}^{-5t} = 10$ ✔ (équation $L\,i' + Ri = E$ avec $L = 1$).`
      ],
      rule: String.raw`RL : $i(t) = \frac{E}{R}\left(1 - \mathrm{e}^{-t/\tau}\right)$ avec $\tau = \frac{L}{R}$.` },
    { id: 'm8-x-021', level: 1, topic: 'Équation caractéristique', sec: 'm8-s-edl2-homogene', check: 'set', vars: [],
      prompt: String.raw`Donne les racines de l'équation caractéristique de $y'' - 3y' + 2y = 0$ (sépare-les par ;).`,
      answer: '1;2',
      mistakes: [
        { expr: '-1;-2', msg: String.raw`Erreur de signe : les racines de $r^2 - 3r + 2$ ont pour somme $-\frac{b}{a} = +3$.` },
        { expr: '2;4', msg: String.raw`Tu as oublié de diviser par $2a = 2$ : $r = \frac{3 \pm 1}{2}$.` }
      ],
      hint: String.raw`$r^2 - 3r + 2 = 0$ : somme 3, produit 2.`,
      explain: String.raw`L'équation caractéristique est $r^2 - 3r + 2 = (r - 1)(r - 2) = 0$ : racines 1 et 2.`,
      steps: [
        String.raw`Rappel : l'équation caractéristique de $ay'' + by' + cy = 0$ est $ar^2 + br + c = 0$ (obtenue en essayant $y = \mathrm{e}^{rx}$) : ici $r^2 - 3r + 2 = 0$.`,
        String.raw`$\Delta = (-3)^2 - 4 \times 1 \times 2 = 9 - 8 = 1$, donc $r = \frac{3 \pm 1}{2}$ : $r_1 = 1$ et $r_2 = 2$.`,
        String.raw`Contrôle : somme $1 + 2 = 3 = -\frac{b}{a}$ et produit $1 \times 2 = 2 = \frac{c}{a}$ ✔. Les solutions de l'EDO seront $C_1\mathrm{e}^{x} + C_2\mathrm{e}^{2x}$.`
      ],
      rule: String.raw`Équation caractéristique $ar^2 + br + c = 0$ ; $r_1 + r_2 = -\frac{b}{a}$ et $r_1r_2 = \frac{c}{a}$.` },
    { id: 'm8-x-022', level: 2, topic: 'Équation caractéristique, Δ < 0', sec: 'm8-s-edl2-homogene', check: 'set', vars: [],
      prompt: String.raw`Donne les racines (complexes) de l'équation caractéristique de $y'' + 2y' + 5y = 0$ (sépare-les par ;).`,
      answer: '-1+2*i;-1-2*i',
      mistakes: [
        { expr: '1+2*i;1-2*i', msg: String.raw`Erreur de signe : la partie réelle est $-\frac{b}{2a} = -1$.` },
        { expr: '-2+4*i;-2-4*i', msg: String.raw`Tu as oublié de diviser par $2a = 2$ : $r = \frac{-2 \pm 4\mathrm{i}}{2}$.` }
      ],
      hint: String.raw`$\Delta = 4 - 20 = -16$.`,
      explain: String.raw`$r^2 + 2r + 5 = 0$ a pour discriminant $-16 = (4\mathrm{i})^2$, donc $r = \frac{-2 \pm 4\mathrm{i}}{2} = -1 \pm 2\mathrm{i}$.`,
      steps: [
        String.raw`Rappel : équation caractéristique $ar^2 + br + c = 0$ ; si $\Delta \lt 0$, ses racines sont complexes conjuguées, $\frac{-b \pm \mathrm{i}\sqrt{-\Delta}}{2a}$. Ici $r^2 + 2r + 5 = 0$.`,
        String.raw`$\Delta = 2^2 - 4 \times 5 = 4 - 20 = -16$, donc $\sqrt{-\Delta} = 4$.`,
        String.raw`$r = \frac{-2 \pm 4\mathrm{i}}{2} = -1 \pm 2\mathrm{i}$.`,
        String.raw`Contrôle : somme $-2 = -\frac{b}{a}$ ✔, produit $(-1)^2 + 2^2 = 5 = \frac{c}{a}$ ✔. Les solutions de l'EDO seront $\mathrm{e}^{-x}(C_1\cos 2x + C_2\sin 2x)$.`
      ],
      rule: String.raw`$\Delta \lt 0$ : $r = \alpha \pm \mathrm{i}\beta$ avec $\alpha = -\frac{b}{2a}$, $\beta = \frac{\sqrt{-\Delta}}{2a}$.` },
    { id: 'm8-x-023', level: 1, topic: 'Équation caractéristique', sec: 'm8-s-edl2-homogene', check: 'set', vars: [],
      prompt: String.raw`Donne les racines de l'équation caractéristique de $y'' + 9y = 0$ (sépare-les par ;).`,
      answer: '3*i;-3*i',
      mistakes: [
        { expr: '3;-3', msg: String.raw`$3^2 = +9$ : ce sont les racines de $r^2 - 9 = 0$. Ici $r^2 = -9$, il faut des imaginaires purs.` },
        { expr: '9*i;-9*i', msg: String.raw`$(9\mathrm{i})^2 = -81$ : il faut prendre la racine, $r = \pm\mathrm{i}\sqrt{9} = \pm 3\mathrm{i}$.` }
      ],
      hint: String.raw`$r^2 + 9 = 0$.`,
      explain: String.raw`$r^2 = -9 = (3\mathrm{i})^2$, donc $r = \pm 3\mathrm{i}$, d'où $y = C_1\cos 3x + C_2\sin 3x$.`,
      steps: [
        String.raw`Rappel : on remplace $y''$ par $r^2$ et $y$ par 1 : l'équation caractéristique de $y'' + 9y = 0$ est $r^2 + 9 = 0$.`,
        String.raw`$r^2 = -9 = 9\mathrm{i}^2 = (3\mathrm{i})^2$, donc $r = 3\mathrm{i}$ ou $r = -3\mathrm{i}$.`,
        String.raw`Conséquence : $\alpha = 0$ et $\beta = 3$, les solutions de l'EDO sont $y = C_1\cos 3x + C_2\sin 3x$ (oscillations de pulsation 3).`
      ],
      rule: String.raw`$r^2 + \omega^2 = 0 \iff r = \pm\mathrm{i}\omega$.` },
    { id: 'm8-x-024', level: 2, topic: 'Problème de Cauchy, ordre 2', sec: 'm8-s-edl2-homogene', check: 'expr', vars: ['x'],
      prompt: String.raw`Résous $y'' - 3y' + 2y = 0$ avec $y(0) = 0$ et $y'(0) = 1$.`,
      answer: 'exp(2*x)-exp(x)',
      mistakes: [
        { expr: 'exp(x)-exp(2*x)', msg: String.raw`Erreur de signe : $C_1 + C_2 = 0$ et $C_1 + 2C_2 = 1$ donnent $C_2 = 1$, $C_1 = -1$.` },
        { expr: 'x*exp(x)', msg: String.raw`La forme $(C_1x + C_2)\mathrm{e}^{rx}$ est réservée à une racine double ; ici les racines 1 et 2 sont distinctes. $x\mathrm{e}^{x}$ vérifie les conditions initiales mais pas l'équation.` }
      ],
      hint: String.raw`$y = C_1\mathrm{e}^{x} + C_2\mathrm{e}^{2x}$ ; écris $y(0)$ et $y'(0)$.`,
      explain: String.raw`Racines 1 et 2, donc $y = C_1\mathrm{e}^{x} + C_2\mathrm{e}^{2x}$ ; les conditions donnent $C_1 + C_2 = 0$ et $C_1 + 2C_2 = 1$, soit $y = \mathrm{e}^{2x} - \mathrm{e}^{x}$.`,
      steps: [
        String.raw`Rappel : pour $ay'' + by' + cy = 0$, on résout l'équation caractéristique, on écrit la solution générale (deux constantes), puis les deux conditions $y(0)$ et $y'(0)$ fixent $C_1$ et $C_2$.`,
        String.raw`Équation caractéristique : $r^2 - 3r + 2 = (r - 1)(r - 2) = 0$, racines 1 et 2. Solution générale : $y = C_1\mathrm{e}^{x} + C_2\mathrm{e}^{2x}$.`,
        String.raw`Conditions : $y(0) = C_1 + C_2 = 0$ ; $y' = C_1\mathrm{e}^{x} + 2C_2\mathrm{e}^{2x}$, donc $y'(0) = C_1 + 2C_2 = 1$.`,
        String.raw`En soustrayant les deux équations : $C_2 = 1$, puis $C_1 = -1$. Solution : $y = \mathrm{e}^{2x} - \mathrm{e}^{x}$.`,
        String.raw`Vérification : $y(0) = 1 - 1 = 0$ ✔, $y'(0) = 2 - 1 = 1$ ✔, et $y'' - 3y' + 2y = (4 - 6 + 2)\mathrm{e}^{2x} - (1 - 3 + 2)\mathrm{e}^{x} = 0$ ✔.`
      ],
      rule: String.raw`$\Delta \gt 0$ : $y = C_1\mathrm{e}^{r_1x} + C_2\mathrm{e}^{r_2x}$, puis système en $C_1$, $C_2$.` },
    { id: 'm8-x-025', level: 2, topic: 'Oscillateur harmonique', sec: 'm8-s-edl2-homogene', check: 'expr', vars: ['x'],
      prompt: String.raw`Résous $y'' + 4y = 0$ avec $y(0) = 1$ et $y'(0) = 2$.`,
      answer: 'cos(2*x)+sin(2*x)',
      mistakes: [
        { expr: 'cos(2*x)+2*sin(2*x)', msg: String.raw`$(C_2\sin 2x)' = 2C_2\cos 2x$ : $y'(0) = 2C_2 = 2$ donne $C_2 = 1$ (n'oublie pas le facteur 2 de la dérivée).` },
        { expr: 'cos(4*x)+sin(4*x)/2', msg: String.raw`La pulsation est $\sqrt{4} = 2$, pas 4.` },
        { expr: 'cos(2*x)', msg: String.raw`Ta fonction vérifie $y(0) = 1$ mais $y'(0) = 0 \neq 2$ : il manque le terme en $\sin 2x$.` }
      ],
      hint: String.raw`$y = C_1\cos 2x + C_2\sin 2x$.`,
      explain: String.raw`$r = \pm 2\mathrm{i}$ donc $y = C_1\cos 2x + C_2\sin 2x$ ; $y(0) = C_1 = 1$ et $y'(0) = 2C_2 = 2$ : $y = \cos 2x + \sin 2x$.`,
      steps: [
        String.raw`Rappel : $y'' + \omega^2y = 0$ a pour solutions $C_1\cos\omega x + C_2\sin\omega x$ ; deux conditions initiales fixent $C_1$ et $C_2$.`,
        String.raw`Équation caractéristique : $r^2 + 4 = 0$, $r = \pm 2\mathrm{i}$, donc $y = C_1\cos 2x + C_2\sin 2x$.`,
        String.raw`$y(0) = C_1 = 1$. Dérivée : $y' = -2C_1\sin 2x + 2C_2\cos 2x$, donc $y'(0) = 2C_2 = 2$ et $C_2 = 1$.`,
        String.raw`Solution : $y = \cos 2x + \sin 2x$. Vérification : $y(0) = 1$ ✔, $y'(0) = 2$ ✔, $y'' = -4y$ donc $y'' + 4y = 0$ ✔.`
      ],
      rule: String.raw`$y'' + \omega^2y = 0$, $y(0) = y_0$, $y'(0) = v_0$ : $y = y_0\cos\omega x + \frac{v_0}{\omega}\sin\omega x$.` },
    { id: 'm8-x-026', level: 2, topic: 'EDL2 homogène, Δ = 0', sec: 'm8-s-edl2-homogene', check: 'expr', vars: ['x'],
      prompt: String.raw`Résous $y'' + 2y' + y = 0$ avec $y(0) = 1$ et $y'(0) = 0$.`,
      answer: '(1+x)*exp(-x)',
      mistakes: [
        { expr: 'exp(-x)', msg: String.raw`Racine double : $y = (C_1x + C_2)\mathrm{e}^{-x}$. Ici $y'(0) = -1 \neq 0$, il manque le terme en $x\mathrm{e}^{-x}$.` },
        { expr: '(1-x)*exp(-x)', msg: String.raw`Erreur de signe : $y'(0) = C_1 - C_2 = 0$ donne $C_1 = C_2 = 1$.` },
        { expr: '(1+x)*exp(x)', msg: String.raw`La racine double est $-1$ : l'exponentielle est $\mathrm{e}^{-x}$.` }
      ],
      hint: String.raw`$(r + 1)^2 = 0$ : $y = (C_1x + C_2)\mathrm{e}^{-x}$.`,
      explain: String.raw`Racine double $-1$, donc $y = (C_1x + C_2)\mathrm{e}^{-x}$ ; $y(0) = C_2 = 1$ et $y'(0) = C_1 - C_2 = 0$ : $y = (1 + x)\mathrm{e}^{-x}$.`,
      steps: [
        String.raw`Rappel : si l'équation caractéristique a une racine double $r_0$, les solutions sont $y = (C_1x + C_2)\mathrm{e}^{r_0x}$.`,
        String.raw`$r^2 + 2r + 1 = (r + 1)^2 = 0$ : racine double $-1$, donc $y = (C_1x + C_2)\mathrm{e}^{-x}$.`,
        String.raw`$y(0) = C_2 = 1$. Dérivée : $y' = C_1\mathrm{e}^{-x} - (C_1x + C_2)\mathrm{e}^{-x} = (C_1 - C_2 - C_1x)\mathrm{e}^{-x}$, donc $y'(0) = C_1 - C_2 = 0$ et $C_1 = 1$.`,
        String.raw`Solution : $y = (1 + x)\mathrm{e}^{-x}$. Vérification : $y' = -x\mathrm{e}^{-x}$, $y'' = (x - 1)\mathrm{e}^{-x}$ et $y'' + 2y' + y = (x - 1 - 2x + 1 + x)\mathrm{e}^{-x} = 0$ ✔ ; $y(0) = 1$, $y'(0) = 0$ ✔.`
      ],
      rule: String.raw`$\Delta = 0$ : $y = (C_1x + C_2)\mathrm{e}^{r_0x}$, $r_0 = -\frac{b}{2a}$.` },
    { id: 'm8-x-027', level: 3, topic: 'EDL2 homogène, Δ < 0', sec: 'm8-s-edl2-homogene', check: 'expr', vars: ['x'],
      prompt: String.raw`Résous $y'' + 2y' + 5y = 0$ avec $y(0) = 0$ et $y'(0) = 2$.`,
      answer: 'exp(-x)*sin(2*x)',
      mistakes: [
        { expr: '2*exp(-x)*sin(2*x)', msg: String.raw`$y'(0) = 2C_2$ (facteur $\beta = 2$ de la dérivée) : $C_2 = 1$.` },
        { expr: 'exp(-2*x)*sin(x)', msg: String.raw`Partie réelle et partie imaginaire échangées : $r = -1 \pm 2\mathrm{i}$ donne $\mathrm{e}^{-x}$ et $\sin 2x$.` },
        { expr: 'exp(x)*sin(2*x)', msg: String.raw`Erreur de signe : $\alpha = -\frac{b}{2a} = -1$, la solution est amortie.` }
      ],
      hint: String.raw`$r = -1 \pm 2\mathrm{i}$ : $y = \mathrm{e}^{-x}(C_1\cos 2x + C_2\sin 2x)$.`,
      explain: String.raw`$r = -1 \pm 2\mathrm{i}$, donc $y = \mathrm{e}^{-x}(C_1\cos 2x + C_2\sin 2x)$ ; $y(0) = C_1 = 0$ et $y'(0) = 2C_2 = 2$ : $y = \mathrm{e}^{-x}\sin 2x$.`,
      steps: [
        String.raw`Rappel : si $\Delta \lt 0$, racines $\alpha \pm \mathrm{i}\beta$ et solutions $y = \mathrm{e}^{\alpha x}(C_1\cos\beta x + C_2\sin\beta x)$.`,
        String.raw`$r^2 + 2r + 5 = 0$ : $\Delta = -16$, $r = -1 \pm 2\mathrm{i}$, donc $y = \mathrm{e}^{-x}(C_1\cos 2x + C_2\sin 2x)$.`,
        String.raw`$y(0) = C_1 = 0$, donc $y = C_2\mathrm{e}^{-x}\sin 2x$. Dérivée (produit) : $y' = C_2\mathrm{e}^{-x}(2\cos 2x - \sin 2x)$, d'où $y'(0) = 2C_2 = 2$ et $C_2 = 1$.`,
        String.raw`Solution : $y = \mathrm{e}^{-x}\sin 2x$. Vérification : $y'' = \mathrm{e}^{-x}(-3\sin 2x - 4\cos 2x)$ et $y'' + 2y' + 5y = \mathrm{e}^{-x}\left[(-3 - 2 + 5)\sin 2x + (-4 + 4)\cos 2x\right] = 0$ ✔.`
      ],
      rule: String.raw`$r = \alpha \pm \mathrm{i}\beta$ : $y = \mathrm{e}^{\alpha x}(C_1\cos\beta x + C_2\sin\beta x)$.` },
    { id: 'm8-x-028', level: 2, topic: 'EDL2 homogène, Δ > 0', sec: 'm8-s-edl2-homogene', check: 'expr', vars: ['x'],
      prompt: String.raw`Résous $y'' - y = 0$ avec $y(0) = 1$ et $y'(0) = 0$.`,
      answer: 'cosh(x)',
      mistakes: [
        { expr: 'cos(x)', msg: String.raw`$\cos x$ est solution de $y'' + y = 0$ ; ici $r^2 - 1 = 0$ donne $r = \pm 1$ (réels).` },
        { expr: 'exp(x)', msg: String.raw`$y'(0) = 1 \neq 0$ : il faut combiner $\mathrm{e}^{x}$ et $\mathrm{e}^{-x}$.` },
        { expr: 'sinh(x)', msg: String.raw`$\operatorname{sh} 0 = 0 \neq 1$ : c'est la solution pour $y(0) = 0$, $y'(0) = 1$.` }
      ],
      hint: String.raw`$y = C_1\mathrm{e}^{x} + C_2\mathrm{e}^{-x}$ ; tu peux écrire le résultat avec cosh.`,
      explain: String.raw`$y = C_1\mathrm{e}^{x} + C_2\mathrm{e}^{-x}$ avec $C_1 + C_2 = 1$ et $C_1 - C_2 = 0$, donc $C_1 = C_2 = \frac{1}{2}$ et $y = \operatorname{ch} x$.`,
      steps: [
        String.raw`Rappel : deux racines réelles distinctes $r_1, r_2$ donnent $y = C_1\mathrm{e}^{r_1x} + C_2\mathrm{e}^{r_2x}$ ; on rappelle que $\operatorname{ch} x = \frac{\mathrm{e}^{x} + \mathrm{e}^{-x}}{2}$.`,
        String.raw`$r^2 - 1 = 0 \iff r = \pm 1$, donc $y = C_1\mathrm{e}^{x} + C_2\mathrm{e}^{-x}$.`,
        String.raw`Conditions : $y(0) = C_1 + C_2 = 1$ et $y'(0) = C_1 - C_2 = 0$, d'où $C_1 = C_2 = \frac{1}{2}$.`,
        String.raw`Solution : $y = \frac{\mathrm{e}^{x} + \mathrm{e}^{-x}}{2} = \operatorname{ch} x$ (à taper cosh(x)). Vérification : $\operatorname{ch}'' = \operatorname{ch}$ donc $y'' - y = 0$ ✔, $\operatorname{ch} 0 = 1$ ✔, $\operatorname{sh} 0 = 0$ ✔.`
      ],
      rule: String.raw`$y'' - y = 0$ : $y = A\operatorname{ch} x + B\operatorname{sh} x$, avec $A = y(0)$ et $B = y'(0)$.` },
    { id: 'm8-x-029', level: 2, topic: 'EDL2 avec second membre constant', sec: 'm8-s-edl2-complete', check: 'expr', vars: ['x'],
      prompt: String.raw`Résous $y'' + y = 1$ avec $y(0) = 0$ et $y'(0) = 0$.`,
      answer: '1-cos(x)',
      mistakes: [
        { expr: 'cos(x)-1', msg: String.raw`Erreur de signe : $y(0) = 1 + C_1 = 0$ donne $C_1 = -1$, d'où $1 - \cos x$.` },
        { expr: '-cos(x)', msg: String.raw`Il manque la solution particulière constante $y_p = 1$.` },
        { expr: '1-cos(x)+sin(x)', msg: String.raw`La condition $y'(0) = C_2 = 0$ élimine le terme en $\sin x$.` }
      ],
      hint: String.raw`$y_p = 1$ ; $y = 1 + C_1\cos x + C_2\sin x$.`,
      explain: String.raw`$y = 1 + C_1\cos x + C_2\sin x$ ; $y(0) = 1 + C_1 = 0$ et $y'(0) = C_2 = 0$ : $y = 1 - \cos x$.`,
      steps: [
        String.raw`Rappel : $y = y_p + y_h$ ; pour un second membre constant $d$ (avec $c \neq 0$), $y_p = \frac{d}{c}$ ; les conditions initiales s'appliquent ensuite à la solution complète.`,
        String.raw`Homogène : $r^2 + 1 = 0$, $r = \pm\mathrm{i}$, $y_h = C_1\cos x + C_2\sin x$. Particulière : $y_p = 1$ (car $0 + 1 = 1$).`,
        String.raw`$y = 1 + C_1\cos x + C_2\sin x$ : $y(0) = 1 + C_1 = 0$ donne $C_1 = -1$ ; $y' = -C_1\sin x + C_2\cos x$, donc $y'(0) = C_2 = 0$.`,
        String.raw`Solution : $y = 1 - \cos x$. Vérification : $y'' = \cos x$, donc $y'' + y = \cos x + 1 - \cos x = 1$ ✔ ; $y(0) = 0$ et $y'(0) = \sin 0 = 0$ ✔.`
      ],
      rule: String.raw`$y = y_p + y_h$ ; second membre constant $d$ : $y_p = \frac{d}{c}$.` },
    { id: 'm8-x-030', level: 3, topic: 'Problème de Cauchy complet', sec: 'm8-s-edl2-complete', check: 'expr', vars: ['x'],
      prompt: String.raw`Résous $y'' - 3y' + 2y = 4$ avec $y(0) = 0$ et $y'(0) = 0$.`,
      answer: '2-4*exp(x)+2*exp(2*x)',
      mistakes: [
        { expr: '4-8*exp(x)+4*exp(2*x)', msg: String.raw`La solution particulière constante est $\frac{4}{2} = 2$, pas 4.` },
        { expr: '-4*exp(x)+2*exp(2*x)', msg: String.raw`Tu as oublié d'ajouter $y_p = 2$ à la fin (ta fonction vaut $-2$ en 0).` },
        { expr: '2-2*exp(x)', msg: String.raw`Ta fonction vérifie $y(0) = 0$ mais pas $y'(0) = 0$ (elle donne $-2$) : il faut utiliser les deux constantes.` }
      ],
      hint: String.raw`$y_p = \frac{4}{2} = 2$, puis $y = 2 + C_1\mathrm{e}^{x} + C_2\mathrm{e}^{2x}$.`,
      explain: String.raw`$y_p = 2$ et $y = 2 + C_1\mathrm{e}^{x} + C_2\mathrm{e}^{2x}$ ; les conditions donnent $C_1 = -4$ et $C_2 = 2$, d'où $y = 2 - 4\mathrm{e}^{x} + 2\mathrm{e}^{2x}$.`,
      steps: [
        String.raw`Rappel : on cherche $y_p$ (de la forme du second membre), on ajoute $y_h$ (équation caractéristique), puis on applique les deux conditions initiales à la solution **complète**.`,
        String.raw`Homogène : $r^2 - 3r + 2 = (r - 1)(r - 2)$, donc $y_h = C_1\mathrm{e}^{x} + C_2\mathrm{e}^{2x}$. Particulière constante : $2y_p = 4$, $y_p = 2$.`,
        String.raw`$y = 2 + C_1\mathrm{e}^{x} + C_2\mathrm{e}^{2x}$ : $y(0) = 2 + C_1 + C_2 = 0$ et $y'(0) = C_1 + 2C_2 = 0$.`,
        String.raw`De la 2e équation, $C_1 = -2C_2$ ; dans la 1re : $2 - 2C_2 + C_2 = 0$, donc $C_2 = 2$ et $C_1 = -4$. Solution : $y = 2 - 4\mathrm{e}^{x} + 2\mathrm{e}^{2x}$.`,
        String.raw`Vérification : $y(0) = 2 - 4 + 2 = 0$ ✔ ; $y'(0) = -4 + 4 = 0$ ✔ ; $y'' - 3y' + 2y = (-4 + 12 - 8)\mathrm{e}^{x} + (8 - 12 + 4)\mathrm{e}^{2x} + 4 = 4$ ✔.`
      ],
      rule: String.raw`Ordre : $y_p$, puis $y_h$, puis conditions initiales sur $y_p + y_h$.`,
      pitfall: String.raw`$y'(0)$ se calcule en dérivant la solution complète ; ici $y_p$ est constante donc sa dérivée est nulle, mais ce n'est pas toujours le cas.` },
    { id: 'm8-x-031', level: 2, topic: 'Second membre exponentiel, ordre 2', sec: 'm8-s-edl2-complete', check: 'expr', vars: ['x'],
      prompt: String.raw`Trouve la solution particulière de la forme $\lambda\mathrm{e}^{2x}$ de $y'' + y' - 2y = \mathrm{e}^{2x}$.`,
      answer: 'exp(2*x)/4',
      mistakes: [
        { expr: 'exp(2*x)/2', msg: String.raw`N'oublie pas le terme $y'$ : $4\lambda + 2\lambda - 2\lambda = 4\lambda$.` },
        { expr: 'exp(2*x)', msg: String.raw`$\lambda = \frac{1}{P(2)}$ avec $P(2) = 4 + 2 - 2 = 4$.` },
        { expr: '-exp(2*x)/4', msg: String.raw`Erreur de signe : $P(2) = 4 \gt 0$, donc $\lambda = +\frac{1}{4}$.` }
      ],
      hint: String.raw`$\lambda = \frac{1}{P(2)}$ avec $P(r) = r^2 + r - 2$.`,
      explain: String.raw`$y_p'' + y_p' - 2y_p = (4 + 2 - 2)\lambda\mathrm{e}^{2x} = 4\lambda\mathrm{e}^{2x}$, donc $\lambda = \frac{1}{4}$.`,
      steps: [
        String.raw`Rappel : pour $ay'' + by' + cy = k\mathrm{e}^{mx}$ avec $P(m) \neq 0$ ($P(r) = ar^2 + br + c$), on cherche $y_p = \lambda\mathrm{e}^{mx}$, et on trouve $\lambda = \frac{k}{P(m)}$.`,
        String.raw`$P(r) = r^2 + r - 2 = (r - 1)(r + 2)$ : $m = 2$ n'est pas racine, et $P(2) = 4 + 2 - 2 = 4$.`,
        String.raw`Calcul direct : $y_p' = 2\lambda\mathrm{e}^{2x}$, $y_p'' = 4\lambda\mathrm{e}^{2x}$, donc $y_p'' + y_p' - 2y_p = (4 + 2 - 2)\lambda\mathrm{e}^{2x} = 4\lambda\mathrm{e}^{2x}$.`,
        String.raw`$4\lambda = 1$, $\lambda = \frac{1}{4}$ : $y_p = \frac{\mathrm{e}^{2x}}{4}$.`
      ],
      rule: String.raw`$P(m) \neq 0$ : $y_p = \frac{k}{P(m)}\,\mathrm{e}^{mx}$.` },
    { id: 'm8-x-032', level: 3, topic: 'Second membre exponentiel, racine simple', sec: 'm8-s-edl2-complete', check: 'expr', vars: ['x'],
      prompt: String.raw`Trouve la solution particulière de la forme $\lambda x\,\mathrm{e}^{x}$ de $y'' - 3y' + 2y = \mathrm{e}^{x}$.`,
      answer: '-x*exp(x)',
      mistakes: [
        { expr: 'x*exp(x)', msg: String.raw`Erreur de signe : $\lambda = \frac{1}{P'(1)}$ avec $P'(1) = 2 - 3 = -1$.` },
        { expr: '-exp(x)', msg: String.raw`$\mathrm{e}^{x}$ est solution homogène ($P(1) = 0$) : $-\mathrm{e}^{x}$ donne 0 dans l'équation, il faut le facteur $x$.` }
      ],
      hint: String.raw`Calcule $y_p'$ et $y_p''$, ou utilise $\lambda = \frac{1}{P'(1)}$ ($1$ est racine simple).`,
      explain: String.raw`Avec $y_p = \lambda x\mathrm{e}^{x}$, on obtient $y_p'' - 3y_p' + 2y_p = -\lambda\mathrm{e}^{x}$, donc $\lambda = -1$ et $y_p = -x\mathrm{e}^{x}$.`,
      steps: [
        String.raw`Rappel : si $m$ est racine **simple** du polynôme caractéristique $P$, on cherche $y_p = \lambda x\mathrm{e}^{mx}$, et $\lambda = \frac{k}{P'(m)}$. Ici $P(r) = r^2 - 3r + 2 = (r - 1)(r - 2)$ : $m = 1$ est racine simple.`,
        String.raw`$y_p = \lambda x\mathrm{e}^{x}$ : $y_p' = \lambda(1 + x)\mathrm{e}^{x}$ et $y_p'' = \lambda(2 + x)\mathrm{e}^{x}$.`,
        String.raw`$y_p'' - 3y_p' + 2y_p = \lambda\left[(2 + x) - 3(1 + x) + 2x\right]\mathrm{e}^{x} = \lambda(2 - 3)\mathrm{e}^{x} = -\lambda\mathrm{e}^{x}$ (les termes en $x$ s'annulent).`,
        String.raw`On veut $\mathrm{e}^{x}$ : $-\lambda = 1$, donc $\lambda = -1$ et $y_p = -x\mathrm{e}^{x}$.`,
        String.raw`Contrôle par la formule : $P'(r) = 2r - 3$, $P'(1) = -1$, $\lambda = \frac{1}{-1} = -1$ ✔.`
      ],
      rule: String.raw`$m$ racine simple : $y_p = \frac{k}{P'(m)}\,x\,\mathrm{e}^{mx}$.` },
    { id: 'm8-x-033', level: 3, topic: 'Second membre exponentiel, racine double', sec: 'm8-s-edl2-complete', check: 'expr', vars: ['x'],
      prompt: String.raw`Trouve la solution particulière de la forme $\lambda x^2\mathrm{e}^{-2x}$ de $y'' + 4y' + 4y = \mathrm{e}^{-2x}$.`,
      answer: 'x^2*exp(-2*x)/2',
      mistakes: [
        { expr: 'x^2*exp(-2*x)', msg: String.raw`Racine double : $\lambda = \frac{1}{2a} = \frac{1}{2}$ (car $z'' = 1$ donne $z = \frac{x^2}{2}$).` },
        { expr: 'x*exp(-2*x)', msg: String.raw`Racine double : un seul facteur $x$ ne suffit pas, $x\mathrm{e}^{-2x}$ est encore solution homogène.` }
      ],
      hint: String.raw`$-2$ est racine double : pose $y = z(x)\mathrm{e}^{-2x}$, l'équation devient $z'' = 1$.`,
      explain: String.raw`Avec $y = z\,\mathrm{e}^{-2x}$, l'équation devient $z''\mathrm{e}^{-2x} = \mathrm{e}^{-2x}$, donc $z'' = 1$ et $z = \frac{x^2}{2}$ : $y_p = \frac{x^2}{2}\mathrm{e}^{-2x}$.`,
      steps: [
        String.raw`Rappel : si $m$ est racine **double** de $P$, on cherche $y_p = \lambda x^2\mathrm{e}^{mx}$ (et $\lambda = \frac{k}{2a}$). Ici $P(r) = r^2 + 4r + 4 = (r + 2)^2$ : $-2$ est racine double.`,
        String.raw`Astuce : on pose $y = z(x)\mathrm{e}^{-2x}$. Alors $y' = (z' - 2z)\mathrm{e}^{-2x}$ et $y'' = (z'' - 4z' + 4z)\mathrm{e}^{-2x}$.`,
        String.raw`$y'' + 4y' + 4y = \left[(z'' - 4z' + 4z) + 4(z' - 2z) + 4z\right]\mathrm{e}^{-2x} = z''\mathrm{e}^{-2x}$.`,
        String.raw`On veut $z''\mathrm{e}^{-2x} = \mathrm{e}^{-2x}$, donc $z'' = 1$ : $z = \frac{x^2}{2}$ convient, d'où $y_p = \frac{x^2}{2}\mathrm{e}^{-2x}$. Contrôle : $\lambda = \frac{1}{2a} = \frac{1}{2}$ ✔.`
      ],
      rule: String.raw`$m$ racine double : $y_p = \frac{k}{2a}\,x^2\,\mathrm{e}^{mx}$.` },
    { id: 'm8-x-034', level: 2, topic: 'Second membre trigonométrique, ordre 2', sec: 'm8-s-edl2-complete', check: 'expr', vars: ['x'],
      prompt: String.raw`Trouve la solution particulière de la forme $\lambda\cos 2x$ de $y'' + y = \cos 2x$.`,
      answer: '-cos(2*x)/3',
      mistakes: [
        { expr: 'cos(2*x)/3', msg: String.raw`Erreur de signe : $(\cos 2x)'' = -4\cos 2x$, donc $-4\lambda + \lambda = -3\lambda = 1$.` },
        { expr: 'cos(2*x)/5', msg: String.raw`La dérivée seconde de $\cos 2x$ est $-4\cos 2x$ (signe moins) : $-4\lambda + \lambda$, pas $4\lambda + \lambda$.` }
      ],
      hint: String.raw`$(\lambda\cos 2x)'' = -4\lambda\cos 2x$.`,
      explain: String.raw`$y_p'' + y_p = -4\lambda\cos 2x + \lambda\cos 2x = -3\lambda\cos 2x = \cos 2x$, donc $\lambda = -\frac{1}{3}$.`,
      steps: [
        String.raw`Rappel : pour un second membre $\cos\omega x$ sans résonance ($\mathrm{i}\omega$ non racine), on cherche $y_p$ de même pulsation. Ici $r^2 + 1 = 0$ a pour racines $\pm\mathrm{i}$, et $2\mathrm{i}$ n'en est pas une : pas de résonance.`,
        String.raw`Avec $y_p = \lambda\cos 2x$ : $y_p' = -2\lambda\sin 2x$ et $y_p'' = -4\lambda\cos 2x$.`,
        String.raw`$y_p'' + y_p = -4\lambda\cos 2x + \lambda\cos 2x = -3\lambda\cos 2x$ ; on veut $\cos 2x$, donc $-3\lambda = 1$ et $\lambda = -\frac{1}{3}$.`,
        String.raw`$y_p = -\frac{\cos 2x}{3}$. (Un cosinus seul suffit ici car l'équation ne contient pas de $y'$.)`
      ],
      rule: String.raw`$(\cos\omega x)'' = -\omega^2\cos\omega x$ ; pour $y'' + \omega_0^2y = \cos\omega x$ ($\omega \neq \omega_0$) : $y_p = \frac{\cos\omega x}{\omega_0^2 - \omega^2}$.` },
    { id: 'm8-x-035', level: 3, topic: 'Résonance', sec: 'm8-s-edl2-complete', check: 'expr', vars: ['x'],
      prompt: String.raw`(Résonance) Trouve la solution particulière de la forme $x(\lambda\cos x + \mu\sin x)$ de $y'' + y = \cos x$.`,
      answer: 'x*sin(x)/2',
      mistakes: [
        { expr: 'x*sin(x)', msg: String.raw`Coefficient : $y_p'' + y_p = 2\mu\cos x - 2\lambda\sin x$, donc $2\mu = 1$ et $\mu = \frac{1}{2}$.` },
        { expr: 'x*cos(x)/2', msg: String.raw`C'est le terme en sinus qui survit : $\lambda = 0$ et $\mu = \frac{1}{2}$.` },
        { expr: '-x*sin(x)/2', msg: String.raw`Erreur de signe : $2\mu = +1$ (coefficient de $\cos x$ dans $2u' = 2\mu\cos x - 2\lambda\sin x$).` }
      ],
      hint: String.raw`Calcule $y_p''$ : les termes en $x$ se compensent avec $y_p$.`,
      explain: String.raw`Pour $y_p = x(\lambda\cos x + \mu\sin x)$, on trouve $y_p'' + y_p = 2(\mu\cos x - \lambda\sin x)$ ; il faut $2\mu = 1$ et $\lambda = 0$, donc $y_p = \frac{x\sin x}{2}$.`,
      steps: [
        String.raw`Rappel (résonance) : si le second membre $\cos\omega x$ a exactement la pulsation propre ($\mathrm{i}\omega$ racine de l'équation caractéristique), on cherche $y_p = x(\lambda\cos\omega x + \mu\sin\omega x)$. Ici $r^2 + 1 = 0$ a pour racines $\pm\mathrm{i}$ et $\omega = 1$.`,
        String.raw`On pose $u = \lambda\cos x + \mu\sin x$ (qui vérifie $u'' = -u$) et $y_p = xu$ : $y_p' = u + xu'$, puis $y_p'' = 2u' + xu'' = 2u' - xu$.`,
        String.raw`$y_p'' + y_p = 2u' - xu + xu = 2u' = 2(-\lambda\sin x + \mu\cos x)$ : les termes en $x$ se compensent.`,
        String.raw`Identification avec $\cos x$ : $2\mu = 1$ et $-2\lambda = 0$, donc $\mu = \frac{1}{2}$, $\lambda = 0$ : $y_p = \frac{x\sin x}{2}$.`,
        String.raw`Vérification : $y_p'' = \cos x - \frac{x\sin x}{2}$, donc $y_p'' + y_p = \cos x$ ✔. L'amplitude croît avec $x$ : c'est la résonance.`
      ],
      rule: String.raw`Résonance : $y'' + \omega^2y = B\cos\omega x$ a pour solution particulière $\frac{B}{2\omega}\,x\sin\omega x$.` },
    { id: 'm8-x-036', level: 2, topic: 'Pulsation propre RLC', sec: 'm8-s-rlc', check: 'value', vars: [],
      prompt: String.raw`Circuit RLC série avec $L = 10\ \mathrm{mH}$ et $C = 1\ \mu\mathrm{F}$. Donne la pulsation propre $\omega_0$ en rad/s.`,
      answer: '10000',
      mistakes: [
        { expr: '100000000', msg: String.raw`$\frac{1}{LC} = \omega_0^2$ : prends la racine carrée.` },
        { expr: '0.0001', msg: String.raw`$\sqrt{LC}$ est l'inverse de $\omega_0$ : $\omega_0 = \frac{1}{\sqrt{LC}}$.` }
      ],
      hint: String.raw`$\omega_0 = \frac{1}{\sqrt{LC}}$ avec $L = 10^{-2}\ \mathrm{H}$, $C = 10^{-6}\ \mathrm{F}$.`,
      explain: String.raw`$LC = 10^{-2} \times 10^{-6} = 10^{-8}$, donc $\omega_0 = \frac{1}{\sqrt{10^{-8}}} = \frac{1}{10^{-4}} = 10^4\ \mathrm{rad/s}$.`,
      steps: [
        String.raw`Rappel : pour un RLC série, $LC\,u'' + RC\,u' + u = E$ ; en divisant par $LC$, le coefficient de $u$ est $\omega_0^2 = \frac{1}{LC}$, donc $\omega_0 = \frac{1}{\sqrt{LC}}$.`,
        String.raw`Conversions : $L = 10\ \mathrm{mH} = 10^{-2}\ \mathrm{H}$ et $C = 1\ \mu\mathrm{F} = 10^{-6}\ \mathrm{F}$, donc $LC = 10^{-8}$.`,
        String.raw`$\sqrt{LC} = 10^{-4}$, donc $\omega_0 = \frac{1}{10^{-4}} = 10^4\ \mathrm{rad/s}$.`
      ],
      rule: String.raw`$\omega_0 = \frac{1}{\sqrt{LC}}$.` },
    { id: 'm8-x-037', level: 2, topic: 'Facteur d\'amortissement', sec: 'm8-s-rlc', check: 'value', vars: [],
      prompt: String.raw`Même circuit ($L = 10\ \mathrm{mH}$, $C = 1\ \mu\mathrm{F}$) avec $R = 100\ \Omega$. Calcule le facteur d'amortissement $\xi = \frac{R}{2}\sqrt{\frac{C}{L}}$.`,
      answer: '1/2',
      mistakes: [
        { expr: '5000', msg: String.raw`Rapport inversé : c'est $\sqrt{\frac{C}{L}} = \sqrt{10^{-4}} = 10^{-2}$, pas $\sqrt{\frac{L}{C}} = 100$.` },
        { expr: '1', msg: String.raw`Tu as oublié de diviser $R$ par 2 : $\xi = \frac{100}{2} \times 10^{-2} = 0{,}5$ (la valeur 1 est le facteur de qualité $Q = \frac{1}{2\xi}$).` },
        { expr: '0.005', msg: String.raw`N'oublie pas la racine : $\sqrt{10^{-4}} = 10^{-2}$ (et non $10^{-4}$).` }
      ],
      hint: String.raw`$\sqrt{\frac{C}{L}} = \sqrt{\frac{10^{-6}}{10^{-2}}}$.`,
      explain: String.raw`$\sqrt{\frac{C}{L}} = 10^{-2}$, donc $\xi = 50 \times 10^{-2} = 0{,}5 \lt 1$ : régime pseudo-périodique.`,
      steps: [
        String.raw`Rappel : le facteur d'amortissement $\xi$ (sans unité) apparaît dans la forme canonique $u'' + 2\xi\omega_0u' + \omega_0^2u = \dots$ ; pour un RLC série, $\xi = \frac{R}{2}\sqrt{\frac{C}{L}}$.`,
        String.raw`$\frac{C}{L} = \frac{10^{-6}}{10^{-2}} = 10^{-4}$, donc $\sqrt{\frac{C}{L}} = 10^{-2}$.`,
        String.raw`$\xi = \frac{100}{2} \times 10^{-2} = 50 \times 10^{-2} = 0{,}5$.`,
        String.raw`Interprétation : $\xi = 0{,}5 \lt 1$, le régime est pseudo-périodique (oscillations amorties).`
      ],
      rule: String.raw`RLC série : $\xi = \frac{R}{2}\sqrt{\frac{C}{L}}$ ; $\xi \lt 1$ pseudo-périodique, $\xi = 1$ critique, $\xi \gt 1$ apériodique.` },
    { id: 'm8-x-038', level: 2, topic: 'Régime critique RLC', sec: 'm8-s-rlc', check: 'value', vars: [],
      prompt: String.raw`Toujours avec $L = 10\ \mathrm{mH}$ et $C = 1\ \mu\mathrm{F}$ : quelle résistance (en ohms) donne le régime critique ?`,
      answer: '200',
      mistakes: [
        { expr: '100', msg: String.raw`$R_c = 2\sqrt{\frac{L}{C}}$ : facteur 2 oublié.` },
        { expr: '0.02', msg: String.raw`Rapport inversé : $\sqrt{\frac{L}{C}} = \sqrt{10^4} = 100$, pas $\sqrt{\frac{C}{L}} = 10^{-2}$.` }
      ],
      hint: String.raw`$\xi = 1 \iff R = 2\sqrt{\frac{L}{C}}$.`,
      explain: String.raw`$R_c = 2\sqrt{\frac{L}{C}} = 2\sqrt{\frac{10^{-2}}{10^{-6}}} = 2 \times 100 = 200\ \Omega$.`,
      steps: [
        String.raw`Rappel : le régime critique correspond à $\xi = 1$ (racine double de l'équation caractéristique). Avec $\xi = \frac{R}{2}\sqrt{\frac{C}{L}}$, on obtient $R_c = 2\sqrt{\frac{L}{C}}$.`,
        String.raw`$\frac{L}{C} = \frac{10^{-2}}{10^{-6}} = 10^{4}$, donc $\sqrt{\frac{L}{C}} = 100\ \Omega$.`,
        String.raw`$R_c = 2 \times 100 = 200\ \Omega$. Contrôle : $R = 100\ \Omega$ donnait $\xi = 0{,}5$, et $\xi$ est proportionnel à $R$, donc $\xi = 1$ pour $R = 200\ \Omega$ ✔.`
      ],
      rule: String.raw`Régime critique : $R_c = 2\sqrt{\frac{L}{C}}$.` },
    { id: 'm8-x-039', level: 1, topic: 'Oscillateur masse-ressort', sec: 'm8-s-rlc', check: 'value', vars: [],
      prompt: String.raw`Une masse $m = 0{,}5\ \mathrm{kg}$ est suspendue à un ressort de raideur $k = 50\ \mathrm{N/m}$ (sans frottement). Donne la pulsation propre $\omega_0$ en rad/s.`,
      answer: '10',
      mistakes: [
        { expr: '100', msg: String.raw`$\omega_0^2 = \frac{k}{m} = 100$ : prends la racine.` },
        { expr: '1/10', msg: String.raw`Rapport inversé : $\omega_0 = \sqrt{\frac{k}{m}}$, pas $\sqrt{\frac{m}{k}}$.` }
      ],
      hint: String.raw`$mx'' + kx = 0$ donne $\omega_0 = \sqrt{\frac{k}{m}}$.`,
      explain: String.raw`$\omega_0 = \sqrt{\frac{k}{m}} = \sqrt{\frac{50}{0{,}5}} = \sqrt{100} = 10\ \mathrm{rad/s}$ (période $T_0 = \frac{\pi}{5} \approx 0{,}63\ \mathrm{s}$).`,
      steps: [
        String.raw`Rappel : le principe fondamental de la dynamique donne $mx'' = -kx$, soit $x'' + \frac{k}{m}x = 0$ : oscillateur harmonique de pulsation propre $\omega_0 = \sqrt{\frac{k}{m}}$.`,
        String.raw`$\frac{k}{m} = \frac{50}{0{,}5} = 100\ \mathrm{s}^{-2}$.`,
        String.raw`$\omega_0 = \sqrt{100} = 10\ \mathrm{rad/s}$, soit une période $T_0 = \frac{2\pi}{10} = \frac{\pi}{5} \approx 0{,}63\ \mathrm{s}$.`
      ],
      rule: String.raw`Masse-ressort : $\omega_0 = \sqrt{\frac{k}{m}}$.` },
    { id: 'm8-x-040', level: 2, topic: 'Oscillateur libre', sec: 'm8-s-rlc', check: 'expr', vars: ['t'], domain: [0, 3],
      prompt: String.raw`Oscillateur libre $x'' + 4x = 0$, lâché sans vitesse depuis $x(0) = 3$ (donc $x'(0) = 0$). Donne $x(t)$.`,
      answer: '3*cos(2*t)',
      mistakes: [
        { expr: '3*cos(4*t)', msg: String.raw`$\omega_0^2 = 4$ donc $\omega_0 = 2$, pas 4.` },
        { expr: '3*sin(2*t)', msg: String.raw`$\sin 0 = 0 \neq 3$ : la position initiale non nulle et la vitesse nulle imposent un cosinus.` },
        { expr: '3*cos(2*t)+sin(2*t)', msg: String.raw`La vitesse initiale nulle impose $x'(0) = 2C_2 = 0$, donc pas de terme en $\sin 2t$.` }
      ],
      hint: String.raw`$x(t) = X_0\cos\omega_0 t + \frac{V_0}{\omega_0}\sin\omega_0 t$.`,
      explain: String.raw`$\omega_0 = 2$, $x = C_1\cos 2t + C_2\sin 2t$ avec $C_1 = x(0) = 3$ et $2C_2 = x'(0) = 0$ : $x(t) = 3\cos 2t$.`,
      steps: [
        String.raw`Rappel : $x'' + \omega_0^2x = 0$ a pour solutions $x = C_1\cos\omega_0t + C_2\sin\omega_0t$ ; la position initiale fixe $C_1$, la vitesse initiale fixe $C_2$.`,
        String.raw`Équation caractéristique : $r^2 + 4 = 0$, $r = \pm 2\mathrm{i}$, donc $\omega_0 = 2$ et $x = C_1\cos 2t + C_2\sin 2t$.`,
        String.raw`$x(0) = C_1 = 3$ ; $x'(t) = -2C_1\sin 2t + 2C_2\cos 2t$, donc $x'(0) = 2C_2 = 0$ et $C_2 = 0$.`,
        String.raw`Solution : $x(t) = 3\cos 2t$. Vérification : $x'' = -12\cos 2t = -4x$ ✔, $x(0) = 3$ ✔, $x'(0) = -6\sin 0 = 0$ ✔.`
      ],
      rule: String.raw`$x(t) = X_0\cos\omega_0t + \frac{V_0}{\omega_0}\sin\omega_0t$.` }
  ]
});
