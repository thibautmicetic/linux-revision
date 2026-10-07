/* Maths — Chapitre 1 : Calcul algébrique */
APP.registerChapter({
  subject: 'maths',
  id: 'm1', num: 1,
  title: 'Calcul algébrique',
  subtitle: 'Puissances, identités remarquables, second degré, inéquations',

  /* ============================== FICHES DE COURS ============================== */
  sections: [
    {
      id: 'm1-s-regles',
      title: 'Fractions, puissances et racines',
      html: String.raw`
<h3>Fractions</h3>
<p>Pour $b, d \neq 0$ :</p>
<p>$$\frac{a}{b}+\frac{c}{d}=\frac{ad+bc}{bd} \qquad \frac{a}{b}\times\frac{c}{d}=\frac{ac}{bd} \qquad \frac{a/b}{c/d}=\frac{a}{b}\times\frac{d}{c}=\frac{ad}{bc}\ \ (c\neq 0)$$</p>
<ul>
<li>On ne simplifie que par un <b>facteur</b> commun : $\frac{ka}{kb}=\frac{a}{b}$, mais $\frac{a+k}{b+k}\neq\frac{a}{b}$.</li>
<li><b>Produit en croix</b> : $\frac{a}{b}=\frac{c}{d} \Leftrightarrow ad=bc$ (pour $b, d\neq 0$).</li>
<li>Diviser par un nombre non nul, c'est multiplier par son inverse.</li>
<li>Pour additionner, on prend de préférence le plus petit dénominateur commun : $\frac{1}{6}+\frac{3}{4}=\frac{2}{12}+\frac{9}{12}=\frac{11}{12}$.</li>
</ul>
<h3>Puissances</h3>
<p>Pour $a, b$ non nuls et $m, n$ entiers relatifs :</p>
<table class="tbl">
<tr><th>Règle</th><th>Formule</th></tr>
<tr><td>Produit</td><td>$a^m\,a^n=a^{m+n}$</td></tr>
<tr><td>Quotient</td><td>$\dfrac{a^m}{a^n}=a^{m-n}$</td></tr>
<tr><td>Puissance de puissance</td><td>$(a^m)^n=a^{mn}$</td></tr>
<tr><td>Produit, quotient élevés</td><td>$(ab)^n=a^nb^n$, $\left(\dfrac{a}{b}\right)^n=\dfrac{a^n}{b^n}$</td></tr>
<tr><td>Exposants nul et négatif</td><td>$a^0=1$, $a^{-n}=\dfrac{1}{a^n}$</td></tr>
</table>
<p>Ces règles restent vraies pour des exposants <b>réels</b> lorsque $a, b \gt 0$, avec la définition $a^x=\mathrm{e}^{x\ln a}$.</p>
<h3>Racines</h3>
<p>Pour $a \geq 0$, $\sqrt{a}$ est l'unique réel <b>positif</b> dont le carré vaut $a$. Pour $a, b \geq 0$ : $\sqrt{ab}=\sqrt{a}\,\sqrt{b}$ et, si $b \gt 0$, $\sqrt{\frac{a}{b}}=\frac{\sqrt a}{\sqrt b}$. Plus généralement, pour $a \gt 0$ : $\sqrt[n]{a}=a^{1/n}$ et $a^{p/q}=\sqrt[q]{a^p}$.</p>
<p><b>Méthode : extraire un carré.</b> On décompose sous la racine avec un carré parfait : $\sqrt{50}=\sqrt{25\times 2}=5\sqrt2$.</p>
<p><b>Méthode : rationaliser</b> un dénominateur $\sqrt a - \sqrt b$ : on multiplie en haut et en bas par la <b>quantité conjuguée</b> $\sqrt a+\sqrt b$, car $(\sqrt a-\sqrt b)(\sqrt a+\sqrt b)=a-b$.</p>
<div class="callout info"><b>Exemple corrigé</b> Simplifier $A=\frac{2}{\sqrt3+1}$. On multiplie par le conjugué $\sqrt3-1$ : $A=\frac{2(\sqrt3-1)}{(\sqrt3+1)(\sqrt3-1)}=\frac{2(\sqrt3-1)}{3-1}=\sqrt3-1$.</div>
<div class="callout warn"><b>Pièges classiques</b><ul>
<li>$\sqrt{a+b}\neq\sqrt a+\sqrt b$ : $\sqrt{9+16}=5$ mais $\sqrt9+\sqrt{16}=7$.</li>
<li>$\sqrt{x^2}=|x|$ et non $x$ : $\sqrt{(-3)^2}=3$.</li>
<li>$-3^2=-9$ alors que $(-3)^2=9$ : la puissance est prioritaire sur le signe moins.</li>
<li>$2^3 \times 2^4 = 2^7$ (on ajoute les exposants) mais $(2^3)^4 = 2^{12}$ (on les multiplie).</li>
</ul></div>
<div class="callout key"><b>À retenir</b> Un produit de puissances de même base additionne les exposants ; on ne simplifie une fraction que par un facteur commun ; $\sqrt{x^2}=|x|$ ; le conjugué fait disparaître les racines du dénominateur.</div>
`
    },
    {
      id: 'm1-s-abs',
      title: 'Valeur absolue',
      html: String.raw`
<p><b>Définition.</b> Pour $x$ réel : $|x| = \begin{cases} x & \text{si } x \geq 0 \\ -x & \text{si } x \lt 0 \end{cases}$</p>
<p>$|x|$ est la <b>distance</b> de $x$ à $0$ sur la droite réelle ; $|x-a|$ est la distance entre $x$ et $a$.</p>
<h3>Propriétés</h3>
<ul>
<li>$|x| \geq 0$ ; $|x| = 0 \Leftrightarrow x = 0$ ; $|-x| = |x|$ ; $\sqrt{x^2}=|x|$ ; $|x|^2 = x^2$.</li>
<li>$|xy| = |x|\,|y|$ et $\left|\frac{x}{y}\right| = \frac{|x|}{|y|}$ pour $y \neq 0$.</li>
<li><b>Inégalité triangulaire</b> : $|x+y| \leq |x| + |y|$, et sa variante $\big||x|-|y|\big| \leq |x-y|$.</li>
</ul>
<h3>Équations et inéquations</h3>
<p>Pour $r \geq 0$ :</p>
<p>$$|X| = r \Leftrightarrow X = r \text{ ou } X = -r \qquad |X| \leq r \Leftrightarrow -r \leq X \leq r \qquad |X| \geq r \Leftrightarrow X \leq -r \text{ ou } X \geq r$$</p>
<p>En particulier $|x-a| \leq r \Leftrightarrow x \in [a-r,\ a+r]$ : c'est l'intervalle de <b>centre</b> $a$ et de <b>rayon</b> $r$. Enfin $|A| = |B| \Leftrightarrow A = B$ ou $A = -B$.</p>
<p><b>Méthode générale</b> : quand aucune formule directe ne s'applique (plusieurs valeurs absolues), on les supprime en distinguant les cas selon le signe de leur contenu, puis on résout sur chaque intervalle et on regroupe.</p>
<div class="callout info"><b>Exemple corrigé</b> Résoudre $|2x-1| \lt 5$ : $-5 \lt 2x - 1 \lt 5 \Leftrightarrow -4 \lt 2x \lt 6 \Leftrightarrow -2 \lt x \lt 3$. Donc $S = ]-2,\,3[$.</div>
<div class="callout warn"><b>Pièges</b><ul>
<li>$|a+b| \neq |a| + |b|$ en général : $|3 + (-5)| = 2$ mais $|3| + |-5| = 8$.</li>
<li>$|x| = -2$ n'a <b>aucune</b> solution : une valeur absolue est positive.</li>
<li>$|x+3|$ est la distance de $x$ à $-3$ (et non à $3$).</li>
</ul></div>
<div class="callout key"><b>À retenir</b> $|x-a|$ = distance de $x$ à $a$ ; $|X| \leq r \Leftrightarrow -r \leq X \leq r$ ; $|X|=r \Leftrightarrow X=\pm r$.</div>
`
    },
    {
      id: 'm1-s-identites',
      title: 'Identités remarquables et binôme de Newton',
      html: String.raw`
<h3>Les trois identités de base</h3>
<p>$$(a+b)^2=a^2+2ab+b^2 \qquad (a-b)^2=a^2-2ab+b^2 \qquad (a-b)(a+b)=a^2-b^2$$</p>
<h3>Degré 3</h3>
<p>$$(a+b)^3=a^3+3a^2b+3ab^2+b^3 \qquad (a-b)^3=a^3-3a^2b+3ab^2-b^3$$</p>
<p>$$a^3-b^3=(a-b)(a^2+ab+b^2) \qquad a^3+b^3=(a+b)(a^2-ab+b^2)$$</p>
<p>Plus généralement : $a^n-b^n=(a-b)\left(a^{n-1}+a^{n-2}b+\dots+ab^{n-2}+b^{n-1}\right)=(a-b)\sum_{k=0}^{n-1}a^{n-1-k}b^k$. Et pour trois termes : $(a+b+c)^2=a^2+b^2+c^2+2ab+2ac+2bc$.</p>
<h3>Coefficients binomiaux</h3>
<p>Pour $0 \leq k \leq n$ : $\binom{n}{k}=\frac{n!}{k!\,(n-k)!}$ (« $k$ parmi $n$ ») est le nombre de façons de choisir $k$ objets parmi $n$. Propriétés : $\binom{n}{0}=\binom{n}{n}=1$, $\binom{n}{1}=n$, $\binom{n}{2}=\frac{n(n-1)}{2}$, symétrie $\binom{n}{k}=\binom{n}{n-k}$ et <b>relation de Pascal</b> $\binom{n}{k}+\binom{n}{k+1}=\binom{n+1}{k+1}$.</p>
<h3>Triangle de Pascal</h3>
<p>Chaque coefficient est la somme des deux coefficients situés juste au-dessus (relation de Pascal). La ligne $n$ contient $n+1$ coefficients.</p>
<table class="tbl">
<tr><th>$n$</th><th>coefficients $\binom{n}{0}, \dots, \binom{n}{n}$</th></tr>
<tr><td>0</td><td>1</td></tr>
<tr><td>1</td><td>1 — 1</td></tr>
<tr><td>2</td><td>1 — 2 — 1</td></tr>
<tr><td>3</td><td>1 — 3 — 3 — 1</td></tr>
<tr><td>4</td><td>1 — 4 — 6 — 4 — 1</td></tr>
<tr><td>5</td><td>1 — 5 — 10 — 10 — 5 — 1</td></tr>
<tr><td>6</td><td>1 — 6 — 15 — 20 — 15 — 6 — 1</td></tr>
</table>
<h3>Formule du binôme de Newton</h3>
<p>Pour tous complexes $a, b$ et tout entier $n \geq 0$ : $$(a+b)^n=\sum_{k=0}^{n}\binom{n}{k}a^{k}b^{n-k}$$</p>
<p>Conséquences : $\sum_{k=0}^{n}\binom{n}{k}=2^n$ (avec $a=b=1$) et $\sum_{k=0}^{n}(-1)^k\binom{n}{k}=0$ pour $n\geq 1$.</p>
<p><b>Méthode : coefficient de $x^p$</b> dans $(\alpha x+\beta)^n$. Le terme général est $\binom{n}{k}(\alpha x)^k\beta^{n-k}$ ; on prend $k=p$ : le coefficient vaut $\binom{n}{p}\alpha^p\beta^{n-p}$.</p>
<div class="callout info"><b>Exemple corrigé</b> $(x-2)^4$ : coefficients 1, 4, 6, 4, 1 et puissances de $-2$ : $(x-2)^4 = x^4 + 4x^3(-2) + 6x^2(-2)^2 + 4x(-2)^3 + (-2)^4 = x^4 - 8x^3 + 24x^2 - 32x + 16$.</div>
<div class="callout warn"><b>Pièges</b><ul>
<li>$(a+b)^3 \neq a^3+b^3$ : il manque $3a^2b+3ab^2$.</li>
<li>Dans $a^3 + b^3 = (a+b)(a^2-ab+b^2)$, le terme $ab$ est précédé d'un <b>moins</b> ; ce trinôme n'a pas de racine réelle, inutile de chercher à le factoriser.</li>
<li>Avec $(x-2)^n$, on élève le $-2$ (avec son signe) : les signes alternent.</li>
</ul></div>
<div class="callout key"><b>À retenir</b> $(a+b)^n=\sum\binom{n}{k}a^kb^{n-k}$, coefficients lus dans le triangle de Pascal ; $a^3 \pm b^3 = (a \pm b)(a^2 \mp ab + b^2)$.</div>
`
    },
    {
      id: 'm1-s-factoriser',
      title: 'Développer et factoriser',
      html: String.raw`
<p><b>Développer</b>, c'est transformer un produit en somme ; <b>factoriser</b>, c'est transformer une somme en produit. Factoriser est indispensable pour résoudre une équation (produit nul) ou étudier un signe (tableau de signes).</p>
<h3>Méthode : les réflexes de factorisation</h3>
<ol>
<li><b>Facteur commun</b> : $ka+kb=k(a+b)$. Ex. : $(x+1)(2x-3)-(x+1)(x+4) = (x+1)\big[(2x-3)-(x+4)\big] = (x+1)(x-7)$.</li>
<li><b>Identité remarquable</b> : $x^2-6x+9=(x-3)^2$ ; $4x^2-25=(2x-5)(2x+5)$ ; $x^3-8=(x-2)(x^2+2x+4)$.</li>
<li><b>Trinôme</b> : si $\Delta\geq 0$, $ax^2+bx+c=a(x-x_1)(x-x_2)$.</li>
<li><b>Racine évidente</b> : si $P(\alpha)=0$, alors $P(x)=(x-\alpha)Q(x)$ avec $\deg Q=\deg P-1$ ; on trouve $Q$ par identification des coefficients (ou division euclidienne).</li>
</ol>
<p>Racines évidentes à tester : $0, 1, -1, 2, -2$… Pour un polynôme à coefficients entiers, une racine entière divise le terme constant.</p>
<div class="callout info"><b>Exemple corrigé (racine évidente)</b> $P(x)=x^3-2x^2-5x+6$. On teste $x=1$ : $1-2-5+6=0$. Donc $P(x)=(x-1)(ax^2+bx+c)=ax^3+(b-a)x^2+(c-b)x-c$. Par identification : $a=1$, $b-a=-2$ donc $b=-1$, et $-c=6$ donc $c=-6$ (contrôle : $c-b=-5$). Ainsi $P(x)=(x-1)(x^2-x-6)=(x-1)(x-3)(x+2)$.</div>
<div class="callout warn"><b>Pièges</b><ul>
<li>Un signe moins devant une parenthèse change <b>tous</b> les signes : $-(x+4)=-x-4$.</li>
<li>Ne pas diviser une équation par un facteur qui peut s'annuler : $x(x-1)=3x$ ne donne pas $x-1=3$ (on perd $x=0$). On écrit $x(x-1)-3x=x(x-4)=0$.</li>
<li>Une expression factorisée est un <b>produit</b> : $(x-1)(x+2)+3$ n'est pas factorisée.</li>
</ul></div>
<div class="callout key"><b>À retenir</b> Ordre des réflexes : facteur commun, puis identité remarquable, puis discriminant, puis racine évidente.</div>
`
    },
    {
      id: 'm1-s-trinome',
      title: 'Le trinôme du second degré',
      html: String.raw`
<p>Un trinôme est $f(x)=ax^2+bx+c$ avec $a\neq 0$. Son <b>discriminant</b> est $\Delta=b^2-4ac$.</p>
<h3>Forme canonique</h3>
<p>$$ax^2+bx+c=a\left[\left(x+\frac{b}{2a}\right)^2-\frac{\Delta}{4a^2}\right]=a(x-\alpha)^2+\beta \quad\text{avec}\quad \alpha=-\frac{b}{2a},\ \ \beta=f(\alpha)=-\frac{\Delta}{4a}$$</p>
<p>La parabole a pour sommet $S(\alpha,\beta)$ et pour axe de symétrie la droite $x=\alpha$. <b>Méthode</b> : mettre $a$ en facteur, puis « compléter le carré » grâce à $x^2+px=\left(x+\frac{p}{2}\right)^2-\frac{p^2}{4}$.</p>
<h3>Racines</h3>
<table class="tbl">
<tr><th>Signe de $\Delta$</th><th>Racines</th><th>Factorisation</th></tr>
<tr><td>$\Delta\gt 0$</td><td>deux racines réelles $x_{1,2}=\dfrac{-b\pm\sqrt\Delta}{2a}$</td><td>$a(x-x_1)(x-x_2)$</td></tr>
<tr><td>$\Delta=0$</td><td>une racine double $x_0=-\dfrac{b}{2a}$</td><td>$a(x-x_0)^2$</td></tr>
<tr><td>$\Delta\lt 0$</td><td>aucune racine réelle (deux racines complexes conjuguées $\frac{-b\pm\mathrm{i}\sqrt{-\Delta}}{2a}$)</td><td>impossible dans $\mathbb{R}$</td></tr>
</table>
<p><b>Discriminant réduit</b> : si $b=2b'$, on pose $\Delta'=b'^2-ac$ (de même signe que $\Delta=4\Delta'$) et $x_{1,2}=\frac{-b'\pm\sqrt{\Delta'}}{a}$.</p>
<h3>Somme et produit des racines</h3>
<p>Si $x_1, x_2$ sont les racines (éventuellement confondues ou complexes) : $$x_1+x_2=-\frac{b}{a} \qquad x_1x_2=\frac{c}{a}$$ Réciproquement, deux nombres de somme $S$ et de produit $P$ sont les racines de $X^2-SX+P=0$. Si l'on connaît une racine évidente $x_1\neq 0$, l'autre vaut $x_2=\frac{c}{a\,x_1}$.</p>
<h3>Signe du trinôme</h3>
<p>$ax^2+bx+c$ est <b>du signe de $a$ à l'extérieur des racines</b> et du signe opposé entre les racines. Si $\Delta\lt 0$, il est strictement du signe de $a$ sur $\mathbb{R}$ ; si $\Delta = 0$, il est du signe de $a$ et s'annule en $x_0$.</p>
<div class="callout info"><b>Exemple corrigé</b> $f(x)=2x^2-5x-3$ : $\Delta=25+24=49$, $x_{1,2}=\frac{5\pm7}{4}$, soit $x_1=-\frac12$ et $x_2=3$. Donc $f(x)=2\left(x+\frac12\right)(x-3)=(2x+1)(x-3)$. Comme $a=2\gt 0$ : $f(x)\lt 0 \Leftrightarrow x\in\left]-\frac12,\,3\right[$. Contrôle : $x_1+x_2=\frac52=-\frac{b}{a}$ et $x_1x_2=-\frac32=\frac{c}{a}$.</div>
<div class="callout warn"><b>Pièges</b><ul>
<li>$\Delta=b^2-4ac$ : si $b=-3$, $b^2=9$ (et non $-9$).</li>
<li>On divise par $2a$ <b>tout</b> le numérateur $-b\pm\sqrt\Delta$.</li>
<li>Ne pas oublier le facteur $a$ dans $a(x-x_1)(x-x_2)$.</li>
<li>La somme des racines vaut $-\frac{b}{a}$ (signe moins !).</li>
</ul></div>
<div class="callout key"><b>À retenir</b> $\Delta=b^2-4ac$ ; $x=\frac{-b\pm\sqrt\Delta}{2a}$ ; $S=-\frac ba$, $P=\frac ca$ ; signe de $a$ à l'extérieur des racines.</div>
`
    },
    {
      id: 'm1-s-equations',
      title: 'Équations, inéquations et systèmes',
      html: String.raw`
<h3>Règles de transformation</h3>
<ul>
<li>On peut ajouter (ou retrancher) un même nombre aux deux membres d'une équation ou d'une inéquation.</li>
<li>Multiplier ou diviser par un nombre <b>strictement positif</b> conserve le sens d'une inégalité ; par un nombre <b>strictement négatif</b>, on <b>inverse</b> le sens.</li>
<li>Appliquer une fonction strictement croissante conserve le sens ($\mathrm{e}^x$, $\ln x$, $\sqrt{x}$, $x^3$) ; une fonction strictement décroissante l'inverse (par exemple $x\mapsto\frac1x$ sur $]0,+\infty[$).</li>
</ul>
<h3>Équation produit nul, équation quotient</h3>
<p>$$A\times B=0 \Leftrightarrow A=0 \text{ ou } B=0 \qquad \qquad \frac{A}{B}=0 \Leftrightarrow A=0 \text{ et } B\neq 0$$</p>
<p><b>Méthode</b> : tout passer d'un côté pour avoir « $\ldots = 0$ », factoriser, puis appliquer la règle du produit nul. Pour un quotient, déterminer d'abord les <b>valeurs interdites</b>.</p>
<h3>Inéquations : le tableau de signes</h3>
<p><b>Méthode</b> : (1) tout passer d'un côté et réduire au même dénominateur ; (2) factoriser numérateur et dénominateur (facteurs du premier degré, trinômes) ; (3) dresser le tableau de signes : une ligne par facteur, la règle des signes donne la dernière ligne ; (4) lire la solution en soignant les bornes (une valeur interdite est toujours exclue).</p>
<div class="callout info"><b>Exemple corrigé</b> Résoudre $\frac{2x-1}{x+3}\geq 0$. Valeur interdite : $x=-3$. Le numérateur s'annule en $\frac12$.
<table class="tbl">
<tr><th>$x$</th><th>de $-\infty$ à $-3$</th><th>de $-3$ à $\frac12$</th><th>de $\frac12$ à $+\infty$</th></tr>
<tr><td>$2x-1$</td><td>$-$</td><td>$-$</td><td>$+$</td></tr>
<tr><td>$x+3$</td><td>$-$</td><td>$+$</td><td>$+$</td></tr>
<tr><td>quotient</td><td>$+$</td><td>$-$</td><td>$+$</td></tr>
</table>
Donc $S=\left]-\infty,-3\right[\cup\left[\frac12,+\infty\right[$ : $-3$ est exclu (interdit), $\frac12$ est inclus (le quotient y est nul).</div>
<h3>Valeur absolue, racine carrée, équation bicarrée</h3>
<ul>
<li>$|A|=|B| \Leftrightarrow A=B$ ou $A=-B$.</li>
<li>$\sqrt{A}=B \Leftrightarrow A=B^2$ <b>et</b> $B\geq 0$. Élever au carré peut ajouter des solutions parasites : toujours vérifier.</li>
<li>Équation bicarrée $ax^4+bx^2+c=0$ : on pose $X=x^2\geq 0$, on résout en $X$, puis $x=\pm\sqrt{X}$ pour chaque $X\geq 0$.</li>
</ul>
<h3>Systèmes linéaires 2×2</h3>
<p>$$\begin{cases} ax+by=e \\ cx+dy=f \end{cases}$$ Le système admet une <b>unique</b> solution si et seulement si son déterminant $D=ad-bc$ est non nul ; elle est donnée par les formules de Cramer : $$x=\frac{ed-bf}{ad-bc} \qquad y=\frac{af-ce}{ad-bc}$$ Si $D=0$ : aucune solution ou une infinité (droites parallèles ou confondues).</p>
<p><b>Méthodes</b> : <i>substitution</i> (exprimer une inconnue dans une équation et remplacer dans l'autre) ou <i>combinaison</i> (combiner les lignes pour éliminer une inconnue, par exemple $L_2 \leftarrow aL_2-cL_1$).</p>
<div class="callout warn"><b>Pièges</b><ul>
<li>Ne jamais multiplier une inéquation par une expression de signe inconnu (comme $x$) : faire un tableau de signes.</li>
<li>$\frac1x\lt 2$ n'équivaut pas à $1\lt 2x$ : pour $x\lt 0$ le sens change. La bonne solution est $]-\infty,0[\,\cup\,\left]\frac12,+\infty\right[$.</li>
<li>Une valeur interdite n'est jamais solution, même si le numérateur s'y annule : $\frac{x^2-4}{x-2}=0 \Leftrightarrow x=-2$.</li>
</ul></div>
<div class="callout key"><b>À retenir</b> Tout ramener à « $\ldots = 0$ » ou « $\ldots \geq 0$ », factoriser, faire le tableau de signes. Système 2×2 : solution unique si et seulement si $ad-bc\neq 0$.</div>
`
    },
    {
      id: 'm1-s-sommes',
      title: 'Sommes et symbole Σ',
      html: String.raw`
<p>$\sum_{k=p}^{n}u_k=u_p+u_{p+1}+\dots+u_n$ contient $n-p+1$ termes. L'indice $k$ est <b>muet</b> : $\sum_{k=1}^n k=\sum_{j=1}^n j$.</p>
<h3>Règles de calcul</h3>
<ul>
<li><b>Linéarité</b> : $\sum(\lambda u_k+\mu v_k)=\lambda\sum u_k+\mu\sum v_k$.</li>
<li><b>Somme d'une constante</b> : $\sum_{k=1}^{n}c=nc$ (il y a $n$ termes égaux à $c$).</li>
<li><b>Changement d'indice</b> : $\sum_{k=1}^{n}u_{k-1}=\sum_{j=0}^{n-1}u_j$ (on pose $j=k-1$).</li>
<li><b>Télescopage</b> : $\sum_{k=0}^{n}(u_{k+1}-u_k)=u_{n+1}-u_0$.</li>
</ul>
<h3>Sommes à connaître</h3>
<p>$$\sum_{k=1}^{n}k=\frac{n(n+1)}{2} \qquad \sum_{k=1}^{n}k^2=\frac{n(n+1)(2n+1)}{6} \qquad \sum_{k=1}^{n}k^3=\left(\frac{n(n+1)}{2}\right)^2$$</p>
<p><b>Somme géométrique</b> ($q\neq 1$) : $$\sum_{k=0}^{n}q^k=1+q+\dots+q^n=\frac{1-q^{n+1}}{1-q}$$ (et $n+1$ si $q=1$). Moyen mnémotechnique : premier terme $\times\ \frac{1-q^{N}}{1-q}$ où $N$ est le nombre de termes.</p>
<p><b>Suite arithmétique</b> : somme = nombre de termes $\times\ \frac{\text{premier}+\text{dernier}}{2}$.</p>
<div class="callout info"><b>Exemple corrigé</b> $S=\sum_{k=1}^{n}(2k+1)=2\sum_{k=1}^{n}k+\sum_{k=1}^{n}1=n(n+1)+n=n^2+2n$. Et $\sum_{k=2}^{n} 3^k = 3^2\times\frac{1-3^{n-1}}{1-3}=\frac{9(3^{n-1}-1)}{2}$ (il y a $n-1$ termes à partir de $3^2$).</div>
<div class="callout warn"><b>Pièges</b><ul>
<li>Compter les termes : de $k=0$ à $n$, il y en a $n+1$.</li>
<li>$\sum (u_k v_k)\neq\left(\sum u_k\right)\left(\sum v_k\right)$.</li>
<li>La formule géométrique commence à $q^0=1$ : l'adapter si la somme commence ailleurs.</li>
</ul></div>
<div class="callout key"><b>À retenir</b> $\sum k=\frac{n(n+1)}{2}$, $\sum k^2=\frac{n(n+1)(2n+1)}{6}$, $\sum_{k=0}^{n} q^k=\frac{1-q^{n+1}}{1-q}$.</div>
`
    },
    {
      id: 'm1-s-explog',
      title: 'Exponentielle et logarithme : règles de calcul',
      html: String.raw`
<p>$\ln$ est définie sur $]0,+\infty[$ ; $\exp$ est définie sur $\mathbb{R}$, à valeurs dans $]0,+\infty[$. Ce sont deux bijections réciproques, strictement croissantes : $$\mathrm{e}^{\ln x}=x\ \ (x\gt 0) \qquad \ln(\mathrm{e}^x)=x\ \ (x\in\mathbb{R}) \qquad \ln 1=0,\ \ \ln \mathrm{e}=1,\ \ \mathrm{e}^0=1$$</p>
<div class="grid2">
<div class="mini"><h4>Exponentielle</h4><p>$\mathrm{e}^{a+b}=\mathrm{e}^a\,\mathrm{e}^b$<br>$\mathrm{e}^{a-b}=\frac{\mathrm{e}^a}{\mathrm{e}^b}$, $\ \mathrm{e}^{-a}=\frac{1}{\mathrm{e}^a}$<br>$(\mathrm{e}^a)^n=\mathrm{e}^{na}$</p></div>
<div class="mini"><h4>Logarithme ($a,b\gt 0$)</h4><p>$\ln(ab)=\ln a+\ln b$<br>$\ln\frac ab=\ln a-\ln b$, $\ \ln\frac1b=-\ln b$<br>$\ln(a^n)=n\ln a$, $\ \ln\sqrt a=\frac12\ln a$</p></div>
</div>
<p><b>Puissances réelles</b> : pour $a\gt 0$, $a^x=\mathrm{e}^{x\ln a}$. <b>Logarithme de base $a$</b> : $\log_a x=\frac{\ln x}{\ln a}$ ; le logarithme décimal $\log=\log_{10}$ sert pour les décibels : $G_{\text{dB}}=20\log|H|$.</p>
<h3>Résolution</h3>
<ul>
<li>$\mathrm{e}^a=\mathrm{e}^b\Leftrightarrow a=b$ et $\mathrm{e}^a\lt\mathrm{e}^b\Leftrightarrow a\lt b$.</li>
<li>Pour $a,b\gt 0$ : $\ln a=\ln b\Leftrightarrow a=b$ et $\ln a\lt\ln b\Leftrightarrow a\lt b$.</li>
<li>$\mathrm{e}^x=k$ (avec $k\gt 0$) $\Leftrightarrow x=\ln k$ ; $\ \ln x=k\Leftrightarrow x=\mathrm{e}^k$.</li>
<li>Équations en $\mathrm{e}^{2x}$ et $\mathrm{e}^x$ : poser $X=\mathrm{e}^x\gt 0$ (on se ramène au second degré).</li>
</ul>
<p><b>Méthode</b> : (1) écrire le domaine de définition (arguments des $\ln$ strictement positifs) ; (2) regrouper avec les règles de calcul ; (3) résoudre ; (4) ne garder que les solutions appartenant au domaine.</p>
<div class="callout info"><b>Exemple corrigé</b> $\ln x+\ln(x-1)=\ln 6$. Domaine : $x\gt 1$. Alors $\ln\big(x(x-1)\big)=\ln 6\Leftrightarrow x^2-x-6=0\Leftrightarrow x=3$ ou $x=-2$. Seul $x=3$ est dans le domaine : $S=\{3\}$.</div>
<div class="callout warn"><b>Pièges</b><ul>
<li>$\ln(a+b)\neq\ln a+\ln b$ et $\ln a\times\ln b\neq\ln(ab)$.</li>
<li>$\mathrm{e}^{a}+\mathrm{e}^{b}\neq\mathrm{e}^{a+b}$.</li>
<li>$\ln(x^2)=2\ln|x|$ pour $x\neq 0$ (et $2\ln x$ seulement si $x\gt 0$).</li>
<li>$\mathrm{e}^x \gt 0$ pour tout $x$ : $\mathrm{e}^x=-1$ n'a pas de solution.</li>
</ul></div>
<div class="callout key"><b>À retenir</b> $\ln$ transforme les produits en sommes, $\exp$ les sommes en produits ; $a^b=\mathrm{e}^{b\ln a}$ ; toujours vérifier le domaine.</div>
`
    },
    {
      id: 'm1-s-memo',
      title: 'Mémo : tableau récapitulatif',
      html: String.raw`
<table class="tbl">
<tr><th>Thème</th><th>À savoir par cœur</th></tr>
<tr><td>Fractions</td><td>$\frac ab+\frac cd=\frac{ad+bc}{bd}$ ; $\frac{a/b}{c/d}=\frac{ad}{bc}$</td></tr>
<tr><td>Puissances</td><td>$a^ma^n=a^{m+n}$ ; $(a^m)^n=a^{mn}$ ; $a^{-n}=\frac1{a^n}$ ; $a^x=\mathrm{e}^{x\ln a}$</td></tr>
<tr><td>Racines</td><td>$\sqrt{ab}=\sqrt a\sqrt b$ ; $\sqrt{x^2}=|x|$ ; conjugué : $(\sqrt a-\sqrt b)(\sqrt a+\sqrt b)=a-b$</td></tr>
<tr><td>Valeur absolue</td><td>$|x-a|\leq r\Leftrightarrow a-r\leq x\leq a+r$ ; $|x+y|\leq|x|+|y|$</td></tr>
<tr><td>Identités</td><td>$(a\pm b)^2=a^2\pm2ab+b^2$ ; $a^2-b^2=(a-b)(a+b)$</td></tr>
<tr><td>Degré 3</td><td>$(a+b)^3=a^3+3a^2b+3ab^2+b^3$ ; $a^3\pm b^3=(a\pm b)(a^2\mp ab+b^2)$</td></tr>
<tr><td>Binôme</td><td>$(a+b)^n=\sum_{k=0}^n\binom nk a^kb^{n-k}$ ; $\binom nk=\frac{n!}{k!(n-k)!}$ ; Pascal</td></tr>
<tr><td>Trinôme</td><td>$\Delta=b^2-4ac$ ; $x=\frac{-b\pm\sqrt\Delta}{2a}$ ; $a(x-\alpha)^2+\beta$ avec $\alpha=-\frac b{2a}$</td></tr>
<tr><td>Somme, produit</td><td>$x_1+x_2=-\frac ba$ ; $x_1x_2=\frac ca$</td></tr>
<tr><td>Signe</td><td>signe de $a$ à l'extérieur des racines</td></tr>
<tr><td>Inéquations</td><td>tout d'un côté, factoriser, tableau de signes ; multiplier par un négatif inverse le sens</td></tr>
<tr><td>Système 2×2</td><td>unique solution $\Leftrightarrow ad-bc\neq0$ ; Cramer</td></tr>
<tr><td>Sommes</td><td>$\sum k=\frac{n(n+1)}2$ ; $\sum k^2=\frac{n(n+1)(2n+1)}6$ ; $\sum_{k=0}^n q^k=\frac{1-q^{n+1}}{1-q}$</td></tr>
<tr><td>exp / ln</td><td>$\mathrm{e}^{a+b}=\mathrm{e}^a\mathrm{e}^b$ ; $\ln(ab)=\ln a+\ln b$ ; $\ln(a^n)=n\ln a$</td></tr>
</table>
<div class="callout key"><b>Réflexe de contrôle</b> Après un calcul, teste une valeur simple ($x=0$, $x=1$, $n=1$) : une identité fausse se détecte presque toujours ainsi.</div>
`
    }
  ],

  /* ============================== FORMULAIRE ============================== */
  formulas: [
    { id: 'm1-fo-frac-add', name: 'Somme de fractions', tex: String.raw`\frac{a}{b}+\frac{c}{d}=\frac{ad+bc}{bd}`, note: String.raw`$b, d \neq 0$ ; en pratique on prend le plus petit dénominateur commun.` },
    { id: 'm1-fo-frac-mul', name: 'Produit et quotient de fractions', tex: String.raw`\frac{a}{b}\times\frac{c}{d}=\frac{ac}{bd} \qquad \frac{a/b}{c/d}=\frac{ad}{bc}`, note: String.raw`Diviser, c'est multiplier par l'inverse.` },
    { id: 'm1-fo-pow-mul', name: 'Produit et quotient de puissances', tex: String.raw`a^m\,a^n=a^{m+n} \qquad \frac{a^m}{a^n}=a^{m-n}` },
    { id: 'm1-fo-pow-pow', name: 'Puissance d\'une puissance', tex: String.raw`(a^m)^n=a^{mn}`, note: String.raw`À ne pas confondre avec $a^{m^n}$.` },
    { id: 'm1-fo-pow-prod', name: 'Puissance d\'un produit, d\'un quotient', tex: String.raw`(ab)^n=a^n b^n \qquad \left(\frac{a}{b}\right)^n=\frac{a^n}{b^n}` },
    { id: 'm1-fo-pow-neg', name: 'Exposants nul et négatif', tex: String.raw`a^0=1 \qquad a^{-n}=\frac{1}{a^n}`, note: String.raw`$a \neq 0$.` },
    { id: 'm1-fo-pow-frac', name: 'Exposant fractionnaire, exposant réel', tex: String.raw`a^{1/n}=\sqrt[n]{a} \qquad a^{p/q}=\sqrt[q]{a^p} \qquad a^x=\mathrm{e}^{x\ln a}`, note: String.raw`Pour $a \gt 0$.` },
    { id: 'm1-fo-sqrt', name: 'Racine d\'un produit, d\'un quotient', tex: String.raw`\sqrt{ab}=\sqrt{a}\,\sqrt{b} \qquad \sqrt{\frac{a}{b}}=\frac{\sqrt a}{\sqrt b}`, note: String.raw`$a, b \geq 0$ (et $b \gt 0$ pour le quotient). Mais $\sqrt{a+b} \neq \sqrt a+\sqrt b$.` },
    { id: 'm1-fo-sqrt-sq', name: 'Racine d\'un carré', tex: String.raw`\sqrt{x^2}=|x|`, note: String.raw`Et $(\sqrt{x})^2=x$ pour $x \geq 0$.` },
    { id: 'm1-fo-conj', name: 'Quantité conjuguée', tex: String.raw`\frac{1}{\sqrt a-\sqrt b}=\frac{\sqrt a+\sqrt b}{a-b}`, note: String.raw`Car $(\sqrt a-\sqrt b)(\sqrt a+\sqrt b)=a-b$ ($a, b \geq 0$, $a \neq b$).` },
    { id: 'm1-fo-abs', name: 'Valeur absolue', tex: String.raw`|x|=\begin{cases} x & \text{si } x\geq 0\\ -x & \text{si } x\lt 0\end{cases}`, note: String.raw`$|x-a|$ est la distance entre $x$ et $a$.` },
    { id: 'm1-fo-abs-prod', name: 'Valeur absolue d\'un produit, d\'un quotient', tex: String.raw`|xy|=|x|\,|y| \qquad \left|\frac{x}{y}\right|=\frac{|x|}{|y|}` },
    { id: 'm1-fo-abs-tri', name: 'Inégalité triangulaire', tex: String.raw`\big||a|-|b|\big| \leq |a+b| \leq |a|+|b|` },
    { id: 'm1-fo-abs-ineq', name: 'Inéquation avec valeur absolue', tex: String.raw`|x-a|\leq r \Leftrightarrow a-r\leq x\leq a+r`, note: String.raw`Pour $r\geq 0$ : intervalle de centre $a$ et de rayon $r$.` },
    { id: 'm1-fo-id1', name: 'Carré d\'une somme', tex: String.raw`(a+b)^2=a^2+2ab+b^2` },
    { id: 'm1-fo-id2', name: 'Carré d\'une différence', tex: String.raw`(a-b)^2=a^2-2ab+b^2` },
    { id: 'm1-fo-id3', name: 'Différence de deux carrés', tex: String.raw`a^2-b^2=(a-b)(a+b)` },
    { id: 'm1-fo-cube-plus', name: 'Cube d\'une somme', tex: String.raw`(a+b)^3=a^3+3a^2b+3ab^2+b^3` },
    { id: 'm1-fo-cube-moins', name: 'Cube d\'une différence', tex: String.raw`(a-b)^3=a^3-3a^2b+3ab^2-b^3` },
    { id: 'm1-fo-a3-b3', name: 'Différence de deux cubes', tex: String.raw`a^3-b^3=(a-b)(a^2+ab+b^2)` },
    { id: 'm1-fo-a3pb3', name: 'Somme de deux cubes', tex: String.raw`a^3+b^3=(a+b)(a^2-ab+b^2)` },
    { id: 'm1-fo-an-bn', name: 'Factorisation de a^n − b^n', tex: String.raw`a^n-b^n=(a-b)\sum_{k=0}^{n-1}a^{n-1-k}b^{k}`, note: String.raw`Ex. : $a^4-b^4=(a-b)(a^3+a^2b+ab^2+b^3)$.` },
    { id: 'm1-fo-abc2', name: 'Carré d\'une somme de trois termes', tex: String.raw`(a+b+c)^2=a^2+b^2+c^2+2ab+2ac+2bc` },
    { id: 'm1-fo-binom', name: 'Coefficient binomial', tex: String.raw`\binom{n}{k}=\frac{n!}{k!\,(n-k)!}`, note: String.raw`$\binom{n}{0}=\binom{n}{n}=1$, $\binom{n}{1}=n$, $\binom{n}{2}=\frac{n(n-1)}{2}$, $\binom{n}{k}=\binom{n}{n-k}$.` },
    { id: 'm1-fo-pascal', name: 'Relation de Pascal', tex: String.raw`\binom{n}{k}+\binom{n}{k+1}=\binom{n+1}{k+1}`, note: String.raw`Construction du triangle de Pascal.` },
    { id: 'm1-fo-newton', name: 'Binôme de Newton', tex: String.raw`(a+b)^n=\sum_{k=0}^{n}\binom{n}{k}a^k b^{n-k}`, note: String.raw`Conséquence : $\sum_{k=0}^{n}\binom{n}{k}=2^n$.` },
    { id: 'm1-fo-delta', name: 'Discriminant', tex: String.raw`\Delta=b^2-4ac`, note: String.raw`Pour $ax^2+bx+c$, $a \neq 0$.` },
    { id: 'm1-fo-racines', name: 'Racines du trinôme', tex: String.raw`x_{1,2}=\frac{-b\pm\sqrt{\Delta}}{2a}`, note: String.raw`Si $\Delta\gt 0$ ; si $\Delta=0$, racine double $x_0=-\frac{b}{2a}$ ; si $\Delta \lt 0$, pas de racine réelle.` },
    { id: 'm1-fo-canon', name: 'Forme canonique', tex: String.raw`ax^2+bx+c=a\left(x+\frac{b}{2a}\right)^2-\frac{\Delta}{4a}`, note: String.raw`Sommet de la parabole : $\left(-\frac{b}{2a},\,-\frac{\Delta}{4a}\right)$.` },
    { id: 'm1-fo-fact-trin', name: 'Factorisation du trinôme', tex: String.raw`ax^2+bx+c=a(x-x_1)(x-x_2)`, note: String.raw`Si $\Delta \geq 0$ ; ne pas oublier le facteur $a$.` },
    { id: 'm1-fo-sp', name: 'Somme et produit des racines', tex: String.raw`x_1+x_2=-\frac{b}{a} \qquad x_1x_2=\frac{c}{a}`, note: String.raw`Deux nombres de somme $S$ et de produit $P$ sont racines de $X^2-SX+P=0$.` },
    { id: 'm1-fo-delta-red', name: 'Discriminant réduit', tex: String.raw`b=2b' :\ \ \Delta'=b'^2-ac, \quad x_{1,2}=\frac{-b'\pm\sqrt{\Delta'}}{a}` },
    { id: 'm1-fo-prod-nul', name: 'Produit nul, quotient nul', tex: String.raw`AB=0 \Leftrightarrow A=0 \text{ ou } B=0 \qquad \frac{A}{B}=0 \Leftrightarrow A=0 \text{ et } B\neq 0` },
    { id: 'm1-fo-cramer', name: 'Système 2×2 (Cramer)', tex: String.raw`\begin{cases}ax+by=e\\cx+dy=f\end{cases} \Rightarrow x=\frac{ed-bf}{ad-bc},\ \ y=\frac{af-ce}{ad-bc}`, note: String.raw`Valable si et seulement si le déterminant $ad-bc \neq 0$.` },
    { id: 'm1-fo-sum-k', name: 'Somme des entiers', tex: String.raw`\sum_{k=1}^{n}k=\frac{n(n+1)}{2}` },
    { id: 'm1-fo-sum-k2', name: 'Somme des carrés', tex: String.raw`\sum_{k=1}^{n}k^2=\frac{n(n+1)(2n+1)}{6}` },
    { id: 'm1-fo-sum-k3', name: 'Somme des cubes', tex: String.raw`\sum_{k=1}^{n}k^3=\left(\frac{n(n+1)}{2}\right)^2` },
    { id: 'm1-fo-geom', name: 'Somme géométrique', tex: String.raw`\sum_{k=0}^{n}q^k=\frac{1-q^{n+1}}{1-q}\quad(q\neq 1)`, note: String.raw`$n+1$ termes ; si $q=1$ la somme vaut $n+1$.` },
    { id: 'm1-fo-telescope', name: 'Somme télescopique', tex: String.raw`\sum_{k=0}^{n}(u_{k+1}-u_k)=u_{n+1}-u_0` },
    { id: 'm1-fo-exp', name: 'Règles de l\'exponentielle', tex: String.raw`\mathrm{e}^{a+b}=\mathrm{e}^a\,\mathrm{e}^b \qquad \mathrm{e}^{-a}=\frac{1}{\mathrm{e}^a} \qquad (\mathrm{e}^a)^n=\mathrm{e}^{na}` },
    { id: 'm1-fo-ln-prod', name: 'Logarithme d\'un produit, d\'un quotient', tex: String.raw`\ln(ab)=\ln a+\ln b \qquad \ln\frac{a}{b}=\ln a-\ln b`, note: String.raw`Pour $a, b \gt 0$.` },
    { id: 'm1-fo-ln-pow', name: 'Logarithme d\'une puissance', tex: String.raw`\ln(a^n)=n\ln a \qquad \ln\sqrt a=\frac12\ln a`, note: String.raw`Pour $a \gt 0$.` },
    { id: 'm1-fo-expln', name: 'exp et ln réciproques', tex: String.raw`\mathrm{e}^{\ln x}=x\ \ (x\gt 0) \qquad \ln(\mathrm{e}^x)=x\ \ (x\in\mathbb{R})`, note: String.raw`$\ln 1=0$, $\ln\mathrm{e}=1$ ; $\log_a x=\frac{\ln x}{\ln a}$.` }
  ],

  /* ============================== FLASHCARDS ============================== */
  flashcards: [
    { id: 'm1-f-racine-carre', front: String.raw`Que vaut $\sqrt{x^2}$ pour $x$ réel ? Pourquoi ?`, back: String.raw`$\sqrt{x^2}=|x|$, car une racine carrée est toujours positive. Ex. : $\sqrt{(-4)^2}=\sqrt{16}=4=|-4|$. En revanche $(\sqrt x)^2=x$ seulement pour $x\geq 0$.` },
    { id: 'm1-f-conjugue', front: String.raw`Comment supprimer la racine du dénominateur de $\frac{1}{\sqrt a-\sqrt b}$ ?`, back: String.raw`On multiplie numérateur et dénominateur par la quantité conjuguée $\sqrt a+\sqrt b$ : $(\sqrt a-\sqrt b)(\sqrt a+\sqrt b)=a-b$, donc $\frac{1}{\sqrt a-\sqrt b}=\frac{\sqrt a+\sqrt b}{a-b}$.` },
    { id: 'm1-f-abs', front: String.raw`Interprétation de $|x-a|$ et résolution de $|x-a|\leq r$`, back: String.raw`$|x-a|$ est la distance entre $x$ et $a$. Pour $r\geq 0$ : $|x-a|\leq r\Leftrightarrow a-r\leq x\leq a+r$, intervalle de centre $a$ et de rayon $r$. Et $|X|=r\Leftrightarrow X=r$ ou $X=-r$.` },
    { id: 'm1-f-newton', front: String.raw`Formule du binôme de Newton`, back: String.raw`$(a+b)^n=\sum_{k=0}^{n}\binom{n}{k}a^kb^{n-k}$ avec $\binom nk=\frac{n!}{k!(n-k)!}$. Le terme en $a^k$ a pour coefficient $\binom nk$ ; avec $a=b=1$ : $\sum\binom nk=2^n$.` },
    { id: 'm1-f-pascal', front: String.raw`Triangle de Pascal : construction et lignes 0 à 5`, back: String.raw`Chaque nombre est la somme des deux nombres au-dessus : $\binom nk+\binom n{k+1}=\binom{n+1}{k+1}$. Lignes : 1 / 1 1 / 1 2 1 / 1 3 3 1 / 1 4 6 4 1 / 1 5 10 10 5 1.` },
    { id: 'm1-f-cubes', front: String.raw`Factoriser $a^3-b^3$ et $a^3+b^3$`, back: String.raw`$a^3-b^3=(a-b)(a^2+ab+b^2)$ et $a^3+b^3=(a+b)(a^2-ab+b^2)$. Moyen mnémotechnique : le premier facteur a le même signe que l'expression, le terme $ab$ a le signe opposé.` },
    { id: 'm1-f-canonique', front: String.raw`Méthode : mettre $ax^2+bx+c$ sous forme canonique`, back: String.raw`1) Factoriser par $a$ : $a\left(x^2+\frac bax\right)+c$. 2) Compléter le carré : $x^2+px=\left(x+\frac p2\right)^2-\frac{p^2}{4}$. 3) Réduire : on obtient $a(x-\alpha)^2+\beta$ avec $\alpha=-\frac{b}{2a}$ et $\beta=f(\alpha)$. Le sommet est $(\alpha,\beta)$.` },
    { id: 'm1-f-delta', front: String.raw`Discriminant et racines de $ax^2+bx+c$`, back: String.raw`$\Delta=b^2-4ac$. Si $\Delta\gt0$ : deux racines $\frac{-b\pm\sqrt\Delta}{2a}$. Si $\Delta=0$ : racine double $-\frac b{2a}$. Si $\Delta\lt0$ : aucune racine réelle (deux complexes conjuguées $\frac{-b\pm\mathrm{i}\sqrt{-\Delta}}{2a}$).` },
    { id: 'm1-f-somme-produit', front: String.raw`Somme et produit des racines ; trouver deux nombres de somme $S$ et de produit $P$`, back: String.raw`$x_1+x_2=-\frac ba$ et $x_1x_2=\frac ca$. Deux nombres de somme $S$ et de produit $P$ sont les solutions de $X^2-SX+P=0$.` },
    { id: 'm1-f-signe', front: String.raw`Signe du trinôme $ax^2+bx+c$`, back: String.raw`Du signe de $a$ à l'extérieur des racines, du signe de $-a$ entre les racines. Si $\Delta\lt0$ : strictement du signe de $a$ partout. Si $\Delta=0$ : du signe de $a$, nul en la racine double.` },
    { id: 'm1-f-racine-evidente', front: String.raw`Factoriser un polynôme $P$ dont on connaît une racine $\alpha$`, back: String.raw`$P(\alpha)=0 \Rightarrow P(x)=(x-\alpha)Q(x)$ avec $\deg Q=\deg P-1$. On trouve $Q$ par identification des coefficients (ou division euclidienne). Racines à tester : $0,\pm1,\pm2$ (une racine entière divise le terme constant).` },
    { id: 'm1-f-produit-nul', front: String.raw`Équation produit nul et équation quotient nul`, back: String.raw`$AB=0\Leftrightarrow A=0$ ou $B=0$. $\frac AB=0\Leftrightarrow A=0$ et $B\neq0$ : toujours chercher d'abord les valeurs interdites, qui ne sont jamais solutions.` },
    { id: 'm1-f-tableau', front: String.raw`Méthode : résoudre une inéquation avec un tableau de signes`, back: String.raw`1) Tout passer d'un côté (« $\ldots\geq 0$ »), même dénominateur. 2) Factoriser. 3) Une ligne par facteur, règle des signes. 4) Lire les intervalles : valeurs interdites exclues, zéros inclus seulement si l'inégalité est large.` },
    { id: 'm1-f-sens', front: String.raw`Quand le sens d'une inégalité change-t-il ?`, back: String.raw`Quand on multiplie ou divise par un nombre strictement négatif, ou qu'on applique une fonction strictement décroissante (ex. l'inverse sur $]0,+\infty[$). On ne multiplie jamais par une expression de signe inconnu.` },
    { id: 'm1-f-systeme', front: String.raw`Système linéaire 2×2 : existence, unicité, méthodes`, back: String.raw`$ax+by=e$, $cx+dy=f$ : solution unique si et seulement si $ad-bc\neq0$ ; alors $x=\frac{ed-bf}{ad-bc}$, $y=\frac{af-ce}{ad-bc}$. Sinon aucune ou une infinité. Méthodes : substitution ou combinaison.` },
    { id: 'm1-f-geom', front: String.raw`Somme géométrique $1+q+\dots+q^n$`, back: String.raw`Pour $q\neq1$ : $\sum_{k=0}^nq^k=\frac{1-q^{n+1}}{1-q}$ ($n+1$ termes). En général : premier terme $\times\frac{1-q^{N}}{1-q}$ avec $N$ le nombre de termes. Si $q=1$ : $n+1$.` },
    { id: 'm1-f-ln', front: String.raw`Règles de calcul de $\ln$ et précaution`, back: String.raw`Pour $a,b\gt0$ : $\ln(ab)=\ln a+\ln b$, $\ln\frac ab=\ln a-\ln b$, $\ln(a^n)=n\ln a$. Précaution : écrire le domaine (arguments $\gt0$) avant de transformer, puis vérifier les solutions.` }
  ],

  /* ============================== QUIZ ============================== */
  quiz: [
    { id: 'm1-q-001', q: String.raw`Que vaut $\frac{2}{3}+\frac{1}{6}$ ?`, choices: [String.raw`$\frac{3}{9}$`, String.raw`$\frac{1}{2}$`, String.raw`$\frac{5}{6}$`], answer: 2,
      topic: 'Addition de fractions', sec: 'm1-s-regles',
      steps: [
        String.raw`Notion : une fraction $\frac ab$ représente $a$ parts de taille $\frac1b$. On ne peut additionner que des parts de même taille, il faut donc un dénominateur commun : $\frac ab+\frac cb=\frac{a+c}{b}$.`,
        String.raw`Dénominateur commun de 3 et 6 : $6$ (car $6=3\times2$). On convertit $\frac23$ en multipliant numérateur ET dénominateur par 2 : $\frac23=\frac{2\times2}{3\times2}=\frac46$.`,
        String.raw`On additionne les numérateurs en gardant le dénominateur : $\frac46+\frac16=\frac{4+1}{6}=\frac56$.`,
        String.raw`5 et 6 n'ont aucun diviseur commun autre que 1 : $\frac56$ est irréductible. Ordre de grandeur : $0{,}67+0{,}17\approx0{,}83\approx\frac56$ ✔.`
      ],
      explain: String.raw`Pour additionner deux fractions, il faut d'abord les écrire avec le même dénominateur. Ici 6 est un multiple de 3 : $\frac23=\frac{2\times2}{3\times2}=\frac46$. On additionne alors les numérateurs en gardant le dénominateur : $\frac46+\frac16=\frac{4+1}{6}=\frac56$, fraction irréductible (5 et 6 n'ont pas de diviseur commun).`,
      why: { 0: String.raw`$\frac39$ vient de l'addition des numérateurs ($2+1$) et des dénominateurs ($3+6$) : cette « règle » n'existe pas. Contre-exemple : $\frac12+\frac12=1$ et non $\frac24$.`, 1: String.raw`$\frac12=\frac36$ : tu as additionné $2+1=3$ sur 6 sans convertir $\frac23$ en $\frac46$. Quand on change le dénominateur, il faut multiplier le numérateur par le même facteur.` },
      rule: String.raw`$\frac ab+\frac cb=\frac{a+c}{b}$ : on n'additionne les numérateurs qu'une fois le dénominateur commun obtenu.`, level: 1 },
    { id: 'm1-q-002', q: String.raw`Pour $b, c, d$ non nuls, que vaut $\dfrac{a/b}{c/d}$ ?`, choices: [String.raw`$\frac{ac}{bd}$`, String.raw`$\frac{ad}{bc}$`, String.raw`$\frac{bc}{ad}$`], answer: 1,
      topic: 'Quotient de fractions', sec: 'm1-s-regles',
      steps: [
        String.raw`Notion : diviser par un nombre non nul, c'est multiplier par son inverse. L'inverse de la fraction $\frac cd$ (avec $c,d\neq0$) est $\frac dc$.`,
        String.raw`On réécrit la division : $\dfrac{a/b}{c/d}=\frac ab\div\frac cd=\frac ab\times\frac dc$.`,
        String.raw`Produit de fractions : numérateurs entre eux, dénominateurs entre eux : $\frac ab\times\frac dc=\frac{a\times d}{b\times c}=\frac{ad}{bc}$.`,
        String.raw`Vérification avec $a=b=c=1$ et $d=2$ : $\frac{1}{1/2}=2$ et $\frac{ad}{bc}=\frac21=2$ ✔.`
      ],
      explain: String.raw`Diviser par une fraction revient à multiplier par son inverse : l'inverse de $\frac cd$ est $\frac dc$ (il existe car $c\neq0$). Donc $\dfrac{a/b}{c/d}=\frac ab\times\frac dc=\frac{ad}{bc}$. Contrôle numérique avec $a=b=c=1$ et $d=2$ : $\frac{1}{1/2}=2$ et $\frac{1\times2}{1\times1}=2$.`,
      why: { 0: String.raw`$\frac{ac}{bd}$ est le produit $\frac ab\times\frac cd$ : tu as multiplié par $\frac cd$ au lieu de multiplier par son inverse $\frac dc$.`, 2: String.raw`$\frac{bc}{ad}$ est l'inverse du bon résultat : seule la fraction du bas $\frac cd$ doit être retournée, pas celle du haut.` },
      rule: String.raw`$\dfrac{a/b}{c/d}=\dfrac ab\times\dfrac dc=\dfrac{ad}{bc}$`, level: 1 },
    { id: 'm1-q-003', q: String.raw`Que vaut $(2^3)^2$ ?`, choices: [String.raw`$2^5$`, String.raw`$2^9$`, String.raw`$2^6$`], answer: 2,
      topic: 'Règles sur les puissances', sec: 'm1-s-regles',
      steps: [
        String.raw`Notion : pour $n$ entier positif, $a^n$ est le produit de $n$ facteurs égaux à $a$. Ainsi $2^3=2\times2\times2$.`,
        String.raw`$(2^3)^2$ signifie « $2^3$ multiplié par lui-même » : $(2^3)^2=2^3\times2^3$.`,
        String.raw`Produit de puissances de même base : on additionne les exposants, $2^3\times2^3=2^{3+3}=2^6$. C'est la règle $(a^m)^n=a^{m\times n}$ avec $3\times2=6$.`,
        String.raw`Vérification : $2^3=8$, $8^2=64$ et $2^6=64$ ✔.`
      ],
      explain: String.raw`Une puissance de puissance multiplie les exposants : $(a^m)^n=a^{m\times n}$. En effet $(2^3)^2=2^3\times2^3=2^{3+3}=2^6$. Vérification numérique : $2^3=8$, $8^2=64$, et $2^6=64$ également. À retenir : on additionne les exposants pour un produit, on les multiplie pour une puissance de puissance.`,
      why: { 0: String.raw`$2^5=2^{3+2}$ : on additionne les exposants pour un produit de même base $2^3\times2^2$, pas pour une puissance de puissance.`, 1: String.raw`$2^9=2^{(3^2)}$ : tu as élevé l'exposant au carré. Or $(2^3)^2=2^3\times2^3$, l'exposant est $3\times2=6$ (et $2^9=512\neq64$).` },
      rule: String.raw`$a^m a^n=a^{m+n}$, $(a^m)^n=a^{mn}$, $\frac{a^m}{a^n}=a^{m-n}$`, level: 1 },
    { id: 'm1-q-004', q: String.raw`Que vaut $\sqrt{9+16}$ ?`, choices: [String.raw`$7$`, String.raw`$5$`, String.raw`$25$`], answer: 1,
      topic: 'Racine carrée d\'une somme', sec: 'm1-s-regles',
      steps: [
        String.raw`Notion : pour $y\geq0$, $\sqrt y$ est le nombre positif dont le carré vaut $y$. On calcule toujours d'abord ce qui est sous la racine (la barre de la racine joue le rôle de parenthèses).`,
        String.raw`Sous la racine : $9+16=25$.`,
        String.raw`$\sqrt{25}=5$ car $5\geq0$ et $5^2=25$.`,
        String.raw`Piège évité : $\sqrt9+\sqrt{16}=3+4=7\neq5$. La racine d'une somme n'est pas la somme des racines.`
      ],
      explain: String.raw`On calcule d'abord ce qui est sous la racine : $9+16=25$. Puis $\sqrt{25}=5$, car $5\geq0$ et $5^2=25$. Le piège : la racine carrée ne se « distribue » pas sur une somme, $\sqrt{a+b}\neq\sqrt a+\sqrt b$ en général.`,
      why: { 0: String.raw`$7=\sqrt9+\sqrt{16}=3+4$ : tu as séparé la racine d'une somme, ce qui est faux. Seuls les produits se séparent : $\sqrt{ab}=\sqrt a\sqrt b$.`, 2: String.raw`$25$ est la valeur de $9+16$ : il manque la dernière étape, prendre la racine carrée.` },
      rule: String.raw`$\sqrt{ab}=\sqrt a\,\sqrt b$ (pour $a,b\geq0$) mais $\sqrt{a+b}\neq\sqrt a+\sqrt b$`, level: 1 },
    { id: 'm1-q-005', q: String.raw`Pour tout réel $x$, $\sqrt{x^2}$ est égal à :`, choices: [String.raw`$x$`, String.raw`$-x$`, String.raw`$|x|$`, String.raw`$\pm x$`], answer: 2,
      topic: 'Racine d\'un carré', sec: 'm1-s-abs',
      steps: [
        String.raw`Notion : pour $y\geq0$, $\sqrt y$ est l'unique nombre positif dont le carré vaut $y$. La valeur absolue $|x|$ vaut $x$ si $x\geq0$ et $-x$ si $x\lt0$ : c'est toujours un nombre positif.`,
        String.raw`Les nombres dont le carré vaut $x^2$ sont $x$ et $-x$ ; le positif des deux est $|x|$. Donc $\sqrt{x^2}=|x|$.`,
        String.raw`Test avec $x=-3$ : $\sqrt{(-3)^2}=\sqrt9=3=|-3|$ ✔, alors que la réponse « $x$ » donnerait $-3$, impossible pour une racine.`
      ],
      explain: String.raw`Par définition, $\sqrt{y}$ est l'unique réel positif dont le carré vaut $y$. Les deux nombres dont le carré vaut $x^2$ sont $x$ et $-x$ ; le positif des deux est $|x|$. Donc $\sqrt{x^2}=|x|$ pour tout réel $x$, par exemple $\sqrt{(-3)^2}=\sqrt9=3=|-3|$.`,
      why: { 0: String.raw`Vrai seulement si $x\geq0$. Pour $x=-3$ : $\sqrt{(-3)^2}=3\neq-3$. Une racine carrée n'est jamais négative.`, 1: String.raw`Vrai seulement si $x\leq0$. Pour $x=2$ : $\sqrt{2^2}=2\neq-2$.`, 3: String.raw`« $\pm x$ » désigne deux nombres, alors que $\sqrt{\cdot}$ renvoie un seul nombre, positif. Le $\pm$ apparaît quand on résout $t^2=x^2$ (alors $t=\pm x$), pas quand on calcule une racine.` },
      rule: String.raw`$\sqrt{x^2}=|x|$ pour tout réel $x$, et $\left(\sqrt x\right)^2=x$ pour $x\geq0$`, level: 2 },
    { id: 'm1-q-006', q: String.raw`Simplifier $\sqrt{12}$.`, choices: [String.raw`$2\sqrt3$`, String.raw`$4\sqrt3$`, String.raw`$3\sqrt2$`, String.raw`$6\sqrt2$`], answer: 0,
      topic: 'Simplifier une racine', sec: 'm1-s-regles',
      steps: [
        String.raw`Notion : pour $a,b\geq0$, $\sqrt{ab}=\sqrt a\times\sqrt b$. Simplifier une racine, c'est faire sortir les carrés parfaits ($4, 9, 16, 25,\dots$) qu'elle contient.`,
        String.raw`Plus grand carré parfait qui divise 12 : $4$. On écrit $12=4\times3$.`,
        String.raw`$\sqrt{12}=\sqrt4\times\sqrt3=2\sqrt3$.`,
        String.raw`Vérification : $(2\sqrt3)^2=2^2\times(\sqrt3)^2=4\times3=12$ ✔.`
      ],
      explain: String.raw`Méthode : on cherche le plus grand carré parfait qui divise 12. Ici $12=4\times3$ avec $4=2^2$. Comme $\sqrt{ab}=\sqrt a\sqrt b$ pour $a,b\geq0$ : $\sqrt{12}=\sqrt4\times\sqrt3=2\sqrt3$. Contrôle en élevant au carré : $(2\sqrt3)^2=4\times3=12$.`,
      why: { 1: String.raw`Tu as bien écrit $12=4\times3$, mais oublié de prendre la racine de 4 : $\sqrt4=2$, pas 4. Contrôle : $(4\sqrt3)^2=48\neq12$.`, 2: String.raw`$3\sqrt2=\sqrt{9\times2}=\sqrt{18}$, pas $\sqrt{12}$ : on a inversé le carré parfait et l'autre facteur.`, 3: String.raw`$6\sqrt2=\sqrt{36\times2}=\sqrt{72}$ : vérifie toujours en élevant ta réponse au carré.` },
      rule: String.raw`$\sqrt{k^2 m}=k\sqrt m$ pour $k,m\geq0$ : on sort les carrés parfaits de la racine.`, level: 2 },
    { id: 'm1-q-007', q: String.raw`Que vaut $\frac{1}{\sqrt5-2}$ ?`, choices: [String.raw`$\sqrt5-2$`, String.raw`$\frac{\sqrt5+2}{3}$`, String.raw`$\frac{\sqrt5+2}{21}$`, String.raw`$\sqrt5+2$`], answer: 3,
      topic: 'Quantité conjuguée', sec: 'm1-s-regles',
      steps: [
        String.raw`Notion : la quantité conjuguée de $\sqrt a-b$ est $\sqrt a+b$. Leur produit n'a plus de racine grâce à $(u-v)(u+v)=u^2-v^2$ : $(\sqrt a-b)(\sqrt a+b)=a-b^2$.`,
        String.raw`On multiplie en haut et en bas par $\sqrt5+2$ (cela revient à multiplier par 1) : $\frac{1}{\sqrt5-2}=\frac{\sqrt5+2}{(\sqrt5-2)(\sqrt5+2)}$.`,
        String.raw`Dénominateur : $(\sqrt5)^2-2^2=5-4=1$.`,
        String.raw`Résultat : $\frac{\sqrt5+2}{1}=\sqrt5+2$. Vérification numérique : $\frac{1}{0{,}236}\approx4{,}236$ et $\sqrt5+2\approx4{,}236$ ✔.`
      ],
      explain: String.raw`Pour supprimer la racine du dénominateur, on multiplie en haut et en bas par la quantité conjuguée $\sqrt5+2$. Le dénominateur devient $(\sqrt5-2)(\sqrt5+2)=(\sqrt5)^2-2^2=5-4=1$ grâce à l'identité $(a-b)(a+b)=a^2-b^2$. Il reste $\frac{\sqrt5+2}{1}=\sqrt5+2$ : les deux nombres sont inverses l'un de l'autre puisque leur produit vaut 1.`,
      why: { 0: String.raw`L'inverse de $\sqrt5-2\approx0{,}236$ ne peut pas être lui-même (seuls $1$ et $-1$ sont leur propre inverse). Il faut multiplier par le conjugué.`, 1: String.raw`Le dénominateur est $(\sqrt5)^2-2^2=5-4=1$ : tu as calculé $5-2$ en oubliant d'élever le 2 au carré.`, 2: String.raw`$(\sqrt5)^2=5$, pas $25$ : élever une racine carrée au carré redonne simplement le nombre sous la racine.` },
      rule: String.raw`$(\sqrt a-b)(\sqrt a+b)=a-b^2$ : multiplier par le conjugué fait disparaître la racine.`, level: 2 },
    { id: 'm1-q-008', q: String.raw`Que vaut $|-3|+|2-5|$ ?`, choices: [String.raw`$0$`, String.raw`$6$`, String.raw`$-6$`], answer: 1,
      topic: 'Valeur absolue', sec: 'm1-s-abs',
      steps: [
        String.raw`Notion : la valeur absolue $|x|$ est la distance de $x$ à 0 : $|x|=x$ si $x\geq0$ et $|x|=-x$ si $x\lt0$. Elle est toujours positive ou nulle.`,
        String.raw`$-3\lt0$ donc $|-3|=-(-3)=3$.`,
        String.raw`Pour $|2-5|$, on calcule d'abord l'intérieur : $2-5=-3$, puis $|-3|=3$.`,
        String.raw`Total : $3+3=6$.`
      ],
      explain: String.raw`La valeur absolue d'un nombre est sa distance à 0, donc elle est toujours positive : $|-3|=3$. Pour $|2-5|$, on calcule d'abord l'intérieur, $2-5=-3$, puis on prend la valeur absolue : $|-3|=3$. Le total vaut $3+3=6$.`,
      why: { 0: String.raw`Tu as écrit $|2-5|=-3$ : une valeur absolue n'est jamais négative, $|-3|=3$.`, 2: String.raw`Une somme de valeurs absolues est toujours positive ou nulle : $-6$ est impossible. Les signes moins disparaissent dans la valeur absolue.` },
      rule: String.raw`$|x|=x$ si $x\geq0$, $|x|=-x$ si $x\lt0$ ; dans tous les cas $|x|\geq0$`, level: 1 },
    { id: 'm1-q-009', q: String.raw`L'ensemble des réels $x$ tels que $|x-2|\lt 3$ est :`, choices: [String.raw`$]-5,1[$`, String.raw`$]-1,5[$`, String.raw`$]-1,5]$`, String.raw`$]-\infty,5[$`], answer: 1,
      topic: 'Inéquation avec valeur absolue', sec: 'm1-s-abs',
      steps: [
        String.raw`Notion : $|x-a|$ est la distance entre $x$ et $a$. Pour $r\gt0$ : $|X|\lt r\Leftrightarrow-r\lt X\lt r$.`,
        String.raw`Avec $X=x-2$ et $r=3$ : $|x-2|\lt3\Leftrightarrow-3\lt x-2\lt3$.`,
        String.raw`On ajoute 2 aux trois membres (ajouter un même nombre conserve les inégalités) : $-3+2\lt x\lt3+2$, soit $-1\lt x\lt5$.`,
        String.raw`Inégalités strictes, donc bornes exclues : $S=]-1,5[$, intervalle de centre 2 et de rayon 3. Test : $x=0$ donne $|0-2|=2\lt3$ ✔.`
      ],
      explain: String.raw`$|x-2|$ est la distance entre $x$ et $2$ sur la droite réelle. Dire qu'elle est strictement inférieure à 3 s'écrit $-3\lt x-2\lt3$. En ajoutant 2 aux trois membres, on obtient $-1\lt x\lt5$ : c'est l'intervalle ouvert de centre 2 et de rayon 3, soit $]-1,5[$.`,
      why: { 0: String.raw`$]-5,1[$ est centré en $-2$ : c'est la solution de $|x+2|\lt3$. Ici le centre est la valeur qui annule $x-2$, soit $+2$.`, 2: String.raw`L'inégalité est stricte : en $x=5$, la distance vaut exactement 3, donc 5 est exclu (crochet ouvert).`, 3: String.raw`Tu n'as gardé que $x-2\lt3$. Or $|X|\lt3$ impose aussi $X\gt-3$, c'est-à-dire $x\gt-1$.` },
      rule: String.raw`$|x-a|\lt r\Leftrightarrow a-r\lt x\lt a+r$ (pour $r\gt0$)`, level: 2 },
    { id: 'm1-q-010', q: String.raw`Développer $(a-b)^2$.`, choices: [String.raw`$a^2-b^2$`, String.raw`$a^2+2ab-b^2$`, String.raw`$a^2-2ab+b^2$`, String.raw`$a^2-2ab-b^2$`], answer: 2,
      topic: 'Identités remarquables', sec: 'm1-s-identites',
      steps: [
        String.raw`Notion : une identité remarquable est un développement « tout fait ». $(a-b)^2$ signifie $(a-b)\times(a-b)$.`,
        String.raw`Distributivité (chaque terme du 1er facteur multiplie chaque terme du 2e) : $(a-b)(a-b)=a\times a+a\times(-b)+(-b)\times a+(-b)\times(-b)$.`,
        String.raw`On réduit : $a^2-ab-ab+b^2=a^2-2ab+b^2$. Le double produit est négatif, mais $(-b)\times(-b)=+b^2$.`,
        String.raw`Vérification avec $a=3$, $b=1$ : $(3-1)^2=4$ et $9-6+1=4$ ✔.`
      ],
      explain: String.raw`On développe le produit $(a-b)(a-b)$ terme à terme : $a\cdot a-a\cdot b-b\cdot a+b\cdot b=a^2-2ab+b^2$. Le double produit $-2ab$ est négatif, mais le dernier terme $(-b)^2=+b^2$ est positif car c'est un carré. Contrôle avec $a=3$ et $b=1$ : $(3-1)^2=4$ et $9-6+1=4$.`,
      why: { 0: String.raw`$a^2-b^2=(a-b)(a+b)$, c'est une autre identité. Il manque le double produit $-2ab$ (avec $a=3$, $b=1$ : $8\neq4$).`, 1: String.raw`Deux erreurs de signe : le double produit vaut $2\times a\times(-b)=-2ab$ et le carré $(-b)^2$ vaut $+b^2$.`, 3: String.raw`$(-b)^2=(-b)\times(-b)=+b^2$ : un carré est toujours positif.` },
      rule: String.raw`$(a-b)^2=a^2-2ab+b^2$, $(a+b)^2=a^2+2ab+b^2$, $(a-b)(a+b)=a^2-b^2$`, level: 1 },
    { id: 'm1-q-011', q: String.raw`Développer $(a+b)^3$.`, choices: [String.raw`$a^3+3a^2b+3ab^2+b^3$`, String.raw`$a^3+b^3$`, String.raw`$a^3+3ab+b^3$`, String.raw`$a^3+2a^2b+2ab^2+b^3$`], answer: 0,
      topic: 'Cube d\'une somme', sec: 'm1-s-identites',
      steps: [
        String.raw`Notion : $(a+b)^3=(a+b)(a+b)(a+b)$ ; on s'appuie sur l'identité connue $(a+b)^2=a^2+2ab+b^2$.`,
        String.raw`$(a+b)^3=(a+b)(a^2+2ab+b^2)$. On distribue $a$ : $a^3+2a^2b+ab^2$ ; puis $b$ : $a^2b+2ab^2+b^3$.`,
        String.raw`On regroupe les termes semblables : $a^3+(2+1)a^2b+(1+2)ab^2+b^3=a^3+3a^2b+3ab^2+b^3$.`,
        String.raw`Les coefficients $1,3,3,1$ forment la ligne 3 du triangle de Pascal. Test $a=b=1$ : $2^3=8=1+3+3+1$ ✔.`
      ],
      explain: String.raw`On écrit $(a+b)^3=(a+b)(a+b)^2=(a+b)(a^2+2ab+b^2)$, puis on développe : $a^3+2a^2b+ab^2+a^2b+2ab^2+b^3=a^3+3a^2b+3ab^2+b^3$. Les coefficients $1,3,3,1$ sont ceux de la ligne 3 du triangle de Pascal. Contrôle avec $a=b=1$ : $2^3=8=1+3+3+1$. Élever une somme au cube ne revient jamais à élever chaque terme au cube.`,
      why: { 1: String.raw`$(a+b)^3\neq a^3+b^3$ : tu as oublié les termes croisés (avec $a=b=1$ : $8\neq2$).`, 2: String.raw`$3ab$ est de degré 2 alors que tous les termes de $(a+b)^3$ sont de degré 3 : les termes croisés sont $3a^2b$ et $3ab^2$.`, 3: String.raw`Les coefficients $1,2,2,1$ ont pour somme 6 au lieu de $2^3=8$ : ce sont $1,3,3,1$ (triangle de Pascal).` },
      rule: String.raw`$(a+b)^3=a^3+3a^2b+3ab^2+b^3$`, level: 2 },
    { id: 'm1-q-012', q: String.raw`Factoriser $a^3-b^3$.`, choices: [String.raw`$(a-b)(a^2-ab+b^2)$`, String.raw`$(a-b)^3$`, String.raw`$(a-b)(a+b)^2$`, String.raw`$(a-b)(a^2+ab+b^2)$`], answer: 3,
      topic: 'Différence de deux cubes', sec: 'm1-s-identites',
      steps: [
        String.raw`Notion : factoriser, c'est écrire sous forme de produit. Comme $a^3-b^3$ s'annule pour $a=b$, il contient le facteur $(a-b)$ ; il reste à trouver l'autre facteur.`,
        String.raw`Formule à connaître : $a^3-b^3=(a-b)(a^2+ab+b^2)$.`,
        String.raw`Vérification par développement : $(a-b)(a^2+ab+b^2)=a^3+a^2b+ab^2-a^2b-ab^2-b^3$.`,
        String.raw`Les termes $+a^2b$ et $-a^2b$, puis $+ab^2$ et $-ab^2$ s'annulent : il reste $a^3-b^3$ ✔.`
      ],
      explain: String.raw`On vérifie en développant : $(a-b)(a^2+ab+b^2)=a^3+a^2b+ab^2-a^2b-ab^2-b^3$. Les termes $a^2b$ et $ab^2$ se compensent deux à deux, il reste bien $a^3-b^3$. Pour retenir : $a=b$ annule $a^3-b^3$, d'où le facteur $(a-b)$, et le trinôme qui suit a tous ses signes positifs.`,
      why: { 0: String.raw`$(a-b)(a^2-ab+b^2)=a^3-2a^2b+2ab^2-b^3$. Le trinôme $a^2-ab+b^2$ appartient à l'autre formule, $a^3+b^3=(a+b)(a^2-ab+b^2)$.`, 1: String.raw`$(a-b)^3=a^3-3a^2b+3ab^2-b^3$ contient des termes croisés : le cube d'une différence n'est pas la différence des cubes.`, 2: String.raw`$(a-b)(a+b)^2=(a^2-b^2)(a+b)=a^3+a^2b-ab^2-b^3$ : les termes croisés ne s'annulent pas.` },
      rule: String.raw`$a^3-b^3=(a-b)(a^2+ab+b^2)$ et $a^3+b^3=(a+b)(a^2-ab+b^2)$`, level: 2 },
    { id: 'm1-q-013', q: String.raw`Quelle est la ligne $n=5$ du triangle de Pascal ?`, choices: [String.raw`$1\ \ 4\ \ 6\ \ 4\ \ 1$`, String.raw`$1\ \ 5\ \ 10\ \ 5\ \ 1$`, String.raw`$1\ \ 5\ \ 10\ \ 10\ \ 5\ \ 1$`, String.raw`$1\ \ 5\ \ 15\ \ 15\ \ 5\ \ 1$`], answer: 2,
      topic: 'Triangle de Pascal', sec: 'm1-s-identites',
      steps: [
        String.raw`Notion : la ligne $n$ du triangle de Pascal donne les coefficients $\binom n0,\binom n1,\dots,\binom nn$ du développement de $(a+b)^n$. Chaque nombre est la somme des deux nombres situés au-dessus de lui.`,
        String.raw`On part de la ligne 4 : $1\ \ 4\ \ 6\ \ 4\ \ 1$.`,
        String.raw`Ligne 5 : on garde 1 aux deux bouts et on additionne les voisins : $1$, $1+4=5$, $4+6=10$, $6+4=10$, $4+1=5$, $1$.`,
        String.raw`Contrôles : 6 termes ($n+1$), ligne symétrique, somme $1+5+10+10+5+1=32=2^5$ ✔.`
      ],
      explain: String.raw`Chaque coefficient du triangle est la somme des deux coefficients situés juste au-dessus (relation de Pascal $\binom{n}{k}=\binom{n-1}{k-1}+\binom{n-1}{k}$). En partant de la ligne 4 ($1\,4\,6\,4\,1$) : $1$, $1+4=5$, $4+6=10$, $6+4=10$, $4+1=5$, $1$. Contrôle : la ligne $n$ a $n+1$ termes et leur somme vaut $2^n$, ici $1+5+10+10+5+1=32=2^5$.`,
      why: { 0: String.raw`C'est la ligne $n=4$ (5 coefficients, de somme $16=2^4$).`, 1: String.raw`Il manque un coefficient : la ligne $n=5$ en contient $6$ et elle est symétrique ($\binom52=\binom53=10$).`, 3: String.raw`$\binom52=\frac{5\times4}{2}=10$ (obtenu par $4+6$), pas 15 ; d'ailleurs la somme vaudrait $42\neq2^5$.` },
      rule: String.raw`$\binom nk=\binom{n-1}{k-1}+\binom{n-1}{k}$ et $\sum_k\binom nk=2^n$`, level: 1 },
    { id: 'm1-q-014', q: String.raw`Que vaut $\binom{6}{2}$ ?`, choices: [String.raw`$12$`, String.raw`$15$`, String.raw`$30$`, String.raw`$720$`], answer: 1,
      topic: 'Coefficients binomiaux', sec: 'm1-s-identites',
      steps: [
        String.raw`Notion : $\binom nk$ (« $k$ parmi $n$ ») est le nombre de façons de choisir $k$ éléments parmi $n$, sans tenir compte de l'ordre. Formule : $\binom nk=\frac{n!}{k!\,(n-k)!}$ où $n!=1\times2\times\dots\times n$.`,
        String.raw`Ici $n=6$ et $k=2$ : $\binom62=\frac{6!}{2!\times4!}$ avec $6!=720$, $2!=2$ et $4!=24$.`,
        String.raw`$\frac{720}{2\times24}=\frac{720}{48}=15$. Plus rapide : on simplifie par $4!$, $\frac{6\times5\times4!}{2\times4!}=\frac{6\times5}{2\times1}=15$.`,
        String.raw`Interprétation : il y a 15 façons de choisir 2 personnes parmi 6 (par exemple 15 matchs si 6 équipes se rencontrent toutes une fois).`
      ],
      explain: String.raw`Par définition $\binom nk=\frac{n!}{k!\,(n-k)!}$. Ici $\binom62=\frac{6!}{2!\,4!}=\frac{6\times5\times4!}{2\times4!}=\frac{6\times5}{2}=15$ après simplification par $4!$. Interprétation : il y a 15 façons de choisir 2 objets parmi 6 quand l'ordre ne compte pas.`,
      why: { 0: String.raw`$12=6\times2$ ne correspond à aucune formule : pour $k=2$, $\binom n2=\frac{n(n-1)}{2}$.`, 2: String.raw`$30=6\times5$ compte les choix ordonnés : il faut encore diviser par $2!=2$ car l'ordre ne compte pas.`, 3: String.raw`$720=6!$ : il manque la division par $2!\,4!=48$.` },
      rule: String.raw`$\binom nk=\frac{n!}{k!\,(n-k)!}$, en particulier $\binom n2=\frac{n(n-1)}{2}$`, level: 1 },
    { id: 'm1-q-015', q: String.raw`Quel est le coefficient de $x^2$ dans le développement de $(x+3)^4$ ?`, choices: [String.raw`$6$`, String.raw`$18$`, String.raw`$54$`, String.raw`$81$`], answer: 2,
      topic: 'Binôme de Newton', sec: 'm1-s-identites',
      steps: [
        String.raw`Notion : formule du binôme, $(a+b)^n=\sum_{k=0}^{n}\binom nk a^k b^{n-k}$. Chaque terme est un coefficient binomial fois une puissance de $a$ fois une puissance de $b$, les deux exposants ayant pour somme $n$.`,
        String.raw`Avec $a=x$, $b=3$, $n=4$ : le terme en $x^2$ correspond à $k=2$, c'est $\binom42x^2\,3^{4-2}$.`,
        String.raw`$\binom42=\frac{4\times3}{2}=6$ et $3^{2}=9$.`,
        String.raw`Terme : $6\times9\,x^2=54x^2$, donc le coefficient vaut $54$.`
      ],
      explain: String.raw`Formule du binôme : $(x+3)^4=\sum_{k=0}^{4}\binom4kx^k\,3^{4-k}$. Le terme en $x^2$ correspond à $k=2$ : $\binom42x^2\,3^{2}=6\times9\,x^2=54x^2$. Attention : la puissance de 3 est complémentaire de celle de $x$, ici $4-2=2$.`,
      why: { 0: String.raw`$\binom42=6$ n'est que le coefficient binomial : il faut le multiplier par $3^{4-2}=9$.`, 1: String.raw`Tu as multiplié par $3$ au lieu de $3^2=9$ : la puissance de 3 est $4-2=2$.`, 3: String.raw`$81=3^4$ est le terme constant ($k=0$, sans $x$).` },
      rule: String.raw`$(a+b)^n=\sum_{k=0}^{n}\binom nk a^k b^{n-k}$`, level: 3 },
    { id: 'm1-q-016', q: String.raw`Que vaut $\sum_{k=0}^{n}\binom{n}{k}$ ?`, choices: [String.raw`$n!$`, String.raw`$2^n$`, String.raw`$n^2$`, String.raw`$2n$`], answer: 1,
      topic: 'Somme des coefficients binomiaux', sec: 'm1-s-identites',
      steps: [
        String.raw`Notion : la formule du binôme $(a+b)^n=\sum_{k=0}^{n}\binom nk a^kb^{n-k}$ est vraie pour tous nombres $a$ et $b$ : on peut choisir des valeurs qui simplifient.`,
        String.raw`Avec $a=b=1$ : toutes les puissances valent 1, donc $(1+1)^n=\sum_{k=0}^n\binom nk$.`,
        String.raw`D'où $\sum_{k=0}^n\binom nk=2^n$. Test $n=3$ : $1+3+3+1=8=2^3$ ✔.`
      ],
      explain: String.raw`On applique la formule du binôme avec $a=b=1$ : $(1+1)^n=\sum_{k=0}^n\binom nk1^k1^{n-k}=\sum_{k=0}^n\binom nk$. La somme vaut donc $2^n$ ; c'est aussi le nombre total de sous-ensembles d'un ensemble à $n$ éléments. Contrôle pour $n=3$ : $1+3+3+1=8=2^3$.`,
      why: { 0: String.raw`Confusion entre $n!$ (nombre de façons de ranger $n$ objets) et le nombre de sous-ensembles. Pour $n=3$ : $1+3+3+1=8$ alors que $3!=6$.`, 2: String.raw`On devine souvent $n^2$ en regardant $n=2$ ($1+2+1=4$), mais pour $n=3$ : $8\neq9$. La somme double à chaque ligne : croissance exponentielle, pas quadratique.`, 3: String.raw`$2n$ vient d'une confusion entre $2^n$ (2 multiplié $n$ fois par lui-même) et $2\times n$. Pour $n=3$ : $8\neq6$.` },
      rule: String.raw`$\sum_{k=0}^{n}\binom nk=(1+1)^n=2^n$`, level: 2 },
    { id: 'm1-q-017', q: String.raw`Quelles sont les racines de $x^2-4x+1$ ?`, choices: [String.raw`$4\pm2\sqrt3$`, String.raw`$-2\pm\sqrt3$`, String.raw`$2\pm\sqrt{12}$`, String.raw`$2\pm\sqrt3$`], answer: 3,
      topic: 'Racines du trinôme', sec: 'm1-s-trinome',
      steps: [
        String.raw`Notion : les racines de $ax^2+bx+c$ sont les valeurs de $x$ qui l'annulent. On calcule le discriminant $\Delta=b^2-4ac$ ; si $\Delta\gt0$, il y a deux racines $x_{1,2}=\frac{-b\pm\sqrt\Delta}{2a}$.`,
        String.raw`Ici $a=1$, $b=-4$, $c=1$ : $\Delta=(-4)^2-4\times1\times1=16-4=12\gt0$.`,
        String.raw`$\sqrt{12}=\sqrt{4\times3}=2\sqrt3$, donc $x=\frac{-(-4)\pm2\sqrt3}{2\times1}=\frac{4\pm2\sqrt3}{2}$.`,
        String.raw`On divise chaque terme du numérateur par 2 : $x=2\pm\sqrt3$. Contrôle : somme $4=-\frac ba$, produit $4-3=1=\frac ca$ ✔.`
      ],
      explain: String.raw`Avec $a=1$, $b=-4$, $c=1$ : $\Delta=b^2-4ac=16-4=12\gt0$, il y a deux racines. Comme $\sqrt{12}=\sqrt{4\times3}=2\sqrt3$, on obtient $x=\frac{-b\pm\sqrt\Delta}{2a}=\frac{4\pm2\sqrt3}{2}=2\pm\sqrt3$. Contrôle : la somme vaut $4=-\frac ba$ et le produit $(2+\sqrt3)(2-\sqrt3)=4-3=1=\frac ca$. Réflexe : simplifier la racine du discriminant avant de diviser par $2a$.`,
      why: { 0: String.raw`Tu as oublié de diviser par $2a=2$ : $4\pm2\sqrt3$ n'est que le numérateur $-b\pm\sqrt\Delta$.`, 1: String.raw`Le numérateur commence par $-b=-(-4)=+4$ : erreur de signe sur $b$.`, 2: String.raw`Il faut diviser aussi la racine par 2 : $\frac{\sqrt{12}}{2}=\frac{2\sqrt3}{2}=\sqrt3$. D'ailleurs le produit de $2\pm\sqrt{12}$ vaut $4-12=-8\neq1$.` },
      rule: String.raw`$x_{1,2}=\frac{-b\pm\sqrt\Delta}{2a}$ avec $\Delta=b^2-4ac\gt0$`, level: 2 },
    { id: 'm1-q-018', q: String.raw`Forme canonique de $x^2-6x+11$ :`, choices: [String.raw`$(x+3)^2+2$`, String.raw`$(x-3)^2+2$`, String.raw`$(x-3)^2+11$`, String.raw`$(x-6)^2-25$`], answer: 1,
      topic: 'Forme canonique', sec: 'm1-s-trinome',
      steps: [
        String.raw`Notion : la forme canonique $a(x-\alpha)^2+\beta$ fait apparaître le sommet $(\alpha,\beta)$ de la parabole. On l'obtient en « complétant le carré » : $x^2+bx=\left(x+\frac b2\right)^2-\frac{b^2}{4}$.`,
        String.raw`Moitié du coefficient de $x$ : $\frac{-6}{2}=-3$, on utilise donc $(x-3)^2=x^2-6x+9$.`,
        String.raw`$x^2-6x=(x-3)^2-9$ (on retire le 9 ajouté en trop).`,
        String.raw`$x^2-6x+11=(x-3)^2-9+11=(x-3)^2+2$. Contrôle en $x=0$ : $9+2=11$ ✔.`
      ],
      explain: String.raw`On complète le carré : $x^2-6x$ est le début de $(x-3)^2=x^2-6x+9$ (on prend la moitié du coefficient de $x$). Donc $x^2-6x=(x-3)^2-9$ et $x^2-6x+11=(x-3)^2-9+11=(x-3)^2+2$. On lit le sommet de la parabole : minimum $2$ atteint en $x=3$.`,
      why: { 0: String.raw`$(x+3)^2=x^2+6x+9$ : le double produit serait $+6x$. Pour obtenir $-6x$, il faut $(x-3)^2$.`, 2: String.raw`$(x-3)^2$ contient déjà un $+9$ : il faut le retrancher, d'où $11-9=2$ et non $11$.`, 3: String.raw`On prend la moitié du coefficient de $x$ ($\frac62=3$), pas le coefficient entier ; d'ailleurs $(x-6)^2-25=x^2-12x+11$.` },
      rule: String.raw`$x^2+bx+c=\left(x+\frac b2\right)^2-\frac{b^2}{4}+c$`, level: 2 },
    { id: 'm1-q-019', q: String.raw`Si $x_1, x_2$ sont les racines de $2x^2-6x+1$, que vaut $x_1+x_2$ ?`, choices: [String.raw`$-3$`, String.raw`$\frac12$`, String.raw`$3$`, String.raw`$6$`], answer: 2,
      topic: 'Somme et produit des racines', sec: 'm1-s-trinome',
      steps: [
        String.raw`Notion : si $ax^2+bx+c$ a deux racines $x_1,x_2$, alors $ax^2+bx+c=a(x-x_1)(x-x_2)=a\big(x^2-(x_1+x_2)x+x_1x_2\big)$. En identifiant : $x_1+x_2=-\frac ba$ et $x_1x_2=\frac ca$.`,
        String.raw`Existence des racines : $\Delta=(-6)^2-4\times2\times1=36-8=28\gt0$ ✔.`,
        String.raw`Avec $a=2$ et $b=-6$ : $x_1+x_2=-\frac{-6}{2}=\frac62=3$.`
      ],
      explain: String.raw`On vérifie d'abord que les racines existent : $\Delta=36-8=28\gt0$. Les relations coefficients-racines donnent alors $x_1+x_2=-\frac ba=-\frac{-6}{2}=3$ (et $x_1x_2=\frac ca=\frac12$). Inutile de calculer les racines elles-mêmes.`,
      why: { 0: String.raw`Erreur de signe : $S=-\frac ba$ avec $b=-6$, donc $S=-\frac{-6}{2}=+3$.`, 1: String.raw`$\frac12=\frac ca$ est le produit des racines, pas leur somme.`, 3: String.raw`$6=-b$ : il faut encore diviser par $a=2$.` },
      rule: String.raw`$x_1+x_2=-\frac ba$ et $x_1x_2=\frac ca$`, level: 2 },
    { id: 'm1-q-020', q: String.raw`Sur $]1,3[$, le trinôme $-x^2+4x-3$ est :`, choices: [String.raw`strictement positif`, String.raw`strictement négatif`, String.raw`positif puis négatif (il change de signe en $2$)`], answer: 0,
      topic: 'Signe du trinôme', sec: 'm1-s-trinome',
      steps: [
        String.raw`Notion : un trinôme $ax^2+bx+c$ qui a deux racines est du signe de $a$ à l'extérieur des racines et du signe contraire entre elles.`,
        String.raw`Racines : $-x^2+4x-3=-(x^2-4x+3)=-(x-1)(x-3)$, elles valent 1 et 3 (contrôle : $1+3=4$ et $1\times3=3$).`,
        String.raw`$a=-1\lt0$ : le trinôme est négatif à l'extérieur de $[1,3]$ et positif strictement entre 1 et 3.`,
        String.raw`Contrôle en $x=2$ : $-4+8-3=1\gt0$ ✔.`
      ],
      explain: String.raw`On factorise : $-x^2+4x-3=-(x^2-4x+3)=-(x-1)(x-3)$, de racines 1 et 3. Un trinôme est du signe de $a$ à l'extérieur des racines et du signe contraire entre elles ; ici $a=-1$, donc il est strictement positif sur $]1,3[$. Contrôle en $x=2$ : $-4+8-3=1\gt0$.`,
      why: { 1: String.raw`Le signe de $a=-1$ vaut à l'extérieur des racines ; entre 1 et 3 c'est le signe opposé. Teste $x=2$ : on trouve $1\gt0$.`, 2: String.raw`Un trinôme ne change de signe qu'en ses racines, ici 1 et 3 ; $x=2$ est le sommet (maximum 1), pas une racine.` },
      rule: String.raw`$ax^2+bx+c$ est du signe de $a$ sauf entre ses racines`, level: 2 },
    { id: 'm1-q-021', q: String.raw`Le trinôme $ax^2+bx+c$ ($a\neq0$) est strictement du signe de $a$ pour tout réel $x$ si et seulement si :`, choices: [String.raw`$\Delta\leq 0$`, String.raw`$\Delta\lt 0$`, String.raw`$\Delta\gt 0$`, String.raw`$c\gt 0$`], answer: 1,
      topic: 'Signe du trinôme', sec: 'm1-s-trinome',
      steps: [
        String.raw`Notion : le signe de $ax^2+bx+c$ dépend de l'existence de racines, donc du discriminant $\Delta=b^2-4ac$. La forme canonique le montre : $ax^2+bx+c=a\left[\left(x+\frac{b}{2a}\right)^2-\frac{\Delta}{4a^2}\right]$.`,
        String.raw`Si $\Delta\lt0$ : $-\frac{\Delta}{4a^2}\gt0$, le crochet est un carré plus un nombre strictement positif, il est donc strictement positif ; le trinôme a strictement le signe de $a$ partout.`,
        String.raw`Si $\Delta=0$, le trinôme s'annule en $-\frac{b}{2a}$ ; si $\Delta\gt0$, il change de signe entre ses racines. La condition cherchée est donc exactement $\Delta\lt0$.`
      ],
      explain: String.raw`Forme canonique : $ax^2+bx+c=a\left[\left(x+\frac{b}{2a}\right)^2-\frac{\Delta}{4a^2}\right]$. Si $\Delta\lt0$, le crochet est la somme d'un carré et d'un nombre strictement positif : il est strictement positif pour tout $x$, et le trinôme a partout le signe de $a$. Si $\Delta\geq0$, le crochet s'annule en au moins une racine, donc le signe n'est pas strict partout.`,
      why: { 0: String.raw`Si $\Delta=0$, le trinôme s'annule en sa racine double : il est du signe de $a$ ou nul, mais pas strictement (exemple : $x^2$ s'annule en 0).`, 2: String.raw`Avec $\Delta\gt0$, il y a deux racines et le trinôme prend le signe opposé à $a$ entre elles.`, 3: String.raw`Le signe de $c$ ne suffit pas : $x^2-3x+1$ a $c=1\gt0$ mais vaut $-1$ en $x=1$ (car $\Delta=5\gt0$).` },
      rule: String.raw`$\Delta\lt0\Rightarrow$ aucune racine réelle et $ax^2+bx+c$ du signe de $a$ sur $\mathbb R$`, level: 3 },
    { id: 'm1-q-022', q: String.raw`Solutions de $(x-2)(3x+1)=0$ :`, choices: [String.raw`$2$ et $-3$`, String.raw`$-2$ et $\frac13$`, String.raw`$2$ et $-\frac13$`, String.raw`$2$ et $\frac13$`], answer: 2,
      topic: 'Équation produit nul', sec: 'm1-s-equations',
      steps: [
        String.raw`Notion (règle du produit nul) : un produit est nul si et seulement si l'un au moins de ses facteurs est nul : $AB=0\Leftrightarrow A=0$ ou $B=0$.`,
        String.raw`$x-2=0\Leftrightarrow x=2$ (on ajoute 2 des deux côtés).`,
        String.raw`$3x+1=0\Leftrightarrow3x=-1$ (on retranche 1) $\Leftrightarrow x=-\frac13$ (on divise par 3).`,
        String.raw`Vérification : en $x=2$ le premier facteur est nul ✔ ; en $x=-\frac13$, $3\times\left(-\frac13\right)+1=-1+1=0$ ✔.`
      ],
      explain: String.raw`Un produit de facteurs est nul si et seulement si l'un au moins des facteurs est nul. Donc $x-2=0$, soit $x=2$, ou $3x+1=0$, soit $3x=-1$ et $x=-\frac13$. Contrôle : en $x=-\frac13$, $3x+1=-1+1=0$.`,
      why: { 0: String.raw`$3x+1=0$ donne $3x=-1$ puis $x=-\frac13$ : il faut diviser $-1$ par 3, pas prendre $-3$.`, 1: String.raw`Signes inversés : $x-2=0$ donne $x=+2$ (la racine est l'opposé du nombre écrit dans $x-2$).`, 3: String.raw`$3x=-1$ donne $x=-\frac13$ : le signe moins a été perdu.` },
      rule: String.raw`$AB=0\Leftrightarrow A=0$ ou $B=0$`, level: 1 },
    { id: 'm1-q-023', q: String.raw`L'inéquation $-2x+6\gt 0$ équivaut à :`, choices: [String.raw`$x\gt 3$`, String.raw`$x\lt 3$`, String.raw`$x\gt -3$`], answer: 1,
      topic: 'Inéquations du 1er degré', sec: 'm1-s-equations',
      steps: [
        String.raw`Notion : on résout une inéquation comme une équation, avec une règle en plus : multiplier ou diviser les deux membres par un nombre négatif inverse le sens de l'inégalité (ajouter ou soustraire ne change rien).`,
        String.raw`On retranche 6 des deux côtés : $-2x+6\gt0\Leftrightarrow-2x\gt-6$.`,
        String.raw`On divise par $-2\lt0$, donc le sens change : $x\lt\frac{-6}{-2}$, soit $x\lt3$.`,
        String.raw`Test : $x=0$ donne $6\gt0$ ✔ ; $x=4$ donne $-2$, qui n'est pas $\gt0$ ✔.`
      ],
      explain: String.raw`On isole $x$ : $-2x+6\gt0\Leftrightarrow-2x\gt-6$. On divise ensuite par $-2$, qui est négatif : diviser (ou multiplier) une inégalité par un nombre négatif inverse son sens. On obtient $x\lt3$. Contrôle : $x=0$ donne $6\gt0$ (solution), $x=4$ donne $-2$ (pas solution).`,
      why: { 0: String.raw`En divisant par $-2\lt0$, il faut changer le sens de l'inégalité : $x\gt3$ est justement la zone où l'expression est négative.`, 2: String.raw`Deux erreurs : $\frac{-6}{-2}=+3$ (pas $-3$), et le sens de l'inégalité doit changer.` },
      rule: String.raw`Multiplier ou diviser une inégalité par un réel négatif change son sens.`, level: 1 },
    { id: 'm1-q-024', q: String.raw`Ensemble des solutions de $\frac{x-1}{x+2}\leq 0$ :`, choices: [String.raw`$[-2,1]$`, String.raw`$]-2,1]$`, String.raw`$]-\infty,-2[\cup[1,+\infty[$`, String.raw`$]-2,1[$`], answer: 1,
      topic: 'Inéquation quotient', sec: 'm1-s-equations',
      steps: [
        String.raw`Notion : pour étudier le signe d'un quotient, on dresse le tableau de signes du numérateur et du dénominateur. Les valeurs qui annulent le dénominateur sont interdites, donc toujours exclues.`,
        String.raw`$x-1$ s'annule en 1 (négatif avant, positif après) ; $x+2$ s'annule en $-2$ (négatif avant, positif après). Valeur interdite : $-2$.`,
        String.raw`Signe du quotient : pour $x\lt-2$, $\frac{-}{-}\gt0$ ; pour $-2\lt x\lt1$, $\frac{-}{+}\lt0$ ; pour $x\gt1$, $\frac{+}{+}\gt0$.`,
        String.raw`On veut $\leq0$ : l'intervalle $]-2,1[$ plus le point $x=1$ où le quotient vaut 0. $S=]-2,1]$.`
      ],
      explain: String.raw`Valeur interdite : $x=-2$ (dénominateur nul). Tableau de signes : $x-1$ s'annule en 1, $x+2$ en $-2$ ; le quotient est positif pour $x\lt-2$, négatif entre $-2$ et 1, positif pour $x\gt1$. Il vaut 0 en $x=1$, inclus car l'inégalité est large, et n'est pas défini en $-2$, exclu : $S=]-2,1]$.`,
      why: { 0: String.raw`$-2$ annule le dénominateur : le quotient n'y est pas défini, cette borne est toujours exclue (crochet ouvert).`, 2: String.raw`C'est l'ensemble où le quotient est positif ou nul : tu as inversé les signes du tableau. Teste $x=0$ : $\frac{-1}{2}\lt0$, donc 0 doit être solution.`, 3: String.raw`En $x=1$ le quotient vaut 0 et l'inégalité est large ($\leq$) : 1 est solution, le crochet est fermé.` },
      rule: String.raw`Pour $\frac AB\leq0$ : tableau de signes ; les zéros de $B$ sont toujours exclus.`, level: 2 },
    { id: 'm1-q-025', q: String.raw`Où est l'erreur dans : « $\frac1x\lt 2\Leftrightarrow 1\lt 2x\Leftrightarrow x\gt\frac12$ » ?`, choices: [String.raw`Il n'y a pas d'erreur`, String.raw`Multiplier par $x$ ne conserve le sens que si $x\gt0$`, String.raw`Il fallait d'abord diviser par 2`], answer: 1,
      topic: 'Inéquation avec une inconnue au dénominateur', sec: 'm1-s-equations',
      steps: [
        String.raw`Notion : multiplier les deux membres d'une inégalité par un nombre positif conserve le sens, par un nombre négatif l'inverse. Si le signe du multiplicateur est inconnu, on ne peut pas conclure.`,
        String.raw`Le passage $\frac1x\lt2\Rightarrow1\lt2x$ multiplie par $x$, dont le signe est inconnu : il n'est valable que pour $x\gt0$.`,
        String.raw`Méthode correcte : $\frac1x-2\lt0\Leftrightarrow\frac{1-2x}{x}\lt0$. Tableau de signes ($1-2x$ s'annule en $\frac12$, $x$ en 0) : le quotient est négatif pour $x\lt0$ et pour $x\gt\frac12$.`,
        String.raw`$S=]-\infty,0[\,\cup\,]\frac12,+\infty[$ : le raisonnement fautif avait perdu tous les négatifs.`
      ],
      explain: String.raw`On ne peut pas multiplier une inégalité par $x$ sans connaître son signe : si $x\lt0$, le sens change. D'ailleurs pour $x\lt0$, $\frac1x\lt0\lt2$ : tous les négatifs sont solutions, et ils ont été perdus. Méthode sûre : $\frac1x-2\lt0\Leftrightarrow\frac{1-2x}{x}\lt0$, puis tableau de signes, ce qui donne $S=]-\infty,0[\,\cup\,]\frac12,+\infty[$.`,
      why: { 0: String.raw`Contre-exemple : $x=-1$ vérifie $\frac1{-1}=-1\lt2$ mais pas $x\gt\frac12$. Des solutions ont été perdues, il y a donc une erreur.`, 2: String.raw`Diviser par 2 ne change rien au problème : c'est la multiplication par $x$, de signe inconnu, qui est illégitime.` },
      rule: String.raw`Ne jamais multiplier une inégalité par une expression de signe inconnu : tout passer à gauche, réduire au même dénominateur, puis tableau de signes.`, level: 2 },
    { id: 'm1-q-026', q: String.raw`Solution du système $\begin{cases}x+y=5\\x-y=1\end{cases}$ :`, choices: [String.raw`$(2,3)$`, String.raw`$(3,2)$`, String.raw`$(4,1)$`], answer: 1,
      topic: 'Systèmes linéaires 2×2', sec: 'm1-s-equations',
      steps: [
        String.raw`Notion : résoudre un système, c'est trouver le couple $(x,y)$ qui vérifie les deux équations à la fois. Méthode par combinaison : on additionne ou soustrait les équations pour éliminer une inconnue.`,
        String.raw`$L_1+L_2$ : $(x+y)+(x-y)=5+1$, soit $2x=6$, donc $x=3$.`,
        String.raw`On reporte dans $L_1$ : $3+y=5$, donc $y=2$.`,
        String.raw`Vérification : $3+2=5$ ✔ et $3-2=1$ ✔. Solution $(3,2)$.`
      ],
      explain: String.raw`Méthode par combinaison : en additionnant les deux lignes, $y$ s'élimine et il reste $2x=6$, donc $x=3$. On reporte dans la première équation : $y=5-3=2$. Vérification dans les deux équations : $3+2=5$ et $3-2=1$.`,
      why: { 0: String.raw`$x$ et $y$ sont inversés : $(2,3)$ vérifie $x+y=5$ mais $x-y=2-3=-1\neq1$. Il faut toujours vérifier les deux équations.`, 2: String.raw`$(4,1)$ vérifie la première équation mais pas la seconde : $4-1=3\neq1$.` },
      rule: String.raw`Combinaison : additionner ou soustraire les lignes pour éliminer une inconnue, puis vérifier dans chaque équation.`, level: 1 },
    { id: 'm1-q-027', q: String.raw`Le système $\begin{cases}ax+by=e\\cx+dy=f\end{cases}$ admet une unique solution si et seulement si :`, choices: [String.raw`$ad+bc\neq 0$`, String.raw`$ab-cd\neq 0$`, String.raw`$ad-bc\neq 0$`, String.raw`$e\neq0$ et $f\neq0$`], answer: 2,
      topic: 'Déterminant d\'un système', sec: 'm1-s-equations',
      steps: [
        String.raw`Notion : le système $ax+by=e$, $cx+dy=f$ représente deux droites. Il a une unique solution exactement quand les droites se coupent en un point, c'est-à-dire quand le déterminant $ad-bc$ est non nul.`,
        String.raw`Justification : $d\times L_1-b\times L_2$ élimine $y$ et donne $(ad-bc)x=ed-bf$. On ne peut isoler $x$ en divisant par $ad-bc$ que si ce nombre est non nul.`,
        String.raw`Si $ad-bc\neq0$ : $x=\frac{ed-bf}{ad-bc}$ et de même $y=\frac{af-ce}{ad-bc}$ (formules de Cramer). Si $ad-bc=0$ : droites parallèles, aucune ou une infinité de solutions.`
      ],
      explain: String.raw`Le déterminant du système est $\begin{vmatrix}a&b\\c&d\end{vmatrix}=ad-bc$ : produit de la diagonale moins produit de l'autre diagonale. S'il est non nul, les formules de Cramer donnent l'unique solution $x=\frac{ed-bf}{ad-bc}$ et $y=\frac{af-ce}{ad-bc}$. S'il est nul, les deux droites sont parallèles : aucune solution ou une infinité.`,
      why: { 0: String.raw`Le déterminant est $ad-bc$, avec un signe moins : pour $a=b=c=d=1$, $ad+bc=2\neq0$ alors que les deux équations ont le même membre de gauche (droites parallèles).`, 1: String.raw`Le déterminant croise les coefficients : $a$ (en haut à gauche) avec $d$ (en bas à droite), $b$ avec $c$.`, 3: String.raw`Le second membre n'intervient pas dans l'unicité : même avec $e=f=0$, la solution $(0,0)$ est unique dès que $ad-bc\neq0$.` },
      rule: String.raw`Système $2\times2$ : solution unique $\Leftrightarrow ad-bc\neq0$`, level: 2 },
    { id: 'm1-q-028', q: String.raw`Que vaut $\sum_{k=1}^{10}k$ ?`, choices: [String.raw`$45$`, String.raw`$50$`, String.raw`$110$`, String.raw`$55$`], answer: 3,
      topic: 'Somme des premiers entiers', sec: 'm1-s-sommes',
      steps: [
        String.raw`Notion : $\sum_{k=1}^{10}k$ se lit « somme des $k$ pour $k$ allant de 1 à 10 », c'est-à-dire $1+2+\dots+10$.`,
        String.raw`Astuce de Gauss : on écrit $S=1+2+\dots+10$ puis $S=10+9+\dots+1$ et on additionne colonne par colonne. Chaque colonne vaut 11 et il y a 10 colonnes : $2S=10\times11=110$.`,
        String.raw`$S=\frac{110}{2}=55$ : c'est la formule $\frac{n(n+1)}{2}$ avec $n=10$.`
      ],
      explain: String.raw`Formule de Gauss : $\sum_{k=1}^{n}k=\frac{n(n+1)}{2}$. On la retrouve en écrivant la somme à l'endroit et à l'envers : chaque paire $1+10$, $2+9$, … vaut 11 et il y a 10 paires, d'où $2S=10\times11$. Donc $S=\frac{10\times11}{2}=55$.`,
      why: { 0: String.raw`$45=1+2+\dots+9$ : un terme oublié. La somme va jusqu'à $k=10$ inclus.`, 1: String.raw`Tu as utilisé $\frac{n\times n}{2}$ au lieu de $\frac{n(n+1)}{2}$.`, 2: String.raw`$110=10\times11$ vaut $2S$ : il faut encore diviser par 2.` },
      rule: String.raw`$\sum_{k=1}^{n}k=\frac{n(n+1)}{2}$`, level: 1 },
    { id: 'm1-q-029', q: String.raw`Que vaut $\sum_{k=0}^{n}2^k$ ?`, choices: [String.raw`$2^n-1$`, String.raw`$2^{n+1}-1$`, String.raw`$2^{n+1}$`, String.raw`$\frac{1-2^n}{1-2}$`], answer: 1,
      topic: 'Somme géométrique', sec: 'm1-s-sommes',
      steps: [
        String.raw`Notion : une somme géométrique additionne les puissances successives d'un même nombre $q$ (la raison) : $1+q+q^2+\dots+q^n=\frac{1-q^{n+1}}{1-q}$ pour $q\neq1$. L'exposant $n+1$ est le nombre de termes.`,
        String.raw`Ici $q=2$ et $k$ va de 0 à $n$ : il y a $n+1$ termes.`,
        String.raw`$\sum_{k=0}^{n}2^k=\frac{1-2^{n+1}}{1-2}=\frac{1-2^{n+1}}{-1}=2^{n+1}-1$.`,
        String.raw`Test $n=2$ : $1+2+4=7$ et $2^3-1=7$ ✔.`
      ],
      explain: String.raw`C'est une somme géométrique de raison $q=2$ et de premier terme 1, avec $n+1$ termes ($k$ va de 0 à $n$). Formule : $\sum_{k=0}^nq^k=\frac{1-q^{n+1}}{1-q}=\frac{1-2^{n+1}}{-1}=2^{n+1}-1$. Contrôle pour $n=2$ : $1+2+4=7=2^3-1$.`,
      why: { 0: String.raw`De $k=0$ à $n$ il y a $n+1$ termes : l'exposant est $n+1$. Pour $n=2$, $2^2-1=3\neq7$.`, 2: String.raw`Pour $n=0$, la somme vaut $2^0=1$, pas $2$ : il manque le $-1$.`, 3: String.raw`$\frac{1-2^n}{1-2}=2^n-1$ ne compte que $n$ termes : l'exposant doit être le nombre de termes, $n+1$.` },
      rule: String.raw`$\sum_{k=0}^{n}q^k=\frac{1-q^{n+1}}{1-q}$ pour $q\neq1$`, level: 2 },
    { id: 'm1-q-030', q: String.raw`Combien de termes contient $\sum_{k=3}^{n}u_k$ (avec $n\geq3$) ?`, choices: [String.raw`$n-3$`, String.raw`$n-2$`, String.raw`$n$`], answer: 1,
      topic: 'Nombre de termes d\'une somme', sec: 'm1-s-sommes',
      steps: [
        String.raw`Notion : dans $\sum_{k=p}^{n}u_k$, l'indice $k$ prend toutes les valeurs entières de $p$ à $n$, bornes incluses ; il y a un terme par valeur de $k$.`,
        String.raw`De 1 à $n$ il y a $n$ entiers ; de $p$ à $n$, on retire les $p-1$ premiers : $n-(p-1)=n-p+1$ entiers.`,
        String.raw`Avec $p=3$ : $n-3+1=n-2$. Test $n=5$ : $u_3,u_4,u_5$, soit 3 termes ✔.`
      ],
      explain: String.raw`De $k=p$ à $k=n$ (bornes incluses), il y a $n-p+1$ termes : le $+1$ compte le premier terme. Ici $p=3$, donc $n-3+1=n-2$ termes. Contrôle avec $n=5$ : $u_3,u_4,u_5$, soit $3=5-2$ termes.`,
      why: { 0: String.raw`$n-3$ oublie le premier terme (comme les piquets et les intervalles d'une clôture) : pour $n=5$, cela donnerait 2 termes au lieu de 3.`, 2: String.raw`$n$ termes, c'est pour $k$ allant de 1 à $n$ ; ici on commence à 3, les termes $k=1$ et $k=2$ sont absents.` },
      rule: String.raw`Nombre de termes de $\sum_{k=p}^{n}$ : $n-p+1$`, level: 2 },
    { id: 'm1-q-031', q: String.raw`Pour $a, b\gt 0$, $\ln(ab)$ est égal à :`, choices: [String.raw`$\ln a\times\ln b$`, String.raw`$\ln a+\ln b$`, String.raw`$a\ln b$`], answer: 1,
      topic: 'Propriétés du logarithme', sec: 'm1-s-explog',
      steps: [
        String.raw`Notion : $\ln$ (logarithme népérien) est la fonction réciproque de $\exp$, définie sur $]0,+\infty[$. Elle transforme les produits en sommes, comme $\exp$ transforme les sommes en produits ($\mathrm e^{x+y}=\mathrm e^x\mathrm e^y$).`,
        String.raw`Pour $a,b\gt0$ : $\ln(ab)=\ln a+\ln b$.`,
        String.raw`Test avec $a=b=\mathrm e$ : $\ln(\mathrm e^2)=2$ et $\ln\mathrm e+\ln\mathrm e=1+1=2$ ✔, alors que $\ln\mathrm e\times\ln\mathrm e=1$.`
      ],
      explain: String.raw`La propriété fondamentale du logarithme est de transformer les produits en sommes : $\ln(ab)=\ln a+\ln b$ pour $a,b\gt0$. C'est la traduction de $\mathrm e^{x+y}=\mathrm e^x\mathrm e^y$. Contrôle : $\ln(\mathrm e\times\mathrm e)=\ln(\mathrm e^2)=2=1+1$.`,
      why: { 0: String.raw`Avec $a=b=\mathrm e$ : $\ln(\mathrm e^2)=2$ mais $\ln\mathrm e\times\ln\mathrm e=1$. Le logarithme d'un produit n'est pas le produit des logarithmes.`, 2: String.raw`Confusion avec $\ln(b^a)=a\ln b$, qui concerne une puissance et non un produit $ab$.` },
      rule: String.raw`$\ln(ab)=\ln a+\ln b$, $\ln\frac ab=\ln a-\ln b$, $\ln(a^n)=n\ln a$`, level: 1 },
    { id: 'm1-q-032', q: String.raw`Que vaut $\ln(\mathrm{e}^3)-\ln\left(\sqrt{\mathrm{e}}\right)$ ?`, choices: [String.raw`$\frac52$`, String.raw`$\frac72$`, String.raw`$6$`, String.raw`$\frac32$`], answer: 0,
      topic: 'Logarithme et exponentielle', sec: 'm1-s-explog',
      steps: [
        String.raw`Notion : $\ln$ et $\exp$ sont réciproques, donc $\ln(\mathrm e^x)=x$ pour tout réel $x$. Une racine carrée est une puissance $\frac12$ : $\sqrt y=y^{1/2}$.`,
        String.raw`$\ln(\mathrm e^3)=3$.`,
        String.raw`$\sqrt{\mathrm e}=\mathrm e^{1/2}$, donc $\ln\sqrt{\mathrm e}=\frac12$.`,
        String.raw`Différence : $3-\frac12=\frac62-\frac12=\frac52$.`
      ],
      explain: String.raw`$\ln$ et $\exp$ sont réciproques : $\ln(\mathrm e^x)=x$, donc $\ln(\mathrm e^3)=3$. On écrit la racine comme une puissance : $\sqrt{\mathrm e}=\mathrm e^{1/2}$, d'où $\ln\sqrt{\mathrm e}=\frac12$. Résultat : $3-\frac12=\frac52$ (ou directement $\ln\frac{\mathrm e^3}{\mathrm e^{1/2}}=\ln\mathrm e^{5/2}=\frac52$).`,
      why: { 1: String.raw`On soustrait $\ln\sqrt{\mathrm e}=\frac12$ : $3-\frac12=\frac52$, pas $3+\frac12$.`, 2: String.raw`$\ln a-\ln b=\ln\frac ab$, ce n'est pas $\frac{\ln a}{\ln b}$ : tu as calculé $\frac{3}{1/2}=6$.`, 3: String.raw`$\frac32=3\times\frac12$ : tu as multiplié au lieu de soustraire.` },
      rule: String.raw`$\ln(\mathrm e^x)=x$, $\sqrt{a}=a^{1/2}$, $\ln a-\ln b=\ln\frac ab$`, level: 2 },
    { id: 'm1-q-033', q: String.raw`$(\mathrm{e}^{x})^2$ est égal à :`, choices: [String.raw`$\mathrm{e}^{x^2}$`, String.raw`$\mathrm{e}^{2x}$`, String.raw`$2\mathrm{e}^{x}$`], answer: 1,
      topic: 'Puissances de l\'exponentielle', sec: 'm1-s-explog',
      steps: [
        String.raw`Notion : élever au carré, c'est multiplier un nombre par lui-même. Pour l'exponentielle, $\mathrm e^a\times\mathrm e^b=\mathrm e^{a+b}$.`,
        String.raw`$(\mathrm e^x)^2=\mathrm e^x\times\mathrm e^x=\mathrm e^{x+x}=\mathrm e^{2x}$.`,
        String.raw`Test en $x=1$ : $(\mathrm e^1)^2=\mathrm e^2$ ✔, alors que $\mathrm e^{1^2}=\mathrm e$ et $2\mathrm e^1=2\mathrm e$.`
      ],
      explain: String.raw`Règle de puissance de puissance : $(\mathrm e^a)^n=\mathrm e^{na}$. Ici $(\mathrm e^x)^2=\mathrm e^x\times\mathrm e^x=\mathrm e^{x+x}=\mathrm e^{2x}$. Contrôle en $x=1$ : $(\mathrm e^1)^2=\mathrm e^2$, alors que $\mathrm e^{1^2}=\mathrm e$ et $2\mathrm e^1=2\mathrm e$ sont différents. À retenir : une puissance de puissance multiplie les exposants, un produit de puissances les additionne.`,
      why: { 0: String.raw`$\mathrm e^{x^2}$ élève l'exposant au carré ; or élever $\mathrm e^x$ au carré multiplie l'exposant par 2. En $x=1$ : $\mathrm e^2\neq\mathrm e^{1}$.`, 2: String.raw`Élever au carré n'est pas multiplier par 2 : $(\mathrm e^x)^2=\mathrm e^x\times\mathrm e^x$, et non $\mathrm e^x+\mathrm e^x=2\mathrm e^x$.` },
      rule: String.raw`$(\mathrm e^{a})^n=\mathrm e^{na}$ et $\mathrm e^a\mathrm e^b=\mathrm e^{a+b}$`, level: 1 },
    { id: 'm1-q-034', q: String.raw`$\ln x\lt 0$ équivaut à :`, choices: [String.raw`$x\lt 0$`, String.raw`$0\lt x\lt 1$`, String.raw`$x\lt 1$`, String.raw`$0\lt x\lt \mathrm{e}$`], answer: 1,
      topic: 'Inéquation avec ln', sec: 'm1-s-explog',
      steps: [
        String.raw`Notion : $\ln$ n'est définie que pour $x\gt0$, vaut 0 en $x=1$ ($\ln1=0$) et est strictement croissante : elle conserve l'ordre.`,
        String.raw`On écrit $0=\ln1$ : $\ln x\lt0\Leftrightarrow\ln x\lt\ln1$.`,
        String.raw`Par stricte croissance : $\ln x\lt\ln1\Leftrightarrow x\lt1$.`,
        String.raw`Avec le domaine $x\gt0$ : $0\lt x\lt1$.`
      ],
      explain: String.raw`D'abord le domaine : $\ln x$ n'existe que pour $x\gt0$. Ensuite $0=\ln1$ et $\ln$ est strictement croissante, donc $\ln x\lt\ln1\Leftrightarrow x\lt1$. En combinant avec le domaine, on obtient $0\lt x\lt1$.`,
      why: { 0: String.raw`$\ln x$ n'est pas définie pour $x\leq0$ : aucun négatif ne peut être solution.`, 2: String.raw`Il manque la condition de domaine $x\gt0$ : $x=-1$ vérifie $x\lt1$ mais $\ln(-1)$ n'existe pas.`, 3: String.raw`$0\lt x\lt\mathrm e$ correspond à $\ln x\lt1=\ln\mathrm e$ ; ici on compare à $0=\ln1$.` },
      rule: String.raw`Pour $a\gt0$ : $\ln x\lt\ln a\Leftrightarrow0\lt x\lt a$ ($\ln$ croissante sur $]0,+\infty[$)`, level: 2 },
    { id: 'm1-q-035', q: String.raw`Pour quelles valeurs de $m$ l'équation $x^2+mx+1=0$ a-t-elle une racine double ?`, choices: [String.raw`$m=2$ seulement`, String.raw`$m=2$ ou $m=-2$`, String.raw`$m=4$ ou $m=-4$`, String.raw`$m=4$ seulement`], answer: 1,
      topic: 'Discriminant avec paramètre', sec: 'm1-s-trinome',
      steps: [
        String.raw`Notion : une équation $ax^2+bx+c=0$ a une racine double (une seule racine, « comptée deux fois ») exactement quand $\Delta=b^2-4ac=0$.`,
        String.raw`Ici $a=1$, $b=m$, $c=1$ : $\Delta=m^2-4\times1\times1=m^2-4$.`,
        String.raw`$m^2-4=0\Leftrightarrow m^2=4\Leftrightarrow m=2$ ou $m=-2$ (un nombre positif a deux racines carrées opposées).`,
        String.raw`Vérification : $m=2$ donne $x^2+2x+1=(x+1)^2$ ; $m=-2$ donne $x^2-2x+1=(x-1)^2$ ✔.`
      ],
      explain: String.raw`Une équation du second degré a une racine double si et seulement si son discriminant est nul. Ici $\Delta=m^2-4\times1\times1=m^2-4$, et $m^2-4=0\Leftrightarrow m^2=4\Leftrightarrow m=2$ ou $m=-2$. Contrôle : $m=2$ donne $(x+1)^2$ (racine double $-1$) et $m=-2$ donne $(x-1)^2$ (racine double 1).`,
      why: { 0: String.raw`$m^2=4$ a deux solutions : $m=-2$ convient aussi, puisque $x^2-2x+1=(x-1)^2$.`, 2: String.raw`$\Delta=m^2-4$ s'annule pour $m^2=4$, pas pour $m^2=16$ : tu as sans doute résolu $m=\pm4$ au lieu de $m^2=4$.`, 3: String.raw`Double erreur : $m^2=4$ donne $m=\pm2$ (et non 4), et il y a deux valeurs.` },
      rule: String.raw`Racine double $\Leftrightarrow\Delta=0$ ; et $m^2=4\Leftrightarrow m=\pm2$`, level: 3 }
  ],

  /* ============================== EXERCICES ============================== */
  exercises: [
    { id: 'm1-x-001', prompt: String.raw`Calcule la valeur exacte de $\frac{1}{3}+\frac{1}{4}$ (fraction irréductible).`,
      answer: '7/12', vars: [], check: 'value',
      topic: 'Addition de fractions', sec: 'm1-s-regles',
      steps: [
        String.raw`Notion : on n'additionne que des fractions de même dénominateur, $\frac ab+\frac cb=\frac{a+c}{b}$. Il faut donc d'abord un dénominateur commun ; le plus petit multiple commun de 3 et 4 est $12$.`,
        String.raw`On convertit chaque fraction en multipliant numérateur ET dénominateur par le même nombre : $\frac13=\frac{1\times4}{3\times4}=\frac{4}{12}$ et $\frac14=\frac{1\times3}{4\times3}=\frac{3}{12}$.`,
        String.raw`On additionne les numérateurs : $\frac{4}{12}+\frac{3}{12}=\frac{4+3}{12}=\frac{7}{12}$.`,
        String.raw`Résultat : $\frac{7}{12}$, irréductible car 7 est premier et ne divise pas 12. Vérification : $0{,}333+0{,}25=0{,}583$ et $\frac7{12}\approx0{,}583$ ✔.`
      ],
      rule: String.raw`$\frac ab+\frac cd=\frac{ad+bc}{bd}$ : dénominateur commun d'abord, puis somme des numérateurs.`,
      pitfall: String.raw`Additionner numérateurs et dénominateurs entre eux : $\frac13+\frac14\neq\frac27$.`,
      mistakes: [
        { expr: '2/7', msg: String.raw`Tu as additionné les numérateurs entre eux et les dénominateurs entre eux. C'est faux : $\frac27\approx0{,}29$ est même plus petit que $\frac13$ seul ! Mets d'abord au dénominateur commun 12.` },
        { expr: '1/12', msg: String.raw`Tu as multiplié les fractions ($\frac13\times\frac14=\frac1{12}$) au lieu de les additionner. Pour une somme : $\frac4{12}+\frac3{12}$.` },
        { expr: '1/6', msg: String.raw`$\frac{2}{12}=\frac16$ : tu as pris le dénominateur 12 sans multiplier les numérateurs. $\frac13=\frac{4}{12}$ car on multiplie le haut ET le bas par 4.` }
      ],
      hint: String.raw`Dénominateur commun : 12.`,
      explain: String.raw`Au dénominateur commun 12 : $\frac13+\frac14=\frac4{12}+\frac3{12}=\frac7{12}$.`, level: 1 },
    { id: 'm1-x-002', prompt: String.raw`Simplifie $\frac{x^5\,x^{-2}}{x^4}$ pour $x\neq 0$ (écris le résultat comme une puissance de $x$).`,
      answer: 'x^(-1)', vars: ['x'], check: 'expr', domain: [0.4, 3],
      topic: 'Règles sur les puissances', sec: 'm1-s-regles',
      steps: [
        String.raw`Notion : $x^n$ est le produit de $n$ facteurs $x$, et $x^{-n}=\frac{1}{x^n}$. Pour une même base, on travaille uniquement sur les exposants : $x^mx^n=x^{m+n}$ et $\frac{x^m}{x^n}=x^{m-n}$.`,
        String.raw`Produit au numérateur : $x^5\,x^{-2}=x^{5+(-2)}=x^{3}$ (on additionne les exposants).`,
        String.raw`Quotient : $\dfrac{x^3}{x^4}=x^{3-4}=x^{-1}$ (on soustrait l'exposant du dénominateur).`,
        String.raw`Résultat : $x^{-1}=\dfrac1x$. Vérification avec $x=2$ : $\frac{2^5\times2^{-2}}{2^4}=\frac{32\times0{,}25}{16}=\frac{8}{16}=\frac12$ ✔.`
      ],
      rule: String.raw`$a^ma^n=a^{m+n}$, $\frac{a^m}{a^n}=a^{m-n}$, $a^{-n}=\frac1{a^n}$`,
      pitfall: String.raw`Multiplier les exposants dans un produit : $x^5x^{-2}\neq x^{-10}$ (on ne multiplie que pour $(a^m)^n$).`,
      mistakes: [
        { expr: 'x^3', msg: String.raw`Soit tu as compté $x^{-2}$ comme $+2$ ($5+2-4=3$), soit tu as oublié de diviser par $x^4$. Le bilan correct des exposants est $5+(-2)-4=-1$.` },
        { expr: 'x^(-14)', msg: String.raw`Tu as multiplié les exposants du produit ($5\times(-2)=-10$) puis retranché 4. Pour un produit de même base, on additionne : $x^5x^{-2}=x^{3}$.` },
        { expr: 'x', msg: String.raw`Erreur de signe dans le bilan : $3-4=-1$, pas $+1$. Le dénominateur $x^4$ contient plus de facteurs $x$ que le numérateur $x^3$, il reste donc $\frac1x$.` }
      ],
      hint: String.raw`$a^ma^n=a^{m+n}$ et $\frac{a^m}{a^n}=a^{m-n}$.`,
      explain: String.raw`Bilan des exposants : $5+(-2)-4=-1$, donc l'expression vaut $x^{-1}=\frac1x$.`, level: 1 },
    { id: 'm1-x-003', prompt: String.raw`Écris $\sqrt{50}+\sqrt{18}-\sqrt{8}$ sous la forme $a\sqrt2$ (donne la valeur exacte).`,
      answer: '6*sqrt(2)', vars: [], check: 'value',
      topic: 'Simplifier des racines', sec: 'm1-s-regles',
      steps: [
        String.raw`Notion : pour $a,b\geq0$, $\sqrt{ab}=\sqrt a\sqrt b$, donc $\sqrt{k^2m}=k\sqrt m$. On ne peut additionner que des racines identiques, comme des termes semblables : $5\sqrt2+3\sqrt2=8\sqrt2$.`,
        String.raw`On décompose chaque nombre en « carré parfait × 2 » : $50=25\times2$, $18=9\times2$, $8=4\times2$.`,
        String.raw`D'où $\sqrt{50}=\sqrt{25}\sqrt2=5\sqrt2$, $\sqrt{18}=3\sqrt2$ et $\sqrt8=2\sqrt2$.`,
        String.raw`On factorise par $\sqrt2$ : $5\sqrt2+3\sqrt2-2\sqrt2=(5+3-2)\sqrt2=6\sqrt2$. Vérification : $7{,}071+4{,}243-2{,}828\approx8{,}485$ et $6\sqrt2\approx8{,}485$ ✔.`
      ],
      rule: String.raw`$\sqrt{k^2m}=k\sqrt m$ et $a\sqrt m+b\sqrt m=(a+b)\sqrt m$`,
      pitfall: String.raw`Regrouper sous une seule racine : $\sqrt{50}+\sqrt{18}-\sqrt8\neq\sqrt{50+18-8}$.`,
      mistakes: [
        { expr: 'sqrt(60)', msg: String.raw`Tu as calculé $\sqrt{50+18-8}=\sqrt{60}$, mais $\sqrt a+\sqrt b\neq\sqrt{a+b}$ (exemple : $\sqrt9+\sqrt{16}=7$ alors que $\sqrt{25}=5$). Simplifie chaque racine séparément.` },
        { expr: '10*sqrt(2)', msg: String.raw`Tu as ajouté $\sqrt8=2\sqrt2$ au lieu de le soustraire : $5+3-2=6$, pas $5+3+2=10$.` },
        { expr: '8*sqrt(2)', msg: String.raw`$5\sqrt2+3\sqrt2=8\sqrt2$, mais il reste à retrancher $\sqrt8=2\sqrt2$.` }
      ],
      hint: String.raw`$50=25\times2$, $18=9\times2$, $8=4\times2$.`,
      explain: String.raw`Chaque racine est un multiple de $\sqrt2$ : $5\sqrt2+3\sqrt2-2\sqrt2=6\sqrt2$.`, level: 1 },
    { id: 'm1-x-004', prompt: String.raw`Donne la valeur exacte de $\frac{1}{\sqrt3-1}$ sans racine au dénominateur.`,
      answer: '(sqrt(3)+1)/2', vars: [], check: 'value',
      topic: 'Quantité conjuguée', sec: 'm1-s-regles',
      steps: [
        String.raw`Notion : la quantité conjuguée de $\sqrt a-b$ est $\sqrt a+b$. Leur produit ne contient plus de racine : $(\sqrt a-b)(\sqrt a+b)=(\sqrt a)^2-b^2=a-b^2$ (identité $(u-v)(u+v)=u^2-v^2$).`,
        String.raw`On multiplie numérateur et dénominateur par $\sqrt3+1$ (on multiplie par $1$, la valeur ne change pas) : $\dfrac{1}{\sqrt3-1}=\dfrac{\sqrt3+1}{(\sqrt3-1)(\sqrt3+1)}$.`,
        String.raw`Dénominateur : $(\sqrt3)^2-1^2=3-1=2$.`,
        String.raw`Résultat : $\dfrac{\sqrt3+1}{2}$. Vérification : $\frac{1}{1{,}732-1}=\frac1{0{,}732}\approx1{,}366$ et $\frac{2{,}732}{2}=1{,}366$ ✔.`
      ],
      rule: String.raw`$\dfrac{1}{\sqrt a-b}=\dfrac{\sqrt a+b}{a-b^2}$ : on multiplie par le conjugué.`,
      pitfall: String.raw`Multiplier seulement le dénominateur, ou écrire $(\sqrt3)^2=9$.`,
      mistakes: [
        { expr: 'sqrt(3)+1', msg: String.raw`Le dénominateur devient $(\sqrt3)^2-1^2=3-1=2$ et non 1 : il faut encore diviser par 2.` },
        { expr: '(sqrt(3)+1)/4', msg: String.raw`$(\sqrt3-1)(\sqrt3+1)=3-1=2$ : c'est une différence de carrés, pas $3+1$.` },
        { expr: '(sqrt(3)-1)/2', msg: String.raw`On multiplie par le conjugué $\sqrt3+1$ : c'est lui qui apparaît au numérateur, pas $\sqrt3-1$.` }
      ],
      hint: String.raw`Multiplie en haut et en bas par le conjugué $\sqrt3+1$.`,
      explain: String.raw`Avec le conjugué : $\frac{1}{\sqrt3-1}=\frac{\sqrt3+1}{(\sqrt3)^2-1}=\frac{\sqrt3+1}{2}$.`, level: 2 },
    { id: 'm1-x-005', prompt: String.raw`Simplifie $\sqrt{(x-1)^2}$ pour $x$ réel quelconque.`,
      answer: 'abs(x-1)', vars: ['x'], check: 'expr',
      topic: 'Racine d\'un carré', sec: 'm1-s-abs',
      steps: [
        String.raw`Notion : $\sqrt Y$ est le nombre positif dont le carré vaut $Y$. Pour tout réel $X$, le nombre positif de carré $X^2$ est $|X|$ : donc $\sqrt{X^2}=|X|$ (et non $X$).`,
        String.raw`On applique avec $X=x-1$ : $\sqrt{(x-1)^2}=|x-1|$, valable pour tout réel $x$.`,
        String.raw`Pour enlever la valeur absolue, on distingue deux cas : si $x\geq1$, $x-1\geq0$ et $|x-1|=x-1$ ; si $x\lt1$, $|x-1|=-(x-1)=1-x$.`,
        String.raw`Vérification avec $x=-2$ : $\sqrt{(-3)^2}=\sqrt9=3$ et $|-2-1|=3$ ✔, alors que $x-1=-3$ serait négatif.`
      ],
      rule: String.raw`$\sqrt{X^2}=|X|$ pour tout réel $X$`,
      pitfall: String.raw`« Simplifier » racine et carré en $x-1$ : faux dès que $x\lt1$, car une racine n'est jamais négative.`,
      mistakes: [
        { expr: 'x-1', msg: String.raw`Faux pour $x\lt1$ : par exemple en $x=0$, $\sqrt{(-1)^2}=1$ alors que $x-1=-1$. Une racine carrée est positive : $\sqrt{X^2}=|X|$.` },
        { expr: 'abs(x)-1', msg: String.raw`La valeur absolue porte sur tout $x-1$ : $|x-1|\neq|x|-1$ (en $x=0$ : $1$ contre $-1$).` },
        { expr: '1-x', msg: String.raw`Vrai seulement pour $x\leq1$ : en $x=3$, $\sqrt{2^2}=2$ alors que $1-x=-2$. La réponse valable pour tout $x$ est $|x-1|$.` }
      ],
      hint: String.raw`$\sqrt{X^2}=|X|$.`,
      explain: String.raw`$\sqrt{X^2}=|X|$ avec $X=x-1$, donc $\sqrt{(x-1)^2}=|x-1|$.`, level: 2 },
    { id: 'm1-x-006', prompt: String.raw`Résous dans $\mathbb{R}$ : $|2x-3|=5$.`,
      answer: '4;-1', vars: [], check: 'set',
      topic: 'Équation avec valeur absolue', sec: 'm1-s-abs',
      steps: [
        String.raw`Notion : $|X|$ est la distance de $X$ à 0. Pour $k\gt0$, $|X|=k$ signifie que $X$ est à distance $k$ de 0, donc $X=k$ ou $X=-k$ : il y a deux cas.`,
        String.raw`Cas 1 : $2x-3=5\Leftrightarrow2x=8$ (on ajoute 3) $\Leftrightarrow x=4$ (on divise par 2).`,
        String.raw`Cas 2 : $2x-3=-5\Leftrightarrow2x=-2\Leftrightarrow x=-1$.`,
        String.raw`Vérification : $|2\times4-3|=|5|=5$ ✔ et $|2\times(-1)-3|=|-5|=5$ ✔. Donc $S=\{-1\,;\,4\}$.`
      ],
      rule: String.raw`Pour $k\gt0$ : $|X|=k\Leftrightarrow X=k$ ou $X=-k$`,
      pitfall: String.raw`Oublier le cas $X=-5$ et ne trouver qu'une solution.`,
      mistakes: [
        { expr: '4', msg: String.raw`Il manque une solution : $|X|=5$ donne deux cas, $2x-3=5$ ET $2x-3=-5$.` },
        { expr: '4;1', msg: String.raw`Erreur dans le second cas : $2x-3=-5\Leftrightarrow2x=-2\Leftrightarrow x=-1$ (et non $+1$).` },
        { expr: '4;-4', msg: String.raw`Ce n'est pas $x$ qui vaut $\pm4$, c'est $2x-3$ qui vaut $\pm5$. Le second cas $2x-3=-5$ donne $x=-1$ (vérifie : $|2\times(-4)-3|=11\neq5$).` }
      ],
      hint: String.raw`$|X|=5\Leftrightarrow X=5$ ou $X=-5$.`,
      explain: String.raw`Deux cas : $2x-3=5$ ou $2x-3=-5$, d'où $x=4$ ou $x=-1$.`, level: 1 },
    { id: 'm1-x-007', prompt: String.raw`L'ensemble des solutions de $|x+1|\leq 3$ est un intervalle $[a,b]$. Donne $a;b$.`,
      answer: '-4;2', vars: [], check: 'tuple',
      topic: 'Inéquation avec valeur absolue', sec: 'm1-s-abs',
      steps: [
        String.raw`Notion : $|X|\leq3$ signifie « $X$ est à distance au plus 3 de 0 », c'est-à-dire $-3\leq X\leq3$. Plus généralement, $|x-a|$ est la distance de $x$ à $a$.`,
        String.raw`Avec $X=x+1$ : $-3\leq x+1\leq3$.`,
        String.raw`On soustrait 1 aux trois membres (soustraire conserve les inégalités) : $-3-1\leq x\leq3-1$, soit $-4\leq x\leq2$.`,
        String.raw`$|x+1|=|x-(-1)|$ est la distance à $-1$ : $S=[-4,2]$, de centre $-1$ et de rayon 3. Vérification : $|-4+1|=3$ ✔ et $|2+1|=3$ ✔.`
      ],
      rule: String.raw`$|x-a|\leq r\Leftrightarrow a-r\leq x\leq a+r$`,
      pitfall: String.raw`Prendre le centre $+1$ au lieu de $-1$ : $|x+1|$ est la distance à $-1$.`,
      mistakes: [
        { expr: '-2;4', msg: String.raw`Tu as centré l'intervalle en $+1$. Or $|x+1|=|x-(-1)|$ est la distance de $x$ à $-1$ : l'intervalle est centré en $-1$.` },
        { expr: '-3;3', msg: String.raw`$[-3,3]$ est l'encadrement de $x+1$, pas de $x$ : il reste à soustraire 1 à chaque borne.` },
        { expr: '2;-4', msg: String.raw`Les bonnes valeurs mais dans le mauvais ordre : on demande $a$ puis $b$, avec $a\lt b$ (borne gauche d'abord).` }
      ],
      hint: String.raw`$|X|\leq3\Leftrightarrow-3\leq X\leq3$.`,
      explain: String.raw`$-3\leq x+1\leq3\Leftrightarrow-4\leq x\leq2$, donc $S=[-4,2]$.`, level: 2 },
    { id: 'm1-x-008', prompt: String.raw`Développe et réduis $(2x-3)^2$.`,
      answer: '4*x^2-12*x+9', vars: ['x'], check: 'expr', form: 'expanded',
      topic: 'Identités remarquables', sec: 'm1-s-identites',
      steps: [
        String.raw`Notion : $(a-b)^2=(a-b)(a-b)=a^2-2ab+b^2$ : carré du premier, moins le double produit, plus carré du second.`,
        String.raw`On identifie $a=2x$ et $b=3$. Premier carré : $a^2=(2x)^2=2^2\times x^2=4x^2$ (le coefficient 2 est aussi élevé au carré).`,
        String.raw`Double produit : $2ab=2\times2x\times3=12x$, précédé d'un signe moins. Dernier carré : $b^2=3^2=9$.`,
        String.raw`Résultat : $4x^2-12x+9$. Vérification en $x=1$ : $(2-3)^2=1$ et $4-12+9=1$ ✔.`
      ],
      rule: String.raw`$(a-b)^2=a^2-2ab+b^2$`,
      pitfall: String.raw`Oublier le double produit : $(a-b)^2\neq a^2-b^2$.`,
      mistakes: [
        { expr: '4*x^2-9', msg: String.raw`Tu as oublié le double produit $-2\times2x\times3=-12x$ : $(a-b)^2\neq a^2-b^2$.` },
        { expr: '4*x^2-6*x+9', msg: String.raw`Le double produit vaut $2\times(2x)\times3=12x$ : tu as oublié le facteur 2 de « double ».` },
        { expr: '2*x^2-12*x+9', msg: String.raw`$(2x)^2=2^2x^2=4x^2$ : le coefficient aussi est élevé au carré.` }
      ],
      hint: String.raw`$(a-b)^2=a^2-2ab+b^2$ avec $a=2x$, $b=3$.`,
      explain: String.raw`$(2x-3)^2=(2x)^2-2\times2x\times3+3^2=4x^2-12x+9$.`, level: 1 },
    { id: 'm1-x-009', prompt: String.raw`Développe et réduis $(x+2)^3$.`,
      answer: 'x^3+6*x^2+12*x+8', vars: ['x'], check: 'expr', form: 'expanded',
      topic: 'Cube d\'une somme', sec: 'm1-s-identites',
      steps: [
        String.raw`Notion : $(a+b)^3=a^3+3a^2b+3ab^2+b^3$ (coefficients $1,3,3,1$ du triangle de Pascal ; la puissance de $a$ descend pendant que celle de $b$ monte).`,
        String.raw`Avec $a=x$ et $b=2$ : $a^3=x^3$ et $3a^2b=3\times x^2\times2=6x^2$.`,
        String.raw`$3ab^2=3\times x\times2^2=3\times x\times4=12x$ et $b^3=2^3=8$.`,
        String.raw`Résultat : $x^3+6x^2+12x+8$. Vérification en $x=1$ : $3^3=27$ et $1+6+12+8=27$ ✔.`
      ],
      rule: String.raw`$(a+b)^3=a^3+3a^2b+3ab^2+b^3$`,
      pitfall: String.raw`Écrire $(a+b)^3=a^3+b^3$, ou oublier les puissances de $b$ dans les termes croisés.`,
      mistakes: [
        { expr: 'x^3+8', msg: String.raw`$(a+b)^3\neq a^3+b^3$ : il manque les termes croisés $3a^2b+3ab^2$ (en $x=1$ : $9\neq27$).` },
        { expr: 'x^3+3*x^2+3*x+8', msg: String.raw`Les coefficients 1, 3, 3, 1 multiplient $a^{3-k}b^k$ : il faut inclure les puissances de 2, $3x^2\times2=6x^2$ et $3x\times2^2=12x$.` },
        { expr: 'x^3+6*x^2+6*x+8', msg: String.raw`$3ab^2=3\times x\times2^2=12x$ : tu as oublié d'élever le 2 au carré.` }
      ],
      hint: String.raw`$(a+b)^3=a^3+3a^2b+3ab^2+b^3$.`,
      explain: String.raw`$(x+2)^3=x^3+3x^2\cdot2+3x\cdot2^2+2^3=x^3+6x^2+12x+8$.`, level: 2 },
    { id: 'm1-x-010', prompt: String.raw`Développe $(a+b)^4$ (variables $a$ et $b$).`,
      answer: 'a^4+4*a^3*b+6*a^2*b^2+4*a*b^3+b^4', vars: ['a', 'b'], check: 'expr', form: 'expanded',
      topic: 'Binôme de Newton', sec: 'm1-s-identites',
      steps: [
        String.raw`Notion : formule du binôme, $(a+b)^n=\sum_{k=0}^{n}\binom nk a^{n-k}b^k$. Les coefficients $\binom nk$ se lisent sur la ligne $n$ du triangle de Pascal, et les exposants de $a$ et $b$ ont toujours pour somme $n$.`,
        String.raw`Ligne 4 du triangle, obtenue depuis la ligne 3 ($1\,3\,3\,1$) en additionnant les voisins : $1,\ 1+3=4,\ 3+3=6,\ 3+1=4,\ 1$.`,
        String.raw`La puissance de $a$ descend de 4 à 0 pendant que celle de $b$ monte de 0 à 4 : $a^4+4a^3b+6a^2b^2+4ab^3+b^4$.`,
        String.raw`Vérification avec $a=b=1$ : $2^4=16$ et $1+4+6+4+1=16$ ✔.`
      ],
      rule: String.raw`$(a+b)^n=\sum_{k=0}^{n}\binom nk a^{n-k}b^k$`,
      pitfall: String.raw`Se tromper sur le coefficient central : c'est $\binom42=6$, pas 4.`,
      mistakes: [
        { expr: 'a^4+b^4', msg: String.raw`Il manque tous les termes croisés : $(a+b)^4\neq a^4+b^4$ (avec $a=b=1$ : $16\neq2$). Utilise le binôme de Newton.` },
        { expr: 'a^4+4*a^3*b+4*a^2*b^2+4*a*b^3+b^4', msg: String.raw`Ligne 4 du triangle de Pascal : $1,4,6,4,1$. Le coefficient central est $\binom42=\frac{4\times3}{2}=6$.` },
        { expr: 'a^4+4*a^3*b+6*a^2*b^2+4*a*b^3', msg: String.raw`Il manque le dernier terme $b^4$ ($k=4$) : le développement de $(a+b)^4$ compte $4+1=5$ termes.` }
      ],
      hint: String.raw`Ligne 4 du triangle de Pascal : 1, 4, 6, 4, 1.`,
      explain: String.raw`Coefficients $1,4,6,4,1$ : $(a+b)^4=a^4+4a^3b+6a^2b^2+4ab^3+b^4$.`, level: 2 },
    { id: 'm1-x-011', prompt: String.raw`Quel est le coefficient de $x^3$ dans le développement de $(1+x)^7$ ?`,
      answer: '35', vars: [], check: 'value',
      topic: 'Coefficients binomiaux', sec: 'm1-s-identites',
      steps: [
        String.raw`Notion : d'après le binôme, $(1+x)^n=\sum_{k=0}^{n}\binom nk x^k$ (les puissances de 1 valent 1). Le coefficient de $x^k$ est donc $\binom nk=\frac{n!}{k!\,(n-k)!}$, nombre de façons de choisir $k$ objets parmi $n$.`,
        String.raw`Ici $n=7$ et $k=3$ : $\binom73=\dfrac{7!}{3!\,4!}$. On simplifie par $4!$ : $\dfrac{7\times6\times5\times4!}{3!\times4!}=\dfrac{7\times6\times5}{3\times2\times1}$.`,
        String.raw`$\dfrac{210}{6}=35$.`,
        String.raw`Vérification par symétrie : $\binom73=\binom74$ ; la ligne 7 du triangle de Pascal est $1,7,21,35,35,21,7,1$ ✔.`
      ],
      rule: String.raw`Dans $(1+x)^n$, le coefficient de $x^k$ est $\binom nk=\frac{n!}{k!\,(n-k)!}$`,
      pitfall: String.raw`Oublier de diviser par $k!$ (on trouve 210) ou prendre $\binom72$.`,
      mistakes: [
        { expr: '21', msg: String.raw`$\binom72=21$ est le coefficient de $x^2$ ; pour $x^3$ il faut $\binom73$.` },
        { expr: '210', msg: String.raw`$7\times6\times5=210$ compte les choix ordonnés : il faut diviser par $3!=6$, d'où $35$.` },
        { expr: '7', msg: String.raw`$7=\binom71$ est le coefficient de $x$, pas de $x^3$.` }
      ],
      hint: String.raw`Le terme en $x^k$ de $(1+x)^n$ est $\binom nk x^k$.`,
      explain: String.raw`Le coefficient de $x^3$ est $\binom73=\frac{7\times6\times5}{3\times2\times1}=35$.`, level: 2 },
    { id: 'm1-x-012', prompt: String.raw`Quel est le coefficient de $x^2$ dans le développement de $(2x-1)^5$ ?`,
      answer: '-40', vars: [], check: 'value',
      topic: 'Binôme de Newton', sec: 'm1-s-identites',
      steps: [
        String.raw`Notion : binôme de Newton, $(a+b)^n=\sum_{k=0}^{n}\binom nk a^kb^{n-k}$. Ici $a=2x$ et $b=-1$ : le signe moins fait partie de $b$.`,
        String.raw`Terme général : $\binom5k(2x)^k(-1)^{5-k}$. Le terme en $x^2$ correspond à $k=2$.`,
        String.raw`$\binom52=\frac{5\times4}{2}=10$ ; $(2x)^2=4x^2$ (le 2 est aussi au carré) ; $(-1)^{5-2}=(-1)^3=-1$ (puissance impaire).`,
        String.raw`Produit : $10\times4x^2\times(-1)=-40x^2$. Le coefficient est $-40$.`
      ],
      rule: String.raw`Terme général de $(a+b)^n$ : $\binom nk a^kb^{n-k}$ ; avec $b\lt0$, le signe vient de $b^{n-k}$.`,
      pitfall: String.raw`Oublier le signe de $(-1)^3$ ou ne pas élever le 2 de $2x$ au carré.`,
      mistakes: [
        { expr: '40', msg: String.raw`Il manque le signe : le facteur $(-1)^{5-2}=(-1)^3=-1$ rend le terme négatif.` },
        { expr: '-20', msg: String.raw`$(2x)^2=4x^2$ et non $2x^2$ : le coefficient 2 est lui aussi élevé au carré.` },
        { expr: '-80', msg: String.raw`$(2x)^2$ donne $2^2=4$, pas $2^3=8$ : la puissance de $2x$ est $k=2$ ; c'est $-1$ qui est à la puissance 3.` }
      ],
      hint: String.raw`Terme général : $\binom5k(2x)^k(-1)^{5-k}$ ; prends $k=2$.`,
      explain: String.raw`Pour $k=2$ : $\binom52(2x)^2(-1)^3=10\times4x^2\times(-1)=-40x^2$.`, level: 3 },
    { id: 'm1-x-013', prompt: String.raw`Factorise $4x^2-25$.`,
      answer: '(2*x-5)*(2*x+5)', vars: ['x'], check: 'expr', form: 'factored',
      topic: 'Différence de deux carrés', sec: 'm1-s-factoriser',
      steps: [
        String.raw`Notion : factoriser, c'est transformer une somme en produit. Une différence de deux carrés se factorise toujours : $a^2-b^2=(a-b)(a+b)$.`,
        String.raw`On identifie $a$ et $b$ en prenant les racines : $4x^2=(2x)^2$ donc $a=2x$ ; $25=5^2$ donc $b=5$.`,
        String.raw`On applique : $4x^2-25=(2x)^2-5^2=(2x-5)(2x+5)$.`,
        String.raw`Vérification en développant : $(2x-5)(2x+5)=4x^2+10x-10x-25=4x^2-25$ ✔.`
      ],
      rule: String.raw`$a^2-b^2=(a-b)(a+b)$`,
      pitfall: String.raw`Prendre $a=4x$ au lieu de $2x$ : il faut la racine de $4x^2$.`,
      mistakes: [
        { expr: '(2*x-5)^2', msg: String.raw`$(2x-5)^2=4x^2-20x+25$ : c'est un carré, il a un double produit. Ici il n'y a pas de terme en $x$, c'est une différence de carrés $(a-b)(a+b)$.` },
        { expr: '(4*x-5)*(4*x+5)', msg: String.raw`$(4x)^2=16x^2$ : pour obtenir $4x^2$, il faut $a=\sqrt{4x^2}=2x$.` },
        { expr: '(2*x-25)*(2*x+25)', msg: String.raw`$b$ est la racine de 25, soit $b=5$ ; $(2x-25)(2x+25)=4x^2-625$.` }
      ],
      hint: String.raw`$a^2-b^2=(a-b)(a+b)$ avec $a=2x$ et $b=5$.`,
      explain: String.raw`Différence de carrés : $4x^2-25=(2x)^2-5^2=(2x-5)(2x+5)$.`, level: 1 },
    { id: 'm1-x-014', prompt: String.raw`Factorise $x^2-6x+9$.`,
      answer: '(x-3)^2', vars: ['x'], check: 'expr', form: 'factored',
      topic: 'Carré parfait', sec: 'm1-s-factoriser',
      steps: [
        String.raw`Notion : trois termes dont deux sont des carrés ($x^2$ et $9=3^2$) : on pense à l'identité $a^2-2ab+b^2=(a-b)^2$, lue « de droite à gauche ».`,
        String.raw`Avec $a=x$ et $b=3$, le double produit vaut $2ab=2\times x\times3=6x$ ; il est bien présent, avec le signe moins : $-6x$.`,
        String.raw`Donc $x^2-6x+9=x^2-2\times x\times3+3^2=(x-3)^2$.`,
        String.raw`Vérification : $(x-3)^2=x^2-6x+9$ ✔ ; aussi $\Delta=36-36=0$, racine double $3$.`
      ],
      rule: String.raw`$a^2-2ab+b^2=(a-b)^2$ et $a^2+2ab+b^2=(a+b)^2$`,
      pitfall: String.raw`Confondre avec $(x-3)(x+3)=x^2-9$.`,
      mistakes: [
        { expr: '(x+3)^2', msg: String.raw`$(x+3)^2=x^2+6x+9$ : le double produit serait positif. Ici il vaut $-6x$, c'est donc $(a-b)^2$.` },
        { expr: '(x-3)*(x+3)', msg: String.raw`$(x-3)(x+3)=x^2-9$ (différence de carrés) : il n'y a pas de terme en $x$, ce n'est pas notre expression.` },
        { expr: '(x-9)^2', msg: String.raw`$b$ est la racine de 9, soit $b=3$ : $(x-9)^2=x^2-18x+81$.` }
      ],
      hint: String.raw`Reconnais $a^2-2ab+b^2$.`,
      explain: String.raw`$x^2-6x+9=x^2-2\times x\times3+3^2=(x-3)^2$.`, level: 1 },
    { id: 'm1-x-015', prompt: String.raw`Factorise $(x+1)(2x-3)-(x+1)(x+4)$.`,
      answer: '(x+1)*(x-7)', vars: ['x'], check: 'expr', form: 'factored',
      topic: 'Facteur commun', sec: 'm1-s-factoriser',
      steps: [
        String.raw`Notion : factoriser par un facteur commun, c'est utiliser la distributivité à l'envers : $AB-AC=A(B-C)$. Ici le facteur commun est $A=x+1$.`,
        String.raw`On le met en facteur en gardant le reste de chaque terme entre crochets : $(x+1)\big[(2x-3)-(x+4)\big]$.`,
        String.raw`On supprime les parenthèses dans le crochet : le signe moins devant $(x+4)$ change TOUS ses signes, $-(x+4)=-x-4$. Donc $2x-3-x-4=x-7$.`,
        String.raw`Résultat : $(x+1)(x-7)$. Vérification en $x=0$ : $1\times(-3)-1\times4=-7$ et $(0+1)(0-7)=-7$ ✔.`
      ],
      rule: String.raw`$AB-AC=A(B-C)$ et $-(u+v)=-u-v$`,
      pitfall: String.raw`Ne changer que le signe du premier terme de $(x+4)$.`,
      mistakes: [
        { expr: '(x+1)*(3*x+1)', msg: String.raw`Le signe moins s'applique à toute la parenthèse : on soustrait $(x+4)$, on ne l'ajoute pas. $(2x-3)-(x+4)=x-7$.` },
        { expr: '(x+1)*(x+1)', msg: String.raw`Tu n'as changé que le signe de $x$ : $-(x+4)=-x-4$ (et non $-x+4$), donc $-3-4=-7$.` },
        { expr: '(x+1)*(x+7)', msg: String.raw`Erreur sur la constante : $-3-4=-7$, pas $+7$.` }
      ],
      hint: String.raw`Facteur commun $(x+1)$ ; attention au signe moins devant $(x+4)$.`,
      explain: String.raw`Facteur commun : $(x+1)\big[(2x-3)-(x+4)\big]=(x+1)(x-7)$.`, level: 2 },
    { id: 'm1-x-016', prompt: String.raw`Factorise $x^3-8$ (produit d'un facteur du premier degré et d'un trinôme).`,
      answer: '(x-2)*(x^2+2*x+4)', vars: ['x'], check: 'expr', form: 'factored',
      topic: 'Différence de deux cubes', sec: 'm1-s-identites',
      steps: [
        String.raw`Notion : une différence de cubes se factorise par $a^3-b^3=(a-b)(a^2+ab+b^2)$. Le facteur $(a-b)$ vient de ce que $a=b$ annule l'expression.`,
        String.raw`$8=2^3$ : on a $a=x$ et $b=2$ (et en effet $x=2$ annule $x^3-8$).`,
        String.raw`On remplace : $x^3-2^3=(x-2)(x^2+x\times2+2^2)=(x-2)(x^2+2x+4)$.`,
        String.raw`Vérification : $(x-2)(x^2+2x+4)=x^3+2x^2+4x-2x^2-4x-8=x^3-8$ ✔. Le trinôme a $\Delta=4-16=-12\lt0$ : on ne peut pas factoriser davantage dans $\mathbb R$.`
      ],
      rule: String.raw`$a^3-b^3=(a-b)(a^2+ab+b^2)$`,
      pitfall: String.raw`Mettre un $-$ devant $ab$ : c'est la formule de $a^3+b^3$.`,
      mistakes: [
        { expr: '(x-2)*(x^2-2*x+4)', msg: String.raw`Mauvais signe : $a^3-b^3=(a-b)(a^2+ab+b^2)$, le terme $ab=2x$ est précédé de $+$. Le $-ab$ est pour $a^3+b^3$.` },
        { expr: '(x-2)^3', msg: String.raw`$(x-2)^3=x^3-6x^2+12x-8\neq x^3-8$ : le cube d'une différence n'est pas la différence des cubes.` },
        { expr: '(x-2)*(x^2+4)', msg: String.raw`Il manque le terme $ab=2x$ dans le trinôme : en développant, les termes en $x^2$ et en $x$ ne s'annuleraient pas.` }
      ],
      hint: String.raw`$a^3-b^3=(a-b)(a^2+ab+b^2)$ avec $b=2$.`,
      explain: String.raw`Différence de cubes : $x^3-2^3=(x-2)(x^2+2x+4)$.`, level: 2 },
    { id: 'm1-x-017', prompt: String.raw`Factorise $x^3+27$ (produit d'un facteur du premier degré et d'un trinôme).`,
      answer: '(x+3)*(x^2-3*x+9)', vars: ['x'], check: 'expr', form: 'factored',
      topic: 'Somme de deux cubes', sec: 'm1-s-identites',
      steps: [
        String.raw`Notion : contrairement à $a^2+b^2$, une somme de cubes se factorise : $a^3+b^3=(a+b)(a^2-ab+b^2)$. Le facteur $(a+b)$ vient de ce que $a=-b$ annule l'expression.`,
        String.raw`$27=3^3$ : $a=x$ et $b=3$ (et en effet $(-3)^3+27=0$).`,
        String.raw`On remplace : $x^3+3^3=(x+3)(x^2-3x+9)$.`,
        String.raw`Vérification : $(x+3)(x^2-3x+9)=x^3-3x^2+9x+3x^2-9x+27=x^3+27$ ✔.`
      ],
      rule: String.raw`$a^3+b^3=(a+b)(a^2-ab+b^2)$`,
      pitfall: String.raw`Mettre $+ab$ dans le trinôme (c'est la formule de $a^3-b^3$).`,
      mistakes: [
        { expr: '(x+3)*(x^2+3*x+9)', msg: String.raw`Mauvais signe : $a^3+b^3=(a+b)(a^2-ab+b^2)$, le terme $ab=3x$ est précédé de $-$.` },
        { expr: '(x+3)^3', msg: String.raw`$(x+3)^3=x^3+9x^2+27x+27\neq x^3+27$ : le cube d'une somme n'est pas la somme des cubes.` },
        { expr: '(x+3)*(x^2+9)', msg: String.raw`Il manque le terme $-ab=-3x$ dans le trinôme : sans lui, le développement contient $3x^2+9x$ en trop.` }
      ],
      hint: String.raw`$27=3^3$ et $a^3+b^3=(a+b)(a^2-ab+b^2)$.`,
      explain: String.raw`Somme de cubes : $x^3+3^3=(x+3)(x^2-3x+9)$.`, level: 2 },
    { id: 'm1-x-018', prompt: String.raw`Factorise $3x^2+5x-2$.`,
      answer: '(3*x-1)*(x+2)', vars: ['x'], check: 'expr', form: 'factored',
      topic: 'Factoriser un trinôme', sec: 'm1-s-trinome',
      steps: [
        String.raw`Notion : si le trinôme $ax^2+bx+c$ a deux racines $x_1$ et $x_2$ (cas $\Delta\gt0$), il se factorise en $a(x-x_1)(x-x_2)$. Il faut donc d'abord trouver les racines.`,
        String.raw`$a=3$, $b=5$, $c=-2$ : $\Delta=b^2-4ac=25-4\times3\times(-2)=25+24=49$, et $\sqrt\Delta=7$.`,
        String.raw`Racines : $x_1=\frac{-5+7}{2\times3}=\frac26=\frac13$ et $x_2=\frac{-5-7}{6}=-2$.`,
        String.raw`Factorisation : $3\left(x-\frac13\right)(x+2)$ ; on fait entrer le 3 dans la première parenthèse : $3\left(x-\frac13\right)=3x-1$, d'où $(3x-1)(x+2)$.`,
        String.raw`Vérification : $(3x-1)(x+2)=3x^2+6x-x-2=3x^2+5x-2$ ✔.`
      ],
      rule: String.raw`Si $\Delta\gt0$ : $ax^2+bx+c=a(x-x_1)(x-x_2)$`,
      pitfall: String.raw`Oublier le coefficient $a$ devant les facteurs.`,
      mistakes: [
        { expr: '(x-1/3)*(x+2)', msg: String.raw`N'oublie pas le coefficient $a=3$ devant : $(x-\frac13)(x+2)$ commence par $x^2$, pas $3x^2$. Il faut $3\left(x-\frac13\right)(x+2)$.` },
        { expr: '(3*x+1)*(x-2)', msg: String.raw`Signes inversés : les racines sont $\frac13$ et $-2$, donc les facteurs $(3x-1)$ et $(x+2)$. Ton produit vaut $3x^2-5x-2$.` },
        { expr: '(3*x+1)*(x+2)', msg: String.raw`Le facteur associé à la racine $\frac13$ est $x-\frac13$, soit $3x-1$ : $(3x+1)(x+2)=3x^2+7x+2$.` }
      ],
      hint: String.raw`Calcule $\Delta$ et les racines, puis $a(x-x_1)(x-x_2)$.`,
      explain: String.raw`$\Delta=49$, racines $\frac13$ et $-2$, donc $3x^2+5x-2=3\left(x-\frac13\right)(x+2)=(3x-1)(x+2)$.`, level: 2 },
    { id: 'm1-x-019', prompt: String.raw`Calcule le discriminant de $2x^2-3x+5$.`,
      answer: '-31', vars: [], check: 'value',
      topic: 'Discriminant', sec: 'm1-s-trinome',
      steps: [
        String.raw`Notion : le discriminant de $ax^2+bx+c$ est $\Delta=b^2-4ac$ ; son signe indique le nombre de racines réelles (2 si $\Delta\gt0$, 1 si $\Delta=0$, 0 si $\Delta\lt0$).`,
        String.raw`On lit les coefficients AVEC leur signe : $a=2$, $b=-3$, $c=5$.`,
        String.raw`$b^2=(-3)^2=9$ (un carré est positif) et $4ac=4\times2\times5=40$.`,
        String.raw`$\Delta=9-40=-31$. Comme $\Delta\lt0$, le trinôme n'a pas de racine réelle et garde le signe de $a$ (positif) sur $\mathbb R$.`
      ],
      rule: String.raw`$\Delta=b^2-4ac$`,
      pitfall: String.raw`Écrire $b^2=-9$, ou ajouter $4ac$ au lieu de le soustraire.`,
      mistakes: [
        { expr: '49', msg: String.raw`$\Delta=b^2-4ac=9-40$ : le terme $4ac$ est soustrait, pas ajouté.` },
        { expr: '-49', msg: String.raw`$b^2=(-3)^2=+9$ : un carré n'est jamais négatif, on n'écrit pas $-9$.` },
        { expr: '31', msg: String.raw`Soustraction dans le mauvais ordre : $\Delta=b^2-4ac=9-40=-31$, pas $40-9$.` }
      ],
      hint: String.raw`$\Delta=b^2-4ac$ avec $a=2$, $b=-3$, $c=5$.`,
      explain: String.raw`$\Delta=(-3)^2-4\times2\times5=9-40=-31\lt0$ : pas de racine réelle.`, level: 1 },
    { id: 'm1-x-020', prompt: String.raw`Résous $x^2-5x+6=0$.`,
      answer: '2;3', vars: [], check: 'set',
      topic: 'Équation du second degré', sec: 'm1-s-trinome',
      steps: [
        String.raw`Notion : pour résoudre $ax^2+bx+c=0$, on calcule $\Delta=b^2-4ac$ ; si $\Delta\gt0$, les solutions sont $x_{1,2}=\frac{-b\pm\sqrt\Delta}{2a}$. (Variante : chercher deux nombres de somme $-\frac ba$ et de produit $\frac ca$.)`,
        String.raw`$a=1$, $b=-5$, $c=6$ : $\Delta=(-5)^2-4\times1\times6=25-24=1\gt0$, donc deux solutions, et $\sqrt\Delta=1$.`,
        String.raw`$x_1=\frac{5-1}{2}=2$ et $x_2=\frac{5+1}{2}=3$ (le numérateur commence par $-b=+5$).`,
        String.raw`Vérification : $2+3=5$ et $2\times3=6$ ✔ ; et $2^2-5\times2+6=0$ ✔. $S=\{2\,;\,3\}$.`
      ],
      rule: String.raw`$\Delta=b^2-4ac$ et $x_{1,2}=\frac{-b\pm\sqrt\Delta}{2a}$`,
      pitfall: String.raw`Oublier le signe de $b$ : le numérateur commence par $-b=+5$.`,
      mistakes: [
        { expr: '-2;-3', msg: String.raw`Erreur de signe : le numérateur est $-b=-(-5)=+5$. D'ailleurs $x^2-5x+6=(x-2)(x-3)$ : les racines sont positives (somme 5, produit 6).` },
        { expr: '2', msg: String.raw`Il manque une solution : $\Delta=1\gt0$ donne deux racines, $2$ et $3$.` },
        { expr: '1;6', msg: String.raw`$1\times6=6$ mais $1+6=7\neq5$ : il faut à la fois la somme 5 et le produit 6.` }
      ],
      hint: String.raw`Cherche deux nombres de somme 5 et de produit 6, ou calcule $\Delta$.`,
      explain: String.raw`$\Delta=1$, donc $x=\frac{5\pm1}{2}$ : $x=2$ ou $x=3$.`, level: 1 },
    { id: 'm1-x-021', prompt: String.raw`Résous $3x^2+2x-1=0$.`,
      answer: '1/3;-1', vars: [], check: 'set',
      topic: 'Équation du second degré', sec: 'm1-s-trinome',
      steps: [
        String.raw`Notion : on résout $ax^2+bx+c=0$ avec le discriminant $\Delta=b^2-4ac$ ; si $\Delta\gt0$, $x_{1,2}=\frac{-b\pm\sqrt\Delta}{2a}$ (on divise par $2a$, pas par 2).`,
        String.raw`$a=3$, $b=2$, $c=-1$ : $\Delta=2^2-4\times3\times(-1)=4+12=16$, $\sqrt\Delta=4$.`,
        String.raw`$x_1=\frac{-2+4}{2\times3}=\frac26=\frac13$ et $x_2=\frac{-2-4}{6}=\frac{-6}{6}=-1$.`,
        String.raw`Vérification : $3\times(-1)^2+2\times(-1)-1=3-2-1=0$ ✔ ; produit $\frac13\times(-1)=-\frac13=\frac ca$ ✔. $S=\{-1\,;\,\frac13\}$.`
      ],
      rule: String.raw`$x_{1,2}=\frac{-b\pm\sqrt\Delta}{2a}$`,
      pitfall: String.raw`Diviser par 2 au lieu de $2a=6$.`,
      mistakes: [
        { expr: '-1/3;1', msg: String.raw`Erreur de signe : le numérateur est $-b\pm\sqrt\Delta$ avec $-b=-2$ (tu as pris $+2$).` },
        { expr: '1;-3', msg: String.raw`On divise par $2a=2\times3=6$, pas par 2 : $\frac{-2+4}{6}=\frac13$.` },
        { expr: '1/3;1', msg: String.raw`Seconde racine fausse : $\frac{-2-4}{6}=\frac{-6}{6}=-1$. Vérifie : $x=1$ donne $3+2-1=4\neq0$.` }
      ],
      hint: String.raw`$\Delta=b^2-4ac=16$.`,
      explain: String.raw`$\Delta=16$, donc $x=\frac{-2\pm4}{6}$ : $x_1=\frac13$ et $x_2=-1$.`, level: 2 },
    { id: 'm1-x-022', prompt: String.raw`Résous $x^2-2x-1=0$ (valeurs exactes).`,
      answer: '1-sqrt(2);sqrt(2)+1', vars: [], check: 'set',
      topic: 'Équation du second degré', sec: 'm1-s-trinome',
      steps: [
        String.raw`Notion : on résout $ax^2+bx+c=0$ avec $\Delta=b^2-4ac$ et $x_{1,2}=\frac{-b\pm\sqrt\Delta}{2a}$ ; on simplifie ensuite la racine ($\sqrt{k^2m}=k\sqrt m$).`,
        String.raw`$a=1$, $b=-2$, $c=-1$ : $\Delta=(-2)^2-4\times1\times(-1)=4+4=8\gt0$, et $\sqrt8=\sqrt{4\times2}=2\sqrt2$.`,
        String.raw`$x=\frac{2\pm2\sqrt2}{2}$ ; on divise CHAQUE terme du numérateur par 2 : $x=1\pm\sqrt2$.`,
        String.raw`Vérification : somme $(1+\sqrt2)+(1-\sqrt2)=2=-\frac ba$ ✔ et produit $(1+\sqrt2)(1-\sqrt2)=1-2=-1=\frac ca$ ✔.`
      ],
      rule: String.raw`$x_{1,2}=\frac{-b\pm\sqrt\Delta}{2a}$, puis simplifier $\sqrt\Delta$`,
      pitfall: String.raw`Ne diviser par 2 que le premier terme du numérateur.`,
      mistakes: [
        { expr: '2-2*sqrt(2);2*sqrt(2)+2', msg: String.raw`Tu as oublié de diviser par $2a=2$ : $2\pm2\sqrt2$ n'est que le numérateur.` },
        { expr: '1-sqrt(8);sqrt(8)+1', msg: String.raw`$\frac{\sqrt8}{2}=\frac{2\sqrt2}{2}=\sqrt2$ : la racine est elle aussi divisée par 2.` },
        { expr: '1-2*sqrt(2);1+2*sqrt(2)', msg: String.raw`Tu n'as divisé par 2 que le premier terme : $\frac{2\pm2\sqrt2}{2}=1\pm\sqrt2$.` }
      ],
      hint: String.raw`$\Delta=8$ et $\sqrt8=2\sqrt2$.`,
      explain: String.raw`$\Delta=8$, $\sqrt8=2\sqrt2$, donc $x=\frac{2\pm2\sqrt2}{2}=1\pm\sqrt2$.`, level: 2 },
    { id: 'm1-x-023', prompt: String.raw`Écris $x^2+6x+5$ sous la forme $(x-\alpha)^2+\beta$. Donne $\alpha;\beta$.`,
      answer: '-3;-4', vars: [], check: 'tuple',
      topic: 'Forme canonique', sec: 'm1-s-trinome',
      steps: [
        String.raw`Notion : la forme canonique $(x-\alpha)^2+\beta$ montre le sommet $(\alpha,\beta)$ de la parabole. On l'obtient en « complétant le carré » : $x^2+bx$ est le début de $\left(x+\frac b2\right)^2$.`,
        String.raw`Moitié de 6 : 3, donc on utilise $(x+3)^2=x^2+6x+9$, d'où $x^2+6x=(x+3)^2-9$ (on retranche le 9 ajouté en trop).`,
        String.raw`$x^2+6x+5=(x+3)^2-9+5=(x+3)^2-4$.`,
        String.raw`On identifie avec $(x-\alpha)^2+\beta$ : $x+3=x-(-3)$, donc $\alpha=-3$ et $\beta=-4$. Vérification : $\alpha=-\frac{b}{2a}=-3$ et $f(-3)=9-18+5=-4$ ✔.`
      ],
      rule: String.raw`$ax^2+bx+c=a(x-\alpha)^2+\beta$ avec $\alpha=-\frac{b}{2a}$ et $\beta=f(\alpha)$`,
      pitfall: String.raw`Lire $\alpha=+3$ dans $(x+3)^2$ : la forme est $(x-\alpha)^2$.`,
      mistakes: [
        { expr: '3;-4', msg: String.raw`$(x+3)^2=(x-(-3))^2$ : avec la forme $(x-\alpha)^2$, on a $\alpha=-3$.` },
        { expr: '-3;14', msg: String.raw`$x^2+6x=(x+3)^2-9$ : on retranche 9 (il est apparu en trop dans le carré), on ne l'ajoute pas. $\beta=5-9=-4$.` },
        { expr: '-3;5', msg: String.raw`Tu as oublié de compenser le $+9$ qui apparaît en développant $(x+3)^2$ : $\beta=5-9=-4$.` }
      ],
      hint: String.raw`$x^2+6x=(x+3)^2-9$.`,
      explain: String.raw`$x^2+6x+5=(x+3)^2-4$, donc $\alpha=-3$ et $\beta=-4$ (sommet $(-3,-4)$).`, level: 2 },
    { id: 'm1-x-024', prompt: String.raw`Écris $2x^2-8x+3$ sous la forme $a(x-\alpha)^2+\beta$. Donne $a;\alpha;\beta$.`,
      answer: '2;2;-5', vars: [], check: 'tuple',
      topic: 'Forme canonique', sec: 'm1-s-trinome',
      steps: [
        String.raw`Notion : forme canonique $a(x-\alpha)^2+\beta$, avec $a$ le coefficient de $x^2$, $\alpha=-\frac{b}{2a}$ (abscisse du sommet) et $\beta=f(\alpha)$. On peut aussi factoriser par $a$ puis compléter le carré.`,
        String.raw`On factorise par $a=2$ les termes en $x$ : $2x^2-8x+3=2(x^2-4x)+3$. Dans la parenthèse : $x^2-4x=(x-2)^2-4$.`,
        String.raw`On remplace et on distribue le 2 : $2\big[(x-2)^2-4\big]+3=2(x-2)^2-8+3=2(x-2)^2-5$.`,
        String.raw`Donc $a=2$, $\alpha=2$, $\beta=-5$. Vérification : $\alpha=-\frac{-8}{2\times2}=2$ et $\beta=f(2)=8-16+3=-5$ ✔.`
      ],
      rule: String.raw`$\alpha=-\frac{b}{2a}$, $\beta=f(\alpha)$, et $a$ reste le coefficient de $x^2$`,
      pitfall: String.raw`Oublier de multiplier le $-4$ par le facteur 2.`,
      mistakes: [
        { expr: '2;2;-1', msg: String.raw`$2\big[(x-2)^2-4\big]+3=2(x-2)^2-8+3$ : le $-4$ est lui aussi multiplié par 2.` },
        { expr: '2;-2;-5', msg: String.raw`$(x-2)^2$ correspond à $\alpha=+2$ (car $\alpha=-\frac{b}{2a}=\frac84=2$).` },
        { expr: '1;2;-5', msg: String.raw`Le coefficient devant le carré est celui de $x^2$, soit $a=2$ : $(x-2)^2-5=x^2-4x-1$ n'est pas notre trinôme.` }
      ],
      hint: String.raw`Factorise par 2 les termes en $x$, puis complète le carré. $\alpha=-\frac{b}{2a}$, $\beta=f(\alpha)$.`,
      explain: String.raw`$2x^2-8x+3=2(x-2)^2-5$ : $a=2$, $\alpha=2$, $\beta=-5$.`, level: 3 },
    { id: 'm1-x-025', prompt: String.raw`Sans calculer les racines de $3x^2-7x+2$, donne leur somme puis leur produit ($S;P$).`,
      answer: '7/3;2/3', vars: [], check: 'tuple',
      topic: 'Somme et produit des racines', sec: 'm1-s-trinome',
      steps: [
        String.raw`Notion : si $ax^2+bx+c$ a deux racines, $ax^2+bx+c=a(x-x_1)(x-x_2)$ ; en développant et en identifiant, $S=x_1+x_2=-\frac ba$ et $P=x_1x_2=\frac ca$.`,
        String.raw`Les racines existent : $\Delta=(-7)^2-4\times3\times2=49-24=25\gt0$ ✔. Coefficients : $a=3$, $b=-7$, $c=2$.`,
        String.raw`$S=-\frac{-7}{3}=\frac73$ et $P=\frac23$.`,
        String.raw`Vérification : les racines sont $\frac{7\pm5}{6}$, soit $2$ et $\frac13$ ; $2+\frac13=\frac73$ ✔ et $2\times\frac13=\frac23$ ✔.`
      ],
      rule: String.raw`$S=-\frac ba$ et $P=\frac ca$`,
      pitfall: String.raw`Oublier le signe moins de $S=-\frac ba$.`,
      mistakes: [
        { expr: '-7/3;2/3', msg: String.raw`$S=-\frac ba$ avec $b=-7$ : $S=-\frac{-7}{3}=+\frac73$.` },
        { expr: '7;2', msg: String.raw`Il faut diviser par $a=3$ : $S=\frac73$ et $P=\frac23$.` },
        { expr: '2/3;7/3', msg: String.raw`Les bonnes valeurs mais inversées : on demande d'abord la somme $S$, puis le produit $P$.` }
      ],
      hint: String.raw`$S=-\frac ba$, $P=\frac ca$.`,
      explain: String.raw`$S=-\frac{-7}{3}=\frac73$ et $P=\frac23$ (les racines sont $2$ et $\frac13$).`, level: 1 },
    { id: 'm1-x-026', prompt: String.raw`Trouve les deux nombres dont la somme vaut 10 et le produit 21.`,
      answer: '3;7', vars: [], check: 'set',
      topic: 'Somme et produit des racines', sec: 'm1-s-trinome',
      steps: [
        String.raw`Notion : deux nombres $x_1,x_2$ de somme $S$ et de produit $P$ sont les racines de $X^2-SX+P=0$, car $(X-x_1)(X-x_2)=X^2-(x_1+x_2)X+x_1x_2$.`,
        String.raw`Ici $S=10$ et $P=21$ : on résout $X^2-10X+21=0$.`,
        String.raw`$\Delta=100-84=16$, $\sqrt\Delta=4$, donc $X=\frac{10\pm4}{2}$ : $X=7$ ou $X=3$.`,
        String.raw`Vérification : $3+7=10$ ✔ et $3\times7=21$ ✔.`
      ],
      rule: String.raw`$x_1,x_2$ de somme $S$ et produit $P$ sont les racines de $X^2-SX+P=0$`,
      pitfall: String.raw`Écrire $X^2+SX+P=0$ : le signe devant $S$ est moins.`,
      mistakes: [
        { expr: '-3;-7', msg: String.raw`Leur produit vaut bien 21 mais leur somme vaut $-10$ : tu as sans doute résolu $X^2+10X+21=0$. Le bon trinôme est $X^2-SX+P$.` },
        { expr: '1;21', msg: String.raw`Produit 21, mais $1+21=22\neq10$ : il faut vérifier les deux conditions.` }
      ],
      hint: String.raw`Ce sont les racines de $X^2-SX+P=0$.`,
      explain: String.raw`Ce sont les racines de $X^2-10X+21=0$ : $X=\frac{10\pm4}{2}$, soit $3$ et $7$.`, level: 2 },
    { id: 'm1-x-027', prompt: String.raw`Résous dans $\mathbb{R}$ l'équation bicarrée $x^4-5x^2+4=0$.`,
      answer: '-2;-1;1;2', vars: [], check: 'set',
      topic: 'Équation bicarrée', sec: 'm1-s-equations',
      steps: [
        String.raw`Notion : une équation bicarrée ne contient que $x^4$, $x^2$ et une constante. Comme $x^4=(x^2)^2$, on pose $X=x^2$ (avec $X\geq0$) pour se ramener à une équation du second degré.`,
        String.raw`$X^2-5X+4=0$ : $\Delta=25-16=9$, $X=\frac{5\pm3}{2}$, donc $X=1$ ou $X=4$ (tous deux $\geq0$, donc acceptables).`,
        String.raw`Retour à $x$ : $x^2=1\Leftrightarrow x=1$ ou $x=-1$ ; $x^2=4\Leftrightarrow x=2$ ou $x=-2$.`,
        String.raw`Vérification : $2^4-5\times2^2+4=16-20+4=0$ ✔ et $1-5+4=0$ ✔ (les valeurs opposées marchent aussi, seules des puissances paires apparaissent). $S=\{-2\,;-1\,;1\,;2\}$.`
      ],
      rule: String.raw`Bicarrée : poser $X=x^2\geq0$, puis $x^2=X\Leftrightarrow x=\pm\sqrt X$`,
      pitfall: String.raw`S'arrêter aux valeurs de $X$, ou oublier les solutions négatives.`,
      mistakes: [
        { expr: '1;4', msg: String.raw`1 et 4 sont les valeurs de $X=x^2$, pas de $x$ : il reste à résoudre $x^2=1$ et $x^2=4$.` },
        { expr: '1;2', msg: String.raw`$x^2=1$ donne aussi $x=-1$, et $x^2=4$ donne aussi $x=-2$ : un carré a deux antécédents opposés.` },
        { expr: '-1;1', msg: String.raw`Il manque les solutions de $x^2=4$, c'est-à-dire $x=\pm2$.` }
      ],
      hint: String.raw`Pose $X=x^2$.`,
      explain: String.raw`Avec $X=x^2$ : $X=1$ ou $X=4$, d'où $x=\pm1$ ou $x=\pm2$.`, level: 3 },
    { id: 'm1-x-028', prompt: String.raw`L'ensemble des solutions de $x^2-x-6\lt 0$ est un intervalle $]a,b[$. Donne $a;b$.`,
      answer: '-2;3', vars: [], check: 'tuple',
      topic: 'Inéquation du second degré', sec: 'm1-s-trinome',
      steps: [
        String.raw`Notion : un trinôme qui a deux racines est du signe de $a$ à l'extérieur des racines et du signe contraire entre elles. On cherche donc les racines, puis on lit le signe.`,
        String.raw`$\Delta=(-1)^2-4\times1\times(-6)=1+24=25$, $\sqrt\Delta=5$ : racines $\frac{1-5}{2}=-2$ et $\frac{1+5}{2}=3$.`,
        String.raw`$x^2-x-6=(x+2)(x-3)$ avec $a=1\gt0$ : positif à l'extérieur de $[-2,3]$, strictement négatif entre $-2$ et $3$.`,
        String.raw`Inégalité stricte : racines exclues, $S=]-2,3[$. Vérification en $x=0$ : $-6\lt0$ ✔ ; en $x=4$ : $6\gt0$, hors solution ✔.`
      ],
      rule: String.raw`Trinôme : signe de $a$ à l'extérieur des racines, signe contraire entre elles`,
      pitfall: String.raw`Prendre l'extérieur des racines, ou se tromper de signe sur les racines.`,
      mistakes: [
        { expr: '-3;2', msg: String.raw`Racines de signes inversés : $\frac{-b\pm\sqrt\Delta}{2a}=\frac{1\pm5}{2}$, soit $3$ et $-2$.` },
        { expr: '3;-2', msg: String.raw`Un intervalle s'écrit borne gauche (la plus petite) puis borne droite : $]-2,3[$.` }
      ],
      hint: String.raw`Trouve les racines ; le trinôme ($a=1\gt0$) est négatif entre elles.`,
      explain: String.raw`Racines $-2$ et $3$, $a=1\gt0$ : le trinôme est négatif entre les racines, $S=]-2,3[$.`, level: 2 },
    { id: 'm1-x-029', prompt: String.raw`Résous $\frac{x^2-4}{x-2}=0$.`,
      answer: '-2', vars: [], check: 'set',
      topic: 'Équation quotient', sec: 'm1-s-equations',
      steps: [
        String.raw`Notion : un quotient est nul si et seulement si son numérateur est nul ET son dénominateur non nul : $\frac AB=0\Leftrightarrow A=0$ et $B\neq0$. On commence toujours par la valeur interdite.`,
        String.raw`Valeur interdite : $x-2=0\Leftrightarrow x=2$, donc on impose $x\neq2$.`,
        String.raw`Numérateur : $x^2-4=(x-2)(x+2)=0\Leftrightarrow x=2$ ou $x=-2$.`,
        String.raw`On élimine $x=2$ (interdite) : il reste $x=-2$. Vérification : $\frac{(-2)^2-4}{-2-2}=\frac{0}{-4}=0$ ✔. $S=\{-2\}$.`
      ],
      rule: String.raw`$\frac AB=0\Leftrightarrow A=0$ et $B\neq0$`,
      pitfall: String.raw`Garder $x=2$, qui annule le dénominateur.`,
      mistakes: [
        { expr: '-2;2', msg: String.raw`$x=2$ annule le dénominateur : le quotient n'y est pas défini, ce n'est pas une solution.` },
        { expr: '2', msg: String.raw`$x=2$ est justement la valeur interdite (dénominateur nul) ; la solution valable est $x=-2$.` }
      ],
      hint: String.raw`$\frac AB=0\Leftrightarrow A=0$ et $B\neq0$.`,
      explain: String.raw`Valeur interdite $x=2$ ; le numérateur s'annule en $\pm2$, seul $x=-2$ convient.`, level: 2 },
    { id: 'm1-x-030', prompt: String.raw`Résous $\frac{x+1}{3-x}\leq 0$. L'ensemble des solutions s'écrit $]-\infty,a]\cup]b,+\infty[$ : donne $a;b$.`,
      answer: '-1;3', vars: [], check: 'tuple',
      topic: 'Inéquation quotient', sec: 'm1-s-equations',
      steps: [
        String.raw`Notion : pour le signe d'un quotient, on fait un tableau de signes du numérateur et du dénominateur. Les zéros du numérateur sont inclus si l'inégalité est large ; les zéros du dénominateur sont toujours exclus.`,
        String.raw`$x+1$ s'annule en $-1$ (négatif avant, positif après) ; $3-x$ s'annule en $3$ (positif avant, négatif après, car le coefficient de $x$ est négatif). Valeur interdite : $3$.`,
        String.raw`Signe du quotient : pour $x\lt-1$, $\frac{-}{+}\lt0$ ; pour $-1\lt x\lt3$, $\frac{+}{+}\gt0$ ; pour $x\gt3$, $\frac{+}{-}\lt0$.`,
        String.raw`On garde les zones négatives, avec $x=-1$ inclus (quotient nul) et $3$ exclu : $S=]-\infty,-1]\cup]3,+\infty[$, donc $a=-1$ et $b=3$. Test $x=4$ : $\frac{5}{-1}=-5\leq0$ ✔.`
      ],
      rule: String.raw`Tableau de signes : zéros du numérateur inclus si l'inégalité est large, zéros du dénominateur toujours exclus`,
      pitfall: String.raw`Oublier que $3-x$ devient négatif pour $x\gt3$.`,
      mistakes: [
        { expr: '1;3', msg: String.raw`$x+1=0\Leftrightarrow x=-1$ (et non $1$).` },
        { expr: '-1;-3', msg: String.raw`$3-x=0\Leftrightarrow x=3$ (et non $-3$).` },
        { expr: '3;-1', msg: String.raw`Ordre : $a$ est la borne de $]-\infty,a]$ (zéro du numérateur, $-1$) et $b$ celle de $]b,+\infty[$ (valeur interdite, $3$).` }
      ],
      hint: String.raw`Tableau de signes avec $x+1$ (nul en $-1$) et $3-x$ (nul en $3$, valeur interdite).`,
      explain: String.raw`Le quotient est négatif pour $x\lt-1$ et pour $x\gt3$ ; $-1$ inclus, $3$ exclu : $S=]-\infty,-1]\cup]3,+\infty[$.`, level: 3 },
    { id: 'm1-x-031', prompt: String.raw`Résous le système $\begin{cases}2x+3y=7\\x-y=1\end{cases}$. Donne $x;y$.`,
      answer: '2;1', vars: [], check: 'tuple',
      topic: 'Systèmes linéaires 2×2', sec: 'm1-s-equations',
      steps: [
        String.raw`Notion : résoudre le système, c'est trouver le couple $(x,y)$ qui vérifie les deux équations. Méthode par substitution : on exprime une inconnue avec l'autre, puis on remplace.`,
        String.raw`La 2e équation donne facilement $x$ : $x-y=1\Leftrightarrow x=1+y$.`,
        String.raw`On remplace dans la 1re : $2(1+y)+3y=7\Leftrightarrow2+2y+3y=7\Leftrightarrow5y=5\Leftrightarrow y=1$. Puis $x=1+y=2$.`,
        String.raw`Vérification dans les DEUX équations : $2\times2+3\times1=7$ ✔ et $2-1=1$ ✔.`
      ],
      rule: String.raw`Substitution : exprimer une inconnue, remplacer, résoudre, puis vérifier dans chaque équation`,
      pitfall: String.raw`Inverser $x$ et $y$ dans la réponse.`,
      mistakes: [
        { expr: '1;2', msg: String.raw`Ordre demandé : $x$ puis $y$. Vérifie : $(1,2)$ donne $1-2=-1\neq1$.` },
        { expr: '9/4;5/4', msg: String.raw`Distribution incomplète : $2(1+y)=2+2y$, pas $2+y$. On obtient $5y=5$, donc $y=1$.` }
      ],
      hint: String.raw`Substitution : $x=1+y$.`,
      explain: String.raw`$x=1+y$, puis $2(1+y)+3y=7$ donne $y=1$ et $x=2$.`, level: 1 },
    { id: 'm1-x-032', prompt: String.raw`Résous le système $\begin{cases}3x-2y=4\\5x+4y=3\end{cases}$. Donne $x;y$.`,
      answer: '1;-1/2', vars: [], check: 'tuple',
      topic: 'Systèmes linéaires 2×2', sec: 'm1-s-equations',
      steps: [
        String.raw`Notion : méthode par combinaison linéaire. On multiplie une équation par un nombre bien choisi pour que, en additionnant, une inconnue disparaisse. Ici les coefficients de $y$ sont $-2$ et $4$ : $2L_1+L_2$ élimine $y$.`,
        String.raw`$2L_1$ : $6x-4y=8$. On ajoute $L_2$ : $(6x+5x)+(-4y+4y)=8+3$, soit $11x=11$, donc $x=1$.`,
        String.raw`On reporte dans $L_1$ : $3\times1-2y=4\Leftrightarrow-2y=1\Leftrightarrow y=-\frac12$.`,
        String.raw`Vérification dans $L_2$ : $5\times1+4\times\left(-\frac12\right)=5-2=3$ ✔. (Avec Cramer : $D=3\times4-(-2)\times5=22$ et $x=\frac{4\times4-(-2)\times3}{22}=\frac{22}{22}=1$.)`
      ],
      rule: String.raw`Combinaison $\alpha L_1+\beta L_2$ pour éliminer une inconnue ; unique solution si $ad-bc\neq0$`,
      pitfall: String.raw`Erreur de signe en isolant $y$ : $-2y=1$ donne $y=-\frac12$.`,
      mistakes: [
        { expr: '1;1/2', msg: String.raw`Erreur de signe sur $y$ : $-2y=1\Leftrightarrow y=-\frac12$. Vérifie la 1re équation : $3-2\times\frac12=2\neq4$.` },
        { expr: '-1/2;1', msg: String.raw`Les bonnes valeurs dans le mauvais ordre : on demande $x$ puis $y$.` }
      ],
      hint: String.raw`Combinaison : $2L_1+L_2$ élimine $y$.`,
      explain: String.raw`$2L_1+L_2$ donne $11x=11$, donc $x=1$ ; puis $3-2y=4$ donne $y=-\frac12$.`, level: 2 },
    { id: 'm1-x-033', prompt: String.raw`Calcule $\sum_{k=1}^{n}(2k-1)$ en fonction de $n$ (somme des $n$ premiers impairs).`,
      answer: 'n^2', vars: ['n'], check: 'expr', domain: [1, 10],
      topic: 'Sommes et linéarité', sec: 'm1-s-sommes',
      steps: [
        String.raw`Notion : $\sum_{k=1}^{n}(2k-1)=1+3+5+\dots+(2n-1)$. Le symbole $\sum$ est linéaire : on peut séparer les sommes et sortir les constantes, $\sum(\alpha u_k+\beta v_k)=\alpha\sum u_k+\beta\sum v_k$.`,
        String.raw`On sépare : $\sum_{k=1}^{n}(2k-1)=2\sum_{k=1}^{n}k-\sum_{k=1}^{n}1$.`,
        String.raw`$\sum_{k=1}^{n}k=\frac{n(n+1)}{2}$ et $\sum_{k=1}^{n}1=n$ (on ajoute $n$ fois le nombre 1).`,
        String.raw`$2\times\frac{n(n+1)}{2}-n=n(n+1)-n=n^2+n-n=n^2$. Vérification $n=3$ : $1+3+5=9=3^2$ ✔.`
      ],
      rule: String.raw`Linéarité de $\sum$ ; $\sum_{k=1}^n k=\frac{n(n+1)}{2}$ et $\sum_{k=1}^n 1=n$`,
      pitfall: String.raw`Écrire $\sum_{k=1}^{n}1=1$ alors qu'on ajoute $n$ fois le nombre 1.`,
      mistakes: [
        { expr: 'n^2+n-1', msg: String.raw`$\sum_{k=1}^{n}1=n$ (il y a $n$ termes égaux à 1), pas $1$.` },
        { expr: 'n^2+n', msg: String.raw`Tu as oublié de retrancher $\sum_{k=1}^n 1=n$ : $n(n+1)-n=n^2$.` }
      ],
      hint: String.raw`Linéarité : $2\sum k-\sum 1$.`,
      explain: String.raw`$2\sum k-\sum1=n(n+1)-n=n^2$ : la somme des $n$ premiers impairs vaut $n^2$.`, level: 2 },
    { id: 'm1-x-034', prompt: String.raw`Calcule $\sum_{k=0}^{n}3^k$ en fonction de $n$.`,
      answer: '(3^(n+1)-1)/2', vars: ['n'], check: 'expr', domain: [1, 8],
      topic: 'Somme géométrique', sec: 'm1-s-sommes',
      steps: [
        String.raw`Notion : une somme géométrique additionne les puissances successives d'un nombre $q$ (la raison) : $\sum_{k=0}^{n}q^k=1+q+\dots+q^n=\frac{1-q^{n+1}}{1-q}$ pour $q\neq1$, où $n+1$ est le nombre de termes.`,
        String.raw`Ici $q=3$, premier terme $3^0=1$, et $k$ va de 0 à $n$ : $n+1$ termes.`,
        String.raw`$\frac{1-3^{n+1}}{1-3}=\frac{1-3^{n+1}}{-2}=\frac{3^{n+1}-1}{2}$ (on multiplie haut et bas par $-1$).`,
        String.raw`Vérification $n=2$ : $1+3+9=13$ et $\frac{27-1}{2}=13$ ✔.`
      ],
      rule: String.raw`$\sum_{k=0}^n q^k=\frac{1-q^{n+1}}{1-q}=\frac{q^{n+1}-1}{q-1}$ ($q\neq1$)`,
      pitfall: String.raw`Mettre l'exposant $n$ au lieu de $n+1$ (le nombre de termes).`,
      mistakes: [
        { expr: '(3^n-1)/2', msg: String.raw`De $k=0$ à $n$ il y a $n+1$ termes : l'exposant est $n+1$. Pour $n=2$ : $\frac{9-1}{2}=4\neq13$.` },
        { expr: '3^(n+1)-1', msg: String.raw`Il faut diviser par $q-1=2$ : pour $n=2$, $27-1=26=2\times13$.` },
        { expr: '(1-3^(n+1))/2', msg: String.raw`Erreur de signe : le dénominateur vaut $1-q=1-3=-2$, pas $2$.` }
      ],
      hint: String.raw`Somme géométrique de raison $q=3$, premier terme 1.`,
      explain: String.raw`Somme géométrique de raison 3 à $n+1$ termes : $\frac{1-3^{n+1}}{1-3}=\frac{3^{n+1}-1}{2}$.`, level: 2 },
    { id: 'm1-x-035', prompt: String.raw`Calcule $\sum_{k=1}^{n}k(k+1)$ en fonction de $n$.`,
      answer: 'n*(n+1)*(n+2)/3', vars: ['n'], check: 'expr', domain: [1, 10],
      topic: 'Sommes usuelles', sec: 'm1-s-sommes',
      steps: [
        String.raw`Notion : on ne connaît pas directement $\sum k(k+1)$, mais on connaît $\sum k$ et $\sum k^2$. On développe le terme général, $k(k+1)=k^2+k$, puis on utilise la linéarité : $\sum(k^2+k)=\sum k^2+\sum k$.`,
        String.raw`Formules usuelles : $\sum_{k=1}^{n}k^2=\frac{n(n+1)(2n+1)}{6}$ et $\sum_{k=1}^{n}k=\frac{n(n+1)}{2}=\frac{3n(n+1)}{6}$.`,
        String.raw`Même dénominateur, puis facteur commun $n(n+1)$ : $\frac{n(n+1)\big[(2n+1)+3\big]}{6}=\frac{n(n+1)(2n+4)}{6}$.`,
        String.raw`$2n+4=2(n+2)$, donc la somme vaut $\frac{2n(n+1)(n+2)}{6}=\frac{n(n+1)(n+2)}{3}$.`,
        String.raw`Vérification $n=2$ : $1\times2+2\times3=8$ et $\frac{2\times3\times4}{3}=8$ ✔.`
      ],
      rule: String.raw`$\sum_{k=1}^n k=\frac{n(n+1)}2$ et $\sum_{k=1}^n k^2=\frac{n(n+1)(2n+1)}6$`,
      pitfall: String.raw`Écrire $\sum k(k+1)=\left(\sum k\right)\left(\sum(k+1)\right)$ : la somme d'un produit n'est pas le produit des sommes.`,
      mistakes: [
        { expr: 'n*(n+1)*(2*n+1)/6', msg: String.raw`Tu n'as compté que $\sum k^2$ : $k(k+1)=k^2+k$, il faut ajouter $\sum k=\frac{n(n+1)}{2}$.` },
        { expr: 'n*(n+1)/2*n*(n+3)/2', msg: String.raw`$\sum u_kv_k\neq\left(\sum u_k\right)\left(\sum v_k\right)$ : développe d'abord $k(k+1)=k^2+k$.` }
      ],
      hint: String.raw`$k(k+1)=k^2+k$, puis utilise les formules de $\sum k^2$ et $\sum k$.`,
      explain: String.raw`$\sum k^2+\sum k=\frac{n(n+1)(2n+1)}{6}+\frac{n(n+1)}{2}=\frac{n(n+1)(n+2)}{3}$.`, level: 3 },
    { id: 'm1-x-036', prompt: String.raw`Simplifie $\ln(x^3)-\ln(x)$ pour $x\gt 0$.`,
      answer: '2*ln(x)', vars: ['x'], check: 'expr', domain: [0.3, 4],
      topic: 'Propriétés du logarithme', sec: 'm1-s-explog',
      steps: [
        String.raw`Notion : $\ln$ transforme les produits en sommes ; on en déduit, pour $a,b\gt0$ : $\ln(a^n)=n\ln a$ et $\ln a-\ln b=\ln\frac ab$. Ici $x\gt0$, donc tout est bien défini.`,
        String.raw`Règle de la puissance : $\ln(x^3)=3\ln x$.`,
        String.raw`Donc $\ln(x^3)-\ln x=3\ln x-\ln x=2\ln x$.`,
        String.raw`Autre voie : $\ln\frac{x^3}{x}=\ln(x^2)=2\ln x$. Vérification en $x=\mathrm e$ : $\ln(\mathrm e^3)-\ln\mathrm e=3-1=2=2\ln\mathrm e$ ✔.`
      ],
      rule: String.raw`$\ln(a^n)=n\ln a$ et $\ln a-\ln b=\ln\frac ab$`,
      pitfall: String.raw`Écrire $\ln a-\ln b=\ln(a-b)$.`,
      mistakes: [
        { expr: 'ln(x^3-x)', msg: String.raw`$\ln a-\ln b=\ln\frac ab$, pas $\ln(a-b)$ : le logarithme transforme les quotients en différences.` },
        { expr: '3', msg: String.raw`Tu as calculé le quotient $\frac{\ln(x^3)}{\ln x}=3$ au lieu de la différence $3\ln x-\ln x$.` },
        { expr: '3*ln(x)', msg: String.raw`$\ln(x^3)=3\ln x$ est juste, mais il faut encore retrancher $\ln x$ : $3\ln x-\ln x=2\ln x$.` }
      ],
      hint: String.raw`$\ln(x^3)=3\ln x$.`,
      explain: String.raw`$\ln(x^3)-\ln x=3\ln x-\ln x=2\ln x$.`, level: 1 },
    { id: 'm1-x-037', prompt: String.raw`Calcule $\mathrm{e}^{2\ln 3}$.`,
      answer: '9', vars: [], check: 'value',
      topic: 'Exponentielle et logarithme', sec: 'm1-s-explog',
      steps: [
        String.raw`Notion : $\exp$ et $\ln$ sont des fonctions réciproques : $\mathrm e^{\ln a}=a$ pour $a\gt0$. Et $n\ln a=\ln(a^n)$.`,
        String.raw`On fait entrer le 2 dans le logarithme : $2\ln3=\ln(3^2)=\ln9$.`,
        String.raw`Donc $\mathrm e^{2\ln3}=\mathrm e^{\ln9}=9$.`,
        String.raw`Autre voie : $\mathrm e^{2\ln3}=\left(\mathrm e^{\ln3}\right)^2=3^2=9$ (règle $\mathrm e^{na}=(\mathrm e^a)^n$).`
      ],
      rule: String.raw`$\mathrm e^{\ln a}=a$ (pour $a\gt0$) et $n\ln a=\ln(a^n)$`,
      pitfall: String.raw`Confondre $\mathrm e^{2\ln3}$ avec $2\times3$.`,
      mistakes: [
        { expr: '6', msg: String.raw`$\mathrm e^{2\ln3}=\left(\mathrm e^{\ln3}\right)^2=3^2$ : le 2 devient un exposant, pas un facteur. Ce n'est pas $2\times3$.` },
        { expr: 'exp(6)', msg: String.raw`$2\ln3=\ln9\approx2{,}2$, ce n'est pas $6$ : on ne remplace pas $\ln3$ par 3.` },
        { expr: 'exp(2)*3', msg: String.raw`$\mathrm e^{a+b}=\mathrm e^a\mathrm e^b$ concerne une somme ; ici l'exposant est un produit $2\times\ln3$, et $\mathrm e^{2\ln3}=(\mathrm e^{\ln3})^2=9$.` }
      ],
      hint: String.raw`$2\ln3=\ln(3^2)$.`,
      explain: String.raw`$2\ln3=\ln9$, donc $\mathrm{e}^{2\ln3}=\mathrm{e}^{\ln 9}=9$.`, level: 1 },
    { id: 'm1-x-038', prompt: String.raw`Résous $\ln(x)+\ln(x+2)=\ln 3$.`,
      answer: '1', vars: [], check: 'set',
      topic: 'Équation avec logarithmes', sec: 'm1-s-explog',
      steps: [
        String.raw`Notion : $\ln$ n'est définie que sur $]0,+\infty[$, donc on fixe d'abord le domaine. Sur ce domaine, $\ln a+\ln b=\ln(ab)$, et comme $\ln$ est strictement croissante, $\ln A=\ln B\Leftrightarrow A=B$.`,
        String.raw`Domaine : il faut $x\gt0$ et $x+2\gt0$, soit $x\gt0$.`,
        String.raw`$\ln x+\ln(x+2)=\ln\big(x(x+2)\big)$, donc l'équation devient $x^2+2x=3\Leftrightarrow x^2+2x-3=0$. $\Delta=4+12=16$, racines $\frac{-2\pm4}{2}$ : $x=1$ ou $x=-3$.`,
        String.raw`On confronte au domaine : $-3\lt0$ est rejeté. Vérification : $\ln1+\ln3=0+\ln3$ ✔. $S=\{1\}$.`
      ],
      rule: String.raw`$\ln a+\ln b=\ln(ab)$ pour $a,b\gt0$ ; $\ln A=\ln B\Leftrightarrow A=B$ (avec $A,B\gt0$)`,
      pitfall: String.raw`Oublier le domaine et garder $x=-3$.`,
      mistakes: [
        { expr: '1;-3', msg: String.raw`$x=-3$ n'est pas dans le domaine ($x\gt0$) : $\ln(-3)$ n'existe pas. Il faut toujours confronter les solutions au domaine.` },
        { expr: '-3', msg: String.raw`$x=-3$ est hors domaine, alors que $x=1$ convient : $\ln1+\ln3=\ln3$.` },
        { expr: '1/2', msg: String.raw`Tu as écrit $\ln x+\ln(x+2)=\ln(x+x+2)$. Or le logarithme transforme un produit en somme : $\ln x+\ln(x+2)=\ln\big(x(x+2)\big)$.` }
      ],
      hint: String.raw`Domaine : $x\gt0$. Puis $\ln a+\ln b=\ln(ab)$.`,
      explain: String.raw`Sur le domaine $x\gt0$ : $x(x+2)=3$, d'où $x=1$ ou $x=-3$ ; seul $x=1$ convient.`, level: 2 },
    { id: 'm1-x-039', prompt: String.raw`Résous $\mathrm{e}^{2x}-3\mathrm{e}^{x}+2=0$.`,
      answer: 'ln(2);0', vars: [], check: 'set',
      topic: 'Équation exponentielle', sec: 'm1-s-explog',
      steps: [
        String.raw`Notion : $\mathrm e^{2x}=\left(\mathrm e^x\right)^2$. On pose donc $X=\mathrm e^x$, toujours strictement positif, pour se ramener à une équation du second degré. Ensuite $\mathrm e^x=a\Leftrightarrow x=\ln a$ (si $a\gt0$).`,
        String.raw`L'équation devient $X^2-3X+2=0$. $\Delta=9-8=1$, $X=\frac{3\pm1}{2}$ : $X=1$ ou $X=2$ (on a aussi $(X-1)(X-2)=0$).`,
        String.raw`Les deux valeurs sont strictement positives, donc acceptables. Retour à $x$ : $\mathrm e^x=1\Leftrightarrow x=\ln1=0$ ; $\mathrm e^x=2\Leftrightarrow x=\ln2$.`,
        String.raw`Vérification pour $x=\ln2$ : $\mathrm e^{2\ln2}-3\mathrm e^{\ln2}+2=4-6+2=0$ ✔ ; pour $x=0$ : $1-3+2=0$ ✔. $S=\{0\,;\ln2\}$.`
      ],
      rule: String.raw`$\mathrm e^{2x}=(\mathrm e^x)^2$ ; poser $X=\mathrm e^x\gt0$ ; $\mathrm e^x=a\Leftrightarrow x=\ln a$ ($a\gt0$)`,
      pitfall: String.raw`Donner les valeurs de $X$ au lieu de celles de $x$.`,
      mistakes: [
        { expr: '1;2', msg: String.raw`1 et 2 sont les valeurs de $X=\mathrm{e}^x$ : il reste à résoudre $\mathrm{e}^x=1$ et $\mathrm{e}^x=2$, d'où $x=0$ et $x=\ln2$.` },
        { expr: 'ln(2)', msg: String.raw`Il manque une solution : $X=1$ donne aussi $\mathrm e^x=1$, soit $x=\ln1=0$.` }
      ],
      hint: String.raw`Pose $X=\mathrm{e}^x\gt0$ : $X^2-3X+2=0$.`,
      explain: String.raw`Avec $X=\mathrm e^x$ : $X=1$ ou $X=2$, donc $x=0$ ou $x=\ln2$.`, level: 3 },
    { id: 'm1-x-040', prompt: String.raw`Résous $2^x=10$ (valeur exacte).`,
      answer: 'ln(10)/ln(2)', vars: [], check: 'value',
      topic: 'Équation exponentielle', sec: 'm1-s-explog',
      steps: [
        String.raw`Notion : quand l'inconnue est en exposant, on applique $\ln$ aux deux membres (ils sont strictement positifs), car $\ln(a^x)=x\ln a$ fait « descendre » l'exposant.`,
        String.raw`$2^x=10\Leftrightarrow\ln(2^x)=\ln10\Leftrightarrow x\ln2=\ln10$.`,
        String.raw`On divise par $\ln2\neq0$ : $x=\dfrac{\ln10}{\ln2}$. Ce quotient ne se simplifie pas.`,
        String.raw`Ordre de grandeur : $2^3=8\lt10\lt16=2^4$, donc $x$ est entre 3 et 4 ; en effet $\frac{\ln10}{\ln2}\approx\frac{2{,}303}{0{,}693}\approx3{,}32$ ✔.`
      ],
      rule: String.raw`$a^x=b\Leftrightarrow x=\frac{\ln b}{\ln a}$ (pour $a\gt0$, $a\neq1$, $b\gt0$) ; attention $\frac{\ln b}{\ln a}\neq\ln\frac ba$`,
      pitfall: String.raw`Simplifier $\frac{\ln10}{\ln2}$ en $\ln5$ : c'est $\ln10-\ln2$ qui vaut $\ln5$, pas le quotient.`,
      mistakes: [
        { expr: 'ln(5)', msg: String.raw`$\ln5=\ln10-\ln2$ : tu as soustrait au lieu de diviser. De $x\ln2=\ln10$, on tire $x=\frac{\ln10}{\ln2}$, et $\frac{\ln a}{\ln b}\neq\ln\frac ab$.` },
        { expr: '5', msg: String.raw`$2^x$ n'est pas $2x$ : l'inconnue est en exposant, il faut passer au logarithme (d'ailleurs $2^5=32\neq10$).` }
      ],
      hint: String.raw`Applique $\ln$ : $\ln(2^x)=x\ln2$.`,
      explain: String.raw`$2^x=10\Leftrightarrow x\ln2=\ln10\Leftrightarrow x=\frac{\ln10}{\ln2}\approx3{,}32$.`, level: 2 }
  ]
});
