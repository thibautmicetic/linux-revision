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
    { id: 'm8-q-001', level: 1, q: String.raw`L'équation $y' + 3y = \mathrm{e}^{x}$ est :`,
      choices: [String.raw`non linéaire`, String.raw`linéaire d'ordre 1 à coefficients constants`, String.raw`linéaire d'ordre 2`, String.raw`homogène`], answer: 1,
      explain: String.raw`$y$ et $y'$ apparaissent au degré 1 avec des coefficients constants (1 et 3) ; la dérivée la plus haute est $y'$ ; le second membre $\mathrm{e}^{x}$ est non nul.`,
      why: { 0: String.raw`Le second membre peut être n'importe quelle fonction de $x$ : c'est $y$ qui doit apparaître linéairement.`, 2: String.raw`L'ordre est celui de la plus haute dérivée : ici $y'$, donc ordre 1.`, 3: String.raw`Le second membre $\mathrm{e}^{x}$ n'est pas nul.` } },
    { id: 'm8-q-002', level: 1, q: String.raw`Laquelle de ces équations n'est **pas** linéaire ?`,
      choices: [String.raw`$y' + x^2 y = \sin x$`, String.raw`$y'' + y = \cos x$`, String.raw`$y' = y^2$`, String.raw`$xy' - y = 0$`], answer: 2,
      explain: String.raw`Le terme $y^2$ rend l'équation non linéaire (la somme de deux solutions n'est plus solution).`,
      why: { 0: String.raw`Les coefficients peuvent dépendre de $x$ : $x^2 y$ reste linéaire en $y$.`, 1: String.raw`C'est une EDL2 à coefficients constants avec second membre.`, 3: String.raw`Linéaire homogène à coefficients variables.` } },
    { id: 'm8-q-003', level: 1, q: String.raw`Les solutions de $y' + 3y = 0$ sont :`,
      choices: [String.raw`$C\mathrm{e}^{3x}$`, String.raw`$C\mathrm{e}^{-x/3}$`, String.raw`$C - 3x$`, String.raw`$C\mathrm{e}^{-3x}$`], answer: 3,
      explain: String.raw`$y' = -3y$, donc $y = C\mathrm{e}^{-3x}$.`,
      why: { 0: String.raw`Erreur de signe : $y' + 3y = 0 \iff y' = -3y$.`, 1: String.raw`Le coefficient de $x$ dans l'exponentielle est $-a = -3$, pas $-\frac{1}{3}$.`, 2: String.raw`$y' = -3$ serait une autre équation : ici $y'$ est proportionnel à $y$.` } },
    { id: 'm8-q-004', level: 1, q: String.raw`Les solutions de $2y' + y = 0$ sont :`,
      choices: [String.raw`$C\mathrm{e}^{-2x}$`, String.raw`$C\mathrm{e}^{-x/2}$`, String.raw`$C\mathrm{e}^{x/2}$`, String.raw`$C\mathrm{e}^{-x}$`], answer: 1,
      explain: String.raw`On normalise : $y' + \frac{1}{2}y = 0$, donc $y = C\mathrm{e}^{-x/2}$.`,
      why: { 0: String.raw`Il faut diviser par 2 (coefficient de $y'$), pas multiplier.`, 2: String.raw`Erreur de signe : $y' = -\frac{1}{2}y$.`, 3: String.raw`Tu as oublié de normaliser : le coefficient de $y'$ vaut 2.` } },
    { id: 'm8-q-005', level: 2, q: String.raw`Les solutions de $y' + 2xy = 0$ sur $\mathbb{R}$ sont :`,
      choices: [String.raw`$C\mathrm{e}^{-2x}$`, String.raw`$C\mathrm{e}^{x^2}$`, String.raw`$C\mathrm{e}^{-x^2}$`, String.raw`$C\mathrm{e}^{-2x^2}$`], answer: 2,
      explain: String.raw`$a(x) = 2x$ a pour primitive $A(x) = x^2$, donc $y = C\mathrm{e}^{-x^2}$.`,
      why: { 0: String.raw`Il faut une primitive de $a(x) = 2x$ dans l'exponentielle, pas une primitive de 2.`, 1: String.raw`Erreur de signe : c'est $\mathrm{e}^{-A(x)}$.`, 3: String.raw`Une primitive de $2x$ est $x^2$, pas $2x^2$.` } },
    { id: 'm8-q-006', level: 1, q: String.raw`Pour une équation linéaire (E), la solution générale est :`,
      choices: [String.raw`le produit d'une solution particulière et de la solution générale homogène`, String.raw`la solution générale de l'équation homogène seule`, String.raw`une solution particulière seule`, String.raw`la somme d'une solution particulière et de la solution générale de l'équation homogène`], answer: 3,
      explain: String.raw`Théorème de structure : $y = y_p + y_h$.`,
      why: { 0: String.raw`On additionne, on ne multiplie pas.`, 1: String.raw`Les solutions homogènes vérifient l'équation avec second membre nul, pas (E).`, 2: String.raw`Une solution particulière est une solution parmi une infinité : il manque $y_h$.` } },
    { id: 'm8-q-007', level: 1, q: String.raw`Une solution particulière constante de $y' + 2y = 6$ est :`,
      choices: [String.raw`$y_p = 6$`, String.raw`$y_p = 3$`, String.raw`$y_p = 12$`, String.raw`$y_p = \frac{1}{3}$`], answer: 1,
      explain: String.raw`Pour $y_p = k$ constante, $y_p' = 0$ donc $2k = 6$, $k = 3$.`,
      why: { 0: String.raw`$y_p = 6$ donne $0 + 12 \neq 6$ : il faut diviser par $a = 2$.`, 2: String.raw`Tu as multiplié par $a$ au lieu de diviser.`, 3: String.raw`Tu as inversé le quotient : c'est $\frac{b}{a} = \frac{6}{2}$.` } },
    { id: 'm8-q-008', level: 2, q: String.raw`Pour $y' + y = \mathrm{e}^{2x}$, on cherche $y_p = \lambda\mathrm{e}^{2x}$. Que vaut $\lambda$ ?`,
      choices: [String.raw`$1$`, String.raw`$\frac{1}{2}$`, String.raw`$\frac{1}{3}$`, String.raw`$-1$`], answer: 2,
      explain: String.raw`$y_p' + y_p = 2\lambda\mathrm{e}^{2x} + \lambda\mathrm{e}^{2x} = 3\lambda\mathrm{e}^{2x}$, donc $3\lambda = 1$ et $\lambda = \frac{1}{3}$.`,
      why: { 0: String.raw`Tu as oublié le facteur 2 de la dérivée de $\mathrm{e}^{2x}$.`, 1: String.raw`Tu as oublié le terme $y_p$ : seulement $2\lambda = 1$.`, 3: String.raw`Erreur de signe : ici $y' + y$, pas $y' - 2y$.` } },
    { id: 'm8-q-009', level: 3, q: String.raw`Pour $y' + 2y = \mathrm{e}^{-2x}$, sous quelle forme chercher une solution particulière ?`,
      choices: [String.raw`$\lambda\mathrm{e}^{-2x}$`, String.raw`$\lambda x\,\mathrm{e}^{-2x}$`, String.raw`$\lambda\mathrm{e}^{2x}$`, String.raw`$\lambda x^2\mathrm{e}^{-2x}$`], answer: 1,
      explain: String.raw`$\mathrm{e}^{-2x}$ est solution de l'homogène ($m = -a$) : on multiplie par $x$. Avec $y_p = \lambda x\mathrm{e}^{-2x}$ on trouve $\lambda = 1$.`,
      why: { 0: String.raw`$\lambda\mathrm{e}^{-2x}$ est solution de l'homogène : en reportant on obtiendrait $0 = \mathrm{e}^{-2x}$.`, 2: String.raw`L'exponentielle doit être celle du second membre, $\mathrm{e}^{-2x}$.`, 3: String.raw`Le facteur $x^2$ concerne une racine double à l'ordre 2 ; à l'ordre 1, un seul facteur $x$ suffit.` } },
    { id: 'm8-q-010', level: 2, q: String.raw`Pour $y' + y = \cos x$, sous quelle forme chercher une solution particulière ?`,
      choices: [String.raw`$\lambda\cos x$`, String.raw`$\lambda\sin x$`, String.raw`$\lambda\cos x + \mu\sin x$`, String.raw`$\lambda x\cos x$`], answer: 2,
      explain: String.raw`La dérivée d'un cosinus fait apparaître un sinus : il faut les deux. On trouve $y_p = \frac{\cos x + \sin x}{2}$.`,
      why: { 0: String.raw`$(\lambda\cos x)' + \lambda\cos x = -\lambda\sin x + \lambda\cos x$ : le $\sin x$ ne peut pas s'annuler.`, 1: String.raw`Même problème : le cosinus de la dérivée ne suffit pas seul.`, 3: String.raw`Pas de résonance ici : $\mathrm{i}$ n'est pas racine de $r + 1 = 0$.` } },
    { id: 'm8-q-011', level: 1, q: String.raw`La solution de $y' + y = 0$ telle que $y(0) = 3$ est :`,
      choices: [String.raw`$\mathrm{e}^{-x} + 3$`, String.raw`$3\mathrm{e}^{x}$`, String.raw`$\mathrm{e}^{-3x}$`, String.raw`$3\mathrm{e}^{-x}$`], answer: 3,
      explain: String.raw`$y = C\mathrm{e}^{-x}$ et $y(0) = C = 3$.`,
      why: { 0: String.raw`$\mathrm{e}^{-x} + 3$ n'est pas solution : $y' + y = 3 \neq 0$.`, 1: String.raw`Erreur de signe dans l'exponentielle.`, 2: String.raw`La condition initiale fixe la constante multiplicative, pas le taux de décroissance.` } },
    { id: 'm8-q-012', level: 2, q: String.raw`Variation de la constante pour $y' + a(x)y = b(x)$ : avec $y = C(x)\mathrm{e}^{-A(x)}$, on obtient :`,
      choices: [String.raw`$C'(x) = b(x)\mathrm{e}^{-A(x)}$`, String.raw`$C'(x) = b(x)\mathrm{e}^{A(x)}$`, String.raw`$C(x) = b(x)\mathrm{e}^{A(x)}$`, String.raw`$C'(x) = b(x)$`], answer: 1,
      explain: String.raw`En reportant : $C'(x)\mathrm{e}^{-A(x)} = b(x)$, donc $C'(x) = b(x)\mathrm{e}^{A(x)}$.`,
      why: { 0: String.raw`On divise par $\mathrm{e}^{-A(x)}$, ce qui revient à multiplier par $\mathrm{e}^{+A(x)}$.`, 2: String.raw`C'est $C'$ qu'on obtient, il faut encore primitiver.`, 3: String.raw`Tu as oublié le facteur exponentiel.` } },
    { id: 'm8-q-013', level: 1, q: String.raw`L'équation caractéristique de $y'' - 5y' + 6y = 0$ est :`,
      choices: [String.raw`$r^2 + 5r + 6 = 0$`, String.raw`$-5r + 6 = 0$`, String.raw`$r^2 - 5r + 6 = 0$`, String.raw`$r^2 - 5r - 6 = 0$`], answer: 2,
      explain: String.raw`On remplace $y''$ par $r^2$, $y'$ par $r$ et $y$ par 1 : $r^2 - 5r + 6 = 0$.`,
      why: { 0: String.raw`Les signes des coefficients se conservent.`, 1: String.raw`Il manque le terme $r^2$ venant de $y''$.`, 3: String.raw`Erreur de signe sur le coefficient de $y$.` } },
    { id: 'm8-q-014', level: 2, q: String.raw`Les solutions réelles de $y'' - 5y' + 6y = 0$ sont :`,
      choices: [String.raw`$C_1\mathrm{e}^{-2x} + C_2\mathrm{e}^{-3x}$`, String.raw`$(C_1x + C_2)\mathrm{e}^{2x}$`, String.raw`$C_1\mathrm{e}^{2x} + C_2\mathrm{e}^{3x}$`, String.raw`$C_1\cos 2x + C_2\sin 3x$`], answer: 2,
      explain: String.raw`$r^2 - 5r + 6 = (r - 2)(r - 3)$ : deux racines réelles 2 et 3.`,
      why: { 0: String.raw`Les racines de $r^2 - 5r + 6$ sont $+2$ et $+3$ (produit 6, somme 5).`, 1: String.raw`La forme $(C_1x + C_2)\mathrm{e}^{r_0x}$ est réservée au cas $\Delta = 0$ ; ici $\Delta = 1$.`, 3: String.raw`Les cosinus/sinus apparaissent seulement si $\Delta \lt 0$.` } },
    { id: 'm8-q-015', level: 2, q: String.raw`Les solutions réelles de $y'' + 4y' + 4y = 0$ sont :`,
      choices: [String.raw`$C_1\mathrm{e}^{-2x} + C_2\mathrm{e}^{-2x}$`, String.raw`$(C_1x + C_2)\mathrm{e}^{-2x}$`, String.raw`$(C_1x + C_2)\mathrm{e}^{2x}$`, String.raw`$C_1\cos 2x + C_2\sin 2x$`], answer: 1,
      explain: String.raw`$r^2 + 4r + 4 = (r + 2)^2$ : racine double $-2$, donc $y = (C_1x + C_2)\mathrm{e}^{-2x}$.`,
      why: { 0: String.raw`$(C_1 + C_2)\mathrm{e}^{-2x}$ ne contient qu'une constante utile : il manque le facteur $x$.`, 2: String.raw`La racine double est $-\frac{b}{2a} = -2$.`, 3: String.raw`$\Delta = 0$, pas $\Delta \lt 0$.` } },
    { id: 'm8-q-016', level: 2, q: String.raw`Les solutions réelles de $y'' + 9y = 0$ sont :`,
      choices: [String.raw`$C_1\mathrm{e}^{3x} + C_2\mathrm{e}^{-3x}$`, String.raw`$C_1\cos 9x + C_2\sin 9x$`, String.raw`$(C_1x + C_2)\mathrm{e}^{3x}$`, String.raw`$C_1\cos 3x + C_2\sin 3x$`], answer: 3,
      explain: String.raw`$r^2 + 9 = 0 \iff r = \pm 3\mathrm{i}$ : $\alpha = 0$, $\beta = 3$.`,
      why: { 0: String.raw`Ce sont les solutions de $y'' - 9y = 0$.`, 1: String.raw`La pulsation est $\sqrt{9} = 3$, pas 9.`, 2: String.raw`Il n'y a pas de racine double ici.` } },
    { id: 'm8-q-017', level: 3, q: String.raw`Les solutions réelles de $y'' + 2y' + 5y = 0$ sont :`,
      choices: [String.raw`$\mathrm{e}^{-2x}(C_1\cos x + C_2\sin x)$`, String.raw`$\mathrm{e}^{-x}(C_1\cos 2x + C_2\sin 2x)$`, String.raw`$\mathrm{e}^{x}(C_1\cos 2x + C_2\sin 2x)$`, String.raw`$\mathrm{e}^{-x}(C_1\cos 4x + C_2\sin 4x)$`], answer: 1,
      explain: String.raw`$\Delta = 4 - 20 = -16$, $r = \frac{-2 \pm 4\mathrm{i}}{2} = -1 \pm 2\mathrm{i}$ : $\alpha = -1$, $\beta = 2$.`,
      why: { 0: String.raw`Tu as échangé partie réelle et partie imaginaire.`, 2: String.raw`$\alpha = -\frac{b}{2a} = -1$ : signe oublié.`, 3: String.raw`$\beta = \frac{\sqrt{-\Delta}}{2a} = \frac{4}{2}$ : n'oublie pas de diviser par $2a$.` } },
    { id: 'm8-q-018', level: 2, q: String.raw`Les solutions réelles de $y'' - y = 0$ sont :`,
      choices: [String.raw`$C_1\cos x + C_2\sin x$`, String.raw`$(C_1x + C_2)\mathrm{e}^{x}$`, String.raw`$C_1\operatorname{ch} x + C_2\operatorname{sh} x$`, String.raw`$C_1\mathrm{e}^{x}$`], answer: 2,
      explain: String.raw`$r^2 - 1 = 0 \iff r = \pm 1$ : $y = A\mathrm{e}^{x} + B\mathrm{e}^{-x}$, ce qui s'écrit aussi $C_1\operatorname{ch} x + C_2\operatorname{sh} x$.`,
      why: { 0: String.raw`Ce sont les solutions de $y'' + y = 0$.`, 1: String.raw`Les racines $1$ et $-1$ sont distinctes : pas de facteur $x$.`, 3: String.raw`Il manque la solution $\mathrm{e}^{-x}$ : l'espace des solutions est de dimension 2.` } },
    { id: 'm8-q-019', level: 3, q: String.raw`Pour $y'' - 3y' + 2y = \mathrm{e}^{x}$, sous quelle forme chercher une solution particulière ?`,
      choices: [String.raw`$\lambda\mathrm{e}^{x}$`, String.raw`$\lambda x^2\mathrm{e}^{x}$`, String.raw`$(\lambda x + \mu)\mathrm{e}^{2x}$`, String.raw`$\lambda x\,\mathrm{e}^{x}$`], answer: 3,
      explain: String.raw`$1$ est racine **simple** de $r^2 - 3r + 2$ : on multiplie par $x$. On trouve $\lambda = \frac{1}{P'(1)} = -1$.`,
      why: { 0: String.raw`$\mathrm{e}^{x}$ est solution de l'homogène : on obtiendrait $0 = \mathrm{e}^{x}$.`, 1: String.raw`Le facteur $x^2$ est pour une racine double ; ici 1 est racine simple.`, 2: String.raw`L'exponentielle doit être celle du second membre.` } },
    { id: 'm8-q-020', level: 3, q: String.raw`Pour $y'' + y = \cos x$, sous quelle forme chercher une solution particulière ?`,
      choices: [String.raw`$\lambda\cos x + \mu\sin x$`, String.raw`$x(\lambda\cos x + \mu\sin x)$`, String.raw`$\lambda x^2\cos x$`, String.raw`$\lambda\cos 2x$`], answer: 1,
      explain: String.raw`$\mathrm{i}$ est racine de $r^2 + 1$ : c'est la **résonance**. On trouve $y_p = \frac{x\sin x}{2}$.`,
      why: { 0: String.raw`$\lambda\cos x + \mu\sin x$ est solution de l'homogène : on obtiendrait $0 = \cos x$.`, 2: String.raw`$\mathrm{i}$ est racine simple : un seul facteur $x$, et il faut aussi un sinus.`, 3: String.raw`La pulsation de la solution particulière est celle du second membre.` } },
    { id: 'm8-q-021', level: 1, q: String.raw`Combien de conditions initiales faut-il pour déterminer une unique solution d'une EDL d'ordre 2 ?`,
      choices: [String.raw`1`, String.raw`2`, String.raw`3`, String.raw`0`], answer: 1,
      explain: String.raw`Deux constantes $C_1, C_2$ : il faut $y(x_0)$ **et** $y'(x_0)$.`,
      why: { 0: String.raw`Une seule condition laisse une constante libre.`, 2: String.raw`Trois conditions surdéterminent le problème (en général incompatible).`, 3: String.raw`Sans condition, il y a une infinité de solutions.` } },
    { id: 'm8-q-022', level: 1, q: String.raw`La constante de temps d'un circuit RC série est :`,
      choices: [String.raw`$\frac{R}{C}$`, String.raw`$\frac{1}{RC}$`, String.raw`$RC$`, String.raw`$\frac{C}{R}$`], answer: 2,
      explain: String.raw`$RC\,u' + u = E$ : $\tau = RC$ (en secondes : $\Omega \cdot \mathrm{F} = \mathrm{s}$).`,
      why: { 0: String.raw`$\frac{R}{C}$ n'est pas homogène à un temps.`, 1: String.raw`$\frac{1}{RC}$ est une pulsation (en $\mathrm{s}^{-1}$), l'inverse de $\tau$.`, 3: String.raw`$\frac{C}{R}$ n'est pas homogène à un temps.` } },
    { id: 'm8-q-023', level: 1, q: String.raw`La constante de temps d'un circuit RL série est :`,
      choices: [String.raw`$LR$`, String.raw`$\frac{R}{L}$`, String.raw`$\frac{L}{R}$`, String.raw`$\sqrt{LC}$`], answer: 2,
      explain: String.raw`$L\,i' + Ri = E \iff \frac{L}{R}\,i' + i = \frac{E}{R}$ : $\tau = \frac{L}{R}$.`,
      why: { 0: String.raw`Ce n'est pas $RC$ « avec L » : on divise par $R$ pour normaliser.`, 1: String.raw`$\frac{R}{L}$ est l'inverse de $\tau$.`, 3: String.raw`$\sqrt{LC} = \frac{1}{\omega_0}$ concerne le circuit LC/RLC.` } },
    { id: 'm8-q-024', level: 2, q: String.raw`Lors de la charge d'un condensateur ($u_C(0) = 0$, source $E$), $u_C(t) = $ ?`,
      choices: [String.raw`$E\,\mathrm{e}^{-t/\tau}$`, String.raw`$E\left(1 - \mathrm{e}^{-t/\tau}\right)$`, String.raw`$E\left(1 - \mathrm{e}^{-\tau t}\right)$`, String.raw`$E\left(1 + \mathrm{e}^{-t/\tau}\right)$`], answer: 1,
      explain: String.raw`$u = E + K\mathrm{e}^{-t/\tau}$ et $u(0) = 0$ donne $K = -E$.`,
      why: { 0: String.raw`C'est la décharge (elle part de $E$ et tend vers 0).`, 2: String.raw`L'exposant est $-\frac{t}{\tau}$ (sans dimension), pas $-\tau t$.`, 3: String.raw`Cette fonction vaut $2E$ en $t = 0$ : la condition initiale n'est pas respectée.` } },
    { id: 'm8-q-025', level: 2, q: String.raw`En charge, à l'instant $t = \tau$, la tension $u_C$ a atteint environ :`,
      choices: [String.raw`37 % de $E$`, String.raw`50 % de $E$`, String.raw`63 % de $E$`, String.raw`99 % de $E$`], answer: 2,
      explain: String.raw`$u_C(\tau) = E(1 - \mathrm{e}^{-1}) \approx 0{,}632\,E$.`,
      why: { 0: String.raw`$\mathrm{e}^{-1} \approx 37\ \%$ est ce qui **reste** en décharge.`, 1: String.raw`50 % est atteint à $t = \tau\ln 2 \approx 0{,}69\,\tau$.`, 3: String.raw`99 % est atteint vers $5\tau$.` } },
    { id: 'm8-q-026', level: 1, q: String.raw`Au bout de combien de temps considère-t-on en pratique le régime permanent atteint (à 1 % près) ?`,
      choices: [String.raw`$\tau$`, String.raw`$2\tau$`, String.raw`$\tau\ln 2$`, String.raw`$5\tau$`], answer: 3,
      explain: String.raw`$\mathrm{e}^{-5} \approx 0{,}007$ : à $5\tau$ il reste moins de 1 % de l'écart initial.`,
      why: { 0: String.raw`À $\tau$, il reste encore 37 % de l'écart.`, 1: String.raw`À $2\tau$, il reste $\mathrm{e}^{-2} \approx 14\ \%$.`, 2: String.raw`$\tau\ln 2$ est le temps de demi-charge.` } },
    { id: 'm8-q-027', level: 2, q: String.raw`La pulsation propre d'un circuit RLC série est :`,
      choices: [String.raw`$\sqrt{LC}$`, String.raw`$\frac{1}{LC}$`, String.raw`$\frac{R}{L}$`, String.raw`$\frac{1}{\sqrt{LC}}$`], answer: 3,
      explain: String.raw`$LC\,u'' + u = \ldots$ donne $\omega_0^2 = \frac{1}{LC}$.`,
      why: { 0: String.raw`$\sqrt{LC}$ est homogène à un temps, c'est $\frac{1}{\omega_0}$.`, 1: String.raw`$\frac{1}{LC} = \omega_0^2$ : il manque la racine.`, 2: String.raw`$\frac{R}{L} = 2\xi\omega_0$ est lié à l'amortissement.` } },
    { id: 'm8-q-028', level: 2, q: String.raw`Le régime critique d'un RLC série est obtenu pour $R = $ ?`,
      choices: [String.raw`$\sqrt{\frac{L}{C}}$`, String.raw`$2\sqrt{\frac{L}{C}}$`, String.raw`$2\sqrt{\frac{C}{L}}$`, String.raw`$\frac{1}{\sqrt{LC}}$`], answer: 1,
      explain: String.raw`$\xi = \frac{R}{2}\sqrt{\frac{C}{L}} = 1 \iff R = 2\sqrt{\frac{L}{C}}$.`,
      why: { 0: String.raw`Il manque le facteur 2 (venant de $2\xi\omega_0$).`, 2: String.raw`Rapport inversé : $R_c$ doit être en ohms, $\sqrt{L/C}$ l'est.`, 3: String.raw`C'est la pulsation propre, pas une résistance.` } },
    { id: 'm8-q-029', level: 2, q: String.raw`Un oscillateur amorti de facteur d'amortissement $\xi$ est en régime pseudo-périodique lorsque :`,
      choices: [String.raw`$\xi \gt 1$`, String.raw`$\xi = 1$`, String.raw`$0 \lt \xi \lt 1$`, String.raw`$\xi \lt 0$`], answer: 2,
      explain: String.raw`$\Delta' = \omega_0^2(\xi^2 - 1) \lt 0 \iff \xi \lt 1$ : racines complexes, oscillations amorties.`,
      why: { 0: String.raw`$\xi \gt 1$ : régime apériodique (pas d'oscillation).`, 1: String.raw`$\xi = 1$ : régime critique.`, 3: String.raw`Un amortissement négatif correspondrait à un système instable (amplitude croissante).` } },
    { id: 'm8-q-030', level: 3, q: String.raw`En régime pseudo-périodique, la pseudo-pulsation vaut :`,
      choices: [String.raw`$\omega_0$`, String.raw`$\omega_0\sqrt{1 - \xi^2}$`, String.raw`$\omega_0(1 - \xi^2)$`, String.raw`$\frac{\omega_0}{\sqrt{1 - \xi^2}}$`], answer: 1,
      explain: String.raw`Racines $-\xi\omega_0 \pm \mathrm{i}\omega_0\sqrt{1 - \xi^2}$ : la partie imaginaire est la pseudo-pulsation.`,
      why: { 0: String.raw`Seulement sans amortissement ($\xi = 0$).`, 2: String.raw`Il manque la racine carrée.`, 3: String.raw`Ce serait supérieur à $\omega_0$ : or l'amortissement ralentit les oscillations.` } },
    { id: 'm8-q-031', level: 2, q: String.raw`Période propre d'un oscillateur masse-ressort (masse $m$, raideur $k$, sans frottement) :`,
      choices: [String.raw`$2\pi\sqrt{\frac{k}{m}}$`, String.raw`$\sqrt{\frac{k}{m}}$`, String.raw`$2\pi\sqrt{\frac{m}{k}}$`, String.raw`$2\pi\frac{m}{k}$`], answer: 2,
      explain: String.raw`$mx'' + kx = 0$ : $\omega_0 = \sqrt{\frac{k}{m}}$ et $T_0 = \frac{2\pi}{\omega_0} = 2\pi\sqrt{\frac{m}{k}}$.`,
      why: { 0: String.raw`Rapport inversé : une masse plus lourde oscille plus lentement.`, 1: String.raw`C'est la pulsation propre $\omega_0$, pas la période.`, 3: String.raw`Il manque la racine carrée.` } },
    { id: 'm8-q-032', level: 3, q: String.raw`La solution de $y'' + 4y = 0$ avec $y(0) = 0$ et $y'(0) = 2$ est :`,
      choices: [String.raw`$2\sin 2x$`, String.raw`$\cos 2x$`, String.raw`$2\sin x$`, String.raw`$\sin 2x$`], answer: 3,
      explain: String.raw`$y = C_1\cos 2x + C_2\sin 2x$ ; $y(0) = C_1 = 0$ ; $y'(0) = 2C_2 = 2$, donc $C_2 = 1$.`,
      why: { 0: String.raw`$(2\sin 2x)' = 4\cos 2x$ vaut 4 en 0 : n'oublie pas le facteur 2 de la dérivée.`, 1: String.raw`$\cos 0 = 1 \neq 0$.`, 2: String.raw`La pulsation est $\sqrt{4} = 2$ ; $2\sin x$ n'est pas solution.` } },
    { id: 'm8-q-033', level: 2, q: String.raw`Si $y_1$ vérifie $y' + ay = b_1$ et $y_2$ vérifie $y' + ay = b_2$, alors $y_1 + y_2$ vérifie :`,
      choices: [String.raw`$y' + ay = b_1 + b_2$`, String.raw`$y' + ay = b_1 b_2$`, String.raw`$y' + 2ay = b_1 + b_2$`, String.raw`$y' + ay = 0$`], answer: 0,
      explain: String.raw`Par linéarité : $(y_1 + y_2)' + a(y_1 + y_2) = b_1 + b_2$ (principe de superposition).`,
      why: { 1: String.raw`La linéarité transforme une somme en somme, pas en produit.`, 2: String.raw`$a(y_1 + y_2) = ay_1 + ay_2$ : le coefficient reste $a$.`, 3: String.raw`C'est la différence $y_1 - y_2$ qui vérifie l'homogène quand $b_1 = b_2$.` } },
    { id: 'm8-q-034', level: 3, q: String.raw`Une solution de $y' + a(x)y = 0$ ($a$ continue sur un intervalle) qui s'annule en un point est :`,
      choices: [String.raw`la fonction nulle`, String.raw`une fonction qui change de signe en ce point`, String.raw`une fonction qui ne s'annule qu'en ce point`, String.raw`impossible : une telle solution n'existe pas`], answer: 0,
      explain: String.raw`$y = C\mathrm{e}^{-A(x)}$ et l'exponentielle ne s'annule jamais : $y(x_0) = 0$ impose $C = 0$ (c'est aussi l'unicité de Cauchy).`,
      why: { 1: String.raw`$C\mathrm{e}^{-A(x)}$ garde le signe de $C$ : pas de changement de signe.`, 2: String.raw`Si $C \neq 0$, la solution ne s'annule nulle part.`, 3: String.raw`La fonction nulle existe et convient.` } }
  ],

  /* ======================= EXERCICES ======================= */
  exercises: [
    { id: 'm8-x-001', level: 1, check: 'expr', vars: ['x'],
      prompt: String.raw`Résous le problème de Cauchy $y' + 3y = 0$, $y(0) = 2$. Donne $y(x)$.`,
      answer: '2*exp(-3*x)',
      mistakes: [{ expr: '2*exp(3*x)', msg: String.raw`Erreur de signe : $y' = -3y$ donne $\mathrm{e}^{-3x}$.` }, { expr: 'exp(-3*x)', msg: String.raw`N'oublie pas la constante : $C = y(0) = 2$.` }],
      hint: String.raw`$y' + ay = 0 \iff y = C\mathrm{e}^{-ax}$, et $C = y(0)$.`,
      explain: String.raw`$y = C\mathrm{e}^{-3x}$ ; $y(0) = C = 2$, donc $y(x) = 2\mathrm{e}^{-3x}$.` },
    { id: 'm8-x-002', level: 1, check: 'expr', vars: ['x'],
      prompt: String.raw`Résous $2y' + y = 0$ avec $y(0) = 4$.`,
      answer: '4*exp(-x/2)',
      mistakes: [{ expr: '4*exp(-2*x)', msg: String.raw`Normalise d'abord : $y' + \frac{1}{2}y = 0$, donc $\mathrm{e}^{-x/2}$.` }, { expr: '4*exp(-x)', msg: String.raw`Le coefficient de $y'$ vaut 2 : divise par 2.` }],
      hint: String.raw`Divise par 2 pour avoir $y' + ay = 0$.`,
      explain: String.raw`$y' + \frac{1}{2}y = 0$ donc $y = C\mathrm{e}^{-x/2}$, et $C = y(0) = 4$ : $y = 4\mathrm{e}^{-x/2}$.` },
    { id: 'm8-x-003', level: 2, check: 'expr', vars: ['x'],
      prompt: String.raw`Résous $y' + 2xy = 0$ avec $y(0) = 3$.`,
      answer: '3*exp(-x^2)',
      mistakes: [{ expr: '3*exp(-2*x)', msg: String.raw`Il faut une **primitive** de $a(x) = 2x$ dans l'exponentielle : $A(x) = x^2$.` }, { expr: '3*exp(x^2)', msg: String.raw`Erreur de signe : $y = C\mathrm{e}^{-A(x)}$.` }],
      hint: String.raw`$y = C\mathrm{e}^{-A(x)}$ où $A$ est une primitive de $2x$.`,
      explain: String.raw`$A(x) = x^2$, donc $y = C\mathrm{e}^{-x^2}$ ; $y(0) = C = 3$ : $y = 3\mathrm{e}^{-x^2}$.` },
    { id: 'm8-x-004', level: 2, check: 'expr', vars: ['x'], domain: [0.3, 4],
      prompt: String.raw`Sur $]0, +\infty[$, résous $xy' + y = 0$ avec $y(1) = 2$.`,
      answer: '2/x',
      mistakes: [{ expr: '2*x', msg: String.raw`Erreur de signe : $y' = -\frac{y}{x}$ donne $\mathrm{e}^{-\ln x} = \frac{1}{x}$.` }, { expr: '2*exp(1-x)', msg: String.raw`Normalise : le coefficient de $y$ devient $\frac{1}{x}$, dont une primitive est $\ln x$ (pas $x$).` }],
      hint: String.raw`Normalise : $y' + \frac{1}{x}y = 0$, et une primitive de $\frac{1}{x}$ est $\ln x$.`,
      explain: String.raw`$y = C\mathrm{e}^{-\ln x} = \frac{C}{x}$ ; $y(1) = C = 2$ : $y = \frac{2}{x}$. (Variante : $(xy)' = xy' + y = 0$ donc $xy$ est constant.)` },
    { id: 'm8-x-005', level: 1, check: 'value', vars: [],
      prompt: String.raw`Donne la solution particulière constante de $y' + 4y = 10$.`,
      answer: '5/2',
      mistakes: [{ expr: '10', msg: String.raw`$y_p = 10$ donne $0 + 40 \neq 10$ : divise par $a = 4$.` }, { expr: '40', msg: String.raw`On divise par $a$, on ne multiplie pas.` }],
      hint: String.raw`Une constante a une dérivée nulle : $4y_p = 10$.`,
      explain: String.raw`$y_p' = 0$ donc $4y_p = 10$ et $y_p = \frac{10}{4} = \frac{5}{2}$.` },
    { id: 'm8-x-006', level: 2, check: 'expr', vars: ['x'],
      prompt: String.raw`Résous $y' + 2y = 6$ avec $y(0) = 0$.`,
      answer: '3-3*exp(-2*x)',
      mistakes: [{ expr: '6-6*exp(-2*x)', msg: String.raw`La solution particulière constante est $\frac{6}{2} = 3$, pas 6.` }, { expr: '3+3*exp(-2*x)', msg: String.raw`Erreur sur la constante : $y(0) = 3 + C = 0$ donne $C = -3$.` }],
      hint: String.raw`$y = y_p + C\mathrm{e}^{-2x}$ avec $y_p$ constante ; la condition initiale s'applique à la solution complète.`,
      explain: String.raw`$y_p = 3$, $y = 3 + C\mathrm{e}^{-2x}$, $y(0) = 3 + C = 0$ donc $C = -3$ : $y = 3 - 3\mathrm{e}^{-2x}$.` },
    { id: 'm8-x-007', level: 2, check: 'expr', vars: ['x'],
      prompt: String.raw`Résous $y' + y = x$ avec $y(0) = 0$.`,
      answer: 'exp(-x)+x-1',
      mistakes: [{ expr: 'x-1', msg: String.raw`C'est la solution particulière, mais $y(0) = -1 \neq 0$ : ajoute $C\mathrm{e}^{-x}$.` }, { expr: 'x', msg: String.raw`$y = x$ donne $y' + y = 1 + x \neq x$ : cherche $y_p = \alpha x + \beta$.` }],
      hint: String.raw`Cherche $y_p = \alpha x + \beta$, puis $y = y_p + C\mathrm{e}^{-x}$.`,
      explain: String.raw`$\alpha + \alpha x + \beta = x$ donne $\alpha = 1$, $\beta = -1$ : $y_p = x - 1$. $y = x - 1 + C\mathrm{e}^{-x}$ et $y(0) = -1 + C = 0$, donc $C = 1$ : $y = \mathrm{e}^{-x} + x - 1$.` },
    { id: 'm8-x-008', level: 2, check: 'expr', vars: ['x'],
      prompt: String.raw`Résous $y' - 2y = \mathrm{e}^{x}$ avec $y(0) = 0$.`,
      answer: 'exp(2*x)-exp(x)',
      mistakes: [{ expr: '-exp(x)', msg: String.raw`C'est la solution particulière, mais elle vaut $-1$ en 0 : ajoute $C\mathrm{e}^{2x}$.` }, { expr: 'exp(x)-exp(2*x)', msg: String.raw`Erreur de signe sur $\lambda$ : $\lambda - 2\lambda = 1$ donne $\lambda = -1$.` }],
      hint: String.raw`$y_h = C\mathrm{e}^{2x}$ ; cherche $y_p = \lambda\mathrm{e}^{x}$.`,
      explain: String.raw`$\lambda\mathrm{e}^{x} - 2\lambda\mathrm{e}^{x} = \mathrm{e}^{x}$ donne $\lambda = -1$. $y = C\mathrm{e}^{2x} - \mathrm{e}^{x}$ et $y(0) = C - 1 = 0$ : $y = \mathrm{e}^{2x} - \mathrm{e}^{x}$.` },
    { id: 'm8-x-009', level: 3, check: 'expr', vars: ['x'],
      prompt: String.raw`Résous $y' + y = \mathrm{e}^{-x}$ avec $y(0) = 0$.`,
      answer: 'x*exp(-x)',
      mistakes: [{ expr: '(x+1)*exp(-x)', msg: String.raw`Tu as pris $C = 1$ : impose $y(0) = 0$, ce qui donne $C = 0$.` }, { expr: 'x*exp(x)', msg: String.raw`Erreur de signe : la solution doit contenir $\mathrm{e}^{-x}$.` }],
      hint: String.raw`$\mathrm{e}^{-x}$ est solution de l'homogène : cherche $y_p = \lambda x\mathrm{e}^{-x}$.`,
      explain: String.raw`Avec $y_p = \lambda x\mathrm{e}^{-x}$ : $y_p' + y_p = \lambda\mathrm{e}^{-x}$, donc $\lambda = 1$. $y = (x + C)\mathrm{e}^{-x}$ et $y(0) = C = 0$ : $y = x\mathrm{e}^{-x}$.` },
    { id: 'm8-x-010', level: 3, check: 'expr', vars: ['x'],
      prompt: String.raw`Résous $y' + y = \cos x$ avec $y(0) = 0$.`,
      answer: '(cos(x)+sin(x)-exp(-x))/2',
      mistakes: [{ expr: '(cos(x)+sin(x))/2', msg: String.raw`C'est la solution particulière, mais elle vaut $\frac{1}{2}$ en 0 : ajoute $C\mathrm{e}^{-x}$.` }, { expr: '(cos(x)-sin(x)-exp(-x))/2', msg: String.raw`Erreur dans la méthode complexe : $\frac{1}{1 + \mathrm{i}} = \frac{1 - \mathrm{i}}{2}$, ce qui donne $+\sin x$.` }],
      hint: String.raw`Cherche $y_p = \lambda\cos x + \mu\sin x$ (ou $\operatorname{Re}\frac{\mathrm{e}^{\mathrm{i}x}}{1 + \mathrm{i}}$).`,
      explain: String.raw`$y_p = \lambda\cos x + \mu\sin x$ : $(\mu + \lambda)\cos x + (\mu - \lambda)\sin x = \cos x$, donc $\lambda = \mu = \frac{1}{2}$. $y = \frac{\cos x + \sin x}{2} + C\mathrm{e}^{-x}$ et $y(0) = \frac{1}{2} + C = 0$ : $C = -\frac{1}{2}$.` },
    { id: 'm8-x-011', level: 3, check: 'expr', vars: ['x'],
      prompt: String.raw`Par variation de la constante, résous $y' - y = x\,\mathrm{e}^{x}$ avec $y(0) = 0$.`,
      answer: 'x^2*exp(x)/2',
      mistakes: [{ expr: 'x*exp(x)', msg: String.raw`$C'(x) = x$ : il faut encore primitiver, $C(x) = \frac{x^2}{2}$.` }, { expr: 'x^2*exp(x)', msg: String.raw`Une primitive de $x$ est $\frac{x^2}{2}$ : facteur $\frac{1}{2}$ oublié.` }],
      hint: String.raw`Pose $y = C(x)\mathrm{e}^{x}$ : tu obtiens $C'(x) = x$.`,
      explain: String.raw`$y = C(x)\mathrm{e}^{x}$ donne $C'(x)\mathrm{e}^{x} = x\mathrm{e}^{x}$, donc $C(x) = \frac{x^2}{2} + K$. $y(0) = K = 0$ : $y = \frac{x^2}{2}\mathrm{e}^{x}$.` },
    { id: 'm8-x-012', level: 3, check: 'expr', vars: ['x'], domain: [0.3, 4],
      prompt: String.raw`Sur $]0, +\infty[$, résous $xy' - y = x^2$ avec $y(1) = 3$.`,
      answer: 'x^2+2*x',
      mistakes: [{ expr: 'x^3/2+5*x/2', msg: String.raw`En normalisant, divise **aussi** le second membre par $x$ : $y' - \frac{y}{x} = x$.` }, { expr: 'x^2+3*x', msg: String.raw`Vérifie la condition : $y(1) = 1 + K = 3$ donne $K = 2$.` }],
      hint: String.raw`Normalise : $y' - \frac{1}{x}y = x$. Homogène : $y = Cx$. Puis pose $y = C(x)\,x$.`,
      explain: String.raw`$y_h = Cx$. Avec $y = C(x)x$ : $C'(x)\,x = x$, donc $C(x) = x + K$ et $y = x^2 + Kx$. $y(1) = 1 + K = 3$ : $y = x^2 + 2x$.` },
    { id: 'm8-x-013', level: 2, check: 'expr', vars: ['x'],
      prompt: String.raw`Résous $y' + 2xy = x$ avec $y(0) = 1$.`,
      answer: '(1+exp(-x^2))/2',
      mistakes: [{ expr: 'exp(-x^2)', msg: String.raw`Il manque la solution particulière : une constante convient ($2x \cdot \frac{1}{2} = x$).` }, { expr: '1/2+exp(-x^2)', msg: String.raw`Applique $y(0) = 1$ à la solution complète : $\frac{1}{2} + C = 1$, donc $C = \frac{1}{2}$.` }],
      hint: String.raw`Une solution particulière constante existe : $2x\,y_p = x$.`,
      explain: String.raw`$y_p = \frac{1}{2}$ et $y_h = C\mathrm{e}^{-x^2}$. $y(0) = \frac{1}{2} + C = 1$, donc $C = \frac{1}{2}$ : $y = \frac{1 + \mathrm{e}^{-x^2}}{2}$.` },
    { id: 'm8-x-014', level: 1, check: 'value', vars: [],
      prompt: String.raw`Un circuit RC série a $R = 10\ \mathrm{k}\Omega$ et $C = 100\ \mu\mathrm{F}$. Donne la constante de temps $\tau$ en secondes.`,
      answer: '1',
      mistakes: [{ expr: '1000', msg: String.raw`Convertis : $10\ \mathrm{k}\Omega = 10^4\ \Omega$ et $100\ \mu\mathrm{F} = 10^{-4}\ \mathrm{F}$.` }],
      hint: String.raw`$\tau = RC$ en unités SI.`,
      explain: String.raw`$\tau = RC = 10^4 \times 10^{-4} = 1\ \mathrm{s}$.` },
    { id: 'm8-x-015', level: 2, check: 'value', vars: [],
      prompt: String.raw`Un circuit RL série a $L = 0{,}1\ \mathrm{H}$ et $R = 50\ \Omega$. Donne la constante de temps en secondes (nombre décimal ou fraction).`,
      answer: '0.002',
      mistakes: [{ expr: '5', msg: String.raw`$\tau = \frac{L}{R}$, pas $LR$.` }, { expr: '500', msg: String.raw`$\frac{R}{L}$ est l'inverse de la constante de temps : $\tau = \frac{L}{R}$.` }],
      hint: String.raw`$\tau = \frac{L}{R}$.`,
      explain: String.raw`$\tau = \frac{L}{R} = \frac{0{,}1}{50} = 0{,}002\ \mathrm{s} = 2\ \mathrm{ms}$.` },
    { id: 'm8-x-016', level: 2, check: 'expr', vars: ['t'], domain: [0, 3],
      prompt: String.raw`Un condensateur initialement déchargé se charge sous $E = 5\ \mathrm{V}$ avec $\tau = 0{,}5\ \mathrm{s}$. Donne $u_C(t)$ (variable $t$).`,
      answer: '5*(1-exp(-2*t))',
      mistakes: [{ expr: '5*(1-exp(-t/2))', msg: String.raw`L'exponentielle est $\mathrm{e}^{-t/\tau} = \mathrm{e}^{-t/0{,}5} = \mathrm{e}^{-2t}$.` }, { expr: '5*exp(-2*t)', msg: String.raw`C'est une décharge : en charge, $u_C(0) = 0$ et $u_C \to E$.` }],
      hint: String.raw`$u_C(t) = E\left(1 - \mathrm{e}^{-t/\tau}\right)$.`,
      explain: String.raw`$\frac{1}{\tau} = 2\ \mathrm{s}^{-1}$, donc $u_C(t) = 5\left(1 - \mathrm{e}^{-2t}\right)$.` },
    { id: 'm8-x-017', level: 2, check: 'expr', vars: ['t'], domain: [0, 3],
      prompt: String.raw`Un condensateur chargé sous $U_0 = 12\ \mathrm{V}$ se décharge dans une résistance avec $\tau = 2\ \mathrm{s}$. Donne $u_C(t)$.`,
      answer: '12*exp(-t/2)',
      mistakes: [{ expr: '12*exp(-2*t)', msg: String.raw`$\mathrm{e}^{-t/\tau}$ avec $\tau = 2$ donne $\mathrm{e}^{-t/2}$.` }, { expr: '12*(1-exp(-t/2))', msg: String.raw`C'est une charge ; en décharge, $u_C(0) = U_0$ et $u_C \to 0$.` }],
      hint: String.raw`$RC\,u' + u = 0$ avec $u(0) = U_0$.`,
      explain: String.raw`$u_C(t) = U_0\,\mathrm{e}^{-t/\tau} = 12\,\mathrm{e}^{-t/2}$.` },
    { id: 'm8-x-018', level: 2, check: 'value', vars: [],
      prompt: String.raw`Lors de la charge d'un condensateur ($u_C(0) = 0$), donne la valeur exacte du rapport $\frac{u_C(\tau)}{E}$.`,
      answer: '1-exp(-1)',
      mistakes: [{ expr: 'exp(-1)', msg: String.raw`$\mathrm{e}^{-1} \approx 37\ \%$ est ce qui **reste** à parcourir.` }, { expr: '0.63', msg: String.raw`C'est une valeur approchée ; donne la valeur exacte avec exp.` }],
      hint: String.raw`$u_C(t) = E(1 - \mathrm{e}^{-t/\tau})$, évalue en $t = \tau$.`,
      explain: String.raw`$\frac{u_C(\tau)}{E} = 1 - \mathrm{e}^{-1} \approx 0{,}632$ : 63 % de la valeur finale.` },
    { id: 'm8-x-019', level: 2, check: 'value', vars: [],
      prompt: String.raw`Un condensateur se charge avec $\tau = 2\ \mathrm{s}$. Au bout de combien de temps (valeur exacte, en s) $u_C$ atteint-elle $\frac{E}{2}$ ?`,
      answer: '2*ln(2)',
      mistakes: [{ expr: '1', msg: String.raw`Ce n'est pas $\frac{\tau}{2}$ : résous $\mathrm{e}^{-t/\tau} = \frac{1}{2}$.` }, { expr: 'ln(2)/2', msg: String.raw`$t = \tau\ln 2$ : on multiplie par $\tau$.` }],
      hint: String.raw`Résous $1 - \mathrm{e}^{-t/2} = \frac{1}{2}$.`,
      explain: String.raw`$\mathrm{e}^{-t/2} = \frac{1}{2} \iff -\frac{t}{2} = -\ln 2 \iff t = 2\ln 2 \approx 1{,}39\ \mathrm{s}$.` },
    { id: 'm8-x-020', level: 2, check: 'expr', vars: ['t'], domain: [0, 2],
      prompt: String.raw`Circuit RL série : $E = 10\ \mathrm{V}$, $R = 5\ \Omega$, $L = 1\ \mathrm{H}$, $i(0) = 0$. Donne $i(t)$ en ampères.`,
      answer: '2*(1-exp(-5*t))',
      mistakes: [{ expr: '2*(1-exp(-t/5))', msg: String.raw`$\tau = \frac{L}{R} = 0{,}2\ \mathrm{s}$, donc $\mathrm{e}^{-t/\tau} = \mathrm{e}^{-5t}$.` }, { expr: '10*(1-exp(-5*t))', msg: String.raw`L'intensité finale est $\frac{E}{R} = 2\ \mathrm{A}$.` }],
      hint: String.raw`$L\,i' + Ri = E$ : $i_\infty = \frac{E}{R}$ et $\tau = \frac{L}{R}$.`,
      explain: String.raw`$i' + 5i = 10$ : $i_\infty = 2$, $\tau = 0{,}2$. Avec $i(0) = 0$ : $i(t) = 2\left(1 - \mathrm{e}^{-5t}\right)$.` },
    { id: 'm8-x-021', level: 1, check: 'set', vars: [],
      prompt: String.raw`Donne les racines de l'équation caractéristique de $y'' - 3y' + 2y = 0$ (sépare-les par ;).`,
      answer: '1;2',
      hint: String.raw`$r^2 - 3r + 2 = 0$ : somme 3, produit 2.`,
      explain: String.raw`$r^2 - 3r + 2 = (r - 1)(r - 2)$ : racines 1 et 2.` },
    { id: 'm8-x-022', level: 2, check: 'set', vars: [],
      prompt: String.raw`Donne les racines (complexes) de l'équation caractéristique de $y'' + 2y' + 5y = 0$ (sépare-les par ;).`,
      answer: '-1+2*i;-1-2*i',
      hint: String.raw`$\Delta = 4 - 20 = -16$.`,
      explain: String.raw`$r^2 + 2r + 5 = 0$, $\Delta = -16 = (4\mathrm{i})^2$, $r = \frac{-2 \pm 4\mathrm{i}}{2} = -1 \pm 2\mathrm{i}$.` },
    { id: 'm8-x-023', level: 1, check: 'set', vars: [],
      prompt: String.raw`Donne les racines de l'équation caractéristique de $y'' + 9y = 0$ (sépare-les par ;).`,
      answer: '3*i;-3*i',
      hint: String.raw`$r^2 + 9 = 0$.`,
      explain: String.raw`$r^2 = -9 = (3\mathrm{i})^2$ : $r = \pm 3\mathrm{i}$, d'où $y = C_1\cos 3x + C_2\sin 3x$.` },
    { id: 'm8-x-024', level: 2, check: 'expr', vars: ['x'],
      prompt: String.raw`Résous $y'' - 3y' + 2y = 0$ avec $y(0) = 0$ et $y'(0) = 1$.`,
      answer: 'exp(2*x)-exp(x)',
      mistakes: [{ expr: 'exp(x)-exp(2*x)', msg: String.raw`Erreur de signe : $C_1 + C_2 = 0$ et $C_1 + 2C_2 = 1$ donnent $C_2 = 1$, $C_1 = -1$.` }],
      hint: String.raw`$y = C_1\mathrm{e}^{x} + C_2\mathrm{e}^{2x}$ ; écris $y(0)$ et $y'(0)$.`,
      explain: String.raw`$y(0) = C_1 + C_2 = 0$ et $y'(0) = C_1 + 2C_2 = 1$, d'où $C_2 = 1$, $C_1 = -1$ : $y = \mathrm{e}^{2x} - \mathrm{e}^{x}$.` },
    { id: 'm8-x-025', level: 2, check: 'expr', vars: ['x'],
      prompt: String.raw`Résous $y'' + 4y = 0$ avec $y(0) = 1$ et $y'(0) = 2$.`,
      answer: 'cos(2*x)+sin(2*x)',
      mistakes: [{ expr: 'cos(2*x)+2*sin(2*x)', msg: String.raw`$(C_2\sin 2x)' = 2C_2\cos 2x$ : $y'(0) = 2C_2 = 2$ donne $C_2 = 1$.` }, { expr: 'cos(4*x)+sin(4*x)/2', msg: String.raw`La pulsation est $\sqrt{4} = 2$, pas 4.` }],
      hint: String.raw`$y = C_1\cos 2x + C_2\sin 2x$.`,
      explain: String.raw`$y(0) = C_1 = 1$ ; $y' = -2C_1\sin 2x + 2C_2\cos 2x$, $y'(0) = 2C_2 = 2$ donc $C_2 = 1$ : $y = \cos 2x + \sin 2x$.` },
    { id: 'm8-x-026', level: 2, check: 'expr', vars: ['x'],
      prompt: String.raw`Résous $y'' + 2y' + y = 0$ avec $y(0) = 1$ et $y'(0) = 0$.`,
      answer: '(1+x)*exp(-x)',
      mistakes: [{ expr: 'exp(-x)', msg: String.raw`Racine double : $y = (C_1x + C_2)\mathrm{e}^{-x}$. Ici $y'(0) = -1 \neq 0$, il manque le terme en $x\mathrm{e}^{-x}$.` }, { expr: '(1-x)*exp(-x)', msg: String.raw`Erreur de signe : $y'(0) = C_1 - C_2 = 0$ donne $C_1 = 1$.` }],
      hint: String.raw`$(r + 1)^2 = 0$ : $y = (C_1x + C_2)\mathrm{e}^{-x}$.`,
      explain: String.raw`$y(0) = C_2 = 1$ ; $y' = (C_1 - C_2 - C_1x)\mathrm{e}^{-x}$, $y'(0) = C_1 - C_2 = 0$ donc $C_1 = 1$ : $y = (1 + x)\mathrm{e}^{-x}$.` },
    { id: 'm8-x-027', level: 3, check: 'expr', vars: ['x'],
      prompt: String.raw`Résous $y'' + 2y' + 5y = 0$ avec $y(0) = 0$ et $y'(0) = 2$.`,
      answer: 'exp(-x)*sin(2*x)',
      mistakes: [{ expr: '2*exp(-x)*sin(2*x)', msg: String.raw`$y'(0) = 2C_2$ (facteur $\beta = 2$ de la dérivée) : $C_2 = 1$.` }, { expr: 'exp(-2*x)*sin(x)', msg: String.raw`Partie réelle et partie imaginaire échangées : $r = -1 \pm 2\mathrm{i}$ donne $\mathrm{e}^{-x}$ et $\sin 2x$.` }],
      hint: String.raw`$r = -1 \pm 2\mathrm{i}$ : $y = \mathrm{e}^{-x}(C_1\cos 2x + C_2\sin 2x)$.`,
      explain: String.raw`$y(0) = C_1 = 0$, donc $y = C_2\mathrm{e}^{-x}\sin 2x$ et $y' = C_2\mathrm{e}^{-x}(2\cos 2x - \sin 2x)$, $y'(0) = 2C_2 = 2$ : $y = \mathrm{e}^{-x}\sin 2x$.` },
    { id: 'm8-x-028', level: 2, check: 'expr', vars: ['x'],
      prompt: String.raw`Résous $y'' - y = 0$ avec $y(0) = 1$ et $y'(0) = 0$.`,
      answer: 'cosh(x)',
      mistakes: [{ expr: 'cos(x)', msg: String.raw`$\cos x$ est solution de $y'' + y = 0$ ; ici $r = \pm 1$ (réels).` }, { expr: 'exp(x)', msg: String.raw`$y'(0) = 1 \neq 0$ : il faut combiner $\mathrm{e}^{x}$ et $\mathrm{e}^{-x}$.` }],
      hint: String.raw`$y = C_1\mathrm{e}^{x} + C_2\mathrm{e}^{-x}$ ; tu peux écrire le résultat avec cosh.`,
      explain: String.raw`$C_1 + C_2 = 1$ et $C_1 - C_2 = 0$ : $C_1 = C_2 = \frac{1}{2}$, donc $y = \frac{\mathrm{e}^{x} + \mathrm{e}^{-x}}{2} = \operatorname{ch} x$.` },
    { id: 'm8-x-029', level: 2, check: 'expr', vars: ['x'],
      prompt: String.raw`Résous $y'' + y = 1$ avec $y(0) = 0$ et $y'(0) = 0$.`,
      answer: '1-cos(x)',
      mistakes: [{ expr: 'cos(x)-1', msg: String.raw`Erreur de signe : $y(0) = 1 + C_1 = 0$ donne $C_1 = -1$, d'où $1 - \cos x$.` }, { expr: '-cos(x)', msg: String.raw`Il manque la solution particulière constante $y_p = 1$.` }],
      hint: String.raw`$y_p = 1$ ; $y = 1 + C_1\cos x + C_2\sin x$.`,
      explain: String.raw`$y(0) = 1 + C_1 = 0$ donne $C_1 = -1$ ; $y'(0) = C_2 = 0$ : $y = 1 - \cos x$.` },
    { id: 'm8-x-030', level: 3, check: 'expr', vars: ['x'],
      prompt: String.raw`Résous $y'' - 3y' + 2y = 4$ avec $y(0) = 0$ et $y'(0) = 0$.`,
      answer: '2-4*exp(x)+2*exp(2*x)',
      mistakes: [{ expr: '4-8*exp(x)+4*exp(2*x)', msg: String.raw`La solution particulière constante est $\frac{4}{2} = 2$, pas 4.` }, { expr: '-4*exp(x)+2*exp(2*x)', msg: String.raw`Tu as oublié d'ajouter $y_p = 2$ à la fin (et $y(0)$ vaut alors $-2$).` }],
      hint: String.raw`$y_p = \frac{4}{2} = 2$, puis $y = 2 + C_1\mathrm{e}^{x} + C_2\mathrm{e}^{2x}$.`,
      explain: String.raw`$2 + C_1 + C_2 = 0$ et $C_1 + 2C_2 = 0$ : $C_2 = 2$, $C_1 = -4$. Donc $y = 2 - 4\mathrm{e}^{x} + 2\mathrm{e}^{2x}$.` },
    { id: 'm8-x-031', level: 2, check: 'expr', vars: ['x'],
      prompt: String.raw`Trouve la solution particulière de la forme $\lambda\mathrm{e}^{2x}$ de $y'' + y' - 2y = \mathrm{e}^{2x}$.`,
      answer: 'exp(2*x)/4',
      mistakes: [{ expr: 'exp(2*x)/2', msg: String.raw`N'oublie pas le terme $y'$ : $4\lambda + 2\lambda - 2\lambda = 4\lambda$.` }, { expr: 'exp(2*x)', msg: String.raw`$\lambda = \frac{1}{P(2)}$ avec $P(2) = 4 + 2 - 2 = 4$.` }],
      hint: String.raw`$\lambda = \frac{1}{P(2)}$ avec $P(r) = r^2 + r - 2$.`,
      explain: String.raw`$y_p'' + y_p' - 2y_p = (4 + 2 - 2)\lambda\mathrm{e}^{2x} = 4\lambda\mathrm{e}^{2x}$, donc $\lambda = \frac{1}{4}$.` },
    { id: 'm8-x-032', level: 3, check: 'expr', vars: ['x'],
      prompt: String.raw`Trouve la solution particulière de la forme $\lambda x\,\mathrm{e}^{x}$ de $y'' - 3y' + 2y = \mathrm{e}^{x}$.`,
      answer: '-x*exp(x)',
      mistakes: [{ expr: 'x*exp(x)', msg: String.raw`Erreur de signe : $\lambda = \frac{1}{P'(1)}$ avec $P'(1) = 2 - 3 = -1$.` }],
      hint: String.raw`Calcule $y_p'$ et $y_p''$, ou utilise $\lambda = \frac{1}{P'(1)}$ ($1$ est racine simple).`,
      explain: String.raw`$y_p' = \lambda(1 + x)\mathrm{e}^{x}$, $y_p'' = \lambda(2 + x)\mathrm{e}^{x}$. Somme : $\lambda(2 + x - 3 - 3x + 2x)\mathrm{e}^{x} = -\lambda\mathrm{e}^{x}$, donc $\lambda = -1$ : $y_p = -x\mathrm{e}^{x}$.` },
    { id: 'm8-x-033', level: 3, check: 'expr', vars: ['x'],
      prompt: String.raw`Trouve la solution particulière de la forme $\lambda x^2\mathrm{e}^{-2x}$ de $y'' + 4y' + 4y = \mathrm{e}^{-2x}$.`,
      answer: 'x^2*exp(-2*x)/2',
      mistakes: [{ expr: 'x^2*exp(-2*x)', msg: String.raw`Racine double : $\lambda = \frac{1}{2a} = \frac{1}{2}$.` }],
      hint: String.raw`$-2$ est racine double : pose $y = z(x)\mathrm{e}^{-2x}$, l'équation devient $z'' = 1$.`,
      explain: String.raw`Avec $y = z\,\mathrm{e}^{-2x}$ : $y'' + 4y' + 4y = z''\mathrm{e}^{-2x}$. Il faut $z'' = 1$, donc $z = \frac{x^2}{2}$ : $y_p = \frac{x^2}{2}\mathrm{e}^{-2x}$.` },
    { id: 'm8-x-034', level: 2, check: 'expr', vars: ['x'],
      prompt: String.raw`Trouve la solution particulière de la forme $\lambda\cos 2x$ de $y'' + y = \cos 2x$.`,
      answer: '-cos(2*x)/3',
      mistakes: [{ expr: 'cos(2*x)/3', msg: String.raw`Erreur de signe : $(\cos 2x)'' = -4\cos 2x$, donc $-4\lambda + \lambda = -3\lambda = 1$.` }, { expr: 'cos(2*x)/5', msg: String.raw`La dérivée seconde de $\cos 2x$ est $-4\cos 2x$ (signe moins).` }],
      hint: String.raw`$(\lambda\cos 2x)'' = -4\lambda\cos 2x$.`,
      explain: String.raw`$-4\lambda\cos 2x + \lambda\cos 2x = -3\lambda\cos 2x = \cos 2x$, donc $\lambda = -\frac{1}{3}$.` },
    { id: 'm8-x-035', level: 3, check: 'expr', vars: ['x'],
      prompt: String.raw`(Résonance) Trouve la solution particulière de la forme $x(\lambda\cos x + \mu\sin x)$ de $y'' + y = \cos x$.`,
      answer: 'x*sin(x)/2',
      mistakes: [{ expr: 'x*sin(x)', msg: String.raw`Coefficient : $y_p'' + y_p = 2\mu\cos x - 2\lambda\sin x$, donc $\mu = \frac{1}{2}$.` }, { expr: 'x*cos(x)/2', msg: String.raw`C'est le terme en sinus qui survit : $\lambda = 0$ et $\mu = \frac{1}{2}$.` }],
      hint: String.raw`Calcule $y_p''$ : les termes en $x$ se compensent avec $y_p$.`,
      explain: String.raw`Pour $y_p = x(\lambda\cos x + \mu\sin x)$ : $y_p'' + y_p = 2(\mu\cos x - \lambda\sin x)$. Il faut $2\mu = 1$ et $\lambda = 0$ : $y_p = \frac{x\sin x}{2}$.` },
    { id: 'm8-x-036', level: 2, check: 'value', vars: [],
      prompt: String.raw`Circuit RLC série avec $L = 10\ \mathrm{mH}$ et $C = 1\ \mu\mathrm{F}$. Donne la pulsation propre $\omega_0$ en rad/s.`,
      answer: '10000',
      mistakes: [{ expr: '100000000', msg: String.raw`$\frac{1}{LC} = \omega_0^2$ : prends la racine carrée.` }, { expr: '0.0001', msg: String.raw`$\sqrt{LC}$ est l'inverse de $\omega_0$.` }],
      hint: String.raw`$\omega_0 = \frac{1}{\sqrt{LC}}$ avec $L = 10^{-2}\ \mathrm{H}$, $C = 10^{-6}\ \mathrm{F}$.`,
      explain: String.raw`$LC = 10^{-8}$, donc $\omega_0 = \frac{1}{10^{-4}} = 10^4\ \mathrm{rad/s}$.` },
    { id: 'm8-x-037', level: 2, check: 'value', vars: [],
      prompt: String.raw`Même circuit ($L = 10\ \mathrm{mH}$, $C = 1\ \mu\mathrm{F}$) avec $R = 100\ \Omega$. Calcule le facteur d'amortissement $\xi = \frac{R}{2}\sqrt{\frac{C}{L}}$.`,
      answer: '1/2',
      mistakes: [{ expr: '5000', msg: String.raw`Rapport inversé : c'est $\sqrt{\frac{C}{L}} = \sqrt{10^{-4}} = 10^{-2}$.` }, { expr: '1', msg: String.raw`$1$ est le facteur de qualité $Q = \frac{1}{2\xi}$, pas $\xi$.` }],
      hint: String.raw`$\sqrt{\frac{C}{L}} = \sqrt{\frac{10^{-6}}{10^{-2}}}$.`,
      explain: String.raw`$\xi = 50 \times \sqrt{10^{-4}} = 50 \times 10^{-2} = 0{,}5 \lt 1$ : régime pseudo-périodique.` },
    { id: 'm8-x-038', level: 2, check: 'value', vars: [],
      prompt: String.raw`Toujours avec $L = 10\ \mathrm{mH}$ et $C = 1\ \mu\mathrm{F}$ : quelle résistance (en ohms) donne le régime critique ?`,
      answer: '200',
      mistakes: [{ expr: '100', msg: String.raw`$R_c = 2\sqrt{\frac{L}{C}}$ : facteur 2 oublié.` }, { expr: '0.02', msg: String.raw`Rapport inversé : $\sqrt{\frac{L}{C}} = \sqrt{10^4} = 100$.` }],
      hint: String.raw`$\xi = 1 \iff R = 2\sqrt{\frac{L}{C}}$.`,
      explain: String.raw`$R_c = 2\sqrt{\frac{10^{-2}}{10^{-6}}} = 2 \times 100 = 200\ \Omega$.` },
    { id: 'm8-x-039', level: 1, check: 'value', vars: [],
      prompt: String.raw`Une masse $m = 0{,}5\ \mathrm{kg}$ est suspendue à un ressort de raideur $k = 50\ \mathrm{N/m}$ (sans frottement). Donne la pulsation propre $\omega_0$ en rad/s.`,
      answer: '10',
      mistakes: [{ expr: '100', msg: String.raw`$\omega_0^2 = \frac{k}{m} = 100$ : prends la racine.` }, { expr: '1/10', msg: String.raw`Rapport inversé : $\omega_0 = \sqrt{\frac{k}{m}}$.` }],
      hint: String.raw`$mx'' + kx = 0$ donne $\omega_0 = \sqrt{\frac{k}{m}}$.`,
      explain: String.raw`$\omega_0 = \sqrt{\frac{50}{0{,}5}} = \sqrt{100} = 10\ \mathrm{rad/s}$ (période $T_0 = \frac{\pi}{5} \approx 0{,}63\ \mathrm{s}$).` },
    { id: 'm8-x-040', level: 2, check: 'expr', vars: ['t'], domain: [0, 3],
      prompt: String.raw`Oscillateur libre $x'' + 4x = 0$, lâché sans vitesse depuis $x(0) = 3$ (donc $x'(0) = 0$). Donne $x(t)$.`,
      answer: '3*cos(2*t)',
      mistakes: [{ expr: '3*cos(4*t)', msg: String.raw`$\omega_0^2 = 4$ donc $\omega_0 = 2$.` }, { expr: '3*sin(2*t)', msg: String.raw`$\sin 0 = 0 \neq 3$ : la position initiale impose un cosinus.` }],
      hint: String.raw`$x(t) = X_0\cos\omega_0 t + \frac{V_0}{\omega_0}\sin\omega_0 t$.`,
      explain: String.raw`$\omega_0 = 2$, $X_0 = 3$, $V_0 = 0$ : $x(t) = 3\cos 2t$.` }
  ]
});
