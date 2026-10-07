/* Maths — Chapitre 2 : Trigonométrie */
APP.registerChapter({
  subject: 'maths',
  id: 'm2', num: 2,
  title: 'Trigonométrie',
  subtitle: 'Cercle trigonométrique, formules, équations',

  /* ============================== FICHES DE COURS ============================== */
  sections: [
    {
      id: 'm2-s-cercle',
      title: 'Radians et cercle trigonométrique',
      html: String.raw`
<h3>Le radian</h3>
<p>Sur un cercle de rayon $R$, un angle au centre de $\theta$ <b>radians</b> intercepte un arc de longueur $\ell=R\theta$. Sur le cercle de rayon 1, la mesure en radians <b>est</b> la longueur de l'arc. Un tour complet mesure $2\pi$ rad, soit $360^\circ$ :</p>
<p>$$\theta_{\text{rad}}=\theta_{\text{deg}}\times\frac{\pi}{180} \qquad\qquad \theta_{\text{deg}}=\theta_{\text{rad}}\times\frac{180}{\pi}$$</p>
<table class="tbl">
<tr><th>degrés</th><th>radians</th><th>degrés</th><th>radians</th></tr>
<tr><td>$0^\circ$</td><td>$0$</td><td>$120^\circ$</td><td>$\frac{2\pi}{3}$</td></tr>
<tr><td>$30^\circ$</td><td>$\frac{\pi}{6}$</td><td>$135^\circ$</td><td>$\frac{3\pi}{4}$</td></tr>
<tr><td>$45^\circ$</td><td>$\frac{\pi}{4}$</td><td>$150^\circ$</td><td>$\frac{5\pi}{6}$</td></tr>
<tr><td>$60^\circ$</td><td>$\frac{\pi}{3}$</td><td>$180^\circ$</td><td>$\pi$</td></tr>
<tr><td>$90^\circ$</td><td>$\frac{\pi}{2}$</td><td>$270^\circ$</td><td>$\frac{3\pi}{2}$</td></tr>
</table>
<h3>Le cercle trigonométrique</h3>
<p>C'est le cercle de centre $O$ et de rayon 1, orienté dans le sens <b>direct</b> (inverse des aiguilles d'une montre). À tout réel $x$ on associe le point $M(x)$ obtenu en parcourant depuis $I(1,0)$ un arc de longueur $|x|$, dans le sens direct si $x\gt 0$, indirect si $x\lt 0$. Par définition : $$M(x)=(\cos x,\ \sin x)$$ $\cos x$ est l'<b>abscisse</b> de $M(x)$ (axe horizontal), $\sin x$ son <b>ordonnée</b> (axe vertical).</p>
<div class="widget" data-w="cercle"></div>
<h3>Propriétés immédiates</h3>
<ul>
<li>$-1\leq\cos x\leq 1$ et $-1\leq\sin x\leq 1$.</li>
<li>$\cos^2x+\sin^2x=1$ (Pythagore dans le triangle rectangle formé par $O$, $M$ et sa projection).</li>
<li>$x$ et $x+2k\pi$ ($k\in\mathbb{Z}$) donnent le même point : $\cos(x+2k\pi)=\cos x$ et $\sin(x+2k\pi)=\sin x$.</li>
<li>$\tan x=\frac{\sin x}{\cos x}$ pour $x\neq\frac{\pi}{2}+k\pi$ ; c'est l'ordonnée du point où la droite $(OM)$ coupe la tangente au cercle en $I$. On a $1+\tan^2x=\frac{1}{\cos^2x}$.</li>
<li>Signes : $\cos x\gt 0$ à droite (quadrants I et IV), $\sin x\gt 0$ en haut (quadrants I et II), $\tan x \gt 0$ dans les quadrants I et III.</li>
</ul>
<p><b>Méthode : mesure principale.</b> La mesure principale d'un angle $x$ est l'unique mesure dans $]-\pi,\pi]$ : on retire (ou ajoute) le bon multiple de $2\pi$. Pour $\frac{p\pi}{q}$, on écrit $p$ comme un multiple de $2q$ plus un reste.</p>
<div class="callout info"><b>Exemple corrigé</b> $x=\frac{17\pi}{3}$ : $\frac{17\pi}{3}=\frac{18\pi}{3}-\frac{\pi}{3}=6\pi-\frac{\pi}{3}$, et $6\pi$ représente 3 tours. Mesure principale : $-\frac{\pi}{3}$. Donc $\cos\frac{17\pi}{3}=\cos\left(-\frac{\pi}{3}\right)=\frac12$ et $\sin\frac{17\pi}{3}=-\frac{\sqrt3}{2}$.</div>
<div class="callout warn"><b>Pièges</b><ul>
<li>Calculatrice en mode <b>radian</b> en analyse : $\sin(30)$ en radians vaut environ $-0{,}988$, pas $\frac12$.</li>
<li>$\cos^2x$ signifie $(\cos x)^2$, alors que $\cos(x^2)$ est tout autre chose.</li>
<li>Connaissant $\cos x$, on a $\sin x=\pm\sqrt{1-\cos^2x}$ : le signe dépend du quadrant.</li>
<li>Retirer $\pi$ (ou un multiple impair de $\pi$) ne ramène <b>pas</b> au même point : on retire des multiples de $2\pi$.</li>
</ul></div>
<div class="callout key"><b>À retenir</b> $M(x)=(\cos x,\sin x)$ ; $\pi$ rad $=180^\circ$ ; $\cos^2x+\sin^2x=1$ ; les angles se lisent modulo $2\pi$.</div>
`
    },
    {
      id: 'm2-s-valeurs',
      title: 'Valeurs remarquables',
      html: String.raw`
<p>À connaître parfaitement : elles servent partout (équations, électronique, mécanique, nombres complexes).</p>
<table class="tbl">
<tr><th>$x$</th><th>$0$</th><th>$\frac{\pi}{6}$</th><th>$\frac{\pi}{4}$</th><th>$\frac{\pi}{3}$</th><th>$\frac{\pi}{2}$</th></tr>
<tr><td>$\cos x$</td><td>$1$</td><td>$\frac{\sqrt3}{2}$</td><td>$\frac{\sqrt2}{2}$</td><td>$\frac12$</td><td>$0$</td></tr>
<tr><td>$\sin x$</td><td>$0$</td><td>$\frac12$</td><td>$\frac{\sqrt2}{2}$</td><td>$\frac{\sqrt3}{2}$</td><td>$1$</td></tr>
<tr><td>$\tan x$</td><td>$0$</td><td>$\frac{\sqrt3}{3}$</td><td>$1$</td><td>$\sqrt3$</td><td>non défini</td></tr>
</table>
<p><b>Moyen mnémotechnique</b> : $\sin$ vaut $\frac{\sqrt0}{2},\ \frac{\sqrt1}{2},\ \frac{\sqrt2}{2},\ \frac{\sqrt3}{2},\ \frac{\sqrt4}{2}$ pour $0,\frac\pi6,\frac\pi4,\frac\pi3,\frac\pi2$ ; $\cos$ prend les mêmes valeurs dans l'ordre inverse. Petit angle, petit sinus : $\sin\frac{\pi}{6}=\frac12$.</p>
<h3>Au-delà de $\frac{\pi}{2}$</h3>
<table class="tbl">
<tr><th>$x$</th><th>$\cos x$</th><th>$\sin x$</th><th>$\tan x$</th></tr>
<tr><td>$\frac{2\pi}{3}$</td><td>$-\frac12$</td><td>$\frac{\sqrt3}{2}$</td><td>$-\sqrt3$</td></tr>
<tr><td>$\frac{3\pi}{4}$</td><td>$-\frac{\sqrt2}{2}$</td><td>$\frac{\sqrt2}{2}$</td><td>$-1$</td></tr>
<tr><td>$\frac{5\pi}{6}$</td><td>$-\frac{\sqrt3}{2}$</td><td>$\frac12$</td><td>$-\frac{\sqrt3}{3}$</td></tr>
<tr><td>$\pi$</td><td>$-1$</td><td>$0$</td><td>$0$</td></tr>
<tr><td>$\frac{7\pi}{6}$</td><td>$-\frac{\sqrt3}{2}$</td><td>$-\frac12$</td><td>$\frac{\sqrt3}{3}$</td></tr>
<tr><td>$\frac{5\pi}{4}$</td><td>$-\frac{\sqrt2}{2}$</td><td>$-\frac{\sqrt2}{2}$</td><td>$1$</td></tr>
<tr><td>$\frac{4\pi}{3}$</td><td>$-\frac12$</td><td>$-\frac{\sqrt3}{2}$</td><td>$\sqrt3$</td></tr>
<tr><td>$\frac{3\pi}{2}$</td><td>$0$</td><td>$-1$</td><td>non défini</td></tr>
<tr><td>$\frac{5\pi}{3}$ (ou $-\frac{\pi}{3}$)</td><td>$\frac12$</td><td>$-\frac{\sqrt3}{2}$</td><td>$-\sqrt3$</td></tr>
<tr><td>$\frac{7\pi}{4}$ (ou $-\frac{\pi}{4}$)</td><td>$\frac{\sqrt2}{2}$</td><td>$-\frac{\sqrt2}{2}$</td><td>$-1$</td></tr>
<tr><td>$\frac{11\pi}{6}$ (ou $-\frac{\pi}{6}$)</td><td>$\frac{\sqrt3}{2}$</td><td>$-\frac12$</td><td>$-\frac{\sqrt3}{3}$</td></tr>
</table>
<p><b>Méthode</b> : (1) ramener l'angle dans $]-\pi,\pi]$ ou $[0,2\pi[$ ; (2) repérer l'<b>angle de référence</b> ($\frac\pi6$, $\frac\pi4$ ou $\frac\pi3$) qui donne la valeur absolue ; (3) placer le point sur le cercle pour le <b>signe</b>.</p>
<div class="callout info"><b>Exemple corrigé</b> $\cos\frac{5\pi}{6}$ : $\frac{5\pi}{6}=\pi-\frac{\pi}{6}$, angle de référence $\frac\pi6$, point en haut à gauche (quadrant II) où le cosinus est négatif. Donc $\cos\frac{5\pi}{6}=-\frac{\sqrt3}{2}$, et $\sin\frac{5\pi}{6}=+\frac12$.</div>
<div class="callout warn"><b>Pièges</b><ul>
<li>Confondre $\frac{\pi}{6}$ et $\frac{\pi}{3}$ : $\cos\frac\pi3=\frac12$ mais $\cos\frac\pi6=\frac{\sqrt3}{2}$.</li>
<li>$\tan\frac{\pi}{6}=\frac{1}{\sqrt3}=\frac{\sqrt3}{3}$ (et non $\frac{\sqrt3}{2}$).</li>
<li>$\tan\frac{\pi}{2}$ n'existe pas ($\cos\frac\pi2=0$).</li>
</ul></div>
<div class="callout key"><b>À retenir</b> Valeurs $\frac{\sqrt k}{2}$ ; angle de référence pour la valeur absolue, quadrant pour le signe.</div>
`
    },
    {
      id: 'm2-s-associes',
      title: 'Angles associés',
      html: String.raw`
<p>Les symétries du cercle relient les lignes trigonométriques de $x$ à celles de $-x$, $\pi-x$, $\pi+x$, $\frac\pi2-x$ et $\frac\pi2+x$.</p>
<table class="tbl">
<tr><th>Angle</th><th>$\cos$</th><th>$\sin$</th><th>$\tan$</th><th>Transformation</th></tr>
<tr><td>$-x$</td><td>$\cos x$</td><td>$-\sin x$</td><td>$-\tan x$</td><td>symétrie par rapport à l'axe des abscisses</td></tr>
<tr><td>$\pi-x$</td><td>$-\cos x$</td><td>$\sin x$</td><td>$-\tan x$</td><td>symétrie par rapport à l'axe des ordonnées</td></tr>
<tr><td>$\pi+x$</td><td>$-\cos x$</td><td>$-\sin x$</td><td>$\tan x$</td><td>symétrie de centre $O$</td></tr>
<tr><td>$\frac{\pi}{2}-x$</td><td>$\sin x$</td><td>$\cos x$</td><td>$\frac{1}{\tan x}$</td><td>symétrie par rapport à la droite $y=x$</td></tr>
<tr><td>$\frac{\pi}{2}+x$</td><td>$-\sin x$</td><td>$\cos x$</td><td>$-\frac{1}{\tan x}$</td><td>rotation d'un quart de tour</td></tr>
</table>
<p>Conséquences : $\cos$ est <b>paire</b>, $\sin$ et $\tan$ sont <b>impaires</b> ; $\cos(x+k\pi)=(-1)^k\cos x$ et $\sin(x+k\pi)=(-1)^k\sin x$.</p>
<p><b>Méthode</b> : ne pas apprendre le tableau par cœur, mais le <b>retrouver</b> : on place un petit angle $x$ (par exemple $x=\frac\pi6$) sur le cercle, puis le point associé ; on lit l'abscisse et l'ordonnée. En cas de doute, les formules d'addition redonnent tout : $\cos(\pi-x)=\cos\pi\cos x+\sin\pi\sin x=-\cos x$.</p>
<div class="callout info"><b>Exemple corrigé</b> $\sin\frac{7\pi}{6}=\sin\left(\pi+\frac{\pi}{6}\right)=-\sin\frac{\pi}{6}=-\frac12$. Et pour simplifier $A=\cos(\pi-x)+\sin\left(\frac\pi2+x\right)+\cos(x+\pi)$ : $A=-\cos x+\cos x-\cos x=-\cos x$.</div>
<div class="callout warn"><b>Pièges</b><ul>
<li>$\sin(\pi-x)=+\sin x$ (symétrie verticale : même hauteur).</li>
<li>$\cos\left(\frac\pi2-x\right)=\sin x$ mais $\cos\left(\frac\pi2+x\right)=-\sin x$.</li>
<li>$\tan$ est de période $\pi$ : $\tan(\pi+x)=\tan x$.</li>
</ul></div>
<div class="callout key"><b>À retenir</b> $\pi-x$ : même sinus ; $-x$ : même cosinus ; $\pi+x$ : tout change de signe sauf la tangente ; $\frac\pi2-x$ : on échange cos et sin.</div>
`
    },
    {
      id: 'm2-s-addition',
      title: 'Formules d\'addition et de duplication',
      html: String.raw`
<h3>Formules d'addition</h3>
<p>Pour tous réels $a$ et $b$ :</p>
<p>$$\cos(a+b)=\cos a\cos b-\sin a\sin b \qquad \cos(a-b)=\cos a\cos b+\sin a\sin b$$</p>
<p>$$\sin(a+b)=\sin a\cos b+\cos a\sin b \qquad \sin(a-b)=\sin a\cos b-\cos a\sin b$$</p>
<p>$$\tan(a+b)=\frac{\tan a+\tan b}{1-\tan a\tan b} \qquad \tan(a-b)=\frac{\tan a-\tan b}{1+\tan a\tan b}$$</p>
<p>La formule de $\cos(a-b)$ se démontre avec le produit scalaire de $\vec u=(\cos a,\sin a)$ et $\vec v=(\cos b,\sin b)$ ; les autres s'en déduisent en remplaçant $b$ par $-b$ ou en utilisant $\sin x=\cos\left(\frac\pi2-x\right)$. Moyen mnémotechnique : « cos-cos, sin-sin, signe <b>contraire</b> » et « sin-cos, cos-sin, <b>même</b> signe ».</p>
<h3>Formules de duplication ($a=b$)</h3>
<p>$$\sin 2a=2\sin a\cos a \qquad \cos 2a=\cos^2a-\sin^2a=2\cos^2a-1=1-2\sin^2a \qquad \tan 2a=\frac{2\tan a}{1-\tan^2a}$$</p>
<p>Et pour l'angle triple : $\cos 3a=4\cos^3a-3\cos a$, $\sin 3a=3\sin a-4\sin^3a$.</p>
<h3>Tangente de l'angle moitié</h3>
<p>Avec $t=\tan\frac{x}{2}$ (pour $x\neq\pi+2k\pi$) : $$\cos x=\frac{1-t^2}{1+t^2} \qquad \sin x=\frac{2t}{1+t^2} \qquad \tan x=\frac{2t}{1-t^2}$$ Ces formules transforment une expression en $\cos x$, $\sin x$ en une fraction rationnelle en $t$ (utile pour certaines intégrales et équations).</p>
<div class="callout info"><b>Exemple corrigé</b> $\cos\frac{\pi}{12}=\cos\left(\frac\pi3-\frac\pi4\right)=\cos\frac\pi3\cos\frac\pi4+\sin\frac\pi3\sin\frac\pi4=\frac12\cdot\frac{\sqrt2}{2}+\frac{\sqrt3}{2}\cdot\frac{\sqrt2}{2}=\frac{\sqrt2+\sqrt6}{4}$.</div>
<div class="callout warn"><b>Pièges</b><ul>
<li>$\cos(a+b)\neq\cos a+\cos b$ et $\sin 2a\neq 2\sin a$.</li>
<li>Le signe de $\cos(a+b)$ est un <b>moins</b> (et un plus pour $\cos(a-b)$).</li>
<li>Choisir la bonne forme de $\cos 2a$ : $2\cos^2a-1$ si l'on veut tout en cosinus, $1-2\sin^2a$ si l'on veut tout en sinus.</li>
</ul></div>
<div class="callout key"><b>À retenir</b> Les 4 formules d'addition engendrent tout le reste : duplication ($b=a$), angles associés, linéarisation.</div>
`
    },
    {
      id: 'm2-s-transfo',
      title: 'Linéarisation et transformations',
      html: String.raw`
<h3>Linéarisation</h3>
<p>Linéariser, c'est remplacer des produits ou des puissances de $\cos$ et $\sin$ par des sommes de $\cos(kx)$ et $\sin(kx)$ (indispensable pour <b>intégrer</b>, ou pour lire les fréquences d'un signal).</p>
<p>$$\cos^2a=\frac{1+\cos 2a}{2} \qquad \sin^2a=\frac{1-\cos 2a}{2} \qquad \sin a\cos a=\frac{\sin 2a}{2}$$</p>
<p>Pour les puissances supérieures, on utilise les formules d'Euler (chapitre complexes) ou l'angle triple : $\cos^3x=\frac{3\cos x+\cos 3x}{4}$ et $\sin^3x=\frac{3\sin x-\sin 3x}{4}$.</p>
<h3>Produit en somme</h3>
<p>$$\cos a\cos b=\frac12\left[\cos(a-b)+\cos(a+b)\right] \qquad \sin a\sin b=\frac12\left[\cos(a-b)-\cos(a+b)\right]$$</p>
<p>$$\sin a\cos b=\frac12\left[\sin(a+b)+\sin(a-b)\right]$$</p>
<p>On les obtient en additionnant ou soustrayant les formules d'addition. En électronique : le produit de deux sinusoïdes de pulsations $\omega_1$ et $\omega_2$ (modulation, mélangeur) donne les pulsations $\omega_1-\omega_2$ et $\omega_1+\omega_2$.</p>
<h3>Somme en produit</h3>
<p>$$\cos p+\cos q=2\cos\frac{p+q}{2}\cos\frac{p-q}{2} \qquad \cos p-\cos q=-2\sin\frac{p+q}{2}\sin\frac{p-q}{2}$$</p>
<p>$$\sin p+\sin q=2\sin\frac{p+q}{2}\cos\frac{p-q}{2} \qquad \sin p-\sin q=2\cos\frac{p+q}{2}\sin\frac{p-q}{2}$$</p>
<p>Utile pour factoriser (résoudre $\sin p+\sin q=0$) ou pour expliquer le phénomène de <b>battements</b>.</p>
<h3>Forme $a\cos x+b\sin x$</h3>
<p>Pour $(a,b)\neq(0,0)$, on pose $R=\sqrt{a^2+b^2}$ et on cherche $\varphi$ tel que $\cos\varphi=\frac aR$ et $\sin\varphi=\frac bR$. Alors $$a\cos x+b\sin x=R\cos(x-\varphi)$$ Preuve : $R\cos(x-\varphi)=R\cos\varphi\cos x+R\sin\varphi\sin x=a\cos x+b\sin x$. L'amplitude vaut $R$ : le maximum de l'expression est $R$, le minimum $-R$.</p>
<div class="callout info"><b>Exemple corrigé</b> $\cos x+\sqrt3\sin x$ : $R=\sqrt{1+3}=2$, $\cos\varphi=\frac12$, $\sin\varphi=\frac{\sqrt3}{2}$, donc $\varphi=\frac\pi3$ et $\cos x+\sqrt3\sin x=2\cos\left(x-\frac\pi3\right)$. Valeur maximale : 2, atteinte en $x=\frac\pi3$.</div>
<div class="callout warn"><b>Pièges</b><ul>
<li>$\sin^2a=\frac{1-\cos 2a}{2}$ (signe moins), $\cos^2a=\frac{1+\cos 2a}{2}$ (signe plus).</li>
<li>Ne pas oublier le facteur $\frac12$ dans les formules produit en somme.</li>
<li>$\varphi=\arctan\frac ba$ seulement si $a\gt0$ : il faut vérifier les signes de $\cos\varphi$ et $\sin\varphi$.</li>
</ul></div>
<div class="callout key"><b>À retenir</b> $\cos^2=\frac{1+\cos2}{2}$, $\sin^2=\frac{1-\cos2}{2}$ ; $a\cos x+b\sin x=R\cos(x-\varphi)$ avec $R=\sqrt{a^2+b^2}$.</div>
`
    },
    {
      id: 'm2-s-equations',
      title: 'Équations trigonométriques',
      html: String.raw`
<h3>Les trois équations fondamentales</h3>
<p>Pour $k\in\mathbb{Z}$ :</p>
<p>$$\cos x=\cos a \Leftrightarrow x=a+2k\pi \ \text{ ou } \ x=-a+2k\pi$$</p>
<p>$$\sin x=\sin a \Leftrightarrow x=a+2k\pi \ \text{ ou } \ x=\pi-a+2k\pi$$</p>
<p>$$\tan x=\tan a \Leftrightarrow x=a+k\pi \quad \left(a\neq\frac\pi2+k\pi\right)$$</p>
<p>Cas particuliers : $\cos x=0\Leftrightarrow x=\frac\pi2+k\pi$ ; $\sin x=0\Leftrightarrow x=k\pi$ ; $\cos x=1\Leftrightarrow x=2k\pi$ ; $\cos x=-1\Leftrightarrow x=\pi+2k\pi$ ; $\sin x=1\Leftrightarrow x=\frac\pi2+2k\pi$.</p>
<p>Si $|c|\gt 1$, $\cos x=c$ et $\sin x=c$ n'ont <b>aucune</b> solution. Si $c$ n'est pas une valeur remarquable, on écrit $\cos x=\cos(\arccos c)$ ou $\sin x=\sin(\arcsin c)$.</p>
<h3>Méthode</h3>
<ol>
<li>Écrire le second membre sous la forme $\cos a$ (ou $\sin a$, $\tan a$) avec une valeur remarquable.</li>
<li>Écrire <b>toutes</b> les familles de solutions (deux familles pour cos et sin).</li>
<li>Si l'inconnue est $\omega x+\varphi$, résoudre d'abord pour cet argument, puis isoler $x$ : la période $2k\pi$ devient $\frac{2k\pi}{\omega}$.</li>
<li>Sur un intervalle, donner les valeurs de $k$ qui conviennent (le cercle aide à n'en oublier aucune).</li>
</ol>
<div class="callout info"><b>Exemple corrigé 1</b> $\cos(2x)=\frac12$ sur $]-\pi,\pi]$. $\cos(2x)=\cos\frac\pi3\Leftrightarrow 2x=\pm\frac\pi3+2k\pi\Leftrightarrow x=\pm\frac\pi6+k\pi$. Dans $]-\pi,\pi]$ : $\frac\pi6$, $-\frac\pi6$, $\frac\pi6-\pi=-\frac{5\pi}{6}$, $-\frac\pi6+\pi=\frac{5\pi}{6}$. $S=\left\{-\frac{5\pi}6,-\frac\pi6,\frac\pi6,\frac{5\pi}6\right\}$.</div>
<div class="callout info"><b>Exemple corrigé 2</b> $\sin x=-\frac{\sqrt2}{2}$ sur $[0,2\pi[$. $\sin x=\sin\left(-\frac\pi4\right)\Leftrightarrow x=-\frac\pi4+2k\pi$ ou $x=\pi+\frac\pi4+2k\pi$. Dans $[0,2\pi[$ : $\frac{7\pi}{4}$ et $\frac{5\pi}{4}$.</div>
<h3>Autres types</h3>
<ul>
<li><b>Équation du second degré</b> : $2\cos^2x-\cos x-1=0$ ; on pose $X=\cos x\in[-1,1]$, on résout, puis on revient à $x$.</li>
<li><b>$a\cos x+b\sin x=c$</b> : on écrit $R\cos(x-\varphi)=c$.</li>
<li><b>Inéquations</b> : on lit sur le cercle. Ex. sur $]-\pi,\pi]$ : $\cos x\geq\frac12\Leftrightarrow x\in\left[-\frac\pi3,\frac\pi3\right]$.</li>
</ul>
<div class="callout warn"><b>Pièges</b><ul>
<li>Oublier la seconde famille de solutions ($-a$ pour le cosinus, $\pi-a$ pour le sinus).</li>
<li>$2x=a+2k\pi$ donne $x=\frac a2+k\pi$ : diviser <b>aussi</b> le $2k\pi$.</li>
<li>Pour $\sin x=\sin a$, la seconde famille est $\pi-a$, pas $-a$.</li>
</ul></div>
<div class="callout key"><b>À retenir</b> cos : $\pm a$ ; sin : $a$ et $\pi-a$ ; tan : $a+k\pi$. Toujours $+2k\pi$ (ou $+k\pi$ pour tan), puis sélectionner dans l'intervalle.</div>
`
    },
    {
      id: 'm2-s-fonctions',
      title: 'Fonctions trigonométriques',
      html: String.raw`
<h3>Cosinus et sinus</h3>
<p>Définies sur $\mathbb{R}$, à valeurs dans $[-1,1]$, <b>$2\pi$-périodiques</b>. $\cos$ est <b>paire</b> (courbe symétrique par rapport à l'axe des ordonnées), $\sin$ est <b>impaire</b> (symétrique par rapport à l'origine). On a $\sin x=\cos\left(x-\frac\pi2\right)$ : la sinusoïde est la cosinusoïde décalée de $\frac\pi2$.</p>
<div class="widget" data-w="plot" data-f="sin(x);cos(x)" data-x="-6.3;6.3" data-y="-1.5;1.5"></div>
<h3>Tangente</h3>
<p>Définie sur $\mathbb{R}\setminus\left\{\frac\pi2+k\pi\right\}$, <b>$\pi$-périodique</b>, impaire, strictement croissante sur $\left]-\frac\pi2,\frac\pi2\right[$, avec des asymptotes verticales en $x=\frac\pi2+k\pi$.</p>
<div class="widget" data-w="plot" data-f="tan(x)" data-x="-4.7;4.7" data-y="-4;4"></div>
<h3>Dérivées</h3>
<p>$$(\sin x)'=\cos x \qquad (\cos x)'=-\sin x \qquad (\tan x)'=1+\tan^2x=\frac{1}{\cos^2x}$$</p>
<p>Avec une fonction composée : $\big(\sin u\big)'=u'\cos u$, $\big(\cos u\big)'=-u'\sin u$. En particulier $\big(\cos(\omega x+\varphi)\big)'=-\omega\sin(\omega x+\varphi)$.</p>
<h3>Période d'un signal sinusoïdal</h3>
<p>$x\mapsto\cos(\omega x+\varphi)$ est périodique de période $T=\frac{2\pi}{|\omega|}$. En électronique : $s(t)=A\cos(\omega t+\varphi)$ avec $\omega=2\pi f$ (pulsation en rad/s), $T=\frac1f$, $A$ l'amplitude, $\varphi$ la phase à l'origine.</p>
<h3>Limites et approximations</h3>
<p>$$\lim_{x\to 0}\frac{\sin x}{x}=1 \qquad \lim_{x\to0}\frac{1-\cos x}{x^2}=\frac12 \qquad \lim_{x\to0}\frac{\tan x}{x}=1$$ Pour $x$ proche de $0$ (en radians) : $\sin x\approx x$, $\tan x\approx x$, $\cos x\approx 1-\frac{x^2}{2}$. Et pour tout réel $x$ : $|\sin x|\leq|x|$.</p>
<div class="callout info"><b>Exemple corrigé</b> $s(t)=5\cos\left(100\pi t+\frac\pi4\right)$ : $\omega=100\pi$ rad/s, $T=\frac{2\pi}{100\pi}=\frac1{50}$ s $=20$ ms, $f=50$ Hz. Sa dérivée : $s'(t)=-500\pi\sin\left(100\pi t+\frac\pi4\right)$.</div>
<div class="callout warn"><b>Pièges</b><ul>
<li>$(\cos x)'=-\sin x$ : ne pas oublier le signe moins.</li>
<li>$(\sin 2x)'=2\cos 2x$ : la dérivée intérieure multiplie.</li>
<li>La période de $\tan$ est $\pi$, pas $2\pi$ ; celle de $\cos(\omega x)$ est $\frac{2\pi}{\omega}$, pas $2\pi\omega$.</li>
<li>Les limites et approximations ne valent qu'en radians.</li>
</ul></div>
<div class="callout key"><b>À retenir</b> $\sin'=\cos$, $\cos'=-\sin$, $\tan'=1+\tan^2$ ; $T=\frac{2\pi}{\omega}$ ; $\frac{\sin x}{x}\to1$.</div>
`
    },
    {
      id: 'm2-s-reciproques',
      title: 'Fonctions réciproques : arcsin, arccos, arctan',
      html: String.raw`
<p>Les fonctions trigonométriques ne sont pas bijectives sur $\mathbb R$ ; on les <b>restreint</b> à un intervalle où elles sont strictement monotones, ce qui définit leurs réciproques.</p>
<div class="grid2">
<div class="mini"><h4>arcsin</h4><p>$\arcsin:[-1,1]\to\left[-\frac\pi2,\frac\pi2\right]$. $y=\arcsin x\Leftrightarrow x=\sin y$ et $y\in\left[-\frac\pi2,\frac\pi2\right]$. Impaire, croissante. $(\arcsin x)'=\frac{1}{\sqrt{1-x^2}}$ sur $]-1,1[$.</p></div>
<div class="mini"><h4>arccos</h4><p>$\arccos:[-1,1]\to[0,\pi]$. $y=\arccos x\Leftrightarrow x=\cos y$ et $y\in[0,\pi]$. Décroissante. $(\arccos x)'=-\frac{1}{\sqrt{1-x^2}}$ sur $]-1,1[$.</p></div>
<div class="mini"><h4>arctan</h4><p>$\arctan:\mathbb R\to\left]-\frac\pi2,\frac\pi2\right[$. $y=\arctan x\Leftrightarrow x=\tan y$ et $y\in\left]-\frac\pi2,\frac\pi2\right[$. Impaire, croissante, limites $\pm\frac\pi2$ en $\pm\infty$. $(\arctan x)'=\frac{1}{1+x^2}$.</p></div>
<div class="mini"><h4>Relations</h4><p>$\arcsin x+\arccos x=\frac\pi2$ ; $\arccos(-x)=\pi-\arccos x$ ; $\arctan x+\arctan\frac1x=\frac\pi2$ si $x\gt0$, $-\frac\pi2$ si $x\lt0$.</p></div>
</div>
<div class="widget" data-w="plot" data-f="arcsin(x);arccos(x);arctan(x)" data-x="-3;3" data-y="-1.8;3.4"></div>
<h3>Valeurs à connaître</h3>
<table class="tbl">
<tr><th>$x$</th><th>$-1$</th><th>$-\frac12$</th><th>$0$</th><th>$\frac12$</th><th>$\frac{\sqrt2}{2}$</th><th>$\frac{\sqrt3}{2}$</th><th>$1$</th></tr>
<tr><td>$\arcsin x$</td><td>$-\frac\pi2$</td><td>$-\frac\pi6$</td><td>$0$</td><td>$\frac\pi6$</td><td>$\frac\pi4$</td><td>$\frac\pi3$</td><td>$\frac\pi2$</td></tr>
<tr><td>$\arccos x$</td><td>$\pi$</td><td>$\frac{2\pi}3$</td><td>$\frac\pi2$</td><td>$\frac\pi3$</td><td>$\frac\pi4$</td><td>$\frac\pi6$</td><td>$0$</td></tr>
</table>
<p>$\arctan 0=0$, $\arctan\frac{\sqrt3}{3}=\frac\pi6$, $\arctan1=\frac\pi4$, $\arctan\sqrt3=\frac\pi3$, $\arctan(-1)=-\frac\pi4$.</p>
<h3>Compositions</h3>
<ul>
<li>$\sin(\arcsin x)=x$ pour $x\in[-1,1]$, mais $\arcsin(\sin x)=x$ <b>seulement</b> si $x\in\left[-\frac\pi2,\frac\pi2\right]$.</li>
<li>$\cos(\arcsin x)=\sqrt{1-x^2}$ et $\sin(\arccos x)=\sqrt{1-x^2}$ (positifs car $\arcsin x\in\left[-\frac\pi2,\frac\pi2\right]$ et $\arccos x\in[0,\pi]$).</li>
<li>$\cos(\arctan x)=\frac{1}{\sqrt{1+x^2}}$ (d'après $1+\tan^2=\frac1{\cos^2}$).</li>
</ul>
<p><b>Méthode : démontrer une relation</b> comme $\arctan x+\arctan\frac1x=\frac\pi2$ ($x\gt0$) : dériver. $f'(x)=\frac{1}{1+x^2}+\frac{-1/x^2}{1+1/x^2}=\frac{1}{1+x^2}-\frac{1}{x^2+1}=0$, donc $f$ est constante sur $]0,+\infty[$, égale à $f(1)=\frac\pi4+\frac\pi4=\frac\pi2$. Par imparité, elle vaut $-\frac\pi2$ sur $]-\infty,0[$.</p>
<div class="callout info"><b>Exemple corrigé</b> $\arcsin\left(\sin\frac{5\pi}{6}\right)=\arcsin\frac12=\frac\pi6$ (et non $\frac{5\pi}6$, qui n'est pas dans $\left[-\frac\pi2,\frac\pi2\right]$). De même $\arccos\left(\cos\left(-\frac\pi3\right)\right)=\arccos\frac12=\frac\pi3$.</div>
<div class="callout warn"><b>Pièges</b><ul>
<li>$\arccos$ est à valeurs dans $[0,\pi]$ : $\arccos\left(-\frac12\right)=\frac{2\pi}{3}$, pas $-\frac\pi3$.</li>
<li>$\arcsin(\sin x)\neq x$ en général.</li>
<li>Sur la calculatrice, $\sin^{-1}$ désigne $\arcsin$, pas $\frac{1}{\sin}$.</li>
</ul></div>
<div class="callout key"><b>À retenir</b> Images : $\arcsin\in\left[-\frac\pi2,\frac\pi2\right]$, $\arccos\in[0,\pi]$, $\arctan\in\left]-\frac\pi2,\frac\pi2\right[$. Dérivées : $\frac1{\sqrt{1-x^2}}$, $-\frac1{\sqrt{1-x^2}}$, $\frac1{1+x^2}$.</div>
`
    },
    {
      id: 'm2-s-memo',
      title: 'Mémo : tableau récapitulatif',
      html: String.raw`
<table class="tbl">
<tr><th>Thème</th><th>À savoir par cœur</th></tr>
<tr><td>Radian</td><td>$\pi$ rad $=180^\circ$ ; arc $\ell=R\theta$</td></tr>
<tr><td>Cercle</td><td>$M(x)=(\cos x,\sin x)$ ; $\cos^2x+\sin^2x=1$ ; $1+\tan^2x=\frac1{\cos^2x}$</td></tr>
<tr><td>Valeurs</td><td>$\frac{\sqrt0}2,\frac{\sqrt1}2,\frac{\sqrt2}2,\frac{\sqrt3}2,\frac{\sqrt4}2$ pour $\sin$ en $0,\frac\pi6,\frac\pi4,\frac\pi3,\frac\pi2$</td></tr>
<tr><td>Angles associés</td><td>$\cos(-x)=\cos x$ ; $\sin(\pi-x)=\sin x$ ; $\cos(\pi+x)=-\cos x$ ; $\cos(\frac\pi2-x)=\sin x$</td></tr>
<tr><td>Addition</td><td>$\cos(a\pm b)=\cos a\cos b\mp\sin a\sin b$ ; $\sin(a\pm b)=\sin a\cos b\pm\cos a\sin b$</td></tr>
<tr><td>Duplication</td><td>$\sin2a=2\sin a\cos a$ ; $\cos2a=2\cos^2a-1=1-2\sin^2a$</td></tr>
<tr><td>Linéarisation</td><td>$\cos^2a=\frac{1+\cos2a}2$ ; $\sin^2a=\frac{1-\cos2a}2$</td></tr>
<tr><td>Produit / somme</td><td>$\cos a\cos b=\frac12[\cos(a-b)+\cos(a+b)]$ ; $\cos p+\cos q=2\cos\frac{p+q}2\cos\frac{p-q}2$</td></tr>
<tr><td>$a\cos x+b\sin x$</td><td>$=R\cos(x-\varphi)$, $R=\sqrt{a^2+b^2}$, $\cos\varphi=\frac aR$, $\sin\varphi=\frac bR$</td></tr>
<tr><td>Équations</td><td>$\cos$ : $\pm a+2k\pi$ ; $\sin$ : $a$ ou $\pi-a$ $+2k\pi$ ; $\tan$ : $a+k\pi$</td></tr>
<tr><td>Fonctions</td><td>$\sin'=\cos$ ; $\cos'=-\sin$ ; $\tan'=1+\tan^2$ ; période de $\cos(\omega x)$ : $\frac{2\pi}\omega$</td></tr>
<tr><td>Réciproques</td><td>$\arcsin\in[-\frac\pi2,\frac\pi2]$, $\arccos\in[0,\pi]$, $\arctan\in]-\frac\pi2,\frac\pi2[$ ; $(\arctan x)'=\frac1{1+x^2}$</td></tr>
</table>
<div class="callout key"><b>Réflexe de contrôle</b> Teste une formule avec $a=0$ ou $a=\frac\pi2$, et vérifie un signe en plaçant le point sur le cercle.</div>
`
    }
  ],

  /* ============================== FORMULAIRE ============================== */
  formulas: [
    { id: 'm2-fo-rad', name: 'Degrés et radians', tex: String.raw`\theta_{\text{rad}}=\frac{\pi}{180}\,\theta_{\text{deg}} \qquad \pi\ \text{rad}=180^\circ`, note: String.raw`Longueur d'arc : $\ell=R\theta$ ($\theta$ en radians).` },
    { id: 'm2-fo-pyth', name: 'Relation fondamentale', tex: String.raw`\cos^2x+\sin^2x=1` },
    { id: 'm2-fo-1tan2', name: 'Tangente et 1 + tan²', tex: String.raw`\tan x=\frac{\sin x}{\cos x} \qquad 1+\tan^2x=\frac{1}{\cos^2x}`, note: String.raw`Pour $x\neq\frac{\pi}{2}+k\pi$.` },
    { id: 'm2-fo-valeurs', name: 'Valeurs remarquables (premier quadrant)', tex: String.raw`\begin{array}{c|ccccc} x & 0 & \frac{\pi}{6} & \frac{\pi}{4} & \frac{\pi}{3} & \frac{\pi}{2} \\ \hline \cos x & 1 & \frac{\sqrt{3}}{2} & \frac{\sqrt{2}}{2} & \frac{1}{2} & 0 \\ \sin x & 0 & \frac{1}{2} & \frac{\sqrt{2}}{2} & \frac{\sqrt{3}}{2} & 1 \\ \tan x & 0 & \frac{\sqrt{3}}{3} & 1 & \sqrt{3} & \times \end{array}` },
    { id: 'm2-fo-valeurs2', name: 'Valeurs remarquables (deuxième quadrant)', tex: String.raw`\begin{array}{c|cccc} x & \frac{2\pi}{3} & \frac{3\pi}{4} & \frac{5\pi}{6} & \pi \\ \hline \cos x & -\frac{1}{2} & -\frac{\sqrt{2}}{2} & -\frac{\sqrt{3}}{2} & -1 \\ \sin x & \frac{\sqrt{3}}{2} & \frac{\sqrt{2}}{2} & \frac{1}{2} & 0 \end{array}` },
    { id: 'm2-fo-period', name: 'Périodicité', tex: String.raw`\cos(x+2k\pi)=\cos x \qquad \sin(x+2k\pi)=\sin x \qquad \tan(x+k\pi)=\tan x` },
    { id: 'm2-fo-neg', name: 'Angle opposé', tex: String.raw`\cos(-x)=\cos x \qquad \sin(-x)=-\sin x \qquad \tan(-x)=-\tan x`, note: String.raw`$\cos$ est paire, $\sin$ et $\tan$ impaires.` },
    { id: 'm2-fo-pi-moins', name: 'Angle π − x', tex: String.raw`\cos(\pi-x)=-\cos x \qquad \sin(\pi-x)=\sin x`, note: String.raw`Et $\tan(\pi-x)=-\tan x$.` },
    { id: 'm2-fo-pi-plus', name: 'Angle π + x', tex: String.raw`\cos(\pi+x)=-\cos x \qquad \sin(\pi+x)=-\sin x`, note: String.raw`Et $\tan(\pi+x)=\tan x$.` },
    { id: 'm2-fo-pi2-moins', name: 'Angle π/2 − x', tex: String.raw`\cos\left(\frac{\pi}{2}-x\right)=\sin x \qquad \sin\left(\frac{\pi}{2}-x\right)=\cos x`, note: String.raw`Et $\tan\left(\frac{\pi}{2}-x\right)=\frac{1}{\tan x}$.` },
    { id: 'm2-fo-pi2-plus', name: 'Angle π/2 + x', tex: String.raw`\cos\left(\frac{\pi}{2}+x\right)=-\sin x \qquad \sin\left(\frac{\pi}{2}+x\right)=\cos x`, note: String.raw`Et $\tan\left(\frac{\pi}{2}+x\right)=-\frac{1}{\tan x}$.` },
    { id: 'm2-fo-cos-add', name: 'Cosinus d\'une somme', tex: String.raw`\cos(a+b)=\cos a\cos b-\sin a\sin b` },
    { id: 'm2-fo-cos-sub', name: 'Cosinus d\'une différence', tex: String.raw`\cos(a-b)=\cos a\cos b+\sin a\sin b` },
    { id: 'm2-fo-sin-add', name: 'Sinus d\'une somme', tex: String.raw`\sin(a+b)=\sin a\cos b+\cos a\sin b` },
    { id: 'm2-fo-sin-sub', name: 'Sinus d\'une différence', tex: String.raw`\sin(a-b)=\sin a\cos b-\cos a\sin b` },
    { id: 'm2-fo-tan-add', name: 'Tangente d\'une somme', tex: String.raw`\tan(a+b)=\frac{\tan a+\tan b}{1-\tan a\tan b}`, note: String.raw`Et $\tan(a-b)=\frac{\tan a-\tan b}{1+\tan a\tan b}$.` },
    { id: 'm2-fo-cos2', name: 'Cosinus de l\'angle double', tex: String.raw`\cos 2a=\cos^2a-\sin^2a=2\cos^2a-1=1-2\sin^2a` },
    { id: 'm2-fo-sin2', name: 'Sinus de l\'angle double', tex: String.raw`\sin 2a=2\sin a\cos a` },
    { id: 'm2-fo-tan2', name: 'Tangente de l\'angle double', tex: String.raw`\tan 2a=\frac{2\tan a}{1-\tan^2a}` },
    { id: 'm2-fo-triple', name: 'Angle triple', tex: String.raw`\cos 3a=4\cos^3a-3\cos a \qquad \sin 3a=3\sin a-4\sin^3a` },
    { id: 'm2-fo-lin-cos', name: 'Linéarisation de cos²', tex: String.raw`\cos^2a=\frac{1+\cos 2a}{2}` },
    { id: 'm2-fo-lin-sin', name: 'Linéarisation de sin²', tex: String.raw`\sin^2a=\frac{1-\cos 2a}{2}` },
    { id: 'm2-fo-lin-sc', name: 'Linéarisation de sin·cos', tex: String.raw`\sin a\cos a=\frac{\sin 2a}{2}` },
    { id: 'm2-fo-pcc', name: 'Produit cos·cos en somme', tex: String.raw`\cos a\cos b=\frac{1}{2}\left[\cos(a-b)+\cos(a+b)\right]` },
    { id: 'm2-fo-pss', name: 'Produit sin·sin en somme', tex: String.raw`\sin a\sin b=\frac{1}{2}\left[\cos(a-b)-\cos(a+b)\right]` },
    { id: 'm2-fo-psc', name: 'Produit sin·cos en somme', tex: String.raw`\sin a\cos b=\frac{1}{2}\left[\sin(a+b)+\sin(a-b)\right]` },
    { id: 'm2-fo-scc', name: 'Somme de cosinus', tex: String.raw`\cos p+\cos q=2\cos\frac{p+q}{2}\cos\frac{p-q}{2}` },
    { id: 'm2-fo-dcc', name: 'Différence de cosinus', tex: String.raw`\cos p-\cos q=-2\sin\frac{p+q}{2}\sin\frac{p-q}{2}` },
    { id: 'm2-fo-sss', name: 'Somme de sinus', tex: String.raw`\sin p+\sin q=2\sin\frac{p+q}{2}\cos\frac{p-q}{2}` },
    { id: 'm2-fo-dss', name: 'Différence de sinus', tex: String.raw`\sin p-\sin q=2\cos\frac{p+q}{2}\sin\frac{p-q}{2}` },
    { id: 'm2-fo-t', name: 'Tangente de l\'angle moitié', tex: String.raw`t=\tan\frac{x}{2} :\ \ \cos x=\frac{1-t^2}{1+t^2},\ \ \sin x=\frac{2t}{1+t^2},\ \ \tan x=\frac{2t}{1-t^2}` },
    { id: 'm2-fo-rcos', name: 'Forme a cos x + b sin x', tex: String.raw`a\cos x+b\sin x=R\cos(x-\varphi), \quad R=\sqrt{a^2+b^2},\ \cos\varphi=\frac{a}{R},\ \sin\varphi=\frac{b}{R}` },
    { id: 'm2-fo-eq-cos', name: 'Équation cos x = cos a', tex: String.raw`\cos x=\cos a\Leftrightarrow x=a+2k\pi \ \text{ ou } \ x=-a+2k\pi`, note: String.raw`$k\in\mathbb{Z}$.` },
    { id: 'm2-fo-eq-sin', name: 'Équation sin x = sin a', tex: String.raw`\sin x=\sin a\Leftrightarrow x=a+2k\pi \ \text{ ou } \ x=\pi-a+2k\pi`, note: String.raw`$k\in\mathbb{Z}$.` },
    { id: 'm2-fo-eq-tan', name: 'Équation tan x = tan a', tex: String.raw`\tan x=\tan a\Leftrightarrow x=a+k\pi`, note: String.raw`$k\in\mathbb{Z}$, $a\neq\frac{\pi}{2}+k\pi$.` },
    { id: 'm2-fo-eq-part', name: 'Cas particuliers', tex: String.raw`\cos x=0\Leftrightarrow x=\frac{\pi}{2}+k\pi \qquad \sin x=0\Leftrightarrow x=k\pi`, note: String.raw`$\cos x=1\Leftrightarrow x=2k\pi$ ; $\sin x=1\Leftrightarrow x=\frac\pi2+2k\pi$.` },
    { id: 'm2-fo-der', name: 'Dérivées de sin, cos, tan', tex: String.raw`(\sin x)'=\cos x \qquad (\cos x)'=-\sin x \qquad (\tan x)'=1+\tan^2x=\frac{1}{\cos^2x}` },
    { id: 'm2-fo-der-comp', name: 'Dérivées composées et période', tex: String.raw`\big(\cos(\omega x+\varphi)\big)'=-\omega\sin(\omega x+\varphi) \qquad \big(\sin(\omega x+\varphi)\big)'=\omega\cos(\omega x+\varphi)`, note: String.raw`Période : $T=\frac{2\pi}{|\omega|}$.` },
    { id: 'm2-fo-lim', name: 'Limites usuelles', tex: String.raw`\lim_{x\to 0}\frac{\sin x}{x}=1 \qquad \lim_{x\to 0}\frac{1-\cos x}{x^2}=\frac{1}{2}`, note: String.raw`Près de 0 : $\sin x\approx x$, $\cos x\approx1-\frac{x^2}{2}$.` },
    { id: 'm2-fo-arcsin', name: 'Arc sinus', tex: String.raw`\arcsin : [-1,1]\to\left[-\frac{\pi}{2},\frac{\pi}{2}\right], \qquad (\arcsin x)'=\frac{1}{\sqrt{1-x^2}}` },
    { id: 'm2-fo-arccos', name: 'Arc cosinus', tex: String.raw`\arccos : [-1,1]\to[0,\pi], \qquad (\arccos x)'=-\frac{1}{\sqrt{1-x^2}}` },
    { id: 'm2-fo-arctan', name: 'Arc tangente', tex: String.raw`\arctan : \mathbb{R}\to\left]-\frac{\pi}{2},\frac{\pi}{2}\right[, \qquad (\arctan x)'=\frac{1}{1+x^2}` },
    { id: 'm2-fo-arc-rel', name: 'Relations entre fonctions réciproques', tex: String.raw`\arcsin x+\arccos x=\frac{\pi}{2} \qquad \arctan x+\arctan\frac{1}{x}=\begin{cases}\frac{\pi}{2} & \text{si } x\gt 0\\ -\frac{\pi}{2} & \text{si } x\lt 0\end{cases}` },
    { id: 'm2-fo-arc-comp', name: 'Compositions', tex: String.raw`\cos(\arcsin x)=\sin(\arccos x)=\sqrt{1-x^2} \qquad \cos(\arctan x)=\frac{1}{\sqrt{1+x^2}}`, note: String.raw`Attention : $\arcsin(\sin x)=x$ seulement si $x\in\left[-\frac\pi2,\frac\pi2\right]$.` }
  ],

  /* ============================== FLASHCARDS ============================== */
  flashcards: [
    { id: 'm2-f-radian', front: String.raw`Définition du radian et conversion degrés ↔ radians`, back: String.raw`Un angle de $\theta$ radians intercepte sur un cercle de rayon $R$ un arc de longueur $R\theta$ (sur le cercle unité : longueur de l'arc). $2\pi$ rad $=360^\circ$, donc $\theta_{\text{rad}}=\theta_{\text{deg}}\times\frac{\pi}{180}$.` },
    { id: 'm2-f-cercle', front: String.raw`Comment lit-on $\cos x$ et $\sin x$ sur le cercle trigonométrique ?`, back: String.raw`Le point $M(x)$ obtenu en parcourant un arc de longueur $x$ depuis $(1,0)$ (sens direct) a pour coordonnées $(\cos x,\sin x)$ : cosinus = abscisse, sinus = ordonnée. D'où $\cos^2x+\sin^2x=1$.` },
    { id: 'm2-f-principale', front: String.raw`Mesure principale d'un angle : méthode`, back: String.raw`C'est l'unique mesure dans $]-\pi,\pi]$. On retire le multiple de $2\pi$ le plus proche. Ex. : $\frac{29\pi}{6}=4\pi+\frac{5\pi}{6}$, mesure principale $\frac{5\pi}{6}$ ; $\frac{17\pi}{3}=6\pi-\frac\pi3$, mesure principale $-\frac\pi3$.` },
    { id: 'm2-f-valeurs', front: String.raw`Retrouver les valeurs de $\sin$ et $\cos$ en $0,\frac\pi6,\frac\pi4,\frac\pi3,\frac\pi2$`, back: String.raw`$\sin$ : $\frac{\sqrt0}2,\frac{\sqrt1}2,\frac{\sqrt2}2,\frac{\sqrt3}2,\frac{\sqrt4}2$, soit $0,\frac12,\frac{\sqrt2}2,\frac{\sqrt3}2,1$. $\cos$ : même liste dans l'ordre inverse. $\tan=\frac{\sin}{\cos}$ : $0,\frac{\sqrt3}3,1,\sqrt3$.` },
    { id: 'm2-f-associes', front: String.raw`Retrouver $\cos(\pi-x)$, $\sin(\pi+x)$, $\cos(\frac\pi2-x)$ sans apprendre par cœur`, back: String.raw`Placer un petit angle $x$ sur le cercle et le point associé : $\pi-x$ (symétrie verticale) garde le sinus, change le cosinus ; $\pi+x$ (symétrie centrale) change les deux ; $\frac\pi2-x$ échange cos et sin. Donc $\cos(\pi-x)=-\cos x$, $\sin(\pi+x)=-\sin x$, $\cos(\frac\pi2-x)=\sin x$.` },
    { id: 'm2-f-addition', front: String.raw`Formules d'addition de $\cos$ et $\sin$`, back: String.raw`$\cos(a\pm b)=\cos a\cos b\mp\sin a\sin b$ (signe contraire) ; $\sin(a\pm b)=\sin a\cos b\pm\cos a\sin b$ (même signe).` },
    { id: 'm2-f-duplication', front: String.raw`Les trois écritures de $\cos 2a$, et $\sin 2a$`, back: String.raw`$\cos2a=\cos^2a-\sin^2a=2\cos^2a-1=1-2\sin^2a$ ; $\sin2a=2\sin a\cos a$. Choisir la forme selon ce qu'on veut garder (tout en cos ou tout en sin).` },
    { id: 'm2-f-linearisation', front: String.raw`Linéariser $\cos^2a$ et $\sin^2a$`, back: String.raw`$\cos^2a=\frac{1+\cos2a}{2}$ et $\sin^2a=\frac{1-\cos2a}{2}$ (on les tire de $\cos2a=2\cos^2a-1=1-2\sin^2a$). Utile pour intégrer : $\int\cos^2x\,dx=\frac x2+\frac{\sin2x}{4}+C$.` },
    { id: 'm2-f-produit-somme', front: String.raw`Transformer $\cos a\cos b$ en somme ; intérêt en électronique`, back: String.raw`$\cos a\cos b=\frac12[\cos(a-b)+\cos(a+b)]$. Le produit de deux signaux de pulsations $\omega_1$, $\omega_2$ (mélangeur, modulation) contient les pulsations $\omega_1-\omega_2$ et $\omega_1+\omega_2$.` },
    { id: 'm2-f-rcos', front: String.raw`Méthode : écrire $a\cos x+b\sin x$ sous la forme $R\cos(x-\varphi)$`, back: String.raw`$R=\sqrt{a^2+b^2}$, puis $\varphi$ tel que $\cos\varphi=\frac aR$ et $\sin\varphi=\frac bR$ (vérifier les deux signes). Ex. : $\cos x+\sin x=\sqrt2\cos\left(x-\frac\pi4\right)$.` },
    { id: 'm2-f-eq-cos', front: String.raw`Résoudre $\cos x=\cos a$`, back: String.raw`$x=a+2k\pi$ ou $x=-a+2k\pi$, $k\in\mathbb Z$ (deux points symétriques par rapport à l'axe des abscisses).` },
    { id: 'm2-f-eq-sin', front: String.raw`Résoudre $\sin x=\sin a$ et $\tan x=\tan a$`, back: String.raw`$\sin x=\sin a\Leftrightarrow x=a+2k\pi$ ou $x=\pi-a+2k\pi$ (symétrie par rapport à l'axe des ordonnées). $\tan x=\tan a\Leftrightarrow x=a+k\pi$.` },
    { id: 'm2-f-eq-intervalle', front: String.raw`Méthode : solutions d'une équation trigonométrique dans un intervalle`, back: String.raw`1) Solutions générales (toutes les familles). 2) Si l'argument est $\omega x$, diviser aussi la période : $\frac{2k\pi}{\omega}$. 3) Tester $k=0,\pm1,\pm2\ldots$ et garder les valeurs dans l'intervalle (vérifier les bornes ouvertes/fermées).` },
    { id: 'm2-f-periode', front: String.raw`Période et parité des fonctions trigonométriques`, back: String.raw`$\cos$ et $\sin$ : période $2\pi$ ; $\tan$ : période $\pi$. $\cos$ paire, $\sin$ et $\tan$ impaires. $x\mapsto\cos(\omega x+\varphi)$ a pour période $\frac{2\pi}{|\omega|}$ ; en électronique $\omega=2\pi f$.` },
    { id: 'm2-f-arcsin', front: String.raw`Définition de $\arcsin$ et piège classique`, back: String.raw`$y=\arcsin x\Leftrightarrow\sin y=x$ et $y\in\left[-\frac\pi2,\frac\pi2\right]$ (pour $x\in[-1,1]$). Piège : $\arcsin(\sin x)=x$ seulement si $x\in\left[-\frac\pi2,\frac\pi2\right]$ ; ex. $\arcsin\left(\sin\frac{3\pi}4\right)=\frac\pi4$.` },
    { id: 'm2-f-arccos', front: String.raw`Définition de $\arccos$ et lien avec $\arcsin$`, back: String.raw`$y=\arccos x\Leftrightarrow\cos y=x$ et $y\in[0,\pi]$ (pour $x\in[-1,1]$). $\arcsin x+\arccos x=\frac\pi2$ ; $\arccos(-x)=\pi-\arccos x$, ex. $\arccos\left(-\frac12\right)=\frac{2\pi}3$.` },
    { id: 'm2-f-arctan', front: String.raw`Définition de $\arctan$, dérivée et relation avec $\arctan\frac1x$`, back: String.raw`$y=\arctan x\Leftrightarrow\tan y=x$ et $y\in\left]-\frac\pi2,\frac\pi2\right[$. $(\arctan x)'=\frac1{1+x^2}$. $\arctan x+\arctan\frac1x=\frac\pi2$ si $x\gt0$, $-\frac\pi2$ si $x\lt0$.` }
  ],

  /* ============================== QUIZ ============================== */
  quiz: [
    { id: 'm2-q-001', q: String.raw`Combien vaut $135^\circ$ en radians ?`, choices: [String.raw`$\frac{2\pi}{3}$`, String.raw`$\frac{3\pi}{4}$`, String.raw`$\frac{5\pi}{6}$`, String.raw`$\frac{3\pi}{2}$`], answer: 1,
      topic: "Conversion degrés-radians", sec: 'm2-s-cercle',
      steps: [
        String.raw`Notion : le radian mesure un angle par la longueur de l'arc qu'il intercepte sur un cercle de rayon 1. Un tour complet vaut $360^\circ=2\pi$ rad, donc $180^\circ=\pi$ rad et $1^\circ=\frac{\pi}{180}$ rad.`,
        String.raw`Conversion : $135^\circ=135\times\frac{\pi}{180}=\frac{135\pi}{180}$.`,
        String.raw`Simplification par 45 : $135=3\times45$ et $180=4\times45$, donc $\frac{135}{180}=\frac34$ et $135^\circ=\frac{3\pi}{4}$.`,
        String.raw`Contrôle : $135^\circ=90^\circ+45^\circ=\frac\pi2+\frac\pi4=\frac{3\pi}{4}$ ✔.`
      ],
      explain: String.raw`Un tour complet mesure $360^\circ$, soit $2\pi$ radians : on convertit donc des degrés en radians en multipliant par $\frac{\pi}{180}$. Ici $135\times\frac{\pi}{180}=\frac{135\pi}{180}$, et en simplifiant par 45 (car $135=3\times45$ et $180=4\times45$) on obtient $\frac{3\pi}{4}$.`,
      why: { 0: String.raw`$\frac{2\pi}{3}=120^\circ$ : erreur de simplification de la fraction $\frac{135}{180}$, qui vaut $\frac34$ et non $\frac23$.`, 2: String.raw`$\frac{5\pi}{6}=150^\circ$ : la fraction $\frac{135}{180}$ a été mal simplifiée (elle vaut $\frac34$).`, 3: String.raw`$\frac{3\pi}{2}=270^\circ$ : tu as sans doute divisé par 90 au lieu de 180 ($\frac{135}{90}=\frac32$).` },
      rule: String.raw`$\theta_{\text{rad}}=\theta_{\text{deg}}\times\frac{\pi}{180}$`, level: 1 },
    { id: 'm2-q-002', q: String.raw`Si $\sin x=\frac35$ et $x\in\left]\frac\pi2,\pi\right[$, alors $\cos x$ vaut :`, choices: [String.raw`$\frac45$`, String.raw`$-\frac45$`, String.raw`$\frac25$`], answer: 1,
      topic: "Relation cos² + sin² = 1", sec: 'm2-s-cercle',
      steps: [
        String.raw`Notion : sur le cercle trigonométrique (rayon 1), le point associé à $x$ a pour coordonnées $(\cos x,\sin x)$. Par Pythagore, $\cos^2x+\sin^2x=1$.`,
        String.raw`$\cos^2x=1-\sin^2x=1-\left(\frac35\right)^2=1-\frac{9}{25}=\frac{16}{25}$, donc $\cos x=\pm\sqrt{\frac{16}{25}}=\pm\frac45$.`,
        String.raw`Signe : $x\in\left]\frac\pi2,\pi\right[$, le point est en haut à gauche du cercle, son abscisse est négative : $\cos x\lt0$.`,
        String.raw`Donc $\cos x=-\frac45$. Contrôle : $\left(-\frac45\right)^2+\left(\frac35\right)^2=\frac{16+9}{25}=1$ ✔.`
      ],
      explain: String.raw`La relation fondamentale $\cos^2x+\sin^2x=1$ donne $\cos^2x=1-\frac{9}{25}=\frac{16}{25}$, donc $\cos x=\frac45$ ou $\cos x=-\frac45$. Pour choisir le signe, on regarde où se trouve $x$ : dans $\left]\frac\pi2,\pi\right[$, le point du cercle est en haut à gauche, d'abscisse négative. Donc $\cos x=-\frac45$.`,
      why: { 0: String.raw`Tu as bien trouvé $|\cos x|=\frac45$ mais oublié le signe : dans le 2e quadrant ($x$ entre $\frac\pi2$ et $\pi$), l'abscisse du point, donc le cosinus, est négative.`, 2: String.raw`$\frac25=1-\frac35$ : tu as écrit $\cos x=1-\sin x$. La vraie relation porte sur les carrés : $\cos^2x=1-\sin^2x$.` },
      rule: String.raw`$\cos^2x+\sin^2x=1$ ; le signe se lit sur le quadrant`, level: 2 },
    { id: 'm2-q-003', q: String.raw`Que vaut $\cos\frac{\pi}{3}$ ?`, choices: [String.raw`$\frac{\sqrt3}{2}$`, String.raw`$\frac12$`, String.raw`$\frac{\sqrt2}{2}$`, String.raw`$\sqrt3$`], answer: 1,
      topic: "Valeurs remarquables", sec: 'm2-s-valeurs',
      steps: [
        String.raw`Notion : $\cos x$ est l'abscisse du point du cercle trigonométrique associé à l'angle $x$. Les valeurs remarquables viennent de triangles particuliers (équilatéral pour $\frac\pi3$ et $\frac\pi6$, isocèle rectangle pour $\frac\pi4$).`,
        String.raw`$\frac\pi3=60^\circ$ : dans un triangle équilatéral de côté 1, la hauteur coupe la base en deux segments de longueur $\frac12$. L'angle de $60^\circ$ a donc un côté adjacent $\frac12$ pour une hypoténuse 1.`,
        String.raw`D'où $\cos\frac\pi3=\frac{\text{adjacent}}{\text{hypoténuse}}=\frac{1/2}{1}=\frac12$.`
      ],
      explain: String.raw`$\frac\pi3$ correspond à $60^\circ$. Dans un triangle équilatéral de côté 1 coupé en deux par une hauteur, l'angle de $60^\circ$ a un côté adjacent de longueur $\frac12$ pour une hypoténuse de 1, d'où $\cos\frac\pi3=\frac12$. Moyen mnémotechnique : les cosinus de $0,\frac\pi6,\frac\pi4,\frac\pi3,\frac\pi2$ valent $\frac{\sqrt4}2,\frac{\sqrt3}2,\frac{\sqrt2}2,\frac{\sqrt1}2,\frac{\sqrt0}2$.`,
      why: { 0: String.raw`$\frac{\sqrt3}{2}$ est $\cos\frac\pi6$ (ou $\sin\frac\pi3$) : confusion entre $\frac\pi6$ et $\frac\pi3$, ou entre cosinus et sinus. Entre 0 et $\frac\pi2$, plus l'angle est grand, plus le cosinus est petit.`, 2: String.raw`$\frac{\sqrt2}{2}$ est la valeur commune de $\cos$ et $\sin$ en $\frac\pi4=45^\circ$, pas en $\frac\pi3$.`, 3: String.raw`$\sqrt3=\frac{\sin(\pi/3)}{\cos(\pi/3)}=\tan\frac\pi3$ : c'est la tangente. Un cosinus est toujours entre $-1$ et $1$, or $\sqrt3\approx1{,}73$.` },
      rule: String.raw`$\cos\frac\pi3=\frac12$, $\sin\frac\pi3=\frac{\sqrt3}2$, $\tan\frac\pi3=\sqrt3$`, level: 1 },
    { id: 'm2-q-004', q: String.raw`Que vaut $\tan\frac{\pi}{6}$ ?`, choices: [String.raw`$\sqrt3$`, String.raw`$\frac12$`, String.raw`$\frac{\sqrt3}{3}$`, String.raw`$\frac{\sqrt3}{2}$`], answer: 2,
      topic: "Valeurs remarquables (tangente)", sec: 'm2-s-valeurs',
      steps: [
        String.raw`Notion : la tangente est définie par $\tan x=\frac{\sin x}{\cos x}$ (là où $\cos x\neq0$).`,
        String.raw`Valeurs en $\frac\pi6=30^\circ$ : $\sin\frac\pi6=\frac12$ et $\cos\frac\pi6=\frac{\sqrt3}{2}$.`,
        String.raw`$\tan\frac\pi6=\frac{1/2}{\sqrt3/2}=\frac12\times\frac{2}{\sqrt3}=\frac{1}{\sqrt3}$.`,
        String.raw`On multiplie haut et bas par $\sqrt3$ : $\frac{1}{\sqrt3}=\frac{\sqrt3}{3}\approx0{,}577$, cohérent avec $\tan\frac\pi6\lt\tan\frac\pi4=1$ ✔.`
      ],
      explain: String.raw`La tangente est le quotient du sinus par le cosinus. Avec $\sin\frac\pi6=\frac12$ et $\cos\frac\pi6=\frac{\sqrt3}{2}$ : $\tan\frac\pi6=\frac{1/2}{\sqrt3/2}=\frac1{\sqrt3}$. On rend le dénominateur rationnel en multipliant haut et bas par $\sqrt3$ : $\frac{1}{\sqrt3}=\frac{\sqrt3}{3}\approx0{,}577$.`,
      why: { 0: String.raw`$\sqrt3=\tan\frac\pi3$ : tu as inversé sinus et cosinus (ou confondu $\frac\pi6$ et $\frac\pi3$). Pour un angle inférieur à $\frac\pi4$, la tangente est inférieure à 1.`, 1: String.raw`$\frac12=\sin\frac\pi6$ : tu as oublié de diviser par $\cos\frac\pi6$.`, 3: String.raw`$\frac{\sqrt3}{2}=\cos\frac\pi6$ : ce n'est pas le quotient $\frac{\sin}{\cos}$.` },
      rule: String.raw`$\tan x=\frac{\sin x}{\cos x}$ ; $\tan\frac\pi6=\frac{\sqrt3}3$, $\tan\frac\pi4=1$, $\tan\frac\pi3=\sqrt3$`, level: 1 },
    { id: 'm2-q-005', q: String.raw`Que vaut $\cos\frac{2\pi}{3}$ ?`, choices: [String.raw`$-\frac12$`, String.raw`$\frac12$`, String.raw`$-\frac{\sqrt3}{2}$`, String.raw`$\frac{\sqrt3}{2}$`], answer: 0,
      topic: "Valeurs au-delà de π/2", sec: 'm2-s-valeurs',
      steps: [
        String.raw`Notion : pour un angle hors de $\left[0,\frac\pi2\right]$, on se ramène à un angle de référence grâce aux symétries du cercle (angles associés), puis on fixe le signe d'après le quadrant.`,
        String.raw`$\frac{2\pi}3=\pi-\frac\pi3$ : le point est le symétrique de celui de $\frac\pi3$ par rapport à l'axe des ordonnées, donc $\cos\left(\pi-\frac\pi3\right)=-\cos\frac\pi3$.`,
        String.raw`$\cos\frac{2\pi}3=-\frac12$. Contrôle : $120^\circ$ est dans le 2e quadrant, où le cosinus est négatif ✔.`
      ],
      explain: String.raw`On écrit $\frac{2\pi}{3}=\pi-\frac\pi3$ : le point associé est le symétrique de celui de $\frac\pi3$ par rapport à l'axe vertical. Il a la même ordonnée mais une abscisse opposée, donc $\cos\frac{2\pi}{3}=-\cos\frac\pi3=-\frac12$. Le signe moins est cohérent : $\frac{2\pi}{3}=120^\circ$ est dans le 2e quadrant, où le cosinus est négatif.`,
      why: { 1: String.raw`$\frac12$ est $\cos\frac\pi3$ : tu as trouvé le bon angle de référence mais oublié que $\frac{2\pi}3$ est à gauche du cercle (cosinus négatif).`, 2: String.raw`Tu as pris l'angle de référence $\frac\pi6$ au lieu de $\frac\pi3$ : $\frac{2\pi}3=\pi-\frac\pi3$, et $\cos\frac\pi3=\frac12$.`, 3: String.raw`$\frac{\sqrt3}{2}=\sin\frac{2\pi}{3}$ : confusion entre cosinus et sinus.` },
      rule: String.raw`$\cos(\pi-x)=-\cos x$ et $\sin(\pi-x)=\sin x$`, level: 2 },
    { id: 'm2-q-006', q: String.raw`Que vaut $\sin\left(-\frac{5\pi}{6}\right)$ ?`, choices: [String.raw`$\frac12$`, String.raw`$-\frac{\sqrt3}{2}$`, String.raw`$-\frac12$`, String.raw`$\frac{\sqrt3}{2}$`], answer: 2,
      topic: "Parité et angles associés", sec: 'm2-s-associes',
      steps: [
        String.raw`Notion : le sinus est impair, $\sin(-x)=-\sin x$ (le point de $-x$ est le symétrique de celui de $x$ par rapport à l'axe horizontal).`,
        String.raw`$\sin\left(-\frac{5\pi}6\right)=-\sin\frac{5\pi}6$.`,
        String.raw`$\frac{5\pi}6=\pi-\frac\pi6$ et $\sin(\pi-a)=\sin a$, donc $\sin\frac{5\pi}6=\sin\frac\pi6=\frac12$.`,
        String.raw`Résultat : $-\frac12$. Contrôle : $-\frac{5\pi}6=-150^\circ$ est en bas à gauche, sinus négatif ✔.`
      ],
      explain: String.raw`La fonction sinus est impaire : $\sin(-x)=-\sin x$, donc $\sin\left(-\frac{5\pi}6\right)=-\sin\frac{5\pi}6$. Comme $\frac{5\pi}{6}=\pi-\frac\pi6$, on a $\sin\frac{5\pi}6=\sin\frac\pi6=\frac12$, d'où le résultat $-\frac12$. Sur le cercle, $-\frac{5\pi}6$ est en bas à gauche (3e quadrant), où le sinus est bien négatif.`,
      why: { 0: String.raw`$\frac12=\sin\frac{5\pi}{6}$ : tu as oublié l'imparité, $\sin(-x)=-\sin x$. Le point $-\frac{5\pi}6$ est sous l'axe horizontal.`, 1: String.raw`$-\frac{\sqrt3}{2}=\cos\left(-\frac{5\pi}{6}\right)$ : tu as calculé le cosinus au lieu du sinus.`, 3: String.raw`Deux erreurs : l'angle de référence est $\frac\pi6$ (sinus $\frac12$, pas $\frac{\sqrt3}2$) et le signe doit être négatif.` },
      rule: String.raw`$\sin(-x)=-\sin x$ et $\sin(\pi-x)=\sin x$`, level: 2 },
    { id: 'm2-q-007', q: String.raw`Que vaut $\cos\frac{17\pi}{4}$ ?`, choices: [String.raw`$-\frac{\sqrt2}{2}$`, String.raw`$0$`, String.raw`$\frac{\sqrt2}{2}$`, String.raw`$\frac12$`], answer: 2,
      topic: "Périodicité du cosinus", sec: 'm2-s-cercle',
      steps: [
        String.raw`Notion : ajouter ou retirer un tour complet ($2\pi$) ramène au même point du cercle, donc $\cos(x+2k\pi)=\cos x$ pour tout entier $k$ (périodicité).`,
        String.raw`On cherche le plus grand multiple de $2\pi=\frac{8\pi}4$ contenu dans $\frac{17\pi}4$ : c'est $\frac{16\pi}{4}=4\pi$ (deux tours). Donc $\frac{17\pi}{4}=4\pi+\frac\pi4$.`,
        String.raw`$\cos\frac{17\pi}{4}=\cos\frac\pi4=\frac{\sqrt2}{2}$.`
      ],
      explain: String.raw`Le cosinus est $2\pi$-périodique : on peut retirer autant de tours complets ($2\pi$) qu'on veut sans changer sa valeur. Or $\frac{17\pi}{4}=\frac{16\pi}{4}+\frac\pi4=4\pi+\frac\pi4$, c'est-à-dire deux tours plus $\frac\pi4$. Donc $\cos\frac{17\pi}{4}=\cos\frac\pi4=\frac{\sqrt2}{2}$.`,
      why: { 0: String.raw`Le signe moins viendrait d'un retrait de $\pi$ (demi-tour), interdit : on ne retire que des multiples de $2\pi$. $\frac{17\pi}4-4\pi=\frac\pi4$, point du 1er quadrant.`, 1: String.raw`Le cosinus ne s'annule qu'en $\frac\pi2+k\pi$ ; $\frac{17\pi}{4}$ n'est pas de cette forme, l'angle réduit $\frac\pi4$ n'est pas en haut ou en bas du cercle.`, 3: String.raw`$\frac12=\cos\frac\pi3$ : l'angle réduit est $\frac\pi4$, dont le cosinus vaut $\frac{\sqrt2}2$.` },
      rule: String.raw`$\cos(x+2k\pi)=\cos x$ pour tout entier $k$`, level: 2 },
    { id: 'm2-q-008', q: String.raw`Quelle est la mesure principale (dans $]-\pi,\pi]$) de $\frac{29\pi}{6}$ ?`, choices: [String.raw`$-\frac{\pi}{6}$`, String.raw`$\frac{5\pi}{6}$`, String.raw`$\frac{\pi}{6}$`, String.raw`$-\frac{7\pi}{6}$`], answer: 1,
      topic: "Mesure principale", sec: 'm2-s-cercle',
      steps: [
        String.raw`Notion : un angle a une infinité de mesures, qui diffèrent de multiples de $2\pi$. La mesure principale est celle qui appartient à $]-\pi,\pi]$.`,
        String.raw`En sixièmes : $2\pi=\frac{12\pi}{6}$. On retire deux tours : $\frac{29\pi}{6}-\frac{24\pi}{6}=\frac{5\pi}{6}$.`,
        String.raw`$-\pi\lt\frac{5\pi}{6}\leq\pi$ ✔ (car $\frac56\lt1$) : la mesure principale est $\frac{5\pi}6$.`
      ],
      explain: String.raw`La mesure principale est l'unique représentant de l'angle dans $]-\pi,\pi]$ ; on l'obtient en retirant un nombre entier de tours ($2\pi=\frac{12\pi}{6}$). Ici $\frac{29\pi}{6}=\frac{24\pi}{6}+\frac{5\pi}{6}=4\pi+\frac{5\pi}6$, soit deux tours plus $\frac{5\pi}6$. Comme $\frac{5\pi}{6}\approx2{,}62$ est bien entre $-\pi$ et $\pi$, c'est la mesure principale.`,
      why: { 0: String.raw`$\frac{29\pi}6-5\pi=-\frac\pi6$, mais $5\pi$ correspond à deux tours et demi : retirer un demi-tour envoie sur le point diamétralement opposé.`, 2: String.raw`$\frac{29\pi}{6}-\frac{\pi}{6}=\frac{14\pi}{3}$ n'est pas un multiple de $2\pi$ : $\frac\pi6$ n'est pas le même point.`, 3: String.raw`$-\frac{7\pi}6=\frac{5\pi}6-2\pi$ représente bien le même point, mais $-\frac{7\pi}{6}\lt-\pi$ : il n'est pas dans $]-\pi,\pi]$.` },
      rule: String.raw`Mesure principale : l'unique $\theta+2k\pi$ appartenant à $]-\pi,\pi]$`, level: 2 },
    { id: 'm2-q-009', q: String.raw`$\sin(\pi-x)$ est égal à :`, choices: [String.raw`$-\sin x$`, String.raw`$\cos x$`, String.raw`$\sin x$`, String.raw`$-\cos x$`], answer: 2,
      topic: "Angles associés", sec: 'm2-s-associes',
      steps: [
        String.raw`Notion : les angles associés ($-x$, $\pi-x$, $\pi+x$, $\frac\pi2-x$, …) correspondent à des symétries du cercle ; on lit sur le dessin ce que deviennent les coordonnées $(\cos x,\sin x)$.`,
        String.raw`$\pi-x$ : symétrie par rapport à l'axe vertical. L'ordonnée est conservée, l'abscisse change de signe.`,
        String.raw`Donc $\sin(\pi-x)=\sin x$. Vérification par la formule d'addition : $\sin\pi\cos x-\cos\pi\sin x=0\times\cos x-(-1)\sin x=\sin x$ ✔.`
      ],
      explain: String.raw`Sur le cercle trigonométrique, le point associé à $\pi-x$ est le symétrique du point associé à $x$ par rapport à l'axe des ordonnées. Cette symétrie conserve l'ordonnée (le sinus) et change le signe de l'abscisse (le cosinus). Donc $\sin(\pi-x)=\sin x$ et $\cos(\pi-x)=-\cos x$.`,
      why: { 0: String.raw`$-\sin x$ est $\sin(-x)$ ou $\sin(\pi+x)$ : confusion entre $\pi-x$ (symétrie d'axe vertical) et $\pi+x$ (symétrie centrale).`, 1: String.raw`$\cos x=\sin\left(\frac\pi2-x\right)$ : confusion avec l'angle complémentaire $\frac\pi2-x$.`, 3: String.raw`$-\cos x=\cos(\pi-x)$ : c'est le cosinus qui change de signe ; le sinus, lui, ne devient pas un cosinus.` },
      rule: String.raw`$\sin(\pi-x)=\sin x$, $\cos(\pi-x)=-\cos x$`, level: 1 },
    { id: 'm2-q-010', q: String.raw`$\cos\left(\frac{\pi}{2}+x\right)$ est égal à :`, choices: [String.raw`$\sin x$`, String.raw`$-\sin x$`, String.raw`$\cos x$`, String.raw`$-\cos x$`], answer: 1,
      topic: "Angles associés", sec: 'm2-s-associes',
      steps: [
        String.raw`Notion : formule d'addition $\cos(a+b)=\cos a\cos b-\sin a\sin b$ (« cos cos, sin sin, signe contraire »).`,
        String.raw`Avec $a=\frac\pi2$ et $b=x$ : $\cos\left(\frac\pi2+x\right)=\cos\frac\pi2\cos x-\sin\frac\pi2\sin x$.`,
        String.raw`$\cos\frac\pi2=0$ et $\sin\frac\pi2=1$, donc le résultat vaut $0-\sin x=-\sin x$. Test en $x=\frac\pi2$ : $\cos\pi=-1=-\sin\frac\pi2$ ✔.`
      ],
      explain: String.raw`On applique la formule d'addition $\cos(a+b)=\cos a\cos b-\sin a\sin b$ avec $a=\frac\pi2$ et $b=x$. Comme $\cos\frac\pi2=0$ et $\sin\frac\pi2=1$, il reste $\cos\left(\frac\pi2+x\right)=0\times\cos x-1\times\sin x=-\sin x$. Géométriquement, ajouter $\frac\pi2$ fait tourner le point d'un quart de tour : $(\cos x,\sin x)$ devient $(-\sin x,\cos x)$.`,
      why: { 0: String.raw`$\sin x=\cos\left(\frac\pi2-x\right)$ : avec $+x$ le signe change. Test en $x=\frac\pi2$ : $\cos\pi=-1$, alors que $\sin\frac\pi2=1$.`, 2: String.raw`Ajouter $\frac\pi2$ n'est pas ajouter un tour complet : le cosinus ne se conserve pas, cos et sin s'échangent (avec un signe).`, 3: String.raw`$-\cos x=\cos(\pi+x)$ : c'est l'effet d'un demi-tour ($\pi$), pas d'un quart de tour ($\frac\pi2$).` },
      rule: String.raw`$\cos\left(\frac\pi2+x\right)=-\sin x$ et $\sin\left(\frac\pi2+x\right)=\cos x$`, level: 2 },
    { id: 'm2-q-011', q: String.raw`$\tan(\pi+x)$ est égal à :`, choices: [String.raw`$\tan x$`, String.raw`$-\tan x$`, String.raw`$\frac{1}{\tan x}$`], answer: 0,
      topic: "Périodicité de la tangente", sec: 'm2-s-associes',
      steps: [
        String.raw`Notion : $\tan x=\frac{\sin x}{\cos x}$. Le point de $\pi+x$ est le symétrique de celui de $x$ par rapport au centre du cercle (demi-tour).`,
        String.raw`La symétrie centrale change le signe des deux coordonnées : $\cos(\pi+x)=-\cos x$ et $\sin(\pi+x)=-\sin x$.`,
        String.raw`$\tan(\pi+x)=\frac{-\sin x}{-\cos x}=\frac{\sin x}{\cos x}=\tan x$ : la tangente a pour période $\pi$.`
      ],
      explain: String.raw`Le point associé à $\pi+x$ est le symétrique de celui de $x$ par rapport à l'origine : ses deux coordonnées changent de signe, $\cos(\pi+x)=-\cos x$ et $\sin(\pi+x)=-\sin x$. Dans le quotient, les deux signes moins se compensent : $\tan(\pi+x)=\frac{-\sin x}{-\cos x}=\tan x$. C'est pourquoi la tangente est périodique de période $\pi$ (et non $2\pi$).`,
      why: { 1: String.raw`$-\tan x$ est $\tan(-x)$ ou $\tan(\pi-x)$ : tu as changé le signe d'une seule coordonnée au lieu des deux.`, 2: String.raw`$\frac{1}{\tan x}=\tan\left(\frac\pi2-x\right)$ : confusion avec l'angle complémentaire, où sinus et cosinus s'échangent.` },
      rule: String.raw`$\tan(x+\pi)=\tan x$ : la tangente est $\pi$-périodique`, level: 2 },
    { id: 'm2-q-012', q: String.raw`Simplifier $\cos(\pi-x)-\sin\left(\frac{\pi}{2}-x\right)$.`, choices: [String.raw`$0$`, String.raw`$2\cos x$`, String.raw`$-2\cos x$`, String.raw`$-2\sin x$`], answer: 2,
      topic: "Angles associés", sec: 'm2-s-associes',
      steps: [
        String.raw`Notion : les angles associés permettent de réécrire le cosinus ou le sinus d'un angle comme $\pm\cos x$ ou $\pm\sin x$ ; on traite chaque terme séparément.`,
        String.raw`$\cos(\pi-x)=-\cos x$ (symétrie par rapport à l'axe vertical : l'abscisse change de signe).`,
        String.raw`$\sin\left(\frac\pi2-x\right)=\cos x$ (angle complémentaire : la symétrie par rapport à la droite $y=x$ échange abscisse et ordonnée).`,
        String.raw`Total : $-\cos x-\cos x=-2\cos x$. Test en $x=0$ : $\cos\pi-\sin\frac\pi2=-1-1=-2$ ✔.`
      ],
      explain: String.raw`On simplifie chaque terme avec les angles associés. D'une part $\cos(\pi-x)=-\cos x$ (symétrie par rapport à l'axe vertical : l'abscisse change de signe). D'autre part $\sin\left(\frac\pi2-x\right)=\cos x$ (angles complémentaires : sinus et cosinus s'échangent). L'expression vaut donc $-\cos x-\cos x=-2\cos x$.`,
      why: { 0: String.raw`On obtient 0 en croyant que $\cos(\pi-x)=\cos x$ ; or le point de $\pi-x$ a une abscisse opposée : $\cos(\pi-x)=-\cos x$.`, 1: String.raw`Erreur de signe sur le premier terme : $\cos(\pi-x)=-\cos x$, et on retranche ensuite $\cos x$, d'où $-2\cos x$.`, 3: String.raw`$\sin\left(\frac\pi2-x\right)=\cos x$ et non $\sin x$ : pour l'angle complémentaire, sinus et cosinus s'échangent.` },
      rule: String.raw`$\cos(\pi-x)=-\cos x$ et $\sin\left(\frac\pi2-x\right)=\cos x$`, level: 2 },
    { id: 'm2-q-013', q: String.raw`$\cos(a+b)$ est égal à :`, choices: [String.raw`$\cos a\cos b+\sin a\sin b$`, String.raw`$\cos a\cos b-\sin a\sin b$`, String.raw`$\cos a+\cos b$`, String.raw`$\sin a\cos b+\cos a\sin b$`], answer: 1,
      topic: "Formules d'addition", sec: 'm2-s-addition',
      steps: [
        String.raw`Notion : les formules d'addition expriment le cosinus (ou le sinus) d'une somme d'angles à partir des cosinus et sinus de chaque angle. Pour le cosinus : « cos cos, sin sin, signe contraire ».`,
        String.raw`$\cos(a+b)=\cos a\cos b-\sin a\sin b$.`,
        String.raw`Tests : avec $a=b=\frac\pi2$, $0\times0-1\times1=-1=\cos\pi$ ✔ ; avec $b=0$, $\cos a\times1-\sin a\times0=\cos a$ ✔.`
      ],
      explain: String.raw`La formule d'addition du cosinus est $\cos(a+b)=\cos a\cos b-\sin a\sin b$ : on associe les cosinus ensemble, les sinus ensemble, et on met le signe contraire de celui de l'opération (moins pour une somme). On la teste facilement : avec $b=0$ on retrouve $\cos a$, et avec $a=b=\frac\pi2$ on trouve $0-1=-1=\cos\pi$.`,
      why: { 0: String.raw`$\cos a\cos b+\sin a\sin b=\cos(a-b)$ : pour le cosinus, le signe est contraire à celui de l'opération. Test $a=b=\frac\pi2$ : on obtiendrait $1$ au lieu de $\cos\pi=-1$.`, 2: String.raw`Le cosinus n'est pas additif : avec $a=b=0$, on aurait $\cos0=1$ d'un côté et $1+1=2$ de l'autre.`, 3: String.raw`$\sin a\cos b+\cos a\sin b=\sin(a+b)$ : confusion entre les formules du sinus et du cosinus.` },
      rule: String.raw`$\cos(a\pm b)=\cos a\cos b\mp\sin a\sin b$`, level: 1 },
    { id: 'm2-q-014', q: String.raw`$\sin(a-b)$ est égal à :`, choices: [String.raw`$\sin a\cos b+\cos a\sin b$`, String.raw`$\cos a\cos b+\sin a\sin b$`, String.raw`$\sin a\cos b-\cos a\sin b$`, String.raw`$\cos a\sin b-\sin a\cos b$`], answer: 2,
      topic: "Formules d'addition", sec: 'm2-s-addition',
      steps: [
        String.raw`Notion : formule d'addition du sinus, $\sin(a+b)=\sin a\cos b+\cos a\sin b$ (« sin cos, cos sin, même signe »).`,
        String.raw`On remplace $b$ par $-b$ : $\sin(a-b)=\sin a\cos(-b)+\cos a\sin(-b)$.`,
        String.raw`Parité : $\cos(-b)=\cos b$ et $\sin(-b)=-\sin b$, d'où $\sin(a-b)=\sin a\cos b-\cos a\sin b$. Test $a=b$ : $\sin0=0$ ✔.`
      ],
      explain: String.raw`On part de $\sin(a+b)=\sin a\cos b+\cos a\sin b$ (« sin cos, cos sin, même signe ») et on remplace $b$ par $-b$. Comme le cosinus est pair ($\cos(-b)=\cos b$) et le sinus impair ($\sin(-b)=-\sin b$), on obtient $\sin(a-b)=\sin a\cos b-\cos a\sin b$. Test : avec $a=b$, on trouve bien $\sin0=0$.`,
      why: { 0: String.raw`C'est $\sin(a+b)$ : en remplaçant $b$ par $-b$, le terme $\cos a\sin b$ change de signe.`, 1: String.raw`C'est $\cos(a-b)$ : confusion entre les formules du cosinus et du sinus.`, 3: String.raw`$\cos a\sin b-\sin a\cos b=\sin(b-a)=-\sin(a-b)$ : l'ordre compte, c'est $\sin a$ qui doit porter le signe $+$.` },
      rule: String.raw`$\sin(a\pm b)=\sin a\cos b\pm\cos a\sin b$`, level: 2 },
    { id: 'm2-q-015', q: String.raw`Que vaut $\cos\frac{\pi}{12}$ ? (indice : $\frac{\pi}{12}=\frac\pi3-\frac\pi4$)`, choices: [String.raw`$\frac{\sqrt6-\sqrt2}{4}$`, String.raw`$\frac12-\frac{\sqrt2}{2}$`, String.raw`$\frac{\sqrt6+\sqrt2}{4}$`, String.raw`$\frac{\sqrt6+\sqrt2}{2}$`], answer: 2,
      topic: "Formules d'addition", sec: 'm2-s-addition',
      steps: [
        String.raw`Notion : pour un angle non remarquable, on l'écrit comme somme ou différence d'angles remarquables et on applique une formule d'addition, ici $\cos(a-b)=\cos a\cos b+\sin a\sin b$.`,
        String.raw`$\frac\pi3-\frac\pi4=\frac{4\pi-3\pi}{12}=\frac\pi{12}$ ✔. On remplace : $\cos\frac\pi{12}=\cos\frac\pi3\cos\frac\pi4+\sin\frac\pi3\sin\frac\pi4$.`,
        String.raw`$=\frac12\times\frac{\sqrt2}2+\frac{\sqrt3}2\times\frac{\sqrt2}2=\frac{\sqrt2}4+\frac{\sqrt6}4=\frac{\sqrt6+\sqrt2}4$.`,
        String.raw`Contrôle : $\frac{2{,}449+1{,}414}{4}\approx0{,}966$, valeur de $\cos15^\circ$ ✔.`
      ],
      explain: String.raw`On utilise $\frac\pi{12}=\frac\pi3-\frac\pi4$ et la formule $\cos(a-b)=\cos a\cos b+\sin a\sin b$. Cela donne $\frac12\times\frac{\sqrt2}{2}+\frac{\sqrt3}{2}\times\frac{\sqrt2}{2}=\frac{\sqrt2}{4}+\frac{\sqrt6}{4}=\frac{\sqrt6+\sqrt2}{4}$. Contrôle : la valeur $\approx0{,}966$ est proche de 1, comme il se doit pour un petit angle ($15^\circ$).`,
      why: { 0: String.raw`$\frac{\sqrt6-\sqrt2}{4}=\sin\frac\pi{12}$ : on obtient cette valeur en mettant un signe $-$ dans $\cos(a-b)$, alors que c'est $+$ (signe contraire de l'opération).`, 1: String.raw`$\cos(a-b)\neq\cos a-\cos b$ : le cosinus n'est pas linéaire. D'ailleurs $\frac12-\frac{\sqrt2}{2}\lt0$, impossible pour un angle du 1er quadrant.`, 3: String.raw`Tu as divisé par 2 au lieu de 4 : $\frac{\sqrt3}{2}\times\frac{\sqrt2}{2}=\frac{\sqrt6}{4}$. Ta valeur dépasse 1, impossible pour un cosinus.` },
      rule: String.raw`$\cos(a-b)=\cos a\cos b+\sin a\sin b$`, level: 2 },
    { id: 'm2-q-016', q: String.raw`$\sin 2a$ est égal à :`, choices: [String.raw`$2\sin a$`, String.raw`$\sin^2a$`, String.raw`$2\sin a\cos a$`, String.raw`$\cos^2a-\sin^2a$`], answer: 2,
      topic: "Formules de duplication", sec: 'm2-s-addition',
      steps: [
        String.raw`Notion : les formules de duplication sont les formules d'addition appliquées à deux angles égaux ($b=a$).`,
        String.raw`$\sin(a+a)=\sin a\cos a+\cos a\sin a=2\sin a\cos a$.`,
        String.raw`Contrôle avec $a=\frac\pi4$ : $\sin\frac\pi2=1$ et $2\times\frac{\sqrt2}2\times\frac{\sqrt2}2=1$ ✔.`
      ],
      explain: String.raw`La formule de duplication s'obtient en prenant $b=a$ dans $\sin(a+b)=\sin a\cos b+\cos a\sin b$ : $\sin2a=\sin a\cos a+\cos a\sin a=2\sin a\cos a$. Contrôle avec $a=\frac\pi4$ : $\sin\frac\pi2=1$ et $2\times\frac{\sqrt2}2\times\frac{\sqrt2}2=2\times\frac24=1$. À ne pas confondre avec $\sin^2a$, qui est le carré du sinus, ni avec $2\sin a$ : le sinus n'est pas linéaire.`,
      why: { 0: String.raw`$2\sin a$ revient à croire le sinus linéaire ($\sin(2a)=2\sin a$). Contre-exemple $a=\frac\pi2$ : $\sin\pi=0$ mais $2\sin\frac\pi2=2$.`, 1: String.raw`$\sin^2a=(\sin a)^2$ est le carré du sinus, pas le sinus de l'angle double : confusion de notation. Avec $a=\frac\pi4$ : $\frac12\neq1$.`, 3: String.raw`$\cos^2a-\sin^2a=\cos2a$ : c'est la duplication du cosinus.` },
      rule: String.raw`$\sin2a=2\sin a\cos a$`, level: 1 },
    { id: 'm2-q-017', q: String.raw`Laquelle de ces expressions n'est PAS égale à $\cos 2a$ ?`, choices: [String.raw`$1-2\sin^2a$`, String.raw`$2\cos^2a-1$`, String.raw`$\cos^2a-\sin^2a$`, String.raw`$1-2\cos^2a$`], answer: 3,
      topic: "Formules de duplication", sec: 'm2-s-addition',
      steps: [
        String.raw`Notion : $\cos2a=\cos(a+a)=\cos a\cos a-\sin a\sin a=\cos^2a-\sin^2a$ ; grâce à $\cos^2a+\sin^2a=1$, on en déduit deux autres écritures.`,
        String.raw`En remplaçant $\sin^2a=1-\cos^2a$ : $\cos2a=\cos^2a-(1-\cos^2a)=2\cos^2a-1$. En remplaçant $\cos^2a=1-\sin^2a$ : $\cos2a=1-2\sin^2a$.`,
        String.raw`L'intrus : $1-2\cos^2a=-(2\cos^2a-1)=-\cos2a$. Test $a=0$ : $\cos0=1$ mais $1-2\cos^20=-1$ ✔.`
      ],
      explain: String.raw`Il y a trois écritures de $\cos2a$ : $\cos^2a-\sin^2a$ (formule d'addition avec $b=a$), puis $2\cos^2a-1$ en remplaçant $\sin^2a$ par $1-\cos^2a$, et $1-2\sin^2a$ en remplaçant $\cos^2a$ par $1-\sin^2a$. L'expression $1-2\cos^2a=-(2\cos^2a-1)$ vaut $-\cos2a$ : contrôle en $a=0$, $\cos0=1$ mais $1-2=-1$.`,
      why: { 0: String.raw`$1-2\sin^2a$ est bien égal à $\cos2a$ : on l'obtient en remplaçant $\cos^2a$ par $1-\sin^2a$ dans $\cos^2a-\sin^2a$. Ce n'est donc pas l'intrus.`, 1: String.raw`$2\cos^2a-1$ est bien égal à $\cos2a$ (on remplace $\sin^2a$ par $1-\cos^2a$) : ce n'est pas l'intrus.`, 2: String.raw`$\cos^2a-\sin^2a$ est la forme de base de $\cos2a$ (addition avec $b=a$) : ce n'est pas l'intrus.` },
      rule: String.raw`$\cos2a=\cos^2a-\sin^2a=2\cos^2a-1=1-2\sin^2a$`, level: 2 },
    { id: 'm2-q-018', q: String.raw`Linéariser $\sin^2x$.`, choices: [String.raw`$\frac{1+\cos 2x}{2}$`, String.raw`$\frac{1-\cos 2x}{2}$`, String.raw`$\frac{1-\sin 2x}{2}$`, String.raw`$1-\cos^2(2x)$`], answer: 1,
      topic: "Linéarisation", sec: 'm2-s-transfo',
      steps: [
        String.raw`Notion : linéariser, c'est écrire une puissance comme $\sin^2x$ sans carré, à l'aide de $\cos(2x)$. C'est utile pour intégrer ou pour étudier un signal.`,
        String.raw`On part de la duplication $\cos2x=1-2\sin^2x$.`,
        String.raw`On isole $\sin^2x$ : $2\sin^2x=1-\cos2x$, donc $\sin^2x=\frac{1-\cos2x}{2}$.`,
        String.raw`Contrôle en $x=\frac\pi2$ : $\sin^2\frac\pi2=1$ et $\frac{1-\cos\pi}{2}=\frac{1+1}{2}=1$ ✔.`
      ],
      explain: String.raw`Linéariser, c'est remplacer une puissance de $\sin$ ou $\cos$ par une expression du premier degré en $\cos(kx)$. On part de $\cos2x=1-2\sin^2x$ et on isole $\sin^2x$ : $2\sin^2x=1-\cos2x$, donc $\sin^2x=\frac{1-\cos2x}{2}$. Contrôle en $x=0$ : $\sin^20=0$ et $\frac{1-1}{2}=0$.`,
      why: { 0: String.raw`$\frac{1+\cos2x}{2}=\cos^2x$ : on l'obtient en partant de $\cos2x=2\cos^2x-1$. En $x=0$, elle vaut 1 alors que $\sin^20=0$.`, 2: String.raw`Confusion entre $\cos2x$ et $\sin2x$ : la linéarisation des carrés fait intervenir $\cos2x$ (formule $\cos2x=1-2\sin^2x$).`, 3: String.raw`$1-\cos^2(2x)=\sin^2(2x)$ : c'est encore un carré (non linéarisé), et de l'angle double au lieu de $x$.` },
      rule: String.raw`$\sin^2x=\frac{1-\cos2x}{2}$ et $\cos^2x=\frac{1+\cos2x}{2}$`, level: 2 },
    { id: 'm2-q-019', q: String.raw`$\cos a\cos b$ est égal à :`, choices: [String.raw`$\frac12\left[\cos(a+b)-\cos(a-b)\right]$`, String.raw`$\cos(ab)$`, String.raw`$\frac12\left[\sin(a+b)+\sin(a-b)\right]$`, String.raw`$\frac12\left[\cos(a-b)+\cos(a+b)\right]$`], answer: 3,
      topic: "Produit en somme", sec: 'm2-s-transfo',
      steps: [
        String.raw`Notion : les formules « produit en somme » transforment un produit de cosinus/sinus en somme ; on les retrouve en additionnant ou soustrayant deux formules d'addition.`,
        String.raw`$\cos(a+b)=\cos a\cos b-\sin a\sin b$ et $\cos(a-b)=\cos a\cos b+\sin a\sin b$.`,
        String.raw`Somme membre à membre : $\cos(a+b)+\cos(a-b)=2\cos a\cos b$ (les $\sin a\sin b$ s'éliminent).`,
        String.raw`On divise par 2 : $\cos a\cos b=\frac12[\cos(a-b)+\cos(a+b)]$. Test $a=b=0$ : $1=\frac12(1+1)$ ✔.`
      ],
      explain: String.raw`On écrit les deux formules d'addition : $\cos(a+b)=\cos a\cos b-\sin a\sin b$ et $\cos(a-b)=\cos a\cos b+\sin a\sin b$. En les additionnant, les termes en $\sin a\sin b$ s'éliminent et il reste $\cos(a+b)+\cos(a-b)=2\cos a\cos b$. On divise par 2 pour obtenir la formule.`,
      why: { 0: String.raw`En soustrayant les deux formules au lieu de les additionner, on obtient $\cos(a+b)-\cos(a-b)=-2\sin a\sin b$ : cette expression vaut donc $-\sin a\sin b$.`, 1: String.raw`Aucune formule ne fait apparaître le produit des angles $ab$ : les angles s'additionnent ou se soustraient. Test $a=b=\frac\pi2$ : $0\neq\cos\frac{\pi^2}{4}$.`, 2: String.raw`$\frac12[\sin(a+b)+\sin(a-b)]=\sin a\cos b$ : c'est la formule du produit sinus × cosinus.` },
      rule: String.raw`$\cos a\cos b=\frac12[\cos(a-b)+\cos(a+b)]$`, level: 2 },
    { id: 'm2-q-020', q: String.raw`$\sin p+\sin q$ est égal à :`, choices: [String.raw`$2\cos\frac{p+q}{2}\sin\frac{p-q}{2}$`, String.raw`$2\sin\frac{p+q}{2}\cos\frac{p-q}{2}$`, String.raw`$\sin(p+q)$`, String.raw`$2\sin\frac{p+q}{2}\sin\frac{p-q}{2}$`], answer: 1,
      topic: "Somme en produit", sec: 'm2-s-transfo',
      steps: [
        String.raw`Notion : les formules « somme en produit » transforment $\sin p+\sin q$ en produit, ce qui sert à factoriser ou à résoudre des équations. On les retrouve à partir des formules produit en somme.`,
        String.raw`On sait que $\sin(a+b)+\sin(a-b)=2\sin a\cos b$. On pose $p=a+b$ et $q=a-b$, soit $a=\frac{p+q}2$ et $b=\frac{p-q}2$.`,
        String.raw`D'où $\sin p+\sin q=2\sin\frac{p+q}2\cos\frac{p-q}2$. Contrôle $p=q$ : $2\sin p\cos0=2\sin p$ ✔.`
      ],
      explain: String.raw`On part de $\sin(a+b)+\sin(a-b)=2\sin a\cos b$ et on pose $p=a+b$, $q=a-b$, c'est-à-dire $a=\frac{p+q}{2}$ et $b=\frac{p-q}{2}$ : on obtient $\sin p+\sin q=2\sin\frac{p+q}2\cos\frac{p-q}2$. Contrôle avec $p=q$ : le membre de gauche vaut $2\sin p$ et la formule donne $2\sin p\cos0=2\sin p$.`,
      why: { 0: String.raw`$2\cos\frac{p+q}2\sin\frac{p-q}2=\sin p-\sin q$ : avec $p=q$ elle s'annule, alors que $\sin p+\sin p=2\sin p$. Tu as échangé cos et sin.`, 2: String.raw`Le sinus n'est pas additif : avec $p=q=\frac\pi2$, $\sin p+\sin q=2$ mais $\sin\pi=0$.`, 3: String.raw`Avec $p=q$, $\sin\frac{p-q}2=\sin0=0$ : cette expression s'annule au lieu de valoir $2\sin p$.` },
      rule: String.raw`$\sin p+\sin q=2\sin\frac{p+q}2\cos\frac{p-q}2$`, level: 3 },
    { id: 'm2-q-021', q: String.raw`$\sqrt3\cos x+\sin x$ est égal à :`, choices: [String.raw`$2\cos\left(x-\frac{\pi}{6}\right)$`, String.raw`$2\cos\left(x-\frac{\pi}{3}\right)$`, String.raw`$4\cos\left(x-\frac{\pi}{6}\right)$`, String.raw`$2\cos\left(x+\frac{\pi}{6}\right)$`], answer: 0,
      topic: "Forme R cos(x − φ)", sec: 'm2-s-transfo',
      steps: [
        String.raw`Notion : toute combinaison $a\cos x+b\sin x$ est un seul signal sinusoïdal $R\cos(x-\varphi)$, d'amplitude $R=\sqrt{a^2+b^2}$ et de déphasage $\varphi$ défini par $\cos\varphi=\frac aR$ et $\sin\varphi=\frac bR$.`,
        String.raw`Ici $a=\sqrt3$ et $b=1$ : $R=\sqrt{(\sqrt3)^2+1^2}=\sqrt4=2$.`,
        String.raw`$\cos\varphi=\frac{\sqrt3}2$ et $\sin\varphi=\frac12$ : l'angle correspondant (1er quadrant) est $\varphi=\frac\pi6$.`,
        String.raw`Donc $\sqrt3\cos x+\sin x=2\cos\left(x-\frac\pi6\right)$. Contrôle en $x=0$ : $\sqrt3=2\times\frac{\sqrt3}2$ ✔.`
      ],
      explain: String.raw`On cherche $R\gt0$ et $\varphi$ tels que $\sqrt3\cos x+\sin x=R\cos(x-\varphi)=R\cos\varphi\cos x+R\sin\varphi\sin x$. Par identification, $R\cos\varphi=\sqrt3$ et $R\sin\varphi=1$, d'où $R=\sqrt{3+1}=2$, $\cos\varphi=\frac{\sqrt3}2$ et $\sin\varphi=\frac12$, donc $\varphi=\frac\pi6$. Cette mise en forme sert constamment en électricité pour regrouper deux signaux de même pulsation en un seul.`,
      why: { 1: String.raw`$\varphi=\frac\pi3$ a $\cos\varphi=\frac12$ et $\sin\varphi=\frac{\sqrt3}2$ : tu as échangé les rôles. Ici $\cos\varphi=\frac aR=\frac{\sqrt3}2$, donc $\varphi=\frac\pi6$.`, 2: String.raw`$R=\sqrt{a^2+b^2}=\sqrt{3+1}=2$ : tu as oublié la racine carrée ($a^2+b^2=4$).`, 3: String.raw`$2\cos\left(x+\frac\pi6\right)=\sqrt3\cos x-\sin x$ : le signe de $\varphi$ doit être celui de $\sin\varphi=\frac bR=\frac12\gt0$.` },
      rule: String.raw`$a\cos x+b\sin x=R\cos(x-\varphi)$ avec $R=\sqrt{a^2+b^2}$, $\cos\varphi=\frac aR$, $\sin\varphi=\frac bR$`, level: 2 },
    { id: 'm2-q-022', q: String.raw`Avec $t=\tan\frac{x}{2}$, $\sin x$ s'écrit :`, choices: [String.raw`$\frac{1-t^2}{1+t^2}$`, String.raw`$\frac{2t}{1-t^2}$`, String.raw`$\frac{2t}{1+t^2}$`, String.raw`$\frac{t}{1+t^2}$`], answer: 2,
      topic: "Tangente de l'angle moitié", sec: 'm2-s-addition',
      steps: [
        String.raw`Notion : les formules en $t=\tan\frac x2$ expriment $\cos x$, $\sin x$, $\tan x$ comme des fractions en $t$ (utile pour certaines intégrales). Elles viennent de la duplication appliquée à l'angle $\frac x2$.`,
        String.raw`$\sin x=2\sin\frac x2\cos\frac x2=2\tan\frac x2\cos^2\frac x2=2t\cos^2\frac x2$ (car $\sin\frac x2=\tan\frac x2\times\cos\frac x2$).`,
        String.raw`Or $1+\tan^2u=\frac1{\cos^2u}$, donc $\cos^2\frac x2=\frac1{1+t^2}$ et $\sin x=\frac{2t}{1+t^2}$. Test $x=\frac\pi2$ : $t=1$ et $\frac{2}{2}=1=\sin\frac\pi2$ ✔.`
      ],
      explain: String.raw`On applique la duplication à l'angle $\frac x2$ : $\sin x=2\sin\frac x2\cos\frac x2$. On fait apparaître la tangente en écrivant $\sin\frac x2=\tan\frac x2\cos\frac x2$, d'où $\sin x=2t\cos^2\frac x2$. Enfin $\cos^2\frac x2=\frac{1}{1+\tan^2\frac x2}=\frac1{1+t^2}$, ce qui donne $\sin x=\frac{2t}{1+t^2}$. En pratique, on contrôle la formule avec $x=\frac\pi2$, pour lequel $t=1$ et $\sin x=1$.`,
      why: { 0: String.raw`$\frac{1-t^2}{1+t^2}=\cos x$ : confusion entre les formules de $\cos x$ et de $\sin x$. Test $x=\frac\pi2$ ($t=1$) : on trouverait 0 au lieu de 1.`, 1: String.raw`$\frac{2t}{1-t^2}=\tan x$ (quotient $\frac{\sin x}{\cos x}$) : le dénominateur de $\sin x$ est $1+t^2$.`, 3: String.raw`Il manque le facteur 2 de la duplication $\sin x=2\sin\frac x2\cos\frac x2$. Test $t=1$ : $\frac12\neq\sin\frac\pi2=1$.` },
      rule: String.raw`Avec $t=\tan\frac x2$ : $\cos x=\frac{1-t^2}{1+t^2}$, $\sin x=\frac{2t}{1+t^2}$, $\tan x=\frac{2t}{1-t^2}$`, level: 3 },
    { id: 'm2-q-023', q: String.raw`Solutions réelles de $\cos x=\frac12$ ($k\in\mathbb{Z}$) :`, choices: [String.raw`$x=\frac{\pi}{3}+2k\pi$ ou $x=\frac{2\pi}{3}+2k\pi$`, String.raw`$x=\frac{\pi}{3}+2k\pi$ ou $x=-\frac{\pi}{3}+2k\pi$`, String.raw`$x=\pm\frac{\pi}{6}+2k\pi$`, String.raw`$x=\frac{\pi}{3}+k\pi$`], answer: 1,
      topic: "Équation cos x = cos a", sec: 'm2-s-equations',
      steps: [
        String.raw`Notion : $\cos x$ est l'abscisse du point du cercle. Une droite verticale coupe le cercle en deux points symétriques par rapport à l'axe horizontal, d'où : $\cos x=\cos a\Leftrightarrow x=\pm a+2k\pi$.`,
        String.raw`On écrit le second membre comme un cosinus remarquable : $\frac12=\cos\frac\pi3$.`,
        String.raw`Donc $x=\frac\pi3+2k\pi$ ou $x=-\frac\pi3+2k\pi$, $k\in\mathbb Z$.`
      ],
      explain: String.raw`On reconnaît une valeur remarquable : $\frac12=\cos\frac\pi3$. Deux points du cercle ont une abscisse égale à $\frac12$ : celui de $\frac\pi3$ et son symétrique par rapport à l'axe horizontal, celui de $-\frac\pi3$. En ajoutant les tours complets : $\cos x=\frac12\Leftrightarrow x=\frac\pi3+2k\pi$ ou $x=-\frac\pi3+2k\pi$, $k\in\mathbb Z$.`,
      why: { 0: String.raw`La famille $\pi-a$ est celle du sinus (même ordonnée). Pour le cosinus, c'est $-a$ ; d'ailleurs $\cos\frac{2\pi}{3}=-\frac12$.`, 2: String.raw`$\cos\frac\pi6=\frac{\sqrt3}2$ et non $\frac12$ : erreur de valeur remarquable.`, 3: String.raw`Avec $+k\pi$, on inclut $\frac\pi3+\pi=\frac{4\pi}3$, dont le cosinus vaut $-\frac12$ : la période du cosinus est $2\pi$, et l'on rate la famille $-\frac\pi3+2k\pi$.` },
      rule: String.raw`$\cos x=\cos a\Leftrightarrow x=a+2k\pi$ ou $x=-a+2k\pi$`, level: 1 },
    { id: 'm2-q-024', q: String.raw`$\sin x=\sin a$ équivaut à ($k\in\mathbb{Z}$) :`, choices: [String.raw`$x=\pm a+2k\pi$`, String.raw`$x=a+k\pi$`, String.raw`$x=a+2k\pi$ ou $x=\pi+a+2k\pi$`, String.raw`$x=a+2k\pi$ ou $x=\pi-a+2k\pi$`], answer: 3,
      topic: "Équation sin x = sin a", sec: 'm2-s-equations',
      steps: [
        String.raw`Notion : $\sin x$ est l'ordonnée du point associé à $x$ sur le cercle trigonométrique.`,
        String.raw`Les points d'ordonnée $\sin a$ sont sur une droite horizontale : celui de $a$ et son symétrique par rapport à l'axe vertical, qui est le point de $\pi-a$ (car $\sin(\pi-a)=\sin a$).`,
        String.raw`En ajoutant les tours complets : $x=a+2k\pi$ ou $x=\pi-a+2k\pi$, $k\in\mathbb Z$.`
      ],
      explain: String.raw`$\sin x$ est l'ordonnée du point du cercle. Une droite horizontale coupe le cercle en deux points symétriques par rapport à l'axe vertical : celui de $a$ et celui de $\pi-a$. Donc $\sin x=\sin a\Leftrightarrow x=a+2k\pi$ ou $x=\pi-a+2k\pi$ ($k\in\mathbb Z$). Exemple : $\sin\frac\pi6=\sin\frac{5\pi}6=\frac12$.`,
      why: { 0: String.raw`$x=\pm a+2k\pi$ est la règle du cosinus : $-a$ a le même cosinus que $a$, mais un sinus opposé.`, 1: String.raw`$x=a+k\pi$ est la règle de la tangente ($\pi$-périodique). Pour le sinus, $a+\pi$ donne $\sin(a+\pi)=-\sin a$.`, 2: String.raw`$\sin(\pi+a)=-\sin a$ : le point de $\pi+a$ est diamétralement opposé, d'ordonnée opposée. Le symétrique qui conserve l'ordonnée est $\pi-a$.` },
      rule: String.raw`$\sin x=\sin a\Leftrightarrow x=a+2k\pi$ ou $x=\pi-a+2k\pi$`, level: 2 },
    { id: 'm2-q-025', q: String.raw`Combien l'équation $\sin x=\frac13$ a-t-elle de solutions dans $[0,2\pi[$ ?`, choices: [String.raw`$0$`, String.raw`$1$`, String.raw`$2$`, String.raw`$4$`], answer: 2,
      topic: "Nombre de solutions", sec: 'm2-s-equations',
      steps: [
        String.raw`Notion : résoudre $\sin x=c$ sur un tour revient à chercher les points du cercle d'ordonnée $c$, c'est-à-dire les intersections du cercle avec la droite horizontale $y=c$.`,
        String.raw`$\frac13\in]-1,1[$ : la droite $y=\frac13$ coupe le cercle en deux points distincts.`,
        String.raw`Ces points correspondent à $\arcsin\frac13\approx0{,}34$ et $\pi-\arcsin\frac13\approx2{,}80$, tous deux dans $[0,2\pi[$ : 2 solutions.`
      ],
      explain: String.raw`Graphiquement, les solutions correspondent aux points du cercle d'ordonnée $\frac13$. Comme $0\lt\frac13\lt1$, la droite horizontale $y=\frac13$ coupe le cercle en exactement deux points, situés en haut (l'un à droite, l'autre à gauche). Ce sont $x_1=\arcsin\frac13\approx0{,}34$ et $x_2=\pi-\arcsin\frac13\approx2{,}80$, tous deux dans $[0,2\pi[$.`,
      why: { 0: String.raw`Il y a des solutions dès que $-1\leq\frac13\leq1$ : $\frac13$ n'est pas une valeur remarquable, mais $\arcsin\frac13$ existe.`, 1: String.raw`Tu n'as trouvé que $\arcsin\frac13$ ; la droite horizontale coupe aussi le cercle en $\pi-\arcsin\frac13$.`, 3: String.raw`4 solutions correspondraient à deux tours ; sur $[0,2\pi[$ (un seul tour), il n'y a que deux points d'ordonnée $\frac13$.` },
      rule: String.raw`Pour $-1\lt c\lt1$, $\sin x=c$ a 2 solutions par tour : $\arcsin c$ et $\pi-\arcsin c$`, level: 2 },
    { id: 'm2-q-026', q: String.raw`Solutions de $\cos(2x)=0$ ($k\in\mathbb{Z}$) :`, choices: [String.raw`$x=\frac{\pi}{4}+k\frac{\pi}{2}$`, String.raw`$x=\frac{\pi}{4}+k\pi$`, String.raw`$x=\frac{\pi}{2}+k\pi$`, String.raw`$x=\frac{\pi}{4}+2k\pi$`], answer: 0,
      topic: "Équation cos(2x) = 0", sec: 'm2-s-equations',
      steps: [
        String.raw`Notion : $\cos X=0$ quand le point du cercle est en haut ou en bas, c'est-à-dire $X=\frac\pi2+k\pi$ ($k\in\mathbb Z$) : les zéros reviennent tous les $\pi$.`,
        String.raw`On pose $X=2x$ : $2x=\frac\pi2+k\pi$.`,
        String.raw`On divise chaque terme par 2 : $x=\frac\pi4+\frac{k\pi}2$. Exemples : $k=0$ donne $\frac\pi4$, $k=1$ donne $\frac{3\pi}4$ ($\cos\frac{3\pi}2=0$ ✔).`
      ],
      explain: String.raw`On pose $X=2x$ et on résout d'abord $\cos X=0$ : le cosinus s'annule aux points du haut et du bas du cercle, soit $X=\frac\pi2+k\pi$. On revient ensuite à $x$ en divisant TOUT par 2 : $x=\frac\pi4+\frac{k\pi}{2}$. Les solutions sont donc espacées de $\frac\pi2$ : $\frac\pi4$, $\frac{3\pi}4$, $\frac{5\pi}4$, …`,
      why: { 1: String.raw`En divisant par 2, le terme $k\pi$ devient $\frac{k\pi}{2}$ ; garder $k\pi$ fait perdre la moitié des solutions (ex. $x=\frac{3\pi}4$ : $\cos\frac{3\pi}2=0$).`, 2: String.raw`Ce sont les solutions de $\cos X=0$ pour $X=2x$ : tu as oublié de diviser par 2 pour revenir à $x$.`, 3: String.raw`Deux erreurs : les zéros du cosinus sont espacés de $\pi$ (pas $2\pi$), et après division par 2 l'écart devient $\frac\pi2$.` },
      rule: String.raw`$\cos X=0\Leftrightarrow X=\frac\pi2+k\pi$ ; on divise aussi la période par le coefficient de $x$`, level: 2 },
    { id: 'm2-q-027', q: String.raw`Quelle est la période de $f(t)=\cos(4t+1)$ ?`, choices: [String.raw`$\frac{\pi}{2}$`, String.raw`$2\pi$`, String.raw`$8\pi$`, String.raw`$\pi$`], answer: 0,
      topic: "Période d'un signal", sec: 'm2-s-fonctions',
      steps: [
        String.raw`Notion : la période $T$ est la plus petite durée après laquelle le signal se répète. Pour $\cos(\omega t+\varphi)$, il faut que l'angle augmente d'un tour : $\omega T=2\pi$, donc $T=\frac{2\pi}{\omega}$.`,
        String.raw`Ici $\omega=4$ (coefficient de $t$) ; la constante 1 est une phase, elle ne joue pas sur la période.`,
        String.raw`$T=\frac{2\pi}{4}=\frac\pi2$. Contrôle : $\cos\left(4\left(t+\frac\pi2\right)+1\right)=\cos(4t+1+2\pi)=\cos(4t+1)$ ✔.`
      ],
      explain: String.raw`Un signal $\cos(\omega t+\varphi)$ a pour période $T=\frac{2\pi}{\omega}$ : quand $t$ augmente de $T$, l'angle $\omega t+\varphi$ augmente de $\omega T=2\pi$, un tour complet. Ici la pulsation vaut $\omega=4$, donc $T=\frac{2\pi}4=\frac\pi2$. La phase 1 décale le signal mais ne change pas sa période.`,
      why: { 1: String.raw`$2\pi$ est la période de $\cos t$ ; avec la pulsation 4, le signal oscille 4 fois plus vite, sa période est 4 fois plus courte.`, 2: String.raw`$8\pi=2\pi\times4$ : on divise $2\pi$ par $\omega$, on ne multiplie pas (plus $\omega$ est grand, plus le signal est rapide).`, 3: String.raw`$\pi=\frac{2\pi}{2}$ est la période de $\cos(2t+1)$ : tu as pris $\omega=2$ au lieu de 4.` },
      rule: String.raw`Période de $\cos(\omega t+\varphi)$ : $T=\frac{2\pi}{\omega}$`, level: 2 },
    { id: 'm2-q-028', q: String.raw`Dérivée de $x\mapsto\cos(3x)$ :`, choices: [String.raw`$3\sin(3x)$`, String.raw`$-\sin(3x)$`, String.raw`$-3\sin(3x)$`, String.raw`$-3\cos(3x)$`], answer: 2,
      topic: "Dérivées trigonométriques", sec: 'm2-s-fonctions',
      steps: [
        String.raw`Notion : pour une fonction composée $f(u(x))$, la dérivée est $u'(x)\,f'(u(x))$ : on multiplie par la dérivée de l'intérieur. Avec $\cos'=-\sin$ : $(\cos u)'=-u'\sin u$.`,
        String.raw`Ici $u(x)=3x$, donc $u'(x)=3$.`,
        String.raw`$(\cos3x)'=-3\sin(3x)$.`
      ],
      explain: String.raw`On dérive une fonction composée $\cos(u)$ avec $u=3x$ : la règle est $(\cos u)'=-u'\sin u$. Ici $u'=3$, donc la dérivée vaut $-3\sin(3x)$. Le facteur 3 (dérivée intérieure) et le signe moins (car $\cos'=-\sin$) sont tous deux indispensables.`,
      why: { 0: String.raw`Tu as oublié le signe moins : la dérivée de $\cos$ est $-\sin$.`, 1: String.raw`Tu as oublié la dérivée intérieure $u'=3$ : on dérive aussi ce qu'il y a dans le cosinus.`, 3: String.raw`La dérivée de $\cos$ est $-\sin$, pas $-\cos$ : $-\cos$ est la dérivée seconde.` },
      rule: String.raw`$(\cos u)'=-u'\sin u$ et $(\sin u)'=u'\cos u$`, level: 1 },
    { id: 'm2-q-029', q: String.raw`Dérivée de $\tan$ :`, choices: [String.raw`$-\frac{1}{\cos^2x}$`, String.raw`$1+\tan^2x$`, String.raw`$\frac{1}{\cos x}$`, String.raw`$\tan^2x$`], answer: 1,
      topic: "Dérivée de la tangente", sec: 'm2-s-fonctions',
      steps: [
        String.raw`Notion : $\tan x=\frac{\sin x}{\cos x}$ ; on dérive un quotient avec $\left(\frac uv\right)'=\frac{u'v-uv'}{v^2}$.`,
        String.raw`$u=\sin x$, $u'=\cos x$, $v=\cos x$, $v'=-\sin x$ : $\tan'x=\frac{\cos x\cdot\cos x-\sin x\cdot(-\sin x)}{\cos^2x}=\frac{\cos^2x+\sin^2x}{\cos^2x}$.`,
        String.raw`Deux écritures : $\frac{1}{\cos^2x}$ (car $\cos^2x+\sin^2x=1$), ou $\frac{\cos^2x}{\cos^2x}+\frac{\sin^2x}{\cos^2x}=1+\tan^2x$.`
      ],
      explain: String.raw`On dérive $\tan=\frac{\sin}{\cos}$ avec la formule du quotient $\left(\frac uv\right)'=\frac{u'v-uv'}{v^2}$ : on obtient $\frac{\cos^2x+\sin^2x}{\cos^2x}$. On conclut de deux façons : $\frac{1}{\cos^2x}$ (avec $\cos^2+\sin^2=1$), ou $1+\tan^2x$ (en séparant la fraction en deux).`,
      why: { 0: String.raw`Erreur de signe dans la formule du quotient : $-\sin x\times(-\sin x)=+\sin^2x$. D'ailleurs $\tan$ est croissante, sa dérivée est positive.`, 2: String.raw`Le dénominateur de la formule du quotient est $v^2=\cos^2x$, pas $\cos x$.`, 3: String.raw`En séparant $\frac{\cos^2x+\sin^2x}{\cos^2x}$, le premier morceau vaut 1 : il manque ce terme.` },
      rule: String.raw`$\tan'x=1+\tan^2x=\frac1{\cos^2x}$`, level: 2 },
    { id: 'm2-q-030', q: String.raw`Que vaut $\arcsin\frac12$ ?`, choices: [String.raw`$\frac{\pi}{3}$`, String.raw`$\frac{5\pi}{6}$`, String.raw`$\frac{\pi}{6}$`, String.raw`$30$`], answer: 2,
      topic: "Arc sinus", sec: 'm2-s-reciproques',
      steps: [
        String.raw`Notion : $\arcsin y$ (« l'arc dont le sinus est $y$ ») est l'unique angle $\theta\in\left[-\frac\pi2,\frac\pi2\right]$ tel que $\sin\theta=y$. Il est défini pour $y\in[-1,1]$.`,
        String.raw`On cherche $\theta\in\left[-\frac\pi2,\frac\pi2\right]$ tel que $\sin\theta=\frac12$ : d'après le tableau des valeurs remarquables, $\sin\frac\pi6=\frac12$.`,
        String.raw`$\frac\pi6\in\left[-\frac\pi2,\frac\pi2\right]$ ✔, donc $\arcsin\frac12=\frac\pi6$ (en radians).`
      ],
      explain: String.raw`$\arcsin y$ est l'unique angle de $\left[-\frac\pi2,\frac\pi2\right]$ dont le sinus vaut $y$. On cherche donc $\theta\in\left[-\frac\pi2,\frac\pi2\right]$ avec $\sin\theta=\frac12$ : c'est $\theta=\frac\pi6$, puisque $\sin\frac\pi6=\frac12$. L'autre angle de sinus $\frac12$ sur un tour, $\frac{5\pi}6$, est exclu car il sort de l'intervalle.`,
      why: { 0: String.raw`$\frac\pi3=\arccos\frac12$ : confusion entre arc sinus et arc cosinus ($\sin\frac\pi3=\frac{\sqrt3}2$).`, 1: String.raw`$\sin\frac{5\pi}{6}=\frac12$ aussi, mais $\arcsin$ ne renvoie que des angles de $\left[-\frac\pi2,\frac\pi2\right]$, et $\frac{5\pi}6\gt\frac\pi2$.`, 3: String.raw`30 est la mesure en degrés ; en analyse, $\arcsin$ renvoie des radians : $30^\circ=\frac\pi6$.` },
      rule: String.raw`$\theta=\arcsin y\Leftrightarrow\sin\theta=y$ et $\theta\in\left[-\frac\pi2,\frac\pi2\right]$`, level: 1 },
    { id: 'm2-q-031', q: String.raw`Que vaut $\arccos\left(-\frac12\right)$ ?`, choices: [String.raw`$-\frac{\pi}{3}$`, String.raw`$\frac{2\pi}{3}$`, String.raw`$\frac{\pi}{3}$`, String.raw`$\frac{4\pi}{3}$`], answer: 1,
      topic: "Arc cosinus", sec: 'm2-s-reciproques',
      steps: [
        String.raw`Notion : $\arccos y$ est l'unique angle $\theta\in[0,\pi]$ (moitié haute du cercle) tel que $\cos\theta=y$, pour $y\in[-1,1]$.`,
        String.raw`Angle de référence : $\cos\frac\pi3=\frac12$. Pour obtenir $-\frac12$ dans $[0,\pi]$, on prend le symétrique par rapport à l'axe vertical : $\pi-\frac\pi3=\frac{2\pi}3$.`,
        String.raw`$\cos\frac{2\pi}3=-\frac12$ ✔ et $\frac{2\pi}{3}\in[0,\pi]$ ✔, donc $\arccos\left(-\frac12\right)=\frac{2\pi}3$.`
      ],
      explain: String.raw`$\arccos y$ est l'unique angle de $[0,\pi]$ dont le cosinus vaut $y$. On cherche $\theta\in[0,\pi]$ avec $\cos\theta=-\frac12$ : comme $\cos\frac\pi3=\frac12$, on prend $\theta=\pi-\frac\pi3=\frac{2\pi}3$, qui donne bien $-\frac12$. On retient la formule $\arccos(-y)=\pi-\arccos y$.`,
      why: { 0: String.raw`$\arccos$ prend ses valeurs dans $[0,\pi]$, jamais négatives ; d'ailleurs $\cos\left(-\frac\pi3\right)=+\frac12$ (le cosinus est pair).`, 2: String.raw`$\cos\frac\pi3=+\frac12$ : tu as oublié le signe moins de $-\frac12$.`, 3: String.raw`$\cos\frac{4\pi}{3}=-\frac12$, mais $\frac{4\pi}3\gt\pi$ n'est pas dans l'intervalle $[0,\pi]$ des valeurs d'arccos.` },
      rule: String.raw`$\theta=\arccos y\Leftrightarrow\cos\theta=y$ et $\theta\in[0,\pi]$ ; $\arccos(-y)=\pi-\arccos y$`, level: 2 },
    { id: 'm2-q-032', q: String.raw`Que vaut $\arcsin\left(\sin\frac{3\pi}{4}\right)$ ?`, choices: [String.raw`$\frac{3\pi}{4}$`, String.raw`$\frac{\pi}{4}$`, String.raw`$-\frac{\pi}{4}$`, String.raw`$\frac{\sqrt2}{2}$`], answer: 1,
      topic: "Composition arcsin ∘ sin", sec: 'm2-s-reciproques',
      steps: [
        String.raw`Notion : $\arcsin$ renvoie toujours un angle de $\left[-\frac\pi2,\frac\pi2\right]$. Donc $\arcsin(\sin x)=x$ seulement si $x$ est déjà dans cet intervalle ; sinon, on calcule d'abord le sinus.`,
        String.raw`$\frac{3\pi}4=\pi-\frac\pi4$, donc $\sin\frac{3\pi}4=\sin\frac\pi4=\frac{\sqrt2}2$.`,
        String.raw`$\arcsin\frac{\sqrt2}2$ : l'angle de $\left[-\frac\pi2,\frac\pi2\right]$ de sinus $\frac{\sqrt2}2$ est $\frac\pi4$. Résultat : $\frac\pi4$.`
      ],
      explain: String.raw`Attention : $\arcsin(\sin x)=x$ seulement si $x\in\left[-\frac\pi2,\frac\pi2\right]$, ce qui n'est pas le cas de $\frac{3\pi}4$. On calcule donc d'abord $\sin\frac{3\pi}{4}=\sin\left(\pi-\frac\pi4\right)=\frac{\sqrt2}2$. Puis on cherche l'angle de $\left[-\frac\pi2,\frac\pi2\right]$ de sinus $\frac{\sqrt2}2$ : c'est $\frac\pi4$.`,
      why: { 0: String.raw`Tu as « simplifié » $\arcsin(\sin x)=x$, ce qui n'est vrai que pour $x\in\left[-\frac\pi2,\frac\pi2\right]$ ; $\frac{3\pi}4$ est en dehors, l'arc sinus ne peut pas le renvoyer.`, 2: String.raw`$\sin\frac{3\pi}4=\frac{\sqrt2}2\gt0$ : l'arc sinus d'un nombre positif est positif. Erreur de signe sur le sinus.`, 3: String.raw`$\frac{\sqrt2}2$ est la valeur de $\sin\frac{3\pi}4$ : tu t'es arrêté à l'étape intermédiaire, alors que l'arc sinus renvoie un angle.` },
      rule: String.raw`$\arcsin(\sin x)=x$ uniquement si $x\in\left[-\frac\pi2,\frac\pi2\right]$`, level: 3 },
    { id: 'm2-q-033', q: String.raw`Que vaut $\arctan 2+\arctan\frac12$ ?`, choices: [String.raw`$\frac{\pi}{4}$`, String.raw`$1$`, String.raw`$\pi$`, String.raw`$\frac{\pi}{2}$`], answer: 3,
      topic: "Arc tangente", sec: 'm2-s-reciproques',
      steps: [
        String.raw`Notion : $\arctan x$ est l'unique angle de $\left]-\frac\pi2,\frac\pi2\right[$ dont la tangente vaut $x$. Deux angles complémentaires vérifient $\tan\left(\frac\pi2-\theta\right)=\frac1{\tan\theta}$.`,
        String.raw`Soit $\theta=\arctan2\in\left]0,\frac\pi2\right[$. Alors $\tan\left(\frac\pi2-\theta\right)=\frac12$ et $\frac\pi2-\theta\in\left]0,\frac\pi2\right[$, donc $\arctan\frac12=\frac\pi2-\theta$.`,
        String.raw`Somme : $\theta+\frac\pi2-\theta=\frac\pi2$. Contrôle numérique : $1{,}107+0{,}464\approx1{,}571\approx\frac\pi2$ ✔.`
      ],
      explain: String.raw`Pour $x\gt0$, posons $\theta=\arctan x\in\left]0,\frac\pi2\right[$. Alors $\tan\left(\frac\pi2-\theta\right)=\frac{1}{\tan\theta}=\frac1x$ avec $\frac\pi2-\theta\in\left]0,\frac\pi2\right[$, donc $\arctan\frac1x=\frac\pi2-\theta$ et $\arctan x+\arctan\frac1x=\frac\pi2$. Interprétation : dans un triangle rectangle de côtés 1 et 2, les deux angles aigus sont complémentaires.`,
      why: { 0: String.raw`$\frac\pi4=\arctan1=\arctan\left(2\times\frac12\right)$ : $\arctan$ ne transforme pas un produit en somme, $\arctan a+\arctan b\neq\arctan(ab)$.`, 1: String.raw`1 est le produit $2\times\frac12$, pas un angle : on a confondu les nombres et leurs arcs tangentes.`, 2: String.raw`Chaque terme est dans $\left]0,\frac\pi2\right[$, donc la somme est strictement inférieure à $\pi$ : on a surestimé chaque angle.` },
      rule: String.raw`Pour $x\gt0$ : $\arctan x+\arctan\frac1x=\frac\pi2$`, level: 2 },
    { id: 'm2-q-034', q: String.raw`Dérivée de $\arctan$ :`, choices: [String.raw`$\frac{1}{1+x^2}$`, String.raw`$-\frac{1}{1+x^2}$`, String.raw`$\frac{1}{\sqrt{1-x^2}}$`, String.raw`$\frac{1}{\cos^2x}$`], answer: 0,
      topic: "Dérivée d'arctan", sec: 'm2-s-reciproques',
      steps: [
        String.raw`Notion : $\arctan$ est la réciproque de $\tan$ restreinte à $\left]-\frac\pi2,\frac\pi2\right[$ ; elle vérifie $\tan(\arctan x)=x$ pour tout réel $x$.`,
        String.raw`On dérive cette identité (dérivée d'une composée, avec $\tan'=1+\tan^2$) : $\left(1+\tan^2(\arctan x)\right)\cdot(\arctan x)'=1$.`,
        String.raw`Comme $\tan(\arctan x)=x$ : $(1+x^2)(\arctan x)'=1$, donc $(\arctan x)'=\frac{1}{1+x^2}$.`
      ],
      explain: String.raw`On dérive l'identité $\tan(\arctan x)=x$. Par la dérivée d'une composée : $\left(1+\tan^2(\arctan x)\right)\times(\arctan x)'=1$. Or $\tan(\arctan x)=x$, donc $(1+x^2)(\arctan x)'=1$, soit $(\arctan x)'=\frac{1}{1+x^2}$, toujours positive car $\arctan$ est croissante. À ne pas confondre avec la dérivée de $\tan$, qui vaut $1+\tan^2x$.`,
      why: { 1: String.raw`Erreur de signe : $\arctan$ est strictement croissante, sa dérivée est positive.`, 2: String.raw`$\frac{1}{\sqrt{1-x^2}}$ est la dérivée de $\arcsin$ (définie seulement sur $]-1,1[$) : confusion entre les deux réciproques.`, 3: String.raw`$\frac{1}{\cos^2x}$ est la dérivée de $\tan$ : confusion entre une fonction et sa réciproque.` },
      rule: String.raw`$(\arctan x)'=\frac{1}{1+x^2}$ et $(\arcsin x)'=\frac{1}{\sqrt{1-x^2}}$`, level: 2 },
    { id: 'm2-q-035', q: String.raw`Quel est l'ensemble de définition de $\arcsin$ ?`, choices: [String.raw`$\mathbb{R}$`, String.raw`$[-1,1]$`, String.raw`$\left[-\frac{\pi}{2},\frac{\pi}{2}\right]$`, String.raw`$[0,\pi]$`], answer: 1,
      topic: "Domaine des fonctions réciproques", sec: 'm2-s-reciproques',
      steps: [
        String.raw`Notion : l'ensemble de définition d'une fonction est l'ensemble des nombres auxquels on peut l'appliquer ; son image est l'ensemble des valeurs qu'elle renvoie.`,
        String.raw`$\arcsin x$ est l'angle dont le sinus vaut $x$. Comme $-1\leq\sin\theta\leq1$ pour tout angle, il faut $x\in[-1,1]$.`,
        String.raw`Domaine : $[-1,1]$ ; image : $\left[-\frac\pi2,\frac\pi2\right]$.`
      ],
      explain: String.raw`$\arcsin x$ est l'angle dont le sinus vaut $x$. Or un sinus est toujours compris entre $-1$ et $1$ : cet angle n'existe que si $x\in[-1,1]$. L'ensemble de définition est donc $[-1,1]$, tandis que l'ensemble des valeurs (les angles renvoyés) est $\left[-\frac\pi2,\frac\pi2\right]$.`,
      why: { 0: String.raw`$\mathbb R$ est le domaine de $\arctan$ (une tangente peut prendre toutes les valeurs) ; $\arcsin2$ n'existe pas, aucun sinus ne vaut 2.`, 2: String.raw`$\left[-\frac\pi2,\frac\pi2\right]$ est l'ensemble des valeurs renvoyées par $\arcsin$ (son image) : domaine et image ont été inversés.`, 3: String.raw`$[0,\pi]$ est l'image d'arccos : double confusion, entre les deux fonctions et entre domaine et image.` },
      rule: String.raw`$\arcsin:[-1,1]\to\left[-\frac\pi2,\frac\pi2\right]$, $\arccos:[-1,1]\to[0,\pi]$, $\arctan:\mathbb R\to\left]-\frac\pi2,\frac\pi2\right[$`, level: 2 }
  ],

  /* ============================== EXERCICES ============================== */
  exercises: [
    { id: 'm2-x-001', prompt: String.raw`Convertis $225^\circ$ en radians (valeur exacte).`,
      answer: '5*pi/4', vars: [], check: 'value',
      topic: "Conversion degrés-radians", sec: 'm2-s-cercle',
      steps: [
        String.raw`Notion : un tour complet vaut $360^\circ=2\pi$ rad, donc $180^\circ=\pi$ rad. Pour convertir des degrés en radians, on multiplie par $\frac{\pi}{180}$.`,
        String.raw`$225^\circ=225\times\frac{\pi}{180}=\frac{225\pi}{180}$.`,
        String.raw`On simplifie par 45 : $225=5\times45$ et $180=4\times45$, d'où $\frac{5\pi}{4}$.`,
        String.raw`Contrôle : $225^\circ=180^\circ+45^\circ=\pi+\frac\pi4=\frac{5\pi}4$ ✔.`
      ],
      rule: String.raw`$\theta_{\text{rad}}=\theta_{\text{deg}}\times\frac{\pi}{180}$`,
      pitfall: String.raw`Multiplier par $\frac{180}{\pi}$, qui sert à la conversion inverse (radians vers degrés).`,
      mistakes: [
        { expr: '3*pi/4', msg: String.raw`$\frac{3\pi}{4}$ correspond à $135^\circ=180^\circ-45^\circ$. Ici $225^\circ=180^\circ+45^\circ$, soit $\pi+\frac\pi4$.` },
        { expr: '225*180/pi', msg: String.raw`Tu as multiplié par $\frac{180}{\pi}$, qui sert à passer des radians aux degrés. Pour aller vers les radians : $\times\frac{\pi}{180}$.` },
        { expr: '5/4', msg: String.raw`Tu as oublié le facteur $\pi$ : $\frac{225}{180}=\frac54$, et l'angle vaut $\frac54\pi$ radians.` }
      ],
      hint: String.raw`Multiplie par $\frac{\pi}{180}$ ; $225=5\times45$.`,
      explain: String.raw`$225\times\frac{\pi}{180}=\frac{225\pi}{180}=\frac{5\pi}{4}$.`, level: 1 },
    { id: 'm2-x-002', prompt: String.raw`On pose $t=\tan\frac{x}{2}=\frac12$. Calcule $\cos x$ puis $\sin x$ (réponse : $\cos x;\sin x$).`,
      answer: '3/5;4/5', vars: [], check: 'tuple',
      topic: "Tangente de l'angle moitié", sec: 'm2-s-addition',
      steps: [
        String.raw`Notion : avec $t=\tan\frac x2$, on a $\cos x=\frac{1-t^2}{1+t^2}$ et $\sin x=\frac{2t}{1+t^2}$ ; ces formules viennent de la duplication appliquée à l'angle $\frac x2$.`,
        String.raw`$t^2=\frac14$, donc $1+t^2=\frac54$ et $1-t^2=\frac34$.`,
        String.raw`$\cos x=\frac{3/4}{5/4}=\frac34\times\frac45=\frac35$ et $\sin x=\frac{2\times\frac12}{5/4}=\frac{1}{5/4}=\frac45$.`,
        String.raw`Contrôle : $\cos^2x+\sin^2x=\frac{9}{25}+\frac{16}{25}=1$ ✔.`
      ],
      rule: String.raw`$\cos x=\frac{1-t^2}{1+t^2}$ et $\sin x=\frac{2t}{1+t^2}$ avec $t=\tan\frac x2$`,
      pitfall: String.raw`Inverser les formules de $\cos x$ et $\sin x$, ou oublier le facteur 2 de $\sin x$.`,
      mistakes: [
        { expr: '4/5;3/5', msg: String.raw`Ordre inversé : $\cos x=\frac{1-t^2}{1+t^2}=\frac35$ et $\sin x=\frac{2t}{1+t^2}=\frac45$.` },
        { expr: '3/5;2/5', msg: String.raw`$\sin x=\frac{2t}{1+t^2}$ : n'oublie pas le facteur 2 (il vient de $\sin x=2\sin\frac x2\cos\frac x2$).` },
        { expr: '3/4;1', msg: String.raw`Tu n'as pas divisé par $1+t^2=\frac54$ : $\cos x=\frac{3/4}{5/4}=\frac35$. D'ailleurs $\left(\frac34\right)^2+1^2\neq1$.` }
      ],
      hint: String.raw`$\cos x=\frac{1-t^2}{1+t^2}$, $\sin x=\frac{2t}{1+t^2}$.`,
      explain: String.raw`$1+t^2=\frac54$, d'où $\cos x=\frac{3/4}{5/4}=\frac35$ et $\sin x=\frac{1}{5/4}=\frac45$.`, level: 2 },
    { id: 'm2-x-003', prompt: String.raw`Donne la valeur exacte de $\cos\frac{\pi}{6}$.`,
      answer: 'sqrt(3)/2', vars: [], check: 'value',
      topic: "Valeurs remarquables", sec: 'm2-s-valeurs',
      steps: [
        String.raw`Notion : $\cos x$ est l'abscisse du point du cercle associé à $x$. Entre 0 et $\frac\pi2$, les cosinus de $0,\frac\pi6,\frac\pi4,\frac\pi3,\frac\pi2$ valent $\frac{\sqrt4}2,\frac{\sqrt3}2,\frac{\sqrt2}2,\frac{\sqrt1}2,\frac{\sqrt0}2$ (et les sinus dans l'ordre inverse).`,
        String.raw`$\frac\pi6=30^\circ$ est le 2e angle de la liste : $\cos\frac\pi6=\frac{\sqrt3}{2}$.`,
        String.raw`Justification géométrique : dans un triangle équilatéral de côté 1, la hauteur mesure $\sqrt{1-\frac14}=\frac{\sqrt3}2$ ; c'est le côté adjacent à l'angle de $30^\circ$.`,
        String.raw`Contrôle : petit angle, grand cosinus, et $\frac{\sqrt3}{2}\approx0{,}87$ est bien proche de 1 ✔.`
      ],
      rule: String.raw`$\cos\frac\pi6=\frac{\sqrt3}2$, $\cos\frac\pi4=\frac{\sqrt2}2$, $\cos\frac\pi3=\frac12$`,
      pitfall: String.raw`Confondre $\cos\frac\pi6$ et $\cos\frac\pi3$, ou cosinus et sinus.`,
      mistakes: [
        { expr: '1/2', msg: String.raw`$\frac12=\cos\frac\pi3=\sin\frac\pi6$. Petit angle, grand cosinus : $\cos\frac\pi6=\frac{\sqrt3}{2}$.` },
        { expr: 'sqrt(2)/2', msg: String.raw`$\frac{\sqrt2}2$ est la valeur en $\frac\pi4=45^\circ$, pas en $\frac\pi6=30^\circ$.` },
        { expr: 'sqrt(3)', msg: String.raw`$\sqrt3=\tan\frac\pi3$ ; un cosinus ne dépasse jamais 1.` }
      ],
      hint: String.raw`Tableau : $\cos$ vaut $\frac{\sqrt4}{2},\frac{\sqrt3}{2},\frac{\sqrt2}{2},\frac{\sqrt1}{2},\frac{\sqrt0}{2}$.`,
      explain: String.raw`Valeur remarquable : $\cos\frac{\pi}{6}=\frac{\sqrt3}{2}$.`, level: 1 },
    { id: 'm2-x-004', prompt: String.raw`Donne la valeur exacte de $\sin\frac{2\pi}{3}$.`,
      answer: 'sqrt(3)/2', vars: [], check: 'value',
      topic: "Angles associés", sec: 'm2-s-associes',
      steps: [
        String.raw`Notion : pour un angle hors de $\left[0,\frac\pi2\right]$, on se ramène à un angle de référence par une symétrie du cercle, puis on fixe le signe selon le quadrant. Ici : $\sin(\pi-x)=\sin x$ (symétrie par rapport à l'axe vertical, qui conserve l'ordonnée).`,
        String.raw`$\frac{2\pi}{3}=\pi-\frac\pi3$.`,
        String.raw`$\sin\frac{2\pi}3=\sin\left(\pi-\frac\pi3\right)=\sin\frac\pi3=\frac{\sqrt3}2$.`,
        String.raw`Contrôle du signe : $\frac{2\pi}3=120^\circ$ est dans le 2e quadrant (en haut à gauche), où le sinus est positif ✔.`
      ],
      rule: String.raw`$\sin(\pi-x)=\sin x$ et $\cos(\pi-x)=-\cos x$`,
      pitfall: String.raw`Mettre un signe moins : dans le 2e quadrant, c'est le cosinus qui est négatif, pas le sinus.`,
      mistakes: [
        { expr: '-sqrt(3)/2', msg: String.raw`$\frac{2\pi}{3}$ est dans le 2e quadrant (en haut à gauche) : le sinus (ordonnée) y est positif.` },
        { expr: '-1/2', msg: String.raw`$-\frac12=\cos\frac{2\pi}{3}$ : confusion entre cosinus et sinus.` },
        { expr: '1/2', msg: String.raw`$\frac12=\sin\frac\pi6$ ; l'angle de référence de $\frac{2\pi}3$ est $\frac\pi3$, dont le sinus vaut $\frac{\sqrt3}2$.` }
      ],
      hint: String.raw`$\frac{2\pi}{3}=\pi-\frac{\pi}{3}$ et $\sin(\pi-x)=\sin x$.`,
      explain: String.raw`$\sin\frac{2\pi}3=\sin\left(\pi-\frac\pi3\right)=\sin\frac\pi3=\frac{\sqrt3}2$.`, level: 1 },
    { id: 'm2-x-005', prompt: String.raw`Donne la valeur exacte de $\cos\frac{3\pi}{4}$.`,
      answer: '-sqrt(2)/2', vars: [], check: 'value',
      topic: "Angles associés", sec: 'm2-s-associes',
      steps: [
        String.raw`Notion : angles associés, $\cos(\pi-x)=-\cos x$ : le point de $\pi-x$ est le symétrique de celui de $x$ par rapport à l'axe vertical, d'abscisse opposée.`,
        String.raw`$\frac{3\pi}{4}=\pi-\frac\pi4$.`,
        String.raw`$\cos\frac{3\pi}4=-\cos\frac\pi4=-\frac{\sqrt2}2$.`,
        String.raw`Contrôle : $135^\circ$ est dans le 2e quadrant, où l'abscisse (le cosinus) est négative ✔.`
      ],
      rule: String.raw`$\cos(\pi-x)=-\cos x$`,
      pitfall: String.raw`Oublier le signe moins du 2e quadrant.`,
      mistakes: [
        { expr: 'sqrt(2)/2', msg: String.raw`$\frac{3\pi}{4}$ est dans le 2e quadrant (à gauche du cercle) : le cosinus y est négatif.` },
        { expr: '-1/2', msg: String.raw`$-\frac12=\cos\frac{2\pi}3$ : l'angle de référence de $\frac{3\pi}4$ est $\frac\pi4$, de cosinus $\frac{\sqrt2}2$.` }
      ],
      hint: String.raw`$\frac{3\pi}{4}=\pi-\frac{\pi}{4}$.`,
      explain: String.raw`$\cos\frac{3\pi}4=\cos\left(\pi-\frac\pi4\right)=-\cos\frac\pi4=-\frac{\sqrt2}2$.`, level: 1 },
    { id: 'm2-x-006', prompt: String.raw`Donne la valeur exacte de $\tan\frac{5\pi}{6}$.`,
      answer: '-sqrt(3)/3', vars: [], check: 'value',
      topic: "Angles associés (tangente)", sec: 'm2-s-associes',
      steps: [
        String.raw`Notion : $\tan x=\frac{\sin x}{\cos x}$. On calcule le sinus et le cosinus de $\frac{5\pi}6$ par les angles associés (ou on utilise directement $\tan(\pi-x)=-\tan x$).`,
        String.raw`$\frac{5\pi}{6}=\pi-\frac\pi6$ : $\sin\frac{5\pi}6=\sin\frac\pi6=\frac12$ et $\cos\frac{5\pi}6=-\cos\frac\pi6=-\frac{\sqrt3}2$.`,
        String.raw`$\tan\frac{5\pi}6=\frac{1/2}{-\sqrt3/2}=-\frac1{\sqrt3}$.`,
        String.raw`On rationalise : $-\frac{1}{\sqrt3}=-\frac{\sqrt3}{3}\approx-0{,}577$. Signe cohérent : 2e quadrant, sinus positif et cosinus négatif, donc tangente négative ✔.`
      ],
      rule: String.raw`$\tan(\pi-x)=-\tan x$ ; $\tan\frac\pi6=\frac{\sqrt3}3$ et $\tan\frac\pi3=\sqrt3$`,
      pitfall: String.raw`Confondre $\tan\frac\pi6=\frac{\sqrt3}3$ et $\tan\frac\pi3=\sqrt3$.`,
      mistakes: [
        { expr: '-sqrt(3)', msg: String.raw`L'angle de référence est $\frac\pi6$ : $\tan\frac\pi6=\frac{\sqrt3}{3}$ (c'est $\tan\frac\pi3$ qui vaut $\sqrt3$).` },
        { expr: 'sqrt(3)/3', msg: String.raw`Il manque le signe : $\tan(\pi-x)=-\tan x$ (sinus positif, cosinus négatif dans le 2e quadrant).` },
        { expr: '-sqrt(3)/2', msg: String.raw`$-\frac{\sqrt3}2=\cos\frac{5\pi}6$ : il faut encore faire le quotient $\frac{\sin}{\cos}$.` }
      ],
      hint: String.raw`$\frac{5\pi}{6}=\pi-\frac{\pi}{6}$ et $\tan(\pi-x)=-\tan x$.`,
      explain: String.raw`$\tan\frac{5\pi}6=\frac{1/2}{-\sqrt3/2}=-\frac{1}{\sqrt3}=-\frac{\sqrt3}{3}$.`, level: 2 },
    { id: 'm2-x-007', prompt: String.raw`Donne la valeur exacte de $\sin\left(-\frac{\pi}{3}\right)$.`,
      answer: '-sqrt(3)/2', vars: [], check: 'value',
      topic: "Parité du sinus", sec: 'm2-s-associes',
      steps: [
        String.raw`Notion : le sinus est une fonction impaire, $\sin(-x)=-\sin x$ : le point de $-x$ est le symétrique de celui de $x$ par rapport à l'axe horizontal, d'ordonnée opposée.`,
        String.raw`$\sin\left(-\frac\pi3\right)=-\sin\frac\pi3$.`,
        String.raw`$\sin\frac\pi3=\frac{\sqrt3}{2}$, donc $\sin\left(-\frac\pi3\right)=-\frac{\sqrt3}2$. Contrôle : $-60^\circ$ est sous l'axe horizontal, sinus négatif ✔.`
      ],
      rule: String.raw`$\sin(-x)=-\sin x$ (impaire) et $\cos(-x)=\cos x$ (paire)`,
      pitfall: String.raw`Appliquer au sinus la parité du cosinus ($\cos(-x)=\cos x$).`,
      mistakes: [
        { expr: 'sqrt(3)/2', msg: String.raw`$\sin$ est impaire : $\sin(-x)=-\sin x$. C'est le cosinus qui est pair.` },
        { expr: '-1/2', msg: String.raw`$\sin\frac\pi3=\frac{\sqrt3}{2}$ (et non $\frac12$, qui est $\sin\frac\pi6$).` },
        { expr: '1/2', msg: String.raw`Deux erreurs : le sinus est impair (signe moins) et $\sin\frac\pi3=\frac{\sqrt3}2$, pas $\frac12$.` }
      ],
      hint: String.raw`$\sin(-x)=-\sin x$.`,
      explain: String.raw`$\sin\left(-\frac\pi3\right)=-\sin\frac\pi3=-\frac{\sqrt3}2$.`, level: 1 },
    { id: 'm2-x-008', prompt: String.raw`Donne la valeur exacte de $\cos\frac{11\pi}{3}$.`,
      answer: '1/2', vars: [], check: 'value',
      topic: "Réduction d'un angle", sec: 'm2-s-cercle',
      steps: [
        String.raw`Notion : le cosinus est $2\pi$-périodique ($\cos(x+2k\pi)=\cos x$) et pair ($\cos(-x)=\cos x$). On retire donc des tours complets pour se ramener à un angle simple.`,
        String.raw`En tiers : $2\pi=\frac{6\pi}{3}$ et $4\pi=\frac{12\pi}{3}$. Donc $\frac{11\pi}{3}=\frac{12\pi}3-\frac\pi3=4\pi-\frac\pi3$.`,
        String.raw`$\cos\frac{11\pi}3=\cos\left(-\frac\pi3\right)=\cos\frac\pi3$ (périodicité puis parité).`,
        String.raw`$\cos\frac\pi3=\frac12$. Le point est en bas à droite (4e quadrant), cosinus positif ✔.`
      ],
      rule: String.raw`$\cos(x+2k\pi)=\cos x$ et $\cos(-x)=\cos x$`,
      pitfall: String.raw`Retirer $3\pi$ (un nombre non entier de tours), ce qui envoie sur le point opposé.`,
      mistakes: [
        { expr: '-1/2', msg: String.raw`$\frac{11\pi}{3}=4\pi-\frac\pi3$ : même point que $-\frac\pi3$, en bas à droite, où le cosinus est positif. Retirer $3\pi$ n'est pas permis (ce n'est pas un nombre entier de tours).` },
        { expr: 'sqrt(3)/2', msg: String.raw`L'angle de référence est $\frac\pi3$ : $\cos\frac\pi3=\frac12$ (c'est $\cos\frac\pi6$ qui vaut $\frac{\sqrt3}2$).` }
      ],
      hint: String.raw`Retire un multiple de $2\pi$ : $\frac{11\pi}{3}=\frac{12\pi}{3}-\frac{\pi}{3}$.`,
      explain: String.raw`$\frac{11\pi}{3}=4\pi-\frac{\pi}{3}$, donc $\cos\frac{11\pi}{3}=\cos\frac\pi3=\frac12$.`, level: 2 },
    { id: 'm2-x-009', prompt: String.raw`Donne la valeur exacte de $\cos\left(-\frac{17\pi}{6}\right)$.`,
      answer: '-sqrt(3)/2', vars: [], check: 'value',
      topic: "Réduction d'un angle", sec: 'm2-s-cercle',
      steps: [
        String.raw`Notion : on ramène l'angle sur un tour en ajoutant ou retirant des multiples de $2\pi$ (périodicité), puis on utilise les angles associés et le signe du quadrant.`,
        String.raw`$4\pi=\frac{24\pi}{6}$ : $-\frac{17\pi}{6}+\frac{24\pi}6=\frac{7\pi}{6}$, donc $\cos\left(-\frac{17\pi}6\right)=\cos\frac{7\pi}6$.`,
        String.raw`$\frac{7\pi}6=\pi+\frac\pi6$ et $\cos(\pi+x)=-\cos x$ (symétrie centrale) : $\cos\frac{7\pi}6=-\cos\frac\pi6=-\frac{\sqrt3}2$.`,
        String.raw`Contrôle : $\frac{7\pi}{6}=210^\circ$ est dans le 3e quadrant (en bas à gauche), cosinus négatif ✔.`
      ],
      rule: String.raw`$\cos(x+2k\pi)=\cos x$ et $\cos(\pi+x)=-\cos x$`,
      pitfall: String.raw`Se tromper de quadrant après la réduction.`,
      mistakes: [
        { expr: 'sqrt(3)/2', msg: String.raw`$-\frac{17\pi}{6}+4\pi=\frac{7\pi}{6}$ : 3e quadrant, cosinus négatif.` },
        { expr: '-1/2', msg: String.raw`L'angle de référence est $\frac\pi6$ : $\cos\frac\pi6=\frac{\sqrt3}{2}$, pas $\frac12$.` }
      ],
      hint: String.raw`Ajoute $4\pi=\frac{24\pi}{6}$, ou utilise la parité du cosinus.`,
      explain: String.raw`$-\frac{17\pi}{6}+4\pi=\frac{7\pi}{6}=\pi+\frac\pi6$, donc $\cos\left(-\frac{17\pi}{6}\right)=-\cos\frac\pi6=-\frac{\sqrt3}{2}$.`, level: 3 },
    { id: 'm2-x-010', prompt: String.raw`Donne la mesure principale (dans $]-\pi,\pi]$) de l'angle $\frac{31\pi}{4}$.`,
      answer: '-pi/4', vars: [], check: 'value',
      topic: "Mesure principale", sec: 'm2-s-cercle',
      steps: [
        String.raw`Notion : la mesure principale d'un angle est son unique mesure dans $]-\pi,\pi]$ ; on l'obtient en ajoutant ou retirant des multiples de $2\pi$.`,
        String.raw`En quarts : $2\pi=\frac{8\pi}{4}$. Le multiple de $\frac{8\pi}4$ le plus proche de $\frac{31\pi}4$ est $\frac{32\pi}{4}=8\pi$ (4 tours).`,
        String.raw`$\frac{31\pi}{4}=8\pi-\frac\pi4$ : l'angle a le même point que $-\frac\pi4$.`,
        String.raw`$-\pi\lt-\frac\pi4\leq\pi$ ✔ : la mesure principale est $-\frac\pi4$.`
      ],
      rule: String.raw`Mesure principale : l'unique $\theta+2k\pi$ appartenant à $]-\pi,\pi]$`,
      pitfall: String.raw`S'arrêter à $\frac{7\pi}4$ : bon point, mais hors de $]-\pi,\pi]$.`,
      mistakes: [
        { expr: '7*pi/4', msg: String.raw`$\frac{7\pi}{4}$ représente le bon point mais n'est pas dans $]-\pi,\pi]$ : retire encore $2\pi$.` },
        { expr: 'pi/4', msg: String.raw`$\frac{31\pi}{4}=8\pi-\frac{\pi}{4}$ : c'est $-\frac\pi4$, pas $+\frac\pi4$ (erreur de signe).` },
        { expr: '3*pi/4', msg: String.raw`$\frac{31\pi}4-7\pi=\frac{3\pi}4$, mais $7\pi$ n'est pas un nombre entier de tours (multiple de $2\pi$) : on arrive au point opposé.` }
      ],
      hint: String.raw`$31=32-1$ et $\frac{32\pi}{4}=8\pi$ (4 tours).`,
      explain: String.raw`$\frac{31\pi}{4}=8\pi-\frac\pi4$ ; la mesure principale est $-\frac\pi4$.`, level: 2 },
    { id: 'm2-x-011', prompt: String.raw`On sait que $\cos x=\frac35$ et $x\in\left]-\frac{\pi}{2},0\right[$. Calcule $\sin x$.`,
      answer: '-4/5', vars: [], check: 'value',
      topic: "Relation cos² + sin² = 1", sec: 'm2-s-cercle',
      steps: [
        String.raw`Notion : $\cos^2x+\sin^2x=1$ (Pythagore sur le cercle de rayon 1) donne la valeur de $|\sin x|$ ; le signe se lit sur la position du point.`,
        String.raw`$\sin^2x=1-\cos^2x=1-\frac{9}{25}=\frac{16}{25}$, donc $\sin x=\frac45$ ou $\sin x=-\frac45$.`,
        String.raw`$x\in\left]-\frac\pi2,0\right[$ : le point est en bas à droite (4e quadrant), son ordonnée est négative, donc $\sin x\lt0$.`,
        String.raw`$\sin x=-\frac45$. Contrôle : $\frac{9}{25}+\frac{16}{25}=1$ ✔.`
      ],
      rule: String.raw`$\sin^2x=1-\cos^2x$, puis le signe d'après le quadrant`,
      pitfall: String.raw`Oublier le signe : la racine carrée donne deux possibilités $\pm$.`,
      mistakes: [
        { expr: '4/5', msg: String.raw`$x\in\left]-\frac\pi2,0\right[$ : 4e quadrant (en bas à droite), le sinus est négatif.` },
        { expr: '2/5', msg: String.raw`$\sin x=\pm\sqrt{1-\cos^2x}$, pas $1-\cos x$ : la relation porte sur les carrés.` },
        { expr: '16/25', msg: String.raw`$\frac{16}{25}$ est $\sin^2x$ : il faut encore prendre la racine carrée (et choisir le signe).` }
      ],
      hint: String.raw`$\sin^2x=1-\cos^2x$, puis choisis le signe selon le quadrant.`,
      explain: String.raw`$\sin^2x=\frac{16}{25}$, donc $\sin x=\pm\frac45$ ; comme $x\in\left]-\frac\pi2,0\right[$, $\sin x=-\frac45$.`, level: 2 },
    { id: 'm2-x-012', prompt: String.raw`On sait que $\sin x=\frac13$ et $x\in\left]\frac{\pi}{2},\pi\right[$. Calcule $\cos x$ (valeur exacte).`,
      answer: '-2*sqrt(2)/3', vars: [], check: 'value',
      topic: "Relation cos² + sin² = 1", sec: 'm2-s-cercle',
      steps: [
        String.raw`Notion : $\cos^2x+\sin^2x=1$ donne $\cos^2x$ ; on prend la racine et on choisit le signe selon le quadrant.`,
        String.raw`$\cos^2x=1-\left(\frac13\right)^2=1-\frac19=\frac89$.`,
        String.raw`$\sqrt{\frac89}=\frac{\sqrt8}{3}=\frac{2\sqrt2}3$ (car $\sqrt8=\sqrt{4\times2}=2\sqrt2$), donc $\cos x=\pm\frac{2\sqrt2}3$.`,
        String.raw`$x\in\left]\frac\pi2,\pi\right[$ : 2e quadrant, abscisse négative. $\cos x=-\frac{2\sqrt2}3\approx-0{,}94$.`
      ],
      rule: String.raw`$\cos^2x=1-\sin^2x$, puis le signe d'après le quadrant`,
      pitfall: String.raw`Oublier d'élever $\frac13$ au carré, ou le signe négatif du 2e quadrant.`,
      mistakes: [
        { expr: '2*sqrt(2)/3', msg: String.raw`Dans le 2e quadrant (en haut à gauche), le cosinus est négatif.` },
        { expr: '-sqrt(2/3)', msg: String.raw`$1-\sin^2x=1-\frac19=\frac89$ : il faut élever $\frac13$ au carré avant de soustraire.` },
        { expr: '-2/3', msg: String.raw`Tu as écrit $\cos x=-(1-\sin x)$ ; la relation porte sur les carrés : $\cos^2x=1-\sin^2x$.` }
      ],
      hint: String.raw`$\cos^2x=1-\sin^2x$ ; signe selon le quadrant.`,
      explain: String.raw`$\cos^2x=\frac89$ et $\sqrt{\frac89}=\frac{2\sqrt2}{3}$ ; 2e quadrant donc $\cos x=-\frac{2\sqrt2}{3}$.`, level: 2 },
    { id: 'm2-x-013', prompt: String.raw`Calcule la valeur exacte de $\cos\frac{\pi}{12}$ (écris $\frac{\pi}{12}=\frac{\pi}{3}-\frac{\pi}{4}$).`,
      answer: '(sqrt(6)+sqrt(2))/4', vars: [], check: 'value',
      topic: "Formules d'addition", sec: 'm2-s-addition',
      steps: [
        String.raw`Notion : pour un angle non remarquable, on l'écrit comme différence (ou somme) d'angles remarquables et on applique une formule d'addition : $\cos(a-b)=\cos a\cos b+\sin a\sin b$.`,
        String.raw`$\frac\pi3-\frac\pi4=\frac{4\pi-3\pi}{12}=\frac\pi{12}$ : on prend $a=\frac\pi3$ et $b=\frac\pi4$.`,
        String.raw`$\cos\frac\pi{12}=\cos\frac\pi3\cos\frac\pi4+\sin\frac\pi3\sin\frac\pi4=\frac12\times\frac{\sqrt2}2+\frac{\sqrt3}2\times\frac{\sqrt2}2$.`,
        String.raw`$=\frac{\sqrt2}4+\frac{\sqrt6}4=\frac{\sqrt6+\sqrt2}4\approx0{,}966$, proche de 1 comme attendu pour $15^\circ$ ✔.`
      ],
      rule: String.raw`$\cos(a-b)=\cos a\cos b+\sin a\sin b$`,
      pitfall: String.raw`Écrire $\cos(a-b)=\cos a-\cos b$.`,
      mistakes: [
        { expr: '(sqrt(6)-sqrt(2))/4', msg: String.raw`C'est $\sin\frac\pi{12}$ : dans $\cos(a-b)=\cos a\cos b+\sin a\sin b$, le signe est $+$.` },
        { expr: '1/2-sqrt(2)/2', msg: String.raw`$\cos(a-b)\neq\cos a-\cos b$ : utilise la formule d'addition. D'ailleurs ta valeur est négative, impossible pour $15^\circ$.` },
        { expr: '(sqrt(6)+sqrt(2))/2', msg: String.raw`$\frac{\sqrt3}2\times\frac{\sqrt2}2=\frac{\sqrt6}4$ (on multiplie les dénominateurs : $2\times2=4$). Ta valeur dépasse 1, impossible pour un cosinus.` }
      ],
      hint: String.raw`$\cos(a-b)=\cos a\cos b+\sin a\sin b$.`,
      explain: String.raw`$\cos\frac\pi3\cos\frac\pi4+\sin\frac\pi3\sin\frac\pi4=\frac{\sqrt2}{4}+\frac{\sqrt6}{4}=\frac{\sqrt6+\sqrt2}{4}$.`, level: 2 },
    { id: 'm2-x-014', prompt: String.raw`Calcule la valeur exacte de $\tan\frac{\pi}{12}$ (sous forme simplifiée $a+b\sqrt3$).`,
      answer: '2-sqrt(3)', vars: [], check: 'value',
      topic: "Formules d'addition (tangente)", sec: 'm2-s-addition',
      steps: [
        String.raw`Notion : formule d'addition de la tangente, $\tan(a-b)=\frac{\tan a-\tan b}{1+\tan a\tan b}$, appliquée à $\frac\pi{12}=\frac\pi3-\frac\pi4$.`,
        String.raw`$\tan\frac\pi3=\sqrt3$ et $\tan\frac\pi4=1$ : $\tan\frac\pi{12}=\frac{\sqrt3-1}{1+\sqrt3\times1}=\frac{\sqrt3-1}{\sqrt3+1}$.`,
        String.raw`On multiplie haut et bas par le conjugué $\sqrt3-1$ : $\frac{(\sqrt3-1)^2}{(\sqrt3+1)(\sqrt3-1)}=\frac{3-2\sqrt3+1}{3-1}=\frac{4-2\sqrt3}{2}$.`,
        String.raw`$=2-\sqrt3\approx0{,}268$, qui est bien $\tan15^\circ$ ✔.`
      ],
      rule: String.raw`$\tan(a-b)=\frac{\tan a-\tan b}{1+\tan a\tan b}$`,
      pitfall: String.raw`Écrire $\tan(a-b)=\tan a-\tan b$.`,
      mistakes: [
        { expr: 'sqrt(3)-1', msg: String.raw`$\tan(a-b)\neq\tan a-\tan b$ : il faut diviser par $1+\tan a\tan b$.` },
        { expr: '(sqrt(3)+1)/(1-sqrt(3))', msg: String.raw`Signes inversés : $\tan(a-b)=\frac{\tan a-\tan b}{1+\tan a\tan b}$ (moins en haut, plus en bas). Ta valeur est même négative.` }
      ],
      hint: String.raw`$\frac{\pi}{12}=\frac\pi3-\frac\pi4$, puis multiplie par le conjugué.`,
      explain: String.raw`$\tan\frac\pi{12}=\frac{\sqrt3-1}{1+\sqrt3}=\frac{(\sqrt3-1)^2}{2}=2-\sqrt3$.`, level: 3 },
    { id: 'm2-x-015', prompt: String.raw`On écrit $\cos\left(x-\frac{\pi}{4}\right)=a\cos x+b\sin x$. Donne $a;b$.`,
      answer: 'sqrt(2)/2;sqrt(2)/2', vars: [], check: 'tuple',
      topic: "Formules d'addition", sec: 'm2-s-addition',
      steps: [
        String.raw`Notion : la formule d'addition $\cos(x-y)=\cos x\cos y+\sin x\sin y$ développe un cosinus déphasé en combinaison de $\cos x$ et $\sin x$.`,
        String.raw`Avec $y=\frac\pi4$ : $\cos\left(x-\frac\pi4\right)=\cos x\cos\frac\pi4+\sin x\sin\frac\pi4$.`,
        String.raw`$\cos\frac\pi4=\sin\frac\pi4=\frac{\sqrt2}2$, donc $a=\frac{\sqrt2}2$ et $b=\frac{\sqrt2}2$.`,
        String.raw`Contrôle en $x=\frac\pi4$ : $\cos0=1$ et $\frac{\sqrt2}2\cdot\frac{\sqrt2}2+\frac{\sqrt2}2\cdot\frac{\sqrt2}2=\frac12+\frac12=1$ ✔.`
      ],
      rule: String.raw`$\cos(x-y)=\cos x\cos y+\sin x\sin y$`,
      pitfall: String.raw`Mettre un signe moins (c'est la formule de $\cos(x+y)$).`,
      mistakes: [
        { expr: 'sqrt(2)/2;-sqrt(2)/2', msg: String.raw`$\cos(x-y)=\cos x\cos y+\sin x\sin y$ : pour une différence, le signe est $+$.` },
        { expr: '1;1', msg: String.raw`Tu as oublié les facteurs $\cos\frac\pi4=\sin\frac\pi4=\frac{\sqrt2}2$.` },
        { expr: '1/2;1/2', msg: String.raw`$\cos\frac\pi4=\frac{\sqrt2}2$, pas $\frac12$ (qui est $\cos\frac\pi3$).` }
      ],
      hint: String.raw`$\cos(x-y)=\cos x\cos y+\sin x\sin y$ avec $y=\frac\pi4$.`,
      explain: String.raw`$\cos\left(x-\frac\pi4\right)=\frac{\sqrt2}2\cos x+\frac{\sqrt2}2\sin x$.`, level: 1 },
    { id: 'm2-x-016', prompt: String.raw`Simplifie $A(x)=\sin(\pi-x)+\cos\left(\frac{\pi}{2}-x\right)-\sin(\pi+x)$.`,
      answer: '3*sin(x)', vars: ['x'], check: 'expr',
      topic: "Angles associés", sec: 'm2-s-associes',
      steps: [
        String.raw`Notion : les angles associés transforment $\sin$ ou $\cos$ de $\pi\pm x$, $\frac\pi2\pm x$ en $\pm\sin x$ ou $\pm\cos x$ ; on traite chaque terme séparément.`,
        String.raw`$\sin(\pi-x)=\sin x$ (symétrie par rapport à l'axe vertical, ordonnée conservée).`,
        String.raw`$\cos\left(\frac\pi2-x\right)=\sin x$ (angle complémentaire : cos et sin s'échangent) et $\sin(\pi+x)=-\sin x$ (symétrie centrale), donc $-\sin(\pi+x)=+\sin x$.`,
        String.raw`$A(x)=\sin x+\sin x+\sin x=3\sin x$. Test en $x=\frac\pi2$ : $1+1-(-1)=3$ ✔.`
      ],
      rule: String.raw`$\sin(\pi-x)=\sin x$, $\cos\left(\frac\pi2-x\right)=\sin x$, $\sin(\pi+x)=-\sin x$`,
      pitfall: String.raw`Oublier que le moins devant $\sin(\pi+x)$ se combine avec $\sin(\pi+x)=-\sin x$ pour donner $+\sin x$.`,
      mistakes: [
        { expr: 'sin(x)', msg: String.raw`$\sin(\pi+x)=-\sin x$, donc $-\sin(\pi+x)=+\sin x$ : les trois termes valent $\sin x$.` },
        { expr: '2*sin(x)+cos(x)', msg: String.raw`$\cos\left(\frac\pi2-x\right)=\sin x$, pas $\cos x$ : pour l'angle complémentaire, cos et sin s'échangent.` },
        { expr: '-sin(x)', msg: String.raw`Les deux premiers termes valent $+\sin x$ : $\sin(\pi-x)=\sin x$ (même ordonnée) et $\cos\left(\frac\pi2-x\right)=\sin x$.` }
      ],
      hint: String.raw`Utilise les angles associés pour chaque terme.`,
      explain: String.raw`Chaque terme vaut $\sin x$, donc $A(x)=3\sin x$.`, level: 2 },
    { id: 'm2-x-017', prompt: String.raw`Linéarise : $\cos^2x=a+b\cos(2x)$. Donne $a;b$.`,
      answer: '1/2;1/2', vars: [], check: 'tuple',
      topic: "Linéarisation", sec: 'm2-s-transfo',
      steps: [
        String.raw`Notion : linéariser $\cos^2x$, c'est l'écrire sans carré à l'aide de $\cos2x$. On part de la formule de duplication $\cos2x=2\cos^2x-1$.`,
        String.raw`On isole $\cos^2x$ : $2\cos^2x=1+\cos2x$.`,
        String.raw`$\cos^2x=\frac{1+\cos2x}2=\frac12+\frac12\cos2x$, donc $a=\frac12$ et $b=\frac12$.`,
        String.raw`Contrôle : en $x=0$, $1=\frac12+\frac12$ ✔ ; en $x=\frac\pi2$, $0=\frac12-\frac12$ ✔.`
      ],
      rule: String.raw`$\cos^2x=\frac{1+\cos2x}{2}$ et $\sin^2x=\frac{1-\cos2x}{2}$`,
      pitfall: String.raw`Confondre avec la linéarisation de $\sin^2x$, qui a un signe moins.`,
      mistakes: [
        { expr: '1/2;-1/2', msg: String.raw`C'est la linéarisation de $\sin^2x$. Pour $\cos^2x$ le signe est $+$ (contrôle en $x=0$ : $\cos^20=1$).` },
        { expr: '1;1', msg: String.raw`En $x=0$ cela donnerait $1+1=2\neq\cos^20=1$ : il faut diviser par 2.` }
      ],
      hint: String.raw`$\cos 2x=2\cos^2x-1$.`,
      explain: String.raw`$\cos2x=2\cos^2x-1$ donne $\cos^2x=\frac{1+\cos2x}{2}=\frac12+\frac12\cos2x$.`, level: 1 },
    { id: 'm2-x-018', prompt: String.raw`Linéarise : $\sin^2(3x)=a+b\cos(cx)$ avec $c\gt0$. Donne $a;b;c$.`,
      answer: '1/2;-1/2;6', vars: [], check: 'tuple',
      topic: "Linéarisation", sec: 'm2-s-transfo',
      steps: [
        String.raw`Notion : $\sin^2u=\frac{1-\cos2u}{2}$ (déduite de $\cos2u=1-2\sin^2u$), valable pour tout angle $u$.`,
        String.raw`On pose $u=3x$, donc l'angle double vaut $2u=6x$.`,
        String.raw`$\sin^2(3x)=\frac{1-\cos(6x)}{2}=\frac12-\frac12\cos(6x)$ : $a=\frac12$, $b=-\frac12$, $c=6$.`,
        String.raw`Contrôle en $x=0$ : $\sin^20=0$ et $\frac12-\frac12\cos0=0$ ✔.`
      ],
      rule: String.raw`$\sin^2u=\frac{1-\cos2u}{2}$`,
      pitfall: String.raw`Oublier de doubler l'angle ($6x$ et non $3x$).`,
      mistakes: [
        { expr: '1/2;-1/2;3', msg: String.raw`L'angle est doublé : $2\times3x=6x$, donc $c=6$.` },
        { expr: '1/2;1/2;6', msg: String.raw`$\sin^2u=\frac{1-\cos2u}{2}$ : signe moins (le $+$ est pour $\cos^2u$).` },
        { expr: '1/2;-1/2;9', msg: String.raw`On double l'angle ($2\times3x=6x$), on ne l'élève pas au carré.` }
      ],
      hint: String.raw`$\sin^2u=\frac{1-\cos 2u}{2}$ avec $u=3x$.`,
      explain: String.raw`$\sin^2(3x)=\frac{1-\cos(6x)}{2}=\frac12-\frac12\cos(6x)$.`, level: 2 },
    { id: 'm2-x-019', prompt: String.raw`Linéarise : $\cos^3x=a\cos x+b\cos(3x)$. Donne $a;b$.`,
      answer: '3/4;1/4', vars: [], check: 'tuple',
      topic: "Linéarisation", sec: 'm2-s-transfo',
      steps: [
        String.raw`Notion : pour linéariser $\cos^3x$, on utilise la formule de triplication $\cos3x=4\cos^3x-3\cos x$, obtenue en développant $\cos(2x+x)$.`,
        String.raw`On isole le cube : $4\cos^3x=\cos3x+3\cos x$.`,
        String.raw`On divise par 4 : $\cos^3x=\frac34\cos x+\frac14\cos3x$, donc $a=\frac34$ et $b=\frac14$.`,
        String.raw`Contrôles : en $x=0$, $1=\frac34+\frac14$ ✔ ; en $x=\frac\pi3$, $\cos^3\frac\pi3=\frac18$ et $\frac34\times\frac12+\frac14\cos\pi=\frac38-\frac14=\frac18$ ✔.`
      ],
      rule: String.raw`$\cos3x=4\cos^3x-3\cos x$, d'où $\cos^3x=\frac{3\cos x+\cos3x}{4}$`,
      pitfall: String.raw`Inverser les coefficients $\frac34$ et $\frac14$.`,
      mistakes: [
        { expr: '1/4;3/4', msg: String.raw`Coefficients inversés : $4\cos^3x=\cos3x+3\cos x$ donne $\cos^3x=\frac34\cos x+\frac14\cos3x$.` },
        { expr: '3/4;-1/4', msg: String.raw`Signe : de $\cos3x=4\cos^3x-3\cos x$ on tire $4\cos^3x=\cos3x+3\cos x$ (le $\cos3x$ garde le signe $+$).` }
      ],
      hint: String.raw`Pars de $\cos 3x=4\cos^3x-3\cos x$.`,
      explain: String.raw`$4\cos^3x=\cos3x+3\cos x$, donc $\cos^3x=\frac34\cos x+\frac14\cos3x$.`, level: 3 },
    { id: 'm2-x-020', prompt: String.raw`Transforme en somme : $\sin(3x)\cos(x)=a\sin(4x)+b\sin(2x)$. Donne $a;b$.`,
      answer: '1/2;1/2', vars: [], check: 'tuple',
      topic: "Produit en somme", sec: 'm2-s-transfo',
      steps: [
        String.raw`Notion : formule « produit en somme », $\sin p\cos q=\frac12\left[\sin(p+q)+\sin(p-q)\right]$ ; elle vient de l'addition des formules de $\sin(p+q)$ et $\sin(p-q)$.`,
        String.raw`Avec $p=3x$ et $q=x$ : $p+q=4x$ et $p-q=2x$.`,
        String.raw`$\sin3x\cos x=\frac12\sin4x+\frac12\sin2x$, donc les coefficients demandés valent $a=\frac12$ et $b=\frac12$.`,
        String.raw`Contrôle en $x=\frac\pi4$ : $\sin\frac{3\pi}4\cos\frac\pi4=\frac{\sqrt2}2\times\frac{\sqrt2}2=\frac12$ et $\frac12\sin\pi+\frac12\sin\frac\pi2=\frac12$ ✔.`
      ],
      rule: String.raw`$\sin p\cos q=\frac12\left[\sin(p+q)+\sin(p-q)\right]$`,
      pitfall: String.raw`Oublier le facteur $\frac12$.`,
      mistakes: [
        { expr: '1;1', msg: String.raw`N'oublie pas le facteur $\frac12$ : $\sin p\cos q=\frac12[\sin(p+q)+\sin(p-q)]$.` },
        { expr: '1/2;-1/2', msg: String.raw`$\sin p\cos q=\frac12[\sin(p+q)+\sin(p-q)]$ : les deux termes ont le signe $+$ (ici $p-q=2x\gt0$).` }
      ],
      hint: String.raw`$\sin a\cos b=\frac12\left[\sin(a+b)+\sin(a-b)\right]$.`,
      explain: String.raw`$\sin3x\cos x=\frac12\left[\sin4x+\sin2x\right]$.`, level: 2 },
    { id: 'm2-x-021', prompt: String.raw`Factorise : $\cos(5x)+\cos(3x)=a\cos(bx)\cos(cx)$ avec $b\gt c\gt0$. Donne $a;b;c$.`,
      answer: '2;4;1', vars: [], check: 'tuple',
      topic: "Somme en produit", sec: 'm2-s-transfo',
      steps: [
        String.raw`Notion : formule « somme en produit », $\cos p+\cos q=2\cos\frac{p+q}{2}\cos\frac{p-q}{2}$ : on fait apparaître la demi-somme et la demi-différence des angles.`,
        String.raw`$p=5x$ et $q=3x$ : $\frac{p+q}{2}=\frac{8x}{2}=4x$ et $\frac{p-q}{2}=\frac{2x}2=x$.`,
        String.raw`$\cos5x+\cos3x=2\cos(4x)\cos(x)$ : $a=2$, $b=4$, $c=1$ (on a bien $b\gt c$).`,
        String.raw`Contrôle en $x=0$ : $1+1=2$ et $2\cos0\cos0=2$ ✔.`
      ],
      rule: String.raw`$\cos p+\cos q=2\cos\frac{p+q}2\cos\frac{p-q}2$`,
      pitfall: String.raw`Oublier de diviser les angles par 2, ou le facteur 2 devant.`,
      mistakes: [
        { expr: '2;8;2', msg: String.raw`On prend la DEMI-somme et la DEMI-différence : $\frac{5x+3x}{2}=4x$ et $\frac{5x-3x}{2}=x$.` },
        { expr: '1;4;1', msg: String.raw`$\cos p+\cos q=2\cos\frac{p+q}2\cos\frac{p-q}2$ : il y a un facteur 2 (en $x=0$, la somme vaut 2).` },
        { expr: '2;1;4', msg: String.raw`On demande $b\gt c$ : écris $2\cos(4x)\cos(x)$, donc $b=4$ puis $c=1$.` }
      ],
      hint: String.raw`$\cos p+\cos q=2\cos\frac{p+q}{2}\cos\frac{p-q}{2}$.`,
      explain: String.raw`$\cos5x+\cos3x=2\cos\frac{8x}{2}\cos\frac{2x}{2}=2\cos(4x)\cos(x)$.`, level: 3 },
    { id: 'm2-x-022', prompt: String.raw`Écris $\cos x+\sin x=R\cos(x-\varphi)$ avec $R\gt0$ et $\varphi\in]-\pi,\pi]$. Donne $R;\varphi$.`,
      answer: 'sqrt(2);pi/4', vars: [], check: 'tuple',
      topic: "Forme R cos(x − φ)", sec: 'm2-s-transfo',
      steps: [
        String.raw`Notion : $a\cos x+b\sin x=R\cos(x-\varphi)$ avec $R=\sqrt{a^2+b^2}$ (amplitude) et $\varphi$ tel que $\cos\varphi=\frac aR$, $\sin\varphi=\frac bR$. On l'obtient en développant $R\cos(x-\varphi)=R\cos\varphi\cos x+R\sin\varphi\sin x$ et en identifiant.`,
        String.raw`Ici $a=b=1$ : $R=\sqrt{1+1}=\sqrt2$.`,
        String.raw`$\cos\varphi=\frac1{\sqrt2}=\frac{\sqrt2}2$ et $\sin\varphi=\frac{\sqrt2}2$ : $\varphi=\frac\pi4$.`,
        String.raw`$\cos x+\sin x=\sqrt2\cos\left(x-\frac\pi4\right)$. Contrôle en $x=0$ : $1=\sqrt2\times\frac{\sqrt2}2$ ✔.`
      ],
      rule: String.raw`$R=\sqrt{a^2+b^2}$, $\cos\varphi=\frac aR$, $\sin\varphi=\frac bR$`,
      pitfall: String.raw`Oublier la racine dans $R$, ou se tromper sur le signe de $\varphi$.`,
      mistakes: [
        { expr: '2;pi/4', msg: String.raw`$R=\sqrt{a^2+b^2}=\sqrt{1+1}=\sqrt2$ : tu as oublié la racine carrée.` },
        { expr: 'sqrt(2);-pi/4', msg: String.raw`$\sin\varphi=\frac bR=\frac{1}{\sqrt2}\gt0$ : $\varphi=+\frac\pi4$.` },
        { expr: 'sqrt(2);3*pi/4', msg: String.raw`$\cos\varphi=\frac{\sqrt2}2\gt0$ : $\varphi$ est dans le 1er quadrant, c'est $\frac\pi4$ (et $\cos\frac{3\pi}4\lt0$).` }
      ],
      hint: String.raw`$R=\sqrt{a^2+b^2}$, $\cos\varphi=\frac aR$, $\sin\varphi=\frac bR$.`,
      explain: String.raw`$R=\sqrt2$ et $\cos\varphi=\sin\varphi=\frac{\sqrt2}{2}$, donc $\varphi=\frac\pi4$ : $\cos x+\sin x=\sqrt2\cos\left(x-\frac\pi4\right)$.`, level: 2 },
    { id: 'm2-x-023', prompt: String.raw`Écris $\sqrt3\cos x-\sin x=R\cos(x-\varphi)$ avec $R\gt0$ et $\varphi\in]-\pi,\pi]$. Donne $R;\varphi$.`,
      answer: '2;-pi/6', vars: [], check: 'tuple',
      topic: "Forme R cos(x − φ)", sec: 'm2-s-transfo',
      steps: [
        String.raw`Notion : $a\cos x+b\sin x=R\cos(x-\varphi)$ avec $R=\sqrt{a^2+b^2}$, $\cos\varphi=\frac aR$ et $\sin\varphi=\frac bR$ ; le signe de $b$ donne le signe de $\sin\varphi$.`,
        String.raw`Ici $a=\sqrt3$ et $b=-1$ (attention au signe) : $R=\sqrt{3+1}=2$.`,
        String.raw`$\cos\varphi=\frac{\sqrt3}2$ et $\sin\varphi=-\frac12$ : angle du 4e quadrant, $\varphi=-\frac\pi6$.`,
        String.raw`Donc $\sqrt3\cos x-\sin x=2\cos\left(x+\frac\pi6\right)$. Contrôle en $x=0$ : $\sqrt3=2\cos\frac\pi6$ ✔.`
      ],
      rule: String.raw`$R=\sqrt{a^2+b^2}$, $\cos\varphi=\frac aR$, $\sin\varphi=\frac bR$`,
      pitfall: String.raw`Oublier que $b=-1$ rend $\sin\varphi$ négatif.`,
      mistakes: [
        { expr: '2;pi/6', msg: String.raw`$\sin\varphi=\frac bR=-\frac12\lt0$ : $\varphi$ est négatif.` },
        { expr: '4;-pi/6', msg: String.raw`$R=\sqrt{a^2+b^2}=\sqrt{3+1}=2$ : n'oublie pas la racine carrée.` },
        { expr: '2;-pi/3', msg: String.raw`$\cos\varphi=\frac{\sqrt3}2$ et $\sin\varphi=-\frac12$ correspondent à $-\frac\pi6$ : tu as échangé cos et sin.` }
      ],
      hint: String.raw`$a=\sqrt3$, $b=-1$ : $R=\sqrt{a^2+b^2}$, $\cos\varphi=\frac aR$, $\sin\varphi=\frac bR$.`,
      explain: String.raw`$R=2$, $\cos\varphi=\frac{\sqrt3}{2}$, $\sin\varphi=-\frac12$, donc $\varphi=-\frac\pi6$ : $\sqrt3\cos x-\sin x=2\cos\left(x+\frac\pi6\right)$.`, level: 3 },
    { id: 'm2-x-024', prompt: String.raw`Dérive $f(x)=\cos\left(2x+\frac{\pi}{3}\right)$.`,
      answer: '-2*sin(2*x+pi/3)', vars: ['x'], check: 'expr',
      topic: "Dérivées trigonométriques", sec: 'm2-s-fonctions',
      steps: [
        String.raw`Notion : dérivée d'une composée, $(\cos u)'=-u'\sin u$ : on dérive le cosinus (ce qui donne $-\sin$) et on multiplie par la dérivée de l'intérieur.`,
        String.raw`$u(x)=2x+\frac\pi3$, donc $u'(x)=2$ (la constante $\frac\pi3$ a une dérivée nulle, mais elle reste dans l'angle).`,
        String.raw`$f'(x)=-2\sin\left(2x+\frac\pi3\right)$.`
      ],
      rule: String.raw`$(\cos u)'=-u'\sin u$`,
      pitfall: String.raw`Oublier la dérivée intérieure (le facteur 2) ou le signe moins.`,
      mistakes: [
        { expr: '2*sin(2*x+pi/3)', msg: String.raw`$(\cos u)'=-u'\sin u$ : il manque le signe moins.` },
        { expr: '-sin(2*x+pi/3)', msg: String.raw`Il manque la dérivée intérieure $u'=2$.` },
        { expr: '-2*sin(2*x)', msg: String.raw`La constante $\frac\pi3$ reste dans le sinus : seule sa dérivée est nulle, elle ne disparaît pas de l'angle.` }
      ],
      hint: String.raw`$(\cos u)'=-u'\sin u$.`,
      explain: String.raw`$u=2x+\frac\pi3$, $u'=2$, donc $f'(x)=-2\sin\left(2x+\frac\pi3\right)$.`, level: 1 },
    { id: 'm2-x-025', prompt: String.raw`Dérive $f(x)=x\sin x+\cos x$ et simplifie.`,
      answer: 'x*cos(x)', vars: ['x'], check: 'expr',
      topic: "Dérivée d'un produit", sec: 'm2-s-fonctions',
      steps: [
        String.raw`Notion : on dérive terme à terme ; pour le produit $x\sin x$ on utilise $(uv)'=u'v+uv'$, et l'on sait que $(\sin x)'=\cos x$ et $(\cos x)'=-\sin x$.`,
        String.raw`$(x\sin x)'=1\times\sin x+x\times\cos x=\sin x+x\cos x$.`,
        String.raw`$(\cos x)'=-\sin x$.`,
        String.raw`$f'(x)=\sin x+x\cos x-\sin x=x\cos x$.`
      ],
      rule: String.raw`$(uv)'=u'v+uv'$, $(\sin x)'=\cos x$, $(\cos x)'=-\sin x$`,
      pitfall: String.raw`Dériver un produit facteur par facteur : $(uv)'\neq u'v'$.`,
      mistakes: [
        { expr: '2*sin(x)+x*cos(x)', msg: String.raw`$(\cos x)'=-\sin x$ (et non $+\sin x$) : le terme $\sin x$ s'élimine.` },
        { expr: 'cos(x)-sin(x)', msg: String.raw`$(uv)'=u'v+uv'$ : $(x\sin x)'=\sin x+x\cos x$, pas $1\times\cos x$.` },
        { expr: 'sin(x)+x*cos(x)', msg: String.raw`Tu as oublié de dériver le terme $\cos x$, qui donne $-\sin x$.` }
      ],
      hint: String.raw`$(x\sin x)'=\sin x+x\cos x$.`,
      explain: String.raw`$f'(x)=\sin x+x\cos x-\sin x=x\cos x$.`, level: 2 },
    { id: 'm2-x-026', prompt: String.raw`Dérive $f(x)=\tan(2x)$ sur $\left]-\frac{\pi}{4},\frac{\pi}{4}\right[$.`,
      answer: '2/cos(2*x)^2', vars: ['x'], check: 'expr', domain: [-0.7, 0.7],
      topic: "Dérivée de la tangente", sec: 'm2-s-fonctions',
      steps: [
        String.raw`Notion : $(\tan u)'=u'\left(1+\tan^2u\right)=\frac{u'}{\cos^2u}$ : dérivée de la tangente multipliée par la dérivée intérieure.`,
        String.raw`$u=2x$, $u'=2$. Sur $\left]-\frac\pi4,\frac\pi4\right[$, $2x\in\left]-\frac\pi2,\frac\pi2\right[$, donc $\cos(2x)\neq0$ ✔.`,
        String.raw`$f'(x)=\frac{2}{\cos^2(2x)}=2\left(1+\tan^2(2x)\right)$.`
      ],
      rule: String.raw`$(\tan u)'=u'(1+\tan^2u)=\frac{u'}{\cos^2u}$`,
      pitfall: String.raw`Oublier le facteur 2 de la dérivée intérieure.`,
      mistakes: [
        { expr: '1/cos(2*x)^2', msg: String.raw`Il manque la dérivée intérieure : $(\tan u)'=\frac{u'}{\cos^2u}$ avec $u'=2$.` },
        { expr: '1+tan(2*x)^2', msg: String.raw`Il manque le facteur $u'=2$ : $(\tan u)'=u'(1+\tan^2u)$.` },
        { expr: '2/cos(x)^2', msg: String.raw`Le cosinus porte sur l'angle $2x$ : $\frac{2}{\cos^2(2x)}$.` }
      ],
      hint: String.raw`$(\tan u)'=u'\left(1+\tan^2u\right)=\frac{u'}{\cos^2u}$.`,
      explain: String.raw`$f'(x)=2\left(1+\tan^2(2x)\right)=\frac{2}{\cos^2(2x)}$.`, level: 2 },
    { id: 'm2-x-027', prompt: String.raw`Dérive $f(x)=\arctan(x^2)$.`,
      answer: '2*x/(1+x^4)', vars: ['x'], check: 'expr',
      topic: "Dérivée d'arctan", sec: 'm2-s-reciproques',
      steps: [
        String.raw`Notion : $(\arctan X)'=\frac{1}{1+X^2}$, et pour une composée $(\arctan u)'=\frac{u'}{1+u^2}$.`,
        String.raw`$u=x^2$, $u'=2x$ et $u^2=(x^2)^2=x^4$.`,
        String.raw`$f'(x)=\frac{2x}{1+x^4}$. Contrôle : $f'(0)=0$, cohérent car $x^2$ (donc $\arctan(x^2)$) a un minimum en 0 ✔.`
      ],
      rule: String.raw`$(\arctan u)'=\frac{u'}{1+u^2}$`,
      pitfall: String.raw`Écrire $1+x^2$ au lieu de $1+u^2=1+x^4$.`,
      mistakes: [
        { expr: '1/(1+x^4)', msg: String.raw`Il manque la dérivée intérieure $u'=2x$ au numérateur.` },
        { expr: '2*x/(1+x^2)', msg: String.raw`$(\arctan u)'=\frac{u'}{1+u^2}$ avec $u^2=(x^2)^2=x^4$, pas $x^2$.` }
      ],
      hint: String.raw`$(\arctan u)'=\frac{u'}{1+u^2}$.`,
      explain: String.raw`$u=x^2$, $u'=2x$, donc $f'(x)=\frac{2x}{1+x^4}$.`, level: 2 },
    { id: 'm2-x-028', prompt: String.raw`Dérive $f(x)=\arcsin(2x)$ sur $\left]-\frac12,\frac12\right[$.`,
      answer: '2/sqrt(1-4*x^2)', vars: ['x'], check: 'expr', domain: [-0.45, 0.45],
      topic: "Dérivée d'arcsin", sec: 'm2-s-reciproques',
      steps: [
        String.raw`Notion : $(\arcsin X)'=\frac{1}{\sqrt{1-X^2}}$ pour $-1\lt X\lt1$, et pour une composée $(\arcsin u)'=\frac{u'}{\sqrt{1-u^2}}$.`,
        String.raw`$u=2x$, $u'=2$ et $u^2=(2x)^2=4x^2$ ; pour $x\in\left]-\frac12,\frac12\right[$, $2x\in]-1,1[$ ✔.`,
        String.raw`$f'(x)=\frac{2}{\sqrt{1-4x^2}}$.`
      ],
      rule: String.raw`$(\arcsin u)'=\frac{u'}{\sqrt{1-u^2}}$`,
      pitfall: String.raw`Écrire $1-2x^2$ au lieu de $1-(2x)^2=1-4x^2$.`,
      mistakes: [
        { expr: '1/sqrt(1-4*x^2)', msg: String.raw`Il manque la dérivée intérieure $u'=2$ au numérateur.` },
        { expr: '2/sqrt(1-2*x^2)', msg: String.raw`$u^2=(2x)^2=4x^2$ : le 2 est aussi élevé au carré.` }
      ],
      hint: String.raw`$(\arcsin u)'=\frac{u'}{\sqrt{1-u^2}}$.`,
      explain: String.raw`$u=2x$, $u'=2$, donc $f'(x)=\frac{2}{\sqrt{1-4x^2}}$.`, level: 2 },
    { id: 'm2-x-029', prompt: String.raw`Calcule $\arccos\left(-\frac{\sqrt3}{2}\right)$.`,
      answer: '5*pi/6', vars: [], check: 'value',
      topic: "Arc cosinus", sec: 'm2-s-reciproques',
      steps: [
        String.raw`Notion : $\arccos y$ est l'unique angle de $[0,\pi]$ dont le cosinus vaut $y$. Pour un argument négatif : $\arccos(-y)=\pi-\arccos y$.`,
        String.raw`Angle de référence : $\cos\frac\pi6=\frac{\sqrt3}2$, donc $\arccos\frac{\sqrt3}2=\frac\pi6$.`,
        String.raw`$\arccos\left(-\frac{\sqrt3}2\right)=\pi-\frac\pi6=\frac{5\pi}6$.`,
        String.raw`Vérification : $\cos\frac{5\pi}6=-\cos\frac\pi6=-\frac{\sqrt3}2$ ✔ et $\frac{5\pi}6\in[0,\pi]$ ✔.`
      ],
      rule: String.raw`$\arccos y\in[0,\pi]$ et $\arccos(-y)=\pi-\arccos y$`,
      pitfall: String.raw`Répondre $-\frac\pi6$ ou $\frac{7\pi}6$, qui sortent de $[0,\pi]$.`,
      mistakes: [
        { expr: '-pi/6', msg: String.raw`$\arccos$ est à valeurs dans $[0,\pi]$ : jamais d'angle négatif. D'ailleurs $\cos\left(-\frac\pi6\right)=+\frac{\sqrt3}2$.` },
        { expr: '7*pi/6', msg: String.raw`$\cos\frac{7\pi}6=-\frac{\sqrt3}2$, mais $\frac{7\pi}{6}\notin[0,\pi]$ : prends l'angle de la moitié haute du cercle.` },
        { expr: '2*pi/3', msg: String.raw`$\cos\frac{2\pi}{3}=-\frac12$ ; ici l'angle de référence est $\frac\pi6$ (car $\cos\frac\pi6=\frac{\sqrt3}2$).` }
      ],
      hint: String.raw`$\arccos(-x)=\pi-\arccos x$.`,
      explain: String.raw`$\arccos\left(-\frac{\sqrt3}2\right)=\pi-\arccos\frac{\sqrt3}2=\pi-\frac\pi6=\frac{5\pi}6$.`, level: 2 },
    { id: 'm2-x-030', prompt: String.raw`Calcule $\arcsin\left(\sin\frac{7\pi}{6}\right)$.`,
      answer: '-pi/6', vars: [], check: 'value',
      topic: "Composition arcsin ∘ sin", sec: 'm2-s-reciproques',
      steps: [
        String.raw`Notion : $\arcsin$ renvoie un angle de $\left[-\frac\pi2,\frac\pi2\right]$ ; donc $\arcsin(\sin x)=x$ seulement si $x$ est déjà dans cet intervalle. Ici $\frac{7\pi}6\gt\frac\pi2$ : on calcule d'abord le sinus.`,
        String.raw`$\frac{7\pi}6=\pi+\frac\pi6$ et $\sin(\pi+x)=-\sin x$ : $\sin\frac{7\pi}6=-\sin\frac\pi6=-\frac12$.`,
        String.raw`$\arcsin\left(-\frac12\right)$ : l'angle de $\left[-\frac\pi2,\frac\pi2\right]$ dont le sinus vaut $-\frac12$ est $-\frac\pi6$ (arcsin est impaire).`,
        String.raw`Résultat : $-\frac\pi6$. Contrôle : $\sin\left(-\frac\pi6\right)=-\frac12=\sin\frac{7\pi}6$ ✔.`
      ],
      rule: String.raw`$\arcsin(\sin x)=x$ uniquement si $x\in\left[-\frac\pi2,\frac\pi2\right]$`,
      pitfall: String.raw`« Simplifier » directement $\arcsin(\sin x)=x$.`,
      mistakes: [
        { expr: '7*pi/6', msg: String.raw`$\arcsin(\sin x)=x$ seulement si $x\in\left[-\frac\pi2,\frac\pi2\right]$ ; $\frac{7\pi}6$ est en dehors.` },
        { expr: 'pi/6', msg: String.raw`$\sin\frac{7\pi}{6}=-\frac12\lt0$ (3e quadrant), donc l'arc sinus est négatif.` },
        { expr: '-1/2', msg: String.raw`$-\frac12$ est $\sin\frac{7\pi}6$ : il reste à prendre l'arc sinus, qui renvoie un angle.` }
      ],
      hint: String.raw`Calcule d'abord $\sin\frac{7\pi}{6}$.`,
      explain: String.raw`$\sin\frac{7\pi}6=-\frac12$, et $\arcsin\left(-\frac12\right)=-\frac\pi6\in\left[-\frac\pi2,\frac\pi2\right]$.`, level: 3 },
    { id: 'm2-x-031', prompt: String.raw`Calcule $\arctan\left(-\sqrt3\right)+\arccos\left(-\frac12\right)$.`,
      answer: 'pi/3', vars: [], check: 'value',
      topic: "Fonctions réciproques", sec: 'm2-s-reciproques',
      steps: [
        String.raw`Notion : $\arctan$ est impaire et à valeurs dans $\left]-\frac\pi2,\frac\pi2\right[$ ; $\arccos$ est à valeurs dans $[0,\pi]$, avec $\arccos(-y)=\pi-\arccos y$.`,
        String.raw`$\tan\frac\pi3=\sqrt3$, donc $\arctan\sqrt3=\frac\pi3$ et, par imparité, $\arctan(-\sqrt3)=-\frac\pi3$.`,
        String.raw`$\arccos\frac12=\frac\pi3$, donc $\arccos\left(-\frac12\right)=\pi-\frac\pi3=\frac{2\pi}3$.`,
        String.raw`Somme : $-\frac\pi3+\frac{2\pi}3=\frac\pi3$.`
      ],
      rule: String.raw`$\arctan(-x)=-\arctan x$ et $\arccos(-y)=\pi-\arccos y$`,
      pitfall: String.raw`Donner une valeur négative à $\arccos$, ou oublier l'imparité d'arctan.`,
      mistakes: [
        { expr: 'pi', msg: String.raw`$\arctan$ est impaire : $\arctan(-\sqrt3)=-\frac\pi3$ (et non $+\frac\pi3$).` },
        { expr: '-2*pi/3', msg: String.raw`$\arccos\left(-\frac12\right)=\frac{2\pi}3$ (valeurs dans $[0,\pi]$), pas $-\frac\pi3$.` },
        { expr: '0', msg: String.raw`Tu as pris $\arccos\left(-\frac12\right)=\frac\pi3$ en oubliant le signe : c'est $\pi-\frac\pi3=\frac{2\pi}3$.` }
      ],
      hint: String.raw`$\arctan\sqrt3=\frac\pi3$ et $\arccos(-x)=\pi-\arccos x$.`,
      explain: String.raw`$\arctan(-\sqrt3)=-\frac\pi3$ et $\arccos\left(-\frac12\right)=\frac{2\pi}3$ ; la somme vaut $\frac\pi3$.`, level: 2 },
    { id: 'm2-x-032', prompt: String.raw`Calcule $\cos\left(\arcsin\frac35\right)$.`,
      answer: '4/5', vars: [], check: 'value',
      topic: "Composition cos ∘ arcsin", sec: 'm2-s-reciproques',
      steps: [
        String.raw`Notion : $\theta=\arcsin\frac35$ est l'angle de $\left[-\frac\pi2,\frac\pi2\right]$ tel que $\sin\theta=\frac35$. Sur cet intervalle (moitié droite du cercle), $\cos\theta\geq0$.`,
        String.raw`$\cos^2\theta=1-\sin^2\theta=1-\frac{9}{25}=\frac{16}{25}$.`,
        String.raw`Comme $\cos\theta\geq0$ : $\cos\theta=\sqrt{\frac{16}{25}}=\frac45$.`,
        String.raw`On retrouve la formule générale $\cos(\arcsin x)=\sqrt{1-x^2}$ : $\sqrt{1-\frac{9}{25}}=\frac45$ ✔.`
      ],
      rule: String.raw`$\cos(\arcsin x)=\sqrt{1-x^2}$ et $\sin(\arccos x)=\sqrt{1-x^2}$`,
      pitfall: String.raw`Prendre le signe moins : l'arc sinus est entre $-\frac\pi2$ et $\frac\pi2$, où le cosinus est positif.`,
      mistakes: [
        { expr: '-4/5', msg: String.raw`$\arcsin\frac35\in\left[-\frac\pi2,\frac\pi2\right]$ : son cosinus est positif.` },
        { expr: '3/5', msg: String.raw`$\sin(\arcsin x)=x$, mais ici on demande le cosinus : $\sqrt{1-x^2}$.` },
        { expr: '16/25', msg: String.raw`$\frac{16}{25}$ est $\cos^2\theta$ : il faut encore prendre la racine carrée.` }
      ],
      hint: String.raw`$\cos(\arcsin x)=\sqrt{1-x^2}$.`,
      explain: String.raw`Avec $\theta=\arcsin\frac35$, $\cos\theta\geq0$ et $\cos\theta=\sqrt{1-\frac9{25}}=\frac45$.`, level: 3 },
    { id: 'm2-x-033', prompt: String.raw`Résous $\cos x=\frac12$ sur $]-\pi,\pi]$.`,
      answer: '-pi/3;pi/3', vars: [], check: 'set',
      topic: "Équations trigonométriques", sec: 'm2-s-equations',
      steps: [
        String.raw`Notion : $\cos x=\cos a\Leftrightarrow x=a+2k\pi$ ou $x=-a+2k\pi$ : deux points du cercle ont la même abscisse, symétriques par rapport à l'axe horizontal.`,
        String.raw`$\frac12=\cos\frac\pi3$, donc $x=\frac\pi3+2k\pi$ ou $x=-\frac\pi3+2k\pi$.`,
        String.raw`On garde les valeurs de $]-\pi,\pi]$ : $k=0$ donne $\frac\pi3$ et $-\frac\pi3$ ; les autres valeurs de $k$ sortent de l'intervalle.`,
        String.raw`$S=\left\{-\frac\pi3\,;\frac\pi3\right\}$. Vérification : $\cos\left(\pm\frac\pi3\right)=\frac12$ ✔.`
      ],
      rule: String.raw`$\cos x=\cos a\Leftrightarrow x=\pm a+2k\pi$`,
      pitfall: String.raw`Oublier la solution négative $-\frac\pi3$.`,
      mistakes: [
        { expr: 'pi/3', msg: String.raw`Il y a deux solutions : $\pm\frac\pi3$ (le cosinus est pair).` },
        { expr: '-pi/6;pi/6', msg: String.raw`$\cos\frac\pi6=\frac{\sqrt3}2$ ; c'est $\cos\frac\pi3$ qui vaut $\frac12$.` },
        { expr: 'pi/3;2*pi/3', msg: String.raw`$\cos\frac{2\pi}3=-\frac12$ : pour le cosinus, la seconde famille est $-a$, pas $\pi-a$.` }
      ],
      hint: String.raw`$\cos x=\cos a\Leftrightarrow x=\pm a+2k\pi$.`,
      explain: String.raw`$\cos x=\cos\frac\pi3\Leftrightarrow x=\pm\frac\pi3+2k\pi$ ; dans $]-\pi,\pi]$ : $-\frac\pi3$ et $\frac\pi3$.`, level: 1 },
    { id: 'm2-x-034', prompt: String.raw`Résous $\sin x=\frac{\sqrt3}{2}$ sur $[0,2\pi[$.`,
      answer: 'pi/3;2*pi/3', vars: [], check: 'set',
      topic: "Équations trigonométriques", sec: 'm2-s-equations',
      steps: [
        String.raw`Notion : $\sin x=\sin a\Leftrightarrow x=a+2k\pi$ ou $x=\pi-a+2k\pi$ : deux points de même ordonnée, symétriques par rapport à l'axe vertical.`,
        String.raw`$\frac{\sqrt3}2=\sin\frac\pi3$, donc $x=\frac\pi3+2k\pi$ ou $x=\pi-\frac\pi3+2k\pi=\frac{2\pi}3+2k\pi$.`,
        String.raw`Dans $[0,2\pi[$, on prend $k=0$ : $\frac\pi3$ et $\frac{2\pi}3$.`,
        String.raw`Vérification : $\sin\frac{2\pi}3=\sin\frac\pi3=\frac{\sqrt3}2$ ✔. $S=\left\{\frac\pi3\,;\frac{2\pi}3\right\}$.`
      ],
      rule: String.raw`$\sin x=\sin a\Leftrightarrow x=a+2k\pi$ ou $x=\pi-a+2k\pi$`,
      pitfall: String.raw`Utiliser $-a$ (règle du cosinus) au lieu de $\pi-a$.`,
      mistakes: [
        { expr: 'pi/3;5*pi/3', msg: String.raw`$\sin x=\sin a$ donne $x=\pi-a$ (et non $-a$, qui correspond au cosinus) : $\sin\frac{5\pi}3=-\frac{\sqrt3}2$.` },
        { expr: 'pi/3', msg: String.raw`Il manque la seconde solution $\pi-\frac\pi3=\frac{2\pi}3$.` },
        { expr: 'pi/6;5*pi/6', msg: String.raw`$\sin\frac\pi6=\frac12$ : c'est $\sin\frac\pi3$ qui vaut $\frac{\sqrt3}2$.` }
      ],
      hint: String.raw`$\sin x=\sin a\Leftrightarrow x=a+2k\pi$ ou $x=\pi-a+2k\pi$.`,
      explain: String.raw`$\sin x=\sin\frac\pi3$ : $x=\frac\pi3+2k\pi$ ou $x=\frac{2\pi}3+2k\pi$ ; dans $[0,2\pi[$ : $\frac\pi3$ et $\frac{2\pi}3$.`, level: 1 },
    { id: 'm2-x-035', prompt: String.raw`Résous $\sin x=-\frac12$ sur $[0,2\pi[$.`,
      answer: '7*pi/6;11*pi/6', vars: [], check: 'set',
      topic: "Équations trigonométriques", sec: 'm2-s-equations',
      steps: [
        String.raw`Notion : $\sin x=\sin a\Leftrightarrow x=a+2k\pi$ ou $x=\pi-a+2k\pi$. On écrit d'abord $-\frac12$ comme un sinus remarquable : $-\frac12=\sin\left(-\frac\pi6\right)$.`,
        String.raw`Familles : $x=-\frac\pi6+2k\pi$ ou $x=\pi-\left(-\frac\pi6\right)+2k\pi=\frac{7\pi}6+2k\pi$.`,
        String.raw`Dans $[0,2\pi[$ : la première famille donne $-\frac\pi6+2\pi=\frac{11\pi}6$ ($k=1$) ; la seconde donne $\frac{7\pi}6$ ($k=0$).`,
        String.raw`Vérification : les deux points sont en bas du cercle (sinus négatif) ✔. $S=\left\{\frac{7\pi}6\,;\frac{11\pi}6\right\}$.`
      ],
      rule: String.raw`$\sin x=\sin a\Leftrightarrow x=a+2k\pi$ ou $x=\pi-a+2k\pi$`,
      pitfall: String.raw`Garder $-\frac\pi6$, qui n'est pas dans $[0,2\pi[$.`,
      mistakes: [
        { expr: '-pi/6;7*pi/6', msg: String.raw`$-\frac\pi6\notin[0,2\pi[$ : ajoute $2\pi$ pour obtenir $\frac{11\pi}6$.` },
        { expr: '7*pi/6;5*pi/6', msg: String.raw`$\sin\frac{5\pi}{6}=+\frac12$ : les solutions de $\sin x=-\frac12$ sont en bas du cercle.` }
      ],
      hint: String.raw`$-\frac12=\sin\left(-\frac\pi6\right)$.`,
      explain: String.raw`$x=-\frac\pi6+2k\pi$ ou $x=\frac{7\pi}6+2k\pi$ ; dans $[0,2\pi[$ : $\frac{7\pi}6$ et $\frac{11\pi}6$.`, level: 2 },
    { id: 'm2-x-036', prompt: String.raw`Résous $\cos x=-\frac{\sqrt2}{2}$ sur $]-\pi,\pi]$.`,
      answer: '-3*pi/4;3*pi/4', vars: [], check: 'set',
      topic: "Équations trigonométriques", sec: 'm2-s-equations',
      steps: [
        String.raw`Notion : $\cos x=\cos a\Leftrightarrow x=\pm a+2k\pi$. On écrit $-\frac{\sqrt2}2$ comme un cosinus : $\cos\frac{3\pi}4=-\cos\frac\pi4=-\frac{\sqrt2}2$.`,
        String.raw`Donc $x=\frac{3\pi}4+2k\pi$ ou $x=-\frac{3\pi}4+2k\pi$.`,
        String.raw`Dans $]-\pi,\pi]$ ($k=0$) : $-\frac{3\pi}4$ et $\frac{3\pi}4$.`,
        String.raw`Vérification : ces deux points sont à gauche du cercle (abscisse négative) ✔.`
      ],
      rule: String.raw`$\cos x=\cos a\Leftrightarrow x=\pm a+2k\pi$`,
      pitfall: String.raw`Prendre $\pm\frac\pi4$, dont le cosinus est positif.`,
      mistakes: [
        { expr: '-pi/4;pi/4', msg: String.raw`$\cos\frac\pi4=+\frac{\sqrt2}2$ : il faut des points à gauche du cercle, d'angle de référence $\frac\pi4$ mais d'abscisse négative.` },
        { expr: '3*pi/4;5*pi/4', msg: String.raw`$\frac{5\pi}4\notin]-\pi,\pi]$ : c'est le même point que $-\frac{3\pi}{4}$.` }
      ],
      hint: String.raw`$-\frac{\sqrt2}2=\cos\frac{3\pi}4$.`,
      explain: String.raw`$\cos x=\cos\frac{3\pi}4\Leftrightarrow x=\pm\frac{3\pi}4+2k\pi$ ; dans $]-\pi,\pi]$ : $\pm\frac{3\pi}{4}$.`, level: 2 },
    { id: 'm2-x-037', prompt: String.raw`Résous $\tan x=-1$ sur $]-\pi,\pi]$.`,
      answer: '-pi/4;3*pi/4', vars: [], check: 'set',
      topic: "Équations trigonométriques", sec: 'm2-s-equations',
      steps: [
        String.raw`Notion : la tangente est $\pi$-périodique, donc $\tan x=\tan a\Leftrightarrow x=a+k\pi$ (une seule famille, mais deux solutions par tour).`,
        String.raw`$-1=\tan\left(-\frac\pi4\right)$ (car $\tan$ est impaire et $\tan\frac\pi4=1$), donc $x=-\frac\pi4+k\pi$.`,
        String.raw`Dans $]-\pi,\pi]$ : $k=0$ donne $-\frac\pi4$, $k=1$ donne $\frac{3\pi}4$ ; $k=-1$ donne $-\frac{5\pi}4\lt-\pi$, exclu.`,
        String.raw`Vérification : $\tan\frac{3\pi}4=\frac{\sqrt2/2}{-\sqrt2/2}=-1$ ✔.`
      ],
      rule: String.raw`$\tan x=\tan a\Leftrightarrow x=a+k\pi$`,
      pitfall: String.raw`Utiliser la période $2\pi$ et oublier la seconde solution.`,
      mistakes: [
        { expr: '-pi/4', msg: String.raw`La tangente est $\pi$-périodique : $-\frac\pi4+\pi=\frac{3\pi}4$ est aussi solution.` },
        { expr: '-pi/4;-3*pi/4', msg: String.raw`$\tan\left(-\frac{3\pi}{4}\right)=+1$. La seconde solution est $-\frac\pi4+\pi=\frac{3\pi}4$.` }
      ],
      hint: String.raw`$\tan x=\tan a\Leftrightarrow x=a+k\pi$.`,
      explain: String.raw`$\tan x=\tan\left(-\frac\pi4\right)\Leftrightarrow x=-\frac\pi4+k\pi$ ; dans $]-\pi,\pi]$ : $-\frac\pi4$ et $\frac{3\pi}4$.`, level: 2 },
    { id: 'm2-x-038', prompt: String.raw`Résous $\sin(2x)=\frac{\sqrt2}{2}$ sur $[0,2\pi[$.`,
      answer: 'pi/8;3*pi/8;9*pi/8;11*pi/8', vars: [], check: 'set',
      topic: "Équations trigonométriques", sec: 'm2-s-equations',
      steps: [
        String.raw`Notion : on pose $X=2x$ et on résout $\sin X=\sin\frac\pi4$ ; puis on revient à $x$ en divisant TOUT par 2, y compris le terme de période.`,
        String.raw`$X=\frac\pi4+2k\pi$ ou $X=\pi-\frac\pi4+2k\pi=\frac{3\pi}4+2k\pi$.`,
        String.raw`Division par 2 : $x=\frac\pi8+k\pi$ ou $x=\frac{3\pi}8+k\pi$.`,
        String.raw`Dans $[0,2\pi[$ ($k=0$ et $k=1$) : $\frac\pi8$, $\frac{9\pi}8$, $\frac{3\pi}8$, $\frac{11\pi}8$.`,
        String.raw`Vérification : $\sin\left(2\times\frac{9\pi}8\right)=\sin\frac{9\pi}4=\sin\left(2\pi+\frac\pi4\right)=\frac{\sqrt2}2$ ✔.`
      ],
      rule: String.raw`Résoudre en $X=2x$, puis diviser par 2 : la période $2k\pi$ devient $k\pi$`,
      pitfall: String.raw`Oublier que la période devient $k\pi$ : on perd la moitié des solutions.`,
      mistakes: [
        { expr: 'pi/8;3*pi/8', msg: String.raw`En divisant par 2, $2k\pi$ devient $k\pi$ : ajoute $\pi$ aux solutions trouvées ($\frac{9\pi}8$ et $\frac{11\pi}8$).` },
        { expr: 'pi/4;3*pi/4', msg: String.raw`Ce sont les valeurs de $X=2x$ : il faut diviser par 2 (et ajouter les $k\pi$).` }
      ],
      hint: String.raw`Résous d'abord pour $X=2x$, puis divise par 2 (période $\pi$ pour $x$).`,
      explain: String.raw`$2x=\frac\pi4+2k\pi$ ou $2x=\frac{3\pi}4+2k\pi$, donc $x=\frac\pi8+k\pi$ ou $x=\frac{3\pi}8+k\pi$ : $\frac\pi8,\frac{3\pi}8,\frac{9\pi}8,\frac{11\pi}8$.`, level: 3 },
    { id: 'm2-x-039', prompt: String.raw`Résous $2\cos^2x-\cos x-1=0$ sur $[0,2\pi[$.`,
      answer: '0;2*pi/3;4*pi/3', vars: [], check: 'set',
      topic: "Équation du second degré en cos x", sec: 'm2-s-equations',
      steps: [
        String.raw`Notion : l'équation est du second degré en $\cos x$. On pose $X=\cos x$ (avec $-1\leq X\leq1$), on résout en $X$, puis on résout les équations $\cos x=X$.`,
        String.raw`$2X^2-X-1=0$ : $\Delta=1+8=9$, $X=\frac{1\pm3}{4}$, soit $X=1$ ou $X=-\frac12$ (les deux sont dans $[-1,1]$).`,
        String.raw`$\cos x=1\Leftrightarrow x=2k\pi$ : dans $[0,2\pi[$, $x=0$.`,
        String.raw`$\cos x=-\frac12=\cos\frac{2\pi}3\Leftrightarrow x=\pm\frac{2\pi}3+2k\pi$ : dans $[0,2\pi[$, $\frac{2\pi}3$ et $-\frac{2\pi}3+2\pi=\frac{4\pi}3$.`,
        String.raw`$S=\left\{0\,;\frac{2\pi}3\,;\frac{4\pi}3\right\}$. Vérification en $x=\frac{2\pi}3$ : $2\times\frac14-\left(-\frac12\right)-1=0$ ✔.`
      ],
      rule: String.raw`Poser $X=\cos x\in[-1,1]$, résoudre le trinôme, puis $\cos x=X$`,
      pitfall: String.raw`Oublier $x=0$, ou donner les valeurs de $X$ au lieu de celles de $x$.`,
      mistakes: [
        { expr: '1;-1/2', msg: String.raw`Ce sont les valeurs de $X=\cos x$ : il faut ensuite résoudre $\cos x=1$ et $\cos x=-\frac12$.` },
        { expr: '2*pi/3;4*pi/3', msg: String.raw`$\cos x=1$ donne aussi $x=0$ (et $0\in[0,2\pi[$).` }
      ],
      hint: String.raw`Pose $X=\cos x$ : $2X^2-X-1=0$.`,
      explain: String.raw`$2X^2-X-1=(X-1)(2X+1)=0$ donne $\cos x=1$ ou $\cos x=-\frac12$, d'où $x=0$, $\frac{2\pi}3$, $\frac{4\pi}3$.`, level: 3 },
    { id: 'm2-x-040', prompt: String.raw`Résous $\cos(3x)=\cos(x)$ sur $[0,\pi]$.`,
      answer: '0;pi/2;pi', vars: [], check: 'set',
      topic: "Équation cos A = cos B", sec: 'm2-s-equations',
      steps: [
        String.raw`Notion : $\cos A=\cos B\Leftrightarrow A=B+2k\pi$ ou $A=-B+2k\pi$ : deux angles de même cosinus sont égaux ou opposés, à un nombre entier de tours près.`,
        String.raw`Cas 1 : $3x=x+2k\pi\Leftrightarrow2x=2k\pi\Leftrightarrow x=k\pi$. Dans $[0,\pi]$ : $0$ et $\pi$.`,
        String.raw`Cas 2 : $3x=-x+2k\pi\Leftrightarrow4x=2k\pi\Leftrightarrow x=\frac{k\pi}2$. Dans $[0,\pi]$ : $0$, $\frac\pi2$, $\pi$.`,
        String.raw`Réunion : $S=\left\{0\,;\frac\pi2\,;\pi\right\}$. Vérification en $\frac\pi2$ : $\cos\frac{3\pi}2=0=\cos\frac\pi2$ ✔.`
      ],
      rule: String.raw`$\cos A=\cos B\Leftrightarrow A=\pm B+2k\pi$`,
      pitfall: String.raw`Oublier la famille $A=-B+2k\pi$.`,
      mistakes: [
        { expr: '0;pi', msg: String.raw`Tu n'as gardé que la famille $3x=x+2k\pi$ ; l'autre, $3x=-x+2k\pi$, donne $x=\frac{k\pi}{2}$, d'où $\frac\pi2$.` },
        { expr: 'pi/2', msg: String.raw`$x=0$ et $x=\pi$ conviennent aussi : $\cos0=\cos0$ et $\cos3\pi=-1=\cos\pi$.` },
        { expr: '0;pi/2', msg: String.raw`Il manque $x=\pi$ : $\cos3\pi=-1=\cos\pi$, et $\pi\in[0,\pi]$.` }
      ],
      hint: String.raw`$\cos A=\cos B\Leftrightarrow A=B+2k\pi$ ou $A=-B+2k\pi$.`,
      explain: String.raw`$3x=x+2k\pi$ donne $x=k\pi$ et $3x=-x+2k\pi$ donne $x=\frac{k\pi}{2}$ ; dans $[0,\pi]$ : $0$, $\frac\pi2$, $\pi$.`, level: 3 }
  ]
});
