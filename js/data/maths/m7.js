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
    { id: 'm7-q-001', level: 1, topic: 'Puissances de i', sec: 'm7-s-algebrique', q: String.raw`Que vaut $\mathrm{i}^3$ ?`,
      choices: [String.raw`$\mathrm{i}$`, String.raw`$-1$`, String.raw`$-\mathrm{i}$`, String.raw`$1$`], answer: 2,
      explain: String.raw`On écrit $\mathrm{i}^3 = \mathrm{i}^2 \times \mathrm{i}$ et on utilise la définition $\mathrm{i}^2 = -1$ : on obtient $-\mathrm{i}$. Les puissances de $\mathrm{i}$ tournent en boucle avec une période de 4 : $1$, $\mathrm{i}$, $-1$, $-\mathrm{i}$, puis on recommence.`,
      steps: [
        String.raw`Rappel : $\mathrm{i}$ est le nombre complexe défini par $\mathrm{i}^2 = -1$. Ses puissances successives se calculent en multipliant à chaque fois par $\mathrm{i}$.`,
        String.raw`On décompose l'exposant : $\mathrm{i}^3 = \mathrm{i}^2 \times \mathrm{i}$.`,
        String.raw`On remplace $\mathrm{i}^2$ par $-1$ : $\mathrm{i}^3 = (-1) \times \mathrm{i} = -\mathrm{i}$.`,
        String.raw`Contrôle avec le cycle : $\mathrm{i}^0 = 1$, $\mathrm{i}^1 = \mathrm{i}$, $\mathrm{i}^2 = -1$, $\mathrm{i}^3 = -\mathrm{i}$, $\mathrm{i}^4 = 1$ ✔.`
      ],
      rule: String.raw`$\mathrm{i}^2 = -1$, $\mathrm{i}^3 = -\mathrm{i}$, $\mathrm{i}^4 = 1$ : $\mathrm{i}^n$ ne dépend que du reste de $n$ dans la division par 4.`,
      why: { 0: String.raw`Erreur : croire que toutes les puissances de $\mathrm{i}$ valent $\mathrm{i}$. Or $\mathrm{i}^3 = \mathrm{i}^2 \times \mathrm{i}$, et le facteur $\mathrm{i}^2 = -1$ change le signe.`, 1: String.raw`$-1$ est la valeur de $\mathrm{i}^2$ : tu t'es arrêté une puissance trop tôt. Il faut encore multiplier par $\mathrm{i}$ : $-1 \times \mathrm{i} = -\mathrm{i}$.`, 3: String.raw`$1$ est la valeur de $\mathrm{i}^4$ (ou $\mathrm{i}^0$), pour un exposant multiple de 4. Or 3 n'est pas multiple de 4 (reste 3), donc $\mathrm{i}^3 = -\mathrm{i}$.` } },
    { id: 'm7-q-002', level: 1, topic: 'Parties réelle et imaginaire', sec: 'm7-s-algebrique', q: String.raw`Quelle est la partie imaginaire de $z = 3 - 2\mathrm{i}$ ?`,
      choices: [String.raw`$-2\mathrm{i}$`, String.raw`$-2$`, String.raw`$2$`, String.raw`$3$`], answer: 1,
      explain: String.raw`La partie imaginaire est le **réel** placé devant $\mathrm{i}$, avec son signe. Ici $3 - 2\mathrm{i} = 3 + \mathrm{i} \times (-2)$, donc $\operatorname{Im}(z) = -2$ (sans le $\mathrm{i}$).`,
      steps: [
        String.raw`Rappel : tout complexe s'écrit de façon unique $z = a + \mathrm{i}b$ avec $a$ et $b$ **réels**. On appelle $a = \operatorname{Re}(z)$ la partie réelle et $b = \operatorname{Im}(z)$ la partie imaginaire.`,
        String.raw`On réécrit $z$ sous cette forme en gardant le signe : $3 - 2\mathrm{i} = 3 + \mathrm{i} \times (-2)$.`,
        String.raw`Identification : $a = 3$ et $b = -2$. La partie imaginaire est donc le réel $-2$.`
      ],
      rule: String.raw`$z = a + \mathrm{i}b$ ($a, b \in \mathbb{R}$) : $\operatorname{Re}(z) = a$ et $\operatorname{Im}(z) = b$ (un réel, sans $\mathrm{i}$).`,
      why: { 0: String.raw`Erreur : garder le $\mathrm{i}$. La partie imaginaire est un **nombre réel** (le coefficient devant $\mathrm{i}$), pas le terme $-2\mathrm{i}$ tout entier.`, 2: String.raw`Erreur de signe : $3 - 2\mathrm{i} = 3 + \mathrm{i} \times (-2)$, le coefficient de $\mathrm{i}$ est $-2$ et non $2$.`, 3: String.raw`Confusion des deux parties : $3$ est le terme sans $\mathrm{i}$, c'est la partie **réelle**.` } },
    { id: 'm7-q-003', level: 1, topic: 'Calcul algébrique dans C', sec: 'm7-s-algebrique', q: String.raw`$(1 + \mathrm{i})^2 = $ ?`,
      choices: [String.raw`$2 + 2\mathrm{i}$`, String.raw`$0$`, String.raw`$2\mathrm{i}$`, String.raw`$1 + 2\mathrm{i}$`], answer: 2,
      explain: String.raw`On développe avec $(a + b)^2 = a^2 + 2ab + b^2$ puis on remplace $\mathrm{i}^2$ par $-1$ : $1 + 2\mathrm{i} - 1 = 2\mathrm{i}$. Les parties réelles $1$ et $-1$ s'annulent, il reste un imaginaire pur.`,
      steps: [
        String.raw`Rappel : dans $\mathbb{C}$ on calcule exactement comme dans $\mathbb{R}$ (identités remarquables, distributivité), puis on remplace $\mathrm{i}^2$ par $-1$.`,
        String.raw`Identité remarquable avec $a = 1$ et $b = \mathrm{i}$ : $(1 + \mathrm{i})^2 = 1^2 + 2 \times 1 \times \mathrm{i} + \mathrm{i}^2 = 1 + 2\mathrm{i} + \mathrm{i}^2$.`,
        String.raw`On remplace $\mathrm{i}^2 = -1$ : $1 + 2\mathrm{i} - 1 = 2\mathrm{i}$.`,
        String.raw`Résultat à retenir, très utile pour les puissances : $(1 + \mathrm{i})^2 = 2\mathrm{i}$.`
      ],
      rule: String.raw`$(a + b)^2 = a^2 + 2ab + b^2$ reste vraie dans $\mathbb{C}$, avec $\mathrm{i}^2 = -1$.`,
      why: { 0: String.raw`Erreur : prendre $\mathrm{i}^2 = +1$, ce qui donne $1 + 2\mathrm{i} + 1$. Or $\mathrm{i}^2 = -1$ : le $+1$ et le $-1$ s'annulent.`, 1: String.raw`Erreur : écrire $(1 + \mathrm{i})^2 = 1^2 + \mathrm{i}^2 = 0$ en oubliant le double produit $2 \times 1 \times \mathrm{i} = 2\mathrm{i}$. On a $(a + b)^2 \neq a^2 + b^2$.`, 3: String.raw`Erreur : oublier le terme $\mathrm{i}^2 = -1$ (seulement $1 + 2\mathrm{i}$). Ce terme annule le $1$ de départ.` } },
    { id: 'm7-q-004', level: 1, topic: 'Conjugué d\'un complexe', sec: 'm7-s-algebrique', q: String.raw`Quel est le conjugué de $(1 + 2\mathrm{i})(3 - \mathrm{i})$ ?`,
      choices: [String.raw`$5 + 5\mathrm{i}$`, String.raw`$1 - 5\mathrm{i}$`, String.raw`$-5 + 5\mathrm{i}$`, String.raw`$5 - 5\mathrm{i}$`], answer: 3,
      explain: String.raw`On calcule d'abord le produit, $5 + 5\mathrm{i}$, puis on change le signe de sa partie imaginaire : le conjugué vaut $5 - 5\mathrm{i}$. On peut aussi utiliser $\overline{zz'} = \overline{z}\,\overline{z'}$, ce qui donne le même résultat.`,
      steps: [
        String.raw`Rappel : le conjugué de $z = a + \mathrm{i}b$ est $\overline{z} = a - \mathrm{i}b$ : on change seulement le signe de la partie imaginaire (symétrie par rapport à l'axe réel).`,
        String.raw`Produit, en développant les quatre termes : $(1 + 2\mathrm{i})(3 - \mathrm{i}) = 3 - \mathrm{i} + 6\mathrm{i} - 2\mathrm{i}^2$.`,
        String.raw`Avec $\mathrm{i}^2 = -1$ : $-2\mathrm{i}^2 = +2$, donc le produit vaut $3 + 2 + 5\mathrm{i} = 5 + 5\mathrm{i}$.`,
        String.raw`Conjugué : $\overline{5 + 5\mathrm{i}} = 5 - 5\mathrm{i}$.`,
        String.raw`Vérification : $\overline{z}\,\overline{z'} = (1 - 2\mathrm{i})(3 + \mathrm{i}) = 3 + \mathrm{i} - 6\mathrm{i} - 2\mathrm{i}^2 = 5 - 5\mathrm{i}$ ✔.`
      ],
      rule: String.raw`$\overline{a + \mathrm{i}b} = a - \mathrm{i}b$ et $\overline{zz'} = \overline{z}\,\overline{z'}$.`,
      why: { 0: String.raw`$5 + 5\mathrm{i}$ est le produit lui-même : tu as oublié la dernière étape, prendre le conjugué (changer le signe de la partie imaginaire).`, 1: String.raw`Erreur sur $\mathrm{i}^2$ : $-2\mathrm{i}^2 = -2 \times (-1) = +2$, la partie réelle vaut donc $3 + 2 = 5$ et non $3 - 2 = 1$.`, 2: String.raw`Erreur : changer le signe de la partie réelle. Le conjugué ne touche que la partie **imaginaire** ; $-5 + 5\mathrm{i}$ est en fait $-\overline{z}$.` } },
    { id: 'm7-q-005', level: 1, topic: 'Module d\'un complexe', sec: 'm7-s-plan', q: String.raw`Que vaut $|3 - 4\mathrm{i}|$ ?`,
      choices: [String.raw`$5$`, String.raw`$7$`, String.raw`$25$`, String.raw`$\sqrt{7}$`], answer: 0,
      explain: String.raw`Le module est la distance de l'origine au point $(3 ; -4)$ : par Pythagore, $\sqrt{3^2 + (-4)^2} = \sqrt{25} = 5$. Le signe de $b$ disparaît car on l'élève au carré.`,
      steps: [
        String.raw`Rappel : le module de $z = a + \mathrm{i}b$ est la longueur $OM$, où $M$ est le point de coordonnées $(a ; b)$. Par Pythagore : $|z| = \sqrt{a^2 + b^2}$.`,
        String.raw`Ici $a = 3$ et $b = -4$ (coefficient de $\mathrm{i}$, avec son signe).`,
        String.raw`$a^2 + b^2 = 9 + 16 = 25$, donc $|3 - 4\mathrm{i}| = \sqrt{25} = 5$.`,
        String.raw`Vérification : $z\overline{z} = (3 - 4\mathrm{i})(3 + 4\mathrm{i}) = 9 + 16 = 25 = |z|^2$ ✔.`
      ],
      rule: String.raw`$|a + \mathrm{i}b| = \sqrt{a^2 + b^2}$ et $|z|^2 = z\overline{z}$.`,
      why: { 1: String.raw`Erreur : additionner $|3| + |-4| = 7$. Le module n'est pas la somme des valeurs absolues, c'est l'hypoténuse $\sqrt{a^2 + b^2}$ (triangle 3-4-5).`, 2: String.raw`$25 = 3^2 + 4^2 = |z|^2$ : tu as oublié la racine carrée finale.`, 3: String.raw`Erreur : calculer $\sqrt{4^2 - 3^2}$, comme si un $\mathrm{i}^2 = -1$ intervenait. Dans le module, $a$ et $b$ sont réels et on **additionne** leurs carrés.` } },
    { id: 'm7-q-006', level: 1, topic: 'Inverse d\'un complexe', sec: 'm7-s-algebrique', q: String.raw`Que vaut $\dfrac{1}{\mathrm{i}}$ ?`,
      choices: [String.raw`$\mathrm{i}$`, String.raw`$1$`, String.raw`$-1$`, String.raw`$-\mathrm{i}$`], answer: 3,
      explain: String.raw`On multiplie haut et bas par $\mathrm{i}$ : $\frac{1}{\mathrm{i}} = \frac{\mathrm{i}}{\mathrm{i}^2} = \frac{\mathrm{i}}{-1} = -\mathrm{i}$. On vérifie que $\mathrm{i} \times (-\mathrm{i}) = -\mathrm{i}^2 = 1$ : c'est bien l'inverse.`,
      steps: [
        String.raw`Rappel : l'inverse de $z$ est le nombre $w$ tel que $zw = 1$. Pour le calculer, on fait disparaître $\mathrm{i}$ du dénominateur en multipliant haut et bas par un nombre bien choisi.`,
        String.raw`On multiplie numérateur et dénominateur par $\mathrm{i}$ : $\frac{1}{\mathrm{i}} = \frac{1 \times \mathrm{i}}{\mathrm{i} \times \mathrm{i}} = \frac{\mathrm{i}}{\mathrm{i}^2}$.`,
        String.raw`Comme $\mathrm{i}^2 = -1$ : $\frac{\mathrm{i}}{-1} = -\mathrm{i}$.`,
        String.raw`Vérification : $\mathrm{i} \times (-\mathrm{i}) = -\mathrm{i}^2 = -(-1) = 1$ ✔.`
      ],
      rule: String.raw`$\frac{1}{\mathrm{i}} = -\mathrm{i}$ (en électronique : $\frac{1}{j} = -j$).`,
      why: { 0: String.raw`Erreur : croire que $\mathrm{i}$ est son propre inverse. Or $\mathrm{i} \times \mathrm{i} = -1 \neq 1$.`, 1: String.raw`Erreur : « simplifier » $\frac{1}{\mathrm{i}}$ en $1$ comme si $\mathrm{i}$ disparaissait. On aurait alors $\mathrm{i} \times 1 = 1$, faux.`, 2: String.raw`Erreur : confondre l'inverse avec le carré ($\mathrm{i}^2 = -1$). Test : $\mathrm{i} \times (-1) = -\mathrm{i} \neq 1$.` } },
    { id: 'm7-q-007', level: 2, topic: 'Quotient de complexes', sec: 'm7-s-algebrique', q: String.raw`Forme algébrique de $\dfrac{1+\mathrm{i}}{1-\mathrm{i}}$ ?`,
      choices: [String.raw`$\mathrm{i}$`, String.raw`$-\mathrm{i}$`, String.raw`$1$`, String.raw`$2\mathrm{i}$`], answer: 0,
      explain: String.raw`On multiplie numérateur et dénominateur par le conjugué du dénominateur, $1 + \mathrm{i}$ : on obtient $\frac{2\mathrm{i}}{2} = \mathrm{i}$. Vérification : $\mathrm{i}(1 - \mathrm{i}) = \mathrm{i} + 1$ ✔.`,
      steps: [
        String.raw`Rappel : pour mettre un quotient sous forme $a + \mathrm{i}b$, on multiplie haut et bas par le **conjugué du dénominateur** ; le dénominateur devient le réel $|w|^2$.`,
        String.raw`Dénominateur : $(1 - \mathrm{i})(1 + \mathrm{i}) = 1^2 - \mathrm{i}^2 = 1 + 1 = 2$.`,
        String.raw`Numérateur : $(1 + \mathrm{i})(1 + \mathrm{i}) = 1 + 2\mathrm{i} + \mathrm{i}^2 = 2\mathrm{i}$.`,
        String.raw`Quotient : $\frac{2\mathrm{i}}{2} = \mathrm{i}$. Vérification : $\mathrm{i} \times (1 - \mathrm{i}) = \mathrm{i} - \mathrm{i}^2 = 1 + \mathrm{i}$ ✔.`
      ],
      rule: String.raw`$\frac{z}{w} = \frac{z\,\overline{w}}{w\,\overline{w}} = \frac{z\,\overline{w}}{|w|^2}$.`,
      why: { 1: String.raw`Erreur de signe au numérateur : $(1 + \mathrm{i})^2 = 1 + 2\mathrm{i} + \mathrm{i}^2 = +2\mathrm{i}$. Test : $-\mathrm{i}(1 - \mathrm{i}) = -1 - \mathrm{i} \neq 1 + \mathrm{i}$.`, 2: String.raw`Erreur : « barrer » les $\mathrm{i}$ comme des facteurs communs. $1 + \mathrm{i}$ et $1 - \mathrm{i}$ sont différents, leur quotient n'est pas 1.`, 3: String.raw`Erreur : calculer le numérateur $(1 + \mathrm{i})^2 = 2\mathrm{i}$ mais oublier de diviser par le dénominateur $(1 - \mathrm{i})(1 + \mathrm{i}) = 2$.` } },
    { id: 'm7-q-008', level: 2, topic: 'Inverse et conjugué', sec: 'm7-s-algebrique', q: String.raw`Pour $z \neq 0$, $\dfrac{1}{z}$ est égal à :`,
      choices: [String.raw`$\dfrac{\overline{z}}{|z|}$`, String.raw`$\dfrac{\overline{z}}{|z|^2}$`, String.raw`$\overline{z}$`, String.raw`$\dfrac{|z|^2}{\overline{z}}$`], answer: 1,
      explain: String.raw`On part de l'identité $z\overline{z} = |z|^2$ et on multiplie haut et bas par $\overline{z}$ : $\frac{1}{z} = \frac{\overline{z}}{z\overline{z}} = \frac{\overline{z}}{|z|^2}$. Exemple : $\frac{1}{1 + \mathrm{i}} = \frac{1 - \mathrm{i}}{2}$.`,
      steps: [
        String.raw`Rappel : pour $z = a + \mathrm{i}b$, $z\overline{z} = (a + \mathrm{i}b)(a - \mathrm{i}b) = a^2 + b^2 = |z|^2$, un réel positif (non nul si $z \neq 0$).`,
        String.raw`On multiplie numérateur et dénominateur de $\frac{1}{z}$ par $\overline{z}$ : $\frac{1}{z} = \frac{\overline{z}}{z\overline{z}}$.`,
        String.raw`On remplace $z\overline{z}$ par $|z|^2$ : $\frac{1}{z} = \frac{\overline{z}}{|z|^2}$.`,
        String.raw`Contrôle avec $z = 2$ : $\frac{\overline{z}}{|z|^2} = \frac{2}{4} = \frac{1}{2}$ ✔.`
      ],
      rule: String.raw`$z\overline{z} = |z|^2$, donc $\frac{1}{z} = \frac{\overline{z}}{|z|^2}$.`,
      why: { 0: String.raw`Erreur : oublier le carré, car $z\overline{z} = |z|^2$ et non $|z|$. Test avec $z = 2$ : $\frac{2}{2} = 1 \neq \frac{1}{2}$.`, 2: String.raw`Erreur : généraliser un cas particulier. $\frac{1}{z} = \overline{z}$ n'est vrai que si $|z| = 1$ (ex. $\mathrm{e}^{\mathrm{i}\theta}$). Pour $z = 2$ : $\overline{z} = 2 \neq \frac{1}{2}$.`, 3: String.raw`Erreur : fraction retournée. $\frac{|z|^2}{\overline{z}} = \frac{z\overline{z}}{\overline{z}} = z$, c'est $z$ lui-même.` } },
    { id: 'm7-q-009', level: 1, topic: 'Caractérisation des réels', sec: 'm7-s-algebrique', q: String.raw`Un complexe $z$ est réel si et seulement si :`,
      choices: [String.raw`$\overline{z} = -z$`, String.raw`$|z| = 1$`, String.raw`$\overline{z} = z$`, String.raw`$z\overline{z} = 0$`], answer: 2,
      explain: String.raw`$\overline{z} = z$ s'écrit $a - \mathrm{i}b = a + \mathrm{i}b$, donc $b = 0$ : c'est exactement dire que $z$ est réel. Géométriquement, les points fixes de la symétrie d'axe réel sont les points de cet axe.`,
      steps: [
        String.raw`Rappel : $z = a + \mathrm{i}b$ est réel quand sa partie imaginaire $b$ est nulle ; son conjugué est $\overline{z} = a - \mathrm{i}b$.`,
        String.raw`On traduit $\overline{z} = z$ : $a - \mathrm{i}b = a + \mathrm{i}b$, donc $2\mathrm{i}b = 0$.`,
        String.raw`Comme $2\mathrm{i} \neq 0$, cela équivaut à $b = 0$, c'est-à-dire $z \in \mathbb{R}$.`
      ],
      rule: String.raw`$z \in \mathbb{R} \iff \overline{z} = z$ ; $z$ imaginaire pur $\iff \overline{z} = -z$.`,
      why: { 0: String.raw`Confusion réel / imaginaire pur : $\overline{z} = -z$ donne $a - \mathrm{i}b = -a - \mathrm{i}b$, donc $a = 0$, ce qui caractérise les **imaginaires purs**.`, 1: String.raw`Confusion avec le cercle unité : $|z| = 1$ contient des non-réels comme $\mathrm{i}$, et exclut des réels comme $2$.`, 3: String.raw`Erreur : $z\overline{z} = |z|^2 = a^2 + b^2$ ne s'annule que pour $z = 0$ ; cette condition ne décrit qu'un seul point.` } },
    { id: 'm7-q-010', level: 2, topic: 'Module et cercles', sec: 'm7-s-plan', q: String.raw`L'ensemble des points $M(z)$ tels que $|z - 2\mathrm{i}| = 3$ est :`,
      choices: [String.raw`le cercle de centre $O$ et de rayon 3`, String.raw`le cercle de centre le point d'affixe $2\mathrm{i}$ et de rayon 3`, String.raw`le cercle de centre le point d'affixe $-2\mathrm{i}$ et de rayon 3`, String.raw`la droite d'équation $y = 2$`], answer: 1,
      explain: String.raw`$|z - 2\mathrm{i}|$ est la distance $AM$ entre $M$ et le point $A$ d'affixe $2\mathrm{i}$. La condition $AM = 3$ décrit le cercle de centre $A(0 ; 2)$ et de rayon 3, d'équation $x^2 + (y - 2)^2 = 9$.`,
      steps: [
        String.raw`Rappel : si $A$ a pour affixe $a$ et $M$ pour affixe $z$, alors $|z - a| = AM$ (le module d'une différence est une distance).`,
        String.raw`Ici $a = 2\mathrm{i}$ : $A$ est le point de coordonnées $(0 ; 2)$, et la condition s'écrit $AM = 3$.`,
        String.raw`Les points à distance 3 d'un point fixe $A$ forment le cercle de centre $A$ et de rayon 3.`,
        String.raw`Vérification en coordonnées : $|x + \mathrm{i}(y - 2)| = 3 \iff x^2 + (y - 2)^2 = 9$ ✔.`
      ],
      rule: String.raw`$|z - a| = r$ ($r \gt 0$) : cercle de centre $A(a)$ et de rayon $r$.`,
      why: { 0: String.raw`Erreur : ignorer le $-2\mathrm{i}$. Le cercle de centre $O$ serait $|z| = 3$ ; ici on mesure la distance au point d'affixe $2\mathrm{i}$.`, 2: String.raw`Erreur de signe : $|z - a|$ est la distance au point d'affixe $a = +2\mathrm{i}$. Le point $-2\mathrm{i}$ correspondrait à $|z + 2\mathrm{i}| = 3$.`, 3: String.raw`Erreur de nature : « distance à un point fixe = constante » définit un cercle, pas une droite.` } },
    { id: 'm7-q-011', level: 2, topic: 'Module et médiatrices', sec: 'm7-s-plan', q: String.raw`L'ensemble des points $M(z)$ tels que $|z - 1| = |z + \mathrm{i}|$ est :`,
      choices: [String.raw`la médiatrice du segment joignant les points d'affixes $1$ et $\mathrm{i}$`, String.raw`le cercle de centre le point d'affixe 1 passant par le point d'affixe $-\mathrm{i}$`, String.raw`la médiatrice du segment joignant les points d'affixes $1$ et $-\mathrm{i}$`, String.raw`l'axe réel`], answer: 2,
      explain: String.raw`On écrit $|z + \mathrm{i}| = |z - (-\mathrm{i})|$ : la condition dit que $M$ est à égale distance de $A(1)$ et de $B(-\mathrm{i})$. C'est la médiatrice de $[AB]$, ici la droite $y = -x$.`,
      steps: [
        String.raw`Rappel : $|z - a| = AM$. Une égalité $AM = BM$ signifie que $M$ est équidistant de $A$ et $B$ : c'est la définition de la médiatrice de $[AB]$.`,
        String.raw`On met chaque module sous la forme $|z - \text{affixe}|$ : $|z - 1| = AM$ avec $A(1)$, et $|z + \mathrm{i}| = |z - (-\mathrm{i})| = BM$ avec $B(-\mathrm{i})$.`,
        String.raw`Donc l'ensemble est la médiatrice du segment joignant $1$ et $-\mathrm{i}$.`,
        String.raw`Vérification en coordonnées : $(x - 1)^2 + y^2 = x^2 + (y + 1)^2 \iff -2x = 2y \iff y = -x$ ✔.`
      ],
      rule: String.raw`$|z - a| = |z - b|$ : médiatrice de $[AB]$. Attention : $|z + b| = |z - (-b)|$.`,
      why: { 0: String.raw`Erreur de signe : $|z + \mathrm{i}|$ est la distance au point d'affixe $-\mathrm{i}$ (car $z + \mathrm{i} = z - (-\mathrm{i})$), pas au point d'affixe $\mathrm{i}$.`, 1: String.raw`Erreur de nature : un cercle correspond à « distance à **un** point = constante ». Ici on égale deux distances à deux points, c'est une médiatrice.`, 3: String.raw`Erreur : test avec le point $z = 1$ de l'axe réel, $|1 - 1| = 0$ mais $|1 + \mathrm{i}| = \sqrt{2}$. Ce point ne convient pas, donc ce n'est pas l'axe réel.` } },
    { id: 'm7-q-012', level: 2, topic: 'Argument principal', sec: 'm7-s-argument', q: String.raw`Argument principal de $-1 - \mathrm{i}$ ?`,
      choices: [String.raw`$\frac{\pi}{4}$`, String.raw`$-\frac{3\pi}{4}$`, String.raw`$\frac{3\pi}{4}$`, String.raw`$\frac{5\pi}{4}$`], answer: 1,
      explain: String.raw`Le point $(-1 ; -1)$ est dans le 3e quadrant et $\cos\theta = \sin\theta = -\frac{\sqrt{2}}{2}$ : l'argument principal est $-\frac{3\pi}{4}$. Avec arctan, $\arctan 1 = \frac{\pi}{4}$ doit être corrigé de $-\pi$ car $a \lt 0$ et $b \lt 0$.`,
      steps: [
        String.raw`Rappel : un argument de $z \neq 0$ est une mesure de l'angle entre l'axe réel positif et $\overrightarrow{OM}$. L'argument **principal** est celui qui est dans $]-\pi, \pi]$.`,
        String.raw`Module : $|{-1} - \mathrm{i}| = \sqrt{1 + 1} = \sqrt{2}$, donc $\cos\theta = \frac{-1}{\sqrt{2}} = -\frac{\sqrt{2}}{2}$ et $\sin\theta = -\frac{\sqrt{2}}{2}$.`,
        String.raw`Les deux sont négatifs : 3e quadrant, angle de référence $\frac{\pi}{4}$, donc $\theta = -\pi + \frac{\pi}{4} = -\frac{3\pi}{4}$.`,
        String.raw`Avec arctan : $\arctan\frac{-1}{-1} = \frac{\pi}{4}$, puis on retire $\pi$ (car $a \lt 0$, $b \lt 0$) : $\frac{\pi}{4} - \pi = -\frac{3\pi}{4}$ ✔.`
      ],
      rule: String.raw`Si $a \lt 0$ : $\arg z = \arctan\frac{b}{a} + \pi$ (si $b \geq 0$) ou $\arctan\frac{b}{a} - \pi$ (si $b \lt 0$).`,
      why: { 0: String.raw`Erreur : appliquer $\arctan\frac{b}{a} = \arctan 1 = \frac{\pi}{4}$ sans correction de quadrant. $\frac{\pi}{4}$ est l'argument de $1 + \mathrm{i}$, le point opposé.`, 2: String.raw`Erreur de quadrant : $\frac{3\pi}{4}$ est l'argument de $-1 + \mathrm{i}$ (2e quadrant). Ici $b \lt 0$, donc $\sin\theta \lt 0$ et l'angle est négatif.`, 3: String.raw`$\frac{5\pi}{4}$ est bien **un** argument ($\frac{5\pi}{4} - 2\pi = -\frac{3\pi}{4}$), mais il n'est pas dans $]-\pi, \pi]$ : erreur d'intervalle.` } },
    { id: 'm7-q-013', level: 1, topic: 'Argument principal', sec: 'm7-s-argument', q: String.raw`Argument principal de $-2$ ?`,
      choices: [String.raw`$0$`, String.raw`$-2$`, String.raw`$\pi$`, String.raw`$\frac{\pi}{2}$`], answer: 2,
      explain: String.raw`Le point d'affixe $-2$ est sur la demi-droite des abscisses négatives : l'angle avec l'axe réel positif est un demi-tour, soit $\pi$. Vérification : $2\,\mathrm{e}^{\mathrm{i}\pi} = 2\cos\pi = -2$ ✔.`,
      steps: [
        String.raw`Rappel : l'argument est un **angle** (en radians), mesuré depuis l'axe réel positif jusqu'à $\overrightarrow{OM}$ ; l'argument principal est dans $]-\pi, \pi]$.`,
        String.raw`Le point d'affixe $-2$ est $M(-2 ; 0)$ : il est sur l'axe réel, du côté négatif.`,
        String.raw`L'angle entre la demi-droite positive et la demi-droite négative est un demi-tour : $\theta = \pi$.`,
        String.raw`Vérification : $2(\cos\pi + \mathrm{i}\sin\pi) = 2(-1 + 0) = -2$ ✔ (module 2, argument $\pi$).`
      ],
      rule: String.raw`Réel $\gt 0$ : argument $0$ ; réel $\lt 0$ : $\pi$ ; $\mathrm{i}b$ avec $b \gt 0$ : $\frac{\pi}{2}$ ; avec $b \lt 0$ : $-\frac{\pi}{2}$.`,
      why: { 0: String.raw`Erreur : $\arctan\frac{0}{-2} = 0$ sans correction. L'argument $0$ correspond aux réels **positifs** ; pour $a \lt 0$ on ajoute $\pi$.`, 1: String.raw`Erreur : confondre le nombre et son argument. L'argument est un angle ; $-2$ est l'affixe, de module 2.`, 3: String.raw`Erreur de direction : $\frac{\pi}{2}$ est l'argument des imaginaires purs $\mathrm{i}b$ avec $b \gt 0$ (axe vertical vers le haut) ; $-2$ est sur l'axe horizontal.` } },
    { id: 'm7-q-014', level: 3, topic: 'Argument et arctangente', sec: 'm7-s-argument', q: String.raw`Pour $z = a + \mathrm{i}b$ avec $a \lt 0$ et $b \gt 0$, l'argument principal de $z$ vaut :`,
      choices: [String.raw`$\arctan\frac{b}{a}$`, String.raw`$\arctan\frac{b}{a} - \pi$`, String.raw`$\pi - \arctan\frac{b}{a}$`, String.raw`$\arctan\frac{b}{a} + \pi$`], answer: 3,
      explain: String.raw`Le point est dans le 2e quadrant (argument dans $]\frac{\pi}{2}, \pi[$), alors que $\arctan\frac{b}{a} \in ]-\frac{\pi}{2}, 0[$ car $\frac{b}{a} \lt 0$. Ajouter $\pi$ (un demi-tour) ramène dans le bon quadrant.`,
      steps: [
        String.raw`Rappel : $\arctan$ renvoie toujours un angle de $]-\frac{\pi}{2}, \frac{\pi}{2}[$, donc d'un point du demi-plan $a \gt 0$. Pour $a \lt 0$ il faut corriger de $\pm\pi$.`,
        String.raw`Ici $a \lt 0$ et $b \gt 0$ : 2e quadrant, l'argument cherché est dans $]\frac{\pi}{2}, \pi[$.`,
        String.raw`$\frac{b}{a} \lt 0$, donc $\arctan\frac{b}{a} \in ]-\frac{\pi}{2}, 0[$ ; en ajoutant $\pi$ on obtient un angle de $]\frac{\pi}{2}, \pi[$ ✔.`,
        String.raw`Exemple : $-1 + \mathrm{i}$ donne $\arctan(-1) + \pi = -\frac{\pi}{4} + \pi = \frac{3\pi}{4}$, ce qui est juste.`
      ],
      rule: String.raw`$a \lt 0$, $b \geq 0$ : $\arg z = \arctan\frac{b}{a} + \pi$ ; $a \lt 0$, $b \lt 0$ : $\arctan\frac{b}{a} - \pi$.`,
      why: { 0: String.raw`Erreur : oublier la correction de quadrant. $\arctan$ donne un angle du demi-plan $a \gt 0$ ; pour $-1 + \mathrm{i}$ on trouverait $-\frac{\pi}{4}$, faux.`, 1: String.raw`Erreur de cas : on retire $\pi$ quand $b \lt 0$. Ici $b \gt 0$ et $\arctan\frac{b}{a} - \pi \in ]-\frac{3\pi}{2}, -\pi[$, hors de $]-\pi, \pi]$.`, 2: String.raw`Erreur de signe : comme $\arctan\frac{b}{a} \lt 0$, $\pi - \arctan\frac{b}{a} \gt \pi$. Pour $-1 + \mathrm{i}$ on trouverait $\frac{5\pi}{4}$ au lieu de $\frac{3\pi}{4}$.` } },
    { id: 'm7-q-015', level: 1, topic: 'Forme exponentielle', sec: 'm7-s-expo', q: String.raw`Forme exponentielle de $1 + \mathrm{i}$ ?`,
      choices: [String.raw`$2\,\mathrm{e}^{\mathrm{i}\pi/4}$`, String.raw`$\mathrm{e}^{\mathrm{i}\pi/4}$`, String.raw`$\sqrt{2}\,\mathrm{e}^{\mathrm{i}\pi/4}$`, String.raw`$\sqrt{2}\,\mathrm{e}^{\mathrm{i}\pi/2}$`], answer: 2,
      explain: String.raw`Le module vaut $\sqrt{1^2 + 1^2} = \sqrt{2}$ et l'argument $\frac{\pi}{4}$ (car $\cos\theta = \sin\theta = \frac{\sqrt{2}}{2}$). Donc $1 + \mathrm{i} = \sqrt{2}\,\mathrm{e}^{\mathrm{i}\pi/4}$.`,
      steps: [
        String.raw`Rappel : la forme exponentielle est $z = r\,\mathrm{e}^{\mathrm{i}\theta}$, où $r = |z| \gt 0$ est le module et $\theta$ un argument ; $\mathrm{e}^{\mathrm{i}\theta} = \cos\theta + \mathrm{i}\sin\theta$.`,
        String.raw`Module : $r = \sqrt{1^2 + 1^2} = \sqrt{2}$.`,
        String.raw`Argument : $\cos\theta = \frac{1}{\sqrt{2}} = \frac{\sqrt{2}}{2}$ et $\sin\theta = \frac{\sqrt{2}}{2}$, donc $\theta = \frac{\pi}{4}$.`,
        String.raw`Vérification : $\sqrt{2}\left(\frac{\sqrt{2}}{2} + \mathrm{i}\frac{\sqrt{2}}{2}\right) = 1 + \mathrm{i}$ ✔.`
      ],
      rule: String.raw`$a + \mathrm{i}b = r\,\mathrm{e}^{\mathrm{i}\theta}$ avec $r = \sqrt{a^2 + b^2}$, $\cos\theta = \frac{a}{r}$, $\sin\theta = \frac{b}{r}$.`,
      why: { 0: String.raw`Erreur sur le module : $\sqrt{1^2 + 1^2} = \sqrt{2}$, pas $1 + 1 = 2$. Un module n'est pas la somme des parties.`, 1: String.raw`Erreur : oublier le module. $\mathrm{e}^{\mathrm{i}\pi/4}$ est de module 1 alors que $|1 + \mathrm{i}| = \sqrt{2}$ ; ce choix vaut $\frac{\sqrt{2}}{2}(1 + \mathrm{i})$.`, 3: String.raw`Erreur sur l'argument : $\frac{\pi}{2}$ est l'argument de $\mathrm{i}$, et $\sqrt{2}\,\mathrm{e}^{\mathrm{i}\pi/2} = \sqrt{2}\,\mathrm{i}$. Pour $1 + \mathrm{i}$ (diagonale), c'est $\frac{\pi}{4}$.` } },
    { id: 'm7-q-016', level: 2, topic: 'Forme exponentielle', sec: 'm7-s-expo', q: String.raw`Laquelle de ces écritures est **la forme exponentielle** de $-2\mathrm{i}$ ?`,
      choices: [String.raw`$-2\,\mathrm{e}^{\mathrm{i}\pi/2}$`, String.raw`$2\,\mathrm{e}^{-\mathrm{i}\pi/2}$`, String.raw`$2\,\mathrm{e}^{\mathrm{i}\pi/2}$`, String.raw`$2\,\mathrm{e}^{\mathrm{i}\pi}$`], answer: 1,
      explain: String.raw`Dans $r\,\mathrm{e}^{\mathrm{i}\theta}$, le module $r$ doit être strictement positif : ici $r = 2$. Le point $(0 ; -2)$ est sur l'axe imaginaire vers le bas, donc l'argument vaut $-\frac{\pi}{2}$.`,
      steps: [
        String.raw`Rappel : une forme exponentielle $r\,\mathrm{e}^{\mathrm{i}\theta}$ exige $r \gt 0$ (c'est le module) ; le signe est porté par l'argument.`,
        String.raw`Module : $|-2\mathrm{i}| = \sqrt{0^2 + (-2)^2} = 2$.`,
        String.raw`Argument : le point $(0 ; -2)$ est sur la demi-droite des ordonnées négatives, donc $\theta = -\frac{\pi}{2}$.`,
        String.raw`Vérification : $2\left(\cos(-\frac{\pi}{2}) + \mathrm{i}\sin(-\frac{\pi}{2})\right) = 2(0 - \mathrm{i}) = -2\mathrm{i}$ ✔.`
      ],
      rule: String.raw`Forme exponentielle : $r\,\mathrm{e}^{\mathrm{i}\theta}$ avec $r \gt 0$ ; $-1 = \mathrm{e}^{\mathrm{i}\pi}$ permet d'absorber un signe moins.`,
      why: { 0: String.raw`Erreur de forme : l'égalité $-2\,\mathrm{e}^{\mathrm{i}\pi/2} = -2\mathrm{i}$ est vraie, mais le coefficient $-2$ est négatif, ce n'est donc pas une forme exponentielle.`, 2: String.raw`Erreur de signe sur l'argument : $2\,\mathrm{e}^{\mathrm{i}\pi/2} = 2\mathrm{i}$, point situé en haut sur l'axe imaginaire.`, 3: String.raw`Erreur de direction : $2\,\mathrm{e}^{\mathrm{i}\pi} = -2$ est un réel négatif (à gauche sur l'axe réel), pas un imaginaire pur.` } },
    { id: 'm7-q-017', level: 2, topic: 'Produit en forme exponentielle', sec: 'm7-s-expo', q: String.raw`Avec $z = 2\mathrm{e}^{\mathrm{i}\pi/3}$ et $z' = 3\mathrm{e}^{\mathrm{i}\pi/6}$, que vaut $zz'$ ?`,
      choices: [String.raw`$5\,\mathrm{e}^{\mathrm{i}\pi/2}$`, String.raw`$6\,\mathrm{e}^{\mathrm{i}\pi/18}$`, String.raw`$6\,\mathrm{e}^{\mathrm{i}\pi/6}$`, String.raw`$6\mathrm{i}$`], answer: 3,
      explain: String.raw`Dans un produit, on multiplie les modules ($2 \times 3 = 6$) et on ajoute les arguments ($\frac{\pi}{3} + \frac{\pi}{6} = \frac{\pi}{2}$). Donc $zz' = 6\,\mathrm{e}^{\mathrm{i}\pi/2} = 6\mathrm{i}$.`,
      steps: [
        String.raw`Rappel : $\mathrm{e}^{\mathrm{i}a}\,\mathrm{e}^{\mathrm{i}b} = \mathrm{e}^{\mathrm{i}(a + b)}$, donc $r\mathrm{e}^{\mathrm{i}\theta} \times r'\mathrm{e}^{\mathrm{i}\theta'} = rr'\,\mathrm{e}^{\mathrm{i}(\theta + \theta')}$.`,
        String.raw`Modules : $2 \times 3 = 6$.`,
        String.raw`Arguments : $\frac{\pi}{3} + \frac{\pi}{6} = \frac{2\pi}{6} + \frac{\pi}{6} = \frac{3\pi}{6} = \frac{\pi}{2}$.`,
        String.raw`$zz' = 6\,\mathrm{e}^{\mathrm{i}\pi/2} = 6(\cos\frac{\pi}{2} + \mathrm{i}\sin\frac{\pi}{2}) = 6\mathrm{i}$.`
      ],
      rule: String.raw`Produit : modules multipliés, arguments ajoutés. Quotient : modules divisés, arguments soustraits.`,
      why: { 0: String.raw`Erreur : additionner les modules ($2 + 3 = 5$). Les modules se **multiplient** : $|zz'| = |z| \times |z'| = 6$.`, 1: String.raw`Erreur : multiplier les arguments ($\frac{1}{3} \times \frac{1}{6} = \frac{1}{18}$). Ils s'ajoutent, comme les exposants dans $\mathrm{e}^{a}\mathrm{e}^{b} = \mathrm{e}^{a+b}$.`, 2: String.raw`Erreur : soustraire les arguments ($\frac{\pi}{3} - \frac{\pi}{6} = \frac{\pi}{6}$), ce qui est la règle du **quotient**.` } },
    { id: 'm7-q-018', level: 2, topic: 'Puissance et forme exponentielle', sec: 'm7-s-expo', q: String.raw`Que vaut $(1 + \mathrm{i})^8$ ?`,
      choices: [String.raw`$-16$`, String.raw`$16$`, String.raw`$256$`, String.raw`$16\mathrm{i}$`], answer: 1,
      explain: String.raw`Avec $1 + \mathrm{i} = \sqrt{2}\,\mathrm{e}^{\mathrm{i}\pi/4}$ : $(1 + \mathrm{i})^8 = (\sqrt{2})^8\,\mathrm{e}^{2\mathrm{i}\pi} = 16$. On le retrouve avec $(1 + \mathrm{i})^2 = 2\mathrm{i}$, puis $(2\mathrm{i})^4 = 16$.`,
      steps: [
        String.raw`Rappel : pour une puissance, la forme exponentielle est idéale car $(r\,\mathrm{e}^{\mathrm{i}\theta})^n = r^n\,\mathrm{e}^{\mathrm{i}n\theta}$ (on élève le module à la puissance $n$ et on multiplie l'argument par $n$).`,
        String.raw`$|1 + \mathrm{i}| = \sqrt{2}$ et $\arg(1 + \mathrm{i}) = \frac{\pi}{4}$, donc $1 + \mathrm{i} = \sqrt{2}\,\mathrm{e}^{\mathrm{i}\pi/4}$.`,
        String.raw`$(\sqrt{2})^8 = \left((\sqrt{2})^2\right)^4 = 2^4 = 16$ et $8 \times \frac{\pi}{4} = 2\pi$, avec $\mathrm{e}^{2\mathrm{i}\pi} = 1$.`,
        String.raw`Donc $(1 + \mathrm{i})^8 = 16$. Vérification : $(1 + \mathrm{i})^8 = \left((1 + \mathrm{i})^2\right)^4 = (2\mathrm{i})^4 = 16\,\mathrm{i}^4 = 16$ ✔.`
      ],
      rule: String.raw`Formule de Moivre : $(r\,\mathrm{e}^{\mathrm{i}\theta})^n = r^n\,\mathrm{e}^{\mathrm{i}n\theta}$.`,
      why: { 0: String.raw`Erreur : croire que $\mathrm{e}^{2\mathrm{i}\pi} = -1$. C'est $\mathrm{e}^{\mathrm{i}\pi}$ (demi-tour) qui vaut $-1$ ; $\mathrm{e}^{2\mathrm{i}\pi}$ est un tour complet, il vaut $1$.`, 2: String.raw`Erreur sur le module : $256 = 2^8$ suppose $|1 + \mathrm{i}| = 2$. Or $|1 + \mathrm{i}| = \sqrt{2}$, et $(\sqrt{2})^8 = 16$.`, 3: String.raw`Erreur sur l'argument : $8 \times \frac{\pi}{4} = 2\pi$ est un multiple de $2\pi$, le résultat est un réel positif et non un imaginaire pur.` } },
    { id: 'm7-q-019', level: 1, topic: 'Formules d\'Euler', sec: 'm7-s-euler', q: String.raw`Formule d'Euler : $\sin\theta = $ ?`,
      choices: [String.raw`$\dfrac{\mathrm{e}^{\mathrm{i}\theta} - \mathrm{e}^{-\mathrm{i}\theta}}{2}$`, String.raw`$\dfrac{\mathrm{e}^{\mathrm{i}\theta} + \mathrm{e}^{-\mathrm{i}\theta}}{2\mathrm{i}}$`, String.raw`$\dfrac{\mathrm{e}^{\mathrm{i}\theta} - \mathrm{e}^{-\mathrm{i}\theta}}{2\mathrm{i}}$`, String.raw`$\dfrac{\mathrm{e}^{-\mathrm{i}\theta} - \mathrm{e}^{\mathrm{i}\theta}}{2\mathrm{i}}$`], answer: 2,
      explain: String.raw`En soustrayant $\mathrm{e}^{-\mathrm{i}\theta} = \cos\theta - \mathrm{i}\sin\theta$ de $\mathrm{e}^{\mathrm{i}\theta} = \cos\theta + \mathrm{i}\sin\theta$, les cosinus s'éliminent : il reste $2\mathrm{i}\sin\theta$. On divise par $2\mathrm{i}$ pour isoler $\sin\theta$.`,
      steps: [
        String.raw`Rappel : $\mathrm{e}^{\mathrm{i}\theta} = \cos\theta + \mathrm{i}\sin\theta$ et, en changeant $\theta$ en $-\theta$ (cos pair, sin impair), $\mathrm{e}^{-\mathrm{i}\theta} = \cos\theta - \mathrm{i}\sin\theta$.`,
        String.raw`On soustrait : $\mathrm{e}^{\mathrm{i}\theta} - \mathrm{e}^{-\mathrm{i}\theta} = 2\mathrm{i}\sin\theta$.`,
        String.raw`On divise par $2\mathrm{i}$ : $\sin\theta = \frac{\mathrm{e}^{\mathrm{i}\theta} - \mathrm{e}^{-\mathrm{i}\theta}}{2\mathrm{i}}$. (En additionnant, on obtient de même $\cos\theta = \frac{\mathrm{e}^{\mathrm{i}\theta} + \mathrm{e}^{-\mathrm{i}\theta}}{2}$.)`
      ],
      rule: String.raw`$\cos\theta = \frac{\mathrm{e}^{\mathrm{i}\theta} + \mathrm{e}^{-\mathrm{i}\theta}}{2}$, $\sin\theta = \frac{\mathrm{e}^{\mathrm{i}\theta} - \mathrm{e}^{-\mathrm{i}\theta}}{2\mathrm{i}}$.`,
      why: { 0: String.raw`Erreur : oublier le $\mathrm{i}$ au dénominateur. Cette expression vaut $\frac{2\mathrm{i}\sin\theta}{2} = \mathrm{i}\sin\theta$, qui n'est pas réel.`, 1: String.raw`Erreur : mélanger les deux formules. La **somme** vaut $2\cos\theta$, donc cette expression vaut $\frac{\cos\theta}{\mathrm{i}} = -\mathrm{i}\cos\theta$.`, 3: String.raw`Erreur d'ordre au numérateur : $\mathrm{e}^{-\mathrm{i}\theta} - \mathrm{e}^{\mathrm{i}\theta} = -2\mathrm{i}\sin\theta$, donc cette expression vaut $-\sin\theta$.` } },
    { id: 'm7-q-020', level: 1, topic: 'Formule de Moivre', sec: 'm7-s-euler', q: String.raw`Formule de Moivre : $(\cos\theta + \mathrm{i}\sin\theta)^n = $ ?`,
      choices: [String.raw`$\cos^n\theta + \mathrm{i}\sin^n\theta$`, String.raw`$n\cos\theta + \mathrm{i}\,n\sin\theta$`, String.raw`$\cos(n\theta) + \mathrm{i}\sin(n\theta)$`], answer: 2,
      explain: String.raw`On écrit $\cos\theta + \mathrm{i}\sin\theta = \mathrm{e}^{\mathrm{i}\theta}$, puis $(\mathrm{e}^{\mathrm{i}\theta})^n = \mathrm{e}^{\mathrm{i}n\theta} = \cos(n\theta) + \mathrm{i}\sin(n\theta)$. Élever à la puissance $n$ un complexe de module 1 revient à multiplier son **argument** par $n$.`,
      steps: [
        String.raw`Rappel : la formule d'Euler donne $\cos\theta + \mathrm{i}\sin\theta = \mathrm{e}^{\mathrm{i}\theta}$ (complexe de module 1 et d'argument $\theta$).`,
        String.raw`Règle des puissances de l'exponentielle : $(\mathrm{e}^{\mathrm{i}\theta})^n = \mathrm{e}^{\mathrm{i}n\theta}$.`,
        String.raw`On revient en forme trigonométrique : $\mathrm{e}^{\mathrm{i}n\theta} = \cos(n\theta) + \mathrm{i}\sin(n\theta)$.`,
        String.raw`Contrôle avec $n = 2$, $\theta = \frac{\pi}{4}$ : $\left(\frac{\sqrt{2}}{2}(1 + \mathrm{i})\right)^2 = \frac{1}{2} \times 2\mathrm{i} = \mathrm{i}$ et $\cos\frac{\pi}{2} + \mathrm{i}\sin\frac{\pi}{2} = \mathrm{i}$ ✔.`
      ],
      rule: String.raw`$(\cos\theta + \mathrm{i}\sin\theta)^n = \cos(n\theta) + \mathrm{i}\sin(n\theta)$.`,
      why: { 0: String.raw`Erreur : distribuer la puissance sur la somme, alors que $(a + b)^n \neq a^n + b^n$. Pour $n = 2$, $\theta = \frac{\pi}{4}$ on obtiendrait $\frac{1}{2} + \frac{\mathrm{i}}{2}$ au lieu de $\mathrm{i}$.`, 1: String.raw`Erreur : confondre « puissance $n$ » et « multiplication par $n$ ». Le module vaudrait $n$ au lieu de 1 ; c'est l'argument qui est multiplié par $n$.` } },
    { id: 'm7-q-021', level: 2, topic: 'Linéarisation', sec: 'm7-s-euler', q: String.raw`Linéarisation de $\sin^2 x$ :`,
      choices: [String.raw`$\dfrac{1 - \cos 2x}{2}$`, String.raw`$\dfrac{1 + \cos 2x}{2}$`, String.raw`$\dfrac{\cos 2x - 1}{2}$`, String.raw`$\dfrac{1 - \cos x}{2}$`], answer: 0,
      explain: String.raw`De $\cos 2x = 1 - 2\sin^2 x$ on tire $\sin^2 x = \frac{1 - \cos 2x}{2}$. On vérifie en $x = 0$ (on trouve 0) et en $x = \frac{\pi}{2}$ (on trouve 1).`,
      steps: [
        String.raw`Rappel : **linéariser**, c'est remplacer une puissance de $\sin$ ou $\cos$ par une somme de $\cos(kx)$, $\sin(kx)$ sans puissance (utile pour primitiver).`,
        String.raw`Formule de duplication : $\cos 2x = \cos^2 x - \sin^2 x = (1 - \sin^2 x) - \sin^2 x = 1 - 2\sin^2 x$.`,
        String.raw`On isole $\sin^2 x$ : $2\sin^2 x = 1 - \cos 2x$, donc $\sin^2 x = \frac{1 - \cos 2x}{2}$.`,
        String.raw`Vérifications : $x = 0$ donne $\frac{1 - 1}{2} = 0 = \sin^2 0$ ✔ ; $x = \frac{\pi}{2}$ donne $\frac{1 + 1}{2} = 1$ ✔.`
      ],
      rule: String.raw`$\sin^2 x = \frac{1 - \cos 2x}{2}$ et $\cos^2 x = \frac{1 + \cos 2x}{2}$.`,
      why: { 1: String.raw`Confusion avec la formule de $\cos^2 x$. Test en $x = 0$ : elle vaut $1$, alors que $\sin^2 0 = 0$.`, 2: String.raw`Erreur de signe en isolant $\sin^2 x$ : cette expression est toujours $\leq 0$, alors qu'un carré est positif. C'est $-\sin^2 x$.`, 3: String.raw`Erreur : ne pas doubler l'angle. Un carré fait apparaître $\cos 2x$. Test en $x = \frac{\pi}{2}$ : $\frac{1 - 0}{2} = \frac{1}{2} \neq 1$.` } },
    { id: 'm7-q-022', level: 3, topic: 'Linéarisation', sec: 'm7-s-euler', q: String.raw`Linéarisation de $\sin^3 x$ :`,
      choices: [String.raw`$\dfrac{\sin 3x + 3\sin x}{4}$`, String.raw`$\dfrac{3\sin x - \sin 3x}{4}$`, String.raw`$\dfrac{\sin 3x - 3\sin x}{4}$`, String.raw`$\dfrac{3\sin x - \sin 3x}{8}$`], answer: 1,
      explain: String.raw`On écrit $\sin x$ avec Euler, on développe le cube par le binôme et on regroupe les exponentielles conjuguées ; la division par $(2\mathrm{i})^3 = -8\mathrm{i}$ donne $\sin^3 x = \frac{3\sin x - \sin 3x}{4}$. Contrôle en $x = \frac{\pi}{2}$ : $\frac{3 + 1}{4} = 1$ ✔.`,
      steps: [
        String.raw`Rappel (méthode de linéarisation) : on remplace $\sin x$ par $\frac{\mathrm{e}^{\mathrm{i}x} - \mathrm{e}^{-\mathrm{i}x}}{2\mathrm{i}}$, on développe avec le binôme, puis on regroupe $\mathrm{e}^{\mathrm{i}kx} - \mathrm{e}^{-\mathrm{i}kx} = 2\mathrm{i}\sin kx$.`,
        String.raw`Dénominateur : $(2\mathrm{i})^3 = 8\mathrm{i}^3 = -8\mathrm{i}$. Numérateur : $(\mathrm{e}^{\mathrm{i}x} - \mathrm{e}^{-\mathrm{i}x})^3 = \mathrm{e}^{3\mathrm{i}x} - 3\mathrm{e}^{\mathrm{i}x} + 3\mathrm{e}^{-\mathrm{i}x} - \mathrm{e}^{-3\mathrm{i}x}$.`,
        String.raw`Regroupement : $(\mathrm{e}^{3\mathrm{i}x} - \mathrm{e}^{-3\mathrm{i}x}) - 3(\mathrm{e}^{\mathrm{i}x} - \mathrm{e}^{-\mathrm{i}x}) = 2\mathrm{i}\sin 3x - 6\mathrm{i}\sin x$.`,
        String.raw`Division : $\frac{2\mathrm{i}\sin 3x - 6\mathrm{i}\sin x}{-8\mathrm{i}} = \frac{-\sin 3x + 3\sin x}{4}$. Contrôle en $x = \frac{\pi}{2}$ : $\frac{3 - (-1)}{4} = 1 = \sin^3\frac{\pi}{2}$ ✔.`
      ],
      rule: String.raw`$\sin^3 x = \frac{3\sin x - \sin 3x}{4}$ et $\cos^3 x = \frac{\cos 3x + 3\cos x}{4}$.`,
      why: { 0: String.raw`Erreur : recopier la structure de $\cos^3 x$. En $x = \frac{\pi}{2}$ on trouverait $\frac{-1 + 3}{4} = \frac{1}{2} \neq 1$.`, 2: String.raw`Erreur de signe : oublier que $(2\mathrm{i})^3 = -8\mathrm{i}$ (et non $+8\mathrm{i}$). Cette expression vaut $-\sin^3 x$.`, 3: String.raw`Erreur : oublier le facteur 2 de $\mathrm{e}^{\mathrm{i}kx} - \mathrm{e}^{-\mathrm{i}kx} = 2\mathrm{i}\sin kx$ lors du regroupement, d'où un résultat deux fois trop petit.` } },
    { id: 'm7-q-023', level: 2, topic: 'Formule de Moivre', sec: 'm7-s-euler', q: String.raw`Expression de $\cos 3x$ en fonction de $\cos x$ :`,
      choices: [String.raw`$3\cos x - 4\cos^3 x$`, String.raw`$\cos^3 x - 3\cos x$`, String.raw`$4\cos^3 x + 3\cos x$`, String.raw`$4\cos^3 x - 3\cos x$`], answer: 3,
      explain: String.raw`Par Moivre, $\cos 3x$ est la partie réelle de $(\cos x + \mathrm{i}\sin x)^3$, soit $\cos^3 x - 3\cos x\sin^2 x$. En remplaçant $\sin^2 x$ par $1 - \cos^2 x$, on obtient $4\cos^3 x - 3\cos x$.`,
      steps: [
        String.raw`Rappel (Moivre) : $\cos 3x + \mathrm{i}\sin 3x = (\cos x + \mathrm{i}\sin x)^3$, donc $\cos 3x = \operatorname{Re}\left((\cos x + \mathrm{i}\sin x)^3\right)$.`,
        String.raw`Binôme avec $c = \cos x$, $s = \sin x$ : $(c + \mathrm{i}s)^3 = c^3 + 3\mathrm{i}c^2s - 3cs^2 - \mathrm{i}s^3$ (car $\mathrm{i}^2 = -1$, $\mathrm{i}^3 = -\mathrm{i}$).`,
        String.raw`Partie réelle : $\cos 3x = c^3 - 3cs^2$.`,
        String.raw`On remplace $s^2 = 1 - c^2$ : $c^3 - 3c(1 - c^2) = c^3 - 3c + 3c^3 = 4c^3 - 3c$. Contrôle en $x = 0$ : $4 - 3 = 1 = \cos 0$ ✔.`
      ],
      rule: String.raw`$\cos 3x = 4\cos^3 x - 3\cos x$ et $\sin 3x = 3\sin x - 4\sin^3 x$.`,
      why: { 0: String.raw`Erreur : confusion avec $\sin 3x = 3\sin x - 4\sin^3 x$. Ce choix vaut $-\cos 3x$ : en $x = 0$ on obtient $-1 \neq 1$.`, 1: String.raw`Erreur : remplacer $\sin^2 x$ par $1$ au lieu de $1 - \cos^2 x$. En $x = 0$ on obtient $1 - 3 = -2 \neq 1$.`, 2: String.raw`Erreur de signe sur le terme $3\cos x$ (qui provient de $\mathrm{i}^2 = -1$). En $x = 0$ on obtient $4 + 3 = 7 \neq 1$.` } },
    { id: 'm7-q-024', level: 1, topic: 'Racines n-ièmes de l\'unité', sec: 'm7-s-equations', q: String.raw`Combien de solutions l'équation $z^6 = 1$ possède-t-elle dans $\mathbb{C}$ ?`,
      choices: [String.raw`$2$`, String.raw`$3$`, String.raw`$1$`, String.raw`$6$`], answer: 3,
      explain: String.raw`Les solutions sont les racines 6-ièmes de l'unité $\mathrm{e}^{2\mathrm{i}k\pi/6}$ pour $k = 0, \ldots, 5$ : six points distincts, sommets d'un hexagone régulier. Dans $\mathbb{C}$, $z^n = 1$ a toujours exactement $n$ solutions.`,
      steps: [
        String.raw`Rappel : une racine $n$-ième de l'unité est un complexe $z$ tel que $z^n = 1$. Il y en a exactement $n$, de la forme $\mathrm{e}^{2\mathrm{i}k\pi/n}$ avec $k = 0, 1, \ldots, n - 1$.`,
        String.raw`On pose $z = r\,\mathrm{e}^{\mathrm{i}\theta}$ : $z^6 = r^6\,\mathrm{e}^{6\mathrm{i}\theta} = 1$ donne $r^6 = 1$ (donc $r = 1$) et $6\theta = 2k\pi$, soit $\theta = \frac{k\pi}{3}$.`,
        String.raw`$k = 0, 1, \ldots, 5$ donnent 6 angles distincts ; $k = 6$ redonne $\theta = 2\pi$, c'est-à-dire le cas $k = 0$.`,
        String.raw`Les 6 solutions sont $\pm 1$ et $\pm\frac{1}{2} \pm \mathrm{i}\frac{\sqrt{3}}{2}$ (hexagone régulier).`
      ],
      rule: String.raw`$z^n = 1 \iff z = \mathrm{e}^{2\mathrm{i}k\pi/n}$, $k \in \{0, \ldots, n - 1\}$ : exactement $n$ solutions.`,
      why: { 0: String.raw`Erreur : raisonner dans $\mathbb{R}$, où seuls $1$ et $-1$ conviennent. Dans $\mathbb{C}$, il manque les 4 racines non réelles.`, 1: String.raw`Erreur : confusion avec $z^3 = 1$ (racines cubiques, 3 solutions). Pour $z^n = 1$ il y a $n$ solutions, ici 6.`, 2: String.raw`Erreur : s'arrêter à la solution évidente $1$. Par exemple $(-1)^6 = 1$ et $(\mathrm{e}^{\mathrm{i}\pi/3})^6 = \mathrm{e}^{2\mathrm{i}\pi} = 1$.` } },
    { id: 'm7-q-025', level: 2, topic: 'Racines n-ièmes de l\'unité', sec: 'm7-s-equations', q: String.raw`Que vaut la somme des racines 5-ièmes de l'unité ?`,
      choices: [String.raw`$5$`, String.raw`$1$`, String.raw`$0$`, String.raw`$-1$`], answer: 2,
      explain: String.raw`Les racines 5-ièmes $1, \omega, \omega^2, \omega^3, \omega^4$ (avec $\omega = \mathrm{e}^{2\mathrm{i}\pi/5}$) forment une suite géométrique de raison $\omega \neq 1$ ; sa somme $\frac{1 - \omega^5}{1 - \omega}$ est nulle car $\omega^5 = 1$. Géométriquement, les sommets du pentagone régulier ont pour centre de gravité $O$.`,
      steps: [
        String.raw`Rappel : les racines 5-ièmes de l'unité sont $\omega^k$ pour $k = 0, \ldots, 4$, avec $\omega = \mathrm{e}^{2\mathrm{i}\pi/5}$ ; elles vérifient $z^5 = 1$.`,
        String.raw`Leur somme est une somme géométrique de raison $\omega \neq 1$ : $\sum_{k=0}^{4}\omega^k = \frac{1 - \omega^5}{1 - \omega}$.`,
        String.raw`Comme $\omega^5 = 1$, le numérateur vaut $1 - 1 = 0$ : la somme est nulle.`
      ],
      rule: String.raw`Pour $n \geq 2$ : $\sum_{k=0}^{n-1}\mathrm{e}^{2\mathrm{i}k\pi/n} = 0$.`,
      why: { 0: String.raw`Erreur : additionner les **modules** (tous égaux à 1). Les complexes ont des directions différentes et se compensent.`, 1: String.raw`Erreur : confusion avec le **produit** des racines 5-ièmes, qui vaut 1 (pour $n$ impair), pas leur somme.`, 3: String.raw`Erreur : oublier la racine $1$. $-1$ est la somme $\omega + \omega^2 + \omega^3 + \omega^4$ des racines autres que 1.` } },
    { id: 'm7-q-026', level: 2, topic: 'Le nombre j', sec: 'm7-s-equations', q: String.raw`Avec $j = \mathrm{e}^{2\mathrm{i}\pi/3}$, que vaut $1 + j + j^2$ ?`,
      choices: [String.raw`$0$`, String.raw`$3$`, String.raw`$1$`, String.raw`$\mathrm{i}\sqrt{3}$`], answer: 0,
      explain: String.raw`$j = -\frac{1}{2} + \mathrm{i}\frac{\sqrt{3}}{2}$ et $j^2 = \overline{j} = -\frac{1}{2} - \mathrm{i}\frac{\sqrt{3}}{2}$ : les parties réelles donnent $1 - \frac{1}{2} - \frac{1}{2} = 0$ et les parties imaginaires s'annulent. C'est la somme des trois racines cubiques de l'unité, nulle.`,
      steps: [
        String.raw`Rappel : $j = \mathrm{e}^{2\mathrm{i}\pi/3}$ est une racine cubique de l'unité ($j^3 = 1$) ; $1$, $j$, $j^2$ sont les trois racines cubiques de 1.`,
        String.raw`Forme algébrique : $j = \cos\frac{2\pi}{3} + \mathrm{i}\sin\frac{2\pi}{3} = -\frac{1}{2} + \mathrm{i}\frac{\sqrt{3}}{2}$ et $j^2 = \mathrm{e}^{4\mathrm{i}\pi/3} = \overline{j} = -\frac{1}{2} - \mathrm{i}\frac{\sqrt{3}}{2}$.`,
        String.raw`Somme : partie réelle $1 - \frac{1}{2} - \frac{1}{2} = 0$, partie imaginaire $\frac{\sqrt{3}}{2} - \frac{\sqrt{3}}{2} = 0$. Donc $1 + j + j^2 = 0$.`,
        String.raw`Autre preuve : somme géométrique $\frac{1 - j^3}{1 - j} = \frac{1 - 1}{1 - j} = 0$ ✔.`
      ],
      rule: String.raw`$j = \mathrm{e}^{2\mathrm{i}\pi/3}$ : $j^3 = 1$, $j^2 = \overline{j}$ et $1 + j + j^2 = 0$.`,
      why: { 1: String.raw`Erreur : additionner les modules ($|1| = |j| = |j^2| = 1$). Les trois complexes pointent à $120°$ les uns des autres et se compensent.`, 2: String.raw`Erreur : confusion avec $j^3 = \mathrm{e}^{2\mathrm{i}\pi} = 1$. C'est le cube qui vaut 1, pas la somme.`, 3: String.raw`Erreur : compter deux fois la partie imaginaire de $j$. Or $j^2 = \overline{j}$ a une partie imaginaire **opposée**, qui annule celle de $j$.` } },
    { id: 'm7-q-027', level: 1, topic: 'Équation z² = réel négatif', sec: 'm7-s-equations', q: String.raw`Solutions de $z^2 + 4 = 0$ dans $\mathbb{C}$ :`,
      choices: [String.raw`$2$ et $-2$`, String.raw`aucune`, String.raw`$2\mathrm{i}$ et $-2\mathrm{i}$`, String.raw`$2\mathrm{i}$ seulement`], answer: 2,
      explain: String.raw`L'équation équivaut à $z^2 = -4 = (2\mathrm{i})^2$, donc $(z - 2\mathrm{i})(z + 2\mathrm{i}) = 0$ : $z = 2\mathrm{i}$ ou $z = -2\mathrm{i}$. Une équation de degré 2 a toujours deux solutions dans $\mathbb{C}$ (éventuellement confondues).`,
      steps: [
        String.raw`Rappel : dans $\mathbb{C}$, un réel négatif $-a$ ($a \gt 0$) a deux racines carrées, $\mathrm{i}\sqrt{a}$ et $-\mathrm{i}\sqrt{a}$, car $(\mathrm{i}\sqrt{a})^2 = \mathrm{i}^2 a = -a$.`,
        String.raw`On isole $z^2$ : $z^2 = -4$.`,
        String.raw`$(2\mathrm{i})^2 = 4\mathrm{i}^2 = -4$, donc $z^2 - (2\mathrm{i})^2 = 0$, soit $(z - 2\mathrm{i})(z + 2\mathrm{i}) = 0$.`,
        String.raw`Un produit est nul si l'un des facteurs l'est : $z = 2\mathrm{i}$ ou $z = -2\mathrm{i}$.`
      ],
      rule: String.raw`Pour $a \gt 0$ : $z^2 = -a \iff z = \mathrm{i}\sqrt{a}$ ou $z = -\mathrm{i}\sqrt{a}$.`,
      why: { 0: String.raw`Erreur : chercher des solutions réelles. $(\pm 2)^2 = +4$, pas $-4$ : le carré d'un réel est toujours positif.`, 1: String.raw`Erreur : réponse valable seulement dans $\mathbb{R}$. Dans $\mathbb{C}$, $(2\mathrm{i})^2 = -4$, donc il y a deux solutions.`, 3: String.raw`Erreur : oublier l'opposé. $(-2\mathrm{i})^2 = (-2)^2\mathrm{i}^2 = -4$ aussi : si $z$ est solution de $z^2 = c$, $-z$ l'est aussi.` } },
    { id: 'm7-q-028', level: 2, topic: 'Second degré, Δ < 0', sec: 'm7-s-equations', q: String.raw`Solutions de $z^2 - 2z + 5 = 0$ :`,
      choices: [String.raw`$1 \pm 2\mathrm{i}$`, String.raw`$-1 \pm 2\mathrm{i}$`, String.raw`$1 \pm 4\mathrm{i}$`, String.raw`$2 \pm 4\mathrm{i}$`], answer: 0,
      explain: String.raw`$\Delta = 4 - 20 = -16 = (4\mathrm{i})^2$, donc $z = \frac{2 \pm 4\mathrm{i}}{2} = 1 \pm 2\mathrm{i}$. Vérification : la somme vaut $2 = -\frac{b}{a}$ et le produit $1 + 4 = 5 = \frac{c}{a}$.`,
      steps: [
        String.raw`Rappel : pour $az^2 + bz + c = 0$ à coefficients réels avec $\Delta = b^2 - 4ac \lt 0$, il y a deux racines complexes conjuguées $z = \frac{-b \pm \mathrm{i}\sqrt{-\Delta}}{2a}$.`,
        String.raw`Ici $a = 1$, $b = -2$, $c = 5$ : $\Delta = (-2)^2 - 4 \times 1 \times 5 = 4 - 20 = -16$, et $\sqrt{-\Delta} = 4$.`,
        String.raw`$z = \frac{-(-2) \pm 4\mathrm{i}}{2 \times 1} = \frac{2 \pm 4\mathrm{i}}{2} = 1 \pm 2\mathrm{i}$.`,
        String.raw`Vérification : somme $2 = -\frac{b}{a}$ ✔, produit $(1 + 2\mathrm{i})(1 - 2\mathrm{i}) = 1 + 4 = 5 = \frac{c}{a}$ ✔.`
      ],
      rule: String.raw`$\Delta \lt 0$ (coefficients réels) : $z = \frac{-b \pm \mathrm{i}\sqrt{-\Delta}}{2a}$.`,
      why: { 1: String.raw`Erreur de signe : le numérateur commence par $-b = -(-2) = +2$. Avec $-1 \pm 2\mathrm{i}$, la somme des racines vaudrait $-2$ au lieu de $2$.`, 2: String.raw`Erreur : diviser seulement la partie réelle par $2a = 2$. Il faut diviser tout le numérateur : $\frac{4\mathrm{i}}{2} = 2\mathrm{i}$.`, 3: String.raw`Erreur : oublier de diviser par $2a = 2$. Test : le produit $(2 + 4\mathrm{i})(2 - 4\mathrm{i}) = 20 \neq 5$.` } },
    { id: 'm7-q-029', level: 3, topic: 'Racine carrée d\'un complexe', sec: 'm7-s-equations', q: String.raw`Les racines carrées de $3 + 4\mathrm{i}$ sont :`,
      choices: [String.raw`$\pm(2 - \mathrm{i})$`, String.raw`$\pm(1 + 2\mathrm{i})$`, String.raw`$\pm(2 + \mathrm{i})$`, String.raw`$\pm\sqrt{3 + 4\mathrm{i}}$, qu'on ne peut pas simplifier`], answer: 2,
      explain: String.raw`En posant $\delta = x + \mathrm{i}y$, on obtient $x^2 - y^2 = 3$, $x^2 + y^2 = 5$ et $xy = 2 \gt 0$, d'où $x^2 = 4$, $y^2 = 1$ avec $x$, $y$ de même signe : $\pm(2 + \mathrm{i})$. Vérification : $(2 + \mathrm{i})^2 = 3 + 4\mathrm{i}$.`,
      steps: [
        String.raw`Rappel (méthode algébrique) : on cherche $\delta = x + \mathrm{i}y$ avec $\delta^2 = 3 + 4\mathrm{i}$. Comme $\delta^2 = x^2 - y^2 + 2xy\,\mathrm{i}$, on identifie parties réelles et imaginaires, et on ajoute l'égalité des modules.`,
        String.raw`Équations : $x^2 - y^2 = 3$, $2xy = 4$, et $x^2 + y^2 = |3 + 4\mathrm{i}| = \sqrt{9 + 16} = 5$.`,
        String.raw`En additionnant : $2x^2 = 8$, $x^2 = 4$ ; en soustrayant : $2y^2 = 2$, $y^2 = 1$. Comme $xy = 2 \gt 0$, $x$ et $y$ ont le même signe : $(2, 1)$ ou $(-2, -1)$.`,
        String.raw`Racines : $\pm(2 + \mathrm{i})$. Vérification : $(2 + \mathrm{i})^2 = 4 + 4\mathrm{i} + \mathrm{i}^2 = 3 + 4\mathrm{i}$ ✔.`
      ],
      rule: String.raw`$\delta^2 = a + \mathrm{i}b$ : $x^2 - y^2 = a$, $x^2 + y^2 = \sqrt{a^2 + b^2}$, $xy$ du signe de $b$.`,
      why: { 0: String.raw`Erreur de signe sur $xy$ : $(2 - \mathrm{i})^2 = 3 - 4\mathrm{i}$, c'est la racine du conjugué. Il faut $xy$ du signe de $b = 4 \gt 0$.`, 1: String.raw`Erreur : échanger $x^2$ et $y^2$. $(1 + 2\mathrm{i})^2 = -3 + 4\mathrm{i}$ ; or $x^2 - y^2 = +3$ impose $x^2 \gt y^2$.`, 3: String.raw`Erreur de méthode : la notation $\sqrt{\ }$ est réservée aux réels positifs, et la méthode algébrique donne toujours les deux racines explicitement.` } },
    { id: 'm7-q-030', level: 2, topic: 'Rotations dans le plan', sec: 'm7-s-transfo', q: String.raw`La transformation $z \mapsto \mathrm{i}z$ est :`,
      choices: [String.raw`la symétrie d'axe imaginaire`, String.raw`la rotation de centre $O$ d'angle $-\frac{\pi}{2}$`, String.raw`l'homothétie de centre $O$ de rapport $\mathrm{i}$`, String.raw`la rotation de centre $O$ d'angle $\frac{\pi}{2}$`], answer: 3,
      explain: String.raw`Comme $\mathrm{i} = \mathrm{e}^{\mathrm{i}\pi/2}$, multiplier par $\mathrm{i}$ garde le module et ajoute $\frac{\pi}{2}$ à l'argument : c'est la rotation de centre $O$ et d'angle $+\frac{\pi}{2}$. Exemple : $1 \mapsto \mathrm{i} \mapsto -1 \mapsto -\mathrm{i}$.`,
      steps: [
        String.raw`Rappel : multiplier par $\mathrm{e}^{\mathrm{i}\theta}$ conserve le module et ajoute $\theta$ à l'argument : $z \mapsto \mathrm{e}^{\mathrm{i}\theta}z$ est la rotation de centre $O$ d'angle $\theta$.`,
        String.raw`Forme exponentielle de $\mathrm{i}$ : $|\mathrm{i}| = 1$ et $\arg\mathrm{i} = \frac{\pi}{2}$, donc $\mathrm{i} = \mathrm{e}^{\mathrm{i}\pi/2}$.`,
        String.raw`Si $z = r\,\mathrm{e}^{\mathrm{i}\theta}$ alors $\mathrm{i}z = r\,\mathrm{e}^{\mathrm{i}(\theta + \pi/2)}$ : rotation d'angle $+\frac{\pi}{2}$. Exemple : $1 \mapsto \mathrm{i}$ (quart de tour vers le haut).`
      ],
      rule: String.raw`$z \mapsto \mathrm{e}^{\mathrm{i}\theta}z$ : rotation de centre $O$ d'angle $\theta$.`,
      why: { 0: String.raw`Erreur : la symétrie d'axe imaginaire est $z \mapsto -\overline{z}$, qui envoie $1$ sur $-1$ ; or $\mathrm{i} \times 1 = \mathrm{i}$.`, 1: String.raw`Erreur de sens : l'angle $-\frac{\pi}{2}$ correspond à la multiplication par $-\mathrm{i}$. Avec $\mathrm{i}$, $1$ va sur $\mathrm{i}$ : on tourne dans le sens direct.`, 2: String.raw`Erreur : le rapport d'une homothétie est un **réel** non nul. Multiplier par $\mathrm{i}$ (module 1) ne change pas les distances à $O$ : c'est une rotation.` } },
    { id: 'm7-q-031', level: 2, topic: 'Homothéties', sec: 'm7-s-transfo', q: String.raw`$z \mapsto 2z + 1$ est l'homothétie de rapport 2 et de centre le point d'affixe :`,
      choices: [String.raw`$-1$`, String.raw`$1$`, String.raw`$\frac{1}{2}$`, String.raw`$-\frac{1}{2}$`], answer: 0,
      explain: String.raw`Le centre d'une homothétie est son unique point fixe : on résout $\omega = 2\omega + 1$, ce qui donne $\omega = -1$. Vérification : $z' + 1 = 2(z + 1)$, c'est bien la forme $z' - \omega = 2(z - \omega)$.`,
      steps: [
        String.raw`Rappel : $z \mapsto az + b$ avec $a$ réel, $a \neq 1$, est une homothétie de rapport $a$ ; son centre $\Omega(\omega)$ est le **point fixe**, solution de $\omega = a\omega + b$.`,
        String.raw`On résout $\omega = 2\omega + 1$ : $\omega - 2\omega = 1$, donc $-\omega = 1$ et $\omega = -1$.`,
        String.raw`Vérification : $z' + 1 = 2z + 2 = 2(z + 1)$, soit $z' - (-1) = 2\left(z - (-1)\right)$ ✔.`
      ],
      rule: String.raw`$z' = az + b$ ($a \neq 1$) : centre $\omega = \frac{b}{1 - a}$ (point fixe).`,
      why: { 1: String.raw`Erreur de signe en résolvant $\omega = 2\omega + 1$. Test : l'image de $1$ est $3 \neq 1$, donc $1$ n'est pas fixe.`, 2: String.raw`Erreur de formule : on a calculé $\frac{b}{a}$ au lieu de $\frac{b}{1 - a} = \frac{1}{1 - 2} = -1$.`, 3: String.raw`Erreur : $-\frac{1}{2}$ est la solution de $2z + 1 = 0$ (antécédent de $O$), pas du point fixe $2z + 1 = z$. Son image est $0 \neq -\frac{1}{2}$.` } },
    { id: 'm7-q-032', level: 1, topic: 'Impédances complexes', sec: 'm7-s-electro', q: String.raw`Impédance complexe d'une bobine d'inductance $L$ en régime sinusoïdal de pulsation $\omega$ :`,
      choices: [String.raw`$jL\omega$`, String.raw`$\dfrac{1}{jL\omega}$`, String.raw`$L\omega$`, String.raw`$-jL\omega$`], answer: 0,
      explain: String.raw`Pour une bobine, $u = L\frac{\mathrm{d}i}{\mathrm{d}t}$, et en notation complexe dériver revient à multiplier par $j\omega$. On obtient $\underline{U} = jL\omega\,\underline{I}$ : $Z_L = jL\omega$, de module $L\omega$ et d'argument $+\frac{\pi}{2}$.`,
      steps: [
        String.raw`Rappel : l'impédance complexe est le rapport $Z = \frac{\underline{U}}{\underline{I}}$ en régime sinusoïdal ; avec $\underline{i}(t) = \underline{I}\,\mathrm{e}^{j\omega t}$, dériver revient à multiplier par $j\omega$.`,
        String.raw`Loi de la bobine : $u = L\frac{\mathrm{d}i}{\mathrm{d}t}$, donc $\underline{U} = L \times j\omega\,\underline{I}$.`,
        String.raw`$Z_L = \frac{\underline{U}}{\underline{I}} = jL\omega$ : module $L\omega$, argument $+\frac{\pi}{2}$ (tension en avance d'un quart de période).`
      ],
      rule: String.raw`$Z_R = R$, $Z_L = jL\omega$, $Z_C = \frac{1}{jC\omega}$ ; dériver $\leftrightarrow$ multiplier par $j\omega$.`,
      why: { 1: String.raw`Erreur : confusion avec le condensateur, $Z_C = \frac{1}{jC\omega}$ (on y intègre au lieu de dériver).`, 2: String.raw`Erreur : donner seulement le module $L\omega$. Il manque le $j$ qui traduit le déphasage de $+\frac{\pi}{2}$.`, 3: String.raw`Erreur de signe : $-jL\omega$ correspondrait à un déphasage de $-\frac{\pi}{2}$ (comportement capacitif). Dériver $\mathrm{e}^{j\omega t}$ donne $+j\omega\,\mathrm{e}^{j\omega t}$.` } },
    { id: 'm7-q-033', level: 2, topic: 'Impédances complexes', sec: 'm7-s-electro', q: String.raw`L'impédance $\dfrac{1}{jC\omega}$ d'un condensateur est aussi égale à :`,
      choices: [String.raw`$\dfrac{j}{C\omega}$`, String.raw`$jC\omega$`, String.raw`$-\dfrac{j}{C\omega}$`, String.raw`$-jC\omega$`], answer: 2,
      explain: String.raw`On utilise $\frac{1}{j} = \frac{j}{j^2} = -j$, donc $\frac{1}{jC\omega} = -\frac{j}{C\omega}$. Le module vaut $\frac{1}{C\omega}$ et l'argument $-\frac{\pi}{2}$ : la tension est en retard sur le courant.`,
      steps: [
        String.raw`Rappel : en électronique on note $j$ l'unité imaginaire ($j^2 = -1$), et $\frac{1}{j} = -j$.`,
        String.raw`On sépare : $\frac{1}{jC\omega} = \frac{1}{j} \times \frac{1}{C\omega}$.`,
        String.raw`On multiplie haut et bas par $j$ : $\frac{1}{j} = \frac{j}{j^2} = \frac{j}{-1} = -j$, donc $\frac{1}{jC\omega} = -\frac{j}{C\omega}$.`
      ],
      rule: String.raw`$\frac{1}{j} = -j$, donc $Z_C = \frac{1}{jC\omega} = -\frac{j}{C\omega}$.`,
      why: { 0: String.raw`Erreur : croire que $\frac{1}{j} = j$. Or $j \times j = -1 \neq 1$ ; l'inverse de $j$ est $-j$.`, 1: String.raw`Erreur : fraction retournée. $jC\omega$ est l'inverse de l'impédance, c'est-à-dire l'**admittance** $Y_C$.`, 3: String.raw`Erreur : faire monter aussi $C\omega$ au numérateur. Seul le $j$ change de place (avec un signe moins) ; $C\omega$ reste au dénominateur.` } },
    { id: 'm7-q-034', level: 3, topic: 'Gain et phase d\'un filtre', sec: 'm7-s-electro', q: String.raw`Pour $H = \dfrac{1}{1 + jRC\omega}$, à la pulsation $\omega = \dfrac{1}{RC}$ :`,
      choices: [String.raw`$|H| = \frac{1}{2}$ et $\varphi = -\frac{\pi}{4}$`, String.raw`$|H| = \frac{1}{\sqrt{2}}$ et $\varphi = \frac{\pi}{4}$`, String.raw`$|H| = \frac{1}{\sqrt{2}}$ et $\varphi = -\frac{\pi}{4}$`, String.raw`$|H| = \frac{1}{\sqrt{2}}$ et $\varphi = -\frac{\pi}{2}$`], answer: 2,
      explain: String.raw`À $\omega = \frac{1}{RC}$, $H = \frac{1}{1 + j}$ : le gain vaut $\frac{1}{|1 + j|} = \frac{1}{\sqrt{2}}$ et la phase $-\arg(1 + j) = -\frac{\pi}{4}$. C'est la pulsation de coupure à $-3$ dB du passe-bas du premier ordre.`,
      steps: [
        String.raw`Rappel : pour une fonction de transfert $H$, le gain est $|H|$ et la phase est $\varphi = \arg H$. Pour un quotient : $\left|\frac{N}{D}\right| = \frac{|N|}{|D|}$ et $\arg\frac{N}{D} = \arg N - \arg D$.`,
        String.raw`À $\omega = \frac{1}{RC}$ : $RC\omega = 1$, donc $H = \frac{1}{1 + j}$.`,
        String.raw`Gain : $|1 + j| = \sqrt{1^2 + 1^2} = \sqrt{2}$, donc $|H| = \frac{1}{\sqrt{2}}$.`,
        String.raw`Phase : $\arg 1 = 0$ et $\arg(1 + j) = \frac{\pi}{4}$, donc $\varphi = 0 - \frac{\pi}{4} = -\frac{\pi}{4}$.`
      ],
      rule: String.raw`$\left|\frac{N}{D}\right| = \frac{|N|}{|D|}$ et $\arg\frac{N}{D} = \arg N - \arg D$.`,
      why: { 0: String.raw`Erreur sur le module : $|1 + j| = \sqrt{2}$, pas $1 + 1 = 2$.`, 1: String.raw`Erreur de signe sur la phase : $\arg\frac{1}{D} = -\arg D$, la phase d'un passe-bas est négative.`, 3: String.raw`Erreur : $-\frac{\pi}{2}$ est la limite de la phase quand $\omega \to +\infty$ (où $H \approx \frac{1}{jRC\omega}$), pas sa valeur à la coupure.` } }
  ],

  /* ======================= EXERCICES ======================= */
  exercises: [
    { id: 'm7-x-001', level: 1, topic: 'Produit de complexes', sec: 'm7-s-algebrique', check: 'value', vars: [],
      prompt: String.raw`Mets sous forme algébrique $(2 + 3\mathrm{i})(1 - \mathrm{i})$.`,
      answer: '5+i',
      mistakes: [
        { expr: '-1+i', msg: String.raw`Tu as pris $\mathrm{i}^2 = +1$ : or $3\mathrm{i} \times (-\mathrm{i}) = -3\mathrm{i}^2 = -3 \times (-1) = +3$. La partie réelle est $2 + 3 = 5$.` },
        { expr: '2-3*i', msg: String.raw`Tu as multiplié les parties réelles entre elles et les parties imaginaires entre elles : $(a + \mathrm{i}b)(c + \mathrm{i}d) \neq ac + \mathrm{i}bd$. Il faut développer les **quatre** produits.` },
        { expr: '5+5*i', msg: String.raw`Erreur de signe sur $2 \times (-\mathrm{i}) = -2\mathrm{i}$ : la partie imaginaire vaut $-2 + 3 = 1$.` }
      ],
      hint: String.raw`Développe comme dans $\mathbb{R}$ puis remplace $\mathrm{i}^2$ par $-1$.`,
      explain: String.raw`On développe les quatre produits puis on remplace $\mathrm{i}^2$ par $-1$ : $(2 + 3\mathrm{i})(1 - \mathrm{i}) = 2 - 2\mathrm{i} + 3\mathrm{i} + 3 = 5 + \mathrm{i}$.`,
      steps: [
        String.raw`Rappel : la **forme algébrique** d'un complexe est $a + \mathrm{i}b$ ($a, b$ réels). Pour un produit, on développe comme dans $\mathbb{R}$ (double distributivité) en gardant les $\mathrm{i}$, puis on remplace $\mathrm{i}^2$ par $-1$.`,
        String.raw`Les quatre produits : $2 \times 1 = 2$ ; $2 \times (-\mathrm{i}) = -2\mathrm{i}$ ; $3\mathrm{i} \times 1 = 3\mathrm{i}$ ; $3\mathrm{i} \times (-\mathrm{i}) = -3\mathrm{i}^2$.`,
        String.raw`On remplace $\mathrm{i}^2 = -1$ : $-3\mathrm{i}^2 = -3 \times (-1) = +3$ (ce terme devient réel).`,
        String.raw`On regroupe : partie réelle $2 + 3 = 5$, partie imaginaire $-2 + 3 = 1$. Résultat : $5 + \mathrm{i}$.`,
        String.raw`Vérification par les modules : $|2 + 3\mathrm{i}| \times |1 - \mathrm{i}| = \sqrt{13} \times \sqrt{2} = \sqrt{26}$ et $|5 + \mathrm{i}| = \sqrt{25 + 1} = \sqrt{26}$ ✔.`
      ],
      rule: String.raw`$(a + \mathrm{i}b)(c + \mathrm{i}d) = (ac - bd) + \mathrm{i}(ad + bc)$, car $\mathrm{i}^2 = -1$.`,
      pitfall: String.raw`Le produit $\mathrm{i} \times \mathrm{i}$ donne un **réel négatif** : il passe dans la partie réelle avec un changement de signe.` },
    { id: 'm7-x-002', level: 1, topic: 'Carré d\'un complexe', sec: 'm7-s-algebrique', check: 'value', vars: [],
      prompt: String.raw`Mets sous forme algébrique $(1 + 2\mathrm{i})^2$.`,
      answer: '-3+4*i',
      mistakes: [
        { expr: '5+4*i', msg: String.raw`$(2\mathrm{i})^2 = 4\mathrm{i}^2 = -4$, pas $+4$ : la partie réelle vaut $1 - 4 = -3$.` },
        { expr: '-3', msg: String.raw`Tu as oublié le double produit $2 \times 1 \times 2\mathrm{i} = 4\mathrm{i}$ : $(a + b)^2 \neq a^2 + b^2$.` },
        { expr: '-3+2*i', msg: String.raw`Le double produit vaut $2ab = 2 \times 1 \times 2\mathrm{i} = 4\mathrm{i}$ : tu as oublié le facteur 2.` }
      ],
      hint: String.raw`$(a + b)^2 = a^2 + 2ab + b^2$ avec $b = 2\mathrm{i}$.`,
      explain: String.raw`Identité remarquable puis $\mathrm{i}^2 = -1$ : $(1 + 2\mathrm{i})^2 = 1 + 4\mathrm{i} - 4 = -3 + 4\mathrm{i}$.`,
      steps: [
        String.raw`Rappel : les identités remarquables restent vraies dans $\mathbb{C}$ : $(a + b)^2 = a^2 + 2ab + b^2$. Ici $a = 1$ et $b = 2\mathrm{i}$.`,
        String.raw`Les trois termes : $a^2 = 1$ ; $2ab = 2 \times 1 \times 2\mathrm{i} = 4\mathrm{i}$ ; $b^2 = (2\mathrm{i})^2 = 2^2 \times \mathrm{i}^2 = 4 \times (-1) = -4$.`,
        String.raw`Somme : $1 + 4\mathrm{i} - 4 = -3 + 4\mathrm{i}$.`,
        String.raw`Vérification par le module : $|z^2| = |z|^2$ ; $|1 + 2\mathrm{i}|^2 = 1 + 4 = 5$ et $|-3 + 4\mathrm{i}| = \sqrt{9 + 16} = 5$ ✔.`
      ],
      rule: String.raw`$(a + \mathrm{i}b)^2 = (a^2 - b^2) + 2ab\,\mathrm{i}$.`,
      pitfall: String.raw`$(2\mathrm{i})^2 = 4\mathrm{i}^2 = -4$ : le carré d'un imaginaire pur est un réel **négatif**.` },
    { id: 'm7-x-003', level: 1, topic: 'Puissances de i', sec: 'm7-s-algebrique', check: 'value', vars: [],
      prompt: String.raw`Calcule $\mathrm{i}^{2026}$.`,
      answer: '-1',
      mistakes: [
        { expr: '1', msg: String.raw`Un exposant pair ne suffit pas : seuls les multiples de 4 donnent 1. Or $2026 = 4 \times 506 + 2$, reste 2.` },
        { expr: 'i', msg: String.raw`Regarde le reste de 2026 dans la division par 4 : c'est 2 (car $2024 = 4 \times 506$), pas 1.` },
        { expr: '-i', msg: String.raw`$-\mathrm{i}$ correspond à un reste 3. Ici $2026 - 2024 = 2$ : reste 2, donc $\mathrm{i}^2 = -1$.` }
      ],
      hint: String.raw`$\mathrm{i}^4 = 1$ : seul compte le reste de l'exposant modulo 4.`,
      explain: String.raw`$2026 = 4 \times 506 + 2$, donc $\mathrm{i}^{2026} = (\mathrm{i}^4)^{506}\,\mathrm{i}^2 = 1 \times (-1) = -1$.`,
      steps: [
        String.raw`Rappel : les puissances de $\mathrm{i}$ forment un cycle de longueur 4 : $\mathrm{i}^0 = 1$, $\mathrm{i}^1 = \mathrm{i}$, $\mathrm{i}^2 = -1$, $\mathrm{i}^3 = -\mathrm{i}$, puis $\mathrm{i}^4 = 1$ et on recommence.`,
        String.raw`Division euclidienne de l'exposant par 4 : $4 \times 506 = 2024$, donc $2026 = 4 \times 506 + 2$ (reste 2).`,
        String.raw`On découpe la puissance : $\mathrm{i}^{2026} = \mathrm{i}^{4 \times 506} \times \mathrm{i}^2 = (\mathrm{i}^4)^{506} \times \mathrm{i}^2 = 1^{506} \times (-1)$.`,
        String.raw`Résultat : $\mathrm{i}^{2026} = -1$.`
      ],
      rule: String.raw`$\mathrm{i}^n = \mathrm{i}^r$ où $r$ est le reste de la division de $n$ par 4.`,
      pitfall: String.raw`Un exposant pair ne donne pas forcément $1$ : $\mathrm{i}^2 = -1$. Seuls les multiples de 4 donnent 1.` },
    { id: 'm7-x-004', level: 1, topic: 'Puissance d\'un complexe', sec: 'm7-s-algebrique', check: 'tuple', vars: [],
      prompt: String.raw`Donne la partie réelle puis la partie imaginaire de $(1 + \mathrm{i})^3$ (format : Re;Im).`,
      answer: '-2;2',
      mistakes: [
        { expr: '2;2', msg: String.raw`Tu as pris $\mathrm{i}^2 = +1$ dans $2\mathrm{i} \times \mathrm{i}$ : or $2\mathrm{i}^2 = -2$, la partie réelle est négative.` },
        { expr: '-2;4', msg: String.raw`Dans le binôme, $\mathrm{i}^3 = -\mathrm{i}$ (et non $+\mathrm{i}$) : $1 + 3\mathrm{i} - 3 - \mathrm{i} = -2 + 2\mathrm{i}$.` },
        { expr: '2;-2', msg: String.raw`Tu as inversé l'ordre : on attend d'abord la partie réelle ($-2$), puis la partie imaginaire ($2$).` }
      ],
      hint: String.raw`Commence par $(1 + \mathrm{i})^2 = 2\mathrm{i}$.`,
      explain: String.raw`$(1 + \mathrm{i})^2 = 2\mathrm{i}$, donc $(1 + \mathrm{i})^3 = 2\mathrm{i}(1 + \mathrm{i}) = -2 + 2\mathrm{i}$ : partie réelle $-2$, partie imaginaire $2$.`,
      steps: [
        String.raw`Rappel : pour $z = a + \mathrm{i}b$, la partie réelle est $a$ et la partie imaginaire est le **réel** $b$. Pour une puissance, on calcule d'abord le carré puis on multiplie une fois de plus.`,
        String.raw`Carré : $(1 + \mathrm{i})^2 = 1 + 2\mathrm{i} + \mathrm{i}^2 = 1 + 2\mathrm{i} - 1 = 2\mathrm{i}$.`,
        String.raw`Cube : $(1 + \mathrm{i})^3 = 2\mathrm{i}(1 + \mathrm{i}) = 2\mathrm{i} + 2\mathrm{i}^2 = 2\mathrm{i} - 2 = -2 + 2\mathrm{i}$.`,
        String.raw`Lecture : $\operatorname{Re} = -2$ et $\operatorname{Im} = 2$. Vérification avec le binôme : $1 + 3\mathrm{i} + 3\mathrm{i}^2 + \mathrm{i}^3 = 1 + 3\mathrm{i} - 3 - \mathrm{i} = -2 + 2\mathrm{i}$ ✔.`
      ],
      rule: String.raw`$(1 + \mathrm{i})^2 = 2\mathrm{i}$ ; $\mathrm{i}^2 = -1$ et $\mathrm{i}^3 = -\mathrm{i}$.` },
    { id: 'm7-x-005', level: 1, topic: 'Module d\'un complexe', sec: 'm7-s-plan', check: 'value', vars: [],
      prompt: String.raw`Calcule le module $|3 - 4\mathrm{i}|$.`,
      answer: '5',
      mistakes: [
        { expr: '25', msg: String.raw`$25 = 3^2 + 4^2 = |z|^2$ : n'oublie pas la racine carrée finale.` },
        { expr: '7', msg: String.raw`Le module n'est pas $|a| + |b|$ mais $\sqrt{a^2 + b^2}$ (Pythagore).` },
        { expr: 'sqrt(7)', msg: String.raw`Tu as soustrait les carrés ($16 - 9$). Dans le module, $a$ et $b$ sont réels et on **additionne** leurs carrés : $\sqrt{9 + 16}$.` }
      ],
      hint: String.raw`$|a + \mathrm{i}b| = \sqrt{a^2 + b^2}$.`,
      explain: String.raw`$|3 - 4\mathrm{i}| = \sqrt{3^2 + (-4)^2} = \sqrt{9 + 16} = \sqrt{25} = 5$.`,
      steps: [
        String.raw`Rappel : le module de $z = a + \mathrm{i}b$ est la distance de l'origine au point $M(a ; b)$. Par Pythagore : $|z| = \sqrt{a^2 + b^2}$.`,
        String.raw`Ici $a = 3$ et $b = -4$ (coefficient de $\mathrm{i}$, avec son signe, sans le $\mathrm{i}$).`,
        String.raw`$a^2 + b^2 = 9 + 16 = 25$ (le signe de $b$ disparaît au carré), donc $|3 - 4\mathrm{i}| = \sqrt{25} = 5$.`,
        String.raw`Vérification : $z\overline{z} = (3 - 4\mathrm{i})(3 + 4\mathrm{i}) = 9 - 16\mathrm{i}^2 = 25 = |z|^2$ ✔.`
      ],
      rule: String.raw`$|a + \mathrm{i}b| = \sqrt{a^2 + b^2}$ et $|z|^2 = z\overline{z}$.` },
    { id: 'm7-x-006', level: 2, topic: 'Inverse d\'un complexe', sec: 'm7-s-algebrique', check: 'value', vars: [],
      prompt: String.raw`Mets sous forme algébrique $\dfrac{1}{1 + \mathrm{i}}$.`,
      answer: '1/2-i/2',
      mistakes: [
        { expr: '1-i', msg: String.raw`Tu as multiplié en haut par le conjugué mais oublié le dénominateur : il faut aussi diviser par $(1 + \mathrm{i})(1 - \mathrm{i}) = 2$.` },
        { expr: '1/2+i/2', msg: String.raw`Erreur de signe : le conjugué de $1 + \mathrm{i}$ est $1 - \mathrm{i}$, donc la partie imaginaire du résultat est négative.` },
        { expr: '(1-i)/sqrt(2)', msg: String.raw`Tu as divisé par $|1 + \mathrm{i}| = \sqrt{2}$ au lieu de $|1 + \mathrm{i}|^2 = (1 + \mathrm{i})(1 - \mathrm{i}) = 2$.` }
      ],
      hint: String.raw`Multiplie haut et bas par le conjugué $1 - \mathrm{i}$.`,
      explain: String.raw`On multiplie haut et bas par le conjugué : $\frac{1}{1 + \mathrm{i}} = \frac{1 - \mathrm{i}}{(1 + \mathrm{i})(1 - \mathrm{i})} = \frac{1 - \mathrm{i}}{2} = \frac{1}{2} - \frac{1}{2}\mathrm{i}$.`,
      steps: [
        String.raw`Rappel : pour écrire un quotient sous forme $a + \mathrm{i}b$, on multiplie numérateur et dénominateur par le **conjugué du dénominateur** ; le dénominateur devient alors le réel $|w|^2$.`,
        String.raw`Conjugué de $1 + \mathrm{i}$ : $1 - \mathrm{i}$. Dénominateur : $(1 + \mathrm{i})(1 - \mathrm{i}) = 1^2 - \mathrm{i}^2 = 1 + 1 = 2$.`,
        String.raw`Numérateur : $1 \times (1 - \mathrm{i}) = 1 - \mathrm{i}$. Donc $\frac{1}{1 + \mathrm{i}} = \frac{1 - \mathrm{i}}{2} = \frac{1}{2} - \frac{1}{2}\mathrm{i}$.`,
        String.raw`Vérification : $(1 + \mathrm{i})\left(\frac{1}{2} - \frac{1}{2}\mathrm{i}\right) = \frac{1}{2} - \frac{1}{2}\mathrm{i} + \frac{1}{2}\mathrm{i} - \frac{1}{2}\mathrm{i}^2 = \frac{1}{2} + \frac{1}{2} = 1$ ✔.`
      ],
      rule: String.raw`$\frac{1}{z} = \frac{\overline{z}}{|z|^2}$ et $(a + \mathrm{i}b)(a - \mathrm{i}b) = a^2 + b^2$.` },
    { id: 'm7-x-007', level: 2, topic: 'Quotient de complexes', sec: 'm7-s-algebrique', check: 'value', vars: [],
      prompt: String.raw`Mets sous forme algébrique $\dfrac{3 + \mathrm{i}}{1 - \mathrm{i}}$.`,
      answer: '1+2*i',
      mistakes: [
        { expr: '2+4*i', msg: String.raw`Tu as calculé le numérateur $(3 + \mathrm{i})(1 + \mathrm{i}) = 2 + 4\mathrm{i}$ mais oublié de diviser par $(1 - \mathrm{i})(1 + \mathrm{i}) = 2$.` },
        { expr: '2-i', msg: String.raw`Tu as multiplié par $1 - \mathrm{i}$ ; il faut multiplier par le **conjugué** du dénominateur, $1 + \mathrm{i}$, pour obtenir un dénominateur réel.` },
        { expr: '1-2*i', msg: String.raw`Erreur de signe : c'est le conjugué du résultat. Vérifie : $(1 - 2\mathrm{i})(1 - \mathrm{i}) = -1 - 3\mathrm{i} \neq 3 + \mathrm{i}$.` }
      ],
      hint: String.raw`Multiplie numérateur et dénominateur par $1 + \mathrm{i}$.`,
      explain: String.raw`On multiplie haut et bas par $1 + \mathrm{i}$ : $\frac{(3 + \mathrm{i})(1 + \mathrm{i})}{(1 - \mathrm{i})(1 + \mathrm{i})} = \frac{2 + 4\mathrm{i}}{2} = 1 + 2\mathrm{i}$.`,
      steps: [
        String.raw`Rappel : pour un quotient $\frac{z}{w}$, on multiplie haut et bas par $\overline{w}$, ce qui rend le dénominateur réel ($w\overline{w} = |w|^2$). Ici $\overline{1 - \mathrm{i}} = 1 + \mathrm{i}$.`,
        String.raw`Dénominateur : $(1 - \mathrm{i})(1 + \mathrm{i}) = 1^2 + 1^2 = 2$.`,
        String.raw`Numérateur : $(3 + \mathrm{i})(1 + \mathrm{i}) = 3 + 3\mathrm{i} + \mathrm{i} + \mathrm{i}^2 = 3 + 4\mathrm{i} - 1 = 2 + 4\mathrm{i}$.`,
        String.raw`Quotient : $\frac{2 + 4\mathrm{i}}{2} = 1 + 2\mathrm{i}$ (on divise les deux parties par 2).`,
        String.raw`Vérification : $(1 + 2\mathrm{i})(1 - \mathrm{i}) = 1 - \mathrm{i} + 2\mathrm{i} - 2\mathrm{i}^2 = 3 + \mathrm{i}$ ✔.`
      ],
      rule: String.raw`$\frac{z}{w} = \frac{z\,\overline{w}}{|w|^2}$.` },
    { id: 'm7-x-008', level: 2, topic: 'Quotient de complexes', sec: 'm7-s-algebrique', check: 'tuple', vars: [],
      prompt: String.raw`Donne la partie réelle puis la partie imaginaire de $\dfrac{1 + 2\mathrm{i}}{3 - \mathrm{i}}$ (format : Re;Im).`,
      answer: '1/10;7/10',
      mistakes: [
        { expr: '1/2;7/10', msg: String.raw`Au numérateur, $2\mathrm{i} \times \mathrm{i} = 2\mathrm{i}^2 = -2$ (et non $+2$) : $(1 + 2\mathrm{i})(3 + \mathrm{i}) = 1 + 7\mathrm{i}$.` },
        { expr: '1/8;7/8', msg: String.raw`Le dénominateur vaut $(3 - \mathrm{i})(3 + \mathrm{i}) = 9 - \mathrm{i}^2 = 9 + 1 = 10$, pas $9 - 1 = 8$.` },
        { expr: '7/10;1/10', msg: String.raw`Ordre inversé : on attend d'abord la partie réelle $\frac{1}{10}$, puis la partie imaginaire $\frac{7}{10}$.` }
      ],
      hint: String.raw`Multiplie haut et bas par $3 + \mathrm{i}$ ; le dénominateur devient $3^2 + 1^2$.`,
      explain: String.raw`En multipliant haut et bas par $3 + \mathrm{i}$ : numérateur $1 + 7\mathrm{i}$, dénominateur $10$, donc le quotient vaut $\frac{1}{10} + \frac{7}{10}\mathrm{i}$.`,
      steps: [
        String.raw`Rappel : pour lire les parties réelle et imaginaire d'un quotient, on rend d'abord le dénominateur réel en multipliant haut et bas par son conjugué, ici $3 + \mathrm{i}$.`,
        String.raw`Dénominateur : $(3 - \mathrm{i})(3 + \mathrm{i}) = 3^2 + 1^2 = 10$.`,
        String.raw`Numérateur : $(1 + 2\mathrm{i})(3 + \mathrm{i}) = 3 + \mathrm{i} + 6\mathrm{i} + 2\mathrm{i}^2 = 3 + 7\mathrm{i} - 2 = 1 + 7\mathrm{i}$.`,
        String.raw`Quotient : $\frac{1 + 7\mathrm{i}}{10} = \frac{1}{10} + \frac{7}{10}\mathrm{i}$, donc $\operatorname{Re} = \frac{1}{10}$ et $\operatorname{Im} = \frac{7}{10}$.`,
        String.raw`Vérification : $\left(\frac{1}{10} + \frac{7}{10}\mathrm{i}\right)(3 - \mathrm{i}) = \frac{3 - \mathrm{i} + 21\mathrm{i} + 7}{10} = \frac{10 + 20\mathrm{i}}{10} = 1 + 2\mathrm{i}$ ✔.`
      ],
      rule: String.raw`$\frac{z}{w} = \frac{z\,\overline{w}}{|w|^2}$ ; $(a - \mathrm{i}b)(a + \mathrm{i}b) = a^2 + b^2$.` },
    { id: 'm7-x-009', level: 2, topic: 'Distance et module', sec: 'm7-s-plan', check: 'value', vars: [],
      prompt: String.raw`Dans le plan complexe, $A$ et $B$ ont pour affixes $1 + 2\mathrm{i}$ et $4 - 2\mathrm{i}$. Calcule la distance $AB$.`,
      answer: '5',
      mistakes: [
        { expr: 'sqrt(5)', msg: String.raw`$AB = |z_B - z_A|$, pas $|z_B| - |z_A| = 2\sqrt{5} - \sqrt{5}$ : le module d'une différence n'est pas la différence des modules.` },
        { expr: '25', msg: String.raw`$25 = |z_B - z_A|^2$ : n'oublie pas la racine carrée.` },
        { expr: '7', msg: String.raw`Le module de $3 - 4\mathrm{i}$ n'est pas $3 + 4$ : c'est $\sqrt{3^2 + 4^2}$.` }
      ],
      hint: String.raw`$AB = |z_B - z_A|$.`,
      explain: String.raw`$z_B - z_A = 3 - 4\mathrm{i}$, donc $AB = |3 - 4\mathrm{i}| = \sqrt{9 + 16} = 5$.`,
      steps: [
        String.raw`Rappel : dans le plan complexe, la distance entre deux points est le module de la différence de leurs affixes : $AB = |z_B - z_A|$.`,
        String.raw`Différence (parties réelles et imaginaires séparément) : $z_B - z_A = (4 - 1) + (-2 - 2)\mathrm{i} = 3 - 4\mathrm{i}$.`,
        String.raw`Module : $|3 - 4\mathrm{i}| = \sqrt{3^2 + (-4)^2} = \sqrt{25} = 5$.`,
        String.raw`Vérification en coordonnées : $A(1 ; 2)$, $B(4 ; -2)$, $AB = \sqrt{(4 - 1)^2 + (-2 - 2)^2} = \sqrt{9 + 16} = 5$ ✔.`
      ],
      rule: String.raw`$AB = |z_B - z_A|$.` },
    { id: 'm7-x-010', level: 1, topic: 'Argument principal', sec: 'm7-s-argument', check: 'value', vars: [],
      prompt: String.raw`Donne l'argument principal (en radians, dans $]-\pi, \pi]$) de $1 + \mathrm{i}\sqrt{3}$.`,
      answer: 'pi/3',
      mistakes: [
        { expr: 'pi/6', msg: String.raw`Tu as échangé cosinus et sinus : ici $\cos\theta = \frac{1}{2}$ et $\sin\theta = \frac{\sqrt{3}}{2}$, ce qui donne $\frac{\pi}{3}$ (et non $\frac{\pi}{6}$).` },
        { expr: '60', msg: String.raw`La réponse est attendue en **radians** : $60° = \frac{\pi}{3}$.` },
        { expr: '2', msg: String.raw`$2$ est le module de $1 + \mathrm{i}\sqrt{3}$, pas son argument (qui est un angle).` }
      ],
      hint: String.raw`Module 2 ; cherche $\theta$ avec $\cos\theta = \frac{1}{2}$ et $\sin\theta = \frac{\sqrt{3}}{2}$.`,
      explain: String.raw`$|z| = 2$, $\cos\theta = \frac{1}{2}$ et $\sin\theta = \frac{\sqrt{3}}{2}$, donc $\theta = \frac{\pi}{3}$.`,
      steps: [
        String.raw`Rappel : un argument de $z = a + \mathrm{i}b \neq 0$ est un angle $\theta$ tel que $\cos\theta = \frac{a}{|z|}$ et $\sin\theta = \frac{b}{|z|}$ ; l'argument principal est celui de $]-\pi, \pi]$.`,
        String.raw`Module : $|z| = \sqrt{1^2 + (\sqrt{3})^2} = \sqrt{1 + 3} = 2$.`,
        String.raw`$\cos\theta = \frac{1}{2}$ et $\sin\theta = \frac{\sqrt{3}}{2}$ : tous deux positifs (1er quadrant), c'est l'angle remarquable $\theta = \frac{\pi}{3}$.`,
        String.raw`Vérification : $2\,\mathrm{e}^{\mathrm{i}\pi/3} = 2\left(\frac{1}{2} + \mathrm{i}\frac{\sqrt{3}}{2}\right) = 1 + \mathrm{i}\sqrt{3}$ ✔.`
      ],
      rule: String.raw`$\cos\theta = \frac{a}{|z|}$, $\sin\theta = \frac{b}{|z|}$ ; $\cos\frac{\pi}{3} = \frac{1}{2}$, $\sin\frac{\pi}{3} = \frac{\sqrt{3}}{2}$.` },
    { id: 'm7-x-011', level: 2, topic: 'Argument principal', sec: 'm7-s-argument', check: 'value', vars: [],
      prompt: String.raw`Donne l'argument principal (en radians, dans $]-\pi, \pi]$) de $-1 + \mathrm{i}\sqrt{3}$.`,
      answer: '2*pi/3',
      mistakes: [
        { expr: '-pi/3', msg: String.raw`$\arctan(-\sqrt{3}) = -\frac{\pi}{3}$, mais $a \lt 0$ : le point est dans le 2e quadrant, il faut ajouter $\pi$.` },
        { expr: 'pi/3', msg: String.raw`$\frac{\pi}{3}$ est l'argument de $1 + \mathrm{i}\sqrt{3}$ ; ici la partie réelle est négative, donc $\cos\theta \lt 0$.` },
        { expr: '-2*pi/3', msg: String.raw`$-\frac{2\pi}{3}$ est l'argument du conjugué $-1 - \mathrm{i}\sqrt{3}$ ; ici $\sin\theta = \frac{\sqrt{3}}{2} \gt 0$, l'angle est positif.` }
      ],
      hint: String.raw`Place le point : partie réelle négative, partie imaginaire positive.`,
      explain: String.raw`$|z| = 2$, $\cos\theta = -\frac{1}{2}$, $\sin\theta = \frac{\sqrt{3}}{2}$ : 2e quadrant, $\theta = \frac{2\pi}{3}$. Avec arctan : $-\frac{\pi}{3} + \pi = \frac{2\pi}{3}$.`,
      steps: [
        String.raw`Rappel : l'argument principal est l'angle $\theta \in ]-\pi, \pi]$ tel que $\cos\theta = \frac{a}{|z|}$ et $\sin\theta = \frac{b}{|z|}$. Il faut toujours regarder dans quel quadrant est le point.`,
        String.raw`Le point $(-1 ; \sqrt{3})$ a $a \lt 0$ et $b \gt 0$ : 2e quadrant, $\theta \in ]\frac{\pi}{2}, \pi[$. Module : $\sqrt{1 + 3} = 2$.`,
        String.raw`$\cos\theta = -\frac{1}{2}$ et $\sin\theta = \frac{\sqrt{3}}{2}$ : angle de référence $\frac{\pi}{3}$, donc $\theta = \pi - \frac{\pi}{3} = \frac{2\pi}{3}$.`,
        String.raw`Avec arctan : $\arctan\frac{\sqrt{3}}{-1} = -\frac{\pi}{3}$, puis on ajoute $\pi$ car $a \lt 0$, $b \gt 0$ : $-\frac{\pi}{3} + \pi = \frac{2\pi}{3}$ ✔.`
      ],
      rule: String.raw`Si $a \lt 0$ et $b \geq 0$ : $\arg z = \arctan\frac{b}{a} + \pi$.`,
      pitfall: String.raw`La calculatrice donne $\arctan(-\sqrt{3}) = -\frac{\pi}{3}$ : c'est l'angle du point opposé, il faut corriger de $\pi$.` },
    { id: 'm7-x-012', level: 2, topic: 'Argument principal', sec: 'm7-s-argument', check: 'value', vars: [],
      prompt: String.raw`Donne l'argument principal (en radians, dans $]-\pi, \pi]$) de $-1 - \mathrm{i}$.`,
      answer: '-3*pi/4',
      mistakes: [
        { expr: 'pi/4', msg: String.raw`$\arctan\frac{-1}{-1} = \frac{\pi}{4}$ sans correction : or le point est dans le 3e quadrant ($a \lt 0$, $b \lt 0$), il faut retirer $\pi$.` },
        { expr: '5*pi/4', msg: String.raw`$\frac{5\pi}{4}$ est **un** argument, mais pas l'argument principal : retire $2\pi$ pour revenir dans $]-\pi, \pi]$.` },
        { expr: '3*pi/4', msg: String.raw`$\frac{3\pi}{4}$ est l'argument de $-1 + \mathrm{i}$ ; ici $\sin\theta \lt 0$, l'angle doit être négatif.` }
      ],
      hint: String.raw`$a \lt 0$ et $b \lt 0$ : $\theta = \arctan\frac{b}{a} - \pi$.`,
      explain: String.raw`$\cos\theta = \sin\theta = -\frac{\sqrt{2}}{2}$ (3e quadrant), donc $\theta = -\frac{3\pi}{4}$. Avec arctan : $\frac{\pi}{4} - \pi = -\frac{3\pi}{4}$.`,
      steps: [
        String.raw`Rappel : l'argument principal est l'angle $\theta \in ]-\pi, \pi]$ repérant le point ; dans le 3e quadrant ($a \lt 0$, $b \lt 0$) il est dans $]-\pi, -\frac{\pi}{2}[$.`,
        String.raw`Module : $\sqrt{(-1)^2 + (-1)^2} = \sqrt{2}$, donc $\cos\theta = \sin\theta = -\frac{1}{\sqrt{2}} = -\frac{\sqrt{2}}{2}$.`,
        String.raw`Angle de référence $\frac{\pi}{4}$ ; dans le 3e quadrant et dans $]-\pi, \pi]$ : $\theta = -\pi + \frac{\pi}{4} = -\frac{3\pi}{4}$.`,
        String.raw`Avec arctan : $\arctan\frac{-1}{-1} = \arctan 1 = \frac{\pi}{4}$, puis on retire $\pi$ (car $b \lt 0$) : $-\frac{3\pi}{4}$.`,
        String.raw`Vérification : $\cos(-\frac{3\pi}{4}) = -\frac{\sqrt{2}}{2}$ ✔ et $\sin(-\frac{3\pi}{4}) = -\frac{\sqrt{2}}{2}$ ✔.`
      ],
      rule: String.raw`Si $a \lt 0$ et $b \lt 0$ : $\arg z = \arctan\frac{b}{a} - \pi$.` },
    { id: 'm7-x-013', level: 3, topic: 'Argument principal', sec: 'm7-s-argument', check: 'value', vars: [],
      prompt: String.raw`Donne l'argument principal (en radians, dans $]-\pi, \pi]$) de $-\sqrt{3} - \mathrm{i}$.`,
      answer: '-5*pi/6',
      mistakes: [
        { expr: 'pi/6', msg: String.raw`$\arctan\frac{-1}{-\sqrt{3}} = \frac{\pi}{6}$, mais le point est dans le 3e quadrant : il faut retirer $\pi$.` },
        { expr: '7*pi/6', msg: String.raw`$\frac{7\pi}{6}$ est un argument, mais pas dans $]-\pi, \pi]$ : retire $2\pi$.` },
        { expr: '-pi/6', msg: String.raw`$-\frac{\pi}{6}$ est l'argument de $\sqrt{3} - \mathrm{i}$ : ici la partie réelle est négative.` }
      ],
      hint: String.raw`Module 2 ; $\cos\theta = -\frac{\sqrt{3}}{2}$, $\sin\theta = -\frac{1}{2}$.`,
      explain: String.raw`$|z| = 2$, $\cos\theta = -\frac{\sqrt{3}}{2}$ et $\sin\theta = -\frac{1}{2}$ : $\theta = -\frac{5\pi}{6}$. Avec arctan : $\frac{\pi}{6} - \pi = -\frac{5\pi}{6}$.`,
      steps: [
        String.raw`Rappel : on repère d'abord le quadrant, puis on cherche $\theta \in ]-\pi, \pi]$ avec $\cos\theta = \frac{a}{|z|}$ et $\sin\theta = \frac{b}{|z|}$.`,
        String.raw`Le point $(-\sqrt{3} ; -1)$ est dans le 3e quadrant. Module : $\sqrt{3 + 1} = 2$, donc $\cos\theta = -\frac{\sqrt{3}}{2}$ et $\sin\theta = -\frac{1}{2}$.`,
        String.raw`Angle de référence $\frac{\pi}{6}$ (car $\cos\frac{\pi}{6} = \frac{\sqrt{3}}{2}$, $\sin\frac{\pi}{6} = \frac{1}{2}$) ; dans le 3e quadrant : $\theta = -\pi + \frac{\pi}{6} = -\frac{5\pi}{6}$.`,
        String.raw`Avec arctan : $\arctan\frac{-1}{-\sqrt{3}} = \arctan\frac{1}{\sqrt{3}} = \frac{\pi}{6}$, puis $\frac{\pi}{6} - \pi = -\frac{5\pi}{6}$.`,
        String.raw`Vérification : $\cos(-\frac{5\pi}{6}) = -\frac{\sqrt{3}}{2}$ ✔ et $\sin(-\frac{5\pi}{6}) = -\frac{1}{2}$ ✔.`
      ],
      rule: String.raw`Si $a \lt 0$ et $b \lt 0$ : $\arg z = \arctan\frac{b}{a} - \pi$.` },
    { id: 'm7-x-014', level: 2, topic: 'Module et argument', sec: 'm7-s-argument', check: 'tuple', vars: [],
      prompt: String.raw`Donne le module puis l'argument principal de $-\sqrt{3} + \mathrm{i}$ (format : module;argument).`,
      answer: '2;5*pi/6',
      mistakes: [
        { expr: '2;-pi/6', msg: String.raw`$\arctan\frac{1}{-\sqrt{3}} = -\frac{\pi}{6}$ doit être corrigé : $a \lt 0$ et $b \gt 0$ (2e quadrant), on ajoute $\pi$.` },
        { expr: '4;5*pi/6', msg: String.raw`Le module est $\sqrt{3 + 1} = 2$ : n'oublie pas la racine carrée.` },
        { expr: '2;-5*pi/6', msg: String.raw`$-\frac{5\pi}{6}$ est l'argument du conjugué $-\sqrt{3} - \mathrm{i}$ ; ici la partie imaginaire est positive.` }
      ],
      hint: String.raw`Module $\sqrt{3 + 1}$ ; point dans le 2e quadrant.`,
      explain: String.raw`$|z| = \sqrt{3 + 1} = 2$, $\cos\theta = -\frac{\sqrt{3}}{2}$ et $\sin\theta = \frac{1}{2}$ : $\theta = \frac{5\pi}{6}$.`,
      steps: [
        String.raw`Rappel : le module $|z| = \sqrt{a^2 + b^2}$ est la distance à l'origine ; l'argument principal est l'angle $\theta \in ]-\pi, \pi]$ avec $\cos\theta = \frac{a}{|z|}$, $\sin\theta = \frac{b}{|z|}$.`,
        String.raw`Module : $|z| = \sqrt{(-\sqrt{3})^2 + 1^2} = \sqrt{3 + 1} = 2$.`,
        String.raw`Le point $(-\sqrt{3} ; 1)$ est dans le 2e quadrant ; $\cos\theta = -\frac{\sqrt{3}}{2}$, $\sin\theta = \frac{1}{2}$ : angle de référence $\frac{\pi}{6}$, donc $\theta = \pi - \frac{\pi}{6} = \frac{5\pi}{6}$.`,
        String.raw`Vérification : $2\,\mathrm{e}^{5\mathrm{i}\pi/6} = 2\left(-\frac{\sqrt{3}}{2} + \frac{1}{2}\mathrm{i}\right) = -\sqrt{3} + \mathrm{i}$ ✔. Réponse : $2 ; \frac{5\pi}{6}$.`
      ],
      rule: String.raw`$|z| = \sqrt{a^2 + b^2}$ ; si $a \lt 0$, $b \geq 0$ : $\arg z = \arctan\frac{b}{a} + \pi$.` },
    { id: 'm7-x-015', level: 2, topic: 'Forme exponentielle', sec: 'm7-s-expo', check: 'value', vars: [],
      prompt: String.raw`Écris $-1 + \mathrm{i}\sqrt{3}$ sous forme exponentielle $r\,\mathrm{e}^{\mathrm{i}\theta}$ avec $r \gt 0$ et $\theta \in ]-\pi, \pi]$ (syntaxe : r*exp(i*θ)).`,
      answer: '2*exp(2*i*pi/3)',
      mistakes: [
        { expr: '2*exp(-i*pi/3)', msg: String.raw`$2\mathrm{e}^{-\mathrm{i}\pi/3} = 1 - \mathrm{i}\sqrt{3}$ : arctan non corrigé (partie réelle négative, il faut ajouter $\pi$).` },
        { expr: '4*exp(2*i*pi/3)', msg: String.raw`Le module est $\sqrt{1 + 3} = 2$ : n'oublie pas la racine carrée.` },
        { expr: '2*exp(i*pi/3)', msg: String.raw`$2\mathrm{e}^{\mathrm{i}\pi/3} = 1 + \mathrm{i}\sqrt{3}$ : la partie réelle doit être négative, l'angle est dans le 2e quadrant.` }
      ],
      hint: String.raw`Calcule le module, puis l'argument (2e quadrant).`,
      explain: String.raw`$r = \sqrt{1 + 3} = 2$, $\cos\theta = -\frac{1}{2}$, $\sin\theta = \frac{\sqrt{3}}{2}$, donc $-1 + \mathrm{i}\sqrt{3} = 2\,\mathrm{e}^{2\mathrm{i}\pi/3}$.`,
      steps: [
        String.raw`Rappel : la forme exponentielle est $z = r\,\mathrm{e}^{\mathrm{i}\theta}$ où $r = |z| \gt 0$ et $\theta$ est un argument ; elle se lit grâce à $\mathrm{e}^{\mathrm{i}\theta} = \cos\theta + \mathrm{i}\sin\theta$.`,
        String.raw`Module : $r = \sqrt{(-1)^2 + (\sqrt{3})^2} = \sqrt{4} = 2$.`,
        String.raw`Argument : $\cos\theta = -\frac{1}{2}$ et $\sin\theta = \frac{\sqrt{3}}{2}$, 2e quadrant, donc $\theta = \pi - \frac{\pi}{3} = \frac{2\pi}{3}$.`,
        String.raw`Forme exponentielle : $2\,\mathrm{e}^{2\mathrm{i}\pi/3}$ (à taper 2*exp(2*i*pi/3)). Vérification : $2\left(-\frac{1}{2} + \mathrm{i}\frac{\sqrt{3}}{2}\right) = -1 + \mathrm{i}\sqrt{3}$ ✔.`
      ],
      rule: String.raw`$z = r\,\mathrm{e}^{\mathrm{i}\theta}$ avec $r = |z| \gt 0$ et $\theta = \arg z$.` },
    { id: 'm7-x-016', level: 1, topic: 'Forme exponentielle vers algébrique', sec: 'm7-s-expo', check: 'value', vars: [],
      prompt: String.raw`Mets sous forme algébrique $2\,\mathrm{e}^{\mathrm{i}\pi/3}$ (valeur exacte).`,
      answer: '1+i*sqrt(3)',
      mistakes: [
        { expr: 'sqrt(3)+i', msg: String.raw`Tu as échangé cosinus et sinus : $\cos\frac{\pi}{3} = \frac{1}{2}$ et $\sin\frac{\pi}{3} = \frac{\sqrt{3}}{2}$.` },
        { expr: '1/2+i*sqrt(3)/2', msg: String.raw`Tu as oublié le module 2 : $2\,\mathrm{e}^{\mathrm{i}\pi/3} = 2\cos\frac{\pi}{3} + 2\mathrm{i}\sin\frac{\pi}{3}$.` },
        { expr: '1-i*sqrt(3)', msg: String.raw`Erreur de signe : $\sin\frac{\pi}{3} = +\frac{\sqrt{3}}{2}$ ; $1 - \mathrm{i}\sqrt{3}$ correspond à l'angle $-\frac{\pi}{3}$.` }
      ],
      hint: String.raw`$r\mathrm{e}^{\mathrm{i}\theta} = r\cos\theta + \mathrm{i}\,r\sin\theta$.`,
      explain: String.raw`$2\,\mathrm{e}^{\mathrm{i}\pi/3} = 2\left(\frac{1}{2} + \mathrm{i}\frac{\sqrt{3}}{2}\right) = 1 + \mathrm{i}\sqrt{3}$.`,
      steps: [
        String.raw`Rappel (formule d'Euler) : $r\,\mathrm{e}^{\mathrm{i}\theta} = r(\cos\theta + \mathrm{i}\sin\theta) = r\cos\theta + \mathrm{i}\,r\sin\theta$ : la partie réelle est $r\cos\theta$, la partie imaginaire $r\sin\theta$.`,
        String.raw`Valeurs remarquables : $\cos\frac{\pi}{3} = \frac{1}{2}$ et $\sin\frac{\pi}{3} = \frac{\sqrt{3}}{2}$.`,
        String.raw`$2\,\mathrm{e}^{\mathrm{i}\pi/3} = 2 \times \frac{1}{2} + \mathrm{i} \times 2 \times \frac{\sqrt{3}}{2} = 1 + \mathrm{i}\sqrt{3}$.`,
        String.raw`Vérification : $|1 + \mathrm{i}\sqrt{3}| = \sqrt{1 + 3} = 2$ ✔ (même module).`
      ],
      rule: String.raw`$r\,\mathrm{e}^{\mathrm{i}\theta} = r\cos\theta + \mathrm{i}\,r\sin\theta$.` },
    { id: 'm7-x-017', level: 1, topic: 'Produit en forme exponentielle', sec: 'm7-s-expo', check: 'value', vars: [],
      prompt: String.raw`Mets sous forme algébrique $\mathrm{e}^{\mathrm{i}\pi/3} \times \mathrm{e}^{\mathrm{i}\pi/6}$.`,
      answer: 'i',
      mistakes: [
        { expr: 'exp(i*pi^2/18)', msg: String.raw`Les arguments s'**ajoutent** dans un produit ($\mathrm{e}^{a}\mathrm{e}^{b} = \mathrm{e}^{a + b}$), ils ne se multiplient pas.` },
        { expr: 'exp(i*pi/6)', msg: String.raw`Tu as soustrait les arguments ($\frac{\pi}{3} - \frac{\pi}{6}$) : c'est la règle du quotient, pas du produit.` },
        { expr: '2*i', msg: String.raw`Les modules se **multiplient** : $1 \times 1 = 1$, pas $1 + 1 = 2$.` }
      ],
      hint: String.raw`$\mathrm{e}^{\mathrm{i}a}\,\mathrm{e}^{\mathrm{i}b} = \mathrm{e}^{\mathrm{i}(a + b)}$.`,
      explain: String.raw`$\frac{\pi}{3} + \frac{\pi}{6} = \frac{\pi}{2}$, donc le produit vaut $\mathrm{e}^{\mathrm{i}\pi/2} = \mathrm{i}$.`,
      steps: [
        String.raw`Rappel : $\mathrm{e}^{\mathrm{i}a} \times \mathrm{e}^{\mathrm{i}b} = \mathrm{e}^{\mathrm{i}(a + b)}$ : dans un produit, les modules se multiplient et les arguments s'ajoutent.`,
        String.raw`Somme des arguments : $\frac{\pi}{3} + \frac{\pi}{6} = \frac{2\pi}{6} + \frac{\pi}{6} = \frac{3\pi}{6} = \frac{\pi}{2}$ (modules : $1 \times 1 = 1$).`,
        String.raw`$\mathrm{e}^{\mathrm{i}\pi/2} = \cos\frac{\pi}{2} + \mathrm{i}\sin\frac{\pi}{2} = 0 + \mathrm{i} = \mathrm{i}$.`,
        String.raw`Vérification en algébrique : $\left(\frac{1}{2} + \mathrm{i}\frac{\sqrt{3}}{2}\right)\left(\frac{\sqrt{3}}{2} + \frac{\mathrm{i}}{2}\right) = \frac{\sqrt{3}}{4} + \frac{\mathrm{i}}{4} + \frac{3\mathrm{i}}{4} - \frac{\sqrt{3}}{4} = \mathrm{i}$ ✔.`
      ],
      rule: String.raw`$r\mathrm{e}^{\mathrm{i}\theta} \times r'\mathrm{e}^{\mathrm{i}\theta'} = rr'\,\mathrm{e}^{\mathrm{i}(\theta + \theta')}$.` },
    { id: 'm7-x-018', level: 2, topic: 'Puissance et Moivre', sec: 'm7-s-expo', check: 'value', vars: [],
      prompt: String.raw`Calcule $(1 + \mathrm{i})^8$.`,
      answer: '16',
      mistakes: [
        { expr: '-16', msg: String.raw`$8 \times \frac{\pi}{4} = 2\pi$ et $\mathrm{e}^{2\mathrm{i}\pi} = 1$ (un tour complet), pas $-1$.` },
        { expr: '256', msg: String.raw`Le module de $1 + \mathrm{i}$ est $\sqrt{2}$, pas 2 : $(\sqrt{2})^8 = 2^4 = 16$.` },
        { expr: '16*i', msg: String.raw`L'argument final $2\pi$ est un multiple de $2\pi$ : le résultat est un réel positif.` }
      ],
      hint: String.raw`$1 + \mathrm{i} = \sqrt{2}\,\mathrm{e}^{\mathrm{i}\pi/4}$, ou bien $(1 + \mathrm{i})^2 = 2\mathrm{i}$.`,
      explain: String.raw`$(1 + \mathrm{i})^8 = (\sqrt{2})^8\,\mathrm{e}^{8\mathrm{i}\pi/4} = 16\,\mathrm{e}^{2\mathrm{i}\pi} = 16$ ; autre voie : $(2\mathrm{i})^4 = 16$.`,
      steps: [
        String.raw`Rappel (Moivre) : $(r\,\mathrm{e}^{\mathrm{i}\theta})^n = r^n\,\mathrm{e}^{\mathrm{i}n\theta}$ ; pour une grande puissance, on passe donc en forme exponentielle.`,
        String.raw`$|1 + \mathrm{i}| = \sqrt{2}$ et $\arg(1 + \mathrm{i}) = \frac{\pi}{4}$, donc $1 + \mathrm{i} = \sqrt{2}\,\mathrm{e}^{\mathrm{i}\pi/4}$.`,
        String.raw`$(1 + \mathrm{i})^8 = (\sqrt{2})^8\,\mathrm{e}^{8\mathrm{i}\pi/4}$ avec $(\sqrt{2})^8 = \left((\sqrt{2})^2\right)^4 = 2^4 = 16$ et $8 \times \frac{\pi}{4} = 2\pi$.`,
        String.raw`$\mathrm{e}^{2\mathrm{i}\pi} = 1$, donc $(1 + \mathrm{i})^8 = 16$.`,
        String.raw`Vérification : $(1 + \mathrm{i})^2 = 2\mathrm{i}$, donc $(1 + \mathrm{i})^8 = (2\mathrm{i})^4 = 2^4\,\mathrm{i}^4 = 16$ ✔.`
      ],
      rule: String.raw`$(r\,\mathrm{e}^{\mathrm{i}\theta})^n = r^n\,\mathrm{e}^{\mathrm{i}n\theta}$.` },
    { id: 'm7-x-019', level: 3, topic: 'Puissance et Moivre', sec: 'm7-s-expo', check: 'value', vars: [],
      prompt: String.raw`Calcule $(1 - \mathrm{i})^5$ sous forme algébrique.`,
      answer: '-4+4*i',
      mistakes: [
        { expr: '4-4*i', msg: String.raw`$(1 - \mathrm{i})^2 = -2\mathrm{i}$, donc $(1 - \mathrm{i})^4 = (-2\mathrm{i})^2 = 4\mathrm{i}^2 = -4$ (et non $+4$).` },
        { expr: '-4-4*i', msg: String.raw`C'est le conjugué du résultat : l'argument de $1 - \mathrm{i}$ est $-\frac{\pi}{4}$, pas $+\frac{\pi}{4}$.` },
        { expr: '-4*sqrt(2)+4*sqrt(2)*i', msg: String.raw`$(\sqrt{2})^5 = 4\sqrt{2}$, et $4\sqrt{2} \times \frac{\sqrt{2}}{2} = 4$ : tu as oublié de multiplier par $\frac{\sqrt{2}}{2}$.` }
      ],
      hint: String.raw`$1 - \mathrm{i} = \sqrt{2}\,\mathrm{e}^{-\mathrm{i}\pi/4}$.`,
      explain: String.raw`$(1 - \mathrm{i})^5 = (\sqrt{2})^5\,\mathrm{e}^{-5\mathrm{i}\pi/4} = 4\sqrt{2}\left(-\frac{\sqrt{2}}{2} + \mathrm{i}\frac{\sqrt{2}}{2}\right) = -4 + 4\mathrm{i}$.`,
      steps: [
        String.raw`Rappel (Moivre) : $(r\,\mathrm{e}^{\mathrm{i}\theta})^n = r^n\,\mathrm{e}^{\mathrm{i}n\theta}$. Forme exponentielle : $|1 - \mathrm{i}| = \sqrt{2}$ et le point $(1 ; -1)$ est dans le 4e quadrant, donc $1 - \mathrm{i} = \sqrt{2}\,\mathrm{e}^{-\mathrm{i}\pi/4}$.`,
        String.raw`$(1 - \mathrm{i})^5 = (\sqrt{2})^5\,\mathrm{e}^{-5\mathrm{i}\pi/4}$ avec $(\sqrt{2})^5 = (\sqrt{2})^4 \times \sqrt{2} = 4\sqrt{2}$.`,
        String.raw`$-\frac{5\pi}{4} + 2\pi = \frac{3\pi}{4}$, donc $\mathrm{e}^{-5\mathrm{i}\pi/4} = \cos\frac{3\pi}{4} + \mathrm{i}\sin\frac{3\pi}{4} = -\frac{\sqrt{2}}{2} + \mathrm{i}\frac{\sqrt{2}}{2}$.`,
        String.raw`$4\sqrt{2}\left(-\frac{\sqrt{2}}{2} + \mathrm{i}\frac{\sqrt{2}}{2}\right) = -4 + 4\mathrm{i}$ (car $\sqrt{2} \times \sqrt{2} = 2$).`,
        String.raw`Vérification algébrique : $(1 - \mathrm{i})^2 = -2\mathrm{i}$, $(1 - \mathrm{i})^4 = (-2\mathrm{i})^2 = -4$, puis $(1 - \mathrm{i})^5 = -4(1 - \mathrm{i}) = -4 + 4\mathrm{i}$ ✔.`
      ],
      rule: String.raw`$(r\,\mathrm{e}^{\mathrm{i}\theta})^n = r^n\,\mathrm{e}^{\mathrm{i}n\theta}$ ; $1 - \mathrm{i} = \sqrt{2}\,\mathrm{e}^{-\mathrm{i}\pi/4}$.` },
    { id: 'm7-x-020', level: 2, topic: 'Angle moitié', sec: 'm7-s-euler', check: 'expr', vars: ['x'], domain: [-3, 3],
      prompt: String.raw`Pour $x \in ]-\pi, \pi[$, exprime le module $|1 + \mathrm{e}^{\mathrm{i}x}|$ en fonction de $x$ (forme simplifiée avec un cosinus).`,
      answer: '2*cos(x/2)',
      mistakes: [
        { expr: '2', msg: String.raw`$|1 + \mathrm{e}^{\mathrm{i}x}| \neq |1| + |\mathrm{e}^{\mathrm{i}x}|$ : le module d'une somme n'est pas la somme des modules.` },
        { expr: '2*cos(x)', msg: String.raw`L'angle est divisé par 2 : on factorise par $\mathrm{e}^{\mathrm{i}x/2}$, ce qui fait apparaître $\cos\frac{x}{2}$.` },
        { expr: '1+cos(x)', msg: String.raw`$1 + \cos x$ est la **partie réelle** de $1 + \mathrm{e}^{\mathrm{i}x}$, pas son module.` }
      ],
      hint: String.raw`Factorise par l'angle moitié : $1 + \mathrm{e}^{\mathrm{i}x} = \mathrm{e}^{\mathrm{i}x/2}\left(\mathrm{e}^{-\mathrm{i}x/2} + \mathrm{e}^{\mathrm{i}x/2}\right)$.`,
      explain: String.raw`$1 + \mathrm{e}^{\mathrm{i}x} = \mathrm{e}^{\mathrm{i}x/2} \times 2\cos\frac{x}{2}$ ; comme $|\mathrm{e}^{\mathrm{i}x/2}| = 1$ et $\cos\frac{x}{2} \gt 0$ sur $]-\pi, \pi[$, on obtient $2\cos\frac{x}{2}$.`,
      steps: [
        String.raw`Rappel (factorisation par l'angle moitié) : $\mathrm{e}^{\mathrm{i}a} + \mathrm{e}^{\mathrm{i}b} = \mathrm{e}^{\mathrm{i}\frac{a+b}{2}}\left(\mathrm{e}^{\mathrm{i}\frac{a-b}{2}} + \mathrm{e}^{-\mathrm{i}\frac{a-b}{2}}\right)$, et Euler donne $\mathrm{e}^{\mathrm{i}u} + \mathrm{e}^{-\mathrm{i}u} = 2\cos u$.`,
        String.raw`Avec $1 = \mathrm{e}^{\mathrm{i}0}$ : $1 + \mathrm{e}^{\mathrm{i}x} = \mathrm{e}^{\mathrm{i}x/2}\left(\mathrm{e}^{-\mathrm{i}x/2} + \mathrm{e}^{\mathrm{i}x/2}\right) = \mathrm{e}^{\mathrm{i}x/2} \times 2\cos\frac{x}{2}$.`,
        String.raw`Module d'un produit : $|1 + \mathrm{e}^{\mathrm{i}x}| = |\mathrm{e}^{\mathrm{i}x/2}| \times \left|2\cos\frac{x}{2}\right| = 2\left|\cos\frac{x}{2}\right|$.`,
        String.raw`Pour $x \in ]-\pi, \pi[$, $\frac{x}{2} \in ]-\frac{\pi}{2}, \frac{\pi}{2}[$, donc $\cos\frac{x}{2} \gt 0$ : $|1 + \mathrm{e}^{\mathrm{i}x}| = 2\cos\frac{x}{2}$.`,
        String.raw`Vérification : $|1 + \mathrm{e}^{\mathrm{i}x}|^2 = (1 + \cos x)^2 + \sin^2 x = 2 + 2\cos x = 4\cos^2\frac{x}{2}$ ✔ ; en $x = 0$ : $|1 + 1| = 2$ ✔.`
      ],
      rule: String.raw`$\mathrm{e}^{\mathrm{i}a} + \mathrm{e}^{\mathrm{i}b} = 2\cos\frac{a - b}{2}\,\mathrm{e}^{\mathrm{i}\frac{a + b}{2}}$.`,
      pitfall: String.raw`Le résultat général est $2\left|\cos\frac{x}{2}\right|$ : on ne peut retirer la valeur absolue que parce que $\cos\frac{x}{2} \gt 0$ sur $]-\pi, \pi[$.` },
    { id: 'm7-x-021', level: 2, topic: 'Partie réelle d\'un quotient', sec: 'm7-s-algebrique', check: 'expr', vars: ['x'],
      prompt: String.raw`Pour $x$ réel, donne la partie réelle de $\dfrac{1}{1 + \mathrm{i}x}$.`,
      answer: '1/(1+x^2)',
      mistakes: [
        { expr: '1/(1-x^2)', msg: String.raw`$(1 + \mathrm{i}x)(1 - \mathrm{i}x) = 1 - \mathrm{i}^2x^2 = 1 + x^2$ : attention au signe de $\mathrm{i}^2$.` },
        { expr: '1', msg: String.raw`On ne prend pas la partie réelle du dénominateur : $\operatorname{Re}\frac{1}{z} \neq \frac{1}{\operatorname{Re} z}$. Multiplie d'abord par le conjugué.` },
        { expr: '-x/(1+x^2)', msg: String.raw`Ça, c'est la partie **imaginaire** (coefficient de $\mathrm{i}$) ; la partie réelle est $\frac{1}{1 + x^2}$.` }
      ],
      hint: String.raw`Multiplie haut et bas par $1 - \mathrm{i}x$.`,
      explain: String.raw`$\frac{1}{1 + \mathrm{i}x} = \frac{1 - \mathrm{i}x}{1 + x^2} = \frac{1}{1 + x^2} - \mathrm{i}\frac{x}{1 + x^2}$ : la partie réelle est $\frac{1}{1 + x^2}$.`,
      steps: [
        String.raw`Rappel : pour lire la partie réelle d'un quotient, on rend d'abord le dénominateur réel en multipliant haut et bas par son conjugué ; ici $x$ est réel, donc $\overline{1 + \mathrm{i}x} = 1 - \mathrm{i}x$.`,
        String.raw`Dénominateur : $(1 + \mathrm{i}x)(1 - \mathrm{i}x) = 1 - \mathrm{i}^2x^2 = 1 + x^2$.`,
        String.raw`$\frac{1}{1 + \mathrm{i}x} = \frac{1 - \mathrm{i}x}{1 + x^2} = \frac{1}{1 + x^2} - \mathrm{i}\,\frac{x}{1 + x^2}$ : partie réelle $\frac{1}{1 + x^2}$.`,
        String.raw`Vérification en $x = 1$ : $\frac{1}{1 + \mathrm{i}} = \frac{1 - \mathrm{i}}{2}$, partie réelle $\frac{1}{2} = \frac{1}{1 + 1^2}$ ✔.`
      ],
      rule: String.raw`$\operatorname{Re}\frac{1}{a + \mathrm{i}b} = \frac{a}{a^2 + b^2}$ et $\operatorname{Im}\frac{1}{a + \mathrm{i}b} = \frac{-b}{a^2 + b^2}$.`,
      pitfall: String.raw`$\operatorname{Re}\frac{1}{z} \neq \frac{1}{\operatorname{Re} z}$ : il faut d'abord rendre le dénominateur réel.` },
    { id: 'm7-x-022', level: 2, topic: 'Linéarisation', sec: 'm7-s-euler', check: 'expr', vars: ['x'],
      prompt: String.raw`Linéarise $\sin^2 x$ (exprime-le à l'aide de $\cos 2x$).`,
      answer: '(1-cos(2*x))/2',
      mistakes: [
        { expr: '(1+cos(2*x))/2', msg: String.raw`C'est la linéarisation de $\cos^2 x$. Vérifie en $x = 0$ : $\sin^2 0 = 0$, alors que cette formule donne 1.` },
        { expr: '(1-cos(x))/2', msg: String.raw`L'angle doit être doublé : le carré fait apparaître $\mathrm{e}^{\pm 2\mathrm{i}x}$, donc $\cos 2x$.` },
        { expr: '(cos(2*x)-1)/2', msg: String.raw`Erreur de signe : $(2\mathrm{i})^2 = -4$. Ton expression est négative, alors que $\sin^2 x \geq 0$.` }
      ],
      hint: String.raw`$\sin^2 x = \left(\frac{\mathrm{e}^{\mathrm{i}x} - \mathrm{e}^{-\mathrm{i}x}}{2\mathrm{i}}\right)^2$, avec $(2\mathrm{i})^2 = -4$.`,
      explain: String.raw`Avec Euler : $\sin^2 x = \frac{\mathrm{e}^{2\mathrm{i}x} - 2 + \mathrm{e}^{-2\mathrm{i}x}}{-4} = \frac{2\cos 2x - 2}{-4} = \frac{1 - \cos 2x}{2}$.`,
      steps: [
        String.raw`Rappel : **linéariser** $\sin^2 x$, c'est l'écrire sans puissance, comme combinaison de $\cos(kx)$. Méthode : formule d'Euler $\sin x = \frac{\mathrm{e}^{\mathrm{i}x} - \mathrm{e}^{-\mathrm{i}x}}{2\mathrm{i}}$, puis développement.`,
        String.raw`Dénominateur : $(2\mathrm{i})^2 = 4\mathrm{i}^2 = -4$. Numérateur : $(\mathrm{e}^{\mathrm{i}x} - \mathrm{e}^{-\mathrm{i}x})^2 = \mathrm{e}^{2\mathrm{i}x} - 2\,\mathrm{e}^{\mathrm{i}x}\mathrm{e}^{-\mathrm{i}x} + \mathrm{e}^{-2\mathrm{i}x} = \mathrm{e}^{2\mathrm{i}x} - 2 + \mathrm{e}^{-2\mathrm{i}x}$.`,
        String.raw`Regroupement avec Euler : $\mathrm{e}^{2\mathrm{i}x} + \mathrm{e}^{-2\mathrm{i}x} = 2\cos 2x$, donc le numérateur vaut $2\cos 2x - 2$.`,
        String.raw`$\sin^2 x = \frac{2\cos 2x - 2}{-4} = \frac{2 - 2\cos 2x}{4} = \frac{1 - \cos 2x}{2}$.`,
        String.raw`Vérification : $x = 0$ donne $0$ ✔ ; $x = \frac{\pi}{2}$ donne $\frac{1 + 1}{2} = 1 = \sin^2\frac{\pi}{2}$ ✔.`
      ],
      rule: String.raw`$\sin^2 x = \frac{1 - \cos 2x}{2}$ et $\cos^2 x = \frac{1 + \cos 2x}{2}$.` },
    { id: 'm7-x-023', level: 2, topic: 'Linéarisation', sec: 'm7-s-euler', check: 'tuple', vars: [],
      prompt: String.raw`On écrit $\cos^3 x = a\cos 3x + b\cos x$ pour tout réel $x$. Donne $a$ puis $b$ (format : a;b).`,
      answer: '1/4;3/4',
      mistakes: [
        { expr: '3/4;1/4', msg: String.raw`Ordre inversé : le coefficient de $\cos 3x$ vient du seul terme $\mathrm{e}^{3\mathrm{i}x} + \mathrm{e}^{-3\mathrm{i}x}$ (coefficient 1), celui de $\cos x$ du terme avec le coefficient 3.` },
        { expr: '1/8;3/8', msg: String.raw`Tu as oublié le facteur 2 du regroupement : $\mathrm{e}^{\mathrm{i}kx} + \mathrm{e}^{-\mathrm{i}kx} = 2\cos kx$. Vérifie en $x = 0$ : $\frac{1}{8} + \frac{3}{8} \neq 1$.` },
        { expr: '1/2;3/2', msg: String.raw`Le dénominateur est $2^3 = 8$, pas 4 : $\cos^3 x = \frac{(\mathrm{e}^{\mathrm{i}x} + \mathrm{e}^{-\mathrm{i}x})^3}{8}$. En $x = 0$ on trouverait $2 \neq 1$.` }
      ],
      hint: String.raw`Euler puis binôme : $\left(\frac{\mathrm{e}^{\mathrm{i}x} + \mathrm{e}^{-\mathrm{i}x}}{2}\right)^3$.`,
      explain: String.raw`$\cos^3 x = \frac{\mathrm{e}^{3\mathrm{i}x} + 3\mathrm{e}^{\mathrm{i}x} + 3\mathrm{e}^{-\mathrm{i}x} + \mathrm{e}^{-3\mathrm{i}x}}{8} = \frac{2\cos 3x + 6\cos x}{8}$, donc $a = \frac{1}{4}$ et $b = \frac{3}{4}$.`,
      steps: [
        String.raw`Rappel : linéariser par Euler, c'est écrire $\cos x = \frac{\mathrm{e}^{\mathrm{i}x} + \mathrm{e}^{-\mathrm{i}x}}{2}$, développer la puissance avec le binôme, puis regrouper les termes conjugués en cosinus. Ici $\cos^3 x = \frac{(\mathrm{e}^{\mathrm{i}x} + \mathrm{e}^{-\mathrm{i}x})^3}{8}$.`,
        String.raw`Binôme $(A + B)^3 = A^3 + 3A^2B + 3AB^2 + B^3$ avec $A = \mathrm{e}^{\mathrm{i}x}$, $B = \mathrm{e}^{-\mathrm{i}x}$, $AB = 1$ : numérateur $= \mathrm{e}^{3\mathrm{i}x} + 3\mathrm{e}^{\mathrm{i}x} + 3\mathrm{e}^{-\mathrm{i}x} + \mathrm{e}^{-3\mathrm{i}x}$.`,
        String.raw`Regroupement : $(\mathrm{e}^{3\mathrm{i}x} + \mathrm{e}^{-3\mathrm{i}x}) + 3(\mathrm{e}^{\mathrm{i}x} + \mathrm{e}^{-\mathrm{i}x}) = 2\cos 3x + 6\cos x$.`,
        String.raw`Division par 8 : $\cos^3 x = \frac{1}{4}\cos 3x + \frac{3}{4}\cos x$, donc $a = \frac{1}{4}$ et $b = \frac{3}{4}$.`,
        String.raw`Vérification en $x = 0$ : $\frac{1}{4} + \frac{3}{4} = 1 = \cos^3 0$ ✔.`
      ],
      rule: String.raw`$\cos^3 x = \frac{\cos 3x + 3\cos x}{4}$.` },
    { id: 'm7-x-024', level: 3, topic: 'Linéarisation', sec: 'm7-s-euler', check: 'expr', vars: ['x'],
      prompt: String.raw`Linéarise $\sin^3 x$ (exprime-le à l'aide de $\sin x$ et $\sin 3x$).`,
      answer: '(3*sin(x)-sin(3*x))/4',
      mistakes: [
        { expr: '(sin(3*x)-3*sin(x))/4', msg: String.raw`Tu obtiens $-\sin^3 x$ : $(2\mathrm{i})^3 = 8\mathrm{i}^3 = -8\mathrm{i}$, n'oublie pas le signe moins.` },
        { expr: '(sin(3*x)+3*sin(x))/4', msg: String.raw`Ce n'est pas la même structure que $\cos^3 x$ : vérifie en $x = \frac{\pi}{2}$, on doit trouver $1$ (ici on trouve $\frac{1}{2}$).` },
        { expr: '(3*sin(x)-sin(3*x))/8', msg: String.raw`Il manque un facteur 2 : $\mathrm{e}^{\mathrm{i}kx} - \mathrm{e}^{-\mathrm{i}kx} = 2\mathrm{i}\sin kx$ (pas $\mathrm{i}\sin kx$).` }
      ],
      hint: String.raw`$\sin^3 x = \frac{(\mathrm{e}^{\mathrm{i}x} - \mathrm{e}^{-\mathrm{i}x})^3}{(2\mathrm{i})^3}$ et $(2\mathrm{i})^3 = -8\mathrm{i}$.`,
      explain: String.raw`Euler + binôme : le numérateur vaut $2\mathrm{i}\sin 3x - 6\mathrm{i}\sin x$ ; en divisant par $-8\mathrm{i}$ on obtient $\sin^3 x = \frac{3\sin x - \sin 3x}{4}$.`,
      steps: [
        String.raw`Rappel (linéarisation par Euler) : $\sin x = \frac{\mathrm{e}^{\mathrm{i}x} - \mathrm{e}^{-\mathrm{i}x}}{2\mathrm{i}}$, donc $\sin^3 x = \frac{(\mathrm{e}^{\mathrm{i}x} - \mathrm{e}^{-\mathrm{i}x})^3}{(2\mathrm{i})^3}$ avec $(2\mathrm{i})^3 = 8\mathrm{i}^3 = -8\mathrm{i}$.`,
        String.raw`Binôme $(A - B)^3 = A^3 - 3A^2B + 3AB^2 - B^3$ avec $AB = 1$ : numérateur $= \mathrm{e}^{3\mathrm{i}x} - 3\mathrm{e}^{\mathrm{i}x} + 3\mathrm{e}^{-\mathrm{i}x} - \mathrm{e}^{-3\mathrm{i}x}$.`,
        String.raw`Regroupement : $(\mathrm{e}^{3\mathrm{i}x} - \mathrm{e}^{-3\mathrm{i}x}) - 3(\mathrm{e}^{\mathrm{i}x} - \mathrm{e}^{-\mathrm{i}x}) = 2\mathrm{i}\sin 3x - 6\mathrm{i}\sin x$.`,
        String.raw`Division par $-8\mathrm{i}$ : $\sin^3 x = \frac{2\mathrm{i}\sin 3x - 6\mathrm{i}\sin x}{-8\mathrm{i}} = \frac{-\sin 3x + 3\sin x}{4} = \frac{3\sin x - \sin 3x}{4}$.`,
        String.raw`Vérification en $x = \frac{\pi}{2}$ : $\frac{3 \times 1 - \sin\frac{3\pi}{2}}{4} = \frac{3 + 1}{4} = 1 = \sin^3\frac{\pi}{2}$ ✔.`
      ],
      rule: String.raw`$\sin^3 x = \frac{3\sin x - \sin 3x}{4}$.` },
    { id: 'm7-x-025', level: 3, topic: 'Formule de Moivre', sec: 'm7-s-euler', check: 'expr', vars: ['x'],
      prompt: String.raw`À l'aide de la formule de Moivre, exprime $\sin 3x$ comme un polynôme en $\sin x$.`,
      answer: '3*sin(x)-4*sin(x)^3',
      mistakes: [
        { expr: '4*sin(x)^3-3*sin(x)', msg: String.raw`Signe inversé : tu obtiens $-\sin 3x$. Vérifie en $x = \frac{\pi}{2}$ : $\sin\frac{3\pi}{2} = -1$, et $3 - 4 = -1$.` },
        { expr: '3*sin(x)-sin(x)^3', msg: String.raw`Dans $3\cos^2 x\sin x$, remplace $\cos^2 x$ par $1 - \sin^2 x$ (et pas par 1).` },
        { expr: '3*sin(x)-2*sin(x)^3', msg: String.raw`$3(1 - s^2)s - s^3 = 3s - 3s^3 - s^3 = 3s - 4s^3$ : regroupe bien les deux termes en $s^3$.` }
      ],
      hint: String.raw`$\sin 3x = \operatorname{Im}\left((\cos x + \mathrm{i}\sin x)^3\right)$, puis $\cos^2 x = 1 - \sin^2 x$.`,
      explain: String.raw`$\sin 3x = \operatorname{Im}(\cos x + \mathrm{i}\sin x)^3 = 3\cos^2 x\sin x - \sin^3 x = 3\sin x - 4\sin^3 x$.`,
      steps: [
        String.raw`Rappel (Moivre) : $\cos 3x + \mathrm{i}\sin 3x = (\cos x + \mathrm{i}\sin x)^3$, donc $\sin 3x$ est la partie imaginaire de $(\cos x + \mathrm{i}\sin x)^3$. Notons $c = \cos x$, $s = \sin x$.`,
        String.raw`Binôme : $(c + \mathrm{i}s)^3 = c^3 + 3c^2(\mathrm{i}s) + 3c(\mathrm{i}s)^2 + (\mathrm{i}s)^3 = c^3 + 3\mathrm{i}c^2s - 3cs^2 - \mathrm{i}s^3$.`,
        String.raw`Partie imaginaire (coefficient de $\mathrm{i}$) : $\sin 3x = 3c^2s - s^3$.`,
        String.raw`On élimine le cosinus avec $c^2 = 1 - s^2$ : $3(1 - s^2)s - s^3 = 3s - 3s^3 - s^3 = 3s - 4s^3$.`,
        String.raw`Résultat : $\sin 3x = 3\sin x - 4\sin^3 x$. Vérification en $x = \frac{\pi}{2}$ : $3 - 4 = -1 = \sin\frac{3\pi}{2}$ ✔.`
      ],
      rule: String.raw`$\cos(nx) = \operatorname{Re}(\cos x + \mathrm{i}\sin x)^n$ et $\sin(nx) = \operatorname{Im}(\cos x + \mathrm{i}\sin x)^n$.` },
    { id: 'm7-x-026', level: 3, topic: 'Primitive par linéarisation', sec: 'm7-s-euler', check: 'antideriv', vars: ['x'],
      prompt: String.raw`En linéarisant d'abord, donne une primitive de $\cos^2 x$.`,
      answer: 'x/2+sin(2*x)/4',
      mistakes: [
        { expr: 'cos(x)^3/3', msg: String.raw`$\int u^2 \neq \frac{u^3}{3}$ quand $u = \cos x$ : il manquerait le facteur $u' = -\sin x$. Linéarise d'abord.` },
        { expr: 'x/2+sin(2*x)/2', msg: String.raw`Une primitive de $\cos 2x$ est $\frac{\sin 2x}{2}$, donc celle de $\frac{\cos 2x}{2}$ est $\frac{\sin 2x}{4}$.` },
        { expr: 'x/2-sin(2*x)/4', msg: String.raw`Tu as utilisé la linéarisation de $\sin^2 x$. Pour $\cos^2 x$, c'est $\frac{1 + \cos 2x}{2}$ (signe +).` }
      ],
      hint: String.raw`$\cos^2 x = \frac{1 + \cos 2x}{2}$.`,
      explain: String.raw`$\cos^2 x = \frac{1}{2} + \frac{\cos 2x}{2}$, donc une primitive est $\frac{x}{2} + \frac{\sin 2x}{4}$.`,
      steps: [
        String.raw`Rappel : on ne sait pas primitiver directement une puissance de cosinus ; on la **linéarise** d'abord : $\cos^2 x = \frac{1 + \cos 2x}{2} = \frac{1}{2} + \frac{1}{2}\cos 2x$.`,
        String.raw`Primitive de $\frac{1}{2}$ : $\frac{x}{2}$.`,
        String.raw`Primitive de $\cos(2x)$ : $\frac{\sin 2x}{2}$ (on divise par le coefficient 2 de $x$), donc celle de $\frac{1}{2}\cos 2x$ est $\frac{\sin 2x}{4}$.`,
        String.raw`Une primitive : $F(x) = \frac{x}{2} + \frac{\sin 2x}{4}$.`,
        String.raw`Vérification en dérivant : $F'(x) = \frac{1}{2} + \frac{2\cos 2x}{4} = \frac{1 + \cos 2x}{2} = \cos^2 x$ ✔.`
      ],
      rule: String.raw`$\cos^2 x = \frac{1 + \cos 2x}{2}$ ; une primitive de $\cos(ax)$ est $\frac{\sin(ax)}{a}$.` },
    { id: 'm7-x-027', level: 3, topic: 'Primitive par exponentielle complexe', sec: 'm7-s-euler', check: 'antideriv', vars: ['x'],
      prompt: String.raw`Donne une primitive de $\mathrm{e}^{x}\cos x$ en utilisant $\mathrm{e}^{x}\cos x = \operatorname{Re}\left(\mathrm{e}^{(1 + \mathrm{i})x}\right)$.`,
      answer: 'exp(x)*(cos(x)+sin(x))/2',
      mistakes: [
        { expr: 'exp(x)*sin(x)', msg: String.raw`On ne primitive pas facteur par facteur : primitive $\mathrm{e}^{(1 + \mathrm{i})x}$, puis prends la partie réelle.` },
        { expr: 'exp(x)*(cos(x)+sin(x))', msg: String.raw`Il manque le facteur $\frac{1}{2}$ : $\frac{1}{1 + \mathrm{i}} = \frac{1 - \mathrm{i}}{2}$.` },
        { expr: 'exp(x)*(cos(x)-sin(x))/2', msg: String.raw`Erreur de signe : $\frac{1}{1 + \mathrm{i}} = \frac{1 - \mathrm{i}}{2}$ (et non $\frac{1 + \mathrm{i}}{2}$). Dérive ta réponse : tu obtiens $-\mathrm{e}^{x}\sin x$.` }
      ],
      hint: String.raw`Une primitive de $\mathrm{e}^{(1 + \mathrm{i})x}$ est $\frac{\mathrm{e}^{(1 + \mathrm{i})x}}{1 + \mathrm{i}}$, et $\frac{1}{1 + \mathrm{i}} = \frac{1 - \mathrm{i}}{2}$.`,
      explain: String.raw`Une primitive de $\mathrm{e}^{(1+\mathrm{i})x}$ est $\frac{1 - \mathrm{i}}{2}\,\mathrm{e}^{x}(\cos x + \mathrm{i}\sin x)$, dont la partie réelle est $\frac{\mathrm{e}^{x}(\cos x + \sin x)}{2}$.`,
      steps: [
        String.raw`Rappel : $\mathrm{e}^{x}\cos x = \operatorname{Re}\left(\mathrm{e}^{x}\mathrm{e}^{\mathrm{i}x}\right) = \operatorname{Re}\left(\mathrm{e}^{(1 + \mathrm{i})x}\right)$, et la formule $\int \mathrm{e}^{ax}\,\mathrm{d}x = \frac{\mathrm{e}^{ax}}{a}$ reste vraie pour $a$ complexe non nul. On primitive l'exponentielle complexe puis on prend la partie réelle.`,
        String.raw`Une primitive de $\mathrm{e}^{(1 + \mathrm{i})x}$ est $\frac{\mathrm{e}^{(1 + \mathrm{i})x}}{1 + \mathrm{i}} = \frac{1 - \mathrm{i}}{2}\,\mathrm{e}^{x}(\cos x + \mathrm{i}\sin x)$, car $\frac{1}{1 + \mathrm{i}} = \frac{1 - \mathrm{i}}{2}$.`,
        String.raw`On développe $(1 - \mathrm{i})(\cos x + \mathrm{i}\sin x) = \cos x + \mathrm{i}\sin x - \mathrm{i}\cos x + \sin x$ : sa partie réelle est $\cos x + \sin x$.`,
        String.raw`D'où $F(x) = \frac{\mathrm{e}^{x}(\cos x + \sin x)}{2}$.`,
        String.raw`Vérification : $F'(x) = \frac{\mathrm{e}^{x}(\cos x + \sin x) + \mathrm{e}^{x}(-\sin x + \cos x)}{2} = \frac{2\mathrm{e}^{x}\cos x}{2} = \mathrm{e}^{x}\cos x$ ✔.`
      ],
      rule: String.raw`$\int \mathrm{e}^{ax}\,\mathrm{d}x = \frac{\mathrm{e}^{ax}}{a}$ pour $a \in \mathbb{C}^*$, et $\mathrm{e}^{x}\cos x = \operatorname{Re}\,\mathrm{e}^{(1 + \mathrm{i})x}$.` },
    { id: 'm7-x-028', level: 2, topic: 'Second degré, Δ < 0', sec: 'm7-s-equations', check: 'set', vars: [],
      prompt: String.raw`Résous dans $\mathbb{C}$ : $z^2 - 2z + 5 = 0$ (sépare les solutions par ;).`,
      answer: '1+2*i;1-2*i',
      mistakes: [
        { expr: '-1+2*i;-1-2*i', msg: String.raw`Erreur de signe : le numérateur commence par $-b = -(-2) = +2$. Vérifie avec la somme des racines, qui doit valoir $-\frac{b}{a} = 2$.` },
        { expr: '2+4*i;2-4*i', msg: String.raw`Tu as oublié de diviser par $2a = 2$ : $z = \frac{2 \pm 4\mathrm{i}}{2}$.` },
        { expr: '1+4*i;1-4*i', msg: String.raw`Tu n'as divisé que la partie réelle par 2 : $\frac{4\mathrm{i}}{2} = 2\mathrm{i}$.` }
      ],
      hint: String.raw`$\Delta = -16 = (4\mathrm{i})^2$.`,
      explain: String.raw`$\Delta = 4 - 20 = -16 \lt 0$ : $z = \frac{2 \pm 4\mathrm{i}}{2} = 1 \pm 2\mathrm{i}$ (racines conjuguées).`,
      steps: [
        String.raw`Rappel : pour $az^2 + bz + c = 0$ à coefficients **réels**, on calcule $\Delta = b^2 - 4ac$ ; si $\Delta \lt 0$, il y a deux racines complexes conjuguées $z = \frac{-b \pm \mathrm{i}\sqrt{-\Delta}}{2a}$.`,
        String.raw`Ici $a = 1$, $b = -2$, $c = 5$ : $\Delta = (-2)^2 - 4 \times 1 \times 5 = 4 - 20 = -16$, donc $\sqrt{-\Delta} = 4$.`,
        String.raw`$z = \frac{-(-2) \pm 4\mathrm{i}}{2 \times 1} = \frac{2 \pm 4\mathrm{i}}{2} = 1 \pm 2\mathrm{i}$.`,
        String.raw`Vérification : somme $= 2 = -\frac{b}{a}$ ✔ ; produit $= (1 + 2\mathrm{i})(1 - 2\mathrm{i}) = 1 + 4 = 5 = \frac{c}{a}$ ✔.`
      ],
      rule: String.raw`Si $\Delta \lt 0$ : $z_{1,2} = \frac{-b \pm \mathrm{i}\sqrt{-\Delta}}{2a}$.` },
    { id: 'm7-x-029', level: 2, topic: 'Racines cubiques de l\'unité', sec: 'm7-s-equations', check: 'set', vars: [],
      prompt: String.raw`Donne les trois racines cubiques de l'unité, solutions de $z^3 = 1$, sous forme algébrique (sépare-les par ;).`,
      answer: '1;-1/2+i*sqrt(3)/2;-1/2-i*sqrt(3)/2',
      mistakes: [
        { expr: '1;1/2+i*sqrt(3)/2;1/2-i*sqrt(3)/2', msg: String.raw`$\cos\frac{2\pi}{3} = -\frac{1}{2}$ (et non $+\frac{1}{2}$) : l'angle $\frac{2\pi}{3}$ est dans le 2e quadrant.` },
        { expr: '1;-sqrt(3)/2+i/2;-sqrt(3)/2-i/2', msg: String.raw`Tu as échangé cosinus et sinus : $\cos\frac{2\pi}{3} = -\frac{1}{2}$ et $\sin\frac{2\pi}{3} = \frac{\sqrt{3}}{2}$.` }
      ],
      hint: String.raw`$z_k = \mathrm{e}^{2\mathrm{i}k\pi/3}$ pour $k = 0, 1, 2$.`,
      explain: String.raw`Les solutions sont $\mathrm{e}^{2\mathrm{i}k\pi/3}$, $k = 0, 1, 2$ : $1$, $-\frac{1}{2} + \mathrm{i}\frac{\sqrt{3}}{2}$ et $-\frac{1}{2} - \mathrm{i}\frac{\sqrt{3}}{2}$ (triangle équilatéral).`,
      steps: [
        String.raw`Rappel : les racines $n$-ièmes de l'unité sont les solutions de $z^n = 1$ ; il y en a $n$, ce sont les $\mathrm{e}^{2\mathrm{i}k\pi/n}$ pour $k = 0, \ldots, n - 1$.`,
        String.raw`On pose $z = r\,\mathrm{e}^{\mathrm{i}\theta}$ : $r^3\,\mathrm{e}^{3\mathrm{i}\theta} = 1$ donne $r^3 = 1$ (donc $r = 1$) et $3\theta = 2k\pi$, soit $\theta = \frac{2k\pi}{3}$, $k = 0, 1, 2$.`,
        String.raw`$k = 0$ : $1$. $k = 1$ : $\mathrm{e}^{2\mathrm{i}\pi/3} = \cos\frac{2\pi}{3} + \mathrm{i}\sin\frac{2\pi}{3} = -\frac{1}{2} + \mathrm{i}\frac{\sqrt{3}}{2}$.`,
        String.raw`$k = 2$ : $\mathrm{e}^{4\mathrm{i}\pi/3}$, le conjugué du précédent : $-\frac{1}{2} - \mathrm{i}\frac{\sqrt{3}}{2}$.`,
        String.raw`Vérification : la somme vaut $1 - \frac{1}{2} - \frac{1}{2} = 0$ ✔ (les trois points forment un triangle équilatéral centré en $O$).`
      ],
      rule: String.raw`$z^n = 1 \iff z = \mathrm{e}^{2\mathrm{i}k\pi/n}$, $k \in \{0, \ldots, n - 1\}$.` },
    { id: 'm7-x-030', level: 3, topic: 'Racine carrée d\'un complexe', sec: 'm7-s-equations', check: 'set', vars: [],
      prompt: String.raw`Trouve les deux racines carrées de $3 + 4\mathrm{i}$ sous forme algébrique (sépare-les par ;).`,
      answer: '2+i;-2-i',
      mistakes: [
        { expr: '2-i;-2+i', msg: String.raw`$(2 - \mathrm{i})^2 = 3 - 4\mathrm{i}$ : le produit $xy$ doit avoir le signe de la partie imaginaire $4 \gt 0$, donc $x$ et $y$ de même signe.` },
        { expr: '1+2*i;-1-2*i', msg: String.raw`$(1 + 2\mathrm{i})^2 = -3 + 4\mathrm{i}$ : tu as échangé $x^2$ et $y^2$ ; $x^2 - y^2 = +3$ impose $x^2 = 4$, $y^2 = 1$.` }
      ],
      hint: String.raw`Pose $(x + \mathrm{i}y)^2 = 3 + 4\mathrm{i}$ : $x^2 - y^2 = 3$, $x^2 + y^2 = 5$, $2xy = 4$.`,
      explain: String.raw`$x^2 - y^2 = 3$ et $x^2 + y^2 = 5$ donnent $x^2 = 4$, $y^2 = 1$ ; $xy = 2 \gt 0$, donc les racines sont $\pm(2 + \mathrm{i})$.`,
      steps: [
        String.raw`Rappel : une racine carrée de $w$ est un complexe $\delta$ tel que $\delta^2 = w$. On pose $\delta = x + \mathrm{i}y$ ($x, y$ réels) : $\delta^2 = x^2 - y^2 + 2xy\,\mathrm{i}$, et on identifie avec $3 + 4\mathrm{i}$.`,
        String.raw`Identification : $x^2 - y^2 = 3$ (parties réelles) et $2xy = 4$, soit $xy = 2$ (parties imaginaires). Égalité des modules : $x^2 + y^2 = |3 + 4\mathrm{i}| = \sqrt{9 + 16} = 5$.`,
        String.raw`En additionnant : $2x^2 = 8$, $x^2 = 4$ ; en soustrayant : $2y^2 = 2$, $y^2 = 1$. Comme $xy = 2 \gt 0$, $x$ et $y$ ont le même signe : $(x, y) = (2, 1)$ ou $(-2, -1)$.`,
        String.raw`Racines : $2 + \mathrm{i}$ et $-2 - \mathrm{i}$. Vérification : $(2 + \mathrm{i})^2 = 4 + 4\mathrm{i} + \mathrm{i}^2 = 3 + 4\mathrm{i}$ ✔.`
      ],
      rule: String.raw`$\delta^2 = a + \mathrm{i}b$ : $x^2 - y^2 = a$, $x^2 + y^2 = \sqrt{a^2 + b^2}$, $2xy = b$.` },
    { id: 'm7-x-031', level: 3, topic: 'Racines n-ièmes', sec: 'm7-s-equations', check: 'set', vars: [],
      prompt: String.raw`Résous dans $\mathbb{C}$ : $z^3 = 8\mathrm{i}$ (solutions sous forme algébrique, séparées par ;).`,
      answer: 'sqrt(3)+i;-sqrt(3)+i;-2*i',
      mistakes: [
        { expr: '2*i;-sqrt(3)-i;sqrt(3)-i', msg: String.raw`Tu n'as pas divisé l'argument par 3 : $3\theta = \frac{\pi}{2}$ donne $\theta = \frac{\pi}{6}$, pas $\frac{\pi}{2}$. D'ailleurs $(2\mathrm{i})^3 = -8\mathrm{i}$.` },
        { expr: '4*sqrt(3)+4*i;-4*sqrt(3)+4*i;-8*i', msg: String.raw`Le module doit vérifier $r^3 = 8$, donc $r = 2$ (et non 8).` }
      ],
      hint: String.raw`$8\mathrm{i} = 8\,\mathrm{e}^{\mathrm{i}\pi/2}$ : $z = 2\,\mathrm{e}^{\mathrm{i}(\pi/6 + 2k\pi/3)}$.`,
      explain: String.raw`$r^3 = 8$ donc $r = 2$ ; $3\theta \equiv \frac{\pi}{2}\ [2\pi]$ donc $\theta = \frac{\pi}{6}, \frac{5\pi}{6}, \frac{3\pi}{2}$. Solutions : $\sqrt{3} + \mathrm{i}$, $-\sqrt{3} + \mathrm{i}$, $-2\mathrm{i}$.`,
      steps: [
        String.raw`Rappel : pour résoudre $z^n = w$, on écrit $w$ et $z = r\,\mathrm{e}^{\mathrm{i}\theta}$ en forme exponentielle, puis on identifie modules ($r^n = |w|$) et arguments ($n\theta = \arg w + 2k\pi$). Ici $8\mathrm{i} = 8\,\mathrm{e}^{\mathrm{i}\pi/2}$.`,
        String.raw`Modules : $r^3 = 8$, donc $r = 2$. Arguments : $3\theta = \frac{\pi}{2} + 2k\pi$, donc $\theta = \frac{\pi}{6} + \frac{2k\pi}{3}$.`,
        String.raw`$k = 0, 1, 2$ donnent $\theta = \frac{\pi}{6}$, $\frac{\pi}{6} + \frac{4\pi}{6} = \frac{5\pi}{6}$ et $\frac{\pi}{6} + \frac{8\pi}{6} = \frac{3\pi}{2}$.`,
        String.raw`Forme algébrique : $2\,\mathrm{e}^{\mathrm{i}\pi/6} = 2\left(\frac{\sqrt{3}}{2} + \frac{\mathrm{i}}{2}\right) = \sqrt{3} + \mathrm{i}$ ; $2\,\mathrm{e}^{5\mathrm{i}\pi/6} = -\sqrt{3} + \mathrm{i}$ ; $2\,\mathrm{e}^{3\mathrm{i}\pi/2} = -2\mathrm{i}$.`,
        String.raw`Vérification sur la plus simple : $(-2\mathrm{i})^3 = -8\mathrm{i}^3 = -8 \times (-\mathrm{i}) = 8\mathrm{i}$ ✔.`
      ],
      rule: String.raw`$z^n = R\,\mathrm{e}^{\mathrm{i}\alpha} \iff z = R^{1/n}\,\mathrm{e}^{\mathrm{i}\frac{\alpha + 2k\pi}{n}}$, $k = 0, \ldots, n - 1$.` },
    { id: 'm7-x-032', level: 3, topic: 'Second degré à coefficients complexes', sec: 'm7-s-equations', check: 'set', vars: [],
      prompt: String.raw`Résous dans $\mathbb{C}$ : $z^2 - 3z + 3 + \mathrm{i} = 0$ (sépare les solutions par ;).`,
      answer: '1+i;2-i',
      mistakes: [
        { expr: '1-i;2+i', msg: String.raw`Les coefficients ne sont pas tous réels : les racines ne sont pas conjuguées. Ici le signe de $xy$ dans $\delta$ est faux ; vérifie : $(1 - \mathrm{i})(2 + \mathrm{i}) = 3 - \mathrm{i} \neq 3 + \mathrm{i}$.` },
        { expr: '2+2*i;4-2*i', msg: String.raw`Tu as oublié de diviser par $2a = 2$ : $z = \frac{3 \pm (1 - 2\mathrm{i})}{2}$.` }
      ],
      hint: String.raw`$\Delta = -3 - 4\mathrm{i}$ ; cherche $\delta = x + \mathrm{i}y$ avec $\delta^2 = \Delta$.`,
      explain: String.raw`$\Delta = -3 - 4\mathrm{i} = (1 - 2\mathrm{i})^2$, donc $z = \frac{3 \pm (1 - 2\mathrm{i})}{2}$ : $2 - \mathrm{i}$ et $1 + \mathrm{i}$.`,
      steps: [
        String.raw`Rappel : la formule $z = \frac{-b \pm \delta}{2a}$ reste valable dans $\mathbb{C}$ même si $\Delta$ n'est pas réel, à condition de trouver un $\delta$ tel que $\delta^2 = \Delta$ (méthode algébrique). Ici $a = 1$, $b = -3$, $c = 3 + \mathrm{i}$.`,
        String.raw`Discriminant : $\Delta = 9 - 4(3 + \mathrm{i}) = 9 - 12 - 4\mathrm{i} = -3 - 4\mathrm{i}$.`,
        String.raw`$\delta = x + \mathrm{i}y$ : $x^2 - y^2 = -3$, $x^2 + y^2 = |\Delta| = 5$, $2xy = -4$. D'où $x^2 = 1$, $y^2 = 4$ et $xy \lt 0$ : $\delta = 1 - 2\mathrm{i}$ (contrôle : $(1 - 2\mathrm{i})^2 = 1 - 4\mathrm{i} - 4 = -3 - 4\mathrm{i}$ ✔).`,
        String.raw`Racines : $z = \frac{3 \pm (1 - 2\mathrm{i})}{2}$, soit $\frac{4 - 2\mathrm{i}}{2} = 2 - \mathrm{i}$ et $\frac{2 + 2\mathrm{i}}{2} = 1 + \mathrm{i}$.`,
        String.raw`Vérification : somme $3 = -\frac{b}{a}$ ✔ ; produit $(2 - \mathrm{i})(1 + \mathrm{i}) = 2 + 2\mathrm{i} - \mathrm{i} - \mathrm{i}^2 = 3 + \mathrm{i} = \frac{c}{a}$ ✔.`
      ],
      rule: String.raw`Dans $\mathbb{C}$ : $z = \frac{-b \pm \delta}{2a}$ où $\delta^2 = \Delta$.`,
      pitfall: String.raw`Avec des coefficients complexes, les racines ne sont **pas** conjuguées, et on n'écrit jamais $\sqrt{\Delta}$ pour un $\Delta$ non réel.` },
    { id: 'm7-x-033', level: 3, topic: 'Second degré à coefficients complexes', sec: 'm7-s-equations', check: 'set', vars: [],
      prompt: String.raw`Résous dans $\mathbb{C}$ : $z^2 - (1 + \mathrm{i})z + \mathrm{i} = 0$ (sépare les solutions par ;).`,
      answer: '1;i',
      mistakes: [
        { expr: '-1;-i', msg: String.raw`Erreur de signe : $z = \frac{-b \pm \delta}{2a}$ avec $-b = +(1 + \mathrm{i})$. La somme des racines doit valoir $1 + \mathrm{i}$.` },
        { expr: '2;2*i', msg: String.raw`Tu as oublié de diviser par $2a = 2$. Vérifie : le produit $2 \times 2\mathrm{i} = 4\mathrm{i} \neq \mathrm{i}$.` }
      ],
      hint: String.raw`$\Delta = (1 + \mathrm{i})^2 - 4\mathrm{i} = -2\mathrm{i} = (1 - \mathrm{i})^2$. (Ou : cherche deux nombres de somme $1 + \mathrm{i}$ et de produit $\mathrm{i}$.)`,
      explain: String.raw`$\Delta = -2\mathrm{i} = (1 - \mathrm{i})^2$, donc $z = \frac{(1 + \mathrm{i}) \pm (1 - \mathrm{i})}{2}$ : les solutions sont $1$ et $\mathrm{i}$.`,
      steps: [
        String.raw`Rappel : pour $az^2 + bz + c = 0$ dans $\mathbb{C}$, on calcule $\Delta = b^2 - 4ac$, on cherche $\delta$ avec $\delta^2 = \Delta$, puis $z = \frac{-b \pm \delta}{2a}$. Ici $a = 1$, $b = -(1 + \mathrm{i})$, $c = \mathrm{i}$.`,
        String.raw`$\Delta = (1 + \mathrm{i})^2 - 4\mathrm{i} = 2\mathrm{i} - 4\mathrm{i} = -2\mathrm{i}$.`,
        String.raw`On remarque $(1 - \mathrm{i})^2 = 1 - 2\mathrm{i} + \mathrm{i}^2 = -2\mathrm{i}$, donc $\delta = 1 - \mathrm{i}$.`,
        String.raw`$z = \frac{(1 + \mathrm{i}) \pm (1 - \mathrm{i})}{2}$ : $z_1 = \frac{2}{2} = 1$ et $z_2 = \frac{2\mathrm{i}}{2} = \mathrm{i}$.`,
        String.raw`Vérification : somme $1 + \mathrm{i} = -\frac{b}{a}$ ✔ et produit $1 \times \mathrm{i} = \mathrm{i} = \frac{c}{a}$ ✔.`
      ],
      rule: String.raw`$z_1 + z_2 = -\frac{b}{a}$ et $z_1 z_2 = \frac{c}{a}$, valables aussi dans $\mathbb{C}$.` },
    { id: 'm7-x-034', level: 2, topic: 'Rotations dans le plan', sec: 'm7-s-transfo', check: 'value', vars: [],
      prompt: String.raw`Donne l'affixe de l'image de $A(2 + \mathrm{i})$ par la rotation de centre $\Omega(1)$ et d'angle $\frac{\pi}{2}$.`,
      answer: 'i',
      mistakes: [
        { expr: '-1+2*i', msg: String.raw`Tu as tourné autour de $O$ ($\mathrm{i}z_A$) : il faut centrer en $\Omega$, $z' = \omega + \mathrm{i}(z - \omega)$.` },
        { expr: '-1+i', msg: String.raw`Tu as calculé $\mathrm{i}(z - \omega)$ sans rajouter $\omega$ à la fin : $z' = \omega + \mathrm{i}(z - \omega) = 1 + (-1 + \mathrm{i})$.` },
        { expr: '2-i', msg: String.raw`Tu as tourné de $-\frac{\pi}{2}$ (multiplication par $-\mathrm{i}$) ; l'angle $+\frac{\pi}{2}$ correspond à $\mathrm{e}^{\mathrm{i}\pi/2} = \mathrm{i}$.` }
      ],
      hint: String.raw`$z' - \omega = \mathrm{e}^{\mathrm{i}\pi/2}(z - \omega)$ avec $\omega = 1$.`,
      explain: String.raw`$z' = 1 + \mathrm{i}(2 + \mathrm{i} - 1) = 1 + \mathrm{i}(1 + \mathrm{i}) = 1 + \mathrm{i} - 1 = \mathrm{i}$.`,
      steps: [
        String.raw`Rappel : la rotation de centre $\Omega(\omega)$ et d'angle $\theta$ s'écrit $z' - \omega = \mathrm{e}^{\mathrm{i}\theta}(z - \omega)$ : on se ramène au centre, on tourne, puis on revient. Ici $\omega = 1$ et $\mathrm{e}^{\mathrm{i}\pi/2} = \mathrm{i}$.`,
        String.raw`On ramène le centre à l'origine : $z_A - \omega = (2 + \mathrm{i}) - 1 = 1 + \mathrm{i}$.`,
        String.raw`On tourne d'un quart de tour : $\mathrm{i}(1 + \mathrm{i}) = \mathrm{i} + \mathrm{i}^2 = -1 + \mathrm{i}$.`,
        String.raw`On revient au centre : $z' = 1 + (-1 + \mathrm{i}) = \mathrm{i}$.`,
        String.raw`Vérification : $\Omega A = |1 + \mathrm{i}| = \sqrt{2}$ et $\Omega A' = |\mathrm{i} - 1| = \sqrt{2}$ ✔ (la rotation conserve les distances au centre).`
      ],
      rule: String.raw`Rotation de centre $\omega$, d'angle $\theta$ : $z' = \omega + \mathrm{e}^{\mathrm{i}\theta}(z - \omega)$.` },
    { id: 'm7-x-035', level: 2, topic: 'Homothéties', sec: 'm7-s-transfo', check: 'value', vars: [],
      prompt: String.raw`Donne l'affixe de l'image de l'origine $O$ par l'homothétie de centre $\Omega(1 + \mathrm{i})$ et de rapport $-2$.`,
      answer: '3+3*i',
      mistakes: [
        { expr: '2+2*i', msg: String.raw`Tu as calculé $k(z - \omega)$ sans rajouter $\omega$ : $z' = \omega + k(z - \omega)$.` },
        { expr: '0', msg: String.raw`$O$ n'est pas le centre de l'homothétie : seul le centre est fixe.` },
        { expr: '-1-i', msg: String.raw`Tu as écrit $k(\omega - z)$ au lieu de $k(z - \omega)$ : l'ordre de la soustraction compte.` }
      ],
      hint: String.raw`$z' = \omega + k(z - \omega)$ avec $z = 0$.`,
      explain: String.raw`$z' = (1 + \mathrm{i}) - 2\left(0 - (1 + \mathrm{i})\right) = (1 + \mathrm{i}) + 2(1 + \mathrm{i}) = 3 + 3\mathrm{i}$.`,
      steps: [
        String.raw`Rappel : l'homothétie de centre $\Omega(\omega)$ et de rapport $k$ (réel) s'écrit $z' - \omega = k(z - \omega)$, c'est-à-dire $\overrightarrow{\Omega M'} = k\,\overrightarrow{\Omega M}$.`,
        String.raw`Ici $\omega = 1 + \mathrm{i}$, $k = -2$ et $z = 0$ : $z - \omega = -(1 + \mathrm{i}) = -1 - \mathrm{i}$.`,
        String.raw`$k(z - \omega) = -2(-1 - \mathrm{i}) = 2 + 2\mathrm{i}$.`,
        String.raw`$z' = \omega + (2 + 2\mathrm{i}) = (1 + \mathrm{i}) + (2 + 2\mathrm{i}) = 3 + 3\mathrm{i}$.`,
        String.raw`Contrôle géométrique : $O$, $\Omega$ et $O'$ sont alignés sur la droite $y = x$, et $O'$ est de l'autre côté de $\Omega$, deux fois plus loin : $\Omega O' = |2 + 2\mathrm{i}| = 2\sqrt{2} = 2\,\Omega O$ ✔.`
      ],
      rule: String.raw`Homothétie de centre $\omega$, de rapport $k$ : $z' = \omega + k(z - \omega)$.` },
    { id: 'm7-x-036', level: 2, topic: 'Impédance d\'un condensateur', sec: 'm7-s-electro', check: 'value', vars: [],
      prompt: String.raw`Un condensateur de capacité $C = 10\ \mu\mathrm{F}$ est alimenté à la pulsation $\omega = 1000\ \mathrm{rad/s}$. Donne son impédance complexe $Z_C$ en ohms (tape i ou j pour l'unité imaginaire).`,
      answer: '-100*i',
      mistakes: [
        { expr: '100*i', msg: String.raw`$\frac{1}{j} = -j$, pas $+j$ : l'impédance d'un condensateur a un argument $-\frac{\pi}{2}$.` },
        { expr: '0.01*i', msg: String.raw`Ça, c'est $jC\omega$ (l'admittance) : l'impédance est son inverse.` },
        { expr: '-1000*i', msg: String.raw`Erreur de conversion : $10\ \mu\mathrm{F} = 10 \times 10^{-6} = 10^{-5}$ F, donc $C\omega = 10^{-2}$ et $\frac{1}{C\omega} = 100$.` }
      ],
      hint: String.raw`$Z_C = \frac{1}{jC\omega}$ avec $C\omega = 10^{-5} \times 10^3 = 10^{-2}$.`,
      explain: String.raw`$C\omega = 10^{-2}$, donc $Z_C = \frac{1}{j \times 10^{-2}} = \frac{100}{j} = -100j\ \Omega$.`,
      steps: [
        String.raw`Rappel : l'impédance complexe d'un condensateur est $Z_C = \frac{1}{jC\omega}$ (on note $j$ l'unité imaginaire en électronique), et $\frac{1}{j} = -j$.`,
        String.raw`Conversion : $C = 10\ \mu\mathrm{F} = 10 \times 10^{-6}\ \mathrm{F} = 10^{-5}\ \mathrm{F}$, donc $C\omega = 10^{-5} \times 10^{3} = 10^{-2}$.`,
        String.raw`$Z_C = \frac{1}{j \times 10^{-2}} = \frac{100}{j}$.`,
        String.raw`Avec $\frac{1}{j} = \frac{j}{j^2} = -j$ : $Z_C = -100j\ \Omega$. Contrôle : module $\frac{1}{C\omega} = 100\ \Omega$, argument $-\frac{\pi}{2}$ ✔.`
      ],
      rule: String.raw`$Z_C = \frac{1}{jC\omega} = -\frac{j}{C\omega}$.` },
    { id: 'm7-x-037', level: 2, topic: 'Association d\'impédances', sec: 'm7-s-electro', check: 'value', vars: [],
      prompt: String.raw`Une résistance $R = 2\ \Omega$ est montée **en parallèle** avec une bobine telle que $L\omega = 2\ \Omega$. Donne l'impédance complexe équivalente (forme algébrique).`,
      answer: '1+i',
      mistakes: [
        { expr: '2+2*i', msg: String.raw`$R + jL\omega$ est l'association **série** ; en parallèle, $Z = \frac{Z_1Z_2}{Z_1 + Z_2}$.` },
        { expr: '1/2-i/2', msg: String.raw`Tu as calculé l'admittance $Y = \frac{1}{R} + \frac{1}{jL\omega}$ sans l'inverser à la fin : $Z = \frac{1}{Y}$.` },
        { expr: '-1+i', msg: String.raw`Erreur sur $j^2$ : $j(1 - j) = j - j^2 = j + 1$ (car $j^2 = -1$).` }
      ],
      hint: String.raw`$Z = \frac{R \cdot jL\omega}{R + jL\omega}$.`,
      explain: String.raw`$Z = \frac{2 \times 2j}{2 + 2j} = \frac{2j}{1 + j} = \frac{2j(1 - j)}{2} = j(1 - j) = 1 + j$.`,
      steps: [
        String.raw`Rappel : en parallèle, les **admittances** ($\frac{1}{Z}$) s'ajoutent : $\frac{1}{Z} = \frac{1}{Z_1} + \frac{1}{Z_2}$, soit $Z = \frac{Z_1Z_2}{Z_1 + Z_2}$. Ici $Z_R = 2$ et $Z_L = jL\omega = 2j$.`,
        String.raw`$Z = \frac{2 \times 2j}{2 + 2j} = \frac{4j}{2(1 + j)} = \frac{2j}{1 + j}$.`,
        String.raw`On multiplie haut et bas par le conjugué $1 - j$ : $\frac{2j(1 - j)}{(1 + j)(1 - j)} = \frac{2j - 2j^2}{2} = \frac{2j + 2}{2} = 1 + j$.`,
        String.raw`Vérification par les admittances : $\frac{1}{2} + \frac{1}{2j} = \frac{1}{2} - \frac{j}{2} = \frac{1 - j}{2}$, et $\frac{1}{1 + j} = \frac{1 - j}{2}$ ✔.`
      ],
      rule: String.raw`Série : $Z = Z_1 + Z_2$ ; parallèle : $Z = \frac{Z_1Z_2}{Z_1 + Z_2}$.` },
    { id: 'm7-x-038', level: 2, topic: 'Gain d\'un filtre', sec: 'm7-s-electro', check: 'expr', vars: ['x'], domain: [0, 4],
      prompt: String.raw`Filtre de fonction de transfert $H = \dfrac{1}{1 + jx}$ avec $x = RC\omega \geq 0$. Exprime le gain $|H|$ en fonction de $x$.`,
      answer: '1/sqrt(1+x^2)',
      mistakes: [
        { expr: '1/(1+x)', msg: String.raw`$|1 + jx| = \sqrt{1 + x^2}$, pas $1 + x$ : le module n'est pas la somme des parties.` },
        { expr: '1/(1+x^2)', msg: String.raw`N'oublie pas la racine : $|a + jb| = \sqrt{a^2 + b^2}$.` },
        { expr: 'sqrt(1+x^2)', msg: String.raw`Tu as donné $|1 + jx|$ ; le gain est son inverse, $|H| = \frac{1}{|1 + jx|}$.` }
      ],
      hint: String.raw`$\left|\frac{1}{D}\right| = \frac{1}{|D|}$.`,
      explain: String.raw`Le module d'un quotient est le quotient des modules : $|H| = \frac{1}{|1 + jx|} = \frac{1}{\sqrt{1 + x^2}}$.`,
      steps: [
        String.raw`Rappel : le **gain** d'un filtre est le module de sa fonction de transfert, $|H|$ ; pour un quotient, $\left|\frac{N}{D}\right| = \frac{|N|}{|D|}$.`,
        String.raw`$|1| = 1$ et $|1 + jx| = \sqrt{1^2 + x^2} = \sqrt{1 + x^2}$ (partie réelle 1, partie imaginaire $x$).`,
        String.raw`$|H| = \frac{1}{\sqrt{1 + x^2}}$.`,
        String.raw`Vérifications : $x = 0$ donne $|H| = 1$ ; $x = 1$ donne $\frac{1}{\sqrt{2}}$ (coupure) ; $x \to +\infty$ donne $|H| \to 0$ : c'est bien un passe-bas ✔.`
      ],
      rule: String.raw`$|a + jb| = \sqrt{a^2 + b^2}$ et $\left|\frac{N}{D}\right| = \frac{|N|}{|D|}$.` },
    { id: 'm7-x-039', level: 2, topic: 'Phase d\'un filtre', sec: 'm7-s-electro', check: 'expr', vars: ['x'], domain: [0.1, 4],
      prompt: String.raw`Même filtre $H = \dfrac{1}{1 + jx}$ avec $x \gt 0$ : exprime la phase $\varphi = \arg H$ (en radians) en fonction de $x$.`,
      answer: '-arctan(x)',
      mistakes: [
        { expr: 'arctan(x)', msg: String.raw`$\arg\frac{1}{D} = -\arg D$ : la phase d'un passe-bas est négative.` },
        { expr: '-arctan(1/x)', msg: String.raw`$\arg(1 + jx) = \arctan\frac{\operatorname{Im}}{\operatorname{Re}} = \arctan\frac{x}{1}$, et non $\arctan\frac{1}{x}$.` }
      ],
      hint: String.raw`$\arg H = \arg 1 - \arg(1 + jx)$ ; la partie réelle de $1 + jx$ est positive.`,
      explain: String.raw`$\arg(1 + jx) = \arctan x$ (partie réelle $1 \gt 0$, pas de correction), donc $\varphi = 0 - \arctan x = -\arctan x$.`,
      steps: [
        String.raw`Rappel : la **phase** d'un filtre est l'argument de $H$ ; pour un quotient, $\arg\frac{N}{D} = \arg N - \arg D$.`,
        String.raw`$\arg 1 = 0$ (réel positif).`,
        String.raw`$1 + jx$ a une partie réelle $1 \gt 0$ : pas de correction de quadrant, $\arg(1 + jx) = \arctan\frac{x}{1} = \arctan x$.`,
        String.raw`$\varphi = 0 - \arctan x = -\arctan x$.`,
        String.raw`Vérifications : $x \to 0$ donne $\varphi \to 0$ ; $x = 1$ donne $-\frac{\pi}{4}$ ; $x \to +\infty$ donne $\varphi \to -\frac{\pi}{2}$ ✔.`
      ],
      rule: String.raw`$\arg\frac{N}{D} = \arg N - \arg D$ ; si $\operatorname{Re} D \gt 0$, $\arg D = \arctan\frac{\operatorname{Im} D}{\operatorname{Re} D}$.` },
    { id: 'm7-x-040', level: 3, topic: 'Gain en décibels', sec: 'm7-s-electro', check: 'value', vars: [],
      prompt: String.raw`À la pulsation de coupure, $|H| = \frac{1}{\sqrt{2}}$. Donne la valeur exacte du gain en décibels $G = 20\log_{10}|H|$ (log désigne le logarithme décimal).`,
      answer: '-10*log(2)',
      mistakes: [
        { expr: '-20*log(2)', msg: String.raw`$\log\frac{1}{\sqrt{2}} = -\frac{1}{2}\log 2$ (racine = puissance $\frac{1}{2}$), donc $G = -10\log 2$ (environ $-3$ dB, pas $-6$ dB).` },
        { expr: '-3', msg: String.raw`C'est la valeur approchée ; donne la valeur exacte avec log.` },
        { expr: '10*log(2)', msg: String.raw`Erreur de signe : $|H| \lt 1$ donne un logarithme négatif, donc un gain négatif.` }
      ],
      hint: String.raw`$\log\frac{1}{\sqrt{2}} = -\frac{1}{2}\log 2$.`,
      explain: String.raw`$G = 20\log\left(2^{-1/2}\right) = -10\log 2 \approx -3{,}01\ \mathrm{dB}$ : c'est la « coupure à $-3$ dB ».`,
      steps: [
        String.raw`Rappel : le gain en décibels est $G = 20\log_{10}|H|$ ; le logarithme transforme puissances en produits : $\log(a^n) = n\log a$.`,
        String.raw`On écrit $\frac{1}{\sqrt{2}} = 2^{-1/2}$, donc $\log\frac{1}{\sqrt{2}} = -\frac{1}{2}\log 2$.`,
        String.raw`$G = 20 \times \left(-\frac{1}{2}\log 2\right) = -10\log 2$.`,
        String.raw`Ordre de grandeur : $\log 2 \approx 0{,}301$, donc $G \approx -3{,}01$ dB : c'est la fameuse « coupure à $-3$ dB » ✔.`
      ],
      rule: String.raw`$G_{\mathrm{dB}} = 20\log_{10}|H|$ et $\log(a^n) = n\log a$.` }
  ]
});
