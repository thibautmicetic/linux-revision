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
      topic: 'Limites remarquables', sec: 'm4-s-fi',
      choices: [String.raw`$0$`, String.raw`$1$`, String.raw`$+\infty$`, String.raw`elle n'existe pas`], answer: 1,
      explain: String.raw`En $x = 0$, numérateur et dénominateur s'annulent : forme $\frac{0}{0}$. On reconnaît un taux d'accroissement : $\frac{\sin x - \sin 0}{x - 0} \to \sin'(0) = \cos 0 = 1$. C'est la limite remarquable de base, qui traduit $\sin x \sim x$ en 0 (pour $x$ en radians). Numériquement : $\frac{\sin 0{,}01}{0{,}01} \approx 0{,}99998$.`,
      why: { 0: String.raw`Tu as pris la limite du numérateur seul ($\sin x \to 0$) en oubliant que $x \to 0$ aussi : c'est une forme $\frac{0}{0}$, pas 0.`, 2: String.raw`Diviser par un nombre qui tend vers 0 ne donne pas forcément $+\infty$ quand le numérateur tend aussi vers 0 ; ici le quotient reste borné, car $|\sin x| \leq |x|$.`, 3: String.raw`La limite existe et vaut 1 à gauche comme à droite (la fonction $\frac{\sin x}{x}$ est paire).` },
      rule: String.raw`$\displaystyle\lim_{x\to 0}\frac{\sin x}{x} = 1$, soit $\sin x \underset{0}{\sim} x$ (en radians).`,
      steps: [
        String.raw`Rappel : un taux d'accroissement $\frac{f(x) - f(a)}{x - a}$ tend vers $f'(a)$ quand $x \to a$, si $f$ est dérivable en $a$.`,
        String.raw`Ici $\frac{\sin x}{x} = \frac{\sin x - \sin 0}{x - 0}$ : c'est le taux d'accroissement de $\sin$ en 0.`,
        String.raw`Donc la limite vaut $\sin'(0) = \cos 0 = 1$.`
      ] },
    { id: 'm4-q-002', level: 1, q: String.raw`Laquelle n'est <b>pas</b> une forme indéterminée ?`,
      topic: 'Formes indéterminées', sec: 'm4-s-fi',
      choices: [String.raw`$\infty - \infty$`, String.raw`$0 \times \infty$`, String.raw`$(+\infty) + (+\infty)$`, String.raw`$1^\infty$`], answer: 2,
      explain: String.raw`Une forme est indéterminée quand les limites des morceaux ne suffisent pas à conclure : selon les fonctions, on peut obtenir n'importe quel résultat. Pour $(+\infty) + (+\infty)$, aucune ambiguïté : la somme de deux quantités arbitrairement grandes et positives tend vers $+\infty$. Les formes indéterminées classiques sont $\infty - \infty$, $0\times\infty$, $\frac{0}{0}$, $\frac{\infty}{\infty}$, ainsi que les formes exponentielles $1^\infty$, $0^0$, $\infty^0$.`,
      why: { 0: String.raw`$\infty - \infty$ est indéterminée : $(x + 1) - x \to 1$ mais $x^2 - x \to +\infty$. Croire qu'elle « vaut 0 » est l'erreur classique.`, 1: String.raw`$0\times\infty$ est indéterminée : en $+\infty$, $\frac{1}{x}\times x \to 1$ mais $\frac{1}{x}\times x^2 \to +\infty$.`, 3: String.raw`$1^\infty$ est indéterminée : $\left(1 + \frac{1}{x}\right)^x \to \mathrm{e}$ et non 1. « 1 puissance n'importe quoi = 1 » n'est vrai que si la base vaut exactement 1.` },
      rule: String.raw`Formes indéterminées : $\infty - \infty$, $0\times\infty$, $\frac{0}{0}$, $\frac{\infty}{\infty}$, $1^\infty$, $0^0$, $\infty^0$.`,
      steps: [
        String.raw`Rappel : une forme est <b>indéterminée</b> si les limites des morceaux ne permettent pas de conclure (le résultat dépend des fonctions précises).`,
        String.raw`$(+\infty) + (+\infty)$ : deux quantités arbitrairement grandes et positives ont une somme arbitrairement grande ; la limite est $+\infty$, sans ambiguïté.`,
        String.raw`Les trois autres sont indéterminées : par exemple $(x+1) - x \to 1$ alors que $x^2 - x \to +\infty$, deux formes $\infty - \infty$ aux résultats différents.`
      ] },
    { id: 'm4-q-003', level: 1, q: String.raw`$\displaystyle\lim_{x\to+\infty}\left(1 + \frac{1}{x}\right)^x = $`,
      topic: 'Forme 1 puissance infini', sec: 'm4-s-fi',
      choices: [String.raw`$1$`, String.raw`$+\infty$`, String.raw`$\mathrm{e}$`, String.raw`$0$`], answer: 2,
      explain: String.raw`C'est une forme $1^\infty$ : la base tend vers 1 mais l'exposant tend vers $+\infty$. On passe à l'exponentielle : $\left(1 + \frac{1}{x}\right)^x = \exp\left(x\ln\left(1 + \frac{1}{x}\right)\right)$. Comme $\ln(1 + u) \sim u$ quand $u = \frac{1}{x} \to 0$, l'exposant vérifie $x\ln\left(1 + \frac{1}{x}\right) \sim x\cdot\frac{1}{x} = 1$. Par continuité de $\exp$, la limite vaut $\mathrm{e}^1 = \mathrm{e} \approx 2{,}718$.`,
      why: { 0: String.raw`« 1 puissance quelque chose = 1 » n'est vrai que si la base vaut exactement 1 ; ici elle est un peu plus grande que 1 et l'exposant explose : forme $1^\infty$ indéterminée.`, 1: String.raw`Tu as pensé que l'exposant infini l'emporte ; mais la base se rapproche de 1 assez vite pour compenser : l'exposant de l'exponentielle tend vers 1, la limite est finie.`, 3: String.raw`La base est supérieure à 1, donc la puissance est $\geq 1$ : elle ne peut pas tendre vers 0.` },
      rule: String.raw`$u^v = \mathrm{e}^{v\ln u}$ ; $\displaystyle\lim_{x\to+\infty}\left(1 + \frac{a}{x}\right)^x = \mathrm{e}^{a}$.`,
      steps: [
        String.raw`Rappel : face à une puissance dont la base et l'exposant varient, on écrit $u^v = \mathrm{e}^{v\ln u}$. Ici la base tend vers 1 et l'exposant vers $+\infty$ : forme $1^\infty$, indéterminée.`,
        String.raw`$\left(1 + \frac{1}{x}\right)^x = \exp\left(x\ln\left(1 + \frac{1}{x}\right)\right)$.`,
        String.raw`Avec $u = \frac{1}{x} \to 0$ : $\ln(1 + u) \sim u$, donc $x\ln\left(1 + \frac{1}{x}\right) \sim x\cdot\frac{1}{x} = 1$.`,
        String.raw`Par continuité de $\exp$, la limite vaut $\mathrm{e}^1 = \mathrm{e}$.`
      ] },
    { id: 'm4-q-004', level: 1, q: String.raw`$\displaystyle\lim_{x\to 0}\frac{1 - \cos x}{x^2} = $`,
      topic: 'Limites remarquables', sec: 'm4-s-fi',
      choices: [String.raw`$0$`, String.raw`$\frac{1}{2}$`, String.raw`$1$`, String.raw`$2$`], answer: 1,
      explain: String.raw`C'est une forme $\frac{0}{0}$. Le DL $\cos x = 1 - \frac{x^2}{2} + o(x^2)$ donne $1 - \cos x = \frac{x^2}{2} + o(x^2)$, c'est-à-dire $1 - \cos x \sim \frac{x^2}{2}$. En divisant par $x^2$, le quotient tend vers $\frac{1}{2}$. Contrôle numérique : $\frac{1 - \cos 0{,}1}{0{,}01} \approx 0{,}4996$.`,
      why: { 0: String.raw`Tu as cru que le numérateur tend vers 0 « plus vite » ; en fait il est d'ordre $x^2$, exactement comme le dénominateur.`, 2: String.raw`Tu as utilisé $1 - \cos x \sim x^2$ : il manque le $\frac{1}{2}$, qui vient du $2!$ de la formule de Taylor.`, 3: String.raw`Tu as calculé la limite de l'inverse $\frac{x^2}{1 - \cos x}$, qui vaut 2.` },
      rule: String.raw`$1 - \cos x \underset{0}{\sim} \dfrac{x^2}{2}$.`,
      steps: [
        String.raw`Rappel : le DL usuel $\cos x = 1 - \frac{x^2}{2} + o(x^2)$ donne l'équivalent $1 - \cos x \sim \frac{x^2}{2}$ en 0.`,
        String.raw`On remplace : $\frac{1 - \cos x}{x^2} = \frac{\frac{x^2}{2} + o(x^2)}{x^2} = \frac{1}{2} + o(1)$.`,
        String.raw`Donc la limite vaut $\frac{1}{2}$.`
      ] },
    { id: 'm4-q-005', level: 2, q: String.raw`$\displaystyle\lim_{x\to+\infty}\left(\sqrt{x+1} - \sqrt{x}\right) = $`,
      topic: 'Quantité conjuguée', sec: 'm4-s-fi',
      choices: [String.raw`$1$`, String.raw`$+\infty$`, String.raw`$\frac{1}{2}$`, String.raw`$0$`], answer: 3,
      explain: String.raw`C'est une forme $\infty - \infty$. On multiplie et divise par la quantité conjuguée $\sqrt{x+1} + \sqrt{x}$ : le numérateur devient $(x + 1) - x = 1$. Donc $\sqrt{x+1} - \sqrt{x} = \frac{1}{\sqrt{x+1} + \sqrt{x}}$, dont le dénominateur tend vers $+\infty$ : la limite vaut 0. Ordre de grandeur : pour $x = 10^6$, la différence vaut environ $\frac{1}{2000}$.`,
      why: { 0: String.raw`Tu as écrit $\sqrt{x+1} - \sqrt{x} = \sqrt{(x+1) - x} = \sqrt{1}$ : la racine n'est pas linéaire, $\sqrt{a} - \sqrt{b} \neq \sqrt{a - b}$.`, 1: String.raw`Tu as raisonné sur chaque racine séparément ($\to +\infty$) ; or c'est une forme $\infty - \infty$, et les deux racines sont très proches l'une de l'autre.`, 2: String.raw`$\frac{1}{2}$ est la limite de $\sqrt{x}\left(\sqrt{x+1} - \sqrt{x}\right) = \frac{\sqrt{x}}{\sqrt{x+1} + \sqrt{x}}$, pas de la différence seule.` },
      rule: String.raw`Quantité conjuguée : $\sqrt{a} - \sqrt{b} = \dfrac{a - b}{\sqrt{a} + \sqrt{b}}$.`,
      steps: [
        String.raw`Rappel : une différence de racines en forme $\infty - \infty$ se lève avec la quantité conjuguée : $\sqrt{a} - \sqrt{b} = \frac{(\sqrt{a} - \sqrt{b})(\sqrt{a} + \sqrt{b})}{\sqrt{a} + \sqrt{b}} = \frac{a - b}{\sqrt{a} + \sqrt{b}}$.`,
        String.raw`Avec $a = x + 1$ et $b = x$ : $\sqrt{x+1} - \sqrt{x} = \frac{(x+1) - x}{\sqrt{x+1} + \sqrt{x}} = \frac{1}{\sqrt{x+1} + \sqrt{x}}$.`,
        String.raw`Le dénominateur tend vers $+\infty$, donc le quotient tend vers $0$.`
      ] },
    { id: 'm4-q-006', level: 1, q: String.raw`$f \underset{a}{\sim} g$ signifie :`,
      topic: 'Fonctions équivalentes', sec: 'm4-s-equivalents',
      choices: [String.raw`$f(x) - g(x) \to 0$`, String.raw`$\frac{f(x)}{g(x)} \to 1$`, String.raw`$f$ et $g$ ont la même limite en $a$`, String.raw`$f(a) = g(a)$`], answer: 1,
      explain: String.raw`Par définition, $f \underset{a}{\sim} g$ signifie que $\frac{f(x)}{g(x)} \to 1$ quand $x \to a$ ($g$ ne s'annulant pas près de $a$, sauf éventuellement en $a$). De façon équivalente, $f = g + o(g)$ : l'écart entre $f$ et $g$ est négligeable devant $g$ elle-même. C'est une comparaison <b>relative</b> (en proportion), pas une comparaison de différences ni de limites.`,
      why: { 0: String.raw`Une différence qui tend vers 0 ne suffit pas : en 0, $x - x^2 \to 0$, mais $\frac{x^2}{x} = x \to 0$ et non 1 ; $x$ et $x^2$ ne sont pas équivalents.`, 2: String.raw`Avoir la même limite ne suffit pas : $x$ et $x^2$ tendent tous deux vers 0 en 0 sans être équivalents (l'un est bien plus petit que l'autre).`, 3: String.raw`L'équivalence décrit le comportement <b>au voisinage</b> de $a$ ; la valeur en $a$ (souvent non définie) ne compte pas.` },
      rule: String.raw`$f \underset{a}{\sim} g \iff \dfrac{f}{g} \underset{x\to a}{\longrightarrow} 1 \iff f = g + o(g)$.`,
      steps: [
        String.raw`Rappel : deux fonctions équivalentes en $a$ sont « presque égales en proportion » près de $a$ : leur rapport tend vers 1.`,
        String.raw`Définition : $f \underset{a}{\sim} g \iff \frac{f(x)}{g(x)} \to 1$ quand $x \to a$ ; autrement dit $f = g + o(g)$.`,
        String.raw`Contre-exemple pour les autres propositions : en 0, $x$ et $x^2$ ont la même limite et leur différence tend vers 0, mais $\frac{x^2}{x} = x \to 0 \neq 1$.`
      ] },
    { id: 'm4-q-007', level: 1, q: String.raw`Un équivalent simple de $\ln(1 + x)$ en 0 est :`,
      topic: 'Équivalents usuels', sec: 'm4-s-equivalents',
      choices: [String.raw`$1 + x$`, String.raw`$\ln x$`, String.raw`$x$`, String.raw`$x^2$`], answer: 2,
      explain: String.raw`La limite remarquable $\frac{\ln(1+x)}{x} \to 1$ en 0 est exactement la définition de $\ln(1+x) \sim x$. On la retrouve comme taux d'accroissement de $\ln$ en 1 : $\frac{\ln(1+x) - \ln 1}{x} \to \ln'(1) = 1$. Ou par le DL $\ln(1+x) = x - \frac{x^2}{2} + o(x^2)$, dont le premier terme non nul est $x$.`,
      why: { 0: String.raw`$1 + x \to 1$ alors que $\ln(1+x) \to 0$ : le quotient tend vers 0, pas 1. Tu as confondu avec $\mathrm{e}^x \approx 1 + x$.`, 1: String.raw`$\ln x \to -\infty$ en 0, alors que $\ln(1+x) \to 0$ : tu as « enlevé » le 1 à l'intérieur du logarithme.`, 3: String.raw`$\frac{\ln(1+x)}{x^2} \sim \frac{x}{x^2} = \frac{1}{x}$ ne tend pas vers 1 : $x^2$ est beaucoup plus petit que $\ln(1+x)$ près de 0.` },
      rule: String.raw`En 0 : $\ln(1+x) \sim x$, $\mathrm{e}^x - 1 \sim x$, $\sin x \sim x$, $\tan x \sim x$.`,
      steps: [
        String.raw`Rappel : un équivalent simple de $f$ en 0 est le premier terme non nul de son DL (une fonction $g$ telle que $\frac{f}{g} \to 1$).`,
        String.raw`DL : $\ln(1+x) = x - \frac{x^2}{2} + o(x^2)$ ; le premier terme non nul est $x$.`,
        String.raw`Donc $\frac{\ln(1+x)}{x} = 1 - \frac{x}{2} + o(x) \to 1$ : $\ln(1+x) \sim x$.`
      ] },
    { id: 'm4-q-008', level: 2, q: String.raw`Si $f_1 \sim g_1$ et $f_2 \sim g_2$ en $a$, on peut affirmer en général :`,
      topic: 'Opérations sur les équivalents', sec: 'm4-s-equivalents',
      choices: [String.raw`$f_1 + f_2 \sim g_1 + g_2$`, String.raw`$f_1 f_2 \sim g_1 g_2$`, String.raw`$\mathrm{e}^{f_1} \sim \mathrm{e}^{g_1}$`, String.raw`$f_1 - f_2 \sim g_1 - g_2$`], answer: 1,
      explain: String.raw`Si $\frac{f_1}{g_1} \to 1$ et $\frac{f_2}{g_2} \to 1$, alors $\frac{f_1 f_2}{g_1 g_2} = \frac{f_1}{g_1}\times\frac{f_2}{g_2} \to 1\times 1 = 1$ : les équivalents se <b>multiplient</b> (et se divisent, et passent aux puissances fixes). En revanche, ils ne s'additionnent pas, ne se soustraient pas et ne passent pas à l'exponentielle en général : des compensations peuvent faire disparaître les termes principaux.`,
      why: { 0: String.raw`Faux en cas de compensation : en 0, $x + x^2 \sim x$ et $-x \sim -x$, mais la somme vaut $x^2$, alors que $x + (-x) = 0$ (et rien n'est équivalent à 0).`, 2: String.raw`Faux : en $+\infty$, $x^2 + x \sim x^2$ mais $\frac{\mathrm{e}^{x^2+x}}{\mathrm{e}^{x^2}} = \mathrm{e}^x \to +\infty$. Un écart négligeable en proportion peut devenir énorme après l'exponentielle.`, 3: String.raw`Faux, pour la même raison que la somme : la différence peut faire disparaître les termes principaux, par exemple $(x + x^2) - x = x^2$ en 0.` },
      rule: String.raw`Équivalents : produit, quotient, puissance fixe autorisés ; somme, différence, composition par $\exp$ interdites.`,
      steps: [
        String.raw`Rappel : $f \sim g$ signifie $\frac{f}{g} \to 1$. Une opération est permise si elle préserve ce rapport.`,
        String.raw`Produit : $\frac{f_1 f_2}{g_1 g_2} = \frac{f_1}{g_1}\cdot\frac{f_2}{g_2} \to 1\times 1 = 1$, donc $f_1 f_2 \sim g_1 g_2$ ✔.`,
        String.raw`Somme : contre-exemple en 0 avec $f_1 = x + x^2 \sim x$ et $f_2 = -x \sim -x$ : $f_1 + f_2 = x^2$, alors que $g_1 + g_2 = 0$ ✘.`,
        String.raw`Exponentielle : $x^2 + x \sim x^2$ en $+\infty$, mais $\frac{\mathrm{e}^{x^2+x}}{\mathrm{e}^{x^2}} = \mathrm{e}^x \to +\infty$ ✘.`
      ] },
    { id: 'm4-q-009', level: 1, q: String.raw`Équivalent en 0 de $3x^2 - 5x + x^4$ :`,
      topic: 'Équivalent d\'un polynôme', sec: 'm4-s-equivalents',
      choices: [String.raw`$x^4$`, String.raw`$-5x$`, String.raw`$3x^2$`, String.raw`$5x$`], answer: 1,
      explain: String.raw`Près de 0, plus l'exposant est grand, plus la puissance est petite : $x^4 \ll x^2 \ll x$. Un polynôme est donc équivalent en 0 à son terme non nul de plus <b>bas</b> degré, avec son coefficient et son signe. Ici $3x^2 - 5x + x^4 = -5x\left(1 - \frac{3x}{5} - \frac{x^3}{5}\right)$ et la parenthèse tend vers 1, donc l'équivalent est $-5x$.`,
      why: { 0: String.raw`$x^4$ est l'équivalent en $\pm\infty$ (terme de plus haut degré) ; en 0, c'est au contraire le plus petit des termes.`, 2: String.raw`En 0, $x^2$ est négligeable devant $x$ (par exemple $0{,}01^2 = 0{,}0001 \ll 0{,}01$) : ce n'est pas le terme dominant.`, 3: String.raw`Signe perdu : le coefficient de $x$ est $-5$, et un équivalent garde le signe ($\frac{3x^2 - 5x + x^4}{5x} \to -1$, pas 1).` },
      rule: String.raw`En 0 : polynôme $\sim$ terme de plus bas degré ; en $\pm\infty$ : terme de plus haut degré.`,
      steps: [
        String.raw`Rappel : en 0, $x^n$ est d'autant plus petit que $n$ est grand ($x^4 \ll x^2 \ll x$) ; un polynôme est donc équivalent à son terme non nul de plus <b>bas</b> degré.`,
        String.raw`On factorise ce terme : $3x^2 - 5x + x^4 = -5x\left(1 - \frac{3}{5}x - \frac{1}{5}x^3\right)$.`,
        String.raw`La parenthèse tend vers 1 quand $x \to 0$, donc $3x^2 - 5x + x^4 \sim -5x$.`
      ] },
    { id: 'm4-q-010', level: 1, q: String.raw`Équivalent en $+\infty$ de $3x^2 - 5x + x^4$ :`,
      topic: 'Équivalent d\'un polynôme', sec: 'm4-s-equivalents',
      choices: [String.raw`$-5x$`, String.raw`$3x^2$`, String.raw`$1$`, String.raw`$x^4$`], answer: 3,
      explain: String.raw`Près de $+\infty$, plus l'exposant est grand, plus la puissance est grande : $x \ll x^2 \ll x^4$. Un polynôme est donc équivalent en $\pm\infty$ à son terme de plus <b>haut</b> degré. Ici $3x^2 - 5x + x^4 = x^4\left(1 + \frac{3}{x^2} - \frac{5}{x^3}\right)$ et la parenthèse tend vers 1 : l'équivalent est $x^4$.`,
      why: { 0: String.raw`$-5x$ est l'équivalent en 0 (terme de plus bas degré) ; en $+\infty$, c'est le terme le plus faible.`, 1: String.raw`$3x^2$ est négligeable devant $x^4$ en $+\infty$ : $\frac{3x^2}{x^4} = \frac{3}{x^2} \to 0$.`, 2: String.raw`Le polynôme tend vers $+\infty$, donc son rapport à 1 aussi : il ne peut pas être équivalent à une constante.` },
      rule: String.raw`En $\pm\infty$, un polynôme est équivalent à son terme de plus haut degré.`,
      steps: [
        String.raw`Rappel : en $+\infty$, $x^n$ est d'autant plus grand que $n$ est grand ; un polynôme est équivalent à son terme de plus <b>haut</b> degré.`,
        String.raw`On factorise ce terme : $3x^2 - 5x + x^4 = x^4\left(1 + \frac{3}{x^2} - \frac{5}{x^3}\right)$.`,
        String.raw`La parenthèse tend vers 1 en $+\infty$, donc le polynôme est équivalent à $x^4$.`
      ] },
    { id: 'm4-q-011', level: 1, q: String.raw`Partie régulière du DL de $\mathrm{e}^x$ à l'ordre 3 en 0 :`,
      topic: 'DL de l\'exponentielle', sec: 'm4-s-dl-usuels',
      choices: [String.raw`$1 + x + x^2 + x^3$`, String.raw`$1 + x + \frac{x^2}{2} + \frac{x^3}{6}$`, String.raw`$x + \frac{x^2}{2} + \frac{x^3}{6}$`, String.raw`$1 + x + \frac{x^2}{2} + \frac{x^3}{3}$`], answer: 1,
      explain: String.raw`La formule de Taylor-Young en 0 donne $f(x) = \sum_{k=0}^{n}\frac{f^{(k)}(0)}{k!}x^k + o(x^n)$. Pour $f = \exp$, toutes les dérivées sont égales à $\exp$ et valent donc $\mathrm{e}^0 = 1$ en 0. Les coefficients sont donc les $\frac{1}{k!}$ : $1 + x + \frac{x^2}{2} + \frac{x^3}{6}$, avec $2! = 2$ et $3! = 6$.`,
      why: { 0: String.raw`Il manque les factorielles : $1 + x + x^2 + x^3$ est le DL de $\frac{1}{1-x}$ (série géométrique).`, 2: String.raw`Il manque le terme constant $\mathrm{e}^0 = 1$ : en $x = 0$, le DL doit redonner $f(0) = 1$.`, 3: String.raw`Erreur de factorielle : $3! = 3\times 2\times 1 = 6$, pas 3.` },
      rule: String.raw`$\mathrm{e}^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \dots + \frac{x^n}{n!} + o(x^n)$.`,
      steps: [
        String.raw`Rappel (Taylor-Young en 0) : $f(x) = f(0) + f'(0)x + \frac{f''(0)}{2!}x^2 + \frac{f'''(0)}{3!}x^3 + o(x^3)$.`,
        String.raw`Pour $f = \exp$ : $f' = f'' = f''' = \exp$, donc toutes ces dérivées valent $\mathrm{e}^0 = 1$ en 0.`,
        String.raw`Coefficients : $1$, $1$, $\frac{1}{2!} = \frac{1}{2}$, $\frac{1}{3!} = \frac{1}{6}$ ; partie régulière $1 + x + \frac{x^2}{2} + \frac{x^3}{6}$.`
      ] },
    { id: 'm4-q-012', level: 1, q: String.raw`Partie régulière du DL de $\ln(1+x)$ à l'ordre 3 en 0 :`,
      topic: 'DL du logarithme', sec: 'm4-s-dl-usuels',
      choices: [String.raw`$x + \frac{x^2}{2} + \frac{x^3}{3}$`, String.raw`$x - \frac{x^2}{2} + \frac{x^3}{3}$`, String.raw`$x - \frac{x^2}{2} + \frac{x^3}{6}$`, String.raw`$1 + x - \frac{x^2}{2} + \frac{x^3}{3}$`], answer: 1,
      explain: String.raw`On part de la série géométrique $\frac{1}{1+x} = 1 - x + x^2 + o(x^2)$, qui est la dérivée de $\ln(1+x)$. On primitive terme à terme (c'est permis pour les DL), avec la constante $\ln(1 + 0) = 0$ : $\ln(1+x) = x - \frac{x^2}{2} + \frac{x^3}{3} + o(x^3)$. Les signes alternent et les coefficients sont les $\frac{(-1)^{k-1}}{k}$, sans factorielle.`,
      why: { 0: String.raw`Tous les signes $+$ : c'est le DL de $-\ln(1-x)$. Pour $\ln(1+x)$, les signes alternent, car $\frac{1}{1+x} = 1 - x + x^2 - \dots$`, 2: String.raw`Tu as mis une factorielle au dernier terme (comme pour $\sin$ ou $\exp$) : les coefficients de $\ln(1+x)$ sont les $\frac{1}{k}$, d'où $\frac{x^3}{3}$.`, 3: String.raw`Terme constant en trop : $\ln(1 + 0) = \ln 1 = 0$.` },
      rule: String.raw`$\ln(1+x) = x - \frac{x^2}{2} + \frac{x^3}{3} - \dots + (-1)^{n-1}\frac{x^n}{n} + o(x^n)$.`,
      steps: [
        String.raw`Rappel : on peut primitiver un DL terme à terme, la constante étant la valeur de la fonction en 0. Or $\left(\ln(1+x)\right)' = \frac{1}{1+x}$.`,
        String.raw`Série géométrique : $\frac{1}{1+x} = 1 - x + x^2 + o(x^2)$.`,
        String.raw`On primitive terme à terme, avec $\ln 1 = 0$ : $\ln(1+x) = x - \frac{x^2}{2} + \frac{x^3}{3} + o(x^3)$.`
      ] },
    { id: 'm4-q-013', level: 1, q: String.raw`Partie régulière du DL de $\cos x$ à l'ordre 4 en 0 :`,
      topic: 'DL du cosinus', sec: 'm4-s-dl-usuels',
      choices: [String.raw`$1 + \frac{x^2}{2} + \frac{x^4}{24}$`, String.raw`$1 - \frac{x^2}{2} + \frac{x^4}{12}$`, String.raw`$x - \frac{x^3}{6}$`, String.raw`$1 - \frac{x^2}{2} + \frac{x^4}{24}$`], answer: 3,
      explain: String.raw`Les dérivées successives de $\cos$ en 0 valent $1, 0, -1, 0, 1$ (cycle $\cos, -\sin, -\cos, \sin$). Par Taylor-Young, seuls les termes pairs subsistent, avec des signes alternés : $\cos x = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} + o(x^4)$. Avec $2! = 2$ et $4! = 24$, on obtient $1 - \frac{x^2}{2} + \frac{x^4}{24}$, cohérent avec la parité de $\cos$.`,
      why: { 0: String.raw`Tous les signes $+$ : c'est le DL de $\operatorname{ch} x$. Pour $\cos$, les signes alternent.`, 1: String.raw`Erreur de factorielle : $4! = 4\times 3\times 2\times 1 = 24$, pas 12.`, 2: String.raw`C'est le DL de $\sin x$, fonction impaire ; $\cos$ est paire et vaut 1 en 0.` },
      rule: String.raw`$\cos x = 1 - \frac{x^2}{2} + \frac{x^4}{24} + o(x^4)$ ; $\sin x = x - \frac{x^3}{6} + o(x^4)$.`,
      steps: [
        String.raw`Rappel (Taylor-Young) : le coefficient de $x^k$ dans le DL en 0 est $\frac{f^{(k)}(0)}{k!}$.`,
        String.raw`Dérivées de $\cos$ : $\cos, -\sin, -\cos, \sin, \cos$ ; en 0, elles valent $1, 0, -1, 0, 1$.`,
        String.raw`Coefficients : $1$, $0$, $-\frac{1}{2!} = -\frac{1}{2}$, $0$, $\frac{1}{4!} = \frac{1}{24}$ ; partie régulière $1 - \frac{x^2}{2} + \frac{x^4}{24}$.`
      ] },
    { id: 'm4-q-014', level: 2, q: String.raw`Partie régulière du DL de $(1+x)^\alpha$ à l'ordre 2 en 0 :`,
      topic: 'DL des puissances', sec: 'm4-s-dl-usuels',
      choices: [String.raw`$1 + \alpha x + \frac{\alpha(\alpha-1)}{2}x^2$`, String.raw`$1 + \alpha x + \alpha(\alpha-1)x^2$`, String.raw`$1 + \alpha x + \frac{\alpha^2}{2}x^2$`, String.raw`$1 + \alpha x + \frac{\alpha(\alpha+1)}{2}x^2$`], answer: 0,
      explain: String.raw`On applique Taylor-Young à $f(x) = (1+x)^\alpha$ : $f'(x) = \alpha(1+x)^{\alpha-1}$ et $f''(x) = \alpha(\alpha-1)(1+x)^{\alpha-2}$, donc $f(0) = 1$, $f'(0) = \alpha$ et $f''(0) = \alpha(\alpha-1)$. Le coefficient de $x^2$ est $\frac{f''(0)}{2!} = \frac{\alpha(\alpha-1)}{2}$. Contrôle avec $\alpha = 2$ : $(1+x)^2 = 1 + 2x + x^2$ et $\frac{2\times 1}{2} = 1$.`,
      why: { 1: String.raw`Tu as oublié de diviser par $2! = 2$ dans la formule de Taylor : avec $\alpha = 2$, on obtiendrait $2x^2$ au lieu de $x^2$.`, 2: String.raw`Tu as dérivé deux fois en gardant l'exposant $\alpha$ : comme l'exposant baisse de 1 à chaque dérivation, la dérivée seconde vaut $\alpha(\alpha-1)$, pas $\alpha^2$.`, 3: String.raw`L'exposant <b>diminue</b> à chaque dérivation : $\alpha(\alpha-1)$, pas $\alpha(\alpha+1)$. Avec $\alpha = 2$, on obtiendrait $3x^2$ au lieu de $x^2$.` },
      rule: String.raw`$(1+x)^\alpha = 1 + \alpha x + \frac{\alpha(\alpha-1)}{2}x^2 + o(x^2)$.`,
      steps: [
        String.raw`Rappel (Taylor-Young à l'ordre 2 en 0) : $f(x) = f(0) + f'(0)x + \frac{f''(0)}{2!}x^2 + o(x^2)$.`,
        String.raw`Pour $f(x) = (1+x)^\alpha$ : $f'(x) = \alpha(1+x)^{\alpha-1}$ et $f''(x) = \alpha(\alpha-1)(1+x)^{\alpha-2}$ (l'exposant baisse de 1 à chaque fois).`,
        String.raw`En 0 : $f(0) = 1$, $f'(0) = \alpha$, $f''(0) = \alpha(\alpha-1)$ ; d'où $1 + \alpha x + \frac{\alpha(\alpha-1)}{2}x^2$.`,
        String.raw`Contrôle avec $\alpha = 2$ : on retrouve $(1+x)^2 = 1 + 2x + x^2$ ✔.`
      ] },
    { id: 'm4-q-015', level: 2, q: String.raw`Partie régulière du DL de $\sqrt{1+x}$ à l'ordre 2 en 0 :`,
      topic: 'DL de la racine carrée', sec: 'm4-s-dl-usuels',
      choices: [String.raw`$1 + \frac{x}{2} + \frac{x^2}{8}$`, String.raw`$1 - \frac{x}{2} + \frac{3x^2}{8}$`, String.raw`$1 + \frac{x}{2} - \frac{x^2}{8}$`, String.raw`$1 + \frac{x}{2} - \frac{x^2}{4}$`], answer: 2,
      explain: String.raw`$\sqrt{1+x} = (1+x)^{1/2}$ : on applique le DL de $(1+x)^\alpha$ avec $\alpha = \frac{1}{2}$. Le coefficient de $x$ est $\alpha = \frac{1}{2}$ et celui de $x^2$ est $\frac{\alpha(\alpha-1)}{2} = \frac{\frac{1}{2}\times\left(-\frac{1}{2}\right)}{2} = -\frac{1}{8}$. Donc $\sqrt{1+x} = 1 + \frac{x}{2} - \frac{x^2}{8} + o(x^2)$. Contrôle : $\sqrt{1{,}1} \approx 1 + 0{,}05 - 0{,}00125 = 1{,}04875$ (valeur exacte $1{,}04881$).`,
      why: { 0: String.raw`Signe du terme en $x^2$ : $\alpha - 1 = -\frac{1}{2} \lt 0$, donc le coefficient est négatif (la racine est concave).`, 1: String.raw`C'est le DL de $\frac{1}{\sqrt{1+x}}$, obtenu avec $\alpha = -\frac{1}{2}$ : tu as pris le mauvais exposant.`, 3: String.raw`Oubli du $2!$ : $\frac{1}{2}\times\left(-\frac{1}{2}\right) = -\frac{1}{4}$ doit encore être divisé par 2.` },
      rule: String.raw`$\sqrt{1+x} = 1 + \frac{x}{2} - \frac{x^2}{8} + o(x^2)$.`,
      steps: [
        String.raw`Rappel : $\sqrt{1+x} = (1+x)^{1/2}$ et $(1+x)^\alpha = 1 + \alpha x + \frac{\alpha(\alpha-1)}{2}x^2 + o(x^2)$.`,
        String.raw`Avec $\alpha = \frac{1}{2}$ : coefficient de $x$ : $\frac{1}{2}$ ; coefficient de $x^2$ : $\frac{\frac{1}{2}\times\left(\frac{1}{2} - 1\right)}{2} = \frac{\frac{1}{2}\times\left(-\frac{1}{2}\right)}{2} = \frac{-1/4}{2} = -\frac{1}{8}$.`,
        String.raw`Partie régulière : $1 + \frac{x}{2} - \frac{x^2}{8}$. Contrôle : $\sqrt{1{,}1} \approx 1{,}04875$ (valeur exacte $\approx 1{,}04881$) ✔.`
      ] },
    { id: 'm4-q-016', level: 1, q: String.raw`Partie régulière du DL de $\tan x$ à l'ordre 3 en 0 :`,
      topic: 'DL de la tangente', sec: 'm4-s-dl-usuels',
      choices: [String.raw`$x - \frac{x^3}{3}$`, String.raw`$x + \frac{x^3}{3}$`, String.raw`$x + \frac{x^3}{6}$`, String.raw`$x - \frac{x^3}{6}$`], answer: 1,
      explain: String.raw`$\tan$ est impaire, donc son DL ne contient que des puissances impaires. On le retrouve par produit : $\tan x = \sin x\times\frac{1}{\cos x}$, avec $\sin x = x - \frac{x^3}{6} + o(x^3)$ et $\frac{1}{\cos x} = 1 + \frac{x^2}{2} + o(x^2)$. Le produit donne $x + \frac{x^3}{2} - \frac{x^3}{6} + o(x^3) = x + \frac{x^3}{3} + o(x^3)$.`,
      why: { 0: String.raw`Signe moins : c'est le DL de $\arctan x$. Or $\tan x \gt x$ pour $0 \lt x \lt \frac{\pi}{2}$, donc le terme en $x^3$ est positif.`, 2: String.raw`$x + \frac{x^3}{6}$ est le DL de $\operatorname{sh} x$.`, 3: String.raw`$x - \frac{x^3}{6}$ est le DL de $\sin x$ ; il faut encore multiplier par celui de $\frac{1}{\cos x}$.` },
      rule: String.raw`$\tan x = x + \frac{x^3}{3} + o(x^3)$ ; $\arctan x = x - \frac{x^3}{3} + o(x^3)$.`,
      steps: [
        String.raw`Rappel : $\tan x = \frac{\sin x}{\cos x}$ ; on obtient son DL en multipliant le DL de $\sin x$ par celui de $\frac{1}{\cos x}$.`,
        String.raw`$\sin x = x - \frac{x^3}{6} + o(x^3)$ et $\frac{1}{\cos x} = \frac{1}{1 - \frac{x^2}{2} + o(x^2)} = 1 + \frac{x^2}{2} + o(x^2)$ (car $\frac{1}{1-u} = 1 + u + o(u)$).`,
        String.raw`Produit tronqué à l'ordre 3 : $\left(x - \frac{x^3}{6}\right)\left(1 + \frac{x^2}{2}\right) = x + \frac{x^3}{2} - \frac{x^3}{6} + o(x^3) = x + \frac{x^3}{3} + o(x^3)$.`
      ] },
    { id: 'm4-q-017', level: 1, q: String.raw`Partie régulière du DL de $\arctan x$ à l'ordre 3 en 0 :`,
      topic: 'DL de arctan', sec: 'm4-s-dl-usuels',
      choices: [String.raw`$x + \frac{x^3}{3}$`, String.raw`$x - \frac{x^3}{6}$`, String.raw`$x - \frac{x^3}{3}$`, String.raw`$1 - x^2$`], answer: 2,
      explain: String.raw`La dérivée de $\arctan$ est $\frac{1}{1+x^2}$, dont le DL s'obtient avec la série géométrique en remplaçant $x$ par $-x^2$ : $\frac{1}{1+x^2} = 1 - x^2 + o(x^2)$. On primitive terme à terme avec la constante $\arctan 0 = 0$ : $\arctan x = x - \frac{x^3}{3} + o(x^3)$. Les coefficients sont $\frac{1}{3}$, $\frac{1}{5}$… (des inverses d'entiers, pas de factorielle).`,
      why: { 0: String.raw`Signe $+$ : c'est le DL de $\tan x$. Pour $\arctan$, la primitive de $-x^2$ donne $-\frac{x^3}{3}$.`, 1: String.raw`$x - \frac{x^3}{6}$ est le DL de $\sin x$ (factorielle $3!$) ; pour $\arctan$ on primitive, ce qui donne $\frac{1}{3}$ et non $\frac{1}{6}$.`, 3: String.raw`$1 - x^2$ est le DL de la dérivée $\frac{1}{1+x^2}$ : il faut encore primitiver.` },
      rule: String.raw`$\frac{1}{1+x^2} = 1 - x^2 + x^4 - \dots$ ; $\arctan x = x - \frac{x^3}{3} + \frac{x^5}{5} - \dots$`,
      steps: [
        String.raw`Rappel : on peut primitiver un DL terme à terme, la constante étant la valeur en 0. Ici $(\arctan)'(x) = \frac{1}{1+x^2}$ et $\arctan 0 = 0$.`,
        String.raw`Série géométrique $\frac{1}{1+u} = 1 - u + o(u)$ avec $u = x^2$ : $\frac{1}{1+x^2} = 1 - x^2 + o(x^2)$.`,
        String.raw`Primitive terme à terme : $\arctan x = 0 + x - \frac{x^3}{3} + o(x^3)$.`
      ] },
    { id: 'm4-q-018', level: 1, q: String.raw`$f$ est continue sur $[a, b]$ avec $f(a) \lt 0 \lt f(b)$. On peut affirmer :`,
      topic: 'Théorème des valeurs intermédiaires', sec: 'm4-s-continuite',
      choices: [String.raw`$f$ est strictement croissante`, String.raw`$f$ s'annule exactement une fois sur $\left]a, b\right[$`, String.raw`$f$ s'annule au moins une fois sur $\left]a, b\right[$`, String.raw`$f$ est dérivable`], answer: 2,
      explain: String.raw`Le théorème des valeurs intermédiaires (TVI) affirme qu'une fonction continue sur $[a, b]$ prend toutes les valeurs comprises entre $f(a)$ et $f(b)$. Comme $f(a) \lt 0 \lt f(b)$, la valeur 0 est atteinte : il existe au moins un $c \in \left]a, b\right[$ tel que $f(c) = 0$. Le TVI garantit l'existence, pas l'unicité : il faudrait en plus la stricte monotonie pour avoir une seule solution.`,
      why: { 0: String.raw`Le TVI ne dit rien de la monotonie : la courbe peut monter, redescendre puis remonter entre $a$ et $b$.`, 1: String.raw`Tu as confondu avec le théorème de la bijection : l'unicité demande en plus la stricte monotonie. Exemple : $x^3 - x$ sur $[-2, 2]$ s'annule 3 fois.`, 3: String.raw`Continue n'implique pas dérivable : $x \mapsto |x|$ est continue en 0 mais pas dérivable.` },
      rule: String.raw`TVI : $f$ continue sur $[a, b]$ et $f(a)f(b) \lt 0$ $\Rightarrow$ il existe $c \in \left]a, b\right[$ tel que $f(c) = 0$.`,
      steps: [
        String.raw`Rappel (TVI) : si $f$ est continue sur l'intervalle $[a, b]$, elle prend toutes les valeurs comprises entre $f(a)$ et $f(b)$ — sa courbe ne peut pas « sauter » par-dessus une valeur.`,
        String.raw`Ici $f(a) \lt 0 \lt f(b)$ : la valeur 0 est entre $f(a)$ et $f(b)$, donc il existe au moins un $c \in \left]a, b\right[$ tel que $f(c) = 0$.`,
        String.raw`Le TVI ne donne que l'existence : pour l'unicité, il faudrait la stricte monotonie (contre-exemple : $x^3 - x$ sur $[-2, 2]$ s'annule en $-1$, $0$ et $1$).`
      ] },
    { id: 'm4-q-019', level: 1, q: String.raw`Pour prolonger $f(x) = \frac{\sin x}{x}$ par continuité en 0, on pose $f(0) = $`,
      topic: 'Prolongement par continuité', sec: 'm4-s-continuite',
      choices: [String.raw`$0$`, String.raw`$1$`, String.raw`c'est impossible`, String.raw`$\pi$`], answer: 1,
      explain: String.raw`Une fonction définie près de $a$ (mais pas en $a$) se prolonge par continuité en $a$ si et seulement si elle a une limite <b>finie</b> $\ell$ en $a$ ; on pose alors $f(a) = \ell$. Ici $\frac{\sin x}{x} \to 1$ quand $x \to 0$ (limite remarquable). On pose donc $f(0) = 1$, et la fonction ainsi prolongée est continue sur $\mathbb{R}$.`,
      why: { 0: String.raw`Tu as calculé $\sin 0 = 0$ en oubliant le dénominateur : $\frac{0}{0}$ est une forme indéterminée, et la limite du quotient vaut 1.`, 2: String.raw`Le prolongement n'est impossible que si la limite est infinie ou n'existe pas ; ici elle existe et vaut 1.`, 3: String.raw`Aucun lien avec $\pi$ : $\sin \pi = 0$, mais on étudie le voisinage de $x = 0$.` },
      rule: String.raw`$f$ prolongeable par continuité en $a$ $\iff$ $\lim_{x\to a} f(x) = \ell$ finie ; on pose $f(a) = \ell$.`,
      steps: [
        String.raw`Rappel : prolonger $f$ par continuité en $a$, c'est lui donner en $a$ la valeur $\ell = \lim_{x\to a} f(x)$ ; c'est possible si et seulement si cette limite existe et est <b>finie</b>.`,
        String.raw`$f(x) = \frac{\sin x}{x}$ n'est pas définie en 0 (forme $\frac{0}{0}$), mais $\lim_{x\to 0}\frac{\sin x}{x} = 1$ (limite remarquable : $\sin'(0) = 1$).`,
        String.raw`On pose donc $f(0) = 1$ : la fonction prolongée est continue en 0.`
      ] },
    { id: 'm4-q-020', level: 2, q: String.raw`La formule de Taylor-Young à l'ordre $n$ en $a$ s'applique dès que :`,
      topic: 'Formule de Taylor-Young', sec: 'm4-s-taylor',
      choices: [String.raw`$f$ est continue en $a$`, String.raw`$f$ est $n$ fois dérivable en $a$`, String.raw`$f$ est bornée`, String.raw`$f$ est un polynôme`], answer: 1,
      explain: String.raw`La formule de Taylor-Young à l'ordre $n$ en $a$ s'écrit $f(x) = \sum_{k=0}^{n}\frac{f^{(k)}(a)}{k!}(x-a)^k + o\left((x-a)^n\right)$. Pour que les dérivées $f^{(k)}(a)$ jusqu'à l'ordre $n$ existent, il faut que $f$ soit $n$ fois dérivable en $a$ : c'est l'hypothèse du théorème (souvent énoncé avec $f$ de classe $\mathcal{C}^n$ au voisinage de $a$). C'est un résultat <b>local</b> : il ne dit rien loin de $a$.`,
      why: { 0: String.raw`La continuité ne donne qu'un DL à l'ordre 0 ($f(x) = f(a) + o(1)$) ; pour l'ordre $n$, il faut les dérivées jusqu'à l'ordre $n$.`, 2: String.raw`Être bornée ne dit rien des dérivées : $|x|$ est bornée sur $[-1, 1]$ mais n'a pas de DL à l'ordre 1 en 0.`, 3: String.raw`Les polynômes vérifient la formule, mais elle s'applique à bien d'autres fonctions ($\exp$, $\sin$, $\ln(1+x)$…) : ce n'est pas une condition nécessaire.` },
      rule: String.raw`$f$ $n$ fois dérivable en $a$ $\Rightarrow$ $f(x) = \sum_{k=0}^{n}\frac{f^{(k)}(a)}{k!}(x-a)^k + o\left((x-a)^n\right)$.`,
      steps: [
        String.raw`Rappel : un DL à l'ordre $n$ en $a$ approche $f$ par un polynôme de degré $\leq n$ en $(x - a)$, avec une erreur négligeable devant $(x-a)^n$.`,
        String.raw`Taylor-Young fournit ce polynôme à l'aide des dérivées : les coefficients sont les $\frac{f^{(k)}(a)}{k!}$ pour $k = 0, \dots, n$.`,
        String.raw`Il faut donc que $f'(a), \dots, f^{(n)}(a)$ existent : $f$ doit être $n$ fois dérivable en $a$.`
      ] },
    { id: 'm4-q-021', level: 2, q: String.raw`Au voisinage de 0, $o(x^2) + o(x^3) = $`,
      topic: 'Calcul avec les petits o', sec: 'm4-s-taylor',
      choices: [String.raw`$o(x^3)$`, String.raw`$o(x^2)$`, String.raw`$o(x^5)$`, String.raw`$0$`], answer: 1,
      explain: String.raw`Près de 0, $|x^3| \leq |x^2|$, donc toute quantité négligeable devant $x^3$ est aussi négligeable devant $x^2$ : un $o(x^3)$ est un $o(x^2)$. La somme $o(x^2) + o(x^3)$ est donc une somme de deux $o(x^2)$, c'est-à-dire un $o(x^2)$. On ne peut pas faire mieux : le terme $o(x^2)$ peut valoir par exemple $x^{2{,}5}$, qui n'est pas un $o(x^3)$. Règle pratique : on garde la précision la plus <b>faible</b> (le plus petit exposant).`,
      why: { 0: String.raw`Tu as gardé la précision la plus forte : mais $o(x^2)$ peut valoir $x^{2{,}5}$, et $\frac{x^{2{,}5}}{x^3} = x^{-0{,}5} \to +\infty$ : ce n'est pas un $o(x^3)$.`, 2: String.raw`Tu as additionné les exposants comme pour un produit : c'est $x^2\cdot o(x^3)$ qui serait un $o(x^5)$, pas la somme.`, 3: String.raw`Deux quantités négligeables ne s'annulent pas : $o(\cdot)$ désigne une fonction inconnue, pas zéro.` },
      rule: String.raw`En 0 : $o(x^n) + o(x^p) = o\left(x^{\min(n, p)}\right)$ et $x^p\,o(x^n) = o(x^{n+p})$.`,
      steps: [
        String.raw`Rappel : $o(x^n)$ désigne une fonction $\varepsilon(x)$ telle que $\frac{\varepsilon(x)}{x^n} \to 0$ en 0 (« négligeable devant $x^n$ »).`,
        String.raw`Si $\frac{\varepsilon(x)}{x^3} \to 0$, alors $\frac{\varepsilon(x)}{x^2} = x\cdot\frac{\varepsilon(x)}{x^3} \to 0$ : tout $o(x^3)$ est un $o(x^2)$.`,
        String.raw`Donc $o(x^2) + o(x^3) = o(x^2) + o(x^2) = o(x^2)$ : on garde le plus petit exposant.`
      ] },
    { id: 'm4-q-022', level: 2, q: String.raw`Au voisinage de 0, l'égalité la plus précise est $x\cdot o(x^2) = \dots$`,
      topic: 'Calcul avec les petits o', sec: 'm4-s-taylor',
      choices: [String.raw`$o(x)$`, String.raw`$o(x^3)$`, String.raw`$x^3$`, String.raw`$o(x^2)$`], answer: 1,
      explain: String.raw`Si $\varepsilon(x) = o(x^2)$, c'est-à-dire $\frac{\varepsilon(x)}{x^2} \to 0$, alors $\frac{x\,\varepsilon(x)}{x^3} = \frac{\varepsilon(x)}{x^2} \to 0$ : donc $x\cdot o(x^2) = o(x^3)$. En multipliant par $x$, on « gagne » un degré. Les réponses $o(x)$ et $o(x^2)$ sont vraies, mais moins précises ; la question demande la plus précise.`,
      why: { 0: String.raw`Vrai, mais très peu précis : on perd deux degrés d'information. La question demande l'égalité la plus précise.`, 2: String.raw`Un $o(\dots)$ est une fonction inconnue négligeable, pas une puissance précise : on ne peut pas affirmer qu'il vaut $x^3$ (il peut valoir $x^4$, ou 0).`, 3: String.raw`Vrai mais moins précis : tu as oublié que la multiplication par $x$ fait gagner un degré, d'où $o(x^3)$.` },
      rule: String.raw`$x^p\cdot o(x^n) = o(x^{n+p})$.`,
      steps: [
        String.raw`Rappel : $\varepsilon(x) = o(x^2)$ signifie $\frac{\varepsilon(x)}{x^2} \to 0$ quand $x \to 0$.`,
        String.raw`On teste la précision $x^3$ : $\frac{x\,\varepsilon(x)}{x^3} = \frac{\varepsilon(x)}{x^2} \to 0$.`,
        String.raw`Donc $x\cdot o(x^2) = o(x^3)$ : multiplier par $x^p$ augmente l'ordre de $p$.`
      ] },
    { id: 'm4-q-023', level: 3, q: String.raw`DL à l'ordre 3 en 0 de $\mathrm{e}^{\sin x}$ (partie régulière) :`,
      topic: 'DL d\'une composée', sec: 'm4-s-dl-operations',
      choices: [String.raw`$1 + x + \frac{x^2}{2} + \frac{x^3}{6}$`, String.raw`$1 + x + \frac{x^2}{2}$`, String.raw`$1 + x - \frac{x^2}{2}$`, String.raw`$1 + x + \frac{x^2}{2} - \frac{x^3}{6}$`], answer: 1,
      explain: String.raw`On compose les DL : $u = \sin x = x - \frac{x^3}{6} + o(x^3)$ tend vers 0, et $\mathrm{e}^u = 1 + u + \frac{u^2}{2} + \frac{u^3}{6} + o(u^3)$. À l'ordre 3 : $u^2 = x^2 + o(x^3)$ et $u^3 = x^3 + o(x^3)$. On somme : $1 + \left(x - \frac{x^3}{6}\right) + \frac{x^2}{2} + \frac{x^3}{6} + o(x^3) = 1 + x + \frac{x^2}{2} + o(x^3)$ : le terme en $x^3$ s'annule.`,
      why: { 0: String.raw`C'est le DL de $\mathrm{e}^x$ : remplacer $\sin x$ par $x$ oublie le $-\frac{x^3}{6}$, qui compte à l'ordre 3.`, 2: String.raw`Erreur de signe : $\frac{u^2}{2} = \frac{x^2}{2} + o(x^3)$ est positif (c'est un carré).`, 3: String.raw`Tu as oublié le terme $\frac{u^3}{6} = \frac{x^3}{6}$, qui compense exactement le $-\frac{x^3}{6}$ de $\sin x$.` },
      rule: String.raw`Composée $f\big(u(x)\big)$ avec $u \to 0$ : développer $f(u)$, remplacer $u$ par son DL, puis tronquer.`,
      steps: [
        String.raw`Rappel : pour le DL de $f\big(u(x)\big)$ avec $u(x) \to 0$, on écrit le DL de $f(u)$ en $u$, on y remplace $u$ par son DL en $x$ et on garde les termes de degré $\leq 3$.`,
        String.raw`$u = \sin x = x - \frac{x^3}{6} + o(x^3)$ ; donc $u^2 = x^2 + o(x^3)$ et $u^3 = x^3 + o(x^3)$.`,
        String.raw`$\mathrm{e}^u = 1 + u + \frac{u^2}{2} + \frac{u^3}{6} + o(u^3) = 1 + x - \frac{x^3}{6} + \frac{x^2}{2} + \frac{x^3}{6} + o(x^3)$.`,
        String.raw`Les termes en $x^3$ se compensent : $\mathrm{e}^{\sin x} = 1 + x + \frac{x^2}{2} + o(x^3)$.`
      ] },
    { id: 'm4-q-024', level: 2, q: String.raw`DL à l'ordre 2 de $\ln x$ en 1 (partie régulière) :`,
      topic: 'DL en un point a', sec: 'm4-s-taylor',
      choices: [String.raw`$x - \frac{x^2}{2}$`, String.raw`$(x-1) - \frac{(x-1)^2}{2}$`, String.raw`$(x-1) + \frac{(x-1)^2}{2}$`, String.raw`$1 + (x-1) - \frac{(x-1)^2}{2}$`], answer: 1,
      explain: String.raw`Un DL en $a = 1$ s'écrit en puissances de $(x - 1)$. On pose $h = x - 1 \to 0$ : $\ln x = \ln(1 + h)$, et on utilise le DL usuel en 0 : $\ln(1 + h) = h - \frac{h^2}{2} + o(h^2)$. On revient à $x$ : $\ln x = (x - 1) - \frac{(x-1)^2}{2} + o\left((x-1)^2\right)$. Contrôle : en $x = 1$ on retrouve $\ln 1 = 0$, et la pente vaut $\ln'(1) = 1$.`,
      why: { 0: String.raw`C'est le DL de $\ln(1+x)$ en 0 ; en $a = 1$, il faut des puissances de $x - 1$ (sinon, en $x = 1$, on trouverait $\frac{1}{2} \neq \ln 1$).`, 2: String.raw`Signe du terme en $h^2$ : $\ln(1+h) = h - \frac{h^2}{2} + \dots$, car $\ln$ est concave (courbe sous sa tangente).`, 3: String.raw`Terme constant en trop : en $x = 1$, le DL doit redonner $\ln 1 = 0$, pas 1.` },
      rule: String.raw`DL en $a$ : poser $h = x - a$, développer en $h \to 0$, puis remplacer $h$ par $x - a$.`,
      steps: [
        String.raw`Rappel : un DL en $a$ est un développement en puissances de $(x - a)$ ; méthode : poser $h = x - a$, qui tend vers 0, et se ramener aux DL usuels en 0.`,
        String.raw`Avec $h = x - 1$ : $\ln x = \ln(1 + h) = h - \frac{h^2}{2} + o(h^2)$.`,
        String.raw`On remplace $h$ : $\ln x = (x - 1) - \frac{(x-1)^2}{2} + o\left((x-1)^2\right)$. Contrôle : en $x = 1$, on obtient $0 = \ln 1$ ✔.`
      ] },
    { id: 'm4-q-025', level: 2, q: String.raw`Si $f(x) = 1 + 2x + 3x^3 + o(x^3)$ en 0, la courbe de $f$, par rapport à sa tangente en 0 :`,
      topic: 'Position par rapport à la tangente', sec: 'm4-s-applications',
      choices: [String.raw`est au-dessus au voisinage de 0`, String.raw`est en dessous au voisinage de 0`, String.raw`la traverse : point d'inflexion`, String.raw`on ne peut pas conclure`], answer: 2,
      explain: String.raw`Le DL $f(x) = 1 + 2x + 3x^3 + o(x^3)$ donne la tangente en 0 : $y = 1 + 2x$ (partie de degré $\leq 1$). L'écart $f(x) - (1 + 2x) = 3x^3 + o(x^3) \sim 3x^3$ a le signe de $3x^3$ près de 0 : négatif pour $x \lt 0$, positif pour $x \gt 0$. La courbe passe donc de dessous à dessus la tangente : elle la traverse, c'est un point d'inflexion.`,
      why: { 0: String.raw`Tu n'as regardé que $x \gt 0$ : à gauche de 0, $3x^3 \lt 0$ et la courbe est en dessous de la tangente.`, 1: String.raw`Tu n'as regardé que $x \lt 0$ : à droite de 0, $3x^3 \gt 0$ et la courbe est au-dessus.`, 3: String.raw`Le premier terme non nul après l'ordre 1 suffit pour conclure : ici $3x^3$, de degré impair, qui change de signe en 0.` },
      rule: String.raw`Si $f(x) = a + bx + cx^k + o(x^k)$ avec $c \neq 0$ : $k$ pair $\Rightarrow$ courbe d'un seul côté ; $k$ impair $\Rightarrow$ inflexion.`,
      steps: [
        String.raw`Rappel : la tangente en 0 est donnée par la partie de degré $\leq 1$ du DL ; la position de la courbe est donnée par le signe du <b>premier terme non nul suivant</b>.`,
        String.raw`Tangente : $y = 1 + 2x$. Écart : $f(x) - (1 + 2x) = 3x^3 + o(x^3) \sim 3x^3$.`,
        String.raw`$3x^3 \lt 0$ pour $x \lt 0$ (courbe en dessous) et $3x^3 \gt 0$ pour $x \gt 0$ (courbe au-dessus) : la courbe traverse sa tangente, c'est un point d'inflexion.`
      ] },
    { id: 'm4-q-026', level: 2, q: String.raw`Si $f(x) = 2 - x^2 + o(x^2)$ en 0, alors en 0, $f$ présente :`,
      topic: 'Extremum local', sec: 'm4-s-applications',
      choices: [String.raw`un minimum local`, String.raw`un maximum local`, String.raw`un point d'inflexion`, String.raw`rien de particulier`], answer: 1,
      explain: String.raw`Le DL $f(x) = 2 - x^2 + o(x^2)$ montre que $f(0) = 2$ et que le terme en $x$ est nul : $f'(0) = 0$, la tangente est horizontale ($y = 2$). L'écart $f(x) - 2 \sim -x^2$ est négatif pour $x \neq 0$ proche de 0, donc $f(x) \leq f(0)$ au voisinage de 0. C'est un maximum local.`,
      why: { 0: String.raw`Erreur de signe : $f(x) - 2 \sim -x^2 \leq 0$, donc $f$ est en dessous de $f(0)$. Un minimum correspondrait à un terme $+x^2$.`, 2: String.raw`Le premier terme après la constante est de degré pair ($x^2$) : il ne change pas de signe, donc pas d'inflexion.`, 3: String.raw`Tangente horizontale et terme d'ordre 2 négatif : c'est exactement la signature d'un maximum local.` },
      rule: String.raw`$f(x) = f(a) + c(x-a)^2 + o\left((x-a)^2\right)$ : $c \lt 0$ maximum local, $c \gt 0$ minimum local.`,
      steps: [
        String.raw`Rappel : si le DL est $f(a) + c(x - a)^2 + o\left((x-a)^2\right)$ (sans terme du premier degré), la tangente est horizontale et le signe de $c$ donne la position : $c \lt 0$ maximum, $c \gt 0$ minimum.`,
        String.raw`Ici $f(0) = 2$ et il n'y a pas de terme en $x$ : $f'(0) = 0$, tangente $y = 2$.`,
        String.raw`$f(x) - 2 \sim -x^2 \leq 0$ près de 0 : $f(x) \leq f(0)$, donc maximum local en 0.`
      ] },
    { id: 'm4-q-027', level: 2, q: String.raw`Si $f(x) = x + 1 + \frac{2}{x} + o\left(\frac{1}{x}\right)$ en $+\infty$, alors :`,
      topic: 'Asymptote oblique', sec: 'm4-s-applications',
      choices: [String.raw`asymptote $y = x$, courbe au-dessus`, String.raw`asymptote $y = x + 1$, courbe au-dessus`, String.raw`asymptote $y = x + 1$, courbe en dessous`, String.raw`asymptote $y = x + 3$`], answer: 1,
      explain: String.raw`On lit le développement en $+\infty$ : la partie affine $x + 1$ donne l'asymptote, le terme suivant $\frac{2}{x}$ donne la position. En effet $f(x) - (x + 1) = \frac{2}{x} + o\left(\frac{1}{x}\right) \to 0$ : la droite $y = x + 1$ est asymptote. De plus $f(x) - (x+1) \sim \frac{2}{x} \gt 0$ pour $x \gt 0$ : la courbe est au-dessus de l'asymptote.`,
      why: { 0: String.raw`$f(x) - x \to 1 \neq 0$ : la droite $y = x$ n'est pas asymptote, il faut garder la constante 1.`, 2: String.raw`Erreur de signe : en $+\infty$, $\frac{2}{x} \gt 0$, donc la courbe est au-dessus.`, 3: String.raw`Tu as ajouté le 2 de $\frac{2}{x}$ à la constante : ce terme tend vers 0, il ne fait pas partie de l'asymptote, il donne seulement la position.` },
      rule: String.raw`$f(x) = ax + b + \frac{c}{x} + o\left(\frac{1}{x}\right)$ : asymptote $y = ax + b$, position donnée par le signe de $\frac{c}{x}$.`,
      steps: [
        String.raw`Rappel : si $f(x) = ax + b + \varepsilon(x)$ avec $\varepsilon(x) \to 0$, la droite $y = ax + b$ est asymptote ; le signe de $\varepsilon(x)$ donne la position de la courbe.`,
        String.raw`Ici $f(x) - (x + 1) = \frac{2}{x} + o\left(\frac{1}{x}\right) \to 0$ : asymptote $y = x + 1$.`,
        String.raw`$f(x) - (x + 1) \sim \frac{2}{x} \gt 0$ en $+\infty$ : la courbe est au-dessus de l'asymptote.`
      ] },
    { id: 'm4-q-028', level: 2, q: String.raw`Équivalent en 0 de $\mathrm{e}^x - 1 - x$ :`,
      topic: 'Équivalent par DL', sec: 'm4-s-equivalents',
      choices: [String.raw`$x$`, String.raw`$\frac{x^2}{2}$`, String.raw`$x^2$`, String.raw`$0$`], answer: 1,
      explain: String.raw`Les équivalents ne se soustraient pas : savoir que $\mathrm{e}^x - 1 \sim x$ ne permet pas de conclure sur $\mathrm{e}^x - 1 - x$. On utilise le DL à l'ordre 2 : $\mathrm{e}^x = 1 + x + \frac{x^2}{2} + o(x^2)$. Après soustraction de $1 + x$, il reste $\frac{x^2}{2} + o(x^2)$ : le premier terme non nul donne l'équivalent $\frac{x^2}{2}$.`,
      why: { 0: String.raw`$\mathrm{e}^x - 1 \sim x$, mais on retranche justement $x$ : les termes d'ordre 1 se compensent, il faut aller à l'ordre 2.`, 2: String.raw`Tu as oublié le $\frac{1}{2!}$ du DL de $\mathrm{e}^x$ : le terme d'ordre 2 est $\frac{x^2}{2}$, pas $x^2$.`, 3: String.raw`Une fonction non nulle près de 0 n'est jamais équivalente à 0 ; « $x - x = 0$ » vient d'une soustraction interdite d'équivalents.` },
      rule: String.raw`Équivalent d'une somme ou d'une différence : DL jusqu'au premier terme non nul.`,
      steps: [
        String.raw`Rappel : un équivalent en 0 est le premier terme <b>non nul</b> du DL. Les équivalents ne se soustrayant pas, il faut ici un DL.`,
        String.raw`$\mathrm{e}^x = 1 + x + \frac{x^2}{2} + o(x^2)$, donc $\mathrm{e}^x - 1 - x = \frac{x^2}{2} + o(x^2)$.`,
        String.raw`Premier terme non nul : $\frac{x^2}{2}$, donc $\mathrm{e}^x - 1 - x \sim \frac{x^2}{2}$.`
      ] },
    { id: 'm4-q-029', level: 1, q: String.raw`$\displaystyle\lim_{x\to 0}\frac{\mathrm{e}^{2x} - 1}{x} = $`,
      topic: 'Limites et équivalents', sec: 'm4-s-equivalents',
      choices: [String.raw`$1$`, String.raw`$2$`, String.raw`$\frac{1}{2}$`, String.raw`$0$`], answer: 1,
      explain: String.raw`C'est une forme $\frac{0}{0}$. L'équivalent usuel $\mathrm{e}^u - 1 \sim u$ quand $u \to 0$ s'applique avec $u = 2x$ : $\mathrm{e}^{2x} - 1 \sim 2x$. Les équivalents passent au quotient : $\frac{\mathrm{e}^{2x} - 1}{x} \sim \frac{2x}{x} = 2$. La limite vaut donc 2 (c'est aussi la dérivée de $\mathrm{e}^{2x}$ en 0).`,
      why: { 0: String.raw`Tu as utilisé $\mathrm{e}^{2x} - 1 \sim x$ : il faut remplacer $u$ par $2x$, ce qui donne $2x$.`, 2: String.raw`Facteur inversé : $\frac{2x}{x} = 2$, pas $\frac{x}{2x}$.`, 3: String.raw`Forme $\frac{0}{0}$, pas 0 : numérateur et dénominateur tendent vers 0 à la même vitesse.` },
      rule: String.raw`$\mathrm{e}^u - 1 \sim u$ quand $u \to 0$ (par exemple $u = ax$).`,
      steps: [
        String.raw`Rappel : en 0, $\mathrm{e}^u - 1 \sim u$ dès que $u \to 0$, et les équivalents se divisent.`,
        String.raw`Avec $u = 2x \to 0$ : $\mathrm{e}^{2x} - 1 \sim 2x$.`,
        String.raw`$\frac{\mathrm{e}^{2x} - 1}{x} \sim \frac{2x}{x} = 2$ : la limite vaut 2.`
      ] },
    { id: 'm4-q-030', level: 2, q: String.raw`$\displaystyle\lim_{x\to 0}\frac{\ln(1 + 3x)}{\sin(2x)} = $`,
      topic: 'Limites et équivalents', sec: 'm4-s-equivalents',
      choices: [String.raw`$\frac{2}{3}$`, String.raw`$1$`, String.raw`$6$`, String.raw`$\frac{3}{2}$`], answer: 3,
      explain: String.raw`C'est une forme $\frac{0}{0}$. On remplace chaque morceau par son équivalent : $\ln(1 + 3x) \sim 3x$ (car $\ln(1+u) \sim u$ avec $u = 3x$) et $\sin(2x) \sim 2x$ (car $\sin u \sim u$ avec $u = 2x$). Les équivalents se divisent : $\frac{\ln(1+3x)}{\sin(2x)} \sim \frac{3x}{2x} = \frac{3}{2}$. La limite vaut donc $\frac{3}{2}$.`,
      why: { 0: String.raw`Tu as inversé le quotient : c'est $\frac{3x}{2x}$, numérateur sur dénominateur.`, 1: String.raw`Tu as remplacé les deux fonctions par $x$ : or $\ln(1+3x) \sim 3x$ et $\sin(2x) \sim 2x$, les coefficients comptent.`, 2: String.raw`Tu as multiplié les coefficients ($3\times 2$) au lieu de les diviser.` },
      rule: String.raw`$\ln(1+u) \sim u$ et $\sin u \sim u$ quand $u \to 0$ ; les équivalents passent aux quotients.`,
      steps: [
        String.raw`Rappel : en 0, $\ln(1+u) \sim u$ et $\sin u \sim u$ dès que $u \to 0$ ; dans un quotient, on peut remplacer numérateur et dénominateur par des équivalents.`,
        String.raw`$\ln(1 + 3x) \sim 3x$ (avec $u = 3x$) et $\sin(2x) \sim 2x$ (avec $u = 2x$).`,
        String.raw`$\frac{\ln(1 + 3x)}{\sin(2x)} \sim \frac{3x}{2x} = \frac{3}{2}$ : la limite vaut $\frac{3}{2}$.`
      ] },
    { id: 'm4-q-031', level: 2, q: String.raw`$\displaystyle\lim_{x\to+\infty} x\sin\frac{1}{x} = $`,
      topic: 'Changement de variable', sec: 'm4-s-fi',
      choices: [String.raw`$0$`, String.raw`$1$`, String.raw`$+\infty$`, String.raw`elle n'existe pas`], answer: 1,
      explain: String.raw`C'est une forme $\infty\times 0$. On pose $X = \frac{1}{x}$, qui tend vers $0^+$ quand $x \to +\infty$ : $x\sin\frac{1}{x} = \frac{\sin X}{X}$. Par la limite remarquable $\frac{\sin X}{X} \to 1$, la limite cherchée vaut 1. Autrement dit, $\sin\frac{1}{x} \sim \frac{1}{x}$ en $+\infty$, ce qui compense exactement le facteur $x$.`,
      why: { 0: String.raw`Confusion avec la limite en 0 : quand $x \to 0$, $x\sin\frac{1}{x} \to 0$ (un terme qui tend vers 0 fois un terme borné). Ici $x \to +\infty$.`, 2: String.raw`Le facteur $x \to +\infty$ est exactement compensé par $\sin\frac{1}{x} \sim \frac{1}{x} \to 0$ : la limite est finie.`, 3: String.raw`Tu as pensé que le sinus oscille ; mais son argument $\frac{1}{x}$ tend vers 0, il n'y a pas d'oscillation. La limite existe et vaut 1.` },
      rule: String.raw`Changement de variable $X = \frac{1}{x}$ : $x \to +\infty \iff X \to 0^+$.`,
      steps: [
        String.raw`Rappel : pour une limite en $+\infty$ où apparaît $\frac{1}{x}$, on pose $X = \frac{1}{x}$ ; alors $X \to 0^+$ et on se ramène aux limites remarquables en 0.`,
        String.raw`$x\sin\frac{1}{x} = \frac{\sin X}{X}$ avec $X = \frac{1}{x}$.`,
        String.raw`$\frac{\sin X}{X} \to 1$ quand $X \to 0$ : la limite vaut 1.`
      ] },
    { id: 'm4-q-032', level: 2, q: String.raw`En 0, $\cos x \sim 1$. Peut-on en déduire $\cos x - 1 \sim 0$ ?`,
      topic: 'Pièges des équivalents', sec: 'm4-s-equivalents',
      choices: [String.raw`Oui, on soustrait 1 des deux côtés`, String.raw`Non : on ne soustrait pas des équivalents ; en fait $\cos x - 1 \sim -\frac{x^2}{2}$`, String.raw`Oui, car $\cos x - 1 \to 0$`, String.raw`Non, car $\cos x$ n'est pas équivalent à 1 en 0`], answer: 1,
      explain: String.raw`On a bien $\cos x \sim 1$ en 0 (le rapport tend vers 1), mais les équivalents ne passent ni aux sommes ni aux différences : on ne peut pas « retrancher 1 des deux côtés ». D'ailleurs « être équivalent à 0 » n'a pas de sens pour une fonction non nulle, puisqu'on ne peut pas diviser par 0. Le DL $\cos x = 1 - \frac{x^2}{2} + o(x^2)$ donne le bon résultat : $\cos x - 1 \sim -\frac{x^2}{2}$.`,
      why: { 0: String.raw`C'est précisément l'opération interdite : on ne soustrait pas des équivalents (les termes principaux se compensent, il faut regarder le terme suivant).`, 2: String.raw`Tendre vers 0 n'est pas « être équivalent à 0 » : $f \sim 0$ voudrait dire $\frac{f}{0} \to 1$, ce qui n'a pas de sens.`, 3: String.raw`$\frac{\cos x}{1} \to 1$ : on a bien $\cos x \sim 1$ en 0. L'erreur est dans la soustraction, pas dans l'équivalent de départ.` },
      rule: String.raw`Jamais d'équivalent à 0, jamais de somme d'équivalents : utiliser un DL.`,
      steps: [
        String.raw`Rappel : $f \sim g$ signifie $\frac{f}{g} \to 1$ ; cette relation se conserve par produit et quotient, mais <b>pas</b> par somme ou différence.`,
        String.raw`$\cos x \sim 1$ est vrai ($\frac{\cos x}{1} \to 1$), mais on ne peut pas en déduire $\cos x - 1 \sim 1 - 1 = 0$ (et « $\sim 0$ » n'a pas de sens).`,
        String.raw`Le DL $\cos x = 1 - \frac{x^2}{2} + o(x^2)$ donne $\cos x - 1 = -\frac{x^2}{2} + o(x^2)$, donc $\cos x - 1 \sim -\frac{x^2}{2}$.`
      ] },
    { id: 'm4-q-033', level: 1, q: String.raw`DL de $\frac{1}{1-x}$ à l'ordre $n$ en 0 (partie régulière) :`,
      topic: 'Série géométrique', sec: 'm4-s-dl-usuels',
      choices: [String.raw`$1 + x + x^2 + \dots + x^n$`, String.raw`$1 - x + x^2 - \dots + (-1)^n x^n$`, String.raw`$1 + x + \frac{x^2}{2} + \dots + \frac{x^n}{n!}$`, String.raw`$x + \frac{x^2}{2} + \dots + \frac{x^n}{n}$`], answer: 0,
      explain: String.raw`C'est la somme géométrique : $(1 - x)(1 + x + \dots + x^n) = 1 - x^{n+1}$, donc $\frac{1}{1-x} = 1 + x + \dots + x^n + \frac{x^{n+1}}{1-x}$. Le reste $\frac{x^{n+1}}{1-x}$ est un $o(x^n)$ en 0, car $\frac{x^{n+1}}{(1-x)x^n} = \frac{x}{1-x} \to 0$. Tous les coefficients valent 1, sans factorielle ni signe alterné.`,
      why: { 1: String.raw`Signes alternés : c'est le DL de $\frac{1}{1+x}$ (obtenu en remplaçant $x$ par $-x$).`, 2: String.raw`Factorielles : c'est le DL de $\mathrm{e}^x$.`, 3: String.raw`Coefficients $\frac{1}{k}$ sans terme constant : c'est le DL de $-\ln(1-x)$, une primitive de $\frac{1}{1-x}$.` },
      rule: String.raw`$\frac{1}{1-x} = 1 + x + \dots + x^n + o(x^n)$ ; $\frac{1}{1+x} = 1 - x + \dots + (-1)^n x^n + o(x^n)$.`,
      steps: [
        String.raw`Rappel (somme géométrique) : pour $x \neq 1$, $1 + x + \dots + x^n = \frac{1 - x^{n+1}}{1 - x}$.`,
        String.raw`Donc $\frac{1}{1-x} = 1 + x + \dots + x^n + \frac{x^{n+1}}{1-x}$.`,
        String.raw`Le reste est un $o(x^n)$ : $\frac{x^{n+1}}{(1-x)x^n} = \frac{x}{1-x} \to 0$. Partie régulière : $1 + x + x^2 + \dots + x^n$.`
      ] },
    { id: 'm4-q-034', level: 2, q: String.raw`DL de $\operatorname{ch} x$ à l'ordre 4 en 0 (partie régulière) :`,
      topic: 'DL de ch', sec: 'm4-s-dl-usuels',
      choices: [String.raw`$1 - \frac{x^2}{2} + \frac{x^4}{24}$`, String.raw`$1 + x^2 + x^4$`, String.raw`$1 + \frac{x^2}{2} + \frac{x^4}{24}$`, String.raw`$x + \frac{x^3}{6}$`], answer: 2,
      explain: String.raw`$\operatorname{ch} x = \frac{\mathrm{e}^x + \mathrm{e}^{-x}}{2}$ est la partie paire de $\mathrm{e}^x$. En additionnant les DL de $\mathrm{e}^x$ et de $\mathrm{e}^{-x}$, les termes impairs se compensent et les termes pairs doublent ; après division par 2, il reste $1 + \frac{x^2}{2!} + \frac{x^4}{4!}$, tous positifs. Avec $2! = 2$ et $4! = 24$ : $1 + \frac{x^2}{2} + \frac{x^4}{24}$.`,
      why: { 0: String.raw`C'est le DL de $\cos x$, dont les signes alternent ; pour $\operatorname{ch}$, tous les signes sont $+$.`, 1: String.raw`Il manque les factorielles $2!$ et $4!$ héritées du DL de $\mathrm{e}^x$.`, 3: String.raw`$x + \frac{x^3}{6}$ est le DL de $\operatorname{sh} x$ (partie impaire) ; $\operatorname{ch}$ est paire et vaut 1 en 0.` },
      rule: String.raw`$\operatorname{ch} x = 1 + \frac{x^2}{2} + \frac{x^4}{24} + o(x^4)$ ; $\operatorname{sh} x = x + \frac{x^3}{6} + o(x^4)$.`,
      steps: [
        String.raw`Rappel : $\operatorname{ch} x = \frac{\mathrm{e}^x + \mathrm{e}^{-x}}{2}$ et $\mathrm{e}^x = 1 + x + \frac{x^2}{2} + \frac{x^3}{6} + \frac{x^4}{24} + o(x^4)$.`,
        String.raw`En remplaçant $x$ par $-x$ : $\mathrm{e}^{-x} = 1 - x + \frac{x^2}{2} - \frac{x^3}{6} + \frac{x^4}{24} + o(x^4)$.`,
        String.raw`Demi-somme : les termes impairs s'annulent, il reste $\operatorname{ch} x = 1 + \frac{x^2}{2} + \frac{x^4}{24} + o(x^4)$.`
      ] }
  ],

  /* ===================================================== EXERCICES */
  exercises: [
    { id: 'm4-x-001', level: 1, check: 'value', vars: [],
      topic: 'Limite d\'une fraction rationnelle', sec: 'm4-s-limites',
      prompt: String.raw`Calcule $\displaystyle\lim_{x\to+\infty}\frac{3x^2 - x + 1}{2x^2 + 5}$.`,
      answer: '3/2',
      mistakes: [
        { expr: '1/5', msg: String.raw`$\frac{1}{5}$ est la valeur en $x = 0$ (quotient des constantes). En $+\infty$, ce sont les termes de plus <b>haut</b> degré qui dominent.` },
        { expr: '2/3', msg: String.raw`Quotient renversé : le numérateur domine par $3x^2$, le dénominateur par $2x^2$, d'où $\frac{3x^2}{2x^2} = \frac{3}{2}$.` }
      ],
      hint: String.raw`Factorise numérateur et dénominateur par $x^2$.`,
      explain: String.raw`En factorisant par $x^2$ : $\frac{3 - \frac{1}{x} + \frac{1}{x^2}}{2 + \frac{5}{x^2}} \to \frac{3}{2}$.`,
      rule: String.raw`En $\pm\infty$, une fraction rationnelle a la même limite que le quotient de ses termes de plus haut degré.`,
      pitfall: String.raw`Les constantes ne dominent pas en $+\infty$ : ce sont les termes de plus haut degré qui comptent.`,
      steps: [
        String.raw`Rappel : en $\pm\infty$, un polynôme se comporte comme son terme de plus haut degré ; pour une fraction rationnelle (forme $\frac{\infty}{\infty}$), on factorise numérateur et dénominateur par ce terme.`,
        String.raw`On factorise par $x^2$ : $\dfrac{x^2\left(3 - \frac{1}{x} + \frac{1}{x^2}\right)}{x^2\left(2 + \frac{5}{x^2}\right)} = \dfrac{3 - \frac{1}{x} + \frac{1}{x^2}}{2 + \frac{5}{x^2}}$ (on simplifie par $x^2 \neq 0$).`,
        String.raw`Quand $x \to +\infty$, $\frac{1}{x} \to 0$ et $\frac{1}{x^2} \to 0$ : la limite vaut $\frac{3 - 0 + 0}{2 + 0} = \frac{3}{2}$.`,
        String.raw`Raccourci : $\frac{3x^2 - x + 1}{2x^2 + 5} \sim \frac{3x^2}{2x^2} = \frac{3}{2}$ ✔.`
      ] },
    { id: 'm4-x-002', level: 1, check: 'value', vars: [],
      topic: 'Forme 0/0 et factorisation', sec: 'm4-s-fi',
      prompt: String.raw`Calcule $\displaystyle\lim_{x\to 2}\frac{x^2 - 4}{x - 2}$.`,
      answer: '4',
      mistakes: [
        { expr: '0', msg: String.raw`$\frac{0}{0}$ est une forme indéterminée, pas 0 : factorise $x^2 - 4$.` },
        { expr: '2', msg: String.raw`Après simplification par $x - 2$, il reste $x + 2$ ; en $x = 2$, cela vaut $2 + 2 = 4$.` }
      ],
      hint: String.raw`$x^2 - 4 = (x - 2)(x + 2)$.`,
      explain: String.raw`$\frac{(x-2)(x+2)}{x-2} = x + 2 \to 4$.`,
      rule: String.raw`$a^2 - b^2 = (a - b)(a + b)$ ; une forme $\frac{0}{0}$ en $a$ entre polynômes se lève en factorisant par $(x - a)$.`,
      pitfall: String.raw`$\frac{0}{0}$ n'est pas 0 : c'est une forme indéterminée.`,
      steps: [
        String.raw`Rappel : si deux polynômes s'annulent tous les deux en $a$ (forme $\frac{0}{0}$), on peut les factoriser par $(x - a)$ et simplifier.`,
        String.raw`En $x = 2$ : numérateur $4 - 4 = 0$ et dénominateur $2 - 2 = 0$ : forme $\frac{0}{0}$.`,
        String.raw`Identité remarquable : $x^2 - 4 = (x - 2)(x + 2)$. Pour $x \neq 2$ : $\dfrac{(x-2)(x+2)}{x-2} = x + 2$.`,
        String.raw`Donc la limite vaut $2 + 2 = 4$. Contrôle : c'est le taux d'accroissement de $x^2$ en 2, qui tend vers $(x^2)'(2) = 4$ ✔.`
      ] },
    { id: 'm4-x-003', level: 2, check: 'value', vars: [],
      topic: 'Quantité conjuguée', sec: 'm4-s-fi',
      prompt: String.raw`Calcule $\displaystyle\lim_{x\to+\infty}\left(\sqrt{x^2 + 3x} - x\right)$.`,
      answer: '3/2',
      mistakes: [
        { expr: '0', msg: String.raw`$\infty - \infty$ ne vaut pas 0 : multiplie par la quantité conjuguée.` },
        { expr: '3', msg: String.raw`Le dénominateur $\sqrt{x^2+3x} + x$ se comporte comme $2x$ : n'oublie pas le facteur 2.` }
      ],
      hint: String.raw`Multiplie et divise par $\sqrt{x^2 + 3x} + x$.`,
      explain: String.raw`$\sqrt{x^2+3x} - x = \frac{3x}{\sqrt{x^2+3x} + x} = \frac{3}{\sqrt{1 + \frac{3}{x}} + 1} \to \frac{3}{2}$.`,
      rule: String.raw`Quantité conjuguée : $\sqrt{A} - B = \dfrac{A - B^2}{\sqrt{A} + B}$.`,
      pitfall: String.raw`$\infty - \infty$ n'est pas 0, et le dénominateur $\sqrt{x^2+3x} + x$ se comporte comme $2x$, pas comme $x$.`,
      steps: [
        String.raw`Rappel : une différence $\sqrt{A} - B$ en forme $\infty - \infty$ se lève avec la quantité conjuguée : $\sqrt{A} - B = \dfrac{(\sqrt{A} - B)(\sqrt{A} + B)}{\sqrt{A} + B} = \dfrac{A - B^2}{\sqrt{A} + B}$.`,
        String.raw`Avec $A = x^2 + 3x$ et $B = x$ : $\sqrt{x^2 + 3x} - x = \dfrac{x^2 + 3x - x^2}{\sqrt{x^2+3x} + x} = \dfrac{3x}{\sqrt{x^2+3x} + x}$.`,
        String.raw`Pour $x \gt 0$, $\sqrt{x^2 + 3x} = x\sqrt{1 + \frac{3}{x}}$ ; on factorise par $x$ : $\dfrac{3x}{x\left(\sqrt{1 + \frac{3}{x}} + 1\right)} = \dfrac{3}{\sqrt{1 + \frac{3}{x}} + 1}$.`,
        String.raw`Quand $x \to +\infty$, $\sqrt{1 + \frac{3}{x}} \to 1$ : la limite vaut $\frac{3}{1 + 1} = \frac{3}{2}$.`
      ] },
    { id: 'm4-x-004', level: 1, check: 'value', vars: [],
      topic: 'Limites et équivalents', sec: 'm4-s-equivalents',
      prompt: String.raw`Calcule $\displaystyle\lim_{x\to 0}\frac{\sin(5x)}{x}$.`,
      answer: '5',
      mistakes: [
        { expr: '1', msg: String.raw`C'est $\frac{\sin X}{X}$ qui tend vers 1 ; ici $\frac{\sin(5x)}{x} = 5\cdot\frac{\sin(5x)}{5x}$.` },
        { expr: '1/5', msg: String.raw`Quotient renversé : $\sin(5x) \sim 5x$, donc $\frac{\sin(5x)}{x} \sim \frac{5x}{x} = 5$.` },
        { expr: '0', msg: String.raw`Forme $\frac{0}{0}$, pas 0 : utilise l'équivalent $\sin(5x) \sim 5x$.` }
      ],
      hint: String.raw`$\sin(5x) \sim 5x$ en 0.`,
      explain: String.raw`$\sin(5x) \sim 5x$, donc $\frac{\sin(5x)}{x} \sim \frac{5x}{x} = 5$.`,
      rule: String.raw`$\sin u \underset{u\to 0}{\sim} u$, donc $\sin(ax) \underset{0}{\sim} ax$.`,
      pitfall: String.raw`$\frac{\sin X}{X} \to 1$ seulement si c'est le même $X$ en haut et en bas.`,
      steps: [
        String.raw`Rappel : $\sin u \sim u$ quand $u \to 0$ (en radians), et dans un quotient on peut remplacer un facteur par un équivalent.`,
        String.raw`Avec $u = 5x \to 0$ : $\sin(5x) \sim 5x$.`,
        String.raw`$\dfrac{\sin(5x)}{x} \sim \dfrac{5x}{x} = 5$ : la limite vaut 5.`,
        String.raw`Autre écriture : $\frac{\sin(5x)}{x} = 5\cdot\frac{\sin(5x)}{5x}$, et $\frac{\sin(5x)}{5x} \to 1$ ✔.`
      ] },
    { id: 'm4-x-005', level: 1, check: 'value', vars: [],
      topic: 'Limites et équivalents', sec: 'm4-s-equivalents',
      prompt: String.raw`Calcule $\displaystyle\lim_{x\to 0}\frac{\mathrm{e}^{3x} - 1}{2x}$.`,
      answer: '3/2',
      mistakes: [
        { expr: '1/2', msg: String.raw`$\mathrm{e}^{3x} - 1 \sim 3x$, pas $x$ : on remplace $u$ par $3x$ dans $\mathrm{e}^u - 1 \sim u$.` },
        { expr: '3', msg: String.raw`Tu as oublié le 2 du dénominateur : $\frac{3x}{2x} = \frac{3}{2}$.` }
      ],
      hint: String.raw`$\mathrm{e}^{u} - 1 \sim u$ quand $u \to 0$.`,
      explain: String.raw`$\mathrm{e}^{3x} - 1 \sim 3x$, donc le quotient est équivalent à $\frac{3x}{2x} = \frac{3}{2}$.`,
      rule: String.raw`$\mathrm{e}^u - 1 \underset{u\to 0}{\sim} u$.`,
      pitfall: String.raw`Remplacer $u$ par $3x$ partout : $\mathrm{e}^{3x} - 1 \sim 3x$, pas $x$.`,
      steps: [
        String.raw`Rappel : $\mathrm{e}^u - 1 \sim u$ quand $u \to 0$ (c'est le taux d'accroissement de $\exp$ en 0) ; les équivalents se divisent.`,
        String.raw`Avec $u = 3x \to 0$ : $\mathrm{e}^{3x} - 1 \sim 3x$.`,
        String.raw`$\dfrac{\mathrm{e}^{3x} - 1}{2x} \sim \dfrac{3x}{2x} = \dfrac{3}{2}$ : la limite vaut $\frac{3}{2}$.`
      ] },
    { id: 'm4-x-006', level: 2, check: 'value', vars: [],
      topic: 'Limites et équivalents', sec: 'm4-s-equivalents',
      prompt: String.raw`Calcule $\displaystyle\lim_{x\to 0}\frac{1 - \cos(3x)}{x^2}$.`,
      answer: '9/2',
      mistakes: [
        { expr: '1/2', msg: String.raw`$1 - \cos(3x) \sim \frac{(3x)^2}{2}$ : remplace $x$ par $3x$.` },
        { expr: '3/2', msg: String.raw`$(3x)^2 = 9x^2$, pas $3x^2$.` },
        { expr: '9', msg: String.raw`N'oublie pas le $\frac{1}{2}$ : $1 - \cos u \sim \frac{u^2}{2}$.` }
      ],
      hint: String.raw`$1 - \cos u \sim \frac{u^2}{2}$ avec $u = 3x$.`,
      explain: String.raw`$1 - \cos(3x) \sim \frac{9x^2}{2}$, donc la limite vaut $\frac{9}{2}$.`,
      rule: String.raw`$1 - \cos u \underset{u\to 0}{\sim} \frac{u^2}{2}$.`,
      pitfall: String.raw`On élève au carré tout $u = 3x$ : $(3x)^2 = 9x^2$.`,
      steps: [
        String.raw`Rappel : $1 - \cos u \sim \frac{u^2}{2}$ quand $u \to 0$ (conséquence du DL $\cos u = 1 - \frac{u^2}{2} + o(u^2)$).`,
        String.raw`Avec $u = 3x$ : $1 - \cos(3x) \sim \frac{(3x)^2}{2} = \frac{9x^2}{2}$.`,
        String.raw`$\dfrac{1 - \cos(3x)}{x^2} \sim \dfrac{9x^2/2}{x^2} = \dfrac{9}{2}$ : la limite vaut $\frac{9}{2}$.`
      ] },
    { id: 'm4-x-007', level: 2, check: 'value', vars: [],
      topic: 'Limites et équivalents', sec: 'm4-s-equivalents',
      prompt: String.raw`Calcule $\displaystyle\lim_{x\to 0}\frac{\ln(1 + x^2)}{1 - \cos x}$.`,
      answer: '2',
      mistakes: [
        { expr: '1/2', msg: String.raw`Tu as inversé le quotient : $\frac{x^2}{x^2/2} = 2$.` },
        { expr: '1', msg: String.raw`Tu as pris $1 - \cos x \sim x^2$ : il manque le $\frac{1}{2}$, $1 - \cos x \sim \frac{x^2}{2}$.` }
      ],
      hint: String.raw`$\ln(1 + u) \sim u$ avec $u = x^2$, et $1 - \cos x \sim \frac{x^2}{2}$.`,
      explain: String.raw`$\ln(1+x^2) \sim x^2$ et $1 - \cos x \sim \frac{x^2}{2}$, donc le quotient est équivalent à $\frac{x^2}{x^2/2} = 2$.`,
      rule: String.raw`$\ln(1+u) \sim u$ quand $u \to 0$ ; $1 - \cos x \sim \frac{x^2}{2}$ en 0.`,
      pitfall: String.raw`Diviser par $\frac{x^2}{2}$, c'est multiplier par $\frac{2}{x^2}$.`,
      steps: [
        String.raw`Rappel : en 0, $\ln(1 + u) \sim u$ dès que $u \to 0$, et $1 - \cos x \sim \frac{x^2}{2}$ ; les équivalents se divisent.`,
        String.raw`Numérateur, avec $u = x^2 \to 0$ : $\ln(1 + x^2) \sim x^2$.`,
        String.raw`Dénominateur : $1 - \cos x \sim \frac{x^2}{2}$.`,
        String.raw`Quotient : $\dfrac{x^2}{x^2/2} = x^2\times\dfrac{2}{x^2} = 2$. La limite vaut 2.`
      ] },
    { id: 'm4-x-008', level: 2, check: 'value', vars: [],
      topic: 'Prolongement par continuité', sec: 'm4-s-continuite',
      prompt: String.raw`La fonction $f(x) = \dfrac{\sqrt{1+x} - 1}{x}$ se prolonge par continuité en 0. Quelle valeur faut-il donner à $f(0)$ ?`,
      answer: '1/2',
      mistakes: [
        { expr: '1', msg: String.raw`$\sqrt{1+x} - 1 \sim \frac{x}{2}$, pas $x$ : le coefficient est l'exposant $\alpha = \frac{1}{2}$.` },
        { expr: '0', msg: String.raw`La valeur à donner est la <b>limite</b> de $f$ en 0, pas « $\frac{0}{0} = 0$ » : forme indéterminée à lever.` }
      ],
      hint: String.raw`$(1+x)^\alpha - 1 \sim \alpha x$ avec $\alpha = \frac{1}{2}$ (ou quantité conjuguée).`,
      explain: String.raw`$\sqrt{1+x} - 1 \sim \frac{x}{2}$, donc $f(x) \to \frac{1}{2}$ : on pose $f(0) = \frac{1}{2}$.`,
      rule: String.raw`$(1+x)^\alpha - 1 \underset{0}{\sim} \alpha x$ ; prolongement : $f(a) = \lim_{x\to a} f(x)$ (si finie).`,
      pitfall: String.raw`$\sqrt{1+x} - 1 \sim \frac{x}{2}$, pas $x$.`,
      steps: [
        String.raw`Rappel : $f$ se prolonge par continuité en 0 si $\lim_{x\to 0} f(x) = \ell$ existe et est finie ; on pose alors $f(0) = \ell$. Il faut donc calculer cette limite (forme $\frac{0}{0}$).`,
        String.raw`Équivalent usuel : $(1 + x)^\alpha - 1 \sim \alpha x$ ; avec $\alpha = \frac{1}{2}$, $\sqrt{1 + x} - 1 \sim \frac{x}{2}$.`,
        String.raw`Donc $f(x) \sim \dfrac{x/2}{x} = \dfrac{1}{2}$.`,
        String.raw`Vérification par le conjugué : $\dfrac{\sqrt{1+x} - 1}{x} = \dfrac{(1 + x) - 1}{x\left(\sqrt{1+x} + 1\right)} = \dfrac{1}{\sqrt{1+x} + 1} \to \dfrac{1}{2}$ ✔. On pose $f(0) = \frac{1}{2}$.`
      ] },
    { id: 'm4-x-009', level: 2, check: 'value', vars: [],
      topic: 'Forme 1 puissance infini', sec: 'm4-s-fi',
      prompt: String.raw`Calcule $\displaystyle\lim_{x\to+\infty}\left(1 + \frac{2}{x}\right)^x$.`,
      answer: 'exp(2)',
      mistakes: [
        { expr: '1', msg: String.raw`$1^\infty$ est une forme indéterminée : passe à l'exponentielle.` },
        { expr: 'exp(1/2)', msg: String.raw`$x\ln\left(1 + \frac{2}{x}\right) \sim x\cdot\frac{2}{x} = 2$, pas $\frac{1}{2}$.` }
      ],
      hint: String.raw`Écris $\left(1 + \frac{2}{x}\right)^x = \exp\left(x\ln\left(1 + \frac{2}{x}\right)\right)$.`,
      explain: String.raw`$\ln\left(1 + \frac{2}{x}\right) \sim \frac{2}{x}$, donc $x\ln\left(1 + \frac{2}{x}\right) \to 2$ et la limite vaut $\mathrm{e}^2$.`,
      rule: String.raw`$\left(1 + \frac{a}{x}\right)^x \underset{x\to+\infty}{\longrightarrow} \mathrm{e}^{a}$.`,
      pitfall: String.raw`« $1^\infty = 1$ » est faux : c'est une forme indéterminée.`,
      steps: [
        String.raw`Rappel : une puissance dont la base tend vers 1 et l'exposant vers l'infini est une forme indéterminée $1^\infty$ ; on écrit $u^v = \mathrm{e}^{v\ln u}$.`,
        String.raw`$\left(1 + \frac{2}{x}\right)^x = \exp\left(x\ln\left(1 + \frac{2}{x}\right)\right)$.`,
        String.raw`Avec $u = \frac{2}{x} \to 0$ : $\ln(1 + u) \sim u$, donc $x\ln\left(1 + \frac{2}{x}\right) \sim x\cdot\frac{2}{x} = 2$.`,
        String.raw`Par continuité de $\exp$, la limite vaut $\mathrm{e}^2 \approx 7{,}39$.`
      ] },
    { id: 'm4-x-010', level: 2, check: 'value', vars: [],
      topic: 'Forme 1 puissance infini', sec: 'm4-s-fi',
      prompt: String.raw`Calcule $\displaystyle\lim_{x\to 0}\left(1 + \sin x\right)^{1/x}$.`,
      answer: 'e',
      mistakes: [
        { expr: '1', msg: String.raw`$1^\infty$ est une forme indéterminée : écris $\exp\left(\frac{\ln(1 + \sin x)}{x}\right)$.` },
        { expr: '1/e', msg: String.raw`Erreur de signe : $\ln(1 + \sin x) \sim \sin x \sim x$, donc l'exposant tend vers $+1$, pas $-1$.` }
      ],
      hint: String.raw`$\ln(1 + \sin x) \sim \sin x \sim x$.`,
      explain: String.raw`$(1 + \sin x)^{1/x} = \exp\left(\frac{\ln(1 + \sin x)}{x}\right)$ ; l'exposant tend vers 1 car $\ln(1 + \sin x) \sim \sin x \sim x$, donc la limite vaut $\mathrm{e}$.`,
      rule: String.raw`$u^v = \mathrm{e}^{v\ln u}$ ; $\ln(1+u) \sim u$ quand $u \to 0$.`,
      pitfall: String.raw`On ne passe jamais un équivalent dans une exponentielle : on calcule la <b>limite</b> de l'exposant.`,
      steps: [
        String.raw`Rappel : la base $1 + \sin x \to 1$ et l'exposant $\frac{1}{x}$ explose : forme $1^\infty$. On écrit $u^v = \mathrm{e}^{v\ln u}$.`,
        String.raw`$(1 + \sin x)^{1/x} = \exp\left(\dfrac{\ln(1 + \sin x)}{x}\right)$.`,
        String.raw`Avec $u = \sin x \to 0$ : $\ln(1 + \sin x) \sim \sin x \sim x$, donc $\dfrac{\ln(1 + \sin x)}{x} \to 1$.`,
        String.raw`Par continuité de $\exp$, la limite vaut $\mathrm{e}^1 = \mathrm{e}$.`
      ] },
    { id: 'm4-x-011', level: 2, check: 'value', vars: [],
      topic: 'Limite en un point', sec: 'm4-s-equivalents',
      prompt: String.raw`Calcule $\displaystyle\lim_{x\to 1}\frac{x^3 - 1}{\ln x}$.`,
      answer: '3',
      mistakes: [
        { expr: '1', msg: String.raw`Près de 1, $x^3 - 1 \sim 3(x - 1)$ (taux d'accroissement : $(x^3)'$ en 1 vaut 3), pas $x - 1$.` },
        { expr: '0', msg: String.raw`Forme $\frac{0}{0}$ en $x = 1$, pas 0 : remplace numérateur et dénominateur par des équivalents.` }
      ],
      hint: String.raw`Pose $h = x - 1 \to 0$ ; $\ln x = \ln(1 + h) \sim h$.`,
      explain: String.raw`$x^3 - 1 = (x - 1)(x^2 + x + 1) \sim 3(x-1)$ et $\ln x \sim x - 1$ en 1, donc le quotient tend vers $3$.`,
      rule: String.raw`$a^3 - b^3 = (a - b)(a^2 + ab + b^2)$ ; $\ln x \underset{1}{\sim} x - 1$.`,
      pitfall: String.raw`Un équivalent dépend du point : en 1, $\ln x \sim x - 1$ (et non $x$).`,
      steps: [
        String.raw`Rappel : pour une limite en $a \neq 0$, on pose $h = x - a \to 0$ afin d'utiliser les équivalents usuels en 0, ici $\ln(1 + h) \sim h$.`,
        String.raw`Forme $\frac{0}{0}$ en $x = 1$. Numérateur : $x^3 - 1 = (x - 1)(x^2 + x + 1)$ et $x^2 + x + 1 \to 3$, donc $x^3 - 1 \sim 3(x - 1)$.`,
        String.raw`Dénominateur : avec $h = x - 1$, $\ln x = \ln(1 + h) \sim h = x - 1$.`,
        String.raw`Quotient : $\dfrac{3(x-1)}{x - 1} = 3$ : la limite vaut 3.`
      ] },
    { id: 'm4-x-012', level: 2, check: 'value', vars: [],
      topic: 'Limites par DL', sec: 'm4-s-applications',
      prompt: String.raw`Calcule $\displaystyle\lim_{x\to 0}\frac{\mathrm{e}^x - 1 - x}{x^2}$.`,
      answer: '1/2',
      mistakes: [
        { expr: '0', msg: String.raw`Avec $\mathrm{e}^x - 1 \sim x$, on obtiendrait $x - x = 0$ : on ne soustrait pas des équivalents. Utilise le DL à l'ordre 2.` },
        { expr: '1', msg: String.raw`Le terme d'ordre 2 de $\mathrm{e}^x$ est $\frac{x^2}{2!} = \frac{x^2}{2}$, pas $x^2$.` }
      ],
      hint: String.raw`DL : $\mathrm{e}^x = 1 + x + \frac{x^2}{2} + o(x^2)$.`,
      explain: String.raw`$\mathrm{e}^x - 1 - x = \frac{x^2}{2} + o(x^2)$, donc la limite vaut $\frac{1}{2}$.`,
      rule: String.raw`Pousser le DL du numérateur jusqu'à l'ordre du dénominateur ; $\mathrm{e}^x = 1 + x + \frac{x^2}{2} + o(x^2)$.`,
      pitfall: String.raw`$\mathrm{e}^x - 1 \sim x$ ne dit rien sur $\mathrm{e}^x - 1 - x$ : les termes principaux se compensent.`,
      steps: [
        String.raw`Rappel : quand des termes principaux se compensent (ici $1 + x$), les équivalents ne suffisent pas ; on fait un DL jusqu'à l'ordre du dénominateur (ici 2).`,
        String.raw`DL : $\mathrm{e}^x = 1 + x + \frac{x^2}{2} + o(x^2)$.`,
        String.raw`Numérateur : $\mathrm{e}^x - 1 - x = \frac{x^2}{2} + o(x^2)$.`,
        String.raw`Quotient : $\dfrac{\frac{x^2}{2} + o(x^2)}{x^2} = \dfrac{1}{2} + o(1) \to \dfrac{1}{2}$.`
      ] },
    { id: 'm4-x-013', level: 2, check: 'value', vars: [],
      topic: 'Limites par DL', sec: 'm4-s-applications',
      prompt: String.raw`Calcule $\displaystyle\lim_{x\to 0}\frac{x - \sin x}{x^3}$.`,
      answer: '1/6',
      mistakes: [
        { expr: '0', msg: String.raw`$\sin x \sim x$ ne permet pas de conclure pour $x - \sin x$ (somme d'équivalents interdite) : DL à l'ordre 3.` },
        { expr: '-1/6', msg: String.raw`Signe : $x - \sin x = x - x + \frac{x^3}{6} + o(x^3)$, le moins devant $\sin$ change le signe de $-\frac{x^3}{6}$.` }
      ],
      hint: String.raw`$\sin x = x - \frac{x^3}{6} + o(x^3)$.`,
      explain: String.raw`$x - \sin x = \frac{x^3}{6} + o(x^3)$, donc la limite vaut $\frac{1}{6}$.`,
      rule: String.raw`$\sin x = x - \frac{x^3}{6} + o(x^3)$.`,
      pitfall: String.raw`$\sin x \sim x$ ne suffit pas pour $x - \sin x$ : il faut aller à l'ordre 3.`,
      steps: [
        String.raw`Rappel : le DL de $\sin$ en 0 est $\sin x = x - \frac{x^3}{6} + o(x^3)$ ; on développe jusqu'à l'ordre 3, celui du dénominateur.`,
        String.raw`Numérateur : $x - \sin x = x - \left(x - \frac{x^3}{6}\right) + o(x^3) = \frac{x^3}{6} + o(x^3)$.`,
        String.raw`Quotient : $\dfrac{\frac{x^3}{6} + o(x^3)}{x^3} = \dfrac{1}{6} + o(1) \to \dfrac{1}{6}$.`,
        String.raw`Contrôle numérique : pour $x = 0{,}1$, $\frac{0{,}1 - \sin 0{,}1}{0{,}001} \approx 0{,}1666$ ✔.`
      ] },
    { id: 'm4-x-014', level: 3, check: 'value', vars: [],
      topic: 'Limites par DL', sec: 'm4-s-applications',
      prompt: String.raw`Calcule $\displaystyle\lim_{x\to 0}\frac{\tan x - x}{x^3}$.`,
      answer: '1/3',
      mistakes: [
        { expr: '1/6', msg: String.raw`C'est $\sin x$ qui a un terme en $\frac{x^3}{6}$ ; pour $\tan$ : $\tan x = x + \frac{x^3}{3} + o(x^3)$.` },
        { expr: '-1/3', msg: String.raw`Signe : $\tan x = x + \frac{x^3}{3}$ (c'est $\arctan x$ qui vaut $x - \frac{x^3}{3}$).` },
        { expr: '0', msg: String.raw`$\tan x \sim x$ ne suffit pas pour $\tan x - x$ : il faut le DL à l'ordre 3.` }
      ],
      hint: String.raw`DL de $\tan x$ à l'ordre 3.`,
      explain: String.raw`$\tan x - x = \frac{x^3}{3} + o(x^3)$, donc la limite vaut $\frac{1}{3}$.`,
      rule: String.raw`$\tan x = x + \frac{x^3}{3} + o(x^3)$.`,
      pitfall: String.raw`Ne pas confondre avec $\sin x = x - \frac{x^3}{6}$ ni avec $\arctan x = x - \frac{x^3}{3}$.`,
      steps: [
        String.raw`Rappel : DL de la tangente en 0 : $\tan x = x + \frac{x^3}{3} + o(x^3)$ (obtenu par $\sin x\times\frac{1}{\cos x}$).`,
        String.raw`Numérateur : $\tan x - x = \frac{x^3}{3} + o(x^3)$.`,
        String.raw`Quotient : $\dfrac{\frac{x^3}{3} + o(x^3)}{x^3} \to \dfrac{1}{3}$.`,
        String.raw`Contrôle : $\tan 0{,}1 \approx 0{,}100335$, donc $\frac{\tan 0{,}1 - 0{,}1}{0{,}001} \approx 0{,}335$ ✔.`
      ] },
    { id: 'm4-x-015', level: 3, check: 'value', vars: [],
      topic: 'Limites par DL', sec: 'm4-s-applications',
      prompt: String.raw`Calcule $\displaystyle\lim_{x\to 0}\left(\frac{1}{\sin^2 x} - \frac{1}{x^2}\right)$.`,
      answer: '1/3',
      mistakes: [
        { expr: '0', msg: String.raw`$\sin^2 x \sim x^2$ ne suffit pas pour une différence : il faut $\sin^2 x = x^2 - \frac{x^4}{3} + o(x^4)$.` },
        { expr: '1/6', msg: String.raw`En élevant au carré, n'oublie pas le double produit : $\left(x - \frac{x^3}{6}\right)^2 = x^2 - 2\cdot x\cdot\frac{x^3}{6} + \dots = x^2 - \frac{x^4}{3} + \dots$` },
        { expr: '-1/3', msg: String.raw`Signe : $x^2 - \sin^2 x = x^2 - \left(x^2 - \frac{x^4}{3}\right) = +\frac{x^4}{3}$.` }
      ],
      hint: String.raw`Mets au même dénominateur : $\frac{x^2 - \sin^2 x}{x^2\sin^2 x}$, puis DL de $\sin^2 x$ à l'ordre 4.`,
      explain: String.raw`$\sin^2 x = x^2 - \frac{x^4}{3} + o(x^4)$, donc $x^2 - \sin^2 x \sim \frac{x^4}{3}$ et $x^2\sin^2 x \sim x^4$ : la limite vaut $\frac{1}{3}$.`,
      rule: String.raw`$(a - b)^2 = a^2 - 2ab + b^2$ ; $\sin^2 x = x^2 - \frac{x^4}{3} + o(x^4)$.`,
      pitfall: String.raw`Le carré d'un DL fait apparaître un double produit : $-2\cdot x\cdot\frac{x^3}{6} = -\frac{x^4}{3}$.`,
      steps: [
        String.raw`Rappel : une différence de deux termes qui tendent vers $+\infty$ (forme $\infty - \infty$) se traite en réduisant au même dénominateur, puis par DL.`,
        String.raw`Même dénominateur : $\dfrac{1}{\sin^2 x} - \dfrac{1}{x^2} = \dfrac{x^2 - \sin^2 x}{x^2\sin^2 x}$.`,
        String.raw`DL : $\sin x = x - \frac{x^3}{6} + o(x^3)$, donc $\sin^2 x = x^2 - 2\cdot x\cdot\frac{x^3}{6} + o(x^4) = x^2 - \frac{x^4}{3} + o(x^4)$.`,
        String.raw`Numérateur : $x^2 - \sin^2 x = \frac{x^4}{3} + o(x^4)$ ; dénominateur : $x^2\sin^2 x \sim x^2\cdot x^2 = x^4$.`,
        String.raw`Quotient : $\dfrac{x^4/3}{x^4} = \dfrac{1}{3}$ : la limite vaut $\frac{1}{3}$.`
      ] },
    { id: 'm4-x-016', level: 3, check: 'value', vars: [],
      topic: 'Limites par DL', sec: 'm4-s-dl-operations',
      prompt: String.raw`Calcule $\displaystyle\lim_{x\to 0}\frac{\cos x - \mathrm{e}^{-x^2/2}}{x^4}$.`,
      answer: '-1/12',
      mistakes: [
        { expr: '0', msg: String.raw`Les termes d'ordre 0 et 2 se compensent, mais pas ceux d'ordre 4 : développe à l'ordre 4.` },
        { expr: '1/24', msg: String.raw`Tu as oublié le terme $\frac{u^2}{2} = \frac{x^4}{8}$ dans le DL de $\mathrm{e}^u$ (avec $u = -\frac{x^2}{2}$).` },
        { expr: '1/12', msg: String.raw`Signe : $\frac{1}{24} - \frac{1}{8} = \frac{1}{24} - \frac{3}{24} = -\frac{2}{24}$, négatif.` }
      ],
      hint: String.raw`$\mathrm{e}^{u} = 1 + u + \frac{u^2}{2} + o(u^2)$ avec $u = -\frac{x^2}{2}$.`,
      explain: String.raw`$\cos x = 1 - \frac{x^2}{2} + \frac{x^4}{24} + o(x^4)$ et $\mathrm{e}^{-x^2/2} = 1 - \frac{x^2}{2} + \frac{x^4}{8} + o(x^4)$ : la différence vaut $-\frac{x^4}{12} + o(x^4)$, d'où la limite $-\frac{1}{12}$.`,
      rule: String.raw`Composer un DL : $\mathrm{e}^u$ avec $u = -\frac{x^2}{2}$, puis tronquer à l'ordre voulu.`,
      pitfall: String.raw`Le terme $\frac{u^2}{2}$ de l'exponentielle est d'ordre 4 en $x$ : il ne faut pas l'oublier.`,
      steps: [
        String.raw`Rappel : $\cos x = 1 - \frac{x^2}{2} + \frac{x^4}{24} + o(x^4)$ et $\mathrm{e}^u = 1 + u + \frac{u^2}{2} + o(u^2)$ ; on développe tout à l'ordre 4, celui du dénominateur.`,
        String.raw`Avec $u = -\frac{x^2}{2}$ : $u^2 = \frac{x^4}{4}$, donc $\mathrm{e}^{-x^2/2} = 1 - \frac{x^2}{2} + \frac{x^4}{8} + o(x^4)$.`,
        String.raw`Différence : les termes $1$ et $-\frac{x^2}{2}$ se compensent ; il reste $\left(\frac{1}{24} - \frac{1}{8}\right)x^4 = \left(\frac{1}{24} - \frac{3}{24}\right)x^4 = -\frac{x^4}{12}$.`,
        String.raw`Quotient : $\dfrac{-\frac{x^4}{12} + o(x^4)}{x^4} \to -\dfrac{1}{12}$.`
      ] },
    { id: 'm4-x-017', level: 2, check: 'value', vars: [],
      topic: 'Théorème des valeurs intermédiaires', sec: 'm4-s-continuite',
      prompt: String.raw`Combien de solutions réelles l'équation $x^3 - 3x + 1 = 0$ admet-elle ?`,
      answer: '3',
      mistakes: [
        { expr: '1', msg: String.raw`Calcule $f(-2)$, $f(0)$, $f(1)$ et $f(2)$ : il y a plusieurs changements de signe.` },
        { expr: '2', msg: String.raw`Regarde aussi l'intervalle $[-2, 0]$ : $f(-2) = -1 \lt 0 \lt 1 = f(0)$, ce qui donne une troisième racine.` }
      ],
      hint: String.raw`Applique le TVI sur $[-2, 0]$, $[0, 1]$ et $[1, 2]$ ; un polynôme de degré 3 a au plus 3 racines.`,
      explain: String.raw`$f(-2) = -1$, $f(0) = 1$, $f(1) = -1$, $f(2) = 3$ : trois changements de signe, donc trois racines par le TVI, et pas plus car le degré vaut 3.`,
      rule: String.raw`TVI : $f$ continue et $f(a)f(b) \lt 0$ $\Rightarrow$ au moins une racine dans $\left]a, b\right[$ ; un polynôme de degré $n$ a au plus $n$ racines.`,
      pitfall: String.raw`Le TVI donne « au moins une » racine par intervalle ; pour conclure « exactement », il faut un argument de plus (ici le degré).`,
      steps: [
        String.raw`Rappel (TVI) : si $f$ est continue sur $[a, b]$ et que $f(a)$ et $f(b)$ sont de signes contraires, $f$ s'annule au moins une fois sur $\left]a, b\right[$. Ici $f(x) = x^3 - 3x + 1$ est un polynôme, donc continue.`,
        String.raw`On calcule quelques valeurs : $f(-2) = -8 + 6 + 1 = -1$, $f(0) = 1$, $f(1) = 1 - 3 + 1 = -1$, $f(2) = 8 - 6 + 1 = 3$.`,
        String.raw`Trois changements de signe : le TVI donne une racine dans $\left]-2, 0\right[$, une dans $\left]0, 1\right[$ et une dans $\left]1, 2\right[$, soit au moins 3 racines.`,
        String.raw`Un polynôme de degré 3 a au plus 3 racines : il y a donc exactement 3 solutions réelles.`
      ] },
    { id: 'm4-x-018', level: 1, check: 'expr', vars: ['x'],
      topic: 'Produit d\'équivalents', sec: 'm4-s-equivalents',
      prompt: String.raw`Donne un équivalent simple en 0, de la forme $c\,x^n$, de $\sin(3x)\ln(1 + 2x)$.`,
      answer: '6*x^2',
      mistakes: [
        { expr: '5*x', msg: String.raw`On <b>multiplie</b> les équivalents : $3x \cdot 2x$, on ne les additionne pas.` },
        { expr: '6*x', msg: String.raw`$3x \times 2x = 6x^2$ : les puissances de $x$ se multiplient aussi.` }
      ],
      hint: String.raw`$\sin(3x) \sim 3x$ et $\ln(1 + 2x) \sim 2x$.`,
      explain: String.raw`Produit d'équivalents : $\sin(3x)\ln(1+2x) \sim 3x \cdot 2x = 6x^2$.`,
      rule: String.raw`Si $f_1 \sim g_1$ et $f_2 \sim g_2$, alors $f_1 f_2 \sim g_1 g_2$.`,
      pitfall: String.raw`$3x\times 2x = 6x^2$ : coefficients et puissances se multiplient.`,
      steps: [
        String.raw`Rappel : en 0, $\sin u \sim u$ et $\ln(1+u) \sim u$ dès que $u \to 0$ ; les équivalents se <b>multiplient</b>.`,
        String.raw`$\sin(3x) \sim 3x$ (avec $u = 3x$) et $\ln(1 + 2x) \sim 2x$ (avec $u = 2x$).`,
        String.raw`Produit : $\sin(3x)\ln(1 + 2x) \sim 3x\cdot 2x = 6x^2$.`
      ] },
    { id: 'm4-x-019', level: 1, check: 'expr', vars: ['x'],
      topic: 'Équivalents usuels', sec: 'm4-s-equivalents',
      prompt: String.raw`Donne un équivalent simple en 0, de la forme $c\,x^n$, de $1 - \cos(2x)$.`,
      answer: '2*x^2',
      mistakes: [
        { expr: 'x^2/2', msg: String.raw`Remplace $x$ par $2x$ : $\frac{(2x)^2}{2}$.` },
        { expr: '4*x^2', msg: String.raw`N'oublie pas le $\frac{1}{2}$ : $1 - \cos u \sim \frac{u^2}{2}$.` }
      ],
      hint: String.raw`$1 - \cos u \sim \frac{u^2}{2}$ quand $u \to 0$.`,
      explain: String.raw`$1 - \cos(2x) \sim \frac{(2x)^2}{2} = 2x^2$.`,
      rule: String.raw`$1 - \cos u \underset{u\to 0}{\sim} \frac{u^2}{2}$ ; $1 - \cos(2x) = 2\sin^2 x$.`,
      pitfall: String.raw`On remplace $u$ par $2x$ <b>puis</b> on élève au carré : $(2x)^2 = 4x^2$.`,
      steps: [
        String.raw`Rappel : $1 - \cos u \sim \frac{u^2}{2}$ quand $u \to 0$.`,
        String.raw`Avec $u = 2x \to 0$ : $1 - \cos(2x) \sim \frac{(2x)^2}{2} = \frac{4x^2}{2} = 2x^2$.`,
        String.raw`Contrôle par la trigonométrie : $1 - \cos(2x) = 2\sin^2 x \sim 2x^2$ ✔.`
      ] },
    { id: 'm4-x-020', level: 2, check: 'expr', vars: ['x'],
      topic: 'Équivalent par DL', sec: 'm4-s-dl-usuels',
      prompt: String.raw`Donne un équivalent simple en 0, de la forme $c\,x^n$, de $\sqrt{1+x} - \sqrt{1-x}$.`,
      answer: 'x',
      mistakes: [
        { expr: 'x/2', msg: String.raw`$\sqrt{1+x} = 1 + \frac{x}{2} + o(x)$ et $\sqrt{1-x} = 1 - \frac{x}{2} + o(x)$ : la différence vaut $x + o(x)$.` },
        { expr: '2*x', msg: String.raw`$\sqrt{1+x} = 1 + \frac{x}{2} + o(x)$, pas $1 + x$ : le coefficient est $\frac{1}{2}$.` }
      ],
      hint: String.raw`DL de chaque racine à l'ordre 1.`,
      explain: String.raw`$\left(1 + \frac{x}{2}\right) - \left(1 - \frac{x}{2}\right) + o(x) = x + o(x)$, donc l'équivalent est $x$.`,
      rule: String.raw`$\sqrt{1 + u} = 1 + \frac{u}{2} + o(u)$.`,
      pitfall: String.raw`Les termes constants se compensent : il faut garder les termes d'ordre 1 des deux racines.`,
      steps: [
        String.raw`Rappel : pour l'équivalent d'une différence, on fait un DL jusqu'au premier terme non nul ; ici $(1 + u)^{1/2} = 1 + \frac{u}{2} + o(u)$.`,
        String.raw`$\sqrt{1 + x} = 1 + \frac{x}{2} + o(x)$ et, en remplaçant $x$ par $-x$, $\sqrt{1 - x} = 1 - \frac{x}{2} + o(x)$.`,
        String.raw`Différence : $\left(1 + \frac{x}{2}\right) - \left(1 - \frac{x}{2}\right) + o(x) = x + o(x)$.`,
        String.raw`Premier terme non nul : $x$, donc $\sqrt{1+x} - \sqrt{1-x} \sim x$.`
      ] },
    { id: 'm4-x-021', level: 2, check: 'expr', vars: ['x'],
      topic: 'Équivalent par DL', sec: 'm4-s-dl-usuels',
      prompt: String.raw`Donne un équivalent simple en 0, de la forme $c\,x^n$, de $x - \sin x$.`,
      answer: 'x^3/6',
      mistakes: [
        { expr: '-x^3/6', msg: String.raw`Signe : $x - \sin x = x - \left(x - \frac{x^3}{6}\right) + o(x^3)$.` },
        { expr: 'x^3', msg: String.raw`Il manque la factorielle : le DL de $\sin$ contient $\frac{x^3}{3!} = \frac{x^3}{6}$.` }
      ],
      hint: String.raw`$\sin x = x - \frac{x^3}{6} + o(x^3)$.`,
      explain: String.raw`$x - \sin x = \frac{x^3}{6} + o(x^3)$, donc $x - \sin x \sim \frac{x^3}{6}$.`,
      rule: String.raw`$\sin x = x - \frac{x^3}{6} + o(x^3)$.`,
      pitfall: String.raw`Le signe moins devant $\sin x$ change le signe de $-\frac{x^3}{6}$.`,
      steps: [
        String.raw`Rappel : $\sin x = x - \frac{x^3}{6} + o(x^3)$ ; l'équivalent d'une différence est le premier terme non nul de son DL.`,
        String.raw`$x - \sin x = x - x + \frac{x^3}{6} + o(x^3) = \frac{x^3}{6} + o(x^3)$.`,
        String.raw`Donc $x - \sin x \sim \frac{x^3}{6}$ (positif pour $x \gt 0$, cohérent avec $\sin x \lt x$).`
      ] },
    { id: 'm4-x-022', level: 2, check: 'expr', vars: ['x'],
      topic: 'Composition d\'équivalents', sec: 'm4-s-equivalents',
      prompt: String.raw`Donne un équivalent simple en 0, de la forme $c\,x^n$, de $\ln(\cos x)$.`,
      answer: '-x^2/2',
      mistakes: [
        { expr: 'x^2/2', msg: String.raw`$\cos x \lt 1$ près de 0, donc $\ln(\cos x) \lt 0$ : l'équivalent est négatif.` },
        { expr: '-x^2', msg: String.raw`$\cos x - 1 \sim -\frac{x^2}{2}$ : il manque le $\frac{1}{2}$.` }
      ],
      hint: String.raw`$\ln(\cos x) = \ln(1 + u)$ avec $u = \cos x - 1 \to 0$.`,
      explain: String.raw`$\ln(1 + u) \sim u$ avec $u = \cos x - 1 \sim -\frac{x^2}{2}$, donc $\ln(\cos x) \sim -\frac{x^2}{2}$.`,
      rule: String.raw`$\ln(1+u) \sim u$ si $u \to 0$ ; $\cos x - 1 \sim -\frac{x^2}{2}$.`,
      pitfall: String.raw`Faire apparaître la forme $\ln(1 + u)$ avec $u \to 0$ avant d'utiliser l'équivalent.`,
      steps: [
        String.raw`Rappel : $\ln(1 + u) \sim u$ dès que $u \to 0$, même si $u$ est une fonction de $x$ (on peut composer « à l'intérieur » d'un équivalent).`,
        String.raw`On écrit $\cos x = 1 + u$ avec $u = \cos x - 1 \to 0$ ; et $u = \cos x - 1 \sim -\frac{x^2}{2}$.`,
        String.raw`Donc $\ln(\cos x) = \ln(1 + u) \sim u \sim -\frac{x^2}{2}$.`,
        String.raw`Contrôle du signe : près de 0, $\cos x \lt 1$ donc $\ln(\cos x) \lt 0$ ✔.`
      ] },
    { id: 'm4-x-023', level: 3, check: 'expr', vars: ['x'],
      topic: 'Équivalent par DL', sec: 'm4-s-dl-usuels',
      prompt: String.raw`Donne un équivalent simple en 0, de la forme $c\,x^n$, de $\tan x - \sin x$.`,
      answer: 'x^3/2',
      mistakes: [
        { expr: 'x^3/6', msg: String.raw`Il faut combiner les deux DL : $\frac{x^3}{3} - \left(-\frac{x^3}{6}\right)$.` },
        { expr: 'x^3/3', msg: String.raw`Le terme $-\frac{x^3}{6}$ de $\sin x$ compte aussi.` }
      ],
      hint: String.raw`$\tan x = x + \frac{x^3}{3} + o(x^3)$ et $\sin x = x - \frac{x^3}{6} + o(x^3)$.`,
      explain: String.raw`$\tan x - \sin x = \left(\frac{1}{3} + \frac{1}{6}\right)x^3 + o(x^3) = \frac{x^3}{2} + o(x^3)$.`,
      rule: String.raw`$\tan x = x + \frac{x^3}{3} + o(x^3)$ ; $\sin x = x - \frac{x^3}{6} + o(x^3)$.`,
      pitfall: String.raw`Soustraire $-\frac{x^3}{6}$ revient à <b>ajouter</b> $\frac{x^3}{6}$.`,
      steps: [
        String.raw`Rappel : $\tan x = x + \frac{x^3}{3} + o(x^3)$ et $\sin x = x - \frac{x^3}{6} + o(x^3)$ ; l'équivalent d'une différence se lit sur le premier terme non nul de son DL.`,
        String.raw`$\tan x - \sin x = \left(x + \frac{x^3}{3}\right) - \left(x - \frac{x^3}{6}\right) + o(x^3) = \left(\frac{1}{3} + \frac{1}{6}\right)x^3 + o(x^3)$.`,
        String.raw`$\frac{1}{3} + \frac{1}{6} = \frac{2}{6} + \frac{1}{6} = \frac{1}{2}$, donc $\tan x - \sin x \sim \frac{x^3}{2}$.`,
        String.raw`Contrôle : $\tan x - \sin x = \tan x\,(1 - \cos x) \sim x\cdot\frac{x^2}{2} = \frac{x^3}{2}$ ✔.`
      ] },
    { id: 'm4-x-024', level: 2, check: 'expr', vars: ['x'],
      topic: 'Équivalent par DL', sec: 'm4-s-dl-usuels',
      prompt: String.raw`Donne un équivalent simple en 0, de la forme $c\,x^n$, de $\mathrm{e}^x - 1 - \sin x$.`,
      answer: 'x^2/2',
      mistakes: [
        { expr: '0', msg: String.raw`Les équivalents $\mathrm{e}^x - 1 \sim x$ et $\sin x \sim x$ ne se soustraient pas : il faut aller à l'ordre 2.` },
        { expr: 'x^2', msg: String.raw`Le terme d'ordre 2 de $\mathrm{e}^x$ est $\frac{x^2}{2!} = \frac{x^2}{2}$.` }
      ],
      hint: String.raw`DL à l'ordre 2 : $\mathrm{e}^x = 1 + x + \frac{x^2}{2} + o(x^2)$, $\sin x = x + o(x^2)$.`,
      explain: String.raw`$\mathrm{e}^x - 1 - \sin x = \left(x + \frac{x^2}{2}\right) - x + o(x^2) = \frac{x^2}{2} + o(x^2)$.`,
      rule: String.raw`Équivalent d'une somme : DL jusqu'au premier terme non nul.`,
      pitfall: String.raw`$\sin x = x + o(x^2)$ : le DL de $\sin$ n'a pas de terme en $x^2$ ($\sin$ est impaire).`,
      steps: [
        String.raw`Rappel : les équivalents ne se soustraient pas ; on fait un DL de chaque terme à l'ordre 2 : $\mathrm{e}^x = 1 + x + \frac{x^2}{2} + o(x^2)$ et $\sin x = x + o(x^2)$ (pas de terme en $x^2$, car $\sin$ est impaire).`,
        String.raw`$\mathrm{e}^x - 1 - \sin x = \left(1 + x + \frac{x^2}{2}\right) - 1 - x + o(x^2) = \frac{x^2}{2} + o(x^2)$.`,
        String.raw`Premier terme non nul : $\frac{x^2}{2}$, donc $\mathrm{e}^x - 1 - \sin x \sim \frac{x^2}{2}$.`
      ] },
    { id: 'm4-x-025', level: 2, check: 'expr', vars: ['x'], domain: [1, 5],
      topic: 'Quantité conjuguée', sec: 'm4-s-equivalents',
      prompt: String.raw`Donne un équivalent simple en $+\infty$ de $\sqrt{x^2 + 1} - x$ (de la forme $\frac{c}{x^n}$).`,
      answer: '1/(2*x)',
      mistakes: [
        { expr: '1/x', msg: String.raw`Le dénominateur $\sqrt{x^2+1} + x$ est équivalent à $2x$, pas à $x$.` },
        { expr: '0', msg: String.raw`On ne peut pas être équivalent à 0 : utilise la quantité conjuguée.` }
      ],
      hint: String.raw`Quantité conjuguée : $\sqrt{x^2+1} - x = \frac{1}{\sqrt{x^2+1} + x}$.`,
      explain: String.raw`$\sqrt{x^2+1} - x = \frac{1}{\sqrt{x^2+1} + x}$ et $\sqrt{x^2+1} + x \sim 2x$, donc $\sqrt{x^2+1} - x \sim \frac{1}{2x}$.`,
      rule: String.raw`$\sqrt{A} - B = \frac{A - B^2}{\sqrt{A} + B}$ ; en $+\infty$, $\sqrt{x^2 + 1} \sim x$.`,
      pitfall: String.raw`Le dénominateur $\sqrt{x^2+1} + x$ est équivalent à $2x$ : les deux termes s'ajoutent.`,
      steps: [
        String.raw`Rappel : quantité conjuguée $\sqrt{A} - B = \frac{A - B^2}{\sqrt{A} + B}$ ; et en $+\infty$, $\sqrt{x^2 + 1} \sim x$.`,
        String.raw`$\sqrt{x^2+1} - x = \dfrac{(x^2 + 1) - x^2}{\sqrt{x^2+1} + x} = \dfrac{1}{\sqrt{x^2+1} + x}$.`,
        String.raw`Dénominateur : $\sqrt{x^2+1} + x = x\left(\sqrt{1 + \frac{1}{x^2}} + 1\right) \sim 2x$.`,
        String.raw`Donc $\sqrt{x^2+1} - x \sim \dfrac{1}{2x}$.`
      ] },
    { id: 'm4-x-026', level: 1, check: 'expr', vars: ['x'],
      topic: 'DL de l\'exponentielle', sec: 'm4-s-dl-usuels',
      prompt: String.raw`Donne la partie régulière du DL à l'ordre 3 en 0 de $\mathrm{e}^{2x}$.`,
      answer: '1+2*x+2*x^2+4*x^3/3',
      mistakes: [
        { expr: '1+2*x+x^2/2+x^3/6', msg: String.raw`Il faut remplacer $u$ par $2x$ partout : $\frac{(2x)^2}{2} = 2x^2$ et $\frac{(2x)^3}{6} = \frac{4x^3}{3}$.` },
        { expr: '1+2*x+4*x^2+8*x^3', msg: String.raw`N'oublie pas les factorielles : $\frac{(2x)^2}{2!}$ et $\frac{(2x)^3}{3!}$.` }
      ],
      hint: String.raw`$\mathrm{e}^u = 1 + u + \frac{u^2}{2} + \frac{u^3}{6} + o(u^3)$ avec $u = 2x$.`,
      explain: String.raw`$1 + 2x + \frac{4x^2}{2} + \frac{8x^3}{6} = 1 + 2x + 2x^2 + \frac{4x^3}{3}$.`,
      rule: String.raw`$\mathrm{e}^{u} = 1 + u + \frac{u^2}{2} + \frac{u^3}{6} + o(u^3)$.`,
      pitfall: String.raw`On élève tout $2x$ à la puissance : $(2x)^3 = 8x^3$, pas $2x^3$.`,
      steps: [
        String.raw`Rappel : $\mathrm{e}^u = 1 + u + \frac{u^2}{2} + \frac{u^3}{6} + o(u^3)$ ; on peut remplacer $u$ par $2x$, qui tend vers 0.`,
        String.raw`Puissances : $(2x)^2 = 4x^2$ et $(2x)^3 = 8x^3$.`,
        String.raw`$\mathrm{e}^{2x} = 1 + 2x + \frac{4x^2}{2} + \frac{8x^3}{6} + o(x^3) = 1 + 2x + 2x^2 + \frac{4x^3}{3} + o(x^3)$.`,
        String.raw`Contrôle par Taylor : les dérivées de $\mathrm{e}^{2x}$ en 0 valent $1, 2, 4, 8$ ; divisées par $0!, 1!, 2!, 3!$, on retrouve $1, 2, 2, \frac{4}{3}$ ✔.`
      ] },
    { id: 'm4-x-027', level: 1, check: 'expr', vars: ['x'],
      topic: 'DL du logarithme', sec: 'm4-s-dl-usuels',
      prompt: String.raw`Donne la partie régulière du DL à l'ordre 3 en 0 de $\ln(1 - x)$.`,
      answer: '-x-x^2/2-x^3/3',
      mistakes: [
        { expr: '-x+x^2/2-x^3/3', msg: String.raw`C'est $-\ln(1+x)$. Remplace $x$ par $-x$ dans chaque terme de $\ln(1+x)$ : $-\frac{(-x)^2}{2} = -\frac{x^2}{2}$.` },
        { expr: 'x-x^2/2+x^3/3', msg: String.raw`C'est le DL de $\ln(1+x)$ : il faut remplacer $x$ par $-x$.` },
        { expr: '-x-x^2/2-x^3/6', msg: String.raw`Pas de factorielle dans le DL du logarithme : le coefficient de $x^3$ est $\frac{1}{3}$.` }
      ],
      hint: String.raw`Remplace $x$ par $-x$ dans $x - \frac{x^2}{2} + \frac{x^3}{3}$.`,
      explain: String.raw`$\ln(1 - x) = (-x) - \frac{(-x)^2}{2} + \frac{(-x)^3}{3} + o(x^3) = -x - \frac{x^2}{2} - \frac{x^3}{3} + o(x^3)$.`,
      rule: String.raw`$\ln(1-x) = -x - \frac{x^2}{2} - \frac{x^3}{3} - \dots + o(x^n)$.`,
      pitfall: String.raw`Une puissance paire de $-x$ est positive : $(-x)^2 = x^2$.`,
      steps: [
        String.raw`Rappel : $\ln(1+u) = u - \frac{u^2}{2} + \frac{u^3}{3} + o(u^3)$ ; on remplace $u$ par $-x$.`,
        String.raw`Puissances : $(-x)^2 = x^2$ et $(-x)^3 = -x^3$.`,
        String.raw`$\ln(1 - x) = (-x) - \frac{x^2}{2} + \frac{-x^3}{3} + o(x^3) = -x - \frac{x^2}{2} - \frac{x^3}{3} + o(x^3)$.`,
        String.raw`Contrôle : $\ln(1 - x) \lt 0$ pour $0 \lt x \lt 1$, cohérent avec tous les signes $-$ ✔.`
      ] },
    { id: 'm4-x-028', level: 2, check: 'expr', vars: ['x'],
      topic: 'DL de la racine carrée', sec: 'm4-s-dl-usuels',
      prompt: String.raw`Donne la partie régulière du DL à l'ordre 2 en 0 de $\sqrt{1 + x}$.`,
      answer: '1+x/2-x^2/8',
      mistakes: [
        { expr: '1+x/2+x^2/8', msg: String.raw`Le coefficient de $x^2$ est $\frac{\alpha(\alpha-1)}{2}$ avec $\alpha = \frac{1}{2}$ : il est négatif.` },
        { expr: '1+x/2-x^2/4', msg: String.raw`N'oublie pas le $2!$ : $\frac{1}{2}\cdot\left(-\frac{1}{2}\right)\cdot\frac{1}{2} = -\frac{1}{8}$.` }
      ],
      hint: String.raw`$(1+x)^\alpha = 1 + \alpha x + \frac{\alpha(\alpha-1)}{2}x^2 + o(x^2)$ avec $\alpha = \frac{1}{2}$.`,
      explain: String.raw`Avec $\alpha = \frac{1}{2}$, $\frac{\alpha(\alpha-1)}{2} = -\frac{1}{8}$, donc $\sqrt{1+x} = 1 + \frac{x}{2} - \frac{x^2}{8} + o(x^2)$.`,
      rule: String.raw`$\sqrt{1+x} = 1 + \frac{x}{2} - \frac{x^2}{8} + o(x^2)$.`,
      pitfall: String.raw`$\alpha - 1 = -\frac{1}{2}$ : le coefficient de $x^2$ est négatif, et il faut diviser par $2!$.`,
      steps: [
        String.raw`Rappel : $\sqrt{1 + x} = (1+x)^{1/2}$ et $(1+x)^\alpha = 1 + \alpha x + \frac{\alpha(\alpha-1)}{2}x^2 + o(x^2)$.`,
        String.raw`Avec $\alpha = \frac{1}{2}$ : le coefficient de $x$ est $\frac{1}{2}$.`,
        String.raw`Coefficient de $x^2$ : $\frac{\frac{1}{2}\left(\frac{1}{2} - 1\right)}{2} = \frac{\frac{1}{2}\times\left(-\frac{1}{2}\right)}{2} = \frac{-1/4}{2} = -\frac{1}{8}$.`,
        String.raw`$\sqrt{1+x} = 1 + \frac{x}{2} - \frac{x^2}{8} + o(x^2)$. Contrôle : $\sqrt{1{,}1} \approx 1{,}04875$ (valeur exacte $1{,}04881$) ✔.`
      ] },
    { id: 'm4-x-029', level: 2, check: 'expr', vars: ['x'],
      topic: 'Produit de DL', sec: 'm4-s-dl-operations',
      prompt: String.raw`Donne la partie régulière du DL à l'ordre 3 en 0 de $\mathrm{e}^x\sin x$.`,
      answer: 'x+x^2+x^3/3',
      mistakes: [
        { expr: 'x+x^2+x^3/2', msg: String.raw`Il manque le produit $1 \times \left(-\frac{x^3}{6}\right)$.` },
        { expr: 'x+x^2-x^3/6', msg: String.raw`Il manque le produit $\frac{x^2}{2}\times x = \frac{x^3}{2}$.` },
        { expr: 'x-x^3/6', msg: String.raw`C'est le DL de $\sin x$ seul : il faut encore le multiplier par celui de $\mathrm{e}^x$.` }
      ],
      hint: String.raw`Multiplie $1 + x + \frac{x^2}{2}$ par $x - \frac{x^3}{6}$ et garde les termes de degré $\leq 3$.`,
      explain: String.raw`$\left(1 + x + \frac{x^2}{2}\right)\left(x - \frac{x^3}{6}\right) = x + x^2 + \frac{x^3}{2} - \frac{x^3}{6} + o(x^3) = x + x^2 + \frac{x^3}{3} + o(x^3)$.`,
      rule: String.raw`DL d'un produit : multiplier les parties régulières et tronquer au degré voulu.`,
      pitfall: String.raw`Ne pas oublier les produits croisés de même degré.`,
      steps: [
        String.raw`Rappel : le DL d'un produit s'obtient en multipliant les DL et en ne gardant que les termes de degré $\leq 3$. Comme $\sin x$ commence par $x$, il suffit de $\mathrm{e}^x = 1 + x + \frac{x^2}{2} + o(x^2)$.`,
        String.raw`$\sin x = x - \frac{x^3}{6} + o(x^3)$. On développe $\left(1 + x + \frac{x^2}{2}\right)\left(x - \frac{x^3}{6}\right)$ terme à terme.`,
        String.raw`Termes de degré $\leq 3$ : $1\cdot x = x$ ; $x\cdot x = x^2$ ; $\frac{x^2}{2}\cdot x = \frac{x^3}{2}$ ; $1\cdot\left(-\frac{x^3}{6}\right) = -\frac{x^3}{6}$ (les autres produits sont de degré $\geq 4$).`,
        String.raw`Somme : $x + x^2 + \left(\frac{1}{2} - \frac{1}{6}\right)x^3 = x + x^2 + \frac{x^3}{3}$.`
      ] },
    { id: 'm4-x-030', level: 2, check: 'expr', vars: ['x'],
      topic: 'Produit de DL', sec: 'm4-s-dl-operations',
      prompt: String.raw`Donne la partie régulière du DL à l'ordre 2 en 0 de $\dfrac{\mathrm{e}^x}{1 - x}$.`,
      answer: '1+2*x+5*x^2/2',
      mistakes: [
        { expr: '1+2*x+3*x^2/2', msg: String.raw`Il faut aussi développer $\frac{1}{1-x}$ jusqu'à $x^2$ : $1 + x + x^2$.` },
        { expr: '1+2*x+2*x^2', msg: String.raw`Tu as oublié le produit $\frac{x^2}{2}\times 1$ : le coefficient de $x^2$ est $1 + 1 + \frac{1}{2}$.` }
      ],
      hint: String.raw`$\left(1 + x + \frac{x^2}{2}\right)\left(1 + x + x^2\right)$, tronqué à l'ordre 2.`,
      explain: String.raw`Coefficient de $x$ : $1 + 1 = 2$ ; de $x^2$ : $1 + 1 + \frac{1}{2} = \frac{5}{2}$. Donc $1 + 2x + \frac{5x^2}{2} + o(x^2)$.`,
      rule: String.raw`$\frac{1}{1-x} = 1 + x + x^2 + o(x^2)$ ; coefficient de $x^2$ d'un produit : $a_0b_2 + a_1b_1 + a_2b_0$.`,
      pitfall: String.raw`Pour le terme en $x^2$, il y a trois produits à additionner.`,
      steps: [
        String.raw`Rappel : $\frac{1}{1-x} = 1 + x + x^2 + o(x^2)$ (série géométrique) ; diviser par $1 - x$ revient à multiplier par ce DL, puis à tronquer à l'ordre 2.`,
        String.raw`On multiplie $\left(1 + x + \frac{x^2}{2}\right)\left(1 + x + x^2\right)$.`,
        String.raw`Coefficient constant : $1$. Coefficient de $x$ : $1\cdot 1 + 1\cdot 1 = 2$. Coefficient de $x^2$ : $1\cdot 1 + 1\cdot 1 + \frac{1}{2}\cdot 1 = \frac{5}{2}$ (produits $1\cdot x^2$, $x\cdot x$ et $\frac{x^2}{2}\cdot 1$).`,
        String.raw`Partie régulière : $1 + 2x + \frac{5}{2}x^2$.`
      ] },
    { id: 'm4-x-031', level: 2, check: 'expr', vars: ['x'],
      topic: 'Produit de DL', sec: 'm4-s-dl-operations',
      prompt: String.raw`Donne la partie régulière du DL à l'ordre 3 en 0 de $\cos x\,\ln(1 + x)$.`,
      answer: 'x-x^2/2-x^3/6',
      mistakes: [
        { expr: 'x-x^2/2+x^3/3', msg: String.raw`Tu as oublié le produit croisé $-\frac{x^2}{2}\cdot x = -\frac{x^3}{2}$.` },
        { expr: 'x-x^2/2-x^3/2', msg: String.raw`Tu as oublié le terme $\frac{x^3}{3}$ de $\ln(1+x)$.` }
      ],
      hint: String.raw`$\left(1 - \frac{x^2}{2}\right)\left(x - \frac{x^2}{2} + \frac{x^3}{3}\right)$, tronqué à l'ordre 3.`,
      explain: String.raw`$x - \frac{x^2}{2} + \frac{x^3}{3} - \frac{x^3}{2} + o(x^3) = x - \frac{x^2}{2} - \frac{x^3}{6} + o(x^3)$.`,
      rule: String.raw`DL d'un produit : multiplier les parties régulières et tronquer au degré voulu.`,
      pitfall: String.raw`Ne pas oublier le produit croisé $-\frac{x^2}{2}\cdot x$, qui est de degré 3.`,
      steps: [
        String.raw`Rappel : DL d'un produit = produit des DL, tronqué. Ici $\cos x = 1 - \frac{x^2}{2} + o(x^3)$ et $\ln(1+x) = x - \frac{x^2}{2} + \frac{x^3}{3} + o(x^3)$.`,
        String.raw`On développe $\left(1 - \frac{x^2}{2}\right)\left(x - \frac{x^2}{2} + \frac{x^3}{3}\right)$ en gardant les degrés $\leq 3$.`,
        String.raw`$1\times(\dots) = x - \frac{x^2}{2} + \frac{x^3}{3}$ ; $-\frac{x^2}{2}\times x = -\frac{x^3}{2}$ (les autres produits sont de degré $\geq 4$).`,
        String.raw`Somme : $x - \frac{x^2}{2} + \left(\frac{1}{3} - \frac{1}{2}\right)x^3 = x - \frac{x^2}{2} - \frac{x^3}{6}$.`
      ] },
    { id: 'm4-x-032', level: 3, check: 'expr', vars: ['x'],
      topic: 'DL d\'une composée', sec: 'm4-s-dl-operations',
      prompt: String.raw`Donne la partie régulière du DL à l'ordre 3 en 0 de $\ln(1 + \sin x)$.`,
      answer: 'x-x^2/2+x^3/6',
      mistakes: [
        { expr: 'x-x^2/2+x^3/3', msg: String.raw`Le terme $-\frac{x^3}{6}$ de $\sin x$ contribue aussi : $\frac{1}{3} - \frac{1}{6} = \frac{1}{6}$.` },
        { expr: 'x-x^2/2-x^3/6', msg: String.raw`Tu as oublié le terme $\frac{u^3}{3} = \frac{x^3}{3}$ du DL de $\ln(1+u)$.` }
      ],
      hint: String.raw`$u = \sin x = x - \frac{x^3}{6} + o(x^3)$, puis $\ln(1+u) = u - \frac{u^2}{2} + \frac{u^3}{3} + o(u^3)$.`,
      explain: String.raw`Avec $u^2 = x^2 + o(x^3)$ et $u^3 = x^3 + o(x^3)$ : $\ln(1 + \sin x) = x - \frac{x^3}{6} - \frac{x^2}{2} + \frac{x^3}{3} + o(x^3) = x - \frac{x^2}{2} + \frac{x^3}{6} + o(x^3)$.`,
      rule: String.raw`Composée $f\big(u(x)\big)$ avec $u \to 0$ : développer $f(u)$, remplacer $u$ par son DL, tronquer.`,
      pitfall: String.raw`Le $-\frac{x^3}{6}$ de $\sin x$ et le $\frac{u^3}{3}$ contribuent tous deux au terme en $x^3$.`,
      steps: [
        String.raw`Rappel : pour $f\big(u(x)\big)$ avec $u \to 0$, on développe $f(u)$ puis on remplace $u$ par son DL. Ici $\ln(1+u) = u - \frac{u^2}{2} + \frac{u^3}{3} + o(u^3)$ avec $u = \sin x \to 0$.`,
        String.raw`$u = x - \frac{x^3}{6} + o(x^3)$ ; $u^2 = x^2 + o(x^3)$ (le double produit $-\frac{x^4}{3}$ est d'ordre 4) ; $u^3 = x^3 + o(x^3)$.`,
        String.raw`On remplace : $\ln(1 + \sin x) = \left(x - \frac{x^3}{6}\right) - \frac{x^2}{2} + \frac{x^3}{3} + o(x^3)$.`,
        String.raw`On regroupe : $x - \frac{x^2}{2} + \left(-\frac{1}{6} + \frac{1}{3}\right)x^3 = x - \frac{x^2}{2} + \frac{x^3}{6}$.`
      ] },
    { id: 'm4-x-033', level: 3, check: 'expr', vars: ['x'],
      topic: 'DL d\'une composée', sec: 'm4-s-dl-operations',
      prompt: String.raw`Donne la partie régulière du DL à l'ordre 2 en 0 de $\mathrm{e}^{\cos x}$.`,
      answer: 'e*(1-x^2/2)',
      mistakes: [
        { expr: '1-x^2/2', msg: String.raw`Il manque le facteur $\mathrm{e}$ : $\mathrm{e}^{\cos x} = \mathrm{e}\cdot\mathrm{e}^{\cos x - 1}$.` },
        { expr: '2-x^2/2', msg: String.raw`On ne peut composer qu'avec $u \to 0$ ; ici $\cos x \to 1$. Écris $\mathrm{e}^{\cos x} = \mathrm{e}\cdot\mathrm{e}^{\cos x - 1}$.` }
      ],
      hint: String.raw`$\cos x \to 1$, pas 0 : écris $\mathrm{e}^{\cos x} = \mathrm{e}\cdot\mathrm{e}^{\cos x - 1}$.`,
      explain: String.raw`$\cos x - 1 = -\frac{x^2}{2} + o(x^2) \to 0$, donc $\mathrm{e}^{\cos x - 1} = 1 - \frac{x^2}{2} + o(x^2)$ et $\mathrm{e}^{\cos x} = \mathrm{e} - \frac{\mathrm{e}}{2}x^2 + o(x^2)$.`,
      rule: String.raw`$\mathrm{e}^{a + u} = \mathrm{e}^{a}\,\mathrm{e}^{u}$ : se ramener à $u \to 0$ avant de composer.`,
      pitfall: String.raw`Le DL de $\mathrm{e}^u$ en 0 ne s'applique pas à $u = \cos x$, qui tend vers 1.`,
      steps: [
        String.raw`Rappel : on ne peut utiliser le DL de $\mathrm{e}^u$ en 0 que si $u \to 0$. Ici $\cos x \to 1$ : on fait apparaître $\cos x - 1 \to 0$ en écrivant $\mathrm{e}^{\cos x} = \mathrm{e}^{1 + (\cos x - 1)} = \mathrm{e}\cdot\mathrm{e}^{\cos x - 1}$.`,
        String.raw`$u = \cos x - 1 = -\frac{x^2}{2} + o(x^2)$ tend vers 0 ; $u^2$ est d'ordre 4, négligeable ici.`,
        String.raw`$\mathrm{e}^{u} = 1 + u + o(u) = 1 - \frac{x^2}{2} + o(x^2)$.`,
        String.raw`$\mathrm{e}^{\cos x} = \mathrm{e}\left(1 - \frac{x^2}{2}\right) + o(x^2) = \mathrm{e} - \frac{\mathrm{e}}{2}x^2 + o(x^2)$. Contrôle : en $x = 0$, $\mathrm{e}^{\cos 0} = \mathrm{e}$ ✔.`
      ] },
    { id: 'm4-x-034', level: 3, check: 'expr', vars: ['x'],
      topic: 'DL d\'un inverse', sec: 'm4-s-dl-operations',
      prompt: String.raw`Donne la partie régulière du DL à l'ordre 4 en 0 de $\dfrac{1}{\cos x}$.`,
      answer: '1+x^2/2+5*x^4/24',
      mistakes: [
        { expr: '1+x^2/2-x^4/24', msg: String.raw`$\frac{1}{1-u} = 1 + u + u^2 + o(u^2)$ : n'oublie pas $u^2 = \frac{x^4}{4} + o(x^4)$.` },
        { expr: '1+x^2/2+x^4/4', msg: String.raw`$u$ contient aussi $-\frac{x^4}{24}$ : le coefficient est $\frac{1}{4} - \frac{1}{24} = \frac{5}{24}$.` }
      ],
      hint: String.raw`$\cos x = 1 - u$ avec $u = \frac{x^2}{2} - \frac{x^4}{24}$, puis $\frac{1}{1-u} = 1 + u + u^2 + o(u^2)$.`,
      explain: String.raw`$1 + \left(\frac{x^2}{2} - \frac{x^4}{24}\right) + \frac{x^4}{4} + o(x^4) = 1 + \frac{x^2}{2} + \frac{5x^4}{24} + o(x^4)$.`,
      rule: String.raw`$\frac{1}{1-u} = 1 + u + u^2 + o(u^2)$ quand $u \to 0$.`,
      pitfall: String.raw`Le $-\frac{x^4}{24}$ de $u$ et le $\frac{x^4}{4}$ de $u^2$ contribuent tous deux à l'ordre 4.`,
      steps: [
        String.raw`Rappel : $\frac{1}{1-u} = 1 + u + u^2 + o(u^2)$ quand $u \to 0$. On écrit $\cos x = 1 - u$ avec $u = 1 - \cos x = \frac{x^2}{2} - \frac{x^4}{24} + o(x^4) \to 0$.`,
        String.raw`$u^2 = \left(\frac{x^2}{2}\right)^2 + o(x^4) = \frac{x^4}{4} + o(x^4)$ ; $u^3$ est d'ordre 6, négligeable.`,
        String.raw`$\frac{1}{\cos x} = 1 + \left(\frac{x^2}{2} - \frac{x^4}{24}\right) + \frac{x^4}{4} + o(x^4)$.`,
        String.raw`Coefficient de $x^4$ : $-\frac{1}{24} + \frac{6}{24} = \frac{5}{24}$. Donc $\frac{1}{\cos x} = 1 + \frac{x^2}{2} + \frac{5x^4}{24} + o(x^4)$.`
      ] },
    { id: 'm4-x-035', level: 2, check: 'expr', vars: ['x'],
      topic: 'DL en un point a', sec: 'm4-s-taylor',
      prompt: String.raw`Donne la partie régulière du DL à l'ordre 2 de $\mathrm{e}^x$ <b>en 1</b>, écrite avec des puissances de $(x - 1)$.`,
      answer: 'e*(1+(x-1)+(x-1)^2/2)',
      mistakes: [
        { expr: '1+(x-1)+(x-1)^2/2', msg: String.raw`$\mathrm{e}^{1 + h} = \mathrm{e}\cdot\mathrm{e}^{h}$ : tu as oublié le facteur $\mathrm{e}$.` },
        { expr: 'e*(1+x+x^2/2)', msg: String.raw`Il faut des puissances de $h = x - 1$, pas de $x$.` }
      ],
      hint: String.raw`Pose $h = x - 1$ : $\mathrm{e}^x = \mathrm{e}^{1 + h} = \mathrm{e}\cdot\mathrm{e}^{h}$.`,
      explain: String.raw`Avec $h = x - 1$ : $\mathrm{e}^x = \mathrm{e}\cdot\mathrm{e}^h = \mathrm{e}\left(1 + h + \frac{h^2}{2}\right) + o(h^2)$, soit $\mathrm{e}\left(1 + (x-1) + \frac{(x-1)^2}{2}\right)$.`,
      rule: String.raw`DL en $a$ : poser $h = x - a$, développer en $h \to 0$, puis remplacer $h$ par $x - a$.`,
      pitfall: String.raw`Ne pas oublier le facteur $\mathrm{e} = \mathrm{e}^1$, valeur de la fonction en $a = 1$.`,
      steps: [
        String.raw`Rappel : un DL en $a$ s'écrit en puissances de $h = x - a$ ; on pose $h = x - 1 \to 0$ et on se ramène à un DL usuel en 0.`,
        String.raw`$\mathrm{e}^x = \mathrm{e}^{1 + h} = \mathrm{e}\cdot\mathrm{e}^{h}$ (propriété $\mathrm{e}^{a+b} = \mathrm{e}^a\mathrm{e}^b$).`,
        String.raw`$\mathrm{e}^h = 1 + h + \frac{h^2}{2} + o(h^2)$, donc $\mathrm{e}^x = \mathrm{e}\left(1 + h + \frac{h^2}{2}\right) + o(h^2)$.`,
        String.raw`On revient à $x$ : $\mathrm{e}\left(1 + (x-1) + \frac{(x-1)^2}{2}\right)$. Contrôle par Taylor : toutes les dérivées de $\exp$ en 1 valent $\mathrm{e}$ ✔.`
      ] },
    { id: 'm4-x-036', level: 3, check: 'expr', vars: ['x'],
      topic: 'DL en un point a', sec: 'm4-s-taylor',
      prompt: String.raw`Donne la partie régulière du DL à l'ordre 2 de $\sqrt{x}$ <b>en 4</b>, écrite avec des puissances de $(x - 4)$.`,
      answer: '2+(x-4)/4-(x-4)^2/64',
      mistakes: [
        { expr: '2+(x-4)/4-(x-4)^2/8', msg: String.raw`$\sqrt{4+h} = 2\sqrt{1 + \frac{h}{4}}$ : remplace $x$ par $\frac{h}{4}$ dans $1 + \frac{x}{2} - \frac{x^2}{8}$, puis multiplie par 2.` },
        { expr: '2+(x-4)/2-(x-4)^2/8', msg: String.raw`$\sqrt{4 + h} \neq 1 + \sqrt{1 + h}$ : il faut factoriser par 4 sous la racine, $\sqrt{4 + h} = 2\sqrt{1 + \frac{h}{4}}$.` }
      ],
      hint: String.raw`Pose $h = x - 4$ et factorise : $\sqrt{4 + h} = 2\sqrt{1 + \frac{h}{4}}$.`,
      explain: String.raw`$\sqrt{4 + h} = 2\left(1 + \frac{h}{8} - \frac{h^2}{128}\right) + o(h^2) = 2 + \frac{h}{4} - \frac{h^2}{64} + o(h^2)$ avec $h = x - 4$.`,
      rule: String.raw`$\sqrt{a^2 + h} = a\sqrt{1 + \frac{h}{a^2}}$, puis DL de $\sqrt{1 + u}$.`,
      pitfall: String.raw`Factoriser par 4 avant d'utiliser le DL de $\sqrt{1 + u}$ : $u = \frac{h}{4}$, pas $h$.`,
      steps: [
        String.raw`Rappel : pour un DL en $a = 4$, on pose $h = x - 4 \to 0$ et on se ramène à $\sqrt{1 + u} = 1 + \frac{u}{2} - \frac{u^2}{8} + o(u^2)$ en factorisant.`,
        String.raw`$\sqrt{x} = \sqrt{4 + h} = \sqrt{4\left(1 + \frac{h}{4}\right)} = 2\sqrt{1 + \frac{h}{4}}$.`,
        String.raw`Avec $u = \frac{h}{4}$ : $\frac{u}{2} = \frac{h}{8}$ et $\frac{u^2}{8} = \frac{h^2}{16\times 8} = \frac{h^2}{128}$, donc $\sqrt{1 + \frac{h}{4}} = 1 + \frac{h}{8} - \frac{h^2}{128} + o(h^2)$.`,
        String.raw`On multiplie par 2 : $\sqrt{x} = 2 + \frac{h}{4} - \frac{h^2}{64} + o(h^2)$, avec $h = x - 4$. Contrôle par Taylor : $\sqrt{4} = 2$ et $(\sqrt{x})'(4) = \frac{1}{2\sqrt{4}} = \frac{1}{4}$ ✔.`
      ] },
    { id: 'm4-x-037', level: 2, check: 'tuple', vars: [],
      topic: 'Produit de DL', sec: 'm4-s-dl-operations',
      prompt: String.raw`$f(x) = \dfrac{\mathrm{e}^x}{1 + x}$ admet en 0 le DL $f(x) = a + bx + cx^2 + o(x^2)$. Donne $a ; b ; c$.`,
      answer: '1;0;1/2',
      mistakes: [
        { expr: '1;2;5/2', msg: String.raw`Ce sont les coefficients de $\frac{\mathrm{e}^x}{1 - x}$ : ici $\frac{1}{1+x} = 1 - x + x^2 + o(x^2)$, avec des signes alternés.` },
        { expr: '1;1;1/2', msg: String.raw`Ce sont les coefficients de $\mathrm{e}^x$ seul : il faut encore multiplier par $\frac{1}{1+x} = 1 - x + x^2 + o(x^2)$.` }
      ],
      hint: String.raw`Multiplie $1 + x + \frac{x^2}{2}$ par $\frac{1}{1+x} = 1 - x + x^2 + o(x^2)$.`,
      explain: String.raw`$\left(1 + x + \frac{x^2}{2}\right)\left(1 - x + x^2\right) = 1 + 0\cdot x + \frac{1}{2}x^2 + o(x^2)$ : $a = 1$, $b = 0$, $c = \frac{1}{2}$ (minimum local en 0).`,
      rule: String.raw`$\frac{1}{1+x} = 1 - x + x^2 + o(x^2)$ ; coefficient de $x^k$ d'un produit : somme des $a_i b_j$ avec $i + j = k$.`,
      pitfall: String.raw`Signes alternés dans $\frac{1}{1+x}$ : $1 - x + x^2$.`,
      steps: [
        String.raw`Rappel : diviser par $1 + x$ revient à multiplier par $\frac{1}{1+x} = 1 - x + x^2 + o(x^2)$ (série géométrique avec $-x$) ; on multiplie les DL et on tronque à l'ordre 2.`,
        String.raw`On développe $\left(1 + x + \frac{x^2}{2}\right)\left(1 - x + x^2\right)$.`,
        String.raw`Constante : $a = 1$. Coefficient de $x$ : $1\cdot(-1) + 1\cdot 1 = 0$, donc $b = 0$. Coefficient de $x^2$ : $1\cdot 1 + 1\cdot(-1) + \frac{1}{2}\cdot 1 = \frac{1}{2}$, donc $c = \frac{1}{2}$.`,
        String.raw`Interprétation : $f(x) = 1 + \frac{x^2}{2} + o(x^2)$, tangente horizontale $y = 1$ et courbe au-dessus ($c \gt 0$) : minimum local en 0.`
      ] },
    { id: 'm4-x-038', level: 2, check: 'expr', vars: ['x'],
      topic: 'Asymptote oblique', sec: 'm4-s-applications',
      prompt: String.raw`Donne l'équation $y = ax + b$ de l'asymptote en $+\infty$ de $f(x) = \dfrac{x^2 + 3x}{x - 1}$ (tape seulement $ax + b$).`,
      answer: 'x+4',
      mistakes: [
        { expr: 'x+3', msg: String.raw`Fais la division euclidienne : $x^2 + 3x = (x - 1)(x + 4) + 4$.` },
        { expr: 'x', msg: String.raw`La pente $a = 1$ est juste, mais il faut aussi $b = \lim\left(f(x) - x\right) = 4$.` },
        { expr: 'x+2', msg: String.raw`Erreur de signe dans la division : $x^2 + 3x - x(x - 1) = 4x$ (et non $2x$).` }
      ],
      hint: String.raw`Division euclidienne de $x^2 + 3x$ par $x - 1$.`,
      explain: String.raw`$x^2 + 3x = (x-1)(x+4) + 4$, donc $f(x) = x + 4 + \frac{4}{x - 1}$ avec $\frac{4}{x-1} \to 0$ : asymptote $y = x + 4$ (courbe au-dessus en $+\infty$).`,
      rule: String.raw`Division euclidienne $P = BQ + R$ : $\frac{P}{B} = Q + \frac{R}{B}$, et $\frac{R}{B} \to 0$ si $\deg R \lt \deg B$.`,
      pitfall: String.raw`Le terme constant de l'asymptote vient de la division, pas du coefficient 3 de l'énoncé.`,
      steps: [
        String.raw`Rappel : si $f(x) = ax + b + \varepsilon(x)$ avec $\varepsilon(x) \to 0$ en $+\infty$, la droite $y = ax + b$ est asymptote. Pour une fraction rationnelle, la division euclidienne donne directement cette écriture.`,
        String.raw`Division de $x^2 + 3x$ par $x - 1$ : $x^2 + 3x - x(x - 1) = 4x$, puis $4x - 4(x - 1) = 4$. Donc $x^2 + 3x = (x - 1)(x + 4) + 4$.`,
        String.raw`$f(x) = x + 4 + \dfrac{4}{x - 1}$, et $\dfrac{4}{x-1} \to 0$ en $+\infty$.`,
        String.raw`Asymptote : $y = x + 4$ ; comme $\frac{4}{x-1} \gt 0$ pour $x \gt 1$, la courbe est au-dessus. Vérification : $(x-1)(x+4) + 4 = x^2 + 3x - 4 + 4 = x^2 + 3x$ ✔.`
      ] },
    { id: 'm4-x-039', level: 3, check: 'expr', vars: ['x'],
      topic: 'Asymptote oblique', sec: 'm4-s-applications',
      prompt: String.raw`Donne l'équation $y = ax + b$ de l'asymptote en $+\infty$ de $f(x) = \sqrt{x^2 + 4x + 1}$ (tape seulement $ax + b$).`,
      answer: 'x+2',
      mistakes: [
        { expr: 'x+4', msg: String.raw`$\sqrt{1 + u} = 1 + \frac{u}{2} + \dots$ : le terme $\frac{4}{x}$ donne $\frac{2}{x}$, donc $+2$.` },
        { expr: 'x', msg: String.raw`$\frac{f(x)}{x} \to 1$ donne la pente, mais il faut aussi $b = \lim\left(f(x) - x\right)$.` }
      ],
      hint: String.raw`$f(x) = x\sqrt{1 + \frac{4}{x} + \frac{1}{x^2}}$, puis $\sqrt{1 + u} = 1 + \frac{u}{2} - \frac{u^2}{8} + o(u^2)$.`,
      explain: String.raw`Avec $u = \frac{4}{x} + \frac{1}{x^2}$ : $\sqrt{1 + u} = 1 + \frac{2}{x} - \frac{3}{2x^2} + o\left(\frac{1}{x^2}\right)$, donc $f(x) = x + 2 - \frac{3}{2x} + o\left(\frac{1}{x}\right)$ : asymptote $y = x + 2$, courbe en dessous.`,
      rule: String.raw`$\sqrt{1 + u} = 1 + \frac{u}{2} - \frac{u^2}{8} + o(u^2)$ ; asymptote = partie $ax + b$ du développement en $+\infty$.`,
      pitfall: String.raw`Le $\frac{4}{x}$ sous la racine donne $\frac{2}{x}$ (division par 2), d'où $b = 2$ et non 4.`,
      steps: [
        String.raw`Rappel : pour une asymptote en $+\infty$, on cherche $f(x) = ax + b + o(1)$ ; avec une racine, on factorise par $x^2$ sous la racine puis on utilise $\sqrt{1 + u} = 1 + \frac{u}{2} - \frac{u^2}{8} + o(u^2)$.`,
        String.raw`Pour $x \gt 0$ : $f(x) = \sqrt{x^2\left(1 + \frac{4}{x} + \frac{1}{x^2}\right)} = x\sqrt{1 + u}$ avec $u = \frac{4}{x} + \frac{1}{x^2} \to 0$.`,
        String.raw`$\frac{u}{2} = \frac{2}{x} + \frac{1}{2x^2}$ et $\frac{u^2}{8} = \frac{16}{8x^2} + o\left(\frac{1}{x^2}\right) = \frac{2}{x^2} + o\left(\frac{1}{x^2}\right)$, donc $\sqrt{1+u} = 1 + \frac{2}{x} - \frac{3}{2x^2} + o\left(\frac{1}{x^2}\right)$.`,
        String.raw`On multiplie par $x$ : $f(x) = x + 2 - \frac{3}{2x} + o\left(\frac{1}{x}\right)$. Asymptote $y = x + 2$, et la courbe est en dessous car $-\frac{3}{2x} \lt 0$.`
      ] },
    { id: 'm4-x-040', level: 3, check: 'expr', vars: ['x'],
      topic: 'Asymptote oblique', sec: 'm4-s-applications',
      prompt: String.raw`Donne l'équation $y = ax + b$ de l'asymptote en $+\infty$ de $f(x) = (x + 1)\,\mathrm{e}^{1/x}$ (tape seulement $ax + b$).`,
      answer: 'x+2',
      mistakes: [
        { expr: 'x+1', msg: String.raw`$\mathrm{e}^{1/x} = 1 + \frac{1}{x} + \dots$ : le produit $x \cdot \frac{1}{x}$ ajoute encore 1.` },
        { expr: 'x', msg: String.raw`La pente est bien 1, mais $f(x) - x \to 2$ : il faut le terme constant $b = 2$.` }
      ],
      hint: String.raw`$\mathrm{e}^{1/x} = 1 + \frac{1}{x} + \frac{1}{2x^2} + o\left(\frac{1}{x^2}\right)$, puis multiplie par $x + 1$.`,
      explain: String.raw`$(x + 1)\left(1 + \frac{1}{x} + \frac{1}{2x^2}\right) = x + 2 + \frac{3}{2x} + o\left(\frac{1}{x}\right)$ : asymptote $y = x + 2$, courbe au-dessus.`,
      rule: String.raw`En $+\infty$ : $\mathrm{e}^{1/x} = 1 + \frac{1}{x} + \frac{1}{2x^2} + o\left(\frac{1}{x^2}\right)$.`,
      pitfall: String.raw`Le produit $x\cdot\frac{1}{x} = 1$ s'ajoute à la constante 1 : $b = 2$.`,
      steps: [
        String.raw`Rappel : en $+\infty$, on pose $u = \frac{1}{x} \to 0$ et on utilise $\mathrm{e}^u = 1 + u + \frac{u^2}{2} + o(u^2)$ ; l'asymptote est la partie $ax + b$ du développement obtenu.`,
        String.raw`$\mathrm{e}^{1/x} = 1 + \frac{1}{x} + \frac{1}{2x^2} + o\left(\frac{1}{x^2}\right)$.`,
        String.raw`On multiplie par $x + 1$ : $x\left(1 + \frac{1}{x} + \frac{1}{2x^2}\right) = x + 1 + \frac{1}{2x}$ et $1\times\left(1 + \frac{1}{x}\right) = 1 + \frac{1}{x}$ (à $o\left(\frac{1}{x}\right)$ près).`,
        String.raw`Somme : $f(x) = x + 2 + \frac{3}{2x} + o\left(\frac{1}{x}\right)$. Asymptote $y = x + 2$, courbe au-dessus ($\frac{3}{2x} \gt 0$).`
      ] }
  ]
});
