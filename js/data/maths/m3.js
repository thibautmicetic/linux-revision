/* Maths — Chapitre 3 : Fonctions usuelles */
APP.registerChapter({
  subject: 'maths',
  id: 'm3', num: 3,
  title: 'Fonctions usuelles',
  subtitle: 'Exponentielle, logarithme, puissances, hyperboliques',

  /* ===================================================== FICHES DE COURS */
  sections: [
    {
      id: 'm3-s-generalites', title: 'Généralités : domaine, parité, périodicité',
      html: String.raw`
<h3>Domaine de définition</h3>
<p>Le <b>domaine de définition</b> $\mathcal{D}_f$ de $f$ est l'ensemble des réels $x$ pour lesquels $f(x)$ a un sens. On repère les « interdits » :</p>
<ul>
<li>un dénominateur doit être <b>non nul</b> : $\frac{1}{u(x)}$ exige $u(x) \neq 0$ ;</li>
<li>une racine carrée exige un radicande <b>positif ou nul</b> : $\sqrt{u(x)}$ exige $u(x) \geq 0$ ;</li>
<li>un logarithme exige un argument <b>strictement positif</b> : $\ln(u(x))$ exige $u(x) \gt 0$ ;</li>
<li>une puissance réelle $u(x)^a$ ($a$ non entier) exige $u(x) \gt 0$ ; $\tan x$ exige $x \neq \frac{\pi}{2} + k\pi$ ; $\arcsin u$ et $\arccos u$ exigent $|u| \leq 1$.</li>
</ul>
<div class="callout tip"><b>Exemple corrigé</b> $f(x) = \dfrac{\ln(x+2)}{x-1}$. Conditions : $x + 2 \gt 0$ et $x - 1 \neq 0$. Donc $\mathcal{D}_f = \left]-2, 1\right[ \cup \left]1, +\infty\right[$.</div>
<h3>Parité</h3>
<p>On suppose $\mathcal{D}$ <b>symétrique par rapport à 0</b> ($x \in \mathcal{D} \Rightarrow -x \in \mathcal{D}$). Alors :</p>
<ul>
<li>$f$ est <b>paire</b> si $f(-x) = f(x)$ : courbe symétrique par rapport à l'axe $(Oy)$ (ex. $x^2$, $\cos$, $\operatorname{ch}$, $|x|$) ;</li>
<li>$f$ est <b>impaire</b> si $f(-x) = -f(x)$ : courbe symétrique par rapport à l'origine $O$ (ex. $x^3$, $\sin$, $\operatorname{sh}$, $\operatorname{th}$). Si $0 \in \mathcal{D}$, alors $f(0) = 0$.</li>
</ul>
<p><b>Méthode</b> : calculer $f(-x)$ et le comparer à $f(x)$. Une fonction peut n'être ni paire ni impaire (ex. $\mathrm{e}^x$). Règles des signes : impaire × impaire = paire ; paire × impaire = impaire.</p>
<h3>Périodicité</h3>
<p>$f$ est <b>$T$-périodique</b> ($T \gt 0$) si $f(x + T) = f(x)$ pour tout $x$ de $\mathcal{D}$. On l'étudie alors sur un intervalle de longueur $T$, puis on translate la courbe. Ex. : $\cos$, $\sin$ sont $2\pi$-périodiques, $\tan$ est $\pi$-périodique, $x \mapsto \cos(\omega x)$ est $\frac{2\pi}{\omega}$-périodique, $x \mapsto x - E(x)$ est $1$-périodique.</p>
<h3>Transformations de courbes</h3>
<table class="tbl">
<tr><th>Fonction</th><th>Courbe obtenue à partir de $\mathcal{C}_f$</th></tr>
<tr><td>$f(x) + b$</td><td>translation verticale de $b$</td></tr>
<tr><td>$f(x + a)$</td><td>translation horizontale de $-a$ (vers la gauche si $a \gt 0$)</td></tr>
<tr><td>$k\,f(x)$</td><td>dilatation verticale de facteur $k$</td></tr>
<tr><td>$f(kx)$</td><td>contraction horizontale de facteur $k$ (si $k \gt 1$)</td></tr>
<tr><td>$-f(x)$ / $f(-x)$</td><td>symétrie par rapport à $(Ox)$ / à $(Oy)$</td></tr>
<tr><td>$|f(x)|$</td><td>les parties sous $(Ox)$ sont « repliées » au-dessus</td></tr>
</table>
<div class="callout warn"><b>Pièges</b> Vérifier que le domaine est symétrique avant de parler de parité : $x \mapsto x^2$ définie sur $[-1, 2]$ n'est pas paire. Et $f(x + a)$ décale la courbe vers la <b>gauche</b> quand $a \gt 0$.</div>
<div class="callout key"><b>À retenir</b> Domaine : dénominateur $\neq 0$, racine $\geq 0$, $\ln$ $\gt 0$. Paire : $f(-x) = f(x)$ ; impaire : $f(-x) = -f(x)$.</div>
`
    },
    {
      id: 'm3-s-bijection', title: 'Composition, bijection et réciproque',
      html: String.raw`
<h3>Composition</h3>
<p>Si $f : I \to J$ et $g : J \to \mathbb{R}$, la <b>composée</b> $g \circ f$ est définie par $(g \circ f)(x) = g(f(x))$ : on applique <b>d'abord $f$, puis $g$</b>. En général $g \circ f \neq f \circ g$.</p>
<p>Exemple : $f(x) = x^2 + 1$ et $g(x) = \ln x$. Alors $(g \circ f)(x) = \ln(x^2 + 1)$ (définie sur $\mathbb{R}$) mais $(f \circ g)(x) = (\ln x)^2 + 1$ (définie sur $\left]0, +\infty\right[$).</p>
<p>Dérivée : $(g \circ f)'(x) = f'(x)\, g'(f(x))$ (dérivée de l'intérieur × dérivée de l'extérieur évaluée en l'intérieur).</p>
<h3>Monotonie</h3>
<p>$f$ est strictement croissante sur $I$ si $a \lt b \Rightarrow f(a) \lt f(b)$. Si $f' \gt 0$ sur un intervalle (sauf en des points isolés), $f$ y est strictement croissante. Composer par une fonction croissante conserve le sens de variation ; par une fonction décroissante, il l'inverse.</p>
<h3>Bijection et fonction réciproque</h3>
<p>$f : I \to J$ est une <b>bijection</b> si tout $y \in J$ admet <b>exactement un</b> antécédent $x \in I$. On définit alors la <b>réciproque</b> $f^{-1} : J \to I$ par $$y = f(x) \iff x = f^{-1}(y).$$ On a $f^{-1}(f(x)) = x$ sur $I$ et $f(f^{-1}(y)) = y$ sur $J$.</p>
<div class="callout info"><b>Théorème de la bijection</b> Si $f$ est <b>continue</b> et <b>strictement monotone</b> sur un intervalle $I$, alors $f$ réalise une bijection de $I$ sur l'intervalle $J = f(I)$ ; sa réciproque $f^{-1}$ est continue et strictement monotone, de même sens que $f$.</div>
<p><b>Courbe</b> : $\mathcal{C}_{f^{-1}}$ est la symétrique de $\mathcal{C}_f$ par rapport à la première bissectrice $y = x$. Ci-dessous : $\exp$, $\ln$ et la droite $y = x$.</p>
<div class="widget" data-w="plot" data-f="exp(x);ln(x);x" data-x="-4;4" data-y="-4;4"></div>
<p><b>Dérivée de la réciproque</b> : si $f$ est dérivable en $x_0 = f^{-1}(y_0)$ avec $f'(x_0) \neq 0$, alors $$\left(f^{-1}\right)'(y_0) = \frac{1}{f'\left(f^{-1}(y_0)\right)}.$$ Une tangente horizontale pour $f$ devient une tangente verticale pour $f^{-1}$.</p>
<p><b>Méthode</b> pour expliciter $f^{-1}$ : résoudre l'équation $y = f(x)$ d'inconnue $x$.</p>
<div class="callout tip"><b>Exemple corrigé</b> $f(x) = \mathrm{e}^{2x} + 1$ est une bijection de $\mathbb{R}$ sur $\left]1, +\infty\right[$. $y = \mathrm{e}^{2x} + 1 \iff \mathrm{e}^{2x} = y - 1 \iff x = \frac{1}{2}\ln(y - 1)$. Donc $f^{-1}(y) = \frac{1}{2}\ln(y-1)$ pour $y \gt 1$.<br>Dérivée en un point : $g(x) = x^3 + x$ est strictement croissante, $g(1) = 2$ et $g'(1) = 4$, donc $(g^{-1})'(2) = \frac{1}{4}$.</div>
<div class="callout warn"><b>Pièges</b> La réciproque $f^{-1}$ n'est <b>pas</b> l'inverse $\frac{1}{f}$ ! Et $(f^{-1})'(y_0) = \frac{1}{f'(x_0)}$ avec $x_0 = f^{-1}(y_0)$, pas $\frac{1}{f'(y_0)}$.</div>
<div class="callout key"><b>À retenir</b> Continue + strictement monotone sur un intervalle ⇒ bijection. Les courbes de $f$ et $f^{-1}$ sont symétriques par rapport à $y = x$.</div>
`
    },
    {
      id: 'm3-s-ln', title: 'Le logarithme népérien',
      html: String.raw`
<h3>Définition</h3>
<p>Le <b>logarithme népérien</b> est l'unique primitive de $x \mapsto \frac{1}{x}$ sur $\left]0, +\infty\right[$ qui s'annule en 1 : $$\ln x = \int_1^x \frac{\mathrm{d}t}{t}, \qquad x \gt 0.$$ C'est aussi la réciproque de l'exponentielle : $y = \ln x \iff x = \mathrm{e}^y$ (pour $x \gt 0$).</p>
<h3>Propriétés algébriques (pour $a, b \gt 0$ et $r$ réel)</h3>
<ul>
<li>$\ln(ab) = \ln a + \ln b$ : le logarithme transforme les produits en sommes ;</li>
<li>$\ln\left(\frac{a}{b}\right) = \ln a - \ln b$ et $\ln\left(\frac{1}{a}\right) = -\ln a$ ;</li>
<li>$\ln(a^r) = r\ln a$, en particulier $\ln\sqrt{a} = \frac{1}{2}\ln a$ ;</li>
<li>$\ln 1 = 0$, $\ln\mathrm{e} = 1$, $\ln 2 \approx 0{,}693$, $\ln 10 \approx 2{,}303$.</li>
</ul>
<h3>Étude de la fonction</h3>
<p>$\ln$ est dérivable sur $\left]0, +\infty\right[$ avec $(\ln x)' = \frac{1}{x} \gt 0$ : elle est strictement croissante et <b>concave</b> ($\ln''(x) = -\frac{1}{x^2} \lt 0$). Plus généralement $(\ln u)' = \frac{u'}{u}$, et $(\ln|u|)' = \frac{u'}{u}$.</p>
<p>Limites : $\displaystyle\lim_{x \to 0^+} \ln x = -\infty$ (asymptote verticale $x = 0$), $\displaystyle\lim_{x \to +\infty} \ln x = +\infty$, mais très lentement. Tangente en 1 : $y = x - 1$, et la courbe est en dessous : $\ln x \leq x - 1$.</p>
<div class="widget" data-w="plot" data-f="ln(x);x-1" data-x="-0.5;6" data-y="-3;3"></div>
<h3>Résoudre une équation ou une inéquation avec $\ln$</h3>
<p><b>Méthode</b> : (1) écrire les conditions d'existence (arguments $\gt 0$) ; (2) regrouper avec les propriétés algébriques ; (3) utiliser $\ln A = \ln B \iff A = B$ et $\ln A \lt \ln B \iff A \lt B$ (pour $A, B \gt 0$, car $\ln$ est strictement croissante) ; (4) <b>vérifier</b> que les solutions trouvées sont dans le domaine.</p>
<div class="callout tip"><b>Exemple corrigé</b> Résoudre $\ln x + \ln(x-2) = \ln 3$. Domaine : $x \gt 2$. L'équation s'écrit $\ln(x(x-2)) = \ln 3$, soit $x^2 - 2x - 3 = 0$, de racines $3$ et $-1$. Seule $3 \gt 2$ convient : $\mathcal{S} = \{3\}$.</div>
<div class="callout warn"><b>Pièges</b> $\ln(a + b) \neq \ln a + \ln b$ ; $\ln a \cdot \ln b \neq \ln(ab)$ ; $\frac{\ln a}{\ln b} \neq \ln\frac{a}{b}$. Et $\ln(x^2) = 2\ln|x|$ (pas $2\ln x$, qui n'est défini que pour $x \gt 0$).</div>
<div class="callout key"><b>À retenir</b> $\ln(ab) = \ln a + \ln b$, $\ln(a^r) = r\ln a$, $(\ln u)' = \frac{u'}{u}$, $\ln x \leq x - 1$.</div>
`
    },
    {
      id: 'm3-s-exp', title: 'La fonction exponentielle',
      html: String.raw`
<h3>Définition</h3>
<p>La fonction <b>exponentielle</b> est la réciproque de $\ln$ : pour tout réel $x$, $\mathrm{e}^x$ est l'unique réel $y \gt 0$ tel que $\ln y = x$. C'est aussi l'unique fonction dérivable telle que $f' = f$ et $f(0) = 1$. On note $\mathrm{e} = \mathrm{e}^1 \approx 2{,}718$.</p>
<ul>
<li>$\mathrm{e}^{\ln x} = x$ pour $x \gt 0$ ; $\ln(\mathrm{e}^x) = x$ pour tout $x \in \mathbb{R}$ ;</li>
<li>$\mathrm{e}^x \gt 0$ pour tout $x$ : l'exponentielle ne s'annule <b>jamais</b>.</li>
</ul>
<h3>Propriétés algébriques</h3>
<ul>
<li>$\mathrm{e}^{a+b} = \mathrm{e}^a\mathrm{e}^b$, $\mathrm{e}^{-a} = \frac{1}{\mathrm{e}^a}$, $\mathrm{e}^{a-b} = \frac{\mathrm{e}^a}{\mathrm{e}^b}$ ;</li>
<li>$\left(\mathrm{e}^a\right)^n = \mathrm{e}^{na}$ ; $\mathrm{e}^0 = 1$.</li>
</ul>
<h3>Étude</h3>
<p>$(\mathrm{e}^x)' = \mathrm{e}^x$ et $(\mathrm{e}^{u})' = u'\mathrm{e}^{u}$. L'exponentielle est strictement croissante et <b>convexe</b>. Limites : $\displaystyle\lim_{x \to -\infty} \mathrm{e}^x = 0$ (asymptote horizontale $y = 0$), $\displaystyle\lim_{x \to +\infty} \mathrm{e}^x = +\infty$. Tangente en 0 : $y = 1 + x$, et la courbe est au-dessus : $\mathrm{e}^x \geq 1 + x$.</p>
<div class="widget" data-w="plot" data-f="exp(x);1+x;exp(-x)" data-x="-3;3" data-y="-1;6"></div>
<h3>Équations en $\mathrm{e}^x$</h3>
<p><b>Méthode</b> : $\mathrm{e}^A = \mathrm{e}^B \iff A = B$ ; $\mathrm{e}^A = k \iff A = \ln k$ si $k \gt 0$ (aucune solution si $k \leq 0$). Si plusieurs puissances de $\mathrm{e}^x$ apparaissent, poser $X = \mathrm{e}^x \gt 0$ pour se ramener à un polynôme.</p>
<div class="callout tip"><b>Exemple corrigé</b> $\mathrm{e}^{2x} - 3\mathrm{e}^x + 2 = 0$. Avec $X = \mathrm{e}^x$ : $X^2 - 3X + 2 = 0$, donc $X = 1$ ou $X = 2$ (tous deux $\gt 0$), d'où $x = 0$ ou $x = \ln 2$.<br>Variante : $\mathrm{e}^x - 6\mathrm{e}^{-x} = 1$. On multiplie par $\mathrm{e}^x$ : $X^2 - X - 6 = 0$, donc $X = 3$ ou $X = -2$ ; on rejette $-2$ car $X \gt 0$. Seule solution : $x = \ln 3$.</div>
<div class="callout warn"><b>Pièges</b> $\left(\mathrm{e}^{x}\right)^2 = \mathrm{e}^{2x} \neq \mathrm{e}^{x^2}$ ; $\mathrm{e}^{a+b} \neq \mathrm{e}^a + \mathrm{e}^b$ ; après le changement de variable, rejeter les solutions $X \leq 0$.</div>
<div class="callout key"><b>À retenir</b> $\mathrm{e}^{a+b} = \mathrm{e}^a\mathrm{e}^b$, $(\mathrm{e}^u)' = u'\mathrm{e}^u$, $\mathrm{e}^x \gt 0$, $\mathrm{e}^x \geq 1 + x$.</div>
`
    },
    {
      id: 'm3-s-puissances', title: 'Puissances réelles et croissances comparées',
      html: String.raw`
<h3>Puissances réelles</h3>
<p>Pour $x \gt 0$ et $a \in \mathbb{R}$, on <b>définit</b> $$x^a = \mathrm{e}^{a\ln x}.$$ Cela prolonge les puissances entières et les racines : $x^{1/2} = \sqrt{x}$, $x^{1/n} = \sqrt[n]{x}$, $x^{p/q} = \sqrt[q]{x^p}$.</p>
<ul>
<li>$x^a x^b = x^{a+b}$, $\frac{x^a}{x^b} = x^{a-b}$, $(x^a)^b = x^{ab}$, $(xy)^a = x^a y^a$, $x^{-a} = \frac{1}{x^a}$ ;</li>
<li>$\ln(x^a) = a\ln x$ ;</li>
<li>dérivée : $(x^a)' = a\,x^{a-1}$, et $(u^a)' = a\,u'\,u^{a-1}$.</li>
</ul>
<p>Allure sur $\left]0, +\infty\right[$ : croissante si $a \gt 0$ (convexe si $a \gt 1$, concave si $0 \lt a \lt 1$), décroissante si $a \lt 0$. Toutes les courbes passent par le point $(1, 1)$.</p>
<div class="widget" data-w="plot" data-f="x^2;sqrt(x);1/x" data-x="0;3" data-y="0;3"></div>
<h3>Exponentielle et logarithme de base $a$</h3>
<p>Pour $a \gt 0$ : $a^x = \mathrm{e}^{x\ln a}$, donc $(a^x)' = \ln(a)\, a^x$. Pour $a \neq 1$, sa réciproque est le logarithme de base $a$ : $\log_a x = \frac{\ln x}{\ln a}$.</p>
<p><b>Méthode</b> pour une puissance dont l'exposant est variable, $u(x)^{v(x)}$ : écrire $u^v = \mathrm{e}^{v\ln u}$ (avec $u \gt 0$), puis dériver ou chercher la limite de l'exposant.</p>
<div class="callout tip"><b>Exemple corrigé</b> Dériver $f(x) = x^x$ sur $\left]0,+\infty\right[$. On écrit $f(x) = \mathrm{e}^{x\ln x}$ ; avec $u = x\ln x$, $u' = \ln x + 1$, donc $f'(x) = (\ln x + 1)\,x^x$.</div>
<h3>Croissances comparées</h3>
<p>Pour $a \gt 0$ et $b \gt 0$ : $$\lim_{x\to+\infty} \frac{\mathrm{e}^{x}}{x^a} = +\infty, \qquad \lim_{x\to+\infty} \frac{(\ln x)^b}{x^a} = 0, \qquad \lim_{x\to 0^+} x^a |\ln x|^b = 0, \qquad \lim_{x\to-\infty} |x|^a\mathrm{e}^{x} = 0.$$ Hiérarchie en $+\infty$ : $\ln x \ll x^a \ll \mathrm{e}^{x}$ (l'exponentielle l'emporte sur la puissance, qui l'emporte sur le logarithme).</p>
<p><b>Méthode</b> : face à une forme indéterminée, <b>factoriser par le terme dominant</b>.</p>
<div class="callout tip"><b>Exemple corrigé</b> $\displaystyle\lim_{x\to+\infty} \frac{\mathrm{e}^x + x}{2\mathrm{e}^x - x^2} = \lim_{x\to+\infty} \frac{\mathrm{e}^x\left(1 + x\mathrm{e}^{-x}\right)}{\mathrm{e}^x\left(2 - x^2\mathrm{e}^{-x}\right)} = \frac{1}{2}$ car $x\mathrm{e}^{-x} \to 0$ et $x^2\mathrm{e}^{-x} \to 0$.<br>$\displaystyle\lim_{x\to 0^+} x^x = \lim \mathrm{e}^{x\ln x} = \mathrm{e}^0 = 1$ car $x\ln x \to 0$.</div>
<div class="callout warn"><b>Pièges</b> $x \mapsto 2^x$ n'est pas une puissance $x^a$ : sa dérivée est $\ln 2 \cdot 2^x$, pas $x\,2^{x-1}$. Et $x^a$ avec $a$ non entier n'est défini que pour $x \gt 0$.</div>
<div class="callout key"><b>À retenir</b> $x^a = \mathrm{e}^{a\ln x}$, $(x^a)' = ax^{a-1}$, $(a^x)' = \ln a\cdot a^x$. Exponentielle ≫ puissance ≫ logarithme.</div>
`
    },
    {
      id: 'm3-s-log-db', title: 'Logarithme décimal et décibels',
      html: String.raw`
<h3>Logarithme décimal</h3>
<p>$\log x = \log_{10} x = \frac{\ln x}{\ln 10}$ est la réciproque de $x \mapsto 10^x$ : $y = \log x \iff x = 10^y$. Il a les mêmes propriétés algébriques que $\ln$, et $\log(10^n) = n$ : $\log 1000 = 3$, $\log 0{,}01 = -2$. Valeurs utiles : $\log 2 \approx 0{,}301$, $\log 3 \approx 0{,}477$, $\log 5 = 1 - \log 2 \approx 0{,}699$.</p>
<p>Il « compte les chiffres » : un nombre compris entre $10^n$ et $10^{n+1}$ a un logarithme décimal entre $n$ et $n + 1$. On l'utilise pour les échelles logarithmiques (diagrammes de Bode, pH, sismologie…).</p>
<h3>Le décibel (dB)</h3>
<p>En électronique, un rapport de <b>puissances</b> s'exprime en décibels : $$G_{\mathrm{dB}} = 10\log\frac{P_s}{P_e}.$$ Comme la puissance est proportionnelle au carré de la tension ($P = \frac{V^2}{R}$), pour un rapport de <b>tensions</b> (ou de courants, ou le module d'une fonction de transfert $H$) : $$G_{\mathrm{dB}} = 20\log\left|\frac{V_s}{V_e}\right| = 20\log|H|.$$</p>
<table class="tbl">
<tr><th>Rapport de tensions $|H|$</th><th>Gain</th></tr>
<tr><td>$1$</td><td>$0$ dB</td></tr>
<tr><td>$10$ / $100$ / $1000$</td><td>$+20$ / $+40$ / $+60$ dB</td></tr>
<tr><td>$2$</td><td>$20\log 2 \approx +6$ dB</td></tr>
<tr><td>$\frac{1}{\sqrt{2}}$</td><td>$-10\log 2 \approx -3$ dB (fréquence de coupure)</td></tr>
<tr><td>$\frac{1}{10}$</td><td>$-20$ dB</td></tr>
</table>
<p>Intérêt : des étages en <b>cascade</b> multiplient leurs gains, donc leurs gains en dB s'<b>additionnent</b> (car $\log(ab) = \log a + \log b$). Un filtre du 1er ordre perd $20$ dB par <b>décade</b> (fréquence × 10) au-delà de la coupure, soit environ $6$ dB par octave (fréquence × 2).</p>
<p><b>Méthode inverse</b> : $|H| = 10^{G_{\mathrm{dB}}/20}$ (tensions) ; $\frac{P_s}{P_e} = 10^{G_{\mathrm{dB}}/10}$ (puissances).</p>
<div class="callout tip"><b>Exemple corrigé</b> Un amplificateur multiplie la tension par 50 : $G = 20\log 50 = 20(\log 100 - \log 2) = 40 - 20\log 2 \approx 40 - 6{,}02 = 33{,}98$ dB. Suivi d'un atténuateur de $-14$ dB, le gain total est d'environ $20$ dB, soit une tension globalement multipliée par $10$ environ.</div>
<div class="callout warn"><b>Pièges</b> $20\log$ pour les tensions, $10\log$ pour les puissances : un même système a le même gain en dB dans les deux cas. $-3$ dB correspond à une tension divisée par $\sqrt{2}$ (puissance divisée par 2), pas à une tension divisée par 2 (qui donne $-6$ dB).</div>
<div class="callout key"><b>À retenir</b> $\log x = \frac{\ln x}{\ln 10}$, $G_{\mathrm{dB}} = 20\log|H|$ ; ×10 → +20 dB, ×2 → +6 dB, ÷$\sqrt{2}$ → −3 dB.</div>
`
    },
    {
      id: 'm3-s-hyperboliques', title: 'Fonctions hyperboliques et leurs réciproques',
      html: String.raw`
<h3>Définitions</h3>
<p>Pour tout $x \in \mathbb{R}$ : $$\operatorname{ch} x = \frac{\mathrm{e}^x + \mathrm{e}^{-x}}{2}, \qquad \operatorname{sh} x = \frac{\mathrm{e}^x - \mathrm{e}^{-x}}{2}, \qquad \operatorname{th} x = \frac{\operatorname{sh} x}{\operatorname{ch} x} = \frac{\mathrm{e}^{2x} - 1}{\mathrm{e}^{2x} + 1}.$$ $\operatorname{ch}$ est la partie <b>paire</b> de $\exp$ et $\operatorname{sh}$ sa partie <b>impaire</b> : $\operatorname{ch} x + \operatorname{sh} x = \mathrm{e}^x$ et $\operatorname{ch} x - \operatorname{sh} x = \mathrm{e}^{-x}$. (Notations anglo-saxonnes : $\cosh$, $\sinh$, $\tanh$.)</p>
<h3>Relation fondamentale et formules</h3>
<p>$$\operatorname{ch}^2 x - \operatorname{sh}^2 x = 1$$ Le point $(\operatorname{ch} t, \operatorname{sh} t)$ décrit une branche de l'<b>hyperbole</b> $X^2 - Y^2 = 1$, d'où le nom. Formules (analogues à la trigonométrie, mais attention aux signes) :</p>
<ul>
<li>$\operatorname{ch}(a+b) = \operatorname{ch} a\operatorname{ch} b + \operatorname{sh} a\operatorname{sh} b$ et $\operatorname{sh}(a+b) = \operatorname{sh} a\operatorname{ch} b + \operatorname{ch} a\operatorname{sh} b$ ;</li>
<li>$\operatorname{ch}(2x) = \operatorname{ch}^2 x + \operatorname{sh}^2 x = 2\operatorname{ch}^2 x - 1 = 1 + 2\operatorname{sh}^2 x$ et $\operatorname{sh}(2x) = 2\operatorname{sh} x\operatorname{ch} x$.</li>
</ul>
<h3>Dérivées, variations, courbes</h3>
<p>$\operatorname{sh}' = \operatorname{ch}$, $\operatorname{ch}' = \operatorname{sh}$ (<b>pas de signe moins</b>, contrairement à $\cos$), $\operatorname{th}' = 1 - \operatorname{th}^2 = \frac{1}{\operatorname{ch}^2}$.</p>
<ul>
<li>$\operatorname{ch}$ : paire, décroissante sur $\left]-\infty, 0\right]$, croissante sur $\left[0, +\infty\right[$, minimum $\operatorname{ch} 0 = 1$, donc $\operatorname{ch} x \geq 1$. Sa courbe est la <b>chaînette</b> (forme d'un câble suspendu).</li>
<li>$\operatorname{sh}$ : impaire, strictement croissante de $\mathbb{R}$ sur $\mathbb{R}$, $\operatorname{sh} 0 = 0$.</li>
<li>$\operatorname{th}$ : impaire, strictement croissante de $\mathbb{R}$ sur $\left]-1, 1\right[$, asymptotes $y = \pm 1$.</li>
<li>En $+\infty$ : $\operatorname{ch} x$ et $\operatorname{sh} x$ se comportent comme $\frac{\mathrm{e}^{x}}{2}$.</li>
</ul>
<div class="widget" data-w="plot" data-f="cosh(x);sinh(x);tanh(x)" data-x="-3;3" data-y="-4;4"></div>
<div class="callout tip"><b>Exemple corrigé</b> Résoudre $\operatorname{sh} x = \frac{3}{4}$. On écrit $\mathrm{e}^x - \mathrm{e}^{-x} = \frac{3}{2}$ ; avec $X = \mathrm{e}^x \gt 0$ : $X^2 - \frac{3}{2}X - 1 = 0$, de racines $X = 2$ et $X = -\frac{1}{2}$ (rejetée). Donc $x = \ln 2$. Vérification : $\operatorname{sh}(\ln 2) = \frac{2 - 1/2}{2} = \frac{3}{4}$.</div>
<h3>Fonctions hyperboliques réciproques</h3>
<p>$\operatorname{sh} : \mathbb{R} \to \mathbb{R}$, $\operatorname{ch} : \left[0, +\infty\right[ \to \left[1, +\infty\right[$ et $\operatorname{th} : \mathbb{R} \to \left]-1, 1\right[$ sont des bijections (continues, strictement croissantes). Leurs réciproques s'expriment avec $\ln$ :</p>
<table class="tbl">
<tr><th>Réciproque</th><th>Définie sur</th><th>Expression</th><th>Dérivée</th></tr>
<tr><td>$\operatorname{argsh}$</td><td>$\mathbb{R}$</td><td>$\ln\left(x + \sqrt{x^2 + 1}\right)$</td><td>$\frac{1}{\sqrt{x^2+1}}$</td></tr>
<tr><td>$\operatorname{argch}$</td><td>$\left[1, +\infty\right[$</td><td>$\ln\left(x + \sqrt{x^2 - 1}\right)$</td><td>$\frac{1}{\sqrt{x^2-1}}$ (pour $x \gt 1$)</td></tr>
<tr><td>$\operatorname{argth}$</td><td>$\left]-1, 1\right[$</td><td>$\frac{1}{2}\ln\frac{1+x}{1-x}$</td><td>$\frac{1}{1-x^2}$</td></tr>
</table>
<p><b>Méthode</b> (cas de $\operatorname{argsh}$) : $y = \operatorname{argsh} x \iff x = \operatorname{sh} y \iff \mathrm{e}^{2y} - 2x\mathrm{e}^y - 1 = 0$. Avec $Y = \mathrm{e}^y \gt 0$, on garde la racine positive $Y = x + \sqrt{x^2+1}$ (le produit des racines vaut $-1$), donc $y = \ln\left(x + \sqrt{x^2+1}\right)$.</p>
<p>Application aux intégrales : $\displaystyle\int \frac{\mathrm{d}x}{\sqrt{x^2+1}} = \operatorname{argsh} x + C$ et $\displaystyle\int \frac{\mathrm{d}x}{\sqrt{x^2-1}} = \operatorname{argch} x + C$ (pour $x \gt 1$).</p>
<div class="callout warn"><b>Pièges</b> $\operatorname{ch}' = +\operatorname{sh}$ ; $\operatorname{ch}^2 - \operatorname{sh}^2 = 1$ (signe moins) ; $\operatorname{ch}(2x) = 1 + 2\operatorname{sh}^2 x$ (et non $1 - 2\operatorname{sh}^2 x$). $\operatorname{argch}$ ne prend que des valeurs positives.</div>
<div class="callout key"><b>À retenir</b> $\operatorname{ch} x = \frac{\mathrm{e}^x + \mathrm{e}^{-x}}{2}$, $\operatorname{sh} x = \frac{\mathrm{e}^x - \mathrm{e}^{-x}}{2}$, $\operatorname{ch}^2 - \operatorname{sh}^2 = 1$, $\operatorname{sh}' = \operatorname{ch}$, $\operatorname{ch}' = \operatorname{sh}$, $\operatorname{argsh} x = \ln\left(x + \sqrt{x^2+1}\right)$.</div>
`
    },
    {
      id: 'm3-s-abs-ent', title: 'Valeur absolue et partie entière',
      html: String.raw`
<h3>Valeur absolue</h3>
<p>$|x| = \begin{cases} x & \text{si } x \geq 0 \\ -x & \text{si } x \lt 0 \end{cases}$ C'est la <b>distance</b> de $x$ à 0, et $|x - a|$ est la distance entre $x$ et $a$. On a aussi $|x| = \sqrt{x^2} = \max(x, -x)$.</p>
<ul>
<li>$|ab| = |a|\,|b|$, $\left|\frac{a}{b}\right| = \frac{|a|}{|b|}$, $|x|^2 = x^2$ ;</li>
<li><b>inégalité triangulaire</b> : $|a + b| \leq |a| + |b|$, et $\big||a| - |b|\big| \leq |a - b|$ ;</li>
<li>pour $r \geq 0$ : $|x - a| \leq r \iff a - r \leq x \leq a + r$ ; $|x| = r \iff x = \pm r$.</li>
</ul>
<p>La fonction $x \mapsto |x|$ est paire, continue sur $\mathbb{R}$, dérivable partout sauf en 0 (point anguleux).</p>
<p><b>Méthode</b> : pour une équation avec valeurs absolues, distinguer les cas selon le signe de l'intérieur (tableau de signes), ou utiliser $|A| = |B| \iff A = B$ ou $A = -B$.</p>
<div class="callout tip"><b>Exemple corrigé</b> $|2x - 1| = 3 \iff 2x - 1 = 3$ ou $2x - 1 = -3 \iff x = 2$ ou $x = -1$. Et $|x - 2| \lt 1 \iff 1 \lt x \lt 3$.</div>
<h3>Partie entière</h3>
<p>La <b>partie entière</b> $E(x)$ (notée aussi $\lfloor x \rfloor$) est le plus grand entier <b>inférieur ou égal</b> à $x$ : c'est l'unique entier $n$ tel que $$n \leq x \lt n + 1.$$ Exemples : $E(3{,}7) = 3$, $E(5) = 5$, $E(-2{,}5) = -3$.</p>
<ul>
<li>$E(x) \leq x \lt E(x) + 1$, autrement dit $x - 1 \lt E(x) \leq x$ ;</li>
<li>$E(x + n) = E(x) + n$ pour tout entier $n$ ;</li>
<li>$E$ est croissante, constante sur chaque intervalle $[n, n+1[$, et fait un saut de 1 en chaque entier (courbe « en escalier ») : elle est discontinue en chaque entier. La partie fractionnaire $x - E(x) \in [0, 1[$ est $1$-périodique.</li>
</ul>
<div class="widget" data-w="plot" data-f="floor(x);x" data-x="-3;3" data-y="-3;3"></div>
<div class="callout warn"><b>Pièges</b> Pour un nombre négatif, la partie entière n'est <b>pas</b> la troncature : $E(-2{,}5) = -3$, pas $-2$. Et $|a + b| \neq |a| + |b|$ en général (ex. $a = 1$, $b = -1$).</div>
<div class="callout key"><b>À retenir</b> $|x - a| \leq r \iff a - r \leq x \leq a + r$ ; $E(x) \leq x \lt E(x) + 1$.</div>
`
    },
    {
      id: 'm3-s-memo', title: 'Mémo : tableau récapitulatif',
      html: String.raw`
<h3>Les fonctions usuelles en un coup d'œil</h3>
<table class="tbl">
<tr><th>Fonction</th><th>Domaine</th><th>Dérivée</th><th>Limites clés</th></tr>
<tr><td>$\ln x$</td><td>$\left]0, +\infty\right[$</td><td>$\frac{1}{x}$</td><td>$-\infty$ en $0^+$, $+\infty$ en $+\infty$</td></tr>
<tr><td>$\mathrm{e}^x$</td><td>$\mathbb{R}$</td><td>$\mathrm{e}^x$</td><td>$0$ en $-\infty$, $+\infty$ en $+\infty$</td></tr>
<tr><td>$x^a$ ($a$ réel)</td><td>$\left]0, +\infty\right[$</td><td>$a x^{a-1}$</td><td>selon le signe de $a$</td></tr>
<tr><td>$a^x$ ($a \gt 0$)</td><td>$\mathbb{R}$</td><td>$\ln a \cdot a^x$</td><td>selon $a \gt 1$ ou $a \lt 1$</td></tr>
<tr><td>$\log x$</td><td>$\left]0, +\infty\right[$</td><td>$\frac{1}{x\ln 10}$</td><td>comme $\ln$</td></tr>
<tr><td>$\operatorname{ch} x$</td><td>$\mathbb{R}$</td><td>$\operatorname{sh} x$</td><td>$+\infty$ en $\pm\infty$</td></tr>
<tr><td>$\operatorname{sh} x$</td><td>$\mathbb{R}$</td><td>$\operatorname{ch} x$</td><td>$\pm\infty$ en $\pm\infty$</td></tr>
<tr><td>$\operatorname{th} x$</td><td>$\mathbb{R}$</td><td>$1 - \operatorname{th}^2 x$</td><td>$\pm 1$ en $\pm\infty$</td></tr>
<tr><td>$\operatorname{argsh} x$</td><td>$\mathbb{R}$</td><td>$\frac{1}{\sqrt{x^2+1}}$</td><td>$\pm\infty$ en $\pm\infty$</td></tr>
<tr><td>$\operatorname{argch} x$</td><td>$\left[1, +\infty\right[$</td><td>$\frac{1}{\sqrt{x^2-1}}$</td><td>$+\infty$ en $+\infty$</td></tr>
<tr><td>$\operatorname{argth} x$</td><td>$\left]-1, 1\right[$</td><td>$\frac{1}{1-x^2}$</td><td>$\pm\infty$ en $\pm 1$</td></tr>
<tr><td>$|x|$</td><td>$\mathbb{R}$</td><td>$\pm 1$ (pour $x \neq 0$)</td><td>$+\infty$ en $\pm\infty$</td></tr>
<tr><td>$E(x)$</td><td>$\mathbb{R}$</td><td>$0$ hors des entiers</td><td>$\pm\infty$ en $\pm\infty$</td></tr>
</table>
<h3>Règles de calcul</h3>
<div class="grid2">
<div class="mini"><h4>Logarithme</h4><p>$\ln(ab) = \ln a + \ln b$<br>$\ln\frac{a}{b} = \ln a - \ln b$<br>$\ln(a^r) = r\ln a$</p></div>
<div class="mini"><h4>Exponentielle</h4><p>$\mathrm{e}^{a+b} = \mathrm{e}^a\mathrm{e}^b$<br>$(\mathrm{e}^a)^n = \mathrm{e}^{na}$<br>$\mathrm{e}^{\ln x} = x$ ($x \gt 0$)</p></div>
<div class="mini"><h4>Puissances</h4><p>$x^a = \mathrm{e}^{a\ln x}$<br>$x^a x^b = x^{a+b}$<br>$(x^a)^b = x^{ab}$</p></div>
<div class="mini"><h4>Hyperboliques</h4><p>$\operatorname{ch}^2 x - \operatorname{sh}^2 x = 1$<br>$\operatorname{ch} x + \operatorname{sh} x = \mathrm{e}^x$<br>$\operatorname{ch}(2x) = 1 + 2\operatorname{sh}^2 x$</p></div>
</div>
<h3>Croissances comparées (en $+\infty$, du plus lent au plus rapide)</h3>
<div class="flow"><span>$\ln x$</span><span>$x^a$ ($a \gt 0$)</span><span>$\mathrm{e}^x$</span></div>
<p>En $0^+$ : $x^a\ln x \to 0$ ; en $-\infty$ : $x^n\mathrm{e}^x \to 0$.</p>
<h3>Électronique</h3>
<p>$G_{\mathrm{dB}} = 20\log|H|$ (tensions), $10\log\frac{P_s}{P_e}$ (puissances) ; ×10 → +20 dB, ×2 → +6 dB, ÷$\sqrt{2}$ → −3 dB.</p>
<div class="callout key"><b>Réflexes</b> Domaine d'abord ; $X = \mathrm{e}^x$ pour les équations en exponentielles ; $u^v = \mathrm{e}^{v\ln u}$ pour les exposants variables ; vérifier les solutions dans le domaine.</div>
`
    }
  ],

  /* ===================================================== FORMULAIRE */
  formulas: [
    { id: 'm3-fo-domaine', name: 'Conditions d\'existence', tex: String.raw`\frac{1}{u}: u \neq 0 \qquad \sqrt{u}: u \geq 0 \qquad \ln u: u \gt 0`, note: String.raw`Le domaine est l'intersection de toutes les conditions.` },
    { id: 'm3-fo-parite', name: 'Parité', tex: String.raw`f \text{ paire} \iff f(-x) = f(x) \qquad f \text{ impaire} \iff f(-x) = -f(x)`, note: String.raw`Domaine symétrique par rapport à 0 ; paire : symétrie d'axe $(Oy)$, impaire : symétrie de centre $O$.` },
    { id: 'm3-fo-periode', name: 'Périodicité', tex: String.raw`f(x + T) = f(x) \quad \forall x \in \mathcal{D}`, note: String.raw`$\cos(\omega x)$ est $\frac{2\pi}{\omega}$-périodique.` },
    { id: 'm3-fo-compo', name: 'Dérivée d\'une composée', tex: String.raw`(g \circ f)'(x) = f'(x)\, g'\big(f(x)\big)` },
    { id: 'm3-fo-reciproque', name: 'Réciproque', tex: String.raw`y = f(x) \iff x = f^{-1}(y)`, note: String.raw`Courbes symétriques par rapport à la droite $y = x$.` },
    { id: 'm3-fo-der-recip', name: 'Dérivée de la réciproque', tex: String.raw`\left(f^{-1}\right)'(y) = \frac{1}{f'\left(f^{-1}(y)\right)}`, note: String.raw`Valable si $f'\left(f^{-1}(y)\right) \neq 0$.` },
    { id: 'm3-fo-ln-def', name: 'Définition de ln', tex: String.raw`\ln x = \int_1^x \frac{\mathrm{d}t}{t}, \quad x \gt 0`, note: String.raw`$\ln 1 = 0$, $\ln\mathrm{e} = 1$.` },
    { id: 'm3-fo-ln-prod', name: 'Logarithme d\'un produit', tex: String.raw`\ln(ab) = \ln a + \ln b`, note: String.raw`Pour $a, b \gt 0$.` },
    { id: 'm3-fo-ln-quot', name: 'Logarithme d\'un quotient', tex: String.raw`\ln\frac{a}{b} = \ln a - \ln b, \qquad \ln\frac{1}{a} = -\ln a` },
    { id: 'm3-fo-ln-pow', name: 'Logarithme d\'une puissance', tex: String.raw`\ln(a^r) = r\ln a, \qquad \ln\sqrt{a} = \frac{1}{2}\ln a`, note: String.raw`Attention : $\ln(x^2) = 2\ln|x|$ pour $x \neq 0$.` },
    { id: 'm3-fo-ln-der', name: 'Dérivée du logarithme', tex: String.raw`(\ln x)' = \frac{1}{x}, \qquad (\ln|u|)' = \frac{u'}{u}` },
    { id: 'm3-fo-ln-lim', name: 'Limites de ln', tex: String.raw`\lim_{x \to 0^+} \ln x = -\infty, \qquad \lim_{x \to +\infty} \ln x = +\infty` },
    { id: 'm3-fo-exp-sum', name: 'Exponentielle d\'une somme', tex: String.raw`\mathrm{e}^{a+b} = \mathrm{e}^a\,\mathrm{e}^b, \qquad \mathrm{e}^{-a} = \frac{1}{\mathrm{e}^a}`, note: String.raw`Et $(\mathrm{e}^a)^n = \mathrm{e}^{na}$.` },
    { id: 'm3-fo-exp-ln', name: 'exp et ln réciproques', tex: String.raw`\mathrm{e}^{\ln x} = x \;(x \gt 0), \qquad \ln\left(\mathrm{e}^x\right) = x \;(x \in \mathbb{R})` },
    { id: 'm3-fo-exp-der', name: 'Dérivée de l\'exponentielle', tex: String.raw`\left(\mathrm{e}^x\right)' = \mathrm{e}^x, \qquad \left(\mathrm{e}^u\right)' = u'\,\mathrm{e}^u` },
    { id: 'm3-fo-exp-lim', name: 'Limites de exp', tex: String.raw`\lim_{x \to -\infty} \mathrm{e}^x = 0, \qquad \lim_{x \to +\infty} \mathrm{e}^x = +\infty` },
    { id: 'm3-fo-convexite', name: 'Inégalités de convexité', tex: String.raw`\mathrm{e}^x \geq 1 + x \;(x \in \mathbb{R}), \qquad \ln x \leq x - 1 \;(x \gt 0)`, note: String.raw`Tangentes en 0 et en 1.` },
    { id: 'm3-fo-cc-inf', name: 'Croissances comparées en +∞', tex: String.raw`\lim_{x\to+\infty}\frac{\mathrm{e}^x}{x^a} = +\infty, \qquad \lim_{x\to+\infty}\frac{(\ln x)^b}{x^a} = 0`, note: String.raw`Pour $a, b \gt 0$.` },
    { id: 'm3-fo-cc-zero', name: 'Croissances comparées en 0⁺ et −∞', tex: String.raw`\lim_{x\to 0^+} x^a\ln x = 0, \qquad \lim_{x\to -\infty} x^n\mathrm{e}^x = 0`, note: String.raw`Pour $a \gt 0$, $n \in \mathbb{N}$.` },
    { id: 'm3-fo-pow-def', name: 'Puissance réelle', tex: String.raw`x^a = \mathrm{e}^{a\ln x} \quad (x \gt 0)`, note: String.raw`Plus généralement $u^v = \mathrm{e}^{v\ln u}$.` },
    { id: 'm3-fo-pow-rules', name: 'Règles des puissances', tex: String.raw`x^a x^b = x^{a+b}, \quad (x^a)^b = x^{ab}, \quad (xy)^a = x^a y^a` },
    { id: 'm3-fo-pow-der', name: 'Dérivée d\'une puissance', tex: String.raw`(x^a)' = a\,x^{a-1}, \qquad (u^a)' = a\,u'\,u^{a-1}` },
    { id: 'm3-fo-ax', name: 'Exponentielle de base a', tex: String.raw`a^x = \mathrm{e}^{x\ln a}, \qquad (a^x)' = \ln a \cdot a^x` },
    { id: 'm3-fo-loga', name: 'Logarithme de base a', tex: String.raw`\log_a x = \frac{\ln x}{\ln a}`, note: String.raw`Pour $a \gt 0$, $a \neq 1$.` },
    { id: 'm3-fo-log10', name: 'Logarithme décimal', tex: String.raw`\log x = \frac{\ln x}{\ln 10}, \qquad \log(10^n) = n`, note: String.raw`$\log 2 \approx 0{,}301$, $\log 3 \approx 0{,}477$.` },
    { id: 'm3-fo-db-v', name: 'Gain en dB (tensions)', tex: String.raw`G_{\mathrm{dB}} = 20\log\left|\frac{V_s}{V_e}\right| = 20\log|H|`, note: String.raw`Inverse : $|H| = 10^{G_{\mathrm{dB}}/20}$.` },
    { id: 'm3-fo-db-p', name: 'Gain en dB (puissances)', tex: String.raw`G_{\mathrm{dB}} = 10\log\frac{P_s}{P_e}` },
    { id: 'm3-fo-db-val', name: 'Valeurs de dB à connaître', tex: String.raw`\times 10 \to +20\text{ dB}, \quad \times 2 \to +6\text{ dB}, \quad \times\tfrac{1}{\sqrt{2}} \to -3\text{ dB}`, note: String.raw`Rapports de tensions ; en cascade, les dB s'additionnent.` },
    { id: 'm3-fo-ch', name: 'Cosinus hyperbolique', tex: String.raw`\operatorname{ch} x = \frac{\mathrm{e}^x + \mathrm{e}^{-x}}{2}`, note: String.raw`Paire, $\operatorname{ch} x \geq 1$.` },
    { id: 'm3-fo-sh', name: 'Sinus hyperbolique', tex: String.raw`\operatorname{sh} x = \frac{\mathrm{e}^x - \mathrm{e}^{-x}}{2}`, note: String.raw`Impaire.` },
    { id: 'm3-fo-th', name: 'Tangente hyperbolique', tex: String.raw`\operatorname{th} x = \frac{\operatorname{sh} x}{\operatorname{ch} x} = \frac{\mathrm{e}^{2x} - 1}{\mathrm{e}^{2x} + 1}`, note: String.raw`Impaire, à valeurs dans $\left]-1, 1\right[$.` },
    { id: 'm3-fo-ch2sh2', name: 'Relation fondamentale hyperbolique', tex: String.raw`\operatorname{ch}^2 x - \operatorname{sh}^2 x = 1` },
    { id: 'm3-fo-chsh-exp', name: 'ch ± sh', tex: String.raw`\operatorname{ch} x + \operatorname{sh} x = \mathrm{e}^x, \qquad \operatorname{ch} x - \operatorname{sh} x = \mathrm{e}^{-x}` },
    { id: 'm3-fo-hyp-der', name: 'Dérivées hyperboliques', tex: String.raw`\operatorname{sh}' = \operatorname{ch}, \quad \operatorname{ch}' = \operatorname{sh}, \quad \operatorname{th}' = 1 - \operatorname{th}^2 = \frac{1}{\operatorname{ch}^2}` },
    { id: 'm3-fo-hyp-add', name: 'Formules d\'addition hyperboliques', tex: String.raw`\begin{aligned} \operatorname{ch}(a+b) &= \operatorname{ch} a\operatorname{ch} b + \operatorname{sh} a\operatorname{sh} b \\ \operatorname{sh}(a+b) &= \operatorname{sh} a\operatorname{ch} b + \operatorname{ch} a\operatorname{sh} b \end{aligned}` },
    { id: 'm3-fo-hyp-dup', name: 'Duplication hyperbolique', tex: String.raw`\operatorname{ch}(2x) = 2\operatorname{ch}^2 x - 1 = 1 + 2\operatorname{sh}^2 x, \qquad \operatorname{sh}(2x) = 2\operatorname{sh} x\operatorname{ch} x` },
    { id: 'm3-fo-argsh', name: 'Argument sinus hyperbolique', tex: String.raw`\operatorname{argsh} x = \ln\left(x + \sqrt{x^2 + 1}\right), \quad x \in \mathbb{R}`, note: String.raw`Dérivée $\frac{1}{\sqrt{x^2+1}}$.` },
    { id: 'm3-fo-argch', name: 'Argument cosinus hyperbolique', tex: String.raw`\operatorname{argch} x = \ln\left(x + \sqrt{x^2 - 1}\right), \quad x \geq 1`, note: String.raw`Dérivée $\frac{1}{\sqrt{x^2-1}}$ pour $x \gt 1$.` },
    { id: 'm3-fo-argth', name: 'Argument tangente hyperbolique', tex: String.raw`\operatorname{argth} x = \frac{1}{2}\ln\frac{1+x}{1-x}, \quad |x| \lt 1`, note: String.raw`Dérivée $\frac{1}{1-x^2}$.` },
    { id: 'm3-fo-abs', name: 'Valeur absolue', tex: String.raw`|ab| = |a|\,|b|, \qquad |a + b| \leq |a| + |b|`, note: String.raw`Inégalité triangulaire ; $|x| = \sqrt{x^2}$.` },
    { id: 'm3-fo-abs-int', name: 'Valeur absolue et intervalle', tex: String.raw`|x - a| \leq r \iff a - r \leq x \leq a + r`, note: String.raw`Pour $r \geq 0$.` },
    { id: 'm3-fo-ent', name: 'Partie entière', tex: String.raw`E(x) \leq x \lt E(x) + 1, \qquad E(x + n) = E(x) + n \;(n \in \mathbb{Z})` }
  ],

  /* ===================================================== FLASHCARDS */
  flashcards: [
    { id: 'm3-f-domaine', front: String.raw`Comment déterminer un domaine de définition ?`, back: String.raw`Lister les contraintes : dénominateur $\neq 0$, radicande $\geq 0$, argument d'un $\ln$ $\gt 0$, base d'une puissance réelle $\gt 0$. Le domaine est l'ensemble des $x$ qui vérifient <b>toutes</b> les conditions.` },
    { id: 'm3-f-parite', front: String.raw`Fonction paire, fonction impaire`, back: String.raw`Domaine symétrique et : paire si $f(-x) = f(x)$ (symétrie par rapport à $(Oy)$) ; impaire si $f(-x) = -f(x)$ (symétrie par rapport à $O$, et $f(0) = 0$ si défini).` },
    { id: 'm3-f-bijection', front: String.raw`Théorème de la bijection`, back: String.raw`Si $f$ est <b>continue</b> et <b>strictement monotone</b> sur un intervalle $I$, elle réalise une bijection de $I$ sur $f(I)$ ; $f^{-1}$ est continue, strictement monotone de même sens.` },
    { id: 'm3-f-reciproque', front: String.raw`Courbe et dérivée de $f^{-1}$`, back: String.raw`$\mathcal{C}_{f^{-1}}$ est la symétrique de $\mathcal{C}_f$ par rapport à $y = x$. $\left(f^{-1}\right)'(y) = \frac{1}{f'\left(f^{-1}(y)\right)}$ si le dénominateur est non nul.` },
    { id: 'm3-f-ln', front: String.raw`Le logarithme népérien : définition et propriétés`, back: String.raw`Primitive de $\frac{1}{x}$ sur $\left]0, +\infty\right[$ nulle en 1. $\ln(ab) = \ln a + \ln b$, $\ln\frac{a}{b} = \ln a - \ln b$, $\ln(a^r) = r\ln a$. Croissante, concave, $\ln x \leq x - 1$.` },
    { id: 'm3-f-exp', front: String.raw`L'exponentielle : définition et propriétés`, back: String.raw`Réciproque de $\ln$ ; unique $f$ avec $f' = f$, $f(0) = 1$. $\mathrm{e}^{a+b} = \mathrm{e}^a\mathrm{e}^b$, $\mathrm{e}^x \gt 0$, $(\mathrm{e}^u)' = u'\mathrm{e}^u$, $\mathrm{e}^x \geq 1 + x$.` },
    { id: 'm3-f-puissance', front: String.raw`Puissance réelle $x^a$`, back: String.raw`Pour $x \gt 0$ : $x^a = \mathrm{e}^{a\ln x}$. Dérivée $a x^{a-1}$. Pour $a^x$ (exposant variable) : $a^x = \mathrm{e}^{x\ln a}$, dérivée $\ln a\cdot a^x$.` },
    { id: 'm3-f-uv', front: String.raw`Méthode : dériver ou étudier $u(x)^{v(x)}$`, back: String.raw`Écrire $u^v = \mathrm{e}^{v\ln u}$ (avec $u \gt 0$). Dérivée : $\left(v'\ln u + v\frac{u'}{u}\right)u^v$. Pour une limite : étudier $v\ln u$. Ex. $(x^x)' = (\ln x + 1)x^x$.` },
    { id: 'm3-f-cc', front: String.raw`Croissances comparées`, back: String.raw`En $+\infty$ : $\ln x \ll x^a \ll \mathrm{e}^x$ ($a \gt 0$), donc $\frac{\mathrm{e}^x}{x^a} \to +\infty$, $\frac{\ln x}{x^a} \to 0$. En $0^+$ : $x^a\ln x \to 0$. En $-\infty$ : $x^n\mathrm{e}^x \to 0$.` },
    { id: 'm3-f-eq-ln', front: String.raw`Méthode : équation avec des logarithmes`, back: String.raw`1) Domaine (arguments $\gt 0$). 2) Regrouper : $\ln A = \ln B$. 3) $A = B$ (car $\ln$ injective). 4) Garder uniquement les solutions du domaine.` },
    { id: 'm3-f-eq-exp', front: String.raw`Méthode : équation en $\mathrm{e}^x$`, back: String.raw`Poser $X = \mathrm{e}^x \gt 0$ (multiplier par $\mathrm{e}^x$ si $\mathrm{e}^{-x}$ apparaît), résoudre le polynôme en $X$, rejeter les $X \leq 0$, puis $x = \ln X$.` },
    { id: 'm3-f-db', front: String.raw`Décibels : tension ou puissance ?`, back: String.raw`Tensions (ou $|H|$) : $G = 20\log\left|\frac{V_s}{V_e}\right|$. Puissances : $G = 10\log\frac{P_s}{P_e}$. ×10 → +20 dB ; ×2 → +6 dB ; ÷$\sqrt{2}$ → −3 dB. En cascade, les dB s'additionnent.` },
    { id: 'm3-f-hyp', front: String.raw`Définitions de $\operatorname{ch}$, $\operatorname{sh}$, $\operatorname{th}$`, back: String.raw`$\operatorname{ch} x = \frac{\mathrm{e}^x + \mathrm{e}^{-x}}{2}$ (paire), $\operatorname{sh} x = \frac{\mathrm{e}^x - \mathrm{e}^{-x}}{2}$ (impaire), $\operatorname{th} = \frac{\operatorname{sh}}{\operatorname{ch}}$ (impaire, valeurs dans $\left]-1,1\right[$).` },
    { id: 'm3-f-hyp-form', front: String.raw`Formules hyperboliques essentielles`, back: String.raw`$\operatorname{ch}^2 - \operatorname{sh}^2 = 1$ ; $\operatorname{sh}' = \operatorname{ch}$, $\operatorname{ch}' = \operatorname{sh}$, $\operatorname{th}' = 1 - \operatorname{th}^2$ ; $\operatorname{ch}(2x) = 1 + 2\operatorname{sh}^2 x$, $\operatorname{sh}(2x) = 2\operatorname{sh}x\operatorname{ch}x$.` },
    { id: 'm3-f-arg', front: String.raw`Expressions de $\operatorname{argsh}$, $\operatorname{argch}$, $\operatorname{argth}$`, back: String.raw`$\operatorname{argsh} x = \ln\left(x + \sqrt{x^2+1}\right)$ sur $\mathbb{R}$ ; $\operatorname{argch} x = \ln\left(x + \sqrt{x^2-1}\right)$ sur $\left[1, +\infty\right[$ ; $\operatorname{argth} x = \frac{1}{2}\ln\frac{1+x}{1-x}$ sur $\left]-1, 1\right[$.` },
    { id: 'm3-f-abs', front: String.raw`Valeur absolue : propriétés clés`, back: String.raw`$|ab| = |a||b|$ ; $|a + b| \leq |a| + |b|$ (inégalité triangulaire) ; $|x - a| \leq r \iff a - r \leq x \leq a + r$ ; $|x| = \sqrt{x^2}$.` },
    { id: 'm3-f-ent', front: String.raw`Partie entière $E(x)$`, back: String.raw`Le plus grand entier $\leq x$ : unique $n \in \mathbb{Z}$ tel que $n \leq x \lt n + 1$. Ex. $E(-2{,}5) = -3$. $E(x + n) = E(x) + n$ ; discontinue en chaque entier.` }
  ],

  /* ===================================================== QCM */
  quiz: [
    { id: 'm3-q-001', level: 1, q: String.raw`Pour $a, b \gt 0$, que vaut $\ln(a + b)$ ?`,
      choices: [String.raw`$\ln a + \ln b$`, String.raw`$\ln a \times \ln b$`, String.raw`Il n'y a pas de simplification générale`, String.raw`$\ln a - \ln b$`], answer: 2,
      explain: String.raw`$\ln$ transforme les <b>produits</b> en sommes : $\ln(ab) = \ln a + \ln b$. Pour $\ln(a+b)$ il n'existe aucune formule (ex. $\ln(1+1) = \ln 2 \neq \ln 1 + \ln 1 = 0$).`,
      why: { 0: String.raw`C'est la formule de $\ln(ab)$, pas de $\ln(a+b)$ : contre-exemple $a = b = 1$.`, 1: String.raw`Aucune propriété ne fait apparaître un produit de logarithmes.`, 3: String.raw`$\ln a - \ln b = \ln\frac{a}{b}$, sans rapport avec une somme.` } },
    { id: 'm3-q-002', level: 2, q: String.raw`Pour $x \neq 0$, $\ln(x^2)$ est égal à :`,
      choices: [String.raw`$2\ln x$`, String.raw`$(\ln x)^2$`, String.raw`$2\ln|x|$`, String.raw`$\ln(2x)$`], answer: 2,
      explain: String.raw`$x^2 = |x|^2$ avec $|x| \gt 0$, donc $\ln(x^2) = 2\ln|x|$, valable aussi pour $x \lt 0$.`,
      why: { 0: String.raw`$2\ln x$ n'est défini que pour $x \gt 0$, alors que $\ln(x^2)$ existe aussi pour $x \lt 0$.`, 1: String.raw`$(\ln x)^2 = \ln x \cdot \ln x$, à ne pas confondre avec $\ln(x^2)$.`, 3: String.raw`$\ln(2x) = \ln 2 + \ln x$ : le carré n'est pas un facteur 2.` } },
    { id: 'm3-q-003', level: 1, q: String.raw`$\mathrm{e}^{a}\,\mathrm{e}^{b} = $`,
      choices: [String.raw`$\mathrm{e}^{ab}$`, String.raw`$\mathrm{e}^{a+b}$`, String.raw`$\mathrm{e}^{a} + \mathrm{e}^{b}$`, String.raw`$2\mathrm{e}^{a+b}$`], answer: 1,
      explain: String.raw`Le produit d'exponentielles correspond à la somme des exposants.`,
      why: { 0: String.raw`On <b>additionne</b> les exposants, on ne les multiplie pas.`, 2: String.raw`Un produit n'est pas une somme.`, 3: String.raw`Aucun facteur 2 n'apparaît.` } },
    { id: 'm3-q-004', level: 1, q: String.raw`$\left(\mathrm{e}^{x}\right)^3 = $`,
      choices: [String.raw`$\mathrm{e}^{x^3}$`, String.raw`$3\mathrm{e}^{x}$`, String.raw`$\mathrm{e}^{x+3}$`, String.raw`$\mathrm{e}^{3x}$`], answer: 3,
      explain: String.raw`$(\mathrm{e}^x)^3 = \mathrm{e}^x\mathrm{e}^x\mathrm{e}^x = \mathrm{e}^{3x}$ : l'exposant est multiplié par 3.`,
      why: { 0: String.raw`Erreur classique : l'exposant est multiplié par 3, pas élevé au cube.`, 1: String.raw`Élever au cube n'est pas multiplier par 3.`, 2: String.raw`Le 3 multiplie l'exposant, il ne s'y ajoute pas.` } },
    { id: 'm3-q-005', level: 1, q: String.raw`Domaine de définition de $f(x) = \ln(x^2 - 4)$ :`,
      choices: [String.raw`$\left]2, +\infty\right[$`, String.raw`$\left]-2, 2\right[$`, String.raw`$\left]-\infty, -2\right[ \cup \left]2, +\infty\right[$`, String.raw`$\mathbb{R}\setminus\{-2, 2\}$`], answer: 2,
      explain: String.raw`Il faut $x^2 - 4 \gt 0 \iff x^2 \gt 4 \iff |x| \gt 2$.`,
      why: { 0: String.raw`Tu as oublié les $x \lt -2$ : pour $x = -3$, $x^2 - 4 = 5 \gt 0$.`, 1: String.raw`C'est là que $x^2 - 4 \lt 0$ : $\ln$ n'y est pas défini.`, 3: String.raw`Il ne suffit pas que $x^2 - 4 \neq 0$ : il faut $x^2 - 4 \gt 0$.` } },
    { id: 'm3-q-006', level: 1, q: String.raw`Dérivée de $x \mapsto \ln(u(x))$ (avec $u \gt 0$) :`,
      choices: [String.raw`$\frac{1}{u}$`, String.raw`$\frac{u'}{u}$`, String.raw`$u'\ln u$`, String.raw`$\frac{u'}{u^2}$`], answer: 1,
      explain: String.raw`Dérivée d'une composée : $u' \times \ln'(u) = \frac{u'}{u}$.`,
      why: { 0: String.raw`Il manque la dérivée de l'intérieur $u'$.`, 2: String.raw`Confusion avec la dérivée d'un produit.`, 3: String.raw`$-\frac{u'}{u^2}$ est la dérivée de $\frac{1}{u}$, rien à voir avec $\ln$.` } },
    { id: 'm3-q-007', level: 1, q: String.raw`$\displaystyle\lim_{x\to+\infty} x^{10}\mathrm{e}^{-x} = $`,
      choices: [String.raw`$+\infty$`, String.raw`$0$`, String.raw`$1$`, String.raw`On ne peut pas conclure`], answer: 1,
      explain: String.raw`$x^{10}\mathrm{e}^{-x} = \frac{x^{10}}{\mathrm{e}^x}$ et l'exponentielle l'emporte sur toute puissance.`,
      why: { 0: String.raw`$x^{10}$ est grand, mais $\mathrm{e}^x$ croît beaucoup plus vite.`, 2: String.raw`Aucune raison d'obtenir 1 : le quotient tend vers 0.`, 3: String.raw`La forme $\infty \times 0$ est indéterminée a priori, mais les croissances comparées permettent de conclure.` } },
    { id: 'm3-q-008', level: 2, q: String.raw`$\displaystyle\lim_{x\to 0^+} x\ln x = $`,
      choices: [String.raw`$-\infty$`, String.raw`$+\infty$`, String.raw`$1$`, String.raw`$0$`], answer: 3,
      explain: String.raw`Croissances comparées en $0^+$ : $x^a\ln x \to 0$ pour $a \gt 0$, la puissance l'emporte.`,
      why: { 0: String.raw`$\ln x \to -\infty$, mais le facteur $x \to 0$ l'emporte.`, 1: String.raw`Le produit est négatif pour $0 \lt x \lt 1$, et il tend vers 0.`, 2: String.raw`Confusion avec $x^x = \mathrm{e}^{x\ln x} \to 1$.` } },
    { id: 'm3-q-009', level: 1, q: String.raw`Laquelle de ces fonctions est paire ?`,
      choices: [String.raw`$\operatorname{sh}$`, String.raw`$\operatorname{th}$`, String.raw`$\operatorname{ch}$`, String.raw`$\exp$`], answer: 2,
      explain: String.raw`$\operatorname{ch}(-x) = \frac{\mathrm{e}^{-x} + \mathrm{e}^{x}}{2} = \operatorname{ch} x$.`,
      why: { 0: String.raw`$\operatorname{sh}(-x) = -\operatorname{sh} x$ : impaire.`, 1: String.raw`$\operatorname{th} = \frac{\operatorname{sh}}{\operatorname{ch}}$ est impaire (impaire / paire).`, 3: String.raw`$\mathrm{e}^{-x} \neq \mathrm{e}^{x}$ : ni paire ni impaire.` } },
    { id: 'm3-q-010', level: 1, q: String.raw`Pour tout réel $x$, $\operatorname{ch}^2 x - \operatorname{sh}^2 x = $`,
      choices: [String.raw`$1$`, String.raw`$-1$`, String.raw`$\operatorname{ch}(2x)$`, String.raw`$0$`], answer: 0,
      explain: String.raw`$(\operatorname{ch} x - \operatorname{sh} x)(\operatorname{ch} x + \operatorname{sh} x) = \mathrm{e}^{-x}\,\mathrm{e}^{x} = 1$.`,
      why: { 1: String.raw`Signe inversé : c'est $\operatorname{sh}^2 x - \operatorname{ch}^2 x$ qui vaut $-1$.`, 2: String.raw`$\operatorname{ch}(2x) = \operatorname{ch}^2 x + \operatorname{sh}^2 x$, avec un $+$.`, 3: String.raw`En $x = 0$ : $\operatorname{ch}^2 0 - \operatorname{sh}^2 0 = 1 - 0 = 1$.` } },
    { id: 'm3-q-011', level: 1, q: String.raw`Dérivée de $\operatorname{ch}$ :`,
      choices: [String.raw`$-\operatorname{sh}$`, String.raw`$\operatorname{sh}$`, String.raw`$\operatorname{ch}$`, String.raw`$\frac{1}{\operatorname{ch}^2}$`], answer: 1,
      explain: String.raw`$\left(\frac{\mathrm{e}^x + \mathrm{e}^{-x}}{2}\right)' = \frac{\mathrm{e}^x - \mathrm{e}^{-x}}{2} = \operatorname{sh} x$.`,
      why: { 0: String.raw`Réflexe venu de $\cos' = -\sin$ : en hyperbolique, pas de signe moins.`, 2: String.raw`$\operatorname{ch}$ n'est pas sa propre dérivée (c'est $\exp$ qui l'est).`, 3: String.raw`C'est la dérivée de $\operatorname{th}$.` } },
    { id: 'm3-q-012', level: 2, q: String.raw`Pour tout réel $x$, $\operatorname{argsh} x = $`,
      choices: [String.raw`$\ln\left(x + \sqrt{x^2 - 1}\right)$`, String.raw`$\frac{1}{2}\ln\frac{1+x}{1-x}$`, String.raw`$\ln\left(x + \sqrt{x^2 + 1}\right)$`, String.raw`$\ln\left(\sqrt{x^2+1} - x\right)$`], answer: 2,
      explain: String.raw`On résout $x = \operatorname{sh} y$ : $\mathrm{e}^{2y} - 2x\mathrm{e}^y - 1 = 0$, d'où $\mathrm{e}^y = x + \sqrt{x^2+1}$ (seule racine positive).`,
      why: { 0: String.raw`C'est $\operatorname{argch} x$, défini seulement pour $x \geq 1$.`, 1: String.raw`C'est $\operatorname{argth} x$, défini pour $|x| \lt 1$.`, 3: String.raw`$\left(\sqrt{x^2+1} - x\right)\left(\sqrt{x^2+1} + x\right) = 1$, donc cette expression vaut $-\operatorname{argsh} x$.` } },
    { id: 'm3-q-013', level: 1, q: String.raw`Ensemble de définition de $\operatorname{argch}$ :`,
      choices: [String.raw`$\mathbb{R}$`, String.raw`$\left[1, +\infty\right[$`, String.raw`$\left]-1, 1\right[$`, String.raw`$\left[0, +\infty\right[$`], answer: 1,
      explain: String.raw`$\operatorname{ch}$ réalise une bijection de $\left[0, +\infty\right[$ sur $\left[1, +\infty\right[$ : sa réciproque est définie sur $\left[1, +\infty\right[$.`,
      why: { 0: String.raw`$\operatorname{ch} x \geq 1$ : il n'y a pas d'antécédent pour $x \lt 1$.`, 2: String.raw`C'est le domaine de $\operatorname{argth}$.`, 3: String.raw`C'est l'ensemble des <b>valeurs</b> de $\operatorname{argch}$, pas son domaine.` } },
    { id: 'm3-q-014', level: 1, q: String.raw`Un amplificateur multiplie la tension par 10. Son gain vaut :`,
      choices: [String.raw`$10$ dB`, String.raw`$20$ dB`, String.raw`$1$ dB`, String.raw`$100$ dB`], answer: 1,
      explain: String.raw`$G = 20\log 10 = 20$ dB.`,
      why: { 0: String.raw`$10\log$ s'applique aux puissances ; pour une tension c'est $20\log$.`, 2: String.raw`$\log 10 = 1$, mais il faut multiplier par 20.`, 3: String.raw`Le gain en dB n'est pas le rapport des puissances ($10^2 = 100$).` } },
    { id: 'm3-q-015', level: 2, q: String.raw`À la fréquence de coupure d'un filtre, $|H| = \frac{H_0}{\sqrt{2}}$. Par rapport au gain maximal, le gain a chuté de :`,
      choices: [String.raw`$6$ dB`, String.raw`$3$ dB`, String.raw`$\frac{1}{\sqrt{2}}$ dB`, String.raw`$20$ dB`], answer: 1,
      explain: String.raw`$20\log\frac{1}{\sqrt{2}} = -10\log 2 \approx -3{,}01$ dB.`,
      why: { 0: String.raw`$-6$ dB correspond à une tension divisée par 2.`, 2: String.raw`Le dB est logarithmique : on prend $20\log$ du rapport.`, 3: String.raw`$-20$ dB correspond à une tension divisée par 10.` } },
    { id: 'm3-q-016', level: 1, q: String.raw`Doubler une tension correspond à un gain d'environ :`,
      choices: [String.raw`$+3$ dB`, String.raw`$+2$ dB`, String.raw`$+6$ dB`, String.raw`$+20$ dB`], answer: 2,
      explain: String.raw`$20\log 2 \approx 20 \times 0{,}301 = 6{,}02$ dB.`,
      why: { 0: String.raw`$+3$ dB correspond à doubler la <b>puissance</b> ($10\log 2$).`, 1: String.raw`Le gain en dB n'est pas proportionnel au rapport.`, 3: String.raw`$+20$ dB correspond à multiplier par 10.` } },
    { id: 'm3-q-017', level: 1, q: String.raw`Dans un repère orthonormé, la courbe de $f^{-1}$ est la symétrique de celle de $f$ par rapport :`,
      choices: [String.raw`à l'axe des abscisses`, String.raw`à l'origine`, String.raw`à l'axe des ordonnées`, String.raw`à la droite $y = x$`], answer: 3,
      explain: String.raw`$(a, b) \in \mathcal{C}_f \iff (b, a) \in \mathcal{C}_{f^{-1}}$ : on échange abscisse et ordonnée.`,
      why: { 0: String.raw`C'est la courbe de $-f$.`, 1: String.raw`La symétrie centrale donne la courbe de $x \mapsto -f(-x)$.`, 2: String.raw`C'est la courbe de $x \mapsto f(-x)$.` } },
    { id: 'm3-q-018', level: 1, q: String.raw`Pour $x \gt 0$ et $a$ réel, $x^a$ est défini par :`,
      choices: [String.raw`$\mathrm{e}^{x\ln a}$`, String.raw`$\mathrm{e}^{a\ln x}$`, String.raw`$a\ln x$`, String.raw`$(\ln x)^a$`], answer: 1,
      explain: String.raw`$x^a = \mathrm{e}^{\ln(x^a)} = \mathrm{e}^{a\ln x}$.`,
      why: { 0: String.raw`C'est $a^x$ (exponentielle de base $a$).`, 2: String.raw`C'est $\ln(x^a)$, le logarithme de $x^a$.`, 3: String.raw`$(\ln x)^a$ est une puissance du logarithme, sans rapport.` } },
    { id: 'm3-q-019', level: 2, q: String.raw`Dérivée de $x \mapsto 3^x$ :`,
      choices: [String.raw`$x\,3^{x-1}$`, String.raw`$3^x$`, String.raw`$\frac{3^x}{\ln 3}$`, String.raw`$\ln 3\cdot 3^x$`], answer: 3,
      explain: String.raw`$3^x = \mathrm{e}^{x\ln 3}$, donc $(3^x)' = \ln 3\,\mathrm{e}^{x\ln 3} = \ln 3\cdot 3^x$.`,
      why: { 0: String.raw`$(x^a)' = ax^{a-1}$ vaut pour un exposant <b>constant</b> ; ici l'exposant est la variable.`, 1: String.raw`Seule la base $\mathrm{e}$ vérifie $f' = f$ ; il manque $\ln 3$.`, 2: String.raw`On multiplie par $\ln 3$ (on divise pour une primitive).` } },
    { id: 'm3-q-020', level: 1, q: String.raw`Partie entière : $E(-1{,}2) = $`,
      choices: [String.raw`$-1$`, String.raw`$-2$`, String.raw`$1$`, String.raw`$-1{,}2$`], answer: 1,
      explain: String.raw`$-2 \leq -1{,}2 \lt -1$, donc $E(-1{,}2) = -2$.`,
      why: { 0: String.raw`$-1 \gt -1{,}2$ : la partie entière est le plus grand entier <b>inférieur ou égal</b> (ce n'est pas la troncature).`, 2: String.raw`La partie entière d'un négatif est négative.`, 3: String.raw`$E(x)$ est toujours un entier.` } },
    { id: 'm3-q-021', level: 1, q: String.raw`$|x - 3| \leq 2 \iff$`,
      choices: [String.raw`$x \in [1, 5]$`, String.raw`$x \in [-5, -1]$`, String.raw`$x \leq 5$`, String.raw`$x \in [-1, 5]$`], answer: 0,
      explain: String.raw`La distance de $x$ à 3 est au plus 2 : $3 - 2 \leq x \leq 3 + 2$.`,
      why: { 1: String.raw`Erreur de signe : c'est $|x + 3| \leq 2$.`, 2: String.raw`Il manque la contrainte $x \geq 1$.`, 3: String.raw`La borne gauche est $3 - 2 = 1$, pas $-1$.` } },
    { id: 'm3-q-022', level: 2, q: String.raw`Quelle affirmation est vraie en $+\infty$ ?`,
      choices: [String.raw`$\frac{\ln x}{\sqrt{x}} \to 0$`, String.raw`$\frac{x^{100}}{\mathrm{e}^x} \to +\infty$`, String.raw`$\frac{\mathrm{e}^x}{x^{1000}} \to 0$`, String.raw`$\frac{(\ln x)^5}{x} \to +\infty$`], answer: 0,
      explain: String.raw`Le logarithme est négligeable devant toute puissance positive, ici $\sqrt{x} = x^{1/2}$.`,
      why: { 1: String.raw`L'exponentielle l'emporte sur toute puissance : ce quotient tend vers 0.`, 2: String.raw`C'est l'inverse : $\frac{\mathrm{e}^x}{x^{1000}} \to +\infty$.`, 3: String.raw`Toute puissance de $\ln x$ est négligeable devant $x$ : la limite est 0.` } },
    { id: 'm3-q-023', level: 1, q: String.raw`$\displaystyle\lim_{x\to+\infty}\operatorname{th} x = $`,
      choices: [String.raw`$+\infty$`, String.raw`$0$`, String.raw`$1$`, String.raw`$\mathrm{e}$`], answer: 2,
      explain: String.raw`$\operatorname{th} x = \frac{1 - \mathrm{e}^{-2x}}{1 + \mathrm{e}^{-2x}} \to 1$ : asymptote $y = 1$.`,
      why: { 0: String.raw`$\operatorname{sh}$ et $\operatorname{ch}$ tendent vers $+\infty$, mais leur quotient tend vers 1.`, 1: String.raw`$\operatorname{th} 0 = 0$, mais en $+\infty$ la limite est 1.`, 3: String.raw`$\operatorname{th}$ est bornée par 1.` } },
    { id: 'm3-q-024', level: 1, q: String.raw`L'égalité $\mathrm{e}^{\ln x} = x$ est valable pour :`,
      choices: [String.raw`tout réel $x$`, String.raw`$x \geq 0$`, String.raw`$x \gt 0$`, String.raw`$x \neq 0$`], answer: 2,
      explain: String.raw`$\ln x$ n'existe que pour $x \gt 0$. À l'inverse, $\ln(\mathrm{e}^x) = x$ pour tout réel $x$.`,
      why: { 0: String.raw`$\ln x$ n'existe pas pour $x \leq 0$.`, 1: String.raw`$\ln 0$ n'est pas défini.`, 3: String.raw`$\ln x$ n'existe pas pour $x \lt 0$.` } },
    { id: 'm3-q-025', level: 1, q: String.raw`Solution de $\ln x = -1$ :`,
      choices: [String.raw`$x = -\mathrm{e}$`, String.raw`$x = \frac{1}{\mathrm{e}}$`, String.raw`pas de solution`, String.raw`$x = -\frac{1}{\mathrm{e}}$`], answer: 1,
      explain: String.raw`$\ln x = -1 \iff x = \mathrm{e}^{-1} = \frac{1}{\mathrm{e}}$.`,
      why: { 0: String.raw`Un logarithme peut être négatif, mais $x$ doit être strictement positif.`, 2: String.raw`$\ln$ prend toutes les valeurs réelles (bijection de $\left]0, +\infty\right[$ sur $\mathbb{R}$).`, 3: String.raw`$x$ doit être strictement positif.` } },
    { id: 'm3-q-026', level: 2, q: String.raw`Solutions de $\mathrm{e}^{2x} - 5\mathrm{e}^{x} + 6 = 0$ :`,
      choices: [String.raw`$x = 2$ et $x = 3$`, String.raw`$x = \ln 2$ et $x = \ln 3$`, String.raw`$x = \mathrm{e}^2$ et $x = \mathrm{e}^3$`, String.raw`$x = \ln 5$`], answer: 1,
      explain: String.raw`Avec $X = \mathrm{e}^x$ : $X^2 - 5X + 6 = 0$, donc $X = 2$ ou $X = 3$, puis $x = \ln 2$ ou $x = \ln 3$.`,
      why: { 0: String.raw`Ce sont les valeurs de $X = \mathrm{e}^x$ : il faut revenir à $x = \ln X$.`, 2: String.raw`Tu as confondu $\ln$ et $\exp$ au retour.`, 3: String.raw`On ne peut pas simplifier ainsi : il faut résoudre l'équation du second degré en $X$.` } },
    { id: 'm3-q-027', level: 2, q: String.raw`$\operatorname{th}'(x) = $`,
      choices: [String.raw`$1 + \operatorname{th}^2 x$`, String.raw`$-\frac{1}{\operatorname{ch}^2 x}$`, String.raw`$1 - \operatorname{th}^2 x$`, String.raw`$\frac{1}{\operatorname{sh}^2 x}$`], answer: 2,
      explain: String.raw`$\left(\frac{\operatorname{sh}}{\operatorname{ch}}\right)' = \frac{\operatorname{ch}^2 - \operatorname{sh}^2}{\operatorname{ch}^2} = \frac{1}{\operatorname{ch}^2} = 1 - \operatorname{th}^2$.`,
      why: { 0: String.raw`C'est la dérivée de $\tan$ ; pour $\operatorname{th}$ le signe est moins.`, 1: String.raw`$\operatorname{th}$ est croissante : sa dérivée est positive.`, 3: String.raw`Le dénominateur de la dérivée d'un quotient est $\operatorname{ch}^2$, pas $\operatorname{sh}^2$.` } },
    { id: 'm3-q-028', level: 2, q: String.raw`$\operatorname{ch}(2x) = $`,
      choices: [String.raw`$2\operatorname{ch}^2 x - 1$`, String.raw`$\operatorname{ch}^2 x - \operatorname{sh}^2 x$`, String.raw`$1 - 2\operatorname{sh}^2 x$`, String.raw`$2\operatorname{sh} x\operatorname{ch} x$`], answer: 0,
      explain: String.raw`$\operatorname{ch}(2x) = \operatorname{ch}^2 x + \operatorname{sh}^2 x$ et $\operatorname{sh}^2 x = \operatorname{ch}^2 x - 1$.`,
      why: { 1: String.raw`Cela vaut 1 ; la duplication fait apparaître une somme $\operatorname{ch}^2 + \operatorname{sh}^2$.`, 2: String.raw`C'est le calque de $\cos(2x)$ ; en hyperbolique : $1 + 2\operatorname{sh}^2 x$.`, 3: String.raw`C'est $\operatorname{sh}(2x)$.` } },
    { id: 'm3-q-029', level: 2, q: String.raw`Si $f$ est une bijection dérivable et $f'\left(f^{-1}(y)\right) \neq 0$, alors $\left(f^{-1}\right)'(y) = $`,
      choices: [String.raw`$\frac{1}{f'(y)}$`, String.raw`$f'\left(f^{-1}(y)\right)$`, String.raw`$\frac{1}{f'\left(f^{-1}(y)\right)}$`, String.raw`$-\frac{f'(y)}{f(y)^2}$`], answer: 2,
      explain: String.raw`On dérive $f\left(f^{-1}(y)\right) = y$ : $f'\left(f^{-1}(y)\right)\cdot\left(f^{-1}\right)'(y) = 1$.`,
      why: { 0: String.raw`Il faut évaluer $f'$ en l'antécédent $f^{-1}(y)$, pas en $y$.`, 1: String.raw`C'est l'inverse de la bonne réponse.`, 3: String.raw`C'est la dérivée de $\frac{1}{f}$ : réciproque et inverse sont différents.` } },
    { id: 'm3-q-030', level: 1, q: String.raw`La courbe d'une fonction impaire est symétrique par rapport :`,
      choices: [String.raw`à l'axe des ordonnées`, String.raw`à l'origine $O$`, String.raw`à la droite $y = x$`, String.raw`à l'axe des abscisses`], answer: 1,
      explain: String.raw`$f(-x) = -f(x)$ : le point $(-x, -y)$ est sur la courbe dès que $(x, y)$ y est.`,
      why: { 0: String.raw`C'est le cas d'une fonction paire.`, 2: String.raw`C'est la symétrie qui relie $f$ et $f^{-1}$.`, 3: String.raw`Cela imposerait $f = -f$, donc $f = 0$.` } },
    { id: 'm3-q-031', level: 2, q: String.raw`Pour qu'une fonction $f$ réalise une bijection d'un intervalle $I$ sur $f(I)$, il suffit qu'elle soit :`,
      choices: [String.raw`continue sur $I$`, String.raw`dérivable sur $I$`, String.raw`continue et strictement monotone sur $I$`, String.raw`paire`], answer: 2,
      explain: String.raw`C'est le théorème de la bijection.`,
      why: { 0: String.raw`$x \mapsto x^2$ est continue sur $[-1, 1]$ mais pas injective.`, 1: String.raw`Même contre-exemple $x^2$ : dérivable mais pas injective.`, 3: String.raw`Une fonction paire prend la même valeur en $x$ et $-x$ : elle n'est pas injective.` } },
    { id: 'm3-q-032', level: 1, q: String.raw`Valeur approchée de $\log 2$ (logarithme décimal) :`,
      choices: [String.raw`$0{,}693$`, String.raw`$0{,}301$`, String.raw`$0{,}5$`, String.raw`$2{,}303$`], answer: 1,
      explain: String.raw`$\log 2 = \frac{\ln 2}{\ln 10} \approx \frac{0{,}693}{2{,}303} \approx 0{,}301$ (et $10^{0{,}301} \approx 2$).`,
      why: { 0: String.raw`C'est $\ln 2$.`, 2: String.raw`$10^{0{,}5} = \sqrt{10} \approx 3{,}16 \neq 2$.`, 3: String.raw`C'est $\ln 10$.` } },
    { id: 'm3-q-033', level: 2, q: String.raw`Pour $|x| \lt 1$, $\operatorname{argth} x = $`,
      choices: [String.raw`$\ln\frac{1+x}{1-x}$`, String.raw`$\frac{1}{2}\ln\frac{1+x}{1-x}$`, String.raw`$\frac{1}{2}\ln\frac{1-x}{1+x}$`, String.raw`$\ln\left(x + \sqrt{x^2+1}\right)$`], answer: 1,
      explain: String.raw`$x = \operatorname{th} y = \frac{\mathrm{e}^{2y} - 1}{\mathrm{e}^{2y} + 1} \iff \mathrm{e}^{2y} = \frac{1+x}{1-x} \iff y = \frac{1}{2}\ln\frac{1+x}{1-x}$.`,
      why: { 0: String.raw`Il manque le facteur $\frac{1}{2}$, qui vient du $\mathrm{e}^{2y}$.`, 2: String.raw`Fraction renversée : c'est $-\operatorname{argth} x$.`, 3: String.raw`C'est $\operatorname{argsh} x$.` } },
    { id: 'm3-q-034', level: 2, q: String.raw`Quelle fonction a pour dérivée $\frac{1}{\sqrt{x^2+1}}$ ?`,
      choices: [String.raw`$\arcsin$`, String.raw`$\operatorname{argch}$`, String.raw`$\arctan$`, String.raw`$\operatorname{argsh}$`], answer: 3,
      explain: String.raw`$\operatorname{argsh}'(x) = \frac{1}{\operatorname{ch}(\operatorname{argsh} x)} = \frac{1}{\sqrt{1 + x^2}}$ car $\operatorname{ch} = \sqrt{1 + \operatorname{sh}^2}$.`,
      why: { 0: String.raw`$\arcsin'(x) = \frac{1}{\sqrt{1 - x^2}}$.`, 1: String.raw`$\operatorname{argch}'(x) = \frac{1}{\sqrt{x^2 - 1}}$.`, 2: String.raw`$\arctan'(x) = \frac{1}{1 + x^2}$, sans racine.` } }
  ],

  /* ===================================================== EXERCICES */
  exercises: [
    { id: 'm3-x-001', level: 1, check: 'value', vars: [],
      prompt: String.raw`Valeur exacte de $\ln\left(\sqrt{\mathrm{e}}\right)$.`,
      answer: '1/2',
      mistakes: [{ expr: '2', msg: String.raw`$\sqrt{\mathrm{e}} = \mathrm{e}^{1/2}$ (racine = puissance $\frac{1}{2}$), pas $\mathrm{e}^2$.` }],
      hint: String.raw`$\sqrt{a} = a^{1/2}$ et $\ln(a^r) = r\ln a$.`,
      explain: String.raw`$\ln\left(\mathrm{e}^{1/2}\right) = \frac{1}{2}\ln\mathrm{e} = \frac{1}{2}$.` },
    { id: 'm3-x-002', level: 1, check: 'value', vars: [],
      prompt: String.raw`Valeur exacte de $\mathrm{e}^{2\ln 3}$.`,
      answer: '9',
      mistakes: [{ expr: '6', msg: String.raw`$2\ln 3 = \ln(3^2)$ : le 2 devient un exposant, pas un facteur.` }],
      hint: String.raw`Écris $2\ln 3 = \ln(\dots)$.`,
      explain: String.raw`$2\ln 3 = \ln 9$, donc $\mathrm{e}^{2\ln 3} = \mathrm{e}^{\ln 9} = 9$.` },
    { id: 'm3-x-003', level: 1, check: 'value', vars: [],
      prompt: String.raw`Valeur exacte de $\dfrac{\ln 8}{\ln 2}$.`,
      answer: '3',
      mistakes: [
        { expr: '4', msg: String.raw`On ne « simplifie » pas les $\ln$ : $\frac{\ln 8}{\ln 2} \neq \frac{8}{2}$.` },
        { expr: 'ln(4)', msg: String.raw`$\frac{\ln a}{\ln b} \neq \ln\frac{a}{b}$ : c'est $\ln a - \ln b$ qui vaut $\ln\frac{a}{b}$.` }
      ],
      hint: String.raw`Écris $8$ comme une puissance de 2.`,
      explain: String.raw`$\ln 8 = \ln(2^3) = 3\ln 2$, donc le quotient vaut $3$ (c'est $\log_2 8$).` },
    { id: 'm3-x-004', level: 1, check: 'expr', vars: ['x'], domain: [0.3, 4],
      prompt: String.raw`Simplifie, pour $x \gt 0$ : $\mathrm{e}^{3\ln x}$.`,
      answer: 'x^3',
      mistakes: [
        { expr: '3*x', msg: String.raw`$3\ln x = \ln(x^3)$, donc $\mathrm{e}^{3\ln x} = x^3$, pas $3x$.` },
        { expr: 'exp(3)*x', msg: String.raw`$\mathrm{e}^{3\ln x} \neq \mathrm{e}^3\,\mathrm{e}^{\ln x}$ : c'est une <b>somme</b> d'exposants qui donne un produit, pas un produit d'exposants.` }
      ],
      hint: String.raw`$a\ln x = \ln(x^a)$.`,
      explain: String.raw`$\mathrm{e}^{3\ln x} = \mathrm{e}^{\ln(x^3)} = x^3$.` },
    { id: 'm3-x-005', level: 1, check: 'expr', vars: ['x'],
      prompt: String.raw`Simplifie : $\dfrac{\mathrm{e}^{3x}}{\left(\mathrm{e}^{x}\right)^2}$.`,
      answer: 'exp(x)',
      mistakes: [
        { expr: 'exp(3*x-x^2)', msg: String.raw`$\left(\mathrm{e}^{x}\right)^2 = \mathrm{e}^{2x}$, pas $\mathrm{e}^{x^2}$.` },
        { expr: 'exp(3/2)', msg: String.raw`$\frac{\mathrm{e}^a}{\mathrm{e}^b} = \mathrm{e}^{a-b}$ : on soustrait les exposants, on ne les divise pas.` }
      ],
      hint: String.raw`$(\mathrm{e}^a)^n = \mathrm{e}^{na}$ et $\frac{\mathrm{e}^a}{\mathrm{e}^b} = \mathrm{e}^{a-b}$.`,
      explain: String.raw`$\frac{\mathrm{e}^{3x}}{\mathrm{e}^{2x}} = \mathrm{e}^{3x - 2x} = \mathrm{e}^{x}$.` },
    { id: 'm3-x-006', level: 2, check: 'expr', vars: ['x'], domain: [0.3, 4],
      prompt: String.raw`Simplifie, pour $x \gt 0$ : $\ln(x^3) - \ln\left(\dfrac{x}{\mathrm{e}}\right)$.`,
      answer: '2*ln(x)+1',
      mistakes: [
        { expr: '2*ln(x)-1', msg: String.raw`$-\ln\frac{x}{\mathrm{e}} = -(\ln x - 1) = -\ln x + 1$ : attention au signe.` },
        { expr: '3*ln(x)/(ln(x)-1)', msg: String.raw`$\ln a - \ln b = \ln\frac{a}{b}$ : ce n'est pas un quotient de logarithmes.` }
      ],
      hint: String.raw`$\ln\frac{x}{\mathrm{e}} = \ln x - \ln\mathrm{e}$.`,
      explain: String.raw`$\ln(x^3) = 3\ln x$ et $\ln\frac{x}{\mathrm{e}} = \ln x - 1$. Donc $3\ln x - \ln x + 1 = 2\ln x + 1$.` },
    { id: 'm3-x-007', level: 2, check: 'expr', vars: ['x'], domain: [0.3, 4],
      prompt: String.raw`Écris sous la forme $x^a$ (pour $x \gt 0$) : $\sqrt[3]{x^2}\,\sqrt{x}$.`,
      answer: 'x^(7/6)',
      mistakes: [
        { expr: 'x^(1/3)', msg: String.raw`Tu as multiplié les exposants $\frac{2}{3}\times\frac{1}{2}$ ; pour un <b>produit</b> de puissances de même base, on les <b>additionne</b>.` },
        { expr: 'x^2', msg: String.raw`$\sqrt[3]{x^2} = x^{2/3}$, pas $x^{3/2}$.` }
      ],
      hint: String.raw`$\sqrt[3]{x^2} = x^{2/3}$ et $\sqrt{x} = x^{1/2}$.`,
      explain: String.raw`$x^{2/3}\cdot x^{1/2} = x^{2/3 + 1/2} = x^{7/6}$.` },
    { id: 'm3-x-008', level: 1, check: 'expr', vars: ['x'],
      prompt: String.raw`Dérive $f(x) = \ln(x^2+1)$.`,
      answer: '2*x/(x^2+1)',
      mistakes: [{ expr: '1/(x^2+1)', msg: String.raw`$(\ln u)' = \frac{u'}{u}$ : il manque $u' = 2x$.` }],
      hint: String.raw`$(\ln u)' = \frac{u'}{u}$ avec $u = x^2 + 1$.`,
      explain: String.raw`$u = x^2 + 1$, $u' = 2x$, donc $f'(x) = \frac{2x}{x^2+1}$.` },
    { id: 'm3-x-009', level: 1, check: 'expr', vars: ['x'],
      prompt: String.raw`Dérive $f(x) = \mathrm{e}^{-x^2}$.`,
      answer: '-2*x*exp(-x^2)',
      mistakes: [
        { expr: 'exp(-x^2)', msg: String.raw`$(\mathrm{e}^u)' = u'\mathrm{e}^u$ : il manque le facteur $u' = -2x$.` },
        { expr: '-x^2*exp(-x^2-1)', msg: String.raw`On ne dérive pas $\mathrm{e}^u$ comme une puissance : $(\mathrm{e}^u)' = u'\mathrm{e}^u$.` }
      ],
      hint: String.raw`$(\mathrm{e}^u)' = u'\mathrm{e}^u$.`,
      explain: String.raw`$u = -x^2$, $u' = -2x$, donc $f'(x) = -2x\,\mathrm{e}^{-x^2}$.` },
    { id: 'm3-x-010', level: 2, check: 'expr', vars: ['x'],
      prompt: String.raw`Dérive $f(x) = 3^x$.`,
      answer: 'ln(3)*3^x',
      mistakes: [
        { expr: 'x*3^(x-1)', msg: String.raw`$3^x$ n'est pas une puissance $x^a$ : l'exposant est variable. Écris $3^x = \mathrm{e}^{x\ln 3}$.` },
        { expr: '3^x', msg: String.raw`Seule la base $\mathrm{e}$ est sa propre dérivée : il manque le facteur $\ln 3$.` }
      ],
      hint: String.raw`$3^x = \mathrm{e}^{x\ln 3}$.`,
      explain: String.raw`$f(x) = \mathrm{e}^{x\ln 3}$, donc $f'(x) = \ln 3\,\mathrm{e}^{x\ln 3} = \ln 3\cdot 3^x$.` },
    { id: 'm3-x-011', level: 3, check: 'expr', vars: ['x'], domain: [0.3, 3],
      prompt: String.raw`Dérive $f(x) = x^x$ pour $x \gt 0$.`,
      answer: '(ln(x)+1)*x^x',
      mistakes: [
        { expr: 'x*x^(x-1)', msg: String.raw`La formule $(x^a)' = ax^{a-1}$ suppose $a$ constant. Écris $x^x = \mathrm{e}^{x\ln x}$.` },
        { expr: 'ln(x)*x^x', msg: String.raw`La dérivée de $x\ln x$ est $\ln x + 1$ (dérivée d'un produit), pas $\ln x$.` }
      ],
      hint: String.raw`Écris $x^x = \mathrm{e}^{x\ln x}$.`,
      explain: String.raw`$f(x) = \mathrm{e}^{x\ln x}$ et $(x\ln x)' = \ln x + x\cdot\frac{1}{x} = \ln x + 1$, donc $f'(x) = (\ln x + 1)\,x^x$.` },
    { id: 'm3-x-012', level: 1, check: 'tuple', vars: [],
      prompt: String.raw`Le domaine de définition de $f(x) = \ln(3 - x) + \sqrt{x + 1}$ est de la forme $[a, b[$. Donne $a ; b$.`,
      answer: '-1;3',
      hint: String.raw`Racine : argument $\geq 0$ ; $\ln$ : argument $\gt 0$.`,
      explain: String.raw`$\ln(3-x)$ exige $3 - x \gt 0$, soit $x \lt 3$ ; $\sqrt{x+1}$ exige $x \geq -1$. Donc $\mathcal{D}_f = [-1, 3[$ : $a = -1$, $b = 3$.` },
    { id: 'm3-x-013', level: 2, check: 'tuple', vars: [],
      prompt: String.raw`Le domaine de définition de $f(x) = \ln\left(\dfrac{x-1}{x+2}\right)$ est $\left]-\infty, a\right[ \cup \left]b, +\infty\right[$. Donne $a ; b$.`,
      answer: '-2;1',
      hint: String.raw`Tableau de signes du quotient $\frac{x-1}{x+2}$, qui doit être $\gt 0$.`,
      explain: String.raw`$\frac{x-1}{x+2} \gt 0$ quand numérateur et dénominateur ont le même signe : $x \lt -2$ ou $x \gt 1$. Donc $a = -2$, $b = 1$.` },
    { id: 'm3-x-014', level: 1, check: 'expr', vars: ['x'], domain: [0.3, 4],
      prompt: String.raw`On pose $f(x) = \ln x$ et $g(x) = x^2 + 1$. Donne $(g \circ f)(x)$ pour $x \gt 0$.`,
      answer: 'ln(x)^2+1',
      mistakes: [{ expr: 'ln(x^2+1)', msg: String.raw`C'est $(f \circ g)(x) = f(g(x))$. Pour $g \circ f$, on applique d'abord $f$, puis $g$.` }],
      hint: String.raw`$(g \circ f)(x) = g\big(f(x)\big)$.`,
      explain: String.raw`$(g\circ f)(x) = g(\ln x) = (\ln x)^2 + 1$.` },
    { id: 'm3-x-015', level: 2, check: 'expr', vars: ['x'], domain: [1.3, 6],
      prompt: String.raw`$f(x) = \mathrm{e}^{2x} + 1$ est une bijection de $\mathbb{R}$ sur $\left]1, +\infty\right[$. Donne $f^{-1}(x)$ pour $x \gt 1$.`,
      answer: 'ln(x-1)/2',
      mistakes: [
        { expr: '1/(exp(2*x)+1)', msg: String.raw`$f^{-1}$ (réciproque) n'est pas $\frac{1}{f}$ (inverse). Résous $y = f(x)$ d'inconnue $x$.` },
        { expr: '2*ln(x-1)', msg: String.raw`$\mathrm{e}^{2t} = x - 1 \iff 2t = \ln(x-1)$ : il faut ensuite <b>diviser</b> par 2.` },
        { expr: 'ln(x)/2', msg: String.raw`Isole d'abord $\mathrm{e}^{2t} = x - 1$ avant de prendre le logarithme.` }
      ],
      hint: String.raw`Résous $x = \mathrm{e}^{2t} + 1$ d'inconnue $t$.`,
      explain: String.raw`$x = \mathrm{e}^{2t} + 1 \iff \mathrm{e}^{2t} = x - 1 \iff t = \frac{1}{2}\ln(x - 1)$. Donc $f^{-1}(x) = \frac{1}{2}\ln(x-1)$.` },
    { id: 'm3-x-016', level: 2, check: 'value', vars: [],
      prompt: String.raw`$g(x) = x^3 + x$ est une bijection de $\mathbb{R}$ sur $\mathbb{R}$. Calcule $\left(g^{-1}\right)'(2)$.`,
      answer: '1/4',
      mistakes: [
        { expr: '1/13', msg: String.raw`On évalue $g'$ en $g^{-1}(2) = 1$, pas en 2.` },
        { expr: '4', msg: String.raw`$4 = g'(1)$ ; la dérivée de la réciproque est son <b>inverse</b>.` }
      ],
      hint: String.raw`Trouve d'abord $x_0$ tel que $g(x_0) = 2$, puis utilise $\left(g^{-1}\right)'(2) = \frac{1}{g'(x_0)}$.`,
      explain: String.raw`$g(1) = 2$ donc $g^{-1}(2) = 1$ ; $g'(x) = 3x^2 + 1$, $g'(1) = 4$, d'où $\left(g^{-1}\right)'(2) = \frac{1}{4}$.` },
    { id: 'm3-x-017', level: 1, check: 'text', vars: [], accept: ['impaire'],
      prompt: String.raw`La fonction $f(x) = x^3\operatorname{ch} x$ est-elle paire, impaire, ou aucune des deux ? Réponds par un mot : paire, impaire ou aucune.`,
      answer: 'impaire',
      mistakes: [
        { text: 'paire', msg: String.raw`Calcule $f(-x) = (-x)^3\operatorname{ch}(-x)$ : le cube change de signe, pas $\operatorname{ch}$.` },
        { text: 'aucune', msg: String.raw`Calcule $f(-x)$ et compare à $f(x)$ : impaire × paire donne une fonction impaire.` }
      ],
      hint: String.raw`Calcule $f(-x)$ ; rappel : $\operatorname{ch}$ est paire.`,
      explain: String.raw`$f(-x) = (-x)^3\operatorname{ch}(-x) = -x^3\operatorname{ch} x = -f(x)$, sur $\mathbb{R}$ symétrique : $f$ est impaire.` },
    { id: 'm3-x-018', level: 2, check: 'set', vars: [],
      prompt: String.raw`Résous dans $\mathbb{R}$ : $\ln x + \ln(x - 2) = \ln 3$. (Sépare les solutions par des « ; ».)`,
      answer: '{3}',
      hint: String.raw`Commence par le domaine : $x \gt 2$.`,
      explain: String.raw`Domaine $x \gt 2$. $\ln(x(x-2)) = \ln 3 \iff x^2 - 2x - 3 = 0 \iff x = 3$ ou $x = -1$. Seul $3$ est dans le domaine : $\mathcal{S} = \{3\}$.` },
    { id: 'm3-x-019', level: 2, check: 'set', vars: [],
      prompt: String.raw`Résous dans $\mathbb{R}$ : $2\ln x = \ln(x + 6)$.`,
      answer: '{3}',
      hint: String.raw`Domaine : $x \gt 0$. Puis $2\ln x = \ln(x^2)$.`,
      explain: String.raw`Domaine : $x \gt 0$ (et $x \gt -6$). L'équation devient $x^2 = x + 6$, soit $x^2 - x - 6 = 0$ : $x = 3$ ou $x = -2$. On rejette $-2$ : $\mathcal{S} = \{3\}$.` },
    { id: 'm3-x-020', level: 2, check: 'set', vars: [],
      prompt: String.raw`Résous dans $\mathbb{R}$ : $\ln(x^2) = \ln(x + 6)$.`,
      answer: '{3;-2}',
      hint: String.raw`Attention, le domaine n'est pas le même qu'avec $2\ln x$ : ici il suffit que $x \neq 0$ et $x \gt -6$.`,
      explain: String.raw`Domaine : $x \neq 0$ et $x \gt -6$. $x^2 = x + 6 \iff x = 3$ ou $x = -2$, et les deux sont dans le domaine. $\mathcal{S} = \{-2 ; 3\}$. (Comparer avec $2\ln x = \ln(x+6)$ : $\ln(x^2) = 2\ln|x|$.)` },
    { id: 'm3-x-021', level: 2, check: 'set', vars: [],
      prompt: String.raw`Résous dans $\mathbb{R}$ : $\mathrm{e}^{2x} - 3\mathrm{e}^{x} + 2 = 0$.`,
      answer: '{0;ln(2)}',
      hint: String.raw`Pose $X = \mathrm{e}^x$.`,
      explain: String.raw`$X^2 - 3X + 2 = 0 \iff X = 1$ ou $X = 2$ (tous deux $\gt 0$). Donc $x = \ln 1 = 0$ ou $x = \ln 2$.` },
    { id: 'm3-x-022', level: 2, check: 'set', vars: [],
      prompt: String.raw`Résous dans $\mathbb{R}$ : $\mathrm{e}^{x} - 6\mathrm{e}^{-x} = 1$.`,
      answer: '{ln(3)}',
      hint: String.raw`Multiplie par $\mathrm{e}^x$ et pose $X = \mathrm{e}^x \gt 0$.`,
      explain: String.raw`$\mathrm{e}^{2x} - \mathrm{e}^x - 6 = 0$, soit $X^2 - X - 6 = 0$ : $X = 3$ ou $X = -2$. Comme $X = \mathrm{e}^x \gt 0$, seul $X = 3$ convient : $x = \ln 3$.` },
    { id: 'm3-x-023', level: 2, check: 'set', vars: [],
      prompt: String.raw`Résous dans $\left]0, +\infty\right[$ : $(\ln x)^2 - \ln x - 2 = 0$.`,
      answer: '{1/e;e^2}',
      hint: String.raw`Pose $X = \ln x$.`,
      explain: String.raw`$X^2 - X - 2 = 0 \iff X = 2$ ou $X = -1$. Donc $\ln x = 2$ ou $\ln x = -1$ : $x = \mathrm{e}^2$ ou $x = \mathrm{e}^{-1}$.` },
    { id: 'm3-x-024', level: 1, check: 'value', vars: [],
      prompt: String.raw`Un amplificateur multiplie la tension par 100. Quel est son gain en dB ?`,
      answer: '40',
      mistakes: [{ expr: '20', msg: String.raw`$10\log$ est réservé aux puissances ; en tension : $20\log 100$.` }],
      hint: String.raw`$G_{\mathrm{dB}} = 20\log\left|\frac{V_s}{V_e}\right|$.`,
      explain: String.raw`$G = 20\log 100 = 20 \times 2 = 40$ dB.` },
    { id: 'm3-x-025', level: 1, check: 'value', vars: [],
      prompt: String.raw`Un atténuateur a un gain de $-20$ dB. Donne le rapport de tensions $\frac{V_s}{V_e}$.`,
      answer: '1/10',
      mistakes: [{ expr: '1/100', msg: String.raw`Tu as utilisé $10\log$ : en tension, $\frac{V_s}{V_e} = 10^{G/20}$.` }],
      hint: String.raw`$\left|\frac{V_s}{V_e}\right| = 10^{G_{\mathrm{dB}}/20}$.`,
      explain: String.raw`$\frac{V_s}{V_e} = 10^{-20/20} = 10^{-1} = \frac{1}{10}$.` },
    { id: 'm3-x-026', level: 2, check: 'value', vars: [],
      prompt: String.raw`Gain en dB, en valeur exacte (avec $\log$), d'un filtre tel que $\left|\frac{V_s}{V_e}\right| = \frac{1}{\sqrt{2}}$.`,
      answer: '-10*log(2)',
      mistakes: [
        { expr: '-3', msg: String.raw`$-3$ dB est une valeur approchée ; la valeur exacte est $20\log\frac{1}{\sqrt{2}}$, à simplifier.` },
        { expr: '-20*log(2)', msg: String.raw`C'est le gain pour un rapport $\frac{1}{2}$ ; ici $\log\frac{1}{\sqrt{2}} = -\frac{1}{2}\log 2$.` }
      ],
      hint: String.raw`$\log\frac{1}{\sqrt{2}} = -\frac{1}{2}\log 2$.`,
      explain: String.raw`$G = 20\log\left(2^{-1/2}\right) = -10\log 2 \approx -3{,}01$ dB.` },
    { id: 'm3-x-027', level: 2, check: 'value', vars: [],
      prompt: String.raw`Trois étages en cascade ont des gains en tension de 10, 4 et 25. Quel est le gain total en dB ?`,
      answer: '60',
      mistakes: [{ expr: '20*log(39)', msg: String.raw`En cascade, les gains linéaires se <b>multiplient</b> ($10 \times 4 \times 25$) ; ce sont les gains en dB qui s'additionnent.` }],
      hint: String.raw`Gain total $= 10 \times 4 \times 25$, ou somme des gains en dB.`,
      explain: String.raw`Gain total $10 \times 4 \times 25 = 1000$, soit $20\log 1000 = 60$ dB. Autre méthode : $20 + 20\log 4 + 20\log 25 = 20 + 20\log 100 = 60$ dB.` },
    { id: 'm3-x-028', level: 1, check: 'value', vars: [],
      prompt: String.raw`Valeur exacte de $\operatorname{ch}(\ln 2)$.`,
      answer: '5/4',
      mistakes: [
        { expr: '3/4', msg: String.raw`C'est $\operatorname{sh}(\ln 2)$ ; pour $\operatorname{ch}$ on additionne $\mathrm{e}^x$ et $\mathrm{e}^{-x}$.` },
        { expr: '5/2', msg: String.raw`N'oublie pas de diviser par 2.` }
      ],
      hint: String.raw`$\mathrm{e}^{\ln 2} = 2$ et $\mathrm{e}^{-\ln 2} = \frac{1}{2}$.`,
      explain: String.raw`$\operatorname{ch}(\ln 2) = \frac{2 + \frac{1}{2}}{2} = \frac{5}{4}$.` },
    { id: 'm3-x-029', level: 2, check: 'value', vars: [],
      prompt: String.raw`Valeur exacte de $\operatorname{th}(\ln 3)$.`,
      answer: '4/5',
      mistakes: [{ expr: '4/3', msg: String.raw`C'est $\operatorname{sh}(\ln 3)$ ; il faut encore diviser par $\operatorname{ch}(\ln 3)$.` }],
      hint: String.raw`$\operatorname{th} x = \frac{\mathrm{e}^{2x} - 1}{\mathrm{e}^{2x} + 1}$.`,
      explain: String.raw`$\mathrm{e}^{2\ln 3} = 9$, donc $\operatorname{th}(\ln 3) = \frac{9 - 1}{9 + 1} = \frac{4}{5}$.` },
    { id: 'm3-x-030', level: 1, check: 'expr', vars: ['x'],
      prompt: String.raw`Simplifie : $\operatorname{ch} x - \operatorname{sh} x$.`,
      answer: 'exp(-x)',
      mistakes: [
        { expr: 'exp(x)', msg: String.raw`C'est $\operatorname{ch} x + \operatorname{sh} x$ qui vaut $\mathrm{e}^x$.` },
        { expr: '1', msg: String.raw`C'est $\operatorname{ch}^2 x - \operatorname{sh}^2 x$ qui vaut 1.` }
      ],
      hint: String.raw`Reviens aux définitions avec $\mathrm{e}^x$ et $\mathrm{e}^{-x}$.`,
      explain: String.raw`$\frac{\mathrm{e}^x + \mathrm{e}^{-x}}{2} - \frac{\mathrm{e}^x - \mathrm{e}^{-x}}{2} = \frac{2\mathrm{e}^{-x}}{2} = \mathrm{e}^{-x}$.` },
    { id: 'm3-x-031', level: 1, check: 'expr', vars: ['x'],
      prompt: String.raw`Dérive $f(x) = \operatorname{th} x$ (tape <code>th(x)</code> ou <code>ch(x)</code> si besoin).`,
      answer: '1-tanh(x)^2',
      mistakes: [
        { expr: '1+tanh(x)^2', msg: String.raw`Confusion avec $\tan' = 1 + \tan^2$ : pour $\operatorname{th}$, c'est $1 - \operatorname{th}^2$.` },
        { expr: '-1/cosh(x)^2', msg: String.raw`$\operatorname{th}$ est croissante : $\operatorname{th}' = +\frac{1}{\operatorname{ch}^2}$.` }
      ],
      hint: String.raw`Dérive le quotient $\frac{\operatorname{sh}}{\operatorname{ch}}$ et utilise $\operatorname{ch}^2 - \operatorname{sh}^2 = 1$.`,
      explain: String.raw`$\operatorname{th}' = \frac{\operatorname{ch}\cdot\operatorname{ch} - \operatorname{sh}\cdot\operatorname{sh}}{\operatorname{ch}^2} = \frac{1}{\operatorname{ch}^2} = 1 - \operatorname{th}^2$.` },
    { id: 'm3-x-032', level: 2, check: 'expr', vars: ['x'],
      prompt: String.raw`Exprime $\operatorname{ch}(2x)$ en fonction de $\operatorname{sh} x$ uniquement.`,
      answer: '1+2*sinh(x)^2',
      mistakes: [
        { expr: '1-2*sinh(x)^2', msg: String.raw`C'est le calque de $\cos(2x) = 1 - 2\sin^2 x$ ; en hyperbolique, le signe est $+$.` },
        { expr: '2*sinh(x)*cosh(x)', msg: String.raw`C'est $\operatorname{sh}(2x)$.` }
      ],
      hint: String.raw`$\operatorname{ch}(2x) = \operatorname{ch}^2 x + \operatorname{sh}^2 x$ et $\operatorname{ch}^2 x = 1 + \operatorname{sh}^2 x$.`,
      explain: String.raw`$\operatorname{ch}(2x) = \operatorname{ch}^2 x + \operatorname{sh}^2 x = (1 + \operatorname{sh}^2 x) + \operatorname{sh}^2 x = 1 + 2\operatorname{sh}^2 x$.` },
    { id: 'm3-x-033', level: 2, check: 'set', vars: [],
      prompt: String.raw`Résous dans $\mathbb{R}$ : $\operatorname{ch} x = \frac{5}{4}$.`,
      answer: '{-ln(2);ln(2)}',
      hint: String.raw`Pose $X = \mathrm{e}^x$ : $X + \frac{1}{X} = \frac{5}{2}$.`,
      explain: String.raw`$X + \frac{1}{X} = \frac{5}{2} \iff 2X^2 - 5X + 2 = 0 \iff X = 2$ ou $X = \frac{1}{2}$. Donc $x = \ln 2$ ou $x = -\ln 2$ (normal : $\operatorname{ch}$ est paire).` },
    { id: 'm3-x-034', level: 2, check: 'value', vars: [],
      prompt: String.raw`Valeur exacte de $\operatorname{argth}\left(\frac{1}{2}\right)$, exprimée avec $\ln$.`,
      answer: 'ln(3)/2',
      mistakes: [{ expr: 'ln(3)', msg: String.raw`N'oublie pas le facteur $\frac{1}{2}$ : $\operatorname{argth} x = \frac{1}{2}\ln\frac{1+x}{1-x}$.` }],
      hint: String.raw`$\operatorname{argth} x = \frac{1}{2}\ln\frac{1+x}{1-x}$.`,
      explain: String.raw`$\frac{1 + 1/2}{1 - 1/2} = \frac{3/2}{1/2} = 3$, donc $\operatorname{argth}\frac{1}{2} = \frac{1}{2}\ln 3$.` },
    { id: 'm3-x-035', level: 3, check: 'expr', vars: ['x'],
      prompt: String.raw`Dérive $f(x) = \ln\left(x + \sqrt{x^2 + 1}\right)$ et simplifie au maximum.`,
      answer: '1/sqrt(x^2+1)',
      mistakes: [{ expr: '1/(x+sqrt(x^2+1))', msg: String.raw`$(\ln u)' = \frac{u'}{u}$ : il manque $u' = 1 + \frac{x}{\sqrt{x^2+1}}$.` }],
      hint: String.raw`$u' = 1 + \frac{x}{\sqrt{x^2+1}}$ ; mets au même dénominateur.`,
      explain: String.raw`$u' = 1 + \frac{x}{\sqrt{x^2+1}} = \frac{\sqrt{x^2+1} + x}{\sqrt{x^2+1}}$, donc $\frac{u'}{u} = \frac{1}{\sqrt{x^2+1}}$. On retrouve la dérivée de $\operatorname{argsh}$.` },
    { id: 'm3-x-036', level: 1, check: 'value', vars: [],
      prompt: String.raw`Partie entière : calcule $E(-2{,}5)$.`,
      answer: '-3',
      mistakes: [{ expr: '-2', msg: String.raw`$-2 \gt -2{,}5$ : la partie entière est le plus grand entier <b>inférieur ou égal</b>, ce n'est pas la troncature.` }],
      hint: String.raw`Cherche l'entier $n$ tel que $n \leq -2{,}5 \lt n + 1$.`,
      explain: String.raw`$-3 \leq -2{,}5 \lt -2$, donc $E(-2{,}5) = -3$.` },
    { id: 'm3-x-037', level: 2, check: 'value', vars: [],
      prompt: String.raw`Calcule $E\left(\sqrt{50}\right) + E\left(-\sqrt{50}\right)$.`,
      answer: '-1',
      mistakes: [{ expr: '0', msg: String.raw`$E(-x) \neq -E(x)$ quand $x$ n'est pas entier : $E(-7{,}07\ldots) = -8$.` }],
      hint: String.raw`Encadre $\sqrt{50}$ entre deux entiers consécutifs.`,
      explain: String.raw`$49 \lt 50 \lt 64$ donc $7 \lt \sqrt{50} \lt 8$ : $E(\sqrt{50}) = 7$ et $-8 \lt -\sqrt{50} \lt -7$ : $E(-\sqrt{50}) = -8$. Somme : $-1$.` },
    { id: 'm3-x-038', level: 1, check: 'set', vars: [],
      prompt: String.raw`Résous dans $\mathbb{R}$ : $|2x - 1| = 3$.`,
      answer: '{2;-1}',
      hint: String.raw`$|A| = 3 \iff A = 3$ ou $A = -3$.`,
      explain: String.raw`$2x - 1 = 3 \iff x = 2$ ; $2x - 1 = -3 \iff x = -1$. $\mathcal{S} = \{-1 ; 2\}$.` },
    { id: 'm3-x-039', level: 2, check: 'value', vars: [],
      prompt: String.raw`Calcule $\displaystyle\lim_{x\to+\infty}\frac{3\mathrm{e}^{x} - x^{5}}{\mathrm{e}^{x} + \ln x}$.`,
      answer: '3',
      mistakes: [{ expr: '0', msg: String.raw`$x^5$ est négligeable devant $\mathrm{e}^x$, pas l'inverse : factorise par $\mathrm{e}^x$.` }],
      hint: String.raw`Factorise numérateur et dénominateur par $\mathrm{e}^x$.`,
      explain: String.raw`$\frac{\mathrm{e}^x\left(3 - x^5\mathrm{e}^{-x}\right)}{\mathrm{e}^x\left(1 + \ln x\,\mathrm{e}^{-x}\right)}$ ; par croissances comparées $x^5\mathrm{e}^{-x} \to 0$ et $\ln x\,\mathrm{e}^{-x} \to 0$, donc la limite vaut $3$.` },
    { id: 'm3-x-040', level: 3, check: 'value', vars: [],
      prompt: String.raw`Calcule $\displaystyle\lim_{x\to 0^+} x^{x}$.`,
      answer: '1',
      mistakes: [{ expr: '0', msg: String.raw`$0^0$ est une forme indéterminée : écris $x^x = \mathrm{e}^{x\ln x}$.` }],
      hint: String.raw`$x^x = \mathrm{e}^{x\ln x}$ ; que vaut $\lim_{x\to 0^+} x\ln x$ ?`,
      explain: String.raw`$x^x = \mathrm{e}^{x\ln x}$ et $x\ln x \to 0$ (croissances comparées), donc $x^x \to \mathrm{e}^0 = 1$.` }
  ]
});
