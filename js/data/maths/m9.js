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
    { id: 'm9-q-001', level: 1,
      q: String.raw`Une suite arithmétique de premier terme $u_0$ et de raison $r$ a pour terme général :`,
      choices: [String.raw`$u_0\,r^n$`, String.raw`$u_0 + (n+1)\,r$`, String.raw`$u_0 + n\,r$`, String.raw`$n\,u_0 + r$`], answer: 2,
      explain: String.raw`On ajoute $r$ à chaque pas : après $n$ pas, $u_n = u_0 + nr$.`,
      why: { 0: String.raw`C'est le terme d'une suite géométrique (on multiplie au lieu d'ajouter).`, 1: String.raw`Décalage d'indice : $u_0 + (n+1)r = u_{n+1}$.`, 3: String.raw`Le premier terme n'est pas multiplié par $n$ : on ajoute $n$ fois la raison.` } },
    { id: 'm9-q-002', level: 1,
      q: String.raw`Que vaut $1 + 2 + \dots + 100$ ?`,
      choices: [String.raw`$4950$`, String.raw`$5050$`, String.raw`$10100$`, String.raw`$5000$`], answer: 1,
      explain: String.raw`$\sum_{k=1}^{100} k = \frac{100 \times 101}{2} = 5050$.`,
      why: { 0: String.raw`$4950 = \frac{99 \times 100}{2}$ : c'est la somme jusqu'à $99$, il manque le dernier terme.`, 2: String.raw`Tu as oublié de diviser par $2$.`, 3: String.raw`$100 \times 50$ : il faut multiplier par la moyenne $\frac{1 + 100}{2} = 50{,}5$.` } },
    { id: 'm9-q-003', level: 1,
      q: String.raw`$(u_n)$ est géométrique avec $u_0 = 3$ et $q = 2$. Que vaut $u_5$ ?`,
      choices: [String.raw`$96$`, String.raw`$48$`, String.raw`$13$`, String.raw`$192$`], answer: 0,
      explain: String.raw`$u_5 = u_0 q^5 = 3 \times 32 = 96$.`,
      why: { 1: String.raw`$3 \times 2^4 = u_4$ : erreur d'exposant.`, 2: String.raw`$3 + 5 \times 2$ : c'est la formule arithmétique.`, 3: String.raw`$3 \times 2^6 = u_6$ : un pas de trop.` } },
    { id: 'm9-q-004', level: 1,
      q: String.raw`Pour $q \neq 1$, $\sum_{k=0}^{n} q^k$ vaut :`,
      choices: [String.raw`$\dfrac{1 - q^{n}}{1 - q}$`, String.raw`$\dfrac{1}{1-q}$`, String.raw`$\dfrac{q^{n+1} - 1}{1 - q}$`, String.raw`$\dfrac{1 - q^{n+1}}{1-q}$`], answer: 3,
      explain: String.raw`Il y a $n+1$ termes (de $q^0$ à $q^n$), premier terme $1$ : $\frac{1 - q^{n+1}}{1-q}$.`,
      why: { 0: String.raw`Ce serait la somme de $n$ termes ($k$ de $0$ à $n-1$).`, 1: String.raw`C'est la somme de la <b>série</b> (infinité de termes, $|q| \lt 1$), pas la somme finie.`, 2: String.raw`Erreur de signe : il faut $1 - q^{n+1}$ au numérateur si le dénominateur est $1 - q$.` } },
    { id: 'm9-q-005', level: 2,
      q: String.raw`Quel est le point fixe de la suite $u_{n+1} = \frac12 u_n + 3$ ?`,
      choices: [String.raw`$6$`, String.raw`$3$`, String.raw`$2$`, String.raw`$\frac32$`], answer: 0,
      explain: String.raw`$\ell = \frac12 \ell + 3 \iff \frac12\ell = 3 \iff \ell = 6$ (formule $\frac{b}{1-a}$).`,
      why: { 1: String.raw`C'est la constante $b$, pas le point fixe.`, 2: String.raw`$\frac{3}{1 + 1/2} = 2$ : erreur de signe, c'est $\frac{b}{1-a}$.`, 3: String.raw`$\frac12 \times 3$ : ce n'est pas la résolution de $\ell = a\ell + b$.` } },
    { id: 'm9-q-006', level: 2,
      q: String.raw`Soit $u_{n+1} = a u_n + b$ ($a \neq 1$) et $\ell$ son point fixe. La suite $v_n = u_n - \ell$ est :`,
      choices: [String.raw`arithmétique de raison $b$`, String.raw`géométrique de raison $a$`, String.raw`géométrique de raison $b$`, String.raw`constante`], answer: 1,
      explain: String.raw`$u_{n+1} - \ell = (a u_n + b) - (a\ell + b) = a(u_n - \ell)$, donc $v_{n+1} = a\,v_n$.`,
      why: { 0: String.raw`La constante $b$ disparaît justement dans la soustraction.`, 2: String.raw`La raison est le coefficient multiplicateur $a$.`, 3: String.raw`Seulement si $u_0 = \ell$ (alors $v_n = 0$).` } },
    { id: 'm9-q-007', level: 2,
      q: String.raw`$u_{n+1} = f(u_n)$ avec $f$ continue, et $(u_n)$ converge vers $\ell$. Alors :`,
      choices: [String.raw`$f(\ell) = 0$`, String.raw`$f'(\ell) = 0$`, String.raw`$f(\ell) = \ell$`, String.raw`$\ell = u_0$`], answer: 2,
      explain: String.raw`On passe à la limite dans $u_{n+1} = f(u_n)$ : $\ell = f(\ell)$ par continuité.`,
      why: { 0: String.raw`Confusion entre point fixe ($f(x) = x$) et racine ($f(x) = 0$).`, 1: String.raw`Rien n'impose une dérivée nulle.`, 3: String.raw`Seulement si $u_0$ est déjà un point fixe.` } },
    { id: 'm9-q-008', level: 3,
      q: String.raw`$f$ est <b>décroissante</b> sur un intervalle stable $I$ et $u_{n+1} = f(u_n)$, $u_0 \in I$. Que peut-on dire ?`,
      choices: [String.raw`$(u_n)$ est décroissante`, String.raw`$(u_n)$ est croissante`, String.raw`$(u_{2n})$ et $(u_{2n+1})$ sont monotones de sens contraires`, String.raw`$(u_n)$ est constante`], answer: 2,
      explain: String.raw`$f \circ f$ est croissante, donc $(u_{2n})$ et $(u_{2n+1})$ sont monotones ; comme $f$ décroissante inverse l'ordre, elles vont en sens contraires (la suite « oscille »).`,
      why: { 0: String.raw`Le sens de variation de $f$ ne donne pas directement celui de la suite ; avec $f$ décroissante, les termes alternent de part et d'autre du point fixe.`, 1: String.raw`Même erreur : c'est le cas $f$ croissante qui donne une suite monotone.`, 3: String.raw`Seulement si $u_0$ est un point fixe.` } },
    { id: 'm9-q-009', level: 1,
      q: String.raw`Pour $q = -1{,}2$, la suite $(q^n)$ :`,
      choices: [String.raw`tend vers $0$`, String.raw`tend vers $+\infty$`, String.raw`tend vers $-\infty$`, String.raw`n'a pas de limite`], answer: 3,
      explain: String.raw`$|q^n| = 1{,}2^n \to +\infty$ mais le signe alterne : aucune limite (ni finie, ni infinie).`,
      why: { 0: String.raw`Il faudrait $|q| \lt 1$.`, 1: String.raw`Les termes d'indice impair sont négatifs.`, 2: String.raw`Les termes d'indice pair sont positifs.` } },
    { id: 'm9-q-010', level: 1,
      q: String.raw`Que vaut $\lim\limits_{n \to +\infty} \dfrac{n^3}{2^n}$ ?`,
      choices: [String.raw`$+\infty$`, String.raw`$0$`, String.raw`$1$`, String.raw`$\frac12$`], answer: 1,
      explain: String.raw`Croissances comparées : toute puissance de $n$ est négligeable devant $q^n$ ($q > 1$).`,
      why: { 0: String.raw`C'est l'exponentielle qui l'emporte, pas le polynôme.`, 2: String.raw`$\frac{\infty}{\infty}$ n'est pas $1$ : c'est une forme indéterminée.`, 3: String.raw`Aucune raison : le quotient tend vers $0$.` } },
    { id: 'm9-q-011', level: 2,
      q: String.raw`Que vaut $\lim\limits_{n\to+\infty} \left(1 + \frac1n\right)^n$ ?`,
      choices: [String.raw`$1$`, String.raw`$+\infty$`, String.raw`$\mathrm{e}$`, String.raw`$0$`], answer: 2,
      explain: String.raw`$\left(1 + \frac1n\right)^n = \mathrm{e}^{n\ln(1 + 1/n)}$ et $n \ln(1 + \frac1n) \sim n \cdot \frac1n = 1$.`,
      why: { 0: String.raw`$1^\infty$ est une forme indéterminée : la base tend vers $1$ mais l'exposant explose.`, 1: String.raw`L'exposant grandit mais la base se rapproche de $1$ : les deux effets se compensent.`, 3: String.raw`La suite est supérieure à $1$.` } },
    { id: 'm9-q-012', level: 1,
      q: String.raw`Une suite croissante et majorée :`,
      choices: [String.raw`converge`, String.raw`tend vers $+\infty$`, String.raw`converge forcément vers son majorant`, String.raw`peut n'avoir aucune limite`], answer: 0,
      explain: String.raw`Théorème de la limite monotone.`,
      why: { 1: String.raw`Impossible : elle est majorée.`, 2: String.raw`La limite est $\leq$ au majorant, pas égale : $1 - \frac1n$ est majorée par $5$ et tend vers $1$.`, 3: String.raw`Le théorème de la limite monotone garantit la convergence.` } },
    { id: 'm9-q-013', level: 2,
      q: String.raw`$(u_n)$ et $(v_n)$ sont dites <b>adjacentes</b> lorsque :`,
      choices: [String.raw`$(u_n)$ croissante, $(v_n)$ décroissante et $v_n - u_n \to 0$`, String.raw`$(u_n)$ et $(v_n)$ convergent vers la même limite`, String.raw`$u_n \leq v_n$ pour tout $n$`, String.raw`$(u_n)$ et $(v_n)$ sont bornées`], answer: 0,
      explain: String.raw`C'est la définition ; le théorème en déduit qu'elles convergent vers la même limite.`,
      why: { 1: String.raw`C'est la <b>conclusion</b> du théorème, pas la définition (deux suites non monotones peuvent avoir même limite).`, 2: String.raw`Insuffisant : il faut aussi la monotonie et $v_n - u_n \to 0$.`, 3: String.raw`Insuffisant : aucune information sur l'écart ni la monotonie.` } },
    { id: 'm9-q-014', level: 1,
      q: String.raw`La suite $\left((-1)^n\right)$ est :`,
      choices: [String.raw`convergente vers $0$`, String.raw`bornée mais divergente`, String.raw`divergente vers $+\infty$`, String.raw`convergente vers $1$`], answer: 1,
      explain: String.raw`Elle vaut alternativement $1$ et $-1$ : bornée, mais les sous-suites paire et impaire ont des limites différentes.`,
      why: { 0: String.raw`$|(-1)^n| = 1$ ne tend pas vers $0$.`, 2: String.raw`Elle est bornée par $1$.`, 3: String.raw`Seule la sous-suite paire tend vers $1$.` } },
    { id: 'm9-q-015', level: 1,
      q: String.raw`$\sum_{k=1}^{n} k^2$ vaut :`,
      choices: [String.raw`$\dfrac{n(n+1)}{2}$`, String.raw`$\dfrac{n(n+1)(2n+1)}{6}$`, String.raw`$\left(\dfrac{n(n+1)}{2}\right)^2$`, String.raw`$\dfrac{n^2(n+1)}{2}$`], answer: 1,
      explain: String.raw`Formule à connaître ; test $n = 2$ : $1 + 4 = 5 = \frac{2\cdot3\cdot5}{6}$.`,
      why: { 0: String.raw`C'est $\sum k$.`, 2: String.raw`C'est $\sum k^3$.`, 3: String.raw`Pour $n = 2$ cela donne $6 \neq 5$.` } },
    { id: 'm9-q-016', level: 2,
      q: String.raw`$\sum_{k=1}^{n} \left(\frac1k - \frac{1}{k+1}\right)$ vaut :`,
      choices: [String.raw`$1 - \dfrac{1}{n+1}$`, String.raw`$1 - \dfrac1n$`, String.raw`$0$`, String.raw`$\dfrac{1}{n+1}$`], answer: 0,
      explain: String.raw`Télescopage : il reste le premier terme $\frac11$ et le dernier $-\frac{1}{n+1}$.`,
      why: { 1: String.raw`Erreur de décalage : le dernier terme négatif est $\frac{1}{n+1}$.`, 2: String.raw`Les termes intermédiaires s'annulent, mais pas le premier ni le dernier.`, 3: String.raw`Erreur de signe et oubli du premier terme $1$.` } },
    { id: 'm9-q-017', level: 1,
      q: String.raw`Si la série $\sum u_n$ converge, alors nécessairement :`,
      choices: [String.raw`$u_n \to 0$`, String.raw`$u_n \to 1$`, String.raw`$(u_n)$ est décroissante`, String.raw`$\sum |u_n|$ converge`], answer: 0,
      explain: String.raw`$u_n = S_n - S_{n-1} \to S - S = 0$.`,
      why: { 1: String.raw`Si $u_n \to 1$, la série diverge grossièrement.`, 2: String.raw`La monotonie n'est pas nécessaire (ex. $\sum \frac{(-1)^n}{n^2}$).`, 3: String.raw`Faux : $\sum \frac{(-1)^n}{n}$ converge mais $\sum \frac1n$ diverge (semi-convergence).` } },
    { id: 'm9-q-018', level: 1,
      q: String.raw`La série harmonique $\sum_{n \geq 1} \frac1n$ :`,
      choices: [String.raw`converge vers $\ln 2$`, String.raw`converge car $\frac1n \to 0$`, String.raw`diverge`, String.raw`converge vers $\frac{\pi^2}{6}$`], answer: 2,
      explain: String.raw`Riemann avec $\alpha = 1$ : divergence ; $\sum_{k=1}^{n} \frac1k \sim \ln n \to +\infty$.`,
      why: { 0: String.raw`$\ln 2$ est la somme de la série harmonique <b>alternée</b> $\sum \frac{(-1)^{n+1}}{n}$.`, 1: String.raw`$u_n \to 0$ est nécessaire mais <b>pas suffisant</b>.`, 3: String.raw`$\frac{\pi^2}{6}$ est la somme de $\sum \frac{1}{n^2}$.` } },
    { id: 'm9-q-019', level: 1,
      q: String.raw`La série $\sum_{n\geq1} \frac{1}{n^\alpha}$ converge si et seulement si :`,
      choices: [String.raw`$\alpha \geq 1$`, String.raw`$\alpha > 0$`, String.raw`$\alpha \lt 1$`, String.raw`$\alpha > 1$`], answer: 3,
      explain: String.raw`Séries de Riemann : convergence $\iff \alpha > 1$.`,
      why: { 0: String.raw`$\alpha = 1$ (série harmonique) diverge.`, 1: String.raw`Pour $0 \lt \alpha \leq 1$, le terme tend vers $0$ mais la série diverge.`, 2: String.raw`C'est exactement l'inverse.` } },
    { id: 'm9-q-020', level: 1,
      q: String.raw`Que vaut $\sum_{n=0}^{+\infty} \left(\frac12\right)^n$ ?`,
      choices: [String.raw`$1$`, String.raw`$2$`, String.raw`$\frac12$`, String.raw`$+\infty$`], answer: 1,
      explain: String.raw`$\frac{1}{1 - 1/2} = 2$.`,
      why: { 0: String.raw`$1$ est la somme à partir de $n = 1$ : $\frac{1/2}{1 - 1/2}$.`, 2: String.raw`C'est la raison, pas la somme.`, 3: String.raw`$|q| = \frac12 \lt 1$ : la série converge.` } },
    { id: 'm9-q-021', level: 2,
      q: String.raw`Nature de $\sum_{n\ge1} \dfrac{n}{n^2 + 1}$ ?`,
      choices: [String.raw`Converge car le terme général tend vers $0$`, String.raw`Converge (Riemann avec $\alpha = 2$)`, String.raw`Diverge car $\frac{n}{n^2+1} \sim \frac1n$`], answer: 2,
      explain: String.raw`Termes positifs, $\frac{n}{n^2 + 1} \sim \frac1n$ : même nature que la série harmonique, divergente.`,
      why: { 0: String.raw`Condition nécessaire mais pas suffisante.`, 1: String.raw`L'équivalent est $\frac{n}{n^2} = \frac1n$, pas $\frac{1}{n^2}$.` } },
    { id: 'm9-q-022', level: 2,
      q: String.raw`Nature de $\sum \dfrac{1}{n^2 + n + 1}$ ?`,
      choices: [String.raw`Diverge`, String.raw`Converge`, String.raw`On ne peut pas conclure`], answer: 1,
      explain: String.raw`Termes positifs et $\frac{1}{n^2 + n + 1} \sim \frac{1}{n^2}$ : Riemann $\alpha = 2 > 1$, convergence.`,
      why: { 0: String.raw`Le terme est équivalent à $\frac{1}{n^2}$, terme d'une série convergente.`, 2: String.raw`La règle des équivalents (termes positifs) conclut directement.` } },
    { id: 'm9-q-023', level: 2,
      q: String.raw`Pour une série à termes positifs, $\dfrac{u_{n+1}}{u_n} \to 1$. Alors :`,
      choices: [String.raw`la série converge`, String.raw`la série diverge`, String.raw`on ne peut pas conclure`, String.raw`la somme vaut $1$`], answer: 2,
      explain: String.raw`Cas douteux de d'Alembert : $\sum \frac1n$ (DV) et $\sum \frac{1}{n^2}$ (CV) donnent toutes deux $L = 1$.`,
      why: { 0: String.raw`Contre-exemple : $\sum \frac1n$.`, 1: String.raw`Contre-exemple : $\sum \frac{1}{n^2}$.`, 3: String.raw`Le critère ne donne jamais la valeur de la somme.` } },
    { id: 'm9-q-024', level: 2,
      q: String.raw`La série $\sum_{n\geq1} \dfrac{(-1)^n}{\sqrt n}$ :`,
      choices: [String.raw`diverge grossièrement`, String.raw`converge absolument`, String.raw`converge mais pas absolument`, String.raw`diverge car $\sum \frac{1}{\sqrt n}$ diverge`], answer: 2,
      explain: String.raw`$\frac{1}{\sqrt n}$ décroît vers $0$ : critère des séries alternées, convergence. Mais $\sum \frac{1}{\sqrt n}$ diverge (Riemann $\alpha = \frac12$) : semi-convergente.`,
      why: { 0: String.raw`Le terme général tend vers $0$.`, 1: String.raw`$\sum \left|\frac{(-1)^n}{\sqrt n}\right| = \sum \frac{1}{\sqrt n}$ diverge.`, 3: String.raw`La divergence de $\sum |u_n|$ n'implique pas celle de $\sum u_n$.` } },
    { id: 'm9-q-025', level: 3,
      q: String.raw`On approche $S = \sum_{n\geq1} \frac{(-1)^{n+1}}{n}$ par $S_9$ (somme des $9$ premiers termes). L'erreur $|S - S_9|$ est majorée par :`,
      choices: [String.raw`$\frac{1}{10}$`, String.raw`$\frac{1}{9}$`, String.raw`$\frac{1}{100}$`, String.raw`aucune majoration simple`], answer: 0,
      explain: String.raw`Critère des séries alternées : $|R_n| \leq a_{n+1}$, ici le premier terme négligé est $\frac{1}{10}$.`,
      why: { 1: String.raw`$\frac19$ est le dernier terme <b>gardé</b> ; la majoration utilise le premier terme négligé.`, 2: String.raw`Confusion avec $\frac{1}{n^2}$.`, 3: String.raw`Le critère des séries alternées fournit justement $|R_n| \leq a_{n+1}$.` } },
    { id: 'm9-q-026', level: 2,
      q: String.raw`Nature de $\sum \dfrac{2^n}{n!}$ ?`,
      choices: [String.raw`Diverge car $2^n \to +\infty$`, String.raw`Converge`, String.raw`d'Alembert ne permet pas de conclure`], answer: 1,
      explain: String.raw`$\frac{u_{n+1}}{u_n} = \frac{2}{n+1} \to 0 \lt 1$ : convergence (et la somme vaut $\mathrm{e}^2$).`,
      why: { 0: String.raw`$n!$ croît beaucoup plus vite que $2^n$ : le terme tend vers $0$.`, 2: String.raw`La limite du quotient est $0$, pas $1$ : d'Alembert conclut.` } },
    { id: 'm9-q-027', level: 1,
      q: String.raw`Rayon de convergence de $\sum \dfrac{x^n}{n!}$ ?`,
      choices: [String.raw`$0$`, String.raw`$1$`, String.raw`$\mathrm{e}$`, String.raw`$+\infty$`], answer: 3,
      explain: String.raw`$\left|\frac{a_{n+1}}{a_n}\right| = \frac{1}{n+1} \to 0$, donc $R = +\infty$ : c'est la série de $\mathrm{e}^x$, valable pour tout $x$.`,
      why: { 0: String.raw`Confusion avec $\sum n!\,x^n$.`, 1: String.raw`Confusion avec $\sum x^n$.`, 2: String.raw`$\mathrm{e}$ est la somme en $x = 1$, pas le rayon.` } },
    { id: 'm9-q-028', level: 2,
      q: String.raw`Rayon de convergence de $\sum n!\,x^n$ ?`,
      choices: [String.raw`$0$`, String.raw`$1$`, String.raw`$+\infty$`, String.raw`$\frac{1}{\mathrm{e}}$`], answer: 0,
      explain: String.raw`$\left|\frac{a_{n+1}}{a_n}\right| = n + 1 \to +\infty$, donc $R = 0$ : la série ne converge qu'en $x = 0$.`,
      why: { 1: String.raw`Le quotient des coefficients ne tend pas vers $1$.`, 2: String.raw`Confusion avec $\sum \frac{x^n}{n!}$ (inverse).`, 3: String.raw`Aucun lien avec $\mathrm{e}$ ici.` } },
    { id: 'm9-q-029', level: 1,
      q: String.raw`Pour $|x| \lt 1$, $\sum_{n=0}^{+\infty} x^n$ vaut :`,
      choices: [String.raw`$\dfrac{1}{1+x}$`, String.raw`$\dfrac{1}{1-x}$`, String.raw`$\dfrac{x}{1-x}$`, String.raw`$\mathrm{e}^x$`], answer: 1,
      explain: String.raw`Série géométrique de raison $x$, premier terme $1$.`,
      why: { 0: String.raw`C'est $\sum (-1)^n x^n$.`, 2: String.raw`C'est la somme à partir de $n = 1$.`, 3: String.raw`C'est $\sum \frac{x^n}{n!}$.` } },
    { id: 'm9-q-030', level: 2,
      q: String.raw`Quel est le développement en série entière de $\ln(1+x)$ ($|x| \lt 1$) ?`,
      choices: [String.raw`$\sum_{n\geq1} \dfrac{(-1)^{n+1}}{n}x^n$`, String.raw`$\sum_{n\geq1} \dfrac{x^n}{n}$`, String.raw`$\sum_{n\geq0} \dfrac{(-1)^n}{n!}x^n$`, String.raw`$\sum_{n\geq1} \dfrac{(-1)^{n+1}}{n!}x^n$`], answer: 0,
      explain: String.raw`On intègre $\frac{1}{1+t} = \sum (-1)^n t^n$ : $\ln(1+x) = x - \frac{x^2}{2} + \frac{x^3}{3} - \cdots$.`,
      why: { 1: String.raw`C'est $-\ln(1-x)$ (pas de signes alternés).`, 2: String.raw`C'est $\mathrm{e}^{-x}$.`, 3: String.raw`C'est $1 - \mathrm{e}^{-x}$ : pas de factorielle dans $\ln$.` } },
    { id: 'm9-q-031', level: 2,
      q: String.raw`Coefficient de $x^5$ dans le développement en série entière de $\sin x$ ?`,
      choices: [String.raw`$\frac15$`, String.raw`$-\frac{1}{120}$`, String.raw`$\frac{1}{120}$`, String.raw`$\frac{1}{24}$`], answer: 2,
      explain: String.raw`$\sin x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \cdots$ et $5! = 120$, signe $+$ pour $n = 2$.`,
      why: { 0: String.raw`Il faut $5!$ au dénominateur, pas $5$.`, 1: String.raw`Les signes alternent : $+x$, $-\frac{x^3}{6}$, $+\frac{x^5}{120}$.`, 3: String.raw`$\frac{1}{24} = \frac{1}{4!}$ est le coefficient de $x^4$ dans $\cos x$.` } },
    { id: 'm9-q-032', level: 3,
      q: String.raw`$\sum_{n=0}^{+\infty} \dfrac{(-1)^n x^{2n}}{(2n)!}$ est égal à :`,
      choices: [String.raw`$\sin x$`, String.raw`$\operatorname{ch} x$`, String.raw`$\mathrm{e}^{-x^2}$`, String.raw`$\cos x$`], answer: 3,
      explain: String.raw`Puissances paires, factorielles paires, signes alternés : $1 - \frac{x^2}{2} + \frac{x^4}{24} - \cdots = \cos x$.`,
      why: { 0: String.raw`$\sin$ ne contient que des puissances impaires.`, 1: String.raw`$\operatorname{ch}$ a les mêmes termes mais <b>sans</b> alternance de signe.`, 2: String.raw`$\mathrm{e}^{-x^2} = \sum \frac{(-1)^n x^{2n}}{n!}$ : factorielle de $n$, pas de $2n$.` } },
    { id: 'm9-q-033', level: 3,
      q: String.raw`Une série entière $\sum a_n x^n$ a pour rayon $R = 2$. En $x = 2$ :`,
      choices: [String.raw`elle converge`, String.raw`elle diverge`, String.raw`on ne peut rien dire en général`], answer: 2,
      explain: String.raw`Sur le cercle $|x| = R$, tout est possible : il faut étudier la série numérique obtenue. Ex. $\sum \frac{x^n}{n 2^n}$ diverge en $2$ mais converge en $-2$.`,
      why: { 0: String.raw`Ex. $\sum \frac{x^n}{2^n}$ ($R = 2$) diverge grossièrement en $x = 2$.`, 1: String.raw`Ex. $\sum \frac{x^n}{n^2 2^n}$ ($R = 2$) converge en $x = 2$.` } }
  ],

  /* ======================================================================
     EXERCICES « TAPE LA FORMULE »
     ====================================================================== */
  exercises: [
    { id: 'm9-x-001', level: 1,
      prompt: String.raw`$(u_n)$ est arithmétique de premier terme $u_0 = 3$ et de raison $r = 4$. Donne $u_n$ en fonction de $n$.`,
      answer: '3+4*n', vars: ['n'], check: 'expr', domain: [1, 9],
      mistakes: [
        { expr: '3+4*(n-1)', msg: String.raw`La suite commence à $u_0$ : $u_n = u_0 + nr$. Le décalage $n-1$ ne sert que si l'on part de $u_1$.` },
        { expr: '3*4^n', msg: String.raw`C'est la formule d'une suite <b>géométrique</b>. Ici on ajoute $4$ à chaque pas.` }
      ],
      hint: String.raw`$u_n = u_0 + n\,r$.`,
      explain: String.raw`$u_n = u_0 + nr = 3 + 4n$. Vérification : $u_1 = 7 = 3 + 4$.` },
    { id: 'm9-x-002', level: 1,
      prompt: String.raw`$(u_n)$ est géométrique avec $u_0 = 2$ et de raison $q = 3$. Donne $u_n$ en fonction de $n$.`,
      answer: '2*3^n', vars: ['n'], check: 'expr', domain: [1, 9],
      mistakes: [
        { expr: '6^n', msg: String.raw`$2 \times 3^n \neq 6^n$ : la puissance ne porte que sur la raison.` },
        { expr: '2*3^(n-1)', msg: String.raw`La suite commence à $u_0$ : $u_n = u_0\,q^n$ (l'exposant $n-1$ correspond à un départ en $u_1$).` },
        { expr: '2+3*n', msg: String.raw`C'est la formule arithmétique ; ici on multiplie par $3$ à chaque pas.` }
      ],
      hint: String.raw`$u_n = u_0\,q^n$.`,
      explain: String.raw`$u_n = u_0 q^n = 2 \times 3^n$. Vérification : $u_1 = 6$, $u_2 = 18$.` },
    { id: 'm9-x-003', level: 1,
      prompt: String.raw`$(u_n)_{n \geq 1}$ est géométrique avec $u_1 = 5$ et de raison $q = \frac12$. Donne $u_n$ en fonction de $n$.`,
      answer: '5*(1/2)^(n-1)', vars: ['n'], check: 'expr', domain: [1, 9],
      mistakes: [
        { expr: '5*(1/2)^n', msg: String.raw`Le premier terme est $u_1$ : $u_n = u_1\,q^{n-1}$ (vérifie avec $n = 1$ : on doit retrouver $5$).` },
        { expr: '5-(n-1)/2', msg: String.raw`C'est une suite géométrique : on multiplie par $\frac12$, on ne retranche pas $\frac12$.` }
      ],
      hint: String.raw`$u_n = u_p\,q^{n-p}$ avec $p = 1$.`,
      explain: String.raw`$u_n = u_1 q^{n-1} = 5\left(\frac12\right)^{n-1} = \frac{10}{2^n}$.` },
    { id: 'm9-x-004', level: 1,
      prompt: String.raw`Calcule $S = 1 + 3 + 5 + \dots + 99$ (somme des nombres impairs de $1$ à $99$).`,
      answer: '2500', vars: [], check: 'value',
      mistakes: [
        { expr: '4950', msg: String.raw`Il n'y a pas $99$ termes : les impairs de $1$ à $99$ sont $\frac{99-1}{2} + 1 = 50$.` },
        { expr: '2450', msg: String.raw`Tu as compté $49$ termes : il y en a $\frac{99 - 1}{2} + 1 = 50$.` }
      ],
      hint: String.raw`Suite arithmétique de raison $2$ : nombre de termes $\times \frac{\text{premier} + \text{dernier}}{2}$.`,
      explain: String.raw`$50$ termes, donc $S = 50 \times \frac{1 + 99}{2} = 50 \times 50 = 2500$. (Plus généralement, la somme des $n$ premiers impairs vaut $n^2$.)` },
    { id: 'm9-x-005', level: 1,
      prompt: String.raw`Calcule $\sum_{k=0}^{10} 2^k = 1 + 2 + 4 + \dots + 2^{10}$.`,
      answer: '2047', vars: [], check: 'value',
      mistakes: [
        { expr: '1023', msg: String.raw`De $k = 0$ à $k = 10$ il y a $11$ termes : $\frac{1 - 2^{11}}{1 - 2}$.` },
        { expr: '2048', msg: String.raw`Presque : $\frac{2^{11} - 1}{2 - 1} = 2^{11} - 1$, n'oublie pas le $-1$.` }
      ],
      hint: String.raw`$\sum_{k=0}^{n} q^k = \frac{1 - q^{n+1}}{1-q}$.`,
      explain: String.raw`$\sum_{k=0}^{10} 2^k = \frac{1 - 2^{11}}{1 - 2} = 2^{11} - 1 = 2047$.` },
    { id: 'm9-x-006', level: 2,
      prompt: String.raw`Exprime $S_n = \sum_{k=0}^{n} 3^k$ en fonction de $n$.`,
      answer: '(3^(n+1)-1)/2', vars: ['n'], check: 'expr', domain: [1, 9],
      mistakes: [
        { expr: '(3^n-1)/2', msg: String.raw`Il y a $n+1$ termes (de $k = 0$ à $n$), donc l'exposant est $n+1$.` },
        { expr: '(1-3^(n+1))/2', msg: String.raw`Erreur de signe : $\frac{1 - 3^{n+1}}{1 - 3} = \frac{3^{n+1} - 1}{2}$.` }
      ],
      hint: String.raw`Somme géométrique de raison $3$, premier terme $1$, $n+1$ termes.`,
      explain: String.raw`$S_n = \frac{1 - 3^{n+1}}{1 - 3} = \frac{3^{n+1} - 1}{2}$. Vérification $n = 1$ : $1 + 3 = 4 = \frac{9 - 1}{2}$.` },
    { id: 'm9-x-007', level: 2,
      prompt: String.raw`Exprime $S_n = \sum_{k=0}^{n-1} \left(\frac12\right)^k$ en fonction de $n$.`,
      answer: '2-2*(1/2)^n', vars: ['n'], check: 'expr', domain: [1, 9],
      mistakes: [
        { expr: '2-(1/2)^n', msg: String.raw`Tu as sommé jusqu'à $k = n$ : ici il n'y a que $n$ termes (de $0$ à $n-1$).` },
        { expr: '1-(1/2)^n', msg: String.raw`Tu as oublié de diviser par $1 - q = \frac12$.` }
      ],
      hint: String.raw`$n$ termes, premier terme $1$ : $\frac{1 - q^n}{1 - q}$.`,
      explain: String.raw`$S_n = \frac{1 - (1/2)^n}{1 - 1/2} = 2\left(1 - \frac{1}{2^n}\right) = 2 - \frac{2}{2^n}$. Elle tend vers $2$.` },
    { id: 'm9-x-008', level: 2,
      prompt: String.raw`Exprime $\sum_{k=1}^{n} (2k + 1)$ en fonction de $n$.`,
      answer: 'n^2+2*n', vars: ['n'], check: 'expr', domain: [1, 9],
      mistakes: [
        { expr: 'n^2+n+1', msg: String.raw`$\sum_{k=1}^{n} 1 = n$, pas $1$.` },
        { expr: '(n+1)^2', msg: String.raw`$(n+1)^2$ correspond à une somme à partir de $k = 0$ ; ici on commence à $k = 1$.` }
      ],
      hint: String.raw`Linéarité : $2\sum k + \sum 1$.`,
      explain: String.raw`$\sum_{k=1}^{n}(2k+1) = 2 \cdot \frac{n(n+1)}{2} + n = n^2 + n + n = n^2 + 2n$.` },
    { id: 'm9-x-009', level: 2,
      prompt: String.raw`Exprime $\sum_{k=1}^{n} k(k+1)$ en fonction de $n$ (forme factorisée conseillée).`,
      answer: 'n*(n+1)*(n+2)/3', vars: ['n'], check: 'expr', domain: [1, 9],
      mistakes: [
        { expr: 'n*(n+1)*(2*n+1)/6', msg: String.raw`C'est seulement $\sum k^2$ : il faut ajouter $\sum k = \frac{n(n+1)}{2}$.` },
        { expr: 'n*(n+1)/2*(n+1)*(n+2)/2', msg: String.raw`$\sum k(k+1) \neq \left(\sum k\right)\left(\sum (k+1)\right)$ : la somme d'un produit n'est pas le produit des sommes.` }
      ],
      hint: String.raw`$k(k+1) = k^2 + k$, puis sommes usuelles.`,
      explain: String.raw`$\sum k^2 + \sum k = \frac{n(n+1)(2n+1)}{6} + \frac{n(n+1)}{2} = \frac{n(n+1)}{6}(2n + 1 + 3) = \frac{n(n+1)(n+2)}{3}$.` },
    { id: 'm9-x-010', level: 2,
      prompt: String.raw`Exprime $\sum_{k=1}^{n} \dfrac{1}{k(k+1)}$ en fonction de $n$.`,
      answer: 'n/(n+1)', vars: ['n'], check: 'expr', domain: [1, 9],
      mistakes: [
        { expr: '1-1/n', msg: String.raw`Le dernier terme qui reste est $-\frac{1}{n+1}$ (pour $k = n$ : $\frac1n - \frac{1}{n+1}$).` },
        { expr: '1/(n+1)', msg: String.raw`Il reste le premier terme $1$ et le dernier $-\frac{1}{n+1}$ : $1 - \frac{1}{n+1}$.` }
      ],
      hint: String.raw`$\frac{1}{k(k+1)} = \frac1k - \frac{1}{k+1}$ : télescopage.`,
      explain: String.raw`$\sum_{k=1}^{n} \left(\frac1k - \frac{1}{k+1}\right) = 1 - \frac{1}{n+1} = \frac{n}{n+1}$.` },
    { id: 'm9-x-011', level: 2,
      prompt: String.raw`Exprime $\sum_{k=1}^{n} \ln\left(1 + \frac1k\right)$ en fonction de $n$.`,
      answer: 'ln(n+1)', vars: ['n'], check: 'expr', domain: [1, 9],
      mistakes: [
        { expr: 'ln(n)', msg: String.raw`Le dernier terme est $\ln(n+1) - \ln n$ : il reste $\ln(n+1) - \ln 1$.` }
      ],
      hint: String.raw`$\ln\left(1 + \frac1k\right) = \ln\frac{k+1}{k} = \ln(k+1) - \ln k$.`,
      explain: String.raw`Télescopage : $\sum_{k=1}^{n} (\ln(k+1) - \ln k) = \ln(n+1) - \ln 1 = \ln(n+1)$. En particulier $\sum \ln(1 + \frac1n)$ diverge.` },
    { id: 'm9-x-012', level: 2,
      prompt: String.raw`$u_0 = 0$ et $u_{n+1} = u_n + 2n + 1$. Donne $u_n$ en fonction de $n$.`,
      answer: 'n^2', vars: ['n'], check: 'expr', domain: [1, 9],
      mistakes: [
        { expr: '(n+1)^2', msg: String.raw`C'est $u_{n+1}$. Vérifie : $u_1 = 0 + 1 = 1$, $u_2 = 1 + 3 = 4$.` },
        { expr: 'n^2+2*n', msg: String.raw`$u_n = \sum_{k=0}^{n-1}(2k+1)$ : la somme va jusqu'à $n - 1$.` }
      ],
      hint: String.raw`$u_n = u_0 + \sum_{k=0}^{n-1} (u_{k+1} - u_k)$ (télescopage).`,
      explain: String.raw`$u_n = \sum_{k=0}^{n-1} (2k+1) = 2\cdot\frac{(n-1)n}{2} + n = n^2$.` },
    { id: 'm9-x-013', level: 1,
      prompt: String.raw`Quel est le point fixe $\ell$ de la suite $u_{n+1} = \frac12 u_n + 4$ ?`,
      answer: '8', vars: [], check: 'value',
      mistakes: [
        { expr: '8/3', msg: String.raw`$\ell = \frac{b}{1-a}$, pas $\frac{b}{1+a}$ : résous $\ell = \frac12\ell + 4$.` },
        { expr: '4', msg: String.raw`$4$ est la constante $b$ ; le point fixe vérifie $\ell = \frac12\ell + 4$.` }
      ],
      hint: String.raw`Résous $\ell = \frac12 \ell + 4$.`,
      explain: String.raw`$\ell - \frac12\ell = 4 \iff \ell = 8$ (ou $\ell = \frac{b}{1-a} = \frac{4}{1/2}$).` },
    { id: 'm9-x-014', level: 2,
      prompt: String.raw`$u_0 = 0$ et $u_{n+1} = \frac12 u_n + 4$. Donne $u_n$ en fonction de $n$.`,
      answer: '8-8*(1/2)^n', vars: ['n'], check: 'expr', domain: [1, 9],
      mistakes: [
        { expr: '8+8*(1/2)^n', msg: String.raw`Signe : $v_0 = u_0 - \ell = 0 - 8 = -8$.` },
        { expr: '-8*(1/2)^n', msg: String.raw`C'est $v_n = u_n - \ell$ ; il faut rajouter $\ell = 8$.` }
      ],
      hint: String.raw`Point fixe $\ell = 8$, puis $v_n = u_n - 8$ est géométrique de raison $\frac12$.`,
      explain: String.raw`$v_n = v_0 \left(\frac12\right)^n$ avec $v_0 = -8$, donc $u_n = 8 - 8\left(\frac12\right)^n = 8 - \frac{8}{2^n} \to 8$.` },
    { id: 'm9-x-015', level: 2,
      prompt: String.raw`$u_0 = 2$ et $u_{n+1} = 3u_n - 2$. Donne $u_n$ en fonction de $n$.`,
      answer: '3^n+1', vars: ['n'], check: 'expr', domain: [1, 9],
      mistakes: [
        { expr: '2*3^n', msg: String.raw`Tu as ignoré le $-2$ : la suite n'est pas géométrique, passe par le point fixe.` },
        { expr: '3^(n+1)-1', msg: String.raw`Erreur sur le point fixe : $\ell = 3\ell - 2 \iff \ell = 1$ (et non $-1$).` }
      ],
      hint: String.raw`Point fixe : $\ell = 3\ell - 2$. Puis $u_n = a^n(u_0 - \ell) + \ell$.`,
      explain: String.raw`$\ell = 1$, $v_n = u_n - 1$ géométrique de raison $3$, $v_0 = 1$, donc $u_n = 3^n + 1$. Vérification : $u_1 = 3\cdot2 - 2 = 4 = 3 + 1$.` },
    { id: 'm9-x-016', level: 3,
      prompt: String.raw`$u_0 = 5$ et $u_{n+1} = 2u_n - 3$. Donne $u_n$ en fonction de $n$.`,
      answer: '2^(n+1)+3', vars: ['n'], check: 'expr', domain: [1, 9],
      mistakes: [
        { expr: '5*2^n', msg: String.raw`Le $-3$ empêche la suite d'être géométrique : utilise le point fixe $\ell = 3$.` },
        { expr: '2^n+3', msg: String.raw`$v_0 = u_0 - \ell = 5 - 3 = 2$, pas $1$.` }
      ],
      hint: String.raw`$\ell = \frac{b}{1-a} = \frac{-3}{1-2}$.`,
      explain: String.raw`$\ell = 3$ ; $v_n = u_n - 3$ vérifie $v_{n+1} = 2v_n$, $v_0 = 2$, donc $u_n = 2 \cdot 2^n + 3 = 2^{n+1} + 3$ (la suite diverge car $|a| = 2 > 1$).` },
    { id: 'm9-x-017', level: 2,
      prompt: String.raw`$u_0 = 0$ et $u_{n+1} = \sqrt{2 + u_n}$. On admet que $(u_n)$ converge (croissante, majorée par $2$). Quelle est sa limite ?`,
      answer: '2', vars: [], check: 'value',
      mistakes: [
        { expr: '-1', msg: String.raw`$-1$ est bien solution de $\ell^2 - \ell - 2 = 0$, mais la suite est positive : $\ell \geq 0$.` },
        { expr: 'sqrt(2)', msg: String.raw`$\sqrt2$ est $u_1$, pas la limite. Résous $\ell = \sqrt{2 + \ell}$.` }
      ],
      hint: String.raw`La limite vérifie $\ell = \sqrt{2 + \ell}$ avec $\ell \geq 0$.`,
      explain: String.raw`$\ell^2 = 2 + \ell \iff \ell^2 - \ell - 2 = 0 \iff (\ell - 2)(\ell + 1) = 0$. Comme $\ell \geq 0$, $\ell = 2$.` },
    { id: 'm9-x-018', level: 3,
      prompt: String.raw`$u_0 = 1$ et $u_{n+1} = 1 + \dfrac{1}{u_n}$. On admet que $(u_n)$ converge. Donne sa limite (valeur exacte).`,
      answer: '(1+sqrt(5))/2', vars: [], check: 'value',
      mistakes: [
        { expr: '(1-sqrt(5))/2', msg: String.raw`Cette racine est négative, or tous les $u_n$ sont $\geq 1$.` }
      ],
      hint: String.raw`$\ell = 1 + \frac1\ell \iff \ell^2 - \ell - 1 = 0$.`,
      explain: String.raw`$\ell^2 - \ell - 1 = 0$, $\Delta = 5$, $\ell = \frac{1 \pm \sqrt5}{2}$. Comme $u_n \geq 1$, $\ell = \frac{1 + \sqrt5}{2}$ (le nombre d'or).` },
    { id: 'm9-x-019', level: 1,
      prompt: String.raw`Calcule $\lim\limits_{n\to+\infty} \dfrac{3n^2 + 1}{2n^2 - n}$.`,
      answer: '3/2', vars: [], check: 'value',
      mistakes: [
        { expr: '1', msg: String.raw`$\frac{\infty}{\infty}$ n'est pas $1$ : factorise par $n^2$ en haut et en bas.` },
        { expr: '-3', msg: String.raw`Ce ne sont pas les termes en $n$ qui dominent : garde les termes de plus haut degré ($n^2$).` }
      ],
      hint: String.raw`Factorise numérateur et dénominateur par $n^2$.`,
      explain: String.raw`$\frac{n^2(3 + 1/n^2)}{n^2(2 - 1/n)} = \frac{3 + 1/n^2}{2 - 1/n} \to \frac32$.` },
    { id: 'm9-x-020', level: 2,
      prompt: String.raw`Calcule $\lim\limits_{n\to+\infty} \left(\sqrt{n^2 + n} - n\right)$.`,
      answer: '1/2', vars: [], check: 'value',
      mistakes: [
        { expr: '0', msg: String.raw`$\infty - \infty$ est indéterminée : multiplie par la quantité conjuguée.` },
        { expr: '1', msg: String.raw`Après la quantité conjuguée, le dénominateur est $\sqrt{n^2+n} + n \sim 2n$, pas $n$.` }
      ],
      hint: String.raw`Multiplie et divise par $\sqrt{n^2 + n} + n$.`,
      explain: String.raw`$\sqrt{n^2+n} - n = \frac{n}{\sqrt{n^2 + n} + n} = \frac{1}{\sqrt{1 + 1/n} + 1} \to \frac12$.` },
    { id: 'm9-x-021', level: 2,
      prompt: String.raw`Calcule $\lim\limits_{n\to+\infty} \left(1 + \dfrac{2}{n}\right)^n$.`,
      answer: 'exp(2)', vars: [], check: 'value',
      mistakes: [
        { expr: '1', msg: String.raw`$1^\infty$ est une forme indéterminée : écris $\exp\left(n\ln(1 + \frac2n)\right)$.` },
        { expr: 'exp(1)', msg: String.raw`$\left(1 + \frac{x}{n}\right)^n \to \mathrm{e}^x$ : ici $x = 2$.` }
      ],
      hint: String.raw`$\left(1 + \frac2n\right)^n = \exp\left(n \ln\left(1 + \frac2n\right)\right)$ et $\ln(1 + \varepsilon) \sim \varepsilon$.`,
      explain: String.raw`$n\ln\left(1 + \frac2n\right) \sim n \cdot \frac2n = 2$, donc la limite vaut $\mathrm{e}^2$.` },
    { id: 'm9-x-022', level: 3,
      prompt: String.raw`Calcule $\lim\limits_{n\to+\infty} \left(1 - \dfrac{1}{n}\right)^{2n}$.`,
      answer: 'exp(-2)', vars: [], check: 'value',
      mistakes: [
        { expr: 'exp(-1)', msg: String.raw`N'oublie pas le facteur $2$ de l'exposant : $2n \ln(1 - \frac1n) \to -2$.` },
        { expr: '1', msg: String.raw`$1^\infty$ est indéterminée : passe à l'exponentielle.` },
        { expr: 'exp(2)', msg: String.raw`Signe : $\ln\left(1 - \frac1n\right) \sim -\frac1n$.` }
      ],
      hint: String.raw`$\exp\left(2n \ln\left(1 - \frac1n\right)\right)$.`,
      explain: String.raw`$2n\ln\left(1 - \frac1n\right) \sim 2n \cdot \left(-\frac1n\right) = -2$, donc la limite vaut $\mathrm{e}^{-2}$.` },
    { id: 'm9-x-023', level: 2,
      prompt: String.raw`Donne un équivalent simple (un seul terme, de la forme $\frac{1}{n^\alpha}$) de $u_n = \dfrac{n^2 + 1}{n^4 + n}$ quand $n \to +\infty$.`,
      answer: '1/n^2', vars: ['n'], check: 'expr', domain: [1, 9],
      mistakes: [
        { expr: '(n^2+1)/(n^4+n)', msg: String.raw`C'est la suite elle-même : on veut un équivalent <b>simple</b> (quotient des termes dominants).` },
        { expr: '1/n^3', msg: String.raw`Le terme dominant du dénominateur est $n^4$ (pas $n^4 \cdot n$) : $\frac{n^2}{n^4} = \frac{1}{n^2}$.` }
      ],
      hint: String.raw`Quotient des termes de plus haut degré.`,
      explain: String.raw`$u_n \sim \frac{n^2}{n^4} = \frac{1}{n^2}$. On en déduit que $\sum u_n$ converge (Riemann, $\alpha = 2$).` },
    { id: 'm9-x-024', level: 1,
      prompt: String.raw`Calcule $\sum_{n=0}^{+\infty} \left(\frac13\right)^n$.`,
      answer: '3/2', vars: [], check: 'value',
      mistakes: [
        { expr: '1/2', msg: String.raw`$\frac12$ est la somme à partir de $n = 1$ ; ici on commence à $n = 0$ (premier terme $1$).` }
      ],
      hint: String.raw`$\sum_{n\geq0} q^n = \frac{1}{1-q}$ pour $|q| \lt 1$.`,
      explain: String.raw`$\frac{1}{1 - 1/3} = \frac{1}{2/3} = \frac32$.` },
    { id: 'm9-x-025', level: 2,
      prompt: String.raw`Calcule $\sum_{n=1}^{+\infty} \left(\frac25\right)^n$.`,
      answer: '2/3', vars: [], check: 'value',
      mistakes: [
        { expr: '5/3', msg: String.raw`$\frac{1}{1 - 2/5} = \frac53$ est la somme depuis $n = 0$ ; ici le premier terme est $\frac25$.` }
      ],
      hint: String.raw`Premier terme sur $(1 - q)$.`,
      explain: String.raw`$\sum_{n\geq1} q^n = \frac{q}{1-q} = \frac{2/5}{3/5} = \frac23$.` },
    { id: 'm9-x-026', level: 3,
      prompt: String.raw`Calcule $\sum_{n=2}^{+\infty} \left(-\frac12\right)^n$.`,
      answer: '1/6', vars: [], check: 'value',
      mistakes: [
        { expr: '2/3', msg: String.raw`$\frac{1}{1 + 1/2} = \frac23$ est la somme depuis $n = 0$ ; ici le premier terme est $\left(-\frac12\right)^2 = \frac14$.` },
        { expr: '1/2', msg: String.raw`Attention au signe de la raison : $1 - q = 1 - \left(-\frac12\right) = \frac32$.` }
      ],
      hint: String.raw`$\sum_{n \geq p} q^n = \frac{q^p}{1-q}$ avec $q = -\frac12$.`,
      explain: String.raw`$\frac{(-1/2)^2}{1 + 1/2} = \frac{1/4}{3/2} = \frac16$. Vérification : $\frac23 - 1 + \frac12 = \frac16$.` },
    { id: 'm9-x-027', level: 3,
      prompt: String.raw`Calcule $\sum_{n=1}^{+\infty} \dfrac{1}{n(n+2)}$.`,
      answer: '3/4', vars: [], check: 'value',
      mistakes: [
        { expr: '1/2', msg: String.raw`L'écart est de $2$ : il reste <b>deux</b> termes en tête, $\frac11$ et $\frac12$.` },
        { expr: '3/2', msg: String.raw`Tu as oublié le facteur $\frac12$ : $\frac{1}{n(n+2)} = \frac12\left(\frac1n - \frac{1}{n+2}\right)$.` }
      ],
      hint: String.raw`$\frac{1}{n(n+2)} = \frac12\left(\frac1n - \frac{1}{n+2}\right)$, puis télescopage à écart $2$.`,
      explain: String.raw`$S_N = \frac12\left(1 + \frac12 - \frac{1}{N+1} - \frac{1}{N+2}\right) \to \frac12 \cdot \frac32 = \frac34$.` },
    { id: 'm9-x-028', level: 2,
      prompt: String.raw`On note $R_n = \sum_{k=n+1}^{+\infty} \left(\frac12\right)^k$ le reste d'ordre $n$ de la série géométrique de raison $\frac12$. Exprime $R_n$ en fonction de $n$.`,
      answer: '(1/2)^n', vars: ['n'], check: 'expr', domain: [1, 9],
      mistakes: [
        { expr: '(1/2)^(n+1)', msg: String.raw`C'est seulement le premier terme du reste ; il faut diviser par $1 - q = \frac12$.` },
        { expr: '2-(1/2)^n', msg: String.raw`C'est la somme partielle $S_n$, pas le reste $R_n = S - S_n$.` }
      ],
      hint: String.raw`Premier terme $\left(\frac12\right)^{n+1}$, raison $\frac12$.`,
      explain: String.raw`$R_n = \frac{(1/2)^{n+1}}{1 - 1/2} = \left(\frac12\right)^n \to 0$.` },
    { id: 'm9-x-029', level: 1,
      prompt: String.raw`Quelle est la nature de la série $\sum_{n \geq 1} \dfrac{1}{n^{3/2}}$ ? Réponds par un mot : « convergente » ou « divergente ».`,
      answer: 'convergente', check: 'text', accept: ['convergente', 'converge', 'cv', 'convergent', 'elle converge'],
      mistakes: [
        { text: 'divergente', msg: String.raw`Série de Riemann avec $\alpha = \frac32 > 1$ : elle converge.` },
        { text: 'diverge', msg: String.raw`Série de Riemann avec $\alpha = \frac32 > 1$ : elle converge.` }
      ],
      hint: String.raw`Série de Riemann : compare $\alpha$ à $1$.`,
      explain: String.raw`$\sum \frac{1}{n^\alpha}$ converge $\iff \alpha > 1$ ; ici $\alpha = 1{,}5$ : <b>convergente</b>.` },
    { id: 'm9-x-030', level: 2,
      prompt: String.raw`Pour $u_n = \dfrac{n}{3^n}$, calcule $L = \lim\limits_{n\to+\infty} \dfrac{u_{n+1}}{u_n}$ (règle de d'Alembert).`,
      answer: '1/3', vars: [], check: 'value',
      mistakes: [
        { expr: '1', msg: String.raw`$\frac{n+1}{n} \to 1$ mais il reste le facteur $\frac{3^n}{3^{n+1}} = \frac13$.` }
      ],
      hint: String.raw`$\frac{u_{n+1}}{u_n} = \frac{n+1}{n} \cdot \frac{3^n}{3^{n+1}}$.`,
      explain: String.raw`$\frac{u_{n+1}}{u_n} = \frac{n+1}{3n} \to \frac13 \lt 1$ : la série $\sum \frac{n}{3^n}$ converge.` },
    { id: 'm9-x-031', level: 3,
      prompt: String.raw`Pour $u_n = \dfrac{n!}{n^n}$, calcule $L = \lim\limits_{n\to+\infty} \dfrac{u_{n+1}}{u_n}$.`,
      answer: 'exp(-1)', vars: [], check: 'value',
      mistakes: [
        { expr: '1', msg: String.raw`$\left(\frac{n}{n+1}\right)^n$ est de la forme $1^\infty$ : elle tend vers $\mathrm{e}^{-1}$, pas $1$.` },
        { expr: '0', msg: String.raw`Après simplification il reste $\left(\frac{n}{n+1}\right)^n$, qui ne tend pas vers $0$.` }
      ],
      hint: String.raw`$\frac{u_{n+1}}{u_n} = \frac{(n+1)!}{n!} \cdot \frac{n^n}{(n+1)^{n+1}} = \left(\frac{n}{n+1}\right)^n$.`,
      explain: String.raw`$\left(\frac{n}{n+1}\right)^n = \exp\left(-n\ln\left(1 + \frac1n\right)\right) \to \mathrm{e}^{-1} \lt 1$ : $\sum \frac{n!}{n^n}$ converge.` },
    { id: 'm9-x-032', level: 1,
      prompt: String.raw`Rayon de convergence de la série entière $\sum_{n \geq 0} \dfrac{x^n}{3^n}$ ?`,
      answer: '3', vars: [], check: 'value',
      mistakes: [
        { expr: '1/3', msg: String.raw`$\left|\frac{a_{n+1}}{a_n}\right| \to L = \frac13$, et $R = \frac1L$.` }
      ],
      hint: String.raw`$a_n = \frac{1}{3^n}$ ; $R = \frac{1}{L}$.`,
      explain: String.raw`$\frac{a_{n+1}}{a_n} = \frac13$, donc $R = 3$. D'ailleurs $\sum \left(\frac{x}{3}\right)^n$ est géométrique : CV $\iff |x| \lt 3$.` },
    { id: 'm9-x-033', level: 2,
      prompt: String.raw`Rayon de convergence de $\sum_{n \geq 0} \dfrac{2^n}{n+1}\,x^n$ ?`,
      answer: '1/2', vars: [], check: 'value',
      mistakes: [
        { expr: '2', msg: String.raw`$L = 2$ est la limite du quotient des coefficients ; le rayon est $R = \frac{1}{L}$.` }
      ],
      hint: String.raw`$\left|\frac{a_{n+1}}{a_n}\right| = \frac{2(n+1)}{n+2}$.`,
      explain: String.raw`$\frac{2^{n+1}}{n+2} \cdot \frac{n+1}{2^n} = \frac{2(n+1)}{n+2} \to 2$, donc $R = \frac12$.` },
    { id: 'm9-x-034', level: 3,
      prompt: String.raw`Rayon de convergence de $\sum_{n \geq 0} \dfrac{x^{2n}}{4^n}$ ?`,
      answer: '2', vars: [], check: 'value',
      mistakes: [
        { expr: '4', msg: String.raw`La condition $\frac{x^2}{4} \lt 1$ porte sur $x^2$ : elle donne $|x| \lt 2$.` },
        { expr: '1/4', msg: String.raw`Applique d'Alembert au terme complet $u_n = \frac{x^{2n}}{4^n}$ : $\left|\frac{u_{n+1}}{u_n}\right| = \frac{x^2}{4}$.` }
      ],
      hint: String.raw`Série lacunaire : d'Alembert sur $u_n = \frac{x^{2n}}{4^n}$.`,
      explain: String.raw`$\left|\frac{u_{n+1}}{u_n}\right| = \frac{x^2}{4} \lt 1 \iff |x| \lt 2$ : $R = 2$.` },
    { id: 'm9-x-035', level: 2,
      prompt: String.raw`On écrit $\mathrm{e}^{2x} = \sum_{n \geq 0} a_n x^n$. Donne $a_n$ en fonction de $n$ (pour la factorielle, tape n!).`,
      answer: '2^n/n!', vars: ['n'], check: 'expr', domain: [1, 9],
      mistakes: [
        { expr: '2/n!', msg: String.raw`$(2x)^n = 2^n x^n$ : le $2$ est aussi élevé à la puissance $n$.` },
        { expr: '2^n/n', msg: String.raw`L'exponentielle fait intervenir $n!$, pas $n$.` }
      ],
      hint: String.raw`Remplace $x$ par $2x$ dans $\mathrm{e}^x = \sum \frac{x^n}{n!}$.`,
      explain: String.raw`$\mathrm{e}^{2x} = \sum \frac{(2x)^n}{n!} = \sum \frac{2^n}{n!}x^n$, donc $a_n = \frac{2^n}{n!}$.` },
    { id: 'm9-x-036', level: 3,
      prompt: String.raw`On écrit $\ln(1+x) = \sum_{n \geq 1} a_n x^n$ pour $|x| \lt 1$. Donne $a_n$ en fonction de $n$.`,
      answer: '(-1)^(n+1)/n', answers: ['-cos(pi*n)/n'], vars: ['n'], check: 'expr', domain: [1, 9],
      mistakes: [
        { expr: '(-1)^n/n', msg: String.raw`Signe : le premier coefficient $a_1$ vaut $+1$ ($\ln(1+x) \approx x$).` },
        { expr: '1/n', msg: String.raw`C'est le coefficient de $-\ln(1-x)$ ; pour $\ln(1+x)$ les signes alternent.` },
        { expr: '(-1)^(n+1)/n!', msg: String.raw`Pas de factorielle dans $\ln(1+x)$ : $x - \frac{x^2}{2} + \frac{x^3}{3} - \cdots$.` }
      ],
      hint: String.raw`Intègre $\frac{1}{1+t} = \sum (-1)^k t^k$ de $0$ à $x$.`,
      explain: String.raw`$\ln(1+x) = \sum_{k\geq0} \frac{(-1)^k x^{k+1}}{k+1} = \sum_{n\geq1} \frac{(-1)^{n+1}}{n} x^n$, donc $a_n = \frac{(-1)^{n+1}}{n}$.` },
    { id: 'm9-x-037', level: 2,
      prompt: String.raw`Pour $|x| \lt 1$, calcule $\sum_{n=0}^{+\infty} (-1)^n x^{2n}$ (expression en $x$).`,
      answer: '1/(1+x^2)', vars: ['x'], check: 'expr', domain: [-0.8, 0.8],
      mistakes: [
        { expr: '1/(1-x^2)', msg: String.raw`La raison est $-x^2$ : $1 - (-x^2) = 1 + x^2$.` },
        { expr: '1/(1+x)', msg: String.raw`Les puissances sont $x^{2n}$ : la raison est $-x^2$, pas $-x$.` }
      ],
      hint: String.raw`Série géométrique de raison $q = -x^2$.`,
      explain: String.raw`$\sum (-x^2)^n = \frac{1}{1 - (-x^2)} = \frac{1}{1+x^2}$. En intégrant on retrouve la série de $\arctan x$.` },
    { id: 'm9-x-038', level: 3,
      prompt: String.raw`Pour $|x| \lt 1$, calcule $\sum_{n=1}^{+\infty} \dfrac{x^n}{n}$ (expression en $x$).`,
      answer: '-ln(1-x)', vars: ['x'], check: 'expr', domain: [-0.8, 0.8],
      mistakes: [
        { expr: 'ln(1-x)', msg: String.raw`Signe : la dérivée de ta réponse doit être $\sum x^{n-1} = \frac{1}{1-x} > 0$.` },
        { expr: 'ln(1+x)', msg: String.raw`$\ln(1+x)$ a des signes alternés ; ici tous les termes sont positifs (pour $x > 0$).` }
      ],
      hint: String.raw`Dérive terme à terme : $\sum x^{n-1} = \frac{1}{1-x}$, puis primitive nulle en $0$.`,
      explain: String.raw`$f'(x) = \sum_{n\geq1} x^{n-1} = \frac{1}{1-x}$ et $f(0) = 0$, donc $f(x) = -\ln(1-x)$.` },
    { id: 'm9-x-039', level: 3,
      prompt: String.raw`Calcule $\sum_{n=1}^{+\infty} \dfrac{n}{2^n}$.`,
      answer: '2', vars: [], check: 'value',
      mistakes: [
        { expr: '4', msg: String.raw`$\frac{1}{(1-x)^2} = \sum n x^{n-1}$ : il faut multiplier par $x$ pour avoir $\sum n x^n$.` },
        { expr: '1', msg: String.raw`Ce n'est pas une série géométrique : le facteur $n$ change la somme. Utilise $\sum n x^n = \frac{x}{(1-x)^2}$.` }
      ],
      hint: String.raw`$\sum_{n\geq1} n x^n = \frac{x}{(1-x)^2}$ avec $x = \frac12$.`,
      explain: String.raw`En dérivant $\frac{1}{1-x} = \sum x^n$ : $\sum n x^{n-1} = \frac{1}{(1-x)^2}$, donc $\sum n x^n = \frac{x}{(1-x)^2}$. En $x = \frac12$ : $\frac{1/2}{1/4} = 2$.` },
    { id: 'm9-x-040', level: 3,
      prompt: String.raw`Calcule $\sum_{n=0}^{+\infty} \dfrac{(-1)^n}{2n+1} = 1 - \frac13 + \frac15 - \cdots$`,
      answer: 'pi/4', vars: [], check: 'value',
      mistakes: [
        { expr: 'ln(2)', msg: String.raw`$\ln 2 = 1 - \frac12 + \frac13 - \cdots$ (tous les entiers) ; ici seuls les impairs apparaissent.` },
        { expr: 'pi/2', msg: String.raw`$\arctan 1 = \frac{\pi}{4}$, pas $\frac\pi2$.` }
      ],
      hint: String.raw`$\arctan x = \sum \frac{(-1)^n x^{2n+1}}{2n+1}$, évaluée en $x = 1$.`,
      explain: String.raw`La série de $\arctan$ converge encore en $x = 1$ (série alternée) : $\sum \frac{(-1)^n}{2n+1} = \arctan 1 = \frac{\pi}{4}$ (formule de Leibniz).` }
  ]
});
