/* Correcteur des exercices « tape la formule » : équivalence mathématique + explication des erreurs. */
(function () {
  'use strict';
  const APP = (window.APP = window.APP || {});
  const M = APP.math;
  const code = (s) => '`' + s + '`';
  const tx = (ast) => { try { return '$' + M.toTeX(ast) + '$'; } catch (e) { return ''; } };

  function cleanInput(raw, mode) {
    let s = String(raw || '').trim();
    s = s.replace(/[−]/g, '-');
    if (mode === 'antideriv') s = s.replace(/\s*\+\s*(C|c|K|k|cte|constante|cst)\s*$/, '');
    // « f'(x) = … », « y = … », « F(x) = … », « z = … » : on garde la partie droite
    s = s.replace(/^\s*([A-Za-z](\s*'+)?\s*(\(\s*[a-z]\s*\))?|y|z|u_?n|S)\s*=\s*(?!=)/, (m) => (/=\s*$/.test(m) ? '' : m));
    return s;
  }
  function parseSet(s, vars) {
    let t = stripOuter(s.trim().replace(/^S\s*=\s*/i, '')).replace(/\s+(ou|et|or|and)\s+/gi, ';');
    if (t.includes(';')) t = t.split(';');
    else if (/,\s/.test(t) || (t.match(/,/g) || []).length >= 2 || (!/\d,\d/.test(t) && t.includes(','))) t = t.split(',');
    else t = [t];
    return t.map((x) => x.trim()).filter(Boolean).map((x) => M.parse(x.replace(/^[a-z]\s*(_?\d)?\s*=\s*/i, ''), { vars }));
  }
  // retire des accolades/parenthèses/crochets extérieurs seulement s'ils encadrent tout : (1;2) -> 1;2, mais 1+sqrt(2) inchangé
  function stripOuter(t) {
    const pairs = { '{': '}', '(': ')', '[': ']' };
    while (t.length > 1 && pairs[t[0]]) {
      let d = 0, end = -1;
      for (let k = 0; k < t.length; k++) { if ('{(['.includes(t[k])) d++; else if ('})]'.includes(t[k])) { d--; if (d === 0) { end = k; break; } } }
      if (end !== t.length - 1) break;
      t = t.slice(1, -1).trim();
    }
    return t;
  }
  function evalAt(ast, scope) { try { const v = M.evaluate(ast, scope || {}); return v.isFinite() ? v : null; } catch (e) { return null; } }

  APP.mathCheck = function (exo, input) {
    const mode = exo.check || (exo.vars && exo.vars.length ? 'expr' : 'value');
    const vars = exo.vars || [];
    const res = { ok: false, msgs: [], notes: [], expected: exo.answer, mode };
    const raw = String(input || '').trim();
    if (!raw) { res.msgs.push('Tape ta réponse.'); return res; }
    // réponse textuelle
    if (mode === 'text') {
      const n = APP.util.norm;
      const acc = (exo.accept || []).concat(exo.answer ? [exo.answer] : []);
      res.ok = acc.some((a) => n(a) === n(raw));
      if (!res.ok) for (const m of exo.mistakes || []) if ((m.text && n(m.text) === n(raw)) || (m.re && new RegExp(m.re, 'i').test(raw))) { res.msgs.push(m.msg); break; }
      if (!res.ok && !res.msgs.length) res.msgs.push('Ce n\'est pas la réponse attendue.');
      return res;
    }
    const s = cleanInput(raw, mode);
    let uast;
    try {
      if (mode === 'set' || mode === 'tuple') uast = { t: 'list', items: parseSet(s, vars) };
      else uast = M.parse(s, { vars });
    } catch (e) {
      res.parseError = e.message;
      res.msgs.push('Je n\'arrive pas à lire ta formule : ' + e.message + '.');
      if (e.unknown && /^[a-z]$/i.test(e.unknown)) res.msgs.push('Seule' + (vars.length > 1 ? 's les variables ' : ' la variable ') + vars.map(code).join(', ') + (vars.length ? (vars.length > 1 ? ' sont autorisées' : ' est autorisée') : ' : aucune variable ici, donne une valeur') + '.');
      if (/parenth/.test(e.message)) res.msgs.push('Vérifie que chaque parenthèse ouverte est refermée.');
      res.msgs.push('Syntaxe : `*` produit, `/` division, `^` puissance, `sqrt( )`, `exp( )`, `ln( )`, `pi`, `i`.');
      return res;
    }
    if (uast.t === 'eq' && mode !== 'eq') uast = uast.b;
    res.texUser = tx(uast);
    const answers = [exo.answer].concat(exo.answers || []);
    const aasts = [];
    for (const a of answers) { try { aasts.push(mode === 'set' || mode === 'tuple' ? { t: 'list', items: parseSet(a, vars) } : M.parse(cleanInput(a, mode), { vars })); } catch (e) { console.warn('réponse illisible', exo.id, a, e.message); } }
    if (!aasts.length) { res.msgs.push('(exercice mal défini)'); return res; }
    res.texExpected = tx(aasts[0]);

    const mistakes = () => {
      for (const m of exo.mistakes || []) {
        try {
          if (m.re && new RegExp(m.re).test(raw)) return m.msg;
          if (m.expr && (mode === 'set' || mode === 'tuple')) {
            const mv = parseSet(m.expr, vars).map((x) => evalAt(x)), uv2 = uast.items.map((x) => evalAt(x));
            if (mv.length !== uv2.length || mv.some((x) => !x) || uv2.some((x) => !x)) continue;
            if (mode === 'tuple' ? mv.every((v, k) => M.close(v, uv2[k])) : mv.every((v) => uv2.some((u) => M.close(u, v))) && uv2.every((u) => mv.some((v) => M.close(u, v)))) return m.msg;
            continue;
          }
          if (m.expr) {
            const mast = M.parse(m.expr, { vars });
            if (!vars.length) { const a = evalAt(uast), b = evalAt(mast); if (a && b && M.close(a, b)) return m.msg; continue; }
            const pts = M.sampler(vars, exo.domain);
            const r = M.relation(M.sampleVals(uast, pts), M.sampleVals(mast, pts));
            if (r.kind === 'equal' || (mode === 'antideriv' && r.kind === 'diff')) return m.msg;
          }
        } catch (e) { /* ignore */ }
      }
      return null;
    };

    if (mode === 'value') {
      const u = evalAt(uast);
      if (!u) { res.msgs.push('Ta réponse n\'a pas de valeur numérique finie.'); return res; }
      for (const a of aasts) { const v = evalAt(a); if (v && M.close(u, v)) { res.ok = true; return done(res, uast, exo); } }
      const v = evalAt(aasts[0]);
      const mm = mistakes(); if (mm) res.msgs.push(mm);
      if (v) {
        if (M.close(u, v.neg())) res.msgs.push('Erreur de signe : tu as trouvé l\'opposé de la bonne valeur.');
        else if (v.abs() > 1e-12 && M.close(u, M.Cx.of(1).div(v))) res.msgs.push('Tu as donné l\'inverse de la bonne valeur.');
        else if (v.real && u.real && Math.abs(u.re - v.re * 180 / Math.PI) < 1e-6 * Math.max(1, Math.abs(u.re))) res.msgs.push('Tu as répondu en degrés : la réponse est attendue en radians (multiplie par π/180).');
        else if (v.real && u.real && Math.abs(u.re * 180 / Math.PI - v.re) < 1e-6 * Math.max(1, Math.abs(v.re))) res.msgs.push('Tu as répondu en radians : la réponse est attendue en degrés.');
        else if (u.sub(v).abs() <= 2e-3 * Math.max(1, v.abs())) res.msgs.push('C\'est une valeur approchée (' + M.fmt(u, 4) + ') : donne la valeur exacte (fraction, racine, π…).');
        else if (v.abs() > 1e-12 && u.div(v).real && Math.abs(u.div(v).re - Math.round(u.div(v).re)) < 1e-9 && Math.abs(u.div(v).re) > 1) res.msgs.push('Ta valeur est ' + M.fmt(u.div(v).re) + ' fois trop grande : un facteur en trop ?');
        else if (u.abs() > 1e-12 && v.div(u).real && Math.abs(v.div(u).re - Math.round(v.div(u).re)) < 1e-9 && Math.abs(v.div(u).re) > 1) res.msgs.push('Ta valeur est ' + M.fmt(v.div(u).re) + ' fois trop petite : un facteur oublié ?');
        if (!v.real && u.real) res.msgs.push('La réponse attendue est un nombre complexe (partie imaginaire non nulle).');
        res.userVal = M.fmt(u, 4); res.expVal = M.fmt(v, 4);
        res.mine = 'ta réponse vaut ' + M.fmt(u, 4) + ', la bonne réponse vaut ' + M.fmt(v, 4);
      }
      if (!res.msgs.length) res.msgs.push('Ce n\'est pas la bonne valeur : compare avec la correction détaillée pour repérer l\'étape qui diffère.');
      return res;
    }
    if (mode === 'set' || mode === 'tuple') {
      const uvals = uast.items.map((x) => evalAt(x));
      if (uvals.some((x) => !x)) { res.msgs.push('Chaque élément doit être une valeur (sépare-les par des points-virgules ;).'); return res; }
      for (const a of aasts) {
        const avals = a.items.map((x) => evalAt(x));
        if (mode === 'tuple') {
          if (avals.length === uvals.length && avals.every((v, k) => v && M.close(v, uvals[k]))) { res.ok = true; return done(res, uast, exo); }
        } else {
          const used = new Set();
          const allFound = avals.every((v) => { const k = uvals.findIndex((u, j) => !used.has(j) && M.close(u, v)); if (k >= 0) { used.add(k); return true; } return false; });
          if (allFound && used.size === uvals.length) { res.ok = true; return done(res, uast, exo); }
        }
      }
      const avals = aasts[0].items.map((x) => evalAt(x));
      const mm = mistakes(); if (mm) res.msgs.push(mm);
      if (mode === 'tuple') {
        if (avals.length !== uvals.length) res.msgs.push('Il faut ' + avals.length + ' valeur' + (avals.length > 1 ? 's' : '') + ' (tu en as donné ' + uvals.length + ').');
        else avals.forEach((v, k) => { if (!M.close(v, uvals[k])) res.msgs.push('Composante n°' + (k + 1) + ' incorrecte (' + M.fmt(uvals[k], 4) + ').'); });
        if (avals.length === uvals.length && avals.every((v) => uvals.some((u) => M.close(u, v)))) res.msgs.push('Les bonnes valeurs, mais pas dans le bon ordre.');
      } else {
        const missing = avals.filter((v) => !uvals.some((u) => M.close(u, v)));
        const extra = uvals.filter((u) => !avals.some((v) => M.close(u, v)));
        if (missing.length && !extra.length) res.msgs.push('Il manque ' + missing.length + ' solution' + (missing.length > 1 ? 's' : '') + ' (il y en a ' + avals.length + ' au total).');
        else if (extra.length && !missing.length) res.msgs.push('Tu as donné ' + extra.length + ' valeur' + (extra.length > 1 ? 's' : '') + ' en trop : ' + extra.map((x) => M.fmt(x, 4)).join(' ; ') + '.');
        else res.msgs.push(missing.length + ' solution' + (missing.length > 1 ? 's manquent' : ' manque') + ' et ' + extra.length + ' valeur' + (extra.length > 1 ? 's sont fausses' : ' est fausse') + '.');
      }
      return res;
    }
    // expr / eq / antideriv
    const pts = M.sampler(vars.length ? vars : ['x'], exo.domain);
    const uv = M.sampleVals(uast, pts);
    let rel = null;
    for (const a of aasts) {
      const av = M.sampleVals(a, pts);
      if (mode === 'antideriv') {
        rel = M.relation(M.numDeriv(uast, pts, vars[0] || 'x'), M.numDeriv(a, pts, vars[0] || 'x'));
        if (rel.kind === 'equal') {
          // dérivées égales à la précision numérique près : on vérifie aussi que la différence est constante
          const r2 = M.relation(uv, av);
          if (r2.kind === 'equal' || r2.kind === 'diff') { res.ok = true; return done(res, uast, exo); }
        }
      } else {
        rel = M.relation(uv, av);
        if (rel.kind === 'equal') {
          if (exo.form === 'expanded' && !M.isExpanded(uast)) { res.msgs.push('C\'est égal, mais pas sous la forme demandée : il faut **développer** (plus de parenthèses multipliées ni de puissance d\'une somme).'); res.formOnly = true; return res; }
          if (exo.form === 'factored' && !M.isFactored(uast)) { res.msgs.push('C\'est égal, mais pas sous la forme demandée : il faut **factoriser** (écrire un produit).'); res.formOnly = true; return res; }
          if (exo.form === 'simplified' && M.countNodes(uast) > M.countNodes(a) * 2 + 4) res.notes.push('Correct, mais ton expression peut encore être simplifiée.');
          res.ok = true; return done(res, uast, exo);
        }
      }
    }
    const a0 = aasts[0];
    const av0 = M.sampleVals(a0, pts);
    const mm = mistakes(); if (mm) res.msgs.push(mm);
    const v0 = vars[0] || 'x';
    if (mode === 'antideriv') {
      const f = M.numDeriv(a0, pts, v0); // fonction à primitiver
      const rU = M.relation(uv, f);
      const du = M.numDeriv(uast, pts, v0);
      if (rU.kind === 'equal') res.msgs.push('C\'est la fonction à primitiver elle-même : il faut trouver F telle que F\' = f.');
      else {
        // u ≈ f' ? (dérivée au lieu de primitive)
        const fprime = pts.map((p, k) => { const h = 1e-3 * Math.max(1, Math.abs(p[v0])); try { const g = (x) => { const q = Object.assign({}, p, { [v0]: x }); const hh = 1e-4 * Math.max(1, Math.abs(x)); return M.evaluate(a0, Object.assign({}, q, { [v0]: x + hh })).sub(M.evaluate(a0, Object.assign({}, q, { [v0]: x - hh }))).div(M.Cx.of(2 * hh)); }; const r = g(p[v0] + h).sub(g(p[v0] - h)).div(M.Cx.of(2 * h)); return r.isFinite() ? r : null; } catch (e) { return null; } });
        const pairs = uv.map((u, k) => [u, fprime[k]]).filter(([x, y]) => x && y);
        if (pairs.length >= 5 && pairs.every(([x, y]) => x.sub(y).abs() < 2e-3 * Math.max(1, y.abs()))) res.msgs.push('Tu as **dérivé** au lieu de primitiver.');
        const rd = M.relation(du, f);
        if (rd.kind === 'ratio' && !res.msgs.some((x) => /dérivé/.test(x))) {
          if (M.close(rd.r, M.Cx.of(-1))) res.msgs.push('Erreur de signe : la dérivée de ta réponse vaut −f.');
          else res.msgs.push('Presque : la dérivée de ta réponse vaut ' + M.fmt(rd.r, 4) + ' × f. Ajuste le coefficient (pense à diviser par la dérivée intérieure, ex. ∫cos(ax) = sin(ax)/a).');
        }
      }
    } else if (rel) {
      if (rel.kind === 'ratio') {
        if (M.close(rel.r, M.Cx.of(-1))) res.msgs.push('Erreur de signe : ta réponse est l\'opposée de la bonne.');
        else res.msgs.push('Ta réponse vaut ' + M.fmt(rel.r, 4) + ' × la bonne : il y a un facteur en trop ou oublié.');
      } else if (rel.kind === 'diff') res.msgs.push('Ta réponse diffère de la bonne d\'une constante (' + M.fmt(rel.d, 4) + ').');
      else if (rel.kind === 'domain') res.msgs.push('Ta formule n\'est pas définie aux mêmes points que la bonne réponse (division par 0, racine ou ln d\'un négatif ?).');
    }
    if (!res.msgs.length) res.msgs.push('Ta formule n\'est pas équivalente à la réponse attendue.');
    // contre-exemple
    if (vars.length) {
      const k = uv.findIndex((u, j) => u && av0[j] && !M.close(u, av0[j]));
      const p = pts[k];
      if (k >= 0 && mode !== 'antideriv') res.mine = 'par exemple pour ' + vars.map((v) => v + ' = ' + M.fmt(p[v], 3)).join(', ') + ' : ta réponse vaut ' + M.fmt(uv[k], 4) + ' au lieu de ' + M.fmt(av0[k], 4);
    }
    return res;
  };
  function done(res, uast, exo) { if (exo.form === 'exact' && /\d\.\d{3,}/.test(JSON.stringify(uast))) res.notes.push('Juste, mais préfère la valeur exacte à une valeur décimale.'); return res; }
})();
