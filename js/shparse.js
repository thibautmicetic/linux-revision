/* Analyse lexicale et syntaxique d'une ligne de commande bash (sous-ensemble).
   Utilisé par le correcteur d'exercices ET par le terminal simulé. */
(function () {
  'use strict';
  const APP = (window.APP = window.APP || {});

  // Un mot = liste de "parts" : {s, q} avec q = 0 (non protégé), 1 ('...' ou \x : littéral), 2 ("...")
  // ou {sub: 'commande', q} pour $(...) / `...`
  function lex(src) {
    const toks = [];
    let i = 0, word = null;
    const n = src.length;
    const add = (p) => { (word = word || []).push(p); };
    const addChar = (c, q) => {
      if (!word) word = [];
      const last = word[word.length - 1];
      if (last && last.q === q && last.s !== undefined && last.sub === undefined) last.s += c; else word.push({ s: c, q });
    };
    const flush = () => { if (word) { toks.push({ t: 'w', parts: word }); word = null; } };
    const op = (v) => { flush(); toks.push({ t: 'op', v }); };

    function readSub(start) { // start = index après "$("
      let depth = 1, j = start, q = null;
      while (j < n) {
        const c = src[j];
        if (q) { if (c === q) q = null; else if (c === '\\' && q === '"') j++; }
        else if (c === "'" || c === '"') q = c;
        else if (c === '(') depth++;
        else if (c === ')') { depth--; if (!depth) break; }
        j++;
      }
      return [src.slice(start, j), j + 1];
    }

    while (i < n) {
      const c = src[i];
      if (c === ' ' || c === '\t') { flush(); i++; continue; }
      if (c === '\n') { op('nl'); i++; continue; }
      if (c === '#' && !word) { while (i < n && src[i] !== '\n') i++; continue; }
      if (c === "'") {
        const j = src.indexOf("'", i + 1);
        const end = j < 0 ? n : j;
        add({ s: src.slice(i + 1, end), q: 1 });
        i = end + 1; continue;
      }
      if (c === '"') {
        let j = i + 1; if (!word) word = [];
        let buf = '';
        const pushBuf = () => { if (buf) { word.push({ s: buf, q: 2 }); buf = ''; } };
        let any = false;
        while (j < n && src[j] !== '"') {
          if (src[j] === '\\' && j + 1 < n && '"\\$`'.includes(src[j + 1])) { pushBuf(); word.push({ s: src[j + 1], q: 1 }); j += 2; any = true; continue; }
          if (src[j] === '$' && src[j + 1] === '(') { pushBuf(); const [cmd, k] = readSub(j + 2); word.push({ sub: cmd, q: 2 }); j = k; any = true; continue; }
          if (src[j] === '`') { pushBuf(); const k = src.indexOf('`', j + 1); const e = k < 0 ? n : k; word.push({ sub: src.slice(j + 1, e), q: 2 }); j = e + 1; any = true; continue; }
          buf += src[j]; j++;
        }
        if (buf || !any) word.push({ s: buf, q: 2 });
        i = j + 1; continue;
      }
      if (c === '\\') { if (i + 1 < n) { if (src[i + 1] === '\n') { i += 2; continue; } addChar(src[i + 1], 1); } i += 2; continue; }
      if (c === '$' && src[i + 1] === '(' && src[i + 2] === '(') { const e = src.indexOf('))', i + 3); if (e > 0) { add({ arith: src.slice(i + 3, e), q: 0 }); i = e + 2; continue; } }
      if (c === '$' && src[i + 1] === '(') { const [cmd, k] = readSub(i + 2); add({ sub: cmd, q: 0 }); i = k; continue; }
      if (c === '`') { const k = src.indexOf('`', i + 1); const e = k < 0 ? n : k; add({ sub: src.slice(i + 1, e), q: 0 }); i = e + 1; continue; }
      if (c === '$' && src[i + 1] === '{') { const k = src.indexOf('}', i); const e = k < 0 ? n - 1 : k; addChar(src.slice(i, e + 1), 0); i = e + 1; continue; }
      if (src.startsWith('&&', i)) { op('&&'); i += 2; continue; }
      if (src.startsWith('||', i)) { op('||'); i += 2; continue; }
      if (src.startsWith('&>>', i)) { op('&>>'); i += 3; continue; }
      if (src.startsWith('&>', i)) { op('&>'); i += 2; continue; }
      if (c === '>' || c === '<') {
        let fd = '';
        if (word && word.length === 1 && word[0].q === 0 && /^\d$/.test(word[0].s)) { fd = word[0].s; word = null; }
        flush();
        let v = c;
        if (c === '>' && src[i + 1] === '>') { v = '>>'; i++; }
        else if (c === '<' && src[i + 1] === '<' && src[i + 2] === '<') { v = '<<<'; i += 2; }
        i++;
        if (v === '>' && src[i] === '&' && /\d/.test(src[i + 1] || '')) { toks.push({ t: 'op', v: (fd || '1') + '>&' + src[i + 1] }); i += 2; continue; }
        toks.push({ t: 'op', v: fd + v });
        continue;
      }
      if (c === '|') { op('|'); i++; continue; }
      if (c === ';') { op(';'); i++; continue; }
      if (c === '&') { op('&'); i++; continue; }
      if (c === '(' || c === ')') { op(c); i++; continue; }
      addChar(c, 0); i++;
    }
    flush();
    return toks;
  }

  // Texte "brut" d'un mot (sans guillemets) — utilisé par le correcteur
  function wordText(w) {
    return w.parts.map((p) => (p.arith !== undefined ? '$((' + p.arith + '))' : p.sub !== undefined ? '$(' + p.sub.trim() + ')' : p.s)).join('');
  }
  function isPlain(w, s) { return w && w.t === 'w' && w.parts.length === 1 && w.parts[0].q === 0 && w.parts[0].s === s; }

  const KW_END = new Set(['then', 'elif', 'else', 'fi', 'do', 'done', '}']);

  // ---- parseur récursif ----
  function parse(src) {
    const toks = lex(src);
    let pos = 0;
    const peek = () => toks[pos];
    const next = () => toks[pos++];
    const isOp = (t, v) => t && t.t === 'op' && (v === undefined || t.v === v);
    const skipNl = () => { while (isOp(peek(), 'nl') || isOp(peek(), ';')) pos++; };
    const err = (m) => { const e = new Error(m); e.syntax = true; throw e; };

    function parseList(stops) {
      const items = [];
      for (;;) {
        while (isOp(peek(), 'nl') || isOp(peek(), ';')) pos++;
        const t = peek();
        if (!t) break;
        if (t.t === 'w' && stops && stops.some((s) => isPlain(t, s))) break;
        if (isOp(t, ')')) break;
        if (isOp(t)) {
          if (t.v === '&' || t.v === '&&' || t.v === '||' || t.v === '|') err("erreur de syntaxe près du symbole inattendu « " + t.v + " »");
        }
        const node = parseAndOr(stops);
        let bg = false;
        if (isOp(peek(), '&')) { pos++; bg = true; }
        else if (isOp(peek(), ';') || isOp(peek(), 'nl')) pos++;
        items.push({ node, bg });
      }
      return { type: 'list', items };
    }
    function parseAndOr(stops) {
      const first = parsePipe(stops);
      const rest = [];
      while (isOp(peek(), '&&') || isOp(peek(), '||')) {
        const o = next().v;
        while (isOp(peek(), 'nl')) pos++;
        if (!peek()) err("erreur de syntaxe : fin de ligne inattendue après « " + o + " »");
        rest.push({ op: o, p: parsePipe(stops) });
      }
      return { type: 'andor', first, rest };
    }
    function parsePipe(stops) {
      let bang = false;
      if (isPlain(peek(), '!')) { pos++; bang = true; }
      const cmds = [parseCommand(stops)];
      while (isOp(peek(), '|')) {
        pos++;
        while (isOp(peek(), 'nl')) pos++;
        if (!peek()) err('erreur de syntaxe : fin de ligne inattendue après « | »');
        cmds.push(parseCommand(stops));
      }
      return { type: 'pipe', bang, cmds };
    }
    function expectWord(s) { const t = next(); if (!isPlain(t, s)) err("erreur de syntaxe : « " + s + " » attendu"); }
    function parseCommand(stops) {
      const t = peek();
      if (!t) err('erreur de syntaxe : commande attendue');
      if (t.t === 'w' && t.parts.length === 1 && t.parts[0].q === 0) {
        const k = t.parts[0].s;
        if (k === 'if') {
          pos++;
          const clauses = [];
          let cond = parseList(['then']); expectWord('then');
          let body = parseList(['elif', 'else', 'fi']);
          clauses.push({ cond, body });
          let els = null;
          for (;;) {
            if (isPlain(peek(), 'elif')) { pos++; cond = parseList(['then']); expectWord('then'); body = parseList(['elif', 'else', 'fi']); clauses.push({ cond, body }); continue; }
            if (isPlain(peek(), 'else')) { pos++; els = parseList(['fi']); }
            expectWord('fi'); break;
          }
          return withRedirs({ type: 'if', clauses, els });
        }
        if (k === 'while' || k === 'until') {
          pos++;
          const cond = parseList(['do']); expectWord('do');
          const body = parseList(['done']); expectWord('done');
          return withRedirs({ type: 'while', until: k === 'until', cond, body });
        }
        if (k === 'for') {
          pos++;
          const v = next(); if (!v || v.t !== 'w') err('erreur de syntaxe après for');
          const words = [];
          skipNlOnly();
          if (isPlain(peek(), 'in')) { pos++; while (peek() && peek().t === 'w') words.push(next()); }
          while (isOp(peek(), ';') || isOp(peek(), 'nl')) pos++;
          expectWord('do');
          const body = parseList(['done']); expectWord('done');
          return withRedirs({ type: 'for', name: wordText(v), words, body });
        }
        if (k === '{') { pos++; const body = parseList(['}']); expectWord('}'); return withRedirs({ type: 'group', body }); }
        if (KW_END.has(k)) err("erreur de syntaxe près du symbole inattendu « " + k + " »");
      }
      if (isOp(t, '(')) { pos++; const body = parseList(); if (!isOp(next(), ')')) err('erreur de syntaxe : « ) » attendu'); return withRedirs({ type: 'subshell', body }); }
      const cmd = { type: 'cmd', assigns: [], words: [], redirs: [] };
      for (;;) {
        const x = peek();
        if (!x) break;
        if (x.t === 'op') {
          if (/^(\d?>>?|\d?<|&>>?|<<<|\d>&\d)$/.test(x.v)) {
            pos++;
            if (/>&\d$/.test(x.v)) { cmd.redirs.push({ op: x.v }); continue; }
            const tg = next();
            if (!tg || tg.t !== 'w') err("erreur de syntaxe près du symbole inattendu « newline »");
            cmd.redirs.push({ op: x.v, target: tg });
            continue;
          }
          break;
        }
        if (!cmd.words.length && x.parts.length >= 1 && x.parts[0].q === 0 && /^[A-Za-z_][A-Za-z0-9_]*=/.test(x.parts[0].s)) {
          pos++;
          const first = x.parts[0].s; const eq = first.indexOf('=');
          const val = { t: 'w', parts: [{ s: first.slice(eq + 1), q: 0 }].concat(x.parts.slice(1)) };
          cmd.assigns.push({ name: first.slice(0, eq), word: val });
          continue;
        }
        if (cmd.words.length === 0 && stops && stops.some((s) => isPlain(x, s))) break;
        pos++;
        cmd.words.push(x);
      }
      if (!cmd.words.length && !cmd.assigns.length && !cmd.redirs.length) {
        const x = peek();
        err("erreur de syntaxe près du symbole inattendu « " + (x ? (x.t === 'op' ? x.v : wordText(x)) : 'newline') + " »");
      }
      return cmd;
    }
    function skipNlOnly() { while (isOp(peek(), 'nl')) pos++; }
    function withRedirs(node) {
      node.redirs = [];
      while (peek() && peek().t === 'op' && /^(\d?>>?|\d?<|&>>?)$/.test(peek().v)) { const o = next().v; node.redirs.push({ op: o, target: next() }); }
      return node;
    }

    const list = parseList();
    if (pos < toks.length) { const t = toks[pos]; err("erreur de syntaxe près du symbole inattendu « " + (t.t === 'op' ? t.v : wordText(t)) + " »"); }
    return list;
  }

  APP.sh = { lex, parse, wordText, isPlain };
})();
