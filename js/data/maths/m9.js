/* Maths — Chapitre 9 : Suites et séries */
APP.registerChapter({
  subject: 'maths',
  id: 'm9', num: 9,
  title: 'Suites et séries',
  subtitle: 'Suites, sommes, séries numériques et entières',

  /* ======================================================================
     FICHES DE COURS
     ====================================================================== */
  sections: [
    {
      id: 'm9-s-arith-geo',
      title: 'Suites arithmétiques et géométriques',
      html: String.raw`
<h3>Qu'est-ce qu'une suite ?</h3>
<p>Une <b>suite réelle</b> est une application $u : \mathbb{N} \to \mathbb{R}$, $n \mapsto u_n$, notée $(u_n)_{n \in \mathbb{N}}$ ou simplement $(u_n)$. On la définit :</p>
<ul>
<li><b>explicitement</b> : $u_n = f(n)$, par exemple $u_n = \dfrac{n}{n+1}$ ;</li>
<li><b>par récurrence</b> : $u_0$ donné et $u_{n+1} = f(u_n)$, par exemple $u_0 = 0$ et $u_{n+1} = \sqrt{2 + u_n}$.</li>
</ul>
<p>$(u_n)$ est <b>croissante</b> si $u_{n+1} \geq u_n$ pour tout $n$, <b>décroissante</b> si $u_{n+1} \leq u_n$, <b>majorée</b> s'il existe $M$ tel que $u_n \leq M$ pour tout $n$, <b>minorée</b> s'il existe $m$ tel que $u_n \geq m$, <b>bornée</b> si elle est majorée et minorée.</p>
<div class="callout tip"><b>Méthode : étudier la monotonie</b>
<ol><li>étudier le signe de $u_{n+1} - u_n$ ;</li>
<li>si $u_n > 0$ pour tout $n$, comparer $\dfrac{u_{n+1}}{u_n}$ à $1$ ;</li>
<li>si $u_n = f(n)$, étudier les variations de $f$ sur $[0, +\infty[$.</li></ol></div>

<h3>Suite arithmétique</h3>
<p>$(u_n)$ est <b>arithmétique de raison $r$</b> si $u_{n+1} = u_n + r$ pour tout $n$ : on <i>ajoute</i> toujours la même quantité.</p>
<p>$$u_n = u_0 + n\,r \qquad\text{et plus généralement}\qquad u_n = u_p + (n-p)\,r$$</p>
<p>Somme de termes consécutifs :
$$S = (\text{nombre de termes}) \times \frac{\text{premier} + \text{dernier}}{2}$$
En particulier $1 + 2 + \dots + n = \dfrac{n(n+1)}{2}$. Si $r > 0$ la suite est croissante et tend vers $+\infty$ ; si $r \lt 0$ elle décroît vers $-\infty$.</p>

<h3>Suite géométrique</h3>
<p>$(u_n)$ est <b>géométrique de raison $q$</b> si $u_{n+1} = q\,u_n$ pour tout $n$ : on <i>multiplie</i> toujours par la même quantité.</p>
<p>$$u_n = u_0\,q^n \qquad\text{et plus généralement}\qquad u_n = u_p\,q^{\,n-p}$$</p>
<p>Somme des premières puissances (pour $q \neq 1$) :
$$1 + q + q^2 + \dots + q^n = \sum_{k=0}^{n} q^k = \frac{1 - q^{n+1}}{1 - q}$$
et pour des termes consécutifs quelconques : $S = \text{premier terme} \times \dfrac{1 - q^{\text{nombre de termes}}}{1 - q}$. Si $q = 1$, la somme vaut simplement le nombre de termes fois $u_0$.</p>

<div class="callout info"><b>Exemples corrigés</b>
<ul>
<li>$1 + 3 + 5 + \dots + 99$ : suite arithmétique de raison $2$ ; il y a $\frac{99 - 1}{2} + 1 = 50$ termes, donc $S = 50 \times \frac{1 + 99}{2} = 2500$.</li>
<li>$u_0 = 2$, $q = 3$ : $u_4 = 2 \times 3^4 = 162$ et $u_0 + \dots + u_4 = 2 \times \dfrac{1 - 3^5}{1 - 3} = 2 \times \dfrac{-242}{-2} = 242$ (vérification : $2 + 6 + 18 + 54 + 162 = 242$).</li>
</ul></div>
<div class="callout warn"><b>Pièges classiques</b>
<ul>
<li>De $u_p$ à $u_n$ il y a $n - p + 1$ termes, pas $n - p$.</li>
<li>Si la suite commence à $u_1$ : $u_n = u_1 + (n-1)r$ et $u_n = u_1\,q^{n-1}$.</li>
<li>$2 \times 3^n \neq 6^n$ : la puissance ne porte que sur $3$.</li>
</ul></div>
<div class="callout key"><b>À retenir</b> Pour reconnaître une suite : $u_{n+1} - u_n$ constant $\Rightarrow$ arithmétique ; $\dfrac{u_{n+1}}{u_n}$ constant $\Rightarrow$ géométrique. Somme géométrique : « premier terme $\times \dfrac{1 - q^{\text{nb termes}}}{1 - q}$ ».</div>`
    },
    {
      id: 'm9-s-recurrentes',
      title: 'Suites récurrentes et arithmético-géométriques',
      html: String.raw`
<h3>Suites arithmético-géométriques</h3>
<p>Ce sont les suites $u_{n+1} = a\,u_n + b$ avec $a \neq 1$ (si $a = 1$ : arithmétique ; si $b = 0$ : géométrique). On les rencontre partout : intérêts d'un emprunt, filtre numérique du premier ordre, charge d'un condensateur échantillonnée…</p>
<div class="callout tip"><b>Méthode (à connaître par cœur)</b>
<ol>
<li>Chercher le <b>point fixe</b> $\ell$ : $\ell = a\ell + b$, soit $\ell = \dfrac{b}{1-a}$.</li>
<li>Poser $v_n = u_n - \ell$. En soustrayant $\ell = a\ell + b$ à $u_{n+1} = a u_n + b$ : $v_{n+1} = a\,v_n$, donc $(v_n)$ est <b>géométrique de raison $a$</b>.</li>
<li>Conclure : $v_n = a^n v_0$, d'où $u_n = a^n (u_0 - \ell) + \ell$.</li>
</ol></div>
<p>Conséquence : si $|a| \lt 1$, alors $u_n \to \ell$ quel que soit $u_0$.</p>
<div class="callout info"><b>Exemple corrigé</b> $u_0 = 0$ et $u_{n+1} = \frac12 u_n + 4$. Point fixe : $\ell = \frac12\ell + 4 \Leftrightarrow \ell = 8$. Alors $v_n = u_n - 8$ est géométrique de raison $\frac12$ et $v_0 = -8$, donc
$$u_n = 8 - 8\left(\tfrac12\right)^n \xrightarrow[n\to+\infty]{} 8.$$</div>

<h3>Suites récurrentes $u_{n+1} = f(u_n)$</h3>
<ul>
<li><b>Intervalle stable</b> : si $f(I) \subset I$ et $u_0 \in I$, alors $u_n \in I$ pour tout $n$ (récurrence) ; la suite est bien définie.</li>
<li><b>Théorème du point fixe</b> : si $u_n \to \ell$ et si $f$ est continue en $\ell$, alors $f(\ell) = \ell$. Les seules limites possibles sont donc les <b>points fixes</b> de $f$.</li>
<li>Si $f$ est <b>croissante</b> sur $I$ stable, $(u_n)$ est <b>monotone</b> : croissante si $u_1 \geq u_0$, décroissante sinon.</li>
<li>Si $f$ est <b>décroissante</b> sur $I$, $(u_{2n})$ et $(u_{2n+1})$ sont monotones de sens contraires (on étudie $f \circ f$).</li>
<li>Si $|f'(x)| \leq k \lt 1$ sur $I$ stable contenant le point fixe $\ell$, l'inégalité des accroissements finis donne $|u_n - \ell| \leq k^n |u_0 - \ell|$ : convergence géométrique.</li>
</ul>
<div class="callout tip"><b>Méthode</b> 1) trouver un intervalle stable ; 2) résoudre $f(x) = x$ (candidats limites) ; 3) monotonie : sens de variation de $f$ ou signe de $f(x) - x$ ; 4) conclure avec le théorème de la limite monotone, puis identifier la limite parmi les points fixes.</div>
<div class="callout info"><b>Exemple corrigé</b> $u_0 = 0$, $u_{n+1} = \sqrt{2 + u_n}$. $f(x) = \sqrt{2+x}$ est croissante et $[0, 2]$ est stable ($f(0) = \sqrt2$, $f(2) = 2$). Comme $u_1 = \sqrt2 \geq u_0$, la suite est croissante, majorée par $2$, donc converge vers $\ell \in [0,2]$ tel que $\ell = \sqrt{2+\ell}$, soit $\ell^2 - \ell - 2 = 0$ : $\ell = 2$ ou $\ell = -1$. Comme $\ell \geq 0$, $\ell = 2$.</div>
<p>Graphiquement, la limite est l'abscisse de l'intersection de la courbe de $f$ avec la droite $y = x$ :</p>
<div class="widget" data-w="plot" data-f="sqrt(2+x);x" data-x="-0.5;3" data-y="-0.5;3"></div>
<div class="callout warn"><b>Pièges classiques</b>
<ul>
<li>Un point fixe n'est qu'un <b>candidat</b> : il faut d'abord prouver que la suite converge.</li>
<li>Le point fixe doit appartenir à l'intervalle stable (ici $-1$ est exclu).</li>
<li>$f$ décroissante ne donne <b>pas</b> une suite décroissante.</li>
</ul></div>
<div class="callout key"><b>À retenir</b> Arithmético-géométrique : $\ell = \dfrac{b}{1-a}$ et $u_n = a^n(u_0 - \ell) + \ell$. Récurrente : intervalle stable, monotonie, limite monotone, puis $f(\ell) = \ell$.</div>`
    },
    {
      id: 'm9-s-limites',
      title: 'Limites de suites',
      html: String.raw`
<h3>Définitions</h3>
<p>$(u_n)$ <b>converge vers $\ell$</b> si
$$\forall \varepsilon > 0,\ \exists N \in \mathbb{N},\ \forall n \geq N,\ |u_n - \ell| \leq \varepsilon.$$
$(u_n)$ <b>tend vers $+\infty$</b> si $\forall A,\ \exists N,\ \forall n \geq N,\ u_n \geq A$. Une suite qui ne converge pas <b>diverge</b> (vers $\pm\infty$ ou sans limite, comme $(-1)^n$).</p>
<ul>
<li>La limite, si elle existe, est <b>unique</b>.</li>
<li>Toute suite convergente est <b>bornée</b> (la réciproque est fausse : $(-1)^n$).</li>
<li>Si $(u_{2n})$ et $(u_{2n+1})$ tendent vers la même limite $\ell$, alors $u_n \to \ell$ ; si deux sous-suites ont des limites différentes, $(u_n)$ diverge.</li>
</ul>

<h3>Outils de calcul</h3>
<ul>
<li><b>Opérations</b> : somme, produit, quotient de limites, sauf <b>formes indéterminées</b> : $\infty - \infty$, $0 \times \infty$, $\frac{\infty}{\infty}$, $\frac00$, $1^\infty$, $\infty^0$, $0^0$.</li>
<li><b>Théorème des gendarmes</b> : si $v_n \leq u_n \leq w_n$ et $v_n, w_n \to \ell$, alors $u_n \to \ell$.</li>
<li><b>Comparaison</b> : si $u_n \geq v_n$ et $v_n \to +\infty$, alors $u_n \to +\infty$.</li>
<li><b>Suite géométrique</b> : $q^n \to 0$ si $|q| \lt 1$ ; $q^n = 1$ si $q = 1$ ; $q^n \to +\infty$ si $q > 1$ ; pas de limite si $q \leq -1$.</li>
<li><b>Croissances comparées</b> ($a, b > 0$, $q > 1$) : $(\ln n)^a \ll n^b \ll q^n \ll n! \ll n^n$ (le quotient « petit / grand » tend vers $0$).</li>
<li><b>Équivalents</b> : $u_n \sim v_n$ si $\frac{u_n}{v_n} \to 1$. Un polynôme (ou une fraction rationnelle) est équivalent à son terme de plus haut degré. Si $\varepsilon_n \to 0$ : $\ln(1 + \varepsilon_n) \sim \varepsilon_n$, $\sin \varepsilon_n \sim \varepsilon_n$, $\mathrm{e}^{\varepsilon_n} - 1 \sim \varepsilon_n$.</li>
</ul>
<div class="callout tip"><b>Méthodes face à une forme indéterminée</b>
<ul>
<li>$\frac{\infty}{\infty}$ : factoriser par le terme dominant.</li>
<li>$\infty - \infty$ avec des racines : <b>quantité conjuguée</b>.</li>
<li>$1^\infty$ ou puissance variable : écrire $u_n^{v_n} = \mathrm{e}^{v_n \ln u_n}$ et utiliser $\ln(1+x) \sim x$.</li>
</ul></div>
<div class="callout info"><b>Exemples corrigés</b>
<ul>
<li>$\dfrac{3n^2 + 1}{2n^2 - n} = \dfrac{3 + 1/n^2}{2 - 1/n} \to \dfrac32$.</li>
<li>$\sqrt{n^2 + n} - n = \dfrac{(n^2 + n) - n^2}{\sqrt{n^2+n} + n} = \dfrac{n}{n\left(\sqrt{1 + 1/n} + 1\right)} \to \dfrac12$.</li>
<li>$\left(1 + \frac2n\right)^n = \exp\!\left(n \ln\left(1 + \frac2n\right)\right)$ et $n\ln\left(1 + \frac2n\right) \sim n \cdot \frac2n = 2$, donc la limite vaut $\mathrm{e}^2$.</li>
</ul></div>
<div class="callout warn"><b>Pièges classiques</b>
<ul>
<li>$1^\infty$ est indéterminée : $\left(1 + \frac1n\right)^n \to \mathrm{e}$, pas $1$.</li>
<li>On ne <b>somme pas</b> des équivalents : $n + 1 \sim n$ et $-n \sim -n$ mais $(n+1) - n = 1 \not\sim 0$.</li>
<li>Les gendarmes exigent que <b>les deux</b> bornes aient la même limite.</li>
</ul></div>
<div class="callout key"><b>À retenir</b> Hiérarchie : $\ln n \ll n^b \ll q^n \ll n! \ll n^n$. $\left(1 + \frac{x}{n}\right)^n \to \mathrm{e}^x$. Face à $1^\infty$ : passer à l'exponentielle.</div>`
    },
    {
      id: 'm9-s-monotones',
      title: 'Suites monotones, bornées, adjacentes',
      html: String.raw`
<h3>Théorème de la limite monotone</h3>
<ul>
<li>Toute suite <b>croissante et majorée</b> converge (vers la borne supérieure de ses termes).</li>
<li>Toute suite <b>décroissante et minorée</b> converge.</li>
<li>Une suite croissante <b>non majorée</b> tend vers $+\infty$ ; une suite décroissante non minorée tend vers $-\infty$.</li>
</ul>
<p>C'est l'outil de base pour prouver qu'une suite converge <b>sans connaître sa limite</b>.</p>

<h3>Suites adjacentes</h3>
<p>$(u_n)$ et $(v_n)$ sont <b>adjacentes</b> si $(u_n)$ est croissante, $(v_n)$ est décroissante et $v_n - u_n \to 0$.</p>
<p><b>Théorème</b> : deux suites adjacentes convergent vers la <b>même limite</b> $\ell$, et pour tout $n$ :
$$u_n \leq \ell \leq v_n.$$
On obtient ainsi un <b>encadrement</b> de $\ell$ dont la précision est $v_n - u_n$.</p>
<div class="callout info"><b>Exemple corrigé : approximation de e</b> $u_n = \sum_{k=0}^{n} \frac{1}{k!}$ et $v_n = u_n + \frac{1}{n \cdot n!}$ ($n \geq 1$).
<ul>
<li>$u_{n+1} - u_n = \frac{1}{(n+1)!} > 0$ : $(u_n)$ croît.</li>
<li>$v_{n+1} - v_n = \frac{1}{(n+1)!} + \frac{1}{(n+1)(n+1)!} - \frac{1}{n\cdot n!} = \frac{n(n+1) + n - (n+1)^2}{n(n+1)(n+1)!} = \frac{-1}{n(n+1)(n+1)!} \lt 0$ : $(v_n)$ décroît.</li>
<li>$v_n - u_n = \frac{1}{n\cdot n!} \to 0$.</li>
</ul>
Elles sont adjacentes et convergent vers $\mathrm{e}$ ; avec $n = 5$ : $2{,}7166 \leq \mathrm{e} \leq 2{,}7184$.</div>
<div class="callout tip"><b>Application ingénieur : la dichotomie</b> Pour résoudre $g(x) = 0$ avec $g$ continue et $g(a)g(b) \lt 0$, on coupe $[a_n, b_n]$ en deux et on garde la moitié où $g$ change de signe. $(a_n)$ croît, $(b_n)$ décroît et $b_n - a_n = \frac{b-a}{2^n} \to 0$ : suites adjacentes, qui convergent vers une racine. Chaque itération gagne un bit de précision.</div>
<div class="callout warn"><b>Pièges classiques</b>
<ul>
<li>« Croissante majorée par $M$ » donne une limite $\ell \leq M$, mais pas forcément $\ell = M$ : $1 - \frac1n$ est majorée par $5$ et tend vers $1$.</li>
<li>« Bornée » ne suffit pas : $(-1)^n$ est bornée et diverge.</li>
<li>Pour l'adjacence, il faut vérifier les <b>trois</b> conditions.</li>
</ul></div>
<div class="callout key"><b>À retenir</b> Monotone + bornée (du bon côté) $\Rightarrow$ convergente. Adjacentes $\Rightarrow$ même limite $\ell$ avec $u_n \leq \ell \leq v_n$.</div>`
    },
    {
      id: 'm9-s-sommes',
      title: 'Sommes usuelles et télescopage',
      html: String.raw`
<h3>Manipuler le symbole $\sum$</h3>
<ul>
<li>$\sum_{k=p}^{n} a_k$ comporte $n - p + 1$ termes ; en particulier $\sum_{k=1}^{n} c = n\,c$.</li>
<li><b>Linéarité</b> : $\sum (\lambda a_k + \mu b_k) = \lambda \sum a_k + \mu \sum b_k$.</li>
<li><b>Changement d'indice</b> : $\sum_{k=1}^{n} a_{k-1} = \sum_{j=0}^{n-1} a_j$ (poser $j = k - 1$, et décaler les bornes).</li>
</ul>

<h3>Sommes usuelles</h3>
<p>$$\sum_{k=1}^{n} k = \frac{n(n+1)}{2} \qquad \sum_{k=1}^{n} k^2 = \frac{n(n+1)(2n+1)}{6} \qquad \sum_{k=1}^{n} k^3 = \left(\frac{n(n+1)}{2}\right)^2$$</p>
<p>$$\sum_{k=0}^{n} q^k = \frac{1 - q^{n+1}}{1-q}\ (q \neq 1) \qquad (a+b)^n = \sum_{k=0}^{n} \binom{n}{k} a^k b^{n-k}$$</p>
<div class="callout tip"><b>Méthode : somme d'un polynôme en $k$</b> Décomposer sur $k^2$, $k$, $1$ et utiliser la linéarité. Exemple : $\sum_{k=1}^{n} (2k + 1) = 2\cdot\frac{n(n+1)}{2} + n = n^2 + 2n$.</div>

<h3>Télescopage</h3>
<p>Quand le terme général est une <b>différence de termes consécutifs</b>, presque tout se simplifie :
$$\sum_{k=p}^{n} (a_{k+1} - a_k) = a_{n+1} - a_p.$$</p>
<ul>
<li>$\dfrac{1}{k(k+1)} = \dfrac1k - \dfrac{1}{k+1}$ (décomposition en éléments simples) ;</li>
<li>$\ln\left(1 + \frac1k\right) = \ln(k+1) - \ln k$ ;</li>
<li>version produit : $\prod_{k=1}^{n} \frac{k+1}{k} = n + 1$.</li>
</ul>
<div class="callout info"><b>Exemple corrigé</b>
$$\sum_{k=1}^{n} \frac{1}{k(k+1)} = \sum_{k=1}^{n} \left(\frac1k - \frac{1}{k+1}\right) = \left(1 - \tfrac12\right) + \left(\tfrac12 - \tfrac13\right) + \dots + \left(\tfrac1n - \tfrac{1}{n+1}\right) = 1 - \frac{1}{n+1} = \frac{n}{n+1}.$$</div>
<div class="callout warn"><b>Pièges classiques</b>
<ul>
<li>$\sum_{k=1}^{n} 5 = 5n$, pas $5$.</li>
<li>$\sum a_k b_k \neq \left(\sum a_k\right)\left(\sum b_k\right)$.</li>
<li>Télescopage : bien repérer les termes qui <b>restent</b> (le premier et le dernier, parfois deux de chaque côté si l'écart est de $2$).</li>
</ul></div>
<div class="callout key"><b>À retenir</b> $\sum k = \frac{n(n+1)}{2}$, $\sum k^2 = \frac{n(n+1)(2n+1)}{6}$, $\sum k^3 = \left(\frac{n(n+1)}{2}\right)^2$. Télescopage : $\sum (a_{k+1} - a_k) = $ dernier $-$ premier.</div>`
    },
    {
      id: 'm9-s-series',
      title: 'Séries numériques : définitions et séries de référence',
      html: String.raw`
<h3>Définitions</h3>
<p>À une suite $(u_n)$ on associe la suite des <b>sommes partielles</b> $S_n = \sum_{k=0}^{n} u_k$. La <b>série</b> $\sum u_n$ <b>converge</b> si $(S_n)$ a une limite finie $S$, appelée <b>somme</b> de la série :
$$S = \sum_{n=0}^{+\infty} u_n = \lim_{n \to +\infty} S_n.$$
Le <b>reste</b> d'ordre $n$ est $R_n = S - S_n = \sum_{k=n+1}^{+\infty} u_k$ ; il tend vers $0$. Sinon la série <b>diverge</b>. La <b>nature</b> (convergence ou divergence) ne dépend pas des premiers termes ; la <b>valeur</b> de la somme, si.</p>

<h3>Condition nécessaire de convergence</h3>
<p>$$\sum u_n \text{ converge} \;\Rightarrow\; u_n \to 0$$
(car $u_n = S_n - S_{n-1} \to S - S = 0$). Par contraposée, si $u_n \not\to 0$, la série <b>diverge grossièrement</b>. La réciproque est <b>fausse</b> : voir la série harmonique.</p>

<h3>Séries de référence</h3>
<ul>
<li><b>Série géométrique</b> : $\sum q^n$ converge si et seulement si $|q| \lt 1$, et alors
$$\sum_{n=0}^{+\infty} q^n = \frac{1}{1-q}, \qquad \sum_{n=p}^{+\infty} q^n = \frac{q^p}{1-q}.$$</li>
<li><b>Série télescopique</b> : $\sum (a_{n+1} - a_n)$ converge si et seulement si $(a_n)$ converge, et sa somme vaut $\lim a_n - a_0$.</li>
<li><b>Séries de Riemann</b> : $$\sum_{n \geq 1} \frac{1}{n^\alpha} \text{ converge} \iff \alpha > 1.$$</li>
<li><b>Série harmonique</b> ($\alpha = 1$) : $\sum \frac1n$ <b>diverge</b> alors que $\frac1n \to 0$ ; plus précisément $\sum_{k=1}^{n} \frac1k \sim \ln n$ (comparaison avec $\int_1^{n} \frac{\mathrm{d}t}{t}$).</li>
</ul>
<div class="widget" data-w="plot" data-f="1/x" data-x="0.5;8" data-y="0;2.2"></div>
<p>Valeurs remarquables : $\sum_{n=1}^{+\infty} \frac{1}{n^2} = \frac{\pi^2}{6}$, $\sum_{n=0}^{+\infty} \frac{1}{n!} = \mathrm{e}$, $\sum_{n=1}^{+\infty} \frac{(-1)^{n+1}}{n} = \ln 2$.</p>
<div class="callout info"><b>Exemples corrigés</b>
<ul>
<li>$\sum_{n=1}^{+\infty} \left(\frac25\right)^n = \dfrac{2/5}{1 - 2/5} = \dfrac23$ (premier terme $\frac25$).</li>
<li>$\sum_{n=1}^{+\infty} \frac{1}{n(n+1)}$ : $S_N = 1 - \frac{1}{N+1} \to 1$, donc la somme vaut $1$.</li>
<li>$\sum \frac{n}{n+1}$ diverge grossièrement car $\frac{n}{n+1} \to 1 \neq 0$.</li>
</ul></div>
<div class="callout warn"><b>Pièges classiques</b>
<ul>
<li>$u_n \to 0$ <b>ne suffit pas</b> : $\sum \frac1n$ diverge.</li>
<li>Formule géométrique : bien identifier le <b>premier terme</b> ($\frac{1}{1-q}$ seulement si la somme commence à $q^0 = 1$).</li>
<li>Ne pas confondre la suite $(u_n)$ et la série $\sum u_n$ : $\frac1n$ converge (vers $0$) mais $\sum \frac1n$ diverge.</li>
</ul></div>
<div class="callout key"><b>À retenir</b> Géométrique : CV $\iff |q| \lt 1$, somme $= \dfrac{\text{premier terme}}{1-q}$. Riemann : CV $\iff \alpha > 1$. Terme général $\not\to 0$ $\Rightarrow$ divergence grossière.</div>`
    },
    {
      id: 'm9-s-criteres',
      title: 'Critères de convergence',
      html: String.raw`
<h3>Séries à termes positifs</h3>
<p>Si $u_n \geq 0$, $(S_n)$ est croissante : $\sum u_n$ converge si et seulement si $(S_n)$ est majorée. D'où les outils :</p>
<ul>
<li><b>Comparaison</b> : si $0 \leq u_n \leq v_n$, alors $\sum v_n$ CV $\Rightarrow \sum u_n$ CV, et $\sum u_n$ DV $\Rightarrow \sum v_n$ DV.</li>
<li><b>Équivalents</b> : si $u_n \sim v_n$ et $v_n \geq 0$ (à partir d'un certain rang), $\sum u_n$ et $\sum v_n$ sont de <b>même nature</b>. On compare alors à Riemann ou à une géométrique.</li>
<li><b>Règle de d'Alembert</b> : si $u_n > 0$ et $\dfrac{u_{n+1}}{u_n} \to L$ : $L \lt 1 \Rightarrow$ CV ; $L > 1 \Rightarrow$ DV (grossière) ; $L = 1$ : <b>on ne peut pas conclure</b>. Idéal avec des $n!$ et des puissances $a^n$.</li>
<li><b>Règle de Cauchy</b> : même conclusion avec $\sqrt[n]{u_n} \to L$.</li>
</ul>

<h3>Séries à termes quelconques</h3>
<ul>
<li><b>Convergence absolue</b> : si $\sum |u_n|$ converge, alors $\sum u_n$ converge. Une série qui converge sans converger absolument est dite <b>semi-convergente</b>.</li>
<li><b>Critère des séries alternées</b> (Leibniz) : si $u_n = (-1)^n a_n$ avec $(a_n)$ <b>positive, décroissante, de limite nulle</b>, alors $\sum u_n$ converge ; de plus la somme est comprise entre deux sommes partielles consécutives, et
$$|R_n| \leq a_{n+1},$$
le reste ayant le signe du premier terme négligé.</li>
</ul>
<div class="callout tip"><b>Méthode : déterminer la nature d'une série</b></div>
<div class="flow"><span>$u_n \to 0$ ? sinon DV grossière</span><span>signe constant ? équivalent simple, comparer à Riemann / géométrique</span><span>$n!$, $a^n$ ? d'Alembert</span><span>signe alterné ? $\sum|u_n|$, sinon critère des séries alternées</span></div>
<div class="callout info"><b>Exemples corrigés</b>
<ul>
<li>$\sum \frac{n^2}{n^4 + 1}$ : $\frac{n^2}{n^4+1} \sim \frac{1}{n^2}$, Riemann $\alpha = 2 > 1$ : <b>converge</b>.</li>
<li>$\sum \ln\left(1 + \frac1n\right)$ : terme $\sim \frac1n \geq 0$ : <b>diverge</b>.</li>
<li>$\sum \frac{n}{2^n}$ : $\frac{u_{n+1}}{u_n} = \frac{n+1}{2n} \to \frac12 \lt 1$ : <b>converge</b> (d'Alembert).</li>
<li>$\sum \frac{(-1)^n}{\sqrt n}$ : $\frac{1}{\sqrt n}$ décroît vers $0$, donc converge (séries alternées) ; mais $\sum \frac{1}{\sqrt n}$ diverge (Riemann $\alpha = \frac12$) : <b>semi-convergente</b>.</li>
</ul></div>
<div class="callout warn"><b>Pièges classiques</b>
<ul>
<li>La règle des équivalents exige un <b>signe constant</b> : $\frac{(-1)^n}{\sqrt n} + \frac1n \sim \frac{(-1)^n}{\sqrt n}$, la seconde série converge mais la première diverge !</li>
<li>d'Alembert avec $L = 1$ ne dit rien : c'est le cas de <b>toutes</b> les séries de Riemann.</li>
<li>Pour une série alternée, vérifier la <b>décroissance</b> de $a_n$.</li>
</ul></div>
<div class="callout key"><b>À retenir</b> Termes positifs : comparaison, équivalents, d'Alembert. Termes de signe variable : convergence absolue d'abord, puis critère des séries alternées avec $|R_n| \leq a_{n+1}$.</div>`
    },
    {
      id: 'm9-s-entieres',
      title: 'Séries entières',
      html: String.raw`
<h3>Rayon de convergence</h3>
<p>Une <b>série entière</b> est une série de fonctions $\sum a_n x^n$ ($x$ réel ou complexe). Il existe un unique $R \in [0, +\infty]$, le <b>rayon de convergence</b>, tel que :</p>
<ul>
<li>pour $|x| \lt R$, la série converge <b>absolument</b> ;</li>
<li>pour $|x| > R$, elle diverge (grossièrement) ;</li>
<li>pour $|x| = R$, tout est possible : il faut étudier au cas par cas.</li>
</ul>
<p><b>Calcul par d'Alembert</b> : si $\left|\dfrac{a_{n+1}}{a_n}\right| \to L$, alors $R = \dfrac1L$ (avec $R = +\infty$ si $L = 0$ et $R = 0$ si $L = +\infty$).</p>
<div class="callout tip"><b>Méthode : séries « lacunaires »</b> Pour $\sum a_n x^{2n}$, appliquer d'Alembert directement au terme $u_n = a_n x^{2n}$ : on obtient une condition sur $x^2$. Exemple : $\sum \frac{x^{2n}}{4^n}$, $\left|\frac{u_{n+1}}{u_n}\right| = \frac{x^2}{4} \lt 1 \iff |x| \lt 2$, donc $R = 2$.</div>

<h3>Propriétés de la somme</h3>
<p>Sur $]-R, R[$, la somme $f(x) = \sum a_n x^n$ est continue et indéfiniment dérivable, et on peut <b>dériver</b> ou <b>intégrer terme à terme</b> sans changer le rayon :
$$f'(x) = \sum_{n \geq 1} n\,a_n x^{n-1}, \qquad \int_0^x f(t)\,\mathrm{d}t = \sum_{n \geq 0} \frac{a_n}{n+1} x^{n+1}.$$
Les coefficients sont ceux de Taylor : $a_n = \dfrac{f^{(n)}(0)}{n!}$. Conséquence : le <b>développement limité</b> de $f$ en $0$ à l'ordre $n$ est la troncature de la série : $f(x) = \sum_{k=0}^{n} a_k x^k + o(x^n)$.</p>

<h3>Séries entières usuelles</h3>
<table class="tbl">
<tr><th>Fonction</th><th>Série</th><th>Rayon</th></tr>
<tr><td>$\mathrm{e}^x$</td><td>$\sum_{n \geq 0} \frac{x^n}{n!}$</td><td>$+\infty$</td></tr>
<tr><td>$\frac{1}{1-x}$</td><td>$\sum_{n \geq 0} x^n$</td><td>$1$</td></tr>
<tr><td>$\ln(1+x)$</td><td>$\sum_{n \geq 1} \frac{(-1)^{n+1}}{n} x^n$</td><td>$1$</td></tr>
<tr><td>$\sin x$</td><td>$\sum_{n \geq 0} \frac{(-1)^n x^{2n+1}}{(2n+1)!}$</td><td>$+\infty$</td></tr>
<tr><td>$\cos x$</td><td>$\sum_{n \geq 0} \frac{(-1)^n x^{2n}}{(2n)!}$</td><td>$+\infty$</td></tr>
<tr><td>$\arctan x$</td><td>$\sum_{n \geq 0} \frac{(-1)^n x^{2n+1}}{2n+1}$</td><td>$1$</td></tr>
</table>
<div class="callout info"><b>Exemples corrigés</b>
<ul>
<li>En dérivant $\frac{1}{1-x} = \sum x^n$ : $\frac{1}{(1-x)^2} = \sum_{n \geq 1} n x^{n-1} = \sum_{n\geq0}(n+1)x^n$. En multipliant par $x$ : $\sum n x^n = \frac{x}{(1-x)^2}$, d'où $\sum_{n \geq 1} \frac{n}{2^n} = \frac{1/2}{1/4} = 2$.</li>
<li>En intégrant $\frac{1}{1+t} = \sum (-1)^n t^n$ de $0$ à $x$ : $\ln(1+x) = \sum_{n \geq 0} \frac{(-1)^n x^{n+1}}{n+1}$.</li>
<li>$\sum \frac{2^n}{n+1} x^n$ : $\left|\frac{a_{n+1}}{a_n}\right| = \frac{2(n+1)}{n+2} \to 2$, donc $R = \frac12$.</li>
</ul></div>
<p>Sommes partielles de $\mathrm{e}^x$ (ordres 1, 2, 3) : elles collent à la fonction près de $0$ — c'est exactement le DL.</p>
<div class="widget" data-w="plot" data-f="exp(x);1+x;1+x+x^2/2;1+x+x^2/2+x^3/6" data-x="-3;3" data-y="-1;8"></div>
<div class="callout warn"><b>Pièges classiques</b>
<ul>
<li>$R$ ne dit rien du bord : $\sum \frac{x^n}{n}$ ($R = 1$) diverge en $x = 1$ mais converge en $x = -1$.</li>
<li>$R = \frac1L$ et non $L$ : pour $\sum 3^n x^n$, $L = 3$ donc $R = \frac13$.</li>
<li>Ne pas oublier les factorielles dans $\sin$, $\cos$, $\mathrm{e}^x$ (et leur absence dans $\ln$, $\arctan$).</li>
</ul></div>
<div class="callout key"><b>À retenir</b> $R$ par d'Alembert sur les coefficients ; dérivation/intégration terme à terme sur $]-R, R[$ ; $a_n = \frac{f^{(n)}(0)}{n!}$ ; les DL usuels sont les débuts des séries entières.</div>`
    },
    {
      id: 'm9-s-memo',
      title: 'Mémo / tableau récapitulatif',
      html: String.raw`
<h3>Suites</h3>
<table class="tbl">
<tr><th>Type</th><th>Définition</th><th>Terme général</th><th>Somme / limite</th></tr>
<tr><td>Arithmétique</td><td>$u_{n+1} = u_n + r$</td><td>$u_0 + nr$</td><td>nb termes $\times \frac{\text{premier}+\text{dernier}}{2}$</td></tr>
<tr><td>Géométrique</td><td>$u_{n+1} = q\,u_n$</td><td>$u_0 q^n$</td><td>premier $\times \frac{1 - q^{\text{nb}}}{1-q}$</td></tr>
<tr><td>Arithmético-géo.</td><td>$u_{n+1} = au_n + b$</td><td>$a^n(u_0 - \ell) + \ell$</td><td>$\ell = \frac{b}{1-a}$ si $|a| \lt 1$</td></tr>
<tr><td>Récurrente</td><td>$u_{n+1} = f(u_n)$</td><td>—</td><td>limite $\ell$ : $f(\ell) = \ell$</td></tr>
</table>
<div class="grid2">
<div class="mini"><h4>Convergence d'une suite</h4><p>Monotone bornée $\Rightarrow$ CV. Adjacentes $\Rightarrow$ même limite. Gendarmes. Croissances comparées : $\ln n \ll n^b \ll q^n \ll n! \ll n^n$.</p></div>
<div class="mini"><h4>Sommes usuelles</h4><p>$\sum k = \frac{n(n+1)}{2}$, $\sum k^2 = \frac{n(n+1)(2n+1)}{6}$, $\sum k^3 = \left(\frac{n(n+1)}{2}\right)^2$, télescopage $\sum(a_{k+1} - a_k) = a_{n+1} - a_p$.</p></div>
</div>
<h3>Séries numériques</h3>
<table class="tbl">
<tr><th>Série</th><th>Nature</th><th>Somme</th></tr>
<tr><td>$\sum q^n$</td><td>CV $\iff |q| \lt 1$</td><td>$\frac{1}{1-q}$</td></tr>
<tr><td>$\sum \frac{1}{n^\alpha}$</td><td>CV $\iff \alpha > 1$</td><td>$\sum \frac{1}{n^2} = \frac{\pi^2}{6}$</td></tr>
<tr><td>$\sum \frac{1}{n!}$</td><td>CV</td><td>$\mathrm{e}$</td></tr>
<tr><td>$\sum \frac{(-1)^{n+1}}{n}$</td><td>semi-convergente</td><td>$\ln 2$</td></tr>
<tr><td>$\sum \frac1n$</td><td>DV</td><td>$\sum_{k\le n} \frac1k \sim \ln n$</td></tr>
</table>
<div class="flow"><span>$u_n \not\to 0$ : DV</span><span>$\geq 0$ : équivalent / comparaison / d'Alembert</span><span>alternée : $|R_n| \leq a_{n+1}$</span></div>
<h3>Séries entières</h3>
<p>$R = \frac{1}{L}$ avec $L = \lim \left|\frac{a_{n+1}}{a_n}\right|$. $\mathrm{e}^x = \sum \frac{x^n}{n!}$ ($R = +\infty$), $\frac{1}{1-x} = \sum x^n$ ($R = 1$), $\ln(1+x) = \sum_{n\ge1} \frac{(-1)^{n+1}x^n}{n}$ ($R = 1$), $\sin x = \sum \frac{(-1)^n x^{2n+1}}{(2n+1)!}$, $\cos x = \sum \frac{(-1)^n x^{2n}}{(2n)!}$.</p>
<div class="callout key"><b>Réflexes</b> Point fixe pour $u_{n+1} = f(u_n)$ ; $1^\infty$ $\to$ exponentielle ; télescopage dès qu'on voit $\frac{1}{k(k+1)}$ ; d'Alembert dès qu'on voit $n!$ ou $a^n$ ; $L = 1$ $\to$ autre méthode.</div>`
    }
  ],

  /* ======================================================================
     FORMULAIRE
     ====================================================================== */
  formulas: [
    { id: 'm9-fo-arith-terme', name: 'Suite arithmétique : terme général', tex: String.raw`u_n = u_0 + n\,r`, note: String.raw`plus généralement $u_n = u_p + (n-p)\,r$` },
    { id: 'm9-fo-arith-somme', name: 'Somme de termes arithmétiques', tex: String.raw`\sum_{k=p}^{n} u_k = (n-p+1)\,\frac{u_p + u_n}{2}`, note: String.raw`nombre de termes $\times$ moyenne du premier et du dernier` },
    { id: 'm9-fo-geo-terme', name: 'Suite géométrique : terme général', tex: String.raw`u_n = u_0\,q^n`, note: String.raw`plus généralement $u_n = u_p\,q^{n-p}$` },
    { id: 'm9-fo-geo-somme', name: 'Somme géométrique', tex: String.raw`\sum_{k=0}^{n} q^k = \frac{1 - q^{n+1}}{1 - q} \quad (q \neq 1)`, note: String.raw`en général : premier terme $\times \dfrac{1 - q^{\text{nb termes}}}{1-q}$` },
    { id: 'm9-fo-somme-k', name: 'Somme des entiers', tex: String.raw`\sum_{k=1}^{n} k = \frac{n(n+1)}{2}` },
    { id: 'm9-fo-somme-k2', name: 'Somme des carrés', tex: String.raw`\sum_{k=1}^{n} k^2 = \frac{n(n+1)(2n+1)}{6}` },
    { id: 'm9-fo-somme-k3', name: 'Somme des cubes', tex: String.raw`\sum_{k=1}^{n} k^3 = \left(\frac{n(n+1)}{2}\right)^2` },
    { id: 'm9-fo-telesc', name: 'Télescopage', tex: String.raw`\sum_{k=p}^{n} (a_{k+1} - a_k) = a_{n+1} - a_p` },
    { id: 'm9-fo-decomp', name: 'Décomposition télescopique classique', tex: String.raw`\frac{1}{k(k+1)} = \frac{1}{k} - \frac{1}{k+1}`, note: String.raw`d'où $\sum_{k=1}^{n} \frac{1}{k(k+1)} = 1 - \frac{1}{n+1}$` },
    { id: 'm9-fo-ag-pointfixe', name: 'Arithmético-géométrique : point fixe', tex: String.raw`u_{n+1} = a\,u_n + b \;\Rightarrow\; \ell = \frac{b}{1-a}`, note: String.raw`$v_n = u_n - \ell$ est géométrique de raison $a$` },
    { id: 'm9-fo-ag-terme', name: 'Arithmético-géométrique : terme général', tex: String.raw`u_n = a^n\,(u_0 - \ell) + \ell`, note: String.raw`si $|a| \lt 1$, $u_n \to \ell$` },
    { id: 'm9-fo-pointfixe', name: 'Limite d\'une suite récurrente', tex: String.raw`u_{n+1} = f(u_n),\ u_n \to \ell,\ f \text{ continue} \;\Rightarrow\; f(\ell) = \ell` },
    { id: 'm9-fo-def-lim', name: 'Définition de la convergence', tex: String.raw`\forall \varepsilon > 0,\ \exists N,\ \forall n \geq N,\ |u_n - \ell| \leq \varepsilon` },
    { id: 'm9-fo-qn', name: 'Limite de q puissance n', tex: String.raw`\lim_{n\to+\infty} q^n = \begin{cases} 0 & \text{si } |q| \lt 1 \\ 1 & \text{si } q = 1 \\ +\infty & \text{si } q > 1 \\ \text{pas de limite} & \text{si } q \leq -1 \end{cases}` },
    { id: 'm9-fo-croiss', name: 'Croissances comparées', tex: String.raw`(\ln n)^a \ll n^b \ll q^n \ll n! \ll n^n \quad (a, b > 0,\ q > 1)`, note: String.raw`$u_n \ll v_n$ : $\frac{u_n}{v_n} \to 0$` },
    { id: 'm9-fo-expo', name: 'Limite exponentielle', tex: String.raw`\left(1 + \frac{x}{n}\right)^n \xrightarrow[n\to+\infty]{} \mathrm{e}^x`, note: String.raw`forme $1^\infty$ : écrire $\exp\left(n \ln(1 + \frac{x}{n})\right)$` },
    { id: 'm9-fo-equiv-usuels', name: 'Équivalents usuels (εₙ → 0)', tex: String.raw`\ln(1 + \varepsilon_n) \sim \varepsilon_n,\quad \sin \varepsilon_n \sim \varepsilon_n,\quad \mathrm{e}^{\varepsilon_n} - 1 \sim \varepsilon_n` },
    { id: 'm9-fo-gendarmes', name: 'Théorème des gendarmes', tex: String.raw`v_n \leq u_n \leq w_n,\ v_n \to \ell,\ w_n \to \ell \;\Rightarrow\; u_n \to \ell` },
    { id: 'm9-fo-adjacentes', name: 'Suites adjacentes', tex: String.raw`u \nearrow,\ v \searrow,\ v_n - u_n \to 0 \;\Rightarrow\; u_n \leq \ell \leq v_n`, note: String.raw`les deux suites convergent vers la même limite $\ell$` },
    { id: 'm9-fo-harmonique', name: 'Série harmonique', tex: String.raw`\sum_{k=1}^{n} \frac{1}{k} \sim \ln n`, note: String.raw`donc $\sum \frac1n$ diverge` },
    { id: 'm9-fo-serie-sn', name: 'Somme partielle, somme, reste', tex: String.raw`S_n = \sum_{k=0}^{n} u_k,\qquad S = \lim_{n\to+\infty} S_n,\qquad R_n = S - S_n` },
    { id: 'm9-fo-cn', name: 'Condition nécessaire de convergence', tex: String.raw`\sum u_n \text{ converge} \;\Rightarrow\; u_n \to 0`, note: String.raw`réciproque fausse ; si $u_n \not\to 0$ : divergence grossière` },
    { id: 'm9-fo-serie-geo', name: 'Série géométrique', tex: String.raw`\sum_{n=0}^{+\infty} q^n = \frac{1}{1-q} \quad (|q| \lt 1)` },
    { id: 'm9-fo-serie-geo-p', name: 'Série géométrique à partir du rang p', tex: String.raw`\sum_{n=p}^{+\infty} q^n = \frac{q^p}{1-q} \quad (|q| \lt 1)`, note: String.raw`premier terme sur $(1 - q)$` },
    { id: 'm9-fo-riemann', name: 'Séries de Riemann', tex: String.raw`\sum_{n \geq 1} \frac{1}{n^\alpha} \text{ converge} \iff \alpha > 1` },
    { id: 'm9-fo-bale', name: 'Problème de Bâle', tex: String.raw`\sum_{n=1}^{+\infty} \frac{1}{n^2} = \frac{\pi^2}{6}` },
    { id: 'm9-fo-e', name: 'Série de e', tex: String.raw`\sum_{n=0}^{+\infty} \frac{1}{n!} = \mathrm{e}` },
    { id: 'm9-fo-ln2', name: 'Série harmonique alternée', tex: String.raw`\sum_{n=1}^{+\infty} \frac{(-1)^{n+1}}{n} = \ln 2` },
    { id: 'm9-fo-comparaison', name: 'Comparaison (termes positifs)', tex: String.raw`0 \leq u_n \leq v_n :\ \sum v_n \text{ CV} \Rightarrow \sum u_n \text{ CV}`, note: String.raw`et $\sum u_n$ DV $\Rightarrow \sum v_n$ DV` },
    { id: 'm9-fo-equiv', name: 'Règle des équivalents', tex: String.raw`u_n \sim v_n,\ v_n \geq 0 \;\Rightarrow\; \sum u_n \text{ et } \sum v_n \text{ de même nature}`, note: String.raw`signe constant indispensable` },
    { id: 'm9-fo-alembert', name: 'Critère de d\'Alembert', tex: String.raw`\left|\frac{u_{n+1}}{u_n}\right| \to L :\ L \lt 1 \Rightarrow \text{CV},\ \ L > 1 \Rightarrow \text{DV}`, note: String.raw`$L = 1$ : on ne peut pas conclure` },
    { id: 'm9-fo-alternee', name: 'Séries alternées : reste', tex: String.raw`\sum (-1)^n a_n,\ a_n \searrow 0 \;\Rightarrow\; \text{CV et } |R_n| \leq a_{n+1}`, note: String.raw`le reste a le signe du premier terme négligé` },
    { id: 'm9-fo-abs', name: 'Convergence absolue', tex: String.raw`\sum |u_n| \text{ CV} \;\Rightarrow\; \sum u_n \text{ CV}` },
    { id: 'm9-fo-rayon', name: 'Rayon de convergence (d\'Alembert)', tex: String.raw`\left|\frac{a_{n+1}}{a_n}\right| \to L \;\Rightarrow\; R = \frac{1}{L}`, note: String.raw`$L = 0 \Rightarrow R = +\infty$ ; $L = +\infty \Rightarrow R = 0$` },
    { id: 'm9-fo-taylor', name: 'Coefficients d\'une série entière', tex: String.raw`f(x) = \sum_{n\geq0} a_n x^n \;\Rightarrow\; a_n = \frac{f^{(n)}(0)}{n!}` },
    { id: 'm9-fo-derive', name: 'Dérivation terme à terme', tex: String.raw`\left(\sum_{n\geq0} a_n x^n\right)' = \sum_{n \geq 1} n\,a_n x^{n-1}`, note: String.raw`même rayon de convergence` },
    { id: 'm9-fo-dse-exp', name: 'Série de l\'exponentielle', tex: String.raw`\mathrm{e}^x = \sum_{n=0}^{+\infty} \frac{x^n}{n!} \quad (R = +\infty)` },
    { id: 'm9-fo-dse-geo', name: 'Série géométrique entière', tex: String.raw`\frac{1}{1-x} = \sum_{n=0}^{+\infty} x^n \quad (R = 1)`, note: String.raw`et $\frac{1}{1+x} = \sum (-1)^n x^n$` },
    { id: 'm9-fo-dse-deriv', name: 'Dérivée de la série géométrique', tex: String.raw`\frac{1}{(1-x)^2} = \sum_{n=0}^{+\infty} (n+1)\,x^n \quad (R = 1)`, note: String.raw`d'où $\sum_{n \ge 1} n x^n = \frac{x}{(1-x)^2}$` },
    { id: 'm9-fo-dse-ln', name: 'Série du logarithme', tex: String.raw`\ln(1+x) = \sum_{n=1}^{+\infty} \frac{(-1)^{n+1}}{n}\,x^n \quad (R = 1)`, note: String.raw`et $-\ln(1-x) = \sum_{n\ge1} \frac{x^n}{n}$` },
    { id: 'm9-fo-dse-sin', name: 'Série du sinus', tex: String.raw`\sin x = \sum_{n=0}^{+\infty} \frac{(-1)^n x^{2n+1}}{(2n+1)!} = x - \frac{x^3}{6} + \frac{x^5}{120} - \cdots` },
    { id: 'm9-fo-dse-cos', name: 'Série du cosinus', tex: String.raw`\cos x = \sum_{n=0}^{+\infty} \frac{(-1)^n x^{2n}}{(2n)!} = 1 - \frac{x^2}{2} + \frac{x^4}{24} - \cdots` },
    { id: 'm9-fo-dse-chsh', name: 'Séries de ch et sh', tex: String.raw`\operatorname{ch} x = \sum_{n=0}^{+\infty} \frac{x^{2n}}{(2n)!},\qquad \operatorname{sh} x = \sum_{n=0}^{+\infty} \frac{x^{2n+1}}{(2n+1)!}`, note: String.raw`comme $\cos$ et $\sin$ sans les signes alternés ; $R = +\infty$` },
    { id: 'm9-fo-dse-arctan', name: 'Série de l\'arctangente', tex: String.raw`\arctan x = \sum_{n=0}^{+\infty} \frac{(-1)^n x^{2n+1}}{2n+1} \quad (R = 1)`, note: String.raw`en $x = 1$ : $\sum \frac{(-1)^n}{2n+1} = \frac{\pi}{4}$` },
    { id: 'm9-fo-dse-puiss', name: 'Série du binôme', tex: String.raw`(1+x)^\alpha = 1 + \alpha x + \frac{\alpha(\alpha-1)}{2!}x^2 + \frac{\alpha(\alpha-1)(\alpha-2)}{3!}x^3 + \cdots`, note: String.raw`$R = 1$ (si $\alpha \notin \mathbb{N}$)` }
  ],

  /* ======================================================================
     FLASHCARDS
     ====================================================================== */
  flashcards: [
    { id: 'm9-f-arith', front: String.raw`Suite arithmétique : définition, terme général, somme`, back: String.raw`$u_{n+1} = u_n + r$ ; $u_n = u_0 + nr = u_p + (n-p)r$ ; somme de termes consécutifs $=$ nombre de termes $\times \dfrac{\text{premier} + \text{dernier}}{2}$.` },
    { id: 'm9-f-geo', front: String.raw`Suite géométrique : définition, terme général, somme`, back: String.raw`$u_{n+1} = q\,u_n$ ; $u_n = u_0 q^n$ ; pour $q \neq 1$ : $\sum_{k=0}^{n} q^k = \dfrac{1 - q^{n+1}}{1-q}$, soit « premier terme $\times \dfrac{1 - q^{\text{nb termes}}}{1-q}$ ».` },
    { id: 'm9-f-cv', front: String.raw`Définition de « $(u_n)$ converge vers $\ell$ »`, back: String.raw`$\forall \varepsilon > 0,\ \exists N,\ \forall n \geq N,\ |u_n - \ell| \leq \varepsilon$ : à partir d'un certain rang, tous les termes sont aussi proches de $\ell$ qu'on veut. Une suite convergente est bornée.` },
    { id: 'm9-f-croiss', front: String.raw`Croissances comparées pour les suites`, back: String.raw`Pour $a, b > 0$ et $q > 1$ : $(\ln n)^a \ll n^b \ll q^n \ll n! \ll n^n$. Exemple : $\frac{n^{10}}{2^n} \to 0$, $\frac{q^n}{n!} \to 0$.` },
    { id: 'm9-f-limmono', front: String.raw`Théorème de la limite monotone`, back: String.raw`Croissante et majorée $\Rightarrow$ convergente ; décroissante et minorée $\Rightarrow$ convergente. Croissante non majorée $\Rightarrow$ $+\infty$. Attention : la limite est $\leq$ au majorant, pas forcément égale.` },
    { id: 'm9-f-adj', front: String.raw`Suites adjacentes : définition et théorème`, back: String.raw`$(u_n)$ croissante, $(v_n)$ décroissante, $v_n - u_n \to 0$. Alors elles convergent vers la même limite $\ell$ et $u_n \leq \ell \leq v_n$ pour tout $n$ (encadrement, dichotomie).` },
    { id: 'm9-f-arithgeo', front: String.raw`Méthode pour $u_{n+1} = a u_n + b$ ($a \neq 1$)`, back: String.raw`1) Point fixe $\ell = \frac{b}{1-a}$. 2) $v_n = u_n - \ell$ vérifie $v_{n+1} = a v_n$ (géométrique). 3) $u_n = a^n(u_0 - \ell) + \ell$. Si $|a| \lt 1$, $u_n \to \ell$.` },
    { id: 'm9-f-recur', front: String.raw`Étudier une suite $u_{n+1} = f(u_n)$`, back: String.raw`Intervalle stable $I$ ; points fixes ($f(x) = x$) ; si $f$ croissante sur $I$, la suite est monotone (sens de $u_1 - u_0$) ; limite monotone ; si $f$ continue, la limite vérifie $f(\ell) = \ell$.` },
    { id: 'm9-f-telesc', front: String.raw`Télescopage`, back: String.raw`$\sum_{k=p}^{n} (a_{k+1} - a_k) = a_{n+1} - a_p$. Exemple : $\frac{1}{k(k+1)} = \frac1k - \frac{1}{k+1}$, donc $\sum_{k=1}^{n} \frac{1}{k(k+1)} = 1 - \frac{1}{n+1}$.` },
    { id: 'm9-f-serie', front: String.raw`Série convergente, somme, reste`, back: String.raw`$S_n = \sum_{k=0}^{n} u_k$. $\sum u_n$ converge si $S_n \to S$ finie ; $S = \sum_{n=0}^{+\infty} u_n$ ; reste $R_n = S - S_n = \sum_{k > n} u_k \to 0$.` },
    { id: 'm9-f-grossiere', front: String.raw`Condition nécessaire de convergence d'une série`, back: String.raw`Si $\sum u_n$ converge alors $u_n \to 0$. Si $u_n \not\to 0$ : <b>divergence grossière</b>. Réciproque fausse : $\frac1n \to 0$ mais $\sum \frac1n$ diverge.` },
    { id: 'm9-f-riemann', front: String.raw`Séries de Riemann et série géométrique`, back: String.raw`$\sum \frac{1}{n^\alpha}$ converge $\iff \alpha > 1$. $\sum q^n$ converge $\iff |q| \lt 1$, de somme $\frac{1}{1-q}$ (à partir de $n = 0$).` },
    { id: 'm9-f-alembert', front: String.raw`Critère de d'Alembert`, back: String.raw`$u_n > 0$ et $\frac{u_{n+1}}{u_n} \to L$ : $L \lt 1$ CV, $L > 1$ DV, $L = 1$ <b>pas de conclusion</b> (ex. toutes les séries de Riemann). Adapté aux $n!$ et $a^n$.` },
    { id: 'm9-f-alternee', front: String.raw`Critère des séries alternées`, back: String.raw`$u_n = (-1)^n a_n$ avec $a_n \geq 0$, décroissante, $\to 0$ : la série converge, et $|R_n| \leq a_{n+1}$ (le reste a le signe du premier terme négligé).` },
    { id: 'm9-f-abs', front: String.raw`Convergence absolue / semi-convergence`, back: String.raw`$\sum |u_n|$ CV $\Rightarrow$ $\sum u_n$ CV. Une série qui converge sans converger absolument est semi-convergente : $\sum \frac{(-1)^n}{n}$, $\sum \frac{(-1)^n}{\sqrt n}$.` },
    { id: 'm9-f-rayon', front: String.raw`Rayon de convergence d'une série entière`, back: String.raw`$R$ tel que $\sum a_n x^n$ CV absolument pour $|x| \lt R$ et DV pour $|x| > R$ ; bord à étudier à part. Calcul : $\left|\frac{a_{n+1}}{a_n}\right| \to L \Rightarrow R = \frac1L$.` },
    { id: 'm9-f-dse', front: String.raw`Lien série entière / développement limité`, back: String.raw`Si $f(x) = \sum a_n x^n$ sur $]-R, R[$, alors $a_n = \frac{f^{(n)}(0)}{n!}$ et le DL de $f$ en $0$ à l'ordre $n$ est $\sum_{k=0}^{n} a_k x^k + o(x^n)$ : on tronque la série.` }
  ],

  /* ======================================================================
     QCM
     ====================================================================== */
  quiz: [
    { id: 'm9-q-001', level: 1, topic: 'Suite arithmétique', sec: 'm9-s-arith-geo',
      q: String.raw`Une suite arithmétique de premier terme $u_0$ et de raison $r$ a pour terme général :`,
      choices: [String.raw`$u_0\,r^n$`, String.raw`$u_0 + (n+1)\,r$`, String.raw`$u_0 + n\,r$`, String.raw`$n\,u_0 + r$`], answer: 2,
      explain: String.raw`Dans une suite arithmétique, on ajoute toujours la même raison $r$ pour passer d'un terme au suivant. Après $n$ pas depuis $u_0$, on a ajouté $n$ fois $r$, d'où $u_n = u_0 + nr$.`,
      steps: [
        String.raw`Rappel : une suite est <b>arithmétique</b> quand on passe d'un terme au suivant en ajoutant toujours le même nombre $r$ (la raison) : $u_{n+1} = u_n + r$.`,
        String.raw`On déroule à partir de $u_0$ : $u_1 = u_0 + r$, $u_2 = u_1 + r = u_0 + 2r$, $u_3 = u_0 + 3r$… À chaque pas on ajoute un $r$ de plus.`,
        String.raw`Après $n$ pas, on a ajouté $n$ fois $r$ : $u_n = u_0 + n\,r$.`,
        String.raw`Vérification : pour $n = 0$ on retrouve $u_0$ ✔, pour $n = 1$ on obtient $u_0 + r = u_1$ ✔.`
      ],
      why: { 0: String.raw`On a confondu avec une suite <b>géométrique</b> : $u_0\,r^n$ revient à multiplier par $r$ à chaque pas, au lieu d'ajouter $r$.`,
        1: String.raw`Erreur de décalage d'indice : $u_0 + (n+1)r$ est en réalité $u_{n+1}$. Test en $n = 0$ : on obtiendrait $u_0 + r \neq u_0$.`,
        3: String.raw`On a multiplié le premier terme par $n$ au lieu d'ajouter $n$ fois la raison. Test en $n = 0$ : $0 \times u_0 + r = r \neq u_0$.` },
      rule: String.raw`$u_n = u_0 + nr$, et plus généralement $u_n = u_p + (n-p)\,r$` },
    { id: 'm9-q-002', level: 1, topic: 'Somme des entiers', sec: 'm9-s-sommes',
      q: String.raw`Que vaut $1 + 2 + \dots + 100$ ?`,
      choices: [String.raw`$4950$`, String.raw`$5050$`, String.raw`$10100$`, String.raw`$5000$`], answer: 1,
      explain: String.raw`C'est la somme des $100$ premiers entiers, donnée par $\frac{n(n+1)}{2}$ avec $n = 100$. On obtient $\frac{100 \times 101}{2} = 5050$.`,
      steps: [
        String.raw`Rappel : la somme des entiers de $1$ à $n$ vaut $\sum_{k=1}^{n} k = \frac{n(n+1)}{2}$ (nombre de termes $\times$ moyenne du premier et du dernier).`,
        String.raw`Ici $n = 100$ : $\sum_{k=1}^{100} k = \frac{100 \times 101}{2}$.`,
        String.raw`Calcul : $100 \times 101 = 10100$, puis $\frac{10100}{2} = 5050$.`,
        String.raw`Vérification (astuce de Gauss) : on regroupe $1 + 100$, $2 + 99$, …, $50 + 51$ : $50$ paires valant chacune $101$, soit $50 \times 101 = 5050$ ✔.`
      ],
      why: { 0: String.raw`$4950 = \frac{99 \times 100}{2}$ : on a appliqué la formule avec $n = 99$, donc on a oublié le dernier terme $100$.`,
        2: String.raw`$10100 = 100 \times 101$ : on a oublié de diviser par $2$.`,
        3: String.raw`$5000 = 100 \times 50$ : on a pris $50$ comme moyenne des termes, alors que la moyenne de $1$ et $100$ est $50{,}5$.` },
      rule: String.raw`$\sum_{k=1}^{n} k = \frac{n(n+1)}{2}$` },
    { id: 'm9-q-003', level: 1, topic: 'Suite géométrique', sec: 'm9-s-arith-geo',
      q: String.raw`$(u_n)$ est géométrique avec $u_0 = 3$ et $q = 2$. Que vaut $u_5$ ?`,
      choices: [String.raw`$96$`, String.raw`$48$`, String.raw`$13$`, String.raw`$192$`], answer: 0,
      explain: String.raw`Pour une suite géométrique, $u_n = u_0\,q^n$. Ici $u_5 = 3 \times 2^5 = 3 \times 32 = 96$.`,
      steps: [
        String.raw`Rappel : une suite est <b>géométrique</b> quand on passe d'un terme au suivant en multipliant toujours par le même nombre $q$ (la raison) : $u_{n+1} = q\,u_n$, d'où $u_n = u_0\,q^n$.`,
        String.raw`On remplace : $u_5 = 3 \times 2^5$, avec $2^5 = 2 \times 2 \times 2 \times 2 \times 2 = 32$.`,
        String.raw`Calcul : $u_5 = 3 \times 32 = 96$.`,
        String.raw`Vérification terme à terme : $3, 6, 12, 24, 48, 96$ pour $n = 0, 1, 2, 3, 4, 5$ ✔.`
      ],
      why: { 1: String.raw`$48 = 3 \times 2^4 = u_4$ : on a mis l'exposant $n - 1$ comme si la suite commençait à $u_1$.`,
        2: String.raw`$13 = 3 + 5 \times 2$ : on a utilisé la formule arithmétique $u_0 + nr$ ; ici on multiplie par $2$ à chaque pas.`,
        3: String.raw`$192 = 3 \times 2^6 = u_6$ : on a compté un pas de trop (exposant $n + 1$).` },
      rule: String.raw`Géométrique : $u_n = u_0\,q^n$ ; arithmétique : $u_n = u_0 + nr$` },
    { id: 'm9-q-004', level: 1, topic: 'Somme géométrique finie', sec: 'm9-s-arith-geo',
      q: String.raw`Pour $q \neq 1$, $\sum_{k=0}^{n} q^k$ vaut :`,
      choices: [String.raw`$\dfrac{1 - q^{n}}{1 - q}$`, String.raw`$\dfrac{1}{1-q}$`, String.raw`$\dfrac{q^{n+1} - 1}{1 - q}$`, String.raw`$\dfrac{1 - q^{n+1}}{1-q}$`], answer: 3,
      explain: String.raw`La somme $1 + q + \dots + q^n$ contient $n + 1$ termes ; la formule « premier terme $\times \frac{1 - q^{\text{nb de termes}}}{1-q}$ » donne $\frac{1 - q^{n+1}}{1-q}$.`,
      steps: [
        String.raw`Rappel : la somme de termes consécutifs d'une suite géométrique de raison $q \neq 1$ vaut $\text{premier terme} \times \dfrac{1 - q^{\text{nombre de termes}}}{1 - q}$.`,
        String.raw`Premier terme : $q^0 = 1$. Nombre de termes : $k$ va de $0$ à $n$, soit $n + 1$ termes (on n'oublie pas $k = 0$).`,
        String.raw`Donc $\sum_{k=0}^{n} q^k = \dfrac{1 - q^{n+1}}{1 - q}$.`,
        String.raw`Vérification avec $n = 1$ : $1 + q$ et $\frac{1 - q^2}{1 - q} = \frac{(1 - q)(1 + q)}{1 - q} = 1 + q$ ✔.`
      ],
      why: { 0: String.raw`On a compté $n$ termes au lieu de $n + 1$ : $\frac{1 - q^n}{1-q}$ est la somme pour $k$ de $0$ à $n - 1$.`,
        1: String.raw`On a écrit la somme de la <b>série</b> infinie ($|q| \lt 1$, $n \to +\infty$) au lieu de la somme finie.`,
        2: String.raw`Erreur de signe : $\frac{q^{n+1} - 1}{1 - q}$ est l'opposé de la bonne réponse. Il faut $\frac{1 - q^{n+1}}{1-q}$ ou, ce qui revient au même, $\frac{q^{n+1} - 1}{q - 1}$.` },
      rule: String.raw`$\sum_{k=0}^{n} q^k = \frac{1 - q^{n+1}}{1-q}$ pour $q \neq 1$` },
    { id: 'm9-q-005', level: 2, topic: 'Point fixe', sec: 'm9-s-recurrentes',
      q: String.raw`Quel est le point fixe de la suite $u_{n+1} = \frac12 u_n + 3$ ?`,
      choices: [String.raw`$6$`, String.raw`$3$`, String.raw`$2$`, String.raw`$\frac32$`], answer: 0,
      explain: String.raw`Le point fixe est la valeur qui ne bouge pas quand on applique la relation : on résout $\ell = \frac12\ell + 3$ et on trouve $\ell = 6$.`,
      steps: [
        String.raw`Rappel : le <b>point fixe</b> de $u_{n+1} = a u_n + b$ est le nombre $\ell$ tel que $\ell = a\ell + b$ : si la suite vaut $\ell$, elle y reste. C'est la seule limite possible.`,
        String.raw`On écrit l'équation : $\ell = \frac12\ell + 3$.`,
        String.raw`On regroupe les $\ell$ à gauche : $\ell - \frac12\ell = 3$, soit $\frac12\ell = 3$, donc $\ell = 6$ (on multiplie par $2$).`,
        String.raw`Vérification : $\frac12 \times 6 + 3 = 3 + 3 = 6$ ✔. C'est aussi la formule $\ell = \frac{b}{1-a} = \frac{3}{1/2} = 6$.`
      ],
      why: { 1: String.raw`On a pris la constante $b = 3$ pour le point fixe ; or $\frac12 \times 3 + 3 = 4{,}5 \neq 3$.`,
        2: String.raw`$2 = \frac{3}{1 + 1/2}$ : erreur de signe en passant $\frac12\ell$ à gauche ; on obtient $1 - a$, pas $1 + a$.`,
        3: String.raw`$\frac32 = \frac12 \times 3$ : on a multiplié $a$ par $b$ au lieu de résoudre $\ell = a\ell + b$.` },
      rule: String.raw`Point fixe de $u_{n+1} = au_n + b$ : $\ell = a\ell + b \iff \ell = \frac{b}{1-a}$` },
    { id: 'm9-q-006', level: 2, topic: 'Suite arithmético-géométrique', sec: 'm9-s-recurrentes',
      q: String.raw`Soit $u_{n+1} = a u_n + b$ ($a \neq 1$) et $\ell$ son point fixe. La suite $v_n = u_n - \ell$ est :`,
      choices: [String.raw`arithmétique de raison $b$`, String.raw`géométrique de raison $a$`, String.raw`géométrique de raison $b$`, String.raw`constante`], answer: 1,
      explain: String.raw`En soustrayant $\ell = a\ell + b$ à $u_{n+1} = au_n + b$, la constante $b$ disparaît : $u_{n+1} - \ell = a(u_n - \ell)$. Donc $(v_n)$ est géométrique de raison $a$.`,
      steps: [
        String.raw`Rappel : une suite <b>arithmético-géométrique</b> vérifie $u_{n+1} = a u_n + b$. On l'étudie grâce à son point fixe $\ell$, qui vérifie $\ell = a\ell + b$.`,
        String.raw`On soustrait les deux égalités membre à membre : $u_{n+1} - \ell = (a u_n + b) - (a\ell + b) = a u_n - a\ell$.`,
        String.raw`On factorise : $u_{n+1} - \ell = a(u_n - \ell)$, c'est-à-dire $v_{n+1} = a\,v_n$.`,
        String.raw`Conclusion : $(v_n)$ est géométrique de raison $a$, donc $v_n = a^n v_0$ et $u_n = \ell + a^n(u_0 - \ell)$.`
      ],
      why: { 0: String.raw`On a cru que $b$ restait comme raison additive ; en réalité $b$ disparaît dans la soustraction et il reste une multiplication par $a$.`,
        2: String.raw`On a confondu les rôles : la raison est le coefficient multiplicateur $a$, la constante $b$ a été éliminée.`,
        3: String.raw`$(v_n)$ n'est constante (nulle) que si $u_0 = \ell$ ; en général $v_n = a^n v_0$ varie.` },
      rule: String.raw`$u_{n+1} = au_n + b$ : $v_n = u_n - \ell$ est géométrique de raison $a$, et $u_n = \ell + a^n(u_0 - \ell)$` },
    { id: 'm9-q-007', level: 2, topic: 'Limite et point fixe', sec: 'm9-s-recurrentes',
      q: String.raw`$u_{n+1} = f(u_n)$ avec $f$ continue, et $(u_n)$ converge vers $\ell$. Alors :`,
      choices: [String.raw`$f(\ell) = 0$`, String.raw`$f'(\ell) = 0$`, String.raw`$f(\ell) = \ell$`, String.raw`$\ell = u_0$`], answer: 2,
      explain: String.raw`On passe à la limite dans $u_{n+1} = f(u_n)$ : le membre de gauche tend vers $\ell$, celui de droite vers $f(\ell)$ par continuité. Donc $f(\ell) = \ell$.`,
      steps: [
        String.raw`Rappel : pour une suite définie par $u_{n+1} = f(u_n)$, la limite éventuelle est un <b>point fixe</b> de $f$, c'est-à-dire une solution de $f(x) = x$ (si $f$ est continue).`,
        String.raw`Si $u_n \to \ell$, alors $u_{n+1} \to \ell$ aussi (c'est la même suite, décalée d'un rang).`,
        String.raw`Comme $f$ est continue en $\ell$ : $f(u_n) \to f(\ell)$.`,
        String.raw`En passant à la limite dans $u_{n+1} = f(u_n)$ : $\ell = f(\ell)$. On trouve donc les limites possibles en résolvant $f(x) = x$.`
      ],
      why: { 0: String.raw`On a confondu point fixe ($f(x) = x$) et racine ($f(x) = 0$). Ex. $f(x) = \frac{x}{2} + 1$ : la suite tend vers $2$ et $f(2) = 2 \neq 0$.`,
        1: String.raw`On a cru qu'une limite impose une tangente horizontale ; rien ne force $f'(\ell) = 0$ (c'est $|f'(\ell)| \lt 1$ qui favorise la convergence).`,
        3: String.raw`On a supposé la suite constante : la limite n'est $u_0$ que si $u_0$ est déjà un point fixe.` },
      rule: String.raw`Si $u_{n+1} = f(u_n)$, $u_n \to \ell$ et $f$ continue en $\ell$, alors $f(\ell) = \ell$` },
    { id: 'm9-q-008', level: 3, topic: 'Suite récurrente, f décroissante', sec: 'm9-s-recurrentes',
      q: String.raw`$f$ est <b>décroissante</b> sur un intervalle stable $I$ et $u_{n+1} = f(u_n)$, $u_0 \in I$. Que peut-on dire ?`,
      choices: [String.raw`$(u_n)$ est décroissante`, String.raw`$(u_n)$ est croissante`, String.raw`$(u_{2n})$ et $(u_{2n+1})$ sont monotones de sens contraires`, String.raw`$(u_n)$ est constante`], answer: 2,
      explain: String.raw`Si $f$ est décroissante, $f \circ f$ est croissante : les sous-suites paire et impaire sont monotones. Comme $f$ inverse l'ordre, elles varient en sens contraires et la suite oscille autour du point fixe.`,
      steps: [
        String.raw`Rappel : pour $u_{n+1} = f(u_n)$, si $f$ est <b>croissante</b> la suite est monotone ; si $f$ est <b>décroissante</b>, on étudie les termes pairs et impairs séparément.`,
        String.raw`$u_{n+2} = f(f(u_n)) = (f \circ f)(u_n)$, et $f \circ f$ est croissante (deux inversions de l'ordre se compensent). Donc $(u_{2n})$ et $(u_{2n+1})$ sont chacune monotones.`,
        String.raw`Si par exemple $u_0 \leq u_2$, en appliquant $f$ décroissante : $f(u_0) \geq f(u_2)$, soit $u_1 \geq u_3$. Les deux sous-suites vont donc en sens contraires.`,
        String.raw`Exemple : $u_{n+1} = -\frac{u_n}{2}$, $u_0 = 1$ donne $1, -\frac12, \frac14, -\frac18, \dots$ : les termes alternent autour de $0$.`
      ],
      why: { 0: String.raw`On a cru que le sens de variation de $f$ donne celui de la suite ; avec $f$ décroissante, les termes sautent de part et d'autre du point fixe (ex. $1, -\frac12, \frac14, \dots$).`,
        1: String.raw`Même confusion : c'est le cas $f$ <b>croissante</b> qui donne une suite monotone.`,
        3: String.raw`On a supposé la suite stationnaire : elle n'est constante que si $u_0$ est un point fixe de $f$.` },
      rule: String.raw`$f$ croissante $\Rightarrow (u_n)$ monotone ; $f$ décroissante $\Rightarrow (u_{2n})$ et $(u_{2n+1})$ monotones de sens contraires` },
    { id: 'm9-q-009', level: 1, topic: 'Limite de q puissance n', sec: 'm9-s-limites',
      q: String.raw`Pour $q = -1{,}2$, la suite $(q^n)$ :`,
      choices: [String.raw`tend vers $0$`, String.raw`tend vers $+\infty$`, String.raw`tend vers $-\infty$`, String.raw`n'a pas de limite`], answer: 3,
      explain: String.raw`Comme $|q| = 1{,}2 > 1$, $|q^n| \to +\infty$ ; mais le signe de $q^n$ alterne. Les termes pairs vont vers $+\infty$, les impairs vers $-\infty$ : aucune limite.`,
      steps: [
        String.raw`Rappel : $(q^n)$ tend vers $0$ si $|q| \lt 1$, vers $+\infty$ si $q > 1$, vaut $1$ si $q = 1$, et <b>n'a pas de limite</b> si $q \leq -1$.`,
        String.raw`Valeur absolue : $|q^n| = |q|^n = 1{,}2^n \to +\infty$ car $1{,}2 > 1$.`,
        String.raw`Signe : $q \lt 0$, donc $q^n > 0$ pour $n$ pair et $q^n \lt 0$ pour $n$ impair (ex. $q^2 = 1{,}44$, $q^3 = -1{,}728$).`,
        String.raw`La sous-suite paire tend vers $+\infty$ et l'impaire vers $-\infty$ : deux comportements différents, donc pas de limite (ni finie, ni infinie).`
      ],
      why: { 0: String.raw`On a appliqué « $q^n \to 0$ » sans vérifier la condition $|q| \lt 1$ ; ici $|q| = 1{,}2 > 1$.`,
        1: String.raw`On a regardé seulement $|q^n|$ et oublié le signe : les termes d'indice impair sont négatifs.`,
        2: String.raw`On a regardé seulement les termes impairs : les termes d'indice pair sont positifs et grands.` },
      rule: String.raw`$q \leq -1$ : $(q^n)$ n'a pas de limite ; $|q| \lt 1$ : $q^n \to 0$ ; $q > 1$ : $q^n \to +\infty$` },
    { id: 'm9-q-010', level: 1, topic: 'Croissances comparées', sec: 'm9-s-limites',
      q: String.raw`Que vaut $\lim\limits_{n \to +\infty} \dfrac{n^3}{2^n}$ ?`,
      choices: [String.raw`$+\infty$`, String.raw`$0$`, String.raw`$1$`, String.raw`$\frac12$`], answer: 1,
      explain: String.raw`Forme $\frac{\infty}{\infty}$ levée par les croissances comparées : une exponentielle $q^n$ ($q > 1$) l'emporte sur toute puissance de $n$. Le quotient tend vers $0$.`,
      steps: [
        String.raw`Rappel : <b>croissances comparées</b> — pour $q > 1$ et $a > 0$, $\frac{n^a}{q^n} \to 0$ : l'exponentielle grandit infiniment plus vite que n'importe quelle puissance de $n$.`,
        String.raw`Ici numérateur $n^3$ (puissance) et dénominateur $2^n$ (exponentielle de base $2 > 1$) : forme indéterminée $\frac{\infty}{\infty}$.`,
        String.raw`Par croissances comparées, $\frac{n^3}{2^n} \to 0$.`,
        String.raw`Ordre de grandeur : pour $n = 30$, $n^3 = 27\,000$ alors que $2^{30} \approx 1{,}07 \times 10^9$ ; le quotient vaut environ $2{,}5 \times 10^{-5}$.`
      ],
      why: { 0: String.raw`On a cru que le polynôme l'emportait ; c'est l'inverse, l'exponentielle $2^n$ domine $n^3$.`,
        2: String.raw`On a traité $\frac{\infty}{\infty}$ comme valant $1$ ; c'est une forme indéterminée qu'il faut lever.`,
        3: String.raw`On a « simplifié » en inversant la base $2$ ; la limite d'un quotient puissance/exponentielle est $0$, pas $\frac12$.` },
      rule: String.raw`Croissances comparées : $(\ln n)^b \ll n^a \ll q^n \ll n!$ pour $a, b > 0$ et $q > 1$` },
    { id: 'm9-q-011', level: 2, topic: 'Forme indéterminée 1 puissance infini', sec: 'm9-s-limites',
      q: String.raw`Que vaut $\lim\limits_{n\to+\infty} \left(1 + \frac1n\right)^n$ ?`,
      choices: [String.raw`$1$`, String.raw`$+\infty$`, String.raw`$\mathrm{e}$`, String.raw`$0$`], answer: 2,
      explain: String.raw`Forme $1^\infty$ : on écrit $\left(1 + \frac1n\right)^n = \mathrm{e}^{n\ln(1 + 1/n)}$. Comme $n\ln\left(1 + \frac1n\right) \to 1$, la limite vaut $\mathrm{e}$.`,
      steps: [
        String.raw`Rappel : pour une puissance $a^b$ dont la base et l'exposant varient, on passe à l'exponentielle : $a^b = \mathrm{e}^{b\ln a}$. La forme $1^\infty$ est <b>indéterminée</b>.`,
        String.raw`Ici $\left(1 + \frac1n\right)^n = \exp\left(n\ln\left(1 + \frac1n\right)\right)$.`,
        String.raw`Équivalent usuel : $\ln(1 + \varepsilon) \sim \varepsilon$ quand $\varepsilon \to 0$. Avec $\varepsilon = \frac1n$ : $n\ln\left(1 + \frac1n\right) \sim n \times \frac1n = 1$.`,
        String.raw`Par continuité de l'exponentielle, la limite vaut $\mathrm{e}^1 = \mathrm{e} \approx 2{,}718$.`
      ],
      why: { 0: String.raw`On a remplacé la base par sa limite $1$ en oubliant que l'exposant tend vers l'infini : $1^\infty$ est indéterminée.`,
        1: String.raw`On a regardé seulement l'exposant qui explose ; mais la base se rapproche de $1$ et les deux effets se compensent.`,
        3: String.raw`Impossible : la base $1 + \frac1n$ est $> 1$, donc toute puissance positive est $> 1$.` },
      rule: String.raw`$\left(1 + \frac{x}{n}\right)^n \to \mathrm{e}^x$ ; méthode : $a^b = \mathrm{e}^{b\ln a}$ et $\ln(1 + \varepsilon) \sim \varepsilon$` },
    { id: 'm9-q-012', level: 1, topic: 'Théorème de la limite monotone', sec: 'm9-s-monotones',
      q: String.raw`Une suite croissante et majorée :`,
      choices: [String.raw`converge`, String.raw`tend vers $+\infty$`, String.raw`converge forcément vers son majorant`, String.raw`peut n'avoir aucune limite`], answer: 0,
      explain: String.raw`Théorème de la limite monotone : une suite croissante et majorée converge. Sa limite est inférieure ou égale à tout majorant, sans être forcément égale à un majorant donné.`,
      steps: [
        String.raw`Rappel : une suite est <b>majorée</b> s'il existe $M$ tel que $u_n \leq M$ pour tout $n$. Le <b>théorème de la limite monotone</b> dit : croissante et majorée $\Rightarrow$ convergente.`,
        String.raw`La suite monte mais ne peut pas dépasser $M$ : elle « s'accumule » sous une valeur $\ell \leq M$ (la borne supérieure de ses termes).`,
        String.raw`Exemple : $u_n = 1 - \frac1n$ est croissante, majorée par $5$, et converge vers $1$ (et non vers $5$).`
      ],
      why: { 1: String.raw`On a oublié l'hypothèse « majorée » : une suite qui reste $\leq M$ ne peut pas tendre vers $+\infty$.`,
        2: String.raw`On a confondu « un majorant » avec « la limite » : $1 - \frac1n$ est majorée par $5$ mais tend vers $1$. La limite est le <b>plus petit</b> majorant.`,
        3: String.raw`On a ignoré le théorème : monotone + bornée du bon côté garantit une limite finie.` },
      rule: String.raw`Croissante et majorée $\Rightarrow$ convergente ; décroissante et minorée $\Rightarrow$ convergente` },
    { id: 'm9-q-013', level: 2, topic: 'Suites adjacentes', sec: 'm9-s-monotones',
      q: String.raw`$(u_n)$ et $(v_n)$ sont dites <b>adjacentes</b> lorsque :`,
      choices: [String.raw`$(u_n)$ croissante, $(v_n)$ décroissante et $v_n - u_n \to 0$`, String.raw`$(u_n)$ et $(v_n)$ convergent vers la même limite`, String.raw`$u_n \leq v_n$ pour tout $n$`, String.raw`$(u_n)$ et $(v_n)$ sont bornées`], answer: 0,
      explain: String.raw`Par définition, deux suites sont adjacentes si l'une croît, l'autre décroît et leur différence tend vers $0$. Le théorème en déduit qu'elles ont la même limite.`,
      steps: [
        String.raw`Rappel : deux suites sont <b>adjacentes</b> quand elles se rapprochent l'une de l'autre en se « pinçant » : $(u_n)$ croissante, $(v_n)$ décroissante, et $v_n - u_n \to 0$.`,
        String.raw`Théorème des suites adjacentes : elles convergent alors vers la même limite $\ell$, avec $u_n \leq \ell \leq v_n$ pour tout $n$.`,
        String.raw`La bonne réponse est donc la définition elle-même ; « même limite » est la <b>conclusion</b> du théorème, pas la définition.`
      ],
      why: { 1: String.raw`On a pris la conclusion du théorème pour la définition : $\frac{(-1)^n}{n}$ et $\frac1n$ ont même limite sans être adjacentes (la première n'est pas monotone).`,
        2: String.raw`On n'a gardé qu'une conséquence : $u_n = 0$ et $v_n = 1$ vérifient $u_n \leq v_n$ mais l'écart ne tend pas vers $0$.`,
        3: String.raw`On a confondu avec « bornées » : cela ne dit rien de la monotonie ni de l'écart.` },
      rule: String.raw`$(u_n)$ croissante, $(v_n)$ décroissante, $v_n - u_n \to 0$ $\Rightarrow$ même limite $\ell$, avec $u_n \leq \ell \leq v_n$` },
    { id: 'm9-q-014', level: 1, topic: 'Suite bornée non convergente', sec: 'm9-s-limites',
      q: String.raw`La suite $\left((-1)^n\right)$ est :`,
      choices: [String.raw`convergente vers $0$`, String.raw`bornée mais divergente`, String.raw`divergente vers $+\infty$`, String.raw`convergente vers $1$`], answer: 1,
      explain: String.raw`La suite vaut alternativement $1$ et $-1$ : elle est bornée. Mais ses sous-suites paire et impaire ont des limites différentes, donc elle diverge.`,
      steps: [
        String.raw`Rappel : une suite <b>converge</b> si ses termes se rapprochent d'un unique nombre $\ell$ ; alors toutes ses sous-suites (termes pairs, impairs…) tendent vers ce même $\ell$.`,
        String.raw`Ici $(-1)^n = 1$ pour $n$ pair et $-1$ pour $n$ impair : $|(-1)^n| \leq 1$, la suite est <b>bornée</b>.`,
        String.raw`La sous-suite paire tend vers $1$, la sous-suite impaire vers $-1$ : deux limites différentes, donc la suite <b>diverge</b>.`
      ],
      why: { 0: String.raw`On a cru que l'alternance « moyennait » vers $0$ ; or $|(-1)^n| = 1$ : les termes restent à distance $1$ de $0$.`,
        2: String.raw`On a confondu « divergente » et « tend vers l'infini » : la suite reste bornée par $1$.`,
        3: String.raw`On n'a regardé que les termes pairs ; les termes impairs valent $-1$.` },
      rule: String.raw`Deux sous-suites de limites différentes $\Rightarrow$ divergence ; bornée $\not\Rightarrow$ convergente` },
    { id: 'm9-q-015', level: 1, topic: 'Somme des carrés', sec: 'm9-s-sommes',
      q: String.raw`$\sum_{k=1}^{n} k^2$ vaut :`,
      choices: [String.raw`$\dfrac{n(n+1)}{2}$`, String.raw`$\dfrac{n(n+1)(2n+1)}{6}$`, String.raw`$\left(\dfrac{n(n+1)}{2}\right)^2$`, String.raw`$\dfrac{n^2(n+1)}{2}$`], answer: 1,
      explain: String.raw`Formule à connaître : $\sum_{k=1}^{n} k^2 = \frac{n(n+1)(2n+1)}{6}$. On la contrôle sur $n = 2$ : $1 + 4 = 5 = \frac{2 \cdot 3 \cdot 5}{6}$.`,
      steps: [
        String.raw`Rappel : trois sommes usuelles à connaître : $\sum k = \frac{n(n+1)}{2}$, $\sum k^2 = \frac{n(n+1)(2n+1)}{6}$, $\sum k^3 = \left(\frac{n(n+1)}{2}\right)^2$.`,
        String.raw`Test $n = 2$ : $1^2 + 2^2 = 5$ et $\frac{2 \times 3 \times 5}{6} = \frac{30}{6} = 5$ ✔.`,
        String.raw`Test $n = 3$ : $1 + 4 + 9 = 14$ et $\frac{3 \times 4 \times 7}{6} = \frac{84}{6} = 14$ ✔.`
      ],
      why: { 0: String.raw`On a pris la formule de $\sum k$ (somme des entiers) ; pour $n = 2$ elle donne $3 \neq 5$.`,
        2: String.raw`On a pris la formule de $\sum k^3$ ; pour $n = 2$ elle donne $9 = 1 + 8$.`,
        3: String.raw`Formule inventée : pour $n = 2$ elle donne $\frac{4 \times 3}{2} = 6 \neq 5$. Toujours tester sur un petit $n$.` },
      rule: String.raw`$\sum_{k=1}^{n} k^2 = \frac{n(n+1)(2n+1)}{6}$` },
    { id: 'm9-q-016', level: 2, topic: 'Somme télescopique', sec: 'm9-s-sommes',
      q: String.raw`$\sum_{k=1}^{n} \left(\frac1k - \frac{1}{k+1}\right)$ vaut :`,
      choices: [String.raw`$1 - \dfrac{1}{n+1}$`, String.raw`$1 - \dfrac1n$`, String.raw`$0$`, String.raw`$\dfrac{1}{n+1}$`], answer: 0,
      explain: String.raw`Somme télescopique : en écrivant les termes, chaque $-\frac{1}{k+1}$ s'annule avec le $+\frac{1}{k+1}$ suivant. Il ne reste que $1 - \frac{1}{n+1}$.`,
      steps: [
        String.raw`Rappel : une somme est <b>télescopique</b> quand chaque terme s'écrit $a_k - a_{k+1}$ ; alors presque tout se simplifie : $\sum_{k=1}^{n}(a_k - a_{k+1}) = a_1 - a_{n+1}$.`,
        String.raw`On écrit les termes : $\left(1 - \frac12\right) + \left(\frac12 - \frac13\right) + \left(\frac13 - \frac14\right) + \dots + \left(\frac1n - \frac{1}{n+1}\right)$.`,
        String.raw`Les $-\frac12$ et $+\frac12$ s'annulent, puis $-\frac13$ et $+\frac13$, etc. Il reste le premier terme $1$ et le dernier $-\frac{1}{n+1}$.`,
        String.raw`Résultat : $1 - \frac{1}{n+1}$. Vérification $n = 1$ : $1 - \frac12 = \frac12$ ✔.`
      ],
      why: { 1: String.raw`Erreur sur le dernier terme : pour $k = n$ on a $\frac1n - \frac{1}{n+1}$, et c'est $-\frac{1}{n+1}$ qui reste ($\frac1n$ s'est simplifié).`,
        2: String.raw`On a cru que tout s'annulait ; le premier terme $1$ et le dernier $-\frac{1}{n+1}$ n'ont pas de partenaire.`,
        3: String.raw`On a oublié le premier terme $1$ et mis le mauvais signe au dernier.` },
      rule: String.raw`$\sum_{k=1}^{n} (a_k - a_{k+1}) = a_1 - a_{n+1}$` },
    { id: 'm9-q-017', level: 1, topic: 'Condition nécessaire de convergence', sec: 'm9-s-series',
      q: String.raw`Si la série $\sum u_n$ converge, alors nécessairement :`,
      choices: [String.raw`$u_n \to 0$`, String.raw`$u_n \to 1$`, String.raw`$(u_n)$ est décroissante`, String.raw`$\sum |u_n|$ converge`], answer: 0,
      explain: String.raw`Si $S_n \to S$, alors $u_n = S_n - S_{n-1} \to S - S = 0$ : le terme général d'une série convergente tend vers $0$. La réciproque est fausse.`,
      steps: [
        String.raw`Rappel : la <b>série</b> $\sum u_n$ converge si la suite des sommes partielles $S_n = u_0 + u_1 + \dots + u_n$ a une limite finie $S$.`,
        String.raw`On remarque que $u_n = S_n - S_{n-1}$ (la somme jusqu'à $n$ moins la somme jusqu'à $n-1$).`,
        String.raw`Si $S_n \to S$, alors $S_{n-1} \to S$ aussi, donc $u_n \to S - S = 0$.`,
        String.raw`Attention : la réciproque est fausse ($\frac1n \to 0$ mais $\sum \frac1n$ diverge).`
      ],
      why: { 1: String.raw`On a confondu terme général et somme : si $u_n \to 1$, on ajoute environ $1$ à chaque étape et $S_n \to +\infty$ (divergence grossière).`,
        2: String.raw`On a ajouté une hypothèse inutile : $\sum \frac{(-1)^n}{n^2}$ converge alors que ses termes ne sont pas monotones.`,
        3: String.raw`On a confondu convergence et convergence absolue : $\sum \frac{(-1)^n}{n}$ converge mais $\sum \frac1n$ diverge.` },
      rule: String.raw`$\sum u_n$ converge $\Rightarrow u_n \to 0$ (la réciproque est fausse)` },
    { id: 'm9-q-018', level: 1, topic: 'Série harmonique', sec: 'm9-s-series',
      q: String.raw`La série harmonique $\sum_{n \geq 1} \frac1n$ :`,
      choices: [String.raw`converge vers $\ln 2$`, String.raw`converge car $\frac1n \to 0$`, String.raw`diverge`, String.raw`converge vers $\frac{\pi^2}{6}$`], answer: 2,
      explain: String.raw`C'est la série de Riemann avec $\alpha = 1$ : elle diverge, ses sommes partielles se comportant comme $\ln n$. Que $\frac1n \to 0$ ne suffit pas.`,
      steps: [
        String.raw`Rappel : une <b>série de Riemann</b> est $\sum \frac{1}{n^\alpha}$ ; elle converge si et seulement si $\alpha > 1$.`,
        String.raw`La série harmonique $\sum \frac1n$ correspond à $\alpha = 1$, qui n'est pas $> 1$ : elle <b>diverge</b>.`,
        String.raw`Plus précisément, $\sum_{k=1}^{n} \frac1k \sim \ln n \to +\infty$ (comparaison avec $\int_1^n \frac{\mathrm{d}t}{t} = \ln n$) : elle diverge très lentement.`
      ],
      why: { 0: String.raw`On a confondu avec la série harmonique <b>alternée</b> $\sum \frac{(-1)^{n+1}}{n}$, dont la somme vaut $\ln 2$.`,
        1: String.raw`On a pris la condition nécessaire $u_n \to 0$ pour une condition suffisante ; la série harmonique est justement le contre-exemple.`,
        3: String.raw`On a confondu avec $\sum \frac{1}{n^2}$ (Riemann $\alpha = 2$), dont la somme vaut $\frac{\pi^2}{6}$.` },
      rule: String.raw`$\sum_{k=1}^{n} \frac1k \sim \ln n$ : la série harmonique diverge` },
    { id: 'm9-q-019', level: 1, topic: 'Séries de Riemann', sec: 'm9-s-series',
      q: String.raw`La série $\sum_{n\geq1} \frac{1}{n^\alpha}$ converge si et seulement si :`,
      choices: [String.raw`$\alpha \geq 1$`, String.raw`$\alpha > 0$`, String.raw`$\alpha \lt 1$`, String.raw`$\alpha > 1$`], answer: 3,
      explain: String.raw`Critère de Riemann : $\sum \frac{1}{n^\alpha}$ converge si et seulement si $\alpha > 1$. Le cas limite $\alpha = 1$ (série harmonique) diverge.`,
      steps: [
        String.raw`Rappel : les <b>séries de Riemann</b> $\sum_{n\geq1} \frac{1}{n^\alpha}$ servent de référence pour comparer les séries à termes positifs.`,
        String.raw`On les compare à l'intégrale $\int_1^{+\infty} \frac{\mathrm{d}t}{t^\alpha}$, qui est finie exactement quand $\alpha > 1$.`,
        String.raw`Conclusion : convergence $\iff \alpha > 1$ ; pour $\alpha = 1$ (harmonique) ou $\alpha \lt 1$, divergence.`
      ],
      why: { 0: String.raw`On a inclus à tort le cas $\alpha = 1$ : la série harmonique $\sum \frac1n$ diverge.`,
        1: String.raw`On a cru que $u_n \to 0$ suffisait : pour $0 \lt \alpha \leq 1$, le terme tend vers $0$ trop lentement et la série diverge.`,
        2: String.raw`On a inversé l'inégalité : pour $\alpha \lt 1$, les termes sont plus gros que $\frac1n$ et la série diverge.` },
      rule: String.raw`$\sum \frac{1}{n^\alpha}$ converge $\iff \alpha > 1$` },
    { id: 'm9-q-020', level: 1, topic: 'Série géométrique', sec: 'm9-s-series',
      q: String.raw`Que vaut $\sum_{n=0}^{+\infty} \left(\frac12\right)^n$ ?`,
      choices: [String.raw`$1$`, String.raw`$2$`, String.raw`$\frac12$`, String.raw`$+\infty$`], answer: 1,
      explain: String.raw`Série géométrique de raison $\frac12$ ($|q| \lt 1$) et de premier terme $1$ : sa somme vaut $\frac{1}{1 - 1/2} = 2$.`,
      steps: [
        String.raw`Rappel : la <b>série géométrique</b> $\sum q^n$ converge si et seulement si $|q| \lt 1$, et sa somme vaut $\frac{\text{premier terme}}{1 - q}$.`,
        String.raw`Ici $q = \frac12$, donc $|q| \lt 1$ : convergence. Le premier terme (pour $n = 0$) est $\left(\frac12\right)^0 = 1$.`,
        String.raw`Somme : $\frac{1}{1 - \frac12} = \frac{1}{\frac12} = 2$.`,
        String.raw`Contrôle : $1 + 0{,}5 + 0{,}25 + 0{,}125 + \dots$ s'approche bien de $2$.`
      ],
      why: { 0: String.raw`On a fait commencer la somme à $n = 1$ : $\frac{1/2}{1 - 1/2} = 1$. Ici on part de $n = 0$, il faut ajouter le terme $1$.`,
        2: String.raw`On a donné la raison $q = \frac12$ au lieu de la somme.`,
        3: String.raw`On a oublié que $|q| = \frac12 \lt 1$ : les termes décroissent géométriquement et la série converge.` },
      rule: String.raw`$\sum_{n\geq0} q^n = \frac{1}{1-q}$ si $|q| \lt 1$ (en général : premier terme sur $1 - q$)` },
    { id: 'm9-q-021', level: 2, topic: 'Critère des équivalents', sec: 'm9-s-criteres',
      q: String.raw`Nature de $\sum_{n\ge1} \dfrac{n}{n^2 + 1}$ ?`,
      choices: [String.raw`Converge car le terme général tend vers $0$`, String.raw`Converge (Riemann avec $\alpha = 2$)`, String.raw`Diverge car $\frac{n}{n^2+1} \sim \frac1n$`], answer: 2,
      explain: String.raw`Termes positifs et $\frac{n}{n^2 + 1} \sim \frac1n$ : la série a la même nature que la série harmonique, donc elle diverge.`,
      steps: [
        String.raw`Rappel : pour des séries à <b>termes positifs</b>, si $u_n \sim v_n$, alors $\sum u_n$ et $\sum v_n$ ont la même nature (toutes deux convergentes ou toutes deux divergentes).`,
        String.raw`Équivalent : on garde les termes dominants, $\frac{n}{n^2 + 1} \sim \frac{n}{n^2} = \frac1n$.`,
        String.raw`$\sum \frac1n$ diverge (Riemann $\alpha = 1$), donc $\sum \frac{n}{n^2+1}$ <b>diverge</b>.`
      ],
      why: { 0: String.raw`On a pris la condition nécessaire $u_n \to 0$ pour suffisante ; la série harmonique montre que ça ne suffit pas.`,
        1: String.raw`On a mal simplifié l'équivalent en oubliant le $n$ du numérateur : $\frac{n}{n^2} = \frac1n$, pas $\frac{1}{n^2}$.` },
      rule: String.raw`Termes positifs : $u_n \sim v_n \Rightarrow \sum u_n$ et $\sum v_n$ de même nature` },
    { id: 'm9-q-022', level: 2, topic: 'Critère des équivalents', sec: 'm9-s-criteres',
      q: String.raw`Nature de $\sum \dfrac{1}{n^2 + n + 1}$ ?`,
      choices: [String.raw`Diverge`, String.raw`Converge`, String.raw`On ne peut pas conclure`], answer: 1,
      explain: String.raw`Termes positifs et $\frac{1}{n^2 + n + 1} \sim \frac{1}{n^2}$ ; comme $\sum \frac{1}{n^2}$ converge (Riemann $\alpha = 2$), la série converge.`,
      steps: [
        String.raw`Rappel : pour des séries à <b>termes positifs</b>, deux termes généraux équivalents donnent des séries de même nature.`,
        String.raw`Au dénominateur, le terme dominant est $n^2$ : $n^2 + n + 1 \sim n^2$, donc $\frac{1}{n^2 + n + 1} \sim \frac{1}{n^2}$.`,
        String.raw`$\sum \frac{1}{n^2}$ converge (Riemann avec $\alpha = 2 > 1$), donc la série <b>converge</b>.`
      ],
      why: { 0: String.raw`On a mal identifié l'équivalent : $\frac{1}{n^2}$ est le terme d'une série convergente, pas divergente.`,
        2: String.raw`On a oublié la règle des équivalents pour les termes positifs, qui conclut directement.` },
      rule: String.raw`Termes positifs : $u_n \sim \frac{1}{n^\alpha}$ avec $\alpha > 1$ $\Rightarrow \sum u_n$ converge` },
    { id: 'm9-q-023', level: 2, topic: 'Règle de d\'Alembert', sec: 'm9-s-criteres',
      q: String.raw`Pour une série à termes positifs, $\dfrac{u_{n+1}}{u_n} \to 1$. Alors :`,
      choices: [String.raw`la série converge`, String.raw`la série diverge`, String.raw`on ne peut pas conclure`, String.raw`la somme vaut $1$`], answer: 2,
      explain: String.raw`La règle de d'Alembert ne conclut que si $L \lt 1$ ou $L > 1$. Pour $L = 1$, $\sum \frac1n$ diverge et $\sum \frac{1}{n^2}$ converge : on ne peut pas conclure.`,
      steps: [
        String.raw`Rappel : <b>règle de d'Alembert</b> — si $u_n > 0$ et $\frac{u_{n+1}}{u_n} \to L$, alors $L \lt 1 \Rightarrow$ convergence, $L > 1 \Rightarrow$ divergence, $L = 1$ : cas douteux.`,
        String.raw`Pour $\sum \frac1n$ : $\frac{u_{n+1}}{u_n} = \frac{n}{n+1} \to 1$, et la série diverge.`,
        String.raw`Pour $\sum \frac{1}{n^2}$ : $\frac{u_{n+1}}{u_n} = \frac{n^2}{(n+1)^2} \to 1$, et la série converge.`,
        String.raw`Même $L = 1$, natures différentes : on ne peut pas conclure, il faut une autre méthode (équivalent, Riemann…).`
      ],
      why: { 0: String.raw`On a cru que $L \leq 1$ suffit ; contre-exemple $\sum \frac1n$, qui donne $L = 1$ et diverge.`,
        1: String.raw`On a cru que $L \geq 1$ suffit pour diverger ; contre-exemple $\sum \frac{1}{n^2}$, qui donne $L = 1$ et converge.`,
        3: String.raw`On a confondu nature et somme : d'Alembert ne donne jamais la valeur de la somme.` },
      rule: String.raw`d'Alembert : $L \lt 1$ CV, $L > 1$ DV, $L = 1$ on ne peut pas conclure` },
    { id: 'm9-q-024', level: 2, topic: 'Séries alternées', sec: 'm9-s-criteres',
      q: String.raw`La série $\sum_{n\geq1} \dfrac{(-1)^n}{\sqrt n}$ :`,
      choices: [String.raw`diverge grossièrement`, String.raw`converge absolument`, String.raw`converge mais pas absolument`, String.raw`diverge car $\sum \frac{1}{\sqrt n}$ diverge`], answer: 2,
      explain: String.raw`Le critère des séries alternées donne la convergence ($\frac{1}{\sqrt n}$ décroît vers $0$), mais $\sum \frac{1}{\sqrt n}$ diverge : la série est semi-convergente.`,
      steps: [
        String.raw`Rappel : <b>critère des séries alternées</b> — si $a_n \geq 0$ décroît vers $0$, alors $\sum (-1)^n a_n$ converge. Et une série est <b>absolument convergente</b> si $\sum |u_n|$ converge.`,
        String.raw`Ici $a_n = \frac{1}{\sqrt n}$ est positive, décroissante et tend vers $0$ : la série <b>converge</b>.`,
        String.raw`Valeurs absolues : $\sum \left|\frac{(-1)^n}{\sqrt n}\right| = \sum \frac{1}{n^{1/2}}$, Riemann avec $\alpha = \frac12 \leq 1$ : divergente.`,
        String.raw`Conclusion : convergente mais pas absolument (semi-convergente).`
      ],
      why: { 0: String.raw`On a cru que le terme ne tendait pas vers $0$ ; or $\frac{1}{\sqrt n} \to 0$, il n'y a pas de divergence grossière.`,
        1: String.raw`On a oublié de vérifier $\sum |u_n|$ : $\sum \frac{1}{\sqrt n}$ diverge (Riemann $\alpha = \frac12$).`,
        3: String.raw`On a cru que « $\sum |u_n|$ diverge » entraîne « $\sum u_n$ diverge » ; c'est faux, les signes alternés créent des compensations.` },
      rule: String.raw`$a_n \searrow 0 \Rightarrow \sum (-1)^n a_n$ converge, avec $|R_n| \leq a_{n+1}$` },
    { id: 'm9-q-025', level: 3, topic: 'Reste d\'une série alternée', sec: 'm9-s-criteres',
      q: String.raw`On approche $S = \sum_{n\geq1} \frac{(-1)^{n+1}}{n}$ par $S_9$ (somme des $9$ premiers termes). L'erreur $|S - S_9|$ est majorée par :`,
      choices: [String.raw`$\frac{1}{10}$`, String.raw`$\frac{1}{9}$`, String.raw`$\frac{1}{100}$`, String.raw`aucune majoration simple`], answer: 0,
      explain: String.raw`Pour une série alternée, l'erreur $|S - S_n|$ est majorée par le premier terme négligé. Avec $S_9$, ce terme est $\frac{1}{10}$.`,
      steps: [
        String.raw`Rappel : pour une série alternée vérifiant le critère, le <b>reste</b> $R_n = S - S_n$ vérifie $|R_n| \leq a_{n+1}$ : l'erreur est au plus la valeur absolue du premier terme qu'on n'a pas additionné.`,
        String.raw`$S_9$ contient les termes $\frac11, -\frac12, \dots, \frac19$ ($n = 1$ à $9$).`,
        String.raw`Le premier terme négligé est celui de rang $10$ : $a_{10} = \frac{1}{10}$.`,
        String.raw`Donc $|S - S_9| \leq \frac{1}{10}$ (ici $S = \ln 2$).`
      ],
      why: { 1: String.raw`On a pris le dernier terme <b>gardé</b> ($\frac19$) au lieu du premier terme <b>négligé</b> ($\frac{1}{10}$).`,
        2: String.raw`On a élevé au carré par confusion avec la série $\sum \frac{1}{n^2}$ ; ici les termes valent $\frac1n$.`,
        3: String.raw`On a oublié la majoration du reste fournie par le critère des séries alternées.` },
      rule: String.raw`Série alternée : $|S - S_n| \leq a_{n+1}$ (premier terme négligé)` },
    { id: 'm9-q-026', level: 2, topic: 'Règle de d\'Alembert', sec: 'm9-s-criteres',
      q: String.raw`Nature de $\sum \dfrac{2^n}{n!}$ ?`,
      choices: [String.raw`Diverge car $2^n \to +\infty$`, String.raw`Converge`, String.raw`d'Alembert ne permet pas de conclure`], answer: 1,
      explain: String.raw`Avec une factorielle, on applique d'Alembert : $\frac{u_{n+1}}{u_n} = \frac{2}{n+1} \to 0 \lt 1$, donc la série converge (et sa somme vaut $\mathrm{e}^2$).`,
      steps: [
        String.raw`Rappel : la <b>règle de d'Alembert</b> compare deux termes consécutifs ; elle est idéale en présence de factorielles et de puissances $q^n$.`,
        String.raw`$\frac{u_{n+1}}{u_n} = \frac{2^{n+1}}{(n+1)!} \times \frac{n!}{2^n}$, avec $\frac{2^{n+1}}{2^n} = 2$ et $\frac{n!}{(n+1)!} = \frac{1}{n+1}$.`,
        String.raw`Donc $\frac{u_{n+1}}{u_n} = \frac{2}{n+1} \to 0$, et $L = 0 \lt 1$ : <b>convergence</b>.`,
        String.raw`Bonus : on reconnaît $\sum \frac{x^n}{n!} = \mathrm{e}^x$ en $x = 2$, la somme vaut $\mathrm{e}^2$.`
      ],
      why: { 0: String.raw`On a regardé seulement le numérateur : $n!$ croît beaucoup plus vite que $2^n$, donc $\frac{2^n}{n!} \to 0$.`,
        2: String.raw`On a mal calculé la limite du quotient : elle vaut $0$, pas $1$, et d'Alembert conclut.` },
      rule: String.raw`$\frac{(n+1)!}{n!} = n + 1$ ; d'Alembert : $L \lt 1 \Rightarrow$ convergence` },
    { id: 'm9-q-027', level: 1, topic: 'Rayon de convergence', sec: 'm9-s-entieres',
      q: String.raw`Rayon de convergence de $\sum \dfrac{x^n}{n!}$ ?`,
      choices: [String.raw`$0$`, String.raw`$1$`, String.raw`$\mathrm{e}$`, String.raw`$+\infty$`], answer: 3,
      explain: String.raw`Coefficients $a_n = \frac{1}{n!}$ : $\left|\frac{a_{n+1}}{a_n}\right| = \frac{1}{n+1} \to 0$, donc $R = +\infty$. C'est la série de $\mathrm{e}^x$, valable pour tout $x$.`,
      steps: [
        String.raw`Rappel : le <b>rayon de convergence</b> $R$ d'une série entière $\sum a_n x^n$ est tel qu'elle converge pour $|x| \lt R$ et diverge pour $|x| > R$. Si $\left|\frac{a_{n+1}}{a_n}\right| \to L$, alors $R = \frac1L$.`,
        String.raw`Ici $a_n = \frac{1}{n!}$ : $\left|\frac{a_{n+1}}{a_n}\right| = \frac{n!}{(n+1)!} = \frac{1}{n+1}$.`,
        String.raw`Limite : $L = 0$, donc $R = \frac{1}{0} = +\infty$ (convention).`,
        String.raw`C'est la série de $\mathrm{e}^x$, qui converge pour tout réel $x$.`
      ],
      why: { 0: String.raw`On a inversé la règle : $R = 0$ correspond à $L = +\infty$, c'est le cas de $\sum n!\,x^n$.`,
        1: String.raw`On a pris le rayon de la série géométrique $\sum x^n$ ; ici les $\frac{1}{n!}$ rendent la convergence universelle.`,
        2: String.raw`On a confondu le rayon avec la valeur de la somme en $x = 1$, qui est $\mathrm{e}$.` },
      rule: String.raw`$\left|\frac{a_{n+1}}{a_n}\right| \to L \Rightarrow R = \frac1L$ (avec $\frac10 = +\infty$ et $\frac{1}{+\infty} = 0$)` },
    { id: 'm9-q-028', level: 2, topic: 'Rayon de convergence', sec: 'm9-s-entieres',
      q: String.raw`Rayon de convergence de $\sum n!\,x^n$ ?`,
      choices: [String.raw`$0$`, String.raw`$1$`, String.raw`$+\infty$`, String.raw`$\frac{1}{\mathrm{e}}$`], answer: 0,
      explain: String.raw`Coefficients $a_n = n!$ : $\left|\frac{a_{n+1}}{a_n}\right| = n + 1 \to +\infty$, donc $R = 0$. La série ne converge qu'en $x = 0$.`,
      steps: [
        String.raw`Rappel : si $\left|\frac{a_{n+1}}{a_n}\right| \to L$, le rayon de convergence vaut $R = \frac1L$ ; un quotient qui explose donne $R = 0$.`,
        String.raw`Ici $a_n = n!$ : $\left|\frac{a_{n+1}}{a_n}\right| = \frac{(n+1)!}{n!} = n + 1$.`,
        String.raw`$n + 1 \to +\infty$, donc $L = +\infty$ et $R = 0$.`,
        String.raw`Interprétation : pour tout $x \neq 0$, $n!\,x^n$ ne tend même pas vers $0$ ; la série ne converge qu'en $x = 0$.`
      ],
      why: { 1: String.raw`On a supposé que le quotient tend vers $1$ ; il vaut $n + 1$ et tend vers $+\infty$.`,
        2: String.raw`On a confondu avec $\sum \frac{x^n}{n!}$, où la factorielle est au dénominateur.`,
        3: String.raw`On a cherché un lien avec $\mathrm{e}$ qui n'existe pas ici : le quotient tend vers $+\infty$.` },
      rule: String.raw`$\left|\frac{a_{n+1}}{a_n}\right| \to +\infty \Rightarrow R = 0$` },
    { id: 'm9-q-029', level: 1, topic: 'Série géométrique entière', sec: 'm9-s-entieres',
      q: String.raw`Pour $|x| \lt 1$, $\sum_{n=0}^{+\infty} x^n$ vaut :`,
      choices: [String.raw`$\dfrac{1}{1+x}$`, String.raw`$\dfrac{1}{1-x}$`, String.raw`$\dfrac{x}{1-x}$`, String.raw`$\mathrm{e}^x$`], answer: 1,
      explain: String.raw`C'est la série géométrique de raison $x$ et de premier terme $1$ ; pour $|x| \lt 1$ sa somme vaut $\frac{1}{1-x}$.`,
      steps: [
        String.raw`Rappel : une <b>série géométrique</b> de raison $q$ avec $|q| \lt 1$ a pour somme $\frac{\text{premier terme}}{1 - q}$.`,
        String.raw`Ici la raison est $x$ (on multiplie par $x$ d'un terme au suivant) et le premier terme est $x^0 = 1$.`,
        String.raw`Donc $\sum_{n\geq0} x^n = \frac{1}{1 - x}$ pour $|x| \lt 1$. C'est la série entière de base, dont on en déduit beaucoup d'autres.`
      ],
      why: { 0: String.raw`On s'est trompé de signe dans la raison : $\frac{1}{1+x}$ est la somme de $\sum (-x)^n$.`,
        2: String.raw`On a fait commencer la somme à $n = 1$ (premier terme $x$).`,
        3: String.raw`On a confondu avec $\sum \frac{x^n}{n!} = \mathrm{e}^x$ (il faudrait des factorielles).` },
      rule: String.raw`$\sum_{n\geq0} x^n = \frac{1}{1-x}$ pour $|x| \lt 1$` },
    { id: 'm9-q-030', level: 2, topic: 'Développement de ln(1+x)', sec: 'm9-s-entieres',
      q: String.raw`Quel est le développement en série entière de $\ln(1+x)$ ($|x| \lt 1$) ?`,
      choices: [String.raw`$\sum_{n\geq1} \dfrac{(-1)^{n+1}}{n}x^n$`, String.raw`$\sum_{n\geq1} \dfrac{x^n}{n}$`, String.raw`$\sum_{n\geq0} \dfrac{(-1)^n}{n!}x^n$`, String.raw`$\sum_{n\geq1} \dfrac{(-1)^{n+1}}{n!}x^n$`], answer: 0,
      explain: String.raw`On intègre la série géométrique $\frac{1}{1+t} = \sum (-1)^n t^n$ de $0$ à $x$ : $\ln(1+x) = x - \frac{x^2}{2} + \frac{x^3}{3} - \cdots = \sum_{n\geq1} \frac{(-1)^{n+1}}{n}x^n$.`,
      steps: [
        String.raw`Rappel : on peut <b>intégrer terme à terme</b> une série entière sur $]-R, R[$. Et $\ln(1+x) = \int_0^x \frac{\mathrm{d}t}{1+t}$.`,
        String.raw`Série géométrique de raison $-t$ : $\frac{1}{1+t} = 1 - t + t^2 - t^3 + \dots = \sum_{n\geq0} (-1)^n t^n$ pour $|t| \lt 1$.`,
        String.raw`On intègre chaque $t^n$ : $\int_0^x t^n\,\mathrm{d}t = \frac{x^{n+1}}{n+1}$, d'où $\ln(1+x) = x - \frac{x^2}{2} + \frac{x^3}{3} - \cdots$.`,
        String.raw`En renumérotant ($n+1 \to n$) : $\ln(1+x) = \sum_{n\geq1} \frac{(-1)^{n+1}}{n} x^n$.`
      ],
      why: { 1: String.raw`On a oublié l'alternance des signes : $\sum \frac{x^n}{n} = -\ln(1-x)$.`,
        2: String.raw`On a mis $n!$ au lieu de $n$ : c'est la série de $\mathrm{e}^{-x}$.`,
        3: String.raw`On a mis des factorielles : cette série vaut $1 - \mathrm{e}^{-x}$, pas $\ln(1+x)$.` },
      rule: String.raw`$\ln(1+x) = x - \frac{x^2}{2} + \frac{x^3}{3} - \cdots$ pour $|x| \lt 1$` },
    { id: 'm9-q-031', level: 2, topic: 'Développement de sin', sec: 'm9-s-entieres',
      q: String.raw`Coefficient de $x^5$ dans le développement en série entière de $\sin x$ ?`,
      choices: [String.raw`$\frac15$`, String.raw`$-\frac{1}{120}$`, String.raw`$\frac{1}{120}$`, String.raw`$\frac{1}{24}$`], answer: 2,
      explain: String.raw`$\sin x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \cdots$ : le terme en $x^5$ est $+\frac{x^5}{120}$, donc le coefficient vaut $\frac{1}{120}$.`,
      steps: [
        String.raw`Rappel : $\sin x = \sum_{n\geq0} \frac{(-1)^n x^{2n+1}}{(2n+1)!}$ : uniquement des puissances <b>impaires</b>, divisées par la factorielle de la puissance, avec des signes alternés.`,
        String.raw`Le terme en $x^5$ correspond à $2n + 1 = 5$, soit $n = 2$ ; son signe est $(-1)^2 = +1$.`,
        String.raw`Coefficient : $\frac{1}{5!}$ avec $5! = 1 \times 2 \times 3 \times 4 \times 5 = 120$, donc $\frac{1}{120}$.`
      ],
      why: { 0: String.raw`On a divisé par $5$ au lieu de $5! = 120$ (confusion avec la série de $\ln$ ou d'$\arctan$).`,
        1: String.raw`Erreur de signe : la séquence est $+x$, $-\frac{x^3}{6}$, $+\frac{x^5}{120}$ ; le terme en $x^5$ est positif.`,
        3: String.raw`$\frac{1}{24} = \frac{1}{4!}$ est le coefficient de $x^4$ dans $\cos x$ ; on a confondu sinus et cosinus.` },
      rule: String.raw`$\sin x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \cdots$` },
    { id: 'm9-q-032', level: 3, topic: 'Séries entières usuelles', sec: 'm9-s-entieres',
      q: String.raw`$\sum_{n=0}^{+\infty} \dfrac{(-1)^n x^{2n}}{(2n)!}$ est égal à :`,
      choices: [String.raw`$\sin x$`, String.raw`$\operatorname{ch} x$`, String.raw`$\mathrm{e}^{-x^2}$`, String.raw`$\cos x$`], answer: 3,
      explain: String.raw`Les termes sont $1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \cdots$ : puissances paires, factorielle de la puissance, signes alternés. On reconnaît $\cos x$.`,
      steps: [
        String.raw`Rappel : $\cos x = \sum_{n\geq0} \frac{(-1)^n x^{2n}}{(2n)!}$ (puissances paires, signes alternés) et $\operatorname{ch} x = \sum \frac{x^{2n}}{(2n)!}$ (mêmes termes, sans alternance).`,
        String.raw`On écrit les premiers termes : $n = 0$ donne $1$, $n = 1$ donne $-\frac{x^2}{2}$, $n = 2$ donne $+\frac{x^4}{24}$.`,
        String.raw`On reconnaît $1 - \frac{x^2}{2} + \frac{x^4}{24} - \cdots = \cos x$.`
      ],
      why: { 0: String.raw`On a oublié que $\sin$ ne contient que des puissances <b>impaires</b> ; ici on a $x^{2n}$.`,
        1: String.raw`On a négligé le $(-1)^n$ : $\operatorname{ch} x$ a les mêmes termes mais tous positifs.`,
        2: String.raw`On a confondu $(2n)!$ et $n!$ : $\mathrm{e}^{-x^2} = \sum \frac{(-1)^n x^{2n}}{n!}$.` },
      rule: String.raw`$\cos x = \sum \frac{(-1)^n x^{2n}}{(2n)!}$, $\operatorname{ch} x = \sum \frac{x^{2n}}{(2n)!}$` },
    { id: 'm9-q-033', level: 3, topic: 'Convergence au bord', sec: 'm9-s-entieres',
      q: String.raw`Une série entière $\sum a_n x^n$ a pour rayon $R = 2$. En $x = 2$ :`,
      choices: [String.raw`elle converge`, String.raw`elle diverge`, String.raw`on ne peut rien dire en général`], answer: 2,
      explain: String.raw`Le rayon $R$ ne dit rien sur le cercle $|x| = R$ : il faut étudier la série numérique obtenue. Ex. $\sum \frac{x^n}{n 2^n}$ ($R = 2$) diverge en $2$ mais converge en $-2$.`,
      steps: [
        String.raw`Rappel : le rayon $R$ garantit la convergence (absolue) pour $|x| \lt R$ et la divergence pour $|x| > R$. Pour $|x| = R$, <b>tout est possible</b>.`,
        String.raw`Exemple 1 : $\sum \frac{x^n}{2^n}$ ($R = 2$) donne en $x = 2$ la série $\sum 1$, qui diverge.`,
        String.raw`Exemple 2 : $\sum \frac{x^n}{n^2 2^n}$ ($R = 2$) donne en $x = 2$ la série $\sum \frac{1}{n^2}$, qui converge.`,
        String.raw`Conclusion : on ne peut rien dire en général ; on étudie la série numérique au cas par cas.`
      ],
      why: { 0: String.raw`On a étendu à tort la convergence au bord : $\sum \frac{x^n}{2^n}$ ($R = 2$) diverge grossièrement en $x = 2$.`,
        1: String.raw`On a étendu à tort la divergence au bord : $\sum \frac{x^n}{n^2 2^n}$ ($R = 2$) converge en $x = 2$.` },
      rule: String.raw`$|x| \lt R$ : convergence absolue ; $|x| > R$ : divergence ; $|x| = R$ : étude au cas par cas` }
  ],

  /* ======================================================================
     EXERCICES « TAPE LA FORMULE »
     ====================================================================== */
  exercises: [
    { id: 'm9-x-001', level: 1, topic: 'Suite arithmétique', sec: 'm9-s-arith-geo',
      prompt: String.raw`$(u_n)$ est arithmétique de premier terme $u_0 = 3$ et de raison $r = 4$. Donne $u_n$ en fonction de $n$.`,
      answer: '3+4*n', vars: ['n'], check: 'expr', domain: [1, 9],
      mistakes: [
        { expr: '3+4*(n-1)', msg: String.raw`La suite commence à $u_0$ : $u_n = u_0 + nr$. Le décalage $n-1$ ne sert que si l'on part de $u_1$.` },
        { expr: '3*4^n', msg: String.raw`C'est la formule d'une suite <b>géométrique</b>. Ici on ajoute $4$ à chaque pas.` },
        { expr: '4+3*n', msg: String.raw`Tu as inversé premier terme et raison : le premier terme est $u_0 = 3$ et on ajoute $r = 4$ à chaque pas, donc $3 + 4n$.` }
      ],
      hint: String.raw`$u_n = u_0 + n\,r$.`,
      explain: String.raw`$u_n = u_0 + nr = 3 + 4n$. Vérification : $u_1 = 7 = 3 + 4$.`,
      steps: [
        String.raw`Rappel : une suite <b>arithmétique</b> avance en ajoutant toujours la même raison $r$ : $u_{n+1} = u_n + r$. Après $n$ pas depuis $u_0$, on a ajouté $n$ fois $r$ : $u_n = u_0 + n\,r$.`,
        String.raw`On identifie les données : $u_0 = 3$ et $r = 4$ (on ajoute $4$ à chaque pas).`,
        String.raw`On remplace dans la formule : $u_n = 3 + 4n$.`,
        String.raw`Vérification : $u_1 = 3 + 4 = 7$ et $u_2 = 7 + 4 = 11 = 3 + 4 \times 2$ ✔.`
      ],
      rule: String.raw`$u_n = u_0 + nr$ (départ en $u_0$) ; $u_n = u_1 + (n-1)r$ (départ en $u_1$)`,
      pitfall: String.raw`Utiliser $n - 1$ alors que la suite commence à $u_0$ : teste toujours ta formule en $n = 0$.` },
    { id: 'm9-x-002', level: 1, topic: 'Suite géométrique', sec: 'm9-s-arith-geo',
      prompt: String.raw`$(u_n)$ est géométrique avec $u_0 = 2$ et de raison $q = 3$. Donne $u_n$ en fonction de $n$.`,
      answer: '2*3^n', vars: ['n'], check: 'expr', domain: [1, 9],
      mistakes: [
        { expr: '6^n', msg: String.raw`$2 \times 3^n \neq 6^n$ : la puissance ne porte que sur la raison.` },
        { expr: '2*3^(n-1)', msg: String.raw`La suite commence à $u_0$ : $u_n = u_0\,q^n$ (l'exposant $n-1$ correspond à un départ en $u_1$).` },
        { expr: '2+3*n', msg: String.raw`C'est la formule arithmétique ; ici on multiplie par $3$ à chaque pas.` }
      ],
      hint: String.raw`$u_n = u_0\,q^n$.`,
      explain: String.raw`$u_n = u_0 q^n = 2 \times 3^n$. Vérification : $u_1 = 6$, $u_2 = 18$.`,
      steps: [
        String.raw`Rappel : une suite <b>géométrique</b> avance en multipliant toujours par la même raison $q$ : $u_{n+1} = q\,u_n$. Après $n$ pas depuis $u_0$, on a multiplié $n$ fois par $q$ : $u_n = u_0\,q^n$.`,
        String.raw`On identifie les données : $u_0 = 2$ et $q = 3$.`,
        String.raw`On remplace : $u_n = 2 \times 3^n$ (la puissance porte seulement sur la raison $3$, pas sur le produit $2 \times 3$).`,
        String.raw`Vérification : $u_1 = 2 \times 3 = 6$, $u_2 = 6 \times 3 = 18 = 2 \times 3^2$ ✔.`
      ],
      rule: String.raw`$u_n = u_0\,q^n$, et plus généralement $u_n = u_p\,q^{n-p}$`,
      pitfall: String.raw`Écrire $(2 \times 3)^n = 6^n$ : la puissance ne s'applique qu'à la raison.` },
    { id: 'm9-x-003', level: 1, topic: 'Suite géométrique', sec: 'm9-s-arith-geo',
      prompt: String.raw`$(u_n)_{n \geq 1}$ est géométrique avec $u_1 = 5$ et de raison $q = \frac12$. Donne $u_n$ en fonction de $n$.`,
      answer: '5*(1/2)^(n-1)', vars: ['n'], check: 'expr', domain: [1, 9],
      mistakes: [
        { expr: '5*(1/2)^n', msg: String.raw`Le premier terme est $u_1$ : $u_n = u_1\,q^{n-1}$ (vérifie avec $n = 1$ : on doit retrouver $5$).` },
        { expr: '5-(n-1)/2', msg: String.raw`C'est une suite géométrique : on multiplie par $\frac12$, on ne retranche pas $\frac12$.` }
      ],
      hint: String.raw`$u_n = u_p\,q^{n-p}$ avec $p = 1$.`,
      explain: String.raw`$u_n = u_1 q^{n-1} = 5\left(\frac12\right)^{n-1} = \frac{10}{2^n}$.`,
      steps: [
        String.raw`Rappel : pour une suite géométrique de raison $q$, on passe d'un terme connu $u_p$ à $u_n$ en multipliant $n - p$ fois par $q$ : $u_n = u_p\,q^{n-p}$ (l'exposant compte le nombre de pas).`,
        String.raw`Ici le premier terme connu est $u_1 = 5$ (et non $u_0$), avec $q = \frac12$ : on prend $p = 1$, donc $u_n = u_1\,q^{n-1}$.`,
        String.raw`On remplace : $u_n = 5\left(\frac12\right)^{n-1}$, qu'on peut aussi écrire $\frac{5 \times 2}{2^n} = \frac{10}{2^n}$.`,
        String.raw`Vérification : $n = 1$ donne $5 \times \left(\frac12\right)^0 = 5 = u_1$ ✔ ; $n = 2$ donne $\frac52$, soit bien $5 \times \frac12$ ✔.`
      ],
      rule: String.raw`$u_n = u_p\,q^{n-p}$ : l'exposant est le nombre de pas depuis le terme connu`,
      pitfall: String.raw`Écrire $q^n$ alors que le premier terme est $u_1$ : vérifie en $n = 1$ que tu retrouves $u_1$.` },
    { id: 'm9-x-004', level: 1, topic: 'Somme arithmétique', sec: 'm9-s-arith-geo',
      prompt: String.raw`Calcule $S = 1 + 3 + 5 + \dots + 99$ (somme des nombres impairs de $1$ à $99$).`,
      answer: '2500', vars: [], check: 'value',
      mistakes: [
        { expr: '4950', msg: String.raw`Il n'y a pas $99$ termes : les impairs de $1$ à $99$ sont $\frac{99-1}{2} + 1 = 50$.` },
        { expr: '2450', msg: String.raw`Tu as compté $49$ termes : il y en a $\frac{99 - 1}{2} + 1 = 50$.` }
      ],
      hint: String.raw`Suite arithmétique de raison $2$ : nombre de termes $\times \frac{\text{premier} + \text{dernier}}{2}$.`,
      explain: String.raw`$50$ termes, donc $S = 50 \times \frac{1 + 99}{2} = 50 \times 50 = 2500$. (Plus généralement, la somme des $n$ premiers impairs vaut $n^2$.)`,
      steps: [
        String.raw`Rappel : la somme de termes consécutifs d'une suite <b>arithmétique</b> vaut $\text{(nombre de termes)} \times \dfrac{\text{premier} + \text{dernier}}{2}$ (nombre de termes fois la moyenne).`,
        String.raw`Les impairs $1, 3, 5, \dots, 99$ forment une suite arithmétique de raison $2$. Nombre de termes : $\frac{\text{dernier} - \text{premier}}{\text{raison}} + 1 = \frac{99 - 1}{2} + 1 = 49 + 1 = 50$.`,
        String.raw`On applique la formule : $S = 50 \times \frac{1 + 99}{2} = 50 \times 50$.`,
        String.raw`Résultat : $S = 2500$.`,
        String.raw`Vérification : la somme des $n$ premiers impairs vaut $n^2$ ($1 = 1^2$, $1 + 3 = 2^2$, $1 + 3 + 5 = 3^2$…), ici $50^2 = 2500$ ✔.`
      ],
      rule: String.raw`Somme arithmétique $= \text{nb de termes} \times \frac{\text{premier} + \text{dernier}}{2}$`,
      pitfall: String.raw`Se tromper dans le nombre de termes : de $1$ à $99$ de $2$ en $2$, il y en a $50$ (ni $49$, ni $99$).` },
    { id: 'm9-x-005', level: 1, topic: 'Somme géométrique finie', sec: 'm9-s-arith-geo',
      prompt: String.raw`Calcule $\sum_{k=0}^{10} 2^k = 1 + 2 + 4 + \dots + 2^{10}$.`,
      answer: '2047', vars: [], check: 'value',
      mistakes: [
        { expr: '1023', msg: String.raw`De $k = 0$ à $k = 10$ il y a $11$ termes : $\frac{1 - 2^{11}}{1 - 2}$.` },
        { expr: '2048', msg: String.raw`Presque : $\frac{2^{11} - 1}{2 - 1} = 2^{11} - 1$, n'oublie pas le $-1$.` }
      ],
      hint: String.raw`$\sum_{k=0}^{n} q^k = \frac{1 - q^{n+1}}{1-q}$.`,
      explain: String.raw`$\sum_{k=0}^{10} 2^k = \frac{1 - 2^{11}}{1 - 2} = 2^{11} - 1 = 2047$.`,
      steps: [
        String.raw`Rappel : pour une suite géométrique de raison $q \neq 1$, $\sum_{k=0}^{n} q^k = \frac{1 - q^{n+1}}{1 - q}$ (premier terme $1$, et $n + 1$ termes).`,
        String.raw`Ici $q = 2$ et $k$ va de $0$ à $10$ : il y a $11$ termes, donc l'exposant est $11$.`,
        String.raw`On remplace : $\sum_{k=0}^{10} 2^k = \frac{1 - 2^{11}}{1 - 2} = \frac{1 - 2048}{-1}$.`,
        String.raw`Calcul : $\frac{-2047}{-1} = 2047$, c'est-à-dire $2^{11} - 1$.`,
        String.raw`Vérification sur un petit cas : $1 + 2 + 4 = 7 = 2^3 - 1$ ✔.`
      ],
      rule: String.raw`$\sum_{k=0}^{n} q^k = \frac{1 - q^{n+1}}{1 - q} = \frac{q^{n+1} - 1}{q - 1}$`,
      pitfall: String.raw`Oublier que $k = 0$ compte : il y a $n + 1$ termes, d'où l'exposant $n + 1$.` },
    { id: 'm9-x-006', level: 2, topic: 'Somme géométrique finie', sec: 'm9-s-arith-geo',
      prompt: String.raw`Exprime $S_n = \sum_{k=0}^{n} 3^k$ en fonction de $n$.`,
      answer: '(3^(n+1)-1)/2', vars: ['n'], check: 'expr', domain: [1, 9],
      mistakes: [
        { expr: '(3^n-1)/2', msg: String.raw`Il y a $n+1$ termes (de $k = 0$ à $n$), donc l'exposant est $n+1$.` },
        { expr: '(1-3^(n+1))/2', msg: String.raw`Erreur de signe : $\frac{1 - 3^{n+1}}{1 - 3} = \frac{3^{n+1} - 1}{2}$.` }
      ],
      hint: String.raw`Somme géométrique de raison $3$, premier terme $1$, $n+1$ termes.`,
      explain: String.raw`$S_n = \frac{1 - 3^{n+1}}{1 - 3} = \frac{3^{n+1} - 1}{2}$. Vérification $n = 1$ : $1 + 3 = 4 = \frac{9 - 1}{2}$.`,
      steps: [
        String.raw`Rappel : $\sum_{k=0}^{n} q^k = \frac{1 - q^{n+1}}{1 - q}$ pour $q \neq 1$ : premier terme $1$, et $n + 1$ termes (de $k = 0$ à $k = n$).`,
        String.raw`Ici $q = 3$ : $S_n = \frac{1 - 3^{n+1}}{1 - 3} = \frac{1 - 3^{n+1}}{-2}$.`,
        String.raw`On multiplie numérateur et dénominateur par $-1$ pour une écriture plus propre : $S_n = \frac{3^{n+1} - 1}{2}$.`,
        String.raw`Vérification : $n = 1$ : $1 + 3 = 4$ et $\frac{9 - 1}{2} = 4$ ✔ ; $n = 2$ : $1 + 3 + 9 = 13 = \frac{27 - 1}{2}$ ✔.`
      ],
      rule: String.raw`$\sum_{k=0}^{n} q^k = \frac{q^{n+1} - 1}{q - 1}$ (forme pratique quand $q > 1$)`,
      pitfall: String.raw`Le dénominateur $1 - 3 = -2$ est négatif : ne garde pas $1 - 3^{n+1}$ en haut avec $+2$ en bas.` },
    { id: 'm9-x-007', level: 2, topic: 'Somme géométrique finie', sec: 'm9-s-arith-geo',
      prompt: String.raw`Exprime $S_n = \sum_{k=0}^{n-1} \left(\frac12\right)^k$ en fonction de $n$.`,
      answer: '2-2*(1/2)^n', vars: ['n'], check: 'expr', domain: [1, 9],
      mistakes: [
        { expr: '2-(1/2)^n', msg: String.raw`Tu as sommé jusqu'à $k = n$ : ici il n'y a que $n$ termes (de $0$ à $n-1$).` },
        { expr: '1-(1/2)^n', msg: String.raw`Tu as oublié de diviser par $1 - q = \frac12$.` }
      ],
      hint: String.raw`$n$ termes, premier terme $1$ : $\frac{1 - q^n}{1 - q}$.`,
      explain: String.raw`$S_n = \frac{1 - (1/2)^n}{1 - 1/2} = 2\left(1 - \frac{1}{2^n}\right) = 2 - \frac{2}{2^n}$. Elle tend vers $2$.`,
      steps: [
        String.raw`Rappel : la somme de termes consécutifs d'une suite géométrique vaut $\text{premier terme} \times \frac{1 - q^{\text{nombre de termes}}}{1 - q}$.`,
        String.raw`Ici $q = \frac12$, premier terme $\left(\frac12\right)^0 = 1$, et $k$ va de $0$ à $n - 1$ : il y a exactement $n$ termes.`,
        String.raw`Donc $S_n = \frac{1 - (1/2)^n}{1 - 1/2} = \frac{1 - (1/2)^n}{1/2}$, et diviser par $\frac12$ revient à multiplier par $2$ : $S_n = 2 - 2\left(\frac12\right)^n$.`,
        String.raw`Vérification : $n = 1$ (un seul terme, $1$) donne $2 - 1 = 1$ ✔ ; $n = 2$ : $1 + \frac12 = \frac32 = 2 - \frac12$ ✔. Et $S_n \to 2$.`
      ],
      rule: String.raw`$\sum_{k=0}^{n-1} q^k = \frac{1 - q^{n}}{1 - q}$ : l'exposant est le nombre de termes`,
      pitfall: String.raw`Compter $n + 1$ termes alors que la somme s'arrête à $n - 1$.` },
    { id: 'm9-x-008', level: 2, topic: 'Sommes usuelles', sec: 'm9-s-sommes',
      prompt: String.raw`Exprime $\sum_{k=1}^{n} (2k + 1)$ en fonction de $n$.`,
      answer: 'n^2+2*n', vars: ['n'], check: 'expr', domain: [1, 9],
      mistakes: [
        { expr: 'n^2+n+1', msg: String.raw`$\sum_{k=1}^{n} 1 = n$, pas $1$.` },
        { expr: '(n+1)^2', msg: String.raw`$(n+1)^2$ correspond à une somme à partir de $k = 0$ ; ici on commence à $k = 1$.` }
      ],
      hint: String.raw`Linéarité : $2\sum k + \sum 1$.`,
      explain: String.raw`$\sum_{k=1}^{n}(2k+1) = 2 \cdot \frac{n(n+1)}{2} + n = n^2 + n + n = n^2 + 2n$.`,
      steps: [
        String.raw`Rappel : le symbole $\sum$ est <b>linéaire</b> : $\sum (a\,u_k + b\,v_k) = a\sum u_k + b\sum v_k$. Et $\sum_{k=1}^{n} k = \frac{n(n+1)}{2}$, $\sum_{k=1}^{n} 1 = n$.`,
        String.raw`On découpe : $\sum_{k=1}^{n} (2k + 1) = 2\sum_{k=1}^{n} k + \sum_{k=1}^{n} 1$.`,
        String.raw`Premier morceau : $2 \times \frac{n(n+1)}{2} = n(n+1) = n^2 + n$. Second : on ajoute $n$ fois le nombre $1$, soit $n$.`,
        String.raw`Total : $n^2 + n + n = n^2 + 2n$.`,
        String.raw`Vérification $n = 2$ : $(2 + 1) + (4 + 1) = 3 + 5 = 8$ et $4 + 4 = 8$ ✔.`
      ],
      rule: String.raw`$\sum_{k=1}^{n} k = \frac{n(n+1)}{2}$ et $\sum_{k=1}^{n} 1 = n$ (pas $1$ !)`,
      pitfall: String.raw`Écrire $\sum_{k=1}^{n} 1 = 1$ : on ajoute $n$ fois le nombre $1$.` },
    { id: 'm9-x-009', level: 2, topic: 'Sommes usuelles', sec: 'm9-s-sommes',
      prompt: String.raw`Exprime $\sum_{k=1}^{n} k(k+1)$ en fonction de $n$ (forme factorisée conseillée).`,
      answer: 'n*(n+1)*(n+2)/3', vars: ['n'], check: 'expr', domain: [1, 9],
      mistakes: [
        { expr: 'n*(n+1)*(2*n+1)/6', msg: String.raw`C'est seulement $\sum k^2$ : il faut ajouter $\sum k = \frac{n(n+1)}{2}$.` },
        { expr: 'n*(n+1)/2*(n+1)*(n+2)/2', msg: String.raw`$\sum k(k+1) \neq \left(\sum k\right)\left(\sum (k+1)\right)$ : la somme d'un produit n'est pas le produit des sommes.` }
      ],
      hint: String.raw`$k(k+1) = k^2 + k$, puis sommes usuelles.`,
      explain: String.raw`$\sum k^2 + \sum k = \frac{n(n+1)(2n+1)}{6} + \frac{n(n+1)}{2} = \frac{n(n+1)}{6}(2n + 1 + 3) = \frac{n(n+1)(n+2)}{3}$.`,
      steps: [
        String.raw`Rappel : $\sum_{k=1}^{n} k = \frac{n(n+1)}{2}$ et $\sum_{k=1}^{n} k^2 = \frac{n(n+1)(2n+1)}{6}$ ; pour sommer un polynôme en $k$, on le développe puis on utilise la linéarité.`,
        String.raw`On développe : $k(k+1) = k^2 + k$, donc $\sum k(k+1) = \sum k^2 + \sum k = \frac{n(n+1)(2n+1)}{6} + \frac{n(n+1)}{2}$.`,
        String.raw`Même dénominateur : $\frac{n(n+1)}{2} = \frac{3n(n+1)}{6}$, puis on factorise par $\frac{n(n+1)}{6}$ : $\frac{n(n+1)}{6}\left[(2n + 1) + 3\right] = \frac{n(n+1)(2n+4)}{6}$.`,
        String.raw`On simplifie $2n + 4 = 2(n+2)$ : $\frac{2n(n+1)(n+2)}{6} = \frac{n(n+1)(n+2)}{3}$.`,
        String.raw`Vérification $n = 2$ : $1 \times 2 + 2 \times 3 = 8$ et $\frac{2 \times 3 \times 4}{3} = 8$ ✔.`
      ],
      rule: String.raw`$\sum k^2 = \frac{n(n+1)(2n+1)}{6}$ ; la somme d'un produit n'est pas le produit des sommes`,
      pitfall: String.raw`Écrire $\sum k(k+1) = \left(\sum k\right)\left(\sum (k+1)\right)$ : faux, on développe d'abord.` },
    { id: 'm9-x-010', level: 2, topic: 'Somme télescopique', sec: 'm9-s-sommes',
      prompt: String.raw`Exprime $\sum_{k=1}^{n} \dfrac{1}{k(k+1)}$ en fonction de $n$.`,
      answer: 'n/(n+1)', vars: ['n'], check: 'expr', domain: [1, 9],
      mistakes: [
        { expr: '1-1/n', msg: String.raw`Le dernier terme qui reste est $-\frac{1}{n+1}$ (pour $k = n$ : $\frac1n - \frac{1}{n+1}$).` },
        { expr: '1/(n+1)', msg: String.raw`Il reste le premier terme $1$ et le dernier $-\frac{1}{n+1}$ : $1 - \frac{1}{n+1}$.` }
      ],
      hint: String.raw`$\frac{1}{k(k+1)} = \frac1k - \frac{1}{k+1}$ : télescopage.`,
      explain: String.raw`$\sum_{k=1}^{n} \left(\frac1k - \frac{1}{k+1}\right) = 1 - \frac{1}{n+1} = \frac{n}{n+1}$.`,
      steps: [
        String.raw`Rappel : une somme est <b>télescopique</b> si chaque terme s'écrit $a_k - a_{k+1}$ ; alors $\sum_{k=1}^{n} (a_k - a_{k+1}) = a_1 - a_{n+1}$ (tout s'annule sauf le premier et le dernier).`,
        String.raw`Décomposition : $\frac{1}{k(k+1)} = \frac1k - \frac{1}{k+1}$. Vérification : $\frac1k - \frac{1}{k+1} = \frac{(k+1) - k}{k(k+1)} = \frac{1}{k(k+1)}$ ✔.`,
        String.raw`On écrit la somme : $\left(1 - \frac12\right) + \left(\frac12 - \frac13\right) + \dots + \left(\frac1n - \frac{1}{n+1}\right)$ ; les termes intermédiaires s'annulent deux à deux.`,
        String.raw`Il reste $1 - \frac{1}{n+1} = \frac{(n+1) - 1}{n+1} = \frac{n}{n+1}$.`,
        String.raw`Vérification $n = 1$ : $\frac{1}{1 \times 2} = \frac12$ et $\frac{1}{1+1} = \frac12$ ✔.`
      ],
      rule: String.raw`$\frac{1}{k(k+1)} = \frac1k - \frac{1}{k+1}$ et $\sum_{k=1}^{n} (a_k - a_{k+1}) = a_1 - a_{n+1}$`,
      pitfall: String.raw`Mal repérer le dernier terme qui reste : c'est $-\frac{1}{n+1}$ (obtenu pour $k = n$).` },
    { id: 'm9-x-011', level: 2, topic: 'Somme télescopique', sec: 'm9-s-sommes',
      prompt: String.raw`Exprime $\sum_{k=1}^{n} \ln\left(1 + \frac1k\right)$ en fonction de $n$.`,
      answer: 'ln(n+1)', vars: ['n'], check: 'expr', domain: [1, 9],
      mistakes: [
        { expr: 'ln(n)', msg: String.raw`Le dernier terme est $\ln(n+1) - \ln n$ : il reste $\ln(n+1) - \ln 1$.` },
        { expr: 'ln(1+1/n)', msg: String.raw`Ce n'est que le dernier terme de la somme. Écris chaque terme comme $\ln(k+1) - \ln k$ pour faire apparaître le télescopage.` },
        { expr: 'ln(n+1)-ln(2)', msg: String.raw`Le télescopage laisse $\ln(n+1) - \ln 1$ : le terme qui reste au début est $\ln 1 = 0$ (pour $k = 1$), pas $\ln 2$.` }
      ],
      hint: String.raw`$\ln\left(1 + \frac1k\right) = \ln\frac{k+1}{k} = \ln(k+1) - \ln k$.`,
      explain: String.raw`Télescopage : $\sum_{k=1}^{n} (\ln(k+1) - \ln k) = \ln(n+1) - \ln 1 = \ln(n+1)$. En particulier $\sum \ln(1 + \frac1n)$ diverge.`,
      steps: [
        String.raw`Rappel : une somme de différences $\sum_{k=1}^{n} (a_{k+1} - a_k)$ est <b>télescopique</b> et vaut $a_{n+1} - a_1$. Et pour le logarithme : $\ln\frac{a}{b} = \ln a - \ln b$.`,
        String.raw`On transforme le terme : $1 + \frac1k = \frac{k+1}{k}$, donc $\ln\left(1 + \frac1k\right) = \ln\frac{k+1}{k} = \ln(k+1) - \ln k$.`,
        String.raw`On écrit la somme : $(\ln 2 - \ln 1) + (\ln 3 - \ln 2) + \dots + (\ln(n+1) - \ln n)$ ; tout se simplifie sauf $\ln(n+1)$ et $-\ln 1$.`,
        String.raw`Comme $\ln 1 = 0$, la somme vaut $\ln(n+1)$.`,
        String.raw`Vérification $n = 1$ : $\ln(1 + 1) = \ln 2$ ✔. Conséquence : $\ln(n+1) \to +\infty$, donc la série $\sum \ln\left(1 + \frac1n\right)$ diverge.`
      ],
      rule: String.raw`$\ln\frac{a}{b} = \ln a - \ln b$ ; $\sum_{k=1}^{n} (a_{k+1} - a_k) = a_{n+1} - a_1$`,
      pitfall: String.raw`Oublier que le premier terme restant est $-\ln 1 = 0$ et le dernier $\ln(n+1)$ (pas $\ln n$).` },
    { id: 'm9-x-012', level: 2, topic: 'Suite définie par récurrence', sec: 'm9-s-sommes',
      prompt: String.raw`$u_0 = 0$ et $u_{n+1} = u_n + 2n + 1$. Donne $u_n$ en fonction de $n$.`,
      answer: 'n^2', vars: ['n'], check: 'expr', domain: [1, 9],
      mistakes: [
        { expr: '(n+1)^2', msg: String.raw`C'est $u_{n+1}$. Vérifie : $u_1 = 0 + 1 = 1$, $u_2 = 1 + 3 = 4$.` },
        { expr: 'n^2+2*n', msg: String.raw`$u_n = \sum_{k=0}^{n-1}(2k+1)$ : la somme va jusqu'à $n - 1$.` }
      ],
      hint: String.raw`$u_n = u_0 + \sum_{k=0}^{n-1} (u_{k+1} - u_k)$ (télescopage).`,
      explain: String.raw`$u_n = \sum_{k=0}^{n-1} (2k+1) = 2\cdot\frac{(n-1)n}{2} + n = n^2$.`,
      steps: [
        String.raw`Rappel : si l'on connaît les écarts $u_{k+1} - u_k$, on retrouve $u_n$ en les additionnant (télescopage) : $u_n = u_0 + \sum_{k=0}^{n-1} (u_{k+1} - u_k)$.`,
        String.raw`Ici $u_{k+1} - u_k = 2k + 1$ et $u_0 = 0$, donc $u_n = \sum_{k=0}^{n-1} (2k + 1)$ : l'indice s'arrête à $n - 1$ ($n$ termes).`,
        String.raw`Linéarité : $2\sum_{k=0}^{n-1} k + \sum_{k=0}^{n-1} 1 = 2 \times \frac{(n-1)n}{2} + n$.`,
        String.raw`On simplifie : $n^2 - n + n = n^2$.`,
        String.raw`Vérification : $u_1 = 0 + 1 = 1$, $u_2 = 1 + 3 = 4$, $u_3 = 4 + 5 = 9$ ✔.`
      ],
      rule: String.raw`$u_n = u_0 + \sum_{k=0}^{n-1} (u_{k+1} - u_k)$ et $\sum_{k=0}^{n-1} k = \frac{n(n-1)}{2}$`,
      pitfall: String.raw`Sommer jusqu'à $n$ au lieu de $n - 1$ : on obtient alors $u_{n+1}$.` },
    { id: 'm9-x-013', level: 1, topic: 'Point fixe', sec: 'm9-s-recurrentes',
      prompt: String.raw`Quel est le point fixe $\ell$ de la suite $u_{n+1} = \frac12 u_n + 4$ ?`,
      answer: '8', vars: [], check: 'value',
      mistakes: [
        { expr: '8/3', msg: String.raw`$\ell = \frac{b}{1-a}$, pas $\frac{b}{1+a}$ : résous $\ell = \frac12\ell + 4$.` },
        { expr: '4', msg: String.raw`$4$ est la constante $b$ ; le point fixe vérifie $\ell = \frac12\ell + 4$.` }
      ],
      hint: String.raw`Résous $\ell = \frac12 \ell + 4$.`,
      explain: String.raw`$\ell - \frac12\ell = 4 \iff \ell = 8$ (ou $\ell = \frac{b}{1-a} = \frac{4}{1/2}$).`,
      steps: [
        String.raw`Rappel : le <b>point fixe</b> de $u_{n+1} = a u_n + b$ est le nombre $\ell$ qui ne bouge pas quand on applique la relation : $\ell = a\ell + b$. C'est la seule limite possible.`,
        String.raw`On écrit l'équation : $\ell = \frac12\ell + 4$.`,
        String.raw`On regroupe les $\ell$ : $\ell - \frac12\ell = 4$, soit $\frac12\ell = 4$, donc $\ell = 4 \times 2 = 8$.`,
        String.raw`Vérification : $\frac12 \times 8 + 4 = 4 + 4 = 8$ ✔ (formule $\ell = \frac{b}{1-a} = \frac{4}{1/2} = 8$).`
      ],
      rule: String.raw`Point fixe de $u_{n+1} = au_n + b$ : $\ell = \frac{b}{1-a}$ ($a \neq 1$)`,
      pitfall: String.raw`Erreur de signe en regroupant : on obtient $(1 - a)\ell = b$, pas $(1 + a)\ell = b$.` },
    { id: 'm9-x-014', level: 2, topic: 'Suite arithmético-géométrique', sec: 'm9-s-recurrentes',
      prompt: String.raw`$u_0 = 0$ et $u_{n+1} = \frac12 u_n + 4$. Donne $u_n$ en fonction de $n$.`,
      answer: '8-8*(1/2)^n', vars: ['n'], check: 'expr', domain: [1, 9],
      mistakes: [
        { expr: '8+8*(1/2)^n', msg: String.raw`Signe : $v_0 = u_0 - \ell = 0 - 8 = -8$.` },
        { expr: '-8*(1/2)^n', msg: String.raw`C'est $v_n = u_n - \ell$ ; il faut rajouter $\ell = 8$.` }
      ],
      hint: String.raw`Point fixe $\ell = 8$, puis $v_n = u_n - 8$ est géométrique de raison $\frac12$.`,
      explain: String.raw`$v_n = v_0 \left(\frac12\right)^n$ avec $v_0 = -8$, donc $u_n = 8 - 8\left(\frac12\right)^n = 8 - \frac{8}{2^n} \to 8$.`,
      steps: [
        String.raw`Rappel : pour $u_{n+1} = a u_n + b$ ($a \neq 1$), on cherche le point fixe $\ell$, puis $v_n = u_n - \ell$ est <b>géométrique de raison $a$</b>, d'où $u_n = \ell + a^n(u_0 - \ell)$.`,
        String.raw`Point fixe : $\ell = \frac12\ell + 4 \iff \frac12\ell = 4 \iff \ell = 8$.`,
        String.raw`On pose $v_n = u_n - 8$ : $v_{n+1} = \frac12 u_n + 4 - 8 = \frac12(u_n - 8) = \frac12 v_n$. Premier terme : $v_0 = 0 - 8 = -8$, donc $v_n = -8\left(\frac12\right)^n$.`,
        String.raw`On revient à $u_n$ : $u_n = v_n + 8 = 8 - 8\left(\frac12\right)^n$.`,
        String.raw`Vérification : $u_0 = 8 - 8 = 0$ ✔ ; $u_1 = \frac12 \times 0 + 4 = 4$ et $8 - 4 = 4$ ✔. Limite : $u_n \to 8$.`
      ],
      rule: String.raw`$u_{n+1} = au_n + b$ : $u_n = \ell + a^n(u_0 - \ell)$ avec $\ell = \frac{b}{1-a}$`,
      pitfall: String.raw`Oublier de rajouter $\ell$ à la fin, ou se tromper de signe dans $v_0 = u_0 - \ell$.` },
    { id: 'm9-x-015', level: 2, topic: 'Suite arithmético-géométrique', sec: 'm9-s-recurrentes',
      prompt: String.raw`$u_0 = 2$ et $u_{n+1} = 3u_n - 2$. Donne $u_n$ en fonction de $n$.`,
      answer: '3^n+1', vars: ['n'], check: 'expr', domain: [1, 9],
      mistakes: [
        { expr: '2*3^n', msg: String.raw`Tu as ignoré le $-2$ : la suite n'est pas géométrique, passe par le point fixe.` },
        { expr: '3^(n+1)-1', msg: String.raw`Erreur sur le point fixe : $\ell = 3\ell - 2 \iff \ell = 1$ (et non $-1$).` }
      ],
      hint: String.raw`Point fixe : $\ell = 3\ell - 2$. Puis $u_n = a^n(u_0 - \ell) + \ell$.`,
      explain: String.raw`$\ell = 1$, $v_n = u_n - 1$ géométrique de raison $3$, $v_0 = 1$, donc $u_n = 3^n + 1$. Vérification : $u_1 = 3\cdot2 - 2 = 4 = 3 + 1$.`,
      steps: [
        String.raw`Rappel : $u_{n+1} = a u_n + b$ est <b>arithmético-géométrique</b> ; avec son point fixe $\ell$, la suite $v_n = u_n - \ell$ est géométrique de raison $a$.`,
        String.raw`Ici $a = 3$, $b = -2$. Point fixe : $\ell = 3\ell - 2 \iff -2\ell = -2 \iff \ell = 1$.`,
        String.raw`On pose $v_n = u_n - 1$ : $v_{n+1} = 3u_n - 2 - 1 = 3(u_n - 1) = 3v_n$. Premier terme : $v_0 = 2 - 1 = 1$, donc $v_n = 3^n$.`,
        String.raw`On revient à $u_n$ : $u_n = v_n + 1 = 3^n + 1$.`,
        String.raw`Vérification : $u_0 = 1 + 1 = 2$ ✔ ; $u_1 = 3 \times 2 - 2 = 4 = 3 + 1$ ✔ ; $u_2 = 3 \times 4 - 2 = 10 = 9 + 1$ ✔.`
      ],
      rule: String.raw`$u_n = \ell + a^n(u_0 - \ell)$ avec $\ell = a\ell + b$`,
      pitfall: String.raw`Ignorer la constante $b$ et croire la suite géométrique.` },
    { id: 'm9-x-016', level: 3, topic: 'Suite arithmético-géométrique', sec: 'm9-s-recurrentes',
      prompt: String.raw`$u_0 = 5$ et $u_{n+1} = 2u_n - 3$. Donne $u_n$ en fonction de $n$.`,
      answer: '2^(n+1)+3', vars: ['n'], check: 'expr', domain: [1, 9],
      mistakes: [
        { expr: '5*2^n', msg: String.raw`Le $-3$ empêche la suite d'être géométrique : utilise le point fixe $\ell = 3$.` },
        { expr: '2^n+3', msg: String.raw`$v_0 = u_0 - \ell = 5 - 3 = 2$, pas $1$.` }
      ],
      hint: String.raw`$\ell = \frac{b}{1-a} = \frac{-3}{1-2}$.`,
      explain: String.raw`$\ell = 3$ ; $v_n = u_n - 3$ vérifie $v_{n+1} = 2v_n$, $v_0 = 2$, donc $u_n = 2 \cdot 2^n + 3 = 2^{n+1} + 3$ (la suite diverge car $|a| = 2 > 1$).`,
      steps: [
        String.raw`Rappel : pour $u_{n+1} = a u_n + b$, on soustrait le point fixe $\ell$ ($\ell = a\ell + b$) : $v_n = u_n - \ell$ est géométrique de raison $a$.`,
        String.raw`Point fixe : $\ell = 2\ell - 3 \iff \ell = 3$ (formule $\frac{b}{1-a} = \frac{-3}{1-2} = 3$).`,
        String.raw`On pose $v_n = u_n - 3$ : $v_{n+1} = 2u_n - 3 - 3 = 2(u_n - 3) = 2v_n$. Premier terme : $v_0 = 5 - 3 = 2$, donc $v_n = 2 \times 2^n = 2^{n+1}$.`,
        String.raw`On revient à $u_n$ : $u_n = 2^{n+1} + 3$.`,
        String.raw`Vérification : $u_0 = 2 + 3 = 5$ ✔ ; $u_1 = 2 \times 5 - 3 = 7 = 4 + 3$ ✔. Comme $|a| = 2 > 1$, la suite s'éloigne du point fixe et tend vers $+\infty$.`
      ],
      rule: String.raw`$u_n = \ell + a^n(u_0 - \ell)$ ; converge si $|a| \lt 1$, diverge si $|a| > 1$ (sauf $u_0 = \ell$)`,
      pitfall: String.raw`Prendre $v_0 = 1$ au lieu de $v_0 = u_0 - \ell = 2$.` },
    { id: 'm9-x-017', level: 2, topic: 'Limite d\'une suite récurrente', sec: 'm9-s-recurrentes',
      prompt: String.raw`$u_0 = 0$ et $u_{n+1} = \sqrt{2 + u_n}$. On admet que $(u_n)$ converge (croissante, majorée par $2$). Quelle est sa limite ?`,
      answer: '2', vars: [], check: 'value',
      mistakes: [
        { expr: '-1', msg: String.raw`$-1$ est bien solution de $\ell^2 - \ell - 2 = 0$, mais la suite est positive : $\ell \geq 0$.` },
        { expr: 'sqrt(2)', msg: String.raw`$\sqrt2$ est $u_1$, pas la limite. Résous $\ell = \sqrt{2 + \ell}$.` }
      ],
      hint: String.raw`La limite vérifie $\ell = \sqrt{2 + \ell}$ avec $\ell \geq 0$.`,
      explain: String.raw`$\ell^2 = 2 + \ell \iff \ell^2 - \ell - 2 = 0 \iff (\ell - 2)(\ell + 1) = 0$. Comme $\ell \geq 0$, $\ell = 2$.`,
      steps: [
        String.raw`Rappel : si $u_{n+1} = f(u_n)$ converge vers $\ell$ et $f$ est continue, alors $\ell = f(\ell)$ (on passe à la limite des deux côtés). On trie ensuite les solutions.`,
        String.raw`Ici $f(x) = \sqrt{2 + x}$ : $\ell = \sqrt{2 + \ell}$. Une racine carrée est positive, donc $\ell \geq 0$ ; on élève au carré : $\ell^2 = 2 + \ell$, soit $\ell^2 - \ell - 2 = 0$.`,
        String.raw`Discriminant : $\Delta = 1 + 8 = 9$, donc $\ell = \frac{1 \pm 3}{2}$ : $\ell = 2$ ou $\ell = -1$ (en effet $(\ell - 2)(\ell + 1) = \ell^2 - \ell - 2$).`,
        String.raw`Tous les termes sont positifs ($u_0 = 0$, puis des racines carrées), donc $\ell \geq 0$ : on élimine $-1$ et $\ell = 2$.`,
        String.raw`Vérification : $\sqrt{2 + 2} = 2$ ✔ ; numériquement $u_1 \approx 1{,}41$, $u_2 \approx 1{,}85$, $u_3 \approx 1{,}96$.`
      ],
      rule: String.raw`$u_{n+1} = f(u_n) \to \ell$ et $f$ continue $\Rightarrow f(\ell) = \ell$`,
      pitfall: String.raw`Garder la solution parasite $-1$ créée en élevant au carré : la limite d'une suite positive est positive.` },
    { id: 'm9-x-018', level: 3, topic: 'Limite d\'une suite récurrente', sec: 'm9-s-recurrentes',
      prompt: String.raw`$u_0 = 1$ et $u_{n+1} = 1 + \dfrac{1}{u_n}$. On admet que $(u_n)$ converge. Donne sa limite (valeur exacte).`,
      answer: '(1+sqrt(5))/2', vars: [], check: 'value',
      mistakes: [
        { expr: '(1-sqrt(5))/2', msg: String.raw`Cette racine est négative, or tous les $u_n$ sont $\geq 1$.` },
        { expr: '1', msg: String.raw`$1$ est le premier terme $u_0$, pas la limite : $u_1 = 2$, $u_2 = \frac32$, $u_3 = \frac53$… Résous $\ell = 1 + \frac1\ell$.` },
        { expr: '(1+sqrt(3))/2', msg: String.raw`Erreur dans le discriminant de $\ell^2 - \ell - 1 = 0$ : $\Delta = (-1)^2 - 4 \times 1 \times (-1) = 1 + 4 = 5$, pas $3$.` }
      ],
      hint: String.raw`$\ell = 1 + \frac1\ell \iff \ell^2 - \ell - 1 = 0$.`,
      explain: String.raw`$\ell^2 - \ell - 1 = 0$, $\Delta = 5$, $\ell = \frac{1 \pm \sqrt5}{2}$. Comme $u_n \geq 1$, $\ell = \frac{1 + \sqrt5}{2}$ (le nombre d'or).`,
      steps: [
        String.raw`Rappel : la limite $\ell$ d'une suite $u_{n+1} = f(u_n)$ (avec $f$ continue) est un <b>point fixe</b> : $f(\ell) = \ell$.`,
        String.raw`Ici $f(x) = 1 + \frac1x$ : $\ell = 1 + \frac1\ell$ ($\ell \neq 0$). On multiplie par $\ell$ : $\ell^2 = \ell + 1$, soit $\ell^2 - \ell - 1 = 0$.`,
        String.raw`Discriminant : $\Delta = (-1)^2 - 4 \times 1 \times (-1) = 1 + 4 = 5$, donc $\ell = \frac{1 \pm \sqrt5}{2}$.`,
        String.raw`Tous les termes vérifient $u_n \geq 1$ (car $u_0 = 1$ et $1 + \frac{1}{u_n} \geq 1$ si $u_n > 0$), donc $\ell \geq 1$ : on garde $\ell = \frac{1 + \sqrt5}{2} \approx 1{,}618$ (le nombre d'or).`,
        String.raw`Vérification : $u_0 = 1$, $u_1 = 2$, $u_2 = 1{,}5$, $u_3 \approx 1{,}667$, $u_4 = 1{,}6$ : les termes oscillent autour de $1{,}618$ ✔.`
      ],
      rule: String.raw`Limite de $u_{n+1} = f(u_n)$ : résoudre $f(\ell) = \ell$, puis éliminer les solutions incompatibles (signe, bornes)`,
      pitfall: String.raw`Garder la racine négative $\frac{1 - \sqrt5}{2}$ alors que tous les termes sont $\geq 1$.` },
    { id: 'm9-x-019', level: 1, topic: 'Limite d\'une fraction rationnelle', sec: 'm9-s-limites',
      prompt: String.raw`Calcule $\lim\limits_{n\to+\infty} \dfrac{3n^2 + 1}{2n^2 - n}$.`,
      answer: '3/2', vars: [], check: 'value',
      mistakes: [
        { expr: '1', msg: String.raw`$\frac{\infty}{\infty}$ n'est pas $1$ : factorise par $n^2$ en haut et en bas.` },
        { expr: '-3', msg: String.raw`Ce ne sont pas les termes en $n$ qui dominent : garde les termes de plus haut degré ($n^2$).` }
      ],
      hint: String.raw`Factorise numérateur et dénominateur par $n^2$.`,
      explain: String.raw`$\frac{n^2(3 + 1/n^2)}{n^2(2 - 1/n)} = \frac{3 + 1/n^2}{2 - 1/n} \to \frac32$.`,
      steps: [
        String.raw`Rappel : pour un quotient de polynômes en $n$ (forme $\frac{\infty}{\infty}$), on factorise en haut et en bas par le terme de plus haut degré ; la limite est le quotient des termes dominants.`,
        String.raw`Numérateur : $3n^2 + 1 = n^2\left(3 + \frac{1}{n^2}\right)$ ; dénominateur : $2n^2 - n = n^2\left(2 - \frac1n\right)$.`,
        String.raw`On simplifie par $n^2$ : $\frac{3n^2 + 1}{2n^2 - n} = \frac{3 + \frac{1}{n^2}}{2 - \frac1n}$.`,
        String.raw`Comme $\frac{1}{n^2} \to 0$ et $\frac1n \to 0$, la limite vaut $\frac{3 + 0}{2 - 0} = \frac32$.`,
        String.raw`Contrôle numérique : pour $n = 100$, $\frac{30001}{19900} \approx 1{,}508$ ✔.`
      ],
      rule: String.raw`Fraction rationnelle en $n$ : limite = limite du quotient des termes de plus haut degré`,
      pitfall: String.raw`Croire que $\frac{\infty}{\infty} = 1$ : ce sont les coefficients dominants qui comptent.` },
    { id: 'm9-x-020', level: 2, topic: 'Quantité conjuguée', sec: 'm9-s-limites',
      prompt: String.raw`Calcule $\lim\limits_{n\to+\infty} \left(\sqrt{n^2 + n} - n\right)$.`,
      answer: '1/2', vars: [], check: 'value',
      mistakes: [
        { expr: '0', msg: String.raw`$\infty - \infty$ est indéterminée : multiplie par la quantité conjuguée.` },
        { expr: '1', msg: String.raw`Après la quantité conjuguée, le dénominateur est $\sqrt{n^2+n} + n \sim 2n$, pas $n$.` }
      ],
      hint: String.raw`Multiplie et divise par $\sqrt{n^2 + n} + n$.`,
      explain: String.raw`$\sqrt{n^2+n} - n = \frac{n}{\sqrt{n^2 + n} + n} = \frac{1}{\sqrt{1 + 1/n} + 1} \to \frac12$.`,
      steps: [
        String.raw`Rappel : face à une forme $\infty - \infty$ avec une racine, on multiplie et divise par la <b>quantité conjuguée</b>, car $(\sqrt A - B)(\sqrt A + B) = A - B^2$ fait disparaître la racine.`,
        String.raw`Ici : $\sqrt{n^2 + n} - n = \frac{(\sqrt{n^2+n} - n)(\sqrt{n^2+n} + n)}{\sqrt{n^2+n} + n} = \frac{(n^2 + n) - n^2}{\sqrt{n^2+n} + n} = \frac{n}{\sqrt{n^2+n} + n}$.`,
        String.raw`On factorise par $n$ au dénominateur : $\sqrt{n^2 + n} = n\sqrt{1 + \frac1n}$ (car $n > 0$), donc l'expression vaut $\frac{n}{n\left(\sqrt{1 + 1/n} + 1\right)} = \frac{1}{\sqrt{1 + 1/n} + 1}$.`,
        String.raw`Quand $n \to +\infty$ : $\sqrt{1 + \frac1n} \to 1$, donc la limite vaut $\frac{1}{1 + 1} = \frac12$.`,
        String.raw`Contrôle : pour $n = 100$, $\sqrt{10100} - 100 \approx 0{,}499$ ✔.`
      ],
      rule: String.raw`$\sqrt{A} - B = \frac{A - B^2}{\sqrt{A} + B}$ (quantité conjuguée)`,
      pitfall: String.raw`Conclure $\infty - \infty = 0$ : c'est une forme indéterminée.` },
    { id: 'm9-x-021', level: 2, topic: 'Forme indéterminée 1 puissance infini', sec: 'm9-s-limites',
      prompt: String.raw`Calcule $\lim\limits_{n\to+\infty} \left(1 + \dfrac{2}{n}\right)^n$.`,
      answer: 'exp(2)', vars: [], check: 'value',
      mistakes: [
        { expr: '1', msg: String.raw`$1^\infty$ est une forme indéterminée : écris $\exp\left(n\ln(1 + \frac2n)\right)$.` },
        { expr: 'exp(1)', msg: String.raw`$\left(1 + \frac{x}{n}\right)^n \to \mathrm{e}^x$ : ici $x = 2$.` }
      ],
      hint: String.raw`$\left(1 + \frac2n\right)^n = \exp\left(n \ln\left(1 + \frac2n\right)\right)$ et $\ln(1 + \varepsilon) \sim \varepsilon$.`,
      explain: String.raw`$n\ln\left(1 + \frac2n\right) \sim n \cdot \frac2n = 2$, donc la limite vaut $\mathrm{e}^2$.`,
      steps: [
        String.raw`Rappel : quand base et exposant varient tous deux, on écrit $a^b = \mathrm{e}^{b\ln a}$. La forme $1^\infty$ est indéterminée ; on la lève avec $\ln(1 + \varepsilon) \sim \varepsilon$ quand $\varepsilon \to 0$.`,
        String.raw`On réécrit : $\left(1 + \frac2n\right)^n = \exp\left(n\ln\left(1 + \frac2n\right)\right)$.`,
        String.raw`Avec $\varepsilon = \frac2n \to 0$ : $\ln\left(1 + \frac2n\right) \sim \frac2n$, donc $n\ln\left(1 + \frac2n\right) \sim n \times \frac2n = 2$.`,
        String.raw`L'exposant tend vers $2$ ; par continuité de l'exponentielle, la limite vaut $\mathrm{e}^2 \approx 7{,}39$.`,
        String.raw`Contrôle : pour $n = 1000$, $1{,}002^{1000} \approx 7{,}37$ ✔.`
      ],
      rule: String.raw`$\left(1 + \frac{x}{n}\right)^n \to \mathrm{e}^x$ ; $\ln(1 + \varepsilon) \sim \varepsilon$ quand $\varepsilon \to 0$`,
      pitfall: String.raw`Remplacer la base par $1$ et conclure que la limite vaut $1$.` },
    { id: 'm9-x-022', level: 3, topic: 'Forme indéterminée 1 puissance infini', sec: 'm9-s-limites',
      prompt: String.raw`Calcule $\lim\limits_{n\to+\infty} \left(1 - \dfrac{1}{n}\right)^{2n}$.`,
      answer: 'exp(-2)', vars: [], check: 'value',
      mistakes: [
        { expr: 'exp(-1)', msg: String.raw`N'oublie pas le facteur $2$ de l'exposant : $2n \ln(1 - \frac1n) \to -2$.` },
        { expr: '1', msg: String.raw`$1^\infty$ est indéterminée : passe à l'exponentielle.` },
        { expr: 'exp(2)', msg: String.raw`Signe : $\ln\left(1 - \frac1n\right) \sim -\frac1n$.` }
      ],
      hint: String.raw`$\exp\left(2n \ln\left(1 - \frac1n\right)\right)$.`,
      explain: String.raw`$2n\ln\left(1 - \frac1n\right) \sim 2n \cdot \left(-\frac1n\right) = -2$, donc la limite vaut $\mathrm{e}^{-2}$.`,
      steps: [
        String.raw`Rappel : forme $1^\infty$ $\Rightarrow$ on passe à l'exponentielle, $a^b = \mathrm{e}^{b\ln a}$, puis on utilise $\ln(1 + \varepsilon) \sim \varepsilon$ quand $\varepsilon \to 0$.`,
        String.raw`On réécrit : $\left(1 - \frac1n\right)^{2n} = \exp\left(2n\ln\left(1 - \frac1n\right)\right)$.`,
        String.raw`Avec $\varepsilon = -\frac1n \to 0$ : $\ln\left(1 - \frac1n\right) \sim -\frac1n$ (attention au signe), donc $2n\ln\left(1 - \frac1n\right) \sim 2n \times \left(-\frac1n\right) = -2$.`,
        String.raw`Par continuité de l'exponentielle, la limite vaut $\mathrm{e}^{-2} \approx 0{,}135$.`,
        String.raw`Contrôle : pour $n = 1000$, $0{,}999^{2000} \approx 0{,}135$ ✔.`
      ],
      rule: String.raw`$\left(1 + \frac{x}{n}\right)^{kn} \to \mathrm{e}^{kx}$ ; $\ln(1 - \varepsilon) \sim -\varepsilon$`,
      pitfall: String.raw`Oublier le facteur $2$ de l'exposant ou le signe $-$ dans $\ln\left(1 - \frac1n\right)$.` },
    { id: 'm9-x-023', level: 2, topic: 'Équivalent d\'une suite', sec: 'm9-s-limites',
      prompt: String.raw`Donne un équivalent simple (un seul terme, de la forme $\frac{1}{n^\alpha}$) de $u_n = \dfrac{n^2 + 1}{n^4 + n}$ quand $n \to +\infty$.`,
      answer: '1/n^2', vars: ['n'], check: 'expr', domain: [1, 9],
      mistakes: [
        { expr: '(n^2+1)/(n^4+n)', msg: String.raw`C'est la suite elle-même : on veut un équivalent <b>simple</b> (quotient des termes dominants).` },
        { expr: '1/n^3', msg: String.raw`Le terme dominant du dénominateur est $n^4$ (pas $n^4 \cdot n$) : $\frac{n^2}{n^4} = \frac{1}{n^2}$.` }
      ],
      hint: String.raw`Quotient des termes de plus haut degré.`,
      explain: String.raw`$u_n \sim \frac{n^2}{n^4} = \frac{1}{n^2}$. On en déduit que $\sum u_n$ converge (Riemann, $\alpha = 2$).`,
      steps: [
        String.raw`Rappel : $u_n \sim v_n$ signifie $\frac{u_n}{v_n} \to 1$ (les deux suites se ressemblent à l'infini). Un polynôme est équivalent à son terme de plus haut degré, et les équivalents se divisent.`,
        String.raw`Numérateur : $n^2 + 1 \sim n^2$. Dénominateur : $n^4 + n \sim n^4$ (car $\frac{n}{n^4} = \frac{1}{n^3} \to 0$).`,
        String.raw`On divise : $u_n \sim \frac{n^2}{n^4} = \frac{1}{n^2}$.`,
        String.raw`Contrôle : $\frac{u_n}{1/n^2} = \frac{n^4 + n^2}{n^4 + n} \to 1$ ✔. Application : $\sum u_n$ converge (Riemann, $\alpha = 2 > 1$).`
      ],
      rule: String.raw`$u_n \sim v_n \iff \frac{u_n}{v_n} \to 1$ ; les équivalents se multiplient et se divisent, mais ne s'additionnent pas`,
      pitfall: String.raw`Multiplier au lieu de garder le terme dominant : le dénominateur est $\sim n^4$, pas $n^5$.` },
    { id: 'm9-x-024', level: 1, topic: 'Série géométrique', sec: 'm9-s-series',
      prompt: String.raw`Calcule $\sum_{n=0}^{+\infty} \left(\frac13\right)^n$.`,
      answer: '3/2', vars: [], check: 'value',
      mistakes: [
        { expr: '1/2', msg: String.raw`$\frac12$ est la somme à partir de $n = 1$ ; ici on commence à $n = 0$ (premier terme $1$).` },
        { expr: '2/3', msg: String.raw`Tu as calculé $1 - q = \frac23$ sans prendre l'inverse : la somme est $\frac{1}{1 - q} = \frac{1}{2/3} = \frac32$.` }
      ],
      hint: String.raw`$\sum_{n\geq0} q^n = \frac{1}{1-q}$ pour $|q| \lt 1$.`,
      explain: String.raw`$\frac{1}{1 - 1/3} = \frac{1}{2/3} = \frac32$.`,
      steps: [
        String.raw`Rappel : la <b>série géométrique</b> $\sum q^n$ converge si et seulement si $|q| \lt 1$, et sa somme vaut $\frac{\text{premier terme}}{1 - q}$.`,
        String.raw`Ici $q = \frac13$, donc $|q| \lt 1$ : convergence. Premier terme (pour $n = 0$) : $\left(\frac13\right)^0 = 1$.`,
        String.raw`Somme : $\frac{1}{1 - \frac13} = \frac{1}{\frac23}$, et diviser par $\frac23$ revient à multiplier par $\frac32$ : la somme vaut $\frac32$.`,
        String.raw`Contrôle : $1 + 0{,}333 + 0{,}111 + 0{,}037 \approx 1{,}48$, qui s'approche de $1{,}5$ ✔.`
      ],
      rule: String.raw`$\sum_{n\geq0} q^n = \frac{1}{1-q}$ pour $|q| \lt 1$`,
      pitfall: String.raw`Oublier le terme $n = 0$ (qui vaut $1$) ou oublier de prendre l'inverse de $1 - q$.` },
    { id: 'm9-x-025', level: 2, topic: 'Série géométrique', sec: 'm9-s-series',
      prompt: String.raw`Calcule $\sum_{n=1}^{+\infty} \left(\frac25\right)^n$.`,
      answer: '2/3', vars: [], check: 'value',
      mistakes: [
        { expr: '5/3', msg: String.raw`$\frac{1}{1 - 2/5} = \frac53$ est la somme depuis $n = 0$ ; ici le premier terme est $\frac25$.` },
        { expr: '2/7', msg: String.raw`Le dénominateur est $1 - q = 1 - \frac25 = \frac35$, pas $1 + q = \frac75$.` }
      ],
      hint: String.raw`Premier terme sur $(1 - q)$.`,
      explain: String.raw`$\sum_{n\geq1} q^n = \frac{q}{1-q} = \frac{2/5}{3/5} = \frac23$.`,
      steps: [
        String.raw`Rappel : une série géométrique de raison $q$ avec $|q| \lt 1$ a pour somme $\frac{\text{premier terme}}{1 - q}$, quel que soit l'indice de départ.`,
        String.raw`Ici $q = \frac25$ ($|q| \lt 1$), mais la somme commence à $n = 1$ : le premier terme est $\left(\frac25\right)^1 = \frac25$ (et non $1$).`,
        String.raw`Somme : $\frac{2/5}{1 - 2/5} = \frac{2/5}{3/5} = \frac25 \times \frac53 = \frac23$.`,
        String.raw`Vérification : somme depuis $n = 0$ moins le terme $n = 0$ : $\frac{1}{1 - 2/5} - 1 = \frac53 - 1 = \frac23$ ✔.`
      ],
      rule: String.raw`$\sum_{n \geq p} q^n = \frac{q^p}{1-q}$ pour $|q| \lt 1$`,
      pitfall: String.raw`Mettre $1$ comme premier terme alors que la somme démarre à $n = 1$.` },
    { id: 'm9-x-026', level: 3, topic: 'Série géométrique', sec: 'm9-s-series',
      prompt: String.raw`Calcule $\sum_{n=2}^{+\infty} \left(-\frac12\right)^n$.`,
      answer: '1/6', vars: [], check: 'value',
      mistakes: [
        { expr: '2/3', msg: String.raw`$\frac{1}{1 + 1/2} = \frac23$ est la somme depuis $n = 0$ ; ici le premier terme est $\left(-\frac12\right)^2 = \frac14$.` },
        { expr: '1/2', msg: String.raw`Attention au signe de la raison : $1 - q = 1 - \left(-\frac12\right) = \frac32$.` }
      ],
      hint: String.raw`$\sum_{n \geq p} q^n = \frac{q^p}{1-q}$ avec $q = -\frac12$.`,
      explain: String.raw`$\frac{(-1/2)^2}{1 + 1/2} = \frac{1/4}{3/2} = \frac16$. Vérification : $\frac23 - 1 + \frac12 = \frac16$.`,
      steps: [
        String.raw`Rappel : $\sum_{n \geq p} q^n = \frac{q^p}{1 - q}$ pour $|q| \lt 1$ (premier terme sur $1 - q$).`,
        String.raw`Ici $q = -\frac12$ ($|q| = \frac12 \lt 1$, convergence). Premier terme (pour $n = 2$) : $\left(-\frac12\right)^2 = \frac14$ (puissance paire, donc positif).`,
        String.raw`Dénominateur : $1 - q = 1 - \left(-\frac12\right) = 1 + \frac12 = \frac32$ (attention au double signe).`,
        String.raw`Somme : $\frac{1/4}{3/2} = \frac14 \times \frac23 = \frac{2}{12} = \frac16$.`,
        String.raw`Vérification : $\sum_{n\geq0} \left(-\frac12\right)^n = \frac{1}{3/2} = \frac23$ ; on retire les termes $n = 0$ ($1$) et $n = 1$ ($-\frac12$) : $\frac23 - 1 + \frac12 = \frac16$ ✔.`
      ],
      rule: String.raw`$\sum_{n \geq p} q^n = \frac{q^p}{1-q}$, $|q| \lt 1$`,
      pitfall: String.raw`Écrire $1 - q = \frac12$ quand $q = -\frac12$ : c'est $1 + \frac12 = \frac32$.` },
    { id: 'm9-x-027', level: 3, topic: 'Série télescopique', sec: 'm9-s-sommes',
      prompt: String.raw`Calcule $\sum_{n=1}^{+\infty} \dfrac{1}{n(n+2)}$.`,
      answer: '3/4', vars: [], check: 'value',
      mistakes: [
        { expr: '1/2', msg: String.raw`L'écart est de $2$ : il reste <b>deux</b> termes en tête, $\frac11$ et $\frac12$.` },
        { expr: '3/2', msg: String.raw`Tu as oublié le facteur $\frac12$ : $\frac{1}{n(n+2)} = \frac12\left(\frac1n - \frac{1}{n+2}\right)$.` }
      ],
      hint: String.raw`$\frac{1}{n(n+2)} = \frac12\left(\frac1n - \frac{1}{n+2}\right)$, puis télescopage à écart $2$.`,
      explain: String.raw`$S_N = \frac12\left(1 + \frac12 - \frac{1}{N+1} - \frac{1}{N+2}\right) \to \frac12 \cdot \frac32 = \frac34$.`,
      steps: [
        String.raw`Rappel : pour sommer une série dont le terme est une fraction rationnelle, on décompose en éléments simples puis on cherche un <b>télescopage</b> sur les sommes partielles $S_N$.`,
        String.raw`Décomposition : $\frac{1}{n(n+2)} = \frac{a}{n} + \frac{b}{n+2}$ avec $a = \frac12$ (multiplier par $n$ puis $n = 0$) et $b = -\frac12$ (multiplier par $n + 2$ puis $n = -2$). Donc $\frac{1}{n(n+2)} = \frac12\left(\frac1n - \frac{1}{n+2}\right)$.`,
        String.raw`Somme partielle : $S_N = \frac12\left[\left(1 - \frac13\right) + \left(\frac12 - \frac14\right) + \left(\frac13 - \frac15\right) + \dots\right]$ : chaque $-\frac{1}{n+2}$ s'annule avec le $+\frac1n$ situé deux rangs plus loin (écart $2$).`,
        String.raw`Il reste les deux premiers termes positifs et les deux derniers négatifs : $S_N = \frac12\left(1 + \frac12 - \frac{1}{N+1} - \frac{1}{N+2}\right)$.`,
        String.raw`Quand $N \to +\infty$ : $S_N \to \frac12 \times \frac32 = \frac34$.`
      ],
      rule: String.raw`$\frac{1}{n(n+p)} = \frac1p\left(\frac1n - \frac{1}{n+p}\right)$ ; télescopage à écart $p$ : il reste $p$ termes au début`,
      pitfall: String.raw`Avec un écart de $2$, il reste <b>deux</b> termes au début ($1$ et $\frac12$), pas un seul.` },
    { id: 'm9-x-028', level: 2, topic: 'Reste d\'une série', sec: 'm9-s-series',
      prompt: String.raw`On note $R_n = \sum_{k=n+1}^{+\infty} \left(\frac12\right)^k$ le reste d'ordre $n$ de la série géométrique de raison $\frac12$. Exprime $R_n$ en fonction de $n$.`,
      answer: '(1/2)^n', vars: ['n'], check: 'expr', domain: [1, 9],
      mistakes: [
        { expr: '(1/2)^(n+1)', msg: String.raw`C'est seulement le premier terme du reste ; il faut diviser par $1 - q = \frac12$.` },
        { expr: '2-(1/2)^n', msg: String.raw`C'est la somme partielle $S_n$, pas le reste $R_n = S - S_n$.` }
      ],
      hint: String.raw`Premier terme $\left(\frac12\right)^{n+1}$, raison $\frac12$.`,
      explain: String.raw`$R_n = \frac{(1/2)^{n+1}}{1 - 1/2} = \left(\frac12\right)^n \to 0$.`,
      steps: [
        String.raw`Rappel : le <b>reste</b> d'ordre $n$ d'une série convergente est ce qu'il reste à ajouter après $S_n$ : $R_n = S - S_n = \sum_{k=n+1}^{+\infty} u_k$. Il tend vers $0$.`,
        String.raw`Ici le reste est lui-même une série géométrique de raison $q = \frac12$, de premier terme (pour $k = n + 1$) $\left(\frac12\right)^{n+1}$.`,
        String.raw`Somme : $R_n = \frac{(1/2)^{n+1}}{1 - 1/2} = \frac{(1/2)^{n+1}}{1/2} = \left(\frac12\right)^{n+1} \times 2 = \left(\frac12\right)^n$.`,
        String.raw`Vérification : $S = \frac{1}{1 - 1/2} = 2$ et $S_n = \frac{1 - (1/2)^{n+1}}{1/2} = 2 - \left(\frac12\right)^n$, donc $R_n = S - S_n = \left(\frac12\right)^n$ ✔ ; et $R_n \to 0$.`
      ],
      rule: String.raw`$R_n = S - S_n = \sum_{k \geq n+1} u_k$ ; série géométrique : $R_n = \frac{q^{n+1}}{1-q}$`,
      pitfall: String.raw`Confondre le reste $R_n$ avec son premier terme, ou avec la somme partielle $S_n$.` },
    { id: 'm9-x-029', level: 1, topic: 'Séries de Riemann', sec: 'm9-s-series',
      prompt: String.raw`Quelle est la nature de la série $\sum_{n \geq 1} \dfrac{1}{n^{3/2}}$ ? Réponds par un mot : « convergente » ou « divergente ».`,
      answer: 'convergente', check: 'text', accept: ['convergente', 'converge', 'cv', 'convergent', 'elle converge'],
      mistakes: [
        { text: 'divergente', msg: String.raw`Série de Riemann avec $\alpha = \frac32 > 1$ : elle converge.` },
        { text: 'diverge', msg: String.raw`Série de Riemann avec $\alpha = \frac32 > 1$ : elle converge.` }
      ],
      hint: String.raw`Série de Riemann : compare $\alpha$ à $1$.`,
      explain: String.raw`$\sum \frac{1}{n^\alpha}$ converge $\iff \alpha > 1$ ; ici $\alpha = 1{,}5$ : <b>convergente</b>.`,
      steps: [
        String.raw`Rappel : une <b>série de Riemann</b> est $\sum \frac{1}{n^\alpha}$ ; elle converge si et seulement si $\alpha > 1$.`,
        String.raw`On identifie l'exposant : $\frac{1}{n^{3/2}}$ correspond à $\alpha = \frac32 = 1{,}5$.`,
        String.raw`Comme $1{,}5 > 1$, la série est <b>convergente</b>.`,
        String.raw`Intuition : $\int_1^{+\infty} \frac{\mathrm{d}t}{t^{3/2}} = \left[-2t^{-1/2}\right]_1^{+\infty} = 0 - (-2) = 2$ est finie, et la série se compare à cette intégrale.`
      ],
      rule: String.raw`$\sum \frac{1}{n^\alpha}$ converge $\iff \alpha > 1$`,
      pitfall: String.raw`Croire que la série diverge parce que $\frac{1}{n^{3/2}}$ décroît « lentement » : seul compte $\alpha > 1$.` },
    { id: 'm9-x-030', level: 2, topic: 'Règle de d\'Alembert', sec: 'm9-s-criteres',
      prompt: String.raw`Pour $u_n = \dfrac{n}{3^n}$, calcule $L = \lim\limits_{n\to+\infty} \dfrac{u_{n+1}}{u_n}$ (règle de d'Alembert).`,
      answer: '1/3', vars: [], check: 'value',
      mistakes: [
        { expr: '1', msg: String.raw`$\frac{n+1}{n} \to 1$ mais il reste le facteur $\frac{3^n}{3^{n+1}} = \frac13$.` },
        { expr: '3', msg: String.raw`Tu as calculé $\frac{u_n}{u_{n+1}}$ : la règle de d'Alembert utilise $\frac{u_{n+1}}{u_n}$ (le terme suivant divisé par le terme courant).` }
      ],
      hint: String.raw`$\frac{u_{n+1}}{u_n} = \frac{n+1}{n} \cdot \frac{3^n}{3^{n+1}}$.`,
      explain: String.raw`$\frac{u_{n+1}}{u_n} = \frac{n+1}{3n} \to \frac13 \lt 1$ : la série $\sum \frac{n}{3^n}$ converge.`,
      steps: [
        String.raw`Rappel : <b>règle de d'Alembert</b> — pour $u_n > 0$, on calcule $L = \lim \frac{u_{n+1}}{u_n}$ ; si $L \lt 1$ la série converge, si $L > 1$ elle diverge, si $L = 1$ on ne peut pas conclure.`,
        String.raw`On écrit $u_{n+1}$ en remplaçant $n$ par $n + 1$ : $u_{n+1} = \frac{n+1}{3^{n+1}}$.`,
        String.raw`Quotient (diviser par une fraction = multiplier par l'inverse) : $\frac{u_{n+1}}{u_n} = \frac{n+1}{3^{n+1}} \times \frac{3^n}{n} = \frac{n+1}{n} \times \frac{3^n}{3^{n+1}} = \frac{n+1}{3n}$.`,
        String.raw`Limite : $\frac{n+1}{n} \to 1$, donc $L = \frac13$.`,
        String.raw`Conclusion : $L = \frac13 \lt 1$, la série $\sum \frac{n}{3^n}$ converge.`
      ],
      rule: String.raw`d'Alembert : $\frac{u_{n+1}}{u_n} \to L$ ; $L \lt 1$ CV, $L > 1$ DV, $L = 1$ indécis`,
      pitfall: String.raw`Oublier le facteur $\frac{3^n}{3^{n+1}} = \frac13$ et ne garder que $\frac{n+1}{n} \to 1$.` },
    { id: 'm9-x-031', level: 3, topic: 'Règle de d\'Alembert', sec: 'm9-s-criteres',
      prompt: String.raw`Pour $u_n = \dfrac{n!}{n^n}$, calcule $L = \lim\limits_{n\to+\infty} \dfrac{u_{n+1}}{u_n}$.`,
      answer: 'exp(-1)', vars: [], check: 'value',
      mistakes: [
        { expr: '1', msg: String.raw`$\left(\frac{n}{n+1}\right)^n$ est de la forme $1^\infty$ : elle tend vers $\mathrm{e}^{-1}$, pas $1$.` },
        { expr: '0', msg: String.raw`Après simplification il reste $\left(\frac{n}{n+1}\right)^n$, qui ne tend pas vers $0$.` },
        { expr: 'exp(1)', msg: String.raw`Tu as calculé l'inverse : $\left(\frac{n}{n+1}\right)^n = \left(1 + \frac1n\right)^{-n} \to \mathrm{e}^{-1}$, pas $\mathrm{e}$.` }
      ],
      hint: String.raw`$\frac{u_{n+1}}{u_n} = \frac{(n+1)!}{n!} \cdot \frac{n^n}{(n+1)^{n+1}} = \left(\frac{n}{n+1}\right)^n$.`,
      explain: String.raw`$\left(\frac{n}{n+1}\right)^n = \exp\left(-n\ln\left(1 + \frac1n\right)\right) \to \mathrm{e}^{-1} \lt 1$ : $\sum \frac{n!}{n^n}$ converge.`,
      steps: [
        String.raw`Rappel : la règle de d'Alembert calcule $L = \lim \frac{u_{n+1}}{u_n}$ ; elle est adaptée aux factorielles car $\frac{(n+1)!}{n!} = n + 1$.`,
        String.raw`Quotient : $\frac{u_{n+1}}{u_n} = \frac{(n+1)!}{(n+1)^{n+1}} \times \frac{n^n}{n!} = (n+1) \times \frac{n^n}{(n+1)^{n+1}}$.`,
        String.raw`Comme $(n+1)^{n+1} = (n+1) \times (n+1)^n$, on simplifie par $n + 1$ : $\frac{u_{n+1}}{u_n} = \frac{n^n}{(n+1)^n} = \left(\frac{n}{n+1}\right)^n$.`,
        String.raw`Forme $1^\infty$ : $\left(\frac{n}{n+1}\right)^n = \left(1 + \frac1n\right)^{-n} = \exp\left(-n\ln\left(1 + \frac1n\right)\right)$, et $n\ln\left(1 + \frac1n\right) \to 1$.`,
        String.raw`Donc $L = \mathrm{e}^{-1} \approx 0{,}37 \lt 1$ : la série $\sum \frac{n!}{n^n}$ converge.`
      ],
      rule: String.raw`$\frac{(n+1)!}{n!} = n + 1$ et $\left(1 + \frac1n\right)^n \to \mathrm{e}$`,
      pitfall: String.raw`Conclure que $\left(\frac{n}{n+1}\right)^n \to 1$ parce que la base tend vers $1$ : c'est une forme $1^\infty$.` },
    { id: 'm9-x-032', level: 1, topic: 'Rayon de convergence', sec: 'm9-s-entieres',
      prompt: String.raw`Rayon de convergence de la série entière $\sum_{n \geq 0} \dfrac{x^n}{3^n}$ ?`,
      answer: '3', vars: [], check: 'value',
      mistakes: [
        { expr: '1/3', msg: String.raw`$\left|\frac{a_{n+1}}{a_n}\right| \to L = \frac13$, et $R = \frac1L$.` },
        { expr: '1', msg: String.raw`$1$ est le rayon de $\sum x^n$ ; ici la raison géométrique est $\frac{x}{3}$, il faut $|x| \lt 3$.` }
      ],
      hint: String.raw`$a_n = \frac{1}{3^n}$ ; $R = \frac{1}{L}$.`,
      explain: String.raw`$\frac{a_{n+1}}{a_n} = \frac13$, donc $R = 3$. D'ailleurs $\sum \left(\frac{x}{3}\right)^n$ est géométrique : CV $\iff |x| \lt 3$.`,
      steps: [
        String.raw`Rappel : le <b>rayon de convergence</b> $R$ de $\sum a_n x^n$ sépare la zone de convergence ($|x| \lt R$) de la zone de divergence ($|x| > R$). Si $\left|\frac{a_{n+1}}{a_n}\right| \to L$, alors $R = \frac1L$.`,
        String.raw`Coefficients : $a_n = \frac{1}{3^n}$, donc $\left|\frac{a_{n+1}}{a_n}\right| = \frac{3^n}{3^{n+1}} = \frac13$ et $L = \frac13$.`,
        String.raw`Rayon : $R = \frac{1}{L} = 3$.`,
        String.raw`Vérification : $\sum \frac{x^n}{3^n} = \sum \left(\frac{x}{3}\right)^n$ est géométrique de raison $\frac{x}{3}$, convergente $\iff \left|\frac{x}{3}\right| \lt 1 \iff |x| \lt 3$ ✔.`
      ],
      rule: String.raw`$\left|\frac{a_{n+1}}{a_n}\right| \to L \Rightarrow R = \frac1L$`,
      pitfall: String.raw`Donner $L$ au lieu de $R = \frac1L$.` },
    { id: 'm9-x-033', level: 2, topic: 'Rayon de convergence', sec: 'm9-s-entieres',
      prompt: String.raw`Rayon de convergence de $\sum_{n \geq 0} \dfrac{2^n}{n+1}\,x^n$ ?`,
      answer: '1/2', vars: [], check: 'value',
      mistakes: [
        { expr: '2', msg: String.raw`$L = 2$ est la limite du quotient des coefficients ; le rayon est $R = \frac{1}{L}$.` },
        { expr: '1', msg: String.raw`Le facteur $\frac{1}{n+1}$ ne change pas le rayon, mais $2^n$ si : $\frac{2^{n+1}}{2^n} = 2$, donc $L = 2$ et $R = \frac12$.` }
      ],
      hint: String.raw`$\left|\frac{a_{n+1}}{a_n}\right| = \frac{2(n+1)}{n+2}$.`,
      explain: String.raw`$\frac{2^{n+1}}{n+2} \cdot \frac{n+1}{2^n} = \frac{2(n+1)}{n+2} \to 2$, donc $R = \frac12$.`,
      steps: [
        String.raw`Rappel : pour $\sum a_n x^n$, si $\left|\frac{a_{n+1}}{a_n}\right| \to L$, alors le rayon de convergence vaut $R = \frac1L$.`,
        String.raw`Coefficients : $a_n = \frac{2^n}{n+1}$, donc $a_{n+1} = \frac{2^{n+1}}{n+2}$.`,
        String.raw`Quotient : $\left|\frac{a_{n+1}}{a_n}\right| = \frac{2^{n+1}}{n+2} \times \frac{n+1}{2^n} = 2 \times \frac{n+1}{n+2}$, et $\frac{n+1}{n+2} \to 1$, donc $L = 2$.`,
        String.raw`Rayon : $R = \frac1L = \frac12$.`,
        String.raw`Intuition : $\sum \frac{(2x)^n}{n+1}$ se comporte comme une série géométrique de raison $2x$ ; il faut $|2x| \lt 1$, soit $|x| \lt \frac12$ ✔.`
      ],
      rule: String.raw`$\left|\frac{a_{n+1}}{a_n}\right| \to L \Rightarrow R = \frac1L$ ; les facteurs polynomiaux en $n$ ne changent pas $R$`,
      pitfall: String.raw`Répondre $L = 2$ au lieu de $R = \frac12$.` },
    { id: 'm9-x-034', level: 3, topic: 'Série entière lacunaire', sec: 'm9-s-entieres',
      prompt: String.raw`Rayon de convergence de $\sum_{n \geq 0} \dfrac{x^{2n}}{4^n}$ ?`,
      answer: '2', vars: [], check: 'value',
      mistakes: [
        { expr: '4', msg: String.raw`La condition $\frac{x^2}{4} \lt 1$ porte sur $x^2$ : elle donne $|x| \lt 2$.` },
        { expr: '1/4', msg: String.raw`Applique d'Alembert au terme complet $u_n = \frac{x^{2n}}{4^n}$ : $\left|\frac{u_{n+1}}{u_n}\right| = \frac{x^2}{4}$.` }
      ],
      hint: String.raw`Série lacunaire : d'Alembert sur $u_n = \frac{x^{2n}}{4^n}$.`,
      explain: String.raw`$\left|\frac{u_{n+1}}{u_n}\right| = \frac{x^2}{4} \lt 1 \iff |x| \lt 2$ : $R = 2$.`,
      steps: [
        String.raw`Rappel : quand seules certaines puissances apparaissent (ici $x^{2n}$, série « lacunaire »), on applique d'Alembert au <b>terme complet</b> $u_n = a_n x^{2n}$, pas aux seuls coefficients.`,
        String.raw`$\left|\frac{u_{n+1}}{u_n}\right| = \frac{|x|^{2n+2}}{4^{n+1}} \times \frac{4^n}{|x|^{2n}} = \frac{x^2}{4}$.`,
        String.raw`Convergence si $\frac{x^2}{4} \lt 1 \iff x^2 \lt 4 \iff |x| \lt 2$ ; divergence si $|x| > 2$. Donc $R = 2$.`,
        String.raw`Vérification : $\sum \left(\frac{x^2}{4}\right)^n$ est géométrique de raison $\frac{x^2}{4}$, de somme $\frac{4}{4 - x^2}$ pour $|x| \lt 2$ ✔.`
      ],
      rule: String.raw`Série lacunaire : d'Alembert sur $|u_n(x)|$, puis résoudre $\lim \left|\frac{u_{n+1}}{u_n}\right| \lt 1$`,
      pitfall: String.raw`Conclure $R = 4$ : la condition $x^2 \lt 4$ donne $|x| \lt 2$.` },
    { id: 'm9-x-035', level: 2, topic: 'Développement de l\'exponentielle', sec: 'm9-s-entieres',
      prompt: String.raw`On écrit $\mathrm{e}^{2x} = \sum_{n \geq 0} a_n x^n$. Donne $a_n$ en fonction de $n$ (pour la factorielle, tape n!).`,
      answer: '2^n/n!', vars: ['n'], check: 'expr', domain: [1, 9],
      mistakes: [
        { expr: '2/n!', msg: String.raw`$(2x)^n = 2^n x^n$ : le $2$ est aussi élevé à la puissance $n$.` },
        { expr: '2^n/n', msg: String.raw`L'exponentielle fait intervenir $n!$, pas $n$.` }
      ],
      hint: String.raw`Remplace $x$ par $2x$ dans $\mathrm{e}^x = \sum \frac{x^n}{n!}$.`,
      explain: String.raw`$\mathrm{e}^{2x} = \sum \frac{(2x)^n}{n!} = \sum \frac{2^n}{n!}x^n$, donc $a_n = \frac{2^n}{n!}$.`,
      steps: [
        String.raw`Rappel : $\mathrm{e}^X = \sum_{n\geq0} \frac{X^n}{n!} = 1 + X + \frac{X^2}{2!} + \dots$, valable pour tout $X$ (rayon infini).`,
        String.raw`On substitue $X = 2x$ : $\mathrm{e}^{2x} = \sum_{n\geq0} \frac{(2x)^n}{n!}$.`,
        String.raw`On développe la puissance : $(2x)^n = 2^n x^n$, donc $\mathrm{e}^{2x} = \sum_{n\geq0} \frac{2^n}{n!}x^n$.`,
        String.raw`Par identification : $a_n = \frac{2^n}{n!}$. Vérification : $a_0 = 1$ et $a_1 = 2$, cohérent avec $\mathrm{e}^{2x} \approx 1 + 2x$ près de $0$ ✔.`
      ],
      rule: String.raw`$\mathrm{e}^x = \sum_{n\geq0} \frac{x^n}{n!}$ ; en remplaçant $x$ par $ax$ : coefficient $\frac{a^n}{n!}$`,
      pitfall: String.raw`Oublier que le $2$ est aussi élevé à la puissance $n$ : $(2x)^n = 2^n x^n$.` },
    { id: 'm9-x-036', level: 3, topic: 'Développement de ln(1+x)', sec: 'm9-s-entieres',
      prompt: String.raw`On écrit $\ln(1+x) = \sum_{n \geq 1} a_n x^n$ pour $|x| \lt 1$. Donne $a_n$ en fonction de $n$.`,
      answer: '(-1)^(n+1)/n', answers: ['-cos(pi*n)/n'], vars: ['n'], check: 'expr', domain: [1, 9],
      mistakes: [
        { expr: '(-1)^n/n', msg: String.raw`Signe : le premier coefficient $a_1$ vaut $+1$ ($\ln(1+x) \approx x$).` },
        { expr: '1/n', msg: String.raw`C'est le coefficient de $-\ln(1-x)$ ; pour $\ln(1+x)$ les signes alternent.` },
        { expr: '(-1)^(n+1)/n!', msg: String.raw`Pas de factorielle dans $\ln(1+x)$ : $x - \frac{x^2}{2} + \frac{x^3}{3} - \cdots$.` }
      ],
      hint: String.raw`Intègre $\frac{1}{1+t} = \sum (-1)^k t^k$ de $0$ à $x$.`,
      explain: String.raw`$\ln(1+x) = \sum_{k\geq0} \frac{(-1)^k x^{k+1}}{k+1} = \sum_{n\geq1} \frac{(-1)^{n+1}}{n} x^n$, donc $a_n = \frac{(-1)^{n+1}}{n}$.`,
      steps: [
        String.raw`Rappel : une série entière s'intègre terme à terme sur $]-R, R[$ ; et $\ln(1+x) = \int_0^x \frac{\mathrm{d}t}{1+t}$.`,
        String.raw`Série géométrique de raison $-t$ : $\frac{1}{1+t} = \sum_{k\geq0} (-t)^k = \sum_{k\geq0} (-1)^k t^k$ pour $|t| \lt 1$.`,
        String.raw`On intègre chaque terme de $0$ à $x$ : $\int_0^x t^k\,\mathrm{d}t = \frac{x^{k+1}}{k+1}$, donc $\ln(1+x) = \sum_{k\geq0} \frac{(-1)^k}{k+1} x^{k+1}$.`,
        String.raw`Changement d'indice $n = k + 1$ : $\ln(1+x) = \sum_{n\geq1} \frac{(-1)^{n-1}}{n} x^n$, et $(-1)^{n-1} = (-1)^{n+1}$.`,
        String.raw`Donc $a_n = \frac{(-1)^{n+1}}{n}$. Vérification : $a_1 = 1$, $a_2 = -\frac12$, soit $\ln(1+x) = x - \frac{x^2}{2} + \dots$ ✔.`
      ],
      rule: String.raw`$\ln(1+x) = \sum_{n\geq1} \frac{(-1)^{n+1}}{n}x^n = x - \frac{x^2}{2} + \frac{x^3}{3} - \cdots$`,
      pitfall: String.raw`Se tromper de signe : le premier coefficient $a_1$ vaut $+1$ car $\ln(1+x) \approx x$.` },
    { id: 'm9-x-037', level: 2, topic: 'Série géométrique entière', sec: 'm9-s-entieres',
      prompt: String.raw`Pour $|x| \lt 1$, calcule $\sum_{n=0}^{+\infty} (-1)^n x^{2n}$ (expression en $x$).`,
      answer: '1/(1+x^2)', vars: ['x'], check: 'expr', domain: [-0.8, 0.8],
      mistakes: [
        { expr: '1/(1-x^2)', msg: String.raw`La raison est $-x^2$ : $1 - (-x^2) = 1 + x^2$.` },
        { expr: '1/(1+x)', msg: String.raw`Les puissances sont $x^{2n}$ : la raison est $-x^2$, pas $-x$.` }
      ],
      hint: String.raw`Série géométrique de raison $q = -x^2$.`,
      explain: String.raw`$\sum (-x^2)^n = \frac{1}{1 - (-x^2)} = \frac{1}{1+x^2}$. En intégrant on retrouve la série de $\arctan x$.`,
      steps: [
        String.raw`Rappel : $\sum_{n\geq0} q^n = \frac{1}{1-q}$ pour $|q| \lt 1$ ; la raison $q$ peut être une expression en $x$.`,
        String.raw`On écrit le terme comme une puissance : $(-1)^n x^{2n} = (-1)^n (x^2)^n = \left(-x^2\right)^n$. C'est une série géométrique de raison $q = -x^2$.`,
        String.raw`Convergence : $|q| = x^2 \lt 1$ car $|x| \lt 1$. Somme : $\frac{1}{1 - (-x^2)} = \frac{1}{1 + x^2}$.`,
        String.raw`Vérification : pour $x$ petit, $\frac{1}{1+x^2} \approx 1 - x^2 + x^4$ ✔. En intégrant terme à terme, on obtient la série de $\arctan x$.`
      ],
      rule: String.raw`$\frac{1}{1+x^2} = \sum_{n\geq0} (-1)^n x^{2n}$ pour $|x| \lt 1$`,
      pitfall: String.raw`Prendre $x^2$ (au lieu de $-x^2$) ou $-x$ (au lieu de $-x^2$) comme raison.` },
    { id: 'm9-x-038', level: 3, topic: 'Somme d\'une série entière', sec: 'm9-s-entieres',
      prompt: String.raw`Pour $|x| \lt 1$, calcule $\sum_{n=1}^{+\infty} \dfrac{x^n}{n}$ (expression en $x$).`,
      answer: '-ln(1-x)', vars: ['x'], check: 'expr', domain: [-0.8, 0.8],
      mistakes: [
        { expr: 'ln(1-x)', msg: String.raw`Signe : la dérivée de ta réponse doit être $\sum x^{n-1} = \frac{1}{1-x} > 0$.` },
        { expr: 'ln(1+x)', msg: String.raw`$\ln(1+x)$ a des signes alternés ; ici tous les termes sont positifs (pour $x > 0$).` }
      ],
      hint: String.raw`Dérive terme à terme : $\sum x^{n-1} = \frac{1}{1-x}$, puis primitive nulle en $0$.`,
      explain: String.raw`$f'(x) = \sum_{n\geq1} x^{n-1} = \frac{1}{1-x}$ et $f(0) = 0$, donc $f(x) = -\ln(1-x)$.`,
      steps: [
        String.raw`Rappel : une série entière se dérive terme à terme sur $]-R, R[$ ; on peut donc la dériver, reconnaître une série connue, puis reprendre une primitive.`,
        String.raw`On note $f(x) = \sum_{n\geq1} \frac{x^n}{n}$. Comme $\left(\frac{x^n}{n}\right)' = x^{n-1}$ : $f'(x) = \sum_{n\geq1} x^{n-1} = 1 + x + x^2 + \dots = \frac{1}{1-x}$.`,
        String.raw`Une primitive de $\frac{1}{1-x}$ est $-\ln(1-x)$ (car $\left(\ln(1-x)\right)' = \frac{-1}{1-x}$). Donc $f(x) = -\ln(1-x) + C$.`,
        String.raw`Constante : $f(0) = 0$ et $-\ln(1 - 0) = 0$, donc $C = 0$ et $f(x) = -\ln(1-x)$.`,
        String.raw`Vérification : $-\ln(1-x) \approx x + \frac{x^2}{2}$ pour $x$ petit, ce qui correspond aux premiers termes $x + \frac{x^2}{2}$ ✔.`
      ],
      rule: String.raw`$-\ln(1-x) = \sum_{n\geq1} \frac{x^n}{n}$ pour $|x| \lt 1$`,
      pitfall: String.raw`Oublier le signe $-$ : la dérivée de $\ln(1-x)$ est $-\frac{1}{1-x}$ (dérivée intérieure $-1$).` },
    { id: 'm9-x-039', level: 3, topic: 'Somme d\'une série entière', sec: 'm9-s-entieres',
      prompt: String.raw`Calcule $\sum_{n=1}^{+\infty} \dfrac{n}{2^n}$.`,
      answer: '2', vars: [], check: 'value',
      mistakes: [
        { expr: '4', msg: String.raw`$\frac{1}{(1-x)^2} = \sum n x^{n-1}$ : il faut multiplier par $x$ pour avoir $\sum n x^n$.` },
        { expr: '1', msg: String.raw`Ce n'est pas une série géométrique : le facteur $n$ change la somme. Utilise $\sum n x^n = \frac{x}{(1-x)^2}$.` }
      ],
      hint: String.raw`$\sum_{n\geq1} n x^n = \frac{x}{(1-x)^2}$ avec $x = \frac12$.`,
      explain: String.raw`En dérivant $\frac{1}{1-x} = \sum x^n$ : $\sum n x^{n-1} = \frac{1}{(1-x)^2}$, donc $\sum n x^n = \frac{x}{(1-x)^2}$. En $x = \frac12$ : $\frac{1/2}{1/4} = 2$.`,
      steps: [
        String.raw`Rappel : en dérivant la série géométrique $\frac{1}{1-x} = \sum_{n\geq0} x^n$ terme à terme ($|x| \lt 1$), on obtient $\frac{1}{(1-x)^2} = \sum_{n\geq1} n x^{n-1}$.`,
        String.raw`Ce n'est pas une série géométrique (facteur $n$) : on introduit $g(x) = \sum_{n\geq1} n x^n$, à évaluer en $x = \frac12$.`,
        String.raw`On multiplie la formule dérivée par $x$ pour obtenir $x^n$ : $g(x) = x \times \frac{1}{(1-x)^2} = \frac{x}{(1-x)^2}$.`,
        String.raw`En $x = \frac12$ (bien dans $]-1, 1[$) : $g\left(\frac12\right) = \frac{1/2}{(1/2)^2} = \frac{1/2}{1/4} = 2$.`,
        String.raw`Contrôle : $\frac12 + \frac24 + \frac38 + \frac{4}{16} + \frac{5}{32} \approx 1{,}78$, qui s'approche de $2$ ✔.`
      ],
      rule: String.raw`$\sum_{n\geq1} n x^{n-1} = \frac{1}{(1-x)^2}$ et $\sum_{n\geq1} n x^n = \frac{x}{(1-x)^2}$, $|x| \lt 1$`,
      pitfall: String.raw`Oublier de multiplier par $x$ : $\frac{1}{(1-x)^2}$ correspond à $\sum n x^{n-1}$, pas à $\sum n x^n$.` },
    { id: 'm9-x-040', level: 3, topic: 'Série d\'arctan', sec: 'm9-s-entieres',
      prompt: String.raw`Calcule $\sum_{n=0}^{+\infty} \dfrac{(-1)^n}{2n+1} = 1 - \frac13 + \frac15 - \cdots$`,
      answer: 'pi/4', vars: [], check: 'value',
      mistakes: [
        { expr: 'ln(2)', msg: String.raw`$\ln 2 = 1 - \frac12 + \frac13 - \cdots$ (tous les entiers) ; ici seuls les impairs apparaissent.` },
        { expr: 'pi/2', msg: String.raw`$\arctan 1 = \frac{\pi}{4}$, pas $\frac\pi2$.` }
      ],
      hint: String.raw`$\arctan x = \sum \frac{(-1)^n x^{2n+1}}{2n+1}$, évaluée en $x = 1$.`,
      explain: String.raw`La série de $\arctan$ converge encore en $x = 1$ (série alternée) : $\sum \frac{(-1)^n}{2n+1} = \arctan 1 = \frac{\pi}{4}$ (formule de Leibniz).`,
      steps: [
        String.raw`Rappel : en intégrant $\frac{1}{1+t^2} = \sum (-1)^n t^{2n}$, on obtient $\arctan x = \sum_{n\geq0} \frac{(-1)^n x^{2n+1}}{2n+1} = x - \frac{x^3}{3} + \frac{x^5}{5} - \cdots$ pour $|x| \lt 1$.`,
        String.raw`En $x = 1$, le terme devient $\frac{(-1)^n \times 1^{2n+1}}{2n+1} = \frac{(-1)^n}{2n+1}$ : c'est exactement notre série.`,
        String.raw`En $x = 1$ (bord, $R = 1$), la série converge encore (critère des séries alternées : $\frac{1}{2n+1}$ décroît vers $0$) et l'on admet que l'égalité reste vraie (théorème d'Abel).`,
        String.raw`Donc la somme vaut $\arctan 1 = \frac{\pi}{4}$ (car $\tan\frac{\pi}{4} = 1$) : c'est la formule de Leibniz.`,
        String.raw`Contrôle : $1 - \frac13 + \frac15 - \frac17 \approx 0{,}724$, et $\frac{\pi}{4} \approx 0{,}785$ ; l'écart est bien $\leq \frac19$ (premier terme négligé) ✔.`
      ],
      rule: String.raw`$\arctan x = \sum_{n\geq0} \frac{(-1)^n x^{2n+1}}{2n+1}$, valable sur $[-1, 1]$`,
      pitfall: String.raw`Confondre avec $\ln 2 = 1 - \frac12 + \frac13 - \cdots$, qui fait intervenir tous les entiers.` }
  ]
});
