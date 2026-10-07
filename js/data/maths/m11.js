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
      explain: String.raw`En repère orthonormé, on multiplie les coordonnées de même rang puis on additionne : $\vec u\cdot\vec v = xx' + yy' + zz'$. Ici $2\times 1 + (-1)\times 4 + 3\times 0 = 2 - 4 + 0 = -2$. Le résultat est un nombre (un scalaire) ; il est négatif, ce qui signifie que l'angle entre les deux vecteurs est obtus.`,
      why: { 0: String.raw`$6 = 2 + 4 + 0$ : tu as perdu le signe de la coordonnée $-1$. Garde les signes : $(-1)\times 4 = -4$, pas $+4$.`, 1: String.raw`$(2, -4, 0)$ est la liste des produits coordonnée par coordonnée : c'est la bonne première étape, mais il faut ensuite les <b>additionner</b>. Le produit scalaire est un nombre, pas un vecteur.`, 3: String.raw`Tu as mélangé addition et multiplication ou perdu un signe : les trois produits valent $2$, $-4$ et $0$, et leur somme est $-2$.` },
      rule: String.raw`$\vec u\cdot\vec v = xx' + yy' + zz'$ (un nombre, pas un vecteur)`,
      topic: 'Produit scalaire', sec: 'm11-s-vecteurs',
      steps: [
        String.raw`Notion : le produit scalaire $\vec u\cdot\vec v$ est un <b>nombre</b> qui mesure à quel point deux vecteurs « vont dans le même sens ». En repère orthonormé : $\vec u\cdot\vec v = xx' + yy' + zz'$.`,
        String.raw`Produits coordonnée par coordonnée : $2\times 1 = 2$, $(-1)\times 4 = -4$, $3\times 0 = 0$.`,
        String.raw`Somme : $2 + (-4) + 0 = -2$. Le signe négatif indique un angle obtus entre $\vec u$ et $\vec v$.`
      ],
      level: 1 },
    { id: 'm11-q-002', q: String.raw`Quelle est la norme de $\vec u = (2, -2, 1)$ ?`,
      choices: [String.raw`$9$`, String.raw`$1$`, String.raw`$5$`, String.raw`$3$`], answer: 3,
      explain: String.raw`La norme euclidienne est la racine carrée de la somme des carrés des coordonnées : $\|\vec u\| = \sqrt{x^2 + y^2 + z^2}$. Ici $2^2 + (-2)^2 + 1^2 = 4 + 4 + 1 = 9$, donc $\|\vec u\| = \sqrt 9 = 3$. Les carrés font disparaître les signes : une coordonnée négative contribue positivement à la longueur.`,
      why: { 0: String.raw`$9$ est $\|\vec u\|^2$, la somme des carrés : il manque la dernière étape, la racine carrée.`, 1: String.raw`Tu as additionné les coordonnées elles-mêmes ($2 - 2 + 1 = 1$) : les signes se compensent. Il faut additionner leurs <b>carrés</b> puis prendre la racine.`, 2: String.raw`$|2| + |-2| + |1| = 5$ est la norme « de Manhattan », pas la longueur euclidienne $\sqrt{x^2 + y^2 + z^2}$.` },
      rule: String.raw`$\|\vec u\| = \sqrt{x^2 + y^2 + z^2}$ et $\|\vec u\|^2 = \vec u\cdot\vec u$`,
      topic: "Norme d'un vecteur", sec: 'm11-s-vecteurs',
      steps: [
        String.raw`Notion : la norme $\|\vec u\|$ est la <b>longueur</b> du vecteur ; c'est Pythagore en dimension 3 : $\|\vec u\| = \sqrt{x^2 + y^2 + z^2}$.`,
        String.raw`Carrés : $2^2 = 4$, $(-2)^2 = 4$ (le carré d'un négatif est positif), $1^2 = 1$ ; somme : $4 + 4 + 1 = 9$.`,
        String.raw`Racine carrée : $\sqrt 9 = 3$, donc $\|\vec u\| = 3$.`
      ],
      level: 1 },
    { id: 'm11-q-003', q: String.raw`Deux vecteurs non nuls $\vec u$ et $\vec v$ de l'espace sont orthogonaux si et seulement si :`,
      choices: [String.raw`$\vec u\cdot\vec v = 0$`, String.raw`$\vec u\wedge\vec v = \vec 0$`, String.raw`$\|\vec u\| = \|\vec v\|$`, String.raw`$\vec u + \vec v = \vec 0$`], answer: 0,
      explain: String.raw`On a $\vec u\cdot\vec v = \|\vec u\|\,\|\vec v\|\cos\theta$. Comme les vecteurs sont non nuls, ce produit est nul si et seulement si $\cos\theta = 0$, c'est-à-dire $\theta = \frac{\pi}{2}$ : c'est exactement l'orthogonalité. En pratique, on calcule $xx' + yy' + zz'$ et on regarde s'il vaut 0.`,
      why: { 1: String.raw`$\vec u\wedge\vec v = \vec 0$ signifie $\sin\theta = 0$ : les vecteurs sont <b>colinéaires</b>, c'est presque le contraire de l'orthogonalité.`, 2: String.raw`L'égalité des normes compare des longueurs, pas des directions : $(1, 0, 0)$ et $(-1, 0, 0)$ ont même norme mais ne sont pas orthogonaux.`, 3: String.raw`$\vec u + \vec v = \vec 0$ signifie $\vec v = -\vec u$ : les vecteurs sont opposés, donc colinéaires (angle $\pi$).` },
      rule: String.raw`$\vec u\perp\vec v \iff \vec u\cdot\vec v = 0$ ; $\vec u$ et $\vec v$ colinéaires $\iff \vec u\wedge\vec v = \vec 0$`,
      topic: 'Orthogonalité', sec: 'm11-s-vecteurs',
      steps: [
        String.raw`Notion : deux vecteurs sont orthogonaux quand ils forment un angle droit. Le produit scalaire s'écrit aussi $\vec u\cdot\vec v = \|\vec u\|\,\|\vec v\|\cos\theta$.`,
        String.raw`Les normes étant non nulles : $\vec u\cdot\vec v = 0 \iff \cos\theta = 0 \iff \theta = \frac{\pi}{2}$.`,
        String.raw`Donc orthogonaux $\iff \vec u\cdot\vec v = 0$. À ne pas confondre avec $\vec u\wedge\vec v = \vec 0$, qui traduit la colinéarité.`
      ],
      level: 1 },
    { id: 'm11-q-004', q: String.raw`Le projeté orthogonal de $\vec u$ sur la droite dirigée par $\vec v \neq \vec 0$ est :`,
      choices: [String.raw`$\dfrac{\vec u\cdot\vec v}{\|\vec v\|}\,\vec v$`, String.raw`$\dfrac{\vec u\cdot\vec v}{\|\vec u\|^2}\,\vec u$`, String.raw`$\dfrac{\vec u\cdot\vec v}{\|\vec v\|^2}\,\vec v$`, String.raw`$(\vec u\cdot\vec v)\,\vec u$`], answer: 2,
      explain: String.raw`Le projeté est sur la droite dirigée par $\vec v$, donc il s'écrit $p = k\vec v$. On impose que $\vec u - k\vec v$ soit orthogonal à $\vec v$ : $\vec u\cdot\vec v - k\|\vec v\|^2 = 0$, d'où $k = \frac{\vec u\cdot\vec v}{\|\vec v\|^2}$. Si $\vec v$ est unitaire, la formule se réduit à $(\vec u\cdot\vec v)\,\vec v$.`,
      why: { 0: String.raw`Il faut diviser par $\|\vec v\|^2$ et non par $\|\vec v\|$ : un $\|\vec v\|$ normalise le produit scalaire, l'autre normalise le vecteur $\vec v$ qui suit. Ta formule n'est juste que si $\|\vec v\| = 1$.`, 1: String.raw`Tu as inversé les rôles : c'est le projeté de $\vec v$ sur la droite dirigée par $\vec u$. Le projeté cherché doit être colinéaire à $\vec v$.`, 3: String.raw`Ce choix cumule deux erreurs : le résultat doit être colinéaire à $\vec v$ (pas à $\vec u$), et il manque la division par $\|\vec v\|^2$.` },
      rule: String.raw`$p_{\vec v}(\vec u) = \dfrac{\vec u\cdot\vec v}{\|\vec v\|^2}\,\vec v$`,
      topic: 'Projection orthogonale', sec: 'm11-s-vecteurs',
      steps: [
        String.raw`Notion : le projeté orthogonal de $\vec u$ sur une droite est « l'ombre » de $\vec u$ sur cette droite sous un éclairage perpendiculaire : c'est un vecteur de la droite, et $\vec u$ moins ce projeté est perpendiculaire à la droite.`,
        String.raw`Le projeté appartient à la droite dirigée par $\vec v$, donc il s'écrit $p = k\vec v$, avec un réel $k$ à trouver.`,
        String.raw`Condition d'orthogonalité : $(\vec u - k\vec v)\cdot\vec v = 0$, soit $\vec u\cdot\vec v - k\,\vec v\cdot\vec v = 0$, donc $k = \frac{\vec u\cdot\vec v}{\|\vec v\|^2}$ (car $\vec v\cdot\vec v = \|\vec v\|^2 \neq 0$).`,
        String.raw`Conclusion : $p = \dfrac{\vec u\cdot\vec v}{\|\vec v\|^2}\,\vec v$.`
      ],
      level: 2 },
    { id: 'm11-q-005', q: String.raw`On sait que $\|\vec u\| = 2$, $\|\vec v\| = 3$ et $\vec u\cdot\vec v = 3$. L'angle $\theta$ entre $\vec u$ et $\vec v$ vaut :`,
      choices: [String.raw`$\frac{\pi}{6}$`, String.raw`$\frac{\pi}{3}$`, String.raw`$\frac{2\pi}{3}$`, String.raw`$\frac{\pi}{4}$`], answer: 1,
      explain: String.raw`On isole le cosinus dans $\vec u\cdot\vec v = \|\vec u\|\,\|\vec v\|\cos\theta$ : $\cos\theta = \frac{3}{2\times 3} = \frac12$. L'angle entre deux vecteurs est pris dans $[0, \pi]$, et le seul angle de cet intervalle dont le cosinus vaut $\frac12$ est $\frac{\pi}{3}$. Le produit scalaire positif confirme que l'angle est aigu.`,
      why: { 0: String.raw`$\frac{\pi}{6}$ a pour <b>sinus</b> $\frac12$ (son cosinus vaut $\frac{\sqrt3}{2}$) : confusion sinus/cosinus dans le tableau des valeurs remarquables.`, 2: String.raw`$\cos\frac{2\pi}{3} = -\frac12$ : ce serait le cas si $\vec u\cdot\vec v = -3$. Ici le produit scalaire est positif, l'angle est aigu.`, 3: String.raw`$\cos\frac{\pi}{4} = \frac{\sqrt2}{2} \approx 0{,}71 \neq \frac12$ : calcule d'abord le cosinus, puis lis le tableau.` },
      rule: String.raw`$\cos\theta = \dfrac{\vec u\cdot\vec v}{\|\vec u\|\,\|\vec v\|}$ avec $\theta \in [0, \pi]$`,
      topic: 'Angle entre deux vecteurs', sec: 'm11-s-vecteurs',
      steps: [
        String.raw`Notion : l'angle $\theta \in [0, \pi]$ entre deux vecteurs se retrouve grâce à $\vec u\cdot\vec v = \|\vec u\|\,\|\vec v\|\cos\theta$.`,
        String.raw`On isole le cosinus : $\cos\theta = \dfrac{\vec u\cdot\vec v}{\|\vec u\|\,\|\vec v\|} = \dfrac{3}{2\times 3} = \dfrac36 = \dfrac12$.`,
        String.raw`Sur $[0, \pi]$, l'unique angle de cosinus $\frac12$ est $\theta = \frac{\pi}{3}$ (valeur remarquable : $\cos 60^\circ = \frac12$).`
      ],
      level: 2 },
    { id: 'm11-q-006', q: String.raw`Pour tous vecteurs $\vec u$, $\vec v$, $\|\vec u + \vec v\|^2$ est égal à :`,
      choices: [String.raw`$\|\vec u\|^2 + \|\vec v\|^2$`, String.raw`$(\|\vec u\| + \|\vec v\|)^2$`, String.raw`$\|\vec u\|^2 + \vec u\cdot\vec v + \|\vec v\|^2$`, String.raw`$\|\vec u\|^2 + 2\,\vec u\cdot\vec v + \|\vec v\|^2$`], answer: 3,
      explain: String.raw`On développe par bilinéarité : $\|\vec u + \vec v\|^2 = (\vec u + \vec v)\cdot(\vec u + \vec v) = \vec u\cdot\vec u + \vec u\cdot\vec v + \vec v\cdot\vec u + \vec v\cdot\vec v$. Par symétrie du produit scalaire, $\vec u\cdot\vec v = \vec v\cdot\vec u$, ce qui donne le double produit $2\,\vec u\cdot\vec v$. C'est l'analogue exact de l'identité remarquable $(a + b)^2 = a^2 + 2ab + b^2$.`,
      why: { 0: String.raw`C'est le théorème de Pythagore, valable seulement si $\vec u\perp\vec v$ (alors $\vec u\cdot\vec v = 0$) : en général il manque le double produit.`, 1: String.raw`$(\|\vec u\| + \|\vec v\|)^2$ ne convient que si $\vec u$ et $\vec v$ sont colinéaires de même sens ; en général $\|\vec u + \vec v\| \leq \|\vec u\| + \|\vec v\|$ (inégalité triangulaire).`, 2: String.raw`Il manque le facteur 2 : le développement fait apparaître $\vec u\cdot\vec v$ <b>et</b> $\vec v\cdot\vec u$, qui sont égaux.` },
      rule: String.raw`$\|\vec u + \vec v\|^2 = \|\vec u\|^2 + 2\,\vec u\cdot\vec v + \|\vec v\|^2$`,
      topic: "Développement d'une norme", sec: 'm11-s-vecteurs',
      steps: [
        String.raw`Notion : la norme au carré est le produit scalaire d'un vecteur avec lui-même, $\|\vec w\|^2 = \vec w\cdot\vec w$. Le produit scalaire se développe comme un produit de nombres (bilinéarité) et il est symétrique.`,
        String.raw`Développement : $\|\vec u + \vec v\|^2 = (\vec u + \vec v)\cdot(\vec u + \vec v) = \vec u\cdot\vec u + \vec u\cdot\vec v + \vec v\cdot\vec u + \vec v\cdot\vec v$.`,
        String.raw`Symétrie : $\vec v\cdot\vec u = \vec u\cdot\vec v$, donc les deux termes du milieu donnent $2\,\vec u\cdot\vec v$ : $\|\vec u + \vec v\|^2 = \|\vec u\|^2 + 2\,\vec u\cdot\vec v + \|\vec v\|^2$.`
      ],
      level: 1 },
    { id: 'm11-q-007', q: String.raw`Le produit vectoriel $\vec u\wedge\vec v$ de deux vecteurs de l'espace est :`,
      choices: [String.raw`un vecteur orthogonal à $\vec u$ et à $\vec v$`, String.raw`un nombre réel`, String.raw`un vecteur colinéaire à $\vec u$`, String.raw`un vecteur du plan engendré par $\vec u$ et $\vec v$`], answer: 0,
      explain: String.raw`Le produit vectoriel de deux vecteurs de l'espace est un <b>vecteur</b>, orthogonal à $\vec u$ et à $\vec v$, de norme $\|\vec u\|\,\|\vec v\|\,|\sin\theta|$, et orienté pour que $(\vec u, \vec v, \vec u\wedge\vec v)$ soit direct (règle de la main droite). C'est pour cela qu'on l'utilise pour fabriquer un vecteur normal à un plan dirigé par $\vec u$ et $\vec v$.`,
      why: { 1: String.raw`C'est le produit <b>scalaire</b> (ou le produit mixte de trois vecteurs) qui donne un nombre ; le produit vectoriel donne un vecteur.`, 2: String.raw`Il est orthogonal à $\vec u$ : il ne peut être colinéaire à $\vec u$ que s'il est nul (cas où $\vec u$ et $\vec v$ sont colinéaires).`, 3: String.raw`Il est au contraire orthogonal au plan engendré par $\vec u$ et $\vec v$ : c'est un vecteur normal à ce plan (sauf s'il est nul).` },
      rule: String.raw`$\vec u\wedge\vec v \perp \vec u$, $\vec u\wedge\vec v \perp \vec v$ et $\|\vec u\wedge\vec v\| = \|\vec u\|\,\|\vec v\|\,|\sin\theta|$`,
      topic: 'Produit vectoriel', sec: 'm11-s-vectoriel',
      steps: [
        String.raw`Notion : le produit vectoriel $\vec u\wedge\vec v$ associe à deux vecteurs de l'espace un <b>troisième vecteur</b>, perpendiculaire aux deux premiers.`,
        String.raw`Direction : orthogonale à $\vec u$ et à $\vec v$ ; sens : règle de la main droite ; norme : $\|\vec u\|\,\|\vec v\|\,|\sin\theta|$.`,
        String.raw`Exemple : $\vec i\wedge\vec j = \vec k$, qui est bien orthogonal à $\vec i$ et à $\vec j$.`
      ],
      level: 1 },
    { id: 'm11-q-008', q: String.raw`Pour tous vecteurs $\vec u$, $\vec v$ de l'espace, $\vec v\wedge\vec u$ vaut :`,
      choices: [String.raw`$\vec u\wedge\vec v$`, String.raw`$\vec 0$`, String.raw`$-\,\vec u\wedge\vec v$`], answer: 2,
      explain: String.raw`Le produit vectoriel est <b>antisymétrique</b> : $\vec v\wedge\vec u = -\,\vec u\wedge\vec v$. Géométriquement, échanger les deux vecteurs inverse le sens de rotation, et la règle de la main droite fait pointer le résultat dans l'autre sens. On le voit aussi sur les coordonnées : chaque composante du type $yz' - zy'$ change de signe quand on échange les rôles des deux vecteurs.`,
      why: { 0: String.raw`Le produit vectoriel n'est pas commutatif : l'ordre des facteurs change le sens du résultat (la norme, elle, reste la même).`, 1: String.raw`$\vec v\wedge\vec u = \vec 0$ seulement si $\vec u$ et $\vec v$ sont colinéaires ; en général c'est l'opposé de $\vec u\wedge\vec v$.` },
      rule: String.raw`$\vec v\wedge\vec u = -\,\vec u\wedge\vec v$ et $\vec u\wedge\vec u = \vec 0$`,
      topic: 'Antisymétrie du produit vectoriel', sec: 'm11-s-vectoriel',
      steps: [
        String.raw`Notion : le produit vectoriel est <b>antisymétrique</b> : échanger les deux facteurs change le signe du résultat.`,
        String.raw`En coordonnées, la 1re composante de $\vec u\wedge\vec v$ est $yz' - zy'$ ; celle de $\vec v\wedge\vec u$ est $y'z - z'y = -(yz' - zy')$. De même pour les deux autres composantes.`,
        String.raw`Donc $\vec v\wedge\vec u = -\,\vec u\wedge\vec v$ ; en particulier $\vec u\wedge\vec u = \vec 0$.`
      ],
      level: 1 },
    { id: 'm11-q-009', q: String.raw`Dans une base orthonormée directe $(\vec i, \vec j, \vec k)$, que vaut $\vec i\wedge\vec k$ ?`,
      choices: [String.raw`$\vec j$`, String.raw`$\vec 0$`, String.raw`$\vec k$`, String.raw`$-\vec j$`], answer: 3,
      explain: String.raw`Dans une base orthonormée directe, les produits suivent l'ordre circulaire $\vec i \to \vec j \to \vec k \to \vec i$ : $\vec i\wedge\vec j = \vec k$, $\vec j\wedge\vec k = \vec i$, $\vec k\wedge\vec i = \vec j$. Le couple $(\vec i, \vec k)$ parcourt ce cycle à l'envers, donc par antisymétrie $\vec i\wedge\vec k = -\,\vec k\wedge\vec i = -\vec j$. Vérification en coordonnées : $(1, 0, 0)\wedge(0, 0, 1) = (0, -1, 0)$.`,
      why: { 0: String.raw`$\vec j = \vec k\wedge\vec i$ : ici l'ordre $(\vec i, \vec k)$ est inversé par rapport au sens circulaire, ce qui ajoute un signe moins.`, 1: String.raw`$\vec i$ et $\vec k$ sont orthogonaux, pas colinéaires : $\|\vec i\wedge\vec k\| = 1\times 1\times\sin\frac{\pi}{2} = 1 \neq 0$.`, 2: String.raw`Le résultat doit être orthogonal à $\vec i$ <b>et</b> à $\vec k$, donc colinéaire à $\vec j$ ; or $\vec k$ n'est pas orthogonal à lui-même.` },
      rule: String.raw`$\vec i\wedge\vec j = \vec k$, $\vec j\wedge\vec k = \vec i$, $\vec k\wedge\vec i = \vec j$ ; dans l'ordre inverse, signe $-$`,
      topic: 'Produit vectoriel de la base', sec: 'm11-s-vectoriel',
      steps: [
        String.raw`Notion : dans une base orthonormée directe, $\vec i\wedge\vec j = \vec k$, $\vec j\wedge\vec k = \vec i$, $\vec k\wedge\vec i = \vec j$ (ordre circulaire $\vec i \to \vec j \to \vec k \to \vec i$).`,
        String.raw`Le couple $(\vec i, \vec k)$ parcourt le cycle à l'envers : par antisymétrie, $\vec i\wedge\vec k = -\,\vec k\wedge\vec i = -\vec j$.`,
        String.raw`Vérification par la formule : $(1, 0, 0)\wedge(0, 0, 1) = (0\times 1 - 0\times 0,\ 0\times 0 - 1\times 1,\ 1\times 0 - 0\times 0) = (0, -1, 0) = -\vec j$.`
      ],
      level: 2 },
    { id: 'm11-q-010', q: String.raw`$\|\overrightarrow{AB}\wedge\overrightarrow{AC}\|$ est égal à :`,
      choices: [String.raw`l'aire du parallélogramme construit sur $\overrightarrow{AB}$ et $\overrightarrow{AC}$`, String.raw`l'aire du triangle $ABC$`, String.raw`le volume du tétraèdre $OABC$`, String.raw`$AB \times AC$`], answer: 0,
      explain: String.raw`On a $\|\overrightarrow{AB}\wedge\overrightarrow{AC}\| = AB\times AC\times|\sin\theta|$. Or $AC\,|\sin\theta|$ est la hauteur issue de $C$ relativement à la base $[AB]$ : on obtient « base × hauteur », c'est-à-dire l'aire du parallélogramme construit sur $\overrightarrow{AB}$ et $\overrightarrow{AC}$. Le triangle $ABC$ n'en est que la moitié.`,
      why: { 1: String.raw`L'aire du triangle vaut la <b>moitié</b>, $\frac12\|\overrightarrow{AB}\wedge\overrightarrow{AC}\|$ : une diagonale coupe le parallélogramme en deux triangles égaux.`, 2: String.raw`Un volume fait intervenir trois vecteurs (produit mixte $\det(\vec u, \vec v, \vec w)$), pas deux.`, 3: String.raw`Il manque le facteur $|\sin\theta|$ : l'égalité avec $AB\times AC$ n'a lieu que si $\overrightarrow{AB}\perp\overrightarrow{AC}$.` },
      rule: String.raw`Aire du parallélogramme $= \|\vec u\wedge\vec v\|$ ; aire du triangle $ABC = \frac12\|\overrightarrow{AB}\wedge\overrightarrow{AC}\|$`,
      topic: 'Aire et produit vectoriel', sec: 'm11-s-vectoriel',
      steps: [
        String.raw`Notion : la norme du produit vectoriel vaut $\|\vec u\wedge\vec v\| = \|\vec u\|\,\|\vec v\|\,|\sin\theta|$.`,
        String.raw`Dans le parallélogramme construit sur $\overrightarrow{AB}$ et $\overrightarrow{AC}$, la base mesure $AB$ et la hauteur vaut $AC\,|\sin\theta|$.`,
        String.raw`Donc $\|\overrightarrow{AB}\wedge\overrightarrow{AC}\| = AB\times AC\,|\sin\theta|$ = base × hauteur = aire du parallélogramme ; le triangle $ABC$ en est la moitié.`
      ],
      level: 2 },
    { id: 'm11-q-011', q: String.raw`Trois vecteurs $\vec u$, $\vec v$, $\vec w$ de l'espace sont coplanaires si et seulement si :`,
      choices: [String.raw`$\vec u\wedge\vec v = \vec 0$`, String.raw`$\vec u\cdot\vec v = \vec v\cdot\vec w = 0$`, String.raw`$\vec u + \vec v + \vec w = \vec 0$`, String.raw`$\det(\vec u, \vec v, \vec w) = 0$`], answer: 3,
      explain: String.raw`Le produit mixte $\det(\vec u, \vec v, \vec w) = (\vec u\wedge\vec v)\cdot\vec w$ est le volume signé du parallélépipède construit sur les trois vecteurs. Ce volume est nul si et seulement si le parallélépipède est « aplati », c'est-à-dire si les trois vecteurs sont dans un même plan. C'est donc une condition nécessaire <b>et</b> suffisante, contrairement aux autres propositions.`,
      why: { 0: String.raw`$\vec u\wedge\vec v = \vec 0$ entraîne la coplanarité, mais la réciproque est fausse : $\vec i$, $\vec j$, $\vec i + \vec j$ sont coplanaires alors que $\vec i\wedge\vec j = \vec k \neq \vec 0$.`, 1: String.raw`Ce sont des conditions d'orthogonalité : $\vec i$, $\vec j$, $\vec k$ les vérifient et ne sont pas coplanaires.`, 2: String.raw`C'est suffisant (alors $\vec w = -\vec u - \vec v$ est dans le plan de $\vec u$ et $\vec v$) mais pas nécessaire : $\vec i$, $\vec j$, $2\vec i$ sont coplanaires et de somme non nulle.` },
      rule: String.raw`$\vec u, \vec v, \vec w$ coplanaires $\iff \det(\vec u, \vec v, \vec w) = 0$`,
      topic: 'Produit mixte et coplanarité', sec: 'm11-s-vectoriel',
      steps: [
        String.raw`Notion : le produit mixte $\det(\vec u, \vec v, \vec w) = (\vec u\wedge\vec v)\cdot\vec w$ est le <b>volume signé</b> du parallélépipède construit sur les trois vecteurs.`,
        String.raw`Trois vecteurs coplanaires donnent un parallélépipède « plat », de volume nul ; réciproquement, un volume nul signifie que le solide est aplati dans un plan.`,
        String.raw`Donc coplanaires $\iff \det(\vec u, \vec v, \vec w) = 0$ : condition nécessaire et suffisante.`
      ],
      level: 2 },
    { id: 'm11-q-012', q: String.raw`Un vecteur normal au plan d'équation $2x - y + 3z - 5 = 0$ est :`,
      choices: [String.raw`$(1, 2, 0)$`, String.raw`$(2, -1, 3)$`, String.raw`$(2, -1, -5)$`, String.raw`$(-1, 3, -5)$`], answer: 1,
      explain: String.raw`Pour un plan d'équation $ax + by + cz + d = 0$, le vecteur $\vec n = (a, b, c)$ formé des coefficients de $x$, $y$, $z$ est normal au plan. En effet, pour deux points $M_0$ et $M$ du plan, la différence des deux équations donne $\vec n\cdot\overrightarrow{M_0M} = 0$. Ici on lit $\vec n = (2, -1, 3)$ ; le terme constant ne fait que déplacer le plan parallèlement à lui-même.`,
      why: { 0: String.raw`$(1, 2, 0)$ vérifie $2\times 1 - 1\times 2 + 3\times 0 = 0$ : il est <b>orthogonal</b> à la normale, c'est donc un vecteur directeur du plan, pas un vecteur normal.`, 2: String.raw`Le terme constant $d = -5$ ne fait pas partie du vecteur normal : il fixe seulement la position du plan.`, 3: String.raw`Tu as décalé les coefficients en oubliant celui de $x$ : la normale est $(a, b, c)$, coefficients de $x$, $y$, $z$ dans cet ordre.` },
      rule: String.raw`Plan $ax + by + cz + d = 0$ : $\vec n = (a, b, c)$ est normal`,
      topic: 'Vecteur normal à un plan', sec: 'm11-s-droites-plans',
      steps: [
        String.raw`Notion : un vecteur normal à un plan est perpendiculaire à toutes les directions du plan. Pour le plan $ax + by + cz + d = 0$, c'est $\vec n = (a, b, c)$.`,
        String.raw`On lit les coefficients de $x$, $y$, $z$ dans $2x - y + 3z - 5 = 0$ : $a = 2$, $b = -1$ (le terme $-y$), $c = 3$.`,
        String.raw`Donc $\vec n = (2, -1, 3)$ ; le terme constant $-5$ n'intervient pas.`
      ],
      level: 1 },
    { id: 'm11-q-013', q: String.raw`Dans l'espace muni d'un repère, l'ensemble des points vérifiant $x + 2y - z = 4$ est :`,
      choices: [String.raw`un plan`, String.raw`une droite`, String.raw`un point`, String.raw`une sphère`], answer: 0,
      explain: String.raw`Dans l'espace (dimension 3), une seule équation linéaire $ax + by + cz + d = 0$ avec $(a, b, c) \neq (0, 0, 0)$ enlève un degré de liberté : il en reste deux, c'est un plan. Ici c'est le plan de vecteur normal $(1, 2, -1)$ qui passe par exemple par le point $(4, 0, 0)$. Une droite de l'espace nécessite deux équations (intersection de deux plans).`,
      why: { 1: String.raw`Réflexe de géométrie plane : dans le plan, $ax + by + c = 0$ est une droite, mais dans l'espace une seule équation linéaire donne un plan.`, 2: String.raw`Un point nécessite trois équations indépendantes (une par coordonnée).`, 3: String.raw`Une sphère a une équation du <b>second degré</b>, $(x-a)^2 + (y-b)^2 + (z-c)^2 = R^2$ ; ici tout est du premier degré.` },
      rule: String.raw`Dans l'espace : 1 équation linéaire = un plan ; 2 équations = une droite`,
      topic: "Équation d'un plan", sec: 'm11-s-droites-plans',
      steps: [
        String.raw`Notion : dans l'espace, chaque équation linéaire indépendante enlève un « degré de liberté » aux 3 coordonnées $(x, y, z)$.`,
        String.raw`Une seule équation $x + 2y - z = 4$ : on choisit librement $y$ et $z$, puis $x = 4 - 2y + z$. Deux degrés de liberté : c'est une surface plane.`,
        String.raw`C'est le plan de vecteur normal $(1, 2, -1)$, passant par exemple par le point $(4, 0, 0)$.`
      ],
      level: 1 },
    { id: 'm11-q-014', q: String.raw`La distance de l'origine $O$ au plan $x + y + z - 1 = 0$ vaut :`,
      choices: [String.raw`$1$`, String.raw`$\frac13$`, String.raw`$\frac{1}{\sqrt3}$`, String.raw`$\sqrt3$`], answer: 2,
      explain: String.raw`La distance d'un point $M_0(x_0, y_0, z_0)$ au plan $ax + by + cz + d = 0$ vaut $\frac{|ax_0 + by_0 + cz_0 + d|}{\sqrt{a^2 + b^2 + c^2}}$. Pour l'origine, le numérateur vaut $|0 + 0 + 0 - 1| = 1$ et le dénominateur $\sqrt{1 + 1 + 1} = \sqrt3$, d'où $\frac{1}{\sqrt3} \approx 0{,}58$. Cohérent : le point $\left(\frac13, \frac13, \frac13\right)$ du plan, pied de la perpendiculaire, est exactement à cette distance de $O$.`,
      why: { 0: String.raw`Tu as oublié de diviser par la norme du vecteur normal $\sqrt{a^2 + b^2 + c^2}$ : le numérateur seul n'est une distance que si $\|\vec n\| = 1$.`, 1: String.raw`Tu as divisé par $a^2 + b^2 + c^2 = 3$ sans prendre la racine carrée : le dénominateur est $\|\vec n\| = \sqrt3$.`, 3: String.raw`Tu as inversé la fraction. D'ailleurs le point $(1, 0, 0)$ du plan est à distance 1 de $O$, donc la distance cherchée est $\leq 1$, alors que $\sqrt3 \gt 1$.` },
      rule: String.raw`$d(M_0, \mathcal P) = \dfrac{|ax_0 + by_0 + cz_0 + d|}{\sqrt{a^2 + b^2 + c^2}}$`,
      topic: 'Distance point-plan', sec: 'm11-s-droites-plans',
      steps: [
        String.raw`Notion : la distance d'un point à un plan est la longueur du plus court chemin, mesurée perpendiculairement au plan : $d = \dfrac{|ax_0 + by_0 + cz_0 + d|}{\sqrt{a^2 + b^2 + c^2}}$.`,
        String.raw`Numérateur : on remplace $(x_0, y_0, z_0) = (0, 0, 0)$ dans $x + y + z - 1$ : $|0 + 0 + 0 - 1| = 1$.`,
        String.raw`Dénominateur : norme de $\vec n = (1, 1, 1)$, soit $\sqrt{1^2 + 1^2 + 1^2} = \sqrt3$.`,
        String.raw`Distance : $\dfrac{1}{\sqrt3} = \dfrac{\sqrt3}{3} \approx 0{,}58$.`
      ],
      level: 2 },
    { id: 'm11-q-015', q: String.raw`Si $A$ est une matrice $2\times 3$ et $B$ une matrice $3\times 4$, alors $AB$ est :`,
      choices: [String.raw`une matrice $3\times 3$`, String.raw`une matrice $4\times 2$`, String.raw`non définie`, String.raw`une matrice $2\times 4$`], answer: 3,
      explain: String.raw`Le produit $AB$ est défini quand le nombre de <b>colonnes</b> de $A$ est égal au nombre de <b>lignes</b> de $B$ : ici 3 et 3, c'est bon. Le résultat a le nombre de lignes de $A$ et le nombre de colonnes de $B$ : $(2\times 3)(3\times 4) = 2\times 4$. Moyen mnémotechnique : les dimensions intérieures doivent coïncider et « disparaissent ».`,
      why: { 0: String.raw`Ce sont les dimensions intérieures (3 et 3) qui doivent être égales et qui disparaissent ; le résultat garde les dimensions extérieures (2 et 4).`, 1: String.raw`$4\times 2$ est la taille de $(AB)^T = B^TA^T$ : tu as inversé lignes et colonnes.`, 2: String.raw`Le produit est bien défini car $A$ a 3 colonnes et $B$ a 3 lignes. C'est $BA$ qui ne serait pas défini ($4 \neq 2$).` },
      rule: String.raw`$(n\times p)\cdot(p\times q) = n\times q$`,
      topic: 'Produit matriciel : tailles', sec: 'm11-s-matrices',
      steps: [
        String.raw`Notion : dans $AB$, chaque ligne de $A$ est « multipliée » par chaque colonne de $B$ ; les lignes de $A$ et les colonnes de $B$ doivent donc avoir la même longueur.`,
        String.raw`Condition : nombre de colonnes de $A$ (3) = nombre de lignes de $B$ (3) : le produit est défini.`,
        String.raw`Taille du résultat : (lignes de $A$) × (colonnes de $B$) $= 2\times 4$.`
      ],
      level: 1 },
    { id: 'm11-q-016', q: String.raw`Pour deux matrices carrées $A$ et $B$ quelconques de même taille, laquelle de ces égalités est <b>toujours</b> vraie ?`,
      choices: [String.raw`$AB = BA$`, String.raw`$(A + B)^2 = A^2 + 2AB + B^2$`, String.raw`$\det(AB) = \det(BA)$`, String.raw`$(AB)^T = A^TB^T$`], answer: 2,
      explain: String.raw`Le déterminant est multiplicatif : $\det(AB) = \det A\times\det B$. Comme $\det A$ et $\det B$ sont des <b>nombres</b>, ils commutent, d'où $\det(AB) = \det B\,\det A = \det(BA)$, même lorsque $AB \neq BA$. Les trois autres égalités supposent une commutativité que le produit matriciel n'a pas.`,
      why: { 0: String.raw`Le produit matriciel n'est pas commutatif : avec $A = \begin{pmatrix} 1 & 2 \\ 3 & 4\end{pmatrix}$ et $B = \begin{pmatrix} 0 & 1 \\ 1 & 0\end{pmatrix}$, $AB$ échange les colonnes de $A$ alors que $BA$ échange ses lignes.`, 1: String.raw`En développant, $(A+B)^2 = A^2 + AB + BA + B^2$ : on ne peut regrouper $AB + BA$ en $2AB$ que si $AB = BA$.`, 3: String.raw`La transposée d'un produit inverse l'ordre : $(AB)^T = B^TA^T$, qui diffère en général de $A^TB^T$.` },
      rule: String.raw`$\det(AB) = \det A\,\det B$, alors que $AB \neq BA$ en général`,
      topic: 'Règles du calcul matriciel', sec: 'm11-s-matrices',
      steps: [
        String.raw`Notion : le produit de matrices n'est <b>pas commutatif</b> ($AB \neq BA$ en général), mais le déterminant transforme un produit de matrices en produit de <b>nombres</b> : $\det(AB) = \det A\,\det B$.`,
        String.raw`$\det(AB) = \det A\times\det B$ et $\det(BA) = \det B\times\det A$.`,
        String.raw`Les nombres commutent : $\det A\times\det B = \det B\times\det A$, donc $\det(AB) = \det(BA)$ dans tous les cas.`
      ],
      level: 2 },
    { id: 'm11-q-017', q: String.raw`La transposée d'un produit $(AB)^T$ est égale à :`,
      choices: [String.raw`$A^TB^T$`, String.raw`$A^TB$`, String.raw`$BA$`, String.raw`$B^TA^T$`], answer: 3,
      explain: String.raw`Le coefficient $(i, j)$ de $(AB)^T$ est le coefficient $(j, i)$ de $AB$, soit $\sum_k a_{jk}b_{ki}$. On le réécrit $\sum_k (B^T)_{ik}(A^T)_{kj}$, qui est le coefficient $(i, j)$ de $B^TA^T$. La transposition inverse donc l'ordre des facteurs, exactement comme l'inversion. Contrôle des tailles : si $A$ est $n\times p$ et $B$ est $p\times q$, $(AB)^T$ et $B^TA^T$ sont tous deux $q\times n$.`,
      why: { 0: String.raw`L'ordre doit s'inverser ; d'ailleurs si $A$ est $2\times 3$ et $B$ est $3\times 4$, le produit $A^TB^T$ ($3\times 2$ fois $4\times 3$) n'est même pas défini.`, 1: String.raw`Il faut transposer <b>les deux</b> facteurs, et inverser leur ordre.`, 2: String.raw`Il manque les transpositions : $BA$ n'a en général aucun rapport avec $(AB)^T$ (et peut même ne pas être défini).` },
      rule: String.raw`$(AB)^T = B^TA^T$ et $(AB)^{-1} = B^{-1}A^{-1}$ : l'ordre s'inverse`,
      topic: "Transposée d'un produit", sec: 'm11-s-matrices',
      steps: [
        String.raw`Notion : la transposée $A^T$ échange lignes et colonnes : $(A^T)_{ij} = a_{ji}$.`,
        String.raw`$((AB)^T)_{ij} = (AB)_{ji} = \sum_k a_{jk}b_{ki}$.`,
        String.raw`On réécrit chaque terme : $a_{jk}b_{ki} = b_{ki}a_{jk} = (B^T)_{ik}(A^T)_{kj}$, et $\sum_k (B^T)_{ik}(A^T)_{kj} = (B^TA^T)_{ij}$.`,
        String.raw`Donc $(AB)^T = B^TA^T$ : l'ordre des facteurs s'inverse.`
      ],
      level: 1 },
    { id: 'm11-q-018', q: String.raw`Soient $A$, $B$ deux matrices carrées telles que $AB = 0$ (matrice nulle). Que peut-on affirmer ?`,
      choices: [String.raw`$A = 0$ ou $B = 0$`, String.raw`Au moins l'une des deux n'est pas inversible`, String.raw`$A$ et $B$ ne sont inversibles ni l'une ni l'autre`, String.raw`$BA = 0$ aussi`], answer: 1,
      explain: String.raw`En passant au déterminant : $\det A\times\det B = \det(AB) = \det 0 = 0$, donc $\det A = 0$ ou $\det B = 0$ : au moins une des deux matrices n'est pas inversible. Autre argument : si $A$ était inversible, en multipliant à gauche par $A^{-1}$ on obtiendrait $B = A^{-1}AB = 0$. En revanche on ne peut pas conclure que $A$ ou $B$ est nulle : les matrices ont des « diviseurs de zéro ».`,
      why: { 0: String.raw`Faux : $N = \begin{pmatrix} 0 & 1 \\ 0 & 0\end{pmatrix}$ vérifie $N^2 = 0$ avec $N \neq 0$. La règle « produit nul $\Rightarrow$ un facteur nul » des nombres ne s'étend pas aux matrices.`, 2: String.raw`Trop fort : $A = I$ et $B = 0$ donnent $AB = 0$ avec $A$ inversible. Une seule des deux doit être non inversible.`, 3: String.raw`Faux : avec $A = \begin{pmatrix} 1 & 0 \\ 0 & 0\end{pmatrix}$ et $B = \begin{pmatrix} 0 & 0 \\ 1 & 0\end{pmatrix}$, on a $AB = 0$ mais $BA = \begin{pmatrix} 0 & 0 \\ 1 & 0\end{pmatrix} \neq 0$.` },
      rule: String.raw`$\det(AB) = \det A\,\det B$ ; mais $AB = 0$ n'entraîne pas $A = 0$ ou $B = 0$`,
      topic: 'Produit nul de matrices', sec: 'm11-s-determinant',
      steps: [
        String.raw`Notion : une matrice est inversible si et seulement si son déterminant est non nul, et $\det(AB) = \det A\,\det B$.`,
        String.raw`$AB = 0 \Rightarrow \det A\times\det B = \det 0 = 0$ ; un produit de deux <b>nombres</b> est nul seulement si l'un d'eux l'est : $\det A = 0$ ou $\det B = 0$.`,
        String.raw`Conclusion : au moins une des deux matrices n'est pas inversible. Mais aucune n'est forcément nulle : $N = \begin{pmatrix} 0 & 1 \\ 0 & 0\end{pmatrix}$ vérifie $N\times N = 0$.`
      ],
      level: 3 },
    { id: 'm11-q-019', q: String.raw`Que vaut $\begin{vmatrix} 2 & 3 \\ 1 & 4 \end{vmatrix}$ ?`,
      choices: [String.raw`$5$`, String.raw`$11$`, String.raw`$-5$`], answer: 0,
      explain: String.raw`Pour une matrice $2\times 2$, $\begin{vmatrix} a & b \\ c & d \end{vmatrix} = ad - bc$ : produit de la diagonale principale moins produit de l'autre diagonale. Ici $2\times 4 - 3\times 1 = 8 - 3 = 5$. Le déterminant étant non nul, la matrice est inversible.`,
      why: { 1: String.raw`$11 = 8 + 3$ : tu as calculé $ad + bc$. Le déterminant est une <b>différence</b> des produits diagonaux.`, 2: String.raw`$-5 = 3 - 8$ : tu as calculé $bc - ad$. On commence par la diagonale principale (haut-gauche vers bas-droite).` },
      rule: String.raw`$\begin{vmatrix} a & b \\ c & d \end{vmatrix} = ad - bc$`,
      topic: 'Déterminant 2×2', sec: 'm11-s-determinant',
      steps: [
        String.raw`Notion : le déterminant d'une matrice $2\times 2$ est un nombre qui indique si elle est inversible (s'il est non nul) ; il vaut $ad - bc$.`,
        String.raw`Diagonale principale : $a\times d = 2\times 4 = 8$ ; autre diagonale : $b\times c = 3\times 1 = 3$.`,
        String.raw`Différence : $8 - 3 = 5$.`
      ],
      level: 1 },
    { id: 'm11-q-020', q: String.raw`$A$ est une matrice $3\times 3$ de déterminant 2. Que vaut $\det(3A)$ ?`,
      choices: [String.raw`$6$`, String.raw`$54$`, String.raw`$18$`, String.raw`$8$`], answer: 1,
      explain: String.raw`Multiplier la matrice $A$ par 3 multiplie <b>chacune de ses 3 lignes</b> par 3. Le déterminant étant linéaire par rapport à chaque ligne, chaque ligne fait sortir un facteur 3 : $\det(3A) = 3\times 3\times 3\times\det A = 27\times 2 = 54$. En général, pour $A$ d'ordre $n$, $\det(\lambda A) = \lambda^n\det A$.`,
      why: { 0: String.raw`$6 = 3\times 2$ : tu as utilisé $\det(\lambda A) = \lambda\det A$, faux dès que $n \geq 2$. Chacune des 3 lignes apporte un facteur 3.`, 2: String.raw`$18 = 3^2\times 2$ : c'est la formule pour une matrice $2\times 2$. Ici la matrice est d'ordre 3, donc le facteur est $3^3 = 27$.`, 3: String.raw`$8 = 2^3$ : tu as élevé le déterminant au cube au lieu du facteur. C'est $\lambda = 3$ qui est élevé à la puissance $n = 3$.` },
      rule: String.raw`$\det(\lambda A) = \lambda^n\det A$ pour $A$ d'ordre $n$`,
      topic: 'Déterminant de λA', sec: 'm11-s-determinant',
      steps: [
        String.raw`Notion : le déterminant est linéaire par rapport à <b>chaque ligne</b> : multiplier une seule ligne par $\lambda$ multiplie le déterminant par $\lambda$.`,
        String.raw`$3A$ multiplie les 3 lignes de $A$ par 3 : on sort un facteur 3 par ligne, soit $3\times 3\times 3 = 3^3 = 27$.`,
        String.raw`$\det(3A) = 27\times\det A = 27\times 2 = 54$.`
      ],
      level: 2 },
    { id: 'm11-q-021', q: String.raw`La règle de Sarrus permet de calculer le déterminant :`,
      choices: [String.raw`uniquement des matrices $3\times 3$`, String.raw`de toute matrice carrée`, String.raw`des matrices $3\times 3$ et $4\times 4$`, String.raw`uniquement des matrices triangulaires`], answer: 0,
      explain: String.raw`La règle de Sarrus (recopier les deux premières colonnes, puis trois diagonales comptées « plus » et trois comptées « moins ») est une astuce valable <b>uniquement</b> en dimension 3, où le déterminant a exactement $3! = 6$ termes. Pour $n \geq 4$, il y a $n!$ termes (24 pour $n = 4$) : on développe selon une ligne ou une colonne, ou on échelonne par le pivot de Gauss.`,
      why: { 1: String.raw`Appliquée à une $4\times 4$, la méthode des diagonales ne donne que 8 termes au lieu des $4! = 24$ du déterminant : le résultat est faux.`, 2: String.raw`Il n'existe pas de « Sarrus » en dimension 4 : seuls le développement par cofacteurs ou le pivot fonctionnent.`, 3: String.raw`Pour une triangulaire, il suffit de multiplier les coefficients diagonaux ; Sarrus marche pour toute $3\times 3$, triangulaire ou non.` },
      rule: String.raw`Sarrus : uniquement en $3\times 3$ ; sinon développement par cofacteurs ou pivot de Gauss`,
      topic: 'Règle de Sarrus', sec: 'm11-s-determinant',
      steps: [
        String.raw`Notion : la règle de Sarrus est un raccourci pour un déterminant $3\times 3$ : on additionne les 3 produits « descendants » et on soustrait les 3 produits « montants ».`,
        String.raw`Un déterminant $n\times n$ comporte $n!$ termes : $3! = 6$ en dimension 3, exactement les 6 diagonales de Sarrus.`,
        String.raw`En dimension 4, il y a $4! = 24$ termes, que les diagonales ne fournissent pas : Sarrus ne s'applique qu'aux matrices $3\times 3$.`
      ],
      level: 1 },
    { id: 'm11-q-022', q: String.raw`Une matrice carrée $A$ est inversible si et seulement si :`,
      choices: [String.raw`tous ses coefficients sont non nuls`, String.raw`$\operatorname{tr}(A) \neq 0$`, String.raw`$\det A \neq 0$`, String.raw`elle est symétrique`], answer: 2,
      explain: String.raw`Le critère fondamental est : $A$ inversible $\iff \det A \neq 0$, ce qui équivaut aussi à $\operatorname{rg}A = n$ ou à « les colonnes de $A$ forment une base ». Quand $\det A \neq 0$, on a même la formule $A^{-1} = \frac{1}{\det A}\,\mathrm{Com}(A)^T$. Les autres propriétés proposées ne disent rien sur l'inversibilité.`,
      why: { 0: String.raw`$\begin{pmatrix} 1 & 1 \\ 1 & 1\end{pmatrix}$ n'a aucun coefficient nul mais son déterminant vaut $0$ ; à l'inverse, $I_2$ contient des zéros et est inversible.`, 1: String.raw`$\begin{pmatrix} 1 & 0 \\ 0 & -1\end{pmatrix}$ a une trace nulle et est inversible ($\det = -1$) ; et $\begin{pmatrix} 1 & 1 \\ 1 & 1\end{pmatrix}$ a une trace non nulle sans être inversible.`, 3: String.raw`La symétrie n'a pas de lien avec l'inversibilité : la matrice nulle est symétrique et non inversible.` },
      rule: String.raw`$A$ inversible $\iff \det A \neq 0 \iff \operatorname{rg}A = n$`,
      topic: "Inversibilité d'une matrice", sec: 'm11-s-determinant',
      steps: [
        String.raw`Notion : $A$ est inversible s'il existe $B$ telle que $AB = BA = I$ ; cela revient à dire que l'application linéaire associée est bijective.`,
        String.raw`Critère : $A$ inversible $\iff \det A \neq 0$ (équivalent : $\operatorname{rg}A = n$).`,
        String.raw`Contre-exemples aux autres choix : $\begin{pmatrix} 1 & 1 \\ 1 & 1\end{pmatrix}$ (aucun zéro, mais $\det = 0$) et $\begin{pmatrix} 1 & 0 \\ 0 & -1\end{pmatrix}$ (trace nulle, mais inversible).`
      ],
      level: 1 },
    { id: 'm11-q-023', q: String.raw`Si $ad - bc \neq 0$, l'inverse de $\begin{pmatrix} a & b \\ c & d \end{pmatrix}$ est :`,
      choices: [String.raw`$\begin{pmatrix} 1/a & 1/b \\ 1/c & 1/d \end{pmatrix}$`, String.raw`$\frac{1}{ad - bc}\begin{pmatrix} a & -b \\ -c & d \end{pmatrix}$`, String.raw`$\frac{1}{ad - bc}\begin{pmatrix} d & b \\ c & a \end{pmatrix}$`, String.raw`$\frac{1}{ad - bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$`], answer: 3,
      explain: String.raw`Méthode : on <b>échange</b> $a$ et $d$, on <b>change le signe</b> de $b$ et $c$, puis on divise par le déterminant $ad - bc$. Vérification : $\begin{pmatrix} a & b \\ c & d \end{pmatrix}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix} = \begin{pmatrix} ad - bc & 0 \\ 0 & ad - bc \end{pmatrix} = (ad - bc)I_2$. En divisant par $ad - bc \neq 0$, on obtient bien l'identité.`,
      why: { 0: String.raw`L'inverse matriciel n'est pas l'inverse coefficient par coefficient : le produit avec la matrice de départ ne donne pas $I_2$ (et un seul coefficient nul rendrait la formule absurde).`, 1: String.raw`Tu as oublié d'échanger $a$ et $d$ : le produit avec la matrice de départ donne $a^2 - bc$ en haut à gauche au lieu de $ad - bc$.`, 2: String.raw`Tu as bien échangé $a$ et $d$ mais oublié de changer le signe de $b$ et $c$ : le coefficient $(1, 2)$ du produit vaut $ab + ba = 2ab$ au lieu de $0$.` },
      rule: String.raw`$\begin{pmatrix} a & b \\ c & d \end{pmatrix}^{-1} = \dfrac{1}{ad - bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$`,
      topic: "Inverse d'une matrice 2×2", sec: 'm11-s-determinant',
      steps: [
        String.raw`Notion : l'inverse $A^{-1}$ est la matrice telle que $AA^{-1} = I_2$ ; en $2\times 2$, il existe une formule directe dès que $ad - bc \neq 0$.`,
        String.raw`Recette : échanger $a$ et $d$, changer le signe de $b$ et $c$, ce qui donne $\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$, puis diviser par $ad - bc$.`,
        String.raw`Vérification : $\begin{pmatrix} a & b \\ c & d \end{pmatrix}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix} = \begin{pmatrix} ad - bc & -ab + ba \\ cd - dc & -cb + da \end{pmatrix} = (ad - bc)I_2$.`
      ],
      level: 2 },
    { id: 'm11-q-024', q: String.raw`Si $A$ et $B$ sont inversibles, $(AB)^{-1}$ vaut :`,
      choices: [String.raw`$B^{-1}A^{-1}$`, String.raw`$A^{-1}B^{-1}$`, String.raw`$\frac{1}{AB}$`], answer: 0,
      explain: String.raw`On vérifie que $B^{-1}A^{-1}$ convient, grâce à l'associativité : $(AB)(B^{-1}A^{-1}) = A(BB^{-1})A^{-1} = AIA^{-1} = AA^{-1} = I$. L'ordre s'inverse, comme quand on se déshabille : on enlève d'abord ce qu'on a mis en dernier. C'est la même règle que pour la transposée d'un produit.`,
      why: { 1: String.raw`$(AB)(A^{-1}B^{-1}) = ABA^{-1}B^{-1}$ ne se simplifie pas, car $B$ et $A^{-1}$ ne commutent pas en général. Cette formule n'est juste que si $A$ et $B$ commutent.`, 2: String.raw`On ne divise pas par une matrice : l'écriture $\frac{1}{AB}$ n'a pas de sens. Seul l'inverse $(AB)^{-1}$ existe.` },
      rule: String.raw`$(AB)^{-1} = B^{-1}A^{-1}$`,
      topic: "Inverse d'un produit", sec: 'm11-s-determinant',
      steps: [
        String.raw`Notion : l'inverse de $M$ est l'unique matrice $N$ telle que $MN = I$ ; pour trouver $(AB)^{-1}$, il suffit de vérifier qu'un candidat donne $I$.`,
        String.raw`Candidat $B^{-1}A^{-1}$ : par associativité, $(AB)(B^{-1}A^{-1}) = A(BB^{-1})A^{-1}$.`,
        String.raw`Or $BB^{-1} = I$, donc on obtient $AIA^{-1} = AA^{-1} = I$. Ainsi $(AB)^{-1} = B^{-1}A^{-1}$.`
      ],
      level: 2 },
    { id: 'm11-q-025', q: String.raw`Un système linéaire de 3 équations à 3 inconnues dont la matrice a un déterminant <b>nul</b> :`,
      choices: [String.raw`n'a jamais de solution`, String.raw`a une unique solution`, String.raw`a soit aucune solution, soit une infinité`, String.raw`a exactement deux solutions`], answer: 2,
      explain: String.raw`Si $\det A = 0$, le rang de $A$ est strictement inférieur à 3 : le système n'est pas de Cramer. Deux cas seulement : soit les équations sont incompatibles (aucune solution), soit elles sont compatibles et les solutions forment un ensemble infini décrit par $3 - \operatorname{rg}A$ paramètres. Pour trancher, on applique le pivot de Gauss et on regarde si une ligne « $0 = c$ » avec $c \neq 0$ apparaît.`,
      why: { 0: String.raw`Il peut y en avoir une infinité : si le second membre est nul, $X = 0$ est solution, ainsi que tout vecteur du noyau, qui n'est pas réduit à $\{0\}$.`, 1: String.raw`Une solution unique correspond exactement au cas $\det A \neq 0$ (système de Cramer).`, 3: String.raw`Un système linéaire n'a jamais exactement deux solutions : si $X_1 \neq X_2$ sont solutions, tous les $X_1 + t(X_2 - X_1)$ le sont aussi, ce qui en fait une infinité.` },
      rule: String.raw`$\det A \neq 0$ : solution unique ; $\det A = 0$ : aucune solution ou une infinité`,
      topic: 'Systèmes et déterminant', sec: 'm11-s-systemes',
      steps: [
        String.raw`Notion : un système $AX = B$ a une unique solution si et seulement si $\det A \neq 0$ (système de Cramer).`,
        String.raw`Si $\det A = 0$, le rang est $\lt 3$ : après pivot de Gauss, au moins une ligne a ses coefficients nuls et devient « $0 = c$ ».`,
        String.raw`Si $c \neq 0$ : système incompatible, aucune solution. Si $c = 0$ : une infinité de solutions, avec $3 - \operatorname{rg}A$ paramètres libres.`
      ],
      level: 2 },
    { id: 'm11-q-026', q: String.raw`Quel est le rang de $\begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}$ ?`,
      choices: [String.raw`$0$`, String.raw`$1$`, String.raw`$2$`, String.raw`$4$`], answer: 1,
      explain: String.raw`Le rang est le nombre de lignes (ou de colonnes) linéairement indépendantes, c'est-à-dire le nombre de pivots après échelonnement. Ici $L_2 = 2L_1$ : l'opération $L_2 \leftarrow L_2 - 2L_1$ donne une ligne nulle et il reste un seul pivot. Le rang vaut 1, ce que confirment $\det = 1\times 4 - 2\times 2 = 0$ (rang $\lt 2$) et le fait que la matrice ne soit pas nulle (rang $\geq 1$).`,
      why: { 0: String.raw`Seule la matrice nulle est de rang 0 ; ici la première ligne $(1, 2)$ est non nulle.`, 2: String.raw`Le déterminant vaut $4 - 4 = 0$ : les deux lignes sont proportionnelles, la matrice n'est pas de rang maximal.`, 3: String.raw`Le rang est au plus égal au nombre de lignes et au nombre de colonnes, ici 2 ; 4 est le nombre de coefficients.` },
      rule: String.raw`Rang = nombre de pivots après échelonnement ; $\det A \neq 0 \iff$ rang maximal`,
      topic: "Rang d'une matrice", sec: 'm11-s-systemes',
      steps: [
        String.raw`Notion : le rang est le nombre de lignes vraiment indépendantes (non combinaisons des autres), c'est-à-dire le nombre de pivots après échelonnement.`,
        String.raw`On remarque $L_2 = (2, 4) = 2\times(1, 2) = 2L_1$.`,
        String.raw`$L_2 \leftarrow L_2 - 2L_1$ donne $(0, 0)$ : il reste un seul pivot (le 1 de $L_1$), donc le rang vaut 1.`
      ],
      level: 1 },
    { id: 'm11-q-027', q: String.raw`Dans la méthode du pivot de Gauss, laquelle de ces opérations est <b>interdite</b> ?`,
      choices: [String.raw`$L_2 \leftarrow L_2 - 3L_1$`, String.raw`$L_1 \leftrightarrow L_3$`, String.raw`$L_3 \leftarrow 2L_3 + L_1$`, String.raw`$L_2 \leftarrow 0\times L_2$`], answer: 3,
      explain: String.raw`Les opérations du pivot doivent transformer le système en un système <b>équivalent</b> (mêmes solutions), donc être réversibles. Échanger deux lignes, multiplier une ligne par un réel non nul, ajouter à une ligne un multiple d'une autre : tout cela peut se défaire. Multiplier une ligne par 0 efface une équation de façon irréversible, et le nouveau système a en général plus de solutions.`,
      why: { 0: String.raw`Ajouter à une ligne un multiple d'une autre ligne est l'opération de base du pivot ; on la défait par $L_2 \leftarrow L_2 + 3L_1$.`, 1: String.raw`Échanger deux lignes est autorisé (utile pour amener un pivot non nul en haut) ; on revient en arrière par le même échange.`, 2: String.raw`Autorisé : $L_3$ est multipliée par $2 \neq 0$ avant d'ajouter $L_1$, et on revient en arrière par $L_3 \leftarrow \frac12(L_3 - L_1)$.` },
      rule: String.raw`Opérations autorisées : $L_i \leftrightarrow L_j$, $L_i \leftarrow \alpha L_i$ avec $\alpha \neq 0$, $L_i \leftarrow L_i + \beta L_j$ avec $j \neq i$`,
      topic: 'Opérations du pivot de Gauss', sec: 'm11-s-systemes',
      steps: [
        String.raw`Notion : le pivot de Gauss transforme un système en un système <b>équivalent</b> (mêmes solutions) ; chaque opération doit donc pouvoir être annulée.`,
        String.raw`Opérations autorisées : échanger deux lignes, multiplier une ligne par un réel <b>non nul</b>, ajouter à une ligne un multiple d'une autre ligne.`,
        String.raw`$L_2 \leftarrow 0\times L_2$ remplace l'équation 2 par $0 = 0$ : l'information est perdue définitivement, c'est interdit.`
      ],
      level: 2 },
    { id: 'm11-q-028', q: String.raw`Une famille de 4 vecteurs de $\mathbb{R}^3$ est :`,
      choices: [String.raw`toujours liée`, String.raw`toujours libre`, String.raw`toujours génératrice de $\mathbb{R}^3$`, String.raw`une base si ses vecteurs sont non nuls`], answer: 0,
      explain: String.raw`Dans un espace de dimension $n$, une famille libre a au plus $n$ vecteurs, et une famille génératrice en a au moins $n$. Comme $\mathbb{R}^3$ est de dimension 3, une famille de 4 vecteurs ne peut pas être libre : elle est toujours liée (l'un des vecteurs est combinaison linéaire des autres). En revanche, rien ne garantit qu'elle soit génératrice.`,
      why: { 1: String.raw`Une famille libre de $\mathbb{R}^3$ a au plus $\dim\mathbb{R}^3 = 3$ vecteurs : 4 vecteurs ne peuvent pas être libres.`, 2: String.raw`4 vecteurs tous colinéaires, par exemple $\vec u$, $2\vec u$, $3\vec u$, $4\vec u$, n'engendrent qu'une droite.`, 3: String.raw`Une base de $\mathbb{R}^3$ a exactement 3 vecteurs ; être non nuls ne suffit ni pour être libre, ni pour être générateur.` },
      rule: String.raw`En dimension $n$ : famille libre $\Rightarrow$ au plus $n$ vecteurs ; famille génératrice $\Rightarrow$ au moins $n$`,
      topic: 'Familles libres et dimension', sec: 'm11-s-ev',
      steps: [
        String.raw`Notion : une famille est <b>libre</b> si aucun de ses vecteurs n'est combinaison linéaire des autres ; la <b>dimension</b> d'un espace est le nombre maximal de vecteurs libres qu'il contient.`,
        String.raw`$\dim\mathbb{R}^3 = 3$ : une famille libre de $\mathbb{R}^3$ a au plus 3 vecteurs.`,
        String.raw`Avec 4 vecteurs, la famille est donc forcément <b>liée</b> (mais pas forcément génératrice).`
      ],
      level: 2 },
    { id: 'm11-q-029', q: String.raw`Soit $f : \mathbb{R}^5 \to \mathbb{R}^3$ linéaire de rang 3. Quelle est la dimension de $\ker f$ ?`,
      choices: [String.raw`$0$`, String.raw`$3$`, String.raw`$2$`, String.raw`$8$`], answer: 2,
      explain: String.raw`Le théorème du rang porte sur l'espace de <b>départ</b> : $\dim E = \dim\ker f + \operatorname{rg}f$. Avec $E = \mathbb{R}^5$ et $\operatorname{rg}f = 3$, on obtient $\dim\ker f = 5 - 3 = 2$. Interprétation : $f$ « écrase » 2 des 5 dimensions de départ pour remplir une image de dimension 3 (ici $f$ est surjective).`,
      why: { 0: String.raw`Tu as utilisé la dimension d'<b>arrivée</b> (3) : $3 - 3 = 0$. Le théorème du rang porte sur l'espace de départ, de dimension 5.`, 1: String.raw`3 est le rang, c'est-à-dire $\dim\operatorname{Im}f$, pas la dimension du noyau.`, 3: String.raw`Tu as additionné au lieu de soustraire : $\dim E = \dim\ker f + \operatorname{rg}f$ donne $\dim\ker f = 5 - 3$, pas $5 + 3$.` },
      rule: String.raw`Théorème du rang : $\dim E = \dim\ker f + \operatorname{rg}f$ ($E$ = espace de départ)`,
      topic: 'Théorème du rang', sec: 'm11-s-ev',
      steps: [
        String.raw`Notion : le noyau $\ker f$ est l'ensemble des vecteurs envoyés sur $\vec 0$. Le théorème du rang relie sa dimension au rang : $\dim E = \dim\ker f + \operatorname{rg}f$, où $E$ est l'espace de <b>départ</b>.`,
        String.raw`Ici l'espace de départ est $\mathbb{R}^5$ : $5 = \dim\ker f + 3$.`,
        String.raw`Donc $\dim\ker f = 5 - 3 = 2$.`
      ],
      level: 2 },
    { id: 'm11-q-030', q: String.raw`Dans la matrice d'une application linéaire $f$ relativement à une base $(\vec e_1, \dots, \vec e_n)$ :`,
      choices: [String.raw`la colonne $j$ contient les coordonnées de $f(\vec e_j)$`, String.raw`la ligne $j$ contient les coordonnées de $f(\vec e_j)$`, String.raw`les coefficients diagonaux sont les valeurs propres`, String.raw`la matrice est toujours symétrique`], answer: 0,
      explain: String.raw`Par construction, la $j$-ième <b>colonne</b> de la matrice de $f$ contient les coordonnées de $f(\vec e_j)$. On le vérifie : le produit $A\vec e_j$, où $\vec e_j$ a un seul 1 en position $j$, sélectionne exactement la colonne $j$ de $A$. Pour écrire la matrice, on calcule donc l'image de chaque vecteur de base et on la range en colonne.`,
      why: { 1: String.raw`Confusion lignes/colonnes, erreur très fréquente : en rangeant les images en lignes, on obtient la transposée de la matrice de $f$.`, 2: String.raw`Les valeurs propres ne se lisent sur la diagonale que si la matrice est triangulaire (ou diagonale) ; en général il faut résoudre $\det(A - \lambda I) = 0$.`, 3: String.raw`Aucune raison : $f(x, y) = (y, 0)$ a pour matrice $\begin{pmatrix} 0 & 1 \\ 0 & 0\end{pmatrix}$, qui n'est pas symétrique.` },
      rule: String.raw`Colonne $j$ de la matrice de $f$ = coordonnées de $f(\vec e_j)$`,
      topic: "Matrice d'une application linéaire", sec: 'm11-s-ev',
      steps: [
        String.raw`Notion : une application linéaire est entièrement déterminée par les images des vecteurs de base ; sa matrice range ces images.`,
        String.raw`Convention : la colonne $j$ contient les coordonnées de $f(\vec e_j)$.`,
        String.raw`Justification : $\vec e_j$ a pour coordonnées $(0, \dots, 1, \dots, 0)$ (un 1 en position $j$), et le produit $A\vec e_j$ extrait exactement la colonne $j$ de $A$.`
      ],
      level: 2 },
    { id: 'm11-q-031', q: String.raw`Les valeurs propres de $\begin{pmatrix} 4 & 1 \\ 0 & -2 \end{pmatrix}$ sont :`,
      choices: [String.raw`$4$ et $1$`, String.raw`$2$ et $-8$`, String.raw`$-4$ et $2$`, String.raw`$4$ et $-2$`], answer: 3,
      explain: String.raw`Pour une matrice triangulaire, $A - \lambda I$ est encore triangulaire et son déterminant est le produit des termes diagonaux : $\det(A - \lambda I) = (4 - \lambda)(-2 - \lambda)$. Ce polynôme s'annule pour $\lambda = 4$ et $\lambda = -2$, qui sont donc les coefficients diagonaux. Contrôle : la somme $4 + (-2) = 2$ est la trace, et le produit $-8$ est le déterminant.`,
      why: { 0: String.raw`Tu as lu la première <b>ligne</b> ; pour une triangulaire, ce sont les coefficients <b>diagonaux</b> qui sont les valeurs propres. Le 1 hors diagonale n'intervient pas.`, 1: String.raw`$2$ et $-8$ sont la trace et le déterminant, c'est-à-dire la <b>somme</b> et le <b>produit</b> des valeurs propres, pas les valeurs propres elles-mêmes.`, 2: String.raw`Erreur de signe : les racines de $(4 - \lambda)(-2 - \lambda)$ sont $\lambda = 4$ et $\lambda = -2$, pas leurs opposés.` },
      rule: String.raw`Matrice triangulaire : valeurs propres = coefficients diagonaux`,
      topic: "Valeurs propres d'une triangulaire", sec: 'm11-s-diag',
      steps: [
        String.raw`Notion : $\lambda$ est valeur propre de $A$ s'il existe $\vec u \neq \vec 0$ tel que $A\vec u = \lambda\vec u$ ; on les trouve en résolvant $\det(A - \lambda I) = 0$.`,
        String.raw`$A - \lambda I = \begin{pmatrix} 4 - \lambda & 1 \\ 0 & -2 - \lambda \end{pmatrix}$, donc $\det(A - \lambda I) = (4 - \lambda)(-2 - \lambda) - 1\times 0 = (4 - \lambda)(-2 - \lambda)$.`,
        String.raw`Produit nul : $4 - \lambda = 0$ ou $-2 - \lambda = 0$, soit $\lambda = 4$ ou $\lambda = -2$.`
      ],
      level: 1 },
    { id: 'm11-q-032', q: String.raw`Une matrice $2\times 2$ a pour trace 5 et pour déterminant 6. Ses valeurs propres sont :`,
      choices: [String.raw`$5$ et $6$`, String.raw`$2$ et $3$`, String.raw`$1$ et $6$`, String.raw`$-2$ et $-3$`], answer: 1,
      explain: String.raw`Pour une matrice $2\times 2$, le polynôme caractéristique vaut $\lambda^2 - \operatorname{tr}(A)\lambda + \det A = \lambda^2 - 5\lambda + 6$. On cherche deux nombres de somme 5 et de produit 6 : ce sont $2$ et $3$, d'où $(\lambda - 2)(\lambda - 3)$. Vérification : $2 + 3 = 5$ et $2\times 3 = 6$.`,
      why: { 0: String.raw`La trace et le déterminant sont la <b>somme</b> et le <b>produit</b> des valeurs propres, pas les valeurs propres elles-mêmes : $5 + 6 = 11 \neq 5$.`, 2: String.raw`Le produit $1\times 6 = 6$ est correct mais la somme vaut $7 \neq 5$ : les deux conditions doivent être vérifiées.`, 3: String.raw`Erreur de signe : $-2$ et $-3$ ont pour somme $-5$, ce sont les racines de $\lambda^2 + 5\lambda + 6$.` },
      rule: String.raw`En $2\times 2$ : $\chi_A(\lambda) = \lambda^2 - \operatorname{tr}(A)\,\lambda + \det A$`,
      topic: 'Trace, déterminant, valeurs propres', sec: 'm11-s-diag',
      steps: [
        String.raw`Notion : pour une matrice $2\times 2$, la somme des valeurs propres est la trace et leur produit est le déterminant ; elles sont les racines de $\lambda^2 - \operatorname{tr}(A)\lambda + \det A$.`,
        String.raw`Polynôme : $\lambda^2 - 5\lambda + 6$. Discriminant : $\Delta = 25 - 24 = 1$.`,
        String.raw`Racines : $\frac{5 - 1}{2} = 2$ et $\frac{5 + 1}{2} = 3$. Contrôle : $2 + 3 = 5$ et $2\times 3 = 6$.`
      ],
      level: 2 },
    { id: 'm11-q-033', q: String.raw`Une matrice $3\times 3$ réelle qui possède 3 valeurs propres distinctes est :`,
      choices: [String.raw`forcément inversible`, String.raw`forcément symétrique`, String.raw`forcément diagonalisable`, String.raw`jamais diagonalisable`], answer: 2,
      explain: String.raw`Des vecteurs propres associés à des valeurs propres <b>distinctes</b> forment toujours une famille libre. Avec 3 valeurs propres distinctes en dimension 3, on obtient 3 vecteurs propres indépendants, donc une base de $\mathbb{R}^3$ formée de vecteurs propres : la matrice est diagonalisable. C'est la condition suffisante la plus utilisée ; elle n'est pas nécessaire ($I_3$ est diagonale avec une seule valeur propre).`,
      why: { 0: String.raw`L'une des valeurs propres peut être 0, et alors $\det A = 0$ (produit des valeurs propres) : $\operatorname{diag}(0, 1, 2)$ n'est pas inversible.`, 1: String.raw`$\begin{pmatrix} 1 & 1 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 3\end{pmatrix}$ a 3 valeurs propres distinctes sans être symétrique. C'est « symétrique réelle $\Rightarrow$ diagonalisable » qui est vrai, pas la réciproque.`, 3: String.raw`C'est au contraire la condition suffisante classique de diagonalisabilité.` },
      rule: String.raw`$n$ valeurs propres distinctes en dimension $n$ $\Rightarrow$ diagonalisable`,
      topic: 'Critère de diagonalisabilité', sec: 'm11-s-diag',
      steps: [
        String.raw`Notion : une matrice est <b>diagonalisable</b> s'il existe une base formée de vecteurs propres ; dans cette base, elle devient diagonale.`,
        String.raw`Propriété : des vecteurs propres associés à des valeurs propres distinctes sont linéairement indépendants.`,
        String.raw`3 valeurs propres distinctes donnent 3 vecteurs propres indépendants dans $\mathbb{R}^3$, qui est de dimension 3 : ils forment une base, donc la matrice est diagonalisable.`
      ],
      level: 2 },
    { id: 'm11-q-034', q: String.raw`Si $A = PDP^{-1}$ avec $D$ diagonale, alors $A^n$ vaut :`,
      choices: [String.raw`$P^nD^nP^{-n}$`, String.raw`$PD^nP^{-1}$`, String.raw`$D^n$`, String.raw`$PD^nP$`], answer: 1,
      explain: String.raw`On écrit $A^n$ comme un produit de $n$ facteurs : $(PDP^{-1})(PDP^{-1})\cdots(PDP^{-1})$. Entre deux facteurs consécutifs apparaît $P^{-1}P = I$, qui disparaît : il reste $P\,D D\cdots D\,P^{-1} = PD^nP^{-1}$. L'intérêt est que $D^n$ se calcule immédiatement, en élevant chaque coefficient diagonal à la puissance $n$.`,
      why: { 0: String.raw`Les produits $P^{-1}P$ se simplifient au milieu : $P$ et $P^{-1}$ n'apparaissent qu'une fois chacun, aux extrémités.`, 2: String.raw`$D^n$ est la matrice de $f^n$ dans la base de vecteurs propres, pas dans la base de départ : il faut revenir avec $P$ à gauche et $P^{-1}$ à droite.`, 3: String.raw`Il faut $P^{-1}$ à droite, pas $P$ : sinon les produits intermédiaires $PP$ ne se simplifient pas.` },
      rule: String.raw`$A = PDP^{-1} \Rightarrow A^n = PD^nP^{-1}$`,
      topic: 'Puissances par diagonalisation', sec: 'm11-s-diag',
      steps: [
        String.raw`Notion : diagonaliser, c'est écrire $A = PDP^{-1}$ avec $D$ diagonale ; les puissances d'une matrice diagonale se calculent coefficient par coefficient.`,
        String.raw`$A^2 = (PDP^{-1})(PDP^{-1}) = PD(P^{-1}P)DP^{-1} = PD^2P^{-1}$, car $P^{-1}P = I$.`,
        String.raw`Par récurrence, $A^n = PD^nP^{-1}$, avec $D^n = \operatorname{diag}(\lambda_1^n, \dots, \lambda_k^n)$.`
      ],
      level: 2 },
    { id: 'm11-q-035', q: String.raw`La matrice $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ est :`,
      choices: [String.raw`diagonalisable car triangulaire`, String.raw`diagonalisable car inversible`, String.raw`non diagonalisable`, String.raw`diagonale`], answer: 2,
      explain: String.raw`La matrice est triangulaire : sa seule valeur propre est 1, double. Le sous-espace propre $E_1 = \ker(A - I) = \ker\begin{pmatrix} 0 & 1 \\ 0 & 0\end{pmatrix}$ est formé des $(x, y)$ tels que $y = 0$, soit $\operatorname{Vect}((1, 0))$, de dimension $1 \lt 2$ : on ne peut pas former de base de vecteurs propres. Argument éclair : si elle était diagonalisable, on aurait $A = PIP^{-1} = I$, ce qui est faux.`,
      why: { 0: String.raw`Être triangulaire permet de <b>lire les valeurs propres</b>, pas de conclure à la diagonalisabilité : il faut encore comparer les dimensions des sous-espaces propres.`, 1: String.raw`Inversibilité et diagonalisabilité sont indépendantes : cette matrice est inversible ($\det = 1$) mais non diagonalisable, et $\operatorname{diag}(0, 1)$ est diagonale sans être inversible.`, 3: String.raw`Le coefficient $a_{12} = 1$ est hors de la diagonale : la matrice n'est pas diagonale.` },
      rule: String.raw`Diagonalisable $\iff$ la somme des $\dim E_\lambda$ vaut $n$`,
      topic: 'Matrice non diagonalisable', sec: 'm11-s-diag',
      steps: [
        String.raw`Notion : une matrice $n\times n$ est diagonalisable si et seulement si la somme des dimensions de ses sous-espaces propres $E_\lambda = \ker(A - \lambda I)$ vaut $n$.`,
        String.raw`La matrice est triangulaire : sa seule valeur propre est 1 (racine double de $(1 - \lambda)^2$).`,
        String.raw`$E_1 = \ker\begin{pmatrix} 0 & 1 \\ 0 & 0\end{pmatrix}$ : l'équation est $y = 0$, donc $E_1 = \operatorname{Vect}((1, 0))$, de dimension 1.`,
        String.raw`$1 \lt 2$ : pas assez de vecteurs propres pour former une base de $\mathbb{R}^2$, la matrice n'est pas diagonalisable.`
      ],
      level: 3 }
  ],

  exercises: [
    { id: 'm11-x-001',
      prompt: String.raw`Calcule la norme de $\vec u = (1, 2, 3)$ (valeur exacte).`,
      answer: 'sqrt(14)', vars: [], check: 'value',
      topic: "Norme d'un vecteur", sec: 'm11-s-vecteurs',
      steps: [
        String.raw`Notion : la norme $\|\vec u\|$ est la longueur du vecteur. En repère orthonormé, c'est Pythagore en dimension 3 : $\|\vec u\| = \sqrt{x^2 + y^2 + z^2}$.`,
        String.raw`On calcule les carrés des coordonnées : $1^2 = 1$, $2^2 = 4$, $3^2 = 9$.`,
        String.raw`On les additionne : $1 + 4 + 9 = 14$. C'est $\|\vec u\|^2 = \vec u\cdot\vec u$, pas encore la norme.`,
        String.raw`On prend la racine carrée : $\|\vec u\| = \sqrt{14} \approx 3{,}74$. Ordre de grandeur cohérent : plus grand que la plus grande coordonnée (3), plus petit que la somme des coordonnées (6).`
      ],
      rule: String.raw`$\|\vec u\| = \sqrt{x^2 + y^2 + z^2}$ (et $\|\vec u\|^2 = \vec u\cdot\vec u$)`,
      pitfall: String.raw`Oublier la racine carrée finale : on donne alors $\|\vec u\|^2$.`,
      mistakes: [
        { expr: '14', msg: String.raw`$14$ est $\|\vec u\|^2$, la somme des carrés : il manque la racine carrée, $\|\vec u\| = \sqrt{14}$.` },
        { expr: '6', msg: String.raw`Tu as additionné les coordonnées ($1 + 2 + 3$) : la norme n'est pas linéaire, c'est $\sqrt{x^2 + y^2 + z^2}$.` },
        { expr: 'sqrt(6)', msg: String.raw`Tu as pris la racine de $1 + 2 + 3$ : il faut d'abord élever chaque coordonnée au carré, $\sqrt{1 + 4 + 9}$.` }
      ],
      hint: String.raw`$\|\vec u\| = \sqrt{x^2 + y^2 + z^2}$.`,
      explain: String.raw`Somme des carrés $1 + 4 + 9 = 14$, puis racine : $\|\vec u\| = \sqrt{14}$.`,
      level: 1 },
    { id: 'm11-x-002',
      prompt: String.raw`Avec $\vec u = (1, -1, 2)$ et $\vec v = (0, 2, 1)$, donne les coordonnées de $2\vec u - 3\vec v$ sous la forme x;y;z.`,
      answer: '2;-8;1', vars: [], check: 'tuple',
      topic: 'Combinaison linéaire de vecteurs', sec: 'm11-s-vecteurs',
      steps: [
        String.raw`Notion : multiplier un vecteur par un réel ou additionner deux vecteurs se fait <b>coordonnée par coordonnée</b>.`,
        String.raw`$2\vec u = 2\times(1, -1, 2) = (2, -2, 4)$.`,
        String.raw`$3\vec v = 3\times(0, 2, 1) = (0, 6, 3)$.`,
        String.raw`On soustrait composante par composante : $2\vec u - 3\vec v = (2 - 0,\ -2 - 6,\ 4 - 3) = (2, -8, 1)$.`,
        String.raw`Vérification sur la 2e coordonnée, en une ligne : $2\times(-1) - 3\times 2 = -2 - 6 = -8$ ✔.`
      ],
      rule: String.raw`$\lambda\vec u + \mu\vec v = (\lambda x + \mu x',\ \lambda y + \mu y',\ \lambda z + \mu z')$`,
      pitfall: String.raw`Le signe « $-$ » devant $3\vec v$ porte sur <b>toutes</b> les coordonnées de $3\vec v$.`,
      mistakes: [
        { expr: '2;4;7', msg: String.raw`Tu as ajouté $3\vec v$ au lieu de le soustraire : $2\vec u - 3\vec v = (2 - 0,\ -2 - 6,\ 4 - 3)$.` },
        { expr: '2;-4;1', msg: String.raw`Erreur de signe sur la 2e coordonnée : $2\times(-1) = -2$, puis $-2 - 6 = -8$.` },
        { expr: '1;-3;1', msg: String.raw`Tu as calculé $\vec u - \vec v$ : n'oublie pas les coefficients 2 et 3.` }
      ],
      hint: String.raw`On calcule coordonnée par coordonnée : $2x_u - 3x_v$, etc.`,
      explain: String.raw`$2\vec u = (2, -2, 4)$ et $3\vec v = (0, 6, 3)$, donc $2\vec u - 3\vec v = (2, -8, 1)$.`,
      level: 1 },
    { id: 'm11-x-003',
      prompt: String.raw`Soient $A(1, -2, 3)$ et $B(4, 0, -1)$. Donne les coordonnées de $\overrightarrow{AB}$ sous la forme x;y;z.`,
      answer: '3;2;-4', vars: [], check: 'tuple',
      topic: 'Coordonnées d\'un vecteur', sec: 'm11-s-vecteurs',
      steps: [
        String.raw`Notion : $\overrightarrow{AB}$ est le déplacement qui mène de $A$ à $B$ ; ses coordonnées sont « arrivée moins départ » : $(x_B - x_A,\ y_B - y_A,\ z_B - z_A)$.`,
        String.raw`Abscisse : $x_B - x_A = 4 - 1 = 3$.`,
        String.raw`Ordonnée : $y_B - y_A = 0 - (-2) = 0 + 2 = 2$ (soustraire un négatif revient à ajouter).`,
        String.raw`Cote : $z_B - z_A = -1 - 3 = -4$. Donc $\overrightarrow{AB} = (3, 2, -4)$.`,
        String.raw`Vérification : $A + \overrightarrow{AB} = (1 + 3,\ -2 + 2,\ 3 - 4) = (4, 0, -1) = B$ ✔.`
      ],
      rule: String.raw`$\overrightarrow{AB} = (x_B - x_A,\ y_B - y_A,\ z_B - z_A)$ : arrivée moins départ`,
      pitfall: String.raw`Faire « départ moins arrivée » donne $\overrightarrow{BA} = -\overrightarrow{AB}$.`,
      mistakes: [
        { expr: '-3;-2;4', msg: String.raw`Tu as calculé $\overrightarrow{BA} = A - B$ : c'est « arrivée moins départ », $B - A$.` },
        { expr: '3;-2;-4', msg: String.raw`Erreur de signe sur l'ordonnée : $0 - (-2) = +2$ (moins par moins donne plus).` },
        { expr: '5;-2;2', msg: String.raw`Tu as additionné les coordonnées de $A$ et $B$ : il faut les <b>soustraire</b>, $B - A$.` }
      ],
      hint: String.raw`$\overrightarrow{AB} = (x_B - x_A,\ y_B - y_A,\ z_B - z_A)$.`,
      explain: String.raw`$\overrightarrow{AB} = (4 - 1,\ 0 - (-2),\ -1 - 3) = (3, 2, -4)$.`,
      level: 1 },
    { id: 'm11-x-004',
      prompt: String.raw`Calcule le produit scalaire de $\vec u = (1, 2, 3)$ et $\vec v = (4, -5, 6)$.`,
      answer: '12', vars: [], check: 'value',
      topic: 'Produit scalaire', sec: 'm11-s-vecteurs',
      steps: [
        String.raw`Notion : le produit scalaire est un <b>nombre</b> ; en repère orthonormé, $\vec u\cdot\vec v = xx' + yy' + zz'$ (on multiplie les coordonnées de même rang puis on additionne).`,
        String.raw`Produits terme à terme : $1\times 4 = 4$, $2\times(-5) = -10$, $3\times 6 = 18$.`,
        String.raw`Somme : $4 - 10 + 18 = 12$.`,
        String.raw`Interprétation : le résultat est positif, donc l'angle entre $\vec u$ et $\vec v$ est aigu.`
      ],
      rule: String.raw`$\vec u\cdot\vec v = xx' + yy' + zz'$`,
      pitfall: String.raw`Perdre le signe d'une coordonnée négative dans un produit.`,
      mistakes: [
        { expr: '32', msg: String.raw`Attention au signe : $2\times(-5) = -10$, pas $+10$. On obtient $4 - 10 + 18 = 12$.` },
        { expr: '-4', msg: String.raw`Attention aux signes : seul le produit $2\times(-5)$ est négatif ; $3\times 6 = +18$.` }
      ],
      hint: String.raw`$\vec u\cdot\vec v = xx' + yy' + zz'$.`,
      explain: String.raw`$\vec u\cdot\vec v = 4 - 10 + 18 = 12$.`,
      level: 1 },
    { id: 'm11-x-005',
      prompt: String.raw`Pour tout réel $x$, on pose $\vec u = (x, 1, 2)$ et $\vec v = (3, x, -1)$. Exprime $\vec u\cdot\vec v$ en fonction de $x$.`,
      answer: '4*x-2', vars: ['x'], check: 'expr',
      topic: 'Produit scalaire', sec: 'm11-s-vecteurs',
      steps: [
        String.raw`Notion : on applique $\vec u\cdot\vec v = xx' + yy' + zz'$, même si certaines coordonnées dépendent d'un paramètre.`,
        String.raw`1re coordonnée : $x\times 3 = 3x$.`,
        String.raw`2e coordonnée : $1\times x = x$ ; 3e coordonnée : $2\times(-1) = -2$.`,
        String.raw`Somme : $3x + x - 2 = 4x - 2$.`,
        String.raw`Vérification avec $x = 0$ : $\vec u = (0, 1, 2)$, $\vec v = (3, 0, -1)$, produit $0 + 0 - 2 = -2$, et $4\times 0 - 2 = -2$ ✔.`
      ],
      rule: String.raw`$\vec u\cdot\vec v = xx' + yy' + zz'$`,
      pitfall: String.raw`Confondre la coordonnée $1$ de $\vec u$ avec $x$ et écrire $x\cdot x$.`,
      mistakes: [
        { expr: '4*x+2', msg: String.raw`Le dernier produit vaut $2\times(-1) = -2$, pas $+2$.` },
        { expr: '3*x+x^2-2', msg: String.raw`Le 2e produit est $1\times x = x$ (la 2e coordonnée de $\vec u$ vaut 1), pas $x\cdot x$.` }
      ],
      hint: String.raw`Multiplie coordonnée par coordonnée, puis additionne.`,
      explain: String.raw`$\vec u\cdot\vec v = 3x + x - 2 = 4x - 2$.`,
      level: 1 },
    { id: 'm11-x-006',
      prompt: String.raw`Pour quelle valeur du réel $m$ les vecteurs $\vec u = (2, m, 1)$ et $\vec v = (3, -1, 4)$ sont-ils orthogonaux ?`,
      answer: '10', vars: [], check: 'value',
      topic: 'Orthogonalité', sec: 'm11-s-vecteurs',
      steps: [
        String.raw`Notion : deux vecteurs sont orthogonaux (angle droit) si et seulement si leur produit scalaire est nul.`,
        String.raw`$\vec u\cdot\vec v = 2\times 3 + m\times(-1) + 1\times 4 = 6 - m + 4 = 10 - m$.`,
        String.raw`On résout $10 - m = 0$ : on ajoute $m$ aux deux membres, d'où $m = 10$.`,
        String.raw`Vérification : avec $\vec u = (2, 10, 1)$, $\vec u\cdot\vec v = 6 - 10 + 4 = 0$ ✔.`
      ],
      rule: String.raw`$\vec u\perp\vec v \iff \vec u\cdot\vec v = 0$`,
      pitfall: String.raw`Oublier un des trois produits, ou le signe de la coordonnée $-1$.`,
      mistakes: [
        { expr: '-10', msg: String.raw`Erreur de signe : $\vec u\cdot\vec v = 6 - m + 4 = 10 - m$, nul pour $m = +10$.` },
        { expr: '6', msg: String.raw`Tu as oublié le produit $1\times 4$ : il y a trois produits à additionner, $6 - m + 4$.` },
        { expr: '2', msg: String.raw`Erreur de signe : $1\times 4 = +4$, donc $\vec u\cdot\vec v = 6 - m + 4$, et non $6 - m - 4$.` }
      ],
      hint: String.raw`Orthogonaux $\iff \vec u\cdot\vec v = 0$.`,
      explain: String.raw`$\vec u\cdot\vec v = 10 - m$, nul pour $m = 10$.`,
      level: 1 },
    { id: 'm11-x-007',
      prompt: String.raw`Donne, en radians, l'angle entre $\vec u = (1, 0, 1)$ et $\vec v = (0, 1, 1)$.`,
      answer: 'pi/3', vars: [], check: 'value',
      topic: 'Angle entre deux vecteurs', sec: 'm11-s-vecteurs',
      steps: [
        String.raw`Notion : l'angle $\theta \in [0, \pi]$ entre deux vecteurs s'obtient par $\cos\theta = \dfrac{\vec u\cdot\vec v}{\|\vec u\|\,\|\vec v\|}$.`,
        String.raw`Produit scalaire : $1\times 0 + 0\times 1 + 1\times 1 = 1$.`,
        String.raw`Normes : $\|\vec u\| = \sqrt{1 + 0 + 1} = \sqrt2$ et $\|\vec v\| = \sqrt{0 + 1 + 1} = \sqrt2$, donc $\|\vec u\|\,\|\vec v\| = \sqrt2\times\sqrt2 = 2$.`,
        String.raw`$\cos\theta = \frac12$ ; l'unique angle de $[0, \pi]$ de cosinus $\frac12$ est $\theta = \frac{\pi}{3}$.`
      ],
      rule: String.raw`$\cos\theta = \dfrac{\vec u\cdot\vec v}{\|\vec u\|\,\|\vec v\|}$, $\theta \in [0, \pi]$`,
      pitfall: String.raw`Donner le cosinus au lieu de l'angle, ou confondre $\cos\frac{\pi}{3}$ et $\sin\frac{\pi}{3}$.`,
      mistakes: [
        { expr: '1/2', msg: String.raw`$\frac12$ est le <b>cosinus</b> de l'angle ; on demande l'angle lui-même, $\theta = \arccos\frac12$.` },
        { expr: 'pi/6', msg: String.raw`$\frac{\pi}{6}$ a pour <b>sinus</b> $\frac12$ ; ici c'est le cosinus qui vaut $\frac12$, donc $\theta = \frac{\pi}{3}$.` },
        { expr: 'pi/4', msg: String.raw`Tu as divisé par une seule norme ($\cos\theta = \frac{1}{\sqrt2}$) : il faut diviser par le produit $\|\vec u\|\,\|\vec v\| = 2$.` }
      ],
      hint: String.raw`$\cos\theta = \dfrac{\vec u\cdot\vec v}{\|\vec u\|\,\|\vec v\|}$.`,
      explain: String.raw`$\vec u\cdot\vec v = 1$ et $\|\vec u\|\,\|\vec v\| = 2$, donc $\cos\theta = \frac12$ et $\theta = \frac{\pi}{3}$.`,
      level: 2 },
    { id: 'm11-x-008',
      prompt: String.raw`Donne les coordonnées du projeté orthogonal de $\vec u = (2, 3)$ sur la droite dirigée par $\vec v = (1, 1)$, sous la forme x;y.`,
      answer: '5/2;5/2', vars: [], check: 'tuple',
      topic: 'Projection orthogonale', sec: 'm11-s-vecteurs',
      steps: [
        String.raw`Notion : le projeté orthogonal de $\vec u$ sur la droite dirigée par $\vec v$ est le vecteur $p = k\vec v$ de cette droite tel que $\vec u - p$ soit perpendiculaire à $\vec v$ ; on obtient $p = \dfrac{\vec u\cdot\vec v}{\|\vec v\|^2}\,\vec v$.`,
        String.raw`Produit scalaire : $\vec u\cdot\vec v = 2\times 1 + 3\times 1 = 5$.`,
        String.raw`Norme au carré : $\|\vec v\|^2 = 1^2 + 1^2 = 2$ (on garde le carré, pas de racine).`,
        String.raw`$p = \frac52\,(1, 1) = \left(\frac52, \frac52\right)$.`,
        String.raw`Vérification : $\vec u - p = \left(-\frac12, \frac12\right)$ et $\left(-\frac12, \frac12\right)\cdot(1, 1) = 0$ : la différence est bien orthogonale à $\vec v$ ✔.`
      ],
      rule: String.raw`$p_{\vec v}(\vec u) = \dfrac{\vec u\cdot\vec v}{\|\vec v\|^2}\,\vec v$`,
      pitfall: String.raw`Diviser par $\|\vec v\|$ au lieu de $\|\vec v\|^2$.`,
      mistakes: [
        { expr: '5;5', msg: String.raw`Tu as oublié de diviser par $\|\vec v\|^2 = 2$ : la formule n'est $(\vec u\cdot\vec v)\vec v$ que si $\vec v$ est unitaire.` },
        { expr: '5/sqrt(2);5/sqrt(2)', msg: String.raw`Tu as divisé par $\|\vec v\| = \sqrt2$ au lieu de $\|\vec v\|^2 = 2$.` }
      ],
      hint: String.raw`$p(\vec u) = \dfrac{\vec u\cdot\vec v}{\|\vec v\|^2}\,\vec v$.`,
      explain: String.raw`$\vec u\cdot\vec v = 5$ et $\|\vec v\|^2 = 2$, donc $p(\vec u) = \frac52(1, 1) = \left(\frac52, \frac52\right)$.`,
      level: 2 },
    { id: 'm11-x-009',
      prompt: String.raw`Calcule $\vec u\wedge\vec v$ pour $\vec u = (1, 2, 3)$ et $\vec v = (4, 5, 6)$. Réponse sous la forme x;y;z.`,
      answer: '-3;6;-3', vars: [], check: 'tuple',
      topic: 'Produit vectoriel', sec: 'm11-s-vectoriel',
      steps: [
        String.raw`Notion : $\vec u\wedge\vec v$ est un vecteur orthogonal à $\vec u$ et à $\vec v$. Formule : $\vec u\wedge\vec v = (yz' - zy',\ zx' - xz',\ xy' - yx')$ ; chaque composante « saute » sa propre coordonnée.`,
        String.raw`1re composante : $yz' - zy' = 2\times 6 - 3\times 5 = 12 - 15 = -3$.`,
        String.raw`2e composante : $zx' - xz' = 3\times 4 - 1\times 6 = 12 - 6 = 6$.`,
        String.raw`3e composante : $xy' - yx' = 1\times 5 - 2\times 4 = 5 - 8 = -3$.`,
        String.raw`Vérification : $(-3, 6, -3)\cdot(1, 2, 3) = -3 + 12 - 9 = 0$ et $(-3, 6, -3)\cdot(4, 5, 6) = -12 + 30 - 18 = 0$ ✔.`
      ],
      rule: String.raw`$\vec u\wedge\vec v = (yz' - zy',\ zx' - xz',\ xy' - yx')$`,
      pitfall: String.raw`La 2e composante est $zx' - xz'$ (et non $xz' - zx'$) : c'est là que se fait la plupart des erreurs de signe.`,
      mistakes: [
        { expr: '3;-6;3', msg: String.raw`Tu as calculé $\vec v\wedge\vec u = -\vec u\wedge\vec v$ : l'ordre des facteurs compte.` },
        { expr: '-3;-6;-3', msg: String.raw`Erreur sur la 2e composante : c'est $zx' - xz' = 12 - 6 = 6$ ; en calculant $xz' - zx'$ on obtient le signe opposé.` }
      ],
      hint: String.raw`$\vec u\wedge\vec v = (yz' - zy',\ zx' - xz',\ xy' - yx')$.`,
      explain: String.raw`$\vec u\wedge\vec v = (12 - 15,\ 12 - 6,\ 5 - 8) = (-3, 6, -3)$, orthogonal à $\vec u$ et $\vec v$.`,
      level: 2 },
    { id: 'm11-x-010',
      prompt: String.raw`Calcule $\vec u\wedge\vec v$ pour $\vec u = (1, 0, 2)$ et $\vec v = (0, 1, -1)$. Réponse sous la forme x;y;z.`,
      answer: '-2;1;1', vars: [], check: 'tuple',
      topic: 'Produit vectoriel', sec: 'm11-s-vectoriel',
      steps: [
        String.raw`Notion : $\vec u\wedge\vec v = (yz' - zy',\ zx' - xz',\ xy' - yx')$ est un vecteur orthogonal à $\vec u$ et à $\vec v$.`,
        String.raw`1re composante : $yz' - zy' = 0\times(-1) - 2\times 1 = 0 - 2 = -2$.`,
        String.raw`2e composante : $zx' - xz' = 2\times 0 - 1\times(-1) = 0 + 1 = 1$.`,
        String.raw`3e composante : $xy' - yx' = 1\times 1 - 0\times 0 = 1$.`,
        String.raw`Vérification : $(-2, 1, 1)\cdot(1, 0, 2) = -2 + 0 + 2 = 0$ et $(-2, 1, 1)\cdot(0, 1, -1) = 0 + 1 - 1 = 0$ ✔.`
      ],
      rule: String.raw`$\vec u\wedge\vec v = (yz' - zy',\ zx' - xz',\ xy' - yx')$, orthogonal à $\vec u$ et $\vec v$`,
      pitfall: String.raw`Toujours vérifier l'orthogonalité du résultat avec $\vec u$ et $\vec v$ : c'est un contrôle gratuit.`,
      mistakes: [
        { expr: '-2;-1;1', msg: String.raw`Erreur classique sur la 2e composante : c'est $zx' - xz' = 0 - (-1) = 1$. Ton vecteur n'est pas orthogonal à $\vec v$.` },
        { expr: '2;-1;-1', msg: String.raw`Tu as calculé $\vec v\wedge\vec u$ : le produit vectoriel est antisymétrique, l'ordre compte.` }
      ],
      hint: String.raw`Vérifie ton résultat : il doit être orthogonal à $\vec u$ et à $\vec v$.`,
      explain: String.raw`$\vec u\wedge\vec v = (0 - 2,\ 0 + 1,\ 1 - 0) = (-2, 1, 1)$, orthogonal aux deux vecteurs.`,
      level: 2 },
    { id: 'm11-x-011',
      prompt: String.raw`Calcule l'aire du triangle $ABC$ avec $A(0, 0, 0)$, $B(1, 2, 0)$, $C(3, 1, 0)$.`,
      answer: '5/2', vars: [], check: 'value',
      topic: "Aire d'un triangle", sec: 'm11-s-vectoriel',
      steps: [
        String.raw`Notion : $\|\overrightarrow{AB}\wedge\overrightarrow{AC}\|$ est l'aire du parallélogramme construit sur $\overrightarrow{AB}$ et $\overrightarrow{AC}$ ; le triangle en est la moitié : $\mathcal A = \frac12\|\overrightarrow{AB}\wedge\overrightarrow{AC}\|$.`,
        String.raw`Vecteurs : $\overrightarrow{AB} = (1, 2, 0)$ et $\overrightarrow{AC} = (3, 1, 0)$ (car $A$ est l'origine).`,
        String.raw`Produit vectoriel : $(2\times 0 - 0\times 1,\ 0\times 3 - 1\times 0,\ 1\times 1 - 2\times 3) = (0, 0, -5)$.`,
        String.raw`Norme : $\|(0, 0, -5)\| = \sqrt{25} = 5$ ; aire du triangle : $\frac12\times 5 = \frac52$.`,
        String.raw`Contrôle (triangle dans le plan $z = 0$) : $\frac12|x_By_C - y_Bx_C| = \frac12|1 - 6| = \frac52$ ✔.`
      ],
      rule: String.raw`$\mathcal A_{ABC} = \frac12\|\overrightarrow{AB}\wedge\overrightarrow{AC}\|$`,
      pitfall: String.raw`Oublier le $\frac12$ (on donne l'aire du parallélogramme) ou garder un signe négatif.`,
      mistakes: [
        { expr: '5', msg: String.raw`$\|\overrightarrow{AB}\wedge\overrightarrow{AC}\| = 5$ est l'aire du <b>parallélogramme</b> : le triangle en vaut la moitié.` },
        { expr: '-5/2', msg: String.raw`Une aire est positive : on prend la <b>norme</b> du produit vectoriel, $\|(0, 0, -5)\| = 5$, pas sa composante signée.` }
      ],
      hint: String.raw`$\mathcal{A} = \frac12\|\overrightarrow{AB}\wedge\overrightarrow{AC}\|$.`,
      explain: String.raw`$\overrightarrow{AB}\wedge\overrightarrow{AC} = (0, 0, -5)$, de norme 5 : aire $= \frac52$.`,
      level: 2 },
    { id: 'm11-x-012',
      prompt: String.raw`Calcule le produit mixte $[\vec u, \vec v, \vec w] = \det(\vec u, \vec v, \vec w)$ pour $\vec u = (1, 2, 0)$, $\vec v = (0, 1, 3)$, $\vec w = (2, 0, 1)$.`,
      answer: '13', vars: [], check: 'value',
      topic: 'Produit mixte', sec: 'm11-s-vectoriel',
      steps: [
        String.raw`Notion : le produit mixte est le volume signé du parallélépipède construit sur les trois vecteurs : $[\vec u, \vec v, \vec w] = (\vec u\wedge\vec v)\cdot\vec w = \det(\vec u, \vec v, \vec w)$.`,
        String.raw`$\vec u\wedge\vec v = (2\times 3 - 0\times 1,\ 0\times 0 - 1\times 3,\ 1\times 1 - 2\times 0) = (6, -3, 1)$.`,
        String.raw`Produit scalaire avec $\vec w = (2, 0, 1)$ : $6\times 2 + (-3)\times 0 + 1\times 1 = 12 + 0 + 1 = 13$.`,
        String.raw`Contrôle par Sarrus (vecteurs en lignes) : $(1\cdot 1\cdot 1 + 2\cdot 3\cdot 2 + 0) - (0 + 0 + 0) = 13$ ✔. Le parallélépipède a un volume de 13.`
      ],
      rule: String.raw`$[\vec u, \vec v, \vec w] = (\vec u\wedge\vec v)\cdot\vec w = \det(\vec u, \vec v, \vec w)$`,
      pitfall: String.raw`En développant le déterminant, oublier le signe $-$ du 2e cofacteur.`,
      mistakes: [
        { expr: '-11', msg: String.raw`Attention au signe du 2e cofacteur : $-2\times(0\times 1 - 3\times 2) = +12$, pas $-12$.` },
        { expr: '-13', msg: String.raw`Le signe dépend de l'ordre : $-13$ correspond à $\det(\vec v, \vec u, \vec w)$ (deux vecteurs échangés). Garde l'ordre $(\vec u, \vec v, \vec w)$.` }
      ],
      hint: String.raw`Calcule $\vec u\wedge\vec v$ puis son produit scalaire avec $\vec w$ (ou développe le déterminant).`,
      explain: String.raw`$\vec u\wedge\vec v = (6, -3, 1)$, puis $(6, -3, 1)\cdot(2, 0, 1) = 13$.`,
      level: 3 },
    { id: 'm11-x-013',
      prompt: String.raw`Le plan $\mathcal P$ passe par $A(1, 0, 2)$ et a pour vecteur normal $\vec n = (2, -1, 3)$. Son équation s'écrit $ax + by + cz + d = 0$ avec $(a, b, c) = \vec n$ : donne a;b;c;d.`,
      answer: '2;-1;3;-8', vars: [], check: 'tuple',
      topic: "Équation d'un plan", sec: 'm11-s-droites-plans',
      steps: [
        String.raw`Notion : un plan de vecteur normal $\vec n = (a, b, c)$ a une équation $ax + by + cz + d = 0$ ; on trouve $d$ en écrivant que le point donné est sur le plan.`,
        String.raw`Avec $\vec n = (2, -1, 3)$ : $2x - y + 3z + d = 0$.`,
        String.raw`$A(1, 0, 2)$ appartient au plan : $2\times 1 - 0 + 3\times 2 + d = 0$, soit $8 + d = 0$, donc $d = -8$.`,
        String.raw`Équation : $2x - y + 3z - 8 = 0$, d'où la réponse $2;-1;3;-8$. Vérification avec $A$ : $2 - 0 + 6 - 8 = 0$ ✔.`
      ],
      rule: String.raw`Plan de normale $(a, b, c)$ passant par $A$ : $a(x - x_A) + b(y - y_A) + c(z - z_A) = 0$`,
      pitfall: String.raw`Se tromper de signe en isolant $d$ : $8 + d = 0$ donne $d = -8$.`,
      mistakes: [
        { expr: '2;-1;3;8', msg: String.raw`Erreur de signe sur $d$ : $8 + d = 0$ donne $d = -8$.` },
        { expr: '2;-1;3;0', msg: String.raw`Le plan ne passe pas par l'origine : $d$ se calcule en imposant que $A$ vérifie l'équation, $2 + 6 + d = 0$.` }
      ],
      hint: String.raw`Écris $2x - y + 3z + d = 0$ et impose que $A$ vérifie l'équation.`,
      explain: String.raw`$2\times 1 - 0 + 3\times 2 + d = 0 \Rightarrow d = -8$ : $2x - y + 3z - 8 = 0$.`,
      level: 2 },
    { id: 'm11-x-014',
      prompt: String.raw`Donne l'équation $ax + by + cz + d = 0$ du plan passant par $A(1, 0, 0)$, $B(0, 1, 0)$, $C(0, 0, 1)$, normalisée avec $a = 1$, sous la forme a;b;c;d.`,
      answer: '1;1;1;-1', vars: [], check: 'tuple',
      topic: 'Plan passant par trois points', sec: 'm11-s-droites-plans',
      steps: [
        String.raw`Notion : $\overrightarrow{AB}$ et $\overrightarrow{AC}$ dirigent le plan ; leur produit vectoriel $\vec n = \overrightarrow{AB}\wedge\overrightarrow{AC}$ est orthogonal aux deux, donc normal au plan. On trouve ensuite $d$ avec un point.`,
        String.raw`$\overrightarrow{AB} = (0 - 1, 1 - 0, 0 - 0) = (-1, 1, 0)$ et $\overrightarrow{AC} = (-1, 0, 1)$.`,
        String.raw`$\vec n = (1\times 1 - 0\times 0,\ 0\times(-1) - (-1)\times 1,\ (-1)\times 0 - 1\times(-1)) = (1, 1, 1)$ : on a bien $a = 1$.`,
        String.raw`Équation $x + y + z + d = 0$ ; $A(1, 0, 0)$ donne $1 + d = 0$, donc $d = -1$.`,
        String.raw`Vérification : $B$ et $C$ donnent aussi $1 - 1 = 0$ ✔. Plan : $x + y + z - 1 = 0$.`
      ],
      rule: String.raw`$\vec n = \overrightarrow{AB}\wedge\overrightarrow{AC}$ est normal au plan $(ABC)$`,
      pitfall: String.raw`Oublier de vérifier que les trois points satisfont l'équation trouvée.`,
      mistakes: [
        { expr: '1;1;1;1', msg: String.raw`Erreur de signe sur $d$ : $A$ doit vérifier $1 + 0 + 0 + d = 0$, donc $d = -1$.` },
        { expr: '1;1;1;0', msg: String.raw`Le plan ne passe pas par l'origine ($0 + 0 + 0 \neq 1$) : calcule $d$ en écrivant que $A$ est sur le plan.` }
      ],
      hint: String.raw`Vecteur normal : $\vec n = \overrightarrow{AB}\wedge\overrightarrow{AC}$.`,
      explain: String.raw`$\vec n = \overrightarrow{AB}\wedge\overrightarrow{AC} = (1, 1, 1)$ et $A$ donne $d = -1$ : $x + y + z - 1 = 0$.`,
      level: 3 },
    { id: 'm11-x-015',
      prompt: String.raw`Calcule la distance du point $M(1, 2, 3)$ au plan d'équation $2x - y + 2z - 1 = 0$.`,
      answer: '5/3', vars: [], check: 'value',
      topic: 'Distance point-plan', sec: 'm11-s-droites-plans',
      steps: [
        String.raw`Notion : la distance d'un point au plan $ax + by + cz + d = 0$ est la longueur mesurée perpendiculairement au plan : $d = \dfrac{|ax_0 + by_0 + cz_0 + d|}{\sqrt{a^2 + b^2 + c^2}}$.`,
        String.raw`Numérateur : on remplace $(x, y, z)$ par $(1, 2, 3)$ : $2\times 1 - 2 + 2\times 3 - 1 = 2 - 2 + 6 - 1 = 5$, donc $|5| = 5$.`,
        String.raw`Dénominateur : $\|\vec n\| = \sqrt{2^2 + (-1)^2 + 2^2} = \sqrt{4 + 1 + 4} = \sqrt9 = 3$.`,
        String.raw`Distance : $\frac53 \approx 1{,}67$.`
      ],
      rule: String.raw`$d(M_0, \mathcal P) = \dfrac{|ax_0 + by_0 + cz_0 + d|}{\sqrt{a^2 + b^2 + c^2}}$`,
      pitfall: String.raw`Oublier le terme constant $d$ au numérateur, ou la racine au dénominateur.`,
      mistakes: [
        { expr: '5', msg: String.raw`Tu as oublié de diviser par $\|\vec n\| = \sqrt{4 + 1 + 4} = 3$.` },
        { expr: '5/9', msg: String.raw`On divise par $\sqrt{a^2 + b^2 + c^2} = 3$, pas par $a^2 + b^2 + c^2 = 9$.` },
        { expr: '2', msg: String.raw`Tu as oublié le terme constant $-1$ au numérateur : c'est $|2 - 2 + 6 - 1| = 5$, pas $6$.` }
      ],
      hint: String.raw`$d = \dfrac{|ax_0 + by_0 + cz_0 + d|}{\sqrt{a^2 + b^2 + c^2}}$.`,
      explain: String.raw`Numérateur $|2 - 2 + 6 - 1| = 5$, dénominateur $\sqrt9 = 3$ : distance $\frac53$.`,
      level: 2 },
    { id: 'm11-x-016',
      prompt: String.raw`Avec $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ et $B = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$, calcule $AB$. Donne a;b;c;d ligne par ligne.`,
      answer: '2;1;4;3', vars: [], check: 'tuple',
      topic: 'Produit de matrices', sec: 'm11-s-matrices',
      steps: [
        String.raw`Notion : le coefficient $(i, j)$ de $AB$ s'obtient en « multipliant » la ligne $i$ de $A$ par la colonne $j$ de $B$ : $(AB)_{ij} = \sum_k a_{ik}b_{kj}$.`,
        String.raw`Ligne 1 de $A$, soit $(1, 2)$ : avec la colonne 1 de $B$, $(0, 1)$, on obtient $1\cdot 0 + 2\cdot 1 = 2$ ; avec la colonne 2, $(1, 0)$, on obtient $1\cdot 1 + 2\cdot 0 = 1$.`,
        String.raw`Ligne 2 de $A$, soit $(3, 4)$ : $3\cdot 0 + 4\cdot 1 = 4$ et $3\cdot 1 + 4\cdot 0 = 3$.`,
        String.raw`$AB = \begin{pmatrix} 2 & 1 \\ 4 & 3 \end{pmatrix}$ : multiplier à droite par $B$ a échangé les deux colonnes de $A$.`
      ],
      rule: String.raw`$(AB)_{ij} = \sum_k a_{ik}b_{kj}$ (ligne de $A$ × colonne de $B$)`,
      pitfall: String.raw`Multiplier coefficient par coefficient, ou calculer $BA$ au lieu de $AB$.`,
      mistakes: [
        { expr: '3;4;1;2', msg: String.raw`C'est $BA$ : le produit matriciel n'est pas commutatif, l'ordre $AB$ compte.` },
        { expr: '0;2;3;0', msg: String.raw`Le produit matriciel ne se fait pas coefficient par coefficient : c'est ligne de $A$ fois colonne de $B$.` }
      ],
      hint: String.raw`$(AB)_{ij}$ = ligne $i$ de $A$ « fois » colonne $j$ de $B$.`,
      explain: String.raw`$AB = \begin{pmatrix} 2 & 1 \\ 4 & 3 \end{pmatrix}$ : multiplier à droite par $B$ échange les colonnes de $A$.`,
      level: 1 },
    { id: 'm11-x-017',
      prompt: String.raw`Avec les mêmes $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ et $B = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$, calcule $AB - BA$. Donne a;b;c;d ligne par ligne.`,
      answer: '-1;-3;3;1', vars: [], check: 'tuple',
      topic: 'Non-commutativité', sec: 'm11-s-matrices',
      steps: [
        String.raw`Notion : le produit de matrices n'est pas commutatif ; $AB - BA$ (le « commutateur ») mesure l'écart entre les deux ordres. Il faut calculer les deux produits.`,
        String.raw`$AB = \begin{pmatrix} 2 & 1 \\ 4 & 3 \end{pmatrix}$ (calcul précédent : colonnes de $A$ échangées).`,
        String.raw`$BA$ : la ligne 1 de $B$, $(0, 1)$, fois les colonnes de $A$ donne $(3, 4)$ ; la ligne 2, $(1, 0)$, donne $(1, 2)$. Donc $BA = \begin{pmatrix} 3 & 4 \\ 1 & 2 \end{pmatrix}$ (lignes de $A$ échangées).`,
        String.raw`Différence : $AB - BA = \begin{pmatrix} 2 - 3 & 1 - 4 \\ 4 - 1 & 3 - 2 \end{pmatrix} = \begin{pmatrix} -1 & -3 \\ 3 & 1 \end{pmatrix}$.`,
        String.raw`Contrôle : la trace d'un commutateur est toujours nulle, et ici $-1 + 1 = 0$ ✔.`
      ],
      rule: String.raw`$AB \neq BA$ en général ; $\operatorname{tr}(AB - BA) = 0$`,
      pitfall: String.raw`Supposer $AB = BA$ comme pour les nombres.`,
      mistakes: [
        { expr: '0;0;0;0', msg: String.raw`$AB \neq BA$ : les matrices ne commutent pas en général, calcule les deux produits.` },
        { expr: '1;3;-3;-1', msg: String.raw`Tu as calculé $BA - AB$ : c'est l'opposé de ce qui est demandé.` }
      ],
      hint: String.raw`$AB$ échange les colonnes de $A$, $BA$ échange ses lignes.`,
      explain: String.raw`$AB - BA = \begin{pmatrix} 2 & 1 \\ 4 & 3 \end{pmatrix} - \begin{pmatrix} 3 & 4 \\ 1 & 2 \end{pmatrix} = \begin{pmatrix} -1 & -3 \\ 3 & 1 \end{pmatrix} \neq 0$.`,
      level: 2 },
    { id: 'm11-x-018',
      prompt: String.raw`Soit $A = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$. Calcule $A^{10}$. Donne a;b;c;d ligne par ligne.`,
      answer: '1;10;0;1', vars: [], check: 'tuple',
      topic: "Puissances d'une matrice", sec: 'm11-s-matrices',
      steps: [
        String.raw`Notion : $A^{10} = A\times A\times\cdots\times A$ (10 facteurs), et non la matrice des puissances des coefficients. Astuce : écrire $A = I + N$ avec $N = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$.`,
        String.raw`$N^2 = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}$ : $N$ est nilpotente, donc $N^k = 0$ pour tout $k \geq 2$.`,
        String.raw`$I$ et $N$ commutent ($IN = NI = N$), donc la formule du binôme s'applique : $A^n = \sum_k \binom{n}{k}N^k = I + nN$ (tous les autres termes sont nuls).`,
        String.raw`Pour $n = 10$ : $A^{10} = I + 10N = \begin{pmatrix} 1 & 10 \\ 0 & 1 \end{pmatrix}$.`,
        String.raw`Vérification sur les premières puissances : $A^2 = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}$, $A^3 = \begin{pmatrix} 1 & 3 \\ 0 & 1 \end{pmatrix}$ : le coefficient en haut à droite augmente de 1 à chaque fois ✔.`
      ],
      rule: String.raw`Si $N^2 = 0$ et $IN = NI$ : $(I + N)^n = I + nN$`,
      pitfall: String.raw`Élever chaque coefficient à la puissance 10 : $A^{10}$ n'est pas « coefficient par coefficient ».`,
      mistakes: [
        { expr: '1;1;0;1', msg: String.raw`$A^{10} \neq A$ : élever chaque coefficient à la puissance 10 ne marche pas ; calcule $A^2$ et cherche la régularité.` },
        { expr: '10;10;0;10', msg: String.raw`Tu as calculé $10A$ : $A^{10}$ est un produit de 10 matrices, pas une multiplication par 10.` }
      ],
      hint: String.raw`Calcule $A^2$, $A^3$… ou écris $A = I + N$ avec $N^2 = 0$.`,
      explain: String.raw`$A = I + N$ avec $N^2 = 0$, donc $A^{10} = I + 10N = \begin{pmatrix} 1 & 10 \\ 0 & 1 \end{pmatrix}$.`,
      level: 2 },
    { id: 'm11-x-019',
      prompt: String.raw`Calcule $\det\begin{pmatrix} 3 & 1 \\ 4 & 2 \end{pmatrix}$.`,
      answer: '2', vars: [], check: 'value',
      topic: 'Déterminant 2×2', sec: 'm11-s-determinant',
      steps: [
        String.raw`Notion : le déterminant d'une matrice $2\times 2$ est le nombre $ad - bc$ ; il est non nul si et seulement si la matrice est inversible.`,
        String.raw`Diagonale principale : $a\times d = 3\times 2 = 6$.`,
        String.raw`Autre diagonale : $b\times c = 1\times 4 = 4$.`,
        String.raw`$\det = 6 - 4 = 2$ ; non nul, donc la matrice est inversible.`
      ],
      rule: String.raw`$\begin{vmatrix} a & b \\ c & d \end{vmatrix} = ad - bc$`,
      pitfall: String.raw`Additionner les deux produits, ou commencer par la mauvaise diagonale.`,
      mistakes: [
        { expr: '10', msg: String.raw`Tu as calculé $ad + bc$ : le déterminant est une différence, $ad - bc = 6 - 4$.` },
        { expr: '-2', msg: String.raw`Tu as calculé $bc - ad$ : on commence par la diagonale principale, $ad - bc$.` }
      ],
      hint: String.raw`$\begin{vmatrix} a & b \\ c & d \end{vmatrix} = ad - bc$.`,
      explain: String.raw`$3\times 2 - 1\times 4 = 6 - 4 = 2$.`,
      level: 1 },
    { id: 'm11-x-020',
      prompt: String.raw`Calcule $\det\begin{pmatrix} 1 & 2 & 3 \\ 0 & 1 & 4 \\ 5 & 6 & 0 \end{pmatrix}$.`,
      answer: '1', vars: [], check: 'value',
      topic: 'Déterminant 3×3', sec: 'm11-s-determinant',
      steps: [
        String.raw`Notion : on calcule un déterminant $3\times 3$ en le développant selon une ligne : chaque coefficient est multiplié par le déterminant $2\times 2$ obtenu en rayant sa ligne et sa colonne, avec l'alternance des signes $+, -, +$.`,
        String.raw`Terme 1 : $+1\times\begin{vmatrix} 1 & 4 \\ 6 & 0 \end{vmatrix} = 1\times(1\times 0 - 4\times 6) = -24$.`,
        String.raw`Terme 2 : $-2\times\begin{vmatrix} 0 & 4 \\ 5 & 0 \end{vmatrix} = -2\times(0 - 20) = +40$.`,
        String.raw`Terme 3 : $+3\times\begin{vmatrix} 0 & 1 \\ 5 & 6 \end{vmatrix} = 3\times(0 - 5) = -15$.`,
        String.raw`Somme : $-24 + 40 - 15 = 1$. Contrôle par Sarrus : $(0 + 40 + 0) - (15 + 24 + 0) = 1$ ✔.`
      ],
      rule: String.raw`Développement selon la 1re ligne : $\det A = a_{11}\Delta_{11} - a_{12}\Delta_{12} + a_{13}\Delta_{13}$`,
      pitfall: String.raw`Oublier le signe $-$ du terme du milieu.`,
      mistakes: [
        { expr: '-79', msg: String.raw`Tu as oublié le signe $-$ du 2e terme : les signes alternent $+, -, +$, donc $-2\times(-20) = +40$.` },
        { expr: '31', msg: String.raw`Le 3e terme vaut $3\times(0\times 6 - 1\times 5) = -15$, pas $+15$ : le mineur $\begin{vmatrix} 0 & 1 \\ 5 & 6 \end{vmatrix}$ vaut $-5$.` }
      ],
      hint: String.raw`Développe selon la 1re ligne avec les signes $+, -, +$.`,
      explain: String.raw`Développement selon la 1re ligne : $-24 + 40 - 15 = 1$.`,
      level: 2 },
    { id: 'm11-x-021',
      prompt: String.raw`Calcule $\det\begin{pmatrix} 2 & -1 & 0 \\ 1 & 3 & 1 \\ 0 & 2 & 4 \end{pmatrix}$ (Sarrus ou développement).`,
      answer: '24', vars: [], check: 'value',
      topic: 'Déterminant 3×3', sec: 'm11-s-determinant',
      steps: [
        String.raw`Notion : développement selon une ligne avec les signes $+, -, +$ ; on choisit la 1re ligne car elle contient un zéro, ce qui supprime un terme.`,
        String.raw`Terme 1 : $+2\times\begin{vmatrix} 3 & 1 \\ 2 & 4 \end{vmatrix} = 2\times(12 - 2) = 20$.`,
        String.raw`Terme 2 : $-(-1)\times\begin{vmatrix} 1 & 1 \\ 0 & 4 \end{vmatrix} = +1\times(4 - 0) = 4$ (deux signes moins se compensent).`,
        String.raw`Terme 3 : $+0\times(\dots) = 0$. Total : $20 + 4 + 0 = 24$.`,
        String.raw`Contrôle par Sarrus : $(2\cdot 3\cdot 4 + (-1)\cdot 1\cdot 0 + 0) - (0 + 2\cdot 1\cdot 2 + (-1)\cdot 1\cdot 4) = 24 - (4 - 4) = 24$ ✔.`
      ],
      rule: String.raw`Développement : $\det A = \sum_j (-1)^{1+j}a_{1j}\Delta_{1j}$ ; Sarrus en $3\times 3$`,
      pitfall: String.raw`Le coefficient $a_{12} = -1$ est négatif ET affecté du signe $-$ : son terme est $+\Delta_{12}$.`,
      mistakes: [
        { expr: '16', msg: String.raw`Attention au signe : $-(-1)\times(1\times 4 - 1\times 0) = +4$, pas $-4$.` },
        { expr: '20', msg: String.raw`Tu as oublié le 2e terme : le coefficient $-1$ n'est pas nul, il apporte $-(-1)\times 4 = +4$.` }
      ],
      hint: String.raw`Développe selon la 1re ligne (un zéro en position $(1,3)$).`,
      explain: String.raw`$2\times 10 - (-1)\times 4 + 0 = 24$ (confirmé par Sarrus).`,
      level: 2 },
    { id: 'm11-x-022',
      prompt: String.raw`$A$ est une matrice carrée d'ordre 3 avec $\det A = 5$. Calcule $\det(2A)$.`,
      answer: '40', vars: [], check: 'value',
      topic: 'Déterminant de λA', sec: 'm11-s-determinant',
      steps: [
        String.raw`Notion : le déterminant est linéaire par rapport à <b>chaque ligne</b> ; or multiplier une matrice d'ordre $n$ par $\lambda$ multiplie ses $n$ lignes par $\lambda$.`,
        String.raw`Chaque ligne fait donc sortir un facteur $\lambda$ : $\det(\lambda A) = \lambda^n\det A$.`,
        String.raw`Ici $n = 3$ et $\lambda = 2$ : $\det(2A) = 2^3\times\det A = 8\times 5 = 40$.`,
        String.raw`Contrôle sur $A = I_3$ : $2I_3$ est diagonale de coefficients 2, donc $\det(2I_3) = 2\times 2\times 2 = 8 = 2^3\det I_3$ ✔.`
      ],
      rule: String.raw`$\det(\lambda A) = \lambda^n\det A$ pour $A$ d'ordre $n$`,
      pitfall: String.raw`Écrire $\det(2A) = 2\det A$ : le facteur sort une fois <b>par ligne</b>.`,
      mistakes: [
        { expr: '10', msg: String.raw`$\det(\lambda A) = \lambda^n\det A$ : chacune des 3 lignes est multipliée par 2, d'où $2^3 = 8$ et non $2$.` },
        { expr: '20', msg: String.raw`La matrice est d'ordre 3 : le facteur est $2^3 = 8$, pas $2^2 = 4$.` },
        { expr: '125', msg: String.raw`Tu as élevé le déterminant au cube : c'est le facteur $\lambda = 2$ qui est élevé à la puissance 3, pas $\det A$.` }
      ],
      hint: String.raw`$\det(\lambda A) = \lambda^n\det A$ pour $A \in \mathcal{M}_n$.`,
      explain: String.raw`$\det(2A) = 2^3\times 5 = 40$.`,
      level: 2 },
    { id: 'm11-x-023',
      prompt: String.raw`Pour quelle valeur du réel $m$ la matrice $\begin{pmatrix} 1 & 2 \\ 3 & m \end{pmatrix}$ n'est-elle <b>pas</b> inversible ?`,
      answer: '6', vars: [], check: 'value',
      topic: 'Inversibilité et déterminant', sec: 'm11-s-determinant',
      steps: [
        String.raw`Notion : une matrice carrée est non inversible si et seulement si son déterminant est nul.`,
        String.raw`$\det = 1\times m - 2\times 3 = m - 6$.`,
        String.raw`$m - 6 = 0 \iff m = 6$ (on ajoute 6 aux deux membres).`,
        String.raw`Vérification : pour $m = 6$, la 2e ligne $(3, 6)$ vaut $3\times(1, 2)$ : les lignes sont proportionnelles, la matrice est de rang 1 ✔.`
      ],
      rule: String.raw`$A$ non inversible $\iff \det A = 0$`,
      pitfall: String.raw`Se tromper de diagonale : c'est $1\times m$ moins $2\times 3$.`,
      mistakes: [
        { expr: '-6', msg: String.raw`Erreur de signe : $\det = m - 6$, qui s'annule pour $m = +6$.` },
        { expr: '3/2', msg: String.raw`Le déterminant est $1\times m - 2\times 3$ ; tu as mal associé les coefficients des diagonales.` }
      ],
      hint: String.raw`Non inversible $\iff \det = 0$.`,
      explain: String.raw`$\det = m - 6$, nul pour $m = 6$ : la 2e ligne est alors le triple de la 1re.`,
      level: 1 },
    { id: 'm11-x-024',
      prompt: String.raw`Calcule l'inverse de $A = \begin{pmatrix} 2 & 1 \\ 5 & 3 \end{pmatrix}$. Donne a;b;c;d ligne par ligne.`,
      answer: '3;-1;-5;2', vars: [], check: 'tuple',
      topic: "Inverse d'une matrice 2×2", sec: 'm11-s-determinant',
      steps: [
        String.raw`Notion : l'inverse $A^{-1}$ vérifie $AA^{-1} = I_2$. En $2\times 2$ : $\begin{pmatrix} a & b \\ c & d \end{pmatrix}^{-1} = \frac{1}{ad - bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$ si $ad - bc \neq 0$.`,
        String.raw`Déterminant : $\det A = 2\times 3 - 1\times 5 = 6 - 5 = 1 \neq 0$, donc $A$ est inversible.`,
        String.raw`On échange $a = 2$ et $d = 3$, on change le signe de $b = 1$ et de $c = 5$ : $\begin{pmatrix} 3 & -1 \\ -5 & 2 \end{pmatrix}$, puis on divise par $\det A = 1$.`,
        String.raw`Vérification : $AA^{-1} = \begin{pmatrix} 6 - 5 & -2 + 2 \\ 15 - 15 & -5 + 6 \end{pmatrix} = I_2$ ✔.`
      ],
      rule: String.raw`$\begin{pmatrix} a & b \\ c & d \end{pmatrix}^{-1} = \dfrac{1}{ad - bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$`,
      pitfall: String.raw`Inverser chaque coefficient : l'inverse d'une matrice n'est pas la matrice des inverses.`,
      mistakes: [
        { expr: '3;1;5;2', msg: String.raw`Tu as oublié de changer le signe de $b$ et $c$ : le produit $AA^{-1}$ ne donne pas $I_2$.` },
        { expr: '2;-1;-5;3', msg: String.raw`Tu as oublié d'échanger $a$ et $d$.` },
        { expr: '1/2;1;1/5;1/3', msg: String.raw`L'inverse d'une matrice n'est pas la matrice des inverses des coefficients : utilise $\frac{1}{ad - bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$.` }
      ],
      hint: String.raw`$\begin{pmatrix} a & b \\ c & d \end{pmatrix}^{-1} = \frac{1}{ad - bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$.`,
      explain: String.raw`$\det A = 1$, donc $A^{-1} = \begin{pmatrix} 3 & -1 \\ -5 & 2 \end{pmatrix}$ (et $AA^{-1} = I_2$).`,
      level: 2 },
    { id: 'm11-x-025',
      prompt: String.raw`Calcule l'inverse de $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$. Donne a;b;c;d ligne par ligne (fractions exactes).`,
      answer: '-2;1;3/2;-1/2', vars: [], check: 'tuple',
      topic: "Inverse d'une matrice 2×2", sec: 'm11-s-determinant',
      steps: [
        String.raw`Notion : en $2\times 2$, $A^{-1} = \frac{1}{ad - bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$, à condition que $\det A = ad - bc \neq 0$.`,
        String.raw`Déterminant : $\det A = 1\times 4 - 2\times 3 = 4 - 6 = -2 \neq 0$ : $A$ est inversible (attention, il est négatif).`,
        String.raw`Matrice « échangée-signée » : $\begin{pmatrix} 4 & -2 \\ -3 & 1 \end{pmatrix}$.`,
        String.raw`On multiplie par $\frac{1}{-2} = -\frac12$ : $A^{-1} = \begin{pmatrix} -2 & 1 \\ \frac32 & -\frac12 \end{pmatrix}$.`,
        String.raw`Vérification : $AA^{-1} = \begin{pmatrix} -2 + 3 & 1 - 1 \\ -6 + 6 & 3 - 2 \end{pmatrix} = I_2$ ✔.`
      ],
      rule: String.raw`$\begin{pmatrix} a & b \\ c & d \end{pmatrix}^{-1} = \dfrac{1}{ad - bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$`,
      pitfall: String.raw`Oublier que le déterminant est négatif : tous les signes s'inversent à la fin.`,
      mistakes: [
        { expr: '2;-1;-3/2;1/2', msg: String.raw`Erreur de signe : $\det A = 4 - 6 = -2$ est négatif, il faut multiplier par $-\frac12$.` },
        { expr: '4;-2;-3;1', msg: String.raw`Tu as oublié de diviser par $\det A = -2$.` }
      ],
      hint: String.raw`$\det A = 1\times 4 - 2\times 3$.`,
      explain: String.raw`$\det A = -2$, donc $A^{-1} = -\frac12\begin{pmatrix} 4 & -2 \\ -3 & 1 \end{pmatrix} = \begin{pmatrix} -2 & 1 \\ \frac32 & -\frac12 \end{pmatrix}$.`,
      level: 2 },
    { id: 'm11-x-026',
      prompt: String.raw`On a vu que $A = \begin{pmatrix} 1 & 2 & 3 \\ 0 & 1 & 4 \\ 5 & 6 & 0 \end{pmatrix}$ a pour déterminant 1. Calcule $A^{-1}$ (comatrice ou Gauss-Jordan) et donne ses 9 coefficients ligne par ligne, séparés par des ;.`,
      answer: '-24;18;5;20;-15;-4;-5;4;1', vars: [], check: 'tuple',
      topic: "Inverse d'une matrice 3×3", sec: 'm11-s-determinant',
      steps: [
        String.raw`Notion : $A^{-1} = \frac{1}{\det A}\,\mathrm{Com}(A)^T$. Le cofacteur $C_{ij} = (-1)^{i+j}\Delta_{ij}$, où $\Delta_{ij}$ est le déterminant obtenu en rayant la ligne $i$ et la colonne $j$ ; les signes suivent le damier $+ - +$.`,
        String.raw`1re ligne de cofacteurs : $C_{11} = +(1\cdot 0 - 4\cdot 6) = -24$, $C_{12} = -(0\cdot 0 - 4\cdot 5) = 20$, $C_{13} = +(0\cdot 6 - 1\cdot 5) = -5$.`,
        String.raw`2e ligne : $C_{21} = -(2\cdot 0 - 3\cdot 6) = 18$, $C_{22} = +(1\cdot 0 - 3\cdot 5) = -15$, $C_{23} = -(1\cdot 6 - 2\cdot 5) = 4$. 3e ligne : $C_{31} = +(2\cdot 4 - 3\cdot 1) = 5$, $C_{32} = -(1\cdot 4 - 3\cdot 0) = -4$, $C_{33} = +(1\cdot 1 - 2\cdot 0) = 1$.`,
        String.raw`On transpose (les lignes de cofacteurs deviennent des colonnes) et on divise par $\det A = 1$ : $A^{-1} = \begin{pmatrix} -24 & 18 & 5 \\ 20 & -15 & -4 \\ -5 & 4 & 1 \end{pmatrix}$.`,
        String.raw`Vérification sur la 1re ligne de $AA^{-1}$ : $-24 + 40 - 15 = 1$, $18 - 30 + 12 = 0$, $5 - 8 + 3 = 0$ ✔.`
      ],
      rule: String.raw`$A^{-1} = \dfrac{1}{\det A}\,\mathrm{Com}(A)^T$, avec $C_{ij} = (-1)^{i+j}\Delta_{ij}$`,
      pitfall: String.raw`Oublier de transposer la comatrice, ou oublier le damier de signes $(-1)^{i+j}$.`,
      mistakes: [
        { expr: '-24;20;-5;18;-15;4;5;-4;1', msg: String.raw`Tu as donné la comatrice sans la transposer : $A^{-1} = \frac{1}{\det A}\mathrm{Com}(A)^T$.` },
        { expr: '-24;-18;5;-20;-15;4;-5;-4;1', msg: String.raw`Tu as oublié les signes $(-1)^{i+j}$ des cofacteurs (damier $+ - +$) : les positions $(1,2)$, $(2,1)$, $(2,3)$, $(3,2)$ changent de signe.` }
      ],
      hint: String.raw`Cofacteur $C_{ij} = (-1)^{i+j}\Delta_{ij}$ ; $A^{-1} = \frac{1}{\det A}\,\mathrm{Com}(A)^T$. Vérifie avec $AA^{-1} = I_3$.`,
      explain: String.raw`Comatrice transposée divisée par $\det A = 1$ : $A^{-1} = \begin{pmatrix} -24 & 18 & 5 \\ 20 & -15 & -4 \\ -5 & 4 & 1 \end{pmatrix}$.`,
      level: 3 },
    { id: 'm11-x-027',
      prompt: String.raw`Résous $\begin{cases} x + y = 5 \\ x - y = 1 \end{cases}$. Donne x;y.`,
      answer: '3;2', vars: [], check: 'tuple',
      topic: 'Système 2×2 par combinaison', sec: 'm11-s-systemes',
      steps: [
        String.raw`Notion : résoudre un système, c'est trouver les valeurs de $x$ et $y$ qui vérifient <b>toutes</b> les équations. Méthode par combinaison : on additionne ou soustrait les équations pour faire disparaître une inconnue.`,
        String.raw`$L_1 + L_2$ : $(x + y) + (x - y) = 5 + 1$, les $y$ s'annulent : $2x = 6$, donc $x = 3$.`,
        String.raw`On reporte dans $L_1$ : $3 + y = 5$, donc $y = 5 - 3 = 2$.`,
        String.raw`Vérification : $3 + 2 = 5$ ✔ et $3 - 2 = 1$ ✔.`
      ],
      rule: String.raw`Combinaison : $L_1 + L_2$ (ou $L_1 - L_2$) élimine une inconnue`,
      pitfall: String.raw`Toujours vérifier la solution dans les <b>deux</b> équations.`,
      mistakes: [
        { expr: '2;3', msg: String.raw`Les valeurs sont inversées : avec $x = 2$, $y = 3$, on a $x - y = -1 \neq 1$.` },
        { expr: '3;-2', msg: String.raw`Vérifie dans $L_1$ : $3 + (-2) = 1 \neq 5$ ; on a $y = 5 - x = 2$.` }
      ],
      hint: String.raw`Additionne les deux équations.`,
      explain: String.raw`$L_1 + L_2$ donne $2x = 6$, donc $x = 3$, puis $y = 2$.`,
      level: 1 },
    { id: 'm11-x-028',
      prompt: String.raw`Résous par les formules de Cramer $\begin{cases} 2x + 3y = 8 \\ x - y = -1 \end{cases}$. Donne x;y.`,
      answer: '1;2', vars: [], check: 'tuple',
      topic: 'Formules de Cramer', sec: 'm11-s-systemes',
      steps: [
        String.raw`Notion : si $\det A \neq 0$, le système a une solution unique donnée par $x = \frac{\det A_x}{\det A}$, $y = \frac{\det A_y}{\det A}$, où $A_x$ (resp. $A_y$) est $A$ dont on remplace la colonne de $x$ (resp. de $y$) par le second membre.`,
        String.raw`$\det A = \begin{vmatrix} 2 & 3 \\ 1 & -1 \end{vmatrix} = 2\times(-1) - 3\times 1 = -5 \neq 0$.`,
        String.raw`$\det A_x = \begin{vmatrix} 8 & 3 \\ -1 & -1 \end{vmatrix} = -8 + 3 = -5$, donc $x = \frac{-5}{-5} = 1$.`,
        String.raw`$\det A_y = \begin{vmatrix} 2 & 8 \\ 1 & -1 \end{vmatrix} = -2 - 8 = -10$, donc $y = \frac{-10}{-5} = 2$.`,
        String.raw`Vérification : $2\times 1 + 3\times 2 = 8$ ✔ et $1 - 2 = -1$ ✔.`
      ],
      rule: String.raw`Cramer : $x_i = \dfrac{\det A_i}{\det A}$ si $\det A \neq 0$`,
      pitfall: String.raw`Remplacer la mauvaise colonne, ou se tromper de signe sur les déterminants négatifs.`,
      mistakes: [
        { expr: '-1;-2', msg: String.raw`Erreur de signe : $\det A = -5$ et les numérateurs sont aussi négatifs, donc les quotients sont positifs.` },
        { expr: '2;1', msg: String.raw`Tu as inversé $x$ et $y$ : dans $A_x$ on remplace la <b>1re</b> colonne (celle de $x$) par le second membre.` }
      ],
      hint: String.raw`$x = \dfrac{\begin{vmatrix} 8 & 3 \\ -1 & -1 \end{vmatrix}}{\det A}$, $y = \dfrac{\begin{vmatrix} 2 & 8 \\ 1 & -1 \end{vmatrix}}{\det A}$.`,
      explain: String.raw`$\det A = -5$, $x = \frac{-5}{-5} = 1$, $y = \frac{-10}{-5} = 2$.`,
      level: 2 },
    { id: 'm11-x-029',
      prompt: String.raw`Résous par la méthode du pivot de Gauss $\begin{cases} x + y + z = 6 \\ x + 2y + 3z = 14 \\ 2x + y - z = 1 \end{cases}$. Donne x;y;z.`,
      answer: '1;2;3', vars: [], check: 'tuple',
      topic: 'Pivot de Gauss', sec: 'm11-s-systemes',
      steps: [
        String.raw`Notion : le pivot de Gauss rend le système triangulaire par des opérations sur les lignes qui ne changent pas les solutions, puis on « remonte » de la dernière inconnue à la première.`,
        String.raw`On élimine $x$ avec $L_1$ (pivot 1) : $L_2 \leftarrow L_2 - L_1$ donne $y + 2z = 8$ ; $L_3 \leftarrow L_3 - 2L_1$ donne $(2x + y - z) - (2x + 2y + 2z) = 1 - 12$, soit $-y - 3z = -11$.`,
        String.raw`On élimine $y$ : $L_3 \leftarrow L_3 + L_2$ donne $-z = -3$, donc $z = 3$.`,
        String.raw`Remontée : $y = 8 - 2z = 8 - 6 = 2$, puis $x = 6 - y - z = 6 - 2 - 3 = 1$.`,
        String.raw`Vérification : $1 + 2 + 3 = 6$ ✔, $1 + 4 + 9 = 14$ ✔, $2 + 2 - 3 = 1$ ✔.`
      ],
      rule: String.raw`Pivot de Gauss : $L_i \leftarrow L_i - \alpha L_1$ pour échelonner, puis remontée`,
      pitfall: String.raw`Oublier de multiplier <b>tout</b> le second membre lors de $L_3 - 2L_1$ ($1 - 2\times 6 = -11$).`,
      mistakes: [
        { expr: '3;2;1', msg: String.raw`Bonnes valeurs mais dans le désordre : l'ordre attendu est $x;y;z$, et $x = 1$.` },
        { expr: '1;2;-3', msg: String.raw`Erreur de signe en résolvant $-z = -3$ : en multipliant par $-1$, $z = 3$.` }
      ],
      hint: String.raw`$L_2 \leftarrow L_2 - L_1$, $L_3 \leftarrow L_3 - 2L_1$, puis $L_3 \leftarrow L_3 + L_2$.`,
      explain: String.raw`Échelonnement : $y + 2z = 8$ et $-z = -3$, d'où $z = 3$, $y = 2$, $x = 1$.`,
      level: 2 },
    { id: 'm11-x-030',
      prompt: String.raw`Quel est le rang de $\begin{pmatrix} 1 & 2 & 3 \\ 2 & 4 & 6 \\ 1 & 0 & 1 \end{pmatrix}$ ?`,
      answer: '2', vars: [], check: 'value',
      topic: "Rang d'une matrice", sec: 'm11-s-systemes',
      steps: [
        String.raw`Notion : le rang est le nombre de lignes vraiment indépendantes, c'est-à-dire le nombre de pivots non nuls après échelonnement.`,
        String.raw`$L_2 \leftarrow L_2 - 2L_1$ : $(2, 4, 6) - (2, 4, 6) = (0, 0, 0)$, ligne nulle.`,
        String.raw`$L_3 \leftarrow L_3 - L_1$ : $(1, 0, 1) - (1, 2, 3) = (0, -2, -2)$.`,
        String.raw`Après échange de $L_2$ et $L_3$ : $\begin{pmatrix} 1 & 2 & 3 \\ 0 & -2 & -2 \\ 0 & 0 & 0 \end{pmatrix}$, soit 2 pivots ($1$ et $-2$) : le rang vaut 2.`,
        String.raw`Contrôle : deux lignes proportionnelles donnent $\det = 0$, donc rang $\lt 3$ ; et $L_1$, $L_3$ ne sont pas proportionnelles, donc rang $\geq 2$ ✔.`
      ],
      rule: String.raw`Rang = nombre de pivots non nuls de la forme échelonnée`,
      pitfall: String.raw`Conclure « rang 1 » dès qu'on voit deux lignes proportionnelles, sans regarder la troisième.`,
      mistakes: [
        { expr: '3', msg: String.raw`La 2e ligne est le double de la 1re : la matrice n'est pas de rang maximal (son déterminant est nul).` },
        { expr: '1', msg: String.raw`Les lignes 1 et 3 ne sont pas proportionnelles : il reste deux pivots.` }
      ],
      hint: String.raw`Repère une ligne proportionnelle à une autre, puis échelonne.`,
      explain: String.raw`$L_2 - 2L_1 = 0$ et $L_3 - L_1 = (0, -2, -2)$ : il reste 2 pivots, rang 2.`,
      level: 2 },
    { id: 'm11-x-031',
      prompt: String.raw`Soit $f : \mathbb{R}^2 \to \mathbb{R}^2$, $f(x, y) = (2x - y,\ x + 3y)$. Donne sa matrice dans la base canonique sous la forme a;b;c;d ligne par ligne.`,
      answer: '2;-1;1;3', vars: [], check: 'tuple',
      topic: "Matrice d'une application linéaire", sec: 'm11-s-ev',
      steps: [
        String.raw`Notion : la matrice de $f$ dans une base range en <b>colonnes</b> les images des vecteurs de base : colonne $j$ = coordonnées de $f(\vec e_j)$.`,
        String.raw`$f(1, 0) = (2\times 1 - 0,\ 1 + 3\times 0) = (2, 1)$ : c'est la 1re colonne.`,
        String.raw`$f(0, 1) = (2\times 0 - 1,\ 0 + 3\times 1) = (-1, 3)$ : c'est la 2e colonne.`,
        String.raw`$A = \begin{pmatrix} 2 & -1 \\ 1 & 3 \end{pmatrix}$, soit ligne par ligne $2;-1;1;3$. Vérification : $A\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 2x - y \\ x + 3y \end{pmatrix}$ ✔.`
      ],
      rule: String.raw`Colonne $j$ de la matrice = coordonnées de $f(\vec e_j)$`,
      pitfall: String.raw`Ranger les images en lignes : on obtient la transposée.`,
      mistakes: [
        { expr: '2;1;-1;3', msg: String.raw`Tu as mis les images des vecteurs de base en lignes : elles vont en <b>colonnes</b> (tu as obtenu la transposée).` },
        { expr: '2;-1;3;1', msg: String.raw`2e ligne inversée : $x + 3y$ donne la ligne $(1, 3)$, coefficient de $x$ puis coefficient de $y$.` }
      ],
      hint: String.raw`Colonne 1 : $f(1, 0)$ ; colonne 2 : $f(0, 1)$.`,
      explain: String.raw`$f(1, 0) = (2, 1)$ et $f(0, 1) = (-1, 3)$ en colonnes : $A = \begin{pmatrix} 2 & -1 \\ 1 & 3 \end{pmatrix}$.`,
      level: 2 },
    { id: 'm11-x-032',
      prompt: String.raw`Soit $f : \mathbb{R}^3 \to \mathbb{R}^2$, $f(x, y, z) = (x + y + z,\ x - y)$. Quelle est la dimension de $\ker f$ ?`,
      answer: '1', vars: [], check: 'value',
      topic: 'Noyau et théorème du rang', sec: 'm11-s-ev',
      steps: [
        String.raw`Notion : le noyau $\ker f$ est l'ensemble des vecteurs envoyés sur $\vec 0$. Théorème du rang : $\dim\ker f = \dim(\text{départ}) - \operatorname{rg}f$, ici avec un départ $\mathbb{R}^3$.`,
        String.raw`Matrice de $f$ : $\begin{pmatrix} 1 & 1 & 1 \\ 1 & -1 & 0 \end{pmatrix}$ ; ses deux lignes ne sont pas proportionnelles, donc $\operatorname{rg}f = 2$.`,
        String.raw`$\dim\ker f = 3 - 2 = 1$.`,
        String.raw`Vérification directe : $x - y = 0$ donne $y = x$, puis $x + y + z = 0$ donne $z = -2x$. Donc $\ker f = \operatorname{Vect}((1, 1, -2))$, une droite ✔.`
      ],
      rule: String.raw`Théorème du rang : $\dim E = \dim\ker f + \operatorname{rg}f$`,
      pitfall: String.raw`Utiliser la dimension d'arrivée au lieu de celle de départ.`,
      mistakes: [
        { expr: '2', msg: String.raw`2 est le rang de $f$ ; le théorème du rang donne $\dim\ker f = 3 - 2 = 1$.` },
        { expr: '0', msg: String.raw`$f$ ne peut pas être injective : on passe de dimension 3 à dimension 2, il y a forcément un noyau non trivial.` },
        { expr: '3', msg: String.raw`3 est la dimension de départ ; le noyau n'est pas tout $\mathbb{R}^3$, car $f(1, 0, 0) = (1, 1) \neq 0$.` }
      ],
      hint: String.raw`Théorème du rang : $\dim\ker f = \dim\mathbb{R}^3 - \operatorname{rg}f$.`,
      explain: String.raw`$\operatorname{rg}f = 2$, donc $\dim\ker f = 3 - 2 = 1$ ; $\ker f = \operatorname{Vect}((1, 1, -2))$.`,
      level: 2 },
    { id: 'm11-x-033',
      prompt: String.raw`Calcule le polynôme caractéristique $\det(A - xI_2)$ de $A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$, en fonction de $x$.`,
      answer: 'x^2-4*x+3', vars: ['x'], check: 'expr',
      topic: 'Polynôme caractéristique', sec: 'm11-s-diag',
      steps: [
        String.raw`Notion : le polynôme caractéristique $\det(A - xI)$ s'annule exactement aux valeurs propres de $A$. On l'obtient en soustrayant $x$ sur la diagonale puis en calculant le déterminant.`,
        String.raw`$A - xI_2 = \begin{pmatrix} 2 - x & 1 \\ 1 & 2 - x \end{pmatrix}$.`,
        String.raw`$\det(A - xI_2) = (2 - x)(2 - x) - 1\times 1 = (4 - 4x + x^2) - 1 = x^2 - 4x + 3$.`,
        String.raw`Forme factorisée : $(x - 1)(x - 3)$. Contrôle : en $2\times 2$, $\chi_A(x) = x^2 - \operatorname{tr}(A)x + \det A$ avec $\operatorname{tr}A = 4$ et $\det A = 4 - 1 = 3$ ✔.`
      ],
      rule: String.raw`En $2\times 2$ : $\det(A - xI) = x^2 - \operatorname{tr}(A)\,x + \det A$`,
      pitfall: String.raw`Ajouter le produit $bc$ au lieu de le soustraire.`,
      mistakes: [
        { expr: 'x^2-4*x+5', msg: String.raw`Le déterminant est $(2 - x)^2 - 1\times 1$ : on <b>soustrait</b> le produit $bc$.` },
        { expr: 'x^2+4*x+3', msg: String.raw`Erreur de signe : le coefficient de $x$ est $-\operatorname{tr}A = -4$.` }
      ],
      hint: String.raw`$\det\begin{pmatrix} 2 - x & 1 \\ 1 & 2 - x \end{pmatrix}$, ou directement $x^2 - \operatorname{tr}(A)x + \det A$.`,
      explain: String.raw`$(2 - x)^2 - 1 = x^2 - 4x + 3 = (x - 1)(x - 3)$.`,
      level: 2 },
    { id: 'm11-x-034',
      prompt: String.raw`Donne les valeurs propres de $A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$ (séparées par ;).`,
      answer: '1;3', vars: [], check: 'set',
      topic: 'Valeurs propres', sec: 'm11-s-diag',
      steps: [
        String.raw`Notion : $\lambda$ est valeur propre de $A$ s'il existe $\vec u \neq \vec 0$ avec $A\vec u = \lambda\vec u$ ; ce sont les racines du polynôme caractéristique $\det(A - \lambda I)$.`,
        String.raw`$\chi_A(\lambda) = (2 - \lambda)^2 - 1 = \lambda^2 - 4\lambda + 3$.`,
        String.raw`Discriminant $\Delta = 16 - 12 = 4$, racines $\frac{4 \pm 2}{2}$, soit $1$ et $3$ (ou factorisation $(\lambda - 1)(\lambda - 3)$).`,
        String.raw`Contrôle : $1 + 3 = 4 = \operatorname{tr}A$ et $1\times 3 = 3 = \det A$ ✔. Vecteurs propres : $A(1, -1) = (1, -1)$ et $A(1, 1) = (3, 3)$.`
      ],
      rule: String.raw`Valeurs propres = racines de $\det(A - \lambda I) = 0$`,
      pitfall: String.raw`Lire les valeurs propres sur la diagonale d'une matrice qui n'est pas triangulaire.`,
      mistakes: [
        { expr: '2;2', msg: String.raw`Les valeurs propres ne se lisent sur la diagonale que pour une matrice <b>triangulaire</b> ; ici il faut résoudre $\lambda^2 - 4\lambda + 3 = 0$.` },
        { expr: '-1;-3', msg: String.raw`Erreur de signe : les racines de $(\lambda - 1)(\lambda - 3)$ sont $1$ et $3$ (leur somme est la trace, 4).` }
      ],
      hint: String.raw`Racines de $\lambda^2 - 4\lambda + 3$.`,
      explain: String.raw`$\chi_A(\lambda) = (\lambda - 1)(\lambda - 3)$ : valeurs propres 1 et 3.`,
      level: 1 },
    { id: 'm11-x-035',
      prompt: String.raw`Calcule le polynôme caractéristique $\det(A - \lambda I_2)$ de $A = \begin{pmatrix} 1 & 2 \\ 3 & 0 \end{pmatrix}$, en fonction de $\lambda$ (tape « lambda »).`,
      answer: 'lambda^2-lambda-6', vars: ['lambda'], check: 'expr',
      topic: 'Polynôme caractéristique', sec: 'm11-s-diag',
      steps: [
        String.raw`Notion : le polynôme caractéristique $\det(A - \lambda I)$ a pour racines les valeurs propres ; on soustrait $\lambda$ sur la diagonale puis on calcule le déterminant.`,
        String.raw`$A - \lambda I_2 = \begin{pmatrix} 1 - \lambda & 2 \\ 3 & -\lambda \end{pmatrix}$.`,
        String.raw`$\det = (1 - \lambda)(-\lambda) - 2\times 3 = -\lambda + \lambda^2 - 6 = \lambda^2 - \lambda - 6$.`,
        String.raw`Forme factorisée : $(\lambda - 3)(\lambda + 2)$, valeurs propres $3$ et $-2$. Contrôle : $\operatorname{tr}A = 1$ et $\det A = 0 - 6 = -6$ ✔.`
      ],
      rule: String.raw`En $2\times 2$ : $\chi_A(\lambda) = \lambda^2 - \operatorname{tr}(A)\,\lambda + \det A$`,
      pitfall: String.raw`Oublier que le coefficient $(2, 2)$ devient $0 - \lambda = -\lambda$.`,
      mistakes: [
        { expr: 'lambda^2-lambda+6', msg: String.raw`On soustrait $bc = 6$ : $(1 - \lambda)(-\lambda) - 6$.` },
        { expr: 'lambda^2+lambda-6', msg: String.raw`Erreur de signe sur le terme en $\lambda$ : il vaut $-\operatorname{tr}(A)\lambda = -\lambda$.` }
      ],
      hint: String.raw`$\det\begin{pmatrix} 1 - \lambda & 2 \\ 3 & -\lambda \end{pmatrix}$.`,
      explain: String.raw`$(1 - \lambda)(-\lambda) - 6 = \lambda^2 - \lambda - 6 = (\lambda - 3)(\lambda + 2)$.`,
      level: 2 },
    { id: 'm11-x-036',
      prompt: String.raw`Donne les valeurs propres de $\begin{pmatrix} 3 & 5 & 1 \\ 0 & -1 & 2 \\ 0 & 0 & 2 \end{pmatrix}$ (séparées par ;).`,
      answer: '3;-1;2', vars: [], check: 'set',
      topic: "Valeurs propres d'une triangulaire", sec: 'm11-s-diag',
      steps: [
        String.raw`Notion : les valeurs propres sont les racines de $\det(A - \lambda I)$. Pour une matrice <b>triangulaire</b> (zéros sous la diagonale), ce déterminant est le produit des termes diagonaux.`,
        String.raw`$A - \lambda I$ reste triangulaire : $\chi_A(\lambda) = (3 - \lambda)(-1 - \lambda)(2 - \lambda)$.`,
        String.raw`Produit nul : $\lambda = 3$, $\lambda = -1$ ou $\lambda = 2$.`,
        String.raw`Contrôle : $3 + (-1) + 2 = 4 = \operatorname{tr}A$ ✔ ; trois valeurs propres distinctes, donc la matrice est diagonalisable.`
      ],
      rule: String.raw`Matrice triangulaire : valeurs propres = coefficients diagonaux`,
      pitfall: String.raw`Lire une ligne au lieu de la diagonale.`,
      mistakes: [
        { expr: '3;5;1', msg: String.raw`Ce sont les coefficients de la 1re ligne ; pour une triangulaire, on lit la <b>diagonale</b>.` },
        { expr: '3;1;2', msg: String.raw`Erreur de signe : le coefficient diagonal est $-1$, et $-1 - \lambda = 0$ donne $\lambda = -1$.` }
      ],
      hint: String.raw`Matrice triangulaire : $\det(A - \lambda I)$ est le produit des termes diagonaux.`,
      explain: String.raw`$\chi_A(\lambda) = (3 - \lambda)(-1 - \lambda)(2 - \lambda)$ : valeurs propres $3$, $-1$, $2$.`,
      level: 1 },
    { id: 'm11-x-037',
      prompt: String.raw`Une matrice $2\times 2$ a pour trace $5$ et pour déterminant $6$. Donne ses valeurs propres (séparées par ;).`,
      answer: '2;3', vars: [], check: 'set',
      topic: 'Trace, déterminant, valeurs propres', sec: 'm11-s-diag',
      steps: [
        String.raw`Notion : en dimension 2, la somme des valeurs propres est la trace et leur produit est le déterminant ; elles sont racines de $\chi(\lambda) = \lambda^2 - \operatorname{tr}(A)\lambda + \det A$.`,
        String.raw`Avec $\operatorname{tr}A = 5$ et $\det A = 6$ : $\chi(\lambda) = \lambda^2 - 5\lambda + 6$.`,
        String.raw`Discriminant $\Delta = 25 - 24 = 1$, racines $\frac{5 \pm 1}{2}$ : $2$ et $3$.`,
        String.raw`Vérification : $2 + 3 = 5$ ✔ et $2\times 3 = 6$ ✔.`
      ],
      rule: String.raw`$\lambda_1 + \lambda_2 = \operatorname{tr}A$ et $\lambda_1\lambda_2 = \det A$`,
      pitfall: String.raw`Prendre la trace et le déterminant pour les valeurs propres elles-mêmes.`,
      mistakes: [
        { expr: '5;6', msg: String.raw`La trace et le déterminant sont la <b>somme</b> et le <b>produit</b> des valeurs propres, pas les valeurs propres.` },
        { expr: '-2;-3', msg: String.raw`Erreur de signe : $-2$ et $-3$ ont pour somme $-5$ ; ce sont les racines de $\lambda^2 + 5\lambda + 6$.` }
      ],
      hint: String.raw`$\chi(\lambda) = \lambda^2 - \operatorname{tr}(A)\lambda + \det A$.`,
      explain: String.raw`$\lambda^2 - 5\lambda + 6 = (\lambda - 2)(\lambda - 3)$ : valeurs propres 2 et 3.`,
      level: 2 },
    { id: 'm11-x-038',
      prompt: String.raw`Pour $A = \begin{pmatrix} 1 & 2 \\ 3 & 0 \end{pmatrix}$ et la valeur propre $-2$, donne le vecteur propre dont la première composante vaut 2, sous la forme x;y.`,
      answer: '2;-3', vars: [], check: 'tuple',
      topic: 'Vecteurs propres', sec: 'm11-s-diag',
      steps: [
        String.raw`Notion : un vecteur propre associé à $\lambda$ est un vecteur non nul $\vec u$ tel que $A\vec u = \lambda\vec u$, c'est-à-dire $(A - \lambda I)\vec u = \vec 0$. Ici $\lambda = -2$, donc on résout $(A + 2I)\vec u = \vec 0$.`,
        String.raw`$A + 2I = \begin{pmatrix} 1 + 2 & 2 \\ 3 & 0 + 2 \end{pmatrix} = \begin{pmatrix} 3 & 2 \\ 3 & 2 \end{pmatrix}$ : les deux lignes sont identiques (normal, son déterminant est nul).`,
        String.raw`Le système se réduit à $3x + 2y = 0$, soit $y = -\frac32 x$. Avec $x = 2$ : $y = -3$.`,
        String.raw`Vérification : $A\begin{pmatrix} 2 \\ -3 \end{pmatrix} = \begin{pmatrix} 2 - 6 \\ 6 + 0 \end{pmatrix} = \begin{pmatrix} -4 \\ 6 \end{pmatrix} = -2\begin{pmatrix} 2 \\ -3 \end{pmatrix}$ ✔.`
      ],
      rule: String.raw`$E_\lambda = \ker(A - \lambda I)$ : on résout $(A - \lambda I)\vec u = \vec 0$`,
      pitfall: String.raw`Écrire $A - 2I$ au lieu de $A - (-2)I = A + 2I$.`,
      mistakes: [
        { expr: '2;3', msg: String.raw`Vérifie : $A(2, 3) = (8, 6) \neq -2(2, 3)$. Résous $(A + 2I)\vec u = \vec 0$, soit $3x + 2y = 0$.` },
        { expr: '2;2', msg: String.raw`$(2, 2)$ est un vecteur propre de l'<b>autre</b> valeur propre, 3 : $A(2, 2) = (6, 6)$. Pour $\lambda = -2$, il faut utiliser $A + 2I$.` }
      ],
      hint: String.raw`Résous $(A + 2I)\vec u = \vec 0$ avec $A + 2I = \begin{pmatrix} 3 & 2 \\ 3 & 2 \end{pmatrix}$.`,
      explain: String.raw`$(A + 2I)\vec u = \vec 0 \iff 3x + 2y = 0$ ; avec $x = 2$, $y = -3$.`,
      level: 3 },
    { id: 'm11-x-039',
      prompt: String.raw`Calcule le polynôme caractéristique $\det(A - xI_3)$ de $A = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 2 & 1 \\ 0 & 1 & 2 \end{pmatrix}$, en fonction de $x$.`,
      answer: '(1-x)*(x^2-4*x+3)', vars: ['x'], check: 'expr',
      topic: 'Polynôme caractéristique 3×3', sec: 'm11-s-diag',
      steps: [
        String.raw`Notion : $\det(A - xI_3)$ s'obtient en soustrayant $x$ sur la diagonale : $A - xI_3 = \begin{pmatrix} 1 - x & 0 & 0 \\ 0 & 2 - x & 1 \\ 0 & 1 & 2 - x \end{pmatrix}$.`,
        String.raw`On développe selon la 1re ligne, qui n'a qu'un terme non nul : $\det = (1 - x)\begin{vmatrix} 2 - x & 1 \\ 1 & 2 - x \end{vmatrix}$.`,
        String.raw`Bloc $2\times 2$ : $(2 - x)^2 - 1\times 1 = x^2 - 4x + 3 = (x - 1)(x - 3)$.`,
        String.raw`Donc $\det(A - xI_3) = (1 - x)(x^2 - 4x + 3) = -(x - 1)^2(x - 3)$, soit développé $-x^3 + 5x^2 - 7x + 3$.`,
        String.raw`Contrôles : en $x = 0$ on retrouve $\det A = 1\times 3 = 3$ ✔ ; valeurs propres $1$ (double) et $3$, de somme $5 = \operatorname{tr}A$ ✔.`
      ],
      rule: String.raw`$\chi_A(x) = \det(A - xI_n)$ ; développer selon la ligne qui a le plus de zéros`,
      pitfall: String.raw`Confondre $\det(A - xI)$ et $\det(xI - A)$ : en dimension impaire, ils sont opposés.`,
      mistakes: [
        { expr: '(x-1)*(x^2-4*x+3)', msg: String.raw`C'est $\det(xI - A)$, qui vaut $-\det(A - xI)$ en dimension 3 (impaire). Attention à la convention demandée.` },
        { expr: '(1-x)*(x^2-4*x+5)', msg: String.raw`Dans le bloc $2\times 2$, on soustrait $1\times 1$ : $(2 - x)^2 - 1$.` }
      ],
      hint: String.raw`Développe selon la 1re ligne : $(1 - x)\times\begin{vmatrix} 2 - x & 1 \\ 1 & 2 - x \end{vmatrix}$.`,
      explain: String.raw`$\det(A - xI) = (1 - x)\left[(2 - x)^2 - 1\right] = (1 - x)(x^2 - 4x + 3)$ : valeurs propres 1 (double) et 3.`,
      level: 3 },
    { id: 'm11-x-040',
      prompt: String.raw`On a diagonalisé $A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$ : $A^n = \frac12\begin{pmatrix} 3^n + 1 & 3^n - 1 \\ 3^n - 1 & 3^n + 1 \end{pmatrix}$. Exprime en fonction de $n$ le coefficient en position $(1, 2)$ de $A^n$.`,
      answer: '(3^n-1)/2', vars: ['n'], check: 'expr', domain: [0, 5],
      topic: 'Puissances par diagonalisation', sec: 'm11-s-diag',
      steps: [
        String.raw`Notion : la position $(i, j)$ d'une matrice désigne la ligne $i$ et la colonne $j$. Ici on lit le coefficient ligne 1, colonne 2, sans oublier le facteur $\frac12$ placé devant la matrice.`,
        String.raw`Ligne 1 : $(3^n + 1,\ 3^n - 1)$ ; colonne 2 : $3^n - 1$. Avec le facteur : $\frac{3^n - 1}{2}$.`,
        String.raw`Origine de la formule : $A = PDP^{-1}$ avec $P = \begin{pmatrix} 1 & 1 \\ -1 & 1 \end{pmatrix}$ (vecteurs propres $(1, -1)$ et $(1, 1)$), $D = \operatorname{diag}(1, 3)$, $P^{-1} = \frac12\begin{pmatrix} 1 & -1 \\ 1 & 1 \end{pmatrix}$, et $A^n = PD^nP^{-1}$.`,
        String.raw`Vérification : $n = 0$ donne $0$ (coefficient de $I$), $n = 1$ donne $1$ (coefficient de $A$), $n = 2$ donne $4$, et en effet $A^2 = \begin{pmatrix} 5 & 4 \\ 4 & 5 \end{pmatrix}$ ✔.`
      ],
      rule: String.raw`$A = PDP^{-1} \Rightarrow A^n = PD^nP^{-1}$ avec $D^n = \operatorname{diag}(\lambda_i^n)$`,
      pitfall: String.raw`Oublier le facteur $\frac12$ qui vient de $P^{-1}$.`,
      mistakes: [
        { expr: '(3^n+1)/2', msg: String.raw`C'est le coefficient diagonal $(1, 1)$ ; la position $(1, 2)$ est ligne 1, colonne 2.` },
        { expr: '3^n-1', msg: String.raw`N'oublie pas le facteur $\frac12$ (qui vient de $P^{-1}$) : pour $n = 1$ on doit retrouver le coefficient 1 de $A$.` }
      ],
      hint: String.raw`Ligne 1, colonne 2.`,
      explain: String.raw`Le coefficient $(1, 2)$ vaut $\frac{3^n - 1}{2}$ (vérifié pour $n = 0, 1, 2$).`,
      level: 3 }
  ]
});
