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
      explain: String.raw`$\frac23=\frac46$, donc $\frac46+\frac16=\frac56$.`,
      why: { 0: String.raw`On a additionné numérateurs et dénominateurs : il faut d'abord un dénominateur commun.`, 1: String.raw`$\frac12=\frac36$ : tu as additionné $2+1$ sans convertir $\frac23$ en $\frac46$.` }, level: 1 },
    { id: 'm1-q-002', q: String.raw`Pour $b, c, d$ non nuls, que vaut $\dfrac{a/b}{c/d}$ ?`, choices: [String.raw`$\frac{ac}{bd}$`, String.raw`$\frac{ad}{bc}$`, String.raw`$\frac{bc}{ad}$`], answer: 1,
      explain: String.raw`Diviser par $\frac cd$ revient à multiplier par $\frac dc$ : $\frac ab\times\frac dc=\frac{ad}{bc}$.`,
      why: { 0: String.raw`C'est le produit $\frac ab\times\frac cd$, pas le quotient.`, 2: String.raw`C'est l'inverse du bon résultat : on multiplie par l'inverse du dénominateur seulement.` }, level: 1 },
    { id: 'm1-q-003', q: String.raw`Que vaut $(2^3)^2$ ?`, choices: [String.raw`$2^5$`, String.raw`$2^9$`, String.raw`$2^6$`], answer: 2,
      explain: String.raw`$(a^m)^n=a^{mn}$ : $(2^3)^2=2^6=64$ (en effet $8^2=64$).`,
      why: { 0: String.raw`On additionne les exposants pour un produit $2^3\times 2^2$, pas pour une puissance de puissance.`, 1: String.raw`$2^9=2^{(3^2)}$ : ici on multiplie les exposants, $3\times 2=6$.` }, level: 1 },
    { id: 'm1-q-004', q: String.raw`Que vaut $\sqrt{9+16}$ ?`, choices: [String.raw`$7$`, String.raw`$5$`, String.raw`$25$`], answer: 1,
      explain: String.raw`$\sqrt{9+16}=\sqrt{25}=5$.`,
      why: { 0: String.raw`$\sqrt9+\sqrt{16}=7$, mais la racine d'une somme n'est pas la somme des racines.`, 2: String.raw`$25$ est la valeur de $9+16$ : il reste à prendre la racine carrée.` }, level: 1 },
    { id: 'm1-q-005', q: String.raw`Pour tout réel $x$, $\sqrt{x^2}$ est égal à :`, choices: [String.raw`$x$`, String.raw`$-x$`, String.raw`$|x|$`, String.raw`$\pm x$`], answer: 2,
      explain: String.raw`$\sqrt{x^2}$ est le nombre positif dont le carré vaut $x^2$ : c'est $|x|$.`,
      why: { 0: String.raw`Faux pour $x\lt0$ : $\sqrt{(-3)^2}=3\neq-3$.`, 1: String.raw`Faux pour $x\gt0$ : $\sqrt{2^2}=2$.`, 3: String.raw`Une racine carrée désigne un nombre unique et positif, pas « plus ou moins ».` }, level: 2 },
    { id: 'm1-q-006', q: String.raw`Simplifier $\sqrt{12}$.`, choices: [String.raw`$2\sqrt3$`, String.raw`$4\sqrt3$`, String.raw`$3\sqrt2$`, String.raw`$6\sqrt2$`], answer: 0,
      explain: String.raw`$\sqrt{12}=\sqrt{4\times3}=\sqrt4\,\sqrt3=2\sqrt3$.`,
      why: { 1: String.raw`$12=4\times3$ mais $\sqrt4=2$, pas 4.`, 2: String.raw`$3\sqrt2=\sqrt{18}$.`, 3: String.raw`$6\sqrt2=\sqrt{72}$.` }, level: 2 },
    { id: 'm1-q-007', q: String.raw`Que vaut $\frac{1}{\sqrt5-2}$ ?`, choices: [String.raw`$\sqrt5-2$`, String.raw`$\frac{\sqrt5+2}{3}$`, String.raw`$\frac{\sqrt5+2}{21}$`, String.raw`$\sqrt5+2$`], answer: 3,
      explain: String.raw`$\frac{1}{\sqrt5-2}=\frac{\sqrt5+2}{(\sqrt5-2)(\sqrt5+2)}=\frac{\sqrt5+2}{5-4}=\sqrt5+2$.`,
      why: { 0: String.raw`L'inverse de $\sqrt5-2$ n'est pas lui-même : multiplie par le conjugué $\sqrt5+2$.`, 1: String.raw`Le dénominateur vaut $(\sqrt5)^2-2^2=5-4=1$, et non $5-2$.`, 2: String.raw`$(\sqrt5)^2=5$, pas $25$.` }, level: 2 },
    { id: 'm1-q-008', q: String.raw`Que vaut $|-3|+|2-5|$ ?`, choices: [String.raw`$0$`, String.raw`$6$`, String.raw`$-6$`], answer: 1,
      explain: String.raw`$|-3|=3$ et $|2-5|=|-3|=3$ : le total vaut $6$.`,
      why: { 0: String.raw`$|2-5|=3$ et non $-3$ : une valeur absolue est toujours positive.`, 2: String.raw`Une somme de valeurs absolues est positive.` }, level: 1 },
    { id: 'm1-q-009', q: String.raw`L'ensemble des réels $x$ tels que $|x-2|\lt 3$ est :`, choices: [String.raw`$]-5,1[$`, String.raw`$]-1,5[$`, String.raw`$]-1,5]$`, String.raw`$]-\infty,5[$`], answer: 1,
      explain: String.raw`$|x-2|\lt3\Leftrightarrow -3\lt x-2\lt 3\Leftrightarrow -1\lt x\lt 5$ : ce sont les réels à distance strictement inférieure à 3 de 2.`,
      why: { 0: String.raw`Ce serait $|x+2|\lt3$ (distance à $-2$).`, 2: String.raw`L'inégalité est stricte : $5$ est exclu.`, 3: String.raw`Il manque la condition $x-2\gt-3$, c'est-à-dire $x\gt-1$.` }, level: 2 },
    { id: 'm1-q-010', q: String.raw`Développer $(a-b)^2$.`, choices: [String.raw`$a^2-b^2$`, String.raw`$a^2+2ab-b^2$`, String.raw`$a^2-2ab+b^2$`, String.raw`$a^2-2ab-b^2$`], answer: 2,
      explain: String.raw`$(a-b)^2=(a-b)(a-b)=a^2-2ab+b^2$.`,
      why: { 0: String.raw`C'est $(a-b)(a+b)$ ; il manque le double produit.`, 1: String.raw`Le double produit vaut $-2ab$ et $b^2$ est positif (c'est un carré).`, 3: String.raw`$(-b)^2=+b^2$.` }, level: 1 },
    { id: 'm1-q-011', q: String.raw`Développer $(a+b)^3$.`, choices: [String.raw`$a^3+3a^2b+3ab^2+b^3$`, String.raw`$a^3+b^3$`, String.raw`$a^3+3ab+b^3$`, String.raw`$a^3+2a^2b+2ab^2+b^3$`], answer: 0,
      explain: String.raw`$(a+b)^3=(a+b)(a^2+2ab+b^2)=a^3+3a^2b+3ab^2+b^3$ (coefficients 1, 3, 3, 1).`,
      why: { 1: String.raw`Oubli des termes croisés : $(a+b)^3\neq a^3+b^3$.`, 2: String.raw`Les termes croisés sont $3a^2b$ et $3ab^2$, de degré 3.`, 3: String.raw`Les coefficients sont 1, 3, 3, 1 (ligne 3 du triangle de Pascal).` }, level: 2 },
    { id: 'm1-q-012', q: String.raw`Factoriser $a^3-b^3$.`, choices: [String.raw`$(a-b)(a^2-ab+b^2)$`, String.raw`$(a-b)^3$`, String.raw`$(a-b)(a+b)^2$`, String.raw`$(a-b)(a^2+ab+b^2)$`], answer: 3,
      explain: String.raw`$(a-b)(a^2+ab+b^2)=a^3+a^2b+ab^2-a^2b-ab^2-b^3=a^3-b^3$.`,
      why: { 0: String.raw`Mauvais signe devant $ab$ : la forme $a^2-ab+b^2$ apparaît dans $a^3+b^3=(a+b)(a^2-ab+b^2)$.`, 1: String.raw`$(a-b)^3=a^3-3a^2b+3ab^2-b^3\neq a^3-b^3$.`, 2: String.raw`$(a-b)(a+b)^2=(a^2-b^2)(a+b)=a^3+a^2b-ab^2-b^3$.` }, level: 2 },
    { id: 'm1-q-013', q: String.raw`Quelle est la ligne $n=5$ du triangle de Pascal ?`, choices: [String.raw`$1\ \ 4\ \ 6\ \ 4\ \ 1$`, String.raw`$1\ \ 5\ \ 10\ \ 5\ \ 1$`, String.raw`$1\ \ 5\ \ 10\ \ 10\ \ 5\ \ 1$`, String.raw`$1\ \ 5\ \ 15\ \ 15\ \ 5\ \ 1$`], answer: 2,
      explain: String.raw`À partir de la ligne 4 ($1\,4\,6\,4\,1$), on ajoute les voisins : $1,\ 1+4,\ 4+6,\ 6+4,\ 4+1,\ 1$.`,
      why: { 0: String.raw`C'est la ligne $n=4$.`, 1: String.raw`La ligne $n$ contient $n+1=6$ coefficients.`, 3: String.raw`$\binom52=\frac{5\times4}{2}=10$ (obtenu par $4+6$), pas 15.` }, level: 1 },
    { id: 'm1-q-014', q: String.raw`Que vaut $\binom{6}{2}$ ?`, choices: [String.raw`$12$`, String.raw`$15$`, String.raw`$30$`, String.raw`$720$`], answer: 1,
      explain: String.raw`$\binom62=\frac{6!}{2!\,4!}=\frac{6\times5}{2}=15$.`,
      why: { 0: String.raw`$6\times2$ ne correspond à aucune formule : $\binom n2=\frac{n(n-1)}{2}$.`, 2: String.raw`$6\times5=30$ : il faut encore diviser par $2!=2$.`, 3: String.raw`$720=6!$.` }, level: 1 },
    { id: 'm1-q-015', q: String.raw`Quel est le coefficient de $x^2$ dans le développement de $(x+3)^4$ ?`, choices: [String.raw`$6$`, String.raw`$18$`, String.raw`$54$`, String.raw`$81$`], answer: 2,
      explain: String.raw`Terme en $x^2$ : $\binom42x^2\,3^{2}=6\times9\,x^2=54x^2$.`,
      why: { 0: String.raw`$\binom42=6$, mais il faut multiplier par $3^{4-2}=9$.`, 1: String.raw`$3^2=9$, pas $3$ : $6\times 9=54$.`, 3: String.raw`$81=3^4$ est le terme constant.` }, level: 3 },
    { id: 'm1-q-016', q: String.raw`Que vaut $\sum_{k=0}^{n}\binom{n}{k}$ ?`, choices: [String.raw`$n!$`, String.raw`$2^n$`, String.raw`$n^2$`, String.raw`$2n$`], answer: 1,
      explain: String.raw`Binôme avec $a=b=1$ : $(1+1)^n=\sum_{k=0}^n\binom nk=2^n$. Ex. : $1+3+3+1=8=2^3$.`,
      why: { 0: String.raw`Pour $n=3$ : $1+3+3+1=8$ alors que $3!=6$.`, 2: String.raw`Pour $n=3$ : $8\neq9$.`, 3: String.raw`Pour $n=3$ : $8\neq6$.` }, level: 2 },
    { id: 'm1-q-017', q: String.raw`Quelles sont les racines de $x^2-4x+1$ ?`, choices: [String.raw`$4\pm2\sqrt3$`, String.raw`$-2\pm\sqrt3$`, String.raw`$2\pm\sqrt{12}$`, String.raw`$2\pm\sqrt3$`], answer: 3,
      explain: String.raw`$\Delta=16-4=12$, $\sqrt{12}=2\sqrt3$, donc $x=\frac{4\pm2\sqrt3}{2}=2\pm\sqrt3$.`,
      why: { 0: String.raw`Il faut diviser tout le numérateur par $2a=2$.`, 1: String.raw`Le numérateur commence par $-b=+4$.`, 2: String.raw`$\frac{\sqrt{12}}{2}=\frac{2\sqrt3}{2}=\sqrt3$ : la racine aussi est divisée par 2.` }, level: 2 },
    { id: 'm1-q-018', q: String.raw`Forme canonique de $x^2-6x+11$ :`, choices: [String.raw`$(x+3)^2+2$`, String.raw`$(x-3)^2+2$`, String.raw`$(x-3)^2+11$`, String.raw`$(x-6)^2-25$`], answer: 1,
      explain: String.raw`$x^2-6x=(x-3)^2-9$, donc $x^2-6x+11=(x-3)^2+2$. Minimum $2$ atteint en $x=3$.`,
      why: { 0: String.raw`$(x+3)^2=x^2+6x+9$ : le signe est inversé.`, 2: String.raw`$(x-3)^2=x^2-6x+9$ : il faut retrancher ce 9, d'où $11-9=2$.`, 3: String.raw`On prend la moitié du coefficient de $x$ : $x^2-6x=(x-3)^2-9$.` }, level: 2 },
    { id: 'm1-q-019', q: String.raw`Si $x_1, x_2$ sont les racines de $2x^2-6x+1$, que vaut $x_1+x_2$ ?`, choices: [String.raw`$-3$`, String.raw`$\frac12$`, String.raw`$3$`, String.raw`$6$`], answer: 2,
      explain: String.raw`$\Delta=36-8=28\gt0$ et $x_1+x_2=-\frac ba=-\frac{-6}{2}=3$ (le produit vaut $\frac ca=\frac12$).`,
      why: { 0: String.raw`Erreur de signe : $S=-\frac ba$ avec $b=-6$.`, 1: String.raw`C'est le produit $\frac ca$.`, 3: String.raw`Il faut diviser par $a=2$.` }, level: 2 },
    { id: 'm1-q-020', q: String.raw`Sur $]1,3[$, le trinôme $-x^2+4x-3$ est :`, choices: [String.raw`strictement positif`, String.raw`strictement négatif`, String.raw`positif puis négatif (il change de signe en $2$)`], answer: 0,
      explain: String.raw`$-x^2+4x-3=-(x-1)(x-3)$ : racines 1 et 3. Entre les racines, il est du signe de $-a=+1$. Contrôle : en $x=2$, $-4+8-3=1\gt0$.`,
      why: { 1: String.raw`Le trinôme a le signe de $a=-1$ à l'extérieur des racines, et le signe opposé (positif) entre elles.`, 2: String.raw`Un trinôme ne change de signe qu'en ses racines, ici 1 et 3.` }, level: 2 },
    { id: 'm1-q-021', q: String.raw`Le trinôme $ax^2+bx+c$ ($a\neq0$) est strictement du signe de $a$ pour tout réel $x$ si et seulement si :`, choices: [String.raw`$\Delta\leq 0$`, String.raw`$\Delta\lt 0$`, String.raw`$\Delta\gt 0$`, String.raw`$c\gt 0$`], answer: 1,
      explain: String.raw`Forme canonique $a\left[(x-\alpha)^2-\frac{\Delta}{4a^2}\right]$ : si $\Delta\lt0$, le crochet est strictement positif, donc le trinôme est du signe de $a$ ; sinon il s'annule.`,
      why: { 0: String.raw`Si $\Delta=0$, le trinôme s'annule en la racine double : il n'est pas strictement du signe de $a$ partout.`, 2: String.raw`Avec deux racines, il prend le signe opposé entre elles.`, 3: String.raw`Contre-exemple : $x^2-3x+1$ a $c\gt0$ mais vaut $-1$ en $x=1$.` }, level: 3 },
    { id: 'm1-q-022', q: String.raw`Solutions de $(x-2)(3x+1)=0$ :`, choices: [String.raw`$2$ et $-3$`, String.raw`$-2$ et $\frac13$`, String.raw`$2$ et $-\frac13$`, String.raw`$2$ et $\frac13$`], answer: 2,
      explain: String.raw`Produit nul : $x-2=0$ ou $3x+1=0$, soit $x=2$ ou $x=-\frac13$.`,
      why: { 0: String.raw`$3x+1=0\Leftrightarrow x=-\frac13$ : on divise par 3.`, 1: String.raw`Signes inversés : on résout $x-2=0$, donc $x=+2$.`, 3: String.raw`$3x=-1$ donne $x=-\frac13$ (signe moins).` }, level: 1 },
    { id: 'm1-q-023', q: String.raw`L'inéquation $-2x+6\gt 0$ équivaut à :`, choices: [String.raw`$x\gt 3$`, String.raw`$x\lt 3$`, String.raw`$x\gt -3$`], answer: 1,
      explain: String.raw`$-2x+6\gt0\Leftrightarrow -2x\gt-6\Leftrightarrow x\lt3$ : en divisant par $-2\lt0$, le sens change.`,
      why: { 0: String.raw`En divisant par $-2$ (négatif), il faut changer le sens de l'inégalité.`, 2: String.raw`$-2x\gt-6$ donne $x\lt3$ : erreur de signe sur 6 et oubli du changement de sens.` }, level: 1 },
    { id: 'm1-q-024', q: String.raw`Ensemble des solutions de $\frac{x-1}{x+2}\leq 0$ :`, choices: [String.raw`$[-2,1]$`, String.raw`$]-2,1]$`, String.raw`$]-\infty,-2[\cup[1,+\infty[$`, String.raw`$]-2,1[$`], answer: 1,
      explain: String.raw`Tableau de signes : le quotient est négatif entre $-2$ et $1$, nul en $1$ (inclus car inégalité large), non défini en $-2$ (exclu).`,
      why: { 0: String.raw`$-2$ est une valeur interdite : elle est toujours exclue.`, 2: String.raw`C'est l'ensemble où le quotient est positif ou nul.`, 3: String.raw`En $x=1$ le quotient vaut 0 et l'inégalité est large : $1$ est solution.` }, level: 2 },
    { id: 'm1-q-025', q: String.raw`Où est l'erreur dans : « $\frac1x\lt 2\Leftrightarrow 1\lt 2x\Leftrightarrow x\gt\frac12$ » ?`, choices: [String.raw`Il n'y a pas d'erreur`, String.raw`Multiplier par $x$ ne conserve le sens que si $x\gt0$`, String.raw`Il fallait d'abord diviser par 2`], answer: 1,
      explain: String.raw`Pour $x\lt0$, $\frac1x\lt0\lt2$ : tous les négatifs sont solutions. Bonne réponse : $S=]-\infty,0[\,\cup\,]\frac12,+\infty[$ (ou écrire $\frac{1-2x}{x}\lt0$ et faire un tableau de signes).`,
      why: { 0: String.raw`Pour $x=-1$ : $\frac1{-1}=-1\lt2$ est vrai, mais $x\gt\frac12$ est faux : des solutions ont été perdues.`, 2: String.raw`Diviser par 2 ne règle rien : le problème est le signe inconnu de $x$.` }, level: 2 },
    { id: 'm1-q-026', q: String.raw`Solution du système $\begin{cases}x+y=5\\x-y=1\end{cases}$ :`, choices: [String.raw`$(2,3)$`, String.raw`$(3,2)$`, String.raw`$(4,1)$`], answer: 1,
      explain: String.raw`En additionnant les lignes : $2x=6$, $x=3$, puis $y=5-3=2$.`,
      why: { 0: String.raw`Vérifie la 2e équation : $2-3=-1\neq1$ ; $x$ et $y$ sont inversés.`, 2: String.raw`$4-1=3\neq1$.` }, level: 1 },
    { id: 'm1-q-027', q: String.raw`Le système $\begin{cases}ax+by=e\\cx+dy=f\end{cases}$ admet une unique solution si et seulement si :`, choices: [String.raw`$ad+bc\neq 0$`, String.raw`$ab-cd\neq 0$`, String.raw`$ad-bc\neq 0$`, String.raw`$e\neq0$ et $f\neq0$`], answer: 2,
      explain: String.raw`Le déterminant $\begin{vmatrix}a&b\\c&d\end{vmatrix}=ad-bc$ doit être non nul ; sinon il y a zéro ou une infinité de solutions.`,
      why: { 0: String.raw`Le déterminant est $ad-bc$, avec un signe moins.`, 1: String.raw`Le déterminant croise les coefficients : $a$ avec $d$, $b$ avec $c$.`, 3: String.raw`Le second membre n'intervient pas dans l'unicité.` }, level: 2 },
    { id: 'm1-q-028', q: String.raw`Que vaut $\sum_{k=1}^{10}k$ ?`, choices: [String.raw`$45$`, String.raw`$50$`, String.raw`$110$`, String.raw`$55$`], answer: 3,
      explain: String.raw`$\frac{n(n+1)}{2}=\frac{10\times11}{2}=55$.`,
      why: { 0: String.raw`$45=\sum_{k=1}^{9}k$ : un terme oublié.`, 1: String.raw`La formule est $\frac{n(n+1)}{2}$, pas $\frac{n\times n}{2}$.`, 2: String.raw`Il faut diviser par 2.` }, level: 1 },
    { id: 'm1-q-029', q: String.raw`Que vaut $\sum_{k=0}^{n}2^k$ ?`, choices: [String.raw`$2^n-1$`, String.raw`$2^{n+1}-1$`, String.raw`$2^{n+1}$`, String.raw`$\frac{1-2^n}{1-2}$`], answer: 1,
      explain: String.raw`Somme géométrique : $\frac{1-2^{n+1}}{1-2}=2^{n+1}-1$. Contrôle : $1+2+4=7=2^3-1$.`,
      why: { 0: String.raw`De $0$ à $n$ il y a $n+1$ termes : l'exposant est $n+1$.`, 2: String.raw`Pour $n=0$, la somme vaut $1$, pas $2$.`, 3: String.raw`Mauvais nombre de termes : c'est $\frac{1-2^{n+1}}{1-2}$.` }, level: 2 },
    { id: 'm1-q-030', q: String.raw`Combien de termes contient $\sum_{k=3}^{n}u_k$ (avec $n\geq3$) ?`, choices: [String.raw`$n-3$`, String.raw`$n-2$`, String.raw`$n$`], answer: 1,
      explain: String.raw`De $p$ à $n$ il y a $n-p+1$ termes : $n-3+1=n-2$. Ex. : $n=5$ donne $u_3,u_4,u_5$.`,
      why: { 0: String.raw`On oublie de compter le premier terme : de $p$ à $n$ il y a $n-p+1$ termes.`, 2: String.raw`$n$ termes, c'est de $k=1$ à $n$.` }, level: 2 },
    { id: 'm1-q-031', q: String.raw`Pour $a, b\gt 0$, $\ln(ab)$ est égal à :`, choices: [String.raw`$\ln a\times\ln b$`, String.raw`$\ln a+\ln b$`, String.raw`$a\ln b$`], answer: 1,
      explain: String.raw`Propriété fondamentale : le logarithme transforme les produits en sommes.`,
      why: { 0: String.raw`$\ln$ transforme un produit en somme, pas en produit.`, 2: String.raw`Confusion avec $\ln(b^a)=a\ln b$.` }, level: 1 },
    { id: 'm1-q-032', q: String.raw`Que vaut $\ln(\mathrm{e}^3)-\ln\left(\sqrt{\mathrm{e}}\right)$ ?`, choices: [String.raw`$\frac52$`, String.raw`$\frac72$`, String.raw`$6$`, String.raw`$\frac32$`], answer: 0,
      explain: String.raw`$\ln(\mathrm e^3)=3$ et $\ln\sqrt{\mathrm e}=\ln\left(\mathrm e^{1/2}\right)=\frac12$, d'où $3-\frac12=\frac52$.`,
      why: { 1: String.raw`On soustrait $\ln\sqrt{\mathrm e}=\frac12$ : $3-\frac12$ et non $3+\frac12$.`, 2: String.raw`$\ln a-\ln b=\ln\frac ab$, ce n'est pas $\frac{\ln a}{\ln b}=\frac{3}{1/2}$.`, 3: String.raw`On a multiplié $3\times\frac12$ au lieu de soustraire.` }, level: 2 },
    { id: 'm1-q-033', q: String.raw`$(\mathrm{e}^{x})^2$ est égal à :`, choices: [String.raw`$\mathrm{e}^{x^2}$`, String.raw`$\mathrm{e}^{2x}$`, String.raw`$2\mathrm{e}^{x}$`], answer: 1,
      explain: String.raw`$(\mathrm e^a)^n=\mathrm e^{na}$, donc $(\mathrm e^x)^2=\mathrm e^x\times\mathrm e^x=\mathrm e^{2x}$.`,
      why: { 0: String.raw`$(\mathrm e^x)^2=\mathrm e^{x+x}$ : on multiplie l'exposant par 2, on ne l'élève pas au carré.`, 2: String.raw`Élever au carré n'est pas multiplier par 2.` }, level: 1 },
    { id: 'm1-q-034', q: String.raw`$\ln x\lt 0$ équivaut à :`, choices: [String.raw`$x\lt 0$`, String.raw`$0\lt x\lt 1$`, String.raw`$x\lt 1$`, String.raw`$0\lt x\lt \mathrm{e}$`], answer: 1,
      explain: String.raw`$\ln x\lt 0=\ln1\Leftrightarrow 0\lt x\lt1$ ($\ln$ est strictement croissante et définie sur $]0,+\infty[$).`,
      why: { 0: String.raw`$\ln$ n'est pas définie pour $x\leq0$.`, 2: String.raw`Oubli du domaine : il faut aussi $x\gt0$.`, 3: String.raw`C'est $\ln x\lt 1$ ; ici on compare à $0=\ln 1$.` }, level: 2 },
    { id: 'm1-q-035', q: String.raw`Pour quelles valeurs de $m$ l'équation $x^2+mx+1=0$ a-t-elle une racine double ?`, choices: [String.raw`$m=2$ seulement`, String.raw`$m=2$ ou $m=-2$`, String.raw`$m=4$ ou $m=-4$`, String.raw`$m=4$ seulement`], answer: 1,
      explain: String.raw`Racine double $\Leftrightarrow\Delta=m^2-4=0\Leftrightarrow m=\pm2$ (racine double $-1$ pour $m=2$, $1$ pour $m=-2$).`,
      why: { 0: String.raw`$m=-2$ convient aussi, puisque $(-2)^2=4$.`, 2: String.raw`$\Delta=m^2-4$ s'annule pour $m^2=4$, pas pour $m^2=16$.`, 3: String.raw`$m^2=4$ donne $m=\pm2$.` }, level: 3 }
  ],

  /* ============================== EXERCICES ============================== */
  exercises: [
    { id: 'm1-x-001', prompt: String.raw`Calcule la valeur exacte de $\frac{1}{3}+\frac{1}{4}$ (fraction irréductible).`,
      answer: '7/12', vars: [], check: 'value',
      mistakes: [
        { expr: '2/7', msg: String.raw`On n'additionne pas numérateurs et dénominateurs entre eux : il faut d'abord un dénominateur commun.` },
        { expr: '1/12', msg: String.raw`Tu as multiplié les fractions ($\frac13\times\frac14$) au lieu de les additionner.` }
      ],
      hint: String.raw`Dénominateur commun : 12.`,
      explain: String.raw`$\frac13+\frac14=\frac{4}{12}+\frac{3}{12}=\frac{7}{12}$.`, level: 1 },
    { id: 'm1-x-002', prompt: String.raw`Simplifie $\frac{x^5\,x^{-2}}{x^4}$ pour $x\neq 0$ (écris le résultat comme une puissance de $x$).`,
      answer: 'x^(-1)', vars: ['x'], check: 'expr', domain: [0.4, 3],
      mistakes: [
        { expr: 'x^3', msg: String.raw`$x^{-2}$ apporte $-2$ à l'exposant : $5+(-2)-4=-1$.` },
        { expr: 'x^(-14)', msg: String.raw`Pour un produit de puissances de même base, on additionne les exposants ($x^5x^{-2}=x^3$), on ne les multiplie pas.` }
      ],
      hint: String.raw`$a^ma^n=a^{m+n}$ et $\frac{a^m}{a^n}=a^{m-n}$.`,
      explain: String.raw`$x^5x^{-2}=x^{3}$, puis $\frac{x^3}{x^4}=x^{3-4}=x^{-1}=\frac1x$.`, level: 1 },
    { id: 'm1-x-003', prompt: String.raw`Écris $\sqrt{50}+\sqrt{18}-\sqrt{8}$ sous la forme $a\sqrt2$ (donne la valeur exacte).`,
      answer: '6*sqrt(2)', vars: [], check: 'value',
      mistakes: [
        { expr: 'sqrt(60)', msg: String.raw`$\sqrt a+\sqrt b\neq\sqrt{a+b}$ : on extrait d'abord les carrés parfaits de chaque racine.` },
        { expr: '10*sqrt(2)', msg: String.raw`$\sqrt8=2\sqrt2$ est soustrait, pas ajouté.` }
      ],
      hint: String.raw`$50=25\times2$, $18=9\times2$, $8=4\times2$.`,
      explain: String.raw`$\sqrt{50}=5\sqrt2$, $\sqrt{18}=3\sqrt2$, $\sqrt8=2\sqrt2$, donc la somme vaut $(5+3-2)\sqrt2=6\sqrt2$.`, level: 1 },
    { id: 'm1-x-004', prompt: String.raw`Donne la valeur exacte de $\frac{1}{\sqrt3-1}$ sans racine au dénominateur.`,
      answer: '(sqrt(3)+1)/2', vars: [], check: 'value',
      mistakes: [
        { expr: 'sqrt(3)+1', msg: String.raw`Le dénominateur devient $(\sqrt3)^2-1^2=3-1=2$ : il faut diviser par 2.` },
        { expr: '(sqrt(3)+1)/4', msg: String.raw`$(\sqrt3-1)(\sqrt3+1)=3-1=2$, pas $3+1$.` },
        { expr: '(sqrt(3)-1)/2', msg: String.raw`On multiplie par le conjugué $\sqrt3+1$ : c'est lui qui apparaît au numérateur.` }
      ],
      hint: String.raw`Multiplie en haut et en bas par le conjugué $\sqrt3+1$.`,
      explain: String.raw`$\frac{1}{\sqrt3-1}=\frac{\sqrt3+1}{(\sqrt3-1)(\sqrt3+1)}=\frac{\sqrt3+1}{3-1}=\frac{\sqrt3+1}{2}$.`, level: 2 },
    { id: 'm1-x-005', prompt: String.raw`Simplifie $\sqrt{(x-1)^2}$ pour $x$ réel quelconque.`,
      answer: 'abs(x-1)', vars: ['x'], check: 'expr',
      mistakes: [
        { expr: 'x-1', msg: String.raw`Faux pour $x\lt1$ : une racine carrée est positive. $\sqrt{X^2}=|X|$.` },
        { expr: 'abs(x)-1', msg: String.raw`$|x-1|\neq|x|-1$ (essaie $x=0$).` }
      ],
      hint: String.raw`$\sqrt{X^2}=|X|$.`,
      explain: String.raw`Avec $X=x-1$ : $\sqrt{(x-1)^2}=|x-1|$, qui vaut $x-1$ si $x\geq1$ et $1-x$ sinon.`, level: 2 },
    { id: 'm1-x-006', prompt: String.raw`Résous dans $\mathbb{R}$ : $|2x-3|=5$.`,
      answer: '4;-1', vars: [], check: 'set',
      mistakes: [
        { expr: '4', msg: String.raw`Il y a deux cas : $2x-3=5$ ou $2x-3=-5$.` },
        { expr: '4;1', msg: String.raw`$2x-3=-5\Leftrightarrow 2x=-2\Leftrightarrow x=-1$.` }
      ],
      hint: String.raw`$|X|=5\Leftrightarrow X=5$ ou $X=-5$.`,
      explain: String.raw`$2x-3=5\Leftrightarrow x=4$ ; $2x-3=-5\Leftrightarrow x=-1$. Donc $S=\{-1\,;\,4\}$.`, level: 1 },
    { id: 'm1-x-007', prompt: String.raw`L'ensemble des solutions de $|x+1|\leq 3$ est un intervalle $[a,b]$. Donne $a;b$.`,
      answer: '-4;2', vars: [], check: 'tuple',
      mistakes: [
        { expr: '-2;4', msg: String.raw`$|x+1|$ est la distance de $x$ à $-1$ (et non à $1$) : l'intervalle est centré en $-1$.` }
      ],
      hint: String.raw`$|X|\leq3\Leftrightarrow-3\leq X\leq3$.`,
      explain: String.raw`$-3\leq x+1\leq3\Leftrightarrow-4\leq x\leq2$ : $S=[-4,2]$ (centre $-1$, rayon 3).`, level: 2 },
    { id: 'm1-x-008', prompt: String.raw`Développe et réduis $(2x-3)^2$.`,
      answer: '4*x^2-12*x+9', vars: ['x'], check: 'expr', form: 'expanded',
      mistakes: [
        { expr: '4*x^2-9', msg: String.raw`Tu as oublié le double produit $-2\times2x\times3=-12x$.` },
        { expr: '4*x^2-6*x+9', msg: String.raw`Le double produit vaut $2\times(2x)\times3=12x$, pas $6x$.` },
        { expr: '2*x^2-12*x+9', msg: String.raw`$(2x)^2=4x^2$ : le coefficient aussi est élevé au carré.` }
      ],
      hint: String.raw`$(a-b)^2=a^2-2ab+b^2$ avec $a=2x$, $b=3$.`,
      explain: String.raw`$(2x-3)^2=(2x)^2-2\times2x\times3+3^2=4x^2-12x+9$.`, level: 1 },
    { id: 'm1-x-009', prompt: String.raw`Développe et réduis $(x+2)^3$.`,
      answer: 'x^3+6*x^2+12*x+8', vars: ['x'], check: 'expr', form: 'expanded',
      mistakes: [
        { expr: 'x^3+8', msg: String.raw`$(a+b)^3\neq a^3+b^3$ : il manque $3a^2b+3ab^2$.` },
        { expr: 'x^3+3*x^2+3*x+8', msg: String.raw`Les coefficients 1, 3, 3, 1 multiplient $a^{3-k}b^k$ : $3x^2\times2=6x^2$ et $3x\times2^2=12x$.` }
      ],
      hint: String.raw`$(a+b)^3=a^3+3a^2b+3ab^2+b^3$.`,
      explain: String.raw`$(x+2)^3=x^3+3x^2\cdot2+3x\cdot2^2+2^3=x^3+6x^2+12x+8$.`, level: 2 },
    { id: 'm1-x-010', prompt: String.raw`Développe $(a+b)^4$ (variables $a$ et $b$).`,
      answer: 'a^4+4*a^3*b+6*a^2*b^2+4*a*b^3+b^4', vars: ['a', 'b'], check: 'expr', form: 'expanded',
      mistakes: [
        { expr: 'a^4+b^4', msg: String.raw`Il manque tous les termes croisés : utilise le binôme de Newton.` },
        { expr: 'a^4+4*a^3*b+4*a^2*b^2+4*a*b^3+b^4', msg: String.raw`Ligne 4 du triangle de Pascal : 1, 4, 6, 4, 1 (le coefficient central est 6).` }
      ],
      hint: String.raw`Ligne 4 du triangle de Pascal : 1, 4, 6, 4, 1.`,
      explain: String.raw`$(a+b)^4=\sum_{k=0}^4\binom4ka^{4-k}b^k=a^4+4a^3b+6a^2b^2+4ab^3+b^4$.`, level: 2 },
    { id: 'm1-x-011', prompt: String.raw`Quel est le coefficient de $x^3$ dans le développement de $(1+x)^7$ ?`,
      answer: '35', vars: [], check: 'value',
      mistakes: [
        { expr: '21', msg: String.raw`$\binom72=21$ ; il faut $\binom73$ pour la puissance 3.` },
        { expr: '210', msg: String.raw`Tu as oublié de diviser par $3!=6$ : $\frac{7\times6\times5}{6}=35$.` }
      ],
      hint: String.raw`Le terme en $x^k$ de $(1+x)^n$ est $\binom nk x^k$.`,
      explain: String.raw`$\binom73=\frac{7\times6\times5}{3\times2\times1}=35$.`, level: 2 },
    { id: 'm1-x-012', prompt: String.raw`Quel est le coefficient de $x^2$ dans le développement de $(2x-1)^5$ ?`,
      answer: '-40', vars: [], check: 'value',
      mistakes: [
        { expr: '40', msg: String.raw`Le facteur $(-1)^{5-2}=(-1)^3=-1$ donne un signe moins.` },
        { expr: '-20', msg: String.raw`$(2x)^2=4x^2$ : n'oublie pas d'élever le 2 au carré.` }
      ],
      hint: String.raw`Terme général : $\binom5k(2x)^k(-1)^{5-k}$ ; prends $k=2$.`,
      explain: String.raw`$\binom52(2x)^2(-1)^3=10\times4x^2\times(-1)=-40x^2$.`, level: 3 },
    { id: 'm1-x-013', prompt: String.raw`Factorise $4x^2-25$.`,
      answer: '(2*x-5)*(2*x+5)', vars: ['x'], check: 'expr', form: 'factored',
      mistakes: [
        { expr: '(2*x-5)^2', msg: String.raw`$(2x-5)^2=4x^2-20x+25$ ; ici c'est une différence de carrés $a^2-b^2=(a-b)(a+b)$.` },
        { expr: '(4*x-5)*(4*x+5)', msg: String.raw`$4x^2=(2x)^2$ : prends $a=2x$, pas $4x$.` }
      ],
      hint: String.raw`$a^2-b^2=(a-b)(a+b)$ avec $a=2x$ et $b=5$.`,
      explain: String.raw`$4x^2-25=(2x)^2-5^2=(2x-5)(2x+5)$.`, level: 1 },
    { id: 'm1-x-014', prompt: String.raw`Factorise $x^2-6x+9$.`,
      answer: '(x-3)^2', vars: ['x'], check: 'expr', form: 'factored',
      mistakes: [
        { expr: '(x+3)^2', msg: String.raw`$(x+3)^2=x^2+6x+9$ : ici le double produit est négatif, c'est $(a-b)^2$.` },
        { expr: '(x-3)*(x+3)', msg: String.raw`$(x-3)(x+3)=x^2-9$.` }
      ],
      hint: String.raw`Reconnais $a^2-2ab+b^2$.`,
      explain: String.raw`$x^2-6x+9=x^2-2\times x\times3+3^2=(x-3)^2$.`, level: 1 },
    { id: 'm1-x-015', prompt: String.raw`Factorise $(x+1)(2x-3)-(x+1)(x+4)$.`,
      answer: '(x+1)*(x-7)', vars: ['x'], check: 'expr', form: 'factored',
      mistakes: [
        { expr: '(x+1)*(3*x+1)', msg: String.raw`Le signe moins s'applique à toute la parenthèse : $(2x-3)-(x+4)=x-7$.` },
        { expr: '(x+1)*(x+1)', msg: String.raw`Tu n'as changé que le signe de $x$ : $-(x+4)=-x-4$.` }
      ],
      hint: String.raw`Facteur commun $(x+1)$ ; attention au signe moins devant $(x+4)$.`,
      explain: String.raw`$(x+1)\big[(2x-3)-(x+4)\big]=(x+1)(2x-3-x-4)=(x+1)(x-7)$.`, level: 2 },
    { id: 'm1-x-016', prompt: String.raw`Factorise $x^3-8$ (produit d'un facteur du premier degré et d'un trinôme).`,
      answer: '(x-2)*(x^2+2*x+4)', vars: ['x'], check: 'expr', form: 'factored',
      mistakes: [
        { expr: '(x-2)*(x^2-2*x+4)', msg: String.raw`$a^3-b^3=(a-b)(a^2+ab+b^2)$ : le terme $ab=2x$ est précédé de $+$.` },
        { expr: '(x-2)^3', msg: String.raw`$(x-2)^3=x^3-6x^2+12x-8\neq x^3-8$.` },
        { expr: '(x-2)*(x^2+4)', msg: String.raw`Il manque le terme $ab=2x$ dans le trinôme.` }
      ],
      hint: String.raw`$a^3-b^3=(a-b)(a^2+ab+b^2)$ avec $b=2$.`,
      explain: String.raw`$x^3-2^3=(x-2)(x^2+2x+4)$. Le trinôme a $\Delta=4-16\lt0$ : on ne peut pas aller plus loin dans $\mathbb R$.`, level: 2 },
    { id: 'm1-x-017', prompt: String.raw`Factorise $x^3+27$ (produit d'un facteur du premier degré et d'un trinôme).`,
      answer: '(x+3)*(x^2-3*x+9)', vars: ['x'], check: 'expr', form: 'factored',
      mistakes: [
        { expr: '(x+3)*(x^2+3*x+9)', msg: String.raw`$a^3+b^3=(a+b)(a^2-ab+b^2)$ : le terme $ab$ est précédé de $-$.` },
        { expr: '(x+3)^3', msg: String.raw`$(x+3)^3=x^3+9x^2+27x+27\neq x^3+27$.` }
      ],
      hint: String.raw`$27=3^3$ et $a^3+b^3=(a+b)(a^2-ab+b^2)$.`,
      explain: String.raw`$x^3+3^3=(x+3)(x^2-3x+9)$.`, level: 2 },
    { id: 'm1-x-018', prompt: String.raw`Factorise $3x^2+5x-2$.`,
      answer: '(3*x-1)*(x+2)', vars: ['x'], check: 'expr', form: 'factored',
      mistakes: [
        { expr: '(x-1/3)*(x+2)', msg: String.raw`N'oublie pas le coefficient $a=3$ : $3x^2+5x-2=3\left(x-\frac13\right)(x+2)$.` },
        { expr: '(3*x+1)*(x-2)', msg: String.raw`Signes inversés : les racines sont $\frac13$ et $-2$.` }
      ],
      hint: String.raw`Calcule $\Delta$ et les racines, puis $a(x-x_1)(x-x_2)$.`,
      explain: String.raw`$\Delta=25+24=49$, $x_{1,2}=\frac{-5\pm7}{6}$ : $x_1=\frac13$, $x_2=-2$. Donc $3x^2+5x-2=3\left(x-\frac13\right)(x+2)=(3x-1)(x+2)$.`, level: 2 },
    { id: 'm1-x-019', prompt: String.raw`Calcule le discriminant de $2x^2-3x+5$.`,
      answer: '-31', vars: [], check: 'value',
      mistakes: [
        { expr: '49', msg: String.raw`$\Delta=b^2-4ac=9-40$ : le terme $4ac$ est soustrait.` },
        { expr: '-49', msg: String.raw`$b^2=(-3)^2=9$, pas $-9$.` }
      ],
      hint: String.raw`$\Delta=b^2-4ac$ avec $a=2$, $b=-3$, $c=5$.`,
      explain: String.raw`$\Delta=(-3)^2-4\times2\times5=9-40=-31\lt0$ : pas de racine réelle.`, level: 1 },
    { id: 'm1-x-020', prompt: String.raw`Résous $x^2-5x+6=0$.`,
      answer: '2;3', vars: [], check: 'set',
      mistakes: [
        { expr: '-2;-3', msg: String.raw`Signe : $x^2-5x+6=(x-2)(x-3)$, les racines sont positives (somme $5$, produit $6$).` }
      ],
      hint: String.raw`Cherche deux nombres de somme 5 et de produit 6, ou calcule $\Delta$.`,
      explain: String.raw`$\Delta=25-24=1$, $x=\frac{5\pm1}{2}$ : $x=2$ ou $x=3$.`, level: 1 },
    { id: 'm1-x-021', prompt: String.raw`Résous $3x^2+2x-1=0$.`,
      answer: '1/3;-1', vars: [], check: 'set',
      mistakes: [
        { expr: '-1/3;1', msg: String.raw`Le numérateur est $-b\pm\sqrt\Delta$ avec $-b=-2$.` },
        { expr: '1;-3', msg: String.raw`On divise par $2a=6$, pas par 2.` }
      ],
      hint: String.raw`$\Delta=b^2-4ac=16$.`,
      explain: String.raw`$\Delta=4+12=16$, $x=\frac{-2\pm4}{6}$ : $x_1=\frac13$, $x_2=-1$.`, level: 2 },
    { id: 'm1-x-022', prompt: String.raw`Résous $x^2-2x-1=0$ (valeurs exactes).`,
      answer: '1-sqrt(2);sqrt(2)+1', vars: [], check: 'set',
      mistakes: [
        { expr: '2-2*sqrt(2);2*sqrt(2)+2', msg: String.raw`Divise tout le numérateur par $2a=2$.` },
        { expr: '1-sqrt(8);sqrt(8)+1', msg: String.raw`$\frac{\sqrt8}{2}=\frac{2\sqrt2}{2}=\sqrt2$ : la racine est aussi divisée par 2.` }
      ],
      hint: String.raw`$\Delta=8$ et $\sqrt8=2\sqrt2$.`,
      explain: String.raw`$\Delta=4+4=8$, $x=\frac{2\pm2\sqrt2}{2}=1\pm\sqrt2$.`, level: 2 },
    { id: 'm1-x-023', prompt: String.raw`Écris $x^2+6x+5$ sous la forme $(x-\alpha)^2+\beta$. Donne $\alpha;\beta$.`,
      answer: '-3;-4', vars: [], check: 'tuple',
      mistakes: [
        { expr: '3;-4', msg: String.raw`$(x+3)^2=(x-(-3))^2$ donc $\alpha=-3$.` },
        { expr: '-3;14', msg: String.raw`$x^2+6x=(x+3)^2-9$ : on retranche 9, on ne l'ajoute pas.` }
      ],
      hint: String.raw`$x^2+6x=(x+3)^2-9$.`,
      explain: String.raw`$x^2+6x+5=(x+3)^2-9+5=(x+3)^2-4$, donc $\alpha=-3$ et $\beta=-4$ (sommet $(-3,-4)$).`, level: 2 },
    { id: 'm1-x-024', prompt: String.raw`Écris $2x^2-8x+3$ sous la forme $a(x-\alpha)^2+\beta$. Donne $a;\alpha;\beta$.`,
      answer: '2;2;-5', vars: [], check: 'tuple',
      mistakes: [
        { expr: '2;2;-1', msg: String.raw`$2(x^2-4x)+3=2\big[(x-2)^2-4\big]+3=2(x-2)^2-8+3$ : le $-4$ est multiplié par 2.` },
        { expr: '2;-2;-5', msg: String.raw`$(x-2)^2$ correspond à $\alpha=+2$ ($\alpha=-\frac{b}{2a}=\frac84$).` }
      ],
      hint: String.raw`Factorise par 2 les termes en $x$, puis complète le carré. $\alpha=-\frac{b}{2a}$, $\beta=f(\alpha)$.`,
      explain: String.raw`$\alpha=-\frac{-8}{4}=2$, $\beta=f(2)=8-16+3=-5$. Donc $2x^2-8x+3=2(x-2)^2-5$.`, level: 3 },
    { id: 'm1-x-025', prompt: String.raw`Sans calculer les racines de $3x^2-7x+2$, donne leur somme puis leur produit ($S;P$).`,
      answer: '7/3;2/3', vars: [], check: 'tuple',
      mistakes: [
        { expr: '-7/3;2/3', msg: String.raw`$S=-\frac{b}{a}=-\frac{-7}{3}=\frac73$.` },
        { expr: '7;2', msg: String.raw`Il faut diviser par $a=3$.` }
      ],
      hint: String.raw`$S=-\frac ba$, $P=\frac ca$.`,
      explain: String.raw`$S=-\frac{-7}{3}=\frac73$ et $P=\frac23$. (Racines : $2$ et $\frac13$.)`, level: 1 },
    { id: 'm1-x-026', prompt: String.raw`Trouve les deux nombres dont la somme vaut 10 et le produit 21.`,
      answer: '3;7', vars: [], check: 'set',
      mistakes: [
        { expr: '-3;-7', msg: String.raw`Leur somme serait $-10$.` }
      ],
      hint: String.raw`Ce sont les racines de $X^2-SX+P=0$.`,
      explain: String.raw`Ils sont solutions de $X^2-10X+21=0$ : $\Delta=100-84=16$, $X=\frac{10\pm4}{2}$, soit $3$ et $7$.`, level: 2 },
    { id: 'm1-x-027', prompt: String.raw`Résous dans $\mathbb{R}$ l'équation bicarrée $x^4-5x^2+4=0$.`,
      answer: '-2;-1;1;2', vars: [], check: 'set',
      mistakes: [
        { expr: '1;4', msg: String.raw`1 et 4 sont les valeurs de $X=x^2$ : il faut ensuite résoudre $x^2=1$ et $x^2=4$.` },
        { expr: '1;2', msg: String.raw`$x^2=1$ donne aussi $x=-1$, et $x^2=4$ donne $x=-2$.` }
      ],
      hint: String.raw`Pose $X=x^2$.`,
      explain: String.raw`$X^2-5X+4=0$ donne $X=1$ ou $X=4$. Puis $x^2=1\Leftrightarrow x=\pm1$ et $x^2=4\Leftrightarrow x=\pm2$.`, level: 3 },
    { id: 'm1-x-028', prompt: String.raw`L'ensemble des solutions de $x^2-x-6\lt 0$ est un intervalle $]a,b[$. Donne $a;b$.`,
      answer: '-2;3', vars: [], check: 'tuple',
      mistakes: [
        { expr: '-3;2', msg: String.raw`Les racines sont $\frac{1\pm5}{2}$, soit $3$ et $-2$.` }
      ],
      hint: String.raw`Trouve les racines ; le trinôme ($a=1\gt0$) est négatif entre elles.`,
      explain: String.raw`$\Delta=1+24=25$, racines $-2$ et $3$ ; $x^2-x-6=(x+2)(x-3)\lt0$ entre les racines : $S=]-2,3[$.`, level: 2 },
    { id: 'm1-x-029', prompt: String.raw`Résous $\frac{x^2-4}{x-2}=0$.`,
      answer: '-2', vars: [], check: 'set',
      mistakes: [
        { expr: '-2;2', msg: String.raw`$x=2$ est une valeur interdite (dénominateur nul) : elle n'est pas solution.` },
        { expr: '2', msg: String.raw`$x=2$ annule le dénominateur : interdit.` }
      ],
      hint: String.raw`$\frac AB=0\Leftrightarrow A=0$ et $B\neq0$.`,
      explain: String.raw`Valeur interdite : $x=2$. $x^2-4=0\Leftrightarrow x=\pm2$, et seul $x=-2$ est autorisé : $S=\{-2\}$.`, level: 2 },
    { id: 'm1-x-030', prompt: String.raw`Résous $\frac{x+1}{3-x}\leq 0$. L'ensemble des solutions s'écrit $]-\infty,a]\cup]b,+\infty[$ : donne $a;b$.`,
      answer: '-1;3', vars: [], check: 'tuple',
      mistakes: [
        { expr: '1;3', msg: String.raw`$x+1=0\Leftrightarrow x=-1$.` },
        { expr: '-1;-3', msg: String.raw`$3-x=0\Leftrightarrow x=3$.` }
      ],
      hint: String.raw`Tableau de signes avec $x+1$ (nul en $-1$) et $3-x$ (nul en $3$, valeur interdite).`,
      explain: String.raw`Pour $x\lt-1$ : $\frac{-}{+}\lt0$ ; pour $-1\lt x\lt3$ : $\frac{+}{+}\gt0$ ; pour $x\gt3$ : $\frac{+}{-}\lt0$. Avec $x=-1$ inclus (quotient nul) et $3$ exclu : $S=]-\infty,-1]\cup]3,+\infty[$.`, level: 3 },
    { id: 'm1-x-031', prompt: String.raw`Résous le système $\begin{cases}2x+3y=7\\x-y=1\end{cases}$. Donne $x;y$.`,
      answer: '2;1', vars: [], check: 'tuple',
      mistakes: [
        { expr: '1;2', msg: String.raw`Ordre demandé : $x$ puis $y$. Vérifie : $1-2\neq1$.` }
      ],
      hint: String.raw`Substitution : $x=1+y$.`,
      explain: String.raw`$x=1+y$ donc $2(1+y)+3y=7\Leftrightarrow5y=5\Leftrightarrow y=1$, puis $x=2$. Contrôle : $4+3=7$.`, level: 1 },
    { id: 'm1-x-032', prompt: String.raw`Résous le système $\begin{cases}3x-2y=4\\5x+4y=3\end{cases}$. Donne $x;y$.`,
      answer: '1;-1/2', vars: [], check: 'tuple',
      mistakes: [
        { expr: '1;1/2', msg: String.raw`Vérifie la 1re équation : $3-2\times\frac12=2\neq4$.` }
      ],
      hint: String.raw`Combinaison : $2L_1+L_2$ élimine $y$.`,
      explain: String.raw`$2L_1+L_2$ : $11x=11$, donc $x=1$ ; puis $3-2y=4\Leftrightarrow y=-\frac12$. (Cramer : $D=12+10=22$, $x=\frac{16+6}{22}=1$, $y=\frac{9-20}{22}=-\frac12$.)`, level: 2 },
    { id: 'm1-x-033', prompt: String.raw`Calcule $\sum_{k=1}^{n}(2k-1)$ en fonction de $n$ (somme des $n$ premiers impairs).`,
      answer: 'n^2', vars: ['n'], check: 'expr', domain: [1, 10],
      mistakes: [
        { expr: 'n^2+n-1', msg: String.raw`$\sum_{k=1}^{n}1=n$ (il y a $n$ termes), pas $1$.` },
        { expr: 'n^2+n', msg: String.raw`Tu as oublié de soustraire $\sum_{k=1}^n 1=n$.` }
      ],
      hint: String.raw`Linéarité : $2\sum k-\sum 1$.`,
      explain: String.raw`$2\times\frac{n(n+1)}{2}-n=n^2+n-n=n^2$.`, level: 2 },
    { id: 'm1-x-034', prompt: String.raw`Calcule $\sum_{k=0}^{n}3^k$ en fonction de $n$.`,
      answer: '(3^(n+1)-1)/2', vars: ['n'], check: 'expr', domain: [1, 8],
      mistakes: [
        { expr: '(3^n-1)/2', msg: String.raw`De $k=0$ à $n$ il y a $n+1$ termes : l'exposant est $n+1$.` },
        { expr: '3^(n+1)-1', msg: String.raw`Il faut diviser par $q-1=2$.` }
      ],
      hint: String.raw`Somme géométrique de raison $q=3$, premier terme 1.`,
      explain: String.raw`$\sum_{k=0}^n3^k=\frac{1-3^{n+1}}{1-3}=\frac{3^{n+1}-1}{2}$.`, level: 2 },
    { id: 'm1-x-035', prompt: String.raw`Calcule $\sum_{k=1}^{n}k(k+1)$ en fonction de $n$.`,
      answer: 'n*(n+1)*(n+2)/3', vars: ['n'], check: 'expr', domain: [1, 10],
      mistakes: [
        { expr: 'n*(n+1)*(2*n+1)/6', msg: String.raw`Tu n'as compté que $\sum k^2$ : $k(k+1)=k^2+k$, il faut ajouter $\sum k$.` },
        { expr: 'n*(n+1)/2*n*(n+3)/2', msg: String.raw`$\sum u_kv_k\neq\left(\sum u_k\right)\left(\sum v_k\right)$ : développe d'abord $k(k+1)$.` }
      ],
      hint: String.raw`$k(k+1)=k^2+k$, puis utilise les formules de $\sum k^2$ et $\sum k$.`,
      explain: String.raw`$\frac{n(n+1)(2n+1)}{6}+\frac{n(n+1)}{2}=\frac{n(n+1)(2n+1+3)}{6}=\frac{n(n+1)(n+2)}{3}$. Contrôle $n=2$ : $2+6=8=\frac{2\cdot3\cdot4}{3}$.`, level: 3 },
    { id: 'm1-x-036', prompt: String.raw`Simplifie $\ln(x^3)-\ln(x)$ pour $x\gt 0$.`,
      answer: '2*ln(x)', vars: ['x'], check: 'expr', domain: [0.3, 4],
      mistakes: [
        { expr: 'ln(x^3-x)', msg: String.raw`$\ln a-\ln b=\ln\frac ab$, pas $\ln(a-b)$.` }
      ],
      hint: String.raw`$\ln(x^3)=3\ln x$.`,
      explain: String.raw`$\ln(x^3)-\ln x=3\ln x-\ln x=2\ln x$ (ou $\ln\frac{x^3}{x}=\ln(x^2)=2\ln x$).`, level: 1 },
    { id: 'm1-x-037', prompt: String.raw`Calcule $\mathrm{e}^{2\ln 3}$.`,
      answer: '9', vars: [], check: 'value',
      mistakes: [
        { expr: '6', msg: String.raw`$\mathrm{e}^{2\ln3}=\left(\mathrm{e}^{\ln3}\right)^2=3^2$, pas $2\times3$.` },
        { expr: 'exp(6)', msg: String.raw`$2\ln3=\ln9$, ce n'est pas $6$.` }
      ],
      hint: String.raw`$2\ln3=\ln(3^2)$.`,
      explain: String.raw`$\mathrm{e}^{2\ln3}=\mathrm{e}^{\ln 9}=9$.`, level: 1 },
    { id: 'm1-x-038', prompt: String.raw`Résous $\ln(x)+\ln(x+2)=\ln 3$.`,
      answer: '1', vars: [], check: 'set',
      mistakes: [
        { expr: '1;-3', msg: String.raw`$x=-3$ n'est pas dans le domaine ($x\gt0$) : $\ln(-3)$ n'existe pas.` }
      ],
      hint: String.raw`Domaine : $x\gt0$. Puis $\ln a+\ln b=\ln(ab)$.`,
      explain: String.raw`Domaine $x\gt0$. $\ln\big(x(x+2)\big)=\ln3\Leftrightarrow x^2+2x-3=0\Leftrightarrow x=1$ ou $x=-3$. Seul $x=1$ convient.`, level: 2 },
    { id: 'm1-x-039', prompt: String.raw`Résous $\mathrm{e}^{2x}-3\mathrm{e}^{x}+2=0$.`,
      answer: 'ln(2);0', vars: [], check: 'set',
      mistakes: [
        { expr: '1;2', msg: String.raw`1 et 2 sont les valeurs de $X=\mathrm{e}^x$ : il reste à résoudre $\mathrm{e}^x=1$ et $\mathrm{e}^x=2$.` }
      ],
      hint: String.raw`Pose $X=\mathrm{e}^x\gt0$ : $X^2-3X+2=0$.`,
      explain: String.raw`$X^2-3X+2=(X-1)(X-2)=0$ donne $X=1$ ou $X=2$ (tous deux positifs), donc $x=\ln1=0$ ou $x=\ln2$.`, level: 3 },
    { id: 'm1-x-040', prompt: String.raw`Résous $2^x=10$ (valeur exacte).`,
      answer: 'ln(10)/ln(2)', vars: [], check: 'value',
      mistakes: [
        { expr: 'ln(5)', msg: String.raw`$\ln(2^x)=x\ln2$ : on divise par $\ln2$, on ne soustrait pas.` },
        { expr: '5', msg: String.raw`$2^x$ n'est pas $2x$ : passe au logarithme.` }
      ],
      hint: String.raw`Applique $\ln$ : $\ln(2^x)=x\ln2$.`,
      explain: String.raw`$2^x=10\Leftrightarrow x\ln2=\ln10\Leftrightarrow x=\frac{\ln10}{\ln2}\approx3{,}32$.`, level: 2 }
  ]
});
