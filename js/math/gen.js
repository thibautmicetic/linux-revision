/* Exercices de maths générés à l'infini (entraînement quotidien). Chaque question est vérifiée par APP.mathCheck
   et porte une correction détaillée : topic (thème), sec (fiche du cours), steps (étapes), rule, mistakes (erreurs typiques). */
(function () {
  'use strict';
  const APP = window.APP;
  const M = APP.math, U = APP.util;
  const R = U.rand, pick = U.pick;
  const L = String.raw;
  const T = (s) => { try { return M.toTeX(M.parse(s, { vars: ['x', 'n', 't', 'p'] })); } catch (e) { return s; } };
  const px = (s) => M.parse(s, { vars: ['x'] });
  const D = (s) => M.toStr(M.derive(px(s), 'x'));
  const TX = (s) => M.toTeX(px(s));
  // parenthèses autour d'une expression TeX qui contient une somme ou commence par un signe
  const P = (t) => (/[+-]/.test(t) ? L`\left(${t}\right)` : t);
  const pn = (k) => (k < 0 ? '(' + k + ')' : String(k));
  const sg = (k) => (k < 0 ? '- ' + -k : '+ ' + k);
  function gcd(a, b) { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a || 1; }
  const frac = (a, b) => { const g = gcd(a, b); a /= g; b /= g; if (b < 0) { a = -a; b = -b; } return b === 1 ? String(a) : a + '/' + b; };
  const fracTeX = (a, b) => { const g = gcd(a, b); a /= g; b /= g; if (b < 0) { a = -a; b = -b; } return b === 1 ? String(a) : (a < 0 ? '-' : '') + L`\frac{${Math.abs(a)}}{${b}}`; };
  // (num/den)·π en TeX, ex. degTeX(120) = \frac{2\pi}{3}
  const piTeX = (num, den) => {
    if (!num) return '0';
    const g = gcd(num, den); num /= g; den /= g; if (den < 0) { num = -num; den = -den; }
    const n = Math.abs(num), s = num < 0 ? '-' : '';
    return s + (den === 1 ? (n === 1 ? '' : n) + L`\pi` : L`\frac{${n === 1 ? '' : n}\pi}{${den}}`);
  };
  const degTeX = (d) => piTeX(d, 180);
  // polynôme à partir des coefficients cs[k] (nombre ou [num, den]) de x^k
  function poly(cs, v) {
    v = v || 'x';
    let s = '';
    cs.forEach((c, k) => {
      let [n, d] = Array.isArray(c) ? c : [c, 1];
      if (!n) return;
      const g = gcd(n, d); n /= g; d /= g; if (d < 0) { n = -n; d = -d; }
      const neg = n < 0; n = Math.abs(n);
      const pw = k === 0 ? '' : k === 1 ? v : v + '^' + k;
      const t = k === 0 ? (d === 1 ? String(n) : n + '/' + d) : d === 1 ? (n === 1 ? pw : n + '*' + pw) : n + '/' + d + '*' + pw;
      s += (neg ? '-' : s ? '+' : '') + t;
    });
    return s || '0';
  }
  const sqrtTeX = (S) => { let k = 1, m = S; for (let j = 2; j * j <= m; j++) while (m % (j * j) === 0) { m /= j * j; k *= j; } return m === 1 ? String(k) : (k === 1 ? '' : k) + L`\sqrt{${m}}`; };
  const q = (type, o) => {
    const it = Object.assign({ id: 'gen-m-' + type, kind: 'gen', subject: 'maths', gen: type, type: 'formula', level: 1, vars: [] }, o);
    // on ne garde que les erreurs typiques réellement fausses (certaines coïncident avec la réponse pour de petites valeurs)
    // et pas deux erreurs équivalentes entre elles (la première l'emporte)
    if (it.mistakes) {
      const kept = [];
      for (const m of it.mistakes) {
        if (!m) continue;
        try {
          const r = APP.mathCheck(Object.assign({}, it, { mistakes: kept }), m.expr);
          if (!r.ok && !r.formOnly && !r.parseError && !kept.some((k) => r.msgs.includes(k.msg))) kept.push(m);
        } catch (e) { /* erreur ignorée */ }
      }
      it.mistakes = kept;
    }
    return it;
  };

  const G = {};
  // ---------- trigonométrie ----------
  const toExpr = (tex) => tex.replace(/\\sqrt\{(\d)\}/g, 'sqrt($1)').replace(/\\frac\{([^{}]*)\}\{([^{}]*)\}/g, '($1)/($2)').replace(/\\/g, '');
  const QUAD = ['en haut à droite', 'en haut à gauche', 'en bas à gauche', 'en bas à droite'];
  G.trigval = {
    label: 'Valeurs sur le cercle', chapter: 'm2',
    make() {
      const red = pick([0, 30, 45, 60, 90, 120, 135, 150, 180, 210, 225, 240, 270, 300, 315, 330]);
      const deg = red + (Math.random() < 0.3 ? 360 * pick([1, -1, 2]) : Math.random() < 0.25 ? -360 : 0);
      const fnn = pick(['cos', 'sin', 'cos', 'sin', 'tan']);
      const ex = APP.exactTrig(red);
      if (fnn === 'tan' && ex.t == null) return G.trigval.make();
      const val = fnn === 'cos' ? ex.c : fnn === 'sin' ? ex.s : ex.t;
      const ans = toExpr(val);
      const fT = '\\' + fnn, ang = degTeX(deg), redT = degTeX(red);
      const Q = Math.floor(red / 90), axis = red % 90 === 0;
      const steps = [L`Sur le cercle trigonométrique (rayon 1), l'angle $\theta$ correspond au point $M(\cos\theta,\ \sin\theta)$ : le **cosinus** est l'abscisse du point (axe horizontal), le **sinus** son ordonnée (axe vertical)` + (fnn === 'tan' ? L`, et $\tan\theta = \dfrac{\sin\theta}{\cos\theta}$.` : '.')];
      if (deg !== red) {
        const k = (deg - red) / 360;
        steps.push(L`On se ramène à $[0, 2\pi[$ : $${ang} = ${redT} ${k < 0 ? '-' : '+'} ${Math.abs(k) === 1 ? '' : Math.abs(k)}2\pi$. Ajouter ou retirer un tour complet ($2\pi$) ne change pas le point, donc $${fT}\left(${ang}\right) = ${fT}\left(${redT}\right)$.`);
      }
      if (axis) steps.push(L`L'angle $${redT}$ tombe sur un axe : le point est $M(${ex.c},\ ${ex.s})$, donc $\cos ${redT} = ${ex.c}$ et $\sin ${redT} = ${ex.s}$.`);
      else {
        const ref = [red, 180 - red, red - 180, 360 - red][Q];
        const how = ['', L` ($\pi - ${redT}$)`, L` ($${redT} - \pi$)`, L` ($2\pi - ${redT}$)`][Q];
        const re = APP.exactTrig(ref);
        steps.push(L`$${redT}$ est dans le ${Q + 1}${Q ? 'e' : 'er'} quadrant (${QUAD[Q]}) : $\cos ${Q === 1 || Q === 2 ? '<' : '>'} 0$ et $\sin ${Q >= 2 ? '<' : '>'} 0$.` + (Q ? L` Son angle de référence (écart avec l'axe horizontal) est $${degTeX(ref)}$${how}.` : ''));
        steps.push((Q ? L`Valeurs de référence : $\cos ${degTeX(ref)} = ${re.c}$ et $\sin ${degTeX(ref)} = ${re.s}$. Avec les signes du quadrant : ` : 'Valeurs remarquables : ') + L`$\cos ${redT} = ${ex.c}$ et $\sin ${redT} = ${ex.s}$.`);
      }
      if (fnn === 'tan') steps.push(L`$\tan ${redT} = \dfrac{\sin ${redT}}{\cos ${redT}} = \dfrac{${ex.s}}{${ex.c}} = ${ex.t}$.`);
      steps.push(L`Résultat : $${fT}\left(${ang}\right) = ${val}$.`);
      const where = axis ? 'sur un axe' : QUAD[Q];
      const fname = fnn === 'cos' ? 'le cosinus (abscisse)' : fnn === 'sin' ? 'le sinus (ordonnée)' : 'la tangente';
      return q('trigval', {
        chapter: 'm2', sec: 'm2-s-valeurs', topic: 'Valeurs remarquables du cercle',
        q: L`Valeur exacte de $${fT}\left(${ang}\right)$ ?`, answer: ans, check: 'value', placeholder: 'ex. sqrt(3)/2',
        hint: L`Place l'angle sur le cercle, repère l'angle de référence ($\frac{\pi}{6}$, $\frac{\pi}{4}$ ou $\frac{\pi}{3}$) et le signe selon le quadrant.`,
        rule: L`$\cos\frac{\pi}{6} = \frac{\sqrt{3}}{2}$, $\cos\frac{\pi}{4} = \frac{\sqrt{2}}{2}$, $\cos\frac{\pi}{3} = \frac{1}{2}$ — et le sinus fait l'inverse ($\sin\frac{\pi}{6} = \frac{1}{2}$, $\sin\frac{\pi}{3} = \frac{\sqrt{3}}{2}$). Le quadrant donne le signe.`,
        explain: L`On place $${ang}$ sur le cercle : $\cos = ${ex.c}$, $\sin = ${ex.s}$` + (fnn === 'tan' ? L`, donc $\tan = ${ex.t}$.` : '.'),
        steps,
        mistakes: [
          val !== '0' && { expr: '-(' + ans + ')', msg: L`Erreur de signe : la valeur absolue est bonne, mais $${redT}$ est ${where} sur le cercle, où ${fname} est ${val[0] === '-' ? 'négatif' : 'positif'}.` },
          fnn === 'cos' ? { expr: toExpr(ex.s), msg: L`Tu as donné le **sinus** (l'ordonnée). Le cosinus est l'**abscisse** du point : $\cos ${redT} = ${ex.c}$.` }
            : fnn === 'sin' ? { expr: toExpr(ex.c), msg: L`Tu as donné le **cosinus** (l'abscisse). Le sinus est l'**ordonnée** du point : $\sin ${redT} = ${ex.s}$.` }
              : ex.t !== '0' && { expr: '1/(' + ans + ')', msg: L`Tu as calculé $\dfrac{\cos}{\sin}$, c'est l'inverse : $\tan\theta = \dfrac{\sin\theta}{\cos\theta}$.` },
        ]
      });
    }
  };
  G.degrad = {
    label: 'Degrés ↔ radians', chapter: 'm2',
    make() {
      const d = pick([15, 30, 36, 45, 60, 72, 90, 120, 135, 150, 210, 225, 240, 270, 300, 315, 330, 720]);
      const rT = degTeX(d), fT = fracTeX(d, 180);
      const base = {
        chapter: 'm2', sec: 'm2-s-cercle', topic: 'Conversion degrés ↔ radians', check: 'value',
        rule: L`$180^\circ = \pi$ rad (un demi-tour). Degrés → radians : $\times\dfrac{\pi}{180}$ ; radians → degrés : $\times\dfrac{180}{\pi}$.`,
        hint: L`Pars de $180^\circ = \pi$ rad et fais une règle de trois.`
      };
      const notion = L`Un tour complet mesure $360^\circ$, soit $2\pi$ radians (la longueur du cercle de rayon 1). Donc **$180^\circ = \pi$ rad** : c'est la seule correspondance à retenir.`;
      if (Math.random() < 0.5) return q('degrad', Object.assign(base, {
        q: L`Convertis $${d}^\circ$ en radians (valeur exacte).`, answer: frac(d, 180) + '*pi', placeholder: 'ex. 2pi/3',
        explain: L`On multiplie par $\frac{\pi}{180}$ : $${d}^\circ = ${rT}$ rad.`,
        steps: [notion,
          L`Degrés → radians : on multiplie par $\dfrac{\pi}{180}$, donc $${d}^\circ = ${d} \times \dfrac{\pi}{180} = \dfrac{${d}\pi}{180}$.`,
          L`On simplifie la fraction en divisant en haut et en bas par ${gcd(d, 180)} : $\dfrac{${d}}{180} = ${fT}$, donc $${d}^\circ = ${rT}$ rad.`,
          L`Vérification : $${rT} \times \dfrac{180}{\pi} = ${fT} \times 180 = ${d}^\circ$ ✔.`],
        mistakes: [
          { expr: d + '*pi/360', msg: L`Tu as utilisé $360^\circ = \pi$ : c'est **$180^\circ = \pi$** (un demi-tour). $360^\circ$ vaut $2\pi$.` },
          { expr: d + '*180/pi', msg: L`Tu as multiplié par $\dfrac{180}{\pi}$ : ça, c'est pour passer des radians aux degrés. Ici on multiplie par $\dfrac{\pi}{180}$.` },
          { expr: frac(d, 180), msg: L`Il manque le $\pi$ : $${d}^\circ = ${fT} \times \pi$ rad.` }
        ]
      }));
      return q('degrad', Object.assign(base, {
        q: L`Convertis $${rT}$ rad en degrés.`, answer: String(d), placeholder: 'ex. 120',
        explain: L`On multiplie par $\frac{180}{\pi}$ : $${rT}$ rad $= ${d}^\circ$.`,
        steps: [notion,
          L`Radians → degrés : on multiplie par $\dfrac{180}{\pi}$ (les $\pi$ se simplifient) : $${rT} \times \dfrac{180}{\pi} = ${fT} \times 180$.`,
          L`$${fT} \times 180 = ${d}$, donc $${rT}$ rad $= ${d}^\circ$.`,
          L`Repères utiles : $\dfrac{\pi}{6} = 30^\circ$, $\dfrac{\pi}{4} = 45^\circ$, $\dfrac{\pi}{3} = 60^\circ$, $\dfrac{\pi}{2} = 90^\circ$.`],
        mistakes: [
          { expr: String(2 * d), msg: L`Tu as pris $\pi = 360^\circ$ : en fait $\pi$ rad $= 180^\circ$ (un demi-tour).` },
          { expr: frac(d, 180) + '*pi', msg: L`C'est encore la valeur en radians : multiplie-la par $\dfrac{180}{\pi}$ pour obtenir des degrés.` }
        ]
      }));
    }
  };
  G.trigeq = {
    label: 'Équations trigonométriques', chapter: 'm2',
    make() {
      const [f, v, a] = pick([['cos', '1/2', 60], ['cos', 'sqrt(2)/2', 45], ['cos', 'sqrt(3)/2', 30], ['cos', '-1/2', 120], ['cos', '-sqrt(2)/2', 135], ['sin', '1/2', 30], ['sin', 'sqrt(3)/2', 60], ['sin', 'sqrt(2)/2', 45], ['sin', '-1/2', -30], ['sin', '-sqrt(3)/2', -60]]);
      const nrm = (x) => ((x % 360) + 360) % 360;
      const set = (arr) => [...new Set(arr.map(nrm))].sort((x, y) => x - y);
      const toAns = (arr) => arr.map((d) => frac(d, 180) + '*pi').join(';');
      const raw = f === 'cos' ? [a, -a] : [a, 180 - a];
      const sols = set(raw);
      const fT = '\\' + f, vT = T(v), aT = degTeX(a), aP = a < 0 ? L`\left(${aT}\right)` : aT;
      const red = (r) => (r < 0 ? L`$${degTeX(r)} + 2\pi = ${degTeX(r + 360)}$` : L`$${degTeX(r)}$`);
      return q('trigeq', {
        chapter: 'm2', sec: 'm2-s-equations', topic: 'Équations trigonométriques', level: 2,
        q: L`Résous $${fT} x = ${vT}$ sur $[0, 2\pi[$ (sépare les solutions par ;).`, answer: toAns(sols), check: 'set', placeholder: 'ex. pi/3 ; 5pi/3',
        hint: L`Trouve un angle connu $a$ tel que $${fT} a = ${vT}$, puis la 2e solution par symétrie sur le cercle.`,
        rule: f === 'cos' ? L`$\cos x = \cos a \Leftrightarrow x = a + 2k\pi$ ou $x = -a + 2k\pi$ ($k \in \mathbb{Z}$).` : L`$\sin x = \sin a \Leftrightarrow x = a + 2k\pi$ ou $x = \pi - a + 2k\pi$ ($k \in \mathbb{Z}$).`,
        pitfall: 'Une équation trigonométrique a en général **deux** solutions par tour : ne t\'arrête pas à la première.',
        explain: L`On cherche un angle connu $a$ tel que $${fT} a = ${vT}$, puis on utilise la symétrie du cercle pour trouver la 2e solution.`,
        steps: [
          f === 'cos' ? L`Résoudre $\cos x = ${vT}$, c'est chercher les points du cercle trigonométrique d'**abscisse** $${vT}$ : la droite verticale correspondante coupe le cercle en **2 points**, symétriques par rapport à l'axe horizontal (angles $a$ et $-a$).`
            : L`Résoudre $\sin x = ${vT}$, c'est chercher les points du cercle trigonométrique d'**ordonnée** $${vT}$ : la droite horizontale correspondante coupe le cercle en **2 points**, symétriques par rapport à l'axe vertical (angles $a$ et $\pi - a$).`,
          L`On reconnaît une valeur remarquable : $${fT}\left(${aT}\right) = ${vT}$, donc $a = ${aT}$.`,
          f === 'cos' ? L`Toutes les solutions réelles : $x = ${aT} + 2k\pi$ ou $x = -${aT} + 2k\pi$, avec $k \in \mathbb{Z}$.`
            : L`Toutes les solutions réelles : $x = ${aT} + 2k\pi$ ou $x = \pi - ${aP} + 2k\pi = ${degTeX(180 - a)} + 2k\pi$, avec $k \in \mathbb{Z}$.`,
          'On garde celles de $[0, 2\\pi[$ : ' + raw.map(red).join(' et ') + '.',
          L`Solutions : $x \in \left\{${sols.map(degTeX).join(' \\ ;\\ ')}\right\}$. Vérification : les deux points ont bien la même ${f === 'cos' ? 'abscisse' : 'ordonnée'} $${vT}$ ✔.`
        ],
        mistakes: [
          { expr: toAns([nrm(a)]), msg: L`Il manque une solution : sur $[0, 2\pi[$, l'équation a **deux** solutions (les 2 points d'intersection avec le cercle). Pense à ${f === 'cos' ? L`$-a + 2\pi$` : L`$\pi - a$`}.` },
          { expr: toAns(set(f === 'cos' ? [a, 180 - a] : [a, -a])), msg: f === 'cos' ? L`Tu as utilisé la formule du **sinus** ($\pi - a$). Pour le cosinus, la 2e solution est $-a$ (symétrie par rapport à l'axe horizontal), soit $-a + 2\pi$ dans $[0, 2\pi[$.` : L`Tu as utilisé la formule du **cosinus** ($-a$). Pour le sinus, la 2e solution est $\pi - a$ (symétrie par rapport à l'axe vertical).` }
        ]
      });
    }
  };
  // ---------- calcul algébrique ----------
  G.identite = {
    label: 'Identités remarquables', chapter: 'm1',
    make() {
      const a = R(1, 5), b = R(1, 7), t = R(0, 3);
      const ax = (a === 1 ? '' : a) + 'x', a2x2 = (a === 1 ? '' : a * a) + 'x^2';
      const base = { chapter: 'm1', sec: 'm1-s-identites', vars: ['x'], check: 'expr' };
      if (t <= 1) {
        const s = t ? '-' : '+', e = t ? -1 : 1;
        const ans = poly([b * b, 2 * e * a * b, a * a]);
        return q('identite', Object.assign(base, {
          topic: 'Identités remarquables (développer)', form: 'expanded',
          q: L`Développe $(${ax} ${s} ${b})^2$.`, answer: ans,
          hint: L`Utilise $(A ${s} B)^2 = A^2 ${s} 2AB + B^2$.`,
          rule: L`$(A + B)^2 = A^2 + 2AB + B^2$ et $(A - B)^2 = A^2 - 2AB + B^2$ : n'oublie jamais le **double produit** $2AB$.`,
          pitfall: L`$(A ${s} B)^2 \neq A^2 ${s} B^2$ : le carré d'une somme n'est pas la somme des carrés.`,
          explain: L`On applique $(A ${s} B)^2 = A^2 ${s} 2AB + B^2$ avec $A = ${ax}$ et $B = ${b}$.`,
          steps: [
            L`Identité remarquable : $(A ${s} B)^2 = A^2 ${s} 2AB + B^2$. Elle vient du développement $(A ${s} B)(A ${s} B) = A^2 ${s} AB ${s} BA + B^2$ : les deux termes croisés donnent le **double produit**.`,
            L`On identifie : $A = ${ax}$ et $B = ${b}$.`,
            L`$A^2 = (${ax})^2 = ${a === 1 ? 'x^2' : L`${a}^2 x^2 = ${a * a}x^2`}$` + (a === 1 ? '.' : ' (le carré porte aussi sur le coefficient).'),
            L`$2AB = 2 \times ${ax} \times ${b} = ${2 * a * b}x$ et $B^2 = ${b}^2 = ${b * b}$.`,
            L`Résultat : $(${ax} ${s} ${b})^2 = ${T(ans)}$. Vérification en $x = 1$ : $(${a} ${s} ${b})^2 = ${(a + e * b) * (a + e * b)}$ et $${a * a} ${s} ${2 * a * b} + ${b * b} = ${a * a + 2 * e * a * b + b * b}$ ✔.`
          ],
          mistakes: [
            { expr: poly([b * b, 0, a * a]), msg: L`Tu as oublié le double produit $${s}2AB = ${s}${2 * a * b}x$ : $(A ${s} B)^2 \neq A^2 + B^2$.` },
            t && { expr: poly([-b * b, 0, a * a]), msg: L`$A^2 - B^2$ correspond à $(A - B)(A + B)$, pas à $(A - B)^2$ : il manque le double produit $-2AB$ et $B^2$ est positif.` },
            t && { expr: poly([-b * b, -2 * a * b, a * a]), msg: L`Le dernier terme est $+B^2 = +${b * b}$ : un carré est toujours positif.` },
            t && { expr: poly([b * b, 2 * a * b, a * a]), msg: L`Le double produit est **négatif** : $(A - B)^2 = A^2 - 2AB + B^2$.` },
            { expr: poly([b * b, 2 * e * a * b, a]), msg: L`$(${ax})^2 = ${a * a}x^2$, pas $${a}x^2$ : le carré porte aussi sur le coefficient.` },
            { expr: poly([b * b, e * a * b, a * a]), msg: L`Le double produit vaut $2AB = 2 \times ${ax} \times ${b} = ${2 * a * b}x$ : n'oublie pas le facteur 2.` }
          ]
        }));
      }
      if (t === 2) {
        const P2 = T(poly([-b * b, 0, a * a]));
        return q('identite', Object.assign(base, {
          topic: 'Identités remarquables (factoriser)', form: 'factored',
          q: L`Factorise $${P2}$.`, answer: '(' + a + '*x-' + b + ')*(' + a + '*x+' + b + ')',
          hint: L`Deux carrés séparés par un moins : $A^2 - B^2$.`,
          rule: L`$A^2 - B^2 = (A - B)(A + B)$ (différence de deux carrés).`,
          pitfall: L`$A^2 - B^2 \neq (A - B)^2$ : $(A - B)^2 = A^2 - 2AB + B^2$ contient un double produit.`,
          explain: L`On reconnaît $A^2 - B^2 = (A - B)(A + B)$ avec $A = ${ax}$ et $B = ${b}$.`,
          steps: [
            L`Pour factoriser, on cherche une forme connue. Ici : deux termes, tous deux des carrés, séparés par un signe moins → **différence de deux carrés** $A^2 - B^2 = (A - B)(A + B)$.`,
            L`On écrit chaque terme comme un carré : $${a2x2} = (${ax})^2$ et $${b * b} = ${b}^2$. Donc $A = ${ax}$ et $B = ${b}$.`,
            L`On applique : $${P2} = (${ax} - ${b})(${ax} + ${b})$.`,
            L`Vérification en développant : $(${ax} - ${b})(${ax} + ${b}) = ${a2x2} + ${a * b}x - ${a * b}x - ${b * b} = ${P2}$ ✔.`
          ],
          mistakes: [
            { expr: '(' + a + '*x-' + b + ')^2', msg: L`$(${ax} - ${b})^2 = ${T(poly([b * b, -2 * a * b, a * a]))}$ : il y a un double produit en trop. Une différence de deux carrés se factorise en $(A - B)(A + B)$.` },
            { expr: '(' + a + '*x+' + b + ')^2', msg: L`$(A + B)^2 = A^2 + 2AB + B^2$, pas $A^2 - B^2$. Ici il faut $(A - B)(A + B)$.` },
            a > 1 && { expr: '(x-' + b + ')*(x+' + b + ')', msg: L`Il manque le coefficient : $${a2x2} = (${a}x)^2$, donc $A = ${a}x$ et non $x$.` }
          ]
        }));
      }
      const P3 = T(poly([b * b, 2 * b, 1]));
      return q('identite', Object.assign(base, {
        topic: 'Identités remarquables (factoriser)', form: 'factored',
        q: L`Factorise $${P3}$.`, answer: '(x+' + b + ')^2',
        hint: L`Trois termes dont deux carrés : pense à $A^2 + 2AB + B^2$.`,
        rule: L`$A^2 + 2AB + B^2 = (A + B)^2$ et $A^2 - 2AB + B^2 = (A - B)^2$.`,
        explain: L`On reconnaît $A^2 + 2AB + B^2 = (A + B)^2$ avec $A = x$ et $B = ${b}$.`,
        steps: [
          L`Trois termes, dont deux carrés ($x^2$ et $${b * b} = ${b}^2$) : on pense à l'identité $A^2 + 2AB + B^2 = (A + B)^2$.`,
          L`On identifie $A = x$ et $B = ${b}$ (les racines des deux carrés).`,
          L`On **vérifie** le terme du milieu : $2AB = 2 \times x \times ${b} = ${2 * b}x$ ✔ — c'est bien celui de l'expression, l'identité s'applique.`,
          L`Donc $${P3} = (x + ${b})^2$.`
        ],
        mistakes: [
          { expr: '(x+' + b * b + ')^2', msg: L`$B$ est la **racine** de $${b * b}$, soit $${b}$ : $(x + ${b * b})^2$ donnerait $${b * b * b * b}$ comme terme constant.` },
          { expr: '(x+' + 2 * b + ')^2', msg: L`$${2 * b}x$ est le double produit $2AB$, donc $B = ${b}$ (et non $${2 * b}$).` },
          { expr: '(x-' + b + ')*(x+' + b + ')', msg: L`$(x - ${b})(x + ${b}) = x^2 - ${b * b}$ : ce n'est pas l'expression de départ (il manque le terme en $x$).` },
          { expr: '(x-' + b + ')^2', msg: L`Signe : le double produit $+${2 * b}x$ est positif, donc c'est $(A + B)^2$.` }
        ]
      }));
    }
  };
  G.trinome = {
    label: 'Second degré', chapter: 'm1',
    make() {
      const r1 = R(-6, 6), r2 = R(-6, 6), a = pick([1, 1, 1, 2, -1]);
      const b = -a * (r1 + r2), c = a * r1 * r2, D2 = b * b - 4 * a * c;
      const pT = T(poly([c, b, a]));
      const base = {
        chapter: 'm1', sec: 'm1-s-trinome', topic: 'Trinôme du second degré',
        rule: L`$\Delta = b^2 - 4ac$ ; si $\Delta > 0$ : $x_{1,2} = \dfrac{-b \pm \sqrt{\Delta}}{2a}$ ; si $\Delta = 0$ : $x_0 = -\dfrac{b}{2a}$ ; si $\Delta < 0$ : pas de racine réelle.`
      };
      const coefStep = L`On lit les coefficients de $ax^2 + bx + c$ (avec leur signe) : $a = ${a}$, $b = ${b}$, $c = ${c}$` + (b === 0 ? ' (pas de terme en $x$)' : '') + (c === 0 ? ' (pas de constante)' : '') + '.';
      const dStep = L`$\Delta = b^2 - 4ac = ${pn(b)}^2 - 4 \times ${pn(a)} \times ${pn(c)} = ${b * b} ${sg(-4 * a * c)} = ${D2}$.`;
      if (Math.random() < 0.3) return q('trinome', Object.assign(base, {
        q: L`Discriminant de $${pT}$ ?`, answer: String(D2), check: 'value',
        hint: L`$\Delta = b^2 - 4ac$, attention aux signes de $a$, $b$, $c$.`,
        explain: L`$\Delta = b^2 - 4ac = ${D2}$ : ${D2 > 0 ? 'deux racines réelles distinctes' : D2 === 0 ? 'une racine double' : 'pas de racine réelle'}.`,
        steps: [
          L`Le **discriminant** du trinôme $ax^2 + bx + c$ est $\Delta = b^2 - 4ac$. Son signe donne le nombre de solutions de $ax^2 + bx + c = 0$ : $\Delta > 0$ → 2 solutions, $\Delta = 0$ → 1 solution (double), $\Delta < 0$ → aucune solution réelle.`,
          coefStep, dStep,
          L`$\Delta ${D2 > 0 ? '> 0' : D2 === 0 ? '= 0' : '< 0'}$ : ${D2 > 0 ? 'le trinôme a deux racines réelles distinctes' : D2 === 0 ? 'le trinôme a une racine double' : 'le trinôme n\'a pas de racine réelle'}.`
        ],
        mistakes: [
          { expr: String(b * b + 4 * a * c), msg: L`C'est $b^2 \mathbf{-} 4ac$ : tu as ajouté $4ac = ${4 * a * c}$ au lieu de le soustraire.` },
          { expr: String(-b * b - 4 * a * c), msg: L`$b^2$ est un carré, donc toujours positif : $${pn(b)}^2 = ${b * b}$ (et non $-${b * b}$).` },
          { expr: String(b * b - a * c), msg: L`Il manque le facteur 4 : $\Delta = b^2 - \mathbf{4}ac$.` }
        ]
      }));
      const s = Math.abs(a * (r1 - r2));
      const x1 = (-b - s) / (2 * a), x2 = (-b + s) / (2 * a);
      return q('trinome', Object.assign(base, {
        level: 2, q: L`Résous $${pT} = 0$ (sépare les solutions par ;).`, answer: r1 === r2 ? String(r1) : r1 + ';' + r2, check: 'set',
        hint: L`Calcule $\Delta = b^2 - 4ac$, puis applique $\dfrac{-b \pm \sqrt{\Delta}}{2a}$.`,
        explain: L`$\Delta = ${D2}$` + (D2 === 0 ? L` : racine double $${r1}$.` : L` > 0 : deux racines, $${Math.min(x1, x2)}$ et $${Math.max(x1, x2)}$.`),
        steps: [
          L`Pour résoudre $ax^2 + bx + c = 0$, on calcule le discriminant $\Delta = b^2 - 4ac$ : son signe donne le nombre de solutions, puis on applique la formule des racines.`,
          coefStep, dStep,
          D2 === 0 ? L`$\Delta = 0$ : une seule solution (racine double) $x_0 = -\dfrac{b}{2a} = -\dfrac{${b}}{2 \times ${pn(a)}} = ${r1}$.` : L`$\Delta = ${D2} > 0$ : deux solutions, et $\sqrt{\Delta} = \sqrt{${D2}} = ${s}$.`,
          D2 === 0 ? null : L`$x_1 = \dfrac{-b - \sqrt{\Delta}}{2a} = \dfrac{${-b} - ${s}}{${2 * a}} = ${x1}$ et $x_2 = \dfrac{-b + \sqrt{\Delta}}{2a} = \dfrac{${-b} + ${s}}{${2 * a}} = ${x2}$.`,
          L`Vérification : somme des racines $${x1} + ${pn(x2)} = ${r1 + r2} = -\dfrac{b}{a}$ ✔ et produit $${x1} \times ${pn(x2)} = ${r1 * r2} = \dfrac{c}{a}$ ✔.`
        ].filter(Boolean),
        mistakes: [
          { expr: r1 === r2 ? String(-r1) : -r1 + ';' + -r2, msg: L`Signes inversés : les racines sont $\dfrac{\mathbf{-b} \pm \sqrt{\Delta}}{2a}$ — n'oublie pas le signe moins devant $b$. Vérifie en remplaçant dans l'équation.` },
          r1 !== r2 && { expr: String(x1), msg: L`Il manque une solution : $\Delta > 0$ donc il y a **deux** racines ($-b - \sqrt{\Delta}$ et $-b + \sqrt{\Delta}$, divisés par $2a$).` },
          r1 !== r2 && { expr: String(x2), msg: L`Il manque une solution : $\Delta > 0$ donc il y a **deux** racines ($-b - \sqrt{\Delta}$ et $-b + \sqrt{\Delta}$, divisés par $2a$).` },
          a !== 1 && { expr: r1 === r2 ? frac(-b, 2) : frac(-b - s, 2) + ';' + frac(-b + s, 2), msg: L`Tu as divisé par 2 au lieu de $2a = ${2 * a}$.` }
        ]
      }));
    }
  };
  // ---------- exp / ln ----------
  G.lnexp = {
    label: 'Exp et ln', chapter: 'm3',
    make() {
      const t = R(0, 4), a = R(2, 5), n = R(2, 5), an = Math.pow(a, n);
      const base = { chapter: 'm3', check: 'value' };
      const recip = L`$\ln$ et $\exp$ sont **réciproques** l'une de l'autre : $\ln(\mathrm{e}^x) = x$ pour tout $x$, et $\mathrm{e}^{\ln y} = y$ pour $y > 0$.`;
      if (t === 0) return q('lnexp', Object.assign(base, {
        sec: 'm3-s-ln', topic: 'Propriétés du logarithme',
        q: L`Simplifie $\dfrac{\ln(${an})}{\ln ${a}}$.`, answer: String(n),
        hint: L`Écris $${an}$ comme une puissance de $${a}$, puis utilise $\ln(a^n) = n\ln a$.`,
        rule: L`$\ln(a^n) = n\ln a$. Attention : $\dfrac{\ln a}{\ln b} \neq \ln\dfrac{a}{b}$ (c'est $\ln a - \ln b$ qui vaut $\ln\dfrac{a}{b}$).`,
        pitfall: L`On ne « simplifie » pas des $\ln$ comme des nombres : $\dfrac{\ln ${an}}{\ln ${a}} \neq \ln\dfrac{${an}}{${a}}$ et $\neq \dfrac{${an}}{${a}}$.`,
        explain: L`$${an} = ${a}^{${n}}$, donc $\ln ${an} = ${n}\ln ${a}$ et le quotient vaut $${n}$.`,
        steps: [
          L`Le logarithme transforme les **puissances en produits** : $\ln(a^n) = n\ln a$ (et les produits en sommes : $\ln(ab) = \ln a + \ln b$).`,
          L`On reconnaît une puissance de $${a}$ : $${an} = ${Array(n).fill(a).join(' \\times ')} = ${a}^{${n}}$.`,
          L`Donc $\ln ${an} = \ln(${a}^{${n}}) = ${n}\ln ${a}$.`,
          L`On remplace : $\dfrac{\ln ${an}}{\ln ${a}} = \dfrac{${n}\ln ${a}}{\ln ${a}} = ${n}$ (on simplifie par $\ln ${a} \neq 0$).`,
          L`Vérification : $${a}^{${n}} = ${an}$ ✔ (et à la calculatrice $\ln ${an} \approx ${Math.log(an).toFixed(3).replace('.', '{,}')}$, $\ln ${a} \approx ${Math.log(a).toFixed(3).replace('.', '{,}')}$, quotient $\approx ${n}$).`
        ],
        mistakes: [
          { expr: 'ln(' + an / a + ')', msg: L`$\dfrac{\ln A}{\ln B} \neq \ln\dfrac{A}{B}$ ! La règle $\ln\dfrac{A}{B} = \ln A - \ln B$ concerne une **différence** de $\ln$, pas un quotient. Ici on écrit $\ln ${an} = ${n}\ln ${a}$, puis on simplifie par $\ln ${a}$.` },
          { expr: String(an / a), msg: L`Tu as simplifié comme si les $\ln$ s'annulaient : $\dfrac{\ln A}{\ln B} \neq \dfrac{A}{B}$. Écris plutôt $${an} = ${a}^{${n}}$.` },
          { expr: n + '*ln(' + a + ')', msg: L`Bon début : $\ln ${an} = ${n}\ln ${a}$. Il reste à **diviser** par $\ln ${a}$.` }
        ]
      }));
      if (t === 1) return q('lnexp', Object.assign(base, {
        sec: 'm3-s-exp', topic: 'Propriétés de l\'exponentielle',
        q: L`Simplifie $\mathrm{e}^{${n}\ln ${a}}$.`, answer: String(an),
        hint: L`Fais rentrer le ${n} dans le $\ln$ : $n\ln a = \ln(a^n)$.`,
        rule: L`$\mathrm{e}^{\ln y} = y$ (pour $y > 0$) et $n\ln a = \ln(a^n)$, donc $\mathrm{e}^{n\ln a} = a^n$.`,
        explain: L`$\mathrm{e}^{${n}\ln ${a}} = \mathrm{e}^{\ln(${a}^{${n}})} = ${a}^{${n}} = ${an}$.`,
        steps: [
          recip,
          L`On fait rentrer le facteur dans le logarithme : $${n}\ln ${a} = \ln(${a}^{${n}})$ (propriété $n\ln a = \ln(a^n)$).`,
          L`Donc $\mathrm{e}^{${n}\ln ${a}} = \mathrm{e}^{\ln(${a}^{${n}})} = ${a}^{${n}}$, car $\mathrm{e}^{\ln y} = y$.`,
          L`$${a}^{${n}} = ${Array(n).fill(a).join(' \\times ')} = ${an}$.`
        ],
        mistakes: [
          { expr: String(n * a), msg: L`$\mathrm{e}^{${n}\ln ${a}} \neq ${n} \times ${a}$ : le facteur $${n}$ devient un **exposant** ($n\ln a = \ln(a^n)$).` },
          { expr: String(Math.pow(n, a)), msg: L`Base et exposant inversés : c'est $${a}^{${n}}$ (le nombre dans le $\ln$ est la base), pas $${n}^{${a}}$.` },
          { expr: n + '*ln(' + a + ')', msg: 'Tu as oublié l\'exponentielle : $\\mathrm{e}^{\\ln y} = y$, il faut l\'appliquer.' }
        ]
      }));
      if (t === 2) return q('lnexp', Object.assign(base, {
        sec: 'm3-s-exp', topic: 'Équations avec l\'exponentielle',
        q: L`Résous $\mathrm{e}^{x} = ${a}$.`, answer: 'ln(' + a + ')',
        hint: L`Applique $\ln$ aux deux membres.`,
        rule: L`Pour $y > 0$ : $\mathrm{e}^x = y \Leftrightarrow x = \ln y$.`,
        explain: L`On applique $\ln$ : $x = \ln ${a}$.`,
        steps: [
          recip,
          L`On applique $\ln$ aux deux membres (possible car ils sont $> 0$) : $\ln(\mathrm{e}^x) = \ln ${a}$.`,
          L`$\ln(\mathrm{e}^x) = x$, donc $x = \ln ${a} \approx ${Math.log(a).toFixed(3).replace('.', '{,}')}$.`,
          L`Vérification : $\mathrm{e}^{\ln ${a}} = ${a}$ ✔.`
        ],
        mistakes: [
          { expr: 'exp(' + a + ')', msg: L`Tu as appliqué $\exp$ au lieu de $\ln$ : pour « défaire » une exponentielle, on prend le **logarithme**.` },
          { expr: a + '/e', msg: L`$\mathrm{e}^x$ n'est pas $\mathrm{e} \times x$ : on ne divise pas par $\mathrm{e}$, on applique $\ln$.` }
        ]
      }));
      if (t === 3) return q('lnexp', Object.assign(base, {
        sec: 'm3-s-ln', topic: 'Équations avec le logarithme',
        q: L`Résous $\ln x = ${n}$.`, answer: 'exp(' + n + ')',
        hint: L`Applique $\exp$ aux deux membres.`,
        rule: L`$\ln x = c \Leftrightarrow x = \mathrm{e}^{c}$ (avec $x > 0$).`,
        explain: L`On applique $\exp$ : $x = \mathrm{e}^{${n}}$.`,
        steps: [
          recip,
          L`On applique l'exponentielle aux deux membres : $\mathrm{e}^{\ln x} = \mathrm{e}^{${n}}$.`,
          L`$\mathrm{e}^{\ln x} = x$, donc $x = \mathrm{e}^{${n}} \approx ${Math.exp(n).toFixed(2).replace('.', '{,}')}$ (bien $> 0$, donc dans le domaine de $\ln$).`,
          L`Vérification : $\ln(\mathrm{e}^{${n}}) = ${n}$ ✔.`
        ],
        mistakes: [
          { expr: 'ln(' + n + ')', msg: L`Tu as appliqué $\ln$ une 2e fois : pour « défaire » un $\ln$, on prend l'**exponentielle**.` },
          { expr: '10^' + n, msg: L`$\ln$ est le logarithme **népérien**, de base $\mathrm{e}$ : $\ln x = ${n} \Leftrightarrow x = \mathrm{e}^{${n}}$. (La base 10, c'est $\log_{10}$.)` },
          { expr: n + '*e', msg: L`$\ln x$ n'est pas « $\ln \times x$ » : on applique l'exponentielle, $x = \mathrm{e}^{${n}}$.` }
        ]
      }));
      return q('lnexp', Object.assign(base, {
        sec: 'm3-s-ln', topic: 'Propriétés du logarithme',
        q: L`Écris $\ln ${a} + \ln ${n} - \ln 2$ sous la forme $\ln(\dots)$ : que vaut le nombre dans le ln ?`, answer: frac(a * n, 2),
        hint: L`Somme de $\ln$ → produit ; différence → quotient.`,
        rule: L`$\ln a + \ln b = \ln(ab)$ et $\ln a - \ln b = \ln\dfrac{a}{b}$.`,
        pitfall: L`$\ln a + \ln b \neq \ln(a + b)$ !`,
        explain: L`$\ln ${a} + \ln ${n} - \ln 2 = \ln\dfrac{${a} \times ${n}}{2} = \ln ${fracTeX(a * n, 2)}$.`,
        steps: [
          L`Le logarithme transforme les produits en sommes : $\ln(ab) = \ln a + \ln b$, et les quotients en différences : $\ln\dfrac{a}{b} = \ln a - \ln b$. On lit ces règles « à l'envers » pour regrouper.`,
          L`Somme → produit : $\ln ${a} + \ln ${n} = \ln(${a} \times ${n}) = \ln ${a * n}$.`,
          L`Différence → quotient : $\ln ${a * n} - \ln 2 = \ln\dfrac{${a * n}}{2}$.`,
          L`On simplifie : $\dfrac{${a * n}}{2} = ${fracTeX(a * n, 2)}$. Le nombre cherché est $${fracTeX(a * n, 2)}$.`
        ],
        mistakes: [
          { expr: String(a + n - 2), msg: L`Tu as additionné les nombres : $\ln a + \ln b = \ln(a\mathbf{b})$ (produit), pas $\ln(a + b)$.` },
          { expr: String(a * n * 2), msg: L`Le $-\ln 2$ correspond à une **division** par 2 : $\ln A - \ln 2 = \ln\dfrac{A}{2}$.` },
          { expr: String(a * n - 2), msg: L`$\ln A - \ln 2 = \ln\dfrac{A}{2}$ (quotient), pas $\ln(A - 2)$.` }
        ]
      }));
    }
  };
  // ---------- DL ----------
  G.dl = {
    label: 'Développements limités', chapter: 'm4',
    make() {
      const a = pick([1, 2, 3, -1, -2]);
      const uT = (a === 1 ? '' : a === -1 ? '-' : a) + 'x', ab = Math.abs(a) === 1 ? '' : Math.abs(a);
      const K = [
        { f: L`\mathrm{e}^{${uT}}`, c: [[1, 1], [1, 1], [1, 2], [1, 6]], rule: L`\mathrm{e}^u = 1 + u + \frac{u^2}{2} + \frac{u^3}{6} + o(u^3)`, form: L`\mathrm{e}^u` },
        { f: L`\ln(1 ${a < 0 ? '-' : '+'} ${ab}x)`, c: [[0, 1], [1, 1], [-1, 2], [1, 3]], rule: L`\ln(1 + u) = u - \frac{u^2}{2} + \frac{u^3}{3} + o(u^3)`, form: L`\ln(1 + u)` },
        { f: L`\sin(${uT})`, c: [[0, 1], [1, 1], [0, 1], [-1, 6]], rule: L`\sin u = u - \frac{u^3}{6} + o(u^3)`, form: L`\sin u` },
        { f: L`\cos(${uT})`, c: [[1, 1], [0, 1], [-1, 2], [0, 1]], rule: L`\cos u = 1 - \frac{u^2}{2} + o(u^3)`, form: L`\cos u` },
        { f: L`\dfrac{1}{1 ${a < 0 ? '+' : '-'} ${ab}x}`, c: [[1, 1], [1, 1], [1, 1], [1, 1]], rule: L`\frac{1}{1 - u} = 1 + u + u^2 + u^3 + o(u^3)`, form: L`\dfrac{1}{1 - u}` }
      ];
      const k = pick(K), ord = pick([2, 3]);
      const coefs = k.c.slice(0, ord + 1).map(([n, d], i) => [n * Math.pow(a, i), d]);
      const ans = poly(coefs);
      const mono = (c, i) => T(poly(Array(i).fill(0).concat([c])));
      const pows = [];
      for (let i = 2; i <= ord; i++) pows.push(L`$u^{${i}} = (${uT})^{${i}} = ${mono(Math.pow(a, i), i)}$`);
      return q('dl', {
        chapter: 'm4', sec: 'm4-s-dl-usuels', topic: 'Développements limités usuels', level: 2, vars: ['x'], check: 'expr', placeholder: 'ex. 1 + 2x + 2x^2',
        q: L`DL à l'ordre ${ord} en 0 de $${k.f}$ : donne la partie polynomiale.`, answer: ans,
        hint: L`Pars du DL usuel de $${k.form}$ et remplace $u$ par $${uT}$.`,
        rule: L`DL usuel : $${k.rule}$ ; on substitue $u$ par une expression qui tend vers 0.`,
        pitfall: L`En substituant $u = ${uT}$, le coefficient est **lui aussi** élevé à la puissance : $(${uT})^2 = ${mono(a * a, 2)}$.`,
        explain: L`Avec $u = ${uT}$ dans $${k.rule}$ : $${k.f} = ${T(ans)} + o(x^{${ord}})$.`,
        steps: [
          L`Un **développement limité** (DL) à l'ordre ${ord} en 0 approche $f(x)$, pour $x$ proche de 0, par un polynôme de degré ${ord} : $f(x) = P(x) + o(x^{${ord}})$, où $o(x^{${ord}})$ est négligeable devant $x^{${ord}}$. On ne recalcule rien : on part d'un **DL usuel** et on substitue.`,
          L`DL usuel (quand $u \to 0$) : $${k.rule}$.`,
          L`Ici $${k.f}$ s'écrit $${k.form}$ avec $u = ${uT}$, qui tend bien vers 0 quand $x \to 0$.`,
          L`On remplace $u$ par $${uT}$, en élevant **aussi le coefficient** aux puissances : ` + (a === 1 ? 'ici $u = x$, rien à changer' : pows.join(', ')) + '.',
          L`On garde les termes jusqu'à $x^{${ord}}$ : $${k.f} = ${T(ans)} + o(x^{${ord}})$.`
        ],
        mistakes: [
          { expr: poly(k.c.slice(0, ord + 1).map(([n, d], i) => [n * (i ? a : 1), d])), msg: L`Le coefficient doit être élevé à la puissance : $(${uT})^2 = ${mono(a * a, 2)}$, pas $${mono(a, 2)}$.` },
          { expr: poly(coefs.slice(0, ord)), msg: L`Il manque le terme de degré ${ord} : un DL à l'ordre ${ord} contient tous les termes jusqu'à $x^{${ord}}$.` },
          { expr: poly(coefs.map(([n, d]) => [Math.abs(n), d])), msg: L`Attention aux signes : $${k.rule}$, et $u = ${uT}$${a < 0 ? ' est négatif' : ''}.` }
        ]
      });
    }
  };
  // ---------- dérivées ----------
  const BLOCKS = ['x^2', 'x^3', 'sin(x)', 'cos(x)', 'exp(x)', 'ln(x)', 'sqrt(x)', 'x'];
  const INNER = ['2*x', '3*x', 'x^2', 'x^2+1', '2*x+1', '-x', 'x^3'];
  const OUT = {
    sin: { name: L`\sin`, usual: L`(\sin)' = \cos`, tex: (u) => L`\cos\left(${u}\right)`, s: (u) => 'cos(' + u + ')' },
    cos: { name: L`\cos`, usual: L`(\cos)' = -\sin`, tex: (u) => L`-\sin\left(${u}\right)`, s: (u) => '-sin(' + u + ')' },
    exp: { name: L`\exp`, usual: L`(\mathrm{e}^x)' = \mathrm{e}^x`, tex: (u) => L`\mathrm{e}^{${u}}`, s: (u) => 'exp(' + u + ')' },
    ln: { name: L`\ln`, usual: L`(\ln x)' = \dfrac{1}{x}`, tex: (u) => L`\dfrac{1}{${u}}`, s: (u) => '1/(' + u + ')' },
    sqrt: { name: L`\sqrt{\ \cdot\ }`, usual: L`(\sqrt{x})' = \dfrac{1}{2\sqrt{x}}`, tex: (u) => L`\dfrac{1}{2\sqrt{${u}}}`, s: (u) => '1/(2*sqrt(' + u + '))' }
  };
  G.derivee = {
    label: 'Dérivées', chapter: 'm5',
    make() {
      const t = R(0, 3);
      let f, topic, rule, steps, mist;
      const res = () => { const d = M.derive(px(f), 'x'); return { ans: M.toStr(d), dT: M.toTeX(d) }; };
      let r;
      if (t === 0) {
        const o = pick(Object.keys(OUT)), g = OUT[o];
        const u = pick(o === 'ln' || o === 'sqrt' ? ['x^2+1', '2*x+1', 'x^2+3'] : INNER);
        f = o + '(' + u + ')'; r = res();
        const uT = TX(u), du = D(u), duT = TX(du);
        topic = 'Dérivée d\'une fonction composée';
        rule = L`Composée : $\big(g(u)\big)' = u' \times g'(u)$.`;
        steps = [
          L`$f$ est une **fonction composée** : la fonction usuelle $${g.name}$ appliquée à l'expression $u(x) = ${uT}$. Règle : $\big(g(u)\big)' = u' \times g'(u)$ — on dérive la fonction « extérieure » en **gardant l'intérieur**, puis on multiplie par la dérivée de l'intérieur.`,
          L`Dérivée usuelle : $${g.usual}$, donc $g'(u) = ${g.tex(uT)}$.`,
          L`Dérivée de l'intérieur : $u(x) = ${uT}$, donc $u'(x) = ${duT}$.`,
          L`On multiplie : $f'(x) = u' \times g'(u) = ${P(duT)} \times ${g.tex(uT)}$.`,
          L`Résultat : $f'(x) = ${r.dT}$.`
        ];
        mist = [
          du !== '1' && { expr: g.s(u), msg: L`Tu as oublié de multiplier par la dérivée de l'intérieur $u'(x) = ${duT}$ : $\big(g(u)\big)' = \mathbf{u'} \times g'(u)$.` },
          { expr: '(' + du + ')*' + g.s('x'), msg: L`On **garde l'intérieur** : $g'(u) = ${g.tex(uT)}$, pas $${g.tex('x')}$.` }
        ];
      } else if (t === 1) {
        const a = pick(BLOCKS), b = pick(BLOCKS.filter((x) => x !== a));
        f = a + '*' + b; r = res();
        const da = D(a), db = D(b);
        topic = 'Dérivée d\'un produit';
        rule = L`Produit : $(uv)' = u'v + uv'$.`;
        steps = [
          L`$f$ est un **produit** de deux fonctions : $f = u \times v$. Règle : $(uv)' = u'v + uv'$ — on dérive un facteur à la fois en gardant l'autre, et on additionne (jamais $u' \times v'$).`,
          L`$u(x) = ${TX(a)}$, donc $u'(x) = ${TX(da)}$.`,
          L`$v(x) = ${TX(b)}$, donc $v'(x) = ${TX(db)}$.`,
          L`$f'(x) = u'v + uv' = ${P(TX(da))} \cdot ${P(TX(b))} + ${P(TX(a))} \cdot ${P(TX(db))}$.`,
          L`Après simplification : $f'(x) = ${r.dT}$.`
        ];
        mist = [
          { expr: '(' + da + ')*(' + db + ')', msg: L`$(uv)' \neq u'v'$ : il faut $u'v + uv'$ (dériver un facteur à la fois).` },
          { expr: '(' + da + ')*(' + b + ')', msg: L`Il manque le terme $uv' = ${P(TX(a))} \cdot ${P(TX(db))}$ : $(uv)' = u'v + uv'$.` },
          { expr: '(' + a + ')*(' + db + ')', msg: L`Il manque le terme $u'v = ${P(TX(da))} \cdot ${P(TX(b))}$ : $(uv)' = u'v + uv'$.` }
        ];
      } else if (t === 2) {
        const a = pick(['x', 'x^2', 'sin(x)', '1', 'exp(x)']), b = pick(['x^2+1', 'x+2', 'exp(x)', 'cos(x)+2'].filter((x) => x !== a));
        f = '(' + a + ')/(' + b + ')'; r = res();
        const da = D(a), db = D(b);
        topic = 'Dérivée d\'un quotient';
        rule = L`Quotient : $\left(\dfrac{u}{v}\right)' = \dfrac{u'v - uv'}{v^2}$.`;
        steps = [
          L`$f$ est un **quotient** $\dfrac{u}{v}$ (avec $v \neq 0$). Règle : $\left(\dfrac{u}{v}\right)' = \dfrac{u'v - uv'}{v^2}$ — attention à l'ordre : $u'v$ **moins** $uv'$, et le dénominateur est **au carré**.`,
          L`$u(x) = ${TX(a)}$, donc $u'(x) = ${TX(da)}$.`,
          L`$v(x) = ${TX(b)}$, donc $v'(x) = ${TX(db)}$.`,
          L`$f'(x) = \dfrac{${P(TX(da))} \cdot ${P(TX(b))} - ${P(TX(a))} \cdot ${P(TX(db))}}{\left(${TX(b)}\right)^2}$.`,
          L`Après simplification : $f'(x) = ${r.dT}$.`
        ];
        mist = [
          { expr: '((' + da + ')*(' + b + ')+(' + a + ')*(' + db + '))/(' + b + ')^2', msg: L`Le numérateur est $u'v \mathbf{-} uv'$ (moins), pas $u'v + uv'$.` },
          { expr: '((' + a + ')*(' + db + ')-(' + da + ')*(' + b + '))/(' + b + ')^2', msg: L`Ordre inversé : c'est $u'v - uv'$, pas $uv' - u'v$ (ton résultat a le signe opposé).` },
          { expr: '((' + da + ')*(' + b + ')-(' + a + ')*(' + db + '))/(' + b + ')', msg: L`Le dénominateur est $v^2 = \left(${TX(b)}\right)^2$, pas $v$.` },
          a !== '1' && { expr: '(' + da + ')/(' + db + ')', msg: L`$\left(\dfrac{u}{v}\right)' \neq \dfrac{u'}{v'}$ : on applique $\dfrac{u'v - uv'}{v^2}$.` }
        ];
      } else {
        const n = R(2, 5), u = pick(['x^2+1', '2*x-1', 'sin(x)', '3*x+2']);
        f = '(' + u + ')^' + n; r = res();
        const du = D(u), ex = n - 1 === 1 ? '' : L`^{${n - 1}}`;
        topic = 'Dérivée d\'une puissance uⁿ';
        rule = L`Puissance : $(u^n)' = n\,u'\,u^{n-1}$.`;
        steps = [
          L`$f = u^n$ : une expression élevée à une puissance. Règle : $(u^n)' = n\,u'\,u^{n-1}$ — comme $(x^n)' = nx^{n-1}$, mais multiplié par $u'$ car $u$ n'est pas simplement $x$ (c'est une composée).`,
          L`Ici $u(x) = ${TX(u)}$ et $n = ${n}$ ; $u'(x) = ${TX(du)}$.`,
          L`$f'(x) = ${n} \times ${P(TX(du))} \times \left(${TX(u)}\right)${ex}$.`,
          L`Résultat : $f'(x) = ${r.dT}$.`
        ];
        mist = [
          { expr: n + '*(' + u + ')^' + (n - 1), msg: L`Tu as oublié de multiplier par $u'(x) = ${TX(du)}$ : $(u^n)' = n\,\mathbf{u'}\,u^{n-1}$.` },
          { expr: n + '*(' + du + ')*(' + u + ')^' + n, msg: L`L'exposant diminue de 1 : $u^{n-1} = \left(${TX(u)}\right)${ex}$, pas $u^{${n}}$.` },
          { expr: '(' + du + ')^' + n, msg: L`On ne dérive pas « sous la puissance » : $(u^n)' = n\,u'\,u^{n-1}$, pas $(u')^n$.` }
        ];
      }
      return q('derivee', {
        chapter: 'm5', sec: 'm5-s-regles', topic, level: 2, vars: ['x'], domain: /ln|sqrt/.test(f) ? [0.3, 3] : [-2, 2],
        q: L`Dérive $f(x) = ${TX(f)}$.`, answer: r.ans, check: 'expr', placeholder: 'ex. 2x cos(x^2)',
        hint: rule, rule, explain: rule + L` On obtient $f'(x) = ${r.dT}$ (toute forme équivalente est acceptée).`,
        steps, mistakes: mist
      });
    }
  };
  // ---------- primitives ----------
  G.primitive = {
    label: 'Primitives', chapter: 'm6',
    make() {
      const a = R(2, 5), n = R(2, 5);
      const xn1 = n - 1 === 1 ? 'x' : L`x^{${n - 1}}`;
      const E = [
        { f: 'x^' + n, F: 'x^' + (n + 1) + '/' + (n + 1), dom: [-2, 2], topic: 'Primitives usuelles', hint: L`Forme $x^n$ : augmente l'exposant de 1.`,
          rule: L`Pour $n \neq -1$ : $x^n \longrightarrow \dfrac{x^{n+1}}{n+1}$ (on augmente l'exposant de 1, puis on divise par le **nouvel** exposant).`,
          steps: [L`On reconnaît une puissance $x^n$ avec $n = ${n}$ : on augmente l'exposant de 1 ($${n} + 1 = ${n + 1}$) et on divise par ce nouvel exposant.`, L`$F(x) = \dfrac{x^{${n + 1}}}{${n + 1}}$.`, L`Vérification : $F'(x) = \dfrac{${n + 1}x^{${n}}}{${n + 1}} = x^{${n}} = f(x)$ ✔.`],
          mistakes: [['x^' + (n + 1), L`Il manque la division par $${n + 1}$ : la dérivée de $x^{${n + 1}}$ est $${n + 1}x^{${n}}$, pas $x^{${n}}$.`], ['x^' + (n + 1) + '/' + n, L`On divise par le **nouvel** exposant $${n + 1}$, pas par $${n}$.`], [n + '*x^' + (n - 1), L`Tu as **dérivé** au lieu de primitiver : l'exposant doit **augmenter** de 1.`]] },
        { f: 'cos(' + a + '*x)', F: 'sin(' + a + '*x)/' + a, dom: [-2, 2], topic: 'Primitives de cos(ax) et sin(ax)', hint: L`Pense à la dérivée de $\sin(${a}x)$.`,
          rule: L`$\cos(ax) \longrightarrow \dfrac{\sin(ax)}{a}$ et $\sin(ax) \longrightarrow -\dfrac{\cos(ax)}{a}$ : on **divise** par $a$ pour compenser la dérivée intérieure.`,
          steps: [L`On part d'une dérivée connue : $\big(\sin(${a}x)\big)' = ${a}\cos(${a}x)$ (dérivée de $\sin$, multipliée par la dérivée intérieure $${a}$).`, L`On veut $\cos(${a}x)$ **sans** le facteur $${a}$ : on divise par $${a}$. Donc $F(x) = \dfrac{\sin(${a}x)}{${a}}$.`, L`Vérification : $F'(x) = \dfrac{${a}\cos(${a}x)}{${a}} = \cos(${a}x)$ ✔.`],
          mistakes: [['sin(' + a + '*x)', L`Presque : la dérivée de $\sin(${a}x)$ est $${a}\cos(${a}x)$, il faut donc **diviser** par $${a}$.`], [a + '*sin(' + a + '*x)', L`On **divise** par $${a}$ (pour compenser la dérivée intérieure), on ne multiplie pas.`], ['-sin(' + a + '*x)/' + a, L`Signe : $(\sin)' = \cos$, donc une primitive de $\cos$ est $+\sin$ (c'est $\sin$ qui se primitive en $-\cos$).`]] },
        { f: 'sin(' + a + '*x)', F: '-cos(' + a + '*x)/' + a, dom: [-2, 2], topic: 'Primitives de cos(ax) et sin(ax)', hint: L`Pense à la dérivée de $\cos(${a}x)$.`,
          rule: L`$\sin(ax) \longrightarrow -\dfrac{\cos(ax)}{a}$ et $\cos(ax) \longrightarrow \dfrac{\sin(ax)}{a}$.`,
          steps: [L`On part d'une dérivée connue : $\big(\cos(${a}x)\big)' = -${a}\sin(${a}x)$.`, L`Pour obtenir $\sin(${a}x)$, on compense le facteur $-${a}$ en divisant par $-${a}$ : $F(x) = -\dfrac{\cos(${a}x)}{${a}}$.`, L`Vérification : $F'(x) = -\dfrac{-${a}\sin(${a}x)}{${a}} = \sin(${a}x)$ ✔.`],
          mistakes: [['cos(' + a + '*x)/' + a, L`Signe : $(\cos)' = -\sin$, donc une primitive de $\sin$ est $-\cos$.`], ['-cos(' + a + '*x)', L`Il faut aussi diviser par $${a}$ : la dérivée de $\cos(${a}x)$ fait apparaître un facteur $${a}$.`], ['-' + a + '*cos(' + a + '*x)', L`On **divise** par $${a}$, on ne multiplie pas.`]] },
        { f: 'exp(' + a + '*x)', F: 'exp(' + a + '*x)/' + a, dom: [-1.5, 1.5], topic: 'Primitive de l\'exponentielle', hint: L`Pense à la dérivée de $\mathrm{e}^{${a}x}$.`,
          rule: L`$\mathrm{e}^{ax} \longrightarrow \dfrac{\mathrm{e}^{ax}}{a}$.`,
          steps: [L`On part d'une dérivée connue : $\big(\mathrm{e}^{${a}x}\big)' = ${a}\mathrm{e}^{${a}x}$ (l'exponentielle se redonne elle-même, multipliée par la dérivée de l'exposant).`, L`On divise par $${a}$ pour enlever ce facteur : $F(x) = \dfrac{\mathrm{e}^{${a}x}}{${a}}$.`, L`Vérification : $F'(x) = \dfrac{${a}\mathrm{e}^{${a}x}}{${a}} = \mathrm{e}^{${a}x}$ ✔.`],
          mistakes: [['exp(' + a + '*x)', L`Presque : la dérivée de $\mathrm{e}^{${a}x}$ est $${a}\mathrm{e}^{${a}x}$, il faut **diviser** par $${a}$.`], [a + '*exp(' + a + '*x)', L`On **divise** par $${a}$, on ne multiplie pas : c'est la dérivée qui fait apparaître le facteur $${a}$.`], ['exp(' + (a + 1) + '*x)/' + (a + 1), L`Ce n'est pas comme $x^n$ : on ne touche pas à l'exposant de l'exponentielle.`]] },
        { f: '1/(' + a + '*x+1)', F: 'ln(' + a + '*x+1)/' + a, dom: [0.1, 3], topic: 'Primitive de 1/(ax+b)', hint: L`Pense à la dérivée de $\ln(${a}x+1)$.`,
          rule: L`$\dfrac{1}{ax+b} \longrightarrow \dfrac{\ln|ax+b|}{a}$.`,
          steps: [L`On pense au logarithme : $\big(\ln(${a}x+1)\big)' = \dfrac{${a}}{${a}x+1}$ (forme $\dfrac{u'}{u}$ avec $u = ${a}x + 1$, $u' = ${a}$).`, L`Il y a un facteur $${a}$ en trop : on divise par $${a}$, donc $F(x) = \dfrac{\ln|${a}x+1|}{${a}}$ (ici $${a}x + 1 > 0$, donc $\ln(${a}x+1)$).`, L`Vérification : $F'(x) = \dfrac{1}{${a}} \times \dfrac{${a}}{${a}x+1} = \dfrac{1}{${a}x+1}$ ✔.`],
          mistakes: [['ln(' + a + '*x+1)', L`Presque : $\big(\ln(${a}x+1)\big)' = \dfrac{${a}}{${a}x+1}$, il faut donc **diviser** par $${a}$.`], [a + '*ln(' + a + '*x+1)', L`On **divise** par $${a}$, on ne multiplie pas.`]] },
        { f: 'x*exp(x^2)', F: 'exp(x^2)/2', dom: [-1.5, 1.5], topic: 'Primitives de formes composées', hint: L`Cherche une forme $u'\mathrm{e}^u$.`,
          rule: L`$u'\,\mathrm{e}^{u} \longrightarrow \mathrm{e}^{u}$ (on ajuste la constante si $u'$ n'est présent qu'à un facteur près).`,
          steps: [L`On cherche une forme connue : $u'\,\mathrm{e}^u$ a pour primitive $\mathrm{e}^u$. Avec $u = x^2$, on a $u' = 2x$.`, L`Il manque un facteur 2 : $x\,\mathrm{e}^{x^2} = \dfrac{1}{2} \times 2x\,\mathrm{e}^{x^2} = \dfrac{1}{2}\,u'\mathrm{e}^u$.`, L`Donc $F(x) = \dfrac{1}{2}\mathrm{e}^{x^2}$.`, L`Vérification : $F'(x) = \dfrac{1}{2} \times 2x\,\mathrm{e}^{x^2} = x\,\mathrm{e}^{x^2}$ ✔.`],
          mistakes: [['exp(x^2)', L`La dérivée de $\mathrm{e}^{x^2}$ est $2x\,\mathrm{e}^{x^2}$ : il faut diviser par 2.`], ['x^2/2*exp(x^2)', L`On ne primitive pas un produit facteur par facteur : on reconnaît la forme $u'\mathrm{e}^u$ avec $u = x^2$.`], ['2*exp(x^2)', L`On **divise** par 2 (pour compenser $u' = 2x$), on ne multiplie pas.`]] },
        { f: '2*x/(x^2+1)', F: 'ln(x^2+1)', dom: [-2, 2], topic: 'Primitives de formes composées', hint: L`Le numérateur est-il la dérivée du dénominateur ?`,
          rule: L`$\dfrac{u'}{u} \longrightarrow \ln|u|$.`,
          steps: [L`On cherche une forme connue : $\dfrac{u'}{u}$ a pour primitive $\ln|u|$ (car $(\ln u)' = \dfrac{u'}{u}$).`, L`Avec $u = x^2 + 1$ : $u' = 2x$, exactement le numérateur. C'est bien $\dfrac{u'}{u}$.`, L`Donc $F(x) = \ln|x^2 + 1| = \ln(x^2 + 1)$ (car $x^2 + 1 > 0$).`, L`Vérification : $F'(x) = \dfrac{2x}{x^2 + 1}$ ✔.`],
          mistakes: [['2*ln(x^2+1)', L`Le $2x$ du numérateur est **déjà** $u'$ : pas de facteur 2 supplémentaire, $\dfrac{u'}{u} \longrightarrow \ln|u|$.`], ['ln(x^2+1)/(2*x)', L`On ne divise pas par $u'$ : comme le numérateur $2x$ est exactement $u'$, la forme $\dfrac{u'}{u}$ donne directement $\ln|u|$.`]] },
        { f: '1/(1+x^2)', F: 'arctan(x)', dom: [-2, 2], topic: 'Primitives usuelles', hint: L`Primitive usuelle à connaître par cœur.`,
          rule: L`$\dfrac{1}{1+x^2} \longrightarrow \arctan x$.`,
          steps: [L`C'est une primitive usuelle à connaître : $(\arctan x)' = \dfrac{1}{1 + x^2}$.`, L`Attention, ce n'est **pas** la forme $\dfrac{u'}{u}$ : la dérivée de $1 + x^2$ est $2x$, or le numérateur vaut 1.`, L`Donc $F(x) = \arctan x$.`, L`Vérification : $F'(x) = \dfrac{1}{1 + x^2}$ ✔.`],
          mistakes: [['ln(1+x^2)', L`$\big(\ln(1+x^2)\big)' = \dfrac{2x}{1+x^2}$ : le $\ln$ ne marche que si le numérateur est la dérivée du dénominateur. Ici la primitive est $\arctan x$.`], ['ln(1+x^2)/(2*x)', L`On ne peut pas diviser par la dérivée du dénominateur ($x$ n'est pas une constante). Primitive usuelle : $\arctan x$.`]] },
        { f: '1/sqrt(x)', F: '2*sqrt(x)', dom: [0.2, 3], topic: 'Primitives usuelles', hint: L`Écris $\dfrac{1}{\sqrt{x}} = x^{-1/2}$.`,
          rule: L`$\dfrac{1}{\sqrt{x}} \longrightarrow 2\sqrt{x}$ (car $(\sqrt{x})' = \dfrac{1}{2\sqrt{x}}$).`,
          steps: [L`On écrit la racine comme une puissance : $\dfrac{1}{\sqrt{x}} = x^{-1/2}$.`, L`Formule $x^n \longrightarrow \dfrac{x^{n+1}}{n+1}$ avec $n = -\dfrac{1}{2}$ : $n + 1 = \dfrac{1}{2}$, donc $F(x) = \dfrac{x^{1/2}}{1/2} = 2x^{1/2} = 2\sqrt{x}$.`, L`Vérification : $F'(x) = 2 \times \dfrac{1}{2\sqrt{x}} = \dfrac{1}{\sqrt{x}}$ ✔.`],
          mistakes: [['sqrt(x)', L`$(\sqrt{x})' = \dfrac{1}{2\sqrt{x}}$ : il faut multiplier par 2.`], ['sqrt(x)/2', L`Diviser par $\dfrac{1}{2}$, c'est **multiplier** par 2 : $F(x) = 2\sqrt{x}$.`], ['ln(sqrt(x))', L`$\ln$ sert pour $\dfrac{u'}{u}$ (ou $\dfrac{1}{x}$), pas pour $\dfrac{1}{\sqrt{x}}$ : écris $x^{-1/2}$.`]] },
        { f: 'cos(x)*sin(x)^' + n, F: 'sin(x)^' + (n + 1) + '/' + (n + 1), dom: [-2, 2], topic: 'Primitives de formes composées', hint: L`Cherche une forme $u'u^n$.`,
          rule: L`$u'\,u^n \longrightarrow \dfrac{u^{n+1}}{n+1}$ ($n \neq -1$).`,
          steps: [L`On cherche une forme connue : $u'\,u^n$ a pour primitive $\dfrac{u^{n+1}}{n+1}$.`, L`Avec $u = \sin x$ : $u' = \cos x$, donc $f(x) = \cos x \sin^{${n}} x = u'\,u^{${n}}$.`, L`Donc $F(x) = \dfrac{\sin^{${n + 1}} x}{${n + 1}}$.`, L`Vérification : $F'(x) = \dfrac{${n + 1}\cos x \sin^{${n}} x}{${n + 1}} = \cos x \sin^{${n}} x$ ✔.`],
          mistakes: [['sin(x)^' + (n + 1), L`Il faut diviser par $${n + 1}$ : la dérivée de $\sin^{${n + 1}} x$ est $${n + 1}\cos x \sin^{${n}} x$.`], ['sin(x)^' + (n + 1) + '*cos(x)/' + (n + 1), L`Le facteur $\cos x$ est **absorbé** : c'est le $u'$ de la forme $u'u^n$, il ne reste pas dans la primitive.`]] },
        { f: '1/x^' + n, F: '-1/(' + (n - 1) + '*x^' + (n - 1) + ')', dom: [0.3, 3], topic: 'Primitives usuelles', hint: L`Écris $\dfrac{1}{x^{${n}}} = x^{-${n}}$.`,
          rule: L`$\dfrac{1}{x^n} = x^{-n} \longrightarrow \dfrac{x^{-n+1}}{-n+1} = -\dfrac{1}{(n-1)x^{n-1}}$ pour $n \geq 2$.`,
          steps: [L`On écrit la fraction comme une puissance négative : $\dfrac{1}{x^{${n}}} = x^{-${n}}$.`, L`Formule $x^m \longrightarrow \dfrac{x^{m+1}}{m+1}$ avec $m = -${n}$ : $m + 1 = ${1 - n}$, donc $F(x) = \dfrac{x^{${1 - n}}}{${1 - n}} = -\dfrac{1}{${n - 1 === 1 ? '' : n - 1}${xn1}}$.`, L`Vérification : $F'(x) = \dfrac{${1 - n}\,x^{-${n}}}{${1 - n}} = x^{-${n}} = \dfrac{1}{x^{${n}}}$ ✔.`],
          mistakes: [['ln(x^' + n + ')', L`$\ln|x|$ est la primitive de $\dfrac{1}{x}$ uniquement (exposant 1). Ici on écrit $x^{-${n}}$ et on applique la formule des puissances.`], ['1/(' + (n - 1) + '*x^' + (n - 1) + ')', L`Signe : le nouvel exposant $${1 - n}$ est **négatif**, on divise donc par un nombre négatif.`], ['-1/(' + (n + 1) + '*x^' + (n + 1) + ')', L`L'exposant augmente de 1 : $-${n} + 1 = ${1 - n}$. Au dénominateur, la puissance **diminue** donc : $x^{${n - 1}}$, pas $x^{${n + 1}}$.`]] }
      ];
      const e = pick(E);
      return q('primitive', {
        chapter: 'm6', sec: 'm6-s-usuelles', topic: e.topic, level: 2, vars: ['x'], domain: e.dom,
        q: L`Donne une primitive de $f(x) = ${T(e.f)}$.`, answer: e.F, check: 'antideriv', placeholder: 'ex. sin(3x)/3',
        hint: e.hint, rule: e.rule,
        explain: L`$F(x) = ${T(e.F)} + C$ ; on vérifie toujours en dérivant : $F' = f$.`,
        steps: [L`Une **primitive** de $f$ est une fonction $F$ dont la dérivée est $f$ : $F' = f$. Primitiver, c'est « remonter » la dérivation. Toutes les primitives diffèrent d'une constante, d'où le $+\,C$.`].concat(e.steps),
        mistakes: e.mistakes.map(([expr, msg]) => ({ expr, msg }))
      });
    }
  };
  // ---------- complexes ----------
  const cx = (re, im) => re + (im < 0 ? '' : '+') + im + '*i';
  G.complexe = {
    label: 'Nombres complexes', chapter: 'm7',
    make() {
      const a = R(-5, 5) || 1, b = R(-5, 5) || 2, c = R(-4, 4) || 1, d = R(-4, 4) || -1;
      const zt = T(a + (b < 0 ? '' : '+') + b + 'i');
      const t = R(0, 3);
      if (t === 0) {
        const S = a * a + b * b, sT = sqrtTeX(S);
        return q('complexe', {
          chapter: 'm7', sec: 'm7-s-plan', topic: 'Module d\'un nombre complexe',
          q: L`Module de $z = ${zt}$ (valeur exacte) ?`, answer: 'sqrt(' + S + ')', check: 'value',
          hint: L`$|a + b\,\mathrm{i}| = \sqrt{a^2 + b^2}$.`,
          rule: L`$|a + b\,\mathrm{i}| = \sqrt{a^2 + b^2}$ : la distance de l'origine au point $(a, b)$.`,
          explain: L`$|z| = \sqrt{a^2 + b^2} = \sqrt{${S}}${sT !== L`\sqrt{${S}}` ? ' = ' + sT : ''}$.`,
          steps: [
            L`Le **module** $|z|$ de $z = a + b\,\mathrm{i}$ est la distance entre l'origine $O$ et le point $M(a, b)$ du plan complexe. Par le théorème de Pythagore : $|z| = \sqrt{a^2 + b^2}$.`,
            L`Ici $a = ${a}$ et $b = ${b}$ ($b$ est le coefficient devant $\mathrm{i}$, sans le $\mathrm{i}$).`,
            L`$a^2 = ${pn(a)}^2 = ${a * a}$ et $b^2 = ${pn(b)}^2 = ${b * b}$ (un carré est toujours positif).`,
            L`$|z| = \sqrt{${a * a} + ${b * b}} = \sqrt{${S}}` + (sT !== L`\sqrt{${S}}` ? ' = ' + sT : '') + '$.'
          ],
          mistakes: [
            { expr: String(S), msg: L`Tu as donné $|z|^2 = a^2 + b^2 = ${S}$ : il faut encore prendre la **racine carrée**.` },
            a * a !== b * b && { expr: 'sqrt(' + Math.abs(a * a - b * b) + ')', msg: L`On **additionne** les carrés (Pythagore) : $|z| = \sqrt{a^2 + b^2}$, même si $a$ ou $b$ est négatif.` },
            { expr: String(Math.abs(a) + Math.abs(b)), msg: L`$|a + b\,\mathrm{i}| \neq |a| + |b|$ : c'est l'hypoténuse d'un triangle rectangle, $\sqrt{a^2 + b^2}$.` }
          ]
        });
      }
      if (t === 1) {
        const wt = T(c + (d < 0 ? '' : '+') + d + 'i'), re = a * c - b * d, im = a * d + b * c;
        return q('complexe', {
          chapter: 'm7', sec: 'm7-s-algebrique', topic: 'Produit de nombres complexes', level: 2,
          q: L`Forme algébrique de $(${zt})(${wt})$ ?`, answer: cx(re, im), check: 'value',
          hint: L`Développe (4 produits) puis remplace $\mathrm{i}^2$ par $-1$.`,
          rule: L`$(a + b\mathrm{i})(c + d\mathrm{i}) = (ac - bd) + (ad + bc)\mathrm{i}$, car $\mathrm{i}^2 = -1$.`,
          explain: L`On développe et on utilise $\mathrm{i}^2 = -1$ : $${T(cx(re, im).replace('*', ''))}$.`,
          steps: [
            L`On développe comme une expression algébrique ordinaire (4 produits), puis on utilise $\mathrm{i}^2 = -1$.`,
            L`$(${zt})(${wt}) = ${a} \times ${pn(c)} + ${a} \times ${pn(d)}\,\mathrm{i} + ${pn(b)}\,\mathrm{i} \times ${pn(c)} + ${pn(b)}\,\mathrm{i} \times ${pn(d)}\,\mathrm{i} = ${a * c} ${sg(a * d)}\,\mathrm{i} ${sg(b * c)}\,\mathrm{i} ${sg(b * d)}\,\mathrm{i}^2$.`,
            L`Comme $\mathrm{i}^2 = -1$ : $${b * d}\,\mathrm{i}^2 = ${-b * d}$.`,
            L`Partie réelle : $${a * c} ${sg(-b * d)} = ${re}$ ; partie imaginaire : $${a * d} ${sg(b * c)} = ${im}$.`,
            L`Résultat : $${T(cx(re, im).replace('*', ''))}$.`
          ],
          mistakes: [
            { expr: cx(a * c + b * d, im), msg: L`Attention, $\mathrm{i}^2 = -1$ : la partie réelle est $ac - bd = ${re}$, pas $ac + bd$.` },
            { expr: cx(a * c, b * d), msg: L`On ne multiplie pas « réel × réel et imaginaire × imaginaire » : il faut développer les **4** produits.` }
          ]
        });
      }
      if (t === 2) return q('complexe', {
        chapter: 'm7', sec: 'm7-s-algebrique', topic: 'Conjugué d\'un nombre complexe',
        q: L`Conjugué de $z = ${zt}$ ?`, answer: cx(a, -b), check: 'value',
        hint: L`On change le signe de la partie imaginaire seulement.`,
        rule: L`$\overline{a + b\,\mathrm{i}} = a - b\,\mathrm{i}$ (symétrique par rapport à l'axe réel).`,
        explain: L`On change le signe de la partie imaginaire : $\bar z = ${T(cx(a, -b).replace('*', ''))}$.`,
        steps: [
          L`Le **conjugué** $\bar z$ de $z = a + b\,\mathrm{i}$ est $a - b\,\mathrm{i}$ : on garde la partie réelle et on change le signe de la partie imaginaire (c'est le symétrique de $z$ par rapport à l'axe réel).`,
          L`Ici $a = ${a}$ et $b = ${b}$.`,
          L`$\bar z = ${a} - ${pn(b)}\,\mathrm{i} = ${T(cx(a, -b).replace('*', ''))}$.`,
          L`Vérification : $z\bar z = a^2 + b^2 = ${a * a + b * b}$ est bien un réel ✔.`
        ],
        mistakes: [
          { expr: cx(-a, b), msg: L`On ne change que le signe de la partie **imaginaire** : la partie réelle $${a}$ reste la même.` },
          { expr: cx(-a, -b), msg: L`Ça, c'est $-z$ (on a changé les deux signes). Le conjugué ne change que la partie imaginaire.` }
        ]
      });
      const [x, y, ans, deg] = pick([[1, 1, 'pi/4', 45], [1, -1, '-pi/4', -45], [-1, 1, '3*pi/4', 135], [0, 1, 'pi/2', 90], [-1, 0, 'pi', 180], [1, 0, '0', 0], [-1, -1, '-3*pi/4', -135], [0, -1, '-pi/2', -90]]);
      const k = R(1, 4), re = x * k, im = y * k, aT = degTeX(deg);
      const where = !y ? (x > 0 ? 'sur l\'axe réel, à droite de l\'origine' : 'sur l\'axe réel, à gauche de l\'origine') : !x ? (y > 0 ? 'sur l\'axe imaginaire, en haut' : 'sur l\'axe imaginaire, en bas') : (y > 0 ? 'en haut ' : 'en bas ') + (x > 0 ? 'à droite' : 'à gauche');
      const r2 = L`\frac{\sqrt{2}}{2}`;
      return q('complexe', {
        chapter: 'm7', sec: 'm7-s-argument', topic: 'Argument d\'un nombre complexe', level: 2,
        q: L`Argument principal (dans $]-\pi, \pi]$) de $z = ${T(cx(re, im).replace('*', ''))}$ ?`, answer: ans, check: 'value',
        hint: 'Place le point dans le plan complexe et lis l\'angle.',
        rule: L`$\cos\theta = \dfrac{a}{|z|}$ et $\sin\theta = \dfrac{b}{|z|}$ ; l'argument principal est dans $]-\pi, \pi]$ (positif au-dessus de l'axe réel, négatif en dessous).`,
        explain: L`Le point $(${re}, ${im})$ est ${where} : $\arg z = ${aT}$.`,
        steps: [
          L`L'**argument** $\arg z$ est l'angle entre l'axe réel positif et le vecteur $\overrightarrow{OM}$, où $M$ est le point d'affixe $z$. L'argument **principal** est celui qui est dans $]-\pi, \pi]$.`,
          L`$z = ${T(cx(re, im).replace('*', ''))}$ : $a = ${re}$, $b = ${im}$. Le point $M(${re},\ ${im})$ est ${where}.`,
          x && y ? L`$|z| = \sqrt{${pn(re)}^2 + ${pn(im)}^2} = ${k === 1 ? '' : k}\sqrt{2}$, donc $\cos\theta = \dfrac{a}{|z|} = ${x < 0 ? '-' : ''}${r2}$ et $\sin\theta = \dfrac{b}{|z|} = ${y < 0 ? '-' : ''}${r2}$.` : L`Le point est sur un axe : l'angle se lit directement.`,
          L`L'angle de $]-\pi, \pi]$ correspondant est $\theta = ${aT}$` + (x && y ? L` (angle de référence $\frac{\pi}{4}$, placé ${where}).` : '.'),
          L`Donc $\arg z = ${aT}$.`
        ],
        mistakes: [
          y && { expr: '-(' + ans + ')', msg: L`Signe : $b ${y > 0 ? '>' : '<'} 0$, le point est ${y > 0 ? 'au-dessus' : 'en dessous'} de l'axe réel, donc l'argument est ${y > 0 ? 'positif' : 'négatif'}.` },
          x < 0 && y && { expr: x * y > 0 ? 'pi/4' : '-pi/4', msg: L`$\arctan\dfrac{b}{a}$ ne donne l'argument que si $a > 0$. Ici $a < 0$ (point à gauche) : il faut ajouter ou retirer $\pi$.` },
          deg === 180 && { expr: '-pi', msg: L`L'argument principal est dans $]-\pi, \pi]$ : on prend $\pi$, pas $-\pi$.` },
          deg === 0 && { expr: 'pi', msg: L`Le point est à **droite** de l'origine ($a > 0$) : l'angle est $0$.` }
        ]
      });
    }
  };
  // ---------- EDO ----------
  G.edo = {
    label: 'Équations différentielles', chapter: 'm8',
    make() {
      const a = R(1, 5), k = R(1, 6), w = R(1, 4);
      const aT = a === 1 ? '' : a, kT = k === 1 ? '' : k, wT = w === 1 ? '' : w;
      if (Math.random() < 0.55) return q('edo', {
        chapter: 'm8', sec: 'm8-s-edl1-homogene', topic: 'EDL du 1er ordre homogène', level: 2, vars: ['t'], domain: [0, 2],
        q: L`Résous $y' + ${aT}y = 0$ avec $y(0) = ${k}$. Donne $y(t)$.`, answer: k + '*exp(-' + a + '*t)', check: 'expr',
        hint: L`Solutions de $y' + ay = 0$ : $y = C\mathrm{e}^{-at}$, puis on trouve $C$ avec $y(0)$.`,
        rule: L`$y' + ay = 0 \Leftrightarrow y(t) = C\,\mathrm{e}^{-at}$ ($C \in \mathbb{R}$), et $C = y(0)$.`,
        explain: L`Solution générale $y = C\mathrm{e}^{-${aT}t}$, et $y(0) = C = ${k}$.`,
        steps: [
          L`$y' + ${aT}y = 0$ s'écrit $y' = -${aT}y$ : la dérivée est proportionnelle à la fonction, comme pour l'exponentielle. Les solutions sont $y(t) = C\,\mathrm{e}^{-at}$ avec $C \in \mathbb{R}$.`,
          L`Ici $a = ${a}$ : $y(t) = C\,\mathrm{e}^{-${aT}t}$.`,
          L`Condition initiale : $y(0) = C\,\mathrm{e}^{0} = C$ (car $\mathrm{e}^0 = 1$), donc $C = ${k}$.`,
          L`$y(t) = ${kT}\mathrm{e}^{-${aT}t}$. Vérification : $y' = -${a * k === 1 ? '' : a * k}\mathrm{e}^{-${aT}t}$ et $y' + ${aT}y = -${a * k === 1 ? '' : a * k}\mathrm{e}^{-${aT}t} + ${a * k === 1 ? '' : a * k}\mathrm{e}^{-${aT}t} = 0$ ✔, $y(0) = ${k}$ ✔.`
        ],
        mistakes: [
          { expr: k + '*exp(' + a + '*t)', msg: L`Signe : $y' = -${aT}y$ donne $\mathrm{e}^{\mathbf{-}${aT}t}$ (décroissante), pas $\mathrm{e}^{${aT}t}$.` },
          { expr: 'exp(-' + a + '*t)', msg: L`Il manque la constante : $y(t) = C\mathrm{e}^{-${aT}t}$ avec $C = y(0) = ${k}$.` },
          { expr: k + '*exp(-t/' + a + ')', msg: L`Le coefficient de $t$ dans l'exponentielle est $-a = -${a}$ (la constante de temps $\tau = \frac{1}{a}$ divise $t$ : $\mathrm{e}^{-t/\tau}$).` }
        ]
      });
      return q('edo', {
        chapter: 'm8', sec: 'm8-s-edl2-homogene', topic: 'EDL du 2nd ordre à coefficients constants', level: 3, vars: ['t'], domain: [0, 2],
        q: L`Résous $y'' + ${w * w === 1 ? '' : w * w}y = 0$ avec $y(0) = ${k}$ et $y'(0) = 0$. Donne $y(t)$.`, answer: k + '*cos(' + w + '*t)', check: 'expr',
        hint: L`Équation caractéristique $r^2 + ${w * w} = 0$.`,
        rule: L`$y'' + \omega^2 y = 0 \Leftrightarrow y(t) = A\cos(\omega t) + B\sin(\omega t)$.`,
        explain: L`Racines $\pm ${wT}\mathrm{i}$, donc $y = A\cos(${wT}t) + B\sin(${wT}t)$ avec $A = ${k}$, $B = 0$.`,
        steps: [
          L`$y'' + ${w * w}y = 0$ est linéaire du 2nd ordre, à coefficients constants, sans second membre. On cherche des solutions $y = \mathrm{e}^{rt}$ : on obtient l'**équation caractéristique** $r^2 + ${w * w} = 0$.`,
          L`$r^2 = -${w * w}$, donc $r = \pm ${wT}\mathrm{i}$ : deux racines imaginaires pures ($\alpha \pm \mathrm{i}\omega$ avec $\alpha = 0$, $\omega = ${w}$). Solution générale : $y(t) = A\cos(${wT}t) + B\sin(${wT}t)$ — des oscillations.`,
          L`$y(0) = A\cos 0 + B\sin 0 = A$, donc $A = ${k}$.`,
          L`$y'(t) = -${wT}A\sin(${wT}t) + ${wT}B\cos(${wT}t)$, donc $y'(0) = ${wT}B = 0$, d'où $B = 0$.`,
          L`Résultat : $y(t) = ${kT}\cos(${wT}t)$. Vérification : $y'' = -${w * w === 1 ? '' : w * w}y$ ✔.`
        ],
        mistakes: [
          { expr: k + '*cos(' + w * w + '*t)', msg: L`$\omega$ est la **racine** de $${w * w}$ : $\omega = ${w}$, donc $\cos(${wT}t)$.` },
          { expr: k + '*sin(' + w + '*t)', msg: L`$y(0) = A\cos 0 + B\sin 0 = A$ : c'est le coefficient du **cosinus** qui vaut $${k}$ (et $y'(0) = 0$ impose $B = 0$).` },
          { expr: k + '*exp(-' + w + '*t)', msg: L`Les racines $\pm ${wT}\mathrm{i}$ sont imaginaires : la solution oscille (cos, sin), elle n'est pas exponentielle.` }
        ]
      });
    }
  };
  // ---------- algèbre linéaire ----------
  G.det = {
    label: 'Déterminants', chapter: 'm11',
    make() {
      const m = () => R(-4, 5);
      if (Math.random() < 0.6) {
        const [a, b, c, d] = [m(), m(), m(), m()], dt = a * d - b * c;
        return q('det', {
          chapter: 'm11', sec: 'm11-s-determinant', topic: 'Déterminant 2×2',
          q: L`$\det\begin{pmatrix} ${a} & ${b} \\ ${c} & ${d} \end{pmatrix}$ ?`, answer: String(dt), check: 'value',
          hint: L`$ad - bc$ : diagonale principale moins l'autre diagonale.`,
          rule: L`$\det\begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc$ ; la matrice est inversible ssi $\det \neq 0$.`,
          explain: L`$ad - bc = ${pn(a)} \times ${pn(d)} - ${pn(b)} \times ${pn(c)} = ${dt}$.`,
          steps: [
            L`Le déterminant d'une matrice $2 \times 2$ $\begin{pmatrix} a & b \\ c & d \end{pmatrix}$ vaut $ad - bc$ : produit de la **diagonale principale** (haut-gauche × bas-droite) moins produit de l'**autre diagonale**.`,
            L`$ad = ${pn(a)} \times ${pn(d)} = ${a * d}$.`,
            L`$bc = ${pn(b)} \times ${pn(c)} = ${b * c}$.`,
            L`$\det = ${a * d} - ${pn(b * c)} = ${dt}$` + (dt ? ' : non nul, donc la matrice est inversible.' : ' : la matrice n\'est pas inversible.')
          ],
          mistakes: [
            { expr: String(a * d + b * c), msg: L`C'est $ad \mathbf{-} bc$ (moins), pas $ad + bc$.` },
            { expr: String(b * c - a * d), msg: L`Ordre inversé : c'est la diagonale principale **moins** l'autre, $ad - bc$ (ton résultat a le signe opposé).` },
            { expr: String(a * c - b * d), msg: L`On multiplie selon les **diagonales** ($a \times d$ et $b \times c$), pas selon les colonnes.` }
          ]
        });
      }
      const A = [[m(), m(), m()], [m(), m(), m()], [m(), m(), m()]];
      const [[a1, a2, a3], [b1, b2, b3], [c1, c2, c3]] = A;
      const m1 = b2 * c3 - b3 * c2, m2 = b1 * c3 - b3 * c1, m3 = b1 * c2 - b2 * c1;
      const dt = a1 * m1 - a2 * m2 + a3 * m3;
      const vm = (p, r, s, u) => L`\begin{vmatrix} ${p} & ${r} \\ ${s} & ${u} \end{vmatrix}`;
      return q('det', {
        chapter: 'm11', sec: 'm11-s-determinant', topic: 'Déterminant 3×3', level: 2,
        q: L`$\det\begin{pmatrix} ${A.map((r) => r.join(' & ')).join(' \\\\ ')} \end{pmatrix}$ ?`, answer: String(dt), check: 'value',
        hint: 'Développe selon la 1re ligne (signes + − +), ou utilise la règle de Sarrus.',
        rule: L`$\det A = a_{11}\Delta_{11} - a_{12}\Delta_{12} + a_{13}\Delta_{13}$ (développement selon la 1re ligne, signes alternés).`,
        explain: L`Développement selon la 1re ligne : $${pn(a1)} \times ${pn(m1)} - ${pn(a2)} \times ${pn(m2)} + ${pn(a3)} \times ${pn(m3)} = ${dt}$.`,
        steps: [
          L`Développement selon la **1re ligne** : $\det A = a_{11}\,\Delta_{11} - a_{12}\,\Delta_{12} + a_{13}\,\Delta_{13}$, où $\Delta_{1j}$ est le déterminant $2 \times 2$ obtenu en **supprimant la ligne 1 et la colonne $j$**. Les signes alternent : $+\ -\ +$.`,
          L`$\Delta_{11} = ${vm(b2, b3, c2, c3)} = ${pn(b2)} \times ${pn(c3)} - ${pn(b3)} \times ${pn(c2)} = ${m1}$.`,
          L`$\Delta_{12} = ${vm(b1, b3, c1, c3)} = ${pn(b1)} \times ${pn(c3)} - ${pn(b3)} \times ${pn(c1)} = ${m2}$.`,
          L`$\Delta_{13} = ${vm(b1, b2, c1, c2)} = ${pn(b1)} \times ${pn(c2)} - ${pn(b2)} \times ${pn(c1)} = ${m3}$.`,
          L`$\det A = ${pn(a1)} \times ${pn(m1)} - ${pn(a2)} \times ${pn(m2)} + ${pn(a3)} \times ${pn(m3)} = ${a1 * m1} ${sg(-a2 * m2)} ${sg(a3 * m3)} = ${dt}$.`
        ],
        mistakes: [
          { expr: String(a1 * m1 + a2 * m2 + a3 * m3), msg: L`Les signes alternent : $+a_{11}\Delta_{11}\ \mathbf{-}\ a_{12}\Delta_{12} + a_{13}\Delta_{13}$.` },
          { expr: String(a1 * b2 * c3), msg: L`Le déterminant n'est le produit de la diagonale que pour une matrice **triangulaire**. Ici il faut développer.` }
        ]
      });
    }
  };
  // ---------- probabilités ----------
  const C = (n, k) => { let r = 1; for (let j = 1; j <= k; j++) r = (r * (n - k + j)) / j; return Math.round(r); };
  G.proba = {
    label: 'Dénombrement et probas', chapter: 'm12',
    make() {
      if (Math.random() < 0.5) {
        const n = R(4, 10), k = R(2, Math.min(4, n - 2)), cv = C(n, k);
        const top = Array.from({ length: k }, (_, j) => n - j), bot = Array.from({ length: k }, (_, j) => k - j);
        const prod = (arr) => arr.reduce((x, y) => x * y, 1);
        return q('proba', {
          chapter: 'm12', sec: 'm12-s-denombrement', topic: 'Coefficients binomiaux',
          q: L`Combien vaut $\dbinom{${n}}{${k}}$ ?`, answer: String(cv), check: 'value',
          hint: L`$\dbinom{n}{k} = \dfrac{n!}{k!\,(n-k)!}$ : simplifie avant de calculer.`,
          rule: L`$\dbinom{n}{k} = \dfrac{n!}{k!\,(n-k)!} = \dfrac{n(n-1)\cdots(n-k+1)}{k!}$ : nombre de façons de choisir $k$ éléments parmi $n$, sans ordre.`,
          explain: L`$\dbinom{${n}}{${k}} = \dfrac{${top.join(' \\times ')}}{${bot.join(' \\times ')}} = ${cv}$ : il y a ${cv} façons de choisir ${k} éléments parmi ${n}.`,
          steps: [
            L`$\dbinom{n}{k}$ (lu « $k$ parmi $n$ ») est le **nombre de façons de choisir $k$ éléments parmi $n$**, sans tenir compte de l'ordre (comme une main de cartes). Formule : $\dbinom{n}{k} = \dfrac{n!}{k!\,(n-k)!}$, où $n! = 1 \times 2 \times \dots \times n$ (factorielle).`,
            L`Ici $n = ${n}$ et $k = ${k}$ : $\dbinom{${n}}{${k}} = \dfrac{${n}!}{${k}!\ ${n - k}!}$.`,
            L`On simplifie : dans $\dfrac{${n}!}{${n - k}!}$, les facteurs de $1$ à $${n - k}$ s'annulent et il reste $${top.join(' \\times ')} = ${prod(top)}$.`,
            L`Donc $\dbinom{${n}}{${k}} = \dfrac{${top.join(' \\times ')}}{${bot.join(' \\times ')}} = \dfrac{${prod(top)}}{${prod(bot)}} = ${cv}$.`,
            L`Interprétation : il y a $${cv}$ façons de choisir ${k} éléments parmi ${n}. Astuce : $\dbinom{${n}}{${k}} = \dbinom{${n}}{${n - k}}$ (choisir les ${k} qu'on prend revient à choisir les ${n - k} qu'on laisse).`
          ],
          mistakes: [
            { expr: String(n * k), msg: L`$${n * k} = ${n} \times ${k}$ : on a multiplié $n$ par $k$. Il faut appliquer $\dbinom{n}{k} = \dfrac{n!}{k!\,(n-k)!}$.` },
            { expr: String(prod(top)), msg: L`$${prod(top)}$ est le nombre d'**arrangements** (l'ordre compte). Pour $\dbinom{n}{k}$, l'ordre ne compte pas : il faut encore diviser par $${k}! = ${prod(bot)}$.` }
          ]
        });
      }
      const nn = R(3, 6), kk = R(0, nn), cv = C(nn, kk), p2 = Math.pow(2, nn);
      return q('proba', {
        chapter: 'm12', sec: 'm12-s-lois-discretes', topic: 'Loi binomiale', level: 2,
        q: L`On lance ${nn} fois une pièce équilibrée. $P(X = ${kk})$ où $X$ = nombre de piles ? (valeur exacte)`, answer: frac(cv, p2), check: 'value',
        hint: L`$X$ suit une loi binomiale : $P(X = k) = \dbinom{n}{k} p^k (1-p)^{n-k}$.`,
        rule: L`$X \sim \mathcal{B}(n, p)$ : $P(X = k) = \dbinom{n}{k}\,p^k\,(1-p)^{n-k}$.`,
        explain: L`$X \sim \mathcal{B}\left(${nn}, \frac{1}{2}\right)$ : $P(X = ${kk}) = \dbinom{${nn}}{${kk}} \left(\frac{1}{2}\right)^{${nn}} = ${fracTeX(cv, p2)}$.`,
        steps: [
          L`**Loi binomiale** : on répète $n$ fois, de façon indépendante, une épreuve à 2 issues (succès de probabilité $p$, échec $1 - p$). Le nombre de succès $X$ suit $\mathcal{B}(n, p)$ et $P(X = k) = \dbinom{n}{k}\,p^k\,(1-p)^{n-k}$.`,
          L`Ici $n = ${nn}$ lancers indépendants, succès = « pile », $p = \frac{1}{2}$ : $X \sim \mathcal{B}\left(${nn}, \frac{1}{2}\right)$.`,
          L`$\dbinom{${nn}}{${kk}} = ${cv}$ : c'est le nombre de façons de choisir **quels** lancers donnent pile (${kk} parmi ${nn}).`,
          L`$p^{${kk}}(1-p)^{${nn - kk}} = \left(\frac{1}{2}\right)^{${kk}}\left(\frac{1}{2}\right)^{${nn - kk}} = \left(\frac{1}{2}\right)^{${nn}} = \dfrac{1}{${p2}}$ : c'est la probabilité d'**une** suite précise de résultats.`,
          L`$P(X = ${kk}) = ${cv} \times \dfrac{1}{${p2}} = ${fracTeX(cv, p2)} \approx ${(cv / p2).toFixed(3).replace('.', '{,}')}$.`
        ],
        mistakes: [
          { expr: '1/' + p2, msg: L`Tu as calculé la probabilité d'**une** suite précise. Il y a $\dbinom{${nn}}{${kk}} = ${cv}$ suites qui donnent ${kk} pile(s) : on multiplie par ${cv}.` },
          { expr: frac(kk, nn), msg: L`$P(X = k) \neq \dfrac{k}{n}$ : on applique la loi binomiale $\dbinom{n}{k}p^k(1-p)^{n-k}$.` }
        ]
      });
    }
  };
  for (const k in G) { G[k].subject = 'maths'; APP.generators = APP.generators || {}; APP.generators['m-' + k] = G[k]; }
})();
