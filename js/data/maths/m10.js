/* Maths — Chapitre 10 : Séries de Fourier et transformée de Laplace */
APP.registerChapter({
  subject: 'maths',
  id: 'm10', num: 10,
  title: 'Séries de Fourier et transformée de Laplace',
  subtitle: 'Outils de l\'ingénieur pour les signaux',

  /* ======================================================================
     FICHES DE COURS
     ====================================================================== */
  sections: [
    {
      id: 'm10-s-periodiques',
      title: 'Signaux périodiques',
      html: String.raw`
<h3>Période, fréquence, pulsation</h3>
<p>Un signal $f$ est <b>périodique de période $T$</b> si $f(t + T) = f(t)$ pour tout $t$ ; on prend pour $T$ la plus petite période strictement positive (période fondamentale).</p>
<p>$$f = \frac{1}{T}\ \ (\text{en Hz}) \qquad\qquad \omega = \frac{2\pi}{T} = 2\pi f\ \ (\text{en rad/s})$$</p>
<p>L'<b>harmonique de rang $n$</b> est la composante de fréquence $nf$ (pulsation $n\omega$) ; l'harmonique de rang $1$ est le <b>fondamental</b>.</p>
<ul>
<li>$\cos(\omega t)$ et $\sin(\omega t)$ sont $T$-périodiques ; $\cos(n\omega t)$ l'est aussi (de période $\frac{T}{n}$).</li>
<li>Une somme de signaux de périodes $T_1$ et $T_2$ est périodique si $\frac{T_1}{T_2}$ est rationnel ; sa période est alors le plus petit multiple commun.</li>
</ul>

<h3>Valeur moyenne, valeur efficace</h3>
<p>On peut intégrer sur <b>n'importe quel intervalle de longueur $T$</b> :
$$\langle f \rangle = \frac{1}{T}\int_{0}^{T} f(t)\,\mathrm{d}t \qquad\qquad F_{\text{eff}} = \sqrt{\frac{1}{T}\int_{0}^{T} f(t)^2\,\mathrm{d}t}$$
$F_{\text{eff}}^2$ est la <b>puissance moyenne</b> du signal (dissipée dans une résistance de $1\ \Omega$).</p>
<ul>
<li>Sinusoïde $A\cos(\omega t + \varphi)$ : moyenne $0$, valeur efficace $\frac{A}{\sqrt2}$ (car la moyenne de $\cos^2$ vaut $\frac12$).</li>
<li>Créneau valant $E$ pendant $\alpha T$ et $0$ sinon (rapport cyclique $\alpha$) : moyenne $\alpha E$, valeur efficace $\sqrt{\alpha}\,E$.</li>
</ul>

<h3>Parité</h3>
<p>$f$ est <b>paire</b> si $f(-t) = f(t)$, <b>impaire</b> si $f(-t) = -f(t)$. Sur une période centrée :
$$\int_{-T/2}^{T/2} f = 2\int_{0}^{T/2} f \ \ (f \text{ paire}) \qquad \int_{-T/2}^{T/2} f = 0 \ \ (f \text{ impaire})$$
Produits : paire $\times$ paire et impaire $\times$ impaire sont paires ; paire $\times$ impaire est impaire.</p>
<div class="callout info"><b>Exemple corrigé</b> $f(t) = 3 + 4\cos(100\pi t)$ : $\omega = 100\pi$ rad/s, $f = 50$ Hz, $T = 20$ ms ; moyenne $3$ ; puissance moyenne $3^2 + \frac{4^2}{2} = 17$, valeur efficace $\sqrt{17}$.</div>
<div class="callout warn"><b>Pièges classiques</b>
<ul>
<li>Ne pas confondre $f$ (Hz) et $\omega$ (rad/s) : $50$ Hz $\leftrightarrow$ $100\pi \approx 314$ rad/s.</li>
<li>Valeur efficace $\neq$ valeur moyenne : un signal sinusoïdal a une moyenne nulle mais une valeur efficace non nulle.</li>
<li>La valeur efficace d'une somme n'est pas la somme des valeurs efficaces.</li>
</ul></div>
<div class="callout key"><b>À retenir</b> $\omega = \frac{2\pi}{T} = 2\pi f$. $\langle f \rangle = \frac1T\int_0^T f$, $F_{\text{eff}}^2 = \frac1T\int_0^T f^2$. Sinusoïde d'amplitude $A$ : $F_{\text{eff}} = \frac{A}{\sqrt2}$.</div>`
    },
    {
      id: 'm10-s-fourier-reel',
      title: 'Série de Fourier : coefficients réels et parité',
      html: String.raw`
<h3>Définition</h3>
<p>Soit $f$ $T$-périodique, continue par morceaux, et $\omega = \frac{2\pi}{T}$. Sa <b>série de Fourier</b> est
$$S(t) = a_0 + \sum_{n=1}^{+\infty} \big(a_n \cos(n\omega t) + b_n \sin(n\omega t)\big)$$
avec les <b>coefficients de Fourier</b> (intégrales sur n'importe quelle période) :
$$a_0 = \frac{1}{T}\int_0^T f(t)\,\mathrm{d}t, \qquad a_n = \frac{2}{T}\int_0^T f(t)\cos(n\omega t)\,\mathrm{d}t, \qquad b_n = \frac{2}{T}\int_0^T f(t)\sin(n\omega t)\,\mathrm{d}t.$$
$a_0$ est la <b>valeur moyenne</b> (composante continue).</p>
<div class="callout warn"><b>Attention aux conventions</b> Beaucoup de cours de maths écrivent $\frac{a_0}{2} + \sum(\dots)$ avec $a_0 = \frac{2}{T}\int_0^T f$. Les deux écritures donnent la même série ; ici, comme en électronique, $a_0$ <b>désigne la valeur moyenne</b>. Vérifie toujours la convention de l'énoncé.</div>
<p>Cas $T = 2\pi$ ($\omega = 1$) : $a_n = \dfrac{1}{\pi}\displaystyle\int_{-\pi}^{\pi} f(t)\cos(nt)\,\mathrm{d}t$ et $b_n = \dfrac{1}{\pi}\displaystyle\int_{-\pi}^{\pi} f(t)\sin(nt)\,\mathrm{d}t$.</p>

<h3>Simplifications par parité</h3>
<table class="tbl">
<tr><th>$f$</th><th>Coefficients nuls</th><th>Coefficients restants</th><th>Série</th></tr>
<tr><td>paire</td><td>$b_n = 0$</td><td>$a_n = \frac{4}{T}\int_0^{T/2} f(t)\cos(n\omega t)\,\mathrm{d}t$</td><td>cosinus (+ constante)</td></tr>
<tr><td>impaire</td><td>$a_n = 0$ (et $a_0 = 0$)</td><td>$b_n = \frac{4}{T}\int_0^{T/2} f(t)\sin(n\omega t)\,\mathrm{d}t$</td><td>sinus</td></tr>
</table>
<p>Symétrie de glissement : si $f\left(t + \frac{T}{2}\right) = -f(t)$ (signal « alternatif »), seuls les harmoniques de rang <b>impair</b> sont présents.</p>
<p>Valeurs utiles pour $n \in \mathbb{N}$ : $\sin(n\pi) = 0$, $\cos(n\pi) = (-1)^n$, $\cos(2n\pi) = 1$.</p>
<div class="callout tip"><b>Méthode</b>
<ol>
<li>Repérer $T$, $\omega$ et tracer le signal sur une ou deux périodes.</li>
<li>Étudier la parité (éventuellement après avoir retiré la valeur moyenne) : la moitié des coefficients est nulle.</li>
<li>$a_0$ : valeur moyenne, souvent par lecture d'aire.</li>
<li>$a_n$ ou $b_n$ : intégration (par parties si $f$ est affine).</li>
<li>Simplifier avec $(-1)^n$, puis distinguer $n$ pair / impair.</li>
</ol></div>
<div class="callout info"><b>Exemple corrigé : dent de scie</b> $f$ $2\pi$-périodique, $f(t) = t$ sur $]-\pi, \pi[$. $f$ est impaire : $a_n = 0$ et
$$b_n = \frac{2}{\pi}\int_0^{\pi} t\sin(nt)\,\mathrm{d}t.$$
Par parties : $\int_0^{\pi} t\sin(nt)\,\mathrm{d}t = \left[-\frac{t\cos(nt)}{n}\right]_0^{\pi} + \frac1n\int_0^{\pi}\cos(nt)\,\mathrm{d}t = -\frac{\pi(-1)^n}{n} + 0$. Donc
$$b_n = \frac{2(-1)^{n+1}}{n}, \qquad f(t) \sim 2\left(\sin t - \frac{\sin 2t}{2} + \frac{\sin 3t}{3} - \cdots\right).$$</div>
<div class="callout warn"><b>Pièges classiques</b>
<ul>
<li>Oublier le facteur $\frac{2}{T}$ (ou $\frac{4}{T}$ quand on n'intègre que sur une demi-période grâce à la parité).</li>
<li>$\cos(n\pi) = (-1)^n$, pas $0$ ; $\sin(n\pi) = 0$.</li>
<li>Traiter $n = 0$ à part : la formule de $a_n$ peut contenir une division par $n$.</li>
</ul></div>
<div class="callout key"><b>À retenir</b> $a_0 = $ moyenne ; $a_n, b_n = \frac{2}{T}\int_0^T f \cos / \sin$. Paire $\Rightarrow$ cosinus seuls ; impaire $\Rightarrow$ sinus seuls.</div>`
    },
    {
      id: 'm10-s-complexe',
      title: 'Forme complexe et spectre',
      html: String.raw`
<h3>Coefficients complexes</h3>
<p>Grâce à $\cos\theta = \frac{\mathrm{e}^{\mathrm{i}\theta} + \mathrm{e}^{-\mathrm{i}\theta}}{2}$ et $\sin\theta = \frac{\mathrm{e}^{\mathrm{i}\theta} - \mathrm{e}^{-\mathrm{i}\theta}}{2\mathrm{i}}$, la série s'écrit avec des exponentielles (en électronique on note $j$ au lieu de $\mathrm{i}$) :
$$S(t) = \sum_{n=-\infty}^{+\infty} c_n\,\mathrm{e}^{\mathrm{i} n\omega t}, \qquad c_n = \frac{1}{T}\int_0^T f(t)\,\mathrm{e}^{-\mathrm{i} n\omega t}\,\mathrm{d}t \quad (n \in \mathbb{Z}).$$</p>
<p><b>Passage réel $\leftrightarrow$ complexe</b> (pour $n \geq 1$) :
$$c_0 = a_0, \qquad c_n = \frac{a_n - \mathrm{i}\,b_n}{2}, \qquad c_{-n} = \frac{a_n + \mathrm{i}\,b_n}{2}$$
$$a_n = c_n + c_{-n} = 2\operatorname{Re}(c_n), \qquad b_n = \mathrm{i}(c_n - c_{-n}) = -2\operatorname{Im}(c_n).$$
Si $f$ est réelle, $c_{-n} = \overline{c_n}$. $f$ paire $\Leftrightarrow$ $c_n$ réels ; $f$ impaire $\Leftrightarrow$ $c_n$ imaginaires purs.</p>

<h3>Forme amplitude-phase et spectre</h3>
<p>Chaque harmonique s'écrit $a_n\cos(n\omega t) + b_n\sin(n\omega t) = A_n\cos(n\omega t + \varphi_n)$ avec
$$A_n = \sqrt{a_n^2 + b_n^2} = 2|c_n|, \qquad \varphi_n = \arg(c_n).$$
Le <b>spectre d'amplitude</b> est le diagramme en bâtons des $A_n$ en fonction de la fréquence $nf$ (spectre unilatéral) ou des $|c_n|$ pour $n \in \mathbb{Z}$ (spectre bilatéral, symétrique, de hauteur moitié).</p>
<div class="callout tip"><b>Régularité et décroissance</b> Plus le signal est régulier, plus ses coefficients décroissent vite :
<ul>
<li>signal discontinu (créneau, dent de scie) : $|c_n|$ de l'ordre de $\frac1n$ ;</li>
<li>signal continu à dérivée discontinue (triangle) : de l'ordre de $\frac{1}{n^2}$ ;</li>
<li>signal indéfiniment dérivable : décroissance plus rapide que toute puissance de $\frac1n$.</li>
</ul>
C'est pourquoi les fronts raides demandent une grande bande passante.</div>
<div class="callout info"><b>Exemples corrigés</b>
<ul>
<li>$f(t) = 2 + 3\cos(\omega t) + 4\sin(\omega t)$ : $a_0 = 2$, $a_1 = 3$, $b_1 = 4$, $A_1 = \sqrt{9 + 16} = 5$, $c_1 = \frac{3 - 4\mathrm{i}}{2}$, $c_{-1} = \frac{3 + 4\mathrm{i}}{2}$.</li>
<li>Dent de scie $f(t) = t$ sur $]-\pi, \pi[$ : $a_n = 0$, $b_n = \frac{2(-1)^{n+1}}{n}$, donc $c_n = -\frac{\mathrm{i}\,b_n}{2} = \frac{\mathrm{i}(-1)^n}{n}$ pour $n \neq 0$ (imaginaire pur : $f$ est impaire).</li>
</ul></div>
<div class="callout warn"><b>Pièges classiques</b>
<ul>
<li>$c_n$ utilise $\frac{1}{T}$, pas $\frac{2}{T}$.</li>
<li>Signe : $c_n = \frac{a_n - \mathrm{i}b_n}{2}$ (avec $\mathrm{e}^{-\mathrm{i}n\omega t}$ dans l'intégrale).</li>
<li>Les amplitudes ne s'additionnent pas : $3\cos + 4\sin$ a pour amplitude $5$, pas $7$.</li>
</ul></div>
<div class="callout key"><b>À retenir</b> $c_n = \frac1T\int_0^T f\,\mathrm{e}^{-\mathrm{i}n\omega t}$ ; $c_0 = a_0$, $c_n = \frac{a_n - \mathrm{i}b_n}{2}$ ; $A_n = \sqrt{a_n^2 + b_n^2} = 2|c_n|$. Spectre en $\frac1n$ si discontinu, en $\frac{1}{n^2}$ si continu à dérivée discontinue.</div>`
    },
    {
      id: 'm10-s-dirichlet-parseval',
      title: 'Convergence (Dirichlet) et égalité de Parseval',
      html: String.raw`
<h3>Théorème de Dirichlet</h3>
<p>Si $f$ est $T$-périodique et <b>$C^1$ par morceaux</b>, sa série de Fourier converge en tout point $t$, et
$$S(t) = \frac{f(t^+) + f(t^-)}{2}.$$
En un point de continuité, $S(t) = f(t)$ ; en un point de saut, la série converge vers le <b>milieu du saut</b>. Si $f$ est de plus continue, la convergence est uniforme.</p>
<p><b>Phénomène de Gibbs</b> : près d'une discontinuité, les sommes partielles dépassent la valeur du signal d'environ $9\,\%$ de la hauteur du saut. Ce dépassement se resserre quand on ajoute des harmoniques mais <b>ne disparaît pas</b>.</p>

<h3>Égalité de Parseval</h3>
<p>Avec la convention $a_0 = $ valeur moyenne :
$$\frac{1}{T}\int_0^T f(t)^2\,\mathrm{d}t = a_0^2 + \frac{1}{2}\sum_{n=1}^{+\infty}\left(a_n^2 + b_n^2\right) = \sum_{n=-\infty}^{+\infty} |c_n|^2.$$
<b>Interprétation physique</b> : la puissance moyenne du signal est la somme des puissances de ses harmoniques ($a_0^2$ pour la composante continue, $\frac{A_n^2}{2}$ pour l'harmonique $n$). Les harmoniques sont « orthogonaux » : leurs puissances s'ajoutent.</p>
<p>En électronique, on mesure la pollution harmonique par le <b>taux de distorsion</b> $\text{THD} = \dfrac{\sqrt{\sum_{n \geq 2} A_n^2}}{A_1}$.</p>
<div class="callout info"><b>Exemples corrigés</b>
<ul>
<li>Créneau impair $\pm 1$ ($2\pi$-périodique) : $b_{2k+1} = \frac{4}{\pi(2k+1)}$, les autres coefficients sont nuls, et sa puissance vaut $1$. Parseval : $1 = \frac12\sum_{k\geq0} \frac{16}{\pi^2(2k+1)^2}$, d'où $$\sum_{k=0}^{+\infty} \frac{1}{(2k+1)^2} = \frac{\pi^2}{8}.$$</li>
<li>Dent de scie $f(t) = t$ sur $]-\pi,\pi[$ : $\frac{1}{2\pi}\int_{-\pi}^{\pi} t^2\,\mathrm{d}t = \frac{\pi^2}{3} = \frac12\sum \frac{4}{n^2}$, d'où $\sum \frac{1}{n^2} = \frac{\pi^2}{6}$.</li>
<li>Dirichlet pour le créneau en $t = \frac{\pi}{2}$ (point de continuité, $f = 1$) : $1 = \frac{4}{\pi}\left(1 - \frac13 + \frac15 - \cdots\right)$, soit $\sum \frac{(-1)^k}{2k+1} = \frac{\pi}{4}$. En $t = 0$ (saut de $-1$ à $1$), la série vaut $0$.</li>
</ul></div>
<div class="callout warn"><b>Pièges classiques</b>
<ul>
<li>En un point de discontinuité, la somme de la série n'est <b>pas</b> $f(t)$ mais la demi-somme des limites.</li>
<li>Dans Parseval, la composante continue compte pour $a_0^2$ (pas $\frac{a_0^2}{2}$) avec cette convention, et chaque harmonique pour $\frac{a_n^2 + b_n^2}{2}$.</li>
</ul></div>
<div class="callout key"><b>À retenir</b> Dirichlet : $S(t) = \frac{f(t^+) + f(t^-)}{2}$. Parseval : puissance $= a_0^2 + \frac12\sum(a_n^2 + b_n^2) = \sum |c_n|^2$ ; outil pour calculer des sommes de séries numériques.</div>`
    },
    {
      id: 'm10-s-exemples',
      title: 'Exemples classiques : créneau, dent de scie, triangle',
      html: String.raw`
<h3>Le créneau impair</h3>
<p>$f$ $2\pi$-périodique, $f(t) = 1$ sur $]0, \pi[$ et $f(t) = -1$ sur $]-\pi, 0[$. $f$ est impaire, donc $a_n = 0$ et
$$b_n = \frac{2}{\pi}\int_0^{\pi}\sin(nt)\,\mathrm{d}t = \frac{2}{\pi}\cdot\frac{1 - \cos(n\pi)}{n} = \frac{2\left(1 - (-1)^n\right)}{n\pi} = \begin{cases} \frac{4}{n\pi} & n \text{ impair} \\ 0 & n \text{ pair} \end{cases}$$
$$f(t) = \frac{4}{\pi}\left(\sin t + \frac{\sin 3t}{3} + \frac{\sin 5t}{5} + \cdots\right) = \frac{4}{\pi}\sum_{k=0}^{+\infty}\frac{\sin\big((2k+1)t\big)}{2k+1}.$$
Pour une amplitude $E$ et une pulsation $\omega$ quelconques : $f(t) = \frac{4E}{\pi}\sum \frac{\sin((2k+1)\omega t)}{2k+1}$.</p>
<p>Le créneau et sa somme partielle d'ordre $7$ (remarque le dépassement de Gibbs près des sauts) :</p>
<div class="widget" data-w="plot" data-f="sign(sin(x));4/pi*(sin(x)+sin(3*x)/3+sin(5*x)/5+sin(7*x)/7)" data-x="-6.3;6.3" data-y="-1.5;1.5"></div>

<h3>La dent de scie</h3>
<p>$f(t) = t$ sur $]-\pi, \pi[$ (impaire, discontinue en $\pm\pi$) :
$$f(t) = 2\sum_{n=1}^{+\infty} \frac{(-1)^{n+1}}{n}\sin(nt) = 2\left(\sin t - \frac{\sin 2t}{2} + \frac{\sin 3t}{3} - \cdots\right).$$</p>

<h3>Le triangle</h3>
<p>$f(t) = |t|$ sur $[-\pi, \pi]$ (paire, <b>continue</b>) : $b_n = 0$, $a_0 = \frac{1}{\pi}\int_0^{\pi} t\,\mathrm{d}t = \frac{\pi}{2}$ et, par parties,
$$a_n = \frac{2}{\pi}\int_0^{\pi} t\cos(nt)\,\mathrm{d}t = \frac{2\left((-1)^n - 1\right)}{\pi n^2} = \begin{cases} -\frac{4}{\pi n^2} & n \text{ impair} \\ 0 & n \text{ pair} \end{cases}$$
$$|t| = \frac{\pi}{2} - \frac{4}{\pi}\sum_{k=0}^{+\infty}\frac{\cos\big((2k+1)t\big)}{(2k+1)^2}.$$
Les coefficients décroissent en $\frac{1}{n^2}$ : quelques harmoniques suffisent à bien l'approcher.</p>

<h3>Le redressé double alternance</h3>
<p>$f(t) = |\sin t|$, de période $\pi$ ($\omega = 2$), paire :
$$|\sin t| = \frac{2}{\pi} - \frac{4}{\pi}\sum_{n=1}^{+\infty} \frac{\cos(2nt)}{4n^2 - 1}.$$
Sa valeur moyenne $\frac{2}{\pi}$ est la tension continue obtenue après filtrage.</p>
<div class="callout tip"><b>Méthode : signal non centré</b> Un créneau valant $E$ puis $0$ n'est ni pair ni impair : on écrit $f = \frac{E}{2} + g$ où $g$ est un créneau impair d'amplitude $\frac{E}{2}$. Donc $a_0 = \frac{E}{2}$ et $b_n = \frac{E\left(1 - (-1)^n\right)}{n\pi}$.</div>
<div class="callout warn"><b>Pièges classiques</b>
<ul>
<li>Le créneau ne contient <b>aucun</b> harmonique pair : $b_2 = b_4 = \cdots = 0$.</li>
<li>Ne pas écrire $b_n = \frac{4}{n\pi}$ pour tout $n$ : seulement pour $n$ impair.</li>
<li>Avant d'invoquer la parité, vérifier sur le dessin (un signal décalé dans le temps perd sa parité).</li>
</ul></div>
<div class="callout key"><b>À retenir</b> Créneau : $\frac{4}{\pi}\sum \frac{\sin((2k+1)t)}{2k+1}$ ; dent de scie : $2\sum \frac{(-1)^{n+1}\sin(nt)}{n}$ ; triangle : $\frac{\pi}{2} - \frac{4}{\pi}\sum \frac{\cos((2k+1)t)}{(2k+1)^2}$.</div>`
    },
    {
      id: 'm10-s-laplace-def',
      title: 'Transformée de Laplace : définition et table',
      html: String.raw`
<h3>Signaux causaux et échelon unité</h3>
<p>En automatique et en électronique, on étudie des signaux <b>causaux</b> : nuls pour $t \lt 0$ (le système « démarre » en $t = 0$). L'<b>échelon unité</b> (fonction de Heaviside, notée $u(t)$, $\Gamma(t)$ ou $H(t)$) vaut
$$u(t) = \begin{cases} 0 & \text{si } t \lt 0 \\ 1 & \text{si } t \geq 0 \end{cases}$$
Multiplier par $u(t)$ rend un signal causal ; par convention, $\sin t$ signifie $\sin(t)\,u(t)$. La <b>rampe</b> est $t\,u(t)$ ; l'<b>impulsion de Dirac</b> $\delta$ est la « dérivée » de $u$.</p>

<h3>Définition</h3>
<p>La <b>transformée de Laplace</b> d'un signal causal $f$ est la fonction de la variable $p$ (notée $s$ dans les textes anglo-saxons) :
$$F(p) = \mathcal{L}[f](p) = \int_0^{+\infty} f(t)\,\mathrm{e}^{-pt}\,\mathrm{d}t,$$
définie pour $\operatorname{Re}(p)$ assez grand (abscisse de convergence). Elle transforme les <b>équations différentielles</b> en <b>équations algébriques</b>.</p>
<ul>
<li>$\mathcal{L}[1] = \int_0^{+\infty} \mathrm{e}^{-pt}\,\mathrm{d}t = \left[-\frac{\mathrm{e}^{-pt}}{p}\right]_0^{+\infty} = \frac1p$ ($p > 0$).</li>
<li>$\mathcal{L}[\mathrm{e}^{-at}] = \int_0^{+\infty}\mathrm{e}^{-(p+a)t}\,\mathrm{d}t = \frac{1}{p+a}$.</li>
<li>Par parties, $\mathcal{L}[t] = \frac{1}{p^2}$ et plus généralement $\mathcal{L}[t^n] = \frac{n!}{p^{n+1}}$.</li>
<li>Avec $\mathrm{e}^{\mathrm{i}\omega t}$ : $\mathcal{L}[\mathrm{e}^{\mathrm{i}\omega t}] = \frac{1}{p - \mathrm{i}\omega} = \frac{p + \mathrm{i}\omega}{p^2 + \omega^2}$ ; parties réelle et imaginaire donnent $\cos$ et $\sin$.</li>
</ul>

<h3>Table des transformées usuelles</h3>
<table class="tbl">
<tr><th>$f(t)$ (causal)</th><th>$F(p)$</th></tr>
<tr><td>$\delta(t)$</td><td>$1$</td></tr>
<tr><td>$u(t)$ ou $1$</td><td>$\frac{1}{p}$</td></tr>
<tr><td>$t$</td><td>$\frac{1}{p^2}$</td></tr>
<tr><td>$t^n$</td><td>$\frac{n!}{p^{n+1}}$</td></tr>
<tr><td>$\mathrm{e}^{-at}$</td><td>$\frac{1}{p+a}$</td></tr>
<tr><td>$t^n\mathrm{e}^{-at}$</td><td>$\frac{n!}{(p+a)^{n+1}}$</td></tr>
<tr><td>$\sin(\omega t)$</td><td>$\frac{\omega}{p^2 + \omega^2}$</td></tr>
<tr><td>$\cos(\omega t)$</td><td>$\frac{p}{p^2 + \omega^2}$</td></tr>
<tr><td>$\mathrm{e}^{-at}\sin(\omega t)$</td><td>$\frac{\omega}{(p+a)^2 + \omega^2}$</td></tr>
<tr><td>$\mathrm{e}^{-at}\cos(\omega t)$</td><td>$\frac{p+a}{(p+a)^2 + \omega^2}$</td></tr>
</table>
<div class="callout info"><b>Exemple corrigé</b> Par linéarité : $\mathcal{L}\left[3 - 2t + \mathrm{e}^{-4t}\right] = \dfrac{3}{p} - \dfrac{2}{p^2} + \dfrac{1}{p+4}$.</div>
<div class="callout warn"><b>Pièges classiques</b>
<ul>
<li>$\mathcal{L}[fg] \neq \mathcal{L}[f]\,\mathcal{L}[g]$ : la transformée d'un produit n'est pas le produit des transformées.</li>
<li>$\sin \leftrightarrow \omega$ au numérateur ; $\cos \leftrightarrow p$ au numérateur.</li>
<li>$\mathcal{L}[t^n]$ contient un $n!$ : $\mathcal{L}[t^2] = \frac{2}{p^3}$, pas $\frac{1}{p^3}$.</li>
</ul></div>
<div class="callout key"><b>À retenir</b> $F(p) = \int_0^{+\infty} f(t)\mathrm{e}^{-pt}\,\mathrm{d}t$. $u \to \frac1p$, $t^n \to \frac{n!}{p^{n+1}}$, $\mathrm{e}^{-at} \to \frac{1}{p+a}$, $\sin\omega t \to \frac{\omega}{p^2 + \omega^2}$, $\cos\omega t \to \frac{p}{p^2+\omega^2}$.</div>`
    },
    {
      id: 'm10-s-laplace-prop',
      title: 'Propriétés de la transformée de Laplace',
      html: String.raw`
<h3>Les règles opératoires</h3>
<table class="tbl">
<tr><th>Propriété</th><th>Signal</th><th>Transformée</th></tr>
<tr><td>Linéarité</td><td>$\alpha f + \beta g$</td><td>$\alpha F + \beta G$</td></tr>
<tr><td>Dérivation</td><td>$f'(t)$</td><td>$pF(p) - f(0^+)$</td></tr>
<tr><td>Dérivée seconde</td><td>$f''(t)$</td><td>$p^2F(p) - pf(0^+) - f'(0^+)$</td></tr>
<tr><td>Intégration</td><td>$\int_0^t f(s)\,\mathrm{d}s$</td><td>$\frac{F(p)}{p}$</td></tr>
<tr><td>Retard</td><td>$f(t - \tau)\,u(t - \tau)$</td><td>$\mathrm{e}^{-\tau p}F(p)$</td></tr>
<tr><td>Amortissement</td><td>$\mathrm{e}^{-at}f(t)$</td><td>$F(p + a)$</td></tr>
<tr><td>Multiplication par $t$</td><td>$t\,f(t)$</td><td>$-F'(p)$</td></tr>
<tr><td>Convolution</td><td>$(f * g)(t) = \int_0^t f(s)g(t-s)\,\mathrm{d}s$</td><td>$F(p)\,G(p)$</td></tr>
</table>
<p>À retenir sous forme imagée : <b>dériver $\approx$ multiplier par $p$</b>, <b>intégrer $\approx$ diviser par $p$</b>, <b>retarder de $\tau$ $\approx$ multiplier par $\mathrm{e}^{-\tau p}$</b>, <b>amortir par $\mathrm{e}^{-at}$ $\approx$ remplacer $p$ par $p + a$</b>.</p>

<h3>Théorèmes de la valeur initiale et de la valeur finale</h3>
<p>$$f(0^+) = \lim_{p \to +\infty} pF(p) \qquad\qquad \lim_{t \to +\infty} f(t) = \lim_{p \to 0} pF(p)$$
Le théorème de la valeur finale ne s'applique que si $f$ a une limite finie, c'est-à-dire si tous les pôles de $pF(p)$ sont à partie réelle <b>strictement négative</b>.</p>
<div class="callout info"><b>Exemples corrigés</b>
<ul>
<li>$\mathcal{L}[t\,\mathrm{e}^{-2t}]$ : $\mathcal{L}[t] = \frac{1}{p^2}$, puis amortissement $p \to p + 2$ : $\frac{1}{(p+2)^2}$.</li>
<li>$\mathcal{L}[\mathrm{e}^{-t}\sin 2t] = \frac{2}{(p+1)^2 + 4}$.</li>
<li>Impulsion rectangulaire de durée $\tau$ : $u(t) - u(t - \tau) \to \frac{1 - \mathrm{e}^{-\tau p}}{p}$.</li>
<li>$\mathcal{L}[t\sin t] = -\frac{\mathrm{d}}{\mathrm{d}p}\left(\frac{1}{p^2 + 1}\right) = \frac{2p}{(p^2+1)^2}$.</li>
<li>$F(p) = \frac{3}{p(p+2)}$ : $pF(p) = \frac{3}{p+2}$, pôle $-2 \lt 0$, donc $\lim_{t\to+\infty} f(t) = \frac32$ ; et $f(0^+) = \lim_{p\to+\infty}\frac{3}{p+2} = 0$.</li>
</ul></div>
<div class="callout warn"><b>Pièges classiques</b>
<ul>
<li>Dérivation : ne pas oublier les <b>conditions initiales</b> $-f(0)$, $-pf(0) - f'(0)$.</li>
<li>Retard : il faut retarder <b>tout</b> le signal, $f(t - \tau)u(t - \tau)$, et non $f(t)u(t - \tau)$.</li>
<li>Valeur finale appliquée à $\sin t$ : $pF(p) = \frac{p}{p^2+1} \to 0$, alors que $\sin t$ n'a pas de limite (pôles $\pm\mathrm{i}$ non strictement à gauche).</li>
<li>Amortissement : $F(p + a)$ pour $\mathrm{e}^{-at}$ (signe « $+$ »), à ne pas confondre avec le retard.</li>
</ul></div>
<div class="callout key"><b>À retenir</b> $f' \to pF - f(0)$ ; $\int_0^t f \to \frac{F}{p}$ ; retard $\to \mathrm{e}^{-\tau p}F$ ; $\mathrm{e}^{-at}f \to F(p+a)$ ; valeur initiale $\lim_{p\to\infty} pF$ ; valeur finale $\lim_{p\to0} pF$ (si stable).</div>`
    },
    {
      id: 'm10-s-inverse-edo',
      title: 'Inverse, EDO et fonction de transfert',
      html: String.raw`
<h3>Transformée inverse</h3>
<p>$\mathcal{L}$ est injective sur les signaux causaux continus : connaissant $F$, on retrouve $f = \mathcal{L}^{-1}[F]$ en lisant la table « à l'envers ». Pour une fraction rationnelle $F = \frac{N}{D}$ ($\deg N \lt \deg D$), on <b>décompose en éléments simples</b> :</p>
<ul>
<li>pôle simple $a$ : $\dfrac{A}{p - a} \to A\,\mathrm{e}^{at}$, avec $A = \big[(p - a)F(p)\big]_{p = a}$ (méthode du « cache ») ;</li>
<li>pôle double : $\dfrac{A}{(p-a)^2} \to A\,t\,\mathrm{e}^{at}$ ;</li>
<li>pôles complexes : mettre $p^2 + bp + c$ sous forme canonique $(p + \alpha)^2 + \omega^2$, puis $\mathrm{e}^{-\alpha t}\cos\omega t$ et $\mathrm{e}^{-\alpha t}\sin\omega t$.</li>
</ul>
<div class="callout info"><b>Exemples corrigés</b>
<ul>
<li>$\dfrac{p+3}{(p+1)(p+2)} = \dfrac{A}{p+1} + \dfrac{B}{p+2}$ : $A = \frac{-1+3}{-1+2} = 2$, $B = \frac{-2+3}{-2+1} = -1$, donc $f(t) = 2\mathrm{e}^{-t} - \mathrm{e}^{-2t}$.</li>
<li>$\dfrac{1}{p^2 + 2p + 5} = \dfrac{1}{(p+1)^2 + 4} = \dfrac12\cdot\dfrac{2}{(p+1)^2 + 2^2}$, donc $f(t) = \frac12\mathrm{e}^{-t}\sin(2t)$.</li>
</ul></div>

<h3>Résolution d'une équation différentielle</h3>
<div class="flow"><span>Transformer l'EDO (avec les conditions initiales)</span><span>Résoudre l'équation algébrique en $Y(p)$</span><span>Décomposer en éléments simples</span><span>Inverser avec la table</span></div>
<div class="callout info"><b>Exemple corrigé</b> $y'' + 3y' + 2y = 0$, $y(0) = 0$, $y'(0) = 1$. On transforme : $\big(p^2Y - 0 - 1\big) + 3\big(pY - 0\big) + 2Y = 0$, d'où
$$Y(p) = \frac{1}{p^2 + 3p + 2} = \frac{1}{(p+1)(p+2)} = \frac{1}{p+1} - \frac{1}{p+2}, \qquad y(t) = \mathrm{e}^{-t} - \mathrm{e}^{-2t}.$$</div>

<h3>Fonction de transfert</h3>
<p>Pour un système linéaire invariant d'entrée $e(t)$ et de sortie $s(t)$, <b>à conditions initiales nulles</b> :
$$H(p) = \frac{S(p)}{E(p)}, \qquad S(p) = H(p)\,E(p).$$
La réponse impulsionnelle est $h = \mathcal{L}^{-1}[H]$ et $s = h * e$. Le système est <b>stable</b> si tous les pôles de $H$ sont à partie réelle strictement négative.</p>
<h4>Premier ordre</h4>
<p>$\tau\,s'(t) + s(t) = K\,e(t)$ donne $H(p) = \dfrac{K}{1 + \tau p}$ : $K$ est le <b>gain statique</b> ($K = H(0)$), $\tau$ la <b>constante de temps</b>. Exemple : circuit RC, $H(p) = \frac{1}{1 + RCp}$, $\tau = RC$.</p>
<p>Réponse indicielle (entrée échelon $e(t) = E_0\,u(t)$, donc $E(p) = \frac{E_0}{p}$) :
$$S(p) = \frac{KE_0}{p(1 + \tau p)} = KE_0\left(\frac{1}{p} - \frac{1}{p + 1/\tau}\right), \qquad s(t) = KE_0\left(1 - \mathrm{e}^{-t/\tau}\right).$$
À $t = \tau$, $s$ atteint $63\,\%$ de sa valeur finale ; à $3\tau$, $95\,\%$ (temps de réponse à $5\,\%$) ; la tangente à l'origine coupe l'asymptote en $t = \tau$.</p>
<div class="widget" data-w="plot" data-f="1-exp(-x);1;x" data-x="0;5" data-y="0;1.2"></div>
<p>Second ordre (pour mémoire) : $H(p) = \dfrac{K}{1 + \frac{2\xi}{\omega_0}p + \frac{p^2}{\omega_0^2}}$ ($\xi$ amortissement, $\omega_0$ pulsation propre).</p>
<div class="callout warn"><b>Pièges classiques</b>
<ul>
<li>Mettre $H$ sous <b>forme canonique</b> (terme constant $1$ au dénominateur) avant de lire $K$ et $\tau$ : $\frac{3}{2 + 6p} = \frac{1{,}5}{1 + 3p}$, donc $K = 1{,}5$ et $\tau = 3$.</li>
<li>La fonction de transfert suppose des conditions initiales <b>nulles</b>.</li>
<li>$\mathrm{e}^{-t/\tau}$ correspond au pôle $-\frac{1}{\tau}$, pas $-\tau$.</li>
</ul></div>
<div class="callout key"><b>À retenir</b> Inverse : éléments simples + table. EDO : transformer avec conditions initiales, isoler $Y$, inverser. Premier ordre $\frac{K}{1 + \tau p}$ : $s(t) = KE_0(1 - \mathrm{e}^{-t/\tau})$, $63\,\%$ à $\tau$, $95\,\%$ à $3\tau$.</div>`
    },
    {
      id: 'm10-s-memo',
      title: 'Mémo / tableau récapitulatif',
      html: String.raw`
<h3>Séries de Fourier ($\omega = \frac{2\pi}{T}$)</h3>
<table class="tbl">
<tr><th>Objet</th><th>Formule</th></tr>
<tr><td>Série</td><td>$a_0 + \sum_{n\geq1}\big(a_n\cos n\omega t + b_n\sin n\omega t\big) = \sum_{n\in\mathbb{Z}} c_n\mathrm{e}^{\mathrm{i}n\omega t}$</td></tr>
<tr><td>Coefficients</td><td>$a_0 = \frac1T\int_0^T f$, $a_n = \frac2T\int_0^T f\cos n\omega t$, $b_n = \frac2T\int_0^T f\sin n\omega t$</td></tr>
<tr><td>Complexes</td><td>$c_n = \frac1T\int_0^T f\,\mathrm{e}^{-\mathrm{i}n\omega t} = \frac{a_n - \mathrm{i}b_n}{2}$</td></tr>
<tr><td>Parité</td><td>paire : $b_n = 0$ ; impaire : $a_n = 0$</td></tr>
<tr><td>Dirichlet</td><td>$S(t) = \frac{f(t^+) + f(t^-)}{2}$</td></tr>
<tr><td>Parseval</td><td>$\frac1T\int_0^T f^2 = a_0^2 + \frac12\sum(a_n^2 + b_n^2) = \sum|c_n|^2$</td></tr>
</table>
<div class="grid2">
<div class="mini"><h4>Créneau $\pm1$</h4><p>$\frac{4}{\pi}\sum_{k\ge0}\frac{\sin(2k+1)t}{2k+1}$, coefficients en $\frac1n$.</p></div>
<div class="mini"><h4>Triangle $|t|$</h4><p>$\frac{\pi}{2} - \frac{4}{\pi}\sum_{k\ge0}\frac{\cos(2k+1)t}{(2k+1)^2}$, coefficients en $\frac{1}{n^2}$.</p></div>
</div>
<h3>Transformée de Laplace</h3>
<table class="tbl">
<tr><th>$f(t)$</th><th>$F(p)$</th><th>Propriété</th><th>Transformée</th></tr>
<tr><td>$u(t)$</td><td>$\frac1p$</td><td>$f'$</td><td>$pF - f(0)$</td></tr>
<tr><td>$t^n$</td><td>$\frac{n!}{p^{n+1}}$</td><td>$f''$</td><td>$p^2F - pf(0) - f'(0)$</td></tr>
<tr><td>$\mathrm{e}^{-at}$</td><td>$\frac{1}{p+a}$</td><td>$\int_0^t f$</td><td>$\frac{F}{p}$</td></tr>
<tr><td>$\sin\omega t$</td><td>$\frac{\omega}{p^2+\omega^2}$</td><td>$f(t-\tau)u(t-\tau)$</td><td>$\mathrm{e}^{-\tau p}F$</td></tr>
<tr><td>$\cos\omega t$</td><td>$\frac{p}{p^2+\omega^2}$</td><td>$\mathrm{e}^{-at}f$</td><td>$F(p+a)$</td></tr>
<tr><td>$\delta$</td><td>$1$</td><td>$tf$</td><td>$-F'(p)$</td></tr>
</table>
<div class="flow"><span>EDO + CI</span><span>$\mathcal{L}$</span><span>$Y(p)$</span><span>éléments simples</span><span>$\mathcal{L}^{-1}$</span><span>$y(t)$</span></div>
<div class="callout key"><b>Réflexes</b> Valeur initiale $\lim_{p\to\infty} pF$, valeur finale $\lim_{p\to0} pF$ (pôles à gauche). Premier ordre $\frac{K}{1+\tau p}$ : $K E_0(1 - \mathrm{e}^{-t/\tau})$, $63\,\%$ à $\tau$, $95\,\%$ à $3\tau$.</div>`
    }
  ],

  /* ======================================================================
     FORMULAIRE
     ====================================================================== */
  formulas: [
    { id: 'm10-fo-pulsation', name: 'Pulsation, fréquence, période', tex: String.raw`\omega = \frac{2\pi}{T} = 2\pi f`, note: String.raw`$f$ en Hz, $\omega$ en rad/s` },
    { id: 'm10-fo-moyenne', name: 'Valeur moyenne', tex: String.raw`\langle f \rangle = \frac{1}{T}\int_0^T f(t)\,\mathrm{d}t`, note: String.raw`sur n'importe quel intervalle de longueur $T$` },
    { id: 'm10-fo-efficace', name: 'Valeur efficace', tex: String.raw`F_{\text{eff}} = \sqrt{\frac{1}{T}\int_0^T f(t)^2\,\mathrm{d}t}`, note: String.raw`sinusoïde d'amplitude $A$ : $F_{\text{eff}} = \frac{A}{\sqrt2}$` },
    { id: 'm10-fo-serie', name: 'Série de Fourier (forme réelle)', tex: String.raw`S(t) = a_0 + \sum_{n=1}^{+\infty}\big(a_n\cos(n\omega t) + b_n\sin(n\omega t)\big)` },
    { id: 'm10-fo-a0', name: 'Coefficient a₀ (valeur moyenne)', tex: String.raw`a_0 = \frac{1}{T}\int_0^T f(t)\,\mathrm{d}t`, note: String.raw`autre convention : $\frac{a_0}{2}$ avec $a_0 = \frac{2}{T}\int_0^T f$` },
    { id: 'm10-fo-an', name: 'Coefficients aₙ', tex: String.raw`a_n = \frac{2}{T}\int_0^T f(t)\cos(n\omega t)\,\mathrm{d}t` },
    { id: 'm10-fo-bn', name: 'Coefficients bₙ', tex: String.raw`b_n = \frac{2}{T}\int_0^T f(t)\sin(n\omega t)\,\mathrm{d}t` },
    { id: 'm10-fo-2pi', name: 'Cas 2π-périodique', tex: String.raw`a_n = \frac{1}{\pi}\int_{-\pi}^{\pi} f(t)\cos(nt)\,\mathrm{d}t,\qquad b_n = \frac{1}{\pi}\int_{-\pi}^{\pi} f(t)\sin(nt)\,\mathrm{d}t` },
    { id: 'm10-fo-paire', name: 'Signal pair', tex: String.raw`b_n = 0,\qquad a_n = \frac{4}{T}\int_0^{T/2} f(t)\cos(n\omega t)\,\mathrm{d}t`, note: String.raw`série de cosinus` },
    { id: 'm10-fo-impaire', name: 'Signal impair', tex: String.raw`a_n = 0,\qquad b_n = \frac{4}{T}\int_0^{T/2} f(t)\sin(n\omega t)\,\mathrm{d}t`, note: String.raw`série de sinus, $a_0 = 0$` },
    { id: 'm10-fo-cos-npi', name: 'Valeurs en nπ', tex: String.raw`\cos(n\pi) = (-1)^n,\qquad \sin(n\pi) = 0`, note: String.raw`$1 - (-1)^n$ vaut $2$ si $n$ impair, $0$ si $n$ pair` },
    { id: 'm10-fo-cn', name: 'Coefficients complexes', tex: String.raw`c_n = \frac{1}{T}\int_0^T f(t)\,\mathrm{e}^{-\mathrm{i}n\omega t}\,\mathrm{d}t \quad (n \in \mathbb{Z})` },
    { id: 'm10-fo-serie-c', name: 'Série de Fourier (forme complexe)', tex: String.raw`S(t) = \sum_{n=-\infty}^{+\infty} c_n\,\mathrm{e}^{\mathrm{i}n\omega t}` },
    { id: 'm10-fo-cn-anbn', name: 'Lien cₙ / aₙ, bₙ', tex: String.raw`c_0 = a_0,\qquad c_n = \frac{a_n - \mathrm{i}\,b_n}{2},\qquad c_{-n} = \overline{c_n}`, note: String.raw`réciproquement $a_n = 2\operatorname{Re} c_n$, $b_n = -2\operatorname{Im} c_n$` },
    { id: 'm10-fo-amplitude', name: 'Amplitude de l\'harmonique n', tex: String.raw`A_n = \sqrt{a_n^2 + b_n^2} = 2|c_n|`, note: String.raw`$a_n\cos n\omega t + b_n \sin n\omega t = A_n\cos(n\omega t + \varphi_n)$, $\varphi_n = \arg c_n$` },
    { id: 'm10-fo-dirichlet', name: 'Théorème de Dirichlet', tex: String.raw`S(t) = \frac{f(t^+) + f(t^-)}{2}`, note: String.raw`$f$ périodique et $C^1$ par morceaux ; $S(t) = f(t)$ si $f$ continue en $t$` },
    { id: 'm10-fo-parseval', name: 'Égalité de Parseval', tex: String.raw`\frac{1}{T}\int_0^T f(t)^2\,\mathrm{d}t = a_0^2 + \frac12\sum_{n=1}^{+\infty}\left(a_n^2 + b_n^2\right) = \sum_{n=-\infty}^{+\infty}|c_n|^2` },
    { id: 'm10-fo-creneau', name: 'Créneau impair ±E', tex: String.raw`f(t) = \frac{4E}{\pi}\sum_{k=0}^{+\infty}\frac{\sin\big((2k+1)\omega t\big)}{2k+1}`, note: String.raw`Parseval donne $\sum_{k\ge0} \frac{1}{(2k+1)^2} = \frac{\pi^2}{8}$` },
    { id: 'm10-fo-dent', name: 'Dent de scie t sur ]−π, π[', tex: String.raw`t = 2\sum_{n=1}^{+\infty}\frac{(-1)^{n+1}}{n}\sin(nt)`, note: String.raw`Parseval donne $\sum \frac{1}{n^2} = \frac{\pi^2}{6}$` },
    { id: 'm10-fo-triangle', name: 'Triangle |t| sur [−π, π]', tex: String.raw`|t| = \frac{\pi}{2} - \frac{4}{\pi}\sum_{k=0}^{+\infty}\frac{\cos\big((2k+1)t\big)}{(2k+1)^2}` },
    { id: 'm10-fo-redresse', name: 'Redressé double alternance', tex: String.raw`|\sin t| = \frac{2}{\pi} - \frac{4}{\pi}\sum_{n=1}^{+\infty}\frac{\cos(2nt)}{4n^2 - 1}` },
    { id: 'm10-fo-laplace-def', name: 'Transformée de Laplace', tex: String.raw`F(p) = \mathcal{L}[f](p) = \int_0^{+\infty} f(t)\,\mathrm{e}^{-pt}\,\mathrm{d}t` },
    { id: 'm10-fo-echelon', name: 'Échelon unité', tex: String.raw`u(t) = \begin{cases} 0 & t \lt 0 \\ 1 & t \geq 0 \end{cases} \qquad \mathcal{L}[u] = \frac{1}{p}`, note: String.raw`et $\mathcal{L}[\delta] = 1$ (impulsion de Dirac)` },
    { id: 'm10-fo-L-tn', name: 'Transformée de tⁿ', tex: String.raw`\mathcal{L}[t^n] = \frac{n!}{p^{n+1}}`, note: String.raw`$\mathcal{L}[t] = \frac{1}{p^2}$, $\mathcal{L}[t^2] = \frac{2}{p^3}$` },
    { id: 'm10-fo-L-exp', name: 'Transformée de l\'exponentielle', tex: String.raw`\mathcal{L}\left[\mathrm{e}^{-at}\right] = \frac{1}{p+a}` },
    { id: 'm10-fo-L-sin', name: 'Transformée du sinus', tex: String.raw`\mathcal{L}[\sin(\omega t)] = \frac{\omega}{p^2 + \omega^2}` },
    { id: 'm10-fo-L-cos', name: 'Transformée du cosinus', tex: String.raw`\mathcal{L}[\cos(\omega t)] = \frac{p}{p^2 + \omega^2}` },
    { id: 'm10-fo-L-tnexp', name: 'Transformée de tⁿ e^(−at)', tex: String.raw`\mathcal{L}\left[t^n\mathrm{e}^{-at}\right] = \frac{n!}{(p+a)^{n+1}}` },
    { id: 'm10-fo-L-expsin', name: 'Sinus amorti', tex: String.raw`\mathcal{L}\left[\mathrm{e}^{-at}\sin(\omega t)\right] = \frac{\omega}{(p+a)^2 + \omega^2}` },
    { id: 'm10-fo-L-expcos', name: 'Cosinus amorti', tex: String.raw`\mathcal{L}\left[\mathrm{e}^{-at}\cos(\omega t)\right] = \frac{p+a}{(p+a)^2 + \omega^2}` },
    { id: 'm10-fo-L-lin', name: 'Linéarité', tex: String.raw`\mathcal{L}[\alpha f + \beta g] = \alpha F + \beta G` },
    { id: 'm10-fo-L-deriv', name: 'Dérivation', tex: String.raw`\mathcal{L}[f'] = pF(p) - f(0^+)` },
    { id: 'm10-fo-L-deriv2', name: 'Dérivée seconde', tex: String.raw`\mathcal{L}[f''] = p^2F(p) - p\,f(0^+) - f'(0^+)` },
    { id: 'm10-fo-L-integ', name: 'Intégration', tex: String.raw`\mathcal{L}\left[\int_0^t f(s)\,\mathrm{d}s\right] = \frac{F(p)}{p}` },
    { id: 'm10-fo-L-retard', name: 'Théorème du retard', tex: String.raw`\mathcal{L}\big[f(t-\tau)\,u(t-\tau)\big] = \mathrm{e}^{-\tau p}F(p)` },
    { id: 'm10-fo-L-amort', name: 'Amortissement (translation en p)', tex: String.raw`\mathcal{L}\left[\mathrm{e}^{-at}f(t)\right] = F(p+a)` },
    { id: 'm10-fo-L-mult-t', name: 'Multiplication par t', tex: String.raw`\mathcal{L}[t\,f(t)] = -F'(p)` },
    { id: 'm10-fo-L-conv', name: 'Produit de convolution', tex: String.raw`\mathcal{L}[f * g] = F(p)\,G(p)`, note: String.raw`$(f*g)(t) = \int_0^t f(s)\,g(t-s)\,\mathrm{d}s$` },
    { id: 'm10-fo-vi', name: 'Théorème de la valeur initiale', tex: String.raw`f(0^+) = \lim_{p\to+\infty} p\,F(p)` },
    { id: 'm10-fo-vf', name: 'Théorème de la valeur finale', tex: String.raw`\lim_{t\to+\infty} f(t) = \lim_{p\to0} p\,F(p)`, note: String.raw`seulement si les pôles de $pF(p)$ sont à partie réelle strictement négative` },
    { id: 'm10-fo-des', name: 'Éléments simples (deux pôles réels)', tex: String.raw`\frac{1}{(p+a)(p+b)} = \frac{1}{b-a}\left(\frac{1}{p+a} - \frac{1}{p+b}\right)`, note: String.raw`d'où $\mathcal{L}^{-1} = \frac{\mathrm{e}^{-at} - \mathrm{e}^{-bt}}{b-a}$` },
    { id: 'm10-fo-transfert', name: 'Fonction de transfert', tex: String.raw`H(p) = \frac{S(p)}{E(p)}`, note: String.raw`conditions initiales nulles ; stable si tous les pôles ont une partie réelle $\lt 0$` },
    { id: 'm10-fo-ordre1', name: 'Premier ordre : réponse indicielle', tex: String.raw`H(p) = \frac{K}{1 + \tau p},\quad e = E_0\,u(t) \;\Rightarrow\; s(t) = K E_0\left(1 - \mathrm{e}^{-t/\tau}\right)`, note: String.raw`$63\,\%$ à $t = \tau$, $95\,\%$ à $t = 3\tau$` }
  ],

  /* ======================================================================
     FLASHCARDS
     ====================================================================== */
  flashcards: [
    { id: 'm10-f-periode', front: String.raw`Période, fréquence, pulsation`, back: String.raw`$f(t+T) = f(t)$. Fréquence $f = \frac1T$ (Hz), pulsation $\omega = \frac{2\pi}{T} = 2\pi f$ (rad/s). L'harmonique de rang $n$ a la pulsation $n\omega$. Ex. : $50$ Hz $\leftrightarrow$ $T = 20$ ms $\leftrightarrow$ $\omega = 100\pi$ rad/s.` },
    { id: 'm10-f-moyeff', front: String.raw`Valeur moyenne et valeur efficace`, back: String.raw`$\langle f\rangle = \frac1T\int_0^T f$ ; $F_{\text{eff}} = \sqrt{\frac1T\int_0^T f^2}$ ($F_{\text{eff}}^2$ = puissance moyenne). Sinusoïde d'amplitude $A$ : moyenne $0$, efficace $\frac{A}{\sqrt2}$.` },
    { id: 'm10-f-serie', front: String.raw`Série de Fourier réelle et coefficients`, back: String.raw`$S(t) = a_0 + \sum_{n\ge1}(a_n\cos n\omega t + b_n\sin n\omega t)$ avec $a_0 = \frac1T\int_0^T f$ (moyenne), $a_n = \frac2T\int_0^T f\cos n\omega t$, $b_n = \frac2T\int_0^T f\sin n\omega t$.` },
    { id: 'm10-f-complexe', front: String.raw`Forme complexe de la série de Fourier`, back: String.raw`$S(t) = \sum_{n\in\mathbb{Z}} c_n\mathrm{e}^{\mathrm{i}n\omega t}$, $c_n = \frac1T\int_0^T f\,\mathrm{e}^{-\mathrm{i}n\omega t}$. $c_0 = a_0$, $c_n = \frac{a_n - \mathrm{i}b_n}{2}$, $c_{-n} = \overline{c_n}$ (f réelle).` },
    { id: 'm10-f-parite', front: String.raw`Simplifications par parité`, back: String.raw`Paire : $b_n = 0$, $a_n = \frac4T\int_0^{T/2} f\cos n\omega t$ (cosinus seuls). Impaire : $a_n = 0$, $b_n = \frac4T\int_0^{T/2} f\sin n\omega t$ (sinus seuls). Si $f(t + \frac T2) = -f(t)$ : harmoniques impairs seulement.` },
    { id: 'm10-f-dirichlet', front: String.raw`Théorème de Dirichlet`, back: String.raw`$f$ périodique, $C^1$ par morceaux : la série de Fourier converge en tout $t$ vers $\frac{f(t^+) + f(t^-)}{2}$ ; donc vers $f(t)$ aux points de continuité, vers le milieu du saut aux discontinuités.` },
    { id: 'm10-f-parseval', front: String.raw`Égalité de Parseval`, back: String.raw`$\frac1T\int_0^T f^2 = a_0^2 + \frac12\sum_{n\ge1}(a_n^2 + b_n^2) = \sum_{n\in\mathbb{Z}}|c_n|^2$ : la puissance totale est la somme des puissances des harmoniques ($\frac{A_n^2}{2}$ chacune).` },
    { id: 'm10-f-spectre', front: String.raw`Spectre et décroissance des coefficients`, back: String.raw`Spectre d'amplitude : raies $A_n = \sqrt{a_n^2 + b_n^2} = 2|c_n|$ aux fréquences $nf$. Signal discontinu : coefficients en $\frac1n$ ; continu à dérivée discontinue : en $\frac{1}{n^2}$ ; plus le signal est lisse, plus le spectre décroît vite.` },
    { id: 'm10-f-gibbs', front: String.raw`Phénomène de Gibbs`, back: String.raw`Près d'une discontinuité, les sommes partielles de Fourier dépassent d'environ $9\,\%$ du saut ; ce pic se resserre quand $N$ augmente mais ne disparaît pas.` },
    { id: 'm10-f-laplace', front: String.raw`Définition de la transformée de Laplace`, back: String.raw`Pour $f$ causale : $F(p) = \int_0^{+\infty} f(t)\mathrm{e}^{-pt}\,\mathrm{d}t$. Elle transforme dérivation en multiplication par $p$ : les EDO linéaires deviennent algébriques.` },
    { id: 'm10-f-echelon', front: String.raw`Échelon unité et signal causal`, back: String.raw`$u(t) = 0$ pour $t \lt 0$, $1$ pour $t \geq 0$ ; $\mathcal{L}[u] = \frac1p$. Un signal causal est nul pour $t \lt 0$ ; $f(t)u(t - \tau)$ « allume » le signal à $t = \tau$.` },
    { id: 'm10-f-derivation', front: String.raw`Dérivation et intégration (Laplace)`, back: String.raw`$\mathcal{L}[f'] = pF - f(0^+)$ ; $\mathcal{L}[f''] = p^2F - pf(0^+) - f'(0^+)$ ; $\mathcal{L}\left[\int_0^t f\right] = \frac{F}{p}$.` },
    { id: 'm10-f-retard', front: String.raw`Retard et amortissement (Laplace)`, back: String.raw`Retard : $\mathcal{L}[f(t-\tau)u(t-\tau)] = \mathrm{e}^{-\tau p}F(p)$. Amortissement : $\mathcal{L}[\mathrm{e}^{-at}f(t)] = F(p + a)$. Multiplication par $t$ : $-F'(p)$.` },
    { id: 'm10-f-valeurs', front: String.raw`Théorèmes de la valeur initiale et finale`, back: String.raw`$f(0^+) = \lim_{p\to+\infty} pF(p)$ ; $\lim_{t\to+\infty} f(t) = \lim_{p\to0} pF(p)$, <b>à condition</b> que $f$ converge (pôles de $pF$ à partie réelle $\lt 0$). Contre-exemple : $\sin t$.` },
    { id: 'm10-f-inverse', front: String.raw`Calculer une transformée inverse`, back: String.raw`Décomposer $F$ en éléments simples : $\frac{A}{p-a} \to A\mathrm{e}^{at}$ ; $\frac{A}{(p-a)^2} \to At\mathrm{e}^{at}$ ; $(p+\alpha)^2 + \omega^2$ au dénominateur $\to \mathrm{e}^{-\alpha t}\cos\omega t$, $\mathrm{e}^{-\alpha t}\sin\omega t$.` },
    { id: 'm10-f-edo', front: String.raw`Résoudre une EDO par Laplace`, back: String.raw`1) Transformer l'équation en utilisant les conditions initiales ; 2) isoler $Y(p)$ ; 3) décomposer en éléments simples ; 4) revenir en temps avec la table.` },
    { id: 'm10-f-transfert', front: String.raw`Fonction de transfert et premier ordre`, back: String.raw`$H(p) = \frac{S(p)}{E(p)}$ (CI nulles). Premier ordre $\tau s' + s = Ke$ : $H = \frac{K}{1 + \tau p}$ ; réponse à un échelon $E_0$ : $s(t) = KE_0(1 - \mathrm{e}^{-t/\tau})$, $63\,\%$ à $\tau$, $95\,\%$ à $3\tau$.` }
  ],

  /* ======================================================================
     QCM
     ====================================================================== */
  quiz: [
    { id: 'm10-q-001', level: 1, topic: 'Période et fréquence', sec: 'm10-s-periodiques',
      q: String.raw`Un signal a pour période $T = 20$ ms. Sa fréquence vaut :`,
      choices: [String.raw`$50$ Hz`, String.raw`$20$ Hz`, String.raw`$0{,}05$ Hz`, String.raw`$314$ Hz`], answer: 0,
      explain: String.raw`La fréquence est l'inverse de la période, exprimée en secondes : $f = \frac{1}{T} = \frac{1}{0{,}02} = 50$ Hz.`,
      steps: [
        String.raw`Rappel : la <b>période</b> $T$ est la durée d'un motif (en s), la <b>fréquence</b> $f$ est le nombre de motifs par seconde (en Hz) : $f = \frac{1}{T}$.`,
        String.raw`Conversion d'unité : $T = 20$ ms $= 20 \times 10^{-3}$ s $= 0{,}02$ s.`,
        String.raw`Calcul : $f = \frac{1}{0{,}02} = 50$ Hz (le signal se répète $50$ fois par seconde, comme le secteur).`
      ],
      why: { 1: String.raw`On a recopié la valeur de la période ($20$ ms) au lieu d'en prendre l'inverse.`,
        2: String.raw`On a calculé $\frac{1}{20}$ en laissant $T$ en millisecondes : il faut d'abord convertir en secondes.`,
        3: String.raw`$314 \approx 100\pi$ rad/s est la pulsation $\omega = 2\pi f$ : on a multiplié par $2\pi$ en trop.` },
      rule: String.raw`$f = \frac{1}{T}$ ($T$ en secondes) et $\omega = 2\pi f = \frac{2\pi}{T}$` },
    { id: 'm10-q-002', level: 1, topic: 'Pulsation', sec: 'm10-s-periodiques',
      q: String.raw`Quelle est la pulsation d'un signal de fréquence $50$ Hz ?`,
      choices: [String.raw`$50$ rad/s`, String.raw`$100\pi$ rad/s`, String.raw`$\frac{\pi}{25}$ rad/s`, String.raw`$50\pi$ rad/s`], answer: 1,
      explain: String.raw`La pulsation est la fréquence multipliée par $2\pi$ (un tour complet vaut $2\pi$ radians) : $\omega = 2\pi \times 50 = 100\pi \approx 314$ rad/s.`,
      steps: [
        String.raw`Rappel : la <b>pulsation</b> $\omega$ (en rad/s) mesure l'angle parcouru par seconde ; un cycle complet correspond à $2\pi$ radians, d'où $\omega = 2\pi f$.`,
        String.raw`On remplace : $\omega = 2\pi \times 50 = 100\pi$ rad/s.`,
        String.raw`Valeur approchée : $100\pi \approx 314$ rad/s.`
      ],
      why: { 0: String.raw`On a confondu pulsation et fréquence : il manque le facteur $2\pi$.`,
        2: String.raw`$\frac{\pi}{25} = 2\pi \times 0{,}02 = 2\pi T$ : on a multiplié par la période au lieu de la fréquence.`,
        3: String.raw`On a oublié le facteur $2$ : $\omega = 2\pi f$, pas $\pi f$.` },
      rule: String.raw`$\omega = 2\pi f = \frac{2\pi}{T}$` },
    { id: 'm10-q-003', level: 1, topic: 'Coefficient a0', sec: 'm10-s-fourier-reel',
      q: String.raw`Dans l'écriture $S(t) = a_0 + \sum_{n\geq1}\big(a_n\cos(n\omega t) + b_n\sin(n\omega t)\big)$, le coefficient $a_0$ représente :`,
      choices: [String.raw`la valeur efficace`, String.raw`l'amplitude du fondamental`, String.raw`la valeur moyenne`, String.raw`la valeur maximale`], answer: 2,
      explain: String.raw`Avec cette convention, $a_0 = \frac1T\int_0^T f(t)\,\mathrm{d}t$ : c'est la moyenne du signal sur une période, c'est-à-dire sa composante continue.`,
      steps: [
        String.raw`Rappel : la <b>série de Fourier</b> décompose un signal périodique en une constante plus des sinusoïdes de pulsations $\omega, 2\omega, 3\omega, \dots$`,
        String.raw`Les termes $\cos(n\omega t)$ et $\sin(n\omega t)$ ($n \geq 1$) ont une moyenne nulle sur une période.`,
        String.raw`En prenant la moyenne de $S(t)$, il ne reste que $a_0$ : $a_0 = \frac1T\int_0^T f(t)\,\mathrm{d}t$, la <b>valeur moyenne</b> (composante continue).`
      ],
      why: { 0: String.raw`On a confondu moyenne et valeur efficace ; la valeur efficace fait intervenir $f^2$ (égalité de Parseval).`,
        1: String.raw`On a confondu avec le fondamental (terme $n = 1$), dont l'amplitude est $A_1 = \sqrt{a_1^2 + b_1^2}$.`,
        3: String.raw`On a cru qu'un coefficient donnait le maximum ; aucun coefficient seul ne le donne.` },
      rule: String.raw`$a_0 = \frac1T\int_0^T f(t)\,\mathrm{d}t$ = valeur moyenne` },
    { id: 'm10-q-004', level: 1, topic: 'Parité et coefficients', sec: 'm10-s-fourier-reel',
      q: String.raw`Si $f$ est <b>paire</b>, alors :`,
      choices: [String.raw`$a_n = 0$ pour tout $n \geq 1$`, String.raw`$b_n = 0$ pour tout $n \geq 1$`, String.raw`$a_0 = 0$`, String.raw`$c_n = 0$ pour tout $n$`], answer: 1,
      explain: String.raw`Si $f$ est paire, $f(t)\sin(n\omega t)$ est impaire, donc son intégrale sur une période centrée est nulle : $b_n = 0$. La série ne contient que des cosinus (et une constante).`,
      steps: [
        String.raw`Rappel : $f$ est <b>paire</b> si $f(-t) = f(t)$ (courbe symétrique par rapport à l'axe vertical) ; l'intégrale d'une fonction <b>impaire</b> sur $[-a, a]$ est nulle.`,
        String.raw`$\sin$ est impaire, donc $f(t)\sin(n\omega t)$ est (paire) $\times$ (impaire) $=$ impaire.`,
        String.raw`Donc $b_n = \frac{2}{T}\int_{-T/2}^{T/2} f(t)\sin(n\omega t)\,\mathrm{d}t = 0$ pour tout $n \geq 1$ : il ne reste que des cosinus (fonctions paires).`
      ],
      why: { 0: String.raw`On a inversé les cas : ce sont les $a_n$ qui s'annulent pour une fonction <b>impaire</b>.`,
        2: String.raw`On a cru qu'une fonction paire est de moyenne nulle ; contre-exemple $|t|$, de moyenne $\frac{\pi}{2}$ sur $[-\pi, \pi]$.`,
        3: String.raw`On a confondu « réels » et « nuls » : pour $f$ paire, les $c_n = \frac{a_n}{2}$ sont réels.` },
      rule: String.raw`$f$ paire $\Rightarrow b_n = 0$ (cosinus) ; $f$ impaire $\Rightarrow a_n = 0$ (sinus)` },
    { id: 'm10-q-005', level: 1, topic: 'Parité et coefficients', sec: 'm10-s-fourier-reel',
      q: String.raw`Si $f$ est <b>impaire</b>, sa série de Fourier ne contient que :`,
      choices: [String.raw`des cosinus`, String.raw`des sinus`, String.raw`une constante et des cosinus`], answer: 1,
      explain: String.raw`Pour une fonction impaire, $f(t)\cos(n\omega t)$ est impaire et s'intègre en $0$ : $a_n = 0$ et $a_0 = 0$. La série ne contient que des sinus.`,
      steps: [
        String.raw`Rappel : $f$ est <b>impaire</b> si $f(-t) = -f(t)$ (symétrie par rapport à l'origine) ; l'intégrale d'une fonction impaire sur une période centrée vaut $0$.`,
        String.raw`$\cos$ est paire, donc $f(t)\cos(n\omega t)$ est impaire : $a_n = 0$ pour tout $n$, y compris $a_0 = \frac1T\int f = 0$.`,
        String.raw`Il ne reste que les termes $b_n\sin(n\omega t)$ : une somme de sinus (fonctions impaires, comme $f$).`
      ],
      why: { 0: String.raw`On a inversé : les cosinus sont pairs et correspondent à une fonction paire.`,
        2: String.raw`On a oublié qu'une fonction impaire est de moyenne nulle ($a_0 = 0$) et sans cosinus.` },
      rule: String.raw`$f$ impaire $\Rightarrow a_0 = a_n = 0$, série de sinus` },
    { id: 'm10-q-006', level: 2, topic: 'Série du créneau', sec: 'm10-s-exemples',
      q: String.raw`Le créneau $2\pi$-périodique valant $1$ sur $]0,\pi[$ et $-1$ sur $]-\pi, 0[$ a pour série de Fourier :`,
      choices: [String.raw`$\dfrac{4}{\pi}\sum_{k\geq0}\dfrac{\sin\big((2k+1)t\big)}{2k+1}$`, String.raw`$\dfrac{4}{\pi}\sum_{n\geq1}\dfrac{\sin(nt)}{n}$`, String.raw`$\dfrac{4}{\pi}\sum_{k\geq0}\dfrac{\cos\big((2k+1)t\big)}{(2k+1)^2}$`, String.raw`$2\sum_{n\geq1}\dfrac{(-1)^{n+1}\sin(nt)}{n}$`], answer: 0,
      explain: String.raw`Le créneau est impair, donc seuls les $b_n$ sont non nuls : $b_n = \frac{2(1 - (-1)^n)}{n\pi}$, soit $\frac{4}{n\pi}$ pour $n$ impair et $0$ pour $n$ pair. D'où la série en sinus d'harmoniques impairs.`,
      steps: [
        String.raw`Rappel : un signal <b>impair</b> a une série de Fourier en sinus ; pour $T = 2\pi$, $b_n = \frac{2}{\pi}\int_0^{\pi} f(t)\sin(nt)\,\mathrm{d}t$.`,
        String.raw`Ici $f = 1$ sur $]0, \pi[$ : $b_n = \frac{2}{\pi}\left[-\frac{\cos(nt)}{n}\right]_0^{\pi} = \frac{2}{\pi} \cdot \frac{1 - \cos(n\pi)}{n} = \frac{2(1 - (-1)^n)}{n\pi}$.`,
        String.raw`Pour $n$ pair, $1 - 1 = 0$ ; pour $n$ impair, $1 - (-1) = 2$, donc $b_n = \frac{4}{n\pi}$.`,
        String.raw`En notant $n = 2k + 1$ : $f(t) = \frac{4}{\pi}\sum_{k\geq0} \frac{\sin((2k+1)t)}{2k+1}$.`
      ],
      why: { 1: String.raw`On a gardé tous les harmoniques : or $1 - (-1)^n = 0$ pour $n$ pair, seuls les rangs impairs subsistent.`,
        2: String.raw`On a pris la série du triangle (signal pair : cosinus, coefficients en $\frac{1}{n^2}$).`,
        3: String.raw`On a pris la série de la dent de scie $f(t) = t$, qui contient tous les harmoniques avec signes alternés.` },
      rule: String.raw`Créneau impair $\pm 1$ : $b_n = \frac{4}{n\pi}$ ($n$ impair), $0$ ($n$ pair)` },
    { id: 'm10-q-007', level: 2, topic: 'Décroissance des coefficients', sec: 'm10-s-exemples',
      q: String.raw`Les coefficients de Fourier d'un signal <b>triangulaire</b> (continu, à dérivée discontinue) décroissent comme :`,
      choices: [String.raw`$\frac1n$`, String.raw`$\frac{1}{n^2}$`, String.raw`$\frac{1}{n^3}$`, String.raw`$\frac{1}{2^n}$`], answer: 1,
      explain: String.raw`Plus un signal est régulier, plus ses coefficients décroissent vite. Un signal discontinu donne des coefficients en $\frac1n$ ; le triangle, continu mais à dérivée discontinue, donne des coefficients en $\frac{1}{n^2}$ (ex. $a_n = -\frac{4}{\pi n^2}$, $n$ impair).`,
      steps: [
        String.raw`Rappel : la <b>vitesse de décroissance</b> des coefficients de Fourier reflète la régularité du signal : chaque « cran » de régularité supplémentaire ajoute un facteur $\frac1n$.`,
        String.raw`Signal discontinu (créneau, dent de scie) : coefficients en $\frac1n$.`,
        String.raw`Le triangle est continu, mais sa dérivée (un créneau) est discontinue : une intégration par parties de plus donne des coefficients en $\frac{1}{n^2}$.`,
        String.raw`Exemple : pour $|t|$ sur $[-\pi, \pi]$, $a_n = -\frac{4}{\pi n^2}$ pour $n$ impair.`
      ],
      why: { 0: String.raw`On a appliqué la règle des signaux <b>discontinus</b> (créneau, dent de scie) ; le triangle est continu.`,
        2: String.raw`On a surestimé la régularité : $\frac{1}{n^3}$ exigerait aussi une dérivée continue.`,
        3: String.raw`On a confondu avec un signal très régulier (analytique), dont les coefficients décroissent exponentiellement.` },
      rule: String.raw`Discontinu : $\frac1n$ ; continu à dérivée discontinue : $\frac{1}{n^2}$` },
    { id: 'm10-q-008', level: 2, topic: 'Théorème de Dirichlet', sec: 'm10-s-dirichlet-parseval',
      q: String.raw`$f$ est $C^1$ par morceaux et présente un saut en $t_0$ : $f(t_0^-) = -1$ et $f(t_0^+) = 3$. En $t_0$, sa série de Fourier converge vers :`,
      choices: [String.raw`$3$`, String.raw`$-1$`, String.raw`$1$`, String.raw`$2$`], answer: 2,
      explain: String.raw`Théorème de Dirichlet : en un point de saut, la série de Fourier converge vers la moyenne des limites à gauche et à droite : $\frac{3 + (-1)}{2} = 1$.`,
      steps: [
        String.raw`Rappel : <b>théorème de Dirichlet</b> — si $f$ est $C^1$ par morceaux, sa série de Fourier converge en tout $t$ vers $\frac{f(t^+) + f(t^-)}{2}$ (égal à $f(t)$ là où $f$ est continue).`,
        String.raw`En $t_0$ : $f(t_0^-) = -1$ et $f(t_0^+) = 3$.`,
        String.raw`Demi-somme : $\frac{3 + (-1)}{2} = \frac{2}{2} = 1$ : la série « coupe le saut en son milieu ».`
      ],
      why: { 0: String.raw`On a pris la limite à droite seule ; en un saut, la série prend la moyenne des deux limites.`,
        1: String.raw`On a pris la limite à gauche seule.`,
        3: String.raw`$2 = \frac{3 - (-1)}{2}$ est la demi-hauteur du saut : on a fait une différence au lieu d'une somme.` },
      rule: String.raw`En un saut, la série de Fourier converge vers $\frac{f(t_0^+) + f(t_0^-)}{2}$` },
    { id: 'm10-q-009', level: 2, topic: 'Égalité de Parseval', sec: 'm10-s-dirichlet-parseval',
      q: String.raw`Avec la convention $a_0 = $ valeur moyenne, l'égalité de Parseval s'écrit :`,
      choices: [String.raw`$\frac1T\int_0^T f^2 = a_0^2 + \frac12\sum(a_n^2 + b_n^2)$`, String.raw`$\frac1T\int_0^T f^2 = a_0^2 + \sum(a_n^2 + b_n^2)$`, String.raw`$\frac1T\int_0^T f = a_0 + \sum(a_n + b_n)$`, String.raw`$\frac1T\int_0^T f^2 = \frac{a_0^2}{2} + \frac12\sum(a_n^2 + b_n^2)$`], answer: 0,
      explain: String.raw`La puissance moyenne se répartit entre les harmoniques : la composante continue apporte $a_0^2$, chaque harmonique $\frac{a_n^2 + b_n^2}{2}$ car la moyenne de $\cos^2$ vaut $\frac12$.`,
      steps: [
        String.raw`Rappel : l'<b>égalité de Parseval</b> exprime la puissance moyenne $\frac1T\int_0^T f^2$ (carré de la valeur efficace) à partir des coefficients de Fourier.`,
        String.raw`La constante $a_0$ a pour puissance $a_0^2$ (moyenne de $a_0^2$).`,
        String.raw`Un harmonique $a_n\cos + b_n\sin$ d'amplitude $A_n = \sqrt{a_n^2 + b_n^2}$ a pour puissance $\frac{A_n^2}{2}$, car la moyenne de $\cos^2$ vaut $\frac12$. Les termes croisés ont une moyenne nulle.`,
        String.raw`Total : $\frac1T\int_0^T f^2 = a_0^2 + \frac12\sum_{n\geq1}(a_n^2 + b_n^2)$.`
      ],
      why: { 1: String.raw`On a oublié le $\frac12$ : la puissance d'une sinusoïde d'amplitude $A$ vaut $\frac{A^2}{2}$, pas $A^2$.`,
        2: String.raw`On a écrit une relation sur $f$ au lieu de $f^2$ : Parseval porte sur la puissance.`,
        3: String.raw`On a utilisé l'autre convention ($\frac{a_0}{2} + \dots$) ; ici $a_0$ est la moyenne, de puissance $a_0^2$.` },
      rule: String.raw`Parseval : $\frac1T\int_0^T f^2 = a_0^2 + \frac12\sum_{n\geq1}(a_n^2 + b_n^2)$` },
    { id: 'm10-q-010', level: 2, topic: 'Coefficients complexes', sec: 'm10-s-complexe',
      q: String.raw`Pour $n \geq 1$ et $f$ réelle, le coefficient complexe $c_n$ vaut :`,
      choices: [String.raw`$\dfrac{a_n - \mathrm{i}\,b_n}{2}$`, String.raw`$\dfrac{a_n + \mathrm{i}\,b_n}{2}$`, String.raw`$a_n - \mathrm{i}\,b_n$`, String.raw`$\dfrac{a_n - b_n}{2}$`], answer: 0,
      explain: String.raw`En développant $\mathrm{e}^{-\mathrm{i}n\omega t} = \cos(n\omega t) - \mathrm{i}\sin(n\omega t)$ dans $c_n = \frac1T\int f\,\mathrm{e}^{-\mathrm{i}n\omega t}$, on trouve $c_n = \frac{a_n}{2} - \mathrm{i}\frac{b_n}{2}$.`,
      steps: [
        String.raw`Rappel : les <b>coefficients complexes</b> sont $c_n = \frac1T\int_0^T f(t)\,\mathrm{e}^{-\mathrm{i}n\omega t}\,\mathrm{d}t$, alors que $a_n$ et $b_n$ ont un facteur $\frac2T$.`,
        String.raw`Formule d'Euler : $\mathrm{e}^{-\mathrm{i}n\omega t} = \cos(n\omega t) - \mathrm{i}\sin(n\omega t)$.`,
        String.raw`Donc $c_n = \frac1T\int f\cos(n\omega t) - \mathrm{i}\,\frac1T\int f\sin(n\omega t) = \frac{a_n}{2} - \mathrm{i}\,\frac{b_n}{2} = \frac{a_n - \mathrm{i}\,b_n}{2}$.`
      ],
      why: { 1: String.raw`Erreur de signe dans $\mathrm{e}^{-\mathrm{i}\theta}$ : $\frac{a_n + \mathrm{i}b_n}{2}$ est $c_{-n} = \overline{c_n}$.`,
        2: String.raw`On a oublié le facteur $\frac12$ (le $\frac1T$ de $c_n$ contre le $\frac2T$ de $a_n$, $b_n$).`,
        3: String.raw`On a oublié le $\mathrm{i}$ : $b_n$ est porté par la partie imaginaire de $c_n$.` },
      rule: String.raw`$c_n = \frac{a_n - \mathrm{i}\,b_n}{2}$, $c_{-n} = \overline{c_n}$, $c_0 = a_0$` },
    { id: 'm10-q-011', level: 1, topic: 'Amplitude d\'un harmonique', sec: 'm10-s-complexe',
      q: String.raw`$f(t) = 2 + 3\cos(\omega t) + 4\sin(\omega t)$. Quelle est l'amplitude du fondamental ?`,
      choices: [String.raw`$7$`, String.raw`$5$`, String.raw`$3$`, String.raw`$\frac52$`], answer: 1,
      explain: String.raw`Un cosinus et un sinus de même pulsation se combinent en une seule sinusoïde d'amplitude $\sqrt{a_1^2 + b_1^2} = \sqrt{9 + 16} = 5$.`,
      steps: [
        String.raw`Rappel : $a\cos(\omega t) + b\sin(\omega t) = A\cos(\omega t - \varphi)$ avec $A = \sqrt{a^2 + b^2}$ (forme amplitude-phase). L'amplitude du fondamental est donc $A_1 = \sqrt{a_1^2 + b_1^2}$.`,
        String.raw`On lit les coefficients : $a_0 = 2$ (moyenne, sans rôle ici), $a_1 = 3$, $b_1 = 4$.`,
        String.raw`Calcul : $A_1 = \sqrt{3^2 + 4^2} = \sqrt{9 + 16} = \sqrt{25} = 5$.`
      ],
      why: { 0: String.raw`On a additionné $3 + 4$ : un cosinus et un sinus sont décalés d'un quart de période, leurs maxima ne coïncident pas.`,
        2: String.raw`On a oublié la composante en sinus ($b_1 = 4$).`,
        3: String.raw`On a donné $|c_1| = \frac{A_1}{2}$, hauteur de la raie du spectre bilatéral, et non l'amplitude.` },
      rule: String.raw`$A_n = \sqrt{a_n^2 + b_n^2} = 2|c_n|$` },
    { id: 'm10-q-012', level: 1, topic: 'Valeur efficace', sec: 'm10-s-periodiques',
      q: String.raw`Valeur efficace de $A\sin(\omega t)$ ?`,
      choices: [String.raw`$\frac{A}{2}$`, String.raw`$A$`, String.raw`$\frac{A}{\sqrt2}$`, String.raw`$\frac{2A}{\pi}$`], answer: 2,
      explain: String.raw`La valeur efficace est la racine de la moyenne du carré. Comme la moyenne de $\sin^2$ vaut $\frac12$, on obtient $\sqrt{\frac{A^2}{2}} = \frac{A}{\sqrt2}$.`,
      steps: [
        String.raw`Rappel : la <b>valeur efficace</b> est $F_{\text{eff}} = \sqrt{\frac1T\int_0^T f^2}$ (racine de la moyenne du carré) ; c'est la tension continue qui dissiperait la même puissance.`,
        String.raw`Carré : $A^2\sin^2(\omega t) = A^2\,\frac{1 - \cos(2\omega t)}{2}$, de moyenne $\frac{A^2}{2}$ (le cosinus a une moyenne nulle).`,
        String.raw`Racine : $F_{\text{eff}} = \sqrt{\frac{A^2}{2}} = \frac{A}{\sqrt2} \approx 0{,}707\,A$ (ex. $230$ V efficaces $\leftrightarrow$ $325$ V crête).`
      ],
      why: { 0: String.raw`On s'est arrêté à la moyenne de $\sin^2$ en prenant $\frac{A}{2}$ : il faut la racine de $\frac{A^2}{2}$.`,
        1: String.raw`On a donné la valeur maximale (crête) $A$.`,
        3: String.raw`On a calculé la valeur moyenne de $|A\sin|$, qui vaut $\frac{2A}{\pi}$.` },
      rule: String.raw`Sinusoïde d'amplitude $A$ : $F_{\text{eff}} = \frac{A}{\sqrt2}$` },
    { id: 'm10-q-013', level: 3, topic: 'Phénomène de Gibbs', sec: 'm10-s-dirichlet-parseval',
      q: String.raw`Le phénomène de Gibbs, c'est :`,
      choices: [String.raw`un dépassement d'environ $9\,\%$ du saut près d'une discontinuité, qui ne disparaît pas quand on ajoute des harmoniques`, String.raw`la divergence de la série de Fourier aux points de discontinuité`, String.raw`le fait que les coefficients d'un signal discontinu ne tendent pas vers $0$`, String.raw`un dépassement qui tend vers $0$ quand le nombre d'harmoniques augmente`], answer: 0,
      explain: String.raw`Près d'une discontinuité, les sommes partielles dépassent le signal d'environ $9\,\%$ du saut. Ce pic se rapproche du saut quand on ajoute des harmoniques, mais sa hauteur ne diminue pas.`,
      steps: [
        String.raw`Rappel : la <b>somme partielle</b> d'ordre $N$ est la somme des harmoniques jusqu'au rang $N$ ; elle approche le signal quand $N$ grandit.`,
        String.raw`Près d'un saut, la somme partielle oscille et présente un dépassement d'environ $9\,\%$ de la hauteur du saut : c'est le <b>phénomène de Gibbs</b>.`,
        String.raw`Quand $N$ augmente, le pic se resserre et se rapproche du saut, mais sa hauteur reste d'environ $9\,\%$ : la convergence n'est pas uniforme.`
      ],
      why: { 1: String.raw`On a confondu dépassement et divergence : d'après Dirichlet, la série converge (vers le milieu du saut).`,
        2: String.raw`On a cru que les coefficients ne tendent pas vers $0$ ; ils tendent vers $0$ en $\frac1n$.`,
        3: String.raw`On a cru que le dépassement s'efface ; seule sa largeur diminue, pas sa hauteur.` },
      rule: String.raw`Gibbs : dépassement $\approx 9\,\%$ du saut, qui ne disparaît pas quand $N \to +\infty$` },
    { id: 'm10-q-014', level: 1, topic: 'Définition de Laplace', sec: 'm10-s-laplace-def',
      q: String.raw`La transformée de Laplace d'un signal causal $f$ est :`,
      choices: [String.raw`$\displaystyle\int_0^{+\infty} f(t)\,\mathrm{e}^{-pt}\,\mathrm{d}t$`, String.raw`$\displaystyle\int_{-\infty}^{+\infty} f(t)\,\mathrm{e}^{-\mathrm{i}\omega t}\,\mathrm{d}t$`, String.raw`$\displaystyle\int_0^{+\infty} f(t)\,\mathrm{e}^{pt}\,\mathrm{d}t$`, String.raw`$\displaystyle\int_0^{T} f(t)\,\mathrm{e}^{-pt}\,\mathrm{d}t$`], answer: 0,
      explain: String.raw`La transformée de Laplace d'un signal causal (nul pour $t \lt 0$) intègre $f(t)\,\mathrm{e}^{-pt}$ de $0$ à $+\infty$. Le facteur $\mathrm{e}^{-pt}$ amortit le signal et assure la convergence.`,
      steps: [
        String.raw`Rappel : un signal est <b>causal</b> s'il est nul pour $t \lt 0$. Sa transformée de Laplace est une fonction $F(p)$ de la variable $p$.`,
        String.raw`Définition : $F(p) = \int_0^{+\infty} f(t)\,\mathrm{e}^{-pt}\,\mathrm{d}t$ ; on intègre de $0$ (signal causal) à $+\infty$.`,
        String.raw`Le signe « $-$ » dans $\mathrm{e}^{-pt}$ est essentiel : pour $p > 0$, ce facteur décroît et rend l'intégrale convergente.`
      ],
      why: { 1: String.raw`On a confondu avec la transformée de <b>Fourier</b> (intégrale sur $\mathbb{R}$ avec $\mathrm{e}^{-\mathrm{i}\omega t}$).`,
        2: String.raw`On a oublié le signe moins : avec $\mathrm{e}^{+pt}$, le facteur croît et l'intégrale diverge en général.`,
        3: String.raw`On a confondu avec un coefficient de Fourier (intégrale sur une période) ; Laplace intègre jusqu'à $+\infty$.` },
      rule: String.raw`$F(p) = \mathcal{L}[f](p) = \int_0^{+\infty} f(t)\,\mathrm{e}^{-pt}\,\mathrm{d}t$` },
    { id: 'm10-q-015', level: 1, topic: 'Transformée de l\'échelon', sec: 'm10-s-laplace-def',
      q: String.raw`$\mathcal{L}[u(t)]$ (échelon unité) vaut :`,
      choices: [String.raw`$1$`, String.raw`$p$`, String.raw`$\frac1p$`, String.raw`$\frac{1}{p^2}$`], answer: 2,
      explain: String.raw`L'échelon vaut $1$ pour $t \geq 0$ : $\mathcal{L}[u] = \int_0^{+\infty}\mathrm{e}^{-pt}\,\mathrm{d}t = \left[-\frac{\mathrm{e}^{-pt}}{p}\right]_0^{+\infty} = \frac1p$ (pour $p > 0$).`,
      steps: [
        String.raw`Rappel : l'<b>échelon unité</b> $u(t)$ vaut $0$ pour $t \lt 0$ et $1$ pour $t \geq 0$ (on « allume » un signal constant à $t = 0$).`,
        String.raw`Définition : $\mathcal{L}[u] = \int_0^{+\infty} 1 \times \mathrm{e}^{-pt}\,\mathrm{d}t$.`,
        String.raw`Primitive : $\left[-\frac{\mathrm{e}^{-pt}}{p}\right]_0^{+\infty} = 0 - \left(-\frac1p\right) = \frac1p$ (car $\mathrm{e}^{-pt} \to 0$ pour $p > 0$).`
      ],
      why: { 0: String.raw`On a confondu avec l'impulsion de Dirac $\delta$, dont la transformée vaut $1$.`,
        1: String.raw`On a multiplié par $p$ (ce qui correspond à dériver) au lieu de diviser.`,
        3: String.raw`On a pris la transformée de la rampe $t$, qui vaut $\frac{1}{p^2}$.` },
      rule: String.raw`$\mathcal{L}[u(t)] = \frac1p$, $\mathcal{L}[t] = \frac{1}{p^2}$, $\mathcal{L}[\delta] = 1$` },
    { id: 'm10-q-016', level: 1, topic: 'Transformée de l\'exponentielle', sec: 'm10-s-laplace-def',
      q: String.raw`$\mathcal{L}\left[\mathrm{e}^{-at}\right]$ vaut :`,
      choices: [String.raw`$\dfrac{1}{p-a}$`, String.raw`$\dfrac{1}{p+a}$`, String.raw`$\dfrac{a}{p+a}$`, String.raw`$\dfrac{\mathrm{e}^{-ap}}{p}$`], answer: 1,
      explain: String.raw`On regroupe les exponentielles : $\int_0^{+\infty}\mathrm{e}^{-at}\mathrm{e}^{-pt}\,\mathrm{d}t = \int_0^{+\infty}\mathrm{e}^{-(p+a)t}\,\mathrm{d}t = \frac{1}{p+a}$.`,
      steps: [
        String.raw`Rappel : $\mathcal{L}[f](p) = \int_0^{+\infty} f(t)\,\mathrm{e}^{-pt}\,\mathrm{d}t$, et $\int_0^{+\infty}\mathrm{e}^{-kt}\,\mathrm{d}t = \frac1k$ pour $k > 0$.`,
        String.raw`On regroupe : $\mathrm{e}^{-at}\,\mathrm{e}^{-pt} = \mathrm{e}^{-(p+a)t}$.`,
        String.raw`Avec $k = p + a$ : $\mathcal{L}[\mathrm{e}^{-at}] = \frac{1}{p+a}$ (pôle en $p = -a$).`
      ],
      why: { 0: String.raw`Erreur de signe : $\frac{1}{p-a}$ est la transformée de $\mathrm{e}^{+at}$.`,
        2: String.raw`On a ajouté un $a$ au numérateur sans raison ; l'intégrale donne $\frac{1}{p+a}$.`,
        3: String.raw`On a confondu amortissement et retard : $\frac{\mathrm{e}^{-ap}}{p}$ est la transformée de l'échelon retardé $u(t-a)$.` },
      rule: String.raw`$\mathcal{L}[\mathrm{e}^{-at}] = \frac{1}{p+a}$` },
    { id: 'm10-q-017', level: 1, topic: 'Transformée du sinus', sec: 'm10-s-laplace-def',
      q: String.raw`$\mathcal{L}[\sin(\omega t)]$ vaut :`,
      choices: [String.raw`$\dfrac{p}{p^2 + \omega^2}$`, String.raw`$\dfrac{1}{p^2 + \omega^2}$`, String.raw`$\dfrac{\omega}{p^2 - \omega^2}$`, String.raw`$\dfrac{\omega}{p^2 + \omega^2}$`], answer: 3,
      explain: String.raw`On passe par $\mathrm{e}^{\mathrm{i}\omega t}$ : $\mathcal{L}[\mathrm{e}^{\mathrm{i}\omega t}] = \frac{1}{p - \mathrm{i}\omega} = \frac{p + \mathrm{i}\omega}{p^2 + \omega^2}$. Le sinus en est la partie imaginaire : $\frac{\omega}{p^2 + \omega^2}$.`,
      steps: [
        String.raw`Rappel : $\sin(\omega t) = \operatorname{Im}\left(\mathrm{e}^{\mathrm{i}\omega t}\right)$, et $\mathcal{L}[\mathrm{e}^{ct}] = \frac{1}{p - c}$.`,
        String.raw`Avec $c = \mathrm{i}\omega$ : $\frac{1}{p - \mathrm{i}\omega} = \frac{p + \mathrm{i}\omega}{(p - \mathrm{i}\omega)(p + \mathrm{i}\omega)} = \frac{p + \mathrm{i}\omega}{p^2 + \omega^2}$ (on multiplie par le conjugué).`,
        String.raw`Partie imaginaire : $\mathcal{L}[\sin\omega t] = \frac{\omega}{p^2 + \omega^2}$ ; la partie réelle donne $\mathcal{L}[\cos\omega t] = \frac{p}{p^2 + \omega^2}$.`
      ],
      why: { 0: String.raw`On a pris la partie réelle : $\frac{p}{p^2 + \omega^2}$ est la transformée de $\cos(\omega t)$.`,
        1: String.raw`On a oublié $\omega$ au numérateur.`,
        2: String.raw`Erreur de signe au dénominateur : $\frac{\omega}{p^2 - \omega^2}$ est la transformée de $\operatorname{sh}(\omega t)$.` },
      rule: String.raw`$\mathcal{L}[\sin\omega t] = \frac{\omega}{p^2 + \omega^2}$, $\mathcal{L}[\cos\omega t] = \frac{p}{p^2 + \omega^2}$` },
    { id: 'm10-q-018', level: 2, topic: 'Transformée d\'une dérivée', sec: 'm10-s-laplace-prop',
      q: String.raw`$\mathcal{L}[f'(t)]$ vaut :`,
      choices: [String.raw`$pF(p)$`, String.raw`$pF(p) - f(0^+)$`, String.raw`$\dfrac{F(p)}{p}$`, String.raw`$pF(p) + f(0^+)$`], answer: 1,
      explain: String.raw`Une intégration par parties donne $\mathcal{L}[f'] = \left[f\,\mathrm{e}^{-pt}\right]_0^{+\infty} + p\int_0^{+\infty} f\,\mathrm{e}^{-pt} = -f(0^+) + pF(p)$. C'est ainsi que les conditions initiales entrent dans le calcul.`,
      steps: [
        String.raw`Rappel : en Laplace, <b>dériver revient à multiplier par $p$</b>, à condition de retirer la valeur initiale.`,
        String.raw`Par parties avec $u = \mathrm{e}^{-pt}$ et $v' = f'$ : $\int_0^{+\infty} f'\mathrm{e}^{-pt}\,\mathrm{d}t = \left[f(t)\mathrm{e}^{-pt}\right]_0^{+\infty} + p\int_0^{+\infty} f(t)\mathrm{e}^{-pt}\,\mathrm{d}t$.`,
        String.raw`Terme de bord : en $+\infty$ il tend vers $0$, en $0$ il vaut $f(0^+)$, d'où $-f(0^+)$. Donc $\mathcal{L}[f'] = pF(p) - f(0^+)$.`
      ],
      why: { 0: String.raw`On a oublié la condition initiale ; $pF(p)$ seul n'est juste que si $f(0^+) = 0$.`,
        2: String.raw`On a divisé par $p$, ce qui correspond à <b>intégrer</b>, pas à dériver.`,
        3: String.raw`Erreur de signe sur le terme de bord : $\left[f\mathrm{e}^{-pt}\right]_0^{+\infty} = 0 - f(0^+)$.` },
      rule: String.raw`$\mathcal{L}[f'] = pF(p) - f(0^+)$ ; $\mathcal{L}[f''] = p^2F(p) - pf(0^+) - f'(0^+)$` },
    { id: 'm10-q-019', level: 2, topic: 'Théorème du retard', sec: 'm10-s-laplace-prop',
      q: String.raw`Théorème du retard : $\mathcal{L}\big[f(t - \tau)\,u(t - \tau)\big]$ vaut :`,
      choices: [String.raw`$F(p - \tau)$`, String.raw`$\mathrm{e}^{\tau p}F(p)$`, String.raw`$\mathrm{e}^{-\tau p}F(p)$`, String.raw`$\dfrac{F(p)}{\tau}$`], answer: 2,
      explain: String.raw`Avec le changement de variable $s = t - \tau$, l'intégrale devient $\mathrm{e}^{-\tau p}\int_0^{+\infty} f(s)\mathrm{e}^{-ps}\,\mathrm{d}s$ : retarder un signal de $\tau$ multiplie sa transformée par $\mathrm{e}^{-\tau p}$.`,
      steps: [
        String.raw`Rappel : $f(t - \tau)u(t - \tau)$ est le signal $f$ <b>décalé de $\tau$ vers la droite</b> (il démarre à $t = \tau$ au lieu de $0$).`,
        String.raw`L'intégrale commence à $t = \tau$ : $\int_{\tau}^{+\infty} f(t - \tau)\mathrm{e}^{-pt}\,\mathrm{d}t$. On pose $s = t - \tau$, donc $t = s + \tau$ et $\mathrm{e}^{-pt} = \mathrm{e}^{-ps}\mathrm{e}^{-p\tau}$.`,
        String.raw`On obtient $\mathrm{e}^{-\tau p}\int_0^{+\infty} f(s)\mathrm{e}^{-ps}\,\mathrm{d}s = \mathrm{e}^{-\tau p}F(p)$.`
      ],
      why: { 0: String.raw`On a confondu retard et amortissement : une translation en $p$ correspond à une multiplication par une exponentielle en $t$.`,
        1: String.raw`Erreur de signe : un <b>retard</b> donne $\mathrm{e}^{-\tau p}$ ($\mathrm{e}^{+\tau p}$ serait une avance).`,
        3: String.raw`On a imaginé une division par $\tau$ ; le retard produit un facteur exponentiel.` },
      rule: String.raw`$\mathcal{L}[f(t-\tau)u(t-\tau)] = \mathrm{e}^{-\tau p}F(p)$` },
    { id: 'm10-q-020', level: 2, topic: 'Théorème d\'amortissement', sec: 'm10-s-laplace-prop',
      q: String.raw`$\mathcal{L}\left[\mathrm{e}^{-at}f(t)\right]$ vaut :`,
      choices: [String.raw`$F(p+a)$`, String.raw`$F(p-a)$`, String.raw`$\mathrm{e}^{-ap}F(p)$`, String.raw`$\dfrac{F(p)}{p+a}$`], answer: 0,
      explain: String.raw`Multiplier par $\mathrm{e}^{-at}$ ajoute $a$ à $p$ dans l'exponentielle : $\int_0^{+\infty} f(t)\mathrm{e}^{-(p+a)t}\,\mathrm{d}t = F(p + a)$.`,
      steps: [
        String.raw`Rappel : un facteur $\mathrm{e}^{-at}$ <b>amortit</b> le signal ; en Laplace, cela revient à remplacer $p$ par $p + a$.`,
        String.raw`$\mathcal{L}[\mathrm{e}^{-at}f(t)] = \int_0^{+\infty} f(t)\,\mathrm{e}^{-at}\mathrm{e}^{-pt}\,\mathrm{d}t = \int_0^{+\infty} f(t)\,\mathrm{e}^{-(p+a)t}\,\mathrm{d}t$.`,
        String.raw`C'est la définition de $F$ évaluée en $p + a$ : $F(p + a)$. Exemple : $\mathcal{L}[\mathrm{e}^{-at}] = \frac{1}{p+a}$ avec $f = 1$, $F = \frac1p$.`
      ],
      why: { 1: String.raw`Erreur de signe : $F(p - a)$ correspond à $\mathrm{e}^{+at}f(t)$.`,
        2: String.raw`On a confondu avec le théorème du retard ($\mathrm{e}^{-ap}F(p)$ pour $f(t-a)u(t-a)$).`,
        3: String.raw`On a confondu produit et convolution : $\frac{F(p)}{p+a}$ est la transformée de $f * \mathrm{e}^{-at}$.` },
      rule: String.raw`$\mathcal{L}[\mathrm{e}^{-at}f(t)] = F(p + a)$` },
    { id: 'm10-q-021', level: 2, topic: 'Théorème de la valeur finale', sec: 'm10-s-laplace-prop',
      q: String.raw`Théorème de la valeur finale (quand il s'applique) :`,
      choices: [String.raw`$\lim_{t\to+\infty} f(t) = \lim_{p\to0} pF(p)$`, String.raw`$\lim_{t\to+\infty} f(t) = \lim_{p\to+\infty} pF(p)$`, String.raw`$\lim_{t\to+\infty} f(t) = \lim_{p\to0} F(p)$`, String.raw`$\lim_{t\to+\infty} f(t) = F(1)$`], answer: 0,
      explain: String.raw`Le comportement en temps long ($t \to +\infty$) se lit en $p \to 0$, et il faut multiplier $F$ par $p$ : $\lim_{t\to+\infty} f(t) = \lim_{p\to0} pF(p)$ (si les pôles de $pF$ sont à partie réelle négative).`,
      steps: [
        String.raw`Rappel : les théorèmes des valeurs initiale et finale relient le comportement de $f$ aux extrémités du temps à celui de $pF(p)$ : temps long $\leftrightarrow$ $p$ petit, temps court $\leftrightarrow$ $p$ grand.`,
        String.raw`Valeur finale : $\lim_{t\to+\infty} f(t) = \lim_{p\to0} pF(p)$, si $f$ a bien une limite finie (pôles de $pF$ à partie réelle $\lt 0$).`,
        String.raw`Exemple : échelon, $F = \frac1p$, $pF = 1 \to 1$ ✔ (l'échelon vaut $1$ en régime établi).`
      ],
      why: { 1: String.raw`On a pris $p \to +\infty$ : c'est le théorème de la valeur <b>initiale</b>.`,
        2: String.raw`On a oublié le facteur $p$ : pour l'échelon, $F = \frac1p \to \infty$ alors que $f \to 1$.`,
        3: String.raw`On a évalué $F$ en un point arbitraire ; $F(1)$ n'a pas d'interprétation particulière.` },
      rule: String.raw`Valeur finale : $\lim_{t\to+\infty} f = \lim_{p\to0} pF$ ; valeur initiale : $f(0^+) = \lim_{p\to+\infty} pF$` },
    { id: 'm10-q-022', level: 3, topic: 'Valeur finale : conditions', sec: 'm10-s-laplace-prop',
      q: String.raw`$F(p) = \dfrac{1}{p^2 + 1}$. Que vaut $\lim\limits_{t\to+\infty} f(t)$ ?`,
      choices: [String.raw`$0$, car $pF(p) \to 0$ quand $p \to 0$`, String.raw`$1$`, String.raw`elle n'existe pas : $f(t) = \sin t$ oscille`], answer: 2,
      explain: String.raw`$\frac{1}{p^2+1}$ est la transformée de $\sin t$, qui oscille sans limite. Le théorème de la valeur finale ne s'applique pas : les pôles $\pm\mathrm{i}$ ne sont pas à partie réelle strictement négative.`,
      steps: [
        String.raw`Rappel : le théorème de la valeur finale ne s'applique que si $f$ a une limite, c'est-à-dire si tous les pôles de $pF(p)$ sont à partie réelle <b>strictement négative</b>.`,
        String.raw`Ici $pF(p) = \frac{p}{p^2+1}$ a pour pôles $p = \pm\mathrm{i}$ (racines de $p^2 + 1 = 0$), de partie réelle nulle : le théorème ne s'applique pas.`,
        String.raw`Calcul direct : $\mathcal{L}[\sin t] = \frac{1}{p^2+1}$, donc $f(t) = \sin t$, qui oscille entre $-1$ et $1$ sans limite.`
      ],
      why: { 0: String.raw`On a appliqué le théorème sans vérifier ses hypothèses : les pôles $\pm\mathrm{i}$ sont sur l'axe imaginaire.`,
        1: String.raw`Ni le calcul direct ($f = \sin t$) ni le théorème ne donnent $1$.` },
      rule: String.raw`Valeur finale valable seulement si tous les pôles de $pF$ ont une partie réelle $\lt 0$` },
    { id: 'm10-q-023', level: 2, topic: 'Théorème de la valeur initiale', sec: 'm10-s-laplace-prop',
      q: String.raw`Théorème de la valeur initiale : $f(0^+) = $`,
      choices: [String.raw`$\lim_{p\to+\infty} pF(p)$`, String.raw`$\lim_{p\to0} pF(p)$`, String.raw`$F(0)$`], answer: 0,
      explain: String.raw`Le comportement au tout début ($t \to 0^+$) se lit quand $p \to +\infty$ : $f(0^+) = \lim_{p\to+\infty} pF(p)$. Exemple : $F = \frac{1}{p+a}$ donne $\frac{p}{p+a} \to 1 = \mathrm{e}^{0}$.`,
      steps: [
        String.raw`Rappel : temps court $\leftrightarrow$ $p$ grand ; temps long $\leftrightarrow$ $p$ petit. Dans les deux cas on regarde $pF(p)$.`,
        String.raw`Valeur initiale : $f(0^+) = \lim_{p\to+\infty} pF(p)$.`,
        String.raw`Vérification sur $f(t) = \mathrm{e}^{-at}$ : $pF(p) = \frac{p}{p+a} \to 1$ quand $p \to +\infty$, et $f(0) = 1$ ✔.`
      ],
      why: { 1: String.raw`On a pris $p \to 0$ : c'est le théorème de la valeur <b>finale</b>.`,
        2: String.raw`On a évalué $F$ en $0$ : $F(0) = \int_0^{+\infty} f$ est l'aire sous la courbe, pas $f(0)$.` },
      rule: String.raw`$f(0^+) = \lim_{p\to+\infty} pF(p)$` },
    { id: 'm10-q-024', level: 1, topic: 'Transformée de t puissance n', sec: 'm10-s-laplace-def',
      q: String.raw`$\mathcal{L}[t^n]$ vaut :`,
      choices: [String.raw`$\dfrac{1}{p^{n+1}}$`, String.raw`$\dfrac{n!}{p^{n+1}}$`, String.raw`$\dfrac{n!}{p^n}$`, String.raw`$\dfrac{n}{p^{n+1}}$`], answer: 1,
      explain: String.raw`Chaque intégration par parties fait sortir un facteur $\frac{n}{p}$ : $\mathcal{L}[t^n] = \frac{n}{p}\mathcal{L}[t^{n-1}]$, d'où $\frac{n!}{p^{n+1}}$ en partant de $\mathcal{L}[1] = \frac1p$.`,
      steps: [
        String.raw`Rappel : $\mathcal{L}[1] = \frac1p$, et une intégration par parties donne la relation $\mathcal{L}[t^n] = \frac{n}{p}\,\mathcal{L}[t^{n-1}]$.`,
        String.raw`On déroule : $\mathcal{L}[t] = \frac1p \cdot \frac1p = \frac{1}{p^2}$, $\mathcal{L}[t^2] = \frac2p \cdot \frac{1}{p^2} = \frac{2}{p^3}$, $\mathcal{L}[t^3] = \frac3p \cdot \frac{2}{p^3} = \frac{6}{p^4}$.`,
        String.raw`En général : $\mathcal{L}[t^n] = \frac{n!}{p^{n+1}}$ (avec $n! = 1 \times 2 \times \dots \times n$).`
      ],
      why: { 0: String.raw`On a oublié le $n!$ : par exemple $\mathcal{L}[t^2] = \frac{2}{p^3}$, pas $\frac{1}{p^3}$.`,
        2: String.raw`Erreur d'exposant : c'est $p^{n+1}$ ; pour $n = 1$, $\mathcal{L}[t] = \frac{1}{p^2}$.`,
        3: String.raw`On a mis $n$ au lieu de $n!$ ; les deux coïncident seulement pour $n \leq 2$.` },
      rule: String.raw`$\mathcal{L}[t^n] = \frac{n!}{p^{n+1}}$` },
    { id: 'm10-q-025', level: 2, topic: 'Réponse d\'un premier ordre', sec: 'm10-s-inverse-edo',
      q: String.raw`Système du premier ordre $H(p) = \frac{K}{1 + \tau p}$ soumis à un échelon. À $t = \tau$, la sortie a atteint :`,
      choices: [String.raw`$50\,\%$ de sa valeur finale`, String.raw`$63\,\%$ de sa valeur finale`, String.raw`$95\,\%$ de sa valeur finale`, String.raw`$100\,\%$ de sa valeur finale`], answer: 1,
      explain: String.raw`La réponse indicielle d'un premier ordre est $s(t) = K\left(1 - \mathrm{e}^{-t/\tau}\right)$. À $t = \tau$ : $1 - \mathrm{e}^{-1} \approx 0{,}63$, soit $63\,\%$ de la valeur finale $K$.`,
      steps: [
        String.raw`Rappel : un système du <b>premier ordre</b> $H(p) = \frac{K}{1 + \tau p}$ soumis à un échelon unité répond $s(t) = K\left(1 - \mathrm{e}^{-t/\tau}\right)$ : il monte de $0$ vers $K$.`,
        String.raw`À $t = \tau$ : $s(\tau) = K\left(1 - \mathrm{e}^{-1}\right)$.`,
        String.raw`Calcul : $\mathrm{e}^{-1} \approx 0{,}368$, donc $1 - 0{,}368 = 0{,}632$ : la sortie a atteint environ $63\,\%$ de sa valeur finale.`
      ],
      why: { 0: String.raw`On a supposé que la moitié est atteinte à $\tau$ ; en fait $50\,\%$ est atteint à $t = \tau\ln 2 \approx 0{,}69\,\tau$.`,
        2: String.raw`On a confondu avec $t = 3\tau$, où $1 - \mathrm{e}^{-3} \approx 95\,\%$.`,
        3: String.raw`On a cru que le régime final est atteint en $\tau$ ; il n'est atteint qu'asymptotiquement.` },
      rule: String.raw`Premier ordre : $63\,\%$ à $\tau$, $95\,\%$ à $3\tau$, $99\,\%$ à $5\tau$` },
    { id: 'm10-q-026', level: 2, topic: 'Temps de réponse à 5 %', sec: 'm10-s-inverse-edo',
      q: String.raw`Temps de réponse à $5\,\%$ d'un système du premier ordre de constante de temps $\tau$ ?`,
      choices: [String.raw`$\tau$`, String.raw`$2\tau$`, String.raw`$3\tau$`, String.raw`$5\tau$`], answer: 2,
      explain: String.raw`La sortie est à $5\,\%$ de sa valeur finale quand $\mathrm{e}^{-t/\tau} = 0{,}05$, soit $t = \tau\ln 20 \approx 3\tau$ ; on vérifie $1 - \mathrm{e}^{-3} \approx 0{,}95$.`,
      steps: [
        String.raw`Rappel : le <b>temps de réponse à $5\,\%$</b> est l'instant à partir duquel la sortie reste à moins de $5\,\%$ de sa valeur finale. Pour un premier ordre, l'écart relatif vaut $\mathrm{e}^{-t/\tau}$.`,
        String.raw`On résout $\mathrm{e}^{-t/\tau} = 0{,}05$ : $\frac{t}{\tau} = \ln 20 \approx 3{,}0$.`,
        String.raw`Donc $t_{5\%} \approx 3\tau$. Vérification : $1 - \mathrm{e}^{-3} \approx 1 - 0{,}050 = 0{,}95$ ✔.`
      ],
      why: { 0: String.raw`On a pris l'instant des $63\,\%$ ($t = \tau$), encore loin de la valeur finale.`,
        1: String.raw`À $2\tau$ : $1 - \mathrm{e}^{-2} \approx 86\,\%$, l'écart est encore de $14\,\%$.`,
        3: String.raw`À $5\tau$ on est à $99\,\%$ : c'est le temps de réponse à $1\,\%$.` },
      rule: String.raw`Premier ordre : $t_{5\%} \approx 3\tau$` },
    { id: 'm10-q-027', level: 2, topic: 'Pôle double', sec: 'm10-s-inverse-edo',
      q: String.raw`$\mathcal{L}^{-1}\left[\dfrac{1}{(p+3)^2}\right]$ vaut :`,
      choices: [String.raw`$\mathrm{e}^{-3t}$`, String.raw`$t\,\mathrm{e}^{-3t}$`, String.raw`$\mathrm{e}^{-6t}$`, String.raw`$t^2\mathrm{e}^{-3t}$`], answer: 1,
      explain: String.raw`On reconnaît $\frac{1}{p^2}$ (transformée de $t$) décalé en $p + 3$. Par le théorème d'amortissement, $\frac{1}{(p+3)^2}$ est la transformée de $t\,\mathrm{e}^{-3t}$.`,
      steps: [
        String.raw`Rappel : un <b>pôle double</b> $\frac{1}{(p - a)^2}$ fait apparaître un facteur $t$ : $\mathcal{L}^{-1}\left[\frac{1}{(p-a)^2}\right] = t\,\mathrm{e}^{at}$.`,
        String.raw`On part de $\mathcal{L}[t] = \frac{1}{p^2}$.`,
        String.raw`Amortissement : $\mathcal{L}[\mathrm{e}^{-3t}f(t)] = F(p + 3)$, donc $\mathcal{L}[t\,\mathrm{e}^{-3t}] = \frac{1}{(p+3)^2}$, et $\mathcal{L}^{-1}\left[\frac{1}{(p+3)^2}\right] = t\,\mathrm{e}^{-3t}$.`
      ],
      why: { 0: String.raw`On a traité le pôle comme simple : $\mathrm{e}^{-3t}$ donne $\frac{1}{p+3}$, sans carré.`,
        2: String.raw`On a cru que mettre $F$ au carré revient à mettre $f$ au carré : c'est faux.`,
        3: String.raw`On a ajouté une puissance de trop : $\mathcal{L}[t^2\mathrm{e}^{-3t}] = \frac{2}{(p+3)^3}$.` },
      rule: String.raw`$\mathcal{L}^{-1}\left[\frac{1}{(p+a)^2}\right] = t\,\mathrm{e}^{-at}$` },
    { id: 'm10-q-028', level: 2, topic: 'Échelon retardé', sec: 'm10-s-inverse-edo',
      q: String.raw`$\mathcal{L}^{-1}\left[\dfrac{\mathrm{e}^{-2p}}{p}\right]$ vaut :`,
      choices: [String.raw`$u(t - 2)$`, String.raw`$u(t + 2)$`, String.raw`$\mathrm{e}^{-2t}$`, String.raw`$t - 2$`], answer: 0,
      explain: String.raw`$\frac1p$ est la transformée de l'échelon $u(t)$, et le facteur $\mathrm{e}^{-2p}$ correspond à un retard de $2$ : on obtient $u(t - 2)$, un échelon qui s'allume à $t = 2$.`,
      steps: [
        String.raw`Rappel : <b>théorème du retard</b> — multiplier $F(p)$ par $\mathrm{e}^{-\tau p}$ revient à retarder le signal de $\tau$ : $f(t - \tau)u(t - \tau)$.`,
        String.raw`$\frac1p$ est la transformée de $u(t)$, et $\tau = 2$.`,
        String.raw`Donc $\mathcal{L}^{-1}\left[\frac{\mathrm{e}^{-2p}}{p}\right] = u(t - 2)$ : nul avant $t = 2$, égal à $1$ ensuite.`
      ],
      why: { 1: String.raw`Erreur de sens : $\mathrm{e}^{-2p}$ est un <b>retard</b> de $2$, pas une avance.`,
        2: String.raw`On a confondu retard et amortissement : $\mathrm{e}^{-2t}$ a pour transformée $\frac{1}{p+2}$.`,
        3: String.raw`On a retardé une rampe au lieu d'un échelon (et sans le $u$) : $t - 2$ a pour transformée $\frac{1}{p^2} - \frac2p$.` },
      rule: String.raw`$\mathrm{e}^{-\tau p}F(p) \leftrightarrow f(t-\tau)u(t-\tau)$` },
    { id: 'm10-q-029', level: 1, topic: 'Transformée d\'une primitive', sec: 'm10-s-laplace-prop',
      q: String.raw`$\mathcal{L}\left[\int_0^t f(s)\,\mathrm{d}s\right]$ vaut :`,
      choices: [String.raw`$pF(p)$`, String.raw`$\dfrac{F(p)}{p}$`, String.raw`$F(p) - f(0)$`, String.raw`$-F'(p)$`], answer: 1,
      explain: String.raw`Si $g(t) = \int_0^t f$, alors $g' = f$ et $g(0) = 0$, donc $pG(p) - 0 = F(p)$, soit $G(p) = \frac{F(p)}{p}$ : intégrer revient à diviser par $p$.`,
      steps: [
        String.raw`Rappel : en Laplace, <b>dériver $\approx$ multiplier par $p$</b> et <b>intégrer $\approx$ diviser par $p$</b>.`,
        String.raw`On pose $g(t) = \int_0^t f(s)\,\mathrm{d}s$ : alors $g' = f$ et $g(0) = 0$.`,
        String.raw`Règle de dérivation : $\mathcal{L}[g'] = pG(p) - g(0) = pG(p)$. Comme $g' = f$ : $pG(p) = F(p)$, donc $G(p) = \frac{F(p)}{p}$.`
      ],
      why: { 0: String.raw`On a inversé les règles : multiplier par $p$ correspond à dériver.`,
        2: String.raw`On a mélangé avec la formule de la dérivée ($pF - f(0)$) en oubliant le facteur $p$.`,
        3: String.raw`On a confondu avec la multiplication par $t$ : $-F'(p)$ est la transformée de $t\,f(t)$.` },
      rule: String.raw`$\mathcal{L}\left[\int_0^t f\right] = \frac{F(p)}{p}$` },
    { id: 'm10-q-030', level: 2, topic: 'Fonction de transfert', sec: 'm10-s-inverse-edo',
      q: String.raw`La fonction de transfert d'un système linéaire d'entrée $e$ et de sortie $s$ est :`,
      choices: [String.raw`$H(p) = \dfrac{S(p)}{E(p)}$, à conditions initiales nulles`, String.raw`$H(p) = \dfrac{E(p)}{S(p)}$`, String.raw`$H(p) = S(p) - E(p)$`, String.raw`$H(t) = \dfrac{s(t)}{e(t)}$`], answer: 0,
      explain: String.raw`La fonction de transfert est le rapport des transformées de la sortie et de l'entrée, à conditions initiales nulles : $H(p) = \frac{S(p)}{E(p)}$, d'où $S(p) = H(p)E(p)$.`,
      steps: [
        String.raw`Rappel : un système linéaire transforme une entrée $e(t)$ en une sortie $s(t)$ ; en Laplace (conditions initiales nulles), l'équation différentielle devient $S(p) = H(p)\,E(p)$.`,
        String.raw`La <b>fonction de transfert</b> est donc le rapport $H(p) = \frac{S(p)}{E(p)}$ : « sortie sur entrée ».`,
        String.raw`Les conditions initiales doivent être nulles, sinon des termes en $y(0)$, $y'(0)$ s'ajoutent à $S(p)$.`
      ],
      why: { 1: String.raw`On a inversé le rapport : c'est sortie sur entrée.`,
        2: String.raw`On a pris une différence au lieu d'un rapport.`,
        3: String.raw`On a fait le rapport des signaux temporels ; c'est seulement en $p$ que la relation devient un produit simple.` },
      rule: String.raw`$H(p) = \frac{S(p)}{E(p)}$ (conditions initiales nulles), $S = H\,E$` },
    { id: 'm10-q-031', level: 2, topic: 'Forme canonique du 1er ordre', sec: 'm10-s-inverse-edo',
      q: String.raw`$H(p) = \dfrac{6}{2 + 4p}$. Gain statique $K$ et constante de temps $\tau$ ?`,
      choices: [String.raw`$K = 6$, $\tau = 4$`, String.raw`$K = 3$, $\tau = 2$`, String.raw`$K = 3$, $\tau = 4$`, String.raw`$K = 6$, $\tau = 2$`], answer: 1,
      explain: String.raw`On met $H$ sous la forme canonique $\frac{K}{1 + \tau p}$ en divisant numérateur et dénominateur par $2$ : $H(p) = \frac{3}{1 + 2p}$, donc $K = 3$ et $\tau = 2$.`,
      steps: [
        String.raw`Rappel : la <b>forme canonique</b> d'un premier ordre est $H(p) = \frac{K}{1 + \tau p}$ (le dénominateur commence par $1$) : $K$ est le gain statique ($K = H(0)$), $\tau$ la constante de temps.`,
        String.raw`On divise numérateur et dénominateur par $2$ (terme constant du dénominateur) : $\frac{6}{2 + 4p} = \frac{6/2}{2/2 + (4/2)p} = \frac{3}{1 + 2p}$.`,
        String.raw`Identification : $K = 3$, $\tau = 2$. Vérification : $H(0) = \frac{6}{2} = 3$ ✔.`
      ],
      why: { 0: String.raw`On a lu les coefficients sans mettre le dénominateur sous la forme $1 + \tau p$.`,
        2: String.raw`On a divisé le numérateur par $2$ mais pas le coefficient de $p$.`,
        3: String.raw`On a divisé le coefficient de $p$ mais pas le numérateur ; or $K = H(0) = 3$.` },
      rule: String.raw`Premier ordre canonique : $H(p) = \frac{K}{1 + \tau p}$, $K = H(0)$` },
    { id: 'm10-q-032', level: 3, topic: 'Stabilité et pôles', sec: 'm10-s-inverse-edo',
      q: String.raw`Le système $H(p) = \dfrac{1}{(p+1)(p-2)}$ est-il stable ?`,
      choices: [String.raw`Oui, car son gain statique est fini`, String.raw`Non : le pôle $p = 2$ donne un terme en $\mathrm{e}^{2t}$ qui diverge`, String.raw`Oui, car le pôle $-1$ compense le pôle $2$`], answer: 1,
      explain: String.raw`Les pôles sont $-1$ et $2$. La réponse impulsionnelle contient $\mathrm{e}^{-t}$ et $\mathrm{e}^{2t}$ ; le second terme explose, donc le système est instable (un seul pôle à partie réelle positive suffit).`,
      steps: [
        String.raw`Rappel : un système est <b>stable</b> si sa réponse impulsionnelle tend vers $0$, ce qui équivaut à : tous les pôles de $H$ ont une partie réelle strictement négative.`,
        String.raw`Pôles : $(p + 1)(p - 2) = 0 \iff p = -1$ ou $p = 2$.`,
        String.raw`Éléments simples : $H = \frac{A}{p+1} + \frac{B}{p-2}$, donc $h(t) = A\,\mathrm{e}^{-t} + B\,\mathrm{e}^{2t}$ avec $B = \frac13 \neq 0$ : le terme $\mathrm{e}^{2t}$ diverge, le système est <b>instable</b>.`
      ],
      why: { 0: String.raw`On a confondu gain statique fini et stabilité : $H(0) = -\frac12$ est fini, mais cela ne dit rien des pôles.`,
        2: String.raw`On a cru que les pôles se compensent : chaque pôle donne son propre mode, et un seul mode divergent suffit.` },
      rule: String.raw`Stable $\iff$ tous les pôles de $H$ ont une partie réelle $\lt 0$` },
    { id: 'm10-q-033', level: 2, topic: 'Produit de convolution', sec: 'm10-s-inverse-edo',
      q: String.raw`La transformée de Laplace d'un produit de convolution $f * g$ est :`,
      choices: [String.raw`$F(p)\,G(p)$`, String.raw`$F(p) + G(p)$`, String.raw`$F(p) * G(p)$`], answer: 0,
      explain: String.raw`La transformée de Laplace change une convolution en produit : $\mathcal{L}[f * g] = F(p)\,G(p)$. C'est pourquoi la sortie d'un système vérifie $S = H\,E$ quand $s = h * e$.`,
      steps: [
        String.raw`Rappel : le <b>produit de convolution</b> $(f * g)(t) = \int_0^t f(s)\,g(t - s)\,\mathrm{d}s$ décrit la sortie d'un système linéaire : $s = h * e$.`,
        String.raw`Propriété : $\mathcal{L}[f * g] = F(p) \times G(p)$ — une convolution (compliquée) devient un produit (simple).`,
        String.raw`Application : $s = h * e$ donne $S(p) = H(p)\,E(p)$.`
      ],
      why: { 1: String.raw`On a confondu avec la linéarité, qui concerne la somme $f + g$.`,
        2: String.raw`On a gardé une convolution en $p$ ; justement, Laplace la transforme en produit simple.` },
      rule: String.raw`$\mathcal{L}[f * g] = F(p)\,G(p)$` }
  ],

  /* ======================================================================
     EXERCICES « TAPE LA FORMULE »
     ====================================================================== */
  exercises: [
    { id: 'm10-x-001', level: 1, topic: 'Pulsation', sec: 'm10-s-periodiques',
      prompt: String.raw`Un signal a pour période $T = 20$ ms. Donne sa pulsation $\omega$ en rad/s (valeur exacte).`,
      answer: '100*pi', vars: [], check: 'value',
      mistakes: [
        { expr: '50', msg: String.raw`$50$ Hz est la fréquence $f$ ; la pulsation est $\omega = 2\pi f$.` },
        { expr: '2*pi*0.02', msg: String.raw`$\omega = \frac{2\pi}{T}$, pas $2\pi T$.` }
      ],
      hint: String.raw`$\omega = \frac{2\pi}{T}$ avec $T$ en secondes.`,
      explain: String.raw`$\omega = \frac{2\pi}{0{,}02} = 100\pi \approx 314$ rad/s.`,
      steps: [
        String.raw`Rappel : la <b>pulsation</b> $\omega$ (en rad/s) est l'angle parcouru par seconde ; un cycle vaut $2\pi$ rad, d'où $\omega = \frac{2\pi}{T} = 2\pi f$, avec $T$ en secondes.`,
        String.raw`Conversion : $T = 20$ ms $= 20 \times 10^{-3}$ s $= 0{,}02$ s.`,
        String.raw`Calcul : $\omega = \frac{2\pi}{0{,}02} = 2\pi \times 50 = 100\pi$ rad/s.`,
        String.raw`Valeur approchée : $100\pi \approx 314$ rad/s (fréquence $f = \frac{1}{T} = 50$ Hz, celle du secteur).`
      ],
      rule: String.raw`$\omega = \frac{2\pi}{T} = 2\pi f$`,
      pitfall: String.raw`Oublier de convertir les millisecondes en secondes, ou confondre $\omega$ et $f$.` },
    { id: 'm10-x-002', level: 1, topic: 'Valeur moyenne', sec: 'm10-s-periodiques',
      prompt: String.raw`Un signal créneau vaut $5$ V pendant le premier quart de chaque période et $0$ V le reste du temps (rapport cyclique $\frac14$). Donne sa valeur moyenne $a_0$ (en V).`,
      answer: '5/4', vars: [], check: 'value',
      mistakes: [
        { expr: '5/2', msg: String.raw`Le rapport cyclique est $\frac14$, pas $\frac12$.` },
        { expr: '5', msg: String.raw`$5$ V est la valeur haute ; la moyenne tient compte du temps passé à $0$.` }
      ],
      hint: String.raw`$a_0 = \frac1T\int_0^T f(t)\,\mathrm{d}t$ : aire d'une période divisée par $T$.`,
      explain: String.raw`$a_0 = \frac{1}{T}\cdot 5 \cdot \frac{T}{4} = \frac54$ V (en général : $\alpha E$).`,
      steps: [
        String.raw`Rappel : la <b>valeur moyenne</b> d'un signal périodique est $a_0 = \frac1T\int_0^T f(t)\,\mathrm{d}t$ : l'aire sous la courbe sur une période, divisée par la période.`,
        String.raw`Sur une période, le signal vaut $5$ V pendant $\frac{T}{4}$ et $0$ V pendant $\frac{3T}{4}$. Aire : $5 \times \frac{T}{4} + 0 \times \frac{3T}{4} = \frac{5T}{4}$.`,
        String.raw`On divise par $T$ : $a_0 = \frac{5T/4}{T} = \frac54 = 1{,}25$ V.`,
        String.raw`Contrôle avec la formule du créneau de rapport cyclique $\alpha$ : moyenne $= \alpha E = \frac14 \times 5 = 1{,}25$ V ✔.`
      ],
      rule: String.raw`Créneau de hauteur $E$ et de rapport cyclique $\alpha$ : $\langle f\rangle = \alpha E$`,
      pitfall: String.raw`Prendre la valeur haute $E$ ou $\frac{E}{2}$ sans tenir compte du rapport cyclique.` },
    { id: 'm10-x-003', level: 2, topic: 'Valeur moyenne', sec: 'm10-s-periodiques',
      prompt: String.raw`Donne la valeur moyenne du signal redressé double alternance $f(t) = |\sin t|$ (période $\pi$).`,
      answer: '2/pi', vars: [], check: 'value',
      mistakes: [
        { expr: '0', msg: String.raw`C'est la moyenne de $\sin t$ ; $|\sin t|$ est toujours positif.` },
        { expr: '1/pi', msg: String.raw`$\frac1\pi$ est la moyenne du redressé <b>simple</b> alternance ; ici la période est $\pi$.` }
      ],
      hint: String.raw`$\frac{1}{\pi}\int_0^{\pi}\sin t\,\mathrm{d}t$.`,
      explain: String.raw`$\langle f\rangle = \frac{1}{\pi}\int_0^{\pi}\sin t\,\mathrm{d}t = \frac{1}{\pi}\big[-\cos t\big]_0^{\pi} = \frac{2}{\pi} \approx 0{,}64$.`,
      steps: [
        String.raw`Rappel : la valeur moyenne vaut $\frac1T\int_0^T f(t)\,\mathrm{d}t$. Le signal $|\sin t|$ répète la même arche positive : sa période est $T = \pi$.`,
        String.raw`Sur $[0, \pi]$, $\sin t \geq 0$, donc $|\sin t| = \sin t$ et $\langle f\rangle = \frac{1}{\pi}\int_0^{\pi}\sin t\,\mathrm{d}t$.`,
        String.raw`Intégrale : $\int_0^{\pi}\sin t\,\mathrm{d}t = \big[-\cos t\big]_0^{\pi} = -\cos\pi + \cos 0 = 1 + 1 = 2$.`,
        String.raw`Donc $\langle f\rangle = \frac{2}{\pi} \approx 0{,}64$, valeur cohérente entre $0$ et le maximum $1$.`
      ],
      rule: String.raw`Redressé double alternance : moyenne $\frac{2}{\pi}$ ; simple alternance : $\frac{1}{\pi}$ (amplitude $1$)`,
      pitfall: String.raw`Calculer la moyenne de $\sin t$ (nulle) au lieu de celle de $|\sin t|$.` },
    { id: 'm10-x-004', level: 2, topic: 'Égalité de Parseval', sec: 'm10-s-dirichlet-parseval',
      prompt: String.raw`Calcule la puissance moyenne $\frac{1}{T}\int_0^T f(t)^2\,\mathrm{d}t$ du signal $f(t) = 3 + 4\cos(\omega t)$.`,
      answer: '17', vars: [], check: 'value',
      mistakes: [
        { expr: '25', msg: String.raw`La puissance de $4\cos(\omega t)$ vaut $\frac{4^2}{2} = 8$, pas $16$.` },
        { expr: '9', msg: String.raw`Tu n'as gardé que la composante continue : l'harmonique apporte aussi sa puissance.` }
      ],
      hint: String.raw`Parseval : $a_0^2 + \frac12(a_1^2 + b_1^2)$.`,
      explain: String.raw`$a_0 = 3$, $a_1 = 4$ : $P = 3^2 + \frac{4^2}{2} = 9 + 8 = 17$ (le terme croisé $24\cos(\omega t)$ est de moyenne nulle).`,
      steps: [
        String.raw`Rappel : <b>Parseval</b> — la puissance moyenne $\frac1T\int_0^T f^2$ vaut $a_0^2 + \frac12\sum_{n\geq1}(a_n^2 + b_n^2)$ : la composante continue apporte $a_0^2$, chaque sinusoïde d'amplitude $A$ apporte $\frac{A^2}{2}$.`,
        String.raw`Coefficients de $f(t) = 3 + 4\cos(\omega t)$ : $a_0 = 3$, $a_1 = 4$, $b_1 = 0$, tous les autres nuls.`,
        String.raw`Calcul : $P = 3^2 + \frac12 \times 4^2 = 9 + 8 = 17$.`,
        String.raw`Vérification directe : $f^2 = 9 + 24\cos(\omega t) + 16\cos^2(\omega t)$ ; moyennes $9$, $0$ et $16 \times \frac12 = 8$, total $17$ ✔.`
      ],
      rule: String.raw`$\frac1T\int_0^T f^2 = a_0^2 + \frac12\sum_{n\geq1}(a_n^2 + b_n^2)$`,
      pitfall: String.raw`Oublier le facteur $\frac12$ devant les harmoniques (la moyenne de $\cos^2$ vaut $\frac12$).` },
    { id: 'm10-x-005', level: 1, topic: 'Amplitude d\'un harmonique', sec: 'm10-s-complexe',
      prompt: String.raw`$f(t) = 2 + 3\cos(\omega t) + 4\sin(\omega t)$. Donne l'amplitude $A_1$ du fondamental.`,
      answer: '5', vars: [], check: 'value',
      mistakes: [
        { expr: '7', msg: String.raw`$3\cos$ et $4\sin$ sont en quadrature : $A_1 = \sqrt{a_1^2 + b_1^2}$.` },
        { expr: '5/2', msg: String.raw`$\frac52 = |c_1|$ ; l'amplitude est $A_1 = 2|c_1|$.` }
      ],
      hint: String.raw`$A_n = \sqrt{a_n^2 + b_n^2}$.`,
      explain: String.raw`$A_1 = \sqrt{3^2 + 4^2} = 5$ : $3\cos(\omega t) + 4\sin(\omega t) = 5\cos(\omega t - \varphi)$ avec $\tan\varphi = \frac43$.`,
      steps: [
        String.raw`Rappel : un cosinus et un sinus de même pulsation se combinent en une seule sinusoïde : $a\cos(\omega t) + b\sin(\omega t) = A\cos(\omega t - \varphi)$ avec $A = \sqrt{a^2 + b^2}$.`,
        String.raw`On lit les coefficients du fondamental : $a_1 = 3$, $b_1 = 4$ (la constante $2$ est la moyenne, elle ne compte pas).`,
        String.raw`Calcul : $A_1 = \sqrt{3^2 + 4^2} = \sqrt{9 + 16} = \sqrt{25} = 5$.`,
        String.raw`Vérification : avec $\tan\varphi = \frac43$, on a $\cos\varphi = \frac35$ et $\sin\varphi = \frac45$, donc $5\cos(\omega t - \varphi) = 3\cos(\omega t) + 4\sin(\omega t)$ ✔.`
      ],
      rule: String.raw`$A_n = \sqrt{a_n^2 + b_n^2} = 2|c_n|$`,
      pitfall: String.raw`Additionner les amplitudes $3 + 4$ : un cosinus et un sinus ne sont pas en phase.` },
    { id: 'm10-x-006', level: 1, topic: 'Coefficient a0', sec: 'm10-s-fourier-reel',
      prompt: String.raw`$f$ est $2\pi$-périodique avec $f(t) = |t|$ sur $[-\pi, \pi]$. Donne $a_0$ (valeur moyenne).`,
      answer: 'pi/2', vars: [], check: 'value',
      mistakes: [
        { expr: 'pi', msg: String.raw`Tu as oublié de diviser par la période : $a_0 = \frac{1}{2\pi}\int_{-\pi}^{\pi}|t|\,\mathrm{d}t$.` },
        { expr: '0', msg: String.raw`$|t|$ est pair, pas impair : sa moyenne n'est pas nulle.` }
      ],
      hint: String.raw`$a_0 = \frac{1}{2\pi}\int_{-\pi}^{\pi}|t|\,\mathrm{d}t = \frac{1}{\pi}\int_0^{\pi} t\,\mathrm{d}t$.`,
      explain: String.raw`$a_0 = \frac1\pi \cdot \frac{\pi^2}{2} = \frac{\pi}{2}$ (aire sous la courbe : deux triangles d'aire $\frac{\pi^2}{2}$, divisée par la période $2\pi$).`,
      steps: [
        String.raw`Rappel : $a_0$ est la <b>valeur moyenne</b> sur une période : $a_0 = \frac1T\int_{\text{période}} f(t)\,\mathrm{d}t$, ici avec $T = 2\pi$.`,
        String.raw`$a_0 = \frac{1}{2\pi}\int_{-\pi}^{\pi}|t|\,\mathrm{d}t$. Comme $|t|$ est paire, $\int_{-\pi}^{\pi}|t|\,\mathrm{d}t = 2\int_0^{\pi} t\,\mathrm{d}t$.`,
        String.raw`$\int_0^{\pi} t\,\mathrm{d}t = \left[\frac{t^2}{2}\right]_0^{\pi} = \frac{\pi^2}{2}$, donc $\int_{-\pi}^{\pi}|t|\,\mathrm{d}t = \pi^2$.`,
        String.raw`$a_0 = \frac{\pi^2}{2\pi} = \frac{\pi}{2} \approx 1{,}57$ : cohérent, $|t|$ varie linéairement entre $0$ et $\pi$, sa moyenne est au milieu.`
      ],
      rule: String.raw`$a_0 = \frac1T\int_0^T f$ ; si $f$ est paire, $\int_{-a}^{a} f = 2\int_0^a f$`,
      pitfall: String.raw`Oublier de diviser par la période $2\pi$.` },
    { id: 'm10-x-007', level: 2, topic: 'Coefficients du créneau', sec: 'm10-s-exemples',
      prompt: String.raw`$f$ est $2\pi$-périodique : $f(t) = 1$ sur $]0, \pi[$ et $f(t) = -1$ sur $]-\pi, 0[$. Donne $b_n$ en fonction de $n$ (formule valable pour tout $n \geq 1$ ; tu peux utiliser <i>(-1)^n</i> ou <i>cos(n*pi)</i>).`,
      answer: '2*(1-(-1)^n)/(n*pi)', answers: ['2*(1-cos(n*pi))/(n*pi)'], vars: ['n'], check: 'expr', domain: [1, 7],
      mistakes: [
        { expr: '4/(n*pi)', msg: String.raw`$\frac{4}{n\pi}$ n'est valable que pour $n$ impair ; pour $n$ pair, $b_n = 0$. Écris une formule unique avec $(-1)^n$.` },
        { expr: '(1-(-1)^n)/(n*pi)', msg: String.raw`Il manque un facteur $2$ : $b_n = \frac{2}{\pi}\int_0^{\pi}\sin(nt)\,\mathrm{d}t$ (parité : $\frac{4}{T}$ avec $T = 2\pi$).` }
      ],
      hint: String.raw`$f$ impaire : $b_n = \frac{2}{\pi}\int_0^{\pi}\sin(nt)\,\mathrm{d}t$.`,
      explain: String.raw`$b_n = \frac{2}{\pi}\left[-\frac{\cos(nt)}{n}\right]_0^{\pi} = \frac{2}{\pi}\cdot\frac{1 - \cos(n\pi)}{n} = \frac{2(1 - (-1)^n)}{n\pi}$, soit $\frac{4}{n\pi}$ si $n$ impair et $0$ si $n$ pair.`,
      steps: [
        String.raw`Rappel : si $f$ est <b>impaire</b>, $a_n = 0$ et $b_n = \frac{4}{T}\int_0^{T/2} f(t)\sin(n\omega t)\,\mathrm{d}t$ ; avec $T = 2\pi$ ($\omega = 1$) : $b_n = \frac{2}{\pi}\int_0^{\pi} f(t)\sin(nt)\,\mathrm{d}t$.`,
        String.raw`Sur $]0, \pi[$, $f = 1$ : $b_n = \frac{2}{\pi}\int_0^{\pi}\sin(nt)\,\mathrm{d}t$.`,
        String.raw`Primitive : $\int_0^{\pi}\sin(nt)\,\mathrm{d}t = \left[-\frac{\cos(nt)}{n}\right]_0^{\pi} = \frac{-\cos(n\pi) + \cos 0}{n} = \frac{1 - (-1)^n}{n}$, car $\cos(n\pi) = (-1)^n$.`,
        String.raw`Donc $b_n = \frac{2(1 - (-1)^n)}{n\pi}$ : $\frac{4}{n\pi}$ pour $n$ impair, $0$ pour $n$ pair.`,
        String.raw`Contrôle : $b_1 = \frac{4}{\pi} \approx 1{,}27$, $b_2 = 0$, $b_3 = \frac{4}{3\pi} \approx 0{,}42$.`
      ],
      rule: String.raw`$\cos(n\pi) = (-1)^n$ ; créneau $\pm1$ : $b_n = \frac{2(1 - (-1)^n)}{n\pi}$`,
      pitfall: String.raw`Oublier le facteur $2$ issu de la parité ($\frac{4}{T}$ au lieu de $\frac{2}{T}$).` },
    { id: 'm10-x-008', level: 1, topic: 'Coefficients du créneau', sec: 'm10-s-exemples',
      prompt: String.raw`Pour le même créneau ($1$ sur $]0,\pi[$, $-1$ sur $]-\pi, 0[$), donne $b_3$.`,
      answer: '4/(3*pi)', vars: [], check: 'value',
      mistakes: [
        { expr: '4/pi', msg: String.raw`$\frac{4}{\pi}$ est $b_1$ ; pour $n = 3$ on divise par $3$.` },
        { expr: '0', msg: String.raw`Ce sont les harmoniques <b>pairs</b> qui sont nuls ; $3$ est impair.` }
      ],
      hint: String.raw`$b_n = \frac{4}{n\pi}$ pour $n$ impair.`,
      explain: String.raw`$b_3 = \frac{2(1 - (-1)^3)}{3\pi} = \frac{4}{3\pi} \approx 0{,}42$.`,
      steps: [
        String.raw`Rappel : pour ce créneau impair, $b_n = \frac{2(1 - (-1)^n)}{n\pi}$ ; seuls les harmoniques de rang <b>impair</b> sont présents.`,
        String.raw`Pour $n = 3$ : $(-1)^3 = -1$, donc $1 - (-1)^3 = 1 + 1 = 2$.`,
        String.raw`$b_3 = \frac{2 \times 2}{3\pi} = \frac{4}{3\pi} \approx 0{,}42$.`,
        String.raw`Interprétation : l'harmonique $3$ a une amplitude trois fois plus petite que le fondamental $b_1 = \frac{4}{\pi}$.`
      ],
      rule: String.raw`Créneau $\pm 1$ : $b_n = \frac{4}{n\pi}$ pour $n$ impair, $0$ pour $n$ pair`,
      pitfall: String.raw`Croire que les harmoniques impairs sont nuls : ce sont les pairs qui s'annulent.` },
    { id: 'm10-x-009', level: 2, topic: 'Coefficients de la dent de scie', sec: 'm10-s-exemples',
      prompt: String.raw`$f$ est $2\pi$-périodique avec $f(t) = t$ sur $]-\pi, \pi[$ (dent de scie). Donne $b_n$ en fonction de $n$.`,
      answer: '2*(-1)^(n+1)/n', answers: ['-2*cos(n*pi)/n'], vars: ['n'], check: 'expr', domain: [1, 7],
      mistakes: [
        { expr: '2*(-1)^n/n', msg: String.raw`Signe : $b_1 = 2 > 0$ (pour $t$ petit, $f(t) = t \approx 2\sin t - \cdots$). Revois le terme de bord $\left[-\frac{t\cos nt}{n}\right]_0^\pi$.` },
        { expr: '2/n', msg: String.raw`$\cos(n\pi) = (-1)^n$ : le signe alterne.` }
      ],
      hint: String.raw`$f$ impaire : $b_n = \frac{2}{\pi}\int_0^{\pi} t\sin(nt)\,\mathrm{d}t$, par parties.`,
      explain: String.raw`$\int_0^{\pi} t\sin(nt)\,\mathrm{d}t = \left[-\frac{t\cos(nt)}{n}\right]_0^{\pi} + \frac1n\int_0^{\pi}\cos(nt)\,\mathrm{d}t = -\frac{\pi(-1)^n}{n}$, donc $b_n = \frac{2}{\pi}\cdot\left(-\frac{\pi(-1)^n}{n}\right) = \frac{2(-1)^{n+1}}{n}$.`,
      steps: [
        String.raw`Rappel : $f(t) = t$ est <b>impaire</b> sur $]-\pi, \pi[$, donc $a_n = 0$ et $b_n = \frac{2}{\pi}\int_0^{\pi} t\sin(nt)\,\mathrm{d}t$. On intègre par parties : $\int uv' = [uv] - \int u'v$.`,
        String.raw`On pose $u = t$, $v' = \sin(nt)$, d'où $u' = 1$, $v = -\frac{\cos(nt)}{n}$ : $\int_0^{\pi} t\sin(nt)\,\mathrm{d}t = \left[-\frac{t\cos(nt)}{n}\right]_0^{\pi} + \frac1n\int_0^{\pi}\cos(nt)\,\mathrm{d}t$.`,
        String.raw`Terme de bord : $-\frac{\pi\cos(n\pi)}{n} - 0 = -\frac{\pi(-1)^n}{n}$. Intégrale restante : $\frac1n\left[\frac{\sin(nt)}{n}\right]_0^{\pi} = 0$ car $\sin(n\pi) = 0$.`,
        String.raw`$b_n = \frac{2}{\pi} \times \left(-\frac{\pi(-1)^n}{n}\right) = -\frac{2(-1)^n}{n} = \frac{2(-1)^{n+1}}{n}$.`,
        String.raw`Vérification (Dirichlet en $t = \frac{\pi}{2}$) : $\sum b_n\sin\frac{n\pi}{2} = 2\left(1 - \frac13 + \frac15 - \cdots\right) = 2 \times \frac{\pi}{4} = \frac{\pi}{2} = f\left(\frac{\pi}{2}\right)$ ✔.`
      ],
      rule: String.raw`Par parties : $\int uv' = [uv] - \int u'v$ ; $\cos(n\pi) = (-1)^n$, $\sin(n\pi) = 0$`,
      pitfall: String.raw`Erreur de signe dans le terme de bord $\left[-\frac{t\cos(nt)}{n}\right]_0^{\pi}$ : on doit trouver $b_1 = 2 > 0$.` },
    { id: 'm10-x-010', level: 3, topic: 'Coefficients du triangle', sec: 'm10-s-exemples',
      prompt: String.raw`$f$ est $2\pi$-périodique avec $f(t) = |t|$ sur $[-\pi, \pi]$. Donne $a_n$ ($n \geq 1$) en fonction de $n$.`,
      answer: '2*((-1)^n-1)/(pi*n^2)', answers: ['2*(cos(n*pi)-1)/(pi*n^2)'], vars: ['n'], check: 'expr', domain: [1, 7],
      mistakes: [
        { expr: '-4/(pi*n^2)', msg: String.raw`Valable seulement pour $n$ impair ; pour $n$ pair, $a_n = 0$. Utilise $(-1)^n$ pour une formule unique.` },
        { expr: '2*((-1)^n-1)/(pi*n)', msg: String.raw`L'intégration par parties fait apparaître $\frac{1}{n^2}$ : $\left[\frac{\cos(nt)}{n^2}\right]_0^{\pi}$.` },
        { expr: '2*(1-(-1)^n)/(pi*n^2)', msg: String.raw`Signe : $\left[\frac{\cos nt}{n^2}\right]_0^{\pi} = \frac{(-1)^n - 1}{n^2} \leq 0$.` }
      ],
      hint: String.raw`$f$ paire : $a_n = \frac{2}{\pi}\int_0^{\pi} t\cos(nt)\,\mathrm{d}t$, par parties.`,
      explain: String.raw`$\int_0^{\pi} t\cos(nt)\,\mathrm{d}t = \left[\frac{t\sin nt}{n}\right]_0^{\pi} - \frac1n\int_0^{\pi}\sin(nt)\,\mathrm{d}t = \frac{(-1)^n - 1}{n^2}$, donc $a_n = \frac{2((-1)^n - 1)}{\pi n^2}$ : $-\frac{4}{\pi n^2}$ si $n$ impair, $0$ si $n$ pair.`,
      steps: [
        String.raw`Rappel : $|t|$ est <b>paire</b>, donc $b_n = 0$ et $a_n = \frac{2}{\pi}\int_0^{\pi} t\cos(nt)\,\mathrm{d}t$ (période $2\pi$) ; on intègre par parties.`,
        String.raw`On pose $u = t$, $v' = \cos(nt)$, d'où $v = \frac{\sin(nt)}{n}$ : $\int_0^{\pi} t\cos(nt)\,\mathrm{d}t = \left[\frac{t\sin(nt)}{n}\right]_0^{\pi} - \frac1n\int_0^{\pi}\sin(nt)\,\mathrm{d}t$.`,
        String.raw`Le terme de bord est nul ($\sin(n\pi) = 0$). Et $\int_0^{\pi}\sin(nt)\,\mathrm{d}t = \frac{1 - (-1)^n}{n}$, donc l'intégrale vaut $-\frac{1 - (-1)^n}{n^2} = \frac{(-1)^n - 1}{n^2}$.`,
        String.raw`$a_n = \frac{2}{\pi} \times \frac{(-1)^n - 1}{n^2} = \frac{2((-1)^n - 1)}{\pi n^2}$ : $-\frac{4}{\pi n^2}$ si $n$ impair, $0$ si $n$ pair.`,
        String.raw`Contrôle : décroissance en $\frac{1}{n^2}$, normale pour un signal continu à dérivée discontinue ; et $a_n \leq 0$.`
      ],
      rule: String.raw`Triangle $|t|$ : $a_n = \frac{2((-1)^n - 1)}{\pi n^2}$ (coefficients en $\frac{1}{n^2}$)`,
      pitfall: String.raw`Oublier le second $\frac1n$ issu de l'intégration par parties, ou le signe de $(-1)^n - 1$.` },
    { id: 'm10-x-011', level: 3, topic: 'Coefficients complexes', sec: 'm10-s-complexe',
      prompt: String.raw`Pour la dent de scie $f(t) = t$ sur $]-\pi, \pi[$ ($2\pi$-périodique), donne le coefficient complexe $c_n$ ($n \geq 1$) en fonction de $n$ (utilise <i>i</i>).`,
      answer: 'i*(-1)^n/n', answers: ['i*cos(n*pi)/n'], vars: ['n'], check: 'expr', domain: [1, 7],
      mistakes: [
        { expr: '-i*(-1)^n/n', msg: String.raw`Signe : $c_n = \frac{a_n - \mathrm{i}b_n}{2}$ avec $b_n = \frac{2(-1)^{n+1}}{n}$.` },
        { expr: '2*(-1)^(n+1)/n', msg: String.raw`C'est $b_n$ ; $c_n = \frac{a_n - \mathrm{i}\,b_n}{2}$ est imaginaire pur ici.` }
      ],
      hint: String.raw`$a_n = 0$, $b_n = \frac{2(-1)^{n+1}}{n}$ et $c_n = \frac{a_n - \mathrm{i}\,b_n}{2}$.`,
      explain: String.raw`$c_n = -\frac{\mathrm{i}}{2}\cdot\frac{2(-1)^{n+1}}{n} = \frac{\mathrm{i}(-1)^n}{n}$ : imaginaire pur, comme attendu pour un signal impair.`,
      steps: [
        String.raw`Rappel : pour $n \geq 1$, $c_n = \frac{a_n - \mathrm{i}\,b_n}{2}$. Un signal impair a des $c_n$ imaginaires purs.`,
        String.raw`Pour la dent de scie : $a_n = 0$ et $b_n = \frac{2(-1)^{n+1}}{n}$.`,
        String.raw`$c_n = \frac{0 - \mathrm{i} \times \frac{2(-1)^{n+1}}{n}}{2} = -\frac{\mathrm{i}(-1)^{n+1}}{n}$.`,
        String.raw`Comme $-(-1)^{n+1} = (-1)^n$ : $c_n = \frac{\mathrm{i}(-1)^n}{n}$. Vérification $n = 1$ : $c_1 = -\mathrm{i}$, et $b_1 = -2\operatorname{Im}(c_1) = 2$ ✔.`
      ],
      rule: String.raw`$c_n = \frac{a_n - \mathrm{i}\,b_n}{2}$, $a_n = 2\operatorname{Re}(c_n)$, $b_n = -2\operatorname{Im}(c_n)$`,
      pitfall: String.raw`Oublier le signe $-$ devant $\mathrm{i}b_n$ ou le facteur $\frac12$.` },
    { id: 'm10-x-012', level: 2, topic: 'Parseval et sommes de séries', sec: 'm10-s-dirichlet-parseval',
      prompt: String.raw`Le créneau impair $\pm 1$ a pour coefficients $b_{2k+1} = \frac{4}{\pi(2k+1)}$ (les autres sont nuls) et une puissance moyenne égale à $1$. Déduis de Parseval la valeur de $\sum_{k=0}^{+\infty}\frac{1}{(2k+1)^2}$.`,
      answer: 'pi^2/8', vars: [], check: 'value',
      mistakes: [
        { expr: 'pi^2/6', msg: String.raw`$\frac{\pi^2}{6}$ est la somme sur <b>tous</b> les entiers ; ici seuls les impairs interviennent.` },
        { expr: 'pi^2/16', msg: String.raw`Parseval : $1 = \frac12\sum b_n^2$, n'oublie pas le facteur $\frac12$.` }
      ],
      hint: String.raw`$1 = \frac12\sum_{k\geq0}\frac{16}{\pi^2(2k+1)^2}$.`,
      explain: String.raw`$1 = \frac{8}{\pi^2}\sum_{k\geq0}\frac{1}{(2k+1)^2}$, donc $\sum_{k\geq0}\frac{1}{(2k+1)^2} = \frac{\pi^2}{8}$.`,
      steps: [
        String.raw`Rappel : <b>Parseval</b> — $\frac1T\int_0^T f^2 = a_0^2 + \frac12\sum_{n\geq1}(a_n^2 + b_n^2)$. Connaissant les deux membres, on en déduit la somme d'une série numérique.`,
        String.raw`Membre de gauche : $f = \pm 1$, donc $f^2 = 1$ partout et sa moyenne vaut $1$. Membre de droite : $a_0 = a_n = 0$ et $b_{2k+1}^2 = \frac{16}{\pi^2(2k+1)^2}$.`,
        String.raw`Égalité : $1 = \frac12\sum_{k\geq0}\frac{16}{\pi^2(2k+1)^2} = \frac{8}{\pi^2}\sum_{k\geq0}\frac{1}{(2k+1)^2}$.`,
        String.raw`On isole : $\sum_{k\geq0}\frac{1}{(2k+1)^2} = \frac{\pi^2}{8} \approx 1{,}234$. Contrôle : $1 + \frac19 + \frac{1}{25} + \frac{1}{49} \approx 1{,}172$, la somme s'en approche ✔.`
      ],
      rule: String.raw`Parseval : $\frac1T\int_0^T f^2 = a_0^2 + \frac12\sum(a_n^2 + b_n^2)$`,
      pitfall: String.raw`Oublier le facteur $\frac12$, ou confondre avec $\sum \frac{1}{n^2} = \frac{\pi^2}{6}$ (tous les entiers).` },
    { id: 'm10-x-013', level: 2, topic: 'Théorème de Dirichlet', sec: 'm10-s-dirichlet-parseval',
      prompt: String.raw`$f$ est $2\pi$-périodique : $f(t) = 2$ sur $]0, \pi[$ et $f(t) = 0$ sur $]\pi, 2\pi[$. Vers quelle valeur converge sa série de Fourier en $t = \pi$ ?`,
      answer: '1', vars: [], check: 'value',
      mistakes: [
        { expr: '2', msg: String.raw`C'est la limite à gauche ; en un point de saut, la série converge vers la demi-somme.` },
        { expr: '0', msg: String.raw`C'est la limite à droite ; Dirichlet donne $\frac{f(\pi^+) + f(\pi^-)}{2}$.` }
      ],
      hint: String.raw`Théorème de Dirichlet.`,
      explain: String.raw`$S(\pi) = \frac{f(\pi^-) + f(\pi^+)}{2} = \frac{2 + 0}{2} = 1$.`,
      steps: [
        String.raw`Rappel : <b>Dirichlet</b> — en un point de discontinuité, la série de Fourier converge vers la moyenne des limites à gauche et à droite : $\frac{f(t^-) + f(t^+)}{2}$.`,
        String.raw`En $t = \pi$ : juste avant ($t \lt \pi$, dans $]0, \pi[$) $f = 2$ ; juste après ($t > \pi$, dans $]\pi, 2\pi[$) $f = 0$.`,
        String.raw`$S(\pi) = \frac{2 + 0}{2} = 1$ : la série coupe le saut en son milieu.`
      ],
      rule: String.raw`En un saut : $S(t_0) = \frac{f(t_0^-) + f(t_0^+)}{2}$`,
      pitfall: String.raw`Prendre une seule des deux limites (gauche ou droite).` },
    { id: 'm10-x-014', level: 1, topic: 'Table de Laplace', sec: 'm10-s-laplace-def',
      prompt: String.raw`Donne la transformée de Laplace de la constante $f(t) = 3$ (signal causal), en fonction de $p$.`,
      answer: '3/p', vars: ['p'], check: 'expr', domain: [1, 4],
      mistakes: [
        { expr: '3', msg: String.raw`$3$ serait la transformée de $3\delta(t)$ ; pour une constante, $\mathcal{L}[1] = \frac1p$.` },
        { expr: '3/p^2', msg: String.raw`$\frac{1}{p^2}$ est la transformée de $t$, pas de $1$.` }
      ],
      hint: String.raw`$\mathcal{L}[1] = \frac1p$ et linéarité.`,
      explain: String.raw`$\mathcal{L}[3] = 3\,\mathcal{L}[1] = \frac{3}{p}$.`,
      steps: [
        String.raw`Rappel : la transformée de Laplace est $F(p) = \int_0^{+\infty} f(t)\,\mathrm{e}^{-pt}\,\mathrm{d}t$ ; elle est <b>linéaire</b> et $\mathcal{L}[1] = \frac1p$.`,
        String.raw`$f(t) = 3 = 3 \times 1$, donc par linéarité $\mathcal{L}[3] = 3\,\mathcal{L}[1]$.`,
        String.raw`$\mathcal{L}[3] = 3 \times \frac1p = \frac3p$.`,
        String.raw`Vérification (valeur initiale) : $p \times \frac3p = 3 = f(0^+)$ ✔.`
      ],
      rule: String.raw`$\mathcal{L}[1] = \frac1p$ et $\mathcal{L}[af + bg] = aF + bG$`,
      pitfall: String.raw`Confondre la constante $3$ (transformée $\frac3p$) avec l'impulsion $3\delta$ (transformée $3$).` },
    { id: 'm10-x-015', level: 1, topic: 'Table de Laplace', sec: 'm10-s-laplace-def',
      prompt: String.raw`Donne $\mathcal{L}[t^2]$ en fonction de $p$.`,
      answer: '2/p^3', vars: ['p'], check: 'expr', domain: [1, 4],
      mistakes: [
        { expr: '1/p^3', msg: String.raw`Il manque le $n! = 2! = 2$.` },
        { expr: '2/p^2', msg: String.raw`L'exposant est $n + 1 = 3$.` }
      ],
      hint: String.raw`$\mathcal{L}[t^n] = \frac{n!}{p^{n+1}}$.`,
      explain: String.raw`$\mathcal{L}[t^2] = \frac{2!}{p^3} = \frac{2}{p^3}$.`,
      steps: [
        String.raw`Rappel : $\mathcal{L}[t^n] = \frac{n!}{p^{n+1}}$ (obtenu par intégrations par parties successives).`,
        String.raw`Ici $n = 2$ : $n! = 2! = 2$ et $n + 1 = 3$.`,
        String.raw`$\mathcal{L}[t^2] = \frac{2}{p^3}$.`,
        String.raw`Vérification par récurrence : $\mathcal{L}[t^2] = \frac{2}{p}\,\mathcal{L}[t] = \frac2p \times \frac{1}{p^2} = \frac{2}{p^3}$ ✔.`
      ],
      rule: String.raw`$\mathcal{L}[t^n] = \frac{n!}{p^{n+1}}$`,
      pitfall: String.raw`Oublier le $n!$ ou mettre l'exposant $n$ au lieu de $n + 1$.` },
    { id: 'm10-x-016', level: 1, topic: 'Table de Laplace', sec: 'm10-s-laplace-def',
      prompt: String.raw`Donne $\mathcal{L}\left[\mathrm{e}^{-2t}\right]$ en fonction de $p$.`,
      answer: '1/(p+2)', vars: ['p'], check: 'expr', domain: [1, 4],
      mistakes: [
        { expr: '1/(p-2)', msg: String.raw`$\frac{1}{p-2}$ correspond à $\mathrm{e}^{+2t}$.` },
        { expr: 'exp(-2*p)/p', msg: String.raw`Confusion avec le théorème du retard : $\frac{\mathrm{e}^{-2p}}{p}$ est la transformée de $u(t-2)$.` }
      ],
      hint: String.raw`$\mathcal{L}[\mathrm{e}^{-at}] = \frac{1}{p+a}$.`,
      explain: String.raw`$\int_0^{+\infty}\mathrm{e}^{-2t}\mathrm{e}^{-pt}\,\mathrm{d}t = \frac{1}{p+2}$.`,
      steps: [
        String.raw`Rappel : $\mathcal{L}[\mathrm{e}^{-at}] = \frac{1}{p+a}$ (pôle en $p = -a$).`,
        String.raw`Calcul : $\int_0^{+\infty}\mathrm{e}^{-2t}\mathrm{e}^{-pt}\,\mathrm{d}t = \int_0^{+\infty}\mathrm{e}^{-(p+2)t}\,\mathrm{d}t = \left[-\frac{\mathrm{e}^{-(p+2)t}}{p+2}\right]_0^{+\infty} = \frac{1}{p+2}$.`,
        String.raw`Résultat : $\frac{1}{p+2}$, avec un pôle en $-2$ qui correspond à $\mathrm{e}^{-2t}$.`,
        String.raw`Vérification (valeur initiale) : $\frac{p}{p+2} \to 1 = \mathrm{e}^{0}$ quand $p \to +\infty$ ✔.`
      ],
      rule: String.raw`$\mathcal{L}[\mathrm{e}^{-at}] = \frac{1}{p+a}$`,
      pitfall: String.raw`Se tromper de signe : $\mathrm{e}^{-2t}$ donne $p + 2$, pas $p - 2$.` },
    { id: 'm10-x-017', level: 1, topic: 'Table de Laplace', sec: 'm10-s-laplace-def',
      prompt: String.raw`Donne $\mathcal{L}[\sin(3t)]$ en fonction de $p$.`,
      answer: '3/(p^2+9)', vars: ['p'], check: 'expr', domain: [1, 4],
      mistakes: [
        { expr: 'p/(p^2+9)', msg: String.raw`C'est la transformée de $\cos(3t)$ ; pour le sinus, $\omega$ au numérateur.` },
        { expr: '1/(p^2+9)', msg: String.raw`Il manque $\omega = 3$ au numérateur.` },
        { expr: '3/(p^2+3)', msg: String.raw`C'est $\omega^2 = 9$ au dénominateur.` }
      ],
      hint: String.raw`$\mathcal{L}[\sin\omega t] = \frac{\omega}{p^2 + \omega^2}$.`,
      explain: String.raw`$\omega = 3$ : $\mathcal{L}[\sin 3t] = \frac{3}{p^2 + 9}$.`,
      steps: [
        String.raw`Rappel : $\mathcal{L}[\sin\omega t] = \frac{\omega}{p^2 + \omega^2}$ ($\omega$ au numérateur) et $\mathcal{L}[\cos\omega t] = \frac{p}{p^2 + \omega^2}$ ($p$ au numérateur).`,
        String.raw`Ici $\omega = 3$, donc $\omega^2 = 9$.`,
        String.raw`$\mathcal{L}[\sin 3t] = \frac{3}{p^2 + 9}$.`,
        String.raw`Vérification (valeur initiale) : $\frac{3p}{p^2+9} \to 0 = \sin 0$ quand $p \to +\infty$ ✔.`
      ],
      rule: String.raw`$\mathcal{L}[\sin\omega t] = \frac{\omega}{p^2 + \omega^2}$`,
      pitfall: String.raw`Mettre $p$ au numérateur (c'est le cosinus) ou $\omega$ au lieu de $\omega^2$ au dénominateur.` },
    { id: 'm10-x-018', level: 2, topic: 'Linéarité de Laplace', sec: 'm10-s-laplace-def',
      prompt: String.raw`Donne $\mathcal{L}\left[5t - 2 + \cos(2t)\right]$ en fonction de $p$.`,
      answer: '5/p^2-2/p+p/(p^2+4)', vars: ['p'], check: 'expr', domain: [1, 4],
      mistakes: [
        { expr: '5/p^2-2+p/(p^2+4)', msg: String.raw`La constante $2$ a pour transformée $\frac{2}{p}$, pas $2$.` },
        { expr: '5/p^2-2/p+2/(p^2+4)', msg: String.raw`$\cos \leftrightarrow p$ au numérateur ; $\omega$ au numérateur c'est pour le sinus.` }
      ],
      hint: String.raw`Linéarité, puis la table : $t \to \frac{1}{p^2}$, $1 \to \frac1p$, $\cos\omega t \to \frac{p}{p^2 + \omega^2}$.`,
      explain: String.raw`$\mathcal{L} = 5\cdot\frac{1}{p^2} - 2\cdot\frac{1}{p} + \frac{p}{p^2 + 4}$.`,
      steps: [
        String.raw`Rappel : Laplace est <b>linéaire</b>, $\mathcal{L}[af + bg + ch] = aF + bG + cH$ ; table : $\mathcal{L}[t] = \frac{1}{p^2}$, $\mathcal{L}[1] = \frac1p$, $\mathcal{L}[\cos\omega t] = \frac{p}{p^2 + \omega^2}$.`,
        String.raw`Premier terme : $\mathcal{L}[5t] = 5 \times \frac{1}{p^2} = \frac{5}{p^2}$.`,
        String.raw`Deuxième terme : $\mathcal{L}[-2] = -2 \times \frac1p = -\frac2p$.`,
        String.raw`Troisième terme ($\omega = 2$) : $\mathcal{L}[\cos 2t] = \frac{p}{p^2 + 4}$.`,
        String.raw`Somme : $\frac{5}{p^2} - \frac{2}{p} + \frac{p}{p^2 + 4}$.`
      ],
      rule: String.raw`Linéarité + table : $t \to \frac{1}{p^2}$, $1 \to \frac1p$, $\cos\omega t \to \frac{p}{p^2+\omega^2}$`,
      pitfall: String.raw`Transformer la constante $2$ en $2$ au lieu de $\frac2p$.` },
    { id: 'm10-x-019', level: 2, topic: 'Théorème d\'amortissement', sec: 'm10-s-laplace-prop',
      prompt: String.raw`Donne $\mathcal{L}\left[t\,\mathrm{e}^{-t}\right]$ en fonction de $p$.`,
      answer: '1/(p+1)^2', vars: ['p'], check: 'expr', domain: [1, 4],
      mistakes: [
        { expr: '1/(p^2*(p+1))', msg: String.raw`$\mathcal{L}[fg] \neq \mathcal{L}[f]\mathcal{L}[g]$ ! Utilise l'amortissement : $\mathcal{L}[t] = \frac{1}{p^2}$ puis $p \to p + 1$.` },
        { expr: '1/(p+1)', msg: String.raw`C'est la transformée de $\mathrm{e}^{-t}$ seul.` }
      ],
      hint: String.raw`$\mathcal{L}[\mathrm{e}^{-at}f(t)] = F(p + a)$ avec $f(t) = t$.`,
      explain: String.raw`$F(p) = \frac{1}{p^2}$ pour $f(t) = t$, donc $\mathcal{L}[t\,\mathrm{e}^{-t}] = F(p+1) = \frac{1}{(p+1)^2}$.`,
      steps: [
        String.raw`Rappel : <b>amortissement</b> — multiplier par $\mathrm{e}^{-at}$ revient à remplacer $p$ par $p + a$ : $\mathcal{L}[\mathrm{e}^{-at}f(t)] = F(p + a)$.`,
        String.raw`On part de $f(t) = t$, de transformée $F(p) = \frac{1}{p^2}$.`,
        String.raw`Avec $a = 1$ : $\mathcal{L}[t\,\mathrm{e}^{-t}] = F(p + 1) = \frac{1}{(p+1)^2}$.`,
        String.raw`Vérification (valeur initiale) : $\frac{p}{(p+1)^2} \to 0 = 0 \times \mathrm{e}^0$ ✔.`
      ],
      rule: String.raw`$\mathcal{L}[\mathrm{e}^{-at}f(t)] = F(p + a)$`,
      pitfall: String.raw`Multiplier les transformées : $\mathcal{L}[fg] \neq \mathcal{L}[f]\,\mathcal{L}[g]$.` },
    { id: 'm10-x-020', level: 2, topic: 'Théorème d\'amortissement', sec: 'm10-s-laplace-prop',
      prompt: String.raw`Donne $\mathcal{L}\left[\mathrm{e}^{-2t}\cos(3t)\right]$ en fonction de $p$.`,
      answer: '(p+2)/((p+2)^2+9)', vars: ['p'], check: 'expr', domain: [1, 4],
      mistakes: [
        { expr: 'p/((p+2)^2+9)', msg: String.raw`On remplace $p$ par $p + 2$ <b>partout</b>, numérateur compris.` },
        { expr: '(p-2)/((p-2)^2+9)', msg: String.raw`$\mathrm{e}^{-2t}$ donne $F(p + 2)$, pas $F(p - 2)$.` }
      ],
      hint: String.raw`$\mathcal{L}[\cos 3t] = \frac{p}{p^2+9}$, puis $p \to p + 2$.`,
      explain: String.raw`$\mathcal{L}[\mathrm{e}^{-2t}\cos 3t] = \frac{p+2}{(p+2)^2 + 9}$.`,
      steps: [
        String.raw`Rappel : $\mathcal{L}[\mathrm{e}^{-at}f(t)] = F(p + a)$ : on remplace $p$ par $p + a$ <b>partout</b> dans $F$.`,
        String.raw`$f(t) = \cos(3t)$, donc $F(p) = \frac{p}{p^2 + 9}$.`,
        String.raw`Avec $a = 2$ : $F(p + 2) = \frac{p + 2}{(p+2)^2 + 9}$ (numérateur compris).`,
        String.raw`Vérification (valeur initiale) : $\frac{p(p+2)}{(p+2)^2 + 9} \to 1 = \mathrm{e}^0\cos 0$ ✔.`
      ],
      rule: String.raw`$\mathcal{L}[\mathrm{e}^{-at}\cos\omega t] = \frac{p+a}{(p+a)^2 + \omega^2}$`,
      pitfall: String.raw`Ne remplacer $p$ par $p + 2$ qu'au dénominateur.` },
    { id: 'm10-x-021', level: 2, topic: 'Théorème du retard', sec: 'm10-s-laplace-prop',
      prompt: String.raw`Donne la transformée de l'échelon retardé $u(t - 2)$ en fonction de $p$.`,
      answer: 'exp(-2*p)/p', vars: ['p'], check: 'expr', domain: [1, 4],
      mistakes: [
        { expr: 'exp(-2*p)', msg: String.raw`Il manque $\mathcal{L}[u] = \frac1p$ : $\mathrm{e}^{-2p}$ seul est la transformée de $\delta(t - 2)$.` },
        { expr: 'exp(2*p)/p', msg: String.raw`Un retard donne $\mathrm{e}^{-\tau p}$ (signe moins).` }
      ],
      hint: String.raw`Théorème du retard : $\mathrm{e}^{-\tau p}F(p)$.`,
      explain: String.raw`$\mathcal{L}[u(t-2)] = \mathrm{e}^{-2p}\,\mathcal{L}[u] = \frac{\mathrm{e}^{-2p}}{p}$.`,
      steps: [
        String.raw`Rappel : <b>retard</b> — $\mathcal{L}[f(t - \tau)u(t - \tau)] = \mathrm{e}^{-\tau p}F(p)$ : décaler un signal de $\tau$ vers la droite multiplie sa transformée par $\mathrm{e}^{-\tau p}$.`,
        String.raw`$u(t - 2)$ est l'échelon $u$ retardé de $\tau = 2$, avec $\mathcal{L}[u] = \frac1p$.`,
        String.raw`$\mathcal{L}[u(t - 2)] = \mathrm{e}^{-2p} \times \frac1p = \frac{\mathrm{e}^{-2p}}{p}$.`,
        String.raw`Vérification directe : $\int_2^{+\infty}\mathrm{e}^{-pt}\,\mathrm{d}t = \left[-\frac{\mathrm{e}^{-pt}}{p}\right]_2^{+\infty} = \frac{\mathrm{e}^{-2p}}{p}$ ✔.`
      ],
      rule: String.raw`$\mathcal{L}[f(t-\tau)u(t-\tau)] = \mathrm{e}^{-\tau p}F(p)$`,
      pitfall: String.raw`Mettre $\mathrm{e}^{+2p}$ : un retard donne toujours un signe moins.` },
    { id: 'm10-x-022', level: 2, topic: 'Théorème du retard', sec: 'm10-s-laplace-prop',
      prompt: String.raw`Donne la transformée de la rampe retardée $(t-1)\,u(t-1)$ en fonction de $p$.`,
      answer: 'exp(-p)/p^2', vars: ['p'], check: 'expr', domain: [1, 4],
      mistakes: [
        { expr: '1/p^2-1/p', msg: String.raw`C'est la transformée de $(t - 1)u(t)$ (signal non retardé, négatif au départ) ; ici le signal est nul avant $t = 1$.` },
        { expr: 'exp(-p)/p', msg: String.raw`On retarde la rampe $t \to \frac{1}{p^2}$, pas l'échelon.` }
      ],
      hint: String.raw`C'est $f(t - 1)u(t - 1)$ avec $f(t) = t$.`,
      explain: String.raw`$\mathcal{L}[(t-1)u(t-1)] = \mathrm{e}^{-p}\,\mathcal{L}[t] = \frac{\mathrm{e}^{-p}}{p^2}$.`,
      steps: [
        String.raw`Rappel : $\mathcal{L}[f(t - \tau)u(t - \tau)] = \mathrm{e}^{-\tau p}F(p)$, à condition que <b>tout</b> le signal soit décalé.`,
        String.raw`$(t - 1)u(t - 1)$ est la rampe $f(t) = t$ décalée de $\tau = 1$ : elle vaut $0$ avant $t = 1$ puis monte avec une pente $1$. Et $F(p) = \mathcal{L}[t] = \frac{1}{p^2}$.`,
        String.raw`$\mathcal{L}[(t - 1)u(t - 1)] = \mathrm{e}^{-p} \times \frac{1}{p^2} = \frac{\mathrm{e}^{-p}}{p^2}$.`,
        String.raw`À ne pas confondre avec $(t - 1)u(t)$ (non retardé, négatif au départ), dont la transformée est $\frac{1}{p^2} - \frac1p$.`
      ],
      rule: String.raw`Retard : $f(t - \tau)u(t - \tau) \to \mathrm{e}^{-\tau p}F(p)$`,
      pitfall: String.raw`Retarder l'échelon au lieu de la rampe, ou oublier le facteur $\mathrm{e}^{-p}$.` },
    { id: 'm10-x-023', level: 2, topic: 'Transformée d\'une dérivée', sec: 'm10-s-laplace-prop',
      prompt: String.raw`$f(t) = \cos(2t)$. À l'aide de la règle de dérivation, donne $\mathcal{L}[f']$ en fonction de $p$.`,
      answer: '-4/(p^2+4)', vars: ['p'], check: 'expr', domain: [1, 4],
      mistakes: [
        { expr: 'p^2/(p^2+4)', msg: String.raw`Tu as oublié $-f(0) = -1$ : $\mathcal{L}[f'] = pF(p) - f(0)$.` },
        { expr: 'p^2/(p^2+4)+1', msg: String.raw`Signe : on <b>soustrait</b> $f(0)$.` }
      ],
      hint: String.raw`$\mathcal{L}[f'] = pF(p) - f(0)$ avec $F(p) = \frac{p}{p^2+4}$ et $f(0) = 1$.`,
      explain: String.raw`$p\cdot\frac{p}{p^2+4} - 1 = \frac{p^2 - p^2 - 4}{p^2 + 4} = -\frac{4}{p^2+4}$. Vérification : $f'(t) = -2\sin 2t$ et $\mathcal{L}[-2\sin 2t] = -\frac{4}{p^2 + 4}$.`,
      steps: [
        String.raw`Rappel : $\mathcal{L}[f'] = pF(p) - f(0)$ (dériver $\approx$ multiplier par $p$, puis retirer la valeur initiale).`,
        String.raw`Pour $f(t) = \cos(2t)$ : $F(p) = \frac{p}{p^2 + 4}$ et $f(0) = \cos 0 = 1$.`,
        String.raw`$pF(p) - f(0) = \frac{p^2}{p^2 + 4} - 1 = \frac{p^2 - (p^2 + 4)}{p^2 + 4} = -\frac{4}{p^2 + 4}$.`,
        String.raw`Vérification : $f'(t) = -2\sin(2t)$ et $\mathcal{L}[-2\sin 2t] = -2 \times \frac{2}{p^2 + 4} = -\frac{4}{p^2+4}$ ✔.`
      ],
      rule: String.raw`$\mathcal{L}[f'] = pF(p) - f(0^+)$`,
      pitfall: String.raw`Oublier $-f(0)$, ou l'ajouter au lieu de le soustraire.` },
    { id: 'm10-x-024', level: 3, topic: 'Multiplication par t', sec: 'm10-s-laplace-prop',
      prompt: String.raw`Donne $\mathcal{L}[t\sin t]$ en fonction de $p$.`,
      answer: '2*p/(p^2+1)^2', vars: ['p'], check: 'expr', domain: [1, 4],
      mistakes: [
        { expr: '-2*p/(p^2+1)^2', msg: String.raw`Signe : $\mathcal{L}[tf] = -F'(p)$, et $F'(p) = -\frac{2p}{(p^2+1)^2}$.` },
        { expr: '1/(p^2*(p^2+1))', msg: String.raw`La transformée d'un produit n'est pas le produit des transformées.` }
      ],
      hint: String.raw`$\mathcal{L}[t\,f(t)] = -F'(p)$ avec $F(p) = \frac{1}{p^2+1}$.`,
      explain: String.raw`$F'(p) = -\frac{2p}{(p^2+1)^2}$, donc $\mathcal{L}[t\sin t] = \frac{2p}{(p^2 + 1)^2}$.`,
      steps: [
        String.raw`Rappel : multiplier par $t$ revient à dériver en $p$ et changer le signe : $\mathcal{L}[t\,f(t)] = -F'(p)$.`,
        String.raw`$f(t) = \sin t$, donc $F(p) = \frac{1}{p^2 + 1} = (p^2 + 1)^{-1}$.`,
        String.raw`Dérivée ($\left(\frac1u\right)' = -\frac{u'}{u^2}$ avec $u = p^2 + 1$, $u' = 2p$) : $F'(p) = -\frac{2p}{(p^2+1)^2}$.`,
        String.raw`$\mathcal{L}[t\sin t] = -F'(p) = \frac{2p}{(p^2 + 1)^2}$.`,
        String.raw`Vérification (valeur initiale) : $\frac{2p^2}{(p^2+1)^2} \to 0 = 0 \times \sin 0$ ✔.`
      ],
      rule: String.raw`$\mathcal{L}[t\,f(t)] = -F'(p)$`,
      pitfall: String.raw`Oublier le signe $-$ de la formule, ou multiplier les transformées de $t$ et de $\sin t$.` },
    { id: 'm10-x-025', level: 1, topic: 'Transformée inverse', sec: 'm10-s-inverse-edo',
      prompt: String.raw`Donne $f(t) = \mathcal{L}^{-1}\left[\dfrac{1}{p+4}\right]$ en fonction de $t$ (pour $t > 0$).`,
      answer: 'exp(-4*t)', vars: ['t'], check: 'expr', domain: [0.2, 3],
      mistakes: [
        { expr: 'exp(4*t)', msg: String.raw`$\frac{1}{p - a} \to \mathrm{e}^{at}$ : ici $a = -4$.` },
        { expr: 'exp(-t/4)', msg: String.raw`Le pôle $-4$ donne $\mathrm{e}^{-4t}$ ; $\mathrm{e}^{-t/4}$ correspondrait à $\frac{1}{p + 1/4}$ (confusion entre pôle et constante de temps).` }
      ],
      hint: String.raw`$\frac{1}{p+a} \leftrightarrow \mathrm{e}^{-at}$.`,
      explain: String.raw`$f(t) = \mathrm{e}^{-4t}$ (pôle $-4$).`,
      steps: [
        String.raw`Rappel : la table se lit dans les deux sens ; $\frac{1}{p + a} \leftrightarrow \mathrm{e}^{-at}$ : un pôle en $p = -a$ donne une exponentielle $\mathrm{e}^{-at}$.`,
        String.raw`$\frac{1}{p + 4}$ a un pôle en $p = -4$, donc $a = 4$.`,
        String.raw`$f(t) = \mathrm{e}^{-4t}$.`,
        String.raw`Vérification : $\mathcal{L}[\mathrm{e}^{-4t}] = \frac{1}{p+4}$ ✔ ; pôle négatif $\Rightarrow$ signal qui décroît vers $0$.`
      ],
      rule: String.raw`$\mathcal{L}^{-1}\left[\frac{1}{p + a}\right] = \mathrm{e}^{-at}$`,
      pitfall: String.raw`Se tromper de signe dans l'exponentielle ($\mathrm{e}^{+4t}$ correspond à $\frac{1}{p - 4}$).` },
    { id: 'm10-x-026', level: 1, topic: 'Transformée inverse', sec: 'm10-s-inverse-edo',
      prompt: String.raw`Donne $f(t) = \mathcal{L}^{-1}\left[\dfrac{1}{p^4}\right]$ en fonction de $t$.`,
      answer: 't^3/6', vars: ['t'], check: 'expr', domain: [0.2, 3],
      mistakes: [
        { expr: 't^3', msg: String.raw`$\mathcal{L}[t^3] = \frac{6}{p^4}$ : il faut diviser par $3! = 6$.` },
        { expr: 't^4/24', msg: String.raw`$\frac{1}{p^{n+1}} \leftrightarrow \frac{t^n}{n!}$ : ici $n + 1 = 4$, donc $n = 3$.` }
      ],
      hint: String.raw`$\mathcal{L}[t^n] = \frac{n!}{p^{n+1}}$.`,
      explain: String.raw`$\frac{1}{p^4} = \frac{1}{3!}\cdot\frac{3!}{p^4}$, donc $f(t) = \frac{t^3}{6}$.`,
      steps: [
        String.raw`Rappel : $\mathcal{L}[t^n] = \frac{n!}{p^{n+1}}$, donc $\mathcal{L}^{-1}\left[\frac{1}{p^{n+1}}\right] = \frac{t^n}{n!}$.`,
        String.raw`$\frac{1}{p^4}$ : $n + 1 = 4$, donc $n = 3$ et $n! = 3! = 6$.`,
        String.raw`On fait apparaître la forme de la table : $\frac{1}{p^4} = \frac16 \times \frac{3!}{p^4}$, d'où $f(t) = \frac{t^3}{6}$.`,
        String.raw`Vérification : $\mathcal{L}\left[\frac{t^3}{6}\right] = \frac16 \times \frac{6}{p^4} = \frac{1}{p^4}$ ✔.`
      ],
      rule: String.raw`$\mathcal{L}^{-1}\left[\frac{1}{p^{n+1}}\right] = \frac{t^n}{n!}$`,
      pitfall: String.raw`Oublier de diviser par $n!$, ou se tromper d'un rang sur $n$.` },
    { id: 'm10-x-027', level: 1, topic: 'Transformée inverse', sec: 'm10-s-inverse-edo',
      prompt: String.raw`Donne $f(t) = \mathcal{L}^{-1}\left[\dfrac{1}{p^2 + 25}\right]$ en fonction de $t$.`,
      answer: 'sin(5*t)/5', vars: ['t'], check: 'expr', domain: [0.2, 3],
      mistakes: [
        { expr: 'sin(5*t)', msg: String.raw`$\mathcal{L}[\sin 5t] = \frac{5}{p^2+25}$ : il faut diviser par $5$.` },
        { expr: 'cos(5*t)', msg: String.raw`Pas de $p$ au numérateur : c'est un sinus.` }
      ],
      hint: String.raw`Fais apparaître $\frac{\omega}{p^2 + \omega^2}$ avec $\omega = 5$.`,
      explain: String.raw`$\frac{1}{p^2 + 25} = \frac15\cdot\frac{5}{p^2 + 5^2}$, donc $f(t) = \frac{\sin(5t)}{5}$.`,
      steps: [
        String.raw`Rappel : $\frac{\omega}{p^2 + \omega^2} \leftrightarrow \sin(\omega t)$ (constante au numérateur) et $\frac{p}{p^2 + \omega^2} \leftrightarrow \cos(\omega t)$ ($p$ au numérateur).`,
        String.raw`$p^2 + 25 = p^2 + 5^2$, donc $\omega = 5$ ; le numérateur ne contient pas $p$ : c'est un sinus.`,
        String.raw`On fait apparaître $\omega = 5$ au numérateur : $\frac{1}{p^2 + 25} = \frac15 \times \frac{5}{p^2 + 5^2}$.`,
        String.raw`$f(t) = \frac{\sin(5t)}{5}$. Vérification : $\mathcal{L}\left[\frac{\sin 5t}{5}\right] = \frac15 \times \frac{5}{p^2 + 25} = \frac{1}{p^2+25}$ ✔.`
      ],
      rule: String.raw`$\mathcal{L}^{-1}\left[\frac{1}{p^2 + \omega^2}\right] = \frac{\sin(\omega t)}{\omega}$`,
      pitfall: String.raw`Oublier le facteur $\frac{1}{\omega}$.` },
    { id: 'm10-x-028', level: 2, topic: 'Éléments simples', sec: 'm10-s-inverse-edo',
      prompt: String.raw`Donne $f(t) = \mathcal{L}^{-1}\left[\dfrac{1}{p(p+2)}\right]$ en fonction de $t$.`,
      answer: '(1-exp(-2*t))/2', vars: ['t'], check: 'expr', domain: [0.2, 3],
      mistakes: [
        { expr: '1-exp(-2*t)', msg: String.raw`Les coefficients valent $\frac12$ : $\frac{1}{p(p+2)} = \frac{1/2}{p} - \frac{1/2}{p+2}$.` },
        { expr: 'exp(-2*t)', msg: String.raw`Il y a deux pôles ($0$ et $-2$) : décompose en éléments simples.` }
      ],
      hint: String.raw`$\frac{1}{p(p+2)} = \frac{A}{p} + \frac{B}{p+2}$ ; méthode du cache.`,
      explain: String.raw`$A = \frac{1}{0 + 2} = \frac12$, $B = \frac{1}{-2} = -\frac12$, donc $f(t) = \frac12 - \frac12\mathrm{e}^{-2t} = \frac{1 - \mathrm{e}^{-2t}}{2}$.`,
      steps: [
        String.raw`Rappel : pour inverser une fraction à pôles simples, on la décompose en <b>éléments simples</b> $\frac{A}{p - a}$ ; méthode du « cache » : $A = \big[(p - a)F(p)\big]_{p = a}$. Puis $\frac{1}{p - a} \leftrightarrow \mathrm{e}^{at}$.`,
        String.raw`$\frac{1}{p(p+2)} = \frac{A}{p} + \frac{B}{p+2}$. Pour $A$ : on cache $p$ et on pose $p = 0$, $A = \frac{1}{0 + 2} = \frac12$. Pour $B$ : on cache $p + 2$ et on pose $p = -2$, $B = \frac{1}{-2} = -\frac12$.`,
        String.raw`Donc $F(p) = \frac{1/2}{p} - \frac{1/2}{p + 2}$.`,
        String.raw`Inverse terme à terme : $\frac1p \to 1$, $\frac{1}{p+2} \to \mathrm{e}^{-2t}$, d'où $f(t) = \frac12 - \frac12\mathrm{e}^{-2t} = \frac{1 - \mathrm{e}^{-2t}}{2}$.`,
        String.raw`Vérification : $f(0) = 0$ et $f(+\infty) = \frac12 = \lim_{p\to0} pF(p) = \lim_{p\to0}\frac{1}{p+2}$ ✔.`
      ],
      rule: String.raw`Cache : $A = \big[(p - a)F(p)\big]_{p = a}$, puis $\frac{A}{p - a} \to A\,\mathrm{e}^{at}$`,
      pitfall: String.raw`Oublier les coefficients $\pm\frac12$ de la décomposition.` },
    { id: 'm10-x-029', level: 2, topic: 'Éléments simples', sec: 'm10-s-inverse-edo',
      prompt: String.raw`Donne $f(t) = \mathcal{L}^{-1}\left[\dfrac{p+3}{(p+1)(p+2)}\right]$ en fonction de $t$.`,
      answer: '2*exp(-t)-exp(-2*t)', vars: ['t'], check: 'expr', domain: [0.2, 3],
      mistakes: [
        { expr: '2*exp(-t)+exp(-2*t)', msg: String.raw`$B = \frac{-2 + 3}{-2 + 1} = -1$ : attention au signe du dénominateur.` },
        { expr: 'exp(-t)-exp(-2*t)', msg: String.raw`$A = \left[\frac{p+3}{p+2}\right]_{p=-1} = \frac{2}{1} = 2$.` }
      ],
      hint: String.raw`$\frac{A}{p+1} + \frac{B}{p+2}$ avec $A = \left[\frac{p+3}{p+2}\right]_{p=-1}$, $B = \left[\frac{p+3}{p+1}\right]_{p=-2}$.`,
      explain: String.raw`$A = 2$, $B = -1$ : $F = \frac{2}{p+1} - \frac{1}{p+2}$, donc $f(t) = 2\mathrm{e}^{-t} - \mathrm{e}^{-2t}$.`,
      steps: [
        String.raw`Rappel : on décompose $F(p) = \frac{A}{p+1} + \frac{B}{p+2}$, avec la méthode du cache : $A = \big[(p+1)F(p)\big]_{p=-1}$, $B = \big[(p+2)F(p)\big]_{p=-2}$.`,
        String.raw`$A = \left[\frac{p+3}{p+2}\right]_{p=-1} = \frac{-1 + 3}{-1 + 2} = \frac21 = 2$.`,
        String.raw`$B = \left[\frac{p+3}{p+1}\right]_{p=-2} = \frac{-2 + 3}{-2 + 1} = \frac{1}{-1} = -1$.`,
        String.raw`$F(p) = \frac{2}{p+1} - \frac{1}{p+2}$, donc $f(t) = 2\mathrm{e}^{-t} - \mathrm{e}^{-2t}$.`,
        String.raw`Vérification (valeur initiale) : $f(0) = 2 - 1 = 1$ et $\lim_{p\to+\infty} pF(p) = \lim \frac{p(p+3)}{(p+1)(p+2)} = 1$ ✔.`
      ],
      rule: String.raw`Pôle simple $a$ : coefficient $\big[(p - a)F(p)\big]_{p = a}$, terme $A\,\mathrm{e}^{at}$`,
      pitfall: String.raw`Erreur de signe sur le dénominateur $-2 + 1 = -1$.` },
    { id: 'm10-x-030', level: 2, topic: 'Pôle double', sec: 'm10-s-inverse-edo',
      prompt: String.raw`Donne $f(t) = \mathcal{L}^{-1}\left[\dfrac{1}{(p+2)^2}\right]$ en fonction de $t$.`,
      answer: 't*exp(-2*t)', vars: ['t'], check: 'expr', domain: [0.2, 3],
      mistakes: [
        { expr: 'exp(-2*t)', msg: String.raw`C'est un pôle <b>double</b> : il apparaît un facteur $t$.` },
        { expr: 'exp(-4*t)', msg: String.raw`Le carré de $F$ ne correspond pas au carré de $f$.` }
      ],
      hint: String.raw`$\mathcal{L}[t] = \frac{1}{p^2}$, puis amortissement.`,
      explain: String.raw`$\frac{1}{p^2} \leftrightarrow t$, et $p \to p + 2$ correspond à multiplier par $\mathrm{e}^{-2t}$ : $f(t) = t\,\mathrm{e}^{-2t}$.`,
      steps: [
        String.raw`Rappel : un <b>pôle double</b> fait apparaître un facteur $t$ : $\mathcal{L}^{-1}\left[\frac{1}{(p + a)^2}\right] = t\,\mathrm{e}^{-at}$ (amortissement appliqué à $\mathcal{L}[t] = \frac{1}{p^2}$).`,
        String.raw`On part de $\mathcal{L}[t] = \frac{1}{p^2}$.`,
        String.raw`Amortissement avec $a = 2$ : $\mathcal{L}[t\,\mathrm{e}^{-2t}] = \frac{1}{(p+2)^2}$, donc $f(t) = t\,\mathrm{e}^{-2t}$.`,
        String.raw`Vérification (valeur initiale) : $\frac{p}{(p+2)^2} \to 0 = f(0)$ ✔.`
      ],
      rule: String.raw`$\mathcal{L}^{-1}\left[\frac{1}{(p+a)^2}\right] = t\,\mathrm{e}^{-at}$`,
      pitfall: String.raw`Traiter le pôle double comme un pôle simple (oubli du facteur $t$).` },
    { id: 'm10-x-031', level: 3, topic: 'Sinus amorti', sec: 'm10-s-inverse-edo',
      prompt: String.raw`Donne $f(t) = \mathcal{L}^{-1}\left[\dfrac{1}{p^2 + 2p + 5}\right]$ en fonction de $t$.`,
      answer: 'exp(-t)*sin(2*t)/2', vars: ['t'], check: 'expr', domain: [0.2, 3],
      mistakes: [
        { expr: 'exp(-t)*sin(2*t)', msg: String.raw`Il faut $\omega = 2$ au numérateur : $\frac{1}{(p+1)^2 + 4} = \frac12\cdot\frac{2}{(p+1)^2 + 4}$.` },
        { expr: 'exp(-t)*cos(2*t)', msg: String.raw`Le numérateur ne contient pas $p + 1$ : c'est un sinus amorti.` },
        { expr: 'sin(2*t)/2', msg: String.raw`Le décalage $p \to p + 1$ correspond au facteur $\mathrm{e}^{-t}$.` }
      ],
      hint: String.raw`Forme canonique : $p^2 + 2p + 5 = (p+1)^2 + 4$.`,
      explain: String.raw`$\frac{1}{(p+1)^2 + 2^2} = \frac12\cdot\frac{2}{(p+1)^2 + 2^2}$, donc $f(t) = \frac12\mathrm{e}^{-t}\sin(2t)$.`,
      steps: [
        String.raw`Rappel : si le dénominateur n'a pas de racine réelle, on le met sous forme canonique $(p + a)^2 + \omega^2$ et on utilise $\frac{\omega}{(p + a)^2 + \omega^2} \leftrightarrow \mathrm{e}^{-at}\sin(\omega t)$.`,
        String.raw`Forme canonique : $p^2 + 2p + 5 = (p + 1)^2 - 1 + 5 = (p + 1)^2 + 4 = (p + 1)^2 + 2^2$ (discriminant $4 - 20 \lt 0$).`,
        String.raw`On fait apparaître $\omega = 2$ au numérateur : $\frac{1}{(p+1)^2 + 2^2} = \frac12 \times \frac{2}{(p+1)^2 + 2^2}$.`,
        String.raw`$\frac{2}{p^2 + 4} \leftrightarrow \sin(2t)$, et le décalage $p \to p + 1$ ajoute le facteur $\mathrm{e}^{-t}$ : $f(t) = \frac12\mathrm{e}^{-t}\sin(2t)$.`,
        String.raw`Vérification (valeur initiale) : $\frac{p}{p^2 + 2p + 5} \to 0 = f(0)$ ✔.`
      ],
      rule: String.raw`$\mathcal{L}^{-1}\left[\frac{\omega}{(p+a)^2 + \omega^2}\right] = \mathrm{e}^{-at}\sin(\omega t)$`,
      pitfall: String.raw`Oublier le facteur $\frac{1}{\omega}$ ou le facteur d'amortissement $\mathrm{e}^{-t}$.` },
    { id: 'm10-x-032', level: 1, topic: 'EDO par Laplace', sec: 'm10-s-inverse-edo',
      prompt: String.raw`Résous par Laplace $y' + 2y = 0$ avec $y(0) = 3$. Donne $y(t)$.`,
      answer: '3*exp(-2*t)', vars: ['t'], check: 'expr', domain: [0.2, 3],
      mistakes: [
        { expr: '3*exp(2*t)', msg: String.raw`$Y(p) = \frac{3}{p+2}$ : pôle $-2$, donc $\mathrm{e}^{-2t}$.` },
        { expr: 'exp(-2*t)', msg: String.raw`Tu as oublié la condition initiale $y(0) = 3$.` }
      ],
      hint: String.raw`$\mathcal{L}[y'] = pY - y(0)$.`,
      explain: String.raw`$pY - 3 + 2Y = 0 \Rightarrow Y = \frac{3}{p+2} \Rightarrow y(t) = 3\mathrm{e}^{-2t}$.`,
      steps: [
        String.raw`Rappel : méthode de Laplace pour une EDO — 1) transformer chaque terme ($\mathcal{L}[y'] = pY - y(0)$) ; 2) résoudre l'équation algébrique en $Y$ ; 3) revenir à $y(t)$ par la table.`,
        String.raw`Transformation : $\big(pY - 3\big) + 2Y = 0$.`,
        String.raw`On isole $Y$ : $(p + 2)Y = 3$, donc $Y = \frac{3}{p + 2}$.`,
        String.raw`Inverse : $y(t) = 3\mathrm{e}^{-2t}$.`,
        String.raw`Vérification : $y' = -6\mathrm{e}^{-2t}$, donc $y' + 2y = -6\mathrm{e}^{-2t} + 6\mathrm{e}^{-2t} = 0$ ✔ et $y(0) = 3$ ✔.`
      ],
      rule: String.raw`$\mathcal{L}[y'] = pY - y(0)$ : la condition initiale entre directement dans l'équation`,
      pitfall: String.raw`Oublier la condition initiale $y(0) = 3$ dans $\mathcal{L}[y']$.` },
    { id: 'm10-x-033', level: 2, topic: 'EDO par Laplace', sec: 'm10-s-inverse-edo',
      prompt: String.raw`Résous par Laplace $y' + y = 1$ (pour $t \geq 0$) avec $y(0) = 0$. Donne $y(t)$.`,
      answer: '1-exp(-t)', vars: ['t'], check: 'expr', domain: [0.2, 3],
      mistakes: [
        { expr: 'exp(-t)', msg: String.raw`Avec $y(0) = 0$, la solution part de $0$ et tend vers $1$.` },
        { expr: '1+exp(-t)', msg: String.raw`$\frac{1}{p(p+1)} = \frac1p - \frac{1}{p+1}$ : signe moins.` }
      ],
      hint: String.raw`Le second membre $1$ a pour transformée $\frac1p$.`,
      explain: String.raw`$pY + Y = \frac1p \Rightarrow Y = \frac{1}{p(p+1)} = \frac1p - \frac{1}{p+1} \Rightarrow y(t) = 1 - \mathrm{e}^{-t}$ (réponse indicielle d'un premier ordre de constante de temps $1$).`,
      steps: [
        String.raw`Rappel : on transforme l'EDO ($\mathcal{L}[y'] = pY - y(0)$, $\mathcal{L}[1] = \frac1p$), on résout en $Y$, puis on inverse après décomposition en éléments simples.`,
        String.raw`Transformation : $(pY - 0) + Y = \frac1p$, donc $(p + 1)Y = \frac1p$ et $Y = \frac{1}{p(p+1)}$.`,
        String.raw`Cache : coefficient de $\frac1p$ : $\frac{1}{0 + 1} = 1$ ; coefficient de $\frac{1}{p+1}$ : $\frac{1}{-1} = -1$. Donc $Y = \frac1p - \frac{1}{p+1}$.`,
        String.raw`Inverse : $y(t) = 1 - \mathrm{e}^{-t}$.`,
        String.raw`Vérification : $y' = \mathrm{e}^{-t}$, $y' + y = \mathrm{e}^{-t} + 1 - \mathrm{e}^{-t} = 1$ ✔ et $y(0) = 0$ ✔ (réponse indicielle d'un premier ordre, $\tau = 1$).`
      ],
      rule: String.raw`$\frac{1}{p(p+a)} = \frac1a\left(\frac1p - \frac{1}{p+a}\right)$`,
      pitfall: String.raw`Oublier de transformer le second membre $1$ en $\frac1p$.` },
    { id: 'm10-x-034', level: 3, topic: 'EDO par Laplace', sec: 'm10-s-inverse-edo',
      prompt: String.raw`Résous par Laplace $y'' + 3y' + 2y = 0$ avec $y(0) = 0$ et $y'(0) = 1$. Donne $y(t)$.`,
      answer: 'exp(-t)-exp(-2*t)', vars: ['t'], check: 'expr', domain: [0.2, 3],
      mistakes: [
        { expr: 'exp(-2*t)-exp(-t)', msg: String.raw`Signe : $\frac{1}{(p+1)(p+2)} = \frac{1}{p+1} - \frac{1}{p+2}$ (et $y'(0) = 1 > 0$, donc $y$ croît au départ).` },
        { expr: 'exp(-t)+exp(-2*t)', msg: String.raw`Avec $y(0) = 0$, les deux coefficients doivent être opposés.` }
      ],
      hint: String.raw`$\mathcal{L}[y''] = p^2Y - py(0) - y'(0)$, puis factorise $p^2 + 3p + 2$.`,
      explain: String.raw`$(p^2Y - 1) + 3pY + 2Y = 0 \Rightarrow Y = \frac{1}{(p+1)(p+2)} = \frac{1}{p+1} - \frac{1}{p+2} \Rightarrow y(t) = \mathrm{e}^{-t} - \mathrm{e}^{-2t}$.`,
      steps: [
        String.raw`Rappel : $\mathcal{L}[y''] = p^2Y - p\,y(0) - y'(0)$ et $\mathcal{L}[y'] = pY - y(0)$ : les deux conditions initiales entrent dans le calcul.`,
        String.raw`Avec $y(0) = 0$ et $y'(0) = 1$ : $(p^2Y - 1) + 3pY + 2Y = 0$, donc $(p^2 + 3p + 2)Y = 1$.`,
        String.raw`On factorise : $p^2 + 3p + 2 = (p + 1)(p + 2)$ (racines $-1$ et $-2$), donc $Y = \frac{1}{(p+1)(p+2)}$.`,
        String.raw`Cache : $\frac{1}{-1 + 2} = 1$ pour $\frac{1}{p+1}$ et $\frac{1}{-2 + 1} = -1$ pour $\frac{1}{p+2}$, donc $Y = \frac{1}{p+1} - \frac{1}{p+2}$ et $y(t) = \mathrm{e}^{-t} - \mathrm{e}^{-2t}$.`,
        String.raw`Vérification : $y(0) = 1 - 1 = 0$ ✔ ; $y' = -\mathrm{e}^{-t} + 2\mathrm{e}^{-2t}$, $y'(0) = 1$ ✔.`
      ],
      rule: String.raw`$\mathcal{L}[y''] = p^2Y - p\,y(0) - y'(0)$`,
      pitfall: String.raw`Oublier le terme $-y'(0)$ dans $\mathcal{L}[y'']$, ou se tromper de signe dans les éléments simples.` },
    { id: 'm10-x-035', level: 3, topic: 'EDO par Laplace', sec: 'm10-s-inverse-edo',
      prompt: String.raw`Résous par Laplace $y' + 3y = \mathrm{e}^{-t}$ avec $y(0) = 1$. Donne $y(t)$.`,
      answer: '(exp(-t)+exp(-3*t))/2', vars: ['t'], check: 'expr', domain: [0.2, 3],
      mistakes: [
        { expr: '(exp(-t)-exp(-3*t))/2', msg: String.raw`Tu as oublié la condition initiale : $\mathcal{L}[y'] = pY - 1$ ajoute un terme $\frac{1}{p+3}$.` },
        { expr: 'exp(-3*t)', msg: String.raw`C'est la solution sans second membre ; il faut ajouter la réponse au terme $\mathrm{e}^{-t}$.` }
      ],
      hint: String.raw`$pY - 1 + 3Y = \frac{1}{p+1}$, donc $Y = \frac{1}{p+3} + \frac{1}{(p+1)(p+3)}$.`,
      explain: String.raw`$\frac{1}{(p+1)(p+3)} = \frac12\left(\frac{1}{p+1} - \frac{1}{p+3}\right)$, donc $Y = \frac{1/2}{p+1} + \frac{1/2}{p+3}$ et $y(t) = \frac{\mathrm{e}^{-t} + \mathrm{e}^{-3t}}{2}$. Vérification : $y(0) = 1$.`,
      steps: [
        String.raw`Rappel : on transforme l'EDO en n'oubliant ni la condition initiale ($\mathcal{L}[y'] = pY - y(0)$) ni le second membre ($\mathcal{L}[\mathrm{e}^{-t}] = \frac{1}{p+1}$).`,
        String.raw`Transformation : $pY - 1 + 3Y = \frac{1}{p+1}$, donc $(p + 3)Y = 1 + \frac{1}{p+1}$ et $Y = \frac{1}{p+3} + \frac{1}{(p+1)(p+3)}$.`,
        String.raw`Cache : $\frac{1}{(p+1)(p+3)} = \frac{1/2}{p+1} - \frac{1/2}{p+3}$ (coefficients $\frac{1}{-1+3}$ et $\frac{1}{-3+1}$).`,
        String.raw`On regroupe : $Y = \frac{1/2}{p+1} + \frac{1 - 1/2}{p+3} = \frac{1/2}{p+1} + \frac{1/2}{p+3}$, donc $y(t) = \frac{\mathrm{e}^{-t} + \mathrm{e}^{-3t}}{2}$.`,
        String.raw`Vérification : $y(0) = 1$ ✔ ; $y' + 3y = \frac{-\mathrm{e}^{-t} - 3\mathrm{e}^{-3t} + 3\mathrm{e}^{-t} + 3\mathrm{e}^{-3t}}{2} = \mathrm{e}^{-t}$ ✔.`
      ],
      rule: String.raw`Solution $=$ réponse à la condition initiale $+$ réponse au second membre`,
      pitfall: String.raw`Oublier l'un des deux termes : la condition initiale ou le second membre.` },
    { id: 'm10-x-036', level: 2, topic: 'Réponse indicielle', sec: 'm10-s-inverse-edo',
      prompt: String.raw`Un système de fonction de transfert $H(p) = \dfrac{5}{1 + 2p}$ reçoit un échelon unité $e(t) = u(t)$. Donne la sortie $s(t)$ pour $t \geq 0$.`,
      answer: '5*(1-exp(-t/2))', vars: ['t'], check: 'expr', domain: [0.2, 3],
      mistakes: [
        { expr: '5*(1-exp(-2*t))', msg: String.raw`La constante de temps est $\tau = 2$ : le pôle est $-\frac{1}{\tau} = -\frac12$, d'où $\mathrm{e}^{-t/2}$.` },
        { expr: '5*exp(-t/2)', msg: String.raw`C'est la réponse impulsionnelle (à un facteur près) ; la réponse indicielle part de $0$ et tend vers $K = 5$.` }
      ],
      hint: String.raw`$S(p) = \frac{5}{p(1 + 2p)}$ ; premier ordre $K = 5$, $\tau = 2$.`,
      explain: String.raw`$s(t) = KE_0\left(1 - \mathrm{e}^{-t/\tau}\right) = 5\left(1 - \mathrm{e}^{-t/2}\right)$.`,
      steps: [
        String.raw`Rappel : la sortie vérifie $S(p) = H(p)\,E(p)$ ; pour un échelon unité $E(p) = \frac1p$. Un premier ordre $\frac{K}{1 + \tau p}$ répond $K\left(1 - \mathrm{e}^{-t/\tau}\right)$.`,
        String.raw`$S(p) = \frac{5}{p(1 + 2p)} = \frac{5/2}{p\left(p + \frac12\right)}$ (on factorise $1 + 2p = 2\left(p + \frac12\right)$).`,
        String.raw`Cache : en $p = 0$, $\frac{5/2}{1/2} = 5$ ; en $p = -\frac12$, $\frac{5/2}{-1/2} = -5$. Donc $S(p) = \frac5p - \frac{5}{p + \frac12}$.`,
        String.raw`Inverse : $s(t) = 5 - 5\mathrm{e}^{-t/2} = 5\left(1 - \mathrm{e}^{-t/2}\right)$.`,
        String.raw`Vérification : forme $K\left(1 - \mathrm{e}^{-t/\tau}\right)$ avec $K = 5$ et $\tau = 2$ ✔ ; valeur finale $\lim_{p\to0} pS = 5$ ✔.`
      ],
      rule: String.raw`$H = \frac{K}{1 + \tau p}$, échelon unité : $s(t) = K\left(1 - \mathrm{e}^{-t/\tau}\right)$`,
      pitfall: String.raw`Confondre $\tau = 2$ et le pôle $-\frac{1}{\tau} = -\frac12$ : l'exponentielle est $\mathrm{e}^{-t/2}$, pas $\mathrm{e}^{-2t}$.` },
    { id: 'm10-x-037', level: 2, topic: 'Théorème de la valeur finale', sec: 'm10-s-laplace-prop',
      prompt: String.raw`$F(p) = \dfrac{3}{p(p+2)}$. Donne $\lim\limits_{t\to+\infty} f(t)$.`,
      answer: '3/2', vars: [], check: 'value',
      mistakes: [
        { expr: '0', msg: String.raw`C'est la valeur initiale ($p \to +\infty$) ; la valeur finale s'obtient avec $p \to 0$.` },
        { expr: '3', msg: String.raw`Tu as oublié le $+2$ du dénominateur : $pF(p) = \frac{3}{p+2} \to \frac32$ quand $p \to 0$ (et non $3$).` }
      ],
      hint: String.raw`Valeur finale : $\lim_{p\to0} pF(p)$ (pôles de $pF$ : $-2$, à gauche).`,
      explain: String.raw`$pF(p) = \frac{3}{p+2} \to \frac32$ quand $p \to 0$. (En effet $f(t) = \frac32(1 - \mathrm{e}^{-2t})$.)`,
      steps: [
        String.raw`Rappel : <b>valeur finale</b> — $\lim_{t\to+\infty} f(t) = \lim_{p\to0} pF(p)$, valable si tous les pôles de $pF(p)$ sont à partie réelle strictement négative.`,
        String.raw`$pF(p) = \frac{3p}{p(p+2)} = \frac{3}{p+2}$ : seul pôle $-2 \lt 0$, le théorème s'applique.`,
        String.raw`Limite : $\frac{3}{0 + 2} = \frac32$.`,
        String.raw`Vérification : $F = \frac{3/2}{p} - \frac{3/2}{p+2}$, donc $f(t) = \frac32\left(1 - \mathrm{e}^{-2t}\right) \to \frac32$ ✔.`
      ],
      rule: String.raw`$\lim_{t\to+\infty} f = \lim_{p\to0} pF(p)$ (pôles de $pF$ à gauche)`,
      pitfall: String.raw`Faire $p \to +\infty$ (c'est la valeur initiale) ou oublier de multiplier par $p$.` },
    { id: 'm10-x-038', level: 2, topic: 'Théorème de la valeur initiale', sec: 'm10-s-laplace-prop',
      prompt: String.raw`$F(p) = \dfrac{2p+1}{p^2 + 3p + 2}$. Donne $f(0^+)$.`,
      answer: '2', vars: [], check: 'value',
      mistakes: [
        { expr: '1/2', msg: String.raw`$F(0) = \frac12$ n'est pas $f(0^+)$ : utilise $\lim_{p\to+\infty} pF(p)$.` },
        { expr: '0', msg: String.raw`$\lim_{p\to0} pF(p) = 0$ est la valeur <b>finale</b>.` }
      ],
      hint: String.raw`Valeur initiale : $\lim_{p\to+\infty} pF(p)$.`,
      explain: String.raw`$pF(p) = \frac{2p^2 + p}{p^2 + 3p + 2} \to 2$ quand $p \to +\infty$. (En effet $f(t) = 3\mathrm{e}^{-2t} - \mathrm{e}^{-t}$, et $f(0) = 2$.)`,
      steps: [
        String.raw`Rappel : <b>valeur initiale</b> — $f(0^+) = \lim_{p\to+\infty} pF(p)$ (temps court $\leftrightarrow$ $p$ grand).`,
        String.raw`$pF(p) = \frac{2p^2 + p}{p^2 + 3p + 2}$.`,
        String.raw`On divise haut et bas par $p^2$ : $\frac{2 + \frac1p}{1 + \frac3p + \frac{2}{p^2}} \to \frac{2}{1} = 2$ quand $p \to +\infty$.`,
        String.raw`Vérification : par le cache, $F = -\frac{1}{p+1} + \frac{3}{p+2}$, donc $f(t) = 3\mathrm{e}^{-2t} - \mathrm{e}^{-t}$ et $f(0) = 3 - 1 = 2$ ✔.`
      ],
      rule: String.raw`$f(0^+) = \lim_{p\to+\infty} pF(p)$`,
      pitfall: String.raw`Calculer $F(0)$ ou $\lim_{p\to0} pF(p)$, qui concernent l'aire et la valeur finale.` },
    { id: 'm10-x-039', level: 2, topic: 'Forme canonique du 1er ordre', sec: 'm10-s-inverse-edo',
      prompt: String.raw`$H(p) = \dfrac{3}{2 + 6p}$. Donne sa constante de temps $\tau$.`,
      answer: '3', vars: [], check: 'value',
      mistakes: [
        { expr: '6', msg: String.raw`Mets d'abord sous forme canonique $\frac{K}{1 + \tau p}$ : divise par $2$.` },
        { expr: '3/2', msg: String.raw`$\frac32$ est le gain statique $K$, pas la constante de temps.` }
      ],
      hint: String.raw`Divise numérateur et dénominateur par $2$.`,
      explain: String.raw`$H(p) = \frac{1{,}5}{1 + 3p}$ : $K = 1{,}5$ et $\tau = 3$.`,
      steps: [
        String.raw`Rappel : la forme canonique d'un premier ordre est $H(p) = \frac{K}{1 + \tau p}$, avec un dénominateur qui <b>commence par $1$</b> ; $\tau$ est alors le coefficient de $p$.`,
        String.raw`On divise numérateur et dénominateur par $2$ : $\frac{3}{2 + 6p} = \frac{3/2}{1 + 3p}$.`,
        String.raw`Identification : $K = \frac32$ et $\tau = 3$.`,
        String.raw`Vérification : le pôle vaut $-\frac{1}{\tau}$ ; or $2 + 6p = 0 \iff p = -\frac13$ ✔.`
      ],
      rule: String.raw`$H(p) = \frac{K}{1 + \tau p}$ : pôle $-\frac{1}{\tau}$, gain statique $K = H(0)$`,
      pitfall: String.raw`Lire $\tau = 6$ sans avoir ramené le terme constant du dénominateur à $1$.` },
    { id: 'm10-x-040', level: 1, topic: 'Valeur finale d\'un système', sec: 'm10-s-inverse-edo',
      prompt: String.raw`Le système $H(p) = \dfrac{4}{1 + 0{,}5p}$ reçoit un échelon d'amplitude $2$. Quelle est la valeur finale de la sortie ?`,
      answer: '8', vars: [], check: 'value',
      mistakes: [
        { expr: '4', msg: String.raw`$K = 4$ est le gain statique ; il faut le multiplier par l'amplitude de l'échelon.` },
        { expr: '1', msg: String.raw`$1$ ne correspond à aucun calcul correct : la valeur finale vaut $\lim_{p\to0} p \times \frac{4}{1 + 0{,}5p} \times \frac{2}{p} = 2H(0) = 2 \times 4 = 8$.` }
      ],
      hint: String.raw`$S(p) = H(p)\cdot\frac{2}{p}$, puis $\lim_{p\to0} pS(p)$.`,
      explain: String.raw`$\lim_{p\to0} pS(p) = 2H(0) = 2 \times 4 = 8$.`,
      steps: [
        String.raw`Rappel : un échelon d'amplitude $E_0$ a pour transformée $\frac{E_0}{p}$ ; la sortie est $S(p) = H(p)E(p)$ et sa valeur finale $\lim_{p\to0} pS(p)$.`,
        String.raw`$S(p) = \frac{4}{1 + 0{,}5p} \times \frac{2}{p}$, donc $pS(p) = \frac{8}{1 + 0{,}5p}$ (pôle $-2 \lt 0$ : le théorème s'applique).`,
        String.raw`Quand $p \to 0$ : $pS(p) \to 8$.`,
        String.raw`Interprétation : valeur finale $=$ gain statique $\times$ amplitude de l'échelon $= K E_0 = 4 \times 2 = 8$.`
      ],
      rule: String.raw`Système stable, échelon d'amplitude $E_0$ : $s(+\infty) = H(0)\,E_0$`,
      pitfall: String.raw`Oublier de multiplier le gain statique par l'amplitude de l'échelon.` }
  ]
});
