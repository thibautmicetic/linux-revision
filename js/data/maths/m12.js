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
      explain: String.raw`Par convention $0! = 1$. Cette convention a un sens concret : il y a exactement une façon d'ordonner zéro objet (ne rien faire). Elle rend surtout les formules cohérentes : $n! = n\times(n-1)!$ appliquée à $n = 1$ donne $1 = 1\times 0!$, et $\binom{n}{0} = \frac{n!}{0!\,n!}$ vaut bien 1.`,
      why: { 1: String.raw`Erreur classique : croire que le produit des entiers « de 1 à 0 » vaut 0. C'est un produit <b>vide</b>, qui vaut 1 (comme une somme vide vaut 0). Avec $0! = 0$, $\binom{n}{0} = \frac{n!}{0!\,n!}$ serait une division par 0.`, 2: String.raw`$0!$ est bien défini, par convention égal à 1 ; sans cela, les formules des coefficients binomiaux ne fonctionneraient pas pour $k = 0$ ou $k = n$.` },
      rule: String.raw`$0! = 1$ et $n! = n\times(n-1)!$`,
      topic: 'Factorielle', sec: 'm12-s-denombrement',
      steps: [
        String.raw`Notion : la factorielle $n! = 1\times 2\times\cdots\times n$ est le nombre de façons de ranger $n$ objets distincts dans un ordre.`,
        String.raw`Relation de récurrence : $n! = n\times(n-1)!$. Pour $n = 1$ : $1! = 1\times 0!$, et comme $1! = 1$, on doit avoir $0! = 1$.`,
        String.raw`Interprétation : il y a une seule façon de ranger zéro objet (l'arrangement vide), donc $0! = 1$.`
      ],
      level: 1 },
    { id: 'm12-q-002', q: String.raw`De combien de façons peut-on choisir 3 délégués (sans ordre, sans rôle particulier) dans une classe de 10 étudiants ?`,
      choices: [String.raw`$720$`, String.raw`$120$`, String.raw`$1000$`, String.raw`$30$`], answer: 1,
      explain: String.raw`On choisit un groupe de 3 personnes : l'ordre de choix ne compte pas (pas de rôles) et on ne peut pas choisir deux fois le même étudiant. C'est donc une combinaison : $\binom{10}{3} = \frac{10\times 9\times 8}{3\times 2\times 1} = \frac{720}{6} = 120$. On compte d'abord les choix ordonnés (720), puis on divise par les $3! = 6$ ordres possibles d'un même groupe.`,
      why: { 0: String.raw`$720 = 10\times 9\times 8$ compte les choix <b>ordonnés</b> (comme pour élire un président, un vice-président et un secrétaire) : chaque groupe est compté $3! = 6$ fois, il faut diviser par 6.`, 2: String.raw`$1000 = 10^3$ autorise les répétitions (le même étudiant trois fois) et tient compte de l'ordre : c'est le nombre de 3-listes.`, 3: String.raw`$30 = 10\times 3$ : on a multiplié $n$ par $k$, ce qui ne correspond à aucun dénombrement. Il faut appliquer $\binom{n}{k} = \frac{n!}{k!\,(n-k)!}$.` },
      rule: String.raw`$\binom{n}{k} = \frac{n!}{k!\,(n-k)!} = \frac{n(n-1)\cdots(n-k+1)}{k!}$`,
      topic: 'Combinaisons', sec: 'm12-s-denombrement',
      steps: [
        String.raw`Notion : $\binom{n}{k}$ (« $k$ parmi $n$ ») est le nombre de façons de choisir $k$ éléments parmi $n$, <b>sans ordre et sans répétition</b>. Formule : $\binom{n}{k} = \frac{n!}{k!\,(n-k)!}$.`,
        String.raw`Ici : un groupe de 3 parmi 10, sans rôle (pas d'ordre), sans répétition : c'est $\binom{10}{3}$.`,
        String.raw`Calcul simplifié : $\binom{10}{3} = \frac{10\times 9\times 8}{3\times 2\times 1} = \frac{720}{6} = 120$.`,
        String.raw`Interprétation : 720 choix ordonnés, mais chaque groupe y apparaît $3! = 6$ fois (une par ordre) : $720 \div 6 = 120$ groupes.`
      ],
      level: 1 },
    { id: 'm12-q-003', q: String.raw`Combien existe-t-il de codes à 4 chiffres (chiffres de 0 à 9, répétitions autorisées) ?`,
      choices: [String.raw`$5040$`, String.raw`$210$`, String.raw`$4^{10}$`, String.raw`$10^4$`], answer: 3,
      explain: String.raw`Un code est une suite <b>ordonnée</b> de 4 chiffres (1234 et 4321 sont différents) et les répétitions sont permises (1111 est un code). Pour chaque position on a 10 choix, d'où $10\times 10\times 10\times 10 = 10^4 = 10\,000$ codes. C'est le nombre de $p$-listes, $n^p$, avec $n = 10$ symboles et $p = 4$ positions.`,
      why: { 0: String.raw`$5040 = 10\times 9\times 8\times 7$ interdit les répétitions (arrangements) : on a retiré un choix à chaque position, alors qu'un code peut être 1111.`, 1: String.raw`$\binom{10}{4} = 210$ ne tient compte ni de l'ordre ni des répétitions : il compte des ensembles de 4 chiffres distincts.`, 2: String.raw`Base et exposant inversés : $n^p$ avec $n = 10$ choix par position et $p = 4$ positions, donc $10^4$ et non $4^{10}$.` },
      rule: String.raw`Ordre + répétitions : $n^p$ ; ordre sans répétition : $\frac{n!}{(n-p)!}$ ; ni ordre ni répétition : $\binom{n}{p}$`,
      topic: 'Listes avec répétitions', sec: 'm12-s-denombrement',
      steps: [
        String.raw`Notion : une $p$-liste est une suite ordonnée de $p$ éléments pris dans un ensemble de $n$ éléments, répétitions permises ; il y en a $n^p$ (principe multiplicatif).`,
        String.raw`Ici : 4 positions, et chaque position peut recevoir l'un des 10 chiffres, quels que soient les autres.`,
        String.raw`Principe multiplicatif : $10\times 10\times 10\times 10 = 10^4 = 10\,000$ codes (de 0000 à 9999).`
      ],
      level: 1 },
    { id: 'm12-q-004', q: String.raw`Le coefficient binomial $\binom{n}{k}$ est égal à :`,
      choices: [String.raw`$\dfrac{n!}{(n-k)!}$`, String.raw`$\dfrac{n!}{k!}$`, String.raw`$\dfrac{n!}{k!\,(n-k)!}$`, String.raw`$n^k$`], answer: 2,
      explain: String.raw`On compte d'abord les choix <b>ordonnés</b> de $k$ éléments parmi $n$ : $A_n^k = n(n-1)\cdots(n-k+1) = \frac{n!}{(n-k)!}$. Chaque sous-ensemble de $k$ éléments y apparaît $k!$ fois (une fois par ordre possible), donc on divise par $k!$ : $\binom{n}{k} = \frac{n!}{k!\,(n-k)!}$. Exemple : $\binom{5}{2} = \frac{120}{2\times 6} = 10$.`,
      why: { 0: String.raw`C'est $A_n^k$, le nombre d'arrangements (choix <b>avec</b> ordre) : il manque la division par $k!$ qui supprime l'ordre.`, 1: String.raw`Il manque le facteur $(n-k)!$ au dénominateur : pour $n = 5$, $k = 2$, on obtiendrait $\frac{120}{2} = 60$ au lieu de 10.`, 3: String.raw`$n^k$ compte les $k$-listes (avec ordre et répétitions), beaucoup plus nombreuses.` },
      rule: String.raw`$\binom{n}{k} = \dfrac{n!}{k!\,(n-k)!}$`,
      topic: 'Coefficients binomiaux', sec: 'm12-s-denombrement',
      steps: [
        String.raw`Notion : $\binom{n}{k}$ est le nombre de sous-ensembles à $k$ éléments d'un ensemble à $n$ éléments (choix sans ordre, sans répétition).`,
        String.raw`Choix ordonnés : $n$ possibilités pour le 1er, $n - 1$ pour le 2e, etc., soit $A_n^k = \frac{n!}{(n-k)!}$.`,
        String.raw`Chaque sous-ensemble est compté $k!$ fois (une par ordre), donc $\binom{n}{k} = \frac{A_n^k}{k!} = \frac{n!}{k!\,(n-k)!}$.`,
        String.raw`Exemple : $\binom{5}{2} = \frac{5!}{2!\,3!} = \frac{120}{2\times 6} = 10$.`
      ],
      level: 1 },
    { id: 'm12-q-005', q: String.raw`Que vaut $\displaystyle\sum_{k=0}^{n}\binom{n}{k}$ ?`,
      choices: [String.raw`$n!$`, String.raw`$n\,2^{n-1}$`, String.raw`$n^2$`, String.raw`$2^n$`], answer: 3,
      explain: String.raw`La formule du binôme donne $(a + b)^n = \sum_{k=0}^{n}\binom{n}{k}a^kb^{n-k}$. Avec $a = b = 1$, tous les facteurs $a^kb^{n-k}$ valent 1, d'où $\sum_k\binom{n}{k} = (1 + 1)^n = 2^n$. Interprétation : c'est le nombre total de parties d'un ensemble à $n$ éléments (chaque élément est pris ou non : 2 choix, $n$ fois).`,
      why: { 0: String.raw`$n!$ compte les permutations (façons d'ordonner $n$ objets), pas les sous-ensembles : pour $n = 3$, $3! = 6 \neq 1 + 3 + 3 + 1 = 8$.`, 1: String.raw`$n\,2^{n-1}$ est la valeur de $\sum_k k\binom{n}{k}$ : tu as ajouté un facteur $k$ qui n'est pas dans la somme.`, 2: String.raw`Pour $n = 3$ : $1 + 3 + 3 + 1 = 8 \neq 9 = 3^2$. Toujours tester sur un petit cas.` },
      rule: String.raw`$\sum_{k=0}^{n}\binom{n}{k} = 2^n$`,
      topic: 'Binôme de Newton', sec: 'm12-s-denombrement',
      steps: [
        String.raw`Notion : la formule du binôme de Newton développe $(a + b)^n = \sum_{k=0}^{n}\binom{n}{k}a^kb^{n-k}$.`,
        String.raw`On choisit $a = b = 1$ : chaque terme devient $\binom{n}{k}\times 1\times 1$, donc $\sum_{k=0}^{n}\binom{n}{k} = (1 + 1)^n = 2^n$.`,
        String.raw`Vérification pour $n = 3$ (ligne du triangle de Pascal) : $1 + 3 + 3 + 1 = 8 = 2^3$ ✔.`
      ],
      level: 2 },
    { id: 'm12-q-006', q: String.raw`La relation de Pascal affirme que $\binom{n}{k} + \binom{n}{k+1}$ est égal à :`,
      choices: [String.raw`$\binom{n+1}{k+1}$`, String.raw`$\binom{n+1}{k}$`, String.raw`$\binom{2n}{2k+1}$`, String.raw`$\binom{n}{2k+1}$`], answer: 0,
      explain: String.raw`Relation de Pascal : $\binom{n}{k} + \binom{n}{k+1} = \binom{n+1}{k+1}$. Preuve par dénombrement : pour choisir $k + 1$ éléments parmi $n + 1$, on isole un élément particulier ; soit on le prend (il reste $k$ éléments à choisir parmi $n$), soit on ne le prend pas (il faut en choisir $k + 1$ parmi $n$). Exemple : $\binom{4}{1} + \binom{4}{2} = 4 + 6 = 10 = \binom{5}{2}$.`,
      why: { 1: String.raw`L'indice du bas est faux : avec $n = 4$, $k = 1$, on a $4 + 6 = 10$ mais $\binom{5}{1} = 5$. Dans le triangle, la somme se place sous le <b>second</b> coefficient.`, 2: String.raw`On n'additionne pas les paramètres comme des fractions : $\binom{4}{1} + \binom{4}{2} = 10$ alors que $\binom{8}{3} = 56$.`, 3: String.raw`Avec $n = 4$, $k = 1$ : $\binom{4}{3} = 4 \neq 10$. Le paramètre du haut doit passer de $n$ à $n + 1$.` },
      rule: String.raw`$\binom{n}{k} + \binom{n}{k+1} = \binom{n+1}{k+1}$`,
      topic: 'Relation de Pascal', sec: 'm12-s-denombrement',
      steps: [
        String.raw`Notion : dans le triangle de Pascal, chaque coefficient est la somme des deux coefficients situés juste au-dessus de lui (ligne précédente).`,
        String.raw`Formule : $\binom{n}{k} + \binom{n}{k+1} = \binom{n+1}{k+1}$.`,
        String.raw`Vérification avec $n = 4$, $k = 1$ : $\binom41 + \binom42 = 4 + 6 = 10$ et $\binom52 = \frac{5\times 4}{2} = 10$ ✔.`
      ],
      level: 2 },
    { id: 'm12-q-007', q: String.raw`Deux événements $A$ et $B$ sont dits <b>incompatibles</b> lorsque :`,
      choices: [String.raw`$P(A\cap B) = P(A)\,P(B)$`, String.raw`$A\cup B = \Omega$`, String.raw`$A\cap B = \varnothing$`, String.raw`$P(A) + P(B) = 1$`], answer: 2,
      explain: String.raw`Deux événements sont incompatibles quand ils ne peuvent pas se produire en même temps : leur intersection est vide, $A\cap B = \varnothing$, et donc $P(A\cap B) = 0$. Exemple avec un dé : « obtenir 1 » et « obtenir 2 ». Conséquence pratique : pour des événements incompatibles, $P(A\cup B) = P(A) + P(B)$.`,
      why: { 0: String.raw`C'est la définition de l'<b>indépendance</b> (l'un n'influence pas l'autre), une notion différente : on confond « s'exclure » et « ne pas s'influencer ».`, 1: String.raw`$A\cup B = \Omega$ signifie que l'un des deux au moins se produit toujours ; cela ne dit pas qu'ils s'excluent (par exemple $A = B = \Omega$).`, 3: String.raw`C'est vrai pour deux événements <b>contraires</b> ; deux événements incompatibles peuvent avoir une somme de probabilités inférieure à 1 (« 1 » et « 2 » au dé : $\frac16 + \frac16 = \frac13$).` },
      rule: String.raw`Incompatibles : $A\cap B = \varnothing$ ; indépendants : $P(A\cap B) = P(A)P(B)$`,
      topic: 'Événements incompatibles', sec: 'm12-s-probas',
      steps: [
        String.raw`Notion : un événement est un ensemble d'issues. Deux événements sont <b>incompatibles</b> s'ils n'ont aucune issue en commun.`,
        String.raw`Traduction ensembliste : $A\cap B = \varnothing$ (rien n'est à la fois dans $A$ et dans $B$), d'où $P(A\cap B) = 0$.`,
        String.raw`Exemple : au dé, $A$ = « obtenir 1 » et $B$ = « obtenir 2 » sont incompatibles, et $P(A\cup B) = \frac16 + \frac16 = \frac13$.`
      ],
      level: 1 },
    { id: 'm12-q-008', q: String.raw`On sait que $P(A) = 0{,}5$, $P(B) = 0{,}4$ et $P(A\cap B) = 0{,}2$. Que vaut $P(A\cup B)$ ?`,
      choices: [String.raw`$0{,}9$`, String.raw`$0{,}7$`, String.raw`$0{,}2$`, String.raw`$1{,}1$`], answer: 1,
      explain: String.raw`La formule $P(A\cup B) = P(A) + P(B) - P(A\cap B)$ vient du fait qu'en additionnant $P(A)$ et $P(B)$, on compte deux fois la partie commune $A\cap B$ ; on la retire donc une fois. Ici $0{,}5 + 0{,}4 - 0{,}2 = 0{,}7$. Le résultat est cohérent : il est compris entre $\max(P(A), P(B)) = 0{,}5$ et 1.`,
      why: { 0: String.raw`$0{,}9 = 0{,}5 + 0{,}4$ : tu as oublié de soustraire $P(A\cap B)$, compté deux fois (cette somme ne vaut que pour des événements incompatibles).`, 2: String.raw`$0{,}2$ est $P(A\cap B)$ (« $A$ <b>et</b> $B$ »), pas $P(A\cup B)$ (« $A$ <b>ou</b> $B$ »).`, 3: String.raw`$1{,}1 = 0{,}5 + 0{,}4 + 0{,}2$ : tu as ajouté $P(A\cap B)$ au lieu de le retrancher ; une probabilité ne dépasse jamais 1.` },
      rule: String.raw`$P(A\cup B) = P(A) + P(B) - P(A\cap B)$`,
      topic: "Probabilité d'une réunion", sec: 'm12-s-probas',
      steps: [
        String.raw`Notion : $A\cup B$ (« $A$ ou $B$ ») est réalisé si au moins l'un des deux l'est. Formule : $P(A\cup B) = P(A) + P(B) - P(A\cap B)$.`,
        String.raw`Pourquoi le moins : $P(A) + P(B)$ compte deux fois les issues de $A\cap B$, on les retire donc une fois.`,
        String.raw`Calcul : $0{,}5 + 0{,}4 - 0{,}2 = 0{,}9 - 0{,}2 = 0{,}7$.`
      ],
      level: 1 },
    { id: 'm12-q-009', q: String.raw`On lance deux dés équilibrés. Quelle est la probabilité que la somme vaille 7 ?`,
      choices: [String.raw`$\frac{1}{11}$`, String.raw`$\frac{7}{36}$`, String.raw`$\frac{1}{12}$`, String.raw`$\frac16$`], answer: 3,
      explain: String.raw`On modélise le lancer des deux dés par les 36 couples $(d_1, d_2)$, tous équiprobables. Les couples de somme 7 sont $(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)$, soit 6 cas favorables. Donc $P = \frac{6}{36} = \frac16$ ; 7 est d'ailleurs la somme la plus probable.`,
      why: { 0: String.raw`$\frac{1}{11}$ suppose que les 11 sommes possibles (de 2 à 12) sont équiprobables, ce qui est faux : la somme 2 n'a qu'un couple, la somme 7 en a six.`, 1: String.raw`$\frac{7}{36}$ : tu as compté 7 couples favorables au lieu de 6, sans doute en confondant la somme visée avec le nombre de cas.`, 2: String.raw`$\frac{3}{36} = \frac{1}{12}$ : tu n'as compté que 3 couples sans tenir compte de l'ordre, or $(3,4)$ et $(4,3)$ sont deux issues différentes.` },
      rule: String.raw`Équiprobabilité : $P(A) = \dfrac{\operatorname{card}A}{\operatorname{card}\Omega}$`,
      topic: 'Équiprobabilité', sec: 'm12-s-probas',
      steps: [
        String.raw`Notion : en situation d'équiprobabilité, $P(A) = \frac{\text{nombre de cas favorables}}{\text{nombre de cas possibles}}$, à condition de choisir un univers dont toutes les issues ont la même probabilité.`,
        String.raw`Univers : les couples $(d_1, d_2)$, soit $6\times 6 = 36$ issues équiprobables (on distingue le dé 1 du dé 2).`,
        String.raw`Cas favorables (somme 7) : $(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)$, soit 6 couples.`,
        String.raw`$P = \frac{6}{36} = \frac16$.`
      ],
      level: 1 },
    { id: 'm12-q-010', q: String.raw`On lance 3 fois un dé équilibré. La probabilité d'obtenir au moins un 6 est :`,
      choices: [String.raw`$\frac12$`, String.raw`$1 - \left(\frac56\right)^3$`, String.raw`$\left(\frac16\right)^3$`, String.raw`$1 - \left(\frac16\right)^3$`], answer: 1,
      explain: String.raw`« Au moins un 6 » est pénible à compter directement (un, deux ou trois 6). On passe par le contraire, « aucun 6 » : chaque lancer donne autre chose qu'un 6 avec probabilité $\frac56$, et les lancers sont indépendants, donc $P(\text{aucun } 6) = \left(\frac56\right)^3 = \frac{125}{216}$. D'où $P = 1 - \frac{125}{216} = \frac{91}{216} \approx 0{,}42$.`,
      why: { 0: String.raw`$\frac12 = 3\times\frac16$ : on a additionné les probabilités d'avoir un 6 à chaque lancer, mais ces événements ne sont pas incompatibles (on peut avoir plusieurs 6). Avec 6 lancers on trouverait 1, ce qui est absurde.`, 2: String.raw`$\left(\frac16\right)^3$ est la probabilité d'obtenir <b>trois</b> 6, pas au moins un.`, 3: String.raw`$1 - \left(\frac16\right)^3$ est le contraire de « trois 6 » ; le contraire de « au moins un 6 » est « aucun 6 ».` },
      rule: String.raw`$P(\text{au moins un}) = 1 - P(\text{aucun})$`,
      topic: 'Événement contraire', sec: 'm12-s-probas',
      steps: [
        String.raw`Notion : l'événement contraire $\overline{A}$ est réalisé quand $A$ ne l'est pas, et $P(A) = 1 - P(\overline{A})$. Le contraire de « au moins un 6 » est « aucun 6 ».`,
        String.raw`Un lancer ne donne pas 6 avec probabilité $1 - \frac16 = \frac56$.`,
        String.raw`Lancers indépendants : on multiplie, $P(\text{aucun } 6) = \frac56\times\frac56\times\frac56 = \frac{125}{216}$.`,
        String.raw`$P(\text{au moins un } 6) = 1 - \frac{125}{216} = \frac{91}{216} \approx 0{,}42$.`
      ],
      level: 2 },
    { id: 'm12-q-011', q: String.raw`Si $P(B) \gt 0$, la probabilité de $A$ sachant $B$ est :`,
      choices: [String.raw`$\dfrac{P(A\cap B)}{P(B)}$`, String.raw`$\dfrac{P(A\cap B)}{P(A)}$`, String.raw`$P(A)\,P(B)$`, String.raw`$\dfrac{P(A)}{P(B)}$`], answer: 0,
      explain: String.raw`Savoir que $B$ est réalisé revient à restreindre l'univers à $B$ : parmi les issues de $B$, on regarde la part qui réalise aussi $A$. D'où $P_B(A) = \frac{P(A\cap B)}{P(B)}$, avec l'intersection au numérateur et la probabilité de l'événement <b>connu</b> au dénominateur. Exemple : au dé, la probabilité d'obtenir 6 sachant que le résultat est pair vaut $\frac{1/6}{1/2} = \frac13$.`,
      why: { 1: String.raw`C'est $P_A(B)$, la probabilité de $B$ sachant $A$ : on a divisé par la probabilité du mauvais événement. On divise toujours par celle de l'événement <b>connu</b>.`, 2: String.raw`$P(A)P(B)$ n'est égal à $P(A\cap B)$ que si $A$ et $B$ sont indépendants ; ce n'est pas une probabilité conditionnelle.`, 3: String.raw`Il faut l'intersection au numérateur, pas $P(A)$ : $\frac{P(A)}{P(B)}$ peut même dépasser 1 (si $P(A) \gt P(B)$).` },
      rule: String.raw`$P_B(A) = \dfrac{P(A\cap B)}{P(B)}$`,
      topic: 'Probabilité conditionnelle', sec: 'm12-s-conditionnelle',
      steps: [
        String.raw`Notion : $P_B(A)$, aussi notée $P(A \mid B)$, est la probabilité que $A$ se réalise <b>sachant</b> que $B$ est réalisé : l'univers est restreint à $B$.`,
        String.raw`Parmi les issues de $B$, seules celles de $A\cap B$ réalisent $A$ ; on rapporte leur probabilité à celle de $B$.`,
        String.raw`D'où $P_B(A) = \dfrac{P(A\cap B)}{P(B)}$ (avec $P(B) \gt 0$). Exemple au dé : obtenir 6 sachant « pair » : $\frac{1/6}{1/2} = \frac13$.`
      ],
      level: 1 },
    { id: 'm12-q-012', q: String.raw`$A$ et $B$ sont indépendants, avec $P(A) = 0{,}3$ et $P(B) = 0{,}5$. Que vaut $P(A\cap B)$ ?`,
      choices: [String.raw`$0{,}8$`, String.raw`$0{,}65$`, String.raw`$0{,}15$`, String.raw`$0$`], answer: 2,
      explain: String.raw`Deux événements sont indépendants quand la réalisation de l'un ne modifie pas la probabilité de l'autre ; cela se traduit par $P(A\cap B) = P(A)\times P(B)$. Ici $0{,}3\times 0{,}5 = 0{,}15$. Contrôle : la probabilité de « $A$ et $B$ » doit être inférieure à chacune des deux, et c'est bien le cas ($0{,}15 \leq 0{,}3$).`,
      why: { 0: String.raw`$0{,}8 = 0{,}3 + 0{,}5$ : on a additionné au lieu de multiplier. « $A$ et $B$ » ne peut pas être plus probable que $A$ seul.`, 1: String.raw`$0{,}65 = 0{,}3 + 0{,}5 - 0{,}15$ est $P(A\cup B)$ (« ou »), pas $P(A\cap B)$ (« et »).`, 3: String.raw`$P(A\cap B) = 0$ caractérise des événements incompatibles, pas indépendants : confusion entre les deux notions.` },
      rule: String.raw`Indépendance : $P(A\cap B) = P(A)\,P(B)$`,
      topic: 'Événements indépendants', sec: 'm12-s-conditionnelle',
      steps: [
        String.raw`Notion : $A$ et $B$ sont <b>indépendants</b> si savoir que l'un est réalisé ne change pas la probabilité de l'autre : $P_B(A) = P(A)$, ce qui équivaut à $P(A\cap B) = P(A)\,P(B)$.`,
        String.raw`On applique la formule produit : $P(A\cap B) = 0{,}3\times 0{,}5$.`,
        String.raw`$0{,}3\times 0{,}5 = 0{,}15$.`
      ],
      level: 1 },
    { id: 'm12-q-013', q: String.raw`Deux événements incompatibles $A$ et $B$, avec $P(A) \gt 0$ et $P(B) \gt 0$, sont :`,
      choices: [String.raw`toujours indépendants`, String.raw`indépendants si $P(A) = P(B)$`, String.raw`toujours contraires`, String.raw`jamais indépendants`], answer: 3,
      explain: String.raw`Si $A$ et $B$ sont incompatibles, $P(A\cap B) = 0$. Or $P(A) \gt 0$ et $P(B) \gt 0$ donnent $P(A)P(B) \gt 0$ : l'égalité d'indépendance $P(A\cap B) = P(A)P(B)$ est donc fausse. Intuitivement, savoir que $A$ est réalisé apprend avec certitude que $B$ ne l'est pas : les deux événements s'influencent au maximum.`,
      why: { 0: String.raw`Confusion classique entre incompatibilité (s'exclure) et indépendance (ne pas s'influencer) : ici $P(A\cap B) = 0 \neq P(A)P(B)$.`, 1: String.raw`Même avec $P(A) = P(B) = p \gt 0$, on a $P(A\cap B) = 0 \neq p^2$ : l'égalité des probabilités ne change rien.`, 2: String.raw`Être contraires exige en plus $A\cup B = \Omega$ ; au dé, « 1 » et « 2 » sont incompatibles sans être contraires.` },
      rule: String.raw`Incompatibles et de probabilités non nulles $\Rightarrow$ non indépendants`,
      topic: 'Incompatibilité et indépendance', sec: 'm12-s-conditionnelle',
      steps: [
        String.raw`Notion : incompatibles signifie $P(A\cap B) = 0$ (ils s'excluent) ; indépendants signifie $P(A\cap B) = P(A)P(B)$ (ils ne s'influencent pas).`,
        String.raw`Avec $P(A) \gt 0$ et $P(B) \gt 0$, le produit $P(A)P(B)$ est strictement positif.`,
        String.raw`Pour des événements incompatibles, $P(A\cap B) = 0 \neq P(A)P(B)$ : ils ne sont donc jamais indépendants.`
      ],
      level: 2 },
    { id: 'm12-q-014', q: String.raw`La formule des probabilités totales $P(A) = \sum_i P(B_i)P_{B_i}(A)$ suppose que les $B_i$ :`,
      choices: [String.raw`forment un système complet d'événements`, String.raw`sont deux à deux indépendants`, String.raw`ont tous la même probabilité`, String.raw`sont tous inclus dans $A$`], answer: 0,
      explain: String.raw`La formule repose sur un découpage de l'univers : les $B_i$ doivent être deux à deux incompatibles et de réunion $\Omega$ (un système complet, ou partition), avec des probabilités non nulles. Alors $A$ est la réunion <b>disjointe</b> des morceaux $A\cap B_i$, et on additionne les $P(A\cap B_i) = P(B_i)P_{B_i}(A)$. C'est exactement la somme des branches d'un arbre de probabilités.`,
      why: { 1: String.raw`L'indépendance n'intervient pas : on a besoin que les $B_i$ <b>s'excluent</b> et recouvrent $\Omega$, pas qu'ils ne s'influencent pas.`, 2: String.raw`Les $B_i$ peuvent avoir des probabilités différentes (par exemple 60 % / 40 % pour deux machines) : ce sont justement ces poids qui pondèrent la formule.`, 3: String.raw`Ce n'est pas nécessaire : il faut que les $B_i$ recouvrent tout $\Omega$, sans condition par rapport à $A$.` },
      rule: String.raw`Si $(B_i)$ est un système complet : $P(A) = \sum_i P(B_i)\,P_{B_i}(A)$`,
      topic: 'Probabilités totales', sec: 'm12-s-conditionnelle',
      steps: [
        String.raw`Notion : un <b>système complet</b> d'événements est une famille $B_1, \dots, B_n$ deux à deux incompatibles dont la réunion est $\Omega$ : exactement un des $B_i$ se réalise.`,
        String.raw`On découpe alors $A$ en morceaux disjoints : $A = (A\cap B_1)\cup\dots\cup(A\cap B_n)$.`,
        String.raw`Les morceaux étant incompatibles, on additionne : $P(A) = \sum_i P(A\cap B_i) = \sum_i P(B_i)P_{B_i}(A)$.`
      ],
      level: 2 },
    { id: 'm12-q-015', q: String.raw`Une maladie touche 1 % de la population. Un test est positif chez 99 % des malades et chez 5 % des personnes saines. Une personne a un test positif : la probabilité qu'elle soit malade vaut environ :`,
      choices: [String.raw`$99\,\%$`, String.raw`$95\,\%$`, String.raw`$17\,\%$`, String.raw`$1\,\%$`], answer: 2,
      explain: String.raw`On cherche $P_T(M)$ alors qu'on connaît $P_M(T)$ : il faut « retourner » le conditionnement avec Bayes. Probabilités totales : $P(T) = 0{,}01\times 0{,}99 + 0{,}99\times 0{,}05 = 0{,}0099 + 0{,}0495 = 0{,}0594$. Bayes : $P_T(M) = \frac{0{,}0099}{0{,}0594} = \frac16 \approx 17\,\%$. La maladie étant rare, les faux positifs (5 % des 99 % de sains) sont 5 fois plus nombreux que les vrais positifs.`,
      why: { 0: String.raw`$99\,\%$ est $P_M(T)$ (positif sachant malade) : on a inversé le conditionnement sans appliquer Bayes, erreur très fréquente.`, 1: String.raw`$95\,\%$ est la probabilité d'un test négatif chez une personne saine ($1 - 0{,}05$), sans rapport direct avec la question.`, 3: String.raw`$1\,\%$ est la probabilité d'être malade <b>avant</b> le test ; le résultat positif apporte de l'information et augmente cette probabilité.` },
      rule: String.raw`Bayes : $P_T(M) = \dfrac{P(M)\,P_M(T)}{P(T)}$`,
      topic: 'Formule de Bayes', sec: 'm12-s-conditionnelle',
      steps: [
        String.raw`Notion : la formule de Bayes « retourne » un conditionnement : $P_T(M) = \dfrac{P(M)P_M(T)}{P(T)}$. On connaît $P_M(T)$ (fiabilité du test) et on veut $P_T(M)$.`,
        String.raw`Probabilités totales (malades / sains) : $P(T) = 0{,}01\times 0{,}99 + 0{,}99\times 0{,}05 = 0{,}0099 + 0{,}0495 = 0{,}0594$.`,
        String.raw`Bayes : $P_T(M) = \frac{0{,}0099}{0{,}0594} = \frac16 \approx 0{,}17$.`,
        String.raw`Interprétation : sur 10 000 personnes, 99 malades sont positifs contre 495 sains positifs ; seul 1 positif sur 6 est malade.`
      ],
      level: 3 },
    { id: 'm12-q-016', q: String.raw`Pour une variable aléatoire $X$ et des réels $a$, $b$, $E(aX + b)$ vaut :`,
      choices: [String.raw`$a^2E(X) + b$`, String.raw`$aE(X) + b$`, String.raw`$aE(X)$`], answer: 1,
      explain: String.raw`L'espérance est une moyenne pondérée, donc elle est <b>linéaire</b> : $E(aX + b) = \sum (ax_i + b)p_i = a\sum x_ip_i + b\sum p_i = aE(X) + b$, car $\sum p_i = 1$. Concrètement, si l'on double toutes les notes puis qu'on ajoute un bonus d'un point, la moyenne est doublée puis augmentée de 1.`,
      why: { 0: String.raw`Le carré $a^2$ apparaît dans la <b>variance</b> ($V(aX + b) = a^2V(X)$), pas dans l'espérance : confusion entre les deux formules.`, 2: String.raw`La constante $b$ se retrouve dans l'espérance : décaler toutes les valeurs de $b$ décale la moyenne de $b$ (c'est la variance qui l'élimine).` },
      rule: String.raw`$E(aX + b) = aE(X) + b$`,
      topic: "Linéarité de l'espérance", sec: 'm12-s-va-discretes',
      steps: [
        String.raw`Notion : l'espérance $E(X) = \sum x_ip_i$ est la moyenne des valeurs de $X$ pondérées par leurs probabilités.`,
        String.raw`$E(aX + b) = \sum (ax_i + b)p_i = a\sum x_ip_i + b\sum p_i$.`,
        String.raw`Comme $\sum p_i = 1$ : $E(aX + b) = aE(X) + b$.`
      ],
      level: 1 },
    { id: 'm12-q-017', q: String.raw`Pour une variable aléatoire $X$ et des réels $a$, $b$, $V(aX + b)$ vaut :`,
      choices: [String.raw`$aV(X) + b$`, String.raw`$a^2V(X) + b$`, String.raw`$a^2V(X)$`, String.raw`$|a|\,V(X)$`], answer: 2,
      explain: String.raw`La variance mesure la dispersion autour de la moyenne. Ajouter $b$ décale toutes les valeurs <b>et</b> la moyenne de la même quantité : les écarts $X - E(X)$ sont inchangés, donc $b$ disparaît. Multiplier par $a$ multiplie les écarts par $a$, et la variance, moyenne des écarts <b>au carré</b>, par $a^2$ : $V(aX + b) = a^2V(X)$.`,
      why: { 0: String.raw`La variance n'est pas linéaire : le facteur sort au carré et la constante disparaît. On a appliqué à tort la formule de l'espérance.`, 1: String.raw`Décaler $X$ de $b$ ne change pas sa dispersion : $b$ disparaît de la variance (c'est l'espérance qui le garde).`, 3: String.raw`C'est l'<b>écart-type</b> qui est multiplié par $|a|$ ; la variance, qui est son carré, l'est par $a^2$.` },
      rule: String.raw`$V(aX + b) = a^2V(X)$ et $\sigma(aX + b) = |a|\,\sigma(X)$`,
      topic: "Variance d'une transformée affine", sec: 'm12-s-va-discretes',
      steps: [
        String.raw`Notion : la variance $V(X) = E\left[(X - E(X))^2\right]$ est la moyenne des carrés des écarts à la moyenne : elle mesure la dispersion.`,
        String.raw`Écart de $aX + b$ à sa moyenne : $(aX + b) - (aE(X) + b) = a(X - E(X))$ ; le $b$ s'élimine.`,
        String.raw`On élève au carré puis on prend l'espérance : $V(aX + b) = E\left[a^2(X - E(X))^2\right] = a^2V(X)$.`
      ],
      level: 1 },
    { id: 'm12-q-018', q: String.raw`La formule de König-Huygens donne $V(X) =$ :`,
      choices: [String.raw`$E(X)^2 - E(X^2)$`, String.raw`$E(X^2) - E(X)$`, String.raw`$E(X^2) + E(X)^2$`, String.raw`$E(X^2) - E(X)^2$`], answer: 3,
      explain: String.raw`On développe la définition $V(X) = E[(X - \mu)^2]$ avec $\mu = E(X)$ : $E(X^2 - 2\mu X + \mu^2) = E(X^2) - 2\mu E(X) + \mu^2 = E(X^2) - 2\mu^2 + \mu^2 = E(X^2) - \mu^2$. Moyen mnémotechnique : « moyenne des carrés moins carré de la moyenne ». C'est la formule la plus pratique pour calculer une variance.`,
      why: { 0: String.raw`L'ordre est inversé : $E(X)^2 - E(X^2) = -V(X)$ serait négatif ou nul, or une variance est toujours positive.`, 1: String.raw`On soustrait le <b>carré</b> de l'espérance, $E(X)^2$, pas $E(X)$ : la formule doit être homogène (des « unités au carré »).`, 2: String.raw`On soustrait $E(X)^2$, on ne l'ajoute pas : le développement donne $-2\mu^2 + \mu^2 = -\mu^2$.` },
      rule: String.raw`$V(X) = E(X^2) - E(X)^2$`,
      topic: 'Formule de König-Huygens', sec: 'm12-s-va-discretes',
      steps: [
        String.raw`Notion : par définition, $V(X) = E[(X - \mu)^2]$ avec $\mu = E(X)$ : c'est la moyenne des carrés des écarts à la moyenne.`,
        String.raw`Développement : $(X - \mu)^2 = X^2 - 2\mu X + \mu^2$.`,
        String.raw`Linéarité de l'espérance : $E(X^2) - 2\mu E(X) + \mu^2 = E(X^2) - 2\mu^2 + \mu^2 = E(X^2) - \mu^2$.`
      ],
      level: 1 },
    { id: 'm12-q-019', q: String.raw`L'égalité $V(X + Y) = V(X) + V(Y)$ est vraie :`,
      choices: [String.raw`toujours`, String.raw`si $X$ et $Y$ sont indépendantes`, String.raw`si $E(X) = E(Y)$`, String.raw`jamais`], answer: 1,
      explain: String.raw`En développant, $V(X + Y) = V(X) + V(Y) + 2\operatorname{Cov}(X, Y)$, où la covariance mesure le lien linéaire entre $X$ et $Y$. Si $X$ et $Y$ sont indépendantes, $\operatorname{Cov}(X, Y) = 0$ et les variances s'additionnent. Sinon l'égalité peut être fausse : avec $Y = X$, on obtient $V(2X) = 4V(X)$, et non $2V(X)$.`,
      why: { 0: String.raw`Contre-exemple : $Y = X$ donne $V(2X) = 4V(X) \neq 2V(X)$. On a oublié le terme de covariance.`, 2: String.raw`L'égalité des espérances ne joue aucun rôle : la variance ne dépend pas des moyennes, c'est la covariance qui compte.`, 3: String.raw`Trop pessimiste : elle est vraie dès que $X$ et $Y$ sont indépendantes (ou simplement non corrélées).` },
      rule: String.raw`$X$, $Y$ indépendantes $\Rightarrow V(X + Y) = V(X) + V(Y)$`,
      topic: "Variance d'une somme", sec: 'm12-s-va-discretes',
      steps: [
        String.raw`Notion : la variance n'est pas linéaire ; pour une somme, $V(X + Y) = V(X) + V(Y) + 2\operatorname{Cov}(X, Y)$, avec $\operatorname{Cov}(X, Y) = E(XY) - E(X)E(Y)$.`,
        String.raw`Si $X$ et $Y$ sont indépendantes, $E(XY) = E(X)E(Y)$, donc $\operatorname{Cov}(X, Y) = 0$.`,
        String.raw`Il reste $V(X + Y) = V(X) + V(Y)$ : ce sont les variances (pas les écarts-types) qui s'additionnent.`
      ],
      level: 2 },
    { id: 'm12-q-020', q: String.raw`Si $X$ suit la loi binomiale $\mathcal{B}(n, p)$, alors $E(X)$ vaut :`,
      choices: [String.raw`$np$`, String.raw`$np(1-p)$`, String.raw`$p$`, String.raw`$\frac{n}{p}$`], answer: 0,
      explain: String.raw`Une variable $X \sim \mathcal{B}(n, p)$ compte les succès dans $n$ épreuves de Bernoulli indépendantes de même probabilité $p$. On l'écrit $X = X_1 + \dots + X_n$, où chaque $X_i$ vaut 1 (succès) ou 0, d'espérance $p$. Par linéarité, $E(X) = p + \dots + p = np$. Exemple : 100 lancers d'une pièce donnent en moyenne 50 « pile ».`,
      why: { 1: String.raw`$np(1-p)$ est la <b>variance</b> de la loi binomiale, pas son espérance.`, 2: String.raw`$p$ est l'espérance d'une <b>seule</b> épreuve de Bernoulli ; il y en a $n$, dont les espérances s'additionnent.`, 3: String.raw`$\frac{n}{p}$ n'a pas de sens ici : on multiplie, car $n$ épreuves apportent chacune en moyenne $p$ succès.` },
      rule: String.raw`$X \sim \mathcal{B}(n, p)$ : $E(X) = np$, $V(X) = np(1 - p)$`,
      topic: 'Loi binomiale', sec: 'm12-s-lois-discretes',
      steps: [
        String.raw`Notion : $X \sim \mathcal{B}(n, p)$ compte le nombre de succès dans $n$ répétitions indépendantes d'une même épreuve à deux issues (succès de probabilité $p$).`,
        String.raw`On écrit $X = X_1 + \dots + X_n$, où $X_i$ vaut 1 si la $i$-ième épreuve est un succès et 0 sinon : $E(X_i) = 1\times p + 0\times(1 - p) = p$.`,
        String.raw`Linéarité de l'espérance : $E(X) = E(X_1) + \dots + E(X_n) = np$.`
      ],
      level: 1 },
    { id: 'm12-q-021', q: String.raw`$X$ suit $\mathcal{B}(20;\ 0{,}5)$. Que vaut $V(X)$ ?`,
      choices: [String.raw`$10$`, String.raw`$5$`, String.raw`$\sqrt5$`, String.raw`$2{,}5$`], answer: 1,
      explain: String.raw`Pour $X \sim \mathcal{B}(n, p)$, la variance vaut $np(1 - p)$ : c'est la somme des variances $p(1 - p)$ des $n$ épreuves indépendantes. Ici $20\times 0{,}5\times(1 - 0{,}5) = 20\times 0{,}25 = 5$. L'écart-type vaut donc $\sqrt5 \approx 2{,}24$, et l'espérance $np = 10$.`,
      why: { 0: String.raw`$10 = np$ est l'espérance ; il manque le facteur $(1 - p) = 0{,}5$.`, 2: String.raw`$\sqrt5$ est l'écart-type, racine carrée de la variance.`, 3: String.raw`$2{,}5 = 20\times 0{,}5^3$ : tu as multiplié une fois de trop par $0{,}5$ ; $np(1 - p) = 10\times 0{,}5 = 5$.` },
      rule: String.raw`$V(X) = np(1 - p)$`,
      topic: 'Variance binomiale', sec: 'm12-s-lois-discretes',
      steps: [
        String.raw`Notion : pour la loi binomiale $\mathcal{B}(n, p)$, chaque épreuve a une variance $p(1 - p)$, et comme les $n$ épreuves sont indépendantes, les variances s'additionnent : $V(X) = np(1 - p)$.`,
        String.raw`Ici $n = 20$ et $p = 0{,}5$, donc $1 - p = 0{,}5$.`,
        String.raw`$V(X) = 20\times 0{,}5\times 0{,}5 = 20\times 0{,}25 = 5$.`
      ],
      level: 1 },
    { id: 'm12-q-022', q: String.raw`Laquelle de ces variables ne suit <b>pas</b> une loi binomiale ?`,
      choices: [String.raw`Le nombre de 6 obtenus en 10 lancers d'un dé`, String.raw`Le nombre de « pile » en 20 lancers d'une pièce`, String.raw`Le nombre de boules rouges obtenues en tirant 5 boules <b>sans remise</b> dans une urne de 10 boules dont 4 rouges`, String.raw`Le nombre de pièces défectueuses parmi 50 pièces tirées <b>avec remise</b> dans un stock`], answer: 2,
      explain: String.raw`Une loi binomiale exige des épreuves <b>identiques et indépendantes</b>, avec la même probabilité de succès. Dans un tirage sans remise, la composition de l'urne change après chaque tirage : la probabilité de tirer une rouge passe par exemple de $\frac{4}{10}$ à $\frac39$ si l'on vient d'en tirer une. Les épreuves ne sont ni indépendantes ni de même probabilité : c'est une loi hypergéométrique.`,
      why: { 0: String.raw`Ce n'est pas le bon choix : 10 épreuves indépendantes identiques (succès « obtenir 6 », $p = \frac16$) donnent bien $\mathcal{B}\left(10, \frac16\right)$.`, 1: String.raw`Ce n'est pas le bon choix : 20 épreuves indépendantes de probabilité $\frac12$ donnent $\mathcal{B}\left(20, \frac12\right)$.`, 3: String.raw`Ce n'est pas le bon choix : avec remise, chaque tirage se fait dans le même stock, les épreuves sont indépendantes et de même probabilité, donc la loi est binomiale.` },
      rule: String.raw`Binomiale : $n$ épreuves indépendantes, identiques, à deux issues`,
      topic: 'Reconnaître une loi binomiale', sec: 'm12-s-lois-discretes',
      steps: [
        String.raw`Notion : $X$ suit une loi binomiale si elle compte les succès dans $n$ épreuves <b>indépendantes</b> et <b>identiques</b> (même probabilité de succès $p$).`,
        String.raw`Dé, pièce, tirages <b>avec</b> remise : chaque épreuve se refait dans les mêmes conditions, ce sont des binomiales.`,
        String.raw`Tirage <b>sans</b> remise : après une rouge, il reste 3 rouges sur 9 boules, la probabilité passe de $\frac{4}{10}$ à $\frac39$ ; les épreuves ne sont plus identiques, ce n'est pas une binomiale.`
      ],
      level: 2 },
    { id: 'm12-q-023', q: String.raw`On lance un dé équilibré jusqu'à obtenir un 6. En moyenne, combien de lancers faut-il ?`,
      choices: [String.raw`$6$`, String.raw`$\frac16$`, String.raw`$5$`, String.raw`$3{,}5$`], answer: 0,
      explain: String.raw`Le rang $X$ du premier 6 suit la loi géométrique de paramètre $p = \frac16$ : $P(X = k) = (1 - p)^{k-1}p$. Son espérance vaut $\frac1p = 6$. C'est intuitif : un événement qui se produit une fois sur six arrive en moyenne au bout de six essais.`,
      why: { 1: String.raw`$\frac16$ est la probabilité de succès $p$ à chaque lancer ; l'espérance du temps d'attente est son inverse, $\frac1p$.`, 2: String.raw`5 est le nombre moyen d'<b>échecs</b> avant le premier succès ($\frac{1-p}{p}$) ; on compte ici les lancers, succès inclus.`, 3: String.raw`3,5 est la valeur moyenne d'<b>un</b> lancer de dé ($\frac{1 + 2 + \dots + 6}{6}$), pas le temps d'attente d'un 6.` },
      rule: String.raw`$X \sim \mathcal{G}(p)$ : $P(X = k) = (1-p)^{k-1}p$ et $E(X) = \frac1p$`,
      topic: 'Loi géométrique', sec: 'm12-s-lois-discretes',
      steps: [
        String.raw`Notion : la loi géométrique $\mathcal{G}(p)$ modélise le rang du <b>premier succès</b> dans une suite d'épreuves indépendantes de probabilité de succès $p$.`,
        String.raw`Ici le succès est « obtenir 6 », donc $p = \frac16$ et $X \sim \mathcal{G}\left(\frac16\right)$.`,
        String.raw`Espérance : $E(X) = \frac1p = \frac{1}{1/6} = 6$ lancers en moyenne.`
      ],
      level: 2 },
    { id: 'm12-q-024', q: String.raw`Si $X$ suit la loi de Poisson $\mathcal{P}(\lambda)$ :`,
      choices: [String.raw`$E(X) = \lambda$ et $V(X) = \lambda^2$`, String.raw`$E(X) = V(X) = \lambda$`, String.raw`$E(X) = \frac1\lambda$ et $V(X) = \frac{1}{\lambda^2}$`, String.raw`$E(X) = \lambda$ et $V(X) = \sqrt\lambda$`], answer: 1,
      explain: String.raw`La loi de Poisson $\mathcal{P}(\lambda)$ est définie par $P(X = k) = \mathrm{e}^{-\lambda}\frac{\lambda^k}{k!}$. Un calcul de séries donne $E(X) = \lambda$ et $V(X) = \lambda$ : espérance et variance sont égales, c'est sa propriété caractéristique. Par exemple, si un standard reçoit en moyenne 4 appels par minute, la variance du nombre d'appels vaut aussi 4 et l'écart-type 2.`,
      why: { 0: String.raw`La variance vaut $\lambda$, pas $\lambda^2$ : on a élevé le paramètre au carré par analogie avec d'autres formules.`, 2: String.raw`$\frac1\lambda$ et $\frac{1}{\lambda^2}$ sont l'espérance et la variance de la loi <b>exponentielle</b> $\mathcal{E}(\lambda)$ : confusion entre les deux lois.`, 3: String.raw`$\sqrt\lambda$ est l'écart-type, racine carrée de la variance.` },
      rule: String.raw`$X \sim \mathcal{P}(\lambda)$ : $E(X) = V(X) = \lambda$`,
      topic: 'Loi de Poisson', sec: 'm12-s-lois-discretes',
      steps: [
        String.raw`Notion : la loi de Poisson $\mathcal{P}(\lambda)$ compte des événements rares survenant sur une durée donnée ; $\lambda$ est leur nombre moyen et $P(X = k) = \mathrm{e}^{-\lambda}\frac{\lambda^k}{k!}$.`,
        String.raw`Espérance : $E(X) = \lambda$ (c'est le sens même du paramètre).`,
        String.raw`Variance : $V(X) = \lambda$ aussi ; l'écart-type vaut donc $\sqrt\lambda$.`
      ],
      level: 1 },
    { id: 'm12-q-025', q: String.raw`La loi de Poisson est le modèle naturel pour :`,
      choices: [String.raw`la durée de vie d'un composant`, String.raw`la taille d'un individu dans une population`, String.raw`le nombre de succès en exactement $n$ essais de probabilité $\frac12$`, String.raw`le nombre de pannes d'un serveur en une semaine`], answer: 3,
      explain: String.raw`La loi de Poisson modélise le <b>nombre</b> d'événements rares et indépendants qui surviennent sur une durée (ou une zone) donnée, à un rythme moyen constant : pannes, appels, arrivées de clients, défauts sur une bande. Le nombre de pannes d'un serveur en une semaine est exactement ce type de comptage, sans nombre maximal fixé à l'avance.`,
      why: { 0: String.raw`Une durée de vie est une variable <b>continue</b> (elle peut valoir 1 234,5 h) : on utilise une loi à densité, typiquement l'exponentielle. Poisson compte des événements, à valeurs entières.`, 1: String.raw`Une taille est continue et résulte de nombreux petits facteurs : c'est le domaine de la loi normale.`, 2: String.raw`Nombre de succès en un nombre <b>fixé</b> $n$ d'essais indépendants de même probabilité : c'est la loi binomiale $\mathcal{B}\left(n, \frac12\right)$.` },
      rule: String.raw`Poisson : nombre d'événements rares sur une durée ; binomiale : succès en $n$ essais fixés`,
      topic: 'Choisir un modèle de loi', sec: 'm12-s-lois-discretes',
      steps: [
        String.raw`Notion : la loi de Poisson compte des événements <b>rares et indépendants</b>, survenant au cours du temps à un rythme moyen $\lambda$, sans nombre maximum fixé.`,
        String.raw`Durée de vie ou taille : grandeurs continues, donc lois à densité (exponentielle, normale).`,
        String.raw`Nombre de succès en $n$ essais fixés : binomiale. Nombre de pannes en une semaine : comptage d'événements rares dans le temps, donc Poisson.`
      ],
      level: 2 },
    { id: 'm12-q-026', q: String.raw`Parmi ces affirmations sur une densité de probabilité $f$, laquelle est <b>vraie</b> ?`,
      choices: [String.raw`$f(x) \leq 1$ pour tout $x$`, String.raw`$P(X = a) = f(a)$`, String.raw`$f \geq 0$ et $\int_{-\infty}^{+\infty} f(x)\,\mathrm{d}x = 1$`, String.raw`$f$ est croissante`], answer: 2,
      explain: String.raw`Une fonction $f$ est une densité de probabilité si elle est positive et si l'aire totale sous sa courbe vaut 1 : $\int_{-\infty}^{+\infty} f(x)\,\mathrm{d}x = 1$. Les probabilités sont alors des <b>aires</b> : $P(a \leq X \leq b) = \int_a^b f(x)\,\mathrm{d}x$. Une densité peut dépasser 1 et n'est pas forcément croissante : seule l'aire totale est imposée.`,
      why: { 0: String.raw`Faux : la densité de la loi uniforme sur $[0;\ 0{,}5]$ vaut 2 sur cet intervalle (aire $2\times 0{,}5 = 1$). On confond densité et probabilité.`, 1: String.raw`Pour une variable à densité, $P(X = a) = \int_a^a f = 0$ ; $f(a)$ est une densité (probabilité par unité de longueur), pas une probabilité.`, 3: String.raw`C'est la fonction de répartition $F$ qui est croissante ; une densité peut décroître (exponentielle) ou monter puis descendre (normale).` },
      rule: String.raw`$f \geq 0$, $\int_{\mathbb{R}} f = 1$ et $P(a \leq X \leq b) = \int_a^b f(x)\,\mathrm{d}x$`,
      topic: 'Densité de probabilité', sec: 'm12-s-va-continues',
      steps: [
        String.raw`Notion : une variable à densité prend des valeurs continues ; sa densité $f$ décrit comment la probabilité se répartit, et les probabilités sont des aires sous la courbe de $f$.`,
        String.raw`Conditions : $f(x) \geq 0$ pour tout $x$ (une aire ne peut pas être négative) et $\int_{-\infty}^{+\infty} f(x)\,\mathrm{d}x = 1$ (probabilité totale).`,
        String.raw`Rien n'impose $f \leq 1$ : la densité de $\mathcal{U}([0;\ 0{,}5])$ vaut 2, et son aire vaut bien $2\times 0{,}5 = 1$.`
      ],
      level: 1 },
    { id: 'm12-q-027', q: String.raw`$X$ est une variable à densité. Que vaut $P(X = 2)$ ?`,
      choices: [String.raw`$0$`, String.raw`$f(2)$`, String.raw`$F(2)$`, String.raw`On ne peut pas savoir`], answer: 0,
      explain: String.raw`Pour une variable à densité, une probabilité est une aire sous la courbe : $P(a \leq X \leq b) = \int_a^b f(t)\,\mathrm{d}t$. Pour une valeur isolée, l'intervalle est réduit à un point, de largeur nulle : $P(X = 2) = \int_2^2 f(t)\,\mathrm{d}t = 0$. Conséquence pratique : on peut remplacer les inégalités strictes par des larges, $P(X \lt 2) = P(X \leq 2)$.`,
      why: { 1: String.raw`$f(2)$ est la <b>densité</b> en 2, c'est-à-dire une probabilité par unité de longueur ; elle peut même dépasser 1.`, 2: String.raw`$F(2) = P(X \leq 2)$ est la probabilité de tout l'intervalle $]-\infty, 2]$, pas d'une valeur seule.`, 3: String.raw`On peut savoir : pour <b>toute</b> variable à densité, la probabilité d'une valeur isolée est nulle.` },
      rule: String.raw`Variable à densité : $P(X = a) = 0$`,
      topic: "Probabilité d'une valeur isolée", sec: 'm12-s-va-continues',
      steps: [
        String.raw`Notion : pour une variable à densité, les probabilités sont des aires sous la courbe de la densité $f$.`,
        String.raw`L'événement $X = 2$ correspond à l'intervalle $[2, 2]$, de largeur nulle : $P(X = 2) = \int_2^2 f(t)\,\mathrm{d}t = 0$.`,
        String.raw`Conséquence : $P(X \lt 2) = P(X \leq 2) = F(2)$ ; inclure ou non les bornes ne change rien.`
      ],
      level: 1 },
    { id: 'm12-q-028', q: String.raw`Si $X$ suit la loi exponentielle de paramètre $\lambda$, alors $E(X)$ vaut :`,
      choices: [String.raw`$\lambda$`, String.raw`$\frac1\lambda$`, String.raw`$\frac{1}{\lambda^2}$`, String.raw`$\mathrm{e}^{-\lambda}$`], answer: 1,
      explain: String.raw`La loi exponentielle $\mathcal{E}(\lambda)$ a pour densité $f(x) = \lambda\mathrm{e}^{-\lambda x}$ sur $[0, +\infty[$. Par intégration par parties, $E(X) = \int_0^{+\infty} x\lambda\mathrm{e}^{-\lambda x}\,\mathrm{d}x = \frac1\lambda$. Interprétation : $\lambda$ est un taux (par exemple 0,01 panne par heure), donc la durée moyenne avant la panne est $\frac{1}{0{,}01} = 100$ heures.`,
      why: { 0: String.raw`$\lambda$ est l'espérance de la loi de <b>Poisson</b> ; pour l'exponentielle, qui mesure une durée, c'est l'inverse du taux.`, 2: String.raw`$\frac{1}{\lambda^2}$ est la <b>variance</b> de la loi exponentielle, pas son espérance.`, 3: String.raw`$\mathrm{e}^{-\lambda} = P(X \gt 1)$ est une probabilité, pas une durée moyenne.` },
      rule: String.raw`$X \sim \mathcal{E}(\lambda)$ : $E(X) = \frac1\lambda$, $V(X) = \frac{1}{\lambda^2}$, $P(X \gt t) = \mathrm{e}^{-\lambda t}$`,
      topic: 'Loi exponentielle', sec: 'm12-s-va-continues',
      steps: [
        String.raw`Notion : la loi exponentielle de paramètre $\lambda \gt 0$ modélise une durée de vie sans vieillissement ; sa densité est $f(x) = \lambda\mathrm{e}^{-\lambda x}$ pour $x \geq 0$.`,
        String.raw`Espérance : $E(X) = \int_0^{+\infty} x\lambda\mathrm{e}^{-\lambda x}\,\mathrm{d}x$. Intégration par parties ($u = x$, $v = -\mathrm{e}^{-\lambda x}$) : $\left[-x\mathrm{e}^{-\lambda x}\right]_0^{+\infty} + \int_0^{+\infty}\mathrm{e}^{-\lambda x}\,\mathrm{d}x = 0 + \frac1\lambda$.`,
        String.raw`Donc $E(X) = \frac1\lambda$ : si $\lambda$ est un taux de pannes par heure, $\frac1\lambda$ est la durée de vie moyenne en heures.`
      ],
      level: 1 },
    { id: 'm12-q-029', q: String.raw`La durée de vie $X$ d'un composant suit une loi exponentielle. Sachant qu'il a déjà fonctionné 1000 h, la probabilité qu'il fonctionne encore au moins 500 h est égale à :`,
      choices: [String.raw`$P(X \gt 1500)$`, String.raw`$P(X \gt 1000)\times P(X \gt 1500)$`, String.raw`$1 - P(X \leq 1000)$`, String.raw`$P(X \gt 500)$`], answer: 3,
      explain: String.raw`Pour la loi exponentielle, $P(X \gt t) = \mathrm{e}^{-\lambda t}$. Comme $\{X \gt 1500\}$ est inclus dans $\{X \gt 1000\}$, la probabilité conditionnelle vaut $\frac{P(X \gt 1500)}{P(X \gt 1000)} = \frac{\mathrm{e}^{-1500\lambda}}{\mathrm{e}^{-1000\lambda}} = \mathrm{e}^{-500\lambda} = P(X \gt 500)$. C'est la propriété d'<b>absence de mémoire</b> : un composant qui a déjà fonctionné 1000 h se comporte comme un neuf.`,
      why: { 0: String.raw`$P(X \gt 1500)$ est la probabilité <b>non conditionnelle</b> de durer 1500 h : on oublie l'information « il a déjà fonctionné 1000 h », il faut diviser par $P(X \gt 1000)$.`, 1: String.raw`On divise par $P(X \gt 1000)$ (définition de la probabilité conditionnelle), on ne multiplie pas.`, 2: String.raw`$1 - P(X \leq 1000) = P(X \gt 1000)$ est la probabilité d'atteindre 1000 h, pas de durer 500 h de plus.` },
      rule: String.raw`Absence de mémoire : $P_{X \gt s}(X \gt s + t) = P(X \gt t)$`,
      topic: 'Absence de mémoire', sec: 'm12-s-va-continues',
      steps: [
        String.raw`Notion : pour $X \sim \mathcal{E}(\lambda)$, $P(X \gt t) = \mathrm{e}^{-\lambda t}$, et une probabilité conditionnelle se calcule par $P_B(A) = \frac{P(A\cap B)}{P(B)}$.`,
        String.raw`Ici $B = \{X \gt 1000\}$ et $A = \{X \gt 1500\}$ ; comme $A \subset B$ (durer 1500 h implique durer 1000 h), $A\cap B = A$.`,
        String.raw`$P_B(A) = \frac{\mathrm{e}^{-1500\lambda}}{\mathrm{e}^{-1000\lambda}} = \mathrm{e}^{-1500\lambda + 1000\lambda} = \mathrm{e}^{-500\lambda} = P(X \gt 500)$.`
      ],
      level: 3 },
    { id: 'm12-q-030', q: String.raw`Si $X \sim \mathcal{N}(\mu, \sigma^2)$, quelle variable suit la loi $\mathcal{N}(0, 1)$ ?`,
      choices: [String.raw`$\dfrac{X - \mu}{\sigma^2}$`, String.raw`$\dfrac{X - \mu}{\sigma}$`, String.raw`$\dfrac{X - \sigma}{\mu}$`, String.raw`$\dfrac{X}{\sigma} - \mu$`], answer: 1,
      explain: String.raw`Pour passer de $X \sim \mathcal{N}(\mu, \sigma^2)$ à la loi $\mathcal{N}(0, 1)$, on <b>centre</b> (on retire la moyenne $\mu$) puis on <b>réduit</b> (on divise par l'écart-type $\sigma$). Avec $Z = \frac{X - \mu}{\sigma}$, on a $E(Z) = \frac{\mu - \mu}{\sigma} = 0$ et $V(Z) = \frac{\sigma^2}{\sigma^2} = 1$. C'est ce qui permet d'utiliser une seule table, celle de $\Phi$.`,
      why: { 0: String.raw`On divise par l'écart-type $\sigma$, pas par la variance $\sigma^2$ : sinon $V(Z) = \frac{\sigma^2}{\sigma^4} = \frac{1}{\sigma^2}$.`, 2: String.raw`Les rôles de $\mu$ et $\sigma$ sont inversés : on retire la moyenne et on divise par l'écart-type.`, 3: String.raw`Il faut retirer $\mu$ <b>avant</b> de diviser : $E\left(\frac{X}{\sigma} - \mu\right) = \frac{\mu}{\sigma} - \mu \neq 0$ en général.` },
      rule: String.raw`$X \sim \mathcal{N}(\mu, \sigma^2) \Rightarrow Z = \dfrac{X - \mu}{\sigma} \sim \mathcal{N}(0, 1)$`,
      topic: 'Centrer-réduire', sec: 'm12-s-normale',
      steps: [
        String.raw`Notion : centrer, c'est soustraire la moyenne pour obtenir une moyenne nulle ; réduire, c'est diviser par l'écart-type pour obtenir un écart-type égal à 1.`,
        String.raw`$Z = \frac{X - \mu}{\sigma}$ : $E(Z) = \frac{E(X) - \mu}{\sigma} = \frac{\mu - \mu}{\sigma} = 0$.`,
        String.raw`$V(Z) = \frac{1}{\sigma^2}V(X) = \frac{\sigma^2}{\sigma^2} = 1$ ; une transformée affine d'une variable normale est normale, donc $Z \sim \mathcal{N}(0, 1)$.`
      ],
      level: 1 },
    { id: 'm12-q-031', q: String.raw`Pour $X \sim \mathcal{N}(\mu, \sigma^2)$, $P(\mu - 2\sigma \leq X \leq \mu + 2\sigma)$ vaut environ :`,
      choices: [String.raw`$0{,}68$`, String.raw`$0{,}95$`, String.raw`$0{,}997$`, String.raw`$0{,}5$`], answer: 1,
      explain: String.raw`Pour toute loi normale, la proportion des valeurs situées à moins de $k$ écarts-types de la moyenne ne dépend que de $k$ : environ 68 % pour $k = 1$, 95 % pour $k = 2$ et 99,7 % pour $k = 3$. Ici on demande l'intervalle $[\mu - 2\sigma, \mu + 2\sigma]$, d'où environ $0{,}95$ (plus précisément $0{,}9545$ ; c'est $\pm 1{,}96\sigma$ qui donne exactement 95 %).`,
      why: { 0: String.raw`$0{,}68$ correspond à l'intervalle $\mu \pm \sigma$ (un seul écart-type) : on s'est trompé de ligne dans la règle 68-95-99,7.`, 2: String.raw`$0{,}997$ correspond à $\mu \pm 3\sigma$ (trois écarts-types).`, 3: String.raw`$0{,}5$ est $P(X \leq \mu)$, par symétrie de la courbe autour de $\mu$ : rien à voir avec un intervalle centré.` },
      rule: String.raw`$\mu \pm \sigma$ : 68 % ; $\mu \pm 2\sigma$ : 95 % ; $\mu \pm 3\sigma$ : 99,7 %`,
      topic: 'Règle 68-95-99,7', sec: 'm12-s-normale',
      steps: [
        String.raw`Notion : la loi normale $\mathcal{N}(\mu, \sigma^2)$ a une courbe en cloche centrée en $\mu$, dont la largeur est réglée par l'écart-type $\sigma$.`,
        String.raw`En centrant-réduisant : $P(\mu - 2\sigma \leq X \leq \mu + 2\sigma) = P(-2 \leq Z \leq 2) = \Phi(2) - \Phi(-2) = 2\Phi(2) - 1$.`,
        String.raw`Avec $\Phi(2) \approx 0{,}977$ : $2\times 0{,}977 - 1 \approx 0{,}954$, soit environ 95 %.`
      ],
      level: 1 },
    { id: 'm12-q-032', q: String.raw`Sachant que $\Phi(1{,}96) \approx 0{,}975$, que vaut $\Phi(-1{,}96)$ ?`,
      choices: [String.raw`$0{,}025$`, String.raw`$-0{,}975$`, String.raw`$0{,}975$`, String.raw`$0{,}05$`], answer: 0,
      explain: String.raw`$\Phi(x) = P(Z \leq x)$ est l'aire à gauche de $x$ sous la cloche de $\mathcal{N}(0, 1)$. La courbe étant symétrique par rapport à 0, l'aire à gauche de $-x$ est égale à l'aire à droite de $x$ : $\Phi(-x) = 1 - \Phi(x)$. D'où $\Phi(-1{,}96) = 1 - 0{,}975 = 0{,}025$.`,
      why: { 1: String.raw`Une probabilité n'est jamais négative : la symétrie donne $\Phi(-x) = 1 - \Phi(x)$, pas $-\Phi(x)$.`, 2: String.raw`$\Phi$ est croissante : $\Phi(-1{,}96) \lt \Phi(0) = 0{,}5$, elle ne peut pas valoir $0{,}975$.`, 3: String.raw`$0{,}05 = P(|Z| \gt 1{,}96)$ regroupe les deux queues ; une seule queue vaut la moitié, $0{,}025$.` },
      rule: String.raw`$\Phi(-x) = 1 - \Phi(x)$`,
      topic: 'Symétrie de la loi normale', sec: 'm12-s-normale',
      steps: [
        String.raw`Notion : $\Phi(x) = P(Z \leq x)$ est la fonction de répartition de $Z \sim \mathcal{N}(0, 1)$, c'est-à-dire l'aire sous la cloche à gauche de $x$.`,
        String.raw`La cloche est symétrique par rapport à 0 : l'aire à gauche de $-x$ est égale à l'aire à droite de $x$, soit $\Phi(-x) = 1 - \Phi(x)$.`,
        String.raw`$\Phi(-1{,}96) = 1 - \Phi(1{,}96) = 1 - 0{,}975 = 0{,}025$.`
      ],
      level: 2 },
    { id: 'm12-q-033', q: String.raw`D'après le théorème central limite, la moyenne $\overline{X}_n$ de $n$ variables indépendantes de même loi (espérance $\mu$, variance $\sigma^2$) suit approximativement, pour $n$ grand :`,
      choices: [String.raw`$\mathcal{N}(\mu, \sigma^2)$`, String.raw`$\mathcal{N}(n\mu, n\sigma^2)$`, String.raw`$\mathcal{N}\left(\mu, \frac{\sigma^2}{n}\right)$`, String.raw`la même loi que les $X_i$`], answer: 2,
      explain: String.raw`La moyenne $\overline{X}_n = \frac{X_1 + \dots + X_n}{n}$ a pour espérance $\mu$ (linéarité) et pour variance $\frac{1}{n^2}\times n\sigma^2 = \frac{\sigma^2}{n}$ (indépendance). Le théorème central limite ajoute que sa loi devient approximativement normale quand $n$ est grand, quelle que soit la loi des $X_i$ : $\overline{X}_n \approx \mathcal{N}\left(\mu, \frac{\sigma^2}{n}\right)$. Plus $n$ est grand, plus la moyenne se concentre autour de $\mu$.`,
      why: { 0: String.raw`La moyenne est moins dispersée que chaque $X_i$ : sa variance est divisée par $n$. Garder $\sigma^2$ revient à oublier l'effet de moyenne.`, 1: String.raw`$\mathcal{N}(n\mu, n\sigma^2)$ est la loi approchée de la <b>somme</b> $X_1 + \dots + X_n$, pas de la moyenne (il faut encore diviser par $n$).`, 3: String.raw`Tout l'intérêt du TCL : quelle que soit la loi des $X_i$ (uniforme, binomiale…), la moyenne devient approximativement normale.` },
      rule: String.raw`TCL : $\overline{X}_n \approx \mathcal{N}\left(\mu, \frac{\sigma^2}{n}\right)$ pour $n$ grand`,
      topic: 'Théorème central limite', sec: 'm12-s-limites-stats',
      steps: [
        String.raw`Notion : le théorème central limite (TCL) dit que la moyenne de nombreuses variables indépendantes de même loi suit approximativement une loi normale, quelle que soit la loi de départ.`,
        String.raw`Espérance : $E(\overline{X}_n) = \frac1n(\mu + \dots + \mu) = \frac{n\mu}{n} = \mu$.`,
        String.raw`Variance (grâce à l'indépendance) : $V(\overline{X}_n) = \frac{1}{n^2}(\sigma^2 + \dots + \sigma^2) = \frac{n\sigma^2}{n^2} = \frac{\sigma^2}{n}$.`,
        String.raw`Conclusion : $\overline{X}_n \approx \mathcal{N}\left(\mu, \frac{\sigma^2}{n}\right)$ pour $n$ grand.`
      ],
      level: 2 },
    { id: 'm12-q-034', q: String.raw`Quelle est la médiane de la série $1,\ 3,\ 4,\ 7,\ 100$ ?`,
      choices: [String.raw`$23$`, String.raw`$7$`, String.raw`$4$`], answer: 2,
      explain: String.raw`La médiane est la valeur qui partage la série <b>triée</b> en deux moitiés de même effectif. La série $1, 3, 4, 7, 100$ est déjà triée et comporte 5 valeurs (nombre impair) : la médiane est la 3e, soit 4, avec deux valeurs en dessous et deux au-dessus. La valeur extrême 100 ne l'influence pas, alors que la moyenne vaut $\frac{115}{5} = 23$ : la médiane est <b>robuste</b> aux valeurs aberrantes.`,
      why: { 0: String.raw`23 est la <b>moyenne</b> ($\frac{115}{5}$), tirée vers le haut par la valeur extrême 100 ; la médiane est la valeur du milieu.`, 1: String.raw`7 est la 4e valeur : avec 5 valeurs, le milieu est la 3e (rang $\frac{5 + 1}{2} = 3$).` },
      rule: String.raw`Médiane : valeur de rang $\frac{n+1}{2}$ si $n$ est impair, moyenne des deux valeurs centrales si $n$ est pair`,
      topic: 'Médiane', sec: 'm12-s-limites-stats',
      steps: [
        String.raw`Notion : la médiane est la valeur « du milieu » d'une série triée : il y a autant de valeurs en dessous qu'au-dessus.`,
        String.raw`Série triée : $1, 3, 4, 7, 100$ ; effectif $n = 5$ (impair), donc la médiane est la valeur de rang $\frac{n + 1}{2} = 3$.`,
        String.raw`La 3e valeur est 4 : médiane $= 4$. Comparaison : la moyenne vaut $\frac{115}{5} = 23$, gonflée par la valeur 100.`
      ],
      level: 1 },
    { id: 'm12-q-035', q: String.raw`Pour diviser par 2 la largeur d'un intervalle de confiance d'une moyenne (même niveau de confiance), il faut multiplier la taille de l'échantillon par :`,
      choices: [String.raw`$2$`, String.raw`$\sqrt2$`, String.raw`$8$`, String.raw`$4$`], answer: 3,
      explain: String.raw`L'intervalle de confiance à 95 % d'une moyenne est $\bar x \pm 1{,}96\frac{\sigma}{\sqrt n}$, de largeur $2\times 1{,}96\frac{\sigma}{\sqrt n}$, proportionnelle à $\frac{1}{\sqrt n}$. Pour diviser cette largeur par 2, il faut que $\sqrt n$ soit multiplié par 2, donc que $n$ soit multiplié par $2^2 = 4$. C'est la « loi en racine de $n$ » : gagner en précision coûte cher en nombre de mesures.`,
      why: { 0: String.raw`Doubler $n$ multiplie $\sqrt n$ par $\sqrt2$, donc ne divise la largeur que par $\sqrt2 \approx 1{,}41$ : on a raisonné comme si la largeur était proportionnelle à $\frac1n$.`, 1: String.raw`C'est l'inverse : c'est $\sqrt n$ qui doit doubler, donc $n$ doit être multiplié par $2^2 = 4$, pas par $\sqrt2$.`, 2: String.raw`8 fois plus de mesures diviseraient la largeur par $\sqrt8 \approx 2{,}83$ : c'est plus que nécessaire.` },
      rule: String.raw`Largeur de l'IC proportionnelle à $\dfrac{\sigma}{\sqrt n}$`,
      topic: 'Intervalle de confiance', sec: 'm12-s-limites-stats',
      steps: [
        String.raw`Notion : un intervalle de confiance à 95 % encadre la moyenne inconnue $\mu$ ; pour une moyenne, c'est $\bar x \pm 1{,}96\frac{\sigma}{\sqrt n}$, de largeur $L = 2\times 1{,}96\,\frac{\sigma}{\sqrt n}$.`,
        String.raw`La largeur est proportionnelle à $\frac{1}{\sqrt n}$ : pour la diviser par 2, il faut multiplier $\sqrt n$ par 2.`,
        String.raw`$\sqrt{n'} = 2\sqrt n \iff n' = 4n$ : il faut 4 fois plus de mesures.`
      ],
      level: 3 }
  ],

  exercises: [
    { id: 'm12-x-001',
      prompt: String.raw`De combien de façons peut-on ranger 5 livres différents sur une étagère ?`,
      answer: '120', vars: [], check: 'value',
      topic: 'Permutations', sec: 'm12-s-denombrement',
      steps: [
        String.raw`Notion : ranger $n$ objets distincts dans un ordre, c'est faire une <b>permutation</b> ; il y en a $n! = n\times(n-1)\times\cdots\times 1$.`,
        String.raw`On remplit les places une par une : 5 choix de livre pour la 1re place, puis 4 pour la 2e (un livre est déjà placé), puis 3, puis 2, puis 1.`,
        String.raw`Principe multiplicatif : $5\times 4\times 3\times 2\times 1 = 120$.`,
        String.raw`Ordre de grandeur : il y a déjà $3! = 6$ rangements pour 3 livres ; 120 pour 5 livres est plausible.`
      ],
      rule: String.raw`Nombre de permutations de $n$ objets distincts : $n!$`,
      pitfall: String.raw`Additionner les choix successifs au lieu de les multiplier.`,
      mistakes: [
        { expr: '25', msg: String.raw`$5^2$ ne compte pas les rangements : il y a 5 choix pour la 1re place, 4 pour la 2e, etc., et on les multiplie.` },
        { expr: '15', msg: String.raw`On multiplie les choix successifs, on ne les additionne pas : $5\times 4\times 3\times 2\times 1$, et non $5 + 4 + 3 + 2 + 1$.` },
        { expr: '3125', msg: String.raw`$5^5$ autoriserait à placer plusieurs fois le même livre ; ici chaque livre n'est placé qu'une fois, d'où $5!$.` }
      ],
      hint: String.raw`Nombre de permutations de $n$ objets : $n!$.`,
      explain: String.raw`$5! = 5\times 4\times 3\times 2\times 1 = 120$.`,
      level: 1 },
    { id: 'm12-x-002',
      prompt: String.raw`6 personnes se serrent la main deux à deux (une seule fois par paire). Combien de poignées de main ?`,
      answer: '15', vars: [], check: 'value',
      topic: 'Combinaisons', sec: 'm12-s-denombrement',
      steps: [
        String.raw`Notion : $\binom{n}{k}$ (« $k$ parmi $n$ ») compte les façons de choisir $k$ éléments parmi $n$ sans ordre ni répétition : $\binom{n}{k} = \frac{n!}{k!\,(n-k)!}$.`,
        String.raw`Une poignée de main correspond à une <b>paire</b> de personnes ; « A serre la main de B » est la même poignée que « B serre la main de A » : l'ordre ne compte pas, on compte $\binom62$.`,
        String.raw`$\binom{6}{2} = \frac{6\times 5}{2\times 1} = \frac{30}{2} = 15$.`,
        String.raw`Vérification : chaque personne serre 5 mains, soit $6\times 5 = 30$ « mains tendues », et chaque poignée en contient 2 : $\frac{30}{2} = 15$ ✔.`
      ],
      rule: String.raw`$\binom{n}{k} = \frac{n!}{k!\,(n-k)!}$ ; $\binom{n}{2} = \frac{n(n-1)}{2}$`,
      pitfall: String.raw`Compter chaque paire deux fois (A-B et B-A).`,
      mistakes: [
        { expr: '30', msg: String.raw`Tu as compté chaque poignée de main deux fois (A-B et B-A) : l'ordre ne compte pas, divise par $2! = 2$.` },
        { expr: '36', msg: String.raw`Une personne ne se serre pas la main à elle-même, et l'ordre ne compte pas : c'est $\binom62$, pas $6^2$.` },
        { expr: '12', msg: String.raw`$6\times 2$ : on a multiplié $n$ par $k$ ; il faut appliquer $\binom{6}{2} = \frac{6\times 5}{2}$.` }
      ],
      hint: String.raw`Une poignée de main = une paire non ordonnée : $\binom{6}{2}$.`,
      explain: String.raw`$\binom{6}{2} = \frac{6\times 5}{2} = 15$.`,
      level: 1 },
    { id: 'm12-x-003',
      prompt: String.raw`8 coureurs disputent une course. Combien de podiums (or, argent, bronze) différents sont possibles ?`,
      answer: '336', vars: [], check: 'value',
      topic: 'Arrangements', sec: 'm12-s-denombrement',
      steps: [
        String.raw`Notion : un <b>arrangement</b> est un choix <b>ordonné</b> de $k$ éléments distincts parmi $n$ ; il y en a $A_n^k = n(n-1)\cdots(n-k+1) = \frac{n!}{(n-k)!}$.`,
        String.raw`Sur un podium l'ordre compte (or ≠ argent) et un coureur n'occupe qu'une marche : c'est un arrangement de 3 parmi 8.`,
        String.raw`Or : 8 choix ; argent : 7 coureurs restants ; bronze : 6 coureurs restants.`,
        String.raw`$A_8^3 = 8\times 7\times 6 = 336$. Contrôle : $336 = 3!\times\binom83 = 6\times 56$ ✔.`
      ],
      rule: String.raw`Ordre sans répétition : $A_n^k = \frac{n!}{(n-k)!}$`,
      pitfall: String.raw`Utiliser $\binom{n}{k}$ alors que les places sont distinguées.`,
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
      topic: 'Listes avec répétitions', sec: 'm12-s-denombrement',
      steps: [
        String.raw`Notion : une $p$-liste est une suite ordonnée de $p$ éléments pris parmi $n$, répétitions permises ; il y en a $n^p$.`,
        String.raw`Un code = 4 positions ordonnées (1234 ≠ 4321), et chaque position peut reprendre un chiffre déjà utilisé (7777 est valide).`,
        String.raw`10 choix pour chaque position : $10\times 10\times 10\times 10 = 10^4 = 10\,000$.`,
        String.raw`Vérification : ce sont tous les nombres de 0000 à 9999, soit bien $10\,000$ codes ✔.`
      ],
      rule: String.raw`Ordre + répétitions : $n^p$`,
      pitfall: String.raw`Interdire les répétitions alors que l'énoncé les autorise.`,
      mistakes: [
        { expr: '5040', msg: String.raw`$10\times 9\times 8\times 7$ interdit les répétitions ; un code comme 7777 est permis.` },
        { expr: '210', msg: String.raw`$\binom{10}{4}$ ignore l'ordre et les répétitions ; or 1234 et 4321 sont des codes différents.` },
        { expr: '40', msg: String.raw`$10\times 4$ : on multiplie les choix de <b>chaque</b> position entre eux, $10\times 10\times 10\times 10$.` }
      ],
      hint: String.raw`Ordre important et répétitions : $n^p$.`,
      explain: String.raw`10 choix pour chacun des 4 chiffres : $10^4 = 10\,000$.`,
      level: 1 },
    { id: 'm12-x-005',
      prompt: String.raw`Combien de mains de 5 cartes peut-on former avec un jeu de 32 cartes ?`,
      answer: '201376', vars: [], check: 'value',
      topic: 'Combinaisons', sec: 'm12-s-denombrement',
      steps: [
        String.raw`Notion : une main est un <b>ensemble</b> de cartes : l'ordre de réception ne compte pas et une carte ne peut pas apparaître deux fois. On compte donc des combinaisons $\binom{32}{5}$.`,
        String.raw`Choix ordonnés : $32\times 31\times 30\times 29\times 28 = 24\,165\,120$.`,
        String.raw`Chaque main y est comptée $5! = 120$ fois (une fois par ordre de ses 5 cartes).`,
        String.raw`$\binom{32}{5} = \frac{24\,165\,120}{120} = 201\,376$.`
      ],
      rule: String.raw`$\binom{n}{k} = \frac{n(n-1)\cdots(n-k+1)}{k!}$`,
      pitfall: String.raw`Oublier de diviser par $k!$ : on compterait des tirages ordonnés.`,
      mistakes: [
        { expr: '24165120', msg: String.raw`$32\times 31\times 30\times 29\times 28$ tient compte de l'ordre ; une main est un ensemble : divise par $5! = 120$.` },
        { expr: '32^5', msg: String.raw`$32^5$ autorise les répétitions et tient compte de l'ordre ; une main contient 5 cartes distinctes, sans ordre.` }
      ],
      hint: String.raw`$\binom{32}{5} = \frac{32\times 31\times 30\times 29\times 28}{5!}$. (Tu peux taper binom(32, 5).)`,
      explain: String.raw`$\binom{32}{5} = \frac{24\,165\,120}{120} = 201\,376$.`,
      level: 2 },
    { id: 'm12-x-006',
      prompt: String.raw`Combien d'anagrammes (mots, ayant un sens ou non) peut-on former avec les lettres du mot ESEO ?`,
      answer: '12', vars: [], check: 'value',
      topic: 'Permutations avec répétitions', sec: 'm12-s-denombrement',
      steps: [
        String.raw`Notion : le nombre d'anagrammes d'un mot de $n$ lettres dont certaines se répètent $n_1, n_2, \dots$ fois est $\frac{n!}{n_1!\,n_2!\cdots}$ : on divise par les échanges de lettres identiques, qui ne changent pas le mot.`,
        String.raw`ESEO : 4 lettres, dont E deux fois, S une fois, O une fois.`,
        String.raw`Si les deux E étaient discernables ($E_1$, $E_2$), il y aurait $4! = 24$ mots.`,
        String.raw`Échanger $E_1$ et $E_2$ donne le même mot : chaque mot est compté $2! = 2$ fois, d'où $\frac{24}{2} = 12$ anagrammes.`
      ],
      rule: String.raw`Anagrammes : $\frac{n!}{n_1!\,n_2!\cdots n_p!}$`,
      pitfall: String.raw`Oublier qu'échanger deux lettres identiques ne crée pas un nouveau mot.`,
      mistakes: [
        { expr: '24', msg: String.raw`$4! = 24$ compte deux fois chaque mot, car échanger les deux E ne change rien : divise par $2!$.` },
        { expr: '6', msg: String.raw`Tu as divisé par $2!\times 2!$ ; seul le E est répété (S et O n'apparaissent qu'une fois), on divise seulement par $2!$.` }
      ],
      hint: String.raw`4 lettres dont le E répété 2 fois : $\frac{4!}{2!}$.`,
      explain: String.raw`$\frac{4!}{2!} = \frac{24}{2} = 12$.`,
      level: 2 },
    { id: 'm12-x-007',
      prompt: String.raw`On forme un comité de 2 femmes choisies parmi 5 et de 3 hommes choisis parmi 6. Combien de comités possibles ?`,
      answer: '200', vars: [], check: 'value',
      topic: 'Principe multiplicatif', sec: 'm12-s-denombrement',
      steps: [
        String.raw`Notion : principe multiplicatif — quand un choix se fait en plusieurs étapes successives, on <b>multiplie</b> les nombres de possibilités de chaque étape.`,
        String.raw`Femmes : 2 parmi 5, sans ordre : $\binom52 = \frac{5\times 4}{2} = 10$.`,
        String.raw`Hommes : 3 parmi 6, sans ordre : $\binom63 = \frac{6\times 5\times 4}{3\times 2\times 1} = 20$.`,
        String.raw`Chaque choix de femmes s'associe à chaque choix d'hommes : $10\times 20 = 200$ comités.`
      ],
      rule: String.raw`Étapes successives : on multiplie, ici $\binom{5}{2}\times\binom{6}{3}$`,
      pitfall: String.raw`Additionner les deux étapes au lieu de les multiplier.`,
      mistakes: [
        { expr: '30', msg: String.raw`Les deux choix se font successivement : on <b>multiplie</b> $\binom52 = 10$ par $\binom63 = 20$.` },
        { expr: '462', msg: String.raw`$\binom{11}{5}$ ne respecte pas la contrainte « 2 femmes et 3 hommes ».` }
      ],
      hint: String.raw`Principe multiplicatif : $\binom{5}{2}\times\binom{6}{3}$.`,
      explain: String.raw`$\binom{5}{2}\times\binom{6}{3} = 10\times 20 = 200$ comités.`,
      level: 2 },
    { id: 'm12-x-008',
      prompt: String.raw`Dans un jeu de 32 cartes (dont 4 as), combien de mains de 5 cartes contiennent exactement 2 as ?`,
      answer: '19656', vars: [], check: 'value',
      topic: 'Combinaisons avec contrainte', sec: 'm12-s-denombrement',
      steps: [
        String.raw`Notion : pour compter des mains vérifiant une contrainte, on découpe le choix en étapes (les as, puis les autres cartes) et on multiplie ; chaque étape est une combinaison.`,
        String.raw`Choix des 2 as parmi les 4 : $\binom42 = \frac{4\times 3}{2} = 6$.`,
        String.raw`Les 3 autres cartes doivent être prises parmi les $32 - 4 = 28$ cartes qui ne sont pas des as (sinon on aurait plus de 2 as) : $\binom{28}{3} = \frac{28\times 27\times 26}{6} = 3276$.`,
        String.raw`Total : $6\times 3276 = 19\,656$ mains.`
      ],
      rule: String.raw`« Exactement $k$ » : $\binom{\text{bons}}{k}\times\binom{\text{autres}}{n - k}$`,
      pitfall: String.raw`Choisir les cartes restantes dans tout le jeu, ce qui autorise des as supplémentaires.`,
      mistakes: [
        { expr: '29760', msg: String.raw`Les 3 autres cartes doivent être choisies parmi les 28 non-as (sinon tu peux avoir plus de 2 as) : $\binom{28}{3}$, pas $\binom{32}{3}$.` },
        { expr: '3282', msg: String.raw`On <b>multiplie</b> les deux étapes (principe multiplicatif), on ne les additionne pas : $6\times 3276$.` }
      ],
      hint: String.raw`2 as parmi 4, puis 3 cartes parmi les 28 qui ne sont pas des as.`,
      explain: String.raw`$\binom{4}{2}\times\binom{28}{3} = 6\times 3276 = 19\,656$.`,
      level: 3 },
    { id: 'm12-x-009',
      prompt: String.raw`On lance deux dés équilibrés. Quelle est la probabilité que la somme soit égale à 7 ? (fraction exacte)`,
      answer: '1/6', vars: [], check: 'value',
      topic: 'Équiprobabilité', sec: 'm12-s-probas',
      steps: [
        String.raw`Notion : en situation d'équiprobabilité, $P(A) = \frac{\text{cas favorables}}{\text{cas possibles}}$, à condition que toutes les issues de l'univers aient la même probabilité.`,
        String.raw`Univers : les couples $(d_1, d_2)$, soit $6\times 6 = 36$ issues équiprobables (les deux dés sont distingués).`,
        String.raw`Somme 7 : $(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)$, soit 6 couples.`,
        String.raw`$P = \frac{6}{36} = \frac16$.`
      ],
      rule: String.raw`Équiprobabilité : $P(A) = \frac{\operatorname{card}A}{\operatorname{card}\Omega}$`,
      pitfall: String.raw`Prendre les 11 sommes possibles comme issues équiprobables.`,
      mistakes: [
        { expr: '1/11', msg: String.raw`Les 11 sommes possibles ne sont pas équiprobables : raisonne sur les 36 couples $(d_1, d_2)$.` },
        { expr: '1/12', msg: String.raw`Tu as oublié l'ordre : $(3, 4)$ et $(4, 3)$ sont deux issues distinctes.` },
        { expr: '7/36', msg: String.raw`Il y a 6 couples de somme 7, pas 7 : énumère-les, de $(1,6)$ à $(6,1)$.` }
      ],
      hint: String.raw`36 couples équiprobables ; compte ceux de somme 7.`,
      explain: String.raw`6 couples favorables sur 36 : $P = \frac{6}{36} = \frac16$.`,
      level: 1 },
    { id: 'm12-x-010',
      prompt: String.raw`On lance 4 fois un dé équilibré. Quelle est la probabilité d'obtenir au moins un 6 ? (valeur exacte)`,
      answer: '1-(5/6)^4', vars: [], check: 'value',
      topic: 'Événement contraire', sec: 'm12-s-probas',
      steps: [
        String.raw`Notion : le contraire de « au moins un 6 » est « aucun 6 », et $P(A) = 1 - P(\overline{A})$.`,
        String.raw`À chaque lancer, $P(\text{pas de } 6) = 1 - \frac16 = \frac56$.`,
        String.raw`Lancers indépendants, on multiplie : $P(\text{aucun } 6) = \left(\frac56\right)^4 = \frac{625}{1296}$.`,
        String.raw`$P(\text{au moins un } 6) = 1 - \frac{625}{1296} = \frac{671}{1296} \approx 0{,}518$ : un peu plus d'une chance sur deux.`
      ],
      rule: String.raw`$P(\text{au moins un}) = 1 - P(\text{aucun})$`,
      pitfall: String.raw`Additionner $\frac16$ quatre fois : les événements ne sont pas incompatibles.`,
      mistakes: [
        { expr: '2/3', msg: String.raw`$4\times\frac16$ additionne des événements non incompatibles (on peut obtenir plusieurs 6). Passe par le contraire.` },
        { expr: '(5/6)^4', msg: String.raw`C'est la probabilité de n'obtenir <b>aucun</b> 6 ; il faut prendre le complémentaire.` },
        { expr: '1-(1/6)^4', msg: String.raw`$1 - \left(\frac16\right)^4$ est le contraire de « quatre 6 » ; le contraire de « au moins un 6 » est « aucun 6 ».` }
      ],
      hint: String.raw`Contraire de « au moins un 6 » : « aucun 6 », de probabilité $\left(\frac56\right)^4$.`,
      explain: String.raw`$P = 1 - \left(\frac56\right)^4 = \frac{671}{1296} \approx 0{,}518$.`,
      level: 2 },
    { id: 'm12-x-011',
      prompt: String.raw`On sait que $P(A\cap B) = 0{,}12$ et $P(B) = 0{,}4$. Calcule $P_B(A)$.`,
      answer: '3/10', vars: [], check: 'value',
      topic: 'Probabilité conditionnelle', sec: 'm12-s-conditionnelle',
      steps: [
        String.raw`Notion : $P_B(A)$ est la probabilité de $A$ sachant que $B$ est réalisé ; on restreint l'univers à $B$ : $P_B(A) = \frac{P(A\cap B)}{P(B)}$.`,
        String.raw`On remplace : $P_B(A) = \frac{0{,}12}{0{,}4}$.`,
        String.raw`$\frac{0{,}12}{0{,}4} = \frac{12}{40} = \frac{3}{10} = 0{,}3$ (on a multiplié numérateur et dénominateur par 100).`,
        String.raw`Contrôle : le résultat est bien entre 0 et 1 ✔.`
      ],
      rule: String.raw`$P_B(A) = \dfrac{P(A\cap B)}{P(B)}$`,
      pitfall: String.raw`Multiplier par $P(B)$ au lieu de diviser.`,
      mistakes: [
        { expr: '0.048', msg: String.raw`On <b>divise</b> par $P(B)$ : $P_B(A) = \frac{P(A\cap B)}{P(B)}$, on ne multiplie pas.` },
        { expr: '0.12', msg: String.raw`$0{,}12$ est $P(A\cap B)$ ; « sachant $B$ », il faut rapporter cette probabilité à $P(B)$.` },
        { expr: '10/3', msg: String.raw`Fraction inversée : c'est $\frac{P(A\cap B)}{P(B)}$, et une probabilité ne dépasse pas 1.` }
      ],
      hint: String.raw`$P_B(A) = \dfrac{P(A\cap B)}{P(B)}$.`,
      explain: String.raw`$P_B(A) = \frac{0{,}12}{0{,}4} = 0{,}3$.`,
      level: 1 },
    { id: 'm12-x-012',
      prompt: String.raw`Une usine a deux machines. $M_1$ produit 60 % des pièces, dont 2 % sont défectueuses ; $M_2$ produit 40 % des pièces, dont 5 % sont défectueuses. Quelle est la probabilité qu'une pièce prise au hasard soit défectueuse ? (valeur exacte)`,
      answer: '4/125', vars: [], check: 'value',
      topic: 'Probabilités totales', sec: 'm12-s-conditionnelle',
      steps: [
        String.raw`Notion : formule des probabilités totales — si $M_1$, $M_2$ forment un système complet (chaque pièce vient d'une et une seule machine), $P(D) = P(M_1)P_{M_1}(D) + P(M_2)P_{M_2}(D)$.`,
        String.raw`Branche $M_1$ de l'arbre : $0{,}6\times 0{,}02 = 0{,}012$.`,
        String.raw`Branche $M_2$ : $0{,}4\times 0{,}05 = 0{,}02$.`,
        String.raw`Somme : $0{,}012 + 0{,}02 = 0{,}032 = \frac{32}{1000} = \frac{4}{125}$.`
      ],
      rule: String.raw`$P(D) = \sum_i P(M_i)\,P_{M_i}(D)$`,
      pitfall: String.raw`Additionner ou moyenner les taux sans les pondérer par les parts de production.`,
      mistakes: [
        { expr: '0.07', msg: String.raw`On n'additionne pas les taux : chacun doit être pondéré par la part de production de sa machine.` },
        { expr: '0.035', msg: String.raw`La moyenne simple des taux suppose que les machines produisent autant ; il faut pondérer par 60 % et 40 %.` }
      ],
      hint: String.raw`Probabilités totales : $P(D) = P(M_1)P_{M_1}(D) + P(M_2)P_{M_2}(D)$.`,
      explain: String.raw`$P(D) = 0{,}6\times 0{,}02 + 0{,}4\times 0{,}05 = 0{,}032 = \frac{4}{125}$.`,
      level: 2 },
    { id: 'm12-x-013',
      prompt: String.raw`Même usine : $M_1$ produit 60 % des pièces (2 % défectueuses), $M_2$ 40 % (5 % défectueuses). Une pièce est défectueuse : quelle est la probabilité qu'elle vienne de $M_1$ ? (fraction exacte)`,
      answer: '3/8', vars: [], check: 'value',
      topic: 'Formule de Bayes', sec: 'm12-s-conditionnelle',
      steps: [
        String.raw`Notion : la formule de Bayes retourne le conditionnement : $P_D(M_1) = \frac{P(M_1\cap D)}{P(D)} = \frac{P(M_1)P_{M_1}(D)}{P(D)}$.`,
        String.raw`Numérateur : $P(M_1\cap D) = 0{,}6\times 0{,}02 = 0{,}012$.`,
        String.raw`Dénominateur (probabilités totales) : $P(D) = 0{,}012 + 0{,}4\times 0{,}05 = 0{,}012 + 0{,}02 = 0{,}032$.`,
        String.raw`$P_D(M_1) = \frac{0{,}012}{0{,}032} = \frac{12}{32} = \frac38$. Bien que $M_1$ produise 60 % des pièces, elle ne fournit que 37,5 % des défectueuses.`
      ],
      rule: String.raw`Bayes : $P_D(M_1) = \dfrac{P(M_1)\,P_{M_1}(D)}{P(D)}$`,
      pitfall: String.raw`Confondre $P_{M_1}(D)$ (2 %) et $P_D(M_1)$.`,
      mistakes: [
        { expr: '5/8', msg: String.raw`C'est $P_D(M_2)$ : tu as pris la branche de la mauvaise machine au numérateur.` },
        { expr: '0.6', msg: String.raw`$0{,}6$ est la probabilité <b>avant</b> de savoir que la pièce est défectueuse ; utilise Bayes.` }
      ],
      hint: String.raw`Bayes : $P_D(M_1) = \dfrac{P(M_1)P_{M_1}(D)}{P(D)}$ avec $P(D) = 0{,}032$.`,
      explain: String.raw`$P_D(M_1) = \frac{0{,}012}{0{,}032} = \frac38$.`,
      level: 3 },
    { id: 'm12-x-014',
      prompt: String.raw`Une maladie touche 1 % de la population. Un test est positif chez 99 % des malades et chez 5 % des personnes saines. Quelle est la probabilité qu'une personne testée positive soit malade ? (fraction exacte)`,
      answer: '1/6', vars: [], check: 'value',
      topic: 'Formule de Bayes', sec: 'm12-s-conditionnelle',
      steps: [
        String.raw`Notion : on connaît $P_M(T)$ (fiabilité du test) et on cherche $P_T(M)$ : on applique Bayes, $P_T(M) = \frac{P(M)P_M(T)}{P(T)}$.`,
        String.raw`Vrais positifs : $P(M\cap T) = 0{,}01\times 0{,}99 = 0{,}0099$. Faux positifs : $P(\overline{M}\cap T) = 0{,}99\times 0{,}05 = 0{,}0495$.`,
        String.raw`Probabilités totales : $P(T) = 0{,}0099 + 0{,}0495 = 0{,}0594$.`,
        String.raw`$P_T(M) = \frac{0{,}0099}{0{,}0594} = \frac{99}{594} = \frac16 \approx 16{,}7\,\%$ : seul un positif sur six est malade, car la maladie est rare.`
      ],
      rule: String.raw`Bayes : $P_T(M) = \dfrac{P(M)\,P_M(T)}{P(M)P_M(T) + P(\overline{M})P_{\overline{M}}(T)}$`,
      pitfall: String.raw`Croire que $P_T(M) = P_M(T) = 99\,\%$.`,
      mistakes: [
        { expr: '99/100', msg: String.raw`$0{,}99$ est $P_M(T)$, la probabilité d'être positif <b>sachant</b> malade : il faut inverser le conditionnement avec Bayes.` },
        { expr: '1/100', msg: String.raw`$0{,}01$ est la probabilité d'être malade sans information ; le test positif modifie cette probabilité.` }
      ],
      hint: String.raw`$P(T) = 0{,}01\times 0{,}99 + 0{,}99\times 0{,}05$, puis $P_T(M) = \frac{0{,}01\times 0{,}99}{P(T)}$.`,
      explain: String.raw`$P(T) = 0{,}0594$ et $P_T(M) = \frac{0{,}0099}{0{,}0594} = \frac16 \approx 16{,}7\,\%$.`,
      level: 3 },
    { id: 'm12-x-015',
      prompt: String.raw`Une urne contient 3 boules rouges et 2 bleues. On tire successivement 2 boules <b>sans remise</b>. Quelle est la probabilité d'obtenir 2 boules rouges ?`,
      answer: '3/10', vars: [], check: 'value',
      topic: 'Tirages sans remise', sec: 'm12-s-conditionnelle',
      steps: [
        String.raw`Notion : probabilités composées — $P(R_1\cap R_2) = P(R_1)\times P_{R_1}(R_2)$ : on multiplie les probabilités le long d'une branche de l'arbre.`,
        String.raw`1er tirage : 3 rouges sur 5 boules, $P(R_1) = \frac35$.`,
        String.raw`2e tirage, sachant qu'une rouge est sortie (sans remise) : il reste 2 rouges sur 4 boules, $P_{R_1}(R_2) = \frac24$.`,
        String.raw`$P = \frac35\times\frac24 = \frac{6}{20} = \frac{3}{10}$. Vérification par dénombrement : $\frac{\binom32}{\binom52} = \frac{3}{10}$ ✔.`
      ],
      rule: String.raw`$P(A\cap B) = P(A)\,P_A(B)$`,
      pitfall: String.raw`Oublier qu'une boule a été retirée avant le 2e tirage.`,
      mistakes: [
        { expr: '9/25', msg: String.raw`$\left(\frac35\right)^2$ correspond à un tirage <b>avec</b> remise ; après le 1er tirage, il ne reste que 2 rouges sur 4 boules.` },
        { expr: '6/25', msg: String.raw`Après le 1er tirage il ne reste que 4 boules : $P_{R_1}(R_2) = \frac24$, pas $\frac25$.` }
      ],
      hint: String.raw`Probabilités composées : $P(R_1\cap R_2) = P(R_1)\,P_{R_1}(R_2)$.`,
      explain: String.raw`$P = \frac35\times\frac24 = \frac{3}{10}$.`,
      level: 2 },
    { id: 'm12-x-016',
      prompt: String.raw`$X$ prend les valeurs $-1$, $0$, $2$ avec les probabilités $0{,}2$ ; $0{,}5$ ; $0{,}3$. Calcule $E(X)$.`,
      answer: '2/5', vars: [], check: 'value',
      topic: 'Espérance', sec: 'm12-s-va-discretes',
      steps: [
        String.raw`Notion : l'espérance $E(X) = \sum x_ip_i$ est la moyenne des valeurs pondérée par leurs probabilités : c'est la valeur moyenne observée sur un grand nombre de répétitions.`,
        String.raw`Produits : $-1\times 0{,}2 = -0{,}2$ ; $0\times 0{,}5 = 0$ ; $2\times 0{,}3 = 0{,}6$.`,
        String.raw`Somme : $-0{,}2 + 0 + 0{,}6 = 0{,}4 = \frac25$.`,
        String.raw`Contrôle : les probabilités somment à $0{,}2 + 0{,}5 + 0{,}3 = 1$ ✔, et $E(X)$ est bien entre la plus petite valeur ($-1$) et la plus grande (2).`
      ],
      rule: String.raw`$E(X) = \sum_i x_i\,p_i$`,
      pitfall: String.raw`Faire la moyenne simple des valeurs sans tenir compte des probabilités.`,
      mistakes: [
        { expr: '1/3', msg: String.raw`$\frac{-1 + 0 + 2}{3}$ est la moyenne simple des valeurs ; l'espérance les pondère par leurs probabilités.` },
        { expr: '0.8', msg: String.raw`Erreur de signe : $-1\times 0{,}2 = -0{,}2$, pas $+0{,}2$.` }
      ],
      hint: String.raw`$E(X) = \sum x_i\,p_i$.`,
      explain: String.raw`$E(X) = -0{,}2 + 0 + 0{,}6 = 0{,}4$.`,
      level: 1 },
    { id: 'm12-x-017',
      prompt: String.raw`Même variable : $X$ prend les valeurs $-1$, $0$, $2$ avec les probabilités $0{,}2$ ; $0{,}5$ ; $0{,}3$. Calcule $V(X)$.`,
      answer: '31/25', vars: [], check: 'value',
      topic: 'Variance', sec: 'm12-s-va-discretes',
      steps: [
        String.raw`Notion : la variance mesure la dispersion autour de la moyenne ; formule de König-Huygens : $V(X) = E(X^2) - E(X)^2$.`,
        String.raw`$E(X^2) = (-1)^2\times 0{,}2 + 0^2\times 0{,}5 + 2^2\times 0{,}3 = 0{,}2 + 0 + 1{,}2 = 1{,}4$.`,
        String.raw`$E(X)^2 = 0{,}4^2 = 0{,}16$ (avec $E(X) = 0{,}4$, exercice précédent).`,
        String.raw`$V(X) = 1{,}4 - 0{,}16 = 1{,}24 = \frac{124}{100} = \frac{31}{25}$.`
      ],
      rule: String.raw`$V(X) = E(X^2) - E(X)^2$`,
      pitfall: String.raw`Retrancher $E(X)$ au lieu de $E(X)^2$.`,
      mistakes: [
        { expr: '7/5', msg: String.raw`$1{,}4$ est $E(X^2)$ : il faut retrancher $E(X)^2 = 0{,}16$.` },
        { expr: '1', msg: String.raw`On retranche le <b>carré</b> de l'espérance : $E(X)^2 = 0{,}4^2 = 0{,}16$, pas $0{,}4$.` },
        { expr: '1.56', msg: String.raw`On <b>soustrait</b> $E(X)^2$, on ne l'ajoute pas : $1{,}4 - 0{,}16$.` }
      ],
      hint: String.raw`König-Huygens : $V(X) = E(X^2) - E(X)^2$, avec $E(X) = 0{,}4$.`,
      explain: String.raw`$E(X^2) = 1{,}4$, donc $V(X) = 1{,}4 - 0{,}16 = 1{,}24 = \frac{31}{25}$.`,
      level: 2 },
    { id: 'm12-x-018',
      prompt: String.raw`On a $V(X) = 3$. Calcule $V(-2X + 7)$.`,
      answer: '12', vars: [], check: 'value',
      topic: 'Variance de aX + b', sec: 'm12-s-va-discretes',
      steps: [
        String.raw`Notion : ajouter une constante ne change pas la dispersion ; multiplier par $a$ multiplie les écarts par $a$, donc la variance par $a^2$ : $V(aX + b) = a^2V(X)$.`,
        String.raw`Ici $a = -2$ et $b = 7$ : le $+7$ disparaît.`,
        String.raw`$(-2)^2 = 4$, donc $V(-2X + 7) = 4\times 3 = 12$.`,
        String.raw`Contrôle : une variance est toujours positive, même quand $a$ est négatif ✔.`
      ],
      rule: String.raw`$V(aX + b) = a^2V(X)$`,
      pitfall: String.raw`Garder le signe de $a$ ou la constante $b$.`,
      mistakes: [
        { expr: '-6', msg: String.raw`Le facteur sort <b>au carré</b> : $(-2)^2 = 4$ ; une variance n'est jamais négative.` },
        { expr: '19', msg: String.raw`La constante 7 ne change pas la dispersion : elle disparaît de la variance.` },
        { expr: '6', msg: String.raw`Le facteur sort au carré, $(-2)^2 = 4$, pas en valeur absolue ($|-2| = 2$ concerne l'écart-type).` }
      ],
      hint: String.raw`$V(aX + b) = a^2V(X)$.`,
      explain: String.raw`$V(-2X + 7) = (-2)^2\times 3 = 12$.`,
      level: 2 },
    { id: 'm12-x-019',
      prompt: String.raw`On a $V(X) = 9$. Calcule l'écart-type $\sigma(2X + 1)$.`,
      answer: '6', vars: [], check: 'value',
      topic: 'Écart-type', sec: 'm12-s-va-discretes',
      steps: [
        String.raw`Notion : l'écart-type $\sigma = \sqrt{V}$ mesure la dispersion dans l'unité de $X$ ; il vérifie $\sigma(aX + b) = |a|\,\sigma(X)$.`,
        String.raw`$\sigma(X) = \sqrt{V(X)} = \sqrt9 = 3$.`,
        String.raw`$\sigma(2X + 1) = |2|\times 3 = 6$ (la constante 1 ne change pas la dispersion).`,
        String.raw`Vérification par la variance : $V(2X + 1) = 2^2\times 9 = 36$ et $\sqrt{36} = 6$ ✔.`
      ],
      rule: String.raw`$\sigma(aX + b) = |a|\,\sigma(X)$ et $\sigma = \sqrt{V}$`,
      pitfall: String.raw`Confondre variance et écart-type.`,
      mistakes: [
        { expr: '36', msg: String.raw`$36 = V(2X + 1)$ : l'écart-type est sa racine carrée.` },
        { expr: '18', msg: String.raw`Tu as multiplié la variance par 2 ; c'est l'écart-type $\sigma(X) = 3$ qui est multiplié par $|a| = 2$.` },
        { expr: '7', msg: String.raw`Tu as ajouté la constante 1 : elle ne change pas la dispersion, $\sigma(2X + 1) = 2\sigma(X)$.` }
      ],
      hint: String.raw`$\sigma(aX + b) = |a|\,\sigma(X)$ et $\sigma(X) = \sqrt{V(X)}$.`,
      explain: String.raw`$\sigma(X) = 3$, donc $\sigma(2X + 1) = 2\times 3 = 6$.`,
      level: 2 },
    { id: 'm12-x-020',
      prompt: String.raw`On lance un dé équilibré : on gagne 9 points si l'on obtient 6, sinon on perd 2 points. Calcule l'espérance du gain.`,
      answer: '-1/6', vars: [], check: 'value',
      topic: 'Espérance de gain', sec: 'm12-s-va-discretes',
      steps: [
        String.raw`Notion : l'espérance du gain $E(G) = \sum g_ip_i$ est le gain moyen par partie sur un grand nombre de parties ; le jeu est équitable si $E(G) = 0$.`,
        String.raw`Loi de $G$ : $G = 9$ avec probabilité $\frac16$ (obtenir 6) et $G = -2$ avec probabilité $\frac56$ (perdre se code par un gain négatif).`,
        String.raw`$E(G) = 9\times\frac16 + (-2)\times\frac56 = \frac96 - \frac{10}{6} = -\frac16$.`,
        String.raw`Interprétation : on perd en moyenne $\frac16 \approx 0{,}17$ point par partie, le jeu est légèrement défavorable au joueur.`
      ],
      rule: String.raw`$E(G) = \sum_i g_i\,p_i$ ; jeu équitable $\iff E(G) = 0$`,
      pitfall: String.raw`Oublier le signe de la perte ou supposer les deux issues équiprobables.`,
      mistakes: [
        { expr: '7/2', msg: String.raw`Les deux issues ne sont pas équiprobables : gagner a une probabilité $\frac16$, perdre $\frac56$.` },
        { expr: '19/6', msg: String.raw`Erreur de signe : perdre 2 points correspond à $G = -2$, donc au terme $-2\times\frac56$.` },
        { expr: '7/6', msg: String.raw`La perte de 2 points a une probabilité $\frac56$, pas $\frac16$.` }
      ],
      hint: String.raw`$E(G) = 9\times\frac16 + (-2)\times\frac56$.`,
      explain: String.raw`$E(G) = \frac96 - \frac{10}{6} = -\frac16$ : le jeu est défavorable.`,
      level: 2 },
    { id: 'm12-x-021',
      prompt: String.raw`$X$ suit la loi binomiale $\mathcal{B}\left(4, \frac12\right)$. Calcule $P(X = 2)$.`,
      answer: '3/8', vars: [], check: 'value',
      topic: 'Loi binomiale', sec: 'm12-s-lois-discretes',
      steps: [
        String.raw`Notion : $X \sim \mathcal{B}(n, p)$ compte les succès en $n$ épreuves indépendantes ; $P(X = k) = \binom{n}{k}p^k(1-p)^{n-k}$ : $\binom{n}{k}$ façons de placer les succès, $p^k$ pour les succès, $(1-p)^{n-k}$ pour les échecs.`,
        String.raw`Ici $n = 4$, $k = 2$, $p = \frac12$ : $\binom42 = \frac{4\times 3}{2} = 6$.`,
        String.raw`$p^2(1-p)^2 = \left(\frac12\right)^2\left(\frac12\right)^2 = \frac{1}{16}$.`,
        String.raw`$P(X = 2) = 6\times\frac{1}{16} = \frac{6}{16} = \frac38$.`
      ],
      rule: String.raw`$P(X = k) = \binom{n}{k}p^k(1-p)^{n-k}$`,
      pitfall: String.raw`Oublier le coefficient $\binom{n}{k}$.`,
      mistakes: [
        { expr: '1/16', msg: String.raw`Tu as oublié le coefficient $\binom42 = 6$ (nombre de positions possibles des 2 succès).` },
        { expr: '1/2', msg: String.raw`2 est la valeur la plus probable, mais sa probabilité n'est pas $\frac12$ : calcule $\binom42\left(\frac12\right)^4$.` }
      ],
      hint: String.raw`$P(X = k) = \binom{n}{k}p^k(1-p)^{n-k}$.`,
      explain: String.raw`$P(X = 2) = \binom42\left(\frac12\right)^4 = \frac{6}{16} = \frac38$.`,
      level: 2 },
    { id: 'm12-x-022',
      prompt: String.raw`$X$ suit la loi binomiale $\mathcal{B}(10;\ 0{,}3)$. Calcule $V(X)$.`,
      answer: '21/10', vars: [], check: 'value',
      topic: 'Variance binomiale', sec: 'm12-s-lois-discretes',
      steps: [
        String.raw`Notion : pour $X \sim \mathcal{B}(n, p)$, $E(X) = np$ et $V(X) = np(1 - p)$ (somme des $n$ variances de Bernoulli $p(1 - p)$).`,
        String.raw`Ici $n = 10$, $p = 0{,}3$, donc $1 - p = 0{,}7$.`,
        String.raw`$V(X) = 10\times 0{,}3\times 0{,}7 = 3\times 0{,}7 = 2{,}1 = \frac{21}{10}$.`
      ],
      rule: String.raw`$V(X) = np(1 - p)$`,
      pitfall: String.raw`Donner l'espérance $np$ au lieu de la variance.`,
      mistakes: [
        { expr: '3', msg: String.raw`$3 = np$ est l'espérance ; la variance vaut $np(1-p)$.` },
        { expr: '0.21', msg: String.raw`$p(1-p) = 0{,}21$ est la variance d'<b>une</b> épreuve ; il y en a $n = 10$.` },
        { expr: '0.9', msg: String.raw`C'est $np^2$ : la variance est $np(1-p)$, avec $1 - p = 0{,}7$.` }
      ],
      hint: String.raw`$V(X) = np(1 - p)$.`,
      explain: String.raw`$V(X) = 10\times 0{,}3\times 0{,}7 = 2{,}1$.`,
      level: 1 },
    { id: 'm12-x-023',
      prompt: String.raw`$X$ suit la loi binomiale $\mathcal{B}\left(5, \frac13\right)$. Calcule $P(X \geq 1)$ (valeur exacte).`,
      answer: '1-(2/3)^5', vars: [], check: 'value',
      topic: 'Loi binomiale', sec: 'm12-s-lois-discretes',
      steps: [
        String.raw`Notion : pour « au moins un succès », on passe par l'événement contraire « aucun succès » : $P(X \geq 1) = 1 - P(X = 0)$.`,
        String.raw`$P(X = 0) = \binom50\left(\frac13\right)^0\left(\frac23\right)^5 = 1\times 1\times\left(\frac23\right)^5 = \frac{32}{243}$ : 5 échecs de suite.`,
        String.raw`$P(X \geq 1) = 1 - \frac{32}{243} = \frac{243 - 32}{243} = \frac{211}{243} \approx 0{,}868$.`
      ],
      rule: String.raw`$P(X \geq 1) = 1 - P(X = 0) = 1 - (1 - p)^n$`,
      pitfall: String.raw`Confondre la probabilité d'échec $1 - p$ et celle de succès $p$.`,
      mistakes: [
        { expr: '1-(1/3)^5', msg: String.raw`$P(X = 0)$ correspond à 5 <b>échecs</b>, de probabilité $\left(\frac23\right)^5$.` },
        { expr: '(2/3)^5', msg: String.raw`C'est $P(X = 0)$ ; on veut le complémentaire.` }
      ],
      hint: String.raw`$P(X \geq 1) = 1 - P(X = 0)$.`,
      explain: String.raw`$P(X \geq 1) = 1 - \left(\frac23\right)^5 = \frac{211}{243} \approx 0{,}868$.`,
      level: 2 },
    { id: 'm12-x-024',
      prompt: String.raw`On lance un dé équilibré jusqu'à obtenir un 6 ; $X$ est le rang du premier 6. Calcule $P(X = 3)$.`,
      answer: '25/216', vars: [], check: 'value',
      topic: 'Loi géométrique', sec: 'm12-s-lois-discretes',
      steps: [
        String.raw`Notion : le rang $X$ du premier succès suit la loi géométrique $\mathcal{G}(p)$ : $P(X = k) = (1-p)^{k-1}p$, soit $k - 1$ échecs puis un succès.`,
        String.raw`Ici $p = \frac16$ (obtenir 6) et $k = 3$ : échec, échec, succès.`,
        String.raw`$P(X = 3) = \frac56\times\frac56\times\frac16 = \frac{25}{216} \approx 0{,}116$.`
      ],
      rule: String.raw`$X \sim \mathcal{G}(p)$ : $P(X = k) = (1-p)^{k-1}p$`,
      pitfall: String.raw`Compter $k$ échecs au lieu de $k - 1$.`,
      mistakes: [
        { expr: '125/1296', msg: String.raw`Avant le succès au 3e lancer, il y a seulement $3 - 1 = 2$ échecs : $\left(\frac56\right)^2$, pas $\left(\frac56\right)^3$.` },
        { expr: '1/216', msg: String.raw`$\left(\frac16\right)^3$ = trois 6 de suite ; il faut deux échecs puis un succès.` }
      ],
      hint: String.raw`Loi géométrique : $P(X = k) = (1-p)^{k-1}p$.`,
      explain: String.raw`$P(X = 3) = \left(\frac56\right)^2\times\frac16 = \frac{25}{216}$.`,
      level: 2 },
    { id: 'm12-x-025',
      prompt: String.raw`Le nombre de pannes d'une machine en un mois suit la loi de Poisson de paramètre $\lambda = 2$. Calcule la probabilité d'avoir exactement 2 pannes (valeur exacte).`,
      answer: '2*exp(-2)', vars: [], check: 'value',
      topic: 'Loi de Poisson', sec: 'm12-s-lois-discretes',
      steps: [
        String.raw`Notion : la loi de Poisson $\mathcal{P}(\lambda)$ compte des événements rares sur une durée, $\lambda$ étant leur nombre moyen : $P(X = k) = \mathrm{e}^{-\lambda}\frac{\lambda^k}{k!}$.`,
        String.raw`Ici $\lambda = 2$ et $k = 2$ : $\lambda^k = 2^2 = 4$ et $k! = 2! = 2$.`,
        String.raw`$P(X = 2) = \mathrm{e}^{-2}\times\frac42 = 2\mathrm{e}^{-2} \approx 0{,}271$.`
      ],
      rule: String.raw`$X \sim \mathcal{P}(\lambda)$ : $P(X = k) = \mathrm{e}^{-\lambda}\dfrac{\lambda^k}{k!}$`,
      pitfall: String.raw`Oublier la factorielle au dénominateur.`,
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
      topic: 'Loi de Poisson', sec: 'm12-s-lois-discretes',
      steps: [
        String.raw`Notion : $P(X \leq 1)$ regroupe les valeurs 0 et 1 (événements incompatibles) : $P(X \leq 1) = P(X = 0) + P(X = 1)$, avec $P(X = k) = \mathrm{e}^{-\lambda}\frac{\lambda^k}{k!}$.`,
        String.raw`$P(X = 0) = \mathrm{e}^{-3}\frac{3^0}{0!} = \mathrm{e}^{-3}$ (car $3^0 = 1$ et $0! = 1$).`,
        String.raw`$P(X = 1) = \mathrm{e}^{-3}\frac{3^1}{1!} = 3\mathrm{e}^{-3}$.`,
        String.raw`Somme : $\mathrm{e}^{-3} + 3\mathrm{e}^{-3} = 4\mathrm{e}^{-3} \approx 0{,}199$.`
      ],
      rule: String.raw`$P(X \leq k) = \sum_{j=0}^{k}\mathrm{e}^{-\lambda}\dfrac{\lambda^j}{j!}$`,
      pitfall: String.raw`Oublier la valeur 0 dans « $X \leq 1$ ».`,
      mistakes: [
        { expr: '3*exp(-3)', msg: String.raw`C'est seulement $P(X = 1)$ ; il faut ajouter $P(X = 0) = \mathrm{e}^{-3}$.` },
        { expr: 'exp(-3)', msg: String.raw`C'est seulement $P(X = 0)$ ; il faut ajouter $P(X = 1)$.` }
      ],
      hint: String.raw`$P(X \leq 1) = P(X = 0) + P(X = 1)$.`,
      explain: String.raw`$P(X \leq 1) = \mathrm{e}^{-3} + 3\mathrm{e}^{-3} = 4\mathrm{e}^{-3}$.`,
      level: 2 },
    { id: 'm12-x-027',
      prompt: String.raw`Pour quelle valeur de $c$ la fonction $f(x) = cx^2$ sur $[0, 3]$ (et 0 ailleurs) est-elle une densité de probabilité ?`,
      answer: '1/9', vars: [], check: 'value',
      topic: "Normalisation d'une densité", sec: 'm12-s-va-continues',
      steps: [
        String.raw`Notion : une densité doit être positive et d'aire totale 1 : $\int_{-\infty}^{+\infty} f(x)\,\mathrm{d}x = 1$. Ici $f$ est nulle hors de $[0, 3]$, donc on impose $\int_0^3 cx^2\,\mathrm{d}x = 1$ (avec $c \gt 0$).`,
        String.raw`Une primitive de $x^2$ est $\frac{x^3}{3}$, donc $\int_0^3 x^2\,\mathrm{d}x = \frac{3^3}{3} - 0 = \frac{27}{3} = 9$.`,
        String.raw`Condition : $c\times 9 = 1$, d'où $c = \frac19$.`,
        String.raw`Vérification : $\int_0^3 \frac{x^2}{9}\,\mathrm{d}x = \frac{9}{9} = 1$ ✔ et $f \geq 0$ ✔.`
      ],
      rule: String.raw`Densité : $f \geq 0$ et $\int_{\mathbb{R}} f(x)\,\mathrm{d}x = 1$`,
      pitfall: String.raw`Se tromper de primitive ($\frac{x^3}{3}$, pas $x^3$ ni $\frac{x^2}{2}$).`,
      mistakes: [
        { expr: '1/3', msg: String.raw`Une primitive de $x^2$ est $\frac{x^3}{3}$ : $\int_0^3 x^2\,\mathrm{d}x = 9$, pas 3.` },
        { expr: '9', msg: String.raw`On veut $c\times 9 = 1$, donc $c = \frac19$ (tu as donné l'inverse).` }
      ],
      hint: String.raw`Impose $\int_0^3 cx^2\,\mathrm{d}x = 1$.`,
      explain: String.raw`$\int_0^3 cx^2\,\mathrm{d}x = 9c = 1$, donc $c = \frac19$.`,
      level: 2 },
    { id: 'm12-x-028',
      prompt: String.raw`$X$ a pour densité $f(x) = 2x$ sur $[0, 1]$ (0 ailleurs). Calcule $E(X)$.`,
      answer: '2/3', vars: [], check: 'value',
      topic: 'Espérance à densité', sec: 'm12-s-va-continues',
      steps: [
        String.raw`Notion : pour une variable à densité, l'espérance est une moyenne « continue » : $E(X) = \int x\,f(x)\,\mathrm{d}x$ (analogue de $\sum x_ip_i$).`,
        String.raw`$E(X) = \int_0^1 x\times 2x\,\mathrm{d}x = \int_0^1 2x^2\,\mathrm{d}x$.`,
        String.raw`Une primitive de $2x^2$ est $\frac{2x^3}{3}$, donc $E(X) = \frac{2\times 1^3}{3} - 0 = \frac23$.`,
        String.raw`Cohérence : la densité $2x$ favorise les grandes valeurs, donc $E(X) = \frac23 \approx 0{,}67$ est bien supérieure au milieu $\frac12$ ✔.`
      ],
      rule: String.raw`$E(X) = \int_{-\infty}^{+\infty} x\,f(x)\,\mathrm{d}x$`,
      pitfall: String.raw`Intégrer $f$ seule (on obtient 1, l'aire totale) au lieu de $x\,f(x)$.`,
      mistakes: [
        { expr: '1/2', msg: String.raw`$\frac12$ serait l'espérance d'une loi uniforme sur $[0, 1]$ ; ici la densité favorise les grandes valeurs.` },
        { expr: '1', msg: String.raw`$\int_0^1 2x\,\mathrm{d}x = 1$ est l'aire totale ; l'espérance est $\int_0^1 x\,f(x)\,\mathrm{d}x$.` }
      ],
      hint: String.raw`$E(X) = \int_0^1 x\,f(x)\,\mathrm{d}x$.`,
      explain: String.raw`$E(X) = \int_0^1 2x^2\,\mathrm{d}x = \frac23$.`,
      level: 2 },
    { id: 'm12-x-029',
      prompt: String.raw`$X$ a pour densité $f(x) = 2x$ sur $[0, 1]$ (0 ailleurs). Donne sa fonction de répartition $F(x)$ pour $x \in [0, 1]$, en fonction de $x$.`,
      answer: 'x^2', vars: ['x'], check: 'expr', domain: [0, 1],
      topic: 'Fonction de répartition', sec: 'm12-s-va-continues',
      steps: [
        String.raw`Notion : la fonction de répartition $F(x) = P(X \leq x) = \int_{-\infty}^x f(t)\,\mathrm{d}t$ est l'aire sous la densité à gauche de $x$.`,
        String.raw`La densité est nulle avant 0, donc pour $x \in [0, 1]$ : $F(x) = \int_0^x 2t\,\mathrm{d}t$.`,
        String.raw`Une primitive de $2t$ est $t^2$, donc $F(x) = x^2 - 0^2 = x^2$.`,
        String.raw`Contrôles : $F(0) = 0$, $F(1) = 1$ et $F'(x) = 2x = f(x)$ ✔.`
      ],
      rule: String.raw`$F(x) = \int_{-\infty}^{x} f(t)\,\mathrm{d}t$ et $F' = f$`,
      pitfall: String.raw`Confondre la densité $f$ et la fonction de répartition $F$.`,
      mistakes: [
        { expr: '2*x', msg: String.raw`C'est la densité $f$ ; la fonction de répartition est $F(x) = \int_0^x f(t)\,\mathrm{d}t$.` },
        { expr: '2*x^2', msg: String.raw`Une primitive de $2t$ est $t^2$ (et $F(1)$ doit valoir 1, pas 2).` }
      ],
      hint: String.raw`$F(x) = \int_0^x 2t\,\mathrm{d}t$.`,
      explain: String.raw`$F(x) = \left[t^2\right]_0^x = x^2$.`,
      level: 2 },
    { id: 'm12-x-030',
      prompt: String.raw`$X$ suit la loi uniforme sur $[2, 10]$. Calcule $P(3 \leq X \leq 5)$.`,
      answer: '1/4', vars: [], check: 'value',
      topic: 'Loi uniforme', sec: 'm12-s-va-continues',
      steps: [
        String.raw`Notion : pour $X$ uniforme sur $[a, b]$, la probabilité est « également répartie » : la densité vaut $\frac{1}{b - a}$ et la probabilité d'un sous-intervalle est proportionnelle à sa longueur, $P(c \leq X \leq d) = \frac{d - c}{b - a}$.`,
        String.raw`Longueur de l'intervalle total : $10 - 2 = 8$.`,
        String.raw`Longueur de l'intervalle cherché : $5 - 3 = 2$.`,
        String.raw`$P = \frac28 = \frac14$.`
      ],
      rule: String.raw`$X \sim \mathcal{U}([a, b])$ : $P(c \leq X \leq d) = \dfrac{d - c}{b - a}$`,
      pitfall: String.raw`Diviser par $b$ au lieu de la longueur $b - a$.`,
      mistakes: [
        { expr: '1/5', msg: String.raw`On divise par la longueur de l'intervalle $[2, 10]$, soit $8$, pas par $10$.` },
        { expr: '3/8', msg: String.raw`L'intervalle cherché va de 3 à 5 : sa longueur est $5 - 3 = 2$, pas 3.` }
      ],
      hint: String.raw`$P(c \leq X \leq d) = \dfrac{d - c}{b - a}$.`,
      explain: String.raw`$P = \frac{5 - 3}{10 - 2} = \frac14$.`,
      level: 1 },
    { id: 'm12-x-031',
      prompt: String.raw`La durée de vie $X$ (en années) d'un appareil suit la loi exponentielle de paramètre $\lambda = \frac12$. Calcule $P(X \leq 1)$ (valeur exacte).`,
      answer: '1-exp(-1/2)', vars: [], check: 'value',
      topic: 'Loi exponentielle', sec: 'm12-s-va-continues',
      steps: [
        String.raw`Notion : la loi exponentielle $\mathcal{E}(\lambda)$ modélise une durée de vie ; sa fonction de répartition est $F(x) = P(X \leq x) = 1 - \mathrm{e}^{-\lambda x}$ pour $x \geq 0$.`,
        String.raw`Ici $\lambda = \frac12$ et $x = 1$, donc $\lambda x = \frac12$.`,
        String.raw`$P(X \leq 1) = 1 - \mathrm{e}^{-1/2} \approx 1 - 0{,}607 = 0{,}393$.`,
        String.raw`Interprétation : environ 39 % des appareils tombent en panne la première année (la durée de vie moyenne est $\frac1\lambda = 2$ ans).`
      ],
      rule: String.raw`$X \sim \mathcal{E}(\lambda)$ : $P(X \leq x) = 1 - \mathrm{e}^{-\lambda x}$`,
      pitfall: String.raw`Confondre $P(X \leq x)$ et $P(X \gt x) = \mathrm{e}^{-\lambda x}$.`,
      mistakes: [
        { expr: 'exp(-1/2)', msg: String.raw`$\mathrm{e}^{-\lambda t}$ est $P(X \gt t)$ ; ici on veut $P(X \leq 1) = F(1) = 1 - \mathrm{e}^{-1/2}$.` },
        { expr: '1-exp(-2)', msg: String.raw`Confusion entre $\lambda$ et $\frac1\lambda$ : $F(x) = 1 - \mathrm{e}^{-\lambda x}$ avec $\lambda = \frac12$.` }
      ],
      hint: String.raw`$F(x) = 1 - \mathrm{e}^{-\lambda x}$.`,
      explain: String.raw`$P(X \leq 1) = 1 - \mathrm{e}^{-1/2} \approx 0{,}393$.`,
      level: 2 },
    { id: 'm12-x-032',
      prompt: String.raw`$X$ suit la loi exponentielle de paramètre $\lambda = 2$. Calcule $P_{X \gt 1}(X \gt 3)$ (valeur exacte).`,
      answer: 'exp(-4)', vars: [], check: 'value',
      topic: 'Absence de mémoire', sec: 'm12-s-va-continues',
      steps: [
        String.raw`Notion : $P_B(A) = \frac{P(A\cap B)}{P(B)}$, et pour la loi exponentielle $P(X \gt t) = \mathrm{e}^{-\lambda t}$.`,
        String.raw`L'événement $\{X \gt 3\}$ est inclus dans $\{X \gt 1\}$, donc leur intersection est $\{X \gt 3\}$.`,
        String.raw`$P_{X \gt 1}(X \gt 3) = \frac{P(X \gt 3)}{P(X \gt 1)} = \frac{\mathrm{e}^{-6}}{\mathrm{e}^{-2}} = \mathrm{e}^{-6 + 2} = \mathrm{e}^{-4}$.`,
        String.raw`On retrouve $P(X \gt 2) = \mathrm{e}^{-2\times 2}$ : c'est l'absence de mémoire (avoir déjà duré 1 ne change rien aux 2 unités suivantes).`
      ],
      rule: String.raw`Absence de mémoire : $P_{X \gt s}(X \gt s + t) = P(X \gt t) = \mathrm{e}^{-\lambda t}$`,
      pitfall: String.raw`Oublier la condition et donner $P(X \gt 3)$.`,
      mistakes: [
        { expr: 'exp(-6)', msg: String.raw`$\mathrm{e}^{-6} = P(X \gt 3)$ sans condition ; il faut diviser par $P(X \gt 1) = \mathrm{e}^{-2}$.` },
        { expr: 'exp(-8)', msg: String.raw`On divise les exponentielles, on ne les multiplie pas : $\frac{\mathrm{e}^{-6}}{\mathrm{e}^{-2}} = \mathrm{e}^{-6 - (-2)} = \mathrm{e}^{-4}$.` }
      ],
      hint: String.raw`Absence de mémoire : $P_{X \gt s}(X \gt s + t) = P(X \gt t)$.`,
      explain: String.raw`$P_{X \gt 1}(X \gt 3) = \frac{\mathrm{e}^{-6}}{\mathrm{e}^{-2}} = \mathrm{e}^{-4} = P(X \gt 2)$.`,
      level: 3 },
    { id: 'm12-x-033',
      prompt: String.raw`$X$ suit la loi exponentielle de paramètre $\lambda = 3$. Donne sa fonction de répartition $F(x)$ pour $x \geq 0$, en fonction de $x$.`,
      answer: '1-exp(-3*x)', vars: ['x'], check: 'expr', domain: [0.1, 3],
      topic: 'Fonction de répartition exponentielle', sec: 'm12-s-va-continues',
      steps: [
        String.raw`Notion : $F(x) = P(X \leq x) = \int_0^x f(t)\,\mathrm{d}t$ ; pour $\mathcal{E}(3)$, la densité est $f(t) = 3\mathrm{e}^{-3t}$ sur $[0, +\infty[$.`,
        String.raw`Une primitive de $3\mathrm{e}^{-3t}$ est $-\mathrm{e}^{-3t}$ (en effet, la dérivée de $-\mathrm{e}^{-3t}$ est $-(-3)\mathrm{e}^{-3t} = 3\mathrm{e}^{-3t}$).`,
        String.raw`$F(x) = \left[-\mathrm{e}^{-3t}\right]_0^x = -\mathrm{e}^{-3x} - (-\mathrm{e}^{0}) = 1 - \mathrm{e}^{-3x}$.`,
        String.raw`Contrôles : $F(0) = 0$ et $F(x) \to 1$ quand $x \to +\infty$ ✔.`
      ],
      rule: String.raw`$X \sim \mathcal{E}(\lambda)$ : $F(x) = 1 - \mathrm{e}^{-\lambda x}$ pour $x \geq 0$`,
      pitfall: String.raw`Donner la densité ou $P(X \gt x)$ au lieu de $P(X \leq x)$.`,
      mistakes: [
        { expr: '3*exp(-3*x)', msg: String.raw`C'est la densité $f$ ; $F(x) = \int_0^x f(t)\,\mathrm{d}t$.` },
        { expr: 'exp(-3*x)', msg: String.raw`$\mathrm{e}^{-3x} = P(X \gt x)$ ; la fonction de répartition est $P(X \leq x)$.` }
      ],
      hint: String.raw`$F(x) = \int_0^x 3\mathrm{e}^{-3t}\,\mathrm{d}t$.`,
      explain: String.raw`$F(x) = \left[-\mathrm{e}^{-3t}\right]_0^x = 1 - \mathrm{e}^{-3x}$.`,
      level: 2 },
    { id: 'm12-x-034',
      prompt: String.raw`Donne la densité $\varphi(x)$ de la loi normale centrée réduite $\mathcal{N}(0, 1)$, en fonction de $x$.`,
      answer: 'exp(-x^2/2)/sqrt(2*pi)', vars: ['x'], check: 'expr',
      topic: 'Densité de la loi normale', sec: 'm12-s-normale',
      steps: [
        String.raw`Notion : la loi normale $\mathcal{N}(\mu, \sigma^2)$ a pour densité $\frac{1}{\sigma\sqrt{2\pi}}\mathrm{e}^{-\frac{(x - \mu)^2}{2\sigma^2}}$, une courbe en cloche centrée en $\mu$.`,
        String.raw`Loi centrée réduite : $\mu = 0$ et $\sigma = 1$, donc $(x - \mu)^2 = x^2$ et $2\sigma^2 = 2$.`,
        String.raw`$\varphi(x) = \frac{1}{\sqrt{2\pi}}\mathrm{e}^{-x^2/2}$.`,
        String.raw`Le facteur $\frac{1}{\sqrt{2\pi}}$ assure une aire totale de 1, car $\int_{\mathbb{R}}\mathrm{e}^{-x^2/2}\,\mathrm{d}x = \sqrt{2\pi}$ (intégrale de Gauss).`
      ],
      rule: String.raw`$\varphi(x) = \dfrac{1}{\sqrt{2\pi}}\,\mathrm{e}^{-x^2/2}$`,
      pitfall: String.raw`Oublier le $\frac12$ dans l'exposant ou la racine dans la constante.`,
      mistakes: [
        { expr: 'exp(-x^2/2)', msg: String.raw`Il manque la constante $\frac{1}{\sqrt{2\pi}}$ qui assure que l'aire totale vaut 1.` },
        { expr: 'exp(-x^2)/sqrt(2*pi)', msg: String.raw`L'exposant est $-\frac{x^2}{2}$ (variance 1).` },
        { expr: 'exp(-x^2/2)/(2*pi)', msg: String.raw`Il faut la <b>racine</b> : $\frac{1}{\sqrt{2\pi}}$, pas $\frac{1}{2\pi}$.` }
      ],
      hint: String.raw`Cas $\mu = 0$, $\sigma = 1$ de $\frac{1}{\sigma\sqrt{2\pi}}\mathrm{e}^{-\frac{(x - \mu)^2}{2\sigma^2}}$.`,
      explain: String.raw`$\varphi(x) = \frac{1}{\sqrt{2\pi}}\mathrm{e}^{-x^2/2}$.`,
      level: 1 },
    { id: 'm12-x-035',
      prompt: String.raw`$X$ suit $\mathcal{N}(10, 4)$ (moyenne 10, <b>variance</b> 4). Quelle valeur $z$ de la variable centrée réduite correspond à $x = 13$ ?`,
      answer: '3/2', vars: [], check: 'value',
      topic: 'Centrer-réduire', sec: 'm12-s-normale',
      steps: [
        String.raw`Notion : centrer-réduire transforme $X \sim \mathcal{N}(\mu, \sigma^2)$ en $Z = \frac{X - \mu}{\sigma} \sim \mathcal{N}(0, 1)$ ; $z$ mesure l'écart à la moyenne en nombre d'écarts-types.`,
        String.raw`Attention, la loi est donnée par sa <b>variance</b> : $\sigma^2 = 4$, donc $\sigma = \sqrt4 = 2$.`,
        String.raw`Centrer : $13 - 10 = 3$. Réduire : $\frac32 = 1{,}5$.`,
        String.raw`Interprétation : 13 est à 1,5 écart-type au-dessus de la moyenne, et $P(X \leq 13) = \Phi(1{,}5) \approx 0{,}933$.`
      ],
      rule: String.raw`$z = \dfrac{x - \mu}{\sigma}$ avec $\sigma = \sqrt{V}$`,
      pitfall: String.raw`Diviser par la variance au lieu de l'écart-type.`,
      mistakes: [
        { expr: '3/4', msg: String.raw`On divise par l'écart-type $\sigma = \sqrt4 = 2$, pas par la variance.` },
        { expr: '3', msg: String.raw`Après avoir centré ($13 - 10 = 3$), il faut réduire en divisant par $\sigma = 2$.` }
      ],
      hint: String.raw`$z = \dfrac{x - \mu}{\sigma}$ avec $\sigma = \sqrt{V}$.`,
      explain: String.raw`$\sigma = 2$, donc $z = \frac{13 - 10}{2} = 1{,}5$.`,
      level: 2 },
    { id: 'm12-x-036',
      prompt: String.raw`Le QI suit $\mathcal{N}(100, 15^2)$. D'après la règle 68-95-99,7, donne une valeur approchée de $P(X \gt 115)$ (nombre décimal, ex. 0.25).`,
      answer: '0.16', vars: [], check: 'value',
      topic: 'Règle 68-95-99,7', sec: 'm12-s-normale',
      steps: [
        String.raw`Notion : pour une loi normale, environ 68 % des valeurs sont dans $[\mu - \sigma, \mu + \sigma]$, et la courbe est symétrique autour de $\mu$.`,
        String.raw`Ici $\mu = 100$ et $\sigma = 15$ : $115 = \mu + \sigma$, et $P(85 \leq X \leq 115) \approx 0{,}68$.`,
        String.raw`Les deux queues ($X \lt 85$ et $X \gt 115$) totalisent $1 - 0{,}68 = 0{,}32$.`,
        String.raw`Par symétrie, chaque queue vaut $\frac{0{,}32}{2} = 0{,}16$ : $P(X \gt 115) \approx 0{,}16$ (valeur précise $1 - \Phi(1) \approx 0{,}159$).`
      ],
      rule: String.raw`$P(X \gt \mu + \sigma) \approx \frac{1 - 0{,}68}{2} = 0{,}16$`,
      pitfall: String.raw`Oublier de partager les deux queues par symétrie.`,
      mistakes: [
        { expr: '0.32', msg: String.raw`$1 - 0{,}68 = 0{,}32$ regroupe les deux queues ($X \lt 85$ et $X \gt 115$) : par symétrie, divise par 2.` },
        { expr: '0.84', msg: String.raw`$0{,}84 \approx P(X \leq 115)$ ; on demande le complémentaire.` },
        { expr: '0.68', msg: String.raw`$0{,}68$ est la probabilité d'être entre 85 et 115.` }
      ],
      hint: String.raw`$115 = \mu + \sigma$. Environ 68 % des valeurs sont dans $[\mu - \sigma, \mu + \sigma]$ ; le reste se répartit symétriquement.`,
      explain: String.raw`Les deux queues totalisent $0{,}32$, donc $P(X \gt 115) \approx 0{,}16$.`,
      level: 3 },
    { id: 'm12-x-037',
      prompt: String.raw`Calcule la médiane de la série : $3,\ 9,\ 1,\ 7,\ 4,\ 10$.`,
      answer: '11/2', vars: [], check: 'value',
      topic: 'Médiane', sec: 'm12-s-limites-stats',
      steps: [
        String.raw`Notion : la médiane partage la série <b>triée</b> en deux moitiés de même effectif.`,
        String.raw`On trie : $1, 3, 4, 7, 9, 10$ ($n = 6$ valeurs).`,
        String.raw`$n$ est pair : la médiane est la moyenne des deux valeurs centrales, de rangs 3 et 4, c'est-à-dire 4 et 7.`,
        String.raw`Médiane $= \frac{4 + 7}{2} = 5{,}5$ : 3 valeurs en dessous, 3 au-dessus ✔.`
      ],
      rule: String.raw`$n$ pair : médiane = moyenne des valeurs de rangs $\frac n2$ et $\frac n2 + 1$`,
      pitfall: String.raw`Oublier de trier la série avant de chercher le milieu.`,
      mistakes: [
        { expr: '4', msg: String.raw`Il faut d'abord <b>trier</b> la série : $1, 3, 4, 7, 9, 10$.` },
        { expr: '17/3', msg: String.raw`$\frac{34}{6}$ est la moyenne, pas la médiane.` },
        { expr: '7', msg: String.raw`7 est la 4e valeur seule ; avec un effectif pair, on fait la moyenne des 3e et 4e valeurs.` }
      ],
      hint: String.raw`Trie la série ; avec 6 valeurs (nombre pair), la médiane est la moyenne des 3e et 4e valeurs.`,
      explain: String.raw`Série triée : $1, 3, 4, 7, 9, 10$. Médiane $= \frac{4 + 7}{2} = 5{,}5$.`,
      level: 1 },
    { id: 'm12-x-038',
      prompt: String.raw`Calcule la variance (empirique, en divisant par $n$) de la série : $2,\ 4,\ 4,\ 4,\ 5,\ 5,\ 7,\ 9$.`,
      answer: '4', vars: [], check: 'value',
      topic: 'Variance empirique', sec: 'm12-s-limites-stats',
      steps: [
        String.raw`Notion : la variance empirique $s^2 = \frac1n\sum(x_i - \bar x)^2$ est la moyenne des carrés des écarts à la moyenne.`,
        String.raw`Moyenne : $\bar x = \frac{2 + 4 + 4 + 4 + 5 + 5 + 7 + 9}{8} = \frac{40}{8} = 5$.`,
        String.raw`Écarts $x_i - 5$ : $-3, -1, -1, -1, 0, 0, 2, 4$ ; carrés : $9, 1, 1, 1, 0, 0, 4, 16$, de somme $32$.`,
        String.raw`$s^2 = \frac{32}{8} = 4$ (et l'écart-type vaut $s = 2$).`
      ],
      rule: String.raw`$s^2 = \frac1n\sum_i (x_i - \bar x)^2 = \overline{x^2} - \bar x^2$`,
      pitfall: String.raw`Diviser par $n - 1$ alors que l'énoncé demande la variance empirique (division par $n$).`,
      mistakes: [
        { expr: '2', msg: String.raw`$2$ est l'écart-type ; la variance est son carré.` },
        { expr: '32/7', msg: String.raw`Tu as divisé par $n - 1 = 7$ (variance corrigée) ; ici on demande la variance empirique, divisée par $n = 8$.` }
      ],
      hint: String.raw`Moyenne $\bar x = 5$ ; puis $s^2 = \frac1n\sum(x_i - \bar x)^2$.`,
      explain: String.raw`$\bar x = 5$, somme des carrés des écarts $= 32$, donc $s^2 = \frac{32}{8} = 4$.`,
      level: 2 },
    { id: 'm12-x-039',
      prompt: String.raw`$X_1, \dots, X_{36}$ sont indépendantes, de même loi, d'espérance 2 et de variance 9. Calcule l'écart-type de leur moyenne $\overline{X}_{36}$.`,
      answer: '1/2', vars: [], check: 'value',
      topic: 'Écart-type de la moyenne', sec: 'm12-s-limites-stats',
      steps: [
        String.raw`Notion : la moyenne de $n$ variables indépendantes de même variance $\sigma^2$ est moins dispersée que chacune : $V(\overline{X}_n) = \frac{\sigma^2}{n}$, donc $\sigma(\overline{X}_n) = \frac{\sigma}{\sqrt n}$.`,
        String.raw`Ici $\sigma^2 = 9$ et $n = 36$ : $V(\overline{X}_{36}) = \frac{9}{36} = \frac14$.`,
        String.raw`Écart-type : $\sqrt{\frac14} = \frac12$ ; ou directement $\frac{\sigma}{\sqrt n} = \frac{3}{6} = \frac12$.`
      ],
      rule: String.raw`$V(\overline{X}_n) = \dfrac{\sigma^2}{n}$ et $\sigma(\overline{X}_n) = \dfrac{\sigma}{\sqrt n}$`,
      pitfall: String.raw`Diviser l'écart-type par $n$ au lieu de $\sqrt n$.`,
      mistakes: [
        { expr: '1/4', msg: String.raw`$\frac14 = \frac{9}{36}$ est la <b>variance</b> de $\overline{X}_{36}$ ; l'écart-type est sa racine.` },
        { expr: '1/12', msg: String.raw`L'écart-type de la moyenne est $\frac{\sigma}{\sqrt n}$, pas $\frac{\sigma}{n}$.` },
        { expr: '3', msg: String.raw`La moyenne est moins dispersée que chaque $X_i$ : son écart-type est divisé par $\sqrt n$.` }
      ],
      hint: String.raw`$V(\overline{X}_n) = \frac{\sigma^2}{n}$.`,
      explain: String.raw`$V(\overline{X}_{36}) = \frac{9}{36} = \frac14$, donc $\sigma(\overline{X}_{36}) = \frac12$.`,
      level: 2 },
    { id: 'm12-x-040',
      prompt: String.raw`On dispose de $n = 100$ mesures de moyenne $\bar x = 50$ ; l'écart-type de la population est $\sigma = 10$. Donne la borne <b>supérieure</b> de l'intervalle de confiance à 95 % de la moyenne (avec 1,96).`,
      answer: '51.96', vars: [], check: 'value',
      topic: 'Intervalle de confiance', sec: 'm12-s-limites-stats',
      steps: [
        String.raw`Notion : l'intervalle de confiance à 95 % de la moyenne est $\left[\bar x - 1{,}96\frac{\sigma}{\sqrt n} ;\ \bar x + 1{,}96\frac{\sigma}{\sqrt n}\right]$ : il contient la vraie moyenne avec une confiance de 95 %.`,
        String.raw`Écart-type de la moyenne : $\frac{\sigma}{\sqrt n} = \frac{10}{\sqrt{100}} = \frac{10}{10} = 1$.`,
        String.raw`Marge : $1{,}96\times 1 = 1{,}96$.`,
        String.raw`Borne supérieure : $50 + 1{,}96 = 51{,}96$ (l'intervalle est $[48{,}04 ;\ 51{,}96]$).`
      ],
      rule: String.raw`IC à 95 % : $\bar x \pm 1{,}96\,\dfrac{\sigma}{\sqrt n}$`,
      pitfall: String.raw`Oublier de diviser $\sigma$ par $\sqrt n$.`,
      mistakes: [
        { expr: '69.6', msg: String.raw`Tu as oublié de diviser $\sigma$ par $\sqrt n = 10$.` },
        { expr: '50.196', msg: String.raw`On divise par $\sqrt n = 10$, pas par $n = 100$.` },
        { expr: '48.04', msg: String.raw`C'est la borne <b>inférieure</b> $\bar x - 1{,}96$ ; on demande la borne supérieure.` }
      ],
      hint: String.raw`$\bar x + 1{,}96\,\dfrac{\sigma}{\sqrt n}$.`,
      explain: String.raw`$1{,}96\times\frac{10}{\sqrt{100}} = 1{,}96$, donc l'IC est $[48{,}04 ;\ 51{,}96]$.`,
      level: 3 }
  ]
});
