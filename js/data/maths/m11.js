/* Maths — Chapitre 11 : Vecteurs et algèbre linéaire */
APP.registerChapter({
  subject: 'maths',
  id: 'm11', num: 11,
  title: 'Vecteurs et algèbre linéaire',
  subtitle: 'Produits scalaire et vectoriel, matrices, déterminants, systèmes',

  /* ============================== FICHES DE COURS ============================== */
  sections: [
    {
      id: 'm11-s-vecteurs',
      title: 'Vecteurs, norme et produit scalaire',
      html: String.raw`
<h3>Vecteurs du plan et de l'espace</h3>
<p>Dans un repère orthonormé $(O, \vec i, \vec j, \vec k)$, tout vecteur s'écrit de façon unique $\vec u = x\,\vec i + y\,\vec j + z\,\vec k$, noté $\vec u = \begin{pmatrix} x \\ y \\ z \end{pmatrix}$. Pour deux points $A$ et $B$ : $$\overrightarrow{AB} = \begin{pmatrix} x_B - x_A \\ y_B - y_A \\ z_B - z_A \end{pmatrix}$$ (« arrivée moins départ »).</p>
<ul>
<li><b>Combinaison linéaire</b> : $\lambda\vec u + \mu\vec v$ se calcule coordonnée par coordonnée.</li>
<li><b>Relation de Chasles</b> : $\overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC}$.</li>
<li><b>Colinéarité</b> : $\vec u$ et $\vec v$ sont colinéaires s'il existe un réel $\lambda$ tel que $\vec v = \lambda\vec u$ (ou si $\vec u = \vec 0$). Dans le plan : $\vec u \parallel \vec v \Leftrightarrow xy' - x'y = 0$.</li>
<li><b>Milieu</b> de $[AB]$ : $I\left(\frac{x_A+x_B}{2}, \frac{y_A+y_B}{2}, \frac{z_A+z_B}{2}\right)$.</li>
</ul>
<h3>Norme</h3>
<p>Dans un repère <b>orthonormé</b> : $$\|\vec u\| = \sqrt{x^2 + y^2 + z^2}, \qquad AB = \|\overrightarrow{AB}\| = \sqrt{(x_B-x_A)^2 + (y_B-y_A)^2 + (z_B-z_A)^2}.$$</p>
<p>Propriétés : $\|\lambda\vec u\| = |\lambda|\,\|\vec u\|$ ; $\|\vec u\| = 0 \Leftrightarrow \vec u = \vec 0$ ; inégalité triangulaire $\|\vec u + \vec v\| \leq \|\vec u\| + \|\vec v\|$. Un vecteur <b>unitaire</b> est de norme 1 : on <i>normalise</i> $\vec u \neq \vec 0$ en $\dfrac{\vec u}{\|\vec u\|}$.</p>
<h3>Produit scalaire</h3>
<div class="grid2">
<div class="mini"><h4>Forme analytique</h4><p>En repère orthonormé : $\vec u\cdot\vec v = xx' + yy' + zz'$.</p></div>
<div class="mini"><h4>Forme géométrique</h4><p>$\vec u\cdot\vec v = \|\vec u\|\,\|\vec v\|\cos\theta$, où $\theta$ est l'angle entre $\vec u$ et $\vec v$.</p></div>
</div>
<p>Le produit scalaire est un <b>nombre</b>. Il est <b>symétrique</b> ($\vec u\cdot\vec v = \vec v\cdot\vec u$), <b>bilinéaire</b> (linéaire par rapport à chaque vecteur) et <b>défini positif</b> : $\vec u\cdot\vec u = \|\vec u\|^2 \geq 0$, nul seulement pour $\vec u = \vec 0$.</p>
<ul>
<li><b>Orthogonalité</b> : $\vec u \perp \vec v \Leftrightarrow \vec u\cdot\vec v = 0$.</li>
<li><b>Angle</b> : $\cos\theta = \dfrac{\vec u\cdot\vec v}{\|\vec u\|\,\|\vec v\|}$ (signe du produit scalaire : angle aigu si $\gt 0$, obtus si $\lt 0$).</li>
<li><b>Identités remarquables</b> : $\|\vec u \pm \vec v\|^2 = \|\vec u\|^2 \pm 2\,\vec u\cdot\vec v + \|\vec v\|^2$ (d'où Al-Kashi, et Pythagore quand $\vec u\perp\vec v$).</li>
<li><b>Cauchy-Schwarz</b> : $|\vec u\cdot\vec v| \leq \|\vec u\|\,\|\vec v\|$, avec égalité si et seulement si $\vec u$ et $\vec v$ sont colinéaires.</li>
</ul>
<h4>Projection orthogonale</h4>
<p>Le projeté orthogonal de $\vec u$ sur la droite dirigée par $\vec v \neq \vec 0$ est $$p(\vec u) = \frac{\vec u\cdot\vec v}{\|\vec v\|^2}\,\vec v.$$ Si $\vec v$ est unitaire, cela se réduit à $(\vec u\cdot\vec v)\,\vec v$. En physique, le travail d'une force $W = \vec F\cdot\overrightarrow{AB}$ n'utilise que la composante de $\vec F$ le long du déplacement.</p>
<div class="callout tip"><b>Exemple corrigé</b> Soit $\vec u = (1, 2, 2)$, $\vec v = (2, 0, -1)$, $\vec w = (3, 1, 0)$.<br>
$\|\vec u\| = \sqrt{1 + 4 + 4} = 3$ ; $\vec u\cdot\vec v = 2 + 0 - 2 = 0$ donc $\vec u \perp \vec v$.<br>
Projeté de $\vec w$ sur $\vec u$ : $\vec w\cdot\vec u = 3 + 2 + 0 = 5$, $\|\vec u\|^2 = 9$, donc $p(\vec w) = \frac{5}{9}(1, 2, 2)$.</div>
<div class="callout warn"><b>Pièges</b> Le produit scalaire est un nombre, pas un vecteur. $\vec u\cdot\vec v = 0$ n'implique pas $\vec u = \vec 0$ ou $\vec v = \vec 0$ (ils peuvent être orthogonaux). La formule $xx' + yy' + zz'$ n'est valable que dans une base <b>orthonormée</b>. Dans la projection, on divise par $\|\vec v\|^2$, pas par $\|\vec v\|$.</div>
<div class="callout key"><b>À retenir</b> $\|\vec u\| = \sqrt{\vec u\cdot\vec u}$ ; $\vec u\perp\vec v \Leftrightarrow \vec u\cdot\vec v = 0$ ; $\cos\theta = \frac{\vec u\cdot\vec v}{\|\vec u\|\|\vec v\|}$ ; projeté $= \frac{\vec u\cdot\vec v}{\|\vec v\|^2}\vec v$.</div>`
    },
    {
      id: 'm11-s-vectoriel',
      title: 'Produit vectoriel et produit mixte',
      html: String.raw`
<h3>Produit vectoriel (dans l'espace orienté)</h3>
<p>Pour $\vec u$, $\vec v$ de l'espace, $\vec w = \vec u\wedge\vec v$ (noté aussi $\vec u\times\vec v$) est l'unique vecteur tel que :</p>
<ul>
<li>$\vec w$ est <b>orthogonal</b> à $\vec u$ et à $\vec v$ ;</li>
<li>$\|\vec w\| = \|\vec u\|\,\|\vec v\|\,|\sin\theta|$ ;</li>
<li>$(\vec u, \vec v, \vec w)$ est une base <b>directe</b> (règle de la main droite : pouce $\vec u$, index $\vec v$, majeur $\vec w$).</li>
</ul>
<p>En coordonnées dans une base orthonormée directe : $$\begin{pmatrix} x \\ y \\ z \end{pmatrix} \wedge \begin{pmatrix} x' \\ y' \\ z' \end{pmatrix} = \begin{pmatrix} yz' - zy' \\ zx' - xz' \\ xy' - yx' \end{pmatrix}.$$</p>
<div class="callout info"><b>Méthode : calculer un produit vectoriel</b> Écris les deux vecteurs en colonnes côte à côte, recopie les deux premières lignes en dessous. Chaque composante est un « produit en croix » (déterminant $2\times 2$) : la 1re utilise les lignes 2 et 3, la 2e les lignes 3 et 1, la 3e les lignes 1 et 2. Vérifie toujours le résultat : $\vec w\cdot\vec u = 0$ et $\vec w\cdot\vec v = 0$.</div>
<h4>Propriétés</h4>
<ul>
<li><b>Antisymétrie</b> : $\vec v\wedge\vec u = -\,\vec u\wedge\vec v$, donc $\vec u\wedge\vec u = \vec 0$.</li>
<li><b>Bilinéarité</b> : $(\lambda\vec u + \mu\vec u')\wedge\vec v = \lambda\,\vec u\wedge\vec v + \mu\,\vec u'\wedge\vec v$.</li>
<li><b>Colinéarité</b> : $\vec u\wedge\vec v = \vec 0 \Leftrightarrow \vec u$ et $\vec v$ colinéaires.</li>
<li><b>Base orthonormée directe</b> : $\vec i\wedge\vec j = \vec k$, $\vec j\wedge\vec k = \vec i$, $\vec k\wedge\vec i = \vec j$ (ordre circulaire) ; dans l'autre sens, signe moins : $\vec j\wedge\vec i = -\vec k$.</li>
<li><b>Non associatif</b> : en général $(\vec u\wedge\vec v)\wedge\vec w \neq \vec u\wedge(\vec v\wedge\vec w)$.</li>
<li><b>Aire</b> : $\|\vec u\wedge\vec v\|$ est l'aire du parallélogramme construit sur $\vec u$ et $\vec v$ ; l'aire du triangle $ABC$ vaut $\frac12\|\overrightarrow{AB}\wedge\overrightarrow{AC}\|$.</li>
</ul>
<h3>Produit mixte</h3>
<p>$$[\vec u, \vec v, \vec w] = (\vec u\wedge\vec v)\cdot\vec w = \det(\vec u, \vec v, \vec w).$$ C'est un <b>nombre</b> : $|[\vec u,\vec v,\vec w]|$ est le <b>volume</b> du parallélépipède construit sur les trois vecteurs (le tétraèdre a un volume 6 fois plus petit). Il est nul si et seulement si les trois vecteurs sont <b>coplanaires</b>. Il est invariant par permutation circulaire et change de signe quand on échange deux vecteurs.</p>
<div class="callout tip"><b>Exemple corrigé</b> $\vec u = (1, 2, 3)$, $\vec v = (4, 5, 6)$ :<br>
$\vec u\wedge\vec v = (2\times 6 - 3\times 5,\ 3\times 4 - 1\times 6,\ 1\times 5 - 2\times 4) = (-3, 6, -3)$.<br>
Vérification : $(-3)(1) + 6(2) + (-3)(3) = 0$ et $(-3)(4) + 6(5) + (-3)(6) = 0$. ✔</div>
<div class="callout info"><b>En physique de l'ingénieur</b> Moment d'une force $\vec M_O = \overrightarrow{OA}\wedge\vec F$ ; force de Lorentz $\vec F = q\,\vec v\wedge\vec B$ ; force de Laplace $\mathrm{d}\vec F = I\,\mathrm{d}\vec \ell\wedge\vec B$ ; vitesse d'un solide en rotation $\vec v = \vec\omega\wedge\overrightarrow{OM}$.</div>
<div class="callout warn"><b>Pièges</b> L'ordre compte : $\vec u\wedge\vec v = -\vec v\wedge\vec u$. Le signe de la 2e composante ($zx' - xz'$) est la source d'erreur n°1 : vérifie l'orthogonalité. Le produit vectoriel est un outil de l'espace de dimension 3 : il n'a pas de sens dans le plan.</div>
<div class="callout key"><b>À retenir</b> $\vec u\wedge\vec v \perp \vec u, \vec v$ ; norme = aire du parallélogramme ; $\vec 0 \Leftrightarrow$ colinéaires. Produit mixte = déterminant = volume ; nul $\Leftrightarrow$ coplanaires.</div>`
    },
    {
      id: 'm11-s-droites-plans',
      title: 'Droites et plans',
      html: String.raw`
<h3>Droites du plan</h3>
<p>Équation cartésienne : $ax + by + c = 0$ avec $(a, b) \neq (0, 0)$. Le vecteur $\vec n = (a, b)$ est <b>normal</b> à la droite, et $\vec u = (-b, a)$ est un vecteur <b>directeur</b>. Forme réduite (si $b \neq 0$) : $y = mx + p$, de pente $m$.</p>
<p>Distance d'un point $M_0(x_0, y_0)$ à la droite : $d = \dfrac{|ax_0 + by_0 + c|}{\sqrt{a^2 + b^2}}$.</p>
<h3>Droites de l'espace</h3>
<p>Une droite passant par $A(x_A, y_A, z_A)$ et dirigée par $\vec u = (\alpha, \beta, \gamma)$ a pour <b>représentation paramétrique</b> : $$\begin{cases} x = x_A + t\,\alpha \\ y = y_A + t\,\beta \\ z = z_A + t\,\gamma \end{cases} \qquad t \in \mathbb{R}.$$ Une droite de l'espace n'a pas « une » équation cartésienne : c'est l'intersection de <b>deux</b> plans non parallèles.</p>
<p>Distance d'un point $M$ à la droite $(A, \vec u)$ : $d = \dfrac{\|\overrightarrow{AM}\wedge\vec u\|}{\|\vec u\|}$.</p>
<h3>Plans de l'espace</h3>
<ul>
<li><b>Point + vecteur normal</b> : le plan passant par $A$ et de normale $\vec n = (a, b, c)$ est l'ensemble des $M$ tels que $\overrightarrow{AM}\cdot\vec n = 0$, soit $$a(x - x_A) + b(y - y_A) + c(z - z_A) = 0 \iff ax + by + cz + d = 0.$$</li>
<li><b>Point + deux vecteurs directeurs</b> non colinéaires $\vec u$, $\vec v$ : $M = A + s\,\vec u + t\,\vec v$. Un vecteur normal est $\vec n = \vec u\wedge\vec v$.</li>
<li><b>Trois points</b> non alignés $A, B, C$ : $\vec n = \overrightarrow{AB}\wedge\overrightarrow{AC}$, puis on écrit que $A$ appartient au plan pour trouver $d$.</li>
<li><b>Distance</b> de $M_0$ au plan $ax + by + cz + d = 0$ : $$d(M_0, \mathcal P) = \frac{|ax_0 + by_0 + cz_0 + d|}{\sqrt{a^2 + b^2 + c^2}}.$$</li>
</ul>
<h4>Positions relatives</h4>
<table class="tbl">
<tr><th>Situation</th><th>Critère</th></tr>
<tr><td>Plans parallèles</td><td>normales $\vec n$, $\vec n'$ colinéaires</td></tr>
<tr><td>Plans perpendiculaires</td><td>$\vec n\cdot\vec n' = 0$</td></tr>
<tr><td>Droite parallèle au plan</td><td>$\vec u\cdot\vec n = 0$</td></tr>
<tr><td>Droite orthogonale au plan</td><td>$\vec u$ colinéaire à $\vec n$</td></tr>
</table>
<div class="callout info"><b>Méthode : intersection droite / plan</b> Remplace $x$, $y$, $z$ de la représentation paramétrique dans l'équation du plan : on obtient une équation en $t$. Une solution unique donne le point d'intersection ; « $0 = 0$ » : droite incluse dans le plan ; « $0 = 5$ » : droite strictement parallèle.</div>
<div class="callout tip"><b>Exemple corrigé</b> Plan passant par $A(1,0,0)$, $B(0,1,0)$, $C(0,0,1)$.<br>
$\overrightarrow{AB} = (-1, 1, 0)$, $\overrightarrow{AC} = (-1, 0, 1)$, $\vec n = \overrightarrow{AB}\wedge\overrightarrow{AC} = (1, 1, 1)$.<br>
Équation $x + y + z + d = 0$ ; $A$ dans le plan donne $d = -1$ : $x + y + z - 1 = 0$.<br>
Distance de l'origine au plan : $\frac{|0 + 0 + 0 - 1|}{\sqrt 3} = \frac{1}{\sqrt 3}$.</div>
<div class="callout warn"><b>Pièges</b> Dans l'espace, $ax + by + cz + d = 0$ est un <b>plan</b>, pas une droite. Les coefficients $(a, b, c)$ donnent un vecteur <b>normal</b>, pas directeur. Dans la formule de distance, n'oublie ni la valeur absolue ni la racine au dénominateur.</div>
<div class="callout key"><b>À retenir</b> Plan $\leftrightarrow$ vecteur normal $(a,b,c)$ ; droite de l'espace $\leftrightarrow$ point + vecteur directeur (paramétrique). Normale d'un plan défini par deux vecteurs : leur produit vectoriel.</div>`
    },
    {
      id: 'm11-s-matrices',
      title: 'Matrices et opérations',
      html: String.raw`
<h3>Définitions</h3>
<p>Une matrice $A = (a_{ij}) \in \mathcal{M}_{n,p}(\mathbb{R})$ est un tableau de $n$ lignes et $p$ colonnes ; $a_{ij}$ est le coefficient de la ligne $i$, colonne $j$. Si $n = p$, la matrice est <b>carrée</b> : $A \in \mathcal{M}_n(\mathbb{R})$.</p>
<ul>
<li><b>Somme</b> (même taille) et <b>produit par un scalaire</b> : coefficient par coefficient.</li>
<li><b>Produit</b> : $AB$ existe si (nb de colonnes de $A$) = (nb de lignes de $B$). Si $A \in \mathcal{M}_{n,p}$ et $B \in \mathcal{M}_{p,q}$, alors $AB \in \mathcal{M}_{n,q}$ et $$(AB)_{ij} = \sum_{k=1}^{p} a_{ik}\,b_{kj}$$ (ligne $i$ de $A$ « fois » colonne $j$ de $B$).</li>
</ul>
<div class="callout tip"><b>Exemple corrigé : le produit n'est pas commutatif</b> $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$, $B = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$.<br>
$AB = \begin{pmatrix} 1\cdot 0 + 2\cdot 1 & 1\cdot 1 + 2\cdot 0 \\ 3\cdot 0 + 4\cdot 1 & 3\cdot 1 + 4\cdot 0 \end{pmatrix} = \begin{pmatrix} 2 & 1 \\ 4 & 3 \end{pmatrix}$ (colonnes échangées), alors que $BA = \begin{pmatrix} 3 & 4 \\ 1 & 2 \end{pmatrix}$ (lignes échangées). Donc $AB \neq BA$.</div>
<div class="callout warn"><b>Pièges du produit matriciel</b>
<ul>
<li>$AB \neq BA$ en général ; donc $(A + B)^2 = A^2 + AB + BA + B^2$, et non $A^2 + 2AB + B^2$.</li>
<li>$AB = 0$ n'implique pas $A = 0$ ou $B = 0$ : avec $N = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$, $N^2 = 0$.</li>
<li>$AB = AC$ n'implique pas $B = C$ (sauf si $A$ est inversible).</li>
<li>Le produit n'est pas « coefficient par coefficient ».</li>
</ul></div>
<h3>Transposée et trace</h3>
<p>La transposée $A^T$ (notée aussi $\,{}^t\!A$) échange lignes et colonnes : $(A^T)_{ij} = a_{ji}$. Propriétés : $(A + B)^T = A^T + B^T$, $(\lambda A)^T = \lambda A^T$, $(A^T)^T = A$ et surtout $$(AB)^T = B^T A^T \quad \text{(l'ordre s'inverse)}.$$</p>
<p>La trace d'une matrice carrée est la somme des coefficients diagonaux : $\operatorname{tr}(A) = \sum_i a_{ii}$. Elle est linéaire et $\operatorname{tr}(AB) = \operatorname{tr}(BA)$.</p>
<h3>Matrices particulières</h3>
<table class="tbl">
<tr><th>Nom</th><th>Définition</th><th>Remarque</th></tr>
<tr><td>Identité $I_n$</td><td>1 sur la diagonale, 0 ailleurs</td><td>$AI_n = I_nA = A$</td></tr>
<tr><td>Diagonale</td><td>$a_{ij} = 0$ si $i \neq j$</td><td>$D^k$ : on élève les coefficients diagonaux à la puissance $k$</td></tr>
<tr><td>Triangulaire supérieure</td><td>$a_{ij} = 0$ si $i \gt j$</td><td>stable par produit ; $\det$ = produit de la diagonale</td></tr>
<tr><td>Symétrique</td><td>$A^T = A$</td><td>toujours diagonalisable (si réelle)</td></tr>
<tr><td>Antisymétrique</td><td>$A^T = -A$</td><td>diagonale nulle</td></tr>
<tr><td>Nilpotente</td><td>$N^k = 0$ pour un $k$</td><td>ex. triangulaire stricte</td></tr>
<tr><td>Orthogonale</td><td>$A^TA = I_n$</td><td>$A^{-1} = A^T$ ; matrices de rotation</td></tr>
</table>
<h4>Puissances</h4>
<p>$A^0 = I_n$, $A^{k+1} = A^k A$. Si $AB = BA$, la formule du binôme s'applique : $(A+B)^n = \sum_{k=0}^{n}\binom{n}{k}A^kB^{n-k}$. Exemple : $A = I + N$ avec $N = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$, $N^2 = 0$, donc $A^n = I + nN = \begin{pmatrix} 1 & n \\ 0 & 1 \end{pmatrix}$.</p>
<div class="callout key"><b>À retenir</b> « Ligne fois colonne », tailles $(n\times p)(p\times q) = n\times q$. Pas de commutativité, pas de simplification sans inverse. $(AB)^T = B^TA^T$, $\operatorname{tr}(AB) = \operatorname{tr}(BA)$.</div>`
    },
    {
      id: 'm11-s-determinant',
      title: 'Déterminant et matrice inverse',
      html: String.raw`
<h3>Calcul du déterminant</h3>
<div class="grid2">
<div class="mini"><h4>Ordre 2</h4><p>$\begin{vmatrix} a & b \\ c & d \end{vmatrix} = ad - bc$</p></div>
<div class="mini"><h4>Ordre 3 : Sarrus</h4><p>On recopie les deux premières colonnes à droite : somme des 3 « diagonales descendantes » moins somme des 3 « montantes ».</p></div>
</div>
<p><b>Développement selon une ligne ou une colonne</b> (toute taille) : $$\det A = \sum_{j=1}^{n} (-1)^{i+j}\,a_{ij}\,\Delta_{ij},$$ où $\Delta_{ij}$ est le <b>mineur</b> (déterminant de $A$ privée de la ligne $i$ et de la colonne $j$). Les signes $(-1)^{i+j}$ forment un damier : $\begin{pmatrix} + & - & + \\ - & + & - \\ + & - & + \end{pmatrix}$. On développe selon la ligne ou la colonne qui contient le plus de zéros.</p>
<div class="callout tip"><b>Exemple corrigé</b> $A = \begin{pmatrix} 1 & 2 & 3 \\ 0 & 1 & 4 \\ 5 & 6 & 0 \end{pmatrix}$. Développement selon la 1re ligne :<br>
$\det A = 1\begin{vmatrix} 1 & 4 \\ 6 & 0 \end{vmatrix} - 2\begin{vmatrix} 0 & 4 \\ 5 & 0 \end{vmatrix} + 3\begin{vmatrix} 0 & 1 \\ 5 & 6 \end{vmatrix} = 1(-24) - 2(-20) + 3(-5) = 1.$</div>
<h3>Propriétés</h3>
<ul>
<li>$\det(AB) = \det A\,\det B$ ; $\det(A^T) = \det A$ ; $\det(A^{-1}) = \dfrac{1}{\det A}$.</li>
<li>$\det(\lambda A) = \lambda^n \det A$ pour $A \in \mathcal{M}_n$ (chaque ligne est multipliée par $\lambda$).</li>
<li>Matrice triangulaire : $\det$ = produit des coefficients diagonaux.</li>
<li>Opérations sur les lignes (ou colonnes) : échanger deux lignes change le signe ; multiplier une ligne par $\lambda$ multiplie le déterminant par $\lambda$ ; ajouter à une ligne un multiple d'une autre ne change rien.</li>
<li>Deux lignes proportionnelles, ou une ligne nulle $\Rightarrow \det A = 0$.</li>
<li>Interprétation : $|\det|$ = aire (dimension 2) ou volume (dimension 3) de l'image du carré / cube unité. $\det A \neq 0 \Leftrightarrow$ les colonnes forment une base.</li>
</ul>
<h3>Matrice inverse</h3>
<p>$A \in \mathcal{M}_n$ est <b>inversible</b> s'il existe $A^{-1}$ telle que $AA^{-1} = A^{-1}A = I_n$. Caractérisations équivalentes : $\det A \neq 0$ ; $\operatorname{rg} A = n$ ; $AX = 0 \Rightarrow X = 0$ ; les colonnes forment une base ; $0$ n'est pas valeur propre.</p>
<p>Formule $2\times 2$ : $$\begin{pmatrix} a & b \\ c & d \end{pmatrix}^{-1} = \frac{1}{ad - bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$$ (on échange $a$ et $d$, on change le signe de $b$ et $c$).</p>
<p>Cas général : $A^{-1} = \dfrac{1}{\det A}\,\mathrm{Com}(A)^T$, où la <b>comatrice</b> contient les cofacteurs $(-1)^{i+j}\Delta_{ij}$. En pratique, pour $n \geq 3$, on utilise souvent <b>Gauss-Jordan</b> : on transforme $[A \mid I_n]$ en $[I_n \mid A^{-1}]$ par opérations sur les lignes.</p>
<p>Règles : $(AB)^{-1} = B^{-1}A^{-1}$ ; $(A^T)^{-1} = (A^{-1})^T$ ; $(A^{-1})^{-1} = A$.</p>
<div class="callout warn"><b>Pièges</b> $\det(A + B) \neq \det A + \det B$. $\det(2A) = 2^n\det A$, pas $2\det A$. Sarrus ne marche <b>que</b> pour $3\times 3$. Dans la comatrice, n'oublie ni les signes en damier ni la <b>transposition</b>. Une matrice n'est pas inversible parce que ses coefficients sont non nuls : seul le déterminant compte.</div>
<div class="callout key"><b>À retenir</b> $\det\begin{pmatrix} a & b \\ c & d\end{pmatrix} = ad - bc$ ; inversible $\Leftrightarrow \det \neq 0$ ; $\det(AB) = \det A\det B$ ; $\det(\lambda A) = \lambda^n\det A$ ; inverse $2\times 2$ : « échanger, opposer, diviser par $\det$ ».</div>`
    },
    {
      id: 'm11-s-systemes',
      title: 'Systèmes linéaires : Gauss, Cramer, rang',
      html: String.raw`
<h3>Écriture matricielle</h3>
<p>Un système de $n$ équations linéaires à $p$ inconnues s'écrit $AX = B$, avec $A \in \mathcal{M}_{n,p}$ la matrice des coefficients, $X$ le vecteur colonne des inconnues et $B$ le second membre. Un système linéaire a <b>soit aucune solution, soit une seule, soit une infinité</b>.</p>
<h3>Méthode du pivot de Gauss</h3>
<p>Opérations élémentaires autorisées (elles donnent un système équivalent) :</p>
<ul>
<li>$L_i \leftarrow L_i + \lambda L_j$ ($j \neq i$) ;</li>
<li>$L_i \leftrightarrow L_j$ ;</li>
<li>$L_i \leftarrow \alpha L_i$ avec $\alpha \neq 0$.</li>
</ul>
<div class="flow"><span>Choisir un pivot non nul</span><span>Annuler les coefficients en dessous</span><span>Recommencer sur le sous-système</span><span>Système échelonné</span><span>Remonter</span></div>
<div class="callout tip"><b>Exemple corrigé</b> $\begin{cases} x + y + z = 6 \\ x + 2y + 3z = 14 \\ 2x + y - z = 1 \end{cases}$<br>
$L_2 \leftarrow L_2 - L_1$ : $y + 2z = 8$ ; $L_3 \leftarrow L_3 - 2L_1$ : $-y - 3z = -11$.<br>
$L_3 \leftarrow L_3 + L_2$ : $-z = -3$, donc $z = 3$.<br>
Remontée : $y = 8 - 2\times 3 = 2$, puis $x = 6 - 2 - 3 = 1$. Solution : $(1, 2, 3)$.</div>
<h3>Rang</h3>
<p>Le <b>rang</b> d'une matrice est le nombre de pivots (lignes non nulles) après échelonnement ; c'est aussi la dimension de l'espace engendré par ses colonnes (ou ses lignes). $\operatorname{rg} A \leq \min(n, p)$.</p>
<ul>
<li>Le système est <b>compatible</b> si et seulement si $\operatorname{rg} A = \operatorname{rg}(A \mid B)$.</li>
<li>S'il est compatible avec $\operatorname{rg} A = r$ et $p$ inconnues, les solutions dépendent de $p - r$ paramètres.</li>
<li>Système <b>homogène</b> $AX = 0$ : toujours la solution nulle ; des solutions non nulles existent si et seulement si $\operatorname{rg} A \lt p$ (pour $A$ carrée : $\det A = 0$).</li>
</ul>
<h3>Système de Cramer et formules de Cramer</h3>
<p>Si $A$ est carrée et $\det A \neq 0$, le système a une <b>unique</b> solution $X = A^{-1}B$, donnée par $$x_i = \frac{\det A_i}{\det A},$$ où $A_i$ est la matrice $A$ dans laquelle la colonne $i$ est remplacée par $B$.</p>
<div class="callout tip"><b>Exemple</b> $\begin{cases} 2x + 3y = 8 \\ x - y = -1 \end{cases}$ : $\det A = -2 - 3 = -5$ ; $x = \frac{\begin{vmatrix} 8 & 3 \\ -1 & -1 \end{vmatrix}}{-5} = \frac{-5}{-5} = 1$, $y = \frac{\begin{vmatrix} 2 & 8 \\ 1 & -1 \end{vmatrix}}{-5} = \frac{-10}{-5} = 2$.</div>
<div class="callout warn"><b>Pièges</b> Toute opération sur une ligne s'applique aussi au second membre. Ne remplace jamais une ligne par $0\times L_i$ (perte d'information). Cramer ne s'applique que si $\det A \neq 0$ ; si $\det A = 0$, il y a 0 ou une infinité de solutions : on conclut avec Gauss.</div>
<div class="callout key"><b>À retenir</b> Gauss = méthode universelle (échelonner puis remonter). Rang = nombre de pivots. $\det A \neq 0 \Leftrightarrow$ solution unique. Cramer : $x_i = \det A_i / \det A$.</div>`
    },
    {
      id: 'm11-s-ev',
      title: 'Espaces vectoriels et applications linéaires',
      html: String.raw`
<h3>Espaces et sous-espaces vectoriels</h3>
<p>Un <b>espace vectoriel</b> sur $\mathbb{R}$ est un ensemble stable par combinaisons linéaires (avec les règles de calcul usuelles) : $\mathbb{R}^n$, les polynômes $\mathbb{R}_n[X]$, les matrices $\mathcal{M}_{n,p}(\mathbb{R})$, les fonctions continues… Un <b>sous-espace vectoriel</b> $F \subset E$ contient $\vec 0$ et est stable par combinaison linéaire. Exemples : une droite ou un plan passant par l'origine ; l'ensemble des solutions de $AX = 0$.</p>
<h3>Familles libres, génératrices, bases</h3>
<ul>
<li><b>Libre</b> : $\lambda_1\vec u_1 + \dots + \lambda_p\vec u_p = \vec 0 \Rightarrow \lambda_1 = \dots = \lambda_p = 0$. Sinon elle est <b>liée</b> : l'un des vecteurs est combinaison linéaire des autres.</li>
<li><b>Génératrice</b> de $E$ : tout vecteur de $E$ est combinaison linéaire des $\vec u_i$ ; on note $E = \operatorname{Vect}(\vec u_1, \dots, \vec u_p)$.</li>
<li><b>Base</b> = famille libre <b>et</b> génératrice : chaque vecteur s'écrit de façon <b>unique</b> dans la base (ses coordonnées).</li>
<li><b>Dimension</b> = nombre de vecteurs d'une base (toutes les bases ont le même cardinal). $\dim\mathbb{R}^n = n$, $\dim\mathbb{R}_n[X] = n + 1$, $\dim\mathcal{M}_{n,p} = np$.</li>
</ul>
<p>Dans un espace de dimension $n$ : une famille libre a au plus $n$ vecteurs, une famille génératrice au moins $n$ ; une famille d'<b>exactement</b> $n$ vecteurs est une base dès qu'elle est libre <b>ou</b> génératrice. $n$ vecteurs de $\mathbb{R}^n$ forment une base $\Leftrightarrow$ leur déterminant est non nul.</p>
<h3>Applications linéaires</h3>
<p>$f : E \to F$ est <b>linéaire</b> si $f(\lambda\vec u + \mu\vec v) = \lambda f(\vec u) + \mu f(\vec v)$. Conséquence : $f(\vec 0) = \vec 0$.</p>
<p><b>Matrice associée</b> dans des bases $\mathcal B = (\vec e_1, \dots, \vec e_p)$ de $E$ et $\mathcal C$ de $F$ : la colonne $j$ contient les coordonnées de $f(\vec e_j)$ dans $\mathcal C$. Alors $Y = AX$ traduit $\vec y = f(\vec x)$ ; la composée $g\circ f$ a pour matrice le produit $BA$ ; $f$ bijective $\Leftrightarrow$ $A$ inversible.</p>
<h4>Noyau, image, théorème du rang</h4>
<ul>
<li>$\ker f = \{\vec u \in E,\ f(\vec u) = \vec 0\}$ : sous-espace de $E$ ; $f$ injective $\Leftrightarrow \ker f = \{\vec 0\}$.</li>
<li>$\operatorname{Im} f = f(E)$ : sous-espace de $F$, engendré par les colonnes de $A$ ; $f$ surjective $\Leftrightarrow \operatorname{Im} f = F$.</li>
<li>$\operatorname{rg} f = \dim\operatorname{Im} f = \operatorname{rg} A$.</li>
<li><b>Théorème du rang</b> : $\dim E = \dim\ker f + \operatorname{rg} f$. Si $\dim E = \dim F$ : injective $\Leftrightarrow$ surjective $\Leftrightarrow$ bijective.</li>
</ul>
<p><b>Changement de base</b> : si $P$ est la matrice de passage (colonnes = nouveaux vecteurs de base exprimés dans l'ancienne), la matrice de $f$ (endomorphisme) dans la nouvelle base est $A' = P^{-1}AP$.</p>
<div class="callout tip"><b>Exemple corrigé</b> $f(x, y, z) = (x + y + z,\ x - y)$ de $\mathbb{R}^3$ dans $\mathbb{R}^2$.<br>
Matrice : $f(\vec e_1) = (1, 1)$, $f(\vec e_2) = (1, -1)$, $f(\vec e_3) = (1, 0)$, d'où $A = \begin{pmatrix} 1 & 1 & 1 \\ 1 & -1 & 0 \end{pmatrix}$, de rang 2.<br>
Théorème du rang : $\dim\ker f = 3 - 2 = 1$. En effet $x = y$ et $z = -2x$ : $\ker f = \operatorname{Vect}\big((1, 1, -2)\big)$. Et $\operatorname{Im} f = \mathbb{R}^2$ : $f$ est surjective, non injective.</div>
<div class="callout warn"><b>Pièges</b> $f(x) = x + 1$ n'est pas linéaire (car $f(0) \neq 0$) : elle est affine. Dans la matrice associée, les images des vecteurs de base se placent en <b>colonnes</b>, pas en lignes. Le théorème du rang porte sur la dimension de l'espace de <b>départ</b>.</div>
<div class="callout key"><b>À retenir</b> Base = libre + génératrice ; dimension = cardinal d'une base. Matrice de $f$ : colonnes = images de la base. $\dim E = \dim\ker f + \operatorname{rg} f$.</div>`
    },
    {
      id: 'm11-s-diag',
      title: 'Valeurs propres et diagonalisation',
      html: String.raw`
<h3>Valeurs propres et vecteurs propres</h3>
<p>Soit $A \in \mathcal{M}_n(\mathbb{R})$. Le réel $\lambda$ est une <b>valeur propre</b> de $A$ s'il existe un vecteur $\vec u \neq \vec 0$ tel que $$A\vec u = \lambda\vec u.$$ $\vec u$ est alors un <b>vecteur propre</b> associé (la matrice ne fait que l'étirer). Le <b>sous-espace propre</b> est $E_\lambda = \ker(A - \lambda I_n)$.</p>
<h3>Polynôme caractéristique</h3>
<p>$\lambda$ est valeur propre $\Leftrightarrow A - \lambda I_n$ n'est pas inversible $\Leftrightarrow$ $$\chi_A(\lambda) = \det(A - \lambda I_n) = 0.$$ $\chi_A$ est un polynôme de degré $n$ (certains cours utilisent $\det(\lambda I_n - A)$, qui a les mêmes racines). Pour $n = 2$ : $$\chi_A(\lambda) = \lambda^2 - \operatorname{tr}(A)\,\lambda + \det A.$$</p>
<ul>
<li>Somme des valeurs propres (avec multiplicité) $= \operatorname{tr} A$ ; produit $= \det A$.</li>
<li>Matrice triangulaire : les valeurs propres sont les coefficients diagonaux.</li>
<li>$A$ inversible $\Leftrightarrow 0$ n'est pas valeur propre.</li>
</ul>
<h3>Diagonalisation</h3>
<p>$A$ est <b>diagonalisable</b> s'il existe $P$ inversible et $D$ diagonale telles que $$A = PDP^{-1}.$$ Les colonnes de $P$ sont des vecteurs propres et les coefficients de $D$ les valeurs propres correspondantes, <b>dans le même ordre</b>.</p>
<ul>
<li>$A$ diagonalisable $\Leftrightarrow$ il existe une base de vecteurs propres $\Leftrightarrow$ la somme des dimensions des sous-espaces propres vaut $n$.</li>
<li><b>Condition suffisante</b> : $n$ valeurs propres distinctes.</li>
<li><b>Théorème spectral</b> : toute matrice symétrique réelle est diagonalisable, dans une base orthonormée ($P^{-1} = P^T$).</li>
</ul>
<div class="callout info"><b>Méthode : diagonaliser</b><ol>
<li>Calculer $\chi_A(\lambda) = \det(A - \lambda I)$ et ses racines.</li>
<li>Pour chaque $\lambda$, résoudre $(A - \lambda I)\vec u = \vec 0$ : base de $E_\lambda$.</li>
<li>Vérifier que l'on a $n$ vecteurs propres indépendants ; former $P$ (en colonnes) et $D$.</li>
<li>Alors $A = PDP^{-1}$ et $A^k = PD^kP^{-1}$, avec $D^k$ diagonale de coefficients $\lambda_i^k$.</li>
</ol></div>
<div class="callout tip"><b>Exemple corrigé</b> $A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$ : $\chi_A(\lambda) = (2 - \lambda)^2 - 1 = \lambda^2 - 4\lambda + 3 = (\lambda - 1)(\lambda - 3)$.<br>
$E_1$ : $x + y = 0$, vecteur $(1, -1)$. $E_3$ : $-x + y = 0$, vecteur $(1, 1)$.<br>
$P = \begin{pmatrix} 1 & 1 \\ -1 & 1 \end{pmatrix}$, $D = \begin{pmatrix} 1 & 0 \\ 0 & 3 \end{pmatrix}$, $P^{-1} = \frac12\begin{pmatrix} 1 & -1 \\ 1 & 1 \end{pmatrix}$.<br>
$A^n = PD^nP^{-1} = \dfrac12\begin{pmatrix} 3^n + 1 & 3^n - 1 \\ 3^n - 1 & 3^n + 1 \end{pmatrix}$ (vérification : $n = 1$ redonne $A$).</div>
<p><b>Applications</b> : suites récurrentes couplées $X_{k+1} = AX_k \Rightarrow X_k = A^kX_0$ ; systèmes différentiels $X' = AX$ (découplés dans la base propre) ; modes propres de vibration ; chaînes de Markov ; analyse en composantes principales.</p>
<div class="callout warn"><b>Pièges</b> Un vecteur propre n'est <b>jamais</b> nul. L'ordre des colonnes de $P$ doit correspondre à l'ordre des valeurs propres dans $D$. Toute matrice n'est pas diagonalisable : $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ a la valeur propre double 1 mais $E_1$ n'est que de dimension 1. Triangulaire $\not\Rightarrow$ diagonalisable.</div>
<div class="callout key"><b>À retenir</b> $A\vec u = \lambda\vec u$, $\vec u \neq \vec 0$ ; $\chi_A(\lambda) = \det(A - \lambda I)$ ; $\sum\lambda_i = \operatorname{tr}A$, $\prod\lambda_i = \det A$ ; $n$ valeurs propres distinctes $\Rightarrow$ diagonalisable ; $A^k = PD^kP^{-1}$.</div>`
    },
    {
      id: 'm11-s-memo',
      title: 'Mémo : tableau récapitulatif',
      html: String.raw`
<table class="tbl">
<tr><th>Notion</th><th>Formule / critère</th><th>Résultat</th></tr>
<tr><td>Norme</td><td>$\|\vec u\| = \sqrt{x^2 + y^2 + z^2}$</td><td>nombre $\geq 0$</td></tr>
<tr><td>Produit scalaire</td><td>$xx' + yy' + zz' = \|\vec u\|\|\vec v\|\cos\theta$</td><td>nombre ; nul $\Leftrightarrow$ orthogonaux</td></tr>
<tr><td>Projeté sur $\vec v$</td><td>$\frac{\vec u\cdot\vec v}{\|\vec v\|^2}\vec v$</td><td>vecteur</td></tr>
<tr><td>Produit vectoriel</td><td>$(yz' - zy',\ zx' - xz',\ xy' - yx')$</td><td>vecteur $\perp$ ; norme = aire</td></tr>
<tr><td>Produit mixte</td><td>$(\vec u\wedge\vec v)\cdot\vec w = \det(\vec u, \vec v, \vec w)$</td><td>volume ; nul $\Leftrightarrow$ coplanaires</td></tr>
<tr><td>Plan</td><td>$ax + by + cz + d = 0$</td><td>normale $(a, b, c)$</td></tr>
<tr><td>Distance point-plan</td><td>$\frac{|ax_0 + by_0 + cz_0 + d|}{\sqrt{a^2 + b^2 + c^2}}$</td><td>nombre</td></tr>
<tr><td>Produit matriciel</td><td>$(AB)_{ij} = \sum_k a_{ik}b_{kj}$</td><td>$AB \neq BA$ en général</td></tr>
<tr><td>Transposée</td><td>$(AB)^T = B^TA^T$</td><td>ordre inversé</td></tr>
<tr><td>Déterminant</td><td>$ad - bc$ ; Sarrus ; développement</td><td>$\det(AB) = \det A\det B$</td></tr>
<tr><td>Inverse $2\times 2$</td><td>$\frac{1}{ad - bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$</td><td>existe $\Leftrightarrow \det \neq 0$</td></tr>
<tr><td>Système $AX = B$</td><td>Gauss ; Cramer $x_i = \frac{\det A_i}{\det A}$</td><td>0, 1 ou une infinité de solutions</td></tr>
<tr><td>Théorème du rang</td><td>$\dim E = \dim\ker f + \operatorname{rg} f$</td><td></td></tr>
<tr><td>Valeurs propres</td><td>$\det(A - \lambda I) = 0$</td><td>$\sum = \operatorname{tr}$, $\prod = \det$</td></tr>
<tr><td>Diagonalisation</td><td>$A = PDP^{-1}$</td><td>$A^k = PD^kP^{-1}$</td></tr>
</table>
<div class="callout key"><b>Réflexes</b> Vérifier un produit vectoriel par l'orthogonalité ; vérifier un inverse par $AA^{-1} = I$ ; vérifier des valeurs propres par la trace et le déterminant ; vérifier une solution de système en la réinjectant.</div>`
    }
  ],

  /* ============================== FORMULAIRE ============================== */
  formulas: [
    { id: 'm11-fo-norme', name: 'Norme d\'un vecteur', tex: String.raw`\|\vec u\| = \sqrt{x^2 + y^2 + z^2}`, note: String.raw`en repère orthonormé ; $\|\lambda\vec u\| = |\lambda|\,\|\vec u\|$` },
    { id: 'm11-fo-distance', name: 'Distance entre deux points', tex: String.raw`AB = \sqrt{(x_B - x_A)^2 + (y_B - y_A)^2 + (z_B - z_A)^2}` },
    { id: 'm11-fo-unitaire', name: 'Vecteur unitaire', tex: String.raw`\vec u_0 = \frac{\vec u}{\|\vec u\|}`, note: String.raw`même direction et même sens que $\vec u$, de norme 1` },
    { id: 'm11-fo-colin', name: 'Colinéarité dans le plan', tex: String.raw`\vec u \parallel \vec v \iff xy' - x'y = 0` },
    { id: 'm11-fo-ps-ana', name: 'Produit scalaire (analytique)', tex: String.raw`\vec u\cdot\vec v = xx' + yy' + zz'`, note: String.raw`dans une base orthonormée` },
    { id: 'm11-fo-ps-geo', name: 'Produit scalaire (géométrique)', tex: String.raw`\vec u\cdot\vec v = \|\vec u\|\,\|\vec v\|\cos\theta`, note: String.raw`d'où $\cos\theta = \frac{\vec u\cdot\vec v}{\|\vec u\|\|\vec v\|}$` },
    { id: 'm11-fo-ps-norme', name: 'Produit scalaire et norme', tex: String.raw`\vec u\cdot\vec u = \|\vec u\|^2` },
    { id: 'm11-fo-ps-ident', name: 'Identité remarquable vectorielle', tex: String.raw`\|\vec u + \vec v\|^2 = \|\vec u\|^2 + 2\,\vec u\cdot\vec v + \|\vec v\|^2`, note: String.raw`Pythagore si $\vec u\perp\vec v$` },
    { id: 'm11-fo-ortho', name: 'Orthogonalité', tex: String.raw`\vec u\perp\vec v \iff \vec u\cdot\vec v = 0` },
    { id: 'm11-fo-projection', name: 'Projection orthogonale sur un vecteur', tex: String.raw`p_{\vec v}(\vec u) = \frac{\vec u\cdot\vec v}{\|\vec v\|^2}\,\vec v` },
    { id: 'm11-fo-cs', name: 'Inégalité de Cauchy-Schwarz', tex: String.raw`|\vec u\cdot\vec v| \leq \|\vec u\|\,\|\vec v\|`, note: String.raw`égalité $\iff$ vecteurs colinéaires` },
    { id: 'm11-fo-pv', name: 'Produit vectoriel en coordonnées', tex: String.raw`\begin{pmatrix} x \\ y \\ z \end{pmatrix}\wedge\begin{pmatrix} x' \\ y' \\ z' \end{pmatrix} = \begin{pmatrix} yz' - zy' \\ zx' - xz' \\ xy' - yx' \end{pmatrix}`, note: String.raw`base orthonormée directe` },
    { id: 'm11-fo-pv-norme', name: 'Norme du produit vectoriel', tex: String.raw`\|\vec u\wedge\vec v\| = \|\vec u\|\,\|\vec v\|\,|\sin\theta|`, note: String.raw`aire du parallélogramme ; triangle : $\frac12\|\overrightarrow{AB}\wedge\overrightarrow{AC}\|$` },
    { id: 'm11-fo-pv-anti', name: 'Antisymétrie du produit vectoriel', tex: String.raw`\vec v\wedge\vec u = -\,\vec u\wedge\vec v`, note: String.raw`donc $\vec u\wedge\vec u = \vec 0$` },
    { id: 'm11-fo-base-directe', name: 'Base orthonormée directe', tex: String.raw`\vec i\wedge\vec j = \vec k,\quad \vec j\wedge\vec k = \vec i,\quad \vec k\wedge\vec i = \vec j` },
    { id: 'm11-fo-mixte', name: 'Produit mixte', tex: String.raw`[\vec u, \vec v, \vec w] = (\vec u\wedge\vec v)\cdot\vec w = \det(\vec u, \vec v, \vec w)`, note: String.raw`$|[\vec u,\vec v,\vec w]|$ = volume du parallélépipède ; nul $\iff$ coplanaires` },
    { id: 'm11-fo-plan', name: 'Équation cartésienne d\'un plan', tex: String.raw`ax + by + cz + d = 0`, note: String.raw`$\vec n = (a, b, c)$ est normal au plan` },
    { id: 'm11-fo-droite-param', name: 'Droite de l\'espace (paramétrique)', tex: String.raw`\begin{cases} x = x_A + t\alpha \\ y = y_A + t\beta \\ z = z_A + t\gamma \end{cases},\ t \in \mathbb{R}`, note: String.raw`droite passant par $A$, dirigée par $\vec u = (\alpha, \beta, \gamma)$` },
    { id: 'm11-fo-dist-plan', name: 'Distance d\'un point à un plan', tex: String.raw`d(M_0, \mathcal{P}) = \frac{|ax_0 + by_0 + cz_0 + d|}{\sqrt{a^2 + b^2 + c^2}}`, note: String.raw`dans le plan : $\frac{|ax_0 + by_0 + c|}{\sqrt{a^2 + b^2}}$ pour une droite` },
    { id: 'm11-fo-dist-droite', name: 'Distance d\'un point à une droite (espace)', tex: String.raw`d(M, \mathcal{D}) = \frac{\|\overrightarrow{AM}\wedge\vec u\|}{\|\vec u\|}` },
    { id: 'm11-fo-produit', name: 'Produit matriciel', tex: String.raw`(AB)_{ij} = \sum_{k=1}^{p} a_{ik}\,b_{kj}`, note: String.raw`$(n\times p)\cdot(p\times q) \to n\times q$ ; $AB \neq BA$ en général` },
    { id: 'm11-fo-transposee', name: 'Transposée d\'un produit', tex: String.raw`(AB)^T = B^T A^T` },
    { id: 'm11-fo-trace', name: 'Trace', tex: String.raw`\operatorname{tr}(A) = \sum_{i=1}^{n} a_{ii},\qquad \operatorname{tr}(AB) = \operatorname{tr}(BA)` },
    { id: 'm11-fo-binome', name: 'Binôme matriciel', tex: String.raw`(A + B)^n = \sum_{k=0}^{n}\binom{n}{k}A^kB^{n-k}`, note: String.raw`valable seulement si $AB = BA$` },
    { id: 'm11-fo-det2', name: 'Déterminant 2×2', tex: String.raw`\begin{vmatrix} a & b \\ c & d \end{vmatrix} = ad - bc` },
    { id: 'm11-fo-sarrus', name: 'Déterminant 3×3 (Sarrus)', tex: String.raw`\det A = a_{11}a_{22}a_{33} + a_{12}a_{23}a_{31} + a_{13}a_{21}a_{32} - a_{13}a_{22}a_{31} - a_{11}a_{23}a_{32} - a_{12}a_{21}a_{33}` },
    { id: 'm11-fo-dev', name: 'Développement selon la ligne i', tex: String.raw`\det A = \sum_{j=1}^{n}(-1)^{i+j}\,a_{ij}\,\Delta_{ij}`, note: String.raw`$\Delta_{ij}$ : mineur (on supprime ligne $i$ et colonne $j$)` },
    { id: 'm11-fo-det-prod', name: 'Déterminant d\'un produit', tex: String.raw`\det(AB) = \det A\,\det B`, note: String.raw`$\det(A^T) = \det A$, $\det(A^{-1}) = \frac{1}{\det A}$` },
    { id: 'm11-fo-det-lambda', name: 'Déterminant et scalaire', tex: String.raw`\det(\lambda A) = \lambda^n\det A`, note: String.raw`pour $A \in \mathcal{M}_n$` },
    { id: 'm11-fo-det-tri', name: 'Déterminant d\'une matrice triangulaire', tex: String.raw`\det A = a_{11}\,a_{22}\cdots a_{nn}` },
    { id: 'm11-fo-inv2', name: 'Inverse d\'une matrice 2×2', tex: String.raw`\begin{pmatrix} a & b \\ c & d \end{pmatrix}^{-1} = \frac{1}{ad - bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}`, note: String.raw`si $ad - bc \neq 0$` },
    { id: 'm11-fo-inv-com', name: 'Inverse par la comatrice', tex: String.raw`A^{-1} = \frac{1}{\det A}\,\mathrm{Com}(A)^T`, note: String.raw`cofacteurs $(-1)^{i+j}\Delta_{ij}$` },
    { id: 'm11-fo-inv-prod', name: 'Inverse d\'un produit', tex: String.raw`(AB)^{-1} = B^{-1}A^{-1}` },
    { id: 'm11-fo-cramer', name: 'Formules de Cramer', tex: String.raw`x_i = \frac{\det A_i}{\det A}`, note: String.raw`$A_i$ : colonne $i$ remplacée par le second membre ; si $\det A \neq 0$` },
    { id: 'm11-fo-libre', name: 'Famille libre', tex: String.raw`\sum_{i=1}^{p}\lambda_i\vec u_i = \vec 0 \Rightarrow \lambda_1 = \dots = \lambda_p = 0` },
    { id: 'm11-fo-lineaire', name: 'Application linéaire', tex: String.raw`f(\lambda\vec u + \mu\vec v) = \lambda f(\vec u) + \mu f(\vec v)` },
    { id: 'm11-fo-rang', name: 'Théorème du rang', tex: String.raw`\dim E = \dim\ker f + \operatorname{rg} f` },
    { id: 'm11-fo-chgt-base', name: 'Changement de base', tex: String.raw`A' = P^{-1}AP`, note: String.raw`$P$ : matrice de passage (nouvelle base en colonnes)` },
    { id: 'm11-fo-vp', name: 'Valeur propre, vecteur propre', tex: String.raw`A\vec u = \lambda\vec u,\quad \vec u \neq \vec 0` },
    { id: 'm11-fo-polycar', name: 'Polynôme caractéristique', tex: String.raw`\chi_A(\lambda) = \det(A - \lambda I_n)`, note: String.raw`les valeurs propres sont ses racines` },
    { id: 'm11-fo-polycar2', name: 'Polynôme caractéristique 2×2', tex: String.raw`\chi_A(\lambda) = \lambda^2 - \operatorname{tr}(A)\,\lambda + \det A` },
    { id: 'm11-fo-tr-det-vp', name: 'Trace, déterminant et valeurs propres', tex: String.raw`\operatorname{tr}A = \sum_i \lambda_i,\qquad \det A = \prod_i \lambda_i` },
    { id: 'm11-fo-diag', name: 'Diagonalisation et puissances', tex: String.raw`A = PDP^{-1} \Rightarrow A^k = PD^kP^{-1}`, note: String.raw`colonnes de $P$ : vecteurs propres ; $D$ : valeurs propres dans le même ordre` }
  ],

  /* ============================== FLASHCARDS ============================== */
  flashcards: [
    { id: 'm11-f-ps', front: String.raw`Produit scalaire : deux définitions et usage principal`, back: String.raw`$\vec u\cdot\vec v = xx' + yy' + zz'$ (base orthonormée) $= \|\vec u\|\|\vec v\|\cos\theta$. C'est un <b>nombre</b>. Usage : tester l'orthogonalité ($= 0$), calculer un angle, une projection, une norme ($\vec u\cdot\vec u = \|\vec u\|^2$).` },
    { id: 'm11-f-proj', front: String.raw`Projeté orthogonal de $\vec u$ sur la direction de $\vec v$`, back: String.raw`$p(\vec u) = \dfrac{\vec u\cdot\vec v}{\|\vec v\|^2}\,\vec v$. On divise par la norme <b>au carré</b> ; si $\vec v$ est unitaire : $(\vec u\cdot\vec v)\vec v$.` },
    { id: 'm11-f-pv', front: String.raw`Produit vectoriel $\vec u\wedge\vec v$ : caractérisation et propriétés`, back: String.raw`Vecteur orthogonal à $\vec u$ et $\vec v$, de norme $\|\vec u\|\|\vec v\||\sin\theta|$ (aire du parallélogramme), tel que $(\vec u, \vec v, \vec u\wedge\vec v)$ soit directe. Antisymétrique ; nul $\iff$ colinéaires.` },
    { id: 'm11-f-mixte', front: String.raw`Produit mixte : définition et interprétation`, back: String.raw`$[\vec u, \vec v, \vec w] = (\vec u\wedge\vec v)\cdot\vec w = \det(\vec u, \vec v, \vec w)$. Sa valeur absolue est le volume du parallélépipède ; il est nul $\iff$ les trois vecteurs sont coplanaires.` },
    { id: 'm11-f-plan', front: String.raw`Comment obtenir l'équation d'un plan passant par trois points $A$, $B$, $C$ ?`, back: String.raw`1) $\vec n = \overrightarrow{AB}\wedge\overrightarrow{AC} = (a, b, c)$ ; 2) écrire $ax + by + cz + d = 0$ ; 3) trouver $d$ en écrivant que $A$ appartient au plan.` },
    { id: 'm11-f-prodmat', front: String.raw`Produit matriciel : règle de calcul et pièges`, back: String.raw`$(AB)_{ij} = \sum_k a_{ik}b_{kj}$ (ligne de $A$ × colonne de $B$) ; tailles $(n\times p)(p\times q) = n\times q$. Pièges : $AB \neq BA$ ; $AB = 0 \not\Rightarrow A = 0$ ou $B = 0$ ; $(A+B)^2 \neq A^2 + 2AB + B^2$.` },
    { id: 'm11-f-det', front: String.raw`Propriétés essentielles du déterminant`, back: String.raw`$\det(AB) = \det A\det B$ ; $\det A^T = \det A$ ; $\det(\lambda A) = \lambda^n\det A$ ; triangulaire : produit de la diagonale ; échange de lignes : signe changé ; $L_i \leftarrow L_i + \lambda L_j$ : inchangé ; $\det A \neq 0 \iff A$ inversible.` },
    { id: 'm11-f-inversible', front: String.raw`Caractérisations d'une matrice carrée inversible $A \in \mathcal{M}_n$`, back: String.raw`$\det A \neq 0$ $\iff$ $\operatorname{rg}A = n$ $\iff$ $AX = 0$ n'a que la solution nulle $\iff$ colonnes formant une base $\iff$ $0$ n'est pas valeur propre $\iff$ $AX = B$ a une unique solution pour tout $B$.` },
    { id: 'm11-f-gauss', front: String.raw`Méthode du pivot de Gauss`, back: String.raw`Opérations : $L_i \leftarrow L_i + \lambda L_j$, $L_i \leftrightarrow L_j$, $L_i \leftarrow \alpha L_i$ ($\alpha \neq 0$), appliquées aussi au second membre. On échelonne (zéros sous chaque pivot), puis on remonte. Le nombre de pivots est le rang.` },
    { id: 'm11-f-rang', front: String.raw`Rang d'une matrice et compatibilité d'un système`, back: String.raw`$\operatorname{rg}A$ = nombre de pivots = dimension de l'espace engendré par les colonnes. $AX = B$ est compatible $\iff \operatorname{rg}A = \operatorname{rg}(A|B)$ ; il y a alors $p - \operatorname{rg}A$ paramètres libres ($p$ inconnues).` },
    { id: 'm11-f-libre', front: String.raw`Famille libre, famille génératrice`, back: String.raw`Libre : $\sum\lambda_i\vec u_i = \vec 0 \Rightarrow$ tous les $\lambda_i$ nuls (aucun vecteur n'est combinaison des autres). Génératrice de $E$ : tout vecteur de $E$ est combinaison linéaire des $\vec u_i$.` },
    { id: 'm11-f-base', front: String.raw`Base et dimension`, back: String.raw`Base = famille libre et génératrice (coordonnées uniques). Dimension = nombre de vecteurs d'une base. En dimension $n$, $n$ vecteurs libres (ou générateurs) forment une base. $\dim\mathbb{R}^n = n$, $\dim\mathbb{R}_n[X] = n+1$.` },
    { id: 'm11-f-matrice-f', front: String.raw`Matrice d'une application linéaire dans une base`, back: String.raw`La colonne $j$ contient les coordonnées de $f(\vec e_j)$ (image du $j$-ième vecteur de base). Composée $\leftrightarrow$ produit de matrices ; $f$ bijective $\iff$ matrice inversible.` },
    { id: 'm11-f-noyau', front: String.raw`Noyau, image et théorème du rang`, back: String.raw`$\ker f = \{\vec u : f(\vec u) = \vec 0\}$ (injective $\iff \ker f = \{\vec 0\}$) ; $\operatorname{Im}f = f(E)$, engendrée par les colonnes. $\dim E = \dim\ker f + \operatorname{rg}f$.` },
    { id: 'm11-f-vp', front: String.raw`Valeur propre et vecteur propre : définition et calcul`, back: String.raw`$A\vec u = \lambda\vec u$ avec $\vec u \neq \vec 0$. Les valeurs propres sont les racines de $\chi_A(\lambda) = \det(A - \lambda I)$ ; les vecteurs propres associés à $\lambda$ forment $\ker(A - \lambda I)$ (privé de $\vec 0$).` },
    { id: 'm11-f-diag', front: String.raw`Quand une matrice est-elle diagonalisable ?`, back: String.raw`$\iff$ il existe une base de vecteurs propres $\iff \sum\dim E_\lambda = n$. Suffisant : $n$ valeurs propres distinctes, ou $A$ symétrique réelle. Contre-exemple : $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$.` },
    { id: 'm11-f-puissance', front: String.raw`Calculer $A^n$ grâce à la diagonalisation`, back: String.raw`Si $A = PDP^{-1}$, alors $A^n = PD^nP^{-1}$ (les $P^{-1}P$ intermédiaires se simplifient), avec $D^n = \operatorname{diag}(\lambda_1^n, \dots, \lambda_k^n)$.` }
  ],

  quiz: [
    { id: 'm11-q-001', q: String.raw`Que vaut le produit scalaire de $\vec u = (2, -1, 3)$ et $\vec v = (1, 4, 0)$ ?`,
      choices: [String.raw`$6$`, String.raw`$(2, -4, 0)$`, String.raw`$-2$`, String.raw`$10$`], answer: 2,
      explain: String.raw`$\vec u\cdot\vec v = 2\times 1 + (-1)\times 4 + 3\times 0 = 2 - 4 + 0 = -2$.`,
      why: { 0: String.raw`Tu as oublié le signe moins de $-1$ : $(-1)\times 4 = -4$, pas $+4$.`, 1: String.raw`Ce sont les produits coordonnée par coordonnée ; le produit scalaire est leur <b>somme</b>, c'est un nombre.`, 3: String.raw`Tu as ajouté au lieu de multiplier quelque part : le produit scalaire est $xx' + yy' + zz'$.` },
      level: 1 },
    { id: 'm11-q-002', q: String.raw`Quelle est la norme de $\vec u = (2, -2, 1)$ ?`,
      choices: [String.raw`$9$`, String.raw`$1$`, String.raw`$5$`, String.raw`$3$`], answer: 3,
      explain: String.raw`$\|\vec u\| = \sqrt{2^2 + (-2)^2 + 1^2} = \sqrt{9} = 3$.`,
      why: { 0: String.raw`$9$ est $\|\vec u\|^2$ : il manque la racine carrée.`, 1: String.raw`Tu as additionné les coordonnées ($2 - 2 + 1$) : il faut additionner leurs <b>carrés</b> puis prendre la racine.`, 2: String.raw`$|2| + |-2| + |1| = 5$ n'est pas la norme euclidienne : $\sqrt{x^2 + y^2 + z^2}$.` },
      level: 1 },
    { id: 'm11-q-003', q: String.raw`Deux vecteurs non nuls $\vec u$ et $\vec v$ de l'espace sont orthogonaux si et seulement si :`,
      choices: [String.raw`$\vec u\cdot\vec v = 0$`, String.raw`$\vec u\wedge\vec v = \vec 0$`, String.raw`$\|\vec u\| = \|\vec v\|$`, String.raw`$\vec u + \vec v = \vec 0$`], answer: 0,
      explain: String.raw`Par définition, $\vec u\perp\vec v \iff \vec u\cdot\vec v = 0$ (car $\cos\theta = 0$).`,
      why: { 1: String.raw`$\vec u\wedge\vec v = \vec 0$ caractérise au contraire les vecteurs <b>colinéaires</b>.`, 2: String.raw`L'égalité des normes n'a rien à voir avec l'angle entre les vecteurs.`, 3: String.raw`$\vec u + \vec v = \vec 0$ signifie que les vecteurs sont opposés, donc colinéaires.` },
      level: 1 },
    { id: 'm11-q-004', q: String.raw`Le projeté orthogonal de $\vec u$ sur la droite dirigée par $\vec v \neq \vec 0$ est :`,
      choices: [String.raw`$\dfrac{\vec u\cdot\vec v}{\|\vec v\|}\,\vec v$`, String.raw`$\dfrac{\vec u\cdot\vec v}{\|\vec u\|^2}\,\vec u$`, String.raw`$\dfrac{\vec u\cdot\vec v}{\|\vec v\|^2}\,\vec v$`, String.raw`$(\vec u\cdot\vec v)\,\vec u$`], answer: 2,
      explain: String.raw`Le projeté est colinéaire à $\vec v$ : $p = k\vec v$ avec $(\vec u - k\vec v)\cdot\vec v = 0$, d'où $k = \frac{\vec u\cdot\vec v}{\|\vec v\|^2}$.`,
      why: { 0: String.raw`Il faut diviser par $\|\vec v\|^2$ (une fois pour normaliser le produit scalaire, une fois pour le vecteur $\vec v$). Ta formule ne marche que si $\|\vec v\| = 1$.`, 1: String.raw`C'est le projeté de $\vec v$ sur $\vec u$ (rôles inversés) : le résultat doit être colinéaire à $\vec v$.`, 3: String.raw`Le résultat doit être colinéaire à $\vec v$, et il manque la division par $\|\vec v\|^2$.` },
      level: 2 },
    { id: 'm11-q-005', q: String.raw`On sait que $\|\vec u\| = 2$, $\|\vec v\| = 3$ et $\vec u\cdot\vec v = 3$. L'angle $\theta$ entre $\vec u$ et $\vec v$ vaut :`,
      choices: [String.raw`$\frac{\pi}{6}$`, String.raw`$\frac{\pi}{3}$`, String.raw`$\frac{2\pi}{3}$`, String.raw`$\frac{\pi}{4}$`], answer: 1,
      explain: String.raw`$\cos\theta = \frac{3}{2\times 3} = \frac12$, donc $\theta = \frac{\pi}{3}$.`,
      why: { 0: String.raw`$\frac{\pi}{6}$ a pour <b>sinus</b> $\frac12$ : confusion sinus/cosinus.`, 2: String.raw`$\cos\frac{2\pi}{3} = -\frac12$ : le produit scalaire est positif, l'angle est aigu.`, 3: String.raw`$\cos\frac{\pi}{4} = \frac{\sqrt2}{2} \neq \frac12$.` },
      level: 2 },
    { id: 'm11-q-006', q: String.raw`Pour tous vecteurs $\vec u$, $\vec v$, $\|\vec u + \vec v\|^2$ est égal à :`,
      choices: [String.raw`$\|\vec u\|^2 + \|\vec v\|^2$`, String.raw`$(\|\vec u\| + \|\vec v\|)^2$`, String.raw`$\|\vec u\|^2 + \vec u\cdot\vec v + \|\vec v\|^2$`, String.raw`$\|\vec u\|^2 + 2\,\vec u\cdot\vec v + \|\vec v\|^2$`], answer: 3,
      explain: String.raw`$\|\vec u + \vec v\|^2 = (\vec u + \vec v)\cdot(\vec u + \vec v) = \vec u\cdot\vec u + 2\,\vec u\cdot\vec v + \vec v\cdot\vec v$ par bilinéarité et symétrie.`,
      why: { 0: String.raw`Ce n'est vrai que si $\vec u\perp\vec v$ (Pythagore) : il manque le double produit.`, 1: String.raw`Ce n'est vrai que si $\vec u$ et $\vec v$ sont colinéaires de même sens (cas d'égalité de l'inégalité triangulaire).`, 2: String.raw`Il manque le facteur 2 du double produit, comme dans $(a+b)^2 = a^2 + 2ab + b^2$.` },
      level: 1 },
    { id: 'm11-q-007', q: String.raw`Le produit vectoriel $\vec u\wedge\vec v$ de deux vecteurs de l'espace est :`,
      choices: [String.raw`un vecteur orthogonal à $\vec u$ et à $\vec v$`, String.raw`un nombre réel`, String.raw`un vecteur colinéaire à $\vec u$`, String.raw`un vecteur du plan engendré par $\vec u$ et $\vec v$`], answer: 0,
      explain: String.raw`$\vec u\wedge\vec v$ est un vecteur orthogonal aux deux, de norme $\|\vec u\|\|\vec v\||\sin\theta|$.`,
      why: { 1: String.raw`C'est le produit <b>scalaire</b> (ou le produit mixte) qui donne un nombre.`, 2: String.raw`Il est orthogonal à $\vec u$, donc colinéaire seulement s'il est nul.`, 3: String.raw`Il est orthogonal à ce plan (sauf s'il est nul).` },
      level: 1 },
    { id: 'm11-q-008', q: String.raw`Pour tous vecteurs $\vec u$, $\vec v$ de l'espace, $\vec v\wedge\vec u$ vaut :`,
      choices: [String.raw`$\vec u\wedge\vec v$`, String.raw`$\vec 0$`, String.raw`$-\,\vec u\wedge\vec v$`], answer: 2,
      explain: String.raw`Le produit vectoriel est <b>antisymétrique</b> : échanger les vecteurs change le sens du résultat (règle de la main droite).`,
      why: { 0: String.raw`Le produit vectoriel n'est pas commutatif, il est antisymétrique.`, 1: String.raw`$\vec v\wedge\vec u = \vec 0$ seulement si les vecteurs sont colinéaires.` },
      level: 1 },
    { id: 'm11-q-009', q: String.raw`Dans une base orthonormée directe $(\vec i, \vec j, \vec k)$, que vaut $\vec i\wedge\vec k$ ?`,
      choices: [String.raw`$\vec j$`, String.raw`$\vec 0$`, String.raw`$\vec k$`, String.raw`$-\vec j$`], answer: 3,
      explain: String.raw`L'ordre circulaire donne $\vec k\wedge\vec i = \vec j$ ; par antisymétrie, $\vec i\wedge\vec k = -\vec j$.`,
      why: { 0: String.raw`$\vec j = \vec k\wedge\vec i$ : ici l'ordre $(\vec i, \vec k)$ est inversé par rapport au sens circulaire, d'où un signe moins.`, 1: String.raw`$\vec i$ et $\vec k$ ne sont pas colinéaires, leur produit vectoriel n'est pas nul.`, 2: String.raw`Le résultat doit être orthogonal à $\vec i$ et à $\vec k$, donc colinéaire à $\vec j$.` },
      level: 2 },
    { id: 'm11-q-010', q: String.raw`$\|\overrightarrow{AB}\wedge\overrightarrow{AC}\|$ est égal à :`,
      choices: [String.raw`l'aire du parallélogramme construit sur $\overrightarrow{AB}$ et $\overrightarrow{AC}$`, String.raw`l'aire du triangle $ABC$`, String.raw`le volume du tétraèdre $OABC$`, String.raw`$AB \times AC$`], answer: 0,
      explain: String.raw`$\|\vec u\wedge\vec v\| = \|\vec u\|\|\vec v\||\sin\theta|$ = base × hauteur du parallélogramme. Le triangle a une aire deux fois plus petite.`,
      why: { 1: String.raw`L'aire du triangle vaut la <b>moitié</b> : $\frac12\|\overrightarrow{AB}\wedge\overrightarrow{AC}\|$.`, 2: String.raw`Un volume fait intervenir trois vecteurs (produit mixte), pas deux.`, 3: String.raw`Il manque le facteur $|\sin\theta|$ ; l'égalité n'a lieu que si $\overrightarrow{AB}\perp\overrightarrow{AC}$.` },
      level: 2 },
    { id: 'm11-q-011', q: String.raw`Trois vecteurs $\vec u$, $\vec v$, $\vec w$ de l'espace sont coplanaires si et seulement si :`,
      choices: [String.raw`$\vec u\wedge\vec v = \vec 0$`, String.raw`$\vec u\cdot\vec v = \vec v\cdot\vec w = 0$`, String.raw`$\vec u + \vec v + \vec w = \vec 0$`, String.raw`$\det(\vec u, \vec v, \vec w) = 0$`], answer: 3,
      explain: String.raw`Le produit mixte $\det(\vec u,\vec v,\vec w)$ est le volume (signé) du parallélépipède : il est nul si et seulement si ce volume est plat, c'est-à-dire si les vecteurs sont coplanaires.`,
      why: { 0: String.raw`$\vec u\wedge\vec v = \vec 0$ (colinéarité de $\vec u$ et $\vec v$) suffit à la coplanarité, mais n'est pas nécessaire.`, 1: String.raw`Ce sont des conditions d'orthogonalité, sans lien avec la coplanarité.`, 2: String.raw`C'est une condition suffisante (alors $\vec w = -\vec u - \vec v$), pas nécessaire.` },
      level: 2 },
    { id: 'm11-q-012', q: String.raw`Un vecteur normal au plan d'équation $2x - y + 3z - 5 = 0$ est :`,
      choices: [String.raw`$(1, 2, 0)$`, String.raw`$(2, -1, 3)$`, String.raw`$(2, -1, -5)$`, String.raw`$(-1, 3, -5)$`], answer: 1,
      explain: String.raw`Dans $ax + by + cz + d = 0$, le vecteur $(a, b, c) = (2, -1, 3)$ est normal au plan.`,
      why: { 0: String.raw`$(1, 2, 0)$ vérifie $2\times 1 - 2 + 0 = 0$ : il est <b>orthogonal</b> à la normale, donc c'est un vecteur directeur du plan.`, 2: String.raw`Le terme constant $d = -5$ ne fait pas partie du vecteur normal.`, 3: String.raw`Tu as décalé les coefficients : la normale est $(a, b, c)$, les coefficients de $x$, $y$, $z$.` },
      level: 1 },
    { id: 'm11-q-013', q: String.raw`Dans l'espace muni d'un repère, l'ensemble des points vérifiant $x + 2y - z = 4$ est :`,
      choices: [String.raw`un plan`, String.raw`une droite`, String.raw`un point`, String.raw`une sphère`], answer: 0,
      explain: String.raw`Une équation linéaire $ax + by + cz + d = 0$ en dimension 3 définit un plan (de normale $(a, b, c)$).`,
      why: { 1: String.raw`Réflexe de géométrie plane : dans l'espace, une seule équation linéaire donne un plan ; une droite nécessite deux équations.`, 2: String.raw`Un point nécessite trois équations indépendantes.`, 3: String.raw`Une sphère a une équation du second degré : $(x-a)^2 + (y-b)^2 + (z-c)^2 = R^2$.` },
      level: 1 },
    { id: 'm11-q-014', q: String.raw`La distance de l'origine $O$ au plan $x + y + z - 1 = 0$ vaut :`,
      choices: [String.raw`$1$`, String.raw`$\frac13$`, String.raw`$\frac{1}{\sqrt3}$`, String.raw`$\sqrt3$`], answer: 2,
      explain: String.raw`$d = \frac{|0 + 0 + 0 - 1|}{\sqrt{1^2 + 1^2 + 1^2}} = \frac{1}{\sqrt3}$.`,
      why: { 0: String.raw`Tu as oublié de diviser par la norme du vecteur normal $\sqrt{a^2 + b^2 + c^2}$.`, 1: String.raw`Tu as divisé par $a^2 + b^2 + c^2$ sans prendre la racine.`, 3: String.raw`Tu as inversé la fraction : $\sqrt3$ est au dénominateur.` },
      level: 2 },
    { id: 'm11-q-015', q: String.raw`Si $A$ est une matrice $2\times 3$ et $B$ une matrice $3\times 4$, alors $AB$ est :`,
      choices: [String.raw`une matrice $3\times 3$`, String.raw`une matrice $4\times 2$`, String.raw`non définie`, String.raw`une matrice $2\times 4$`], answer: 3,
      explain: String.raw`$(n\times p)(p\times q) = n\times q$ : ici $(2\times 3)(3\times 4) = 2\times 4$. Les dimensions « intérieures » (3) doivent coïncider et disparaissent.`,
      why: { 0: String.raw`Ce sont les dimensions intérieures qui doivent être égales ; le résultat garde les dimensions extérieures.`, 1: String.raw`Ce serait la taille de $(AB)^T = B^TA^T$.`, 2: String.raw`Le produit est défini car $A$ a 3 colonnes et $B$ a 3 lignes.` },
      level: 1 },
    { id: 'm11-q-016', q: String.raw`Pour deux matrices carrées $A$ et $B$ quelconques de même taille, laquelle de ces égalités est <b>toujours</b> vraie ?`,
      choices: [String.raw`$AB = BA$`, String.raw`$(A + B)^2 = A^2 + 2AB + B^2$`, String.raw`$\det(AB) = \det(BA)$`, String.raw`$(AB)^T = A^TB^T$`], answer: 2,
      explain: String.raw`$\det(AB) = \det A\det B = \det B\det A = \det(BA)$ : le déterminant est un nombre, donc commutatif, même si $AB \neq BA$.`,
      why: { 0: String.raw`Le produit matriciel n'est pas commutatif (exemple : $A = \begin{pmatrix} 1 & 2 \\ 3 & 4\end{pmatrix}$, $B = \begin{pmatrix} 0 & 1 \\ 1 & 0\end{pmatrix}$).`, 1: String.raw`$(A+B)^2 = A^2 + AB + BA + B^2$, qui ne vaut $A^2 + 2AB + B^2$ que si $AB = BA$.`, 3: String.raw`La transposée inverse l'ordre : $(AB)^T = B^TA^T$.` },
      level: 2 },
    { id: 'm11-q-017', q: String.raw`La transposée d'un produit $(AB)^T$ est égale à :`,
      choices: [String.raw`$A^TB^T$`, String.raw`$A^TB$`, String.raw`$BA$`, String.raw`$B^TA^T$`], answer: 3,
      explain: String.raw`$((AB)^T)_{ij} = (AB)_{ji} = \sum_k a_{jk}b_{ki} = \sum_k (B^T)_{ik}(A^T)_{kj} = (B^TA^T)_{ij}$ : l'ordre s'inverse.`,
      why: { 0: String.raw`L'ordre s'inverse (comme pour l'inverse d'un produit) ; $A^TB^T$ n'est même pas toujours défini si les matrices ne sont pas carrées.`, 1: String.raw`Il faut transposer les deux facteurs et inverser l'ordre.`, 2: String.raw`Il manque les transpositions.` },
      level: 1 },
    { id: 'm11-q-018', q: String.raw`Soient $A$, $B$ deux matrices carrées telles que $AB = 0$ (matrice nulle). Que peut-on affirmer ?`,
      choices: [String.raw`$A = 0$ ou $B = 0$`, String.raw`Au moins l'une des deux n'est pas inversible`, String.raw`$A$ et $B$ ne sont inversibles ni l'une ni l'autre`, String.raw`$BA = 0$ aussi`], answer: 1,
      explain: String.raw`$\det A\det B = \det(AB) = 0$, donc $\det A = 0$ ou $\det B = 0$. (Si $A$ était inversible, on aurait $B = A^{-1}AB = 0$.)`,
      why: { 0: String.raw`Faux : $N = \begin{pmatrix} 0 & 1 \\ 0 & 0\end{pmatrix}$ vérifie $N^2 = 0$ avec $N \neq 0$. Les matrices ont des « diviseurs de zéro ».`, 2: String.raw`Faux : $A = I$ et $B = 0$ donnent $AB = 0$ avec $A$ inversible.`, 3: String.raw`Faux : avec $A = \begin{pmatrix} 1 & 0 \\ 0 & 0\end{pmatrix}$, $B = \begin{pmatrix} 0 & 0 \\ 1 & 0\end{pmatrix}$, on a $AB = 0$ mais $BA \neq 0$.` },
      level: 3 },
    { id: 'm11-q-019', q: String.raw`Que vaut $\begin{vmatrix} 2 & 3 \\ 1 & 4 \end{vmatrix}$ ?`,
      choices: [String.raw`$5$`, String.raw`$11$`, String.raw`$-5$`], answer: 0,
      explain: String.raw`$ad - bc = 2\times 4 - 3\times 1 = 8 - 3 = 5$.`,
      why: { 1: String.raw`Tu as calculé $ad + bc$ : c'est une <b>différence</b>.`, 2: String.raw`Tu as calculé $bc - ad$ : c'est $ad - bc$ (diagonale principale moins l'autre).` },
      level: 1 },
    { id: 'm11-q-020', q: String.raw`$A$ est une matrice $3\times 3$ de déterminant 2. Que vaut $\det(3A)$ ?`,
      choices: [String.raw`$6$`, String.raw`$54$`, String.raw`$18$`, String.raw`$8$`], answer: 1,
      explain: String.raw`Multiplier $A$ par 3 multiplie chacune des 3 lignes par 3 : $\det(3A) = 3^3\det A = 27\times 2 = 54$.`,
      why: { 0: String.raw`$\det(\lambda A) \neq \lambda\det A$ : chaque ligne est multipliée par $\lambda$, d'où $\lambda^n$.`, 2: String.raw`Tu as utilisé $3^2$ : la matrice est d'ordre 3, donc c'est $3^3$.`, 3: String.raw`Tu as calculé $2^3$ : c'est le facteur 3 qui est élevé à la puissance $n = 3$.` },
      level: 2 },
    { id: 'm11-q-021', q: String.raw`La règle de Sarrus permet de calculer le déterminant :`,
      choices: [String.raw`uniquement des matrices $3\times 3$`, String.raw`de toute matrice carrée`, String.raw`des matrices $3\times 3$ et $4\times 4$`, String.raw`uniquement des matrices triangulaires`], answer: 0,
      explain: String.raw`Sarrus est une astuce valable <b>uniquement</b> en dimension 3. Pour $n \geq 4$, on développe selon une ligne/colonne ou on échelonne.`,
      why: { 1: String.raw`Appliquer Sarrus à une matrice $4\times 4$ donne un résultat faux (il faudrait 24 termes, Sarrus n'en donne que 8).`, 2: String.raw`En dimension 4, le « Sarrus étendu » est faux : seul le développement ou le pivot fonctionnent.`, 3: String.raw`Pour une triangulaire, il suffit de multiplier les coefficients diagonaux ; Sarrus n'y est pas réservé.` },
      level: 1 },
    { id: 'm11-q-022', q: String.raw`Une matrice carrée $A$ est inversible si et seulement si :`,
      choices: [String.raw`tous ses coefficients sont non nuls`, String.raw`$\operatorname{tr}(A) \neq 0$`, String.raw`$\det A \neq 0$`, String.raw`elle est symétrique`], answer: 2,
      explain: String.raw`Critère fondamental : $A$ inversible $\iff \det A \neq 0$ (équivalent à $\operatorname{rg}A = n$).`,
      why: { 0: String.raw`$\begin{pmatrix} 1 & 1 \\ 1 & 1\end{pmatrix}$ n'a aucun coefficient nul mais $\det = 0$ ; et $I_2$ a des zéros mais est inversible.`, 1: String.raw`$\begin{pmatrix} 1 & 0 \\ 0 & -1\end{pmatrix}$ a une trace nulle et est inversible.`, 3: String.raw`La symétrie n'a pas de lien avec l'inversibilité : la matrice nulle est symétrique.` },
      level: 1 },
    { id: 'm11-q-023', q: String.raw`Si $ad - bc \neq 0$, l'inverse de $\begin{pmatrix} a & b \\ c & d \end{pmatrix}$ est :`,
      choices: [String.raw`$\begin{pmatrix} 1/a & 1/b \\ 1/c & 1/d \end{pmatrix}$`, String.raw`$\frac{1}{ad - bc}\begin{pmatrix} a & -b \\ -c & d \end{pmatrix}$`, String.raw`$\frac{1}{ad - bc}\begin{pmatrix} d & b \\ c & a \end{pmatrix}$`, String.raw`$\frac{1}{ad - bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$`], answer: 3,
      explain: String.raw`On échange $a$ et $d$, on change le signe de $b$ et $c$, on divise par le déterminant. Vérification : le produit avec la matrice de départ donne $I_2$.`,
      why: { 0: String.raw`L'inverse matriciel n'est pas l'inverse coefficient par coefficient.`, 1: String.raw`Tu as oublié d'échanger $a$ et $d$.`, 2: String.raw`Tu as oublié de changer le signe de $b$ et $c$ (et il ne faut pas les échanger).` },
      level: 2 },
    { id: 'm11-q-024', q: String.raw`Si $A$ et $B$ sont inversibles, $(AB)^{-1}$ vaut :`,
      choices: [String.raw`$B^{-1}A^{-1}$`, String.raw`$A^{-1}B^{-1}$`, String.raw`$\frac{1}{AB}$`], answer: 0,
      explain: String.raw`$(AB)(B^{-1}A^{-1}) = A(BB^{-1})A^{-1} = AA^{-1} = I$ : l'ordre s'inverse (on enlève d'abord la dernière chaussette mise).`,
      why: { 1: String.raw`$(AB)(A^{-1}B^{-1})$ ne se simplifie pas car $B$ et $A^{-1}$ ne commutent pas en général.`, 2: String.raw`On ne divise pas par une matrice : seul l'inverse $(AB)^{-1}$ a un sens.` },
      level: 2 },
    { id: 'm11-q-025', q: String.raw`Un système linéaire de 3 équations à 3 inconnues dont la matrice a un déterminant <b>nul</b> :`,
      choices: [String.raw`n'a jamais de solution`, String.raw`a une unique solution`, String.raw`a soit aucune solution, soit une infinité`, String.raw`a exactement deux solutions`], answer: 2,
      explain: String.raw`Si $\det A = 0$, le rang est $\lt 3$ : soit le système est incompatible (aucune solution), soit il en a une infinité ($3 - \operatorname{rg}A$ paramètres). On tranche avec le pivot de Gauss.`,
      why: { 0: String.raw`Il peut en avoir une infinité : par exemple si le second membre est nul, $X = 0$ et tous les vecteurs du noyau conviennent.`, 1: String.raw`Une solution unique correspond au cas $\det A \neq 0$ (système de Cramer).`, 3: String.raw`Un système linéaire n'a jamais exactement deux solutions : si $X_1 \neq X_2$ sont solutions, toute la droite $X_1 + t(X_2 - X_1)$ l'est aussi.` },
      level: 2 },
    { id: 'm11-q-026', q: String.raw`Quel est le rang de $\begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}$ ?`,
      choices: [String.raw`$0$`, String.raw`$1$`, String.raw`$2$`, String.raw`$4$`], answer: 1,
      explain: String.raw`La 2e ligne est le double de la 1re : après $L_2 \leftarrow L_2 - 2L_1$, il reste un seul pivot. Le rang vaut 1.`,
      why: { 0: String.raw`Seule la matrice nulle est de rang 0.`, 2: String.raw`Le déterminant est $4 - 4 = 0$ : la matrice n'est pas de rang maximal.`, 3: String.raw`Le rang d'une matrice $2\times 2$ est au plus 2.` },
      level: 1 },
    { id: 'm11-q-027', q: String.raw`Dans la méthode du pivot de Gauss, laquelle de ces opérations est <b>interdite</b> ?`,
      choices: [String.raw`$L_2 \leftarrow L_2 - 3L_1$`, String.raw`$L_1 \leftrightarrow L_3$`, String.raw`$L_3 \leftarrow 2L_3 + L_1$`, String.raw`$L_2 \leftarrow 0\times L_2$`], answer: 3,
      explain: String.raw`Multiplier une ligne par 0 efface une équation : le nouveau système n'est plus équivalent. On ne multiplie une ligne que par un réel <b>non nul</b>.`,
      why: { 0: String.raw`Ajouter à une ligne un multiple d'une autre est l'opération de base du pivot : autorisée.`, 1: String.raw`Échanger deux lignes est autorisé (utile pour amener un pivot non nul).`, 2: String.raw`Autorisé : $L_3$ est multipliée par $2 \neq 0$ avant d'ajouter $L_1$ (le système reste équivalent).` },
      level: 2 },
    { id: 'm11-q-028', q: String.raw`Une famille de 4 vecteurs de $\mathbb{R}^3$ est :`,
      choices: [String.raw`toujours liée`, String.raw`toujours libre`, String.raw`toujours génératrice de $\mathbb{R}^3$`, String.raw`une base si ses vecteurs sont non nuls`], answer: 0,
      explain: String.raw`Dans un espace de dimension 3, une famille libre a au plus 3 vecteurs : 4 vecteurs sont forcément liés.`,
      why: { 1: String.raw`Une famille libre de $\mathbb{R}^3$ a au plus $\dim\mathbb{R}^3 = 3$ vecteurs.`, 2: String.raw`4 vecteurs tous colinéaires n'engendrent qu'une droite.`, 3: String.raw`Une base de $\mathbb{R}^3$ a exactement 3 vecteurs.` },
      level: 2 },
    { id: 'm11-q-029', q: String.raw`Soit $f : \mathbb{R}^5 \to \mathbb{R}^3$ linéaire de rang 3. Quelle est la dimension de $\ker f$ ?`,
      choices: [String.raw`$0$`, String.raw`$3$`, String.raw`$2$`, String.raw`$8$`], answer: 2,
      explain: String.raw`Théorème du rang : $\dim\ker f = \dim\mathbb{R}^5 - \operatorname{rg}f = 5 - 3 = 2$.`,
      why: { 0: String.raw`Tu as utilisé la dimension d'<b>arrivée</b> (3) : le théorème du rang porte sur l'espace de départ.`, 1: String.raw`C'est le rang, c'est-à-dire $\dim\operatorname{Im}f$, pas la dimension du noyau.`, 3: String.raw`On soustrait : $\dim E = \dim\ker f + \operatorname{rg}f$.` },
      level: 2 },
    { id: 'm11-q-030', q: String.raw`Dans la matrice d'une application linéaire $f$ relativement à une base $(\vec e_1, \dots, \vec e_n)$ :`,
      choices: [String.raw`la colonne $j$ contient les coordonnées de $f(\vec e_j)$`, String.raw`la ligne $j$ contient les coordonnées de $f(\vec e_j)$`, String.raw`les coefficients diagonaux sont les valeurs propres`, String.raw`la matrice est toujours symétrique`], answer: 0,
      explain: String.raw`Par construction, $A\vec e_j$ est la $j$-ième colonne de $A$ : elle représente $f(\vec e_j)$.`,
      why: { 1: String.raw`Confusion lignes/colonnes, erreur très fréquente : on obtiendrait la transposée.`, 2: String.raw`Ce n'est vrai que si la matrice est triangulaire (ou diagonale).`, 3: String.raw`Aucune raison : $f(x, y) = (y, 0)$ a pour matrice $\begin{pmatrix} 0 & 1 \\ 0 & 0\end{pmatrix}$, non symétrique.` },
      level: 2 },
    { id: 'm11-q-031', q: String.raw`Les valeurs propres de $\begin{pmatrix} 4 & 1 \\ 0 & -2 \end{pmatrix}$ sont :`,
      choices: [String.raw`$4$ et $1$`, String.raw`$2$ et $-8$`, String.raw`$-4$ et $2$`, String.raw`$4$ et $-2$`], answer: 3,
      explain: String.raw`La matrice est triangulaire : $\det(A - \lambda I) = (4 - \lambda)(-2 - \lambda)$, ses valeurs propres sont les coefficients diagonaux $4$ et $-2$.`,
      why: { 0: String.raw`Tu as lu la première <b>ligne</b> : ce sont les coefficients <b>diagonaux</b> d'une triangulaire.`, 1: String.raw`Ce sont la trace ($2$) et le déterminant ($-8$), qui sont la somme et le produit des valeurs propres.`, 2: String.raw`Erreur de signe : les racines de $(4 - \lambda)(-2 - \lambda)$ sont $4$ et $-2$.` },
      level: 1 },
    { id: 'm11-q-032', q: String.raw`Une matrice $2\times 2$ a pour trace 5 et pour déterminant 6. Ses valeurs propres sont :`,
      choices: [String.raw`$5$ et $6$`, String.raw`$2$ et $3$`, String.raw`$1$ et $6$`, String.raw`$-2$ et $-3$`], answer: 1,
      explain: String.raw`$\chi(\lambda) = \lambda^2 - 5\lambda + 6 = (\lambda - 2)(\lambda - 3)$ : somme 5, produit 6.`,
      why: { 0: String.raw`La trace et le déterminant sont la <b>somme</b> et le <b>produit</b> des valeurs propres, pas les valeurs propres elles-mêmes.`, 2: String.raw`Le produit vaut bien 6 mais la somme vaut 7, pas 5.`, 3: String.raw`Erreur de signe : la somme doit valoir $+5$ ; ce sont les racines de $\lambda^2 + 5\lambda + 6$.` },
      level: 2 },
    { id: 'm11-q-033', q: String.raw`Une matrice $3\times 3$ réelle qui possède 3 valeurs propres distinctes est :`,
      choices: [String.raw`forcément inversible`, String.raw`forcément symétrique`, String.raw`forcément diagonalisable`, String.raw`jamais diagonalisable`], answer: 2,
      explain: String.raw`Des vecteurs propres associés à des valeurs propres distinctes sont libres : on obtient 3 vecteurs propres indépendants, donc une base de vecteurs propres.`,
      why: { 0: String.raw`L'une des valeurs propres peut être 0, et alors $\det A = 0$ (ex. $\operatorname{diag}(0, 1, 2)$).`, 1: String.raw`$\begin{pmatrix} 1 & 1 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 3\end{pmatrix}$ a 3 valeurs propres distinctes sans être symétrique. (C'est la réciproque partielle qui est vraie : symétrique $\Rightarrow$ diagonalisable.)`, 3: String.raw`C'est au contraire la condition suffisante classique de diagonalisabilité.` },
      level: 2 },
    { id: 'm11-q-034', q: String.raw`Si $A = PDP^{-1}$ avec $D$ diagonale, alors $A^n$ vaut :`,
      choices: [String.raw`$P^nD^nP^{-n}$`, String.raw`$PD^nP^{-1}$`, String.raw`$D^n$`, String.raw`$PD^nP$`], answer: 1,
      explain: String.raw`$A^n = (PDP^{-1})(PDP^{-1})\cdots(PDP^{-1})$ : chaque $P^{-1}P$ intermédiaire vaut $I$, il reste $PD^nP^{-1}$.`,
      why: { 0: String.raw`Les produits $P^{-1}P$ se simplifient au milieu : $P$ et $P^{-1}$ n'apparaissent qu'une fois.`, 2: String.raw`$D^n$ est la matrice de $f^n$ dans la base propre, pas dans la base de départ : il faut revenir avec $P$ et $P^{-1}$.`, 3: String.raw`Il faut $P^{-1}$ à droite, pas $P$.` },
      level: 2 },
    { id: 'm11-q-035', q: String.raw`La matrice $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ est :`,
      choices: [String.raw`diagonalisable car triangulaire`, String.raw`diagonalisable car inversible`, String.raw`non diagonalisable`, String.raw`diagonale`], answer: 2,
      explain: String.raw`Seule valeur propre : 1 (double). $E_1 = \ker\begin{pmatrix} 0 & 1 \\ 0 & 0\end{pmatrix} = \operatorname{Vect}((1, 0))$ est de dimension 1 $\lt 2$ : pas de base de vecteurs propres. (Sinon on aurait $A = PIP^{-1} = I$.)`,
      why: { 0: String.raw`Triangulaire donne les valeurs propres, pas la diagonalisabilité.`, 1: String.raw`Inversibilité et diagonalisabilité sont indépendantes : cette matrice est inversible ($\det = 1$) mais non diagonalisable.`, 3: String.raw`Le coefficient $a_{12} = 1$ est hors diagonale.` },
      level: 3 }
  ],

  exercises: [
    { id: 'm11-x-001',
      prompt: String.raw`Calcule la norme de $\vec u = (1, 2, 3)$ (valeur exacte).`,
      answer: 'sqrt(14)', vars: [], check: 'value',
      mistakes: [
        { expr: '14', msg: String.raw`$14$ est $\|\vec u\|^2$ : il faut prendre la racine carrée.` },
        { expr: '6', msg: String.raw`Tu as additionné les coordonnées : la norme est $\sqrt{x^2 + y^2 + z^2}$.` }
      ],
      hint: String.raw`$\|\vec u\| = \sqrt{x^2 + y^2 + z^2}$.`,
      explain: String.raw`$\|\vec u\| = \sqrt{1^2 + 2^2 + 3^2} = \sqrt{1 + 4 + 9} = \sqrt{14}$.`,
      level: 1 },
    { id: 'm11-x-002',
      prompt: String.raw`Avec $\vec u = (1, -1, 2)$ et $\vec v = (0, 2, 1)$, donne les coordonnées de $2\vec u - 3\vec v$ sous la forme x;y;z.`,
      answer: '2;-8;1', vars: [], check: 'tuple',
      mistakes: [{ expr: '2;4;7', msg: String.raw`Tu as ajouté $3\vec v$ au lieu de le soustraire.` }],
      hint: String.raw`On calcule coordonnée par coordonnée : $2x_u - 3x_v$, etc.`,
      explain: String.raw`$2\vec u = (2, -2, 4)$, $3\vec v = (0, 6, 3)$, donc $2\vec u - 3\vec v = (2 - 0, -2 - 6, 4 - 3) = (2, -8, 1)$.`,
      level: 1 },
    { id: 'm11-x-003',
      prompt: String.raw`Soient $A(1, -2, 3)$ et $B(4, 0, -1)$. Donne les coordonnées de $\overrightarrow{AB}$ sous la forme x;y;z.`,
      answer: '3;2;-4', vars: [], check: 'tuple',
      mistakes: [{ expr: '-3;-2;4', msg: String.raw`Tu as calculé $\overrightarrow{BA}$ : c'est « arrivée moins départ », $B - A$.` }],
      hint: String.raw`$\overrightarrow{AB} = (x_B - x_A,\ y_B - y_A,\ z_B - z_A)$.`,
      explain: String.raw`$\overrightarrow{AB} = (4 - 1,\ 0 - (-2),\ -1 - 3) = (3, 2, -4)$.`,
      level: 1 },
    { id: 'm11-x-004',
      prompt: String.raw`Calcule le produit scalaire de $\vec u = (1, 2, 3)$ et $\vec v = (4, -5, 6)$.`,
      answer: '12', vars: [], check: 'value',
      mistakes: [
        { expr: '32', msg: String.raw`Attention au signe : $2\times(-5) = -10$.` },
        { expr: '-4', msg: String.raw`Attention aux signes : seul le produit $2\times(-5)$ est négatif ; $3\times 6 = +18$.` }
      ],
      hint: String.raw`$\vec u\cdot\vec v = xx' + yy' + zz'$.`,
      explain: String.raw`$\vec u\cdot\vec v = 1\times 4 + 2\times(-5) + 3\times 6 = 4 - 10 + 18 = 12$.`,
      level: 1 },
    { id: 'm11-x-005',
      prompt: String.raw`Pour tout réel $x$, on pose $\vec u = (x, 1, 2)$ et $\vec v = (3, x, -1)$. Exprime $\vec u\cdot\vec v$ en fonction de $x$.`,
      answer: '4*x-2', vars: ['x'], check: 'expr',
      mistakes: [{ expr: '4*x+2', msg: String.raw`Le dernier produit vaut $2\times(-1) = -2$.` }, { expr: '3*x+x^2-2', msg: String.raw`Le 2e produit est $1\times x = x$, pas $x\cdot x$.` }],
      hint: String.raw`Multiplie coordonnée par coordonnée, puis additionne.`,
      explain: String.raw`$\vec u\cdot\vec v = 3x + 1\cdot x + 2\cdot(-1) = 4x - 2$.`,
      level: 1 },
    { id: 'm11-x-006',
      prompt: String.raw`Pour quelle valeur du réel $m$ les vecteurs $\vec u = (2, m, 1)$ et $\vec v = (3, -1, 4)$ sont-ils orthogonaux ?`,
      answer: '10', vars: [], check: 'value',
      mistakes: [{ expr: '-10', msg: String.raw`Erreur de signe : $\vec u\cdot\vec v = 6 - m + 4 = 10 - m$.` }],
      hint: String.raw`Orthogonaux $\iff \vec u\cdot\vec v = 0$.`,
      explain: String.raw`$\vec u\cdot\vec v = 2\times 3 + m\times(-1) + 1\times 4 = 10 - m$. Il est nul pour $m = 10$.`,
      level: 1 },
    { id: 'm11-x-007',
      prompt: String.raw`Donne, en radians, l'angle entre $\vec u = (1, 0, 1)$ et $\vec v = (0, 1, 1)$.`,
      answer: 'pi/3', vars: [], check: 'value',
      mistakes: [
        { expr: '1/2', msg: String.raw`$\frac12$ est le <b>cosinus</b> de l'angle ; on demande l'angle lui-même.` },
        { expr: 'pi/6', msg: String.raw`$\frac{\pi}{6}$ a pour sinus $\frac12$ : ici c'est le cosinus qui vaut $\frac12$.` }
      ],
      hint: String.raw`$\cos\theta = \dfrac{\vec u\cdot\vec v}{\|\vec u\|\,\|\vec v\|}$.`,
      explain: String.raw`$\vec u\cdot\vec v = 0 + 0 + 1 = 1$, $\|\vec u\| = \|\vec v\| = \sqrt2$, donc $\cos\theta = \frac{1}{2}$ et $\theta = \frac{\pi}{3}$.`,
      level: 2 },
    { id: 'm11-x-008',
      prompt: String.raw`Donne les coordonnées du projeté orthogonal de $\vec u = (2, 3)$ sur la droite dirigée par $\vec v = (1, 1)$, sous la forme x;y.`,
      answer: '5/2;5/2', vars: [], check: 'tuple',
      mistakes: [{ expr: '5;5', msg: String.raw`Tu as oublié de diviser par $\|\vec v\|^2 = 2$.` }],
      hint: String.raw`$p(\vec u) = \dfrac{\vec u\cdot\vec v}{\|\vec v\|^2}\,\vec v$.`,
      explain: String.raw`$\vec u\cdot\vec v = 2 + 3 = 5$ et $\|\vec v\|^2 = 2$, donc $p(\vec u) = \frac52(1, 1) = \left(\frac52, \frac52\right)$. Vérification : $\vec u - p(\vec u) = \left(-\frac12, \frac12\right)$ est bien orthogonal à $\vec v$.`,
      level: 2 },
    { id: 'm11-x-009',
      prompt: String.raw`Calcule $\vec u\wedge\vec v$ pour $\vec u = (1, 2, 3)$ et $\vec v = (4, 5, 6)$. Réponse sous la forme x;y;z.`,
      answer: '-3;6;-3', vars: [], check: 'tuple',
      mistakes: [{ expr: '3;-6;3', msg: String.raw`Tu as calculé $\vec v\wedge\vec u = -\vec u\wedge\vec v$ : l'ordre compte.` }],
      hint: String.raw`$\vec u\wedge\vec v = (yz' - zy',\ zx' - xz',\ xy' - yx')$.`,
      explain: String.raw`$x$ : $2\times 6 - 3\times 5 = -3$ ; $y$ : $3\times 4 - 1\times 6 = 6$ ; $z$ : $1\times 5 - 2\times 4 = -3$. Vérification : $(-3, 6, -3)\cdot(1, 2, 3) = -3 + 12 - 9 = 0$. ✔`,
      level: 2 },
    { id: 'm11-x-010',
      prompt: String.raw`Calcule $\vec u\wedge\vec v$ pour $\vec u = (1, 0, 2)$ et $\vec v = (0, 1, -1)$. Réponse sous la forme x;y;z.`,
      answer: '-2;1;1', vars: [], check: 'tuple',
      mistakes: [{ expr: '-2;-1;1', msg: String.raw`Erreur classique sur la 2e composante : c'est $zx' - xz'$.` }],
      hint: String.raw`Vérifie ton résultat : il doit être orthogonal à $\vec u$ et à $\vec v$.`,
      explain: String.raw`$x$ : $0\times(-1) - 2\times 1 = -2$ ; $y$ : $2\times 0 - 1\times(-1) = 1$ ; $z$ : $1\times 1 - 0\times 0 = 1$. Vérification : $(-2, 1, 1)\cdot(1, 0, 2) = 0$ et $(-2, 1, 1)\cdot(0, 1, -1) = 0$. ✔`,
      level: 2 },
    { id: 'm11-x-011',
      prompt: String.raw`Calcule l'aire du triangle $ABC$ avec $A(0, 0, 0)$, $B(1, 2, 0)$, $C(3, 1, 0)$.`,
      answer: '5/2', vars: [], check: 'value',
      mistakes: [{ expr: '5', msg: String.raw`$\|\overrightarrow{AB}\wedge\overrightarrow{AC}\| = 5$ est l'aire du <b>parallélogramme</b> : le triangle en vaut la moitié.` }],
      hint: String.raw`$\mathcal{A} = \frac12\|\overrightarrow{AB}\wedge\overrightarrow{AC}\|$.`,
      explain: String.raw`$\overrightarrow{AB} = (1, 2, 0)$, $\overrightarrow{AC} = (3, 1, 0)$, $\overrightarrow{AB}\wedge\overrightarrow{AC} = (0, 0, 1\times 1 - 2\times 3) = (0, 0, -5)$, de norme 5. Aire $= \frac52$.`,
      level: 2 },
    { id: 'm11-x-012',
      prompt: String.raw`Calcule le produit mixte $[\vec u, \vec v, \vec w] = \det(\vec u, \vec v, \vec w)$ pour $\vec u = (1, 2, 0)$, $\vec v = (0, 1, 3)$, $\vec w = (2, 0, 1)$.`,
      answer: '13', vars: [], check: 'value',
      mistakes: [{ expr: '-11', msg: String.raw`Attention au signe du 2e cofacteur : $-2\times(0\times 1 - 3\times 2) = +12$.` }],
      hint: String.raw`Calcule $\vec u\wedge\vec v$ puis son produit scalaire avec $\vec w$ (ou développe le déterminant).`,
      explain: String.raw`$\vec u\wedge\vec v = (2\times 3 - 0\times 1,\ 0\times 0 - 1\times 3,\ 1\times 1 - 2\times 0) = (6, -3, 1)$, puis $(6, -3, 1)\cdot(2, 0, 1) = 12 + 0 + 1 = 13$. Le parallélépipède a un volume de 13.`,
      level: 3 },
    { id: 'm11-x-013',
      prompt: String.raw`Le plan $\mathcal P$ passe par $A(1, 0, 2)$ et a pour vecteur normal $\vec n = (2, -1, 3)$. Son équation s'écrit $ax + by + cz + d = 0$ avec $(a, b, c) = \vec n$ : donne a;b;c;d.`,
      answer: '2;-1;3;-8', vars: [], check: 'tuple',
      mistakes: [{ expr: '2;-1;3;8', msg: String.raw`Erreur de signe sur $d$ : $2 + 6 + d = 0$ donne $d = -8$.` }],
      hint: String.raw`Écris $2x - y + 3z + d = 0$ et impose que $A$ vérifie l'équation.`,
      explain: String.raw`$2\times 1 - 0 + 3\times 2 + d = 0 \Rightarrow d = -8$. Équation : $2x - y + 3z - 8 = 0$.`,
      level: 2 },
    { id: 'm11-x-014',
      prompt: String.raw`Donne l'équation $ax + by + cz + d = 0$ du plan passant par $A(1, 0, 0)$, $B(0, 1, 0)$, $C(0, 0, 1)$, normalisée avec $a = 1$, sous la forme a;b;c;d.`,
      answer: '1;1;1;-1', vars: [], check: 'tuple',
      mistakes: [{ expr: '1;1;1;1', msg: String.raw`Erreur de signe sur $d$ : $A$ doit vérifier $1 + d = 0$.` }],
      hint: String.raw`Vecteur normal : $\vec n = \overrightarrow{AB}\wedge\overrightarrow{AC}$.`,
      explain: String.raw`$\overrightarrow{AB} = (-1, 1, 0)$, $\overrightarrow{AC} = (-1, 0, 1)$, $\vec n = (1\times 1 - 0\times 0,\ 0\times(-1) - (-1)\times 1,\ (-1)\times 0 - 1\times(-1)) = (1, 1, 1)$. Puis $1 + 0 + 0 + d = 0$, donc $d = -1$ : $x + y + z - 1 = 0$.`,
      level: 3 },
    { id: 'm11-x-015',
      prompt: String.raw`Calcule la distance du point $M(1, 2, 3)$ au plan d'équation $2x - y + 2z - 1 = 0$.`,
      answer: '5/3', vars: [], check: 'value',
      mistakes: [
        { expr: '5', msg: String.raw`Tu as oublié de diviser par $\|\vec n\| = \sqrt{4 + 1 + 4} = 3$.` },
        { expr: '5/9', msg: String.raw`On divise par $\sqrt{a^2 + b^2 + c^2} = 3$, pas par $a^2 + b^2 + c^2 = 9$.` }
      ],
      hint: String.raw`$d = \dfrac{|ax_0 + by_0 + cz_0 + d|}{\sqrt{a^2 + b^2 + c^2}}$.`,
      explain: String.raw`Numérateur : $|2 - 2 + 6 - 1| = 5$. Dénominateur : $\sqrt{4 + 1 + 4} = 3$. Distance $= \frac53$.`,
      level: 2 },
    { id: 'm11-x-016',
      prompt: String.raw`Avec $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ et $B = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$, calcule $AB$. Donne a;b;c;d ligne par ligne.`,
      answer: '2;1;4;3', vars: [], check: 'tuple',
      mistakes: [
        { expr: '3;4;1;2', msg: String.raw`C'est $BA$ : le produit matriciel n'est pas commutatif.` },
        { expr: '0;2;3;0', msg: String.raw`Le produit matriciel n'est pas coefficient par coefficient : ligne de $A$ fois colonne de $B$.` }
      ],
      hint: String.raw`$(AB)_{ij}$ = ligne $i$ de $A$ « fois » colonne $j$ de $B$.`,
      explain: String.raw`$AB = \begin{pmatrix} 1\cdot 0 + 2\cdot 1 & 1\cdot 1 + 2\cdot 0 \\ 3\cdot 0 + 4\cdot 1 & 3\cdot 1 + 4\cdot 0 \end{pmatrix} = \begin{pmatrix} 2 & 1 \\ 4 & 3 \end{pmatrix}$ : multiplier à droite par $B$ échange les colonnes.`,
      level: 1 },
    { id: 'm11-x-017',
      prompt: String.raw`Avec les mêmes $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ et $B = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$, calcule $AB - BA$. Donne a;b;c;d ligne par ligne.`,
      answer: '-1;-3;3;1', vars: [], check: 'tuple',
      mistakes: [{ expr: '0;0;0;0', msg: String.raw`$AB \neq BA$ : les matrices ne commutent pas en général, calcule les deux produits.` }],
      hint: String.raw`$AB$ échange les colonnes de $A$, $BA$ échange ses lignes.`,
      explain: String.raw`$AB = \begin{pmatrix} 2 & 1 \\ 4 & 3 \end{pmatrix}$, $BA = \begin{pmatrix} 3 & 4 \\ 1 & 2 \end{pmatrix}$, donc $AB - BA = \begin{pmatrix} -1 & -3 \\ 3 & 1 \end{pmatrix} \neq 0$.`,
      level: 2 },
    { id: 'm11-x-018',
      prompt: String.raw`Soit $A = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$. Calcule $A^{10}$. Donne a;b;c;d ligne par ligne.`,
      answer: '1;10;0;1', vars: [], check: 'tuple',
      mistakes: [{ expr: '1;1;0;1', msg: String.raw`$A^{10} \neq A$ : calcule $A^2$ et cherche la régularité.` }],
      hint: String.raw`Calcule $A^2$, $A^3$… ou écris $A = I + N$ avec $N^2 = 0$.`,
      explain: String.raw`$A = I + N$ avec $N = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$, $N^2 = 0$ et $IN = NI$. Binôme : $A^{n} = I + nN$, donc $A^{10} = \begin{pmatrix} 1 & 10 \\ 0 & 1 \end{pmatrix}$.`,
      level: 2 },
    { id: 'm11-x-019',
      prompt: String.raw`Calcule $\det\begin{pmatrix} 3 & 1 \\ 4 & 2 \end{pmatrix}$.`,
      answer: '2', vars: [], check: 'value',
      mistakes: [{ expr: '10', msg: String.raw`Tu as calculé $ad + bc$ : le déterminant est $ad - bc$.` }],
      hint: String.raw`$\begin{vmatrix} a & b \\ c & d \end{vmatrix} = ad - bc$.`,
      explain: String.raw`$3\times 2 - 1\times 4 = 6 - 4 = 2$.`,
      level: 1 },
    { id: 'm11-x-020',
      prompt: String.raw`Calcule $\det\begin{pmatrix} 1 & 2 & 3 \\ 0 & 1 & 4 \\ 5 & 6 & 0 \end{pmatrix}$.`,
      answer: '1', vars: [], check: 'value',
      mistakes: [{ expr: '-79', msg: String.raw`Tu as oublié le signe $-$ du 2e cofacteur dans le développement : $+, -, +$.` }],
      hint: String.raw`Développe selon la 1re ligne avec les signes $+, -, +$.`,
      explain: String.raw`$1\begin{vmatrix} 1 & 4 \\ 6 & 0 \end{vmatrix} - 2\begin{vmatrix} 0 & 4 \\ 5 & 0 \end{vmatrix} + 3\begin{vmatrix} 0 & 1 \\ 5 & 6 \end{vmatrix} = 1(0 - 24) - 2(0 - 20) + 3(0 - 5) = -24 + 40 - 15 = 1$.`,
      level: 2 },
    { id: 'm11-x-021',
      prompt: String.raw`Calcule $\det\begin{pmatrix} 2 & -1 & 0 \\ 1 & 3 & 1 \\ 0 & 2 & 4 \end{pmatrix}$ (Sarrus ou développement).`,
      answer: '24', vars: [], check: 'value',
      mistakes: [{ expr: '16', msg: String.raw`Attention au signe : $-(-1)\times(1\times 4 - 1\times 0) = +4$, pas $-4$.` }],
      hint: String.raw`Développe selon la 1re ligne (un zéro en position $(1,3)$).`,
      explain: String.raw`$2(3\times 4 - 1\times 2) - (-1)(1\times 4 - 1\times 0) + 0 = 2\times 10 + 4 = 24$.<br>Sarrus : $(24 + 0 + 0) - (0 + 4 - 4) = 24$.`,
      level: 2 },
    { id: 'm11-x-022',
      prompt: String.raw`$A$ est une matrice carrée d'ordre 3 avec $\det A = 5$. Calcule $\det(2A)$.`,
      answer: '40', vars: [], check: 'value',
      mistakes: [
        { expr: '10', msg: String.raw`$\det(\lambda A) = \lambda^n\det A$ : chacune des 3 lignes est multipliée par 2.` },
        { expr: '20', msg: String.raw`La matrice est d'ordre 3 : le facteur est $2^3 = 8$, pas $2^2$.` }
      ],
      hint: String.raw`$\det(\lambda A) = \lambda^n\det A$ pour $A \in \mathcal{M}_n$.`,
      explain: String.raw`$\det(2A) = 2^3\times 5 = 8\times 5 = 40$.`,
      level: 2 },
    { id: 'm11-x-023',
      prompt: String.raw`Pour quelle valeur du réel $m$ la matrice $\begin{pmatrix} 1 & 2 \\ 3 & m \end{pmatrix}$ n'est-elle <b>pas</b> inversible ?`,
      answer: '6', vars: [], check: 'value',
      mistakes: [{ expr: '-6', msg: String.raw`Erreur de signe : $\det = m - 6$.` }, { expr: '3/2', msg: String.raw`Le déterminant est $1\times m - 2\times 3$.` }],
      hint: String.raw`Non inversible $\iff \det = 0$.`,
      explain: String.raw`$\det = m - 6$, nul pour $m = 6$ : la 2e ligne $(3, 6)$ est alors le triple de la 1re.`,
      level: 1 },
    { id: 'm11-x-024',
      prompt: String.raw`Calcule l'inverse de $A = \begin{pmatrix} 2 & 1 \\ 5 & 3 \end{pmatrix}$. Donne a;b;c;d ligne par ligne.`,
      answer: '3;-1;-5;2', vars: [], check: 'tuple',
      mistakes: [
        { expr: '3;1;5;2', msg: String.raw`Tu as oublié de changer le signe de $b$ et $c$.` },
        { expr: '2;-1;-5;3', msg: String.raw`Tu as oublié d'échanger $a$ et $d$.` }
      ],
      hint: String.raw`$\begin{pmatrix} a & b \\ c & d \end{pmatrix}^{-1} = \frac{1}{ad - bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$.`,
      explain: String.raw`$\det A = 6 - 5 = 1$, donc $A^{-1} = \begin{pmatrix} 3 & -1 \\ -5 & 2 \end{pmatrix}$. Vérification : $AA^{-1} = \begin{pmatrix} 6 - 5 & -2 + 2 \\ 15 - 15 & -5 + 6 \end{pmatrix} = I_2$. ✔`,
      level: 2 },
    { id: 'm11-x-025',
      prompt: String.raw`Calcule l'inverse de $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$. Donne a;b;c;d ligne par ligne (fractions exactes).`,
      answer: '-2;1;3/2;-1/2', vars: [], check: 'tuple',
      mistakes: [{ expr: '2;-1;-3/2;1/2', msg: String.raw`Erreur de signe : $\det A = 4 - 6 = -2$, négatif.` }],
      hint: String.raw`$\det A = 1\times 4 - 2\times 3$.`,
      explain: String.raw`$\det A = -2$, donc $A^{-1} = -\frac12\begin{pmatrix} 4 & -2 \\ -3 & 1 \end{pmatrix} = \begin{pmatrix} -2 & 1 \\ \frac32 & -\frac12 \end{pmatrix}$.`,
      level: 2 },
    { id: 'm11-x-026',
      prompt: String.raw`On a vu que $A = \begin{pmatrix} 1 & 2 & 3 \\ 0 & 1 & 4 \\ 5 & 6 & 0 \end{pmatrix}$ a pour déterminant 1. Calcule $A^{-1}$ (comatrice ou Gauss-Jordan) et donne ses 9 coefficients ligne par ligne, séparés par des ;.`,
      answer: '-24;18;5;20;-15;-4;-5;4;1', vars: [], check: 'tuple',
      mistakes: [{ expr: '-24;20;-5;18;-15;4;5;-4;1', msg: String.raw`Tu as donné la comatrice sans la transposer : $A^{-1} = \frac{1}{\det A}\mathrm{Com}(A)^T$.` }],
      hint: String.raw`Cofacteur $C_{ij} = (-1)^{i+j}\Delta_{ij}$ ; $A^{-1} = \frac{1}{\det A}\,\mathrm{Com}(A)^T$. Vérifie avec $AA^{-1} = I_3$.`,
      explain: String.raw`Cofacteurs : $C_{11} = -24$, $C_{12} = 20$, $C_{13} = -5$ ; $C_{21} = 18$, $C_{22} = -15$, $C_{23} = 4$ ; $C_{31} = 5$, $C_{32} = -4$, $C_{33} = 1$. On transpose (et $\det A = 1$) : $A^{-1} = \begin{pmatrix} -24 & 18 & 5 \\ 20 & -15 & -4 \\ -5 & 4 & 1 \end{pmatrix}$. Vérification sur la 1re ligne de $AA^{-1}$ : $-24 + 40 - 15 = 1$, $18 - 30 + 12 = 0$, $5 - 8 + 3 = 0$. ✔`,
      level: 3 },
    { id: 'm11-x-027',
      prompt: String.raw`Résous $\begin{cases} x + y = 5 \\ x - y = 1 \end{cases}$. Donne x;y.`,
      answer: '3;2', vars: [], check: 'tuple',
      mistakes: [{ expr: '2;3', msg: String.raw`Les valeurs sont inversées : vérifie $x - y = 1$.` }],
      hint: String.raw`Additionne les deux équations.`,
      explain: String.raw`$L_1 + L_2$ : $2x = 6$, donc $x = 3$, puis $y = 5 - 3 = 2$.`,
      level: 1 },
    { id: 'm11-x-028',
      prompt: String.raw`Résous par les formules de Cramer $\begin{cases} 2x + 3y = 8 \\ x - y = -1 \end{cases}$. Donne x;y.`,
      answer: '1;2', vars: [], check: 'tuple',
      mistakes: [{ expr: '-1;-2', msg: String.raw`Erreur de signe : $\det A = 2\times(-1) - 3\times 1 = -5$ et les numérateurs sont aussi négatifs.` }],
      hint: String.raw`$x = \dfrac{\begin{vmatrix} 8 & 3 \\ -1 & -1 \end{vmatrix}}{\det A}$, $y = \dfrac{\begin{vmatrix} 2 & 8 \\ 1 & -1 \end{vmatrix}}{\det A}$.`,
      explain: String.raw`$\det A = -2 - 3 = -5$. $x = \frac{-8 + 3}{-5} = 1$, $y = \frac{-2 - 8}{-5} = 2$. Vérification : $2 + 6 = 8$ et $1 - 2 = -1$. ✔`,
      level: 2 },
    { id: 'm11-x-029',
      prompt: String.raw`Résous par la méthode du pivot de Gauss $\begin{cases} x + y + z = 6 \\ x + 2y + 3z = 14 \\ 2x + y - z = 1 \end{cases}$. Donne x;y;z.`,
      answer: '1;2;3', vars: [], check: 'tuple',
      mistakes: [{ expr: '3;2;1', msg: String.raw`Bonnes valeurs mais dans le désordre : l'ordre attendu est $x;y;z$.` }],
      hint: String.raw`$L_2 \leftarrow L_2 - L_1$, $L_3 \leftarrow L_3 - 2L_1$, puis $L_3 \leftarrow L_3 + L_2$.`,
      explain: String.raw`Après $L_2 - L_1$ et $L_3 - 2L_1$ : $y + 2z = 8$ et $-y - 3z = -11$. Puis $L_3 + L_2$ : $-z = -3$, $z = 3$. Remontée : $y = 8 - 6 = 2$, $x = 6 - 2 - 3 = 1$.`,
      level: 2 },
    { id: 'm11-x-030',
      prompt: String.raw`Quel est le rang de $\begin{pmatrix} 1 & 2 & 3 \\ 2 & 4 & 6 \\ 1 & 0 & 1 \end{pmatrix}$ ?`,
      answer: '2', vars: [], check: 'value',
      mistakes: [{ expr: '3', msg: String.raw`La 2e ligne est le double de la 1re : la matrice n'est pas de rang maximal (son déterminant est nul).` }, { expr: '1', msg: String.raw`Les lignes 1 et 3 ne sont pas proportionnelles : il reste deux pivots.` }],
      hint: String.raw`Repère une ligne proportionnelle à une autre, puis échelonne.`,
      explain: String.raw`$L_2 \leftarrow L_2 - 2L_1$ donne une ligne nulle ; $L_3 \leftarrow L_3 - L_1$ donne $(0, -2, -2)$. Il reste 2 pivots : rang 2.`,
      level: 2 },
    { id: 'm11-x-031',
      prompt: String.raw`Soit $f : \mathbb{R}^2 \to \mathbb{R}^2$, $f(x, y) = (2x - y,\ x + 3y)$. Donne sa matrice dans la base canonique sous la forme a;b;c;d ligne par ligne.`,
      answer: '2;-1;1;3', vars: [], check: 'tuple',
      mistakes: [{ expr: '2;1;-1;3', msg: String.raw`Tu as mis les images des vecteurs de base en lignes : elles vont en <b>colonnes</b> (tu as obtenu la transposée).` }],
      hint: String.raw`Colonne 1 : $f(1, 0)$ ; colonne 2 : $f(0, 1)$.`,
      explain: String.raw`$f(1, 0) = (2, 1)$ et $f(0, 1) = (-1, 3)$, d'où $A = \begin{pmatrix} 2 & -1 \\ 1 & 3 \end{pmatrix}$. Astuce : les lignes de $A$ sont les coefficients de chaque composante de $f$.`,
      level: 2 },
    { id: 'm11-x-032',
      prompt: String.raw`Soit $f : \mathbb{R}^3 \to \mathbb{R}^2$, $f(x, y, z) = (x + y + z,\ x - y)$. Quelle est la dimension de $\ker f$ ?`,
      answer: '1', vars: [], check: 'value',
      mistakes: [{ expr: '2', msg: String.raw`$2$ est le rang de $f$ ; le théorème du rang donne $\dim\ker f = 3 - 2$.` }, { expr: '0', msg: String.raw`$f$ ne peut pas être injective : on passe de dimension 3 à dimension 2.` }],
      hint: String.raw`Théorème du rang : $\dim\ker f = \dim\mathbb{R}^3 - \operatorname{rg}f$.`,
      explain: String.raw`La matrice $\begin{pmatrix} 1 & 1 & 1 \\ 1 & -1 & 0 \end{pmatrix}$ est de rang 2, donc $\dim\ker f = 3 - 2 = 1$. Explicitement : $x = y$, $z = -2x$, $\ker f = \operatorname{Vect}((1, 1, -2))$.`,
      level: 2 },
    { id: 'm11-x-033',
      prompt: String.raw`Calcule le polynôme caractéristique $\det(A - xI_2)$ de $A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$, en fonction de $x$.`,
      answer: 'x^2-4*x+3', vars: ['x'], check: 'expr',
      mistakes: [
        { expr: 'x^2-4*x+5', msg: String.raw`Le déterminant est $(2 - x)^2 - 1\times 1$ : on <b>soustrait</b> le produit $bc$.` },
        { expr: 'x^2+4*x+3', msg: String.raw`Erreur de signe : le coefficient de $x$ est $-\operatorname{tr}A = -4$.` }
      ],
      hint: String.raw`$\det\begin{pmatrix} 2 - x & 1 \\ 1 & 2 - x \end{pmatrix}$, ou directement $x^2 - \operatorname{tr}(A)x + \det A$.`,
      explain: String.raw`$(2 - x)^2 - 1 = x^2 - 4x + 3 = (x - 1)(x - 3)$. Contrôle : $\operatorname{tr}A = 4$ et $\det A = 3$.`,
      level: 2 },
    { id: 'm11-x-034',
      prompt: String.raw`Donne les valeurs propres de $A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$ (séparées par ;).`,
      answer: '1;3', vars: [], check: 'set',
      mistakes: [{ expr: '2;2', msg: String.raw`Les valeurs propres ne se lisent sur la diagonale que pour une matrice triangulaire.` }],
      hint: String.raw`Racines de $\lambda^2 - 4\lambda + 3$.`,
      explain: String.raw`$\chi_A(\lambda) = (\lambda - 1)(\lambda - 3)$ : valeurs propres 1 et 3. Contrôle : $1 + 3 = 4 = \operatorname{tr}A$, $1\times 3 = 3 = \det A$.`,
      level: 1 },
    { id: 'm11-x-035',
      prompt: String.raw`Calcule le polynôme caractéristique $\det(A - \lambda I_2)$ de $A = \begin{pmatrix} 1 & 2 \\ 3 & 0 \end{pmatrix}$, en fonction de $\lambda$ (tape « lambda »).`,
      answer: 'lambda^2-lambda-6', vars: ['lambda'], check: 'expr',
      mistakes: [
        { expr: 'lambda^2-lambda+6', msg: String.raw`On soustrait $bc = 6$ : $(1 - \lambda)(-\lambda) - 6$.` },
        { expr: 'lambda^2+lambda-6', msg: String.raw`Erreur de signe sur le terme en $\lambda$ : il vaut $-\operatorname{tr}(A)\lambda = -\lambda$.` }
      ],
      hint: String.raw`$\det\begin{pmatrix} 1 - \lambda & 2 \\ 3 & -\lambda \end{pmatrix}$.`,
      explain: String.raw`$(1 - \lambda)(-\lambda) - 2\times 3 = \lambda^2 - \lambda - 6 = (\lambda - 3)(\lambda + 2)$ : valeurs propres 3 et $-2$.`,
      level: 2 },
    { id: 'm11-x-036',
      prompt: String.raw`Donne les valeurs propres de $\begin{pmatrix} 3 & 5 & 1 \\ 0 & -1 & 2 \\ 0 & 0 & 2 \end{pmatrix}$ (séparées par ;).`,
      answer: '3;-1;2', vars: [], check: 'set',
      mistakes: [{ expr: '3;5;1', msg: String.raw`Ce sont les coefficients de la 1re ligne ; pour une triangulaire, on lit la <b>diagonale</b>.` }],
      hint: String.raw`Matrice triangulaire : $\det(A - \lambda I)$ est le produit des termes diagonaux.`,
      explain: String.raw`$\chi_A(\lambda) = (3 - \lambda)(-1 - \lambda)(2 - \lambda)$ : valeurs propres $3$, $-1$, $2$.`,
      level: 1 },
    { id: 'm11-x-037',
      prompt: String.raw`Une matrice $2\times 2$ a pour trace $5$ et pour déterminant $6$. Donne ses valeurs propres (séparées par ;).`,
      answer: '2;3', vars: [], check: 'set',
      mistakes: [{ expr: '5;6', msg: String.raw`La trace et le déterminant sont la somme et le produit des valeurs propres.` }],
      hint: String.raw`$\chi(\lambda) = \lambda^2 - \operatorname{tr}(A)\lambda + \det A$.`,
      explain: String.raw`$\lambda^2 - 5\lambda + 6 = (\lambda - 2)(\lambda - 3)$ : valeurs propres 2 et 3.`,
      level: 2 },
    { id: 'm11-x-038',
      prompt: String.raw`Pour $A = \begin{pmatrix} 1 & 2 \\ 3 & 0 \end{pmatrix}$ et la valeur propre $-2$, donne le vecteur propre dont la première composante vaut 2, sous la forme x;y.`,
      answer: '2;-3', vars: [], check: 'tuple',
      mistakes: [{ expr: '2;3', msg: String.raw`Vérifie : $A(2, 3) = (8, 6) \neq -2(2, 3)$. Résous $(A + 2I)\vec u = \vec 0$.` }],
      hint: String.raw`Résous $(A + 2I)\vec u = \vec 0$ avec $A + 2I = \begin{pmatrix} 3 & 2 \\ 3 & 2 \end{pmatrix}$.`,
      explain: String.raw`$(A + 2I)\vec u = \vec 0 \iff 3x + 2y = 0$. Avec $x = 2$ : $y = -3$. Vérification : $A(2, -3) = (2 - 6,\ 6) = (-4, 6) = -2\,(2, -3)$. ✔`,
      level: 3 },
    { id: 'm11-x-039',
      prompt: String.raw`Calcule le polynôme caractéristique $\det(A - xI_3)$ de $A = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 2 & 1 \\ 0 & 1 & 2 \end{pmatrix}$, en fonction de $x$.`,
      answer: '(1-x)*(x^2-4*x+3)', vars: ['x'], check: 'expr',
      mistakes: [
        { expr: '(x-1)*(x^2-4*x+3)', msg: String.raw`C'est $\det(xI - A)$, qui vaut $-\det(A - xI)$ en dimension 3 (impaire). Attention à la convention demandée.` },
        { expr: '(1-x)*(x^2-4*x+5)', msg: String.raw`Dans le bloc $2\times 2$, on soustrait $1\times 1$ : $(2 - x)^2 - 1$.` }
      ],
      hint: String.raw`Développe selon la 1re ligne : $(1 - x)\times\begin{vmatrix} 2 - x & 1 \\ 1 & 2 - x \end{vmatrix}$.`,
      explain: String.raw`$\det(A - xI) = (1 - x)\left[(2 - x)^2 - 1\right] = (1 - x)(x^2 - 4x + 3) = -(x - 1)^2(x - 3)$. Valeurs propres : 1 (double) et 3. Forme développée : $-x^3 + 5x^2 - 7x + 3$.`,
      level: 3 },
    { id: 'm11-x-040',
      prompt: String.raw`On a diagonalisé $A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$ : $A^n = \frac12\begin{pmatrix} 3^n + 1 & 3^n - 1 \\ 3^n - 1 & 3^n + 1 \end{pmatrix}$. Exprime en fonction de $n$ le coefficient en position $(1, 2)$ de $A^n$.`,
      answer: '(3^n-1)/2', vars: ['n'], check: 'expr', domain: [0, 5],
      mistakes: [
        { expr: '(3^n+1)/2', msg: String.raw`C'est le coefficient diagonal $(1, 1)$ ; la position $(1, 2)$ est ligne 1, colonne 2.` },
        { expr: '3^n-1', msg: String.raw`N'oublie pas le facteur $\frac12$ (qui vient de $P^{-1}$).` }
      ],
      hint: String.raw`Ligne 1, colonne 2.`,
      explain: String.raw`Le coefficient $(1, 2)$ vaut $\frac{3^n - 1}{2}$. Vérification : $n = 1$ donne $1$ (coefficient de $A$), $n = 0$ donne $0$ (coefficient de $I$). Il vient de $A^n = PD^nP^{-1}$ avec $P = \begin{pmatrix} 1 & 1 \\ -1 & 1 \end{pmatrix}$, $D = \operatorname{diag}(1, 3)$.`,
      level: 3 }
  ]
});
