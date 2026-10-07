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
      explain: String.raw`$135\times\frac{\pi}{180}=\frac{3\pi}{4}$ ($135=3\times45$).`,
      why: { 0: String.raw`$\frac{2\pi}{3}$ correspond à $120^\circ$.`, 2: String.raw`$\frac{5\pi}{6}$ correspond à $150^\circ$.`, 3: String.raw`$\frac{3\pi}{2}$ correspond à $270^\circ$.` }, level: 1 },
    { id: 'm2-q-002', q: String.raw`Si $\sin x=\frac35$ et $x\in\left]\frac\pi2,\pi\right[$, alors $\cos x$ vaut :`, choices: [String.raw`$\frac45$`, String.raw`$-\frac45$`, String.raw`$\frac25$`], answer: 1,
      explain: String.raw`$\cos^2x=1-\frac{9}{25}=\frac{16}{25}$, donc $\cos x=\pm\frac45$ ; dans le 2e quadrant, $\cos x\lt0$ : $\cos x=-\frac45$.`,
      why: { 0: String.raw`Dans le 2e quadrant (en haut à gauche), le cosinus est négatif.`, 2: String.raw`$\cos x=\pm\sqrt{1-\sin^2x}$, pas $1-\sin x$.` }, level: 2 },
    { id: 'm2-q-003', q: String.raw`Que vaut $\cos\frac{\pi}{3}$ ?`, choices: [String.raw`$\frac{\sqrt3}{2}$`, String.raw`$\frac12$`, String.raw`$\frac{\sqrt2}{2}$`, String.raw`$\sqrt3$`], answer: 1,
      explain: String.raw`$\cos\frac\pi3=\frac12$ (et $\sin\frac\pi3=\frac{\sqrt3}{2}$).`,
      why: { 0: String.raw`$\frac{\sqrt3}{2}=\cos\frac\pi6=\sin\frac\pi3$ : confusion entre $\frac\pi6$ et $\frac\pi3$, ou entre cos et sin.`, 2: String.raw`$\frac{\sqrt2}{2}$ est la valeur en $\frac\pi4$.`, 3: String.raw`$\sqrt3=\tan\frac\pi3$.` }, level: 1 },
    { id: 'm2-q-004', q: String.raw`Que vaut $\tan\frac{\pi}{6}$ ?`, choices: [String.raw`$\sqrt3$`, String.raw`$\frac12$`, String.raw`$\frac{\sqrt3}{3}$`, String.raw`$\frac{\sqrt3}{2}$`], answer: 2,
      explain: String.raw`$\tan\frac\pi6=\frac{1/2}{\sqrt3/2}=\frac{1}{\sqrt3}=\frac{\sqrt3}{3}$.`,
      why: { 0: String.raw`$\sqrt3=\tan\frac\pi3$.`, 1: String.raw`$\frac12=\sin\frac\pi6$.`, 3: String.raw`$\frac{\sqrt3}{2}=\cos\frac\pi6$.` }, level: 1 },
    { id: 'm2-q-005', q: String.raw`Que vaut $\cos\frac{2\pi}{3}$ ?`, choices: [String.raw`$-\frac12$`, String.raw`$\frac12$`, String.raw`$-\frac{\sqrt3}{2}$`, String.raw`$\frac{\sqrt3}{2}$`], answer: 0,
      explain: String.raw`$\frac{2\pi}3=\pi-\frac\pi3$ : $\cos\frac{2\pi}3=-\cos\frac\pi3=-\frac12$.`,
      why: { 1: String.raw`Le point est dans le 2e quadrant, où le cosinus est négatif.`, 2: String.raw`L'angle de référence est $\frac\pi3$ (et non $\frac\pi6$) : la valeur absolue est $\frac12$.`, 3: String.raw`$\frac{\sqrt3}{2}=\sin\frac{2\pi}{3}$.` }, level: 2 },
    { id: 'm2-q-006', q: String.raw`Que vaut $\sin\left(-\frac{5\pi}{6}\right)$ ?`, choices: [String.raw`$\frac12$`, String.raw`$-\frac{\sqrt3}{2}$`, String.raw`$-\frac12$`, String.raw`$\frac{\sqrt3}{2}$`], answer: 2,
      explain: String.raw`$\sin$ est impaire : $\sin\left(-\frac{5\pi}6\right)=-\sin\frac{5\pi}6=-\sin\frac\pi6=-\frac12$.`,
      why: { 0: String.raw`$\sin$ est impaire : $\sin(-x)=-\sin x$ ; le point est en bas (3e quadrant).`, 1: String.raw`$-\frac{\sqrt3}{2}=\cos\left(-\frac{5\pi}{6}\right)$ : confusion cos/sin.`, 3: String.raw`Angle de référence $\frac\pi6$ : la valeur absolue est $\frac12$, et le signe est négatif.` }, level: 2 },
    { id: 'm2-q-007', q: String.raw`Que vaut $\cos\frac{17\pi}{4}$ ?`, choices: [String.raw`$-\frac{\sqrt2}{2}$`, String.raw`$0$`, String.raw`$\frac{\sqrt2}{2}$`, String.raw`$\frac12$`], answer: 2,
      explain: String.raw`$\frac{17\pi}{4}=4\pi+\frac\pi4$ (deux tours) : $\cos\frac{17\pi}4=\cos\frac\pi4=\frac{\sqrt2}2$.`,
      why: { 0: String.raw`On ne retire que des multiples de $2\pi$ : $\frac{17\pi}{4}-4\pi=\frac\pi4$, point du 1er quadrant.`, 1: String.raw`$0$ correspond à un multiple impair de $\frac\pi2$, ce qui n'est pas le cas.`, 3: String.raw`$\frac12=\cos\frac\pi3$.` }, level: 2 },
    { id: 'm2-q-008', q: String.raw`Quelle est la mesure principale (dans $]-\pi,\pi]$) de $\frac{29\pi}{6}$ ?`, choices: [String.raw`$-\frac{\pi}{6}$`, String.raw`$\frac{5\pi}{6}$`, String.raw`$\frac{\pi}{6}$`, String.raw`$-\frac{7\pi}{6}$`], answer: 1,
      explain: String.raw`$\frac{29\pi}{6}=\frac{24\pi}{6}+\frac{5\pi}{6}=4\pi+\frac{5\pi}6$, et $\frac{5\pi}6\in]-\pi,\pi]$.`,
      why: { 0: String.raw`$\frac{29\pi}6-5\pi=-\frac\pi6$, mais $5\pi$ n'est pas un nombre entier de tours.`, 2: String.raw`$\frac{29\pi}{6}-\frac{\pi}{6}=\frac{14\pi}{3}$ n'est pas un multiple de $2\pi$.`, 3: String.raw`$-\frac{7\pi}6$ représente bien le même point, mais n'est pas dans $]-\pi,\pi]$.` }, level: 2 },
    { id: 'm2-q-009', q: String.raw`$\sin(\pi-x)$ est égal à :`, choices: [String.raw`$-\sin x$`, String.raw`$\cos x$`, String.raw`$\sin x$`, String.raw`$-\cos x$`], answer: 2,
      explain: String.raw`$\pi-x$ est le symétrique de $x$ par rapport à l'axe des ordonnées : même ordonnée, donc même sinus.`,
      why: { 0: String.raw`C'est $\sin(-x)$ ou $\sin(\pi+x)$.`, 1: String.raw`C'est $\sin\left(\frac\pi2-x\right)$.`, 3: String.raw`C'est $\cos(\pi-x)$.` }, level: 1 },
    { id: 'm2-q-010', q: String.raw`$\cos\left(\frac{\pi}{2}+x\right)$ est égal à :`, choices: [String.raw`$\sin x$`, String.raw`$-\sin x$`, String.raw`$\cos x$`, String.raw`$-\cos x$`], answer: 1,
      explain: String.raw`$\cos\left(\frac\pi2+x\right)=\cos\frac\pi2\cos x-\sin\frac\pi2\sin x=-\sin x$.`,
      why: { 0: String.raw`C'est $\cos\left(\frac\pi2-x\right)$.`, 2: String.raw`Ajouter $\frac\pi2$ fait tourner d'un quart de tour : cos et sin s'échangent.`, 3: String.raw`C'est $\cos(\pi+x)$.` }, level: 2 },
    { id: 'm2-q-011', q: String.raw`$\tan(\pi+x)$ est égal à :`, choices: [String.raw`$\tan x$`, String.raw`$-\tan x$`, String.raw`$\frac{1}{\tan x}$`], answer: 0,
      explain: String.raw`$\tan(\pi+x)=\frac{-\sin x}{-\cos x}=\tan x$ : la tangente est $\pi$-périodique.`,
      why: { 1: String.raw`C'est $\tan(-x)$ ou $\tan(\pi-x)$.`, 2: String.raw`C'est $\tan\left(\frac\pi2-x\right)$.` }, level: 2 },
    { id: 'm2-q-012', q: String.raw`Simplifier $\cos(\pi-x)-\sin\left(\frac{\pi}{2}-x\right)$.`, choices: [String.raw`$0$`, String.raw`$2\cos x$`, String.raw`$-2\cos x$`, String.raw`$-2\sin x$`], answer: 2,
      explain: String.raw`$\cos(\pi-x)=-\cos x$ et $\sin\left(\frac\pi2-x\right)=\cos x$, donc $-\cos x-\cos x=-2\cos x$.`,
      why: { 0: String.raw`$\cos(\pi-x)=-\cos x$, pas $\cos x$.`, 1: String.raw`Erreur de signe : $\cos(\pi-x)=-\cos x$.`, 3: String.raw`$\sin\left(\frac\pi2-x\right)=\cos x$, pas $\sin x$.` }, level: 2 },
    { id: 'm2-q-013', q: String.raw`$\cos(a+b)$ est égal à :`, choices: [String.raw`$\cos a\cos b+\sin a\sin b$`, String.raw`$\cos a\cos b-\sin a\sin b$`, String.raw`$\cos a+\cos b$`, String.raw`$\sin a\cos b+\cos a\sin b$`], answer: 1,
      explain: String.raw`Formule d'addition : « cos-cos, sin-sin, signe contraire ».`,
      why: { 0: String.raw`C'est $\cos(a-b)$.`, 2: String.raw`Le cosinus n'est pas linéaire : avec $a=b=0$, on aurait $1=2$.`, 3: String.raw`C'est $\sin(a+b)$.` }, level: 1 },
    { id: 'm2-q-014', q: String.raw`$\sin(a-b)$ est égal à :`, choices: [String.raw`$\sin a\cos b+\cos a\sin b$`, String.raw`$\cos a\cos b+\sin a\sin b$`, String.raw`$\sin a\cos b-\cos a\sin b$`, String.raw`$\cos a\sin b-\sin a\cos b$`], answer: 2,
      explain: String.raw`On remplace $b$ par $-b$ dans $\sin(a+b)$ : $\sin a\cos b-\cos a\sin b$.`,
      why: { 0: String.raw`C'est $\sin(a+b)$.`, 1: String.raw`C'est $\cos(a-b)$.`, 3: String.raw`C'est $\sin(b-a)=-\sin(a-b)$.` }, level: 2 },
    { id: 'm2-q-015', q: String.raw`Que vaut $\cos\frac{\pi}{12}$ ? (indice : $\frac{\pi}{12}=\frac\pi3-\frac\pi4$)`, choices: [String.raw`$\frac{\sqrt6-\sqrt2}{4}$`, String.raw`$\frac12-\frac{\sqrt2}{2}$`, String.raw`$\frac{\sqrt6+\sqrt2}{4}$`, String.raw`$\frac{\sqrt6+\sqrt2}{2}$`], answer: 2,
      explain: String.raw`$\cos\frac\pi3\cos\frac\pi4+\sin\frac\pi3\sin\frac\pi4=\frac{\sqrt2}{4}+\frac{\sqrt6}{4}=\frac{\sqrt6+\sqrt2}{4}\approx0{,}966$.`,
      why: { 0: String.raw`C'est $\sin\frac\pi{12}$ : dans $\cos(a-b)$ le signe est $+$.`, 1: String.raw`$\cos(a-b)\neq\cos a-\cos b$ ; d'ailleurs ce nombre est négatif, impossible pour un angle du 1er quadrant.`, 3: String.raw`$\frac{\sqrt3}{2}\times\frac{\sqrt2}{2}=\frac{\sqrt6}{4}$ ; ta valeur dépasse 1, impossible pour un cosinus.` }, level: 2 },
    { id: 'm2-q-016', q: String.raw`$\sin 2a$ est égal à :`, choices: [String.raw`$2\sin a$`, String.raw`$\sin^2a$`, String.raw`$2\sin a\cos a$`, String.raw`$\cos^2a-\sin^2a$`], answer: 2,
      explain: String.raw`Duplication : $\sin2a=\sin(a+a)=2\sin a\cos a$.`,
      why: { 0: String.raw`Le sinus n'est pas linéaire : avec $a=\frac\pi2$, $\sin\pi=0\neq2$.`, 1: String.raw`$\sin^2 a=(\sin a)^2$ n'a rien à voir avec l'angle double.`, 3: String.raw`C'est $\cos 2a$.` }, level: 1 },
    { id: 'm2-q-017', q: String.raw`Laquelle de ces expressions n'est PAS égale à $\cos 2a$ ?`, choices: [String.raw`$1-2\sin^2a$`, String.raw`$2\cos^2a-1$`, String.raw`$\cos^2a-\sin^2a$`, String.raw`$1-2\cos^2a$`], answer: 3,
      explain: String.raw`$1-2\cos^2a=-(2\cos^2a-1)=-\cos2a$. Les trois autres sont les trois écritures de $\cos2a$.`,
      why: { 0: String.raw`$1-2\sin^2a$ est bien égal à $\cos2a$ (remplace $\cos^2a$ par $1-\sin^2a$).`, 1: String.raw`$2\cos^2a-1$ est bien égal à $\cos2a$.`, 2: String.raw`$\cos^2a-\sin^2a$ est la forme de base de $\cos2a$.` }, level: 2 },
    { id: 'm2-q-018', q: String.raw`Linéariser $\sin^2x$.`, choices: [String.raw`$\frac{1+\cos 2x}{2}$`, String.raw`$\frac{1-\cos 2x}{2}$`, String.raw`$\frac{1-\sin 2x}{2}$`, String.raw`$1-\cos^2(2x)$`], answer: 1,
      explain: String.raw`De $\cos2x=1-2\sin^2x$ on tire $\sin^2x=\frac{1-\cos2x}{2}$. Contrôle en $x=0$ : $0$.`,
      why: { 0: String.raw`C'est $\cos^2x$ (en $x=0$ elle vaut 1, alors que $\sin^20=0$).`, 2: String.raw`C'est $\cos 2x$ qui apparaît, pas $\sin2x$.`, 3: String.raw`$1-\cos^2(2x)=\sin^2(2x)$, ce n'est pas linéarisé et c'est un autre angle.` }, level: 2 },
    { id: 'm2-q-019', q: String.raw`$\cos a\cos b$ est égal à :`, choices: [String.raw`$\frac12\left[\cos(a+b)-\cos(a-b)\right]$`, String.raw`$\cos(ab)$`, String.raw`$\frac12\left[\sin(a+b)+\sin(a-b)\right]$`, String.raw`$\frac12\left[\cos(a-b)+\cos(a+b)\right]$`], answer: 3,
      explain: String.raw`On additionne $\cos(a+b)$ et $\cos(a-b)$ : $2\cos a\cos b$. D'où la formule.`,
      why: { 0: String.raw`Cette expression vaut $-\sin a\sin b$.`, 1: String.raw`Aucune formule ne fait apparaître le produit des angles.`, 2: String.raw`C'est $\sin a\cos b$.` }, level: 2 },
    { id: 'm2-q-020', q: String.raw`$\sin p+\sin q$ est égal à :`, choices: [String.raw`$2\cos\frac{p+q}{2}\sin\frac{p-q}{2}$`, String.raw`$2\sin\frac{p+q}{2}\cos\frac{p-q}{2}$`, String.raw`$\sin(p+q)$`, String.raw`$2\sin\frac{p+q}{2}\sin\frac{p-q}{2}$`], answer: 1,
      explain: String.raw`Contrôle avec $p=q$ : on doit trouver $2\sin p$ ; seule $2\sin\frac{p+q}{2}\cos\frac{p-q}{2}$ convient.`,
      why: { 0: String.raw`C'est $\sin p-\sin q$ (elle s'annule pour $p=q$).`, 2: String.raw`Le sinus n'est pas linéaire.`, 3: String.raw`Avec $p=q$, elle donne 0 au lieu de $2\sin p$.` }, level: 3 },
    { id: 'm2-q-021', q: String.raw`$\sqrt3\cos x+\sin x$ est égal à :`, choices: [String.raw`$2\cos\left(x-\frac{\pi}{6}\right)$`, String.raw`$2\cos\left(x-\frac{\pi}{3}\right)$`, String.raw`$4\cos\left(x-\frac{\pi}{6}\right)$`, String.raw`$2\cos\left(x+\frac{\pi}{6}\right)$`], answer: 0,
      explain: String.raw`$R=\sqrt{3+1}=2$, $\cos\varphi=\frac{\sqrt3}{2}$, $\sin\varphi=\frac12$, donc $\varphi=\frac\pi6$.`,
      why: { 1: String.raw`$\cos\varphi=\frac{\sqrt3}2$ et $\sin\varphi=\frac12$ donnent $\frac\pi6$ : tu as échangé cos et sin.`, 2: String.raw`$R=\sqrt{a^2+b^2}=\sqrt4=2$, pas $a^2+b^2$.`, 3: String.raw`$2\cos\left(x+\frac\pi6\right)=\sqrt3\cos x-\sin x$ : erreur de signe.` }, level: 2 },
    { id: 'm2-q-022', q: String.raw`Avec $t=\tan\frac{x}{2}$, $\sin x$ s'écrit :`, choices: [String.raw`$\frac{1-t^2}{1+t^2}$`, String.raw`$\frac{2t}{1-t^2}$`, String.raw`$\frac{2t}{1+t^2}$`, String.raw`$\frac{t}{1+t^2}$`], answer: 2,
      explain: String.raw`$\sin x=2\sin\frac x2\cos\frac x2=2\tan\frac x2\cos^2\frac x2=\frac{2t}{1+t^2}$.`,
      why: { 0: String.raw`C'est $\cos x$.`, 1: String.raw`C'est $\tan x$.`, 3: String.raw`Il manque le facteur 2 de $\sin x=2\sin\frac x2\cos\frac x2$.` }, level: 3 },
    { id: 'm2-q-023', q: String.raw`Solutions réelles de $\cos x=\frac12$ ($k\in\mathbb{Z}$) :`, choices: [String.raw`$x=\frac{\pi}{3}+2k\pi$ ou $x=\frac{2\pi}{3}+2k\pi$`, String.raw`$x=\frac{\pi}{3}+2k\pi$ ou $x=-\frac{\pi}{3}+2k\pi$`, String.raw`$x=\pm\frac{\pi}{6}+2k\pi$`, String.raw`$x=\frac{\pi}{3}+k\pi$`], answer: 1,
      explain: String.raw`$\cos x=\cos\frac\pi3\Leftrightarrow x=\pm\frac\pi3+2k\pi$.`,
      why: { 0: String.raw`La seconde famille $\pi-a$ est celle du sinus ; $\cos\frac{2\pi}{3}=-\frac12$.`, 2: String.raw`$\cos\frac\pi6=\frac{\sqrt3}2$, pas $\frac12$.`, 3: String.raw`$\cos\left(\frac\pi3+\pi\right)=-\frac12$ : la période du cosinus est $2\pi$.` }, level: 1 },
    { id: 'm2-q-024', q: String.raw`$\sin x=\sin a$ équivaut à ($k\in\mathbb{Z}$) :`, choices: [String.raw`$x=\pm a+2k\pi$`, String.raw`$x=a+k\pi$`, String.raw`$x=a+2k\pi$ ou $x=\pi+a+2k\pi$`, String.raw`$x=a+2k\pi$ ou $x=\pi-a+2k\pi$`], answer: 3,
      explain: String.raw`Deux points ont la même ordonnée : $a$ et son symétrique par rapport à l'axe des ordonnées, $\pi-a$.`,
      why: { 0: String.raw`C'est la règle du cosinus ($-a$ a le même cosinus, pas le même sinus).`, 1: String.raw`C'est la règle de la tangente.`, 2: String.raw`$\sin(\pi+a)=-\sin a$.` }, level: 2 },
    { id: 'm2-q-025', q: String.raw`Combien l'équation $\sin x=\frac13$ a-t-elle de solutions dans $[0,2\pi[$ ?`, choices: [String.raw`$0$`, String.raw`$1$`, String.raw`$2$`, String.raw`$4$`], answer: 2,
      explain: String.raw`La droite horizontale d'ordonnée $\frac13$ coupe le cercle en deux points : $x=\arcsin\frac13$ et $x=\pi-\arcsin\frac13$.`,
      why: { 0: String.raw`$\frac13\in[-1,1]$ : il y a des solutions, même si ce n'est pas une valeur remarquable.`, 1: String.raw`Il y a aussi $\pi-\arcsin\frac13$.`, 3: String.raw`Sur un seul tour, il n'y a que deux points d'ordonnée $\frac13$.` }, level: 2 },
    { id: 'm2-q-026', q: String.raw`Solutions de $\cos(2x)=0$ ($k\in\mathbb{Z}$) :`, choices: [String.raw`$x=\frac{\pi}{4}+k\frac{\pi}{2}$`, String.raw`$x=\frac{\pi}{4}+k\pi$`, String.raw`$x=\frac{\pi}{2}+k\pi$`, String.raw`$x=\frac{\pi}{4}+2k\pi$`], answer: 0,
      explain: String.raw`$2x=\frac\pi2+k\pi\Leftrightarrow x=\frac\pi4+\frac{k\pi}2$.`,
      why: { 1: String.raw`En divisant par 2, $k\pi$ devient $\frac{k\pi}{2}$ : tu perds la moitié des solutions (ex. $\frac{3\pi}{4}$).`, 2: String.raw`Ce sont les solutions de $\cos x=0$ ; il faut ensuite diviser par 2.`, 3: String.raw`$\cos X=0\Leftrightarrow X=\frac\pi2+k\pi$ (période $\pi$ pour les zéros), puis on divise par 2.` }, level: 2 },
    { id: 'm2-q-027', q: String.raw`Quelle est la période de $f(t)=\cos(4t+1)$ ?`, choices: [String.raw`$\frac{\pi}{2}$`, String.raw`$2\pi$`, String.raw`$8\pi$`, String.raw`$\pi$`], answer: 0,
      explain: String.raw`$T=\frac{2\pi}{\omega}=\frac{2\pi}{4}=\frac\pi2$.`,
      why: { 1: String.raw`$2\pi$ est la période de $\cos t$ ; ici la pulsation vaut 4.`, 2: String.raw`On divise $2\pi$ par $\omega$, on ne multiplie pas.`, 3: String.raw`$\pi$ serait la période de $\cos(2t+1)$.` }, level: 2 },
    { id: 'm2-q-028', q: String.raw`Dérivée de $x\mapsto\cos(3x)$ :`, choices: [String.raw`$3\sin(3x)$`, String.raw`$-\sin(3x)$`, String.raw`$-3\sin(3x)$`, String.raw`$-3\cos(3x)$`], answer: 2,
      explain: String.raw`$(\cos u)'=-u'\sin u$ avec $u=3x$, $u'=3$.`,
      why: { 0: String.raw`$(\cos)'=-\sin$ : il manque le signe moins.`, 1: String.raw`Il manque la dérivée intérieure $u'=3$.`, 3: String.raw`La dérivée de $\cos$ est $-\sin$, pas $-\cos$.` }, level: 1 },
    { id: 'm2-q-029', q: String.raw`Dérivée de $\tan$ :`, choices: [String.raw`$-\frac{1}{\cos^2x}$`, String.raw`$1+\tan^2x$`, String.raw`$\frac{1}{\cos x}$`, String.raw`$\tan^2x$`], answer: 1,
      explain: String.raw`$\left(\frac{\sin}{\cos}\right)'=\frac{\cos^2+\sin^2}{\cos^2}=\frac1{\cos^2x}=1+\tan^2x$.`,
      why: { 0: String.raw`$\tan$ est croissante : sa dérivée est positive.`, 2: String.raw`Il faut $\cos^2x$ au dénominateur.`, 3: String.raw`Il manque le terme $1$ : $\frac{\cos^2x+\sin^2x}{\cos^2x}=1+\tan^2x$.` }, level: 2 },
    { id: 'm2-q-030', q: String.raw`Que vaut $\arcsin\frac12$ ?`, choices: [String.raw`$\frac{\pi}{3}$`, String.raw`$\frac{5\pi}{6}$`, String.raw`$\frac{\pi}{6}$`, String.raw`$30$`], answer: 2,
      explain: String.raw`$\sin\frac\pi6=\frac12$ et $\frac\pi6\in\left[-\frac\pi2,\frac\pi2\right]$.`,
      why: { 0: String.raw`$\frac\pi3=\arccos\frac12$.`, 1: String.raw`$\sin\frac{5\pi}{6}=\frac12$ aussi, mais $\arcsin$ prend ses valeurs dans $\left[-\frac\pi2,\frac\pi2\right]$.`, 3: String.raw`Le résultat est en radians : $30^\circ=\frac\pi6$.` }, level: 1 },
    { id: 'm2-q-031', q: String.raw`Que vaut $\arccos\left(-\frac12\right)$ ?`, choices: [String.raw`$-\frac{\pi}{3}$`, String.raw`$\frac{2\pi}{3}$`, String.raw`$\frac{\pi}{3}$`, String.raw`$\frac{4\pi}{3}$`], answer: 1,
      explain: String.raw`$\cos\frac{2\pi}3=-\frac12$ et $\frac{2\pi}{3}\in[0,\pi]$. (Ou $\arccos(-x)=\pi-\arccos x=\pi-\frac\pi3$.)`,
      why: { 0: String.raw`$\arccos$ est à valeurs dans $[0,\pi]$ ; d'ailleurs $\cos\left(-\frac\pi3\right)=+\frac12$.`, 2: String.raw`$\cos\frac\pi3=+\frac12$.`, 3: String.raw`$\cos\frac{4\pi}{3}=-\frac12$, mais $\frac{4\pi}3\notin[0,\pi]$.` }, level: 2 },
    { id: 'm2-q-032', q: String.raw`Que vaut $\arcsin\left(\sin\frac{3\pi}{4}\right)$ ?`, choices: [String.raw`$\frac{3\pi}{4}$`, String.raw`$\frac{\pi}{4}$`, String.raw`$-\frac{\pi}{4}$`, String.raw`$\frac{\sqrt2}{2}$`], answer: 1,
      explain: String.raw`$\sin\frac{3\pi}4=\frac{\sqrt2}2$, et $\arcsin\frac{\sqrt2}2=\frac\pi4$.`,
      why: { 0: String.raw`$\arcsin(\sin x)=x$ seulement si $x\in\left[-\frac\pi2,\frac\pi2\right]$, ce qui n'est pas le cas de $\frac{3\pi}{4}$.`, 2: String.raw`$\sin\frac{3\pi}4\gt0$, donc son arc sinus est positif.`, 3: String.raw`$\frac{\sqrt2}2$ est $\sin\frac{3\pi}4$ ; l'arc sinus renvoie un angle.` }, level: 3 },
    { id: 'm2-q-033', q: String.raw`Que vaut $\arctan 2+\arctan\frac12$ ?`, choices: [String.raw`$\frac{\pi}{4}$`, String.raw`$1$`, String.raw`$\pi$`, String.raw`$\frac{\pi}{2}$`], answer: 3,
      explain: String.raw`Pour $x\gt0$, $\arctan x+\arctan\frac1x=\frac\pi2$.`,
      why: { 0: String.raw`$\frac\pi4=\arctan1$, mais $\arctan$ n'est pas « multiplicative » : $\arctan 2+\arctan\frac12\neq\arctan\left(2\times\frac12\right)$.`, 1: String.raw`Confusion avec le produit $2\times\frac12=1$.`, 2: String.raw`Chaque terme est dans $\left]0,\frac\pi2\right[$ : la somme est strictement inférieure à $\pi$.` }, level: 2 },
    { id: 'm2-q-034', q: String.raw`Dérivée de $\arctan$ :`, choices: [String.raw`$\frac{1}{1+x^2}$`, String.raw`$-\frac{1}{1+x^2}$`, String.raw`$\frac{1}{\sqrt{1-x^2}}$`, String.raw`$\frac{1}{\cos^2x}$`], answer: 0,
      explain: String.raw`$(\arctan x)'=\frac1{1+\tan^2(\arctan x)}=\frac1{1+x^2}$.`,
      why: { 1: String.raw`$\arctan$ est croissante : dérivée positive.`, 2: String.raw`C'est la dérivée de $\arcsin$.`, 3: String.raw`C'est la dérivée de $\tan$.` }, level: 2 },
    { id: 'm2-q-035', q: String.raw`Quel est l'ensemble de définition de $\arcsin$ ?`, choices: [String.raw`$\mathbb{R}$`, String.raw`$[-1,1]$`, String.raw`$\left[-\frac{\pi}{2},\frac{\pi}{2}\right]$`, String.raw`$[0,\pi]$`], answer: 1,
      explain: String.raw`$\arcsin x$ est l'angle dont le sinus vaut $x$ : il faut $x\in[-1,1]$. Ses valeurs sont dans $\left[-\frac\pi2,\frac\pi2\right]$.`,
      why: { 0: String.raw`C'est le domaine de $\arctan$.`, 2: String.raw`C'est l'ensemble des valeurs (l'image) de $\arcsin$, pas son domaine.`, 3: String.raw`C'est l'image de $\arccos$.` }, level: 2 }
  ],

  /* ============================== EXERCICES ============================== */
  exercises: [
    { id: 'm2-x-001', prompt: String.raw`Convertis $225^\circ$ en radians (valeur exacte).`,
      answer: '5*pi/4', vars: [], check: 'value',
      mistakes: [
        { expr: '3*pi/4', msg: String.raw`$\frac{3\pi}{4}$ correspond à $135^\circ$. Ici $225=180+45$.` },
        { expr: '225*180/pi', msg: String.raw`Pour passer en radians, on multiplie par $\frac{\pi}{180}$ (et non $\frac{180}{\pi}$).` }
      ],
      hint: String.raw`Multiplie par $\frac{\pi}{180}$ ; $225=5\times45$.`,
      explain: String.raw`$225\times\frac{\pi}{180}=\frac{225\pi}{180}=\frac{5\pi}{4}$.`, level: 1 },
    { id: 'm2-x-002', prompt: String.raw`On pose $t=\tan\frac{x}{2}=\frac12$. Calcule $\cos x$ puis $\sin x$ (réponse : $\cos x;\sin x$).`,
      answer: '3/5;4/5', vars: [], check: 'tuple',
      mistakes: [
        { expr: '4/5;3/5', msg: String.raw`$\cos x=\frac{1-t^2}{1+t^2}$ et $\sin x=\frac{2t}{1+t^2}$ : tu les as inversés.` },
        { expr: '3/5;2/5', msg: String.raw`$\sin x=\frac{2t}{1+t^2}$ : n'oublie pas le facteur 2.` }
      ],
      hint: String.raw`$\cos x=\frac{1-t^2}{1+t^2}$, $\sin x=\frac{2t}{1+t^2}$.`,
      explain: String.raw`$1+t^2=\frac54$ ; $\cos x=\frac{3/4}{5/4}=\frac35$ ; $\sin x=\frac{1}{5/4}=\frac45$. Contrôle : $\frac9{25}+\frac{16}{25}=1$.`, level: 2 },
    { id: 'm2-x-003', prompt: String.raw`Donne la valeur exacte de $\cos\frac{\pi}{6}$.`,
      answer: 'sqrt(3)/2', vars: [], check: 'value',
      mistakes: [
        { expr: '1/2', msg: String.raw`$\frac12=\cos\frac\pi3=\sin\frac\pi6$. Petit angle, grand cosinus : $\cos\frac\pi6=\frac{\sqrt3}{2}$.` }
      ],
      hint: String.raw`Tableau : $\cos$ vaut $\frac{\sqrt4}{2},\frac{\sqrt3}{2},\frac{\sqrt2}{2},\frac{\sqrt1}{2},\frac{\sqrt0}{2}$.`,
      explain: String.raw`$\cos\frac{\pi}{6}=\frac{\sqrt3}{2}$.`, level: 1 },
    { id: 'm2-x-004', prompt: String.raw`Donne la valeur exacte de $\sin\frac{2\pi}{3}$.`,
      answer: 'sqrt(3)/2', vars: [], check: 'value',
      mistakes: [
        { expr: '-sqrt(3)/2', msg: String.raw`$\frac{2\pi}{3}$ est dans le 2e quadrant (en haut à gauche) : le sinus y est positif.` },
        { expr: '-1/2', msg: String.raw`$-\frac12=\cos\frac{2\pi}{3}$ : confusion entre cosinus et sinus.` }
      ],
      hint: String.raw`$\frac{2\pi}{3}=\pi-\frac{\pi}{3}$ et $\sin(\pi-x)=\sin x$.`,
      explain: String.raw`$\sin\frac{2\pi}3=\sin\left(\pi-\frac\pi3\right)=\sin\frac\pi3=\frac{\sqrt3}2$.`, level: 1 },
    { id: 'm2-x-005', prompt: String.raw`Donne la valeur exacte de $\cos\frac{3\pi}{4}$.`,
      answer: '-sqrt(2)/2', vars: [], check: 'value',
      mistakes: [
        { expr: 'sqrt(2)/2', msg: String.raw`$\frac{3\pi}{4}$ est dans le 2e quadrant : cosinus négatif.` }
      ],
      hint: String.raw`$\frac{3\pi}{4}=\pi-\frac{\pi}{4}$.`,
      explain: String.raw`$\cos\frac{3\pi}4=-\cos\frac\pi4=-\frac{\sqrt2}2$.`, level: 1 },
    { id: 'm2-x-006', prompt: String.raw`Donne la valeur exacte de $\tan\frac{5\pi}{6}$.`,
      answer: '-sqrt(3)/3', vars: [], check: 'value',
      mistakes: [
        { expr: '-sqrt(3)', msg: String.raw`L'angle de référence est $\frac\pi6$ : $\tan\frac\pi6=\frac{\sqrt3}{3}$ (c'est $\tan\frac\pi3$ qui vaut $\sqrt3$).` },
        { expr: 'sqrt(3)/3', msg: String.raw`$\tan(\pi-x)=-\tan x$ : signe moins (cos négatif, sin positif).` }
      ],
      hint: String.raw`$\frac{5\pi}{6}=\pi-\frac{\pi}{6}$ et $\tan(\pi-x)=-\tan x$.`,
      explain: String.raw`$\tan\frac{5\pi}6=\frac{\sin(5\pi/6)}{\cos(5\pi/6)}=\frac{1/2}{-\sqrt3/2}=-\frac{1}{\sqrt3}=-\frac{\sqrt3}{3}$.`, level: 2 },
    { id: 'm2-x-007', prompt: String.raw`Donne la valeur exacte de $\sin\left(-\frac{\pi}{3}\right)$.`,
      answer: '-sqrt(3)/2', vars: [], check: 'value',
      mistakes: [
        { expr: 'sqrt(3)/2', msg: String.raw`$\sin$ est impaire : $\sin(-x)=-\sin x$.` },
        { expr: '-1/2', msg: String.raw`$\sin\frac\pi3=\frac{\sqrt3}{2}$ (et non $\frac12$).` }
      ],
      hint: String.raw`$\sin(-x)=-\sin x$.`,
      explain: String.raw`$\sin\left(-\frac\pi3\right)=-\sin\frac\pi3=-\frac{\sqrt3}2$.`, level: 1 },
    { id: 'm2-x-008', prompt: String.raw`Donne la valeur exacte de $\cos\frac{11\pi}{3}$.`,
      answer: '1/2', vars: [], check: 'value',
      mistakes: [
        { expr: '-1/2', msg: String.raw`$\frac{11\pi}{3}=4\pi-\frac\pi3$ : même point que $-\frac\pi3$, en bas à droite, où le cosinus est positif. Retirer $3\pi$ n'est pas permis (ce n'est pas un nombre entier de tours).` },
        { expr: 'sqrt(3)/2', msg: String.raw`Angle de référence $\frac\pi3$ : $\cos\frac\pi3=\frac12$.` }
      ],
      hint: String.raw`Retire un multiple de $2\pi$ : $\frac{11\pi}{3}=\frac{12\pi}{3}-\frac{\pi}{3}$.`,
      explain: String.raw`$\frac{11\pi}{3}=4\pi-\frac{\pi}{3}$, donc $\cos\frac{11\pi}{3}=\cos\left(-\frac\pi3\right)=\cos\frac\pi3=\frac12$.`, level: 2 },
    { id: 'm2-x-009', prompt: String.raw`Donne la valeur exacte de $\cos\left(-\frac{17\pi}{6}\right)$.`,
      answer: '-sqrt(3)/2', vars: [], check: 'value',
      mistakes: [
        { expr: 'sqrt(3)/2', msg: String.raw`$-\frac{17\pi}{6}+4\pi=\frac{7\pi}{6}$ : 3e quadrant, cosinus négatif.` },
        { expr: '-1/2', msg: String.raw`L'angle de référence est $\frac\pi6$ : $\cos\frac\pi6=\frac{\sqrt3}{2}$.` }
      ],
      hint: String.raw`Ajoute $4\pi=\frac{24\pi}{6}$, ou utilise la parité du cosinus.`,
      explain: String.raw`$-\frac{17\pi}{6}+4\pi=\frac{7\pi}{6}=\pi+\frac\pi6$, donc $\cos\left(-\frac{17\pi}{6}\right)=\cos\frac{7\pi}6=-\cos\frac\pi6=-\frac{\sqrt3}{2}$.`, level: 3 },
    { id: 'm2-x-010', prompt: String.raw`Donne la mesure principale (dans $]-\pi,\pi]$) de l'angle $\frac{31\pi}{4}$.`,
      answer: '-pi/4', vars: [], check: 'value',
      mistakes: [
        { expr: '7*pi/4', msg: String.raw`$\frac{7\pi}{4}$ représente le bon point mais n'est pas dans $]-\pi,\pi]$ : retire encore $2\pi$.` },
        { expr: 'pi/4', msg: String.raw`$\frac{31\pi}{4}=8\pi-\frac{\pi}{4}$ : c'est $-\frac\pi4$, pas $+\frac\pi4$.` }
      ],
      hint: String.raw`$31=32-1$ et $\frac{32\pi}{4}=8\pi$ (4 tours).`,
      explain: String.raw`$\frac{31\pi}{4}=\frac{32\pi}4-\frac\pi4=8\pi-\frac\pi4$ ; la mesure principale est $-\frac\pi4$.`, level: 2 },
    { id: 'm2-x-011', prompt: String.raw`On sait que $\cos x=\frac35$ et $x\in\left]-\frac{\pi}{2},0\right[$. Calcule $\sin x$.`,
      answer: '-4/5', vars: [], check: 'value',
      mistakes: [
        { expr: '4/5', msg: String.raw`$x\in\left]-\frac\pi2,0\right[$ : 4e quadrant (en bas à droite), le sinus est négatif.` },
        { expr: '2/5', msg: String.raw`$\sin x=\pm\sqrt{1-\cos^2x}$, pas $1-\cos x$.` }
      ],
      hint: String.raw`$\sin^2x=1-\cos^2x$, puis choisis le signe selon le quadrant.`,
      explain: String.raw`$\sin^2x=1-\frac9{25}=\frac{16}{25}$, donc $\sin x=\pm\frac45$ ; comme $x\in\left]-\frac\pi2,0\right[$, $\sin x\lt0$ : $\sin x=-\frac45$.`, level: 2 },
    { id: 'm2-x-012', prompt: String.raw`On sait que $\sin x=\frac13$ et $x\in\left]\frac{\pi}{2},\pi\right[$. Calcule $\cos x$ (valeur exacte).`,
      answer: '-2*sqrt(2)/3', vars: [], check: 'value',
      mistakes: [
        { expr: '2*sqrt(2)/3', msg: String.raw`Dans le 2e quadrant, le cosinus est négatif.` },
        { expr: '-sqrt(2/3)', msg: String.raw`$1-\sin^2x=1-\frac19=\frac89$ : il faut élever $\frac13$ au carré.` }
      ],
      hint: String.raw`$\cos^2x=1-\sin^2x$ ; signe selon le quadrant.`,
      explain: String.raw`$\cos^2x=1-\frac19=\frac89$, $\sqrt{\frac89}=\frac{2\sqrt2}{3}$ ; 2e quadrant donc $\cos x=-\frac{2\sqrt2}{3}$.`, level: 2 },
    { id: 'm2-x-013', prompt: String.raw`Calcule la valeur exacte de $\cos\frac{\pi}{12}$ (écris $\frac{\pi}{12}=\frac{\pi}{3}-\frac{\pi}{4}$).`,
      answer: '(sqrt(6)+sqrt(2))/4', vars: [], check: 'value',
      mistakes: [
        { expr: '(sqrt(6)-sqrt(2))/4', msg: String.raw`C'est $\sin\frac\pi{12}$ : dans $\cos(a-b)=\cos a\cos b+\sin a\sin b$, le signe est $+$.` },
        { expr: '1/2-sqrt(2)/2', msg: String.raw`$\cos(a-b)\neq\cos a-\cos b$ : utilise la formule d'addition.` }
      ],
      hint: String.raw`$\cos(a-b)=\cos a\cos b+\sin a\sin b$.`,
      explain: String.raw`$\cos\frac\pi3\cos\frac\pi4+\sin\frac\pi3\sin\frac\pi4=\frac12\cdot\frac{\sqrt2}2+\frac{\sqrt3}2\cdot\frac{\sqrt2}2=\frac{\sqrt2+\sqrt6}{4}$.`, level: 2 },
    { id: 'm2-x-014', prompt: String.raw`Calcule la valeur exacte de $\tan\frac{\pi}{12}$ (sous forme simplifiée $a+b\sqrt3$).`,
      answer: '2-sqrt(3)', vars: [], check: 'value',
      mistakes: [
        { expr: 'sqrt(3)-1', msg: String.raw`$\tan(a-b)\neq\tan a-\tan b$ : utilise $\frac{\tan a-\tan b}{1+\tan a\tan b}$.` },
        { expr: '(sqrt(3)+1)/(1-sqrt(3))', msg: String.raw`Signes : $\tan(a-b)=\frac{\tan a-\tan b}{1+\tan a\tan b}$.` }
      ],
      hint: String.raw`$\frac{\pi}{12}=\frac\pi3-\frac\pi4$, puis multiplie par le conjugué.`,
      explain: String.raw`$\tan\frac\pi{12}=\frac{\sqrt3-1}{1+\sqrt3}=\frac{(\sqrt3-1)^2}{(\sqrt3+1)(\sqrt3-1)}=\frac{4-2\sqrt3}{2}=2-\sqrt3$.`, level: 3 },
    { id: 'm2-x-015', prompt: String.raw`On écrit $\cos\left(x-\frac{\pi}{4}\right)=a\cos x+b\sin x$. Donne $a;b$.`,
      answer: 'sqrt(2)/2;sqrt(2)/2', vars: [], check: 'tuple',
      mistakes: [
        { expr: 'sqrt(2)/2;-sqrt(2)/2', msg: String.raw`$\cos(a-b)=\cos a\cos b+\sin a\sin b$ : le signe est $+$.` }
      ],
      hint: String.raw`$\cos(x-y)=\cos x\cos y+\sin x\sin y$ avec $y=\frac\pi4$.`,
      explain: String.raw`$\cos\left(x-\frac\pi4\right)=\cos x\cos\frac\pi4+\sin x\sin\frac\pi4=\frac{\sqrt2}2\cos x+\frac{\sqrt2}2\sin x$.`, level: 1 },
    { id: 'm2-x-016', prompt: String.raw`Simplifie $A(x)=\sin(\pi-x)+\cos\left(\frac{\pi}{2}-x\right)-\sin(\pi+x)$.`,
      answer: '3*sin(x)', vars: ['x'], check: 'expr',
      mistakes: [
        { expr: 'sin(x)', msg: String.raw`$\sin(\pi+x)=-\sin x$, donc $-\sin(\pi+x)=+\sin x$.` },
        { expr: '2*sin(x)+cos(x)', msg: String.raw`$\cos\left(\frac\pi2-x\right)=\sin x$, pas $\cos x$.` }
      ],
      hint: String.raw`Utilise les angles associés pour chaque terme.`,
      explain: String.raw`$\sin(\pi-x)=\sin x$, $\cos\left(\frac\pi2-x\right)=\sin x$, $-\sin(\pi+x)=\sin x$. Donc $A(x)=3\sin x$.`, level: 2 },
    { id: 'm2-x-017', prompt: String.raw`Linéarise : $\cos^2x=a+b\cos(2x)$. Donne $a;b$.`,
      answer: '1/2;1/2', vars: [], check: 'tuple',
      mistakes: [
        { expr: '1/2;-1/2', msg: String.raw`C'est la linéarisation de $\sin^2x$. Pour $\cos^2x$ : signe $+$ (contrôle en $x=0$ : $\cos^20=1$).` }
      ],
      hint: String.raw`$\cos 2x=2\cos^2x-1$.`,
      explain: String.raw`$\cos2x=2\cos^2x-1\Rightarrow\cos^2x=\frac{1+\cos2x}{2}=\frac12+\frac12\cos2x$.`, level: 1 },
    { id: 'm2-x-018', prompt: String.raw`Linéarise : $\sin^2(3x)=a+b\cos(cx)$ avec $c\gt0$. Donne $a;b;c$.`,
      answer: '1/2;-1/2;6', vars: [], check: 'tuple',
      mistakes: [
        { expr: '1/2;-1/2;3', msg: String.raw`L'angle est doublé : $2\times3x=6x$.` },
        { expr: '1/2;1/2;6', msg: String.raw`$\sin^2u=\frac{1-\cos2u}{2}$ : signe moins.` }
      ],
      hint: String.raw`$\sin^2u=\frac{1-\cos 2u}{2}$ avec $u=3x$.`,
      explain: String.raw`$\sin^2(3x)=\frac{1-\cos(6x)}{2}=\frac12-\frac12\cos(6x)$.`, level: 2 },
    { id: 'm2-x-019', prompt: String.raw`Linéarise : $\cos^3x=a\cos x+b\cos(3x)$. Donne $a;b$.`,
      answer: '3/4;1/4', vars: [], check: 'tuple',
      mistakes: [
        { expr: '1/4;3/4', msg: String.raw`Inversion : $\cos3x=4\cos^3x-3\cos x$ donne $\cos^3x=\frac34\cos x+\frac14\cos3x$.` },
        { expr: '3/4;-1/4', msg: String.raw`Signe : $4\cos^3x=\cos3x+3\cos x$.` }
      ],
      hint: String.raw`Pars de $\cos 3x=4\cos^3x-3\cos x$.`,
      explain: String.raw`$4\cos^3x=\cos3x+3\cos x$, donc $\cos^3x=\frac34\cos x+\frac14\cos3x$. Contrôle en $x=0$ : $\frac34+\frac14=1$.`, level: 3 },
    { id: 'm2-x-020', prompt: String.raw`Transforme en somme : $\sin(3x)\cos(x)=a\sin(4x)+b\sin(2x)$. Donne $a;b$.`,
      answer: '1/2;1/2', vars: [], check: 'tuple',
      mistakes: [
        { expr: '1;1', msg: String.raw`N'oublie pas le facteur $\frac12$ : $\sin a\cos b=\frac12[\sin(a+b)+\sin(a-b)]$.` },
        { expr: '1/2;-1/2', msg: String.raw`$\sin a\cos b=\frac12[\sin(a+b)+\sin(a-b)]$ : les deux termes ont le signe $+$.` }
      ],
      hint: String.raw`$\sin a\cos b=\frac12\left[\sin(a+b)+\sin(a-b)\right]$.`,
      explain: String.raw`Avec $a=3x$, $b=x$ : $\sin3x\cos x=\frac12\left[\sin4x+\sin2x\right]$.`, level: 2 },
    { id: 'm2-x-021', prompt: String.raw`Factorise : $\cos(5x)+\cos(3x)=a\cos(bx)\cos(cx)$ avec $b\gt c\gt0$. Donne $a;b;c$.`,
      answer: '2;4;1', vars: [], check: 'tuple',
      mistakes: [
        { expr: '2;8;2', msg: String.raw`On prend la demi-somme et demi-différence : $\frac{5x+3x}{2}=4x$, $\frac{5x-3x}{2}=x$.` },
        { expr: '1;4;1', msg: String.raw`$\cos p+\cos q=2\cos\frac{p+q}2\cos\frac{p-q}2$ : facteur 2.` }
      ],
      hint: String.raw`$\cos p+\cos q=2\cos\frac{p+q}{2}\cos\frac{p-q}{2}$.`,
      explain: String.raw`$\cos5x+\cos3x=2\cos\frac{8x}{2}\cos\frac{2x}{2}=2\cos(4x)\cos(x)$.`, level: 3 },
    { id: 'm2-x-022', prompt: String.raw`Écris $\cos x+\sin x=R\cos(x-\varphi)$ avec $R\gt0$ et $\varphi\in]-\pi,\pi]$. Donne $R;\varphi$.`,
      answer: 'sqrt(2);pi/4', vars: [], check: 'tuple',
      mistakes: [
        { expr: '2;pi/4', msg: String.raw`$R=\sqrt{a^2+b^2}=\sqrt{1+1}=\sqrt2$.` },
        { expr: 'sqrt(2);-pi/4', msg: String.raw`$\sin\varphi=\frac bR=\frac{1}{\sqrt2}\gt0$ : $\varphi=+\frac\pi4$.` }
      ],
      hint: String.raw`$R=\sqrt{a^2+b^2}$, $\cos\varphi=\frac aR$, $\sin\varphi=\frac bR$.`,
      explain: String.raw`$R=\sqrt2$, $\cos\varphi=\sin\varphi=\frac{\sqrt2}{2}$, donc $\varphi=\frac\pi4$ : $\cos x+\sin x=\sqrt2\cos\left(x-\frac\pi4\right)$.`, level: 2 },
    { id: 'm2-x-023', prompt: String.raw`Écris $\sqrt3\cos x-\sin x=R\cos(x-\varphi)$ avec $R\gt0$ et $\varphi\in]-\pi,\pi]$. Donne $R;\varphi$.`,
      answer: '2;-pi/6', vars: [], check: 'tuple',
      mistakes: [
        { expr: '2;pi/6', msg: String.raw`$\sin\varphi=\frac bR=-\frac12\lt0$ : $\varphi$ est négatif.` },
        { expr: '4;-pi/6', msg: String.raw`$R=\sqrt{a^2+b^2}=\sqrt{3+1}=2$.` },
        { expr: '2;-pi/3', msg: String.raw`$\cos\varphi=\frac{\sqrt3}2$ et $\sin\varphi=-\frac12$ correspondent à $-\frac\pi6$ : tu as échangé cos et sin.` }
      ],
      hint: String.raw`$a=\sqrt3$, $b=-1$ : $R=\sqrt{a^2+b^2}$, $\cos\varphi=\frac aR$, $\sin\varphi=\frac bR$.`,
      explain: String.raw`$R=2$, $\cos\varphi=\frac{\sqrt3}{2}$, $\sin\varphi=-\frac12$, donc $\varphi=-\frac\pi6$ : $\sqrt3\cos x-\sin x=2\cos\left(x+\frac\pi6\right)$.`, level: 3 },
    { id: 'm2-x-024', prompt: String.raw`Dérive $f(x)=\cos\left(2x+\frac{\pi}{3}\right)$.`,
      answer: '-2*sin(2*x+pi/3)', vars: ['x'], check: 'expr',
      mistakes: [
        { expr: '2*sin(2*x+pi/3)', msg: String.raw`$(\cos u)'=-u'\sin u$ : signe moins.` },
        { expr: '-sin(2*x+pi/3)', msg: String.raw`Il manque la dérivée intérieure $u'=2$.` }
      ],
      hint: String.raw`$(\cos u)'=-u'\sin u$.`,
      explain: String.raw`$u=2x+\frac\pi3$, $u'=2$, donc $f'(x)=-2\sin\left(2x+\frac\pi3\right)$.`, level: 1 },
    { id: 'm2-x-025', prompt: String.raw`Dérive $f(x)=x\sin x+\cos x$ et simplifie.`,
      answer: 'x*cos(x)', vars: ['x'], check: 'expr',
      mistakes: [
        { expr: '2*sin(x)+x*cos(x)', msg: String.raw`$(\cos x)'=-\sin x$ : le terme $\sin x$ s'élimine.` },
        { expr: 'cos(x)-sin(x)', msg: String.raw`$(uv)'=u'v+uv'$ : $(x\sin x)'=\sin x+x\cos x$, pas $1\times\cos x$.` }
      ],
      hint: String.raw`$(x\sin x)'=\sin x+x\cos x$.`,
      explain: String.raw`$f'(x)=\sin x+x\cos x-\sin x=x\cos x$.`, level: 2 },
    { id: 'm2-x-026', prompt: String.raw`Dérive $f(x)=\tan(2x)$ sur $\left]-\frac{\pi}{4},\frac{\pi}{4}\right[$.`,
      answer: '2/cos(2*x)^2', vars: ['x'], check: 'expr', domain: [-0.7, 0.7],
      mistakes: [
        { expr: '1/cos(2*x)^2', msg: String.raw`Il manque la dérivée intérieure : $(\tan u)'=u'(1+\tan^2u)$ avec $u'=2$.` },
        { expr: '1+tan(2*x)^2', msg: String.raw`Il manque le facteur $u'=2$.` }
      ],
      hint: String.raw`$(\tan u)'=u'\left(1+\tan^2u\right)=\frac{u'}{\cos^2u}$.`,
      explain: String.raw`$f'(x)=2\left(1+\tan^2(2x)\right)=\frac{2}{\cos^2(2x)}$.`, level: 2 },
    { id: 'm2-x-027', prompt: String.raw`Dérive $f(x)=\arctan(x^2)$.`,
      answer: '2*x/(1+x^4)', vars: ['x'], check: 'expr',
      mistakes: [
        { expr: '1/(1+x^4)', msg: String.raw`Il manque la dérivée intérieure $u'=2x$.` },
        { expr: '2*x/(1+x^2)', msg: String.raw`$(\arctan u)'=\frac{u'}{1+u^2}$ avec $u^2=(x^2)^2=x^4$.` }
      ],
      hint: String.raw`$(\arctan u)'=\frac{u'}{1+u^2}$.`,
      explain: String.raw`$u=x^2$, $u'=2x$ : $f'(x)=\frac{2x}{1+x^4}$.`, level: 2 },
    { id: 'm2-x-028', prompt: String.raw`Dérive $f(x)=\arcsin(2x)$ sur $\left]-\frac12,\frac12\right[$.`,
      answer: '2/sqrt(1-4*x^2)', vars: ['x'], check: 'expr', domain: [-0.45, 0.45],
      mistakes: [
        { expr: '1/sqrt(1-4*x^2)', msg: String.raw`Il manque la dérivée intérieure $u'=2$.` },
        { expr: '2/sqrt(1-2*x^2)', msg: String.raw`$u^2=(2x)^2=4x^2$.` }
      ],
      hint: String.raw`$(\arcsin u)'=\frac{u'}{\sqrt{1-u^2}}$.`,
      explain: String.raw`$u=2x$, $u'=2$ : $f'(x)=\frac{2}{\sqrt{1-4x^2}}$.`, level: 2 },
    { id: 'm2-x-029', prompt: String.raw`Calcule $\arccos\left(-\frac{\sqrt3}{2}\right)$.`,
      answer: '5*pi/6', vars: [], check: 'value',
      mistakes: [
        { expr: '-pi/6', msg: String.raw`$\arccos$ est à valeurs dans $[0,\pi]$.` },
        { expr: '7*pi/6', msg: String.raw`$\cos\frac{7\pi}6=-\frac{\sqrt3}2$, mais $\frac{7\pi}{6}\notin[0,\pi]$.` },
        { expr: '2*pi/3', msg: String.raw`$\cos\frac{2\pi}{3}=-\frac12$ ; ici l'angle de référence est $\frac\pi6$.` }
      ],
      hint: String.raw`$\arccos(-x)=\pi-\arccos x$.`,
      explain: String.raw`$\arccos\left(-\frac{\sqrt3}2\right)=\pi-\arccos\frac{\sqrt3}2=\pi-\frac\pi6=\frac{5\pi}6$.`, level: 2 },
    { id: 'm2-x-030', prompt: String.raw`Calcule $\arcsin\left(\sin\frac{7\pi}{6}\right)$.`,
      answer: '-pi/6', vars: [], check: 'value',
      mistakes: [
        { expr: '7*pi/6', msg: String.raw`$\arcsin(\sin x)=x$ seulement si $x\in\left[-\frac\pi2,\frac\pi2\right]$.` },
        { expr: 'pi/6', msg: String.raw`$\sin\frac{7\pi}{6}=-\frac12\lt0$, donc l'arc sinus est négatif.` }
      ],
      hint: String.raw`Calcule d'abord $\sin\frac{7\pi}{6}$.`,
      explain: String.raw`$\sin\frac{7\pi}6=-\sin\frac\pi6=-\frac12$, et $\arcsin\left(-\frac12\right)=-\frac\pi6\in\left[-\frac\pi2,\frac\pi2\right]$.`, level: 3 },
    { id: 'm2-x-031', prompt: String.raw`Calcule $\arctan\left(-\sqrt3\right)+\arccos\left(-\frac12\right)$.`,
      answer: 'pi/3', vars: [], check: 'value',
      mistakes: [
        { expr: 'pi', msg: String.raw`$\arctan$ est impaire : $\arctan(-\sqrt3)=-\frac\pi3$.` },
        { expr: '-2*pi/3', msg: String.raw`$\arccos\left(-\frac12\right)=\frac{2\pi}3$ (valeurs dans $[0,\pi]$), pas $-\frac\pi3$.` }
      ],
      hint: String.raw`$\arctan\sqrt3=\frac\pi3$ et $\arccos(-x)=\pi-\arccos x$.`,
      explain: String.raw`$\arctan(-\sqrt3)=-\frac\pi3$ et $\arccos\left(-\frac12\right)=\frac{2\pi}3$ ; la somme vaut $\frac\pi3$.`, level: 2 },
    { id: 'm2-x-032', prompt: String.raw`Calcule $\cos\left(\arcsin\frac35\right)$.`,
      answer: '4/5', vars: [], check: 'value',
      mistakes: [
        { expr: '-4/5', msg: String.raw`$\arcsin\frac35\in\left[0,\frac\pi2\right]$ : son cosinus est positif.` },
        { expr: '3/5', msg: String.raw`$\sin(\arcsin x)=x$, mais ici on demande le cosinus : $\sqrt{1-x^2}$.` }
      ],
      hint: String.raw`$\cos(\arcsin x)=\sqrt{1-x^2}$.`,
      explain: String.raw`Avec $\theta=\arcsin\frac35\in\left[-\frac\pi2,\frac\pi2\right]$, $\cos\theta\geq0$ et $\cos\theta=\sqrt{1-\frac9{25}}=\frac45$.`, level: 3 },
    { id: 'm2-x-033', prompt: String.raw`Résous $\cos x=\frac12$ sur $]-\pi,\pi]$.`,
      answer: '-pi/3;pi/3', vars: [], check: 'set',
      mistakes: [
        { expr: 'pi/3', msg: String.raw`Il y a deux solutions : $\pm\frac\pi3$.` },
        { expr: '-pi/6;pi/6', msg: String.raw`$\cos\frac\pi6=\frac{\sqrt3}2$ ; c'est $\cos\frac\pi3$ qui vaut $\frac12$.` }
      ],
      hint: String.raw`$\cos x=\cos a\Leftrightarrow x=\pm a+2k\pi$.`,
      explain: String.raw`$\cos x=\cos\frac\pi3\Leftrightarrow x=\pm\frac\pi3+2k\pi$. Dans $]-\pi,\pi]$ : $-\frac\pi3$ et $\frac\pi3$.`, level: 1 },
    { id: 'm2-x-034', prompt: String.raw`Résous $\sin x=\frac{\sqrt3}{2}$ sur $[0,2\pi[$.`,
      answer: 'pi/3;2*pi/3', vars: [], check: 'set',
      mistakes: [
        { expr: 'pi/3;5*pi/3', msg: String.raw`$\sin x=\sin a$ donne $x=\pi-a$ (et non $-a$, qui correspond au cosinus).` }
      ],
      hint: String.raw`$\sin x=\sin a\Leftrightarrow x=a+2k\pi$ ou $x=\pi-a+2k\pi$.`,
      explain: String.raw`$\sin x=\sin\frac\pi3$ : $x=\frac\pi3+2k\pi$ ou $x=\frac{2\pi}3+2k\pi$. Dans $[0,2\pi[$ : $\frac\pi3$ et $\frac{2\pi}3$.`, level: 1 },
    { id: 'm2-x-035', prompt: String.raw`Résous $\sin x=-\frac12$ sur $[0,2\pi[$.`,
      answer: '7*pi/6;11*pi/6', vars: [], check: 'set',
      mistakes: [
        { expr: '-pi/6;7*pi/6', msg: String.raw`$-\frac\pi6\notin[0,2\pi[$ : ajoute $2\pi$ pour obtenir $\frac{11\pi}6$.` },
        { expr: '7*pi/6;5*pi/6', msg: String.raw`$\sin\frac{5\pi}{6}=+\frac12$ : les solutions sont en bas du cercle.` }
      ],
      hint: String.raw`$-\frac12=\sin\left(-\frac\pi6\right)$.`,
      explain: String.raw`$x=-\frac\pi6+2k\pi$ ou $x=\pi+\frac\pi6+2k\pi$. Dans $[0,2\pi[$ : $\frac{11\pi}6$ et $\frac{7\pi}6$.`, level: 2 },
    { id: 'm2-x-036', prompt: String.raw`Résous $\cos x=-\frac{\sqrt2}{2}$ sur $]-\pi,\pi]$.`,
      answer: '-3*pi/4;3*pi/4', vars: [], check: 'set',
      mistakes: [
        { expr: '-pi/4;pi/4', msg: String.raw`$\cos\frac\pi4=+\frac{\sqrt2}2$ : il faut des points à gauche du cercle.` },
        { expr: '3*pi/4;5*pi/4', msg: String.raw`$\frac{5\pi}4\notin]-\pi,\pi]$ : c'est $-\frac{3\pi}{4}$.` }
      ],
      hint: String.raw`$-\frac{\sqrt2}2=\cos\frac{3\pi}4$.`,
      explain: String.raw`$\cos x=\cos\frac{3\pi}4\Leftrightarrow x=\pm\frac{3\pi}4+2k\pi$. Dans $]-\pi,\pi]$ : $\pm\frac{3\pi}{4}$.`, level: 2 },
    { id: 'm2-x-037', prompt: String.raw`Résous $\tan x=-1$ sur $]-\pi,\pi]$.`,
      answer: '-pi/4;3*pi/4', vars: [], check: 'set',
      mistakes: [
        { expr: '-pi/4', msg: String.raw`La tangente est $\pi$-périodique : $-\frac\pi4+\pi=\frac{3\pi}4$ est aussi solution.` },
        { expr: '-pi/4;-3*pi/4', msg: String.raw`$\tan\left(-\frac{3\pi}{4}\right)=+1$. La seconde solution est $-\frac\pi4+\pi=\frac{3\pi}4$.` }
      ],
      hint: String.raw`$\tan x=\tan a\Leftrightarrow x=a+k\pi$.`,
      explain: String.raw`$\tan x=\tan\left(-\frac\pi4\right)\Leftrightarrow x=-\frac\pi4+k\pi$. Dans $]-\pi,\pi]$ : $-\frac\pi4$ et $\frac{3\pi}4$.`, level: 2 },
    { id: 'm2-x-038', prompt: String.raw`Résous $\sin(2x)=\frac{\sqrt2}{2}$ sur $[0,2\pi[$.`,
      answer: 'pi/8;3*pi/8;9*pi/8;11*pi/8', vars: [], check: 'set',
      mistakes: [
        { expr: 'pi/8;3*pi/8', msg: String.raw`En divisant par 2, $2k\pi$ devient $k\pi$ : ajoute $\pi$ aux solutions trouvées.` },
        { expr: 'pi/4;3*pi/4', msg: String.raw`Ce sont les valeurs de $2x$ : il faut diviser par 2 (et ajouter les $k\pi$).` }
      ],
      hint: String.raw`Résous d'abord pour $X=2x$, puis divise par 2 (période $\pi$ pour $x$).`,
      explain: String.raw`$2x=\frac\pi4+2k\pi$ ou $2x=\frac{3\pi}4+2k\pi$, donc $x=\frac\pi8+k\pi$ ou $x=\frac{3\pi}8+k\pi$. Dans $[0,2\pi[$ : $\frac\pi8,\frac{3\pi}8,\frac{9\pi}8,\frac{11\pi}8$.`, level: 3 },
    { id: 'm2-x-039', prompt: String.raw`Résous $2\cos^2x-\cos x-1=0$ sur $[0,2\pi[$.`,
      answer: '0;2*pi/3;4*pi/3', vars: [], check: 'set',
      mistakes: [
        { expr: '1;-1/2', msg: String.raw`Ce sont les valeurs de $X=\cos x$ : il faut ensuite résoudre $\cos x=1$ et $\cos x=-\frac12$.` },
        { expr: '2*pi/3;4*pi/3', msg: String.raw`$\cos x=1$ donne aussi $x=0$.` }
      ],
      hint: String.raw`Pose $X=\cos x$ : $2X^2-X-1=0$.`,
      explain: String.raw`$2X^2-X-1=(X-1)(2X+1)=0$ : $X=1$ ou $X=-\frac12$. $\cos x=1\Leftrightarrow x=0$ ; $\cos x=-\frac12\Leftrightarrow x=\frac{2\pi}3$ ou $\frac{4\pi}3$.`, level: 3 },
    { id: 'm2-x-040', prompt: String.raw`Résous $\cos(3x)=\cos(x)$ sur $[0,\pi]$.`,
      answer: '0;pi/2;pi', vars: [], check: 'set',
      mistakes: [
        { expr: '0;pi', msg: String.raw`Tu n'as gardé que la famille $3x=x+2k\pi$ ; l'autre, $3x=-x+2k\pi$, donne $x=\frac{k\pi}{2}$.` }
      ],
      hint: String.raw`$\cos A=\cos B\Leftrightarrow A=B+2k\pi$ ou $A=-B+2k\pi$.`,
      explain: String.raw`$3x=x+2k\pi\Leftrightarrow x=k\pi$ ; $3x=-x+2k\pi\Leftrightarrow x=\frac{k\pi}{2}$. Dans $[0,\pi]$ : $0$, $\frac\pi2$, $\pi$.`, level: 3 }
  ]
});
