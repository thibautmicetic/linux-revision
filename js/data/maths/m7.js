/* Maths — Chapitre 7 : Nombres complexes */
APP.registerChapter({
  subject: 'maths',
  id: 'm7', num: 7,
  title: 'Nombres complexes',
  subtitle: 'Formes algébrique, trigonométrique, exponentielle',

  /* ======================= FICHES DE COURS ======================= */
  sections: [
    {
      id: 'm7-s-algebrique',
      title: 'Forme algébrique, conjugué, inverse et quotient',
      html: String.raw`
<h3>L'ensemble $\mathbb{C}$</h3>
<p>On admet l'existence d'un ensemble $\mathbb{C}$ contenant $\mathbb{R}$, muni d'une addition et d'une multiplication qui prolongent celles de $\mathbb{R}$ (mêmes règles de calcul), et d'un élément $\mathrm{i}$ tel que $\mathrm{i}^2 = -1$. Tout nombre complexe s'écrit de façon <b>unique</b>
$$z = a + \mathrm{i}b \qquad (a, b \in \mathbb{R}) :$$
c'est la <b>forme algébrique</b>. $a = \operatorname{Re}(z)$ est la <b>partie réelle</b>, $b = \operatorname{Im}(z)$ la <b>partie imaginaire</b> (c'est un <b>réel</b> !).</p>
<ul>
<li>$z$ est réel $\iff \operatorname{Im} z = 0$ ; $z$ est imaginaire pur $\iff \operatorname{Re} z = 0$ (ensemble $\mathrm{i}\mathbb{R}$).</li>
<li>Unicité : $a + \mathrm{i}b = a' + \mathrm{i}b' \iff a = a'$ et $b = b'$. On « identifie » parties réelles et parties imaginaires : une égalité complexe vaut deux égalités réelles.</li>
</ul>
<h4>Calculs</h4>
<p>On calcule comme dans $\mathbb{R}$ en remplaçant $\mathrm{i}^2$ par $-1$ :
$$(a+\mathrm{i}b)(c+\mathrm{i}d) = (ac - bd) + \mathrm{i}(ad + bc).$$
Puissances de $\mathrm{i}$ : $\mathrm{i}^2 = -1$, $\mathrm{i}^3 = -\mathrm{i}$, $\mathrm{i}^4 = 1$, puis cela recommence : $\mathrm{i}^n$ ne dépend que du reste de $n$ dans la division par 4. Identités remarquables et binôme de Newton restent valables.</p>
<h4>Conjugué</h4>
<p>Le conjugué de $z = a + \mathrm{i}b$ est $\overline{z} = a - \mathrm{i}b$ (symétrique de $z$ par rapport à l'axe réel). Il est compatible avec toutes les opérations :
$$\overline{z + z'} = \overline{z} + \overline{z'}, \quad \overline{z z'} = \overline{z}\,\overline{z'}, \quad \overline{z^n} = \overline{z}^{\,n}, \quad \overline{\left(\frac{z}{z'}\right)} = \frac{\overline{z}}{\overline{z'}}, \quad \overline{\overline{z}} = z.$$</p>
<p>$$\operatorname{Re} z = \frac{z + \overline{z}}{2}, \qquad \operatorname{Im} z = \frac{z - \overline{z}}{2\mathrm{i}}, \qquad z\overline{z} = a^2 + b^2 \in \mathbb{R}_+.$$
Conséquences : $z \in \mathbb{R} \iff \overline{z} = z$ et $z \in \mathrm{i}\mathbb{R} \iff \overline{z} = -z$.</p>
<h4>Inverse et quotient</h4>
<p><b>Méthode :</b> pour mettre un quotient sous forme algébrique, on multiplie numérateur et dénominateur par le <b>conjugué du dénominateur</b> : le dénominateur devient le réel $c^2 + d^2$.
$$\frac{1}{a + \mathrm{i}b} = \frac{a - \mathrm{i}b}{a^2 + b^2}, \qquad \frac{z}{z'} = \frac{z\,\overline{z'}}{z'\,\overline{z'}}.$$</p>
<div class="callout tip"><b>Exemple corrigé</b> $(2+3\mathrm{i})(1-\mathrm{i}) = 2 - 2\mathrm{i} + 3\mathrm{i} - 3\mathrm{i}^2 = 5 + \mathrm{i}$.
Et $\dfrac{3+\mathrm{i}}{1-\mathrm{i}} = \dfrac{(3+\mathrm{i})(1+\mathrm{i})}{(1-\mathrm{i})(1+\mathrm{i})} = \dfrac{3 + 3\mathrm{i} + \mathrm{i} + \mathrm{i}^2}{1 + 1} = \dfrac{2 + 4\mathrm{i}}{2} = 1 + 2\mathrm{i}$.</div>
<div class="callout warn"><b>Pièges</b> $\operatorname{Im}(3 - 2\mathrm{i}) = -2$ et non $-2\mathrm{i}$. $(a + \mathrm{i}b)^2 = a^2 - b^2 + 2\mathrm{i}ab$ : le $\mathrm{i}^2$ change le signe de $b^2$. Le conjugué de $1-\mathrm{i}$ est $1+\mathrm{i}$ (pas $-1+\mathrm{i}$ : seule la partie imaginaire change de signe). Il n'y a pas d'ordre dans $\mathbb{C}$ : écrire $z \gt 0$ n'a de sens que si $z$ est réel.</div>
<div class="callout key"><b>À retenir</b> $\mathrm{i}^2 = -1$ ; $z\overline{z} = a^2 + b^2$ ; un quotient se simplifie en multipliant haut et bas par le conjugué du dénominateur.</div>`
    },
    {
      id: 'm7-s-plan',
      title: 'Plan complexe et module',
      html: String.raw`
<h3>Représentation géométrique</h3>
<p>Dans un repère orthonormé direct $(O ; \vec{u}, \vec{v})$, le point $M(a ; b)$ et le vecteur $\vec{w}(a ; b)$ ont pour <b>affixe</b> $z = a + \mathrm{i}b$ ; $M$ est l'<b>image</b> de $z$. L'axe des abscisses est l'<b>axe réel</b>, l'axe des ordonnées l'<b>axe imaginaire</b>.</p>
<ul>
<li>Affixe du vecteur $\overrightarrow{AB}$ : $z_B - z_A$. Milieu $I$ de $[AB]$ : $z_I = \dfrac{z_A + z_B}{2}$.</li>
<li>$z + z'$ correspond à la somme des vecteurs ; $\overline{z}$ à la symétrie d'axe réel ; $-z$ à la symétrie de centre $O$ ; $-\overline{z}$ à la symétrie d'axe imaginaire.</li>
</ul>
<h4>Module</h4>
<p>$$|z| = \sqrt{a^2 + b^2} = \sqrt{z\overline{z}} = OM.$$
Pour un réel, le module coïncide avec la valeur absolue. Propriétés : $|z| = 0 \iff z = 0$, $|\overline{z}| = |-z| = |z|$, $|\operatorname{Re} z| \leq |z|$ et
$$|zz'| = |z|\,|z'|, \qquad \left|\frac{z}{z'}\right| = \frac{|z|}{|z'|}, \qquad |z^n| = |z|^n.$$
<b>Inégalité triangulaire</b> : $\big||z| - |z'|\big| \leq |z + z'| \leq |z| + |z'|$, avec égalité à droite si et seulement si les vecteurs images sont colinéaires et de même sens.</p>
<h4>Distances et lieux géométriques</h4>
<p>$AB = |z_B - z_A|$. Donc, pour $A(a)$, $B(b)$ et $r \gt 0$ :</p>
<ul>
<li>$|z - a| = r$ : cercle de centre $A$ et de rayon $r$ ; $|z - a| \leq r$ : disque fermé.</li>
<li>$|z - a| = |z - b|$ : médiatrice du segment $[AB]$.</li>
</ul>
<div class="callout tip"><b>Exemple corrigé</b> $A(1 + 2\mathrm{i})$ et $B(4 - 2\mathrm{i})$ : $AB = |z_B - z_A| = |3 - 4\mathrm{i}| = \sqrt{9 + 16} = 5$.
L'ensemble des $M(z)$ tels que $|z + \mathrm{i}| = 2$ : on écrit $|z - (-\mathrm{i})| = 2$, c'est le cercle de centre le point d'affixe $-\mathrm{i}$ (coordonnées $(0 ; -1)$) et de rayon 2.</div>
<div class="callout warn"><b>Pièges</b> $|3 - 4\mathrm{i}| = \sqrt{3^2 + 4^2}$, ni $\sqrt{3^2 - 4^2}$ ni $3 + 4$ : on ne met jamais le $\mathrm{i}$ dans le module. $|z + a|$ est la distance au point d'affixe $-a$. Le module est multiplicatif mais pas additif : $|z + z'| \neq |z| + |z'|$ en général.</div>
<div class="callout key"><b>À retenir</b> Module = distance à l'origine ; $|z_B - z_A| = AB$ ; $|zz'| = |z||z'|$ ; $|z|^2 = z\overline{z}$.</div>`
    },
    {
      id: 'm7-s-argument',
      title: 'Argument d\'un complexe non nul',
      html: String.raw`
<p>Pour $z \neq 0$ d'image $M$, un <b>argument</b> de $z$ est une mesure $\theta$ de l'angle orienté $(\vec{u}, \overrightarrow{OM})$. Il est défini <b>modulo $2\pi$</b> : on note $\arg z \equiv \theta \ [2\pi]$. L'<b>argument principal</b> est l'unique argument dans $]-\pi, \pi]$. Le nombre $0$ n'a pas d'argument.</p>
<h4>Méthode 1 : cosinus et sinus (toujours sûre)</h4>
<p>Avec $r = |z| = \sqrt{a^2 + b^2}$ :
$$\cos\theta = \frac{a}{r}, \qquad \sin\theta = \frac{b}{r}.$$
On reconnaît des valeurs remarquables sur le cercle trigonométrique ; le signe de $\sin\theta$ tranche entre $\theta$ et $-\theta$, celui de $\cos\theta$ entre $\theta$ et $\pi - \theta$.</p>
<div class="widget" data-w="cercle"></div>
<h4>Méthode 2 : arctangente, en tenant compte du quadrant</h4>
<p>$\arctan$ renvoie un angle de $]-\frac{\pi}{2}, \frac{\pi}{2}[$ : elle ne « voit » que le demi-plan $a \gt 0$. Comme $\tan\theta = \frac{b}{a}$ ne connaît pas les signes de $a$ et $b$ séparément, il faut corriger :
$$\arg z = \begin{cases} \arctan\frac{b}{a} & \text{si } a \gt 0 \\ \arctan\frac{b}{a} + \pi & \text{si } a \lt 0 \text{ et } b \geq 0 \\ \arctan\frac{b}{a} - \pi & \text{si } a \lt 0 \text{ et } b \lt 0 \\ \frac{\pi}{2} \ \text{ (resp. } -\frac{\pi}{2}\text{)} & \text{si } a = 0 \text{ et } b \gt 0 \text{ (resp. } b \lt 0\text{)} \end{cases}$$
C'est exactement la fonction <b>atan2(b, a)</b> des langages de programmation et des calculatrices.</p>
<h4>Propriétés (modulo $2\pi$)</h4>
<ul>
<li>$\arg(zz') \equiv \arg z + \arg z'$, $\arg\left(\frac{z}{z'}\right) \equiv \arg z - \arg z'$, $\arg(z^n) \equiv n\arg z$.</li>
<li>$\arg \overline{z} \equiv -\arg z$, $\arg\left(\frac{1}{z}\right) \equiv -\arg z$, $\arg(-z) \equiv \arg z + \pi$, $\arg(kz) \equiv \arg z$ pour $k \gt 0$.</li>
<li>$z \in \mathbb{R}_+^*$ : $\arg z \equiv 0$ ; $z \in \mathbb{R}_-^*$ : $\arg z \equiv \pi$ ; $z = \mathrm{i}b$ avec $b \gt 0$ : $\arg z \equiv \frac{\pi}{2}$.</li>
<li>Angles : $(\overrightarrow{AB}, \overrightarrow{AC}) \equiv \arg\dfrac{z_C - z_A}{z_B - z_A}\ [2\pi]$. Donc $A, B, C$ alignés $\iff$ ce quotient est réel ; $(AB) \perp (AC) \iff$ il est imaginaire pur.</li>
</ul>
<div class="callout tip"><b>Exemple corrigé</b> $z = -1 + \mathrm{i}\sqrt{3}$ : $r = \sqrt{1 + 3} = 2$, $\cos\theta = -\frac{1}{2}$ et $\sin\theta = \frac{\sqrt{3}}{2}$, donc $\theta = \frac{2\pi}{3}$.
Par l'arctangente : $a \lt 0$ et $b \gt 0$, donc $\theta = \arctan(-\sqrt{3}) + \pi = -\frac{\pi}{3} + \pi = \frac{2\pi}{3}$.
Pour $z = -1 - \mathrm{i}$ : $a \lt 0$, $b \lt 0$, donc $\theta = \arctan(1) - \pi = \frac{\pi}{4} - \pi = -\frac{3\pi}{4}$.</div>
<div class="callout warn"><b>Pièges</b> $\arg(-1 - \mathrm{i}) \neq \arctan\frac{-1}{-1} = \frac{\pi}{4}$ : le point est dans le 3e quadrant ! Toujours <b>placer le point</b> avant de conclure. $\frac{5\pi}{4}$ est bien un argument de $-1-\mathrm{i}$, mais pas l'argument principal. L'argument d'un produit est la <i>somme</i> des arguments, pas leur produit.</div>
<div class="callout key"><b>À retenir</b> $\arg z$ est défini modulo $2\pi$ ; argument principal dans $]-\pi, \pi]$ ; avec $\arctan\frac{b}{a}$, corriger de $\pm\pi$ quand $a \lt 0$.</div>`
    },
    {
      id: 'm7-s-expo',
      title: 'Formes trigonométrique et exponentielle',
      html: String.raw`
<p>On note $\mathrm{e}^{\mathrm{i}\theta} = \cos\theta + \mathrm{i}\sin\theta$ : c'est le point du cercle unité d'angle $\theta$. Tout $z \neq 0$ de module $r$ et d'argument $\theta$ s'écrit
$$z = r(\cos\theta + \mathrm{i}\sin\theta) = r\,\mathrm{e}^{\mathrm{i}\theta}, \qquad r \gt 0$$
(forme <b>trigonométrique</b>, puis forme <b>exponentielle</b>). Réciproquement, si $z = r\mathrm{e}^{\mathrm{i}\theta}$ avec $r \gt 0$, alors $|z| = r$ et $\arg z \equiv \theta\ [2\pi]$.</p>
<h4>Règles de calcul</h4>
<p>$$\mathrm{e}^{\mathrm{i}\theta}\,\mathrm{e}^{\mathrm{i}\theta'} = \mathrm{e}^{\mathrm{i}(\theta + \theta')}, \qquad \frac{1}{\mathrm{e}^{\mathrm{i}\theta}} = \mathrm{e}^{-\mathrm{i}\theta} = \overline{\mathrm{e}^{\mathrm{i}\theta}}, \qquad \left(\mathrm{e}^{\mathrm{i}\theta}\right)^n = \mathrm{e}^{\mathrm{i}n\theta}, \qquad |\mathrm{e}^{\mathrm{i}\theta}| = 1.$$
Donc : <b>produit</b> → modules multipliés, arguments additionnés ; <b>quotient</b> → modules divisés, arguments soustraits ; <b>puissance</b> → $\left(r\mathrm{e}^{\mathrm{i}\theta}\right)^n = r^n\mathrm{e}^{\mathrm{i}n\theta}$.</p>
<p>Valeurs à connaître : $\mathrm{e}^{0} = 1$, $\mathrm{e}^{\mathrm{i}\pi/2} = \mathrm{i}$, $\mathrm{e}^{\mathrm{i}\pi} = -1$, $\mathrm{e}^{-\mathrm{i}\pi/2} = -\mathrm{i}$, $\mathrm{e}^{2\mathrm{i}\pi} = 1$, et $\mathrm{e}^{\mathrm{i}\theta} = \mathrm{e}^{\mathrm{i}\theta'} \iff \theta \equiv \theta'\ [2\pi]$. Plus généralement, pour $z = a + \mathrm{i}b$ : $\mathrm{e}^{z} = \mathrm{e}^{a}\,\mathrm{e}^{\mathrm{i}b}$ (module $\mathrm{e}^a$, argument $b$).</p>
<h4>Méthode : passer d'une forme à l'autre</h4>
<ul>
<li>Algébrique → exponentielle : calculer $r = \sqrt{a^2+b^2}$, puis $\theta$ (cos/sin, ou arctan avec quadrant). Astuce : factoriser par le module, par exemple $1 + \mathrm{i} = \sqrt{2}\left(\frac{\sqrt{2}}{2} + \mathrm{i}\frac{\sqrt{2}}{2}\right) = \sqrt{2}\,\mathrm{e}^{\mathrm{i}\pi/4}$.</li>
<li>Exponentielle → algébrique : $a = r\cos\theta$, $b = r\sin\theta$. Par exemple $2\mathrm{e}^{\mathrm{i}\pi/3} = 2\left(\frac{1}{2} + \mathrm{i}\frac{\sqrt{3}}{2}\right) = 1 + \mathrm{i}\sqrt{3}$.</li>
<li>Sommes → forme algébrique ; produits, quotients, puissances → forme exponentielle.</li>
</ul>
<div class="callout tip"><b>Exemple corrigé</b> Calculer $(1 + \mathrm{i}\sqrt{3})^6$. On a $1 + \mathrm{i}\sqrt{3} = 2\mathrm{e}^{\mathrm{i}\pi/3}$, donc $(1 + \mathrm{i}\sqrt{3})^6 = 2^6\,\mathrm{e}^{6\mathrm{i}\pi/3} = 64\,\mathrm{e}^{2\mathrm{i}\pi} = 64$.
De même $1 - \mathrm{i} = \sqrt{2}\,\mathrm{e}^{-\mathrm{i}\pi/4}$, d'où $(1 - \mathrm{i})^5 = (\sqrt{2})^5\,\mathrm{e}^{-5\mathrm{i}\pi/4} = 4\sqrt{2}\left(-\frac{\sqrt{2}}{2} + \mathrm{i}\frac{\sqrt{2}}{2}\right) = -4 + 4\mathrm{i}$.</div>
<div class="callout warn"><b>Pièges</b> Dans $r\mathrm{e}^{\mathrm{i}\theta}$, $r$ doit être <b>strictement positif</b> : $-2\mathrm{e}^{\mathrm{i}\pi/3}$ n'est pas une forme exponentielle ; on écrit $-2\mathrm{e}^{\mathrm{i}\pi/3} = 2\mathrm{e}^{\mathrm{i}\pi}\mathrm{e}^{\mathrm{i}\pi/3} = 2\mathrm{e}^{-2\mathrm{i}\pi/3}$. Et $\mathrm{e}^{\mathrm{i}\theta} + \mathrm{e}^{\mathrm{i}\theta'} \neq \mathrm{e}^{\mathrm{i}(\theta + \theta')}$ : la forme exponentielle est faite pour les produits.</div>
<div class="callout key"><b>À retenir</b> $z = r\mathrm{e}^{\mathrm{i}\theta}$ avec $r = |z| \gt 0$ et $\theta = \arg z$ ; dans un produit, les modules se multiplient et les arguments s'ajoutent.</div>`
    },
    {
      id: 'm7-s-euler',
      title: 'Formules d\'Euler et de Moivre',
      html: String.raw`
<h3>Formules d'Euler</h3>
<p>En additionnant puis en soustrayant $\mathrm{e}^{\mathrm{i}\theta} = \cos\theta + \mathrm{i}\sin\theta$ et $\mathrm{e}^{-\mathrm{i}\theta} = \cos\theta - \mathrm{i}\sin\theta$ :
$$\cos\theta = \frac{\mathrm{e}^{\mathrm{i}\theta} + \mathrm{e}^{-\mathrm{i}\theta}}{2}, \qquad \sin\theta = \frac{\mathrm{e}^{\mathrm{i}\theta} - \mathrm{e}^{-\mathrm{i}\theta}}{2\mathrm{i}}.$$</p>
<h3>Formule de Moivre</h3>
<p>Pour tout $n \in \mathbb{Z}$ et tout réel $\theta$ :
$$(\cos\theta + \mathrm{i}\sin\theta)^n = \cos(n\theta) + \mathrm{i}\sin(n\theta)$$
(c'est simplement $\left(\mathrm{e}^{\mathrm{i}\theta}\right)^n = \mathrm{e}^{\mathrm{i}n\theta}$).</p>
<h4>Application 1 : linéariser $\cos^p x\,\sin^q x$</h4>
<p><b>Méthode :</b> (1) remplacer $\cos$ et $\sin$ par les formules d'Euler ; (2) développer avec le binôme de Newton ; (3) regrouper les termes conjugués : $\mathrm{e}^{\mathrm{i}kx} + \mathrm{e}^{-\mathrm{i}kx} = 2\cos(kx)$ et $\mathrm{e}^{\mathrm{i}kx} - \mathrm{e}^{-\mathrm{i}kx} = 2\mathrm{i}\sin(kx)$. On obtient une somme de $\cos(kx)$ et $\sin(kx)$ : indispensable pour <b>primitiver</b> et pour les séries de Fourier.</p>
<div class="callout tip"><b>Exemple corrigé</b> $\cos^3 x = \left(\dfrac{\mathrm{e}^{\mathrm{i}x} + \mathrm{e}^{-\mathrm{i}x}}{2}\right)^3 = \dfrac{\mathrm{e}^{3\mathrm{i}x} + 3\mathrm{e}^{\mathrm{i}x} + 3\mathrm{e}^{-\mathrm{i}x} + \mathrm{e}^{-3\mathrm{i}x}}{8} = \dfrac{2\cos 3x + 6\cos x}{8} = \dfrac{\cos 3x + 3\cos x}{4}$.
Pour $\sin^3 x$, attention au dénominateur : $(2\mathrm{i})^3 = -8\mathrm{i}$, d'où $\sin^3 x = \dfrac{2\mathrm{i}\sin 3x - 6\mathrm{i}\sin x}{-8\mathrm{i}} = \dfrac{3\sin x - \sin 3x}{4}$.</div>
<h4>Application 2 : exprimer $\cos(nx)$ et $\sin(nx)$ en fonction de $\cos x$ et $\sin x$</h4>
<p><b>Méthode :</b> $\cos(nx) = \operatorname{Re}\left((\cos x + \mathrm{i}\sin x)^n\right)$ et $\sin(nx) = \operatorname{Im}\left((\cos x + \mathrm{i}\sin x)^n\right)$ ; on développe par le binôme puis on remplace $\sin^2 x$ par $1 - \cos^2 x$ (ou l'inverse).
Pour $n = 3$, en notant $c = \cos x$ et $s = \sin x$ : $(c + \mathrm{i}s)^3 = c^3 + 3\mathrm{i}c^2 s - 3cs^2 - \mathrm{i}s^3$, donc
$$\cos 3x = c^3 - 3cs^2 = 4\cos^3 x - 3\cos x, \qquad \sin 3x = 3c^2 s - s^3 = 3\sin x - 4\sin^3 x.$$</p>
<h4>Application 3 : factorisation par l'angle moitié</h4>
<p>$$\mathrm{e}^{\mathrm{i}a} + \mathrm{e}^{\mathrm{i}b} = 2\cos\left(\frac{a-b}{2}\right)\mathrm{e}^{\mathrm{i}\frac{a+b}{2}}, \qquad 1 + \mathrm{e}^{\mathrm{i}\theta} = 2\cos\frac{\theta}{2}\,\mathrm{e}^{\mathrm{i}\theta/2}, \qquad 1 - \mathrm{e}^{\mathrm{i}\theta} = -2\mathrm{i}\sin\frac{\theta}{2}\,\mathrm{e}^{\mathrm{i}\theta/2}.$$
On en tire le module et l'argument de $1 + \mathrm{e}^{\mathrm{i}\theta}$ : pour $\theta \in ]-\pi, \pi[$, $\cos\frac{\theta}{2} \gt 0$ donc $|1 + \mathrm{e}^{\mathrm{i}\theta}| = 2\cos\frac{\theta}{2}$ et $\arg(1 + \mathrm{e}^{\mathrm{i}\theta}) = \frac{\theta}{2}$.</p>
<div class="callout warn"><b>Pièges</b> Le dénominateur de $\sin\theta$ est $2\mathrm{i}$, pas $2$. Moivre : $(\cos\theta + \mathrm{i}\sin\theta)^n \neq \cos^n\theta + \mathrm{i}\sin^n\theta$. Après une linéarisation, <b>vérifier en $x = 0$</b> (et en $x = \frac{\pi}{2}$) : $\cos^3 0 = 1 = \frac{1 + 3}{4}$.</div>
<div class="callout key"><b>À retenir</b> Euler pour linéariser (puissances → angles multiples), Moivre pour le sens inverse (angles multiples → puissances).</div>`
    },
    {
      id: 'm7-s-equations',
      title: 'Racines n-ièmes et équations du second degré',
      html: String.raw`
<h3>Racines n-ièmes de l'unité</h3>
<p>Pour $n \geq 1$, l'équation $z^n = 1$ a exactement $n$ solutions dans $\mathbb{C}$ :
$$\omega_k = \mathrm{e}^{\frac{2\mathrm{i}k\pi}{n}}, \qquad k \in \{0, 1, \ldots, n-1\}.$$
Leurs images sont les sommets d'un <b>polygone régulier</b> à $n$ côtés inscrit dans le cercle unité, dont l'un est le point d'affixe 1. Pour $n \geq 2$, leur <b>somme est nulle</b> : $\sum_{k=0}^{n-1}\omega_k = 0$ (somme géométrique de raison $\omega_1 \neq 1$).</p>
<ul>
<li>$n = 2$ : $\pm 1$ ; $n = 4$ : $1, \mathrm{i}, -1, -\mathrm{i}$.</li>
<li>$n = 3$ : $1$, $j = \mathrm{e}^{2\mathrm{i}\pi/3} = -\frac{1}{2} + \mathrm{i}\frac{\sqrt{3}}{2}$ et $j^2 = \overline{j} = -\frac{1}{2} - \mathrm{i}\frac{\sqrt{3}}{2}$, avec $1 + j + j^2 = 0$ et $j^3 = 1$.</li>
</ul>
<h3>Racines n-ièmes d'un complexe non nul</h3>
<p><b>Méthode :</b> écrire $A = \rho\,\mathrm{e}^{\mathrm{i}\alpha}$ et chercher $z = r\mathrm{e}^{\mathrm{i}\theta}$ : $z^n = A \iff r^n = \rho$ et $n\theta \equiv \alpha\ [2\pi]$, donc
$$z_k = \rho^{1/n}\,\mathrm{e}^{\mathrm{i}\frac{\alpha + 2k\pi}{n}}, \qquad k \in \{0, \ldots, n-1\}.$$
On peut aussi trouver une solution $z_0$ puis multiplier par les racines n-ièmes de l'unité.</p>
<div class="callout tip"><b>Exemple corrigé</b> $z^3 = 8\mathrm{i} = 8\,\mathrm{e}^{\mathrm{i}\pi/2}$ : $r = \sqrt[3]{8} = 2$ et $\theta = \frac{\pi}{6} + \frac{2k\pi}{3}$. Solutions : $2\mathrm{e}^{\mathrm{i}\pi/6} = \sqrt{3} + \mathrm{i}$, $2\mathrm{e}^{5\mathrm{i}\pi/6} = -\sqrt{3} + \mathrm{i}$ et $2\mathrm{e}^{3\mathrm{i}\pi/2} = -2\mathrm{i}$.</div>
<h3>Racine carrée d'un complexe : méthode algébrique</h3>
<p>Quand l'argument n'est pas remarquable, on résout $(x + \mathrm{i}y)^2 = a + \mathrm{i}b$ en identifiant parties réelles et imaginaires, et on ajoute l'égalité des modules :
$$\begin{cases} x^2 - y^2 = a \\ x^2 + y^2 = \sqrt{a^2 + b^2} \\ 2xy = b \end{cases}$$
Les deux premières lignes donnent $x^2$ et $y^2$ ; la troisième donne le <b>signe de $xy$</b> (celui de $b$). Il y a toujours deux racines carrées, opposées.</p>
<p>Exemple : $\delta^2 = 3 + 4\mathrm{i}$ donne $x^2 - y^2 = 3$, $x^2 + y^2 = 5$, d'où $x^2 = 4$, $y^2 = 1$ et $xy \gt 0$ : $\delta = \pm(2 + \mathrm{i})$.</p>
<h3>Équation $az^2 + bz + c = 0$ ($a \neq 0$)</h3>
<p>On calcule $\Delta = b^2 - 4ac$. Si $\Delta = 0$ : racine double $-\frac{b}{2a}$. Sinon, si $\delta$ est une racine carrée de $\Delta$ ($\delta^2 = \Delta$) :
$$z_{1,2} = \frac{-b \pm \delta}{2a}.$$</p>
<ul>
<li><b>Coefficients réels et $\Delta \lt 0$</b> : $\delta = \mathrm{i}\sqrt{-\Delta}$, deux racines <b>conjuguées</b> $z = \dfrac{-b \pm \mathrm{i}\sqrt{-\Delta}}{2a}$.</li>
<li>Relations coefficients–racines (toujours vraies) : $z_1 + z_2 = -\frac{b}{a}$ et $z_1 z_2 = \frac{c}{a}$.</li>
<li>Théorème de d'Alembert-Gauss : tout polynôme de degré $n \geq 1$ a exactement $n$ racines dans $\mathbb{C}$, comptées avec multiplicité.</li>
</ul>
<div class="callout tip"><b>Exemple corrigé</b> $z^2 - 2z + 5 = 0$ : $\Delta = 4 - 20 = -16 = (4\mathrm{i})^2$, donc $z = \frac{2 \pm 4\mathrm{i}}{2} = 1 \pm 2\mathrm{i}$.
Avec des coefficients complexes, $z^2 - 3z + 3 + \mathrm{i} = 0$ : $\Delta = 9 - 4(3 + \mathrm{i}) = -3 - 4\mathrm{i}$ ; le système $x^2 - y^2 = -3$, $x^2 + y^2 = 5$, $xy \lt 0$ donne $\delta = 1 - 2\mathrm{i}$ ; enfin $z = \frac{3 \pm (1 - 2\mathrm{i})}{2}$, soit $2 - \mathrm{i}$ et $1 + \mathrm{i}$.</div>
<div class="callout warn"><b>Pièges</b> Ne jamais écrire $\sqrt{-16}$ ni $\sqrt{\Delta}$ pour un $\Delta$ complexe : le symbole $\sqrt{\ }$ est réservé aux réels positifs ; on cherche « une » racine carrée $\delta$. Ne pas oublier de diviser par $2a$. Pour $z^n = A$, il y a $n$ solutions, et le module prend aussi une racine : $\rho^{1/n}$.</div>
<div class="callout key"><b>À retenir</b> $z^n = 1$ : $n$ racines $\mathrm{e}^{2\mathrm{i}k\pi/n}$, de somme nulle ; coefficients réels et $\Delta \lt 0$ : $\frac{-b \pm \mathrm{i}\sqrt{-\Delta}}{2a}$ ; racine carrée d'un complexe : système à trois équations.</div>`
    },
    {
      id: 'm7-s-transfo',
      title: 'Transformations du plan',
      html: String.raw`
<p>Une écriture complexe $z \mapsto z'$ décrit une transformation du plan : le point $M(z)$ a pour image $M'(z')$.</p>
<table class="tbl">
<tr><th>Transformation</th><th>Écriture complexe</th><th>Remarque</th></tr>
<tr><td>Translation de vecteur $\vec{w}$ d'affixe $b$</td><td>$z' = z + b$</td><td>aucun point fixe si $b \neq 0$</td></tr>
<tr><td>Homothétie de centre $\Omega(\omega)$, de rapport $k \in \mathbb{R}^*$</td><td>$z' - \omega = k(z - \omega)$</td><td>$k = -1$ : symétrie de centre $\Omega$</td></tr>
<tr><td>Rotation de centre $\Omega(\omega)$, d'angle $\theta$</td><td>$z' - \omega = \mathrm{e}^{\mathrm{i}\theta}(z - \omega)$</td><td>$\Omega M' = \Omega M$</td></tr>
<tr><td>Symétrie d'axe réel</td><td>$z' = \overline{z}$</td><td>renverse les angles</td></tr>
<tr><td>Similitude directe</td><td>$z' = az + b$, $a = r\mathrm{e}^{\mathrm{i}\theta} \neq 1$</td><td>rotation d'angle $\theta$ et homothétie de rapport $r$, de même centre</td></tr>
</table>
<h4>Méthode : reconnaître $z' = az + b$</h4>
<ul>
<li>Si $a = 1$ : translation de vecteur d'affixe $b$.</li>
<li>Sinon, chercher le point fixe : $\omega = a\omega + b \iff \omega = \dfrac{b}{1 - a}$. On a alors $z' - \omega = a(z - \omega)$.</li>
<li>$a$ réel : homothétie de rapport $a$ ; $|a| = 1$ : rotation d'angle $\arg a$ ; sinon : composée des deux.</li>
</ul>
<p>Cas particuliers : $z \mapsto \mathrm{i}z$ est la rotation de centre $O$ d'angle $\frac{\pi}{2}$ ; $z \mapsto -z$ la symétrie de centre $O$ ; $z \mapsto -\overline{z}$ la symétrie d'axe imaginaire.</p>
<div class="callout tip"><b>Exemple corrigé</b> Image de $A(2 + \mathrm{i})$ par la rotation de centre $\Omega(1)$ et d'angle $\frac{\pi}{2}$ : $z' = 1 + \mathrm{i}\,(2 + \mathrm{i} - 1) = 1 + \mathrm{i}(1 + \mathrm{i}) = 1 + \mathrm{i} - 1 = \mathrm{i}$.
La transformation $z \mapsto 2z + 1$ a pour point fixe $\omega = \frac{1}{1 - 2} = -1$ : c'est l'homothétie de centre $\Omega(-1)$ et de rapport 2.</div>
<div class="callout warn"><b>Pièges</b> Pour une rotation de centre $\Omega \neq O$, on ne fait pas $z' = \mathrm{e}^{\mathrm{i}\theta}z$ : il faut centrer, $z' = \omega + \mathrm{e}^{\mathrm{i}\theta}(z - \omega)$. Le rapport d'une homothétie est réel : $z \mapsto \mathrm{i}z$ n'est pas une homothétie. Application utile : $ABC$ est équilatéral direct $\iff z_C - z_A = \mathrm{e}^{\mathrm{i}\pi/3}(z_B - z_A)$.</div>
<div class="callout key"><b>À retenir</b> Ajouter $b$ = translater ; multiplier par un réel $k$ = homothétie ; multiplier par $\mathrm{e}^{\mathrm{i}\theta}$ = tourner de $\theta$ (toujours autour du centre : $z - \omega$).</div>`
    },
    {
      id: 'm7-s-electro',
      title: 'Application : électronique et notation j',
      html: String.raw`
<p>En électricité, la lettre $i$ désigne l'intensité : on note donc $j$ l'unité imaginaire, avec $j^2 = -1$. Attention : ce $j$ n'a rien à voir avec le $j = \mathrm{e}^{2\mathrm{i}\pi/3}$ des mathématiciens !</p>
<h4>Notation complexe d'un signal sinusoïdal</h4>
<p>À $u(t) = U_m\cos(\omega t + \varphi)$ on associe le signal complexe $U_m\,\mathrm{e}^{j(\omega t + \varphi)} = \left(U_m\mathrm{e}^{j\varphi}\right)\mathrm{e}^{j\omega t}$ ; $u(t)$ en est la partie réelle. L'<b>amplitude complexe</b> $U_m\mathrm{e}^{j\varphi}$ a pour <b>module l'amplitude</b> et pour <b>argument la phase</b>. Dériver par rapport à $t$ revient à <b>multiplier par $j\omega$</b> ; intégrer, à diviser par $j\omega$ : les équations différentielles des circuits en régime sinusoïdal deviennent algébriques.</p>
<h4>Impédances complexes</h4>
<p>Loi d'Ohm généralisée : $U = Z\,I$ (amplitudes complexes).</p>
<table class="tbl">
<tr><th>Dipôle</th><th>Loi temporelle</th><th>Impédance $Z$</th><th>Module</th><th>Argument</th></tr>
<tr><td>Résistance</td><td>$u = Ri$</td><td>$R$</td><td>$R$</td><td>$0$</td></tr>
<tr><td>Bobine</td><td>$u = L\dfrac{\mathrm{d}i}{\mathrm{d}t}$</td><td>$jL\omega$</td><td>$L\omega$</td><td>$+\frac{\pi}{2}$ (tension en avance)</td></tr>
<tr><td>Condensateur</td><td>$i = C\dfrac{\mathrm{d}u}{\mathrm{d}t}$</td><td>$\dfrac{1}{jC\omega} = -\dfrac{j}{C\omega}$</td><td>$\dfrac{1}{C\omega}$</td><td>$-\frac{\pi}{2}$ (tension en retard)</td></tr>
</table>
<p>Associations : en <b>série</b>, les impédances s'additionnent, $Z = Z_1 + Z_2$ ; en <b>parallèle</b>, les admittances $\frac{1}{Z}$ s'additionnent, $\frac{1}{Z} = \frac{1}{Z_1} + \frac{1}{Z_2}$, soit $Z = \dfrac{Z_1 Z_2}{Z_1 + Z_2}$.</p>
<h4>Fonction de transfert : module et phase</h4>
<p>$H(j\omega) = \dfrac{U_s}{U_e}$ (rapport des amplitudes complexes). Le <b>gain</b> est $|H|$ (en décibels : $G_{\mathrm{dB}} = 20\log_{10}|H|$) et le <b>déphasage</b> de la sortie sur l'entrée est $\varphi = \arg H$. Pour un quotient : $\left|\frac{N}{D}\right| = \frac{|N|}{|D|}$ et $\arg\frac{N}{D} = \arg N - \arg D$.</p>
<div class="callout tip"><b>Exemple corrigé : filtre RC passe-bas</b> Par le pont diviseur, $H = \dfrac{\frac{1}{jC\omega}}{R + \frac{1}{jC\omega}} = \dfrac{1}{1 + jRC\omega}$. Avec $x = RC\omega$ : $|H| = \dfrac{1}{\sqrt{1 + x^2}}$ et $\varphi = -\arg(1 + jx) = -\arctan x$ (partie réelle du dénominateur positive : pas de correction). À la pulsation de coupure $\omega_c = \frac{1}{RC}$ : $|H| = \frac{1}{\sqrt{2}}$, $G_{\mathrm{dB}} = -10\log_{10}2 \approx -3\ \mathrm{dB}$ et $\varphi = -\frac{\pi}{4}$.</div>
<div class="callout warn"><b>Pièges</b> $\frac{1}{j} = -j$ (et non $j$). Le module d'une somme n'est pas la somme des modules : $|R + jL\omega| = \sqrt{R^2 + L^2\omega^2}$. Si la partie réelle d'un numérateur ou dénominateur est négative, l'arctangente doit être corrigée de $\pm\pi$.</div>
<div class="callout key"><b>À retenir</b> $Z_R = R$, $Z_L = jL\omega$, $Z_C = \frac{1}{jC\omega}$ ; gain = module, déphasage = argument ; $\frac{\mathrm{d}}{\mathrm{d}t} \leftrightarrow \times j\omega$.</div>`
    },
    {
      id: 'm7-s-memo',
      title: 'Mémo : nombres complexes',
      html: String.raw`
<table class="tbl">
<tr><th>Notion</th><th>À savoir par cœur</th></tr>
<tr><td>Forme algébrique</td><td>$z = a + \mathrm{i}b$, $\mathrm{i}^2 = -1$, $\overline{z} = a - \mathrm{i}b$, $z\overline{z} = a^2 + b^2$</td></tr>
<tr><td>Module</td><td>$|z| = \sqrt{a^2 + b^2}$, $|zz'| = |z||z'|$, $|z + z'| \leq |z| + |z'|$, $AB = |z_B - z_A|$</td></tr>
<tr><td>Inverse, quotient</td><td>$\frac{1}{z} = \frac{\overline{z}}{|z|^2}$ ; multiplier par le conjugué du dénominateur</td></tr>
<tr><td>Argument</td><td>$\cos\theta = \frac{a}{r}$, $\sin\theta = \frac{b}{r}$ ; $\arctan\frac{b}{a}$ corrigé de $\pm\pi$ si $a \lt 0$ ; principal dans $]-\pi, \pi]$</td></tr>
<tr><td>Forme exponentielle</td><td>$z = r\mathrm{e}^{\mathrm{i}\theta}$ ($r \gt 0$) ; produit : modules multipliés, arguments ajoutés</td></tr>
<tr><td>Euler</td><td>$\cos\theta = \frac{\mathrm{e}^{\mathrm{i}\theta} + \mathrm{e}^{-\mathrm{i}\theta}}{2}$, $\sin\theta = \frac{\mathrm{e}^{\mathrm{i}\theta} - \mathrm{e}^{-\mathrm{i}\theta}}{2\mathrm{i}}$</td></tr>
<tr><td>Moivre</td><td>$(\cos\theta + \mathrm{i}\sin\theta)^n = \cos n\theta + \mathrm{i}\sin n\theta$</td></tr>
<tr><td>Racines n-ièmes</td><td>$z^n = \rho\mathrm{e}^{\mathrm{i}\alpha} \iff z = \rho^{1/n}\mathrm{e}^{\mathrm{i}(\alpha + 2k\pi)/n}$, $0 \leq k \leq n-1$</td></tr>
<tr><td>Second degré</td><td>$z = \frac{-b \pm \delta}{2a}$ avec $\delta^2 = \Delta$ ; si coefficients réels et $\Delta \lt 0$ : $\delta = \mathrm{i}\sqrt{-\Delta}$</td></tr>
<tr><td>Transformations</td><td>translation $z + b$ ; homothétie $\omega + k(z - \omega)$ ; rotation $\omega + \mathrm{e}^{\mathrm{i}\theta}(z - \omega)$</td></tr>
<tr><td>Électronique</td><td>$Z_R = R$, $Z_L = jL\omega$, $Z_C = \frac{1}{jC\omega}$ ; $G_{\mathrm{dB}} = 20\log|H|$, $\varphi = \arg H$</td></tr>
</table>
<div class="flow"><span>Somme : forme algébrique</span><span>Produit, quotient, puissance : forme exponentielle</span><span>Retour : $a = r\cos\theta$, $b = r\sin\theta$</span></div>
<div class="grid2">
<div class="mini"><h4>Valeurs clés</h4><p>$\mathrm{e}^{\mathrm{i}\pi} = -1$, $\mathrm{e}^{\mathrm{i}\pi/2} = \mathrm{i}$, $1 + \mathrm{i} = \sqrt{2}\,\mathrm{e}^{\mathrm{i}\pi/4}$, $1 + \mathrm{i}\sqrt{3} = 2\mathrm{e}^{\mathrm{i}\pi/3}$, $\frac{1}{\mathrm{i}} = -\mathrm{i}$.</p></div>
<div class="mini"><h4>Linéarisations</h4><p>$\cos^2 x = \frac{1 + \cos 2x}{2}$, $\sin^2 x = \frac{1 - \cos 2x}{2}$, $\cos^3 x = \frac{\cos 3x + 3\cos x}{4}$, $\sin^3 x = \frac{3\sin x - \sin 3x}{4}$.</p></div>
</div>
<div class="callout key"><b>Réflexes</b> Placer le point avant de donner un argument ; multiplier par le conjugué pour un quotient ; vérifier une linéarisation en $x = 0$ ; en électronique, $\frac{1}{j} = -j$.</div>`
    }
  ],

  /* ======================= FORMULAIRE ======================= */
  formulas: [
    { id: 'm7-fo-i2', name: 'Unité imaginaire', tex: String.raw`\mathrm{i}^2 = -1`, note: String.raw`$\mathrm{i}^3 = -\mathrm{i}$, $\mathrm{i}^4 = 1$ : $\mathrm{i}^n$ dépend du reste de $n$ modulo 4.` },
    { id: 'm7-fo-alg', name: 'Forme algébrique', tex: String.raw`z = a + \mathrm{i}b,\quad a = \operatorname{Re} z,\ b = \operatorname{Im} z \in \mathbb{R}`, note: String.raw`Unicité : $a + \mathrm{i}b = a' + \mathrm{i}b' \iff a = a'$ et $b = b'$.` },
    { id: 'm7-fo-produit', name: 'Produit en forme algébrique', tex: String.raw`(a+\mathrm{i}b)(c+\mathrm{i}d) = (ac - bd) + \mathrm{i}(ad + bc)` },
    { id: 'm7-fo-carre', name: 'Carré d\'un complexe', tex: String.raw`(a + \mathrm{i}b)^2 = a^2 - b^2 + 2\mathrm{i}ab`, note: String.raw`En particulier $(1 + \mathrm{i})^2 = 2\mathrm{i}$ et $(1 - \mathrm{i})^2 = -2\mathrm{i}$.` },
    { id: 'm7-fo-conj', name: 'Conjugué', tex: String.raw`\overline{a + \mathrm{i}b} = a - \mathrm{i}b`, note: String.raw`$z \in \mathbb{R} \iff \overline{z} = z$ ; $z \in \mathrm{i}\mathbb{R} \iff \overline{z} = -z$.` },
    { id: 'm7-fo-conj-prop', name: 'Propriétés du conjugué', tex: String.raw`\overline{z + z'} = \overline{z} + \overline{z'},\quad \overline{zz'} = \overline{z}\,\overline{z'},\quad \overline{\left(\frac{z}{z'}\right)} = \frac{\overline{z}}{\overline{z'}}`, note: String.raw`et $\overline{z^n} = \overline{z}^{\,n}$.` },
    { id: 'm7-fo-re-im', name: 'Parties réelle et imaginaire via le conjugué', tex: String.raw`\operatorname{Re} z = \frac{z + \overline{z}}{2},\qquad \operatorname{Im} z = \frac{z - \overline{z}}{2\mathrm{i}}` },
    { id: 'm7-fo-zzbar', name: 'Produit d\'un complexe par son conjugué', tex: String.raw`z\,\overline{z} = a^2 + b^2 = |z|^2` },
    { id: 'm7-fo-inverse', name: 'Inverse', tex: String.raw`\frac{1}{a + \mathrm{i}b} = \frac{a - \mathrm{i}b}{a^2 + b^2} = \frac{\overline{z}}{|z|^2}`, note: String.raw`En particulier $\frac{1}{\mathrm{i}} = -\mathrm{i}$.` },
    { id: 'm7-fo-quotient', name: 'Quotient', tex: String.raw`\frac{z}{z'} = \frac{z\,\overline{z'}}{|z'|^2}`, note: String.raw`On multiplie haut et bas par le conjugué du dénominateur.` },
    { id: 'm7-fo-module', name: 'Module', tex: String.raw`|a + \mathrm{i}b| = \sqrt{a^2 + b^2}`, note: String.raw`C'est la distance $OM$ ; pour un réel, c'est la valeur absolue.` },
    { id: 'm7-fo-module-prop', name: 'Module d\'un produit, d\'un quotient, d\'une puissance', tex: String.raw`|zz'| = |z|\,|z'|,\quad \left|\frac{z}{z'}\right| = \frac{|z|}{|z'|},\quad |z^n| = |z|^n` },
    { id: 'm7-fo-triangulaire', name: 'Inégalité triangulaire', tex: String.raw`\big||z| - |z'|\big| \leq |z + z'| \leq |z| + |z'|` },
    { id: 'm7-fo-distance', name: 'Distance et vecteur', tex: String.raw`AB = |z_B - z_A|,\qquad z_{\overrightarrow{AB}} = z_B - z_A`, note: String.raw`Milieu de $[AB]$ : $\frac{z_A + z_B}{2}$.` },
    { id: 'm7-fo-cercle', name: 'Cercle et médiatrice', tex: String.raw`|z - a| = r \ \text{(cercle)},\qquad |z - a| = |z - b| \ \text{(médiatrice)}`, note: String.raw`Cercle de centre $A(a)$ de rayon $r$ ; médiatrice de $[AB]$.` },
    { id: 'm7-fo-arg-cos-sin', name: 'Argument par cosinus et sinus', tex: String.raw`\cos\theta = \frac{a}{|z|},\qquad \sin\theta = \frac{b}{|z|}`, note: String.raw`Argument principal : dans $]-\pi, \pi]$.` },
    { id: 'm7-fo-arg-arctan', name: 'Argument par arctangente (quadrants)', tex: String.raw`\arg z = \begin{cases} \arctan\frac{b}{a} & a > 0 \\ \arctan\frac{b}{a} + \pi & a < 0,\ b \geq 0 \\ \arctan\frac{b}{a} - \pi & a < 0,\ b < 0 \end{cases}`, note: String.raw`Si $a = 0$ : $\frac{\pi}{2}$ pour $b \gt 0$, $-\frac{\pi}{2}$ pour $b \lt 0$.` },
    { id: 'm7-fo-arg-prop', name: 'Argument d\'un produit, d\'un quotient', tex: String.raw`\arg(zz') \equiv \arg z + \arg z',\quad \arg\frac{z}{z'} \equiv \arg z - \arg z'\ [2\pi]`, note: String.raw`$\arg \overline{z} \equiv -\arg z$, $\arg(z^n) \equiv n\arg z$, $\arg(-z) \equiv \arg z + \pi$.` },
    { id: 'm7-fo-angle', name: 'Angle orienté de deux vecteurs', tex: String.raw`(\overrightarrow{AB}, \overrightarrow{AC}) \equiv \arg\frac{z_C - z_A}{z_B - z_A}\ [2\pi]`, note: String.raw`Quotient réel : alignés ; imaginaire pur : perpendiculaires.` },
    { id: 'm7-fo-trigo', name: 'Forme trigonométrique', tex: String.raw`z = r(\cos\theta + \mathrm{i}\sin\theta),\quad r = |z| > 0` },
    { id: 'm7-fo-expo', name: 'Exponentielle complexe', tex: String.raw`\mathrm{e}^{\mathrm{i}\theta} = \cos\theta + \mathrm{i}\sin\theta`, note: String.raw`$|\mathrm{e}^{\mathrm{i}\theta}| = 1$ ; $\mathrm{e}^{a + \mathrm{i}b} = \mathrm{e}^a\,\mathrm{e}^{\mathrm{i}b}$.` },
    { id: 'm7-fo-expo-prod', name: 'Produit et quotient en forme exponentielle', tex: String.raw`r\mathrm{e}^{\mathrm{i}\theta}\cdot r'\mathrm{e}^{\mathrm{i}\theta'} = rr'\,\mathrm{e}^{\mathrm{i}(\theta + \theta')},\qquad \frac{r\mathrm{e}^{\mathrm{i}\theta}}{r'\mathrm{e}^{\mathrm{i}\theta'}} = \frac{r}{r'}\mathrm{e}^{\mathrm{i}(\theta - \theta')}` },
    { id: 'm7-fo-expo-puiss', name: 'Puissance en forme exponentielle', tex: String.raw`\left(r\mathrm{e}^{\mathrm{i}\theta}\right)^n = r^n\,\mathrm{e}^{\mathrm{i}n\theta}` },
    { id: 'm7-fo-remarquables', name: 'Exponentielles remarquables', tex: String.raw`\mathrm{e}^{\mathrm{i}\pi} = -1,\quad \mathrm{e}^{\mathrm{i}\pi/2} = \mathrm{i},\quad \mathrm{e}^{2\mathrm{i}\pi} = 1`, note: String.raw`$1 + \mathrm{i} = \sqrt{2}\,\mathrm{e}^{\mathrm{i}\pi/4}$, $1 + \mathrm{i}\sqrt{3} = 2\mathrm{e}^{\mathrm{i}\pi/3}$, $\sqrt{3} + \mathrm{i} = 2\mathrm{e}^{\mathrm{i}\pi/6}$.` },
    { id: 'm7-fo-euler-cos', name: 'Formule d\'Euler (cosinus)', tex: String.raw`\cos\theta = \frac{\mathrm{e}^{\mathrm{i}\theta} + \mathrm{e}^{-\mathrm{i}\theta}}{2}` },
    { id: 'm7-fo-euler-sin', name: 'Formule d\'Euler (sinus)', tex: String.raw`\sin\theta = \frac{\mathrm{e}^{\mathrm{i}\theta} - \mathrm{e}^{-\mathrm{i}\theta}}{2\mathrm{i}}`, note: String.raw`Attention au $2\mathrm{i}$ au dénominateur.` },
    { id: 'm7-fo-moivre', name: 'Formule de Moivre', tex: String.raw`(\cos\theta + \mathrm{i}\sin\theta)^n = \cos(n\theta) + \mathrm{i}\sin(n\theta)` },
    { id: 'm7-fo-angle-moitie', name: 'Factorisation par l\'angle moitié', tex: String.raw`\mathrm{e}^{\mathrm{i}a} + \mathrm{e}^{\mathrm{i}b} = 2\cos\left(\frac{a-b}{2}\right)\mathrm{e}^{\mathrm{i}\frac{a+b}{2}}`, note: String.raw`$1 + \mathrm{e}^{\mathrm{i}\theta} = 2\cos\frac{\theta}{2}\,\mathrm{e}^{\mathrm{i}\theta/2}$ et $1 - \mathrm{e}^{\mathrm{i}\theta} = -2\mathrm{i}\sin\frac{\theta}{2}\,\mathrm{e}^{\mathrm{i}\theta/2}$.` },
    { id: 'm7-fo-lin-2', name: 'Linéarisation des carrés', tex: String.raw`\cos^2 x = \frac{1 + \cos 2x}{2},\qquad \sin^2 x = \frac{1 - \cos 2x}{2}` },
    { id: 'm7-fo-lin-cos3', name: 'Linéarisation de cos³', tex: String.raw`\cos^3 x = \frac{\cos 3x + 3\cos x}{4}` },
    { id: 'm7-fo-lin-sin3', name: 'Linéarisation de sin³', tex: String.raw`\sin^3 x = \frac{3\sin x - \sin 3x}{4}` },
    { id: 'm7-fo-cos3x', name: 'cos 3x et sin 3x (Moivre)', tex: String.raw`\cos 3x = 4\cos^3 x - 3\cos x,\qquad \sin 3x = 3\sin x - 4\sin^3 x` },
    { id: 'm7-fo-racines-unite', name: 'Racines n-ièmes de l\'unité', tex: String.raw`z^n = 1 \iff z = \mathrm{e}^{\frac{2\mathrm{i}k\pi}{n}},\quad k \in \{0, \ldots, n-1\}`, note: String.raw`Leur somme est nulle pour $n \geq 2$.` },
    { id: 'm7-fo-j', name: 'Racines cubiques de l\'unité', tex: String.raw`j = \mathrm{e}^{2\mathrm{i}\pi/3} = -\frac{1}{2} + \mathrm{i}\frac{\sqrt{3}}{2},\qquad 1 + j + j^2 = 0`, note: String.raw`$j^3 = 1$ et $j^2 = \overline{j}$.` },
    { id: 'm7-fo-racines-n', name: 'Racines n-ièmes d\'un complexe', tex: String.raw`z^n = \rho\,\mathrm{e}^{\mathrm{i}\alpha} \iff z = \rho^{1/n}\,\mathrm{e}^{\mathrm{i}\frac{\alpha + 2k\pi}{n}},\quad 0 \leq k \leq n-1` },
    { id: 'm7-fo-racine-carree', name: 'Racine carrée : méthode algébrique', tex: String.raw`(x + \mathrm{i}y)^2 = a + \mathrm{i}b \iff \begin{cases} x^2 - y^2 = a \\ x^2 + y^2 = \sqrt{a^2 + b^2} \\ 2xy = b \end{cases}`, note: String.raw`Le signe de $xy$ est celui de $b$.` },
    { id: 'm7-fo-second-degre', name: 'Second degré à coefficients réels, Δ < 0', tex: String.raw`z_{1,2} = \frac{-b \pm \mathrm{i}\sqrt{-\Delta}}{2a}`, note: String.raw`Cas général (coefficients complexes) : $z = \frac{-b \pm \delta}{2a}$ avec $\delta^2 = \Delta$.` },
    { id: 'm7-fo-somme-produit', name: 'Somme et produit des racines', tex: String.raw`z_1 + z_2 = -\frac{b}{a},\qquad z_1 z_2 = \frac{c}{a}` },
    { id: 'm7-fo-translation', name: 'Translation', tex: String.raw`z' = z + b` },
    { id: 'm7-fo-homothetie', name: 'Homothétie de centre Ω, de rapport k', tex: String.raw`z' - \omega = k(z - \omega),\quad k \in \mathbb{R}^*` },
    { id: 'm7-fo-rotation', name: 'Rotation de centre Ω, d\'angle θ', tex: String.raw`z' - \omega = \mathrm{e}^{\mathrm{i}\theta}(z - \omega)`, note: String.raw`Centre $O$, angle $\frac{\pi}{2}$ : $z' = \mathrm{i}z$.` },
    { id: 'm7-fo-impedances', name: 'Impédances complexes', tex: String.raw`Z_R = R,\qquad Z_L = jL\omega,\qquad Z_C = \frac{1}{jC\omega} = -\frac{j}{C\omega}` },
    { id: 'm7-fo-assoc', name: 'Associations d\'impédances', tex: String.raw`Z_{\text{série}} = Z_1 + Z_2,\qquad \frac{1}{Z_{\text{para}}} = \frac{1}{Z_1} + \frac{1}{Z_2}` },
    { id: 'm7-fo-transfert', name: 'Gain et phase d\'une fonction de transfert', tex: String.raw`G_{\mathrm{dB}} = 20\log_{10}|H(j\omega)|,\qquad \varphi = \arg H(j\omega)`, note: String.raw`Passe-bas RC : $H = \frac{1}{1 + jRC\omega}$, $|H| = \frac{1}{\sqrt{1 + (RC\omega)^2}}$, $\varphi = -\arctan(RC\omega)$.` }
  ],

  /* ======================= FLASHCARDS ======================= */
  flashcards: [
    { id: 'm7-f-def', front: String.raw`Forme algébrique d'un complexe : définition et unicité`, back: String.raw`Tout $z \in \mathbb{C}$ s'écrit de façon unique $z = a + \mathrm{i}b$ avec $a, b$ **réels** et $\mathrm{i}^2 = -1$.
$a = \operatorname{Re} z$, $b = \operatorname{Im} z$ (un réel, sans le $\mathrm{i}$).
Unicité : on peut identifier parties réelles et imaginaires.` },
    { id: 'm7-f-conj', front: String.raw`Conjugué : définition et propriétés clés`, back: String.raw`$\overline{a + \mathrm{i}b} = a - \mathrm{i}b$ (symétrie d'axe réel).
Compatible avec $+$, $\times$, $\div$, puissances.
$z\overline{z} = a^2 + b^2 = |z|^2$ ; $z$ réel $\iff \overline{z} = z$ ; $z$ imaginaire pur $\iff \overline{z} = -z$.` },
    { id: 'm7-f-quotient', front: String.raw`Méthode : mettre un quotient sous forme algébrique`, back: String.raw`Multiplier numérateur et dénominateur par le **conjugué du dénominateur** :
$\frac{z}{z'} = \frac{z\,\overline{z'}}{|z'|^2}$.
Ex. $\frac{3 + \mathrm{i}}{1 - \mathrm{i}} = \frac{(3+\mathrm{i})(1+\mathrm{i})}{2} = 1 + 2\mathrm{i}$.` },
    { id: 'm7-f-module', front: String.raw`Module : définition, interprétation, propriétés`, back: String.raw`$|a + \mathrm{i}b| = \sqrt{a^2 + b^2} = OM$ ; $AB = |z_B - z_A|$.
Multiplicatif : $|zz'| = |z||z'|$, $|z^n| = |z|^n$.
Mais seulement $|z + z'| \leq |z| + |z'|$ (inégalité triangulaire).` },
    { id: 'm7-f-arg', front: String.raw`Argument : définition, argument principal`, back: String.raw`Pour $z \neq 0$ d'image $M$ : mesure de l'angle $(\vec{u}, \overrightarrow{OM})$, définie modulo $2\pi$.
Argument principal : l'unique mesure dans $]-\pi, \pi]$.
$\cos\theta = \frac{a}{|z|}$, $\sin\theta = \frac{b}{|z|}$. $0$ n'a pas d'argument.` },
    { id: 'm7-f-arctan', front: String.raw`Méthode : argument de $a + \mathrm{i}b$ avec arctan (quadrants)`, back: String.raw`$a \gt 0$ : $\theta = \arctan\frac{b}{a}$.
$a \lt 0$ et $b \geq 0$ : $\theta = \arctan\frac{b}{a} + \pi$.
$a \lt 0$ et $b \lt 0$ : $\theta = \arctan\frac{b}{a} - \pi$.
$a = 0$ : $\pm\frac{\pi}{2}$ selon le signe de $b$.
Ex. $\arg(-1 - \mathrm{i}) = \frac{\pi}{4} - \pi = -\frac{3\pi}{4}$ (et non $\frac{\pi}{4}$).` },
    { id: 'm7-f-expo', front: String.raw`Forme exponentielle et règles de calcul`, back: String.raw`$z = r\mathrm{e}^{\mathrm{i}\theta}$ avec $r = |z| \gt 0$ et $\theta = \arg z$, où $\mathrm{e}^{\mathrm{i}\theta} = \cos\theta + \mathrm{i}\sin\theta$.
Produit : modules multipliés, arguments ajoutés. Quotient : divisés, soustraits. Puissance : $r^n\mathrm{e}^{\mathrm{i}n\theta}$.
Ex. $1 + \mathrm{i} = \sqrt{2}\,\mathrm{e}^{\mathrm{i}\pi/4}$.` },
    { id: 'm7-f-euler', front: String.raw`Formules d'Euler`, back: String.raw`$\cos\theta = \frac{\mathrm{e}^{\mathrm{i}\theta} + \mathrm{e}^{-\mathrm{i}\theta}}{2}$
$\sin\theta = \frac{\mathrm{e}^{\mathrm{i}\theta} - \mathrm{e}^{-\mathrm{i}\theta}}{2\mathrm{i}}$
Obtenues en ajoutant/soustrayant $\mathrm{e}^{\pm\mathrm{i}\theta} = \cos\theta \pm \mathrm{i}\sin\theta$.` },
    { id: 'm7-f-moivre', front: String.raw`Formule de Moivre`, back: String.raw`$(\cos\theta + \mathrm{i}\sin\theta)^n = \cos(n\theta) + \mathrm{i}\sin(n\theta)$ pour tout $n \in \mathbb{Z}$.
C'est $\left(\mathrm{e}^{\mathrm{i}\theta}\right)^n = \mathrm{e}^{\mathrm{i}n\theta}$. Sert à exprimer $\cos(nx)$, $\sin(nx)$ en puissances de $\cos x$, $\sin x$.` },
    { id: 'm7-f-lin', front: String.raw`Méthode : linéariser $\cos^p x\sin^q x$`, back: String.raw`1) Remplacer par Euler. 2) Développer (binôme). 3) Regrouper : $\mathrm{e}^{\mathrm{i}kx} + \mathrm{e}^{-\mathrm{i}kx} = 2\cos kx$, $\mathrm{e}^{\mathrm{i}kx} - \mathrm{e}^{-\mathrm{i}kx} = 2\mathrm{i}\sin kx$.
Ex. $\cos^3 x = \frac{\cos 3x + 3\cos x}{4}$. Vérifier en $x = 0$.` },
    { id: 'm7-f-cosnx', front: String.raw`Méthode : exprimer $\cos(3x)$ en fonction de $\cos x$`, back: String.raw`$\cos 3x = \operatorname{Re}\left((\cos x + \mathrm{i}\sin x)^3\right) = \cos^3 x - 3\cos x\sin^2 x$, puis $\sin^2 x = 1 - \cos^2 x$ :
$\cos 3x = 4\cos^3 x - 3\cos x$. De même $\sin 3x = 3\sin x - 4\sin^3 x$.` },
    { id: 'm7-f-unite', front: String.raw`Racines n-ièmes de l'unité`, back: String.raw`$z^n = 1 \iff z = \mathrm{e}^{2\mathrm{i}k\pi/n}$, $k = 0, \ldots, n-1$ : $n$ solutions, sommets d'un polygone régulier.
Somme nulle ($n \geq 2$). Pour $n = 3$ : $1, j, j^2$ avec $1 + j + j^2 = 0$.` },
    { id: 'm7-f-racine-carree', front: String.raw`Méthode : racine carrée de $a + \mathrm{i}b$ (forme algébrique)`, back: String.raw`Poser $(x + \mathrm{i}y)^2 = a + \mathrm{i}b$ :
$x^2 - y^2 = a$, $x^2 + y^2 = \sqrt{a^2 + b^2}$, $2xy = b$.
On obtient $x^2$, $y^2$ ; le signe de $xy$ est celui de $b$. Deux racines opposées.
Ex. $3 + 4\mathrm{i}$ : $\pm(2 + \mathrm{i})$.` },
    { id: 'm7-f-second-degre', front: String.raw`Équation $az^2 + bz + c = 0$ dans $\mathbb{C}$`, back: String.raw`$\Delta = b^2 - 4ac$, $\delta$ tel que $\delta^2 = \Delta$ : $z = \frac{-b \pm \delta}{2a}$.
Coefficients réels et $\Delta \lt 0$ : $z = \frac{-b \pm \mathrm{i}\sqrt{-\Delta}}{2a}$ (racines conjuguées).
Toujours : $z_1 + z_2 = -\frac{b}{a}$, $z_1 z_2 = \frac{c}{a}$.` },
    { id: 'm7-f-transfo', front: String.raw`Écritures complexes : translation, homothétie, rotation`, back: String.raw`Translation : $z' = z + b$.
Homothétie (centre $\omega$, rapport $k$ réel) : $z' - \omega = k(z - \omega)$.
Rotation (centre $\omega$, angle $\theta$) : $z' - \omega = \mathrm{e}^{\mathrm{i}\theta}(z - \omega)$.
$z' = az + b$ ($a \neq 1$) : centre $\omega = \frac{b}{1 - a}$.` },
    { id: 'm7-f-impedance', front: String.raw`Impédances complexes (notation $j$)`, back: String.raw`$Z_R = R$ ; $Z_L = jL\omega$ (déphasage $+\frac{\pi}{2}$) ; $Z_C = \frac{1}{jC\omega} = -\frac{j}{C\omega}$ (déphasage $-\frac{\pi}{2}$).
Série : $Z_1 + Z_2$ ; parallèle : $\frac{Z_1Z_2}{Z_1 + Z_2}$. Dériver $\leftrightarrow \times j\omega$.` },
    { id: 'm7-f-transfert', front: String.raw`Gain et phase d'une fonction de transfert $H(j\omega)$`, back: String.raw`Gain $|H|$, en dB : $G = 20\log_{10}|H|$. Phase $\varphi = \arg H$.
Quotient : $|N/D| = |N|/|D|$, $\arg(N/D) = \arg N - \arg D$.
Passe-bas $\frac{1}{1 + jRC\omega}$ à $\omega = \frac{1}{RC}$ : $\frac{1}{\sqrt{2}}$, $-3$ dB, $-\frac{\pi}{4}$.` }
  ],

  /* ======================= QCM ======================= */
  quiz: [
    { id: 'm7-q-001', level: 1, q: String.raw`Que vaut $\mathrm{i}^3$ ?`,
      choices: [String.raw`$\mathrm{i}$`, String.raw`$-1$`, String.raw`$-\mathrm{i}$`, String.raw`$1$`], answer: 2,
      explain: String.raw`$\mathrm{i}^3 = \mathrm{i}^2 \times \mathrm{i} = -1 \times \mathrm{i} = -\mathrm{i}$.`,
      why: { 0: String.raw`Les puissances de $\mathrm{i}$ ne valent pas toutes $\mathrm{i}$ : $\mathrm{i}^3 = \mathrm{i}^2 \times \mathrm{i}$ avec $\mathrm{i}^2 = -1$.`, 1: String.raw`$-1$ est $\mathrm{i}^2$, pas $\mathrm{i}^3$ : il faut encore multiplier par $\mathrm{i}$.`, 3: String.raw`$1$ est $\mathrm{i}^4$ (ou $\mathrm{i}^0$).` } },
    { id: 'm7-q-002', level: 1, q: String.raw`Quelle est la partie imaginaire de $z = 3 - 2\mathrm{i}$ ?`,
      choices: [String.raw`$-2\mathrm{i}$`, String.raw`$-2$`, String.raw`$2$`, String.raw`$3$`], answer: 1,
      explain: String.raw`$z = a + \mathrm{i}b$ avec $a = 3$ et $b = -2$ : la partie imaginaire est le **réel** $b = -2$.`,
      why: { 0: String.raw`La partie imaginaire est un réel : on ne garde pas le $\mathrm{i}$.`, 2: String.raw`Le signe compte : $3 - 2\mathrm{i} = 3 + \mathrm{i}\times(-2)$.`, 3: String.raw`$3$ est la partie réelle.` } },
    { id: 'm7-q-003', level: 1, q: String.raw`$(1 + \mathrm{i})^2 = $ ?`,
      choices: [String.raw`$2 + 2\mathrm{i}$`, String.raw`$0$`, String.raw`$2\mathrm{i}$`, String.raw`$1 + 2\mathrm{i}$`], answer: 2,
      explain: String.raw`$(1 + \mathrm{i})^2 = 1 + 2\mathrm{i} + \mathrm{i}^2 = 1 + 2\mathrm{i} - 1 = 2\mathrm{i}$.`,
      why: { 0: String.raw`Tu as pris $\mathrm{i}^2 = +1$ : or $\mathrm{i}^2 = -1$.`, 1: String.raw`Tu as oublié le double produit : $(a + b)^2 \neq a^2 + b^2$.`, 3: String.raw`Tu as oublié le terme $\mathrm{i}^2 = -1$ qui annule le $1$.` } },
    { id: 'm7-q-004', level: 1, q: String.raw`Quel est le conjugué de $(1 + 2\mathrm{i})(3 - \mathrm{i})$ ?`,
      choices: [String.raw`$5 + 5\mathrm{i}$`, String.raw`$1 - 5\mathrm{i}$`, String.raw`$-5 + 5\mathrm{i}$`, String.raw`$5 - 5\mathrm{i}$`], answer: 3,
      explain: String.raw`$(1 + 2\mathrm{i})(3 - \mathrm{i}) = 3 - \mathrm{i} + 6\mathrm{i} - 2\mathrm{i}^2 = 5 + 5\mathrm{i}$, dont le conjugué est $5 - 5\mathrm{i}$.`,
      why: { 0: String.raw`C'est le produit lui-même, pas son conjugué.`, 1: String.raw`Tu as pris $\mathrm{i}^2 = +1$ : $-2\mathrm{i}^2 = +2$, pas $-2$.`, 2: String.raw`Le conjugué change le signe de la partie imaginaire seulement, pas de la partie réelle.` } },
    { id: 'm7-q-005', level: 1, q: String.raw`Que vaut $|3 - 4\mathrm{i}|$ ?`,
      choices: [String.raw`$5$`, String.raw`$7$`, String.raw`$25$`, String.raw`$\sqrt{7}$`], answer: 0,
      explain: String.raw`$|3 - 4\mathrm{i}| = \sqrt{3^2 + (-4)^2} = \sqrt{25} = 5$.`,
      why: { 1: String.raw`Le module n'est pas $|a| + |b|$ : c'est $\sqrt{a^2 + b^2}$.`, 2: String.raw`$25 = |z|^2$ : il manque la racine carrée.`, 3: String.raw`On ne met pas le $\mathrm{i}$ dans le module : $\sqrt{a^2 + b^2}$ avec $a, b$ réels, jamais $\sqrt{a^2 - b^2}$.` } },
    { id: 'm7-q-006', level: 1, q: String.raw`Que vaut $\dfrac{1}{\mathrm{i}}$ ?`,
      choices: [String.raw`$\mathrm{i}$`, String.raw`$1$`, String.raw`$-1$`, String.raw`$-\mathrm{i}$`], answer: 3,
      explain: String.raw`$\frac{1}{\mathrm{i}} = \frac{\mathrm{i}}{\mathrm{i}^2} = -\mathrm{i}$. Vérification : $\mathrm{i} \times (-\mathrm{i}) = -\mathrm{i}^2 = 1$.`,
      why: { 0: String.raw`$\mathrm{i} \times \mathrm{i} = -1 \neq 1$, donc $\mathrm{i}$ n'est pas son propre inverse.`, 1: String.raw`$\frac{1}{\mathrm{i}}$ n'est pas réel : $\mathrm{i}$ ne « se simplifie » pas.`, 2: String.raw`$-1 = \mathrm{i}^2$ ; l'inverse est $\frac{\mathrm{i}}{\mathrm{i}^2} = -\mathrm{i}$.` } },
    { id: 'm7-q-007', level: 2, q: String.raw`Forme algébrique de $\dfrac{1+\mathrm{i}}{1-\mathrm{i}}$ ?`,
      choices: [String.raw`$\mathrm{i}$`, String.raw`$-\mathrm{i}$`, String.raw`$1$`, String.raw`$2\mathrm{i}$`], answer: 0,
      explain: String.raw`On multiplie par le conjugué $1 + \mathrm{i}$ : $\frac{(1+\mathrm{i})^2}{(1-\mathrm{i})(1+\mathrm{i})} = \frac{2\mathrm{i}}{2} = \mathrm{i}$.`,
      why: { 1: String.raw`Erreur de signe : $(1 + \mathrm{i})^2 = +2\mathrm{i}$.`, 2: String.raw`On ne « simplifie » pas les $\mathrm{i}$ : numérateur et dénominateur sont différents.`, 3: String.raw`Tu as oublié de diviser par $(1 - \mathrm{i})(1 + \mathrm{i}) = 2$.` } },
    { id: 'm7-q-008', level: 2, q: String.raw`Pour $z \neq 0$, $\dfrac{1}{z}$ est égal à :`,
      choices: [String.raw`$\dfrac{\overline{z}}{|z|}$`, String.raw`$\dfrac{\overline{z}}{|z|^2}$`, String.raw`$\overline{z}$`, String.raw`$\dfrac{|z|^2}{\overline{z}}$`], answer: 1,
      explain: String.raw`$z\overline{z} = |z|^2$ donc $\frac{1}{z} = \frac{\overline{z}}{z\overline{z}} = \frac{\overline{z}}{|z|^2}$.`,
      why: { 0: String.raw`Il manque le carré : $z\overline{z} = |z|^2$.`, 2: String.raw`Vrai seulement si $|z| = 1$ (ex. $\frac{1}{\mathrm{e}^{\mathrm{i}\theta}} = \mathrm{e}^{-\mathrm{i}\theta}$).`, 3: String.raw`$\frac{|z|^2}{\overline{z}} = \frac{z\overline{z}}{\overline{z}} = z$ : c'est $z$ lui-même.` } },
    { id: 'm7-q-009', level: 1, q: String.raw`Un complexe $z$ est réel si et seulement si :`,
      choices: [String.raw`$\overline{z} = -z$`, String.raw`$|z| = 1$`, String.raw`$\overline{z} = z$`, String.raw`$z\overline{z} = 0$`], answer: 2,
      explain: String.raw`$\overline{z} = z \iff a - \mathrm{i}b = a + \mathrm{i}b \iff b = 0$.`,
      why: { 0: String.raw`$\overline{z} = -z$ caractérise les imaginaires purs ($a = 0$).`, 1: String.raw`$|z| = 1$ caractérise le cercle unité, qui contient des non-réels comme $\mathrm{i}$.`, 3: String.raw`$z\overline{z} = |z|^2 = 0$ n'est vrai que pour $z = 0$.` } },
    { id: 'm7-q-010', level: 2, q: String.raw`L'ensemble des points $M(z)$ tels que $|z - 2\mathrm{i}| = 3$ est :`,
      choices: [String.raw`le cercle de centre $O$ et de rayon 3`, String.raw`le cercle de centre le point d'affixe $2\mathrm{i}$ et de rayon 3`, String.raw`le cercle de centre le point d'affixe $-2\mathrm{i}$ et de rayon 3`, String.raw`la droite d'équation $y = 2$`], answer: 1,
      explain: String.raw`$|z - a| = AM$ avec $A(a)$ : ici $AM = 3$ avec $A(2\mathrm{i})$, donc le cercle de centre $(0 ; 2)$ et de rayon 3.`,
      why: { 0: String.raw`$|z| = 3$ donnerait le cercle de centre $O$ ; ici on mesure la distance au point d'affixe $2\mathrm{i}$.`, 2: String.raw`$|z - a|$ est la distance au point d'affixe $a$, pas $-a$.`, 3: String.raw`Une condition « distance = constante » donne un cercle, pas une droite.` } },
    { id: 'm7-q-011', level: 2, q: String.raw`L'ensemble des points $M(z)$ tels que $|z - 1| = |z + \mathrm{i}|$ est :`,
      choices: [String.raw`la médiatrice du segment joignant les points d'affixes $1$ et $\mathrm{i}$`, String.raw`le cercle de centre le point d'affixe 1 passant par le point d'affixe $-\mathrm{i}$`, String.raw`la médiatrice du segment joignant les points d'affixes $1$ et $-\mathrm{i}$`, String.raw`l'axe réel`], answer: 2,
      explain: String.raw`$|z + \mathrm{i}| = |z - (-\mathrm{i})|$ : $M$ est à égale distance de $A(1)$ et $B(-\mathrm{i})$, donc sur la médiatrice de $[AB]$ (ici la droite $y = -x$).`,
      why: { 0: String.raw`$|z + \mathrm{i}|$ est la distance au point d'affixe $-\mathrm{i}$, pas $\mathrm{i}$.`, 1: String.raw`L'égalité de deux distances à deux points fixes définit une médiatrice, pas un cercle.`, 3: String.raw`Le point $1$ de l'axe réel n'est pas à égale distance : $|1 - 1| = 0 \neq |1 + \mathrm{i}| = \sqrt{2}$.` } },
    { id: 'm7-q-012', level: 2, q: String.raw`Argument principal de $-1 - \mathrm{i}$ ?`,
      choices: [String.raw`$\frac{\pi}{4}$`, String.raw`$-\frac{3\pi}{4}$`, String.raw`$\frac{3\pi}{4}$`, String.raw`$\frac{5\pi}{4}$`], answer: 1,
      explain: String.raw`Le point $(-1 ; -1)$ est dans le 3e quadrant : $\theta = \arctan(1) - \pi = -\frac{3\pi}{4}$ (et $\cos\theta = \sin\theta = -\frac{\sqrt{2}}{2}$).`,
      why: { 0: String.raw`$\arctan\frac{-1}{-1} = \frac{\pi}{4}$ sans correction de quadrant : or $a \lt 0$.`, 2: String.raw`$\frac{3\pi}{4}$ est l'argument de $-1 + \mathrm{i}$ : ici $\sin\theta \lt 0$.`, 3: String.raw`$\frac{5\pi}{4}$ est bien un argument, mais pas dans $]-\pi, \pi]$.` } },
    { id: 'm7-q-013', level: 1, q: String.raw`Argument principal de $-2$ ?`,
      choices: [String.raw`$0$`, String.raw`$-2$`, String.raw`$\pi$`, String.raw`$\frac{\pi}{2}$`], answer: 2,
      explain: String.raw`$-2$ est un réel strictement négatif : son image est sur la demi-droite des abscisses négatives, angle $\pi$.`,
      why: { 0: String.raw`$\arctan\frac{0}{-2} = 0$, mais $a \lt 0$ : il faut ajouter $\pi$.`, 1: String.raw`L'argument est un angle, pas le nombre lui-même.`, 3: String.raw`$\frac{\pi}{2}$ est l'argument des imaginaires purs $\mathrm{i}b$ avec $b \gt 0$.` } },
    { id: 'm7-q-014', level: 3, q: String.raw`Pour $z = a + \mathrm{i}b$ avec $a \lt 0$ et $b \gt 0$, l'argument principal de $z$ vaut :`,
      choices: [String.raw`$\arctan\frac{b}{a}$`, String.raw`$\arctan\frac{b}{a} - \pi$`, String.raw`$\pi - \arctan\frac{b}{a}$`, String.raw`$\arctan\frac{b}{a} + \pi$`], answer: 3,
      explain: String.raw`$\frac{b}{a} \lt 0$ donc $\arctan\frac{b}{a} \in ]-\frac{\pi}{2}, 0[$ ; le point est dans le 2e quadrant, il faut ajouter $\pi$ pour arriver dans $]\frac{\pi}{2}, \pi[$.`,
      why: { 0: String.raw`$\arctan$ renvoie un angle de $]-\frac{\pi}{2}, \frac{\pi}{2}[$, donc du demi-plan $a \gt 0$ : faux ici.`, 1: String.raw`On retire $\pi$ quand $b \lt 0$ ; ici on obtiendrait un angle de $]-\frac{3\pi}{2}, -\pi[$, hors de $]-\pi, \pi]$.`, 2: String.raw`$\arctan\frac{b}{a} \lt 0$, donc $\pi - \arctan\frac{b}{a} \gt \pi$ : hors intervalle (c'est $\pi + \arctan\frac{b}{a}$ qu'il faut).` } },
    { id: 'm7-q-015', level: 1, q: String.raw`Forme exponentielle de $1 + \mathrm{i}$ ?`,
      choices: [String.raw`$2\,\mathrm{e}^{\mathrm{i}\pi/4}$`, String.raw`$\mathrm{e}^{\mathrm{i}\pi/4}$`, String.raw`$\sqrt{2}\,\mathrm{e}^{\mathrm{i}\pi/4}$`, String.raw`$\sqrt{2}\,\mathrm{e}^{\mathrm{i}\pi/2}$`], answer: 2,
      explain: String.raw`$|1 + \mathrm{i}| = \sqrt{2}$ et $\cos\theta = \sin\theta = \frac{\sqrt{2}}{2}$, donc $\theta = \frac{\pi}{4}$.`,
      why: { 0: String.raw`Le module est $\sqrt{1^2 + 1^2} = \sqrt{2}$, pas $1 + 1$.`, 1: String.raw`Tu as oublié le module : $|\mathrm{e}^{\mathrm{i}\pi/4}| = 1 \neq |1 + \mathrm{i}|$.`, 3: String.raw`$\frac{\pi}{2}$ est l'argument de $\mathrm{i}$ ; pour $1 + \mathrm{i}$, c'est $\frac{\pi}{4}$.` } },
    { id: 'm7-q-016', level: 2, q: String.raw`Laquelle de ces écritures est **la forme exponentielle** de $-2\mathrm{i}$ ?`,
      choices: [String.raw`$-2\,\mathrm{e}^{\mathrm{i}\pi/2}$`, String.raw`$2\,\mathrm{e}^{-\mathrm{i}\pi/2}$`, String.raw`$2\,\mathrm{e}^{\mathrm{i}\pi/2}$`, String.raw`$2\,\mathrm{e}^{\mathrm{i}\pi}$`], answer: 1,
      explain: String.raw`$|-2\mathrm{i}| = 2$ et l'image est sur la demi-droite des ordonnées négatives : $\arg = -\frac{\pi}{2}$.`,
      why: { 0: String.raw`Égal à $-2\mathrm{i}$, mais ce n'est pas une forme exponentielle : le facteur $r$ doit être strictement positif.`, 2: String.raw`$2\,\mathrm{e}^{\mathrm{i}\pi/2} = 2\mathrm{i}$ : mauvais signe de l'argument.`, 3: String.raw`$2\,\mathrm{e}^{\mathrm{i}\pi} = -2$, un réel.` } },
    { id: 'm7-q-017', level: 2, q: String.raw`Avec $z = 2\mathrm{e}^{\mathrm{i}\pi/3}$ et $z' = 3\mathrm{e}^{\mathrm{i}\pi/6}$, que vaut $zz'$ ?`,
      choices: [String.raw`$5\,\mathrm{e}^{\mathrm{i}\pi/2}$`, String.raw`$6\,\mathrm{e}^{\mathrm{i}\pi/18}$`, String.raw`$6\,\mathrm{e}^{\mathrm{i}\pi/6}$`, String.raw`$6\mathrm{i}$`], answer: 3,
      explain: String.raw`Modules multipliés, arguments ajoutés : $zz' = 6\,\mathrm{e}^{\mathrm{i}(\pi/3 + \pi/6)} = 6\,\mathrm{e}^{\mathrm{i}\pi/2} = 6\mathrm{i}$.`,
      why: { 0: String.raw`Les modules se multiplient : $2 \times 3 = 6$, pas $2 + 3$.`, 1: String.raw`Les arguments s'ajoutent, ils ne se multiplient pas.`, 2: String.raw`Tu as soustrait les arguments : c'est la règle du quotient.` } },
    { id: 'm7-q-018', level: 2, q: String.raw`Que vaut $(1 + \mathrm{i})^8$ ?`,
      choices: [String.raw`$-16$`, String.raw`$16$`, String.raw`$256$`, String.raw`$16\mathrm{i}$`], answer: 1,
      explain: String.raw`$1 + \mathrm{i} = \sqrt{2}\,\mathrm{e}^{\mathrm{i}\pi/4}$ donc $(1 + \mathrm{i})^8 = (\sqrt{2})^8\,\mathrm{e}^{2\mathrm{i}\pi} = 16$. (Ou : $(1+\mathrm{i})^2 = 2\mathrm{i}$, puis $(2\mathrm{i})^4 = 16$.)`,
      why: { 0: String.raw`$\mathrm{e}^{2\mathrm{i}\pi} = 1$, pas $-1$ (c'est $\mathrm{e}^{\mathrm{i}\pi}$ qui vaut $-1$).`, 2: String.raw`Le module de $1 + \mathrm{i}$ est $\sqrt{2}$, pas 2 : $(\sqrt{2})^8 = 16$.`, 3: String.raw`$8 \times \frac{\pi}{4} = 2\pi$ : le résultat est réel.` } },
    { id: 'm7-q-019', level: 1, q: String.raw`Formule d'Euler : $\sin\theta = $ ?`,
      choices: [String.raw`$\dfrac{\mathrm{e}^{\mathrm{i}\theta} - \mathrm{e}^{-\mathrm{i}\theta}}{2}$`, String.raw`$\dfrac{\mathrm{e}^{\mathrm{i}\theta} + \mathrm{e}^{-\mathrm{i}\theta}}{2\mathrm{i}}$`, String.raw`$\dfrac{\mathrm{e}^{\mathrm{i}\theta} - \mathrm{e}^{-\mathrm{i}\theta}}{2\mathrm{i}}$`, String.raw`$\dfrac{\mathrm{e}^{-\mathrm{i}\theta} - \mathrm{e}^{\mathrm{i}\theta}}{2\mathrm{i}}$`], answer: 2,
      explain: String.raw`$\mathrm{e}^{\mathrm{i}\theta} - \mathrm{e}^{-\mathrm{i}\theta} = 2\mathrm{i}\sin\theta$, d'où $\sin\theta = \frac{\mathrm{e}^{\mathrm{i}\theta} - \mathrm{e}^{-\mathrm{i}\theta}}{2\mathrm{i}}$.`,
      why: { 0: String.raw`Cette expression vaut $\mathrm{i}\sin\theta$ : il manque le $\mathrm{i}$ au dénominateur.`, 1: String.raw`La somme donne $2\cos\theta$ : c'est la formule du cosinus (sans le $\mathrm{i}$).`, 3: String.raw`Ordre inversé : cette expression vaut $-\sin\theta$.` } },
    { id: 'm7-q-020', level: 1, q: String.raw`Formule de Moivre : $(\cos\theta + \mathrm{i}\sin\theta)^n = $ ?`,
      choices: [String.raw`$\cos^n\theta + \mathrm{i}\sin^n\theta$`, String.raw`$n\cos\theta + \mathrm{i}\,n\sin\theta$`, String.raw`$\cos(n\theta) + \mathrm{i}\sin(n\theta)$`], answer: 2,
      explain: String.raw`$(\mathrm{e}^{\mathrm{i}\theta})^n = \mathrm{e}^{\mathrm{i}n\theta} = \cos(n\theta) + \mathrm{i}\sin(n\theta)$.`,
      why: { 0: String.raw`La puissance d'une somme n'est pas la somme des puissances.`, 1: String.raw`Une puissance n'est pas une multiplication par $n$ : c'est l'argument qui est multiplié par $n$.` } },
    { id: 'm7-q-021', level: 2, q: String.raw`Linéarisation de $\sin^2 x$ :`,
      choices: [String.raw`$\dfrac{1 - \cos 2x}{2}$`, String.raw`$\dfrac{1 + \cos 2x}{2}$`, String.raw`$\dfrac{\cos 2x - 1}{2}$`, String.raw`$\dfrac{1 - \cos x}{2}$`], answer: 0,
      explain: String.raw`$\cos 2x = 1 - 2\sin^2 x$ donc $\sin^2 x = \frac{1 - \cos 2x}{2}$. Vérification : en $x = 0$, $0 = \frac{1 - 1}{2}$.`,
      why: { 1: String.raw`C'est la linéarisation de $\cos^2 x$ (en $x = 0$ elle vaut 1, pas 0).`, 2: String.raw`Erreur de signe : cette expression est négative alors que $\sin^2 x \geq 0$.`, 3: String.raw`L'angle doit être doublé : $\sin^2 x$ fait apparaître $\cos 2x$.` } },
    { id: 'm7-q-022', level: 3, q: String.raw`Linéarisation de $\sin^3 x$ :`,
      choices: [String.raw`$\dfrac{\sin 3x + 3\sin x}{4}$`, String.raw`$\dfrac{3\sin x - \sin 3x}{4}$`, String.raw`$\dfrac{\sin 3x - 3\sin x}{4}$`, String.raw`$\dfrac{3\sin x - \sin 3x}{8}$`], answer: 1,
      explain: String.raw`$\sin^3 x = \frac{(\mathrm{e}^{\mathrm{i}x} - \mathrm{e}^{-\mathrm{i}x})^3}{(2\mathrm{i})^3} = \frac{2\mathrm{i}\sin 3x - 6\mathrm{i}\sin x}{-8\mathrm{i}} = \frac{3\sin x - \sin 3x}{4}$. Vérification en $x = \frac{\pi}{2}$ : $1 = \frac{3 + 1}{4}$.`,
      why: { 0: String.raw`Copie de la formule de $\cos^3 x$ : en $x = \frac{\pi}{2}$ on trouverait $\frac{-1 + 3}{4} \neq 1$.`, 2: String.raw`C'est $-\sin^3 x$ : tu as oublié que $(2\mathrm{i})^3 = -8\mathrm{i}$ (signe moins).`, 3: String.raw`Tu as oublié de regrouper $\mathrm{e}^{\mathrm{i}kx} - \mathrm{e}^{-\mathrm{i}kx} = 2\mathrm{i}\sin kx$ (facteur 2).` } },
    { id: 'm7-q-023', level: 2, q: String.raw`Expression de $\cos 3x$ en fonction de $\cos x$ :`,
      choices: [String.raw`$3\cos x - 4\cos^3 x$`, String.raw`$\cos^3 x - 3\cos x$`, String.raw`$4\cos^3 x + 3\cos x$`, String.raw`$4\cos^3 x - 3\cos x$`], answer: 3,
      explain: String.raw`$\cos 3x = \operatorname{Re}(\cos x + \mathrm{i}\sin x)^3 = \cos^3 x - 3\cos x\sin^2 x = \cos^3 x - 3\cos x(1 - \cos^2 x) = 4\cos^3 x - 3\cos x$.`,
      why: { 0: String.raw`C'est $-\cos 3x$ (confusion avec $\sin 3x = 3\sin x - 4\sin^3 x$). En $x = 0$ : $-1 \neq 1$.`, 1: String.raw`Tu as remplacé $\sin^2 x$ par 1 au lieu de $1 - \cos^2 x$.`, 2: String.raw`En $x = 0$ cela donne $7$, alors que $\cos 0 = 1$.` } },
    { id: 'm7-q-024', level: 1, q: String.raw`Combien de solutions l'équation $z^6 = 1$ possède-t-elle dans $\mathbb{C}$ ?`,
      choices: [String.raw`$2$`, String.raw`$3$`, String.raw`$1$`, String.raw`$6$`], answer: 3,
      explain: String.raw`Les racines 6-ièmes de l'unité $\mathrm{e}^{2\mathrm{i}k\pi/6}$, $k = 0, \ldots, 5$ : six solutions (hexagone régulier).`,
      why: { 0: String.raw`Dans $\mathbb{R}$ il n'y a que $\pm 1$ ; dans $\mathbb{C}$ il y en a 6.`, 1: String.raw`$z^n = 1$ a exactement $n$ solutions dans $\mathbb{C}$, ici 6.`, 2: String.raw`$1$ est une solution, mais pas la seule.` } },
    { id: 'm7-q-025', level: 2, q: String.raw`Que vaut la somme des racines 5-ièmes de l'unité ?`,
      choices: [String.raw`$5$`, String.raw`$1$`, String.raw`$0$`, String.raw`$-1$`], answer: 2,
      explain: String.raw`Somme géométrique : $\sum_{k=0}^{4}\omega^k = \frac{1 - \omega^5}{1 - \omega} = 0$ car $\omega^5 = 1$ et $\omega = \mathrm{e}^{2\mathrm{i}\pi/5} \neq 1$.`,
      why: { 0: String.raw`Tu as additionné les modules (tous égaux à 1), pas les complexes.`, 1: String.raw`C'est leur produit (pour $n$ impair), pas leur somme.`, 3: String.raw`$-1$ est la somme des racines **autres que 1**.` } },
    { id: 'm7-q-026', level: 2, q: String.raw`Avec $j = \mathrm{e}^{2\mathrm{i}\pi/3}$, que vaut $1 + j + j^2$ ?`,
      choices: [String.raw`$0$`, String.raw`$3$`, String.raw`$1$`, String.raw`$\mathrm{i}\sqrt{3}$`], answer: 0,
      explain: String.raw`$j = -\frac{1}{2} + \mathrm{i}\frac{\sqrt{3}}{2}$ et $j^2 = \overline{j} = -\frac{1}{2} - \mathrm{i}\frac{\sqrt{3}}{2}$ : $1 + j + j^2 = 1 - 1 = 0$.`,
      why: { 1: String.raw`Tu as additionné les modules : les complexes, eux, se compensent.`, 2: String.raw`C'est $j^3$ qui vaut 1, pas la somme.`, 3: String.raw`Les parties imaginaires de $j$ et $j^2 = \overline{j}$ sont opposées et s'annulent.` } },
    { id: 'm7-q-027', level: 1, q: String.raw`Solutions de $z^2 + 4 = 0$ dans $\mathbb{C}$ :`,
      choices: [String.raw`$2$ et $-2$`, String.raw`aucune`, String.raw`$2\mathrm{i}$ et $-2\mathrm{i}$`, String.raw`$2\mathrm{i}$ seulement`], answer: 2,
      explain: String.raw`$z^2 = -4 = (2\mathrm{i})^2$, donc $z = \pm 2\mathrm{i}$.`,
      why: { 0: String.raw`$(\pm 2)^2 = 4$, pas $-4$.`, 1: String.raw`Aucune solution réelle, mais deux solutions complexes.`, 3: String.raw`$(-2\mathrm{i})^2 = -4$ aussi : il y a deux solutions opposées.` } },
    { id: 'm7-q-028', level: 2, q: String.raw`Solutions de $z^2 - 2z + 5 = 0$ :`,
      choices: [String.raw`$1 \pm 2\mathrm{i}$`, String.raw`$-1 \pm 2\mathrm{i}$`, String.raw`$1 \pm 4\mathrm{i}$`, String.raw`$2 \pm 4\mathrm{i}$`], answer: 0,
      explain: String.raw`$\Delta = 4 - 20 = -16$, donc $z = \frac{2 \pm 4\mathrm{i}}{2} = 1 \pm 2\mathrm{i}$.`,
      why: { 1: String.raw`Erreur de signe : c'est $-b = +2$ au numérateur.`, 2: String.raw`Tu n'as divisé que la partie réelle par $2a$ : $\frac{4\mathrm{i}}{2} = 2\mathrm{i}$.`, 3: String.raw`Tu as oublié de diviser par $2a = 2$.` } },
    { id: 'm7-q-029', level: 3, q: String.raw`Les racines carrées de $3 + 4\mathrm{i}$ sont :`,
      choices: [String.raw`$\pm(2 - \mathrm{i})$`, String.raw`$\pm(1 + 2\mathrm{i})$`, String.raw`$\pm(2 + \mathrm{i})$`, String.raw`$\pm\sqrt{3 + 4\mathrm{i}}$, qu'on ne peut pas simplifier`], answer: 2,
      explain: String.raw`$x^2 - y^2 = 3$, $x^2 + y^2 = 5$ donc $x^2 = 4$, $y^2 = 1$ ; $2xy = 4 \gt 0$ donc $x, y$ de même signe : $\pm(2 + \mathrm{i})$. Vérif : $(2 + \mathrm{i})^2 = 4 + 4\mathrm{i} - 1 = 3 + 4\mathrm{i}$.`,
      why: { 0: String.raw`$(2 - \mathrm{i})^2 = 3 - 4\mathrm{i}$ : le signe de $xy$ doit être celui de $b = 4$.`, 1: String.raw`$(1 + 2\mathrm{i})^2 = -3 + 4\mathrm{i}$ : tu as échangé $x^2$ et $y^2$.`, 3: String.raw`La méthode algébrique donne toujours les racines ; et $\sqrt{\ }$ n'a pas de sens pour un complexe.` } },
    { id: 'm7-q-030', level: 2, q: String.raw`La transformation $z \mapsto \mathrm{i}z$ est :`,
      choices: [String.raw`la symétrie d'axe imaginaire`, String.raw`la rotation de centre $O$ d'angle $-\frac{\pi}{2}$`, String.raw`l'homothétie de centre $O$ de rapport $\mathrm{i}$`, String.raw`la rotation de centre $O$ d'angle $\frac{\pi}{2}$`], answer: 3,
      explain: String.raw`$\mathrm{i} = \mathrm{e}^{\mathrm{i}\pi/2}$ : multiplier par $\mathrm{e}^{\mathrm{i}\theta}$, c'est tourner de $\theta$ autour de $O$.`,
      why: { 0: String.raw`La symétrie d'axe imaginaire est $z \mapsto -\overline{z}$.`, 1: String.raw`L'angle $-\frac{\pi}{2}$ correspond à la multiplication par $-\mathrm{i}$.`, 2: String.raw`Le rapport d'une homothétie est un réel non nul.` } },
    { id: 'm7-q-031', level: 2, q: String.raw`$z \mapsto 2z + 1$ est l'homothétie de rapport 2 et de centre le point d'affixe :`,
      choices: [String.raw`$-1$`, String.raw`$1$`, String.raw`$\frac{1}{2}$`, String.raw`$-\frac{1}{2}$`], answer: 0,
      explain: String.raw`Point fixe : $\omega = 2\omega + 1 \iff \omega = -1$. Vérification : $z' + 1 = 2(z + 1)$.`,
      why: { 1: String.raw`Erreur de signe en résolvant $\omega = 2\omega + 1$.`, 2: String.raw`Le centre est le point fixe $\omega = \frac{b}{1 - a} = \frac{1}{1 - 2}$.`, 3: String.raw`$-\frac{1}{2}$ est l'antécédent de $O$ ($2z + 1 = 0$), pas le point fixe.` } },
    { id: 'm7-q-032', level: 1, q: String.raw`Impédance complexe d'une bobine d'inductance $L$ en régime sinusoïdal de pulsation $\omega$ :`,
      choices: [String.raw`$jL\omega$`, String.raw`$\dfrac{1}{jL\omega}$`, String.raw`$L\omega$`, String.raw`$-jL\omega$`], answer: 0,
      explain: String.raw`$u = L\frac{\mathrm{d}i}{\mathrm{d}t}$ et dériver revient à multiplier par $j\omega$ : $U = jL\omega\,I$.`,
      why: { 1: String.raw`Confusion avec le condensateur $\frac{1}{jC\omega}$.`, 2: String.raw`$L\omega$ est le module ; l'impédance a un argument $+\frac{\pi}{2}$.`, 3: String.raw`Signe faux : la tension aux bornes d'une bobine est en avance de $\frac{\pi}{2}$.` } },
    { id: 'm7-q-033', level: 2, q: String.raw`L'impédance $\dfrac{1}{jC\omega}$ d'un condensateur est aussi égale à :`,
      choices: [String.raw`$\dfrac{j}{C\omega}$`, String.raw`$jC\omega$`, String.raw`$-\dfrac{j}{C\omega}$`, String.raw`$-jC\omega$`], answer: 2,
      explain: String.raw`$\frac{1}{j} = \frac{j}{j^2} = -j$, donc $\frac{1}{jC\omega} = -\frac{j}{C\omega}$.`,
      why: { 0: String.raw`$\frac{1}{j} = -j$, pas $j$.`, 1: String.raw`Tu as inversé la fraction : $jC\omega$ est l'admittance.`, 3: String.raw`Il ne faut pas inverser $C\omega$ : seul le $j$ passe au numérateur (avec un signe moins).` } },
    { id: 'm7-q-034', level: 3, q: String.raw`Pour $H = \dfrac{1}{1 + jRC\omega}$, à la pulsation $\omega = \dfrac{1}{RC}$ :`,
      choices: [String.raw`$|H| = \frac{1}{2}$ et $\varphi = -\frac{\pi}{4}$`, String.raw`$|H| = \frac{1}{\sqrt{2}}$ et $\varphi = \frac{\pi}{4}$`, String.raw`$|H| = \frac{1}{\sqrt{2}}$ et $\varphi = -\frac{\pi}{4}$`, String.raw`$|H| = \frac{1}{\sqrt{2}}$ et $\varphi = -\frac{\pi}{2}$`], answer: 2,
      explain: String.raw`$H = \frac{1}{1 + j}$ : $|H| = \frac{1}{|1 + j|} = \frac{1}{\sqrt{2}}$ et $\varphi = -\arg(1 + j) = -\frac{\pi}{4}$.`,
      why: { 0: String.raw`$|1 + j| = \sqrt{2}$, pas 2.`, 1: String.raw`$\arg\frac{1}{D} = -\arg D$ : la phase est négative.`, 3: String.raw`$-\frac{\pi}{2}$ est la limite en haute fréquence, pas la valeur à la coupure.` } }
  ],

  /* ======================= EXERCICES ======================= */
  exercises: [
    { id: 'm7-x-001', level: 1, check: 'value', vars: [],
      prompt: String.raw`Mets sous forme algébrique $(2 + 3\mathrm{i})(1 - \mathrm{i})$.`,
      answer: '5+i',
      mistakes: [{ expr: '-1+i', msg: String.raw`Tu as pris $\mathrm{i}^2 = +1$ : or $-3\mathrm{i}^2 = +3$.` }],
      hint: String.raw`Développe comme dans $\mathbb{R}$ puis remplace $\mathrm{i}^2$ par $-1$.`,
      explain: String.raw`$(2 + 3\mathrm{i})(1 - \mathrm{i}) = 2 - 2\mathrm{i} + 3\mathrm{i} - 3\mathrm{i}^2 = 2 + \mathrm{i} + 3 = 5 + \mathrm{i}$.` },
    { id: 'm7-x-002', level: 1, check: 'value', vars: [],
      prompt: String.raw`Mets sous forme algébrique $(1 + 2\mathrm{i})^2$.`,
      answer: '-3+4*i',
      mistakes: [{ expr: '5+4*i', msg: String.raw`$(2\mathrm{i})^2 = 4\mathrm{i}^2 = -4$, pas $+4$.` }, { expr: '-3', msg: String.raw`Tu as oublié le double produit $2 \times 1 \times 2\mathrm{i} = 4\mathrm{i}$.` }],
      hint: String.raw`$(a + b)^2 = a^2 + 2ab + b^2$ avec $b = 2\mathrm{i}$.`,
      explain: String.raw`$(1 + 2\mathrm{i})^2 = 1 + 4\mathrm{i} + 4\mathrm{i}^2 = 1 + 4\mathrm{i} - 4 = -3 + 4\mathrm{i}$.` },
    { id: 'm7-x-003', level: 1, check: 'value', vars: [],
      prompt: String.raw`Calcule $\mathrm{i}^{2026}$.`,
      answer: '-1',
      mistakes: [{ expr: '1', msg: String.raw`2026 n'est pas un multiple de 4 : $2026 = 4 \times 506 + 2$.` }, { expr: 'i', msg: String.raw`Regarde le reste de 2026 dans la division par 4 : c'est 2, pas 1.` }],
      hint: String.raw`$\mathrm{i}^4 = 1$ : seul compte le reste de l'exposant modulo 4.`,
      explain: String.raw`$2026 = 4 \times 506 + 2$, donc $\mathrm{i}^{2026} = (\mathrm{i}^4)^{506}\,\mathrm{i}^2 = 1 \times (-1) = -1$.` },
    { id: 'm7-x-004', level: 1, check: 'tuple', vars: [],
      prompt: String.raw`Donne la partie réelle puis la partie imaginaire de $(1 + \mathrm{i})^3$ (format : Re;Im).`,
      answer: '-2;2',
      hint: String.raw`Commence par $(1 + \mathrm{i})^2 = 2\mathrm{i}$.`,
      explain: String.raw`$(1 + \mathrm{i})^2 = 2\mathrm{i}$, donc $(1 + \mathrm{i})^3 = 2\mathrm{i}(1 + \mathrm{i}) = 2\mathrm{i} + 2\mathrm{i}^2 = -2 + 2\mathrm{i}$ : partie réelle $-2$, partie imaginaire $2$.` },
    { id: 'm7-x-005', level: 1, check: 'value', vars: [],
      prompt: String.raw`Calcule le module $|3 - 4\mathrm{i}|$.`,
      answer: '5',
      mistakes: [{ expr: '25', msg: String.raw`$25 = |z|^2$ : n'oublie pas la racine carrée.` }, { expr: '7', msg: String.raw`Le module n'est pas $|a| + |b|$ mais $\sqrt{a^2 + b^2}$.` }],
      hint: String.raw`$|a + \mathrm{i}b| = \sqrt{a^2 + b^2}$.`,
      explain: String.raw`$|3 - 4\mathrm{i}| = \sqrt{3^2 + (-4)^2} = \sqrt{9 + 16} = \sqrt{25} = 5$.` },
    { id: 'm7-x-006', level: 2, check: 'value', vars: [],
      prompt: String.raw`Mets sous forme algébrique $\dfrac{1}{1 + \mathrm{i}}$.`,
      answer: '1/2-i/2',
      mistakes: [{ expr: '1-i', msg: String.raw`Tu as multiplié par le conjugué en haut seulement : il faut aussi diviser par $(1 + \mathrm{i})(1 - \mathrm{i}) = 2$.` }, { expr: '1/2+i/2', msg: String.raw`Erreur de signe : le conjugué de $1 + \mathrm{i}$ est $1 - \mathrm{i}$.` }],
      hint: String.raw`Multiplie haut et bas par le conjugué $1 - \mathrm{i}$.`,
      explain: String.raw`$\frac{1}{1 + \mathrm{i}} = \frac{1 - \mathrm{i}}{(1 + \mathrm{i})(1 - \mathrm{i})} = \frac{1 - \mathrm{i}}{2} = \frac{1}{2} - \frac{1}{2}\mathrm{i}$.` },
    { id: 'm7-x-007', level: 2, check: 'value', vars: [],
      prompt: String.raw`Mets sous forme algébrique $\dfrac{3 + \mathrm{i}}{1 - \mathrm{i}}$.`,
      answer: '1+2*i',
      mistakes: [{ expr: '2+4*i', msg: String.raw`Tu as oublié de diviser par $(1 - \mathrm{i})(1 + \mathrm{i}) = 2$.` }, { expr: '2-i', msg: String.raw`Tu as multiplié par $1 - \mathrm{i}$ ; il faut multiplier par le **conjugué** du dénominateur, $1 + \mathrm{i}$.` }],
      hint: String.raw`Multiplie numérateur et dénominateur par $1 + \mathrm{i}$.`,
      explain: String.raw`$\frac{(3 + \mathrm{i})(1 + \mathrm{i})}{(1 - \mathrm{i})(1 + \mathrm{i})} = \frac{3 + 3\mathrm{i} + \mathrm{i} + \mathrm{i}^2}{2} = \frac{2 + 4\mathrm{i}}{2} = 1 + 2\mathrm{i}$.` },
    { id: 'm7-x-008', level: 2, check: 'tuple', vars: [],
      prompt: String.raw`Donne la partie réelle puis la partie imaginaire de $\dfrac{1 + 2\mathrm{i}}{3 - \mathrm{i}}$ (format : Re;Im).`,
      answer: '1/10;7/10',
      hint: String.raw`Multiplie haut et bas par $3 + \mathrm{i}$ ; le dénominateur devient $3^2 + 1^2$.`,
      explain: String.raw`$(1 + 2\mathrm{i})(3 + \mathrm{i}) = 3 + \mathrm{i} + 6\mathrm{i} + 2\mathrm{i}^2 = 1 + 7\mathrm{i}$ et $(3 - \mathrm{i})(3 + \mathrm{i}) = 10$, donc le quotient vaut $\frac{1}{10} + \frac{7}{10}\mathrm{i}$.` },
    { id: 'm7-x-009', level: 2, check: 'value', vars: [],
      prompt: String.raw`Dans le plan complexe, $A$ et $B$ ont pour affixes $1 + 2\mathrm{i}$ et $4 - 2\mathrm{i}$. Calcule la distance $AB$.`,
      answer: '5',
      mistakes: [{ expr: 'sqrt(5)', msg: String.raw`$AB = |z_B - z_A|$, pas $|z_B| - |z_A|$ : le module d'une différence n'est pas la différence des modules.` }],
      hint: String.raw`$AB = |z_B - z_A|$.`,
      explain: String.raw`$z_B - z_A = 3 - 4\mathrm{i}$, donc $AB = \sqrt{9 + 16} = 5$.` },
    { id: 'm7-x-010', level: 1, check: 'value', vars: [],
      prompt: String.raw`Donne l'argument principal (en radians, dans $]-\pi, \pi]$) de $1 + \mathrm{i}\sqrt{3}$.`,
      answer: 'pi/3',
      mistakes: [{ expr: 'pi/6', msg: String.raw`Tu as échangé cosinus et sinus : $\cos\theta = \frac{1}{2}$ et $\sin\theta = \frac{\sqrt{3}}{2}$.` }],
      hint: String.raw`Module 2 ; cherche $\theta$ avec $\cos\theta = \frac{1}{2}$ et $\sin\theta = \frac{\sqrt{3}}{2}$.`,
      explain: String.raw`$|z| = \sqrt{1 + 3} = 2$, $\cos\theta = \frac{1}{2}$, $\sin\theta = \frac{\sqrt{3}}{2}$, donc $\theta = \frac{\pi}{3}$.` },
    { id: 'm7-x-011', level: 2, check: 'value', vars: [],
      prompt: String.raw`Donne l'argument principal (en radians, dans $]-\pi, \pi]$) de $-1 + \mathrm{i}\sqrt{3}$.`,
      answer: '2*pi/3',
      mistakes: [{ expr: '-pi/3', msg: String.raw`$\arctan(-\sqrt{3}) = -\frac{\pi}{3}$, mais $a \lt 0$ : le point est dans le 2e quadrant, ajoute $\pi$.` }, { expr: 'pi/3', msg: String.raw`$\frac{\pi}{3}$ est l'argument de $1 + \mathrm{i}\sqrt{3}$ ; ici la partie réelle est négative.` }],
      hint: String.raw`Place le point : partie réelle négative, partie imaginaire positive.`,
      explain: String.raw`$|z| = 2$, $\cos\theta = -\frac{1}{2}$, $\sin\theta = \frac{\sqrt{3}}{2}$, donc $\theta = \frac{2\pi}{3}$. Avec arctan : $\arctan(-\sqrt{3}) + \pi = -\frac{\pi}{3} + \pi = \frac{2\pi}{3}$.` },
    { id: 'm7-x-012', level: 2, check: 'value', vars: [],
      prompt: String.raw`Donne l'argument principal (en radians, dans $]-\pi, \pi]$) de $-1 - \mathrm{i}$.`,
      answer: '-3*pi/4',
      mistakes: [{ expr: 'pi/4', msg: String.raw`$\arctan\frac{-1}{-1} = \frac{\pi}{4}$ sans correction : or le point est dans le 3e quadrant.` }, { expr: '5*pi/4', msg: String.raw`$\frac{5\pi}{4}$ est un argument, mais pas l'argument principal : retire $2\pi$.` }, { expr: '3*pi/4', msg: String.raw`$\frac{3\pi}{4}$ est l'argument de $-1 + \mathrm{i}$ ; ici $\sin\theta \lt 0$.` }],
      hint: String.raw`$a \lt 0$ et $b \lt 0$ : $\theta = \arctan\frac{b}{a} - \pi$.`,
      explain: String.raw`$\cos\theta = \sin\theta = -\frac{\sqrt{2}}{2}$, donc $\theta = -\frac{3\pi}{4}$. Avec arctan : $\arctan(1) - \pi = \frac{\pi}{4} - \pi = -\frac{3\pi}{4}$.` },
    { id: 'm7-x-013', level: 3, check: 'value', vars: [],
      prompt: String.raw`Donne l'argument principal (en radians, dans $]-\pi, \pi]$) de $-\sqrt{3} - \mathrm{i}$.`,
      answer: '-5*pi/6',
      mistakes: [{ expr: 'pi/6', msg: String.raw`$\arctan\frac{-1}{-\sqrt{3}} = \frac{\pi}{6}$, mais le point est dans le 3e quadrant : retire $\pi$.` }, { expr: '7*pi/6', msg: String.raw`$\frac{7\pi}{6}$ est un argument, mais pas dans $]-\pi, \pi]$.` }, { expr: '-pi/6', msg: String.raw`$-\frac{\pi}{6}$ est l'argument de $\sqrt{3} - \mathrm{i}$ : ici la partie réelle est négative.` }],
      hint: String.raw`Module 2 ; $\cos\theta = -\frac{\sqrt{3}}{2}$, $\sin\theta = -\frac{1}{2}$.`,
      explain: String.raw`$|z| = 2$, $\cos\theta = -\frac{\sqrt{3}}{2}$ et $\sin\theta = -\frac{1}{2}$ : $\theta = -\frac{5\pi}{6}$. Avec arctan : $\frac{\pi}{6} - \pi = -\frac{5\pi}{6}$.` },
    { id: 'm7-x-014', level: 2, check: 'tuple', vars: [],
      prompt: String.raw`Donne le module puis l'argument principal de $-\sqrt{3} + \mathrm{i}$ (format : module;argument).`,
      answer: '2;5*pi/6',
      hint: String.raw`Module $\sqrt{3 + 1}$ ; point dans le 2e quadrant.`,
      explain: String.raw`$|z| = \sqrt{3 + 1} = 2$, $\cos\theta = -\frac{\sqrt{3}}{2}$, $\sin\theta = \frac{1}{2}$ : $\theta = \frac{5\pi}{6}$ (ou $\arctan(-\frac{1}{\sqrt{3}}) + \pi = -\frac{\pi}{6} + \pi$).` },
    { id: 'm7-x-015', level: 2, check: 'value', vars: [],
      prompt: String.raw`Écris $-1 + \mathrm{i}\sqrt{3}$ sous forme exponentielle $r\,\mathrm{e}^{\mathrm{i}\theta}$ avec $r \gt 0$ et $\theta \in ]-\pi, \pi]$ (syntaxe : r*exp(i*θ)).`,
      answer: '2*exp(2*i*pi/3)',
      mistakes: [{ expr: '2*exp(-i*pi/3)', msg: String.raw`$2\mathrm{e}^{-\mathrm{i}\pi/3} = 1 - \mathrm{i}\sqrt{3}$ : arctan non corrigé (partie réelle négative, ajoute $\pi$).` }, { expr: '4*exp(2*i*pi/3)', msg: String.raw`Le module est $\sqrt{1 + 3} = 2$ : n'oublie pas la racine.` }, { expr: '2*exp(i*pi/3)', msg: String.raw`$2\mathrm{e}^{\mathrm{i}\pi/3} = 1 + \mathrm{i}\sqrt{3}$ : la partie réelle doit être négative.` }],
      hint: String.raw`Calcule le module, puis l'argument (2e quadrant).`,
      explain: String.raw`$r = \sqrt{1 + 3} = 2$, $\cos\theta = -\frac{1}{2}$, $\sin\theta = \frac{\sqrt{3}}{2}$, donc $-1 + \mathrm{i}\sqrt{3} = 2\,\mathrm{e}^{2\mathrm{i}\pi/3}$.` },
    { id: 'm7-x-016', level: 1, check: 'value', vars: [],
      prompt: String.raw`Mets sous forme algébrique $2\,\mathrm{e}^{\mathrm{i}\pi/3}$ (valeur exacte).`,
      answer: '1+i*sqrt(3)',
      mistakes: [{ expr: 'sqrt(3)+i', msg: String.raw`Tu as échangé cosinus et sinus : $\cos\frac{\pi}{3} = \frac{1}{2}$, $\sin\frac{\pi}{3} = \frac{\sqrt{3}}{2}$.` }],
      hint: String.raw`$r\mathrm{e}^{\mathrm{i}\theta} = r\cos\theta + \mathrm{i}\,r\sin\theta$.`,
      explain: String.raw`$2\,\mathrm{e}^{\mathrm{i}\pi/3} = 2\left(\frac{1}{2} + \mathrm{i}\frac{\sqrt{3}}{2}\right) = 1 + \mathrm{i}\sqrt{3}$.` },
    { id: 'm7-x-017', level: 1, check: 'value', vars: [],
      prompt: String.raw`Mets sous forme algébrique $\mathrm{e}^{\mathrm{i}\pi/3} \times \mathrm{e}^{\mathrm{i}\pi/6}$.`,
      answer: 'i',
      mistakes: [{ expr: 'exp(i*pi^2/18)', msg: String.raw`Les arguments s'**ajoutent** dans un produit, ils ne se multiplient pas.` }],
      hint: String.raw`$\mathrm{e}^{\mathrm{i}a}\,\mathrm{e}^{\mathrm{i}b} = \mathrm{e}^{\mathrm{i}(a + b)}$.`,
      explain: String.raw`$\frac{\pi}{3} + \frac{\pi}{6} = \frac{\pi}{2}$, donc le produit vaut $\mathrm{e}^{\mathrm{i}\pi/2} = \mathrm{i}$.` },
    { id: 'm7-x-018', level: 2, check: 'value', vars: [],
      prompt: String.raw`Calcule $(1 + \mathrm{i})^8$.`,
      answer: '16',
      mistakes: [{ expr: '-16', msg: String.raw`$8 \times \frac{\pi}{4} = 2\pi$ et $\mathrm{e}^{2\mathrm{i}\pi} = 1$ (pas $-1$).` }, { expr: '256', msg: String.raw`Le module de $1 + \mathrm{i}$ est $\sqrt{2}$, pas 2 : $(\sqrt{2})^8 = 16$.` }, { expr: '16*i', msg: String.raw`$\mathrm{e}^{2\mathrm{i}\pi} = 1$ : le résultat est réel.` }],
      hint: String.raw`$1 + \mathrm{i} = \sqrt{2}\,\mathrm{e}^{\mathrm{i}\pi/4}$, ou bien $(1 + \mathrm{i})^2 = 2\mathrm{i}$.`,
      explain: String.raw`$(1 + \mathrm{i})^8 = (\sqrt{2})^8\,\mathrm{e}^{8\mathrm{i}\pi/4} = 16\,\mathrm{e}^{2\mathrm{i}\pi} = 16$. Autre voie : $\left((1+\mathrm{i})^2\right)^4 = (2\mathrm{i})^4 = 16\,\mathrm{i}^4 = 16$.` },
    { id: 'm7-x-019', level: 3, check: 'value', vars: [],
      prompt: String.raw`Calcule $(1 - \mathrm{i})^5$ sous forme algébrique.`,
      answer: '-4+4*i',
      mistakes: [{ expr: '4-4*i', msg: String.raw`$(1 - \mathrm{i})^2 = -2\mathrm{i}$, donc $(1 - \mathrm{i})^4 = (-2\mathrm{i})^2 = -4$ (et non $+4$).` }, { expr: '-4-4*i', msg: String.raw`C'est le conjugué : l'argument de $1 - \mathrm{i}$ est $-\frac{\pi}{4}$, pas $+\frac{\pi}{4}$.` }],
      hint: String.raw`$1 - \mathrm{i} = \sqrt{2}\,\mathrm{e}^{-\mathrm{i}\pi/4}$.`,
      explain: String.raw`$(1 - \mathrm{i})^5 = (\sqrt{2})^5\,\mathrm{e}^{-5\mathrm{i}\pi/4} = 4\sqrt{2}\left(-\frac{\sqrt{2}}{2} + \mathrm{i}\frac{\sqrt{2}}{2}\right) = -4 + 4\mathrm{i}$. Vérification : $(1 - \mathrm{i})^4 = (-2\mathrm{i})^2 = -4$, puis $-4(1 - \mathrm{i}) = -4 + 4\mathrm{i}$.` },
    { id: 'm7-x-020', level: 2, check: 'expr', vars: ['x'], domain: [-3, 3],
      prompt: String.raw`Pour $x \in ]-\pi, \pi[$, exprime le module $|1 + \mathrm{e}^{\mathrm{i}x}|$ en fonction de $x$ (forme simplifiée avec un cosinus).`,
      answer: '2*cos(x/2)',
      mistakes: [{ expr: '2', msg: String.raw`$|1 + \mathrm{e}^{\mathrm{i}x}| \neq |1| + |\mathrm{e}^{\mathrm{i}x}|$ : le module n'est pas additif.` }, { expr: '2*cos(x)', msg: String.raw`L'angle est divisé par 2 : on factorise par $\mathrm{e}^{\mathrm{i}x/2}$.` }],
      hint: String.raw`Factorise par l'angle moitié : $1 + \mathrm{e}^{\mathrm{i}x} = \mathrm{e}^{\mathrm{i}x/2}\left(\mathrm{e}^{-\mathrm{i}x/2} + \mathrm{e}^{\mathrm{i}x/2}\right)$.`,
      explain: String.raw`$1 + \mathrm{e}^{\mathrm{i}x} = \mathrm{e}^{\mathrm{i}x/2} \times 2\cos\frac{x}{2}$. Comme $|\mathrm{e}^{\mathrm{i}x/2}| = 1$ et $\cos\frac{x}{2} \gt 0$ sur $]-\pi, \pi[$ : $|1 + \mathrm{e}^{\mathrm{i}x}| = 2\cos\frac{x}{2}$.` },
    { id: 'm7-x-021', level: 2, check: 'expr', vars: ['x'],
      prompt: String.raw`Pour $x$ réel, donne la partie réelle de $\dfrac{1}{1 + \mathrm{i}x}$.`,
      answer: '1/(1+x^2)',
      mistakes: [{ expr: '1/(1-x^2)', msg: String.raw`$(1 + \mathrm{i}x)(1 - \mathrm{i}x) = 1 - \mathrm{i}^2x^2 = 1 + x^2$.` }, { expr: '1', msg: String.raw`On ne prend pas la partie réelle du dénominateur : multiplie d'abord par le conjugué.` }],
      hint: String.raw`Multiplie haut et bas par $1 - \mathrm{i}x$.`,
      explain: String.raw`$\frac{1}{1 + \mathrm{i}x} = \frac{1 - \mathrm{i}x}{1 + x^2} = \frac{1}{1 + x^2} - \mathrm{i}\frac{x}{1 + x^2}$ : partie réelle $\frac{1}{1 + x^2}$.` },
    { id: 'm7-x-022', level: 2, check: 'expr', vars: ['x'],
      prompt: String.raw`Linéarise $\sin^2 x$ (exprime-le à l'aide de $\cos 2x$).`,
      answer: '(1-cos(2*x))/2',
      mistakes: [{ expr: '(1+cos(2*x))/2', msg: String.raw`C'est la linéarisation de $\cos^2 x$. Vérifie en $x = 0$ : $\sin^2 0 = 0$.` }, { expr: '(1-cos(x))/2', msg: String.raw`L'angle doit être doublé : $\sin^2 x$ fait apparaître $\cos 2x$.` }],
      hint: String.raw`$\sin^2 x = \left(\frac{\mathrm{e}^{\mathrm{i}x} - \mathrm{e}^{-\mathrm{i}x}}{2\mathrm{i}}\right)^2$, avec $(2\mathrm{i})^2 = -4$.`,
      explain: String.raw`$\sin^2 x = \frac{\mathrm{e}^{2\mathrm{i}x} - 2 + \mathrm{e}^{-2\mathrm{i}x}}{-4} = \frac{2\cos 2x - 2}{-4} = \frac{1 - \cos 2x}{2}$.` },
    { id: 'm7-x-023', level: 2, check: 'tuple', vars: [],
      prompt: String.raw`On écrit $\cos^3 x = a\cos 3x + b\cos x$ pour tout réel $x$. Donne $a$ puis $b$ (format : a;b).`,
      answer: '1/4;3/4',
      hint: String.raw`Euler puis binôme : $\left(\frac{\mathrm{e}^{\mathrm{i}x} + \mathrm{e}^{-\mathrm{i}x}}{2}\right)^3$.`,
      explain: String.raw`$\cos^3 x = \frac{\mathrm{e}^{3\mathrm{i}x} + 3\mathrm{e}^{\mathrm{i}x} + 3\mathrm{e}^{-\mathrm{i}x} + \mathrm{e}^{-3\mathrm{i}x}}{8} = \frac{2\cos 3x + 6\cos x}{8}$, donc $a = \frac{1}{4}$ et $b = \frac{3}{4}$. Vérification en $x = 0$ : $\frac{1}{4} + \frac{3}{4} = 1$.` },
    { id: 'm7-x-024', level: 3, check: 'expr', vars: ['x'],
      prompt: String.raw`Linéarise $\sin^3 x$ (exprime-le à l'aide de $\sin x$ et $\sin 3x$).`,
      answer: '(3*sin(x)-sin(3*x))/4',
      mistakes: [{ expr: '(sin(3*x)-3*sin(x))/4', msg: String.raw`Tu obtiens $-\sin^3 x$ : $(2\mathrm{i})^3 = -8\mathrm{i}$, n'oublie pas le signe moins.` }, { expr: '(sin(3*x)+3*sin(x))/4', msg: String.raw`Ce n'est pas la même structure que $\cos^3 x$ : vérifie en $x = \frac{\pi}{2}$ (on doit trouver 1).` }],
      hint: String.raw`$\sin^3 x = \frac{(\mathrm{e}^{\mathrm{i}x} - \mathrm{e}^{-\mathrm{i}x})^3}{(2\mathrm{i})^3}$ et $(2\mathrm{i})^3 = -8\mathrm{i}$.`,
      explain: String.raw`$(\mathrm{e}^{\mathrm{i}x} - \mathrm{e}^{-\mathrm{i}x})^3 = \mathrm{e}^{3\mathrm{i}x} - 3\mathrm{e}^{\mathrm{i}x} + 3\mathrm{e}^{-\mathrm{i}x} - \mathrm{e}^{-3\mathrm{i}x} = 2\mathrm{i}\sin 3x - 6\mathrm{i}\sin x$. En divisant par $-8\mathrm{i}$ : $\sin^3 x = \frac{3\sin x - \sin 3x}{4}$.` },
    { id: 'm7-x-025', level: 3, check: 'expr', vars: ['x'],
      prompt: String.raw`À l'aide de la formule de Moivre, exprime $\sin 3x$ comme un polynôme en $\sin x$.`,
      answer: '3*sin(x)-4*sin(x)^3',
      mistakes: [{ expr: '4*sin(x)^3-3*sin(x)', msg: String.raw`Signe inversé : tu obtiens $-\sin 3x$.` }, { expr: '3*sin(x)-sin(x)^3', msg: String.raw`Dans $3\cos^2 x\sin x$, remplace $\cos^2 x$ par $1 - \sin^2 x$ (et pas par 1).` }],
      hint: String.raw`$\sin 3x = \operatorname{Im}\left((\cos x + \mathrm{i}\sin x)^3\right)$, puis $\cos^2 x = 1 - \sin^2 x$.`,
      explain: String.raw`$\operatorname{Im}(c + \mathrm{i}s)^3 = 3c^2 s - s^3 = 3(1 - s^2)s - s^3 = 3s - 4s^3$, donc $\sin 3x = 3\sin x - 4\sin^3 x$.` },
    { id: 'm7-x-026', level: 3, check: 'antideriv', vars: ['x'],
      prompt: String.raw`En linéarisant d'abord, donne une primitive de $\cos^2 x$.`,
      answer: 'x/2+sin(2*x)/4',
      mistakes: [{ expr: 'cos(x)^3/3', msg: String.raw`$\int u^2 \neq \frac{u^3}{3}$ quand $u = \cos x$ : il manque le facteur $u'$. Linéarise d'abord.` }, { expr: 'x/2+sin(2*x)/2', msg: String.raw`Une primitive de $\cos 2x$ est $\frac{\sin 2x}{2}$, donc celle de $\frac{\cos 2x}{2}$ est $\frac{\sin 2x}{4}$.` }],
      hint: String.raw`$\cos^2 x = \frac{1 + \cos 2x}{2}$.`,
      explain: String.raw`$\cos^2 x = \frac{1}{2} + \frac{\cos 2x}{2}$, donc une primitive est $\frac{x}{2} + \frac{\sin 2x}{4}$.` },
    { id: 'm7-x-027', level: 3, check: 'antideriv', vars: ['x'],
      prompt: String.raw`Donne une primitive de $\mathrm{e}^{x}\cos x$ en utilisant $\mathrm{e}^{x}\cos x = \operatorname{Re}\left(\mathrm{e}^{(1 + \mathrm{i})x}\right)$.`,
      answer: 'exp(x)*(cos(x)+sin(x))/2',
      mistakes: [{ expr: 'exp(x)*sin(x)', msg: String.raw`On ne primitive pas facteur par facteur : primitive $\mathrm{e}^{(1+\mathrm{i})x}$ puis prends la partie réelle.` }, { expr: 'exp(x)*(cos(x)+sin(x))', msg: String.raw`Il manque le facteur $\frac{1}{2}$ : $\frac{1}{1 + \mathrm{i}} = \frac{1 - \mathrm{i}}{2}$.` }],
      hint: String.raw`Une primitive de $\mathrm{e}^{(1 + \mathrm{i})x}$ est $\frac{\mathrm{e}^{(1 + \mathrm{i})x}}{1 + \mathrm{i}}$, et $\frac{1}{1 + \mathrm{i}} = \frac{1 - \mathrm{i}}{2}$.`,
      explain: String.raw`$\frac{\mathrm{e}^{(1+\mathrm{i})x}}{1 + \mathrm{i}} = \frac{1 - \mathrm{i}}{2}\,\mathrm{e}^{x}(\cos x + \mathrm{i}\sin x)$, dont la partie réelle est $\frac{\mathrm{e}^{x}(\cos x + \sin x)}{2}$. Vérification par dérivation : $\frac{\mathrm{e}^x(\cos x + \sin x) + \mathrm{e}^x(-\sin x + \cos x)}{2} = \mathrm{e}^x\cos x$.` },
    { id: 'm7-x-028', level: 2, check: 'set', vars: [],
      prompt: String.raw`Résous dans $\mathbb{C}$ : $z^2 - 2z + 5 = 0$ (sépare les solutions par ;).`,
      answer: '1+2*i;1-2*i',
      hint: String.raw`$\Delta = -16 = (4\mathrm{i})^2$.`,
      explain: String.raw`$\Delta = 4 - 20 = -16 \lt 0$ : $z = \frac{2 \pm 4\mathrm{i}}{2} = 1 \pm 2\mathrm{i}$ (racines conjuguées).` },
    { id: 'm7-x-029', level: 2, check: 'set', vars: [],
      prompt: String.raw`Donne les trois racines cubiques de l'unité, solutions de $z^3 = 1$, sous forme algébrique (sépare-les par ;).`,
      answer: '1;-1/2+i*sqrt(3)/2;-1/2-i*sqrt(3)/2',
      hint: String.raw`$z_k = \mathrm{e}^{2\mathrm{i}k\pi/3}$ pour $k = 0, 1, 2$.`,
      explain: String.raw`$1$, $\mathrm{e}^{2\mathrm{i}\pi/3} = -\frac{1}{2} + \mathrm{i}\frac{\sqrt{3}}{2}$ et $\mathrm{e}^{4\mathrm{i}\pi/3} = -\frac{1}{2} - \mathrm{i}\frac{\sqrt{3}}{2}$ (triangle équilatéral, somme nulle).` },
    { id: 'm7-x-030', level: 3, check: 'set', vars: [],
      prompt: String.raw`Trouve les deux racines carrées de $3 + 4\mathrm{i}$ sous forme algébrique (sépare-les par ;).`,
      answer: '2+i;-2-i',
      hint: String.raw`Pose $(x + \mathrm{i}y)^2 = 3 + 4\mathrm{i}$ : $x^2 - y^2 = 3$, $x^2 + y^2 = 5$, $2xy = 4$.`,
      explain: String.raw`$x^2 - y^2 = 3$ et $x^2 + y^2 = |3 + 4\mathrm{i}| = 5$ donnent $x^2 = 4$, $y^2 = 1$ ; $xy = 2 \gt 0$, donc $(x, y) = (2, 1)$ ou $(-2, -1)$ : $\pm(2 + \mathrm{i})$.` },
    { id: 'm7-x-031', level: 3, check: 'set', vars: [],
      prompt: String.raw`Résous dans $\mathbb{C}$ : $z^3 = 8\mathrm{i}$ (solutions sous forme algébrique, séparées par ;).`,
      answer: 'sqrt(3)+i;-sqrt(3)+i;-2*i',
      hint: String.raw`$8\mathrm{i} = 8\,\mathrm{e}^{\mathrm{i}\pi/2}$ : $z = 2\,\mathrm{e}^{\mathrm{i}(\pi/6 + 2k\pi/3)}$.`,
      explain: String.raw`$r^3 = 8$ donc $r = 2$ ; $3\theta \equiv \frac{\pi}{2}\ [2\pi]$ donc $\theta = \frac{\pi}{6}, \frac{5\pi}{6}, \frac{3\pi}{2}$. Solutions : $\sqrt{3} + \mathrm{i}$, $-\sqrt{3} + \mathrm{i}$, $-2\mathrm{i}$.` },
    { id: 'm7-x-032', level: 3, check: 'set', vars: [],
      prompt: String.raw`Résous dans $\mathbb{C}$ : $z^2 - 3z + 3 + \mathrm{i} = 0$ (sépare les solutions par ;).`,
      answer: '1+i;2-i',
      hint: String.raw`$\Delta = -3 - 4\mathrm{i}$ ; cherche $\delta = x + \mathrm{i}y$ avec $\delta^2 = \Delta$.`,
      explain: String.raw`$\Delta = 9 - 4(3 + \mathrm{i}) = -3 - 4\mathrm{i}$. $x^2 - y^2 = -3$, $x^2 + y^2 = 5$, $xy \lt 0$ : $\delta = 1 - 2\mathrm{i}$. Donc $z = \frac{3 \pm (1 - 2\mathrm{i})}{2}$ : $2 - \mathrm{i}$ et $1 + \mathrm{i}$. Vérification : somme $3$, produit $(1+\mathrm{i})(2-\mathrm{i}) = 3 + \mathrm{i}$.` },
    { id: 'm7-x-033', level: 3, check: 'set', vars: [],
      prompt: String.raw`Résous dans $\mathbb{C}$ : $z^2 - (1 + \mathrm{i})z + \mathrm{i} = 0$ (sépare les solutions par ;).`,
      answer: '1;i',
      hint: String.raw`$\Delta = (1 + \mathrm{i})^2 - 4\mathrm{i} = -2\mathrm{i} = (1 - \mathrm{i})^2$. (Ou : cherche deux nombres de somme $1 + \mathrm{i}$ et de produit $\mathrm{i}$.)`,
      explain: String.raw`$\Delta = 2\mathrm{i} - 4\mathrm{i} = -2\mathrm{i}$ et $(1 - \mathrm{i})^2 = -2\mathrm{i}$, donc $z = \frac{(1 + \mathrm{i}) \pm (1 - \mathrm{i})}{2}$, soit $1$ et $\mathrm{i}$. Vérification : $1 + \mathrm{i}$ = somme, $\mathrm{i}$ = produit.` },
    { id: 'm7-x-034', level: 2, check: 'value', vars: [],
      prompt: String.raw`Donne l'affixe de l'image de $A(2 + \mathrm{i})$ par la rotation de centre $\Omega(1)$ et d'angle $\frac{\pi}{2}$.`,
      answer: 'i',
      mistakes: [{ expr: '-1+2*i', msg: String.raw`Tu as tourné autour de $O$ : il faut centrer en $\Omega$, $z' = \omega + \mathrm{i}(z - \omega)$.` }],
      hint: String.raw`$z' - \omega = \mathrm{e}^{\mathrm{i}\pi/2}(z - \omega)$ avec $\omega = 1$.`,
      explain: String.raw`$z' = 1 + \mathrm{i}(2 + \mathrm{i} - 1) = 1 + \mathrm{i}(1 + \mathrm{i}) = 1 + \mathrm{i} - 1 = \mathrm{i}$.` },
    { id: 'm7-x-035', level: 2, check: 'value', vars: [],
      prompt: String.raw`Donne l'affixe de l'image de l'origine $O$ par l'homothétie de centre $\Omega(1 + \mathrm{i})$ et de rapport $-2$.`,
      answer: '3+3*i',
      mistakes: [{ expr: '2+2*i', msg: String.raw`Tu as calculé $k(z - \omega)$ sans rajouter $\omega$ : $z' = \omega + k(z - \omega)$.` }, { expr: '0', msg: String.raw`$O$ n'est pas le centre de l'homothétie : il n'est pas fixe.` }],
      hint: String.raw`$z' = \omega + k(z - \omega)$ avec $z = 0$.`,
      explain: String.raw`$z' = (1 + \mathrm{i}) - 2\left(0 - (1 + \mathrm{i})\right) = (1 + \mathrm{i}) + 2(1 + \mathrm{i}) = 3 + 3\mathrm{i}$.` },
    { id: 'm7-x-036', level: 2, check: 'value', vars: [],
      prompt: String.raw`Un condensateur de capacité $C = 10\ \mu\mathrm{F}$ est alimenté à la pulsation $\omega = 1000\ \mathrm{rad/s}$. Donne son impédance complexe $Z_C$ en ohms (tape i ou j pour l'unité imaginaire).`,
      answer: '-100*i',
      mistakes: [{ expr: '100*i', msg: String.raw`$\frac{1}{j} = -j$, pas $+j$.` }, { expr: '0.01*i', msg: String.raw`Ça, c'est $jC\omega$ (l'admittance) : l'impédance est son inverse.` }],
      hint: String.raw`$Z_C = \frac{1}{jC\omega}$ avec $C\omega = 10^{-5} \times 10^3 = 10^{-2}$.`,
      explain: String.raw`$C\omega = 10^{-2}$, donc $Z_C = \frac{1}{j \times 10^{-2}} = \frac{100}{j} = -100j\ \Omega$.` },
    { id: 'm7-x-037', level: 2, check: 'value', vars: [],
      prompt: String.raw`Une résistance $R = 2\ \Omega$ est montée **en parallèle** avec une bobine telle que $L\omega = 2\ \Omega$. Donne l'impédance complexe équivalente (forme algébrique).`,
      answer: '1+i',
      mistakes: [{ expr: '2+2*i', msg: String.raw`$R + jL\omega$ est l'association **série** ; en parallèle, $Z = \frac{Z_1Z_2}{Z_1 + Z_2}$.` }],
      hint: String.raw`$Z = \frac{R \cdot jL\omega}{R + jL\omega}$.`,
      explain: String.raw`$Z = \frac{2 \times 2j}{2 + 2j} = \frac{2j}{1 + j} = \frac{2j(1 - j)}{2} = j(1 - j) = 1 + j$.` },
    { id: 'm7-x-038', level: 2, check: 'expr', vars: ['x'], domain: [0, 4],
      prompt: String.raw`Filtre de fonction de transfert $H = \dfrac{1}{1 + jx}$ avec $x = RC\omega \geq 0$. Exprime le gain $|H|$ en fonction de $x$.`,
      answer: '1/sqrt(1+x^2)',
      mistakes: [{ expr: '1/(1+x)', msg: String.raw`$|1 + jx| = \sqrt{1 + x^2}$, pas $1 + x$.` }, { expr: '1/(1+x^2)', msg: String.raw`N'oublie pas la racine : $|a + jb| = \sqrt{a^2 + b^2}$.` }],
      hint: String.raw`$\left|\frac{1}{D}\right| = \frac{1}{|D|}$.`,
      explain: String.raw`$|H| = \frac{1}{|1 + jx|} = \frac{1}{\sqrt{1 + x^2}}$.` },
    { id: 'm7-x-039', level: 2, check: 'expr', vars: ['x'], domain: [0.1, 4],
      prompt: String.raw`Même filtre $H = \dfrac{1}{1 + jx}$ avec $x \gt 0$ : exprime la phase $\varphi = \arg H$ (en radians) en fonction de $x$.`,
      answer: '-arctan(x)',
      mistakes: [{ expr: 'arctan(x)', msg: String.raw`$\arg\frac{1}{D} = -\arg D$ : la phase d'un passe-bas est négative.` }, { expr: '-arctan(1/x)', msg: String.raw`$\arg(1 + jx) = \arctan\frac{\operatorname{Im}}{\operatorname{Re}} = \arctan\frac{x}{1}$.` }],
      hint: String.raw`$\arg H = \arg 1 - \arg(1 + jx)$ ; la partie réelle de $1 + jx$ est positive.`,
      explain: String.raw`$\arg(1 + jx) = \arctan x$ (partie réelle $1 \gt 0$, pas de correction), donc $\varphi = 0 - \arctan x = -\arctan x$.` },
    { id: 'm7-x-040', level: 3, check: 'value', vars: [],
      prompt: String.raw`À la pulsation de coupure, $|H| = \frac{1}{\sqrt{2}}$. Donne la valeur exacte du gain en décibels $G = 20\log_{10}|H|$ (log désigne le logarithme décimal).`,
      answer: '-10*log(2)',
      mistakes: [{ expr: '-20*log(2)', msg: String.raw`$\log\frac{1}{\sqrt{2}} = -\frac{1}{2}\log 2$, donc $G = -10\log 2$ (environ $-3$ dB, pas $-6$ dB).` }, { expr: '-3', msg: String.raw`C'est la valeur approchée ; donne la valeur exacte avec log.` }, { expr: '10*log(2)', msg: String.raw`Erreur de signe : $|H| \lt 1$ donne un gain négatif.` }],
      hint: String.raw`$\log\frac{1}{\sqrt{2}} = -\frac{1}{2}\log 2$.`,
      explain: String.raw`$G = 20\log\left(2^{-1/2}\right) = -10\log 2 \approx -3{,}01\ \mathrm{dB}$ : c'est la « coupure à $-3$ dB ».` }
  ]
});
