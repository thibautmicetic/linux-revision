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
    { id: 'm10-q-001', level: 1,
      q: String.raw`Un signal a pour période $T = 20$ ms. Sa fréquence vaut :`,
      choices: [String.raw`$50$ Hz`, String.raw`$20$ Hz`, String.raw`$0{,}05$ Hz`, String.raw`$314$ Hz`], answer: 0,
      explain: String.raw`$f = \frac{1}{T} = \frac{1}{0{,}02\ \text{s}} = 50$ Hz.`,
      why: { 1: String.raw`La fréquence est l'inverse de la période, pas la période en ms.`, 2: String.raw`Tu as calculé $\frac{1}{20}$ avec $T$ en millisecondes : il faut convertir en secondes.`, 3: String.raw`$314 \approx 100\pi$ rad/s est la pulsation $\omega$, pas la fréquence.` } },
    { id: 'm10-q-002', level: 1,
      q: String.raw`Quelle est la pulsation d'un signal de fréquence $50$ Hz ?`,
      choices: [String.raw`$50$ rad/s`, String.raw`$100\pi$ rad/s`, String.raw`$\frac{\pi}{25}$ rad/s`, String.raw`$50\pi$ rad/s`], answer: 1,
      explain: String.raw`$\omega = 2\pi f = 100\pi \approx 314$ rad/s.`,
      why: { 0: String.raw`$\omega \neq f$ : il faut multiplier par $2\pi$.`, 2: String.raw`$\frac{2\pi}{50} = 2\pi T$ : tu as multiplié par la période au lieu de diviser.`, 3: String.raw`Il manque le facteur $2$ : $\omega = 2\pi f$.` } },
    { id: 'm10-q-003', level: 1,
      q: String.raw`Dans l'écriture $S(t) = a_0 + \sum_{n\geq1}\big(a_n\cos(n\omega t) + b_n\sin(n\omega t)\big)$, le coefficient $a_0$ représente :`,
      choices: [String.raw`la valeur efficace`, String.raw`l'amplitude du fondamental`, String.raw`la valeur moyenne`, String.raw`la valeur maximale`], answer: 2,
      explain: String.raw`$a_0 = \frac1T\int_0^T f$ : c'est la composante continue, la valeur moyenne.`,
      why: { 0: String.raw`La valeur efficace fait intervenir $f^2$ (Parseval).`, 1: String.raw`L'amplitude du fondamental est $A_1 = \sqrt{a_1^2 + b_1^2}$.`, 3: String.raw`Aucun coefficient ne donne directement le maximum.` } },
    { id: 'm10-q-004', level: 1,
      q: String.raw`Si $f$ est <b>paire</b>, alors :`,
      choices: [String.raw`$a_n = 0$ pour tout $n \geq 1$`, String.raw`$b_n = 0$ pour tout $n \geq 1$`, String.raw`$a_0 = 0$`, String.raw`$c_n = 0$ pour tout $n$`], answer: 1,
      explain: String.raw`$f(t)\sin(n\omega t)$ est impaire, son intégrale sur une période centrée est nulle : $b_n = 0$. Il ne reste que des cosinus.`,
      why: { 0: String.raw`C'est le cas d'une fonction <b>impaire</b>.`, 2: String.raw`Une fonction paire peut avoir une moyenne non nulle (ex. $|t|$).`, 3: String.raw`Les $c_n$ sont réels (pas nuls) pour $f$ paire.` } },
    { id: 'm10-q-005', level: 1,
      q: String.raw`Si $f$ est <b>impaire</b>, sa série de Fourier ne contient que :`,
      choices: [String.raw`des cosinus`, String.raw`des sinus`, String.raw`une constante et des cosinus`], answer: 1,
      explain: String.raw`$a_n = 0$ (et $a_0 = 0$) pour une fonction impaire : la série est une somme de sinus (impairs).`,
      why: { 0: String.raw`Les cosinus sont pairs : ils correspondent à une fonction paire.`, 2: String.raw`Une fonction impaire est de moyenne nulle, et sans cosinus.` } },
    { id: 'm10-q-006', level: 2,
      q: String.raw`Le créneau $2\pi$-périodique valant $1$ sur $]0,\pi[$ et $-1$ sur $]-\pi, 0[$ a pour série de Fourier :`,
      choices: [String.raw`$\dfrac{4}{\pi}\sum_{k\geq0}\dfrac{\sin\big((2k+1)t\big)}{2k+1}$`, String.raw`$\dfrac{4}{\pi}\sum_{n\geq1}\dfrac{\sin(nt)}{n}$`, String.raw`$\dfrac{4}{\pi}\sum_{k\geq0}\dfrac{\cos\big((2k+1)t\big)}{(2k+1)^2}$`, String.raw`$2\sum_{n\geq1}\dfrac{(-1)^{n+1}\sin(nt)}{n}$`], answer: 0,
      explain: String.raw`$b_n = \frac{2(1 - (-1)^n)}{n\pi}$ : $\frac{4}{n\pi}$ pour $n$ impair, $0$ pour $n$ pair.`,
      why: { 1: String.raw`Les harmoniques pairs sont nuls : $1 - (-1)^n = 0$ pour $n$ pair.`, 2: String.raw`C'est la forme du triangle (pair, cosinus, coefficients en $\frac{1}{n^2}$).`, 3: String.raw`C'est la dent de scie $f(t) = t$.` } },
    { id: 'm10-q-007', level: 2,
      q: String.raw`Les coefficients de Fourier d'un signal <b>triangulaire</b> (continu, à dérivée discontinue) décroissent comme :`,
      choices: [String.raw`$\frac1n$`, String.raw`$\frac{1}{n^2}$`, String.raw`$\frac{1}{n^3}$`, String.raw`$\frac{1}{2^n}$`], answer: 1,
      explain: String.raw`Une intégration par parties de plus que pour le créneau : $a_n = -\frac{4}{\pi n^2}$ ($n$ impair).`,
      why: { 0: String.raw`$\frac1n$ correspond à un signal <b>discontinu</b> (créneau, dent de scie).`, 2: String.raw`Il faudrait que la dérivée soit continue aussi.`, 3: String.raw`Une décroissance exponentielle correspond à un signal très régulier (analytique).` } },
    { id: 'm10-q-008', level: 2,
      q: String.raw`$f$ est $C^1$ par morceaux et présente un saut en $t_0$ : $f(t_0^-) = -1$ et $f(t_0^+) = 3$. En $t_0$, sa série de Fourier converge vers :`,
      choices: [String.raw`$3$`, String.raw`$-1$`, String.raw`$1$`, String.raw`$2$`], answer: 2,
      explain: String.raw`Dirichlet : $\frac{f(t_0^+) + f(t_0^-)}{2} = \frac{3 - 1}{2} = 1$.`,
      why: { 0: String.raw`C'est la limite à droite ; la série « hésite » et prend la moyenne.`, 1: String.raw`C'est la limite à gauche.`, 3: String.raw`$2$ est la moitié de la hauteur du saut, pas la demi-somme des limites.` } },
    { id: 'm10-q-009', level: 2,
      q: String.raw`Avec la convention $a_0 = $ valeur moyenne, l'égalité de Parseval s'écrit :`,
      choices: [String.raw`$\frac1T\int_0^T f^2 = a_0^2 + \frac12\sum(a_n^2 + b_n^2)$`, String.raw`$\frac1T\int_0^T f^2 = a_0^2 + \sum(a_n^2 + b_n^2)$`, String.raw`$\frac1T\int_0^T f = a_0 + \sum(a_n + b_n)$`, String.raw`$\frac1T\int_0^T f^2 = \frac{a_0^2}{2} + \frac12\sum(a_n^2 + b_n^2)$`], answer: 0,
      explain: String.raw`La composante continue a une puissance $a_0^2$ et chaque harmonique une puissance $\frac{a_n^2 + b_n^2}{2}$ (moyenne de $\cos^2$ égale à $\frac12$).`,
      why: { 1: String.raw`Oubli du $\frac12$ : la puissance de $A\cos$ vaut $\frac{A^2}{2}$.`, 2: String.raw`Parseval porte sur $f^2$ (puissance), pas sur $f$.`, 3: String.raw`$\frac{a_0^2}{2}$ correspond à l'autre convention ; ici $a_0$ est la moyenne, de puissance $a_0^2$.` } },
    { id: 'm10-q-010', level: 2,
      q: String.raw`Pour $n \geq 1$ et $f$ réelle, le coefficient complexe $c_n$ vaut :`,
      choices: [String.raw`$\dfrac{a_n - \mathrm{i}\,b_n}{2}$`, String.raw`$\dfrac{a_n + \mathrm{i}\,b_n}{2}$`, String.raw`$a_n - \mathrm{i}\,b_n$`, String.raw`$\dfrac{a_n - b_n}{2}$`], answer: 0,
      explain: String.raw`$c_n = \frac1T\int f(\cos n\omega t - \mathrm{i}\sin n\omega t) = \frac{a_n}{2} - \mathrm{i}\frac{b_n}{2}$.`,
      why: { 1: String.raw`C'est $c_{-n} = \overline{c_n}$.`, 2: String.raw`Il manque le facteur $\frac12$ ($\frac1T$ au lieu de $\frac2T$).`, 3: String.raw`Il manque le $\mathrm{i}$ : $b_n$ est porté par la partie imaginaire.` } },
    { id: 'm10-q-011', level: 1,
      q: String.raw`$f(t) = 2 + 3\cos(\omega t) + 4\sin(\omega t)$. Quelle est l'amplitude du fondamental ?`,
      choices: [String.raw`$7$`, String.raw`$5$`, String.raw`$3$`, String.raw`$\frac52$`], answer: 1,
      explain: String.raw`$A_1 = \sqrt{a_1^2 + b_1^2} = \sqrt{9 + 16} = 5$ : $3\cos + 4\sin = 5\cos(\omega t + \varphi)$.`,
      why: { 0: String.raw`Les amplitudes d'un cosinus et d'un sinus (en quadrature) ne s'additionnent pas.`, 2: String.raw`Tu as oublié la composante en sinus.`, 3: String.raw`$\frac52 = |c_1|$ : c'est la hauteur de la raie du spectre bilatéral, pas l'amplitude.` } },
    { id: 'm10-q-012', level: 1,
      q: String.raw`Valeur efficace de $A\sin(\omega t)$ ?`,
      choices: [String.raw`$\frac{A}{2}$`, String.raw`$A$`, String.raw`$\frac{A}{\sqrt2}$`, String.raw`$\frac{2A}{\pi}$`], answer: 2,
      explain: String.raw`$\frac1T\int_0^T A^2\sin^2 = \frac{A^2}{2}$, donc $F_{\text{eff}} = \frac{A}{\sqrt2}$.`,
      why: { 0: String.raw`$\frac{A^2}{2}$ est le <b>carré</b> de la valeur efficace (la puissance) ; il faut prendre la racine.`, 1: String.raw`$A$ est la valeur maximale.`, 3: String.raw`$\frac{2A}{\pi}$ est la valeur moyenne de $|A\sin|$.` } },
    { id: 'm10-q-013', level: 3,
      q: String.raw`Le phénomène de Gibbs, c'est :`,
      choices: [String.raw`un dépassement d'environ $9\,\%$ du saut près d'une discontinuité, qui ne disparaît pas quand on ajoute des harmoniques`, String.raw`la divergence de la série de Fourier aux points de discontinuité`, String.raw`le fait que les coefficients d'un signal discontinu ne tendent pas vers $0$`, String.raw`un dépassement qui tend vers $0$ quand le nombre d'harmoniques augmente`], answer: 0,
      explain: String.raw`Les sommes partielles oscillent près du saut ; le pic se rapproche de la discontinuité mais garde sa hauteur.`,
      why: { 1: String.raw`Dirichlet : la série converge (vers le milieu du saut).`, 2: String.raw`Les coefficients tendent vers $0$ (en $\frac1n$).`, 3: String.raw`Justement, la hauteur du dépassement ne diminue pas : seule sa largeur diminue.` } },
    { id: 'm10-q-014', level: 1,
      q: String.raw`La transformée de Laplace d'un signal causal $f$ est :`,
      choices: [String.raw`$\displaystyle\int_0^{+\infty} f(t)\,\mathrm{e}^{-pt}\,\mathrm{d}t$`, String.raw`$\displaystyle\int_{-\infty}^{+\infty} f(t)\,\mathrm{e}^{-\mathrm{i}\omega t}\,\mathrm{d}t$`, String.raw`$\displaystyle\int_0^{+\infty} f(t)\,\mathrm{e}^{pt}\,\mathrm{d}t$`, String.raw`$\displaystyle\int_0^{T} f(t)\,\mathrm{e}^{-pt}\,\mathrm{d}t$`], answer: 0,
      explain: String.raw`Définition : $F(p) = \int_0^{+\infty} f(t)\mathrm{e}^{-pt}\,\mathrm{d}t$.`,
      why: { 1: String.raw`C'est la transformée de <b>Fourier</b>.`, 2: String.raw`Avec $\mathrm{e}^{+pt}$ l'intégrale diverge en général.`, 3: String.raw`Laplace intègre jusqu'à $+\infty$, pas sur une période.` } },
    { id: 'm10-q-015', level: 1,
      q: String.raw`$\mathcal{L}[u(t)]$ (échelon unité) vaut :`,
      choices: [String.raw`$1$`, String.raw`$p$`, String.raw`$\frac1p$`, String.raw`$\frac{1}{p^2}$`], answer: 2,
      explain: String.raw`$\int_0^{+\infty}\mathrm{e}^{-pt}\,\mathrm{d}t = \frac1p$.`,
      why: { 0: String.raw`$1$ est la transformée de l'impulsion de Dirac $\delta$.`, 1: String.raw`Multiplier par $p$ correspond à dériver.`, 3: String.raw`$\frac{1}{p^2}$ est la transformée de la rampe $t$.` } },
    { id: 'm10-q-016', level: 1,
      q: String.raw`$\mathcal{L}\left[\mathrm{e}^{-at}\right]$ vaut :`,
      choices: [String.raw`$\dfrac{1}{p-a}$`, String.raw`$\dfrac{1}{p+a}$`, String.raw`$\dfrac{a}{p+a}$`, String.raw`$\dfrac{\mathrm{e}^{-ap}}{p}$`], answer: 1,
      explain: String.raw`$\int_0^{+\infty}\mathrm{e}^{-(p+a)t}\,\mathrm{d}t = \frac{1}{p+a}$.`,
      why: { 0: String.raw`C'est la transformée de $\mathrm{e}^{+at}$.`, 2: String.raw`Pas de $a$ au numérateur.`, 3: String.raw`C'est la transformée de l'échelon retardé $u(t - a)$.` } },
    { id: 'm10-q-017', level: 1,
      q: String.raw`$\mathcal{L}[\sin(\omega t)]$ vaut :`,
      choices: [String.raw`$\dfrac{p}{p^2 + \omega^2}$`, String.raw`$\dfrac{1}{p^2 + \omega^2}$`, String.raw`$\dfrac{\omega}{p^2 - \omega^2}$`, String.raw`$\dfrac{\omega}{p^2 + \omega^2}$`], answer: 3,
      explain: String.raw`Partie imaginaire de $\frac{1}{p - \mathrm{i}\omega} = \frac{p + \mathrm{i}\omega}{p^2 + \omega^2}$.`,
      why: { 0: String.raw`C'est la transformée de $\cos(\omega t)$.`, 1: String.raw`Il manque $\omega$ au numérateur.`, 2: String.raw`C'est la transformée de $\operatorname{sh}(\omega t)$.` } },
    { id: 'm10-q-018', level: 2,
      q: String.raw`$\mathcal{L}[f'(t)]$ vaut :`,
      choices: [String.raw`$pF(p)$`, String.raw`$pF(p) - f(0^+)$`, String.raw`$\dfrac{F(p)}{p}$`, String.raw`$pF(p) + f(0^+)$`], answer: 1,
      explain: String.raw`Par parties : $\int_0^{+\infty} f'\mathrm{e}^{-pt} = \left[f\mathrm{e}^{-pt}\right]_0^{+\infty} + p\int_0^{+\infty} f\mathrm{e}^{-pt} = -f(0) + pF(p)$.`,
      why: { 0: String.raw`Valable seulement si $f(0^+) = 0$ : n'oublie pas la condition initiale.`, 2: String.raw`Diviser par $p$ correspond à intégrer.`, 3: String.raw`Erreur de signe sur le terme de bord.` } },
    { id: 'm10-q-019', level: 2,
      q: String.raw`Théorème du retard : $\mathcal{L}\big[f(t - \tau)\,u(t - \tau)\big]$ vaut :`,
      choices: [String.raw`$F(p - \tau)$`, String.raw`$\mathrm{e}^{\tau p}F(p)$`, String.raw`$\mathrm{e}^{-\tau p}F(p)$`, String.raw`$\dfrac{F(p)}{\tau}$`], answer: 2,
      explain: String.raw`Changement de variable $s = t - \tau$ : il sort un facteur $\mathrm{e}^{-\tau p}$.`,
      why: { 0: String.raw`Une translation en $p$ correspond à une multiplication par une exponentielle en $t$ (amortissement).`, 1: String.raw`Erreur de signe : un retard donne $\mathrm{e}^{-\tau p}$.`, 3: String.raw`Aucune division par $\tau$ ; c'est un facteur exponentiel.` } },
    { id: 'm10-q-020', level: 2,
      q: String.raw`$\mathcal{L}\left[\mathrm{e}^{-at}f(t)\right]$ vaut :`,
      choices: [String.raw`$F(p+a)$`, String.raw`$F(p-a)$`, String.raw`$\mathrm{e}^{-ap}F(p)$`, String.raw`$\dfrac{F(p)}{p+a}$`], answer: 0,
      explain: String.raw`$\int_0^{+\infty} f(t)\mathrm{e}^{-(p+a)t}\,\mathrm{d}t = F(p + a)$.`,
      why: { 1: String.raw`C'est pour $\mathrm{e}^{+at}f(t)$.`, 2: String.raw`C'est le théorème du retard.`, 3: String.raw`C'est la transformée d'une convolution avec $\mathrm{e}^{-at}$, pas d'un produit.` } },
    { id: 'm10-q-021', level: 2,
      q: String.raw`Théorème de la valeur finale (quand il s'applique) :`,
      choices: [String.raw`$\lim_{t\to+\infty} f(t) = \lim_{p\to0} pF(p)$`, String.raw`$\lim_{t\to+\infty} f(t) = \lim_{p\to+\infty} pF(p)$`, String.raw`$\lim_{t\to+\infty} f(t) = \lim_{p\to0} F(p)$`, String.raw`$\lim_{t\to+\infty} f(t) = F(1)$`], answer: 0,
      explain: String.raw`Temps long $\leftrightarrow$ $p$ petit, et il faut multiplier par $p$.`,
      why: { 1: String.raw`C'est le théorème de la valeur <b>initiale</b>.`, 2: String.raw`Oubli du facteur $p$ : pour un échelon, $F = \frac1p \to \infty$.`, 3: String.raw`Aucun sens particulier.` } },
    { id: 'm10-q-022', level: 3,
      q: String.raw`$F(p) = \dfrac{1}{p^2 + 1}$. Que vaut $\lim\limits_{t\to+\infty} f(t)$ ?`,
      choices: [String.raw`$0$, car $pF(p) \to 0$ quand $p \to 0$`, String.raw`$1$`, String.raw`elle n'existe pas : $f(t) = \sin t$ oscille`], answer: 2,
      explain: String.raw`$f(t) = \sin t$ n'a pas de limite ; le théorème de la valeur finale ne s'applique pas car les pôles $\pm\mathrm{i}$ ne sont pas à partie réelle strictement négative.`,
      why: { 0: String.raw`Application abusive du théorème : il faut vérifier que les pôles de $pF$ sont strictement à gauche.`, 1: String.raw`Ni le théorème ni le calcul direct ne donnent $1$.` } },
    { id: 'm10-q-023', level: 2,
      q: String.raw`Théorème de la valeur initiale : $f(0^+) = $`,
      choices: [String.raw`$\lim_{p\to+\infty} pF(p)$`, String.raw`$\lim_{p\to0} pF(p)$`, String.raw`$F(0)$`], answer: 0,
      explain: String.raw`Temps court $\leftrightarrow$ $p$ grand.`,
      why: { 1: String.raw`C'est la valeur finale.`, 2: String.raw`$F(0) = \int_0^{+\infty} f$ : c'est l'aire sous la courbe, pas $f(0)$.` } },
    { id: 'm10-q-024', level: 1,
      q: String.raw`$\mathcal{L}[t^n]$ vaut :`,
      choices: [String.raw`$\dfrac{1}{p^{n+1}}$`, String.raw`$\dfrac{n!}{p^{n+1}}$`, String.raw`$\dfrac{n!}{p^n}$`, String.raw`$\dfrac{n}{p^{n+1}}$`], answer: 1,
      explain: String.raw`Par récurrence (intégrations par parties) : $\mathcal{L}[t^n] = \frac{n}{p}\mathcal{L}[t^{n-1}] = \frac{n!}{p^{n+1}}$.`,
      why: { 0: String.raw`Il manque le $n!$ : $\mathcal{L}[t^2] = \frac{2}{p^3}$.`, 2: String.raw`L'exposant est $n + 1$ : $\mathcal{L}[t] = \frac{1}{p^2}$.`, 3: String.raw`C'est $n!$, pas $n$ (même résultat seulement pour $n \leq 2$).` } },
    { id: 'm10-q-025', level: 2,
      q: String.raw`Système du premier ordre $H(p) = \frac{K}{1 + \tau p}$ soumis à un échelon. À $t = \tau$, la sortie a atteint :`,
      choices: [String.raw`$50\,\%$ de sa valeur finale`, String.raw`$63\,\%$ de sa valeur finale`, String.raw`$95\,\%$ de sa valeur finale`, String.raw`$100\,\%$ de sa valeur finale`], answer: 1,
      explain: String.raw`$1 - \mathrm{e}^{-1} \approx 0{,}63$.`,
      why: { 0: String.raw`$50\,\%$ est atteint à $t = \tau\ln 2 \approx 0{,}69\,\tau$.`, 2: String.raw`$95\,\%$ est atteint à $t = 3\tau$.`, 3: String.raw`La valeur finale n'est atteinte qu'asymptotiquement.` } },
    { id: 'm10-q-026', level: 2,
      q: String.raw`Temps de réponse à $5\,\%$ d'un système du premier ordre de constante de temps $\tau$ ?`,
      choices: [String.raw`$\tau$`, String.raw`$2\tau$`, String.raw`$3\tau$`, String.raw`$5\tau$`], answer: 2,
      explain: String.raw`$1 - \mathrm{e}^{-3} \approx 0{,}95$ : à $3\tau$ la sortie est à $5\,\%$ près de sa valeur finale.`,
      why: { 0: String.raw`À $\tau$ on n'est qu'à $63\,\%$.`, 1: String.raw`À $2\tau$ : $1 - \mathrm{e}^{-2} \approx 86\,\%$.`, 3: String.raw`À $5\tau$ on est à $99\,\%$ ($1\,\%$ près).` } },
    { id: 'm10-q-027', level: 2,
      q: String.raw`$\mathcal{L}^{-1}\left[\dfrac{1}{(p+3)^2}\right]$ vaut :`,
      choices: [String.raw`$\mathrm{e}^{-3t}$`, String.raw`$t\,\mathrm{e}^{-3t}$`, String.raw`$\mathrm{e}^{-6t}$`, String.raw`$t^2\mathrm{e}^{-3t}$`], answer: 1,
      explain: String.raw`$\mathcal{L}[t] = \frac{1}{p^2}$, puis amortissement $p \to p + 3$ : $t\,\mathrm{e}^{-3t}$.`,
      why: { 0: String.raw`$\mathrm{e}^{-3t}$ donne $\frac{1}{p+3}$ (pôle simple).`, 2: String.raw`Le carré de $F$ ne correspond pas au carré de $f$.`, 3: String.raw`$\mathcal{L}[t^2\mathrm{e}^{-3t}] = \frac{2}{(p+3)^3}$.` } },
    { id: 'm10-q-028', level: 2,
      q: String.raw`$\mathcal{L}^{-1}\left[\dfrac{\mathrm{e}^{-2p}}{p}\right]$ vaut :`,
      choices: [String.raw`$u(t - 2)$`, String.raw`$u(t + 2)$`, String.raw`$\mathrm{e}^{-2t}$`, String.raw`$t - 2$`], answer: 0,
      explain: String.raw`$\frac1p \leftrightarrow u(t)$ et le facteur $\mathrm{e}^{-2p}$ retarde de $2$ : échelon qui s'allume à $t = 2$.`,
      why: { 1: String.raw`$\mathrm{e}^{-2p}$ est un <b>retard</b>, pas une avance.`, 2: String.raw`$\mathrm{e}^{-2t}$ a pour transformée $\frac{1}{p+2}$.`, 3: String.raw`$t - 2$ a pour transformée $\frac{1}{p^2} - \frac2p$.` } },
    { id: 'm10-q-029', level: 1,
      q: String.raw`$\mathcal{L}\left[\int_0^t f(s)\,\mathrm{d}s\right]$ vaut :`,
      choices: [String.raw`$pF(p)$`, String.raw`$\dfrac{F(p)}{p}$`, String.raw`$F(p) - f(0)$`, String.raw`$-F'(p)$`], answer: 1,
      explain: String.raw`Intégrer en temps revient à diviser par $p$.`,
      why: { 0: String.raw`Multiplier par $p$ correspond à dériver.`, 2: String.raw`Formule sans fondement (mélange avec la dérivation).`, 3: String.raw`$-F'(p)$ est la transformée de $t\,f(t)$.` } },
    { id: 'm10-q-030', level: 2,
      q: String.raw`La fonction de transfert d'un système linéaire d'entrée $e$ et de sortie $s$ est :`,
      choices: [String.raw`$H(p) = \dfrac{S(p)}{E(p)}$, à conditions initiales nulles`, String.raw`$H(p) = \dfrac{E(p)}{S(p)}$`, String.raw`$H(p) = S(p) - E(p)$`, String.raw`$H(t) = \dfrac{s(t)}{e(t)}$`], answer: 0,
      explain: String.raw`On a alors $S(p) = H(p)E(p)$ : sortie $=$ transfert $\times$ entrée.`,
      why: { 1: String.raw`C'est l'inverse : sortie sur entrée.`, 2: String.raw`Le transfert est un rapport, pas une différence.`, 3: String.raw`Le rapport des signaux temporels n'a pas de sens en général ; c'est en $p$ que la relation devient un produit.` } },
    { id: 'm10-q-031', level: 2,
      q: String.raw`$H(p) = \dfrac{6}{2 + 4p}$. Gain statique $K$ et constante de temps $\tau$ ?`,
      choices: [String.raw`$K = 6$, $\tau = 4$`, String.raw`$K = 3$, $\tau = 2$`, String.raw`$K = 3$, $\tau = 4$`, String.raw`$K = 6$, $\tau = 2$`], answer: 1,
      explain: String.raw`Forme canonique : on divise haut et bas par $2$, $H(p) = \frac{3}{1 + 2p}$.`,
      why: { 0: String.raw`Il faut d'abord mettre le dénominateur sous la forme $1 + \tau p$.`, 2: String.raw`Le coefficient de $p$ doit aussi être divisé par $2$.`, 3: String.raw`Le numérateur doit aussi être divisé par $2$ ($K = H(0) = 3$).` } },
    { id: 'm10-q-032', level: 3,
      q: String.raw`Le système $H(p) = \dfrac{1}{(p+1)(p-2)}$ est-il stable ?`,
      choices: [String.raw`Oui, car son gain statique est fini`, String.raw`Non : le pôle $p = 2$ donne un terme en $\mathrm{e}^{2t}$ qui diverge`, String.raw`Oui, car le pôle $-1$ compense le pôle $2$`], answer: 1,
      explain: String.raw`La réponse impulsionnelle contient $\mathrm{e}^{-t}$ et $\mathrm{e}^{2t}$ ; le second terme explose. Stable $\iff$ tous les pôles à partie réelle $\lt 0$.`,
      why: { 0: String.raw`$H(0) = -\frac12$ est fini, mais cela ne dit rien de la stabilité.`, 2: String.raw`Les modes ne se compensent pas : il suffit d'un seul pôle à droite pour être instable.` } },
    { id: 'm10-q-033', level: 2,
      q: String.raw`La transformée de Laplace d'un produit de convolution $f * g$ est :`,
      choices: [String.raw`$F(p)\,G(p)$`, String.raw`$F(p) + G(p)$`, String.raw`$F(p) * G(p)$`], answer: 0,
      explain: String.raw`La convolution en temps devient un produit en $p$ : c'est pourquoi $S = H\,E$ quand $s = h * e$.`,
      why: { 1: String.raw`La somme correspond à la linéarité ($f + g$).`, 2: String.raw`La convolution devient justement un produit simple.` } }
  ],

  /* ======================================================================
     EXERCICES « TAPE LA FORMULE »
     ====================================================================== */
  exercises: [
    { id: 'm10-x-001', level: 1,
      prompt: String.raw`Un signal a pour période $T = 20$ ms. Donne sa pulsation $\omega$ en rad/s (valeur exacte).`,
      answer: '100*pi', vars: [], check: 'value',
      mistakes: [
        { expr: '50', msg: String.raw`$50$ Hz est la fréquence $f$ ; la pulsation est $\omega = 2\pi f$.` },
        { expr: '2*pi*0.02', msg: String.raw`$\omega = \frac{2\pi}{T}$, pas $2\pi T$.` }
      ],
      hint: String.raw`$\omega = \frac{2\pi}{T}$ avec $T$ en secondes.`,
      explain: String.raw`$\omega = \frac{2\pi}{0{,}02} = 100\pi \approx 314$ rad/s.` },
    { id: 'm10-x-002', level: 1,
      prompt: String.raw`Un signal créneau vaut $5$ V pendant le premier quart de chaque période et $0$ V le reste du temps (rapport cyclique $\frac14$). Donne sa valeur moyenne $a_0$ (en V).`,
      answer: '5/4', vars: [], check: 'value',
      mistakes: [
        { expr: '5/2', msg: String.raw`Le rapport cyclique est $\frac14$, pas $\frac12$.` },
        { expr: '5', msg: String.raw`$5$ V est la valeur haute ; la moyenne tient compte du temps passé à $0$.` }
      ],
      hint: String.raw`$a_0 = \frac1T\int_0^T f(t)\,\mathrm{d}t$ : aire d'une période divisée par $T$.`,
      explain: String.raw`$a_0 = \frac{1}{T}\cdot 5 \cdot \frac{T}{4} = \frac54$ V (en général : $\alpha E$).` },
    { id: 'm10-x-003', level: 2,
      prompt: String.raw`Donne la valeur moyenne du signal redressé double alternance $f(t) = |\sin t|$ (période $\pi$).`,
      answer: '2/pi', vars: [], check: 'value',
      mistakes: [
        { expr: '0', msg: String.raw`C'est la moyenne de $\sin t$ ; $|\sin t|$ est toujours positif.` },
        { expr: '1/pi', msg: String.raw`$\frac1\pi$ est la moyenne du redressé <b>simple</b> alternance ; ici la période est $\pi$.` }
      ],
      hint: String.raw`$\frac{1}{\pi}\int_0^{\pi}\sin t\,\mathrm{d}t$.`,
      explain: String.raw`$\langle f\rangle = \frac{1}{\pi}\int_0^{\pi}\sin t\,\mathrm{d}t = \frac{1}{\pi}\big[-\cos t\big]_0^{\pi} = \frac{2}{\pi} \approx 0{,}64$.` },
    { id: 'm10-x-004', level: 2,
      prompt: String.raw`Calcule la puissance moyenne $\frac{1}{T}\int_0^T f(t)^2\,\mathrm{d}t$ du signal $f(t) = 3 + 4\cos(\omega t)$.`,
      answer: '17', vars: [], check: 'value',
      mistakes: [
        { expr: '25', msg: String.raw`La puissance de $4\cos(\omega t)$ vaut $\frac{4^2}{2} = 8$, pas $16$.` },
        { expr: '9', msg: String.raw`Tu n'as gardé que la composante continue : l'harmonique apporte aussi sa puissance.` }
      ],
      hint: String.raw`Parseval : $a_0^2 + \frac12(a_1^2 + b_1^2)$.`,
      explain: String.raw`$a_0 = 3$, $a_1 = 4$ : $P = 3^2 + \frac{4^2}{2} = 9 + 8 = 17$ (le terme croisé $24\cos(\omega t)$ est de moyenne nulle).` },
    { id: 'm10-x-005', level: 1,
      prompt: String.raw`$f(t) = 2 + 3\cos(\omega t) + 4\sin(\omega t)$. Donne l'amplitude $A_1$ du fondamental.`,
      answer: '5', vars: [], check: 'value',
      mistakes: [
        { expr: '7', msg: String.raw`$3\cos$ et $4\sin$ sont en quadrature : $A_1 = \sqrt{a_1^2 + b_1^2}$.` },
        { expr: '5/2', msg: String.raw`$\frac52 = |c_1|$ ; l'amplitude est $A_1 = 2|c_1|$.` }
      ],
      hint: String.raw`$A_n = \sqrt{a_n^2 + b_n^2}$.`,
      explain: String.raw`$A_1 = \sqrt{3^2 + 4^2} = 5$ : $3\cos(\omega t) + 4\sin(\omega t) = 5\cos(\omega t - \varphi)$ avec $\tan\varphi = \frac43$.` },
    { id: 'm10-x-006', level: 1,
      prompt: String.raw`$f$ est $2\pi$-périodique avec $f(t) = |t|$ sur $[-\pi, \pi]$. Donne $a_0$ (valeur moyenne).`,
      answer: 'pi/2', vars: [], check: 'value',
      mistakes: [
        { expr: 'pi', msg: String.raw`Tu as oublié de diviser par la période : $a_0 = \frac{1}{2\pi}\int_{-\pi}^{\pi}|t|\,\mathrm{d}t$.` },
        { expr: '0', msg: String.raw`$|t|$ est pair, pas impair : sa moyenne n'est pas nulle.` }
      ],
      hint: String.raw`$a_0 = \frac{1}{2\pi}\int_{-\pi}^{\pi}|t|\,\mathrm{d}t = \frac{1}{\pi}\int_0^{\pi} t\,\mathrm{d}t$.`,
      explain: String.raw`$a_0 = \frac1\pi \cdot \frac{\pi^2}{2} = \frac{\pi}{2}$ (aire sous la courbe : deux triangles d'aire $\frac{\pi^2}{2}$, divisée par la période $2\pi$).` },
    { id: 'm10-x-007', level: 2,
      prompt: String.raw`$f$ est $2\pi$-périodique : $f(t) = 1$ sur $]0, \pi[$ et $f(t) = -1$ sur $]-\pi, 0[$. Donne $b_n$ en fonction de $n$ (formule valable pour tout $n \geq 1$ ; tu peux utiliser <i>(-1)^n</i> ou <i>cos(n*pi)</i>).`,
      answer: '2*(1-(-1)^n)/(n*pi)', answers: ['2*(1-cos(n*pi))/(n*pi)'], vars: ['n'], check: 'expr', domain: [1, 7],
      mistakes: [
        { expr: '4/(n*pi)', msg: String.raw`$\frac{4}{n\pi}$ n'est valable que pour $n$ impair ; pour $n$ pair, $b_n = 0$. Écris une formule unique avec $(-1)^n$.` },
        { expr: '(1-(-1)^n)/(n*pi)', msg: String.raw`Il manque un facteur $2$ : $b_n = \frac{2}{\pi}\int_0^{\pi}\sin(nt)\,\mathrm{d}t$ (parité : $\frac{4}{T}$ avec $T = 2\pi$).` }
      ],
      hint: String.raw`$f$ impaire : $b_n = \frac{2}{\pi}\int_0^{\pi}\sin(nt)\,\mathrm{d}t$.`,
      explain: String.raw`$b_n = \frac{2}{\pi}\left[-\frac{\cos(nt)}{n}\right]_0^{\pi} = \frac{2}{\pi}\cdot\frac{1 - \cos(n\pi)}{n} = \frac{2(1 - (-1)^n)}{n\pi}$, soit $\frac{4}{n\pi}$ si $n$ impair et $0$ si $n$ pair.` },
    { id: 'm10-x-008', level: 1,
      prompt: String.raw`Pour le même créneau ($1$ sur $]0,\pi[$, $-1$ sur $]-\pi, 0[$), donne $b_3$.`,
      answer: '4/(3*pi)', vars: [], check: 'value',
      mistakes: [
        { expr: '4/pi', msg: String.raw`$\frac{4}{\pi}$ est $b_1$ ; pour $n = 3$ on divise par $3$.` },
        { expr: '0', msg: String.raw`Ce sont les harmoniques <b>pairs</b> qui sont nuls ; $3$ est impair.` }
      ],
      hint: String.raw`$b_n = \frac{4}{n\pi}$ pour $n$ impair.`,
      explain: String.raw`$b_3 = \frac{2(1 - (-1)^3)}{3\pi} = \frac{4}{3\pi} \approx 0{,}42$.` },
    { id: 'm10-x-009', level: 2,
      prompt: String.raw`$f$ est $2\pi$-périodique avec $f(t) = t$ sur $]-\pi, \pi[$ (dent de scie). Donne $b_n$ en fonction de $n$.`,
      answer: '2*(-1)^(n+1)/n', answers: ['-2*cos(n*pi)/n'], vars: ['n'], check: 'expr', domain: [1, 7],
      mistakes: [
        { expr: '2*(-1)^n/n', msg: String.raw`Signe : $b_1 = 2 > 0$ (pour $t$ petit, $f(t) = t \approx 2\sin t - \cdots$). Revois le terme de bord $\left[-\frac{t\cos nt}{n}\right]_0^\pi$.` },
        { expr: '2/n', msg: String.raw`$\cos(n\pi) = (-1)^n$ : le signe alterne.` }
      ],
      hint: String.raw`$f$ impaire : $b_n = \frac{2}{\pi}\int_0^{\pi} t\sin(nt)\,\mathrm{d}t$, par parties.`,
      explain: String.raw`$\int_0^{\pi} t\sin(nt)\,\mathrm{d}t = \left[-\frac{t\cos(nt)}{n}\right]_0^{\pi} + \frac1n\int_0^{\pi}\cos(nt)\,\mathrm{d}t = -\frac{\pi(-1)^n}{n}$, donc $b_n = \frac{2}{\pi}\cdot\left(-\frac{\pi(-1)^n}{n}\right) = \frac{2(-1)^{n+1}}{n}$.` },
    { id: 'm10-x-010', level: 3,
      prompt: String.raw`$f$ est $2\pi$-périodique avec $f(t) = |t|$ sur $[-\pi, \pi]$. Donne $a_n$ ($n \geq 1$) en fonction de $n$.`,
      answer: '2*((-1)^n-1)/(pi*n^2)', answers: ['2*(cos(n*pi)-1)/(pi*n^2)'], vars: ['n'], check: 'expr', domain: [1, 7],
      mistakes: [
        { expr: '-4/(pi*n^2)', msg: String.raw`Valable seulement pour $n$ impair ; pour $n$ pair, $a_n = 0$. Utilise $(-1)^n$ pour une formule unique.` },
        { expr: '2*((-1)^n-1)/(pi*n)', msg: String.raw`L'intégration par parties fait apparaître $\frac{1}{n^2}$ : $\left[\frac{\cos(nt)}{n^2}\right]_0^{\pi}$.` },
        { expr: '2*(1-(-1)^n)/(pi*n^2)', msg: String.raw`Signe : $\left[\frac{\cos nt}{n^2}\right]_0^{\pi} = \frac{(-1)^n - 1}{n^2} \leq 0$.` }
      ],
      hint: String.raw`$f$ paire : $a_n = \frac{2}{\pi}\int_0^{\pi} t\cos(nt)\,\mathrm{d}t$, par parties.`,
      explain: String.raw`$\int_0^{\pi} t\cos(nt)\,\mathrm{d}t = \left[\frac{t\sin nt}{n}\right]_0^{\pi} - \frac1n\int_0^{\pi}\sin(nt)\,\mathrm{d}t = \frac{(-1)^n - 1}{n^2}$, donc $a_n = \frac{2((-1)^n - 1)}{\pi n^2}$ : $-\frac{4}{\pi n^2}$ si $n$ impair, $0$ si $n$ pair.` },
    { id: 'm10-x-011', level: 3,
      prompt: String.raw`Pour la dent de scie $f(t) = t$ sur $]-\pi, \pi[$ ($2\pi$-périodique), donne le coefficient complexe $c_n$ ($n \geq 1$) en fonction de $n$ (utilise <i>i</i>).`,
      answer: 'i*(-1)^n/n', answers: ['i*cos(n*pi)/n'], vars: ['n'], check: 'expr', domain: [1, 7],
      mistakes: [
        { expr: '-i*(-1)^n/n', msg: String.raw`Signe : $c_n = \frac{a_n - \mathrm{i}b_n}{2}$ avec $b_n = \frac{2(-1)^{n+1}}{n}$.` },
        { expr: '2*(-1)^(n+1)/n', msg: String.raw`C'est $b_n$ ; $c_n = \frac{a_n - \mathrm{i}\,b_n}{2}$ est imaginaire pur ici.` }
      ],
      hint: String.raw`$a_n = 0$, $b_n = \frac{2(-1)^{n+1}}{n}$ et $c_n = \frac{a_n - \mathrm{i}\,b_n}{2}$.`,
      explain: String.raw`$c_n = -\frac{\mathrm{i}}{2}\cdot\frac{2(-1)^{n+1}}{n} = \frac{\mathrm{i}(-1)^n}{n}$ : imaginaire pur, comme attendu pour un signal impair.` },
    { id: 'm10-x-012', level: 2,
      prompt: String.raw`Le créneau impair $\pm 1$ a pour coefficients $b_{2k+1} = \frac{4}{\pi(2k+1)}$ (les autres sont nuls) et une puissance moyenne égale à $1$. Déduis de Parseval la valeur de $\sum_{k=0}^{+\infty}\frac{1}{(2k+1)^2}$.`,
      answer: 'pi^2/8', vars: [], check: 'value',
      mistakes: [
        { expr: 'pi^2/6', msg: String.raw`$\frac{\pi^2}{6}$ est la somme sur <b>tous</b> les entiers ; ici seuls les impairs interviennent.` },
        { expr: 'pi^2/16', msg: String.raw`Parseval : $1 = \frac12\sum b_n^2$, n'oublie pas le facteur $\frac12$.` }
      ],
      hint: String.raw`$1 = \frac12\sum_{k\geq0}\frac{16}{\pi^2(2k+1)^2}$.`,
      explain: String.raw`$1 = \frac{8}{\pi^2}\sum_{k\geq0}\frac{1}{(2k+1)^2}$, donc $\sum_{k\geq0}\frac{1}{(2k+1)^2} = \frac{\pi^2}{8}$.` },
    { id: 'm10-x-013', level: 2,
      prompt: String.raw`$f$ est $2\pi$-périodique : $f(t) = 2$ sur $]0, \pi[$ et $f(t) = 0$ sur $]\pi, 2\pi[$. Vers quelle valeur converge sa série de Fourier en $t = \pi$ ?`,
      answer: '1', vars: [], check: 'value',
      mistakes: [
        { expr: '2', msg: String.raw`C'est la limite à gauche ; en un point de saut, la série converge vers la demi-somme.` },
        { expr: '0', msg: String.raw`C'est la limite à droite ; Dirichlet donne $\frac{f(\pi^+) + f(\pi^-)}{2}$.` }
      ],
      hint: String.raw`Théorème de Dirichlet.`,
      explain: String.raw`$S(\pi) = \frac{f(\pi^-) + f(\pi^+)}{2} = \frac{2 + 0}{2} = 1$.` },
    { id: 'm10-x-014', level: 1,
      prompt: String.raw`Donne la transformée de Laplace de la constante $f(t) = 3$ (signal causal), en fonction de $p$.`,
      answer: '3/p', vars: ['p'], check: 'expr', domain: [1, 4],
      mistakes: [
        { expr: '3', msg: String.raw`$3$ serait la transformée de $3\delta(t)$ ; pour une constante, $\mathcal{L}[1] = \frac1p$.` },
        { expr: '3/p^2', msg: String.raw`$\frac{1}{p^2}$ est la transformée de $t$, pas de $1$.` }
      ],
      hint: String.raw`$\mathcal{L}[1] = \frac1p$ et linéarité.`,
      explain: String.raw`$\mathcal{L}[3] = 3\,\mathcal{L}[1] = \frac{3}{p}$.` },
    { id: 'm10-x-015', level: 1,
      prompt: String.raw`Donne $\mathcal{L}[t^2]$ en fonction de $p$.`,
      answer: '2/p^3', vars: ['p'], check: 'expr', domain: [1, 4],
      mistakes: [
        { expr: '1/p^3', msg: String.raw`Il manque le $n! = 2! = 2$.` },
        { expr: '2/p^2', msg: String.raw`L'exposant est $n + 1 = 3$.` }
      ],
      hint: String.raw`$\mathcal{L}[t^n] = \frac{n!}{p^{n+1}}$.`,
      explain: String.raw`$\mathcal{L}[t^2] = \frac{2!}{p^3} = \frac{2}{p^3}$.` },
    { id: 'm10-x-016', level: 1,
      prompt: String.raw`Donne $\mathcal{L}\left[\mathrm{e}^{-2t}\right]$ en fonction de $p$.`,
      answer: '1/(p+2)', vars: ['p'], check: 'expr', domain: [1, 4],
      mistakes: [
        { expr: '1/(p-2)', msg: String.raw`$\frac{1}{p-2}$ correspond à $\mathrm{e}^{+2t}$.` },
        { expr: 'exp(-2*p)/p', msg: String.raw`Confusion avec le théorème du retard : $\frac{\mathrm{e}^{-2p}}{p}$ est la transformée de $u(t-2)$.` }
      ],
      hint: String.raw`$\mathcal{L}[\mathrm{e}^{-at}] = \frac{1}{p+a}$.`,
      explain: String.raw`$\int_0^{+\infty}\mathrm{e}^{-2t}\mathrm{e}^{-pt}\,\mathrm{d}t = \frac{1}{p+2}$.` },
    { id: 'm10-x-017', level: 1,
      prompt: String.raw`Donne $\mathcal{L}[\sin(3t)]$ en fonction de $p$.`,
      answer: '3/(p^2+9)', vars: ['p'], check: 'expr', domain: [1, 4],
      mistakes: [
        { expr: 'p/(p^2+9)', msg: String.raw`C'est la transformée de $\cos(3t)$ ; pour le sinus, $\omega$ au numérateur.` },
        { expr: '1/(p^2+9)', msg: String.raw`Il manque $\omega = 3$ au numérateur.` },
        { expr: '3/(p^2+3)', msg: String.raw`C'est $\omega^2 = 9$ au dénominateur.` }
      ],
      hint: String.raw`$\mathcal{L}[\sin\omega t] = \frac{\omega}{p^2 + \omega^2}$.`,
      explain: String.raw`$\omega = 3$ : $\mathcal{L}[\sin 3t] = \frac{3}{p^2 + 9}$.` },
    { id: 'm10-x-018', level: 2,
      prompt: String.raw`Donne $\mathcal{L}\left[5t - 2 + \cos(2t)\right]$ en fonction de $p$.`,
      answer: '5/p^2-2/p+p/(p^2+4)', vars: ['p'], check: 'expr', domain: [1, 4],
      mistakes: [
        { expr: '5/p^2-2+p/(p^2+4)', msg: String.raw`La constante $2$ a pour transformée $\frac{2}{p}$, pas $2$.` },
        { expr: '5/p^2-2/p+2/(p^2+4)', msg: String.raw`$\cos \leftrightarrow p$ au numérateur ; $\omega$ au numérateur c'est pour le sinus.` }
      ],
      hint: String.raw`Linéarité, puis la table : $t \to \frac{1}{p^2}$, $1 \to \frac1p$, $\cos\omega t \to \frac{p}{p^2 + \omega^2}$.`,
      explain: String.raw`$\mathcal{L} = 5\cdot\frac{1}{p^2} - 2\cdot\frac{1}{p} + \frac{p}{p^2 + 4}$.` },
    { id: 'm10-x-019', level: 2,
      prompt: String.raw`Donne $\mathcal{L}\left[t\,\mathrm{e}^{-t}\right]$ en fonction de $p$.`,
      answer: '1/(p+1)^2', vars: ['p'], check: 'expr', domain: [1, 4],
      mistakes: [
        { expr: '1/(p^2*(p+1))', msg: String.raw`$\mathcal{L}[fg] \neq \mathcal{L}[f]\mathcal{L}[g]$ ! Utilise l'amortissement : $\mathcal{L}[t] = \frac{1}{p^2}$ puis $p \to p + 1$.` },
        { expr: '1/(p+1)', msg: String.raw`C'est la transformée de $\mathrm{e}^{-t}$ seul.` }
      ],
      hint: String.raw`$\mathcal{L}[\mathrm{e}^{-at}f(t)] = F(p + a)$ avec $f(t) = t$.`,
      explain: String.raw`$F(p) = \frac{1}{p^2}$ pour $f(t) = t$, donc $\mathcal{L}[t\,\mathrm{e}^{-t}] = F(p+1) = \frac{1}{(p+1)^2}$.` },
    { id: 'm10-x-020', level: 2,
      prompt: String.raw`Donne $\mathcal{L}\left[\mathrm{e}^{-2t}\cos(3t)\right]$ en fonction de $p$.`,
      answer: '(p+2)/((p+2)^2+9)', vars: ['p'], check: 'expr', domain: [1, 4],
      mistakes: [
        { expr: 'p/((p+2)^2+9)', msg: String.raw`On remplace $p$ par $p + 2$ <b>partout</b>, numérateur compris.` },
        { expr: '(p-2)/((p-2)^2+9)', msg: String.raw`$\mathrm{e}^{-2t}$ donne $F(p + 2)$, pas $F(p - 2)$.` }
      ],
      hint: String.raw`$\mathcal{L}[\cos 3t] = \frac{p}{p^2+9}$, puis $p \to p + 2$.`,
      explain: String.raw`$\mathcal{L}[\mathrm{e}^{-2t}\cos 3t] = \frac{p+2}{(p+2)^2 + 9}$.` },
    { id: 'm10-x-021', level: 2,
      prompt: String.raw`Donne la transformée de l'échelon retardé $u(t - 2)$ en fonction de $p$.`,
      answer: 'exp(-2*p)/p', vars: ['p'], check: 'expr', domain: [1, 4],
      mistakes: [
        { expr: 'exp(-2*p)', msg: String.raw`Il manque $\mathcal{L}[u] = \frac1p$ : $\mathrm{e}^{-2p}$ seul est la transformée de $\delta(t - 2)$.` },
        { expr: 'exp(2*p)/p', msg: String.raw`Un retard donne $\mathrm{e}^{-\tau p}$ (signe moins).` }
      ],
      hint: String.raw`Théorème du retard : $\mathrm{e}^{-\tau p}F(p)$.`,
      explain: String.raw`$\mathcal{L}[u(t-2)] = \mathrm{e}^{-2p}\,\mathcal{L}[u] = \frac{\mathrm{e}^{-2p}}{p}$.` },
    { id: 'm10-x-022', level: 2,
      prompt: String.raw`Donne la transformée de la rampe retardée $(t-1)\,u(t-1)$ en fonction de $p$.`,
      answer: 'exp(-p)/p^2', vars: ['p'], check: 'expr', domain: [1, 4],
      mistakes: [
        { expr: '1/p^2-1/p', msg: String.raw`C'est la transformée de $(t - 1)u(t)$ (signal non retardé, négatif au départ) ; ici le signal est nul avant $t = 1$.` },
        { expr: 'exp(-p)/p', msg: String.raw`On retarde la rampe $t \to \frac{1}{p^2}$, pas l'échelon.` }
      ],
      hint: String.raw`C'est $f(t - 1)u(t - 1)$ avec $f(t) = t$.`,
      explain: String.raw`$\mathcal{L}[(t-1)u(t-1)] = \mathrm{e}^{-p}\,\mathcal{L}[t] = \frac{\mathrm{e}^{-p}}{p^2}$.` },
    { id: 'm10-x-023', level: 2,
      prompt: String.raw`$f(t) = \cos(2t)$. À l'aide de la règle de dérivation, donne $\mathcal{L}[f']$ en fonction de $p$.`,
      answer: '-4/(p^2+4)', vars: ['p'], check: 'expr', domain: [1, 4],
      mistakes: [
        { expr: 'p^2/(p^2+4)', msg: String.raw`Tu as oublié $-f(0) = -1$ : $\mathcal{L}[f'] = pF(p) - f(0)$.` },
        { expr: 'p^2/(p^2+4)+1', msg: String.raw`Signe : on <b>soustrait</b> $f(0)$.` }
      ],
      hint: String.raw`$\mathcal{L}[f'] = pF(p) - f(0)$ avec $F(p) = \frac{p}{p^2+4}$ et $f(0) = 1$.`,
      explain: String.raw`$p\cdot\frac{p}{p^2+4} - 1 = \frac{p^2 - p^2 - 4}{p^2 + 4} = -\frac{4}{p^2+4}$. Vérification : $f'(t) = -2\sin 2t$ et $\mathcal{L}[-2\sin 2t] = -\frac{4}{p^2 + 4}$.` },
    { id: 'm10-x-024', level: 3,
      prompt: String.raw`Donne $\mathcal{L}[t\sin t]$ en fonction de $p$.`,
      answer: '2*p/(p^2+1)^2', vars: ['p'], check: 'expr', domain: [1, 4],
      mistakes: [
        { expr: '-2*p/(p^2+1)^2', msg: String.raw`Signe : $\mathcal{L}[tf] = -F'(p)$, et $F'(p) = -\frac{2p}{(p^2+1)^2}$.` },
        { expr: '1/(p^2*(p^2+1))', msg: String.raw`La transformée d'un produit n'est pas le produit des transformées.` }
      ],
      hint: String.raw`$\mathcal{L}[t\,f(t)] = -F'(p)$ avec $F(p) = \frac{1}{p^2+1}$.`,
      explain: String.raw`$F'(p) = -\frac{2p}{(p^2+1)^2}$, donc $\mathcal{L}[t\sin t] = \frac{2p}{(p^2 + 1)^2}$.` },
    { id: 'm10-x-025', level: 1,
      prompt: String.raw`Donne $f(t) = \mathcal{L}^{-1}\left[\dfrac{1}{p+4}\right]$ en fonction de $t$ (pour $t > 0$).`,
      answer: 'exp(-4*t)', vars: ['t'], check: 'expr', domain: [0.2, 3],
      mistakes: [
        { expr: 'exp(4*t)', msg: String.raw`$\frac{1}{p - a} \to \mathrm{e}^{at}$ : ici $a = -4$.` }
      ],
      hint: String.raw`$\frac{1}{p+a} \leftrightarrow \mathrm{e}^{-at}$.`,
      explain: String.raw`$f(t) = \mathrm{e}^{-4t}$ (pôle $-4$).` },
    { id: 'm10-x-026', level: 1,
      prompt: String.raw`Donne $f(t) = \mathcal{L}^{-1}\left[\dfrac{1}{p^4}\right]$ en fonction de $t$.`,
      answer: 't^3/6', vars: ['t'], check: 'expr', domain: [0.2, 3],
      mistakes: [
        { expr: 't^3', msg: String.raw`$\mathcal{L}[t^3] = \frac{6}{p^4}$ : il faut diviser par $3! = 6$.` },
        { expr: 't^4/24', msg: String.raw`$\frac{1}{p^{n+1}} \leftrightarrow \frac{t^n}{n!}$ : ici $n + 1 = 4$, donc $n = 3$.` }
      ],
      hint: String.raw`$\mathcal{L}[t^n] = \frac{n!}{p^{n+1}}$.`,
      explain: String.raw`$\frac{1}{p^4} = \frac{1}{3!}\cdot\frac{3!}{p^4}$, donc $f(t) = \frac{t^3}{6}$.` },
    { id: 'm10-x-027', level: 1,
      prompt: String.raw`Donne $f(t) = \mathcal{L}^{-1}\left[\dfrac{1}{p^2 + 25}\right]$ en fonction de $t$.`,
      answer: 'sin(5*t)/5', vars: ['t'], check: 'expr', domain: [0.2, 3],
      mistakes: [
        { expr: 'sin(5*t)', msg: String.raw`$\mathcal{L}[\sin 5t] = \frac{5}{p^2+25}$ : il faut diviser par $5$.` },
        { expr: 'cos(5*t)', msg: String.raw`Pas de $p$ au numérateur : c'est un sinus.` }
      ],
      hint: String.raw`Fais apparaître $\frac{\omega}{p^2 + \omega^2}$ avec $\omega = 5$.`,
      explain: String.raw`$\frac{1}{p^2 + 25} = \frac15\cdot\frac{5}{p^2 + 5^2}$, donc $f(t) = \frac{\sin(5t)}{5}$.` },
    { id: 'm10-x-028', level: 2,
      prompt: String.raw`Donne $f(t) = \mathcal{L}^{-1}\left[\dfrac{1}{p(p+2)}\right]$ en fonction de $t$.`,
      answer: '(1-exp(-2*t))/2', vars: ['t'], check: 'expr', domain: [0.2, 3],
      mistakes: [
        { expr: '1-exp(-2*t)', msg: String.raw`Les coefficients valent $\frac12$ : $\frac{1}{p(p+2)} = \frac{1/2}{p} - \frac{1/2}{p+2}$.` },
        { expr: 'exp(-2*t)', msg: String.raw`Il y a deux pôles ($0$ et $-2$) : décompose en éléments simples.` }
      ],
      hint: String.raw`$\frac{1}{p(p+2)} = \frac{A}{p} + \frac{B}{p+2}$ ; méthode du cache.`,
      explain: String.raw`$A = \frac{1}{0 + 2} = \frac12$, $B = \frac{1}{-2} = -\frac12$, donc $f(t) = \frac12 - \frac12\mathrm{e}^{-2t} = \frac{1 - \mathrm{e}^{-2t}}{2}$.` },
    { id: 'm10-x-029', level: 2,
      prompt: String.raw`Donne $f(t) = \mathcal{L}^{-1}\left[\dfrac{p+3}{(p+1)(p+2)}\right]$ en fonction de $t$.`,
      answer: '2*exp(-t)-exp(-2*t)', vars: ['t'], check: 'expr', domain: [0.2, 3],
      mistakes: [
        { expr: '2*exp(-t)+exp(-2*t)', msg: String.raw`$B = \frac{-2 + 3}{-2 + 1} = -1$ : attention au signe du dénominateur.` },
        { expr: 'exp(-t)-exp(-2*t)', msg: String.raw`$A = \left[\frac{p+3}{p+2}\right]_{p=-1} = \frac{2}{1} = 2$.` }
      ],
      hint: String.raw`$\frac{A}{p+1} + \frac{B}{p+2}$ avec $A = \left[\frac{p+3}{p+2}\right]_{p=-1}$, $B = \left[\frac{p+3}{p+1}\right]_{p=-2}$.`,
      explain: String.raw`$A = 2$, $B = -1$ : $F = \frac{2}{p+1} - \frac{1}{p+2}$, donc $f(t) = 2\mathrm{e}^{-t} - \mathrm{e}^{-2t}$.` },
    { id: 'm10-x-030', level: 2,
      prompt: String.raw`Donne $f(t) = \mathcal{L}^{-1}\left[\dfrac{1}{(p+2)^2}\right]$ en fonction de $t$.`,
      answer: 't*exp(-2*t)', vars: ['t'], check: 'expr', domain: [0.2, 3],
      mistakes: [
        { expr: 'exp(-2*t)', msg: String.raw`C'est un pôle <b>double</b> : il apparaît un facteur $t$.` },
        { expr: 'exp(-4*t)', msg: String.raw`Le carré de $F$ ne correspond pas au carré de $f$.` }
      ],
      hint: String.raw`$\mathcal{L}[t] = \frac{1}{p^2}$, puis amortissement.`,
      explain: String.raw`$\frac{1}{p^2} \leftrightarrow t$, et $p \to p + 2$ correspond à multiplier par $\mathrm{e}^{-2t}$ : $f(t) = t\,\mathrm{e}^{-2t}$.` },
    { id: 'm10-x-031', level: 3,
      prompt: String.raw`Donne $f(t) = \mathcal{L}^{-1}\left[\dfrac{1}{p^2 + 2p + 5}\right]$ en fonction de $t$.`,
      answer: 'exp(-t)*sin(2*t)/2', vars: ['t'], check: 'expr', domain: [0.2, 3],
      mistakes: [
        { expr: 'exp(-t)*sin(2*t)', msg: String.raw`Il faut $\omega = 2$ au numérateur : $\frac{1}{(p+1)^2 + 4} = \frac12\cdot\frac{2}{(p+1)^2 + 4}$.` },
        { expr: 'exp(-t)*cos(2*t)', msg: String.raw`Le numérateur ne contient pas $p + 1$ : c'est un sinus amorti.` },
        { expr: 'sin(2*t)/2', msg: String.raw`Le décalage $p \to p + 1$ correspond au facteur $\mathrm{e}^{-t}$.` }
      ],
      hint: String.raw`Forme canonique : $p^2 + 2p + 5 = (p+1)^2 + 4$.`,
      explain: String.raw`$\frac{1}{(p+1)^2 + 2^2} = \frac12\cdot\frac{2}{(p+1)^2 + 2^2}$, donc $f(t) = \frac12\mathrm{e}^{-t}\sin(2t)$.` },
    { id: 'm10-x-032', level: 1,
      prompt: String.raw`Résous par Laplace $y' + 2y = 0$ avec $y(0) = 3$. Donne $y(t)$.`,
      answer: '3*exp(-2*t)', vars: ['t'], check: 'expr', domain: [0.2, 3],
      mistakes: [
        { expr: '3*exp(2*t)', msg: String.raw`$Y(p) = \frac{3}{p+2}$ : pôle $-2$, donc $\mathrm{e}^{-2t}$.` },
        { expr: 'exp(-2*t)', msg: String.raw`Tu as oublié la condition initiale $y(0) = 3$.` }
      ],
      hint: String.raw`$\mathcal{L}[y'] = pY - y(0)$.`,
      explain: String.raw`$pY - 3 + 2Y = 0 \Rightarrow Y = \frac{3}{p+2} \Rightarrow y(t) = 3\mathrm{e}^{-2t}$.` },
    { id: 'm10-x-033', level: 2,
      prompt: String.raw`Résous par Laplace $y' + y = 1$ (pour $t \geq 0$) avec $y(0) = 0$. Donne $y(t)$.`,
      answer: '1-exp(-t)', vars: ['t'], check: 'expr', domain: [0.2, 3],
      mistakes: [
        { expr: 'exp(-t)', msg: String.raw`Avec $y(0) = 0$, la solution part de $0$ et tend vers $1$.` },
        { expr: '1+exp(-t)', msg: String.raw`$\frac{1}{p(p+1)} = \frac1p - \frac{1}{p+1}$ : signe moins.` }
      ],
      hint: String.raw`Le second membre $1$ a pour transformée $\frac1p$.`,
      explain: String.raw`$pY + Y = \frac1p \Rightarrow Y = \frac{1}{p(p+1)} = \frac1p - \frac{1}{p+1} \Rightarrow y(t) = 1 - \mathrm{e}^{-t}$ (réponse indicielle d'un premier ordre de constante de temps $1$).` },
    { id: 'm10-x-034', level: 3,
      prompt: String.raw`Résous par Laplace $y'' + 3y' + 2y = 0$ avec $y(0) = 0$ et $y'(0) = 1$. Donne $y(t)$.`,
      answer: 'exp(-t)-exp(-2*t)', vars: ['t'], check: 'expr', domain: [0.2, 3],
      mistakes: [
        { expr: 'exp(-2*t)-exp(-t)', msg: String.raw`Signe : $\frac{1}{(p+1)(p+2)} = \frac{1}{p+1} - \frac{1}{p+2}$ (et $y'(0) = 1 > 0$, donc $y$ croît au départ).` },
        { expr: 'exp(-t)+exp(-2*t)', msg: String.raw`Avec $y(0) = 0$, les deux coefficients doivent être opposés.` }
      ],
      hint: String.raw`$\mathcal{L}[y''] = p^2Y - py(0) - y'(0)$, puis factorise $p^2 + 3p + 2$.`,
      explain: String.raw`$(p^2Y - 1) + 3pY + 2Y = 0 \Rightarrow Y = \frac{1}{(p+1)(p+2)} = \frac{1}{p+1} - \frac{1}{p+2} \Rightarrow y(t) = \mathrm{e}^{-t} - \mathrm{e}^{-2t}$.` },
    { id: 'm10-x-035', level: 3,
      prompt: String.raw`Résous par Laplace $y' + 3y = \mathrm{e}^{-t}$ avec $y(0) = 1$. Donne $y(t)$.`,
      answer: '(exp(-t)+exp(-3*t))/2', vars: ['t'], check: 'expr', domain: [0.2, 3],
      mistakes: [
        { expr: '(exp(-t)-exp(-3*t))/2', msg: String.raw`Tu as oublié la condition initiale : $\mathcal{L}[y'] = pY - 1$ ajoute un terme $\frac{1}{p+3}$.` },
        { expr: 'exp(-3*t)', msg: String.raw`C'est la solution sans second membre ; il faut ajouter la réponse au terme $\mathrm{e}^{-t}$.` }
      ],
      hint: String.raw`$pY - 1 + 3Y = \frac{1}{p+1}$, donc $Y = \frac{1}{p+3} + \frac{1}{(p+1)(p+3)}$.`,
      explain: String.raw`$\frac{1}{(p+1)(p+3)} = \frac12\left(\frac{1}{p+1} - \frac{1}{p+3}\right)$, donc $Y = \frac{1/2}{p+1} + \frac{1/2}{p+3}$ et $y(t) = \frac{\mathrm{e}^{-t} + \mathrm{e}^{-3t}}{2}$. Vérification : $y(0) = 1$.` },
    { id: 'm10-x-036', level: 2,
      prompt: String.raw`Un système de fonction de transfert $H(p) = \dfrac{5}{1 + 2p}$ reçoit un échelon unité $e(t) = u(t)$. Donne la sortie $s(t)$ pour $t \geq 0$.`,
      answer: '5*(1-exp(-t/2))', vars: ['t'], check: 'expr', domain: [0.2, 3],
      mistakes: [
        { expr: '5*(1-exp(-2*t))', msg: String.raw`La constante de temps est $\tau = 2$ : le pôle est $-\frac{1}{\tau} = -\frac12$, d'où $\mathrm{e}^{-t/2}$.` },
        { expr: '5*exp(-t/2)', msg: String.raw`C'est la réponse impulsionnelle (à un facteur près) ; la réponse indicielle part de $0$ et tend vers $K = 5$.` }
      ],
      hint: String.raw`$S(p) = \frac{5}{p(1 + 2p)}$ ; premier ordre $K = 5$, $\tau = 2$.`,
      explain: String.raw`$s(t) = KE_0\left(1 - \mathrm{e}^{-t/\tau}\right) = 5\left(1 - \mathrm{e}^{-t/2}\right)$.` },
    { id: 'm10-x-037', level: 2,
      prompt: String.raw`$F(p) = \dfrac{3}{p(p+2)}$. Donne $\lim\limits_{t\to+\infty} f(t)$.`,
      answer: '3/2', vars: [], check: 'value',
      mistakes: [
        { expr: '0', msg: String.raw`C'est la valeur initiale ($p \to +\infty$) ; la valeur finale s'obtient avec $p \to 0$.` }
      ],
      hint: String.raw`Valeur finale : $\lim_{p\to0} pF(p)$ (pôles de $pF$ : $-2$, à gauche).`,
      explain: String.raw`$pF(p) = \frac{3}{p+2} \to \frac32$ quand $p \to 0$. (En effet $f(t) = \frac32(1 - \mathrm{e}^{-2t})$.)` },
    { id: 'm10-x-038', level: 2,
      prompt: String.raw`$F(p) = \dfrac{2p+1}{p^2 + 3p + 2}$. Donne $f(0^+)$.`,
      answer: '2', vars: [], check: 'value',
      mistakes: [
        { expr: '1/2', msg: String.raw`$F(0) = \frac12$ n'est pas $f(0^+)$ : utilise $\lim_{p\to+\infty} pF(p)$.` },
        { expr: '0', msg: String.raw`$\lim_{p\to0} pF(p) = 0$ est la valeur <b>finale</b>.` }
      ],
      hint: String.raw`Valeur initiale : $\lim_{p\to+\infty} pF(p)$.`,
      explain: String.raw`$pF(p) = \frac{2p^2 + p}{p^2 + 3p + 2} \to 2$ quand $p \to +\infty$. (En effet $f(t) = 3\mathrm{e}^{-2t} - \mathrm{e}^{-t}$, et $f(0) = 2$.)` },
    { id: 'm10-x-039', level: 2,
      prompt: String.raw`$H(p) = \dfrac{3}{2 + 6p}$. Donne sa constante de temps $\tau$.`,
      answer: '3', vars: [], check: 'value',
      mistakes: [
        { expr: '6', msg: String.raw`Mets d'abord sous forme canonique $\frac{K}{1 + \tau p}$ : divise par $2$.` },
        { expr: '3/2', msg: String.raw`$\frac32$ est le gain statique $K$, pas la constante de temps.` }
      ],
      hint: String.raw`Divise numérateur et dénominateur par $2$.`,
      explain: String.raw`$H(p) = \frac{1{,}5}{1 + 3p}$ : $K = 1{,}5$ et $\tau = 3$.` },
    { id: 'm10-x-040', level: 1,
      prompt: String.raw`Le système $H(p) = \dfrac{4}{1 + 0{,}5p}$ reçoit un échelon d'amplitude $2$. Quelle est la valeur finale de la sortie ?`,
      answer: '8', vars: [], check: 'value',
      mistakes: [
        { expr: '4', msg: String.raw`$K = 4$ est le gain statique ; il faut le multiplier par l'amplitude de l'échelon.` },
        { expr: '1', msg: String.raw`Valeur finale : $\lim_{p\to0} p\cdot H(p)\cdot\frac{2}{p} = 2H(0)$.` }
      ],
      hint: String.raw`$S(p) = H(p)\cdot\frac{2}{p}$, puis $\lim_{p\to0} pS(p)$.`,
      explain: String.raw`$\lim_{p\to0} pS(p) = 2H(0) = 2 \times 4 = 8$.` }
  ]
});
