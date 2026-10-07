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
      topic: 'Propriétés du logarithme', sec: 'm3-s-ln',
      steps: [
        String.raw`Rappel : le logarithme népérien $\ln$ est défini sur $\left]0, +\infty\right[$ ; sa propriété fondamentale est de transformer un <b>produit</b> en <b>somme</b> : $\ln(ab) = \ln a + \ln b$.`,
        String.raw`Il n'existe aucune règle pour le logarithme d'une <b>somme</b>. Pour le vérifier, on teste $a = b = 1$ : $\ln(1 + 1) = \ln 2 \approx 0{,}693$.`,
        String.raw`Les trois formules proposées donnent : $\ln 1 + \ln 1 = 0$, $\ln 1\times\ln 1 = 0$, $\ln 1 - \ln 1 = 0$. Aucune ne vaut $\ln 2$ : elles sont fausses en général.`,
        String.raw`Conclusion : $\ln(a+b)$ ne se simplifie pas. On peut seulement factoriser : $\ln(a+b) = \ln a + \ln\left(1 + \frac{b}{a}\right)$.`
      ],
      choices: [String.raw`$\ln a + \ln b$`, String.raw`$\ln a \times \ln b$`, String.raw`Il n'y a pas de simplification générale`, String.raw`$\ln a - \ln b$`], answer: 2,
      explain: String.raw`Le logarithme transforme les <b>produits</b> en sommes : $\ln(ab) = \ln a + \ln b$. Il n'existe en revanche aucune formule pour le logarithme d'une somme. Un contre-exemple suffit : avec $a = b = 1$, $\ln(1+1) = \ln 2 \approx 0{,}69$ alors que $\ln 1 + \ln 1 = 0$. Face à $\ln(a+b)$, on factorise plutôt le terme dominant : $\ln(a+b) = \ln a + \ln\left(1 + \frac{b}{a}\right)$.`,
      why: { 0: String.raw`C'est la formule de $\ln(ab)$ (un produit), pas de $\ln(a+b)$. Contre-exemple $a = b = 1$ : on obtiendrait $0$ au lieu de $\ln 2$.`, 1: String.raw`Aucune propriété du logarithme ne fait apparaître un produit de logarithmes. Avec $a = b = 1$ : $\ln 1 \times \ln 1 = 0 \neq \ln 2$.`, 3: String.raw`$\ln a - \ln b = \ln\frac{a}{b}$ est le logarithme d'un quotient, sans rapport avec une somme (avec $a = b = 1$ on aurait $0 \neq \ln 2$).` },
      rule: String.raw`$\ln(ab) = \ln a + \ln b$, $\ln\frac{a}{b} = \ln a - \ln b$, mais $\ln(a+b)$ ne se simplifie pas.` },
    { id: 'm3-q-002', level: 2, q: String.raw`Pour $x \neq 0$, $\ln(x^2)$ est égal à :`,
      topic: 'Logarithme d\'un carré', sec: 'm3-s-ln',
      steps: [
        String.raw`Rappel : $\ln u$ n'existe que si $u \gt 0$, et la règle $\ln(a^n) = n\ln a$ n'est valable que pour $a \gt 0$.`,
        String.raw`Domaine de $\ln(x^2)$ : $x^2 \gt 0 \iff x \neq 0$. Il contient donc des $x$ négatifs.`,
        String.raw`On écrit $x^2 = |x|^2$ avec $|x| \gt 0$, ce qui autorise la règle : $\ln(x^2) = \ln\left(|x|^2\right) = 2\ln|x|$.`,
        String.raw`Contrôle avec $x = -2$ : $\ln\left((-2)^2\right) = \ln 4 = 2\ln 2 = 2\ln|-2|$ ✔, alors que $2\ln(-2)$ n'existe pas.`
      ],
      choices: [String.raw`$2\ln x$`, String.raw`$(\ln x)^2$`, String.raw`$2\ln|x|$`, String.raw`$\ln(2x)$`], answer: 2,
      explain: String.raw`$\ln(x^2)$ est défini pour tout $x \neq 0$, puisque $x^2 \gt 0$. Comme $x^2 = |x|^2$ avec $|x| \gt 0$, la règle $\ln(a^n) = n\ln a$ (valable seulement pour $a \gt 0$) donne $\ln(x^2) = 2\ln|x|$. Cette écriture reste juste pour $x \lt 0$ : par exemple $\ln\left((-2)^2\right) = \ln 4 = 2\ln 2 = 2\ln|-2|$.`,
      why: { 0: String.raw`$2\ln x$ n'est défini que pour $x \gt 0$, alors que $\ln(x^2)$ existe aussi pour $x \lt 0$ : pour $x = -2$, $\ln 4$ existe mais pas $2\ln(-2)$. La règle $\ln(a^n) = n\ln a$ exige $a \gt 0$.`, 1: String.raw`$(\ln x)^2$ est le carré du logarithme, pas le logarithme du carré : pour $x = \mathrm{e}$, $(\ln\mathrm{e})^2 = 1$ alors que $\ln(\mathrm{e}^2) = 2$.`, 3: String.raw`$\ln(2x) = \ln 2 + \ln x$ : l'exposant 2 ne devient pas un facteur 2 à l'intérieur du logarithme (pour $x = 1$ : $\ln 2 \neq \ln 1 = 0$).` },
      rule: String.raw`$\ln(x^2) = 2\ln|x|$ pour $x \neq 0$ ; $\ln(a^n) = n\ln a$ seulement si $a \gt 0$.` },
    { id: 'm3-q-003', level: 1, q: String.raw`$\mathrm{e}^{a}\,\mathrm{e}^{b} = $`,
      topic: 'Propriétés de l\'exponentielle', sec: 'm3-s-exp',
      steps: [
        String.raw`Rappel : l'exponentielle transforme une <b>somme</b> en <b>produit</b> : $\mathrm{e}^{a+b} = \mathrm{e}^{a}\,\mathrm{e}^{b}$ (comme $2^{3+4} = 2^3\times 2^4$).`,
        String.raw`Lue de droite à gauche, la formule dit que pour multiplier deux exponentielles, on <b>additionne</b> les exposants : $\mathrm{e}^{a}\,\mathrm{e}^{b} = \mathrm{e}^{a+b}$.`,
        String.raw`Contrôle avec $a = b = 1$ : $\mathrm{e}\times\mathrm{e} = \mathrm{e}^2 = \mathrm{e}^{1+1}$ ✔, alors que $\mathrm{e}^{ab} = \mathrm{e}^{1}$ ✘.`
      ],
      choices: [String.raw`$\mathrm{e}^{ab}$`, String.raw`$\mathrm{e}^{a+b}$`, String.raw`$\mathrm{e}^{a} + \mathrm{e}^{b}$`, String.raw`$2\mathrm{e}^{a+b}$`], answer: 1,
      explain: String.raw`L'exponentielle transforme les sommes en produits : $\mathrm{e}^{a+b} = \mathrm{e}^{a}\,\mathrm{e}^{b}$. Lu dans l'autre sens, un produit d'exponentielles s'obtient en <b>additionnant</b> les exposants. Vérification avec $a = b = 1$ : $\mathrm{e}\times\mathrm{e} = \mathrm{e}^2 = \mathrm{e}^{1+1}$. C'est la même règle que pour les puissances entières : $2^3\times 2^4 = 2^7$.`,
      why: { 0: String.raw`On additionne les exposants, on ne les multiplie pas : avec $a = b = 1$, $\mathrm{e}^{ab} = \mathrm{e}$ alors que $\mathrm{e}\times\mathrm{e} = \mathrm{e}^2$.`, 2: String.raw`Un produit n'est pas une somme : avec $a = b = 0$, $\mathrm{e}^0 + \mathrm{e}^0 = 2$ alors que $\mathrm{e}^0\,\mathrm{e}^0 = 1$.`, 3: String.raw`Aucun facteur 2 n'apparaît : avec $a = b = 0$, $\mathrm{e}^0\,\mathrm{e}^0 = 1$ alors que $2\mathrm{e}^{0} = 2$.` },
      rule: String.raw`$\mathrm{e}^{a}\mathrm{e}^{b} = \mathrm{e}^{a+b}$, $\frac{\mathrm{e}^a}{\mathrm{e}^b} = \mathrm{e}^{a-b}$, $(\mathrm{e}^a)^n = \mathrm{e}^{na}$.` },
    { id: 'm3-q-004', level: 1, q: String.raw`$\left(\mathrm{e}^{x}\right)^3 = $`,
      topic: 'Puissance d\'une exponentielle', sec: 'm3-s-exp',
      steps: [
        String.raw`Rappel : élever à la puissance 3, c'est multiplier trois fois par soi-même : $A^3 = A\times A\times A$.`,
        String.raw`$(\mathrm{e}^x)^3 = \mathrm{e}^x\times\mathrm{e}^x\times\mathrm{e}^x = \mathrm{e}^{x + x + x}$ (produit d'exponentielles : on additionne les exposants).`,
        String.raw`$x + x + x = 3x$, donc $(\mathrm{e}^x)^3 = \mathrm{e}^{3x}$ : l'exposant est <b>multiplié</b> par 3.`,
        String.raw`Contrôle en $x = 2$ : $(\mathrm{e}^2)^3 = \mathrm{e}^6$ ✔, alors que $\mathrm{e}^{x^3}$ donnerait $\mathrm{e}^8$ ✘.`
      ],
      choices: [String.raw`$\mathrm{e}^{x^3}$`, String.raw`$3\mathrm{e}^{x}$`, String.raw`$\mathrm{e}^{x+3}$`, String.raw`$\mathrm{e}^{3x}$`], answer: 3,
      explain: String.raw`Élever au cube, c'est multiplier trois fois par soi-même : $(\mathrm{e}^x)^3 = \mathrm{e}^x\,\mathrm{e}^x\,\mathrm{e}^x$. Par la règle du produit, on additionne les exposants : $x + x + x = 3x$. Donc $(\mathrm{e}^x)^3 = \mathrm{e}^{3x}$ : une puissance de puissance <b>multiplie</b> l'exposant. Vérification en $x = 1$ : $\mathrm{e}^3$ des deux côtés.`,
      why: { 0: String.raw`Erreur classique : l'exposant est multiplié par 3, pas élevé au cube. En $x = 2$ : $(\mathrm{e}^2)^3 = \mathrm{e}^6$ alors que $\mathrm{e}^{x^3} = \mathrm{e}^8$.`, 1: String.raw`Élever au cube n'est pas multiplier par 3 : en $x = 0$, $(\mathrm{e}^0)^3 = 1$ alors que $3\mathrm{e}^0 = 3$.`, 2: String.raw`Le 3 multiplie l'exposant, il ne s'y ajoute pas : en $x = 0$, $(\mathrm{e}^0)^3 = 1$ alors que $\mathrm{e}^{0+3} = \mathrm{e}^3$.` },
      rule: String.raw`$(\mathrm{e}^{a})^{n} = \mathrm{e}^{na}$, et plus généralement $(x^a)^b = x^{ab}$.` },
    { id: 'm3-q-005', level: 1, q: String.raw`Domaine de définition de $f(x) = \ln(x^2 - 4)$ :`,
      topic: 'Domaine de définition', sec: 'm3-s-generalites',
      steps: [
        String.raw`Rappel : le domaine de définition est l'ensemble des $x$ pour lesquels la formule a un sens. Pour $\ln u$, il faut $u \gt 0$ (strictement).`,
        String.raw`On résout $x^2 - 4 \gt 0$. On factorise : $x^2 - 4 = (x - 2)(x + 2)$, qui s'annule en $-2$ et en $2$.`,
        String.raw`Signe d'un trinôme : celui du coefficient de $x^2$ (ici $+$) à l'extérieur des racines, le signe contraire entre elles. Donc $x^2 - 4 \gt 0 \iff x \lt -2$ ou $x \gt 2$.`,
        String.raw`$\mathcal{D}_f = \left]-\infty, -2\right[ \cup \left]2, +\infty\right[$. Contrôle : $x = -3$ donne $\ln 5$ ✔ ; $x = 0$ donne $\ln(-4)$ ✘.`
      ],
      choices: [String.raw`$\left]2, +\infty\right[$`, String.raw`$\left]-2, 2\right[$`, String.raw`$\left]-\infty, -2\right[ \cup \left]2, +\infty\right[$`, String.raw`$\mathbb{R}\setminus\{-2, 2\}$`], answer: 2,
      explain: String.raw`Le logarithme n'est défini que pour un argument <b>strictement positif</b> : il faut $x^2 - 4 \gt 0$, c'est-à-dire $(x-2)(x+2) \gt 0$. Un trinôme est du signe de son coefficient dominant (ici positif) à l'extérieur de ses racines $-2$ et $2$. Donc $x \lt -2$ ou $x \gt 2$, soit $\mathcal{D}_f = \left]-\infty, -2\right[ \cup \left]2, +\infty\right[$.`,
      why: { 0: String.raw`Tu as oublié les $x \lt -2$ : pour $x = -3$, $x^2 - 4 = 5 \gt 0$, donc $f(-3) = \ln 5$ existe. Le carré rend aussi les grands négatifs admissibles.`, 1: String.raw`C'est l'intervalle où $x^2 - 4 \lt 0$ : $\ln$ n'y est pas défini (par exemple $x = 0$ donnerait $\ln(-4)$).`, 3: String.raw`Il ne suffit pas que $x^2 - 4 \neq 0$ : il faut $x^2 - 4 \gt 0$. Sur $\left]-2, 2\right[$ l'argument est négatif.` },
      rule: String.raw`$\ln u$ existe $\iff u \gt 0$ ; $x^2 - a^2 \gt 0 \iff |x| \gt a$.` },
    { id: 'm3-q-006', level: 1, q: String.raw`Dérivée de $x \mapsto \ln(u(x))$ (avec $u \gt 0$) :`,
      topic: 'Dérivée de ln(u)', sec: 'm3-s-ln',
      steps: [
        String.raw`Rappel : la dérivée d'une composée $g\big(u(x)\big)$ est $u'(x)\times g'\big(u(x)\big)$ : on dérive « l'extérieur » en gardant l'intérieur, puis on multiplie par la dérivée de l'intérieur.`,
        String.raw`Ici $g = \ln$ et $\ln'(t) = \frac{1}{t}$, donc $\ln'\big(u(x)\big) = \frac{1}{u(x)}$.`,
        String.raw`On multiplie par $u'(x)$ : $\big(\ln u\big)' = u'\times\frac{1}{u} = \frac{u'}{u}$.`,
        String.raw`Exemple : $u = x^2 + 1$, $u' = 2x$, donc $\big(\ln(x^2+1)\big)' = \frac{2x}{x^2+1}$.`
      ],
      choices: [String.raw`$\frac{1}{u}$`, String.raw`$\frac{u'}{u}$`, String.raw`$u'\ln u$`, String.raw`$\frac{u'}{u^2}$`], answer: 1,
      explain: String.raw`$x \mapsto \ln(u(x))$ est une composée : on applique $(g \circ u)' = u' \times g'(u)$ avec $g = \ln$ et $g'(t) = \frac{1}{t}$. On obtient $u'(x)\times\frac{1}{u(x)} = \frac{u'(x)}{u(x)}$. Exemple : $\left(\ln(x^2+1)\right)' = \frac{2x}{x^2+1}$, où le $2x$ est la dérivée de l'intérieur.`,
      why: { 0: String.raw`Il manque la dérivée de l'intérieur $u'$ : la dérivée d'une composée est toujours multipliée par $u'$. Par exemple $(\ln(2x))' = \frac{2}{2x} = \frac{1}{x}$, pas $\frac{1}{2x}$.`, 2: String.raw`$\ln(u)$ n'est pas un produit : on ne multiplie pas $u'$ par $\ln u$. Avec $u = x$, on trouverait $\ln x$ au lieu de $\ln'(x) = \frac{1}{x}$.`, 3: String.raw`Le carré est en trop : avec $u = x$, on trouverait $\frac{1}{x^2}$ au lieu de $\frac{1}{x}$. (C'est $-\frac{u'}{u^2}$ qui est la dérivée de $\frac{1}{u}$.)` },
      rule: String.raw`$(\ln u)' = \frac{u'}{u}$ et $(\mathrm{e}^u)' = u'\mathrm{e}^u$.` },
    { id: 'm3-q-007', level: 1, q: String.raw`$\displaystyle\lim_{x\to+\infty} x^{10}\mathrm{e}^{-x} = $`,
      topic: 'Croissances comparées', sec: 'm3-s-puissances',
      steps: [
        String.raw`Rappel : en $+\infty$, l'exponentielle croît plus vite que n'importe quelle puissance de $x$ (croissances comparées) : $\frac{x^a}{\mathrm{e}^x} \to 0$ pour tout réel $a$.`,
        String.raw`On réécrit : $x^{10}\mathrm{e}^{-x} = \frac{x^{10}}{\mathrm{e}^x}$, forme $\frac{\infty}{\infty}$, indéterminée a priori.`,
        String.raw`Le théorème s'applique avec $a = 10$ : la limite vaut $0$.`,
        String.raw`Ordre de grandeur : en $x = 100$, $x^{10} = 10^{20}$ alors que $\mathrm{e}^{100} \approx 2{,}7\times 10^{43}$ ; le quotient est minuscule.`
      ],
      choices: [String.raw`$+\infty$`, String.raw`$0$`, String.raw`$1$`, String.raw`On ne peut pas conclure`], answer: 1,
      explain: String.raw`On écrit $x^{10}\mathrm{e}^{-x} = \frac{x^{10}}{\mathrm{e}^x}$ : c'est une forme indéterminée $\frac{\infty}{\infty}$ (ou $\infty \times 0$). Le théorème des croissances comparées affirme que $\frac{x^a}{\mathrm{e}^x} \to 0$ en $+\infty$ pour tout réel $a$ : l'exponentielle l'emporte sur n'importe quelle puissance. La limite vaut donc $0$, même si la fonction prend de très grandes valeurs autour de son maximum ($x = 10$).`,
      why: { 0: String.raw`$x^{10}$ devient grand, mais $\mathrm{e}^x$ croît beaucoup plus vite : après son maximum en $x = 10$, la fonction décroît vers 0.`, 2: String.raw`On obtiendrait 1 seulement si numérateur et dénominateur étaient équivalents ; ici $\mathrm{e}^x$ écrase $x^{10}$ et le quotient tend vers 0.`, 3: String.raw`La forme $\infty \times 0$ est indéterminée a priori, mais le théorème des croissances comparées permet justement de conclure : la limite est 0.` },
      rule: String.raw`Croissances comparées : $\displaystyle\lim_{x\to+\infty}\frac{x^a}{\mathrm{e}^x} = 0$ pour tout $a$ réel.` },
    { id: 'm3-q-008', level: 2, q: String.raw`$\displaystyle\lim_{x\to 0^+} x\ln x = $`,
      topic: 'Croissances comparées en 0', sec: 'm3-s-puissances',
      steps: [
        String.raw`Rappel : en $0^+$, une puissance positive de $x$ l'emporte sur le logarithme : $x^a\ln x \to 0$ pour tout $a \gt 0$.`,
        String.raw`Ici $x \to 0$ et $\ln x \to -\infty$ : forme $0\times\infty$, indéterminée a priori.`,
        String.raw`On applique le théorème avec $a = 1$ : $x\ln x \to 0$.`,
        String.raw`Signe : pour $0 \lt x \lt 1$, $\ln x \lt 0$, donc $x\ln x$ tend vers 0 par valeurs négatives (par exemple $0{,}001\ln 0{,}001 \approx -0{,}0069$).`
      ],
      choices: [String.raw`$-\infty$`, String.raw`$+\infty$`, String.raw`$1$`, String.raw`$0$`], answer: 3,
      explain: String.raw`En $0^+$, $x \to 0$ et $\ln x \to -\infty$ : c'est une forme indéterminée $0 \times \infty$. Le théorème des croissances comparées en $0^+$ dit que $x^a\ln x \to 0$ pour tout $a \gt 0$ : la puissance « écrase » le logarithme. Avec $a = 1$, $x\ln x \to 0$ (par valeurs négatives, car $\ln x \lt 0$ pour $x \lt 1$). Exemple numérique : $0{,}001\times\ln 0{,}001 \approx -0{,}0069$.`,
      why: { 0: String.raw`$\ln x \to -\infty$, mais le facteur $x \to 0$ l'emporte : numériquement $0{,}001\ln 0{,}001 \approx -0{,}007$, très proche de 0.`, 1: String.raw`Le produit est négatif pour $0 \lt x \lt 1$ (car $\ln x \lt 0$) : il ne peut pas tendre vers $+\infty$. Il tend vers 0.`, 2: String.raw`Confusion avec $x^x = \mathrm{e}^{x\ln x}$, qui tend vers $\mathrm{e}^0 = 1$. Ici on demande l'exposant $x\ln x$ lui-même, qui tend vers 0.` },
      rule: String.raw`Croissances comparées en $0^+$ : $x^a\ln x \to 0$ pour tout $a \gt 0$.` },
    { id: 'm3-q-009', level: 1, q: String.raw`Laquelle de ces fonctions est paire ?`,
      topic: 'Parité des fonctions hyperboliques', sec: 'm3-s-hyperboliques',
      steps: [
        String.raw`Rappel : $f$ est paire si $f(-x) = f(x)$ (courbe symétrique par rapport à l'axe des ordonnées), impaire si $f(-x) = -f(x)$. Définitions : $\operatorname{ch} x = \frac{\mathrm{e}^x + \mathrm{e}^{-x}}{2}$, $\operatorname{sh} x = \frac{\mathrm{e}^x - \mathrm{e}^{-x}}{2}$.`,
        String.raw`$\operatorname{ch}(-x) = \frac{\mathrm{e}^{-x} + \mathrm{e}^{x}}{2}$ : c'est la même somme dans l'autre ordre, donc $\operatorname{ch}(-x) = \operatorname{ch} x$ : <b>paire</b>.`,
        String.raw`$\operatorname{sh}(-x) = \frac{\mathrm{e}^{-x} - \mathrm{e}^{x}}{2} = -\operatorname{sh} x$ : impaire ; $\operatorname{th} = \frac{\operatorname{sh}}{\operatorname{ch}}$ est donc impaire ; $\exp$ n'est ni paire ni impaire.`
      ],
      choices: [String.raw`$\operatorname{sh}$`, String.raw`$\operatorname{th}$`, String.raw`$\operatorname{ch}$`, String.raw`$\exp$`], answer: 2,
      explain: String.raw`Une fonction définie sur un domaine symétrique est paire si $f(-x) = f(x)$. Pour $\operatorname{ch}$ : $\operatorname{ch}(-x) = \frac{\mathrm{e}^{-x} + \mathrm{e}^{x}}{2} = \operatorname{ch} x$, car on échange simplement les deux termes de la somme. Sa courbe (la « chaînette ») est symétrique par rapport à l'axe des ordonnées, avec un minimum $\operatorname{ch} 0 = 1$.`,
      why: { 0: String.raw`$\operatorname{sh}(-x) = \frac{\mathrm{e}^{-x} - \mathrm{e}^{x}}{2} = -\operatorname{sh} x$ : la fonction est impaire, pas paire.`, 1: String.raw`$\operatorname{th} = \frac{\operatorname{sh}}{\operatorname{ch}}$ est un quotient impaire / paire, donc impaire : $\operatorname{th}(-x) = -\operatorname{th} x$.`, 3: String.raw`$\exp(-1) = \frac{1}{\mathrm{e}}$ n'est ni égal à $\exp(1) = \mathrm{e}$, ni à $-\mathrm{e}$ : ni paire ni impaire. ($\operatorname{ch}$ et $\operatorname{sh}$ sont justement ses parties paire et impaire.)` },
      rule: String.raw`$f$ paire : $f(-x) = f(x)$ ; impaire : $f(-x) = -f(x)$. $\operatorname{ch}$ est paire, $\operatorname{sh}$ et $\operatorname{th}$ sont impaires.` },
    { id: 'm3-q-010', level: 1, q: String.raw`Pour tout réel $x$, $\operatorname{ch}^2 x - \operatorname{sh}^2 x = $`,
      topic: 'Relation fondamentale hyperbolique', sec: 'm3-s-hyperboliques',
      steps: [
        String.raw`Rappel : $\operatorname{ch} x = \frac{\mathrm{e}^x + \mathrm{e}^{-x}}{2}$ et $\operatorname{sh} x = \frac{\mathrm{e}^x - \mathrm{e}^{-x}}{2}$, donc $\operatorname{ch} x + \operatorname{sh} x = \mathrm{e}^x$ et $\operatorname{ch} x - \operatorname{sh} x = \mathrm{e}^{-x}$.`,
        String.raw`Identité remarquable $A^2 - B^2 = (A - B)(A + B)$ : $\operatorname{ch}^2 x - \operatorname{sh}^2 x = (\operatorname{ch} x - \operatorname{sh} x)(\operatorname{ch} x + \operatorname{sh} x)$.`,
        String.raw`On remplace : $\mathrm{e}^{-x}\times\mathrm{e}^{x} = \mathrm{e}^{0} = 1$, pour tout réel $x$.`,
        String.raw`Contrôle en $x = 0$ : $\operatorname{ch} 0 = 1$, $\operatorname{sh} 0 = 0$ et $1^2 - 0^2 = 1$ ✔.`
      ],
      choices: [String.raw`$1$`, String.raw`$-1$`, String.raw`$\operatorname{ch}(2x)$`, String.raw`$0$`], answer: 0,
      explain: String.raw`On factorise la différence de carrés : $\operatorname{ch}^2 x - \operatorname{sh}^2 x = (\operatorname{ch} x - \operatorname{sh} x)(\operatorname{ch} x + \operatorname{sh} x)$. Or $\operatorname{ch} x + \operatorname{sh} x = \mathrm{e}^{x}$ et $\operatorname{ch} x - \operatorname{sh} x = \mathrm{e}^{-x}$. Le produit vaut $\mathrm{e}^{-x}\,\mathrm{e}^{x} = 1$ pour tout réel $x$. C'est l'analogue hyperbolique de $\cos^2 + \sin^2 = 1$, avec un signe moins.`,
      why: { 1: String.raw`Signe inversé : c'est $\operatorname{sh}^2 x - \operatorname{ch}^2 x$ qui vaut $-1$. Test en $x = 0$ : $1 - 0 = 1$.`, 2: String.raw`$\operatorname{ch}(2x) = \operatorname{ch}^2 x + \operatorname{sh}^2 x$, avec un $+$ ; ce n'est pas une constante (en $x = 1$, $\operatorname{ch} 2 \approx 3{,}76$).`, 3: String.raw`En $x = 0$ : $\operatorname{ch}^2 0 - \operatorname{sh}^2 0 = 1 - 0 = 1 \neq 0$.` },
      rule: String.raw`$\operatorname{ch}^2 x - \operatorname{sh}^2 x = 1$ ; $\operatorname{ch} x \pm \operatorname{sh} x = \mathrm{e}^{\pm x}$.` },
    { id: 'm3-q-011', level: 1, q: String.raw`Dérivée de $\operatorname{ch}$ :`,
      topic: 'Dérivées hyperboliques', sec: 'm3-s-hyperboliques',
      steps: [
        String.raw`Rappel : $\operatorname{ch} x = \frac{\mathrm{e}^x + \mathrm{e}^{-x}}{2}$, et $(\mathrm{e}^{-x})' = -\mathrm{e}^{-x}$ (dérivée de $\mathrm{e}^{u}$ avec $u = -x$, $u' = -1$).`,
        String.raw`On dérive terme à terme : $\operatorname{ch}'(x) = \frac{\mathrm{e}^x - \mathrm{e}^{-x}}{2}$.`,
        String.raw`On reconnaît $\operatorname{sh} x$ : $\operatorname{ch}' = \operatorname{sh}$, sans signe moins (contrairement à $\cos' = -\sin$).`
      ],
      choices: [String.raw`$-\operatorname{sh}$`, String.raw`$\operatorname{sh}$`, String.raw`$\operatorname{ch}$`, String.raw`$\frac{1}{\operatorname{ch}^2}$`], answer: 1,
      explain: String.raw`On dérive la définition terme à terme : $(\mathrm{e}^x)' = \mathrm{e}^x$ et $(\mathrm{e}^{-x})' = -\mathrm{e}^{-x}$. Donc $\operatorname{ch}'(x) = \frac{\mathrm{e}^x - \mathrm{e}^{-x}}{2} = \operatorname{sh} x$. De même $\operatorname{sh}' = \operatorname{ch}$ : contrairement à $\cos' = -\sin$, il n'y a <b>aucun signe moins</b> en hyperbolique.`,
      why: { 0: String.raw`Réflexe venu de $\cos' = -\sin$ : en hyperbolique, pas de signe moins. D'ailleurs $\operatorname{ch}$ est croissante sur $\left[0, +\infty\right[$, alors que $-\operatorname{sh}$ y est négative.`, 2: String.raw`$\operatorname{ch}$ n'est pas sa propre dérivée (c'est $\exp$ qui l'est) : le terme $\mathrm{e}^{-x}$ change de signe quand on le dérive.`, 3: String.raw`$\frac{1}{\operatorname{ch}^2}$ est la dérivée de $\operatorname{th}$, pas de $\operatorname{ch}$.` },
      rule: String.raw`$\operatorname{ch}' = \operatorname{sh}$, $\operatorname{sh}' = \operatorname{ch}$, $\operatorname{th}' = 1 - \operatorname{th}^2 = \frac{1}{\operatorname{ch}^2}$.` },
    { id: 'm3-q-012', level: 2, q: String.raw`Pour tout réel $x$, $\operatorname{argsh} x = $`,
      topic: 'Réciproque de sh', sec: 'm3-s-hyperboliques',
      steps: [
        String.raw`Rappel : $\operatorname{argsh}$ est la réciproque de $\operatorname{sh}$ : $y = \operatorname{argsh} x \iff \operatorname{sh} y = x$. Pour l'expliciter, on résout cette équation d'inconnue $y$.`,
        String.raw`$\frac{\mathrm{e}^y - \mathrm{e}^{-y}}{2} = x$ ; on multiplie par $2\mathrm{e}^y$ : $\mathrm{e}^{2y} - 1 = 2x\mathrm{e}^y$, soit $Y^2 - 2xY - 1 = 0$ avec $Y = \mathrm{e}^y \gt 0$.`,
        String.raw`Discriminant réduit : $\Delta' = x^2 + 1$, d'où $Y = x \pm\sqrt{x^2+1}$. Comme $\sqrt{x^2+1} \gt |x|$, seule $x + \sqrt{x^2+1}$ est positive.`,
        String.raw`$\mathrm{e}^y = x + \sqrt{x^2+1} \iff y = \ln\left(x + \sqrt{x^2+1}\right)$, défini pour tout $x \in \mathbb{R}$.`
      ],
      choices: [String.raw`$\ln\left(x + \sqrt{x^2 - 1}\right)$`, String.raw`$\frac{1}{2}\ln\frac{1+x}{1-x}$`, String.raw`$\ln\left(x + \sqrt{x^2 + 1}\right)$`, String.raw`$\ln\left(\sqrt{x^2+1} - x\right)$`], answer: 2,
      explain: String.raw`On cherche $y$ tel que $\operatorname{sh} y = x$, soit $\frac{\mathrm{e}^y - \mathrm{e}^{-y}}{2} = x$. En multipliant par $2\mathrm{e}^y$ : $\mathrm{e}^{2y} - 2x\mathrm{e}^y - 1 = 0$, équation du second degré en $Y = \mathrm{e}^y$. Ses racines sont $Y = x \pm\sqrt{x^2+1}$ ; seule $x + \sqrt{x^2+1}$ est positive (car $\sqrt{x^2+1} \gt |x|$). Donc $y = \ln\left(x + \sqrt{x^2+1}\right)$, défini pour tout réel $x$.`,
      why: { 0: String.raw`C'est $\operatorname{argch} x$, défini seulement pour $x \geq 1$ (sinon $\sqrt{x^2 - 1}$ n'existe pas), alors que $\operatorname{argsh}$ est défini sur $\mathbb{R}$.`, 1: String.raw`C'est $\operatorname{argth} x$, défini seulement pour $|x| \lt 1$.`, 3: String.raw`$\left(\sqrt{x^2+1} - x\right)\left(\sqrt{x^2+1} + x\right) = 1$, donc $\ln\left(\sqrt{x^2+1} - x\right) = -\ln\left(\sqrt{x^2+1} + x\right) = -\operatorname{argsh} x$ : erreur de signe.` },
      rule: String.raw`$\operatorname{argsh} x = \ln\left(x + \sqrt{x^2+1}\right)$ ; $\operatorname{argch} x = \ln\left(x + \sqrt{x^2-1}\right)$ pour $x \geq 1$.` },
    { id: 'm3-q-013', level: 1, q: String.raw`Ensemble de définition de $\operatorname{argch}$ :`,
      topic: 'Domaine de argch', sec: 'm3-s-hyperboliques',
      steps: [
        String.raw`Rappel : la réciproque $f^{-1}$ d'une bijection $f : I \to J$ est définie sur $J$, l'ensemble des valeurs prises par $f$.`,
        String.raw`$\operatorname{ch}$ est paire, donc pas injective sur $\mathbb{R}$ ; on la restreint à $\left[0, +\infty\right[$, où elle est continue et strictement croissante.`,
        String.raw`Valeurs prises : $\operatorname{ch} 0 = 1$ et $\operatorname{ch} x \to +\infty$, donc $\operatorname{ch}$ envoie $\left[0, +\infty\right[$ sur $\left[1, +\infty\right[$.`,
        String.raw`Donc $\operatorname{argch}$ est définie sur $\left[1, +\infty\right[$ et à valeurs dans $\left[0, +\infty\right[$.`
      ],
      choices: [String.raw`$\mathbb{R}$`, String.raw`$\left[1, +\infty\right[$`, String.raw`$\left]-1, 1\right[$`, String.raw`$\left[0, +\infty\right[$`], answer: 1,
      explain: String.raw`$\operatorname{ch}$ n'est pas injective sur $\mathbb{R}$ (elle est paire) : on la restreint à $\left[0, +\infty\right[$, où elle est continue et strictement croissante de $\operatorname{ch} 0 = 1$ vers $+\infty$. Elle réalise alors une bijection de $\left[0, +\infty\right[$ sur $\left[1, +\infty\right[$. La réciproque $\operatorname{argch}$ est donc définie sur l'ensemble d'arrivée $\left[1, +\infty\right[$, et prend ses valeurs dans $\left[0, +\infty\right[$.`,
      why: { 0: String.raw`$\operatorname{ch} y \geq 1$ pour tout $y$ : l'équation $\operatorname{ch} y = 0$ (par exemple) n'a pas de solution, donc $\operatorname{argch} 0$ n'existe pas.`, 2: String.raw`$\left]-1, 1\right[$ est le domaine de $\operatorname{argth}$, car $\operatorname{th}$ prend ses valeurs dans $\left]-1, 1\right[$.`, 3: String.raw`$\left[0, +\infty\right[$ est l'ensemble des <b>valeurs</b> de $\operatorname{argch}$ (l'intervalle où l'on a restreint $\operatorname{ch}$), pas son domaine.` },
      rule: String.raw`Domaine de $f^{-1}$ = ensemble image de $f$ ; $\operatorname{ch} : \left[0, +\infty\right[ \to \left[1, +\infty\right[$.` },
    { id: 'm3-q-014', level: 1, q: String.raw`Un amplificateur multiplie la tension par 10. Son gain vaut :`,
      topic: 'Gain en décibels', sec: 'm3-s-log-db',
      steps: [
        String.raw`Rappel : le décibel mesure un rapport sur une échelle logarithmique (logarithme décimal, $\log 10^n = n$). Pour des tensions : $G_{\mathrm{dB}} = 20\log\left|\frac{V_s}{V_e}\right|$.`,
        String.raw`Ici $\frac{V_s}{V_e} = 10$ et $\log 10 = 1$.`,
        String.raw`$G = 20\times 1 = 20$ dB.`
      ],
      choices: [String.raw`$10$ dB`, String.raw`$20$ dB`, String.raw`$1$ dB`, String.raw`$100$ dB`], answer: 1,
      explain: String.raw`Pour un rapport de <b>tensions</b>, le gain en décibels est $G_{\mathrm{dB}} = 20\log\left|\frac{V_s}{V_e}\right|$, avec le logarithme décimal. Ici $\frac{V_s}{V_e} = 10$ et $\log 10 = 1$, donc $G = 20\times 1 = 20$ dB. Le facteur 20 (et non 10) vient de ce que la puissance est proportionnelle au carré de la tension : $10\log(V^2) = 20\log V$.`,
      why: { 0: String.raw`$10\log$ s'applique aux rapports de <b>puissances</b> ; pour une tension, c'est $20\log$. Une puissance multipliée par 10 donnerait bien 10 dB.`, 2: String.raw`$\log 10 = 1$, mais il faut encore multiplier par 20 : $G = 20\log 10 = 20$ dB.`, 3: String.raw`100 est le rapport des puissances ($10^2$), pas un gain en dB. Le dB est une échelle logarithmique : $20\log 10 = 20$.` },
      rule: String.raw`$G_{\mathrm{dB}} = 20\log\left|\frac{V_s}{V_e}\right| = 10\log\frac{P_s}{P_e}$.` },
    { id: 'm3-q-015', level: 2, q: String.raw`À la fréquence de coupure d'un filtre, $|H| = \frac{H_0}{\sqrt{2}}$. Par rapport au gain maximal, le gain a chuté de :`,
      topic: 'Coupure à -3 dB', sec: 'm3-s-log-db',
      steps: [
        String.raw`Rappel : une variation de gain en dB vaut $20\log$ du rapport des modules : $\Delta G = 20\log\frac{|H|}{H_0}$.`,
        String.raw`Ici $\frac{|H|}{H_0} = \frac{1}{\sqrt{2}} = 2^{-1/2}$, donc $\log\frac{1}{\sqrt{2}} = -\frac{1}{2}\log 2$.`,
        String.raw`$\Delta G = 20\times\left(-\frac{1}{2}\log 2\right) = -10\log 2 \approx -10\times 0{,}301 = -3{,}01$ dB.`,
        String.raw`Le gain a donc chuté d'environ $3$ dB ; la puissance, proportionnelle à $|H|^2$, est divisée par 2.`
      ],
      choices: [String.raw`$6$ dB`, String.raw`$3$ dB`, String.raw`$\frac{1}{\sqrt{2}}$ dB`, String.raw`$20$ dB`], answer: 1,
      explain: String.raw`La variation de gain vaut $20\log\frac{|H|}{H_0} = 20\log\frac{1}{\sqrt{2}}$. Comme $\frac{1}{\sqrt{2}} = 2^{-1/2}$, on obtient $20\times\left(-\frac{1}{2}\log 2\right) = -10\log 2$. Avec $\log 2 \approx 0{,}301$, cela fait $\approx -3{,}01$ dB : d'où le nom de « fréquence de coupure à $-3$ dB ». En puissance, cela correspond à une puissance divisée par 2.`,
      why: { 0: String.raw`$-6$ dB correspond à une tension divisée par 2 ($20\log 2 \approx 6$), pas par $\sqrt{2}$.`, 2: String.raw`Le dB est logarithmique : on ne reporte pas le rapport $\frac{1}{\sqrt{2}}$ tel quel, on calcule $20\log\frac{1}{\sqrt{2}} \approx -3$.`, 3: String.raw`$-20$ dB correspond à une tension divisée par 10 ($20\log 10 = 20$), chute bien plus forte.` },
      rule: String.raw`$|H| = \frac{H_0}{\sqrt{2}} \iff$ chute de $10\log 2 \approx 3$ dB.` },
    { id: 'm3-q-016', level: 1, q: String.raw`Doubler une tension correspond à un gain d'environ :`,
      topic: 'Gain en décibels', sec: 'm3-s-log-db',
      steps: [
        String.raw`Rappel : en tension, $G_{\mathrm{dB}} = 20\log\left|\frac{V_s}{V_e}\right|$, et $\log 2 \approx 0{,}301$ (car $10^{0{,}301} \approx 2$).`,
        String.raw`Doubler la tension : $\frac{V_s}{V_e} = 2$.`,
        String.raw`$G = 20\log 2 \approx 20\times 0{,}301 = 6{,}02$ dB, soit environ $+6$ dB.`
      ],
      choices: [String.raw`$+3$ dB`, String.raw`$+2$ dB`, String.raw`$+6$ dB`, String.raw`$+20$ dB`], answer: 2,
      explain: String.raw`Doubler la tension correspond au rapport $\frac{V_s}{V_e} = 2$, donc $G = 20\log 2$. Avec $\log 2 \approx 0{,}301$, on trouve $G \approx 6{,}02$ dB. Repères utiles en tension : $\times 2 \approx +6$ dB, $\times 10 = +20$ dB, $\times\sqrt{2} \approx +3$ dB ; et les dB s'additionnent quand les rapports se multiplient.`,
      why: { 0: String.raw`$+3$ dB correspond à doubler la <b>puissance</b> ($10\log 2 \approx 3$). Doubler la tension quadruple la puissance, d'où $+6$ dB.`, 1: String.raw`Le gain en dB n'est pas le rapport lui-même : il faut prendre $20\log 2 \approx 6$, pas « 2 ».`, 3: String.raw`$+20$ dB correspond à une tension multipliée par 10, pas par 2.` },
      rule: String.raw`$20\log 2 \approx 6$ dB ; $10\log 2 \approx 3$ dB ; $20\log 10 = 20$ dB.` },
    { id: 'm3-q-017', level: 1, q: String.raw`Dans un repère orthonormé, la courbe de $f^{-1}$ est la symétrique de celle de $f$ par rapport :`,
      topic: 'Courbe de la réciproque', sec: 'm3-s-bijection',
      steps: [
        String.raw`Rappel : si $f$ est une bijection, $f^{-1}$ « défait » $f$ : $f(a) = b \iff f^{-1}(b) = a$.`,
        String.raw`Le point $(a, b)$ est donc sur $\mathcal{C}_f$ si et seulement si le point $(b, a)$ est sur $\mathcal{C}_{f^{-1}}$ : on échange abscisse et ordonnée.`,
        String.raw`Dans un repère orthonormé, $(a, b) \mapsto (b, a)$ est la symétrie par rapport à la droite $y = x$. Exemple : les courbes de $\exp$ et de $\ln$.`
      ],
      choices: [String.raw`à l'axe des abscisses`, String.raw`à l'origine`, String.raw`à l'axe des ordonnées`, String.raw`à la droite $y = x$`], answer: 3,
      explain: String.raw`Si $f(a) = b$, alors $f^{-1}(b) = a$ : le point $(a, b)$ est sur la courbe de $f$ si et seulement si le point $(b, a)$ est sur celle de $f^{-1}$. Échanger abscisse et ordonnée revient, dans un repère orthonormé, à faire la symétrie par rapport à la première bissectrice $y = x$. Exemple : les courbes de $\exp$ et de $\ln$ sont symétriques par rapport à cette droite.`,
      why: { 0: String.raw`La symétrie par rapport à l'axe des abscisses, $(x, y) \mapsto (x, -y)$, donne la courbe de $-f$.`, 1: String.raw`La symétrie centrale $(x, y) \mapsto (-x, -y)$ donne la courbe de $x \mapsto -f(-x)$.`, 2: String.raw`La symétrie par rapport à l'axe des ordonnées, $(x, y) \mapsto (-x, y)$, donne la courbe de $x \mapsto f(-x)$.` },
      rule: String.raw`$\mathcal{C}_{f^{-1}}$ est la symétrique de $\mathcal{C}_f$ par rapport à la droite $y = x$.` },
    { id: 'm3-q-018', level: 1, q: String.raw`Pour $x \gt 0$ et $a$ réel, $x^a$ est défini par :`,
      topic: 'Puissances réelles', sec: 'm3-s-puissances',
      steps: [
        String.raw`Rappel : pour un exposant non entier (par exemple $x^{\sqrt{2}}$), on ne peut plus « multiplier $x$ par lui-même » : on <b>définit</b> la puissance grâce à $\exp$ et $\ln$.`,
        String.raw`Pour $x \gt 0$, $x = \mathrm{e}^{\ln x}$. On élève à la puissance $a$ en multipliant l'exposant : $x^a = \left(\mathrm{e}^{\ln x}\right)^a = \mathrm{e}^{a\ln x}$.`,
        String.raw`Contrôle avec $x = 2$, $a = 3$ : $\mathrm{e}^{3\ln 2} = \mathrm{e}^{\ln 8} = 8 = 2^3$ ✔.`
      ],
      choices: [String.raw`$\mathrm{e}^{x\ln a}$`, String.raw`$\mathrm{e}^{a\ln x}$`, String.raw`$a\ln x$`, String.raw`$(\ln x)^a$`], answer: 1,
      explain: String.raw`Pour $x \gt 0$, on écrit $x = \mathrm{e}^{\ln x}$, puis on élève à la puissance $a$ : $x^a = \left(\mathrm{e}^{\ln x}\right)^a = \mathrm{e}^{a\ln x}$. C'est la <b>définition</b> de $x^a$ pour un exposant réel quelconque, et elle explique pourquoi on impose $x \gt 0$. Vérification avec $x = 2$, $a = 3$ : $\mathrm{e}^{3\ln 2} = \mathrm{e}^{\ln 8} = 8 = 2^3$.`,
      why: { 0: String.raw`$\mathrm{e}^{x\ln a} = a^x$ est l'exponentielle de base $a$ : on a échangé les rôles de la base et de l'exposant.`, 2: String.raw`$a\ln x = \ln(x^a)$ est le logarithme de $x^a$, pas $x^a$ lui-même : il manque l'exponentielle.`, 3: String.raw`$(\ln x)^a$ est une puissance du logarithme, sans rapport : pour $x = 2$, $a = 3$, $(\ln 2)^3 \approx 0{,}33 \neq 8$.` },
      rule: String.raw`$x^a = \mathrm{e}^{a\ln x}$ pour $x \gt 0$ et $a \in \mathbb{R}$.` },
    { id: 'm3-q-019', level: 2, q: String.raw`Dérivée de $x \mapsto 3^x$ :`,
      topic: 'Dérivée de a puissance x', sec: 'm3-s-puissances',
      steps: [
        String.raw`Rappel : pour $a \gt 0$, $a^x = \mathrm{e}^{x\ln a}$ (exponentielle de base $a$), et $(\mathrm{e}^{u})' = u'\mathrm{e}^{u}$.`,
        String.raw`Ici $3^x = \mathrm{e}^{x\ln 3}$ : c'est $\mathrm{e}^{u}$ avec $u = x\ln 3$, donc $u' = \ln 3$ (une constante).`,
        String.raw`$(3^x)' = \ln 3\cdot\mathrm{e}^{x\ln 3} = \ln 3\cdot 3^x$.`
      ],
      choices: [String.raw`$x\,3^{x-1}$`, String.raw`$3^x$`, String.raw`$\frac{3^x}{\ln 3}$`, String.raw`$\ln 3\cdot 3^x$`], answer: 3,
      explain: String.raw`L'exposant étant la variable, on repasse à l'exponentielle : $3^x = \mathrm{e}^{x\ln 3}$. C'est $\mathrm{e}^{u}$ avec $u = x\ln 3$ et $u' = \ln 3$ (une constante). Donc $(3^x)' = \ln 3\,\mathrm{e}^{x\ln 3} = \ln 3\cdot 3^x$. Comme $\ln 3 \approx 1{,}1 \gt 0$, la fonction est bien croissante.`,
      why: { 0: String.raw`$(x^a)' = ax^{a-1}$ vaut pour un exposant <b>constant</b> ; ici c'est la base qui est constante et l'exposant qui varie.`, 1: String.raw`Seule la base $\mathrm{e}$ vérifie $f' = f$ ; pour la base 3, il manque le facteur $\ln 3$ (qui ne vaut 1 que pour la base $\mathrm{e}$).`, 2: String.raw`On <b>multiplie</b> par $\ln 3$ pour dériver ; c'est pour une <b>primitive</b> qu'on divise : $\int 3^x\,\mathrm{d}x = \frac{3^x}{\ln 3} + C$.` },
      rule: String.raw`$(a^x)' = \ln a\cdot a^x$, car $a^x = \mathrm{e}^{x\ln a}$.` },
    { id: 'm3-q-020', level: 1, q: String.raw`Partie entière : $E(-1{,}2) = $`,
      topic: 'Partie entière', sec: 'm3-s-abs-ent',
      steps: [
        String.raw`Rappel : la partie entière $E(x)$ est le plus grand entier inférieur ou égal à $x$ : l'entier $n$ tel que $n \leq x \lt n + 1$ (on arrondit toujours vers le bas).`,
        String.raw`On place $-1{,}2$ entre deux entiers consécutifs : $-2 \leq -1{,}2 \lt -1$.`,
        String.raw`Donc $E(-1{,}2) = -2$ (et non $-1$, qui est au-dessus de $-1{,}2$).`
      ],
      choices: [String.raw`$-1$`, String.raw`$-2$`, String.raw`$1$`, String.raw`$-1{,}2$`], answer: 1,
      explain: String.raw`La partie entière $E(x)$ est le plus grand entier <b>inférieur ou égal</b> à $x$, c'est-à-dire l'unique entier $n$ tel que $n \leq x \lt n+1$. Sur la droite réelle, $-1{,}2$ est situé entre $-2$ et $-1$ : $-2 \leq -1{,}2 \lt -1$. Donc $E(-1{,}2) = -2$. Pour un négatif non entier, ce n'est pas la troncature (qui donnerait $-1$).`,
      why: { 0: String.raw`$-1 \gt -1{,}2$ : ce n'est pas un entier inférieur à $-1{,}2$. La partie entière arrondit toujours vers le bas ; enlever les décimales (troncature) ne marche que pour les positifs.`, 2: String.raw`La partie entière d'un nombre négatif est négative : tu as perdu le signe.`, 3: String.raw`$E(x)$ est toujours un <b>entier</b>, et $-1{,}2$ n'en est pas un.` },
      rule: String.raw`$E(x) = n \iff n \in \mathbb{Z}$ et $n \leq x \lt n + 1$.` },
    { id: 'm3-q-021', level: 1, q: String.raw`$|x - 3| \leq 2 \iff$`,
      topic: 'Inéquation avec valeur absolue', sec: 'm3-s-abs-ent',
      steps: [
        String.raw`Rappel : $|x - a|$ est la distance entre $x$ et $a$, et $|A| \leq r \iff -r \leq A \leq r$.`,
        String.raw`On applique avec $A = x - 3$ et $r = 2$ : $-2 \leq x - 3 \leq 2$.`,
        String.raw`On ajoute 3 aux trois membres (le sens ne change pas) : $1 \leq x \leq 5$, soit $x \in [1, 5]$.`,
        String.raw`Contrôle : $x = 5$ donne $|2| = 2$ ✔ ; $x = 6$ donne $3 \gt 2$ ✘.`
      ],
      choices: [String.raw`$x \in [1, 5]$`, String.raw`$x \in [-5, -1]$`, String.raw`$x \leq 5$`, String.raw`$x \in [-1, 5]$`], answer: 0,
      explain: String.raw`$|x - 3|$ est la distance entre $x$ et $3$ sur la droite réelle. Demander qu'elle soit au plus 2, c'est écrire $-2 \leq x - 3 \leq 2$, puis, en ajoutant 3 partout, $1 \leq x \leq 5$. On obtient l'intervalle $[1, 5]$, centré en 3 et de rayon 2. Vérification : $x = 1$ donne $|1-3| = 2$ (accepté), $x = 0$ donne $3 \gt 2$ (refusé).`,
      why: { 1: String.raw`Erreur de signe sur le centre : $[-5, -1]$ correspond à $|x + 3| \leq 2$, centré en $-3$.`, 2: String.raw`Il manque la contrainte $x \geq 1$ : par exemple $x = -10$ vérifie $x \leq 5$, mais $|-10 - 3| = 13 \gt 2$.`, 3: String.raw`La borne gauche est $3 - 2 = 1$, pas $-1$ : pour $x = 0$, $|0 - 3| = 3 \gt 2$.` },
      rule: String.raw`$|x - a| \leq r \iff a - r \leq x \leq a + r$.` },
    { id: 'm3-q-022', level: 2, q: String.raw`Quelle affirmation est vraie en $+\infty$ ?`,
      topic: 'Croissances comparées', sec: 'm3-s-puissances',
      steps: [
        String.raw`Rappel (croissances comparées en $+\infty$) : pour $a, b \gt 0$, $\frac{(\ln x)^b}{x^a} \to 0$ et $\frac{x^a}{\mathrm{e}^{x}} \to 0$. Hiérarchie : logarithme $\ll$ puissance $\ll$ exponentielle.`,
        String.raw`Choix 0 : $\sqrt{x} = x^{1/2}$ avec $\frac{1}{2} \gt 0$, donc $\frac{\ln x}{\sqrt{x}} \to 0$ : <b>vrai</b>.`,
        String.raw`Choix 1 et 2 : l'exponentielle domine, donc $\frac{x^{100}}{\mathrm{e}^x} \to 0$ et $\frac{\mathrm{e}^x}{x^{1000}} \to +\infty$ : les deux affirmations sont fausses.`,
        String.raw`Choix 3 : $\frac{(\ln x)^5}{x} \to 0$ (avec $b = 5$, $a = 1$) : faux aussi.`
      ],
      choices: [String.raw`$\frac{\ln x}{\sqrt{x}} \to 0$`, String.raw`$\frac{x^{100}}{\mathrm{e}^x} \to +\infty$`, String.raw`$\frac{\mathrm{e}^x}{x^{1000}} \to 0$`, String.raw`$\frac{(\ln x)^5}{x} \to +\infty$`], answer: 0,
      explain: String.raw`Le théorème des croissances comparées affirme qu'en $+\infty$, toute puissance de $\ln x$ est négligeable devant toute puissance positive de $x$, et que toute puissance de $x$ est négligeable devant $\mathrm{e}^x$. Ici $\sqrt{x} = x^{1/2}$ avec $\frac{1}{2} \gt 0$, donc $\frac{\ln x}{\sqrt{x}} \to 0$. Les trois autres affirmations inversent la hiérarchie $\ln x \ll x^a \ll \mathrm{e}^x$.`,
      why: { 1: String.raw`L'exponentielle l'emporte sur toute puissance, même $x^{100}$ : ce quotient tend vers 0, pas vers $+\infty$.`, 2: String.raw`C'est l'inverse : $\mathrm{e}^x$ l'emporte sur $x^{1000}$, donc $\frac{\mathrm{e}^x}{x^{1000}} \to +\infty$.`, 3: String.raw`Toute puissance de $\ln x$ est négligeable devant $x$ : $\frac{(\ln x)^5}{x} \to 0$.` },
      rule: String.raw`En $+\infty$ : $(\ln x)^b \ll x^a \ll \mathrm{e}^{x}$ pour $a, b \gt 0$.` },
    { id: 'm3-q-023', level: 1, q: String.raw`$\displaystyle\lim_{x\to+\infty}\operatorname{th} x = $`,
      topic: 'Limite de th', sec: 'm3-s-hyperboliques',
      steps: [
        String.raw`Rappel : $\operatorname{th} x = \frac{\operatorname{sh} x}{\operatorname{ch} x} = \frac{\mathrm{e}^x - \mathrm{e}^{-x}}{\mathrm{e}^x + \mathrm{e}^{-x}}$.`,
        String.raw`En $+\infty$, c'est une forme $\frac{\infty}{\infty}$ : on factorise par le terme dominant $\mathrm{e}^x$ en haut et en bas : $\operatorname{th} x = \frac{1 - \mathrm{e}^{-2x}}{1 + \mathrm{e}^{-2x}}$.`,
        String.raw`$\mathrm{e}^{-2x} \to 0$, donc $\operatorname{th} x \to \frac{1 - 0}{1 + 0} = 1$ : asymptote horizontale $y = 1$.`
      ],
      choices: [String.raw`$+\infty$`, String.raw`$0$`, String.raw`$1$`, String.raw`$\mathrm{e}$`], answer: 2,
      explain: String.raw`On factorise par $\mathrm{e}^x$ en haut et en bas : $\operatorname{th} x = \frac{\mathrm{e}^x - \mathrm{e}^{-x}}{\mathrm{e}^x + \mathrm{e}^{-x}} = \frac{1 - \mathrm{e}^{-2x}}{1 + \mathrm{e}^{-2x}}$. Quand $x \to +\infty$, $\mathrm{e}^{-2x} \to 0$, donc $\operatorname{th} x \to \frac{1}{1} = 1$. La courbe admet l'asymptote horizontale $y = 1$ en $+\infty$ (et $y = -1$ en $-\infty$, par imparité).`,
      why: { 0: String.raw`$\operatorname{sh}$ et $\operatorname{ch}$ tendent toutes deux vers $+\infty$, mais leur quotient est une forme indéterminée qui tend vers 1 (toutes deux sont équivalentes à $\frac{\mathrm{e}^x}{2}$).`, 1: String.raw`$\operatorname{th} 0 = 0$, mais en $+\infty$ la limite est 1 : ne confonds pas la valeur en 0 et la limite à l'infini.`, 3: String.raw`$\operatorname{th}$ est bornée : $|\operatorname{th} x| \lt 1$ pour tout $x$, elle ne peut pas tendre vers $\mathrm{e} \approx 2{,}72$.` },
      rule: String.raw`$\operatorname{th} x = \frac{1 - \mathrm{e}^{-2x}}{1 + \mathrm{e}^{-2x}}$ ; $-1 \lt \operatorname{th} x \lt 1$.` },
    { id: 'm3-q-024', level: 1, q: String.raw`L'égalité $\mathrm{e}^{\ln x} = x$ est valable pour :`,
      topic: 'Réciprocité de exp et ln', sec: 'm3-s-ln',
      steps: [
        String.raw`Rappel : $\ln$ est définie sur $\left]0, +\infty\right[$ et à valeurs dans $\mathbb{R}$ ; $\exp$ est définie sur $\mathbb{R}$ et à valeurs dans $\left]0, +\infty\right[$. Ce sont deux fonctions réciproques.`,
        String.raw`Dans $\mathrm{e}^{\ln x}$, on calcule d'abord $\ln x$, qui n'existe que si $x \gt 0$.`,
        String.raw`Pour $x \gt 0$, la réciprocité donne $\mathrm{e}^{\ln x} = x$. (À l'inverse, $\ln(\mathrm{e}^x) = x$ pour tout réel $x$.)`
      ],
      choices: [String.raw`tout réel $x$`, String.raw`$x \geq 0$`, String.raw`$x \gt 0$`, String.raw`$x \neq 0$`], answer: 2,
      explain: String.raw`Pour que $\mathrm{e}^{\ln x}$ ait un sens, il faut d'abord que $\ln x$ existe, donc $x \gt 0$. Sur ce domaine, $\exp$ et $\ln$ sont réciproques l'une de l'autre, donc $\mathrm{e}^{\ln x} = x$. À l'inverse, $\ln(\mathrm{e}^x) = x$ est vrai pour <b>tout</b> réel $x$, car $\mathrm{e}^x \gt 0$ existe toujours. Tout vient des domaines : $\ln$ va de $\left]0, +\infty\right[$ dans $\mathbb{R}$, $\exp$ de $\mathbb{R}$ dans $\left]0, +\infty\right[$.`,
      why: { 0: String.raw`$\ln x$ n'existe pas pour $x \leq 0$ : l'expression $\mathrm{e}^{\ln(-1)}$ n'a pas de sens dans $\mathbb{R}$.`, 1: String.raw`$\ln 0$ n'est pas défini ($\ln x \to -\infty$ quand $x \to 0^+$), donc $x = 0$ est exclu.`, 3: String.raw`$\ln x$ n'existe pas pour $x \lt 0$ : la condition $x \neq 0$ ne suffit pas.` },
      rule: String.raw`$\mathrm{e}^{\ln x} = x$ pour $x \gt 0$ ; $\ln(\mathrm{e}^x) = x$ pour tout $x \in \mathbb{R}$.` },
    { id: 'm3-q-025', level: 1, q: String.raw`Solution de $\ln x = -1$ :`,
      topic: 'Équation avec logarithme', sec: 'm3-s-ln',
      steps: [
        String.raw`Rappel : $\ln$ est une bijection de $\left]0, +\infty\right[$ sur $\mathbb{R}$, de réciproque $\exp$ : $\ln x = k \iff x = \mathrm{e}^{k}$, pour tout réel $k$.`,
        String.raw`Avec $k = -1$ : $x = \mathrm{e}^{-1} = \frac{1}{\mathrm{e}} \approx 0{,}368$.`,
        String.raw`Contrôle : $x \gt 0$ ✔ et $\ln\frac{1}{\mathrm{e}} = -\ln\mathrm{e} = -1$ ✔.`
      ],
      choices: [String.raw`$x = -\mathrm{e}$`, String.raw`$x = \frac{1}{\mathrm{e}}$`, String.raw`pas de solution`, String.raw`$x = -\frac{1}{\mathrm{e}}$`], answer: 1,
      explain: String.raw`On applique l'exponentielle aux deux membres (c'est la réciproque de $\ln$) : $\ln x = -1 \iff x = \mathrm{e}^{-1} = \frac{1}{\mathrm{e}} \approx 0{,}37$. Cette valeur est bien strictement positive, donc dans le domaine de $\ln$. Un logarithme peut tout à fait être négatif : c'est le cas dès que $0 \lt x \lt 1$.`,
      why: { 0: String.raw`$x$ doit être strictement positif : $\ln(-\mathrm{e})$ n'existe pas. Tu as confondu $\mathrm{e}^{-1}$ et $-\mathrm{e}$.`, 2: String.raw`$\ln$ prend toutes les valeurs réelles (bijection de $\left]0, +\infty\right[$ sur $\mathbb{R}$), y compris les négatives : l'équation a une unique solution.`, 3: String.raw`$x$ doit être strictement positif : $\ln\left(-\frac{1}{\mathrm{e}}\right)$ n'existe pas. $\mathrm{e}^{-1}$ est un nombre positif.` },
      rule: String.raw`$\ln x = k \iff x = \mathrm{e}^{k}$, pour tout réel $k$.` },
    { id: 'm3-q-026', level: 2, q: String.raw`Solutions de $\mathrm{e}^{2x} - 5\mathrm{e}^{x} + 6 = 0$ :`,
      topic: 'Équation exponentielle', sec: 'm3-s-exp',
      steps: [
        String.raw`Rappel : $\mathrm{e}^{2x} = (\mathrm{e}^x)^2$. Une équation qui ne contient que $\mathrm{e}^{2x}$ et $\mathrm{e}^{x}$ se ramène au second degré avec $X = \mathrm{e}^x$ (et $X \gt 0$).`,
        String.raw`$X^2 - 5X + 6 = 0$ : $\Delta = 25 - 24 = 1$, $X = \frac{5 \pm 1}{2}$, soit $X = 2$ ou $X = 3$ (tous deux $\gt 0$).`,
        String.raw`Retour à $x$ : $\mathrm{e}^x = 2 \iff x = \ln 2$ et $\mathrm{e}^x = 3 \iff x = \ln 3$.`,
        String.raw`Contrôle pour $x = \ln 2$ : $\mathrm{e}^{2\ln 2} - 5\mathrm{e}^{\ln 2} + 6 = 4 - 10 + 6 = 0$ ✔.`
      ],
      choices: [String.raw`$x = 2$ et $x = 3$`, String.raw`$x = \ln 2$ et $x = \ln 3$`, String.raw`$x = \mathrm{e}^2$ et $x = \mathrm{e}^3$`, String.raw`$x = \ln 5$`], answer: 1,
      explain: String.raw`Comme $\mathrm{e}^{2x} = (\mathrm{e}^x)^2$, on pose $X = \mathrm{e}^x \gt 0$ : l'équation devient $X^2 - 5X + 6 = 0$. Le discriminant vaut $25 - 24 = 1$, d'où $X = \frac{5 \pm 1}{2}$, soit $X = 2$ ou $X = 3$, tous deux positifs. On revient à $x$ : $\mathrm{e}^x = 2 \iff x = \ln 2$ et $\mathrm{e}^x = 3 \iff x = \ln 3$.`,
      why: { 0: String.raw`2 et 3 sont les valeurs de $X = \mathrm{e}^x$ : il faut encore revenir à $x = \ln X$.`, 2: String.raw`Tu as confondu $\ln$ et $\exp$ au retour : $\mathrm{e}^x = 2 \iff x = \ln 2$, pas $\mathrm{e}^2$.`, 3: String.raw`On ne peut pas « regrouper » ainsi : $\mathrm{e}^{2x}$ et $\mathrm{e}^x$ ne sont pas des termes semblables. Il faut résoudre l'équation du second degré en $X$.` },
      rule: String.raw`Équation en $\mathrm{e}^{2x}$ et $\mathrm{e}^{x}$ : poser $X = \mathrm{e}^{x} \gt 0$, résoudre, puis $x = \ln X$.` },
    { id: 'm3-q-027', level: 2, q: String.raw`$\operatorname{th}'(x) = $`,
      topic: 'Dérivée de th', sec: 'm3-s-hyperboliques',
      steps: [
        String.raw`Rappel : $\operatorname{th} = \frac{\operatorname{sh}}{\operatorname{ch}}$, $\operatorname{sh}' = \operatorname{ch}$, $\operatorname{ch}' = \operatorname{sh}$, et $\left(\frac{u}{v}\right)' = \frac{u'v - uv'}{v^2}$.`,
        String.raw`$\operatorname{th}' = \frac{\operatorname{ch}\cdot\operatorname{ch} - \operatorname{sh}\cdot\operatorname{sh}}{\operatorname{ch}^2} = \frac{\operatorname{ch}^2 - \operatorname{sh}^2}{\operatorname{ch}^2}$.`,
        String.raw`Avec $\operatorname{ch}^2 - \operatorname{sh}^2 = 1$ : $\operatorname{th}' = \frac{1}{\operatorname{ch}^2}$ ; en séparant la fraction, $\frac{\operatorname{ch}^2}{\operatorname{ch}^2} - \frac{\operatorname{sh}^2}{\operatorname{ch}^2} = 1 - \operatorname{th}^2$.`
      ],
      choices: [String.raw`$1 + \operatorname{th}^2 x$`, String.raw`$-\frac{1}{\operatorname{ch}^2 x}$`, String.raw`$1 - \operatorname{th}^2 x$`, String.raw`$\frac{1}{\operatorname{sh}^2 x}$`], answer: 2,
      explain: String.raw`On dérive le quotient $\operatorname{th} = \frac{\operatorname{sh}}{\operatorname{ch}}$ avec $\left(\frac{u}{v}\right)' = \frac{u'v - uv'}{v^2}$, où $u' = \operatorname{ch}$ et $v' = \operatorname{sh}$ : $\operatorname{th}' = \frac{\operatorname{ch}^2 - \operatorname{sh}^2}{\operatorname{ch}^2}$. Le numérateur vaut 1, d'où $\operatorname{th}' = \frac{1}{\operatorname{ch}^2}$. En séparant la fraction : $\frac{\operatorname{ch}^2}{\operatorname{ch}^2} - \frac{\operatorname{sh}^2}{\operatorname{ch}^2} = 1 - \operatorname{th}^2$.`,
      why: { 0: String.raw`C'est le calque de $\tan' = 1 + \tan^2$ ; pour $\operatorname{th}$, le signe est moins car $\operatorname{ch}^2 - \operatorname{sh}^2 = 1$ (au lieu de $\cos^2 + \sin^2 = 1$).`, 1: String.raw`$\operatorname{th}$ est strictement croissante : sa dérivée est positive. Le signe moins vient d'une erreur dans la formule du quotient.`, 3: String.raw`Le dénominateur de la dérivée d'un quotient est le carré du <b>dénominateur</b>, ici $\operatorname{ch}^2$ ; $\operatorname{sh}^2$ s'annulerait en 0, alors que $\operatorname{th}'(0) = 1$.` },
      rule: String.raw`$\operatorname{th}' = \frac{1}{\operatorname{ch}^2} = 1 - \operatorname{th}^2$.` },
    { id: 'm3-q-028', level: 2, q: String.raw`$\operatorname{ch}(2x) = $`,
      topic: 'Duplication hyperbolique', sec: 'm3-s-hyperboliques',
      steps: [
        String.raw`Rappel : $\operatorname{ch}(a + b) = \operatorname{ch} a\operatorname{ch} b + \operatorname{sh} a\operatorname{sh} b$ ; avec $a = b = x$ : $\operatorname{ch}(2x) = \operatorname{ch}^2 x + \operatorname{sh}^2 x$.`,
        String.raw`On élimine $\operatorname{sh}^2$ grâce à $\operatorname{ch}^2 x - \operatorname{sh}^2 x = 1$, soit $\operatorname{sh}^2 x = \operatorname{ch}^2 x - 1$.`,
        String.raw`$\operatorname{ch}(2x) = \operatorname{ch}^2 x + \operatorname{ch}^2 x - 1 = 2\operatorname{ch}^2 x - 1$.`,
        String.raw`Contrôle en $x = 0$ : $\operatorname{ch} 0 = 1$ et $2\times 1^2 - 1 = 1$ ✔.`
      ],
      choices: [String.raw`$2\operatorname{ch}^2 x - 1$`, String.raw`$\operatorname{ch}^2 x - \operatorname{sh}^2 x$`, String.raw`$1 - 2\operatorname{sh}^2 x$`, String.raw`$2\operatorname{sh} x\operatorname{ch} x$`], answer: 0,
      explain: String.raw`La formule de duplication est $\operatorname{ch}(2x) = \operatorname{ch}^2 x + \operatorname{sh}^2 x$ (on la vérifie en développant avec les exponentielles). En remplaçant $\operatorname{sh}^2 x = \operatorname{ch}^2 x - 1$, on obtient $\operatorname{ch}(2x) = 2\operatorname{ch}^2 x - 1$. Vérification en $x = 0$ : $\operatorname{ch} 0 = 1$ et $2\times 1 - 1 = 1$.`,
      why: { 1: String.raw`$\operatorname{ch}^2 x - \operatorname{sh}^2 x$ vaut toujours 1 ; la duplication fait apparaître la <b>somme</b> $\operatorname{ch}^2 + \operatorname{sh}^2$.`, 2: String.raw`C'est le calque de $\cos(2x) = 1 - 2\sin^2 x$ ; en hyperbolique le signe change : $\operatorname{ch}(2x) = 1 + 2\operatorname{sh}^2 x$.`, 3: String.raw`$2\operatorname{sh} x\operatorname{ch} x = \operatorname{sh}(2x)$ ; en $x = 0$ il vaut 0, alors que $\operatorname{ch} 0 = 1$.` },
      rule: String.raw`$\operatorname{ch}(2x) = \operatorname{ch}^2 x + \operatorname{sh}^2 x = 2\operatorname{ch}^2 x - 1 = 1 + 2\operatorname{sh}^2 x$.` },
    { id: 'm3-q-029', level: 2, q: String.raw`Si $f$ est une bijection dérivable et $f'\left(f^{-1}(y)\right) \neq 0$, alors $\left(f^{-1}\right)'(y) = $`,
      topic: 'Dérivée d\'une réciproque', sec: 'm3-s-bijection',
      steps: [
        String.raw`Rappel : $f^{-1}$ est caractérisée par $f\left(f^{-1}(y)\right) = y$ pour tout $y$ ; et la dérivée d'une composée $f\big(g(y)\big)$ est $f'\big(g(y)\big)\times g'(y)$.`,
        String.raw`On dérive les deux membres par rapport à $y$ : $f'\left(f^{-1}(y)\right)\times\left(f^{-1}\right)'(y) = 1$.`,
        String.raw`On divise par $f'\left(f^{-1}(y)\right) \neq 0$ : $\left(f^{-1}\right)'(y) = \frac{1}{f'\left(f^{-1}(y)\right)}$.`,
        String.raw`Exemple : $f = \exp$, $f^{-1} = \ln$ : $\ln'(y) = \frac{1}{\mathrm{e}^{\ln y}} = \frac{1}{y}$ ✔.`
      ],
      choices: [String.raw`$\frac{1}{f'(y)}$`, String.raw`$f'\left(f^{-1}(y)\right)$`, String.raw`$\frac{1}{f'\left(f^{-1}(y)\right)}$`, String.raw`$-\frac{f'(y)}{f(y)^2}$`], answer: 2,
      explain: String.raw`Pour tout $y$, $f\left(f^{-1}(y)\right) = y$. On dérive les deux membres par rapport à $y$ avec la règle de la composée : $f'\left(f^{-1}(y)\right)\times\left(f^{-1}\right)'(y) = 1$. Comme $f'\left(f^{-1}(y)\right) \neq 0$, on divise : $\left(f^{-1}\right)'(y) = \frac{1}{f'\left(f^{-1}(y)\right)}$. Exemple avec $f = \exp$ : $\ln'(y) = \frac{1}{\mathrm{e}^{\ln y}} = \frac{1}{y}$.`,
      why: { 0: String.raw`Il faut évaluer $f'$ en l'antécédent $f^{-1}(y)$, pas en $y$. Avec $f = \exp$, on trouverait $\ln'(y) = \mathrm{e}^{-y}$, ce qui est faux.`, 1: String.raw`C'est l'inverse de la bonne réponse : on divise par $f'\left(f^{-1}(y)\right)$ au lieu de multiplier.`, 3: String.raw`$-\frac{f'}{f^2}$ est la dérivée de $\frac{1}{f}$ : la réciproque $f^{-1}$ et l'inverse $\frac{1}{f}$ sont deux objets différents.` },
      rule: String.raw`$\left(f^{-1}\right)'(y) = \dfrac{1}{f'\left(f^{-1}(y)\right)}$.` },
    { id: 'm3-q-030', level: 1, q: String.raw`La courbe d'une fonction impaire est symétrique par rapport :`,
      topic: 'Parité et symétrie', sec: 'm3-s-generalites',
      steps: [
        String.raw`Rappel : $f$ est impaire si son domaine est symétrique par rapport à 0 et si $f(-x) = -f(x)$ pour tout $x$.`,
        String.raw`Si $M\big(x, f(x)\big)$ est sur la courbe, le point d'abscisse $-x$ a pour ordonnée $f(-x) = -f(x)$ : c'est $M'\big(-x, -f(x)\big)$.`,
        String.raw`$M'$ est le symétrique de $M$ par rapport à l'origine $O$ (milieu de $[MM']$) : la courbe est symétrique par rapport à $O$.`
      ],
      choices: [String.raw`à l'axe des ordonnées`, String.raw`à l'origine $O$`, String.raw`à la droite $y = x$`, String.raw`à l'axe des abscisses`], answer: 1,
      explain: String.raw`Une fonction impaire vérifie $f(-x) = -f(x)$ pour tout $x$ de son domaine (symétrique par rapport à 0). Ainsi, si le point $M(x, y)$ est sur la courbe, le point $M'(-x, -y)$ y est aussi. Or $M'$ est le symétrique de $M$ par rapport à l'origine $O$ : la courbe est symétrique par rapport à $O$. Exemples : $x^3$, $\sin$, $\operatorname{sh}$, $\operatorname{th}$.`,
      why: { 0: String.raw`La symétrie par rapport à l'axe des ordonnées caractérise une fonction <b>paire</b> ($f(-x) = f(x)$), comme $x^2$ ou $\operatorname{ch}$.`, 2: String.raw`La symétrie par rapport à $y = x$ relie la courbe de $f$ à celle de sa réciproque $f^{-1}$.`, 3: String.raw`Une courbe de fonction symétrique par rapport à l'axe des abscisses imposerait $f(x) = -f(x)$, donc $f = 0$.` },
      rule: String.raw`Impaire $\iff$ symétrie de centre $O$ ; paire $\iff$ symétrie d'axe $(Oy)$.` },
    { id: 'm3-q-031', level: 2, q: String.raw`Pour qu'une fonction $f$ réalise une bijection d'un intervalle $I$ sur $f(I)$, il suffit qu'elle soit :`,
      topic: 'Théorème de la bijection', sec: 'm3-s-bijection',
      steps: [
        String.raw`Rappel : $f : I \to f(I)$ est bijective si chaque valeur de $f(I)$ est atteinte <b>exactement une fois</b> (injective et surjective).`,
        String.raw`Théorème de la bijection : si $f$ est continue et strictement monotone sur l'intervalle $I$, alors $f$ est une bijection de $I$ sur l'intervalle $f(I)$.`,
        String.raw`Les autres conditions ne suffisent pas : $x \mapsto x^2$ sur $[-1, 1]$ est continue, dérivable et paire, mais $f(-1) = f(1) = 1$ (deux antécédents).`
      ],
      choices: [String.raw`continue sur $I$`, String.raw`dérivable sur $I$`, String.raw`continue et strictement monotone sur $I$`, String.raw`paire`], answer: 2,
      explain: String.raw`C'est le théorème de la bijection : si $f$ est <b>continue</b> et <b>strictement monotone</b> sur un intervalle $I$, alors $f$ réalise une bijection de $I$ sur l'intervalle $f(I)$. La stricte monotonie garantit l'injectivité (deux points distincts ont des images distinctes) et la continuité garantit que $f(I)$ est un intervalle « sans trou » (valeurs intermédiaires). De plus, $f^{-1}$ est alors continue et de même monotonie que $f$.`,
      why: { 0: String.raw`La continuité seule ne suffit pas : $x \mapsto x^2$ est continue sur $[-1, 1]$ mais $f(-1) = f(1)$, donc elle n'est pas injective.`, 1: String.raw`Même contre-exemple : $x^2$ est dérivable sur $[-1, 1]$ mais pas injective. C'est la stricte monotonie qui manque.`, 3: String.raw`Une fonction paire prend la même valeur en $x$ et en $-x$ : elle n'est jamais injective sur un intervalle symétrique non réduit à $\{0\}$.` },
      rule: String.raw`$f$ continue et strictement monotone sur l'intervalle $I$ $\Rightarrow$ $f : I \to f(I)$ est bijective.` },
    { id: 'm3-q-032', level: 1, q: String.raw`Valeur approchée de $\log 2$ (logarithme décimal) :`,
      topic: 'Logarithme décimal', sec: 'm3-s-log-db',
      steps: [
        String.raw`Rappel : le logarithme décimal est $\log x = \frac{\ln x}{\ln 10}$ ; c'est l'exposant $y$ tel que $10^{y} = x$.`,
        String.raw`$\log 2 = \frac{\ln 2}{\ln 10} \approx \frac{0{,}693}{2{,}303} \approx 0{,}301$.`,
        String.raw`Contrôle : $10^{0{,}301} \approx 2$ ✔ ; et $\log 2$ est bien entre $\log 1 = 0$ et $\log 10 = 1$.`
      ],
      choices: [String.raw`$0{,}693$`, String.raw`$0{,}301$`, String.raw`$0{,}5$`, String.raw`$2{,}303$`], answer: 1,
      explain: String.raw`Le logarithme décimal se ramène au logarithme népérien : $\log x = \frac{\ln x}{\ln 10}$. Avec $\ln 2 \approx 0{,}693$ et $\ln 10 \approx 2{,}303$, on obtient $\log 2 \approx 0{,}301$. Vérification : $10^{0{,}301} \approx 2$. Cette valeur sert partout en électronique : $20\log 2 \approx 6$ dB et $10\log 2 \approx 3$ dB.`,
      why: { 0: String.raw`$0{,}693$ est $\ln 2$ (logarithme népérien, de base $\mathrm{e}$), pas le logarithme décimal.`, 2: String.raw`$\log x = 0{,}5$ correspond à $x = 10^{0{,}5} = \sqrt{10} \approx 3{,}16$, pas à 2.`, 3: String.raw`$2{,}303$ est $\ln 10$, le facteur de conversion entre $\ln$ et $\log$.` },
      rule: String.raw`$\log x = \dfrac{\ln x}{\ln 10}$ ; $\log 2 \approx 0{,}301$.` },
    { id: 'm3-q-033', level: 2, q: String.raw`Pour $|x| \lt 1$, $\operatorname{argth} x = $`,
      topic: 'Réciproque de th', sec: 'm3-s-hyperboliques',
      steps: [
        String.raw`Rappel : $\operatorname{argth}$ est la réciproque de $\operatorname{th} : \mathbb{R} \to \left]-1, 1\right[$ ; $y = \operatorname{argth} x \iff \operatorname{th} y = x$, avec $\operatorname{th} y = \frac{\mathrm{e}^{2y} - 1}{\mathrm{e}^{2y} + 1}$.`,
        String.raw`On pose $Y = \mathrm{e}^{2y}$ : $\frac{Y - 1}{Y + 1} = x \iff Y - 1 = xY + x \iff Y(1 - x) = 1 + x \iff Y = \frac{1+x}{1-x}$.`,
        String.raw`On prend le logarithme : $2y = \ln\frac{1+x}{1-x}$, donc $y = \frac{1}{2}\ln\frac{1+x}{1-x}$.`
      ],
      choices: [String.raw`$\ln\frac{1+x}{1-x}$`, String.raw`$\frac{1}{2}\ln\frac{1+x}{1-x}$`, String.raw`$\frac{1}{2}\ln\frac{1-x}{1+x}$`, String.raw`$\ln\left(x + \sqrt{x^2+1}\right)$`], answer: 1,
      explain: String.raw`On cherche $y$ tel que $\operatorname{th} y = x$, avec $\operatorname{th} y = \frac{\mathrm{e}^{2y} - 1}{\mathrm{e}^{2y} + 1}$. En posant $Y = \mathrm{e}^{2y}$ : $x(Y + 1) = Y - 1$, donc $Y(1 - x) = 1 + x$ et $Y = \frac{1+x}{1-x}$. Comme $|x| \lt 1$, ce quotient est strictement positif et on peut prendre le logarithme : $2y = \ln\frac{1+x}{1-x}$, d'où $y = \frac{1}{2}\ln\frac{1+x}{1-x}$.`,
      why: { 0: String.raw`Il manque le facteur $\frac{1}{2}$, qui vient de $\mathrm{e}^{2y}$ : on obtient $2y$, qu'il faut encore diviser par 2.`, 2: String.raw`Fraction renversée : $\frac{1}{2}\ln\frac{1-x}{1+x} = -\operatorname{argth} x$. Contrôle : pour $x \gt 0$, $\operatorname{argth} x$ doit être positif.`, 3: String.raw`$\ln\left(x + \sqrt{x^2+1}\right)$ est $\operatorname{argsh} x$, défini sur $\mathbb{R}$ tout entier.` },
      rule: String.raw`$\operatorname{argth} x = \frac{1}{2}\ln\frac{1+x}{1-x}$ pour $|x| \lt 1$.` },
    { id: 'm3-q-034', level: 2, q: String.raw`Quelle fonction a pour dérivée $\frac{1}{\sqrt{x^2+1}}$ ?`,
      topic: 'Dérivées des réciproques hyperboliques', sec: 'm3-s-hyperboliques',
      steps: [
        String.raw`Rappel : la dérivée d'une réciproque est $\left(f^{-1}\right)'(x) = \frac{1}{f'\left(f^{-1}(x)\right)}$ ; de plus $\operatorname{sh}' = \operatorname{ch}$ et $\operatorname{ch}^2 = 1 + \operatorname{sh}^2$.`,
        String.raw`$\operatorname{argsh}'(x) = \frac{1}{\operatorname{ch}(\operatorname{argsh} x)}$. Or $\operatorname{ch} y = \sqrt{1 + \operatorname{sh}^2 y}$ (car $\operatorname{ch} y \gt 0$), donc $\operatorname{ch}(\operatorname{argsh} x) = \sqrt{1 + x^2}$.`,
        String.raw`Conclusion : $\operatorname{argsh}'(x) = \frac{1}{\sqrt{x^2+1}}$. Pour comparer : $\arcsin' = \frac{1}{\sqrt{1-x^2}}$, $\operatorname{argch}' = \frac{1}{\sqrt{x^2-1}}$, $\arctan' = \frac{1}{1+x^2}$.`
      ],
      choices: [String.raw`$\arcsin$`, String.raw`$\operatorname{argch}$`, String.raw`$\arctan$`, String.raw`$\operatorname{argsh}$`], answer: 3,
      explain: String.raw`Par la formule de la dérivée d'une réciproque : $\operatorname{argsh}'(x) = \frac{1}{\operatorname{sh}'(\operatorname{argsh} x)} = \frac{1}{\operatorname{ch}(\operatorname{argsh} x)}$. Comme $\operatorname{ch} y = \sqrt{1 + \operatorname{sh}^2 y}$ (car $\operatorname{ch} \gt 0$), on a $\operatorname{ch}(\operatorname{argsh} x) = \sqrt{1 + x^2}$. Donc $\operatorname{argsh}'(x) = \frac{1}{\sqrt{x^2 + 1}}$ ; on le retrouve aussi en dérivant $\ln\left(x + \sqrt{x^2+1}\right)$.`,
      why: { 0: String.raw`$\arcsin'(x) = \frac{1}{\sqrt{1 - x^2}}$ : signe moins sous la racine, et définie seulement sur $\left]-1, 1\right[$.`, 1: String.raw`$\operatorname{argch}'(x) = \frac{1}{\sqrt{x^2 - 1}}$ pour $x \gt 1$ : signe moins sous la racine.`, 2: String.raw`$\arctan'(x) = \frac{1}{1 + x^2}$, sans racine carrée.` },
      rule: String.raw`$\operatorname{argsh}' = \frac{1}{\sqrt{x^2+1}}$, $\operatorname{argch}' = \frac{1}{\sqrt{x^2-1}}$, $\operatorname{argth}' = \frac{1}{1-x^2}$.` }
  ],

  /* ===================================================== EXERCICES */
  exercises: [
    { id: 'm3-x-001', level: 1, check: 'value', vars: [],
      topic: 'Propriétés du logarithme', sec: 'm3-s-ln',
      prompt: String.raw`Valeur exacte de $\ln\left(\sqrt{\mathrm{e}}\right)$.`,
      answer: '1/2',
      mistakes: [
        { expr: '2', msg: String.raw`$\sqrt{\mathrm{e}} = \mathrm{e}^{1/2}$ (racine carrée = puissance $\frac{1}{2}$), pas $\mathrm{e}^2$. Le logarithme fait ensuite descendre l'exposant $\frac{1}{2}$.` },
        { expr: '1', msg: String.raw`$\ln$ et $\exp$ se compensent ($\ln\mathrm{e} = 1$), mais la racine ne disparaît pas : elle devient le facteur $\frac{1}{2}$ devant le logarithme.` },
        { expr: 'sqrt(e)', msg: String.raw`Tu as donné le nombre $\sqrt{\mathrm{e}} \approx 1{,}65$ lui-même : il faut encore en prendre le logarithme.` }
      ],
      hint: String.raw`$\sqrt{a} = a^{1/2}$ et $\ln(a^r) = r\ln a$.`,
      explain: String.raw`$\sqrt{\mathrm{e}} = \mathrm{e}^{1/2}$ et le logarithme « fait descendre » l'exposant : $\ln\left(\mathrm{e}^{1/2}\right) = \frac{1}{2}$.`,
      rule: String.raw`$\sqrt{a} = a^{1/2}$, $\ln(a^r) = r\ln a$, $\ln\mathrm{e} = 1$.`,
      pitfall: String.raw`La racine carrée correspond à l'exposant $\frac{1}{2}$, pas à l'exposant 2.`,
      steps: [
        String.raw`Rappel : $\ln$ transforme une puissance en produit : $\ln(a^r) = r\ln a$ pour $a \gt 0$. Et une racine carrée est une puissance : $\sqrt{a} = a^{1/2}$.`,
        String.raw`On réécrit : $\sqrt{\mathrm{e}} = \mathrm{e}^{1/2}$.`,
        String.raw`On applique la règle : $\ln\left(\mathrm{e}^{1/2}\right) = \frac{1}{2}\ln\mathrm{e} = \frac{1}{2}\times 1 = \frac{1}{2}$ (car $\ln\mathrm{e} = 1$).`,
        String.raw`Résultat : $\frac{1}{2}$. Vérification : $\sqrt{\mathrm{e}} \approx 1{,}649$ et $\ln 1{,}649 \approx 0{,}5$ ✔.`
      ] },
    { id: 'm3-x-002', level: 1, check: 'value', vars: [],
      topic: 'Exponentielle et logarithme', sec: 'm3-s-exp',
      prompt: String.raw`Valeur exacte de $\mathrm{e}^{2\ln 3}$.`,
      answer: '9',
      mistakes: [
        { expr: '6', msg: String.raw`$2\ln 3 = \ln(3^2)$ : le 2 devient un <b>exposant</b>, pas un facteur. On obtient $3^2 = 9$, pas $2\times 3$.` },
        { expr: 'exp(2)*3', msg: String.raw`$\mathrm{e}^{2\ln 3} \neq \mathrm{e}^{2}\,\mathrm{e}^{\ln 3}$ : cette décomposition vaut pour une <b>somme</b> dans l'exposant ($\mathrm{e}^{2 + \ln 3}$), pas pour un produit.` },
        { expr: '8', msg: String.raw`Base et exposant inversés : $2\ln 3 = \ln(3^2) = \ln 9$, pas $\ln(2^3)$.` }
      ],
      hint: String.raw`Écris $2\ln 3 = \ln(\dots)$.`,
      explain: String.raw`$2\ln 3 = \ln 9$, donc $\mathrm{e}^{2\ln 3} = \mathrm{e}^{\ln 9} = 9$.`,
      rule: String.raw`$n\ln a = \ln(a^n)$ et $\mathrm{e}^{\ln y} = y$ pour $y \gt 0$.`,
      pitfall: String.raw`Le facteur devant le $\ln$ devient un exposant ($3^2$), il ne multiplie pas le résultat ($2\times 3$).`,
      steps: [
        String.raw`Rappel : $\exp$ et $\ln$ sont réciproques : $\mathrm{e}^{\ln y} = y$ pour tout $y \gt 0$. Et un facteur devant un logarithme peut « rentrer » comme exposant : $n\ln a = \ln(a^n)$.`,
        String.raw`On transforme l'exposant : $2\ln 3 = \ln(3^2) = \ln 9$.`,
        String.raw`Donc $\mathrm{e}^{2\ln 3} = \mathrm{e}^{\ln 9} = 9$.`,
        String.raw`Autre chemin : $\mathrm{e}^{2\ln 3} = \left(\mathrm{e}^{\ln 3}\right)^2 = 3^2 = 9$ ✔.`
      ] },
    { id: 'm3-x-003', level: 1, check: 'value', vars: [],
      topic: 'Propriétés du logarithme', sec: 'm3-s-ln',
      prompt: String.raw`Valeur exacte de $\dfrac{\ln 8}{\ln 2}$.`,
      answer: '3',
      mistakes: [
        { expr: '4', msg: String.raw`On ne « simplifie » pas les $\ln$ : $\frac{\ln 8}{\ln 2} \neq \frac{8}{2}$. Il faut écrire $8$ comme une puissance de 2.` },
        { expr: 'ln(4)', msg: String.raw`$\frac{\ln a}{\ln b} \neq \ln\frac{a}{b}$ : c'est la <b>différence</b> $\ln a - \ln b$ qui vaut $\ln\frac{a}{b}$.` }
      ],
      hint: String.raw`Écris $8$ comme une puissance de 2.`,
      explain: String.raw`$\ln 8 = \ln(2^3) = 3\ln 2$, donc le quotient vaut $3$ (c'est $\log_2 8$).`,
      rule: String.raw`$\ln(a^n) = n\ln a$, et $\frac{\ln a}{\ln b} = \log_b a$ (mais $\frac{\ln a}{\ln b} \neq \ln\frac{a}{b}$ !)`,
      pitfall: String.raw`Un quotient de logarithmes ne se simplifie ni en $\frac{8}{2}$, ni en $\ln\frac{8}{2}$.`,
      steps: [
        String.raw`Rappel : $\ln(a^n) = n\ln a$ ; pour simplifier un quotient de logarithmes, on écrit les nombres comme puissances d'une même base.`,
        String.raw`On reconnaît une puissance de 2 : $8 = 2\times 2\times 2 = 2^3$, donc $\ln 8 = \ln(2^3) = 3\ln 2$.`,
        String.raw`On remplace : $\dfrac{\ln 8}{\ln 2} = \dfrac{3\ln 2}{\ln 2}$, et on simplifie par $\ln 2 \neq 0$.`,
        String.raw`Résultat : $3$. Interprétation : c'est $\log_2 8$, l'exposant tel que $2^3 = 8$ ✔.`
      ] },
    { id: 'm3-x-004', level: 1, check: 'expr', vars: ['x'], domain: [0.3, 4],
      topic: 'Exponentielle et logarithme', sec: 'm3-s-exp',
      prompt: String.raw`Simplifie, pour $x \gt 0$ : $\mathrm{e}^{3\ln x}$.`,
      answer: 'x^3',
      mistakes: [
        { expr: '3*x', msg: String.raw`$3\ln x = \ln(x^3)$, donc $\mathrm{e}^{3\ln x} = x^3$ : le 3 devient un exposant, pas un facteur.` },
        { expr: 'exp(3)*x', msg: String.raw`$\mathrm{e}^{3\ln x} \neq \mathrm{e}^3\,\mathrm{e}^{\ln x}$ : c'est une <b>somme</b> d'exposants qui donne un produit, pas un produit d'exposants.` }
      ],
      hint: String.raw`$a\ln x = \ln(x^a)$.`,
      explain: String.raw`$3\ln x = \ln(x^3)$, donc $\mathrm{e}^{3\ln x} = \mathrm{e}^{\ln(x^3)} = x^3$.`,
      rule: String.raw`$\mathrm{e}^{a\ln x} = x^a$ pour $x \gt 0$ (c'est la définition de $x^a$).`,
      pitfall: String.raw`Le 3 devient un exposant : $\mathrm{e}^{3\ln x} = x^3 \neq 3x$.`,
      steps: [
        String.raw`Rappel : pour $x \gt 0$, $a\ln x = \ln(x^a)$ et $\mathrm{e}^{\ln y} = y$ ($\exp$ et $\ln$ sont réciproques).`,
        String.raw`On fait « monter » le coefficient dans le logarithme : $3\ln x = \ln(x^3)$.`,
        String.raw`L'expression devient $\mathrm{e}^{\ln(x^3)} = x^3$, car $x^3 \gt 0$.`,
        String.raw`Vérification en $x = 2$ : $\mathrm{e}^{3\ln 2} = \mathrm{e}^{\ln 8} = 8 = 2^3$ ✔.`
      ] },
    { id: 'm3-x-005', level: 1, check: 'expr', vars: ['x'],
      topic: 'Propriétés de l\'exponentielle', sec: 'm3-s-exp',
      prompt: String.raw`Simplifie : $\dfrac{\mathrm{e}^{3x}}{\left(\mathrm{e}^{x}\right)^2}$.`,
      answer: 'exp(x)',
      mistakes: [
        { expr: 'exp(3*x-x^2)', msg: String.raw`$\left(\mathrm{e}^{x}\right)^2 = \mathrm{e}^{2x}$ (on multiplie l'exposant par 2), pas $\mathrm{e}^{x^2}$.` },
        { expr: 'exp(3/2)', msg: String.raw`$\frac{\mathrm{e}^a}{\mathrm{e}^b} = \mathrm{e}^{a-b}$ : on <b>soustrait</b> les exposants, on ne les divise pas.` }
      ],
      hint: String.raw`$(\mathrm{e}^a)^n = \mathrm{e}^{na}$ et $\frac{\mathrm{e}^a}{\mathrm{e}^b} = \mathrm{e}^{a-b}$.`,
      explain: String.raw`$(\mathrm{e}^x)^2 = \mathrm{e}^{2x}$, puis $\frac{\mathrm{e}^{3x}}{\mathrm{e}^{2x}} = \mathrm{e}^{3x - 2x} = \mathrm{e}^{x}$.`,
      rule: String.raw`$(\mathrm{e}^a)^n = \mathrm{e}^{na}$ et $\dfrac{\mathrm{e}^a}{\mathrm{e}^b} = \mathrm{e}^{a-b}$.`,
      pitfall: String.raw`$(\mathrm{e}^{x})^2 = \mathrm{e}^{2x}$, et non $\mathrm{e}^{x^2}$.`,
      steps: [
        String.raw`Rappel : l'exponentielle suit les règles des puissances : $(\mathrm{e}^a)^n = \mathrm{e}^{na}$ (puissance de puissance : on multiplie) et $\frac{\mathrm{e}^a}{\mathrm{e}^b} = \mathrm{e}^{a-b}$ (quotient : on soustrait).`,
        String.raw`Dénominateur : $(\mathrm{e}^{x})^2 = \mathrm{e}^{2x}$.`,
        String.raw`Quotient : $\dfrac{\mathrm{e}^{3x}}{\mathrm{e}^{2x}} = \mathrm{e}^{3x - 2x} = \mathrm{e}^{x}$.`,
        String.raw`Vérification en $x = 1$ : $\frac{\mathrm{e}^3}{\mathrm{e}^2} = \mathrm{e}$ ✔.`
      ] },
    { id: 'm3-x-006', level: 2, check: 'expr', vars: ['x'], domain: [0.3, 4],
      topic: 'Propriétés du logarithme', sec: 'm3-s-ln',
      prompt: String.raw`Simplifie, pour $x \gt 0$ : $\ln(x^3) - \ln\left(\dfrac{x}{\mathrm{e}}\right)$.`,
      answer: '2*ln(x)+1',
      mistakes: [
        { expr: '2*ln(x)-1', msg: String.raw`$-\ln\frac{x}{\mathrm{e}} = -(\ln x - 1) = -\ln x + 1$ : le signe moins porte sur les deux termes.` },
        { expr: '3*ln(x)/(ln(x)-1)', msg: String.raw`$\ln a - \ln b = \ln\frac{a}{b}$ : une différence de logarithmes ne devient pas un quotient de logarithmes.` }
      ],
      hint: String.raw`$\ln\frac{x}{\mathrm{e}} = \ln x - \ln\mathrm{e}$.`,
      explain: String.raw`$\ln(x^3) = 3\ln x$ et $\ln\frac{x}{\mathrm{e}} = \ln x - 1$, donc l'expression vaut $3\ln x - \ln x + 1 = 2\ln x + 1$.`,
      rule: String.raw`$\ln(a^n) = n\ln a$, $\ln\frac{a}{b} = \ln a - \ln b$, $\ln\mathrm{e} = 1$.`,
      pitfall: String.raw`Mettre des parenthèses avant de soustraire : $-(\ln x - 1) = -\ln x + 1$.`,
      steps: [
        String.raw`Rappel : pour $a, b \gt 0$, $\ln(a^n) = n\ln a$ et $\ln\frac{a}{b} = \ln a - \ln b$ ; de plus $\ln\mathrm{e} = 1$.`,
        String.raw`Premier terme : $\ln(x^3) = 3\ln x$ (valable car $x \gt 0$).`,
        String.raw`Second terme : $\ln\dfrac{x}{\mathrm{e}} = \ln x - \ln\mathrm{e} = \ln x - 1$.`,
        String.raw`On soustrait avec des parenthèses : $3\ln x - (\ln x - 1) = 3\ln x - \ln x + 1 = 2\ln x + 1$.`,
        String.raw`Vérification en $x = \mathrm{e}$ : $\ln(\mathrm{e}^3) - \ln 1 = 3 - 0 = 3$ et $2\times 1 + 1 = 3$ ✔.`
      ] },
    { id: 'm3-x-007', level: 2, check: 'expr', vars: ['x'], domain: [0.3, 4],
      topic: 'Puissances réelles', sec: 'm3-s-puissances',
      prompt: String.raw`Écris sous la forme $x^a$ (pour $x \gt 0$) : $\sqrt[3]{x^2}\,\sqrt{x}$.`,
      answer: 'x^(7/6)',
      mistakes: [
        { expr: 'x^(1/3)', msg: String.raw`Tu as multiplié les exposants $\frac{2}{3}\times\frac{1}{2}$ ; pour un <b>produit</b> de puissances de même base, on les <b>additionne</b>.` },
        { expr: 'x^2', msg: String.raw`$\sqrt[3]{x^2} = x^{2/3}$ (exposant $\frac{2}{3}$), pas $x^{3/2}$ : l'indice de la racine va au dénominateur.` }
      ],
      hint: String.raw`$\sqrt[3]{x^2} = x^{2/3}$ et $\sqrt{x} = x^{1/2}$.`,
      explain: String.raw`$x^{2/3}\cdot x^{1/2} = x^{2/3 + 1/2} = x^{7/6}$.`,
      rule: String.raw`$\sqrt[n]{x^m} = x^{m/n}$ et $x^a x^b = x^{a+b}$.`,
      pitfall: String.raw`Pour un produit de puissances on additionne les exposants ; on ne les multiplie que pour une puissance de puissance.`,
      steps: [
        String.raw`Rappel : une racine $n$-ième est une puissance $\frac{1}{n}$ : pour $x \gt 0$, $\sqrt[n]{x^m} = x^{m/n}$. Et $x^a x^b = x^{a+b}$.`,
        String.raw`On convertit : $\sqrt[3]{x^2} = x^{2/3}$ et $\sqrt{x} = x^{1/2}$.`,
        String.raw`Produit de puissances de même base : $x^{2/3}\cdot x^{1/2} = x^{2/3 + 1/2}$, avec $\frac{2}{3} + \frac{1}{2} = \frac{4}{6} + \frac{3}{6} = \frac{7}{6}$.`,
        String.raw`Résultat : $x^{7/6}$. Vérification en $x = 64$ : $\sqrt[3]{64^2} = 16$ et $\sqrt{64} = 8$, produit $128$ ; et $64^{7/6} = \left(64^{1/6}\right)^7 = 2^7 = 128$ ✔.`
      ] },
    { id: 'm3-x-008', level: 1, check: 'expr', vars: ['x'],
      topic: 'Dérivée de ln(u)', sec: 'm3-s-ln',
      prompt: String.raw`Dérive $f(x) = \ln(x^2+1)$.`,
      answer: '2*x/(x^2+1)',
      mistakes: [
        { expr: '1/(x^2+1)', msg: String.raw`$(\ln u)' = \frac{u'}{u}$ : il manque la dérivée de l'intérieur $u' = 2x$ au numérateur.` },
        { expr: 'x/(x^2+1)', msg: String.raw`Facteur 2 oublié : la dérivée de $x^2 + 1$ est $2x$, pas $x$.` },
        { expr: '(x^2+1)/(2*x)', msg: String.raw`Fraction renversée : c'est $\frac{u'}{u}$, avec la dérivée $u'$ au <b>numérateur</b>.` }
      ],
      hint: String.raw`$(\ln u)' = \frac{u'}{u}$ avec $u = x^2 + 1$.`,
      explain: String.raw`Avec $u = x^2 + 1$ et $u' = 2x$ : $f'(x) = \frac{2x}{x^2+1}$.`,
      rule: String.raw`$(\ln u)' = \dfrac{u'}{u}$.`,
      pitfall: String.raw`Ne pas oublier la dérivée de l'intérieur $u' = 2x$ au numérateur.`,
      steps: [
        String.raw`Rappel : la dérivée de $\ln$ est $\frac{1}{x}$, et pour une composée $\ln\big(u(x)\big)$ on multiplie par la dérivée de l'intérieur : $(\ln u)' = \frac{u'}{u}$.`,
        String.raw`On identifie $u(x) = x^2 + 1$ (strictement positif sur $\mathbb{R}$) et on dérive : $u'(x) = 2x$.`,
        String.raw`On assemble : $f'(x) = \dfrac{u'(x)}{u(x)} = \dfrac{2x}{x^2 + 1}$.`,
        String.raw`Contrôle : $f$ est paire, donc $f'$ doit être impaire ✔ ; et $f'(0) = 0$, cohérent avec le minimum $f(0) = 0$.`
      ] },
    { id: 'm3-x-009', level: 1, check: 'expr', vars: ['x'],
      topic: 'Dérivée de exp(u)', sec: 'm3-s-exp',
      prompt: String.raw`Dérive $f(x) = \mathrm{e}^{-x^2}$.`,
      answer: '-2*x*exp(-x^2)',
      mistakes: [
        { expr: 'exp(-x^2)', msg: String.raw`$(\mathrm{e}^u)' = u'\mathrm{e}^u$ : il manque le facteur $u' = -2x$.` },
        { expr: '-x^2*exp(-x^2-1)', msg: String.raw`On ne dérive pas $\mathrm{e}^u$ comme une puissance (« on descend l'exposant et on enlève 1 ») : $(\mathrm{e}^u)' = u'\mathrm{e}^u$.` },
        { expr: '2*x*exp(-x^2)', msg: String.raw`Erreur de signe : la dérivée de $-x^2$ est $-2x$.` }
      ],
      hint: String.raw`$(\mathrm{e}^u)' = u'\mathrm{e}^u$.`,
      explain: String.raw`Avec $u = -x^2$ et $u' = -2x$ : $f'(x) = -2x\,\mathrm{e}^{-x^2}$.`,
      rule: String.raw`$(\mathrm{e}^{u})' = u'\,\mathrm{e}^{u}$.`,
      pitfall: String.raw`L'exponentielle « recopie » son argument : $\mathrm{e}^{-x^2}$ reste tel quel, seul le facteur $u'$ s'ajoute devant.`,
      steps: [
        String.raw`Rappel : $\exp$ est sa propre dérivée, et pour une composée $\mathrm{e}^{u(x)}$ on multiplie par la dérivée de l'intérieur : $(\mathrm{e}^{u})' = u'\,\mathrm{e}^{u}$.`,
        String.raw`On identifie $u(x) = -x^2$ et on dérive : $u'(x) = -2x$.`,
        String.raw`On assemble : $f'(x) = -2x\,\mathrm{e}^{-x^2}$.`,
        String.raw`Contrôle : $f$ (la gaussienne) est paire et maximale en 0 ; $f'$ est bien impaire, nulle en 0, positive pour $x \lt 0$ et négative pour $x \gt 0$ ✔.`
      ] },
    { id: 'm3-x-010', level: 2, check: 'expr', vars: ['x'],
      topic: 'Dérivée de a puissance x', sec: 'm3-s-puissances',
      prompt: String.raw`Dérive $f(x) = 3^x$.`,
      answer: 'ln(3)*3^x',
      mistakes: [
        { expr: 'x*3^(x-1)', msg: String.raw`$3^x$ n'est pas une puissance $x^a$ : ici l'exposant est variable. Écris $3^x = \mathrm{e}^{x\ln 3}$.` },
        { expr: '3^x', msg: String.raw`Seule la base $\mathrm{e}$ est sa propre dérivée : il manque le facteur $\ln 3$.` },
        { expr: '3^x/ln(3)', msg: String.raw`On <b>multiplie</b> par $\ln 3$ en dérivant ; diviser par $\ln 3$ donne une <b>primitive</b> de $3^x$.` }
      ],
      hint: String.raw`$3^x = \mathrm{e}^{x\ln 3}$.`,
      explain: String.raw`$3^x = \mathrm{e}^{x\ln 3}$, donc $f'(x) = \ln 3\,\mathrm{e}^{x\ln 3} = \ln 3\cdot 3^x$.`,
      rule: String.raw`$(a^x)' = \ln a\cdot a^x$, car $a^x = \mathrm{e}^{x\ln a}$.`,
      pitfall: String.raw`Ne pas confondre $3^x$ (exposant variable) et $x^3$ (base variable).`,
      steps: [
        String.raw`Rappel : pour $a \gt 0$, $a^x$ est défini par $a^x = \mathrm{e}^{x\ln a}$. Quand l'exposant varie, la formule $(x^n)' = nx^{n-1}$ ne s'applique pas : on repasse en exponentielle.`,
        String.raw`$f(x) = 3^x = \mathrm{e}^{x\ln 3}$ : c'est $\mathrm{e}^{u}$ avec $u = x\ln 3$, et $u' = \ln 3$ (une constante).`,
        String.raw`Par $(\mathrm{e}^{u})' = u'\mathrm{e}^{u}$ : $f'(x) = \ln 3\cdot\mathrm{e}^{x\ln 3} = \ln 3\cdot 3^x$.`,
        String.raw`Contrôle : $\ln 3 \approx 1{,}10 \gt 0$, donc $f' \gt 0$ : $3^x$ est bien croissante ✔.`
      ] },
    { id: 'm3-x-011', level: 3, check: 'expr', vars: ['x'], domain: [0.3, 3],
      topic: 'Dérivée de x puissance x', sec: 'm3-s-puissances',
      prompt: String.raw`Dérive $f(x) = x^x$ pour $x \gt 0$.`,
      answer: '(ln(x)+1)*x^x',
      mistakes: [
        { expr: 'x*x^(x-1)', msg: String.raw`La formule $(x^a)' = ax^{a-1}$ suppose $a$ constant ; ici l'exposant varie. Écris $x^x = \mathrm{e}^{x\ln x}$.` },
        { expr: 'ln(x)*x^x', msg: String.raw`La dérivée de $x\ln x$ est $\ln x + 1$ (dérivée d'un produit), pas seulement $\ln x$.` }
      ],
      hint: String.raw`Écris $x^x = \mathrm{e}^{x\ln x}$.`,
      explain: String.raw`$x^x = \mathrm{e}^{x\ln x}$ et $(x\ln x)' = \ln x + 1$, donc $f'(x) = (\ln x + 1)\,x^x$.`,
      rule: String.raw`$u^v = \mathrm{e}^{v\ln u}$ : on repasse toujours en exponentielle quand l'exposant varie.`,
      pitfall: String.raw`La formule $(x^a)' = ax^{a-1}$ suppose l'exposant constant.`,
      steps: [
        String.raw`Rappel : pour $x \gt 0$, toute puissance s'écrit avec l'exponentielle : $x^x = \mathrm{e}^{x\ln x}$. C'est indispensable ici, car base et exposant dépendent tous deux de $x$.`,
        String.raw`On pose $u(x) = x\ln x$ et on la dérive comme un produit : $u'(x) = 1\cdot\ln x + x\cdot\frac{1}{x} = \ln x + 1$.`,
        String.raw`Par $(\mathrm{e}^{u})' = u'\mathrm{e}^{u}$ : $f'(x) = (\ln x + 1)\,\mathrm{e}^{x\ln x} = (\ln x + 1)\,x^x$.`,
        String.raw`Contrôle : $f'$ s'annule pour $\ln x = -1$, soit $x = \frac{1}{\mathrm{e}}$, où $x^x$ atteint bien son minimum ✔.`
      ] },
    { id: 'm3-x-012', level: 1, check: 'tuple', vars: [],
      topic: 'Domaine de définition', sec: 'm3-s-generalites',
      prompt: String.raw`Le domaine de définition de $f(x) = \ln(3 - x) + \sqrt{x + 1}$ est de la forme $[a, b[$. Donne $a ; b$.`,
      answer: '-1;3',
      mistakes: [
        { expr: '1;3', msg: String.raw`$x + 1 \geq 0 \iff x \geq -1$ : en passant 1 de l'autre côté, il change de signe.` },
        { expr: '-1;-3', msg: String.raw`$3 - x \gt 0 \iff 3 \gt x$ (on ajoute $x$ aux deux membres) : la borne est $+3$.` },
        { expr: '3;-1', msg: String.raw`Bonnes valeurs, mauvais ordre : $a$ est la borne de gauche (la plus petite), ici $-1$.` }
      ],
      hint: String.raw`Racine : argument $\geq 0$ ; $\ln$ : argument $\gt 0$.`,
      explain: String.raw`$3 - x \gt 0$ donne $x \lt 3$ et $x + 1 \geq 0$ donne $x \geq -1$ : $\mathcal{D}_f = [-1, 3[$, donc $a = -1$ et $b = 3$.`,
      rule: String.raw`$\ln u$ exige $u \gt 0$ ; $\sqrt{u}$ exige $u \geq 0$ ; le domaine d'une somme est l'intersection des domaines.`,
      pitfall: String.raw`Inégalité stricte pour $\ln$, large pour la racine : d'où le crochet ouvert en 3 et fermé en $-1$.`,
      steps: [
        String.raw`Rappel : le domaine de définition est l'ensemble des $x$ où la formule a un sens. $\ln u$ exige $u \gt 0$ (strict) ; $\sqrt{u}$ exige $u \geq 0$ (large). Pour une somme, les deux conditions doivent être vraies en même temps.`,
        String.raw`Logarithme : $3 - x \gt 0 \iff 3 \gt x \iff x \lt 3$.`,
        String.raw`Racine : $x + 1 \geq 0 \iff x \geq -1$.`,
        String.raw`Intersection : $-1 \leq x \lt 3$, soit $\mathcal{D}_f = [-1, 3[$. Donc $a = -1$ (crochet fermé : $\sqrt{0}$ existe) et $b = 3$ (crochet ouvert : $\ln 0$ n'existe pas).`
      ] },
    { id: 'm3-x-013', level: 2, check: 'tuple', vars: [],
      topic: 'Domaine de définition', sec: 'm3-s-generalites',
      prompt: String.raw`Le domaine de définition de $f(x) = \ln\left(\dfrac{x-1}{x+2}\right)$ est $\left]-\infty, a\right[ \cup \left]b, +\infty\right[$. Donne $a ; b$.`,
      answer: '-2;1',
      mistakes: [
        { expr: '-1;2', msg: String.raw`Les valeurs critiques sont les zéros : $x - 1 = 0 \iff x = 1$ et $x + 2 = 0 \iff x = -2$ ; tu as changé leurs signes.` },
        { expr: '1;-2', msg: String.raw`Bonnes valeurs, mauvais ordre : $a$ est la borne de $\left]-\infty, a\right[$, donc la plus petite, $-2$.` }
      ],
      hint: String.raw`Tableau de signes du quotient $\frac{x-1}{x+2}$, qui doit être $\gt 0$.`,
      explain: String.raw`$\frac{x-1}{x+2} \gt 0$ quand numérateur et dénominateur ont le même signe : $x \lt -2$ ou $x \gt 1$. Donc $a = -2$, $b = 1$.`,
      rule: String.raw`Un quotient est $\gt 0$ quand numérateur et dénominateur sont de même signe (tableau de signes).`,
      pitfall: String.raw`Ne pas écrire $\ln(x-1) - \ln(x+2)$ pour trouver le domaine : cela ne garderait que $x \gt 1$ et oublierait $x \lt -2$.`,
      steps: [
        String.raw`Rappel : $\ln u$ n'existe que si $u \gt 0$. Ici il faut donc $\dfrac{x-1}{x+2} \gt 0$ (avec $x \neq -2$).`,
        String.raw`Valeurs critiques : le numérateur s'annule en $x = 1$, le dénominateur en $x = -2$.`,
        String.raw`Tableau de signes : pour $x \lt -2$, les deux facteurs sont négatifs (quotient $\gt 0$) ; pour $-2 \lt x \lt 1$, numérateur $\lt 0$ et dénominateur $\gt 0$ (quotient $\lt 0$) ; pour $x \gt 1$, les deux sont positifs (quotient $\gt 0$).`,
        String.raw`Donc $\mathcal{D}_f = \left]-\infty, -2\right[ \cup \left]1, +\infty\right[$ : $a = -2$, $b = 1$.`,
        String.raw`Vérification : $x = 0$ donne $\frac{-1}{2} \lt 0$ (exclu) ✔ ; $x = -3$ donne $\frac{-4}{-1} = 4 \gt 0$ (inclus) ✔.`
      ] },
    { id: 'm3-x-014', level: 1, check: 'expr', vars: ['x'], domain: [0.3, 4],
      topic: 'Composition de fonctions', sec: 'm3-s-bijection',
      prompt: String.raw`On pose $f(x) = \ln x$ et $g(x) = x^2 + 1$. Donne $(g \circ f)(x)$ pour $x \gt 0$.`,
      answer: 'ln(x)^2+1',
      mistakes: [
        { expr: 'ln(x^2+1)', msg: String.raw`C'est $(f \circ g)(x) = f\big(g(x)\big)$. Pour $g \circ f$, on applique d'abord $f$, puis $g$.` },
        { expr: '2*ln(x)+1', msg: String.raw`$(\ln x)^2 \neq 2\ln x$ : on élève $\ln x$ au carré (carré du logarithme), ce n'est pas le logarithme d'un carré.` },
        { expr: 'ln(x)*(x^2+1)', msg: String.raw`Composer n'est pas multiplier : $g \circ f$ consiste à remplacer la variable de $g$ par $f(x)$.` }
      ],
      hint: String.raw`$(g \circ f)(x) = g\big(f(x)\big)$.`,
      explain: String.raw`$(g\circ f)(x) = g(\ln x) = (\ln x)^2 + 1$.`,
      rule: String.raw`$(g \circ f)(x) = g\big(f(x)\big)$ : on lit de droite à gauche ; en général $g \circ f \neq f \circ g$.`,
      pitfall: String.raw`L'ordre compte : $f \circ g$ donnerait $\ln(x^2 + 1)$, une tout autre fonction.`,
      steps: [
        String.raw`Rappel : la composée $g \circ f$ (« $g$ rond $f$ ») consiste à appliquer d'abord $f$, puis $g$ au résultat : $(g \circ f)(x) = g\big(f(x)\big)$.`,
        String.raw`On calcule l'intérieur : $f(x) = \ln x$ (défini car $x \gt 0$).`,
        String.raw`On remplace la variable de $g(t) = t^2 + 1$ par $t = \ln x$ : $g(\ln x) = (\ln x)^2 + 1$.`,
        String.raw`Vérification en $x = \mathrm{e}$ : $f(\mathrm{e}) = 1$ puis $g(1) = 2$ ; et $(\ln\mathrm{e})^2 + 1 = 2$ ✔.`
      ] },
    { id: 'm3-x-015', level: 2, check: 'expr', vars: ['x'], domain: [1.3, 6],
      topic: 'Calcul d\'une réciproque', sec: 'm3-s-bijection',
      prompt: String.raw`$f(x) = \mathrm{e}^{2x} + 1$ est une bijection de $\mathbb{R}$ sur $\left]1, +\infty\right[$. Donne $f^{-1}(x)$ pour $x \gt 1$.`,
      answer: 'ln(x-1)/2',
      mistakes: [
        { expr: '1/(exp(2*x)+1)', msg: String.raw`$f^{-1}$ (réciproque) n'est pas $\frac{1}{f}$ (inverse). Résous $y = f(x)$ d'inconnue $x$.` },
        { expr: '2*ln(x-1)', msg: String.raw`$\mathrm{e}^{2t} = x - 1 \iff 2t = \ln(x-1)$ : il faut ensuite <b>diviser</b> par 2.` },
        { expr: 'ln(x)/2', msg: String.raw`Isole d'abord $\mathrm{e}^{2t} = x - 1$ avant de prendre le logarithme.` }
      ],
      hint: String.raw`Résous $x = \mathrm{e}^{2t} + 1$ d'inconnue $t$.`,
      explain: String.raw`$x = \mathrm{e}^{2t} + 1 \iff \mathrm{e}^{2t} = x - 1 \iff t = \frac{1}{2}\ln(x - 1)$. Donc $f^{-1}(x) = \frac{1}{2}\ln(x-1)$.`,
      rule: String.raw`Pour trouver $f^{-1}(x)$ : résoudre $f(t) = x$ d'inconnue $t$.`,
      pitfall: String.raw`Isoler l'exponentielle <b>avant</b> de prendre le logarithme : $\ln(\mathrm{e}^{2t} + 1) \neq 2t + 1$.`,
      steps: [
        String.raw`Rappel : la réciproque $f^{-1}$ associe à chaque valeur $x$ son unique antécédent : $f^{-1}(x) = t \iff f(t) = x$. On résout donc $\mathrm{e}^{2t} + 1 = x$ d'inconnue $t$.`,
        String.raw`On isole l'exponentielle : $\mathrm{e}^{2t} = x - 1$, strictement positif car $x \gt 1$.`,
        String.raw`On prend le logarithme ($\ln$ est la réciproque de $\exp$) : $2t = \ln(x - 1)$, puis on divise par 2 : $t = \frac{1}{2}\ln(x-1)$.`,
        String.raw`Donc $f^{-1}(x) = \frac{1}{2}\ln(x - 1)$. Vérification : $f\left(\frac{1}{2}\ln(x-1)\right) = \mathrm{e}^{\ln(x-1)} + 1 = x - 1 + 1 = x$ ✔.`
      ] },
    { id: 'm3-x-016', level: 2, check: 'value', vars: [],
      topic: 'Dérivée d\'une réciproque', sec: 'm3-s-bijection',
      prompt: String.raw`$g(x) = x^3 + x$ est une bijection de $\mathbb{R}$ sur $\mathbb{R}$. Calcule $\left(g^{-1}\right)'(2)$.`,
      answer: '1/4',
      mistakes: [
        { expr: '1/13', msg: String.raw`$13 = g'(2)$ : on évalue $g'$ en l'antécédent $g^{-1}(2) = 1$, pas en 2.` },
        { expr: '4', msg: String.raw`$4 = g'(1)$ ; la dérivée de la réciproque en est l'<b>inverse</b> : $\frac{1}{4}$.` }
      ],
      hint: String.raw`Trouve d'abord $x_0$ tel que $g(x_0) = 2$, puis utilise $\left(g^{-1}\right)'(2) = \frac{1}{g'(x_0)}$.`,
      explain: String.raw`$g(1) = 2$ donc $g^{-1}(2) = 1$ ; $g'(x) = 3x^2 + 1$, $g'(1) = 4$, d'où $\left(g^{-1}\right)'(2) = \frac{1}{4}$.`,
      rule: String.raw`$\left(g^{-1}\right)'(y) = \dfrac{1}{g'\left(g^{-1}(y)\right)}$.`,
      pitfall: String.raw`On évalue $g'$ en l'antécédent $g^{-1}(2) = 1$, pas en 2.`,
      steps: [
        String.raw`Rappel : si $g$ est une bijection dérivable, $\left(g^{-1}\right)'(y) = \dfrac{1}{g'\left(g^{-1}(y)\right)}$ (valable si le dénominateur est non nul). Il faut donc d'abord l'antécédent de $y = 2$.`,
        String.raw`On cherche $x$ tel que $x^3 + x = 2$. On teste $x = 1$ : $1 + 1 = 2$ ✔. Comme $g$ est bijective, cet antécédent est unique : $g^{-1}(2) = 1$.`,
        String.raw`Dérivée de $g$ : $g'(x) = 3x^2 + 1$, donc $g'(1) = 3 + 1 = 4 \neq 0$.`,
        String.raw`Résultat : $\left(g^{-1}\right)'(2) = \dfrac{1}{g'(1)} = \dfrac{1}{4}$. Interprétation : la tangente à $\mathcal{C}_g$ en $(1, 2)$ a pour pente 4 ; sa symétrique par rapport à $y = x$, tangente à $\mathcal{C}_{g^{-1}}$ en $(2, 1)$, a pour pente $\frac{1}{4}$ ✔.`
      ] },
    { id: 'm3-x-017', level: 1, check: 'text', vars: [], accept: ['impaire'],
      topic: 'Parité d\'une fonction', sec: 'm3-s-generalites',
      prompt: String.raw`La fonction $f(x) = x^3\operatorname{ch} x$ est-elle paire, impaire, ou aucune des deux ? Réponds par un mot : paire, impaire ou aucune.`,
      answer: 'impaire',
      mistakes: [
        { text: 'paire', msg: String.raw`Calcule $f(-x) = (-x)^3\operatorname{ch}(-x)$ : le cube change de signe, $\operatorname{ch}$ non. Le résultat est $-f(x)$.` },
        { text: 'aucune', msg: String.raw`Calcule $f(-x)$ et compare à $f(x)$ et à $-f(x)$ : impaire × paire donne une fonction impaire.` }
      ],
      hint: String.raw`Calcule $f(-x)$ ; rappel : $\operatorname{ch}$ est paire.`,
      explain: String.raw`$f(-x) = (-x)^3\operatorname{ch}(-x) = -x^3\operatorname{ch} x = -f(x)$, sur $\mathbb{R}$ symétrique : $f$ est impaire.`,
      rule: String.raw`impaire × paire = impaire ; paire × paire = impaire × impaire = paire.`,
      pitfall: String.raw`Toujours calculer $f(-x)$ et le comparer à $f(x)$ <b>et</b> à $-f(x)$.`,
      steps: [
        String.raw`Rappel : sur un domaine symétrique par rapport à 0, $f$ est paire si $f(-x) = f(x)$, impaire si $f(-x) = -f(x)$. Ici le domaine est $\mathbb{R}$, symétrique ✔.`,
        String.raw`On calcule chaque facteur en $-x$ : $(-x)^3 = -x^3$ (puissance impaire) et $\operatorname{ch}(-x) = \operatorname{ch} x$ ($\operatorname{ch}$ est paire).`,
        String.raw`Donc $f(-x) = (-x^3)\operatorname{ch} x = -x^3\operatorname{ch} x = -f(x)$.`,
        String.raw`Conclusion : $f$ est <b>impaire</b>. Contrôle : $f(1) = \operatorname{ch} 1 \approx 1{,}54$ et $f(-1) \approx -1{,}54$ ✔.`
      ] },
    { id: 'm3-x-018', level: 2, check: 'set', vars: [],
      topic: 'Équation avec logarithmes', sec: 'm3-s-ln',
      prompt: String.raw`Résous dans $\mathbb{R}$ : $\ln x + \ln(x - 2) = \ln 3$. (Sépare les solutions par des « ; ».)`,
      answer: '{3}',
      mistakes: [
        { expr: '3;-1', msg: String.raw`$-1$ n'est pas dans le domaine ($x \gt 2$) : $\ln(-1)$ n'existe pas. Il faut toujours confronter les solutions au domaine.` },
        { expr: '5/2', msg: String.raw`$\ln a + \ln b = \ln(ab)$, pas $\ln(a + b)$ : on obtient $x(x - 2) = 3$, pas $x + (x - 2) = 3$.` }
      ],
      hint: String.raw`Commence par le domaine : $x \gt 2$.`,
      explain: String.raw`Sur le domaine $x \gt 2$ : $x(x-2) = 3$ donne $x = 3$ ou $x = -1$, et seul $3$ convient : $\mathcal{S} = \{3\}$.`,
      rule: String.raw`$\ln a + \ln b = \ln(ab)$ pour $a, b \gt 0$ ; $\ln A = \ln B \iff A = B$ (avec $A, B \gt 0$).`,
      pitfall: String.raw`Déterminer le domaine <b>avant</b> de transformer l'équation, puis éliminer les solutions parasites.`,
      steps: [
        String.raw`Rappel : $\ln$ n'est défini que pour un argument $\gt 0$ ; $\ln a + \ln b = \ln(ab)$ ; et $\ln$ est injective : $\ln A = \ln B \iff A = B$. Domaine : $x \gt 0$ et $x - 2 \gt 0$, donc $x \gt 2$.`,
        String.raw`On regroupe : $\ln x + \ln(x - 2) = \ln\big(x(x - 2)\big)$, d'où l'équation $x(x - 2) = 3 \iff x^2 - 2x - 3 = 0$.`,
        String.raw`$\Delta = 4 + 12 = 16$, donc $x = \frac{2 \pm 4}{2}$ : $x = 3$ ou $x = -1$.`,
        String.raw`On confronte au domaine : $-1 \notin \left]2, +\infty\right[$ est rejeté, $3$ est conservé. $\mathcal{S} = \{3\}$. Vérification : $\ln 3 + \ln 1 = \ln 3$ ✔.`
      ] },
    { id: 'm3-x-019', level: 2, check: 'set', vars: [],
      topic: 'Équation avec logarithmes', sec: 'm3-s-ln',
      prompt: String.raw`Résous dans $\mathbb{R}$ : $2\ln x = \ln(x + 6)$.`,
      answer: '{3}',
      mistakes: [
        { expr: '3;-2', msg: String.raw`$-2$ ne convient pas : $\ln(-2)$ n'existe pas. Le domaine est $x \gt 0$, car l'équation contient $\ln x$.` },
        { expr: '6', msg: String.raw`$2\ln x = \ln(x^2)$, pas $\ln(2x)$ : le 2 devient un exposant. On doit résoudre $x^2 = x + 6$.` }
      ],
      hint: String.raw`Domaine : $x \gt 0$. Puis $2\ln x = \ln(x^2)$.`,
      explain: String.raw`Sur $x \gt 0$, l'équation devient $x^2 = x + 6$, d'où $x = 3$ ou $x = -2$ ; seul $3$ convient : $\mathcal{S} = \{3\}$.`,
      rule: String.raw`$n\ln a = \ln(a^n)$ pour $a \gt 0$ ; toujours confronter les solutions au domaine.`,
      pitfall: String.raw`Le domaine de $2\ln x$ est $x \gt 0$ : la racine $-2$ du trinôme est une solution parasite.`,
      steps: [
        String.raw`Rappel : $\ln u$ exige $u \gt 0$, et pour $a \gt 0$, $n\ln a = \ln(a^n)$. Domaine : $x \gt 0$ (pour $\ln x$) et $x \gt -6$ (pour $\ln(x+6)$), donc $x \gt 0$.`,
        String.raw`Sur ce domaine, $2\ln x = \ln(x^2)$ ; l'équation $\ln(x^2) = \ln(x + 6)$ équivaut à $x^2 = x + 6$ ($\ln$ est injective).`,
        String.raw`$x^2 - x - 6 = 0$ : $\Delta = 1 + 24 = 25$, $x = \frac{1 \pm 5}{2}$, soit $x = 3$ ou $x = -2$.`,
        String.raw`On rejette $-2$ (hors du domaine $x \gt 0$) : $\mathcal{S} = \{3\}$. Vérification : $2\ln 3 = \ln 9 = \ln(3 + 6)$ ✔.`
      ] },
    { id: 'm3-x-020', level: 2, check: 'set', vars: [],
      topic: 'Équation avec logarithmes', sec: 'm3-s-ln',
      prompt: String.raw`Résous dans $\mathbb{R}$ : $\ln(x^2) = \ln(x + 6)$.`,
      answer: '{3;-2}',
      mistakes: [
        { expr: '3', msg: String.raw`Ici le domaine est $x \neq 0$ et $x \gt -6$ (et non $x \gt 0$) : $-2$ convient, car $\ln\left((-2)^2\right) = \ln 4 = \ln(-2 + 6)$.` },
        { expr: '-3;2', msg: String.raw`Erreur de signe dans la résolution de $x^2 - x - 6 = 0$ : la somme des racines vaut $+1$ et leur produit $-6$, d'où $3$ et $-2$.` }
      ],
      hint: String.raw`Attention, le domaine n'est pas le même qu'avec $2\ln x$ : ici il suffit que $x \neq 0$ et $x \gt -6$.`,
      explain: String.raw`Domaine : $x \neq 0$ et $x \gt -6$. $x^2 = x + 6$ donne $x = 3$ ou $x = -2$, tous deux dans le domaine : $\mathcal{S} = \{-2 ; 3\}$.`,
      rule: String.raw`$\ln(x^2) = 2\ln|x|$ pour $x \neq 0$ (et $= 2\ln x$ seulement si $x \gt 0$).`,
      pitfall: String.raw`Écrire $\ln(x^2) = 2\ln x$ réduit le domaine et fait perdre la solution $-2$.`,
      steps: [
        String.raw`Rappel : $\ln u$ exige $u \gt 0$. Ici $\ln(x^2)$ existe dès que $x^2 \gt 0$, soit $x \neq 0$ ; $\ln(x + 6)$ exige $x \gt -6$. Domaine : $\left]-6, 0\right[ \cup \left]0, +\infty\right[$.`,
        String.raw`$\ln$ est injective : $\ln(x^2) = \ln(x + 6) \iff x^2 = x + 6 \iff x^2 - x - 6 = 0$.`,
        String.raw`$\Delta = 25$, d'où $x = 3$ ou $x = -2$ ; les deux sont dans le domaine. $\mathcal{S} = \{-2 ; 3\}$.`,
        String.raw`Vérification pour $-2$ : $\ln 4 = \ln(-2 + 6)$ ✔. Différence avec l'équation $2\ln x = \ln(x+6)$ : $\ln(x^2) = 2\ln|x|$, d'où la solution négative en plus.`
      ] },
    { id: 'm3-x-021', level: 2, check: 'set', vars: [],
      topic: 'Équation exponentielle', sec: 'm3-s-exp',
      prompt: String.raw`Résous dans $\mathbb{R}$ : $\mathrm{e}^{2x} - 3\mathrm{e}^{x} + 2 = 0$.`,
      answer: '{0;ln(2)}',
      mistakes: [
        { expr: '1;2', msg: String.raw`1 et 2 sont les valeurs de $X = \mathrm{e}^x$ : il faut revenir à $x = \ln X$, soit $0$ et $\ln 2$.` },
        { expr: 'ln(2)', msg: String.raw`Il manque une solution : $X = 1$ donne $x = \ln 1 = 0$, solution tout à fait valable.` }
      ],
      hint: String.raw`Pose $X = \mathrm{e}^x$.`,
      explain: String.raw`Avec $X = \mathrm{e}^x$ : $X^2 - 3X + 2 = 0$ donne $X = 1$ ou $X = 2$, donc $x = 0$ ou $x = \ln 2$.`,
      rule: String.raw`Changement de variable $X = \mathrm{e}^{x}$ (avec $X \gt 0$), puis retour par $x = \ln X$.`,
      pitfall: String.raw`Ne pas s'arrêter aux valeurs de $X$ : la question porte sur $x$.`,
      steps: [
        String.raw`Rappel : $\mathrm{e}^{2x} = (\mathrm{e}^{x})^2$. En posant $X = \mathrm{e}^x$ (qui est toujours $\gt 0$), l'équation devient un trinôme du second degré.`,
        String.raw`$X^2 - 3X + 2 = 0$ : $\Delta = 9 - 8 = 1$, d'où $X = \frac{3 \pm 1}{2}$, soit $X = 1$ ou $X = 2$ (tous deux $\gt 0$, donc acceptables).`,
        String.raw`Retour à $x$ : $\mathrm{e}^x = 1 \iff x = \ln 1 = 0$ et $\mathrm{e}^x = 2 \iff x = \ln 2$.`,
        String.raw`$\mathcal{S} = \{0 ; \ln 2\}$. Vérification en $x = \ln 2$ : $4 - 6 + 2 = 0$ ✔ ; en $x = 0$ : $1 - 3 + 2 = 0$ ✔.`
      ] },
    { id: 'm3-x-022', level: 2, check: 'set', vars: [],
      topic: 'Équation exponentielle', sec: 'm3-s-exp',
      prompt: String.raw`Résous dans $\mathbb{R}$ : $\mathrm{e}^{x} - 6\mathrm{e}^{-x} = 1$.`,
      answer: '{ln(3)}',
      mistakes: [
        { expr: '3', msg: String.raw`3 est la valeur de $X = \mathrm{e}^x$ ; il faut revenir à $x = \ln 3$.` },
        { expr: '3;-2', msg: String.raw`Ce sont les racines en $X$ : $X = \mathrm{e}^x \gt 0$ exclut $-2$, puis il faut revenir à $x = \ln 3$.` }
      ],
      hint: String.raw`Multiplie par $\mathrm{e}^x$ et pose $X = \mathrm{e}^x \gt 0$.`,
      explain: String.raw`En multipliant par $\mathrm{e}^x$ : $X^2 - X - 6 = 0$ avec $X = \mathrm{e}^x \gt 0$, d'où $X = 3$ et $x = \ln 3$.`,
      rule: String.raw`$\mathrm{e}^{-x} = \frac{1}{\mathrm{e}^{x}}$ : multiplier par $\mathrm{e}^{x}$ ramène à une équation du second degré en $X = \mathrm{e}^{x} \gt 0$.`,
      pitfall: String.raw`Rejeter les valeurs négatives de $X$ : $\mathrm{e}^x = -2$ n'a pas de solution réelle.`,
      steps: [
        String.raw`Rappel : $\mathrm{e}^{-x} = \frac{1}{\mathrm{e}^x}$ et $\mathrm{e}^x \gt 0$ pour tout $x$. Multiplier par $\mathrm{e}^x \neq 0$ est donc une équivalence : $\mathrm{e}^{2x} - 6 = \mathrm{e}^x$.`,
        String.raw`On pose $X = \mathrm{e}^x \gt 0$ : $X^2 - X - 6 = 0$. $\Delta = 1 + 24 = 25$, $X = \frac{1 \pm 5}{2}$ : $X = 3$ ou $X = -2$.`,
        String.raw`Une exponentielle est strictement positive : $X = -2$ est impossible. Il reste $\mathrm{e}^x = 3$, soit $x = \ln 3$.`,
        String.raw`$\mathcal{S} = \{\ln 3\}$. Vérification : $\mathrm{e}^{\ln 3} - 6\mathrm{e}^{-\ln 3} = 3 - 6\times\frac{1}{3} = 1$ ✔.`
      ] },
    { id: 'm3-x-023', level: 2, check: 'set', vars: [],
      topic: 'Équation en ln x', sec: 'm3-s-ln',
      prompt: String.raw`Résous dans $\left]0, +\infty\right[$ : $(\ln x)^2 - \ln x - 2 = 0$.`,
      answer: '{1/e;e^2}',
      mistakes: [
        { expr: '2;-1', msg: String.raw`Ce sont les valeurs de $X = \ln x$ ; il faut revenir à $x = \mathrm{e}^{X}$.` },
        { expr: 'e^2', msg: String.raw`Il manque une solution : $\ln x = -1$ est possible (un logarithme peut être négatif), elle donne $x = \frac{1}{\mathrm{e}}$.` },
        { expr: 'e^2;-e', msg: String.raw`$\ln x = -1 \iff x = \mathrm{e}^{-1} = \frac{1}{\mathrm{e}}$, pas $-\mathrm{e}$ (qui est négatif, hors du domaine).` }
      ],
      hint: String.raw`Pose $X = \ln x$.`,
      explain: String.raw`Avec $X = \ln x$ : $X^2 - X - 2 = 0$ donne $X = 2$ ou $X = -1$, donc $x = \mathrm{e}^2$ ou $x = \frac{1}{\mathrm{e}}$.`,
      rule: String.raw`$\ln x = k \iff x = \mathrm{e}^{k}$, pour tout $k \in \mathbb{R}$.`,
      pitfall: String.raw`Contrairement à $X = \mathrm{e}^x$, la variable $X = \ln x$ peut être négative : ne rejette pas $X = -1$.`,
      steps: [
        String.raw`Rappel : $\ln$ est une bijection de $\left]0, +\infty\right[$ sur $\mathbb{R}$ : $\ln x = k \iff x = \mathrm{e}^k$. En posant $X = \ln x$ ($X$ peut prendre <b>toute</b> valeur réelle), l'équation devient $X^2 - X - 2 = 0$.`,
        String.raw`$\Delta = 1 + 8 = 9$, $X = \frac{1 \pm 3}{2}$ : $X = 2$ ou $X = -1$.`,
        String.raw`Retour à $x$ : $\ln x = 2 \iff x = \mathrm{e}^2$ et $\ln x = -1 \iff x = \mathrm{e}^{-1} = \frac{1}{\mathrm{e}}$.`,
        String.raw`Les deux sont dans $\left]0, +\infty\right[$ : $\mathcal{S} = \left\{\frac{1}{\mathrm{e}} ; \mathrm{e}^2\right\}$. Vérification pour $x = \mathrm{e}^2$ : $4 - 2 - 2 = 0$ ✔ ; pour $x = \frac{1}{\mathrm{e}}$ : $1 + 1 - 2 = 0$ ✔.`
      ] },
    { id: 'm3-x-024', level: 1, check: 'value', vars: [],
      topic: 'Gain en décibels', sec: 'm3-s-log-db',
      prompt: String.raw`Un amplificateur multiplie la tension par 100. Quel est son gain en dB ?`,
      answer: '40',
      mistakes: [
        { expr: '20', msg: String.raw`$10\log 100 = 20$ : tu as utilisé la formule des puissances. En tension : $20\log 100$.` },
        { expr: '2', msg: String.raw`$\log 100 = 2$, mais il faut encore multiplier par 20.` },
        { expr: '2000', msg: String.raw`On multiplie 20 par le <b>logarithme</b> du rapport, pas par le rapport lui-même.` }
      ],
      hint: String.raw`$G_{\mathrm{dB}} = 20\log\left|\frac{V_s}{V_e}\right|$.`,
      explain: String.raw`$G = 20\log 100 = 20\times 2 = 40$ dB.`,
      rule: String.raw`$G_{\mathrm{dB}} = 20\log\left|\frac{V_s}{V_e}\right|$ ; chaque facteur 10 en tension ajoute 20 dB.`,
      pitfall: String.raw`Pour une tension c'est $20\log$ ; $10\log$ ne s'utilise que pour un rapport de puissances.`,
      steps: [
        String.raw`Rappel : le gain en décibels d'un rapport de tensions est $G_{\mathrm{dB}} = 20\log\left|\frac{V_s}{V_e}\right|$, où $\log$ est le logarithme décimal ($\log 10^n = n$).`,
        String.raw`Ici $\frac{V_s}{V_e} = 100 = 10^2$, donc $\log 100 = 2$.`,
        String.raw`$G = 20\times 2 = 40$ dB.`,
        String.raw`Contrôle : $\times 10 \leftrightarrow +20$ dB, donc $\times 100 = \times 10\times 10 \leftrightarrow 20 + 20 = 40$ dB ✔.`
      ] },
    { id: 'm3-x-025', level: 1, check: 'value', vars: [],
      topic: 'Gain en décibels', sec: 'm3-s-log-db',
      prompt: String.raw`Un atténuateur a un gain de $-20$ dB. Donne le rapport de tensions $\frac{V_s}{V_e}$.`,
      answer: '1/10',
      mistakes: [
        { expr: '1/100', msg: String.raw`Tu as utilisé $10\log$ (puissances) : en tension, $\frac{V_s}{V_e} = 10^{G/20} = 10^{-1}$.` },
        { expr: '10', msg: String.raw`Un gain négatif est une atténuation : le rapport est inférieur à 1, c'est $10^{-1}$ et non $10^{1}$.` },
        { expr: '-1', msg: String.raw`$-1$ est $\log\frac{V_s}{V_e}$ : il faut encore appliquer $10^{(\cdot)}$, d'où $10^{-1}$.` }
      ],
      hint: String.raw`$\left|\frac{V_s}{V_e}\right| = 10^{G_{\mathrm{dB}}/20}$.`,
      explain: String.raw`$\log\frac{V_s}{V_e} = \frac{-20}{20} = -1$, donc $\frac{V_s}{V_e} = 10^{-1} = \frac{1}{10}$.`,
      rule: String.raw`$\left|\frac{V_s}{V_e}\right| = 10^{G_{\mathrm{dB}}/20}$.`,
      pitfall: String.raw`Un gain en dB négatif correspond à un rapport compris entre 0 et 1, pas à un rapport négatif.`,
      steps: [
        String.raw`Rappel : $G_{\mathrm{dB}} = 20\log\left|\frac{V_s}{V_e}\right|$, et la réciproque du logarithme décimal est $y \mapsto 10^{y}$ : $\log A = y \iff A = 10^{y}$.`,
        String.raw`On part de $20\log\frac{V_s}{V_e} = -20$ et on divise par 20 : $\log\frac{V_s}{V_e} = -1$.`,
        String.raw`On applique $10^{(\cdot)}$ : $\frac{V_s}{V_e} = 10^{-1} = \frac{1}{10}$.`,
        String.raw`Contrôle : un gain négatif en dB signifie une atténuation (rapport $\lt 1$) ✔ ; et $20\log\frac{1}{10} = 20\times(-1) = -20$ ✔.`
      ] },
    { id: 'm3-x-026', level: 2, check: 'value', vars: [],
      topic: 'Coupure à -3 dB', sec: 'm3-s-log-db',
      prompt: String.raw`Gain en dB, en valeur exacte (avec $\log$), d'un filtre tel que $\left|\frac{V_s}{V_e}\right| = \frac{1}{\sqrt{2}}$.`,
      answer: '-10*log(2)',
      mistakes: [
        { expr: '-3', msg: String.raw`$-3$ dB est une valeur approchée ; la valeur exacte est $20\log\frac{1}{\sqrt{2}}$, à simplifier.` },
        { expr: '-20*log(2)', msg: String.raw`C'est le gain pour un rapport $\frac{1}{2}$ ; ici $\log\frac{1}{\sqrt{2}} = -\frac{1}{2}\log 2$.` },
        { expr: '10*log(2)', msg: String.raw`Erreur de signe : le rapport est inférieur à 1, son logarithme est négatif, donc le gain aussi.` }
      ],
      hint: String.raw`$\log\frac{1}{\sqrt{2}} = -\frac{1}{2}\log 2$.`,
      explain: String.raw`$G = 20\log\left(2^{-1/2}\right) = -10\log 2 \approx -3{,}01$ dB.`,
      rule: String.raw`$\log(a^r) = r\log a$ ; $\frac{1}{\sqrt{2}} = 2^{-1/2}$.`,
      pitfall: String.raw`On demande la valeur exacte : $-3$ dB n'est qu'une approximation.`,
      steps: [
        String.raw`Rappel : $G_{\mathrm{dB}} = 20\log\left|\frac{V_s}{V_e}\right|$, et le logarithme décimal vérifie les mêmes règles que $\ln$ : $\log(a^r) = r\log a$.`,
        String.raw`On écrit le rapport comme une puissance de 2 : $\frac{1}{\sqrt{2}} = \frac{1}{2^{1/2}} = 2^{-1/2}$.`,
        String.raw`$\log\left(2^{-1/2}\right) = -\frac{1}{2}\log 2$, donc $G = 20\times\left(-\frac{1}{2}\log 2\right) = -10\log 2$.`,
        String.raw`Ordre de grandeur : $\log 2 \approx 0{,}301$, donc $G \approx -3{,}01$ dB, la fameuse coupure « à $-3$ dB » ✔.`
      ] },
    { id: 'm3-x-027', level: 2, check: 'value', vars: [],
      topic: 'Gains en cascade', sec: 'm3-s-log-db',
      prompt: String.raw`Trois étages en cascade ont des gains en tension de 10, 4 et 25. Quel est le gain total en dB ?`,
      answer: '60',
      mistakes: [
        { expr: '20*log(39)', msg: String.raw`En cascade, les gains linéaires se <b>multiplient</b> ($10\times 4\times 25$) ; ce sont les gains en dB qui s'additionnent.` },
        { expr: '1000', msg: String.raw`1000 est le gain linéaire total ; il reste à le convertir en dB : $20\log 1000$.` },
        { expr: '30', msg: String.raw`$10\log 1000 = 30$ : c'est la formule des puissances. En tension, c'est $20\log$.` }
      ],
      hint: String.raw`Gain total $= 10 \times 4 \times 25$, ou somme des gains en dB.`,
      explain: String.raw`Gain linéaire total $10\times 4\times 25 = 1000$, soit $20\log 1000 = 60$ dB.`,
      rule: String.raw`En cascade : gains linéaires multipliés, gains en dB additionnés.`,
      pitfall: String.raw`On n'additionne jamais les gains linéaires : $10 + 4 + 25$ n'a pas de sens physique.`,
      steps: [
        String.raw`Rappel : en cascade, la sortie d'un étage attaque l'entrée du suivant, donc les gains <b>linéaires</b> se multiplient ; comme $\log(abc) = \log a + \log b + \log c$, les gains <b>en dB</b> s'additionnent.`,
        String.raw`Gain linéaire total : $A = 10\times 4\times 25 = 1000$.`,
        String.raw`Conversion : $G = 20\log 1000 = 20\times 3 = 60$ dB.`,
        String.raw`Autre méthode : $20\log 10 = 20$ dB, $20\log 4 \approx 12{,}04$ dB, $20\log 25 \approx 27{,}96$ dB ; somme $= 60$ dB ✔ (exactement, car $20\log 4 + 20\log 25 = 20\log 100 = 40$).`
      ] },
    { id: 'm3-x-028', level: 1, check: 'value', vars: [],
      topic: 'Valeurs de ch', sec: 'm3-s-hyperboliques',
      prompt: String.raw`Valeur exacte de $\operatorname{ch}(\ln 2)$.`,
      answer: '5/4',
      mistakes: [
        { expr: '3/4', msg: String.raw`C'est $\operatorname{sh}(\ln 2) = \frac{2 - 1/2}{2}$ ; pour $\operatorname{ch}$ on <b>additionne</b> $\mathrm{e}^x$ et $\mathrm{e}^{-x}$.` },
        { expr: '5/2', msg: String.raw`N'oublie pas de diviser par 2 : $\operatorname{ch} x = \frac{\mathrm{e}^x + \mathrm{e}^{-x}}{2}$.` }
      ],
      hint: String.raw`$\mathrm{e}^{\ln 2} = 2$ et $\mathrm{e}^{-\ln 2} = \frac{1}{2}$.`,
      explain: String.raw`$\operatorname{ch}(\ln 2) = \frac{2 + \frac{1}{2}}{2} = \frac{5}{4}$.`,
      rule: String.raw`$\operatorname{ch} x = \frac{\mathrm{e}^{x} + \mathrm{e}^{-x}}{2}$ ; $\mathrm{e}^{\ln a} = a$ et $\mathrm{e}^{-\ln a} = \frac{1}{a}$.`,
      pitfall: String.raw`Ne pas oublier le dénominateur 2 de la définition.`,
      steps: [
        String.raw`Rappel : le cosinus hyperbolique est défini par $\operatorname{ch} x = \dfrac{\mathrm{e}^{x} + \mathrm{e}^{-x}}{2}$ (moyenne de $\mathrm{e}^x$ et $\mathrm{e}^{-x}$).`,
        String.raw`Avec $x = \ln 2$ : $\mathrm{e}^{\ln 2} = 2$ et $\mathrm{e}^{-\ln 2} = \frac{1}{\mathrm{e}^{\ln 2}} = \frac{1}{2}$.`,
        String.raw`$\operatorname{ch}(\ln 2) = \dfrac{2 + \frac{1}{2}}{2} = \dfrac{5/2}{2} = \dfrac{5}{4}$.`,
        String.raw`Contrôle : $\operatorname{ch} x \geq 1$ pour tout $x$, et $\frac{5}{4} = 1{,}25 \geq 1$ ✔.`
      ] },
    { id: 'm3-x-029', level: 2, check: 'value', vars: [],
      topic: 'Valeurs de th', sec: 'm3-s-hyperboliques',
      prompt: String.raw`Valeur exacte de $\operatorname{th}(\ln 3)$.`,
      answer: '4/5',
      mistakes: [
        { expr: '4/3', msg: String.raw`C'est $\operatorname{sh}(\ln 3)$ ; il faut encore diviser par $\operatorname{ch}(\ln 3) = \frac{5}{3}$.` },
        { expr: '5/3', msg: String.raw`C'est $\operatorname{ch}(\ln 3) = \frac{3 + 1/3}{2}$ ; or $\operatorname{th} = \frac{\operatorname{sh}}{\operatorname{ch}}$.` }
      ],
      hint: String.raw`$\operatorname{th} x = \frac{\mathrm{e}^{2x} - 1}{\mathrm{e}^{2x} + 1}$.`,
      explain: String.raw`$\mathrm{e}^{2\ln 3} = 9$, donc $\operatorname{th}(\ln 3) = \frac{9 - 1}{9 + 1} = \frac{4}{5}$.`,
      rule: String.raw`$\operatorname{th} x = \frac{\operatorname{sh} x}{\operatorname{ch} x} = \frac{\mathrm{e}^{2x} - 1}{\mathrm{e}^{2x} + 1}$.`,
      pitfall: String.raw`$\operatorname{th}$ est toujours strictement entre $-1$ et $1$ : un résultat supérieur à 1 signale une erreur.`,
      steps: [
        String.raw`Rappel : $\operatorname{th} x = \frac{\operatorname{sh} x}{\operatorname{ch} x} = \dfrac{\mathrm{e}^{x} - \mathrm{e}^{-x}}{\mathrm{e}^{x} + \mathrm{e}^{-x}}$ ; en multipliant haut et bas par $\mathrm{e}^{x}$ : $\operatorname{th} x = \dfrac{\mathrm{e}^{2x} - 1}{\mathrm{e}^{2x} + 1}$.`,
        String.raw`Avec $x = \ln 3$ : $\mathrm{e}^{2\ln 3} = \mathrm{e}^{\ln 9} = 9$.`,
        String.raw`$\operatorname{th}(\ln 3) = \dfrac{9 - 1}{9 + 1} = \dfrac{8}{10} = \dfrac{4}{5}$.`,
        String.raw`Contrôle par $\operatorname{sh}$ et $\operatorname{ch}$ : $\operatorname{sh}(\ln 3) = \frac{3 - 1/3}{2} = \frac{4}{3}$, $\operatorname{ch}(\ln 3) = \frac{3 + 1/3}{2} = \frac{5}{3}$, quotient $\frac{4}{5}$ ✔ (et $\frac{4}{5} \lt 1$ ✔).`
      ] },
    { id: 'm3-x-030', level: 1, check: 'expr', vars: ['x'],
      topic: 'Formules hyperboliques', sec: 'm3-s-hyperboliques',
      prompt: String.raw`Simplifie : $\operatorname{ch} x - \operatorname{sh} x$.`,
      answer: 'exp(-x)',
      mistakes: [
        { expr: 'exp(x)', msg: String.raw`C'est $\operatorname{ch} x + \operatorname{sh} x$ qui vaut $\mathrm{e}^x$ ; avec un signe moins, ce sont les $\mathrm{e}^x$ qui se compensent.` },
        { expr: '1', msg: String.raw`C'est $\operatorname{ch}^2 x - \operatorname{sh}^2 x$ (avec des carrés) qui vaut 1.` }
      ],
      hint: String.raw`Reviens aux définitions avec $\mathrm{e}^x$ et $\mathrm{e}^{-x}$.`,
      explain: String.raw`$\frac{\mathrm{e}^x + \mathrm{e}^{-x}}{2} - \frac{\mathrm{e}^x - \mathrm{e}^{-x}}{2} = \frac{2\mathrm{e}^{-x}}{2} = \mathrm{e}^{-x}$.`,
      rule: String.raw`$\operatorname{ch} x + \operatorname{sh} x = \mathrm{e}^{x}$ et $\operatorname{ch} x - \operatorname{sh} x = \mathrm{e}^{-x}$.`,
      pitfall: String.raw`Le signe moins devant $\operatorname{sh}$ change le signe de ses <b>deux</b> termes.`,
      steps: [
        String.raw`Rappel : $\operatorname{ch} x = \frac{\mathrm{e}^x + \mathrm{e}^{-x}}{2}$ (partie paire de $\mathrm{e}^x$) et $\operatorname{sh} x = \frac{\mathrm{e}^x - \mathrm{e}^{-x}}{2}$ (partie impaire).`,
        String.raw`Même dénominateur : $\operatorname{ch} x - \operatorname{sh} x = \dfrac{(\mathrm{e}^x + \mathrm{e}^{-x}) - (\mathrm{e}^x - \mathrm{e}^{-x})}{2} = \dfrac{\mathrm{e}^x + \mathrm{e}^{-x} - \mathrm{e}^x + \mathrm{e}^{-x}}{2}$.`,
        String.raw`Les $\mathrm{e}^x$ se compensent, il reste $\dfrac{2\mathrm{e}^{-x}}{2} = \mathrm{e}^{-x}$.`,
        String.raw`Vérification en $x = 0$ : $\operatorname{ch} 0 - \operatorname{sh} 0 = 1 - 0 = 1 = \mathrm{e}^0$ ✔.`
      ] },
    { id: 'm3-x-031', level: 1, check: 'expr', vars: ['x'],
      topic: 'Dérivée de th', sec: 'm3-s-hyperboliques',
      prompt: String.raw`Dérive $f(x) = \operatorname{th} x$ (tape <code>th(x)</code> ou <code>ch(x)</code> si besoin).`,
      answer: '1-tanh(x)^2',
      mistakes: [
        { expr: '1+tanh(x)^2', msg: String.raw`Confusion avec $\tan' = 1 + \tan^2$ : pour $\operatorname{th}$, c'est $1 - \operatorname{th}^2$, car $\operatorname{ch}^2 - \operatorname{sh}^2 = 1$.` },
        { expr: '-1/cosh(x)^2', msg: String.raw`$\operatorname{th}$ est croissante : $\operatorname{th}' = +\frac{1}{\operatorname{ch}^2}$. Le signe moins vient d'une erreur dans $u'v - uv'$.` }
      ],
      hint: String.raw`Dérive le quotient $\frac{\operatorname{sh}}{\operatorname{ch}}$ et utilise $\operatorname{ch}^2 - \operatorname{sh}^2 = 1$.`,
      explain: String.raw`$\operatorname{th}' = \frac{\operatorname{ch}\cdot\operatorname{ch} - \operatorname{sh}\cdot\operatorname{sh}}{\operatorname{ch}^2} = \frac{1}{\operatorname{ch}^2} = 1 - \operatorname{th}^2$.`,
      rule: String.raw`$\operatorname{th}' = 1 - \operatorname{th}^2 = \dfrac{1}{\operatorname{ch}^2}$.`,
      pitfall: String.raw`Ne pas calquer la trigonométrie : $\tan' = 1 + \tan^2$ mais $\operatorname{th}' = 1 - \operatorname{th}^2$.`,
      steps: [
        String.raw`Rappel : $\operatorname{th} = \dfrac{\operatorname{sh}}{\operatorname{ch}}$, avec $\operatorname{sh}' = \operatorname{ch}$ et $\operatorname{ch}' = \operatorname{sh}$ ; dérivée d'un quotient : $\left(\dfrac{u}{v}\right)' = \dfrac{u'v - uv'}{v^2}$.`,
        String.raw`Avec $u = \operatorname{sh}$, $v = \operatorname{ch}$ : $\operatorname{th}' = \dfrac{\operatorname{ch}\cdot\operatorname{ch} - \operatorname{sh}\cdot\operatorname{sh}}{\operatorname{ch}^2} = \dfrac{\operatorname{ch}^2 - \operatorname{sh}^2}{\operatorname{ch}^2} = \dfrac{1}{\operatorname{ch}^2}$.`,
        String.raw`En séparant la fraction : $\dfrac{\operatorname{ch}^2}{\operatorname{ch}^2} - \dfrac{\operatorname{sh}^2}{\operatorname{ch}^2} = 1 - \operatorname{th}^2 x$.`,
        String.raw`Contrôle : $\operatorname{th}'(0) = 1$ (tangente $y = x$ en 0) et $\operatorname{th}' \gt 0$ : $\operatorname{th}$ est bien croissante ✔.`
      ] },
    { id: 'm3-x-032', level: 2, check: 'expr', vars: ['x'],
      topic: 'Duplication hyperbolique', sec: 'm3-s-hyperboliques',
      prompt: String.raw`Exprime $\operatorname{ch}(2x)$ en fonction de $\operatorname{sh} x$ uniquement.`,
      answer: '1+2*sinh(x)^2',
      mistakes: [
        { expr: '1-2*sinh(x)^2', msg: String.raw`C'est le calque de $\cos(2x) = 1 - 2\sin^2 x$ ; en hyperbolique, le signe est $+$.` },
        { expr: '2*sinh(x)*cosh(x)', msg: String.raw`C'est $\operatorname{sh}(2x)$, et il contient encore $\operatorname{ch}$.` }
      ],
      hint: String.raw`$\operatorname{ch}(2x) = \operatorname{ch}^2 x + \operatorname{sh}^2 x$ et $\operatorname{ch}^2 x = 1 + \operatorname{sh}^2 x$.`,
      explain: String.raw`$\operatorname{ch}(2x) = \operatorname{ch}^2 x + \operatorname{sh}^2 x = (1 + \operatorname{sh}^2 x) + \operatorname{sh}^2 x = 1 + 2\operatorname{sh}^2 x$.`,
      rule: String.raw`$\operatorname{ch}(2x) = \operatorname{ch}^2 x + \operatorname{sh}^2 x = 1 + 2\operatorname{sh}^2 x = 2\operatorname{ch}^2 x - 1$.`,
      pitfall: String.raw`En hyperbolique, le signe est $+$ : $\cos(2x) = 1 - 2\sin^2 x$ mais $\operatorname{ch}(2x) = 1 + 2\operatorname{sh}^2 x$.`,
      steps: [
        String.raw`Rappel : formule de duplication $\operatorname{ch}(2x) = \operatorname{ch}^2 x + \operatorname{sh}^2 x$, et relation fondamentale $\operatorname{ch}^2 x - \operatorname{sh}^2 x = 1$.`,
        String.raw`On peut vérifier la duplication : $\operatorname{ch}^2 x + \operatorname{sh}^2 x = \frac{(\mathrm{e}^x + \mathrm{e}^{-x})^2 + (\mathrm{e}^x - \mathrm{e}^{-x})^2}{4} = \frac{2\mathrm{e}^{2x} + 2\mathrm{e}^{-2x}}{4} = \operatorname{ch}(2x)$.`,
        String.raw`Pour éliminer $\operatorname{ch}$, on utilise $\operatorname{ch}^2 x = 1 + \operatorname{sh}^2 x$ : $\operatorname{ch}(2x) = (1 + \operatorname{sh}^2 x) + \operatorname{sh}^2 x = 1 + 2\operatorname{sh}^2 x$.`,
        String.raw`Vérification en $x = 0$ : $\operatorname{ch} 0 = 1$ et $1 + 2\times 0 = 1$ ✔.`
      ] },
    { id: 'm3-x-033', level: 2, check: 'set', vars: [],
      topic: 'Équation hyperbolique', sec: 'm3-s-hyperboliques',
      prompt: String.raw`Résous dans $\mathbb{R}$ : $\operatorname{ch} x = \frac{5}{4}$.`,
      answer: '{-ln(2);ln(2)}',
      mistakes: [
        { expr: 'ln(2)', msg: String.raw`$\operatorname{ch}$ est paire : si $\ln 2$ est solution, $-\ln 2$ l'est aussi (elle correspond à $X = \frac{1}{2}$).` },
        { expr: '2;1/2', msg: String.raw`Ce sont les valeurs de $X = \mathrm{e}^x$ ; il faut revenir à $x = \ln X$.` }
      ],
      hint: String.raw`Pose $X = \mathrm{e}^x$ : $X + \frac{1}{X} = \frac{5}{2}$.`,
      explain: String.raw`Avec $X = \mathrm{e}^x$ : $2X^2 - 5X + 2 = 0$, d'où $X = 2$ ou $X = \frac{1}{2}$, soit $x = \pm\ln 2$.`,
      rule: String.raw`Pour $a \gt 1$, $\operatorname{ch} x = a$ a deux solutions opposées $\pm\operatorname{argch} a = \pm\ln\left(a + \sqrt{a^2 - 1}\right)$.`,
      pitfall: String.raw`Ne pas oublier la solution négative : $\operatorname{ch}$ n'est pas injective sur $\mathbb{R}$.`,
      steps: [
        String.raw`Rappel : $\operatorname{ch} x = \frac{\mathrm{e}^x + \mathrm{e}^{-x}}{2}$ ; on se ramène à une équation en $X = \mathrm{e}^x \gt 0$. L'équation s'écrit $\mathrm{e}^x + \mathrm{e}^{-x} = \frac{5}{2}$, soit $X + \frac{1}{X} = \frac{5}{2}$.`,
        String.raw`On multiplie par $2X \neq 0$ : $2X^2 + 2 = 5X$, soit $2X^2 - 5X + 2 = 0$.`,
        String.raw`$\Delta = 25 - 16 = 9$, $X = \frac{5 \pm 3}{4}$ : $X = 2$ ou $X = \frac{1}{2}$ (tous deux $\gt 0$).`,
        String.raw`Retour : $x = \ln 2$ ou $x = \ln\frac{1}{2} = -\ln 2$. $\mathcal{S} = \{-\ln 2 ; \ln 2\}$, cohérent avec la parité de $\operatorname{ch}$ et avec $\operatorname{ch}(\ln 2) = \frac{5}{4}$ ✔.`
      ] },
    { id: 'm3-x-034', level: 2, check: 'value', vars: [],
      topic: 'Réciproque de th', sec: 'm3-s-hyperboliques',
      prompt: String.raw`Valeur exacte de $\operatorname{argth}\left(\frac{1}{2}\right)$, exprimée avec $\ln$.`,
      answer: 'ln(3)/2',
      mistakes: [
        { expr: 'ln(3)', msg: String.raw`N'oublie pas le facteur $\frac{1}{2}$ : $\operatorname{argth} x = \frac{1}{2}\ln\frac{1+x}{1-x}$.` },
        { expr: 'ln(1/3)/2', msg: String.raw`Fraction renversée : c'est $\frac{1+x}{1-x}$, pas $\frac{1-x}{1+x}$ (le résultat doit être positif, car $\frac{1}{2} \gt 0$).` },
        { expr: 'ln(3/2)/2', msg: String.raw`Tu as oublié le dénominateur $1 - x = \frac{1}{2}$ : $\frac{3/2}{1/2} = 3$.` }
      ],
      hint: String.raw`$\operatorname{argth} x = \frac{1}{2}\ln\frac{1+x}{1-x}$.`,
      explain: String.raw`$\frac{1 + 1/2}{1 - 1/2} = \frac{3/2}{1/2} = 3$, donc $\operatorname{argth}\frac{1}{2} = \frac{1}{2}\ln 3$.`,
      rule: String.raw`$\operatorname{argth} x = \frac{1}{2}\ln\frac{1+x}{1-x}$ pour $|x| \lt 1$.`,
      pitfall: String.raw`Ne pas oublier le facteur $\frac{1}{2}$, qui provient du $\mathrm{e}^{2y}$ de $\operatorname{th} y$.`,
      steps: [
        String.raw`Rappel : $\operatorname{argth}$ est la réciproque de $\operatorname{th}$ ; pour $|x| \lt 1$, $\operatorname{argth} x = \dfrac{1}{2}\ln\dfrac{1+x}{1-x}$.`,
        String.raw`Avec $x = \frac{1}{2}$ : $\dfrac{1 + \frac{1}{2}}{1 - \frac{1}{2}} = \dfrac{3/2}{1/2} = \frac{3}{2}\times 2 = 3$.`,
        String.raw`Donc $\operatorname{argth}\frac{1}{2} = \frac{1}{2}\ln 3 \approx 0{,}549$.`,
        String.raw`Vérification : $\operatorname{th}\left(\frac{1}{2}\ln 3\right) = \dfrac{\mathrm{e}^{\ln 3} - 1}{\mathrm{e}^{\ln 3} + 1} = \dfrac{3 - 1}{3 + 1} = \dfrac{1}{2}$ ✔.`
      ] },
    { id: 'm3-x-035', level: 3, check: 'expr', vars: ['x'],
      topic: 'Dérivée de argsh', sec: 'm3-s-hyperboliques',
      prompt: String.raw`Dérive $f(x) = \ln\left(x + \sqrt{x^2 + 1}\right)$ et simplifie au maximum.`,
      answer: '1/sqrt(x^2+1)',
      mistakes: [
        { expr: '1/(x+sqrt(x^2+1))', msg: String.raw`$(\ln u)' = \frac{u'}{u}$ : il manque $u' = 1 + \frac{x}{\sqrt{x^2+1}}$ au numérateur.` },
        { expr: '1+x/sqrt(x^2+1)', msg: String.raw`Tu as donné $u'$ seulement ; il faut encore diviser par $u = x + \sqrt{x^2+1}$.` },
        { expr: '1/(x^2+1)', msg: String.raw`Confusion avec $\arctan'(x) = \frac{1}{1+x^2}$ : ici une racine carrée reste au dénominateur.` }
      ],
      hint: String.raw`$u' = 1 + \frac{x}{\sqrt{x^2+1}}$ ; mets au même dénominateur.`,
      explain: String.raw`$u' = \frac{\sqrt{x^2+1} + x}{\sqrt{x^2+1}}$ et $u = x + \sqrt{x^2+1}$, donc $\frac{u'}{u} = \frac{1}{\sqrt{x^2+1}}$ : on retrouve la dérivée de $\operatorname{argsh}$.`,
      rule: String.raw`$(\ln u)' = \frac{u'}{u}$, $(\sqrt{v})' = \frac{v'}{2\sqrt{v}}$ ; $\operatorname{argsh}'(x) = \frac{1}{\sqrt{x^2+1}}$.`,
      pitfall: String.raw`Mettre $u'$ au même dénominateur avant de diviser par $u$ : c'est ce qui fait apparaître la simplification.`,
      steps: [
        String.raw`Rappel : $(\ln u)' = \frac{u'}{u}$ et $(\sqrt{v})' = \frac{v'}{2\sqrt{v}}$. Ici $u(x) = x + \sqrt{x^2 + 1}$, strictement positif car $\sqrt{x^2+1} \gt |x|$.`,
        String.raw`Dérivée de la racine : $\left(\sqrt{x^2+1}\right)' = \dfrac{2x}{2\sqrt{x^2+1}} = \dfrac{x}{\sqrt{x^2+1}}$, donc $u'(x) = 1 + \dfrac{x}{\sqrt{x^2+1}} = \dfrac{\sqrt{x^2+1} + x}{\sqrt{x^2+1}}$.`,
        String.raw`On divise par $u$ : $f'(x) = \dfrac{\sqrt{x^2+1} + x}{\sqrt{x^2+1}}\times\dfrac{1}{x + \sqrt{x^2+1}} = \dfrac{1}{\sqrt{x^2+1}}$ (le facteur $x + \sqrt{x^2+1}$ se simplifie).`,
        String.raw`Interprétation : $f = \operatorname{argsh}$, et on retrouve $\operatorname{argsh}'(x) = \frac{1}{\sqrt{x^2+1}}$ ✔ ; contrôle en $x = 0$ : $f'(0) = 1$.`
      ] },
    { id: 'm3-x-036', level: 1, check: 'value', vars: [],
      topic: 'Partie entière', sec: 'm3-s-abs-ent',
      prompt: String.raw`Partie entière : calcule $E(-2{,}5)$.`,
      answer: '-3',
      mistakes: [
        { expr: '-2', msg: String.raw`$-2 \gt -2{,}5$ : la partie entière est le plus grand entier <b>inférieur ou égal</b>, ce n'est pas la troncature.` },
        { expr: '-5/2', msg: String.raw`$E(x)$ est toujours un <b>entier</b> : $-2{,}5$ n'en est pas un.` }
      ],
      hint: String.raw`Cherche l'entier $n$ tel que $n \leq -2{,}5 \lt n + 1$.`,
      explain: String.raw`$-3 \leq -2{,}5 \lt -2$, donc $E(-2{,}5) = -3$.`,
      rule: String.raw`$E(x) = n \iff n \in \mathbb{Z}$ et $n \leq x \lt n + 1$.`,
      pitfall: String.raw`$E(-2{,}5) \neq -2$ : la partie entière arrondit toujours vers le bas, même pour un négatif.`,
      steps: [
        String.raw`Rappel : la partie entière $E(x)$ est le plus grand entier inférieur ou égal à $x$, c'est-à-dire l'unique entier $n$ tel que $n \leq x \lt n + 1$.`,
        String.raw`On place $-2{,}5$ entre deux entiers consécutifs : $-3 \leq -2{,}5 \lt -2$.`,
        String.raw`Donc $n = -3$ : $E(-2{,}5) = -3$.`,
        String.raw`Contrôle : $-3 \leq -2{,}5$ ✔ et $-2{,}5 \lt -3 + 1 = -2$ ✔. Pour un négatif non entier, $E$ « descend » vers $-\infty$.`
      ] },
    { id: 'm3-x-037', level: 2, check: 'value', vars: [],
      topic: 'Partie entière', sec: 'm3-s-abs-ent',
      prompt: String.raw`Calcule $E\left(\sqrt{50}\right) + E\left(-\sqrt{50}\right)$.`,
      answer: '-1',
      mistakes: [
        { expr: '0', msg: String.raw`$E(-x) \neq -E(x)$ quand $x$ n'est pas entier : $E(-7{,}07\ldots) = -8$, pas $-7$.` },
        { expr: '15', msg: String.raw`La partie entière d'un nombre négatif est négative : $E(-\sqrt{50}) = -8$, pas $8$.` }
      ],
      hint: String.raw`Encadre $\sqrt{50}$ entre deux entiers consécutifs.`,
      explain: String.raw`$7 \lt \sqrt{50} \lt 8$ donne $E(\sqrt{50}) = 7$ et $E(-\sqrt{50}) = -8$, d'où la somme $-1$.`,
      rule: String.raw`Si $x \notin \mathbb{Z}$, $E(-x) = -E(x) - 1$ ; si $x \in \mathbb{Z}$, $E(-x) = -E(x)$.`,
      pitfall: String.raw`$E$ n'est pas impaire : $E(-x) \neq -E(x)$ en général.`,
      steps: [
        String.raw`Rappel : $E(x)$ est l'entier $n$ tel que $n \leq x \lt n + 1$. Pour un nombre irrationnel comme $\sqrt{50}$, on l'encadre entre deux entiers consécutifs grâce aux carrés parfaits.`,
        String.raw`$49 \lt 50 \lt 64$ et la racine est croissante, donc $7 \lt \sqrt{50} \lt 8$ ($\sqrt{50} \approx 7{,}07$) : $E\left(\sqrt{50}\right) = 7$.`,
        String.raw`On multiplie l'encadrement par $-1$, ce qui renverse les inégalités : $-8 \lt -\sqrt{50} \lt -7$, donc $E\left(-\sqrt{50}\right) = -8$.`,
        String.raw`Somme : $7 + (-8) = -1$. (Règle générale : pour $x$ non entier, $E(x) + E(-x) = -1$.)`
      ] },
    { id: 'm3-x-038', level: 1, check: 'set', vars: [],
      topic: 'Équation avec valeur absolue', sec: 'm3-s-abs-ent',
      prompt: String.raw`Résous dans $\mathbb{R}$ : $|2x - 1| = 3$.`,
      answer: '{2;-1}',
      mistakes: [
        { expr: '2', msg: String.raw`Il manque le cas $2x - 1 = -3$ : une valeur absolue égale à 3 correspond à deux possibilités, $+3$ et $-3$.` },
        { expr: '2;1', msg: String.raw`$2x - 1 = -3 \iff 2x = -2 \iff x = -1$ (et non $1$) : attention au signe.` }
      ],
      hint: String.raw`$|A| = 3 \iff A = 3$ ou $A = -3$.`,
      explain: String.raw`$2x - 1 = 3$ ou $2x - 1 = -3$, d'où $x = 2$ ou $x = -1$ : $\mathcal{S} = \{-1 ; 2\}$.`,
      rule: String.raw`$|A| = k$ (avec $k \geq 0$) $\iff A = k$ ou $A = -k$.`,
      pitfall: String.raw`Une équation avec valeur absolue a en général deux solutions : ne pas oublier le cas négatif.`,
      steps: [
        String.raw`Rappel : $|A|$ est la distance de $A$ à 0 ; pour $k \geq 0$, $|A| = k \iff A = k$ ou $A = -k$. Ici $A = 2x - 1$ et $k = 3$.`,
        String.raw`Premier cas : $2x - 1 = 3 \iff 2x = 4 \iff x = 2$.`,
        String.raw`Second cas : $2x - 1 = -3 \iff 2x = -2 \iff x = -1$.`,
        String.raw`$\mathcal{S} = \{-1 ; 2\}$. Vérification : $|2\times 2 - 1| = 3$ ✔ et $|2\times(-1) - 1| = |-3| = 3$ ✔.`
      ] },
    { id: 'm3-x-039', level: 2, check: 'value', vars: [],
      topic: 'Croissances comparées', sec: 'm3-s-puissances',
      prompt: String.raw`Calcule $\displaystyle\lim_{x\to+\infty}\frac{3\mathrm{e}^{x} - x^{5}}{\mathrm{e}^{x} + \ln x}$.`,
      answer: '3',
      mistakes: [
        { expr: '0', msg: String.raw`$x^5$ est négligeable devant $\mathrm{e}^x$, pas l'inverse : factorise par $\mathrm{e}^x$.` },
        { expr: '1', msg: String.raw`Les termes dominants sont $3\mathrm{e}^x$ et $\mathrm{e}^x$ : leur quotient vaut 3, le coefficient 3 ne disparaît pas.` }
      ],
      hint: String.raw`Factorise numérateur et dénominateur par $\mathrm{e}^x$.`,
      explain: String.raw`En factorisant par $\mathrm{e}^x$, on obtient $\frac{3 - x^5\mathrm{e}^{-x}}{1 + \ln x\,\mathrm{e}^{-x}}$, qui tend vers $\frac{3}{1} = 3$ par croissances comparées.`,
      rule: String.raw`Croissances comparées en $+\infty$ : $\ln x \ll x^a \ll \mathrm{e}^{x}$ ; on factorise par le terme dominant.`,
      pitfall: String.raw`C'est $\mathrm{e}^x$ qui domine (pas $x^5$), et on garde son coefficient : 3 au numérateur.`,
      steps: [
        String.raw`Rappel (croissances comparées) : en $+\infty$, $\frac{x^a}{\mathrm{e}^x} \to 0$ et $\frac{\ln x}{\mathrm{e}^x} \to 0$ : l'exponentielle domine. Méthode : factoriser par le terme dominant.`,
        String.raw`Ici on a une forme $\frac{\infty}{\infty}$ (avec même $\infty - \infty$ au numérateur). On factorise par $\mathrm{e}^x$ : $\dfrac{\mathrm{e}^x\left(3 - \frac{x^5}{\mathrm{e}^x}\right)}{\mathrm{e}^x\left(1 + \frac{\ln x}{\mathrm{e}^x}\right)} = \dfrac{3 - \frac{x^5}{\mathrm{e}^x}}{1 + \frac{\ln x}{\mathrm{e}^x}}$.`,
        String.raw`Croissances comparées : $\frac{x^5}{\mathrm{e}^x} \to 0$ ; et pour $x \geq 1$, $0 \leq \frac{\ln x}{\mathrm{e}^x} \leq \frac{x}{\mathrm{e}^x} \to 0$.`,
        String.raw`Limite : $\dfrac{3 - 0}{1 + 0} = 3$.`
      ] },
    { id: 'm3-x-040', level: 3, check: 'value', vars: [],
      topic: 'Forme indéterminée 0 puissance 0', sec: 'm3-s-puissances',
      prompt: String.raw`Calcule $\displaystyle\lim_{x\to 0^+} x^{x}$.`,
      answer: '1',
      mistakes: [
        { expr: '0', msg: String.raw`$0^0$ est une forme indéterminée, pas 0 : écris $x^x = \mathrm{e}^{x\ln x}$.` },
        { expr: 'e', msg: String.raw`L'exposant $x\ln x$ tend vers 0, pas vers 1 : la limite est $\mathrm{e}^0 = 1$.` }
      ],
      hint: String.raw`$x^x = \mathrm{e}^{x\ln x}$ ; que vaut $\lim_{x\to 0^+} x\ln x$ ?`,
      explain: String.raw`$x^x = \mathrm{e}^{x\ln x}$ et $x\ln x \to 0$ (croissances comparées), donc $x^x \to \mathrm{e}^0 = 1$.`,
      rule: String.raw`$u^v = \mathrm{e}^{v\ln u}$ ; croissances comparées : $x\ln x \to 0$ en $0^+$.`,
      pitfall: String.raw`« $0^0$ » n'est pas égal à 0 : c'est une forme indéterminée, à lever avec l'exponentielle.`,
      steps: [
        String.raw`Rappel : une puissance à exposant variable se réécrit avec l'exponentielle : pour $x \gt 0$, $x^x = \mathrm{e}^{x\ln x}$. En $0^+$, $x^x$ est de la forme « $0^0$ », indéterminée.`,
        String.raw`On étudie l'exposant : $x\ln x$ est de la forme $0\times(-\infty)$ ; par croissances comparées en $0^+$, $x\ln x \to 0$.`,
        String.raw`L'exponentielle est continue en 0 : $\mathrm{e}^{x\ln x} \to \mathrm{e}^{0} = 1$.`,
        String.raw`Résultat : $1$. Contrôle numérique : $0{,}01^{0{,}01} = \mathrm{e}^{0{,}01\ln 0{,}01} \approx \mathrm{e}^{-0{,}046} \approx 0{,}955$ ✔.`
      ] }
  ]
});
