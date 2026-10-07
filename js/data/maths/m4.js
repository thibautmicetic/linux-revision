/* Maths — Chapitre 4 : Limites, équivalents et développements limités */
APP.registerChapter({
  subject: 'maths',
  id: 'm4', num: 4,
  title: 'Limites, équivalents et développements limités',
  subtitle: 'Formes indéterminées, Taylor, asymptotes',

  /* ===================================================== FICHES DE COURS */
  sections: [
    {
      id: 'm4-s-limites', title: 'Limites : définitions, opérations, comparaison',
      html: String.raw`
<h3>Définitions</h3>
<p>$\displaystyle\lim_{x\to a} f(x) = \ell$ signifie que $f(x)$ est aussi proche de $\ell$ qu'on veut dès que $x$ est assez proche de $a$ : $$\forall \varepsilon \gt 0,\ \exists \delta \gt 0,\ |x - a| \leq \delta \Rightarrow |f(x) - \ell| \leq \varepsilon.$$ $\displaystyle\lim_{x\to+\infty} f(x) = +\infty$ signifie : pour tout $A$, $f(x) \geq A$ dès que $x$ est assez grand. Une limite, si elle existe, est <b>unique</b>. On parle de limite à droite ($x \to a^+$) ou à gauche ($x \to a^-$).</p>
<h3>Limites usuelles</h3>
<ul>
<li>$x^n \to +\infty$ en $+\infty$ ($n \geq 1$) ; $\frac{1}{x^n} \to 0$ en $\pm\infty$ ; $\frac{1}{x} \to \pm\infty$ en $0^\pm$ ;</li>
<li>$\sqrt{x}$, $\ln x$, $\mathrm{e}^x \to +\infty$ en $+\infty$ ; $\mathrm{e}^x \to 0$ en $-\infty$ ; $\ln x \to -\infty$ en $0^+$ ;</li>
<li>$\arctan x \to \pm\frac{\pi}{2}$ et $\operatorname{th} x \to \pm 1$ en $\pm\infty$ ;</li>
<li>$\sin x$ et $\cos x$ n'ont <b>pas</b> de limite en $+\infty$.</li>
</ul>
<h3>Opérations</h3>
<p>Somme, produit, quotient : on « calcule avec les limites » ($\ell + \ell'$, $\ell\ell'$, $\frac{\ell}{\ell'}$ si $\ell' \neq 0$), avec les règles $\ell + \infty = \infty$, $\ell \times \infty = \infty$ (si $\ell \neq 0$, avec la règle des signes), $\frac{\ell}{\infty} = 0$, $\frac{\ell}{0^\pm} = \pm\infty$ (si $\ell \gt 0$). <b>Composition</b> : si $u(x) \to b$ quand $x \to a$ et $g(X) \to \ell$ quand $X \to b$, alors $g(u(x)) \to \ell$.</p>
<p>Les cas non couverts par ces règles sont les <b>formes indéterminées</b> (fiche suivante).</p>
<h3>Théorèmes de comparaison</h3>
<ul>
<li><b>Gendarmes</b> : si $g \leq f \leq h$ au voisinage de $a$ et si $g$ et $h$ tendent vers la même limite $\ell$, alors $f \to \ell$.</li>
<li><b>Minoration</b> : si $f \geq g$ et $g \to +\infty$, alors $f \to +\infty$ (majoration analogue pour $-\infty$).</li>
<li>Produit d'une fonction <b>bornée</b> par une fonction qui tend vers 0 : il tend vers 0.</li>
<li><b>Limite monotone</b> : une fonction croissante et majorée sur $[a, b[$ admet une limite finie en $b$.</li>
</ul>
<div class="callout tip"><b>Exemple corrigé</b> $\displaystyle\lim_{x\to+\infty} \frac{\sin x}{x}$ : on a $-\frac{1}{x} \leq \frac{\sin x}{x} \leq \frac{1}{x}$ et $\pm\frac{1}{x} \to 0$, donc la limite vaut $0$ (gendarmes). De même, en $0$, $\left|x \sin\frac{1}{x}\right| \leq |x|$, donc $x\sin\frac{1}{x} \to 0$.</div>
<div class="callout warn"><b>Pièges</b> $\frac{\sin x}{x} \to 0$ en $+\infty$ mais $\to 1$ en $0$ : toujours préciser où l'on cherche la limite. Le passage à la limite transforme les inégalités strictes en inégalités larges ($\frac{1}{x} \gt 0$ mais la limite vaut 0).</div>
<div class="callout key"><b>À retenir</b> Opérations sur les limites hors formes indéterminées ; gendarmes ; borné × (tend vers 0) → 0.</div>
`
    },
    {
      id: 'm4-s-fi', title: 'Formes indéterminées et limites remarquables',
      html: String.raw`
<h3>Les sept formes indéterminées</h3>
<div class="flow"><span>$\infty - \infty$</span><span>$0 \times \infty$</span><span>$\frac{\infty}{\infty}$</span><span>$\frac{0}{0}$</span><span>$1^\infty$</span><span>$0^0$</span><span>$\infty^0$</span></div>
<p>« Indéterminée » ne veut pas dire « n'existe pas » : il faut transformer l'expression pour conclure.</p>
<h3>Méthodes</h3>
<ul>
<li><b>Factoriser par le terme dominant</b> (polynômes, fractions rationnelles, croissances comparées) : $\frac{3x^2 - x + 1}{2x^2 + 5} = \frac{x^2\left(3 - \frac{1}{x} + \frac{1}{x^2}\right)}{x^2\left(2 + \frac{5}{x^2}\right)} \to \frac{3}{2}$ en $+\infty$. Une fraction rationnelle en $\pm\infty$ a la limite du quotient de ses termes de plus haut degré.</li>
<li><b>Simplifier</b> un facteur commun pour $\frac{0}{0}$ : $\frac{x^2 - 4}{x - 2} = x + 2 \to 4$ en 2.</li>
<li><b>Quantité conjuguée</b> pour les racines : $\sqrt{x^2 + 3x} - x = \frac{3x}{\sqrt{x^2+3x} + x} = \frac{3}{\sqrt{1 + 3/x} + 1} \to \frac{3}{2}$ en $+\infty$.</li>
<li><b>Taux d'accroissement</b> : $\displaystyle\lim_{x\to a}\frac{f(x) - f(a)}{x - a} = f'(a)$.</li>
<li><b>Forme exponentielle</b> pour $u^v$ : $u^v = \mathrm{e}^{v\ln u}$, puis on étudie la limite de $v\ln u$.</li>
<li><b>Équivalents</b> et <b>développements limités</b> (fiches suivantes) : les méthodes les plus puissantes.</li>
</ul>
<h3>Limites remarquables (en 0)</h3>
<p>Ce sont des taux d'accroissement en 0 :</p>
<table class="tbl">
<tr><th>Quotient</th><th>Limite en 0</th><th>Origine</th></tr>
<tr><td>$\frac{\sin x}{x}$</td><td>$1$</td><td>$\sin'(0) = \cos 0 = 1$</td></tr>
<tr><td>$\frac{\tan x}{x}$</td><td>$1$</td><td>$\tan'(0) = 1$</td></tr>
<tr><td>$\frac{1 - \cos x}{x^2}$</td><td>$\frac{1}{2}$</td><td>$1 - \cos x = 2\sin^2\frac{x}{2}$</td></tr>
<tr><td>$\frac{\mathrm{e}^x - 1}{x}$</td><td>$1$</td><td>$\exp'(0) = 1$</td></tr>
<tr><td>$\frac{\ln(1+x)}{x}$</td><td>$1$</td><td>$\ln'(1) = 1$</td></tr>
<tr><td>$\frac{(1+x)^\alpha - 1}{x}$</td><td>$\alpha$</td><td>dérivée de $(1+x)^\alpha$ en 0</td></tr>
<tr><td>$\frac{\arctan x}{x}$, $\frac{\operatorname{sh} x}{x}$</td><td>$1$</td><td>dérivées en 0</td></tr>
</table>
<p>Et en $+\infty$ : $\left(1 + \frac{a}{x}\right)^x \to \mathrm{e}^a$, car $x\ln\left(1 + \frac{a}{x}\right) \to a$.</p>
<div class="callout tip"><b>Exemple corrigé</b> $\displaystyle\lim_{x\to 0}\frac{\sin(5x)}{x} = \lim_{x\to 0} 5\cdot\frac{\sin(5x)}{5x} = 5$ (on pose $X = 5x \to 0$).<br>$\displaystyle\lim_{x\to+\infty}\left(1 + \frac{2}{x}\right)^x$ : forme $1^\infty$. On écrit $\exp\left(x\ln\left(1 + \frac{2}{x}\right)\right)$ ; avec $h = \frac{2}{x} \to 0$, $x\ln(1 + h) = 2\,\frac{\ln(1+h)}{h} \to 2$, donc la limite vaut $\mathrm{e}^2$.</div>
<div class="callout warn"><b>Pièges</b> $1^\infty$ n'est pas égal à 1 : $\left(1 + \frac{1}{n}\right)^n \to \mathrm{e}$. De même $\frac{0}{0}$ ne vaut ni 0 ni 1, et $\infty - \infty$ ne vaut pas 0.</div>
<div class="callout key"><b>À retenir</b> 7 formes indéterminées ; méthodes : factoriser, conjugué, taux d'accroissement, $u^v = \mathrm{e}^{v\ln u}$, équivalents, DL.</div>
`
    },
    {
      id: 'm4-s-continuite', title: 'Continuité et théorème des valeurs intermédiaires',
      html: String.raw`
<h3>Continuité</h3>
<p>$f$ est <b>continue en $a$</b> si $\displaystyle\lim_{x\to a} f(x) = f(a)$ ; continue sur $I$ si elle l'est en tout point de $I$. Graphiquement : on trace la courbe « sans lever le crayon ». Les fonctions usuelles (polynômes, fractions rationnelles, $\exp$, $\ln$, $\sin$, $\cos$, racines, puissances…) sont continues sur leur domaine ; sommes, produits, quotients (à dénominateur non nul) et composées de fonctions continues sont continues.</p>
<p>Contre-exemples : la partie entière $E$ est discontinue en chaque entier ; $x \mapsto \frac{1}{x}$ n'est pas définie en 0.</p>
<h3>Prolongement par continuité</h3>
<p>Si $f$ est définie au voisinage de $a$ <b>sauf en $a$</b> et si $\displaystyle\lim_{x\to a} f(x) = \ell$ est <b>finie</b>, on prolonge $f$ par continuité en posant $f(a) = \ell$.</p>
<div class="callout tip"><b>Exemple corrigé</b> $f(x) = \frac{\sin x}{x}$, définie sur $\mathbb{R}^*$, se prolonge par $f(0) = 1$. En revanche $x \mapsto \frac{1}{x}$ ne se prolonge pas en 0 (limites infinies), ni $x \mapsto \sin\frac{1}{x}$ (pas de limite).</div>
<h3>Théorème des valeurs intermédiaires (TVI)</h3>
<div class="callout info"><b>TVI</b> Si $f$ est <b>continue</b> sur un intervalle $[a, b]$, alors $f$ prend toute valeur comprise entre $f(a)$ et $f(b)$. En particulier, si $f(a)$ et $f(b)$ sont de signes contraires, l'équation $f(x) = 0$ admet <b>au moins une</b> solution dans $[a, b]$.</div>
<p><b>Corollaire (bijection)</b> : si de plus $f$ est <b>strictement monotone</b>, cette solution est <b>unique</b>.</p>
<p><b>Image d'un segment</b> : une fonction continue sur un segment $[a, b]$ est bornée et <b>atteint</b> ses bornes : $f([a,b]) = [m, M]$.</p>
<p><b>Méthode</b> (existence d'une racine) : vérifier la continuité, calculer les valeurs aux bornes, constater le changement de signe ; pour l'unicité, montrer la stricte monotonie (signe de $f'$). La <b>dichotomie</b> donne ensuite une valeur approchée : on coupe l'intervalle en deux et on garde la moitié où le signe change.</p>
<div class="callout tip"><b>Exemple corrigé</b> $f(x) = x^3 + x - 1$ est continue, $f(0) = -1 \lt 0$ et $f(1) = 1 \gt 0$ : il existe $c \in \left]0, 1\right[$ tel que $f(c) = 0$. Comme $f'(x) = 3x^2 + 1 \gt 0$, $f$ est strictement croissante : $c$ est unique. Dichotomie : $f(0{,}5) = -0{,}375 \lt 0$ donc $c \in \left]0{,}5 ; 1\right[$ ; $f(0{,}75) \approx 0{,}17 \gt 0$ donc $c \in \left]0{,}5 ; 0{,}75\right[$, etc.</div>
<div class="callout warn"><b>Pièges</b> Le TVI donne l'<b>existence</b>, pas l'unicité. Il exige la continuité sur un <b>intervalle</b> : $\frac{1}{x}$ change de signe entre $-1$ et $1$ sans jamais s'annuler.</div>
<div class="callout key"><b>À retenir</b> Continue + changement de signe ⇒ au moins une racine ; + strictement monotone ⇒ exactement une.</div>
`
    },
    {
      id: 'm4-s-equivalents', title: 'Fonctions équivalentes',
      html: String.raw`
<h3>Définition</h3>
<p>On dit que $f$ est <b>équivalente</b> à $g$ au voisinage de $a$, et on note $f \underset{a}{\sim} g$, si $$\lim_{x\to a}\frac{f(x)}{g(x)} = 1$$ (pour $g$ ne s'annulant pas au voisinage de $a$, sauf peut-être en $a$). Deux fonctions équivalentes ont la <b>même limite</b> (si elle existe) et le même signe au voisinage de $a$. Un équivalent donne la « forme » de la fonction près de $a$.</p>
<h3>Équivalents usuels en 0</h3>
<table class="tbl">
<tr><th>Fonction</th><th>Équivalent en 0</th></tr>
<tr><td>$\sin x$, $\tan x$, $\arcsin x$, $\arctan x$, $\operatorname{sh} x$, $\operatorname{th} x$</td><td>$x$</td></tr>
<tr><td>$\mathrm{e}^x - 1$, $\ln(1+x)$</td><td>$x$</td></tr>
<tr><td>$1 - \cos x$, $\operatorname{ch} x - 1$</td><td>$\frac{x^2}{2}$</td></tr>
<tr><td>$(1+x)^\alpha - 1$ ($\alpha \neq 0$)</td><td>$\alpha x$</td></tr>
<tr><td>$\sqrt{1+x} - 1$</td><td>$\frac{x}{2}$</td></tr>
</table>
<p>On peut remplacer $x$ par toute fonction $u(x) \to 0$ : $\sin(u) \sim u$, $\ln(1 + u) \sim u$, etc. En 1 : $\ln x \sim x - 1$.</p>
<p><b>Polynômes</b> : en 0, un polynôme est équivalent à son terme non nul de <b>plus bas</b> degré ; en $\pm\infty$, à son terme de <b>plus haut</b> degré. Ex. $3x^2 - 5x + x^4 \sim -5x$ en 0 et $\sim x^4$ en $\pm\infty$.</p>
<h3>Règles de calcul</h3>
<div class="grid2">
<div class="mini"><h4>Autorisé</h4><p>Produit : $f_1 \sim g_1$ et $f_2 \sim g_2$ ⇒ $f_1 f_2 \sim g_1 g_2$.<br>Quotient : $\frac{f_1}{f_2} \sim \frac{g_1}{g_2}$.<br>Puissance fixe : $f^\alpha \sim g^\alpha$.<br>Substitution d'une fonction $u(x) \to 0$ dans un équivalent en 0.</p></div>
<div class="mini"><h4>Interdit</h4><p><b>Somme</b> : en général $f_1 + f_2 \not\sim g_1 + g_2$.<br><b>Composition</b> par une fonction : $f \sim g \not\Rightarrow \mathrm{e}^f \sim \mathrm{e}^g$.<br>Écrire $f \sim 0$ (sauf si $f$ est nulle au voisinage de $a$).</p></div>
</div>
<p><b>Méthode</b> pour une limite : remplacer chaque <b>facteur</b> par un équivalent simple, puis simplifier.</p>
<div class="callout tip"><b>Exemple corrigé</b> En 0 : $\ln(1+2x) \sim 2x$, $\sin(3x) \sim 3x$ et $1 - \cos x \sim \frac{x^2}{2}$, donc $$\frac{\ln(1 + 2x)\sin(3x)}{1 - \cos x} \sim \frac{6x^2}{x^2/2} = 12, \quad\text{d'où une limite égale à } 12.$$</div>
<div class="callout warn"><b>Pièges</b> Somme : $\sin x \sim x$, mais $\sin x - x$ n'est pas équivalent à $x - x = 0$ ; en fait $\sin x - x \sim -\frac{x^3}{6}$ (il faut un DL). Composition : $x^2 + x \sim x^2$ en $+\infty$, mais $\frac{\mathrm{e}^{x^2 + x}}{\mathrm{e}^{x^2}} = \mathrm{e}^x \to +\infty$.</div>
<div class="callout key"><b>À retenir</b> $f \sim g \iff \frac{f}{g} \to 1$. Produits, quotients, puissances : oui. Sommes et compositions : non (passer aux DL).</div>
`
    },
    {
      id: 'm4-s-taylor', title: 'Négligeabilité, Taylor-Young et développements limités',
      html: String.raw`
<h3>Notation « petit o »</h3>
<p>$f = o(g)$ au voisinage de $a$ (« $f$ est négligeable devant $g$ ») si $\frac{f}{g} \to 0$. Ex. en 0 : $x^3 = o(x^2)$ ; en $+\infty$ : $x^2 = o(\mathrm{e}^x)$, $\ln x = o(x)$. Lien avec les équivalents : $f \sim g \iff f = g + o(g)$.</p>
<p>Règles en 0 (pour $n \leq m$) : $o(x^m) = o(x^n)$ ; $o(x^n) + o(x^n) = o(x^n)$ ; $\lambda\,o(x^n) = o(x^n)$ ; $x^p\,o(x^n) = o(x^{n+p})$ ; $o(x^n)\,o(x^m) = o(x^{n+m})$.</p>
<h3>Développement limité</h3>
<p>$f$ admet un <b>développement limité à l'ordre $n$ en 0</b> s'il existe des réels $a_0, \dots, a_n$ tels que $$f(x) = a_0 + a_1x + a_2x^2 + \dots + a_nx^n + o(x^n).$$ Le polynôme $a_0 + a_1x + \dots + a_nx^n$ est la <b>partie régulière</b>. Le DL est <b>unique</b>. Si $f$ est paire, sa partie régulière ne contient que des puissances paires ; si $f$ est impaire, que des puissances impaires. On peut toujours <b>tronquer</b> un DL à un ordre inférieur.</p>
<h3>Formule de Taylor-Young</h3>
<div class="callout info"><b>Théorème</b> Si $f$ est $n$ fois dérivable en $a$ (par exemple de classe $\mathcal{C}^n$ au voisinage de $a$), alors $$f(x) = \sum_{k=0}^{n}\frac{f^{(k)}(a)}{k!}(x-a)^k + o\left((x-a)^n\right) = f(a) + f'(a)(x - a) + \frac{f''(a)}{2}(x-a)^2 + \dots + \frac{f^{(n)}(a)}{n!}(x-a)^n + o\left((x-a)^n\right).$$</div>
<p>Interprétation : à l'ordre 1, on retrouve la <b>tangente</b> $y = f(a) + f'(a)(x - a)$ ; les ordres suivants donnent une approximation polynomiale de plus en plus fine, mais seulement <b>au voisinage</b> de $a$ (aucune information loin de $a$).</p>
<p>Conséquences : $f$ admet un DL à l'ordre 0 en $a$ si et seulement si elle est continue (ou prolongeable par continuité) en $a$ ; un DL à l'ordre 1 si et seulement si elle est dérivable en $a$, avec $a_0 = f(a)$ et $a_1 = f'(a)$.</p>
<div class="callout tip"><b>Exemple corrigé</b> DL de $\mathrm{e}^x$ à l'ordre 3 en 0 : toutes les dérivées valent $\mathrm{e}^0 = 1$, donc $\mathrm{e}^x = 1 + x + \frac{x^2}{2} + \frac{x^3}{6} + o(x^3)$. Pour $\cos$ : $\cos 0 = 1$, $\cos'(0) = 0$, $\cos''(0) = -1$, $\cos^{(3)}(0) = 0$, $\cos^{(4)}(0) = 1$, d'où $\cos x = 1 - \frac{x^2}{2} + \frac{x^4}{24} + o(x^4)$.</div>
<p>L'exponentielle et ses polynômes de Taylor d'ordres 1, 2 et 3 en 0 :</p>
<div class="widget" data-w="plot" data-f="exp(x);1+x;1+x+x^2/2;1+x+x^2/2+x^3/6" data-x="-3;2.5" data-y="-1;6"></div>
<div class="callout warn"><b>Pièges</b> Ne pas oublier les factorielles : le coefficient de $x^k$ est $\frac{f^{(k)}(0)}{k!}$, pas $f^{(k)}(0)$. Un DL n'a de sens qu'au voisinage du point : $\mathrm{e}^x \approx 1 + x$ est très faux pour $x = 10$.</div>
<div class="callout key"><b>À retenir</b> Taylor-Young : $f(a + h) = \sum_{k=0}^{n}\frac{f^{(k)}(a)}{k!}h^k + o(h^n)$. Le DL est unique et respecte la parité.</div>
`
    },
    {
      id: 'm4-s-dl-usuels', title: 'Les développements limités usuels',
      html: String.raw`
<p>À connaître <b>par cœur</b> (tous en 0) :</p>
<table class="tbl">
<tr><th>Fonction</th><th>Développement limité en 0</th></tr>
<tr><td>$\mathrm{e}^x$</td><td>$1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \dots + \frac{x^n}{n!} + o(x^n)$</td></tr>
<tr><td>$\frac{1}{1-x}$</td><td>$1 + x + x^2 + \dots + x^n + o(x^n)$</td></tr>
<tr><td>$\frac{1}{1+x}$</td><td>$1 - x + x^2 - \dots + (-1)^nx^n + o(x^n)$</td></tr>
<tr><td>$\ln(1+x)$</td><td>$x - \frac{x^2}{2} + \frac{x^3}{3} - \dots + (-1)^{n-1}\frac{x^n}{n} + o(x^n)$</td></tr>
<tr><td>$\ln(1-x)$</td><td>$-x - \frac{x^2}{2} - \frac{x^3}{3} - \dots - \frac{x^n}{n} + o(x^n)$</td></tr>
<tr><td>$(1+x)^\alpha$</td><td>$1 + \alpha x + \frac{\alpha(\alpha-1)}{2!}x^2 + \dots + \frac{\alpha(\alpha-1)\cdots(\alpha-n+1)}{n!}x^n + o(x^n)$</td></tr>
<tr><td>$\sqrt{1+x}$</td><td>$1 + \frac{x}{2} - \frac{x^2}{8} + \frac{x^3}{16} + o(x^3)$</td></tr>
<tr><td>$\frac{1}{\sqrt{1+x}}$</td><td>$1 - \frac{x}{2} + \frac{3x^2}{8} + o(x^2)$</td></tr>
<tr><td>$\sin x$</td><td>$x - \frac{x^3}{3!} + \frac{x^5}{5!} - \dots + (-1)^n\frac{x^{2n+1}}{(2n+1)!} + o(x^{2n+2})$</td></tr>
<tr><td>$\cos x$</td><td>$1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \dots + (-1)^n\frac{x^{2n}}{(2n)!} + o(x^{2n+1})$</td></tr>
<tr><td>$\tan x$</td><td>$x + \frac{x^3}{3} + \frac{2x^5}{15} + o(x^6)$</td></tr>
<tr><td>$\arctan x$</td><td>$x - \frac{x^3}{3} + \frac{x^5}{5} - \dots + (-1)^n\frac{x^{2n+1}}{2n+1} + o(x^{2n+2})$</td></tr>
<tr><td>$\operatorname{sh} x$</td><td>$x + \frac{x^3}{3!} + \frac{x^5}{5!} + \dots + \frac{x^{2n+1}}{(2n+1)!} + o(x^{2n+2})$</td></tr>
<tr><td>$\operatorname{ch} x$</td><td>$1 + \frac{x^2}{2!} + \frac{x^4}{4!} + \dots + \frac{x^{2n}}{(2n)!} + o(x^{2n+1})$</td></tr>
<tr><td>$\operatorname{th} x$</td><td>$x - \frac{x^3}{3} + o(x^4)$</td></tr>
<tr><td>$\arcsin x$</td><td>$x + \frac{x^3}{6} + o(x^4)$</td></tr>
</table>
<h3>Moyens mnémotechniques</h3>
<ul>
<li>$\operatorname{ch}$ et $\operatorname{sh}$ sont les parties paire et impaire de $\mathrm{e}^x$ (tous les signes $+$) ; $\cos$ et $\sin$ ont les mêmes termes avec des signes alternés.</li>
<li>$\ln(1+x)$ s'obtient en primitivant terme à terme $\frac{1}{1+x}$ ; $\arctan x$ en primitivant $\frac{1}{1+x^2} = 1 - x^2 + x^4 - \dots$</li>
<li>$\frac{1}{1-x}$ : somme géométrique ; $\frac{1}{1+x}$ : remplacer $x$ par $-x$.</li>
<li>Parité : $\sin$, $\tan$, $\arctan$, $\operatorname{sh}$ sont impaires (puissances impaires) ; $\cos$ et $\operatorname{ch}$ sont paires.</li>
</ul>
<p>Comparaison de $\sin x$ avec ses approximations $x$ et $x - \frac{x^3}{6}$ :</p>
<div class="widget" data-w="plot" data-f="sin(x);x;x-x^3/6" data-x="-4;4" data-y="-2;2"></div>
<div class="callout tip"><b>Exemple corrigé</b> Primitiver un DL : $\frac{1}{1+x} = 1 - x + x^2 + o(x^2)$ donne $\ln(1+x) = x - \frac{x^2}{2} + \frac{x^3}{3} + o(x^3)$ (la constante est $\ln 1 = 0$). Substituer : $\mathrm{e}^{-x^2} = 1 - x^2 + \frac{x^4}{2} + o(x^4)$ (on remplace $u$ par $-x^2$ dans $\mathrm{e}^u = 1 + u + \frac{u^2}{2} + o(u^2)$).</div>
<div class="callout warn"><b>Pièges</b> Signes de $\ln(1+x)$ : $+x$, $-\frac{x^2}{2}$, $+\frac{x^3}{3}$, et pas de factorielle. $\tan x = x + \frac{x^3}{3} + \dots$ (signe $+$, coefficient $\frac{1}{3}$), à ne pas confondre avec $\arctan x = x - \frac{x^3}{3} + \dots$ ni avec $\sin x = x - \frac{x^3}{6} + \dots$</div>
<div class="callout key"><b>À retenir</b> $\mathrm{e}^x$, $\ln(1+x)$, $(1+x)^\alpha$, $\frac{1}{1-x}$, $\sin$, $\cos$ : la base, d'où l'on déduit presque tout le reste.</div>
`
    },
    {
      id: 'm4-s-dl-operations', title: 'Opérations sur les développements limités',
      html: String.raw`
<h3>Somme et produit</h3>
<p>Somme : on additionne les parties régulières (au même ordre). Produit : on multiplie les parties régulières et on <b>ne garde que les termes de degré $\leq n$</b> ; le reste part dans le $o(x^n)$.</p>
<div class="callout tip"><b>Exemple corrigé (produit)</b> DL à l'ordre 3 de $\mathrm{e}^x\sin x$ : $$\left(1 + x + \frac{x^2}{2} + \frac{x^3}{6}\right)\left(x - \frac{x^3}{6}\right) = x + x^2 + \frac{x^3}{2} - \frac{x^3}{6} + o(x^3) = x + x^2 + \frac{x^3}{3} + o(x^3).$$</div>
<p><b>Astuce d'ordre</b> : si le DL d'un facteur commence au degré $p$ (il « commence par $x^p$ »), il suffit de développer l'autre facteur à l'ordre $n - p$.</p>
<h3>Quotient</h3>
<p>Pour $\frac{1}{g}$ avec $g(0) \neq 0$ : on écrit $g = g(0)(1 + u)$ avec $u \to 0$, puis on utilise $\frac{1}{1+u} = 1 - u + u^2 - \dots$</p>
<div class="callout tip"><b>Exemple corrigé (quotient)</b> $\frac{1}{\cos x}$ à l'ordre 4 : $\cos x = 1 - u$ avec $u = \frac{x^2}{2} - \frac{x^4}{24} + o(x^4)$. Alors $\frac{1}{1-u} = 1 + u + u^2 + o(u^2)$ et $u^2 = \frac{x^4}{4} + o(x^4)$, donc $$\frac{1}{\cos x} = 1 + \frac{x^2}{2} + \left(\frac{1}{4} - \frac{1}{24}\right)x^4 + o(x^4) = 1 + \frac{x^2}{2} + \frac{5x^4}{24} + o(x^4).$$ Puis $\tan x = \sin x \cdot \frac{1}{\cos x}$ redonne $x + \frac{x^3}{3} + o(x^4)$.</div>
<h3>Composition</h3>
<p>Pour $g(u(x))$, il faut que $u(x) \to 0$ (on utilise le DL de $g$ <b>en 0</b>). On substitue le DL de $u$ dans celui de $g$ et on tronque. Si $u(x) \to c \neq 0$, on se ramène à 0, par exemple $\mathrm{e}^{u} = \mathrm{e}^{c}\,\mathrm{e}^{u - c}$.</p>
<div class="callout tip"><b>Exemple corrigé (composition)</b> $\ln(1 + \sin x)$ à l'ordre 3 : $u = \sin x = x - \frac{x^3}{6} + o(x^3) \to 0$, $u^2 = x^2 + o(x^3)$, $u^3 = x^3 + o(x^3)$. Donc $\ln(1+u) = u - \frac{u^2}{2} + \frac{u^3}{3} + o(u^3) = x - \frac{x^2}{2} + \left(-\frac{1}{6} + \frac{1}{3}\right)x^3 + o(x^3) = x - \frac{x^2}{2} + \frac{x^3}{6} + o(x^3)$.<br>$\mathrm{e}^{\cos x}$ à l'ordre 2 : $\cos x \to 1 \neq 0$, donc on écrit $\mathrm{e}^{\cos x} = \mathrm{e}\cdot\mathrm{e}^{\cos x - 1}$ avec $\cos x - 1 = -\frac{x^2}{2} + o(x^2) \to 0$ : $\mathrm{e}^{\cos x} = \mathrm{e}\left(1 - \frac{x^2}{2}\right) + o(x^2)$.</div>
<h3>DL en un point $a \neq 0$ et en l'infini</h3>
<p>On pose $h = x - a \to 0$ et on cherche le DL de $h \mapsto f(a + h)$ en 0 ; le résultat s'écrit en puissances de $(x - a)$. En $\pm\infty$, on pose $h = \frac{1}{x} \to 0$.</p>
<div class="callout tip"><b>Exemple corrigé</b> $\ln x$ en 1 : $\ln(1 + h) = h - \frac{h^2}{2} + o(h^2)$, donc $\ln x = (x - 1) - \frac{(x-1)^2}{2} + o\left((x-1)^2\right)$.<br>$\sqrt{x}$ en 4 : $\sqrt{4 + h} = 2\sqrt{1 + \frac{h}{4}} = 2\left(1 + \frac{h}{8} - \frac{h^2}{128}\right) + o(h^2)$, donc $\sqrt{x} = 2 + \frac{x - 4}{4} - \frac{(x-4)^2}{64} + o\left((x-4)^2\right)$.</div>
<div class="callout warn"><b>Pièges</b> Composer avec $u \not\to 0$ (par exemple utiliser $\mathrm{e}^u = 1 + u + \dots$ avec $u = \cos x \to 1$) est faux. Dans un produit, tous les termes de degré $\gt n$ vont dans le $o(x^n)$ : n'en garder aucun. Pour un quotient, factoriser d'abord le terme constant.</div>
<div class="callout key"><b>À retenir</b> Produit : tronquer. Quotient : $\frac{1}{1+u}$. Composée : $u \to 0$ obligatoire. Point $a$ : $h = x - a$ ; infini : $h = \frac{1}{x}$.</div>
`
    },
    {
      id: 'm4-s-applications', title: 'Applications : limites, tangentes, asymptotes',
      html: String.raw`
<h3>Calcul de limites et d'équivalents</h3>
<p>Quand les équivalents ne suffisent pas (sommes qui se compensent), on développe chaque morceau à un ordre suffisant : le <b>premier terme non nul</b> du DL donne un équivalent.</p>
<div class="callout tip"><b>Exemple corrigé</b> $\displaystyle\lim_{x\to 0}\frac{x - \sin x}{x^3}$ : $x - \sin x = x - \left(x - \frac{x^3}{6} + o(x^3)\right) = \frac{x^3}{6} + o(x^3)$, donc $x - \sin x \sim \frac{x^3}{6}$ et la limite vaut $\frac{1}{6}$.</div>
<h3>Position de la courbe par rapport à sa tangente</h3>
<p>Si $f(x) = a_0 + a_1(x - a) + a_p(x - a)^p + o\left((x-a)^p\right)$ avec $a_p \neq 0$ ($p \geq 2$ est le degré du premier terme non nul après l'ordre 1) :</p>
<ul>
<li>la tangente en $a$ a pour équation $y = a_0 + a_1(x - a)$ ;</li>
<li>$f(x) - \left(a_0 + a_1(x-a)\right) \sim a_p(x - a)^p$ : son signe donne la position ;</li>
<li>$p$ <b>pair</b> : la courbe reste du même côté (au-dessus si $a_p \gt 0$, en dessous si $a_p \lt 0$) ; si de plus $a_1 = 0$, c'est un <b>extremum local</b> (minimum si $a_p \gt 0$, maximum si $a_p \lt 0$) ;</li>
<li>$p$ <b>impair</b> : la courbe <b>traverse</b> sa tangente, c'est un <b>point d'inflexion</b>.</li>
</ul>
<div class="callout tip"><b>Exemple corrigé</b> $f(x) = \frac{\mathrm{e}^x}{1+x}$ en 0 : $\left(1 + x + \frac{x^2}{2}\right)\left(1 - x + x^2\right) = 1 + \frac{x^2}{2} + o(x^2)$. Tangente $y = 1$ (horizontale) et $f(x) - 1 \sim \frac{x^2}{2} \geq 0$ : la courbe est au-dessus, minimum local en 0.</div>
<h3>Asymptotes obliques</h3>
<p>En $+\infty$ (ou $-\infty$), si $f(x) = ax + b + \frac{c}{x^k} + o\left(\frac{1}{x^k}\right)$ avec $c \neq 0$ et $k \geq 1$, alors :</p>
<ul>
<li>la droite $y = ax + b$ est <b>asymptote</b> à la courbe ($f(x) - (ax + b) \to 0$) ;</li>
<li>le signe de $\frac{c}{x^k}$ donne la position de la courbe par rapport à l'asymptote.</li>
</ul>
<p><b>Méthode</b> : factoriser par $x$, poser $h = \frac{1}{x}$ et faire un DL en $h \to 0$. Sans DL : $a = \lim\frac{f(x)}{x}$, puis $b = \lim\left(f(x) - ax\right)$.</p>
<div class="callout tip"><b>Exemple corrigé</b> $f(x) = \sqrt{x^2 + 2x}$ en $+\infty$ : $f(x) = x\sqrt{1 + \frac{2}{x}} = x\left(1 + \frac{1}{x} - \frac{1}{2x^2} + o\left(\frac{1}{x^2}\right)\right) = x + 1 - \frac{1}{2x} + o\left(\frac{1}{x}\right)$. Asymptote $y = x + 1$, et la courbe est <b>en dessous</b> car $-\frac{1}{2x} \lt 0$.</div>
<div class="widget" data-w="plot" data-f="sqrt(x^2+2*x);x+1" data-x="0;6" data-y="0;7"></div>
<div class="callout warn"><b>Pièges</b> En $-\infty$, $\sqrt{x^2} = |x| = -x$ : il faut factoriser par $|x|$. Avoir $\frac{f(x)}{x} \to a$ ne suffit pas : il faut aussi que $f(x) - ax$ ait une limite finie (contre-exemple : $x + \sqrt{x}$).</div>
<div class="callout key"><b>À retenir</b> Tangente et position : premier terme non nul après l'ordre 1. Asymptote : DL en $h = \frac{1}{x}$ jusqu'au premier terme qui tend vers 0.</div>
`
    },
    {
      id: 'm4-s-memo', title: 'Mémo : stratégie et tableaux',
      html: String.raw`
<h3>Stratégie face à une limite</h3>
<div class="flow"><span>Forme déterminée ? Conclure</span><span>Terme dominant, conjugué</span><span>Équivalents (produits, quotients)</span><span>DL (sommes, compensations)</span><span>$u^v = \mathrm{e}^{v\ln u}$</span></div>
<h3>Équivalents usuels en 0</h3>
<p>$\sin x \sim \tan x \sim \arctan x \sim \operatorname{sh} x \sim \ln(1+x) \sim \mathrm{e}^x - 1 \sim x$ ; $1 - \cos x \sim \operatorname{ch} x - 1 \sim \frac{x^2}{2}$ ; $(1+x)^\alpha - 1 \sim \alpha x$.</p>
<h3>DL usuels en 0 (à l'ordre 3 ou 4)</h3>
<table class="tbl">
<tr><th>Fonction</th><th>Partie régulière</th></tr>
<tr><td>$\mathrm{e}^x$</td><td>$1 + x + \frac{x^2}{2} + \frac{x^3}{6}$</td></tr>
<tr><td>$\ln(1+x)$</td><td>$x - \frac{x^2}{2} + \frac{x^3}{3}$</td></tr>
<tr><td>$\frac{1}{1-x}$</td><td>$1 + x + x^2 + x^3$</td></tr>
<tr><td>$(1+x)^\alpha$</td><td>$1 + \alpha x + \frac{\alpha(\alpha-1)}{2}x^2$</td></tr>
<tr><td>$\sin x$ / $\operatorname{sh} x$</td><td>$x \mp \frac{x^3}{6}$</td></tr>
<tr><td>$\cos x$ / $\operatorname{ch} x$</td><td>$1 \mp \frac{x^2}{2} + \frac{x^4}{24}$</td></tr>
<tr><td>$\tan x$ / $\arctan x$</td><td>$x \pm \frac{x^3}{3}$</td></tr>
</table>
<h3>Lire un DL $f(a + h) = a_0 + a_1h + a_ph^p + o(h^p)$</h3>
<ul>
<li>$a_0 = f(a)$ (limite, prolongement), $a_1 = f'(a)$, tangente $y = a_0 + a_1(x - a)$ ;</li>
<li>$p$ pair : courbe d'un seul côté de la tangente (extremum si $a_1 = 0$) ; $p$ impair : inflexion.</li>
</ul>
<h3>Règles des petits o (en 0)</h3>
<p>$o(x^n) + o(x^m) = o(x^{\min(n,m)})$ ; $x^p\,o(x^n) = o(x^{n+p})$ ; $o(x^n)\,o(x^m) = o(x^{n+m})$.</p>
<div class="callout key"><b>Réflexes</b> Équivalents : jamais dans une somme ni dans une exponentielle. DL : ordre suffisant, $u \to 0$ pour composer, tronquer les produits. Asymptote : $h = \frac{1}{x}$.</div>
`
    }
  ],

  /* ===================================================== FORMULAIRE */
  formulas: [
    { id: 'm4-fo-lim-sin', name: 'Limite de sin x / x', tex: String.raw`\lim_{x\to 0}\frac{\sin x}{x} = 1`, note: String.raw`Et $\frac{\tan x}{x} \to 1$.` },
    { id: 'm4-fo-lim-cos', name: 'Limite de (1 − cos x) / x²', tex: String.raw`\lim_{x\to 0}\frac{1 - \cos x}{x^2} = \frac{1}{2}` },
    { id: 'm4-fo-lim-exp', name: 'Limite de (eˣ − 1) / x', tex: String.raw`\lim_{x\to 0}\frac{\mathrm{e}^x - 1}{x} = 1` },
    { id: 'm4-fo-lim-ln', name: 'Limite de ln(1 + x) / x', tex: String.raw`\lim_{x\to 0}\frac{\ln(1+x)}{x} = 1` },
    { id: 'm4-fo-lim-pow', name: 'Limite de ((1 + x)^α − 1) / x', tex: String.raw`\lim_{x\to 0}\frac{(1+x)^\alpha - 1}{x} = \alpha` },
    { id: 'm4-fo-lim-ea', name: 'Limite exponentielle', tex: String.raw`\lim_{x\to+\infty}\left(1 + \frac{a}{x}\right)^x = \mathrm{e}^a`, note: String.raw`Forme $1^\infty$ : passer par $\exp\left(x\ln\left(1 + \frac{a}{x}\right)\right)$.` },
    { id: 'm4-fo-uv', name: 'Forme exponentielle', tex: String.raw`u(x)^{v(x)} = \mathrm{e}^{v(x)\ln u(x)}`, note: String.raw`Pour les formes $1^\infty$, $0^0$, $\infty^0$.` },
    { id: 'm4-fo-taux', name: 'Taux d\'accroissement', tex: String.raw`\lim_{x\to a}\frac{f(x) - f(a)}{x - a} = f'(a)` },
    { id: 'm4-fo-gendarmes', name: 'Théorème des gendarmes', tex: String.raw`g \leq f \leq h \ \text{ et } \ \lim g = \lim h = \ell \ \Rightarrow\ \lim f = \ell` },
    { id: 'm4-fo-continuite', name: 'Continuité en a', tex: String.raw`\lim_{x\to a} f(x) = f(a)` },
    { id: 'm4-fo-tvi', name: 'Théorème des valeurs intermédiaires', tex: String.raw`f \text{ continue sur } [a,b],\ f(a)f(b) \lt 0 \ \Rightarrow\ \exists c \in \left]a, b\right[,\ f(c) = 0`, note: String.raw`Unicité si $f$ est de plus strictement monotone.` },
    { id: 'm4-fo-equiv-def', name: 'Définition des équivalents', tex: String.raw`f \underset{a}{\sim} g \iff \lim_{x\to a}\frac{f(x)}{g(x)} = 1 \iff f = g + o(g)` },
    { id: 'm4-fo-eq-x', name: 'Équivalents en x', tex: String.raw`\sin x \sim \tan x \sim \arcsin x \sim \arctan x \sim \operatorname{sh} x \sim x`, note: String.raw`En 0.` },
    { id: 'm4-fo-eq-expln', name: 'Équivalents de exp et ln', tex: String.raw`\mathrm{e}^x - 1 \underset{0}{\sim} x, \qquad \ln(1+x) \underset{0}{\sim} x`, note: String.raw`Et $\ln x \underset{1}{\sim} x - 1$.` },
    { id: 'm4-fo-eq-cos', name: 'Équivalents de 1 − cos et ch − 1', tex: String.raw`1 - \cos x \underset{0}{\sim} \frac{x^2}{2}, \qquad \operatorname{ch} x - 1 \underset{0}{\sim} \frac{x^2}{2}` },
    { id: 'm4-fo-eq-pow', name: 'Équivalent de (1 + x)^α − 1', tex: String.raw`(1+x)^\alpha - 1 \underset{0}{\sim} \alpha x`, note: String.raw`Ex. $\sqrt{1+x} - 1 \sim \frac{x}{2}$.` },
    { id: 'm4-fo-eq-poly', name: 'Équivalent d\'un polynôme', tex: String.raw`a_px^p + \dots + a_nx^n \ \underset{0}{\sim}\ a_px^p, \qquad \underset{\pm\infty}{\sim}\ a_nx^n`, note: String.raw`Avec $a_p \neq 0$ (plus bas degré) et $a_n \neq 0$ (plus haut degré).` },
    { id: 'm4-fo-o-def', name: 'Négligeabilité', tex: String.raw`f = o(g) \iff \lim_{x\to a}\frac{f(x)}{g(x)} = 0` },
    { id: 'm4-fo-o-rules', name: 'Règles des petits o (en 0)', tex: String.raw`o(x^n) + o(x^m) = o\left(x^{\min(n,m)}\right), \quad x^p\,o(x^n) = o(x^{n+p})` },
    { id: 'm4-fo-taylor', name: 'Formule de Taylor-Young', tex: String.raw`f(x) = \sum_{k=0}^{n}\frac{f^{(k)}(a)}{k!}(x-a)^k + o\left((x-a)^n\right)`, note: String.raw`Si $f$ est $n$ fois dérivable en $a$.` },
    { id: 'm4-fo-dl-exp', name: 'DL de exp', tex: String.raw`\mathrm{e}^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \dots + \frac{x^n}{n!} + o(x^n)` },
    { id: 'm4-fo-dl-geo', name: 'DL de 1 / (1 − x)', tex: String.raw`\frac{1}{1-x} = 1 + x + x^2 + \dots + x^n + o(x^n)` },
    { id: 'm4-fo-dl-geo2', name: 'DL de 1 / (1 + x)', tex: String.raw`\frac{1}{1+x} = 1 - x + x^2 - \dots + (-1)^nx^n + o(x^n)` },
    { id: 'm4-fo-dl-ln', name: 'DL de ln(1 + x)', tex: String.raw`\ln(1+x) = x - \frac{x^2}{2} + \frac{x^3}{3} - \dots + (-1)^{n-1}\frac{x^n}{n} + o(x^n)` },
    { id: 'm4-fo-dl-ln2', name: 'DL de ln(1 − x)', tex: String.raw`\ln(1-x) = -x - \frac{x^2}{2} - \frac{x^3}{3} - \dots - \frac{x^n}{n} + o(x^n)` },
    { id: 'm4-fo-dl-pow', name: 'DL de (1 + x)^α', tex: String.raw`(1+x)^\alpha = 1 + \alpha x + \frac{\alpha(\alpha-1)}{2!}x^2 + \dots + \frac{\alpha(\alpha-1)\cdots(\alpha-n+1)}{n!}x^n + o(x^n)` },
    { id: 'm4-fo-dl-sqrt', name: 'DL de √(1 + x)', tex: String.raw`\sqrt{1+x} = 1 + \frac{x}{2} - \frac{x^2}{8} + \frac{x^3}{16} + o(x^3)` },
    { id: 'm4-fo-dl-isqrt', name: 'DL de 1 / √(1 + x)', tex: String.raw`\frac{1}{\sqrt{1+x}} = 1 - \frac{x}{2} + \frac{3x^2}{8} + o(x^2)` },
    { id: 'm4-fo-dl-sin', name: 'DL de sin', tex: String.raw`\sin x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \dots + (-1)^n\frac{x^{2n+1}}{(2n+1)!} + o(x^{2n+2})` },
    { id: 'm4-fo-dl-cos', name: 'DL de cos', tex: String.raw`\cos x = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \dots + (-1)^n\frac{x^{2n}}{(2n)!} + o(x^{2n+1})` },
    { id: 'm4-fo-dl-tan', name: 'DL de tan', tex: String.raw`\tan x = x + \frac{x^3}{3} + \frac{2x^5}{15} + o(x^6)` },
    { id: 'm4-fo-dl-arctan', name: 'DL de arctan', tex: String.raw`\arctan x = x - \frac{x^3}{3} + \frac{x^5}{5} - \dots + (-1)^n\frac{x^{2n+1}}{2n+1} + o(x^{2n+2})` },
    { id: 'm4-fo-dl-sh', name: 'DL de sh', tex: String.raw`\operatorname{sh} x = x + \frac{x^3}{3!} + \frac{x^5}{5!} + \dots + \frac{x^{2n+1}}{(2n+1)!} + o(x^{2n+2})` },
    { id: 'm4-fo-dl-ch', name: 'DL de ch', tex: String.raw`\operatorname{ch} x = 1 + \frac{x^2}{2!} + \frac{x^4}{4!} + \dots + \frac{x^{2n}}{(2n)!} + o(x^{2n+1})` },
    { id: 'm4-fo-dl-arcsin', name: 'DL de arcsin et th', tex: String.raw`\arcsin x = x + \frac{x^3}{6} + o(x^4), \qquad \operatorname{th} x = x - \frac{x^3}{3} + o(x^4)` },
    { id: 'm4-fo-dl-a', name: 'DL en a ≠ 0', tex: String.raw`f(x) = f(a + h), \quad h = x - a \to 0`, note: String.raw`En $\pm\infty$ : $h = \frac{1}{x} \to 0$.` },
    { id: 'm4-fo-dl-compo', name: 'DL d\'une composée', tex: String.raw`g\big(u(x)\big) \text{ avec } u(x) \xrightarrow[x\to 0]{} 0 : \text{ substituer le DL de } u \text{ dans celui de } g`, note: String.raw`Si $u \to c \neq 0$, se ramener à $u - c \to 0$.` },
    { id: 'm4-fo-inv', name: 'DL d\'un inverse', tex: String.raw`\frac{1}{1+u} = 1 - u + u^2 - u^3 + o(u^3) \quad (u \to 0)` },
    { id: 'm4-fo-tangente', name: 'Tangente et position', tex: String.raw`f(x) = a_0 + a_1(x-a) + a_p(x-a)^p + o\left((x-a)^p\right)`, note: String.raw`Tangente $y = a_0 + a_1(x-a)$ ; position donnée par le signe de $a_p(x-a)^p$ ($p$ impair : inflexion).` },
    { id: 'm4-fo-asymptote', name: 'Asymptote oblique', tex: String.raw`f(x) = ax + b + \frac{c}{x^k} + o\left(\frac{1}{x^k}\right) \ \Rightarrow\ y = ax + b \text{ asymptote}`, note: String.raw`Position : signe de $\frac{c}{x^k}$.` }
  ],

  /* ===================================================== FLASHCARDS */
  flashcards: [
    { id: 'm4-f-fi', front: String.raw`Les sept formes indéterminées`, back: String.raw`$\infty - \infty$, $0 \times \infty$, $\frac{\infty}{\infty}$, $\frac{0}{0}$, $1^\infty$, $0^0$, $\infty^0$. Les trois dernières se traitent avec $u^v = \mathrm{e}^{v\ln u}$.` },
    { id: 'm4-f-conjugue', front: String.raw`Méthode de la quantité conjuguée`, back: String.raw`Pour $\sqrt{A} - \sqrt{B}$ (forme $\infty - \infty$ ou $\frac{0}{0}$) : multiplier et diviser par $\sqrt{A} + \sqrt{B}$, ce qui donne $\frac{A - B}{\sqrt{A} + \sqrt{B}}$.` },
    { id: 'm4-f-uv', front: String.raw`Méthode pour $u(x)^{v(x)}$`, back: String.raw`Écrire $u^v = \mathrm{e}^{v\ln u}$, chercher la limite $L$ de $v\ln u$ (souvent avec $\ln(1 + w) \sim w$), puis conclure : $u^v \to \mathrm{e}^L$.` },
    { id: 'm4-f-tvi', front: String.raw`Théorème des valeurs intermédiaires`, back: String.raw`$f$ continue sur $[a, b]$ prend toutes les valeurs entre $f(a)$ et $f(b)$. Si $f(a)f(b) \lt 0$ : au moins une racine dans $\left]a, b\right[$ ; unique si $f$ est strictement monotone.` },
    { id: 'm4-f-prolongement', front: String.raw`Prolongement par continuité`, back: String.raw`Si $f$ n'est pas définie en $a$ mais $\lim_{x\to a} f(x) = \ell$ <b>finie</b>, on pose $f(a) = \ell$ : la fonction prolongée est continue en $a$. Ex. $\frac{\sin x}{x}$ prolongée par 1 en 0.` },
    { id: 'm4-f-equiv', front: String.raw`Définition de $f \sim g$`, back: String.raw`$f \underset{a}{\sim} g \iff \frac{f(x)}{g(x)} \to 1$ quand $x \to a$, autrement dit $f = g + o(g)$. Deux fonctions équivalentes ont même limite et même signe au voisinage de $a$.` },
    { id: 'm4-f-equiv-regles', front: String.raw`Équivalents : ce qui est permis ou interdit`, back: String.raw`Permis : produits, quotients, puissances fixes, substitution $u \to 0$. Interdit : sommes/différences, composition par une fonction ($\mathrm{e}^f$, $\ln f$…), écrire $f \sim 0$.` },
    { id: 'm4-f-equiv-usuels', front: String.raw`Équivalents usuels en 0`, back: String.raw`$\sin x$, $\tan x$, $\arctan x$, $\operatorname{sh} x$, $\ln(1+x)$, $\mathrm{e}^x - 1$ : tous $\sim x$. $1 - \cos x \sim \frac{x^2}{2}$. $(1+x)^\alpha - 1 \sim \alpha x$.` },
    { id: 'm4-f-o', front: String.raw`Notation $o$ et règles`, back: String.raw`$f = o(g)$ si $\frac{f}{g} \to 0$. En 0 : $o(x^n) + o(x^m) = o(x^{\min})$, $x^p o(x^n) = o(x^{n+p})$, $o(x^n)o(x^m) = o(x^{n+m})$.` },
    { id: 'm4-f-taylor', front: String.raw`Formule de Taylor-Young`, back: String.raw`Si $f$ est $n$ fois dérivable en $a$ : $f(x) = \sum_{k=0}^{n}\frac{f^{(k)}(a)}{k!}(x-a)^k + o\left((x-a)^n\right)$. Information <b>locale</b> uniquement.` },
    { id: 'm4-f-dl-prop', front: String.raw`Propriétés d'un DL`, back: String.raw`Unicité ; troncature possible ; $f$ paire ⇒ seulement des puissances paires, $f$ impaire ⇒ seulement des puissances impaires ; $a_0 = f(a)$ et $a_1 = f'(a)$.` },
    { id: 'm4-f-dl-produit', front: String.raw`Méthode : DL d'un produit`, back: String.raw`Multiplier les parties régulières et ne garder que les termes de degré $\leq n$. Si un facteur commence par $x^p$, développer l'autre à l'ordre $n - p$ suffit.` },
    { id: 'm4-f-dl-compo', front: String.raw`Méthode : DL d'une composée $g(u(x))$`, back: String.raw`Vérifier $u(x) \to 0$, prendre le DL de $g$ en 0, y substituer le DL de $u$, développer et tronquer. Si $u \to c \neq 0$ : écrire par exemple $\mathrm{e}^u = \mathrm{e}^c\mathrm{e}^{u-c}$.` },
    { id: 'm4-f-dl-a', front: String.raw`Méthode : DL en $a \neq 0$ ou en $\pm\infty$`, back: String.raw`Poser $h = x - a$ (ou $h = \frac{1}{x}$ en l'infini), faire le DL en $h \to 0$, puis revenir à $x$ : le résultat s'écrit en puissances de $(x - a)$.` },
    { id: 'm4-f-tangente', front: String.raw`Position de la courbe par rapport à sa tangente`, back: String.raw`$f(x) = a_0 + a_1(x-a) + a_p(x-a)^p + o$ : tangente $y = a_0 + a_1(x-a)$ ; $p$ pair : du côté du signe de $a_p$ (extremum si $a_1 = 0$) ; $p$ impair : inflexion.` },
    { id: 'm4-f-asymptote', front: String.raw`Méthode : asymptote oblique`, back: String.raw`Factoriser par $x$, poser $h = \frac{1}{x}$, DL : $f(x) = ax + b + \frac{c}{x} + o\left(\frac{1}{x}\right)$. Asymptote $y = ax + b$ ; position selon le signe de $\frac{c}{x}$.` }
  ],

  /* ===================================================== QCM */
  quiz: [
    { id: 'm4-q-001', level: 1, q: String.raw`$\displaystyle\lim_{x\to 0}\frac{\sin x}{x} = $`,
      choices: [String.raw`$0$`, String.raw`$1$`, String.raw`$+\infty$`, String.raw`elle n'existe pas`], answer: 1,
      explain: String.raw`C'est le taux d'accroissement de $\sin$ en 0 : $\sin'(0) = \cos 0 = 1$.`,
      why: { 0: String.raw`$\sin x \to 0$ mais $x$ aussi : forme $\frac{0}{0}$, pas 0.`, 2: String.raw`Le quotient reste borné : $|\sin x| \leq |x|$.`, 3: String.raw`La limite existe, des deux côtés (la fonction est paire).` } },
    { id: 'm4-q-002', level: 1, q: String.raw`Laquelle n'est <b>pas</b> une forme indéterminée ?`,
      choices: [String.raw`$\infty - \infty$`, String.raw`$0 \times \infty$`, String.raw`$(+\infty) + (+\infty)$`, String.raw`$1^\infty$`], answer: 2,
      explain: String.raw`$(+\infty) + (+\infty) = +\infty$ sans ambiguïté.`,
      why: { 0: String.raw`$x - x \to 0$ mais $x^2 - x \to +\infty$ : le résultat dépend des fonctions.`, 1: String.raw`$x \cdot \frac{1}{x} \to 1$ mais $x^2 \cdot \frac{1}{x} \to +\infty$.`, 3: String.raw`$\left(1 + \frac{1}{x}\right)^x \to \mathrm{e}$, pas 1 : c'est indéterminé.` } },
    { id: 'm4-q-003', level: 1, q: String.raw`$\displaystyle\lim_{x\to+\infty}\left(1 + \frac{1}{x}\right)^x = $`,
      choices: [String.raw`$1$`, String.raw`$+\infty$`, String.raw`$\mathrm{e}$`, String.raw`$0$`], answer: 2,
      explain: String.raw`$\left(1 + \frac{1}{x}\right)^x = \exp\left(x\ln\left(1 + \frac{1}{x}\right)\right)$ et $x\ln\left(1 + \frac{1}{x}\right) \to 1$.`,
      why: { 0: String.raw`$1^\infty$ est indéterminée : la base tend vers 1 mais l'exposant explose.`, 1: String.raw`La base se rapproche de 1 assez vite pour que la limite reste finie.`, 3: String.raw`La base est supérieure à 1, donc la puissance aussi.` } },
    { id: 'm4-q-004', level: 1, q: String.raw`$\displaystyle\lim_{x\to 0}\frac{1 - \cos x}{x^2} = $`,
      choices: [String.raw`$0$`, String.raw`$\frac{1}{2}$`, String.raw`$1$`, String.raw`$2$`], answer: 1,
      explain: String.raw`$1 - \cos x \sim \frac{x^2}{2}$ en 0.`,
      why: { 0: String.raw`Le numérateur tend vers 0 aussi vite que $\frac{x^2}{2}$, comme le dénominateur.`, 2: String.raw`Il manque le $\frac{1}{2}$ : $1 - \cos x \sim \frac{x^2}{2}$.`, 3: String.raw`C'est la limite de l'inverse $\frac{x^2}{1 - \cos x}$.` } },
    { id: 'm4-q-005', level: 2, q: String.raw`$\displaystyle\lim_{x\to+\infty}\left(\sqrt{x+1} - \sqrt{x}\right) = $`,
      choices: [String.raw`$1$`, String.raw`$+\infty$`, String.raw`$\frac{1}{2}$`, String.raw`$0$`], answer: 3,
      explain: String.raw`Conjugué : $\sqrt{x+1} - \sqrt{x} = \frac{1}{\sqrt{x+1} + \sqrt{x}} \to 0$.`,
      why: { 0: String.raw`$\sqrt{x+1} - \sqrt{x} \neq \sqrt{1}$ : la racine n'est pas linéaire.`, 1: String.raw`Forme $\infty - \infty$ : les deux racines sont très proches l'une de l'autre.`, 2: String.raw`$\frac{1}{2}$ serait la limite de $\sqrt{x}\left(\sqrt{x+1} - \sqrt{x}\right)$.` } },
    { id: 'm4-q-006', level: 1, q: String.raw`$f \underset{a}{\sim} g$ signifie :`,
      choices: [String.raw`$f(x) - g(x) \to 0$`, String.raw`$\frac{f(x)}{g(x)} \to 1$`, String.raw`$f$ et $g$ ont la même limite en $a$`, String.raw`$f(a) = g(a)$`], answer: 1,
      explain: String.raw`C'est la définition ; de façon équivalente $f = g + o(g)$.`,
      why: { 0: String.raw`$x$ et $x^2$ en 0 : la différence tend vers 0, mais ils ne sont pas équivalents ($\frac{x^2}{x} \to 0$).`, 2: String.raw`$x$ et $x^2$ tendent tous deux vers 0 en 0 sans être équivalents.`, 3: String.raw`L'équivalence décrit le comportement au voisinage de $a$, pas une valeur.` } },
    { id: 'm4-q-007', level: 1, q: String.raw`Un équivalent simple de $\ln(1 + x)$ en 0 est :`,
      choices: [String.raw`$1 + x$`, String.raw`$\ln x$`, String.raw`$x$`, String.raw`$x^2$`], answer: 2,
      explain: String.raw`$\frac{\ln(1+x)}{x} \to 1$ (limite remarquable).`,
      why: { 0: String.raw`$1 + x \to 1$ alors que $\ln(1+x) \to 0$.`, 1: String.raw`$\ln x \to -\infty$ en 0.`, 3: String.raw`$\frac{\ln(1+x)}{x^2} \sim \frac{1}{x}$ ne tend pas vers 1.` } },
    { id: 'm4-q-008', level: 2, q: String.raw`Si $f_1 \sim g_1$ et $f_2 \sim g_2$ en $a$, on peut affirmer en général :`,
      choices: [String.raw`$f_1 + f_2 \sim g_1 + g_2$`, String.raw`$f_1 f_2 \sim g_1 g_2$`, String.raw`$\mathrm{e}^{f_1} \sim \mathrm{e}^{g_1}$`, String.raw`$f_1 - f_2 \sim g_1 - g_2$`], answer: 1,
      explain: String.raw`$\frac{f_1f_2}{g_1g_2} = \frac{f_1}{g_1}\cdot\frac{f_2}{g_2} \to 1 \times 1 = 1$.`,
      why: { 0: String.raw`Faux : en 0, $x + x^2 \sim x$ et $-x \sim -x$, mais la somme vaut $x^2$, pas « 0 ».`, 2: String.raw`Faux : $x^2 + x \sim x^2$ en $+\infty$ mais $\frac{\mathrm{e}^{x^2+x}}{\mathrm{e}^{x^2}} = \mathrm{e}^x \to +\infty$.`, 3: String.raw`Faux, même problème que pour les sommes (compensations).` } },
    { id: 'm4-q-009', level: 1, q: String.raw`Équivalent en 0 de $3x^2 - 5x + x^4$ :`,
      choices: [String.raw`$x^4$`, String.raw`$-5x$`, String.raw`$3x^2$`, String.raw`$5x$`], answer: 1,
      explain: String.raw`En 0, un polynôme est équivalent à son terme de plus <b>bas</b> degré.`,
      why: { 0: String.raw`C'est l'équivalent en $\pm\infty$ (plus haut degré).`, 2: String.raw`En 0, $x^2$ est négligeable devant $x$.`, 3: String.raw`Attention au signe : le coefficient de $x$ est $-5$.` } },
    { id: 'm4-q-010', level: 1, q: String.raw`Équivalent en $+\infty$ de $3x^2 - 5x + x^4$ :`,
      choices: [String.raw`$-5x$`, String.raw`$3x^2$`, String.raw`$1$`, String.raw`$x^4$`], answer: 3,
      explain: String.raw`En $\pm\infty$, un polynôme est équivalent à son terme de plus <b>haut</b> degré.`,
      why: { 0: String.raw`C'est l'équivalent en 0.`, 1: String.raw`$3x^2$ est négligeable devant $x^4$ en $+\infty$.`, 2: String.raw`Le polynôme tend vers $+\infty$ : il ne peut pas être équivalent à 1.` } },
    { id: 'm4-q-011', level: 1, q: String.raw`Partie régulière du DL de $\mathrm{e}^x$ à l'ordre 3 en 0 :`,
      choices: [String.raw`$1 + x + x^2 + x^3$`, String.raw`$1 + x + \frac{x^2}{2} + \frac{x^3}{6}$`, String.raw`$x + \frac{x^2}{2} + \frac{x^3}{6}$`, String.raw`$1 + x + \frac{x^2}{2} + \frac{x^3}{3}$`], answer: 1,
      explain: String.raw`Toutes les dérivées valent 1 en 0 : coefficients $\frac{1}{k!}$.`,
      why: { 0: String.raw`C'est le DL de $\frac{1}{1-x}$ : il manque les factorielles.`, 2: String.raw`Il manque le terme constant $\mathrm{e}^0 = 1$.`, 3: String.raw`$3! = 6$, pas 3.` } },
    { id: 'm4-q-012', level: 1, q: String.raw`Partie régulière du DL de $\ln(1+x)$ à l'ordre 3 en 0 :`,
      choices: [String.raw`$x + \frac{x^2}{2} + \frac{x^3}{3}$`, String.raw`$x - \frac{x^2}{2} + \frac{x^3}{3}$`, String.raw`$x - \frac{x^2}{2} + \frac{x^3}{6}$`, String.raw`$1 + x - \frac{x^2}{2} + \frac{x^3}{3}$`], answer: 1,
      explain: String.raw`On primitive $\frac{1}{1+x} = 1 - x + x^2 + o(x^2)$ terme à terme.`,
      why: { 0: String.raw`Les signes alternent ; tous les signes $+$ correspondent à $-\ln(1-x)$.`, 2: String.raw`Pas de factorielle dans $\ln(1+x)$ : les coefficients sont $\frac{(-1)^{k-1}}{k}$.`, 3: String.raw`$\ln 1 = 0$ : pas de terme constant.` } },
    { id: 'm4-q-013', level: 1, q: String.raw`Partie régulière du DL de $\cos x$ à l'ordre 4 en 0 :`,
      choices: [String.raw`$1 + \frac{x^2}{2} + \frac{x^4}{24}$`, String.raw`$1 - \frac{x^2}{2} + \frac{x^4}{12}$`, String.raw`$x - \frac{x^3}{6}$`, String.raw`$1 - \frac{x^2}{2} + \frac{x^4}{24}$`], answer: 3,
      explain: String.raw`$\cos x = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} + o(x^4)$, avec $4! = 24$.`,
      why: { 0: String.raw`C'est $\operatorname{ch} x$ : pour $\cos$, les signes alternent.`, 1: String.raw`$4! = 24$, pas 12.`, 2: String.raw`C'est le DL de $\sin x$ (impaire) ; $\cos$ est paire.` } },
    { id: 'm4-q-014', level: 2, q: String.raw`Partie régulière du DL de $(1+x)^\alpha$ à l'ordre 2 en 0 :`,
      choices: [String.raw`$1 + \alpha x + \frac{\alpha(\alpha-1)}{2}x^2$`, String.raw`$1 + \alpha x + \alpha(\alpha-1)x^2$`, String.raw`$1 + \alpha x + \frac{\alpha^2}{2}x^2$`, String.raw`$1 + \alpha x + \frac{\alpha(\alpha+1)}{2}x^2$`], answer: 0,
      explain: String.raw`Taylor : la dérivée seconde de $(1+x)^\alpha$ en 0 vaut $\alpha(\alpha-1)$, divisée par $2!$.`,
      why: { 1: String.raw`Oubli du $2!$ de la formule de Taylor.`, 2: String.raw`La dérivée seconde vaut $\alpha(\alpha-1)$, pas $\alpha^2$.`, 3: String.raw`L'exposant diminue à chaque dérivation : $\alpha(\alpha-1)$, pas $\alpha(\alpha+1)$.` } },
    { id: 'm4-q-015', level: 2, q: String.raw`Partie régulière du DL de $\sqrt{1+x}$ à l'ordre 2 en 0 :`,
      choices: [String.raw`$1 + \frac{x}{2} + \frac{x^2}{8}$`, String.raw`$1 - \frac{x}{2} + \frac{3x^2}{8}$`, String.raw`$1 + \frac{x}{2} - \frac{x^2}{8}$`, String.raw`$1 + \frac{x}{2} - \frac{x^2}{4}$`], answer: 2,
      explain: String.raw`Avec $\alpha = \frac{1}{2}$ : $\frac{\alpha(\alpha-1)}{2} = \frac{\frac{1}{2}\cdot\left(-\frac{1}{2}\right)}{2} = -\frac{1}{8}$.`,
      why: { 0: String.raw`Le coefficient de $x^2$ est négatif : $\alpha - 1 = -\frac{1}{2}$.`, 1: String.raw`C'est le DL de $\frac{1}{\sqrt{1+x}}$ ($\alpha = -\frac{1}{2}$).`, 3: String.raw`Oubli du $2!$ : $\frac{1}{2}\cdot\left(-\frac{1}{2}\right) = -\frac{1}{4}$ doit encore être divisé par 2.` } },
    { id: 'm4-q-016', level: 1, q: String.raw`Partie régulière du DL de $\tan x$ à l'ordre 3 en 0 :`,
      choices: [String.raw`$x - \frac{x^3}{3}$`, String.raw`$x + \frac{x^3}{3}$`, String.raw`$x + \frac{x^3}{6}$`, String.raw`$x - \frac{x^3}{6}$`], answer: 1,
      explain: String.raw`$\tan x = x + \frac{x^3}{3} + o(x^3)$ (on peut le retrouver par $\sin x \cdot \frac{1}{\cos x}$).`,
      why: { 0: String.raw`C'est le DL de $\arctan x$.`, 2: String.raw`C'est le DL de $\operatorname{sh} x$.`, 3: String.raw`C'est le DL de $\sin x$.` } },
    { id: 'm4-q-017', level: 1, q: String.raw`Partie régulière du DL de $\arctan x$ à l'ordre 3 en 0 :`,
      choices: [String.raw`$x + \frac{x^3}{3}$`, String.raw`$x - \frac{x^3}{6}$`, String.raw`$x - \frac{x^3}{3}$`, String.raw`$1 - x^2$`], answer: 2,
      explain: String.raw`On primitive $\frac{1}{1+x^2} = 1 - x^2 + o(x^2)$, avec $\arctan 0 = 0$.`,
      why: { 0: String.raw`C'est le DL de $\tan x$.`, 1: String.raw`C'est le DL de $\sin x$.`, 3: String.raw`C'est le DL de la dérivée $\frac{1}{1+x^2}$, pas de $\arctan$.` } },
    { id: 'm4-q-018', level: 1, q: String.raw`$f$ est continue sur $[a, b]$ avec $f(a) \lt 0 \lt f(b)$. On peut affirmer :`,
      choices: [String.raw`$f$ est strictement croissante`, String.raw`$f$ s'annule exactement une fois sur $\left]a, b\right[$`, String.raw`$f$ s'annule au moins une fois sur $\left]a, b\right[$`, String.raw`$f$ est dérivable`], answer: 2,
      explain: String.raw`C'est le théorème des valeurs intermédiaires : $0$ est entre $f(a)$ et $f(b)$.`,
      why: { 0: String.raw`Rien n'impose la monotonie : la courbe peut osciller.`, 1: String.raw`L'unicité demande en plus la stricte monotonie.`, 3: String.raw`Continue n'implique pas dérivable (penser à $|x|$).` } },
    { id: 'm4-q-019', level: 1, q: String.raw`Pour prolonger $f(x) = \frac{\sin x}{x}$ par continuité en 0, on pose $f(0) = $`,
      choices: [String.raw`$0$`, String.raw`$1$`, String.raw`c'est impossible`, String.raw`$\pi$`], answer: 1,
      explain: String.raw`$\lim_{x\to 0}\frac{\sin x}{x} = 1$, limite finie.`,
      why: { 0: String.raw`$\sin 0 = 0$, mais la limite du quotient vaut 1.`, 2: String.raw`La limite est finie (1) : le prolongement est possible.`, 3: String.raw`Aucun lien avec $\pi$.` } },
    { id: 'm4-q-020', level: 2, q: String.raw`La formule de Taylor-Young à l'ordre $n$ en $a$ s'applique dès que :`,
      choices: [String.raw`$f$ est continue en $a$`, String.raw`$f$ est $n$ fois dérivable en $a$`, String.raw`$f$ est bornée`, String.raw`$f$ est un polynôme`], answer: 1,
      explain: String.raw`C'est l'hypothèse du théorème (par exemple $f$ de classe $\mathcal{C}^n$ au voisinage de $a$).`,
      why: { 0: String.raw`La continuité ne donne qu'un DL à l'ordre 0.`, 2: String.raw`Être bornée ne dit rien des dérivées.`, 3: String.raw`Les polynômes vérifient la formule, mais ce n'est pas nécessaire.` } },
    { id: 'm4-q-021', level: 2, q: String.raw`Au voisinage de 0, $o(x^2) + o(x^3) = $`,
      choices: [String.raw`$o(x^3)$`, String.raw`$o(x^2)$`, String.raw`$o(x^5)$`, String.raw`$0$`], answer: 1,
      explain: String.raw`$o(x^3)$ est aussi un $o(x^2)$ ; on garde la précision la plus faible.`,
      why: { 0: String.raw`$o(x^2)$ peut valoir $x^{2{,}5}$, qui n'est pas un $o(x^3)$.`, 2: String.raw`On n'additionne pas les exposants pour une somme.`, 3: String.raw`Deux quantités négligeables ne s'annulent pas.` } },
    { id: 'm4-q-022', level: 2, q: String.raw`Au voisinage de 0, l'égalité la plus précise est $x\cdot o(x^2) = \dots$`,
      choices: [String.raw`$o(x)$`, String.raw`$o(x^3)$`, String.raw`$x^3$`, String.raw`$o(x^2)$`], answer: 1,
      explain: String.raw`Si $\frac{\varepsilon(x)}{x^2} \to 0$, alors $\frac{x\,\varepsilon(x)}{x^3} \to 0$ : $x^p o(x^n) = o(x^{n+p})$.`,
      why: { 0: String.raw`Vrai, mais beaucoup moins précis.`, 2: String.raw`Un $o$ n'est pas égal à une puissance précise.`, 3: String.raw`Vrai mais moins précis : on gagne un degré, $o(x^3)$.` } },
    { id: 'm4-q-023', level: 3, q: String.raw`DL à l'ordre 3 en 0 de $\mathrm{e}^{\sin x}$ (partie régulière) :`,
      choices: [String.raw`$1 + x + \frac{x^2}{2} + \frac{x^3}{6}$`, String.raw`$1 + x + \frac{x^2}{2}$`, String.raw`$1 + x - \frac{x^2}{2}$`, String.raw`$1 + x + \frac{x^2}{2} - \frac{x^3}{6}$`], answer: 1,
      explain: String.raw`$u = \sin x = x - \frac{x^3}{6} + o(x^3)$ et $\mathrm{e}^u = 1 + u + \frac{u^2}{2} + \frac{u^3}{6} + o(u^3) = 1 + x - \frac{x^3}{6} + \frac{x^2}{2} + \frac{x^3}{6} + o(x^3)$ : le terme en $x^3$ s'annule.`,
      why: { 0: String.raw`C'est $\mathrm{e}^x$ : remplacer $\sin x$ par $x$ oublie le $-\frac{x^3}{6}$, qui compte à l'ordre 3.`, 2: String.raw`Signe : $\frac{u^2}{2} = \frac{x^2}{2} + o(x^3) \gt 0$.`, 3: String.raw`Tu as oublié $\frac{u^3}{6} = \frac{x^3}{6}$, qui compense le $-\frac{x^3}{6}$ de $\sin x$.` } },
    { id: 'm4-q-024', level: 2, q: String.raw`DL à l'ordre 2 de $\ln x$ en 1 (partie régulière) :`,
      choices: [String.raw`$x - \frac{x^2}{2}$`, String.raw`$(x-1) - \frac{(x-1)^2}{2}$`, String.raw`$(x-1) + \frac{(x-1)^2}{2}$`, String.raw`$1 + (x-1) - \frac{(x-1)^2}{2}$`], answer: 1,
      explain: String.raw`Avec $h = x - 1$ : $\ln(1 + h) = h - \frac{h^2}{2} + o(h^2)$.`,
      why: { 0: String.raw`C'est le DL de $\ln(1+x)$ en 0 ; en 1, on écrit en puissances de $x - 1$.`, 2: String.raw`Le terme en $h^2$ est négatif.`, 3: String.raw`$\ln 1 = 0$ : pas de terme constant.` } },
    { id: 'm4-q-025', level: 2, q: String.raw`Si $f(x) = 1 + 2x + 3x^3 + o(x^3)$ en 0, la courbe de $f$, par rapport à sa tangente en 0 :`,
      choices: [String.raw`est au-dessus au voisinage de 0`, String.raw`est en dessous au voisinage de 0`, String.raw`la traverse : point d'inflexion`, String.raw`on ne peut pas conclure`], answer: 2,
      explain: String.raw`$f(x) - (1 + 2x) \sim 3x^3$, qui change de signe en 0 : inflexion.`,
      why: { 0: String.raw`$3x^3 \lt 0$ pour $x \lt 0$ : la courbe passe en dessous à gauche.`, 1: String.raw`$3x^3 \gt 0$ pour $x \gt 0$ : la courbe passe au-dessus à droite.`, 3: String.raw`Le premier terme non nul après l'ordre 1 suffit pour conclure.` } },
    { id: 'm4-q-026', level: 2, q: String.raw`Si $f(x) = 2 - x^2 + o(x^2)$ en 0, alors en 0, $f$ présente :`,
      choices: [String.raw`un minimum local`, String.raw`un maximum local`, String.raw`un point d'inflexion`, String.raw`rien de particulier`], answer: 1,
      explain: String.raw`Tangente horizontale $y = 2$ et $f(x) - 2 \sim -x^2 \leq 0$ : maximum local.`,
      why: { 0: String.raw`$f(x) - 2 \sim -x^2 \leq 0$ : $f$ est en dessous de $f(0)$.`, 2: String.raw`Le terme dominant est de degré pair : pas d'inflexion.`, 3: String.raw`Tangente horizontale et terme pair négatif : c'est un maximum local.` } },
    { id: 'm4-q-027', level: 2, q: String.raw`Si $f(x) = x + 1 + \frac{2}{x} + o\left(\frac{1}{x}\right)$ en $+\infty$, alors :`,
      choices: [String.raw`asymptote $y = x$, courbe au-dessus`, String.raw`asymptote $y = x + 1$, courbe au-dessus`, String.raw`asymptote $y = x + 1$, courbe en dessous`, String.raw`asymptote $y = x + 3$`], answer: 1,
      explain: String.raw`$f(x) - (x + 1) \sim \frac{2}{x} \gt 0$ en $+\infty$.`,
      why: { 0: String.raw`$f(x) - x \to 1 \neq 0$ : la droite $y = x$ n'est pas asymptote.`, 2: String.raw`$\frac{2}{x} \gt 0$ en $+\infty$ : la courbe est au-dessus.`, 3: String.raw`Le terme $\frac{2}{x}$ tend vers 0, il n'entre pas dans l'équation de l'asymptote.` } },
    { id: 'm4-q-028', level: 2, q: String.raw`Équivalent en 0 de $\mathrm{e}^x - 1 - x$ :`,
      choices: [String.raw`$x$`, String.raw`$\frac{x^2}{2}$`, String.raw`$x^2$`, String.raw`$0$`], answer: 1,
      explain: String.raw`$\mathrm{e}^x = 1 + x + \frac{x^2}{2} + o(x^2)$, donc $\mathrm{e}^x - 1 - x = \frac{x^2}{2} + o(x^2)$.`,
      why: { 0: String.raw`$\mathrm{e}^x - 1 \sim x$, mais on retranche $x$ : il faut aller à l'ordre 2.`, 2: String.raw`Oubli du $\frac{1}{2!}$.`, 3: String.raw`Une fonction non nulle n'est jamais équivalente à 0.` } },
    { id: 'm4-q-029', level: 1, q: String.raw`$\displaystyle\lim_{x\to 0}\frac{\mathrm{e}^{2x} - 1}{x} = $`,
      choices: [String.raw`$1$`, String.raw`$2$`, String.raw`$\frac{1}{2}$`, String.raw`$0$`], answer: 1,
      explain: String.raw`$\mathrm{e}^{2x} - 1 \sim 2x$ en 0.`,
      why: { 0: String.raw`$\mathrm{e}^{2x} - 1 \sim 2x$, pas $x$.`, 2: String.raw`Facteur inversé.`, 3: String.raw`Forme $\frac{0}{0}$, pas 0.` } },
    { id: 'm4-q-030', level: 2, q: String.raw`$\displaystyle\lim_{x\to 0}\frac{\ln(1 + 3x)}{\sin(2x)} = $`,
      choices: [String.raw`$\frac{2}{3}$`, String.raw`$1$`, String.raw`$6$`, String.raw`$\frac{3}{2}$`], answer: 3,
      explain: String.raw`$\ln(1+3x) \sim 3x$ et $\sin(2x) \sim 2x$, donc le quotient est équivalent à $\frac{3x}{2x} = \frac{3}{2}$.`,
      why: { 0: String.raw`Quotient inversé.`, 1: String.raw`Les deux sont équivalents à des multiples différents de $x$.`, 2: String.raw`On divise les équivalents, on ne les multiplie pas.` } },
    { id: 'm4-q-031', level: 2, q: String.raw`$\displaystyle\lim_{x\to+\infty} x\sin\frac{1}{x} = $`,
      choices: [String.raw`$0$`, String.raw`$1$`, String.raw`$+\infty$`, String.raw`elle n'existe pas`], answer: 1,
      explain: String.raw`Avec $X = \frac{1}{x} \to 0^+$ : $x\sin\frac{1}{x} = \frac{\sin X}{X} \to 1$.`,
      why: { 0: String.raw`Confusion avec la limite en 0 : $x\sin\frac{1}{x} \to 0$ quand $x \to 0$.`, 2: String.raw`$\sin\frac{1}{x} \sim \frac{1}{x}$ compense exactement le facteur $x$.`, 3: String.raw`La limite existe bien et vaut 1.` } },
    { id: 'm4-q-032', level: 2, q: String.raw`En 0, $\cos x \sim 1$. Peut-on en déduire $\cos x - 1 \sim 0$ ?`,
      choices: [String.raw`Oui, on soustrait 1 des deux côtés`, String.raw`Non : on ne soustrait pas des équivalents ; en fait $\cos x - 1 \sim -\frac{x^2}{2}$`, String.raw`Oui, car $\cos x - 1 \to 0$`, String.raw`Non, car $\cos x$ n'est pas équivalent à 1 en 0`], answer: 1,
      explain: String.raw`Les équivalents ne passent pas aux sommes ni aux différences ; le DL de $\cos$ donne $\cos x - 1 = -\frac{x^2}{2} + o(x^2)$.`,
      why: { 0: String.raw`Les équivalents ne se soustraient pas.`, 2: String.raw`Tendre vers 0 n'est pas « être équivalent à 0 » (cela n'a pas de sens pour une fonction non nulle).`, 3: String.raw`$\frac{\cos x}{1} \to 1$ : on a bien $\cos x \sim 1$ en 0.` } },
    { id: 'm4-q-033', level: 1, q: String.raw`DL de $\frac{1}{1-x}$ à l'ordre $n$ en 0 (partie régulière) :`,
      choices: [String.raw`$1 + x + x^2 + \dots + x^n$`, String.raw`$1 - x + x^2 - \dots + (-1)^n x^n$`, String.raw`$1 + x + \frac{x^2}{2} + \dots + \frac{x^n}{n!}$`, String.raw`$x + \frac{x^2}{2} + \dots + \frac{x^n}{n}$`], answer: 0,
      explain: String.raw`Somme géométrique : $1 + x + \dots + x^n = \frac{1 - x^{n+1}}{1 - x}$.`,
      why: { 1: String.raw`C'est le DL de $\frac{1}{1+x}$.`, 2: String.raw`C'est le DL de $\mathrm{e}^x$.`, 3: String.raw`C'est le DL de $-\ln(1-x)$.` } },
    { id: 'm4-q-034', level: 2, q: String.raw`DL de $\operatorname{ch} x$ à l'ordre 4 en 0 (partie régulière) :`,
      choices: [String.raw`$1 - \frac{x^2}{2} + \frac{x^4}{24}$`, String.raw`$1 + x^2 + x^4$`, String.raw`$1 + \frac{x^2}{2} + \frac{x^4}{24}$`, String.raw`$x + \frac{x^3}{6}$`], answer: 2,
      explain: String.raw`$\operatorname{ch}$ est la partie paire de $\mathrm{e}^x$ : on garde les termes pairs, tous positifs.`,
      why: { 0: String.raw`C'est le DL de $\cos x$.`, 1: String.raw`Il manque les factorielles $2!$ et $4!$.`, 3: String.raw`C'est le DL de $\operatorname{sh} x$ (impaire).` } }
  ],

  /* ===================================================== EXERCICES */
  exercises: [
    { id: 'm4-x-001', level: 1, check: 'value', vars: [],
      prompt: String.raw`Calcule $\displaystyle\lim_{x\to+\infty}\frac{3x^2 - x + 1}{2x^2 + 5}$.`,
      answer: '3/2',
      mistakes: [{ expr: '1/5', msg: String.raw`En $+\infty$, ce sont les termes de plus <b>haut</b> degré qui dominent, pas les constantes.` }],
      hint: String.raw`Factorise numérateur et dénominateur par $x^2$.`,
      explain: String.raw`$\frac{x^2\left(3 - \frac{1}{x} + \frac{1}{x^2}\right)}{x^2\left(2 + \frac{5}{x^2}\right)} \to \frac{3}{2}$.` },
    { id: 'm4-x-002', level: 1, check: 'value', vars: [],
      prompt: String.raw`Calcule $\displaystyle\lim_{x\to 2}\frac{x^2 - 4}{x - 2}$.`,
      answer: '4',
      mistakes: [{ expr: '0', msg: String.raw`$\frac{0}{0}$ est une forme indéterminée, pas 0 : factorise $x^2 - 4$.` }],
      hint: String.raw`$x^2 - 4 = (x - 2)(x + 2)$.`,
      explain: String.raw`$\frac{(x-2)(x+2)}{x-2} = x + 2 \to 4$.` },
    { id: 'm4-x-003', level: 2, check: 'value', vars: [],
      prompt: String.raw`Calcule $\displaystyle\lim_{x\to+\infty}\left(\sqrt{x^2 + 3x} - x\right)$.`,
      answer: '3/2',
      mistakes: [
        { expr: '0', msg: String.raw`$\infty - \infty$ ne vaut pas 0 : multiplie par la quantité conjuguée.` },
        { expr: '3', msg: String.raw`Le dénominateur $\sqrt{x^2+3x} + x$ se comporte comme $2x$ : n'oublie pas le facteur 2.` }
      ],
      hint: String.raw`Multiplie et divise par $\sqrt{x^2 + 3x} + x$.`,
      explain: String.raw`$\sqrt{x^2+3x} - x = \frac{3x}{\sqrt{x^2+3x} + x} = \frac{3}{\sqrt{1 + \frac{3}{x}} + 1} \to \frac{3}{2}$.` },
    { id: 'm4-x-004', level: 1, check: 'value', vars: [],
      prompt: String.raw`Calcule $\displaystyle\lim_{x\to 0}\frac{\sin(5x)}{x}$.`,
      answer: '5',
      mistakes: [{ expr: '1', msg: String.raw`C'est $\frac{\sin X}{X}$ qui tend vers 1 ; ici $\frac{\sin(5x)}{x} = 5\cdot\frac{\sin(5x)}{5x}$.` }],
      hint: String.raw`$\sin(5x) \sim 5x$ en 0.`,
      explain: String.raw`$\sin(5x) \sim 5x$, donc $\frac{\sin(5x)}{x} \sim \frac{5x}{x} = 5$.` },
    { id: 'm4-x-005', level: 1, check: 'value', vars: [],
      prompt: String.raw`Calcule $\displaystyle\lim_{x\to 0}\frac{\mathrm{e}^{3x} - 1}{2x}$.`,
      answer: '3/2',
      mistakes: [{ expr: '1/2', msg: String.raw`$\mathrm{e}^{3x} - 1 \sim 3x$, pas $x$.` }],
      hint: String.raw`$\mathrm{e}^{u} - 1 \sim u$ quand $u \to 0$.`,
      explain: String.raw`$\mathrm{e}^{3x} - 1 \sim 3x$, donc le quotient est équivalent à $\frac{3x}{2x} = \frac{3}{2}$.` },
    { id: 'm4-x-006', level: 2, check: 'value', vars: [],
      prompt: String.raw`Calcule $\displaystyle\lim_{x\to 0}\frac{1 - \cos(3x)}{x^2}$.`,
      answer: '9/2',
      mistakes: [
        { expr: '1/2', msg: String.raw`$1 - \cos(3x) \sim \frac{(3x)^2}{2}$ : remplace $x$ par $3x$.` },
        { expr: '3/2', msg: String.raw`$(3x)^2 = 9x^2$, pas $3x^2$.` }
      ],
      hint: String.raw`$1 - \cos u \sim \frac{u^2}{2}$ avec $u = 3x$.`,
      explain: String.raw`$1 - \cos(3x) \sim \frac{9x^2}{2}$, donc la limite vaut $\frac{9}{2}$.` },
    { id: 'm4-x-007', level: 2, check: 'value', vars: [],
      prompt: String.raw`Calcule $\displaystyle\lim_{x\to 0}\frac{\ln(1 + x^2)}{1 - \cos x}$.`,
      answer: '2',
      mistakes: [{ expr: '1/2', msg: String.raw`Tu as inversé le quotient : $\frac{x^2}{x^2/2} = 2$.` }],
      hint: String.raw`$\ln(1 + u) \sim u$ avec $u = x^2$, et $1 - \cos x \sim \frac{x^2}{2}$.`,
      explain: String.raw`$\ln(1+x^2) \sim x^2$ et $1 - \cos x \sim \frac{x^2}{2}$, donc le quotient est équivalent à $\frac{x^2}{x^2/2} = 2$.` },
    { id: 'm4-x-008', level: 2, check: 'value', vars: [],
      prompt: String.raw`La fonction $f(x) = \dfrac{\sqrt{1+x} - 1}{x}$ se prolonge par continuité en 0. Quelle valeur faut-il donner à $f(0)$ ?`,
      answer: '1/2',
      mistakes: [{ expr: '1', msg: String.raw`$\sqrt{1+x} - 1 \sim \frac{x}{2}$, pas $x$.` }],
      hint: String.raw`$(1+x)^\alpha - 1 \sim \alpha x$ avec $\alpha = \frac{1}{2}$ (ou quantité conjuguée).`,
      explain: String.raw`$\sqrt{1+x} - 1 \sim \frac{x}{2}$, donc $f(x) \to \frac{1}{2}$. On pose $f(0) = \frac{1}{2}$.` },
    { id: 'm4-x-009', level: 2, check: 'value', vars: [],
      prompt: String.raw`Calcule $\displaystyle\lim_{x\to+\infty}\left(1 + \frac{2}{x}\right)^x$.`,
      answer: 'exp(2)',
      mistakes: [
        { expr: '1', msg: String.raw`$1^\infty$ est une forme indéterminée : passe à l'exponentielle.` },
        { expr: 'exp(1/2)', msg: String.raw`$x\ln\left(1 + \frac{2}{x}\right) \sim x\cdot\frac{2}{x} = 2$, pas $\frac{1}{2}$.` }
      ],
      hint: String.raw`Écris $\left(1 + \frac{2}{x}\right)^x = \exp\left(x\ln\left(1 + \frac{2}{x}\right)\right)$.`,
      explain: String.raw`$\ln\left(1 + \frac{2}{x}\right) \sim \frac{2}{x}$, donc $x\ln\left(1 + \frac{2}{x}\right) \to 2$ et la limite vaut $\mathrm{e}^2$.` },
    { id: 'm4-x-010', level: 2, check: 'value', vars: [],
      prompt: String.raw`Calcule $\displaystyle\lim_{x\to 0}\left(1 + \sin x\right)^{1/x}$.`,
      answer: 'e',
      mistakes: [{ expr: '1', msg: String.raw`$1^\infty$ est une forme indéterminée : écris $\exp\left(\frac{\ln(1 + \sin x)}{x}\right)$.` }],
      hint: String.raw`$\ln(1 + \sin x) \sim \sin x \sim x$.`,
      explain: String.raw`$(1 + \sin x)^{1/x} = \exp\left(\frac{\ln(1 + \sin x)}{x}\right)$ ; or $\ln(1 + \sin x) \sim \sin x \sim x$, donc l'exposant tend vers 1 et la limite vaut $\mathrm{e}$.` },
    { id: 'm4-x-011', level: 2, check: 'value', vars: [],
      prompt: String.raw`Calcule $\displaystyle\lim_{x\to 1}\frac{x^3 - 1}{\ln x}$.`,
      answer: '3',
      mistakes: [{ expr: '1', msg: String.raw`Près de 1, $x^3 - 1 \sim 3(x - 1)$ (taux d'accroissement : $(x^3)'$ en 1 vaut 3).` }],
      hint: String.raw`Pose $h = x - 1 \to 0$ ; $\ln x = \ln(1 + h) \sim h$.`,
      explain: String.raw`$x^3 - 1 = (x - 1)(x^2 + x + 1) \sim 3(x-1)$ et $\ln x \sim x - 1$ en 1, donc le quotient tend vers $3$.` },
    { id: 'm4-x-012', level: 2, check: 'value', vars: [],
      prompt: String.raw`Calcule $\displaystyle\lim_{x\to 0}\frac{\mathrm{e}^x - 1 - x}{x^2}$.`,
      answer: '1/2',
      mistakes: [{ expr: '0', msg: String.raw`Avec $\mathrm{e}^x - 1 \sim x$, on obtiendrait $x - x = 0$ : on ne soustrait pas des équivalents. Utilise le DL à l'ordre 2.` }],
      hint: String.raw`DL : $\mathrm{e}^x = 1 + x + \frac{x^2}{2} + o(x^2)$.`,
      explain: String.raw`$\mathrm{e}^x - 1 - x = \frac{x^2}{2} + o(x^2)$, donc la limite vaut $\frac{1}{2}$.` },
    { id: 'm4-x-013', level: 2, check: 'value', vars: [],
      prompt: String.raw`Calcule $\displaystyle\lim_{x\to 0}\frac{x - \sin x}{x^3}$.`,
      answer: '1/6',
      mistakes: [
        { expr: '0', msg: String.raw`$\sin x \sim x$ ne permet pas de conclure pour $x - \sin x$ (somme d'équivalents interdite) : DL à l'ordre 3.` },
        { expr: '-1/6', msg: String.raw`Signe : $x - \sin x = x - x + \frac{x^3}{6} + o(x^3)$.` }
      ],
      hint: String.raw`$\sin x = x - \frac{x^3}{6} + o(x^3)$.`,
      explain: String.raw`$x - \sin x = \frac{x^3}{6} + o(x^3)$, donc la limite vaut $\frac{1}{6}$.` },
    { id: 'm4-x-014', level: 3, check: 'value', vars: [],
      prompt: String.raw`Calcule $\displaystyle\lim_{x\to 0}\frac{\tan x - x}{x^3}$.`,
      answer: '1/3',
      mistakes: [{ expr: '1/6', msg: String.raw`C'est $\sin x$ qui a un terme en $\frac{x^3}{6}$ ; pour $\tan$ : $\tan x = x + \frac{x^3}{3} + o(x^3)$.` }],
      hint: String.raw`DL de $\tan x$ à l'ordre 3.`,
      explain: String.raw`$\tan x - x = \frac{x^3}{3} + o(x^3)$, donc la limite vaut $\frac{1}{3}$.` },
    { id: 'm4-x-015', level: 3, check: 'value', vars: [],
      prompt: String.raw`Calcule $\displaystyle\lim_{x\to 0}\left(\frac{1}{\sin^2 x} - \frac{1}{x^2}\right)$.`,
      answer: '1/3',
      mistakes: [{ expr: '0', msg: String.raw`$\sin^2 x \sim x^2$ ne suffit pas pour une différence : il faut $\sin^2 x = x^2 - \frac{x^4}{3} + o(x^4)$.` }],
      hint: String.raw`Mets au même dénominateur : $\frac{x^2 - \sin^2 x}{x^2\sin^2 x}$, puis DL de $\sin^2 x$ à l'ordre 4.`,
      explain: String.raw`$\sin^2 x = \left(x - \frac{x^3}{6}\right)^2 + o(x^4) = x^2 - \frac{x^4}{3} + o(x^4)$. Donc $x^2 - \sin^2 x \sim \frac{x^4}{3}$ et $x^2\sin^2 x \sim x^4$ : la limite vaut $\frac{1}{3}$.` },
    { id: 'm4-x-016', level: 3, check: 'value', vars: [],
      prompt: String.raw`Calcule $\displaystyle\lim_{x\to 0}\frac{\cos x - \mathrm{e}^{-x^2/2}}{x^4}$.`,
      answer: '-1/12',
      mistakes: [{ expr: '0', msg: String.raw`Les termes d'ordre 0 et 2 se compensent, mais pas ceux d'ordre 4 : développe à l'ordre 4.` }],
      hint: String.raw`$\mathrm{e}^{u} = 1 + u + \frac{u^2}{2} + o(u^2)$ avec $u = -\frac{x^2}{2}$.`,
      explain: String.raw`$\cos x = 1 - \frac{x^2}{2} + \frac{x^4}{24} + o(x^4)$ et $\mathrm{e}^{-x^2/2} = 1 - \frac{x^2}{2} + \frac{x^4}{8} + o(x^4)$. Différence : $\left(\frac{1}{24} - \frac{3}{24}\right)x^4 = -\frac{x^4}{12}$. La limite vaut $-\frac{1}{12}$.` },
    { id: 'm4-x-017', level: 2, check: 'value', vars: [],
      prompt: String.raw`Combien de solutions réelles l'équation $x^3 - 3x + 1 = 0$ admet-elle ?`,
      answer: '3',
      mistakes: [{ expr: '1', msg: String.raw`Calcule $f(-2)$, $f(0)$, $f(1)$ et $f(2)$ : il y a plusieurs changements de signe.` }],
      hint: String.raw`Applique le TVI sur $[-2, 0]$, $[0, 1]$ et $[1, 2]$ ; un polynôme de degré 3 a au plus 3 racines.`,
      explain: String.raw`$f(-2) = -1 \lt 0$, $f(0) = 1 \gt 0$, $f(1) = -1 \lt 0$, $f(2) = 3 \gt 0$. Le TVI donne une racine dans chacun des intervalles $\left]-2, 0\right[$, $\left]0, 1\right[$, $\left]1, 2\right[$, et un polynôme de degré 3 en a au plus 3 : exactement 3 solutions.` },
    { id: 'm4-x-018', level: 1, check: 'expr', vars: ['x'],
      prompt: String.raw`Donne un équivalent simple en 0, de la forme $c\,x^n$, de $\sin(3x)\ln(1 + 2x)$.`,
      answer: '6*x^2',
      mistakes: [
        { expr: '5*x', msg: String.raw`On <b>multiplie</b> les équivalents : $3x \cdot 2x$.` },
        { expr: '6*x', msg: String.raw`$3x \times 2x = 6x^2$ : les puissances de $x$ se multiplient aussi.` }
      ],
      hint: String.raw`$\sin(3x) \sim 3x$ et $\ln(1 + 2x) \sim 2x$.`,
      explain: String.raw`Produit d'équivalents : $\sin(3x)\ln(1+2x) \sim 3x \cdot 2x = 6x^2$.` },
    { id: 'm4-x-019', level: 1, check: 'expr', vars: ['x'],
      prompt: String.raw`Donne un équivalent simple en 0, de la forme $c\,x^n$, de $1 - \cos(2x)$.`,
      answer: '2*x^2',
      mistakes: [
        { expr: 'x^2/2', msg: String.raw`Remplace $x$ par $2x$ : $\frac{(2x)^2}{2}$.` },
        { expr: '4*x^2', msg: String.raw`N'oublie pas le $\frac{1}{2}$ : $1 - \cos u \sim \frac{u^2}{2}$.` }
      ],
      hint: String.raw`$1 - \cos u \sim \frac{u^2}{2}$ quand $u \to 0$.`,
      explain: String.raw`$1 - \cos(2x) \sim \frac{(2x)^2}{2} = 2x^2$.` },
    { id: 'm4-x-020', level: 2, check: 'expr', vars: ['x'],
      prompt: String.raw`Donne un équivalent simple en 0, de la forme $c\,x^n$, de $\sqrt{1+x} - \sqrt{1-x}$.`,
      answer: 'x',
      mistakes: [{ expr: 'x/2', msg: String.raw`$\sqrt{1+x} = 1 + \frac{x}{2} + o(x)$ et $\sqrt{1-x} = 1 - \frac{x}{2} + o(x)$ : la différence vaut $x + o(x)$.` }],
      hint: String.raw`DL de chaque racine à l'ordre 1.`,
      explain: String.raw`$\left(1 + \frac{x}{2}\right) - \left(1 - \frac{x}{2}\right) + o(x) = x + o(x)$, donc l'équivalent est $x$.` },
    { id: 'm4-x-021', level: 2, check: 'expr', vars: ['x'],
      prompt: String.raw`Donne un équivalent simple en 0, de la forme $c\,x^n$, de $x - \sin x$.`,
      answer: 'x^3/6',
      mistakes: [{ expr: '-x^3/6', msg: String.raw`Signe : $x - \sin x = x - \left(x - \frac{x^3}{6}\right) + o(x^3)$.` }],
      hint: String.raw`$\sin x = x - \frac{x^3}{6} + o(x^3)$.`,
      explain: String.raw`$x - \sin x = \frac{x^3}{6} + o(x^3)$, donc $x - \sin x \sim \frac{x^3}{6}$.` },
    { id: 'm4-x-022', level: 2, check: 'expr', vars: ['x'],
      prompt: String.raw`Donne un équivalent simple en 0, de la forme $c\,x^n$, de $\ln(\cos x)$.`,
      answer: '-x^2/2',
      mistakes: [{ expr: 'x^2/2', msg: String.raw`$\cos x \lt 1$ près de 0, donc $\ln(\cos x) \lt 0$ : l'équivalent est négatif.` }],
      hint: String.raw`$\ln(\cos x) = \ln(1 + u)$ avec $u = \cos x - 1 \to 0$.`,
      explain: String.raw`$\ln(1 + u) \sim u$ avec $u = \cos x - 1 \sim -\frac{x^2}{2}$, donc $\ln(\cos x) \sim -\frac{x^2}{2}$.` },
    { id: 'm4-x-023', level: 3, check: 'expr', vars: ['x'],
      prompt: String.raw`Donne un équivalent simple en 0, de la forme $c\,x^n$, de $\tan x - \sin x$.`,
      answer: 'x^3/2',
      mistakes: [
        { expr: 'x^3/6', msg: String.raw`Il faut combiner les deux DL : $\frac{x^3}{3} - \left(-\frac{x^3}{6}\right)$.` },
        { expr: 'x^3/3', msg: String.raw`Le terme $-\frac{x^3}{6}$ de $\sin x$ compte aussi.` }
      ],
      hint: String.raw`$\tan x = x + \frac{x^3}{3} + o(x^3)$ et $\sin x = x - \frac{x^3}{6} + o(x^3)$.`,
      explain: String.raw`$\tan x - \sin x = \left(\frac{1}{3} + \frac{1}{6}\right)x^3 + o(x^3) = \frac{x^3}{2} + o(x^3)$.` },
    { id: 'm4-x-024', level: 2, check: 'expr', vars: ['x'],
      prompt: String.raw`Donne un équivalent simple en 0, de la forme $c\,x^n$, de $\mathrm{e}^x - 1 - \sin x$.`,
      answer: 'x^2/2',
      mistakes: [{ expr: '0', msg: String.raw`Les équivalents $\mathrm{e}^x - 1 \sim x$ et $\sin x \sim x$ ne se soustraient pas : il faut aller à l'ordre 2.` }],
      hint: String.raw`DL à l'ordre 2 : $\mathrm{e}^x = 1 + x + \frac{x^2}{2} + o(x^2)$, $\sin x = x + o(x^2)$.`,
      explain: String.raw`$\mathrm{e}^x - 1 - \sin x = \left(x + \frac{x^2}{2}\right) - x + o(x^2) = \frac{x^2}{2} + o(x^2)$.` },
    { id: 'm4-x-025', level: 2, check: 'expr', vars: ['x'], domain: [1, 5],
      prompt: String.raw`Donne un équivalent simple en $+\infty$ de $\sqrt{x^2 + 1} - x$ (de la forme $\frac{c}{x^n}$).`,
      answer: '1/(2*x)',
      mistakes: [
        { expr: '1/x', msg: String.raw`Le dénominateur $\sqrt{x^2+1} + x$ est équivalent à $2x$, pas à $x$.` },
        { expr: '0', msg: String.raw`On ne peut pas être équivalent à 0 : utilise la quantité conjuguée.` }
      ],
      hint: String.raw`Quantité conjuguée : $\sqrt{x^2+1} - x = \frac{1}{\sqrt{x^2+1} + x}$.`,
      explain: String.raw`$\sqrt{x^2+1} - x = \frac{1}{\sqrt{x^2+1} + x}$ et $\sqrt{x^2+1} + x \sim 2x$, donc $\sqrt{x^2+1} - x \sim \frac{1}{2x}$.` },
    { id: 'm4-x-026', level: 1, check: 'expr', vars: ['x'],
      prompt: String.raw`Donne la partie régulière du DL à l'ordre 3 en 0 de $\mathrm{e}^{2x}$.`,
      answer: '1+2*x+2*x^2+4*x^3/3',
      mistakes: [
        { expr: '1+2*x+x^2/2+x^3/6', msg: String.raw`Il faut remplacer $u$ par $2x$ partout : $\frac{(2x)^2}{2} = 2x^2$ et $\frac{(2x)^3}{6} = \frac{4x^3}{3}$.` },
        { expr: '1+2*x+4*x^2+8*x^3', msg: String.raw`N'oublie pas les factorielles : $\frac{(2x)^2}{2!}$ et $\frac{(2x)^3}{3!}$.` }
      ],
      hint: String.raw`$\mathrm{e}^u = 1 + u + \frac{u^2}{2} + \frac{u^3}{6} + o(u^3)$ avec $u = 2x$.`,
      explain: String.raw`$1 + 2x + \frac{4x^2}{2} + \frac{8x^3}{6} = 1 + 2x + 2x^2 + \frac{4x^3}{3}$.` },
    { id: 'm4-x-027', level: 1, check: 'expr', vars: ['x'],
      prompt: String.raw`Donne la partie régulière du DL à l'ordre 3 en 0 de $\ln(1 - x)$.`,
      answer: '-x-x^2/2-x^3/3',
      mistakes: [{ expr: '-x+x^2/2-x^3/3', msg: String.raw`C'est $-\ln(1+x)$. Remplace $x$ par $-x$ dans chaque terme de $\ln(1+x)$ : $-\frac{(-x)^2}{2} = -\frac{x^2}{2}$.` }],
      hint: String.raw`Remplace $x$ par $-x$ dans $x - \frac{x^2}{2} + \frac{x^3}{3}$.`,
      explain: String.raw`$\ln(1 - x) = (-x) - \frac{(-x)^2}{2} + \frac{(-x)^3}{3} + o(x^3) = -x - \frac{x^2}{2} - \frac{x^3}{3} + o(x^3)$.` },
    { id: 'm4-x-028', level: 2, check: 'expr', vars: ['x'],
      prompt: String.raw`Donne la partie régulière du DL à l'ordre 2 en 0 de $\sqrt{1 + x}$.`,
      answer: '1+x/2-x^2/8',
      mistakes: [
        { expr: '1+x/2+x^2/8', msg: String.raw`Le coefficient de $x^2$ est $\frac{\alpha(\alpha-1)}{2}$ avec $\alpha = \frac{1}{2}$ : il est négatif.` },
        { expr: '1+x/2-x^2/4', msg: String.raw`N'oublie pas le $2!$ : $\frac{1}{2}\cdot\left(-\frac{1}{2}\right)\cdot\frac{1}{2} = -\frac{1}{8}$.` }
      ],
      hint: String.raw`$(1+x)^\alpha = 1 + \alpha x + \frac{\alpha(\alpha-1)}{2}x^2 + o(x^2)$ avec $\alpha = \frac{1}{2}$.`,
      explain: String.raw`$\alpha = \frac{1}{2}$ : $\frac{\alpha(\alpha-1)}{2} = \frac{\frac{1}{2}\cdot\left(-\frac{1}{2}\right)}{2} = -\frac{1}{8}$. Donc $\sqrt{1+x} = 1 + \frac{x}{2} - \frac{x^2}{8} + o(x^2)$.` },
    { id: 'm4-x-029', level: 2, check: 'expr', vars: ['x'],
      prompt: String.raw`Donne la partie régulière du DL à l'ordre 3 en 0 de $\mathrm{e}^x\sin x$.`,
      answer: 'x+x^2+x^3/3',
      mistakes: [{ expr: 'x+x^2+x^3/2', msg: String.raw`Il manque le produit $1 \times \left(-\frac{x^3}{6}\right)$.` }],
      hint: String.raw`Multiplie $1 + x + \frac{x^2}{2}$ par $x - \frac{x^3}{6}$ et garde les termes de degré $\leq 3$.`,
      explain: String.raw`$\left(1 + x + \frac{x^2}{2}\right)\left(x - \frac{x^3}{6}\right) = x + x^2 + \frac{x^3}{2} - \frac{x^3}{6} + o(x^3) = x + x^2 + \frac{x^3}{3} + o(x^3)$.` },
    { id: 'm4-x-030', level: 2, check: 'expr', vars: ['x'],
      prompt: String.raw`Donne la partie régulière du DL à l'ordre 2 en 0 de $\dfrac{\mathrm{e}^x}{1 - x}$.`,
      answer: '1+2*x+5*x^2/2',
      mistakes: [{ expr: '1+2*x+3*x^2/2', msg: String.raw`Il faut aussi développer $\frac{1}{1-x}$ jusqu'à $x^2$ : $1 + x + x^2$.` }],
      hint: String.raw`$\left(1 + x + \frac{x^2}{2}\right)\left(1 + x + x^2\right)$, tronqué à l'ordre 2.`,
      explain: String.raw`Coefficient de $x$ : $1 + 1 = 2$ ; de $x^2$ : $1 + 1 + \frac{1}{2} = \frac{5}{2}$. Donc $1 + 2x + \frac{5x^2}{2} + o(x^2)$.` },
    { id: 'm4-x-031', level: 2, check: 'expr', vars: ['x'],
      prompt: String.raw`Donne la partie régulière du DL à l'ordre 3 en 0 de $\cos x\,\ln(1 + x)$.`,
      answer: 'x-x^2/2-x^3/6',
      mistakes: [{ expr: 'x-x^2/2+x^3/3', msg: String.raw`Tu as oublié le produit croisé $-\frac{x^2}{2}\cdot x = -\frac{x^3}{2}$.` }],
      hint: String.raw`$\left(1 - \frac{x^2}{2}\right)\left(x - \frac{x^2}{2} + \frac{x^3}{3}\right)$, tronqué à l'ordre 3.`,
      explain: String.raw`$x - \frac{x^2}{2} + \frac{x^3}{3} - \frac{x^3}{2} + o(x^3) = x - \frac{x^2}{2} - \frac{x^3}{6} + o(x^3)$.` },
    { id: 'm4-x-032', level: 3, check: 'expr', vars: ['x'],
      prompt: String.raw`Donne la partie régulière du DL à l'ordre 3 en 0 de $\ln(1 + \sin x)$.`,
      answer: 'x-x^2/2+x^3/6',
      mistakes: [{ expr: 'x-x^2/2+x^3/3', msg: String.raw`Le terme $-\frac{x^3}{6}$ de $\sin x$ contribue aussi : $\frac{1}{3} - \frac{1}{6} = \frac{1}{6}$.` }],
      hint: String.raw`$u = \sin x = x - \frac{x^3}{6} + o(x^3)$, puis $\ln(1+u) = u - \frac{u^2}{2} + \frac{u^3}{3} + o(u^3)$.`,
      explain: String.raw`$u^2 = x^2 + o(x^3)$, $u^3 = x^3 + o(x^3)$. Donc $\ln(1 + \sin x) = x - \frac{x^3}{6} - \frac{x^2}{2} + \frac{x^3}{3} + o(x^3) = x - \frac{x^2}{2} + \frac{x^3}{6} + o(x^3)$.` },
    { id: 'm4-x-033', level: 3, check: 'expr', vars: ['x'],
      prompt: String.raw`Donne la partie régulière du DL à l'ordre 2 en 0 de $\mathrm{e}^{\cos x}$.`,
      answer: 'e*(1-x^2/2)',
      mistakes: [
        { expr: '1-x^2/2', msg: String.raw`Il manque le facteur $\mathrm{e}$ : $\mathrm{e}^{\cos x} = \mathrm{e}\cdot\mathrm{e}^{\cos x - 1}$.` },
        { expr: '2-x^2/2', msg: String.raw`On ne peut composer qu'avec $u \to 0$ ; ici $\cos x \to 1$. Écris $\mathrm{e}^{\cos x} = \mathrm{e}\cdot\mathrm{e}^{\cos x - 1}$.` }
      ],
      hint: String.raw`$\cos x \to 1$, pas 0 : écris $\mathrm{e}^{\cos x} = \mathrm{e}\cdot\mathrm{e}^{\cos x - 1}$.`,
      explain: String.raw`$\cos x - 1 = -\frac{x^2}{2} + o(x^2) \to 0$, donc $\mathrm{e}^{\cos x - 1} = 1 - \frac{x^2}{2} + o(x^2)$ et $\mathrm{e}^{\cos x} = \mathrm{e} - \frac{\mathrm{e}}{2}x^2 + o(x^2)$.` },
    { id: 'm4-x-034', level: 3, check: 'expr', vars: ['x'],
      prompt: String.raw`Donne la partie régulière du DL à l'ordre 4 en 0 de $\dfrac{1}{\cos x}$.`,
      answer: '1+x^2/2+5*x^4/24',
      mistakes: [
        { expr: '1+x^2/2-x^4/24', msg: String.raw`$\frac{1}{1-u} = 1 + u + u^2 + o(u^2)$ : n'oublie pas $u^2 = \frac{x^4}{4} + o(x^4)$.` },
        { expr: '1+x^2/2+x^4/4', msg: String.raw`$u$ contient aussi $-\frac{x^4}{24}$ : le coefficient est $\frac{1}{4} - \frac{1}{24} = \frac{5}{24}$.` }
      ],
      hint: String.raw`$\cos x = 1 - u$ avec $u = \frac{x^2}{2} - \frac{x^4}{24}$, puis $\frac{1}{1-u} = 1 + u + u^2 + o(u^2)$.`,
      explain: String.raw`$1 + \left(\frac{x^2}{2} - \frac{x^4}{24}\right) + \frac{x^4}{4} + o(x^4) = 1 + \frac{x^2}{2} + \frac{5x^4}{24} + o(x^4)$.` },
    { id: 'm4-x-035', level: 2, check: 'expr', vars: ['x'],
      prompt: String.raw`Donne la partie régulière du DL à l'ordre 2 de $\mathrm{e}^x$ <b>en 1</b>, écrite avec des puissances de $(x - 1)$.`,
      answer: 'e*(1+(x-1)+(x-1)^2/2)',
      mistakes: [
        { expr: '1+(x-1)+(x-1)^2/2', msg: String.raw`$\mathrm{e}^{1 + h} = \mathrm{e}\cdot\mathrm{e}^{h}$ : tu as oublié le facteur $\mathrm{e}$.` },
        { expr: 'e*(1+x+x^2/2)', msg: String.raw`Il faut des puissances de $h = x - 1$, pas de $x$.` }
      ],
      hint: String.raw`Pose $h = x - 1$ : $\mathrm{e}^x = \mathrm{e}^{1 + h} = \mathrm{e}\cdot\mathrm{e}^{h}$.`,
      explain: String.raw`$\mathrm{e}\cdot\mathrm{e}^h = \mathrm{e}\left(1 + h + \frac{h^2}{2}\right) + o(h^2)$ avec $h = x - 1$ : $\mathrm{e}\left(1 + (x-1) + \frac{(x-1)^2}{2}\right)$.` },
    { id: 'm4-x-036', level: 3, check: 'expr', vars: ['x'],
      prompt: String.raw`Donne la partie régulière du DL à l'ordre 2 de $\sqrt{x}$ <b>en 4</b>, écrite avec des puissances de $(x - 4)$.`,
      answer: '2+(x-4)/4-(x-4)^2/64',
      mistakes: [{ expr: '2+(x-4)/4-(x-4)^2/8', msg: String.raw`$\sqrt{4+h} = 2\sqrt{1 + \frac{h}{4}}$ : remplace $x$ par $\frac{h}{4}$ dans $1 + \frac{x}{2} - \frac{x^2}{8}$, puis multiplie par 2.` }],
      hint: String.raw`Pose $h = x - 4$ et factorise : $\sqrt{4 + h} = 2\sqrt{1 + \frac{h}{4}}$.`,
      explain: String.raw`$2\left(1 + \frac{h}{8} - \frac{h^2}{128}\right) = 2 + \frac{h}{4} - \frac{h^2}{64}$ avec $h = x - 4$.` },
    { id: 'm4-x-037', level: 2, check: 'tuple', vars: [],
      prompt: String.raw`$f(x) = \dfrac{\mathrm{e}^x}{1 + x}$ admet en 0 le DL $f(x) = a + bx + cx^2 + o(x^2)$. Donne $a ; b ; c$.`,
      answer: '1;0;1/2',
      hint: String.raw`Multiplie $1 + x + \frac{x^2}{2}$ par $\frac{1}{1+x} = 1 - x + x^2 + o(x^2)$.`,
      explain: String.raw`$\left(1 + x + \frac{x^2}{2}\right)\left(1 - x + x^2\right) = 1 + (1 - 1)x + \left(1 - 1 + \frac{1}{2}\right)x^2 + o(x^2) = 1 + \frac{x^2}{2} + o(x^2)$. Tangente horizontale $y = 1$ et courbe au-dessus : minimum local en 0.` },
    { id: 'm4-x-038', level: 2, check: 'expr', vars: ['x'],
      prompt: String.raw`Donne l'équation $y = ax + b$ de l'asymptote en $+\infty$ de $f(x) = \dfrac{x^2 + 3x}{x - 1}$ (tape seulement $ax + b$).`,
      answer: 'x+4',
      mistakes: [{ expr: 'x+3', msg: String.raw`Fais la division euclidienne : $x^2 + 3x = (x - 1)(x + 4) + 4$.` }],
      hint: String.raw`Division euclidienne de $x^2 + 3x$ par $x - 1$.`,
      explain: String.raw`$x^2 + 3x = (x-1)(x+4) + 4$, donc $f(x) = x + 4 + \frac{4}{x - 1}$ et $\frac{4}{x-1} \to 0$ : asymptote $y = x + 4$ (courbe au-dessus en $+\infty$).` },
    { id: 'm4-x-039', level: 3, check: 'expr', vars: ['x'],
      prompt: String.raw`Donne l'équation $y = ax + b$ de l'asymptote en $+\infty$ de $f(x) = \sqrt{x^2 + 4x + 1}$ (tape seulement $ax + b$).`,
      answer: 'x+2',
      mistakes: [
        { expr: 'x+4', msg: String.raw`$\sqrt{1 + u} = 1 + \frac{u}{2} + \dots$ : le terme $\frac{4}{x}$ donne $\frac{2}{x}$, donc $+2$.` },
        { expr: 'x', msg: String.raw`$\frac{f(x)}{x} \to 1$ donne la pente, mais il faut aussi $b = \lim\left(f(x) - x\right)$.` }
      ],
      hint: String.raw`$f(x) = x\sqrt{1 + \frac{4}{x} + \frac{1}{x^2}}$, puis $\sqrt{1 + u} = 1 + \frac{u}{2} - \frac{u^2}{8} + o(u^2)$.`,
      explain: String.raw`Avec $u = \frac{4}{x} + \frac{1}{x^2}$ : $\sqrt{1 + u} = 1 + \frac{2}{x} + \frac{1}{2x^2} - \frac{2}{x^2} + o\left(\frac{1}{x^2}\right)$, donc $f(x) = x + 2 - \frac{3}{2x} + o\left(\frac{1}{x}\right)$. Asymptote $y = x + 2$, courbe en dessous.` },
    { id: 'm4-x-040', level: 3, check: 'expr', vars: ['x'],
      prompt: String.raw`Donne l'équation $y = ax + b$ de l'asymptote en $+\infty$ de $f(x) = (x + 1)\,\mathrm{e}^{1/x}$ (tape seulement $ax + b$).`,
      answer: 'x+2',
      mistakes: [{ expr: 'x+1', msg: String.raw`$\mathrm{e}^{1/x} = 1 + \frac{1}{x} + \dots$ : le produit $x \cdot \frac{1}{x}$ ajoute encore 1.` }],
      hint: String.raw`$\mathrm{e}^{1/x} = 1 + \frac{1}{x} + \frac{1}{2x^2} + o\left(\frac{1}{x^2}\right)$, puis multiplie par $x + 1$.`,
      explain: String.raw`$(x + 1)\left(1 + \frac{1}{x} + \frac{1}{2x^2}\right) = x + 1 + \frac{1}{2x} + 1 + \frac{1}{x} + o\left(\frac{1}{x}\right) = x + 2 + \frac{3}{2x} + o\left(\frac{1}{x}\right)$. Asymptote $y = x + 2$, courbe au-dessus.` }
  ]
});
