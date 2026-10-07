/* Moteur mathématique : lecture des formules tapées (syntaxe « calculatrice »), évaluation en nombres complexes,
   conversion LaTeX, dérivation symbolique et comparaison d'expressions par équivalence numérique. */
(function () {
  'use strict';
  const APP = (window.APP = window.APP || {});
  const M = (APP.math = APP.math || {});

  /* ================= nombres complexes ================= */
  class Cx {
    constructor(re, im) { this.re = re; this.im = im || 0; }
    static of(x) { return x instanceof Cx ? x : new Cx(x, 0); }
    get real() { return Math.abs(this.im) < 1e-12 * Math.max(1, Math.abs(this.re)); }
    add(b) { return new Cx(this.re + b.re, this.im + b.im); }
    sub(b) { return new Cx(this.re - b.re, this.im - b.im); }
    mul(b) { return new Cx(this.re * b.re - this.im * b.im, this.re * b.im + this.im * b.re); }
    div(b) { const d = b.re * b.re + b.im * b.im; return new Cx((this.re * b.re + this.im * b.im) / d, (this.im * b.re - this.re * b.im) / d); }
    neg() { return new Cx(-this.re, -this.im); }
    abs() { return Math.hypot(this.re, this.im); }
    arg() { return Math.atan2(this.im, this.re); }
    conj() { return new Cx(this.re, -this.im); }
    isFinite() { return isFinite(this.re) && isFinite(this.im); }
  }
  M.Cx = Cx;
  const C = (re, im) => new Cx(re, im || 0);
  const I = C(0, 1), ONE = C(1), ZERO = C(0);
  const cexp = (z) => { const r = Math.exp(z.re); return C(r * Math.cos(z.im), r * Math.sin(z.im)); };
  const cln = (z) => C(Math.log(z.abs()), z.arg());
  const csqrt = (z) => { if (z.real && z.re >= 0) return C(Math.sqrt(z.re)); const r = Math.sqrt(z.abs()), t = z.arg() / 2; return C(r * Math.cos(t), r * Math.sin(t)); };
  const cpow = (a, b) => {
    if (b.real && Number.isInteger(b.re) && Math.abs(b.re) <= 64) {
      let n = Math.abs(b.re), r = ONE, x = a;
      while (n) { if (n & 1) r = r.mul(x); x = x.mul(x); n >>= 1; }
      return b.re < 0 ? ONE.div(r) : r;
    }
    if (a.real && b.real && a.re >= 0) return C(Math.pow(a.re, b.re));
    if (a.real && b.real && a.re < 0) { // racine impaire d'un négatif : on garde la valeur réelle (x^(1/3))
      const q = 1 / b.re;
      if (Math.abs(q - Math.round(q)) < 1e-9 && Math.round(q) % 2 === 1) return C(-Math.pow(-a.re, b.re));
    }
    if (a.re === 0 && a.im === 0) return b.re > 0 ? ZERO : C(Infinity);
    return cexp(b.mul(cln(a)));
  };
  const csin = (z) => C(Math.sin(z.re) * Math.cosh(z.im), Math.cos(z.re) * Math.sinh(z.im));
  const ccos = (z) => C(Math.cos(z.re) * Math.cosh(z.im), -Math.sin(z.re) * Math.sinh(z.im));
  const csinh = (z) => C(Math.sinh(z.re) * Math.cos(z.im), Math.cosh(z.re) * Math.sin(z.im));
  const ccosh = (z) => C(Math.cosh(z.re) * Math.cos(z.im), Math.sinh(z.re) * Math.sin(z.im));
  const realOnly = (f) => (z) => (z.real ? C(f(z.re)) : C(NaN));
  function fact(n) { if (n < 0 || !Number.isInteger(n)) return gamma(n + 1); let r = 1; for (let k = 2; k <= n; k++) r *= k; return r; }
  function gamma(x) { // Lanczos
    if (x < 0.5) return Math.PI / (Math.sin(Math.PI * x) * gamma(1 - x));
    x -= 1; const g = 7, p = [0.99999999999980993, 676.5203681218851, -1259.1392167224028, 771.32342877765313, -176.61502916214059, 12.507343278686905, -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7];
    let a = p[0]; const t = x + g + 0.5; for (let i = 1; i < 9; i++) a += p[i] / (x + i);
    return Math.sqrt(2 * Math.PI) * Math.pow(t, x + 0.5) * Math.exp(-t) * a;
  }
  const FN = {
    sin: csin, cos: ccos, tan: (z) => csin(z).div(ccos(z)),
    cot: (z) => ccos(z).div(csin(z)), sec: (z) => ONE.div(ccos(z)), csc: (z) => ONE.div(csin(z)),
    arcsin: (z) => (z.real && Math.abs(z.re) <= 1 ? C(Math.asin(z.re)) : I.neg().mul(cln(I.mul(z).add(csqrt(ONE.sub(z.mul(z))))))),
    arccos: (z) => (z.real && Math.abs(z.re) <= 1 ? C(Math.acos(z.re)) : C(Math.PI / 2).sub(FN.arcsin(z))),
    arctan: (z) => (z.real ? C(Math.atan(z.re)) : I.div(C(2)).mul(cln(ONE.sub(I.mul(z)).div(ONE.add(I.mul(z)))))),
    sinh: csinh, cosh: ccosh, tanh: (z) => csinh(z).div(ccosh(z)),
    arcsinh: (z) => cln(z.add(csqrt(z.mul(z).add(ONE)))), arccosh: (z) => cln(z.add(csqrt(z.mul(z).sub(ONE)))), arctanh: (z) => cln(ONE.add(z).div(ONE.sub(z))).mul(C(0.5)),
    exp: cexp, ln: (z) => (z.re === 0 && z.im === 0 ? C(-Infinity) : cln(z)),
    log: (z) => cln(z).div(C(Math.LN10)), log2: (z) => cln(z).div(C(Math.LN2)),
    sqrt: csqrt, cbrt: (z) => (z.real ? C(Math.cbrt(z.re)) : cpow(z, C(1 / 3))),
    abs: (z) => C(z.abs()), arg: (z) => C(z.arg()), re: (z) => C(z.re), im: (z) => C(z.im), conj: (z) => z.conj(),
    floor: realOnly(Math.floor), ceil: realOnly(Math.ceil), sign: realOnly(Math.sign), round: realOnly(Math.round)
  };
  const ALIAS = { asin: 'arcsin', acos: 'arccos', atan: 'arctan', sh: 'sinh', ch: 'cosh', th: 'tanh', argsh: 'arcsinh', argch: 'arccosh', argth: 'arctanh', asinh: 'arcsinh', acosh: 'arccosh', atanh: 'arctanh', log10: 'log', sgn: 'sign', racine: 'sqrt', Re: 're', Im: 'im', tg: 'tan', cotan: 'cot', module: 'abs', mod: 'abs' };
  const FN2 = { // fonctions à 2 arguments
    binom: (n, k) => C(fact(n.re) / (fact(k.re) * fact(n.re - k.re))), C: null,
    min: (a, b) => C(Math.min(a.re, b.re)), max: (a, b) => C(Math.max(a.re, b.re)),
    logb: (b, x) => cln(x).div(cln(b)), root: (n, x) => cpow(x, ONE.div(n))
  };
  delete FN2.C;
  const FNAMES = Object.keys(FN).concat(Object.keys(ALIAS), Object.keys(FN2)).sort((a, b) => b.length - a.length);
  const CONSTS = { pi: Math.PI, e: Math.E };
  M.FN = FN;

  /* ================= analyse lexicale ================= */
  const SUP = { '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4', '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9', '⁻': '-', '⁺': '+', 'ⁿ': 'n' };
  function normalize(s) {
    s = String(s || '');
    s = s.replace(/[−–—]/g, '-').replace(/[×·∙⋅]/g, '*').replace(/÷/g, '/').replace(/π/g, 'pi').replace(/θ/g, 'theta').replace(/α/g, 'alpha').replace(/β/g, 'beta').replace(/ω/g, 'omega').replace(/λ/g, 'lambda').replace(/φ|ϕ/g, 'phi').replace(/Δ/g, 'Delta').replace(/∞/g, 'inf');
    s = s.replace(/√/g, 'sqrt');
    s = s.replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹⁻⁺ⁿ]+/g, (m) => '^(' + [...m].map((c) => SUP[c]).join('') + ')');
    s = s.replace(/\*\*/g, '^');
    // virgule décimale (0,5) — sauf entre les arguments d'une fonction à 2 arguments : binom(5,2)
    s = s.replace(/\b(binom|min|max|logb|root)\s*\(/g, (m) => m + '\u0002');
    let depth = 0, out = '', guard = [];
    for (let k = 0; k < s.length; k++) {
      const c = s[k];
      if (c === '\u0002') { guard.push(depth); continue; }
      if (c === '(') depth++;
      if (c === ')') { if (guard.length && guard[guard.length - 1] === depth) guard.pop(); depth--; }
      out += c === ',' && guard.length && guard[guard.length - 1] === depth ? '\u0001' : c;
    }
    s = out.replace(/(\d),(\d)/g, '$1.$2').replace(/\u0001/g, ',');
    s = s.replace(/\\cdot|\\times/g, '*').replace(/\\left|\\right/g, '').replace(/\\(pi|sin|cos|tan|ln|exp|sqrt|arctan|arcsin|arccos)/g, '$1').replace(/\\frac\{([^{}]*)\}\{([^{}]*)\}/g, '(($1)/($2))').replace(/[{}]/g, (c) => (c === '{' ? '(' : ')'));
    return s.trim();
  }
  M.normalize = normalize;
  function lex(s) {
    const t = []; let i = 0;
    while (i < s.length) {
      const c = s[i];
      if (/\s/.test(c)) { if (t.length) t[t.length - 1].sp = true; i++; continue; }
      if (/[0-9.]/.test(c)) {
        let j = i; while (j < s.length && /[0-9.]/.test(s[j])) j++;
        if (/[eE]/.test(s[j]) && /[0-9]/.test(s[j + 1] || '') && /\d/.test(s[j - 1])) { j++; while (j < s.length && /[0-9]/.test(s[j])) j++; }
        const txt = s.slice(i, j);
        if ((txt.match(/\./g) || []).length > 1 || txt === '.') throw perr('nombre mal écrit « ' + txt + ' »', i);
        t.push({ k: 'num', v: parseFloat(txt), s: txt, p: i }); i = j; continue;
      }
      if (/[A-Za-z_]/.test(c)) { let j = i; while (j < s.length && /[A-Za-z_0-9']/.test(s[j])) j++; t.push({ k: 'id', v: s.slice(i, j), p: i }); i = j; continue; }
      if ('+-*/^!(),;|[]='.includes(c)) { t.push({ k: c, p: i }); i++; continue; }
      if (c === '<' || c === '>') { t.push({ k: c, p: i }); i++; continue; }
      throw perr('caractère inattendu « ' + c + ' »', i);
    }
    return t;
  }
  function perr(msg, pos) { const e = new Error(msg); e.parse = true; e.pos = pos; return e; }

  /* ================= analyse syntaxique ================= */
  // opts.vars : variables autorisées ; les autres lettres isolées sont refusées
  function parse(src, opts) {
    opts = opts || {};
    const vars = new Set(opts.vars || ['x']);
    const s = normalize(src);
    if (!s) throw perr('expression vide', 0);
    const toks0 = lex(s);
    // découpe des identifiants collés : 2xy -> x*y, xsin -> x sin, pix -> pi x
    const toks = [];
    for (const tk of toks0) {
      if (tk.k !== 'id') { toks.push(tk); continue; }
      let w = tk.v; let p = tk.p;
      const parts = [];
      while (w.length) {
        if (vars.has(w)) { parts.push(w); break; }
        let m = null;
        const fn = FNAMES.find((f) => w.startsWith(f) && (w.length === f.length || !vars.has(w) || true));
        const cands = [];
        for (const v of vars) if (w.startsWith(v)) cands.push(v);
        for (const k of Object.keys(CONSTS).concat(['i', 'j', 'inf', 'theta', 'alpha', 'beta', 'omega', 'lambda', 'phi'])) if (w.startsWith(k) && (k !== 'j' || !vars.has('j'))) cands.push(k);
        if (fn) cands.push(fn);
        cands.sort((a, b) => b.length - a.length);
        m = cands[0];
        if (!m) { parts.push(w); break; }
        parts.push(m); w = w.slice(m.length);
        if (/^\d/.test(w)) { const d = /^\d+/.exec(w)[0]; parts.push({ num: d }); w = w.slice(d.length); }
      }
      parts.forEach((x, n) => toks.push(typeof x === 'string' ? { k: 'id', v: x, p: p, sp: n === parts.length - 1 ? tk.sp : false } : { k: 'num', v: parseFloat(x.num), s: x.num, p }));
    }
    let i = 0;
    const peek = () => toks[i];
    const next = () => toks[i++];
    const isK = (k) => toks[i] && toks[i].k === k;
    const expect = (k, what) => { if (!isK(k)) throw perr((what || '« ' + k + ' »') + ' attendu' + (toks[i] ? ' avant « ' + tokStr(toks[i]) + ' »' : ' en fin d\'expression'), toks[i] ? toks[i].p : s.length); return next(); };
    let absDepth = 0;
    const isFn = (id) => FN[id] || ALIAS[id] || FN2[id];
    const startsPrimary = (tk) => tk && (tk.k === 'num' || tk.k === 'id' || tk.k === '(' || tk.k === '[' || (tk.k === '|' && absDepth === 0));

    function parseTop() {
      const items = [parseEq()];
      while (isK(';')) { next(); if (!peek()) break; items.push(parseEq()); }
      if (i < toks.length) throw perr('symbole inattendu « ' + tokStr(toks[i]) + ' »', toks[i].p);
      return items.length > 1 ? { t: 'list', items } : items[0];
    }
    function parseEq() {
      const a = parseSum();
      if (isK('=')) { next(); const b = parseSum(); return { t: 'eq', a, b }; }
      return a;
    }
    function parseSum() {
      let a = parseTerm();
      while (isK('+') || isK('-')) { const o = next().k; const b = parseTerm(); a = { t: 'op', op: o, a, b }; }
      return a;
    }
    function parseTerm() {
      let a = parseUnary();
      for (;;) {
        if (isK('*') || isK('/')) { const o = next().k; const b = parseUnary(); a = { t: 'op', op: o, a, b }; continue; }
        if (startsPrimary(peek())) { const b = parsePower(); a = { t: 'op', op: '*', a, b, imp: true }; continue; }
        break;
      }
      return a;
    }
    function parseUnary() {
      if (isK('-')) { next(); return { t: 'neg', a: parseUnary() }; }
      if (isK('+')) { next(); return parseUnary(); }
      return parsePower();
    }
    function parsePower() {
      let a = parsePostfix();
      if (isK('^')) { next(); const b = parseUnaryPow(); a = { t: 'op', op: '^', a, b }; }
      return a;
    }
    function parseUnaryPow() { // exposant : -2, 2, (..), x, et puissances en cascade (droite)
      if (isK('-')) { next(); return { t: 'neg', a: parseUnaryPow() }; }
      if (isK('+')) { next(); return parseUnaryPow(); }
      return parsePower();
    }
    function parsePostfix() {
      let a = parsePrimary();
      while (isK('!')) { next(); a = { t: 'fn', f: 'fact', args: [a] }; }
      return a;
    }
    function parseArgImplicit() { // argument de « sin 2x » sans parenthèses
      let a = parsePower();
      while (peek() && (peek().k === 'num' || (peek().k === 'id' && !isFn(peek().v)) || peek().k === '(') && !toks[i - 1].sp) {
        a = { t: 'op', op: '*', a, b: parsePower(), imp: true };
      }
      return a;
    }
    function parsePrimary() {
      const tk = peek();
      if (!tk) throw perr('expression incomplète', s.length);
      if (tk.k === 'num') { next(); return { t: 'num', v: tk.v, s: tk.s }; }
      if (tk.k === '(') {
        next();
        const first = parseEq();
        if (isK(',')) { const items = [first]; while (isK(',')) { next(); items.push(parseEq()); } expect(')', '« ) »'); return { t: 'list', items, paren: true }; }
        expect(')', 'parenthèse fermante « ) »');
        return { t: 'paren', a: first };
      }
      if (tk.k === '[') {
        next();
        const items = [];
        if (!isK(']')) { items.push(parseEq()); while (isK(',') || isK(';')) { next(); items.push(parseEq()); } }
        expect(']', 'crochet fermant « ] »');
        return { t: 'list', items, brack: true };
      }
      if (tk.k === '|') {
        if (absDepth) throw perr('valeurs absolues imbriquées : utilise abs( )', tk.p);
        next(); absDepth++;
        const a = parseSum();
        absDepth--;
        expect('|', 'barre fermante « | »');
        return { t: 'fn', f: 'abs', args: [a] };
      }
      if (tk.k === 'id') {
        next();
        let id = tk.v;
        if (isFn(id)) {
          const f = ALIAS[id] || id;
          let pw = null;
          if (isK('^')) { next(); pw = parseUnaryPow(); }
          let args;
          if (isK('(')) {
            next(); args = [parseSum()];
            while (isK(',')) { next(); args.push(parseSum()); }
            expect(')', 'parenthèse fermante « ) » de ' + id);
          } else {
            if (!startsPrimary(peek()) && !isK('-')) throw perr('argument manquant après ' + id, tk.p + id.length);
            if (isK('-')) { next(); args = [{ t: 'neg', a: parseArgImplicit() }]; } else args = [parseArgImplicit()];
          }
          const need = FN2[f] ? 2 : 1;
          if (args.length !== need) throw perr(id + ' attend ' + need + ' argument' + (need > 1 ? 's' : ''), tk.p);
          let node = { t: 'fn', f, args };
          if (pw) node = { t: 'op', op: '^', a: node, b: pw };
          return node;
        }
        if (id === 'pi' || id === 'e') return { t: 'const', n: id };
        if ((id === 'i' || id === 'j') && !vars.has(id)) return { t: 'const', n: 'i', j: id === 'j' };
        if (id === 'inf') return { t: 'num', v: Infinity, s: '∞' };
        if (vars.has(id)) {
          if (isK('(') && opts.funcVars && opts.funcVars.includes(id)) { next(); const a = parseSum(); expect(')'); return { t: 'call', n: id, a }; }
          return { t: 'var', n: id };
        }
        const e = perr('« ' + id + ' » inconnu' + (vars.size ? ' (variable' + (vars.size > 1 ? 's' : '') + ' : ' + [...vars].join(', ') + ')' : ''), tk.p);
        e.unknown = id; throw e;
      }
      throw perr('symbole inattendu « ' + tokStr(tk) + ' »', tk.p);
    }
    const ast = parseTop();
    return ast;
  }
  function tokStr(t) { return t.k === 'num' ? t.s : t.k === 'id' ? t.v : t.k; }
  M.parse = parse;

  /* ================= évaluation ================= */
  function ev(n, sc) {
    switch (n.t) {
      case 'num': return C(n.v);
      case 'const': return n.n === 'pi' ? C(Math.PI) : n.n === 'e' ? C(Math.E) : I;
      case 'var': { const v = sc[n.n]; if (v === undefined) throw new Error('variable ' + n.n + ' sans valeur'); return Cx.of(v); }
      case 'paren': return ev(n.a, sc);
      case 'neg': return ev(n.a, sc).neg();
      case 'op': {
        const a = ev(n.a, sc), b = ev(n.b, sc);
        switch (n.op) { case '+': return a.add(b); case '-': return a.sub(b); case '*': return a.mul(b); case '/': return a.div(b); case '^': return cpow(a, b); }
        break;
      }
      case 'fn': {
        if (n.f === 'fact') { const a = ev(n.args[0], sc); return C(fact(a.re)); }
        if (FN2[n.f]) return FN2[n.f](ev(n.args[0], sc), ev(n.args[1], sc));
        return FN[n.f](ev(n.args[0], sc));
      }
      case 'call': { const f = sc[n.n]; return f(ev(n.a, sc)); }
      case 'eq': return ev(n.b, sc).sub(ev(n.a, sc));
      case 'list': throw new Error('liste');
    }
    throw new Error('nœud inconnu ' + n.t);
  }
  M.evaluate = (ast, scope) => ev(ast, scope || {});
  M.evalStr = (s, scope, vars) => ev(parse(s, { vars: vars || Object.keys(scope || {}) }), scope || {});

  /* ================= LaTeX ================= */
  const PREC = { '+': 1, '-': 1, '*': 2, '/': 2, neg: 3, '^': 4 };
  const TEXFN = { sin: '\\sin', cos: '\\cos', tan: '\\tan', cot: '\\cot', arcsin: '\\arcsin', arccos: '\\arccos', arctan: '\\arctan', sinh: '\\sinh', cosh: '\\cosh', tanh: '\\tanh', ln: '\\ln', log: '\\log', exp: '\\exp', arg: '\\arg', re: '\\operatorname{Re}', im: '\\operatorname{Im}', arcsinh: '\\operatorname{argsh}', arccosh: '\\operatorname{argch}', arctanh: '\\operatorname{argth}', sec: '\\sec', csc: '\\csc', log2: '\\log_2', floor: '\\operatorname{E}', sign: '\\operatorname{sgn}' };
  const GREEK = { theta: '\\theta', alpha: '\\alpha', beta: '\\beta', omega: '\\omega', lambda: '\\lambda', phi: '\\varphi', Delta: '\\Delta', mu: '\\mu', sigma: '\\sigma', tau: '\\tau' };
  function tex(n, parentPrec, side) {
    const wrap = (s, p) => (p < (parentPrec || 0) || (side === 'r' && p === parentPrec && p <= 2) ? '\\left(' + s + '\\right)' : s);
    switch (n.t) {
      case 'num': return n.s && n.v !== Infinity ? n.s.replace('.', '{,}') : n.v === Infinity ? '\\infty' : String(n.v).replace('.', '{,}');
      case 'const': return n.n === 'pi' ? '\\pi' : n.n === 'e' ? '\\mathrm{e}' : n.j ? 'j' : '\\mathrm{i}';
      case 'var': return GREEK[n.n] || (n.n.length > 1 ? n.n[0] + '_{' + n.n.slice(1) + '}' : n.n);
      case 'paren': return tex(n.a, parentPrec, side);
      case 'neg': return wrap('-' + tex(n.a, 3), PREC.neg);
      case 'op': {
        if (n.op === '/') return '\\dfrac{' + tex(n.a, 0) + '}{' + tex(n.b, 0) + '}';
        if (n.op === '^') {
          if (n.a.t === 'fn' && TEXFN[n.a.f] && !(n.a.f === 'exp')) return TEXFN[n.a.f] + '^{' + tex(n.b, 0) + '}' + fnArg(n.a.args[0]);
          if (n.a.t === 'const' && n.a.n === 'e') return '\\mathrm{e}^{' + tex(n.b, 0).replace(/\\dfrac/g, '\\frac') + '}';
          const base = n.a.t === 'num' || n.a.t === 'var' || n.a.t === 'const' || (n.a.t === 'fn' && (n.a.f === 'abs' || n.a.f === 'sqrt')) ? tex(n.a, 5) : '\\left(' + tex(n.a, 0) + '\\right)';
          return base + '^{' + tex(n.b, 0).replace(/\\dfrac/g, '\\frac') + '}';
        }
        if (n.op === '*') {
          const l = tex(n.a, 2, 'l'), r = tex(n.b, 2, 'r');
          const needDot = /[0-9}]$/.test(l) && /^[0-9\-]/.test(r) || (n.b.t === 'num') || (n.a.t === 'fn' && n.b.t !== 'paren' && !isSimple(n.b)) ;
          return wrap(l + (needDot ? ' \\times ' : (n.b.t === 'num' || /^\\[a-z]/.test(r) || /[a-z]$/i.test(l) && /^[a-z]/i.test(r) ? '\\,' : '')) + r, 2);
        }
        return wrap(tex(n.a, PREC[n.op], 'l') + ' ' + n.op + ' ' + tex(n.b, PREC[n.op], 'r'), PREC[n.op]);
      }
      case 'fn': {
        const a = n.args[0];
        if (n.f === 'sqrt') return '\\sqrt{' + tex(a, 0) + '}';
        if (n.f === 'cbrt') return '\\sqrt[3]{' + tex(a, 0) + '}';
        if (n.f === 'abs') return '\\left|' + tex(a, 0) + '\\right|';
        if (n.f === 'conj') return '\\overline{' + tex(a, 0) + '}';
        if (n.f === 'fact') return (a.t === 'num' || a.t === 'var' ? tex(a, 5) : '\\left(' + tex(a, 0) + '\\right)') + '!';
        if (n.f === 'exp') return '\\mathrm{e}^{' + tex(a, 0).replace(/\\dfrac/g, '\\frac') + '}';
        if (n.f === 'binom') return '\\dbinom{' + tex(n.args[0], 0) + '}{' + tex(n.args[1], 0) + '}';
        if (FN2[n.f]) return '\\operatorname{' + n.f + '}\\left(' + n.args.map((x) => tex(x, 0)).join(', ') + '\\right)';
        return (TEXFN[n.f] || '\\operatorname{' + n.f + '}') + fnArg(a);
      }
      case 'call': return n.n + '\\left(' + tex(n.a, 0) + '\\right)';
      case 'eq': return tex(n.a, 0) + ' = ' + tex(n.b, 0);
      case 'list': return (n.brack ? '\\left[' : '\\left(') + n.items.map((x) => tex(x, 0)).join(n.brack ? ' ;\\ ' : ',\\ ') + (n.brack ? '\\right]' : '\\right)');
    }
    return '?';
  }
  function isSimple(n) { return n.t === 'var' || n.t === 'num' || n.t === 'const'; }
  function fnArg(a) { return isSimple(a) ? ' ' + tex(a, 5) : '\\left(' + tex(a, 0) + '\\right)'; }
  M.toTeX = (ast) => tex(ast, 0);
  // AST -> syntaxe calculatrice (relisible par parse)
  const SP = { '+': 1, '-': 1, '*': 2, '/': 2, '^': 4 };
  function str(n, pp, side) {
    const w = (s, p) => (p < pp || (side === 'r' && p === pp && p <= 2) ? '(' + s + ')' : s);
    switch (n.t) {
      case 'num': return n.v < 0 ? '(' + n.v + ')' : String(n.v);
      case 'const': return n.n === 'i' ? 'i' : n.n;
      case 'var': return n.n;
      case 'paren': return str(n.a, pp, side);
      case 'neg': return w('-' + str(n.a, 3), 3);
      case 'op': return n.op === '^' ? w(str(n.a, 5) + '^' + str(n.b, 5), 4) : w(str(n.a, SP[n.op], 'l') + n.op + str(n.b, SP[n.op], 'r'), SP[n.op]);
      case 'fn': return n.f === 'fact' ? str(n.args[0], 5) + '!' : n.f + '(' + n.args.map((x) => str(x, 0)).join(',') + ')';
      case 'list': return n.items.map((x) => str(x, 0)).join(';');
      case 'eq': return str(n.a, 0) + '=' + str(n.b, 0);
    }
    return '?';
  }
  M.toStr = (ast) => str(ast, 0);
  M.texOf = (s, vars) => { try { return tex(parse(s, { vars }), 0); } catch (e) { return null; } };

  /* ================= dérivation symbolique ================= */
  const num = (v) => ({ t: 'num', v, s: String(v) });
  const op = (o, a, b) => ({ t: 'op', op: o, a, b });
  const fn = (f, a) => ({ t: 'fn', f, args: [a] });
  const neg = (a) => ({ t: 'neg', a });
  const isNum = (n, v) => n.t === 'num' && (v === undefined || n.v === v);
  function S(n) { // simplification légère
    if (n.t === 'paren') return S(n.a);
    if (n.t === 'neg') { const a = S(n.a); if (isNum(a)) return num(-a.v); if (a.t === 'neg') return a.a; return neg(a); }
    if (n.t === 'fn') return Object.assign({}, n, { args: n.args.map(S) });
    if (n.t !== 'op') return n;
    const a = S(n.a), b = S(n.b);
    if (isNum(a) && isNum(b) && n.op !== '/' && n.op !== '^') { const v = n.op === '+' ? a.v + b.v : n.op === '-' ? a.v - b.v : a.v * b.v; return v < 0 ? neg(num(-v)) : num(v); }
    switch (n.op) {
      case '+': if (isNum(a, 0)) return b; if (isNum(b, 0)) return a; if (b.t === 'neg') return S(op('-', a, b.a)); if (a.t === 'neg' && b.t !== 'neg') return S(op('-', b, a.a)); break;
      case '-': if (isNum(b, 0)) return a; if (isNum(a, 0)) return S(neg(b)); if (b.t === 'neg') return S(op('+', a, b.a)); if (same(a, b)) return num(0); break;
      case '*':
        if (isNum(a, 0) || isNum(b, 0)) return num(0);
        if (isNum(a, 1)) return b; if (isNum(b, 1)) return a;
        if (isNum(a, -1)) return S(neg(b)); if (isNum(b, -1)) return S(neg(a));
        if (a.t === 'neg') return S(neg(op('*', a.a, b))); if (b.t === 'neg') return S(neg(op('*', a, b.a)));
        if (isNum(b) && !isNum(a)) return S(op('*', b, a));
        if (isNum(a) && b.t === 'op' && b.op === '*' && isNum(b.a)) return S(op('*', num(a.v * b.a.v), b.b));
        if (same(a, b)) return op('^', a, num(2));
        break;
      case '/':
        if (isNum(a, 0)) return num(0); if (isNum(b, 1)) return a;
        if (a.t === 'neg') return S(neg(op('/', a.a, b)));
        if (isNum(a) && isNum(b) && Number.isInteger(a.v) && Number.isInteger(b.v)) { const g = gcd(Math.abs(a.v), Math.abs(b.v)); if (g > 1) return S(op('/', num(a.v / g), num(b.v / g))); }
        break;
      case '^': if (isNum(b, 0)) return num(1); if (isNum(b, 1)) return a; if (isNum(a, 1)) return num(1); break;
    }
    return op(n.op, a, b);
  }
  function gcd(a, b) { while (b) [a, b] = [b, a % b]; return a; }
  function same(a, b) { return JSON.stringify(strip(a)) === JSON.stringify(strip(b)); }
  function strip(n) { if (!n || typeof n !== 'object') return n; if (n.t === 'paren') return strip(n.a); const o = {}; for (const k in n) if (k !== 'imp' && k !== 's' && k !== 'paren') o[k] = Array.isArray(n[k]) ? n[k].map(strip) : strip(n[k]); return o; }
  function dep(n, v) { // l'expression dépend-elle de v ?
    if (!n || typeof n !== 'object') return false;
    if (n.t === 'var') return n.n === v;
    return ['a', 'b'].some((k) => dep(n[k], v)) || (n.args || []).some((x) => dep(x, v)) || (n.items || []).some((x) => dep(x, v));
  }
  function D(n, v) {
    if (!dep(n, v)) return num(0);
    switch (n.t) {
      case 'var': return num(1);
      case 'paren': return D(n.a, v);
      case 'neg': return neg(D(n.a, v));
      case 'op': {
        const a = n.a, b = n.b, da = () => D(a, v), db = () => D(b, v);
        if (n.op === '+' || n.op === '-') return op(n.op, da(), db());
        if (n.op === '*') { if (!dep(a, v)) return op('*', a, db()); if (!dep(b, v)) return op('*', da(), b); return op('+', op('*', da(), b), op('*', a, db())); }
        if (n.op === '/') { if (!dep(b, v)) return op('/', da(), b); if (!dep(a, v)) return neg(op('/', op('*', a, db()), op('^', b, num(2)))); return op('/', op('-', op('*', da(), b), op('*', a, db())), op('^', b, num(2))); }
        if (n.op === '^') {
          if (!dep(b, v)) { // u^n
            const nb = S(b);
            const nm1 = isNum(nb) ? num(nb.v - 1) : op('-', b, num(1));
            return op('*', op('*', b, op('^', a, nm1)), da());
          }
          if (!dep(a, v)) return op('*', op('*', fn('ln', a), n), db());
          return op('*', n, op('+', op('*', db(), fn('ln', a)), op('/', op('*', b, da()), a)));
        }
        break;
      }
      case 'fn': {
        const u = n.args[0], du = D(u, v);
        const chain = (outer) => (isNum(S(du), 1) ? outer : op('*', du, outer));
        switch (n.f) {
          case 'sin': return chain(fn('cos', u));
          case 'cos': return neg(chain(fn('sin', u)));
          case 'tan': return chain(op('+', num(1), op('^', fn('tan', u), num(2))));
          case 'exp': return chain(fn('exp', u));
          case 'ln': return op('/', du, u);
          case 'log': return op('/', du, op('*', u, fn('ln', num(10))));
          case 'sqrt': return op('/', du, op('*', num(2), fn('sqrt', u)));
          case 'arcsin': return op('/', du, fn('sqrt', op('-', num(1), op('^', u, num(2)))));
          case 'arccos': return neg(op('/', du, fn('sqrt', op('-', num(1), op('^', u, num(2))))));
          case 'arctan': return op('/', du, op('+', num(1), op('^', u, num(2))));
          case 'sinh': return chain(fn('cosh', u));
          case 'cosh': return chain(fn('sinh', u));
          case 'tanh': return chain(op('-', num(1), op('^', fn('tanh', u), num(2))));
          case 'abs': return op('*', du, fn('sign', u));
          case 'cbrt': return op('/', du, op('*', num(3), op('^', fn('cbrt', u), num(2))));
        }
        throw new Error('dérivée de ' + n.f + ' non prise en charge');
      }
    }
    throw new Error('dérivée impossible');
  }
  M.derive = (ast, v) => S(S(D(ast, v || 'x')));
  M.simplify = S;

  /* ================= comparaison numérique ================= */
  function sampler(vars, dom) {
    const pts = [];
    const [lo, hi] = dom || [-2.6, 2.6];
    const nice = [0.37, -0.81, 1.23, -1.57, 0.66, 2.11, -2.3, 1.71, -0.29, 0.93, 1.48, -1.12, 2.43, -0.52, 0.18, 1.89];
    for (let k = 0; k < 16; k++) {
      const sc = {};
      vars.forEach((v, j) => {
        const r = nice[(k + j * 5) % nice.length];
        sc[v] = lo + ((r + 2.6) / 5.2) * (hi - lo) + j * 0.013;
      });
      pts.push(sc);
    }
    return pts;
  }
  const close = (a, b, tol) => { tol = tol || 1e-7; const d = a.sub(b).abs(); return d <= tol * Math.max(1, a.abs(), b.abs()); };
  function sample(ast, pts) { return pts.map((p) => { try { const v = ev(ast, p); return v.isFinite() ? v : null; } catch (e) { return null; } }); }
  // relation entre u (réponse) et a (attendu) : equal | const-diff | ratio | different
  function relation(uv, av) {
    const pairs = uv.map((u, k) => [u, av[k]]).filter(([u, a]) => u && a);
    if (pairs.length < Math.min(5, uv.length)) return { kind: 'domain', n: pairs.length };
    if (pairs.every(([u, a]) => close(u, a))) return { kind: 'equal' };
    const d0 = pairs[0][0].sub(pairs[0][1]);
    if (pairs.every(([u, a]) => close(u.sub(a), d0, 1e-6))) return { kind: 'diff', d: d0 };
    const nz = pairs.filter(([, a]) => a.abs() > 1e-9);
    if (nz.length >= 4) { const r0 = nz[0][0].div(nz[0][1]); if (nz.every(([u, a]) => close(u.div(a), r0, 1e-6))) return { kind: 'ratio', r: r0 }; }
    return { kind: 'different' };
  }
  M.relation = relation;
  M.sampler = sampler;
  M.sampleVals = sample;
  M.close = close;
  // dérivée numérique (pour les primitives)
  function numDeriv(ast, pts, v) {
    return pts.map((p) => {
      const h = 1e-4 * Math.max(1, Math.abs(p[v]));
      try {
        const p1 = Object.assign({}, p, { [v]: p[v] + h }), p2 = Object.assign({}, p, { [v]: p[v] - h });
        const r = ev(ast, p1).sub(ev(ast, p2)).div(C(2 * h));
        return r.isFinite() ? r : null;
      } catch (e) { return null; }
    });
  }
  M.numDeriv = numDeriv;
  M.fmt = (z, d) => {
    d = d == null ? 6 : d;
    const f = (x) => { const r = +x.toFixed(d); return (Object.is(r, -0) ? 0 : r).toString().replace('.', ','); };
    if (!(z instanceof Cx)) return f(z);
    if (z.real) return f(z.re);
    if (Math.abs(z.re) < 1e-12) return f(z.im) + 'i';
    return f(z.re) + (z.im < 0 ? ' − ' : ' + ') + f(Math.abs(z.im)) + 'i';
  };
  // Forme : développée (aucun produit ni puissance d'une somme) / factorisée (pas une somme en tête)
  function hasSumInside(n, inProd) {
    if (!n || typeof n !== 'object') return false;
    if (n.t === 'paren') return hasSumInside(n.a, inProd);
    if (n.t === 'op' && (n.op === '+' || n.op === '-')) return inProd || hasSumInside(n.a, false) || hasSumInside(n.b, false);
    if (n.t === 'op' && n.op === '*') return hasSumInside(n.a, true) || hasSumInside(n.b, true);
    if (n.t === 'op' && n.op === '^') return hasSumInside(n.a, true);
    if (n.t === 'op' && n.op === '/') return hasSumInside(n.a, true) && false || hasSumInside(n.b, true) && false;
    if (n.t === 'neg') return hasSumInside(n.a, inProd);
    return false;
  }
  M.isExpanded = (ast) => !hasSumInside(ast, false);
  M.isFactored = (ast) => { let n = ast; while (n.t === 'paren') n = n.a; if (n.t === 'neg') n = n.a; return !(n.t === 'op' && (n.op === '+' || n.op === '-')); };
  M.countNodes = function count(n) { if (!n || typeof n !== 'object') return 0; return 1 + ['a', 'b'].reduce((s, k) => s + count(n[k]), 0) + (n.args || []).reduce((s, x) => s + count(x), 0); };
  M.flatten = function flat(n) { if (n.t === 'list') return n.items.flatMap(flat); if (n.t === 'paren') return flat(n.a); return [n]; };
})();
