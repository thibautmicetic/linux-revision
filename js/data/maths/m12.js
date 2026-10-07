/* Maths — Chapitre 12 : Probabilités et statistiques */
APP.registerChapter({
  subject: 'maths',
  id: 'm12', num: 12,
  title: 'Probabilités et statistiques',
  subtitle: 'Dénombrement, lois usuelles, estimation',

  /* ============================== FICHES DE COURS ============================== */
  sections: [
    {
      id: 'm12-s-denombrement',
      title: 'Dénombrement',
      html: String.raw`
<h3>Principes de base</h3>
<ul>
<li><b>Principe multiplicatif</b> : si un choix se fait en $k$ étapes successives offrant $n_1, n_2, \dots, n_k$ possibilités, il y a $n_1\times n_2\times\cdots\times n_k$ choix au total (arbre de choix).</li>
<li><b>Principe additif</b> : si les cas sont disjoints, on additionne leurs nombres.</li>
<li><b>Factorielle</b> : $n! = 1\times 2\times\cdots\times n$, avec $0! = 1$. C'est le nombre de façons d'<b>ordonner</b> $n$ objets distincts (permutations).</li>
</ul>
<h3>Les trois formules à savoir choisir</h3>
<table class="tbl">
<tr><th>Situation</th><th>Ordre ?</th><th>Répétition ?</th><th>Nombre</th><th>Exemple</th></tr>
<tr><td>$p$-liste</td><td>oui</td><td>oui</td><td>$n^p$</td><td>codes à 4 chiffres : $10^4$</td></tr>
<tr><td>Arrangement</td><td>oui</td><td>non</td><td>$A_n^p = \dfrac{n!}{(n-p)!}$</td><td>podium de 3 parmi 8 : $8\times 7\times 6 = 336$</td></tr>
<tr><td>Combinaison</td><td>non</td><td>non</td><td>$\dbinom{n}{p} = \dfrac{n!}{p!\,(n-p)!}$</td><td>mains de 5 cartes parmi 32</td></tr>
</table>
<p>Lien : $\binom{n}{p} = \dfrac{A_n^p}{p!}$ (on divise par les $p!$ ordres possibles d'un même ensemble). Anagrammes d'un mot de $n$ lettres où des lettres se répètent $n_1, n_2, \dots$ fois : $\dfrac{n!}{n_1!\,n_2!\cdots}$.</p>
<h3>Coefficients binomiaux</h3>
<ul>
<li>$\binom{n}{0} = \binom{n}{n} = 1$, $\binom{n}{1} = n$, $\binom{n}{2} = \frac{n(n-1)}{2}$.</li>
<li><b>Symétrie</b> : $\binom{n}{k} = \binom{n}{n-k}$ (choisir les $k$ élus revient à choisir les $n - k$ exclus).</li>
<li><b>Relation de Pascal</b> : $\binom{n}{k} + \binom{n}{k+1} = \binom{n+1}{k+1}$.</li>
<li><b>Binôme de Newton</b> : $(a + b)^n = \sum_{k=0}^{n}\binom{n}{k}a^kb^{n-k}$ ; avec $a = b = 1$ : $\sum_{k=0}^{n}\binom{n}{k} = 2^n$ (nombre de parties d'un ensemble à $n$ éléments).</li>
</ul>
<h4>Triangle de Pascal</h4>
<table class="tbl">
<tr><th>$n$</th><th>$k=0$</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th></tr>
<tr><td>0</td><td>1</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>1</td><td>1</td><td>1</td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>2</td><td>1</td><td>2</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>3</td><td>1</td><td>3</td><td>3</td><td>1</td><td></td><td></td><td></td></tr>
<tr><td>4</td><td>1</td><td>4</td><td>6</td><td>4</td><td>1</td><td></td><td></td></tr>
<tr><td>5</td><td>1</td><td>5</td><td>10</td><td>10</td><td>5</td><td>1</td><td></td></tr>
<tr><td>6</td><td>1</td><td>6</td><td>15</td><td>20</td><td>15</td><td>6</td><td>1</td></tr>
</table>
<p>Chaque coefficient est la somme des deux coefficients situés au-dessus (à gauche et juste au-dessus) : c'est la relation de Pascal.</p>
<div class="callout tip"><b>Exemple corrigé</b> Dans un jeu de 32 cartes (4 as) :<br>
Nombre de mains de 5 cartes : $\binom{32}{5} = \frac{32\times 31\times 30\times 29\times 28}{5!} = 201\,376$.<br>
Mains contenant exactement 2 as : on choisit 2 as parmi 4, puis 3 cartes parmi les 28 autres : $\binom{4}{2}\binom{28}{3} = 6\times 3276 = 19\,656$.<br>
Mains contenant au moins un as : on passe par le contraire, $\binom{32}{5} - \binom{28}{5}$.</div>
<div class="callout warn"><b>Pièges</b> Toujours se demander : l'<b>ordre</b> compte-t-il ? Y a-t-il <b>répétition</b> ? Un podium (ordonné) n'est pas un comité (non ordonné). Pour « au moins un », passer par l'événement contraire « aucun ». Ne pas additionner quand il faut multiplier (choix successifs).</div>
<div class="callout key"><b>À retenir</b> Ordonné avec répétition : $n^p$ ; ordonné sans répétition : $\frac{n!}{(n-p)!}$ ; non ordonné sans répétition : $\binom{n}{p}$. $\sum_k\binom{n}{k} = 2^n$.</div>`
    },
    {
      id: 'm12-s-probas',
      title: 'Espace probabilisé et calcul de probabilités',
      html: String.raw`
<h3>Vocabulaire</h3>
<ul>
<li><b>Univers</b> $\Omega$ : ensemble des issues possibles d'une expérience aléatoire.</li>
<li><b>Événement</b> : partie de $\Omega$. $\Omega$ est l'événement certain, $\varnothing$ l'événement impossible.</li>
<li>$A\cup B$ : « $A$ ou $B$ » ; $A\cap B$ : « $A$ et $B$ » ; $\overline{A}$ : contraire de $A$.</li>
<li>$A$ et $B$ sont <b>incompatibles</b> si $A\cap B = \varnothing$ (ils ne peuvent pas se produire ensemble).</li>
</ul>
<h3>Axiomes d'une probabilité</h3>
<p>Une probabilité $P$ associe à chaque événement un nombre de $[0, 1]$ avec $P(\Omega) = 1$ et, pour des événements deux à deux incompatibles, $P\left(\bigcup A_i\right) = \sum P(A_i)$.</p>
<p>Conséquences :</p>
<ul>
<li>$P(\varnothing) = 0$ ; $P(\overline{A}) = 1 - P(A)$ ;</li>
<li>$A\subset B \Rightarrow P(A) \leq P(B)$ ;</li>
<li>$P(A\cup B) = P(A) + P(B) - P(A\cap B)$ (formule du crible pour deux événements).</li>
</ul>
<h3>Équiprobabilité</h3>
<p>Si toutes les issues ont la même probabilité (dé équilibré, tirage « au hasard »…), $$P(A) = \frac{\operatorname{card}A}{\operatorname{card}\Omega} = \frac{\text{nombre de cas favorables}}{\text{nombre de cas possibles}}.$$ Le dénombrement sert alors à compter les cas.</p>
<div class="callout tip"><b>Exemple corrigé</b> On lance deux dés équilibrés : $\Omega$ contient $6\times 6 = 36$ couples équiprobables.<br>
Somme égale à 7 : $(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)$, donc $P = \frac{6}{36} = \frac16$.<br>
Au moins un 6 : $P = 1 - P(\text{aucun } 6) = 1 - \left(\frac56\right)^2 = \frac{11}{36}$.</div>
<div class="callout warn"><b>Pièges</b> Les <b>sommes</b> de deux dés ne sont pas équiprobables (7 est plus fréquent que 2) : on raisonne sur les couples. $P(A\cup B) = P(A) + P(B)$ seulement si $A$ et $B$ sont incompatibles. « Incompatibles » et « indépendants » sont deux notions différentes.</div>
<div class="callout key"><b>À retenir</b> $P(\overline A) = 1 - P(A)$ ; $P(A\cup B) = P(A) + P(B) - P(A\cap B)$ ; équiprobabilité : favorables / possibles.</div>`
    },
    {
      id: 'm12-s-conditionnelle',
      title: 'Probabilités conditionnelles, Bayes, indépendance',
      html: String.raw`
<h3>Probabilité conditionnelle</h3>
<p>Si $P(B) \gt 0$, la probabilité de $A$ sachant $B$ est $$P_B(A) = P(A\mid B) = \frac{P(A\cap B)}{P(B)}.$$ C'est la probabilité de $A$ quand on sait que $B$ est réalisé (on restreint l'univers à $B$). $P_B$ est elle-même une probabilité.</p>
<p><b>Probabilités composées</b> : $P(A\cap B) = P(B)\,P_B(A) = P(A)\,P_A(B)$, et plus généralement $P(A\cap B\cap C) = P(A)\,P_A(B)\,P_{A\cap B}(C)$.</p>
<h3>Formule des probabilités totales</h3>
<p>Si $B_1, \dots, B_n$ forment un <b>système complet d'événements</b> (deux à deux incompatibles, de réunion $\Omega$, de probabilités non nulles) : $$P(A) = \sum_{i=1}^{n} P(B_i)\,P_{B_i}(A).$$ Cas fréquent : $P(A) = P(B)P_B(A) + P(\overline B)P_{\overline B}(A)$.</p>
<div class="callout info"><b>Méthode : l'arbre pondéré</b> Sur chaque branche, on écrit une probabilité conditionnelle. Règles : la somme des branches issues d'un même nœud vaut 1 ; la probabilité d'un chemin est le <b>produit</b> des probabilités le long du chemin ; la probabilité d'un événement est la <b>somme</b> des chemins qui y mènent (probabilités totales).</div>
<h3>Formule de Bayes</h3>
<p>Elle « retourne » le conditionnement : $$P_A(B_k) = \frac{P(B_k)\,P_{B_k}(A)}{\sum_i P(B_i)\,P_{B_i}(A)} = \frac{P(B_k)\,P_{B_k}(A)}{P(A)}.$$ On connaît la probabilité de l'effet sachant la cause, on cherche celle de la cause sachant l'effet.</p>
<div class="callout tip"><b>Exemple corrigé : test de dépistage</b> Une maladie touche 1 % de la population ($M$). Le test est positif ($T$) chez 99 % des malades et chez 5 % des personnes saines.<br>
Probabilités totales : $P(T) = 0{,}01\times 0{,}99 + 0{,}99\times 0{,}05 = 0{,}0099 + 0{,}0495 = 0{,}0594$.<br>
Bayes : $P_T(M) = \dfrac{0{,}0099}{0{,}0594} = \dfrac16 \approx 17\,\%$. Un test positif ne signifie donc pas que l'on est probablement malade : la maladie est rare et les faux positifs nombreux.</div>
<h3>Indépendance</h3>
<p>$A$ et $B$ sont <b>indépendants</b> si $$P(A\cap B) = P(A)\,P(B),$$ ce qui équivaut (si $P(B) \gt 0$) à $P_B(A) = P(A)$ : savoir que $B$ est réalisé ne change pas la probabilité de $A$. Si $A$ et $B$ sont indépendants, alors $\overline A$ et $B$, $A$ et $\overline B$, $\overline A$ et $\overline B$ le sont aussi. Pour $n$ événements, l'indépendance mutuelle exige la formule produit pour <b>toute</b> sous-famille.</p>
<div class="callout warn"><b>Pièges</b> $P_B(A) \neq P_A(B)$ en général (confondre les deux est l'« erreur du procureur »). Deux événements incompatibles de probabilités non nulles ne sont <b>jamais</b> indépendants (car $P(A\cap B) = 0 \neq P(A)P(B)$). L'indépendance se justifie par l'énoncé (tirages avec remise, expériences séparées) ou se vérifie par le calcul.</div>
<div class="callout key"><b>À retenir</b> $P_B(A) = \frac{P(A\cap B)}{P(B)}$ ; probabilités totales = somme des chemins de l'arbre ; Bayes = chemin voulu / somme des chemins ; indépendance : $P(A\cap B) = P(A)P(B)$.</div>`
    },
    {
      id: 'm12-s-va-discretes',
      title: 'Variables aléatoires discrètes',
      html: String.raw`
<h3>Loi d'une variable aléatoire</h3>
<p>Une <b>variable aléatoire</b> $X$ associe un nombre à chaque issue. Elle est <b>discrète</b> si elle prend un nombre fini (ou dénombrable) de valeurs $x_1, x_2, \dots$. Sa <b>loi</b> est la donnée des $p_i = P(X = x_i)$, avec $p_i \geq 0$ et $\sum_i p_i = 1$.</p>
<p><b>Fonction de répartition</b> : $F(x) = P(X \leq x)$. Elle est croissante, en escalier pour une variable discrète, tend vers 0 en $-\infty$ et vers 1 en $+\infty$, et $P(a \lt X \leq b) = F(b) - F(a)$.</p>
<h3>Espérance</h3>
<p>$$E(X) = \sum_i x_i\,p_i$$ C'est la moyenne pondérée des valeurs (valeur moyenne sur un grand nombre d'expériences). <b>Théorème de transfert</b> : $E(g(X)) = \sum_i g(x_i)\,p_i$. Un jeu est <b>équitable</b> si l'espérance du gain est nulle.</p>
<p><b>Linéarité</b> : $E(aX + b) = a\,E(X) + b$ et $E(X + Y) = E(X) + E(Y)$ (toujours, même sans indépendance).</p>
<h3>Variance et écart-type</h3>
<p>$$V(X) = E\left[(X - E(X))^2\right] = E(X^2) - E(X)^2 \quad\text{(König-Huygens)}, \qquad \sigma(X) = \sqrt{V(X)}.$$ La variance mesure la dispersion autour de la moyenne ; l'écart-type a la même unité que $X$.</p>
<ul>
<li>$V(aX + b) = a^2\,V(X)$ et $\sigma(aX + b) = |a|\,\sigma(X)$ : une translation ne change pas la dispersion.</li>
<li>Si $X$ et $Y$ sont <b>indépendantes</b> : $V(X + Y) = V(X) + V(Y)$ et $E(XY) = E(X)E(Y)$.</li>
<li>En général : $V(X + Y) = V(X) + V(Y) + 2\operatorname{Cov}(X, Y)$ avec $\operatorname{Cov}(X, Y) = E(XY) - E(X)E(Y)$.</li>
</ul>
<div class="callout tip"><b>Exemple corrigé</b> $X$ prend les valeurs $-1$, $0$, $2$ avec les probabilités $0{,}2$ ; $0{,}5$ ; $0{,}3$.<br>
$E(X) = -0{,}2 + 0 + 0{,}6 = 0{,}4$ ; $E(X^2) = 0{,}2\times 1 + 0{,}3\times 4 = 1{,}4$.<br>
$V(X) = 1{,}4 - 0{,}4^2 = 1{,}24$ ; $\sigma(X) = \sqrt{1{,}24} \approx 1{,}11$.<br>
Pour $Y = 3X - 2$ : $E(Y) = 3\times 0{,}4 - 2 = -0{,}8$ et $V(Y) = 9\times 1{,}24 = 11{,}16$.</div>
<div class="callout warn"><b>Pièges</b> $E(X^2) \neq E(X)^2$. $V(-X) = V(X)$ et $V(2X) = 4V(X)$ (le facteur est au carré, la constante disparaît). $V(X + Y) = V(X) + V(Y)$ exige l'indépendance, et $V(X - Y) = V(X) + V(Y)$ (pas moins !). L'espérance n'est pas la moyenne simple des valeurs : il faut pondérer.</div>
<div class="callout key"><b>À retenir</b> $E(X) = \sum x_ip_i$ ; $V(X) = E(X^2) - E(X)^2$ ; $E(aX + b) = aE(X) + b$ ; $V(aX + b) = a^2V(X)$.</div>`
    },
    {
      id: 'm12-s-lois-discretes',
      title: 'Lois discrètes usuelles',
      html: String.raw`
<h3>Loi de Bernoulli $\mathcal{B}(p)$</h3>
<p>Une épreuve à deux issues : succès ($X = 1$) avec probabilité $p$, échec ($X = 0$) avec probabilité $1 - p$. $E(X) = p$, $V(X) = p(1 - p)$.</p>
<h3>Loi binomiale $\mathcal{B}(n, p)$</h3>
<p>$X$ = nombre de succès dans $n$ épreuves de Bernoulli <b>identiques et indépendantes</b> (schéma de Bernoulli). $$P(X = k) = \binom{n}{k}p^k(1 - p)^{n-k},\quad k = 0, \dots, n ; \qquad E(X) = np,\quad V(X) = np(1 - p).$$ $\binom{n}{k}$ compte les positions possibles des $k$ succès parmi les $n$ épreuves.</p>
<h3>Loi géométrique $\mathcal{G}(p)$</h3>
<p>$X$ = rang du <b>premier succès</b> dans une suite d'épreuves de Bernoulli indépendantes : $$P(X = k) = (1 - p)^{k-1}p,\quad k \geq 1 ; \qquad E(X) = \frac1p,\quad V(X) = \frac{1 - p}{p^2}.$$ $P(X \gt k) = (1 - p)^k$ (les $k$ premières épreuves sont des échecs). C'est la seule loi discrète <b>sans mémoire</b>.</p>
<h3>Loi de Poisson $\mathcal{P}(\lambda)$</h3>
<p>Modélise le nombre d'événements <b>rares</b> survenant dans un intervalle de temps ou d'espace (pannes par mois, appels par minute, particules détectées, défauts sur une surface) : $$P(X = k) = \mathrm{e}^{-\lambda}\frac{\lambda^k}{k!},\quad k \in \mathbb{N} ; \qquad E(X) = V(X) = \lambda.$$ <b>Approximation</b> : si $n$ est grand et $p$ petit (typiquement $n \geq 30$, $p \leq 0{,}1$), $\mathcal{B}(n, p) \approx \mathcal{P}(np)$. La somme de deux variables de Poisson indépendantes $\mathcal{P}(\lambda)$ et $\mathcal{P}(\mu)$ suit $\mathcal{P}(\lambda + \mu)$.</p>
<h3>Récapitulatif</h3>
<table class="tbl">
<tr><th>Loi</th><th>Valeurs</th><th>$P(X = k)$</th><th>$E(X)$</th><th>$V(X)$</th></tr>
<tr><td>Uniforme $\{1, \dots, n\}$</td><td>$1, \dots, n$</td><td>$\frac1n$</td><td>$\frac{n+1}{2}$</td><td>$\frac{n^2 - 1}{12}$</td></tr>
<tr><td>Bernoulli $\mathcal{B}(p)$</td><td>$0, 1$</td><td>$p$ si $k = 1$</td><td>$p$</td><td>$p(1-p)$</td></tr>
<tr><td>Binomiale $\mathcal{B}(n,p)$</td><td>$0, \dots, n$</td><td>$\binom{n}{k}p^k(1-p)^{n-k}$</td><td>$np$</td><td>$np(1-p)$</td></tr>
<tr><td>Géométrique $\mathcal{G}(p)$</td><td>$1, 2, \dots$</td><td>$(1-p)^{k-1}p$</td><td>$\frac1p$</td><td>$\frac{1-p}{p^2}$</td></tr>
<tr><td>Poisson $\mathcal{P}(\lambda)$</td><td>$0, 1, 2, \dots$</td><td>$\mathrm{e}^{-\lambda}\frac{\lambda^k}{k!}$</td><td>$\lambda$</td><td>$\lambda$</td></tr>
</table>
<div class="callout tip"><b>Exemple corrigé</b> Un QCM de 10 questions à 4 choix est rempli au hasard. Les réponses sont indépendantes, chacune juste avec probabilité $\frac14$ : le nombre $X$ de bonnes réponses suit $\mathcal{B}\left(10, \frac14\right)$.<br>
$E(X) = 10\times\frac14 = 2{,}5$ ; $V(X) = 10\times\frac14\times\frac34 = 1{,}875$.<br>
$P(X = 0) = \left(\frac34\right)^{10} \approx 0{,}056$ ; $P(X \geq 1) = 1 - \left(\frac34\right)^{10} \approx 0{,}944$.</div>
<div class="callout warn"><b>Pièges</b> Pour une binomiale, il faut justifier : épreuves <b>identiques</b>, <b>indépendantes</b>, à deux issues, en nombre fixé $n$. Des tirages <b>sans remise</b> ne sont pas indépendants (loi hypergéométrique). Ne pas oublier le coefficient $\binom{n}{k}$. Dans la loi géométrique, l'exposant est $k - 1$ (il y a $k - 1$ échecs avant le succès).</div>
<div class="callout key"><b>À retenir</b> Binomiale : nombre de succès sur $n$ essais ($np$, $np(1-p)$). Géométrique : attente du premier succès ($\frac1p$). Poisson : événements rares ($E = V = \lambda$).</div>`
    },
    {
      id: 'm12-s-va-continues',
      title: 'Variables à densité : uniforme et exponentielle',
      html: String.raw`
<h3>Densité et fonction de répartition</h3>
<p>Une variable $X$ est <b>à densité</b> $f$ si $f \geq 0$, $\int_{-\infty}^{+\infty} f(t)\,\mathrm{d}t = 1$ et $$P(a \leq X \leq b) = \int_a^b f(t)\,\mathrm{d}t.$$ Conséquence : $P(X = a) = 0$ pour tout $a$, donc les inégalités larges ou strictes donnent la même probabilité.</p>
<p><b>Fonction de répartition</b> : $F(x) = P(X \leq x) = \int_{-\infty}^{x} f(t)\,\mathrm{d}t$. Elle est continue, croissante, et $F' = f$ là où $f$ est continue ; $P(a \lt X \leq b) = F(b) - F(a)$.</p>
<p><b>Espérance et variance</b> : $E(X) = \int_{-\infty}^{+\infty} x\,f(x)\,\mathrm{d}x$, $E(g(X)) = \int g(x)f(x)\,\mathrm{d}x$, $V(X) = E(X^2) - E(X)^2$. Les règles $E(aX + b) = aE(X) + b$ et $V(aX + b) = a^2V(X)$ restent vraies.</p>
<h3>Loi uniforme $\mathcal{U}([a, b])$</h3>
<p>$f(x) = \dfrac{1}{b - a}$ sur $[a, b]$, 0 ailleurs. $F(x) = \dfrac{x - a}{b - a}$ sur $[a, b]$. $$E(X) = \frac{a + b}{2},\qquad V(X) = \frac{(b - a)^2}{12}.$$ La probabilité d'un sous-intervalle est proportionnelle à sa longueur : $P(c \leq X \leq d) = \frac{d - c}{b - a}$.</p>
<h3>Loi exponentielle $\mathcal{E}(\lambda)$</h3>
<p>$f(x) = \lambda\,\mathrm{e}^{-\lambda x}$ pour $x \geq 0$, 0 sinon ($\lambda \gt 0$). $$F(x) = 1 - \mathrm{e}^{-\lambda x},\quad P(X \gt t) = \mathrm{e}^{-\lambda t},\quad E(X) = \frac1\lambda,\quad V(X) = \frac{1}{\lambda^2}.$$</p>
<p><b>Absence de mémoire</b> : $P_{X \gt s}(X \gt s + t) = P(X \gt t)$. Un composant qui a déjà fonctionné $s$ heures a la même probabilité de durer encore $t$ heures qu'un composant neuf : pas de vieillissement. Modèle des durées de vie de composants électroniques (MTBF $= \frac1\lambda$), de la désintégration radioactive, des temps d'attente entre deux événements de Poisson.</p>
<div class="widget" data-w="plot" data-f="exp(-x);0.5*exp(-0.5*x)" data-x="0;6" data-y="0;1.1"></div>
<p>Densités exponentielles pour $\lambda = 1$ et $\lambda = 0{,}5$ : plus $\lambda$ est petit, plus la durée moyenne $\frac1\lambda$ est grande.</p>
<div class="callout tip"><b>Exemple corrigé</b> 1) Pour que $f(x) = cx^2$ sur $[0, 3]$ (0 ailleurs) soit une densité : $\int_0^3 cx^2\,\mathrm{d}x = c\times 9 = 1$, donc $c = \frac19$.<br>
2) Un composant a une durée de vie exponentielle de moyenne 1000 h : $\lambda = \frac{1}{1000}$. $P(X \gt 500) = \mathrm{e}^{-0{,}5} \approx 0{,}61$ ; $P(X \leq 1000) = 1 - \mathrm{e}^{-1} \approx 0{,}63$.</div>
<div class="callout warn"><b>Pièges</b> Une densité n'est pas une probabilité : $f(x)$ peut dépasser 1 (seule l'aire compte). $P(X = a) = 0$ pour une variable à densité. Pour l'exponentielle, ne pas confondre $\lambda$ (taux) et $\frac1\lambda$ (moyenne). $F(x) = 1 - \mathrm{e}^{-\lambda x}$, et $P(X \gt t) = \mathrm{e}^{-\lambda t}$ (pas l'inverse).</div>
<div class="callout key"><b>À retenir</b> $P(a \leq X \leq b) = \int_a^b f = F(b) - F(a)$ ; uniforme : $\frac{a+b}{2}$, $\frac{(b-a)^2}{12}$ ; exponentielle : $F(x) = 1 - \mathrm{e}^{-\lambda x}$, $E = \frac1\lambda$, sans mémoire.</div>`
    },
    {
      id: 'm12-s-normale',
      title: 'Loi normale',
      html: String.raw`
<h3>Loi normale $\mathcal{N}(\mu, \sigma^2)$</h3>
<p>Densité en cloche, symétrique par rapport à $\mu$ : $$f(x) = \frac{1}{\sigma\sqrt{2\pi}}\,\mathrm{e}^{-\frac{(x - \mu)^2}{2\sigma^2}},\qquad E(X) = \mu,\quad V(X) = \sigma^2.$$ $\mu$ fixe la position du sommet, $\sigma$ la largeur de la cloche (points d'inflexion en $\mu \pm \sigma$). Elle modélise les erreurs de mesure, les dispersions de fabrication, et toute grandeur résultant de nombreux petits effets indépendants (théorème central limite).</p>
<div class="widget" data-w="plot" data-f="exp(-x^2/2)/sqrt(2*pi);exp(-(x-1)^2/0.5)/(0.5*sqrt(2*pi))" data-x="-4;4" data-y="-0.05;0.9"></div>
<p>La cloche large est $\mathcal{N}(0, 1)$ ; la cloche centrée en 1 est $\mathcal{N}(1;\ 0{,}5^2)$ : plus étroite donc plus haute (l'aire reste égale à 1).</p>
<h3>Loi normale centrée réduite et centrage-réduction</h3>
<p>$Z \sim \mathcal{N}(0, 1)$ a pour densité $\varphi(x) = \frac{1}{\sqrt{2\pi}}\mathrm{e}^{-x^2/2}$. Sa fonction de répartition $\Phi(x) = P(Z \leq x)$ n'a pas d'expression simple : on la lit dans une table ou on la calcule numériquement.</p>
<ul>
<li>Symétrie : $\Phi(-x) = 1 - \Phi(x)$, $\Phi(0) = \frac12$, $P(|Z| \leq a) = 2\Phi(a) - 1$.</li>
<li><b>Centrage-réduction</b> : $X \sim \mathcal{N}(\mu, \sigma^2) \iff Z = \dfrac{X - \mu}{\sigma} \sim \mathcal{N}(0, 1)$, d'où $P(X \leq x) = \Phi\left(\dfrac{x - \mu}{\sigma}\right)$.</li>
<li>Valeurs utiles : $\Phi(1) \approx 0{,}841$ ; $\Phi(1{,}645) \approx 0{,}95$ ; $\Phi(1{,}96) \approx 0{,}975$ ; $\Phi(2{,}576) \approx 0{,}995$.</li>
<li>Stabilité : $aX + b \sim \mathcal{N}(a\mu + b, a^2\sigma^2)$ ; si $X_1$, $X_2$ sont normales indépendantes, $X_1 + X_2 \sim \mathcal{N}(\mu_1 + \mu_2, \sigma_1^2 + \sigma_2^2)$.</li>
</ul>
<h3>Règle 68-95-99,7</h3>
<table class="tbl">
<tr><th>Intervalle</th><th>Probabilité</th></tr>
<tr><td>$[\mu - \sigma, \mu + \sigma]$</td><td>$\approx 0{,}68$</td></tr>
<tr><td>$[\mu - 2\sigma, \mu + 2\sigma]$</td><td>$\approx 0{,}95$ (exactement $0{,}95$ pour $\pm 1{,}96\sigma$)</td></tr>
<tr><td>$[\mu - 3\sigma, \mu + 3\sigma]$</td><td>$\approx 0{,}997$</td></tr>
</table>
<div class="callout tip"><b>Exemple corrigé</b> Des résistances ont une valeur $R \sim \mathcal{N}(100, 2^2)$ (en ohms).<br>
$P(R \leq 102) = \Phi\left(\frac{102 - 100}{2}\right) = \Phi(1) \approx 0{,}84$.<br>
$P(96 \leq R \leq 104) = P(|Z| \leq 2) \approx 0{,}95$ : 95 % des résistances sont à $\pm 4\ \Omega$.<br>
$P(R \gt 102) \approx \frac{1 - 0{,}68}{2} = 0{,}16$ par symétrie.</div>
<div class="callout warn"><b>Pièges</b> Dans $\mathcal{N}(\mu, \sigma^2)$, le 2e paramètre est la <b>variance</b> : on divise par $\sigma$ (l'écart-type), pas par $\sigma^2$. $\Phi(-x) = 1 - \Phi(x)$, et non $-\Phi(x)$ (une probabilité n'est jamais négative). Penser à faire un dessin de la cloche pour les questions de symétrie.</div>
<div class="callout key"><b>À retenir</b> $Z = \frac{X - \mu}{\sigma}$ ; $\Phi(-x) = 1 - \Phi(x)$ ; 68 % à $\pm\sigma$, 95 % à $\pm 2\sigma$ (ou $\pm 1{,}96\sigma$), 99,7 % à $\pm 3\sigma$.</div>`
    },
    {
      id: 'm12-s-limites-stats',
      title: 'Théorèmes limites, statistiques et estimation',
      html: String.raw`
<h3>Moyenne de variables indépendantes</h3>
<p>Soient $X_1, \dots, X_n$ indépendantes, de même loi, d'espérance $\mu$ et de variance $\sigma^2$ (un « échantillon »). La moyenne empirique $\overline{X}_n = \frac{X_1 + \dots + X_n}{n}$ vérifie $$E(\overline{X}_n) = \mu,\qquad V(\overline{X}_n) = \frac{\sigma^2}{n},\qquad \sigma(\overline{X}_n) = \frac{\sigma}{\sqrt n}.$$</p>
<h3>Inégalité de Bienaymé-Tchebychev</h3>
<p>Pour toute variable de variance finie et tout $\varepsilon \gt 0$ : $$P\left(|X - E(X)| \geq \varepsilon\right) \leq \frac{V(X)}{\varepsilon^2}.$$ Elle est grossière mais universelle (aucune hypothèse sur la loi).</p>
<h3>Loi des grands nombres</h3>
<p>Pour tout $\varepsilon \gt 0$, $P\left(|\overline{X}_n - \mu| \geq \varepsilon\right) \xrightarrow[n\to+\infty]{} 0$ : la moyenne empirique se rapproche de l'espérance. C'est ce qui justifie l'interprétation de la probabilité comme <b>fréquence limite</b> (la fréquence de « pile » tend vers $\frac12$). Démonstration : Bienaymé-Tchebychev appliqué à $\overline{X}_n$ donne la majoration $\frac{\sigma^2}{n\varepsilon^2}$.</p>
<h3>Théorème central limite (TCL)</h3>
<p>Quelle que soit la loi des $X_i$ (de variance finie), pour $n$ grand : $$\frac{\overline{X}_n - \mu}{\sigma/\sqrt n} \approx \mathcal{N}(0, 1),\quad\text{c'est-à-dire}\quad \overline{X}_n \approx \mathcal{N}\left(\mu, \frac{\sigma^2}{n}\right)\ \text{et}\ X_1 + \dots + X_n \approx \mathcal{N}(n\mu, n\sigma^2).$$ En pratique, l'approximation est utilisée dès $n \geq 30$. Cas particulier : si $np \geq 5$ et $n(1 - p) \geq 5$ (et $n \geq 30$), $\mathcal{B}(n, p) \approx \mathcal{N}(np, np(1 - p))$.</p>
<h3>Statistiques descriptives</h3>
<p>Pour une série $x_1, \dots, x_n$ :</p>
<ul>
<li><b>Moyenne</b> : $\bar x = \frac1n\sum x_i$.</li>
<li><b>Médiane</b> : on <b>trie</b> la série ; c'est la valeur centrale si $n$ est impair, la moyenne des deux valeurs centrales si $n$ est pair. Elle est <b>robuste</b> aux valeurs extrêmes, contrairement à la moyenne. Les <b>quartiles</b> $Q_1$, $Q_3$ coupent la série triée à 25 % et 75 %.</li>
<li><b>Variance</b> : $s^2 = \frac1n\sum(x_i - \bar x)^2 = \overline{x^2} - \bar x^2$ ; <b>écart-type</b> $s = \sqrt{s^2}$. Pour estimer la variance d'une population à partir d'un échantillon, on utilise la variance corrigée $\frac{1}{n-1}\sum(x_i - \bar x)^2$ (sans biais).</li>
</ul>
<h3>Intervalle de confiance d'une moyenne (aperçu)</h3>
<p>On mesure $n$ valeurs, de moyenne $\bar x$, issues d'une population d'écart-type $\sigma$ (connu, ou estimé par $s$ si $n$ est grand). Grâce au TCL, un intervalle de confiance de $\mu$ au niveau 95 % est $$\left[\bar x - 1{,}96\,\frac{\sigma}{\sqrt n}\ ;\ \bar x + 1{,}96\,\frac{\sigma}{\sqrt n}\right].$$ Au niveau 99 %, on remplace 1,96 par 2,576. Pour un petit échantillon gaussien d'écart-type inconnu, on utilise la loi de Student. La largeur est proportionnelle à $\frac{1}{\sqrt n}$ : pour la diviser par 2, il faut 4 fois plus de mesures.</p>
<div class="callout tip"><b>Exemple corrigé</b> 100 mesures d'une tension donnent $\bar x = 50$ V, avec $\sigma = 10$ V. Demi-largeur : $1{,}96\times\frac{10}{\sqrt{100}} = 1{,}96$. IC à 95 % : $[48{,}04\ ;\ 51{,}96]$ V.</div>
<div class="callout warn"><b>Pièges</b> L'écart-type de la moyenne est $\frac{\sigma}{\sqrt n}$, pas $\frac{\sigma}{n}$. On n'oublie pas de trier avant de chercher la médiane. Interprétation de l'IC : la <b>méthode</b> fournit un intervalle qui contient $\mu$ dans 95 % des échantillons ; $\mu$ n'est pas aléatoire.</div>
<div class="callout key"><b>À retenir</b> $V(\overline{X}_n) = \frac{\sigma^2}{n}$ ; LGN : $\overline{X}_n \to \mu$ ; TCL : $\overline{X}_n \approx \mathcal{N}(\mu, \frac{\sigma^2}{n})$ ; IC 95 % : $\bar x \pm 1{,}96\frac{\sigma}{\sqrt n}$.</div>`
    },
    {
      id: 'm12-s-memo',
      title: 'Mémo : tableau récapitulatif',
      html: String.raw`
<h3>Calcul des probabilités</h3>
<table class="tbl">
<tr><th>Notion</th><th>Formule</th></tr>
<tr><td>Dénombrement</td><td>$n^p$ ; $\frac{n!}{(n-p)!}$ ; $\binom{n}{p} = \frac{n!}{p!(n-p)!}$</td></tr>
<tr><td>Contraire, réunion</td><td>$P(\overline A) = 1 - P(A)$ ; $P(A\cup B) = P(A) + P(B) - P(A\cap B)$</td></tr>
<tr><td>Conditionnelle</td><td>$P_B(A) = \frac{P(A\cap B)}{P(B)}$</td></tr>
<tr><td>Probabilités totales</td><td>$P(A) = \sum P(B_i)P_{B_i}(A)$</td></tr>
<tr><td>Bayes</td><td>$P_A(B) = \frac{P(B)P_B(A)}{P(A)}$</td></tr>
<tr><td>Indépendance</td><td>$P(A\cap B) = P(A)P(B)$</td></tr>
<tr><td>Espérance, variance</td><td>$E(X) = \sum x_ip_i$ ; $V(X) = E(X^2) - E(X)^2$</td></tr>
<tr><td>Transformation affine</td><td>$E(aX+b) = aE(X)+b$ ; $V(aX+b) = a^2V(X)$</td></tr>
</table>
<h3>Lois usuelles</h3>
<table class="tbl">
<tr><th>Loi</th><th>Probabilité / densité</th><th>$E$</th><th>$V$</th></tr>
<tr><td>$\mathcal{B}(p)$</td><td>$P(X=1) = p$</td><td>$p$</td><td>$p(1-p)$</td></tr>
<tr><td>$\mathcal{B}(n,p)$</td><td>$\binom{n}{k}p^k(1-p)^{n-k}$</td><td>$np$</td><td>$np(1-p)$</td></tr>
<tr><td>$\mathcal{G}(p)$</td><td>$(1-p)^{k-1}p$</td><td>$\frac1p$</td><td>$\frac{1-p}{p^2}$</td></tr>
<tr><td>$\mathcal{P}(\lambda)$</td><td>$\mathrm{e}^{-\lambda}\frac{\lambda^k}{k!}$</td><td>$\lambda$</td><td>$\lambda$</td></tr>
<tr><td>$\mathcal{U}([a,b])$</td><td>$\frac{1}{b-a}$ sur $[a,b]$</td><td>$\frac{a+b}{2}$</td><td>$\frac{(b-a)^2}{12}$</td></tr>
<tr><td>$\mathcal{E}(\lambda)$</td><td>$\lambda\mathrm{e}^{-\lambda x}$, $x \geq 0$</td><td>$\frac1\lambda$</td><td>$\frac{1}{\lambda^2}$</td></tr>
<tr><td>$\mathcal{N}(\mu,\sigma^2)$</td><td>$\frac{1}{\sigma\sqrt{2\pi}}\mathrm{e}^{-\frac{(x-\mu)^2}{2\sigma^2}}$</td><td>$\mu$</td><td>$\sigma^2$</td></tr>
</table>
<div class="callout key"><b>Réflexes</b> « Au moins un » : passer par le contraire. Arbre pondéré pour les conditionnelles. Toujours vérifier que les probabilités somment à 1. Pour une loi normale : centrer-réduire puis faire un dessin. Moyenne de $n$ mesures : écart-type divisé par $\sqrt n$.</div>`
    }
  ],

  /* ============================== FORMULAIRE ============================== */
  formulas: [
    { id: 'm12-fo-factorielle', name: 'Factorielle', tex: String.raw`n! = 1\times 2\times\cdots\times n,\qquad 0! = 1`, note: String.raw`nombre de permutations de $n$ objets` },
    { id: 'm12-fo-plistes', name: 'p-listes (ordre, répétition)', tex: String.raw`n^p`, note: String.raw`tirages ordonnés avec remise de $p$ éléments parmi $n$` },
    { id: 'm12-fo-arrangements', name: 'Arrangements (ordre, sans répétition)', tex: String.raw`A_n^p = \frac{n!}{(n-p)!} = n(n-1)\cdots(n-p+1)` },
    { id: 'm12-fo-binom', name: 'Combinaisons (sans ordre, sans répétition)', tex: String.raw`\binom{n}{k} = \frac{n!}{k!\,(n-k)!}`, note: String.raw`$\binom{n}{k} = \frac{A_n^k}{k!}$` },
    { id: 'm12-fo-binom-sym', name: 'Symétrie des coefficients binomiaux', tex: String.raw`\binom{n}{k} = \binom{n}{n-k}` },
    { id: 'm12-fo-pascal', name: 'Relation de Pascal', tex: String.raw`\binom{n}{k} + \binom{n}{k+1} = \binom{n+1}{k+1}` },
    { id: 'm12-fo-somme-binom', name: 'Somme des coefficients binomiaux', tex: String.raw`\sum_{k=0}^{n}\binom{n}{k} = 2^n` },
    { id: 'm12-fo-newton', name: 'Binôme de Newton', tex: String.raw`(a+b)^n = \sum_{k=0}^{n}\binom{n}{k}a^kb^{n-k}` },
    { id: 'm12-fo-anagrammes', name: 'Permutations avec répétitions', tex: String.raw`\frac{n!}{n_1!\,n_2!\cdots n_r!}`, note: String.raw`anagrammes d'un mot de $n$ lettres dont certaines se répètent $n_1, \dots, n_r$ fois` },
    { id: 'm12-fo-contraire', name: 'Événement contraire', tex: String.raw`P(\overline{A}) = 1 - P(A)` },
    { id: 'm12-fo-reunion', name: 'Probabilité d\'une réunion', tex: String.raw`P(A\cup B) = P(A) + P(B) - P(A\cap B)` },
    { id: 'm12-fo-equiprob', name: 'Équiprobabilité', tex: String.raw`P(A) = \frac{\operatorname{card}A}{\operatorname{card}\Omega}` },
    { id: 'm12-fo-cond', name: 'Probabilité conditionnelle', tex: String.raw`P_B(A) = \frac{P(A\cap B)}{P(B)}`, note: String.raw`si $P(B) \gt 0$ ; notée aussi $P(A\mid B)$` },
    { id: 'm12-fo-composees', name: 'Probabilités composées', tex: String.raw`P(A\cap B) = P(B)\,P_B(A) = P(A)\,P_A(B)` },
    { id: 'm12-fo-totales', name: 'Formule des probabilités totales', tex: String.raw`P(A) = \sum_{i=1}^{n} P(B_i)\,P_{B_i}(A)`, note: String.raw`$(B_i)$ système complet d'événements` },
    { id: 'm12-fo-bayes', name: 'Formule de Bayes', tex: String.raw`P_A(B_k) = \frac{P(B_k)\,P_{B_k}(A)}{\sum_i P(B_i)\,P_{B_i}(A)}` },
    { id: 'm12-fo-indep', name: 'Indépendance', tex: String.raw`P(A\cap B) = P(A)\,P(B)`, note: String.raw`équivaut à $P_B(A) = P(A)$ si $P(B) \gt 0$` },
    { id: 'm12-fo-esperance', name: 'Espérance (discrète)', tex: String.raw`E(X) = \sum_i x_i\,P(X = x_i)`, note: String.raw`transfert : $E(g(X)) = \sum_i g(x_i)\,P(X = x_i)$` },
    { id: 'm12-fo-variance', name: 'Variance et écart-type', tex: String.raw`V(X) = E\left[(X - E(X))^2\right],\qquad \sigma(X) = \sqrt{V(X)}` },
    { id: 'm12-fo-koenig', name: 'Formule de König-Huygens', tex: String.raw`V(X) = E(X^2) - E(X)^2` },
    { id: 'm12-fo-lin-esp', name: 'Linéarité de l\'espérance', tex: String.raw`E(aX + b) = a\,E(X) + b,\qquad E(X + Y) = E(X) + E(Y)` },
    { id: 'm12-fo-var-affine', name: 'Variance d\'une transformation affine', tex: String.raw`V(aX + b) = a^2\,V(X)`, note: String.raw`$\sigma(aX + b) = |a|\,\sigma(X)$` },
    { id: 'm12-fo-var-somme', name: 'Variance d\'une somme indépendante', tex: String.raw`V(X + Y) = V(X) + V(Y)`, note: String.raw`si $X$ et $Y$ sont indépendantes ; sinon $+\,2\operatorname{Cov}(X, Y)$` },
    { id: 'm12-fo-bernoulli', name: 'Loi de Bernoulli', tex: String.raw`P(X = 1) = p,\quad E(X) = p,\quad V(X) = p(1-p)` },
    { id: 'm12-fo-binomiale', name: 'Loi binomiale', tex: String.raw`P(X = k) = \binom{n}{k}p^k(1-p)^{n-k}`, note: String.raw`$E(X) = np$, $V(X) = np(1-p)$` },
    { id: 'm12-fo-geometrique', name: 'Loi géométrique', tex: String.raw`P(X = k) = (1-p)^{k-1}\,p,\ k \geq 1`, note: String.raw`$E(X) = \frac1p$, $V(X) = \frac{1-p}{p^2}$, $P(X \gt k) = (1-p)^k$` },
    { id: 'm12-fo-poisson', name: 'Loi de Poisson', tex: String.raw`P(X = k) = \mathrm{e}^{-\lambda}\frac{\lambda^k}{k!}`, note: String.raw`$E(X) = V(X) = \lambda$ ; $\mathcal{B}(n,p) \approx \mathcal{P}(np)$ si $n$ grand, $p$ petit` },
    { id: 'm12-fo-densite', name: 'Probabilité avec une densité', tex: String.raw`P(a \leq X \leq b) = \int_a^b f(t)\,\mathrm{d}t`, note: String.raw`$f \geq 0$, $\int_{-\infty}^{+\infty} f = 1$, $P(X = a) = 0$` },
    { id: 'm12-fo-repartition', name: 'Fonction de répartition', tex: String.raw`F(x) = P(X \leq x) = \int_{-\infty}^{x} f(t)\,\mathrm{d}t`, note: String.raw`$F' = f$ ; $P(a \lt X \leq b) = F(b) - F(a)$` },
    { id: 'm12-fo-esp-cont', name: 'Espérance (à densité)', tex: String.raw`E(X) = \int_{-\infty}^{+\infty} x\,f(x)\,\mathrm{d}x` },
    { id: 'm12-fo-uniforme', name: 'Loi uniforme sur [a, b]', tex: String.raw`f(x) = \frac{1}{b-a},\quad E(X) = \frac{a+b}{2},\quad V(X) = \frac{(b-a)^2}{12}` },
    { id: 'm12-fo-exponentielle', name: 'Loi exponentielle', tex: String.raw`f(x) = \lambda\,\mathrm{e}^{-\lambda x}\ (x \geq 0),\quad F(x) = 1 - \mathrm{e}^{-\lambda x}`, note: String.raw`$E(X) = \frac1\lambda$, $V(X) = \frac{1}{\lambda^2}$, $P(X \gt t) = \mathrm{e}^{-\lambda t}$` },
    { id: 'm12-fo-sans-memoire', name: 'Absence de mémoire (exponentielle)', tex: String.raw`P_{X \gt s}(X \gt s + t) = P(X \gt t)` },
    { id: 'm12-fo-normale', name: 'Densité de la loi normale', tex: String.raw`f(x) = \frac{1}{\sigma\sqrt{2\pi}}\,\mathrm{e}^{-\frac{(x-\mu)^2}{2\sigma^2}}`, note: String.raw`$E(X) = \mu$, $V(X) = \sigma^2$` },
    { id: 'm12-fo-centrage', name: 'Centrage-réduction', tex: String.raw`Z = \frac{X - \mu}{\sigma} \sim \mathcal{N}(0, 1)`, note: String.raw`$P(X \leq x) = \Phi\left(\frac{x - \mu}{\sigma}\right)$` },
    { id: 'm12-fo-phi-sym', name: 'Symétrie de Φ', tex: String.raw`\Phi(-x) = 1 - \Phi(x),\qquad P(|Z| \leq a) = 2\Phi(a) - 1` },
    { id: 'm12-fo-689597', name: 'Règle 68-95-99,7', tex: String.raw`P(|X - \mu| \leq k\sigma) \approx 0{,}68\ ;\ 0{,}95\ ;\ 0{,}997\quad (k = 1, 2, 3)`, note: String.raw`$\Phi(1{,}96) \approx 0{,}975$ : $P(|Z| \leq 1{,}96) \approx 0{,}95$` },
    { id: 'm12-fo-bienayme', name: 'Inégalité de Bienaymé-Tchebychev', tex: String.raw`P\left(|X - E(X)| \geq \varepsilon\right) \leq \frac{V(X)}{\varepsilon^2}` },
    { id: 'm12-fo-moyenne-emp', name: 'Moyenne empirique d\'un échantillon', tex: String.raw`E(\overline{X}_n) = \mu,\qquad V(\overline{X}_n) = \frac{\sigma^2}{n}`, note: String.raw`écart-type $\frac{\sigma}{\sqrt n}$` },
    { id: 'm12-fo-tcl', name: 'Théorème central limite', tex: String.raw`\frac{\overline{X}_n - \mu}{\sigma/\sqrt{n}} \xrightarrow[n\to+\infty]{\text{loi}} \mathcal{N}(0, 1)`, note: String.raw`en pratique $\overline{X}_n \approx \mathcal{N}\left(\mu, \frac{\sigma^2}{n}\right)$ pour $n \geq 30$` },
    { id: 'm12-fo-stats', name: 'Moyenne et variance d\'une série', tex: String.raw`\bar x = \frac1n\sum_{i=1}^{n} x_i,\qquad s^2 = \frac1n\sum_{i=1}^{n}(x_i - \bar x)^2 = \overline{x^2} - \bar x^2` },
    { id: 'm12-fo-ic', name: 'Intervalle de confiance à 95 % d\'une moyenne', tex: String.raw`\left[\bar x - 1{,}96\,\frac{\sigma}{\sqrt n}\ ;\ \bar x + 1{,}96\,\frac{\sigma}{\sqrt n}\right]`, note: String.raw`niveau 99 % : remplacer 1,96 par 2,576` }
  ],

  /* ============================== FLASHCARDS ============================== */
  flashcards: [
    { id: 'm12-f-outil', front: String.raw`Dénombrement : comment choisir entre $n^p$, $A_n^p$ et $\binom{n}{p}$ ?`, back: String.raw`Deux questions : l'ordre compte-t-il ? y a-t-il répétition ? Ordre + répétition : $n^p$. Ordre sans répétition : $A_n^p = \frac{n!}{(n-p)!}$. Ni ordre ni répétition : $\binom{n}{p}$.` },
    { id: 'm12-f-incomp-indep', front: String.raw`Incompatibles ou indépendants : quelle différence ?`, back: String.raw`Incompatibles : $A\cap B = \varnothing$ (ne peuvent pas arriver ensemble). Indépendants : $P(A\cap B) = P(A)P(B)$ (l'un n'informe pas sur l'autre). Deux événements incompatibles de probabilités non nulles ne sont jamais indépendants.` },
    { id: 'm12-f-cond', front: String.raw`Probabilité conditionnelle : définition et sens`, back: String.raw`$P_B(A) = \frac{P(A\cap B)}{P(B)}$ : probabilité de $A$ quand on sait que $B$ est réalisé (l'univers se restreint à $B$). Sur un arbre, ce sont les probabilités portées par les branches de 2e niveau.` },
    { id: 'm12-f-totales', front: String.raw`Formule des probabilités totales`, back: String.raw`Si $(B_i)$ est un système complet d'événements : $P(A) = \sum_i P(B_i)P_{B_i}(A)$. Sur l'arbre : somme des probabilités de tous les chemins menant à $A$.` },
    { id: 'm12-f-bayes', front: String.raw`Formule de Bayes : à quoi sert-elle ?`, back: String.raw`À inverser un conditionnement : de $P_{B}(A)$ (effet sachant cause) à $P_A(B)$ (cause sachant effet) : $P_A(B) = \frac{P(B)P_B(A)}{P(A)}$, avec $P(A)$ par les probabilités totales.` },
    { id: 'm12-f-esp-var', front: String.raw`Espérance et variance d'une variable discrète`, back: String.raw`$E(X) = \sum x_ip_i$ (moyenne pondérée). $V(X) = E[(X - E(X))^2] = E(X^2) - E(X)^2$ (dispersion) ; $\sigma = \sqrt{V}$.` },
    { id: 'm12-f-affine', front: String.raw`Effet d'une transformation $aX + b$ sur $E$, $V$, $\sigma$`, back: String.raw`$E(aX + b) = aE(X) + b$ ; $V(aX + b) = a^2V(X)$ ; $\sigma(aX + b) = |a|\sigma(X)$. La constante $b$ décale sans disperser.` },
    { id: 'm12-f-binomiale', front: String.raw`Loi binomiale : conditions d'utilisation et formules`, back: String.raw`$X$ = nombre de succès dans $n$ épreuves de Bernoulli identiques (même $p$) et indépendantes. $P(X = k) = \binom{n}{k}p^k(1-p)^{n-k}$, $E = np$, $V = np(1-p)$.` },
    { id: 'm12-f-geometrique', front: String.raw`Loi géométrique`, back: String.raw`Rang du premier succès dans des épreuves de Bernoulli indépendantes : $P(X = k) = (1-p)^{k-1}p$ ($k \geq 1$), $E(X) = \frac1p$, $P(X \gt k) = (1-p)^k$. Sans mémoire.` },
    { id: 'm12-f-poisson', front: String.raw`Loi de Poisson : quand l'utiliser ?`, back: String.raw`Pour compter des événements rares et indépendants sur un intervalle de temps ou d'espace (pannes, appels, défauts). $P(X = k) = \mathrm{e}^{-\lambda}\frac{\lambda^k}{k!}$, $E = V = \lambda$. Approxime $\mathcal{B}(n, p)$ quand $n$ est grand et $p$ petit ($\lambda = np$).` },
    { id: 'm12-f-densite', front: String.raw`Densité de probabilité : propriétés`, back: String.raw`$f \geq 0$, $\int_{\mathbb{R}} f = 1$, $P(a \leq X \leq b) = \int_a^b f$. $P(X = a) = 0$. $f$ peut dépasser 1 : c'est l'aire qui est une probabilité. $F(x) = \int_{-\infty}^x f$ et $F' = f$.` },
    { id: 'm12-f-expo', front: String.raw`Loi exponentielle $\mathcal{E}(\lambda)$`, back: String.raw`$f(x) = \lambda\mathrm{e}^{-\lambda x}$ ($x \geq 0$), $F(x) = 1 - \mathrm{e}^{-\lambda x}$, $P(X \gt t) = \mathrm{e}^{-\lambda t}$, $E = \frac1\lambda$, $V = \frac{1}{\lambda^2}$. Sans mémoire : durée de vie sans vieillissement.` },
    { id: 'm12-f-normale', front: String.raw`Loi normale : comment calculer $P(X \leq x)$ pour $X \sim \mathcal{N}(\mu, \sigma^2)$ ?`, back: String.raw`On centre et on réduit : $Z = \frac{X - \mu}{\sigma} \sim \mathcal{N}(0,1)$, donc $P(X \leq x) = \Phi\left(\frac{x - \mu}{\sigma}\right)$, lu dans la table. Symétrie : $\Phi(-z) = 1 - \Phi(z)$.` },
    { id: 'm12-f-689597', front: String.raw`Règle 68-95-99,7`, back: String.raw`Pour une loi normale : environ 68 % des valeurs dans $[\mu - \sigma, \mu + \sigma]$, 95 % dans $[\mu - 2\sigma, \mu + 2\sigma]$ (exactement pour $\pm 1{,}96\sigma$), 99,7 % dans $[\mu - 3\sigma, \mu + 3\sigma]$.` },
    { id: 'm12-f-lgn', front: String.raw`Loi des grands nombres`, back: String.raw`Pour des $X_i$ indépendantes de même loi d'espérance $\mu$ : $P(|\overline{X}_n - \mu| \geq \varepsilon) \to 0$. La moyenne empirique converge vers l'espérance ; la fréquence d'un événement tend vers sa probabilité.` },
    { id: 'm12-f-tcl', front: String.raw`Théorème central limite`, back: String.raw`Pour $n$ grand ($n \geq 30$), quelle que soit la loi des $X_i$ (i.i.d., variance $\sigma^2$) : $\overline{X}_n \approx \mathcal{N}\left(\mu, \frac{\sigma^2}{n}\right)$, i.e. $\frac{\overline{X}_n - \mu}{\sigma/\sqrt n} \approx \mathcal{N}(0, 1)$. D'où l'omniprésence de la loi normale.` },
    { id: 'm12-f-ic', front: String.raw`Intervalle de confiance à 95 % d'une moyenne : formule et interprétation`, back: String.raw`$\bar x \pm 1{,}96\frac{\sigma}{\sqrt n}$. Dans 95 % des échantillons, l'intervalle ainsi construit contient la vraie moyenne $\mu$. Sa largeur décroît en $\frac{1}{\sqrt n}$.` }
  ],

  quiz: [
    { id: 'm12-q-001', q: String.raw`Que vaut $0!$ ?`,
      choices: [String.raw`$1$`, String.raw`$0$`, String.raw`Ce n'est pas défini`], answer: 0,
      explain: String.raw`Par convention $0! = 1$ : il y a exactement une façon d'ordonner zéro objet, et cela rend cohérentes les formules ($\binom{n}{0} = \frac{n!}{0!\,n!} = 1$, $n! = n\times(n-1)!$ pour $n = 1$).`,
      why: { 1: String.raw`Un produit vide vaut 1, pas 0 ; sinon $\binom{n}{0} = \frac{n!}{0!\,n!}$ ne serait pas défini.`, 2: String.raw`$0!$ est bien défini, par convention égal à 1.` },
      level: 1 },
    { id: 'm12-q-002', q: String.raw`De combien de façons peut-on choisir 3 délégués (sans ordre, sans rôle particulier) dans une classe de 10 étudiants ?`,
      choices: [String.raw`$720$`, String.raw`$120$`, String.raw`$1000$`, String.raw`$30$`], answer: 1,
      explain: String.raw`L'ordre ne compte pas et un étudiant ne peut être choisi deux fois : $\binom{10}{3} = \frac{10\times 9\times 8}{3!} = 120$.`,
      why: { 0: String.raw`$720 = 10\times 9\times 8$ compte les choix <b>ordonnés</b> (président, vice-président, secrétaire) : il faut diviser par $3! = 6$.`, 2: String.raw`$10^3$ autorise les répétitions et tient compte de l'ordre.`, 3: String.raw`$10\times 3$ ne correspond à aucun dénombrement : on multiplie les choix successifs.` },
      level: 1 },
    { id: 'm12-q-003', q: String.raw`Combien existe-t-il de codes à 4 chiffres (chiffres de 0 à 9, répétitions autorisées) ?`,
      choices: [String.raw`$5040$`, String.raw`$210$`, String.raw`$4^{10}$`, String.raw`$10^4$`], answer: 3,
      explain: String.raw`4 positions, 10 choix pour chacune, ordre important et répétitions permises : $10^4 = 10\,000$ ($p$-listes).`,
      why: { 0: String.raw`$5040 = 10\times 9\times 8\times 7$ interdit les répétitions (arrangements) : or un code peut être 1111.`, 1: String.raw`$\binom{10}{4} = 210$ ne tient compte ni de l'ordre ni des répétitions.`, 2: String.raw`Exposant et base inversés : $n^p$ avec $n = 10$ choix et $p = 4$ positions.` },
      level: 1 },
    { id: 'm12-q-004', q: String.raw`Le coefficient binomial $\binom{n}{k}$ est égal à :`,
      choices: [String.raw`$\dfrac{n!}{(n-k)!}$`, String.raw`$\dfrac{n!}{k!}$`, String.raw`$\dfrac{n!}{k!\,(n-k)!}$`, String.raw`$n^k$`], answer: 2,
      explain: String.raw`$\binom{n}{k} = \frac{A_n^k}{k!} = \frac{n!}{k!\,(n-k)!}$ : on compte les choix ordonnés puis on divise par les $k!$ ordres d'un même sous-ensemble.`,
      why: { 0: String.raw`C'est $A_n^k$, le nombre d'arrangements (avec ordre) : il manque la division par $k!$.`, 1: String.raw`Il manque le facteur $(n-k)!$ au dénominateur.`, 3: String.raw`$n^k$ compte les $k$-listes (ordre et répétitions).` },
      level: 1 },
    { id: 'm12-q-005', q: String.raw`Que vaut $\displaystyle\sum_{k=0}^{n}\binom{n}{k}$ ?`,
      choices: [String.raw`$n!$`, String.raw`$n\,2^{n-1}$`, String.raw`$n^2$`, String.raw`$2^n$`], answer: 3,
      explain: String.raw`Binôme de Newton avec $a = b = 1$ : $(1 + 1)^n = \sum_k\binom{n}{k}$. C'est aussi le nombre de parties d'un ensemble à $n$ éléments.`,
      why: { 0: String.raw`$n!$ compte les permutations, pas les sous-ensembles.`, 1: String.raw`$n\,2^{n-1}$ est la valeur de $\sum_k k\binom{n}{k}$ (avec le facteur $k$).`, 2: String.raw`Pour $n = 3$ : $1 + 3 + 3 + 1 = 8 \neq 9$.` },
      level: 2 },
    { id: 'm12-q-006', q: String.raw`La relation de Pascal affirme que $\binom{n}{k} + \binom{n}{k+1}$ est égal à :`,
      choices: [String.raw`$\binom{n+1}{k+1}$`, String.raw`$\binom{n+1}{k}$`, String.raw`$\binom{2n}{2k+1}$`, String.raw`$\binom{n}{2k+1}$`], answer: 0,
      explain: String.raw`Dans le triangle de Pascal, deux coefficients voisins de la ligne $n$ s'additionnent pour donner celui situé sous le second, ligne $n + 1$ : $\binom{n+1}{k+1}$. Ex. : $\binom{4}{1} + \binom{4}{2} = 4 + 6 = 10 = \binom{5}{2}$.`,
      why: { 1: String.raw`Test avec $n = 4$, $k = 1$ : $4 + 6 = 10$ mais $\binom{5}{1} = 5$.`, 2: String.raw`On n'additionne pas les paramètres : $\binom{4}{1} + \binom{4}{2} = 10$ alors que $\binom{8}{3} = 56$.`, 3: String.raw`Avec $n = 4$, $k = 1$ : $\binom{4}{3} = 4 \neq 10$.` },
      level: 2 },
    { id: 'm12-q-007', q: String.raw`Deux événements $A$ et $B$ sont dits <b>incompatibles</b> lorsque :`,
      choices: [String.raw`$P(A\cap B) = P(A)\,P(B)$`, String.raw`$A\cup B = \Omega$`, String.raw`$A\cap B = \varnothing$`, String.raw`$P(A) + P(B) = 1$`], answer: 2,
      explain: String.raw`Incompatibles = ne peuvent pas se réaliser simultanément : $A\cap B = \varnothing$, donc $P(A\cap B) = 0$.`,
      why: { 0: String.raw`C'est la définition de l'<b>indépendance</b>, une notion différente.`, 1: String.raw`$A\cup B = \Omega$ signifie que l'un des deux se produit toujours, pas qu'ils s'excluent.`, 3: String.raw`C'est vrai pour deux événements contraires, mais l'incompatibilité n'impose pas que la somme vaille 1.` },
      level: 1 },
    { id: 'm12-q-008', q: String.raw`On sait que $P(A) = 0{,}5$, $P(B) = 0{,}4$ et $P(A\cap B) = 0{,}2$. Que vaut $P(A\cup B)$ ?`,
      choices: [String.raw`$0{,}9$`, String.raw`$0{,}7$`, String.raw`$0{,}2$`, String.raw`$1{,}1$`], answer: 1,
      explain: String.raw`$P(A\cup B) = P(A) + P(B) - P(A\cap B) = 0{,}5 + 0{,}4 - 0{,}2 = 0{,}7$.`,
      why: { 0: String.raw`Tu as oublié de soustraire $P(A\cap B)$, compté deux fois.`, 2: String.raw`$0{,}2$ est $P(A\cap B)$ (« et »), pas $P(A\cup B)$ (« ou »).`, 3: String.raw`Une probabilité ne dépasse jamais 1 : tu as ajouté $P(A\cap B)$ au lieu de le retrancher.` },
      level: 1 },
    { id: 'm12-q-009', q: String.raw`On lance deux dés équilibrés. Quelle est la probabilité que la somme vaille 7 ?`,
      choices: [String.raw`$\frac{1}{11}$`, String.raw`$\frac{7}{36}$`, String.raw`$\frac{1}{12}$`, String.raw`$\frac16$`], answer: 3,
      explain: String.raw`36 couples équiprobables ; 6 donnent 7 : $(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)$. $P = \frac{6}{36} = \frac16$.`,
      why: { 0: String.raw`Les 11 sommes possibles (de 2 à 12) ne sont pas équiprobables : il faut raisonner sur les 36 couples.`, 1: String.raw`Il y a 6 couples favorables, pas 7.`, 2: String.raw`Tu n'as compté que 3 couples (sans l'ordre) : $(3,4)$ et $(4,3)$ sont deux issues différentes.` },
      level: 1 },
    { id: 'm12-q-010', q: String.raw`On lance 3 fois un dé équilibré. La probabilité d'obtenir au moins un 6 est :`,
      choices: [String.raw`$\frac12$`, String.raw`$1 - \left(\frac56\right)^3$`, String.raw`$\left(\frac16\right)^3$`, String.raw`$1 - \left(\frac16\right)^3$`], answer: 1,
      explain: String.raw`Contraire de « aucun 6 » : $1 - \left(\frac56\right)^3 = \frac{91}{216} \approx 0{,}42$ (lancers indépendants).`,
      why: { 0: String.raw`$3\times\frac16$ additionne des événements non incompatibles (on peut avoir plusieurs 6) : avec 6 lancers, on obtiendrait 1, ce qui est absurde.`, 2: String.raw`C'est la probabilité d'obtenir trois 6.`, 3: String.raw`C'est le contraire de « trois 6 », pas le contraire de « aucun 6 ».` },
      level: 2 },
    { id: 'm12-q-011', q: String.raw`Si $P(B) \gt 0$, la probabilité de $A$ sachant $B$ est :`,
      choices: [String.raw`$\dfrac{P(A\cap B)}{P(B)}$`, String.raw`$\dfrac{P(A\cap B)}{P(A)}$`, String.raw`$P(A)\,P(B)$`, String.raw`$\dfrac{P(A)}{P(B)}$`], answer: 0,
      explain: String.raw`On restreint l'univers à $B$ : $P_B(A) = \frac{P(A\cap B)}{P(B)}$.`,
      why: { 1: String.raw`C'est $P_A(B)$, probabilité de $B$ sachant $A$ : on divise par la probabilité de l'événement <b>connu</b>.`, 2: String.raw`$P(A)P(B)$ vaut $P(A\cap B)$ seulement si $A$ et $B$ sont indépendants.`, 3: String.raw`Il faut l'intersection au numérateur ; $\frac{P(A)}{P(B)}$ peut même dépasser 1.` },
      level: 1 },
    { id: 'm12-q-012', q: String.raw`$A$ et $B$ sont indépendants, avec $P(A) = 0{,}3$ et $P(B) = 0{,}5$. Que vaut $P(A\cap B)$ ?`,
      choices: [String.raw`$0{,}8$`, String.raw`$0{,}65$`, String.raw`$0{,}15$`, String.raw`$0$`], answer: 2,
      explain: String.raw`Indépendance : $P(A\cap B) = P(A)P(B) = 0{,}3\times 0{,}5 = 0{,}15$.`,
      why: { 0: String.raw`On ne fait pas la somme : $0{,}8$ serait $P(A\cup B)$ si les événements étaient incompatibles.`, 1: String.raw`$0{,}65 = 0{,}3 + 0{,}5 - 0{,}15$ est $P(A\cup B)$, pas $P(A\cap B)$.`, 3: String.raw`$P(A\cap B) = 0$ caractériserait des événements incompatibles, pas indépendants.` },
      level: 1 },
    { id: 'm12-q-013', q: String.raw`Deux événements incompatibles $A$ et $B$, avec $P(A) \gt 0$ et $P(B) \gt 0$, sont :`,
      choices: [String.raw`toujours indépendants`, String.raw`indépendants si $P(A) = P(B)$`, String.raw`toujours contraires`, String.raw`jamais indépendants`], answer: 3,
      explain: String.raw`$P(A\cap B) = 0$ alors que $P(A)P(B) \gt 0$ : la formule produit est fausse. Intuitivement, savoir que $A$ est réalisé apprend que $B$ ne l'est pas.`,
      why: { 0: String.raw`Confusion classique entre incompatibilité et indépendance : ici $P(A\cap B) = 0 \neq P(A)P(B)$.`, 1: String.raw`Même avec $P(A) = P(B)$, on a $0 \neq P(A)^2$.`, 2: String.raw`Contraires exige en plus $A\cup B = \Omega$ ; deux faces d'un dé (« 1 » et « 2 ») sont incompatibles sans être contraires.` },
      level: 2 },
    { id: 'm12-q-014', q: String.raw`La formule des probabilités totales $P(A) = \sum_i P(B_i)P_{B_i}(A)$ suppose que les $B_i$ :`,
      choices: [String.raw`forment un système complet d'événements`, String.raw`sont deux à deux indépendants`, String.raw`ont tous la même probabilité`, String.raw`sont tous inclus dans $A$`], answer: 0,
      explain: String.raw`Il faut une partition de $\Omega$ : les $B_i$ sont deux à deux incompatibles, de réunion $\Omega$ (et de probabilités non nulles). Alors $A$ est la réunion disjointe des $A\cap B_i$.`,
      why: { 1: String.raw`L'indépendance n'est pas requise ; il faut au contraire des $B_i$ incompatibles qui recouvrent $\Omega$.`, 2: String.raw`Les $B_i$ peuvent avoir des probabilités différentes (ex. 60 % / 40 %).`, 3: String.raw`Ce n'est pas nécessaire ; les $B_i$ doivent recouvrir tout $\Omega$.` },
      level: 2 },
    { id: 'm12-q-015', q: String.raw`Une maladie touche 1 % de la population. Un test est positif chez 99 % des malades et chez 5 % des personnes saines. Une personne a un test positif : la probabilité qu'elle soit malade vaut environ :`,
      choices: [String.raw`$99\,\%$`, String.raw`$95\,\%$`, String.raw`$17\,\%$`, String.raw`$1\,\%$`], answer: 2,
      explain: String.raw`$P(T) = 0{,}01\times 0{,}99 + 0{,}99\times 0{,}05 = 0{,}0594$ ; Bayes : $P_T(M) = \frac{0{,}0099}{0{,}0594} = \frac16 \approx 17\,\%$. Les faux positifs (parmi les 99 % de sains) sont 5 fois plus nombreux que les vrais positifs.`,
      why: { 0: String.raw`$99\,\%$ est $P_M(T)$ (positif sachant malade) : on ne peut pas inverser le conditionnement sans Bayes.`, 1: String.raw`$95\,\%$ est la probabilité d'un test négatif chez un sain, sans rapport direct avec la question.`, 3: String.raw`C'est la probabilité <b>avant</b> le test ; le résultat positif apporte de l'information et l'augmente.` },
      level: 3 },
    { id: 'm12-q-016', q: String.raw`Pour une variable aléatoire $X$ et des réels $a$, $b$, $E(aX + b)$ vaut :`,
      choices: [String.raw`$a^2E(X) + b$`, String.raw`$aE(X) + b$`, String.raw`$aE(X)$`], answer: 1,
      explain: String.raw`L'espérance est linéaire : $E(aX + b) = aE(X) + b$.`,
      why: { 0: String.raw`Le carré $a^2$ apparaît dans la <b>variance</b>, pas dans l'espérance.`, 2: String.raw`La constante $b$ se retrouve dans l'espérance (seule la variance l'élimine).` },
      level: 1 },
    { id: 'm12-q-017', q: String.raw`Pour une variable aléatoire $X$ et des réels $a$, $b$, $V(aX + b)$ vaut :`,
      choices: [String.raw`$aV(X) + b$`, String.raw`$a^2V(X) + b$`, String.raw`$a^2V(X)$`, String.raw`$|a|\,V(X)$`], answer: 2,
      explain: String.raw`La variance est quadratique et insensible aux translations : $V(aX + b) = a^2V(X)$.`,
      why: { 0: String.raw`La variance n'est pas linéaire : le facteur sort au carré et la constante disparaît.`, 1: String.raw`Décaler $X$ de $b$ ne change pas sa dispersion : $b$ disparaît.`, 3: String.raw`C'est l'<b>écart-type</b> qui est multiplié par $|a|$ ; la variance l'est par $a^2$.` },
      level: 1 },
    { id: 'm12-q-018', q: String.raw`La formule de König-Huygens donne $V(X) =$ :`,
      choices: [String.raw`$E(X)^2 - E(X^2)$`, String.raw`$E(X^2) - E(X)$`, String.raw`$E(X^2) + E(X)^2$`, String.raw`$E(X^2) - E(X)^2$`], answer: 3,
      explain: String.raw`$V(X) = E[(X - \mu)^2] = E(X^2) - 2\mu E(X) + \mu^2 = E(X^2) - E(X)^2$ (« moyenne des carrés moins carré de la moyenne »).`,
      why: { 0: String.raw`L'ordre est inversé : ce résultat serait négatif ou nul, or une variance est positive.`, 1: String.raw`On soustrait le <b>carré</b> de l'espérance.`, 2: String.raw`On soustrait $E(X)^2$, on ne l'ajoute pas.` },
      level: 1 },
    { id: 'm12-q-019', q: String.raw`L'égalité $V(X + Y) = V(X) + V(Y)$ est vraie :`,
      choices: [String.raw`toujours`, String.raw`si $X$ et $Y$ sont indépendantes`, String.raw`si $E(X) = E(Y)$`, String.raw`jamais`], answer: 1,
      explain: String.raw`En général $V(X + Y) = V(X) + V(Y) + 2\operatorname{Cov}(X, Y)$ ; la covariance est nulle si $X$ et $Y$ sont indépendantes.`,
      why: { 0: String.raw`Contre-exemple : $Y = X$ donne $V(2X) = 4V(X) \neq 2V(X)$.`, 2: String.raw`L'égalité des espérances ne joue aucun rôle ; c'est la covariance qui compte.`, 3: String.raw`Elle est vraie dès que $X$ et $Y$ sont indépendantes (ou simplement non corrélées).` },
      level: 2 },
    { id: 'm12-q-020', q: String.raw`Si $X$ suit la loi binomiale $\mathcal{B}(n, p)$, alors $E(X)$ vaut :`,
      choices: [String.raw`$np$`, String.raw`$np(1-p)$`, String.raw`$p$`, String.raw`$\frac{n}{p}$`], answer: 0,
      explain: String.raw`$X$ est la somme de $n$ variables de Bernoulli d'espérance $p$ : $E(X) = np$.`,
      why: { 1: String.raw`$np(1-p)$ est la <b>variance</b>.`, 2: String.raw`$p$ est l'espérance d'une seule épreuve de Bernoulli ; il y en a $n$.`, 3: String.raw`On multiplie : $n$ épreuves, chacune apportant en moyenne $p$ succès.` },
      level: 1 },
    { id: 'm12-q-021', q: String.raw`$X$ suit $\mathcal{B}(20;\ 0{,}5)$. Que vaut $V(X)$ ?`,
      choices: [String.raw`$10$`, String.raw`$5$`, String.raw`$\sqrt5$`, String.raw`$2{,}5$`], answer: 1,
      explain: String.raw`$V(X) = np(1-p) = 20\times 0{,}5\times 0{,}5 = 5$.`,
      why: { 0: String.raw`$10 = np$ est l'espérance.`, 2: String.raw`$\sqrt5$ est l'écart-type.`, 3: String.raw`Tu as multiplié une fois de trop par $0{,}5$ : $np(1-p) = 10\times 0{,}5$.` },
      level: 1 },
    { id: 'm12-q-022', q: String.raw`Laquelle de ces variables ne suit <b>pas</b> une loi binomiale ?`,
      choices: [String.raw`Le nombre de 6 obtenus en 10 lancers d'un dé`, String.raw`Le nombre de « pile » en 20 lancers d'une pièce`, String.raw`Le nombre de boules rouges obtenues en tirant 5 boules <b>sans remise</b> dans une urne de 10 boules dont 4 rouges`, String.raw`Le nombre de pièces défectueuses parmi 50 pièces tirées <b>avec remise</b> dans un stock`], answer: 2,
      explain: String.raw`Sans remise, la composition de l'urne change à chaque tirage : les épreuves ne sont ni indépendantes ni de même probabilité. C'est une loi hypergéométrique.`,
      why: { 0: String.raw`10 épreuves indépendantes identiques (succès « 6 », $p = \frac16$) : c'est $\mathcal{B}(10, \frac16)$.`, 1: String.raw`20 épreuves indépendantes de probabilité $\frac12$ : $\mathcal{B}(20, \frac12)$.`, 3: String.raw`Avec remise, les tirages sont indépendants et de même probabilité : loi binomiale.` },
      level: 2 },
    { id: 'm12-q-023', q: String.raw`On lance un dé équilibré jusqu'à obtenir un 6. En moyenne, combien de lancers faut-il ?`,
      choices: [String.raw`$6$`, String.raw`$\frac16$`, String.raw`$5$`, String.raw`$3{,}5$`], answer: 0,
      explain: String.raw`Le rang du premier 6 suit la loi géométrique $\mathcal{G}\left(\frac16\right)$, d'espérance $\frac1p = 6$.`,
      why: { 1: String.raw`$\frac16$ est la probabilité de succès $p$ ; l'espérance est $\frac1p$.`, 2: String.raw`5 est le nombre moyen d'<b>échecs</b> avant le succès ($\frac{1-p}{p}$) ; on compte ici les lancers, succès inclus.`, 3: String.raw`3,5 est la valeur moyenne d'un lancer de dé, pas le temps d'attente.` },
      level: 2 },
    { id: 'm12-q-024', q: String.raw`Si $X$ suit la loi de Poisson $\mathcal{P}(\lambda)$ :`,
      choices: [String.raw`$E(X) = \lambda$ et $V(X) = \lambda^2$`, String.raw`$E(X) = V(X) = \lambda$`, String.raw`$E(X) = \frac1\lambda$ et $V(X) = \frac{1}{\lambda^2}$`, String.raw`$E(X) = \lambda$ et $V(X) = \sqrt\lambda$`], answer: 1,
      explain: String.raw`Propriété caractéristique de la loi de Poisson : espérance et variance sont toutes deux égales à $\lambda$.`,
      why: { 0: String.raw`La variance vaut $\lambda$, pas $\lambda^2$.`, 2: String.raw`Ce sont l'espérance et la variance de la loi <b>exponentielle</b> $\mathcal{E}(\lambda)$.`, 3: String.raw`$\sqrt\lambda$ est l'écart-type, pas la variance.` },
      level: 1 },
    { id: 'm12-q-025', q: String.raw`La loi de Poisson est le modèle naturel pour :`,
      choices: [String.raw`la durée de vie d'un composant`, String.raw`la taille d'un individu dans une population`, String.raw`le nombre de succès en exactement $n$ essais de probabilité $\frac12$`, String.raw`le nombre de pannes d'un serveur en une semaine`], answer: 3,
      explain: String.raw`Poisson compte des événements rares, indépendants, survenant au cours du temps (ou dans l'espace) : pannes, appels, arrivées de clients, défauts.`,
      why: { 0: String.raw`Une durée est une variable continue : loi exponentielle (sans vieillissement) ou autre loi à densité.`, 1: String.raw`Une taille est continue et résulte de nombreux facteurs : loi normale.`, 2: String.raw`Nombre fixé d'essais indépendants de même probabilité : loi binomiale $\mathcal{B}\left(n, \frac12\right)$.` },
      level: 2 },
    { id: 'm12-q-026', q: String.raw`Parmi ces affirmations sur une densité de probabilité $f$, laquelle est <b>vraie</b> ?`,
      choices: [String.raw`$f(x) \leq 1$ pour tout $x$`, String.raw`$P(X = a) = f(a)$`, String.raw`$f \geq 0$ et $\int_{-\infty}^{+\infty} f(x)\,\mathrm{d}x = 1$`, String.raw`$f$ est croissante`], answer: 2,
      explain: String.raw`Ce sont les deux conditions qui définissent une densité ; les probabilités s'obtiennent comme des aires sous la courbe.`,
      why: { 0: String.raw`Faux : la densité de $\mathcal{U}([0;\ 0{,}5])$ vaut 2. Seule l'aire totale est égale à 1.`, 1: String.raw`Pour une variable à densité, $P(X = a) = 0$ ; $f(a)$ n'est pas une probabilité.`, 3: String.raw`C'est la fonction de répartition $F$ qui est croissante ; une densité peut décroître (exponentielle).` },
      level: 1 },
    { id: 'm12-q-027', q: String.raw`$X$ est une variable à densité. Que vaut $P(X = 2)$ ?`,
      choices: [String.raw`$0$`, String.raw`$f(2)$`, String.raw`$F(2)$`, String.raw`On ne peut pas savoir`], answer: 0,
      explain: String.raw`$P(X = 2) = \int_2^2 f(t)\,\mathrm{d}t = 0$. C'est pour cela que $P(X \lt 2) = P(X \leq 2)$.`,
      why: { 1: String.raw`$f(2)$ est une densité (probabilité par unité de longueur), pas une probabilité.`, 2: String.raw`$F(2) = P(X \leq 2)$, probabilité d'un intervalle entier.`, 3: String.raw`Pour toute variable à densité, la probabilité d'une valeur isolée est nulle.` },
      level: 1 },
    { id: 'm12-q-028', q: String.raw`Si $X$ suit la loi exponentielle de paramètre $\lambda$, alors $E(X)$ vaut :`,
      choices: [String.raw`$\lambda$`, String.raw`$\frac1\lambda$`, String.raw`$\frac{1}{\lambda^2}$`, String.raw`$\mathrm{e}^{-\lambda}$`], answer: 1,
      explain: String.raw`$E(X) = \int_0^{+\infty} x\lambda\mathrm{e}^{-\lambda x}\,\mathrm{d}x = \frac1\lambda$ (intégration par parties). $\lambda$ est un taux (pannes par heure), $\frac1\lambda$ une durée moyenne.`,
      why: { 0: String.raw`$\lambda$ est l'espérance d'une loi de <b>Poisson</b> ; pour l'exponentielle, c'est $\frac1\lambda$.`, 2: String.raw`$\frac{1}{\lambda^2}$ est la variance.`, 3: String.raw`$\mathrm{e}^{-\lambda} = P(X \gt 1)$, ce n'est pas l'espérance.` },
      level: 1 },
    { id: 'm12-q-029', q: String.raw`La durée de vie $X$ d'un composant suit une loi exponentielle. Sachant qu'il a déjà fonctionné 1000 h, la probabilité qu'il fonctionne encore au moins 500 h est égale à :`,
      choices: [String.raw`$P(X \gt 1500)$`, String.raw`$P(X \gt 1000)\times P(X \gt 1500)$`, String.raw`$1 - P(X \leq 1000)$`, String.raw`$P(X \gt 500)$`], answer: 3,
      explain: String.raw`Absence de mémoire : $P_{X \gt 1000}(X \gt 1500) = \frac{\mathrm{e}^{-1500\lambda}}{\mathrm{e}^{-1000\lambda}} = \mathrm{e}^{-500\lambda} = P(X \gt 500)$.`,
      why: { 0: String.raw`C'est la probabilité non conditionnelle de durer 1500 h ; il faut diviser par $P(X \gt 1000)$.`, 1: String.raw`On divise par $P(X \gt 1000)$ (définition de la probabilité conditionnelle), on ne multiplie pas.`, 2: String.raw`$1 - P(X \leq 1000) = P(X \gt 1000)$ : probabilité d'atteindre 1000 h, pas de durer 500 h de plus.` },
      level: 3 },
    { id: 'm12-q-030', q: String.raw`Si $X \sim \mathcal{N}(\mu, \sigma^2)$, quelle variable suit la loi $\mathcal{N}(0, 1)$ ?`,
      choices: [String.raw`$\dfrac{X - \mu}{\sigma^2}$`, String.raw`$\dfrac{X - \mu}{\sigma}$`, String.raw`$\dfrac{X - \sigma}{\mu}$`, String.raw`$\dfrac{X}{\sigma} - \mu$`], answer: 1,
      explain: String.raw`On centre (on retire $\mu$) puis on réduit (on divise par l'écart-type $\sigma$) : $E(Z) = 0$ et $V(Z) = \frac{\sigma^2}{\sigma^2} = 1$.`,
      why: { 0: String.raw`On divise par l'écart-type $\sigma$, pas par la variance $\sigma^2$ : sinon $V(Z) = \frac{1}{\sigma^2}$.`, 2: String.raw`Les rôles de $\mu$ et $\sigma$ sont inversés.`, 3: String.raw`Il faut retirer $\mu$ <b>avant</b> de diviser : $E\left(\frac{X}{\sigma} - \mu\right) = \frac{\mu}{\sigma} - \mu \neq 0$ en général.` },
      level: 1 },
    { id: 'm12-q-031', q: String.raw`Pour $X \sim \mathcal{N}(\mu, \sigma^2)$, $P(\mu - 2\sigma \leq X \leq \mu + 2\sigma)$ vaut environ :`,
      choices: [String.raw`$0{,}68$`, String.raw`$0{,}95$`, String.raw`$0{,}997$`, String.raw`$0{,}5$`], answer: 1,
      explain: String.raw`Règle 68-95-99,7 : environ 95 % des valeurs à moins de $2\sigma$ de la moyenne (précisément $0{,}9545$).`,
      why: { 0: String.raw`$0{,}68$ correspond à l'intervalle $\mu \pm \sigma$.`, 2: String.raw`$0{,}997$ correspond à $\mu \pm 3\sigma$.`, 3: String.raw`$0{,}5$ est $P(X \leq \mu)$, par symétrie.` },
      level: 1 },
    { id: 'm12-q-032', q: String.raw`Sachant que $\Phi(1{,}96) \approx 0{,}975$, que vaut $\Phi(-1{,}96)$ ?`,
      choices: [String.raw`$0{,}025$`, String.raw`$-0{,}975$`, String.raw`$0{,}975$`, String.raw`$0{,}05$`], answer: 0,
      explain: String.raw`Par symétrie de la cloche : $\Phi(-x) = 1 - \Phi(x) = 1 - 0{,}975 = 0{,}025$.`,
      why: { 1: String.raw`Une probabilité n'est jamais négative : $\Phi(-x) = 1 - \Phi(x)$, pas $-\Phi(x)$.`, 2: String.raw`$\Phi$ est croissante : $\Phi(-1{,}96) \lt \Phi(0) = 0{,}5$.`, 3: String.raw`$0{,}05 = P(|Z| \gt 1{,}96)$ regroupe les deux queues ; une seule queue vaut $0{,}025$.` },
      level: 2 },
    { id: 'm12-q-033', q: String.raw`D'après le théorème central limite, la moyenne $\overline{X}_n$ de $n$ variables indépendantes de même loi (espérance $\mu$, variance $\sigma^2$) suit approximativement, pour $n$ grand :`,
      choices: [String.raw`$\mathcal{N}(\mu, \sigma^2)$`, String.raw`$\mathcal{N}(n\mu, n\sigma^2)$`, String.raw`$\mathcal{N}\left(\mu, \frac{\sigma^2}{n}\right)$`, String.raw`la même loi que les $X_i$`], answer: 2,
      explain: String.raw`$E(\overline{X}_n) = \mu$, $V(\overline{X}_n) = \frac{\sigma^2}{n}$, et le TCL affirme que la loi devient gaussienne : $\overline{X}_n \approx \mathcal{N}\left(\mu, \frac{\sigma^2}{n}\right)$.`,
      why: { 0: String.raw`La moyenne est moins dispersée que chaque $X_i$ : sa variance est divisée par $n$.`, 1: String.raw`C'est la loi approchée de la <b>somme</b> $X_1 + \dots + X_n$, pas de la moyenne.`, 3: String.raw`Tout l'intérêt du TCL : quelle que soit la loi des $X_i$, la moyenne devient approximativement normale.` },
      level: 2 },
    { id: 'm12-q-034', q: String.raw`Quelle est la médiane de la série $1,\ 3,\ 4,\ 7,\ 100$ ?`,
      choices: [String.raw`$23$`, String.raw`$7$`, String.raw`$4$`], answer: 2,
      explain: String.raw`La série est triée et comporte 5 valeurs : la médiane est la 3e, soit 4. La valeur extrême 100 ne l'influence pas, alors que la moyenne vaut 23.`,
      why: { 0: String.raw`23 est la <b>moyenne</b>, tirée vers le haut par la valeur extrême 100.`, 1: String.raw`7 est la 4e valeur ; avec 5 valeurs, la médiane est la 3e.` },
      level: 1 },
    { id: 'm12-q-035', q: String.raw`Pour diviser par 2 la largeur d'un intervalle de confiance d'une moyenne (même niveau de confiance), il faut multiplier la taille de l'échantillon par :`,
      choices: [String.raw`$2$`, String.raw`$\sqrt2$`, String.raw`$8$`, String.raw`$4$`], answer: 3,
      explain: String.raw`La largeur vaut $2\times 1{,}96\frac{\sigma}{\sqrt n}$, proportionnelle à $\frac{1}{\sqrt n}$ : pour la diviser par 2, il faut $\sqrt n$ deux fois plus grand, donc $n$ quatre fois plus grand.`,
      why: { 0: String.raw`Doubler $n$ ne divise la largeur que par $\sqrt2 \approx 1{,}41$.`, 1: String.raw`C'est l'inverse : $n$ doit être multiplié par $2^2$, pas par $\sqrt2$.`, 2: String.raw`8 fois plus de mesures diviseraient la largeur par $\sqrt8 \approx 2{,}83$ : c'est plus que nécessaire.` },
      level: 3 }
  ],

  exercises: [
    { id: 'm12-x-001',
      prompt: String.raw`De combien de façons peut-on ranger 5 livres différents sur une étagère ?`,
      answer: '120', vars: [], check: 'value',
      mistakes: [{ expr: '25', msg: String.raw`$5^2$ ne compte pas les rangements : il y a 5 choix pour la 1re place, 4 pour la 2e, etc.` }, { expr: '15', msg: String.raw`On multiplie les choix successifs, on ne les additionne pas : $5\times 4\times 3\times 2\times 1$.` }],
      hint: String.raw`Nombre de permutations de $n$ objets : $n!$.`,
      explain: String.raw`$5! = 5\times 4\times 3\times 2\times 1 = 120$.`,
      level: 1 },
    { id: 'm12-x-002',
      prompt: String.raw`6 personnes se serrent la main deux à deux (une seule fois par paire). Combien de poignées de main ?`,
      answer: '15', vars: [], check: 'value',
      mistakes: [{ expr: '30', msg: String.raw`Tu as compté chaque poignée de main deux fois (A-B et B-A) : l'ordre ne compte pas, divise par $2!$.` }, { expr: '36', msg: String.raw`Une personne ne se serre pas la main à elle-même, et l'ordre ne compte pas.` }],
      hint: String.raw`Une poignée de main = une paire non ordonnée : $\binom{6}{2}$.`,
      explain: String.raw`$\binom{6}{2} = \frac{6\times 5}{2} = 15$.`,
      level: 1 },
    { id: 'm12-x-003',
      prompt: String.raw`8 coureurs disputent une course. Combien de podiums (or, argent, bronze) différents sont possibles ?`,
      answer: '336', vars: [], check: 'value',
      mistakes: [
        { expr: '56', msg: String.raw`$\binom{8}{3} = 56$ ignore l'ordre ; or sur un podium, l'or et l'argent ne sont pas interchangeables.` },
        { expr: '512', msg: String.raw`$8^3$ autorise qu'un même coureur occupe plusieurs marches.` }
      ],
      hint: String.raw`Ordre important, pas de répétition : arrangements $A_8^3$.`,
      explain: String.raw`$A_8^3 = 8\times 7\times 6 = 336$.`,
      level: 1 },
    { id: 'm12-x-004',
      prompt: String.raw`Combien de codes de 4 chiffres (de 0 à 9, répétitions autorisées) existe-t-il ?`,
      answer: '10000', vars: [], check: 'value',
      mistakes: [
        { expr: '5040', msg: String.raw`$10\times 9\times 8\times 7$ interdit les répétitions ; un code comme 7777 est permis.` },
        { expr: '210', msg: String.raw`$\binom{10}{4}$ ignore l'ordre et les répétitions ; or 1234 et 4321 sont des codes différents.` }
      ],
      hint: String.raw`Ordre important et répétitions : $n^p$.`,
      explain: String.raw`10 choix pour chacun des 4 chiffres : $10^4 = 10\,000$.`,
      level: 1 },
    { id: 'm12-x-005',
      prompt: String.raw`Combien de mains de 5 cartes peut-on former avec un jeu de 32 cartes ?`,
      answer: '201376', vars: [], check: 'value',
      mistakes: [{ expr: '24165120', msg: String.raw`$32\times 31\times 30\times 29\times 28$ tient compte de l'ordre ; une main est un ensemble : divise par $5! = 120$.` }],
      hint: String.raw`$\binom{32}{5} = \frac{32\times 31\times 30\times 29\times 28}{5!}$. (Tu peux taper binom(32, 5).)`,
      explain: String.raw`$\binom{32}{5} = \frac{24\,165\,120}{120} = 201\,376$.`,
      level: 2 },
    { id: 'm12-x-006',
      prompt: String.raw`Combien d'anagrammes (mots, ayant un sens ou non) peut-on former avec les lettres du mot ESEO ?`,
      answer: '12', vars: [], check: 'value',
      mistakes: [{ expr: '24', msg: String.raw`$4! = 24$ compte deux fois chaque mot, car échanger les deux E ne change rien : divise par $2!$.` }],
      hint: String.raw`4 lettres dont le E répété 2 fois : $\frac{4!}{2!}$.`,
      explain: String.raw`$\frac{4!}{2!} = \frac{24}{2} = 12$.`,
      level: 2 },
    { id: 'm12-x-007',
      prompt: String.raw`On forme un comité de 2 femmes choisies parmi 5 et de 3 hommes choisis parmi 6. Combien de comités possibles ?`,
      answer: '200', vars: [], check: 'value',
      mistakes: [
        { expr: '30', msg: String.raw`Les deux choix se font successivement : on <b>multiplie</b> $\binom52 = 10$ par $\binom63 = 20$.` },
        { expr: '462', msg: String.raw`$\binom{11}{5}$ ne respecte pas la contrainte « 2 femmes et 3 hommes ».` }
      ],
      hint: String.raw`Principe multiplicatif : $\binom{5}{2}\times\binom{6}{3}$.`,
      explain: String.raw`$\binom{5}{2} = 10$, $\binom{6}{3} = 20$, donc $10\times 20 = 200$ comités.`,
      level: 2 },
    { id: 'm12-x-008',
      prompt: String.raw`Dans un jeu de 32 cartes (dont 4 as), combien de mains de 5 cartes contiennent exactement 2 as ?`,
      answer: '19656', vars: [], check: 'value',
      mistakes: [{ expr: '29760', msg: String.raw`Les 3 autres cartes doivent être choisies parmi les 28 non-as (sinon tu peux avoir plus de 2 as) : $\binom{28}{3}$, pas $\binom{32}{3}$.` }],
      hint: String.raw`2 as parmi 4, puis 3 cartes parmi les 28 qui ne sont pas des as.`,
      explain: String.raw`$\binom{4}{2}\times\binom{28}{3} = 6\times\frac{28\times 27\times 26}{6} = 6\times 3276 = 19\,656$.`,
      level: 3 },
    { id: 'm12-x-009',
      prompt: String.raw`On lance deux dés équilibrés. Quelle est la probabilité que la somme soit égale à 7 ? (fraction exacte)`,
      answer: '1/6', vars: [], check: 'value',
      mistakes: [
        { expr: '1/11', msg: String.raw`Les 11 sommes possibles ne sont pas équiprobables : raisonne sur les 36 couples $(d_1, d_2)$.` },
        { expr: '1/12', msg: String.raw`Tu as oublié l'ordre : $(3, 4)$ et $(4, 3)$ sont deux issues distinctes.` }
      ],
      hint: String.raw`36 couples équiprobables ; compte ceux de somme 7.`,
      explain: String.raw`Couples favorables : $(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)$, soit 6 sur 36 : $P = \frac{6}{36} = \frac16$.`,
      level: 1 },
    { id: 'm12-x-010',
      prompt: String.raw`On lance 4 fois un dé équilibré. Quelle est la probabilité d'obtenir au moins un 6 ? (valeur exacte)`,
      answer: '1-(5/6)^4', vars: [], check: 'value',
      mistakes: [
        { expr: '2/3', msg: String.raw`$4\times\frac16$ additionne des événements non incompatibles (on peut obtenir plusieurs 6). Passe par le contraire.` },
        { expr: '(5/6)^4', msg: String.raw`C'est la probabilité de n'obtenir <b>aucun</b> 6 ; il faut prendre le complémentaire.` }
      ],
      hint: String.raw`Contraire de « au moins un 6 » : « aucun 6 », de probabilité $\left(\frac56\right)^4$.`,
      explain: String.raw`Lancers indépendants : $P(\text{aucun } 6) = \left(\frac56\right)^4 = \frac{625}{1296}$, donc $P = 1 - \frac{625}{1296} = \frac{671}{1296} \approx 0{,}518$.`,
      level: 2 },
    { id: 'm12-x-011',
      prompt: String.raw`On sait que $P(A\cap B) = 0{,}12$ et $P(B) = 0{,}4$. Calcule $P_B(A)$.`,
      answer: '3/10', vars: [], check: 'value',
      mistakes: [{ expr: '0.048', msg: String.raw`On <b>divise</b> par $P(B)$ : $P_B(A) = \frac{P(A\cap B)}{P(B)}$.` }],
      hint: String.raw`$P_B(A) = \dfrac{P(A\cap B)}{P(B)}$.`,
      explain: String.raw`$P_B(A) = \frac{0{,}12}{0{,}4} = 0{,}3$.`,
      level: 1 },
    { id: 'm12-x-012',
      prompt: String.raw`Une usine a deux machines. $M_1$ produit 60 % des pièces, dont 2 % sont défectueuses ; $M_2$ produit 40 % des pièces, dont 5 % sont défectueuses. Quelle est la probabilité qu'une pièce prise au hasard soit défectueuse ? (valeur exacte)`,
      answer: '4/125', vars: [], check: 'value',
      mistakes: [
        { expr: '0.07', msg: String.raw`On n'additionne pas les taux : chacun doit être pondéré par la part de production de sa machine.` },
        { expr: '0.035', msg: String.raw`La moyenne simple des taux suppose que les machines produisent autant ; il faut pondérer par 60 % et 40 %.` }
      ],
      hint: String.raw`Probabilités totales : $P(D) = P(M_1)P_{M_1}(D) + P(M_2)P_{M_2}(D)$.`,
      explain: String.raw`$P(D) = 0{,}6\times 0{,}02 + 0{,}4\times 0{,}05 = 0{,}012 + 0{,}02 = 0{,}032 = \frac{4}{125}$.`,
      level: 2 },
    { id: 'm12-x-013',
      prompt: String.raw`Même usine : $M_1$ produit 60 % des pièces (2 % défectueuses), $M_2$ 40 % (5 % défectueuses). Une pièce est défectueuse : quelle est la probabilité qu'elle vienne de $M_1$ ? (fraction exacte)`,
      answer: '3/8', vars: [], check: 'value',
      mistakes: [
        { expr: '5/8', msg: String.raw`C'est $P_D(M_2)$ : tu as pris le chemin de la mauvaise machine.` },
        { expr: '0.6', msg: String.raw`$0{,}6$ est la probabilité <b>avant</b> de savoir que la pièce est défectueuse ; utilise Bayes.` }
      ],
      hint: String.raw`Bayes : $P_D(M_1) = \dfrac{P(M_1)P_{M_1}(D)}{P(D)}$ avec $P(D) = 0{,}032$.`,
      explain: String.raw`$P_D(M_1) = \frac{0{,}6\times 0{,}02}{0{,}032} = \frac{0{,}012}{0{,}032} = \frac{12}{32} = \frac38$. Bien que $M_1$ produise plus, elle fournit moins de la moitié des pièces défectueuses.`,
      level: 3 },
    { id: 'm12-x-014',
      prompt: String.raw`Une maladie touche 1 % de la population. Un test est positif chez 99 % des malades et chez 5 % des personnes saines. Quelle est la probabilité qu'une personne testée positive soit malade ? (fraction exacte)`,
      answer: '1/6', vars: [], check: 'value',
      mistakes: [
        { expr: '99/100', msg: String.raw`$0{,}99$ est $P_M(T)$, la probabilité d'être positif <b>sachant</b> malade : il faut inverser le conditionnement avec Bayes.` },
        { expr: '1/100', msg: String.raw`$0{,}01$ est la probabilité d'être malade sans information ; le test positif modifie cette probabilité.` }
      ],
      hint: String.raw`$P(T) = 0{,}01\times 0{,}99 + 0{,}99\times 0{,}05$, puis $P_T(M) = \frac{0{,}01\times 0{,}99}{P(T)}$.`,
      explain: String.raw`$P(T) = 0{,}0099 + 0{,}0495 = 0{,}0594$ et $P_T(M) = \frac{0{,}0099}{0{,}0594} = \frac16 \approx 16{,}7\,\%$.`,
      level: 3 },
    { id: 'm12-x-015',
      prompt: String.raw`Une urne contient 3 boules rouges et 2 bleues. On tire successivement 2 boules <b>sans remise</b>. Quelle est la probabilité d'obtenir 2 boules rouges ?`,
      answer: '3/10', vars: [], check: 'value',
      mistakes: [{ expr: '9/25', msg: String.raw`$\left(\frac35\right)^2$ correspond à un tirage <b>avec</b> remise ; après le 1er tirage, il ne reste que 2 rouges sur 4 boules.` }],
      hint: String.raw`Probabilités composées : $P(R_1\cap R_2) = P(R_1)\,P_{R_1}(R_2)$.`,
      explain: String.raw`$P = \frac35\times\frac24 = \frac{6}{20} = \frac{3}{10}$. (Vérification par dénombrement : $\frac{\binom32}{\binom52} = \frac{3}{10}$.)`,
      level: 2 },
    { id: 'm12-x-016',
      prompt: String.raw`$X$ prend les valeurs $-1$, $0$, $2$ avec les probabilités $0{,}2$ ; $0{,}5$ ; $0{,}3$. Calcule $E(X)$.`,
      answer: '2/5', vars: [], check: 'value',
      mistakes: [{ expr: '1/3', msg: String.raw`$\frac{-1 + 0 + 2}{3}$ est la moyenne simple des valeurs ; l'espérance les pondère par leurs probabilités.` }],
      hint: String.raw`$E(X) = \sum x_i\,p_i$.`,
      explain: String.raw`$E(X) = -1\times 0{,}2 + 0\times 0{,}5 + 2\times 0{,}3 = -0{,}2 + 0{,}6 = 0{,}4$.`,
      level: 1 },
    { id: 'm12-x-017',
      prompt: String.raw`Même variable : $X$ prend les valeurs $-1$, $0$, $2$ avec les probabilités $0{,}2$ ; $0{,}5$ ; $0{,}3$. Calcule $V(X)$.`,
      answer: '31/25', vars: [], check: 'value',
      mistakes: [
        { expr: '7/5', msg: String.raw`$1{,}4$ est $E(X^2)$ : il faut retrancher $E(X)^2 = 0{,}16$.` },
        { expr: '1', msg: String.raw`On retranche le <b>carré</b> de l'espérance : $E(X)^2 = 0{,}4^2 = 0{,}16$, pas $0{,}4$.` }
      ],
      hint: String.raw`König-Huygens : $V(X) = E(X^2) - E(X)^2$, avec $E(X) = 0{,}4$.`,
      explain: String.raw`$E(X^2) = 1\times 0{,}2 + 0\times 0{,}5 + 4\times 0{,}3 = 1{,}4$, donc $V(X) = 1{,}4 - 0{,}16 = 1{,}24 = \frac{31}{25}$.`,
      level: 2 },
    { id: 'm12-x-018',
      prompt: String.raw`On a $V(X) = 3$. Calcule $V(-2X + 7)$.`,
      answer: '12', vars: [], check: 'value',
      mistakes: [
        { expr: '-6', msg: String.raw`Le facteur sort <b>au carré</b> : $(-2)^2 = 4$ ; une variance n'est jamais négative.` },
        { expr: '19', msg: String.raw`La constante 7 ne change pas la dispersion : elle disparaît de la variance.` }
      ],
      hint: String.raw`$V(aX + b) = a^2V(X)$.`,
      explain: String.raw`$V(-2X + 7) = (-2)^2\times 3 = 12$.`,
      level: 2 },
    { id: 'm12-x-019',
      prompt: String.raw`On a $V(X) = 9$. Calcule l'écart-type $\sigma(2X + 1)$.`,
      answer: '6', vars: [], check: 'value',
      mistakes: [
        { expr: '36', msg: String.raw`$36 = V(2X + 1)$ : l'écart-type est sa racine carrée.` },
        { expr: '18', msg: String.raw`Tu as multiplié la variance par 2 ; c'est l'écart-type $\sigma(X) = 3$ qui est multiplié par $|a| = 2$.` }
      ],
      hint: String.raw`$\sigma(aX + b) = |a|\,\sigma(X)$ et $\sigma(X) = \sqrt{V(X)}$.`,
      explain: String.raw`$\sigma(X) = 3$, donc $\sigma(2X + 1) = 2\times 3 = 6$ (ou $\sqrt{4\times 9} = 6$).`,
      level: 2 },
    { id: 'm12-x-020',
      prompt: String.raw`On lance un dé équilibré : on gagne 9 points si l'on obtient 6, sinon on perd 2 points. Calcule l'espérance du gain.`,
      answer: '-1/6', vars: [], check: 'value',
      mistakes: [{ expr: '7/2', msg: String.raw`Les deux issues ne sont pas équiprobables : gagner a une probabilité $\frac16$, perdre $\frac56$.` }],
      hint: String.raw`$E(G) = 9\times\frac16 + (-2)\times\frac56$.`,
      explain: String.raw`$E(G) = \frac96 - \frac{10}{6} = -\frac16$ : le jeu est légèrement défavorable au joueur (non équitable).`,
      level: 2 },
    { id: 'm12-x-021',
      prompt: String.raw`$X$ suit la loi binomiale $\mathcal{B}\left(4, \frac12\right)$. Calcule $P(X = 2)$.`,
      answer: '3/8', vars: [], check: 'value',
      mistakes: [
        { expr: '1/16', msg: String.raw`Tu as oublié le coefficient $\binom42 = 6$ (nombre de positions possibles des 2 succès).` },
        { expr: '1/2', msg: String.raw`2 est la valeur la plus probable, mais sa probabilité n'est pas $\frac12$ : calcule $\binom42\left(\frac12\right)^4$.` }
      ],
      hint: String.raw`$P(X = k) = \binom{n}{k}p^k(1-p)^{n-k}$.`,
      explain: String.raw`$P(X = 2) = \binom42\left(\frac12\right)^2\left(\frac12\right)^2 = \frac{6}{16} = \frac38$.`,
      level: 2 },
    { id: 'm12-x-022',
      prompt: String.raw`$X$ suit la loi binomiale $\mathcal{B}(10;\ 0{,}3)$. Calcule $V(X)$.`,
      answer: '21/10', vars: [], check: 'value',
      mistakes: [
        { expr: '3', msg: String.raw`$3 = np$ est l'espérance ; la variance vaut $np(1-p)$.` },
        { expr: '0.21', msg: String.raw`$p(1-p) = 0{,}21$ est la variance d'<b>une</b> épreuve ; il y en a $n = 10$.` }
      ],
      hint: String.raw`$V(X) = np(1 - p)$.`,
      explain: String.raw`$V(X) = 10\times 0{,}3\times 0{,}7 = 2{,}1$.`,
      level: 1 },
    { id: 'm12-x-023',
      prompt: String.raw`$X$ suit la loi binomiale $\mathcal{B}\left(5, \frac13\right)$. Calcule $P(X \geq 1)$ (valeur exacte).`,
      answer: '1-(2/3)^5', vars: [], check: 'value',
      mistakes: [
        { expr: '1-(1/3)^5', msg: String.raw`$P(X = 0)$ correspond à 5 <b>échecs</b>, de probabilité $\left(\frac23\right)^5$.` },
        { expr: '(2/3)^5', msg: String.raw`C'est $P(X = 0)$ ; on veut le complémentaire.` }
      ],
      hint: String.raw`$P(X \geq 1) = 1 - P(X = 0)$.`,
      explain: String.raw`$P(X = 0) = \left(\frac23\right)^5 = \frac{32}{243}$, donc $P(X \geq 1) = 1 - \frac{32}{243} = \frac{211}{243} \approx 0{,}868$.`,
      level: 2 },
    { id: 'm12-x-024',
      prompt: String.raw`On lance un dé équilibré jusqu'à obtenir un 6 ; $X$ est le rang du premier 6. Calcule $P(X = 3)$.`,
      answer: '25/216', vars: [], check: 'value',
      mistakes: [
        { expr: '125/1296', msg: String.raw`Avant le succès au 3e lancer, il y a seulement $3 - 1 = 2$ échecs : $\left(\frac56\right)^2$, pas $\left(\frac56\right)^3$.` },
        { expr: '1/216', msg: String.raw`$\left(\frac16\right)^3$ = trois 6 de suite ; il faut deux échecs puis un succès.` }
      ],
      hint: String.raw`Loi géométrique : $P(X = k) = (1-p)^{k-1}p$.`,
      explain: String.raw`$P(X = 3) = \left(\frac56\right)^2\times\frac16 = \frac{25}{216} \approx 0{,}116$.`,
      level: 2 },
    { id: 'm12-x-025',
      prompt: String.raw`Le nombre de pannes d'une machine en un mois suit la loi de Poisson de paramètre $\lambda = 2$. Calcule la probabilité d'avoir exactement 2 pannes (valeur exacte).`,
      answer: '2*exp(-2)', vars: [], check: 'value',
      mistakes: [
        { expr: '4*exp(-2)', msg: String.raw`Tu as oublié de diviser par $k! = 2$.` },
        { expr: 'exp(-2)', msg: String.raw`$\mathrm{e}^{-2}$ est $P(X = 0)$ ; pour $k = 2$, il faut le facteur $\frac{\lambda^2}{2!}$.` }
      ],
      hint: String.raw`$P(X = k) = \mathrm{e}^{-\lambda}\dfrac{\lambda^k}{k!}$.`,
      explain: String.raw`$P(X = 2) = \mathrm{e}^{-2}\frac{2^2}{2!} = 2\mathrm{e}^{-2} \approx 0{,}271$.`,
      level: 2 },
    { id: 'm12-x-026',
      prompt: String.raw`$X$ suit la loi de Poisson de paramètre $\lambda = 3$. Calcule $P(X \leq 1)$ (valeur exacte).`,
      answer: '4*exp(-3)', vars: [], check: 'value',
      mistakes: [
        { expr: '3*exp(-3)', msg: String.raw`C'est seulement $P(X = 1)$ ; il faut ajouter $P(X = 0) = \mathrm{e}^{-3}$.` },
        { expr: 'exp(-3)', msg: String.raw`C'est seulement $P(X = 0)$ ; il faut ajouter $P(X = 1)$.` }
      ],
      hint: String.raw`$P(X \leq 1) = P(X = 0) + P(X = 1)$.`,
      explain: String.raw`$P(X \leq 1) = \mathrm{e}^{-3} + 3\mathrm{e}^{-3} = 4\mathrm{e}^{-3} \approx 0{,}199$.`,
      level: 2 },
    { id: 'm12-x-027',
      prompt: String.raw`Pour quelle valeur de $c$ la fonction $f(x) = cx^2$ sur $[0, 3]$ (et 0 ailleurs) est-elle une densité de probabilité ?`,
      answer: '1/9', vars: [], check: 'value',
      mistakes: [
        { expr: '1/3', msg: String.raw`Une primitive de $x^2$ est $\frac{x^3}{3}$ : $\int_0^3 x^2\,\mathrm{d}x = 9$, pas 3.` },
        { expr: '9', msg: String.raw`On veut $c\times 9 = 1$, donc $c = \frac19$ (tu as donné l'inverse).` }
      ],
      hint: String.raw`Impose $\int_0^3 cx^2\,\mathrm{d}x = 1$.`,
      explain: String.raw`$\int_0^3 cx^2\,\mathrm{d}x = c\left[\frac{x^3}{3}\right]_0^3 = 9c = 1$, donc $c = \frac19$.`,
      level: 2 },
    { id: 'm12-x-028',
      prompt: String.raw`$X$ a pour densité $f(x) = 2x$ sur $[0, 1]$ (0 ailleurs). Calcule $E(X)$.`,
      answer: '2/3', vars: [], check: 'value',
      mistakes: [
        { expr: '1/2', msg: String.raw`$\frac12$ serait l'espérance d'une loi uniforme sur $[0, 1]$ ; ici la densité favorise les grandes valeurs.` },
        { expr: '1', msg: String.raw`$\int_0^1 2x\,\mathrm{d}x = 1$ est l'aire totale ; l'espérance est $\int_0^1 x\,f(x)\,\mathrm{d}x$.` }
      ],
      hint: String.raw`$E(X) = \int_0^1 x\,f(x)\,\mathrm{d}x$.`,
      explain: String.raw`$E(X) = \int_0^1 2x^2\,\mathrm{d}x = \left[\frac{2x^3}{3}\right]_0^1 = \frac23$.`,
      level: 2 },
    { id: 'm12-x-029',
      prompt: String.raw`$X$ a pour densité $f(x) = 2x$ sur $[0, 1]$ (0 ailleurs). Donne sa fonction de répartition $F(x)$ pour $x \in [0, 1]$, en fonction de $x$.`,
      answer: 'x^2', vars: ['x'], check: 'expr', domain: [0, 1],
      mistakes: [{ expr: '2*x', msg: String.raw`C'est la densité $f$ ; la fonction de répartition est $F(x) = \int_0^x f(t)\,\mathrm{d}t$.` }, { expr: '2*x^2', msg: String.raw`Une primitive de $2t$ est $t^2$ (et $F(1)$ doit valoir 1).` }],
      hint: String.raw`$F(x) = \int_0^x 2t\,\mathrm{d}t$.`,
      explain: String.raw`$F(x) = \int_0^x 2t\,\mathrm{d}t = \left[t^2\right]_0^x = x^2$. Contrôles : $F(0) = 0$, $F(1) = 1$, $F' = f$.`,
      level: 2 },
    { id: 'm12-x-030',
      prompt: String.raw`$X$ suit la loi uniforme sur $[2, 10]$. Calcule $P(3 \leq X \leq 5)$.`,
      answer: '1/4', vars: [], check: 'value',
      mistakes: [{ expr: '1/5', msg: String.raw`On divise par la longueur de l'intervalle $[2, 10]$, soit $8$, pas par $10$.` }],
      hint: String.raw`$P(c \leq X \leq d) = \dfrac{d - c}{b - a}$.`,
      explain: String.raw`$P = \frac{5 - 3}{10 - 2} = \frac28 = \frac14$.`,
      level: 1 },
    { id: 'm12-x-031',
      prompt: String.raw`La durée de vie $X$ (en années) d'un appareil suit la loi exponentielle de paramètre $\lambda = \frac12$. Calcule $P(X \leq 1)$ (valeur exacte).`,
      answer: '1-exp(-1/2)', vars: [], check: 'value',
      mistakes: [
        { expr: 'exp(-1/2)', msg: String.raw`$\mathrm{e}^{-\lambda t}$ est $P(X \gt t)$ ; ici on veut $P(X \leq 1) = F(1) = 1 - \mathrm{e}^{-1/2}$.` },
        { expr: '1-exp(-2)', msg: String.raw`Confusion entre $\lambda$ et $\frac1\lambda$ : $F(x) = 1 - \mathrm{e}^{-\lambda x}$ avec $\lambda = \frac12$.` }
      ],
      hint: String.raw`$F(x) = 1 - \mathrm{e}^{-\lambda x}$.`,
      explain: String.raw`$P(X \leq 1) = 1 - \mathrm{e}^{-\frac12\times 1} = 1 - \mathrm{e}^{-1/2} \approx 0{,}393$.`,
      level: 2 },
    { id: 'm12-x-032',
      prompt: String.raw`$X$ suit la loi exponentielle de paramètre $\lambda = 2$. Calcule $P_{X \gt 1}(X \gt 3)$ (valeur exacte).`,
      answer: 'exp(-4)', vars: [], check: 'value',
      mistakes: [{ expr: 'exp(-6)', msg: String.raw`$\mathrm{e}^{-6} = P(X \gt 3)$ sans condition ; il faut diviser par $P(X \gt 1) = \mathrm{e}^{-2}$.` }],
      hint: String.raw`Absence de mémoire : $P_{X \gt s}(X \gt s + t) = P(X \gt t)$.`,
      explain: String.raw`$P_{X \gt 1}(X \gt 3) = \frac{P(X \gt 3)}{P(X \gt 1)} = \frac{\mathrm{e}^{-6}}{\mathrm{e}^{-2}} = \mathrm{e}^{-4} = P(X \gt 2)$.`,
      level: 3 },
    { id: 'm12-x-033',
      prompt: String.raw`$X$ suit la loi exponentielle de paramètre $\lambda = 3$. Donne sa fonction de répartition $F(x)$ pour $x \geq 0$, en fonction de $x$.`,
      answer: '1-exp(-3*x)', vars: ['x'], check: 'expr', domain: [0.1, 3],
      mistakes: [
        { expr: '3*exp(-3*x)', msg: String.raw`C'est la densité $f$ ; $F(x) = \int_0^x f(t)\,\mathrm{d}t$.` },
        { expr: 'exp(-3*x)', msg: String.raw`$\mathrm{e}^{-3x} = P(X \gt x)$ ; la fonction de répartition est $P(X \leq x)$.` }
      ],
      hint: String.raw`$F(x) = \int_0^x 3\mathrm{e}^{-3t}\,\mathrm{d}t$.`,
      explain: String.raw`$F(x) = \left[-\mathrm{e}^{-3t}\right]_0^x = 1 - \mathrm{e}^{-3x}$ pour $x \geq 0$.`,
      level: 2 },
    { id: 'm12-x-034',
      prompt: String.raw`Donne la densité $\varphi(x)$ de la loi normale centrée réduite $\mathcal{N}(0, 1)$, en fonction de $x$.`,
      answer: 'exp(-x^2/2)/sqrt(2*pi)', vars: ['x'], check: 'expr',
      mistakes: [
        { expr: 'exp(-x^2/2)', msg: String.raw`Il manque la constante $\frac{1}{\sqrt{2\pi}}$ qui assure que l'aire totale vaut 1.` },
        { expr: 'exp(-x^2)/sqrt(2*pi)', msg: String.raw`L'exposant est $-\frac{x^2}{2}$ (variance 1).` }
      ],
      hint: String.raw`Cas $\mu = 0$, $\sigma = 1$ de $\frac{1}{\sigma\sqrt{2\pi}}\mathrm{e}^{-\frac{(x - \mu)^2}{2\sigma^2}}$.`,
      explain: String.raw`$\varphi(x) = \frac{1}{\sqrt{2\pi}}\mathrm{e}^{-x^2/2}$. Le facteur vient de $\int_{\mathbb{R}}\mathrm{e}^{-x^2/2}\,\mathrm{d}x = \sqrt{2\pi}$ (intégrale de Gauss).`,
      level: 1 },
    { id: 'm12-x-035',
      prompt: String.raw`$X$ suit $\mathcal{N}(10, 4)$ (moyenne 10, <b>variance</b> 4). Quelle valeur $z$ de la variable centrée réduite correspond à $x = 13$ ?`,
      answer: '3/2', vars: [], check: 'value',
      mistakes: [
        { expr: '3/4', msg: String.raw`On divise par l'écart-type $\sigma = \sqrt4 = 2$, pas par la variance.` },
        { expr: '3', msg: String.raw`Après avoir centré ($13 - 10 = 3$), il faut réduire en divisant par $\sigma = 2$.` }
      ],
      hint: String.raw`$z = \dfrac{x - \mu}{\sigma}$ avec $\sigma = \sqrt{V}$.`,
      explain: String.raw`$\sigma = 2$, donc $z = \frac{13 - 10}{2} = 1{,}5$ : $P(X \leq 13) = \Phi(1{,}5) \approx 0{,}933$.`,
      level: 2 },
    { id: 'm12-x-036',
      prompt: String.raw`Le QI suit $\mathcal{N}(100, 15^2)$. D'après la règle 68-95-99,7, donne une valeur approchée de $P(X \gt 115)$ (nombre décimal, ex. 0.25).`,
      answer: '0.16', vars: [], check: 'value',
      mistakes: [
        { expr: '0.32', msg: String.raw`$1 - 0{,}68 = 0{,}32$ regroupe les deux queues ($X \lt 85$ et $X \gt 115$) : par symétrie, divise par 2.` },
        { expr: '0.84', msg: String.raw`$0{,}84 \approx P(X \leq 115)$ ; on demande le complémentaire.` },
        { expr: '0.68', msg: String.raw`$0{,}68$ est la probabilité d'être entre 85 et 115.` }
      ],
      hint: String.raw`$115 = \mu + \sigma$. Environ 68 % des valeurs sont dans $[\mu - \sigma, \mu + \sigma]$ ; le reste se répartit symétriquement.`,
      explain: String.raw`$P(85 \leq X \leq 115) \approx 0{,}68$, donc les deux queues totalisent $0{,}32$, et par symétrie $P(X \gt 115) \approx 0{,}16$ (valeur précise : $1 - \Phi(1) \approx 0{,}159$).`,
      level: 3 },
    { id: 'm12-x-037',
      prompt: String.raw`Calcule la médiane de la série : $3,\ 9,\ 1,\ 7,\ 4,\ 10$.`,
      answer: '11/2', vars: [], check: 'value',
      mistakes: [
        { expr: '4', msg: String.raw`Il faut d'abord <b>trier</b> la série : $1, 3, 4, 7, 9, 10$.` },
        { expr: '17/3', msg: String.raw`$\frac{34}{6}$ est la moyenne, pas la médiane.` }
      ],
      hint: String.raw`Trie la série ; avec 6 valeurs (nombre pair), la médiane est la moyenne des 3e et 4e valeurs.`,
      explain: String.raw`Série triée : $1, 3, 4, 7, 9, 10$. Médiane $= \frac{4 + 7}{2} = 5{,}5$.`,
      level: 1 },
    { id: 'm12-x-038',
      prompt: String.raw`Calcule la variance (empirique, en divisant par $n$) de la série : $2,\ 4,\ 4,\ 4,\ 5,\ 5,\ 7,\ 9$.`,
      answer: '4', vars: [], check: 'value',
      mistakes: [
        { expr: '2', msg: String.raw`$2$ est l'écart-type ; la variance est son carré.` },
        { expr: '32/7', msg: String.raw`Tu as divisé par $n - 1 = 7$ (variance corrigée) ; ici on demande la variance empirique, divisée par $n = 8$.` }
      ],
      hint: String.raw`Moyenne $\bar x = 5$ ; puis $s^2 = \frac1n\sum(x_i - \bar x)^2$.`,
      explain: String.raw`$\bar x = \frac{40}{8} = 5$. Écarts au carré : $9, 1, 1, 1, 0, 0, 4, 16$, de somme 32. $s^2 = \frac{32}{8} = 4$ (et $s = 2$).`,
      level: 2 },
    { id: 'm12-x-039',
      prompt: String.raw`$X_1, \dots, X_{36}$ sont indépendantes, de même loi, d'espérance 2 et de variance 9. Calcule l'écart-type de leur moyenne $\overline{X}_{36}$.`,
      answer: '1/2', vars: [], check: 'value',
      mistakes: [
        { expr: '1/4', msg: String.raw`$\frac14 = \frac{9}{36}$ est la <b>variance</b> de $\overline{X}_{36}$ ; l'écart-type est sa racine.` },
        { expr: '1/12', msg: String.raw`L'écart-type de la moyenne est $\frac{\sigma}{\sqrt n}$, pas $\frac{\sigma}{n}$.` },
        { expr: '3', msg: String.raw`La moyenne est moins dispersée que chaque $X_i$ : son écart-type est divisé par $\sqrt n$.` }
      ],
      hint: String.raw`$V(\overline{X}_n) = \frac{\sigma^2}{n}$.`,
      explain: String.raw`$V(\overline{X}_{36}) = \frac{9}{36} = \frac14$, donc $\sigma(\overline{X}_{36}) = \frac12$ (soit $\frac{\sigma}{\sqrt n} = \frac36$).`,
      level: 2 },
    { id: 'm12-x-040',
      prompt: String.raw`On dispose de $n = 100$ mesures de moyenne $\bar x = 50$ ; l'écart-type de la population est $\sigma = 10$. Donne la borne <b>supérieure</b> de l'intervalle de confiance à 95 % de la moyenne (avec 1,96).`,
      answer: '51.96', vars: [], check: 'value',
      mistakes: [
        { expr: '69.6', msg: String.raw`Tu as oublié de diviser $\sigma$ par $\sqrt n = 10$.` },
        { expr: '50.196', msg: String.raw`On divise par $\sqrt n = 10$, pas par $n = 100$.` }
      ],
      hint: String.raw`$\bar x + 1{,}96\,\dfrac{\sigma}{\sqrt n}$.`,
      explain: String.raw`$1{,}96\times\frac{10}{\sqrt{100}} = 1{,}96$, donc l'IC est $[48{,}04\ ;\ 51{,}96]$ et la borne supérieure vaut $51{,}96$.`,
      level: 3 }
  ]
});
