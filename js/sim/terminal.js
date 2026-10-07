/* Interface du terminal simulé : onglets, saisie, historique, complétion, pager, éditeur nano, top, fenêtres graphiques. */
(function () {
  'use strict';
  const APP = window.APP;
  const SIM = APP.SIM;
  const esc = APP.util.esc;
  const MAX_NODES = 2500;

  function el(tag, cls, html) { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }

  class TerminalUI {
    constructor(root, opts) {
      opts = opts || {};
      this.root = root;
      this.world = opts.world || SIM.createWorld(opts.worldOpts);
      this.tabs = [];
      this.active = null;
      this.onCommand = opts.onCommand || null;
      this.build();
      this.addTab();
      if (opts.banner !== false) this.banner(opts.bannerText);
    }
    build() {
      const r = this.root;
      r.classList.add('term');
      r.innerHTML = '';
      this.head = el('div', 'term-head');
      this.tabBar = el('div', 'term-tabs');
      this.addBtn = el('button', 'term-tab-add', '+');
      this.addBtn.title = 'Ouvrir un nouveau terminal (même machine)';
      this.addBtn.onclick = () => { this.addTab(); };
      this.head.append(this.tabBar, this.addBtn);
      this.desk = el('div', 'term-desk');
      this.body = el('div', 'term-body');
      this.screen = el('div', 'term-screen');
      this.line = el('div', 'term-line');
      this.promptEl = el('span', 'term-prompt');
      this.input = el('input', 'term-input');
      this.input.setAttribute('autocomplete', 'off'); this.input.setAttribute('autocapitalize', 'off'); this.input.setAttribute('autocorrect', 'off'); this.input.setAttribute('spellcheck', 'false');
      this.input.setAttribute('aria-label', 'Saisie de commande');
      this.line.append(this.promptEl, this.input);
      this.body.append(this.screen, this.line);
      this.overlay = el('div', 'term-overlay hidden');
      this.keys = el('div', 'term-keys');
      const K = [['Tab', 'Tab'], ['Ctrl+C', '^C'], ['Ctrl+Z', '^Z'], ['Up', '↑'], ['Down', '↓'], ['Ctrl+L', 'clear'], ['|', '|'], ['&', '&'], ['~', '~'], ['/', '/'], ['-', '-'], ['>', '>']];
      for (const [k, l] of K) { const b = el('button', 'tk', esc(l)); b.type = 'button'; b.onmousedown = (e) => e.preventDefault(); b.onclick = () => this.virtualKey(k); this.keys.append(b); }
      r.append(this.head, this.desk, this.body, this.overlay, this.keys);
      this.body.addEventListener('mouseup', () => { if (!window.getSelection().toString()) this.input.focus({ preventScroll: true }); });
      this.input.addEventListener('keydown', (e) => this.onKey(e));
      // touches dirigées vers les écrans plein terminal (less, man, top) quel que soit l'élément actif
      this.docKey = (e) => {
        if (!this.overlayKey || !this.root.isConnected || this.overlay.classList.contains('hidden')) return;
        if (this.overlayKey(e)) { e.preventDefault(); e.stopPropagation(); }
      };
      document.addEventListener('keydown', this.docKey, true);
    }
    banner(text) {
      const t = this.active;
      this.writeTo(t, text || 'Debian GNU/Linux 12 (bookworm) — terminal simulé (tout fonctionne hors connexion)\nCompte : etudiant (mot de passe : etudiant, membre de sudo) · VM-B (binôme) : 192.168.1.20\nTape « help » pour l\'aide. Raccourcis : Tab complète · ↑/↓ historique · Ctrl+C interrompt · Ctrl+Z suspend · Ctrl+L efface\n\n', 'dim');
    }
    /* ---------- onglets ---------- */
    addTab(o) {
      o = o || {};
      const n = this.tabs.length;
      const idx = this.tabs.length ? Math.max(...this.tabs.map((t) => t.n)) + 1 : 1;
      const tab = { n: idx, out: el('div', 'term-out'), hist: -1, draft: '', reading: null, closedFlag: false, windows: [] };
      const ttys = ['pts/0', 'pts/1', 'pts/2', 'pts/3', 'pts/4'];
      const pids = [1200, 1350, 1480, 1590, 1690];
      const proxy = this.makeProxy(tab);
      const sys = o.sys || this.world.vmA;
      if (pids[n] && !sys.procs.has(pids[n])) { /* ok */ }
      tab.sh = new SIM.Shell(proxy, sys, { pid: pids[n] && !sys.procs.has(pids[n]) ? pids[n] : undefined, tty: ttys[n] || 'pts/' + n, ppid: 1180 });
      this.world.shells.push(tab.sh);
      tab.btn = el('button', 'term-tab', 'Terminal ' + idx + ' <span class="x" title="Fermer">×</span>');
      tab.btn.onclick = (e) => { if (e.target.classList.contains('x')) { this.closeTab(tab); } else this.select(tab); };
      this.tabBar.append(tab.btn);
      this.tabs.push(tab);
      this.select(tab);
      if (n > 0) this.writeTo(tab, 'Nouveau terminal (' + tab.sh.tty + ') sur la même machine. Utile pour agir sur un processus lancé dans l\'autre terminal.\n\n', 'dim');
      return tab;
    }
    select(tab) {
      this.active = tab;
      for (const t of this.tabs) t.btn.classList.toggle('on', t === tab);
      this.screen.innerHTML = '';
      this.screen.append(tab.out);
      this.renderPrompt();
      this.renderDesk();
      this.scroll();
      setTimeout(() => this.input.focus({ preventScroll: true }), 0);
    }
    closeTab(tab) {
      // fermeture du terminal : SIGHUP aux processus du shell (sauf nohup)
      const sh = tab.sh;
      for (const fr of sh.stack.slice().reverse()) {
        for (const j of fr.jobs) for (const pid of j.pids) for (const q of [pid].concat(SIM.descendants(j.sys, pid))) j.sys.signal(q, 1, null);
        for (const p of [...fr.sys.procs.values()]) if (p.ppid === fr.proc.pid && !p.nohup) fr.sys.signal(p.pid, 1, null);
        fr.sys.exitProc(fr.proc.pid, 129);
      }
      for (const p of sh.fgProcs) p.sys ? null : sh.sys.signal(p.pid, 1, null);
      this.world.shells = this.world.shells.filter((s) => s !== sh);
      this.world.vmA.emit('termclose', { tty: sh.tty });
      const i = this.tabs.indexOf(tab);
      tab.btn.remove(); this.tabs.splice(i, 1);
      if (!this.tabs.length) { this.addTab(); this.banner(); return; }
      this.select(this.tabs[Math.max(0, i - 1)]);
    }
    /* ---------- proxy « terminal » donné au shell ---------- */
    makeProxy(tab) {
      const ui = this;
      return {
        write(s, cls) { ui.writeTo(tab, s, cls); },
        readLine(prompt, o) { return ui.readLine(tab, prompt, o || {}); },
        pager(title, text) { return ui.pager(title, text); },
        editor(o) { return ui.editor(o); },
        fullscreen(o) { return ui.fullscreen(o); },
        openWindow(o) { return ui.openWindow(tab, o); },
        clear() { tab.out.innerHTML = ''; },
        closed() { setTimeout(() => ui.closeTab(tab), 300); },
        rebooted() { tab.out.innerHTML = ''; tab.windows.forEach((w) => w.destroy()); tab.windows = []; ui.writeTo(tab, '[  OK  ] Reached target multi-user.target - Multi-User System.\n[  OK  ] Started ssh.service - OpenBSD Secure Shell server.\n\nDebian GNU/Linux 12 ' + tab.sh.sys.hostname + ' tty1\n\n(la machine a redémarré — tu es reconnecté)\n\n', 'dim'); tab.sh.resetBase(); if (ui.active === tab) ui.renderPrompt(); ui.renderDesk(); }
      };
    }
    writeTo(tab, s, cls) {
      if (!s) return;
      const out = tab.out;
      const last = out.lastChild;
      if (last && last.nodeType === 1 && last.dataset.cls === (cls || 'out') && last.tagName === 'SPAN') last.textContent += s;
      else { const sp = el('span', 't-' + (cls || 'out')); sp.dataset.cls = cls || 'out'; sp.textContent = s; out.append(sp); }
      while (out.childNodes.length > MAX_NODES) out.removeChild(out.firstChild);
      if (out.textContent.length > 400000) { while (out.textContent.length > 300000 && out.firstChild) out.removeChild(out.firstChild); }
      if (tab === this.active) this.scroll();
    }
    scroll() { requestAnimationFrame(() => { this.body.scrollTop = this.body.scrollHeight; }); }
    promptHtml(sh) {
      const p = sh.prompt();
      return '<span class="p-user' + (p.root ? ' root' : '') + '">' + esc(p.user + '@' + p.host) + '</span>:<span class="p-path">' + esc(p.path) + '</span>' + esc(p.sym) + ' ';
    }
    promptText(sh) { const p = sh.prompt(); return p.user + '@' + p.host + ':' + p.path + p.sym + ' '; }
    renderPrompt() {
      const t = this.active;
      if (!t) return;
      if (t.reading) { this.promptEl.innerHTML = esc(t.reading.prompt); this.input.type = t.reading.password ? 'password' : 'text'; this.line.classList.remove('busy'); return; }
      this.input.type = 'text';
      if (t.sh.busy) { this.promptEl.innerHTML = ''; this.line.classList.add('busy'); return; }
      this.line.classList.remove('busy');
      this.promptEl.innerHTML = this.promptHtml(t.sh);
    }
    readLine(tab, prompt, o) {
      return new Promise((resolve) => {
        tab.reading = { prompt, password: !!o.password, resolve };
        tab.sh.inputWaiter = (v) => { if (tab.reading) { const r = tab.reading; tab.reading = null; r.resolve(v); } };
        if (this.active === tab) { this.renderPrompt(); this.input.value = ''; this.input.focus({ preventScroll: true }); }
      });
    }
    /* ---------- clavier ---------- */
    virtualKey(k) {
      const inp = this.input;
      if (['|', '&', '~', '/', '-', '>'].includes(k)) { const s = inp.selectionStart || inp.value.length; inp.value = inp.value.slice(0, s) + k + inp.value.slice(inp.selectionEnd || s); inp.selectionStart = inp.selectionEnd = s + 1; inp.focus(); return; }
      const ev = { key: k === 'Up' ? 'ArrowUp' : k === 'Down' ? 'ArrowDown' : k === 'Tab' ? 'Tab' : k.slice(-1).toLowerCase(), ctrlKey: k.startsWith('Ctrl'), preventDefault() {}, stopPropagation() {} };
      if (this.overlayKey && !this.overlay.classList.contains('hidden')) { this.overlayKey(ev); return; }
      this.onKey(ev);
      inp.focus();
    }
    onKey(e) {
      const t = this.active; if (!t) return;
      const sh = t.sh;
      const inp = this.input;
      if (this.overlayKey && !this.overlay.classList.contains('hidden')) return;
      if (e.ctrlKey && (e.key === 'c' || e.key === 'C')) {
        e.preventDefault();
        if (t.reading) { this.writeTo(t, t.reading.prompt + (t.reading.password ? '' : inp.value) + '^C\n', 'out'); inp.value = ''; const r = t.reading; t.reading = null; r.resolve(null); sh.signalFg(2); this.renderPrompt(); return; }
        if (sh.busy) { this.writeTo(t, '^C', 'out'); sh.signalFg(2); return; }
        this.writeTo(t, this.promptText(sh), 'prompt'); this.writeTo(t, inp.value + '^C\n', 'out'); inp.value = ''; t.hist = -1; return;
      }
      if (e.ctrlKey && (e.key === 'z' || e.key === 'Z')) { e.preventDefault(); if (sh.busy && !t.reading) { this.writeTo(t, '^Z', 'out'); sh.signalFg(20); } return; }
      if (e.ctrlKey && (e.key === 'l' || e.key === 'L')) { e.preventDefault(); t.out.innerHTML = ''; return; }
      if (e.ctrlKey && (e.key === 'd' || e.key === 'D')) { e.preventDefault(); if (t.reading) { const r = t.reading; t.reading = null; this.writeTo(t, t.reading ? '' : '\n', 'out'); r.resolve(null); this.renderPrompt(); return; } if (!sh.busy && !inp.value) this.run('exit', true); return; }
      if (e.ctrlKey && (e.key === 'u' || e.key === 'U')) { e.preventDefault(); inp.value = inp.value.slice(inp.selectionStart || 0); return; }
      if (e.ctrlKey && (e.key === 'a' || e.key === 'A')) { e.preventDefault(); inp.selectionStart = inp.selectionEnd = 0; return; }
      if (e.ctrlKey && (e.key === 'e' || e.key === 'E')) { e.preventDefault(); inp.selectionStart = inp.selectionEnd = inp.value.length; return; }
      if (e.key === 'Enter') {
        e.preventDefault();
        const v = inp.value;
        if (t.reading) { this.writeTo(t, t.reading.prompt + (t.reading.password ? '' : v) + '\n', 'out'); inp.value = ''; const r = t.reading; t.reading = null; r.resolve(v); this.renderPrompt(); return; }
        if (sh.busy) return;
        inp.value = '';
        this.run(v);
        return;
      }
      if (t.reading) return;
      if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        if (sh.busy) return;
        e.preventDefault();
        const h = sh.f.history;
        if (!h.length) return;
        if (t.hist === -1) { t.draft = inp.value; t.hist = h.length; }
        t.hist += e.key === 'ArrowUp' ? -1 : 1;
        if (t.hist < 0) t.hist = 0;
        if (t.hist >= h.length) { t.hist = -1; inp.value = t.draft; }
        else inp.value = h[t.hist];
        setTimeout(() => { inp.selectionStart = inp.selectionEnd = inp.value.length; }, 0);
        return;
      }
      if (e.key === 'Tab') {
        e.preventDefault();
        if (sh.busy) return;
        const pos = inp.selectionStart != null ? inp.selectionStart : inp.value.length;
        const before = inp.value.slice(0, pos), after = inp.value.slice(pos);
        const r = sh.complete(before);
        if (!r) return;
        if (r.list && r.line === before) {
          if (t.lastTab === before) { this.writeTo(t, this.promptText(sh), 'prompt'); this.writeTo(t, inp.value + '\n' + r.list.join('  ') + '\n', 'out'); }
          t.lastTab = before;
          return;
        }
        inp.value = r.line + after;
        inp.selectionStart = inp.selectionEnd = r.line.length;
        t.lastTab = null;
      }
    }
    async run(line, silent) {
      const t = this.active, sh = t.sh;
      sh.beforePrompt();
      if (!silent) { this.writeTo(t, '', 'out'); const pr = el('span', 't-prompt'); pr.innerHTML = this.promptHtml(sh); pr.dataset.cls = 'promptx'; t.out.append(pr); this.writeTo(t, line + '\n', 'cmd'); }
      t.hist = -1;
      const p = sh.submit(line);
      this.renderPrompt();
      await p;
      sh.beforePrompt();
      if (this.onCommand) { try { this.onCommand(line, sh, t); } catch (e) { console.error(e); } }
      this.renderPrompt();
      this.renderDesk();
      this.scroll();
    }
    // exécuter une commande comme si elle avait été tapée (bouton « essayer »)
    type(cmd) { if (this.active.sh.busy) return; this.input.value = cmd; this.input.focus(); }

    /* ---------- pager (less, man) ---------- */
    pager(title, text) {
      return new Promise((resolve) => {
        const o = this.overlay;
        o.innerHTML = '';
        o.classList.remove('hidden');
        const box = el('div', 'ov-pager');
        const pre = el('pre', 'ov-pre'); pre.textContent = text;
        const foot = el('div', 'ov-foot', '<span>' + esc(title) + ' — ↑/↓ ou Espace pour défiler · <b>q</b> pour quitter</span>');
        const q = el('button', 'btn sm', 'Quitter (q)'); q.onclick = () => done();
        foot.append(q);
        box.append(pre, foot); o.append(box);
        const done = () => { o.classList.add('hidden'); o.innerHTML = ''; this.overlayKey = null; this.input.focus(); resolve(); };
        this.overlayKey = (e) => {
          if (e.key === 'q' || e.key === 'Q' || e.key === 'Escape' || (e.ctrlKey && e.key === 'c')) { e.preventDefault(); done(); return true; }
          if (e.key === ' ' || e.key === 'PageDown') { e.preventDefault(); pre.scrollTop += pre.clientHeight - 30; return true; }
          if (e.key === 'ArrowDown' || e.key === 'j') { e.preventDefault(); pre.scrollTop += 24; return true; }
          if (e.key === 'ArrowUp' || e.key === 'k') { e.preventDefault(); pre.scrollTop -= 24; return true; }
          if (e.key === 'b' || e.key === 'PageUp') { e.preventDefault(); pre.scrollTop -= pre.clientHeight - 30; return true; }
          if (e.key === 'g') { pre.scrollTop = 0; e.preventDefault(); return true; }
          if (e.key === 'G') { pre.scrollTop = pre.scrollHeight; e.preventDefault(); return true; }
          if (e.metaKey || e.altKey) return false;
          return true;
        };
        this.input.value = '';
        this.input.focus();
      });
    }
    /* ---------- éditeur façon nano ---------- */
    editor(opt) {
      return new Promise((resolve) => {
        const o = this.overlay;
        o.innerHTML = ''; o.classList.remove('hidden');
        const box = el('div', 'ov-editor');
        const head = el('div', 'ed-head', '<span>' + (opt.mode === 'vi' ? 'vi (simulé)' : 'GNU nano 7.2') + '</span><span>' + esc(opt.title || '') + (opt.readonly ? ' <i>[ lecture seule ]</i>' : '') + '</span><span class="ed-mod"></span>');
        const ta = el('textarea', 'ed-ta'); ta.value = opt.content || ''; ta.spellcheck = false;
        ta.setAttribute('autocapitalize', 'off'); ta.setAttribute('autocorrect', 'off');
        const msg = el('div', 'ed-msg', opt.mode === 'vi' ? '(éditeur simplifié : utilise les boutons ou Ctrl+O / Ctrl+X comme dans nano)' : '');
        const foot = el('div', 'ed-foot');
        const mk = (k, l, fn) => { const b = el('button', 'ed-k', '<b>' + k + '</b> ' + l); b.type = 'button'; b.onclick = fn; foot.append(b); return b; };
        let saved = null, modified = false;
        const lines = () => ta.value.split('\n').length - (ta.value.endsWith('\n') ? 1 : 0);
        const save = () => {
          if (opt.readonly) { msg.textContent = '[ Erreur d\'écriture de ' + (opt.title || '') + ' : Permission non accordée ]'; msg.className = 'ed-msg err'; return false; }
          if (ta.value && !ta.value.endsWith('\n')) ta.value += '\n';
          saved = ta.value; modified = false; head.querySelector('.ed-mod').textContent = '';
          msg.className = 'ed-msg'; msg.textContent = '[ ' + lines() + ' ligne' + (lines() > 1 ? 's' : '') + ' écrite' + (lines() > 1 ? 's' : '') + ' ]';
          return true;
        };
        const close = () => { o.classList.add('hidden'); o.innerHTML = ''; this.overlayKey = null; this.input.focus(); resolve(saved); };
        const quit = () => {
          if (!modified) return close();
          msg.className = 'ed-msg ask'; msg.innerHTML = 'Écrire le tampon modifié ? ';
          const y = el('button', 'btn sm', 'O (oui)'), n = el('button', 'btn sm ghost', 'N (non)'), c = el('button', 'btn sm ghost', 'Annuler');
          y.onclick = () => { if (save()) close(); }; n.onclick = () => close(); c.onclick = () => { msg.textContent = ''; ta.focus(); };
          msg.append(y, n, c);
          this.edAsk = { y: y.onclick, n: n.onclick, c: c.onclick };
        };
        mk('^O', 'Écrire', () => { save(); ta.focus(); });
        mk('^X', 'Quitter', quit);
        mk('^W', 'Chercher', () => { const w = prompt('Rechercher :'); if (w) { const i = ta.value.indexOf(w, ta.selectionEnd); const j = i < 0 ? ta.value.indexOf(w) : i; if (j >= 0) { ta.focus(); ta.setSelectionRange(j, j + w.length); } else msg.textContent = '[ « ' + w + ' » introuvable ]'; } });
        mk('^K', 'Couper ligne', () => { const v = ta.value, p = ta.selectionStart; const a = v.lastIndexOf('\n', p - 1) + 1; let b = v.indexOf('\n', p); b = b < 0 ? v.length : b + 1; ta.value = v.slice(0, a) + v.slice(b); ta.selectionStart = ta.selectionEnd = a; modified = true; head.querySelector('.ed-mod').textContent = 'Modifié'; });
        ta.addEventListener('input', () => { modified = true; head.querySelector('.ed-mod').textContent = 'Modifié'; });
        ta.addEventListener('keydown', (e) => {
          if (this.edAsk && !e.ctrlKey) { const k = e.key.toLowerCase(); if (k === 'o' || k === 'y') { e.preventDefault(); const f = this.edAsk.y; this.edAsk = null; f(); return; } if (k === 'n') { e.preventDefault(); const f = this.edAsk.n; this.edAsk = null; f(); return; } }
          if (e.ctrlKey && (e.key === 'o' || e.key === 's')) { e.preventDefault(); save(); }
          else if (e.ctrlKey && e.key === 'x') { e.preventDefault(); quit(); }
          else if (e.ctrlKey && e.key === 'c' && this.edAsk) { e.preventDefault(); this.edAsk = null; msg.textContent = ''; }
          else if (e.key === 'Tab') { e.preventDefault(); const p = ta.selectionStart; ta.value = ta.value.slice(0, p) + '\t' + ta.value.slice(ta.selectionEnd); ta.selectionStart = ta.selectionEnd = p + 1; modified = true; }
        });
        box.append(head, ta, msg, foot); o.append(box);
        this.overlayKey = () => false;
        setTimeout(() => ta.focus(), 0);
      });
    }
    /* ---------- plein écran (top/htop) ---------- */
    fullscreen(opt) {
      return new Promise((resolve) => {
        const o = this.overlay;
        o.innerHTML = ''; o.classList.remove('hidden');
        const box = el('div', 'ov-full');
        const pre = el('pre', 'ov-pre top');
        const bar = el('div', 'ov-foot', '<span>' + esc(opt.help || '') + '</span>');
        const qb = el('button', 'btn sm', 'Quitter (q)'); bar.append(qb);
        const flash = el('div', 'ov-flash');
        box.append(pre, flash, bar); o.append(box);
        let promptState = null;
        const render = () => {
          const t = opt.render();
          pre.innerHTML = esc(t).replace(/#HEAD#(.*)/g, '<span class="top-head">$1</span>').replace(/#HOT#(.*)/g, '<span class="top-hot">$1</span>');
        };
        const timer = setInterval(() => { if (!promptState) render(); }, opt.interval || 2000);
        const api = {
          close: () => { clearInterval(timer); o.classList.add('hidden'); o.innerHTML = ''; this.overlayKey = null; this.input.focus(); resolve(); },
          refresh: render,
          flash: (m) => { flash.textContent = m; setTimeout(() => { flash.textContent = ''; }, 3000); },
          prompt: (text) => new Promise((res) => {
            flash.innerHTML = '';
            const lab = el('span', '', esc(text)); const inp = el('input', 'ov-in'); flash.append(lab, inp);
            promptState = { res, inp };
            setTimeout(() => inp.focus(), 0);
            inp.addEventListener('keydown', (e) => { e.stopPropagation(); if (e.key === 'Enter') { const v = inp.value; flash.innerHTML = ''; promptState = null; this.input.focus(); res(v); } if (e.key === 'Escape' || (e.ctrlKey && e.key === 'c')) { flash.innerHTML = ''; promptState = null; this.input.focus(); res(null); } });
          })
        };
        qb.onclick = () => api.close();
        this.overlayKey = (e) => {
          if (promptState) return false;
          if (e.metaKey || e.altKey) return false;
          const k = e.ctrlKey && (e.key === 'c' || e.key === 'C') ? 'Ctrl+C' : e.key;
          opt.onKey(k, api);
          return true;
        };
        render();
        this.input.value = '';
        this.input.focus();
      });
    }
    /* ---------- fenêtres graphiques simulées ---------- */
    openWindow(tab, o) {
      const ui = this;
      const w = {
        o, tab, paused: false, onClose: null,
        setPaused(p) { w.paused = p; ui.renderDesk(); },
        destroy() { tab.windows = tab.windows.filter((x) => x !== w); ui.renderDesk(); },
        close() { if (w.onClose) w.onClose(); }
      };
      tab.windows.push(w);
      this.renderDesk();
      return w;
    }
    renderDesk() {
      const wins = this.tabs.flatMap((t) => t.windows);
      this.desk.innerHTML = '';
      this.desk.classList.toggle('hidden', !wins.length);
      if (!wins.length) return;
      this.desk.append(el('span', 'desk-l', 'Fenêtres :'));
      for (const w of wins) {
        const chip = el('div', 'win' + (w.paused ? ' paused' : ''));
        let label = esc(w.o.name) + ' <small>PID ' + w.o.pid + '</small>';
        if (w.o.kind === 'clock') label = '🕒 ' + label + ' <span class="clk"></span>';
        if (w.paused) label += ' <em>(suspendu)</em>';
        chip.innerHTML = label;
        if (w.o.path || w.o.name === 'gedit' || w.o.name === 'mousepad' || w.o.name === 'kwrite' || w.o.name === 'xemacs') {
          const b = el('button', 'win-b', 'ouvrir'); b.title = 'Éditer le fichier dans la fenêtre';
          b.onclick = async () => {
            if (w.paused) return;
            const sys = w.o.sys; const path = w.o.path;
            let node = path ? sys.resolveRaw(path) : null;
            const r = await this.editor({ title: path || 'Sans titre', content: node ? node.c : '', readonly: node ? !sys.can(node, w.o.cred, 2) : false });
            if (r != null && path) {
              node = sys.resolveRaw(path);
              if (node) { node.c = r; node.mtime = Date.now(); }
              else { const parts = path.split('/'); const name = parts.pop(); const parent = sys.resolveRaw(parts.join('/') || '/'); if (parent && sys.can(parent, w.o.cred, 2)) sys.newFile(parent, name, r, w.o.cred, w.o.umask); }
              sys.emit('write', { path }); sys.emit('edit', { path });
            }
          };
          chip.append(b);
        }
        const x = el('button', 'win-x', '×'); x.title = 'Fermer la fenêtre'; x.onclick = () => w.close();
        chip.append(x);
        this.desk.append(chip);
      }
      if (!this.clockTimer) this.clockTimer = setInterval(() => { for (const c of this.desk.querySelectorAll('.win:not(.paused) .clk')) c.textContent = new Date().toTimeString().slice(0, 8); if (!this.root.isConnected) { clearInterval(this.clockTimer); this.clockTimer = null; } }, 1000);
    }
    destroy() { clearInterval(this.clockTimer); document.removeEventListener('keydown', this.docKey, true); }
  }
  SIM.TerminalUI = TerminalUI;
})();
