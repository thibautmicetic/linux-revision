/* Affichage des maths : rendu KaTeX des $…$, widgets interactifs (cercle trigonométrique, courbes), clavier mathématique. */
(function () {
  'use strict';
  const APP = window.APP;
  const M = APP.math;
  const esc = APP.util.esc;

  // LaTeX -> HTML (sans planter)
  APP.tex = function (t, display) {
    if (!window.katex) return esc(t);
    try { return window.katex.renderToString(t, { displayMode: !!display, throwOnError: false, strict: 'ignore', trust: false }); }
    catch (e) { return '<code>' + esc(t) + '</code>'; }
  };
  // Remplace les $…$ et $$…$$ des nœuds texte d'un élément par du KaTeX
  APP.renderMath = function (root) {
    if (!root || !window.katex) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(n) {
        if (!n.nodeValue.includes('$')) return NodeFilter.FILTER_REJECT;
        const p = n.parentElement;
        if (!p || p.closest('code, pre, script, style, textarea, input, .katex, .nomath')) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    // fusion des nœuds texte adjacents coupés au milieu d'une formule (rare)
    for (const n of nodes) {
      const s = n.nodeValue;
      const re = /\$\$([\s\S]+?)\$\$|\$([^$]+?)\$/g;
      if (!re.test(s)) continue;
      re.lastIndex = 0;
      const frag = document.createDocumentFragment();
      let last = 0, m;
      while ((m = re.exec(s))) {
        if (m.index > last) frag.append(document.createTextNode(s.slice(last, m.index)));
        const span = document.createElement(m[1] ? 'div' : 'span');
        span.className = m[1] ? 'mathd' : 'mathi';
        span.innerHTML = APP.tex(m[1] || m[2], !!m[1]);
        frag.append(span);
        last = m.index + m[0].length;
      }
      if (last < s.length) frag.append(document.createTextNode(s.slice(last)));
      n.parentNode.replaceChild(frag, n);
    }
    APP.mountWidgets(root);
  };

  /* ================= widgets ================= */
  APP.mountWidgets = function (root) {
    for (const w of root.querySelectorAll('.widget[data-w]:not([data-on])')) {
      w.dataset.on = '1';
      try {
        if (w.dataset.w === 'cercle') unitCircle(w);
        else if (w.dataset.w === 'plot') plot(w, (w.dataset.f || 'x').split(';'), (w.dataset.x || '-6.3;6.3').split(';').map(Number), w.dataset.y ? w.dataset.y.split(';').map(Number) : null);
      } catch (e) { console.error(e); w.textContent = '(widget indisponible)'; }
    }
  };

  // valeurs exactes sur le cercle (multiples de π/6 et π/4)
  const REF = { 0: ['1', '0'], 30: ['\\frac{\\sqrt{3}}{2}', '\\frac{1}{2}'], 45: ['\\frac{\\sqrt{2}}{2}', '\\frac{\\sqrt{2}}{2}'], 60: ['\\frac{1}{2}', '\\frac{\\sqrt{3}}{2}'], 90: ['0', '1'] };
  const TANREF = { 0: '0', 30: '\\frac{\\sqrt{3}}{3}', 45: '1', 60: '\\sqrt{3}', 90: null };
  function exactTrig(deg) {
    deg = ((deg % 360) + 360) % 360;
    if (deg % 15 !== 0 || (deg % 30 !== 0 && deg % 45 !== 0)) return null;
    const q = Math.floor(deg / 90) % 4;
    let r = deg % 90; let ref = r;
    if (q === 1 || q === 3) ref = 90 - r; // cos et sin s'échangent
    let c, s;
    const base = REF[r];
    if (q === 0) { c = base[0]; s = base[1]; }
    else if (q === 1) { c = neg(base[1]); s = base[0]; }
    else if (q === 2) { c = neg(base[0]); s = neg(base[1]); }
    else { c = base[1]; s = neg(base[0]); }
    void ref;
    let t;
    if (deg % 180 === 90) t = null;
    else { const tr = TANREF[deg % 180 <= 90 ? deg % 180 : 180 - (deg % 180)]; t = deg % 180 > 90 ? neg(tr) : tr; }
    return { c, s, t };
  }
  function neg(x) { return x === '0' ? '0' : '-' + x; }
  APP.exactTrig = exactTrig;
  function radTex(deg) {
    const d = ((deg % 360) + 360) % 360;
    if (d === 0) return '0';
    const g = gcd(d, 180), num = d / g, den = 180 / g;
    return (num === 1 ? '' : num) + '\\pi' + (den === 1 ? '' : '/' + den);
  }
  APP.radTex = (deg) => { const d = ((deg % 360) + 360) % 360; if (d === 0) return '0'; const g = gcd(d, 180), num = d / g, den = 180 / g; return den === 1 ? (num === 1 ? '\\pi' : num + '\\pi') : '\\frac{' + (num === 1 ? '' : num) + '\\pi}{' + den + '}'; };
  function gcd(a, b) { while (b) [a, b] = [b, a % b]; return a; }

  function unitCircle(el) {
    const S = 300, R = 112, cx = S / 2, cy = S / 2;
    el.classList.add('wcircle');
    el.innerHTML = '<svg viewBox="0 0 ' + S + ' ' + S + '" class="uc" role="img" aria-label="Cercle trigonométrique"></svg><div class="uc-info"></div><div class="uc-btns"></div>';
    const svg = el.querySelector('svg'), info = el.querySelector('.uc-info'), btns = el.querySelector('.uc-btns');
    const NS = 'http://www.w3.org/2000/svg';
    const mk = (t, a) => { const e = document.createElementNS(NS, t); for (const k in a) e.setAttribute(k, a[k]); svg.append(e); return e; };
    mk('line', { x1: 8, y1: cy, x2: S - 8, y2: cy, class: 'uc-axis' }); mk('line', { x1: cx, y1: 8, x2: cx, y2: S - 8, class: 'uc-axis' });
    mk('circle', { cx, cy, r: R, class: 'uc-c' });
    for (let d = 0; d < 360; d += 15) {
      if (d % 30 && d % 45) continue;
      const a = d * Math.PI / 180;
      mk('circle', { cx: cx + R * Math.cos(a), cy: cy - R * Math.sin(a), r: 3, class: 'uc-tick', 'data-d': d });
    }
    const arc = mk('path', { class: 'uc-arc' });
    const pc = mk('line', { class: 'uc-cos' }), ps = mk('line', { class: 'uc-sin' });
    const ray = mk('line', { class: 'uc-ray', x1: cx, y1: cy });
    const dot = mk('circle', { r: 8, class: 'uc-dot' });
    let deg = 60;
    const draw = () => {
      const a = deg * Math.PI / 180, x = cx + R * Math.cos(a), y = cy - R * Math.sin(a);
      ray.setAttribute('x2', x); ray.setAttribute('y2', y);
      dot.setAttribute('cx', x); dot.setAttribute('cy', y);
      pc.setAttribute('x1', cx); pc.setAttribute('y1', cy); pc.setAttribute('x2', x); pc.setAttribute('y2', cy);
      ps.setAttribute('x1', x); ps.setAttribute('y1', cy); ps.setAttribute('x2', x); ps.setAttribute('y2', y);
      const r2 = 26, large = ((deg % 360) + 360) % 360 > 180 ? 1 : 0;
      arc.setAttribute('d', 'M ' + (cx + r2) + ' ' + cy + ' A ' + r2 + ' ' + r2 + ' 0 ' + large + ' 0 ' + (cx + r2 * Math.cos(a)) + ' ' + (cy - r2 * Math.sin(a)));
      const ex = exactTrig(Math.round(deg));
      const rad = Math.round(deg) % 15 === 0 && ex ? radTex(Math.round(deg)) : (deg * Math.PI / 180).toFixed(3).replace('.', '{,}');
      const f = (v) => v.toFixed(3).replace('.', '{,}');
      let h = '<div class="uc-row"><b>Angle</b> ' + APP.tex('\\theta = ' + (ex ? APP.radTex(Math.round(deg)) : rad) + '\\ \\text{rad} = ' + Math.round(deg) + '^\\circ') + '</div>';
      h += '<div class="uc-row cos"><b>cos</b> ' + APP.tex('\\cos\\theta = ' + (ex ? ex.c.replace(/\\frac/g, '\\tfrac') : f(Math.cos(a)))) + '</div>';
      h += '<div class="uc-row sin"><b>sin</b> ' + APP.tex('\\sin\\theta = ' + (ex ? ex.s.replace(/\\frac/g, '\\tfrac') : f(Math.sin(a)))) + '</div>';
      h += '<div class="uc-row"><b>tan</b> ' + APP.tex('\\tan\\theta = ' + (ex ? (ex.t == null ? '\\text{non défini}' : ex.t.replace(/\\frac/g, '\\tfrac')) : Math.abs(Math.cos(a)) < 1e-9 ? '\\text{non défini}' : f(Math.tan(a)))) + '</div>';
      info.innerHTML = h;
    };
    const setFrom = (ev) => {
      const r = svg.getBoundingClientRect();
      const px = ((ev.clientX - r.left) / r.width) * S - cx, py = cy - ((ev.clientY - r.top) / r.height) * S;
      let d = Math.atan2(py, px) * 180 / Math.PI; if (d < 0) d += 360;
      const snaps = [0, 30, 45, 60, 90, 120, 135, 150, 180, 210, 225, 240, 270, 300, 315, 330, 360];
      const near = snaps.find((s) => Math.abs(s - d) < 5);
      deg = near != null ? near % 360 : Math.round(d);
      draw();
    };
    let drag = false;
    svg.addEventListener('pointerdown', (e) => { drag = true; svg.setPointerCapture(e.pointerId); setFrom(e); });
    svg.addEventListener('pointermove', (e) => { if (drag) setFrom(e); });
    svg.addEventListener('pointerup', () => { drag = false; });
    for (const [l, d] of [['π/6', 30], ['π/4', 45], ['π/3', 60], ['π/2', 90], ['2π/3', 120], ['3π/4', 135], ['5π/6', 150], ['π', 180], ['−π/3', 300], ['−π/4', 315], ['−π/6', 330]]) {
      const b = document.createElement('button'); b.type = 'button'; b.className = 'chipb'; b.textContent = l; b.onclick = () => { deg = d; draw(); }; btns.append(b);
    }
    draw();
  }

  // Courbes : f = ['sin(x)', 'cos(x)'], xr = [min, max], yr optionnel
  const COLORS = ['var(--accent)', 'var(--c3)', 'var(--c4)', 'var(--c2)', 'var(--ko)'];
  function plot(el, fs, xr, yr) {
    const W = 560, H = 300;
    el.classList.add('wplot');
    const fns = fs.map((f) => { try { return { src: f.trim(), ast: M.parse(f.trim(), { vars: ['x'] }) }; } catch (e) { return null; } }).filter(Boolean);
    const N = 480;
    const series = fns.map((f) => { const pts = []; for (let k = 0; k <= N; k++) { const x = xr[0] + (k / N) * (xr[1] - xr[0]); let y = null; try { const v = M.evaluate(f.ast, { x }); if (v.real && isFinite(v.re)) y = v.re; } catch (e) { y = null; } pts.push([x, y]); } return pts; });
    if (!yr) {
      const ys = series.flat().map((p) => p[1]).filter((y) => y != null).sort((a, b) => a - b);
      const lo = ys[Math.floor(ys.length * 0.02)] || -1, hi = ys[Math.floor(ys.length * 0.98)] || 1;
      const pad = (hi - lo) * 0.12 || 1;
      yr = [Math.min(lo - pad, 0 - pad * 0.2), Math.max(hi + pad, pad * 0.2)];
    }
    const X = (x) => ((x - xr[0]) / (xr[1] - xr[0])) * W, Y = (y) => H - ((y - yr[0]) / (yr[1] - yr[0])) * H;
    let svg = '<svg viewBox="0 0 ' + W + ' ' + H + '" class="plot" preserveAspectRatio="none">';
    // grille
    const step = (r) => { const raw = r / 8, p = Math.pow(10, Math.floor(Math.log10(raw))); return [1, 2, 5, 10].map((m) => m * p).find((s) => s >= raw); };
    const sx = Math.abs(xr[1] - xr[0]) > 4 && /sin|cos|tan/.test(fs.join()) ? Math.PI / 2 : step(xr[1] - xr[0]), sy = step(yr[1] - yr[0]);
    for (let x = Math.ceil(xr[0] / sx) * sx; x <= xr[1]; x += sx) svg += '<line class="pg" x1="' + X(x) + '" x2="' + X(x) + '" y1="0" y2="' + H + '"/>';
    for (let y = Math.ceil(yr[0] / sy) * sy; y <= yr[1]; y += sy) svg += '<line class="pg" y1="' + Y(y) + '" y2="' + Y(y) + '" x1="0" x2="' + W + '"/>';
    if (yr[0] < 0 && yr[1] > 0) svg += '<line class="pa" x1="0" x2="' + W + '" y1="' + Y(0) + '" y2="' + Y(0) + '"/>';
    if (xr[0] < 0 && xr[1] > 0) svg += '<line class="pa" y1="0" y2="' + H + '" x1="' + X(0) + '" x2="' + X(0) + '"/>';
    series.forEach((pts, k) => {
      let d = '', pen = false, prev = null;
      for (const [x, y] of pts) {
        if (y == null || y < yr[0] - (yr[1] - yr[0]) * 3 || y > yr[1] + (yr[1] - yr[0]) * 3 || (prev != null && Math.abs(y - prev) > (yr[1] - yr[0]) * 0.9)) { pen = false; prev = y; continue; }
        d += (pen ? 'L' : 'M') + X(x).toFixed(1) + ' ' + Y(y).toFixed(1) + ' '; pen = true; prev = y;
      }
      svg += '<path d="' + d + '" fill="none" stroke="' + COLORS[k % COLORS.length] + '" stroke-width="2.4" vector-effect="non-scaling-stroke"/>';
    });
    svg += '</svg>';
    const lab = (v) => (Math.abs(v - Math.round(v)) < 1e-9 ? String(Math.round(v)) : v.toFixed(2)).replace('.', ',');
    const legend = fns.map((f, k) => '<span><i style="background:' + COLORS[k % COLORS.length] + '"></i>' + APP.tex('y = ' + M.toTeX(f.ast)) + '</span>').join('');
    el.innerHTML = '<div class="plot-box">' + svg + '<span class="pl-x0">' + lab(xr[0]) + '</span><span class="pl-x1">' + lab(xr[1]) + '</span><span class="pl-y0">' + lab(yr[0]) + '</span><span class="pl-y1">' + lab(yr[1]) + '</span></div><div class="plot-leg">' + legend + '</div>';
  }
  APP.plot = plot;

  /* ================= clavier mathématique ================= */
  const KEYS = [['x', 'x'], ['^', '^'], ['(', '('], [')', ')'], ['×', '*'], ['÷', '/'], ['√', 'sqrt('], ['π', 'pi'], ['eˣ', 'exp('], ['ln', 'ln('], ['sin', 'sin('], ['cos', 'cos('], ['tan', 'tan('], ['arctan', 'arctan('], ['i', 'i'], ['|x|', 'abs('], [';', ' ; ']];
  APP.mathKeypad = function (input, vars) {
    const box = document.createElement('div');
    box.className = 'mkeys';
    const ks = KEYS.filter(([l]) => l !== 'x' || (vars || []).includes('x')).concat((vars || []).filter((v) => v !== 'x').map((v) => [v, v]));
    for (const [l, ins] of ks) {
      const b = document.createElement('button'); b.type = 'button'; b.textContent = l; b.tabIndex = -1;
      b.onmousedown = (e) => e.preventDefault();
      b.onclick = () => {
        const s = input.selectionStart != null ? input.selectionStart : input.value.length, e = input.selectionEnd != null ? input.selectionEnd : s;
        input.value = input.value.slice(0, s) + ins + input.value.slice(e);
        input.selectionStart = input.selectionEnd = s + ins.length;
        input.focus(); input.dispatchEvent(new Event('input'));
      };
      box.append(b);
    }
    return box;
  };
})();
