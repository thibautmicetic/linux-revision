/* Exercices de maths générés à l'infini (entraînement quotidien). Chaque question est vérifiée par APP.mathCheck. */
(function () {
  'use strict';
  const APP = window.APP;
  const M = APP.math, U = APP.util;
  const R = U.rand, pick = U.pick;
  const T = (s) => { try { return M.toTeX(M.parse(s, { vars: ['x', 'n', 't', 'p'] })); } catch (e) { return s; } };
  const q = (type, o) => Object.assign({ id: 'gen-m-' + type, kind: 'gen', subject: 'maths', gen: type, type: 'formula', level: 1, vars: [] }, o);
  const frac = (a, b) => { const g = gcd(Math.abs(a), Math.abs(b)); a /= g; b /= g; if (b < 0) { a = -a; b = -b; } return b === 1 ? String(a) : a + '/' + b; };
  function gcd(a, b) { while (b) [a, b] = [b, a % b]; return a || 1; }
  const sgn = (k) => (k < 0 ? ' - ' + Math.abs(k) : ' + ' + k);
  const coef = (k, x) => (k === 1 ? x : k === -1 ? '-' + x : k + '*' + x);

  const G = {};
  // ---------- trigonométrie ----------
  G.trigval = {
    label: 'Valeurs sur le cercle', chapter: 'm2',
    make() {
      const base = pick([0, 30, 45, 60, 90, 120, 135, 150, 180, 210, 225, 240, 270, 300, 315, 330]);
      const turns = pick([0, 0, 0, 1, -1, 2]);
      const deg = base + 360 * turns * (Math.random() < 0.3 ? 1 : 0) - (Math.random() < 0.25 ? 360 : 0);
      const fnn = pick(['cos', 'sin', 'cos', 'sin', 'tan']);
      const ex = APP.exactTrig(((deg % 360) + 360) % 360);
      if (fnn === 'tan' && ex.t == null) return G.trigval.make();
      const val = fnn === 'cos' ? ex.c : fnn === 'sin' ? ex.s : ex.t;
      const ans = val.replace(/\\sqrt\{(\d)\}/g, 'sqrt($1)').replace(/\\frac\{([^{}]*)\}\{([^{}]*)\}/g, '($1)/($2)').replace(/\\/g, '');
      const angTex = (deg < 0 ? '-' : '') + APP.radTex(Math.abs(deg)).replace(/^0$/, '0');
      const angle = deg === 0 ? '0' : (deg < 0 ? '-' : '') + (Math.abs(deg) % 360 === 0 ? (Math.abs(deg) / 180) + '\\pi' : APP.radTex(Math.abs(deg)));
      const red = ((deg % 360) + 360) % 360;
      return q('trigval', {
        chapter: 'm2', q: 'Valeur exacte de $\\' + fnn + '\\left(' + (Math.abs(deg) >= 360 ? (deg / 180 % 1 === 0 ? (deg / 180) + '\\pi' : angle) : angle) + '\\right)$ ?',
        answer: ans, check: 'value', placeholder: 'ex. sqrt(3)/2',
        explain: (Math.abs(deg) >= 360 || deg < 0 ? 'On se ramène à $[0, 2\\pi[$ : l\'angle vaut $' + APP.radTex(red) + '$ (à $2k\\pi$ près). ' : '') + 'Sur le cercle, $' + APP.radTex(red) + '$ donne $\\cos = ' + ex.c + '$ et $\\sin = ' + ex.s + '$' + (fnn === 'tan' ? ', donc $\\tan = \\frac{\\sin}{\\cos} = ' + ex.t + '$' : '') + '.',
        hint: 'Place l\'angle sur le cercle trigonométrique, repère l\'angle de référence ($\\frac{\\pi}{6}$, $\\frac{\\pi}{4}$ ou $\\frac{\\pi}{3}$) et le signe selon le quadrant.'
      });
      void angTex;
    }
  };
  G.degrad = {
    label: 'Degrés ↔ radians', chapter: 'm2',
    make() {
      const d = pick([15, 30, 36, 45, 60, 72, 90, 120, 135, 150, 210, 225, 240, 270, 300, 315, 330, 720]);
      if (Math.random() < 0.5) return q('degrad', { chapter: 'm2', q: 'Convertis $' + d + '^\\circ$ en radians (valeur exacte).', answer: frac(d, 180) + '*pi', check: 'value', explain: '$x_{\\text{rad}} = x_{\\text{deg}} \\times \\frac{\\pi}{180} = \\frac{' + d + '\\pi}{180} = ' + APP.radTex(d % 360 === 0 && d ? 360 : d).replace('2\\pi', d === 720 ? '4\\pi' : '2\\pi') + '$.', placeholder: 'ex. 2pi/3' });
      return q('degrad', { chapter: 'm2', q: 'Convertis $' + (d === 720 ? '4\\pi' : APP.radTex(d)) + '$ rad en degrés.', answer: String(d), check: 'value', explain: '$x_{\\text{deg}} = x_{\\text{rad}} \\times \\frac{180}{\\pi} = ' + d + '^\\circ$.' });
    }
  };
  G.trigeq = {
    label: 'Équations trigonométriques', chapter: 'm2',
    make() {
      const k = pick([['cos', '1/2', 60], ['cos', 'sqrt(2)/2', 45], ['cos', 'sqrt(3)/2', 30], ['sin', '1/2', 30], ['sin', 'sqrt(3)/2', 60], ['sin', 'sqrt(2)/2', 45], ['cos', '-1/2', 120], ['sin', '-1/2', 210]]);
      const [f, v, a] = k;
      const sols = f === 'cos' ? [a, 360 - a] : [a, 180 - a].map((x) => ((x % 360) + 360) % 360);
      const set = [...new Set(sols)].sort((x, y) => x - y);
      return q('trigeq', { chapter: 'm2', level: 2, q: 'Résous $\\' + f + ' x = ' + T(v) + '$ sur $[0, 2\\pi[$ (sépare les solutions par ;).', answer: set.map((d) => frac(d, 180) + '*pi').join(';'), check: 'set', placeholder: 'ex. pi/3 ; 5pi/3',
        explain: (f === 'cos' ? '$\\cos x = \\cos a \\Leftrightarrow x = a + 2k\\pi$ ou $x = -a + 2k\\pi$.' : '$\\sin x = \\sin a \\Leftrightarrow x = a + 2k\\pi$ ou $x = \\pi - a + 2k\\pi$.') + ' Dans $[0, 2\\pi[$ : $' + set.map((d) => APP.radTex(d)).join('$ et $') + '$.' });
    }
  };
  // ---------- calcul algébrique ----------
  G.identite = {
    label: 'Identités remarquables', chapter: 'm1',
    make() {
      const a = R(1, 5), b = R(1, 7), t = R(0, 3);
      if (t === 0) return q('identite', { chapter: 'm1', vars: ['x'], q: 'Développe $(' + (a === 1 ? '' : a) + 'x + ' + b + ')^2$.', answer: a * a + '*x^2+' + 2 * a * b + '*x+' + b * b, check: 'expr', form: 'expanded', explain: '$(A+B)^2 = A^2 + 2AB + B^2$ avec $A = ' + (a === 1 ? '' : a) + 'x$, $B = ' + b + '$ : $' + T(a * a + 'x^2+' + 2 * a * b + 'x+' + b * b) + '$.', mistakes: [{ expr: a * a + '*x^2+' + b * b, msg: 'Tu as oublié le double produit $2AB$ : $(A+B)^2 \\neq A^2 + B^2$ !' }] });
      if (t === 1) return q('identite', { chapter: 'm1', vars: ['x'], q: 'Développe $(' + (a === 1 ? '' : a) + 'x - ' + b + ')^2$.', answer: a * a + '*x^2-' + 2 * a * b + '*x+' + b * b, check: 'expr', form: 'expanded', explain: '$(A-B)^2 = A^2 - 2AB + B^2$ : $' + T(a * a + 'x^2-' + 2 * a * b + 'x+' + b * b) + '$.', mistakes: [{ expr: a * a + '*x^2-' + b * b, msg: 'Le double produit $-2AB$ manque, et $+B^2$ est positif.' }, { expr: a * a + '*x^2-' + 2 * a * b + '*x-' + b * b, msg: 'Le dernier terme est $+B^2$ (un carré est positif).' }] });
      if (t === 2) return q('identite', { chapter: 'm1', vars: ['x'], q: 'Factorise $' + T(a * a + 'x^2-' + b * b) + '$.', answer: '(' + a + '*x-' + b + ')*(' + a + '*x+' + b + ')', check: 'expr', form: 'factored', explain: '$A^2 - B^2 = (A-B)(A+B)$ avec $A = ' + (a === 1 ? '' : a) + 'x$ et $B = ' + b + '$.' });
      return q('identite', { chapter: 'm1', vars: ['x'], q: 'Factorise $' + T('x^2+' + 2 * b + 'x+' + b * b) + '$.', answer: '(x+' + b + ')^2', check: 'expr', form: 'factored', explain: 'On reconnaît $A^2 + 2AB + B^2 = (A+B)^2$ avec $A = x$, $B = ' + b + '$.' });
    }
  };
  G.trinome = {
    label: 'Second degré', chapter: 'm1',
    make() {
      const r1 = R(-6, 6), r2 = R(-6, 6), a = pick([1, 1, 1, 2, -1]);
      const b = -a * (r1 + r2), c = a * r1 * r2;
      const poly = (a === 1 ? '' : a === -1 ? '-' : a) + 'x^2' + (b ? sgn(b) + 'x' : '') + (c ? sgn(c) : '');
      if (Math.random() < 0.3) return q('trinome', { chapter: 'm1', q: 'Discriminant de $' + T(poly) + '$ ?', answer: String(b * b - 4 * a * c), check: 'value', explain: '$\\Delta = b^2 - 4ac = ' + b + '^2 - 4 \\times ' + a + ' \\times ' + c + ' = ' + (b * b - 4 * a * c) + '$.' });
      return q('trinome', { chapter: 'm1', level: 2, q: 'Résous $' + T(poly) + ' = 0$ (sépare les solutions par ;).', answer: r1 === r2 ? String(r1) : r1 + ';' + r2, check: 'set', explain: '$\\Delta = ' + (b * b - 4 * a * c) + '$' + (r1 === r2 ? ' $= 0$ : racine double $x_0 = -\\frac{b}{2a} = ' + r1 + '$.' : ' $> 0$ : $x_{1,2} = \\frac{-b \\pm \\sqrt{\\Delta}}{2a}$, soit $' + Math.min(r1, r2) + '$ et $' + Math.max(r1, r2) + '$.') + ' Vérification : somme $= -\\frac{b}{a} = ' + (r1 + r2) + '$, produit $= \\frac{c}{a} = ' + r1 * r2 + '$.' });
    }
  };
  // ---------- exp / ln ----------
  G.lnexp = {
    label: 'Exp et ln', chapter: 'm3',
    make() {
      const t = R(0, 4), a = R(2, 5), n = R(2, 5);
      if (t === 0) return q('lnexp', { chapter: 'm3', q: 'Simplifie $\\dfrac{\\ln(' + Math.pow(a, n) + ')}{\\ln ' + a + '}$.', answer: String(n), check: 'value', explain: '$\\ln(' + a + '^{' + n + '}) = ' + n + '\\ln ' + a + '$, donc le quotient vaut $' + n + '$.' });
      if (t === 1) return q('lnexp', { chapter: 'm3', q: 'Simplifie $\\mathrm{e}^{' + n + '\\ln ' + a + '}$.', answer: String(Math.pow(a, n)), check: 'value', explain: '$\\mathrm{e}^{' + n + '\\ln ' + a + '} = \\left(\\mathrm{e}^{\\ln ' + a + '}\\right)^{' + n + '} = ' + a + '^{' + n + '} = ' + Math.pow(a, n) + '$.' });
      if (t === 2) return q('lnexp', { chapter: 'm3', q: 'Résous $\\mathrm{e}^{x} = ' + a + '$.', answer: 'ln(' + a + ')', check: 'value', explain: '$\\mathrm{e}^x = ' + a + ' \\Leftrightarrow x = \\ln ' + a + '$ (car $\\ln$ est la réciproque de $\\exp$).' });
      if (t === 3) return q('lnexp', { chapter: 'm3', q: 'Résous $\\ln x = ' + n + '$.', answer: 'exp(' + n + ')', check: 'value', explain: '$\\ln x = ' + n + ' \\Leftrightarrow x = \\mathrm{e}^{' + n + '}$.' });
      return q('lnexp', { chapter: 'm3', q: 'Écris $\\ln ' + a + ' + \\ln ' + n + ' - \\ln 2$ sous la forme $\\ln(\\dots)$ : que vaut le nombre dans le ln ?', answer: frac(a * n, 2), check: 'value', explain: '$\\ln a + \\ln b - \\ln c = \\ln\\frac{ab}{c} = \\ln \\frac{' + a * n + '}{2}$.' });
    }
  };
  // ---------- DL ----------
  G.dl = {
    label: 'Développements limités', chapter: 'm4',
    make() {
      const a = pick([1, 2, 3, -1, -2]);
      const ax = a === 1 ? 'x' : a === -1 ? '(-x)' : '(' + a + 'x)';
      const k = R(0, 4);
      const tbl = [
        ['\\mathrm{e}^{' + (a === 1 ? '' : a === -1 ? '-' : a) + 'x}', ['1', a + '*x', a * a + '/2*x^2', a * a * a + '/6*x^3'], 'e^u = 1 + u + \\frac{u^2}{2} + \\frac{u^3}{6} + o(u^3)'],
        ['\\ln(1 ' + (a < 0 ? '-' : '+') + ' ' + (Math.abs(a) === 1 ? '' : Math.abs(a)) + 'x)', ['0', a + '*x', -(a * a) + '/2*x^2', a * a * a + '/3*x^3'], '\\ln(1+u) = u - \\frac{u^2}{2} + \\frac{u^3}{3} + o(u^3)'],
        ['\\sin(' + (a === 1 ? '' : a === -1 ? '-' : a) + 'x)', ['0', a + '*x', '0', -(a * a * a) + '/6*x^3'], '\\sin u = u - \\frac{u^3}{6} + o(u^3)'],
        ['\\cos(' + (a === 1 ? '' : a === -1 ? '-' : a) + 'x)', ['1', '0', -(a * a) + '/2*x^2', '0'], '\\cos u = 1 - \\frac{u^2}{2} + o(u^3)'],
        ['\\dfrac{1}{1 ' + (a < 0 ? '+' : '-') + ' ' + (Math.abs(a) === 1 ? '' : Math.abs(a)) + 'x}', ['1', a + '*x', a * a + '*x^2', a * a * a + '*x^3'], '\\frac{1}{1-u} = 1 + u + u^2 + u^3 + o(u^3)']
      ];
      const [f, terms, rule] = tbl[k];
      const ord = pick([2, 3]);
      const ans = terms.slice(0, ord + 1).join('+').replace(/\+-/g, '-');
      void ax;
      return q('dl', { chapter: 'm4', level: 2, vars: ['x'], q: 'DL à l\'ordre ' + ord + ' en 0 de $' + f + '$ : donne la partie polynomiale.', answer: ans, check: 'expr', explain: 'Avec $u = ' + (a === 1 ? '' : a === -1 ? '-' : a) + 'x$ dans $' + rule + '$ : $' + T(ans) + ' + o(x^{' + ord + '})$.', placeholder: 'ex. 1 + 2x + 2x^2' });
    }
  };
  // ---------- dérivées ----------
  const BLOCKS = ['x^2', 'x^3', 'sin(x)', 'cos(x)', 'exp(x)', 'ln(x)', 'sqrt(x)', 'x'];
  const INNER = ['2*x', '3*x', 'x^2', 'x^2+1', '2*x+1', '-x', 'x^3'];
  G.derivee = {
    label: 'Dérivées', chapter: 'm5',
    make() {
      const t = R(0, 3);
      let f, rule;
      if (t === 0) { const o = pick(['sin', 'cos', 'exp', 'ln', 'sqrt']); const u = pick(o === 'ln' || o === 'sqrt' ? ['x^2+1', '2*x+1', 'x^2+3'] : INNER); f = o + '(' + u + ')'; rule = 'Composée : $(f \\circ u)\' = u\' \\times f\'(u)$.'; }
      else if (t === 1) { const a = pick(BLOCKS), b = pick(BLOCKS.filter((x) => x !== a)); f = a + '*' + b; rule = 'Produit : $(uv)\' = u\'v + uv\'$.'; }
      else if (t === 2) { const a = pick(['x', 'x^2', 'sin(x)', '1', 'exp(x)']), b = pick(['x^2+1', 'x+2', 'exp(x)', 'cos(x)+2']); f = '(' + a + ')/(' + b + ')'; rule = 'Quotient : $\\left(\\frac{u}{v}\\right)\' = \\frac{u\'v - uv\'}{v^2}$.'; }
      else { const n = R(2, 5), u = pick(['x^2+1', '2*x-1', 'sin(x)', '3*x+2']); f = '(' + u + ')^' + n; rule = 'Puissance : $(u^n)\' = n\\,u\'\\,u^{n-1}$.'; }
      const ast = M.parse(f, { vars: ['x'] });
      const d = M.derive(ast, 'x');
      const ans = M.toStr(d);
      const dom = /ln|sqrt/.test(f) ? [0.3, 3] : [-2, 2];
      const mist = [];
      // oubli de la dérivée intérieure u'
      if (t === 0 || t === 3) {
        try {
          const inner = t === 0 ? ast.args[0] : (ast.a.t === 'paren' ? ast.a.a : ast.a);
          const du = M.toStr(M.derive(inner, 'x'));
          if (du !== '1') mist.push({ expr: '(' + ans + ')/(' + du + ')', msg: 'Tu as oublié de multiplier par la dérivée intérieure $u\' = ' + M.toTeX(M.parse(du)) + '$ : $(f \\circ u)\' = u\' \\times f\'(u)$.' });
        } catch (e) { /* rien */ }
      }
      if (t === 1) { try { const [a, b] = f.split('*'); mist.push({ expr: M.toStr(M.derive(M.parse(a), 'x')) + '*(' + M.toStr(M.derive(M.parse(b), 'x')) + ')', msg: '$(uv)\' \\neq u\'v\'$ : il faut $u\'v + uv\'$.' }); } catch (e) { /* rien */ } }
      return q('derivee', { chapter: 'm5', level: 2, vars: ['x'], domain: dom, q: 'Dérive $f(x) = ' + M.toTeX(ast) + '$.', answer: ans, check: 'expr', mistakes: mist, hint: rule, explain: rule + ' On obtient $f\'(x) = ' + M.toTeX(d) + '$ (toute forme équivalente est acceptée).', placeholder: 'ex. 2x cos(x^2)' });
    }
  };
  // ---------- primitives ----------
  G.primitive = {
    label: 'Primitives', chapter: 'm6',
    make() {
      const a = R(2, 5), n = R(2, 5);
      const L = [
        ['x^' + n, 'x^' + (n + 1) + '/' + (n + 1), 'x^n \\to \\frac{x^{n+1}}{n+1}', [-2, 2]],
        ['cos(' + a + '*x)', 'sin(' + a + '*x)/' + a, '\\cos(ax) \\to \\frac{\\sin(ax)}{a}', [-2, 2]],
        ['sin(' + a + '*x)', '-cos(' + a + '*x)/' + a, '\\sin(ax) \\to -\\frac{\\cos(ax)}{a}', [-2, 2]],
        ['exp(' + a + '*x)', 'exp(' + a + '*x)/' + a, '\\mathrm{e}^{ax} \\to \\frac{\\mathrm{e}^{ax}}{a}', [-1.5, 1.5]],
        ['1/(' + a + '*x+1)', 'ln(' + a + '*x+1)/' + a, '\\frac{1}{ax+b} \\to \\frac{\\ln|ax+b|}{a}', [0.1, 3]],
        ['x*exp(x^2)', 'exp(x^2)/2', 'u\'\\mathrm{e}^{u} \\to \\mathrm{e}^u \\text{ (ici } u = x^2, u\' = 2x)', [-1.5, 1.5]],
        ['2*x/(x^2+1)', 'ln(x^2+1)', '\\frac{u\'}{u} \\to \\ln|u|', [-2, 2]],
        ['1/(1+x^2)', 'arctan(x)', '\\frac{1}{1+x^2} \\to \\arctan x', [-2, 2]],
        ['1/sqrt(x)', '2*sqrt(x)', '\\frac{1}{\\sqrt{x}} \\to 2\\sqrt{x}', [0.2, 3]],
        ['cos(x)*sin(x)^' + n, 'sin(x)^' + (n + 1) + '/' + (n + 1), 'u\'u^n \\to \\frac{u^{n+1}}{n+1} \\text{ (}u = \\sin x)', [-2, 2]],
        ['1/x^' + n, '-1/(' + (n - 1) + '*x^' + (n - 1) + ')', '\\frac{1}{x^n} = x^{-n} \\to \\frac{x^{-n+1}}{-n+1}', [0.3, 3]]
      ];
      const [f, F, rule, dom] = pick(L);
      return q('primitive', { chapter: 'm6', level: 2, vars: ['x'], domain: dom, q: 'Donne une primitive de $f(x) = ' + T(f) + '$.', answer: F, check: 'antideriv', hint: 'Forme reconnue : $' + rule + '$.', explain: '$' + rule + '$, donc $F(x) = ' + T(F) + ' + C$. Vérifie en dérivant : $F\' = f$.', placeholder: 'ex. sin(3x)/3' });
    }
  };
  // ---------- complexes ----------
  G.complexe = {
    label: 'Nombres complexes', chapter: 'm7',
    make() {
      const a = R(-5, 5) || 1, b = R(-5, 5) || 2, c = R(-4, 4) || 1, d = R(-4, 4) || -1;
      const z = '(' + a + (b < 0 ? '' : '+') + b + '*i)';
      const zt = T(a + (b < 0 ? '' : '+') + b + 'i');
      const t = R(0, 3);
      if (t === 0) return q('complexe', { chapter: 'm7', q: 'Module de $z = ' + zt + '$ (valeur exacte) ?', answer: 'sqrt(' + (a * a + b * b) + ')', check: 'value', explain: '$|z| = \\sqrt{a^2 + b^2} = \\sqrt{' + a * a + ' + ' + b * b + '} = \\sqrt{' + (a * a + b * b) + '}$.', mistakes: [{ expr: String(a * a + b * b), msg: 'Tu as donné $|z|^2$ : il faut prendre la racine carrée.' }] });
      if (t === 1) { const w = '(' + c + (d < 0 ? '' : '+') + d + '*i)'; return q('complexe', { chapter: 'm7', level: 2, q: 'Forme algébrique de $(' + zt + ')(' + T(c + (d < 0 ? '' : '+') + d + 'i') + ')$ ?', answer: (a * c - b * d) + (a * d + b * c < 0 ? '' : '+') + (a * d + b * c) + '*i', check: 'value', explain: '$(a+b\\mathrm{i})(c+d\\mathrm{i}) = (ac - bd) + (ad + bc)\\mathrm{i}$ car $\\mathrm{i}^2 = -1$ : $' + T((a * c - b * d) + (a * d + b * c < 0 ? '' : '+') + (a * d + b * c) + 'i') + '$.', mistakes: [{ expr: (a * c + b * d) + (a * d + b * c < 0 ? '' : '+') + (a * d + b * c) + '*i', msg: 'Attention, $\\mathrm{i}^2 = -1$ : la partie réelle est $ac - bd$.' }] }); void w; }
      if (t === 2) return q('complexe', { chapter: 'm7', q: 'Conjugué de $z = ' + zt + '$ ?', answer: a + (b < 0 ? '+' : '-') + Math.abs(b) + '*i', check: 'value', explain: '$\\overline{a + b\\mathrm{i}} = a - b\\mathrm{i}$.' });
      const ang = pick([[1, 1, 'pi/4'], [1, -1, '-pi/4'], [-1, 1, '3*pi/4'], [0, 1, 'pi/2'], [-1, 0, 'pi'], [1, 0, '0'], [-1, -1, '-3*pi/4']]);
      const k = R(1, 4);
      return q('complexe', { chapter: 'm7', level: 2, q: 'Argument principal (dans $]-\\pi, \\pi]$) de $z = ' + T(ang[0] * k + (ang[1] * k < 0 ? '' : '+') + ang[1] * k + 'i') + '$ ?', answer: ang[2], check: 'value', explain: 'Place $z$ dans le plan : ' + (ang[0] < 0 ? 'partie réelle négative' : ang[0] > 0 ? 'partie réelle positive' : 'partie réelle nulle') + ', ' + (ang[1] < 0 ? 'imaginaire négative' : ang[1] > 0 ? 'imaginaire positive' : 'imaginaire nulle') + ' → $\\arg z = ' + T(ang[2]) + '$.' });
      void z;
    }
  };
  // ---------- EDO ----------
  G.edo = {
    label: 'Équations différentielles', chapter: 'm8',
    make() {
      const a = R(1, 5), k = R(1, 6), w = R(1, 4);
      if (Math.random() < 0.55) return q('edo', { chapter: 'm8', level: 2, vars: ['t'], domain: [0, 2], q: 'Résous $y\' + ' + a + 'y = 0$ avec $y(0) = ' + k + '$. Donne $y(t)$.', answer: k + '*exp(-' + a + '*t)', check: 'expr', explain: 'Solution générale : $y = C\\mathrm{e}^{-' + a + 't}$ ; $y(0) = C = ' + k + '$.', mistakes: [{ expr: k + '*exp(' + a + '*t)', msg: 'Le signe : $y\' = -' + a + 'y$ donne $\\mathrm{e}^{-' + a + 't}$.' }] });
      return q('edo', { chapter: 'm8', level: 3, vars: ['t'], domain: [0, 2], q: 'Résous $y\'\' + ' + w * w + 'y = 0$ avec $y(0) = ' + k + '$ et $y\'(0) = 0$. Donne $y(t)$.', answer: k + '*cos(' + w + '*t)', check: 'expr', explain: 'Équation caractéristique $r^2 + ' + w * w + ' = 0$, $r = \\pm ' + w + '\\mathrm{i}$ : $y = A\\cos(' + w + 't) + B\\sin(' + w + 't)$, $y(0) = A = ' + k + '$, $y\'(0) = ' + w + 'B = 0$.' });
    }
  };
  // ---------- algèbre linéaire ----------
  G.det = {
    label: 'Déterminants', chapter: 'm11',
    make() {
      const m = () => R(-4, 5);
      if (Math.random() < 0.6) { const [a, b, c, d] = [m(), m(), m(), m()]; return q('det', { chapter: 'm11', q: '$\\det\\begin{pmatrix} ' + a + ' & ' + b + ' \\\\ ' + c + ' & ' + d + ' \\end{pmatrix}$ ?', answer: String(a * d - b * c), check: 'value', explain: '$ad - bc = ' + a + ' \\times ' + d + ' - ' + b + ' \\times ' + c + ' = ' + (a * d - b * c) + '$.', mistakes: b * c ? [{ expr: String(a * d + b * c), msg: 'C\'est $ad - bc$ (moins), pas $ad + bc$.' }] : [] }); }
      const A = [[m(), m(), m()], [m(), m(), m()], [m(), m(), m()]];
      const dt = A[0][0] * (A[1][1] * A[2][2] - A[1][2] * A[2][1]) - A[0][1] * (A[1][0] * A[2][2] - A[1][2] * A[2][0]) + A[0][2] * (A[1][0] * A[2][1] - A[1][1] * A[2][0]);
      return q('det', { chapter: 'm11', level: 2, q: '$\\det\\begin{pmatrix} ' + A.map((r) => r.join(' & ')).join(' \\\\ ') + ' \\end{pmatrix}$ ?', answer: String(dt), check: 'value', explain: 'Développement selon la 1re ligne (ou Sarrus) : $' + A[0][0] + '\\times(' + (A[1][1] * A[2][2] - A[1][2] * A[2][1]) + ') - ' + A[0][1] + '\\times(' + (A[1][0] * A[2][2] - A[1][2] * A[2][0]) + ') + ' + A[0][2] + '\\times(' + (A[1][0] * A[2][1] - A[1][1] * A[2][0]) + ') = ' + dt + '$.' });
    }
  };
  // ---------- probabilités ----------
  G.proba = {
    label: 'Dénombrement et probas', chapter: 'm12',
    make() {
      const n = R(4, 10), k = R(1, Math.min(4, n - 1));
      const C = (n, k) => { let r = 1; for (let j = 1; j <= k; j++) r = (r * (n - k + j)) / j; return Math.round(r); };
      if (Math.random() < 0.5) return q('proba', { chapter: 'm12', q: 'Combien vaut $\\dbinom{' + n + '}{' + k + '}$ ?', answer: String(C(n, k)), check: 'value', explain: '$\\binom{n}{k} = \\frac{n!}{k!(n-k)!} = ' + C(n, k) + '$ (nombre de façons de choisir ' + k + ' éléments parmi ' + n + ').' });
      const nn = R(3, 6), kk = R(0, nn);
      return q('proba', { chapter: 'm12', level: 2, q: 'On lance ' + nn + ' fois une pièce équilibrée. $P(X = ' + kk + ')$ où $X$ = nombre de piles ? (valeur exacte)', answer: frac(C(nn, kk), Math.pow(2, nn)), check: 'value', explain: '$X \\sim \\mathcal{B}(' + nn + ', \\tfrac12)$ : $P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k} = \\frac{' + C(nn, kk) + '}{' + Math.pow(2, nn) + '}$.' });
    }
  };
  for (const k in G) { G[k].subject = 'maths'; APP.generators = APP.generators || {}; APP.generators['m-' + k] = G[k]; }
})();
