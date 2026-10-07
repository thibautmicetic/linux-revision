/* Moteur des « TP pratiques » : missions guidées dans le terminal simulé, vérifiées automatiquement. */
(function () {
  'use strict';
  const APP = window.APP;
  const SIM = APP.SIM;
  const perm = APP.perm;
  const HOME = '/home/etudiant';

  // Contexte de vérification passé aux fonctions check(m)
  function makeCtx(world, term, log, events) {
    const A = world.vmA, B = world.vmB;
    const P = (p) => (p.startsWith('~') ? HOME + p.slice(1) : p);
    const node = (p, sys) => (sys || A).resolveRaw(P(p));
    const sh = () => (term.active ? term.active.sh : term.tabs[0].sh);
    const m = {
      world, A, B, term, log, events,
      sh, f: () => sh().f,
      node, exists: (p, sys) => !!node(p, sys),
      isDir: (p, sys) => { const n = node(p, sys); return !!n && n.t === 'd'; },
      isFile: (p, sys) => { const n = node(p, sys); return !!n && n.t === 'f'; },
      content: (p, sys) => { const n = node(p, sys); return n && n.t === 'f' ? n.c : null; },
      mode: (p, sys) => { const n = node(p, sys); return n ? perm.oct(n.mode, (n.mode & 0o7000) ? 4 : 3) : null; },
      perms: (p, sys) => { const n = node(p, sys); return n ? perm.toStr(n.mode) : null; },
      owner: (p, sys) => { const n = node(p, sys); return n ? (sys || A).uname(n.uid) : null; },
      group: (p, sys) => { const n = node(p, sys); return n ? (sys || A).gname(n.gid) : null; },
      user: (u, sys) => (sys || A).user(u),
      inGroup: (u, g, sys) => { const gr = (sys || A).group(g); const us = (sys || A).user(u); return !!gr && !!us && (gr.members.includes(u) || us.gid === gr.gid); },
      group_: (g, sys) => (sys || A).group(g),
      procs: (pred, sys) => [...(sys || A).procs.values()].filter(pred || (() => true)),
      proc: (pred, sys) => [...(sys || A).procs.values()].find(pred),
      cmdline: (re, sys) => [...(sys || A).procs.values()].filter((p) => re.test(p.cmd) && p.state !== 'Z'),
      jobs: () => { const s = sh(); s.refreshJobs(s.f); return s.f.jobs; },
      umask: () => sh().f.umask,
      cwd: () => sh().f.cwd,
      whoami: () => sh().f.user,
      host: () => sh().f.sys.hostname,
      onB: () => term.tabs.some((t) => t.sh.f.sys === B),
      service: (n, sys) => (sys || A).service(n),
      installed: (p, sys) => (sys || A).installed.has(p),
      // a-t-on exécuté une commande correspondant à re ? opts.ok : avec succès ; opts.host : sur cette machine
      ran: (re, o) => { o = o || {}; return log.some((l) => re.test(l.line) && (!o.ok || l.status === 0) && (!o.fail || l.status !== 0) && (!o.host || l.host === o.host) && (!o.user || l.user === o.user) && (!o.cwd || l.cwd === o.cwd)); },
      ranCount: (re) => log.filter((l) => re.test(l.line)).length,
      last: () => log[log.length - 1] || null,
      ev: (type, pred) => events.some((e) => e.type === type && (!pred || pred(e.d))),
      evCount: (type, pred) => events.filter((e) => e.type === type && (!pred || pred(e.d))).length,
      shadow: (u, sys) => { const t = (sys || A).readFile('/etc/shadow') || ''; return t.split('\n').find((l) => l.startsWith(u + ':')) || ''; },
      sshd: (k, sys) => (sys || B).sshdOpt(k, null)
    };
    return m;
  }

  class MissionRunner {
    constructor(mission, container, opts) {
      this.mission = mission;
      this.opts = opts || {};
      this.container = container;
      this.log = []; this.events = [];
      this.world = SIM.createWorld(mission.world || {});
      if (mission.setup) mission.setup(this.world, this);
      this.done = new Array(mission.steps.length).fill(false);
      this.cur = 0;
      this.startedAt = Date.now();
      const prog = APP.progress.state().missions[mission.id];
      this.prevDone = prog && prog.done;
      this.render();
    }
    render() {
      const c = this.container;
      c.innerHTML = '';
      c.classList.add('mission-wrap');
      const side = document.createElement('div'); side.className = 'mission-side';
      const termBox = document.createElement('div'); termBox.className = 'mission-term';
      c.append(side, termBox);
      this.side = side;
      this.term = new SIM.TerminalUI(termBox, { world: this.world, bannerText: (this.mission.banner || 'Debian GNU/Linux 12 — TP pratique : « ' + this.mission.title + ' »\nCompte : etudiant (mot de passe : etudiant) · VM-B : 192.168.1.20 (etudiant / etudiant)\n') + '\n', onCommand: () => this.evaluate() });
      for (const sys of [this.world.vmA, this.world.vmB]) {
        sys.on((type, d) => {
          if (type === 'cmddone') { this.log.push({ line: d.line, status: d.status, user: d.frame.user, host: sys.hostname, sys, cwd: d.cwdBefore, cwdAfter: d.cwd, tty: d.shell.tty }); return; }
          if (['signal', 'stopped', 'continued', 'exit', 'gui', 'ping', 'ssh', 'reboot', 'booted', 'man', 'edit', 'write', 'ufw', 'apt', 'service', 'keygen', 'copyid', 'scp', 'known_hosts', 'sshfail', 'ban', 'unban', 'net', 'hostname', 'dig', 'http', 'tar', 'chmod', 'chown', 'users', 'umask', 'newgrp', 'renice', 'sudo', 'sudo-denied', 'sshd-t', 'termclose', 'pending', 'packet', 'ssh-in', 'frame', 'histexp', 'fs', 'gpasswd'].includes(type)) this.events.push({ type, d, sys, t: Date.now() });
        });
      }
      this.timer = setInterval(() => { if (!this.container.isConnected) { clearInterval(this.timer); this.term.destroy(); return; } this.evaluate(true); }, 1500);
      this.renderSide();
    }
    ctx() { return makeCtx(this.world, this.term, this.log, this.events); }
    evaluate(quiet) {
      const m = this.ctx();
      let changed = false;
      for (let guard = 0; guard < 50 && this.cur < this.mission.steps.length; guard++) {
        const st = this.mission.steps[this.cur];
        let ok = false;
        try { ok = !!st.check(m); } catch (e) { ok = false; }
        if (!ok) break;
        this.done[this.cur] = true;
        APP.progress.missionStep(this.mission.id, this.cur, this.mission.steps.length);
        this.justDone = this.cur;
        this.cur++;
        changed = true;
      }
      if (changed) { this.renderSide(true); if (this.opts.onStep) this.opts.onStep(this); }
    }
    renderSide(anim) {
      const M = this.mission, s = this.side, U = APP.util;
      const all = this.cur >= M.steps.length;
      let h = '<div class="ms-head"><div class="ms-kicker">' + U.esc(M.tp || '') + '</div><h3>' + U.esc(M.title) + '</h3>';
      h += '<div class="ms-bar"><i style="width:' + Math.round((this.cur / M.steps.length) * 100) + '%"></i></div><div class="ms-count">' + this.cur + ' / ' + M.steps.length + ' étapes</div></div>';
      if (M.intro) h += '<div class="ms-intro">' + U.md(M.intro) + '</div>';
      h += '<ol class="ms-steps">';
      M.steps.forEach((st, i) => {
        const cls = this.done[i] ? 'done' : i === this.cur ? 'cur' : 'todo';
        h += '<li class="' + cls + (anim && i === this.justDone ? ' pop' : '') + '"><div class="ms-t">' + U.md(st.t) + '</div>';
        if (this.done[i] && st.why) h += '<div class="ms-why"><b>À retenir</b> ' + U.md(st.why) + '</div>';
        if (i === this.cur) {
          h += '<div class="ms-tools">';
          if (st.hint) h += '<button class="btn sm ghost" data-a="hint">Indice</button>';
          if (st.sol) h += '<button class="btn sm ghost" data-a="sol">Solution</button>';
          h += '<button class="btn sm ghost" data-a="skip" title="Valider sans faire (non compté dans la progression)">Passer</button></div><div class="ms-reveal"></div>';
        }
        h += '</li>';
      });
      h += '</ol>';
      if (all) h += '<div class="ms-done"><b>Mission accomplie !</b> ' + U.md(M.outro || 'Tu as terminé ce TP pratique.') + '</div>';
      h += '<div class="ms-foot"><button class="btn sm ghost" data-a="reset">Recommencer à zéro</button>' + (this.opts.next ? '<button class="btn sm" data-a="next">' + (all ? 'Mission suivante →' : 'Suivante →') + '</button>' : '') + '</div>';
      s.innerHTML = h;
      const st = M.steps[this.cur];
      const rev = s.querySelector('.ms-reveal');
      s.querySelectorAll('[data-a]').forEach((b) => {
        b.onclick = () => {
          const a = b.dataset.a;
          if (a === 'hint') rev.innerHTML = '<div class="ms-hint">' + U.md(st.hint) + '</div>';
          if (a === 'sol') {
            rev.innerHTML = '<div class="ms-sol"><code>' + U.esc(st.sol) + '</code> <button class="btn sm" data-a2="ins">Insérer dans le terminal</button></div>';
            rev.querySelector('[data-a2]').onclick = () => this.term.type(st.sol.split('\n')[0]);
          }
          if (a === 'skip') { this.done[this.cur] = true; this.cur++; this.renderSide(); this.evaluate(true); }
          if (a === 'reset') { if (confirm('Recommencer cette mission avec une machine neuve ?')) { clearInterval(this.timer); this.term.destroy(); const r = new MissionRunner(this.mission, this.container, this.opts); if (this.opts.onReset) this.opts.onReset(r); } }
          if (a === 'next' && this.opts.next) this.opts.next();
        };
      });
      const cur = s.querySelector('li.cur');
      if (cur && anim) cur.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
    destroy() { clearInterval(this.timer); this.term.destroy(); }
  }
  APP.MissionRunner = MissionRunner;
  APP.missionCtx = makeCtx;

  // utilitaires pour écrire les missions
  APP.mh = {
    // crée un fichier dans la VM avec propriétaire etudiant
    file(sys, path, content, mode, owner) {
      const u = sys.user(owner || 'etudiant');
      const n = sys.writeFile(path.replace(/^~/, HOME), content || '', mode == null ? 0o644 : mode, u.uid, u.gid);
      n.uid = u.uid; n.gid = u.gid; if (mode != null) n.mode = mode;
      return n;
    },
    dir(sys, path, mode, owner) {
      const u = sys.user(owner || 'etudiant');
      const d = sys.mkdirp(path.replace(/^~/, HOME), mode == null ? 0o755 : mode, u.uid, u.gid);
      d.uid = u.uid; d.gid = u.gid; if (mode != null) d.mode = mode;
      return d;
    },
    install(sys, pkg) { sys.installed.add(pkg); sys.installPkgFiles(pkg); if (pkg === 'ufw') sys.ufw.installed = true; const svc = SIM.PKGS[pkg].service; if (svc && sys.services[svc]) { sys.services[svc].enabled = true; sys.startService(svc, true); } },
    re: (s) => new RegExp('^\\s*(sudo\\s+)?' + s)
  };
})();
